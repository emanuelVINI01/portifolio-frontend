'use client';

import { motion } from 'framer-motion';
import { type categories } from '@/data/projects';

interface FilterSwitchProps {
  options: typeof categories;
  value: string;
  onChange: (key: string) => void;
}

export default function FilterSwitch({ options, value, onChange }: FilterSwitchProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl"
      style={{
        background: 'rgba(22,27,34,0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(16px)',
      }}
    >
      {options.map((opt) => {
        const isActive = value === opt.key;
        return (
          <motion.button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors duration-200"
            style={{
              color: isActive ? opt.color : 'var(--dracula-comment)',
              minWidth: 0,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active background */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `${opt.color}18`,
                  border: `1px solid ${opt.color}44`,
                  boxShadow: `0 0 12px ${opt.color}33`,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}

            {/* LED dot */}
            <span
              className="relative w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: isActive ? opt.color : 'var(--dracula-border)',
                boxShadow: isActive ? `0 0 6px ${opt.color}` : 'none',
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
            />

            <span className="relative">{opt.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
