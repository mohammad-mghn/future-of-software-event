// v5 helpers. Each slide: S({act, src, cls, say}, html).
// say = the spoken script. Blank lines split paragraphs. Each ▶ in say = one click = one element with class "f".
// Rules (planning/v5-storyline.md): one visual per slide, title = the claim, ≤3 numbers, red hand marks, blue = what got expensive.
export const out=[];
export const S=(o,html)=>out.push({...o,html});
export const TITLE='کجا وایسادیم؟';
export const SUB='خوندنِ بازارِ نرم‌افزار بعد از AI، بدونِ پیش‌گویی';
export const PARTS=['پشت عدد: چی شده، و چرا؟','پشت حرف: آدم‌های بزرگ چی می‌گن، و چرا؟','پشت تغییر: چی ارزون شد، چی گرون شد، تا کِی؟','استک تو کجای این نقشه‌ست؟','چی یاد بگیریم، و چطوری؟','اگه…؟ سناریو، نه پیش‌گویی'];
export const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const F=f=>f?'f':'';
const sg=t=>/^[+−-]/.test(t)?`<bdi dir="ltr">${t}</bdi>`:t; // +۲۲۰٪ keeps its sign on the left
// headline = the claim. k = optional small red label (chapter openers only)
export const H=(t,k)=>`<header>${k?`<div class="k">${k}</div>`:''}<h1>${t}</h1></header>`;
export const body=(...x)=>`<div class="body">${x.join('')}</div>`;
// chapter opener: number, the chapter's question, one line
export const ch=(n,t,p)=>`<div class="n">${fa(n)}</div><h1>${t}</h1>${p?`<p>${p}</p>`:''}`;
// one big sentence, optional quieter line under it
export const say=(t,sub,f=false)=>`<div class="say ${F(f)}"><p>${t}</p>${sub?`<small>${sub}</small>`:''}</div>`;
// --- hand marks ---
// go(): an invisible click marker. Whatever follows it as a sibling animates when it shows (strike lines, bars).
export const go=()=>`<i class="f go" aria-hidden="true"></i>`;
// a wrong word or headline: red line drawn through it on the next click when preceded by go()
export const strike=t=>`<span class="strike">${t}</span>`;
export const circ=t=>`<span class="o">${t}</span>`;   // red hand-drawn circle (qualifiers)
export const under=t=>`<span class="u">${t}</span>`;  // red underline
export const mark=t=>`<mark>${t}</mark>`;             // yellow marker: what got expensive, in a sentence
// --- one person, one sentence ---
// img: id in img/ (credit added), ini: initials if no photo. q: original words (≤15), tr: our Persian, when: where · date
// after: [[date, short line]] one per click; sells: one line (click); the slide title carries the verdict
export const person=({img,ini,name,role,q,tr,when,lead,after=[],sells})=>`<div class="person"><figure>${img?`<img src="{{img:${img}}}" alt="${name}">`:`<div class="ini">${ini||''}</div>`}<figcaption><b class="en">${name}</b><span>${role||''}</span>${img?`<i>{{cr:${img}}}</i>`:''}</figcaption></figure><div class="pq">${lead||''}<blockquote class="en">“${q}”</blockquote><p class="tr">${tr}</p><div class="when">${when}</div>${after.length?`<ul class="after">${after.map(([d,t])=>`<li class="f"><b>${d}</b>${t}</li>`).join('')}</ul>`:''}${sells?`<p class="sells f"><em>چی می‌فروشه؟</em>${sells}</p>`:''}</div></div>`;
// --- three (or two) big lines with red hand numbers: [[bold, quiet]] ---
export const three=(a,f=true)=>`<ol class="three">${a.map(([b,s])=>`<li class="${F(f)}"><div><b>${b}</b>${s?`<span>${s}</span>`:''}</div></li>`).join('')}</ol>`;
// the "until when?" line: blue, with its red question tag
export const until=(t,f=true)=>`<p class="until ${F(f)}"><em>تا کِی؟</em>${t}</p>`;
// --- role bar: the work of one role; cheap segments get struck through on the next click (put go() right before) ---
export const rolebar=({cheap,dear})=>`<div class="rolebar"><div class="lo">${cheap.map(x=>`<span><s>${x}</s></span>`).join('')}</div><div class="hi">${dear.map(x=>`<span>${x}</span>`).join('')}</div><div class="lg"><span class="a">ارزون شد</span><span class="b">گرون شد</span></div></div>`;
// one or two big numbers in a row: [[value, label, 'r'|'b'|'']]
export const stats=a=>`<div class="stats n${a.length}">${a.map(([v,l,c=''])=>`<div class="${c}"><b>${sg(v)}</b><span>${l}</span></div>`).join('')}</div>`;
// two labelled lines, one click. Default labels: the move and why it works; pass [l1,l2] for e.g. ['اسمش حالا','مهم‌ترینش']
export const move=(what,why,[l1,l2]=['حرکت','چرا جواب می‌ده؟'])=>`<div class="move f"><p><em>${l1}</em>${what}</p><p><em>${l2}</em>${why}</p></div>`;
// --- quote wall: all the sentences on one slide, small; each click swaps in one person's dissection below ---
// items: [{img|ini, name, date, q, mark ('✗'|'½'|'✓'|'⏳'), verdict, after, sells}]
const face=(x,cls='')=>x.img?`<img class="${cls}" src="{{img:${x.img}}}" alt="${x.name}">`:`<div class="ini ${cls}">${x.ini||''}</div>`;
export const qwall=items=>`<div class="qwall"><div class="wall">${items.map(x=>`<div class="cell">${face(x)}<div><b><bdi>${x.name}</bdi> · ${x.date}</b><p>«${x.q}»</p></div></div>`).join('')}</div><div class="caps">${items.map(x=>`<div class="cap f"><figure>${face(x)}<span class="mk">${x.mark}</span></figure><div><b><bdi>${x.name}</bdi>: ${x.verdict}</b><p><em>بعدش</em>${x.after}</p><p><em>می‌فروشه</em>${x.sells}</p></div></div>`).join('')}</div><div class="cr">${items.filter(x=>x.img).map(x=>`{{cr:${x.img}}}`).join(' · ')}</div></div>`;
// --- the work pipe (kept from v4): [name, note, 'fast'|'jam'|'', tag] ---
const ar=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;
export const pipe=(a,q=0)=>`<div class="pipe">${a.map(([n,s,c='',tag],i)=>`${i?`<div class="ar">${ar}</div>`:''}<div class="st ${c}">${tag?`<span class="tag">${tag}</span>`:''}${c==='jam'&&q?`<span class="q f">${'<i></i>'.repeat(q)}</span>`:''}${n}${s?`<small>${s}</small>`:''}</div>`).join('')}</div>`;
// a hand-drawn arrow pointing left (forward in RTL)
export const arrow=`<svg viewBox="0 0 150 80" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M140 44C112 30 70 26 22 40"/><path d="M40 22L20 41L44 56"/></svg>`;
// ===== v5 drawings and layouts (added for the full deck) =====
const P=n=>fa(n); // persian digits
// numbered big lines (clicks): [[bold, quiet]]
export const list=(a,f=true,cls='')=>`<ol class="list ${cls}">${a.map(([b,s])=>`<li class="${F(f)}"><div><b>${b}</b>${s?`<span>${s}</span>`:''}</div></li>`).join('')}</ol>`;
export const big=(t,f=true)=>`<p class="big ${F(f)}">${t}</p>`;
// two sides: [title,[lines]] right (cheap/old) and left (expensive/new), arrow between
export const two=([t1,a1],[t2,a2],f=true)=>`<div class="two"><div class="lo"><h3>${t1}</h3>${a1.map(p=>`<p>${p}</p>`).join('')}</div><div class="${F(f)}">${arrow}</div><div class="hi ${F(f)}"><h3>${t2}</h3>${a2.map(p=>`<p>${p}</p>`).join('')}</div></div>`;
// three columns with a top rule: [title, line, quiet line]
export const paths=(a,f=true)=>`<div class="paths">${a.map(([t,p,q])=>`<div class="${F(f)}"><h3>${t}</h3><p>${p}</p>${q?`<p>${q}</p>`:''}</div>`).join('')}</div>`;
// the map of the talk: three instruments. on = which to highlight (0 none). second row appears on click when `then` is given
export const map3=(items,then,on=0)=>`<div class="map3 ${on?'now':''}"><div class="row">${items.map(([w,q],i)=>`<div class="${i+1===on?'on':''}"><b>${P(i+1)}</b><h3>${w}</h3><p>${q}</p></div>`).join('')}</div>${then?`<p class="then f">${then}</p>`:''}</div>`;
// the noise: headlines appear together (one click, staggered), then a mute sign is drawn over them (second click)
export const noise=items=>`<div class="noise f">${items.map(([h,w])=>`<div class="hl"><p>«${h}»</p><small>${w}</small></div>`).join('')}</div>`;
export const mute=()=>`<div class="mute f"><svg viewBox="0 0 200 200" class="draw" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path pathLength="1" d="M40 78H72L112 44V156L72 122H40Z"/><path pathLength="1" d="M136 80L176 120M176 80L136 120"/></svg></div>`;
// horizontal bars, compact: rows = [label, value 0-100, text, 'r'|'b'|'']
export const hbars=(rows,f=false)=>`<div class="hbars">${rows.map(([l,v,t,c=''])=>`<div class="${c} ${F(f)}"><span>${l}</span><i style="--v:${v}"></i><b>${sg(t)}</b></div>`).join('')}</div>`;
// a line with labelled dots: pts = [[x 0-1, value, label, sub]], lo/hi = value range, last dot red
export const linechart=({pts,lo,hi,h=300})=>{const W=1000,X=x=>60+x*(W-120),Y=v=>h-30-(v-lo)/(hi-lo)*(h-110);
 return `<svg class="chart" viewBox="0 0 ${W} ${h}" role="img"><line class="ax" x1="30" y1="${h-30}" x2="${W-30}" y2="${h-30}"/><polyline points="${pts.map(([x,v])=>`${X(x)},${Y(v)}`).join(' ')}" fill="none" stroke="var(--ink)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>${pts.map(([x,v,l,sub],i)=>`<circle cx="${X(x)}" cy="${Y(v)}" r="11" fill="${i===pts.length-1?'var(--red)':'var(--ink)'}"/><text x="${X(x)}" y="${Y(v)-50}" font-size="40" font-family="L,V" text-anchor="middle" fill="${i===pts.length-1?'var(--red)':'var(--ink)'}">${l}</text><text x="${X(x)}" y="${Y(v)-20}" font-size="22" class="mu" text-anchor="middle" direction="rtl">${sub}</text>`).join('')}</svg>`};
