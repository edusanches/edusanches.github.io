# Padrões de estilo

Tokens de design usados em todo o site. O mesmo bloco `:root` está duplicado em
`index.html`, `_layouts/base.html` e `escrever/index.html` (cada página é
autocontida) — **mantenha-os em sincronia**.

## Tipografia

Três famílias, papéis fixos (carregadas via Google Fonts):

| Token             | Família        | Uso                                         |
| ----------------- | -------------- | ------------------------------------------- |
| `--font-display`  | Sora           | títulos, nome, rótulos de botão             |
| `--font-body`     | Inter          | texto corrido e UI                          |
| `--font-mono`     | IBM Plex Mono  | datas, breadcrumb, código, meta             |

Pesos carregados: Sora 600/700/800 · Inter 400/500/600 · IBM Plex Mono 400/500.
Sempre use `font-family: var(--font-…)` — nunca o nome da fonte direto.

**Identidade da marca (lockup da home):** par permanente
**Anzeigen Grotesk** (nome em caps condensadas; peso único, nunca
sintetizar negrito) + **Corporate A** (tagline; peso 300 no CSS — usa
Light/Light Italic quando disponíveis no kit). Servidas pelo Adobe Fonts
(web project `qjf5rzi` em `use.typekit.net`, atrelado à assinatura
Creative Cloud) e carregadas só na home. Fallbacks livres na pilha:
**Anton** e **Instrument Serif** (Google Fonts, reta + itálica) — se o
kit cair, o lockup degrada para eles sem quebrar. Arranjo: nome em uma
linha; tagline colada abaixo em três vozes — "creative mind" reto em
`--paper` cheio (a voz mais visível), bullet em `.45`, "building things
for" itálico em `rgba(var(--paper-rgb), .75)` e só "fun" em areia
`#ffc37a` (único acento de cor, vindo da rampa do fundo). Uso exclusivo
da identidade (nome/subtítulo,
reels); não usar em UI. A serifa de corpo dos posts do blog é uma escolha
separada (a Corporate A também tem pesos de texto e é candidata natural).

## Cores

| Token         | Valor                       | Uso                                   |
| ------------- | --------------------------- | ------------------------------------- |
| `--ink`       | `#0a0a0b`                   | fundo da página                       |
| `--panel`     | `#121214`                   | superfícies elevadas (inputs, chips)  |
| `--paper`     | `#f5f6f7`                   | texto primário                        |
| `--soft`      | `#c7c7cc`                   | texto secundário                      |
| `--grey`      | `#9a9a9f`                   | texto terciário / meta                |
| `--paper-rgb` | `245, 246, 247`             | base de fills/bordas translúcidos     |
| `--line`      | `rgba(var(--paper-rgb),.12)`| hairlines / bordas                    |

Para transparências do branco use `rgba(var(--paper-rgb), <alpha>)` — não
literais `rgba(245, 246, 247, …)`. Branco/preto puros (`#fff`, `#000`) ficam
reservados a brilhos e sombras.

## Forma e layout

| Token         | Valor   | Uso                                              |
| ------------- | ------- | ------------------------------------------------ |
| `--radius-sm` | `6px`   | code, chips, botões pequenos                     |
| `--radius-md` | `10px`  | imagens, vídeos, blocos de código, inputs        |
| `--radius-lg` | `14px`  | botões grandes (home)                            |
| `--reading`   | `680px` | largura da coluna de leitura (blog/editor)        |

Círculos usam `50%`; o raio do `outline` de foco fica em `2px` literal.

## Espaçamento

Escala de base 4 para `gap` e espaçamentos simples:
`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` ·
`--space-5: 24px` · `--space-6: 32px` · `--space-7: 48px`.

Use os tokens para `gap` e paddings de valor único. Paddings compostos de
layout (ex.: `40px 22px 120px` no `.wrap`) e a maré tipográfica (`margin` entre
parágrafos/headings) seguem calibrados na unha — não force a escala neles.

## Convenções

- **Cursor:** todo o site usa um cursor customizado — seta "pipa" de cantos
  arredondados, inclinada 15° (SVG inline via `cursor: url(...)`): **preta**
  na home (fundo colorido) e **branca com contorno preto** (`#f5f6f7` /
  `#0a0a0b`, para não sumir sobre texto claro) no blog e no editor
  (fundo escuro). O bloco de CSS é o mesmo em `index.html`,
  `_layouts/base.html` e `escrever/index.html`, mudando só a cor — mantenha
  em sincronia. Campos de texto voltam ao I-beam nativo
  (`input, textarea, select, [contenteditable]`); não usar `cursor: pointer`
  em elementos novos (use `inherit`).

- **Fundo da página:** `var(--ink) radial-gradient(120% 80% at 50% -10%, #18181b 0%, var(--ink) 58%) no-repeat` (blog e prévia do editor). A home usa um campo tonal "líquido" (WebGL; fallback estático em canvas 2D e, sem JS, gradientes CSS no `body` — os três compartilham a mesma rampa de cores).
- **Largura de leitura:** `max-width: 680px` no blog.
- **Foco:** `:focus-visible` com `outline: 2px solid rgba(var(--paper-rgb), .7)`.
- **Movimento:** sempre respeitar `@media (prefers-reduced-motion: reduce)`.
- Tema escuro apenas (`color-scheme: dark`).
