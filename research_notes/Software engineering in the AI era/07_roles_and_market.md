# What the AI-era software job market wants, role by role (as of 2026-11-25)

Window 2023-11-25 to 2026-11-25; older = *historical*. Tags: **OPENED-PRIMARY** (publisher's own page/data opened), **OPENED-SECONDARY** (opened, reports someone else's data), **SNIPPET-ONLY** (seen in search results; open before use). *Derived* = my arithmetic. *Inference* = my reading. Disclosure: prepared by an Anthropic model; Anthropic is named below.

**Three rules for every number here.** (1) Posting ≠ opening ≠ hire. (2) Titles are counted by words in the title, so renaming looks like growth or collapse. (3) Percentages from tiny bases mislead; give the base.
**Stakes:** TrueUp, Live Data, Lenny, Timeplot, Hiring Tempo, Apiva, Cruvo, landed.jobs, FDE Dispatch sell job data, recruiting or careers content. Lightcast and Indeed sell labour data/ads. Figma, OpenAI, Anthropic, Stripe, Carta sell to the people described. Almost all data is US/UK/tech-company.

---

## 1. Forward Deployed Engineer (FDE)

**Conclusion.** An FDE is paid to close the gap between "the model can do it in a demo" and "this company depends on it on Monday". Demand is real, loud and small (thousands, not hundreds of thousands). Part is renaming. The function looks durable; the title and vendor-paid version probably are not. For a beginner it is a *skill mix to copy*, not a first job to chase.

**Day to day.** Scope the problem, build inside the customer's systems, test on their data, launch, feed lessons back.
- Palantir's 2019 definition (*historical*): a product developer does "one capability, many customers"; a forward deployed engineer "one customer, many capabilities" — [Palantir](https://blog.palantir.com/dev-versus-delta-demystifying-engineering-roles-at-palantir-ad44c2a6e87) OPENED-PRIMARY.
- Until about 2016 Palantir had more FDEs than ordinary engineers; when its platform matured many moved back to core engineering — [Pragmatic Engineer, Aug 2025, freed and updated Nov 2026](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers) OPENED-SECONDARY.

**Why now: the deployment gap, with numbers.**
- Best single example: at Morgan Stanley the OpenAI pipeline worked in 6–8 weeks; trust took about six *months* of pilots and evals — [interview with OpenAI's FDE head, Nov 2025](https://tailwinds.substack.com/p/metabolize-pain-excrete-product-the) OPENED-SECONDARY (investor's blog).
- A telecom's voice agent scored ~60% on key evals; passing 90% took six months — [OpenAI, 22 Oct 2026](https://openai.com/index/forward-deployed-engineering-means) OPENED-PRIMARY (vendor's own cases).
- 80% of respondents say AI raised their own productivity; only 37% report any profit (EBIT) effect, flat on the year. ~Three-quarters of high performers redesigned workflows vs a quarter of others — [McKinsey, 25 Aug 2026, n=1,719](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) OPENED-PRIMARY (sells consulting).
- *Inference:* the scarce input is no longer code but access, context, correctness and trust inside one organisation.

