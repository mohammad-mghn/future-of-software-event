# 03 — Roles and money: demand, AI exposure, pay, new titles (as of 2026-11-26)

Scope: 15 developer roles, 2022→2026; glossary of new titles; our own pay count from Anthropic + OpenAI job boards.
Verification tags: **OP** = opened primary (publisher's page, PDF or data file opened); **OP-sub** = opened primary by a research subagent on 2026-11-26 (I spot-checked Anthropic labour-market and SO 2026 pay: both matched); **OP-prev** = opened primary on 2026-11-25 for `Software engineering in the AI era/07_roles_and_market.md`, not re-opened today; **SEC** = via secondary; **NO** = could not open. *Derived* = my arithmetic. *Inference* = my reading.
Disclosure: compiled by an Anthropic model; Anthropic is one of the two employers in §6.
**Read every number with three rules:** a posting is not a hire; titles are counted by words, so renaming looks like growth or collapse; small bases make big percentages. Almost all data is US/UK, tech-heavy, and says nothing directly about Iran.

New vs earlier notes (07, 10): re-verified TrueUp/Lenny, IT Jobs Watch, Timeplot, lab boards; added Indeed sector index 2022–26, LinkedIn SWE Talent Landscape + Jobs on the Rise 2026, Dice 2026 postings by title, five task-exposure studies, SO 2025/2026 + Levels.fyi + Dice + BLS pay, lab pay ranges by family, glossary. FDE detail stays in 07 §1.

---

## 0. Bottom line

- **The market shrank from the 2022 bubble, then partly recovered in 2026.** Indeed US software postings: index 213 (Jan 2022) → 66 (Nov 2025) → 82 (13 Nov 2026), i.e. −65% vs the Feb-2022 peak but +23% on the year [S1]. US software-engineer *hires*: ~113,000 (May 2025–Apr 2026) vs 239,000 peak in 2022 [S2].
- **Growing:** AI/ML engineer, security, platform, data engineering, embedded, solutions/FDE, PM openings. **Shrinking as titles:** frontend, mobile (iOS/Android), product design, UX research, game dev, prompt engineer, in-house "AI trainer".
- **AI exposure is highest where output is quick to check:** computer programmers (Anthropic coverage 75%, #1 of 756 occupations), QA/testers (52%, #10), web developers (48%, #13), database architects (58%, #8). Lower for embedded/hardware (15%), PM-type roles (16%), AI researchers in Microsoft's measure (0.169, #320 of 785) [S9][S12].
- **Pay does not track exposure.** Frontend is both most exposed and lowest-paid of the coding roles (SO 2026 US median $150,000 vs backend $180,000, AI/ML $200,000) [S19]. AI researcher is the top of every pay table (Levels.fyi US median TC $311,000; lab posted base ranges up to $850,000) [S21][S28].
- **An "AI premium" is real but depends on the label:** Levels.fyi ML/AI SWE $251,000 vs SWE $200,000 (+25.5%), but the plain "AI Engineer" title $155,000 (−22.5%) [S21].
- **Our lab count (1,510 ads, 1,156 with US pay):** median posted base midpoint $328K; research $440K; software engineer $362K; FDE $242K; design $278K. Only 4 ads with early-career words have pay; beginners are almost absent (§6).

---

## 1. Master comparison table (compact)

"Value proxy" = US employment × median wage where a BLS code exists (rough, *derived*; median ≠ mean). Exposure = Anthropic observed coverage (share of an occupation's tasks seen in Claude work traffic; rank of 756) / Microsoft applicability (rank of 785) / ILO score + gradient (G4 highest). Pay = SO 2026 US median (n) / Levels.fyi US median total comp / BLS May 2025 median. Arrows: demand direction 2022→2026 / last 12 months.

| Role | Demand 2022→26 · last year | AI exposure (Anthropic · MSFT · ILO) | US pay: SO 2026 · Levels · BLS | Value proxy (BLS) | What shifts inside | Verdict |
|---|---|---|---|---|---|---|
| Frontend | ↓↓ · ↓ (TrueUp −51% y/y; UK share 0.64→0.17%) | **0.48 (#13) · 0.353 (#21) · 0.60 G4** (web devs) | $150,000 (93) · $188,000 · $92,650 (web devs) | 70,190 web devs × $92,650 ≈ $6.5B | UI generation most automated; work moves to full-stack/product/design-engineer | Shrinking title, highest exposure |
| Backend | ↓ · flat/↑ (TrueUp +4.2%; Dice +42%) | 0.29 (#73) · 0.278 (#120) · 0.53 G3; GDPval: model ≥ expert 70% | $180,000 (361) · $197,100 · $135,980 (all SW devs) | 1.69M SW devs × $135,980 ≈ $230B | Review, API/MCP design, reliability | Steady core |
| Fullstack | ↓ · mixed (Dice +1% to +40% by title; UK share 1.21→0.71%) | between web and SW dev | $140,000 (974) · $174,333 · (in SW devs) | in SW devs | Absorbs frontend; lab boards' largest stack tag | Default generalist, not a safe harbour |
| Mobile | ↓↓ · ↓ (mobile −39%, iOS −46%, Android −47%) | ≈ SW dev; ILO 2514 0.57 G3 | $178,000 (71) · $240,000 (mobile focus) · n/a | n/a | Cross-platform, fewer native specialists (*inference*) | Few seats, still well paid |
| DevOps/Platform/SRE | ↓ · ↑ (platform +30%; UK DevOps 0.81→1.33%) | 0.34 (#52) · 0.253 (#152) · 0.57 G3 | $156,500 (54) · DevOps $173,000 / SRE $210,000 · n/a | n/a | GPU/inference fleets, agent sandboxes, cost | Holding/up, under-hyped |
| Data engineering | ↓ · ↑ (Dice +14%, 25,546 ads; UK 1.34→1.85%) | **0.58 (#8)** (DB architects) · 0.312 · 0.57 G3 | $165,000 (71) · $157,450 · n/a | n/a | Pipelines for RAG, evals, training data | Up; biggest data title |
| Data science / analytics | ↓↓ · split (DS +7%, analysts −7%) | 0.46 (#18) · **0.357 (#19)** · 0.56 G3 | DS $148,000 (45), analyst $89,000 (36) · DS $182,000 · $120,230 | 262,440 DS × $120,230 ≈ $31.6B | Analysts do old DS work; DS → experimentation/evals/ML | DS holds, analyst squeezed |
| ML/AI engineer | ↑↑ · ↑↑ (LinkedIn hires share 10× 2022; Dice AI eng +208%) | no own code (proxy 0.29–0.46) | $200,000 (42) · ML/AI SWE $251,000; "AI Engineer" title $155,000 · n/a | n/a | From training models to building on APIs: evals, agents, RAG | Fastest rising, wants experience |
| AI researcher | ↑ · ↑ (LinkedIn #5 rising job) | 0.34 (#51) · **0.169 (#320)** · n/a | US $150,312 (30; "applied scientist") · $311,000 · $140,300 | 37,200 × $140,300 ≈ $5.2B | RL, evals, interpretability, safety | Tiny, elite, top pay |
| Security/AppSec | ↓ · ↑ (TrueUp +34%; Dice cyber eng +16%) | 0.49 (#12) · 0.222 (#205) · 0.49 G2 | $178,000 (31) · Security SWE $215,000 · $129,180 | 190,650 × $129,180 ≈ $24.6B | More AI-written code to secure; agent security | Up; most consistent grower |
| QA/test | ↓ · UK ↑ (UK QA 0.18→0.42%); US no series | **0.52 (#10) · 0.328 (#53) · 0.55 G3; 76% automation-style use** | n/a (SO global 2025 $57,443, lowest dev type) · SDET $146,000 · $104,300 | 186,740 × $104,300 ≈ $19.5B | Test writing automated; move to evals/verification | Highly exposed, lowest pay |
| Embedded | ↓ small · ↑ (TrueUp +25%; Dice +11%) | **0.15 (#150) · 0.315 · 0.42 G2** (hardware/electronics) | $150,000 (109) · $156,200 · $161,740 (HW eng, proxy) | 76,660 HW eng × $161,740 ≈ $12.4B | Devices, robotics, data-centre hardware | Low exposure, steady/up |
| Game dev | ↓↓ · ↓ (GDC: 28% laid off in 2 yrs; UK share 0.080→0.009%) | weak proxies only | n/a (SO global $77,002, n=108) · no page · n/a | n/a | 36% of game pros use gen AI; 59% of programmers view it negatively | Weak, cyclical |
| UI/UX & product design | ↓↓ · ↓ (product design −28% y/y, record low ~1,924) | 0.25 (#87) · 0.294 · 0.49 G2; Claude.ai usage share #8 | n/a · Product Designer $170,000 · $104,000 | 113,330 × $104,000 ≈ $11.8B | Designers code; user research least automated | Shrinking openings |
| Product manager | ↓ · ↑ US (+56% since Jan 2023) / ↓ UK (0.95→0.49%) | low: 0.16 (#146, 11-3021) · 0.182 (#278) · 0.44 G2; GDPval PM 42% | n/a (SO global 2025 $100,000) · $235,000 · n/a | n/a | PMs prototype with AI; "AI PM" +47% (Timeplot) | Openings up, hires flat |

---

## 2. Demand, 2022 → 2026 (task 1a)

### 2.1 Indeed US postings index by sector (Feb 1 2020 = 100, seasonally adjusted) [S1, OP]
| Sector (proxy for) | Jan 2022 | Jan 2023 | Jan 2024 | Jan 2025 | 13 Nov 2025 | 13 Nov 2026 | Peak (date) | Now vs peak | 12-mo change |
|---|---|---|---|---|---|---|---|---|---|
| Software Development (all dev roles) | 213.0 | 130.3 | 72.6 | 67.5 | 66.2 | 81.7 | 233.8 (28 Feb 2022) | −65% | **+23%** |
| Data & Analytics (DS, analysts, data eng) | 186.7 | 128.4 | 74.6 | 68.1 | 59.6 | 61.8 | 202.6 (Mar 2022) | −69% | +4% |
| IT Infrastructure, Ops & Support (DevOps/SRE/sysadmin) | 151.2 | 125.7 | 85.5 | 74.2 | 64.0 | 70.4 | 159.3 (Jun 2022) | −56% | +10% |
| IT Systems & Solutions | 178.8 | 124.6 | 82.2 | 82.4 | 68.8 | 78.1 | 197.3 (Apr 2022) | −60% | +13% |
| Scientific R&D (research) | 179.7 | 144.7 | 106.7 | 88.0 | 69.4 | 85.5 | 189.8 (Mar 2022) | −55% | +23% |
| Electrical Engineering (embedded/hardware proxy) | 161.1 | 173.0 | 145.3 | 119.5 | 116.1 | 158.8 | 186.2 (Jun 2022) | −15% | **+37%** |
| Project Management (PM proxy) | 173.2 | 149.8 | 119.4 | 109.3 | 101.0 | 119.0 | 189.5 (Mar 2022) | −37% | +18% |
| Arts & Entertainment (weak design/game proxy) | 144.2 | 117.7 | 94.2 | 87.3 | 79.4 | 88.0 | 155.1 (May 2022) | −43% | +11% |
| Nursing (non-tech comparison) | 175.7 | 170.9 | 140.0 | 120.0 | 110.6 | 111.9 | 177.5 (Jan 2022) | −37% | +1% |
Population: US Indeed postings; file `job_postings_by_sector_US.csv`, data to 2026-11-13, downloaded 2026-11-24, https://github.com/hiring-lab/job_postings_tracker . No frontend/backend/mobile/QA split exists in Indeed's taxonomy.

### 2.2 TrueUp (open roles at 9,000+ tech companies, global)
- Specialty change 29 Oct 2025 → 28 Oct 2026: FDE +361%; security engineer +34%; platform +30%; embedded systems +25%; member of technical staff +11%; backend +4.2%; mobile −39%; iOS −46%; Android −47%; front-end −51% [S3, SEC: Golden Data printing TrueUp; trueup.io returned 403 → NO].
- Since Jan 2023 → Oct 2026: software engineering +43% (65,351 open); PM +56% (+75% from Mar-2023 low); data & analytics +18% (10,307 open); product design −22% (−28% y/y; ~1,924 open, record low); UX research −55% (116 open). Engineering growth y/y: +29% (2024), +15% (2025), +2.5% (2026) — "stalled" [S2, OP free part; S3].
- Caveat: openings +44% since Jan 2024 while US engineer *hires* −17% (Live Data via Lenny) [S2]. TrueUp restated design categories in 2026 (07 notes).

### 2.3 LinkedIn (US)
- Hires: "AI Engineers now account for a share of hires that is 14 times higher than in 2019 and 10 times higher than in 2022"; ML engineers' share roughly doubled since 2019; outside general SWE, system engineer (5.9%) and data engineer (5%) were the most common hires in 2025; top-10 specialties (2024 ranking): system, data, solutions, full-stack, ML, AI, security, DevOps, frontend, SRE [S5, OP].
- Pipeline: 55% of CS graduates started in non-SWE jobs in 2023 and 2024 (49% in 2016); top non-SWE first jobs: data analyst, IT analyst, financial analyst. LinkedIn attributes most of the SWE hiring swing to real interest rates, not AI; "absence of a rebound in entry-level SWE hiring at the end of 2025 is concerning" [S5].
- Jobs on the Rise 2026 (jobs started 1 Jan 2023–31 Jul 2025): #1 AI engineer (median prior experience 3.7 yrs; top feeder roles SWE, data scientist, full-stack), #2 AI consultant/strategist (8.2 yrs), #4 data annotator (3.5 yrs), #5 AI/ML researcher, #17 data-centre technician; "Founder" titles +69% y/y [S6, OP].

### 2.4 Dice: US tech postings in 2025 vs 2024 (titles with ≥5,000 postings) [S4, OP-sub]
| Title | 2025 postings | vs 2024 |
|---|---|---|
| Software Engineers | 60,534 | +12% |
| Data Engineers | 25,546 | +14% |
| Data Scientists | 24,222 | +7% |
| Data Analysts | 20,606 | −7% |
| Software Developers | 15,173 | −7% |
| Machine Learning Engineers | 14,200 | **+52%** |
| DevOps Engineers | 13,665 | +1% |
| Full Stack Developers / Full Stack SWE / Full Stack Engineers | 10,831 / 9,853 / 8,081 | +1% / +26% / +40% |
| Software Development Engineers | 10,211 | −16% |
| Technical Writers | 9,411 | −22% |
| Cybersecurity Engineers / Security Engineers | 8,299 / 6,367 | +16% / +6% |
| Back End Software Engineers | 7,709 | +42% |
| Site Reliability Engineers | 7,719 | −4% |
| Artificial Intelligence Engineers | 7,378 | **+208%** |
| Embedded Software Engineers | 5,977 | +11% |
| Data Center Technicians | 6,358 | +36% |
| .NET / Java Developers | 7,841 / 10,694 | −20% / −4% |
Frontend, mobile, QA, game, UX not in the table (below 5,000 postings or not listed). Source page: dice.com/recruiting/ebooks/explore-tech-sentiment-report/job-market-insights.html (Lightcast data, pulled 30 Jan 2026).

### 2.5 UK: IT Jobs Watch, share of all permanent UK IT ads with the title, 6 months to 26 Nov [S7, OP]
Use shares, not counts: total ads ≈ 67,200 (2024) → 53,700 (2025) → 123,500 (2026) (*derived* from software-engineer count/share).
| Title | 2024 | 2025 | 2026 | Median 2026 (n salaries) |
|---|---|---|---|---|
| Software engineer | 6.76% | 3.52% | 5.60% | £70,000 (4,571) |
| Front-end developer | 0.64% | 0.32% | **0.17%** | £65,000 (155) |
| React developer | 0.50% | 0.36% | 0.14% | £60,000 (143) |
| Web developer | 0.87% | 0.15% | 0.12% | £47,500 (132) |
| Backend developer | 0.30% | 0.23% | 0.17% | £70,000 (120) |
| Full-stack developer | 1.21% | 0.91% | 0.71% | £60,000 (696) |
| Mobile / iOS / Android developer | 0.11 / 0.080 / 0.14% | 0.14 / 0.069 / 0.063% | 0.040 / 0.040 / 0.057% | £90,000 (39) / £60,000 (44) / £80,000 (31) |
| DevOps engineer | 1.19% | 0.81% | 1.33% | £70,500 (1,132) |
| Platform engineer | 0.39% | 0.43% | 0.51% | £80,000 (418) |
| SRE | 0.19% | 0.13% | 0.14% | £80,000 (119) |
| Data engineer | 1.48% | 1.34% | **1.85%** | £70,000 (1,505) |
| Data scientist | 0.42% | 0.27% | 0.55% | £80,000 (337) |
| Data analyst | 0.81% | 1.25% | 0.84% | £60,000 (697) |
| AI engineer ("artificial intelligence engineer") | 0.077% | 0.21% | **0.61%** | £87,500 (510) |
| Machine learning engineer | 0.22% | 0.089% | 0.081% | £70,000 (50) |
| Research scientist | 0.003% | 0.23% | 0.070% | £95,000 (60) |
| Security engineer | 0.89% | 0.79% | 0.94% | £60,000 (761) |
| QA engineer / test engineer | 0.28 / 0.75% | 0.18 / 0.55% | **0.42 / 0.98%** | £55,000 (368) / £50,000 (734) |
| Embedded software engineer | 0.78% | 0.27% | 0.67% | £65,000 (648) |
| Games developer | 0.080% | 0.011% | 0.009% | £60,000 (11) |
| UX designer / product designer | 0.22 / 0.055% | 0.11 / 0.048% | 0.16 / 0.048% | £60,000 (107) / £70,000 (35) |
| Product manager | 0.95% | 0.67% | 0.49% | £70,000 (301) |
| Solutions architect | 2.02% | 1.44% | 1.78% | £90,000 (1,319) |
| Forward deployed engineer | – | 0.011% | 0.053% | £100,000 (48) |
| Product engineer | 0.054% | 0.097% | 0.16% | £76,500 (157) |
URLs: https://www.itjobswatch.co.uk/jobs/uk/<title>.do (pages saved 2026-11-25/26). 2022–23 not in table form (gap).

### 2.6 Per-role demand verdicts (one line each)
- **Frontend:** falls in every source that splits it (TrueUp −51%; UK 0.64→0.17%; Dice absent; 3 of 1,510 lab ads). Partly relabelling into full-stack/product.
- **Backend:** flat to up (TrueUp +4.2%, Dice back-end SWE +42%), but UK share down 0.30→0.17%.
- **Fullstack:** US titles up (Dice), UK down; largest stack tag at labs (36 ads). "Everyone becomes full-stack" is not supported in UK data.
- **Mobile:** roughly halved in a year (TrueUp, UK).
- **DevOps/Platform/SRE:** platform up (TrueUp +30%, UK 0.39→0.51%), DevOps flat in US (+1%), SRE slightly down (−4%).
- **Data engineering:** most consistent data grower (Dice +14%, UK 1.85%, LinkedIn #2 non-general SWE hire).
- **Data science/analytics:** conflicting: TrueUp +18% since 2023 vs Indeed Data & Analytics −49% since Jan 2023 (Golden Data) and −69% vs 2022 peak (my calc); analysts down, DS flat-up.
- **ML/AI engineer:** biggest growth everywhere, from small base; exact title "AI Engineer" already fragmenting (Timeplot 72→65 per 1,000 companies while Agent Engineer 37→56, Applied AI 35→49) [S8, OP].
- **AI researcher:** small and volatile counts; LinkedIn #5; labs 86 research ads.
- **Security:** up in TrueUp (+34%), Dice (+6/+16%), UK (0.79→0.94%); CyberSN shows all US cyber ads −26.4% Jan–Sep 2026 but AI security +268% (OP-prev). Employer mix decides the sign.
- **QA/test:** no US series found; UK QA/test shares rose in 2026; SO QA pay fell (§4). Ambiguous.
- **Embedded:** up (TrueUp +25%, Dice +11%, Indeed electrical engineering +37% y/y, only −15% vs peak).
- **Game dev:** layoffs (GDC 2026: 28% of 2,300+ game professionals laid off in past two years; 33% in US) [S30, OP]; UK share near zero.
- **UI/UX:** record-low openings; US designer hires 12,600 vs 27,600 in 2022; UXR hires ~1,800 vs 5,300 (Live Data via Lenny) [S2].
- **PM:** US openings at ~4-year high; PM:design open-role ratio 3.8 (1.9 in early 2023); UK share falling; hires flat [S2].

---

## 3. How much of each role AI can already do (task 1b) [S9–S17, OP-sub unless stated]

| Role (code used) | Anthropic observed coverage, Mar 2026 (rank/756) | Claude.ai May 2026: usage share (rank/718) · automation-style % | Microsoft applicability v1.1 (rank/785) | GDPval win+tie vs experts | ILO WP140 score, gradient | Indeed AI at Work: % skills "hybrid" / "assisted" |
|---|---|---|---|---|---|---|
| Frontend/web (15-1254; ISCO 2513) | 0.48 (#13) | 0.64% (#37) · 55% | 0.353 (#21) | not included | 0.60, **G4** | SW dev 81 / 10 |
| Backend/general (15-1252; 2512) | 0.29 (#73) | 0.35% (#70) · 61% | 0.278 (#120) | **Claude Opus 4.1 70%, o3-high 70%, GPT-5-high 68%, GPT-4o 30%** | 0.53, G3 | 81 / 10 |
| Mobile (15-1252; 2514) | 0.29 | as backend | 0.278 | via SW dev | 0.57, G3 | 81 / 10 |
| DevOps/SRE (15-1244; 15-1299.08; 2522) | 0.34 (#52) | 0.16% · 68%; .08: 1.01% (#23) · 63% | 0.253 (#152) | not included | 0.57, G3 | IT infra 71 / 18 |
| Data engineer (15-1243 / 15-1242; 2521) | **0.58 (#8)** / 0.33 | data warehousing 1.65% (#11) · 61% | 0.312 / 0.297 | not included | 0.57, G3 | Data & analytics 79 / 13 |
| Data scientist (15-2051; 2120) | 0.46 (#18) | 0.61% (#39) · 47% | **0.357 (#19)** | not included | 0.56, G3 | 79 / 13 |
| ML/AI engineer | no code | – | – | – | – | – |
| AI researcher (15-1221) | 0.34 (#51) | 0.08% (#201) · 58% | **0.169 (#320)** | not included | no ISCO match | Sci R&D 57 / 19 (proxy) |
| Security (15-1212; 2529*) | 0.49 (#12) | 0.01% (#505) · 76% | 0.222 (#205) | not included | 0.49, G2 | not reported |
| QA/test (15-1253; 2519*) | **0.52 (#10)** | 1.32% (#18) · **76%** | 0.328 (#53) | not included | 0.55, G3 | in SW dev |
| Embedded (17-2061 / 17-2072; 2152) | **0.15 (#150)** / 0.10 | 0.83% · 46% | 0.315 / 0.274 | not included | **0.42, G2** | Electrical eng 48 / 18 |
| Game dev (27-1014 proxy) | 0.36 (#46) | 15-1255.01: 0.21% · 45% | 0.131 (#429) | not included | 2513 assumed | Arts 48 / 19 (weak) |
| UI/UX (15-1255; 2166) | 0.25 (#87) | **1.70% (#8)** · 51% | 0.294 (#105) | not included | 0.49, G2 | none |
| PM (13-1082; alt 11-3021; 1330) | 13-1082 missing; 11-3021 0.16 (#146) | 0.18% · 52% | 0.182 (#278) | **PM specialists: Claude 42%, GPT-5-high 26%** | 0.44, G2 | Project mgmt 62 / 16 |
| *Reference: programmers (15-1251)* | **0.75 (#1)** | 1.67% (#9) · 63% | 0.310 (#81) | – | 2514 0.57 | 81 / 10 |
*ILO mapping for security→2529 and QA→2519 not re-verified (subagent from memory/secondary).

Key numbers and caveats:
- "Computer Programmers are at the top, with 75% coverage"; theoretical LLM scope in Computer & Math 94% of tasks vs "Claude currently covers just 33%"; unemployment of young workers in exposed jobs "flat"; job-finding rate for ages 22–25 in exposed occupations −14% vs 2022, "just barely statistically significant" [S9, OP, re-verified by me; 2026-03-05, https://www.anthropic.com/research/labor-market-impacts].
- Claude Code vs Claude.ai: 79% vs 49% automation-style conversations; JS/TS 31% and HTML/CSS 28% of queries — interface work is where agents go first [S11, 500k interactions, 6–13 Apr 2025].
- GDPval: only "software developers" among dev roles; 5 gold tasks per occupation (Claude 70% CI ≈ 56–82%); tasks are self-contained deliverables, not team work [S13, 2025-09-25].
- Indeed: software development has the highest "hybrid transformation" share of any job family (81%) [S15, 2025-09-23, 53.5M US postings].
- JetBrains 2026 (15,000+ devs, May–Jul 2026): developers self-report ~47% of their code "fully written by agents"; Go/JS/TS devs 54–55%; C/C++ least [S17].
- SO 2026: 73% use coding assistants/agents daily; tasks done with AI: code in familiar area 69.3%, debugging/refactoring 63.8%, writing tests 58.1% (n=12,547); usefulness >70% for implementation/debugging vs 35% communication, 49% design [S20, OP].
- Eloundou β (theory, GPT-4 rated): programmers 0.95, web 0.93, DB architects 0.88, QA 0.88, SW devs 0.87, PM 0.55 (human-rated SW devs only 0.45) [S16].
- **Caveats:** usage ≠ automation ("automation %" describes a conversation style); exposure ≠ job loss (ILO calls scores an upper bound; Microsoft README warns against reading them as replacement); Anthropic shares are split across occupations that share O*NET tasks (why "programmers" > "software developers"); no codes for frontend/backend/mobile/DevOps/ML engineer; vintages differ (Microsoft 2024 Copilot data; ILO/Indeed 2025; Anthropic 2025–26).

---

## 4. Pay (task 1c) [S18–S25, OP-sub unless stated]

| Role | SO 2025 global / US | SO 2026 global (n) / US (n) | Levels.fyi US median TC (n) | Dice 2026, US advertised (vs 2024) | BLS May 2025 | UK ITJW 2026 |
|---|---|---|---|---|---|---|
| Frontend | $62,015 / $145,000 | $70,320 (441) / $150,000 (93) | $188,000 (214) | – | $92,650 (web devs) | £65,000 |
| Backend | $79,742 / $175,000 | $85,296 (1,922) / $180,000 (361) | $197,100 (5,797) | $184,832 (+5%) | $135,980 (SW devs) | £70,000 |
| Fullstack | $72,509 / $138,000 | $79,610 (3,761) / $140,000 (974) | $174,333 (11,073) | $171,776 (+8%) | – | £60,000 |
| Mobile | $69,609 / $170,000 | $84,277 (346) / $178,000 (71) | $240,000 (1,214); iOS $218,000; Android $224,575 | – | – | £90,000 (n=39) |
| DevOps/SRE | DevOps $87,011 / $165,000 | $85,096 (307) / $156,500 (54) | DevOps $173,000; SRE $210,000 | DevOps $133,888 (0%); SRE $140,032 (0%) | – | £70,500 / £80,000 |
| Data engineering | $81,210 / $150,000 | $90,000 (233) / $165,000 (71) | $157,450 (1,110) | $135,936 (+5%) | – | £70,000 |
| Data science / analyst | $82,910 / $145,000; $62,625 / $100,956 | DS $90,982 / $148,000; analyst $67,161 / $89,000 | DS $182,000 (3,097) | DS $144,128 (+6%); analyst $94,976 (+6%) | $120,230 | £80,000 / £60,000 |
| ML/AI engineer | $89,427 / $189,500 | $95,337 (194) / $200,000 (42) | ML/AI focus $251,000 (5,666); ML Eng title $289,000; "AI Engineer" title $155,000 | MLE $188,288 (+5%); AI eng $171,776 (+8%) | – | £87,500 |
| AI researcher | applied scientist $96,946 / $157,500 | – / $150,312 (30) | Research Scientist $311,000 (705) | – | $140,300 | £95,000 |
| Security | $96,146 / $150,000 | – / $178,000 (31) | Security SWE $215,000 | Security eng $146,176 (+3%) | $129,180 | £60,000 |
| QA/test | $57,443 / – | – | SDET $146,000 | (Dice 2025 survey: $96,917, +1.7%) | $104,300 | £55,000 |
| Embedded | $81,210 / $132,500 | $85,296 (412) / $150,000 (109) | $156,200 (402) | $140,032 (−1%) | $161,740 (HW eng proxy) | £65,000 |
| Game dev | $70,794 / – | $77,002 (108) / – | no page | – | – | £60,000 (n=11) |
| UI/UX design | $60,000 / – | – | Product Designer $170,000 (1,488) | – | $104,000 | £60,000 UX; £70,000 product |
| Product manager | $100,000 / – | – | PM $235,000 (4,809); TPM $250,000 | Product owners $120,064 (0%) | – | £70,000 |
| Baseline | – | all roles US $154,000 (2,885) | SWE $200,000 (45,826) | "Software Engineers" $141,056 (+2%) | SW devs $135,980 | SWE £70,000 |
Populations: SO 2025 n=23,928 global comp / 5,239 US; SO 2026 n=12,040 / 2,885 (roles shown only with ≥100 global or ≥30 country responses) — https://survey.stackoverflow.co/2026/work/data/compensation.md (OP, re-verified). Levels.fyi live title pages viewed 2026-11-26 (self-reported TC incl. stock). Dice 2026 = median advertised pay in 2025 postings (7M+ postings via Lightcast). BLS = OEWS May 2025 via API v2 (no stock).

Trends (nominal):
- SO global medians 2022→2026: mobile +50%, backend +25%, embedded +25%, DS +22%, game +20%, fullstack +20%, frontend +17%, data eng +12.5%, DevOps +7%; 2022→2025 QA **−13.5%**, design −4.5%. 2024 was a dip year for every role, 2025 a rebound. SO US 2022→2026: backend +20% ($150K→$180K), mobile +24%, frontend +13%; fullstack flat ($140K), DS −1%, DevOps +4%. *SO 2026 sample is half 2025's and more experienced — part of the rise is composition.*
- Levels.fyi End of Year 2025 (generated 2025-12-20): US SWE median TC +2.67% y/y (~flat; another section says +3.49%); entry +1.64% ($152.5K→$155K), senior +4.2%, staff +7.5%, principal −6.6%; research job family +15.4%, hardware +15%, PM +4.6%, DS +2.9%, product designer +1.8% [S22].
- UK 2024→2026: fullstack, data eng, DevOps, PM flat; DS up (£62.9K→£80K); AI engineer up (£74K→£87.5K); MLE down (small n).

AI premium evidence:
- Levels.fyi same-level premium ~1.34× (late 2024) → ~1.29× (mid-2026; $383K vs $297K), "plateaued / mild compression"; median engineer TC ~$635K at OpenAI, ~$665K at xAI incl. private equity [S23, SEC: Levels.fyi analysis on letsdatascience.com, 2026-08-26].
- SO: AI/ML engineer vs backend +12% global (2025 and 2026); "developer, AI apps" ($62,767 global) earns less than backend.
- Dice 2025 survey (n=2,835, Aug–Nov 2024): AI workers earn 17.7% more (partly seniority) [S24].
- PwC Global AI Jobs Barometer 2026 (15 Jun 2026; >1B ads, 27 countries): 62% wage premium for AI skills (prior year restated 57%); UK 34.2% [S26, OP-sub via reader].
- Lightcast (23 Jul 2025): US postings with ≥1 AI skill advertise +28% (~$18K); ≥2 AI skills +43%; 51% of AI-skill postings outside IT [S27].

---

## 5. What is shifting inside each role (task 1d)

- **Frontend:** agents handle component UI well (Claude Code queries: JS/TS 31%, HTML/CSS 28%; categories may overlap); ILO's only ICT G4 occupation. Developers doing design work 44%→60%, designers doing development doubled to 41% (Figma, Jun 2026, OP-prev). Value moves to design systems, accessibility, performance, product judgment.
- **Backend:** less typing, more specifying/reviewing; new surface = APIs for agents (MCP servers, tool schemas), auth, data integrity. Lab boards ask for agents/LLM apps in 63% (Anthropic) / 49% (OpenAI) of technical ads (10 notes).
- **Fullstack:** becomes the default product-engineering seat (36 of 1,510 lab ads by title, mostly OpenAI); but UK share falls.
- **Mobile:** cross-platform and "mobile inside product team"; native specialist titles halving (*inference* on cause).
- **DevOps/Platform/SRE:** from CI/CD to AI infra: GPU fleets, inference capacity, sandboxes for agents, cost control; new hybrid titles ("DevOps / AgentOps Engineer", Anthropic).
- **Data engineering:** pipelines feeding RAG, evals, fine-tuning; quality and lineage matter more than volume. LinkedIn fastest-growing SWE-hire skills include Azure Databricks, BigQuery, Azure SQL [S5].
- **Data science/analytics:** routine SQL/report work most exposed (BI analysts 66% automation-style use); DS moves to experimentation, causal questions, evals; analyst seats squeezed (Dice −7%).
- **ML/AI engineer:** from training models to composing them: evals (37% of AI-engineer ads), agents (66%), observability (38%) (hiredaemon, OP-prev); top skills LangChain, RAG, PyTorch (LinkedIn) [S6].
- **AI researcher:** RL environments, post-training, evals, interpretability, safety dominate lab research titles (§6); PhD named in only 14% of research ads at the two labs (10 notes).
- **Security/AppSec:** more code, more AI-written code: LLMs introduced OWASP-type flaws in 45% of 80 test tasks across 100+ models (Veracode, 30 Jul 2025, SEC); new attack surface: prompt injection, agent permissions ("Agent Security" titles at both labs).
- **QA/test:** test writing is a top AI use (58.1% of SO 2026 AI users); QA most "automation-style" occupation in Claude.ai data (76%); the surviving skill is verification and evals (*inference*).
- **Embedded:** least AI-exposed coding role (ILO 0.42; C/C++ least agentic in JetBrains); demand pulled by devices, robotics, data-centre hardware (OpenAI: 55 hardware + 10 embedded/OS ads).
- **Game dev:** 36% of game professionals use gen AI; 52% think gen AI harms the industry (18% two years earlier); programmers 59% unfavourable [S30].
- **UI/UX:** AI used often for code (73%) and desk research (69%) but 61% never use it to interview users, 51% never to test with users (NN/g, n=521, Oct 2026, OP-prev); seniors/generalists favoured.
- **PM:** lowest exposure (Microsoft 0.182); GDPval project-management-specialist tasks: model ≥ expert in 42% (Claude Opus 4.1) and 26% (GPT-5-high) of comparisons; PMs build prototypes themselves; "AI Product Manager" +47% companies (Timeplot) [S8].

---

## 6. Our own data: posted US pay at Anthropic and OpenAI (task 3)

**Data.** Anthropic Greenhouse API `?content=true` (634 listed ads; 9.59 MB) and OpenAI Ashby API `?includeCompensation=true` (876 listed ads; 15.37 MB), downloaded 2026-11-26 ~19:11 Tehran time into a new empty directory `/private/tmp/claude-501/-Users-mohammad-Programming-ai-event-/08802156-8c09-4b4e-b8f6-71ba40a731f5/scratchpad/v3-jobs/data/raw-20261126-full/` (a first 120-s download was truncated and is ignored: `raw-20261126/`). Script: `.../scratchpad/v3-jobs/scripts/lab_pay.py`, run as `python3 -I lab_pay.py <anthropic.json> <openai.json> <out_dir>`; outputs `.../v3-jobs/out/ads.csv` (one row per ad with family, tags, range, URL) and `summary.md`. Downloaded files were only parsed as JSON, never executed. Verification: **OP** (own computation). Earlier count (25 Nov): 636 / 877 ads.

**Pay rule.** Per ad, US range = [lowest USD annual salary min, highest USD annual salary max] over all USD ranges in the ad. Anthropic: every `<div class="pay-range">` whose text contains "USD" (content is double HTML-escaped). OpenAI: every compensation component with `compensationType == "Salary"`, `currencyCode == "USD"`, `interval == "1 YEAR"`; equity and commission components ignored; 5 hourly components ignored. Ranges with ceiling < $20,000 dropped as placeholders (4 Anthropic ads show "$1 — $2 USD"). 8 ads have more than one USD range (location tiers). Statistics per family: lowest floor, median of floors, median of midpoints, median of ceilings, highest ceiling, and count of ads with pay.
**What the number is.** Base salary only (OpenAI lists equity separately; Anthropic says "Annual Salary"; for Anthropic *sales* roles the range is on-target earnings incl. commission). Not total comp. Ads with no USD range are mostly outside the US (148 Anthropic, 206 OpenAI). OpenAI titles rarely carry a level (6% of engineering ads contain staff/senior/principal/lead words vs 73% at Anthropic), so OpenAI ranges span levels (median ceiling/floor ratio 1.32 vs 1.26).

**Job-family rules** (title only, case-insensitive regex, first match wins):
```
Stage 1  Program / TPM:        program manag|\btpm\b|programs? lead|program management
         Product management:   \bproduct manag(er|ement)\b|\bproduct lead\b|head of product
Stage 2  title is technical if it matches:
         engineer|developer|scientist|researcher|designer|architect|red team|investigator|technical staff|
         research (associate|manager|lead)|applied ai|forward deployed|\bfde\b|deployment (lead|manager|strategist)|
         technical success|delivery lead|tech lead|incident commander|fellows program|post-?training|data scien|
         analytics|data analyst|economist      (but 'people research|market research' => non-technical)
         non-technical => Sales/GTM if account (executive|manager|director|lead)|\bsales\b|business development|
         partnerships?\b|customer success|go[- ]to[- ]market|\bgtm\b|revenue|\bsdr\b|\bbdr\b|commercial lead|
         strategic deals ; else Other
Stage 3  (technical only, in this order)
 Eng management     engineering manager|manager,? (\w+ )?engineering\b|head of engineering|director,? (of )?engineering
 FDE                forward[- ]deployed|\bfde\b
 Research           research (scientist|engineer|associate|manager|lead)|\bresearcher\b|research science|post-?training|fellows program
 Security           security|red team|\bthreat\b|detection|incident (commander|manager|response)|vulnerabilit|offensive
 Solutions/applied  applied ai|solutions? (architect|engineer)|customer engineer|deployment (lead|manager|strategist|engineer)|
                    sales engineer|partner engineer|technical success|delivery lead|value engineer|demo experience
 Tech support/IT    support engineer|it support|it operations|it systems engineer|client platform engineer|help ?desk|\bav engineer
 DevRel/docs        developer relations|developer advocate|developer education|devrel|developer experience engineer
 Hardware/physical  (no software|full stack|back end|front end|ai for chip in title) AND electrical|mechanical|pcb|thermal|
                    optical|firmware|asic|soc|silicon|rtl|physical design|signal integrity|manufactur|robotics|actuator|
                    battery|motor|data cent(er|re)|datacenter|geotechnical|fire protection|controls engineer|power generation|
                    bms|hardware|quality engineer|test engineer|cabling|bim|facility|field (service )?engineer|performance modeling|plm
 Embedded/OS sw     embedded|firmware|linux kernel|bsp|rtos|operating systems? engineer|systems software engineer|bmc|
                    camera/connectivity/control systems/robotics/host systems software|software security architect
 Data science       (no 'software engineer') AND data scien|analytics|data analyst|economist|forecasting
 Data engineering   data engineer|data infrastructure|data platform|data pipelines?
 ML/AI systems      machine learning|\bml\b|\bmle\b|\bmodel\b|model-to-product|inference|training|\bevals?\b|evaluations engineer|
                    sampling|\bai engineer|ai systems engineer|accelerator|tpu compiler|collective communication|kernel performance|tokens and prompt
 Infra/platform/SRE infrastructure|\bplatform\b|reliability|\bsre\b|devops|agentops|network|\bcompute\b|distributed|storage|hpc|
                    cluster|fleet|capacity|performance engineer|caching|observability|\bci\b|ci/cd|build systems|/ ?cd|
                    continuous integration|sandbox|scheduler|traffic|database|resilience|developer productivity|
                    developer acceleration|developer velocity|\bdeployment\b|\bscaling\b|\bcloud\b
 Design             product designer|\bux\b|\bui\b|design engineer|design systems|web design|interaction design|user researcher|visual designer|brand designer
 Software engineer  software engineer|engineer|developer|full[- ]?stack|front[- ]?end|back[- ]?end|mobile|ios|android|technical staff|tech lead
 else               Other technical
Tags (across families): Frontend front[- ]?end · Full-stack full[- ]?stack · Backend back[- ]?end · Mobile \bios\b|android|\bmobile\b
Manager flag: ^(senior )?manager\b|engineering/research/tech lead/team manager|\bhead\b|\bdirector\b|\bvp\b|\bchief\b|manager of|
              manager, (applied|forward|deployment|data|security|technical|corporate|compute|infrastructure|product program)
Early-career flag: new grad|early career|emerging talent|\binterns?\b|internship|\bjunior\b|fellows? program|apprentice|
              university grad|^research associate|account associate|\bresidency\b
```
Audit: titles were hand-checked per family; residual noise ≈ a handful of non-engineering titles in technical families (e.g., "Communications Manager, Claude Developer Platform" lands in Infra because "developer" makes it technical). `ads.csv` shows every assignment.

**Results, both labs (1,510 listed ads; 1,156 with USD pay; base salary, USD/year)**
| Family | Ads | w/ pay | Lowest floor | Median floor | Median midpoint | Median ceiling | Highest ceiling |
|---|---|---|---|---|---|---|---|
| Research (scientist/engineer) | 86 | 73 | $95K | $380K | **$440K** | $500K | $850K |
| Eng management | 37 | 31 | $293K | $405K | $445K | $485K | $850K |
| ML / AI systems eng (non-research) | 33 | 31 | $185K | $320K | $402K | $485K | $850K |
| Infra / platform / SRE | 88 | 78 | $157K | $315K | $366K | $485K | $850K |
| Data science / analytics | 30 | 24 | $255K | $293K | $366K | $385K | $536K |
| Software engineer (product/general) | 158 | 154 | $153K | $320K | **$362K** | $445K | $625K |
| Security | 44 | 41 | $158K | $320K | $362K | $405K | $510K |
| Data engineering | 8 | 8 | $235K | $320K | $362K | $405K | $850K |
| Developer relations / docs | 5 | 5 | $198K | $290K | $362K | $435K | $435K |
| Embedded / firmware / OS software (OpenAI only) | 10 | 10 | $230K | $306K | $361K | $385K | $460K |
| Product management | 20 | 20 | $266K | $305K | $356K | $385K | $530K |
| Hardware / silicon / data-centre / robotics | 55 | 50 | $113K | $276K | $355K | $405K | $485K |
| Sales / GTM (Anthropic = OTE) | 192 | 110 | $116K | $288K | $318K | $350K | $700K |
| Program / TPM | 85 | 81 | $130K | $239K | $284K | $328K | $445K |
| Solutions / applied AI (customer-facing) | 168 | 83 | $157K | $240K | $280K | $315K | $450K |
| Design (product designers) | 11 | 11 | $230K | $245K | $278K | $310K | $460K |
| Other non-technical (G&A, marketing, policy…) | 379 | 293 | $108K | $240K | $266K | $300K | $750K |
| Forward deployed eng | 51 | 24 | $146K | $185K | **$242K** | $300K | $445K |
| Tech support / IT | 41 | 20 | $162K | $222K | $238K | $266K | $445K |
| Other technical | 9 | 9 | $171K | $266K | $287K | $302K | $500K |
| **All ads** | 1,510 | 1,156 | $95K | $276K | **$328K** | $385K | $850K |

**By company (median floor / median midpoint / median ceiling; ads with pay)**
| Family | Anthropic | OpenAI |
|---|---|---|
| Research | $350K / **$600K** / $850K (40) | $380K / $440K / $500K (33) |
| Software engineer (product/general) | $320K / $402K / $485K (53) | $266K / $356K / $405K (101) |
| Infra / platform / SRE | $320K / $402K / $485K (33) | $266K / $356K / $445K (45) |
| ML / AI systems | $320K / $402K / $485K (15) | $280K / $376K / $465K (16) |
| Security | $320K / $362K / $405K (20) | $266K / $356K / $445K (21) |
| Data science | $285K / $332K / $380K (10) | $320K / $396K / $445K (14) |
| Solutions / applied AI | $275K / $300K / $320K (31) | $234K / $264K / $280K (52) |
| FDE | $300K / $331K / $362K (2) | $185K / $242K / $300K (22) |
| Design | $305K / $382K / $460K (3) | $245K / $278K / $310K (8) |
| Product management | $305K / $345K / $385K (10) | $347K / $396K / $445K (10) |
| All ads | $320K / $360K / $405K (486 of 634) | $255K / $308K / $366K (670 of 876) |

Stack tags (both labs): frontend 3 ads (median midpoint $308K); full-stack 36 ($360K); backend 8 ($361K); mobile 10 ($316K). IC-only (no manager words) changes little: software engineer $362K, research $440K, all IC ads $328K.

**What our count shows**
- Research pays most: 25 of 73 paid research ads have an $850K ceiling (22 at Anthropic, typically "$500,000 — $850,000"); Anthropic's research median midpoint $600K.
- Customer-facing technical roles pay least among engineers: FDE $242K (OpenAI US FDE ICs mostly $185K–$300K), solutions/applied AI $280K, vs software engineer $362K at the same two employers. (Matches Hiring Tempo's "no FDE premium", 07 notes.)
- Front-end-only work is almost absent: 3 of 1,510 titles.
- Beginners are nearly absent: 12 ads with early-career words; 4 with US pay — Research Associate, Biology ($95K–$120K, Anthropic), Software Engineer, Applied Emerging Talent (2027) ($180K, OpenAI), Account Associate ×2 ($108K–$120K, OpenAI). Anthropic Fellows (3 ads) carry no salary range.
- Lab pay ≈ 1.8× Levels.fyi US SWE median *total* comp ($362K base midpoint vs $200K TC) — these are top-of-market employers, mostly senior titles, San Francisco/New York; do not generalise.
- Title-keyword counts (for the glossary): "applied AI" 147 titles (59 A + 88 O); FDE 52; safety/alignment/interpretability/safeguards 72; "agent" 25; security 69; "eval" 8; red team 3; human data 4; devrel/dev education 4 (Anthropic); prompt 1; MLOps/LLMOps 0; context engineer 0.

---

## 7. Glossary of new and rising titles (task 2)

| Title | What they do day to day | Typical background | Demand evidence (source, tag) | Status |
|---|---|---|---|---|
| **AI Engineer** | Builds products on top of models: prompts and context, retrieval (RAG), tool calls, evals, monitoring, cost/latency. | Software engineer; LinkedIn: feeders are SWE, data scientist, full-stack; median 3.7 yrs prior experience. | LinkedIn Jobs on the Rise 2026 #1 [S6 OP]; Dice 7,378 US postings, +208% [S4]; UK share 0.077→0.61% [S7]; exact title −10% in Timeplot panel as it splits [S8 OP]; only 3.7% of US ads open to entry level (Apiva, OP-prev). | Real, biggest; title fragmenting |
| **Applied AI Engineer** | At model makers: technical partner to customers — prototypes, integrations, architecture reviews, feedback to research. Elsewhere: AI engineer inside a product team. | SWE with customer-facing experience; 5+ yrs typical. | Timeplot 35→49 per 1,000 companies, open roles 99→259 (Nov 2025→Oct 2026) [S8]; 147 of 1,510 lab titles [S28/29]. | Rising |
| **Forward Deployed Engineer** | Sits with one customer, builds a production system in their environment on their data, then feeds lessons into the product. | Senior SWE + consulting/customer skills; UK median 7.7 yrs (Cruvo, OP-prev). | Lightcast US ads ~200 (2024) → ~1,200 (2025) → 5,200+ (Jan–Jul 2026) (OP-prev); TrueUp ~1,450–1,500 open, 4.6× [S2]; Timeplot 83→143 per 1,000 companies [S8]; lab: 51 ads, median posted base midpoint $242K [§6]. | Hot but small; partly renamed sales/consulting |
| **Solutions / Deployment Engineer** (solutions architect, AI deployment manager, deployment strategist) | Pre- and post-sales technical work: demos, proofs of concept, solution design, onboarding, troubleshooting at customers. | SWE, consulting or support engineering + communication. | Timeplot "AI Deployment & Solutions" +70%, peak 189 open roles (Aug 2026) [S8]; Dice Solutions Architects 18,582, +13% [S4]; UK solutions architect 1.78% share, £90,000 [S7]; LinkedIn top-10 SWE-hire specialty [S5]. | Real, steady |
| **Agent Engineer** | Builds systems where a model takes multi-step actions: orchestration, tool/MCP design, sandboxes, memory, permissions, trajectory evals. | Backend/platform SWE. | Timeplot 37→56 per 1,000 companies (+53%), new postings 3.3→5.9 per 1,000 [S8]; UK "agentic AI engineer" 0→5→41 ads (2024→26), £90,000 [S7]; 25 lab titles contain "agent". | Rising fast, small |
| **Evals Engineer** | Writes the tests that say whether AI output is right, safe and improving: eval datasets, graders (incl. LLM-as-judge), regression suites, dashboards. | SWE, data scientist, QA, ML. | Evals named in 37% of 5,046 AI-engineer ads but only 34 dedicated roles of 2,852 AI jobs (hiredaemon; AI Hiring Board, OP-prev); "AI Evals" median salary $232K (Timeplot) [S8]; lab: 8 titles, e.g. OpenAI "Product Evals Engineer" $185K–$490K. | Skill everywhere, title tiny; natural QA path |
| **AI safety / red team** | Red team: tries to make models misbehave (jailbreaks, misuse, cyber/bio uplift) and writes up fixes. Safety researchers: alignment, interpretability, monitoring. | Security, ML research, domain experts (bio, chem, cyber). | 72 lab titles with safety/alignment/interpretability/safeguards, 3 "red team" [§6]; UK "red team" skill share 0.10→0.17→0.11% [S7]. | Real, concentrated at labs |
| **AI Security Engineer** | Secures AI systems and agents: prompt injection, data leakage, model/tool supply chain, agent permissions; also uses AI in security operations. | AppSec / cloud security. | CyberSN: 2,409 US ads Jan–Sep 2026, +268%, while all cyber ads −26.4% (OP-prev); "Agent Security" titles at both labs. | Rising; ~1% of cyber ads |
| **Product Engineer** | Owns a feature end to end: talks to users, decides what to build, ships, measures. | Full-stack SWE with product sense. | UK 0.054→0.097→0.16%, median £76,500 [S7]; 459 roles at 301 companies, two-thirds require user contact (Nilerobot, OP-prev). | Rising |
| **Design Engineer** | Designer who ships in code: UI, prototypes, interactions, design systems. | Front-end + visual/interaction design. | 39 open software roles on a specialist board, Nov 2026 (Design Code Jobs, OP-prev); UK "design engineer" counts are mostly mechanical/civil — don't use. | Real, rare |
| **Platform Engineer** | Builds the internal platform (CI/CD, environments, observability, now GPU/inference/agent sandboxes) so other teams ship safely. | DevOps/SRE/backend. | TrueUp +30% y/y [S3]; UK 0.39→0.51%, £80,000 [S7]; 88 infra/platform/SRE ads at the two labs. | Real, under-hyped |
| **MLOps / LLMOps** | Deploys, versions, monitors and cost-controls models; LLMOps adds prompt/version management, tracing, eval pipelines, guardrails. | DevOps + ML. | UK MLOps skill share 0.14→0.41→0.36%, median £82,000 [S7]; 0 MLOps/LLMOps titles at the two labs (absorbed into infra/inference). | Function real; title fading into platform/AI infra |
| **Context Engineer** | Decides what goes into the model's context: retrieval, memory, tool descriptions, instructions, compression. | AI engineer skill. | 2 of 115,348 ads (landed.jobs, Jul 2026, OP-prev); 0 lab titles. | Skill, not a job |
| **AI trainer / code data annotator** | Contract work: write hard tasks, solve them, grade model answers, explain why; coding version runs agentic coding sessions and red-teams for "faked test passes" (DataAnnotation page). | Developers, students, domain experts; paid per hour, remote. | LinkedIn: data annotator #4 rising job [S6]; in-house "AI Trainer/AI Data Specialist" new postings 9.1→1.2 per 1,000 (Timeplot) — work moved to platforms [S8]; pay index (10,720 listings, 30 platforms, 2 Nov 2026): software engineering median $70/hr (470 rates), Mercor $77.50, micro1 $55, Outlier $25 [S32, OP; site has referral partnerships]; DataAnnotation claims "up to $150+/hr" for coding [S31, OP, vendor]. | Large, unstable gig market |
| **Developer advocate / DevRel** | Teaches developers a platform: docs, samples, talks, community, feedback to product. | SWE + writing/speaking. | Anthropic: 4 devrel/developer-education ads, posted $290K–$435K [§6]; no 2026 market count found; 2024 State of DevRel: 14.6% of respondents laid off that year (SEC). | Niche, volatile; demand at AI platforms |
| **Prompt Engineer (status)** | Was: craft prompts. Now: part of every AI role. | – | 4 of 115,348 ads (landed.jobs, Jul 2026, OP-prev); 36 postings in a year across 1,501 companies (Timeplot) [S8]; ITJW has no page (404); 0 lab titles. Microsoft-survey "second to last" claim: SEC, unverified. | Title effectively dead; skill absorbed |
| *Others rising:* **GTM Engineer** | Automates sales/marketing pipelines with code and AI. | SWE/ops. | Timeplot 14→37 per 1,000 companies (+162%) [S8]; Anthropic "GTM AI Engineering", "DevOps / AgentOps, GTM Systems". | Real, small |
| **AI consultant / strategist** | Helps companies choose and roll out AI. | 8.2 yrs median prior experience. | LinkedIn #2 rising job [S6]. | Rising, senior |
| **AI Product Manager** | PM for AI features: evals, quality bars, cost, model choice. | PM/engineer. | Timeplot +47% companies [S8]. | Rising |
| **RL environment engineer** | Builds sandboxes, simulators and graders in which models are trained (terminals, browsers, codebases). | Strong SWE; RL a plus. | Job postings only (e.g., Labelbox FDE RL environments, base $140K–$200K, Apr 2026, SEC); lab titles "Environments Infrastructure", "Code RL". No counts found. | Emerging |
| **Inference / ML systems engineer** | Makes models fast and cheap to serve and train: kernels, batching, GPU scheduling. | Systems/C++/CUDA. | 33 ML/AI-systems ads at the two labs, median posted midpoint $402K [§6]. | Real, high-paid, senior |
| **Data-centre technician** (adjacent) | Builds and runs AI data-centre hardware. | Technicians, electricians. | LinkedIn #17 [S6]; Dice 6,358 postings, +36% [S4]. | Rising, not software |

---

## 8. Source key

| ID | Source | Population / scope | Date | URL | Tag |
|---|---|---|---|---|---|
| S1 | Indeed Hiring Lab postings tracker, by sector | US Indeed postings, index Feb 2020=100 | data to 2026-11-13 | https://github.com/hiring-lab/job_postings_tracker | OP (file) |
| S2 | Lenny's Newsletter, State of the tech job market late 2026 | TrueUp openings (9,000+ tech cos) + Live Data US hires | 2026-11-10 | https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late | OP (free part) |
| S3 | Golden Data jobs report (prints TrueUp) | TrueUp specialty openings | Oct 2025–Oct 2026 | https://goldendata.app/dashboards/jobs-report/ | SEC (trueup.io 403) |
| S4 | Dice 2026 job-market insights | 7M+ US postings 2025 (Lightcast), titles ≥5,000 | pulled 2026-01-30 | dice.com/recruiting/ebooks/explore-tech-sentiment-report/job-market-insights.html | OP-sub |
| S5 | LinkedIn Economic Graph, U.S. Software Engineer Talent Landscape | LinkedIn US hires/postings | Feb 2026 | https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/us-software-engineer-talent-landscape-2026.pdf | OP |
| S6 | LinkedIn Jobs on the Rise 2026 (US) | jobs started 1 Jan 2023–31 Jul 2025 | 2026-01-07 | https://www.linkedin.com/pulse/linkedin-jobs-rise-2026-25-fastest-growing-roles-us-linkedin-news-dlb1c | OP (via reader) |
| S7 | IT Jobs Watch | UK permanent IT ads, 6 months to 25/26 Nov | 2026-11-26 | https://www.itjobswatch.co.uk/ | OP |
| S8 | Timeplot newsletter 008 | 1,501 companies' boards | 2026-11-01 | https://www.timeplot.app/newsletters/20261101-new-job-titles-2026 | OP (re-verified) |
| S9 | Anthropic, Labor market impacts | 756 occupations | 2026-03-05 | https://www.anthropic.com/research/labor-market-impacts | OP (re-verified) |
| S10 | Anthropic Economic Index data, release 2026-06-26 | Claude.ai conversations, May 2026 | 2026-06-26 | https://huggingface.co/datasets/Anthropic/EconomicIndex | OP-sub (own extraction) |
| S11 | Anthropic, Impact on software development | 500k interactions, Apr 2025 | 2025-04-28 | https://www.anthropic.com/research/impact-software-development | OP-sub |
| S12 | Tomlinson et al., Working with AI (Microsoft) | 200k US Copilot conversations 2024; 785 occs; data v1.1 | 2025 / Dec 2025 | https://arxiv.org/abs/2507.07935 ; github.com/microsoft/working-with-ai | OP-sub |
| S13 | OpenAI GDPval | 44 occupations; experts avg 14 yrs | 2025-09-25 | https://arxiv.org/abs/2510.04374 | OP-sub (chart values) |
| S14 | ILO WP140 refined exposure index | 427 ISCO-08 occupations | 2025-05-20 | https://webapps.ilo.org/static/english/intserv/working-papers/wp140/index.html | OP-sub |
| S15 | Indeed Hiring Lab, AI at Work 2025 | 2,884 skills, 53.5M US postings | 2025-09-23 | https://hiringlab.indeed.com/2025/09/23/ai-at-work-report-2025-how-genai-is-rewiring-the-dna-of-jobs/ | OP-sub (chart) |
| S16 | Eloundou et al., GPTs are GPTs data | O*NET occupations | 2023 (*historical*) | github.com/openai/GPTs-are-GPTs | OP-sub |
| S17 | JetBrains research blog | 15,000+ devs, May–Jul 2026 | 2026-08-26 | https://blog.jetbrains.com/research/2026/08/how-much-code-do-developers-really-let-agents-write/ | OP-sub |
| S18 | Stack Overflow Developer Survey 2025, work | 23,928 global comp, 5,239 US | 2025 | https://survey.stackoverflow.co/2025/work | OP-sub |
| S19 | Stack Overflow Developer Survey 2026, compensation | 12,040 global, 2,885 US | 2026 | https://survey.stackoverflow.co/2026/work/data/compensation.md | OP (re-verified) |
| S20 | Stack Overflow Developer Survey 2026, AI | n≈11–14k per question | 2026 | https://survey.stackoverflow.co/2026/ai | OP |
| S21 | Levels.fyi title pages | self-reported US TC | viewed 2026-11-26 | https://www.levels.fyi/t/software-engineer (etc.) | OP-sub |
| S22 | Levels.fyi End of Year Pay Report 2025 | Levels.fyi submissions | 2025-12-20 | https://www.levels.fyi/2025/ | OP-sub |
| S23 | Levels.fyi analysis on Let's Data Science | same-level AI premium | 2026-08-26 | letsdatascience.com | SEC |
| S24 | Dice Tech Salary Report 2025 | survey n=2,835, Aug–Nov 2024 | 2025 | dice.com | OP-sub |
| S25 | BLS OEWS May 2025 | US employer survey | 2026 release | https://api.bls.gov (OEWS series) | OP-sub |
| S26 | PwC Global AI Jobs Barometer 2025/2026 | >1B ads, 27 countries | 2025-06-03 / 2026-06-15 | pwc.com | OP-sub (via reader) |
| S27 | Lightcast, Beyond the Buzz | US postings | 2025-07-23 | lightcast.io | OP-sub (via reader) |
| S28 | Anthropic Greenhouse job board API | 634 listed ads | 2026-11-26 | https://boards-api.greenhouse.io/v1/boards/anthropic/jobs?content=true | OP (own count) |
| S29 | OpenAI Ashby job board API | 876 listed ads | 2026-11-26 | https://api.ashbyhq.com/posting-api/job-board/openai?includeCompensation=true | OP (own count) |
| S30 | GDC 2026 State of the Game Industry | 2,300+ game professionals | Jan 2026 | https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/ | OP |
| S31 | DataAnnotation coding page | vendor marketing | ©2026, undated | https://dataannotation.tech/coding-ai-training | OP |
| S32 | aitrainer.work Pay Index | 10,720 listings, 30 platforms | 2026-11-02 | https://aitrainer.work/pay-index/2026-11 | OP (has referral deals) |
| prev | Lightcast FDE, Hiring Tempo, Apiva, hiredaemon, CyberSN, AI Hiring Board, Nilerobot, Design Code Jobs, landed.jobs, Figma 2026 AI report, NN/g, Cruvo | see 07_roles_and_market.md | 2026 | URLs in 07 notes | OP-prev |
Also used: Veracode GenAI Code Security Report (2025-07-30; SEC, not opened); Pragmatic Engineer, State of the job market 2026 (2026-05-26; OP free part: big companies 50–100% more AI-engineering listings y/y).

---

## 9. Claims to avoid
- "Frontend is dead because of AI": demand fell and exposure is highest, but no causal study; relabelling into full-stack/product is part of it.
- "AI engineer pays more than SWE": depends on the label ($155K title vs $251K ML/AI focus, Levels.fyi).
- "QA is gone": UK QA/test shares rose in 2026; exposure is high but the US series is missing.
- "Lab salaries = market salaries": lab base midpoints (~$328K–$362K) are top-of-market, senior, SF/NY.
- Any 2022 vs 2026 TrueUp design comparison (category restated), or adding Levels.fyi TC to lab base ranges.
- Applying US/UK figures to Iran; sanctions block most of the listed US employers and gig platforms (*inference*; no data).

## Gaps
- **TrueUp primary** pages (trueup.io) returned 403; specialty numbers only via Golden Data/Lenny. No TrueUp QA, data engineering, ML, game or DevOps lines found.
- **No clean 2022–2026 series by stack layer** (frontend/backend/mobile/QA) in the US: Indeed has only sectors; TrueUp specialty series starts Oct 2025 in what we could open; Dice lists only titles ≥5,000 postings (no frontend, mobile, QA, game, UX).
- **UK** ITJW gives 2024–2026 only in table form; 2022–23 missing. Several UK samples tiny (games n=11, mobile n=39, ML n=50).
- **QA/test demand (US)** and **game-dev openings** not found as series; game pay (US) missing in SO and Levels.fyi.
- **Exposure studies:** no occupation codes for frontend, backend, mobile, DevOps, ML engineer, game dev; GDPval covers only "software developers" and PM-type roles among ours; no 2026-model GDPval by occupation; Indeed AI at Work has no 2026 update and no security/design family; Anthropic file lacks 13-1082 and 15-1255.01; ILO mappings for security/QA/games not re-verified.
- **Pay:** SO 2026 lacks global medians for PM, QA, UX, security; no Dice survey-based 2026 salary report found; BLS has no codes for DevOps, data engineering, ML, mobile, game, PM; Levels.fyi has no game-dev page and no 2026 mid-year report.
- **Lab data:** base only (no equity, bonus, commission for OpenAI); Anthropic sales = OTE; non-US ads have no posted pay; OpenAI titles hide level; 4 placeholder ranges dropped; single snapshot (no trend). Classification noise: a few non-engineering titles in technical families (audit in ads.csv).
- **Glossary demand:** no 2026 counts for developer advocates, design engineers (software-only, outside one board), context engineers beyond landed.jobs, RL-environment engineers; prompt-engineer "Microsoft survey" claim unverified; AI-trainer pay figures come from a referral-earning index and vendor pages.
- **"Value produced" per role** has no direct measure; we use pay and BLS wage bill (median × employment) as proxies only.
- **Iran:** no data on any of this for Iranian employers or remote work from Iran.
