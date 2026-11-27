# 01. Voices: what the big names said about juniors, developer headcount and skills (2024 to Nov 2026)

Research date: 2026-11-26. Window: Jan 2024 to 26 Nov 2026. Builds on `research_notes/Software engineering in the AI era/03_*.md` and `04_*.md`; this file re-verifies the key items and adds verbatim wording, new people (Jassy, Lütke/Thawar, Siemiatkowski, Dorsey, Kevin Scott, Vogels, Brynjolfsson, Autor, Acemoglu in depth) and new 2026 items (Nadella DealBook Nov 2026, Krishna Delhi Nov 2026, Brynjolfsson Nov 2026, Shopify interns Jun 2026, Huang GTC Taipei Jun 2026).

## How to read this file

- **Quote rule.** Every quote is a verbatim fragment of **under 15 words**, at most **one per source document**. This is a copyright limit on the tool that compiled these notes, so the ~30-word quotes you asked for are cut down. Where a longer sentence matters, the context is paraphrased (marked "para.") and the link plus timestamp let the host lift the full sentence from the recording. Nothing here is reconstructed: if only a paraphrase was found, it is labelled one.
- **Verification tags.**
  - `opened primary`: I read the speaker's own post or page, an official transcript, or the official video's captions.
  - `opened primary (crawler copy)`: the site blocked direct fetching, so I read a full-text crawl of the same URL (Exa). Open it once in a browser before going on stage.
  - `via secondary`: a news report, or a third-party transcript of an official recording.
  - `could not open`.
  - `prior notes`: verified in the 24 Nov notes (03/04) and not re-opened today.
- **Blocked or refused today:** weforum.org, axios.com, goldmansachs.com, cordmagazine.com, thenewstack.io (all 403 to direct fetch; read through crawler copies); theverge.com (fetch refused; read through crawler copy); ulisten.ai and exa.ai/library (429 rate limit on direct fetch); bloomberg.com and reuters.com (paywall, so headline/extract only); X/Twitter (not fetchable; tweets read in reproductions).
- **Conflict of interest.** These notes were compiled by a Claude model (made by Anthropic). Amodei, Cherny and (since May 2026) Karpathy work at Anthropic. They are treated like everyone else, and Anthropic's self-reported numbers are labelled as such.
- **"Implication" lines are not forecasts.** Each says what the finding means for the people in the room now.

---

## 0. Claim checks the host asked for (scorecard)

| Claim | Exact wording found | Due | What the data shows by 26 Nov 2026 | Verdict |
|---|---|---|---|---|
| Amodei, CFR, 10 Mar 2025: 90% of code in 3-6 months | "in three to six months—where AI is writing 90 percent of the code" | Jun-Sep 2025 | Anthropic says >90% of its codebase contributions were by Claude by Sep 2026 (S-1 claim, prior notes, secondary). Google 50% autumn 2025, 75% Apr 2026; IBM "nearly half" Nov 2026; Microsoft "20-30%" still cited Nov 2026 | Hit inside his own firm (self-reported), a year late; missed industry-wide |
| Zuckerberg, Rogan, 10 Jan 2025: AI "mid-level engineer" in 2025 | "an AI that can effectively be a sort of mid-level engineer" | end 2025 | Jul 2026: agent progress "hasn't really accelerated in the way that we expected" (Reuters). Meta cut ~10% in May 2026; internal code +220%, user-facing features +36%, major incidents +40% (TNW on Reuters, secondary) | Missed as stated |
| Benioff, 20VC, Dec 2024: no new engineers in 2025 | "we're not adding any more software engineers next year" | end 2025 | May 2026: engineers "mostly flat" for two years (~15,000 per Fortune); support cut 9,000 to ~5,000; 1,000 new grads/interns announced Apr 2026 | Kept (he controls it). "Flat" is his word; numbers unaudited |
| Klarna: AI-first, then rehiring humans | Feb 2025: "AI can already do all of the jobs that we, as humans, do"; May 2025: "what you end up having is lower quality" | n/a | Headcount ~7,000 (2022) to <3,000 (2026) by hiring freeze plus ~20%/yr attrition (his account). Human support re-added as gig/"VIP" model. Engineering held ~1,500 (Jun 2025, secondary). The "700 agents" were outsourced contractors | Half-true both ways: the "rehiring" was small and in support; the shrink was real but not in engineering |
| Garman, Aug 2025: replacing juniors with AI is "the dumbest thing" | "That's the dumbest thing I've ever heard" | n/a | Amazon hiring 11,000 interns and new grads in 2026, roughly in line with prior years (BI, secondary); Amazon also cut ~30,000 corporate jobs since Oct 2025 (Platformer, prior notes) | Consistent with his own company's intern intake; not a hiring expansion |
| Huang, Feb 2024: "nobody has to program" vs later | 2024: "create computing technologies that nobody has to program"; Sep 2026: "That last part is completely false." (on "ergo no engineers"); Jun 2026: "The number of engineers, software engineers, is actually increasing." | n/a (juniors: "wait two years", ~Sep 2028) | US software postings +23.4% y/y but index 82 (Feb 2020 = 100); 71% of the increase is senior; entry and mid postings ~4% below Jan 2025 while senior +19% (Indeed) | Not a reversal: 2024 was an interface claim, 2026 a jobs claim. His jobs claim is true in aggregate and false for entry level so far |
| Pichai on Google's AI code share | Oct 2024: "more than a quarter of all new code at Google is generated by AI"; Apr 2026: "75% of all new code at Google is now AI-generated and approved by engineers" | n/a | Same leader, Jun 2025: the metric he trusts is ~10% engineering velocity gain; Alphabet headcount rose 190,167 to 204,757 Q3 2025 to Q3 2026 (all staff; prior notes, SEC snippet) | Code share tripled; headcount did not fall; velocity gain far smaller than code share |
| Nadella on Microsoft code share | Apr 2025: "maybe 20%, 30% of the code that is inside of our repos today" | n/a | Still cited as 20-30% in Nov 2026 (weak: an AI-written summary of his Pragmatic Engineer podcast, techcapsules.com). Microsoft headcount fell ~228k to ~223k (Jun 2026), 60,000 buyout offers Oct 2026, new "engineering quality" head Feb 2026 | Code share claim modest and stable; workforce shrinking anyway, for cost of AI capex as much as AI labour |

**Pattern across the table:** claims about *code share* came true late and first inside AI-heavy firms; claims about *engineer headcount* mostly missed in aggregate; claims about *juniors* are the ones the data supports.

---

## 1. AI lab heads

### 1. Dario Amodei — CEO, Anthropic
- Sells/gains: Claude and Claude Code; Anthropic filed an S-1 on 26 Oct 2026 (prior notes), so every claim about agent capability is also a valuation claim. Also a genuine, long-stated worry about labour disruption.
- Q1: "in three to six months—where AI is writing 90 percent of the code" — 10 Mar 2025, Council on Foreign Relations. https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic — `opened primary` (uncorrected transcript). Same answer, para.: in 12 months AI "may" write essentially all code; the programmer still specifies design and goals, but those "little islands" get picked off too.
- Q2: "the budget is balanced — and 20% of people don't have jobs" — 28 May 2025, Axios interview (a scenario he described). https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic — `opened primary (crawler copy)`. The famous "half of all entry-level white-collar jobs ... 10-20% unemployment in one to five years" is **Axios's paraphrase of his words**, not a direct quote.
- Q3: "six to 12 months away from when the model is doing most, maybe all" (of what SWEs do end to end) — 20 Jan 2026, WEF Davos with Hassabis. https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/ — `opened primary (crawler copy)`. Same session, para.: inside Anthropic he foresees needing fewer, not more, people "on the more junior end and then on the intermediate end"; hedge: "a lot of uncertainty", could take a few years.
- Q4: "there's 90% less demand for SWEs, which I think will happen" — 13 Feb 2026, Dwarkesh Podcast (section from 00:12:36). https://www.dwarkesh.com/p/dario-amodei-2 — `opened primary`. Same passage, para.: "90% of lines" is "a very weak criterion"; even 100% of today's SWE tasks done by models does not mean engineers are out of a job.
- Changed? Not on substance. He re-explained (ladder of rungs) rather than retreated. He still expects much lower demand eventually.
- Checked against data: 90% of code: true at Anthropic by his firm's own report, a year after the deadline; false industry-wide at the deadline (Google 50%). Juniors: his own firm's data backs his worry: junior share of technical hires fell 27% to 9%, of technical staff 21% to 14%, while the company roughly tripled; human attention is the named bottleneck (~80% of interactive session time waiting on humans) — https://www.anthropic.com/research/employment-at-anthropic (16 Oct 2026) `opened primary`, self-study. Davos end-to-end claim: open until ~20 Jan 2027; Anthropic's own Aug 2026 index had Claude "leading" 26% of AI R&D work and fully autonomous in none (prior notes).
- Analysis → implication: the most-quoted line (90% of code) is the weakest rung of his own ladder; the rung that matters to the room (fewer juniors) is the one his company is already living. Quote him on the ladder, not the headline.

