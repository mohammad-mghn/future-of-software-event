# 02 — The junior shift in software, Nov 2023 to Nov 2026 (analyst notes)

As of 2026-11-26. Window: 2023-11-26 to 2026-11-26; older items are marked *historical*.
Builds on `research_notes/Software engineering in the AI era/02_job_market.md` (cited below as **v2-02**) and `07_roles_and_market.md` (**v2-07**). Quotes from named leaders are collected in `v3 analyst research/01_voices.md`; this file keeps only the quotes that carry the junior argument and adds data.

**Verification labels (per item):** `opened primary` = I read the publisher's own page, PDF or data file this session. `opened primary (data)` = I downloaded and computed from the publisher's own data file. `via secondary` = I read a page that reports someone else's data or words. `could not open` = blocked or unreadable; listed so nobody re-tries blind. *Derived* = my arithmetic on an opened source. *(para.)* = paraphrase, not a quote. Text in quotation marks was read on the page named.
**Disclosure:** written by an Anthropic model. Anthropic items (Economic Index, internal employment study, skills RCT) are flagged as interested-party sources.

**What is new versus v2-02:** (1) primary Stanford/ADP software-developer series by age to Oct 2026; (2) NY Fed CS/CE unemployment as a 2021–2024 series, not one year; (3) the MIT/Microsoft causal headline numbers have confidence intervals that include zero (v2-02 did not say this); (4) LinkedIn's Feb 2026 software-engineer note, which attributes most of the slump to interest rates; (5) Revelio's monthly AI tracker (junior vs senior postings, adopting-firm headcount by seniority); (6) Germany/France/Canada vs US Indeed software postings as a test of US-only causes such as Section 174; (7) hiring-signal data (Ashby, Greenhouse, Handshake, LinkedIn, Wellfound, Gartner); (8) task-level and apprenticeship evidence (Anthropic RCT and internal studies, Cui et al., METR 2026).

---

## 0. Bottom line (for the speaker)

- **The door narrowed through hiring, not firing.** Every dataset that splits by flow (Stanford/ADP, Revelio, MIT/Microsoft, Harvard, Cleveland Fed in v2-02) finds fewer *hires* of juniors, not more *separations*. Implication: the pain falls on people trying to get in, and on juniors trying to change jobs.
- **Size depends on lens, and the lenses do not agree.** Payroll (ADP): software developers aged 22–25 at **83.2** in Oct 2026 vs Nov 2022 = 100, while 41–49 are at **120.8**. Elite firms (SignalFire): new-grad hiring **~−65%** vs 2019. LinkedIn: entry-level SWE hiring "broadly kept pace" with overall SWE hiring, i.e. a macro story. Indeed: entry-level share of software postings ~4.5%, but it was always small and moved ~1 point.
- **Timing is mixed, which is itself the finding.** Postings crashed from Feb 2022, before ChatGPT (US: ~53% of the peak-to-trough fall happened before 30 Nov 2022, *derived*). But the age-specific gap becomes statistically clear only in **2024** once firm shocks are controlled (Stanford, Feb 2026), and experience requirements started rising in **early 2023**, only in tech (Indeed). Rates and over-hiring explain the crash; AI plausibly explains why the junior share did not come back. The postings crash was international (−64% to −74% peak to low in six countries on Indeed), so a US-only tax rule (Section 174) cannot be the main driver; only the US is rebounding (+23% y/y vs UK +1%, Germany −16%).
- **Nobody can give a clean "AI share".** The best causal estimate (Copilot at 5,414 large firms) attributes **10% / 19% / 51%** of their 2022–24 technical-hiring fall to Copilot depending on assumptions, and its headline Wald estimates (−29% technical, −40% junior) have bootstrap intervals that include zero. The significant reduced-form effect is ~−8% monthly technical hiring.
- **Mechanism: the tasks juniors learned on are the most delegable ones,** and the bottleneck moved from writing code to reviewing it. Anthropic's own RCT finds learners who delegate to AI score lower on comprehension, especially debugging. This is the apprenticeship problem in data, not just anecdote.
- **The hiring signal broke.** Applications per hire roughly **tripled since 2021** (Ashby, >100M applications); only **~3 in 100** applications reach a conversation (Greenhouse); 90% of US employers believe they rejected real candidates as fake. Firms respond with in-person rounds, AI-allowed interviews, work trials and referrals, all of which favour candidates who are physically present, referred, or have verifiable work.
- **Counter-evidence is real but mostly announcements.** Cloudflare (goal 1,111 interns), Shopify (~1,000 interns), IBM (triple US entry-level), Amazon (11,000 interns and new grads) are bets that AI makes juniors *more* valuable. Data partly agree: NACE spring 2026 projected **+5.6%** new-grad hiring; intern conversion **63.1%** (5-year high); the ADP young-developer index stopped falling (flat year on year).
- **Watch list (free):** Stanford/ADP software-developer 22–25 index (monthly), Indeed software postings + seniority mix, NY Fed by-major release (Feb 2027, 2025 data), Indeed internship postings, Revelio junior-vs-senior postings gap, NACE outlook, and whether the decline spreads to ages 26–34 (it did in the last year: 26–30 −3.8% y/y, *derived*).

---

## 1. Size and timing of the entry-level drop

### 1a. Employment levels by age (payroll data)

**Stanford / ADP Canaries dashboard — software developers by age, monthly (NEW, primary data)**
- Index, Nov 2022 = 100, five-year balanced panel of ADP client firms. Read from the dashboard's embedded chart data (Flourish visualisation 29266867) on 2026-11-26; dashboard says "Last updated October 21, 2026", latest point Oct 2026.

| Month | 22–25 | 26–30 | 31–34 | 35–40 | 41–49 | 50+ |
|---|---|---|---|---|---|---|
| Aug 2022 (22–25 peak area) | 101.1 | 98.8 | 98.3 | 97.9 | 99.5 | 98.6 |
| Nov 2022 (base, ChatGPT) | 100 | 100 | 100 | 100 | 100 | 100 |
| Nov 2023 | 91.0 | 96.9 | 106.5 | 102.4 | 105.0 | 104.1 |
| Nov 2024 | 84.0 | 96.0 | 106.6 | 104.7 | 110.4 | 106.6 |
| Oct 2025 | 83.2 | 99.1 | 110.3 | 111.9 | 117.7 | 108.3 |
| Nov 2025 | 82.4 | 98.5 | 110.6 | 112.6 | 118.2 | 109.1 |
| Mar 2026 (22–25 low) | 78.8 | 96.4 | 108.4 | 112.0 | 118.2 | 108.1 |
| **Oct 2026** | **83.2** | **95.3** | **107.0** | **112.7** | **120.8** | **108.0** |

