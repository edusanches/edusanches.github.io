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

## Convenções

- **Fundo da página:** `var(--ink) radial-gradient(120% 80% at 50% -10%, #18181b 0%, var(--ink) 58%) no-repeat` (blog e prévia do editor). A home usa uma variação própria por causa da malha animada.
- **Largura de leitura:** `max-width: 680px` no blog.
- **Foco:** `:focus-visible` com `outline: 2px solid rgba(var(--paper-rgb), .7)`.
- **Movimento:** sempre respeitar `@media (prefers-reduced-motion: reduce)`.
- Tema escuro apenas (`color-scheme: dark`).
