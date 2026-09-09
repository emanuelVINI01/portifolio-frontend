# portfolio

Interactive technical portfolio of Emanuel Vini, built to present a trajectory, projects, and engineering evidence in an auditable way. This repository works as a public index of technical evolution: from the Java/Kotlin base in servers and automation to the current phase with web products, transactional systems, and developer tools.

## Purpose

The project is not just a landing page. It organizes the professional narrative around proofs: repositories, stacks, architectural decisions, timeline, and projects with enough context for technical evaluation. The reading was designed as a technical showcase: engineering teams can scan the history, inspect evidence, filter projects, and open runbooks with command blocks.

## Technical Timeline

- 2020-2021: entry through Java, Minecraft, `.jar`, `plugin.yml`, Bukkit/Spigot, and direct runtime debugging.
- 2022-2023: evolution to JVM, Kotlin, Discord bots, multi-server APIs, SQL, and automation linked to real communities.
- 2026: consolidation in demonstrable applications with Next.js, TypeScript, Prisma, PostgreSQL, Fastify, authentication, dashboards, and transactional systems.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React and React Icons

## Repository Architecture

- `app/`: main routes, landing page, and project catalog.
- `src/components/`: UI components, navigation, motion, cards, modal, and visual terminal.
- `src/data/projects.ts`: typed project catalog in Portuguese and English.
- `src/i18n/`: content dictionaries and bilingual copy.
- `context/contexto_github.md`: historical snapshot used as the base for repository auditing.

## Design Decisions

- Dark interface, terminal-oriented and meant for technical reading, without relying on a generic resume presentation.
- Bilingual content with `LanguageContext`, keeping Portuguese and English aligned.
- Cards and modals treat projects as auditable evidence, not as empty showcases.
- Motion is used to guide reading and visual hierarchy, not to hide a lack of content.

## Local Execution

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality

```bash
npm run lint
npm run build
```

Use `npm run lint` before UI changes and `npm run build` when altering the route structure, shared components, project data, or dictionaries.
