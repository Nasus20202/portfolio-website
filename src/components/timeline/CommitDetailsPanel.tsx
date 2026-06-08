import type { TimelineEvent } from '../../data/types';
import { personalInfo } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalWindow } from '../TerminalWindow';
import { getEventHash } from '../../utils/timeline';

interface CommitDetailsPanelProps {
  selectedEvent: TimelineEvent | null;
  onClose: () => void;
}

export function CommitDetailsPanel({ selectedEvent, onClose }: CommitDetailsPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {selectedEvent && (
        <motion.div
          key={selectedEvent.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sticky bottom-0 z-50"
        >
          <TerminalWindow
            command={`${personalInfo.alias.toLowerCase()}@portfolio: ~/experience$ git show ${getEventHash(selectedEvent)}`}
            onClose={onClose}
            testId="terminal-panel"
          >
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
          </TerminalWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
