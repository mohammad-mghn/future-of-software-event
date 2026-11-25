# Durable skills for software people in the AI era, and how to learn them with AI

Research date: 2026-11-24. Audience: live Persian-language event (CS students, beginners, working developers, career changers).

**Verification tags**
- `OPENED-PRIMARY`: the publisher's own page or paper was fetched this session. For long documents the cited passage was read in a full-text extract of that same URL, and the URL was then fetched to confirm it opens.
- `OPENED-SECONDARY`: a news or third-party page reporting someone else's finding was fetched.
- `SNIPPET-ONLY`: seen only as a search extract. Not upgraded.
- Anything outside 2023-11-24 to 2026-11-24 is marked *historical*.
- "Stake" = who benefits if you believe the claim.

**The one-paragraph story for the stage.** Code generation got cheap, so the scarce work moved to deciding what to build, checking it, and answering for it. The strongest new employer evidence (Burning Glass, Nov 2026) says exactly this for juniors and also says fundamentals did not lose value. The learning research says AI that hands you the answer during practice tends to leave you weaker when it is gone, and that the *way* you use it matters more than whether you use it. So: learn fundamentals by hand, use AI to question and check you, and practise verification every week.

---

## 1. Employer and skill data: which skills are rising, which are declining?

### Takeaway
Rising: Python, code review, debugging, CI/CD and production skills, security, AI/agent skills (from a small base), and judgement/communication. Falling in *relative* prominence: breadth of languages, Agile labels, routine implementation, chatbot/prompt-only skills. Almost all of this is US-weighted job-ad data or opt-in surveys; none of it measures Iran.

### Cited Findings

