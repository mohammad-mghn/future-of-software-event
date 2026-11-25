# What exactly to learn, in what order, 2026-2032

Research date 2026-11-25. Builds on notes 04, 05, 06; their findings are cited as "notes 05" and not repeated.
Tags: `OPENED-PRIMARY`, `OPENED-SECONDARY`, `SNIPPET-ONLY`. Older than 2023-11-25 = *historical*. Codes such as **[S3]** are reused in sections 8-9. "Inference" = this file's judgement. "Stake" = who gains if you believe it; where none is given, the author is academic, a survey body or an individual with no product found. Ten publisher pages block scripts and were read through a crawler.

## Answer first

1. **One deep, two literate.** In about 400,000 agent sessions, moving from novice to intermediate went with about double the verified success (15% to 28-33%); expert added little [L1]. So be competent in several layers and deep in one you can be accountable for.
2. **Math:** producing answers and proofs got cheap; understanding did not. Statistics rises for anyone who ships AI. Deep linear algebra and optimisation pay mainly in research and training.
3. **Systems:** rising. The clearest gap between what agents can write and what they can diagnose.
4. **Frontend:** "turn this mockup into components" is shrinking fast. Judging, testing and designing human control of agents is gaining, but ads do not yet pay for all of it.
5. **AI engineering:** literacy for everyone, a job for some. Evals and permissions last; frameworks do not.
6. **Human skills:** real but mixed evidence. Two large studies find social skills *falling* inside AI-exposed jobs.
7. **Order (inference).** Year 1: programming by hand, SQL, HTTP, Linux, Git, basic probability. Years 1-2: one deep layer with something running. Years 2-3: tests, evals, security. Years 3-4: harder depth (consistency, statistics, or human-control interfaces). Years 4-6: own outcomes: users, incidents, people and agents. Review tools once a year.

**For the host: is frontend to backend right?** Right direction, wrong label. Pure frontend titles are shrinking fastest [S1][S2], and diagnosis and architecture remain weak for agents [S4][S6]. But routine CRUD backend is also automated, backend labels fell too [S2], and backend ads are very senior (2.2% entry-level [S10]). Do not swap React for CRUD. Keep the interface as proven strength and learn the whole request path: browser, network, database, failure. Becoming "the person who understands why it broke" is the goal. Confidence: medium (US, startup-heavy data).

## 1. Math

**Conclusion.** Value is moving from calculating to understanding, modelling and checking. Rising for AI builders (statistics) and research; flat for product engineers; useful but shallow for founders. Olympiad-level AI lowers the price of a solved problem, not the need to know whether the model fits reality.

