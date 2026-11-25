# 03. Two camps: "software engineering is dying" and "English is the new programming language"

Research date: 2026-11-24. In-window sources: 2023-11-24 to 2026-11-24. Older items are marked HISTORICAL.

How to read the tags
- OPENED-PRIMARY: the speaker's own page, or the transcript text of the official video/interview page, was read by tool (full fetch, or an extended text extract of that exact URL). Timestamps marked "approx." come from third-party transcripts of the same video. Check them by playing the clip before the event.
- OPENED-SECONDARY: a third-party transcript, a tweet reproduced in an article, or news reporting was read. The primary itself was not.
- SNIPPET-ONLY: only a short search extract was seen.
- X/Twitter, Reuters, India Today, Quartz and the Marquette PDF refused automated reading. Every tweet is therefore at best OPENED-SECONDARY. Open tweets by hand before going on stage.
- All claims are paraphrased. Short quoted fragments (under 15 words, one per source) appear only where the wording is the point.
- Conflict of interest note: these notes were compiled by a Claude model, made by Anthropic. Amodei, Cherny and (since May 2026) Karpathy work there. They are treated here as interested parties like everyone else, and several Anthropic self-reported numbers are labelled as such.

---

## Q1. Camp A: who says software engineering is dying or will be mostly automated soon?

### Takeaway
The strongest Camp A speakers almost never said "software engineers will disappear by date X". They said code writing would be automated by date X, and headlines merged the two. On code writing they were early but directionally right. On whole-job replacement every dated claim that has come due so far has missed, been quietly narrowed, or been re-explained by its own author.

### Cited Findings

