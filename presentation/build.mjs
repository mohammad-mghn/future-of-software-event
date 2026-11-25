// node presentation/build.mjs  ->  presentation/index.html (یک فایل، بدون اینترنت)
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
import slides from './src/slides.mjs';
const here=path.dirname(fileURLToPath(import.meta.url)),root=path.join(here,'..');
const rd=p=>fs.readFileSync(path.join(here,p),'utf8'),b64=p=>fs.readFileSync(path.join(here,p)).toString('base64');
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]),esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const cfg=JSON.parse(rd('config.json')),S={};
for(const f of fs.readdirSync(path.join(root,'sources')).filter(f=>/^\d\d-.*\.md$/.test(f)).sort()){
  for(const block of fs.readFileSync(path.join(root,'sources',f),'utf8').split(/^### /m).slice(1)){
    const m=block.match(/^\[([\w-]+)\]\s*(.+)/);if(!m)continue;
    const g=k=>(block.match(new RegExp('^- \\*\\*'+k+':\\*\\*\\s*(.+)$','m'))||[])[1]?.trim();
    const x={id:m[1],t:m[2].trim(),w:g('کی'),d:g('تاریخ'),say:g('چی می‌گه'),c:(g('حواست باشه')||'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1'),k:g('سودش'),u:g('لینک'),v:g('چقدر مطمئنیم')};
    for(const k of['t','w','d','say','c','k','u','v'])if(!x[k])throw Error(`${f}: [${x.id}] فیلد ${k} ندارد`);
    if(S[x.id])throw Error('شناسه‌ی تکراری '+x.id);S[x.id]=x;
  }
}
const short=s=>{let o='';for(const w of s.split(/[،؛(]/)[0].trim().split(' ')){if((o+' '+w).length>30)break;o+=' '+w}return o.trim()};
// نمودار
const D=JSON.parse(rd('data/fred-software.json')).points,W=1136,H=300,L=46,R=70,T=34,B=32;
const tm=s=>Date.parse(s+'T00:00:00Z'),t0=tm(D[0][0]),t1=tm(D.at(-1)[0]),X=d=>L+(W-L-R)*(tm(d)-t0)/(t1-t0),Y=v=>T+(H-T-B)*(1-v/250),val=d=>D.find(p=>p[0]===d)[1];
const pt=(d,lab,dx,dy,c='#F4F7FB')=>`<circle cx="${X(d)}" cy="${Y(val(d))}" r="7" fill="${c}" stroke="#0C1526" stroke-width="3"><title>${d}: ${val(d)}</title></circle><text x="${X(d)+dx}" y="${Y(val(d))+dy}" text-anchor="middle" font-size="21" font-weight="800" direction="rtl" style="fill:${c}">${lab}</text>`;
const gpt='2022-11-30',stp=(W-L-R)/D.length;
const chart=`<div class="vis chartw"><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="شاخص آگهی‌های نرم‌افزار در آمریکا، ۲۰۲۰ تا نوامبر ۲۰۲۶">
${[0,100,200].map(v=>`<line x1="${L}" x2="${W-R}" y1="${Y(v)}" y2="${Y(v)}" stroke="${v===100?'#B3C1D6':'#31425F'}" stroke-dasharray="${v===100?'6 6':'0'}"/>`).join('')}
${[2021,2022,2023,2024,2025,2026].map(y=>`<text x="${X(y+'-01-01')}" y="${H-6}" text-anchor="middle" font-size="17" style="fill:#B3C1D6">${fa(y)}</text>`).join('')}
<line x1="${X(gpt)}" x2="${X(gpt)}" y1="${T-8}" y2="${H-B}" stroke="#FF5C76" stroke-width="2.5"/><text x="${X(gpt)+12}" y="${T+10}" font-size="21" font-weight="800" style="fill:#FF5C76">ChatGPT</text>
<path d="${D.map((d,i)=>(i?'L':'M')+X(d[0]).toFixed(1)+' '+Y(d[1]).toFixed(1)).join('')}" fill="none" stroke="#86B4FF" stroke-width="4.5" stroke-linejoin="round"/>
${D.map(d=>`<rect x="${(X(d[0])-stp/2).toFixed(1)}" y="${T}" width="${stp.toFixed(1)}" height="${H-T-B}" fill="transparent"><title>${d[0]}: ${d[1]}</title></rect>`).join('')}
${pt('2022-02-28','اوج: ۲۳۴',-14,-16)}${pt('2025-05-17','کف: ۶۱',0,34,'#FF5C76')}${pt('2026-11-13','امروز: ۸۲',0,36,'#4FD6A3')}
<text x="${X('2024-10-01')}" y="${Y(100)-12}" font-size="18" text-anchor="middle" style="fill:#B3C1D6">پیش از کرونا = ۱۰۰ (آگهی‌های نرم‌افزار، آمریکا)</text></svg></div>`;
const hostLine=[cfg.host,cfg.event,cfg.date].some(Boolean)?`<p class="mut">${[cfg.host,cfg.event,cfg.date].filter(Boolean).map(esc).join(' · ')}</p>`:'';
const used=new Set(),list=[];
let html=slides.map((s,i)=>{const ids=(s.src||'').split(/\s+/).filter(Boolean);ids.forEach(id=>{if(!S[id])throw Error('منبع ناشناخته: '+id);used.add(id)});if(ids.length)list.push([i+1,ids]);
  const links=ids.map(id=>`<a href="${esc(S[id].u)}" target="_blank" rel="noopener" title="${esc(S[id].t)}">${esc(short(S[id].w))}</a>`).join('');
  return `<section class="slide ${s.cls||''}" data-act="${s.act}" data-t="${s.t}" data-src="${ids.join(' ')}">${s.html}<aside class="note">${s.note||''}</aside><footer class="foot">${ids.length?`<span class="ask">منبعش کو؟</span><span class="srcs">${links}</span>`:''}<span class="pg">${fa(i+1)}</span></footer></section>`}).join('\n');
html=html.replace(/([A-Za-z0-9)])، (?=[A-Za-z])/g,'$1،\u200F ').replace('{{CHART}}',chart).replace('{{HOST}}',hostLine);
// فهرست منابع به ترتیب اسلاید
const rows=[];const seen=new Set();for(const[n,ids]of list)for(const id of ids){if(seen.has(id))continue;seen.add(id);rows.push([n,S[id]])}
const per=12;let n=slides.length;
for(let i=0;i<rows.length;i+=per){n++;html+=`<section class="slide" data-act="7" data-t="پیوست" data-src=""><h1>منابع${i?' (ادامه)':''}</h1><div class="srclist">${rows.slice(i,i+per).map(([k,x])=>`<div><b>اسلاید ${fa(k)}: ${esc(x.t)}</b><br><bdi>${esc(x.w)}</bdi> · <bdi dir="rtl">${esc(x.d)}</bdi><br><a href="${esc(x.u)}" target="_blank" rel="noopener">${esc(decodeURIComponent(x.u).replace(/^https?:\/\/(www\.)?/,'').slice(0,74))}</a></div>`).join('')}</div><footer class="foot"><span class="pg">${fa(n)}</span></footer></section>`}
const SRC=JSON.stringify(Object.fromEntries([...used].map(id=>[id,{t:S[id].t,w:S[id].w,d:S[id].d,c:S[id].c,k:S[id].k,u:S[id].u}]))).replace(/</g,'\\u003c');
const font=(fam,file,w,r)=>`@font-face{font-family:"${fam}";src:url(data:font/woff2;base64,${b64('fonts/'+file)}) format("woff2");font-weight:${w};font-display:block;${r?`unicode-range:${r};`:''}}`;
const css=font('V','vazirmatn-arabic.woff2','100 900','U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0897-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FEFC')+font('V','vazirmatn-latin.woff2','100 900','U+0000-00FF,U+2000-200B,U+2012-206F,U+20AC,U+2122,U+2190-2193,U+2212')+font('L','lalezar.woff2','400')+rd('src/style.css');
const ar=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const body=`<div class="stage">${html}</div><button class="arrow" id="b-next" aria-label="بعدی">${ar('M15 5l-7 7 7 7')}</button><button class="arrow" id="b-prev" aria-label="قبلی">${ar('M9 5l7 7-7 7')}</button><div id="bar"></div><div id="panel" hidden></div><div id="ov" hidden></div><script>${rd('src/qr.js')}\nconst SRC=${SRC};\n${rd('src/deck.js')}</script>`;
const head=`<title>نرم‌افزار مُرد؟ منبعش کو؟</title><style>${css}</style>`;
fs.writeFileSync(path.join(here,'index.html'),`<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">${head}</head><body>${body}</body></html>`);
if(process.argv[2])fs.writeFileSync(process.argv[2],head+body);
console.log('slides',slides.length,'+',n-slides.length,'| sources',Object.keys(S).length,'| on slides',used.size);
