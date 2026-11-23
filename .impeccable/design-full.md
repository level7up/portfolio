---
name: AbdulAlim Mohamed — Portfolio
description: A single-page portfolio built as a well-traveled passport: burgundy cover bands, security-paper ground, and entry stamps carrying every role and market.
colors:
  burgundy: "#6b1f2e"
  burgundy-deep: "#521522"
  burgundy-edge: "#3d0f1a"
  cream: "#f7f2e7"
  paper: "#f4efe4"
  paper-deep: "#efe7d6"
  paper-card: "#fbf8f1"
  ink: "#1c1c18"
  ink-soft: "#5c5850"
  stamp-purple: "#4a3f8f"
  stamp-green: "#2f6f4e"
  stamp-red: "#b3323c"
typography:
  display:
    fontFamily: "Geist, var(--font-geist-sans), sans-serif"
    fontWeight: 700
    letterSpacing: "0.04em"
    lineHeight: 1.02
  headline:
    fontFamily: "Geist, var(--font-geist-sans), sans-serif"
    fontWeight: 700
    letterSpacing: "0.08em"
  body:
    fontFamily: "Geist, var(--font-geist-sans), sans-serif"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, var(--font-geist-mono), monospace"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  stamp: "2px"
  stamp-oval: "50%"
spacing:
  tight: "4px"
  md: "20px"
  lg: "40px"
components:
  button-primary:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  entry-card:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: AbdulAlim Mohamed — Portfolio

## Overview

**Creative North Star: "The Well-Traveled Passport"**

The page is one document: a passport booklet for an engineer whose work crosses borders. Every section is a page of that booklet — a running head with a page number, not a card floating on a canvas. The ground is warm security paper with a faint burgundy guilloché watermark; identity lives in a burgundy cover band; and every role, market, and skill arrives as an ink stamp, pressed once, in one of four ink colors, multiplied into the paper so the ink reads as absorbed, never pasted.

The system refuses the AI-default portfolio: no centered headings over rounded soft-shadow cards, no blue accent, no gradient decoration, no dark mode. Depth comes only from overlap — stamps crossing document edges — and from ink density.

**Key Characteristics:**
- One document, paginated: running heads like `Page 03 · Entries` on every section
- Ink stamps as the only emphasis device, `mix-blend-multiply`, no fill behind them
- Machine lines: all data, dates, and fields set in mono tabular caps
- Engraved uppercase display lettering for names and headings
- Flat square document corners; ovals belong to stamps only

## Colors

One identity ink, one paper family, four stamp inks.

