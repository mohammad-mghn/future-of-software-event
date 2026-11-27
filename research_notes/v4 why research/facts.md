# v4 "why" talk: verified supporting facts

Lens: *when something gets cheap, ask what became expensive.*
Checked 2026-11-27. "How sure" key:
- **Read the page**: I opened the primary source and read the passage myself.
- **Via report**: the figure comes from a reliable secondary source (press release, trade press) because the primary was paywalled or blocked.
- **Snippet only**: seen only in search snippets, not opened. Nothing below rests on snippets alone unless marked.

---

## 1. Spreadsheets: fewer clerks, more accountants

**Claim:** After the electronic spreadsheet (VisiCalc, 1979), US bookkeeping and accounting clerk jobs fell while accountant jobs rose, because accounting got cheaper and people bought more of it.

**Exact figures (as spoken on air):**
> GOLDSTEIN: "A few numbers - since 1980, right around the time the electronic spreadsheet came out, 400,000 bookkeeping and accounting clerk jobs have gone away. But 600,000 accounting jobs have been added."

The next line is the mechanism, in the lens's own words:
> KESTENBAUM: "What happened is that accounting basically became cheaper. And sometimes, when something gets cheaper, people buy a lot more of that thing."

Accountant Allen Sneider says clients bought more accounting and asked him to run more numbers.

- **Who/where:** NPR Planet Money, "Episode 606: Spreadsheets!", hosts Jacob Goldstein and David Kestenbaum. Rebroadcast under the same title on 2017-05-17.
- **Date:** February 25, 2015
- **Links:** transcript https://www.npr.org/transcripts/389027988 · episode page https://www.npr.org/sections/money/2015/02/25/389027988/episode-606-spreadsheets
- **How sure:** Read the page (full transcript).
- **Caveat:** These are round numbers spoken on air. The episode cites "national jobs data from the government" but gives no table, and occupation codes changed after 1980, so treat them as approximate. Tim Harford's BBC article "How computing's first 'killer app' changed everything" later repeated the figures, which is how they spread (snippet only, not opened).

**Cleaner present-day version (BLS Occupational Outlook Handbook, current edition):**

| | Bookkeeping, accounting & auditing clerks | Accountants & auditors |
|---|---|---|
| Jobs, 2025 | 1,532,400 | 1,595,200 |
| Outlook 2025–35 | **−6%** (decline), −85,600 | **+5%** (faster than average), +79,400 |
| Median pay, May 2025 | $50,670 | $83,680 |

- **Links:** https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm · https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm
- **How sure:** Read the page. bls.gov blocks direct fetches, so I read the full page text through a page-reader service.
- **BLS's own framing:** the accountants page says they "may use technology, such as artificial intelligence (AI) and robotics process automation, to increase their productivity", which frees them to "focus on analysis and other high-level responsibilities".
- **Caveat:** This is a 2025 snapshot plus projections. It is not a clean series back to 1980. I could not find a BLS table that gives a like-for-like 1980 vs. today comparison, so I didn't add one.

---

## 2. ATMs and bank tellers (James Bessen)

**Claim:** ATMs cut the staff needed per branch. That made branches cheaper to run, banks opened more of them, and teller jobs did not shrink while ATMs spread. Tellers' work moved from handling cash to building relationships.

**Exact figures (primary article):**
> "Thanks to the ATM, the number of tellers required to operate a branch office in the average urban market fell from 20 to 13 between 1988 and 2004. But banks responded by opening more branches to compete for greater market share. Bank branches in urban areas increased 43 percent. Fewer tellers were required for each branch, but more branches meant that teller jobs did not disappear."

> "...the number of bank teller jobs did not decrease as the ATMs were rolled out (see Chart 1)."

> "The skills of the teller changed: cash handling became less important and human interaction more important."

- **Note: the figure is 20, not 21.** The article says "from 20 to 13". The ~21 figure you had is not in this source.
- **Who/where:** James Bessen, "Toil and Technology", IMF *Finance & Development*, Vol. 52, No. 1
- **Date:** March 2015 issue (posted 2015-02-26)
- **Link:** https://www.imf.org/external/pubs/ft/fandd/2015/03/bessen.htm
- **How sure:** Read the page (full article text).

**Where Bessen's numbers come from (worth knowing):** Hannan & Hanweck, "Recent Trends in the Number and Size of Bank Branches: An Examination of Likely Determinants", Federal Reserve FEDS 2008-02 (dated Oct 15, 2007), https://www.federalreserve.gov/pubs/feds/2008/200802/200802pap.pdf. I read the PDF. It says:
- "the number of **employees** per branch operated by commercial banks declined from about 20 employees in 1988 to 16 by 1994 and to a little over 13 by 2004". This counts **all employees per branch**, not only tellers.
- Footnote 3: "The number of commercial bank branches increased by 43 percent in urban areas and 27 percent in rural areas over this period, while the number of branches of commercial banks and savings associations combined increased by 13 percent in urban areas and 10 percent in rural areas."

