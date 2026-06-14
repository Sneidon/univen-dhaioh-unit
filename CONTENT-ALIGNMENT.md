# DHAIOH Unit Website — Content Alignment Report

**Source document:** `Website page - EMU - SAMRC-UNIVEN-MINTEK_01 June 2026.docx`  
**Last verified:** June 2026

---

## Summary

All 13 points from the client feedback email and all content sections from the briefing document are implemented. Content is organised so each topic has **one canonical page**; other pages use short teasers with links rather than repeating full detail.

---

## Canonical Content Locations (post deduplication)

| Content | Canonical page | Teaser / link on |
|---|---|---|
| Leadership bios, positioning, co-directorship strengths | `/leadership` | `/about` (brief intro + CTA) |
| Digital Transformation Framework (10 pillars) | `/about` | `/` homepage |
| Strategic Research Themes (8) + Flagship Programmes (9) | `/research-themes` | `/` homepage |
| Impact Pathway (detailed 5-step) | `/impact-framework` | `/`, `/research-impact` |
| Policy influence areas (11 items) | `/research-impact` | `/impact-framework` |
| Strategic partners (full lists) | `/strategic-partners` | `/`, `/about` |
| Human Capital Development (full opportunities) | `/human-capital` | `/` homepage |
| Site-wide impact metrics | `/` homepage | — |
| Gallery videos & photo events | `/gallery`, `lib/gallery-data.ts` | — |

---

## Document Section Alignment

| # | Document Section | Status | Website Location |
|---|---|---|---|
| 1 | Unit Overview — full name, description, interdisciplinary mandate | ✅ | `/about` — Unit Overview section |
| 2 | Unit Overview — 5 interconnected thematic areas | ✅ | `/about` — "Five Interconnected Thematic Areas" |
| 3 | Unit Leadership Overview — co-directorship model | ✅ | `/leadership` — co-directorship model; `/about` teaser + link |
| 4 | Joint Co-Directorship — significance, strength, uniqueness | ✅ | `/leadership` — "Significance, Strength & Uniqueness" section |
| 5 | Positioning Statement | ✅ | `/leadership` — gold banner |
| 6 | Profile: Prof Lindiwe Zungu — full biosketch, title, awards | ✅ | `/leadership` — Unit Director card (full bio) |
| 7 | Profile: Dr James Aluha — full biosketch, title, Mintek role | ✅ | `/leadership` — Co-Unit Director card (full bio) |
| 8 | Digital Presence — tagline | ✅ | Homepage hero + `/about` hero |
| 9 | Directors' Quote (long form) | ✅ | Homepage — "From the Co-Directors" quote section |
| 10 | Suggested Pull Quote — Prof Zungu | ✅ | Homepage — incorporated in Directors' Quote section |
| 11 | Unit name: DHAIOH Unit (full + acronym) | ✅ | All pages — hero sections |
| 12 | SAMRC–UNIVEN–MINTEK alliance positioning | ✅ | Homepage, `/about`, `/strategic-partners`, `/contact` |

---

## Client Feedback Email — 13-Point Alignment

