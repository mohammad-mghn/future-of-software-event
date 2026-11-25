# Camps C, D, E: "the craft transforms", "engineers will last", "the capability claims are oversold"

Research date: 2026-11-24. Window: 2023-11-24 to 2026-11-24. Older items are marked HISTORICAL.

**How to read the tags (never upgraded):**
- `OPENED-PRIMARY` = I retrieved the speaker's own page, post, recording transcript or official transcript, and read the relevant passage on it. After drafting, key phrases for 57 text pages were re-checked directly against the live page source: 52 matched; the 5 that could not be matched live are listed in (a).
  - Exceptions inside this tag, disclosed: (a) gatesnotes.com, weforum.org, oreilly.com and mastersofscale.com block direct automated fetching, and the Every (Levie) page did not show the passage to a direct fetch; these passages were read in a crawler's full-text copy of the same URL, so check them once by hand in a browser. (b) YouTube items were read in machine captions of that video and not watched, so wording may be off by a word; confirm the timestamp before playing a clip.
- `OPENED-SECONDARY` = I opened journalism or a third-party transcript that reports the statement.
- `SNIPPET-ONLY` = I saw only a search extract. Open it before using it on stage.

**Quotation rule used here:** everything is paraphrase. Only one verbatim line appears in this file (the Karpathy line in "Common ground"). Words in quotation marks elsewhere are coined labels or titles ("vibe coding", "70% problem"). If you want exact words on a slide, lift them from the linked recording at the timestamp.

**Text found on web pages was treated as data.** No page tried to instruct the reader in a way that affected this work.

---

## Q1. Camp C: "The craft is transforming; judgment matters more." Who said what, with what stake, and how did it age?

### Takeaway
Nearly everyone in this camp moved in the same direction between mid-2025 and late 2026: they accepted that agents write most code, then relocated the craft to specification, understanding, verification and accountability. Their prediction that *seniors* gain leverage has held. Their hope that *juniors* would gain too has not shown up in hiring data so far. An internal split opened in 2026 over whether humans still need to read the code.

### Cited Findings

