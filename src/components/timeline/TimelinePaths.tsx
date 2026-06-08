import type { TimelineEvent } from '../../data/types';
import { ROW_HEIGHT, LANE_WIDTH, STROKE_WIDTH, stringToColor } from '../../utils/timeline';

interface TimelinePathsProps {
  events: TimelineEvent[];
  laneToColumn: Map<string, number>;
}

export function TimelinePaths({ events, laneToColumn }: TimelinePathsProps) {
  return (
    <>
      {events.map((event, index) => {
        const y = index * ROW_HEIGHT + ROW_HEIGHT / 2;
        const x = 20 + (laneToColumn.get(event.lane) ?? 0) * LANE_WIDTH;
        const color = stringToColor(event.lane);

        const paths = [];

        // If there's a next node in the SAME lane, draw a straight line to it
        const nextInLaneIndex = events.findIndex((e, i) => i > index && e.lane === event.lane);
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
          const parentIndex = events.findIndex((e, i) => i > index && e.lane === event.from);
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
          const sourceIndex = events.findIndex((e, i) => i > index && e.lane === event.from);
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
    </>
  );
}
