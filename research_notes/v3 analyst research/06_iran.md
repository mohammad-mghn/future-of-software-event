# 06 — Iran: local market, remote work, emigration (as of 26 Nov 2026 / 5 Azar 1405)

Scope: Iranian job boards (live counts and a reconstructed trend), salaries, AI in Iranian job ads, remote work and emigration facts, and quotes from Iranian companies.
Builds on `Software engineering in the AI era/02_job_market.md` Q7. That file's Quera-1404, Jobvision-1405 and shock figures were re-checked here; corrections are marked **[CORRECTION]**.

**Labels**
- **OWN-COUNT:** I counted it on 26 Nov 2026 from a public search page.
- **OPENED-PRIMARY:** the producer's own page or PDF.
- **OPENED-SECONDARY:** press citing the producer.
- **SNIPPET-ONLY:** seen only in a search snippet; not verified.
- **DELEGATED:** gathered by a research sub-agent that reported opening the page. Every quote in §5 was then re-checked by me against the saved HTML.

**Units:** "m" = million toman per month. 1 toman = 10 rials.

**USD conversion:** about **295,000 toman/USD** (Tehran free market, 26 Nov 2026). Sources: Eghtesadonline 293,650 (morning), Rokna 296,500 (11:25), and Iran International ("passed 295,000"), all OPENED-SECONDARY via search extract.
- The dollar is up about **+158% in 12 months**: 52-week range 113,580 to 295,890 (mkinvesting citing TGJU; SNIPPET-ONLY). So any USD figure depends heavily on the date.

---

## 0. Access log (what opened, what did not)

Checked from a UAE IP on 26 Nov 2026.

| Site | Result |
|---|---|
| jobinja.ir | OK. Server-rendered; the count is in the HTML. Counted with a script, about 1.5 s between requests. |
| jobvision.ir | OK in a real browser (Angular single-page app). I read the visible heading "N آگهی استخدام …" for each URL. I did **not** call Jobvision's internal JSON API: a direct POST to `candidateapi.jobvision.ir` was refused by my tool policy, so all counts come from public pages. |
| quera.org/magnet/jobs | OK. Count read from the page's embedded `__NEXT_DATA__` JSON (public HTML). |
| karboom.io | OK, but the board is nearly dead (15 programming ads). |
| irantalent.com | OK. Not counted systematically; "react" = 4 results. |
| e-estekhdam.com | Search works in the browser (`/jobs/استخدام-برای-react`) but **shows no result count** (infinite list), so not counted. Its 1405 salary report link (`/file-generator/e4ilvn`) loops through 302 redirects without login, so it is **gated** and was not read. |
| LinkedIn (Iran) | The guest search returns "We couldn't find a match for Python jobs in Iran" and the same for "Software Engineer jobs in Iran". The React query got **HTTP 429**. LinkedIn is not a usable count source for Iran. |
| web.archive.org | OK. Used to rebuild Jobinja trend counts from archived pages; several snapshots were empty redirects. |
| Fetched by the sub-agents | virgool.io did not resolve (read via Exa instead). imobs.ir HTTPS failed (Exa cache used). techpark.sharif.ir has an expired SSL certificate. travel.state.gov returned 403. |

---

## 1. Live job-ad counts (OWN-COUNT, 26 Nov 2026)

### 1a. Board totals

| Board | All active ads | Software/IT category | Notes |
|---|---|---|---|
| Jobinja | **16,154** (in 6,770 companies; homepage) | "وب، برنامه‌نویسی و نرم‌افزار" **1,912**; "IT / DevOps / Server" **749** | The web category also includes SEO, site admin, WordPress and support. |
| Jobvision | **66,570** (from `/jobs` page heading) | "توسعه نرم افزار و برنامه نویسی" (`/jobs/category/developer`) **1,375** (2.1% of all) | DevOps and network sit mostly outside this category. |
| Quera Magnet | **37** open (all tech) | — | 23 posted in Nov 2026, 8 in Oct, 6 in Sep. |
| Karboom | not shown | `/jobs/programming-and-software` **15** | Most are more than one month old. "react" = 1. |
| IranTalent | — | — | "react" = 4. |
| e-estekhdam, LinkedIn | no count possible | — | See §0. |

### 1b. Counts by role

**How to read this table**
- The search engines are **fuzzy**. They match descriptions, skill tags and synonyms; Jobinja treats "Intern" as "کارآموزی", and "AI" and "هوش مصنوعی" give the same count on Jobvision.
- Compare rows **within** a column, not across boards.
- Jobvision keyword totals over all categories are inflated by loose matches: "data analyst" 3,727 and "devops" 2,310 are both higher than the whole developer category. Prefer the "in developer category" column.

