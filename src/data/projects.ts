import { Language } from '@/i18n/dictionaries';

export type ProjectCategory =
  | 'Financial Systems'
  | 'Developer Tools'
  | 'Web Products'
  | 'Automation & Bots';

export type BadgeType =
  | 'Transactional'
  | 'Auth'
  | 'API'
  | 'Dashboard'
  | 'Open Source'
  | 'Speed Optimized'
  | 'Real-Time'
  | 'Search'
  | 'Analytics'
  | 'File Upload'
  | 'Utility'
  | 'Portfolio'
  | 'TypeScript'
  | 'AI'
  | 'Discord Bot'
  | 'Browser Extension'
  | 'Java'
  | 'Electron'
  | 'Legacy';

export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  category: ProjectCategory;
  tech: string[];
  color: string;
  glowColor: string;
  githubUrl: string;
  liveUrl?: string;
  images?: string[];
  badges: BadgeType[];
  highlights: { label: string; value: string }[];
  year?: number;
  updatedAt?: string;
}

const projectsPt: Project[] = [
  {
    id: 'simple-bank',
    name: 'Simple Bank',
    shortDesc: 'Demo de banco mobile-first com dupla entrada contábil e IA integrada.',
    longDesc:
      'Aplicação full-stack mobile-first que simula um ledger bancário completo. Implementa autenticação via Auth.js v5, rotas de API protegidas, transferências com chave UUID e QR code, geração de PDF autenticado de recibos e assistente de IA via Google Gemini. O design segue a paleta Dracula com painéis glassmorphism e transições Framer Motion. Todos os débitos e créditos são gravados atomicamente em transação Prisma.',
    category: 'Financial Systems',
    tech: ['Next.js', 'Auth.js', 'Prisma', 'PostgreSQL', 'Google Gemini', 'TypeScript', 'Tailwind CSS'],
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/simple-bank',
    liveUrl: 'https://bank.emanuelvini.dev',
    images: ['/projects/simple-bank/image1.png', '/projects/simple-bank/image2.png', '/projects/simple-bank/image3.png', '/projects/simple-bank/image4.png'],
    badges: ['Transactional', 'Auth', 'AI', 'Dashboard', 'TypeScript'],
    highlights: [
      { label: 'Ledger', value: 'Dupla entrada em transação Prisma atômica' },
      { label: 'IA', value: 'Assistente bancário via Google Gemini' },
      { label: 'Chaves PIX', value: 'UUID + QR Code por chave de recebimento' },
      { label: 'PDF', value: 'Recibos gerados em endpoint autenticado' },
    ],
    year: 2026,
    updatedAt: '2026-06-01',
  },
  {
    id: 'apiflash',
    name: 'apiFlash',
    shortDesc: 'Cliente HTTP leve para testes de endpoints direto no navegador.',
    longDesc:
      'Ferramenta projetada sob a filosofia dark-first para emissão de requisições HTTP (GET, POST, PUT, DELETE) com suporte a cabeçalhos avançados, editor de corpo de requisição e visualização instantânea de respostas em JSON. Desenvolvido para prover máxima velocidade e mínima fricção, otimizando o fluxo de trabalho de desenvolvedores.',
    category: 'Developer Tools',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    color: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/api-flash',
    liveUrl: 'https://apiflash.emanuelvini.dev',
    badges: ['API', 'Speed Optimized', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Métodos', value: 'GET, POST, PUT, DELETE' },
      { label: 'UX', value: 'Tema Dracula, configuração zero (Zero-config)' },
      { label: 'Headers', value: 'Painel dedicado para edição avançada' },
      { label: 'Resposta', value: 'Renderização otimizada de payloads JSON' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'browia',
    name: 'Browia',
    shortDesc: 'Extensão de navegador com agente IA autônomo via MCP.',
    longDesc:
      'Extensão Manifest V3 que acopla um painel lateral onde um agente de IA autônomo opera a aba ativa em tempo real usando o Model Context Protocol (MCP). Suporta OpenAI, Google Gemini (famílias 1.5 a 3.5) e instâncias Ollama locais. O agente executa até 12 iterações autônomas com divisão inteligente entre ferramentas seguras (leitura, inspeção DOM) e sensíveis (clique, digitação, navegação), que aguardam aprovação do usuário. Inclui bypass dinâmico de CORS para Ollama.',
    category: 'Developer Tools',
    tech: ['TypeScript', 'React', 'Manifest V3', 'MCP', 'Ollama', 'OpenAI', 'Google Gemini'],
    color: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/browia',
    badges: ['AI', 'Browser Extension', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Providers', value: 'OpenAI, Gemini (1.5-3.5) e Ollama local' },
      { label: 'Autonomia', value: 'Loop MCP com até 12 iterações sem interrupção' },
      { label: 'Segurança', value: 'Ferramentas sensíveis requerem aprovação explícita' },
      { label: 'Bypass CORS', value: 'declarativeNetRequest para Ollama local' },
    ],
    year: 2026,
    updatedAt: '2026-04-01',
  },
  {
    id: 'lowvia',
    name: 'Lowvia',
    shortDesc: 'Assistente IA desktop com Deep Research autônomo e suporte offline.',
    longDesc:
      'Aplicação desktop (Electron) com assistente de IA que roda modelos locais via Ollama e se conecta ao OpenRouter para modelos de ponta como GPT-4 e Claude 3. Possui modo Deep Research autônomo que formula buscas na web, navega páginas encontradas, faz scraping e cruza dados antes de responder. Renderiza Markdown avançado, blocos de código com syntax highlight (Highlight.js) e expressões matemáticas (KaTeX). Exporta relatórios em PDF.',
    category: 'Developer Tools',
    tech: ['Electron', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Ollama', 'OpenRouter'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/lowvia',
    badges: ['AI', 'Electron', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Offline', value: 'Modelos locais via Ollama sem nuvem' },
      { label: 'Deep Research', value: 'Pesquisa web autônoma com scraping e cruzamento de dados' },
      { label: 'Renderização', value: 'Markdown, código, KaTeX e PDF export' },
      { label: 'Providers', value: 'Ollama + OpenRouter (GPT-4, Claude 3)' },
    ],
    year: 2026,
    updatedAt: '2026-05-01',
  },
  {
    id: 'snippetvault',
    name: 'SnippetVault',
    shortDesc: 'Case full-stack de organização de conhecimento técnico.',
    longDesc:
      'Produto SaaS para desenvolvedores focado em organização de conhecimento técnico. O SnippetVault demonstra autenticação com GitHub, modelagem de dados com Prisma, validação de contratos com Zod, dashboard operacional, busca pública e fluxo de compartilhamento. Mais do que um cofre de snippets, apresenta decisões de arquitetura, experiência de uso e organização de código em uma aplicação full-stack completa.',
    category: 'Developer Tools',
    tech: ['Next.js', 'Prisma', 'NextAuth', 'Zod', 'TypeScript'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/snippetvault',
    liveUrl: 'https://snippetvault.emanuelvini.dev',
    badges: ['Auth', 'Search', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Produto', value: 'Dashboard de gestão para desenvolvedores' },
      { label: 'Arquitetura', value: 'Next.js, Prisma, NextAuth e Zod' },
      { label: 'Descoberta', value: 'Busca pública e links compartilháveis' },
      { label: 'Caso técnico', value: 'App full-stack com auth, dados e busca pública' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'typedash',
    name: 'TypeDash',
    shortDesc: 'Plataforma analítica de digitação com métricas em tempo real.',
    longDesc:
      'Aplicação de alta performance para treinamento de digitação. Calcula em tempo real métricas de WPM (Words Per Minute) e precisão, mantendo um histórico detalhado de performance, geração de gráficos evolutivos e estruturação de um ranking global. Emprega infraestrutura em PostgreSQL e uma interface limpa, responsiva e direta.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts', 'NextAuth', 'Zod'],
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/typedash',
    liveUrl: 'https://typedash.emanuelvini.dev',
    badges: ['Real-Time', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Métricas', value: 'Cálculo de WPM e precisão assíncronos' },
      { label: 'Ranking', value: 'Leaderboard sincronizado globalmente' },
      { label: 'Auth', value: 'Integração robusta com GitHub' },
      { label: 'Data Viz', value: 'Análise de histórico com Recharts' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'ryzen-shop-bot',
    name: 'RyzenShopBot',
    shortDesc: 'Bot Discord completo com economia, moderação e sistema de tickets.',
    longDesc:
      'Bot oficial do servidor Discord RyzenShop desenvolvido em TypeScript com discord.js. Conta com sistema de tickets interativo com select menus e categorias (Financeiro, Ativação de Nitro, Outros), motor de economia completo (carteira, banco, trabalho com cooldown, recompensa diária, loja e leaderboard), proteção anti-invite, rotador de presença dinâmico e sugestão fuzzy de comandos por similaridade para lidar com erros de digitação.',
    category: 'Automation & Bots',
    tech: ['TypeScript', 'discord.js', 'Node.js'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/RyzenShopBot',
    badges: ['Discord Bot', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Tickets', value: 'Painel com select menus e categorias dinâmicas' },
      { label: 'Economia', value: 'Carteira, banco, trabalho, daily e leaderboard' },
      { label: 'Fuzzy CLI', value: 'Sugestão de comandos por similaridade' },
      { label: 'Anti-Invite', value: 'Proteção automática contra links Discord' },
    ],
    year: 2023,
    updatedAt: '2023-10-01',
  },
  {
    id: 'ryzen-hosting',
    name: 'RyzenHosting Site',
    shortDesc: 'Plataforma institucional de hosting com tabelas de preço e animações.',
    longDesc:
      'Plataforma web institucional criada para um serviço de hosting de games e infraestrutura cloud. Exibe soluções de hosting (Minecraft, VPS Gaming, Dedicados, Web, Apps) com tabelas de preços dinâmicas, avaliações de clientes e destaques interativos. Marco histórico: construído em 2022 aos 12 anos de idade, preservado como evidência de iniciativa precoce com Next.js, React e TypeScript.',
    category: 'Web Products',
    tech: ['Next.js', 'React', 'TypeScript', 'Chakra UI', 'Framer Motion'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/ryzen-site',
    badges: ['Legacy', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Contexto', value: 'Primeiro projeto Next.js — construído aos 12 anos' },
      { label: 'Produto', value: 'Plataforma institucional de hosting de games' },
      { label: 'Stack', value: 'Next.js, Chakra UI e Framer Motion' },
      { label: 'Preservação', value: 'Evidência pública de evolução técnica' },
    ],
    year: 2022,
    updatedAt: '2022-06-01',
  },
  {
    id: 'dv-duels',
    name: 'DVDuels',
    shortDesc: 'Plugin Minecraft de duelos 1v1 com stats persistentes em MySQL.',
    longDesc:
      'Plugin customizável de duelos 1v1 para servidores Spigot/Paper 1.19.4. Desenvolvido como desafio prático de admissão para a DevRoom (2022-2023). Implementa isolamento de visibilidade de arena com `Player#hidePlayer`, sistema de kits configuráveis via YAML, contagem regressiva com travamento de movimento, persistência de stats em MySQL com HikariCP e cache Caffeine, e restauração automática de localização ao fim da partida.',
    category: 'Automation & Bots',
    tech: ['Java', 'Spigot API', 'MySQL', 'HikariCP', 'Caffeine', 'Maven'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/dv-duels',
    badges: ['Java', 'Legacy', 'Open Source'],
    highlights: [
      { label: 'Isolamento', value: 'Invisibilidade de arena com hidePlayer API' },
      { label: 'Persistência', value: 'MySQL + HikariCP + Caffeine cache' },
      { label: 'Kits', value: 'Sistema customizável por YAML' },
      { label: 'Contexto', value: 'Trial DevRoom — 2022/2023' },
    ],
    year: 2022,
    updatedAt: '2023-01-01',
  },
  {
    id: 'portifolio-frontend',
    name: 'Portfolio Frontend',
    shortDesc: 'Base arquitetural anterior do portfólio web corporativo.',
    longDesc:
      'Versão legada do portfólio pessoal, utilizada como laboratório prático para pesquisa de interfaces de usuário, estruturação de componentes e apresentação profissional. Serviu como a fundação arquitetural para a atual presença online, mantendo as diretrizes de código limpo e identidade visual marcante.',
    category: 'Web Products',
    tech: ['Next.js', 'TypeScript', 'React'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/portifolio-frontend',
    liveUrl: 'https://emanuelvini.dev',
    badges: ['Portfolio', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Aplicação', value: 'Pesquisa e design de interfaces' },
      { label: 'Stack', value: 'Desenvolvido em Next.js e React' },
      { label: 'Evolução', value: 'Fundação para a estrutura digital atual' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
];

const projectsEn: Project[] = [
  {
    id: 'simple-bank',
    name: 'Simple Bank',
    shortDesc: 'Mobile-first banking ledger demo with double-entry bookkeeping and AI assistant.',
    longDesc:
      'Full-stack, single-repository Next.js application that simulates a mobile banking ledger. Demonstrates real-world patterns for authentication via Auth.js v5, protected API routes, double-entry bookkeeping, idempotent UUID-based transfers with QR code payment keys, authenticated PDF receipt generation, and AI-powered transaction intelligence via Google Gemini. The UI follows the Dracula colour palette with glassmorphism panels and Framer Motion page transitions.',
    category: 'Financial Systems',
    tech: ['Next.js', 'Auth.js', 'Prisma', 'PostgreSQL', 'Google Gemini', 'TypeScript', 'Tailwind CSS'],
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/simple-bank',
    liveUrl: 'https://bank.emanuelvini.dev',
    images: ['/projects/simple-bank/image1.png', '/projects/simple-bank/image2.png', '/projects/simple-bank/image3.png', '/projects/simple-bank/image4.png'],
    badges: ['Transactional', 'Auth', 'AI', 'Dashboard', 'TypeScript'],
    highlights: [
      { label: 'Ledger', value: 'Double-entry wrapped in atomic Prisma transaction' },
      { label: 'AI', value: 'Banking assistant powered by Google Gemini' },
      { label: 'Payment Keys', value: 'UUID-based keys with per-key QR codes' },
      { label: 'PDF', value: 'Authenticated receipt generation endpoint' },
    ],
    year: 2026,
    updatedAt: '2026-06-01',
  },
  {
    id: 'apiflash',
    name: 'apiFlash',
    shortDesc: 'Lightweight HTTP client for in-browser endpoint testing.',
    longDesc:
      'A dark-first tool engineered for issuing HTTP requests (GET, POST, PUT, DELETE) featuring advanced header support, a request body editor, and instantaneous JSON response visualization. Designed to provide maximum speed and minimal friction, heavily optimizing the developer workflow.',
    category: 'Developer Tools',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    color: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/api-flash',
    liveUrl: 'https://apiflash.emanuelvini.dev',
    badges: ['API', 'Speed Optimized', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Methods', value: 'GET, POST, PUT, DELETE' },
      { label: 'UX', value: 'Dracula theme, zero-config environment' },
      { label: 'Headers', value: 'Dedicated panel for advanced configuration' },
      { label: 'Response', value: 'Optimized rendering of JSON payloads' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'browia',
    name: 'Browia',
    shortDesc: 'Browser extension with an autonomous AI agent operating via MCP.',
    longDesc:
      'Manifest V3 browser extension that docks a side panel where an autonomous AI agent operates the active tab in real time using the Model Context Protocol (MCP). Supports OpenAI, Google Gemini (families 1.5 to 3.5), and local Ollama instances. The agent runs up to 12 autonomous iterations with intelligent separation between safe tools (read/inspect) that run automatically and sensitive tools (click, type, navigate) that require user approval. Includes a dynamic CORS bypass for local Ollama via declarativeNetRequest.',
    category: 'Developer Tools',
    tech: ['TypeScript', 'React', 'Manifest V3', 'MCP', 'Ollama', 'OpenAI', 'Google Gemini'],
    color: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/browia',
    badges: ['AI', 'Browser Extension', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Providers', value: 'OpenAI, Gemini (1.5-3.5) and local Ollama' },
      { label: 'Autonomy', value: 'MCP execution loop up to 12 uninterrupted iterations' },
      { label: 'Safety', value: 'Sensitive tools require explicit user approval' },
      { label: 'CORS Bypass', value: 'declarativeNetRequest for local Ollama' },
    ],
    year: 2026,
    updatedAt: '2026-04-01',
  },
  {
    id: 'lowvia',
    name: 'Lowvia',
    shortDesc: 'Desktop AI assistant with autonomous Deep Research and offline model support.',
    longDesc:
      'Electron desktop application featuring an AI assistant that runs local models via Ollama and connects to OpenRouter for state-of-the-art models like GPT-4 and Claude 3. Includes an autonomous Deep Research mode that formulates web searches, navigates found pages, scrapes content, and cross-references data before answering. Renders advanced Markdown, syntax-highlighted code blocks (Highlight.js), and mathematical expressions (KaTeX). Supports PDF report export.',
    category: 'Developer Tools',
    tech: ['Electron', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Ollama', 'OpenRouter'],
    color: 'var(--dracula-cyan)',
    glowColor: 'rgba(139, 233, 253, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/lowvia',
    badges: ['AI', 'Electron', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Offline', value: 'Local models via Ollama — no cloud required' },
      { label: 'Deep Research', value: 'Autonomous web research with scraping and cross-referencing' },
      { label: 'Rendering', value: 'Markdown, code blocks, KaTeX and PDF export' },
      { label: 'Providers', value: 'Ollama + OpenRouter (GPT-4, Claude 3)' },
    ],
    year: 2026,
    updatedAt: '2026-05-01',
  },
  {
    id: 'snippetvault',
    name: 'SnippetVault',
    shortDesc: 'Full-stack case study for organizing technical knowledge.',
    longDesc:
      'Portfolio project structured as a SaaS-style product for developers. SnippetVault demonstrates GitHub authentication, Prisma data modeling, Zod contract validation, an operational dashboard, public search, and sharing flows. More than a snippet vault, it presents architecture decisions, product UX, and code organization in a complete full-stack application.',
    category: 'Developer Tools',
    tech: ['Next.js', 'Prisma', 'NextAuth', 'Zod', 'TypeScript'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.22)',
    githubUrl: 'https://github.com/emanuelVINI01/snippetvault',
    liveUrl: 'https://snippetvault.emanuelvini.dev',
    badges: ['Auth', 'Search', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Product', value: 'Management dashboard for developers' },
      { label: 'Architecture', value: 'Next.js, Prisma, NextAuth, and Zod' },
      { label: 'Discovery', value: 'Public search and shareable links' },
      { label: 'Technical case', value: 'Full-stack app with auth, data, and public search' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'typedash',
    name: 'TypeDash',
    shortDesc: 'Typing analytics platform providing real-time metrics.',
    longDesc:
      'High-performance application for typing assessment. Computes WPM (Words Per Minute) and accuracy metrics in real-time, maintaining detailed performance history, generating evolutionary charts, and structuring a global leaderboard. Leverages PostgreSQL infrastructure alongside a clean, responsive, and direct interface.',
    category: 'Web Products',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts', 'NextAuth', 'Zod'],
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    githubUrl: 'https://github.com/emanuelVINI01/typedash',
    liveUrl: 'https://typedash.emanuelvini.dev',
    badges: ['Real-Time', 'Dashboard', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Metrics', value: 'Asynchronous WPM and accuracy calculation' },
      { label: 'Ranking', value: 'Globally synchronized leaderboard' },
      { label: 'Auth', value: 'Robust GitHub integration' },
      { label: 'Data Viz', value: 'Historical analytics powered by Recharts' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
  {
    id: 'ryzen-shop-bot',
    name: 'RyzenShopBot',
    shortDesc: 'Full-featured Discord bot with economy engine, moderation, and ticket system.',
    longDesc:
      'Official Discord bot for the RyzenShop server, built with TypeScript and discord.js. Features an interactive ticket system using select menus with categories (Financial, Nitro Activation, Others), a complete economy engine (wallet, bank, work with cooldown, daily reward, shop, leaderboard), automatic anti-invite protection, a dynamic presence rotator, and fuzzy command suggestions using similarity algorithms to handle typos gracefully.',
    category: 'Automation & Bots',
    tech: ['TypeScript', 'discord.js', 'Node.js'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.2)',
    githubUrl: 'https://github.com/emanuelVINI01/RyzenShopBot',
    badges: ['Discord Bot', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Tickets', value: 'Interactive panel with dynamic select menu categories' },
      { label: 'Economy', value: 'Wallet, bank, work, daily rewards and leaderboard' },
      { label: 'Fuzzy CLI', value: 'Similarity-based command suggestions on typos' },
      { label: 'Anti-Invite', value: 'Automatic Discord invite link protection' },
    ],
    year: 2023,
    updatedAt: '2023-10-01',
  },
  {
    id: 'ryzen-hosting',
    name: 'RyzenHosting Site',
    shortDesc: 'Institutional hosting platform with dynamic pricing and interactive highlights.',
    longDesc:
      'Modern institutional web platform created for a game hosting and cloud infrastructure service. Showcases hosting solutions including Minecraft servers, VPS Gaming, Dedicated Servers, Web Hosting, and App deployment — with dynamic pricing tables, customer reviews, and interactive feature highlights. A historical milestone: originally built in 2022 at 12 years old, preserving the developer\'s earliest hands-on experience with Next.js, React, and TypeScript.',
    category: 'Web Products',
    tech: ['Next.js', 'React', 'TypeScript', 'Chakra UI', 'Framer Motion'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/ryzen-site',
    badges: ['Legacy', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Context', value: 'First Next.js project — built at age 12' },
      { label: 'Product', value: 'Game hosting institutional platform' },
      { label: 'Stack', value: 'Next.js, Chakra UI and Framer Motion' },
      { label: 'Preservation', value: 'Public evidence of technical evolution' },
    ],
    year: 2022,
    updatedAt: '2022-06-01',
  },
  {
    id: 'dv-duels',
    name: 'DVDuels',
    shortDesc: '1v1 Minecraft duel plugin with arena isolation and MySQL stat persistence.',
    longDesc:
      'Customizable 1v1 duel plugin built for Minecraft Spigot/Paper 1.19.4 servers. Developed as the practical admission challenge (trial) for DevRoom (2022-2023). Implements dynamic player visibility isolation via Player#hidePlayer, YAML-configurable kit system, ActionBar countdown with movement freeze, MySQL stats persistence powered by HikariCP connection pooling and Caffeine caching, and automatic location restoration upon duel completion.',
    category: 'Automation & Bots',
    tech: ['Java', 'Spigot API', 'MySQL', 'HikariCP', 'Caffeine', 'Maven'],
    color: 'var(--dracula-orange)',
    glowColor: 'rgba(255, 184, 108, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/dv-duels',
    badges: ['Java', 'Legacy', 'Open Source'],
    highlights: [
      { label: 'Isolation', value: 'Arena visibility with hidePlayer API' },
      { label: 'Persistence', value: 'MySQL + HikariCP + Caffeine cache' },
      { label: 'Kits', value: 'YAML-configurable kit system' },
      { label: 'Context', value: 'DevRoom trial project — 2022/2023' },
    ],
    year: 2022,
    updatedAt: '2023-01-01',
  },
  {
    id: 'portifolio-frontend',
    name: 'Portfolio Frontend',
    shortDesc: 'Previous architectural foundation of the corporate web portfolio.',
    longDesc:
      'Legacy version of the personal portfolio, utilized as a practical laboratory for user interface research, component structuring, and professional presentation. It served as the architectural foundation for the current online presence, strictly adhering to clean code guidelines and a distinct visual identity.',
    category: 'Web Products',
    tech: ['Next.js', 'TypeScript', 'React'],
    color: 'var(--dracula-purple)',
    glowColor: 'rgba(189, 147, 249, 0.18)',
    githubUrl: 'https://github.com/emanuelVINI01/portifolio-frontend',
    liveUrl: 'https://emanuelvini.dev',
    badges: ['Portfolio', 'Open Source', 'TypeScript'],
    highlights: [
      { label: 'Application', value: 'Interface research and design' },
      { label: 'Stack', value: 'Developed utilizing Next.js and React' },
      { label: 'Evolution', value: 'Foundation for the current digital structure' },
    ],
    year: 2026,
    updatedAt: '2026-03-29',
  },
]
export const getProjects = (lang: Language): Project[] => {
  return lang === 'pt' ? projectsPt : projectsEn;
};

export const getCategories = (lang: Language): { key: ProjectCategory | 'all'; label: string; color: string }[] => {
  return lang === 'pt' ? [
    { key: 'all', label: 'Todos', color: 'var(--dracula-purple)' },
    { key: 'Financial Systems', label: 'Sistemas Financeiros', color: 'var(--dracula-cyan)' },
    { key: 'Developer Tools', label: 'Ferramentas de Desenvolvimento', color: 'var(--dracula-green)' },
    { key: 'Web Products', label: 'Produtos Web', color: 'var(--dracula-purple)' },
    { key: 'Automation & Bots', label: 'Automação & Bots', color: 'var(--dracula-orange)' },
  ] : [
    { key: 'all', label: 'All', color: 'var(--dracula-purple)' },
    { key: 'Financial Systems', label: 'Financial Systems', color: 'var(--dracula-cyan)' },
    { key: 'Developer Tools', label: 'Developer Tools', color: 'var(--dracula-green)' },
    { key: 'Web Products', label: 'Web Products', color: 'var(--dracula-purple)' },
    { key: 'Automation & Bots', label: 'Automation & Bots', color: 'var(--dracula-orange)' },
  ];
};