**What happened later (the "not until later" part):** BLS OOH counts 339,200 teller jobs in 2025, projected to fall **−13%** over 2025–35 (−44,700). https://www.bls.gov/ooh/office-and-administrative-support/tellers.htm (read the page via the reader).

**Caveats:**
- The 20→13 is all branch employees in urban commercial banks, and Bessen calls them "tellers".
- The +43% counts commercial-bank branches only. Counting savings associations too, urban branches grew just +13%, so part of the 43% is branches changing type, not new branches.
- I did not verify an exact peak year for teller employment. The 2025 BLS figure and projection show the later decline but do not date when it started.

**Bonus from the same article (same lens):** "power looms automated 98 percent of the labor needed to weave a yard of cloth. Yet the number of factory weaving jobs increased". Cheaper cloth brought much higher demand. Bessen's VoxEU column (https://cepr.org/voxeu/columns/how-computer-automation-affects-occupations-technology-jobs-and-skills) adds that of the 270 detailed occupations in the 1950 Census, only one was eliminated by automation: elevator operators. Both read on the page.

---

## 3. How much of a developer's time is actually coding

### Best measured source: Meyer et al., IEEE TSE 2017 (computer-activity monitoring)
- **Claim:** In logged computer activity, developers spend about a fifth of their time coding.
- **Exact figure:** "A developer's typical work day is mostly spent on coding (21.0%), emails (14.5%), and work-related web browsing (11.4%). Using the debugger, reviewing other developers' code, and version control account for just 2.4%". Table 4 also lists planned meetings 6.5%, informal meetings 3.4%, read/write documents 6.6%, planning 4.8%, and non-work browsing 5.9%.
- **What was measured:** "we deployed a monitoring application at 20 computers of professional software developers from four companies for an average of 11 full workdays in situ". "Coding" means reading, editing and navigating code.
- **Who/where:** André N. Meyer, Laura E. Barton, Gail C. Murphy, Thomas Zimmermann, Thomas Fritz, "The Work Life of Developers: Activities, Switches and Perceived Productivity", *IEEE Transactions on Software Engineering* 43(12):1178–1193
- **Date:** December 2017
- **Links:** DOI https://doi.org/10.1109/TSE.2017.2656886 · author PDF https://thomas-zimmermann.com/publications/files/meyer-tse-2018.pdf
- **How sure:** Read the page (full PDF, Table 4 and §5.1.4).
- **Caveats:** The sample is small (20 developers, all on Windows). It counts computer time only, and away-from-desk time appears only when self-reported. The authors note that coding "might be higher than reported" because 12% of time in Remote Desktop could not be categorised.

### Recent large survey: Microsoft "Time Warp" (ICSE SEIP 2025)
- **Exact figure:** in an actual workweek developers spend about 12% on "Communication & Meetings", about **11% on "Coding"**, about 9% debugging, about 6% architecture/design, and about 5% PRs/code review. In their *ideal* week they would want coding at about **20%** and architecting at about 15%.
- **What was measured:** a self-reported survey of **484 Microsoft developers** (8.06% response rate) giving hours per activity over the last five workdays, converted to percentages.
- **Who/where:** Sukrit Kumar et al. (Microsoft), "Time Warp: The Gap Between Developers' Ideal vs Actual Workweeks in an AI-Driven Era", ICSE 2025 SEIP track
- **Date:** arXiv 2025-02-21
- **Link:** https://arxiv.org/abs/2502.15287
- **How sure:** Read the page (arXiv HTML full text).
- **Caveats:** Single company, self-reported, low response rate. The authors also say the survey ran "during a security push at Microsoft", which may have distorted the week.

### IDC 16% (useful, but weaker)
- **Exact figure:** "Application development accounted for 16% of developers' time in 2024, up from 15% the year before". The rest is spread across requirements and test cases 14%, security 13%, CI/CD 12%, app performance monitoring 12%, deploying 12%, infrastructure monitoring 11%, and UX 10%.
- **Who/where:** IDC report "How Do Software Developers Spend Their Time?" by Adam Resnick, as reported by Paul Krill in InfoWorld
- **Date:** InfoWorld 2025-02-24 (report published February 2025)
- **Link:** https://www.infoworld.com/article/3831759/developers-spend-most-of-their-time-not-coding-idc-report.html
- **How sure:** Via report. The IDC report itself is paywalled.
- **Caveats:** Self-reported share of a "typical month". The sample size is not given in the coverage. The category is "developing applications", not coding alone. Don't confuse it with Atlassian's separate 2025 survey, which also says 16%.

