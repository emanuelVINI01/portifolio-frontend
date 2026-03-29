'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Tech {
  name: string;
  icon: string; // SVG path or emoji
  color: string;
  radius: number;
  speed: number; // seconds per revolution
  startAngle: number;
}

const TECHS: Tech[] = [
  // Inner Orbit (r=100)
  { name: 'React',      icon: '⚛',  color: '#61DAFB', radius: 100, speed: 10, startAngle: 0    },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6', radius: 100, speed: 14, startAngle: 90   },
  { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', radius: 100, speed: 12, startAngle: 180  },
  { name: 'Tailwind',   icon: '≈',  color: '#38B2AC', radius: 100, speed: 16, startAngle: 270  },

  // Middle Orbit (r=135)
  { name: 'Next.js',    icon: '▲',  color: '#FFFFFF', radius: 135, speed: 20, startAngle: 45   },
  { name: 'Kotlin',     icon: 'K',  color: '#7F52FF', radius: 135, speed: 24, startAngle: 135  },
  { name: 'Java',       icon: '☕', color: '#ED8B00', radius: 135, speed: 22, startAngle: 225  },
  { name: 'Go',         icon: 'Go', color: '#00ADD8', radius: 135, speed: 26, startAngle: 315  },

  // Outer Orbit (r=170)
  { name: 'Postgres',   icon: 'PG', color: '#336791', radius: 170, speed: 32, startAngle: 0    },
  { name: 'MySQL',      icon: 'My', color: '#4479A1', radius: 170, speed: 36, startAngle: 72   },
  { name: 'Redis',      icon: 'Re', color: '#DC382D', radius: 170, speed: 30, startAngle: 144  },
  { name: 'Prisma',     icon: 'P',  color: '#2D3748', radius: 170, speed: 34, startAngle: 216  },
  { name: 'Docker',     icon: 'D',  color: '#2496ED', radius: 170, speed: 38, startAngle: 288  },
];

function TechNode({ tech, paused }: { tech: Tech; paused: boolean }) {
  return (
    <div
      className="absolute flex items-center justify-center rounded-full text-xs font-bold border"
      style={{
        width: 40,
        height: 40,
        background: `${tech.color}18`,
        borderColor: `${tech.color}55`,
        color: tech.color,
        boxShadow: `0 0 12px ${tech.color}44`,
        animation: `orbit ${tech.speed}s linear infinite`,
        animationPlayState: paused ? 'paused' : 'running',
        animationDelay: `${-(tech.startAngle / 360) * tech.speed}s`,
        '--orbit-r': `${tech.radius}px`,
        top: '50%',
        left: '50%',
        marginTop: '-20px',
        marginLeft: '-20px',
      } as React.CSSProperties}
      title={tech.name}
    >
      {tech.icon}
    </div>
  );
}

export default function TechOrbit({ paused = false }: { paused?: boolean }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 400, height: 400 }}>
      {/* Orbit rings */}
      {[100, 135, 170].map((r) => (
        <div
          key={r}
          className="absolute rounded-full border"
          style={{
            width: r * 2,
            height: r * 2,
            borderColor: 'rgba(189,147,249,0.12)',
            borderStyle: 'dashed',
            top: '50%',
            left: '50%',
            marginTop: -r,
            marginLeft: -r,
          }}
        />
      ))}

      {/* Pulsing center ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: 80,
          height: 80,
          top: '50%',
          left: '50%',
          marginTop: -40,
          marginLeft: -40,
          border: '1px solid var(--dracula-purple)',
          boxShadow: '0 0 20px var(--dracula-purple), 0 0 40px rgba(189,147,249,0.2)',
          animation: 'pulse-glow 3s ease-in-out infinite',
          '--glow-color': 'var(--dracula-purple)',
        } as React.CSSProperties}
      />

      {/* GitHub Avatar */}
      <div
        className="relative z-10 rounded-full overflow-hidden border-2"
        style={{
          width: 72,
          height: 72,
          borderColor: 'var(--dracula-purple)',
          boxShadow: '0 0 24px rgba(189,147,249,0.5)',
        }}
      >
        <Image
          src="https://github.com/emanuelVINI01.png"
          alt="Emanuel Vini"
          width={72}
          height={72}
          unoptimized
          className="object-cover w-full h-full"
        />
      </div>

      {/* Orbiting tech nodes */}
      {TECHS.map((tech) => (
        <TechNode key={tech.name} tech={tech} paused={paused} />
      ))}
    </div>
  );
}