### 2. Sam Altman — CEO, OpenAI
- Sells/gains: Codex and ChatGPT; OpenAI preparing for an IPO (prior notes). Gains from "agents join the workforce" (sales) and from "coders are busier" (reassures developers who are his users).
- Q1: "imagine it as a real-but-relatively-junior virtual coworker" — Feb 2025 (page shows no date; published ~9 Feb 2025), blog "Three Observations". https://blog.samaltman.com/three-observations — `opened primary`. Para.: an agent able to do most of what a top-company engineer "with a few years of experience" does, on tasks up to a couple of days.
- Q2: "we are planning to dramatically slow down how quickly we grow" — 26 Jan 2026, OpenAI Town Hall (~48:24). https://www.youtubetranscript.dev/charts/every-sam-altman-interview/Wpxv-8nG8ec/openai-town-hall-with-sam-altman — `via secondary` (third-party transcript of official video; BI confirms wording). Same answer, para.: OpenAI will keep hiring developers; interviews should show someone doing in 10-20 minutes what took two weeks a year ago.
- Q3: "demand for just way more software than any of us thought" — 21 Oct 2026, Forward Future (Matthew Berman), 04:28. https://exa.ai/library/podcast/ntjhrb5tglf/episode/qxyrzxwyvdv — `via secondary` (machine transcript of official interview). Same passage at 03:46, para.: the story went from no jobs for coders to coders never busier, better paid, more impact; "the texture of the job changed a lot".
- Changed? Yes, in tone: Feb 2025 "junior coworker" agent, Jan 2026 slow hiring, Oct 2026 "coders busier than ever". He frames it as everyone (not him) having been wrong 6-12 months earlier.
- Checked against data: "busier, better paid" fits the senior side: postings +23.4% y/y, 71% of the increase senior (Indeed). It does not describe entry level (entry postings ~4% below Jan 2025). OpenAI itself slowed hiring.
- Analysis → implication: his "coders are busier" is a statement about people who already have the job. For a job-seeker the relevant Altman line is the Town Hall one: the firm will hire, slower, and test whether you can work at agent speed.

### 3. Demis Hassabis — CEO, Google DeepMind
- Sells/gains: Gemini and Google's coding agents; Google is also a large employer of engineers.
- Q1: "the beginnings of maybe impacting the junior level, entry level" (jobs, internships, "this year") — 20 Jan 2026, WEF Davos. URL as Amodei Q3 — `opened primary (crawler copy)`. Same answer, para.: he can feel a hiring slowdown himself; his advice to undergrads is to become extremely proficient with the tools, which could beat a traditional internship; after AGI is "uncharted territory".
- Later (prior notes, `opened primary`/`via secondary`): May 2026 ABC: still study maths, physics, CS; taste and creativity differentiate. Jul 2026 London (BI): architecture and engineering practice still needed; technically deep people get about ten times more from the tools.
- Changed? No. Consistent since 2025; he separates the next five years from post-AGI.
- Checked against data: the "this year, juniors first" call held: Anthropic's junior hiring share drop; Stanford/ADP gap for ages 22-25 in exposed jobs reached about 19% (Brynjolfsson, Nov 2026).
- Analysis → implication: the one lab head who said both halves in one breath: the door narrows for juniors, and the compensating move is fluency, not avoidance. His later "technically deep get 10x" is the reason fluency alone is not enough.

### 4. Mustafa Suleyman — CEO, Microsoft AI
- Sells/gains: Copilot and Microsoft's own models; Microsoft is cutting cost to fund AI capex.
- Q1: "fully automated by an AI within the next 12 to 18 months" (most white-collar tasks; software engineering as his proof) — 12 Feb 2026, Financial Times video interview with Roula Khalaf. https://www.ft.com/video/2c428045-bf4f-45bd-ada2-8ba53983cd81 — `opened primary` (FT transcript via crawler). Same interview, para.: models already code better than the vast majority of human coders; engineers moved to debugging, scrutinising, architecting "in the last six months".
- Q2 (walk-back): "I said tasks, so that does not mean jobs" — 8 Jun 2026, Decoder (Nilay Patel), ~49:42. https://www.theverge.com/podcast/944138/microsoft-mustafa-suleyman-superintelligence-agi-openai-automation — `opened primary (crawler copy)`. The host pushed back that the sentence said "fully automated" with lawyers and accountants as examples.
- Changed? Yes: re-explained as tasks within four months; BI reports he says his view has not changed (prior notes).
- Checked against data: due Feb-Aug 2027. His own software example describes a role shift, which matches the data; the "fully automated" wording does not match any occupation's employment data yet.
- Analysis → implication: a clean classroom example of how "tasks" and "jobs" get swapped. When any speaker says "automated", ask: tasks or jobs, and within what share of the job?

---

## 2. Big-tech CEOs and executives

### 5. Jensen Huang — CEO, NVIDIA
- Sells/gains: GPUs. Both stories (everyone programs; engineers multiply) sell more compute. Uses Cursor across NVIDIA's engineers (Oct 2025, CNBC transcript).
- Q1: "create computing technologies that nobody has to program" — 12 Feb 2024, World Governments Summit, Dubai. https://blogs.nvidia.com/blog/world-governments-summit/ — `opened primary` (NVIDIA's own write-up; video ~18:30 in prior notes). Same remarks, para.: the programming language is human, so everybody is a programmer; prior notes found in the video that he also urged upskilling and said domain expertise becomes the edge.
- Q2: "That last part is completely false." — 23 Sep 2026, The Ezra Klein Show, ~05:55, rebutting "90% of code by agents, ergo no engineers". https://www.nytimes.com/video/opinion/100000011159761/jensen-huang-vs-the-ai-doomers.html — `opened primary` (NYT video page text). Same interview at ~19:50, asked whether firms still need juniors: "Wait two years", because AI-native graduates are two years out.
- Q3: "The number of engineers, software engineers, is actually increasing." — Jun 2026, GTC Taipei keynote (~08:59). https://www.nvidia.com/en-us/on-demand/session/gtctaipei26-stw61044/ — `opened primary` (NVIDIA On-Demand transcript). Same passage, para.: GitHub commits nearly tripled in early 2026; AI reducing jobs is "complete nonsense".
- Changed? No contradiction in substance: purpose (engineering) vs task (coding). But the 2024 line travelled as "don't learn to code", and he let it.
- Checked against data: aggregate postings up (true); still below 2020 (index 82); senior-skewed. His junior answer addresses supply (graduates will be capable), not demand (will firms hire them). "Wait two years" falls due ~Sep 2028. Andrew Maynard's annotated transcript makes the same supply-vs-demand point — https://andrewmaynard.net/late-lessons-ai-sept-2026/supporting/huang/segments/S1.html (`via secondary`).
- Analysis → implication: the purpose/task split is the most useful tool in the talk: a job survives if its purpose outlives its most automatable task. Apply it to "junior developer": if the junior's purpose was only boilerplate, that job shrinks; if it is learning to own outcomes, it survives.

### 6. Satya Nadella — CEO, Microsoft
- Sells/gains: GitHub Copilot, Azure, OpenAI stake; also running an incumbent that is shrinking headcount.
- Q1: "maybe 20%, 30% of the code that is inside of our repos today" — 29 Apr 2025, LlamaCon with Zuckerberg. https://www.cnbc.com/2025/04/29/satya-nadella-says-as-much-as-30percent-of-microsoft-code-is-written-by-ai.html — `via secondary` (video opened in prior notes). Para. (prior notes): better in Python and greenfield, weaker in C++.
- Q2: "just like how Excel reduce the floor to be an analyst" [sic, machine transcript] — early 2026 (~1 Mar 2026), OMR Podcast. https://omr.podigee.io/959-neue-episode — `opened primary` (machine transcript on official page). Para.: anyone can be a software developer, and the ceiling rises too; people must reskill so generated code is not a black box.
- Q3: "software engineering is very much alive and, in fact, is going to thrive" — 18 Nov 2026, NYT DealBook Summit. https://techcrunch.com/2026/11/18/microsoft-ceo-satya-nadella-explains-why-he-asked-60k-employees-to-quit/ — `via secondary`. Same talk, para.: the industry went from "AI can never do software" to "why do we need software engineers" to rediscovering the job with a "new operating point"; Microsoft's Cowork team is 11 developers who "build a software factory that builds the product".
- Changed? Consistent in words. But the action next to the words: 60,000 voluntary-exit offers (~27% of staff, Oct 2026, AP); headcount down ~5,000 y/y to ~223,000 (The Verge, 29 Oct 2026, `opened primary (crawler copy)`); May 2025 layoffs where >40% of the Washington cuts were software engineers (TechCrunch citing Bloomberg, `via secondary`); a new engineering-quality head in Feb 2026 (TOI, `via secondary`).
- Checked against data: profession-level claim (thrive) is consistent with postings; firm-level reality is smaller teams.
- Analysis → implication: "the profession thrives" and "my company needs fewer of you" are both true at once. The 11-person "software factory" is the job description to aim at: the people who build and run the factory, not the ones it replaces.