| Query | Jobinja, all categories | Jobinja, tech categories (web + IT) | Jobvision keyword, all | Jobvision keyword, developer category | Quera Magnet tags (of 37) |
|---|---|---|---|---|---|
| React (ری اکت) | 77 (106) | 77 | 283 | 255 | 2 |
| Frontend (فرانت اند) | 134 (139) | 132 | 493 | 385 | — |
| Backend (بک اند) | 204 (44) | 204 | 755 | 595 | — |
| Python (پایتون) | 289 (60) | 272 | 1,018 | 318 | 17 |
| Django (جنگو) | 42 (16) | 42 | 122 | 115 | 5 |
| Go / Golang | 43 / 41 | 41 | 188 | 84 | — |
| Java (جاوا) | 95 (70) | 94 | 166 | 124 | 2 |
| DevOps (دواپس) | 150 (132) | 150 | 2,310 (fuzzy) | 156 | — |
| Android (اندروید) | 17 (13) | 17 | 106 | 47 | 1 ad (by title) |
| iOS | 7 | 7 | 39 | 18 | — |
| Flutter (فلاتر) | 16 (15) | 16 | 20 | 18 | — |
| React Native | — | — | 24 | — | — |
| Data Analyst | 222 | 124 | 3,727 (fuzzy) | 65 | — |
| Data Scientist | 110 | 79 | — | — | — |
| AI / هوش مصنوعی | 289 / 349 | 177 / 208 | 3,405 (both terms) | 361 | — |
| Machine Learning (یادگیری ماشین) | 28 (82) | 15 (33) | 215 | 34 | 2 |
| LLM | 33 | 33 | 162 | 52 | **5** |
| کارآموز / Intern | 455 | 182 | 1,719 | 40 at intern seniority; 50 "internship" type | 5 at Intern level |
| Junior / جونیور | 34 / 8 | 13 / 3 | 109 / 59 | 32 | 8 at Junior level |
| Senior | 1,366 | 582 | — | 426 "کارشناس ارشد" | 9 at Senior level |
| برنامه نویس | 798 | — | 2,166 | — | — |
| Also, Jobinja tech categories | PHP 126; .NET 123; Node.js 63; Laravel 63; Docker 105; Git 158; دورکاری 208 | | | | |

### 1c. Seniority and entry-level signals

- **Jobvision developer category (1,375 ads), seniority filter:**
  - کارآموز (intern) 40 (**2.9%**)
  - کارمند (employee) 30
  - کارشناس (specialist) 833 (61%)
  - کارشناس ارشد (senior specialist) 426 (31%)
  - مدیر میانی (middle manager) 38
- **Jobvision, same category, other filters:**
  - Experience filter "بدون سابقه کاری" (no experience) = 76 (**5.5%**). The experience buckets overlap: <2 y 494; 2–5 y 1,074; 5–8 y 288.
  - Internship type = 50.
  - **Remote-eligible = 136 (9.9%).**
- **Jobinja, full-text sample of 123 unique developer-titled ads** (method in §3): the stated minimum experience was
  - "less than 3 years": 21 (17%)
  - "doesn't matter": 21 (17%)
  - "3–6 years": 69 (56%)
  - "more than 6 years": 12 (10%)
- **Quera Magnet (37 ads):**
  - Mid 14, Senior 9, Junior 8, Intern 5, Lead 1.
  - 7 offer remote.
  - Quera's board skews toward junior roles but is tiny.
- **Caveat on Jobinja intern counts:** one employer (نماینده ساز / webgostaran) posts the same «کارآموز طراحی سایت» ad in about 10+ small towns (کازرون, لار, قیر, خشت…), which inflates them.

### 1d. How to repeat the counts

- **Jobinja:** `https://jobinja.ir/jobs?filters[keywords][0]=<kw>`, optionally adding `&filters[job_categories][0]=وب،‌ برنامه‌نویسی و نرم‌افزار&filters[job_categories][1]=IT / DevOps / Server`.
  - The category name contains a ZWNJ after «وب،».
  - Read "N فرصت شغلی فعال یافت شد".
  - Script: scratchpad `scripts/jobinja.py`, `jobinja2.py`.
- **Jobvision:**
  - `https://jobvision.ir/jobs/keyword/<kw>` (all categories).
  - `https://jobvision.ir/jobs/keyword/<kw>/category/developer` (keyword within the developer category).
  - `https://jobvision.ir/jobs/category/developer?seniorityLevels=<code>` with codes intern=300, employee=96, specialist=97, senior specialist=172, middle manager=98.
  - `?workExperiences=-1|1|2|3`.
  - `/jobs/category/developer/type/internship`.
  - `?remote=true`.
  - Read the `<h1>` "N آگهی استخدام …". This needs a JavaScript-capable browser.
- **Quera:** `https://quera.org/magnet/jobs?page=N`; read `props.pageProps.jobs.totalCount` and the `edges[].node.level` / `jobtechnology_set` fields in `__NEXT_DATA__`.
- **Karboom:** `https://karboom.io/jobs/programming-and-software`, `#search-result-count`.

---

## 2. Trend: tech ads were roughly halved over the last year

### 2a. Jobinja software/web category over time

Source: Wayback Machine snapshots of `jobinja.ir/jobs/category/it-software-web-development-jobs/استخدام-وب-برنامه-نویس-نرم-افزار`, compared with today's live count (the live SEO URL gives the same **1,912** as the filter URL). OWN-COUNT.

| Date (capture) | Web/programming ads | Jobinja total active ads (homepage) | Tech share |
|---|---|---|---|
| 2023-03-07 | 3,518 | — | — |
| 2023-07-01 | — | 26,425 | — |
| 2023-10-05 | 3,929 | — | — |
| 2024-01-01 / 01-04 | **4,035** (peak in series) | 27,454 | 14.7% |
| 2024-07-25 | 3,606 | — | — |
| 2024-09-22 | 3,346 | — | — |
| 2025-01-04 | — | 24,288 | — |
| 2025-05-25 | 3,918 | — | — |
| 2025-07-01 | — | 19,695 | — |
| 2025-08-10 (after the June 2025 12-day war) | **2,259** | — | — |
| 2025-10-01 | 2,901 | 18,931 | 15.3% |
| 2025-11-26 | **3,452** | 22,160 (Dec 1) | about 15.6% |
| 2026-01-01 (a week before the Dey blackout) | 3,444 | 21,797 | 15.8% |
| 2026-05-07 (after the Esfand–Farvardin war and internet cut) | **1,156** | 6,642 | 17.4% |
| 2026-06-06 | 1,953 | 11,933 (Jun 9) | — |
| 2026-07-22 | 2,139 | 14,239 (Jul 20) | — |
| 2026-10-07 | 2,039 | 16,840 (Oct 6) | 12.1% |
| **2026-11-26 (live)** | **1,912** | **16,154** | **11.8%** |