**Takeaway across all three:** every method puts coding at roughly **11–21%** of a developer's time. Even the most generous one (direct monitoring) finds that about 4 of every 5 working hours go to something other than writing code.

---

## 4. AI deskilling in colonoscopy (Budzyń et al., 2025)

**Claim:** After AI polyp detection was introduced, experienced endoscopists' adenoma detection rate *when the AI was off* dropped.

**Exact figures (PubMed abstract):**
> "The ADR of standard colonoscopy decreased significantly from 28·4% (226 of 795) before to 22·4% (145 of 648) after exposure to AI, corresponding with an absolute difference of −6·0% (95% CI −10·5 to −1·6; p=0·0089)."

- Multivariable model: exposure to AI had an odds ratio of 0.69 (95% CI 0.53–0.89).
- AI-assisted colonoscopies in the same period: 25.3% (186/734). This is from the Lancet press release.
- That is a **20% relative** drop.
- **Sample:** 1,443 non-AI colonoscopies (795 before, 648 after) at **4 centres in Poland** taking part in the ACCEPT trial. They were performed by **19 experienced endoscopists, each with over 2,000 colonoscopies** (the 19 and >2,000 figures come from the press release). The study compared the 3 months before AI arrived (end of 2021) with the 3 months after, covering Sept 8, 2021 to March 9, 2022.
- **Who/where:** Budzyń K, Romańczyk M, … Mori Y, "Endoscopist deskilling risk after exposure to artificial intelligence in colonoscopy: a multicentre, observational study", *The Lancet Gastroenterology & Hepatology* 10(10):896–903. An erratum appeared in 10(11):e12.
- **Date:** published online **2025-08-12**, October 2025 issue
- **Links:** DOI https://doi.org/10.1016/S2468-1253(25)00133-5 · PubMed https://pubmed.ncbi.nlm.nih.gov/40816301/ · Lancet press release https://www.eurekalert.org/news-releases/1094223
- **How sure:** Read the page (PubMed abstract and the press release). The Lancet site itself blocks automated access.
- **Caveats:**
  - The study is **retrospective and observational**, a before/after comparison, and the authors flag that other factors may explain the drop.
  - Critics quoted by NPR and ynet point out that 3 months is short for experts to lose a skill, that colonoscopy volume roughly doubled after AI arrived, and that patient mix may have differed.
  - Several authors report fees from Olympus, maker of the AI system.
- **Counter-evidence (2026, stronger design):** Pedersen TA, Mori Y et al., "Learning and deskilling effects of artificial intelligence in colonoscopy among endoscopists with different levels of experience: a pragmatic, prospective trial", *Endoscopy* 58(9):1003–1014.
  - Published online 2026-06-03. DOI https://doi.org/10.1055/a-2858-7084, PubMed https://pubmed.ncbi.nlm.nih.gov/42235541/ (read the abstract).
  - Design: 13 endoscopists and 5,013 colonoscopies, measured before AI, with AI, and after AI was removed.
  - With AI, novices' detection of polyps 5 mm or larger rose from 31.9% to 39.5%. After AI was removed, there was no significant change from baseline (36.3%, OR 1.03). Experienced endoscopists showed no effect.
  - The authors' conclusion: "no upskilling or deskilling was observed".
  - **So the honest summary is that the deskilling signal is real but contested and not yet confirmed.**

---

## 5. Pilots and automation (FAA SAFO 13002)

**Claim:** In 2013 the FAA told airlines to have pilots hand-fly more, because constant use of autopilot does not keep manual skills sharp.

**Exact wording (Discussion section):**
> "Modern aircraft are commonly operated using autoflight systems (e.g., autopilot or autothrottle/autothrust). Unfortunately, continuous use of those systems does not reinforce a pilot's knowledge and skills in manual flight operations. Autoflight systems are useful tools for pilots and have improved safety and workload management, and thus enabled more precise operations. However, continuous use of autoflight systems could lead to degradation of the pilot's ability to quickly recover the aircraft from an undesired state."

- **Purpose line:** "This SAFO encourages operators to promote manual flight operations when appropriate."
- **Background line:** "A recent analysis of flight operations data (including normal flight operations, incidents, and accidents) identified an increase in manual handling errors."
- **Who/where:** FAA Flight Standards Service, Safety Alert for Operators SAFO 13002, "Manual Flight Operations"
- **Date:** **January 4, 2013** (printed "1/4/13")
- **Link:** https://www.faa.gov/sites/faa.gov/files/other_visit/aviation_industry/airline_operators/airline_safety/SAFO13002.pdf
- **How sure:** Read the page (full PDF).
- **Caveat:** A SAFO is advisory, not a rule. It says "could lead to", not "has led to".

