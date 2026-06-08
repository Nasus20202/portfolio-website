import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TerminalWindow } from '../TerminalWindow';

describe('TerminalWindow.tsx', () => {
  it('renders command text', () => {
    render(
      <TerminalWindow command="npm run start">
        <div>Content</div>
      </TerminalWindow>
    );

    expect(screen.getByText('npm run start')).toBeDefined();
    expect(screen.getByText('Content')).toBeDefined();
  });

  it('renders close button if onClose is provided and calls onClose', () => {
    const handleClose = vi.fn();
    render(
      <TerminalWindow command="test" onClose={handleClose}>
        <div>Content</div>
      </TerminalWindow>
    );

    const closeBtn = screen.getByTestId('close-details-btn');
    expect(closeBtn).toBeDefined();

    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not render close button if onClose is absent', () => {
    render(
      <TerminalWindow command="test">
        <div>Content</div>
      </TerminalWindow>
    );

    expect(screen.queryByTestId('close-details-btn')).toBeNull();
  });

  it('applies custom className and testId', () => {
    render(
      <TerminalWindow command="test" className="custom-test-class" testId="my-terminal">
        <div>Content</div>
      </TerminalWindow>
    );

    const container = screen.getByTestId('my-terminal');
    expect(container.className).toContain('custom-test-class');
  });
});
