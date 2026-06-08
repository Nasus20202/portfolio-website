import { describe, it, expect } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CommitTimeline from '../CommitTimeline';
import { timelineEvents } from '../../data';

describe('CommitTimeline', () => {
  it('renders the SVG graph', () => {
    const { getByTestId } = render(<CommitTimeline />);
    expect(getByTestId('timeline-svg')).toBeInTheDocument();
  });

  it('renders all events from content.ts in the SVG', () => {
    const { getByTestId } = render(<CommitTimeline />);
    const svg = getByTestId('timeline-svg');

    // Check if each event title is present as a label in the SVG
    const labels = Array.from(svg.querySelectorAll('text')).map((el) => el.textContent);
    timelineEvents.forEach((event) => {
      expect(labels).toContain(event.title);
    });
  });

  it('updates the terminal panel when a node is clicked', async () => {
    const { getByTestId } = render(<CommitTimeline />);

    // Pick the last event (Initial commit)
    const targetEvent = timelineEvents[timelineEvents.length - 1];
    if (!targetEvent) throw new Error('No target event found');

    // Use data-testid to find the node group
    const targetNode = getByTestId(`node-${targetEvent.id}`);

    // Click the node
    fireEvent.click(targetNode);

    // Wait for Framer Motion animation and verify content
    await waitFor(
      () => {
        const panel = getByTestId('terminal-panel');
        expect(panel.textContent).toContain(targetEvent.title);
      },
      { timeout: 2000 }
    );
  });

  it('renders SVG paths for branches and merges', () => {
    const { getByTestId } = render(<CommitTimeline />);
    const svg = getByTestId('timeline-svg');

    // Should have lines and paths representing the git graph
    expect(svg.querySelectorAll('line').length).toBeGreaterThan(0);
    expect(svg.querySelectorAll('path').length).toBeGreaterThan(0);
  });

  it('dismisses the terminal panel when close button is clicked', async () => {
    const { getByTestId, queryByTestId } = render(<CommitTimeline />);

    // Click first event to open the panel
    const firstNode = getByTestId(`node-${timelineEvents?.[timelineEvents.length - 1]?.id}`);
    fireEvent.click(firstNode);

    await waitFor(
      () => {
        expect(getByTestId('terminal-panel')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );

    // Click the close button
    const closeBtn = getByTestId('close-details-btn');
    fireEvent.click(closeBtn);

    await waitFor(
      () => {
        expect(queryByTestId('terminal-panel')).not.toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
