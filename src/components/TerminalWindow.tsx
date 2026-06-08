import React from 'react';
import { X } from 'lucide-react';

interface TerminalWindowProps {
  command: string;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

export const TerminalWindow = React.forwardRef<HTMLDivElement, TerminalWindowProps>(
  ({ command, onClose, children, className = '', testId }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-lg overflow-hidden ${className}`}
        data-testid={testId}
      >
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-3 flex items-center gap-2">
          <div className="text-xs font-mono text-zinc-500 flex-1">{command}</div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="Close details"
              data-testid="close-details-btn"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <div className="p-4 md:p-6 font-mono text-sm sm:text-base text-zinc-300 space-y-4">
          {children}
        </div>
      </div>
    );
  }
);

TerminalWindow.displayName = 'TerminalWindow';
