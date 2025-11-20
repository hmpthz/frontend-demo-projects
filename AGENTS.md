Plan mode: If user **explicitly** asked to make a plan, write it under `.claude/` as a markdown file. The plan must have actual implementation details with code snippets, so that agents can follow it straight away.

# Project Structure

Monorepo managed by pnpm workspaces. App projects are under `apps/` folder.
Root `package.json` has shared devDependencies to avoid duplications, each app must not add them again.

- apps/brainwave: React v19 + Tailwind CSS v4 + Vite
- apps/gpt-landing: React v19 + Vanilla CSS + Vite
- apps/metaverse: Next.js v15 + Tailwind CSS v4

# Development Guidelines

## Required Scripts and Conventions

Each package should expose these scripts:

- `dev` – watch mode for development
- `type-check`
- `build` – typecheck and build the package
- `lint` – lint the package
- `lint:fix` – lint and auto-fix errors if possible (always run before your work is finished)
- `test` – run tests (if present)

## Coding Standards

- TypeScript strict mode; use `any` only at complex generic typings that you cannot solve without making it unreadable.
- Named exports everywhere except Next.js special files (page/layout) – those use default exports.
- Use `useMemo`, `useCallback`, `React.memo` appropriately to prevent unnecessary re-renders for react components.
