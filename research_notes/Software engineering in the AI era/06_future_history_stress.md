# Software beyond the interface, predictions and uncertainty, why panic is not new (evidence notes, research date 2026-11-24)

**How to read the tags.** OPENED-PRIMARY = I opened the original page/PDF and saw the claim. OPENED-SECONDARY = I opened a page reporting it. SNIPPET-ONLY = seen only as text inside a search result, or the page opened but the exact passage was outside the part I could read. Nothing was upgraded. "historical" = outside 2023-11-24 to 2026-11-24. All quotes are fragments under 15 words.

**Conflict-of-interest note for the host.** These notes were compiled by a Claude model, made by Anthropic. Several items concern Anthropic (Amodei, MCP, Cowork, Karpathy's employer since May 2026). Anthropic listed on Nasdaq in the week of 19 Nov 2026 ([Trefis](https://www.trefis.com/stock/intu/articles/627442/intuit-stock-fell-13-on-a-small-cut-is-software-s-subscription-model-breaking/2026-11-23), SNIPPET-ONLY for the listing). Treat CEO forecasts from any lab as statements by someone selling the product.

**Geography warning.** Almost every jobs number below is US data. I found no reliable Iran or Persian-market statistics. Say "in the US" on stage.

---

## Topic 1a. What did people actually claim about software moving beyond the interface?

### Takeaway
The serious version of the claim is not "apps die". It is: the place where logic and intent live moves from screens to an agent layer, while data, permissions and records stay underneath. Almost everyone making the strong claim sells the agent layer, the model, or invests in it.

### Cited Findings

**Nadella, BG2, 12 Dec 2024.** Asked about CRM/Excel in an AI-first world, he spoke first about Microsoft's own Dynamics. He said the notion of business applications is where things "probably" collapse in the agent era, because they are essentially CRUD databases plus business logic, and that logic moves to agents that work across many databases; once that happens, people start replacing back ends. He then said Excel and Word become agents/canvases, with Copilot as the organizing layer. He did not say "SaaS is dead".
- Stake: CEO of Microsoft, sells Copilot, Azure, and Dynamics (competes with Salesforce; the question was prompted by Benioff's criticism).
- Fragment: "essentially CRUD databases with a bunch of business logic" — [transcript, 46:36–49:35](https://thinkersarchive.com/satya-nadella/ai-phase-shifts-bg2-podcast-2025/) OPENED-SECONDARY. Primary video: [YouTube, about 46:00](https://www.youtube.com/watch?v=9NtsnzRFJ_o) (not opened). Backups: [Alex Bock notes, 45:56](https://www.alexbock.io/podcasts/161d90c2-6114-814a-9eed-d84218eda743) (page opened; passage SNIPPET-ONLY), [Windows Central](https://www.windowscentral.com/microsoft/hey-why-do-i-need-excel-microsoft-ceo-satya-nadella-foresees-a-disruptive-agentic-ai-era-that-could-aggressively-collapse-saas-apps) SNIPPET-ONLY.

**Nadella, clarification, 2025 (Varun Mayya interview).** The interviewer opened by saying "SaaS is dead" was not exactly what he said. Nadella compared the change to the separation of the data tier from the application in the relational-database era: an architecture shift. — [transcript](https://thinkersarchive.com/satya-nadella/saas-to-agents-podcast-2025/) OPENED-SECONDARY.

**Nadella, Dwarkesh Podcast, 12 Nov 2025.** Today's end-user tools business becomes infrastructure in support of agents doing work; pricing per user and per agent; agents still need storage, archival, discovery, identity, security. — [Dwarkesh, 00:29:05 and 00:31:24](https://www.dwarkesh.com/p/satya-nadella-2) OPENED-PRIMARY. This is the best counter-quote to "apps vanish": the substrate stays.

**Karpathy, YC AI Startup School, talk 17 Jun 2025.** Software 1.0 = code; 2.0 = neural-net weights; 3.0 = prompts in natural language as programs. Agents are a new consumer of digital information beside humans-with-GUIs and programs-with-APIs, so build for them (markdown docs, llms.txt, MCP; replace "click" with commands). He explicitly kept both paths: agents that click screens, and services that meet them halfway.
- Fragment: "your prompts are now programs that program the LLM" — [transcript, 2:53 and 33:57](https://videotobe.com/play/youtube/LCEmiRjPEtQ) OPENED-SECONDARY. Primary: [YouTube](https://www.youtube.com/watch?v=LCEmiRjPEtQ) (title page opened only). "Bullish on both" passage: [uListen transcript, ~38:00](https://ulisten.ai/channels/y-combinator/andrej-karpathy-software-is-changing-again_LCEmiRjPEtQ/transcript) SNIPPET-ONLY.
- Stake at the time: founder of Eureka Labs; since 19 May 2026 at Anthropic — [Algorithmic Bridge](https://www.thealgorithmicbridge.com/p/andrej-karpathy-joins-anthropic-what) OPENED-SECONDARY.

**Karpathy, Feb 2026, personal/ephemeral software.** He had an agent build a custom cardio dashboard for one 8-week experiment and argued the app-store idea is outdated, with the important qualifier that the future he describes is not here yet. — quoted in [Martin Fowler, Fragments, 23 Feb 2026](https://martinfowler.com/fragments/2026-02-23.html) OPENED-SECONDARY. The qualifier ("It's just not here yet") and the detail that the agent made unit and date errors he had to catch: SNIPPET-ONLY ([gu-log](https://gu-log.vercel.app/en/posts/en-mp-100-20260219-karpathy-app-store-dead)).

**Karpathy, Sequoia Ascent, posted 30 Apr 2026.** MenuGen example: his own web app became unnecessary when a multimodal model could transform the menu photo directly; "Some apps should stop existing as apps." He separates vibe coding (raises the floor) from agentic engineering (raises the ceiling), and argues models automate what can be verified; humans still own identity, security boundaries and system design. — [karpathy.bearblog.dev](https://karpathy.bearblog.dev/sequoia-ascent-2026/) OPENED-PRIMARY. Caveat: he states the write-up was LLM-generated from his talk and then read by him. Attribute as "Karpathy's published summary", not as spoken words.

**Sequoia, "Services: The New Software", Julien Bek, 5 Mar 2026.** Sell the finished work, not the tool; a copilot sells the tool, an autopilot sells the work. Fragment: "For every dollar spent on software, six are spent on services." — [Sequoia](https://sequoiacap.com/article/services-the-new-software) OPENED-PRIMARY. Stake: VC investing in such companies. The 1:6 ratio is asserted without a method in the text I saw.

**Salesforce Headless 360, 15 Apr 2026.** Says the platform's capabilities are exposed as an API, MCP tool or CLI command so agents do not need the browser. — [Salesforce](https://www.salesforce.com/news/stories/salesforce-headless-360-announcement/) OPENED-PRIMARY. Counter: a16z's Seema Amble (13 May 2026) notes the APIs "have largely existed for years", calls it largely marketing, but says the question it raises is real: UI habit weakens as a moat; permissions, workflow logic, compliance data and connectivity get stronger. — [a16z](https://a16z.com/is-software-losing-its-head/) OPENED-PRIMARY.

**Geoffrey Litt et al., "Malleable software", Ink & Switch, June 2025.** Users should be able to reshape their tools; but "AI code generation alone does not address all the barriers to malleability." Analogy: AI coding in today's app ecosystem is like bringing a sous chef to a food court. — [Ink & Switch](https://www.inkandswitch.com/essay/malleable-software/) OPENED-PRIMARY. Stake: independent research lab; low commercial stake. Best non-hype voice for the segment.

### Inferences
- The most teachable framing: "screen → intent + protocol + data", with humans still needing a place to check, approve and be accountable.
- The strongest structural argument links to Topic 3: in banking, the ATM automated a task inside the branch; the phone removed the reason for the branch. Agents could be "ATM" (faster apps) or "phone" (no app needed). Nobody knows yet which.

### Gaps
- I did not watch the videos; timestamps come from transcripts.
- No single primary definition of "ephemeral software" exists; use Karpathy's post or Litt's essay.

---

## Topic 1b. What real adoption numbers exist by November 2026?

### Takeaway
Protocol plumbing for developers grew enormously. Consumer "no interface" experiences grew later and unevenly. Enterprise deployment is real but a minority. Many loud numbers are downloads or listings, not users.

### Cited Findings

| What | Number | Source, date, stake | Tag |
|---|---|---|---|
| MCP SDK downloads | "close to half-a-billion downloads a month"; TypeScript and Python SDKs each past 1 billion total | [MCP blog, 28 Jul 2026](https://blog.modelcontextprotocol.io/posts/2026-07-28/) (project maintainers) | OPENED-PRIMARY |
| MCP independent count | 40,047 servers in the official registry on 6 Oct 2026 (from ~2,000 in Nov 2025); downloads include CI and bots; nobody publishes tool-call counts; Postman 2025: 70% aware of MCP, 10% using it regularly | [host0, 6 Oct 2026](https://host0.ai/blog/state-of-mcp-2026) (cloud vendor, transparent method) | OPENED-SECONDARY |
| SaaS vendors with official MCP server | 100 of 816 tracked products (12.3%), up from 47 | [Cyclr, Nov 2026](https://cyclr.com/cyclr-resources/mcp-adoption-from-access-to-action) (integration vendor) | SNIPPET-ONLY |
| A2A | more than 150 supporting organizations; AP2 payments: more than 60 | [Linux Foundation, 9 Apr 2026](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year) | OPENED-PRIMARY. "Supporting" is not "using in production" |
| AGENTS.md (claimed) | more than 60,000 projects | [Linux Foundation, 9 Dec 2025](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) | OPENED-PRIMARY |
| AGENTS.md / CLAUDE.md (measured) | 26.3% of 22,854 popular active GitHub repos have one; 59.6% of the most-starred | [Zarzycki, arXiv 2610.31715, 26 Oct 2026](https://arxiv.org/abs/2610.31715) (preprint) | OPENED-PRIMARY. Best number in this table: independent, current, clear denominator |
| llms.txt | 28% of 137,210 sites publish it (upper bound, SEO-aware sample); 97% of those files got zero requests in May 2026 | [Ahrefs, 15 Jun 2026](https://ahrefs.com/blog/llmstxt-study/) (SEO vendor) | OPENED-PRIMARY. Backup: [SE Ranking, 300k domains, 10.13%, no citation effect](https://seranking.com/blog/llms-txt/) SNIPPET-ONLY |
| Apps in ChatGPT / Claude | almost 900 ChatGPT apps and 353 Claude connectors; app builder Alpic's chief of staff said adoption and conversion are "pretty low" | [Modern Retail, 1 May 2026](https://www.modernretail.co/technology/retailers-are-rushing-to-build-ai-apps-its-unclear-if-shoppers-will-use-them/) | OPENED-SECONDARY. Backup: [Bloomberg, 30 Mar 2026](https://www.bloomberg.com/news/articles/2026-03-30/openai-s-chatgpt-app-store-took-aim-at-apple-but-results-lag-so-far) SNIPPET-ONLY |
| Agentic commerce, step back | OpenAI said the first Instant Checkout lacked the flexibility it wanted; merchants use their own checkout | [OpenAI, 24 Mar 2026](https://openai.com/index/powering-product-discovery-in-chatgpt/) | OPENED-PRIMARY. Walmart: in-chat conversion three times lower than click-out — [WIRED, 18 Mar 2026](https://www.wired.com/story/ai-lab-walmart-openai-shaking-up-agentic-shopping-deal/) SNIPPET-ONLY |
| Agentic commerce, step forward | After Meta launched Muse in Sept 2026, agent orders on Forter's network were up 7.9x mid-Aug to mid-Nov; Muse was 49% of agent orders in the week of 2 Nov; these agents work by driving the merchant's normal pages (screen scraping), and scraping agents overtook protocol agents | [Forter, 16 Nov 2026](https://www.forter.com/blog/ai-agent-order-data/) (fraud-prevention vendor) | OPENED-PRIMARY. Do NOT quote its "1.2% / 80.5%" sentence: wording is internally inconsistent. No share of all orders is given |
| Shopify | traffic from AI agents up 2.6x, orders up 3.3x year over year | [Mastercard newsroom, 23 Nov 2026](https://www.mastercard.com/us/en/news-and-trends/stories/2026/shopify-holiday-shopping-small-business.html) (both sell into this) | OPENED-PRIMARY. No base given, so small numbers possible |
| Computer-use agents | OSWorld ~12% to 66.3% task success; human baseline 72.35%; still fail about 1 in 3 | [Stanford AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report) | OPENED-PRIMARY. Benchmark, not production. Data through 2025 |
| Generative UI | Google Research: raters strongly preferred generated interfaces over markdown; worse than human expert sites but at least comparable in 50% of cases; speed ignored | [paper page](https://generativeui.github.io/), [Google Research, 18 Nov 2025](https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/) (blog SNIPPET-ONLY: can take a minute or more, occasional inaccuracies) | OPENED-PRIMARY |
| Enterprise agents | 40% of large-company respondents scaling agents (27% a year before); smaller firms flat at 22%; about 2 in 10 scaling coding agents; 32% decided not to buy some software because they could build it with agentic coding | [McKinsey State of AI 2026, 25 Aug 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai), n=1,719, 4 May–8 Jun 2026 (sample size SNIPPET-ONLY) | OPENED-PRIMARY. Consultancy; self-report |
| Enterprise agents, stricter | 17% have deployed agents (2026 CIO survey) | Gartner via [i10x](https://i10x.ai/blog/ai-agents-experiment-vs-scale) | SNIPPET-ONLY |
| Developers | 66% use coding assistants/agents, 63% general chatbots | [Stack Overflow 2026](https://survey.stackoverflow.co/2026/ai) | OPENED-PRIMARY |

- Agent-completed share of US online orders of 1.52% in Oct 2026 comes from [First Page Sage](https://firstpagesage.com/seo-blog/agentic-commerce-statistics), an SEO agency with its own panel. SNIPPET-ONLY, not corroborated. Do not use.

### Inferences
- The neatest irony for the stage: the fastest-growing shopping agents in autumn 2026 still use the human screen, because most shops have not adopted the protocols. The interface persists even for machines.
- Surveys give 17% to 59% for "agents" because definitions differ. Always name the definition.

### Gaps
- No audited count of MCP tool calls, ChatGPT app users, or Claude artifacts users was found. Vercel generative-UI adoption numbers were not found.
- A2A/AP2/UCP/ACP production volume: no neutral data found.

---

## Topic 1c. The 2026 software-stock selloff and the counter-arguments

### Takeaway
Markets panicked in Jan–Feb 2026, bottomed around May, recovered partly, then sold off again in November 2026. Company sales kept growing. "SaaS is dead" is not supported; "seat-based pricing is under real pressure" is.

### Cited Findings
- S&P Software & Services Index lost 25% between 12 Jan (Claude Cowork launch) and 23 Feb 2026; a 4% one-day drop after Cowork plugins erased more than $285 billion; partial rebound after partnerships on 24 Feb. The article's conclusion: the message "is not that software is dead". — [DeepLearning.AI The Batch, 27 Feb 2026](https://www.deeplearning.ai/the-batch/claude-cowork-plugins-trigger-a-saas-stock-selloff-but-partnerships-lead-to-slight-rebound) OPENED-SECONDARY. Backups: [Bloomberg, 4 Feb 2026](https://www.bloomberg.com/news/articles/2026-02-04/what-s-behind-the-saaspocalypse-plunge-in-software-stocks) SNIPPET-ONLY (also cites weak earnings, not only AI).
- Rebuttal at the time: Jensen Huang called the idea that software tools will be replaced the most illogical thing, 4 Feb 2026 — [ResearchAudio](https://researchaudio.io/p/inside-the-saaspocalypse-how-11-plugins-shook-software-stocks) SNIPPET-ONLY. Stake: sells the chips.
- Rebuttal, argued: a16z (Immerman, Rodriguez), 2 Mar 2026: "code is never where the value has lived"; moats are networks, process knowledge, proprietary data. It also names losers: thin front-end wrappers, archaic systems of record, outdated pricing. — [a16z](https://a16z.com/good-news-ai-will-eat-application-software/) OPENED-PRIMARY. Stake: software investor.
- Status 17 Nov 2026: Dedale's 257-company universe +6.1% YTD at end October, EV/Sales 5.0x against a 10-year average of 6.5x; about 70% of finance-software users plan to stay with the current vendor's AI. — [Dedale](https://www.dedale.com/articles/software-market-trends-november-2026-valuations-rebound-record-ma-ocfo) OPENED-PRIMARY (market research firm).
- Status 23 Nov 2026: tracker of 57 names shows median -4.6% YTD, up from -28.3% on 13 May; 25 of 57 above their start; IGV -7.2%, S&P 500 +5.5%. — [saaspocalyptics.com](https://saaspocalyptics.com/) OPENED-SECONDARY (live page, changes daily). Conflict with Dedale is date and sample, not error: November brought a new selloff.
- Price versus sales, 20 Nov 2026: 12-month returns Intuit -58%, ServiceNow -46%, Salesforce -20%; sales +13%, +22%, +11%. Fragment: "Their stock prices say so. Their sales do not, yet." — [Trefis, 23 Nov 2026](https://www.trefis.com/stock/intu/articles/627442/intuit-stock-fell-13-on-a-small-cut-is-software-s-subscription-model-breaking/2026-11-23) OPENED-PRIMARY.
- Why UIs persist: NN/g (Kate Moran, 6 Mar 2026): most people give very simple prompts; buttons and checkboxes inside AI chat reduce friction. — [NN/g](https://www.nngroup.com/articles/genui-buttons-and-checkboxes/) OPENED-PRIMARY. IBM designer Micah Linnemeier (5 Oct 2026): language is poor for discoverability, stability, auditing and speed. — [Medium/IBM Design](https://medium.com/design-ibm/why-your-ai-product-still-needs-a-gui-9e4db7d13ba9) SNIPPET-ONLY.

### Inferences
- For students: the shrinking part is "a form over a database"; the growing part is data models, permissions, protocols, evaluation, and interfaces for supervision.

### Gaps
- No neutral study shows how many companies actually replaced a system of record with agent-built software. McKinsey's 32% is "decided against buying one or more products or features", not "replaced a system of record".

---

## Topic 2. Predictions and uncertainty: how wide is the disagreement, and how good have dated predictions been?

### Takeaway
Published forecasts run from "this year" to 2047 or 2116, but the gap narrowed in 2026 and moved shorter. Two things are true at once: dated CEO predictions about jobs and code have slipped or been redefined, and independent forecasters have badly underestimated benchmark progress. Nobody has a tested record on job impacts. Plan for robustness, not for one date.

### Cited Findings

**Who says what (definitions differ; that is the key caveat).**

| Person / group | Position | Date | Source and tag | Stake |
|---|---|---|---|---|
| Dario Amodei | "Powerful AI" as early as 2026, could take much longer | Oct 2024 | [essay](https://darioamodei.com/essay/machines-of-loving-grace) page opened; passage SNIPPET-ONLY via [tracker](https://fourweekmba.com/agi-timelines-tracker/) | CEO Anthropic |
| Dario Amodei | Models "might be six to 12 months away" from doing most, maybe all, of what software engineers do end to end; he added there is a lot of uncertainty | 20 Jan 2026, Davos | [WEF transcript](https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/) page opened, passage SNIPPET-ONLY; same text on [Digital Watch](https://dig.watch/event/world-economic-forum-2026-at-davos/the-day-after-agi) SNIPPET-ONLY | CEO Anthropic |
| Sam Altman | OpenAI "not quite yet" at AGI; expects an internal system he would call AGI by end of 2026 | 26 Aug 2026 | [TIME](https://time.com/article/2026/08/26/openai-sam-altman-interview/) OPENED-PRIMARY | CEO OpenAI |
| Demis Hassabis | Jan 2026: 50% chance within the decade, missing one or two breakthroughs. Oct 2026: two to three years | 23 Jan and 21 Oct 2026 | [Fortune](https://fortune.com/2026/01/23/deepmind-demis-hassabis-anthropic-dario-amodei-yann-lecun-ai-davos/) OPENED-SECONDARY; [The Verge on WSJ](https://www.theverge.com/ai-artificial-intelligence/1015277/google-deepminds-demis-hassabis-thinks-agi-is-two-to-three-years-away) OPENED-SECONDARY; [WSJ](https://www.wsj.com/tech/ai/demis-hassabis-ai-deepmind-google-isomorphic-2b4e3153) SNIPPET-ONLY (number is the Journal's wording, per [AI Weekly](https://aiweekly.co/alerts/hassabis-trims-agi-window-to-two-to-three-years-in-wsj-profile) SNIPPET-ONLY) | Google DeepMind |
| Yann LeCun | Human-level AI will not be built on LLMs and not in a year or two; "It's going to take a while." No year | 22 Jan 2026 | [MIT Technology Review](https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/) OPENED-PRIMARY | founder of AMI Labs (rival approach) |
| Richard Sutton | LLMs mimic people; RL is about understanding the world. No year given | 26 Sep 2025 | [Dwarkesh, 00:00:33](https://www.dwarkesh.com/p/richard-sutton) OPENED-PRIMARY | RL pioneer |
| Andrej Karpathy | Agents: "it just feels like a decade to me"; over-prediction in the industry | 17 Oct 2025 | [Dwarkesh, 00:02:16 and 00:00:07](https://www.dwarkesh.com/p/andrej-karpathy) OPENED-PRIMARY | then independent; Anthropic since May 2026. Two months later he described a step change in coding agents (Topic 3c) |
| AI 2027 authors | Apr 2025 scenario; never claimed certainty about 2027. Apr 2026: Kokotajlo's Automated Coder median moved from late 2029 to mid 2028, Lifland's from early 2032 to mid 2030 ([Q1 update](https://blog.aifutures.org/p/q1-2026-timelines-update), SNIPPET-ONLY). **10 Nov 2026:** all authors expect a Superhuman AI Researcher at some point in 2027; 35–65% for AI automating all white-collar cognitive work before 2028; they warn of possible modelling errors | Jan and Nov 2026 | [Clarification, 27 Jan 2026](https://blog.aifutures.org/p/clarifying-how-our-ai-timelines-forecasts) OPENED-PRIMARY; [Q3.5 update, 10 Nov 2026](https://blog.aifutures.org/p/q35-timelines-update-looks-like-the) OPENED-PRIMARY | AI-risk nonprofit |
| AI researchers (Grace et al.) | 2,778 authors: 50% by 2047 for machines beating humans at every task; 50% by 2116 for all occupations automatable. One year earlier: 2060 and 2164 | survey Oct 2023, published Jan 2024, JAIR Oct 2025 | [arXiv](https://arxiv.org/abs/2401.02843) OPENED-PRIMARY; [JAIR](https://www.jair.org/index.php/jair/article/view/19087) SNIPPET-ONLY | academic. Two near-identical questions gave answers about 70 years apart: a framing effect the authors cannot explain (JAIR, SNIPPET-ONLY) |
| Metaculus | Median for general AI Sept 2030; middle half Mar 2028 to Jun 2036; median of 10 named forecasters 2029 | 2 Nov 2026 | [FourWeekMBA tracker](https://fourweekmba.com/agi-timelines-tracker/) OPENED-SECONDARY (median/IQR seen on opened page) | crowd forecast; tracker is a blog |
| International AI Safety Report (chair Y. Bengio) | To 2030 progress could slow, continue, or accelerate; "There is little expert consensus on which trajectory is most likely." Labour: no effect on overall employment in early evidence, some signs of weaker demand for early-career workers in exposed jobs | 3 Feb 2026 | [report, section 1.3](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) OPENED-PRIMARY | large international expert panel, no product to sell. Best neutral source for the stage |
| 80,000 Hours (Wiblin) | Shortened by about a year in 2026, yet lists four reasons for long timelines: unknown skill breadth needed, missing capabilities, weak spillover from coding to messy work, compute limits | published 4 Aug 2026 | [80,000 Hours](https://80000hours.org/podcast/episodes/2026-agi-timelines/) OPENED-PRIMARY | AI-risk career nonprofit |

**How good have dated predictions been?**
- Amodei, 10 Mar 2025: AI writing 90% of code in 3–6 months, essentially all in 12. Redwood Research (Ryan Greenblatt, 22 Oct 2025) judged it did not come true as stated: about 50% of merged lines at Anthropic by his estimate, 90% on some teams. — [Redwood](https://www.redwoodresearch.org/blog/is-90-of-code-at-anthropic-being) OPENED-PRIMARY. Later: Anthropic reports "more than 80% of the code we merge" was Claude-authored as of May 2026 — [Anthropic](https://www.anthropic.com/institute/recursive-self-improvement) OPENED-PRIMARY (self-reported). Scorecard: partly true at his own company and late; "essentially all" missed — [Whizi, 22 Oct 2026](https://whizi.io/resources/dario-amodei-predictions/) OPENED-SECONDARY. Amodei later said lines of code is a weak criterion and people wrongly heard "90% fewer engineers" ([Dwarkesh, 13 Feb 2026, 17:49](https://exa.ai/library/podcast/svs96h7n7kc/episode/tk6nqgq22cb), SNIPPET-ONLY).
- Forecasting Research Institute, 22 Sep 2026: experts and superforecasters strongly underestimated benchmark progress (LiveCodeBench Pro Hard: experts forecast 14% for end-2026; 53.8% reached by May 2026); adoption mixed; not enough evidence on economic or social effects. They overestimated robotaxis (7.3% of US ride-hailing trips by end-2027 versus about 2.5% projected). The method is biased toward finding underestimates. — [FRI](https://forecastingresearch.org/research/ai-progress-accuracy-update) OPENED-PRIMARY.
- FRI LEAP Wave 13 (143 experts, 6–27 Oct 2026): groups mostly agree on the near term and diverge later; no software-job forecast in this wave. — [LEAP](https://leap.forecastingresearch.org/reports/wave13) OPENED-PRIMARY.
- McKinsey 2026: the share that expected AI workforce cuts a year earlier was about double the share now reporting actual cuts; 39% expect cuts next year. — [McKinsey](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) OPENED-PRIMARY.
- Gap between experts and public: 73% of experts versus 23% of the public expect a positive effect on how people do their jobs. — [AI Index 2026](https://hai.stanford.edu/ai-index/2026-ai-index-report) OPENED-PRIMARY.

### Inferences
- The original message "experts disagree by decades" needs an update. Honest version: "Forecasts range from this year to the 2040s and beyond, they use different definitions, the most-quoted people changed their own dates several times in 2026, and recent moves were mostly toward sooner."
- Pattern worth teaching: people over-predict deployment and job effects on short dates, and under-predict capability on tests. Both errors happen together.
- Robustness = choices that pay off in both worlds: fundamentals, verification and evaluation skills, domain knowledge, communication, working with agents, savings buffer, network.

### Gaps
- Metaculus page and WSJ not opened directly. AI Impacts has no published post-2023 wave that I found.
- FRI mentions reporting that an OpenAI model likely solved a Millennium problem in Sept 2026; I did not verify it. Do not use.

---

## Topic 3a. Earlier "programmers are obsolete" waves and what happened

### Takeaway
The promise is about 70 years old and often uses nearly the same words. US software employment rose across the waves, but job titles were replaced (routine "computer programmer" shrank a lot), and rising employment after a tool does not prove the next tool is harmless.

### Cited Findings
- **1954, FORTRAN (historical).** IBM's preliminary report said FORTRAN "should virtually eliminate coding and debugging" and that after an hour's course the average programmer could follow it. — [Computer History Museum PDF](https://softwarepreservation.computerhistory.org/FORTRAN/BackusEtAl-Preliminary%20Report-1954.pdf) OPENED-PRIMARY. Backus later showed that line with an exclamation mark and said they were not pessimists — [HOPL transcript](https://softwarepreservation.computerhistory.org/FORTRAN/paper/p45-backus.pdf) SNIPPET-ONLY.
- **1950s, automatic programming / FLOW-MATIC / COBOL (historical).** Historian Nathan Ensmenger: automatic programming systems "threatened to make programmers obsolete altogether" and to move thinking work back to managers and scientists. — [PDF, p.17 of file](https://homes.luddy.indiana.edu/nensmeng/files/Ensmenger2010-MPM.pdf) OPENED-PRIMARY. A 1957 FLOW-MATIC brochure reportedly promised less need for trained programmers, while Hopper told programmers only clerical work would go — [Commonwealth School paper](https://www.commschool.org/news/news-post/~board/inside-commonwealth/post/grace-hopper-and-the-creative-destruction-of-the-programming-community) SNIPPET-ONLY and it is a student paper: background only. Outcome: a programmer shortage and the 1960s "software crisis" (same source, SNIPPET-ONLY).
- **1981, "The Last One" (historical).** UK ad for a program that asks questions in plain English and writes your program: "the end of programming as you know it". — [Personal Computer World, June 1981, p.2 ad](https://www.worldradiohistory.com/UK/Personal-Computer-World/80s/PCW-1981-06-S-OCR.pdf) SNIPPET-ONLY (PDF opened, ad page not reached). Cover of Feb 1981 issue asked "At last - the end of programming?" — [timeline page](https://media.nerdsnipes.com/explorations/are-there-infinite-jobs/fig-end-of-programming-265204f71a15bc7a.html) OPENED-SECONDARY; [PCW Feb 1981](https://www.worldradiohistory.com/UK/Personal-Computer-World/80s/PCW-1981-02-S-OCR.pdf) SNIPPET-ONLY. The ad is very close to today's AI marketing.
- **1982, 4GL, James Martin (historical).** Preface of *Application Development Without Programmers*: "most computers in the future will have to work at least in part without programmers." — quoted by [Simon Willison, 14 Jul 2025](https://simonwillison.net/2025/Jul/14/application-development-without-programmers/) OPENED-SECONDARY. Book: [Google Books](https://books.google.com/books/about/Application_development_without_programm.html?hl=en&id=QnO4AAAAIAAJ) SNIPPET-ONLY. Precise note: he wrote "in part".
- **Late 1980s–1992, CASE (historical).** One year after introduction, 70% of CASE tools were never used, 25% by one group only, 5% widely used — a study cited by Chris Kemerer, IEEE Software 1992. — [PDF p.1](https://sites.pitt.edu/~ckemerer/CK%20research%20papers/LearningCurveAffectsCASEAdoption_Kemerer92.pdf) OPENED-PRIMARY (for the citation, not the underlying study). Backup: [Iivari, CACM 1996](https://doi.org/10.1145/236156.236183) SNIPPET-ONLY.
- **1992, Yourdon (historical).** *Decline and Fall of the American Programmer* foresaw "massive unemployment among the ranks of American programmers", due to international competition, and advised CASE. — [CACM blog, 1 May 2026](https://cacm.acm.org/blogcacm/yourdon-had-a-point/) OPENED-SECONDARY. His 1996 book reversed much of it (same page, SNIPPET-ONLY).
- **1990s, Visual Basic / PowerBuilder / Delphi.** CACM says these cheaper tools displaced CASE (SNIPPET-ONLY). I found no solid source for a "VB ends programmers" claim.
- **2002–2004, offshoring (historical).** Forrester: 3.3 million US services jobs offshore by 2015, revised to 3.4 million. — [Forrester, 17 May 2004](https://www.forrester.com/press-newsroom/forrester-finds-near-term-growth-of-offshore-outsourcing-accelerating/) OPENED-PRIMARY. ACM 2006: more US IT jobs than at the dot-com peak, skepticism about projections — [ACM report](https://www.acm.org/binaries/content/assets/public-policy/usacm/intellectual-property/reports-and-white-papers/full_final1.pdf) SNIPPET-ONLY (403), quoted on Stanford page below.
- **The panic that hurt students (historical).** Freshman interest in CS fell 70% from 2000 to 2005; new majors at surveyed departments fell from 15,958 to 7,952. — [CRA, Mar 2006](https://cra.org/crn/2006/03/drop_in_cs_bachelors_degree_production/) OPENED-PRIMARY. A Stanford history of CS enrollment says a belief spread that jobs would be automated or offshored, that "there was no evidence to justify those fears", and that by 2005 CS graduates had better prospects than nearly any discipline. — [Stanford (page in Eric Roberts's directory; author not named on page)](https://cs.stanford.edu/people/eroberts/CSCapacity/CSCapacity-History2000s.html) OPENED-PRIMARY.
- **2021, low-code/no-code.** Gartner: by 2024, 80% of technology products and services built by people who are not technology professionals. — [Gartner, June 2021](https://www.gartner.com/en/newsroom/press-releases/2021-06-10-gartner-says-the-majority-of-technology-products-and-services-will-be-built-by-professionals-outside-of-it-by-2024) OPENED-PRIMARY, historical. No later measurement found, so say "I found no evidence it happened", not "proved false".
- **Feb 2024, Jensen Huang.** Computing such that nobody has to program; "everybody in the world is now a programmer". — [NVIDIA blog, 12 Feb 2024](https://blogs.nvidia.com/blog/world-governments-summit/) OPENED-PRIMARY.

**Employment.**
- US IT occupations: 450,000 (1970) to 4.6 million (2014). — [Census, 16 Aug 2016](https://www.census.gov/library/publications/2016/acs/acs-35.html) OPENED-PRIMARY, historical.
- 2025 annual averages: 381,000 computer programmers + 2,254,000 software developers = 2.635 million. — [BLS CPS table 11b](https://www.bls.gov/cps/cpsaat11b.htm) OPENED-PRIMARY (11-month average, October missing). 2024: 334,000 + 2,077,000 = 2.411 million; Dec 2023 12-month average: 2.617 million; Dec 2003: 1.321 million. **Caveat:** 2024 was a dip, so 2025 only returns to about the 2023 level; the page itself warns the series are not strictly comparable, and this household survey (2.25M developers) counts more than BLS's employment matrix (1.72M) — [timeline page](https://media.nerdsnipes.com/explorations/are-there-infinite-jobs/fig-end-of-programming-265204f71a15bc7a.html) OPENED-SECONDARY.
- BLS projection 2025–35: developers + QA +10%, about 106,100 openings a year. — [BLS OOH, modified 27 Aug 2026](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm) OPENED-PRIMARY. Computer programmers -7% to 102,700 — [BLS](https://www.bls.gov/ooh/computer-and-information-technology/computer-programmers.htm) SNIPPET-ONLY. (The previous 2024–34 projection for software developers was 15% per [Pierre Mary](https://pierremary.com/en/posts/the-programmer-tombstone), SNIPPET-ONLY, so the outlook was lowered.)
- "Programmers at lowest since 1980" is true only for the narrow title; developer jobs were down 0.3% — Washington Post, Mar 2025 via [summary](https://www.edwardconard.com/macro-roundup/in-2003-the-bls-added-a-new-category-of-software-developer-with-responsibilities-for-design-planning-and-requirements-gathering-while-computer-programmer-employment-is-at-its-low/) SNIPPET-ONLY.

### Inferences
- The common thread: each tool removed accidental work, demand expanded, and the title moved up a level. The people who lost were those whose whole job was the removed layer (coders, keypunch, narrow "programmers").

### Gaps
- No single continuous series 1950–2026 exists because occupation codes changed. COBOL-specific primary promise not opened.

---

## Topic 3b. The best "this time is different" argument, and analogies with real data

### Takeaway
The strongest case: earlier tools were bounded, LLMs generalize, improve faster than experts forecast, and already show up in early-career employment. The analogies cut both ways and should be told fully.

### Cited Findings
- Early-career signal: employment of 22–25-year-olds in the most AI-exposed jobs down 19% relative to peers; worst where AI automates rather than complements. — [Brynjolfsson, Stanford GSB, 17 Sep 2026](https://www.gsb.stanford.edu/insights/almost-every-job-has-tasks-ai-can-change) OPENED-PRIMARY.
- Fed economists Crane and Soto (20 Mar 2026): coder employment still growing but decelerated sharply after ChatGPT, not explained by industry; annual growth about 3 points lower (the 3-point figure SNIPPET-ONLY). — [Federal Reserve FEDS 2026-018](https://www.federalreserve.gov/econres/feds/files/2026018pap.pdf) OPENED-PRIMARY.
- Postings: US software postings up almost 15% since Feb 2025 while overall postings fell 7%; still 27.5% below pre-pandemic; senior roles were 71% of the increase; 22–25 developer employment down nearly 20% per AI Index. — [CNBC, 11 Oct 2026](https://www.cnbc.com/2026/10/11/ai-software-developer-jobs.html) OPENED-SECONDARY.
- Generalization argument, stated fairly by a skeptic: earlier tools had fixed grammars, LLMs are not bounded that way, so base rates may mislead; the real unknown is the junior-to-senior pipeline. — [Pierre Mary, 23 Feb 2026](https://pierremary.com/en/posts/the-programmer-tombstone) SNIPPET-ONLY.
- **Radiology.** Hinton (2016, historical) said to stop training radiologists. 2025: record 1,208 US diagnostic residency positions, average income $520,000, over 700 FDA-cleared models; a 2012 study found 36% of time on image reading. — [Works in Progress, 25 Sep 2025](https://www.worksinprogress.news/p/why-ai-isnt-replacing-radiologists) OPENED-PRIMARY. May 2026: 7,469 open postings, radiologists up about 10% in a decade, $571,000 average; Hinton later said he meant image analysis. — [Fortune, 19 Jul 2026](https://fortune.com/article/ai-godfather-radiologists-obsolete-salaries-up-to-571k-demand-growing/) OPENED-SECONDARY. Counter: demand growth, Medicare rules and liability protect the job; per-scan pay fell; another count gives 1,083 PGY-2 positions in 2026 (different definition) — [Income Variable](https://www.theincomevariable.com/articles/will-ai-replace-radiologists) SNIPPET-ONLY.
- **Bank tellers.** ATMs: tellers per branch fell from about 21 to 13 while total tellers rose, because branches multiplied. Then mobile banking removed the branch: 332,000 full-time tellers (2010), 235,000 (2016), 164,000 (2022). — [David Oks, 10 Mar 2026](https://davidoks.blog/p/why-the-atm-didnt-kill-bank-teller) OPENED-PRIMARY (essay). BLS counts 339,200 teller jobs in 2025 (all jobs, not only full-time) and projects -13% to 2035 — [BLS](https://www.bls.gov/ooh/office-and-administrative-support/tellers.htm) OPENED-PRIMARY. Do not mix the two series.
- **Translators.** Frey and Llanos-Paredes 2025: each 1-point rise in machine-translation use cut translator employment growth by about 0.7 points; about 28,000 positions not created in the US 2010–2023. — [CEPR](https://cepr.org/voxeu/columns/lost-translation-ais-impact-translators-and-foreign-language-skills) OPENED-PRIMARY. That is slower growth, not collapse; but individual losses are severe (an Irish translator lost about 70% of income) — [CNN, 23 Jan 2026](https://www.cnn.com/2026/01/23/tech/translation-language-jobs-ai-automation-intl) SNIPPET-ONLY.

### Inferences
- Three analogies, three outcomes: radiology (demand + law kept the job), tellers (safe for 30 years, then not), translators (work changed and pay fell). Software may contain all three at once, by segment.

### Gaps
- No causal study isolates AI from interest rates, over-hiring in 2021–22 and tax changes for developers.

---

## Topic 3c. Stress, identity, "feeling behind", and evidence-based coping

### Takeaway
Anxiety is common and measured, even among top experts. The best-supported coping pattern is engagement (skills, reframing, support) plus real recovery, and avoiding avoidance. Evidence is mostly correlational.

### Cited Findings
- Karpathy, 26 Dec 2025: "I've never felt this much behind as a programmer." — [Algorithmic Bridge](https://www.thealgorithmicbridge.com/p/andrej-karpathy-joins-anthropic-what) OPENED-SECONDARY; confirmed in his own [30 Apr 2026 post](https://karpathy.bearblog.dev/sequoia-ascent-2026/) OPENED-PRIMARY. His X post was not opened. Asked if it was exhilarating or unsettling he said a mix (SNIPPET-ONLY).
- 54% of 1,000 developers (UK, US, DE, ES, NL; March 2026) anxious about long-term career. — [Adaptavist, 4 Nov 2026](https://www.theadaptavistgroup.com/company/press/more-than-half-of-developers-are-anxious-about-their-long-term-careers-as-ai-rewrites-the-job) OPENED-PRIMARY (consultancy). 43% say fewer learning opportunities (SNIPPET-ONLY).
- Stack Overflow: not a threat to my job, 68% (2024) to 64% (2025). — [SO blog](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/) OPENED-PRIMARY. I did not find the same question in 2026. 2026: 17.1% avoid AI mainly for fear of losing skills or training a replacement, n=13,857 — [SO 2026](https://survey.stackoverflow.co/2026/ai/data/ai-avoid) OPENED-PRIMARY. 2026: 22% happy, 45% complacent, 33% unhappy at work — [SO 2026 work](https://survey.stackoverflow.co/2026/work/data) SNIPPET-ONLY; in that data most people whose work got harder blamed unclear priorities, and said AI was not the reason (SNIPPET-ONLY).
- CS students: 60% of computing students at least moderately concerned; quite/extremely: 35% bachelor's, 32% master's, 22% doctoral. — [CRA CERP, Aug 2026, fielded fall 2025](https://cra.org/crn/2026/08/infographic-data-buddies-survey-provides-insights-into-students-job-concerns-and-preparedness-to-use-ai/) OPENED-PRIMARY. Handshake Class of 2026 CS majors: 70% at least somewhat pessimistic; almost 30% would choose another major. — [Handshake](https://joinhandshake.com/blog/network-trends/class-of-2026-spotlight-computer-science/) OPENED-PRIMARY (page dated Sep 2025 in search metadata). Equal shares of CS majors expect upside and downside (SNIPPET-ONLY).
- Identity: interviews (N=21, one company) found accountability anxiety, craft-identity disruption, loss of meaning, overload, uncertainty distress; people cope by restoring control, protecting identity, or absorbing. — [Alami, Paja, Tiwari, arXiv, 3 Sep 2026](https://arxiv.org/abs/2609.03456) OPENED-PRIMARY.
- AI Skill Threat: 43–45% of 3,000+ developers; more where people believe in innate brilliance and competition; belonging (and learning culture) protects. — [Cat Hicks, 19 Oct 2023, updated Oct 2025](https://www.drcathicks.com/post/new-research-from-me-ai-skill-threat-contest-cultures-on-software-teams) OPENED-PRIMARY. historical by one month; observational.
- **Coping.** Meta-analysis of 324 samples, over 300,000 workers: active behaviour and cognitive reframing, and healthy detachment (recovery, mindfulness), go with less job insecurity; avoidance and counterproductive behaviour go with more. — [Langerak, UvA PhD ch.3, 2024](https://pure.uva.nl/ws/files/177430129/Chapter_3.pdf) OPENED-PRIMARY (listed as under review; correlational). It also warns that during an actual reorganization, networking and planning can raise insecurity (SNIPPET-ONLY). Five-wave study of 243 freelancers: proactive coping lowers insecurity by building career resources; recovery goes with more proactivity — [JVB 2025](https://doi.org/10.1016/j.jvb.2025.104176) SNIPPET-ONLY. Honest limit: an online planning exercise helped in one study and failed to replicate in the second — [Career Development International 2026](https://www.emerald.com/cdi/article/31/8/281/1383980/Planning-against-qualitative-job-insecurity) SNIPPET-ONLY.
- Career counselling meta-analysis: g=0.82 career outcomes, g=0.68 mental health, about four sessions — [Milot-Lapointe & Arifoulline 2025](https://onlinelibrary.wiley.com/doi/full/10.1002/joec.12239) SNIPPET-ONLY.
- **Free Persian resource:** WHO *Doing What Matters in Times of Stress*, illustrated guide, Farsi listed with audio at [who.canto.global/b/Q3UT3](https://who.canto.global/b/Q3UT3) (audio link not opened). — [WHO](https://www.who.int/publications/i/item/9789240003927) OPENED-PRIMARY, 2020, historical. Honest limit: a small pilot trial found no significant between-group effect — [Acartürk 2022](https://doi.org/10.4103/intv.intv_29_21) SNIPPET-ONLY.

### Inferences
- One-slide coping recipe that stays within evidence: (1) name it, it is common; (2) pick one small learning action per week; (3) reframe from "my typing" to "my judgment"; (4) protect recovery and limit doom-news; (5) find a group. Point 4 on news is my inference; only recovery is sourced.
- This is general information, not therapy. Say so, and tell people with persistent symptoms to see a professional.

### Gaps
- No quantitative study of "AI FOMO" in Persian-speaking developers. No RCT for AI-specific job anxiety found.

---

## Persian-language sources for the audience (2024–2026)

### Takeaway
Six usable items; the first three are the best fit.

### Cited Findings
1. **Jadi Mirmirani, «هوش مصنوعی چه فرصت هایی برای برنامه نویس ها درست کرده»**, YouTube, 49:20, Sept 2026 (directory date 16 Sep). Talk on opportunities, away from replacement hype; he opens by saying exact prediction is not easy. [YouTube](https://www.youtube.com/watch?v=p3qmeYbKj4s) OPENED-PRIMARY (auto-translated opening only). Backup [MediaFarsi](https://mediafarsi.com/video/p3qmeYbKj4s) OPENED-SECONDARY.
2. **Beyond Coding (Kalagar), «وقتی هوش مصنوعی کد می‌نویسه، چه مهارت‌هایی تو رو نجات می‌دن؟»**, YouTube, 57:11, Nov 2026 (directory date 3 Nov). Cites Microsoft, METR, DORA, Stack Overflow 2026; chapters on junior path at 44:50 and 48:56 (chapters SNIPPET-ONLY). Promotes the author's mentoring. [YouTube](https://www.youtube.com/watch?v=U1UngPhqdrk) OPENED-PRIMARY (opening only).
3. **Kargah podcast with Milad Nouri, «هوش مصنوعی و بحران تخصص»**, 19 Oct 2026 (27 Mehr 1405). Expertise, feeling adequate, how beginners gain experience. Closest to the stress theme. [kargah.net](https://kargah.net/episodes/milad-nouri-2/) OPENED-PRIMARY (page text, audio not heard).
4. **Uncut Farsi, «آیا هوش مصنوعی جای برنامه‌نویسان را می‌گیرد؟»**, 10 Aug 2026, 45:20. [uncutfarsi.com](https://uncutfarsi.com/podcast/2295/) OPENED-PRIMARY. Also an 18 Jul 2026 episode on agents, RAG, MCP/A2A that fits the bonus segment ([series page](https://uncutfarsi.com/series/professional/), OPENED-PRIMARY).
5. **Naei.ir, «خارج از کد، قسمت اول: هوش مصنوعی رو دوست ندارم»**, 13 Sep 2026, personal, identity theme. [naei.ir](https://naei.ir/blog/video/ctc40zq) OPENED-PRIMARY.
6. **Zoomit, «وقتی هوش مصنوعی به زبان خود می‌نویسد؛ پایان عصر برنامه‌نویسان انسانی؟»**, 5 Oct 2026. Article, retells Futurism, alarmed headline; use to teach source-checking. [zoomit.ir](https://www.zoomit.ir/ai-articles/468452-ai-code-humans-cannot-understand/) OPENED-PRIMARY.
- Extra: Radio Jadi 190 (28 Mar 2025), programming market 2021–2025 at 07:10 — [jadi.net](https://jadi.net/2025/03/%d8%b1%d8%a7%d8%af%db%8c%d9%88-%d8%ac%d8%a7%d8%af%db%8c-%db%b1%db%b9%db%b0-%d9%85%d8%a7%d8%b1%d9%be%db%8c%da%86-%d9%87%d9%88%d8%b4-%d9%85%d8%b5%d9%86%d9%88%d8%b9%db%8c/) SNIPPET-ONLY. TechZehn, Boris Cherny interview page (27 Jun 2026) — [techzehn.com](https://techzehn.com/podcast/how-ai-change-the-future-of-programming/) OPENED-PRIMARY; guest is Anthropic's Claude Code head, so vendor voice.

### Inferences
- Items 1 and 3 pair well: opportunity plus identity.

### Gaps
- I did not listen to full audio. Host should preview 1–3 before recommending.

---

## 5 best facts for a bonus segment on software beyond the interface

1. **Nadella did not say "SaaS is dead".** He said business apps are CRUD plus logic and the logic moves to agents; in 2025 he said the tools business becomes infrastructure for agents. [BG2 transcript 46:36](https://thinkersarchive.com/satya-nadella/ai-phase-shifts-bg2-podcast-2025/), [Dwarkesh 00:29:05](https://www.dwarkesh.com/p/satya-nadella-2).
2. **In a census of 22,854 popular GitHub projects, 26.3% already contain written instructions for coding agents; 59.6% among the most-starred.** [arXiv, Oct 2026](https://arxiv.org/abs/2610.31715). Software now has a second reader.
3. **MCP went from launch (Nov 2024) to close to half a billion SDK downloads a month (Jul 2026), but downloads are not users.** [MCP blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/), [host0](https://host0.ai/blog/state-of-mcp-2026).
4. **The plot twist: in autumn 2026 the fastest-growing shopping agents use ordinary web pages, not the new protocols.** [Forter](https://www.forter.com/blog/ai-agent-order-data/) (vendor network only). And in March 2026 OpenAI stepped back from Instant Checkout. [OpenAI](https://openai.com/index/powering-product-discovery-in-chatgpt/).
5. **Interfaces generated on demand are good, not yet better than designers: human raters preferred them to plain text, experts still won, and speed was ignored.** [Generative UI](https://generativeui.github.io/). Pair with 97% of llms.txt files getting zero requests ([Ahrefs](https://ahrefs.com/blog/llmstxt-study/)) as "not every trend is real".

## A timeline slide: waves of "programming is dead"

| Year | Claim | What happened | Source |
|---|---|---|---|
| 1954 | FORTRAN "should virtually eliminate coding and debugging" | Debugging is still here; programmer shortage followed in the 1960s (shortage SNIPPET-ONLY) | [IBM report](https://softwarepreservation.computerhistory.org/FORTRAN/BackusEtAl-Preliminary%20Report-1954.pdf) OPENED-PRIMARY |
| late 1950s | Automatic programming would make programmers obsolete | Compilers became programmers' tools; profession grew (my summary; growth figures from 1970 on: Census row below) | [Ensmenger](https://homes.luddy.indiana.edu/nensmeng/files/Ensmenger2010-MPM.pdf) OPENED-PRIMARY for the threat |
| 1981 | "The Last One": "the end of programming as you know it" | No lasting effect on the job that I could find (my inference) | [PCW June 1981](https://www.worldradiohistory.com/UK/Personal-Computer-World/80s/PCW-1981-06-S-OCR.pdf) SNIPPET-ONLY, [timeline](https://media.nerdsnipes.com/explorations/are-there-infinite-jobs/fig-end-of-programming-265204f71a15bc7a.html) OPENED-SECONDARY |
| 1982 | 4GL: computers must work in part "without programmers" | 4GLs became another tool; US IT jobs 450k (1970) to 4.6M (2014) | [Willison](https://simonwillison.net/2025/Jul/14/application-development-without-programmers/) OPENED-SECONDARY, [Census](https://www.census.gov/library/publications/2016/acs/acs-35.html) OPENED-PRIMARY |
| ~1990 | CASE tools generate systems from diagrams | 70% never used after one year (study cited in 1992) | [Kemerer](https://sites.pitt.edu/~ckemerer/CK%20research%20papers/LearningCurveAffectsCASEAdoption_Kemerer92.pdf) OPENED-PRIMARY |
| 1992 | Yourdon: massive unemployment of US programmers | He published a reversal in 1996 (SNIPPET-ONLY) | [CACM](https://cacm.acm.org/blogcacm/yourdon-had-a-point/) OPENED-SECONDARY |
| 2002–05 | Offshoring: 3.3M US services jobs by 2015 | Students fled CS (interest -70%); by 2005 CS graduates had among the best prospects | [Forrester](https://www.forrester.com/press-newsroom/forrester-finds-near-term-growth-of-offshore-outsourcing-accelerating/), [CRA](https://cra.org/crn/2006/03/drop_in_cs_bachelors_degree_production/), [Stanford](https://cs.stanford.edu/people/eroberts/CSCapacity/CSCapacity-History2000s.html) OPENED-PRIMARY |
| 2021 | Low-code: 80% of tech built by non-IT people by 2024 | No measurement found; US developers kept growing | [Gartner](https://www.gartner.com/en/newsroom/press-releases/2021-06-10-gartner-says-the-majority-of-technology-products-and-services-will-be-built-by-professionals-outside-of-it-by-2024) OPENED-PRIMARY |
| 2024 | Huang: "everybody in the world is now a programmer" | 2025: 2.635M US programmers + developers, up from 2.411M in 2024, but only about the Dec 2023 level (2.617M) | [NVIDIA](https://blogs.nvidia.com/blog/world-governments-summit/), [BLS](https://www.bls.gov/cps/cpsaat11b.htm) OPENED-PRIMARY (2024 figure OPENED-SECONDARY) |
| 2025 | Amodei: 90% of code by AI in 3–6 months | About 50% at Anthropic after 7 months (estimate), over 80% by May 2026 (self-reported); "all code" missed | [Redwood](https://www.redwoodresearch.org/blog/is-90-of-code-at-anthropic-being), [Anthropic](https://www.anthropic.com/institute/recursive-self-improvement) OPENED-PRIMARY |
| 2026 | "SaaSpocalypse" | Index -25% in six weeks, partial recovery, new selloff in November; sales still growing | [The Batch](https://www.deeplearning.ai/the-batch/claude-cowork-plugins-trigger-a-saas-stock-selloff-but-partnerships-lead-to-slight-rebound), [Trefis](https://www.trefis.com/stock/intu/articles/627442/intuit-stock-fell-13-on-a-small-cut-is-software-s-subscription-model-breaking/2026-11-23) |

Footer for the slide: "Past waves do not prove this one is harmless. The new signal is at entry level: -19% relative employment for ages 22–25 in the most exposed US jobs" ([Stanford GSB](https://www.gsb.stanford.edu/insights/almost-every-job-has-tasks-ai-can-change)).

## Facts that honestly lower stress

1. US programmers + developers did not collapse: 2.635M in 2025 ([BLS](https://www.bls.gov/cps/cpsaat11b.htm)). Say it honestly: 2.617M (Dec 2023 average), 2.411M (2024), 2.635M (2025), so a dip and a recovery, roughly flat over two years. Earlier years via [secondary page](https://media.nerdsnipes.com/explorations/are-there-infinite-jobs/fig-end-of-programming-265204f71a15bc7a.html); household-survey data is noisy.
2. BLS (Aug 2026) still projects +10% for 2025–35 and about 106,100 openings a year ([BLS](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm)). Say also: lowered from the previous round.
3. US software postings up almost 15% since Feb 2025 while the overall market fell 7% ([CNBC](https://www.cnbc.com/2026/10/11/ai-software-developer-jobs.html)). Say also: 27.5% below pre-pandemic and 71% of the rise is senior.
4. Last time students fled CS out of fear (2000–05), graduates who stayed met one of the best markets ([Stanford](https://cs.stanford.edu/people/eroberts/CSCapacity/CSCapacity-History2000s.html), [CRA](https://cra.org/crn/2006/03/drop_in_cs_bachelors_degree_production/)).
5. Expected AI job cuts ran about double the cuts actually reported a year later ([McKinsey 2026](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)).
6. Ten years after "stop training radiologists", the US is short of them ([Fortune 2026](https://fortune.com/article/ai-godfather-radiologists-obsolete-salaries-up-to-571k-demand-growing/)).
7. You are not alone: 54% of developers are anxious ([Adaptavist](https://www.theadaptavistgroup.com/company/press/more-than-half-of-developers-are-anxious-about-their-long-term-careers-as-ai-rewrites-the-job)), 60% of computing students are at least moderately concerned ([CRA](https://cra.org/crn/2026/08/infographic-data-buddies-survey-provides-insights-into-students-job-concerns-and-preparedness-to-use-ai/)), and Karpathy himself felt behind ([post](https://karpathy.bearblog.dev/sequoia-ascent-2026/)). Feeling behind is not evidence of being bad at it.
8. Even the International AI Safety Report finds "little expert consensus" on the path to 2030 ([IASR](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026)). Not knowing is the expert position.
9. What you do matters: active coping and reframing go with less insecurity, avoidance with more, across 300,000+ workers ([UvA](https://pure.uva.nl/ws/files/177430129/Chapter_3.pdf)). Belonging and learning culture protect ([Hicks](https://www.drcathicks.com/post/new-research-from-me-ai-skill-threat-contest-cultures-on-software-teams)).
10. A free WHO stress guide exists in Farsi ([WHO](https://www.who.int/publications/i/item/9789240003927)).

## Claims to avoid on stage

1. "Nadella said SaaS is dead." He did not.
2. "Amodei said AI will replace all developers within a year." Fortune paraphrased it that way; the transcript says models might do most, maybe all, of what SWEs do end to end in six to 12 months, with uncertainty. Likewise "90% of code" was never "90% of programmers".
3. "Amodei: half of white-collar jobs gone in five years" without "entry-level". Outlets differ; not verified here at the primary source.
4. "Experts disagree by decades" with no update. Lab leaders and forecasters moved shorter in 2026 (Hassabis to 2–3 years, AI 2027 authors back to 2027, Metaculus ~2030). The 2047/2116 survey is from Oct 2023.
5. "AI 2027 authors admitted they were wrong / delayed." Outdated since 10 Nov 2026.
6. "Karpathy says AGI is a decade away" as his current view. It is Oct 2025; he saw a step change two months later and joined Anthropic in May 2026.
7. "AI predictions are always hype." Forecasters underestimated benchmarks badly (FRI). Equally avoid "everything is coming faster than predicted": robotaxis were not.
8. "Instant Checkout failed, so agentic commerce is dead" or "agents now do 1.5% of shopping". The first is outdated, the second is an SEO agency estimate.
9. "97 million / half a billion MCP users." They are downloads.
10. "Add llms.txt so AI finds you." Data says no effect seen.
11. "Every wave created more programmers, so you are safe." Titles were destroyed and juniors are hit now; correlation is not a guarantee.
12. "Programmer jobs are at their lowest since 1980." Only the narrow title.
13. "ATMs never hurt tellers." Mobile banking did. Do not mix 164k full-time (2022) with BLS 339k all jobs (2025).
14. "Radiology proves AI cannot replace jobs." Law, liability and demand did much of the protecting.
15. "Hopper promised COBOL would end programmers." Not supported; she separated coding from programming (weak source). Martin wrote "in part".
16. "Gartner's 80% prediction was proven wrong." No measurement found.
17. "SaaS fully recovered" or "SaaS collapsed". Both false on 23 Nov 2026.
18. "The WHO guide is proven to cure job anxiety." Pilot trial was not significant.
19. Any Iran-specific statistic. None verified here.
