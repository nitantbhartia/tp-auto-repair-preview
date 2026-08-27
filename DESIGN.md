---
version: alpha
name: "T P Auto Repair"
description: "A precision garage brand site built around honest diagnosis, shop signals, and the practical next move."
colors:
  primary: "#101416"
  primary-soft: "#171D20"
  accent: "#F0713E"
  accent-soft: "#FFB38E"
  surface: "#F3F0E8"
  surface-muted: "#E8E4D9"
  text: "#182023"
  text-muted: "#718087"
  line: "#C7C9C2"
typography:
  sans: { fontFamily: '"Avenir Next", Avenir, Inter, system-ui, sans-serif' }
  display: { fontFamily: '"Arial Narrow", "Avenir Next Condensed", Inter, system-ui, sans-serif' }
  mono: { fontFamily: '"SFMono-Regular", Consolas, monospace' }
rounded:
  DEFAULT: "0rem"
spacing:
  section-gap: "7.5rem"
  page-max: "77.5rem"
---

# T P Auto Repair design context

## North star

“Precision garage”: the calm confidence of a good inspection sheet, translated into a dark asphalt, oxidized-orange, and paper system. The signature is not a generic wrench icon; it is the combination of the TP inspection mark, grid lines, orange service-bay accents, and sourced shop signals.

## Register and audience

- **Audience:** San Diego drivers deciding whether to call an independent repair shop.
- **Primary action:** Call 619-299-6966.
- **Locale:** English default with Spanish copy switching; no URL or layout change.
- **Evidence:** Services, rating, review count, address, hours, and “since 1984” come from `SOURCES.md`.
- **Content restraint:** No invented warranties, price promises, repair outcomes, guarantees, customer quotes, or credentials.
- **Anti-references:** Cream-and-serif tree-service styling, solar observatory styling, generic dashboard cards, and repeated public-record blocks without an automotive point of view.

## Layout

The hero is a full-bleed service-bay photograph with left-weighted copy and a floating rating object. The page then moves through a signal band, inspection detail, named service index, verified fact cards, shop contact panel, FAQ, and final call. It uses a 1240px shell, 120px desktop section spacing, and a narrow-screen fixed call bar.

## Runtime ownership

CSS variables in `styles.css` are the runtime token owner. This file records their intent and values; `SOURCES.md` owns business facts. Shared behavior lives in `script.js`: language switching, mobile menu, one-open FAQ, reveal motion, and year text.

## Imagery

`assets/tp-garage.jpg` and `assets/tp-brakes.jpg` are original illustrative concept images for this preview. They must be replaced with approved T P Auto Repair photography before final publication and are never presented as verified customer work.

## Behavior and accessibility

Native links, buttons, and `<details>` are used for interaction. Focus-visible states, semantic labels, reduced-motion behavior, responsive layout, and standards-based scrollbars are included. The mobile menu exposes `aria-expanded`; language controls expose `aria-pressed`.
