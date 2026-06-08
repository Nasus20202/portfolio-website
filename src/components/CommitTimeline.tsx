import { useState, useMemo } from 'react';
import { personalInfo, timelineEvents } from '../data/content';
import type { TimelineEvent } from '../data/types';
import { motion, AnimatePresence } from 'framer-motion';
import { getShortHash } from '../utils/hash';
import { X } from 'lucide-react';

// Dimensions and styling constants
const ROW_HEIGHT = 80;
const LANE_WIDTH = 40;
const NODE_RADIUS = 6;
const STROKE_WIDTH = 2;

function stringToColor(str: string) {
  if (str === 'main') return '#a1a1aa'; // zinc-400
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return `hsl(${h}, 70%, 65%)`;
}

export default function CommitTimeline({
  selectFirstByDefault = true,
}: {
  selectFirstByDefault?: boolean;
}) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    selectFirstByDefault ? timelineEvents[0] || null : null
  );

  // Dynamic lane to column mapping
  const laneToColumn = useMemo(() => {
    const map = new Map<string, number>();
    map.set('main', 0);
    const activeColumns: (string | null)[] = ['main'];

    // Process oldest to newest
    const reversed = [...timelineEvents].reverse();
    for (const event of reversed) {
      if (!map.has(event.lane)) {
        let col = 1;
        while (activeColumns[col] != null) {
          col++;
        }
        activeColumns[col] = event.lane;
        map.set(event.lane, col);
      }
      if (event.type === 'merge' && event.from) {
        const col = map.get(event.from);
        if (col !== undefined) {
          activeColumns[col] = null; // Free up the column
        }
      }
    }
    return map;
  }, []);

  const getEventHash = (event: TimelineEvent) => {
    if (event.commitHash) return event.commitHash;
    return getShortHash(event.description || event.title + event.date);
  };

  const totalHeight = timelineEvents.length * ROW_HEIGHT;
  const maxCol = Math.max(...Array.from(laneToColumn.values()));
  const textX = 20 + maxCol * LANE_WIDTH + LANE_WIDTH;

  const handleNodeClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Graph Area */}
      <div className="relative border border-zinc-800 bg-zinc-900/50 rounded-xl p-4 md:p-6 overflow-x-auto no-scrollbar">
        <svg
          width="100%"
          height={totalHeight}
          className="min-w-75"
          style={{ minHeight: totalHeight }}
          data-testid="timeline-svg"
        >
          {/* 1. Draw Paths First (so they are behind nodes) */}
          {timelineEvents.map((event, index) => {
            const y = index * ROW_HEIGHT + ROW_HEIGHT / 2;
            const x = 20 + (laneToColumn.get(event.lane) ?? 0) * LANE_WIDTH;
            const color = stringToColor(event.lane);

            const paths = [];

            // If there's a next node in the SAME lane, draw a straight line to it
            const nextInLaneIndex = timelineEvents.findIndex(
              (e, i) => i > index && e.lane === event.lane
            );
            if (nextInLaneIndex !== -1) {
              const nextY = nextInLaneIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
              paths.push(
                <line
                  key={`line-${event.id}`}
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={nextY}
                  stroke={color}
                  strokeWidth={STROKE_WIDTH}
                />
              );
            }

            // Draw branch/merge S-curves
            if (event.type === 'branch' && event.from) {
              const parentIndex = timelineEvents.findIndex(
                (e, i) => i > index && e.lane === event.from
              );
              if (parentIndex !== -1) {
                const pY = parentIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
                const pX = 20 + (laneToColumn.get(event.from) ?? 0) * LANE_WIDTH;

                const curveEndY = Math.max(y, pY - ROW_HEIGHT);
                const midY = (pY + curveEndY) / 2;
                const d = `M ${pX} ${pY} C ${pX} ${midY}, ${x} ${midY}, ${x} ${curveEndY}`;

                paths.push(
                  <path
                    key={`branch-curve-${event.id}`}
                    d={d}
                    fill="none"
                    stroke={color}
                    strokeWidth={STROKE_WIDTH}
                  />
                );

                if (curveEndY > y) {
                  paths.push(
                    <line
                      key={`branch-line-${event.id}`}
                      x1={x}
                      y1={curveEndY}
                      x2={x}
                      y2={y}
                      stroke={color}
                      strokeWidth={STROKE_WIDTH}
                    />
                  );
                }
              }
            } else if (event.type === 'merge' && event.from) {
              const sourceIndex = timelineEvents.findIndex(
                (e, i) => i > index && e.lane === event.from
              );
              if (sourceIndex !== -1) {
                const sY = sourceIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
                const sX = 20 + (laneToColumn.get(event.from) ?? 0) * LANE_WIDTH;
                const sourceColor = stringToColor(event.from);

                const curveStartY = y + ROW_HEIGHT;
                const actualCurveStartY = Math.min(sY, curveStartY);
                const midY = (actualCurveStartY + y) / 2;
                const d = `M ${sX} ${actualCurveStartY} C ${sX} ${midY}, ${x} ${midY}, ${x} ${y}`;

                paths.push(
                  <path
                    key={`merge-curve-${event.id}`}
                    d={d}
                    fill="none"
                    stroke={sourceColor}
                    strokeWidth={STROKE_WIDTH}
                  />
                );

                if (sY > actualCurveStartY) {
                  paths.push(
                    <line
                      key={`merge-line-${event.id}`}
                      x1={sX}
                      y1={sY}
                      x2={sX}
                      y2={actualCurveStartY}
                      stroke={sourceColor}
                      strokeWidth={STROKE_WIDTH}
                    />
                  );
                }
              }
            }

            return <g key={`paths-${event.id}`}>{paths}</g>;
          })}

          {/* 2. Draw Nodes */}
          {timelineEvents.map((event, index) => {
            const y = index * ROW_HEIGHT + ROW_HEIGHT / 2;
            const x = 20 + (laneToColumn.get(event.lane) ?? 0) * LANE_WIDTH;
            const color = stringToColor(event.lane);
            const isSelected = selectedEvent?.id === event.id;

            return (
              <g
                key={`node-${event.id}`}
                className="cursor-pointer group"
                onClick={() => handleNodeClick(event)}
                data-testid={`node-${event.id}`}
              >
                {/* Invisible larger circle for easier clicking */}
                <circle cx={x} cy={y} r={16} fill="transparent" />

                {/* Node circle */}
                <circle
                  cx={x}
                  cy={y}
                  r={NODE_RADIUS}
                  fill={isSelected ? color : '#18181b'} // filled if selected, hollow if not
                  stroke={color}
                  strokeWidth={isSelected ? 0 : STROKE_WIDTH}
                  style={{ transformOrigin: `${x}px ${y}px` }}
                  className="transition-transform duration-200 group-hover:scale-125"
                />

                {/* Selection ring */}
                {isSelected && (
                  <circle
                    cx={x}
                    cy={y}
                    r={NODE_RADIUS + 4}
                    fill="none"
                    stroke={color}
                    strokeWidth={1}
                    className="opacity-50 animate-pulse"
                  />
                )}

                {/* Text Label */}
                <text
                  x={textX}
                  y={y + 4} // slight vertical adjustment
                  fill={isSelected ? '#fff' : '#a1a1aa'}
                  className={`text-sm md:text-base font-mono transition-colors duration-200 group-hover:text-white ${isSelected ? 'font-bold' : ''}`}
                >
                  {event.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Terminal Panel */}
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <motion.div
            key={selectedEvent.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-lg overflow-hidden sticky bottom-0 z-50"
            data-testid="terminal-panel"
          >
            <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-3 flex items-center gap-2">
              <div className="text-xs font-mono text-zinc-500 flex-1">
                {personalInfo.alias.toLowerCase()}@portfolio: ~/experience$ git show{' '}
                {getEventHash(selectedEvent)}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-zinc-500 hover:text-white transition-colors p-1"
                aria-label="Close details"
                data-testid="close-details-btn"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 md:p-6 font-mono text-sm sm:text-base text-zinc-300 space-y-4">
              <div>
                <span className="text-amber-400">commit {getEventHash(selectedEvent)}</span>
                <br />
                <span className="text-zinc-500">
                  Author: {personalInfo.name} &lt;{personalInfo.email}&gt;
                </span>
                <br />
                <span className="text-zinc-500">Date: {selectedEvent.date}</span>
              </div>
              <div className="pl-4 border-l-2 border-zinc-700">
                <span className="text-white font-bold">{selectedEvent.title}</span>
                {selectedEvent.description && (
                  <p className="mt-2 text-zinc-400 whitespace-pre-wrap">
                    {selectedEvent.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