// slope: two series, two points each. s=[[label, start, end, 'r'|'']], from/to labels, value range
export const slope=({s,from,to,lo,hi})=>{const W=1000,Hh=250,x0=170,x1=W-230,y=v=>20+(hi-v)/(hi-lo)*(Hh-40);
 return `<svg class="chart" viewBox="0 0 ${W} ${Hh+40}" role="img"><line class="ax" x1="${x0}" y1="10" x2="${x0}" y2="${Hh}"/><line class="ax" x1="${x1}" y1="10" x2="${x1}" y2="${Hh}"/>${s.map(([l,a,b,c])=>{const col=c==='r'?'var(--red)':'var(--ink)';return `<line x1="${x0}" y1="${y(a)}" x2="${x1}" y2="${y(b)}" stroke="${col}" stroke-width="6" stroke-linecap="round"/><circle cx="${x0}" cy="${y(a)}" r="9" fill="${col}"/><circle cx="${x1}" cy="${y(b)}" r="9" fill="${col}"/><text x="${x1+20}" y="${y(b)+14}" font-size="44" font-family="L,V" fill="${col}" text-anchor="start" direction="ltr">${P(b)}</text><text x="${x1+20}" y="${y(b)+48}" font-size="22" class="mu" text-anchor="start" direction="rtl">${l}</text>`}).join('')}<text x="${x0-28}" y="${y(s[0][1])+14}" font-size="44" font-family="L,V" text-anchor="end">${P(s[0][1])}</text><text x="${x0}" y="${Hh+34}" font-size="22" class="mu" text-anchor="middle">${from}</text><text x="${x1}" y="${Hh+34}" font-size="22" class="mu" text-anchor="middle">${to}</text></svg>`};