| # | Feedback Point | Status | Implementation |
|---|---|---|---|
| 1 | **Landing page identity** — full unit name before acronym, tagline prominent, SAMRC Extramural Unit in opening banner | ✅ | Homepage hero: full name → DHAIOH Unit → tagline; institutional badges in banner |
| 2 | **SAMRC–UNIVEN–MINTEK Strategic Alliance visibility** — three-way partnership prominent, not UNIVEN-centric | ✅ | Homepage alliance teaser; full partner detail on `/strategic-partners` |
| 3 | **Co-Unit Director (Mintek)** — profile, photo, role, side-by-side with Unit Director | ✅ | `/leadership` — Prof Lindiwe Zungu + Dr James Aluha, side-by-side with photos and full bios |
| 4 | **Digital Transformation Framework** — all 10 pillars prominently showcased | ✅ | `/about` full framework grid; homepage teaser + link |
| 5 | **Strategic Research Themes** — all 8 themes as dedicated thematic areas | ✅ | `/research-themes` — 8 themes in full grid; homepage teaser + link |
| 6 | **Flagship Research Programmes** — all 9 programmes visible | ✅ | `/research-themes` — 9 programme cards; linked from homepage themes teaser |
| 7 | **Innovation & Commercialisation Platform** — IP, AI, wearables, platforms, investment | ✅ | `/innovation` — 12 strategic innovation areas, AI Hub, IP metrics |
| 8 | **Research Impact & Policy Influence** — policy initiatives, codes of practice, advisory roles | ✅ | `/research-impact` — 11 policy influence areas listed |
| 9 | **Human Capital Development** — postdocs, doctoral, masters, interns, mentorship | ✅ | `/human-capital` — full opportunities; homepage teaser + link |
| 10 | **Partnerships & Collaborations** — SAMRC, Mintek, MHSC, NRF, TIA, CSIR, HSRC, international | ✅ | `/strategic-partners` — national, innovation, international, UNIVEN-internal partner lists |
| 11 | **Investment & Collaboration Opportunities** — funders, mining cos, tech, development agencies | ✅ | Homepage "Investment & Collaboration" section; 7 partner-type categories |
| 12 | **DHAIOH Impact Pathway** — Research → Innovation → Policy → Practice → Impact | ✅ | `/impact-framework` — full 5-step detailed pathway; homepage teaser + link |
| 13 | **Research Impact Metrics** — years experience, partnerships, students, publications, policies | ✅ | Homepage metrics bar: 20+ years, 45+ graduates, 8 themes, 11 policy areas |

---

## Key Corrections Applied

| Item | Before | After |
|---|---|---|
| Unit Director name | Prof. Lungisa Zungu (incorrect) | Prof Lindiwe Zungu |
| Unit Director title | Generic bio | Director: OHS in Mining Research Institute \| UNIVEN |
| Co-Unit Director | "To Be Confirmed" placeholder with no photo | Dr James Aluha with photo |
| Co-Unit Director title | Generic | Chief Research Scientist \| Mintek |
| Co-Unit Director bio | Generic placeholder | Full biosketch from briefing document |
| Prof Zungu bio | 1-line generic | Full biosketch: 20+ years, 45+ students supervised, awards listed |
| Mintek card (homepage) | Dark background (logo invisible) | White background — Mintek logo visible |
| Mintek logo (contact page) | Text placeholder | Real logo |

---

## Asset Files

| File | Location | Purpose |
|---|---|---|
| `public/logos/ohs-logo.png` | Navbar + Footer | Main site logo (OHS in Mining Research Institute – UNIVEN) |
| `public/logos/mintek.png` | Strategic Partners, Contact | Mintek logo (transparent PNG) |
| `public/logos/samrc.svg` | Strategic Partners, Contact | SAMRC logo |
| `public/logos/univen.png` | Strategic Partners | UNIVEN logo |
| `public/prof-zungu.jpg` | Leadership, Contact, Homepage quote | Prof Lindiwe Zungu photo |
| `public/james-headshot.jpg` | Leadership, Homepage quote | Dr James Aluha photo |

---

## Navigation Coverage

| Page | Route | Content |
|---|---|---|
| Home | `/` | Unit identity, metrics, teasers (alliance, framework, themes, pathway, HCD), investment, directors' quote |
| About | `/about` | Unit overview, 5 thematic areas, vision/mission, leadership teaser, framework, alliance teaser |
| Leadership | `/leadership` | Positioning statement, full bios, co-directorship strengths, directors' quote |
| Research | `/research-themes` | 8 strategic themes, 9 flagship programmes |
| Innovation | `/innovation` | IP & patents, AI solutions, 12 innovation areas, capabilities |
| Impact Framework | `/impact-framework` | 5-step pathway; link to policy areas |
| Research Impact | `/research-impact` | Policy influence areas (11), impact areas, page-specific metrics |
| Partners | `/strategic-partners` | SAMRC/UNIVEN/Mintek + national, innovation, international, UNIVEN-internal partners |
| Human Capital | `/human-capital` | Postdoc, PhD, Masters, early-career, intern opportunities |
| Gallery & Media | `/gallery` | Videos and photo events (`lib/gallery-data.ts`) |
| Contact | `/contact` | Director card, general inquiries, offices, partner logos |

---

*All 13 feedback points addressed. All document sections implemented. Build passes with 0 errors.*
