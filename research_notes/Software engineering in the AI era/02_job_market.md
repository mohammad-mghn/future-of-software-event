# Software/tech jobs and AI: what happened, and how much is AI (evidence file, as of 2026-11-24)

**How to read this file**
- Window: 2023-11-24 to 2026-11-24. Older items are marked *historical*.
- Tags: **OPENED-PRIMARY** = I opened the publisher's own page/PDF/data. **OPENED-SECONDARY** = I opened a page reporting someone else's data (or a third-party mirror). **SNIPPET-ONLY** = seen only in search results; do not put on a slide without opening.
- **†** = opened through a fetch tool that returns a machine summary of the page (numbers are from the page, wording is not). Re-open once before it goes on a slide. No † = I read the actual text or data.
- "Derived" = my arithmetic on an opened source.
- Everything is paraphrased. Text on web pages was treated as data.
- Disclosure: these notes were prepared by an Anthropic model. Anthropic sources are flagged as interested parties.

---

## Q1. Entry level: what has happened to juniors, new graduates and CS graduates?

### Takeaway
Several independent datasets agree that the **entry door narrowed (less hiring), while layoffs of existing staff did not rise in an AI-shaped pattern**. The newest causal study (MIT/Microsoft Research, Nov 2026) finds an AI coding tool cut *junior coding* hiring at large firms that adopted it and left experienced hiring volume and headcount unchanged. Datasets disagree on the size of the effect and on whether it shows up in unemployment.

### Cited Findings