**C1. Kent Beck** — creator of Extreme Programming and TDD; newsletter author, speaker, consultant
- Stake: sells a newsletter, talks and consulting on "augmented coding". His own books are what he says lost value, which cuts against his interest.
- HISTORICAL (2023-04-19): after trying ChatGPT he said most of his skills had lost economic value while a small remainder gained enormous leverage, and that he did not yet know which were which. — [Newsletter](https://newsletter.kentbeck.com/p/90-of-my-skills-are-now-worth-0) `OPENED-PRIMARY`
- 2025-09-15: substitution and Jevons pull in opposite directions and nobody can say which wins; so build skills useful in both worlds (understanding, integration, judgment, taste). — [Programming Deflation](https://newsletter.kentbeck.com/p/programming-deflation) `OPENED-PRIMARY`
- 2025-12-12: juniors become a *better* bet if managed for learning rather than output, because agents shorten the unproductive period. — [The Bet On Juniors Just Got Better](https://newsletter.kentbeck.com/p/the-bet-on-juniors-just-got-better) `OPENED-PRIMARY`
- 2026, Craft conference, Budapest (outline page dated 2026-06-04): says two of his books are effectively obsolete, that hand-polished code now has no economic value, that programmers are going through grief, and that he tells himself there will be *more* programmers employed in five years after a disruptive stretch in which big employers shed jobs and laid-off engineers start companies. He frames this as the story he tells himself at night, not a proof. — [Video, official CraftHub channel](https://www.youtube.com/watch?v=amQnub3sHIQ) `OPENED-PRIMARY`; backup [talk outline](https://tonytvo.github.io/code-craft-2026/forest-and-desert-and-genie-kent-beck-craft-2026/) `SNIPPET-ONLY`
- 2026-10-20, podcast, roughly 41:00–46:30: expects demand for programming to rise; not worried for juniors or for seniors full of ideas; worried for the middle, people mainly collecting a paycheck. Labels this directional, not confident. — [Transcript](https://howmanyctospod.com/episodes/92-the-human-needs-augmented-coding-conversation-kent-beck) `OPENED-PRIMARY` (warning: the transcript swaps speaker names; Beck's words appear under "Scott")
- How it aged: demand claim is open until about 2031. Junior claim is so far contradicted by hiring data (see Q5). His honesty about grief has aged best of all.

**C2. Martin Fowler** — author; Chief Scientist, Thoughtworks
- Stake: Thoughtworks sells AI-assisted delivery. He still refuses to predict.
- 2025-08-28: asked whether to enter the profession or whether juniors are finished, he says he has no idea and distrusts anyone who claims to know; calls it obviously a bubble that will still leave real value; says LLMs may move software into the non-deterministic world other engineers already live in. — [Some thoughts on LLMs](https://www.martinfowler.com/articles/202508-ai-thoughts.html) `OPENED-PRIMARY`
- 2026-03-16: better models have sped up the shift to "supervisory engineering"; this is a traumatic change in skills, but a change in what programming means rather than its end. — [Fragments, 16 Mar 2026](https://www.martinfowler.com/fragments/2026-03-16.html) `OPENED-PRIMARY`
- 2026 (Pragmatic Summit, quoted 2026-10-06): nothing in his career matches AI in magnitude, larger than objects, the internet or agile. — [Orosz, State of the tech industry](https://newsletter.pragmaticengineer.com/p/the-state-of-the-tech-industry-in) `OPENED-SECONDARY`
- 2026-06-28/30, Thoughtworks retreat in Switzerland (Chatham House, so not personally attributable): verification, not generation, is the bottleneck; several sessions independently raised an apprenticeship crisis; engineers with 7–10 years were identified as under the most strain. — [PDF report](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future_of_software_engineering_europe_2026.pdf) `SNIPPET-ONLY` (long extract); index page [FutureOfSoftwareDevelopment](https://www.martinfowler.com/bliki/FutureOfSoftwareDevelopment.html) `OPENED-PRIMARY`
- How it aged: the refusal to forecast is the safest position of 2025 and still stands. "Bubble will pop" is untested.

**C3. Simon Willison** — co-creator of Django, independent developer and blogger
- Stake: independent; his audience and reputation rest on LLM tooling coverage.
- 2025-10-07: proposes "vibe engineering" for accountable, skilled use of agents; argues agents reward classic good practice (tests, review, docs, QA), so seniority gains value. Later adopts "agentic engineering". — [Vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/) `OPENED-PRIMARY`
- 2026-05-06: admits the line he drew is blurring for him. As agents became reliable he stopped reviewing every line, even for production; feels guilt; names it a possible normalization of deviance because an agent has no reputation and cannot be accountable. — [Blog](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/) `OPENED-PRIMARY`; backup [Heavybit podcast](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison) `SNIPPET-ONLY`
- 2026-02-15: reports experiencing cognitive debt himself, losing the mental model of projects built by prompting. — [Blog](https://simonwillison.net/2026/Feb/15/cognitive-debt/) `OPENED-PRIMARY`
- How it aged: the rarest thing in the debate, a public correction of his own clean distinction within seven months.

**C4. Addy Osmani** — engineering leader and author (Google for most of this period; a July 2026 Latent Space piece calls him a former Google engineering leader)
- Stake: in Sept 2026 he says he is not neutral because he helps build a tool that writes code, and describes Anthropic's practice from the inside.
- 2024-12-04: the "70% problem": AI quickly gets you most of the way; the last stretch to production still needs engineering knowledge; tools help seniors more than juniors. He expected the gap to narrow. — [Substack](https://addyo.substack.com/p/the-70-problem-hard-truths-about) `OPENED-PRIMARY`
- 2026-01-28: revises to an "80% problem"; errors moved from syntax to concepts; warns of comprehension debt and describes shipping a feature he could not explain three days later. — [Blog](https://addyosmani.com/blog/the-80-problem-in-agentic-coding/) `OPENED-PRIMARY`
- 2026-09-28: withdraws his own advice to review every line. Line-by-line reading is going away for much code; what must remain is a person who decides what ships and is answerable. Trust has to come from the checks around non-deterministic generators. Cites a study in which only 14% of classified review comments were about defects; most were teaching and context. — [The Code Nobody Reads](https://addyo.substack.com/p/the-code-nobody-reads) `OPENED-PRIMARY`
- How it aged: the percentage expired; the shape (last-mile judgment) survived. He changed employer-side interest along the way, which he discloses.

**C5. Gergely Orosz** — author, The Pragmatic Engineer
- Stake: paid newsletter and podcast with developer-tool sponsors.
- 2026-01-06: assuming AI writes about 90% of code in many teams in 2026, engineers with engineering skills (requirements, testing, reliability, architecture) become more valuable; "coders" without them less; quality may drop; change will be fast. — [Article, paywall removed 2026-09-24](https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what) `OPENED-PRIMARY`
- 2026-10-06 (LDX3 New York keynote, video embedded): GitHub data given to him show more agent-authored than human-authored PRs in Aug 2026; code review has become theatre in many firms; quality and reliability are down; testing matters as much as before; junior recruitment reduced. — [Article + video](https://newsletter.pragmaticengineer.com/p/the-state-of-the-tech-industry-in) `OPENED-PRIMARY`
- How it aged: the January premise looks right for AI labs, startups and Big Tech, which is his stated sample. Both the good and the ugly halves came true.

**C6. Armin Ronacher** — creator of Flask; company owner; builds with the Pi agent
- 2026-02-13: code creation outran review; as long as machines cannot carry responsibility, humans must understand output, so he is still the bottleneck, as he always was. Admits he does not know how to make the new pace work. — [The Final Bottleneck](https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/) `OPENED-PRIMARY`
- 2026-06-23: loops work brilliantly for porting, performance search, security scanning; for durable code he thinks hands-off output had become *worse* than the previous autumn: over-defensive, locally reasoned, duplicated. Concedes he may stop caring about comprehension in a few years. — [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) `OPENED-PRIMARY`
- 2026-08-24: anxiety is reasonable, anger usually picks the wrong villain; owners and founders do not know the future either; stay curious and earn the right to decide when to resist. — [Anger, Anxiety and Agency](https://lucumr.pocoo.org/2026/8/24/anger-anxiety-agency/) `OPENED-PRIMARY`
- How it aged: his code-quality complaint is shared by Karpathy and Hashimoto and disputed by antirez and Thorsten Ball. Still open.

**C7. Mitchell Hashimoto** — co-founder of HashiCorp, creator of Ghostty
- Stake: said in Feb 2026 he had no skin in the game; founded Superlogical in July 2026 (that fact `SNIPPET-ONLY`, [SuperX profile](https://superx.so/creators/mitchellh)).
- 2026-02-05: former sceptic's six-step path: drop the chatbot, redo your own work with agents, learn where they fail, build a "harness" so each mistake never recurs. Background agent running perhaps 10–20% of the day. — [Post](https://mitchellh.com/writing/my-ai-adoption-journey) `OPENED-PRIMARY`
- 2026-05-15: believes whole companies are in "AI psychosis": metrics look healthy while systems become incomprehensible, test coverage rises while understanding falls; infrastructure already learned that fast recovery does not replace resilience. — [His Mastodon post](https://hachyderm.io/@mitchellh/116580433508108130) `OPENED-PRIMARY`
- 2026-05-28: agent loop improved a renderer from 88 ms to about 1.5 ms per frame; his own hand-written design was about 0.02 ms. Point: without systems understanding you accept the first impressive number. He repeats that he likes AI. — [SuperX mirror of X post](https://superx.so/creators/mitchellh) `SNIPPET-ONLY`
- How it aged: widely echoed; no public defect-rate data proves or refutes it.

**C8. Salvatore Sanfilippo (antirez)** — creator of Redis
- Stake: back at Redis; open-source author; explicitly worried about centralization and about layoffs.
- 2025-05 (about 29 May; derived from the page's "543 days ago"): humans still far more capable than LLMs, shown with a Redis bug. — [news/153](https://antirez.com/news/153) `OPENED-PRIMARY`
- 2026-01-11: reverses: for most projects writing code yourself no longer makes sense except for fun; urges sceptics to test for weeks, not minutes; fears for people who will be fired; building remains the joy. — [news/158](https://antirez.com/news/158) `OPENED-PRIMARY`
- 2026-07 (about 13 July; derived from "133 days ago"): control the ideas, not the code; reading every line is often pointless; spend the time on design, QA and direction. His single doubt is young programmers who cannot yet build a mental model. Still reviews Redis, out of respect for users. — [news/169](https://antirez.com/news/169) `OPENED-PRIMARY`
- How it aged: the cleanest 14-month conversion on record, with receipts.

**C9. DHH (David Heinemeier Hansson)** — creator of Ruby on Rails; co-owner, 37signals
- Stake: runs a small software firm that gains from cheaper building; ships Omarchy with agents.
- 2025-07-12, Lex Fridman #474, about 1:28:50–1:34:20: keeps AI in a separate window; letting it drive made him feel his competence leaving; one learns by typing; would rather retire than stop programming. — [Official transcript](https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/) `OPENED-PRIMARY`
- 2026-01-07: promotes agents to production-grade collaborators; still far from 90% AI-written if he holds quality; pure vibe coding remains aspirational. — [Promoting AI agents](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) `OPENED-PRIMARY`
- 2026-08-09: instant execution is nirvana for people with ideas; deliberately omits caveats. — [Endless execution](https://world.hey.com/dhh/endless-execution-4157e065/) `OPENED-PRIMARY`
- 2026-10-06 (after Rails World, 2026-09-23): hand-typing code is not economically viable for most; only those refusing agents need worry; expects a bloom in software; tells programmers they are needed. — [Over my dead pencil](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647) `OPENED-PRIMARY`; keynote reports [jamesm.blog](https://jamesm.blog/ai/david-heinemeier-hansson-on-ai/) `SNIPPET-ONLY`
- How it aged: his own July 2025 fear (you stop learning when you stop typing) has not been answered, only outweighed. Best single arc for a stage.

**C10. Charity Majors** — co-founder, Honeycomb (observability vendor)
- Stake: Honeycomb sells exactly the production-feedback discipline she prescribes.
- 2024-06-10 (republished 2024-12-31): generating code is easy, good code is not; software is an apprenticeship industry and must keep hiring juniors. — [Stack Overflow blog](https://stackoverflow.blog/2024/06/10/generative-ai-is-not-going-to-build-your-engineering-team-for-you/) `OPENED-PRIMARY` (title and opening read, plus a check that the apprenticeship and junior passages are present; not re-read in full)
- 2026-06-15: since the Nov 2025 models AI writes code roughly as good as a median engineer for common patterns; code becomes disposable; non-determinism requires *more* discipline; do not rest the case for humans on being the best quality gate, because humans are weak validators. — [charity.wtf](https://charity.wtf/p/ai-demands-more-engineering-discipline) `OPENED-PRIMARY`
- 2026-06-02: suggests turning the fight into one engineering question, namely what it would take to feel safe shipping unread code. — [charity.wtf](https://charity.wtf/p/ai-enthusiasts-are-in-a-race-against) `SNIPPET-ONLY`
- How it aged: 2024 code-quality half superseded by her own 2026 post; apprenticeship half looks prophetic.

**Supporting Camp C voices (short)**
- **Thorsten Ball** (Amp; agent vendor). 2026-11-21: programming alone is no longer enough; learn how software is used and sold, and live a life that gives you reasons to build. — [Joy & Curiosity #107](https://registerspill.thorstenball.com/p/joy-and-curiosity-107) `OPENED-PRIMARY`. 2026-08-30: dismisses the idea that engineers will be needed to clean up after models. — [#97](https://registerspill.thorstenball.com/p/joy-and-curiosity-97) `SNIPPET-ONLY`. He is the radical edge of this camp.
- **Birgitta Böckeler** (Thoughtworks). 2026-04-02: agents lack social accountability, aesthetic disgust and organisational memory; a "harness" externalises some of that; it should direct human input to where it matters, not remove it. — [Harness engineering](https://www.martinfowler.com/articles/harness-engineering.html) `OPENED-PRIMARY`
- **Geoffrey Litt** (Notion, disclosed). 2026-07 AI Engineer talk: agents verify themselves better over time, so the durable reason to understand code is to *participate* in deciding what comes next; proposes quizzes before shipping. — [Talk text](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck) `OPENED-PRIMARY`. 2025-10-24: be a surgeon, not a manager. — [Post](https://www.geoffreylitt.com/2025/10/24/code-like-a-surgeon) `SNIPPET-ONLY`
- **swyx** (Latent Space; runs AI Engineer conferences; says he saw the practice at Cognition). HISTORICAL 2023-06-30: predicted "AI Engineer" as the decade's highest-demand engineering job. — [Essay](https://latent.space/p/ai-engineer/) `OPENED-PRIMARY`. 2026-04-23: next frontier after zero hand-written code is zero human review, which needs a re-architected lifecycle with much more automated verification. — [Podcast transcript](https://latent.space/p/unsupervised-learning-2026/) `SNIPPET-ONLY`
- **Andrew Ng** (DeepLearning.AI, AI Fund; sells courses). 2025-03-13: telling people not to learn to code will look like some of the worst career advice; easier coding means more people should code; cites a wrong 1960s extinction prediction by Herb Simon. — [LinkedIn post](https://www.linkedin.com/posts/andrewyng_deepseek-r1-uncensored-qwq-32b-puts-reasoning-activity-7305984835708141570-XVKU) `OPENED-PRIMARY`. 2026-10-22, NDTV World Summit: no job apocalypse; AI not yet good enough; US software postings up; the reporter added that the rebound is concentrated in senior and AI roles. — [NDTV](https://www.ndtv.com/world-news/ndtv-world-summit-keep-learning-new-skills-andrew-ng-on-ai-jobapocalypse-fear-12219718) `OPENED-SECONDARY`
- **Thomas Dohmke** (then GitHub CEO; left Aug 2025; launched Entire with $60M seed, Feb 2026 per [AI Engineer bio](https://ai.engineer/speakers/thomas-dohmke) `SNIPPET-ONLY`). 2025-08-03: from 22 interviews with heavy users, the role becomes delegation plus verification; fundamentals still required. — [Developers, Reinvented](https://ashtom.github.io/developers-reinvented) `OPENED-PRIMARY`. Weakness: n=22, self-selected, by a vendor.

### Inferences
- The camp's centre of gravity shifted from "review everything" (2024–25) to "own the decision, build the checks" (late 2026). Osmani, antirez and Willison each retracted or softened earlier review advice; Ronacher, Hashimoto and Litt resisted.
- Because most Camp C voices are exceptional engineers with decades of hand-built mental models, their evidence says little about people who never had to build one.

### Gaps
- I did not find a controlled, late-2026 study that shows whether teams that stopped reading code have higher defect or incident rates.
- Fowler's Pragmatic Summit remark was read in Orosz's article, not in the original video.

---

## Q2. Camp D: "Engineers will last; demand will rise." Who said what, with what stake, and how did it age?

### Takeaway
By late 2026 aggregate demand supports this camp more than the 2023–24 obituaries did: US software postings rebounded, and employment is still growing though more slowly than a no-AI counterfactual. The support is concentrated among senior and AI-titled roles. Two people commonly placed here, Gates and Hinton, do not belong here without heavy caveats.

### Cited Findings

**D1. Grady Booch** — co-creator of UML; Chief Scientist for Software Engineering, IBM
- Stake: IBM sells AI and software services. He also uses Claude and says so.
- 2026-02-04, Pragmatic Engineer, reply to Amodei starts 57:52; "why engineers will be needed" 50:54: software engineering is balancing technical, human, economic and ethical forces, of which code is one instrument; agents are another rise in abstraction like compilers; they mostly automate patterns seen many times; people in delivery pipelines and simple app work *will* lose jobs and should move up to systems; those who manage complexity at scale will be in greater demand. — [Episode page with timestamps](https://newsletter.pragmaticengineer.com/p/the-third-golden-age-of-software) `OPENED-PRIMARY`; [video](https://www.youtube.com/watch?v=OfMAtaocvJw) `OPENED-PRIMARY`
- 2026-02-07, Oxide and Friends, about 26:00–27:00: repeats that humans moved up another ratchet of abstraction. — [Transcript](https://oxide-and-friends.transistor.fm/episodes/software-engineering-past-present-and-future-with-grady-booch/transcript) `OPENED-PRIMARY`
- 2026-04 on X (as quoted by Marcus): says Amodei does not understand software engineering and is boosting an IPO valuation. — [Marcus, 27 Apr 2026](https://garymarcus.substack.com/p/dario-amodei-hype-ai-safety-and-the) `OPENED-SECONDARY`
- 2026-09-25 on X: concedes contemporary AI increasingly writes better code than he does, as compilers always did; deciding what to build and its shape stays human. — [vibecoding.tech report](https://vibecoding.tech/news/2026/09/25/ai-abstraction-grady-booch) `SNIPPET-ONLY`
- 2026-11-12 podcast, about 18:57–20:24: compares today to Hopper's compilers, cites Dijkstra against natural-language programming, and is sceptical of use where failure kills. — [Transcript](https://exa.ai/library/podcast/q3qw55qljkg/episode/2kll72zhg7r) `SNIPPET-ONLY`
- How it aged: strong on demand so far; his "only trained patterns" argument weakened during 2026 and he has softened it. Weak spot: compilers are deterministic, and he does not fully answer why decisions could not also be automated later.

**D2. Bill Gates** — Microsoft co-founder; Gates Foundation chair
- Stake: discloses technology investments and work with Microsoft and other AI firms.
- 2025-02-03, Axios: coding and maths still worth learning because they help you understand how AI works, like learning to multiply although computers do it. An argument about education, not a job forecast. — [Axios](https://www.axios.com/2025/02/03/bill-gates-coding-matters-generative-ai) `OPENED-SECONDARY` (interview by Axios)
- 2026-08-26, Gates Notes: the transition will be among the most turbulent in history; software engineering may be among the first areas affected; entry- and mid-level most at risk; *but* software engineering will also generate new demand as costs fall, so net loss there will be smaller as long as tasks such as design are better done by humans. — [Essay](https://www.gatesnotes.com/a-turbulent-ai-era-and-critical-choices-to-make) `OPENED-PRIMARY`
- 2026-08-27, Radio Atlantic: late 2025, when models matched or beat people at some coding, was a personal threshold for him. — [Atlantic](https://www.theatlantic.com/podcasts/2026/08/bill-gates-dangers-ai/688418/) `OPENED-PRIMARY` (page); passage read in [YouTube captions](https://www.youtube.com/watch?v=U4zGLSlLo5A) `OPENED-PRIMARY`
- How it aged: moved away from Camp D. See "Commonly misquoted" for the 100-years line.

**D3. Geoffrey Hinton** — Nobel and Turing laureate, ex-Google
- 2025-12-07, Business Insider: a CS degree stays valuable for quite a long time because it is more than programming; a competent mid-level programmer will not be a career much longer; learning to code is like learning Latin. — [BI](https://www.businessinsider.com/godfather-ai-geoffrey-hinton-cs-degrees-valuable-learn-to-code-2025-12) `OPENED-SECONDARY`; Latin remark via [Mint](https://www.livemint.com/technology/tech-news/should-you-still-learn-to-code-godfather-of-ai-says-says-don-t-give-up-on-computer-science-degree-just-yet-11765105115465.html) `SNIPPET-ONLY`
- 2025-12-28, CNN State of the Union: in a few years AI will do months-long software projects and very few people will be needed for them. — [CNN transcript](https://prod.transcripts.cnn.com/show/sotu/date/2025-12-28/segment/01) `OPENED-PRIMARY` (rush transcript)
- How it aged: the two statements are three weeks apart and both are his real view: degree yes, mid-level programming career no. Anyone using only one half is misrepresenting him. No late-2026 update found.

**D4. Matt Garman** — CEO, AWS
- Stake: sells AI coding agents (Kiro, Q) and the compute beneath them; Amazon has cut roughly 30,000 corporate jobs since Oct 2025 according to Platformer.
- June 2024 internal talk, leaked and published 2024-08-20: in about 24 months, or some time he could not pin down, most developers *possibly* would not be coding; coding is a language, the skill is building. — [Business Insider](https://www.businessinsider.com/aws-ceo-developers-stop-coding-ai-takes-over-2024-8) `OPENED-SECONDARY`
- Aug 2025, Matthew Berman interview, about 08:52 section: replacing juniors with AI is a foolish idea, because they are cheapest, most fluent with the tools, and you need a pipeline. — [Forward Future edited transcript](https://forwardfuture.com/newsletter/originals/aws-ceo-matt-garman-on-agents-infrastructure-and-the-future-of-ai-engineering) `OPENED-PRIMARY`; [The Register](https://www.theregister.com/software/2025/08/21/aws-ceo-says-ai-replacing-junior-staff-is-dumbest-idea/1182438) `SNIPPET-ONLY`
- 2026-06-23, Platformer: confronted with the 24-month forecast, says close but not exactly hit; most Amazon developers no longer author Java line by line; Amazon hiring 11,000 interns and new grads; believes more developers are being hired than ever. — [Platformer](https://www.platformer.news/matt-garman-aws-ceo-interview-ai-jobs/) `OPENED-PRIMARY`
- How it aged: the two famous Garman lines do not contradict each other (less typing, still hire juniors). 11,000 is in line with earlier years per [BI, 2026-05-01](https://www.businessinsider.com/aws-ceo-amazon-ai-coding-jobs-interns-hiring-2026-5) `SNIPPET-ONLY`, so it is stability, not expansion.

**D5. Arvind Krishna** — CEO, IBM
- 2025-03-11, SXSW: disagreed with Amodei's 90% and guessed 20–30% of code could be AI-written; productivity means more products, not fewer programmers. — [TechCrunch](https://techcrunch.com/2025/03/11/ibms-ceo-doesnt-think-ai-will-replace-programmers-anytime-soon/) `OPENED-SECONDARY` (notes his 2023 hiring-pause remarks and IBM's interest)
- 2026-06-18, Masters of Scale: IBM developers about 40% more productive over two years; entry-level college hiring tripled this year; expects net more jobs but about 30% fewer in back-office functions, roughly 20% of the enterprise. — [Transcript](https://mastersofscale.com/ibms-10-billion-bet-on-what-comes-after-ai/) `OPENED-PRIMARY`; plan reported by [Axios, 2026-02-13](https://www.axios.com/2026/02/13/ai-ibm-tech-jobs) `OPENED-SECONDARY`
- 2026-11-17, New Delhi: nearly half of IBM's code is AI-generated; programmers will tell AI what to write and become system engineers; 10–20% of jobs displaced over a decade, BPO hardest hit. — [IndianStartupNews](https://indianstartupnews.com/news/programmers-will-be-telling-ai-what-to-write-ibm-ceo-on-jobs-quantum-and-indias-3-billion-12816387) `OPENED-SECONDARY`
- How it aged: his percentage was wrong by his own later number; his hiring claim was acted on. A clean example of being wrong on capability and, so far, right on demand.

**D6. Sundar Pichai** — CEO, Google/Alphabet
- 2025-06-05, Lex Fridman #471, 1:31:16–1:33:36: about 30% of code used AI suggestions, but the metric he trusted was a 10% engineering-velocity gain; planned to hire more engineers the next year; near to mid term. — [Official transcript](https://lexfridman.com/sundar-pichai-transcript/) `OPENED-PRIMARY`
- 2026-04-22: 75% of new code AI-generated and approved by engineers, up from 50% the previous autumn. — [Google blog](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/cloud-next-2026-sundar-pichai/) `OPENED-PRIMARY`
- How it aged: Alphabet headcount rose from 190,167 to 204,757 between Q3 2025 and Q3 2026 ([SEC exhibit](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000080/googexhibit991q32026.htm) `SNIPPET-ONLY`). That is all employees, possibly including acquisitions, not engineers. Headcount did not fall as AI share went from 30% to 75%.

**D7. Aaron Levie** — CEO, Box
- Stake: Box sells AI-agent content software.
- 2026-03-25 (date decoded from post ID): falling cost of code makes previously unaffordable software worth building across the whole economy; engineers still needed to prompt, review, steer and maintain; advice not to enter engineering is wrong. — [LinkedIn](https://www.linkedin.com/posts/boxaaron_new-data-is-out-shared-by-lenny-rachitsky-activity-7442599442274291712-og4F) `OPENED-PRIMARY`
- 2026-04-07, conversation with Tim O'Reilly: demand diffuses beyond tech; choosing between deterministic code and agents makes the field *more* technical. — [O'Reilly Radar](https://www.oreilly.com/radar/the-world-needs-more-software-engineers/) `OPENED-PRIMARY`
- 2025-10-08, Every's AI & I podcast, section from 2:36: leaves a 5% chance he is badly wrong; jobs are bundles of tasks. — [Transcript](https://every.to/podcast/transcript-box-ceo-aaron-levie-on-why-ai-agents-won-t-take-your-job) `OPENED-PRIMARY`
- How it aged: the postings rebound continued. O'Reilly's own insertion is the caveat: entry-level software work is being hit and the net effect is unclear.

**D8. Arvind Narayanan and Sayash Kapoor** — Princeton; authors of AI as Normal Technology
- Stake: academics with a book and, since 2026-11-10, a non-profit lab (STABL).
- 2026-06-11 (page date; Princeton lists 06-10): evidence is enough to reject the idea that a capability threshold triggers mass engineer layoffs. Model: decide–execute–deliver; AI squeezes the middle; deciding and being accountable resist for reasons that are not capability limits. Cites a 100,000-developer study: about eight times more code lines, only about 30% more releases. Concedes a Federal Reserve study finding growth about 3 points a year below a no-AI counterfactual, and that individual careers may be rocky. — [normaltech.ai](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers) `OPENED-PRIMARY`
- 2026-11-10: even if the number of engineers barely changed, the profession is dramatically different, and students' worries are legitimate; warns against over-relying on aggregate indicators. — [normaltech.ai](https://www.normaltech.ai/p/the-missing-quadrant-in-responses) `OPENED-PRIMARY` (that sentence read in extract)
- How it aged: best-evidenced optimistic case in 2026. Weak spot, raised by a reader on the page: if juniors are not hired, who decides and delivers later? The promised essay on that did not appear in what I found.

**D9. Daron Acemoglu** — MIT, Nobel economist
- 2024: estimated small productivity gains, about 5% of tasks; asked in Oct 2026 he would go a little higher than 5%. — [Transcript, 2026-10-09, about 1:58–3:33](https://exa.ai/library/podcast/s3c4t8lx0v9/episode/t9zk8c1z2dk) `SNIPPET-ONLY`
- 2026-07-02, Goldman Sachs: expects limited net job losses within five years, under about 2–4%; treats coding as an exception because models are capable and developers can check the output. — [Transcript](https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-will-ai-impact-the-labor-market) `OPENED-PRIMARY`
- 2026-09-14: rerun today his 2024 numbers would be higher, since they excluded agentic AI; the slow-diffusion assumption still holds. — [Transcript](https://www.justifiedposteriors.com/transcripts/daron-acemoglu-on-pro-worker-ai-and/) `OPENED-PRIMARY`
- 2026-10-30, Bloomberg: did not foresee how quickly agentic AI would arrive, and suggests only one occupation has been substantially affected so far. — [Bloomberg](https://www.bloomberg.com/features/2026-daron-acemoglu-weekend-interview/) `SNIPPET-ONLY` for that passage
- How it aged: conceded speed, kept diffusion. Note he is *not* an optimist for engineers; software is his exception.

**D10. Demis Hassabis** — CEO, Google DeepMind
- Jan 2026, Davos, with Amodei: expected the first effects on junior and internship-level jobs that year and already felt a hiring slowdown; advised undergraduates to become extremely proficient with the tools. — [WEF transcript](https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/) `OPENED-PRIMARY`; [video](https://www.youtube.com/watch?v=NnVW9epLlTM) `SNIPPET-ONLY`
- May 2026, ABC News: still study maths, physics, CS; creativity and taste will differentiate; human-driven for now. — [ABC video](https://www.youtube.com/watch?v=x8Rx0S6kzaY) `OPENED-PRIMARY`
- July 2026, London: architecture and software engineering practice still needed; technically deep people will get about ten times more from the tools; humanities matter too. — [BI, 2026-07-17](https://www.businessinsider.com/deepmind-ceo-stem-students-use-ai-more-effectively-demis-hassabis-2026-7) `OPENED-SECONDARY`
- How it aged: consistent since 2025. He separates the next five years from a post-AGI world he calls uncharted, and that caveat is usually cut.

**Supporting Camp D voices (short)**
- **Tim O'Reilly** (publisher of developer training). 2025-02-04: the end of programming *as we know it*; every past leap created more programmers. — [Essay](https://www.oreilly.com/radar/the-end-of-programming-as-we-know-it/) `OPENED-PRIMARY`. In April 2026 he publicly qualified the jobs data (D7).
- **Jeff Dean** (Google Chief Scientist). 2026-07-30, YC: his May 2025 junior-engineer forecast looks about right and complexity grew faster than he expected; clear specification matters *more* than before; scarce skill is taste in what to work on. — [YC edited transcript](https://www.ycrootaccess.com/p/jeff-dean-the-1-rule-for-building) `OPENED-PRIMARY`
- **David Autor** (MIT). 2026-07-03: software is splitting: some work more elite and specialised, while many more people can build with less training; expertise is both devalued and raised. — [CorD](https://cordmagazine.com/interview/david-h-autor-professor-of-economics-mit-who-really-benefits-from-ai/) `OPENED-PRIMARY`. 2026-01-13: the decline in developers begins before ChatGPT, so attribution is unclear. — [Issues](https://issues.org/david-autor-economist-ai-future-work/) `SNIPPET-ONLY` for that passage
- **Mehran Sahami** (Stanford CS). 2026-05-13: do not ban AI; teach fundamentals first so students can check that code does the right thing; AI use expected by the senior project. — [Stanford GSE](https://ed.stanford.edu/news/stanford-education-experts-put-ai-perspective) `OPENED-PRIMARY`

### Inferences
- "Demand rises" and "entry narrows" are both true in the 2026 data, so a debate framed as jobs-up versus jobs-down will mislead the audience.
- Vendors who say "hire juniors" (AWS, IBM) are keeping or raising intake, while the most AI-intensive firm with published data (Anthropic) is shifting away from juniors. See Q5.

### Gaps
- No Pichai statement on *engineer* headcount after 2026-04 was found.
- The original Simple Macroeconomics paper (2024) was not opened in this session.

---

## Q3. Camp E: skeptics of the capability claims. Who said what, with what stake, and how did it age?

### Takeaway
On coding specifically, almost every named skeptic conceded ground in 2026. Torvalds changed sides on usefulness while holding firm on understanding; Marcus called Claude Code the biggest advance since the LLM; LeCun calls LLMs good programmers. What survived is narrower and better: coding works because it is checkable, checkability is not the same as good design, and hype outran evidence on jobs. Zitron's economic critique remains, but his capability predictions aged badly.

### Cited Findings

**E1. Linus Torvalds** — creator of Linux and Git
- Stake: none commercial in AI; employed around Linux Foundation activity; bears the maintainer cost of AI patches.
- Oct 2024, TFiR, Vienna: AI industry mostly marketing; he would ignore it; *but* it will change the world and real workloads would be clear in about five years. — [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/linus-torvalds-reckons-ai-is-90-percent-marketing-and-10-percent-reality) `SNIPPET-ONLY` (long extract); a third-party index places the line at 38:27 of the TFiR video
- 2026-05-20, Open Source Summit North America (career question near 25:55): AI is a great tool and changes programming but not its fundamentals; boasts about 99% AI-written code anger him because compilers already write 100%; people who understand systems will prompt good code, others will ship code that fails; long-lived software requires understanding the result. — [Official video](https://www.youtube.com/watch?v=fi29pfLcW4I) `OPENED-PRIMARY`; [LWN report](https://lwn.net/Articles/1073761/) `OPENED-SECONDARY`
- 2026-10-09, OSS Europe, Prague: says he now really likes AI, calls it a gateway into programming, thinks it improves the kernel overall while stressing maintainers to a problematic degree, and urges great care on important systems. — [Official video](https://www.youtube.com/watch?v=0PSA2LFFlvk) `OPENED-PRIMARY` (opening); passage read in [clip captions](https://www.youtube.com/watch?v=3eGwsng4p24) `SNIPPET-ONLY` and [The Stack](https://www.thestack.technology/ai-coding-gateway-drug-linus-torvalds/) `SNIPPET-ONLY`
- 2026-10-13/14: posts a kernel patch series developed with an LLM; large speedup on a benchmark he calls artificial; review quickly finds a race condition. — [LWN](https://lwn.net/Articles/1100449/) `OPENED-SECONDARY`; [detail and LKML links](https://thejarrus.com/en/news/torvalds-linux-patch/) `OPENED-SECONDARY`
- How it aged: the 2024 line is now a historical artefact, and he said so. The October patch is the perfect parable: AI helped the expert, and another expert caught the bug. Remove him from any "Torvalds thinks AI is hype" slide.

**E2. Yann LeCun** — Turing laureate; founder, AMI Labs (world models)
- Stake: his company is a bet against LLMs as the path to human-level AI.
- 2026-05-15, Unsupervised Learning, 36:33–38:24: LLMs are good programmers but not architects or computer scientists; they succeed in code and maths because language is the substrate and answers can be checked; people move up a level to decide what to build; agents remain unreliable because they cannot predict consequences. — [Video](https://www.youtube.com/watch?v=ngBraLDqzdI) `OPENED-PRIMARY`; timestamped [segment](https://realalpha.app/s/llms-excel-only-where-language-is-the-substrate-of-reasoning/) `SNIPPET-ONLY`
- 2026-10-01, La Tribune AIM: again singles out programming and maths as the two domains where automated checking lets LLMs create something new. — [Transcript](https://ceointerviews.ai/interview/2961732/) `SNIPPET-ONLY`
- How it aged: general claim (not a path to human-level) unresolved; coding carve-out is explicit and accurate.

**E3. Gary Marcus** — cognitive scientist, author
- Stake: long-standing public critic; newsletter; advocates neurosymbolic AI.
- 2025-10-22: argued amateurs replacing teams by vibe coding was failing and usage was declining. — [Is vibe coding dying?](https://garymarcus.substack.com/p/is-vibe-coding-dying) `SNIPPET-ONLY`
- 2026-04-11: calls Claude Code the biggest advance since the LLM, and credits its symbolic scaffolding rather than scale. — [Post](https://garymarcus.substack.com/p/the-biggest-advance-in-ai-since-the) `OPENED-PRIMARY`
- 2026-04-27: AI coding is genuinely revolutionising software, astonishing in expert hands, dangerous for amateurs, and that is *why* engineers are still needed; calls Amodei's end-of-software-engineering claim absurd. — [Post](https://garymarcus.substack.com/p/dario-amodei-hype-ai-safety-and-the) `OPENED-PRIMARY`
- How it aged: "dying" was wrong on volume (agent PRs passed human PRs on GitHub in Aug 2026, per C5). The expert-versus-amateur distinction held. Critics note that "neurosymbolic" is a broad label for tool use. He also argued against a compressed version of Amodei's words (see misquotes).

**E4. Richard Sutton** — Turing laureate, reinforcement learning
- 2025-09-26, Dwarkesh, coding exchange at 39:24–39:56: LLMs mimic people, lack goals and continual learning; gradient descent has nothing that makes it generalise well among many valid solutions; humans tweak until it does. — [Transcript](https://www.dwarkesh.com/p/richard-sutton) `OPENED-PRIMARY`
- How it aged: he was not talking about engineers' jobs. His argument is that a *different* learning method will surpass LLMs, so he is no comfort to those who think machines cannot do this. No 2026 coding statement found.

**E5. Ed Zitron** — newsletter writer and podcaster
- Stake: his subscription business is AI criticism (he says the newsletter and podcast are now his business).
- 2026-03-17: LLMs can write code, which does not make it good; not reading output means you stop learning; friction is valuable; current prices hide real cost. — [Post](https://www.wheresyoured.at/why-are-we-still-doing-this/) `OPENED-PRIMARY`
- 2026-04-08: asks for evidence of visibly better software; cites review backlogs. — [Post](https://www.wheresyoured.at/ai-is-really-weird/) `OPENED-PRIMARY`
- 2026-08-25: LLMs are interesting and useful for small units of work you fully understand; the cost to society and capital is inexcusable. — [The AI Hater's Manifesto](https://wheresyoured.at/the-ai-haters-manifesto) `OPENED-PRIMARY`
- How it aged: Dan Luu reviewed 27 predictions and marked 25 wrong, mainly about model ceilings and company decline; none were specifically about coding. — [danluu.com](https://danluu.com/zitron/) `OPENED-SECONDARY`. His review-burden and quality points match Orosz's October 2026 data.

**E6. Rodney Brooks** — roboticist, MIT emeritus
- 2026-01-01: predicts for 2026–2035 that LLMs need explainability and heavy "boxing in"; that is where the real work will be; calls coding assistants a great example of boxing in and real progress in a high-impact but narrow field. — [Predictions scorecard](https://rodneybrooks.com/predictions-scorecard-2026-january-01/) `OPENED-PRIMARY`
- How it aged: "harness engineering" became a 2026 discipline (Hashimoto Feb, Böckeler Apr). A skeptic's framework that predicted where the craft went.

**E7. Jonathan Blow** — game designer and language author
- Stake: sells craft-intensive games and has a language; no AI product.
- 2026-11-13, The Students: output looks messy; LLMs are fast search that grasps intent, good for small throwaway tasks with clear constraints; past a certain complexity they do not track invariants; AI could in principle do it, perhaps with AlphaZero-like methods; gives under 50% to pretending-until-perfect, not zero. — [Video](https://www.youtube.com/watch?v=IRK8h67ol7Q) `OPENED-PRIMARY`; [page](https://www.thestudentsmedia.com/p/jonathan-blow-if-ai-solved-coding) `SNIPPET-ONLY`
- How it aged: too recent. Hashimoto's renderer experiment supports him; Torvalds's kernel patch partly cuts against him.

**E8. Edward Z. Yang** — PyTorch core developer
- 2026-01-04: senior engineers infer unstated needs from context; assistants follow instructions; context, not raw skill, may break capability trend lines. — [Post](https://blog.ezyang.com/2026/01/the-gap-between-a-helpful-assistant-and-a-senior-engineer/) `OPENED-PRIMARY`
- 2026-03-18: treat AI as a very fast typist carrying out your will; some discovery must go at human speed. — [Read Less, Steer More](https://blog.ezyang.com/2026/03/read-less-steer-more/) `OPENED-PRIMARY`
- How it aged: he is a heavy user, so "skeptic" is a stretch; place him between C and E.

**E9. HISTORICAL: Edsger Dijkstra, EWD667 (1978)** — natural language looks easier only because it lets nonsense pass unnoticed; formal symbols are a privilege, not a burden; he guessed we would spend ages rebuilding a well-defined formal system from natural language. — [UT Austin archive](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html) `OPENED-PRIMARY` (the transcription page itself does not print the year)
- How it aged: wrong that such machines could not practically be built; arguably right that specification, tests and harnesses are the new formalism.

**E10. HISTORICAL: Fred Brooks, "No Silver Bullet" (1986; IEEE Computer, April 1987)** — the hard part is the conceptual construct, not its representation; no single technique within a decade would alone give a tenfold gain in productivity, reliability and simplicity. — [Reprint](https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html) `OPENED-PRIMARY`
- How it aged: the claim was time-boxed to ten years, so AI in 2026 cannot refute it as written. The 8x code / 30% releases result (D8) is the neatest modern illustration of essence versus accident.

### Inferences
- Skeptics lost the argument about *whether agents can produce working code* and are winning the argument about *what that implies*.
- LeCun, Acemoglu and Karpathy independently give the same mechanism for coding's success, verifiability. That is stronger than any single opinion.

### Gaps
- No primary 2026 statement on coding from Sutton was found.
- Torvalds's Nov 2025 Seoul remarks (vibe coding fine, not for production) were seen only in extract: [The Register](https://www.theregister.com/software/2025/11/18/linus-torvalds-vibe-coding-is-fine-but-not-for-production/2708038) `SNIPPET-ONLY`.

---

## Q4. What is the strongest version of each camp, and each camp's weakest point?

### Takeaway
Each camp has one argument that its opponents now concede and one hole its supporters avoid.

### Cited Findings

**Camp C, strongest in five**
1. Code was always the smaller part of the job; agents expose that. (Beck, Booch, Orosz; [C5](https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what))
2. Agents multiply existing engineering habits, good or bad. ([Torvalds](https://www.youtube.com/watch?v=fi29pfLcW4I), [Fowler relaying DORA](https://www.martinfowler.com/fragments/2026-02-18.html) `OPENED-PRIMARY`)
3. Understanding is needed to take part in the next decision, not only to check the last one. ([Litt](https://www.geoffreylitt.com/2026/07/02/understanding-is-the-new-bottleneck))
4. Machines cannot be answerable, so someone must be. ([Ronacher](https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/), [Osmani](https://addyo.substack.com/p/the-code-nobody-reads))
5. A cheap result can look excellent to a person who does not know what excellent is. ([Hashimoto](https://hachyderm.io/@mitchellh/116580433508108130))
- **Weakest point:** the goalpost moves. In 2024 the human part was the last 30%, then 20%, then reviewing, then deciding. Osmani and antirez withdrew earlier lines within two years. And "judgment" is taught by the very work being automated.

**Camp D, strongest in five**
1. US software postings up almost 15% from Claude Code's launch to June 2026 while all postings fell 7%. ([Indeed](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/) `OPENED-PRIMARY`)
2. Eightfold more code, only about 30% more releases: bottlenecks are elsewhere. ([Narayanan & Kapoor](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers))
3. Software demand is elastic, unlike food; nobody is near the ceiling. (same source)
4. Firms with the most AI still employ more people: Alphabet headcount rose while AI share of code went 30% to 75% (D6); Anthropic itself grew technical hiring in absolute terms. ([Anthropic](https://www.anthropic.com/research/employment-at-anthropic) `OPENED-PRIMARY`)
5. Every earlier abstraction jump produced more programmers. ([O'Reilly](https://www.oreilly.com/radar/the-end-of-programming-as-we-know-it/))
- **Weakest point:** averages hide the door closing. 71% of the postings increase was senior; only about 4.5% of software postings were entry-level in early 2026; postings still 27.5% below pre-pandemic in July 2026 (Indeed). Jevons protects demand for *output*, and for people only while they remain complements.

**Camp E, strongest in five**
1. Coding is the exception because it is checkable; do not generalise. ([LeCun](https://www.youtube.com/watch?v=ngBraLDqzdI), [Acemoglu](https://www.goldmansachs.com/insights/goldman-sachs-exchanges/how-will-ai-impact-the-labor-market))
2. Passing tests is not the same as correct, secure, maintainable. ([Marcus](https://garymarcus.substack.com/p/a-model-that-produces-code-which) `SNIPPET-ONLY`)
3. Reliability arrived through scaffolding around models, not raw scale. ([R. Brooks](https://rodneybrooks.com/predictions-scorecard-2026-january-01/), [Marcus](https://garymarcus.substack.com/p/the-biggest-advance-in-ai-since-the))
4. Most loud forecasters have something to sell, in every camp, including the critics. (Booch on Amodei; Zitron's own business)
5. The essential difficulty is the concept, not the typing, and precise intent must be expressed somewhere. ([Brooks](https://www.cgl.ucsf.edu/Outreach/pc204/NoSilverBullet.html), [Dijkstra](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html))
- **Weakest point:** a three-year record of predicting ceilings that were passed. Torvalds, Marcus and Acemoglu all revised upward in 2026. The much-cited METR slowdown is marked out of date by its own authors, whose late-2025 point estimates lean to speedup but are statistically inconclusive. ([METR, 2026-02-24](https://metr.org/blog/2026-02-24-uplift-update/) `OPENED-PRIMARY`)

### Inferences
- The fairest one-line score for late 2026: the capability optimists were more right about code; the endurance camp was more right about jobs; nobody has solved entry.

### Gaps
- No source settles whether deciding and specifying are permanently human. Karpathy says nothing fundamental stops models improving on taste (see Q8).

---

## Q5. How did the demand and junior predictions age? (evidence for the host)

### Takeaway
Aggregate demand recovered from a deep low; entry did not. Causation by AI is not established.

### Cited Findings
- Indeed, 2026-07-08: software postings +15% since late Feb 2025, still 27.5% below pre-pandemic; 71% of the May 2025–May 2026 rise was senior; authors say correlation is not causation. — [Hiring Lab](https://hiringlab.indeed.com/2026/07/08/ai-and-job-postings-from-destruction-to-creation/) `OPENED-PRIMARY`
- DataHub, 2026-11-15, compiling ADP/Stanford, Indeed and NY Fed: developers aged 22–25 at 81.4 (Nov 2022 = 100), 26–30 down 4%, all groups over 30 up; about 60% of the postings decline predates ChatGPT; baseline choice matters (from Oct 2021 the young fall is 9.7%). — [DataHub](https://datahub.io/blog/junior-dev-hiring) `OPENED-SECONDARY`
- Anthropic, 2026-10-16: junior share of its technical hires fell from 27% to 9%, junior share of technical staff from 21% to 14%, while technical hiring grew in absolute terms. Company's own, unreviewed data; shares, not counts. — [Anthropic](https://www.anthropic.com/research/employment-at-anthropic) `OPENED-PRIMARY`
- Stanford authors (2026-02-09) say AI-linked decline becomes significant only in 2024 under strict controls and warn against reading it as the sole cause. — [Stanford DEL](https://digitaleconomy.stanford.edu/news/canaries-interest-rates-and-timinga-more-on-recent-drivers-of-employment-changes-for-young-workers/) `SNIPPET-ONLY`

### Inferences
- The "19%" figure circulating is a *relative* gap for all AI-exposed jobs; the near-19% drop for developers is a *different* number. Do not merge them.

### Gaps
- All of this is US data. I found nothing equivalent for Iran or Persian-speaking markets.

---

## Unverified list (do not put on stage as fact)
- Gates: programming stays human for 100 years. No primary located (see misquotes).
- Booch's X posts of Apr and Sept 2026: read only via third parties.
- Hashimoto's "whiteboard defense" post and the renderer numbers: only on an aggregator; locate the X originals.
- DHH's Rails World keynote details (150,000 lines in August; "virtually all domains by year end"): only in third-party summaries.
- Krishna's "nearly half" figure: press report of a Delhi media briefing, one outlet opened.
- Levie's original X post: LinkedIn version opened, X not opened.
- Torvalds TFiR timestamp 38:27: from a third-party index.
- Orosz's GitHub and Linear charts: vendor data given to one journalist.
- Garman's statement that more developers are being hired than ever before in history: his assertion, not checked; Indeed's index is below pre-pandemic.
- Sahami in the "Stanford Webinar with Andrew Ng" feed item (dated 2026-10-17): recording may be older; not used.

---

## Q6. The 8 voices most worth putting on stage

### Takeaway
Chosen for a documented change of mind, checkable recordings, disclosed stakes, and opposition to each other.

### Cited Findings
1. **DHH** — biggest swing on camera: [July 2025](https://lexfridman.com/dhh-david-heinemeier-hansson-transcript/) versus [Oct 2026](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647).
2. **Kent Beck** — grief, craft and hope in one talk: [Craft 2026](https://www.youtube.com/watch?v=amQnub3sHIQ). The human centre of the evening.
3. **Linus Torvalds** — from dismissing to using, without surrendering understanding: [May 2026](https://www.youtube.com/watch?v=fi29pfLcW4I), [patch, Oct 2026](https://lwn.net/Articles/1100449/).
4. **antirez** — [May 2025](https://antirez.com/news/153), [Jan 2026](https://antirez.com/news/158), [July 2026](https://antirez.com/news/169): three posts, one conversion, one doubt about the young.
5. **Mitchell Hashimoto** — the pro-AI warning: [May 2026](https://hachyderm.io/@mitchellh/116580433508108130).
6. **Grady Booch** — the strongest "engineering is not coding" case and direct reply to Amodei: [57:52](https://www.youtube.com/watch?v=OfMAtaocvJw).
7. **Narayanan & Kapoor** — the data-driven demand case with its own caveats: [June 2026](https://www.normaltech.ai/p/why-ai-hasnt-replaced-software-engineers).
8. **Bill Gates (2026)** — the necessary discomfort; he moved the other way: [Aug 2026](https://www.gatesnotes.com/a-turbulent-ai-era-and-critical-choices-to-make).

### Inferences
- Reserve: Willison (honest self-correction), LeCun (clearest technical reason coding fell first), Fowler (the dignity of saying one does not know).

### Gaps
- All eight are men; Majors, Böckeler are strong alternates and should be considered for balance.

---

## Q7. Commonly misquoted

### Takeaway
Most viral versions drop a hedge, a date or the second half.

### Cited Findings
1. **Gates, "programming safe for 100 years".** Traced to July 2025 articles citing a France Inter interview or the Economic Times, with no primary located. [Windows Central](https://www.windowscentral.com/artificial-intelligence/bill-gates-coding-will-remain-a-human-profession-centuries-later) `SNIPPET-ONLY` reports it via a Spanish-language outlet. A Nov 2026 fact-check finds the "safe jobs" list has no primary source and that the Fallon episode contained only the baseball remark: [Pillitteri](https://pasqualepillitteri.it/en/news/30489/bill-gates-4-ai-proof-jobs-fallon) `SNIPPET-ONLY`. His documented view is [Axios 2025](https://www.axios.com/2025/02/03/bill-gates-coding-matters-generative-ai) and the opposite-leaning [2026 essay](https://www.gatesnotes.com/a-turbulent-ai-era-and-critical-choices-to-make). I cannot prove a negative; say "no primary source found".
2. **Amodei, coding first, then all of software engineering.** A viral April 2026 post compressed a Feb 2026 interview. In the transcript he adds that the broader task takes longer, that design, knowing demand and managing AI teams may remain, and that the last few percent become highly leveraged for a while. He *does* expect end-to-end automation eventually. — [Transcript](https://singjupost.com/people-by-wtf-w-dario-amodei-the-ai-tsunami-is-here-transcript/) `OPENED-SECONDARY`; the viral version is visible in [Marcus](https://garymarcus.substack.com/p/dario-amodei-hype-ai-safety-and-the).
3. **Amodei, 90% of code means 90% fewer engineers.** He says those are worlds apart and calls lines of code a weak criterion, while also saying he expects much lower demand for engineers further along. — [Dwarkesh, 2026-02-13](https://www.dwarkesh.com/p/dario-amodei-2) `OPENED-PRIMARY`
4. **Torvalds, 90% marketing.** Oct 2024; same breath said AI will change the world. He publicly changed by 2026 (E1).
5. **Garman, developers stop coding in 24 months.** He hedged both the date and the certainty, and said the skill is building. (D4)
6. **Hinton, CS degrees remain valuable.** Same interview: mid-level programming will not be a career much longer. (D3)
7. **METR, AI makes developers 19% slower.** Early-2025 tools, 16 experienced maintainers; superseded by the authors. ([METR](https://metr.org/blog/2026-02-24-uplift-update/))
8. **Brooks, no silver bullet ever.** It was a ten-year claim about any single technique. (E10)
9. **Beck, 90% of my skills are worthless.** April 2023, about ChatGPT and prose, and he stressed the other part gained leverage. (C1)
10. **Karpathy's outsourcing line.** He says he is repeating someone else's tweet, and his blog transcript was cleaned by an LLM, as he discloses. Quote from the [video at about 28:05](https://www.youtube.com/watch?v=96jN2OCOfLs).

### Inferences
- A live "real / half-real / not found" round on items 1, 2, 4 and 6 would work well and is fully sourced.

### Gaps
- The original France Inter audio was not found.

---

## Q8. Common ground across camps: what would Amodei, Karpathy, Huang, Beck, Booch and the skeptics all accept?

### Takeaway
Nine statements survive every camp. They concern what the work *is*, who stays answerable, and what we owe beginners. They do not include any forecast of how many engineers there will be.

### Cited Findings

**1. Writing code and engineering software are different things.**
- Amodei: AI writing most lines is a weak measure and far from needing that many fewer engineers. — [Dwarkesh](https://www.dwarkesh.com/p/dario-amodei-2) `OPENED-PRIMARY`
- Booch: code is one instrument among the forces an engineer balances. — [57:52](https://newsletter.pragmaticengineer.com/p/the-third-golden-age-of-software) `OPENED-PRIMARY`
- Huang: an engineer's purpose and the task of coding are related but not the same. — [Lex #494, 2026-03-23, block starting 2:00:38](https://lexfridman.com/jensen-huang-transcript/) `OPENED-PRIMARY`; [clip](https://www.youtube.com/watch?v=N_wq9OV4T4c) `OPENED-PRIMARY`

**2. Hand-typing most code is no longer the centre of the job for many professionals.**
- DHH and antirez (converts), Pichai (75%), and Booch, who says AI increasingly writes better code than he does (`SNIPPET-ONLY`), alongside Torvalds, who uses it and still inspects the output. (C8, C9, D1, D6, E1)

**3. Knowing what to build, and saying it precisely, is the scarce skill.**
- Dean (builder): specification matters more than before; taste in choosing problems is scarce. — [YC](https://www.ycrootaccess.com/p/jeff-dean-the-1-rule-for-building) `OPENED-PRIMARY`
- LeCun (skeptic): people move up to deciding what to build. (E2)
- Amodei: design, usefulness and knowing demand may remain. — [Kamath transcript](https://singjupost.com/people-by-wtf-w-dario-amodei-the-ai-tsunami-is-here-transcript/) `OPENED-SECONDARY`
- HISTORICAL Brooks: the conceptual construct is the hard part. (E10)

**4. Understanding cannot be fully handed over.**
- Karpathy, citing a tweet: "You can outsource your thinking, but you can't outsource your understanding." — [Sequoia AI Ascent, 2026-04-29, about 28:05](https://www.youtube.com/watch?v=96jN2OCOfLs); [his page](https://karpathy.bearblog.dev/sequoia-ascent-2026/) `OPENED-PRIMARY`
- Torvalds: to maintain something for decades you must understand the result, not just the prompt. (E1)
- Litt, Hashimoto, Zitron (from opposite ends) agree. (C-support, C7, E5)
- Dissent to acknowledge: antirez and Ball would say understand the *ideas*, not the lines.

**5. A human remains answerable for what ships.**
- Karpathy: agentic engineering means you are still responsible, as before. — [his page](https://karpathy.bearblog.dev/sequoia-ascent-2026/) `OPENED-PRIMARY`
- Ronacher: non-sentient machines cannot carry responsibility. (C6)
- Osmani (tool builder): reading may go, the accountable person does not. (C4)
- Pichai: AI-generated *and approved by engineers*. (D6)

**6. Checking is now the bottleneck, and checkability explains why software changed first.**
- LeCun and Acemoglu (doubters) on verifiability. (E2, D9)
- Thoughtworks retreat on verification over generation. (C2, `SNIPPET-ONLY`)
- Amodei's Amdahl's-law point: what is not sped up becomes the limiting factor. — [Kamath transcript](https://singjupost.com/people-by-wtf-w-dario-amodei-the-ai-tsunami-is-here-transcript/) `OPENED-SECONDARY`

**7. Fundamentals amplify. AI multiplies what you already are.**
- Hassabis: technically deep people get far more from the tools. (D10)
- Torvalds: people who understand systems prompt good code; others ship failures. (E1)
- Gates and Hinton, both pessimistic on jobs, still defend learning the foundations. (D2, D3)
- Beck: AI is an amplifier. — [Pragmatic Engineer, 2026-04-07](https://newsletter.pragmaticengineer.com/p/cycles-of-disruption-in-the-tech) `SNIPPET-ONLY`
- Marcus: experts benefit most. (E3)

**8. Beginners are at risk, and losing them would be a mistake we would pay for later.**
- Amodei and Hassabis on one stage: first effects fall on juniors. — [WEF](https://www.weforum.org/podcasts/radio-davos/episodes/ai-agi-dario-amodei-demis-hassabis/) `OPENED-PRIMARY`
- Garman, Beck, Krishna: keep hiring and teaching them. (D4, C1, D5)
- antirez, an enthusiast: his one doubt is the young who cannot yet build a mental model. (C8)
- Careless use erodes skill: Amodei concedes deskilling depends on how you use the model ([Kamath](https://singjupost.com/people-by-wtf-w-dario-amodei-the-ai-tsunami-is-here-transcript/)); DHH felt it (C9); Zitron warns of it (E5).

**9. The change is real, it hurts, nobody can see the end, and turning away does not help.**
- Beck: grief is normal; losing a skill's leverage does not make a person useless. (C1)
- Ronacher: founders do not know either; stay curious. (C6)
- Fowler: no idea, so experiment. (C2)
- Amodei: an empirical matter, one step at a time. ([Kamath](https://singjupost.com/people-by-wtf-w-dario-amodei-the-ai-tsunami-is-here-transcript/))
- Levie: leaves room to be badly wrong. (D7) Acemoglu: revised his own numbers. (D9)
- antirez and DHH: refusing to look is the one choice that helps nobody. (C8, C9)

### Inferences
- **A closing paragraph the whole panel could sign (my synthesis, not anyone's quote):** The typing was never the point. What remains ours, for as long as anyone can honestly see, is to decide what is worth building, to understand it well enough to change it, to answer for it when it fails, and to bring the next person in. The tools raised the price of not understanding; they did not remove it.
- **Where common ground ends, and the host should say so:**
  - *Is the human part permanent?* Karpathy says nothing fundamental stops models acquiring taste; the labs have not done it yet ([his page](https://karpathy.bearblog.dev/sequoia-ascent-2026/)). Amodei expects end-to-end automation and eventually far lower demand. Booch and Narayanan & Kapoor say deciding and accountability resist for non-capability reasons.
  - *How many engineers?* Huang expects more; Hinton very few; Gates smaller net loss than elsewhere; Beck more in five years.
  - *Must humans read code?* Litt, Hashimoto, Torvalds lean yes; antirez, Ball, swyx lean no.
- Every speaker on every side earns something from their position. Saying this about all of them, including critics, is what makes the common ground trustworthy.

### Gaps
- Beck, Huang and Booch have not, to my knowledge, jointly endorsed any of these; agreement is inferred from separate statements.
- Amodei's words come from a third-party transcript of the Kamath interview; check against the [official clip](https://www.youtube.com/watch?v=EdZWPB1fIJc) before quoting (`SNIPPET-ONLY`).