- *Derived:* 22–25 −16.8% since Nov 2022; **flat year on year** (83.2 → 83.2, Oct to Oct); +5.6% from the Mar 2026 low. 26–30 −3.8% y/y; 31–34 −3.0% y/y; 41–49 +2.6% y/y. Gap 41–49 minus 22–25 = 37.6 index points.
- What it can show: within the same firms, young developers' headcount fell while older developers' rose; the young decline has stopped deepening in 2026; in the last year, weakness appears in 26–34.
- What it cannot show: cause; hiring vs exits (it is a stock); national totals (ADP clients, larger firms over-represented); not seasonally adjusted as far as I can tell (July bumps), so compare same months. Releases revise past months (an outside analysis using the 16 Oct vintage read Sep 2026 as 81.4; today's file shows 81.9).
- Source: [dashboard](https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/) — `opened primary (data)`. Corroborating outside analysis with CPS cross-check: [DataHub, 15 Nov 2026](https://datahub.io/blog/junior-dev-hiring) — `via secondary` (says CPS share of developers aged 22–25 was 7.1% in the year to Sep 2026 vs 9.1% a year earlier; ~30–45 sample members a month, noisy).

**Stanford "Canaries in the Coal Mine?" (Brynjolfsson, Chandar, Chen)** — re-verified via v2-02
- Aug 2026 revision: 22–25 in the two most exposed quintiles **19% below** the path of same-age peers in less exposed jobs (15% at the July 2025 vintage); all exposed jobs, not only software; descriptive. [PDF](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf) — `opened primary` (v2-02).
- Aug 2025 version (*historical anchor*): youngest software developers ~**20% below** their late-2022 peak by July 2025; 22–25 in high-exposure jobs −6% vs +6–13% for 30+. Restated by ADP's chief economist: [ADP Research, 26 Aug 2025](https://www.adpresearch.com/yes-ai-is-affecting-employment-heres-the-data) — `opened primary` (ADP is the data provider).
- **Authors' own timing update, 9 Feb 2026:** with firm-time fixed effects, the relative decline for exposed young workers "becomes significant only in 2024"; earlier declines are "likely (at least partly)" other factors; the fixed-effects gap reached ~16% by Oct 2025 with no reversal. They also report AI exposure and interest-rate exposure are *negatively* correlated across occupations. [Stanford note](https://digitaleconomy.stanford.edu/news/canaries-interest-rates-and-timinga-more-on-recent-drivers-of-employment-changes-for-young-workers) — `opened primary`.
- Dashboard text (Oct 2026): divergence "not only persist[s], but deepen[s]"; muted similar patterns up to age 34; occupations with a higher Anthropic *automation* ratio show declines, while the *augmentation* ratio shows no clear relationship. Same page.
- ADP's own reading (16 Nov 2026): July 2026 update showed 22–25 employment in highly exposed occupations **−4.3% y/y, 33 consecutive months of contraction**; least exposed flat; ADP says the data "does not establish AI as the cause" (para.). [ADP SPARK](https://www.adp.com/spark/articles/2026/11/is-ai-changing-the-way-early-career-employees-build-experience) — `opened primary`.
- Critiques (EIG/Google economists, Brookings, Census ACS gap ~0, education control halves estimate): see v2-02 Q2; not re-opened.

**Revelio Labs AI Labor Market Tracker, Sept 2026 release (1 Oct 2026)** — NEW
- Online-profile data, event study following Canaries design, top vs bottom AI-exposure quintile, relative to Oct 2022.
- Employment, ages 22–25 in most exposed occupations: **−20% relative** to least exposed; older workers −6%. All ages −7%.
- Postings gap most vs least exposed: **−29%**, narrowing from **−40%** in July 2026; decline "heavily concentrated at junior seniority levels".
- AI-adopting firms (identified by "AI integrator" postings, Hosseini–Lichtinger method): headcount +26–27% vs non-adopters since Nov 2022, but they were already growing faster; **senior +32% vs junior +6%**; junior growth still higher than at non-adopters.
- WARN notices: more AI-exposed firms see *fewer* layoffs. AI-exposure wage premium eroded from ~2% to ~0.
- New-firm AI adoption pace down 48% from its April 2026 peak; cumulative ~7% of eligible hiring firms.
- [Revelio tracker](https://www.reveliolabs.com/ai-labor-market-tracker/us/september-2026) — `opened primary`. Stake: sells workforce data. Profile data under-cover non-LinkedIn workers.
- Revelio headline elsewhere: US entry-level postings **~−35% since early 2023**, all occupations; Revelio itself says postings alone do not establish AI as cause. [Revelio, 21 Aug 2026](https://www.reveliolabs.com/blog/fast-company-entry-level-hiring) — `opened primary`.

**Gusto (small businesses, payroll), 30 Apr 2026** — NEW
- 500,000+ small-business clients. New-grad hires forecast **974,000** in 2026 (962,000 in 2025; peak 1.33m in 2021; trough 941,000 in 2024, −29%). "Software Engineer" share of new-grad hires **6.2% (2022) → 5.4% (2026)**; "AI Engineer" new-grad title >5x; "Founding Engineer" +390%. Jan 2023–Nov 2025: small-business employment +9.6%, highly AI-exposed roles +3.4%, ages 22–28 in those roles declining. Real starting pay ~6% below 2019–22 classes. [Gusto](https://gusto.com/resources/gusto-insights/new-grad-hiring-report-2026) — `opened primary`. Stake: payroll vendor; titles self-entered.

### 1b. Hiring flows and seniority mix

**SignalFire State of Tech Talent 2025 (20 May 2025)** — `opened primary` — [link](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2025)
- Population: "Big Tech" = top 15 tech firms by market cap; startups = top-100-VC-funded, Seed–Series C; data = SignalFire's profile database (650M people).
- New grads **7% of Big Tech hires**; new-grad hires **−25% vs 2023, >−50% vs 2019**. Startups: new grads **<6%** of hires, −11% vs 2023, >−30% vs 2019. New-grad share landing at the Magnificent Seven **more than halved since 2022**.
- SignalFire itself says the bigger driver "may be" the end of cheap money and over-hiring (para.), with AI taking some routine tasks.

**SignalFire State of Talent 2026 (22 Jun 2026)** — `opened primary` — [link](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026)
- Population changed: "Tech Majors" = 12 named firms (Alphabet, Meta, Apple, Amazon, Microsoft, Netflix, NVIDIA, Tesla, Uber, Airbnb, Block, Stripe); early-stage = Seed–Series B. **Not comparable to the 2025 definition**; do not chain the two.
- Trailing-12-month hiring **−25% vs 2019** at Tech Majors; engineering only **−11%**; SWE **55%** of hires (46% in 2019). Startups: total −4% vs 2019, engineering +7%.
- **New-grad/entry hiring ~−65% at Tech Majors, ~−76% at early-stage startups, vs 2019.** Top-20-school CS grads of 2025: **45% less likely** to land a Tech Major role and **2x** as likely to call themselves founders vs class of 2022.
- Span of control: ~12 engineers per EM at Tech Majors (+14% vs 2019), ~15 at startups (+34%).
- Mechanism claim (theirs, not measured): the bottleneck moved from writing code to reviewing it, so "Junior engineers can slow a team down".
- Can show: elite-firm composition. Cannot show: industry-wide juniors; cause; 2019 base flatters the drop (2022 peak was +63% vs 2019 at Tech Majors). Stake: VC firm selling a talent product; promotes founding.

**LinkedIn Economic Graph, "U.S. Software Engineer Talent Landscape", Feb 2026** — NEW — `opened primary` (PDF text via fetch tool; direct WebFetch returned binary) — [PDF](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/us-software-engineer-talent-landscape-2026.pdf)
- LinkedIn member profiles; hiring rate indexed to 2016 average; postings May 2021–Jan 2025.
- SWE hiring slowed more sharply than its sector for both overall and entry-level roles from mid-2022 to late 2023; "entry-level SWE hiring has broadly kept pace with overall SWE hiring"; **entry-level SWE hiring did not rebound at end-2025** while overall hiring did.
- LinkedIn's attribution: real interest-rate changes "account for most of the variation in SWE hiring" over the past decade; the slowdown is "driven mainly by macroeconomic forces"; the missing entry rebound is "not enough to conclude that AI is the cause".
- Pipeline: **55%** of CS degree holders started in non-SWE jobs in 2023 and 2024 (49% in 2016); top non-SWE first jobs: data analyst, IT analyst, financial analyst. Gen Z = **45.1%** of SWE hires (+15 pts since 2022).
- Industry: Professional Services share of SWE postings 21.2% → 28.2% (Dec 2023 → Dec 2025); Tech 37.1% → 38.4%. AI Engineer share of SWE-adjacent hires 14x 2019.
- Skills among SWE hires: Python, AWS, SQL, JavaScript, React; fastest-growing: AI, Tailwind, Azure Databricks, BigQuery, Azure SQL.
- Stake: Microsoft-owned (as is GitHub). Note the two Microsoft-linked sources point different ways (LinkedIn: macro; Raymond & Dillon: Copilot cut junior hiring).

**Indeed Hiring Lab**
- 30 Jul 2025 (*anchor*): standard/junior tech titles **−34%** vs Feb 2020, senior/manager −19%; postings asking **5+ years** rose **37% → 42%** (Q2 2022 → Q2 2025), 2–4 years fell 46% → 40%; ≤1 year roughly stable 17% → 18%. Timing: tightening began **early 2023** and was unique to tech; Indeed says it "could be" an AI effect. [Hiring Lab](https://www.hiringlab.org/2025/07/30/experience-requirements-have-tightened-amid-the-tech-hiring-freeze/) — `opened primary`.
- 23 Jul 2026: Q1 2026 entry-level share of software postings **4.5%**, senior 69.3%; tech's entry share fell only ~1 point since 2019; mid-level fell most. [Hiring Lab](https://www.hiringlab.org/2026/07/23/the-labor-market-is-tilting-toward-seniority/) — `opened primary` (v2-02).
- 23 Apr 2026: on Indeed, junior postings **−7%** y/y in 2025 while senior **+4%**; internship postings ended 2025 at the **lowest level since 2020**, and early-2026 intern postings were in line with or slightly above 2024. Share of new bachelor's grads creating/updating an Indeed profile in graduation year indexed **134 (2023) → 223 (2025)**; CS grads highest of all fields. [Hiring Lab](https://hiringlab.org/2026/04/23/new-grads-looking-for-work-the-struggle-is-real) — `opened primary`.
- 8 Jul 2026: 71% of the May 2025–May 2026 software-postings *increase* was senior roles (v2-02, `opened primary`).

**Anthropic internal (16 Oct 2026) — interested party** — `opened primary` — [link](https://www.anthropic.com/research/employment-at-anthropic)
- Junior share of technical *employees* **21% → 14%** since early 2025; junior share of technical *hires* **27% → 9%**; junior postings fell sharply since Dec 2025; technical hiring still grew in absolute terms. ~1/3 of ML and ~1/5 of SWE managers said they hire less because of AI (Apr 2026 survey). Hiring managers increasingly emphasise "autonomy and judgment" over domain expertise and implementation (para.).
- One company, unaudited, at the frontier; useful as a leading case, not a rate.

### 1c. New graduates and CS majors

**New York Fed, recent graduates by major (ACS, ages 22–27, not enrolled)** — NEW series — `opened primary (data)`: current CSV plus three archived versions (Wayback snapshots of the same file); data year confirmed from each version's metadata file.

| Data year (release) | CS unemployment | CS underemployment | CE unemployment | CE underemployment | All majors unemployment | CS early-career median wage |
|---|---|---|---|---|---|---|
| 2021 (Feb 2023) | 4.8% | 19.1% | 3.7% | 17.8% | 5.1% | $73,000 |
| 2022 (Feb 2024) | 4.3% | 16.7% | 2.3% | 13.3% | 3.6% | $78,000 |
| 2023 (Feb 2025) | 6.1% | 16.5% | 7.5% | 17.0% | 3.6% | $80,000 |
| **2024 (4 Feb 2026)** | **7.0%** | **19.1%** | **7.8%** | **15.8%** | **4.2%** | **$87,000** |

- *Derived:* CS gap over all majors went from −0.3 pts (2021) to +2.8 pts (2024); CE from −1.4 to +3.6. In 2024, of 74 majors, CE ranks 2nd-highest unemployment, CS 4th (anthropology 7.9% is 1st, fine arts 7.7% 3rd). Underemployment for CS/CE stays among the lowest; early-career pay rose every year.
- Can show: the jump came between the 2022 and 2023 data years (graduates entering 2023), i.e. right after the 2022 postings crash and with early ChatGPT. Cannot show: cause; single-year ACS major cells for 22–27 are small (CE especially), so year-to-year moves are noisy; no 2025 data until **Feb 2027**.
- Sources: [page](https://www.newyorkfed.org/research/college-labor-market), data file `/medialibrary/research/interactives/data/college-labor-market/college-labor-outcomes-by-major-data.csv`. The interactive table does not render in fetch tools; the CSV does.
- Quarterly, all majors (release 2 Nov 2026, CPS, SA, 3-month average): recent grads **5.2%** (Sep 2026) vs all workers 4.0%, college grads 2.8%, young non-grads 7.4%. *Derived gap recent grads − all workers:* +0.6 pts (Sep 2022) → +1.7 (Sep 2025) → **+1.3 (Sep 2026)**. Underemployment 42.5%. — `opened primary (data)`.

**Handshake (US campus platform; stake: sells early-talent recruiting)**
- Class of 2026: **23 applications per full-time job**, up 8% from 20.8 for the class of 2025 and about double the class of 2023 (11). Tech-company postings −9% y/y (2025). **70%** of class-of-2026 CS majors pessimistic about their career; nearly 30% would choose a different major. Text by Handshake's head of economic research, reposted on a university career blog: [CWU, 6 Feb 2026](https://careerservices.cwu.edu/blog/2026/02/06/what-2025-taught-us-about-the-labor-market/) — `via secondary`. He calls AI "not yet a clear explanation" and names 2021–22 over-hiring and rate hikes (para.).
- Postings −15–16% y/y and applications per posting +26–30% (Aug 2024–Aug 2025): cited by Indeed Hiring Lab (above) — `via secondary`.
- *Historical:* in Nov 2021 >40% of tech majors' applications went to internet/software firms; Sept 2023: 25%; internet/software postings ~40% of 2021 volume in 2023. [Handshake, Dec 2023](https://joinhandshake.com/blog/network-trends/how-early-tech-talent-has-adapted-to-big-tech-layoffs) — `opened primary`.
- Class of 2026 report PDF: `could not open` (binary only via fetch tools). Figures from it are in v2-02.

**NACE (US employer association; small samples)**
- Job Outlook 2026 Spring Update (27 Apr 2026; 185 employers, Feb–Mar 2026): new-grad hiring **+5.6%** (median) for the class of 2026, revised up from a flat/−2.4% fall projection; firms >5,000 staff +8.7%; Information sector among those increasing. [NACE](https://naceweb.org/about-us/press/2026/outlook-brightens-for-college-class-of-2026-entry-level-hiring) — `opened primary`.
- 2026 Student Survey (1,860+ seniors, Mar–May 2026): 43% had an offer before graduation; paid interns: 55% of applicants got ≥1 offer; paid interns' offers averaged $69,521 vs $61,747 overall. [NACE](https://naceweb.org/job-market/trends-and-predictions/nearly-half-of-2026-grads-had-a-job-offer-before-graduation-day) — `opened primary`. Not by major.

**Burning Glass Institute, "No Country for Young Grads" (Jul 2025)** — landing page only: names four drivers: AI-driven "Expertise Upheaval", lean post-pandemic staffing, AI as accelerant, a graduate glut. [page](https://www.burningglassinstitute.org/research/no-country-for-young-grads) — `opened primary` (summary only); report body `could not open`; numbers circulating in press (e.g. layoff rates for young grads "nearly doubled") are `via secondary`, not checked.

### 1d. Causal and quasi-causal evidence

**Raymond (MIT) & Dillon (Microsoft Research), "AI-Assisted Programming and Labor Demand", 6 Nov 2026 (arXiv 2611.31083)** — re-verified, with a correction to v2-02 — `opened primary`
- 5,414 multinational GitHub Enterprise customers (~45M workers; 38% of the US programming workforce); Revelio data Jan 2021–Jun 2025; natural experiment from pre-set contract-review timing; firms HQ'd in the Americas and Europe.
- **Reduced form (significant):** one year after review, monthly technical hiring **−7.6%** (−0.079 log); junior SWE reduced form −0.108 log (~−10%), significant at 5%.
- **Wald/IV headline (not significant at 95%):** quarterly technical hiring **−29%**, bootstrap 95% interval [−0.948, +0.088] log points; **junior SWE ~−40%** (−0.513 log), interval [−1.262, +0.008] ≈ [−72%, +1%]. *v2-02 presented 29%/40% without saying the intervals include zero.*
- Experienced SWE hiring volume not significantly changed (−0.160 log), but **external** hires into experienced roles ~−13% (internal fills unchanged); experienced hires ~1.3 more years since BA. Separations +2.9% (ns), headcount −1.6% (ns). **No evidence of a shift of hiring to India** (imprecise).
- Attribution of the 2022–24 technical-hiring fall: **~10%** (reduced form, 1.7 hires per firm-quarter), **~19%** (Wald, compliers), **~51%** (Wald, all adopters; no clean upper bound). The remaining 50–80% (or more) cannot be split among rates, over-hiring, tax or other AI channels.
- Limits stated by authors: autocomplete-era tools, not agents; large incumbents only; homogeneous-effect assumptions. Stake: Microsoft owns GitHub; result is not flattering to the product.

**Other designs** (from v2-02, not re-opened): Hosseini Maasoum & Lichtinger (Harvard, 62M workers): junior employment falls after firms post AI-integrator roles, via slower hiring. Census CES-WP-26-27: early-career −12% in most exposed cells; up to 25% of the relative decline may be monetary policy. Baird et al. (LinkedIn authors): Copilot adoption *associated* with 3–5% higher monthly probability of hiring engineers, driven by entry level.

### 1e. AI versus other causes: ledger with timing

| Candidate cause | Timing fit | Best evidence | What it explains | Tag |
|---|---|---|---|---|
| End of zero rates (Fed hikes from 16 Mar 2022) | US software postings peaked **28 Feb 2022** (233.8), ~3 weeks before the first hike; ~53% of peak-to-trough fall done before ChatGPT (*derived*, v2-02 FRED) | LinkedIn: real rates "account for most" SWE hiring variation; Census: up to 25%; EIG/Google: exposed postings peaked Mar–Apr 2022. Stanford counters: exposure to AI and to rates are negatively correlated | The 2022–23 crash in *all* software hiring | `opened primary` (LinkedIn, Stanford); others v2-02 |
| Post-2021 over-hiring | Tech Majors' hiring +63% vs 2019 at the 2022 peak; startups +71% (SignalFire) | Mechanical unwind of a bubble shrinks the narrow 22–25 entry band | Why the base looks so bad vs 2022 | `opened primary` |
| Section 174 (R&E amortization, tax years from 2022; reversed for domestic R&E by 174A, Pub. L. 119-21, 4 Jul 2025, for tax years after 31 Dec 2024) | Bit from 2023 filings; reversal coincides with the US postings low (May 2025) and rebound | **No empirical study found.** Statute: domestic R&E (incl. "any software") deductible again; **foreign R&E still 15-year amortization**; optional ≥60-month amortization. Test: Germany/France have no 174 and their software postings are still falling (see 1f) | Possibly part of US small-firm caution 2023–24; cannot be sized | statute `opened primary` ([LII 174A](https://www.law.cornell.edu/uscode/text/26/174A)); commentary [Pragmatic Engineer, 17 Jul 2025](https://blog.pragmaticengineer.com/the-pulse-section-174-is-reversed-mostly-that-is/) `opened primary` (author says 174 was "likely not the main cause") |
| Offshoring | India GCC headcount ~1.9M (FY24) → **~2.36M (FY26)**, 2,117 GCCs | Raymond & Dillon: no AI-driven shift to India. 174A keeps foreign R&E at 15 years (a US-hiring tilt from 2025) | Cannot be tied to US junior roles specifically | GCC: [YourStory, May 2026](https://yourstory.com/enterprise-story/2026/05/gccs-number-touch-2117-in-india-revenue-just-short-of-100-billion) `via secondary` (Nasscom–Zinnov report not opened) |
| Remote work | Post-2020 | NY Fed: ~64% of rise in young-grad unemployment 2017–19 → 2022–24, all fields (v2-02) | Weaker on-the-job learning and fewer junior seats in remote teams | v2-02 `opened primary` |
| Graduate supply glut | CS bachelor's output record **41,858** (+13%, CRA, 2026); LinkedIn projects record CS grads | More applicants per seat; CS+IT share of bachelor's degree records at selected US schools (Revelio profiles) 12.2% (2022 peak) → 7.9% now; with NSC/CRA intake falls, supply should ease ~2028+ (inference) | Part of the unemployment gap | v2-02; Revelio `opened primary` |
| AI (exposure/anticipation) | Experience requirements up from early 2023 (Indeed); exposed-junior gap significant from 2024 (Stanford FE) | Revelio: postings gap −29% to −40%, junior-concentrated; Copilot causal 10–51% at large firms | Why juniors did not recover when seniors did (2025–26) | above |

**Analyst reading (inference):** rates and over-hiring explain the *fall*; AI best explains the *composition of the recovery*. US software postings rose ~23% y/y to Nov 2026 (v2-02), but 71% of the increase was senior, entry postings stayed ~4.5%, and young developers' payroll index is flat. A tax story (174) is US-only and cannot explain why Germany and France look worse.

### 1f. Cross-country test: Indeed software-development postings (Feb 2020 = 100) — NEW

`opened primary (data)`: [Indeed Hiring Lab job_postings_tracker (CC BY 4.0)](https://github.com/hiring-lab/job_postings_tracker), sector files, "total postings", data to 13 Nov 2026, computed 2026-11-26.

| Country | Peak (date) | Post-peak low (date) | 13 Nov 2026 | vs Feb 2020 | y/y | Share of peak→low fall done by 30 Nov 2022 |
|---|---|---|---|---|---|---|
| US (re-computed; matches FRED in v2-02) | 233.8 (28 Feb 2022) | 61.1 (17 May 2025) | 81.7 | −18% | **+23.4%** | 53% |
| UK | 181.6 (8 Apr 2022) | 53.4 (1 Apr 2025) | 60.6 | −39% | +1.0% | 38% |
| Canada | 229.3 (23 May 2022) | 68.1 (16 Mar 2024) | 76.3 | −24% | −6.0% | 52% |
| Germany | 168.8 (21 May 2022) | 46.7 (13 Oct 2026) | 48.1 | **−52%** | **−16.4%** | 16% |
| France | 141.0 (14 Jul 2022) | 49.9 (4 Jul 2026) | 51.3 | −49% | −7.1% | 9% |
| Australia | 273.5 (1 Apr 2022) | 99.4 (2 Nov 2026) | 101.5 | +1.5% | −11.8% | 38% |

- *Derived:* peak-to-low falls of 64–74% in every country. The US is the only one rebounding: the UK is flat y/y (+1%), Germany, France and Australia hit their post-peak lows in Jul–Nov 2026 and are down 7–16% y/y; Canada −6% y/y. Germany and France (no Section 174; smaller AI-lab and AI-capex presence) are about half their Feb 2020 level.
- Timing differs too: in the US and Canada about half the fall had happened before ChatGPT; in Germany and France under a fifth, i.e. the European slide is mostly a 2023–26 event (cause not identified: weak European economy, rates, AI or all three).
- Can show: the software-postings crash was international, so US-only causes (Section 174) cannot be the main driver; the US 2025–26 rebound is unusual. Cannot show: seniority (open data have no seniority split); postings are not hires; Indeed's market share differs by country.

---

## 2. The mechanism: which junior tasks AI now does, and the apprenticeship problem

### 2a. Task-level evidence

- **What juniors used to do (claim, not measured):** SignalFire 2026 says new SWE grads used to spend their first 12–18 months on boilerplate, unit tests and routine debugging under a mentor, and that Tech Majors have automated exactly those tasks (para.). `opened primary`. Treat as a hypothesis the next items test.
- **Anthropic Economic Index, software (28 Apr 2025) — interested party:** 500,000 coding conversations. Claude Code **79% automation / 21% augmentation**; Claude.ai 49% automation. "Directive" (full delegation) 43.8% on Claude Code vs 27.5%; "Feedback loop" 35.8% vs 21.3%. JavaScript/TypeScript 31% and HTML/CSS 28% of queries; UI/UX components 12% and web/mobile app dev 8% of tasks; startups 32.9% of Claude Code use vs enterprise 23.8%. [Anthropic](https://www.anthropic.com/research/impact-software-development) — `opened primary`. Limits: early adopters, no Enterprise/API data, no quality measure.
- **Anthropic Economic Index "Cadences" (26 Jun 2026) — interested party:** early-career workers report AI can do the highest share of their work; respondents with 15+ years put it ~10 points lower than first-year workers; **over one third** put the probability that a junior colleague loses their job within a year **above 60%**; experienced workers more often cite judgment, context and relationships as what AI cannot do (para.). Claude Code sessions more autonomous than chat (median Claude Code blog-post session: a single human prompt vs 13 rounds in chat). [Anthropic](https://www.anthropic.com/research/economic-index-june-2026-report) — `opened primary` (read through a fetch summary; re-read before quoting on a slide). Survey of Claude users: self-selected.
- **Automation vs augmentation predicts the employment pattern:** Stanford dashboard: occupations with higher Anthropic *automation* ratios show declines among early-career workers; *augmentation* shows no clear link (above). This is the only place the two datasets are joined.
- **Productivity gains are largest for juniors (the paradox):** Cui, Demirer, Jaffe, Musolff, Peng & Salz: three company-run RCTs (Microsoft, Accenture, a Fortune 100 firm), 4,867 developers, Copilot access → **+26.08%** completed tasks (SE 10.3%); gains concentrated among recent hires/junior staff (**27–39%** vs **8–13%** for seniors, per MIT Sloan summary). Supplementary file under a *Management Science* DOI. [MIT draft PDF](https://economics.mit.edu/sites/default/files/inline-files/draft_copilot_experiments.pdf) — `via secondary` (search summaries; paper not opened this session). 2023–24 tools.
- **METR (24 Feb 2026):** early-2025 RCT: AI made experienced open-source developers **19% slower** (CI +2% to +39%). The Aug 2025–early 2026 follow-up (57 developers; pay cut $150→$50/h) became unreliable because developers refused to work without AI: 30–50% withheld tasks they did not want to do without AI. Raw estimates: returning developers −18% time (CI −38% to +9%), new −4% (CI −15% to +9%); METR believes speed-ups are now likely larger than early 2025 but its data are "only very weak evidence" of size. ~4% of GitHub commits authored by Claude Code (cited by METR). [METR](https://metr.org/blog/2026-02-24-uplift-update/) — `opened primary`.
- **Revelio:** 90% of year-over-year change in work activities happens *within* occupations, 10% from occupation mix (Sep 2026). Titles stay; the work inside them changes. `opened primary`.
- **Inference (the mechanism in one line):** AI raised junior output most, but juniors were never hired for output; they were hired as a bet on future seniors. When execution gets cheap, the binding constraint becomes senior review time and trust, which juniors consume. So the measured effect lands on *hiring juniors*, not on *firing* anyone.

### 2b. The apprenticeship problem (who trains future seniors?)

**Evidence**
- **Anthropic skills RCT (29 Jan 2026; Shen & Tamkin) — interested party:** 52 mostly junior engineers learning an unfamiliar Python library (Trio). Quiz without AI afterwards: AI group **50%** vs hand-coding **67%** (Cohen's d 0.738, p = 0.01); speed gain ~2 minutes, not significant. Largest gap on **debugging** questions. Patterns: delegation 39%, progressive reliance 35%, iterative AI debugging 24% vs generate-then-comprehend 86%, hybrid explanation 68%, conceptual questions 65% (tiny subgroups, n = 2–7). Authors expect stronger effects with agentic tools. [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills) — `opened primary`. Note: "17% lower" in coverage is 17 *percentage points* (≈25% relative).
- **Anthropic internal study (2 Dec 2025; 132 surveyed engineers, 53 interviews, 200k Claude Code transcripts) — interested party:** Claude is now "the first stop for questions that used to go to colleagues"; one employee says 80–90% of their questions go to Claude; a senior engineer: more junior people "don't come to me with questions as often", though juniors "learn faster" (para. of the second part). Engineers fully delegate 0–20% of work, mostly easily verifiable or boring tasks. [Anthropic](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic) — `opened primary`. Not anonymous; one firm.
- **Anthropic Oct 2026:** human attention is the bottleneck for agent output; reading all agent output would take non-technical staff half their week; employees shift to "meta-work" (para.). Same link as 1b.
- **ADP (16 Nov 2026):** frames entry-level work as how judgment and critical thinking are built; warns time saved on a task is not the same as the learning the task gave (para.). `opened primary`.
- **SignalFire 2026:** calls the loss of the new-grad pipeline a "succession vacuum" 5–10 years out and recommends "AI apprenticeship programs" (para.). `opened primary`.
- **Operational fix seen in the wild:** Shopify's internal agent "River" answers only in public Slack channels so juniors can watch seniors work with it; **~5,938** staff in **4,450** channels in a month; PR merge rate 36% → 77% in two months, mostly from people documenting what it should know (Shopify claims). [Shopify internships page](https://internships.shopify.com/pages/zero-experience-infinite-leverage) — `opened primary` (undated on page; v3-01 dates it 1 Jun 2026). Matt Beane (UCSB) "SkillBench": map tasks on AI-uplift vs skill-development axes and protect high-learning tasks from automation (para.), via [IBM Think, 2 Mar 2026](https://www.ibm.com/think/news/entry-level-roles-get-reset-ai) — `opened primary`.

**Dated quotes (short; full set in 01_voices.md)**
- Matt Garman, AWS CEO, ~Aug 2025 (Matthew Berman podcast), on leaders planning to replace all juniors with AI: "That's the dumbest thing I've ever heard." His reasons (para.): juniors are the cheapest staff, the most fluent with AI tools, and without them no one has learned anything in ten years. Transcription: [Simon Willison, 21 Aug 2025](https://simonwillison.net/2025/Aug/21/matt-garman/) — `via secondary`. Restated in a later Wired interview: "At some point that whole thing explodes on itself" — [Fortune, page dated 28 Jun 2026](https://fortune.com/2025/12/16/aws-ceo-matt-garman-ai-displacing-junior-employees-dumbest-idea-amazon-layoffs/) — `via secondary`.
- Nickle LaMoreaux, IBM CHRO, Feb 2026 (Charter AI summit): "There's no pipeline; the well simply dries up." [IBM Think](https://www.ibm.com/think/news/entry-level-roles-get-reset-ai) — `opened primary` (IBM's own outlet quoting her).
- Kent Beck, 12 Dec 2025: "manage juniors for learning, not production." His model (para.): AI shortens the junior "valley of regret"; at 20% attrition a 24-month ramp loses ~36% of juniors before break-even vs ~15% for a 9-month ramp (his arithmetic). [Substack](https://tidyfirst.substack.com/p/the-bet-on-juniors-just-got-better) — `opened primary`.
- Anthropic hiring, Oct 2026 (anonymous staff, on performance-engineer uplift): it "basically overnight changed what we were looking for". `opened primary` (1b link).
- Counter-voice, Dario Amodei, 28 May 2025 (Axios): AI could wipe out half of entry-level white-collar jobs and push unemployment to 10–20% in one to five years (para.). [Axios](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic) — `opened primary`. A forecast; check against the ADP/NY Fed data above (not borne out at the aggregate level so far).
- Charity Majors (Honeycomb), Jun 2024 (*historical*): stopping junior hiring because of AI is a grave mistake that cannibalises the future (para.), [charity.wtf](https://charity.wtf/p/generative-ai-is-not-going-to-build-your-engineering-team-for-you) — `via secondary` (search summary only).

**Implications**
- For a student: the scarce thing is not access to answers but supervised practice on real systems. Choose the first job by how much review and production exposure it gives, not by brand.
- For a junior already employed: the measured risk is fewer *next* jobs; spend the seat on debugging, production incidents and reading others' code, the exact skills the RCT shows delegation erodes.
- For employers (and the talk's ethical point): every firm that stops hiring juniors free-rides on firms that still train them. The data so far show firms buying experience externally (Revelio senior +32% at adopters), which only works while someone else trains.

---

## 3. The hiring-signal shift

### 3a. Volume and noise
- **Ashby (ATS vendor), 7 May 2026:** 100M+ applications, 200k+ jobs, 2021–Mar 2026: applications per hire **~tripled since 2021**; open roles average **>300** applications; candidates ~**50% less likely** to reach interview than five years ago; offer conversion above 2021; hires per recruiter ~7 per quarter. Via [HR Dive, 13 May 2026](https://www.hrdive.com/news/recruiters-see-job-applications-triple-to-more-than-300-per-role/820096/) — `via secondary`. Ashby Recruiting Ops report (54M applications, 93k jobs): referred candidates pass initial screens **52% vs 35% overall**; senior roles take 37% longer to fill than junior; technical roles ~15 days longer than business. [Ashby](https://www.ashbyhq.com/talent-trends-report/reports/recruiting-operations-benchmarks-talent-trends?view=full) — `opened primary`. "291 applications per hire in Q1 2026" and "referral offer rate 7.3% vs 0.2% inbound" circulate on aggregator sites — **not verified**, do not use.
- **Greenhouse (ATS vendor), 19 Nov 2026:** survey of 1,347 recruiters/hiring managers (568 US), 24 Sep–12 Oct 2026: **90%** of US employers believe they turned away real candidates whose applications seemed fake or AI-generated; **81%** saw applicants game screening (49% claiming skills they lack; 28% hidden text aimed at AI screeners); **86%** changed their process, of whom **57%** added another human interview; average 62 days to fill; **97%** of applications never reach a conversation; 52% use AI interviews; US candidates: only 7% would refuse one. [Greenhouse](https://www.greenhouse.com/newsroom/nine-in-ten-employers-believe-theyve-turned-away-real-candidates-as-ai-floods-job-applications) — `opened primary`. Stake: sells AI-interview product.
- **Handshake:** 23 applications per full-time job (class of 2026) vs 11 (class of 2023) — `via secondary` (1c).
- **LinkedIn monthly insights, Apr 2026:** US applications per applicant **−24% y/y**; postings per applicant −2%; LinkedIn reads this as competition "stabilizing". Remote roles: 9% of paid postings drew 37% of applications (Mar 2026). [PDF](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/us-monthly-insights-april-2026.pdf) — `opened primary`. The 2025 figure of 11,000 applications per minute (+45%) is from a June 2025 NYT story — `via secondary` (NYT not opened).
- **Wellfound (startup board, ~6M SWE profiles), via Pragmatic Engineer, 4 Nov 2025:** applicants per job peaked Jan 2025 and are down 10% since, but still **6x vs 2021 for remote** and 5x for in-person; remote share of engineering jobs 35% (56% in 2022); profiles with elite schools/employers get **20–50x** more recruiter reach-outs. [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/tech-jobs-market-2025-part-3) — `via secondary` (free section).
- **Revelio, Sep 2026:** postings per external hire have risen for six years, a pre-ChatGPT trend; Revelio suggests AI may worsen it by making applications more polished and weakening signals (para.); automated-screening complaints now exceed slow-process complaints in no-offer interview reviews. `opened primary`.
- Hiring-manager testimony (Apr 2025): head of engineering at a remote startup describes ~700 CVs, AI-generated cover letters, take-home authors who could not find a button in their own two-file code; "any hire is essentially a coin toss". [Pragmatic Engineer, 15 Apr 2025](https://newsletter.pragmaticengineer.com/p/tech-hiring-inflection-point) — `opened primary` (free preview; author is an investor in that startup).

### 3b. Cheating and fraud
- **Gartner (31 Jul 2025):** survey of 3,000 candidates (2Q25): **6%** admitted interview fraud (impersonation); forecast: by 2028 **1 in 4** candidate profiles worldwide fake; 4 in 10 candidates use AI in applications; 62% more likely to apply if in-person interviews are required. Via [HR Dive, 8 Aug 2025](https://www.hrdive.com/news/fake-job-candidates-ai/757126/) — `via secondary`; Gartner press release `could not open` (HTTP 403).
- **Fabric (AI-interview vendor):** 19,368 AI-run interviews Jul 2025–Jan 2026: **38.5%** flagged for AI-cheating behaviour; **48%** in technical roles vs 12% sales. `via secondary` (aggregators; vendor sells detection; not opened). Karat "2% → 10% flagged": `via secondary`, undated, **unverified**.
- Tools named in coverage: Interview Coder, Cluely (off-screen assistants). No primary usage data found.

### 3c. Employer responses
- **Back to in-person:** Sundar Pichai, Lex Fridman podcast (5 Jun 2025, ~01:36:24): Google will introduce "at least one round of in-person interviews". [transcript](https://lexfridman.com/sundar-pichai-transcript/) — `opened primary`. Google, Cisco and McKinsey restored face-to-face rounds; a Dallas recruiter's in-person requests rose from 5% to 30% of clients' requests (WSJ via [Axios, 12 Aug 2025](https://www.axios.com/2025/08/12/in-person-job-interview-artificial-intelligence)) — `via secondary` (WSJ `could not open`). Amazon candidate AI-acknowledgement: `via secondary` only.
- **Opposite response: AI required in the interview.** Canva (11 Jun 2025): expects backend, ML and frontend candidates to use Copilot/Cursor/Claude; found AI "can trivially solve traditional coding interview questions"; replaced CS-fundamentals round with harder, ambiguous problems and code-reading. [Canva Engineering](https://canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews) — `opened primary`. Meta piloting "AI-enabled" coding rounds (reported Jul 2025 by 404 Media, confirmed to Business Insider) — `via secondary`; scope in 2026 unclear.
- **Work trials:** Fortune/Morning Brew (15 Sep 2026): trials from unpaid mock tasks to a week on-site; if the work benefits the firm the candidate generally must be paid; ~two-thirds of employers use skills-based hiring for entry roles (NACE 2025, via the article). [Fortune](https://fortune.com/2026/09/15/why-are-more-companies-doing-unpaid-work-trial-as-part-of-interview-process/) — `opened primary` (article), NACE figure `via secondary`. Linear's paid 2–5-day trials: `via secondary`.
- **Referrals and proof of work:** Ashby (52% vs 35% screen pass for referrals) above. SignalFire 2026 advice to new grads (para.): "proof of work" before permission: shipped apps, open-source contributions, documented customer discovery. Fortune: two-thirds skills-based hiring for entry roles.
- **Implication for this audience (inference):** each response raises the value of presence, network and verifiable artefacts and lowers the value of a polished CV. For candidates outside the US/EU (including Iran), in-person rounds and the 6x remote-applicant crowding are a structural disadvantage; public, inspectable work (repos, PRs to known projects, write-ups) is the cheapest substitute for a referral. Sanctions already block most US employers; 174A's 15-year amortization of *foreign* R&E adds a tax tilt against offshore contractors from 2025.

---

## 4. Counter-evidence: firms hiring more juniors, and who gets hired

### 4a. Firms going the other way (announcements; outcomes mostly unverified)
- **Cloudflare (22 Sep 2025):** goal to hire **up to 1,111 interns in 2026** (prior program ~60, per press); rationale: AI tools multiply new hires rather than replace them; interns tasked with finding AI uses. [Cloudflare blog](https://blog.cloudflare.com/cloudflare-1111-intern-program/) — `opened primary`. **Outcome not found.** SignalFire 2026 lists Cloudflare among firms with 2026 layoffs.
- **Shopify:** ~1,000 engineering interns in 2025 (vs 25 into such roles in 2024) and another ~1,000 expected in 2026, citing Thawar on Pragmatic Engineer — [The Logic, 21 May 2026](https://thelogic.co/news/exclusive/shopify-dev-degree-cuts-tech-internships/) `via secondary`; same story: Shopify ended one Dev Degree university stream and laid off two coordinators. Shopify's own page: "We are taking the opposite bet" — `opened primary`.
- **IBM:** plans to **triple US entry-level hiring in 2026** (no numbers disclosed), rewriting entry jobs toward client work and AI oversight; entry-level developers work with clients earlier (para.). [IBM Think, 2 Mar 2026](https://www.ibm.com/think/news/entry-level-roles-get-reset-ai) — `opened primary`. Same page: Teneo survey, **67% of global CEOs** say AI is *increasing* entry-level headcount (self-report, not opened); McKinsey +12% North American hiring in 2026.
- **Amazon:** Garman (Platformer, Jun 2026) says Amazon plans **11,000 interns and recent graduates in 2026** and has more developers than two years ago; Amazon also announced ~14,000 corporate cuts in Oct 2025. [Fortune](https://fortune.com/2025/12/16/aws-ceo-matt-garman-ai-displacing-junior-employees-dumbest-idea-amazon-layoffs/) — `via secondary`.
- **GitHub:** Dohmke (Pragmatic Engineer podcast, ~Jun 2025): junior developers bring fresh ideas; GitHub runs internship cohorts leading to full-time offers (para.). [ITPro, 1 Jul 2025](https://www.itpro.com/software/development/github-ceo-thomas-dohmke-junior-developers-generative-ai) — `via secondary`. He announced his departure on 11 Aug 2025 (TechCrunch/Axios) — `via secondary`.
- **The other side, for balance:** Salesforce: no new engineers hired in FY2026; Benioff (Mar 2026): "not hiring more engineers in fiscal year 26" because of coding agents; engineering ~15,000 and flat for ~two years; growth only in sales (May 2026 earnings call). [People Matters, 24 Mar 2026](https://www.peoplematters.in/news/recruiting-and-onboarding/is-ai-replacing-engineers-salesforce-says-it-no-longer-needs-to-hire-them-48917), [Fortune, 28 May 2026](https://fortune.com/2026/05/28/ai-slashes-white-collar-jobs-salesforce-ceo-marc-benioff-one-department-still-hiring-sales/) — `via secondary`. A "1,000 new grads at Salesforce" claim appears only on an aggregator — unverified.
- *Inference:* the pro-junior firms share three traits: they sell AI or infrastructure (so AI-native juniors are product feedback), they redefine the junior job (agent operator, client-facing), and they invest in visible mentoring. These are bets, not yet outcome data.

### 4b. Data pointing to stabilisation
- NACE +5.6% planned new-grad hiring (class of 2026), largest firms +8.7% — `opened primary`.
- NACE intern conversion **63.1%** for 2024–25 interns (5-year high; +~13% vs prior year); acceptance 88.3% (284 organisations, Oct 2025–Jan 2026). [NACE, 3 Apr 2026](https://naceweb.org/talent-acquisition/internships/intern-conversion-rate-hits-highest-mark-in-five-years) — `opened primary`. Caveat: rate among those who already got internships.
- Indeed internship postings early 2026 back to 2024 levels — `opened primary`.
- ADP software-developer 22–25 index flat y/y (Oct 2026) — `opened primary (data)`.
- Revelio: junior headcount at AI-adopting firms still grows faster than at non-adopters (+6% relative) — `opened primary`. Revelio postings gap narrowed −40% → −29% in two months (noisy).
- US software postings +23% y/y (v2-02); Citadel Securities: software-engineering postings +11% y/y (cited by IBM and Fortune; Citadel original not opened) — `via secondary`.
- Baird et al.: Copilot adoption associated with more entry-level engineer hiring (v2-02, `via secondary`).

### 4c. What juniors who do get hired have in common (all correlational)
- **Internship, paid:** NACE: 55% of paid interns who applied got an offer; higher salary ($69.5k vs $61.7k). Conversion 63.1%.
- **Referral:** Ashby: 52% vs 35% pass the first screen.
- **Pedigree and location:** Wellfound: 20–50x more reach-outs for elite school/employer profiles; in-person metro candidates favoured. SignalFire tracks top-20-school grads; even they are 45% less likely to reach a Tech Major.
- **Adjacent first jobs and non-tech employers:** LinkedIn: 55% of CS grads start outside SWE (data analyst, IT analyst, financial analyst); Professional Services' share of SWE postings rising.
- **AI-titled or founding roles:** Gusto: new-grad "AI Engineer" >5x, "Founding Engineer" +390%; SignalFire: 2x more founders among top grads; LinkedIn: AI Engineer share of hires 14x 2019. (v2-07: only ~3.7% of AI-engineer ads are entry-level, so this is a narrow door.)
- **Skills on profiles of hires:** Python, AWS, SQL, JavaScript, React (LinkedIn).
- **Traits hiring managers say they now screen for:** autonomy and judgment over implementation (Anthropic, Oct 2026); reading/improving AI code and handling ambiguity (Canva); learning agility (IBM).
- *Inference:* the hired junior looks like a low-risk mid-level bet: verified by an internship or referral, already productive with AI, and able to own something end to end.

---

## 5. Forward indicators: is the junior market recovering or worsening?

| # | Indicator | Latest value | Recovery looks like | Worsening looks like | Where (free) | Cadence |
|---|---|---|---|---|---|---|
| 1 | ADP/Stanford software-developer index, ages 22–25 (Nov 2022 = 100) | 83.2 (Oct 2026), flat y/y | Sustained y/y gains; gap to 41–49 (37.6 pts) narrowing | New low below 78.8; 26–30 and 31–34 bands keep falling | [Canaries dashboard](https://digitaleconomy.stanford.edu/project/indicators/canaries-dashboard/) | Monthly |
| 2 | Indeed US software postings index | 81.7 (13 Nov 2026), +23% y/y | Rises toward 100 *and* entry share rises above ~5% | Rebound stalls; senior share of growth stays ~70% | [FRED IHLIDXUSTPSOFTDEVE](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE); seniority via [Hiring Lab](https://www.hiringlab.org) articles | Daily/weekly; articles ad hoc |
| 3 | NY Fed CS / CE unemployment, recent grads | 7.0% / 7.8% (2024 data) | 2025 data (Feb 2027) back toward the all-major rate (4.2%) | Rises again while all-major is flat | [NY Fed](https://www.newyorkfed.org/research/college-labor-market) (CSV behind the table) | By-major annual (Feb); rates quarterly |
| 4 | Recent-grad minus all-worker unemployment gap | +1.3 pts (Sep 2026) | Back to ~+0.5 (2022) | >+1.7 (Sep 2025 level) | same | Quarterly (Feb/May/Aug/Nov) |
| 5 | Indeed internship postings | 2026 ≈ 2024 levels | Above 2024 into the 2027 recruiting season | Back to 2025's multi-year low | Hiring Lab articles; [GitHub data](https://github.com/hiring-lab/job_postings_tracker) has no intern split | Ad hoc |
| 6 | Revelio junior vs senior posting gap in AI-exposed jobs | −29% (Aug 2026), from −40% | Narrowing toward 0 | Re-widening | [Revelio tracker](https://www.reveliolabs.com/ai-labor-market-tracker/us/september-2026) | Monthly |
| 7 | LinkedIn entry-level SWE hiring rate vs overall SWE | Entry did not rebound end-2025 | Entry line rejoins overall | Divergence widens | [LinkedIn Economic Graph](https://economicgraph.linkedin.com) monthly insights / research notes | Monthly / ad hoc |
| 8 | Applications per job / per hire | Handshake 23; Ashby >300; LinkedIn apps per applicant −24% y/y | Falling apps per job with stable postings | Rising again | Handshake Network Trends; Ashby Talent Trends; LinkedIn monthly | Quarterly / ad hoc |
| 9 | NACE projected new-grad hiring | +5.6% (class of 2026) | Fall 2026 survey for class of 2027 positive | Negative median | [NACE press](https://naceweb.org) | Nov and Apr |
| 10 | Europe/Canada/Australia vs US software postings | DE −16% y/y, FR −7%, AU −12%, CA −6%, UK +1%, US +23% | Europe turns positive (global, not US-specific, recovery) | US rebound fades to match Europe | Indeed GitHub | Weekly |
| 11 | Company programs | Amazon 11k, IBM 3x, Cloudflare 1,111 goal, Shopify ~1k; Salesforce 0 engineers FY26 | Follow-through disclosed; more firms copy | Programs quietly cut (watch Shopify Dev Degree-type cuts) | Earnings calls, company blogs | Quarterly |
| 12 | CS enrolment (supply) | US 4-year CS −12.4% (prelim. fall 2026); CRA new majors −13% | Lower competition per seat for 2029–30 grads | — | [NSC](https://nscresearchcenter.org) (final Jan 2027), CRA Taulbee (spring) | Annual |
| 13 | Agent-era causal studies | Raymond & Dillon data end Jun 2025 | New designs show junior effect fading | Effects spread to experienced hiring (watch external experienced hires, −13% already) | arXiv / NBER / Census CES | Ad hoc |

- **Leading vs lagging (inference):** postings (2, 6, 10) lead by months; payroll by age (1) is coincident; graduate unemployment by major (3) lags by up to two years. A real junior recovery should show up first as entry share of postings and intern postings, then the ADP 22–25 index, last the NY Fed by-major table.
- **Single best tell (inference):** whether the ADP 26–30 and 31–34 bands keep falling. If they do, substitution is moving up the ladder (the "senior pipeline" problem arriving); if they stabilise while 22–25 rises, the 2023–25 shock was a cohort-specific freeze.

---

## Pages that blocked me or could not be read
- Gartner newsroom (HTTP 403); WSJ in-person-interview story (not attempted, paywall; used Axios); NYT LinkedIn-applications story (not opened).
- Handshake Class of 2026 PDF: binary, unreadable through fetch tools.
- LinkedIn SWE PDF: WebFetch returned binary; opened through a second fetch tool (text extract).
- NY Fed by-major table: JS widget; read the underlying CSV instead (and archived CSV versions).
- Burning Glass report body (landing page only). HR Brew Microsoft early-career article (blank page). 404 Media (Meta AI interviews) not opened.
- Cui et al. paper body not opened this session (search summaries + MIT Sloan description only).
- Indeed GitHub raw files download slowly (throttled); needed resumed downloads, all six countries computed.

## Gaps
1. **No agent-era causal study of junior software hiring.** The best design (Raymond & Dillon) ends June 2025 and covers autocomplete tools; its headline IV estimates are not significant at 95%.
2. **No decomposition** of the junior drop across rates, over-hiring, Section 174, remote work, offshoring and AI in one framework; shares from different studies cannot be added.
3. **Section 174:** no empirical estimate of its hiring effect, before or after the July 2025 reversal.
4. **Seniority split of postings outside the US** is not public (Indeed open data have none), so the Europe comparison cannot say whether European juniors fared worse.
5. **NY Fed by-major data stop at 2024**; the class of 2025 is unmeasured until Feb 2027. Small ACS cells make CE especially noisy.
6. **Company pledges unverified:** no public count of Cloudflare's 2026 interns, IBM's tripling, or Amazon's 11,000.
7. **Interview cheating prevalence** rests on vendor data (Fabric, Karat) with commercial stakes; no independent measure.
8. **Ashby/Greenhouse/Handshake** are platform-specific and not split by occupation; no clean applications-per-job series for junior software roles.
9. **Who gets hired**: no study links junior hiring outcomes to portfolios, open-source work or AI fluency; all evidence is correlational or employer self-report.
10. **Apprenticeship effects** measured only short-term (one-session RCT, n = 52); no longitudinal study of whether AI-trained juniors become weaker or stronger seniors.
11. **Non-US juniors:** nothing comparable for India, Europe by seniority, or Iran (see v2-02 Q7 for Iran's war/internet shocks).
12. **SignalFire 2025 vs 2026** use different firm sets; no consistent multi-year elite-firm series.
