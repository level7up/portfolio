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

<!-- impeccable:design-map -->
Name: AbdulAlim Mohamed — Portfolio
Colors: primary: burgundy #6b1f2e; secondary: stamp-purple #4a3f8f; tertiary: cream #f7f2e7; neutral: paper #f4efe4; secondary: stamp-green #2f6f4e; secondary: stamp-red #b3323c (+4 more in the sidecar)
Fonts: Geist (display, headline, body); Geist Mono (label)
Spacing: tight 4px, md 20px, lg 40px
Radius: none 0px, stamp 2px, stamp-oval 50%
North Star: "The Well-Traveled Passport"
Rules:
- The One Document Rule. The whole page is one booklet.
- The Ink-on-Paper Rule. Stamps and endorsement chips are pure ink on the page ground: `mix-blend-multiply`, no background fill, opacity 0.87–0.94 varying by ink.
- The Machine-Line Rule. Data is always mono tabular caps — fields, periods, stamp text.
- The No-Glow Rule. Nothing blurs, nothing gradients, nothing glows.
Elevation:
- Header Rest: none
- Header Scrolled: 0 3px 12px rgba(28,28,24,0.3)
Don't:
- Don't introduce gradients, glass, blur decoration, or shadows on resting elements.
- Don't put a background fill behind stamps or endorsement chips.
- Don't round document corners; ovals are for stamps only.
- Don't add eyebrow labels above headings; the heading carries its own weight.
Do:
- Do set every new section as a booklet page: running head, 2px rule, page number.
- Do carry emphasis only through stamps and ink color; keep the ground and cards quiet.
- Do keep motion to one settle per element on first view, transform-only, from a visible default.
- Do use mono tabular caps for anything a machine would have printed.
Full: .impeccable/design-full.md (read a section when you need its detail)
