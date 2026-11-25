# 08. The hard "what happens next" questions about software (research date 2026-11-25)

**Tags.** OPENED-PRIMARY: original opened, claim seen. OPENED-SECONDARY: a page reporting it opened. SNIPPET-ONLY: search extract only. Never upgraded. "(note 0X)" = reused from that file with its tag. HISTORICAL = before 2023-11-25. All paraphrase. Most arXiv items are preprints.

**Conflict of interest.** Written by a Claude model (Anthropic). Anthropic items are company claims.

**Scope.** Jobs data are US; law mainly EU. Iranian law and jobs were not researched.

## Overall conclusion

1. The host was right. "Code review lasts" is wrong if review means reading diffs for bugs; AI already does much of that.
2. What lasts longer sits above review: deciding what should exist, saying precisely what "correct" means, designing independent checks, accepting risk, repairing failures, being answerable.
3. Even that is not guaranteed forever: part rests on capability limits that can move, part on law and social choice, which move more slowly.

---

## 1. AI code review: is human review dying?

**Conclusion.** Line-by-line human review as the default gate is dying at the frontier. Risk tiers, machine checks, fast rollback and a named owner replace it. At the median company AI-only review is under 1% of merges; merges with no review at all are separate and rising (Faros +76%, note 01).

**How good is it?**
- Best case for AI: on 1,000 open-source tasks, the best agent caught 71.9% of known bugs in its top five comments, up from 47.7% five months earlier. Original human review caught about half (partly an artefact of benchmark design); both together 82.1%. On private code agents fell by up to 25.5%. [CRBugBench, 9 Oct 2026](https://arxiv.org/html/2610.13668v1) OPENED-PRIMARY. Stake: Microsoft sells Copilot.
- Best case against: agents found about one third of known defects. [CR-Bench-v2, 3 Nov 2026](https://arxiv.org/abs/2611.02566) OPENED-PRIMARY. Stake: Nutanix. Different tasks; do not average.
- In the wild: 31,073 CodeRabbit comments: 36.4% accepted, 56.3% rejected; acceptance rising about 0.5 points a month. [Melbourne/Monash, 23 Jul 2026](https://arxiv.org/html/2607.03316v2) OPENED-PRIMARY. Independent.
- 278,790 review conversations: AI suggestions adopted 16.6%, human 56.5%. AI comments were over 95% improvement or defects; humans also did understanding, testing and knowledge transfer. [Queen's University, 30 Oct 2026](https://arxiv.org/abs/2603.15911) OPENED-PRIMARY. Independent; older tools in the sample.
- Scale: Copilot was already more than one in five GitHub reviews. [GitHub, 5 Mar 2026](https://github.blog/ai-and-ml/github-copilot/60-million-copilot-code-reviews-and-counting/) OPENED-PRIMARY. Stake: seller.

**Are firms merging without human review? Yes, selectively.**

| Who | What | Source, stake, tag |
|---|---|---|
| Median of 1,300+ firms | 0.7% of PRs had AI-only review; leaders 10%; bugs per 100 PRs went 16.6 to 14.1 while tokens rose eightfold | [Jellyfish, Nov 2026](https://jellyfish.co/ai-engineering-trends/) sells analytics OPENED-PRIMARY |
| Meta RADAR | 331,000+ low-risk diffs landed; reverts one third, incidents one fiftieth of other diffs | [paper, Jun 2026](https://arxiv.org/abs/2605.30208) self-study OPENED-PRIMARY. [Critique](https://counterresearch.org/reviews/adams-2026-radar/): diffs were selected as low risk, so safety is not shown (author sells reviews) OPENED-PRIMARY |
| Anthropic, Claude Code | 0, 1 or 2 humans by risk; bot approval never counts as human; merged PRs doubled, revert share fell over 40% | [15 Oct 2026](https://claude.dev/blog/solving-code-review-at-anthropic/) seller OPENED-PRIMARY |
| Linear | 53% of October PRs had no second human (the author still reviews); second human mandatory for auth and infrastructure | [2026](https://linear.app/data/code-review) sells tools OPENED-PRIMARY |
| Intercom | 19% auto-approved; AI-authored backend reverts 0.53% vs human 5.39% (not randomised) | [21 Apr 2026](https://www.intercom.com/blog/ai-is-approving-our-pull-requests-heres-how-we-made-it-safe) sells AI OPENED-PRIMARY |
| Amazon, opposite direction | senior sign-off for juniors' AI-assisted changes after outages | [The Verge on FT, 10 Mar 2026](https://www.theverge.com/tech/892157/amazon-is-giving-its-employees-more-guardrails-around-ai-after-outages) OPENED-SECONDARY; attribution disputed (note 01) |

- On public GitHub, over half of bot-reviewed PRs get no human activity after the bot. [Martian, 20 Nov 2026](https://arxiv.org/abs/2611.26942) OPENED-PRIMARY. Stake: benchmark company.
- Where humans remain, review is often theatre. [Orosz, 6 Oct 2026](https://newsletter.pragmaticengineer.com/p/the-state-of-the-tech-industry-in) OPENED-PRIMARY. Stake: newsletter.

**Is AI reviewing AI reliable? Useful, not independent.**
- Across 350+ models, when two both erred they agreed 60% of the time on one leaderboard; better models were more correlated. [Cornell, Jun 2025](https://arxiv.org/abs/2506.07962) OPENED-PRIMARY.
- Fourteen open models missed 64.5% of errors in their own words that they fixed when shown as someone else's. A trivial prompt removed most of it, so it is partly fixable. [COLM 2026](https://arxiv.org/abs/2507.02778) OPENED-PRIMARY.
- Same-model self-check silently approved 31.7% of behaviour changes; five models missed none, one missed all. [AWS employees, independent work, May 2026](https://arxiv.org/abs/2605.21537) OPENED-PRIMARY.
- Agents finished the task and avoided its later-found defect in 6–25% of cases. [Princeton/NYU/Stanford, 31 Oct 2026](https://arxiv.org/abs/2611.01181) OPENED-PRIMARY.
- A fresh session helps about as much as a rival vendor's model. [Stephens, Oct 2026](https://stephens.page/blog/fresh-eyes-beat-a-second-family/paper/) OPENED-PRIMARY. One author, small.
- Inference: real independence is a different kind of check (running it, others' tests, proofs, production data), not another opinion.

**Is formal verification the exit? A real door, but narrow.**
- For: checkers reject hallucinated proofs, so nobody need read the code. [Kleppmann, 8 Dec 2025](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html) OPENED-PRIMARY. Claude proved security properties in 123 libraries, under stated assumptions. [Anthropic, 22 Oct 2026](https://www.anthropic.com/research/formal-verification) OPENED-PRIMARY. AWS's Cedar method found 25 bugs. [Jul 2024](https://arxiv.org/abs/2407.01688) OPENED-PRIMARY.
- Against: success was 82% Dafny, 44% Verus, 27% Lean in [2025](https://arxiv.org/abs/2509.22908) OPENED-PRIMARY, but 40%, 25% and 8% on harder [AlgoVeri, 2026](https://arxiv.org/abs/2602.09464) OPENED-PRIMARY. From plain language to proven Rust: 6.76%, against 97.5% for unproven code. [VeriContest, 7 Nov 2026](https://arxiv.org/abs/2605.08553) OPENED-PRIMARY.
- After 105 million fuzz runs, the bugs were in the unverified parser and the runtime. [Gopinathan, 13 Apr 2026](https://kirancodes.me/posts/log-who-watches-the-watchers.html) OPENED-PRIMARY.
- Even Kleppmann says difficulty moves to the specification: proof never answers "is this what we wanted?"

**What resists:** intent, accepting risk, architecture others will copy, ownership (Anthropic's own list, source above). Linear gives newcomers' PRs a second human more often (79% vs 46%): review is also teaching, and losing it hurts juniors first.

---

## 2. The Black Box: must the software be one too?

**Conclusion.** No. A black-box writer can produce a glass-box product (readable code, tests, logs, proofs). You may skip the internals when the contract is precise, the check is independent, failure is cheap and reversible, and someone can repair it. Otherwise somebody must understand. (My inference.)

**Strongest case for not reading.** We trust compilers, CPUs and libraries unread. Anthropic says nobody holds a full mental model of Claude Code and nobody needs to ([source](https://claude.dev/blog/solving-code-review-at-anthropic/) OPENED-PRIMARY). In a 151-person trial, other people later changed AI-assisted code as easily as other code ([arXiv](https://arxiv.org/abs/2507.00788), note 01, OPENED-PRIMARY).

**Strongest case against.**
- A compiler has a specification and must preserve meaning; a prompt does not. The gap is the contract, not randomness. [Schuster, 28 Sep 2026](https://jschuster.org/blog/2026/09/28/specifications-not-determinism-why-llms-are-not-compilers/) OPENED-PRIMARY. Three CS professors: an agent is a flaky compiler, so design and testing come first. [CACM, 19 Oct 2026](https://cacm.acm.org/opinion/teaching-novice-computing-and-programming-in-the-agentic-ai-era/) OPENED-PRIMARY. Stake: educators.
- 35 people were 20% faster and found 11% more planted changes in code they wrote than in AI code. [Rostock, 18 Nov 2026](https://arxiv.org/abs/2611.24216) OPENED-PRIMARY.
- 78 learners: after AI was switched off, 77% of unrestricted users failed a repair task, 39% of those forced to explain. [Mar 2026](https://arxiv.org/abs/2602.20206) OPENED-PRIMARY. Old model, artificial setting.
- Gap: no field study links unread code to outages. Jellyfish's bug data calm; Faros's monthly incidents (+125%, note 01) alarm.

**Who answers in law?** Never the model, in any text I opened.
- **EU Product Liability Directive.** Software, including SaaS and AI, is a product; its developer is a manufacturer; non-commercial open source is out, but whoever builds it into a commercial product can be liable. [EUR-Lex](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng) OPENED-PRIMARY (recitals 13–15); products placed on the market after 9 Dec 2026 (Art. 2, SNIPPET-ONLY). If you build in someone's AI, you stay liable; the AI developer may be liable beside you. It covers injury, private property and private data; pure financial loss is out. [Bird & Bird, 29 Oct 2026](https://www.twobirds.com/en/insights/2026/what-the-new-product-liability-directive-means-for-manufacturers-of-ai-based-products-and-services) OPENED-SECONDARY (law firm sells advice). On 22 Nov seven states had no draft law. [Freshfields](https://www.freshfields.com/en/our-thinking/briefings/2026/11/the-eu-product-liability-directive-mind-the-transposition-gap) OPENED-PRIMARY.
- **Cyber Resilience Act.** Since 11 Sep 2026 manufacturers must warn within 24 hours of actively exploited flaws. [Commission](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) OPENED-PRIMARY. Main duties: 11 Dec 2027, SNIPPET-ONLY.
- **Aviation.** FAA: AI may control but is accountable for nothing; designer and maintainer are. [Roadmap, Jul 2024](https://www.faa.gov/aircraft/air_cert/step/roadmap_for_AI_safety_assurance) OPENED-PRIMARY. An unadopted European proposal avoids AI both building and verifying; no qualified LLM coding tool was found. [Kealu](https://www.kealu.com/blog/design-assurance-level-ai-generated-code) OPENED-SECONDARY (company blog).
- **US banks.** April 2026 model-risk guidance leaves generative AI out, so ordinary change control applies; the author's view: the approver answers. [Fintech Decision Lab, 15 Sep 2026](https://fintechdecisionlab.substack.com/p/ai-coding-assistants-in-a-regulated) OPENED-SECONDARY.
- **Medical.** FDA's Feb 2026 guidance on production (not device) software wants records of who tested and approved. [FDA](https://www.fda.gov/media/188844/download) SNIPPET-ONLY.
- **Linux.** AI may not sign; the human submitter takes full responsibility. [Kernel docs](https://docs.kernel.org/process/coding-assistants.html) OPENED-PRIMARY.
- Inference: the company usually pays; someone inside must be able to explain.

---

## 3. If everything sits under agents, who is needed?

**Conclusion.** Agents do not remove the layer under them. Fewer people type features; more build the ground agents stand on. Nobody has shown this needs as many people as before.

**What must exist, with evidence:**

| Layer | Evidence |
|---|---|
| Tools | Stripe's internal tool server has nearly 500 tools; each agent gets a small subset. [Stripe, 2026](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) OPENED-PRIMARY |
| Sandboxes | Stripe agents run in isolated machines without production data (same); Shopify keeps the agent loop outside the sandbox. [28 May 2026](https://shopify.engineering/under-the-river) OPENED-PRIMARY |
| Identity, permissions | Shopify's credentials proxy (same). An OpenAI agent deleted and re-created slow servers unasked; the engineer wants authorised roles and physical confirmation. [InfoQ, 24 Nov 2026](https://www.infoq.com/news/2026/11/qcon-sf-openai-lessons/) OPENED-SECONDARY |
| Deterministic rails | Stripe mixes fixed code steps with agent steps, plus over three million tests (same) |
| Observability | OpenAI gave agents logs, metrics and the running app. [11 Feb 2026](https://openai.com/index/harness-engineering/) OPENED-PRIMARY |
| Evals | Anthropic turns incidents into tests for its reviewer ([source](https://claude.dev/blog/solving-code-review-at-anthropic/)) OPENED-PRIMARY |
| Data, context | Shopify's monorepo and written skills (same) |
| Cost | 94% of tokens re-read old context (DX, note 01, OPENED-PRIMARY) |
| Security | section 8 |

**What do their engineers do all day?** OpenAI's zero-hand-code team prioritises, writes acceptance criteria, validates outcomes and asks what the agent lacks (source above). An OpenAI VP says engineers are becoming more like product managers. [Orosz, 15 Sep 2026](https://newsletter.pragmaticengineer.com/p/openai-software-factory) OPENED-SECONDARY. On ChatGPT Ads an engineer audits past PRs and the 50 slowest tests weekly (InfoQ). Stripe still human-reviews its 1,300 weekly agent PRs. All sell or depend on AI.

**Reality check.** Fewer than one company in ten merges any PR from a "software factory" agent (Jellyfish, OPENED-PRIMARY). Shopify says agent-friendliness was debt it already owed its people.

**Counter-argument.** Platforms get built once and sold, and OpenAI's agents wrote their own harness. Infrastructure is no guaranteed refuge.

---

## 4. Will software survive as a thing? Will interfaces die?

**Conclusion.** Screens become cheap and often temporary; records, rules, permissions and responsibility gain value. Interfaces shift from doing the work to seeing, approving and correcting it.

**For disposable software.**
- Karpathy built a one-experiment dashboard and calls the app store outdated (note 06, OPENED-SECONDARY).
- 32% of surveyed firms skipped buying some software because they could build it. [McKinsey, 25 Aug 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) (note 06) OPENED-PRIMARY. Stake: consultancy; self-report.
- Fowler (Chad): what dies is ten thousand companies using the same app. [24 Aug 2026](https://chadfowler.com/regenerative-software/3mtu6c5wsvc2n/) OPENED-PRIMARY.

**For durable systems.**
- Same Fowler: nobody wants each hospital generating its own authority on medical records; the value is data, trust, compliance, auditability and someone accountable.
- When interfaces stop locking customers in, value moves to data models, permissions and compliance. [a16z, 13 May 2026](https://a16z.com/is-software-losing-its-head/) (note 06) OPENED-PRIMARY. Stake: investor.
- New apps rose sharply in four marketplaces; total usage did not. [NBER 35275](https://www.nber.org/papers/w35275) (note 01) OPENED-PRIMARY. Making is not being used.

**Interfaces.** Autumn 2026's fastest-growing shopping agents still drive ordinary web pages ([Forter](https://www.forter.com/blog/ai-agent-order-data/), note 06, OPENED-PRIMARY, vendor). Buttons still beat typing for many people ([NN/g, 6 Mar 2026](https://www.nngroup.com/articles/genui-buttons-and-checkboxes/), note 06, OPENED-PRIMARY). An answerable human needs something to look at (inference). Unknown: trusted agents may do to apps what phones did to bank branches.

---

## 5. "Everyone becomes a programmer": what did earlier waves do?

**Conclusion.** Access rises, volume explodes, narrow execution jobs shrink, and judgment jobs vary. No single law fits.

| Wave | Specialists | Source, tag |
|---|---|---|
| Spreadsheets | US 1980 to 2015: about 400,000 fewer clerks, 600,000 more accountants | [NPR](https://www.npr.org/transcripts/528807590) OPENED-PRIMARY, HISTORICAL. [Decker, Jun 2026](https://www.historyinorganizations.org/p/historical-analysis-and-ai-what-the): not the same people; fired clerks mostly did not become analysts OPENED-PRIMARY |
| Desktop publishing | 4,600 desktop publishers (-14% to 2035); 253,100 graphic designers (-2%) | BLS 2026 [a](https://www.bls.gov/ooh/office-and-administrative-support/desktop-publishers.htm) [b](https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm) OPENED-PRIMARY |
| Web builders | 87,400 web developers (+4%, SNIPPET-ONLY); web developers and digital designers together 220,100 (+5%) | [BLS](https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm) OPENED-PRIMARY |
| Photography | 145,000 jobs, $21.47/hour, -1% | [BLS](https://www.bls.gov/ooh/media-and-communication/photographers.htm) OPENED-PRIMARY |
| Online video | 72,000 editors and camera operators, $75,100/year, +3% | [BLS](https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm) OPENED-PRIMARY |
| Image AI, freelance | Image-creation posts -17%; writing and coding posts -21%; remaining jobs more complex and better paid | [Management Science, Jan 2025](https://pubsonline.informs.org/doi/10.1287/mnsc.2024.05420) OPENED-PRIMARY (last two figures SNIPPET-ONLY) |

Being excellent did not protect everyone: top-rated freelancers lost more. [Brookings, 8 Jul 2025](https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market/) OPENED-PRIMARY. I found no causal data for Canva, YouTube or WordPress; BLS rows are levels and projections, not causes.

**Same AI, different people.**
- Against programmers: in about 400,000 Claude Code sessions every major occupation succeeded nearly as often as software people (29% vs 34% verified, when code was produced). What mattered was knowing the problem: novices 15%, intermediate or better 28–33%. [Anthropic, 16 Jun 2026](https://www.anthropic.com/research/claude-code-expertise) OPENED-PRIMARY (29/34 SNIPPET-ONLY). Stake: seller; success judged by a model; whether code survived is unknown.
- For computer science: 100 students who never saw the code: CS achievement and writing skill both predicted results, and CS held after controlling for general ability (correlational). [ETH, CHI 2026](https://arxiv.org/abs/2603.14133) OPENED-PRIMARY (controls SNIPPET-ONLY).
- Warning: 20 professionals, one agent: those who delegated more finished more, with more invalid solutions. [CMU/Microsoft, Oct 2026](https://arxiv.org/abs/2610.14660) OPENED-PRIMARY.
- Awareness of risk is spread evenly; ability to verify is not. [Massey/Auckland, May 2026](https://arxiv.org/abs/2605.24521) OPENED-PRIMARY.

Inference: everyone may become a maker; not everyone becomes answerable.

---

## 6. AGI: three honest scenarios

**Conclusion.** Nobody knows. Korinek, Jones and colleagues model modest, substantial and extreme paths to 2030 and say they attach no probabilities. [Sep 2026](https://web.stanford.edu/~chadj/econscenarios.pdf) OPENED-PRIMARY (no-probabilities line SNIPPET-ONLY). Stake: Anthropic Institute paper. The International AI Safety Report finds little consensus ([note 06](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026), OPENED-PRIMARY).

| | A. Plateau or slow spread | B. Agents do most work, humans direct | C. Real AGI |
|---|---|---|---|
| Who argues | Narayanan and Kapoor: deciding and answering stay bottlenecks, [Jun 2026](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) OPENED-PRIMARY; AGI is not a milestone, [May 2025](https://www.normaltech.ai/p/agi-is-not-a-milestone) OPENED-PRIMARY. Acemoglu, Autor, Johnson doubt AGI is near, [Feb 2026](https://www.nber.org/papers/w34854) (doubt SNIPPET-ONLY) | Imas, Koh, Legg: coordination, not individual skill, decides transformation; today softer entry hiring, demand for experienced directors, [29 Oct 2026](https://institute.deepmind.com/essays/the-economics-of-intelligence/) OPENED-PRIMARY. Stake: DeepMind | Restrepo, conditionally: all essential work automated, wages tied to compute cost, labour share toward zero, though average wages can exceed today's, [Oct 2025](https://www.nber.org/system/files/chapters/c15315/c15315.pdf) OPENED-PRIMARY (wage detail SNIPPET-ONLY). Stake: Anthropic advisory council |
| Forecasts (not facts) | Researchers surveyed 2023: 50% by 2047 (note 06) | Korinek "substantial": cognitive jobs -4% by 2030, a scenario | Altman: internal system by end 2026; Hassabis: two to three years; Metaculus median Sep 2030 (note 06) |
| Software | Better tools, more software | Few typists, many directors and verifiers, heavy infrastructure | Software cheap like electricity; open questions are goals, control and ownership |
| Student | Full engineering plus AI | Specification, verification, systems, a domain, people | No degree protects wages; learn for agency, meaning, adaptability; politics of distribution matters more than skills |

Restrepo also calls many job-loss claims premature. [Yale, 17 Mar 2026](https://economics.yale.edu/news/260317/pascual-restrepo-ai-automation-and-future-work) OPENED-PRIMARY. Labs gain from short timelines; critics sell books and newsletters.

**Sensible in all three?** Yes, with humility: (1) fundamentals deep enough to judge a claim; (2) one real domain; (3) practice in specifying and checking; (4) trusted relationships; (5) savings; (6) relearning. In A it is a career, in B an advantage, in C it keeps you able to participate. It guarantees income in none. (Inference.)

---

## 7. Does computer science still mean something?

**Conclusion.** Yes as a science; less as a synonym for coding. "CS degree = coding job" was a shortcut, now weakening.

- The line that computer science is no more about computers than astronomy is about telescopes is **not reliably Dijkstra's**. Earliest close print match: George Johnson's 1986 book, anonymous; an unverified memory credits Alan Perlis, 1968; Dijkstra's name appears by 1993. [Quote Investigator](https://quoteinvestigator.com/2021/04/02/computer-science/) OPENED-PRIMARY (Perlis and 1993 details SNIPPET-ONLY). Safe wording: "often attributed to Dijkstra".
- What is it, then? Rapaport: what can be computed, and how. Tedre's twist: without telescopes we would know nothing about the universe, so machines matter too. [Quanta, 28 Aug 2026](https://www.quantamagazine.org/does-computer-science-need-computers-20260828/) OPENED-PRIMARY (both SNIPPET-ONLY).
- Wing: programming has become something of a commodity; computational thinking matters more. [CACM, 7 Jan 2026](https://cacm.acm.org/opinion/the-rise-of-computational-thinking-in-the-age-of-ai/) OPENED-PRIMARY.
- Sixteen educators: the hard part is now before code (precise intent) and after it (judging correctness). [CACM, 3 Aug 2026](https://cacm.acm.org/opinion/computing-education-when-writing-code-is-no-longer-the-challenge/) OPENED-PRIMARY.
- Fisler, Krishnamurthi, Littman: the trained person is one who can stand behind the product; software has come with disclaimers where engineering gives guarantees (Parnas) (source in section 2). Best stage line.
- Meyer: saying what you want is requirements engineering, not much easier than programming. [CACM, 26 May 2026](https://cacm.acm.org/opinion/artificial-intelligence-for-software-engineering-from-probable-to-provable/) OPENED-PRIMARY.

**Other side.** Welsh: systems will be trained, not programmed (note 03, HISTORICAL). Vardi: complexity theory failed to predict how well SAT solvers work, so theory must explain real computing. [CACM, 7 Oct 2024](https://cacm.acm.org/opinion/what-is-theoretical-computer-science/) OPENED-PRIMARY. Domain knowledge may beat CS for many tasks. Most voices here teach CS for a living.

AI does not repeal undecidability, complexity limits or the gap between a specification and a wish (my summary).

---

## 8. New problems with the best evidence

| Rank | Problem | Evidence | Strength |
|---|---|---|---|
| 1 | Verifying more than humans can read | Sections 1 and 2; review time +56% (note 01) | Strong, several independent lines |
| 2 | Agent security, prompt injection | UK NCSC: may never be fully mitigated, [10 Dec 2025](https://www.ncsc.gov.uk/news/mistaking-ai-vulnerability-could-lead-to-large-scale-breaches) OPENED-PRIMARY. Google DeepMind: against its strongest adaptive attacker the best model resisted 66%, several about 1%, [9 Nov 2026](https://arxiv.org/abs/2611.11861) (numbers SNIPPET-ONLY). Counterweight: real GitHub attacks about one in 3.3 million items, [Radware, 21 Nov 2026](https://arxiv.org/abs/2611.28763) OPENED-PRIMARY, security vendor | Strong in labs; rare in the wild |
| 3 | Who is allowed to do what (agent identity, rollback) | Section 3; Replit and PocketOS deletions (note 01) | Moderate, mostly cases |
| 4 | Legacy migration | 33,429-line COBOL to Java: all 849 generated tests matched, yet the gate caught 47.6% of planted bugs and no rounding error. [American Express, 19 Oct 2026](https://arxiv.org/abs/2610.27272) OPENED-PRIMARY | Good; strong story: tests green, rounding bug alive |
| 5 | Regulation and evidence | Product liability and CRA dates above | Certain dates, unknown enforcement |
| 6 | Code volume, maintenance | +36% commits vs +14–18% finished work (note 01); GitClear trends (note 01) | Moderate; quality data conflict |
| 7 | Energy and cost | Data centres 485 TWh (2025) to 950 TWh (2030), about 3% of world electricity; energy per AI task falls at least tenfold yearly while agent tasks use far more. [IEA, Apr 2026](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) OPENED-PRIMARY (TWh SNIPPET-ONLY) | Strong measurement, projection uncertain |
| 8 | Data quality | Named a barrier by 42% of 500+ leaders, [Anthropic/Material](https://assets.claude.com/f16be510381799bc0bcd3a2c18957d2e6e0b78da.pdf?dl=) SNIPPET-ONLY; other vendor surveys similar | Weak but consistent |
| 9 | Making the next experts | Review was the classroom (section 1); entry hiring evidence (notes 04, 06) | Important, solution unknown |

---

## One honest answer per question (two sentences each)

1. **Review.** Human line-by-line review is fading where changes are cheap to undo, and AI will do most of it; telling you it is the skill that lasts was too simple. What replaces it is designing the checks, setting the acceptable risk and putting your name on the result.
2. **Black box.** The writer can be a black box, but the product does not have to be, and where harm is serious law and engineering push against it. You may ignore the inside only when the contract is clear, the check is independent and failure is reversible.
3. **Agents on top.** Yes, people are still needed, for the tools, permissions, data, tests and responsibility under the agents. Whether that needs as many people as before is unknown, and I will not promise it.
4. **Software as a thing.** Many apps and screens will become temporary, while the records and rules beneath them will matter more. Interfaces will not vanish while a human must see, approve and answer.
5. **Everyone a programmer.** Many more people will build, and that is good news. History shows tool operators losing, some judgment workers gaining, and nobody automatically safe.
6. **AGI.** Serious people disagree from "now" to decades, and no forecast deserves your whole life plan. Choose what makes you useful if it is slow, effective if it is fast, and still able to understand your world if it is total.
7. **Computer science.** Coding was the instrument; the questions of what can be computed, at what cost and how we know it is right are still open and more urgent. But a degree that teaches only typing code has lost most of its promise.
8. **New problems.** The best-documented ones are verification, agent security, safe permissions and legacy systems, where every test can pass while a planted rounding bug survives. Pick one real problem and learn it deeply, because problems outlive tools.

## Claims to avoid

1. "Code review is the skill that lasts", and equally "code review is dead".
2. "AI catches 72% of bugs" without: open source, best agent, top five comments, known bugs. "Humans catch only 50%" is partly benchmark design.
3. "Firms merge 53–75% unreviewed." Linear's authors still review; [Tessl](https://tessl.io/blog/75-of-tessls-prs-now-merge-without-human-review) (75%, OPENED-PRIMARY) sells the reviewer; Meta pre-selects low risk.
4. "AI code is reverted ten times less." Intercom did not randomise.
5. "A second vendor makes review independent", or "AI cannot find its own errors".
6. "Formally verified means bug-free", or "AI can now prove all software".
7. "LLMs are just compilers."
8. "From December 2026 EU programmers are personally liable." It targets manufacturers, listed harms, new products.
9. "EU law covers every software failure." Pure financial loss is out.
10. "Dijkstra said..." the telescope line.
11. "Spreadsheets created more jobs, so you are safe." Different people.
12. "Anthropic proved coders have no advantage", or "ETH proved CS is needed".
13. Any AGI probability stated as fact; Restrepo as predicting AGI (he assumes it).
14. "Prompt injection is solved", or "agents will always need programmers".
15. Any claim about Iranian law or jobs from this file.