// the road: its width follows a series. pts = [[label above, sub below, value]], max = widest value, mark = {at: index, text} drawn on click
export const road=({pts,max,mark,h=330})=>{const W=1100,n=pts.length,xs=pts.map((_,i)=>90+i*(W-180)/(n-1)),mid=h/2,hw=v=>14+v/max*(mid-70);
 const up=xs.map((x,i)=>[x,mid-hw(pts[i][2])]),dn=xs.map((x,i)=>[x,mid+hw(pts[i][2])]);
 const seg=(pt,i,arr)=>{if(!i)return`M${pt[0]} ${pt[1]}`;const [x0,y0]=arr[i-1],[x1,y1]=pt,c=(x1-x0)/2;return`C${x0+c} ${y0} ${x1-c} ${y1} ${x1} ${y1}`};
 const top=up.map(seg).join(''),bot=[...dn].reverse().map((p,i,arr)=>seg(p,i,arr)).join('');
 const edge=`M${up[0][0]} ${up[0][1]}${up.slice(1).map((p,i)=>seg(p,i+1,up)).join('')}`,edge2=`M${dn[0][0]} ${dn[0][1]}${dn.slice(1).map((p,i)=>seg(p,i+1,dn)).join('')}`;
 return `<svg class="chart road draw" viewBox="0 0 ${W} ${h}" role="img"><path d="${top}L${dn[n-1][0]} ${dn[n-1][1]}${bot.slice(bot.indexOf('C'))}Z" fill="var(--soft)" stroke="none"/><path pathLength="1" d="${edge}" fill="none" stroke="var(--ink)" stroke-width="4"/><path pathLength="1" d="${edge2}" fill="none" stroke="var(--ink)" stroke-width="4"/><line x1="${xs[0]}" y1="${mid}" x2="${xs[n-1]}" y2="${mid}" stroke="var(--line)" stroke-width="3" stroke-dasharray="18 14"/>${pts.map(([l,sub,v],i)=>`<text x="${xs[i]}" y="${up[i][1]-26}" font-size="42" font-family="L,V" text-anchor="middle" fill="${i===n-1?'var(--red)':'var(--ink)'}">${l}</text><text x="${xs[i]}" y="${dn[i][1]+34}" font-size="22" class="mu" text-anchor="middle" direction="rtl">${sub}</text>`).join('')}${mark?`<g class="f"><line x1="${90+mark.at*(W-180)/(n-1)}" y1="18" x2="${90+mark.at*(W-180)/(n-1)}" y2="${h-18}" stroke="var(--red)" stroke-width="3" stroke-dasharray="8 8"/><text x="${90+mark.at*(W-180)/(n-1)+14}" y="34" font-size="22" fill="var(--red)" font-weight="800" text-anchor="end" direction="rtl">${mark.text}</text></g>`:''}</svg>`};
