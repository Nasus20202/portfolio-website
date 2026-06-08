import type { TimelineEvent } from '../../data/types';
import {
  ROW_HEIGHT,
  LANE_WIDTH,
  NODE_RADIUS,
  STROKE_WIDTH,
  stringToColor,
} from '../../utils/timeline';

interface TimelineNodesProps {
  events: TimelineEvent[];
  laneToColumn: Map<string, number>;
  selectedEvent: TimelineEvent | null;
  onNodeClick: (event: TimelineEvent) => void;
  textX: number;
}

export function TimelineNodes({
  events,
  laneToColumn,
  selectedEvent,
  onNodeClick,
  textX,
}: TimelineNodesProps) {
  return (
    <>
      {events.map((event, index) => {
        const y = index * ROW_HEIGHT + ROW_HEIGHT / 2;
        const x = 20 + (laneToColumn.get(event.lane) ?? 0) * LANE_WIDTH;
        const color = stringToColor(event.lane);
        const isSelected = selectedEvent?.id === event.id;

        return (
          <g
            key={`node-${event.id}`}
            className="cursor-pointer group"
            onClick={() => onNodeClick(event)}
            data-testid={`node-${event.id}`}
          >
            {/* Invisible larger circle for easier clicking */}
            <circle cx={x} cy={y} r={16} fill="transparent" />

            {/* Node circle */}
            <circle
              cx={x}
              cy={y}
              r={NODE_RADIUS}
              fill={isSelected ? color : '#18181b'}
              stroke={color}
              strokeWidth={isSelected ? 0 : STROKE_WIDTH}
              style={{ transformOrigin: `${x}px ${y}px` }}
              className={`transition-all duration-300 ${isSelected ? 'scale-[1.4]' : 'group-hover:scale-125'}`}
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
    </>
  );
}