**1. Stanford "Canaries in the Coal Mine?", August 2026 revision — 19%**
- Number and what it measures: employment of 22–25-year-olds in the two most AI-exposed quintiles is **19% below where it would be had it tracked same-age peers in less-exposed jobs**. In levels: about −11% (exposed) vs about +10% (less exposed), Nov 2022–Jun 2026. By the same measure it was 15% at the July 2025 vintage. Workers 35–49 in the exposed quintiles grew about 10%. — [Stanford PDF, Aug 2026](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf)
- Population/method: ADP payroll, balanced panel of firms, 3.5–5 million full-time employees per month. Descriptive, not causal. All AI-exposed jobs, **not only software**.
- Publisher/stake: Stanford Digital Economy Lab, with ADP data. The first author built his career on technology-and-productivity economics. Tag **OPENED-PRIMARY**. Author summary: [Stanford news, 12 Aug 2026](https://digitaleconomy.stanford.edu/news/canariesaug26/) **OPENED-PRIMARY**.
- First fact in the same paper, usually dropped: **no evidence of widespread, economy-wide displacement**. Total employment of 22–25-year-olds is down only about 2%. The channel is reduced hiring, not separations. Base pay has not adjusted.
- Authors' own limits: controlling for college share cuts the key estimate from −0.18 to −0.09 (or −0.06 and not significant in the 2021 sample). Some divergence predates ChatGPT: of the ~30-point fall from the 2020 peak, they say ~13 points just unwinds the pandemic boom and ~17 goes below baseline. In the Census ACS the same gap is only −0.022, with a confidence interval including zero. The ADP sample over-represents AI-exposed jobs and larger firms. — [same PDF, Sections 4–5, App. H](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf) **OPENED-PRIMARY**
- Common misquotes: (a) "AI cut junior jobs by 19%": it is a relative gap, not a causal loss. (b) "20% fall for young developers" quoted as current: the **nearly 20%** figure is software developers aged 22–25, July 2025 vs the late-2022 peak, from the [Aug 2025 version (third-party mirror)](https://www.rivista.ai/wp-content/uploads/2025/09/1756729755699.pdf) **OPENED-SECONDARY**. I did not find that sentence in the Aug 2026 text, which shows developers only as a chart. (c) [CNBC, 11 Oct 2026](https://www.cnbc.com/2026/10/11/ai-software-developer-jobs.html) **OPENED-SECONDARY†** reports the 20% both as "from 2024" and as "since generative AI". (d) Quoting 13% or 16%: superseded versions with a different model.
- URL trap: the old "Nov 2025" PDF link now serves the Aug 2026 file byte-for-byte (checked).
- Strongest counter-evidence: Q2 below.

**2. MIT / Microsoft Research (Raymond & Dillon), "AI-Assisted Programming and Labor Demand", 6 Nov 2026 — the best causal evidence found**
- Numbers: adopting GitHub Copilot **reduced quarterly technical hiring by 29% after one year** among firms pushed to adopt earlier by contract-renewal timing. **Junior software-engineer hiring fell about 40%**. Hiring volume of experienced engineers and of systems/infrastructure engineers did not change. **No effect on separations or on total technical headcount.** New hires into experienced roles had ~1.3 more years of potential experience, and *external* hires into experienced software roles fell ~13% (internal fills unchanged), so "seniors unaffected" is too strong. No evidence of a shift of hiring to India. — [arXiv 2611.31083](https://arxiv.org/html/2611.31083) **OPENED-PRIMARY**
- Population/method: 5,414 large multinational GitHub Enterprise customers (38% of the US programming workforce); Revelio (online-profile) employment data Jan 2021–Jun 2025; natural experiment on pre-set procurement reviews.
- **Attribution (Section 6.5): of the 29% fall in technical hiring at these firms between 2022 and 2024, Copilot accounts for 10% (conservative), 19% (middle) or 51% (strongest assumption) of the fall.** The rest is rates, over-hiring correction, R&D tax treatment or other AI channels, which the design cannot separate. Authors call these illustrative benchmarks.
- Scale: 29% is roughly 55 to 39 hires per firm-quarter, under 0.2% of headcount per quarter.
- Stake: one author at Microsoft Research, and Microsoft owns GitHub. The result is not flattering to the product. Preprint, not peer-reviewed. Covers autocomplete-era tools, before agents.
- Likely misquote: "Copilot cut developer jobs by 29/40%". It is *hiring flow* at adopting large firms, not jobs.
- Counter-evidence: [Baird et al., Contemporary Economic Policy, Apr 2026 (press release)](https://www.eurekalert.org/news-releases/1124772) **OPENED-SECONDARY**: Copilot adoption *associated* with 3–5% higher monthly probability of hiring engineers, driven by entry level. LinkedIn authors (Microsoft-owned), no comparable natural experiment described. The journal page returned 403.

**3. Harvard "Seniority-Biased" (Hosseini Maasoum & Lichtinger), version 27 Oct 2025**
- 62 million workers, 285,000 US firms, 2015–2025, résumé data. After a firm posts "GenAI integrator" jobs, junior employment falls relative to non-adopters and senior employment is largely unchanged; driven by slower hiring. — [mirror of SSRN PDF](https://www.alejandrobarros.com/wp-content/uploads/2025/11/ssrn-5425555.pdf) **OPENED-SECONDARY** (abstract and introduction; SSRN itself returned 403). No 2026 version found.
- Caveat: adopters are not random, and integrator postings are a proxy. Often misquoted as "AI-adopting firms fired juniors".

**4. US Census working papers (administrative records)**
- Tucker, CES-WP-26-27, Apr 2026: early-career employment in the most AI-exposed fifth of industry-state cells **−12% over 10 quarters after ChatGPT**; hiring itself largely recovered by early 2025, partly off a smaller base. **Up to 25% of the relative decline may be monetary policy.** Some trend shifts begin around COVID. — [Census](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-27.html) **OPENED-PRIMARY†**
- Orr, Tucker & Warren, CES-WP-26-56, Sep 2026: graduates of the most AI-exposed **decile of majors**: initial employment probability **−5 percentage points**, first full-quarter earnings **−13%** (about the size of graduating into a large recession); half from shifting to lower-paying sectors; **effects fade with time but remain substantial**. — [Census](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-56.html) **OPENED-PRIMARY†**. The abstract does not name the majors; do not say "CS graduates".

**5. New York Fed, recent graduates**
- By major (released 4 Feb 2026, **2024 data**, ACS, ages 22–27, not in school): **computer science 7.0% unemployment, 19.1% underemployment, $87,000 early-career median wage**; computer engineering 7.8% / 15.8% / $90,000; all majors **4.2% / 39.4% / $58,000**. — [NY Fed](https://www.newyorkfed.org/research/college-labor-market#--:explore:outcomes-by-major) **OPENED-PRIMARY**
- Quarterly, all majors: 2026 Q3 recent-grad unemployment **5.2%** (lowest in over a year), underemployment **42.5%**. — [same page](https://www.newyorkfed.org/research/college-labor-market) **OPENED-PRIMARY**
- Misquotes: "CS has the highest unemployment" (anthropology 7.9%, computer engineering 7.8% and fine arts 7.7% are higher); quoting unemployment without the very low underemployment; treating 2024 data as 2026; comparing the 2024 CS rate with a 2026 all-grad rate.

**6. Fairlie & Wu, NBER 35796, Sep 2026 — a null**
- Recent-graduate unemployment did **not** spike in June–August 2026 versus earlier summers, nor relative to older graduates or non-degree youth, even after adding people who want a job but are not searching (adds ~2 points). — [NBER](https://www.nber.org/papers/w35796) **OPENED-PRIMARY†**. CPS cannot isolate CS majors. Not proof AI had no effect.

**7. Cleveland Fed, Economic Commentary 2026-26, dated 11.09.2026 (read as 9 Nov 2026) — points the other way**
- Since a 2015–19 baseline, unemployment rose about **1 percentage point more** in the most AI-exposed occupations than in the least (about 2 points for ages 23–30). Mainly lower **job-finding** (about 6 points lower), **not** more separations. — [Cleveland Fed](https://www.clevelandfed.org/publications/economic-commentary/2026/ec-202626-job-finding-and-unemployment-in-the-age-of-ai) **OPENED-PRIMARY†**. Descriptive CPS; no formal pre-trend test shown on the page; misses new entrants.
- Conflict to state openly: Yale, Anthropic and Fairlie–Wu see no unemployment footprint; Cleveland Fed does. Baselines and exposure groups differ.

**8. SignalFire, 22 Jun 2026**
- At 12 "Tech Majors", trailing-12-month hiring is 25% below 2019; **engineering only 11% below**; engineers are 55% of hires (46% in 2019). **New-grad hiring about −65% at Tech Majors, about −76% at early-stage startups, vs 2019.** — [SignalFire](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026) **OPENED-PRIMARY**
- Stake: venture investor with a proprietary profile database; 2019 base; elite firms only. Misquote: "junior hiring fell 65%" for the whole industry.

**9. Indeed Hiring Lab, seniority, 23 Jul 2026**
- Q1 2026: **4.5%** of US software-development postings are entry-level; **69.3%** senior (highest of any sector). — [Hiring Lab](https://www.hiringlab.org/2026/07/23/the-labor-market-is-tilting-toward-seniority/) **OPENED-PRIMARY**
- Crucial context in the same article: tech's entry share fell only **just over 1 point** since 2019; the big loss was **mid-level (−7.7 points)**. It was always small under this classifier (text algorithm on tasks; 5+ years = senior). Authors name remote work, rates and over-hiring as co-candidates.
- Contradicting lens: TrueUp tags **45.1%** of 65,351 open engineering jobs as "entry & mid-level" (Nov 2026). — [TrueUp](https://www.trueup.io/engineering/reports) **OPENED-PRIMARY**. The two definitions are incompatible; never mix them.

**10. Anthropic (Massenkoff & McCrory), 5 Mar 2026 — interested party**
- No systematic unemployment rise for exposed workers; job-finding rate of 22–25-year-olds into exposed jobs ~14% lower than 2022, **barely statistically significant**. — [Anthropic](https://www.anthropic.com/research/labor-market-impacts) **OPENED-PRIMARY†**

**11. Handshake (US student platform)**
- Class of 2026: seniors pessimistic about starting careers 46% to **62%** in two years; among pessimists 75% cite less entry hiring, 50% cite AI. AI users less pessimistic (59%) than non-users (76%), a **correlation**. Postings −2% on the year, −12% vs pre-pandemic. — [Handshake PDF](https://joinhandshake.com/themes/handshake/dist/assets/downloads/network-trends/[HNT%2026]%20Class%20of%202026.pdf) **OPENED-PRIMARY**. Earlier report: no clear trend of steeper slowdowns in more exposed roles — [Handshake](https://joinhandshake.com/themes/handshake/dist/assets/downloads/network-trends/class-of-2026-outlook.pdf) **OPENED-PRIMARY**. Stake: sells campus recruiting.

### Inferences
- The most robust cross-study regularity is **"slower hiring, not firing"**: Stanford, Harvard, Census, MIT/Microsoft and Cleveland Fed all report it.
- For juniors already employed, the risk is fewer next jobs, not a visible layoff wave.

### Gaps
- No study found isolates *software* juniors with a causal design in the **agent era** (after mid-2025).
- The Stanford monthly dashboard's software-developer series was not opened.

---

## Q2. Counter-evidence: how much can be attributed to AI at all?

### Takeaway
Nobody has a single credible percentage. Serious estimates for *one tool in large firms* run **10–51%** of a hiring fall. Other papers attribute large shares to remote work, interest rates, or education/pandemic effects. These shares come from different populations, overlap, and **must not be added up**.

### Cited Findings

**Attribution ledger (do not sum)**

| Candidate cause | Estimate | Of what | Source and tag |
|---|---|---|---|
| AI coding tool (Copilot) | 10% / 19% / 51% by assumption | Fall in technical hiring 2022–24 at 5,414 large firms | [Raymond & Dillon](https://arxiv.org/html/2611.31083) OPENED-PRIMARY |
| Remote work | 64% (back-of-envelope) | Rise in unemployment of young US graduates, 2017–19 to 2022–24, all fields | [NY Fed, 1 Jun 2026](https://libertystreeteconomics.newyorkfed.org/2026/06/remote-work-leaves-younger-workers-sidelined/) OPENED-PRIMARY |
| Monetary policy | up to 25% | Relative early-career employment decline through 2025 Q2 | [Census CES-26-27](https://www.census.gov/library/working-papers/2026/adrm/CES-WP-26-27.html) OPENED-PRIMARY† |
| Education (or the channel of AI) | halves the estimate, −0.18 to −0.09 | Stanford young-worker gap | [Canaries Aug 2026](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf) OPENED-PRIMARY |
| Pre-ChatGPT decline | nearly half (tech); 53% (software, derived) | Fall in Indeed postings from 2022 peak to 2025 | [Hiring Lab, 30 Jul 2025](https://www.hiringlab.org/2025/07/30/the-us-tech-hiring-freeze-continues/) and [FRED](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE) OPENED-PRIMARY |
| AI, occupation-level | about 3 pp/yr slower growth | US "coder" employment vs counterfactual | [Fed FEDS 2026-018](https://www.federalreserve.gov/econres/feds/files/2026018pap.pdf) OPENED-PRIMARY |
| AI, per executives | about zero net | Firm employment, last 3 years | [NBER 34836](https://www.nber.org/papers/w34836) OPENED-PRIMARY† |

**Critics of "Canaries"**
- Google economists (Iscenko & Curto Millet), published by EIG, 14 Jan 2026: postings in AI-exposed jobs **peaked Mar–Apr 2022**, 6+ months before ChatGPT, matching Fed rate hikes; a hiring freeze mechanically shrinks a narrow 22–25 band; about 38% of top-exposure workers are in rate-sensitive sectors vs under 2% of the least exposed; junior postings did not fall more than senior. — [EIG](https://agglomerations.eig.org/p/looking-for-the-ladder) **OPENED-PRIMARY**. Stake: Google sells AI. Stanford's reply: the gap kept widening after rates peaked, and AI exposure and rate exposure are negatively correlated in their data.
- NY Fed: see table; holding AI exposure constant, the young/old gap persists in remotable jobs. It also says AI may matter more going forward. Stanford reports that its result survives a remote-work control.
- Brookings (Jed Kolko), 10 Mar 2026: evidence is inconclusive and claims of harm to specific groups premature; cites Eckhardt & Goldschlag (unemployment rose *less* in exposed jobs) and Frank et al. (decline pre-dates ChatGPT). — [Brookings](https://www.brookings.edu/articles/research-on-ai-and-the-labor-market-is-still-in-the-first-inning/) **OPENED-PRIMARY**. EIG's Eckhardt & Goldschlag and Frank et al. themselves: **SNIPPET-ONLY**.

**Denmark (Humlum & Vestergaard), "Still Waters, Rapid Currents", NBER 33777, revised Mar 2026**
- Linked surveys and registers: **null effects on earnings and hours, ruling out effects above 2% two years after ChatGPT**; tasks reorganised (oversight, integration). — [NBER](https://www.nber.org/papers/w33777) **OPENED-PRIMARY†**. The decline in early-career jobs in exposed occupations (including software) is replicated in Denmark but *not* driven by firms adopting chatbots — [author PDF](https://static1.squarespace.com/static/5d35e72fcff15f0001b48fc2/t/6a022dda700a5125900234dd/1778527706156/chatbots_260313.pdf) **SNIPPET-ONLY**.
- Misquotes: "ruled out above 1%" is the 2025 version; "AI has no effect on jobs" ignores that it covers chatbots, Denmark and early years.

**Federal Reserve Board (Crane & Soto), 20 Mar 2026**
- Coder employment still grows but about **3% per year slower** than a counterfactual; about 500,000 fewer coder jobs than otherwise, which the authors explicitly do **not** interpret as AI having eliminated 500,000 jobs, and they warn against a simple causal reading. Gap widens only in mid-2024; a formal break test dates it to June 2022, before ChatGPT. — [Fed PDF](https://www.federalreserve.gov/econres/feds/files/2026018pap.pdf) **OPENED-PRIMARY**
- Misquote alert: the [St. Louis Fed FRED Blog, 20 Aug 2026](https://fredblog.stlouisfed.org/2026/08/is-ai-reducing-employment-for-software-coders/) **OPENED-PRIMARY** calls it a likely causal effect, stronger than the paper. Media versions ("50% drop", "500,000 missing programmers") go further.

**Yale Budget Lab tracker**
- Sept 15 2026 PDF (August CPS): no clear evidence of AI-related disruption; churn flat or within historical range — [PDF](https://budgetlab.yale.edu/sites/default/files/page_to_pdf/1419/publication_1419.pdf) **OPENED-PRIMARY**. The web page shows an update of **14 Oct 2026** with the same takeaways — [page](https://budgetlab.yale.edu/research/tracking-impact-ai-labor-market) **OPENED-PRIMARY**. Limit: whole-economy occupational mix; cannot see a small group such as junior developers.

**Firm surveys**
- "Firm Data on AI", NBER 34836, revised Oct 2026: nearly 9,000 executives, 7 countries; 78% of firms use AI; essentially no net employment effect in 3 years, little expected in the next 3; over 40% of firms expect job gains *and* losses that offset. — [NBER](https://www.nber.org/papers/w34836) **OPENED-PRIMARY†**. Self-report.

**Section 174 (R&D tax), rates, over-hiring, offshoring**
- Section 174: **no rigorous estimate found**. Figures in circulation (20,000 or 500,000 jobs) are one analyst's and one investor's claims — **SNIPPET-ONLY**. Canaries notes its result survives excluding tech firms, which speaks against Section 174 as the main story (OPENED-PRIMARY).
- Over-hiring: the software postings index peaked at **233.8 (28 Feb 2022)**, i.e. 2.3 times pre-pandemic — [FRED](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE) **OPENED-PRIMARY** (data downloaded).
- Offshoring: trade-press claims of growth in India centres are **SNIPPET-ONLY**; the one causal test opened (Raymond & Dillon) finds no shift to India from AI adoption.

### Inferences
- Defensible sentence: "AI is one real cause among several; for one tool in big firms the best estimate is between a tenth and a half of the hiring drop."
- Timing matters both ways: the crash began before ChatGPT (so not only AI), and the young-worker gap kept widening after rates peaked (so not only rates).

### Gaps
- No study decomposes software jobs across AI, rates, Section 174, remote work and over-hiring at once.

---

## Q3. Demand side: postings, projections, layoffs, reversals

### Takeaway
US software postings **fell 74% from peak to a May 2025 low and have since recovered by a third; they remain ~18% below Feb 2020** while all postings are above it. The recovery is mostly senior and AI-flavoured. "AI" became a top *stated* layoff reason in 2026, then nearly vanished in October.

### Cited Findings

**Indeed/FRED software postings index (US, 1 Feb 2020 = 100, SA)**
- Peak **233.8** (28 Feb 2022); **142.5** on 30 Nov 2022 (ChatGPT launch); low **61.1** (17 May 2025); **66.2** on 13 Nov 2025; **81.7** on 13 Nov 2026 (**+23% y/y**, +34% from low; derived). — [FRED](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE) **OPENED-PRIMARY**
- Same date: all US postings 106.2; IT systems 78.1; IT infrastructure/support 70.4; **data & analytics 61.8 (only +4% y/y)** — [Hiring Lab GitHub data](https://github.com/hiring-lab/job_postings_tracker) **OPENED-PRIMARY** (CSV)
- Stake/limits: one job board; history is revised; postings are not hires; ads can be reposted. FRED notes the series is Indeed copyright: credit it.
- Misquotes: starting the chart at the 2022 peak ("−65%") or at the 2025 low ("boom"); reading "since Claude Code" as causation.

**Indeed, 8 Jul 2026 and 18 Nov 2026**
- Software postings almost +15% since Feb 2025 vs −7% overall; **71% of the May 2025–May 2026 increase is senior roles, 37% from titles mentioning AI (overlapping)**; the postings–AI-exposure relation flipped from negative (2022–26) to positive (2025–26). Germany and France are exceptions to the cross-country rebound. — [8 Jul](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/) **OPENED-PRIMARY**
- 18 Nov: AI terms in 7.2% of US postings (3.6% a year earlier); little evidence of widespread job loss driven solely by AI — [18 Nov](https://hiringlab.indeed.com/2026/11/18/there-is-no-ai-jobpocalypse/) **OPENED-PRIMARY**. Stake: sells job ads.
- Misquote: "71% of software jobs are senior" (it is 71% of the *increase*).

**TrueUp** (top-tech and startup openings): 281,328 open tech jobs on 11 Nov 2026, **41.1% below peak, 72.6% above low**; 65,351 engineering jobs, +70.1% from low. — [job trend](https://www.trueup.io/job-trend), [engineering](https://www.trueup.io/engineering/reports) **OPENED-PRIMARY**. Not comparable to Indeed (TrueUp says so).

**BLS projections 2025–35 (27 Aug 2026; the 2024–34 edition is superseded)**
- Software developers **1,717,800 to 1,892,600, +10%**; with QA +10% and about 106,100 openings a year; median pay for developers $135,980. — [BLS](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) **OPENED-PRIMARY†**
- Computer programmers **110,800, −7%**; BLS names AI automating repetitive programming. — [BLS](https://www.bls.gov/ooh/computer-and-information-technology/computer-programmers.htm) **OPENED-PRIMARY†**
- Prior edition ~15.8% for developers, so growth was **revised down** — [Vocational Index](https://vocationalindex.com/signals/bls-names-ai-in-more-occupations/) **SNIPPET-ONLY**.
- Caveat: projections assume a trend economy, are US-only and have been wrong. Misquote: "programmers are disappearing" from a category about 6% the size of "software developers"; or using developer growth as proof for juniors.

**Layoffs "because of AI": Challenger, Gray & Christmas, 5 Nov 2026**
- Jan–Oct 2026: AI cited in **121,401 of 617,189** announced US cuts (~20%); **1,265 of 43,994 in October (2.9%, derived)**, lowest month of 2026; economy overtook AI as top reason (130,531). 193,226 since 2023. Tech sector 171,501 (+21% y/y). — [PDF](https://www.challengergray.com/wp-content/uploads/2026/11/Challenger-Report-October-2026.pdf) **OPENED-PRIMARY**
- Limits: *announced* cuts and *employer-stated* reasons; Microsoft's voluntary exit offers to 60,000 employees are excluded. Overall announced cuts are down 44% y/y. Publisher sells outplacement.
- Misquote: "AI destroyed 193,000 jobs".

**AI-washing evidence**
- New York WARN checkbox: 160+ companies filed in the first year, **none** cited automation — [Hunton, 18 May 2026](https://www.hunton.com/hunton-employment-labor-perspectives/new-york-warn-act-no-ai-related-layoffs-reported-in-first-year-of-adding-ai-related-disclosure-to-the-system) **OPENED-SECONDARY**. Later: **one** firm (Nespresso), 46 of ~25,000 workers, per NY DOL to [Narayanan & Kapoor, 11 Jun 2026](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) **OPENED-SECONDARY**. Counter: the box may be under-ticked (unclear definition, reputational cost).
- HBR survey of 1,006 executives (late 2025): 21% made large cuts **in anticipation of** AI, 39% low/moderate; only **2%** made large cuts from **actual** implementation — via the same essay, **OPENED-SECONDARY**; HBR original not opened.
- The essay also says 59% of US hiring managers admit emphasising AI because it plays better with stakeholders — **OPENED-SECONDARY**; original survey not opened; authors argue a position.

**Reversals**
- Klarna: CEO says the 2024 "700 agents" were outsourced contractors and nobody lost a job; in May 2025 it resumed hiring human agents, now with an "Uber-style" model; **yet company headcount fell from about 7,000 to 3,000 and he expects under 2,000 by 2030**. — [CX Dive, 20 Feb 2026](https://www.customerexperiencedive.com/news/klarna-pursues-uber-style-customer-service-model/812763/) **OPENED-SECONDARY**. "Klarna reversed AI" is a half-truth.
- Salesforce: support heads 9,000 to 5,000 (CEO podcast, Sept 2025) **SNIPPET-ONLY**; a *reversal* is **unverified**.
- "55% of employers regret AI layoffs" (Forrester): **SNIPPET-ONLY**, wording varies (already regret vs will regret) and it is conflated with an Orgvue survey. Gartner "half will rehire" is a forecast, **SNIPPET-ONLY**.

### Inferences
- The "recovery" and the "junior squeeze" are both true at once, because the growth is senior.
- The AI share of announced cuts went from a dominant spring/summer reason to ~3% in October while the technology improved. That is hard to square with the label measuring automation.

### Gaps
- LinkedIn and Lightcast overall software series for late 2026 not opened.

---

## Q4. CS enrolment

### Takeaway
Enrolment is falling fast in the US and falling in the UK, while US degree output hit a record. Supply of new graduates should shrink from about 2028–30 (inference).

### Cited Findings
- **US, National Student Clearinghouse, preliminary fall 2026 (29 Oct 2026)**: Computer & Information Science **−12.4%** (4-year), **−12.3%** (2-year), **−10.4%** (graduate); total enrolment +0.2%. — [NSC](https://nscresearchcenter.org/prelim-fall-enrollment-trends/) **OPENED-PRIMARY**. Based on 46% of institutions as of 24 Sept (**SNIPPET-ONLY**). Final report January 2027.
- **US/Canada PhD-granting departments, CRA Taulbee (Jun 2026)**: new CS majors **33,490 (−13%)**; total CS bachelor's enrolment 169,528 (−4%); bachelor's degrees **41,858, record, +13%**; master's enrolment about −26% (consistent with visa barriers); new PhDs −15%. — [CRA](https://cra.org/crn/2026/06/cra-update-new-cra-taulbee-survey-findings-show-record-degree-production-alongside-a-cooling-enrollment-pipeline/) **OPENED-PRIMARY†**
- **UK, BCS, 14 Aug 2026**: computing acceptances **−7%** vs +2% all subjects; digital apprenticeship starts +17% (2024/25). — [BCS](https://www.bcs.org/articles-opinion-and-research/computings-pipeline-problem-hasnt-gone-away-but-the-story-is-more-nuanced-than-the-headlines/) **OPENED-PRIMARY**. Stake: professional body. The circulating 15,760 figure is the 2025 cycle (**SNIPPET-ONLY**).

### Inferences
- A falling intake does not prove students are right; visas and cost also matter. It does mean today's 18-year-old may face fewer competitors at graduation than the 2025–26 cohorts.

### Gaps
- Nothing solid for Canada, India, Germany. Iran: see Q7.

---

## Q5. Which roles are growing?

### Takeaway
Growth is clearest in AI-titled and customer-facing AI deployment roles, from **tiny bases**. Security, data and platform claims are weaker than social media suggests; generic data postings are flat.

### Cited Findings
- **Forward-deployed engineer** (Lightcast via Fortune, 3 Sep 2026): US postings +1,000% Jan–Aug 2026 vs a year earlier; median advertised pay above $188,000 vs ~$145,000 for software engineers; wider tech postings +13%. — [Fortune](https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/) **OPENED-SECONDARY†**. Base: ~1,200 postings in all of 2025, 7,300+ in nine months of 2026 (**SNIPPET-ONLY**, CNBC/Lightcast). Thousands of ads against 1.7 million developer jobs; titles overlap with solutions engineering.
- **AI-titled software roles**: 37% of the software posting increase (Indeed, above, **OPENED-PRIMARY**).
- **AI engineer** ranked #1 in LinkedIn Jobs on the Rise 2026 (US starts Jan 2023–Jul 2025) — [Dice](https://www.dice.com/career-advice/ai-related-jobs-top-linkedins-fastest-growing-roles-list-for-2026) **SNIPPET-ONLY**; "+143% postings" is second-hand **SNIPPET-ONLY**.
- **Infrastructure/platform**: Raymond & Dillon find no hiring decline for systems and infrastructure engineers at Copilot adopters (**OPENED-PRIMARY**); Indeed IT systems +13% and IT infrastructure +10% y/y (derived, **OPENED-PRIMARY**). In Aug 2025 Indeed data platform engineer was +43% and web developer −72% vs early 2020 — [Zoomit summary, 24 Aug 2025](https://www.zoomit.ir/business/446187-hottest-tech-jobs-roles/) **OPENED-SECONDARY**, now 15 months old.
- **Security**: ISC2's 2025 study dropped its workforce-gap estimate because members rank skills above headcount — [ISC2](https://www.isc2.org/insights/2025/12/2025-isc2-cybersecurity-workforce-study) **SNIPPET-ONLY**. So "4.8 million unfilled security jobs" is out of date.
- **Data & analytics**: 61.8 on the Indeed index, +4% y/y (**OPENED-PRIMARY**).

### Inferences
- Common thread: integration, operations and accountability rather than raw code volume.

### Gaps
- No clean late-2026 growth number opened for security, platform or data engineering specifically.

---

## Q6. Economics of demand: does Jevons apply to software?

### Takeaway
Cheaper software *can* raise total demand for developers if demand is price-elastic. That is an open empirical question. Output and app supply rose sharply; evidence that end demand or developer hiring rose as much is mixed.

### Cited Findings
**For**
- Fed economists: with elastic demand coder employment could rise, more plausibly in the long run; they say it is not known in advance which case holds — [FEDS 2026-018](https://www.federalreserve.gov/econres/feds/files/2026018pap.pdf) **OPENED-PRIMARY**
- Indeed software rebound (+23% y/y) during rapid agent adoption (above); engineering among the least-affected functions at big tech (SignalFire); BLS +10%.
- Narayanan & Kapoor: AI compresses the "execute" layer; deciding and delivering resist automation — [essay](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) **OPENED-SECONDARY** (argument, not test; they announce a follow-up on why individual careers may still be rocky)
- Baird et al.: Copilot adopters slightly more likely to hire (association) **OPENED-SECONDARY**

**Against / complicating**
- App Store: new apps about 600,000 in 2025 (+30%), about 560,000 in H1 2026 (roughly double), but **downloads +3% (2025) and +2% (H1 2026)** — [Business Model Analyst citing Sensor Tower](https://businessmodelanalyst.com/ai-vibecoding-app-store-flood/) **OPENED-SECONDARY**. Consumer attention did not scale with supply, and many new makers are non-programmers: more software need not mean more programmer jobs.
- Raymond & Dillon: at adopters, net effect on hiring is negative in year one, no headcount growth.
- Fed: about 3%/yr slower coder growth since ChatGPT.
- The 2025–26 rebound is senior and AI-titled, and starts from a trough after a rate cycle.

### Inferences
- Honest line: "Jevons is a reasonable hope with partial support, not a law. Even if it holds in total, it does not promise the gain goes to juniors or to us geographically."

### Gaps
- No opened study estimates the price elasticity of demand for software services in the AI era.

---

## Q7. Iran / Persian-speaking market

### Takeaway
**Evidence is thin.** What exists is job-board statistics and one self-selected survey, mostly from companies with products to sell. It points to **war, internet shutdowns, filtering, sanctions and inflation** as the measured shocks of 1404–1405. I found **no study measuring AI's effect on Iranian developer employment**.

### Cited Findings

**Quera developer survey 1404 (fielded autumn 1404 / late 2025; second edition)**
- Sample **4,671 final responses** — [intro](https://quera.org/developer-survey/result/intro) **OPENED-PRIMARY** (count read via †). Quera says results cannot be generalised with certainty. Skew: about half under 24; 54% under 3 years' experience; 7% over 10 years — [demographics](https://quera.org/developer-survey/result/characterization) **OPENED-PRIMARY**. Stake: Quera sells training and recruiting.
- AI use: **96% use AI in work, 56% regularly**; ChatGPT ~90% of users, DeepSeek 25%, Cursor 15%, GitHub Copilot 14%; main use coding/rewriting 73%; over 80% trust but check; top worry **over-dependence (73%)**, ranked above job loss. **Of 9 developers: 5 see opportunity, 2 unsure, 1 fears replacement, 1 says competition got harder.** — [AI chapter](https://quera.org/developer-survey/result/ai) **OPENED-PRIMARY**
- Work: of 10: 4 full-time, 1 part-time, 1 freelance, 2 students, ≥2 seeking/unemployed. **Novices: 2 of 10 job-seeking.** Mean monthly income of full-time + freelance **43.7m toman** (professionals 52.5m, novices 25m; Tehran 51.3m). Quera itself attributes the nominal rise to inflation. 15% have international work experience; filtering/sanctions are main barriers, ~half cite money transfer. — [job chapter](https://quera.org/developer-survey/result/job) **OPENED-PRIMARY**
- Environment: **filtering/domestic limits named by 72% as a top work obstacle**; about half name sanctions; 40% intend to emigrate (about 5 of 10 under-24s); 18% of employed say their organisation laid off staff because of the 12-day war. — [social chapter](https://quera.org/developer-survey/result/social) **OPENED-PRIMARY**
- **Do not repeat uncritically**: the page says ~97% spend *at least* one hour a day bypassing limits, but its own answer scale includes "sometimes (under 1 hour)". The "one working day per week" average rests on that. Also "only 20% don't want to migrate" ([IDEA](https://ideaagency.net/20-of-iranian-programmers-do-not-intend-to-migrate/), **SNIPPET-ONLY**) does not match the 1404 page, which gives 2 in 10 only for under-24s.
- Fielded **before** the Jan 2026 shutdown and the spring 2026 war.

**Job-ad shocks (Jobvision, via press)**
- 21-day shutdown from 18 Dey 1404: **technology ads −60%, still −30% after Google returned** — [Zoomit, 25 Feb 2026](https://www.zoomit.ir/report/457291-jobvision-internet-shutdown-job-ads-impact-1404/) **OPENED-SECONDARY**. The headline "80%" is digital marketing.
- War: all ads **−53%** vs the same weeks' two-year average (2nd week Ordibehesht 1405), ~−74% early on; e-commerce industry −75%; >20,000 new openings since the war began — [Zoomit, 4 May 2026](https://www.zoomit.ir/report/459468-war-influences-on-iran-job-market/) **OPENED-SECONDARY**. No programmer-specific figure in the text.
- 318,000 résumés in one day (5 Ordibehesht 1405), record — [Digiato, 27 Apr 2026](https://digiato.com/iran-technology-news/growth-in-labor-demand-at-the-same-time-as-supply-decreases) **OPENED-SECONDARY**. Résumés, not unemployed people.
- June 2026 (i-Estekhdam): ads highest since Dey but ~50% below a year earlier — [Sakhtafzarmag, 21 Jun 2026](https://sakhtafzarmag.com/iran-it-job-market-recovers-after-internet-restoration/) **OPENED-SECONDARY**
- Autumn 2026, **unnamed platform**: 360 résumés per opening at one point in spring vs ~157 norm; summer 1405 openings −11% q/q, −8% y/y; data-science/AI openings +127% vs 1404 — [Namad Eghtesad, 25 Sep 2026](https://namadeghtesad.ir/news73968/%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%DA%A9%D8%A7%D8%B1-%D9%81%D9%86%D8%A7%D9%88%D8%B1%DB%8C-%D9%82%D8%B1%D8%A7%D8%B1%D8%AF%D8%A7%D8%AF%D9%87%D8%A7%DB%8C-%D9%85%D9%86%D8%B9%D8%B7%D9%81/) **OPENED-SECONDARY**; I searched for the 127% original and could not find it. Weak.

**Pay**
- Jobvision 1405 (155,000+ respondents): *requested* median tech pay up 30–50% nominal; Zoomit criticises sampling (platform users, Tehran, private sector). Seniority mattered more than years — [Zoomit, 6 Apr 2026](https://www.zoomit.ir/tech-iran/458526-jobvision-salary-1405-report/) **OPENED-SECONDARY**. Medians requested (m toman): data/AI senior 73, Java 71, QA 60, Python-Django 58, React 55, .NET 55, Laravel 53, Android 42 — [Jobvision](https://jobvision.ir/blog/computer-major-job-market/) **OPENED-PRIMARY†**. These are asks, not pay. The PDF was too large to open.
- IranTalent: half of specialists earned 25–46m toman at end-1404; programmers among top-paid specialists; tech firms hit hardest, by **demand loss and infrastructure limits** (AI not mentioned) — [IranTalent, Apr 2026](https://www.irantalent.com/blog/iran-market-in-1505/) **OPENED-PRIMARY**

**Is it AI? Practitioners disagree (opinion)**
- Peivast, 26 Jul 2026: an AI-factory manager says AI's effect is deeper and longer-lasting than war; an HR manager says war outweighs AI, though some teams use AI instead of hiring two people. — [Peivast](https://peivast.com/p/263677) **OPENED-SECONDARY**

**Access to AI tools**
- Iran is **not** on OpenAI's supported list — [OpenAI](https://developers.openai.com/api/docs/supported-countries) **OPENED-PRIMARY†** — nor Anthropic's, whose current policy is **effective 12 Nov 2026** — [Anthropic](https://www.anthropic.com/supported-countries) **OPENED-PRIMARY†**. Mehr says the same for Gemini/API and that unsupported payment methods are a separate barrier — [Mehr, 13 Nov 2026](https://www.mehrnews.com/news/7007979/%DA%A9%D8%AF%D8%A7%D9%85-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-%D9%87%D8%A7-%D9%85%D8%AD%D8%AF%D9%88%D8%AF-%D8%B4%D8%AF-%D9%85%D8%B9%D8%B1%D9%81%DB%8C-%D8%AC%D8%A7%DB%8C%DA%AF%D8%B2%DB%8C%D9%86-%D9%87%D8%A7) **OPENED-SECONDARY** (state-affiliated)
- A payment reseller says nearly **31%** of Claude accounts were blocked in Tir–Mordad 1405 (its own customers; commercial stake; not Iran-wide) — [Zoomit, 9 Sep 2026](https://www.zoomit.ir/iran-news/466859-claude-accounts-ban-refund-policy-iranicard/) **OPENED-SECONDARY**
- Qwen and Kimi returned access errors for Iranian users in Sept 2026, no official statement — [Zoomit, 21 Sep 2026](https://www.zoomit.ir/ai-articles/467597-china-ai-qwen-kimi-block-iranian-users/) **OPENED-SECONDARY**. Direct access to ChatGPT, Claude, Grok disrupted Oct 2026, cause unclear — [IranWire, 21 Oct 2026](https://iranwire.com/en/news/159144-ai-chatbots-face-disruptions-and-loss-of-direct-access-for-iranian-users/) **OPENED-SECONDARY**

### Inferences
- US job statistics cannot be transplanted to Iran: different shocks, pay scale and tool access. Stage line: "for Iran we can show the war and the internet in the data; we cannot show AI in the data, which is not the same as saying there is none."
- Restricted access probably slows substitution *and* weakens Iranian developers competing abroad. Untested.
- Organiser note: showing or recommending tools whose terms exclude Iran is a terms-of-service/account-loss issue for attendees. Say so plainly; open-weight local models are the cleaner demo. Not legal advice.

### Gaps
- No Iranian official statistics on programmer employment or enrolment found. No Jobinja 1405 report found. Nothing usable for Afghanistan, Tajikistan or diaspora developers. Anecdote only: at least 5 of the top 10 maths entrants chose computer engineering at Sharif in 1405 (**SNIPPET-ONLY**), so "Iranians are abandoning CS" has no support here.
- Filtering/sanctions shares are self-reported perceptions.

---

## Career changers: extra note

### Takeaway
No reliable 2026 bootcamp outcome series found.

### Cited Findings
- Circulating placement figures range from 35–50% to 94% and conflict — all **SNIPPET-ONLY** ([example](https://hakia.com/news/bootcamp-market-2026/)). Use none.

### Inferences
- Career changers are hit by the junior squeeze (Q1) but may hold domain knowledge, which the "senior, AI-fluent, customer-facing" demand (Q3, Q5) rewards. Reasoning, not measured.

### Gaps
- No study of adult entrants to software after 2023.

---

## The 8 numbers most worth showing on stage

1. **81.7** — Indeed US software postings index, 13 Nov 2026 (Feb 2020 = 100; peak 233.8, low 61.1, +23% y/y). *Caveat: one job board, US, ads not hires. Show the whole curve from 2020, never a slice.* [FRED](https://fred.stlouisfed.org/series/IHLIDXUSTPSOFTDEVE)
2. **19%** — gap for 22–25-year-olds in AI-exposed jobs, Stanford/ADP, June 2026. *Caveat: relative, descriptive, all exposed jobs; halves with an education control; same paper finds no economy-wide displacement.* [PDF](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf)
3. **10% to 51%** — share of big firms' 2022–24 technical-hiring drop attributable to Copilot. *Caveat: the range is the message; preprint; pre-agent tools; layoffs and headcount unchanged.* [arXiv](https://arxiv.org/html/2611.31083)
4. **71%** — share of the *increase* in US software postings (May 2025–May 2026) that was senior. *Caveat: share of the increase, not of all jobs.* [Indeed](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/)
5. **7.0% and 19.1%** — US recent CS graduates' unemployment vs underemployment (all majors 4.2% and 39.4%). *Caveat: 2024 data; harder to get in, but those who get in mostly do graduate-level work.* [NY Fed](https://www.newyorkfed.org/research/college-labor-market#--:explore:outcomes-by-major)
6. **+10% vs −7%** — BLS 2025–35, software developers vs computer programmers. *Caveat: a projection, US, revised down from the previous edition (check before stating the old figure).* [BLS dev](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm), [BLS prog](https://www.bls.gov/ooh/computer-and-information-technology/computer-programmers.htm)
7. **20% to 2.9%** — AI's share of announced US layoffs: Jan–Oct 2026 vs October alone. *Caveat: what employers say, not what caused it.* [Challenger](https://www.challengergray.com/wp-content/uploads/2026/11/Challenger-Report-October-2026.pdf)
8. **1 in 9 and 72%** — Iranian developers (Quera 1404, n=4,671): about 1 in 9 fear AI replacement; 72% name filtering a top obstacle. *Caveat: self-selected, half under 24, before the 2026 shutdown and war.* [AI](https://quera.org/developer-survey/result/ai), [social](https://quera.org/developer-survey/result/social)

*Reserve*: −12.4% US 4-year CS enrolment ([NSC](https://nscresearchcenter.org/prelim-fall-enrollment-trends/), preliminary); 64% remote work ([NY Fed](https://libertystreeteconomics.newyorkfed.org/2026/06/remote-work-leaves-younger-workers-sidelined/)); −60% Iranian tech ads in the shutdown ([Zoomit](https://www.zoomit.ir/report/457291-jobvision-internet-shutdown-job-ads-impact-1404/)).

## Claims to avoid on stage

- "AI eliminated 500,000 programmer jobs": the Fed authors explicitly reject that reading.
- "AI cut junior developer jobs by 20%" as a current or causal fact: mid-2025, descriptive, vs peak.
- "AI caused X% of layoffs": stated reasons only; the NY checkbox count (one firm) shows how unstable such labels are.
- "There is no effect, it was all interest rates": Census gives rates up to 25%; the gap kept widening after rates peaked; Nov 2026 causal evidence shows a junior-hiring effect.
- "Only 4.5% of software jobs are open to juniors because of AI": the share was already small; it fell ~1 point since 2019 in tech.
- "55% of companies regret AI layoffs", "Salesforce reversed its cuts", "Klarna replaced AI with humans": unverified or half-true.
- "CS is the worst degree for unemployment": it is not, and underemployment is among the lowest.
- "+1,000% forward-deployed engineers" without the base (about 1,200 ads in all of 2025).
- "4.8 million unfilled security jobs": ISC2 stopped estimating it.
- "Jevons guarantees more developer jobs": untested for software; app downloads grew ~2–3% while releases doubled.
- "Section 174 cost 500,000 jobs": no method behind it.
- "97% of Iranian developers lose an hour a day": contradicts its own answer scale.
- Any Iran-wide claim that AI raised or cut programmer jobs: no data found.
- Any bootcamp placement percentage.

## Verdict per audience

**CS student.** The way in is measurably harder than in 2021–22, and part of that is AI, most plausibly in junior roles that are mostly writing code; how large a part is disputed (for one tool in big firms, a tenth to a half of the hiring drop). It is not a collapse: US CS graduates who get in mostly land real graduate work at above-average pay, BLS still projects growth for developers, and enrolment is falling, so your cohort may meet fewer competitors. In Iran the measurable shocks are war, internet and economy. Aim past code-typing: systems, operations, security, data, a domain, and evidence of finished work. No one can promise the 2030 market.

**Junior with a job.** The evidence is comparatively kind to you: across Stanford, Census, Cleveland Fed and MIT/Microsoft the adjustment is fewer hires, not more separations. The cost is slower mobility and a higher bar: firms are buying experience. Your scarce asset is the seat that lets you turn into the mid-level and senior engineer they want, so spend it on ownership, debugging, production and people, and treat AI as a tool you can check. Iranian juniors face an added, non-AI risk: employer fragility.

**Senior.** Demand data favours you: 71% of the US rebound is senior, experienced hiring volume held at Copilot adopters, and engineering was among the least-affected functions at big tech. Caveats: postings remain below 2020, mid-level shares fell most, external hires into experienced software roles fell about 13% at Copilot adopters, hiring standards rose, and the causal data end in mid-2025 before agents matured; authors say substitution could move up the ladder. Expect the job to shift toward judgement, review and accountability. The unpaid bill is the pipeline: if juniors are not hired, seniors are not made.

**Career changer.** This is the hardest honest answer: you enter through the narrowest part of the market, competing with record graduate output, and I found no trustworthy outcome data for bootcamps or adult entrants after 2023. Do not quit a paying job on the strength of a placement statistic. Your edge, plausible but unmeasured, is domain knowledge combined with the ability to build and check software, which matches where demand grows (integration, customer-facing AI work, operations). Test it cheaply inside your present field first. In Iran, weigh tool access and employer stability as heavily as skills.