### 7. Sundar Pichai — CEO, Alphabet/Google
- Sells/gains: Gemini, Google Cloud; reports AI code share as a capability proof to investors.
- Q1: "more than a quarter of all new code at Google is generated by AI" — 29 Oct 2024, Q3 earnings remarks. https://blog.google/inside-google/message-ceo/alphabet-earnings-q3-2024/ — `opened primary`. Next sentence, para.: then reviewed and accepted by engineers.
- Q2: "we plan to hire more engineers next year" — 5 Jun 2025, Lex Fridman #471, ~1:31:51. https://lexfridman.com/sundar-pichai-transcript/ — `opened primary`. Same passage, para.: ~30% of code uses AI suggestions, but the metric he trusts is a ~10% engineering velocity increase.
- Q3: "75% of all new code at Google is now AI-generated and approved by engineers" — 22 Apr 2026, Cloud Next. https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/ — `opened primary`. Para.: up from 50% "last fall".
- Changed? No. Notable that the CEO himself discounts code share in favour of velocity.
- Checked against data: code share 25% to 75% in 18 months; Alphabet headcount up ~7.7% Q3 2025 to Q3 2026 (all staff, prior notes, SEC snippet). No public engineer-only count after Apr 2026.
- Analysis → implication: 30% of code produced ~10% velocity in his own numbers. Code share is the wrong scoreboard; the room should judge any "X% of code" claim by asking what happened to releases, incidents and headcount.

### 8. Mark Zuckerberg — CEO, Meta
- Sells/gains: Meta's models and agents; capex of $135-145bn for 2026 (prior notes) needs a productivity story.
- Q1: "an AI that can effectively be a sort of mid-level engineer" (in 2025, "probably") — 10 Jan 2025, Joe Rogan Experience #2255, ~2:08:00. https://realalpha.app/v/7k1ehaE0bdU/?t=7680 — `via secondary` (machine transcript of official video). Same passage, para.: expensive at first; "I think that that'll augment the people working on it."
- Q2: "accomplished by a single very talented person" (projects that used to need big teams) — Q4 2025 earnings call (Jan 2026, reproduced 5 Feb 2026). http://svdaily.com/2026/02/05/mark-zuckerberg-conference-call-remarks/ — `via secondary` (reproduced call remarks). Correction to common reporting: the "30% more output per engineer, 80% for power users" figures were said by CFO **Susan Li**, not Zuckerberg.
- Q3 (later admission): "hasn't really accelerated in the way that we expected" — 2 Jul 2026, internal town hall (recording heard by Reuters). https://www.reuters.com/business/zuckerberg-says-ai-agent-development-going-slower-than-expected-2026-07-02/ — `via secondary` (wording via TNW/India Today quoting Reuters; Reuters text paywalled).
- Changed? Yes: from "mid-level engineer in 2025" to "slower than expected" and a reorganisation he called not as "clean" as it could have been.
- Checked against data: May 2026 ~10% cut (~8,000) plus ~7,000 reassigned; internal code changes +220%, user-facing feature changes +36%, major incidents +40% (TNW on Reuters investigation, prior notes, `via secondary`; Reuters extract confirms the 220%). Meta shipped Muse models Oct 2026.
- Analysis → implication: the best natural experiment of 2026: a firm that reorganised around the forecast got much more code, a little more product, and more incidents. Volume is cheap; the scarce thing is someone who can turn volume into reliable product.

