'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Terminal, Code2, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: scrolled
          ? 'rgba(13,17,23,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-bottom 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal
            size={18}
            className="transition-all duration-300"
            style={{
              color: 'var(--dracula-purple)',
              filter: 'drop-shadow(0 0 6px var(--dracula-purple))',
            }}
          />
          <span
            className="text-sm font-bold tracking-tighter"
            style={{
              background: 'linear-gradient(90deg, var(--dracula-purple), var(--dracula-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Emanuel //<span className="opacity-60"> System Architect</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--dracula-comment)' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--dracula-purple)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--dracula-comment)')}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: 'var(--dracula-comment)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-cyan)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
          >
            <Layers size={12} />
            Projects
          </Link>
          <a
            href="https://github.com/emanuelVINI01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase transition-all duration-200 px-3 py-1.5 rounded-md"
            style={{
              color: 'var(--dracula-green)',
              border: '1px solid rgba(80, 250, 123, 0.3)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(80,250,123,0.08)';
              el.style.boxShadow = '0 0 16px rgba(80,250,123,0.2)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.boxShadow = 'none';
            }}
          >
            <Code2 size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