// a day as a bar of segments: rows = [label, [[segment, flex, 'r'|'b'|'']]]
export const daybars=rows=>`<div class="days">${rows.map(([l,segs])=>`<div class="day"><span class="lb">${l}</span><div class="segs">${segs.map(([t,w,c=''])=>`<i class="${c}" style="flex:${w}">${t}</i>`).join('')}</div></div>`).join('')}</div>`;
// the layered stack of a system; put go() before it to fade the top layer on click
export const layers=(a,note)=>`<div class="layers">${a.map((t,i)=>`<div class="ly ${i?'':'top'}">${t}</div>`).join('')}${note?`<p class="ln">${note}</p>`:''}</div>`;
// a checklist of conditions: cols = [names], rows = [[label, [marks ✓/✗/½...]]]
export const checks=(cols,rows)=>`<div class="checks" style="--n:${cols.length}"><div class="hd"><span></span>${cols.map(c=>`<span>${c}</span>`).join('')}</div>${rows.map(([l,m],i)=>`<div class="${i?'f':''}"><span class="lb">${l}</span>${m.map(x=>`<span class="mk ${x==='✓'?'ok':'no'}">${x}</span>`).join('')}</div>`).join('')}</div>`;
// one clean table (only slide: scenarios). cols = [names], rows = [[cells]] (rows are clicks)
export const oneTable=(cols,rows,f=true)=>`<div class="tbl" style="--n:${cols.length}"><div class="hd">${cols.map(c=>`<span>${c}</span>`).join('')}</div>${rows.map(r=>`<div class="${F(f)}">${r.map(c=>`<span>${c}</span>`).join('')}</div>`).join('')}</div>`;
// a tractor, drawn with a few strokes; put go() before to cross it out on click
export const tractor=()=>`<div class="tractor"><svg viewBox="0 0 520 300" class="draw" fill="none" stroke="var(--ink)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><circle pathLength="1" cx="150" cy="210" r="70"/><circle pathLength="1" cx="150" cy="210" r="22"/><circle pathLength="1" cx="400" cy="240" r="42"/><circle pathLength="1" cx="400" cy="240" r="12"/><path pathLength="1" d="M210 190H300V130H230L220 190M300 130L360 130L380 200H440"/><path pathLength="1" d="M300 190H350"/><path pathLength="1" d="M250 130V60H268V130M330 130V100"/><path pathLength="1" d="M200 96L160 96L150 140"/><circle pathLength="1" cx="190" cy="72" r="16"/><path pathLength="1" d="M190 88V120L170 140M190 100L215 112"/></svg><span class="xm"></span></div>`;
// a wave with a surfer on it
export const wave=()=>`<div class="wave"><svg viewBox="0 0 1100 260" class="draw" fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path pathLength="1" d="M20 220C140 220 180 120 300 120C420 120 440 60 540 60C640 60 660 150 760 150C860 150 900 230 1080 230"/><path pathLength="1" d="M300 200C360 200 380 170 440 170"/><path pathLength="1" d="M520 44L600 24M560 36V-2M560 -2L548 -14M560 -2L572 -14M548 34L536 50M572 34L584 48" stroke="var(--red)"/></svg></div>`;
// a labelled line under a chart, and the "tool" line a chapter hands over
export const lbl=t=>`<p class="lbl">${t}</p>`;
export const sub=(t,f=true)=>`<p class="sub ${F(f)}">${t}</p>`;
export const tool=(n,t,f=true)=>`<p class="tool ${F(f)}"><em>ابزار ${fa(n)}</em>${t}</p>`;