#### A1. Dario Amodei
- Role then/now: CEO and co-founder of Anthropic. Stake: sells Claude and Claude Code; S-1 filed 26 Oct 2026, so he is speaking while going public — [SEC filing index for Anthropic, S-1 listed 2026-10-26](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=anthropic&type=S-1&dateb=&owner=include&count=10)
- A1a. 10 Mar 2025, Council on Foreign Relations, New York. Claim: in three to six months AI would be writing 90% of code, and in twelve months the world may be (his hedge) one where AI writes essentially all of it. Hedge usually cut from clips: the programmer still specifies goals, design, integration and security judgment, which raises human productivity; but he adds that AI eventually takes over those "little islands" as well. Primary: [CFR transcript](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic) (answer to Froman on jobs). Backup: [passage reproduced](https://www.clientserver.dev/p/you-should-obviously-still-learn). Tag: OPENED-PRIMARY.
- A1b. 20 Jan 2026, World Economic Forum Davos, "The Day After AGI" with Demis Hassabis. Claim: he does not know, but models "might be six to 12 months away" from doing most, maybe all, of what software engineers do end to end. Hedge in the same answer: chips, manufacturing and training time do not speed up, there is a lot of uncertainty, and it could easily take a few years. He also said he can foresee needing fewer junior and then intermediate people inside Anthropic. Primary: [WEF Radio Davos transcript and video](https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/). Backup: [full video re-upload](https://www.youtube.com/watch?v=02YLwsCKUww). Tag: OPENED-PRIMARY.
- A1c. 13 Feb 2026, Dwarkesh Podcast. Claim: people misread his predictions. He lays out a ladder: 90% of lines, 100% of lines, 90% of end-to-end SWE tasks, 100% of today's SWE tasks, and only then 90% less demand for engineers, which he does expect eventually. He calls 90% of lines a "very weak criterion". End-to-end coding: about one to two years, near certain within ten. Primary: [video](https://www.youtube.com/watch?v=n1E9IZfvGMA). Backup: [official clip on exactly this point](https://www.youtube.com/watch?v=iGFyksusms0). Tag: OPENED-PRIMARY.
- How it aged: At Anthropic, over 90% of codebase contributions were written by Claude in Sep 2026 (company claim in the S-1) — [Forecasting Research Institute summary citing S-1](https://forecastingresearch.org/research/recursive-self-improvement-v1), [News18](https://www.news18.com/tech/anthropic-says-claude-wrote-more-than-90-of-its-code-in-september-as-engineers-shift-roles-ws-l-10401400.html). Industry-wide the deadline was missed: Google, a leader, was at 50% in autumn 2025 and 75% in Apr 2026, all "approved by engineers" — [Pichai, Google blog, 22 Apr 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/).
- Counter-evidence from his own company: as of Aug 2026 Claude "leads" 26% of Anthropic's AI R&D work and is fully autonomous in none of the measured subsets — [Anthropic, measuring pace](https://www.anthropic.com/institute/measuring-pace-of-ai-development) (OPENED-PRIMARY; note this measures AI R&D, not all software engineering).
- Counter-evidence on jobs: Anthropic's headcount went from about 940 (end 2024) to about 5,300 (late Sep 2026) — [News18 on S-1](https://www.news18.com/tech/anthropic-says-claude-wrote-more-than-90-of-its-code-in-september-as-engineers-shift-roles-ws-l-10401400.html). Evidence for his worry: junior share of technical staff fell 21% to 14%, and junior share of technical hires 27% to 9% — [Anthropic, How employment is changing at Anthropic, 16 Oct 2026](https://www.anthropic.com/research/employment-at-anthropic) (OPENED-PRIMARY extract).

#### A2. Boris Cherny
- Role then/now: creator and head of Claude Code, Anthropic; described in Nov 2026 as head of applications — [Quartz](https://qz.com/boris-cherny-software-engineering-jobs-disappearing-anthropic-111526) (SNIPPET-ONLY for the title). Stake: runs the product; Anthropic IPO pending.
- A2a. 19 Feb 2026, Lenny's Podcast. Cold open: coding is largely solved; in a year or two learning to code will not matter; by year-end the title "software engineer" starts to go away, replaced by "builder". The full passages are softer: solved "at least for the kinds of programming that I do" (approx. 18:16); today you still must understand the layer under (approx. 32:27); the title fades only in some places (approx. 43:06); he still reads code and wants human review (approx. 16:59). Primary: [video](https://www.youtube.com/watch?v=We7BZVKbCVw). Backup: [timestamped transcript](https://ulisten.ai/channels/lennys-podcast/head-of-claude-code-what-happens-after-coding-is-solved-bori_We7BZVKbCVw/transcript). Tag: OPENED-PRIMARY.
- A2b. 26 May 2026, Platformer interview with Casey Newton. He says the critique is right and the line gets taken out of context: coding is solved for his simple, new codebases, not for big enterprise ones (he names NASA as a customer). Coding is a small part of engineering. He predicts "100 times more engineers" if people directing agents are counted. Primary: [Platformer](https://www.platformer.news/boris-cherny-interview-ai-jobs/). Tag: OPENED-PRIMARY.
- A2c. 15 Nov 2026, CNN profile: for engineers the change will be "disruptive", said in an interview earlier in 2026. Primary: [CNN](https://www.cnn.com/2026/11/15/tech/anthropic-claude-code-boris-cherny). Backup: [Quartz headline makes clear the remark dates from March](https://qz.com/boris-cherny-software-engineering-jobs-disappearing-anthropic-111526). Tag: OPENED-PRIMARY for the top of the article only; SNIPPET-ONLY for the "jobs start disappearing this year" wording.
- How it aged: due 31 Dec 2026. Strong version is failing: 8,186 ads titled software engineer (or SWE/SDE/developer) were open at 574 of 878 tracked companies on 17 Nov 2026 — [Hiring Tempo](https://www.hiringtempo.com/articles/software-engineer-jobs). Hedged version has some support: Meta reorganised about 1,000 Reality Labs staff into titles such as AI Builder — [Times of India on leaked memo, 29 Mar 2026](https://timesofindia.indiatimes.com/technology/tech-news/amid-layoffs-mark-zuckerbergs-meta-is-asking-engineers-to-use-ai-for/articleshow/129876653.cms). Inside Anthropic the ratio of engineers to product managers is about 17 to 1 and has risen since 2025 — [Anthropic employment study](https://www.anthropic.com/research/employment-at-anthropic).

#### A3. Mark Zuckerberg
- Role: CEO of Meta. Stake: Llama/Muse models, capex guidance of $135-145bn for 2026 — [GadgetsNow on Meta Q3 release](https://gadgetsnow.indiatimes.com/tech-news/zuckerberg-admitted-metas-ai-agents-were-lagging-then-came-muse/articleshow/135607111.cms).
- A3a. 10 Jan 2025, Joe Rogan Experience 2255, approx. 2:08:00. Claim: probably in 2025, Meta and others will have an AI that is effectively a "sort of mid-level engineer" that writes code. Hedges right after: expensive to run at first; over time a lot of code is built by AI engineers; he thinks it will augment people and make them more creative. Primary: [official video at 2:08:00](https://www.youtube.com/watch?v=7k1ehaE0bdU&t=7680s). Backup: [machine transcript, checked passage](https://realalpha.app/v/7k1ehaE0bdU/?t=7680). Tag: OPENED-SECONDARY (machine transcript read, video not played).
- A3b. 29 Apr 2025, Dwarkesh Podcast (section begins 11:34). Claim: he would guess that in 12 to 18 months most of the code "going toward these efforts" (Meta's own AI research and Llama agents, not all of Meta) is written by AI, beyond autocomplete. Primary: [Dwarkesh](https://www.dwarkesh.com/p/mark-zuckerberg-2). Backup: [Engadget, which reads it as a slipped timeline](https://www.engadget.com/ai/mark-zuckerberg-predicts-ai-will-write-most-of-metas-code-within-12-to-18-months-213851646.html). Tag: OPENED-PRIMARY.
- A3c. 29 Apr 2025, LlamaCon with Nadella: maybe half of Llama development done by AI within a year; every engineer ends up more like a tech lead with an army of agents. Primary: [LlamaCon closing session](https://www.youtube.com/watch?v=FZ-RZ0dKO8o). Tag: OPENED-PRIMARY.
- How it aged: the best natural experiment of 2026. Jan 2026: output per engineer up 30% since early 2025, power users up 80% — [Meta Q4 2025 call remarks](http://svdaily.com/2026/02/05/mark-zuckerberg-conference-call-remarks/). May 2026: about 10% of staff (about 8,000) cut and 7,000 reassigned; a second wave cancelled; planning scenarios had gone up to 60% for some teams. Internal code changes up 220%, but user-facing feature changes only 36%, major incidents up 40%, time spent firefighting up 70%. July 2026 town hall: agent progress had not accelerated as expected, though he expected gains in three to six months — [TNW on Reuters investigation, 31 Aug 2026](https://thenextweb.com/news/meta-project-ot-ai-native-layoffs-cancelled) (OPENED-SECONDARY); [Reuters exclusive 2 Jul 2026](https://www.reuters.com/business/zuckerberg-says-ai-agent-development-going-slower-than-expected-2026-07-02/) and [Reuters investigation 26 Aug 2026](https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/) (both SNIPPET-ONLY). In fairness: Muse models and agent shipped Oct 2026 — [GadgetsNow](https://gadgetsnow.indiatimes.com/tech-news/zuckerberg-admitted-metas-ai-agents-were-lagging-then-came-muse/articleshow/135607111.cms).

#### A4. Mustafa Suleyman
- Role: CEO of Microsoft AI. Stake: Copilot and Microsoft's own models.
- 12 Feb 2026, Financial Times video interview with Roula Khalaf. Claim: human-level performance on most professional tasks; most white-collar computer tasks "fully automated" by AI within 12 to 18 months; software engineering is his proof, where engineers have moved to debugging, scrutinising and architecting. Earlier in the same interview: models already code better than the vast majority of human coders. Primary: [FT video and transcript](https://www.ft.com/video/2c428045-bf4f-45bd-ada2-8ba53983cd81). Backup: [FT short](https://www.youtube.com/watch?v=7pX-oQ8LDDU). Tag: OPENED-PRIMARY.
- Walk-back, 8 Jun 2026, Decoder: insists he said tasks, not jobs, and that roles need not go away. The host pushes back that the sentence said tasks would be "fully automated". Primary: [Decoder clip](https://www.youtube.com/watch?v=AxNKpuztaNo). Backup: [The Verge, 9 Jun 2026](https://www.theverge.com/tech/946879/microsoft-mustafa-suleyman-ai-white-collar-jobs). Tag: OPENED-PRIMARY. [Business Insider](https://www.businessinsider.com/ai-job-impact-losses-shifting-sam-altman-mustafa-suleyman-comments-2026-6) reports that he says he has not changed his view.
- How it aged: due Feb to Aug 2027. Open.

#### A5. Elon Musk
- Role: CEO of Tesla and SpaceX, founder of xAI. Stake: Grok Code; he was recruiting coders in the same meeting.
- 10 Feb 2026, xAI all-hands, video posted 11 Feb. Claim: maybe even by the end of 2026 you "don't even bother doing coding" because AI emits the binary directly, more efficient than any compiler's; he expected Grok Code to be state of the art in two to three months. Hedges: "maybe", "probably". Primary: [xAI video on X](https://x.com/xai/status/2021667200885829667). Backup: [full transcript, Musk at 11:22](https://ceointerviews.ai/interview/928430/). Tag: OPENED-SECONDARY.
- How it aged: due 31 Dec 2026, five weeks out. A Sept 2026 technical review finds prompt-to-binary unshipped and mostly not worth doing, since compilers are deterministic and cheap; AI reading binaries is real — [Kevin Cornwell, 21 Sep 2026](https://kevincornwell.com/blog/straight-to-binary-llms-machine-code/) (individual engineer's blog). His own team in the same video said generated code still needs review.

#### A6. Eric Schmidt
- Role: former Google CEO; chair of SCSP (a policy think tank); investor. Stake: AI and defence-tech investments (not itemised in sources read).
- April 2025, SCSP AI+ Biotechnology Summit; video posted 10 Apr 2025, quote starts 10:23. Claim, framed as industry consensus rather than a personal forecast: within one year the "vast majority of programmers will be replaced by AI programmers". Hedges in the same talk: he labels it the San Francisco consensus, and says history shows automation creating more jobs than it destroys. Primary: [SCSP video](https://www.youtube.com/watch?v=L5jhEYofpaQ&t=623s). Backup: [Quote Investigator with timestamp](https://quoteinvestigator.com/2025/04/24/program-extinct/). Tag: OPENED-PRIMARY.
- How it aged: due Apr 2026, clearly missed on jobs. US software developer postings were up 23.4% year on year in mid-Nov 2026 (still 18% below Feb 2020) — [Indeed Hiring Lab, 24 Nov 2026](https://hiringlab.indeed.com/2026/11/24/us-labor-market-snapshot-november-2026/).

#### A7. Matt Garman
- Role: AWS CEO (new in the job at the time). Stake: AWS sells AI services and compute.
- June 2024, internal fireside chat leaked to Business Insider, published 20 Aug 2024. Claim: in 24 months, or over some period he could not exactly predict, it is possible that "most developers are not coding"; the real skill is knowing what to build. Primary audio is not public. Report: [Business Insider](https://www.businessinsider.com/aws-ceo-developers-stop-coding-ai-takes-over-2024-8). Tag: OPENED-SECONDARY.
- How it aged: the only CEO found who was asked on the due date and graded himself. 23 Jun 2026: they are close but "probably didn't exactly hit it", directionally right; still very far from telling an AI to go write S3; Amazon is hiring 11,000 interns and new grads. Primary: [Platformer interview](https://www.platformer.news/matt-garman-aws-ceo-interview-ai-jobs/). Tag: OPENED-PRIMARY. Also calls replacing juniors with AI one of the dumbest ideas he has heard — [WIRED, 16 Dec 2025](https://www.wired.com/story/the-big-interview-podcast-matt-garman-ceo-aws/).

#### A8. Marc Benioff
- Role: CEO of Salesforce. Stake: sells Agentforce "digital labor", and says openly that he uses his own company as the showcase.
- 9 Dec 2024, 20VC (0:00 and approx. 12:22). Claim: no additional software engineers in 2025 because AI raised engineering productivity by more than 30%; fewer support staff, 1,000 to 2,000 more salespeople. Softer weeks later on the Logan Bartlett Show: they were debating it and maybe would not hire anyone. Primary: [20VC video](https://www.youtube.com/watch?v=Xgsxi7IGMEU). Backup: [transcript](https://ulisten.ai/channels/20vc/marc-benioff-salesforce-founder-why-salesforce-isnt-hiring-s_Xgsxi7IGMEU/transcript), [IT Pro, 23 Jan 2025](https://www.itpro.com/software/development/maybe-we-arent-going-to-hire-anybody-this-year-marc-benioff-says-salesforce-might-not-hire-any-software-engineers-in-2025-as-the-firm-reaps-the-benefits-of-ai-agents). Tag: OPENED-SECONDARY.
- How it aged: mostly kept, as "flat" rather than zero hiring. May 2026 earnings call: about 15,000 engineers, mostly flat for about two years, not hiring more — [Fortune, 28 May 2026](https://fortune.com/2026/05/28/ai-slashes-white-collar-jobs-salesforce-ceo-marc-benioff-one-department-still-hiring-sales/). Yet in Apr 2026 he announced 1,000 new grads and interns — [Fortune, 27 Apr 2026](https://fortune.com/2026/04/27/salesforce-ceo-marc-benioff-hiring-1000-new-grads-ai-jobs/). Source conflict: in Dec 2024 he put the number at about 13,000 software engineers — [Fortune interview](https://finance.yahoo.com/news/agentic-ai-labor-model-productivity-204639853.html) — against about 15,000 in 2026. Definitions may differ; do not present "flat" as audited.

#### A9. Amjad Masad
- Role: founder and CEO of Replit, a former learn-to-code platform now selling an AI app builder. Stake: direct.
- A9a. 27 Mar 2025, X. Claim: he no longer thinks you should learn to code. The attached video is conditional: if Amodei's all-code-by-AI path holds, learning to code would be a waste of time; people should learn to think, break down problems and communicate. Follow-up the same day: obvious domain exceptions exist. Primary: X post (permalink not verified). Backup: [Replit newsletter reproducing both posts](https://replit-builders.beehiiv.com/p/i-no-longer-think-you-should-learn-to-code), [NDTV with video wording](https://www.ndtv.com/feature/replit-ceo-explains-why-learning-to-code-is-pointless-in-ai-era-instead-learn-how-to-8039962). Tag: OPENED-SECONDARY.
- A9b. 29 Oct 2026, LinkedIn. Claim: doubles down; eighteen months on, engineers who attacked him no longer write or read code, and AI is better than humans at coding. Primary: [LinkedIn](https://www.linkedin.com/posts/amjadmasad_in-2025-i-got-canceled-for-saying-you-shouldnt-activity-7521641412849836033-6r--). Tag: OPENED-PRIMARY.
- How it aged: on daily practice he has support (A15, B2e). On advice it is contested: Andrew Ng (C1) calls this the worst career advice; Replit itself was hiring engineers when he said it — [clientserver.dev, 7 Apr 2025](https://www.clientserver.dev/p/you-should-obviously-still-learn). No date attached, so it cannot be scored.

#### A10. Steve Yegge
- Role then/now: published the 2024 post on the blog of Sourcegraph, an AI coding vendor (current employment not checked); co-author of Vibe Coding, creator of Gas Town, Gas City and Wheelhouse. Stake: book and orchestrator projects.
- A10a. 24 Jun 2024, The Death of the Junior Developer (self-labelled as somewhat speculative). Claim: within a few years, possibly 12-18 months, nearly all source code is written and modified by prompting; it was a bad year to be a junior. Primary: [Sourcegraph](https://sourcegraph.com/blog/the-death-of-the-junior-developer). Tag: OPENED-PRIMARY.
- A10b. 22 Mar 2025, Revenge of the Junior Developer. Claim: agent clusters by Q3 2025, agent "fleets" by early 2026 at the latest; software jobs remain, but not hand-coding; juniors adapt faster and are cheaper. Primary: [yegge.ai](https://yegge.ai/essays/revenge-of-the-junior-developer/). Tag: OPENED-PRIMARY.
- A10c. 10 Feb 2026, Pragmatic Engineer. Claim: big companies will turn a dial and lose around half their engineers to pay for tokens for the rest. In the same interview: AI is "augmentation", not a replacement, and it will be quite some time before firms trust code deployed with no human. Primary: [Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the). Backup: [podcast, 11 Mar 2026, where he says most devs should avoid Gas Town](https://newsletter.pragmaticengineer.com/p/from-ides-to-ai-agents-with-steve). Tag: OPENED-PRIMARY.
- A10d. Aug 2026, The Shape of Things to Come: says he runs a large fleet of agents and that his 2025 forecast is on schedule. Primary: [yegge.ai](https://yegge.ai/essays/the-shape-of-things-to-come/). Tag: OPENED-PRIMARY.
- How it aged: best forecaster on tool shape (Gas Town [1 Jan 2026](https://yegge.ai/essays/welcome-to-gas-town/) is on time, although self-graded and frontier-only). The junior warning has the best outside support: employment of 22-25 year-olds in AI-exposed occupations is 19% below the counterfactual — [Stanford, Aug 2026](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf). The 12-18 month "all code" possibility (by Dec 2025) was not met at Google (50% in autumn 2025). The 50% layoff dial is undated and not observed so far; Meta's actual cut was about 10%.

#### A11. Matt Shumer
- Role: founder and CEO of OthersideAI (HyperWrite), AI investor. Stake: he says he spent six years building and investing in AI; the essay's site now also sells a Pro tier and ads (observed on page).
- 9 Feb 2026, essay Something Big Is Happening. Claim: "no longer needed for the actual technical work" of his job; describes a goal, leaves for hours, returns to finished software needing no corrections; other knowledge work follows in one to five years. Hedge: these are examples; physical and regulated work differ. Primary: [somethingbig.ai](https://somethingbig.ai/something-big-is-happening). Backup: [LinkedIn version](https://www.linkedin.com/pulse/something-big-happening-matt-shumer-so5he). Tag: OPENED-PRIMARY.
- Walk-back of tone, 13 Feb 2026: said it was not meant to scare people and he would rewrite parts; kept the core message — [CNBC](https://www.cnbc.com/2026/02/13/investor-matt-shumer-says-viral-essay-wasnt-meant-to-scare-people.html).
- How it aged: criticised at once for anecdote over data, and for leaving out that METR time horizons are 50% success — [Gary Marcus](https://garymarcus.substack.com/p/about-that-matt-shumer-post-that). Marcus concedes something real changed in recent systems. Later evidence on both sides: over half of successful 4-8 hour agent tasks inside OpenAI still needed one or more human interventions — [OpenAI, 6 Sep 2026](https://openai.com/index/research-acceleration-view-inside-openai/).

#### A12. Sam Altman (moved from A toward the middle)
- Role: CEO of OpenAI. Stake: Codex; OpenAI preparing for an IPO — [WIRED, 17 Apr 2026](https://www.wired.com/story/openai-executive-kevin-weil-is-leaving-the-company/).
- A12a. 26-27 Jan 2026, OpenAI Town Hall (opening and approx. 48:24). Claim: being an engineer will change enormously and less time goes to typing code; probably far more people will get computers to do things. OpenAI will keep hiring software developers but dramatically slow its growth. Primary: OpenAI YouTube (ID Wpxv-8nG8ec per transcript host). Backup: [timestamped transcript](https://www.youtubetranscript.dev/charts/every-sam-altman-interview/Wpxv-8nG8ec/openai-town-hall-with-sam-altman). Tag: OPENED-SECONDARY.
- A12b. 17 Mar 2026, X: gratitude to people who wrote complex software "character-by-character". Widely read as an obituary; he did not say engineers are finished. Primary: [X post](https://twitter.com/sama/status/2033935276079510011). Backup: [TechCrunch](https://techcrunch.com/2026/03/18/sam-altmans-thank-you-to-coders-draws-the-memes/). Tag: OPENED-SECONDARY.
- A12c. 21 Oct 2026, Forward Future (Matthew Berman), 03:46-04:28. Claim: the story went from no more coder jobs to coders never being busier or better paid; people were certain of the opposite 6-12 months ago; the world wanted far more software than expected. Also says he has not looked at a line of code in about a year (10:14). Primary: Matthew Berman YouTube. Backup: [timestamped transcript](https://exa.ai/library/podcast/ntjhrb5tglf/episode/qxyrzxwyvdv), [India Today](https://www.indiatoday.in/technology/news/story/sam-altman-dismisses-ai-job-loss-fears-says-coding-will-actually-make-you-busier-3023242-2026-10-23). Tag: OPENED-SECONDARY.
- How it aged: the clearest public softening by a lab CEO in the second half of 2026.

#### A13. Kevin Weil
- Role then/now: OpenAI CPO in Mar 2025; left OpenAI 17 Apr 2026 — [WIRED](https://www.wired.com/story/openai-executive-kevin-weil-is-leaving-the-company/). Stake then: OpenAI executive.
- 15 Mar 2025, Overpowered (Varun Mayya, Tanmay Bhat). Claim: asked about 99% code automation in 2027, he would be surprised if it took that long; 2025 is the year AI becomes better than humans at competitive coding "forever". Hedges: first tied to the competitive-coding benchmark (then restated more loosely as programming); a great engineer plus AI still beats an average one plus AI; knowing what to build matters. Also a Camp B claim: everyone can create software. Primary: [video](https://www.youtube.com/watch?v=SnSoMh9m5hc). Backup: [Business Today](https://www.businesstoday.in/technology/news/story/not-2027-coding-will-be-automated-as-early-as-openai-cpo-kevin-weil-says-ai-to-soon-surpass-human-coders-forever-468072-2025-03-16). Tag: OPENED-PRIMARY.
- How it aged: the narrow claim came true. ICPC World Finals, Sep 2025: OpenAI solved 12 of 12; best human team 11 — [Simon Willison](https://simonwillison.net/2025/Sep/17/icpc/), [TechRepublic](https://www.techrepublic.com/article/openai-deepmind-icpc-2025-results/). The broad headline (programmers doomed by end of 2025) was never his claim and did not happen.

#### A14. Ryan Dahl
- Role: creator of Node.js and Deno. Stake: lower than lab CEOs (a runtime company), and reputationally against his own identity.
- 19-20 Jan 2026 (time zones differ), X. Claim: the "era of humans writing code is over"; disturbing for those who identify as SWEs; SWEs still have work, but writing syntax is not it. Primary: [X post](https://x.com/rough__sea/status/2013280952370573666). Backup: [OfficeChai](https://officechai.com/ai/era-of-humans-writing-code-is-over-node-js-creator-ryan-dahl/), [PodRocket notes carrying the link](https://podrocket.logrocket.com/tailwind-layoffs-cloudflare-buys-astro-ai-reshaping-dev-tooling). Tag: OPENED-SECONDARY.
- How it aged: no date to score. Usually quoted without its last sentence.

#### A15. Bart Butler and Andy Yen, Proton (the loudest new case, Oct-Nov 2026)
- Role: CTO and CEO of Proton (privacy email/VPN). Stake: not an AI vendor for coding, which makes it interesting; a competitive-survival motive is stated.
- 1 Nov 2026, Proton blog, internal memo published in full. Claim: manual code writing is a core skill whose time has passed; "Programming" is dead, but engineering and expertise are not. It admits productivity has not risen dramatically despite heavy LLM use, because culture, process and investment lag; most human code review will end. Primary: [Proton](https://proton.me/blog/ai-manifesto). Tag: OPENED-PRIMARY.
- Yen, internal messages reported by 404 Media, 29 Oct 2026: last year Proton hires engineers; dismissed a security-minded request for time in insulting terms. Report: [404 Media](https://www.404media.co/manifestos-fear-and-loser-thinking-inside-protons-ai-reckoning/) (SNIPPET-ONLY); [36Kr/CSDN summary](https://eu.36kr.com/en/p/4054661841523593) (OPENED-SECONDARY).
- Walk-back: re-interviews cancelled 30 Oct, apology, no AI-related job losses promised; Proton disputes the tracking-software claim — [TechRadar, 2 Nov 2026](https://www.techradar.com/vpn/vpn-services/proton-apologizes-to-community-after-internal-memo-shows-force-behind-proposed-ai-use-in-building-its-privacy-products).

#### A16. Matt Welsh (HISTORICAL, intellectual source of the camp)
- Role then/now: former Harvard professor; in May 2025 director of AI Systems at Palantir. Stake: works in AI (details at time of writing not checked).
- 1 Jan 2023, CACM opinion The End of Programming. Claim: writing programs heads for extinction for all but specialised uses; systems will be trained rather than programmed; humans at best supervise. Horizon in the text: he would be amazed if CS were still taught this way in 30, or even 10, years. Primary: [CACM](https://cacm.acm.org/opinion/the-end-of-programming/). Tag: OPENED-PRIMARY, HISTORICAL.
- In window, 6 May 2025: says people who see vibe coding as translating English to code miss the point; future systems will not be programmed at all — [CACM News](https://cacm.acm.org/news/catching-the-vibe-of-vibe-coding/) (OPENED-SECONDARY).
- How it aged: not due. Twist: agents in 2026 produce more conventional code than ever, not models replacing programs, so the mechanism he predicted has not (yet) dominated.

#### A17. Emad Mostaque (HISTORICAL)
- Role then: CEO of Stability AI (current role not checked here). Stake: AI vendor.
- 31 Mar 2023 Goldman Sachs symposium, repeated mid-2023 on Peter Diamandis's podcast. Claim: "no programmers in five years"; later clarified as traditional coders. Primary-ish: [Goldman Sachs event write-up](https://www.goldmansachs.com/insights/articles/stability-ai-ceo-says-ai-will-prove-more-disruptive-than-the-pandemic). Backup: [Decrypt, 3 Jul 2023](https://decrypt.co/147191/no-human-programmers-five-years-ai-stability-ceo), [Fox Business on the clarification](https://www.foxbusiness.com/technology/ai-replace-outsourced-coders-india-two-years-stability-ai-ceo). Tag: OPENED-SECONDARY, HISTORICAL.
- How it aged: due 2028. Over three years in, BLS counts about 1.7 million US software developers and projects growth (Q4 below).

#### Also loud in Nov 2026
- Sridhar Vembu (Zoho), X post reported 23 Nov 2026: coders and mathematicians face what farmers and weavers faced under mechanisation — [India Today](https://www.indiatoday.in/technology/news/story/sridhar-vembu-ai-maths-coding-humans-scripture-future-work-3044756-2026-11-23). Tag: SNIPPET-ONLY.

### Inferences
- The camp has three different claims that audiences hear as one: (1) hand-typing is ending; (2) the engineer's tasks will be automated end to end; (3) jobs vanish. Support in Nov 2026: strong for 1, partial for 2, weak overall for 3 but real for entry level.
- Stake gradient: people selling coding agents (Amodei, Cherny, Weil, Masad, Musk, Suleyman) made the boldest dated claims. People with less to sell (Dahl, Butler) made claims limited to typing code.
- 2026 pattern: boldest phase Jan-Mar 2026, then softening by Cherny (May), Suleyman (Jun), Garman (Jun), Zuckerberg (Jul), Altman (Oct). Masad and Proton hardened in Oct-Nov.

### Gaps
- Official video for Altman's Oct 2026 interview and Town Hall not opened directly; permalinks need a manual check.
- Schmidt's 2026 position: only a blog mentions a Mar 2026 Harvard talk. Not verified.
- No public, audited measure of what share of Meta's AI-research code is AI-written.

---

## Q2. Camp B: who says English (or any human language) is the new programming language?

### Takeaway
The slogan has two fathers, Karpathy (2023) and Huang (2024-25). Both added large qualifications: Karpathy split vibe coding (raises the floor) from agentic engineering (keeps the professional bar), and Huang now campaigns against the idea that engineers are finished. The "everyone can build" half has strong adoption evidence; the "so you need no engineering" half does not.

### Cited Findings

#### B1. Jensen Huang
- Role: founder and CEO of NVIDIA. Stake: sells the compute that both stories need; benefits if a billion people "program".
- B1a. 12 Feb 2024, World Governments Summit, Dubai, approx. 18:30. Asked what people should learn: 10-15 years of advice said every child must learn to code; he says almost the opposite. The job of his industry is to create computing such that "nobody has to program", the language is human, and everyone is now a programmer. Cut from most clips: domain expertise becomes the advantage, and it is vital to upskill everyone. He did not say software engineers are finished, and gave no date. Primary: [World Governments Summit video](https://www.youtube.com/watch?v=8Pm2xEViNIo&t=1110s). Backup: [NVIDIA blog](https://blogs.nvidia.com/blog/world-governments-summit/), [timestamped transcript](https://fireflies.ai/blog/nvidia-ceo-jensen-huang-on-the-future-of-ai). Tag: OPENED-PRIMARY.
- B1b. 9 Jun 2025, London Tech Week with Keir Starmer. Claim: AI is the great equaliser; the new programming language "is called human"; you ask nicely; almost anybody can do it. Example given: a poem, not production software. Primary: [Bloomberg video](https://www.youtube.com/watch?v=SsNS3Xm9ig4). Backup: [CNBC](https://www.cnbc.com/2025/06/09/we-train-ai-like-humans-now-nvidia-jensen-huang-says-.html). Tag: OPENED-PRIMARY.
- B1c. 24 Mar 2026, Lex Fridman clip: the number of software engineers at NVIDIA will grow; coding now means specification, so coders go from 30 million to perhaps 1 billion. Primary: [video](https://www.youtube.com/watch?v=N_wq9OV4T4c). Tag: OPENED-PRIMARY.
- B1d. May 2026, Milken Institute, 33:53-36:04: the purpose of a software engineer is solving problems, coding is a task; hiring more than ever; admits dislocation. Primary: [Milken transcript PDF](https://milkeninstitute.org/sites/default/files/2026-05/LeadingAgeAIAConversationNVIDIACEOJensenHuang_Transcript_GC26.pdf). Tag: OPENED-PRIMARY.
- B1e. 23 Sep 2026, Ezra Klein Show, approx. 05:55 and 19:50: the inference from 90% agent-written code to no engineers is "completely false"; on juniors, wait two years. Primary: [video](https://www.youtube.com/watch?v=HjurAWAr_nY), [NYT official transcript](https://www.nytimes.com/2026/09/23/opinion/ezra-klein-podcast-jensen-huang.html). Backup: [The New Stack](https://thenewstack.io/huang-ai-agents-engineers/). Tag: OPENED-PRIMARY.
- How it aged: the 2024 line is aspirational and undated. His 2026 evidence (postings rising) is correct but senior-skewed: 71% of the increase in software postings came from senior roles — [Indeed, 18 Nov 2026](https://hiringlab.indeed.com/2026/11/18/there-is-no-ai-jobpocalypse/). His "wait two years" for juniors falls due about Sep 2028.

#### B2. Andrej Karpathy (the most useful arc for an audience)
- Role then/now: ex-OpenAI, ex-Tesla, Eureka Labs founder; joined Anthropic pre-training on 19 May 2026 — [TechCrunch](https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/). Stake: independent educator until May 2026; since then an Anthropic employee praising an Anthropic product.
- B2a. HISTORICAL, 24 Jan 2023, X: the hottest new programming language is English. Primary: [X post](https://twitter.com/karpathy/status/1617979122625712128). Backup: [Quote Investigator](https://quoteinvestigator.com/2024/10/20/hottest-program/). Tag: OPENED-SECONDARY.
- B2b. 2 Feb 2025, X: coins vibe coding; accepts all diffs, does not read them. Limit stated in the same tweet: fine for "throwaway weekend projects". Primary: [X post](https://twitter.com/karpathy/status/1886192184808149383). Backup: [Simon Willison, full text and what it is not](https://simonwillison.net/2025/Mar/19/vibe-coding/). Tag: OPENED-SECONDARY.
- B2c. 17 Jun 2025, YC AI Startup School, Software Is Changing (Again). Claim: prompts are programs, in English; suddenly "everyone is a programmer" (approx. 29:06). Same talk: be fluent in 1.0, 2.0 and 3.0; keep AI on a leash; humans verify and are the bottleneck; prefer partial autonomy (approx. 18:22 onward). Primary: [YC video](https://www.youtube.com/watch?v=LCEmiRjPEtQ). Backup: [transcript](https://ulisten.ai/channels/y-combinator/andrej-karpathy-software-is-changing-again_LCEmiRjPEtQ/transcript). Tag: OPENED-SECONDARY (third-party transcript of the official video).
- B2d. 17 Oct 2025, Dwarkesh Podcast, AGI is still a decade away. Claim: coding agents were little help on nanochat (approx. 31:49), over-defensive and bloated (approx. 32:28); autocomplete is his sweet spot; the industry makes too big a jump and the output is "slop" (approx. 36:53). Primary: [Dwarkesh](https://www.dwarkesh.com/p/andrej-karpathy). Tag: OPENED-PRIMARY (first 100,000 characters read).
- B2e. 26 Dec 2025, X: never felt this much behind as a programmer; the profession is being dramatically refactored. Backup: [Business Insider with embed](https://www.businessinsider.com/openai-founding-member-never-felt-so-behind-programmer-2025-12). Tag: OPENED-SECONDARY; permalink not verified.
- B2f. 4 Feb 2026, X anniversary post: vibe coding was for an era of weak models; professionals now orchestrate agents 99% of the time with oversight; he prefers "agentic engineering". Backup: [SnowDriven, 12 Nov 2026](https://snowdriven.com/blog/a-year-of-vibe-coding/), [Business Insider](https://www.businessinsider.com/agentic-engineering-andrej-karpathy-vibe-coding-2026-2). Tag: OPENED-SECONDARY; permalink not verified.
- B2g. 29 Apr 2026, Sequoia AI Ascent. Claim: December 2025 was a stark transition; vibe coding "raises the floor", agentic engineering preserves the professional bar and you stay responsible (15:57); agents are like interns, humans own spec, taste and oversight, with a worked example of an agent matching payments by email address (19:35). Primary: [Sequoia video](https://www.youtube.com/watch?v=96jN2OCOfLs). Backup: [transcript](https://ulisten.ai/channels/sequoia-capital/andrej-karpathy-from-vibe-coding-to-agentic-engineering-w-st_96jN2OCOfLs/transcript). Tag: OPENED-PRIMARY.
- B2h. 31 Oct 2026, HackerTube blog. Claim: he does nothing resembling traditional engineering; he "only" talks to Claude; a site in about two hours. Human work left: API key, server, domain. Primary: [karpathy.bearblog.dev](https://karpathy.bearblog.dev/hacker-tube/). Tag: OPENED-PRIMARY. A third-party write-up says he called the code a vibe coded mess and trusts this only to the newest model — [Bryce Watson notes](https://brycewatson.com/research/karpathy-ai-habits/) (OPENED-SECONDARY). It is a hobby site, which matters.
- How it aged: he reversed twice within 13 months, in public, on evidence: cautious in Oct 2025, converted by Dec 2025, qualified in Apr 2026. "English" is now literally his interface, but he is among the best-trained programmers alive, so he does not prove that a non-programmer gets the same result.

#### B3. Satya Nadella
- Role: CEO of Microsoft. Stake: GitHub Copilot, Azure, OpenAI shareholding.
- 1 Mar 2026, OMR Podcast, approx. 13:23-15:05. Claim: AI lowers the floor so "anyone can be a software developer", as Excel did for analysts, and also raises the ceiling: people must reskill so generated codebases are not black boxes. Displacement is possible. Primary: [OMR video](https://www.youtube.com/watch?v=NANwT123E3U). Backup: [OMR transcript](https://omr.podigee.io/959-neue-episode), [IT Pro](https://www.itpro.com/software/development/satya-nadella-ai-software-development-skills). Tag: OPENED-PRIMARY.
- 29 Apr 2025, LlamaCon: maybe 20-30% of code in Microsoft repos "and some of our projects" is written by software; strong in Python and greenfield, weaker in C++. Primary: [video](https://www.youtube.com/watch?v=FZ-RZ0dKO8o). Backup: [CNBC](https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html). Tag: OPENED-PRIMARY.
- 3-4 Jun 2026, No Priors x Latent Space: generalists gain most leverage; LinkedIn created a full stack builder discipline; specialists remain. Primary: [Latent Space transcript](https://latent.space/p/satya-2026/). Tag: OPENED-PRIMARY.
- How it aged: the most balanced phrasing in Camp B; no dated claim to fail. Good "fair statement" slide.

#### B4. Guillermo Rauch
- Role: CEO of Vercel (Next.js, v0). Stake: more builders means more deployments.
- 17 Nov 2026, TomorrowX Summit (0:59-3:53). Claim: coding agents do all of the programming now, so anyone with an idea can build; a billion deployments took ten years, now 1.2 billion every four months. Primary video not located. Backup: [transcript](https://ceointerviews.ai/interview/3320183/). Tag: OPENED-SECONDARY.
- 2026, Shopify DotDev fireside with Tobi Lutke (exact date not shown): addressable creators go from 10-15 million JavaScript developers to hundreds of millions or billions using natural language. Primary: [video](https://www.youtube.com/watch?v=9rVN5ChMguc). Tag: OPENED-PRIMARY (undated).
- 13 Apr 2025, Lenny's Podcast (Everyone's an engineer now): mission 5 million to 100 million builders, but he stresses understanding how systems work — [Lenny's Newsletter](https://www.lennysnewsletter.com/p/everyones-an-engineer-now-guillermo-rauch). Tag: OPENED-PRIMARY (show page).
- How it aged: the volume claim is self-reported and counts deployments, not working products.

#### B5. Anton Osika
- Role: co-founder and CEO of Lovable. Stake: direct; built for "the 99%" who cannot code — [TechCrunch, 17 Sep 2025](https://techcrunch.com/2025/09/17/lovable-ceo-anton-osika-on-building-one-of-the-fastest-growing-startups-in-history-at-techcrunch-disrupt-2025/).
- 16 Sep 2026, Dreamforce TIME100 session. Claim: people closest to the problem should build the software; "We're way past vibes". Qualifies it: non-technical users need guardrails, data access is the hard problem, engineers can step in for critical apps. Host cites $200m ARR in under a year, then tripled in nine months. Primary: [video](https://www.youtube.com/watch?v=GFM4CQ0HuKU). Backup: [TNW](https://thenextweb.com/news/lovable-anton-osika-dreamforce-way-past-vibes-security). Tag: OPENED-PRIMARY.
- How it aged: adoption proved demand. The security bill also came: a 2025 scan of 1,645 Lovable-featured apps found about 170 exposing data (CVE-2025-48757) — [Datafloq summary](https://datafloq.com/lovable-how-a-swedish-vibe%E2%80%91coding-side-project-became-a-2-billion-ai-unicorn/) (OPENED-SECONDARY). His 2026 pitch is now mostly about trust, an implicit concession.

#### B6. Thomas Dohmke
- Role then/now: CEO of GitHub (Nov 2021 to Sep 2025); now co-founder and CEO of Entire, a platform for humans and agents, $60m raised — [LinkedIn profile](https://linkedin.com/in/ashtom). One 2026 site wrongly says he is leaving GitHub at the end of 2026; ignore it.
- 3 Aug 2025, blog Developers, Reinvented. The line about embracing AI or getting out of your career was said by one of 22 interviewed developers, not by Dohmke in the blog; but his X post the next day asserted it in his own voice as what the evidence shows. Other content: about half of the interviewed developers expected 90% AI-written code within two years, half within five; fundamentals still needed; developer jobs expected to grow but to be different jobs. Primary: [blog](https://ashtom.github.io/developers-reinvented) (first part read). Backup: [summary with X text and the 90% split](https://www.finalroundai.com/blog/github-ceo-thomas-dohmke-warns-developers-embrace-ai-or-quit). Tag: OPENED-PRIMARY for the authorship point, OPENED-SECONDARY for the rest.
- How it aged: due Aug 2027 to Aug 2030. He also warned that prompts will not be enough and you must understand and debug the code (same backup), so he is closer to the middle than to the slogan.

#### Contrast voices (not camp members)
- C1. Andrew Ng (DeepLearning.AI; stake: sells courses, including coding with AI). 13 Mar 2025, LinkedIn: telling people not to learn to code will be seen as some of the "worst career advice ever given"; easier coding means more people should code — [LinkedIn](https://www.linkedin.com/posts/andrewyng_deepseek-r1-uncensored-qwq-32b-puts-reasoning-activity-7305984835708141570-XVKU) (OPENED-PRIMARY). Repeated 3 Aug 2026 video: don't code by hand, get AI to do it, but learn the language of computers — [Masters of Scale](https://mastersofscale.com/video/ai-pioneer-not-learning-to-code-is-worst-career-advice-ever/) (OPENED-PRIMARY). He and Camp B agree more than it seems: both want everyone building.
- C2. Victor Taelin (HigherOrderCO, Bend language; stake: raising money for an AI-written, proof-checked language). June 2026, X: first delayed a launch because unsupervised GPT 5.5 left a poor codebase, then retracted his retreat to pure manual coding: not using AI is a mistake, and so is using it too aggressively. Primary: [X 15 Jun](https://x.com/VictorTaelin/status/2066560009635340294), [X 21 Jun](https://x.com/VictorTaelin/status/2068746141731336324). Backup: [tweet archive](https://github.com/osolmaz/ai-smell/blob/main/corpus/tweets/VictorTaelin.md). July 2026: says a stronger model one-shot a 26k-line compiler (same archive). Tag: OPENED-SECONDARY. I found no verifiable Taelin claim that engineering is over, so he is listed as an honest oscillator.

### Inferences
- "English is the programming language" is true as an interface claim and misleading as a skills claim. Every speaker who builds real systems adds specification, verification or domain knowledge.
- For a Persian-language audience, Huang's wording ("human", not English) is the more inclusive version. None of the opened sources test whether results in Persian match English. Do not assume it.

### Gaps
- No independent measure found of how many non-programmer apps survive in production.
- Rauch's Nov 2026 primary video not found.

---

## Q3. The strongest version of each camp

### Takeaway
Camp A at its best is an argument about trend and role compression. Camp B at its best is an argument about access. Both survive the failed dates.

### Cited Findings

Camp A, five bullets
1. Code volume flipped within about 18 months: Google 50% (autumn 2025) to 75% (Apr 2026) of new code; Anthropic over 90% of contributions (Sep 2026) — [Pichai](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/), [FRI citing S-1](https://forecastingresearch.org/research/recursive-self-improvement-v1).
2. People without a coding agent to sell independently report no longer typing code: Dahl, Proton's CTO, Taelin in part (A14, A15, C2).
3. The measured frontier moves fast: Claude "leads" 26% of Anthropic AI R&D tasks in Aug 2026, up from under 1% in Feb 2026 — [FRI table](https://forecastingresearch.org/research/recursive-self-improvement-v1). AI beat all human teams at ICPC 2025 — [Willison](https://simonwillison.net/2025/Sep/17/icpc/).
4. The bottom of the ladder is already thinner: the 19% gap for ages 22-25, mainly through reduced hiring — [Stanford Aug 2026](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf); Anthropic junior technical hires 27% to 9% — [Anthropic](https://www.anthropic.com/research/employment-at-anthropic).
5. The early slowdown result no longer describes the tools: METR says its 2025 finding (19% slower) is out of date, and that developers refusing to work without AI now bias its data toward understating speedup — [METR, 24 Feb 2026](https://metr.org/blog/2026-02-24-uplift-update/).

Camp B, five bullets
1. Every abstraction step (assembly, compilers, Excel) widened who can build; natural language is the widest yet (Nadella B3, Ng C1).
2. Non-engineers really are building: at Anthropic, coding-agent sessions by non-technical staff rose from 2 to 90 per month (Aug 2025 to May 2026) — [Anthropic](https://www.anthropic.com/research/employment-at-anthropic) (company data). Lovable and Vercel volumes point the same way (B4, B5; self-reported).
3. The scarce input shifts to domain knowledge and knowing what to ask (Huang B1a; Osika B5).
4. Cheap code raises total demand: postings up 23.4% year on year while all postings are up 5.1% — [Indeed, 24 Nov 2026](https://hiringlab.indeed.com/2026/11/24/us-labor-market-snapshot-november-2026/) (correlation only).
5. The expert version works in English end to end: Karpathy's HackerTube (B2h). It shows a ceiling, not the average.

### Inferences
- Best joint statement: generation is becoming cheap and conversational; specification, verification and responsibility are not. Both camps' best speakers say this themselves (Cherny A2b, Garman A7, Butler A15, Karpathy B2g, Nadella B3).

### Gaps
- Much capability evidence is self-reported by firms with products to sell or IPOs pending.

---

## Q4. Reality check data for scoring

### Takeaway
By Nov 2026: code generation largely automated at leaders, software demand recovering but senior-skewed, juniors worse off, whole-team replacement not demonstrated.

### Cited Findings
- US software development postings: index 82 on 13 Nov 2026 (Feb 2020 = 100), +23.4% year on year; overall index 106.2 — [Indeed Hiring Lab, 24 Nov 2026](https://hiringlab.indeed.com/2026/11/24/us-labor-market-snapshot-november-2026/) OPENED-PRIMARY. Series: [FRED IHLIDXUSTPSOFTDEVE](https://fred.stlouisfed.org/data/IHLIDXUSTPSOFTDEVE).
- 71% of the increase in software postings is senior, 37% mentions AI in the title; little evidence of job loss driven solely by AI — [Indeed/Glassdoor, 18 Nov 2026](https://hiringlab.indeed.com/2026/11/18/there-is-no-ai-jobpocalypse/) OPENED-PRIMARY. Caution: Indeed itself says correlation is not causation, quoted in [llms.blog, 29 Oct 2026](https://www.llms.blog/posts/software-engineer-jobs-ai-indeed-bls-data).
- BLS: about 1.72 million software developers in 2025, +10% projected 2025-35; computer programmers 110,800, -7%, AI cited — [llms.blog quoting BLS](https://www.llms.blog/posts/software-engineer-jobs-ai-indeed-bls-data) OPENED-SECONDARY.
- Stanford/ADP through June 2026: no widespread displacement; young workers in exposed jobs 19% below counterfactual; experienced workers show no comparable gap; descriptive, not causal — [paper](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf), [caveats](https://digitaleconomy.stanford.edu/news/canariesaug26/) OPENED-PRIMARY.
- METR follow-up: original developers about 18% faster (CI 38% faster to 9% slower), new recruits about 4% faster (CI 15% faster to 9% slower); METR calls this weak evidence — [METR](https://metr.org/blog/2026-02-24-uplift-update/) OPENED-PRIMARY.
- Meta volume versus value: internal code changes +220%, user-facing feature changes +36%, major incidents +40% — [TNW](https://thenextweb.com/news/meta-project-ot-ai-native-layoffs-cancelled) OPENED-SECONDARY.
- Anthropic: technical hiring still growing in absolute terms; human attention named as the bottleneck; no difference found in revert rates between agent and human code — [Anthropic](https://www.anthropic.com/research/employment-at-anthropic) OPENED-PRIMARY extract, self-study.

### Inferences
- The data contradict "engineers are gone" and "nothing changed" equally.

### Gaps
- Data are mostly US. Nothing here covers Iran or the Persian-speaking market.

---

## Q5. Closing tables for the host

### Takeaway
Use the arcs (what they said, what they later said) rather than single quotes.

### Cited Findings

#### The 8 voices most worth putting on stage
1. Andrej Karpathy: coined the slogan and vibe coding, doubted agents in Oct 2025, converted in Dec 2025, then drew the line between vibe coding and agentic engineering (B2). Best single clip: [Sequoia, 15:57](https://www.youtube.com/watch?v=96jN2OCOfLs&t=957s).
2. Jensen Huang: the most misquoted line of the decade, plus his own 2026 rebuttal (B1). Pair [Dubai 2024](https://www.youtube.com/watch?v=8Pm2xEViNIo&t=1110s) with [Ezra Klein 2026](https://www.youtube.com/watch?v=HjurAWAr_nY).
3. Dario Amodei: boldest dated forecasts, and the clearest ladder for discussing them (A1). Best clip: [Dwarkesh clip](https://www.youtube.com/watch?v=iGFyksusms0).
4. Boris Cherny: "solved" and his own correction (A2). Pair [Lenny, Feb 2026](https://www.youtube.com/watch?v=We7BZVKbCVw&t=1096s) with [Platformer, May 2026](https://www.platformer.news/boris-cherny-interview-ai-jobs/).
5. Mark Zuckerberg: predicted it, reorganised a company around it, and reported the result (A3).
6. Steve Yegge: best tool forecaster and the sharpest on juniors (A10).
7. Amjad Masad: the unrepentant version, 19 months later (A9).
8. Sam Altman: from thanking coders in Mar 2026 to coders never busier in Oct 2026 (A12).
- Bench: Matt Garman (graded himself on the due date), Bart Butler/Proton (newest, not a coding-AI vendor), Satya Nadella (fairest Camp B sentence), Andrew Ng (contrast).

#### Commonly misquoted
- Huang 2024, "don't learn to code": he said the industry's job is to make programming unnecessary for everyone, then urged upskilling and domain expertise. No date, no statement that engineers vanish (B1a).
- Amodei, "90% of programmers replaced": he spoke of 90% of code lines, with programmers still specifying and judging. But he does expect 90% lower demand eventually, so "he never said it" is also wrong (A1a, A1c).
- Amodei Davos: he hedged three times (might be; most or maybe all; possibly a few years). Headlines turned it into a 12-month replacement (A1b).
- Cherny, "coding is solved": omitted the qualifier that this holds for the kind of programming he does. Fair criticism: the podcast's own cold open and title ran the short version (A2).
- Cherny, Nov 2026 headlines: the remark was made in March 2026 (A2c).
- Karpathy, vibe coding as a professional method: the original tweet limited it to throwaway projects (B2b).
- Schmidt: he reported an industry consensus and added that automation usually creates jobs (A6). It is still fair to note that he said "we believe".
- Weil: the claim was about competitive coding benchmarks (A13).
- Dohmke, "embrace AI or get out": in the blog, words of an interviewed developer. He did adopt it on X (B6).
- Suleyman: he said tasks. But he said "fully automated", so the host's pushback on Decoder is fair (A4).
- Dahl: his last sentence says SWEs still have work (A14).
- Zuckerberg on Dwarkesh: scope was Meta's AI research code, not all Meta code (A3b).
- Garman: he called it possible and said he could not predict the exact time (A7).

#### Scoreboard of dated predictions

| Who | Predicted | Due | What happened by 24 Nov 2026 | Verdict | Source |
|---|---|---|---|---|---|
| Yegge (24 Jun 2024) | nearly all source code via LLM prompting; could see it in 12-18 months | Jun-Dec 2025 | Google at 50% of new code, autumn 2025 | Missed on date, direction right | [post](https://sourcegraph.com/blog/the-death-of-the-junior-developer), [Pichai](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/) |
| Amodei CFR part 1 (10 Mar 2025) | AI writes 90% of code | Jun-Sep 2025 | He says it happened at Anthropic and some customers; Google was at 50% | Narrowly true in his firm (his claim), false industry-wide | [CFR](https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic), [Dwarkesh](https://www.youtube.com/watch?v=n1E9IZfvGMA) |
| Amodei CFR part 2 | may be essentially all code | Mar 2026 | Google 75% in Apr 2026; Anthropic over 90% only in Sep 2026 | Missed (hedged with "may") | [Pichai](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/) |
| Weil (15 Mar 2025) | AI beats humans at competitive coding in 2025 | Dec 2025 | 12/12 at ICPC vs best human 11/12 | Hit (narrow claim) | [Willison](https://simonwillison.net/2025/Sep/17/icpc/) |
| Yegge (22 Mar 2025) | agent clusters by Q3 2025, fleets by early 2026 | early 2026 | Gas Town 1 Jan 2026; he advises most devs to avoid it | Hit for frontier users, not mainstream (partly self-graded) | [post](https://yegge.ai/essays/revenge-of-the-junior-developer/), [podcast](https://newsletter.pragmaticengineer.com/p/from-ides-to-ai-agents-with-steve) |
| Zuckerberg JRE (10 Jan 2025) | AI effectively a mid-level engineer | end 2025 | Jan 2026: +30% output per engineer; Jul 2026: agents slower than expected | Missed as stated | [Meta call](http://svdaily.com/2026/02/05/mark-zuckerberg-conference-call-remarks/), [TNW](https://thenextweb.com/news/meta-project-ot-ai-native-layoffs-cancelled) |
| Zuckerberg LlamaCon (29 Apr 2025) | maybe half of Llama development by AI | Apr 2026 | No public figure found | Unscorable | [video](https://www.youtube.com/watch?v=FZ-RZ0dKO8o) |
| Zuckerberg Dwarkesh (29 Apr 2025) | most code for Meta's AI efforts by AI, better than a very good engineer | Apr-Oct 2026 | One product org's H1 2026 goal: 65% of engineers writing over 75% of code with AI (a target, different org); incidents +40% | Volume plausible but unproven; quality not shown | [TOI on goals](https://timesofindia.indiatimes.com/technology/tech-news/amid-layoffs-mark-zuckerbergs-meta-is-asking-engineers-to-use-ai-for/articleshow/129876653.cms), [TNW](https://thenextweb.com/news/meta-project-ot-ai-native-layoffs-cancelled) |
| Schmidt (Apr 2025) | vast majority of programmers replaced (industry consensus) | Apr 2026 | Postings +23.4% year on year; no widespread displacement | Missed | [Indeed](https://hiringlab.indeed.com/2026/11/24/us-labor-market-snapshot-november-2026/), [Stanford](https://digitaleconomy.stanford.edu/app/uploads/2026/08/Canaries_August2026.pdf) |
| Garman (Jun 2024) | possible that most developers are not coding | Jun 2026 | His own answer: close, probably not exactly hit | Near miss, self-graded | [Platformer](https://www.platformer.news/matt-garman-aws-ceo-interview-ai-jobs/) |
| Benioff (9 Dec 2024) | no added software engineers in 2025 | end 2025 | Headcount described as mostly flat near 15,000; 13,000 cited in Dec 2024; 1,000 grads and interns in 2026 | Broadly kept, numbers unaudited | [Fortune](https://fortune.com/2026/05/28/ai-slashes-white-collar-jobs-salesforce-ceo-marc-benioff-one-department-still-hiring-sales/) |
| Amodei Davos (20 Jan 2026) | model may do most, maybe all of SWE end to end | Jul 2026-Jan 2027 | Early edge passed. Anthropic index Aug 2026: leads 26%, fully autonomous in none (AI R&D) | Open until 20 Jan 2027, not on track by that measure | [WEF](https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/), [Anthropic](https://www.anthropic.com/institute/measuring-pace-of-ai-development) |
| Cherny (19 Feb 2026) | title "software engineer" starts to go away, in some places | 31 Dec 2026 | 8,186 such ads at tracked firms; Meta pods use Builder titles | Open; strong version failing, weak version partly true | [Hiring Tempo](https://www.hiringtempo.com/articles/software-engineer-jobs) |
| Musk (10 Feb 2026) | AI emits binaries, coding not needed | 31 Dec 2026 | Not shipping per a Sept review | Open, very unlikely | [Cornwell](https://kevincornwell.com/blog/straight-to-binary-llms-machine-code/) |
| Suleyman (12 Feb 2026) | most white-collar tasks fully automated | Feb-Aug 2027 | Re-explained as tasks, not jobs, Jun 2026 | Open | [Decoder](https://www.youtube.com/watch?v=AxNKpuztaNo) |
| Dohmke's interviewees (Aug 2025) | 90% of code by AI | Aug 2027-2030 | Google 75% | Open, on pace for code share | [blog](https://ashtom.github.io/developers-reinvented) |
| Mostaque (Mar 2023, HISTORICAL) | no (traditional) programmers | 2028 | About 1.7m US developers, growth projected | Open | [Goldman](https://www.goldmansachs.com/insights/articles/stability-ai-ceo-says-ai-will-prove-more-disruptive-than-the-pandemic) |
| Huang (23 Sep 2026) | junior problem: wait two years | about Sep 2028 | n/a | Open | [video](https://www.youtube.com/watch?v=HjurAWAr_nY) |

#### Unverified or dropped: do not use on stage
- Exact X permalinks for Karpathy's 26 Dec 2025 and 4 Feb 2026 posts and Masad's 27 Mar 2025 post. One site links the Feb 2026 post to an ID that appears to belong to another post. Open by hand.
- Schmidt's Mar 2026 Harvard remarks (one blog only, [byteandtrail](https://byteandtrail.com/eric-schmidt-ai-programmers-prediction/)).
- Recycled clips: several 2026-dated uploads are old interviews. Examples: Amodei clips dated 18 Nov 2026 on [blumify](https://blumify.io/people/dario-amodei/topics/ai-coding) reuse Feb 2026 or older wording; a "Sam Altman at Davos" item dated 29 Oct 2026 appears from content to be an older Davos session. The Aug 2026 viral Amodei 90% clip is from Mar 2025 ([traced here](https://traictory.com/news/2026-08-30-amodei-90-percent-code-prediction)).
- An Axios event transcript where Amodei says 70-90% of Anthropic code is by Claude and that people wrongly treat his prediction as falsified ([transcript](https://sozai.app/transcript/anthropic-dario-amodei-jack-clark-axios-jim-vandehei/)): text seen, event date not verified (file date is Aug 2026, content looks like autumn 2025).
- Mostaque on Indian outsourced coders being gone within one to two years ([Fox, Jul 2023](https://www.foxbusiness.com/technology/ai-replace-outsourced-coders-india-two-years-stability-ai-ceo)): outcome not researched here.
- Victor Taelin as a "programming is over" voice: no such primary found.
- Reuters pieces on Meta, 404 Media on Proton, India Today on Vembu and Altman: headline/extract only.
- Yen's exact insults and Proton tracking software: contested by Proton.

### Inferences
- Pattern in the scoreboard: claims about tools and code share tend to come true late and first inside AI firms; claims about job counts miss. Of the rows already due, the clean hits are Weil (benchmark) and, in part, Yegge (tooling) and Benioff (his own hiring, which he controls).
- A fair closing line for the host: ask each speaker which rung of Amodei's ladder they mean.

### Gaps
- Three headline predictions (Cherny, Musk, Amodei Davos) fall due between 31 Dec 2026 and 20 Jan 2027. If the event is after those dates, recheck.
- Not checked: the rest of the Karpathy-Dwarkesh transcript (last 70k characters), the full Anthropic S-1 text, the full CNN profile.
