'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Cpu } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import BootSequence from '@/components/BootSequence';
import Navbar from '@/components/Navbar';
import GlitchTitle, { GlitchSubtitle } from '@/components/GlitchTitle';
import ProjectPod from '@/components/ProjectPod';
import ProjectModal from '@/components/ProjectModal';
import { projects, type Project } from '@/data/projects';

// SSR-safe for mouse-tracking
const TechOrbit    = dynamic(() => import('@/components/TechOrbit'),    { ssr: false });
const ParallaxGrid = dynamic(() => import('@/components/ParallaxGrid'), { ssr: false });

const FEATURED_IDS = ['my-bet', 'typedash', 'api-flash'];
const ORIGIN_IDS   = ['zrankup', 'zcash', 'zdiscordcore', 'zantivpn', 'zhomegui'];
const MIDWAY_IDS   = ['feastcore', 'advancedsql', 'feastlobby', 'feastscore', 'multiserver-api'];
const RECENT_IDS   = ['my-bet', 'snippetvault', 'mtx-upload', 'money-manager'];

const featured = FEATURED_IDS.map((id) => projects.find((p: Project) => p.id === id)!).filter(Boolean);
const origin   = ORIGIN_IDS.map((id) => projects.find((p: Project) => p.id === id)!).filter(Boolean);
const midway   = MIDWAY_IDS.map((id) => projects.find((p: Project) => p.id === id)!).filter(Boolean);
const recent   = RECENT_IDS.map((id) => projects.find((p: Project) => p.id === id)!).filter(Boolean);

const STATS = [
  { icon: Terminal, label: 'Started coding', value: 'Age 11' },
  { icon: Code2,    label: 'Repositories',   value: '30+'     },
  { icon: Cpu,      label: 'Stack',          value: 'Full Stack' },
];

