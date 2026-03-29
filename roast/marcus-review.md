# Marcus Tan — Product Designer Review

---

## Summary

Aesthetically strong. Structurally broken in one critical place, and carrying several compounding issues that will hurt on mobile and kill conversions. The visual language is cohesive — typography, spacing, the dark CTA band — but the product decisions underneath are soft.

---

## Critical issue: No CTA above the fold

The hero section is full viewport height, beautifully composed, and has **no call to action**. There is a scroll indicator. That's it. A visitor who lands here has one instruction: scroll. This is a personal services site where the primary conversion is a contact form submission. The hero needs a primary CTA button ("Let's Talk") in the hero footer, alongside the subtext. The scroll indicator is supplementary, not sufficient.

---

## Design issues, ranked by severity

**1. Hero has no CTA — P0**
Covered above. Inexcusable on a conversion-oriented personal brand site. The scroll indicator disappears on mobile (`display: none` in the responsive CSS) making this even worse — mobile visitors get zero direction.

**2. Testimonials are credibility-negative — P0**
Anonymous avatars, no full names, no organisations. "Senior Leadership — Political Consulting" and "Partner — Election Strategy, National Party." These read as fabricated. The design of the testimonial cards is good; the content inside destroys what the design built. Either source real quotes with attribution or remove the section and redesign that page area.

**3. "3 — Core Capabilities" stat — P1**
This stat counts three items the visitor just scrolled past. It contributes zero information and signals that the stat block was populated to fill space, not to inform. It damages the credibility of the other two stats (360° and 0→1) by association.

**4. Contact section copy contradiction — P1**
The contact heading reads: "Direct line. No intake forms." Beneath it sits an intake form. This is either ironic or careless — either way, it creates a micro-friction moment that undermines the confident tone the rest of the site has established. Fix the heading copy.

**5. Three Google Fonts families on a cold load — P1**
Cormorant Garamond, DM Sans, Syne — three separate font families, each with multiple weights. On a slow connection (common in Indian tier-2/3 cities where some political clients operate), this creates a visible FOUT (flash of unstyled text) before the fonts render. Consider subsetting or reducing to two families.

**6. Nav logo at 36px height — P2**
The inline SVG logo includes a "POLITICAL CONSULTING" subtitle at 8.5px SVG font-size rendered at 36px display height. At that scale, the subtitle is approximately 4px tall in the browser — invisible and meaningless. Either increase the logo height in the nav, or remove the subtitle from the nav-scale version of the logo.

**7. Gold on cream contrast — P2**
`#8c6e18` on `#f5f0e8` for small text (the eyebrow labels, service outcomes, form labels) may fail WCAG AA at small sizes. The contrast ratio is approximately 3.8:1 — below the 4.5:1 threshold for normal text. Not a blocker but worth addressing if there's any accessibility concern with this audience.

**8. Sticky about layout on mid-width screens — P2**
At 1024px breakpoint the sticky layout collapses to single column (correct), but between 900–1024px the two-column grid is very cramped. Consider an earlier breakpoint at 960px for this section.

---

## What's working

- The dark CTA band is the right design move — it breaks the monotony of the cream sections and creates a natural pause before the contact form.
- The service card hover states (gold top border reveal) are precise and feel intentional.
- Scroll reveal animations are appropriately subtle — they don't distract.
- The form validation is functional and clear.
- Mobile hamburger implementation is clean.

---

## Verdict

Fix the missing hero CTA and the testimonials before this goes live. Everything else is refinement. The design foundation is strong enough that these fixes won't require a rebuild — they're copy and one button.