- Change in tech ads:
  - Year on year (Nov 2025 → Nov 2026): **−45%**.
  - Against the Jan 2024 peak: **−53%**.
  - Against 1 Jan 2026: −44%.
- Total ads are −27% against Dec 2025. **The tech share fell from about 16% to about 12%**, so tech is recovering more slowly than the overall market.
- Caveats:
  - Each snapshot is a single moment.
  - The category is not developer-only.
  - Wayback captures are irregular, and 2025-01, 2025-02, 2025-06 and 2025-11-14 returned empty redirect pages.

### 2b. Jobvision quarterly reports (OPENED-PRIMARY, PDF text via Exa)

No quarterly report was published after fall 1404. The reports page lists none later.

- **Spring 1404:**
  - Developer group ads: −11% year on year, −15% quarter on quarter.
  - Advertised pay: +35% year on year.
  - Competition: flat year on year.
  - All ads: −9% year on year; pay +36%.
  - Source: `fileapi.jobvision.ir/public-files/reports/jobvision-state-of-job-market-spring-2025.pdf`
- **Fall 1404** (before the Dey blackout and the war):
  - All ads: −11% year on year; pay +46%; competition +37%.
  - Developer group: **−15% year on year**, +50% quarter on quarter; pay +42% year on year; competition +22% year on year.
  - **Data science / AI group: +33% year on year**, +100% quarter on quarter; pay +42%; competition +24%. This was one of only two groups that grew.
  - Source: `.../jobvision-state-of-job-market-fall-2025.pdf`; summary page `jobvision.ir/reports/job-market-state`.
- **[CORRECTION]** The "+127% data-science/AI openings" figure in 02_job_market.md (Namad Eghtesad, unnamed platform) is still not traced to a primary source. Kanoon Bartarha repeats it (SNIPPET-ONLY). The primary Jobvision figure is **+33% year on year (fall 1404)**; use that.
- Shock figures already in 02_job_market.md (Zoomit / Digiato / Sakhtafzarmag) were not re-fetched. They are consistent with the Wayback series above (May 2026 trough).

---

## 3. AI in Iranian job ads

### 3a. Keyword incidence (OWN-COUNT, Jobinja search over titles and skills/description index; tech categories)

- AI-tool brand names are **rare**:
  - ChatGPT **2**, Copilot **2**, Cursor **1**, "Prompt" 4, n8n 2, "Agent" 7, RAG 14, LLM 33.
  - Compare Docker 105 and Git 158.
- «هوش مصنوعی» 208 and "AI" 177 are mostly *AI-titled roles*: AI Engineer, متخصص هوش مصنوعی, AI Automation, and also «مدرس هوش مصنوعی» (AI teacher).
- Jobvision developer category: "llm" 52 of 1,375 (**3.8%**); "machine learning" 34.
- Quera Magnet: an LLM tag on **5 of 37 ads (14%)**.

### 3b. Full-text sample (OWN-COUNT; more reliable than keyword search)

- **Sample:** the first 12 listing pages of Jobinja's web/programming category on 26 Nov 2026, giving 240 ads and **226 unique** after dropping repeats of the same company and title across cities.
- **Regex** run on each ad's «شرح موقعیت شغلی» (job description) and «مهارت‌های مورد نیاز» (required skills) sections. The company blurb was excluded.

| Subset | n | Any AI/ML/LLM mention | Asks for AI coding-tool use (ChatGPT / Copilot / Cursor / Claude / Codex / «ابزارهای هوش مصنوعی») | LLM / GenAI / agent work | ML/DL |
|---|---|---|---|---|---|
| All unique ads in category | 226 | 37% | 15% | 15% | 11% |
| Developer-titled ads | 123 | 41% | 15% | 23% | 20% |
| **Developer ads whose title is not AI or data** | **100** | **28%** | **13%** (14 matched, 1 false positive) | **8%** | **4%** |

- **Reading:** about **1 in 8 ordinary developer ads now asks for AI-assisted coding**, and about 1 in 12 asks for LLM or agent work. Both figures are from a single day's snapshot of one board, so there is no baseline to show a trend.
- **Salary is rarely stated:** only 20 of 123 developer ads state a salary (§4c).
- **Verbatim ad lines** (26 Nov 2026, Jobinja; OPENED-PRIMARY):
  - Novin Ventures, Software Engineer (.NET): "Use AI coding agents such as Claude Code, Codex, Cursor, or similar tools as your primary devel[opment …]" — `jobinja.ir/companies/baloot-14/jobs/tTXO`
  - Feediback (ارتباط شفاف مدیران), Back-End: «توانایی استفاده حرفه‌ای از ابزارهای هوش مصنوعی مانند Codex، Claude و ChatGPT در فرایند توسعه نرم‌افزار». Gloss: professional use of Codex, Claude and ChatGPT in development. — `/companies/feediback/jobs/t1Mh`
  - Arka, Senior Laravel: «تسلط به ابزارهای هوش مصنوعی و AI Coding Agents مانند Codex و Claude Code». Gloss: mastery of AI coding agents. — `/companies/toseye-fanavari-haye-novine-arka/jobs/t1xm`
  - Zaash, .NET developer (Hamedan): «تجربه استفاده از ابزارهای هوش مصنوعی مانند GitHub Copilot، ChatGPT یا Codex برای توسعه، عیب‌یابی…». Gloss: experience using Copilot, ChatGPT or Codex for development and debugging. — `/companies/zaash-1/jobs/tdZ8`
  - Hooshpod, Full-Stack Tech Lead: «هدایت استفاده از ابزارهای هوش مصنوعی در چرخه توسعه نرم‌افزار و ارزیابی کیفیت خروجی آن‌ها». Gloss: lead AI-tool use and evaluate the quality of its output. — `/companies/hooshpod/jobs/tdVh`
  - Wise Advertisement (وبلیغات), Senior Automation Test: "Leverage AI tools and LLMs (e.g., GitHub Copilot, Cursor …)" — `/companies/wise-advertisement/jobs/tMh8`
  - Jobvision listing titles: "AI Vibe Coder" (گروه ایران نوین); "AI-enabled MLOps Engineer" (ویکی, 100–150m).
