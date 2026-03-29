# Fix List — Prioritised
*Tarang Kulkarni — my-site/index.html*

---

## P0 — Launch Blockers
*Fix before deploying. These actively damage the site.*

---

**P0-1. No CTA above the fold**
- **Issue:** The hero section is full-viewport with no action for the visitor. One scroll indicator, no button. Mobile hides even the scroll indicator.
- **Flagged by:** Marcus, Ankit, Meera
- **Fix:** Add a "Let's Talk →" button to `.hero-foot`, alongside the subtext. One line of HTML.

---

**P0-2. Testimonials are credibility-negative**
- **Issue:** "Senior Leadership — Political Consulting" and "Partner — Election Strategy, National Party" read as fabricated. No names, no organisations, no verifiable context. Actively erodes trust on an otherwise credible page.
- **Flagged by:** Shreya, Marcus, Ankit, Meera, Rohit
- **Fix (option A):** Source real quotes with at minimum a first name and role ("Amit R., Secretary General, [Party Type]"). Even partial attribution is better than none.
- **Fix (option B):** Remove the testimonials section entirely. Replace with a "How I Work" section or a process breakdown. Absence of proof is less damaging than presence of fake-looking proof.

---

**P0-3. "No intake forms" copy + intake form**
- **Issue:** Contact heading says "Direct line. No intake forms." The form beneath it has 5 fields. First-time visitors will notice this and feel the copy was written for effect, not accuracy.
- **Flagged by:** Marcus, Ankit, Meera
- **Fix:** Change the heading to something accurate — "Get in touch." or "Start the conversation." — OR add a direct email address above the form so the "direct line" claim is literally true.

---

## P1 — Important
*Fix before driving any real traffic.*

---

**P1-1. No direct contact method**
- **Issue:** No email address. No phone. No LinkedIn. The only contact path is the 5-field form. For senior political clients who call, not fill forms, this is a real barrier.
- **Flagged by:** Ankit, Meera, Rohit
- **Fix:** Add Tarang's email address to the contact section left column. Even one line: "Or email directly: [email]"

---

**P1-2. "3 — Core Capabilities" stat**
- **Issue:** Counts three items on the same page. Communicates nothing. Weakens the other two stats by association.
- **Flagged by:** Shreya, Marcus, Ankit
- **Fix:** Replace with a real metric. Options: number of election cycles worked, years in the field, research briefs delivered, team size. If no number is available, remove the stat entirely and use a two-stat grid.

---

**P1-3. "Executive Assistancy" terminology**
- **Issue:** Not a standard term in Indian political or corporate circles. Readers will hesitate, misunderstand, or move on.
- **Flagged by:** Shreya, Meera, Rohit
- **Fix:** Rename to "Chief of Staff Support," "Senior Executive Assistance," or "Principal's Office" — whichever most accurately describes the service.

---

**P1-4. No concrete proof point in the About section**
- **Issue:** The copy lists credentials and promises outcomes but provides zero specific evidence. "Zero-to-one firm-building in live political environments" is vague to the point of meaninglessness for someone who doesn't know the context.
- **Flagged by:** Shreya, Meera, Rohit, Ankit
- **Fix:** Add one specific, even anonymised, proof point. Example: "Research delivered in under 48 hours for a state assembly campaign that shaped [X] position." Or: "Led program management across [N] workstreams during the [year] general election cycle." One sentence. It changes everything.

---

**P1-5. Positioning ambiguity — founder vs. employee vs. consultant**
- **Issue:** The site doesn't make clear whether Tarang owns this firm, leads it as an employee, or operates as an independent consultant. Different answers mean different trust signals for different client types.
- **Flagged by:** Rohit, Marcus
- **Fix:** One deliberate sentence in the About section that clarifies his relationship to the work. This is a decision, not a copy fix — but make it consciously.

---

**P1-6. No LinkedIn or social verification**
- **Issue:** Any credibility-conscious visitor will search for Tarang Kulkarni after reading this site. If LinkedIn isn't linked, the search path is broken and the warm lead goes cold.
- **Flagged by:** Rohit, Ankit
- **Fix:** Add a LinkedIn icon/link to the footer or contact section.

---

## P2 — Nice to Have
*Improve before scaling traffic.*

---

**P2-1. Font loading overhead**
- Three Google Fonts families (Cormorant Garamond, DM Sans, Syne) with multiple weights. On slow connections, creates visible FOUT.
- **Fix:** Subset fonts to used weights only. Consider dropping DM Sans and using system-ui for body text.

---

**P2-2. Nav logo subtitle is unreadable**
- "POLITICAL CONSULTING" in the nav SVG renders at ~4px height at the current logo scale. It's decorative noise, not information.
- **Fix:** Remove the subtitle from the nav-scale SVG, or increase the nav logo height from 36px to 44px.

---

**P2-3. Gold on cream contrast for small text**
- `#8c6e18` on `#f5f0e8` at small sizes (eyebrow labels, outcome lines) is ~3.8:1 contrast — below WCAG AA threshold of 4.5:1 for normal text.
- **Fix:** Darken gold for text elements to `#7a5e10` or use ink colour for critical small text.

---

**P2-4. "By referral and direct inquiry" is buried**
- A strong credibility and positioning signal, currently hidden in the contact section left column.
- **Fix:** Elevate to the hero eyebrow or about section. "Available by referral and direct inquiry" sets expectations early and filters the right kind of attention.

---

**P2-5. Mid-width breakpoint for about section**
- Between 900–1024px, the two-column about grid is cramped.
- **Fix:** Add a breakpoint at 960px to collapse to single-column earlier.

---

## Summary table

| ID | Issue | Owner | Effort |
|---|---|---|---|
| P0-1 | No hero CTA | Dev | 10 min |
| P0-2 | Testimonials | Content | 1–2 hours |
| P0-3 | "No intake forms" copy | Content | 5 min |
| P1-1 | No direct contact method | Content | 5 min |
| P1-2 | "3 Core Capabilities" stat | Content | 10 min |
| P1-3 | "Executive Assistancy" rename | Content | 10 min |
| P1-4 | No concrete proof point | Content | 30 min |
| P1-5 | Positioning clarity | Decision | — |
| P1-6 | No LinkedIn link | Dev | 5 min |
| P2-1 | Font loading | Dev | 30 min |
| P2-2 | Nav logo subtitle | Dev | 10 min |
| P2-3 | Gold contrast | Dev | 15 min |
| P2-4 | "By referral" placement | Content | 10 min |
| P2-5 | Mid-width breakpoint | Dev | 15 min |

**Total P0 effort: ~2 hours (content-dependent)**
**Total P1 effort: ~1 hour + one strategic decision**
**Total P2 effort: ~1.5 hours**
