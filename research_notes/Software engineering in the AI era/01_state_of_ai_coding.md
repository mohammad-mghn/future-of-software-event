# The measured state of AI in software development (as of 24 November 2026)

How to read these notes
- Window: 2023-11-24 to 2026-11-24. Anything older is marked HISTORICAL.
- Tags. **OPENED-PRIMARY**: I opened the original page or paper and saw the number there. **OPENED-SECONDARY**: I opened a news or analysis page that reports it. **SNIPPET-ONLY**: I saw the number only in a search extract. Tags are not upgraded. If one bullet mixes tags, each part is labelled.
- "Stake" says who paid for or published the number and what they gain.
- Disclosure for the stage team: these notes were compiled by an Anthropic model (Claude). Anthropic is itself the subject or publisher of several numbers below (flagged). Please have a human open those links before using them.
- Some PDFs and long pages were read in part. Where that matters it is said in Gaps.

## 1. Adoption: how many developers use AI, how often, and how much do they trust it?

### Takeaway
Use is now near-universal in every large 2026 survey, and use of *agents* (not just chat or autocomplete) went from a minority to the default within about a year. Trust did not collapse and did not become unconditional: in 2026 the largest group says they trust output when they can easily check it, and only about 7% trust it for important decisions.

### Cited Findings