- **Tension worth stating on stage:** employers ask for Claude, Codex and Copilot, while those vendors' terms exclude Iran (02_job_market.md: OpenAI and Anthropic supported-country lists; GitHub lists Copilot as restricted for Iran, see §4). Fact only, not advice.

---

## 4. Salaries

### 4a. Jobvision salary report 1405

- 100k+ respondents; figures are **requested** net pay, collected about Esfand 1404 / spring 1405.
- Sources: PDF `fileapi.jobvision.ir/public-files/reports/jobvision-salary-survey-report-1405.pdf` (OPENED-PRIMARY; Exa extract, only the first about 40 of 600+ pages read) and Jobvision blog `jobvision.ir/blog/computer-major-job-market/` (18 Aug 2026; OPENED-PRIMARY).
- **All jobs, median requested 1405 by seniority (m):**
  - کارمند (employee) **20**; کارشناس (specialist) **27**; کارشناس ارشد (senior specialist) **40**; مدیر (manager) **60**.
  - Requested raises were 37–50%, and "managers about 3× employees".
  - Tehran median 48 against 40 for big and small cities; Tehran costs are about 47% higher.
  - Women's pay is 30% below men's (1404 actual average: 25.8 vs 36.8).
- **Validation claim in the report:** median requested 1404 was **26.7**; actual pay in H1 1404 was **26**; actual at end of 1404 was **30**. Jobvision says asks track actual pay. They have a commercial stake.
- **Developer and related specialties, median requested 1405** (half of requests fall in the range shown):

| Specialty | Range (m) | Median (m) | Growth vs 1404 | Median in USD at 295k |
|---|---|---|---|---|
| Network security (senior) | 77–101 | 86 | +43% | $292 |
| Product manager | 59–92 | 76 | +44% | $258 |
| Data science / AI (senior) | 62–94 | 73 | +46% | $247 |
| Java | 60–88 | 71 | +45% | $241 |
| QA | 48–71 | 60 | +54% | $203 |
| Python (Django) | 45–78 | 58 | +56% | $197 |
| React | 42–71 | 55 | +54% | $186 |
| C#/.NET | 45–71 | 55 | +39% | $186 |
| PHP (Laravel) | 41–73 | 53 | +50% | $180 |
| NodeJS | 45–66 | 53 | +46% | $180 |
| Android | 34–53 | 42 | +47% | $142 |

  - These match the React and Python Tehran **mid-level** bands below, so this table is probably Tehran mid-level.
  - The USD column uses today's rate. Requests were made at a much lower dollar, so this overstates the fall.
- **By level, big cities (Karaj, Mashhad, Isfahan, Shiraz, Tabriz), median junior / mid / senior (m).** Source: Jobvision's own category page `jobvision.ir/jobs/category/developer-in-all-cities-of-isfahan`, which says "based on the report published spring 1405" (OPENED-PRIMARY via Exa):
  - React 27 / 36 / 57
  - Python 27 / 41 / 70
  - C# 27 / 41 / 61
  - PHP 28 / 38 / 53
  - Angular 34 / 60 / 78
  - C++ 47 / 60 / 108
  - Java 46 / 71 / 117
- **By level, Tehran, middle 50% of requests (m).** OPENED-SECONDARY; Yasan Academy, a commercial training site, updated 8 Shahrivar 1405, citing Jobvision 1405:
  - React: junior **22–39**, mid 42–71, senior 73–98
  - Python: junior 27–44, mid 45–78, senior 71–99
  - PHP: junior 24–44, mid 41–73, senior 63–99
  - Java (national): junior 38–60, mid 60–88, senior 90–133
  - Yasan summary across specialties: junior 22–60, mid 28–88, senior 31–133.
- **salary.irantalent.com** (OPENED; provenance unclear). It reports "based on the 1405 salary report":
  - C#/.NET junior, Tehran: median **39** (middle half 28–50; 1404 median 26; +47%).
  - React mid, Tehran: 55 (42–71; 1404 median 36).
  - HTML/CSS/JS mid, national: 36 (28–48).
  - The React figures are **identical to Jobvision's**. Treat these as the same data, not independent confirmation.
- **Jobvision 1404 and 1403 (for trend)** — Jobvision blog `jobvision.ir/blog/programming-salary/` (OPENED-PRIMARY snippet):
  - Highest-paid languages for Tehran mid-level in 1404: Go 50, Java 46, Node 45.
  - Python mid-level Tehran: 30 (1403) → 40 (1404).
  - Python mid-level other cities: 19 (1403) → 28 (1404).
  - The 1404 PDF exists (`.../jobvision-salary-survey-report-1404.pdf`) but its developer pages were not extracted.
  - A third-party table (konkurcomputer.ir, 21 Esfand 1403, "from Jobvision") gives *lower* 1404 Tehran medians, for example Java mid 31.2 and React junior / mid / senior 15 / 25.4 / 42. **It contradicts Jobvision's own blog; do not use it.**