**Optional: 2013 working group report.** PARC/CAST Flight Deck Automation Working Group, "Operational Use of Flight Path Management Systems", final report dated **September 2013**. Link: https://www.faa.gov/sites/faa.gov/files/aircraft/air_cert/design_approvals/human_factors/OUFPMS_Report.pdf. I read the extracted report text. Key lines:
- Finding 2: "Vulnerabilities were identified in pilot knowledge and skills for manual flight operations".
- "Over 60% of the accident reports reviewed by the WG identified a manual handling error as a factor in the accident."
- Relevant to the lens: "pilot skills that were once thought of as 'typical' are now thought of as 'basic or reversionary' skills". The group also says the pilot's role "has not diminished... but has actually increased to include being a manager of systems".
- Important caveat stated in the report itself: "While almost every interview group mentioned a possible decrease in manual handling skills, few were able to provide direct evidence because specific data on manual handling skills usually are not collected."

---

## 6. Learning science: generation effect and desirable difficulties

**Generation effect:** People remember words they generate themselves, for example from a cue like "rapid – f___" → "fast", better than words they simply read.
- Wording from the Bjork lab page: "generating words, rather than simply reading them, makes them more memorable (Slamecka & Graf, 1978)".
- **Paper:** Norman J. Slamecka & Peter Graf, "The generation effect: Delineation of a phenomenon", *Journal of Experimental Psychology: Human Learning and Memory* 4(6):592–604, November 1978. DOI https://doi.org/10.1037/0278-7393.4.6.592
- **How sure:** I verified the citation and DOI through Crossref. I did not read the paper's own abstract (paywalled). The description of the finding comes from the Bjork lab page, which I read.

**Desirable difficulties:** Conditions that make practice feel harder and slow apparent progress produce better long-term learning. Examples are spacing, self-testing, interleaving, varying practice conditions, and generation.
- Wording from the Bjork lab page: "R. A. Bjork (1994) dubbed these difficult but effective training conditions desirable difficulties."
- **Link:** UCLA Bjork Learning and Forgetting Lab, research page: https://bjorklab.psych.ucla.edu/research/
- **How sure:** Read the page.
- **Caveat (from the general literature, not checked in this pass):** Generation helps when people can actually produce the answer. If the task is too hard to complete, the benefit shrinks. So "difficult" here means effortful but doable.

---

## 7. Jevons paradox (Satya Nadella, DeepSeek week)

**Exact quote:**
> "Jevons paradox strikes again! As AI gets more efficient and accessible, we will see its use skyrocket, turning it into a commodity we just can't get enough of."

The post linked to Wikipedia's Jevons paradox page.

- **Who/where:** Satya Nadella, Microsoft CEO, posted on X and also on LinkedIn
- **Date:** **January 27, 2025** per the embedded tweet's date stamp (UTC). GeekWire says he posted "late Sunday", which is Jan 26, US Pacific time. This was the day of the DeepSeek-R1 tech selloff.
- **Link:** https://x.com/satyanadella/status/1883753899255046301
- **How sure:** Via report. I read the tweet text and status ID from GeekWire's embed (https://www.geekwire.com/2025/microsoft-ceo-says-ai-use-will-skyrocket-with-more-efficiency-amid-craze-over-deepseek/), and Fortune quotes the same text (https://fortune.com/2025/01/27/microsoft-ceo-satya-nadella-deepseek-optimism-jevons-paradox/). X itself could not be fetched.
- **Caveat:** Nadella is an interested party. Microsoft sells AI compute, so this is a CEO's argument, not evidence. The original Jevons point comes from *The Coal Question* (1865): more efficient steam engines led to more total coal use, not less.

---

## Quick status

| # | Item | Status |
|---|---|---|
| 1 | Planet Money spreadsheets 400k / 600k | Verified verbatim (transcript), plus BLS 2025 snapshot |
| 2 | Bessen ATMs | Verified, but it's **20→13** (not 21), +43% urban branches, 1988–2004. Underlying data is all branch employees, commercial banks only |
| 3 | Dev time coding | Verified: 21.0% (Meyer, monitored), ~11% (Microsoft survey 2025), 16% "app development" (IDC via InfoWorld) |
| 4 | Colonoscopy deskilling | Verified 28.4%→22.4%, n=1,443, 19 endoscopists. Plus a 2026 prospective trial that found no deskilling |
| 5 | FAA SAFO 13002 | Verified verbatim, Jan 4, 2013, plus 2013 WG report |
| 6 | Generation effect / desirable difficulties | Verified (Bjork lab page and DOI). Original abstract not read |
| 7 | Nadella Jevons tweet | Verified via GeekWire embed and Fortune. X not directly fetched |