**Evidence**
- **[M1]** Tao: proof scarcity is ending and human understanding is falling behind; opaque models in lending and finance are the risk — [Nature, 22 Oct 2026](https://www.nature.com/articles/d41586-026-03389-1) `OPENED-PRIMARY` (stake: mathematician; discloses gifted AI access and fundraising [elsewhere](https://teorth.github.io/tao-web/ai-views-interview.html) `OPENED-PRIMARY`). He keeps mathematics for himself and outsources coding — [Harvard, 20 Nov 2026](https://current.fas.harvard.edu/stories/dark-moment-mathematics-terence-tao-says-future-quite-bright) `OPENED-PRIMARY`. OpenAI released 722 AI manuscripts in October; one panelist dismissed the write-ups themselves as nonsense — [MIT News, 20 Nov 2026](https://news.mit.edu/2026/following-mathocalypse-mathematicians-consider-future-1120) `OPENED-PRIMARY`.
- **[M2]** Voices for: Hassabis, still do maths and CS, true for at least ten years — [Stanford GSB, 18 Jun 2026](https://www.gsb.stanford.edu/insights/demis-hassabis-thinks-were-foothills-singularity) `OPENED-PRIMARY` (sells AI). LeCun, minimum-maths CS majors may fail to adapt — [BI, 22 Dec 2025](https://www.businessinsider.com/yann-lecun-advice-ai-careers-computer-science-degree-2025-12) `OPENED-SECONDARY`; proving can be automated, concepts remain — [NTU transcript, 12 Nov 2026](https://ceointerviews.ai/interview/3333814/) `OPENED-SECONDARY`. Sanderson, like a gym: machines lifting more does not remove the benefit of lifting — [3Blue1Brown, 2026](https://www.youtube.com/watch?v=LKrwhjOI8Nc) `OPENED-PRIMARY` (transcript).
- **[M3]** Against or mixed: Huang recommends deep science and deep maths ([Yahoo, 15 Sep 2026](https://creators.yahoo.com/lifestyle/story/jensen-huang-shares-his-blunt-advice-for-young-people-looking-to-survive-and-thrive-in-the-ai-era-193637392.html) `OPENED-SECONDARY`), but told Ezra Klein that lost hand arithmetic may not matter, doubts most people need PDEs, and expects better *systems thinkers* — [transcript, 25 Sep 2026](https://exa.ai/library/podcast/p92lv69h8sg/episode/jcvbvnnz45t) `OPENED-SECONDARY` (sells chips). WEF employers expect a small net decline for reading/writing/mathematics (notes 05).
- **[M4]** Why statistics: evals are experiments; an illustrative case needs about 1,000 questions to detect a 3-point difference — [Miller, Nov 2024](https://arxiv.org/abs/2411.00640) `OPENED-PRIMARY`. Server settings alone moved a coding benchmark by 6 points — [Anthropic, 5 Feb 2026](https://www.anthropic.com/research/infrastructure-noise) `OPENED-PRIMARY` (AI vendor).
- **[M5]** Ads almost never say "math": statistics/probability 9 of 241 AI-engineer ads ([page](https://siliconainews.com/careers/roles/ai-engineer)), 20 of 160 ML-engineer ([page](https://siliconainews.com/careers/roles/ml-engineer)), 31 of 57 data-science ([page](https://siliconainews.com/careers/roles/data-science)), 2 of 57 research-scientist, where ML (38) and publications (15) imply it ([page](https://siliconainews.com/careers/roles/research-scientist)); Oct 2026, all `OPENED-PRIMARY`. Limits: AI-written page, 47 employers, US/lab-heavy.
- **[M6]** Curricula: maths/statistics core rose from 41 hours (CS2013) to 55 (CS2023) — [CS2023, Jan 2024](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm) `OPENED-PRIMARY`. Split 29 discrete, 11 probability, 10 statistics, 5 linear algebra — [draft, Aug 2023, *historical*](https://csed.acm.org/wp-content/uploads/2023/09/MSF-Version-Gamma-V3.pdf) `OPENED-PRIMARY`.
- **[M7]** Logic: Kleppmann predicts cheap proofs move the difficulty to writing the right specification — [8 Dec 2025](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html) `OPENED-PRIMARY`. Money is arriving; a researcher warns the hype may fade — [SIGPLAN, 17 Nov 2026](https://blog.sigplan.org/2026/11/17/whats-going-on-with-program-verification/) `OPENED-PRIMARY`.

| Who | Which math | Depth (inference) |
|---|---|---|
| Research / training engineer | linear algebra, probability, calculus, optimisation | deep: a full course each |
| AI engineer | confidence intervals, sampling, base rates; vectors and similarity | working |
| Product / front / backend | logic, sets, graphs, state machines; percentiles | working |
| Designer, founder | sampling, A/B tests, expected value | literate |

## 2. Systems understanding

**Conclusion.** Rising, with the best capability evidence in this file. Hiring evidence is supportive, not unanimous.

- **[S1]** Since 2022, front-end share of engineering roles fell about 25%, the steepest specialty; AI/ML +39%, forward-deployed +30% — [SignalFire, 22 Jun 2026](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026) `OPENED-PRIMARY` (investor; "backend generalists absorb UI" is its interpretation).
- **[S2]** Hacker News hiring posts: Front End 27% (2022), 15.6% (2025), 6.6% now; Back End 23.6% to 18.8% in a year; "distributed systems" 19 mentions to 8 — [hntrends, 14 Nov 2026](https://www.hntrends.com/2026/november.html) `OPENED-PRIMARY`. Only 244 posts that month. *Counter-evidence included.*
- **[S3]** In 241 AI-engineer ads: backend services 82, distributed systems 49, system design 42, reliability 31, React 21 (plus 29 preferred) — same [page](https://siliconainews.com/careers/roles/ai-engineer) `OPENED-PRIMARY`.
- **[S4]** On-call root-cause, 1,079 tasks: best accuracy 25.3% realistic, 10.0% hard — [ORCA-bench, 29 Sep 2026](https://arxiv.org/html/2607.28545v3) `OPENED-PRIMARY` (co-authors sell SRE AI). A newer model reached 40.6% on a 32-task subset. Another testbed: 53-61% for the stronger agents, 40-54% with realistic noise — [SREGym, 15 Nov 2026](https://arxiv.org/html/2605.07161) `OPENED-PRIMARY`. Results depend on the test and are improving.
- **[S5]** Big outages were interactions, not bad functions: a database permission change doubled a file past a hidden limit — [Cloudflare, 18 Nov 2025](https://blog.cloudflare.com/18-november-2025-outage/) `OPENED-PRIMARY`; similar reading of AWS and others — [ThousandEyes](https://www.thousandeyes.com/blog/internet-report-2026-biggest-outage-risks) `OPENED-SECONDARY` (sells monitoring).
- **[S6]** Building on its own code for 5-15 steps, the best of nine models solved 18.5% — [Multi-step SWE, 4 Nov 2026](https://arxiv.org/abs/2611.07166) `OPENED-PRIMARY` (benchmark company). Structural erosion rose in 77% of runs — [SlopCodeBench, May 2026](https://arxiv.org/abs/2603.24755) `OPENED-PRIMARY`. Caveat: one replication finds agents can refactor when told, they just do not volunteer — [Qin, 8 Nov 2026](https://eyuansu62.github.io/blog/2026/slopcodebench-cant-design-or-wont-refactor-en/) `SNIPPET-ONLY`.
- **[S7]** 51 practitioners on what matters more now: architecture/design (15), review (13), testing (12), debugging (9); less: syntax (10 of 46), framework knowledge (5) — [Apr 2026](https://www.arxiv.org/pdf/2604.06342) `OPENED-PRIMARY`.
- **[S8]** Published exploits broke 21% and 13% of backends from two top agents — [LeoTrace, 10 Nov 2026](https://leotrace.io/benchmarks/baxbench-2026-11/) `OPENED-PRIMARY` (sells the fix).
- **[S9]** Median pay: architect $102k, back-end $85k, full-stack $80k, front-end $70k; front-end respondents have less experience — [Stack Overflow 2026](https://survey.stackoverflow.co/2026/work/data/compensation) `OPENED-PRIMARY` (opt-in).
- **[S10]** 6,358 backend ads: 2.2% entry-level; its frontend pay and entry figures are polluted by retail jobs, so not used — [InterviewStack, 27 Jun 2026](https://interviewstack.io/blog/backend-developer-vs-frontend-developer-2026) `OPENED-PRIMARY` (interview-prep vendor).

**Order for a frontend developer (inference; start from failures you already see).** 1 HTTP, DNS, TLS, caching. 2 Linux processes, ports, shell. 3 SQL, schema, indexes, query plans. 4 Transactions and concurrency. 5 APIs, auth, idempotency. 6 Deploy, CI, logs, traces. 7 Queues, retries, replication. 8 Decision records and postmortems. Resources in section 8.

## 3. Frontend

**Conclusion.** Commoditised: markup, landing pages, first-draft components, framework trivia. Holding or gaining: layout and interaction judgement, accessibility, performance, human control of agents, product sense. A quality gap is not automatically a paid job.

- **[F1]** Going down: UI tasks were a top AI-coding use, so simple UI jobs may be disrupted sooner than backend — [Anthropic, Apr 2025](https://www.anthropic.com/research/impact-software-development) `OPENED-PRIMARY` (vendor). More than a million votes on [Arena WebDev, Nov 2026](https://arena.ai/leaderboard/code/webdev) `SNIPPET-ONLY`, which compare models with each other, not with developers. About 63% of vibe-tool users are non-developers — [Vercel, Sep 2025](https://vercel.com/blog/what-you-need-to-know-about-vibe-coding) `SNIPPET-ONLY` (vendor). Rauch: agents make 60% of Vercel deployments, from 3% in January — [Oct 2026](https://content.delphi.co/guillermo/60-of-vercel-deployments-are-now-0d5832d140be) `SNIPPET-ONLY` (vendor).
- **[F2]** Lawson: frontend is the part people feel safe handing over, much expertise is nearly obsolete, but architecture choice and rescuing bad sites remain — [23 Aug 2026](https://nolanlawson.com/2026/08/23/the-asteroid-currently-hitting-frontend-web-development/) `OPENED-PRIMARY`. The strongest honest pessimist.
- **[F3]** CSS resists: 28% of respondents' CSS is AI-made and 26% use none ([State of CSS 2026](https://2026.stateofcss.com/en-US/usage/) `OPENED-PRIMARY`) against 54% of all code ([State of AI 2026](https://2026.stateofai.dev/en-US/) `OPENED-PRIMARY`). Different opt-in samples.
- **[F4]** Accessibility got worse: 95.9% of one million home pages fail, errors +10.1%; WebAIM suspects AI-assisted coding but did not measure it — [WebAIM, 30 Mar 2026](https://webaim.org/projects/million/) `OPENED-PRIMARY` (sells accessibility services). Yet only about 2% of 159,404 frontend ads name web accessibility, against 16% performance optimisation and 10% design systems (our division) — [Draup, Jun 2026](https://resources.draup.com/hubfs/Research%20Reports/2026/AI_Skills_Durability_Engineering_Data_ML_2026.pdf) `OPENED-PRIMARY` (vendor; its "AI-safe" labels are opinion).
- **[F5]** **New territory.** In 960 decisions by 80 people, unsafe approvals fell from 55% with a normal prompt to 32.5% with a full log and 24.2% with a purpose-designed screen; the last step is uncertain — [arXiv 2611.28454](https://arxiv.org/abs/2611.28454) `OPENED-PRIMARY`. Of developers who review code carefully, 61% still approve some agent actions without close review (n=203) — [6 Nov 2026](https://arxiv.org/abs/2611.10058) `OPENED-PRIMARY`.
- **[F6]** Design engineering is real but small: 788 open roles in one tracker, Nov 2026 — [Design Drift](https://designdrift.io/roles/design-engineer) `OPENED-PRIMARY`; React in 90%, accessibility in 38% of 29 ads — [DesignCodeJobs, 10 Nov 2026](https://designcodejobs.com/guides/design-engineer-vs-product-designer) `OPENED-PRIMARY`. Design hiring at 12 tech giants is down 48% from 2019 [S1]. Half of 900 surveyed designers have shipped AI-generated code — [AI in Design 2026](https://stateofaidesign.com/chapters/craft) `OPENED-PRIMARY` (investors).
- Gaps: no 2026 Abramov essay on this was found; Comeau's well-known essay discusses GPT-4 and its date was not verified; Osmani's 2026 "comprehension debt" is in notes 05.

## 4. AI engineering

**Conclusion.** Software engineering with an unpredictable component. Learn to measure, limit and pay for it. Not everyone should take the job title.

- **[A1]** Ng's map from 10,000+ ads: building AI apps, software fundamentals, coding agents, shaping the build; he speaks of skills for all developers, not one role — [14 Aug 2026](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map) `OPENED-PRIMARY` (sells courses).
- **[A2]** 315 AI ads, Jul-Sep 2026: agents 39%, production/shipped 39%, ownership 37%, customers 28%, evals 23%, monitoring 17%, security 16%, retrieval 11%, MCP 9%, frameworks 9%, fine-tuning 8%, prompting 5%, PyTorch 5%; degree 12% — [Square1](https://www.square1ai.com/research/what-ai-job-ads-ask-for-2026) `OPENED-PRIMARY` (sells bootcamps; published counts). A 2,620-ad count gives evals only 4.8% (notes 05): samples differ.
- **[A3]** Huyen: focus on fundamentals such as evaluation and retrieval — [Pragmatic Engineer, 5 Feb 2025](https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen) `OPENED-PRIMARY` (book author). Husain/Shankar, error analysis first (notes 05).
- MCP rose from 0.3% to 4.5% of HN posts in a year [S2]; fast arrival is not durability.

| Skill | Expected life (inference) |
|---|---|
| Evals and error analysis; permissions and prompt-injection limits; cost, latency, tracing | long |
| Context selection, retrieval ideas, tool and API design | medium to long |
| MCP and agent patterns | medium; protocol may change |
| Framework APIs, model-specific prompting | short: learn on demand |

Only 241 of 1,824 AI ads in one sample were AI engineers [M5], and AI terms appear in 7.2% of all Indeed ads (notes 05). So: literacy for all.

## 5. Human skills

**Conclusion.** Coordinating, questioning and explaining: moderately supported. "Soft skills are the new hard skills": a slogan. Routine selling and comforting text are *not* protected.

- **[H1]** For: firms adopting AI asked for more problem-solving, process and social skills; 164 million US ads, 2021-Mar 2026 — [Wang, Raj, Bidwell](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7199118) `OPENED-PRIMARY` (abstract; association).
- **[H2]** Against: relative social-skill demand fell 3.4% in GenAI-adopting roles, 7 million ads — [Gulati et al., v3 Aug 2026](https://arxiv.org/abs/2503.09212) `OPENED-PRIMARY`; fell about 2.5% a year inside exposed occupations in four European countries, 2018-2023, judgement flat, though total ads asking for social skills still grew — [LISER](https://www.liser.lu/assets/How-AI-reshapes-skill-demand-in-European-firms-2026-11-en-1.pdf) `OPENED-PRIMARY`.
- **[H3]** Pay: in AI roles only "resilience" had a clear premium (5%) among complementary skills — [Stephany et al., Mar 2026](https://doi.org/10.21203/rs.3.rs-8893293/v1) `SNIPPET-ONLY`.
- **[H4]** Strongest experiment: skill at leading AI agents correlates 0.81 with causal impact leading humans; good leaders ask more questions — [Weidmann, Xu, Deming, Apr 2025](https://www.nber.org/papers/w33662) `OPENED-PRIMARY` (lab). Deming 2017 on social-plus-math jobs is *historical*.
- **[H5]** Empathy labelled human is valued more (nine studies, n=6,282) — [Nature Human Behaviour, Jun 2025](https://www.nature.com/articles/s41562-025-02247-w) `OPENED-PRIMARY`. Sales: voice agents clearly trailed humans (n=366) — [Nov 2026](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7013259) `OPENED-PRIMARY`; but a vendor's chat seller matched human associates at 1.8% of the cost — [Oct 2026](https://arxiv.org/abs/2610.25461) `OPENED-PRIMARY`.
- **[H6]** Forward-deployed engineers: 71% of employers' ads ask for clear communication — [Nov 2026](https://open-fde.ai/jobs/market/) `OPENED-PRIMARY`; postings up over 1,000% year on year from a small base — [Lightcast via Fortune, Sep 2026](https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/) `OPENED-SECONDARY`; flat over the last month — [A10X](https://a10x.dev/fde-index/2026-11) `OPENED-PRIMARY`. Mostly senior.
- Taste: no direct wage evidence found, only ads and opinions.

## 6. Why learn deeply when AI answers everything

**Conclusion.** You need enough knowledge to ask, choose and reject. Literacy captures most of the benefit; depth is for accountability.

- **[L1]** Novice to intermediate gives most gain; when trouble hits, novices abandon 19% of sessions versus 5-7%. Domain understanding predicted success more than coding background — [Anthropic, 16 Jun 2026](https://www.anthropic.com/research/claude-code-expertise) `OPENED-PRIMARY` (vendor; observational; model-rated).
- **[L2]** 20 professionals: novices with an agent finished more but understood less (22% vs 51%) — [CMU/Microsoft, Oct 2026](https://arxiv.org/abs/2610.14660) `OPENED-PRIMARY` (tiny sample).
- **[L3]** 640 Kenyan entrepreneurs, RCT: no average effect; weak performers about 10% worse, strong perhaps 15% better. Difference: which advice they chose — [Management Science, Jul 2026](https://pubsonline.informs.org/doi/full/10.1287/mnsc.2024.06909) `OPENED-PRIMARY` (GPT-4, 2023).
- **[L4]** 30 learning scientists: learn first without AI, practise with it, apply mostly alone; evidence quality is poor — [Minnesota, Oct 2026](https://www.cehd.umn.edu/AI-expert-consensus-report-2026) `OPENED-PRIMARY`.
- **[L5]** Self-testing, spacing, mixed practice and productive failure are well supported; difficulty alone is not a virtue — [Binks, Jan 2026](https://doi.org/10.1111/jep.70349) `OPENED-PRIMARY` (abstract). Theory that inner models let you judge output — [Oakley et al., 2025](https://arxiv.org/abs/2506.11015) `OPENED-PRIMARY`. Karpathy: rebuild without copy-paste — [17 Oct 2025](https://www.dwarkesh.com/p/andrej-karpathy) `OPENED-PRIMARY`.

**Loop (inference from L4, L5, notes 05):** predict → try alone → ask for a hint → build without copying → break it and explain aloud → retest a week later without AI.

## 7. Half-life

**Conclusion.** Old, widely adopted ideas last. Labels die while the idea is absorbed. "Principles last, tools don't" is only half true.

Stack Overflow use, all respondents ([2015](https://survey.stackoverflow.co/2015/), [2020](https://survey.stackoverflow.co/2020/) *historical*; 2026 [languages](https://survey.stackoverflow.co/2026/technology/data/languages), [web](https://survey.stackoverflow.co/2026/technology/data/web-framework), [databases](https://survey.stackoverflow.co/2026/technology/data/databases)) `OPENED-PRIMARY`; samples differ, and use is not pay:

| | 2015 | 2020 | 2026 |
|---|---|---|---|
| SQL | 48.0 | 54.7 | 58.4 |
| Python | 23.8 | 44.1 | 58.0 |
| JavaScript | 54.4 | 67.7 | 62.0 |
| TypeScript | - | 25.4 | 43.8 |
| PostgreSQL | - | 36.1 | 57.9 |
| Java | 37.4 | 40.2 | 27.6 |
| jQuery | - | 43.3 | 19.7 |
| AngularJS | 13.3 | 16.1 | 6.0 |

- **[T1]** 633,386 job records over 30 years: SQL peaked in 2024, fifty years after birth; Java keeps 48% of peak, Linux 39%, Flash 1%. Of tools peaking 1996-2007, 45% fell below half their peak within five years; of 2008-2020 peakers, 11%. Named tools outlasted vague skill phrases — [Skillenai, 16 Sep 2026](https://skillenai.com/2026/09/16/30-years-of-tech-tools-novell-is-at-zero-sql-is-at-an-all-time-high) `OPENED-PRIMARY` (data vendor; survivor bias). There is no 2010 survey; this covers it.
- **[T2]** Chinese graduate ads 2016 to 2024: Flash 1,468 to 5, "DIV+CSS" 1,397 to 3, soft skills steady at 55-65% — [ACM, 14 Oct 2026](https://dl.acm.org/doi/full/10.1145/3830360.3830368) `OPENED-PRIMARY`. CSS lives; the label died.
- **[T3]** Legacy still pays a little: jQuery in 11,657 and AngularJS in 7,062 of 132,900 current listings — [StackTrends, undated](https://stacktrends.dev/technologies/) `SNIPPET-ONLY`. Hadoop test invitations fell 33% — [HackerRank, Apr 2025](https://www.hackerrank.com/blog/skills-in-retreat-developer-skills-on-the-decline-in-2025/) `SNIPPET-ONLY` (vendor).

**Plain answer.** Learned in 2010: SQL, Linux, Java, JavaScript still pay; Flash and Perl barely do (1-2% of peak). Learned in 2015: SQL, Python, JavaScript yes; AngularJS and Hadoop mostly legacy. Learned in 2020: Python, TypeScript, React, PostgreSQL yes; jQuery is maintenance.

**Rule (inference).** Give most hours to what passes three of four: older than ten years or already mass-adopted; survived a rename; helps you *check or answer for* work; cannot be relearned in a month. Everything else: just in time.

## 8. Paths

All resource links returned HTTP 200 on 25 Nov 2026 from the research machine, not tested inside Iran; respect each service's regional terms. (fa) = Persian text seen. No outcome study exists for these paths. Everyone: two no-AI sessions a week [L4].

**CS student. Deep: systems [S4][S6]. Literate: statistics, AI engineering.**
1. Program by hand: [Composing Programs](https://www.composingprograms.com/), [Quera](https://quera.org/problemset) (fa) [S7].
2. Logic, then statistics: [Discrete Math](https://discrete.openmathbooks.org/dmoi4.html), [OpenStax Statistics](https://openstax.org/books/introductory-statistics-2e/pages/1-introduction) [M4][M6].
3. OS and data: [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/), [Use The Index, Luke](https://use-the-index-luke.com/) [S3][S4].
4. Vectors and models: [Immersive Linear Algebra](https://immersivemath.com/ila/index.html), [ML Crash Course](https://developers.google.com/machine-learning/crash-course?hl=fa) (fa) [M6].
5. Tools and review: [Missing Semester](https://missing-semester-fa.github.io/) (fa, 2020) [S7].
6. One [CS146S assignment](https://github.com/mihail911/modern-software-dev-assignments/) with an agent [A1].
*Proof:* a database service, load-tested, deliberately broken, with a postmortem and oral defence.

**Absolute beginner. Deep: programming by hand [L1][L4]. Literate: data/web basics, clear writing.**
1. [Jadi's free course](https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AF%D8%B1%DA%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-mk1019/) (fa) [L4].
2. One language: [javascript.info](https://fa.javascript.info/) (fa) or [Python for Everybody](https://www.py4e.com/) [T1].
3. [Quera](https://quera.org/problemset) problems, AI off [L2].
4. [Pro Git](https://git-scm.com/book/fa/v2) (fa) [S7].
5. [SQLBolt](https://sqlbolt.com/) [T1].
*Proof:* a 150-line tool one real person uses; explain every line [L1].

**Frontend developer (host). Deep: the request path [S1][S3][S4]. Literate: AI engineering, human-control UI.**
1. [High Performance Browser Networking](https://hpbn.co/) (*historical*, 2013; check new protocols on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)) [S5].
2. Linux and Docker: [Jadi's collection](https://faradars.org/how-to-learn/jadi-mirmirani) (fa) [S3].
3. [SQLBolt](https://sqlbolt.com/), [Use The Index, Luke](https://use-the-index-luke.com/), then [PostgreSQL concurrency](https://www.postgresql.org/docs/current/mvcc.html) [T1][S3].
4. Build and deploy: [Full Stack Open](https://fullstackopen.com/en/), [Twelve-Factor](https://12factor.net/fa/) (fa) [S1][S3].
5. Failure: [SadServers](https://sadservers.com/scenarios), [post-mortems](https://github.com/danluu/post-mortems) [S4][S5].
6. [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/), [People + AI Guidebook](https://pair.withgoogle.com/guidebook/), [ARIA patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) [A2][F4][F5].
*Proof:* an agent-approval app: schema with a concurrency test, retries, traces, keyboard-accessible approval screen, measured user mistakes before and after.

**Backend developer. Deep: correctness and reliability [S4][S8]. Literate: AI engineering, customers.**
1. [PostgreSQL MVCC](https://www.postgresql.org/docs/current/mvcc.html), [Jepsen consistency](https://jepsen.io/consistency) [S6].
2. [Gossip Glomers](https://fly.io/dist-sys/) [S3].
3. [PortSwigger](https://portswigger.net/web-security) [S8].
4. [SRE book](https://sre.google/sre-book/table-of-contents/) (*historical*), [SadServers](https://sadservers.com/scenarios) [S4].
5. [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/), [error bars](https://arxiv.org/abs/2411.00640) [M4][A2].
*Proof:* audit an agent-written API, publish exploits found, fixes and one incident drill.

**UI/UX designer. Deep: interaction and user research [F5][F6]. Literate: front-end code, experiment statistics.**
1. [GOV.UK user research](https://www.gov.uk/service-manual/user-research) [F6] (research in 72% of 147 product-designer ads).
2. [javascript.info](https://fa.javascript.info/) and [React](https://fa.react.dev/) (fa) [F6].
3. [W3C easy checks](https://www.w3.org/WAI/test-evaluate/easy-checks/) [F4].
4. [People + AI Guidebook](https://pair.withgoogle.com/guidebook/) [F5].
5. [OpenStax Statistics](https://openstax.org/books/introductory-statistics-2e/pages/1-introduction), intervals and tests [M4].
*Proof:* a coded prototype, observed user errors before/after, accessibility report.

**Founder / product builder. Deep: one customer problem [L1][L3]. Literate: software judgement, numbers.**
1. [How to talk to users](https://www.ycombinator.com/library/Iq-how-to-talk-to-users) [L3].
2. [User research](https://www.gov.uk/service-manual/user-research); write why you *rejected* advice [L3].
3. Spec and tests: [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) [A1].
4. [OWASP Top 10](https://owasp.org/projects/top-ten) [S8].
5. [OpenStax Statistics](https://openstax.org/books/introductory-statistics-2e/pages/1-introduction) [M4].
*Proof:* ten interviews, a small product with repeat use, a continue-or-kill memo.

**Career changer. Deep: your old field turned into software [L1]. Literate: Python/SQL, evals.**
1. List ten painful problems; interview ex-colleagues: [YC](https://www.ycombinator.com/library/Iq-how-to-talk-to-users) [L1].
2. [Python for Everybody](https://www.py4e.com/) or [Jadi](https://faradars.org/how-to-learn/jadi-mirmirani) (fa) [T1].
3. [SQLBolt](https://sqlbolt.com/) [T1].
4. Domain test set: [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) [A2].
5. Deploy: [Twelve-Factor](https://12factor.net/fa/) (fa) [A2].
*Proof:* a tool colleagues use plus an eval set only an insider could write. Honest note: entry ads are scarce (notes 05).

## 9. Value going up / flat / down

| Skill | Direction | Evidence | Confidence |
|---|---|---|---|
| Diagnosing live systems | up | S4, S5 | high (capability), medium (pay) |
| Architecture, long-term design | up | S6, S7, S9 | medium-high |
| Review, testing, evals | up | S7, A2, notes 05 | high |
| Security, permissions | up | S8, F5 | medium-high |
| Statistics for AI builders | up | M4, M5 | medium |
| Logic, specification | up, early | M7 | low-medium |
| Deep linear algebra, optimisation | up for few, flat for most | M2, M5 | medium |
| Hand calculation, proof production | down | M1, M3 | medium-high |
| Domain understanding | up | L1, L3 | medium |
| Agent-control interfaces | up, young | F5 | medium-low |
| Accessibility, performance | need up, pay unclear | F4 | medium |
| Mockup-to-component work | down | S1, S2, F1 | high |
| Pure CRUD backend | flat to down | S2, S8 | low-medium |
| SQL, Linux, HTTP, Git | flat, high | T1, table | high |
| Communication, coordination | up or flat | H1, H2, H4 | medium |
| Empathy, trust | mixed | H5 | low-medium |
| Taste | claimed up | none direct | low |
| Framework and prompt recipes | down | A2, S7 | medium |

## 10. Claims to avoid

1. "Frontend is dead." Titles shrink in startup-heavy data; the work moves.
2. "Backend is safe from AI." [S2][S8]
3. "Agents cannot debug production." Scores run from 10% to 61% by test and noise [S4].
4. "AI olympiad gold makes math useless" or "math is now the most wanted skill." Ads show neither [M5].
5. "Huang says study math." He says both things [M3].
6. "Soft skills are the safest bet." Two big studies say otherwise [H2].
7. "AI can't sell or show empathy." Mixed [H5].
8. "Vibe coding caused inaccessible websites." WebAIM did not measure it.
9. "Good approval design cuts unsafe approvals by half" without n=80 and lab context.
10. "Tools die, principles live." Named tools outlasted vague phrases [T1].
11. "Skills expire in 2.5 years." No traceable measurement was opened.
12. "Arena proves AI beats frontend developers." It ranks models.
13. "Experts get far more from AI." Past intermediate, little [L1].
14. "Everyone must become an AI engineer." [A1]
15. "Backend pays more because of backend." Experience and country are not controlled [S9].
16. Any of this as a fact about Iran: no Iranian job-ad data was found.
