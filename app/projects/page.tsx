import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

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
