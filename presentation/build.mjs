// node presentation/build.mjs [--pdf]
//   presentation/index.html      the deck: one file, works offline
//   script/host-script.md        the spoken script, generated from the same slides
//   script/script-print.html     each slide next to its script (A4), the source of the PDF
//   --pdf  also writes presentation/deck.pdf and script/host-script.pdf with Chrome
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {execFileSync} from 'node:child_process';
import slides,{PARTS,TITLE,SUB} from './src/slides.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.join(here,'..');
const rd=p=>fs.readFileSync(path.join(here,p),'utf8'),b64=p=>fs.readFileSync(path.join(here,p)).toString('base64');
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]),esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const strip=h=>h.replace(/<style[\s\S]*?<\/style>/g,'').replace(/<br\s*\/?>/g,' ').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const cfg=JSON.parse(rd('config.json')),S={};
// timing: speaking ~125 words/min plus ~2 s per click; the cue is when the slide starts
{let sec=0;for(const s of slides){const w=strip(s.say||'').split(' ').filter(Boolean).length,clicks=(s.html.match(/class="[^"]*\bf\b/g)||[]).length;
  if(s.act<9){s.t=`${Math.floor(sec/60)}:${String(Math.round(sec%60)).padStart(2,'0')}`.replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);}
  sec+=w/125*60+clicks*2;s.words=w;s.clicks=clicks;s.cues=((s.say||'').match(/▶/g)||[]).length}
 globalThis.TOTAL_MIN=sec/60;
 const bad=slides.map((s,i)=>[i+1,s]).filter(([,s])=>s.say&&s.cues!==s.clicks);
 if(bad.length)throw Error('▶ count ≠ clicks on slides: '+bad.map(([i,s])=>`${i} (▶${s.cues} vs ${s.clicks})`).join(', '));}