### 4b. Quera developer survey (self-reported actual income; OPENED-PRIMARY, my own parse of the saved chapter HTML)

- **1404** (incomes as of Mehr 1404; n = 4,671):
  - Overall mean **43.7m** (full-time employees plus freelancers).
  - Full-time employees 46.7; freelancers 32.
  - Professionals 52.5; **newcomers 25**; Gen Z about 27; Tehran 51.3.
  - 7% earn over 100m (4% in 1403).
  - The 40–60m band grew from about 13% to about 20%.
  - **About 80% of technical interns earn under 20m.**
  - About 50% of specialists (کارشناس) earn 20–40m; about 35% of tech managers earn 60–100m; 28% of CTOs earn over 100m.
  - CTO pay ≈ 2× specialist; specialist ≈ 3× intern.
  - About half of web developers earn under 30m. About 43% of software engineers and about a third of AI people earn 40–100m.
  - Gen Z: still over half earn under 20m.
  - Quera attributes the nominal rise to inflation. The legal minimum wage rose 9.4 → 13.5m (+45%).
- **1403** (n = 5,120):
  - Half of full-time employees earn 20–60m.
  - **67.4% of freelancers earn under 20m.**
  - 55.27% of Gen Z earn under 20m.
  - Front-end: 43.5% earn under 20m. Mobile: 31.2% under 20m.
  - Back-end: 34.3% under 20m.
  - Data science/ML: over 25% earn above 40m, and 5.2% above 100m.
- In USD at today's rate: 25m ≈ $85 and 43.7m ≈ $148. At the time of the survey (Mehr 1404) the dollar was roughly 40% of today's level (see the 52-week range above), so in USD at that time these were roughly 2.5× higher. That is my arithmetic from an unverified range; give the toman figures on stage.

### 4c. Pay actually posted in live ads (OWN-COUNT, anecdotal)

- **Jobinja dev sample:** 20 of 123 ads state pay, and the field is usually a floor ("از X تومان", from X toman).
  - "Less than 3 years": floors of 24, 45 and 60m.
  - "3–6 years" (n = 12): median floor **55m**, range 26–260m.
  - Two remote or abroad-linked ads: "Full-Stack (دورکاری) در ترکیه" from 220m; "Senior Software Engineer (دورکاری)" from 350m.
- **Quera Magnet:** intern 40–45m; junior 35–45m (web support, Mashhad) and 45–55m (junior software engineer).
- **Jobvision listings seen today:**
  - Computer-engineering intern 38–39m
  - Junior-friendly React, Shiraz 25–35m
  - Front-end 45–50m
  - Irancell full-stack, Shiraz 50–70m
  - AI engineer 40–60m; AI engineer 50–55m
  - Mid-level front-end 60–80m
  - React/Next 80–100m
  - One full-stack ad at 150–300m
- **Older USD anchor:** Maziar Nourbakhsh (Tehran Chamber of Commerce innovation commission), 11 Azar 1403: IT specialists in IT firms earn **$700–1,000 a month**, and nearby countries pay 4–5×. Citna (DELEGATED, OPENED-SECONDARY). Today's toman medians convert to far less than that.

---

## 5. Iranian companies and leaders on AI and junior hiring

- All quotes were re-checked by me against saved HTML, except LinkedIn posts (Exa text only; Exa drops the ZWNJ half-space).
- **PARAPHRASE** = the reporter's wording, not the speaker's; never put it in quotation marks on a slide.

### 5a. AI in engineering

- **SnappPay, Majid Hesami (CEO)**
  - Event: panel at IRAN AI 2026, Sharif University.
  - Source: Digiato, 22 Sep 2026 (31 Shahrivar 1405). OPENED-SECONDARY.
  - URL: `digiato.com/iran-technology-news/ai-agents-enter-organizational-charts-top-ceos`
  - FA: «هم اکنون حدود 40 درصد کدهای ما را در اسنپ‌پی، با هوش مصنوعی نوشته می‌شود و هدف‌مان این است که این عدد را تا پایان سال به 70 درصد برسانیم. همچنین 90 درصد تست نرم‌افزار نیز با هوش مصنوعی انجام می‌شود.»
  - EN: about 40% of our code is AI-written; the target is 70% by year-end (March 2027); 90% of software testing is done with AI.
  - This is the only hard "% of code" figure found for an Iranian company.
- **Digikala, Masoud Tabatabaei (CEO)**
  - Same panel and source.
  - FA: «دغدغه من به عنوان مدیرعامل دیجی‌کالا این است که طرز تفکر AI First را در سازمان جا بیندازیم» … «بخش‌هایی از چارت سازمانی توسط ایجنت‌های هوش مصنوعی پر می‌شود.»
  - EN: my concern is to embed an AI-first mindset; parts of the org chart will be filled by AI agents.
- **Divar, Ashkan Armandehi (CEO)** — counterpoint
  - Source: EghtesadAfarin, about 28 Sep 2026, `eghtesadafarin.com/iran-economic-news/it-industry-news/668116/`. **PARAPHRASE**.
  - FA (reporter): «پروژه‌های هوش مصنوعی در دیوار با هدف کوچک‌کردن تیم‌ها تعریف نشده‌اند … آزادشدن ظرفیت یک تیم می‌تواند به معنای امکان حل مسائل بیشتر با همان ظرفیت سازمانی باشد.»
  - EN: AI projects at Divar were not meant to shrink teams; freed capacity means solving more problems with the same headcount.