**Stack Overflow Developer Survey 2026** — published Oct 2026; 30,903 responses, 169 countries; self-selected web survey, question bases vary. Stake: Stack Overflow sells AI data and knowledge products and benefits from a "verification and attribution" story.
- **OPENED-PRIMARY** Trust question (n = 14,304, my sum of the published counts): 48.0% trust output when they can easily verify it; 16.3% for low-risk tasks only; 16.3% for many tasks but not important decisions; 12.3% do not trust it for most tasks; 6.6% trust it for many tasks including important decisions — [SO 2026 overview](https://survey.stackoverflow.co/2026/)
- **OPENED-PRIMARY** Favourable view 62.0% (31.6% very + 30.4% somewhat); unfavourable 21.5% (n = 14,428, my sum) — [SO 2026 overview](https://survey.stackoverflow.co/2026/)
- **OPENED-PRIMARY** 66% use coding assistants or agents, 63% use general chat tools; 73% reported as using coding assistants or agents daily (the page does not state the base clearly); 31% of respondents to the hours question (n = 10,926) use AI 4+ hours a day — [SO 2026 AI section](https://survey.stackoverflow.co/2026/ai)
- **OPENED-PRIMARY** 41.3% make no effort to avoid AI; top reason to avoid it is fear of losing job skills or training a replacement, 17.1% — [SO 2026 AI section](https://survey.stackoverflow.co/2026/ai)
- **OPENED-SECONDARY** Only 17.2% say they use no AI tools; 26.2% use automated agent workflows — [DEVOPSdigest, 16 Oct 2026](https://devopsdigest.com/developers-positive-about-ai-trust-remains-conditional)
- How this is commonly misquoted: (a) "Trust jumped from 31% to 87%". Stack Overflow's own page makes this comparison, but the question and answer options changed completely between years. 2025 asked about trust in *accuracy* on a scale; 2026 asked *when* you trust it, and "only if I can easily verify" counts as trust. Not a trend. (b) "80% of developers use AI at least an hour a day". That 80% is of the 10,926 people who answered the hours question, almost all of whom are daily AI users, not of all 30,903.

**Stack Overflow 2025 and 2024 (baselines)**
- **OPENED-PRIMARY** 2025: 84% use or plan to use AI; 51% of professional developers use it daily (about 33,700 answers to that question, roughly 49,000 total respondents, derived from the page's own percentages) — [SO 2025 AI](https://survey.stackoverflow.co/2025/ai)
- **OPENED-PRIMARY** 2025: 46% distrust accuracy vs 33% trust; 3% "highly trust". Experienced developers are the most cautious (2.6% highly trust, 20% highly distrust). Top frustration, 66%: answers that are almost right. 45% say debugging AI code takes longer. 52% did not use agents or stuck to simpler tools; 38% had no plan to adopt agents — [SO 2025 AI](https://survey.stackoverflow.co/2025/ai)
- **OPENED-PRIMARY** 2024: 76% use or plan to use; 62% currently use; 72% favourable; 43% trust accuracy vs 31% sceptical — [SO 2024 AI](https://survey.stackoverflow.co/2024/ai)
- **OPENED-PRIMARY** Current use in SO's series: 44% (2023), 62% (2024), 79% (2025). Agent use 31% in the 2025 survey and 59% in a smaller April 2026 pulse survey. Among *learners*: use rose 63.0% to 73.3% (2024 to 2025), positive sentiment fell 72.2% to 52.8%, worry about AI taking their job stayed at 15.0% — [SO blog, 30 Sep 2026](https://stackoverflow.blog/2026/09/30/getting-ready-for-2026-results-a-look-back-on-developer-survey-findings/)
- Conflict to know about: the 2025 "trust" figure is 33% on the 2025 results page, while other Stack Overflow and press text says 29% or 31%. Different sub-samples or wordings. Use 46% distrust / 33% trust with the 2025 page as the link.
- Sample shrinkage: roughly 65,400 (2024, derived), 49,000 (2025, derived), 30,903 (2026). Fewer and possibly different people answer each year.

**JetBrains Developer Ecosystem Survey 2026** — fielded May–July 2026, more than 15,000 professional developers, 8 languages, regional quotas, reweighted. Stake: JetBrains sells IDEs and AI agents.
- **OPENED-PRIMARY** 90% used AI coding agents at work at least weekly, 68% daily. Claude Code 39% at work (18% in Jan 2026), GitHub Copilot 21% (29% a year earlier), Codex 16% (3% in January), Cursor 12% — [JetBrains, 18 Aug 2026](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/)
- **OPENED-PRIMARY** Self-reported share of last month's work code: about 47% fully agent-generated, 38% written with AI help, 27% fully manual (sums over 100% because of answer buckets). 22% say over 80% of their code is agent-generated; one in five write no code without AI help. Over-80% users are about a quarter of seniors, fewer juniors; about 16% of developers in Europe and UK vs 32–35% in East Asia — [JetBrains, 26 Aug 2026](https://blog.jetbrains.com/research/2026/08/how-much-code-do-developers-really-let-agents-write/)
- **OPENED-PRIMARY** 2025 baseline: 24,534 developers, 194 countries, 85% regularly use AI tools; 62% rely on at least one assistant, agent or AI editor — [JetBrains 2025](https://blog.jetbrains.com/research/2025/10/state-of-developer-ecosystem-2025/)
- How this is commonly misquoted: "half of all code is written by AI". It is developers' own estimate in wide buckets, one month, at work.
- Iran or Persian-speaking developers: none of the sources opened breaks them out. The JetBrains survey is not offered in Persian.

**GitHub Octoverse 2026** — platform telemetry, 1 Oct 2025 to 30 Sep 2026, public and private repos; published 28 Oct 2026, edited 6 Nov 2026. Stake: GitHub/Microsoft sells Copilot and agent hosting.
- **OPENED-PRIMARY** More than 40% of pull requests in Sept 2026 *started* with an agent, vs 17% in March 2026; 110 million such PRs in September, about 6x March. 225 million+ developers (accounts). 17.9 billion pushes, 34.3 billion commits, 1.3 billion merged PRs in 12 months. 55% of Copilot monthly active users use agentic features, 35% a year earlier. Agent-involved PRs merged within two weeks: 83% in Feb, 90% in Sept, vs about 86% for others — [Octoverse 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)
- **OPENED-PRIMARY** Definitions from the report's glossary: "agent-started" means the first draft came from a coding agent GitHub can detect; detection is a floor; 2024/2025 figures were recalculated on new definitions and may differ from old reports — [Octoverse 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)
- **OPENED-PRIMARY** Same-day conflict inside the same company: Microsoft's earnings call on 28 Oct 2026 said agents "now open more than a third" of PRs on GitHub — [Microsoft FY27 Q1 call](https://www.microsoft.com/en-us/investor/events/fy-2027/earnings-fy-2027-q1). "Started" and "open" are probably different measures. Say "more than a third to more than 40%, depending on definition".
- How this is commonly misquoted: "40% of GitHub's code is written by AI". It counts pull requests, not lines, and says nothing about who rewrote the draft, whether it was useful, or whether it is professional work. From June 2026 about 55% of commits came from brand-new repositories (same source), so throwaway projects weigh heavily.
- **OPENED-PRIMARY** Octoverse 2025 baseline: 180 million+ developers, 43.2 million merged PRs per month, nearly 80% of new developers used Copilot in their first week — [Octoverse 2025](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/). Do not compare its commit count with 2026; the definitions changed.

**DORA** — Google Cloud research programme, survey-based. Stake: Google sells AI and cloud; the report also has paid sponsors.
- **OPENED-PRIMARY** 2025: nearly 5,000 technology professionals, survey 13 June–21 July 2025 plus 100+ hours of qualitative data. 90% use AI at work; more than 80% believe it raised their productivity; 30% report little or no trust in AI code — [DORA 2025 PDF](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf). Median two hours a day; 24% trust it a great deal or a lot; 59% say code quality improved — [Google blog, 23 Sep 2025](https://blog.google/technology/developers/dora-report-2025/)
- **OPENED-PRIMARY** 2024: more than 75% rely on AI for at least one daily responsibility; 39% little or no trust — [DORA 2024 announcement](https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report)
- **OPENED-PRIMARY** There is **no 2026 DORA annual report**. DORA announced on 3 Sept 2026 that it will not run the survey this year — [DORA on LinkedIn](https://www.linkedin.com/posts/doradotdev_gbgb-activity-7501291221559214080-9CEy). Any "DORA 2026 survey" number on a slide is wrong.

### Inferences
- The safe one-line summary: by mid-2026 roughly nine in ten professional developers in large surveys use AI or agents weekly, and about half of those asked trust it only when they can check it.
- Survey respondents are self-selected, online, and skew toward tool-engaged developers, so "90%" is likely an upper-end estimate for the whole profession.

### Gaps
- No probability-sample survey of developers found. No Iran-specific adoption data found.
- The full SO 2026 raw data was not downloaded; response-base sums are my arithmetic from published tables.

## 2. "Share of code written by AI" at named companies: who said it, what does it measure, why can it mislead?

### Takeaway
Published figures run from about 10% to over 90%, and they count different things: lines merged, "new code", "contributions", commits, pull requests started by an agent, or developers' guesses. None is audited, most come from companies selling the tool, and none measures how much *human work* disappeared.

### Cited Findings

| Who | Figure | Exact unit | When, where | Tag |
|---|---|---|---|---|
| Google (Pichai) | 75% | "all new code", AI-generated **and approved by engineers** | 22 Apr 2026 blog | OPENED-PRIMARY [blog.google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/) |
| Google (CFO Ashkenazi) | nearly half | "all code generated by AI" | Q3 2025 call, 29 Oct 2025 | OPENED-PRIMARY [abc.xyz](https://abc.xyz/investor/events/event-details/2025/2025-q3-earnings-call-2025-4oi4bac_q9/default.aspx) |
| Google (Pichai) | more than a quarter | new code, then reviewed and accepted by engineers | 29 Oct 2024 call | SNIPPET-ONLY for the number; the [official remarks page](https://blog.google/inside-google/message-ceo/alphabet-earnings-q3-2024/) was opened only in part |
| Microsoft (Nadella) | "maybe 20%, 30%" | code in repos, for some projects only; a spoken guess | 29 Apr 2025, LlamaCon | OPENED-SECONDARY [CNBC](https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html) |
| Anthropic | more than 80% | lines merged to production attributable to Claude; footnote says leadership's 90%+ includes scripts and experiments | May 2026 | OPENED-PRIMARY [anthropic.com](https://www.anthropic.com/institute/recursive-self-improvement) |
| Anthropic | more than 90% | "contributions to our codebase", unit undefined | Sept 2026, IPO fact sheet (Nov 2026) | OPENED-PRIMARY [fact sheet](https://ipo.anthropic.com/documents/us/factsheet.pdf) |
| Meta (CFO Li) | +30% **output per engineer** since start of 2025; +80% YoY for power users | not a code share; "output" undefined | 28 Jan 2026 call | OPENED-SECONDARY [transcript](https://www.fool.com/earnings/call-transcripts/2026/01/28/meta-meta-q4-2025-earnings-call-transcript/) |
| Uber (CEO) | about 10% | committed code built by autonomous agents, checked before commit | May 2026 call | OPENED-SECONDARY [Fortune](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) |
| Uber (CTO) | about 70% | committed code in IDEs that is AI-generated | Mar 2026 X post | SNIPPET-ONLY [The AI Record](https://the-ai-record.com/topics/ai-written-code) |
| DX (500+ customer firms) | more than half of new code | "AI-authored code", definition not visible in the part I read | Q2–Q3 2026 | OPENED-PRIMARY [DX Q3 2026](https://getdx.com/uploads/state-of-ai-impact-in-engineering-q3-report.pdf) |
| JetBrains survey | about 47% | developers' own estimate, fully agent-generated | May–Jul 2026 | OPENED-PRIMARY [JetBrains](https://blog.jetbrains.com/research/2026/08/how-much-code-do-developers-really-let-agents-write/) |
| Science paper (independent) | 29% (US only) | Python functions on GitHub "with substantial AI support", classifier-detected | end of 2024 | OPENED-PRIMARY [Science](https://www.science.org/doi/10.1126/science.adz9311) |

- Uber shows how one firm, within about two months, can report about 10% (fully autonomous) and about 70% (any AI in the IDE). The definition is the number. [Fortune](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) (OPENED-SECONDARY), [The AI Record](https://the-ai-record.com/topics/ai-written-code) (SNIPPET-ONLY).
- **OPENED-PRIMARY** Anthropic itself says the typical engineer merged 8x as much code per day in Q2 2026 as in 2024 and that this is "almost certainly an overstatement of the true productivity gain" — [anthropic.com](https://www.anthropic.com/institute/recursive-self-improvement). Its S-1 reportedly gives 45x daily code volume per engineer for Q3 2026 vs 2024 — OPENED-SECONDARY [sublimecoding](https://sublimecoding.com/blog/how-much-code-is-written-by-ai).
- **OPENED-PRIMARY** Most recent Google statement (Q3 2026 call, 28 Oct 2026) gave **no** percentage of AI code; it claimed teams shipped 35% more code with 30% fewer errors "in the last few weeks" using a new model — [Alphabet Q3 2026](https://abc.xyz/investor/events/event-details/2026/2026-Q3-Earnings-Call-2026-Ujou16CTw9/default.aspx). Vendor claim about its own product, no method given.
- **OPENED-PRIMARY** Independent counterweight: in the Science study (30M+ commits, 160,097 developers, 6 countries, 2019–2024) AI use was linked to a 3.6% rise in quarterly commits, and the gain accrued only to senior developers; early-career developers used AI most and showed no significant benefit — [Science, 22 Jan 2026](https://www.science.org/doi/10.1126/science.adz9311). Pre-agent data.

How this is commonly misquoted
- "75% of Google's code is written by AI" drops "new" and drops "approved by engineers". It never meant 75% of the codebase or 75% fewer engineers.
- "AI writes 90% of code" (industry-wide) takes one AI lab's internal figure and applies it to everyone.
- "Output per engineer +30%" at Meta is not a code share and is not defined.

Why the numbers mislead (synthesis)
1. Different denominators (lines, commits, PRs, functions, contributions). 2. "Generated" can include accepted autocomplete. 3. Lines count volume; see GitClear, Faros and NBER below on how much gets deleted or never ships. 4. Sellers report on their own product. 5. Code typing is only part of the job: Chen & Stratton impute 30–40% of engineer time to writing code — OPENED-PRIMARY [paper](https://fion.ac/jellyfish.pdf).

### Inferences
- A good stage sentence: "These numbers tell you who typed, not who decided."

### Gaps
- No primary 2026 code-share figure from Microsoft, Meta, Amazon or OpenAI was found. Pre-2026 figures should be dated on the slide.
- Anthropic's S-1 was not opened on SEC.gov; only the fact sheet was.
- The Science abstract and the research group's press page assign 23% and 24% to France and Germany in opposite order (press page SNIPPET-ONLY). Use only the US 29%.

## 3. Capability: what can AI do alone, and how far can benchmarks be trusted?

### Takeaway
Measured capability on well-specified, automatically checkable coding tasks rose very fast through 2026, to the point that METR's original test suite ran out and its replacement is mostly based on estimates. At the same time the two flagship coding benchmarks were declared unreliable by their own promoters, and tests that ask "would a maintainer merge this?" or require judgement give much lower scores.

### Cited Findings

**METR time horizon** — METR is a non-profit evaluator; it also runs access-based assessments inside labs (see section 6). What it measures: the human-expert length of task an agent completes with 50% success. It is **not** how long an AI can work alone.
- **OPENED-PRIMARY** Original, 19 Mar 2025: doubling about every 7 months over 6 years; best model then (Claude 3.7 Sonnet) about 1 hour at 50%; near 100% on tasks under 4 minutes and under 10% on tasks over about 4 hours — [METR Mar 2025](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/). The page now carries an out-of-date notice.
- **OPENED-PRIMARY** TH1.1, 29 Jan 2026: suite from 170 to 228 tasks; post-2023 doubling 131 days (165 under the old suite); only 5 of 31 long (8h+) tasks had measured human times — [METR TH1.1](https://metr.org/blog/2026-01-29-time-horizon-1-1/)
- **OPENED-PRIMARY** 8 May 2026: METR added Claude Mythos Preview and a notice that measurements above 16 hours are unreliable; 8 Sept 2026: page marked no longer actively updated. FAQ says explicitly that an 8-hour horizon does not mean AI can automate jobs — [METR time horizons](https://metr.org/time-horizons/)
- **OPENED-PRIMARY** Latest, 20 Nov 2026 (four days before this note): new harder suite TH2 (36 tasks) plus TH1.1 and MirrorCode, 15 models up to Claude Opus 5.5 and GPT-6 Astra. Doubling about every 3.6 months on TH1.1+TH2 (95% CI 2.08–4.94). Up to 27 hours on the verifiable part of TH2. Pooled 50% horizon about 40 h for GPT-6 Astra (CI 13–2,645) and 39 h for Opus 5.5 (CI 12–1,253). Human baselines directly support only 9% of the task-time estimates. Agents show worse judgement than human experts on tasks without clear feedback. METR worries easy-to-run containerised tests could overestimate real-world ability, and says the new tasks cover less general software work than TH1.1 — [METR Q4 2026](https://metr.org/blog/2026-11-20-q4-2026-capability-update/)
- **OPENED-SECONDARY** Of the AI-designed evaluations in one TH2 task, none was good enough for METR staff to call useful for their research — [MIT Technology Review, 20 Nov 2026](https://www.technologyreview.com/2026/11/20/1149399/the-most-misunderstood-graph-in-ai-just-got-a-major-update/)
- **OPENED-PRIMARY** Independent statistical critique (UC Berkeley, Oct 2026): recomputing on 228 tasks and 26 AIs, the link between human time and AI difficulty is nearly flat between 2 and 30 minutes, so a jump from 3 to 30 minutes is much easier than from 30 minutes to 5 hours — [arXiv 2610.12466](https://arxiv.org/abs/2610.12466)
- How this is commonly misquoted: "AI can now work alone for 40 hours" or "can do 40 hours of a developer's job". Wrong on three counts: it is task difficulty, at 50% success, on clean testable tasks, with a confidence interval from about 12 hours to over 1,000.

**SWE-bench family**
- **OPENED-PRIMARY** 23 Feb 2026: OpenAI stopped reporting SWE-bench Verified. Auditing 138 often-failed problems (27.6% of the set), at least 59.4% had flawed tests or descriptions; all frontier models tested could reproduce some gold patches or verbatim task details — [OpenAI Feb 2026](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/). Stake: OpenAI competes on this leaderboard.
- **OPENED-PRIMARY** Epoch AI (independent) rates it "Flawed" (review 3 Sept 2026), citing contamination, broken tests and a known reward hack giving a perfect score — [Epoch review](https://epoch.ai/benchmarks/swe-bench-verified/review)
- **OPENED-PRIMARY** 8 July 2026: OpenAI audited SWE-Bench Pro (731 public tasks), estimated about 30% of tasks broken (27.4% by pipeline, 34.1% by human reviewers) and withdrew its earlier recommendation. Frontier pass rate had risen from 23.3% to 80.3% in eight months — [OpenAI Jul 2026](https://openai.com/index/separating-signal-from-noise-coding-evaluations)
- **OPENED-PRIMARY** Oct 2026: SWE-Bench Pro V2 repaired or retired 480 of 731 tasks (23 engineers, 404 hours). On the 642 V2 tasks frontier agents resolve up to 99.4%; a 51-task Hard split spreads systems from 52.9% to 98.0% — [arXiv 2610.24206](https://arxiv.org/abs/2610.24206). Scale AI and Reflection AI authors. Reads both ways: better tests, higher scores, and near saturation again.
- **OPENED-PRIMARY** METR, 10 Mar 2026: 4 maintainers of 3 repos reviewed 296 AI PRs that passed the tests; roughly half would not be merged. Grader scores were 24.2 points (SE 2.7) above maintainer decisions, after adjusting for the fact that maintainers accept only 68% of real human patches. Newest model tested was Claude Sonnet 4.5, agents had one shot — [METR note](https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/). Misquote: "half of AI code is bad". It covers 2024–25 models, no iteration, and METR says it is not a capability ceiling.

**Newer agentic benchmarks (2026)**
- **OPENED-PRIMARY** FrontierCode 2.0 (27 Oct 2026), maintainer-written mergeability criteria: best model 47.3% (Claude Opus 5.5), then 44.0% (GPT-6 Astra), next 28.9% — [Cognition](https://cognition.com/blog/frontier-code-2.0). Stake: Cognition sells the Devin agent. It is a weighted score, not a pass rate.
- **OPENED-PRIMARY** ExpertCrowd-SWE (9 Nov 2026): 100 expert tasks, 87 projects, 11 languages, 7 models, 3,495 runs; top 67.3% and 63.7%; on 80 of 100 tasks no model earns full credit on all five runs — [arXiv 2611.13246](https://arxiv.org/abs/2611.13246). Tasks were chosen to be hard for current models. Toptal authors.
- **OPENED-PRIMARY** SWE-Marathon (June 2026): 20 ultra-long tasks; frontier agents solved fewer than 30%; 13.8% of runs attempted reward hacking — [arXiv 2606.07682](https://arxiv.org/abs/2606.07682). Predates autumn 2026 models.
- **OPENED-PRIMARY** SWE-EVO (v6 May 2026): 48 release-sized tasks; the abstract's best model 25%; GPT-5.2 fell from 72.8% on SWE-bench Verified to 22.9% here — [arXiv 2512.18470](https://arxiv.org/abs/2512.18470). Pre-summer models.
- **OPENED-PRIMARY** DeepSWE (2026): 113 original tasks; a judge disagreed with its verifier 1.4% of the time vs 32.4% for SWE-Bench Pro's inherited tests — [arXiv 2607.07946](https://arxiv.org/abs/2607.07946). Datacurve (data vendor).
- **OPENED-PRIMARY** OpenAI internal data (18 Nov 2026): agents' estimated unaided success on 2–4 hour research tasks rose from 23% (March) to 46% (Oct), and on 4–8 hour tasks from 13% to 35%; but 25% for writing inference/serving code vs 79% for monitoring runs — [OpenAI](https://openai.com/index/research-acceleration-jagged-frontier/). Vendor data; estimates; task mix may change.

### Inferences
- Direction of travel (up, fast) is robust across METR, Epoch, vendors and third parties. The *level* ("how many hours", "what percent") is not robust.
- Good teaching contrast: near 99% on a repaired test-based benchmark vs 47% on a would-you-merge-it benchmark in the same month.

### Gaps
- I did not read all of METR's 20 Nov 2026 post (about 230,000 characters). The 40 h / 39 h values came from its Appendix B via an automated page reader; re-open before putting on a slide.
- OpenAI's and METR's 80%-reliability horizons were not captured.

## 4. Productivity: what do the trials and telemetry say, and why do they conflict?

### Takeaway
Task-level speed-ups are real in most studies, uncertain in size, and shrink at every step from typing to shipped, used software. The famous "19% slower" trial is valid for early-2025 tools and expert maintainers, and its own authors now say it no longer describes current tools, but their follow-up failed to produce a clean number.

### Cited Findings

**Randomised experiments**
- **OPENED-PRIMARY** METR RCT, July 2025 (tools of Feb–June 2025): 16 experienced open-source developers, 246 real tasks in repos they knew for about 5 years; AI allowed made tasks take **19% longer**; they forecast 24% faster and afterwards believed 20% faster — [arXiv 2507.09089](https://arxiv.org/abs/2507.09089). 95% CI +2% to +39% — [METR Feb 2026](https://metr.org/blog/2026-02-24-uplift-update/). METR's own page now labels the results out of date — [METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). Stake: independent non-profit.
- **OPENED-PRIMARY** METR follow-up, 24 Feb 2026 (data from Aug 2025): 57 developers, 143 repos, 800+ tasks. Time change −18% for 10 returning developers (CI −38% to +9%) and −4% for 47 new ones (CI −15% to +9%). Both intervals include zero. METR calls the data an unreliable signal: many developers refused to work without AI, 30–50% held back tasks, pay fell from $150 to $50/h, multi-agent time is hard to record. METR believes developers are likely more sped up in early 2026, but the data is only very weak evidence of how much — [METR Feb 2026](https://metr.org/blog/2026-02-24-uplift-update/)
  - Misquotes: "METR reversed itself and AI is now 18% faster" (not significant, 10 people) and "METR proved AI slows developers" (16 people, early-2025 tools, expert maintainers). The perception gap (felt +20%, measured −19%) is the durable lesson.
- **OPENED-PRIMARY** METR survey, 11 May 2026: 349 technical workers (87 software engineers), self-report: median 3x speed, 1.4–2x value. METR lists reasons for scepticism, including that its 2025 participants overestimated by 40 points and that METR staff reported the lowest gains — [METR May 2026](https://metr.org/blog/2026-05-11-ai-usage-survey/). Perceptions, not measurement; about 2% response rate outside its network (SNIPPET-ONLY).
- **OPENED-PRIMARY** Cui et al., *Management Science*, 27 Feb 2026: three field RCTs (Microsoft, Accenture, a Fortune 100 firm), 4,867 developers, autocomplete-era Copilot: +26.08% completed tasks (SE 10.3%); larger for less experienced — [Management Science](https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535). Stake: run by the companies; two Microsoft Research authors; MIT GenAI Initiative funding. 95% range is roughly +6% to +46% (my arithmetic). A fourth, abandoned Accenture experiment pointed the other way (−39%, not significant); including it gives +21.3% — SNIPPET-ONLY [working paper](https://www.mertdemirer.com/Papers/Demirer_AI_productivity.pdf). Counts pull requests, not value. Misquote: "AI makes developers 26% more productive" without "pull requests, autocomplete, 2022–23 tools".
- **OPENED-PRIMARY** Google internal RCT (2024): 96 engineers, one lab task, internal 2024 tools; best estimate about 21% less time — [arXiv 2410.12944](https://arxiv.org/abs/2410.12944). 96 vs 114 minutes; raw difference p = .038, but the adjusted 21% has p = .086 and is **not statistically significant** per the authors — [HTML version](https://arxiv.org/html/2410.12944v3). Misquote: stating 21% as proven.
- **OPENED-PRIMARY, HISTORICAL (Feb 2023)** GitHub Copilot RCT, Peng et al.: 55.8% faster (CI 21–89%) writing one JavaScript HTTP server — [arXiv 2302.06590](https://arxiv.org/abs/2302.06590). Sample of 95 freelancers: SNIPPET-ONLY. Stake: Microsoft/GitHub. Misquote: "Copilot makes developers 55% faster" as a general fact.
- **OPENED-PRIMARY** Echoes of AI (preregistered, 151 participants, 95% professionals): AI users finished a feature in 30.7% less time (observational phase); when *other* people later changed that code without AI there was no significant difference in speed or quality — [arXiv 2507.00788](https://arxiv.org/abs/2507.00788). Strongest counter-evidence to "AI code is unmaintainable". Small Java app.
- **OPENED-PRIMARY** Skill formation RCT, Anthropic, 29 Jan 2026: 52 mostly junior engineers learning a new Python library; AI group scored 50% vs 67% on a quiz (d = 0.738, p = 0.01); about two minutes faster, not significant. *How* they used AI mattered: those who asked for explanations kept their scores — [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills). The arXiv text gives the gap as 4.15 of 27 points, 15.4% — SNIPPET-ONLY [arXiv 2601.20245](https://arxiv.org/abs/2601.20245). Small sample, immediate quiz, chat assistant not an agent, self-published by a vendor whose interest runs the other way.
- **OPENED-PRIMARY** Meta-analysis (LMU Munich, May 2026): 23 studies, 27 effects, literature to 2025; productivity g = 0.33 (CI 0.09–0.58), smaller in open-source and enterprise settings than in labs; learning g = 0.14 (CI −0.18 to 0.47), not significant — [arXiv 2605.04779](https://arxiv.org/abs/2605.04779). Moderates both hype and the "AI destroys learning" claim.

**Large observational studies, 2026 (not randomised)**
- **OPENED-PRIMARY** Demirer, Musolff & Yang, NBER 35275 (May, rev. Sept 2026): 500,000+ GitHub developers with AI telemetry, matched event study. Autocomplete, interactive agents and autonomous agents raise commits by a cumulative 30%, 180%, 240%; the 240% becomes 80% for projects and **30% for releases**. In four app marketplaces new apps rose sharply but total usage did not — [NBER](https://www.nber.org/papers/w35275). Stake: two authors are paid Microsoft consultants; uses Microsoft data; working paper, not peer-reviewed; mostly open source.
- **OPENED-PRIMARY** Chen & Stratton, Harvard job-market paper (19 Nov 2026): 720,542 workers, 655 firms, 445M work events from Jellyfish, staggered adoption. Agents (on top of assistants): +44.0% lines, +36.0% commits, +35.7% PRs, but +13.7% issues (borderline significant) and +18.0% epics; review-to-merge time +56.1%. Assistants: −1.5% issues, +3.4% epics. Employment: no detectable effect (agents −2.6%, cannot rule out a fall of up to 15.6%) — [paper](https://fion.ac/jellyfish.pdf). Stake: Jellyfish data, vendor did not review science; Stripe, Schmidt, Stone funding. Unpublished.
- **OPENED-PRIMARY** Microsoft CLI-agent study (July 2026): +24.0% merged PRs per engineer per day (CI 14.5–33.7%), synthetic control, adopters self-selected, no quality outcome, Microsoft authors — [arXiv 2607.01418](https://arxiv.org/html/2607.01418)
- **OPENED-PRIMARY** Microsoft Copilot dose-response (May 2026): 16,223 engineers, 43 weeks, +40.5% PRs in highest-use vs zero-use weeks, same engineer — [arXiv 2606.00438](https://arxiv.org/abs/2606.00438). Observational; vendor.
- **OPENED-PRIMARY** "2x mandate" case study (CMU/Stanford, rev. Nov 2026): 802 developers, 196,212 PRs. Target reached only in month ten; about +12% at adoption, rising with use; review load per reviewer doubled; gains similar across seniority — [arXiv 2607.01904](https://arxiv.org/abs/2607.01904)
- **OPENED-PRIMARY** CMU, Cursor in open source (MSR 2026): large but *transient* velocity gain, persistent rise in warnings and complexity — [arXiv 2511.04427](https://arxiv.org/abs/2511.04427). CMU, agents in open source (MSR 2026): warnings about +18%, cognitive complexity about +39%; velocity gains only where the agent was the first AI tool — [arXiv 2601.13597](https://arxiv.org/abs/2601.13597)

**Vendor telemetry**
- **OPENED-PRIMARY** Faros, Apr 2026 (22,000 developers, 4,000+ teams, low- vs high-adoption quarters): epics per developer +66%, task throughput +33.7%, PR merge rate +16.2%, code churn +861%, bugs per developer +54%, incidents-to-PR ratio +242.7% ("a ratio, not a probability"), median review time +441.5% — [Faros Apr 2026](https://www.faros.ai/blog/ai-acceleration-whiplash-takeaways)
- **OPENED-PRIMARY** Faros, 18 Sept 2026 (most recent 12 months, teams already at high adoption): incidents per PR only +14.5%, but monthly incidents +125.4%, PRs merged with no review +76.3%, PR size +71.8%, time in QA +300.6%; deployment frequency now rising — [Faros Sept 2026](https://www.faros.ai/blog/ai-speed-trap-takeaways). Stake: sells AI-engineering analytics. Correlational (Spearman). Do not compare the two reports as a trend; Faros says they are separate cross-sections (SNIPPET-ONLY for that note).
- **OPENED-PRIMARY** DX, Oct 2026 (500+ firms): complexity-weighted PRs per developer per week 1.43 to 2.51 (+75.5%) over four quarters; PR size +122% YoY; first-review wait 82 vs 40 minutes in the highest vs lowest AI-share firms; change failure rate roughly flat; share of time on new features only 57% to 59% (last figure SNIPPET-ONLY) — [DX Q3 2026](https://getdx.com/uploads/state-of-ai-impact-in-engineering-q3-report.pdf). Stake: sells measurement. DX's flat failure rate conflicts with Faros.
- Stanford (Denisov-Blanch), 2025 conference talk, not a paper. Dataset size 100,000+ engineers, 600+ companies, mostly private repos: **OPENED-PRIMARY** [talk transcript](https://www.youtube.com/watch?v=tbDDYKRFjhk). Average gain about 15–20% after subtracting rework; 30–40% on simple new-project tasks, 0–10% on complex existing code (136 teams, 27 firms; the speaker calls these orientative): **SNIPPET-ONLY**, read in a search extract of the same transcript. His site says the picture "started to change" in Dec 2025 but gives no new number; he co-founded a firm that sells this measurement — OPENED-PRIMARY [yegordb.com](https://yegordb.com/). Later published talk figure: about 10% median (46 vs 46 matched teams), SNIPPET-ONLY [ai.engineer](https://ai.engineer/talks/JvosMkuNxF8-quantify-ai-roi-in-software-engineering-stanford).

**DORA's conclusion**
- **OPENED-PRIMARY** 2024: more AI adoption was associated with −1.5% delivery throughput and −7.2% stability — [DORA 2024](https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report). 2025: throughput association turned positive, instability still increased; AI's main role is that of "an amplifier" of existing strengths and dysfunctions — [DORA 2025](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf). Survey-based associations with small standardised effects; not causal. Note that Faros Apr 2026 says the opposite of amplifier (quality fell regardless of engineering maturity; SNIPPET-ONLY, [report PDF](https://pages.faros.ai/hubfs/AI_Engineering_Report_2026_The_Acceleration_Whiplash_Faros.pdf)).

Why the results conflict
1. **Tool generation**: autocomplete (2022–23), chat/editor (early 2025), agents (late 2025 on). Never mix them in one chart without dates.
2. **What is measured**: minutes on a set task, PRs, issues, epics, releases, incidents, feelings. Effects shrink as you move toward shipped software (NBER; Chen & Stratton).
3. **Who**: novices on toy tasks gain most; experts in huge familiar repos gained least in 2025.
4. **Selection**: enthusiasts adopt first, and by 2026 many refuse to work without AI, so clean RCTs became hard to run (METR).
5. **Who pays**: most large datasets come from firms selling AI or selling AI measurement.
6. **Self-report runs high**: 3x felt speed (METR survey) vs roughly +10–40% in most measured output.

### Inferences
- Honest headline: "Faster at writing: yes. Faster at shipping: some. Faster at shipping something people use: not shown yet."
- Review and verification are the repeatedly observed bottleneck (NBER, Chen & Stratton, Faros, DX, 2x-mandate). This is the most useful, non-scary message for learners: verification skill is the scarce one.

### Gaps
- No clean 2026 RCT of agentic coding among professional developers was found. Say so on stage.
- No field study found that randomises AI and then measures post-merge defects on private code.

## 5. Quality, security and cost

### Takeaway
Code *volume* problems (larger changes, less reuse, more review load, more absolute incidents) are well supported, mostly by correlational and vendor data. "AI code is X times buggier" claims are weaker than they sound. Security of raw model output improved in autumn 2026 but still fails roughly 4 in 10 of one vendor's test tasks. Token cost became a board-level issue in 2026.

### Cited Findings

**Quality**
- **OPENED-PRIMARY** GitClear, 2026 (623 million code changes, 2023–26): duplicated blocks +81%, within-commit copy/paste +41%, refactoring moves −70%, two-week churn +15%, error-masking constructs +47% — [GitClear](https://www.gitclear.com/the_ai_code_quality_maintainability_gap). It also says the headline is not that AI writes bad code. Stake: sells code analytics. **Key caveat**: these are calendar trends across all developers. GitClear's live index attributes only 9.3M of 1.2B lines (about 0.8%, my arithmetic) to a detected AI — OPENED-PRIMARY [GitClear index](https://www.gitclear.com/industry_stats/ai_code_quality_signal_graphs). Misquote: "AI caused 81% more duplication".
- **OPENED-PRIMARY** CodeRabbit, 17 Dec 2025: 470 open-source PRs (320 AI-co-authored, 150 assumed human): 10.83 vs 6.45 issues per PR, about 1.7x — [CodeRabbit](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report). Stake: sells AI code review, and its own tool did the counting. Small sample, authorship guessed, not adjusted for PR size in what I read. Misquote: "AI code has 1.7x more bugs": these are review-tool findings, not bugs.
- **SNIPPET-ONLY** Counter-evidence: a 2025 University of Naples study found AI code simpler and more repetitive, with different rather than uniformly worse defects — reported by [The Register](https://www.theregister.com/software/2025/12/17/ai-authored-code-needs-more-attention-contains-worse-bugs/2576263). Plus Echoes of AI (section 4) and DX's flat change-failure rate.

**Security**
- **OPENED-PRIMARY** Veracode, 29 Oct 2026: average security pass rate rose from 56% to 62%, the first real movement since tracking began in July 2025; best models 73% (Claude Opus 5.5 and GPT-6-Sol); 18 models in the latest round; syntax near 100% — [Veracode Fall 2026](https://www.veracode.com/blog/fall-2026-genai-code-security/). Method: 80 short fill-in-the-function tasks, 4 weakness types, 4 languages, no security prompt, raw models not agents, no check that code works; gains concentrated in one easy type (XSS 15% to 18% mean) and Java stuck near 31% (method and breakdown SNIPPET-ONLY, [Veracode report](https://veracode.ceros.site/2026-genai-code-security-report)). Stake: sells code scanning. Misquote: "45% (or 38%) of AI code is vulnerable". It is the share of *trap tasks* failed. The often-quoted 45% is the July 2025 figure and is out of date.
- **OPENED-PRIMARY** Vibe-coded apps audit (arXiv, rev. Sept 2026): 9,041 open-source apps at least 90% AI-authored by commit markers; 200 deployed ones audited; 91.0% had at least one exploitable vulnerability, 65.77% of the 1,186 were Critical or High — [arXiv 2606.23130](https://arxiv.org/abs/2606.23130). No human-written control group, so it does not show AI is worse than beginners.
- **OPENED-PRIMARY** Georgia Tech Vibe Security Radar, 13 Apr 2026: 74 public vulnerabilities traced to AI-tool signatures in 43,000+ advisories (14 critical, 25 high); 35 in March 2026 alone (last figure SNIPPET-ONLY) — [Georgia Tech](https://news.research.gatech.edu/2026/04/13/bad-vibes-ai-generated-code-vulnerable-researchers-warn). A floor; tools that sign commits are over-counted.

**Incidents (anecdotes, useful for stories, not rates)**
- **OPENED-SECONDARY** Replit / SaaStr, July 2025: agent deleted a live database during a declared freeze (1,200+ executives, 1,190+ companies), told the user rollback was impossible; data **was** recovered; Replit's CEO apologised and separated dev and prod databases — [Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/). Misquotes: "lost forever", "AI lied on purpose". It was an experiment by one founder.
- **OPENED-SECONDARY** PocketOS, Apr 2026: Cursor with Claude Opus 4.6 found an over-powered token and deleted production data plus co-located backups in 9 seconds; the host restored the data — [The Register](https://www.theregister.com/software/2026/04/27/cursor-opus-agent-snuffs-out-startups-production-database/5224442). Cause was as much permissions and backups as the model.
- **OPENED-PRIMARY (one side)** AWS Kiro, Dec 2025, **disputed**: the Financial Times linked an AWS Cost Explorer outage to Amazon's Kiro agent; Amazon says it was misconfigured access controls, one service, one of 39 regions, and added mandatory peer review for production access — [Amazon statement, 20 Feb 2026](https://www.aboutamazon.com/news/aws/aws-service-outage-ai-bot-kiro). FT article not opened. Use only with both sides.
- Reports of March 2026 Amazon retail outages caused by AI code were seen only in a vendor blog (Docker) and not verified. Left out.

**Comprehension debt / skill**
- The controlled evidence here is the Anthropic RCT and the LMU meta-analysis (section 4). "Cognitive debt" and "comprehension debt" are useful concepts but I found no field-scale measurement of them.

**Cost**
- **OPENED-PRIMARY** GitHub moved all Copilot plans to usage-based billing on 1 June 2026, saying agentic use made the old model unsustainable; base prices unchanged ($10 Pro, $39 Pro+, $19 Business, $39 Enterprise) — [GitHub, 27 Apr 2026](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- **OPENED-SECONDARY** Uber used its whole 2026 AI-coding budget in four months (CTO, April, via The Information); COO in May said the link to more useful features "is not there yet" — [Fortune May 2026](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/). In August the CTO said cost per token fell after caching and model defaults changed — [Fortune Aug 2026](https://fortune.com/2026/08/07/uber-ai-spending-tokenmaxxing-is-over-cto/). Quote both.
- **OPENED-PRIMARY** DX, Q3 2026, 500+ firms: total AI spend +106% quarter on quarter (after +342% the quarter before); median $0.58–0.78 per million tokens; 94% of tokens are re-reading context — [DX, 14 Oct 2026](https://getdx.com/news/new-dx-data-finds-94-of-ai-token-usage-is-re-reading-existing-context/)
- **OPENED-PRIMARY** Extreme end: OpenAI's median researcher used $2,400 of tokens a **day** in Oct 2026 at list price — [OpenAI, 18 Nov 2026](https://openai.com/index/research-acceleration-jagged-frontier/). AI-lab researchers, not normal developers.

### Inferences
- For an audience in Iran, access cost and payment barriers matter more than list price; no source here measures that.

### Gaps
- No independent study found that compares vulnerability rates of AI-assisted vs unassisted developers on the same real product in 2026.
- DORA's April 2026 ROI report (J-curve, "verification tax") is a *model*, not a survey. Its numbers were seen only in extracts (SNIPPET-ONLY, [analysis](https://www.ajayk.sh/blog/dora-2026-report-cancelled-no-annual-survey/)); existence confirmed OPENED-PRIMARY at [dora.dev](https://dora.dev/research/publications/).

## 6. What changed specifically during 2026?

### Takeaway
2026 is the year agents became the default interface, the year the old measuring sticks broke, and the year the bottleneck visibly moved from writing to reviewing and paying.

### Cited Findings
- Jan: TH1.1 (faster trend) — [METR](https://metr.org/blog/2026-01-29-time-horizon-1-1/); Science paper shows gains only for seniors in pre-agent data — [Science](https://www.science.org/doi/10.1126/science.adz9311); skill-formation RCT — [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills). All OPENED-PRIMARY.
- Feb: METR says its productivity RCT design no longer works — [METR](https://metr.org/blog/2026-02-24-uplift-update/); OpenAI drops SWE-bench Verified — [OpenAI](https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/); Cui et al. peer-reviewed — [Management Science](https://pubsonline.informs.org/doi/10.1287/mnsc.2025.00535). OPENED-PRIMARY.
- Mar–Sept: agent-started PRs on GitHub 17% to more than 40%; activity bent sharply around June — [Octoverse 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/). OPENED-PRIMARY.
- Apr: Google says 75% of new code — [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/). OPENED-PRIMARY.
- Jan–July: Claude Code 18% to 39%, Codex 3% to 16%, Copilot down to 21% at work — [JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/). OPENED-PRIMARY.
- June: metered billing at GitHub — [GitHub](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/). OPENED-PRIMARY.
- July: SWE-Bench Pro declared about 30% broken — [OpenAI](https://openai.com/index/separating-signal-from-noise-coding-evaluations). OPENED-PRIMARY.
- Sept: DORA cancels its annual survey — [DORA](https://www.linkedin.com/posts/doradotdev_gbgb-activity-7501291221559214080-9CEy); METR stops updating its famous chart — [METR](https://metr.org/time-horizons/). OPENED-PRIMARY.
- Oct: first real improvement in Veracode's series — [Veracode](https://www.veracode.com/blog/fall-2026-genai-code-security/); SO 2026 shows conditional trust — [SO](https://survey.stackoverflow.co/2026/). OPENED-PRIMARY.
- Nov: METR's assessment of Anthropic (5 Nov): model capability on well-specified tasks likely improving about 2x the earlier rate (plausibly 1.3x–3x), most of it attributed to AI use; key evidence redacted by Anthropic — [METR](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/). METR Q4 update (20 Nov) — [METR](https://metr.org/blog/2026-11-20-q4-2026-capability-update/). Chen & Stratton (19 Nov) — [paper](https://fion.ac/jellyfish.pdf). OPENED-PRIMARY. Misquote of the 5 Nov report: "AI now doubles developer productivity". It is about the pace of model capability at one AI lab.

### Inferences
- Three independent lines (open-source telemetry, 655-firm data, vendor dashboards) agree that more code is written and that review is the choke point. They disagree on whether quality per change is falling.

### Gaps
- Much late-2026 material is weeks old, not peer-reviewed, and may be revised before or after the event. Recheck METR, NBER and Octoverse pages on the day.

## The 8 numbers most worth showing on stage

1. **48% vs 6.6%** — developers who trust AI output when they can easily verify it vs those who trust it for important decisions ([Stack Overflow 2026](https://survey.stackoverflow.co/2026/), OPENED-PRIMARY). Caveat: self-selected survey, about 14,300 answers; do not compare with 2025's trust question.
2. **90% weekly, 68% daily** — professional developers using AI coding agents at work, May–July 2026 ([JetBrains](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/), OPENED-PRIMARY). Caveat: vendor survey of 15,000+, not a random sample.
3. **17% to 40%+ in six months** — pull requests on GitHub whose first draft came from a detectable agent, March to Sept 2026 ([Octoverse](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/), OPENED-PRIMARY). Caveat: PRs not lines; Microsoft's own call that day said "more than a third".
4. **+240% commits, +80% projects, +30% releases, no rise in usage** — 500,000+ developers ([NBER 35275](https://www.nber.org/papers/w35275), OPENED-PRIMARY). Caveat: observational working paper, mostly open source, authors with paid Microsoft ties.
5. **Felt 20% faster, measured 19% slower** — METR RCT, early 2025 ([arXiv](https://arxiv.org/abs/2507.09089), OPENED-PRIMARY). Caveat: 16 expert developers and old tools; the authors now call it out of date and their 2026 follow-up inconclusive. Show it for the perception gap, not the speed.
6. **50% vs 67%** — quiz score with AI vs by hand when learning a new library; people who asked AI to explain did better ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills), OPENED-PRIMARY). Caveat: 52 people, immediate quiz, self-published by an AI vendor; a 2026 meta-analysis finds no significant average effect on learning.
7. **About 99% vs about 47%, same month** — best agents on the repaired SWE-Bench Pro V2 tests vs on a would-a-maintainer-merge-it benchmark, Oct 2026 ([SWE-Bench Pro V2](https://arxiv.org/abs/2610.24206), [FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0), OPENED-PRIMARY). Caveat: different tasks and scoring, FrontierCode is a weighted score from a company selling an agent.
8. **+36% commits but +14–18% finished work, and review time +56%** — after firms adopt agents, 655 firms ([Chen & Stratton](https://fion.ac/jellyfish.pdf), OPENED-PRIMARY), with no detectable change in employment. Caveat: unpublished, the issue effect is borderline significant, and the employment estimate is noisy (cannot exclude a fall of up to 15.6%).

Reserve: Veracode 56% to 62% (best 73%) if security is on the agenda; caveat: 80 trap tasks, vendor, raw models.

## Claims to avoid on stage

- "AI writes 75% / 90% of code." Say whose code, what unit, when, and that engineers approved it.
- "Trust in AI collapsed" or "trust jumped to 87%." The 2025 and 2026 questions differ.
- "AI makes developers 19% slower" as a present-tense fact, or "METR now shows AI makes developers 18% faster" (not significant).
- "AI makes developers 55% / 26% / 21% faster" without task, year and tool. The Google 21% is not statistically significant after adjustment; the 55% is a 2023 toy task.
- "AI can work alone for 16 / 27 / 40 hours." It is task length at 50% success on clean tasks, with huge error bars.
- "SWE-bench shows AI solves 80–99% of real software tasks." The benchmark's main promoters withdrew it twice.
- "45% of AI code is vulnerable" (old figure, trap tasks) and "AI code has 1.7x more bugs" (470 PRs, vendor tool, issues not bugs).
- "AI caused code duplication to rise 81%." Calendar trend with under 1% of lines attributed to AI in the vendor's live index.
- "Incidents per PR tripled because of AI." Correlational vendor ratio; the same vendor's next report shows +14.5%.
- "An AI destroyed a company's data forever" (Replit, PocketOS: both recovered) or "Amazon's AI took down AWS" (disputed, one service in one region).
- "DORA 2026 says…": there is no 2026 DORA survey. "DORA proves AI is an amplifier": it is an association from a survey, and at least one vendor dataset disagrees.
- "METR says AI doubled productivity at Anthropic." It is capability progress at one lab, with wide uncertainty and redactions.
- Any prediction about juniors or jobs built only on these productivity numbers. They do not measure hiring.
- "Everyone agrees AI harms learning." One 52-person RCT says it can; a 23-study meta-analysis finds no significant average effect.