// sources: every "### [id] title" block in sources/NN-*.md
for(const f of fs.readdirSync(path.join(root,'sources')).filter(f=>/^\d\d-.*\.md$/.test(f)).sort()){
  for(const block of fs.readFileSync(path.join(root,'sources',f),'utf8').split(/^### /m).slice(1)){
    const m=block.match(/^\[([\w-]+)\]\s*(.+)/);if(!m)continue;
    const g=k=>(block.match(new RegExp('^- \\*\\*'+k+':\\*\\*\\s*(.+)$','m'))||[])[1]?.trim();
    const x={id:m[1],t:m[2].trim(),w:g('کی'),d:g('تاریخ'),say:g('چی می‌گه'),c:(g('حواست باشه')||'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1'),k:g('سودش'),u:g('لینک'),v:g('چقدر مطمئنیم')};
    for(const k of['t','w','d','say','c','k','u','v'])if(!x[k])throw Error(`${f}: [${x.id}] فیلد ${k} ندارد`);
    if(S[x.id])throw Error('شناسه‌ی تکراری '+x.id);S[x.id]=x;
  }
}
// photos: presentation/img/<id>.jpg, credits in img/credits.json
const credits=fs.existsSync(path.join(here,'img/credits.json'))?JSON.parse(rd('img/credits.json')):{};
const img=s=>s.replace(/\{\{img:([\w-]+)\}\}/g,(_,id)=>{const p='img/'+id+'.jpg';if(!fs.existsSync(path.join(here,p)))throw Error('عکس نیست: '+p);return 'data:image/jpeg;base64,'+b64(p)})
  .replace(/\{\{cr:([\w-]+)\}\}/g,(_,id)=>{const c=credits[id];if(!c)throw Error('اعتبار عکس نیست: '+id);return esc(`Photo: ${c.author} · ${c.license}`)});
const short=s=>{let o='';for(const w of s.split(/[،؛(]/)[0].trim().split(' ')){if((o+' '+w).length>30)break;o+=' '+w}return o.trim()};
const host=`<div class="who">${cfg.host?`<b>${esc(cfg.host)}</b>`:''}${cfg.credit?`<span>${esc(cfg.credit)}</span>`:''}${cfg.event||cfg.date?`<span>${esc([cfg.event,cfg.date].filter(Boolean).join(' · '))}</span>`:''}</div>`;
const trk=a=>`<div class="trk" aria-hidden="true">${PARTS.map((p,i)=>`<span class="${i+1===a?'on':''}">${fa(i+1)} ${p}</span>`).join('')}</div>`;
const used=new Set(),list=[];
const secs=slides.map((s,i)=>{const ids=(s.src||'').split(/\s+/).filter(Boolean);ids.forEach(id=>{if(!S[id])throw Error(`اسلاید ${i+1}: منبع ناشناخته ${id}`);used.add(id)});if(ids.length)list.push([i+1,ids]);
  const seenL=new Set();const links=ids.map(id=>{let l=short(S[id].w);if(seenL.has(l))l=short(S[id].t);seenL.add(l);return `<a href="${esc(S[id].u)}" target="_blank" rel="noopener" title="${esc(S[id].t)}">${esc(l)}</a>`}).join('');
  const t=''; // v4: no part tracker on slides
  return `<section class="slide ${s.cls||''}" data-act="${s.act}" data-t="${s.t||''}" data-src="${ids.join(' ')}">${t}${s.html}<aside class="note">${s.say||''}</aside><footer class="foot">${ids.length?`<span class="ask">منبعش کو؟</span><span class="srcs">${links}</span>`:''}<span class="pg">${fa(i+1)}</span></footer></section>`});
// sources pages, in slide order
const rows=[];const seen=new Set();for(const[n,ids]of list)for(const id of ids){if(seen.has(id))continue;seen.add(id);rows.push([n,S[id]])}
const per=10;let n=slides.length;const srcPages=[];
for(let i=0;i<rows.length;i+=per){n++;srcPages.push(`<section class="slide" data-act="9" data-t="پیوست" data-src=""><h1>منابع${i?' (ادامه)':''}</h1><div class="srclist">${rows.slice(i,i+per).map(([k,x])=>`<div><b>اسلاید ${fa(k)}: ${esc(x.t)}</b><br><bdi>${esc(x.w)}</bdi> · <bdi dir="rtl">${esc(x.d)}</bdi><br><a href="${esc(x.u)}" target="_blank" rel="noopener">${esc(decodeURIComponent(x.u).replace(/^https?:\/\/(www\.)?/,'').slice(0,74))}</a></div>`).join('')}</div><footer class="foot"><span class="pg">${fa(n)}</span></footer></section>`)}
// signed numbers (+۲۳٪, −۱٫۱٪) keep their sign on the left; only in text, never inside a tag
const sign=h=>h.split(/(<[^>]*>)/).map((t,i)=>i%2?t:t.replace(/(^|[\s(«:،])([+−])([۰-۹][۰-۹٫]*٪?)/g,'$1<bdi dir="ltr">$2$3</bdi>')).join('');
let qrSvg=null;try{qrSvg=new Function(rd('src/qr.js')+';return typeof qrSvg==="function"?qrSvg:null')()}catch(e){qrSvg=null}
const LEDGER=cfg.ledgerUrl||'';const QR=u=>u&&qrSvg?qrSvg(u,180):`<span class="en">${esc(u)}</span>`;
const fix=h=>img(sign(h).replace(/([A-Za-z0-9)])، (?=[A-Za-z])/g,'$1،‏ ').replaceAll('{{HOST}}',host).replaceAll('{{LEDGER}}',esc(LEDGER)).replaceAll('{{QR}}',QR(LEDGER)));
const html=fix(secs.join('\n')+srcPages.join('\n'));
const SRC=JSON.stringify(Object.fromEntries([...used].map(id=>[id,{t:S[id].t,w:S[id].w,d:S[id].d,c:S[id].c,k:S[id].k,u:S[id].u}]))).replace(/</g,'\\u003c');
const font=(fam,file,w,r)=>`@font-face{font-family:"${fam}";src:url(data:font/woff2;base64,${b64('fonts/'+file)}) format("woff2");font-weight:${w};font-display:block;${r?`unicode-range:${r};`:''}}`;
const fonts=font('V','vazirmatn-arabic.woff2','100 900','U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FEFC')+font('V','vazirmatn-latin.woff2','100 900','U+0000-00FF,U+2000-200B,U+2012-206F,U+20AC,U+2122,U+2190-2193,U+2212')+font('L','lalezar.woff2','400');
const css=fonts+rd('src/style.css');
const ar=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const title=TITLE;
const body=`<div class="stage">${html}</div><button class="arrow" id="b-next" aria-label="بعدی">${ar('M15 5l-7 7 7 7')}</button><button class="arrow" id="b-prev" aria-label="قبلی">${ar('M9 5l7 7-7 7')}</button><div id="bar"></div><div id="panel" hidden></div><div id="ov" hidden></div><script>${rd('src/qr.js')}\nconst SRC=${SRC};\n${rd('src/deck.js')}</script>`;
const head=`<title>${title}</title><style>${css}</style>`;
const page=(h,b,lang='fa')=>`<!doctype html><html lang="${lang}" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">${h}</head><body>${b}</body></html>`;
fs.writeFileSync(path.join(here,'index.html'),page(head,body));
const extra=process.argv.slice(2).find(a=>!a.startsWith('--'));if(extra)fs.writeFileSync(extra,head+body);
// ---- the script: markdown + print page, from the same "say" text ----
const paras=t=>(t||'').split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
const sTitle=s=>{const m=s.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);return m?strip(m[1]):strip(s.html).slice(0,60)};
const plain=t=>t.replace(/<b>|<\/b>/g,'**').replace(/<i>|<\/i>/g,'_').replace(/<[^>]+>/g,'');
let md=`<div dir="rtl">\n\n# متن اجرا: ${title}\n\n> این فایل خودکار از \`presentation/src/slides.mjs\` ساخته می‌شه. برای تغییر متن، همون‌جا فیلد \`say\` رو عوض کن و \`node presentation/build.mjs\` رو بزن.\n> ▶ یعنی کلیک بعدی.\n\n`;
let lastAct=null;
slides.forEach((s,i)=>{if(s.act!==lastAct&&s.act>=1&&s.act<=PARTS.length){md+=`\n---\n\n## بخش ${fa(s.act)}: ${PARTS[s.act-1]}\n\n`;lastAct=s.act}
  md+=`### اسلاید ${fa(i+1)} · ${sTitle(s)}${s.t?` <sub>(${s.t})</sub>`:''}\n\n${paras(s.say).map(plain).join('\n\n')||'—'}\n\n`});
fs.writeFileSync(path.join(root,'script/host-script.md'),md+'\n</div>\n');
const pcss=`${fonts}${rd('src/style.css').replace(/@media print\{[\s\S]*?\}\}/,'')}
@page{size:A4;margin:13mm 15mm 14mm}
html,body{height:auto;overflow:visible;background:#fff}
body{font-family:var(--text);color:var(--ink)}
.pp{break-after:page;display:flex;flex-direction:column;gap:5mm}
.pp:last-child{break-after:auto}
.ph{display:flex;justify-content:space-between;align-items:baseline;font-size:10pt;color:var(--mut);border-bottom:1.5px solid var(--line);padding-bottom:2mm}
.ph b{font:400 15pt/1.3 var(--disp);color:var(--ink)}
.th{width:180mm;height:101.25mm;overflow:hidden;border-radius:3mm;border:1px solid var(--line);position:relative;align-self:center}
.th .slide{position:absolute;display:flex;transform:scale(.5315);transform-origin:top right;right:0;top:0}
.th .f{visibility:visible}.th .foot .srcs{display:flex}
.sc{font-size:12.6pt;line-height:2.05;text-align:justify}
.sc p{margin:0 0 3mm}.sc b{font-weight:800;background:linear-gradient(transparent 60%,#FFF0B0 60%)}
.sc .cue{color:var(--blue);font-weight:800}
.cv{height:265mm;display:flex;flex-direction:column;justify-content:center;gap:7mm}
.cv h1{font:400 38pt/1.2 var(--disp)}.cv h2{font:400 22pt/1.3 var(--disp);color:var(--red)}
.cv p{font-size:12.5pt;line-height:2;color:var(--mut);max-width:150mm}
.cv .who{border-inline-start:2mm solid var(--blue);padding-inline-start:5mm}.cv .who b{font:400 16pt/1.4 var(--disp);display:block}.cv .who span{display:block;color:var(--mut);font-size:11pt}`;
const pages=slides.map((s,i)=>`<div class="pp"><div class="ph"><b>${fa(i+1)}. ${esc(sTitle(s))}</b><span>${[s.act>=1&&s.act<=PARTS.length?`بخش ${fa(s.act)}: ${PARTS[s.act-1]}`:'',s.t?`دقیقه‌ی ${s.t}`:''].filter(Boolean).join(' · ')}</span></div><div class="th">${secs[i]}</div><div class="sc">${paras(s.say).map(p=>`<p>${p.replace(/▶/g,'<span class="cue">▶</span>')}</p>`).join('')||'<p class="mut">—</p>'}</div></div>`).join('');
const cover=`<div class="pp cv"><h1>${title}</h1><h2>متن اجرا، کنار اسلایدها</h2>${host}<p>هر صفحه یک اسلاید است: بالا خود اسلاید، پایین چیزی که موقع همون اسلاید می‌گی. <span class="cue" style="color:var(--blue);font-weight:800">▶</span> یعنی کلیک بعدی. جمله‌های پررنگ همون‌هایی‌اند که باید دقیق گفته بشن. منبع هر عدد پایینِ خود اسلایده.</p></div>`;
// storyline page: the lens, then one row per chapter with its slides and start time
const actRows=[{n:0,name:'شروع',q:'صداها، و نقشه‌ی سه ابزار'},...PARTS.map((q,i)=>({n:i+1,name:'فصل '+fa(i+1),q}))].map(r=>{const ix=slides.map((x,i)=>[x,i]).filter(([x])=>x.act===r.n).map(([,i])=>i);return ix.length?{...r,from:ix[0]+1,to:ix[ix.length-1]+1,t:slides[ix[0]].t||''}:null}).filter(Boolean);
const story=`<div class="pp sl"><h1>خط داستانی</h1><p class="lens">${esc(SUB)}. سه چیز رو یاد می‌گیریم بخونیم: <b>پشتِ عدد</b> (چی رو شمردن، و چرا این‌طوری شد؟)، <b>پشتِ حرف</b> (دقیقاً چی گفت؟ چی می‌فروشه؟ اگه درست بود الان چی می‌دیدیم؟) و <b>پشتِ تغییر</b> (چی ارزون شد؟ حالا چی گرون شد؟ تا کِی؟ چه علامتی؟). بعد با همین سه تا استک، یادگیری و سناریوها رو می‌خونیم. هر نکته یه زنجیره‌ست: چی دیدیم ← چرا ← پس چی ← چی کار کنیم ← چرا جواب می‌ده.</p><table><tr><th>بخش</th><th>سؤال</th><th>اسلاید</th><th>شروع</th></tr>${actRows.map(r=>`<tr><td><b>${r.name}</b></td><td>${r.q}</td><td>${fa(r.from)}–${fa(r.to)}</td><td>${r.t}</td></tr>`).join('')}</table><p class="mut">زمان‌ها با سرعت آرومِ ۱۲۵ کلمه در دقیقه حساب شده؛ کل متن حدود ${fa(Math.round(globalThis.TOTAL_MIN))} دقیقه‌ست؛ بقیه‌ی ۷۵ دقیقه برای سؤال‌ها. خط داستانیِ کامل، اسلاید به اسلاید: <code>planning/v5-storyline.md</code></p></div>`;
const scss=`.sl h1{font:400 30pt/1.3 var(--disp)}.sl .lens{font-size:13pt;line-height:2.1}.sl table{width:100%;border-collapse:collapse;font-size:11.5pt;line-height:1.75}.sl th{text-align:right;color:var(--red);font-size:10pt;padding:2mm;border-bottom:1.5px solid var(--ink)}.sl td{padding:2.6mm 2mm;border-bottom:1px solid var(--line);vertical-align:top}.sl td:nth-child(1),.sl td:nth-child(4),.sl td:nth-child(5){white-space:nowrap}.sl code{direction:ltr;unicode-bidi:isolate}`;
fs.writeFileSync(path.join(root,'script/script-print.html'),fix(page(`<title>متن اجرا: ${title}</title><style>${pcss}${scss}</style>`,cover+story+pages)));
// ---- the public prediction ledger: dated claims, their due dates, what we'd see, status; plus our own dated takes ----
if(fs.existsSync(path.join(here,'data/ledger.json'))){
  const L=JSON.parse(rd('data/ledger.json'));const st={'⏳':'در انتظار','✓':'درست درومد','✗':'درست درنیومد','½':'نصفه'};
  const row=r=>{const x=r.src?S[r.src]:null;if(r.src&&!x)throw Error('ledger: منبع ناشناخته '+r.src);
    return `<tr class="s${['⏳','✓','✗','½'].indexOf(r.status)}"><td class="who"><b>${esc(r.who)}</b><br><span>${esc(r.when)}</span></td><td>${esc(r.claim)}</td><td>${esc(r.due||'—')}</td><td>${esc(r.see||'')}</td><td class="st"><b>${r.status}</b> ${st[r.status]||''}${r.note?`<br><span>${esc(r.note)}</span>`:''}</td><td>${x?`<a href="${esc(x.u)}" target="_blank" rel="noopener">${esc(x.w)}</a>`:''}</td></tr>`};
  const lcss=`${fonts}body{font-family:var(--text, "V",Tahoma,sans-serif);direction:rtl;margin:0;padding:32px 20px 60px;color:#1B1B1F;background:#fff;line-height:1.7}main{max-width:1180px;margin:0 auto}h1{font:400 44px/1.3 "L","V",sans-serif;margin:0 0 6px}h2{font:400 28px/1.3 "L","V",sans-serif;color:#CF3F2C;margin:40px 0 10px}p.lead{color:#6B6B6B;margin:0 0 24px;font-size:17px}table{width:100%;border-collapse:collapse;font-size:16px}th{text-align:right;font-size:13px;color:#CF3F2C;border-bottom:2px solid #1B1B1F;padding:8px 6px;vertical-align:bottom}td{padding:12px 6px;border-bottom:1px solid #D9D9D9;vertical-align:top}td.who span,td.st span{color:#6B6B6B;font-size:13px}td.st b{font-size:22px}tr.s1 td.st b{color:#2B50C8}tr.s2 td.st b{color:#CF3F2C}tr.s3 td.st b{color:#6B6B6B}a{color:#2B50C8}.foot{margin-top:30px;font-size:14px;color:#6B6B6B}@media(max-width:800px){table,thead,tbody,tr,td,th{display:block}th{display:none}td{border:0;padding:4px 0}tr{border-bottom:1px solid #D9D9D9;padding:12px 0}}`;
  const tbl=(rows)=>`<table><thead><tr><th>کی، کِی</th><th>ادعا</th><th>موعد</th><th>اگه درست بود، چی می‌دیدیم</th><th>وضعیت</th><th>منبع</th></tr></thead><tbody>${rows.map(row).join('')}</tbody></table>`;
  const lhtml=`<main><h1>دفترِ پیش‌بینی</h1><p class="lead">ادعاهای تاریخ‌دارِ آدم‌های بزرگ درباره‌ی AI و نرم‌افزار، با موعدشون و چیزی که اگه درست بودن باید می‌دیدیم؛ و برداشت‌های خودِ ما، با تاریخ. از ارائه‌ی «${title}». آخرین به‌روزرسانی: ${esc(L.updated||'')}.</p><h2>حرفِ بزرگ‌ها</h2>${tbl(L.claims)}<h2>برداشت‌های ما (که باید بشه چکشون کرد)</h2>${tbl(L.ours)}<p class="foot">وضعیت‌ها: ⏳ در انتظار · ✓ درست درومد · ✗ درست درنیومد · ½ نصفه. منبعِ کامل و «حواست باشه»ی هر ادعا در پوشه‌ی sources همین ریپو. منبعش کو؟</p></main>`;
  fs.writeFileSync(path.join(here,'ledger.html'),page(`<title>دفترِ پیش‌بینی · ${title}</title><meta name="robots" content="index"><style>${lcss}</style>`,lhtml));
}
if(process.argv.includes('--pdf')){
  const CH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',tmp=fs.mkdtempSync('/tmp/deckpdf-');
  const pdf=(src,out)=>execFileSync(CH,['--headless=new','--disable-gpu','--no-pdf-header-footer','--user-data-dir='+tmp,'--virtual-time-budget=8000','--print-to-pdf='+out,'file://'+src],{stdio:'ignore'});
  pdf(path.join(here,'index.html'),path.join(here,'deck.pdf'));pdf(path.join(root,'script/script-print.html'),path.join(root,'script/host-script.pdf'));
  fs.rmSync(tmp,{recursive:true,force:true});console.log('pdf: presentation/deck.pdf, script/host-script.pdf');
}
console.log('slides',slides.length,'+',n-slides.length,'| sources',Object.keys(S).length,'| on slides',used.size,'| script words',slides.reduce((a,s)=>a+s.words,0),'| est. minutes',Math.round(globalThis.TOTAL_MIN));