export default function HomePage() {
  const [booted, setBooted]         = useState(false);
  const [selectedProject, setSelected] = useState<Project | null>(null);

  const handleDone = useCallback(() => setBooted(true), []);

  return (
    <>
      <BootSequence onDone={handleDone} />
      <ParallaxGrid />

      <AnimatePresence>
        {booted && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <Navbar />

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full mb-10 text-xs font-bold tracking-widest uppercase"
                style={{
                  border: '1px solid rgba(80, 250, 123, 0.3)',
                  background: 'rgba(80,250,123,0.06)',
                  color: 'var(--dracula-green)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: 'var(--dracula-green)',
                    boxShadow: '0 0 6px var(--dracula-green)',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                    '--glow-color': 'var(--dracula-green)',
                  } as React.CSSProperties}
                />
                Available for new projects
              </motion.div>

              {/* Main title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <GlitchTitle
                  text="EMANUEL // SYSTEM ARCHITECT"
                  className="text-5xl md:text-7xl lg:text-8xl font-black"
                >
                  EMANUEL //<br />
                  <span style={{ fontSize: '0.65em', opacity: 0.85 }}>SYSTEM ARCHITECT</span>
                </GlitchTitle>
              </motion.div>

              <GlitchSubtitle>
                Full-stack engineer &amp; systems designer. Started at{' '}
                <span style={{ color: 'var(--dracula-purple)' }}>age 11</span> building Minecraft
                plugins in Java. Now ships complex engines in record time — betting platforms,
                typing trainers, developer tools — all with obsessive attention to detail.
              </GlitchSubtitle>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 mt-10"
              >
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--dracula-purple), var(--dracula-cyan))',
                    color: 'var(--dracula-bg)',
                    boxShadow: '0 0 20px rgba(189,147,249,0.4)',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(189,147,249,0.7)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(189,147,249,0.4)')}
                >
                  View All Projects
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://github.com/emanuelVINI01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300"
                  style={{
                    border: '1px solid rgba(189,147,249,0.3)',
                    color: 'var(--dracula-purple)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(189,147,249,0.08)';
                    el.style.boxShadow   = '0 0 16px rgba(189,147,249,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'transparent';
                    el.style.boxShadow   = 'none';
                  }}
                >
                  GitHub Profile
                </a>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-8 mt-16"
              >
                {STATS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--dracula-comment)' }}>
                      <Icon size={12} style={{ color: 'var(--dracula-purple)' }} />
                      {label}
                    </div>
                    <div className="text-lg font-black" style={{ color: 'var(--foreground)' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </section>

            {/* ── TECH ORBIT ───────────────────────────────────── */}
            <section className="flex flex-col items-center py-20 px-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: 'var(--dracula-comment)' }}
                >
                  // Tech Stack
                </div>
                <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
                  Orbiting Technologies
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TechOrbit />
              </motion.div>
            </section>

            {/* ── FEATURED PROJECTS ────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: 'var(--dracula-comment)' }}
                >
                  // Featured
                </div>
                <h2 className="text-3xl font-black">
                  <span style={{ color: 'var(--foreground)' }}>Flagship </span>
                  <span
                    style={{
                      background: 'linear-gradient(90deg, var(--dracula-purple), var(--dracula-cyan))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Projects
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
                {featured.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <ProjectPod
                      project={project}
                      onClick={setSelected}
                      index={i}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-sm tracking-wide transition-colors"
                  style={{ color: 'var(--dracula-comment)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-purple)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
                >
                  View all {projects.length} projects <ArrowRight size={14} />
                </Link>
              </div>
            </section>

            {/* ── ORIGIN TIMELINE ──────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: 'var(--dracula-comment)' }}
                >
                  // The Origin
                </div>
                <h2 className="text-3xl font-black">
                  <span style={{ color: 'var(--foreground)' }}>Started at </span>
                  <span style={{ color: 'var(--dracula-purple)' }}>Age 11</span>
                </h2>
                <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--dracula-comment)' }}>
                  Before frameworks, before TypeScript — just a kid writing Java plugins for
                  Minecraft servers. Rough code, but real ambition. The start is always here.
                </p>
              </motion.div>

              {/* Grid layout - 5 columns on desktop, 1 on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
                {origin.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ProjectPod
                      project={project}
                      onClick={setSelected}
                      index={i}
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── MIDWAY TIMELINE ──────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-right"
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: 'var(--dracula-comment)' }}
                >
                  // The Midway Point
                </div>
                <h2 className="text-3xl font-black">
                  <span style={{ color: 'var(--foreground)' }}>Building </span>
                  <span style={{ color: 'var(--dracula-orange)' }}>Ecosystems</span>
                </h2>
                <p className="mt-3 text-sm max-w-md ml-auto" style={{ color: 'var(--dracula-comment)' }}>
                  Transitioning into complex Java architectures, generic APIs, and large-scale Minecraft network engines.
                </p>
              </motion.div>

              {/* Grid layout - 5 columns on desktop, 1 on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
                {midway.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ProjectPod
                      project={project}
                      onClick={setSelected}
                      index={i}
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── RECENT WORKS ──────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
              >
                <div
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: 'var(--dracula-comment)' }}
                >
                  // Recent Works
                </div>
                <h2 className="text-3xl font-black">
                  <span style={{ color: 'var(--foreground)' }}>Full-Stack </span>
                  <span style={{ color: 'var(--dracula-green)' }}>Engineering</span>
                </h2>
                <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--dracula-comment)' }}>
                  Production-ready applications built with modern tools like Next.js, Prisma, and Tailwind. Focused on UX, performance, and scalability.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
                {recent.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <ProjectPod
                      key={project.id}
                      project={project}
                      onClick={setSelected}
                      index={i}
                    />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ── FOOTER ───────────────────────────────────────── */}
            <footer
              className="border-t text-center py-12 text-xs"
              style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'var(--dracula-comment)' }}
            >
              <span style={{ color: 'var(--dracula-purple)' }}>Emanuel Vini</span>{' '}
              — Built with Next.js 16 · Framer Motion · Dracula Theme
              <br />
              <span className="opacity-40">
                // System architect since age 11
              </span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal project={selectedProject} onClose={() => setSelected(null)} />
    </>
  );
}
