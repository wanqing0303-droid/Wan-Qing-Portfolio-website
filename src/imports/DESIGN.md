---
name: Technical Brutalism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  active-red: '#E02020'
  electric-cyan: '#00DEFF'
  border-subtle: '#E5E5E5'
  border-ultra-light: '#F0F0F0'
  inactive-gray: '#CCCCCC'
typography:
  display-lg:
    fontFamily: Space Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.06em
  headline-sm:
    fontFamily: Space Mono
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.06em
  body-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.04em
  body-sm:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Space Mono
    fontSize: 9px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies a stark avant-garde, clinical techno-brutalist aesthetic rooted in underground electronic music and contemporary gallery curation. It rejects decorative ornamentation, skeuomorphism, and superfluous soft curves in favor of industrial precision, technical metadata, and austere spatial balance.

The audience consists of electronic music connoisseurs, artists, collectors, and design-literate clubgoers. The interface must feel like an open technical apparatus, an unembellished architectural blueprint, or an archive ledger. High contrast, precise corner crop marks (L-brackets), disciplined monospace typography, and micro-scale square bullet indicators establish a sense of uncompromising curation and utilitarian elegance.

## Colors

The palette is strictly anchored in high-contrast monochrome, built upon an absolute stark `#FFFFFF` canvas with pure `#000000` for primary typography, icons, and crop framing marks.

- **Primary (`#000000`)**: Used for typography, default square markers, active metadata indicators, and structural corner brackets.
- **Secondary (`#8B8B8B`)**: Used for secondary copy, muted index counts, and passive tabular data.
- **Neutral (`#FFFFFF`)**: The unyielding, non-textured flat plane that provides high-void whitespace across all viewports.
- **Active Red (`#E02020`)**: A sharp micro-accent deployed solely to designate current active states, notably the 6px solid square marker beside active navigation titles.
- **Electric Cyan (`#00DEFF`)**: Reserved for digital highlight triggers and interactive focus anomalies.
- **Borders (`#E5E5E5` / `#F0F0F0`)**: Hairline dividers and inactive card bounding boxes that remain barely perceptible.

## Typography

The typographic system relies on strict uppercase monospaced typefaces (`Space Mono`, with fallback to `Courier Prime` or system monospace engines). Monospaced proportions enforce an architectural rhythm, treating letters as discrete modular units.

- **Case**: 100% Uppercase across all headlines, meta labels, navigation links, and editorial notes.
- **Tracking / Letter-spacing**: Expanded letter-spacing (`0.04em` to `0.1em`) across all roles to ensure legibility and clinical precision.
- **Index Prefixing**: Numerical data, dates, and sequential items are strictly bracketed, such as `[01]`, `[6]`, or `[12/62]`.
- **Glyph Symbols**: System navigation cues rely on raw ASCII or monospaced glyph sets: `«`, `»`, `> `, `< `, and `↳` for actions and redirects.

## Layout & Spacing

Layouts operate on an expansive canvas characterized by extreme negative space and edge-pinned technical anchors.

- **Viewport Viewfinder Marks**: The outermost canvas boundary is framed on all four corners by technical L-shaped viewfinder crop marks (`12px` arm length, `1px` stroke, `#000000`).
- **Header Layout**: Edge-to-edge spread. The raw artistic logotype occupies the far top-left, while structured navigation items sit along the upper perimeter arranged into balanced multi-column pairs.
- **Grid Configuration**: A 12-column modular grid with generous outer margins (`2rem` desktop, `1rem` mobile). Elements do not fill spaces with solid color blocks; instead, they float precisely in white space or anchor within cropped bounding boxes.
- **Mobile Adaptation**: On viewport widths below `768px`, peripheral crop marks shift inward to an `8px` offset, multi-column navigation reflows into a single-column technical drawer or compressed vertical index, and horizontal carousels stack vertically.

## Elevation & Depth

This design system avoids all drop shadows, blurs, skeuomorphic shading, and tonal elevation. Depth is strictly two-dimensional and planar.

- **Zero Shadows**: No `box-shadow` or ambient lighting is permitted on any component or surface.
- **Depth via Framing & Framing Crop Marks**: Focal objects (such as vinyl records, artwork, or video previews) are isolated within explicit boundaries defined by four L-bracket corner marks or sharp 1px `#E5E5E5` hairline borders.
- **Opacity as Spatial Layering**: Peripheral carousel items fade into ghosted states using pure opacity step-downs (`opacity: 0.15` to `0.3`) rather than z-index layering or depth-of-field blurs.

## Shapes

The geometric rule is absolute: `border-radius: 0px` across every element, interactive control, image container, and marker.

- **Square Primitives**: Status indicators, list bullets, and active item tags are rendered as unrounded solid squares (`6px × 6px` or `8px × 8px`).
- **Viewfinder Crop Marks**: Corner brackets are crafted from two perpendicular 1px borders forming rigid 90-degree right angles with zero rounding.

## Components

### Technical Crop Marks (Viewfinder Frames)
Containers, card wrappers, and stage viewports feature corner crop marks:
- Composed of four corner anchors (`top-left`, `top-right`, `bottom-left`, `bottom-right`).
- Each bracket has a `12px` line length, `1px` border thickness, and `#000000` stroke color.
- Brackets frame either an edge-to-edge image or wrap an active element with `space-md` internal clearance.

### Navigation Links & Status Markers
- Every navigation item is preceded by an inline `6px × 6px` square bullet.
- Inactive items display a solid black square (`#000000`).
- The currently selected/active route displays a solid red square (`#E02020`).
- Text is set in `label-md`, uppercase, with count indices formatted in brackets (e.g., `EVENTS [6]`).

### Interactive Buttons & Action Links
- **Action Links**: Plain uppercase monospaced text followed by a right-angle return arrow (`↳`). Hovering switches color from `#000000` to `#8B8B8B` or triggers an underline.
- **Badge Buttons**: Inverted high-contrast black rectangles (`#000000` fill, `#FFFFFF` text), razor-sharp edges, containing a square marker plus label (e.g., `■ LIBRE`).
- **Paging Controls**: Bare glyph triggers such as `< PREV`, `NEXT >`, or playback controls `«`, `▷`, `»` spaced with `space-sm`.

### Event Index & Tabular Lists
- Horizontal rows with large vertical breathing room (`space-md` padding).
- Format: `[INDEX] [FLAG / ICON] EVENT_NAME ................. DATE`.
- Active or upcoming items are rendered in `#000000`; past or muted listings use `#CCCCCC` or `#8B8B8B`.

### Carousel & Center Stage
- Center viewport holds the primary featured object (e.g., center record sleeve or primary event key visual).
- Flanking items on left and right are clipped and desaturated/faded (`opacity: 0.25`).
- Center stage is topped with metadata header controls (badge tag on the left, transport navigation on the right) and bottom metadata (release code, title, artist, action links).

### Inputs & Forms
- Borderless inputs resting solely on a bottom 1px `#000000` border, or set inside four corner crop marks.
- Placeholder text in uppercase `#8B8B8B` with monospaced caret indicator.