'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import ProjectPod from '@/components/ProjectPod';
import ProjectModal from '@/components/ProjectModal';
import FilterSwitch from '@/components/FilterSwitch';
import SearchBar from '@/components/SearchBar';
import { projects, categories, type Project } from '@/data/projects';

const ParallaxGrid = dynamic(() => import('@/components/ParallaxGrid'), { ssr: false });

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query,          setQuery]          = useState('');
  const [selectedProject, setSelected]      = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p: Project) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const q        = query.toLowerCase();
      const matchQ   =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.tech.some((t: string) => t.toLowerCase().includes(q)) ||
        p.badges.some((b: string) => b.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  // Category counts
  const counts = useMemo(() => {
    return categories.reduce<Record<string, number>>((acc: Record<string, number>, cat: { key: string }) => {
      acc[cat.key] = cat.key === 'all'
        ? projects.length
        : projects.filter((p: Project) => p.category === cat.key).length;
      return acc;
    }, {});
  }, []);

  return (
    <>
      <ParallaxGrid />

      <div className="relative z-10 min-h-screen">
        <Navbar />

        {/* ── Header ─────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="text-[10px] tracking-widest uppercase mb-3"
              style={{ color: 'var(--dracula-comment)' }}
            >
              // Mission Control
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--dracula-purple), var(--dracula-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Project Database
              </span>
            </h1>
            <p className="text-sm max-w-lg" style={{ color: 'var(--dracula-comment)' }}>
              {projects.length} repositories across 4 categories — from age-11 Minecraft plugins to
              production betting engines and developer tools.
            </p>
          </motion.div>
        </section>

        {/* ── Controls ────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 mb-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <FilterSwitch
              options={categories.map((c) => ({ ...c, label: `${c.label} (${counts[c.key]})` }))}
              value={activeCategory}
              onChange={(k) => { setActiveCategory(k); setQuery(''); }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search by name, tech, badge..."
            />
          </motion.div>
        </div>

        {/* ── Results count ───────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 mb-6">
          <motion.div
            key={`${activeCategory}-${filtered.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs"
            style={{ color: 'var(--dracula-comment)' }}
          >
            <span style={{ color: 'var(--dracula-purple)' }}>{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'project' : 'projects'} found
            {query && (
              <span>
                {' '}for <span style={{ color: 'var(--dracula-cyan)' }}>&quot;{query}&quot;</span>
              </span>
            )}
          </motion.div>
        </div>

        {/* ── Grid ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 pb-32">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((project: Project, i: number) => (
                    <ProjectPod
                      key={project.id}
                      project={project}
                      onClick={setSelected}
                      index={i}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-sm font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  No matching projects
                </div>
                <div className="text-xs" style={{ color: 'var(--dracula-comment)' }}>
                  Try a different query or category
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelected(null)} />
    </>
  );
}
