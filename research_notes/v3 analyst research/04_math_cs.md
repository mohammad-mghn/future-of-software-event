# 04 — Math and the CS degree in the AI era (v3 analyst research)

Research date 2026-11-26. Builds on `Software engineering in the AI era/05_skills_and_learning.md` and `09_what_to_learn.md` (cited as "notes 05/09"); repeats their findings only where re-verified or corrected.

**Verification tags:** `opened primary` = original page/PDF/transcript read. `via secondary` = a news outlet, mirror or third-party transcript. `could not open` = paywall/blocked; claim rests on reports. `(P)` = paraphrase, not a quote. Quotes are verbatim English, trimmed with "…" to about 30 words. "Inference" = this file's judgement, not a source claim.
**Caveat on method:** several pages were read through fetch tools that summarise; figures marked `opened primary` from BLS/O*NET were cross-checked on two pages where possible (BLS fastest-growing table re-checked by hand on 2026-11-26). Re-check any number before it goes on a slide.

---

## 0. Answer first

1. **What Musk actually said.** He never said, in anything found, "math becomes more important because of AI". His math remarks are (a) a two-word reply, "Physics (with math)", to Pavel Durov's "pick MATH" post (11 Jul 2025); (b) years of "first principles" / physics-as-thinking-tool posts (2020–2025); and then, in late 2026, the opposite direction for *human* math: "Math done by humans is cooked hard" (26 Oct 2026) and "Even the best meat computers are terrible at math is the honest truth" (24 Nov 2026, replying to a Terence Tao clip). His 2025–26 education advice is *breadth* ("arts and sciences, engineering") so you can "formulate the question" for AI and robots, and he says college skills will "probably not" be needed in a "post-work society". The "Musk says study math" meme comes from Indian and Gulf media coverage of the Durov reply, often merged with Jensen Huang's July 2025 "physical sciences" remark.
2. **Balance of voices.** "More math/physics": LeCun, Hassabis, Karpathy (2024), Durov, Urschel (MIT), Klainerman, the mathematicians (Tao, Litt, Riehl, Avigad: for *understanding*). "Less, or doesn't matter which subject": Altman ("biology class or the physics class? I don't think it matters right now"), Huang on basic math and PDEs ("I don't think it does [matter]"), Ng (needed math depth shrinks as tools mature), Musk 2026, Wissner-Gross ("math is cooked"). Nearly all of them separate *calculating* (falling in value) from *thinking/modelling/judging* (holding or rising). The real disagreement is about whether math is the best way to train that thinking.
3. **AI's own math ability (the "computing" part is commoditised).** IMO went from silver (2024; Lean, days of compute) to gold (2025; 4.5 h, natural language) to officially graded 42/42 perfect scores (2026). FrontierMath Tier 4 went from 5% (Jul 2025) to saturated (Sep–Nov 2026). AI produced the first widely accepted autonomous solution of a prominent Erdős problem (#90, May 2026). Research lemmas cost about $36 for 7/10 correct (First Proof batch 3, Oct 2026).
4. **What keeps value (the "understanding/checking" part).** AI writes confident wrong proofs, games its verifiers, leaves out citations, and produces proofs no one understands (Lean-only results, OpenAI's 722-paper dump with withdrawals). Tao: AI checks well, but "the way they do it does not produce human understanding." The scarce skills are specifying the right question, building checks that can't be gamed, and digesting/explaining. These map directly onto software work: specs, tests, evals, review.
5. **Labour market.** Applied math/stat roles grow fastest. BLS 2025–35: data scientists +34.6% (#3 of all occupations), computer & information research scientists +21.8%, operations research analysts +11.9%, statisticians +11.0%, software developers +10.2%, web developers +3.8%, computer programmers −7.3%, mathematicians +0.6%. Explicit math/statistics shows up in most data-science ads but only a minority of ML/AI-*engineer* ads.
6. **CS degree.** Enrolment is falling (US 4-year CS −8.1% in fall 2025, −12.4% preliminary fall 2026; UK computing applications falling). Yet graduations hit a record (41,858, CRA), and top departments *kept* math and theory and made assessment more in-person. Employers say fundamentals did not lose value ("Not one practitioner… said that programming fundamentals had become less important", Burning Glass, Nov 2026). Degree requirements in software ads fell from 2019 to 2024 (64.4% to 56.0%, Indeed); economy-wide they have crept back since 2024.
7. **Frontend vs Backend.** The degree matters less *formally* for frontend: O*NET says 46% of web developers' new hires need a bachelor's, against 85% for software developers, and frontend ads list a degree less often. But the non-degree on-ramp (bootcamps, mostly JS/frontend) has largely collapsed. Frontend's share of hiring fell most (SignalFire −25% since 2022; HN hiring posts 27% to 6.6%), and frontend-language mentions fell in entry-level ads (JavaScript 23.6% to 17.5%, CSS 12.7% to 9.0%, HTML5 5.7% to 2.7%). Backend work leans on what a CS degree actually teaches: databases, concurrency, distributed systems, security. *Inference:* the degree's *content* (fundamentals) matters more for both sides; the *paper* matters more for backend/systems ads; a frontend developer without either is the most exposed profile.

---

## 1. What prominent people say about math (and physics / first principles)

### 1A. Elon Musk — verified chronology
x.com could not be opened directly (`could not open`); posts read via the archive mirrors elonmuskarchive.org, whatelonsaid.com and nitter/teapawt mirrors, which show the same text, time and engagement. Treat as `via secondary (post mirror)`.

| Date | Exact words | Direction | Source / tag |
|---|---|---|---|
| 28 Apr 2023 | "Physics is the law, everything else is a recommendation." | first principles | [whatelonsaid](https://whatelonsaid.com/topic/physics) — via secondary (mirror) |
| 29 Apr 2024 | "The mental tools of physics are a superpower that applies to anything, not just physics" | physics as thinking tool | same — via secondary |
| 26 Oct 2024 (America PAC town hall, Lancaster PA) | "I just recommend studying physics… What matters is not remembering a bunch of formulas. What matters is the thinking process that led to the discovery of those formulas." | thinking > formulas | same (transcript, at 1:11:16) — via secondary |
| 24 Nov 2024 | "Calculus is not hard" | — | same — via secondary |
| **11 Jul 2025** | Reply to Durov's "If you're a student choosing what to focus on, pick MATH…": **"Physics (with math)"** | the origin of the "Musk: study math" meme | [elonmuskarchive post 1943810991206412418](https://elonmuskarchive.org/posts/1943810991206412418) — via secondary (mirror); widely reported ([NDTV, 17 Jul 2025](https://www.ndtv.com/offbeat/telegram-ceo-pavel-durov-tells-students-to-pick-this-subject-for-success-elon-musk-responds-8894504), [TOI, 16 Jul 2025](https://timesofindia.indiatimes.com/education/news/math-or-physics-telegrams-durov-tells-students-to-pick-math-musk-says-pair-it-with-physics/articleshow/122565037.cms)) |
| 9 Nov 2025 | "Physics is the set of math with relevance to reality" | — | [elonmuskarchive 1987614458303418743](https://elonmuskarchive.org/posts/1987614458303418743) — via secondary |
| ~30 Nov 2025 (People by WTF podcast with Nikhil Kamath) | "Will these skills be necessary in the future? Probably not, because we're gonna be in like a post-work society." Also: "I don't think you have to go to college, but… if you do, you just try to learn as much as possible across a wide range of subjects." | **less** | [BI via AOL, 2 Dec 2025](https://www.aol.com/articles/elon-musk-says-ai-most-131959009.html); [Benzinga via Yahoo, 4 Feb 2026](https://www.yahoo.com/news/articles/elon-musk-says-dont-college-030112531.html) — via secondary |
| 26 Sep 2026 (China Media Group interview; Fortune 28 Sep) | "get as broad-based education as possible, that includes arts and sciences, engineering—wide-general knowledge." … "In order to know what to ask the robots for, you need to be able to formulate the question" | breadth, not math | [Fortune, 28 Sep 2026](https://fortune.com/2026/09/28/elon-musk-money-wont-matter-gen-z-education-advice-study-arts-sciences-engineering-promot-humanoid-robots-billioniare-tesla-spacex-ceo/) — via secondary |
| **26 Oct 2026** | Quote-post about 1,000+ mathematicians joining an "Association for Human Mathematics": **"Math done by humans is cooked hard"** | **less (for humans)** | [elonmuskarchive 2114762874002567269](https://elonmuskarchive.org/posts/2114762874002567269) — via secondary (mirror) |
| 21 Nov 2026 | On the AI Riemann claim: "…is yet another mind-blowing thing achieved by super intelligence…" | AI does math | [elonmuskarchive 2124213680422387741](https://elonmuskarchive.org/posts/2124213680422387741) — via secondary |
| **24 Nov 2026** | Reply to a clip of Tao ("We've learned almost nothing mathematically from what they did. It's like strip mining the landscape."): **"Even the best meat computers are terrible at math is the honest truth"** | **less (for humans)** | [elonmuskarchive 2125182397918416965](https://elonmuskarchive.org/posts/2125182397918416965); [whatelonsaid /x](https://whatelonsaid.com/x) — via secondary (two mirrors agree) |

- **Reading (inference):** Musk values physics-style *reasoning* (first principles, testing against fundamentals), not math skill as a job asset. By late 2026 he openly says AI beats humans at math. Quoting him as "math becomes more important" is a misquote. The fair version: "Musk says *thinking* like a physicist matters, and also says human math is 'cooked'."
- **Trap:** an Exa podcast transcript of Moonshots EP #302 (15 Oct 2026) labels the opening line "Mathematicians as artisans, it's over, it's cooked" as **Elon Musk**. The body of the transcript shows it is **Alexander Wissner-Gross**. Do not attribute it to Musk. [transcript](https://exa.ai/library/podcast/gw2qjv1gl5k/episode/ztv45m940cg) — via secondary.
- Pay/stake: xAI sells Grok; Tesla's pay package is tied to robots. Saying AI is better at math serves his products.

### 1B. Others

| Who, date | Exact words (≤30 words) | Direction | Why (their stated reason) | Source / tag |
|---|---|---|---|---|
| **Jensen Huang**, Beijing, 16 Jul 2025 | "For the young, 20-year-old Jensen, that's graduated now, he probably would have chosen… more of the physical sciences than the software sciences." | more physics | "physical AI"/robotics needs physics | CNBC, 17 Jul 2025 — via secondary (report opened in agent pass; URL not captured) |
| Huang, Ezra Klein Show, 23 Sep 2026 | On kids forgetting long division: "basic math is, is being forgotten. Um, does it matter?… I don't think it does." Also: "I don't know how valuable it is… for most people, to learn how to do surface integrals or partial differential equations" | **less** (for most people) | users work at higher abstraction; "we're gonna be better systems thinkers" | [Maynard corrected transcript](https://andrewmaynard.net/late-lessons-ai-sept-2026/sources/transcript-klein-huang-2026-09-23.html) + [Exa transcript](https://exa.ai/library/podcast/p92lv69h8sg/episode/jcvbvnnz45t) — via secondary (two transcripts agree); NYT original [here](https://www.nytimes.com/2026/09/23/opinion/ezra-klein-podcast-jensen-huang.html) not opened |
| Huang, All-In Podcast (reported 7 Nov 2026) | (P) still believes in "deep science, deep math, and strong language skills"; "Language is the programming language of AI." | mixed | AI usage needs "artistry" | [Yahoo Creators, updated 7 Nov 2026](https://creators.yahoo.com/lifestyle/story/jensen-huang-shares-his-blunt-advice-for-young-people-looking-to-survive-and-thrive-in-the-ai-era-193637392.html) — via secondary (notes 09 dated it 15 Sep; the page now shows 7 Nov) |
| **Sam Altman**, Fed fireside, 22 Jul 2025 | On calculators: "with better tools, we use our brain power for something else. We start teaching calculus in high school." | raise the bar | tools raise expectations | [Fed transcript PDF](https://www.federalreserve.gov/mediacenter/files/capital-framework-conference-fireside-chat-transcript.pdf) — opened primary |
| Altman, People by WTF (~14 Aug 2025) | "learning how to use AI tools is probably the most important, specific hard skill to learn." … "are you supposed to take the biology class or the physics class? I don't think it matters right now." | **less** (subject choice) | learning to learn, adaptability; IMO gold = ~1.5 h horizon, a major theorem ~1,000 h | [YouTube, official channel](https://www.youtube.com/watch?v=SfOaZIGJ_gs) — opened primary (transcript) |
| Altman, Stanford GSB, Oct 2026 | Mathematicians told him "one kind of math job… is over", but the rest is "figure out how to make sense of knowledge, how to communicate it…"; "We should not learn things that AI is going to do really well." | less (for computation) | | [transcript](https://thinkersarchive.com/sam-altman/ai-safety-gsb-talk-2025/) — via secondary |
| **Demis Hassabis**, Athens, 12 Sep 2025 | "for the next decade or so, I would still advocate the core learnings in STEM, mathematics, physics." Plus "meta skills of learning to learn" | **more** | knowing how the tech is built lets you use it better | [Greek PM's office transcript](https://www.primeminister.gr/en/2025/09/13/36924) — opened primary; [AP](https://apnews.com/article/greece-google-artificial-intelligence-hassabis-85bff114c30cbea4b951ab93dcc1e6d1) — via secondary |
| Hassabis, ABC News, 23 May 2026 | "still study the basic um core STEM subjects of maths and physics and computer science um and biology… those foundations will still be critical in the AI era." | more | | agent check, opened primary (transcript); also Stanford GSB 18 Jun 2026 (notes 09) |
| **Terence Tao**, Harvard talk, article 20 Nov 2026 | AI is very good at verifying, but "the way they do it does not produce human understanding." (P) sort skills into those to keep and those you can lose; he outsources coding and literature search and keeps the math | mixed: computing down, understanding up | | [Harvard FAS](https://current.fas.harvard.edu/stories/dark-moment-mathematics-terence-tao-says-future-quite-bright) — opened primary |
| Tao, clip circulated 22 Nov 2026 | "We've learned almost nothing mathematically from what they did. It's like strip mining the landscape." | understanding is the bottleneck | | X post by @ultimanull quoting a clip — via secondary; original video not identified |
| Tao, Nature, 22 Oct 2026 | (P) 'proof scarcity' is ending; human understanding is falling behind; risk of AI-built models in lending/finance that no one understands | | | [Nature](https://www.nature.com/articles/d41586-026-03389-1) — opened primary (notes 09) |
| **Andrej Karpathy**, No Priors, Feb 2024 (*historical*) | Kids should study "math, physics, CS kind of disciplines… it's just like the best thinking skill core"; "We're not efficient memorizers compared to our tools." | **more** | "post-AGI you still want empowered humans" | [transcript](https://thinkersarchive.com/andrej-karpathy/ai-and-robotics-no-priors-2024/) — via secondary. 2026: credits the line "you can't outsource your understanding" to a tweet (notes 05) |
| **Yann LeCun**, email to BI, 22 Dec 2025 | "If you are a CS major and take the minimum required math courses for a typical CS curriculum, you might find yourself unable to adapt to major technological shifts." | **more** | "long shelf life" foundations: math, physics, EE, signal processing, control, optimisation | [BI](https://www.businessinsider.com/yann-lecun-advice-ai-careers-computer-science-degree-2025-12) — via secondary; his own [LinkedIn share](https://www.linkedin.com/posts/yann-lecun_yann-lecuns-advice-for-young-students-wanting-activity-7409013047056449536-uCNg): "Study things that have a long shelf life." — opened primary |
| **Andrew Ng**, The Batch, 11 Aug 2021 (*historical*) | "As machine learning techniques mature and become more reliable and turnkey… a shallower understanding of the math involved may be sufficient" | **less (depth)** | learn the math your decisions need; autodiff removed the calculus | [The Batch](https://www.deeplearning.ai/the-batch/how-to-learn-math-for-machine-learning) — opened primary |
| Ng, 13 Mar 2025 | "…discouraging others from learning programming… will be seen as some of the worst career advice ever given." | keep coding | | LinkedIn/The Batch — opened primary (agent check) |
| Pavel Durov, 11 Jul 2025 | "pick MATH. It will teach you to relentlessly rely on your own brain, think logically, break down problems…" | more | self-reliance | mirror above — via secondary (stake: none found) |
| John Urschel (MIT math), MIT News, 17 Nov 2026 | "The act of learning how to think is going to be more important than ever." | more | ability to think for yourself will be "at a premium" | [MIT News](https://news.mit.edu/2026/qa-why-building-math-muscles-remains-important-ai-era-1117) — opened primary |
| Sergiu Klainerman, arXiv, 21 Oct 2026 | "Mathematics extends beyond proving theorems: its creative core lies in conceptual discovery and understanding." Calls Tsimerman's ICM-2026 "superhuman within a few years" prediction irresponsible | more (conceptual) | | [arXiv 2610.29713](https://arxiv.org/abs/2610.29713) — opened primary |
| Daniel Litt, 13 Sep 2026 | (P) producing math text is decoupling from understanding; PhDs should rest on oral defence; "no one can understand mathematics for us" | understanding up | | [blog](https://www.daniellitt.com/blog/2026/9/13/a-beginning-for-mathematics/) — opened primary (agent) |
| Emily Riehl, 2026 | (P) humans still need Lean expertise to judge what a Lean certificate actually proves; AI-written Lean PRs clog review | checking up | | [YouTube](https://www.youtube.com/watch?v=32nNC3q_DdY) — opened primary (transcript, agent) |
| Jeremy Avigad, arXiv, 24 Aug 2026 | (P) future mathematicians need ML and formal-tool fluency and must not be "mere consumers of AI" | | | arXiv 2608.23218 — opened primary (agent) |
| Timothy Gowers, May 2026 | (P) for learning, being told the answer is not ideal; productive struggle with small hints | | | [GOSIM keynote](https://www.youtube.com/watch?v=EsR15-VXQIo) — opened primary (transcript, agent) |
| Alexander Wissner-Gross, Moonshots, 15 Oct 2026 | "Math is over, as we've, as it has been done historically. The new way of doing math is bulk solution." | **less** | | transcript above — via secondary (stake: co-wrote *Solve Everything*) |
| Jack Clark (Anthropic), 2026 via Fortune | (P) avoid basic or "rote programming"; value "synthesis across a whole variety of subjects and analytical thinking" | less (rote) | | [Fortune](https://fortune.com/2026/09/28/elon-musk-money-wont-matter-gen-z-education-advice-study-arts-sciences-engineering-promot-humanoid-robots-billioniare-tesla-spacex-ceo/) — via secondary |

**Pattern (inference).** Nobody credible says "calculation skill is more valuable". The "more" camp argues math/physics is the best *training* for thinking, modelling and adapting (LeCun, Hassabis, Karpathy, Urschel). The "less" camp argues tools absorb the mechanics, so pick breadth and AI fluency (Altman, Musk 2026, Huang on PDEs). Mathematicians add a third view: the *understanding and checking* layer is now the bottleneck.

---

## 2. Labour-market evidence

### 2A. BLS projections 2025–35 (released 27 Aug 2026; pay = OEWS May 2025)
Source: [BLS release](https://www.bls.gov/news.release/ecopro.nr0.htm); [fastest-growing table](https://www.bls.gov/emp/tables/fastest-growing-occupations.htm) (re-checked 2026-11-26, opened primary); OOH pages; [openings table 1.10](https://www.bls.gov/emp/tables/occupational-separations-and-openings.htm).

| Occupation | Jobs 2025 | Growth 2025–35 | Openings/yr | Median pay |
|---|---|---|---|---|
| Data scientists | 275,600 | **+34.6%** (#3 of all occupations) | 24,800 | $120,230 |
| Computer & info research scientists | 38,600 | +21.8% (#8) | 2,900 | $140,300 |
| Operations research analysts | 113,100 | +11.9% | 7,500 | $88,940 |
| Statisticians | 31,300 | +11.0% | 1,900 | $105,650 |
| Software developers | 1,717,800 | +10.2% | 95,300 | $135,980 |
| Actuaries | 31,200 | +9.2% | 1,500 | $130,000 |
| Web & digital interface designers | 132,700 | +6.0% | 8,300 | $104,000 |
| Web developers | 87,400 | +3.8% | 5,300 | $92,650 |
| Mathematicians | 2,200 | +0.6% | ~100 | $126,710 |
| Computer programmers | 110,800 | **−7.3%** | 4,400 | $100,390 |

- All occupations +3.5%. Computer & math group +7.3%, "fifth fastest growing major occupational group".
- BLS wording: "Although the growing adoption of AI is expected to support demand for some occupations, associated productivity gains may dampen employment demand for others." Web developers: AI "may soften the employment growth". — opened primary (fetch-extracted).
- BLS published new "AI exposure categories" (27 Aug 2026). Per-occupation levels are only in an XLSX file, not downloaded. Its own caveat: "Exposure does not imply job loss…"
- *Reading:* applied math/statistics roles (data science, OR, statistics) grow 3–10x faster than the economy. "Mathematician" as a job is tiny and flat. Plain coding shrinks. *Caveat:* projections are models, not forecasts of AI shocks; data scientists were +34% in the 2024–34 set too.

### 2B. What math each role uses (O*NET, 0–100; updated 2026)
Knowledge "Mathematics" = "arithmetic, algebra, geometry, calculus, statistics, and their applications". Skill = "Using mathematics to solve problems". [Knowledge list](https://www.onetonline.org/find/descriptor/result/2.C.4.a), [Skill list](https://www.onetonline.org/find/descriptor/result/2.A.1.e) — opened primary (fetch-extracted; two values spot-checked on profile pages).

| Occupation | Knowledge imp./level | Skill imp./level | New hires needing a bachelor's |
|---|---|---|---|
| Mathematicians | 96 / 95 | 100 / 86 | — |
| Actuaries | 96 / 95 | 85 / 71 | — |
| Operations research analysts | 93 / 92 | 88 / 70 | — |
| Statisticians | 92 / 89 | 97 / 77 | — |
| Data scientists | 88 / 81 | 85 / 71 | — |
| Computer & info research scientists | 77 / 78 | 60 / 63 | — |
| Software developers (15-1252) | **64 / 65** | 44 / 46 | **85%** (Job Zone 4) |
| Computer programmers | 63 / 65 | 53 / 45 | — |
| Web developers (15-1254) | **59 / 56** | 44 / 41 | **46%** (+17% certificate, 17% associate; Job Zone 3) |
| Web & digital interface designers | **35** / n.a. | 35 / 36 | 52% |

- Software Developers task (verbatim): "Design, develop and modify software systems, using scientific analysis and mathematical models to predict and measure outcomes and consequences of design." — opened primary.
- **Day-to-day math by role (inference, built on O*NET + notes 09):**
  - *Frontend:* geometry and coordinates (layout, transforms, animation easing), basic algebra, colour/contrast ratios, percentiles for performance budgets, state machines for UI logic.
  - *Backend:* discrete math (sets/relations behind SQL, graphs), Big-O and data structures, probability for retries, queues, caching and capacity, latency percentiles, concurrency reasoning (logic/invariants).
  - *AI engineer:* statistics for evals (sampling error, confidence intervals; about 1,000 questions to detect a 3-point gap, [Miller 2024](https://arxiv.org/abs/2411.00640)), vectors and cosine similarity, base rates.
  - *ML research/training:* linear algebra, multivariable calculus, probability, optimisation, each at full-course depth.
  - *Data scientist / OR:* statistics, experimental design, optimisation (O*NET importance 88–93).

### 2C. How often AI/ML job ads ask for math or statistics
- **Best peer-reviewed (old data):** Verma, Lamsal & Verma, *Industry and Higher Education* 36(1), online Feb 2021. 1,200 AI and 1,700 ML entry-level Indeed ads, US, Jul–Dec 2019. "Statistics" skill in **37.58% of AI ads and 58.76% of ML ads**; a mathematics major in 37.92% / 42.65%. Their "statistics" keyword list includes Excel, MATLAB and pandas, so it overstates. Quote: "Traditional degree programs in engineering, mathematics, and computer science are still demanded for AI/ML jobs." — opened via third-party mirror of the SAGE full text (treat as via secondary).
- Heidarysafa et al., [arXiv 2106.11077](https://arxiv.org/abs/2106.11077), about 244K US postings Apr 2020–Apr 2021: statistics in about 14% of ML-engineer ads and about 49% of data-scientist ads (computed from their counts) — opened primary.
- **2026, weak automated trackers** (opened primary, low credibility; AI-generated pages, small or lab-heavy samples):
  - ai2hired, Nov 2026, 2,179 technical ads at 12 AI companies: statistics in 5% overall; 55.6% of data-science, 7.4% of research and 4.6% of AI/ML-engineering ads.
  - Scoutify, 17 Nov 2026, 2,000 AI/ML research postings: statistics 19%, applied math 10%, physics 16%, algorithms 37%.
  - siliconainews, 14 Oct 2026: statistics/probability 95 and mathematics 48 of 1,824 AI ads (consistent with notes 09).
- No Lightcast, Indeed, OECD or AI Index figure for "share of AI ads requiring math" was found. Stanford AI Index 2026 (via [Lightcast blog, 13 Apr 2026](https://lightcast.io/resources/blog/stanford-ai-2026)): AI skills in about 2.5% of US postings; Python the top specialised skill (258,674 postings). — opened primary (Lightcast).
- **Pattern:** explicit math/statistics appears in most data-science ads and a minority of ML/AI-*engineer* ads. Research ads imply it through "ML" and "publications". *Inference:* math is a *filter* for research and data roles and is *assumed or invisible* in engineering ads.

### 2D. Skills vs degrees, and the premium on AI skills
- Bone, González Ehlinger & Stephany, "Skills or degree?", *Technological Forecasting & Social Change* 214, 124042 (26 Feb 2025), about 11M UK vacancies 2018–mid-2024: "mentions of university education requirements for AI roles declined by 15 %"; "AI skills command a wage premium of 23 %, exceeding the value of degrees up until the PhD-level (33 %)." — opened primary (abstract).
- Stephany & Teutloff, *Research Policy* 53(1) 104898 (2024): AI skills raise wages "by 21 % on average – because of their strong complementarities." — opened primary (abstract; data source not confirmed).
- Mäkelä & Stephany, [arXiv 2412.19754](https://arxiv.org/abs/2412.19754): AI roles are "nearly twice as likely" to require resilience, agility or analytical thinking — opened primary.
- PwC 2026 AI Jobs Barometer (15 Jun 2026): AI-skill wage premium 62%, not controlled for education, experience or location. PwC classes software developers as "Democratised": "Jobs reshaped by AI to demand less expertise." — opened primary (PDF highlights).
- Lightcast "Beyond the Buzz" (23 Jul 2025): postings with AI skills "offer 28% higher salaries—nearly $18,000 more per year" — opened primary.
- *Warning:* every premium found is for "AI skills", not math or statistics specifically, and they range 21–62% depending on method.

### 2E. Pay for ML/research roles
- [Levels.fyi 2025 report](https://www.levels.fyi/2025/): US SWE median total comp Entry $155K, Engineer $226K, Senior $312K, Staff $457K; "+15.38% Pay for Research Roles Highest" — opened primary.
- [Levels.fyi, 17 Jul 2025](https://www.levels.fyi/blog/ai-engineer-compensation-trends-q3-2025.html): AI-focused engineers' premium over non-AI at the same level: entry 6.2% (2024: 10.74%), engineer 11.9%, senior 14.2%, staff 18.7% — opened primary. *Reading:* the AI premium is smallest and shrinking at entry level, and largest for seniors.
- Live Levels.fyi pages (26 Nov 2026): US SWE median $200K; ML/AI SWE median $251K. The raw gap mixes seniority and company — opened primary.
- Meta Superintelligence Labs 2025: reported packages up to $300M over 4 years; Meta called reports untrue or misrepresented — via secondary. *Use only as a sign that elite research talent is a tiny superstar market, not a career path.*
- BLS wage-only: research scientists $140,300 vs software developers $135,980. Without stock, the gap is small.

---

## 3. AI's own math ability, and what it implies

### 3A. Timeline (from a delegated research pass; tags as given)
- **IMO 2024:** AlphaProof + AlphaGeometry 2 scored 28/42 (silver). Problems were hand-formalised in Lean, with 2–3 days of compute per problem — [Nature, 12 Nov 2025](https://www.nature.com/articles/s41586-025-09833-y), opened primary.
- **IMO 2025 (19–21 Jul):** OpenAI's experimental model and Gemini Deep Think each scored 35/42 (gold cutoff), in natural language within 4.5 h. DeepMind was officially graded and certified by IMO coordinators ([DeepMind blog](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/), opened primary). OpenAI was graded by three hired former medallists and announced before the embargo (via secondary). 26 of 630 humans outscored the AIs.
- **Tao, 19 Jul 2025** ([Mastodon](https://mathstodon.xyz/@tao/114881418225852441), opened primary, P): AI capability varies by "several orders of magnitude" with resources and reporting. Don't compare AI and human scores without a controlled, pre-declared method.
- **IMO 2026 (Shanghai, 15–16 Jul):** first officially graded AI perfect scores, Huawei "Celia" and RedNote "dots-note-3.0", both 42/42, under rules with no human intervention ([AFP via France24, 23 Jul 2026](https://www.france24.com/en/live-news/20260723-ai-catches-up-with-humans-to-score-100-at-top-maths-contest), via secondary). AxiomProver 42/42 in Lean (self-reported, [GitHub](https://github.com/AxiomMath/IMO2026)). Humans: 7 perfect scores of 666.
- **FrontierMath (Epoch AI):** v2 (12 Jun 2026) has 338 problems; Tier 4 is research level. Tier 4 top score was 5% at launch (Jul 2025). By Sep 2026 Epoch said every Tier 4 problem had been solved by some AI and called the benchmark saturated (98%); 100% runs followed Sep–Nov 2026 (aggregators mirroring Epoch, via secondary). Disclosure: OpenAI funded the benchmark and owns most problems ([Epoch, 23 Jan 2025](https://epoch.ai/blog/openai-and-frontiermath), opened primary). Next target: "FrontierMath Erdős", 68 open problems, best 2–3/68 by autumn 2026.
- **Erdős problems:**
  - *Oct 2025:* OpenAI staff claimed GPT-5 had solved 10 open Erdős problems; it had found existing papers. Hassabis: "embarrassing" (via secondary, TechCrunch 19 Oct 2025).
  - *Nov 2025–Jun 2026:* dozens of real AI contributions (Aristotle, GPT-5.x, AlphaProof, Aletheia, Claude), often with similar literature found afterwards. Failures are logged too ([Tao's wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems), opened primary, frozen at 30 Jun 2026).
  - *Tao, 14 & 17 Jan 2026* (opened primary, P): the more autonomous the AI, the shallower the result. Successes cluster in an easy "long tail"; only about 1–2% of open Erdős problems are within reach.
  - *#90, 20 May 2026* (unit distance problem): an OpenAI model disproved Erdős's conjecture. Gowers (P): he would have recommended acceptance at the *Annals* — [OpenAI](https://openai.com/index/model-disproves-discrete-geometry-conjecture/), opened primary; reactions via [SciAm](https://www.scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/).
- **AlphaEvolve** (May 2025): matched the state of the art on about 75% of 50+ problems and improved about 20%. Tao et al. tested it on 67 problems ([arXiv 2511.02864](https://arxiv.org/abs/2511.02864)). Tao's blog (P): it was "extremely good" at exploiting holes in the verification code; building an unexploitable verifier needs a human expert — [blog, 5 Nov 2025](https://terrytao.wordpress.com/2025/11/05/mathematical-exploration-and-discovery-at-scale/), opened primary.
- **First Proof** (research lemmas set by Hairer, Spielman, Kolda and others):
  - *Batch 1, Feb 2026:* models got only 2 of 10 essentially right, with hallucinated lemmas and a fake paper ([1stproof.org](https://1stproof.org/), opened primary).
  - *Batch 3, Oct 2026:* ProofCouncil 9/10 ($1,888); GPT-6 Astra 7/10 for **$36**, but only 4 of 10 with adequate citations; Anthropic workflow 3/10; open-weight 0/10 ([report](https://1stproof.org/assets/docs/batch3-report.pdf), opened primary).
- **Autumn 2026 "mathocalypse":**
  - *6 Oct:* OpenAI released 722 AI manuscripts on 372 problems. Three were withdrawn on 7 Oct (a sign error broke a chain), 14 revised, about 42% Lean-formalised ([OpenAI history](https://raw.githubusercontent.com/openai/math/1581d4cbdd69a0faf34b2089614fe2a814316a6a/history.md), opened primary; [Retraction Watch](https://retractionwatch.com/2026/10/08/openai-withdraws-preprints-722-manuscripts-unsolved-math-problems/)).
  - *Jul 2026, Jacobian conjecture:* disproved with Claude through a counterexample that is easy to check (via secondary + arXiv).
  - *Sep 2026, Fermat's Last Theorem:* fully formalised in Lean (more than 13.4M lines) by an Anthropic model; Buzzard (P): "tells us essentially nothing" mathematically, but research will soon be formalised on the fly — [Xena, 4 Sep 2026](https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/), opened primary.
  - *Nov 2026, Riemann/GRH:* claims of Lean-only proofs that no human has yet digested. Under a week old; treat as unsettled (BBC 20 Nov, via secondary; Tao blog 20 Nov, opened primary).

### 3B. Which part keeps value? (inference, supported by the above)
- **Computing and routine proof-finding: losing scarcity value, fast.** In 24 months benchmarks went from silver to perfect and from 5% to saturated, and a research lemma now costs $36.
- **Checking: rising, but changing shape.** AI games graders (AlphaEvolve), states wrong proofs confidently (First Proof batch 1, OpenAI withdrawals), and cites poorly. Lean moves trust from "is the proof right?" to "is this the statement we meant?" (Riehl, Buzzard). Software parallel: tests that can be gamed, specs that miss intent, evals that leak.
- **Understanding/exposition: the new bottleneck.** Tao's "does not produce human understanding" and "strip mining"; Litt's oral-defence proposal; First Proof's weak exposition scores.
- **Choosing questions and modelling reality: still mostly human for now.** AI attacks questions humans posed (Litt, Klainerman). Tao's risk example is opaque AI-built financial models.
- **For students (inference):** learn math as *thinking and judgement* training (proof reading, estimation, statistics, modelling). Don't treat it as a calculation skill to sell. Speed at arithmetic or routine derivations is the part AI took first.

---

## 4. Learning with AI — what the studies show, and how strong they are

| Study | Design, n | Finding | Strength / caveats | Source / tag |
|---|---|---|---|---|
| **Bastani et al.**, PNAS 122(26), 25 Jun 2025; correction 20 Aug 2025 | Field RCT, "nearly a thousand" Turkish high-school math students, GPT-4 | Practice grades +48% (GPT Base) and +127% (GPT Tutor). When access was removed: "17% reduction in grades for GPT Base". Harms "largely mitigated" by the hint-only tutor. Students used GPT-4 "as a 'crutch'" | **Strong** (randomised, large, peer reviewed). One school system, 2023 model, high-school math; the tutor removed harm but showed no gain over control | [PNAS](https://www.pnas.org/doi/10.1073/pnas.2422633122) — opened primary (abstract) |
| **Strömberg, Lei & Wu**, CEPR DP 21577, Jul 2026 (**new**) | 30-month admin panel, **26,811** Chinese students grades 7–12, 9 subjects; staggered DiD | AI adoption: homework scores +18%, homework time −30%, **monthly closed-book exams −20% within six months**; entrance exams −18% and −24%, with the full penalty after about two years. Losses concentrated in the ~80% of users who look like they outsource homework; students who kept normal homework time lost little. STEM −22%; largest losses for high achievers | **Medium-strong** (very large, long, administrative data). *Not randomised* (self-selected adoption); possible confounders (World Bank blog names parental migration); discussion paper. Tools: Doubao, DeepSeek. Shows short studies may *underestimate* harm | [VoxEU column by the authors](http://cepr.org/voxeu/columns/generative-ai-learning-penalty-secondary-school), [CEPR](https://cepr.org/publications/dp21577) — opened primary; [World Bank blog, 18 Jun 2026](https://blogs.worldbank.org/en/investinpeople/a-warning-shot-for-human-capital--evidence-of-an-ai-learning-pen) — via secondary. Ezra Klein put it to Huang on air |
| **MIT Media Lab, "Your Brain on ChatGPT"** (Kosmyna et al.), arXiv 2506.08872, v1 10 Jun 2025, v2 31 Dec 2025 | 54 participants (18 in session 4), essay writing, EEG | LLM group "displayed the weakest connectivity"; LLM users "struggled to accurately quote their own work" | **Weak** (small, preprint, essays not coding, many comparisons; formal critique says underpowered; notes 05). Still not peer reviewed as of v2 | [arXiv](https://arxiv.org/abs/2506.08872) — opened primary |
| **Microsoft Research / CMU** (Lee et al.), CHI 2025 | Survey of 319 knowledge workers, 936 examples | "higher confidence in GenAI is associated with less critical thinking, while higher self-confidence is associated with more critical thinking"; critical thinking shifts to "information verification, response integration, and task stewardship" | **Weak-medium** (correlational, self-report). Useful framing: the job shifts toward verification | [MSR](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) — opened primary |
| **Anthropic Education Report**, 8 Apr 2025 | 574,740 student conversations (from ~1M; 18-day window), Claude.ai | CS students = 36.8% of conversations in the key findings (38.6% in the body text) vs 5.4% of US degrees; "~47%" of conversations Direct (minimal engagement); Claude did Creating 39.8% and Analyzing 30.2% (Bloom), so the pyramid is "inverted" | **Descriptive only.** No learning outcomes; early adopters; vendor (stake: sells Claude / Learning Mode). Internal inconsistency 36.8 vs 38.6 | [Anthropic](https://www.anthropic.com/news/anthropic-education-report-how-university-students-use-claude) — opened primary |
| **Shen & Tamkin (Anthropic)**, 29 Jan 2026; arXiv v3 23 Nov 2026 | RCT, 52 mostly junior engineers learning a new library | Quiz about 50% with AI vs 67% without; biggest gap on debugging; no significant speed gain. **arXiv v3 corrects the gap to 15.4%** (blog still says 17%) | Small, immediate test; but randomised and against the vendor's interest | [blog](https://www.anthropic.com/research/AI-assistance-coding-skills), [arXiv 2601.20245](https://arxiv.org/abs/2601.20245) — opened primary (notes 05) |
| Course data, Stanford CS106B and CMU 15-122 (2026) | Instructor observations | CS106B: students who used AI on assignments did worse on tests (P). CMU 15-122: likely AI users averaged two letter grades lower | Anecdotal/observational | Stanford Daily, 7 Mar 2026; The Tartan, 9 Feb 2026 — opened (agent pass); exact article URLs not captured |

- **Positive counter-evidence (from notes 05, not re-opened):** 19-university RCT, 7,200 students, instructor-designed AI: +0.32 SD on proctored exams ([arXiv 2611.19099](https://arxiv.org/abs/2611.19099)). Harvard physics tutor RCT (Kestin 2025). Middlebury +0.28 SD for tutor-style use. Meta-analysis after publication-bias correction: mean about 0.08, near zero ([Boolzen 2026](https://link.springer.com/article/10.1007/s10462-026-11665-9)).
- **What the evidence converges on:** the *mode of use* decides the outcome, not AI itself.
  - Answer-getting / outsourcing harms unaided performance: Bastani GPT Base, Strömberg's 80% outsourcers, Liu et al., the Anthropic RCT's delegators.
  - Hint-style, try-first or instructor-designed use is neutral to positive.
  - Harm grows over time (Strömberg: two years to the full entrance-exam penalty), so short lab studies understate it.
- **Strength ranking:** Bastani (RCT) ≈ 19-university RCT > Strömberg (large quasi-experiment) > Anthropic RCT (small RCT) > Microsoft (survey) > MIT (small EEG preprint) > Anthropic report (usage description).

---

## 5. Does a CS degree still mean something?

### 5A. Enrolment
- **NSC final fall 2025** (15 Jan 2026): Computer & Information Science fell at every level, from −3.6% to −14.0% (graduate), while total enrolment rose +1.0%. [NSC blog, 10 Feb 2026](https://www.studentclearinghouse.org/nscblog/changing-landscape-of-postsecondary-education/): 4-year undergraduate CS −8.1% to about 606,000; graduate −14.0% to about 190,000; data science/analytics majors near 80,000. Holsapple: students "are increasingly gravitating towards programs that combine technical skills with practical, career-focused applications." — opened primary.
- **NSC preliminary fall 2026** (29 Oct 2026): CS −12.4% (4-year), −12.3% (2-year), −10.4% (graduate); "continues to decline sharply" — [NSC](https://nscresearchcenter.org/prelim-fall-enrollment-trends/), opened primary. (The ~46% institutional coverage figure is from notes 02, not re-seen.)
- **CRA Taulbee** (Jun 2026, PhD-granting departments): new CS majors 33,490 (−13%); bachelor's degrees awarded **41,858, a record (+13%)** — notes 02, opened primary. Pipeline lag: fewer entrants now means fewer graduates from about 2028–30 (inference).
- **CRA CERP pulse surveys:**
  - Oct 2025, 134 units: 62% reported lower bachelor's enrolment; declining units fell 11–15% on average; 66% agree recent graduates struggle to find jobs. Students "may be looking for a computing major that is more 'physical' and less susceptible to the impact of AI." [CRA](https://cra.org/crn/2025/10/cerp-pulse-survey-a-snapshot-of-2025-undergraduate-computing-enrollment-patterns/) — opened primary. **Misquote alert:** "enrolment fell 62%" is wrong; 62% is the share of *units* reporting a decline.
  - Apr 2026, graduate: master's down at 75% of units (−13% on average); AI master's the only growth (+7%) — [CRA](https://cra.org/crn/2026/04/cerp-pulse-survey-a-snapshot-of-2025-26-graduate-computing-enrollment-patterns/), opened primary.
- **UK:**
  - UCAS 30 Jun 2026: computing applications −10,210 vs 2025, the largest fall of any subject; engineering & technology +38,260 — [UCAS slides](https://www.ucas.com/media/231876/download), opened primary.
  - BCS, 14 Aug 2026: computing acceptances −7% (all subjects +2%) — [BCS](https://www.bcs.org/media/shuojzpm/computer-science-2026.pdf), opened primary.
- **India (contrast):** CSE is the largest B.Tech branch (3,90,245 in 2024-25; via Indian Express, via secondary). 3,098 CSE JoSAA seats went vacant in 2026, attributed mainly to new seats being added (via secondary).
- *Reading:* students are moving to "AI", "data science", computer engineering and "physical" majors, not away from tech. Historical echo: freshman CS interest fell 70% in 2000–05, and those who stayed met a strong market (notes 06).

### 5B. Outcomes
- NY Fed (by-major table released 4 Feb 2026, **2024 data**): CS 7.0% unemployment, 19.1% underemployment, $87,000 early-career median; all majors 4.2% / 39.4% / $58,000 (notes 02). Latest overall data, 2026 Q3: recent graduates 5.2% / 42.5%. The by-major table updates "annually in February", so no newer CS row until Feb 2027 — [NY Fed](https://www.newyorkfed.org/research/college-labor-market), opened primary.
- *Reading:* harder to get in, but CS graduates who land jobs mostly do graduate-level work (low underemployment).

### 5C. Curriculum changes (2025–26), new beyond notes 05
- **Pattern: top programmes kept math and theory and moved assessment back in person.** None of the programmes found eliminated math.
- **Stanford** (all opened primary):
  - CS106B added in-person TA assessments and weights exams more (Stanford Daily, 7 Mar 2026; article URL not captured). Lecturer Chris Gregg: "Nobody is getting a job at Google, Meta, Apple or wherever if they don't know those basic skills." Proctored in-person exams allowed university-wide from 1 Sep 2026.
  - The 2026-27 CS BS still requires 26 math units (CS103, CS109, calculus) plus electives ([Bulletin](https://bulletin.stanford.edu/programs/undergraduate/computer-science/bachelor-of-science)).
  - Sahami: students "have to have some fundamental knowledge to be able to assure that the code is doing the right thing."
  - A $10M "AI-aware curriculum" grant programme starts winter 2027.
- **MIT** (opened primary):
  - 6.100 fall 2026: "You may NOT use it to generate code for you." Its rationale: seasoned programmers "have solid foundations that allow them to accurately judge each others' work and AI's output." ([introcomp](https://introcomp.mit.edu/fall26/information)).
  - Ad Hoc Committee on AI (13 Aug 2026) asks "do the majority of our students need to be able to write complex programs by hand?" and proposes "AI Light"/"AI Heavy" pathways ([report](https://aiandeducation.mit.edu/report/)). No MIT-wide AI requirement.
- **CMU** (opened primary):
  - 15-122 fall 2026: "You may not use AI tools for any part of work that you will submit for credit." ([syllabus](https://www.cs.cmu.edu/~15122/syllabus.shtml)).
  - The BS core is unchanged: 15-150, 15-210, 15-213, 15-251 theory, 15-451 algorithms.
- **Berkeley:** CS 61A fall 2026 (agent unit, hand-written core; notes 05). Nothing new found beyond that.
- **Purdue:** "AI working competency" graduation requirement, approved 12 Dec 2025, for students entering fall 2026; "not focused on teaching students how to operate AI tools" ([trustees memo](https://www.purdue.edu/bot/meetings/past-meetings/2025/09.%20december/ASAC/Approval%20of%20AI%20Competency%20Requirement%20-%20Final.pdf); Purdue news, 19 Aug 2026) — opened primary.
- **Ohio State:** "AI Fluency" for the Class of 2029, "without adding credits or extending time to degree" — [OSU](https://news.osu.edu/ohio-state-launches-bold-ai-fluency-initiative-to-redefine-learning-and-innovation/), opened primary.
- **Math reshaped toward AI** (opened primary, agent): Iowa merged math into one Statistics + Discrete Probability + Linear Algebra course and cut "theoretical classes" (the one theory cut found). Northwestern's first-year engineering core is now Python + probability/statistics + linear algebra. Northeastern renamed DS 3000 "Mathematical Foundations of Artificial Intelligence".

### 5D. Fundamentals vs framework skills
- **Burning Glass Institute + Break Through Tech, "The 'Consequence' Gap"** (Nov 2026; more than 1M US entry-level postings Jan 2020–Jun 2026 plus 54 practitioners; [full PDF](https://cdn.prod.website-files.com/693f37195f5b90aff2c22f0a/6af366d680401b0ac77ae28f_Consequence-Gap-11032026%20VF.pdf), opened primary):
  - "Not one practitioner that we spoke to said that programming fundamentals had become less important." Fundamentals are often unlisted because they are "assumed" (P).
  - "nobody is vibe-coding their way into a tech engineering job."
  - Review and production skills rose: code review 7.8% (2020) to 18.5% (Jun 2026); CI/CD 19.4% and Kubernetes 14.5% (2025); testing 17.9% (H1 2026).
  - 12 of 16 languages/tools lost share in 2020–25. Up: Python 22.2% to 33.3%, Go, TypeScript, Rust. Down: Java 27.7% to 20.9%, **JavaScript 23.6% to 17.5%, CSS 12.7% to 9.0%, jQuery 5.9% to 1.9%, HTML5 5.7% to 2.7%**.
  - "The number one determining factor why people don't pass that [coding] interview is they don't critically assess the results of the AI."
  - Its reading of H1 2026: "the specific tools/technologies were less important than the domain expertise."
- CoderPad 2026 (650+ respondents): when AI is allowed, the top skill signal is "Catches & fixes AI mistakes" (66%); developers expect writing new code to lose importance and debugging and system design to gain — opened primary.
- 51 practitioners (notes 09): architecture, review, testing and debugging matter more; syntax and framework knowledge matter less.
- **Who benefits from AI tools:**
  - Juniors gain most in throughput: Cui et al., *Management Science*, 27 Feb 2026, 4,867 developers, +26.08% tasks completed, "less experienced developers had higher adoption rates and greater productivity gains" (opened primary, abstract). BIS WP 1208: juniors +67%.
  - But learning suffers without fundamentals (Anthropic RCT; §4). *Inference:* AI raises junior output; fundamentals decide whether the junior can review, debug and be trusted.

### 5E. Frontend vs Backend
- **Formal education:**
  - O*NET: Web Developers are Job Zone 3, with 46% of new hires needing a bachelor's; Software Developers are Job Zone 4, with 85% (opened primary).
  - BLS lists a bachelor's as typical for both, but for web/digital it notes requirements "range from a high school diploma to a bachelor's degree" and a portfolio can substitute (opened primary).
- **Ads:**
  - Lightcast 2023 data (via Franklin University, via secondary): front-end ads asked for a bachelor's 44% of the time with 41% listing no education; back-end ads 48% with 32% none, and there were about 10x more back-end ads.
  - Indeed: software-development ads requiring a bachelor's or higher fell from 64.4% (Jan 2019) to 56.0% (Jan 2024) ([Indeed, 27 Feb 2024](https://hiringlab.indeed.com/2024/02/27/educational-requirements-job-postings/), opened primary).
  - Economy-wide, the share was back to 19.3% in Nov 2025 (16.6% in Nov 2023), "may be fading" as a decline ([Indeed, 28 Jan 2026](https://hiringlab.indeed.com/2026/01/28/where-do-college-degrees-still-matter-in-a-skills-first-job-market/), opened primary).
  - Skills-based hiring barely changed actual hires: "not even 1 in 700 hires last year" ([BGI/HBS, Feb 2024](https://www.hbs.edu/ris/Publication%20Files/Skills-Based%20Hiring_80b90afa-f6b5-4de9-b7f8-5d8232ce20e2.pdf), opened primary).
- **Who works there:**
  - Stack Overflow 2026: "23% have no completed university degree"; learned to code last year via documentation 58.9%, AI tools 52.6%, school 14.2%, bootcamp 6.3% ([SO](https://survey.stackoverflow.co/2026/work/data/education), opened primary). No breakdown by developer type was published.
  - State of JS 2025: 23.3% no degree, 57.4% related degree (computed from counts; self-selected sample).
- **The non-degree on-ramp shrank:** 2U/edX left bootcamps in Dec 2024 after about 96,000 graduates ("no longer aligns with what the market wants", Higher Ed Dive, opened primary). Kenzie, Epicodus, Rithm, Momentum, Codeup and Lighthouse Labs closed or paused (via secondary). Reuters, 9 Aug 2025: AI was "the nail in the coffin" (opened primary).
- **Demand:** frontend share −25% since 2022 (SignalFire); HN hiring posts Front End 27% (2022) to 6.6% (Nov 2026) and Back End 23.6% to 18.8% in a year (notes 09). BLS 2025–35: web developers +3.8% vs software developers +10.2%.
- **Knowledge content:**
  - MDN's front-end curriculum core is web standards, semantic HTML, CSS, JS fundamentals, accessibility and design; frameworks are an "Extension" ([MDN](https://developer.mozilla.org/en-US/curriculum/), opened primary).
  - Backend entry-level demand clusters on CI/CD, Kubernetes, data pipelines (12.2%), APIs (about 1 in 4 ads) and integration (Burning Glass).
  - Backends written by agents are still breakable: 13–21% of two top agents' backends fell to known exploits (notes 09).
- **Synthesis (inference):**
  - *Frontend:* the paper degree mattered least, and the alternative route (bootcamp + portfolio) has narrowed most. Framework fluency is what AI commoditised first. What holds is the fundamentals a degree or serious self-study gives: how the browser, network and data layer work; accessibility; performance; and the ability to judge AI-generated UI. Moving "down the stack" (HTTP, SQL, auth, failures) is the hedge.
  - *Backend:* degree requirements are more common and the work uses degree content directly (data structures, databases, concurrency, distributed systems, security, discrete math). Routine CRUD is automatable, so the value is in correctness, reliability and security reasoning.
  - *Both:* the content of a CS degree (fundamentals, math as reasoning, systems) gained relevance as review and verification became the job. The degree as a *credential* is weakening at the margin but has not been replaced; employers simply hire fewer juniors.

### 5F. Voices on the CS degree (2025–26)
- **Hinton**, BI, 7 Dec 2025: "CS degree will be valuable for quite a long time." Also: "just being a competent mid-level programmer is not going to be a career for much longer" — opened primary.
- **Hassabis**, BI, 17 Jul 2026: "You absolutely needed to lean into STEM and computer science." — opened primary (agent).
- **Ng**, Masters of Scale, 3 Aug 2026: "if you go through college and you come out not knowing how to create software, we'll go, oh, that's kind of weird." Also "So don't code by hand. Get AI to do it for you." — opened primary (agent).
- **Altman**, Stanford/Boneh (late 2025, via TOI): "This is a really cool time to be studying computer science… a high-leverage moment" — via secondary.
- **LeCun:** not against a CS major; take "the maximum number of courses on foundations (e.g. math, physics, or EE courses) rather than… the trendy technology du jour" (BI, 22 Dec 2025, via secondary).
- **Hany Farid**, BI, 28 Sep 2025: the old line "go study computer science… It is future-proof" — "that changed in four years." — opened primary (agent).
- **Musk:** college optional; if you go, study broadly (§1A).

---

## 6. Don't say on stage
1. "Elon Musk says math becomes more important." He said "Physics (with math)" (Jul 2025) and later "Math done by humans is cooked hard" (Oct 2026).
2. Don't attribute "math is cooked / mathematicians as artisans, it's over" to Musk. That is Wissner-Gross (transcript speaker label error).
3. "Jensen Huang says study math." He said "physical sciences" (2025) and "deep math" (All-In, via secondary). He also said forgetting basic math may not matter and doubted most people need PDEs (Sep 2026).
4. "AI is bad at math." As of Nov 2026, AI posts perfect IMO scores and a saturated FrontierMath Tier 4, and has solved Erdős #90.
5. "AI solved the Riemann Hypothesis." It is a days-old, Lean-only claim no one has digested; Clay still lists RH as open.
6. "62% drop in CS enrolment." 62% is the share of departments reporting *a* drop.
7. "MIT proved ChatGPT rots your brain." 54 people, essay task, preprint.
8. "The Chinese study proves AI lowers grades 20%." It is a large but non-randomised study; the harm was concentrated in outsourcing-style use.
9. "Bootcamp + React is a fine alternative to a degree." That route has thinned the most.
10. "Math/statistics is in most AI job ads." That is true of data-science ads, not AI-engineer ads.

---

## Gaps
- **Musk:** x.com could not be opened; all posts come from archive mirrors (consistent across 2–3 mirrors). The China Media Group interview and the Kamath podcast were not watched. No Musk quote saying "math is more important because of AI" was found, but absence after targeted searching is not proof.
- **Huang:** NYT official Klein transcript not opened (two machine transcripts used). The All-In "deep math" line is secondary only, with an unclear episode date (notes 09 said 15 Sep; the page now says 7 Nov 2026).
- **Tao "strip mining" clip:** the original video/event was not identified.
- **Altman:** the University of Tokyo "You can't beat AI on raw horsepower" quote appears on a fan site only. Not verified, not used.
- No credible 2025–26 large-sample figure on the share of AI/ML job ads requiring math or statistics. The best peer-reviewed source uses 2019 data.
- No pay premium for *math or statistics* skills specifically. All premiums are for "AI skills" (21–62%, method-dependent).
- BLS per-occupation AI-exposure categories are in an XLSX, not downloaded.
- AI math (delegated pass): FrontierMath 2026 scores come from aggregators (Epoch's live leaderboard did not render). IMO 2026: OpenAI and DeepMind participation unknown, and Huawei's result is AFP-only. Tao's Erdős wiki stops at 30 Jun 2026. The RH/GRH claims are under a week old.
- Learning: the Strömberg paper PDF was not read (only the authors' column, abstract and the World Bank blog). Bastani's correction content not read. No 2026 replication of the MIT EEG study found. No outcome data in any Anthropic education report.
- CS degree: no Canadian data; no Stack Overflow education-by-developer-type breakdown; frontend vs backend degree-in-ads data is 2023 Lightcast via a university career page plus small samples; no primary bootcamp market-size series; no CS-specific NY Fed row newer than 2024 data.
- No Iranian data on math requirements in local job ads (Jobinja, Quera) was searched in this pass.