- **Snapp, Mohammad Shokouhi-Yekta (Head of AI)**
  - Event: AI Day, University of Tehran.
  - Source: ANA, 17 Nov 2026 (26 Aban 1405). OPENED-SECONDARY. URL: `ana.ir/fa/news/1098283`
  - FA: «با قطع دسترسی اعضای تیم به مدل‌ها، مشخص شد برخی نیرو‌ها در انجام وظایف برنامه‌نویسی نیز به ابزار‌های هوش مصنوعی وابسته شده‌اند … توانایی کدنویسی مستقل در بخشی از آنها تضعیف شده بود.»
  - EN: when the internet cut during the 12-day war blocked the models, some engineers (graduates of top universities) could no longer code independently.
- **SnappFood, Keyvan Alimohammadi (Engineering Manager)**
  - Source: Peivast, 11 Sep 2026, `peivast.com/p/266429`. OPENED-SECONDARY.
  - FA: «مهندسان زودتر از بقیه شروع به استفاده شخصی از هوش مصنوعی کردند … حدود یک تا دو سال در همین مرحله ماندیم.»
  - EN: engineers adopted AI individually first and stayed at that stage for 1–2 years.
- **Cafe Bazaar, Armin Ildermi (VP Engineering)**
  - Event: Hezartoo, Mashhad.
  - Source: EghtesadDigital, about 10 Sep 2026, `eghtesaddigital.com/20174/`. OPENED-SECONDARY.
  - FA: «AI فاصله میان ایده، طراحی، توسعه، تست و عرضه را کمتر کرده و چرخه محصول را فشرده‌تر کرده است.»
  - EN: AI has compressed the idea-to-release cycle.
- **Hamkaran System, Mohammad Azizollahi (CEO)**
  - Source: Digiato, 26 Oct 2026, `digiato.com/iran-technology-news/hamkaran-system-ceo-ai-adoption-business-survival`. OPENED-SECONDARY.
  - FA: «انسان به‌جای بیشتر انجام دادن، انگار می‌ایستد طراحی می‌کند و آن کار پیش می‌رود.»
  - EN: instead of doing more, the human stands back and designs, and the work proceeds.
  - Also, **PARAPHRASE**: the junior-to-senior path "may be affected" by AI tools.
- **Divar, Ashkan Armandehi (CEO)**
  - Event: Quera event.
  - Source: Divar newsroom, 31 Dec 2024, `news.divar.ir/impact/developers-impact/`. OPENED-PRIMARY.
  - FA: «ما با فراهم کردن امکان استفاده از جدیدترین نسخه‌ دستیارهای هوش مصنوعی برای همه کارکنان دیوار تلاش کرده‌ایم که شکاف عمیقی را که به واسطه تحریم‌ها خارجی و فیلترینگ‌ داخلی … ایجاد شده، برطرف کنیم.»
  - EN: we gave all staff the latest AI assistants to close the gap created by sanctions and filtering.
- **Divar, Hessam Armandehi (co-founder)**
  - LinkedIn, 21 Mar 2025. OPENED-PRIMARY (Exa).
  - About AI ad review and layoffs: «تعدیل نیرو همیشه تصمیمی سنگین و دردناک است». EN: layoffs are always a heavy, painful decision.
  - Context: the cuts hit the moderation team, not engineers.
  - LinkedIn, 2 Nov 2026: he says his earlier picture ("same roadmap, fewer people") was "too simple", because AI also strengthens attackers, and Divar is hiring a security head.
- **Divar, SeyedMostafa Meshkati (Director of Engineering Productivity)**
  - LinkedIn, 1 Jun 2025. OPENED-PRIMARY (Exa).
  - Says most engineers will soon need "AI Engineer" skills, and it should not be a separate title.

### 5b. Junior hiring

- **DotAir, Ali Farhadi (CTO, per his headline)**
  - LinkedIn, 11 Nov 2026. OPENED-PRIMARY (Exa; ZWNJs lost). I re-fetched it on 26 Nov 2026 and the text matches.
  - URL: `https://www.linkedin.com/posts/farhadi-ali_%D9%BE%DB%8C%D8%B4%D8%A8%DB%8C%D9%86%DB%8C-%D9%BE%D9%86%D8%AC-%D8%B3%D8%A7%D9%84-%D8%AF%DB%8C%DA%AF%D9%87-%DA%A9%D9%85%DB%8C%D8%A7%D8%A8%D8%AA%D8%B1%DB%8C%D9%86-%D9%86%DB%8C%D8%B1%D9%88%DB%8C-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-activity-7526190177535307776-kNYf`
  - Post title: «پیش‌بینی: پنج سال دیگه کمیاب‌ترین نیروی بازار تکنولوژی، متخصص AI نیست، نیروی سنیوره!». EN: prediction: in five years the scarcest people in tech won't be AI specialists but seniors.
  - FA: «حالا AI دقیقاً همین پلههای اول نردبون رو حذف میکنه و خیلی از سازمانها هم بهجای جونیور، لایسنس میخرن. روی کاغذ صرفهجوییه؛ اما در عمل نردبونی می سازیم که پلههای پایینش رو بریدیم.»
  - EN: AI removes the first rungs; many organisations buy licences instead of juniors. It is a saving on paper, but we are building a ladder with its bottom rungs cut off.
- **Counter-evidence (small programmes):**
  - Divar's newcomer programme had 5–8 seats and over 1,000 résumés. LinkedIn, Jul 2024. OPENED-PRIMARY (Exa).
  - Hamrah Aval internship: 110 interns from 6,782 applicants; 59% were hired. `hamrah.academy/blog/report-tenth-internship/`, Jan 2025. OPENED-PRIMARY.
  - Fanap HR head: about 500–600 programmers hired a year. Khatam University news, Sep 2024 (pre-war). OPENED-SECONDARY.
- **Hearsay only:** "we no longer hire junior front-end developers" was reported second-hand about an unnamed company (LinkedIn, May 2025). **No Iranian leader said on the record "we stopped hiring juniors because of AI."**