**Burning Glass Institute, "The Consequence Gap" (Nov 2026). Best single source for juniors.**
- More than 1 million entry-level postings in 32 tech occupations plus conversations with 54 practitioners at 46 organisations. Code review in entry-level ads went from 7.8% (2020) to 15.6% (2025) to 18.5% (mid-2026); CI/CD 19.4%; Kubernetes 14.5%. Agent-development mentions grew 38-fold from 2024 to H1 2026, from a low base. No practitioner said core programming fundamentals had become less important. Only 44% of undergraduates who want a paid internship get one — [Burning Glass Institute](https://www.burningglassinstitute.org/research/the-consequence-gap) `OPENED-PRIMARY` (summary page; full PDF not opened). Stake: labour-research non-profit, partnered with Break Through Tech (training non-profit). Limits: US, job ads state wishes not outcomes.
- Same report via press: 12 of 16 tracked languages lost share in entry-level ads 2020-2025 (Java most), Python rose 22% to 33%; agent-development mentions 0.14% (2024) to 1.8% (2025) to almost 6% (H1 2026); CI/CD 12% to 19%; Kubernetes 8% to almost 15%. CEO Judith Spitz: "Nobody is vibe coding their way into an engineering job" — [GovTech, 13 Nov 2026](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers) `OPENED-SECONDARY`.

**Lightcast (job-ad data vendor; stake: sells the data)**
- Software engineering, US: hiring demand down 46% from 2022 to 2025 while median advertised salary rose 21% to $146,000; average ad asks for 29 skills in 2026, up 9% from 2022. Moving up: Python, debugging, APIs, AWS. Moving down the ranking: Agile, Java, JavaScript, SQL. New in top 20: workflow management, AI, CI/CD, pipelines, Kubernetes, operations. Out of top 20: Angular, Linux, full-stack. Lightcast itself warns that "down" may mean less prominent, not disappearing — [Lightcast, 6 Nov 2026](https://lightcast.io/resources/blog/work-intelligence-software-engineering-change) `OPENED-PRIMARY`.
- All US jobs: required skills changed 33% on average, 2022-2025; software roles shift toward integration, oversight of AI code and security rather than manual coding — [Lightcast, Speed of Skill Change 2026 update](https://www.datocms-assets.com/62658/1768950758-speed-of-skills-change-2026-update.pdf) `OPENED-PRIMARY`.
- For Stanford AI Index 2026: AI skills in 2.5% of US ads (+55% in a year); "agentic AI" cluster 0.06% to 0.23% of ads in one year (about 90,000 ads); ChatGPT/chatbot skills *fell* — [Lightcast](https://lightcast.io/resources/reports/stanford-ai-index-2026) `OPENED-PRIMARY`.
- Even roles that build AI ask for programming, computer science, communication and leadership in their top 20 — [Lightcast, 6 Aug 2026](https://lightcast.io/resources/blog/buildling-ai-takes-more-than-ai-skills) `SNIPPET-ONLY`.

**Indeed Hiring Lab (stake: job board)**
- US software postings up almost 15% since late Feb 2025 (all postings down 7%) but still about 27.5% below pre-pandemic; 71% of the May 2025-May 2026 increase is senior, 37% has AI in the title. Authors say correlation, not causation — [8 Jul 2026](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/) `OPENED-PRIMARY`.
- Software development is the most senior-heavy category: 69.3% senior and 4.5% entry-level ads in Q1 2026 — [23 Jul 2026](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/) `OPENED-PRIMARY`. Limit: algorithmic labels, about 95% manual-check accuracy.
- AI terms in all Indeed ads doubled from 3.6% (Sep 2025) to 7.2% (Sep 2026); little evidence of widespread job loss driven solely by AI — [18 Nov 2026](https://hiringlab.indeed.com/2026/11/18/there-is-no-ai-jobpocalypse/) `OPENED-PRIMARY`.
- Reconciling with Lightcast: Lightcast's -46% covers 2022-2025; Indeed's rebound covers 2025-2026 and starts from a low base. Both can be true.

**PwC 2026 AI Jobs Barometer (15 Jun 2026; stake: consultancy)**
- Over 1 billion ads, six continents. AI-skill wage premium 62% (57% a year earlier). In 2.4 million US entry-level ads, the most AI-exposed entry roles are 7x more likely to ask for traditionally senior skills; "seniorised" entry roles +35% since 2019, other exposed entry roles -10% — [PwC press release](https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html) `OPENED-PRIMARY`.
- Skills in the most AI-exposed jobs change 2.2x as fast as in the least exposed (2019-2025) — [PwC findings PDF](https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/2026-global-ai-jobs-barometer-global-findings.pdf) `SNIPPET-ONLY`.
- Limits stated by PwC: the premium does **not** control for education, experience or location; trends are not shown to be caused by AI — [full report](https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/2026-global-ai-jobs-barometer-full-report.pdf) `OPENED-PRIMARY`. UK figure is far lower, 34.2% — [PwC UK](https://www.pwc.co.uk/press-room/press-releases/research-commentary/2026/ai-jobs-barometer-2026.html) `SNIPPET-ONLY`.

**World Economic Forum**
- Future of Jobs 2025 (7 Jan 2025, employer survey): 39% of core skills expected to change by 2030 (44% in 2023). Fastest rising: AI and big data, networks and cybersecurity, technological literacy, creative thinking, resilience/flexibility, curiosity. Programming is roughly *stable*. Systems thinking is listed as core and growing. Net decline: manual dexterity; small net decline for reading/writing/mathematics — [WEF skills outlook](https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/) `OPENED-PRIMARY`. Limit: employer expectations, not outcomes.
- No "Future of Jobs 2026" found. 2026 WEF output is scenario work ("Four Futures for Jobs", Jan 2026) and skills papers stressing human-centric skills — [WEF, Jan 2026](https://www.weforum.org/stories/2026/01/davos-here-s-what-to-know-about-jobs-and-skills-transformation/) `OPENED-PRIMARY`.

**LinkedIn (stake: sells hiring and courses)**
- Skills on the Rise 2026 (24 Feb 2026), US engineering list includes RAG, LLMOps, Gemini, GitHub Copilot, people management, LangChain, OpenAI API, vector databases, FastAPI, fine-tuning. Method: growth in skills added to profiles and held by people hired, Dec 2024-Nov 2025 vs prior year; no growth rates published; language and basic digital skills excluded — [LinkedIn News](https://www.linkedin.com/pulse/linkedin-skills-rise-2026-fastest-growing-engineering-linkedin-news-5qdqe) `OPENED-PRIMARY`.
- Global themes: cross-functional collaboration, stakeholder communication, public speaking — [LinkedIn](https://news.linkedin.com/2026/Skills-on-the-rise-2026) `OPENED-PRIMARY`.
- Work Change Report: LinkedIn *expects* 70% of skills in most jobs to change by 2030 (forecast) — [15 Jan 2025](https://news.linkedin.com/2025/work-change-report-2025) `OPENED-PRIMARY`.

**Stack Overflow Developer Survey 2026** (30,903 valid responses, 169 countries, 23 Jun-5 Aug 2026; opt-in via Stack Overflow) — [methodology](https://survey.stackoverflow.co/2026/methodology) `OPENED-PRIMARY`
- Languages used: JavaScript 62.0%, SQL 58.4%, HTML/CSS 58.2%, Python 58.0%, Bash/Shell 51.3%, TypeScript 43.8%, Java 27.6%, C# 27.1%, Rust 18.0%, Go 16.5% — [languages](https://survey.stackoverflow.co/2026/technology/data/languages) `OPENED-PRIMARY`.
- 73% use coding assistants/agents daily. Trust is conditional: 48.0% trust output when they can easily verify it; 6.6% trust it for many tasks including important decisions; 12.3% do not trust it for most tasks. AI is rated useful for technical tasks (70%+) but weak for communication (35%) — [AI section](https://survey.stackoverflow.co/2026/ai) and [overview](https://survey.stackoverflow.co/2026) `OPENED-PRIMARY`.
- Learning sources in the past year: technical documentation 58.9%, AI tools 52.6%, other online resources 51.7%, videos 41.1%, courses 29.3%, books 26.5%. 79% learned AI skills; 52% learned new coding skills — [Community](https://survey.stackoverflow.co/2026/community) `OPENED-PRIMARY`.
- Biggest source of friction at work: unclear priorities or requirements (16.6%) — [Work](https://survey.stackoverflow.co/2026/work) `OPENED-PRIMARY`. Most important context for agents: project goals/requirements 85%, code/docs 73% — [overview](https://survey.stackoverflow.co/2026) `OPENED-PRIMARY`.

**GitHub Octoverse 2026** (28 Oct 2026, window Oct 2025-Sep 2026; stake: sells Copilot)
- Order by monthly contributors: TypeScript, Python, JavaScript. TypeScript +3.62M, Python +3.23M, JavaScript +1.82M; Rust fastest in percentage terms. Developers started more than 40% of pull requests with an agent in September (17% in March) — [GitHub](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/) `OPENED-PRIMARY`. Limits: GitHub only; one account counts in several languages; "contributor" includes commenting. GitHub raises as an open question whether agents' default choices push language share.

**DORA (Google Cloud; stake: cloud vendor)**
- 2025 AI Capabilities Model (nearly 5,000 respondents, 100+ hours qualitative): seven capabilities that amplify AI benefit: clear AI stance, healthy data ecosystems, AI-accessible internal data, strong version control, small batches, user-centric focus, quality internal platforms. Teams without user focus can be *harmed* by AI adoption — [DORA PDF](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf) `OPENED-PRIMARY`.
- **There is no DORA 2026 annual survey or State report.** Announced 3 Sep 2026 — [DORA on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7501291221559214080) `OPENED-PRIMARY`. What exists in 2026 is the *ROI* report, which describes a J-curve and a "verification tax" — [DORA ROI PDF](https://services.google.com/fh/files/misc/dora-roi-of-ai-assisted-software-development-2026.pdf) `OPENED-PRIMARY`.

**Other 2026 signals**
- 2,620 engineering ads at 51 tech employers, 31 Oct 2026: AI agents 21.7%, LLMs 17.4%, MCP 5.1%, evals 4.8%, RAG 3.7%, prompt engineering 2.6%; 23.4% expect AI-tool use, 6.4% name a tool — [host0, 9 Nov 2026](https://host0.ai/blog/ai-in-job-posts) `OPENED-PRIMARY`. Stake: small AI company; own method, not peer reviewed.
- 271 HR/talent leaders on early-career hiring: screen for problem-solving 76%, learning agility 73%, communication 70%, technical foundation 49%, AI fluency 40%, knowing when AI is wrong 38% (last). 87% agree skill and judgement matter more than fluency with AI tools — [Kyle & Co / CoderPad, Nov 2026](https://coderpad.io/wp-content/uploads/2026/10/coderpad-the-raw-materials-early-career-hiring-in-the-ai-era.pdf) `OPENED-PRIMARY`. Stake: sponsored by an interview-tool vendor.
- 1,569 developers in 77 countries (Apr 2026): 85% of juniors say AI improved their understanding; only 16% of seniors say juniors fully understand the AI code they submit. 72% of seniors rank critical thinking as the top capability for juniors; 70% say real project experience is the top readiness signal — [BairesDev](https://www.bairesdev.com/files/Exec_Summary_Dev_Barometer_Q2_2026.pdf) `OPENED-PRIMARY`. Stake: outsourcing vendor; self-report.
- 1,100+ developers (8 Jan 2026): 96% do not fully trust AI code, 48% always check before committing, 38% say reviewing AI code takes more effort than human code — [Sonar](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/) `OPENED-PRIMARY`. 47% named reviewing/validating AI code as the most important skill — [Sonar PDF](https://www.sonarsource.com/state-of-code-developer-survey-report.pdf) `SNIPPET-ONLY`. Stake: sells code-verification software.

### Inferences
- Convergence across independent-ish sources (Burning Glass, Lightcast, Sonar, NACE, CoderPad) on *verification and judgement* is stronger than on any single AI tool.
- LinkedIn's "RAG/LangChain/prompt engineering" list and the host0 ad count disagree in emphasis. Named tools rise fast on profiles; employers' ads name agents and LLMs much more than prompt engineering. Teach the concept, not the brand.
- "Learn one language deeply, then a second fast" is better supported than "learn many languages" (12 of 16 languages losing share; Python rising; TypeScript first on GitHub).

### Gaps
- No Iran-specific job-ad or skills dataset was found or opened. Say so on stage.
- Indeed Q3 2026 tech update and Randstad's 2026 tech-talent report were seen as `SNIPPET-ONLY` and are not used.

---

## 2. Durable skills: who argues for each, and what data supports it?

### Takeaway
There is real expert convergence on fundamentals, verification, specification, systems judgement and product sense. Data is strongest for code review, testing/verification, debugging and security; moderate for communication and specification; weakest for "taste", domain knowledge and English.

### Cited Findings

| Skill | Credible voice (date, URL) | Data | Strength and limits |
|---|---|---|---|
| CS fundamentals | UC Berkeley CS 61A staff, Fall 2026: the most capable AI users have strong foundations; hand-writing programs is a proven way to build them — [What's New](https://cs61a.org/fa26/articles/whats-new/), [syllabus](https://cs61a.org/fa26/syllabus/) `OPENED-PRIMARY`. Andrew Ng, 14 Aug 2026: fundamentals let you see trade-offs and steer agents — [The Batch](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map) `OPENED-PRIMARY` | 0 of 54 practitioners said fundamentals matter less ([Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap)); CS2023 core hours below | Strong consensus. Ng's map: 10,000+ job ads plus interviews, method unpublished; he sells courses. He also says not to code by hand at work |
| Systems thinking / architecture / operations | Karpathy, 30 Apr 2026: agents recall API details; humans must own invariants, identity, security boundaries, system shape — [summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/) `OPENED-PRIMARY` (page says text is LLM-cleaned from his talk). Thoughtworks retreat, Feb 2026: engineering becomes risk management — [report page](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development) `OPENED-PRIMARY` | CI/CD 19.4%, Kubernetes 14.5% of entry ads ([Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap)); operations/pipelines entering the top 20 ([Lightcast](https://lightcast.io/resources/blog/work-intelligence-software-engineering-change)); IBM says juniors must understand systems end to end ([IBM, 2 Mar 2026](https://www.ibm.com/think/news/entry-level-roles-get-reset-ai) `OPENED-PRIMARY`) | Good. Thoughtworks is an invite-only retreat by a consultancy |
| Reading and reviewing code | Canva engineering, 11 Jun 2025: engineers read far more than they write; reading/improving AI code is critical — [Canva](https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/) `OPENED-PRIMARY`. Margaret-Anne Storey, ACM Queue, 1 Jun 2026: review and walkthroughs repair "cognitive debt" — [ACM Queue](https://queue.acm.org/doi/10.1145/3807966) `OPENED-PRIMARY`. Addy Osmani, 14 Mar 2026, comprehension debt — [blog](https://addyosmani.com/blog/comprehension-debt/) `OPENED-PRIMARY` | Code review in entry ads 7.8% to 18.5% ([Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap)) | Strong |
| Testing, verification, evals | Thoughtworks Europe retreat, Jun 2026: generation is no longer the bottleneck, verification is — [report page](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development-europe-2026) `OPENED-PRIMARY`. Martin Fowler, 18 Feb 2026, on TDD for driving LLMs (he flags his own confirmation bias) — [Fragments](https://martinfowler.com/fragments/2026-02-18.html) `OPENED-PRIMARY`. Simon Willison, red/green TDD — [guide](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/) `OPENED-PRIMARY`. Hamel Husain and Shreya Shankar, 18 Sep 2026 — [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/) `OPENED-PRIMARY` (they sell a course) | 96% do not fully trust, 48% always check ([Sonar](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/)); 48% trust only what they can easily verify ([SO 2026](https://survey.stackoverflow.co/2026/ai)) | Strong for testing. "Evals" appears in only 4.8% of 2,620 ads ([host0](https://host0.ai/blog/ai-in-job-posts)) |
| Debugging | Shen and Tamkin: largest AI-vs-no-AI gap was on debugging questions — [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills) `OPENED-PRIMARY` | Debugging moving up in ads ([Lightcast](https://lightcast.io/resources/blog/work-intelligence-software-engineering-change)); "catches and fixes AI mistakes" is the top skill signal (66%) if AI is allowed in hiring ([CoderPad 2026](https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/) `OPENED-PRIMARY`; 650+ participants, vendor) | Strong |
| Problem decomposition and specification | Sean Grove (OpenAI), Jul 2025: specification as the scarce skill — [talk](https://www.youtube.com/watch?v=8rABwKRsec4) `SNIPPET-ONLY`. OpenAI harness engineering, 11 Feb 2026: work became breaking goals into blocks and specifying intent — [OpenAI](https://openai.com/index/harness-engineering/) `OPENED-PRIMARY`. Kent Beck: language expertise loses leverage; task breakdown and feedback loops gain — [site](https://kentbeck.com/) `OPENED-PRIMARY` (undated) | Unclear requirements is the number one friction, 16.6% ([SO 2026](https://survey.stackoverflow.co/2026/work)) | Moderate. OpenAI sells the agent; the case is a greenfield internal product |
| Context engineering | Anthropic, 29 Sep 2025: context is finite, find the smallest high-signal set — [Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) `OPENED-PRIMARY`. OpenAI: a roughly 100-line AGENTS.md as a map, not an encyclopedia — [OpenAI](https://openai.com/index/harness-engineering/) `OPENED-PRIMARY` | Goals 85%, code/docs 73% as key agent context ([SO 2026](https://survey.stackoverflow.co/2026)); AI-accessible internal data is a DORA capability ([DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)) | Moderate; vendor-led. The durable core is clear writing and information architecture |
| Agent orchestration | Karpathy: "agentic engineering" as coordinating fallible agents while keeping quality — [summary](https://karpathy.bearblog.dev/sequoia-ascent-2026/) `OPENED-PRIMARY`. Stanford CS146S — [site](https://www.themodernsoftware.dev/) `OPENED-PRIMARY` | Over 40% of PRs started with an agent, Sep 2026 ([GitHub](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)); agent-development almost 6% of entry ads ([GovTech](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers)) | Demand real, half-life short: CS146S reportedly replaced most weeks in one year ([comparison](https://quidproquo.cc/posts/ai/2026-08-16-cs146s-course-map-en/) `SNIPPET-ONLY`) |
| Security | OWASP Top 10 for Agentic Applications 2026 (Dec 2025), goal hijack first — [OWASP](https://genai.owasp.org/download/52117/) `OPENED-PRIMARY`. Thoughtworks: security is the uncomfortable gap — [report page](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development) `OPENED-PRIMARY` | Veracode, 29 Oct 2026: 18 models, 4 languages, 4 weakness types; average security pass rate 62% (was 56%), about 38% of tasks vulnerable, best models 73%, syntax near 100% — [Veracode](https://www.veracode.com/blog/fall-2026-genai-code-security/) `OPENED-PRIMARY` | Strong direction. Veracode sells scanning; prompts contain no security guidance; only four CWE types |
| Domain knowledge | Storey: "intent debt", missing goals and rationale — [ACM Queue](https://queue.acm.org/doi/10.1145/3807966) `OPENED-PRIMARY`. Ng: "shaping the build" needs business context — [The Batch](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map) `OPENED-PRIMARY` | User-centric focus moderates AI benefit ([DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)) | Moderate-weak; little direct measurement |
| Product taste / judgement | Karpathy (taste, oversight); Ng (deciding what to build is the bottleneck, [BI, Aug 2025](https://www.businessinsider.com/andrew-ng-product-management-bottleneck-coding-ai-startups-2025-8) `SNIPPET-ONLY`) | Nearly four in five US employers want candidates who know when *not* to use AI — [NACE, 18 Nov 2026](https://www.naceweb.org/job-market/trends-and-predictions/employers-want-ai-skills-but-draw-lines-around-ai-use) `OPENED-PRIMARY` (311 employers) | Moderate. Burning Glass: employers cannot agree how to define or test "judgement" |
| Communication | LinkedIn 2026 global themes — [LinkedIn](https://news.linkedin.com/2026/Skills-on-the-rise-2026) `OPENED-PRIMARY` | 70% of 271 hiring leaders screen for it ([Kyle & Co](https://coderpad.io/wp-content/uploads/2026/10/coderpad-the-raw-materials-early-career-hiring-in-the-ai-era.pdf)); "explains trade-offs and correctness" 56% ([CoderPad](https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/)) | Moderate-strong |
| English | No named 2023-2026 expert arguing specifically for English was found | HumanEval-XL (2024, 80 problems, 23 languages): GPT-4 Python pass@1 English 82.50 vs Persian 78.75; GPT-3.5 66.25 vs 60.00 — [arXiv](https://arxiv.org/html/2402.16694v2) `OPENED-PRIMARY`. Sept 2026 replication, 7 LLMs: prompt language significantly affects accuracy; translation helps only sometimes — [arXiv](https://arxiv.org/abs/2609.18311) `OPENED-PRIMARY`. Documentation is the top learning source, 58.9% ([SO 2026](https://survey.stackoverflow.co/2026/community)) | Weak-moderate. Counter-evidence: English not necessarily better in a 460-task study ([TOSEM, Oct 2026](https://doi.org/10.1145/3845994) `SNIPPET-ONLY`); Turkish beat English with Gemini 3 Pro ([IEEE, Feb 2026](https://doi.org/10.1109/iisec69317.2026.11418431) `SNIPPET-ONLY`) |

- "Paradox of supervision": supervising AI needs the very skills that overuse may erode. 132 engineers surveyed, 53 interviews, Aug 2025; more than half can "fully delegate" only 0-20% of work; some deliberately practise without AI. Non-anonymous, own employees, self-report — [Anthropic, 2 Dec 2025](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic) `OPENED-PRIMARY`.
- Karpathy repeats a line he credits to a tweet he read: "You can outsource your thinking, but you can't outsource your understanding" — [Karpathy](https://karpathy.bearblog.dev/sequoia-ascent-2026/) `OPENED-PRIMARY`. Credit it as "quoted by Karpathy".

**Disagreements worth showing on stage**
- Ng says do not code by hand and argues reviewing every line makes the human the bottleneck ([July 2026 talk](https://ceointerviews.ai/interview/1153863/) `SNIPPET-ONLY`); Berkeley, CMU and Shopify insist on hand-coding ability or ownership while learning. The resolution most consistent with the evidence: hand practice for *learning*, delegation for *production you can verify*.
- Torvalds (Oct 2026): AI is a gateway into programming, start with toy projects, be careful with serious work ([TechRadar](https://www.techradar.com/pro/linux-founder-linus-torvalds-says-ai-is-a-gateway-drug-into-programming-but-cautions-about-using-ai-for-serious-work) `SNIPPET-ONLY`).

### Inferences
- A simple durability test for the audience: would this skill still matter if the tool vanished tomorrow and a better one arrived? Verification, decomposition, reading, debugging, security: yes. LangChain syntax: no.

### Gaps
- No study yet shows that any one of these skills *causes* better careers in the AI era. The case rests on demand data plus mechanism.

---

## 3. Learning with AI: what does the science say, and what rules follow?

### Takeaway
AI reliably raises performance *while you have it*. Effects on what you can do *without* it range from clearly negative to clearly positive, and average near zero after bias correction. Answer-seeking harms; trying first, asking for hints or explanations, and testing yourself unaided are the patterns most often linked to better outcomes. Most pattern evidence is correlational.

### Cited Findings

**A. Programming-specific studies**
- **Shen and Tamkin (Anthropic), RCT, n=52**, mostly junior engineers learning a new Python library (Trio). Quiz without AI: 50% (AI group) vs 67% (hand-coding), d=0.738, p=0.01; about 2 minutes faster with AI, not significant; biggest gap on debugging. Six patterns: delegation, progressive reliance and iterative AI debugging averaged under 40%; generation-then-comprehension (n=2), code-plus-explanation (n=3) and conceptual inquiry (n=7) averaged 65% or more. Authors: patterns are not causal, quiz was immediate, sample small, chat assistant rather than agent — [Anthropic, 29 Jan 2026](https://www.anthropic.com/research/AI-assistance-coding-skills) `OPENED-PRIMARY`. Stake: Anthropic sells the assistant, so this is a finding against interest.
  - **Correction, one day before this file:** arXiv v3 (23 Nov 2026, "Corrected numerical issues") changes the text from "17%" to **15.4%** (4.15 points on a 27-point quiz). d and p unchanged. The blog still says 17% and 50 vs 67. Versions compared directly — [arXiv 2601.20245](https://arxiv.org/abs/2601.20245) `OPENED-PRIMARY`. Safe wording: "about 15 to 17 points lower".
- **Bassner et al., TUM, three-arm RCT, n=275, CS1, 90 min**: both ChatGPT and a hint-only tutor raised exercise scores; neither raised knowledge gains or code comprehension over no AI. Only the hint tutor raised intrinsic motivation; students preferred the answer-giver ("comfort trap") — [Computers & Education: AI, Dec 2025](https://doi.org/10.1016/j.caeai.2025.100537) `OPENED-PRIMARY` (abstract).
- **Gardella et al., n=22**: Copilot beat a human partner on immediate performance; a week later the drop was larger after AI, but absolute retest difference was *not* significant — [PDF, 2026](https://juholeinonen.com/assets/pdf/gardella2026fast.pdf) `OPENED-PRIMARY`.
- **Prather et al., ICER 2024, n=21, eye tracking**: 20 of 21 finished, but strugglers were left with an illusion of competence; those with metacognitive difficulties accepted more Copilot suggestions (34.1% vs 24.5%). Small, single site — [ACM](https://dl.acm.org/doi/fullHtml/10.1145/3632620.3671116) `OPENED-PRIMARY`.
- **Barth et al., ETH, preregistered crossover, 1,059 students, 6 weeks CS1**: telling the tutor via system prompt to scaffold changed none of four confirmatory outcomes — [ACM ICER 2026](https://dl.acm.org/doi/pdf/10.1145/3765964.3811656) `OPENED-PRIMARY`.
- **Liding et al., SIGCSE 2026 poster, RCT n=178 CS1**: Socratic hints cost time and attempts with no evidence of better long-term outcomes than targeted hints — [ACM](https://dl.acm.org/doi/10.1145/3770761.3777327) `OPENED-PRIMARY` (abstract). *Counter-evidence to "Socratic is always best".*
- **Berkeley CS1 oral exams, 541 students, Spring 2026**: oral performance correlated with the proctored midterm at r=0.44; code correctness only r=0.13 (final exam 0.43 vs 0.10) — [ACM, 11 Nov 2026](https://doi.org/10.1145/3795867.3831017) `OPENED-PRIMARY` (abstract). Working code no longer proves understanding; explaining it does, partly.
- **CS50 duck (Harvard)**: pedagogical guardrails by design; students rated it effective (35% very, 35% effective, 25% somewhat, 5% not) — [SIGCSE 2024](https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf) `OPENED-PRIMARY`; 2025 paper shows staff disagree on how much help is right — [SIGCSE 2025](https://cs.harvard.edu/malan/publications/fp0627-liu.pdf) `OPENED-PRIMARY`. **Not a learning-outcome trial.**

**B. General learning trials**
- **Bastani et al., PNAS, nearly 1,000 Turkish high-school students, maths**: with AI, practice grades +48% (plain GPT-4) and +127% (hint tutor); when AI was removed, plain GPT-4 group scored 17% worse than never-AI; hint tutor largely removed the harm but showed no gain over control — [PNAS, 25 Jun 2025](https://www.pnas.org/doi/10.1073/pnas.2422633122) `OPENED-PRIMARY`. A correction was issued 20 Aug 2025 (content not read).
- **Kestin et al., Harvard, crossover RCT, N=194 physics**: purpose-built tutor gave median gains over double those of an active-learning class in median 49 vs 60 minutes — [Scientific Reports, 3 Jun 2025](https://www.nature.com/articles/s41598-025-97652-6) `OPENED-PRIMARY`. Limits: two lessons, immediate tests, expert-designed content. Not "ChatGPT beats teachers".
- **Liu et al., COLM 2026, three RCTs, N=1,222**: about 10 minutes of AI help, then removed: solve rate 0.57 vs 0.73 (exp. 1), 0.71 vs 0.77 (exp. 2), 0.76 vs 0.89 reading (exp. 3). 61% used AI mainly to get answers and fared worst (0.65); hint-users (0.76) were like control (0.77). Limits: paid online adults, immediate test, usage split not randomised, skip-rate effect not significant in exp. 2 — [arXiv v5, 3 Oct 2026](https://arxiv.org/abs/2604.04721v5) `OPENED-PRIMARY`.
- **Maier et al., LMU, preregistered, N=704**: an assistant giving solutions only on request had no effect on the unaided test; a message pointing out "you asked for the solution right away" cut offloading (OR 0.47) and improved test performance (OR 1.51); points/rewards did nothing — [arXiv, 17 Sep 2026](https://arxiv.org/abs/2609.20143) `OPENED-PRIMARY`.
- **Asher et al., CMU, preregistered, n=400**: Socratic correction after errors +0.24 SD over explanations, at nearly twice the time; personalised explanations were no better than generic — [arXiv, 15 Nov 2026](https://arxiv.org/abs/2611.20061) `OPENED-PRIMARY`.
- **Akgun and Toker, 61 students**: attempting the problem before ChatGPT beat immediate ChatGPT (91.85 vs 78.59, d=1.54) — [arXiv, Apr 2025](https://arxiv.org/abs/2504.10249) `OPENED-PRIMARY`. Small; implausibly large effect. Only Study 1 has a no-pretest comparison; Studies 2 and 3 compare two kinds of pretest (Study 2: no difference), so the try-first claim rests on those 61 students.
- **Kumar et al., 1,202 online participants**: LLM explanations helped most when people tried first — [PDF mirror](https://aiskillatlas.org/pdfs/Kumar%20et%20al%20(2025)%20-%20AIED%20-%20Math%20Education%20with%20Large%20Language%20Models.pdf) `OPENED-SECONDARY` (third-party host).
- **Contractor and Reyes, Middlebury, 211 students, proctored**: ChatGPT access +0.28 SD immediately, +0.21 SD after a week (p=0.068); gains held for tutor-style use and faded when AI wrote for them. 70% take-up; some rule violations — [arXiv, Oct 2026](https://arxiv.org/pdf/2607.08849) `OPENED-PRIMARY`. *Positive counter-example.*
- **University of Maryland, cluster RCT, 2,379 students, 30 instructors**: tutor access cut final grades 0.37 SD within same-course comparisons; not significant in the full sample; only about 15% used it — [EdWorkingPaper 26-1598, Oct 2026](https://edsi.umd.edu/sites/default/files/ai26-1598.pdf) `OPENED-PRIMARY`. Not peer reviewed; mechanism unknown.
- **19-university RCT, 7,200 students**: AI designed by the course's own instructors raised proctored exam scores +0.32 SD (class-level 0.26) — [arXiv, 14 Nov 2026](https://arxiv.org/abs/2611.19099) `OPENED-PRIMARY`. *Second positive counter-example.*
- **Chen et al., CMU proofs course, n=153**: earlier chatbot access raised homework 2.56 points, no significant exam gain; a feedback tool that required an attempt first showed no negative association — [arXiv, 22 Oct 2026](https://arxiv.org/abs/2610.31481) `OPENED-PRIMARY`.

**C. Brain and critical-thinking studies (handle with care)**
- **MIT "Your Brain on ChatGPT"**: n=54 (18 in session 4), essays, EEG; weaker connectivity and recall for LLM users. Preprint — [arXiv 2506.08872](https://arxiv.org/abs/2506.08872) `OPENED-PRIMARY`. Formal critique: underpowered (about 159 needed on their calculation), up to 1,000 ANOVAs, inconsistent reporting; fewer "significant connections" does not mean less brain activity — [Stanković et al., arXiv 2601.00856](https://arxiv.org/pdf/2601.00856) `OPENED-PRIMARY`. It is about essays, not coding. v2 was revised 31 Dec 2025, after the critique was drafted.
- **Microsoft/CMU, CHI 2025, 319 knowledge workers, 936 examples**: more confidence in AI goes with less *self-reported* critical thinking; more self-confidence with more — [Microsoft Research](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/) `OPENED-PRIMARY`. Correlational, self-report.

**D. Syntheses**
- **Boolzen et al., Aug 2026, STEM**: 49 studies, uncorrected g=0.84; after publication-bias correction mean 0.076 (95% CrI -0.37 to 0.79); no study had low risk of bias. Help is likelier when AI augments activity and targets knowledge; substitution can harm — [Springer](https://link.springer.com/article/10.1007/s10462-026-11665-9) `OPENED-PRIMARY`.
- **Retracted:** the widely shared 2025 ChatGPT meta-analysis (Wang and Fan) was retracted 22 Apr 2026 — [Springer Nature](https://www.nature.com/articles/s41599-026-07310-z) `OPENED-PRIMARY`.
- An audit of 14 of 39 positive meta-analyses reports serious flaws; preliminary re-analysis averages near zero — [Hechinger Report, 26 Oct 2026](https://hechingerreport.org/proof-points-ai-education-meta-analysis/) `OPENED-SECONDARY`.
- Counter: a 32-study programming meta-analysis still reports g=0.54 — [Deng et al., Feb 2026](https://journals.sagepub.com/doi/10.1177/07356331261424211) `SNIPPET-ONLY`; treat cautiously given the audits.

### Concrete rules (each tied to a source)
1. **Try first, 15-20 minutes, then ask.** ([Akgun](https://arxiv.org/abs/2504.10249); [Kumar](https://aiskillatlas.org/pdfs/Kumar%20et%20al%20(2025)%20-%20AIED%20-%20Math%20Education%20with%20Large%20Language%20Models.pdf); [Chen](https://arxiv.org/abs/2610.31481).) The minute count is this file's suggestion, not a tested value.
2. **Ask for a hint, a concept or a check; never "give me the answer" while practising.** ([Liu](https://arxiv.org/abs/2604.04721v5); [Bastani](https://www.pnas.org/doi/10.1073/pnas.2422633122).)
3. **If AI wrote it, interrogate it.** Ask why, what breaks, what the alternative is. ([Shen and Tamkin](https://www.anthropic.com/research/AI-assistance-coding-skills): generation-then-comprehension pattern.)
4. **Debug alone first.** Form a hypothesis before pasting the error; iterative AI debugging was both slow and low-scoring. ([Shen and Tamkin](https://www.anthropic.com/research/AI-assistance-coding-skills).)
5. **Test yourself with AI off, every week, and again a week later.** Performance with AI is not evidence of learning. ([Bassner](https://doi.org/10.1016/j.caeai.2025.100537); [Gardella](https://juholeinonen.com/assets/pdf/gardella2026fast.pdf).)
6. **Explain it aloud.** Ten minutes, to a person or a recorder, with no notes. ([Berkeley oral exams](https://doi.org/10.1145/3795867.3831017).)
7. **Enforce the rule with the environment, not willpower or a prompt.** Separate no-AI sessions; a study mode you can click away, or a "be Socratic" prompt, is weak. ([Barth](https://dl.acm.org/doi/pdf/10.1145/3765964.3811656).)
8. **Keep an offload log.** Write one line when you asked for a solution instead of trying; naming it helped. ([Maier](https://arxiv.org/abs/2609.20143).)
9. **Match help to level.** Beginners: turn off autocomplete, since it interrupts and misleads strugglers. ([Prather](https://dl.acm.org/doi/fullHtml/10.1145/3632620.3671116).)
10. **Prefer a human partner or teacher-designed AI when available.** ([19-university RCT](https://arxiv.org/abs/2611.19099); [Gardella](https://juholeinonen.com/assets/pdf/gardella2026fast.pdf): human partner was emotionally better.)
11. **Delegate only what you could verify.** ([SO 2026](https://survey.stackoverflow.co/2026/ai): 48% trust only the easily verifiable; [Anthropic survey](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic).)

### Inferences
- "Learning" and "shipping" need different modes. Announce the mode before opening the editor.
- Positive trials share human-designed structure or self-chosen tutor-like use; negative trials share easy access to full answers.

### Gaps
- No long-term trial follows developers for months with coding *agents*. Shen and Tamkin expect agent effects to be larger; that is a prediction.
- "Widening gap" is suggested by small qualitative work and by larger losses for first-generation students in the Maryland trial; it is not settled.

---

## 4. Curriculum: what changed, and which fundamentals remain?

### Takeaway
Top programmes added agentic-coding units *on top of* fundamentals and moved assessment to proctored, oral and process-based formats. None of the pages opened drops programming fundamentals.

### Cited Findings
- **CS2023 (ACM/IEEE-CS/AAAI, Jan 2024)**: 17 knowledge areas, 270 core hours. Core hours include Mathematics and Statistics 55, Software Development Fundamentals 43, Algorithmic Foundations 32, Systems Fundamentals 18, Society/Ethics 18, AI 12, Parallel/Distributed 9, OS 8, Networking 7, Security 6, Software Engineering 6. Authors say it was too early to predict generative-AI effects — [CS2023 report](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm) `OPENED-PRIMARY`; hours table — [csed.acm.org](https://csed.acm.org/mockup-cs2023/) `OPENED-PRIMARY`.
- **ACM GenAI task force (16 Feb 2026)**: 763 survey responses (about 500 for most items), 49 countries; shifts toward code comprehension, in-person and oral assessment, explicit AI literacy; 48% cite lack of best-practice examples — [ACM PDF](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf) `OPENED-PRIMARY`.
- **UC Berkeley CS 61A, Fall 2026**: new two-week application-design unit with agents; Scheme replaced by Gleam; final project with agents; most content unchanged and hand-written; process recording, staff/LLM checkoffs, proctored quizzes — [What's New](https://cs61a.org/fa26/articles/whats-new/) `OPENED-PRIMARY`.
- **Stanford CS146S, Fall 2026**: MCP, agent skills, spec-driven development, loop engineering, software factory; prerequisite CS111/CS161-level — [course site](https://www.themodernsoftware.dev/) `OPENED-PRIMARY`. Assignments are public — [GitHub](https://github.com/mihail911/modern-software-dev-assignments/) (link checked). Unofficial diff: prompting shrank from a full week to a sub-topic; 30% of grade now open-source contributions — [secondary](https://quidproquo.cc/posts/ai/2026-08-16-cs146s-course-map-en/) `SNIPPET-ONLY`.
- **CMU 15-113/15-114, Fall 2026**: "Effective Coding with AI", with programming prerequisites; 20% oral project evaluations/quizzes; may not submit AI code you cannot explain — [CMU](https://www.cs.cmu.edu/~113/) `OPENED-PRIMARY`.
- **MIT Missing Semester 2026**: adds Agentic Coding, Code Quality, Beyond the Code beside shell, Git, debugging; AI folded into each lecture; community Persian translation listed — [MIT](https://missing.csail.mit.edu/) `OPENED-PRIMARY`. MIT 6.1040 Software Design teaches intentional LLM use; 6.100A still teaches Python, testing, debugging, complexity — [catalog](https://student.mit.edu/catalog/m6a.html) `SNIPPET-ONLY`.

### Inferences
- The order used by strong programmes is the order to recommend: program by hand, then tools/testing, then agents. CS146S requires systems and algorithms *before* agents.

### Gaps
- Iranian university curricula were not researched.

---

## 5. Hiring: how did interviews and junior roles change, and what do employers say they want?

### Takeaway
Interviews split: some firms require AI, some forbid it, some use both plus in-person rounds. The common test is whether you can explain, verify and own the result. Candidates must be ready for **three modes**: no AI, AI optional, AI mandatory.

### Cited Findings
- **Canva (11 Jun 2025)** expects AI use in backend/frontend/ML interviews; successful candidates clarified requirements, used AI for defined subtasks, reviewed critically and debugged — [Canva](https://www.canva.dev/blog/engineering/yes-you-can-use-ai-in-our-interviews/) `OPENED-PRIMARY`.
- **Meta (20 Oct 2025)** piloting an AI-enabled coding interview — [Meta on LinkedIn](https://www.linkedin.com/posts/meta_metacareers-interviewing-softwareengineering-activity-7386046074240737280-wnwA) `OPENED-PRIMARY`. Round details (60 minutes, multi-file, no-AI round kept) come only from candidate/prep-site reports — [aggregator](https://pushkarkumar-dev.github.io/system-design-labs/interviews/companies/) `SNIPPET-ONLY`.
- **Google**: AI-fluency expectations and a Gemini "code comprehension" interview rolled out in phases in 2026, per internal documents — [Business Insider, 20 Oct 2026](https://www.businessinsider.com/google-interview-process-ai-gemini-coding-comprehension-software-engineer-2026-10) `OPENED-SECONDARY` (partly paywalled). Pichai's June 2025 remark on adding at least one in-person round to check fundamentals — [secondary](https://redirecruit.com/tech-giants-shifting-back-to-in-person-interviews/) `SNIPPET-ONLY`.
- **Amazon** reportedly bars GenAI in live interviews unless permitted — [aggregator](https://placed.dev/guides/ai-enabled-coding-interview) `SNIPPET-ONLY`.
- January 2026 survey of 400 engineering leaders: 62% still prohibit AI in interviews; 71% say AI made skills harder to assess — via [GovTech](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers) `OPENED-SECONDARY` (original survey not identified).
- **NACE Job Outlook 2027** (311 US employers, 6 Aug-11 Sep 2026): 67% say entry-level staff use AI; best proof is discussing specific examples in interview; 47% say candidates' AI use in the job search is unacceptable; among the tolerant, AI *inside* an interview/assessment is near-universally rejected — [NACE, 18 Nov 2026](https://www.naceweb.org/job-market/trends-and-predictions/employers-want-ai-skills-but-draw-lines-around-ai-use) `OPENED-PRIMARY`. Spring 2026 (185 respondents): more than a third of entry-level jobs require AI skills — [NACE, 20 Apr 2026](https://www.naceweb.org/job-market/trends-and-predictions/demand-for-ai-skills-in-entry-level-jobs-nearly-triples-since-fall-2025/) `OPENED-PRIMARY`.
- **Shopify**: Lütke memo (April 2025) made AI use a baseline expectation, added to reviews — [text mirror](https://thegeneralconsultingcompany.com/content/tobi-ai-memo.pdf) `SNIPPET-ONLY` (X original would not open). Intern page: 1,000 interns again; borrows Waterloo's three modes (no AI / optional / mandatory); "whoever submits a PR owns the code in it"; be able to explain two or three layers below yours; admits nobody knows if this predicts performance — [Shopify](https://internships.shopify.com/pages/zero-experience-infinite-leverage) `OPENED-PRIMARY` (undated).
- **GitLab**: daily AI use expected of everyone (11 May 2026, in a restructuring letter) — [GitLab Act 2](https://about.gitlab.com/blog/gitlab-act-2/) `OPENED-PRIMARY`; fluency defined as what to delegate and how to judge it (2 Sep 2026) — [GitLab](https://about.gitlab.com/blog/how-gitlab-fosters-ai-fluent-teams/) `OPENED-PRIMARY`.
- **IBM** plans to triple US entry-level hiring in 2026; wants systems thinking, critical analysis, human oversight, learning agility — [IBM, 2 Mar 2026](https://www.ibm.com/think/news/entry-level-roles-get-reset-ai) `OPENED-PRIMARY`. **Cloudflare** aimed for up to 1,111 interns in 2026 — [Cloudflare, 22 Sep 2025](https://blog.cloudflare.com/cloudflare-1111-intern-program/) `OPENED-PRIMARY`. Announcements are plans, not audited hires.
- Counterweight: software ads are 69.3% senior / 4.5% entry ([Indeed](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/)), and the June 2026 retreat warned of an apprenticeship crisis ([Thoughtworks](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development-europe-2026)).

### Inferences
- A junior's best evidence is a real, small, running system plus a recorded explanation of decisions, tests and one AI mistake they caught.

### Gaps
- No verified data on Iranian or remote-from-Iran interview practice.

---

## 6. Free, high-quality resources reachable from Iran or on a low budget

### Takeaway
Plan for a throttled, expensive, interruptible connection and for AI vendors that do not support Iran. Build the path on Persian domestic sites, text-first English resources, and offline copies. **A new US rule (Aug 2026) makes US university online courses and certificates legally uncertain for people in Iran; do not promise them.**

### Cited Findings — access reality (verify again the week of the event)
- October 2026: tariffs up to 40% higher; international traffic at full price, domestic sites at half; heavy throttling across five ISPs, with uploads to Cloudflare below 0.1 Mbps; 20 Oct reports of renewed trouble reaching ChatGPT, Claude and Grok — [Filterwatch, 6 Nov 2026](https://filter.watch/english/2026/11/06/network-monitoring-october-2026-filtering-the-internet-through-pricing/) `OPENED-PRIMARY`. Stake: digital-rights group.
- 2026 timeline: near-total shutdown from 8 Jan, again 28 Feb-26 May (about 88 days); since then slowed, tiered access — [PrivacyAffairs tracker, 21 Nov 2026](https://www.privacyaffairs.com/internet-shutdowns/) `OPENED-SECONDARY`.
- **OpenAI** does not list Iran; access from unlisted places may lead to blocking — [OpenAI](https://help.openai.com/en/articles/7947663-chatgpt-and-openai-api-supported-countries-and-territories) `OPENED-PRIMARY`. **Anthropic** policy effective 12 Nov 2026: unlisted countries, including Iran, are unsupported for apps, API and resellers — [Anthropic](https://www.anthropic.com/legal/supported-regions) `OPENED-PRIMARY`. **GitHub**: OFAC licence for cloud services in Iran, free and paid, though payment processors may block; **Copilot may not be exported to Iran** — [GitHub docs](https://docs.github.com/en/site-policy/other-site-policies/github-and-trade-controls) `OPENED-PRIMARY`.
- **OFAC suspended General License G on 24 Aug 2026** (wind-down ended 8 Sep) — [OFAC notice](https://ofac.treasury.gov/media/936886/download) `OPENED-PRIMARY`. GL G had covered online undergraduate courses by US academic institutions, including MOOCs, in limited fields. Two universities read the suspension as barring online courses to people located in Iran, with Maryland naming MOOCs explicitly — [UMD](https://research.umd.edu/resources/suspension-of-iran-related-general-authorizations), [Ohio State](https://research.osu.edu/updated-guidance-remote-education-and-operations-involving-iran) `OPENED-PRIMARY`. General License D-2 (personal communications) is not on the suspended list. No Harvard, edX or Coursera statement was found. This is not legal advice.
- CS50x pages are openly readable, but submitting work requires an edX account — [CS50x](https://cs50.harvard.edu/x/) `OPENED-PRIMARY`.

### Persian-language resources (HTTP 200 from the research machine on 24 Nov 2026 unless noted; not tested from inside Iran)
- Faradars, Jadi collection, about 20 titles labelled free (رایگان): programming basics, Python, Git/GitHub, Linux, Docker, networks, ethical hacking, GPT/LLM programming — [faradars.org](https://faradars.org/how-to-learn/jadi-mirmirani) `OPENED-PRIMARY`.
- Maktabkhooneh, Jadi "درک برنامه‌نویسی", titled free, 5 h video + 7 exercises — [course](https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AF%D8%B1%DA%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-mk1019/) `OPENED-PRIMARY`. Free Python list — [maktabkhooneh.org/learn/free-python](https://maktabkhooneh.org/learn/free-python/) `OPENED-PRIMARY`. Other courses are paid; the certificate may cost money (not checked).
- Quera problem set, Persian, auto-judged — [quera.org/problemset](https://quera.org/problemset) `OPENED-PRIMARY`. Quera College courses are **paid** (Python intro list price 3,499,000 toman, shown discounted to 1,749,500 on 24 Nov 2026) — [landing](https://quera.org/college/landpage/python) `OPENED-PRIMARY`.
- Pro Git in Persian: seven sampled pages were 81-94% Persian script, so genuinely translated — [git-scm.com/book/fa/v2](https://git-scm.com/book/fa/v2) `OPENED-PRIMARY`.
- MIT Missing Semester, Persian (the **2020** syllabus, no agentic lecture) — [missing-semester-fa.github.io](https://missing-semester-fa.github.io/) `OPENED-PRIMARY`.
- Learn Git Branching with Persian locale — [link](https://learngitbranching.js.org/?locale=fa_IR) (link checked). Sharif OpenCourseWare — [ocw.sharif.ir](https://ocw.sharif.ir/) `OPENED-PRIMARY`. Jadi's site — [jadi.net](https://jadi.net/) (link checked).
- **Caution:** [cs50xpersian.ir](https://cs50xpersian.ir/) opens, but it sells courses (3,200,000 toman seen), says it is officially supervised by Harvard CS50 and promises a Harvard certificate. Those claims were not verified and the certificate route is uncertain after GL G. Do not endorse without checking.
- `virgool.io` and `mazandlp.com` did not connect from the research machine.

### English, free, text-first (all HTTP 200 on 24 Nov 2026)
- Programming: [Composing Programs](https://www.composingprograms.com/), [Python for Everybody](https://www.py4e.com/), [Automate the Boring Stuff](https://automatetheboringstuff.com/), [Eloquent JavaScript](https://eloquentjavascript.net/), [Exercism](https://exercism.org/), [Python Tutor](https://pythontutor.com/)
- CS core: [OSSU](https://github.com/ossu/computer-science), [Teach Yourself CS](https://teachyourselfcs.com/), [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/), [Nand2Tetris](https://www.nand2tetris.org/), [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/), [SQLBolt](https://sqlbolt.com/)
- Engineering: [Missing Semester 2026](https://missing.csail.mit.edu/), [Software Engineering at Google](https://abseil.io/resources/swe-book) (*historical*, 2020), [Google code review guide](https://google.github.io/eng-practices/review/), [SRE book](https://sre.google/sre-book/table-of-contents/) (*historical*, 2016), [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development), [Full Stack Open](https://fullstackopen.com/en/)
- AI engineering: [Agentic Coding lecture](https://missing.csail.mit.edu/2026/agentic-coding/), [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/), [CS146S](https://www.themodernsoftware.dev/), [HF Agents Course](https://huggingface.co/learn/agents-course/), [Evals FAQ](https://hamel.dev/blog/posts/evals-faq/), [Karpathy Zero to Hero](https://karpathy.ai/zero-to-hero.html) (YouTube-based)
- Security: [PortSwigger Academy](https://portswigger.net/web-security), [OWASP GenAI](https://genai.owasp.org/), [OWASP secure coding with AI](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html) `OPENED-PRIMARY`
- Offline: [Kiwix](https://kiwix.org/en/) (offline archives), [DevDocs](https://devdocs.io/), [Ollama](https://ollama.com/) with open-weight coding models such as [qwen3-coder](https://ollama.com/library/qwen3-coder) or [qwen2.5-coder](https://ollama.com/library/qwen2.5-coder)

### Inferences
- Give the audience a "one good connection" checklist: clone course repos, download DevDocs/Kiwix packs and one small local model, and save PDFs. Then a shutdown does not stop the plan.
- On stage, describe vendor support lists neutrally. Do not advise evading region rules: accounts can be suspended and it exposes attendees.

### Gaps
- Reachability from Iranian ISPs was not measured. Ask two attendees on different ISPs to test the links beforehand.
- Current Coursera/edX/Hugging Face behaviour for Iranian IPs: not found.

---

## 7. 90-day plan skeletons for four personas

### Takeaway
Sequence: understand by hand, then verify, then delegate. Each step has a source; **the 90-day packaging is this file's synthesis and has not been tested in any study.** Assume 7-10 hours a week. Every week, for everyone: two no-AI sessions, one spoken explanation, one offload log ([Maier](https://arxiv.org/abs/2609.20143), [Berkeley](https://doi.org/10.1145/3795867.3831017)).

### Cited Findings (step and source)

**A. CS student**
- Days 1-30, foundations by hand. Composing Programs or the course you are enrolled in; four Quera problems a week with no AI; Git plus shell from Pro Git (fa) and Missing Semester. Why: [Berkeley](https://cs61a.org/fa26/articles/whats-new/), [CS2023 hours](https://csed.acm.org/mockup-cs2023/), Shopify's no-AI mode ([Shopify](https://internships.shopify.com/pages/zero-experience-infinite-leverage)).
- Days 31-60, read, test, debug. Review two open pull requests a week with the [Google checklist](https://google.github.io/eng-practices/review/); write failing tests first ([Willison](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)); read OSTEP chapters; SQL. Why: code review at 18.5% of entry ads ([Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap)); debugging gap ([Shen and Tamkin](https://www.anthropic.com/research/AI-assistance-coding-skills)).
- Days 61-90, direct an agent. One project with a one-page spec, tests, CI, and a security pass; [Agentic Coding lecture](https://missing.csail.mit.edu/2026/agentic-coding/) and one [CS146S assignment](https://github.com/mihail911/modern-software-dev-assignments/); one merged open-source fix; a 10-minute recorded defence. Why: [CMU oral evaluations](https://www.cs.cmu.edu/~113/), [NACE](https://www.naceweb.org/job-market/trends-and-predictions/employers-want-ai-skills-but-draw-lines-around-ai-use).

**B. Absolute beginner**
- Days 1-30, think like a programmer. Jadi "درک برنامه‌نویسی" ([Faradars](https://faradars.org/how-to-learn/jadi-mirmirani)/[Maktabkhooneh](https://maktabkhooneh.org/course/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%AF%D8%B1%DA%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-mk1019/)); easy Quera problems; autocomplete off; AI only to explain an error *after* you guess. Why: [Bastani](https://www.pnas.org/doi/10.1073/pnas.2422633122), [Prather](https://dl.acm.org/doi/fullHtml/10.1145/3632620.3671116), [Liu](https://arxiv.org/abs/2604.04721v5).
- Days 31-60, tools. Git (Jadi's free course, Learn Git Branching fa), SQL, functions, files, first tests; one 150-line program by hand; 20 minutes of English docs a day. Why: docs are the top learning source ([SO 2026](https://survey.stackoverflow.co/2026/community)); version control is a safety net ([DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)).
- Days 61-90, one useful tool for one real person, AI allowed, every line explained. Why: toy projects first ([Torvalds](https://www.techradar.com/pro/linux-founder-linus-torvalds-says-ai-is-a-gateway-drug-into-programming-but-cautions-about-using-ai-for-serious-work) `SNIPPET-ONLY`), real projects as top signal ([BairesDev](https://www.bairesdev.com/files/Exec_Summary_Dev_Barometer_Q2_2026.pdf)).

**C. Working developer**
- Days 1-30, verification baseline. Add tests/CI to one neglected service; small pull requests; a "what did AI get wrong" log; one unaided session weekly. Why: [Sonar](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/), [DORA small batches](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf), [Anthropic survey](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic).
- Days 31-60, specification and context. Short AGENTS.md as a map, specs and decision records in the repo. Why: [OpenAI](https://openai.com/index/harness-engineering/), [Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents), [Storey on intent debt](https://queue.acm.org/doi/10.1145/3807966).
- Days 61-90, evals, security, people. Manual error analysis then evals for one AI feature ([Husain and Shankar](https://hamel.dev/blog/posts/evals-faq/)); threat-model one agent with [OWASP](https://genai.owasp.org/download/52117/); write the team's AI stance ([DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)); pair weekly with a junior ([Thoughtworks](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development-europe-2026)).

**D. Career changer**
- Days 1-30, one language plus SQL by hand; list 10 painful problems from your old field. Why: Python rising, language breadth falling ([GovTech/Burning Glass](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers)); domain context ([Ng](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map)).
- Days 31-60, build for that field. Interview three users, write a spec, ship a small version with AI plus tests. Why: user focus decides whether AI helps ([DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)); unclear requirements are the top friction ([SO 2026](https://survey.stackoverflow.co/2026/work)).
- Days 61-90, evidence. Deploy it, write up trade-offs and one AI error you caught, rehearse the three interview modes. Why: 66%/56% signals ([CoderPad](https://coderpad.io/survey-reports/coderpad-state-of-tech-hiring-2026/)), [NACE](https://www.naceweb.org/job-market/trends-and-predictions/employers-want-ai-skills-but-draw-lines-around-ai-use), [Shopify](https://internships.shopify.com/pages/zero-experience-infinite-leverage).
- Honest framing: entry-level is hard now (4.5% of US software ads, [Indeed](https://hiringlab.indeed.com/2026/07/23/the-labor-market-is-tilting-toward-seniority/)). Ninety days is a start, not job-readiness.

### Inferences
- If AI tools are unreachable, plans A, B and D still work for at least 60 days; that is a feature to state on stage.

### Gaps
- No outcome data exists for these plans.

---

## 8. Ranked list: 10 durable skills

Ranking is this file's judgement, weighted by (1) independent convergence, (2) survival when tools change, (3) learnability. **Skill zero, beneath all ten: learning discipline** (try first, test unaided), from section 3.

| # | Skill | Why durable | Best evidence | Practise this week |
|---|---|---|---|---|
| 1 | Verification and testing (incl. evals) | Cheap generation makes checking the bottleneck | [Thoughtworks Europe](https://www.thoughtworks.com/en-us/about-us/events/the-future-of-software-development-europe-2026); [Sonar](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/); [SO 2026](https://survey.stackoverflow.co/2026/ai) | Write 5 failing tests before any code; make AI pass them; add one it missed |
| 2 | Reading and reviewing code | Someone must answer for it | [Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap) 7.8% to 18.5% | Review two open PRs with [Google's checklist](https://google.github.io/eng-practices/review/) |
| 3 | CS fundamentals | They let you see trade-offs and judge output | [Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap) 0 of 54; [Berkeley](https://cs61a.org/fa26/articles/whats-new/); [Ng](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map) | Four Quera problems, AI off |
| 4 | Debugging | The largest skill loss under AI help | [Shen and Tamkin](https://www.anthropic.com/research/AI-assistance-coding-skills); [Lightcast](https://lightcast.io/resources/blog/work-intelligence-software-engineering-change) | Fix one bug with a written hypothesis log before asking AI |
| 5 | Decomposition and specification | Intent is the input to any tool | [OpenAI](https://openai.com/index/harness-engineering/); [SO 2026](https://survey.stackoverflow.co/2026/work); [Beck](https://kentbeck.com/) | One-page spec with 5 acceptance tests; give it to a friend and to AI; compare misreadings |
| 6 | Systems, architecture, operations | Code still runs somewhere and fails there | [Burning Glass](https://www.burningglassinstitute.org/research/the-consequence-gap) CI/CD 19.4%; [Karpathy](https://karpathy.bearblog.dev/sequoia-ascent-2026/) | Draw your app's data flow, mark 3 failure points, add CI |
| 7 | Security judgement | Working code is not safe code | [Veracode](https://www.veracode.com/blog/fall-2026-genai-code-security/); [OWASP](https://genai.owasp.org/download/52117/) | One PortSwigger lab; list what your agent can read, write and send |
| 8 | Directing agents (context + orchestration) | The interface changes, clear delegation does not | [GitHub](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/); [Anthropic](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) | Write a 30-line AGENTS.md; delete anything the agent does not need |
| 9 | Domain and product judgement | Deciding what is worth building | [Ng](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map); [DORA](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf); [NACE](https://www.naceweb.org/job-market/trends-and-predictions/employers-want-ai-skills-but-draw-lines-around-ai-use) | Watch one real user for 20 minutes; cut one feature |
| 10 | Communication, incl. technical English | Explaining is now part of proving | [Kyle & Co](https://coderpad.io/wp-content/uploads/2026/10/coderpad-the-raw-materials-early-career-hiring-in-the-ai-era.pdf) 70%; [Berkeley oral exams](https://doi.org/10.1145/3795867.3831017); English evidence weaker ([HumanEval-XL](https://arxiv.org/html/2402.16694v2)) | Explain your code aloud in Persian, then write its README in English |

---

## 9. What to stop worrying about
- **Memorising API syntax.** Agents recall it; keep the concept ([Karpathy](https://karpathy.bearblog.dev/sequoia-ascent-2026/); [Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills) also expects low-level recall to matter less).
- **Picking the perfect language.** Berkeley swapped Scheme for Gleam and says it may change again ([CS 61A](https://cs61a.org/fa26/articles/whats-new/)). Python or TypeScript are safe starts ([Octoverse](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)).
- **Knowing five languages or every framework.** 12 of 16 languages lost share in entry ads ([GovTech](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers)).
- **The tool of the month.** Only 6.4% of 2,620 ads named a specific AI tool ([host0](https://host0.ai/blog/ai-in-job-posts)).
- **Being "just a prompt engineer" or buying a prompt course.** 2.6% of ads ([host0](https://host0.ai/blog/ai-in-job-posts)); ChatGPT skill mentions fell ([Lightcast](https://lightcast.io/resources/reports/stanford-ai-index-2026)). Counter: prompt engineering is still on LinkedIn's rising list, so call it a habit, not a career.
- **Not having the best paid model while learning.** Better learning comes from how you use it, and no-AI practice is part of the plan (section 3).
- **Slower practice.** Feeling stuck is likely part of mastery ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)); students preferred the tool that taught no more ([Bassner](https://doi.org/10.1016/j.caeai.2025.100537)).
- **An imminent "jobpocalypse".** Little evidence of mass AI-only job loss ([Indeed, 18 Nov 2026](https://hiringlab.indeed.com/2026/11/18/there-is-no-ai-jobpocalypse/)); but do not swing to "juniors are fine".

---

## 10. Claims to avoid on stage
1. "AI lowers coding skill by 17%." Say about 15-17 points on one immediate quiz, n=52, one library; arXiv v3 now says 15.4% ([arXiv](https://arxiv.org/abs/2601.20245)).
2. "Using AI this way *causes* better learning" from the six patterns. Groups of 2-7 people; authors deny causality ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)).
3. "MIT proved ChatGPT rots your brain." n=54, preprint, essays, contested ([critique](https://arxiv.org/pdf/2601.00856)).
4. "AI tutors beat teachers (Harvard)." A custom tutor, two physics lessons ([Kestin](https://www.nature.com/articles/s41598-025-97652-6)).
5. "Meta-analyses prove ChatGPT improves learning." One retracted, others audited, corrected mean near zero ([retraction](https://www.nature.com/articles/s41599-026-07310-z); [Boolzen](https://link.springer.com/article/10.1007/s10462-026-11665-9)).
6. "AI always harms learning." Two 2026 trials found gains ([19 universities](https://arxiv.org/abs/2611.19099); [Middlebury](https://arxiv.org/pdf/2607.08849)).
7. "Just tell ChatGPT to be Socratic." No measurable gain at ETH; a null for Socratic hints in CS1 ([Barth](https://dl.acm.org/doi/pdf/10.1145/3765964.3811656); [Liding](https://dl.acm.org/doi/10.1145/3770761.3777327)).
8. "Trust in AI jumped from 31% to 87%." Stack Overflow's own framing compares different questions: 2025 asked trust vs distrust of accuracy (33% vs 46%), 2026 offered conditional options ([2025](https://survey.stackoverflow.co/2025/ai) `OPENED-PRIMARY`; [2026](https://survey.stackoverflow.co/2026) `OPENED-PRIMARY`).
9. "DORA 2026 State report says..." It does not exist; posts citing it mean the ROI report ([DORA](https://www.linkedin.com/feed/update/urn:li:activity:7501291221559214080)).
10. "AI skills pay 62% more." Not controlled for experience, education or location; UK figure 34% ([PwC](https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/2026-global-ai-jobs-barometer-full-report.pdf)).
11. "Software jobs collapsed / are booming." Depends on the window; rebound is mostly senior ([Indeed](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/)).
12. "38% of AI-written code is insecure." It is 38% of Veracode's four-weakness test tasks with no security prompt; the older "45%/44%" is outdated ([Veracode](https://www.veracode.com/blog/fall-2026-genai-code-security/)).
13. "40% of all code is written by agents." GitHub says over 40% of *pull requests were started with an agent* in one month ([GitHub](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)).
14. "SQL and JavaScript are dying." They fell in one ad ranking and remain top in use ([Lightcast](https://lightcast.io/resources/blog/work-intelligence-software-engineering-change); [SO 2026](https://survey.stackoverflow.co/2026/technology/data/languages)).
15. "70% of your skills will be obsolete by 2030." LinkedIn forecast of *change*; WEF employers say 39% ([LinkedIn](https://news.linkedin.com/2025/work-change-report-2025); [WEF](https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/)).
16. "Interviews now allow AI" or "ban AI". Both, by company; 62% of leaders still prohibited it in one survey ([GovTech](https://www.govtech.com/education/higher-ed/ai-is-changing-what-employers-want-from-entry-level-tech-workers)).
17. "Prompt in English, Persian is much worse." A 4-6 point gap on 80 problems with 2023-era models; newer results are mixed ([HumanEval-XL](https://arxiv.org/html/2402.16694v2)).
18. "Take CS50/Coursera and get the Harvard certificate from Iran." Legally uncertain since 24 Aug 2026 ([OFAC](https://ofac.treasury.gov/media/936886/download); [UMD](https://research.umd.edu/resources/suspension-of-iran-related-general-authorizations)).
19. "Copilot is free for Iranian students" or any advice to bypass region limits ([GitHub](https://docs.github.com/en/site-policy/other-site-policies/github-and-trade-controls); [Anthropic](https://www.anthropic.com/legal/supported-regions)).
20. "Ninety days to a job." No source supports it.
21. Attributing "you can't outsource your understanding" to Karpathy as author; he credits a tweet ([Karpathy](https://karpathy.bearblog.dev/sequoia-ascent-2026/)).
