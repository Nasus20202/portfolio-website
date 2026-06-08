import { useMemo } from 'react';
import type { TimelineEvent } from '../data/types';

export function useTimelineLayout(timelineEvents: TimelineEvent[]) {
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
  }, [timelineEvents]);

  const maxCol = Math.max(...Array.from(laneToColumn.values()), 0);

  return { laneToColumn, maxCol };
}
