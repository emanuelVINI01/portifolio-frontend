import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

// `ProjectsContent` reads `useSearchParams()` (for the `?project=` deep-link).
// On a fully static route that bails the whole tree to client-side-only
// rendering, so crawlers never see the project grid/links in the initial
// HTML. Forcing per-request rendering keeps real content (and real links to
// /projects/[slug]) in the HTML Google actually fetches.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Catálogo de projetos full-stack, sistemas bare-metal e ferramentas de IA construídos por Emanuel Vini (EmanuelMissena) — código aberto, stack detalhada e evidência técnica.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projetos | Emanuel Vini',
    description:
      'Catálogo de projetos full-stack, sistemas bare-metal e ferramentas de IA construídos por Emanuel Vini (EmanuelMissena).',
    url: 'https://emanuelmissena.com/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