**Who hires.** Title-matched openings, 7 Nov 2026: 761 at 165 of 810 tracked companies, ~1 in 100 jobs; Databricks 119, Palantir 73, Salesforce 64, OpenAI 37 — [Hiring Tempo](https://www.hiringtempo.com/articles/forward-deployed-engineer) OPENED-PRIMARY. All US ads, Jan–Sep 2026, led by **consultancies**: Deloitte 872, Accenture 688, Google 499, KPMG 447 (Lightcast) — [CNBC, 15 Oct 2026](https://www.cnbc.com/2026/10/15/aws-anthropic-racing-to-deploy-army-of-specialized-ai-engineers.html) OPENED-SECONDARY. Money: [OpenAI Deployment Company, >$4bn](https://openai.com/index/openai-launches-the-deployment-company/), [Anthropic services venture](https://www.anthropic.com/news/enterprise-ai-services-company) OPENED-PRIMARY; AWS $1bn, Microsoft $2.5bn SNIPPET-ONLY.

**Demand, always with its base.**
| Measure | Number | Tag |
|---|---|---|
| US ads | ~200 (2024), ~1,200 (2025), 5,200+ (Jan–Jul 2026) — [Lightcast](https://lightcast.io/resources/blog/forward-deployed-engineer-ai-job) | OPENED-PRIMARY |
| Open roles, tech companies worldwide | ~1,500, 4.6× in a year; author says partly renamed sales engineers — [Lenny/TrueUp, 10 Nov 2026](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late) | OPENED-PRIMARY (free part) |
| US hires from outside, 1 Jan–6 Nov 2026 | 2,400+ outside Palantir plus 151 at Palantir — [Live Data](https://www.livedatatech.com/insights/us-tech-hiring-2026) | OPENED-PRIMARY |
| Scale check | ~2 FDE hires per 100 US software-engineer hires (113,000 in the year to Apr 2026; windows differ) | Derived |
| Recent speed | Same 225 companies, Sep 12–Nov 7: 306→356 (+16%; all jobs +8%). Databricks alone added ~58, so the rest were flat or slightly down (derived; Hiring Tempo) | OPENED-PRIMARY |

**What ads ask.** 563 ads, 115 employers, Oct 2026, share of *employers*: APIs/integration 81%, Python 74%, customer-facing 73%, LLMs 63%, agents 62%, evals 33%; median stated experience 5 years — [FDE Dispatch](https://fdedispatch.com/forward-deployed-engineer-skills/) OPENED-PRIMARY. A second count (870 ads, July 2026) finds 77% customer-facing and only 24% *requiring* LLM experience — [Timeplot](https://www.timeplot.app/newsletters/20260716-fde-requirements) OPENED-PRIMARY. FDE and software engineer share about half their skills (Lightcast via CNBC).

**Seniority.** UK outside hires had a median 7.7 years of work; 58% of holders have had the title under a year; only Palantir hires beginners in number — [Cruvo, Nov 2026, 2,161 UK careers](https://www.getcruvo.com/research/forward-deployed-engineers) OPENED-PRIMARY. Of 761 openings, 43 are intern/new-grad/junior and 31 of those are at Palantir; 12% remote (Hiring Tempo). Examples of on-site time: Palantir ~25%, Commure up to 50% (Pragmatic Engineer).

**Pay: no real premium.** Headline: median advertised $195,456 (Lightcast via CNBC). Like for like, the same companies post $238,500 for FDEs and $243,750 for software engineers (Hiring Tempo, 96 and 730 ads). *Inference:* the "premium" mostly reflects *which* companies use the title.

**Critics, and who is right.**
- "Consulting renamed": partly true. 31% of 2026 UK title-takers were retitled, not hired; 14% of 179 European FDE ads are really configuration or pre-sales, 77% are the engineering job (Cruvo). Pragmatic Engineer's Nov 2026 update: most 2026 FDEs rarely touch the core product.
- "Breaks the business model": without a shared platform you become "Accenture for X" — [a16z, Jan 2026](https://a16z.com/the-palantirization-of-everything/) OPENED-PRIMARY (investor; the same firm promoted FDEs in [2025](https://a16z.com/services-led-growth/)).
- "Will not last": Gartner expects ~70% of vendor-led efforts abandoned by 2028 — [Channel Dive](https://www.channeldive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831816/) OPENED-SECONDARY. A headhunter who profits from the boom says it may "go away" in 5–10 years — [TechCrunch](https://techcrunch.com/2026/07/30/forward-deployed-engineers-are-the-ai-industrys-latest-talent-obsession/) OPENED-SECONDARY. OpenAI's stated goal is to make itself unnecessary: rebuilding on Codex removed ~90% of custom code; in one case a second team took one day after a two-month first deployment.
- Andrew Ng: there will be far more AI engineers than FDEs, and firms dislike vendor lock-in — [The Batch, 29 May 2026](https://www.deeplearning.ai/the-batch/forward-deployed-engineers-and-the-future-of-ai-engineering) OPENED-PRIMARY (sells courses).
- Nobody agrees how many exist: 2,000 "active" (Gartner) vs 17,000 US title-holders (headhunter).

**Open these:** Jarvis (OpenAI) above; [Nabeel Qureshi, Reflections on Palantir](https://nabeelqu.co/reflections-on-palantir) OPENED-PRIMARY; [Cagan/SVPG](https://www.svpg.com/forward-deployed-engineers/) OPENED-PRIMARY; [The Slow Layer](https://theslowlayer.com/essays/what-is-actually-new-about-the-forward-deployed-engineer) OPENED-SECONDARY (test: can this person change the product, and who pays?); [Bob McGrew at YC](https://www.youtube.com/watch?v=Zyw-YA0k3xo) SNIPPET-ONLY.

---

## 2. The other titles: real category or buzzword?

**Conclusion.** Real categories: AI engineer, agent/applied AI, ML engineer, platform/infra, security, product engineer. Real but tiny: evals, design engineer, GTM engineer. Skills dressed as titles: prompt, context, (mostly) harness. Titles are already churning: in a 1,501-company panel the plain "AI Engineer" title *fell* from 72 to 65 per 1,000 companies in a year while "Agent Engineer" rose 37 to 56 and "Applied AI" 35 to 49 — [Timeplot, 1 Nov 2026](https://www.timeplot.app/newsletters/20261101-new-job-titles-2026) OPENED-PRIMARY.

| Title | One line | Evidence | Verdict |
|---|---|---|---|
| AI engineer | Builds reliable products on top of models | 1,412 live US ads vs 18,589 "software engineer", Nov 2026 — [Apiva](https://apiva.ai/reports) OPENED-PRIMARY. UK share of IT ads 0.08%→0.19%→0.61% (2024–26) — [IT Jobs Watch](https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence%20engineer.do) OPENED-PRIMARY | Real, biggest |
| Agent / applied AI | Same, where software acts across steps and systems | Panel above; 955 of 2,852 AI jobs on one board, Sep 2026 — [AI Hiring Board](https://www.aihiringboard.com/blog/ai-safety-evals-governance-jobs-september-2026) OPENED-PRIMARY | Real, rising |
| Evals engineer | Builds the tests that say if AI output is good | 34 of those 2,852, yet evals named in 37% of 5,046 AI-engineer ads — [hiredaemon](https://hiredaemon.com/blog/skills-you-need-to-be-an-ai-engineer) OPENED-PRIMARY | Huge skill, tiny title |
| ML / research engineer | Trains or improves models | 505 + 492 of 2,852; ML engineer 1,816 ads vs AI engineer 3,951 — [Data Pay Index, 10 Nov 2026](https://datapayindex.com/roles/) OPENED-PRIMARY | Real, harder entry |
| Platform / infra / SRE | Keeps systems running, cheap and recoverable | 3,473 live US ads, more than AI + ML engineer together (Apiva); TrueUp platform +30% y/y (§3) | Real, under-hyped |
| AI security | Protects models, agents and data | AI security engineer 2,409 US ads, +268% on the year, while *all* cyber ads fell 26.4% to 235,786 — [CyberSN, Jan–Sep 2026](https://cybersn.com/resources/reports/cybersecurity-jobs-report) OPENED-PRIMARY. About 1% of cyber ads (derived) | Real, small |
| Product engineer | Codes *and* owns whether users benefit | 459 roles at 301 companies, Oct 2026; in 113 hand-read ads two-thirds require talking to users — [Nilerobot](https://nilerobot.com/blog/what-is-a-product-engineer) OPENED-PRIMARY. UK 0.05%→0.10%→0.16% (may include physical products) | Real, rising |
| Design engineer | Designs in code and ships it | 39 open software roles on a specialist board, Nov 2026 — [Design Code Jobs](https://designcodejobs.com/reports/2026-11) OPENED-PRIMARY. Bigger counts include civil/mechanical jobs | Real, rare |
| GTM engineer | Automates sales and marketing with code | 14→37 per 1,000 companies, usually one hire each (Timeplot) | Real, small |
| Context / harness / prompt | Feeds and controls the agent | Of 115,348 ads (Jul 2026): prompt engineer 4, context engineer 2 — [landed.jobs](https://www.landed.jobs/reports/state-of-ai-native-jobs) OPENED-PRIMARY. "Agent Harness Engineer" is an exact title at five Chinese firms in a 44-ad sample — [handbook](https://ai.zenoagi.com/harness/career/) OPENED-SECONDARY | Skill, not job |

**Shared core.** Andrew Ng's team, from 10,000+ ads plus interviews, reduced it to four: build and deploy AI apps (with evals), software fundamentals, coding agents, and *shaping what to build* — [The Batch, 14 Aug 2026](https://www.deeplearning.ai/the-batch/the-ai-engineering-skills-map) OPENED-PRIMARY. In 5,046 AI-engineer ads: Python 68%, agents 66%, APIs 52%, observability 38%, CI/CD 32%. Mostly ordinary engineering.
**Not a beginner's back door.** AI-engineer ads open to entry level: 3.7%, versus 4.8% for software engineer and 5.3% for front-end (Apiva). Typical ask: 5 years, the same as backend (hiredaemon).

---

## 3. Front-end, back-end, full-stack, mobile, data, infra

**Conclusion.** The *pure front-end and mobile specialist titles* are shrinking in every source I opened. Backend is roughly flat, not booming. Platform, security and data engineering hold or gain. What is ending is the job defined by one layer; interfaces still get built (inference).

| Layer | Open roles, tech companies, Oct 2025→Oct 2026 (TrueUp) | UK share of permanent IT ads, six months to Nov 2024 / 2025 / 2026 |
|---|---|---|
| Front-end | **−51%** | 0.64 / 0.32 / **0.17%** |
| Mobile | −39% (iOS −46%, Android −47%) | 0.11 / 0.14 / 0.04% |
| Full-stack | n/a | 1.21 / 0.90 / 0.71% |
| Backend | +4.2% | n/a |
| Data engineer | n/a | 1.47 / 1.33 / 1.85% |
| DevOps | n/a | 1.19 / 0.81 / 1.33% |
| Platform | +30% | 0.38 / 0.43 / 0.51% |
| Security | +34% | 0.89 / 0.79 / 0.94% |
| "Software engineer" | +2.5% (all engineering) | 6.80 / 3.52 / 5.57% |

Sources: TrueUp specialty figures as printed by [Golden Data](https://goldendata.app/dashboards/jobs-report/) OPENED-SECONDARY (Lenny's free text confirms front-end and mobile roughly halved); UK from [IT Jobs Watch](https://www.itjobswatch.co.uk/jobs/uk/front-end%20developer.do) pages OPENED-PRIMARY (use shares: total ads more than doubled in 2026, so counts are not comparable). Third source: in ~180m global ads, 2025 vs 2024, front-end fell most among software roles; ML engineer +40% — [Bloomberry](https://bloomberry.com/blog/i-analyzed-180m-jobs-to-see-what-jobs-ai-is-actually-replacing-today/) OPENED-PRIMARY.

**Caveats that change the story.**
- Stack labels are a minority: Apiva counts 640 front-end, 498 backend and 1,328 full-stack ads against 18,589 generic "software engineer" (about 12% of the four, derived). Much of the fall may be *relabelling*.
- The slogan "everyone becomes full-stack" is **not** supported: the UK full-stack title fell too. Gainers are AI, platform, product and data.
- TrueUp restated its design category this year; an engineering restatement cannot be ruled out.
- Security conflicts: +34% (TrueUp, tech companies) vs security engineer −32.3% (CyberSN, all US employers, SNIPPET-ONLY). Data conflicts: TrueUp +18% since Jan 2023, Indeed −49%, US data-science *hires* −21% since Jan 2024 (Golden Data). Employer mix decides the sign.
- BLS still projects US web developers +3.8% to 2035 — [BLS](https://www.bls.gov/emp/skills/computers-and-information-technology.htm) OPENED-PRIMARY.

**Why the interface layer first? (mechanism, not proof)** Its output can be checked by eye and breaks cheaply; permissions, transactions and state cannot. Trade press: agents handle component-based UI well but wobble on permissions and transactions; Meituan merged front-end and back-end in one unit — [InfoQ China, 1 Jul 2026](https://www.infoq.cn/news/rHiSH66JZwoQG5Dfvv6x) OPENED-SECONDARY. Borders are dissolving both ways: developers doing design work 44%→60%, designers doing development doubled to 41% — [Figma, Jun 2026](https://www.figma.com/blog/2026-ai-report/) OPENED-PRIMARY.
**Gap:** no opened source gives a clean 2022–2026 series by stack layer.

---

## 4. UI/UX and product design

**Conclusion.** Design openings are at a record low, design *need* is not. AI made screens cheap, not the decision of which screen, for whom, or proof that it works. Seats shift to seniors and generalists.

- Open product-design roles ~1,900, −28% on the year, lowest recorded; US hires 12,600 vs 27,600 in 2022; 3.8 PM openings per design opening (Lenny) OPENED-PRIMARY. **Trap:** TrueUp reclassified design; never compare March's 5,716 with November's 1,924 — [Top5Apps check](https://top5apps.ai/news/why-design-jobs-are-falling-while-pm-jobs-rise-ai-lenny-rachitsky-job-market-report-checked/) OPENED-SECONDARY.
- 2022 was a bubble, and most of the fall came in 2022–23, *before* usable AI design tools; a second fall of about a third came in 2026 (same check). User-research counts exaggerate too; work moved to other titles — [Voice of User](https://www.thevoiceofuser.com/is-uxr-going-extinct/) OPENED-SECONDARY.
- Counter: 82% of design managers say need rose or held; 56% see more senior demand, 25% junior — [Figma, Feb 2026](https://www.figma.com/blog/why-demand-for-designers-is-on-the-rise/) OPENED-PRIMARY (sells design tools; asks people who already employ designers; predates the 2026 drop). NN/g: stabilising, seniors and generalists first — [Jan 2026](https://www.nngroup.com/articles/state-of-ux-2026/) SNIPPET-ONLY.
- **The most useful finding for students:** among 521 UX practitioners AI is used often for code (73%) and desk research (69%), but 61% never use it to interview users and 51% never to test with users. Product managers feel safer (3.81/5, n=21) than designers (2.99) — [NN/g, 23 Oct 2026](https://www.nngroup.com/articles/ai-in-ux-survey-26/) OPENED-PRIMARY.
- BLS: interface designers +6.0% to 2035 OPENED-PRIMARY.

---

## 5. Founders and product builders

**Conclusion.** Building got cheap, so building stopped being the advantage. More people start alone; the *typical* one earns less; the top pulls away. The bottleneck moved to distribution, retention, trust and support (last two: inference).

- **Easier to start:** solo share of new startups 23.7% (2019)→36.3% (H1 2025), but solo-led firms took 14.7% of 2024 priced-round cash — [Carta](https://carta.com/data/solo-founders-report/) OPENED-PRIMARY. Stripe Atlas: 63% of C-corps in Q2 2026 — [Stripe, 28 May 2026](https://stripe.com/blog/top-solo-founder-traits) OPENED-PRIMARY. (Different bases; do not mix.)
- **Harder to win (same Stripe page):** solo *median* six-month revenue −23% on the year, top decile +19%; the gap went from 34× to 61× in four years. Second-month customer return ~30% for the top decile vs 8% for the middle. By month 24 top multi-founder teams earn 53% more than top solos. Top solos get 51% of revenue abroad vs 2%.
- 82% of solo founders in a directory had no revenue; 63% had *launched* with no revenue — [Startup Project, n=592](https://startupproject.org/resources/state-of-solo-founders/) OPENED-PRIMARY (self-selected).
- **Smaller teams:** median seed startup 5 people vs ~10 in 2021; Series A 17 vs 26 — [Carta's Peter Walker, Feb 2026](https://www.linkedin.com/posts/peterjameswalker_layoffs-ai-and-the-future-of-startup-work-activity-7424504730007097344-GHra) OPENED-PRIMARY. He doubts many tiny firms will replace the lost jobs. Startup hiring in January 2026 was 65% below January 2022 — [Carta](https://carta.com/data/startup-compensation-h2-2025/) SNIPPET-ONLY. Scarcer funding also shrinks teams.
- *Inference for Iran:* selling abroad, the winners' habit, is what sanctions block most. No data found.

---

## 6. Twenty-five years: titles die, the layer moves

**Conclusion.** *Tool* titles (Flash, prompt) die fastest. *Responsibility* titles (keep it running, keep it safe, make it useful) change name and survive. Decline usually takes a decade, not a year. About 60% of 2018 US employment was in job titles that did not exist in 1940 (NBER 30389, SNIPPET-ONLY; "majority" confirmed in the [QJE 2024 abstract](https://academic.oup.com/qje/article-abstract/139/3/1399/7630187) OPENED-PRIMARY).

| Title | What happened | Where the work went | Source |
|---|---|---|---|
| Webmaster (1990s) | First too hard for one person, then tools made pieces too easy; UK ads now 0 | Web dev, CMS, ops, marketing | [History of the Web](https://thehistoryoftheweb.com/postscript/what-happened-to-the-webmaster/) *historical*, OPENED-SECONDARY; [IT Jobs Watch](https://www.itjobswatch.co.uk/jobs/uk/webmaster.do) OPENED-PRIMARY |
| Flash developer | Platform ended 31 Dec 2020 | HTML5, WebGL, front-end | [Adobe](https://www.adobe.com/products/flashplayer/end-of-life-alternative.html) OPENED-PRIMARY |
| Sysadmin → DevOps/SRE → platform | Google replaced manual ops teams with engineers; sysadmins −4.1% to 2035, yet still 323,600 US jobs | Automation, reliability, platform | [SRE book](https://sre.google/sre-book/introduction/) *historical*; [BLS](https://www.bls.gov/ooh/computer-and-information-technology/network-and-computer-systems-administrators.htm) OPENED-PRIMARY |
| iOS/Android developer | −46% / −47% open roles in a year | Product and cross-platform roles (inference) | §3 |
| Data scientist (2012 star) | 275,600 US jobs, +34.6% to 2035, but recent hires down | Data engineering, ML, analytics | [HBR 2022](https://hbr.org/2022/07/is-data-scientist-still-the-sexiest-job-of-the-21st-century) *historical*; BLS OPENED-PRIMARY |
| ML engineer | Ads +78% (2024), +40% (2025) | Now outnumbered by AI engineer | Bloomberry; Data Pay Index |
| Prompt engineer (2023 star) | 36 ads in a year across Timeplot's companies | Inside every AI role | Timeplot |
| AI engineer | Named [June 2023](https://www.latent.space/p/ai-engineer) (*historical*); UK share 8× in two years; title dipping in the startup panel | Splitting into agent, applied, evals | §2 |
| FDE | Palantir niche → 2026 boom | Likely solutions/consulting and product (inference) | §1 |

*Inference:* the webmaster pattern is returning in reverse. Specialisation split the generalist owner; AI recombines the pieces into product engineer, FDE, solo founder.

---

## 7. Synthesis

**What growing roles share.** (1) They sit on a *seam*: model–customer, code–production, system–attacker, product–user. (2) They own an outcome someone can be blamed for. (3) Their result cannot be checked at a glance; it needs evals, monitoring, users or time. (4) They need context that is not written down. (5) They want experience.

**What shrinking roles share.** Named after one layer, tool or artifact; spec in, artifact out; quick to check; context fits in the prompt. Front-end, iOS, Android, prompt engineer, AI trainer (9.1→1.2 per 1,000 new ads, Timeplot), penetration tester (−45.9%, CyberSN, SNIPPET-ONLY).

**One-line test (inference):** *Could a stranger finish your task from a written ticket, and could someone check it in a minute?* Two yeses: exposed. Two noes: in demand.

**Where this theory fails.** Backend, hard to verify, grew only 4.2%. Product managers, the purest "decide what" role, had openings +56% since Jan 2023 but hires −4% since Jan 2024. Overall US engineer hires still fell 17% since Jan 2024 (Lenny/Golden Data). A good seam guarantees nothing.

**Five years out, with confidence.**
- *High:* titles will change again; verification, integration and ownership stay scarce while output cannot prove itself; stack borders keep blurring.
- *Medium:* security, platform and data outgrow pure UI; FDE fades as a title, persists as work; small teams ship more.
- *Low:* total number of engineers, junior share, timing. Nobody knows.

**Why humility.** BLS cut its ten-year developer forecast from [+15.8%](https://www.bls.gov/opub/ted/2026/artificial-intelligence-information-technology-and-employment-2024-34.htm) to +10.2%, and security analysts from +28.5% to +21.0%, in one edition OPENED-PRIMARY. For 2012–22 it expected programmers +8% (SNIPPET-ONLY); they are now 110,800 and projected −7.3%. 32% of respondents predicted AI-driven staff cuts; a year later 14% reported them (McKinsey). The biggest current boom may be outside software (Lenny, paywalled).

---

## 10 insights worth a slide

1. **The hard part moved from demo to dependable.** Evidence: Morgan Stanley, weeks to build, about six months to trust. Caveat: vendor-told case.
2. **FDE is booming and tiny.** 1,200→5,200+ US ads, but ~2 per 100 engineer hires. Caveat: renaming; windows differ.
3. **The AI boom's signature job asks first for customers and integration.** 81% of employers want APIs, 73% customer work, 63% LLMs. Caveat: mentions, not requirements.
4. **The FDE pay premium vanishes at the same employer.** $238,500 vs $243,750. Caveat: 96 ads, base pay only.
5. **Single-layer titles are shrinking.** Front-end −51%; UK share 0.64%→0.17%. Caveat: titles, possible relabelling; cause unproven.
6. **Nobody hires "prompt engineers".** 4 of 115,348 ads. Caveat: the skill lives on inside other jobs.
7. **Evals are a skill everyone wants and a title almost nobody has.** 37% of AI-engineer ads vs 34 dedicated roles of 2,852. Caveat: different samples.
8. **AI enters where no user is in the room.** 73% use it often for code; 61% never to interview users. Caveat: 521 self-selected UX people.
9. **Building got easy, earning did not.** Solo median revenue −23%, top decile +19%. Caveat: Stripe Atlas companies only.
10. **Titles die; responsibilities move.** Webmaster and Flash: 0 UK ads; sysadmin work became DevOps and platform. Caveat: decline takes years, and sysadmins still exist.

## Claims to avoid

- "FDE jobs grew 1,000%" without the base.
- "FDEs earn far more than software engineers."
- "Front-end is dead" or "AI killed front-end." No causal study was found.
- "Everyone must become full-stack": that title fell in the UK.
- "Security is exploding": sources disagree; only AI security clearly rose.
- "Design jobs fell from 5,716 to 1,924": definitions changed.
- "AI engineer is the easy way in": 3.7% entry level.
- "Solo founders are winning thanks to AI": the top did, the median did not.
- "95% of AI pilots fail": not verified here; use McKinsey's 37%.
- "14% workforce cuts": it is 14% of *respondents* reporting any decline.
- Applying US/UK/tech-company shares to Iran; FDE work is mostly on-site (12% remote).
- Any 2031 forecast without a confidence label.
