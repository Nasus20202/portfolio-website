# Agent Context & Project Overview

This document provides a high-level overview of the project structure, technologies, and useful commands. It is intended to help AI coding assistants and developers quickly get up to speed with the repository.

## Technologies Used

The project is a modern web application built with the following stack:

- **Framework**: [Astro](https://astro.build/) (Static Site Generation / Server-Side Rendering)
- **UI Library**: [React](https://react.dev/) (used for interactive components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (React animation library)
- **Icons**: [Lucide React](https://lucide.dev/) & Simple Icons
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)
- **Package Manager**: pnpm

## High-Level Code Overview

The source code is primarily located in the `src` directory.

- `src/pages/`: Contains the Astro page templates (e.g., `index.astro`). These act as the entry points and routing mechanism for the site.
- `src/components/`: Contains the React components that make up the UI (e.g., interactive timelines, terminal windows, skill logs).
  - Co-located tests are usually found within `__tests__/` subdirectories.
- `src/data/`: Contains the structured content and data that powers the website (e.g., personal information, skills, timeline events).
- `src/hooks/`: Custom React hooks used to encapsulate logic (e.g., layout calculations).
- `src/utils/`: Utility functions and helper logic (e.g., hashing, timeline constants).

## Useful Commands

All project scripts are defined in `package.json`. Use `pnpm` to execute them.

### Development & Build

- `pnpm dev`: Starts the local Astro development server.
- `pnpm build`: Builds the project for production.
- `pnpm preview`: Locally previews the production build.
- `pnpm typecheck`: Runs TypeScript type checking without emitting files.

### Testing

- `pnpm test`: Runs unit tests using Vitest.
- `pnpm test:watch`: Runs unit tests in watch mode.
- `pnpm test:e2e`: Runs End-to-End tests using Playwright.
- `pnpm test:e2e:update`: Updates Playwright test snapshots.

### Linting & Formatting

- `pnpm lint`: Runs ESLint to find code issues.
- `pnpm lint:fix`: Runs ESLint and automatically fixes fixable issues.
- `pnpm format`: Runs Prettier to format the codebase.
- `pnpm format:check`: Checks if the codebase is correctly formatted with Prettier.

## Development Guidelines

- **Component Architecture**: Prefer creating modular, reusable React components in `src/components/` and embedding them into Astro pages using Astro's component hydration directives (if they require interactivity).
- **Styling**: Use Tailwind CSS utility classes for styling. Avoid writing custom CSS unless strictly necessary.
- **Responsiveness**: Ensure all new components are fully responsive and work seamlessly on mobile and desktop viewports.
- **Testing**: Co-locate unit tests alongside their respective components or utility files. Run the test suite before finalizing changes to ensure regressions haven't been introduced.
