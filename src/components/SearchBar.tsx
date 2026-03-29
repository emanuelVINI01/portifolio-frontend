'use client';

import { useState, useRef, useId } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search projects...' }: SearchBarProps) {
  const [waves, setWaves] = useState<number[]>([]);
  const counterRef = useRef(0);
  const id = useId();

  const addWave = () => {
    const key = counterRef.current++;
    setWaves((prev) => [...prev, key]);
    setTimeout(() => {
      setWaves((prev) => prev.filter((k) => k !== key));
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Wave rings */}
      {waves.map((k) => (
        <span
          key={k}
          className="search-wave"
          style={{ animationDuration: '1.2s' }}
        />
      ))}

      {/* Input container */}
      <div
        className="relative flex items-center rounded-xl border transition-all duration-300"
        style={{
          background: 'rgba(22,27,34,0.8)',
          backdropFilter: 'blur(16px)',
          borderColor: value ? 'var(--dracula-cyan)' : 'rgba(255,255,255,0.08)',
          boxShadow: value ? '0 0 20px rgba(139, 233, 253, 0.15)' : 'none',
        }}
      >
        <Search
          size={16}
          className="absolute left-4"
          style={{
            color: value ? 'var(--dracula-cyan)' : 'var(--dracula-comment)',
            filter: value ? 'drop-shadow(0 0 6px var(--dracula-cyan))' : 'none',
            transition: 'color 0.2s, filter 0.2s',
          }}
        />
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            addWave();
          }}
          placeholder={placeholder}
          className="w-full bg-transparent py-3 pl-11 pr-4 text-sm outline-none placeholder:opacity-40 font-mono"
          style={{ color: 'var(--foreground)' }}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-4 text-xs transition-colors"
            style={{ color: 'var(--dracula-comment)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-red)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--dracula-comment)')}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
