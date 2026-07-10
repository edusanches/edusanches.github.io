# Padrões de estilo

Tokens de design usados em todo o site. O mesmo bloco `:root` está duplicado em
`index.html`, `_layouts/base.html` e `escrever/index.html` (cada página é
autocontida) — **mantenha-os em sincronia**.

## Tipografia

Três famílias e papéis fixos. O par principal vem do Adobe Fonts, com
fallbacks livres equivalentes no Google Fonts:

| Token             | Família        | Uso                                         |
| ----------------- | -------------- | ------------------------------------------- |
| `--font-display`  | Anzeigen Grotesk / Anton | manchetes: nome, títulos de post/seção (h1/h2), título do editor |
| `--font-body`     | Corporate A / Instrument Serif | texto corrido, subtítulos (itálico), h3 |
| `--font-sans`     | Corporate S / system-ui | UI: botões em **700** (home e ações do editor), TOC |
| `--font-mono`     | IBM Plex Mono  | datas, breadcrumb/topbar, back-link, toolbar, código, meta |

Anzeigen Grotesk é usada no peso próprio 400, sem negrito sintetizado, e
**só em corpo grande** (manchetes em caixa alta) — condensada display fica
apertada em corpo pequeno, então nunca em botões, navegação ou rótulos.
Corporate A: romana e itálica na leitura, subtítulos e passagens pessoais.
Corporate S (a sans da mesma família Corporate do Weidemann, 400/700 +
itálicas no kit) é a voz de UI: botões e navegação local. IBM Plex Mono é a
voz funcional (wayfinding, ferramentas, metadados) e não participa da marca.
Fallbacks: Anton e Instrument Serif via Google Fonts; a Corporate S degrada
para a pilha de sistema (`-apple-system`/`Segoe UI`); IBM Plex Mono 400/500.
Sempre use `font-family: var(--font-…)` — nunca o nome da fonte direto.

**Identidade tipográfica:** Anzeigen Grotesk + Corporate A (com a Corporate S
como apoio de UI) é o conjunto permanente do site inteiro; a divisão de
papéis acima é a regra de aplicação.

As fontes são servidas pelo Adobe Fonts (web project `qjf5rzi` em
`use.typekit.net`, atrelado à assinatura Creative Cloud) em todas as páginas.
Anton e Instrument Serif ficam na pilha como fallbacks para o site continuar
coerente caso o kit não carregue.

Na home, a tagline continua em três vozes: "creative mind" reto em `--paper`
cheio, bullet em `.45`, "building things for" itálico em
`rgba(var(--paper-rgb), .75)` e só "fun" em areia `#ffc37a`.

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

- **Cursor:** todo o site usa o cursor compartilhado de
  `assets/site-cursor.css` + `assets/site-cursor.js`. A seta "pipa" é branca e
  usa `mix-blend-mode: difference`, portanto assume sempre o inverso exato da
  cor sob ela. Campos editáveis recebem um I-beam com a mesma inversão. O
  cursor nativo só é ocultado em ponteiros finos e continua sendo o fallback
  se JavaScript não carregar; em touch o cursor customizado nem é criado.

- **Fundo da página:** `var(--ink) radial-gradient(120% 80% at 50% -10%, #18181b 0%, var(--ink) 58%) no-repeat` (blog e prévia do editor). A home usa um campo tonal "líquido" (WebGL; fallback estático em canvas 2D e, sem JS, gradientes CSS no `body` — os três compartilham a mesma rampa de cores).
- **Largura de leitura:** `max-width: 680px` no blog.
- **Foco:** `:focus-visible` com `outline: 2px solid rgba(var(--paper-rgb), .7)`.
- **Movimento:** sempre respeitar `@media (prefers-reduced-motion: reduce)`.
- Tema escuro apenas (`color-scheme: dark`).
