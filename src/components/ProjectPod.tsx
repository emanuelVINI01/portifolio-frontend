'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Zap, Shield, Gauge, Radio, RefreshCw, GitFork, Clock } from 'lucide-react';
import { type Project } from '@/data/projects';

const BADGE_CONFIG: Record<string, { icon: typeof Zap; color: string }> = {
  'Low Latency':   { icon: Zap,      color: 'var(--dracula-green)'  },
  'High Security': { icon: Shield,   color: 'var(--dracula-red)'    },
  'Speed Optimized': { icon: Gauge,  color: 'var(--dracula-cyan)'   },
  'SSE':           { icon: Radio,    color: 'var(--dracula-pink)'   },
  'Atomic Tx':     { icon: RefreshCw, color: 'var(--dracula-orange)'},
  'Redis Lock':    { icon: Shield,   color: 'var(--dracula-purple)' },
  'Real-Time':     { icon: Radio,    color: 'var(--dracula-cyan)'   },
  'Open Source':   { icon: GitFork,  color: 'var(--dracula-green)'  },
  'Multi-Tenant':  { icon: Gauge,    color: 'var(--dracula-purple)' },
};

const BINARY_DIGITS = ['01001110', '10100111', '11010010', '00111001'];

interface ProjectPodProps {
  project: Project;
  onClick: (p: Project) => void;
  index?: number;
}

export default function ProjectPod({ project, onClick, index = 0 }: ProjectPodProps) {
  const [hovered, setHovered] = useState(false);
  const isOrigin = project.category === 'Origin';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: isOrigin ? -4 : -8 }}
      onClick={() => onClick(project)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative cursor-pointer rounded-xl border-beam flex flex-col h-full ${isOrigin ? 'crt-overlay' : ''}`}
      style={
        {
          '--beam-color': project.color,
          background: 'rgba(22,27,34,0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: `1px solid ${hovered ? project.color + '55' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: hovered
            ? `0 8px 40px ${project.glowColor}, 0 2px 8px rgba(0,0,0,0.6)`
            : '0 2px 8px rgba(0,0,0,0.4)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          padding: '20px',
        } as React.CSSProperties
      }
    >
      {/* HUD corners */}
      <span className="hud-corner hud-corner-tl" />
      <span className="hud-corner hud-corner-tr" />
      <span className="hud-corner hud-corner-bl" />
      <span className="hud-corner hud-corner-br" />

      {/* Binary HUD top-right */}
      <div
        className="absolute top-2 right-10 text-[8px] font-mono opacity-20 select-none"
        style={{ color: project.color }}
      >
        {BINARY_DIGITS[index % BINARY_DIGITS.length]}
      </div>

      {/* Category chip */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
          style={{
            color: project.color,
            background: `${project.color}18`,
            border: `1px solid ${project.color}33`,
          }}
        >
          {isOrigin ? '// ORIGIN' : project.category}
        </span>
        {project.year && (
          <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--dracula-comment)' }}>
            <Clock size={8} /> {project.year}
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        className="text-base font-bold mb-1 tracking-tight"
        style={{ color: hovered ? project.color : 'var(--foreground)' , transition: 'color 0.2s' }}
      >
        {project.name}
      </h3>

      {/* Short desc */}
      <p className="text-xs mb-4 leading-relaxed" style={{ color: 'var(--dracula-comment)' }}>
        {project.shortDesc}
      </p>

      {/* Performance Badges */}
      {project.badges.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.badges.map((badge) => {
            const conf = BADGE_CONFIG[badge];
            const Icon = conf?.icon ?? Zap;
            return (
              <span
                key={badge}
                className="flex items-center gap-1 text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider"
                style={{
                  color: conf?.color ?? 'var(--dracula-purple)',
                  background: `${conf?.color ?? 'var(--dracula-purple)'}15`,
                  border: `1px solid ${conf?.color ?? 'var(--dracula-purple)'}33`,
                }}
              >
                <Icon size={8} style={{ filter: `drop-shadow(0 0 3px ${conf?.color})` }} />
                {badge}
              </span>
            );
          })}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="text-[9px] px-1.5 py-0.5 rounded font-mono"
            style={{
              background: 'rgba(98,114,164,0.15)',
              color: 'var(--dracula-comment)',
              border: '1px solid rgba(98,114,164,0.2)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span className="text-[10px]" style={{ color: 'var(--dracula-comment)' }}>
          Click for details →
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-[10px] transition-colors"
          style={{ color: 'var(--dracula-comment)' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = project.color)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
        >
          <ExternalLink size={10} />
          GitHub
        </a>
      </div>

      {/* Hover scanner line */}
      {hovered && (
        <motion.div
          initial={{ top: 0, opacity: 0.8 }}
          animate={{ top: '100%', opacity: 0 }}
          transition={{ duration: 1, ease: 'linear' }}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      )}
    </motion.div>
  );
}
