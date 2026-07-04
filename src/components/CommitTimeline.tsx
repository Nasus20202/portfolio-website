import { useState } from 'react';
import { timelineEvents } from '../data';
import type { TimelineEvent } from '../data/types';
import { ROW_HEIGHT, LANE_WIDTH } from '../utils/timeline';
import { useTimelineLayout } from '../hooks/useTimelineLayout';
import { TimelinePaths } from './timeline/TimelinePaths';
import { TimelineNodes } from './timeline/TimelineNodes';
import { CommitDetailsPanel } from './timeline/CommitDetailsPanel';

export default function CommitTimeline({
  selectFirstByDefault = true,
}: {
  selectFirstByDefault?: boolean;
}) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    selectFirstByDefault ? timelineEvents[0] || null : null
  );

  const { laneToColumn, maxCol } = useTimelineLayout(timelineEvents);

  const totalHeight = timelineEvents.length * ROW_HEIGHT;
  const textX = 20 + maxCol * LANE_WIDTH + LANE_WIDTH;

  // Estimate required width based on lane width, text offset, and longest title
  const maxTitleLength = Math.max(...timelineEvents.map((e) => e.title.length), 0);
  const calculatedWidth = textX + maxTitleLength * 10.5;

  const handleNodeClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Graph Area */}
      <div className="relative border border-zinc-800 bg-zinc-900/50 rounded-xl p-4 md:p-6 overflow-x-auto no-scrollbar">
        <svg
          width={calculatedWidth}
          height={totalHeight}
          style={{ minWidth: '100%' }}
          data-testid="timeline-svg"
        >
          {/* 1. Draw Paths First (so they are behind nodes) */}
          <TimelinePaths events={timelineEvents} laneToColumn={laneToColumn} />

          {/* 2. Draw Nodes */}
          <TimelineNodes
            events={timelineEvents}
            laneToColumn={laneToColumn}
            selectedEvent={selectedEvent}
            onNodeClick={handleNodeClick}
            textX={textX}
          />
        </svg>
      </div>

      {/* Terminal Panel */}
      <CommitDetailsPanel selectedEvent={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