### 5c. Layoffs and freezes: stated causes

| Company | Date | Stated cause | Source (OPENED-SECONDARY) |
|---|---|---|---|
| Digikala | 21 Apr 2026 | 200 people (about 3%). Cause: country conditions plus economic uncertainty, **and** an 18-month redesign «با نگاه به استفاده مؤثرتر از هوش مصنوعی» ("aiming at more effective use of AI"). The only large firm partly citing AI. | `zoomit.ir/iran-news/459056-…` |
| Alibaba.ir | 9 Jul 2025 | About 30% cut. Tourism crisis plus the 12-day war; **no AI**. | Digiato |
| Tapsi | 4 Nov 2026 | Leavers not replaced; hiring frozen for a time. Cause: «شرایط دشوار اقتصادی و جنگ ۱۲ روزه» ("difficult economic conditions and the 12-day war"); **no AI**. | Nabz-e Bourse `nabzebourse.com/fa/news/140992` |
| Snapp Group | 20 Jan 2026 | Development halted during the blackout; about 10k jobs "under threat". | Digiato (PARAPHRASE) |

- **Bottom line:** in Iranian company statements, **war, internet and economy** are the stated causes. AI appears as a re-organisation driver at Digikala and in ad moderation at Divar.

---

## 6. Remote work for foreign companies (facts only; DELEGATED unless noted)

- **Quera 1404** (OPENED-PRIMARY, my parse of `https://quera.org/developer-survey/result/job`):
  - About **15%** have paid international work experience, mostly experienced professionals; about **75%** are interested.
  - Among those with experience, filtering plus domestic limits and foreign sanctions are the top barriers.
  - **About half** are affected by financial and currency-transfer restrictions.
  - Quera's own text: «جذابیت درآمدهای دلاری … به "مهاجرت پنهان" می‌انجامد». EN: the pull of dollar income leads to "hidden emigration".
- **Tehran Chamber (Nourbakhsh, Azar 1403):** names «مهاجرت مجازی» ("virtual emigration") as a new phenomenon: working from Iran for foreign firms.
- **Domestic remote:** 136 of 1,375 Jobvision developer ads (**9.9%**) are remote-eligible (OWN-COUNT). Jobinja tech categories: «دورکاری» (remote) matches 208.
- **Platform status (facts, not advice):**
  - **Upwork** official help page: users "located or traveling in restricted areas … Iran" are not permitted to register.
  - **GitHub** holds an OFAC licence to serve developers in Iran (public and private services, free and paid; blog post 5 Jan 2021). Third-party payment processors may block payments from Iran, GitHub Enterprise Server may not be exported to Iran, and Copilot lists Iran as restricted. `docs.github.com/en/site-policy/other-site-policies/github-and-trade-controls`. OPENED-PRIMARY (sub-agent).
- **Domestic freelancing (Ponisha 1402 report, Shahrivar 1403):**
  - More than 1m users; 510.6bn toman of projects posted; software/IT is the largest category.
- **Not found:** any survey of USD/EUR pay for Iranians working remotely for foreign firms.

## 7. Emigration (facts only; DELEGATED, labels as reported)

### 7a. Iran Migration Observatory

- **[CORRECTION / key fact]** It **stopped work in Shahrivar 1402 (Sep 2023)**, and its building was taken in Esfand 1402.
  - Source: interview with its head Salavati, Globis Review, published 6 Sep 2025.
  - FA: «از شهریور ۱۴۰۲ که فعالیت رصدخانه متوقف شد تمام نیروها مرخص شدند». EN: when the observatory's work stopped in Shahrivar 1402, all staff were dismissed.
- **No 1402–1404 yearbooks exist; the last is 1401.**
- **Its 1401 yearbook** (`imobs.ir/publication/show/1048`):
  - About 12k work visas or permits a year to Iranians in the US, Canada, Australia, the UK and the EU (12-year average).
  - Students abroad: about 17k (2000) → about 66k (2020).
  - Return intention: 1%, against a 7% world average (2018 data).
- **IMO plus Jobvision survey** (Ordibehesht 1401; n > 6,000 workers): 77% high or very high desire to emigrate. No IT breakdown. **Note:** a "95%" version of this figure was quoted at the Quera event (Dey 1403); the report itself says 77%.

### 7b. Developer surveys

- **Quera 1404:** **40%** intend to emigrate. Source: `https://quera.org/developer-survey/result/social`, summary box «قصد مهاجرت ٪۴۰» ("intend to emigrate: 40%"); OPENED-PRIMARY, my parse.
  - Gen Z: 5 in 10. Women under 30: 6 in 10. People in their 30s–40s: 3 in 10.
  - Main reason: quality of life, 72%. Top reason to stay: family, about 60%.
- **Quera 1403** (n = 5,120):

| Answer | Share |
|---|---|
| Will take steps | 40% |
| Not now, may change mind | 32% |
| **No plan** | **20%** |
| Steps taken | 3% |
| Emigrated | 1.3% |

- **[CORRECTION]** The "only 20% don't want to migrate" line flagged in 02_job_market.md comes from **Quera 1403**, not 1404. Salavati's commentary in that report: «تنها ۲۰ درصد تمایل قطعی به ماندن در کشور دارند» ("only 20% definitely want to stay").

### 7c. Company HR data

- **Digikala:** share of exits due to emigration **37% (1402) → 46% (1403)**; 40% of leavers were aged 21–25. Zoomit, Dey 1403.
- **Snapp Group annual reports**, staff who emigrated:

| Year | Staff emigrated |
|---|---|
| 1401 | 159 |
| 1402 | 148 |
| 1403 | 104 |
| 1404 | 83 (about 1% of 8,728) |

  - The count is falling. This is company data, not national.