### Primary
- **Cover Burgundy** (#6b1f2e): the identity color — header band, footer band, entry-card header strips, primary buttons, link accents. Its rule `#3d0f1a` edges every burgundy surface.

### Secondary
- **Stamp Purple** (#4a3f8f): HashStudio entry stamps, Backend endorsements.
- **Stamp Green** (#2f6f4e): Falcon Portal stamps, Frontend endorsements.
- **Stamp Red** (#b3323c): alternate stamps and Tools/AI endorsements.

### Tertiary
- **Cover Cream** (#f7f2e7): text on burgundy surfaces only.

### Neutral
- **Security Paper** (#f4efe4): the page ground, carrying the guilloché watermark.
- **Paper Deep** (#efe7d6): entry-card header bands.
- **Document Card** (#fbf8f1): entry cards and form boxes that are paper, not stamps.
- **Document Ink** (#1c1c18): all body text, rules, and borders.
- **Faded Ink** (#5c5850): secondary text and field labels.

### Named Rules
**The One Document Rule.** The whole page is one booklet. Sections are pages with a running head and page number; a section that looks like a standalone card on a canvas has left the system.

**The Ink-on-Paper Rule.** Stamps and endorsement chips are pure ink on the page ground: `mix-blend-multiply`, no background fill, opacity 0.87–0.94 varying by ink. Ink never sits on a card.

## Typography

**Display Font:** Geist (var(--font-geist-sans))
**Body Font:** Geist (var(--font-geist-sans))
**Label/Mono Font:** Geist Mono (var(--font-geist-mono))

**Character:** A workhorse grotesk set as engraved caps for display, paired with a mono that stands in for OCR-B machine lines. The pairing is the passport's own: officials stamp and print; the holder's name is engraved.

### Hierarchy
- **Display** (700, clamp(2.4rem–4.6rem), 1.02): the holder's name only, uppercase.
- **Headline** (700, 1.5rem–1.875rem): section titles, uppercase, tracking 0.08em.
- **Title** (700, 1.05rem–1.25rem): entry roles and card headings, uppercase.
- **Body** (400, ~1rem, 1.625): paragraphs and bullets, measure ≤65ch.
- **Label** (700, 0.55–0.7rem, 0.12em, uppercase, tabular numerals): every field, date, and stamp line.

### Named Rules
**The Machine-Line Rule.** Data is always mono tabular caps — fields, periods, stamp text. Body prose is always the sans. A date set in the body face is a defect.

## Layout

A single continuous booklet: one column, max-width 6xl (72rem), 24px side padding. Sections stack with 80px vertical padding; inside a section, space above a heading beats space below it. The first viewport is the data page: name and fields left, the visa panel right on lg, stacked on mobile. Projects run as a stamp grid — 2 columns on phones, 3 on sm, 4 on lg — with per-stamp rotations of −3.2° to +3.2°. No horizontal scrolling at any width.

## Elevation & Depth

No shadows at rest, no gradients, no glow. Depth is overlap and ink: stamps cross document edges, inner stamp rings sit 1px misregistered, and multiply blending pulls the guilloché through every stamp. The one shadow in the system is functional: the fixed header earns `0 3px 12px rgba(28,28,24,0.3)` only once scrolled.

### Shadow Vocabulary
- **Header Rest** (`box-shadow: none`): default state.
- **Header Scrolled** (`0 3px 12px rgba(28,28,24,0.3)`): offset plus soft blur; appears with scroll only.

### Named Rules
**The No-Glow Rule.** Nothing blurs, nothing gradients, nothing glows. If depth is needed, overlap an ink element over a paper one.

## Shapes

Square document corners everywhere (0px radius): buttons, cards, headers, strips. Stamps own the only other geometry — ovals (`border-radius: 50%`) for visa-style marks and near-square (2px) for rectangular entry stamps — each a double border with a 1px-misregistered inner ring. Chips are square with full borders on every side; one-sided accent bars do not exist in this system.

## Components

### Buttons
- **Shape:** square corners (0px), 2px solid borders.
- **Primary:** Cover Burgundy fill, Cream engraved caps, 14px 28px padding, burgundy-edge border.
- **Hover / Focus:** fill darkens to Burgundy Deep; focus ring is a 2px burgundy outline at 2px offset.
- **Secondary:** transparent with Document Ink border; hover inverts to ink fill on paper text.

### Chips
- **Style:** 1px stamp-ink border, stamp-ink mono caps text, multiply blend, no fill.
- **State:** each chip carries a ±1° rotation from its index; selected emphasis does not exist — all endorsements are equal ink.

### Cards / Containers
- **Entry Card:** square, 2px Document Ink border, Document Card fill, 28px padding; a Paper Deep header band with entry number and period separated by a 2px rule.
- **Shadow Strategy:** none, per the No-Glow Rule.
- **Form Box** (About particulars): as entry card but with a burgundy title band and divided rows.

### Navigation
- **Header:** fixed burgundy band, 2px burgundy-edge bottom border; name in Cream engraved caps left; nav links in Cream mono caps with a 2px underline as the active state; mobile folds into a burgundy dropdown with hairline separators.

### Stamp (signature component)
The system's emphasis device. A double-bordered oval or rectangle in one of four inks: outer 2px, inner 1px ring inset 4px and 1px misregistered; mono caps lines inside; 0.87–0.94 opacity by ink; multiply blend; rotation between −9° and +9°. Lands once on scroll — a 0.5s settle from 6% overscale and 6° extra rotation, never a loop, never a fade from invisible (content is visible by default throughout).

## Do's and Don'ts

### Do:
- **Do** set every new section as a booklet page: running head, 2px rule, page number.
- **Do** carry emphasis only through stamps and ink color; keep the ground and cards quiet.
- **Do** keep motion to one settle per element on first view, transform-only, from a visible default.
- **Do** use mono tabular caps for anything a machine would have printed.

### Don't:
- **Don't** introduce gradients, glass, blur decoration, or shadows on resting elements.
- **Don't** put a background fill behind stamps or endorsement chips.
- **Don't** round document corners; ovals are for stamps only.
- **Don't** add eyebrow labels above headings; the heading carries its own weight.
