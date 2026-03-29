'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Shield, Zap, Radio, RefreshCw } from 'lucide-react';
import { type Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: 'rgba(16,20,27,0.96)',
                backdropFilter: 'blur(24px)',
                border: `1px solid ${project.color}55`,
                boxShadow: `0 0 60px ${project.glowColor}, 0 0 120px ${project.glowColor}`,
              }}
            >
              {/* Top bar — "CRITICAL SYSTEM" HUD */}
              <div
                className="flex items-center justify-between px-6 py-3 text-[10px] font-bold tracking-widest uppercase border-b"
                style={{
                  borderColor: `${project.color}33`,
                  color: project.color,
                  background: `${project.color}0d`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: project.color,
                      boxShadow: `0 0 8px ${project.color}`,
                      animation: 'pulse-glow 1.5s ease-in-out infinite',
                      '--glow-color': project.color,
                    } as React.CSSProperties}
                  />
                  CRITICAL SYSTEM — PROJECT DETAILS
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded transition-all"
                  style={{ color: 'var(--dracula-comment)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-red)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
                >
                  <X size={14} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h2
                      className="text-2xl font-bold tracking-tight"
                      style={{ color: project.color, filter: `drop-shadow(0 0 12px ${project.color})` }}
                    >
                      {project.name}
                    </h2>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all shrink-0"
                      style={{
                        borderColor: `${project.color}44`,
                        color: project.color,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = `${project.color}18`;
                        el.style.boxShadow = `0 0 12px ${project.glowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = 'transparent';
                        el.style.boxShadow = 'none';
                      }}
                    >
                      <ExternalLink size={12} />
                      View on GitHub
                    </a>
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                    style={{
                      color: project.color,
                      background: `${project.color}18`,
                      border: `1px solid ${project.color}33`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: 'var(--dracula-comment)' }}>
                  {project.longDesc}
                </p>

                {/* Badges */}
                {project.badges.length > 0 && (
                  <div>
                    <div className="text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--dracula-comment)' }}>
                      Performance Indicators
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg"
                          style={{
                            color: 'var(--dracula-green)',
                            background: 'rgba(80,250,123,0.1)',
                            border: '1px solid rgba(80,250,123,0.3)',
                          }}
                        >
                          <Zap size={10} />
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights.length > 0 && (
                  <div>
                    <div className="text-[10px] tracking-widest uppercase mb-3" style={{ color: 'var(--dracula-comment)' }}>
                      Technical Highlights
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-lg p-3"
                          style={{
                            background: 'rgba(22,27,34,0.8)',
                            border: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <div className="text-[9px] tracking-widest uppercase mb-1" style={{ color: 'var(--dracula-comment)' }}>
                            {h.label}
                          </div>
                          <div className="text-xs font-bold" style={{ color: 'var(--foreground)' }}>
                            {h.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <div className="text-[10px] tracking-widest uppercase mb-2" style={{ color: 'var(--dracula-comment)' }}>
                    Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md font-mono"
                        style={{
                          background: 'rgba(98,114,164,0.18)',
                          color: 'var(--foreground)',
                          border: '1px solid rgba(98,114,164,0.25)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
