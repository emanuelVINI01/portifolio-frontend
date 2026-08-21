'use client';

import { Suspense } from 'react';
import ProjectsContent from './ProjectsContent';

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