### 9. Andy Jassy — CEO, Amazon
- Sells/gains: AWS AI services; a leaner corporate cost base.
- Q1: "fewer people doing some of the jobs that are being done today" — 17 Jun 2025, memo to employees. https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-on-generative-ai — `opened primary` (crawler copy of Amazon's page). Same memo, para.: "more people doing other types of jobs"; hard to know where it nets out; expects AI to reduce the total corporate workforce in the next few years; be curious, take trainings.
- Q2: "not even really AI-driven, not right now, at least" — 30 Oct 2025, Q3 earnings call, on the ~14,000 corporate cuts ("It's culture": too many layers). https://www.axios.com/2025/10/31/amazon-layoffs-ai-andy-jassy — `via secondary` (Axios, Fortune, GeekWire carry matching wording).
- Changed? Two framings four months apart: AI will shrink us (June) vs these cuts are culture, not AI (October). The qualifier "not right now" keeps both alive.
- Checked against data: ~30,000 corporate cuts since Oct 2025 (Platformer via prior notes); 11,000 interns and new grads hired in 2026 (Garman).
- Analysis → implication: "AI-driven" is a label firms choose for audiences. Investors hear efficiency, employees hear culture. For a candidate, the observable fact is what a firm hires, not why it says it cut.

### 10. Marc Benioff — CEO, Salesforce
- Sells/gains: Agentforce "digital labor"; uses Salesforce as customer zero, so his headcount is also his ad.
- Q1: "we're not adding any more software engineers next year" — Dec 2024, 20VC with Harry Stebbings. https://www.youtube.com/watch?v=Xgsxi7IGMEU — `opened primary` (official video captions via crawler). Same answer, para.: engineering productivity up "more than 30%", fewer support engineers, 1,000-2,000 more salespeople. Repeated on the 26 Feb 2025 earnings call (The Register, `via secondary`).
- Q2: "I've reduced it from 9,000 heads to about 5,000 because I need less heads" — late Aug 2025, The Logan Bartlett Show (support staff). https://fortune.com/2025/09/02/salesforce-ceo-billionaire-marc-benioff-ai-agents-jobs-layoffs-customer-service-sales/ — `via secondary`.
- Q3: "we have not been loading up a lot more engineers" — ~27 May 2026, Q1 FY27 earnings call. https://fortune.com/2026/05/28/ai-slashes-white-collar-jobs-salesforce-ceo-marc-benioff-one-department-still-hiring-sales/ — `via secondary`. Same call, para.: headcount mostly flat because AI made engineers more efficient; growth only in sales.
- Contradiction (earlier 2025, Fortune interview): "I think AI augments people, but I don't know if it necessarily replaces them" — quoted in the Fortune Sep 2025 piece above, `via secondary`. Months later he cut 4,000 support roles.
- Checked against data: engineers ~15,000 "holding steady" (Fortune's wording; Dec 2024 he cited ~13,000, prior notes: definitions differ). 1,000 new grads/interns announced Apr 2026 (prior notes). Support cut ~45%.
- Analysis → implication: the "no new engineers" claim held because a CEO can make a hiring claim true by deciding it. The real cut fell on support, not engineering. Juniors should read "flat engineering" as fewer openings at incumbents, not a closed profession.

### 11. Matt Garman — CEO, AWS
- Sells/gains: Kiro, Amazon Q, and the compute under every coding agent; needs a large professional developer customer base.
- Q1 (paraphrase only): Jun 2024 internal fireside leaked to BI (20 Aug 2024): within 24 months, or a time he could not pin down, it is possible most developers are not coding; the skill is knowing what to build. https://www.businessinsider.com/aws-ceo-developers-stop-coding-ai-takes-over-2024-8 — `via secondary`. No verbatim checked today.
- Q2: "That's the dumbest thing I've ever heard" (on replacing all junior people with AI) — Aug 2025 (page dated 31 Aug 2025), Matthew Berman / Forward Future, 08:52 section. https://forwardfuture.com/newsletter/originals/aws-ceo-matt-garman-on-agents-infrastructure-and-the-future-of-ai-engineering — `opened primary` (interviewer's edited transcript). Same section, para.: juniors are least expensive, most leaned into AI tools, and you need a talent pipeline; keep hiring from college; learn how to learn and to think.
- Q3: "we probably didn't exactly hit it, but we're directionally on that path" — 23 Jun 2026, Platformer (Casey Newton), on his 24-month forecast. https://www.platformer.news/matt-garman-aws-ceo-interview-ai-jobs/ — `opened primary`. Same interview, para.: hiring 11,000 interns and new grads; firms look for the ability to learn more than a skill set; you still have to understand how systems are put together.
- Changed? He graded himself on the due date, the only CEO found doing so. His two famous lines do not conflict (less typing, still hire juniors).
- Checked against data: 11,000 is in line with prior years (BI May 2026, prior notes snippet), so stability not expansion; Amazon cut ~30,000 corporate roles in the same period.
- Analysis → implication: a vendor's reason to want juniors (pipeline, tool fluency, cost) is also a candidate's pitch: arrive cheap, fluent, and visibly able to learn.

### 12. Thomas Dohmke — CEO of GitHub until 2025; now founder, Entire
- Sells/gains: then Copilot; now an agent/human collaboration platform.
- Q1: "Either you embrace AI, or get out of this career." — 4 Aug 2025, his X post (LinkedIn copy). https://www.linkedin.com/posts/ashtom_developers-reinvented-thomas-dohmke-activity-7358175792092102656-o0p0 — `opened primary`. Origin: in the blog the line came from one of 22 interviewed developers; he adopted it in his own voice the next day.
- Q2: "They won't be the same software developer jobs as we know them today." — 3 Aug 2025, blog "Developers, Reinvented". https://ashtom.github.io/developers-reinvented — `opened primary`. Same post, para.: half of the 22 expected 90% AI-written code within 2 years, half within 5; understanding and reasoning about code "remains critical"; BLS projects developer jobs +18% over a decade.
- Changed? Left GitHub (2025). No retraction found.
- Checked against data: 90% code share by Aug 2027-2030: Anthropic >90% (self-report), Google 75%, IBM ~50%: on pace at leaders. Sample n=22 self-selected heavy users.
- Analysis → implication: the slogan is harsher than his evidence. His skill list (delegation, verification, fundamentals, product and systems thinking) is the usable part.

### 13. Arvind Krishna — CEO, IBM (with Nickle LaMoreaux, IBM CHRO)
- Sells/gains: watsonx, consulting; IBM's 2023 "pause hiring for ~7,800 back-office roles" made him an early AI-replacement poster.
- Q1: "more like 20-30% of the code could get written by AI — not 90%" — 11 Mar 2025, SXSW. https://techcrunch.com/2025/03/11/ibms-ceo-doesnt-think-ai-will-replace-programmers-anytime-soon/ — `via secondary`. Same talk, para.: productive companies gain share and make more products.
- Q2: "Programmers will not be writing code. Programmers will be telling AI what to write" — 16 Nov 2026, New Delhi press interaction. https://indianstartupnews.com/news/programmers-will-be-telling-ai-what-to-write-ibm-ceo-on-jobs-quantum-and-indias-3-billion-12816387 — `via secondary` (PTI copy also in Business Standard and The Hindu). Same event, para.: nearly half of IBM's code is AI-generated; 10-20% of jobs displaced over a decade; BPO hit hardest; IBM hired an estimated 5,000-10,000 in India in the past year.
- LaMoreaux: "You have to rewrite every job." — ~10 Feb 2026, Charter Leading with AI Summit, on IBM tripling US entry-level hiring in 2026, including developers. https://www.axios.com/2026/02/13/ai-ibm-tech-jobs — `opened primary (crawler copy)` of Axios's report (so `via secondary` for her words). Para.: the entry-level jobs of 2-3 years ago AI can mostly do; junior developers now spend less time on routine coding, more with clients; skipping juniors means poaching mid-levels at a ~30% premium later.
- Changed? Yes, twice: 2023 hiring pause; 2025 "20-30% not 90%"; Nov 2026 "nearly half". His capability estimate was beaten by his own company within 20 months.
- Checked against data: tripling announced, numbers never disclosed. IBM cut ~1% of its workforce in 2025 (Axios).
- Analysis → implication: wrong on capability, right so far on demand: a pattern worth naming. IBM's rewritten junior role (client contact, validating AI output) is a concrete picture of what entry level now means.

### 14. Tobi Lütke — CEO, Shopify (with Farhan Thawar, Shopify head of engineering)
- Sells/gains: commerce platform; a lean, high-revenue-per-employee story.
- Q1: "teams must demonstrate why they cannot get what they want done using AI" (before asking for headcount) — 7 Apr 2025, internal memo he posted on X. Text reproduced at https://www.newinternet.tech/p/tobis-shopify-memo and https://www.inc.com/ben-sherry/shopify-ceo-to-employees-use-ai-now/91173063 — `via secondary` (X not fetchable).
- Q2: "people I know who really write code is, like, vanishingly small now" (inside Shopify) — 15 Sep 2026, The Knowledge Project. https://exa.ai/library/podcast/lygxg3cljxy/episode/36j5mqlscgt — `via secondary` (third-party transcript). Same episode, para.: up to ~50% of pull requests now originate in company chat conversations, not traditional engineering work; state management still done by hand.
- Thawar: "It is not allowed to replace the learning you'll need to do." — 1 Jun 2026, Shopify internship page "Zero Experience, Infinite Leverage". https://internships.shopify.com/pages/zero-experience-infinite-leverage — `opened primary`. Same page, para.: hiring 1,000 interns again; "10x'ing" the internship programme because they went all in on AI; interns should explain the layer two or three below where they work; a human owns every PR; AI does not merge on its own.
- Changed? Lütke, per a May 2026 Uncapped podcast summary, first believed AI tilted value toward early-career people, then revised after seeing how much "steering" the best programmers contribute — https://pjfp.com/tobi-lutke-uncapped-50-shopify-ai-memo/ (`via secondary`, summary only).
- Checked against data: headcount 11,600 (2022) to 8,100 (end 2024) while revenue grew ~20%+/yr (Forrester, `via secondary`). Intern intake: 1,000 in 2025 and 2026 (company's own claim).
- Analysis → implication: the same firm both requires proof that AI cannot do a job before hiring and hires 1,000 interns. The reconciliation is in Thawar's page: interns are hired as AI-native learners who must still understand the layers below.

### 15. Sebastian Siemiatkowski — CEO, Klarna
- Sells/gains: Klarna (IPO 2025); a revenue-per-employee story for investors; openly "in Dario's camp".
- Q1: "AI can already do all of the jobs that we, as humans, do" — Feb 2025, Bloomberg (as quoted by Fortune). https://fortune.com/2025/05/09/klarna-ai-humans-return-on-investment/ — `via secondary`.
- Q2: "what you end up having is lower quality" (cost was too dominant in organising AI customer service) — ~8 May 2025, Bloomberg interview. Same Fortune URL; Bloomberg original https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-real-person-customer-service — `via secondary` (Bloomberg paywalled). Para.: human support always available; an "Uber type" freelance model.
- Q3 (skills): "engineers tend to be very technical but don't understand the business as well" — 10 Feb 2026, Charter Leading with AI Summit. https://www.youtube.com/watch?v=pw9kRVjVXTc — `opened primary` (Charter's official video captions via crawler). Same talk, para.: first two years they hired only engineers; now "almost the opposite": business people who can now code with AI create value fast; human support becomes "the VIP treatment"; he "had to pay a lot" for the all-jobs remark (Charter write-up).
- Also (20VC, ~16 Feb 2026, `via secondary` transcript): from 7,000 to below 3,000; expects fewer than 2,000 by 2030; ~20%/yr attrition, no layoffs planned; the 2023-24 "600/700 agents" were outsourced staff, "nobody lost their job". https://exa.ai/library/podcast/5c82h2rvfjh/episode/gp5vtybsj3c
- Checked against data: headcount 5,527 (Dec 2022) to 3,422 (Dec 2024) per prospectus (CNBC, `via secondary`); revenue per employee $300k to $1.3m (his claim). Engineering headcount held flat at ~1,500 while other functions shrank (TBPN digest, Jun 2025, `via secondary`). Fortune: Klarna kept its no-backfill policy even while "rehiring".
- Analysis → implication: Klarna is not "AI replaced engineers then failed". It is a hiring freeze plus attrition that protected engineering, then a CEO saying the scarcer person is the one who understands the business and can direct AI. For juniors: domain understanding is the differentiator he is paying for.

### 16. Elon Musk — CEO Tesla/SpaceX; founder xAI
- Sells/gains: Grok Code; recruiting coders in the same meeting.
- Q1: "In a benign scenario, probably none of us will have a job" — 23 May 2024, VivaTech Paris (remote). https://www.cnn.com/2024/05/23/tech/elon-musk-ai-your-job — `via secondary` (CNN; session upload captions match). Para.: jobs become optional, "universal high income"; 80% likely in his view.
- Q2: "you don't even bother doing coding" (maybe by end of 2026; AI emits the binary directly) — 10 Feb 2026, xAI all-hands (~11:22). https://ceointerviews.ai/interview/928430/ — `via secondary` (third-party transcript of xAI's video).
- Changed? No.
- Checked against data: due 31 Dec 2026; no shipping prompt-to-binary product seen (Sept 2026 technical review, prior notes). His own team said generated code still needs review.
- Analysis → implication: the boldest, least-hedged, least-checkable camp voice. Useful only as a contrast to people who graded themselves (Garman, Cherny).

---

## 3. Engineers and practitioners

### 17. Andrej Karpathy — ex-OpenAI/Tesla; Anthropic pre-training since May 2026
- Sells/gains: independent educator until May 2026; now an Anthropic employee.
- Q1: "not too bad for throwaway weekend projects" (the limit in the tweet that coined vibe coding) — 2 Feb 2025 (X post ID decodes to 2 Feb 2025 23:17 UTC), reproduced by Simon Willison. https://simonwillison.net/2025/Mar/19/vibe-coding/ — `via secondary`. Same tweet, para.: give in to the vibes, accept all diffs, "forget that the code even exists".
- Q2: "the industry is making too big of a jump" — 17 Oct 2025, Dwarkesh Podcast, 00:36:53. https://www.dwarkesh.com/p/andrej-karpathy — `opened primary`. Same section, para.: agents were "not net useful" on nanochat; the output is "slop".
- Q3: "Agentic engineering is about preserving the quality bar of professional software." — 29-30 Apr 2026, Sequoia AI Ascent (his blog transcript, LLM-cleaned and disclosed). https://karpathy.bearblog.dev/sequoia-ascent-2026/ — `opened primary`. Same talk, para.: vibe coding raises the floor for everyone; agents are like interns; you remain responsible; he has "never felt more behind as a programmer". The widely shared "outsource your thinking, not your understanding" line he attributes to someone else's tweet.
- Changed? Twice, in public: cautious Oct 2025, converted Dec 2025, then drew the floor/bar distinction.
- Checked against data: "everyone builds" true at the floor (non-technical agent use at Anthropic 2 to 90 sessions/month). The bar half matches Shopify/IBM rules that a human owns every change.
- Analysis → implication: the coiner of the slogan is the clearest source for its limit. Two careers now: people the floor lets build, and professionals who hold the bar. The talk should say which one a CS degree is for.

### 18. Linus Torvalds — creator of Linux and Git
- Sells/gains: nothing commercial in AI; bears maintainer cost of AI patches.
- Q1 (paraphrase only): Oct 2024, TFiR: AI is ~90% marketing, 10% reality, but will change the world. https://www.tomshardware.com/tech-industry/artificial-intelligence/linus-torvalds-reckons-ai-is-90-percent-marketing-and-10-percent-reality — `prior notes`, snippet only.
- Q2: "AI is great, but AI is not changing programming." — 20 May 2026, Open Source Summit North America (keynote with Dirk Hohndel), reported by LWN 25 May 2026. https://lwn.net/Articles/1073761/ — `via secondary` (official video opened in prior notes). Same talk, para.: compilers already write 100% of machine code, so "99% AI-written" boasts annoy him; you must understand your end result to maintain it long term; "just a tool".
- Later: Oct 2026, posted an LLM-assisted kernel patch series; reviewers quickly found a race condition (LWN, prior notes `via secondary`).
- Changed? Yes, from dismissive (2024) to user (2026), holding firm on understanding.
- Analysis → implication: the expert-plus-reviewer loop working as intended. Remove him from any "Torvalds says AI is hype" slide.

### 19. DHH (David Heinemeier Hansson) — creator of Rails; co-owner 37signals
- Sells/gains: small software firm that gains from cheaper building.
- Q1: "I can literally feel competence draining out of my fingers." — 12 Jul 2025, Lex Fridman #474, 01:29:03. https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/ — `opened primary`. Para.: keeps AI in a separate window, does not let it drive.
- Q2: "not an economically viable enterprise going forward to have humans typing out lines" — 6 Oct 2026, blog "Over my dead pencil". https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647 — `opened primary`. Same post, para.: only programmers who refuse to embrace this need to worry; "We need you."; a bloom in software as prices fall.
- Changed? Biggest public swing of the period (15 months).
- Analysis → implication: his 2025 fear (you stop learning when you stop typing) was outweighed, never answered. For a junior who never built the skill by typing, that unanswered question is the live one.

### 20. Salvatore Sanfilippo (antirez) — creator of Redis
- Sells/gains: open-source author back at Redis; worried about layoffs and centralisation.
- Q1: "writing the code yourself is no longer sensible, if not to have fun" (for most projects) — ~11 Jan 2026 (page: "319 days ago"), "Don't fall into the anti-AI hype". https://antirez.com/news/158 — `opened primary`. Same post, para.: he thought there were years left, no longer does; worried for the folks who will get fired; skipping AI will not help your career.
- Q2: "I have a doubt only regarding young programmers that don't have enough experience" (to build a mental model) — ~13 Jul 2026 ("136 days ago"), "Control the ideas, not the code". https://antirez.com/news/169 — `opened primary`.
- Changed? Yes: May 2025 post argued humans still far better (news/153, prior notes).
- Analysis → implication: the converted expert's single doubt is exactly the audience. A mental model is the asset he cannot hand to juniors; it is what they must build deliberately.

### 21. Kent Beck — creator of XP/TDD; newsletter, talks, consulting
- Sells/gains: augmented-coding newsletter and consulting.
- Q1: "When anyone can build anything, knowing what's worth building becomes the skill." — 15 Sep 2025, "Programming Deflation". https://newsletter.kentbeck.com/p/programming-deflation — `opened primary`. Same post, para.: deflation and Jevons pull opposite ways; do not predict, build capabilities that thrive in either world (understanding, judgment, integration, knowing what not to build).
- Q2: "manage juniors for learning, not production" — 12 Dec 2025, "The Bet On Juniors Just Got Better". https://newsletter.kentbeck.com/p/the-bet-on-juniors-just-got-better — `opened primary`. Para.: AI shortens the junior "valley of regret", so the bet improved.
- Later (prior notes): Jun 2026 Craft talk: two of his books effectively obsolete; programmers are grieving; he tells himself there will be more programmers in five years, and calls that a story, not proof.
- Checked against data: the juniors claim is so far contradicted by aggregate hiring (Anthropic 27% to 9%; entry postings down while senior up), though IBM, Shopify and Amazon act on it.
- Analysis → implication: his advice is to managers, but the junior can use it as a filter: look for teams that manage you for learning. Teams that measure output alone will not wait for the valley to end.

### 22. Martin Fowler — Chief Scientist, Thoughtworks
- Sells/gains: Thoughtworks sells AI-assisted delivery; he still refuses to predict.
- Q1: "My answer to all these questions is 'I haven't the foggiest'." (future of programming; should juniors enter) — 28 Aug 2025. https://www.martinfowler.com/articles/202508-ai-thoughts.html — `opened primary`. Same post, para.: distrust anyone who claims to know; near-certain the bubble pops; LLMs may move software into the non-deterministic world other engineers already live in.
- Q2: "Nothing has hit with the magnitude of AI." — 2026 Pragmatic Summit, quoted 6 Oct 2026 by Orosz. https://newsletter.pragmaticengineer.com/p/the-state-of-the-tech-industry-in — `via secondary`.
- Analysis → implication: the honest null forecast from the most senior methodologist alive. It is also permission for the host not to forecast.

### 23. Grady Booch — co-creator of UML; IBM Chief Scientist for Software Engineering
- Sells/gains: IBM; uses Claude himself.
- Q1: "We've just moved up another ratchet of level of abstraction." — ~7 Feb 2026, Oxide and Friends, 27:01. https://oxide-and-friends.transistor.fm/episodes/software-engineering-past-present-and-future-with-grady-booch/transcript — `opened primary` (official episode transcript). Same episode, para.: the history of software engineering is rising abstraction; the human is not disappearing.
- Q2: "I think that @DarioAmodei does not understand software engineering" — Apr 2026, X, quoted by Gary Marcus (27 Apr 2026), who also quotes him saying Amodei is pumping his company's valuation. https://garymarcus.substack.com/p/dario-amodei-hype-ai-safety-and-the — `via secondary`.
- Later (prior notes, snippet): Sep 2026 concedes AI increasingly writes better code than he does; deciding what to build stays human.
- Weak spot: compilers are deterministic, LLMs are not.
- Analysis → implication: the cleanest "engineering is not coding" case. The room should take the ratchet idea but also his own admission: code quality is not the human edge for long.

### 24. Simon Willison — co-creator of Django; independent
- Sells/gains: independent; reputation built on LLM tooling coverage.
- Q1: "I'm not reviewing every line of code that they write anymore" — 6 May 2026. https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/ — `opened primary`. Same post, para.: he calls it possible normalization of deviance, because Claude Code has no professional reputation and cannot take accountability.
- Earlier (prior notes): Oct 2025 "vibe engineering": agents reward classic good practice, so seniority gains value. Feb 2026: personal "cognitive debt".
- Analysis → implication: accountability, not code quality, is the line he cannot hand to a machine. Being the accountable human is a role, and roles get hired.

### 25. Addy Osmani — engineering leader and author (Google for most of the period; now says he helps build a coding tool)
- Q1: "AI tools help experienced developers more than beginners." — 4 Dec 2024, "The 70% problem". https://addyo.substack.com/p/the-70-problem-hard-truths-about — `opened primary`. Same post, para.: juniors accept output readily and get "house of cards" code; skills that matter: system design, requirements, QA.
- Q2: "every change still needs a person who owns the decision to ship it" — 28 Sep 2026, "The Code Nobody Reads". https://addyo.substack.com/p/the-code-nobody-reads — `opened primary`. Same post, para.: you no longer need to read all the code; trust comes from the checks built around a non-deterministic model; discloses he is not neutral.
- Changed? Yes: withdrew his review-every-line advice within two years.
- Analysis → implication: the shift from reviewing lines to owning decisions and building checks (tests, evals, harnesses). That is a teachable skill set a junior can show.

### 26. Gergely Orosz — The Pragmatic Engineer
- Sells/gains: paid newsletter and podcast with developer-tool sponsors.
- Q1: "'Coders' who aren't software engineers could be in less demand." — 6 Jan 2026. https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what — `opened primary`. Same piece, para.: solid engineers who understand generated software become more sought-after; what used to be senior expectations become entry-level baseline.
- Q2: "more agent-authored PRs in August 2026 on GitHub than human-authored ones" — 6 Oct 2026, "The state of the tech industry in 2026" (LDX3 keynote). https://newsletter.pragmaticengineer.com/p/the-state-of-the-tech-industry-in — `opened primary` (GitHub data given to him). Same piece, para.: "theater of code reviews" at most companies; reliability down; reduced junior recruitment; deep domain knowledge more in demand.
- Analysis → implication: the bar for entry rose to what used to be mid-level. That is the honest framing for juniors: not "no jobs" but "the first job now asks for more".

### 27. Steve Yegge — author (Vibe Coding), Gas Town creator
- Sells/gains: book and agent-orchestration projects.
- Q1: "Why hire a junior developer to write mediocre code" (when the LLM does it faster) — 24 Jun 2024, "The Death of the Junior Developer" (Sourcegraph blog). https://sourcegraph.com/blog/the-death-of-the-junior-developer — `opened primary`. Same post, para.: "Stock in junior contributors is down"; could see near-all code by prompting in 12-18 months.
- Q2: "we're going to lose around half the engineers from big companies" — 10 Feb 2026, The Pragmatic Engineer. https://newsletter.pragmaticengineer.com/p/steve-yegge-on-ai-agents-and-the — `opened primary`. Same interview, para.: to pay for tokens; but "It's not a replacement function. It's an augmentation function."; firms are not yet comfortable deploying code with no human.
- Changed? Mar 2025 "Revenge of the Junior Developer": juniors adapt faster and are cheaper (prior notes). So he moved from obituary to opportunity for juniors.
- Checked against data: 12-18 month all-code window missed (Google 50% end 2025); half of big-company engineers: not observed (Meta ~10%, Microsoft ~2% headcount drop, Amazon ~30,000 corporate across functions).
- Analysis → implication: the best tool forecaster, the worst headcount forecaster. Treat his tooling predictions as signal, his job numbers as provocation.

---

## 4. Economists and researchers

### 28. Erik Brynjolfsson — Stanford Digital Economy Lab
- Sells/gains: academic; co-founder of Workhelix (task-exposure analysis), which he discloses.
- Q1: "very much in the bullseye of being replaced" (asked about a $95k junior software engineer job) — 21 Jul 2026, Silicon Valley Girl podcast. https://marinamogilko.co/episode/72duHF7iZiU/ — `via secondary` (host's transcript page). Same answer, para.: "If you'd said senior, I would be much more positive"; Infosys still hires as many juniors but trains them explicitly on big-picture work; cutting the base turns the pyramid into a diamond.
- Q2: "because they just weren't being hired as much" (young workers' falling employment was not layoffs) — 18 Nov 2026, Revelio Labs "The Economics of Work" ep. 28. https://www.reveliolabs.com/podcasts/the-economics-of-work/erik-brynjolfsson-escaping-the-turing-trap — `via secondary` (podcast page transcript). Same episode, para.: the gap grew 13% to 16% to ~19% across paper versions; the remaining workers do more systems design and may be paid more.
- Also: 21 Jul 2026, MIT Sloan Management Review: in exposed jobs, those using AI to augment had growing employment, those automating had falling employment. https://sloanreview.mit.edu/audio/creating-shared-prosperity-with-ai-stanford-digital-economy-labs-erik-brynjolfsson/ — `opened primary` (host's transcript).
- Checked against data: his own ADP-based series; descriptive, not causal (prior notes).
- Analysis → implication: the mechanism is a closed door, not a layoff wave. So "no AI jobpocalypse" in aggregates and "juniors can't get hired" are the same fact seen from two heights.

### 29. Daron Acemoglu — MIT, Nobel economist
- Sells/gains: academic; advocate of "pro-worker AI".
- Q1: "Coding, software engineering is an exception" — 2 Jul 2026, Goldman Sachs Exchanges (16:30-20:00). https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-will-ai-impact-the-labor-market — `opened primary (crawler copy)`. Same answer, para.: net job losses within five years "less than two to four percent"; coding is the exception because parts are routinized and software engineers can prompt, troubleshoot and check the output; most vulnerable now are cognitive-routine tasks (customer service, back office, ~8-9 million US workers).
- Later (prior notes): Sep-Oct 2026 conceded his 2024 numbers would be higher today because agentic AI arrived faster; kept the slow-diffusion view.
- Analysis → implication: the sceptic economist singles out software as the place where AI bites first, for the same reason it works there: output is checkable by experts. That cuts both ways for developers.

### 30. David Autor — MIT
- Sells/gains: academic.
- Q1: "The concern is about devaluation of expertise." — 13 Jan 2026, Issues in Science and Technology interview. https://issues.org/david-autor-economist-ai-future-work/ — `opened primary (crawler copy)`. Same interview, para.: the decline in developer postings peaks Apr 2022, before ChatGPT, so attribution is unclear; translation and medical transcription are more threatened than software development.
- Q2: "parts of software work are becoming more elite and specialised" — 3 Jul 2026, CorD magazine (IEA World Congress, Belgrade). https://cordmagazine.com/interview/david-h-autor-professor-of-economics-mit-who-really-benefits-from-ai/ — `opened primary (crawler copy)`. Same answer, para.: while many more people can write apps with less training.
- Also (para.): 22 Apr 2026, The Weekly Show with Jon Stewart: software may bifurcate into a few highly paid specialists and a mass of low-paid "vibe coders" like Uber drivers (`via secondary` transcript, https://exa.ai/library/podcast/9pm87nycpb6/episode/f7wfsg7gncg). 18 Aug 2026, Moody's Inside Economics: firms hire fewer junior software engineers while hiring as many people in software; AI also makes juniors' applications "all look the same" (signal problem) (`via secondary`, https://exa.ai/library/podcast/hj1yd1j7xt4/episode/2wjst4dkczp).
- Analysis → implication: two forces at once: the floor democratises (everyone builds), the top specialises (engineers matter more). The middle, routine developer is where expertise loses value. The new signal problem means juniors need proof of work that AI cannot fake.

---

## 5. Skeptics

### 31. Gary Marcus — cognitive scientist, critic
- Sells/gains: critical newsletter; neurosymbolic AI advocacy.
- Q1: "amateurs using vibe-coding tools are asking for trouble" — 27 Apr 2026. https://garymarcus.substack.com/p/dario-amodei-hype-ai-safety-and-the — `opened primary`. Same post, para.: AI coding tools are "genuinely revolutionizing" software and astonishing in expert hands, and "that's exactly why we still need software engineers"; calls Amodei's remarks absurd hype.
- Earlier/later (prior notes): Oct 2025 asked "Is vibe coding dying?" (snippet); 11 Apr 2026 called Claude Code the biggest advance since the LLM, crediting scaffolding not scale.
- Changed? Yes on capability.
- Analysis → implication: even the chief sceptic now argues for engineers because the tools are powerful, not because they are weak.

### 32. Yann LeCun — Turing laureate; founder, AMI Labs
- Sells/gains: AMI Labs is a bet against LLMs as the road to human-level AI.
- Q1: "It's not going to replace you. It's going to make you more productive." — May 2026, NYU Tandon commencement (~06:35). https://blumify.io/t/youtube/pFscM-Z4rCE/yann-lecun-2026-nyu-tandon-commencement-speech — `via secondary` (third-party transcript of official video). Same speech, para.: figuring out what to build stays human; AI turns engineers into managers of virtual teams; go to grad school.
- Also (prior notes, `opened primary`): 15 May 2026, Unsupervised Learning: LLMs are good programmers but not architects or computer scientists; they succeed in code and maths because answers can be checked.
- Analysis → implication: his coding carve-out (checkability) matches Acemoglu's and Karpathy's. Note that a commencement speech is the setting where reassurance is expected.

### 33. Ed Zitron — newsletter writer, podcaster
- Sells/gains: subscription business built on AI criticism.
- Q1: "LLMs can write all code, but that doesn't mean the code is good" — 17 Mar 2026, "Why Are We Still Doing This?". https://www.wheresyoured.at/why-are-we-still-doing-this/ — `opened primary`. Same post, para.: if an LLM writes all your code you are no longer becoming a better engineer; asks where the replaced engineers actually are; users do not know the real cost of these services.
- Checked against data: his quality and review-burden points match Orosz (theatre of reviews) and Meta (incidents +40%). Dan Luu marked 25 of 27 of his predictions wrong, mostly about model ceilings and company failure, none specifically on coding (prior notes).
- Analysis → implication: right about the gap between fast and good; weak on capability. His learning point (you stop improving if you stop reading) is the same one DHH and antirez raise from the pro-AI side.

---

## 6. Added voices (important, not on the brief)

### 34. Jack Dorsey — CEO, Block (Square, Cash App)
- Sells/gains: Block stock rose ~25% after hours on the news (Reuters).
- Q1: "the majority of companies will reach the same conclusion" ("within the next year") — 26 Feb 2026, shareholder letter, cutting Block from 10,000+ to just under 6,000. https://www.sec.gov/Archives/edgar/data/1512673/000119312526076557/d108590dex991.htm — `opened primary` (SEC exhibit via crawler). Same letter, para.: "intelligence tools have changed what it means to build and run a company"; a significantly smaller team can do more and better; "I think most companies are late."
- Q2: "paired with smaller and flatter teams" (the tools enabling a new way of working) — 26 Feb 2026, note to staff posted on X. https://www.newsweek.com/read-jack-dorseys-full-statement-block-layoffs-11590862 — `via secondary` (full note reproduced).
- Checked against data: due ~Feb 2027. So far not a majority: overall US postings +5.1% y/y, software postings +23.4% (Indeed). Some big firms did move (Meta May 2026, Microsoft buyouts Oct 2026).
- Analysis → implication: the market rewarded an AI-justified cut with a 25% pop. That incentive exists whether or not the AI did the work, which is why "AI layoffs" headlines need checking.

### 35. Kevin Scott — CTO, Microsoft
- Q1: "authorship is still going to be human" — 31 Mar 2025, 20VC. Reported at https://www.techspot.com/news/107411-microsoft-cto-predicts-ai-generate-95-percent-code.html — `via secondary`. Same interview, para.: 95% of code AI-generated within five years (by ~2030); from "input master" to "prompt master"; hard computational problems still need computer scientists.
- Checked against data: due 2030; leaders at 50-90%+.
- Analysis → implication: the most aggressive code-share forecast came paired with the clearest statement that code share is not job share.

### 36. Werner Vogels — CTO, Amazon
- Q1: "Will AI make me obsolete? Absolutely not. If you evolve." — 4 Dec 2025, final re:Invent keynote (~08:34). https://www.youtube.com/watch?v=3Y1G9najGiI — `opened primary` (official AWS Events captions via crawler). Same keynote, para.: "Will AI take my job? Maybe."; vibe coding is fine only if you pay close attention, otherwise it is gambling; you will write less code and review more, and rebuilding comprehension during review is "verification debt"; the work is yours, not the tools'.
- Analysis → implication: the best single vocabulary for skills: curiosity, systems thinking, communication, ownership, and the named risk of verification debt.

### 37. Boris Cherny — creator of Claude Code, Anthropic
- Q1: "coding is solved for the kinds of coding that I do" — 26 May 2026, Platformer. https://www.platformer.news/boris-cherny-interview-ai-jobs/ — `opened primary`. Same interview, para.: critique of his Feb 2026 "coding is solved" was "totally right"; not solved for enterprise codebases like NASA's; coding is a small part of engineering; predicts 100 times more engineers, though "I don't think we're going to call them engineers"; advice to grads: if entrepreneurial, start a startup.
- Checked against data: his Feb 2026 "the title software engineer starts to go away" falls due 31 Dec 2026; 8,186 such ads open at tracked firms on 17 Nov 2026 (Hiring Tempo, prior notes).
- Analysis → implication: the product builder's own scope note (simple, new codebases) is the right caveat for every demo the audience sees.

### 38. Geoffrey Hinton — Nobel/Turing laureate
- Q1: "there'll be very few people needed for software engineering projects" (in a few years, once AI does months-long projects) — 28 Dec 2025, CNN State of the Union. https://transcripts.cnn.com/show/sotu/date/2025-12-28/segment/01 — `prior notes` (CNN rush transcript opened 24 Nov); wording re-seen today in third-party transcripts.
- Same month, BI (para., prior notes `via secondary`): a CS degree stays valuable for a long time; being a competent mid-level programmer will not be a career much longer.
- Checked against data: due ~2028 (a "few years").
- Analysis → implication: always quote both halves: the degree yes, the mid-level coding career no.

### 39. Andrew Ng — DeepLearning.AI, AI Fund
- Sells/gains: courses, including coding with AI.
- Q1: "This advice will be seen as some of the worst career advice ever given." (advice not to learn to code) — 13 Mar 2025, LinkedIn. https://www.linkedin.com/posts/andrewyng_deepseek-r1-uncensored-qwq-32b-puts-reasoning-activity-7305984835708141570-XVKU — `opened primary`. Same post, para.: as coding becomes easier, more people should code, not fewer.
- Later (prior notes): Aug 2026: don't code by hand, but learn the language of computers.
- Analysis → implication: agrees with "everyone builds" more than it seems; disagrees only on whether understanding code is optional.

### 40. Amjad Masad — CEO, Replit
- Sells/gains: Replit sells an AI app builder to non-programmers.
- Q1: "suddenly say they don't write or read code anymore" (the engineers who attacked his 2025 advice) — 29 Oct 2026 (post ID), LinkedIn. https://www.linkedin.com/posts/amjadmasad_in-2025-i-got-canceled-for-saying-you-shouldnt-activity-7521641412849836033-6r-- — `opened primary`. Same post, para.: his 2025 advice was to learn to think, break down problems, communicate with people and machines; "AI is better than human at coding."
- Checked against data: undated, unscorable; Replit was hiring engineers when he said it in 2025 (prior notes).
- Analysis → implication: "don't read code" describes elite practitioners at AI-native firms; Shopify and IBM still require a human owner who understands the layer below.

### 41. Bill Gates — Microsoft co-founder
- Sells/gains: discloses ongoing financial ties to tech and work with Microsoft and other AI firms (in the essay).
- Q1: "software engineering will generate new demand as the costs go down" — 26 Aug 2026, Gates Notes. https://www.gatesnotes.com/a-turbulent-ai-era-and-critical-choices-to-make — `opened primary (crawler copy)`. Same essay, para.: the jobs most at risk are entry- and mid-level; software engineering may be among the first affected, but net loss there will be smaller "as long as some tasks, such as design, are better done by humans"; worried for young people entering a workforce with fewer entry-level openings.
- Changed? Moved away from the reassuring 2025 position (prior notes: "programming safe for 100 years" has no primary source).
- Analysis → implication: the most balanced elder statement: Jevons protects software more than other fields, but not the entry rung.

---

## 7. Camps

Membership is by what each person argued most consistently, not by temperament. Several people sit in two camps; those are marked.

### Camp A. "AI replaces developers" (fewer developers needed)
- Members: Amodei (long-run, rung 5 of his ladder), Suleyman (Feb 2026, before re-explaining), Musk, Zuckerberg (2025), Dorsey, Siemiatkowski, Benioff (for Salesforce), Yegge (big-company headcount), Hinton (mid-level coders), Gates (entry and mid-level; partial), Masad (as practice, not headcount). Data witness, not advocate: Brynjolfsson.
- Core assumption: in the near term the demand for software does not expand fast enough to absorb the drop in labour per unit of software; firms bank the savings as smaller teams, and the first cut falls on work that is mostly execution (juniors).
- Strongest evidence:
  - Code share at leaders: Google 75% (Apr 2026), IBM ~50% (Nov 2026), Anthropic >90% (Sep 2026, self-reported).
  - Juniors: Anthropic junior share of technical hires 27% to 9%; Stanford/ADP ~19% employment gap for ages 22-25 in exposed occupations, through non-hiring; Indeed entry and mid postings ~4% below Jan 2025 while senior +19%.
  - Firm actions: Block -40%+; Klarna -50% via freeze plus attrition; Salesforce engineering flat for two years while revenue grew; Meta -10%; Microsoft headcount down and 60,000 exit offers; software postings index still 82 vs Feb 2020.
- Who profits if believed: labs and agent vendors (valuation, "digital labor" pricing set against salaries; Anthropic and OpenAI near IPOs); CEOs whose stock rises on AI-justified cuts (Block +25%); any firm correcting pandemic over-hiring that prefers the AI label.
- What would prove it wrong: software postings keep rising in absolute terms through 2027 while code share climbs; cutters rehire or reverse (Klarna support partly did); the senior-led rebound spreads to entry level; quality incidents force re-staffing (Meta incidents +40%, Microsoft's quality head); output measures that matter (releases, features) stay far below code volume (Meta +220% code vs +36% features; 8x code vs ~30% more releases in the 100k-developer study, prior notes).
- Implication: the camp is right about the entry rung now and wrong so far about the profession. Its claims are strongest where firms control the outcome (their own hiring).

### Camp B. "Everyone builds" (natural language as the programming language; vibe coding)
- Members: Huang (2024), Karpathy (2023-25, the floor half), Nadella ("anyone can be a software developer"), Masad, Cherny ("builders", 100x), Kevin Scott ("makes everyone a programmer", para.), Lütke (PRs from chat), Siemiatkowski (business people who code), Autor (democratised floor), Brynjolfsson ("everybody's a coder now", para.). Vendors in prior notes: Rauch (Vercel), Osika (Lovable).
- Core assumption: the bottleneck in software was translating intent into formal code; remove it and builders multiply, with domain experts shipping directly.
- Strongest evidence: Anthropic non-technical staff coding-agent sessions 2 to 90 a month (Aug 2025 to May 2026); Shopify says up to ~50% of PRs now start in chat conversations; GitHub commits nearly tripled early 2026 (Huang, GTC Taipei); Brynjolfsson's Stanford students all shipped running code; Klarna CEO says business people with AI now outbuild engineers who don't know the business.
- Who profits: app-builder vendors (Replit, Lovable, Vercel); compute sellers (more "programmers" means more inference); platform owners (Microsoft Copilot, GitHub); course sellers.
- What would prove it wrong: non-programmer apps failing in production (prior notes: a 2025 scan found ~170 of 1,645 Lovable-featured apps exposing data, CVE-2025-48757); firms keeping a trained human owner on every change (Shopify, IBM do); regulated domains refusing unreviewed code (Vogels: "you can't go to the regulator"); Karpathy himself splitting the floor (vibe coding) from the bar (agentic engineering).
- Implication: true as an interface claim, misleading as a skills claim. It enlarges the number of people who build and, by doing so, raises the value of the people who can make what they built reliable.

### Camp C. "Hype skeptics"
- Members: Marcus, Zitron, LeCun (on the LLM path), Torvalds (2024), Fowler (bubble), Acemoglu (macro scale), Autor (attribution), Jassy (on AI as the cause of his cuts). Prior notes: Narayanan and Kapoor.
- Core assumption: sellers inflate both capability and job-loss claims; reliability, verification, adoption and cost slow diffusion; many "AI layoffs" are over-hiring corrections.
- Strongest evidence: every dated mass-replacement forecast that has come due missed (Schmidt Apr 2026, Zuckerberg 2025, Garman's 24 months by his own grading, Amodei's 90% industry-wide); Indeed (18 Nov 2026): "scant evidence" of an AI-driven jobpocalypse; Pichai's own 10% velocity against ~30% code share; Meta's code/feature/incident gap; Zuckerberg's "hasn't accelerated"; Autor: developer-posting decline began Apr 2022, before ChatGPT; Jassy: cuts "not really AI-driven".
- Who profits: critics' subscription businesses (Zitron, Marcus); rival research bets (LeCun's AMI Labs); incumbents reassuring staff; audiences who want comfort.
- What would prove it wrong: on coding capability they have largely already conceded (Marcus, Torvalds, LeCun, Acemoglu all moved in 2026). On jobs: a sustained fall in total software employment while output rises; the junior gap keeps widening (Brynjolfsson: getting bigger with each update); Amodei's Davos end-to-end claim landing by Jan 2027.
- Implication: sceptics lost the argument about whether agents write working code and are winning the argument about what that implies. Their best point for juniors: the jobs data is noisier and slower than the headlines.

### Camp D. "Engineers matter more"
- Members: Booch, Beck, Osmani, Orosz, Willison, Vogels, Garman, Krishna/LaMoreaux, Thawar, Huang (2026), Nadella (Nov 2026), Altman (Oct 2026), Pichai (hiring), Kevin Scott, Ng, DHH (2026), antirez (with his doubt), Gates (software net loss smaller), Acemoglu and LeCun (verifiability carve-out), Autor (elite side). Prior notes: Jeff Dean (specification matters more), Narayanan and Kapoor.
- Core assumption: code was never the bottleneck; software demand is elastic (Jevons); cheap generation raises the value of specification, verification, systems design, domain knowledge and accountability.
- Strongest evidence: US software postings +23.4% y/y in Nov 2026 (Indeed), 71% of the increase senior, 37% AI in the title; Alphabet headcount up while AI code share went 25% to 75%; Anthropic tripled headcount with an engineer-to-PM ratio of ~17:1 and rising, and named human attention as its bottleneck; Amazon, IBM and Shopify hiring juniors into redesigned roles; Microsoft's 11-developer "software factory".
- Who profits: tool vendors who need professional customers (AWS, GitHub); consultancies, educators and newsletters (Thoughtworks, Beck, Orosz); incumbents' engineering culture; and the audience itself (comfort).
- What would prove it wrong: the senior skew persists and entry never recovers (pyramid becomes Brynjolfsson's diamond, then the senior pipeline thins); agents take over verification too (Osmani already dropped reading every line; Charity Majors calls humans weak validators, prior notes); senior postings start to fall; Amodei's rungs 3-4 (90-100% of end-to-end SWE tasks) are reached.
- Implication: "matter more" is a statement about engineers who already have judgment. The camp's own weak spot is how a junior acquires that judgment when the practice work is automated; its best answers are Beck's "manage for learning", IBM's rewritten junior roles and Shopify's "explain two layers below".

### Cross-camp patterns
- **Stake gradient.** The boldest dated claims came from people selling agents or justifying cuts (Amodei, Musk, Suleyman, Zuckerberg, Benioff, Dorsey). The most cautious came from people with least to sell (Fowler, Torvalds, Autor).
- **2026 walk-backs and revisions (dated):** Cherny 26 May; Suleyman 8 Jun; Garman 23 Jun; Zuckerberg 2 Jul; Altman 21 Oct; Siemiatkowski (Feb 2026: "had to pay a lot" for the all-jobs line); Benioff (augment, not replace, then 4,000 support cuts); Krishna (2023 pause, then 2026 tripling); Lütke (revised his early-career view); Karpathy, DHH, antirez, Osmani, Willison (practitioners who changed on evidence).
- **Where every camp agrees, in their own words:** a human must own what ships (Vogels, Osmani, Willison, Karpathy, Shopify); understanding the layer below still matters (Torvalds, Thawar, Garman); juniors are the first place it shows (Amodei, Hassabis, Brynjolfsson, Gates, Yegge).
- **Where agreement ends:** whether the human part is permanent; how many engineers are needed; whether a person must read the code.

---

## 8. Top quote-plus-analysis pairs for the stage (picked for the talk)

1. **Huang, Ezra Klein, 23 Sep 2026:** "That last part is completely false." Then, on juniors: "Wait two years." — Purpose vs task is the best frame in the talk. But his junior answer is about whether graduates will be capable, not whether firms will hire them; due ~Sep 2028.
2. **Amodei, Dwarkesh, 13 Feb 2026:** "there's 90% less demand for SWEs, which I think will happen" — The man behind "90% of code" calls that metric weak and says the jobs rung is further down; his own firm's junior hiring share fell from 27% to 9%. Quote the ladder, not the headline.
3. **Pichai, Apr 2026:** "75% of all new code at Google is now AI-generated and approved by engineers" — set against his own Jun 2025 metric of a ~10% velocity gain and rising Alphabet headcount. Code share is not productivity, and not job share.
4. **Garman, Aug 2025 and Jun 2026:** "That's the dumbest thing I've ever heard" (replacing juniors) and "we probably didn't exactly hit it" (his 24-month forecast) — The only CEO found who graded himself. Amazon's 11,000 interns are a pipeline decision, made in the same years as ~30,000 corporate cuts.
5. **Siemiatkowski, 2025 to 2026:** "AI can already do all of the jobs that we, as humans, do" → "lower quality" → "engineers tend to be very technical but don't understand the business as well" — Klarna shrank by freezing hiring, not by replacing engineers; the scarce person he now pays for knows the business and can direct AI.
6. **Brynjolfsson, 18 Nov 2026:** "because they just weren't being hired as much" — The mechanism behind every junior statistic: a closed door, not a layoff wave. That is why aggregate data says "no apocalypse" and graduates say "no offers".
7. **Nadella, 18 Nov 2026:** "software engineering is very much alive and, in fact, is going to thrive" — said weeks after offering exits to 60,000 staff. The profession and the incumbent move in opposite directions; the job to aim at is building the "software factory", not being what it replaces.
8. **Dorsey, 26 Feb 2026:** "the majority of companies will reach the same conclusion" (within a year) — A checkable bet, due Feb 2027, made while the stock jumped ~25%. So far most firms have not followed; software postings rose.
- Bench: antirez ("I have a doubt only regarding young programmers..."), Beck ("manage juniors for learning, not production"), Suleyman ("I said tasks, so that does not mean jobs"), Altman ("Coders are never gonna be busier" against the 71% senior skew), Vogels ("Will AI make me obsolete? Absolutely not. If you evolve.").

---

## Gaps

- **Exact wording not verified today:** Garman's Jun 2024 leaked "most developers not coding in 24 months" (paraphrase via BI only); Torvalds Oct 2024 "90% marketing" (snippet only); Karpathy's Dec 2025 and Feb 2026 X posts (permalinks unverified; his own Apr 2026 blog repeats the "behind" line); Lütke memo seen only in reproductions (X not fetchable); Hinton's CNN line re-seen today only in third-party transcripts.
- **Paywalled or blocked primaries:** Bloomberg (Klarna May 2025, Siemiatkowski Feb 2025 all-jobs line, Microsoft layoff analysis), Reuters (Meta town hall and investigation), Axios (read via crawler), Goldman Sachs, WEF, Gates Notes, CorD (crawler copies). Open these by hand before quoting on stage.
- **Third-party transcripts only:** Zuckerberg on Rogan, Altman Town Hall and Forward Future, Musk xAI all-hands, LeCun NYU commencement, Lütke Knowledge Project, Brynjolfsson podcasts, Siemiatkowski 20VC. Play the clip at the timestamp before quoting.
- **Unaudited company numbers:** Anthropic >90% code (S-1, via secondary), IBM "nearly half", Klarna revenue per employee, Salesforce engineering "flat ~15,000" (Fortune's figure; Dec 2024 he said ~13,000), IBM "tripling" entry hires (no count disclosed), Shopify 1,000 interns.
- **Missing data to score claims:** no public engineer-only headcount for Google, Microsoft or Meta after early 2026; no independent defect or incident data comparing AI-heavy and conventional teams beyond Meta's leaked figures; no follow-up on whether Klarna's "Uber-style" human support scaled.
- **Not covered here:** Chinese and Indian tech leaders (e.g. Sridhar Vembu, Nov 2026, snippet only in prior notes; Infosys/TCS hiring statements, beyond Brynjolfsson's Infosys anecdote), European employers, and anything on Iran, remote hiring under sanctions, or Persian-language work. All data cited is US-centric.
- **Open dated claims falling due soon:** Musk (31 Dec 2026), Cherny "software engineer title fades" (31 Dec 2026), Amodei Davos end-to-end (~20 Jan 2027), Dorsey "majority of companies" (~Feb 2027), Suleyman (Feb-Aug 2027), Hinton (~2028), Huang "wait two years" (~Sep 2028), Kevin Scott 95% (2030), Amodei Axios 10-20% unemployment (May 2030). Recheck any that pass before the event.
- **Not re-opened today (used from prior notes):** Jeff Dean, Hashimoto, Ronacher, Charity Majors, Narayanan and Kapoor, Rauch, Osika, Schmidt; METR and Hiring Tempo data.