### 7d. Destination facts (official statistics)

- **US:**
  - Proclamation 10949 (effective 9 Jun 2025) suspends entry of Iranian nationals as immigrants and nonimmigrants. The Dec 2025 proclamation continues it (Federal Register; White House). Students are not exempt (PIE News, 20 Nov 2026).
  - H-1B approvals for Iran-born beneficiaries: FY23 **1,129**, FY24 1,237, FY25 1,227 (USCIS).
  - Students from Iran: **12,041** in 2025/26 (−4.9%); 1,835 on OPT (Open Doors 2026).
- **Germany:** EU Blue Card arrivals of Iranians: **1,060 (2023) → 810 (2024)**; Iran ranked 4th (BAMF Migrationsbericht 2024).
- **EU:** 3,503 Blue Cards to Iranians in 2024; 16,146 student/researcher permits (Eurostat).
- **Canada:**
  - Express Entry invitations to Iranians: 1,214 (2022), 2,728 (2023), 1,982 (2024) (IRCC year-end report).
  - New permanent residents with Iranian citizenship (IRCC open data; my sums of rounded monthly values):

| Year | New permanent residents |
|---|---|
| 2021–2024 | about 11k a year |
| 2025 | 7,435 |
| 2026 (Jan–Sep) | 8,680 |

- **Turkey:** about 72–75k Iranians held residence permits in mid-2025, about a third of them students (press citing the migration directorate).

### 7e. Officials

- **ICT Minister Sattar Hashemi**, 16 Feb 2026 (Zoomit):
  - FA: «نخبه‌هایمان را ناامید کردیم و آن‌ها مهاجرت کردند». EN: "we disappointed our elites and they emigrated".
  - He links this to a shortage of cyber specialists.
- **VP for Science Hossein Afshin**, Sep 2025 (Mehr): emigration is down about 23% in engineering year on year; return rate 1%.
- **Ali Rabiei**, **20 Nov 2024** (not 2025): «تمایل به مهاجرت به زیر ۱۸ سال رسیده است». EN: the age at which people want to emigrate has fallen below 18.
- **Press note:** no official, regular data on tech emigration is published (Taadol, Aug 2026).

---

## 8. Synthesis for the three paths (inference, labelled)

- **Local:**
  - Tech ads are about −45% year on year on Jobinja and their share of all ads is falling. Pay asks rose about 40–55% nominal (1405), but the dollar rose about 158% in a year.
  - The entry tier is thin: about 3–6% of Jobvision developer ads are open to interns or no-experience candidates.
  - AI demand is real but small: data/AI ads grew (+33% year on year in fall 1404, before the war), and about 1 in 8 ordinary developer ads asks for AI-tool fluency.
  - The measured shocks are war, internet and economy. No study isolates AI's effect.
- **Remote:**
  - About 15% of surveyed developers have done it. Payment and sanctions barriers are documented; the main platform (Upwork) excludes Iran.
  - The highest posted pay floors in today's sample were remote or abroad-linked ads.
- **Emigration:**
  - Stated intent is high and stable (40%, both Quera years); company data (Snapp) shows actual staff departures falling.
  - The main US route is closed by proclamation. Germany Blue Cards fell (1,060 → 810); Canada PRs fell in 2025.
  - The main national tracker (the observatory) has been shut since 2023.

## Gaps

1. **No public trend series for Jobvision.** Its single-page app is not archived with counts, and its quarterly reports stopped after fall 1404. Jobinja via Wayback is the only reconstructable series, and it has holes (2025-01 to 2025-04 and 2025-06 empty).
2. **e-estekhdam:** no result counts in the UI. Its 1405 salary report is login-gated (redirect loop), so it was not read.
3. **LinkedIn:** returns no Iran-located jobs; Iranian employers' LinkedIn activity is unmeasured.
4. **Search fuzziness:** keyword counts are not role counts. A proper count would need title classification of full listings, which I did only for a 240-ad Jobinja sample on a single day.
5. **AI-in-ads has no baseline.** I have no 2024 or 2025 sample to show change. Wayback holds only listing pages, not ad bodies; I did not try to reconstruct older ad bodies.
6. **Jobvision 1405 PDF developer pages** (pages 145–230) were not extracted; the by-level Tehran numbers above are secondary (Yasan). The 1404 PDF developer pages were not extracted either. **Jobinja publishes no salary report** that I found.
7. **USD at survey time:** no sourced exchange rate for Mehr 1404 or Farvardin 1405, so USD conversions use today's rate only.
8. **Remote pay:** no survey found of USD/EUR pay for Iranians working for foreign firms. No developer-specific emigration counts exist; the observatory is closed and there are no official statistics.
9. **Unverified:** the "+127% data/AI" figure; the Sharif–Jobvision "Iran AI Index 1404" (SNIPPET-ONLY); the "Snapp/SnappFood layoffs" employee claims (Iran International); the Dasteaval "165 laid off" (aggregator).
10. **No on-record Iranian statement** that juniors are not being hired because of AI. Only hearsay and one CTO's opinion (Farhadi).
11. Nothing on Afghan, Tajik or diaspora developers. Nothing on government or state-sector IT hiring, which most job boards do not cover.

**Raw data** (scratchpad, may be cleared): `/private/tmp/claude-501/-Users-mohammad-Programming-ai-event-/08802156-8c09-4b4e-b8f6-71ba40a731f5/scratchpad/` contains `jobinja_counts.tsv`, `jobinja_tech_counts.tsv`, `jobinja_sample.json` (240 ads), `wayback_out.txt`, `wb/`, `pages/` (quote sources) and `scripts/`.
