import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjects, type Project } from '@/data/projects';

const BASE_URL = 'https://emanuelmissena.com';
const projects = getProjects('pt');

function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return { title: 'Projeto não encontrado' };
  }

  const image = project.images?.[0] ?? '/profile.png';

  return {
    title: project.name,
    description: project.shortDesc,
    keywords: [project.name, project.category, ...project.tech],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.name} | Emanuel Vini`,
      description: project.shortDesc,
      url: `${BASE_URL}/projects/${project.id}`,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Emanuel Vini`,
      description: project.shortDesc,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) notFound();

  const projectUrl = `${BASE_URL}/projects/${project.id}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.longDesc,
    url: projectUrl,
    codeRepository: project.githubUrl,
    ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
    keywords: project.tech.join(', '),
    author: {
      '@type': 'Person',
      name: 'Emanuel Vini',
      url: BASE_URL,
    },
    ...(project.year ? { dateCreated: String(project.year) } : {}),
    ...(project.updatedAt ? { dateModified: project.updatedAt } : {}),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${BASE_URL}/projects` },
      { '@type': 'ListItem', position: 3, name: project.name, item: projectUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <main className="story-page-background relative overflow-hidden pb-24 md:pb-0">
          <section className="mx-auto max-w-4xl px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-dracula-comment transition-colors hover:text-dracula-cyan"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para projetos
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{
                  color: project.color,
                  background: `${project.color}12`,
                  borderColor: `${project.color}33`,
                }}
              >
                {project.category}
              </span>
              {project.year && <span className="text-xs text-dracula-comment">{project.year}</span>}
              {project.updatedAt && (
                <span className="text-xs text-dracula-comment">
                  Atualizado no GitHub em {project.updatedAt}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-dracula-fg sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-dracula-comment sm:text-lg">
              {project.shortDesc}
            </p>

            {project.images?.[0] && (
              <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-dracula-card/70">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            )}

            <p className="mt-8 text-sm leading-relaxed text-dracula-comment sm:text-base">
              {project.longDesc}
            </p>

            <div className="mt-10">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                Destaques técnicos
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="rounded-xl border border-dracula-card/70 bg-dracula-surface/70 p-4"
                  >
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                      {highlight.label}
                    </div>
                    <div className="text-sm font-medium text-dracula-fg">{highlight.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-dracula-card bg-dracula-bg/40 px-3 py-1.5 text-xs text-dracula-comment"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:flex sm:flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: `${project.color}40`,
                    backgroundColor: `${project.color}1a`,
                    color: project.color,
                  }}
                >
                  {project.liveUrl.replace(/^https?:\/\//, '')}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
                style={{
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}1a`,
                  color: project.color,
                }}
              >
                Abrir repositório
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
