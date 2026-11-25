# Live job boards, pulled 2026-11-25 (primary data)

Method: public job-board APIs (Greenhouse for Anthropic, Databricks, Vercel, Figma; Ashby for OpenAI, Cursor, Cohere, Lovable, Replit; Lever for Palantir). 3,261 open ads at 10 companies. Titles matched by keyword; requirement percentages computed after removing company boilerplate (sentences appearing in 15%+ of a company's ads). An ad is not a hire; one ad can cover several hires, and the same job in several cities is several ads. Ten AI-heavy, mostly US companies: NOT the whole market. Disclosure: compiled by Claude, made by Anthropic, one of the companies.

Boards (human pages): https://www.anthropic.com/careers/jobs , https://openai.com/careers/search/ ; APIs: https://boards-api.greenhouse.io/v1/boards/anthropic/jobs , https://api.ashbyhq.com/posting-api/job-board/openai

## Anthropic: 636 open ads
Sales 125; Applied AI 72; AI Research & Engineering 71; Product engineering & design 56; Security 48; Software infrastructure 39; Finance 39; Safeguards 31; Compute 24; Technical program management 24; Marketing 19; Legal 17; Product/support 17; People 16; Policy 10; Data science 10; other 18.
- Sales + Applied AI = 197 of 636 (31%): people who stand next to the customer.
- Product + infrastructure engineering = 95 (15%). Security + Safeguards = 79 (12%). Research = 71 (11%).
- Product + infra "software engineer" titles: 64; 58 of them say Staff, Senior or Principal. Only 3 early-career style ads (Fellows programs). One ad has "Front End" in the title (marketing site).
- 283 technical ads, after boilerplate removal: agents/LLM apps 63%, communication 63%, >=5 years 59%, Python 55%, evals 44%, customers 43%, ambiguity 43%, security 34%, systems/architecture wording 69% (broad match), TypeScript/JS/React 13%, math/statistics 6%, PhD 3%.

## OpenAI: 877 open ads
Go To Market 219; Applied AI 128; Scaling 85; Research 57; User operations 56; Marketing 45; Forward Deployed Engineering 44; Security 35; People 26; Finance 23...
- 436 technical ads: ownership/end-to-end 71%, ambiguity 66%, communication 61%, customers 51%, agents/LLM 49%, Python 46%, evals 34%, TypeScript/JS/React 26%, math/statistics 4%, PhD 2%.

## Forward Deployed titles: 242 of 3,261 ads (7.4%)
Databricks 109, Palantir 69, OpenAI 44, Cursor 11, Cohere 10, Anthropic 8 (title match), Lovable 5, Vercel 2, Replit 2, Figma 1 (counts by title match, some include managers).
- FDE engineer ads at OpenAI + Anthropic (48): customers 100%, >=5 years 96%, ambiguity 85%, evals 67%, agents/LLM 62%, Python 56%, TypeScript 54%, security 56%, math 0%.
- What the Anthropic FDE ad says: work inside customer systems to build production applications; deliver MCP servers, sub-agents and agent skills; travel 25-50%; 8+ years technical customer-facing experience; former technical founders encouraged. https://job-boards.greenhouse.io/anthropic/jobs/5423029008

## Titles across all 3,261 ads
infrastructure/platform/SRE/distributed/reliability 278; forward deployed 242; security 140; full-stack 60; backend 58; frontend 8; software design engineer about 3.

## Research engineer/scientist at Anthropic + OpenAI (65): evals 74%, math/statistics 15%, PhD 14%, TypeScript 2%.

Reading: at the companies building the models, the scarce person is (a) the one who can carry a real customer problem to a working system, (b) the one who keeps large systems running and safe, (c) the one who can measure whether the model behaves. Pure "I write screens" or "I write code from a ticket" hardly appears as a title. Beginners are nearly absent from these boards: do not tell juniors these are their first jobs.
