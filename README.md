## Stack
- Next.js 14 (App Router, SSR por padrão)
- React 18
- Tailwind CSS (estilos globais em `src/styles/globals.css` e utilitários em `src/index.css`)
- Radix UI + utilitários (apenas componentes necessários)

## Estrutura de pastas (principal)
```
src/
  app/
    layout.tsx      # Shell HTML. Importa estilos globais. Server Component
    page.tsx        # Página inicial. Server Component
  components/
    Header.tsx      # Client Component (menu mobile / useState)
    Contact.tsx     # Client Component (formulário / useState)
    Hero.tsx        # Server Component
    Services.tsx    # Server Component
    About.tsx       # Server Component
    Projects.tsx    # Server Component
    Footer.tsx      # Server Component
    figma/
      ImageWithFallback.tsx # Client (usa useState para fallback)
    ui/
      button.tsx, input.tsx, textarea.tsx, card.tsx, badge.tsx, utils.ts
  styles/
    globals.css     # Tokens e camadas base
  index.css         # CSS utilitário do Tailwind
```

## Server vs Client Components
- Server Components: padrão (sem hooks de cliente, sem `useEffect`/`useState`). Melhor para SEO, performance e TTFB.
- Client Components: arquivos com `"use client"` no topo. Necessários quando há estado, efeitos, handlers (ex.: menu mobile, formulários controlados).

Componentes client atuais: `Header`, `Contact`, `ImageWithFallback`. O restante é server.

## Scripts
- `npm run dev`: desenvolvimento (`http://localhost:3000`)
- `npm run build`: build de produção
- `npm start`: servir build de produção

## Como rodar
1. `npm install`
2. `npm run dev`

