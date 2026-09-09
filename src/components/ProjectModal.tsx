'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Link2, Check, Sparkles, X } from 'lucide-react';
import CommandTerminal, { type CommandTerminalLine } from '@/components/CommandTerminal';
import { type Project } from '@/data/projects';
import { getProjectVisual } from '@/data/projectVisuals';
import { WATERMARK_ICONS } from '@/components/ProjectPod';
import { useLanguage } from '@/context/LanguageContext';
import { pick } from '@/i18n/dictionaries';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const [linkCopied, setLinkCopied] = useState(false);

  const repoName = project?.githubUrl.split('/').filter(Boolean).pop() ?? 'project';
  const runbookLines: CommandTerminalLine[] = project
    ? [
        { kind: 'command', value: `git clone ${project.githubUrl}.git` },
        { kind: 'command', value: `cd ${repoName}` },
        { kind: 'command', value: 'npm install' },
        { kind: 'command', value: 'npm run dev' },
        {
          kind: 'output',
          tone: 'success',
          value: pick(language, {
            pt: 'ambiente local pronto para revisar arquitetura, UX e contratos',
            en: 'local environment ready to review architecture, UX, and contracts',
            de: 'lokale Umgebung bereit zur Prüfung von Architektur, UX und Verträgen',
          }),
        },
      ]
    : [];

  const copyProjectLink = useCallback(async () => {
    if (!project) return;
    const url = `${window.location.origin}/projects?project=${project.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      setLinkCopied(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
          style={{ background: 'rgba(33,34,44,0.82)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[94dvh] w-full min-w-0 max-w-2xl overflow-y-auto rounded-t-2xl border sm:max-h-[90vh] sm:rounded-2xl"
            style={{
              background: 'rgba(40,42,54,0.98)',
              borderColor: `${project.color}44`,
              boxShadow: `0 24px 80px ${project.glowColor}, 0 20px 70px rgba(0,0,0,0.42)`,
            }}
          >
            <div
              className="flex min-w-0 items-start justify-between gap-4 border-b px-4 py-4 sm:px-6"
              style={{ borderColor: 'rgba(68,71,90,0.7)' }}
            >
              <div className="flex min-w-0 items-start gap-3">
                <div
                  aria-hidden="true"
                  className="mt-0.5 hidden shrink-0 rounded-lg border p-2 sm:flex"
                  style={{ borderColor: `${project.color}33`, background: `${project.color}12` }}
                >
                  {(() => {
                    const Icon = WATERMARK_ICONS[getProjectVisual(project.id).icon] ?? Sparkles;
                    return <Icon className="h-5 w-5" style={{ color: project.color }} />;
                  })()}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                    {pick(language, { pt: 'Projeto selecionado', en: 'Selected Project', de: 'Ausgewähltes Projekt' })}
                  </div>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-dracula-fg sm:text-2xl">
                    {project.name}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Copy deep-link button */}
                <button
                  type="button"
                  onClick={copyProjectLink}
                  title={pick(language, { pt: 'Copiar link direto para este projeto', en: 'Copy direct link to this project', de: 'Direktlink zu diesem Projekt kopieren' })}
                  className="group relative rounded-lg border border-dracula-card bg-dracula-card/30 p-2 text-dracula-comment transition-all"
                  style={{}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = project.color;
                    e.currentTarget.style.borderColor = `${project.color}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--dracula-comment)';
                    e.currentTarget.style.borderColor = 'var(--dracula-card)';
                  }}
                  aria-label={pick(language, { pt: 'Copiar link do projeto', en: 'Copy project link', de: 'Projektlink kopieren' })}
                >
                  <AnimatePresence mode="wait">
                    {linkCopied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check className="h-4 w-4 text-dracula-green" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="link"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Link2 className="h-4 w-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-dracula-card px-2 py-1 text-[10px] font-semibold text-dracula-fg opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {linkCopied
                      ? pick(language, { pt: 'Copiado!', en: 'Copied!', de: 'Kopiert!' })
                      : pick(language, { pt: 'Copiar link', en: 'Copy link', de: 'Link kopieren' })}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-dracula-card bg-dracula-card/30 p-2 text-dracula-comment transition-colors hover:border-dracula-red/50 hover:text-dracula-red"
                  aria-label={pick(language, { pt: 'Fechar detalhes do projeto', en: 'Close project details', de: 'Projektdetails schließen' })}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-7 px-4 py-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
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
                {project.updatedAt && (
                  <span className="text-xs text-dracula-comment">
                    {pick(language, {
                      pt: `Atualizado no GitHub em ${project.updatedAt}`,
                      en: `Updated on GitHub on ${project.updatedAt}`,
                      de: `Zuletzt aktualisiert auf GitHub am ${project.updatedAt}`,
                    })}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-dracula-comment">{project.longDesc}</p>

              <CommandTerminal
                title={pick(language, { pt: 'runbook do projeto', en: 'project runbook', de: 'Projekt-Runbook' })}
                subtitle={pick(language, { pt: 'comandos base para auditoria local', en: 'base commands for local audit', de: 'Basisbefehle für die lokale Prüfung' })}
                badge={project.year ? String(project.year) : undefined}
                status={pick(language, { pt: 'comandos copiaveis', en: 'copy-ready commands', de: 'kopierbereite Befehle' })}
                lines={runbookLines}
                accent={project.color}
                dense
              />

              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                  {pick(language, { pt: 'Destaques técnicos', en: 'Technical Highlights', de: 'Technische Highlights' })}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                    className="min-w-0 rounded-xl border border-dracula-card/70 bg-dracula-surface/70 p-4"
                    >
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-dracula-comment">
                        {highlight.label}
                      </div>
                      <div className="text-sm font-medium text-dracula-fg">{highlight.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-dracula-fg">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full rounded-lg border border-dracula-card bg-dracula-bg/40 px-3 py-1.5 text-xs text-dracula-comment"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:flex sm:flex-wrap">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: `${project.color}40`,
                      backgroundColor: `${project.color}1a`,
                      color: project.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${project.color}26`;
                      e.currentTarget.style.borderColor = `${project.color}99`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${project.color}1a`;
                      e.currentTarget.style.borderColor = `${project.color}40`;
                    }}
                  >
                    <span className="truncate">{project.liveUrl.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: `${project.color}40`,
                    backgroundColor: `${project.color}1a`,
                    color: project.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${project.color}26`;
                    e.currentTarget.style.borderColor = `${project.color}99`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${project.color}1a`;
                    e.currentTarget.style.borderColor = `${project.color}40`;
                  }}
                >
                  {pick(language, { pt: 'Abrir repositório', en: 'Open repository', de: 'Repository öffnen' })}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
