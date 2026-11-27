// v4 helpers for the slide files. Each slide: S({act, src, cls, say}, html).
// say = the spoken script. Blank lines split paragraphs. Each ▶ in say = one click = one element with class "f".
// Hand marks in any text: <span class="o">…</span> circle, <span class="u">…</span> underline, <span class="x">…</span> cross.
export const out=[];
export const S=(o,html)=>out.push({...o,html});
export const PARTS=['کد ارزون شد؛ چی گرون شد؟','چرا جونیورها اول؟','آدم‌های بزرگ چی می‌گن؟','بازار پول چی رو می‌ده؟','چی کار کنیم، و چرا جواب می‌ده؟'];
export const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const F=f=>f?'f':'';
const sg=t=>/^[+−-]/.test(t)?`<bdi dir="ltr">${t}</bdi>`:t; // +۲۲۰٪ keeps its sign on the left
// headline = the claim; k = small red label above it
export const H=(t,k)=>`<header>${k?`<div class="k">${k}</div>`:''}<h1>${t}</h1></header>`;
export const body=(...x)=>`<div class="body">${x.join('')}</div>`;
// chapter opener: number, the chapter's question, one line
export const ch=(n,t,p)=>`<div class="n">${fa(n)}</div><h1>${t}</h1>${p?`<p>${p}</p>`:''}`;
// one big sentence, optional quieter line under it
export const say=(t,sub,f=false)=>`<div class="say ${F(f)}"><p>${t}</p>${sub?`<small>${sub}</small>`:''}</div>`;
// big numbers: [value, what it is, 'r'|'m'|'']
export const nums=(a,f=true)=>`<div class="nums n${a.length}">${a.map(([v,l,c=''])=>`<div class="${c} ${F(f)}"><b>${sg(v)}</b><span>${l}</span></div>`).join('')}</div>`;
// bars: [label (may hold <small>), length 0-100, value text, 'r'|'m'|'']
export const bars=(a,f=false)=>`<div class="bars">${a.map(([l,v,t,c=''])=>`<div class="${c} ${F(f)}"><span>${l}</span><i style="--v:${v}"></i><b>${sg(t)}</b></div>`).join('')}</div>`;
// reasoning: [tag, sentence], tag like «چون» «پس» «یعنی»
export const why=(a,f=true)=>`<ol class="why">${a.map(([t,s])=>`<li class="${F(f)}"><em>${t}</em><p>${s}</p></li>`).join('')}</ol>`;
// numbered big lines: [bold line, quiet line]
export const list=(a,f=true)=>`<ol class="list">${a.map(([b,s])=>`<li class="${F(f)}"><div><b>${b}</b>${s?`<span>${s}</span>`:''}</div></li>`).join('')}</ol>`;
// a hand-drawn arrow pointing left (forward in RTL)
export const arrow=`<svg viewBox="0 0 150 80" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M140 44C112 30 70 26 22 40"/><path d="M40 22L20 41L44 56"/></svg>`;
// two sides: [title, [lines]] on the right (lo = what got cheap), [title, [lines]] on the left (hi = what got expensive)
export const two=([t1,a1],[t2,a2])=>`<div class="two"><div class="lo"><h3>${t1}</h3>${a1.map(p=>`<p>${p}</p>`).join('')}</div><div class="f">${arrow}</div><div class="hi f"><h3>${t2}</h3>${a2.map(p=>`<p>${p}</p>`).join('')}</div></div>`;
// the work pipe: [name, note, 'fast'|'jam'|'', tag]
const ar=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>`;
export const pipe=(a,q=0)=>`<div class="pipe">${a.map(([n,s,c='',tag],i)=>`${i?`<div class="ar">${ar}</div>`:''}<div class="st ${c}">${tag?`<span class="tag">${tag}</span>`:''}${c==='jam'&&q?`<span class="q f">${'<i></i>'.repeat(q)}</span>`:''}${n}${s?`<small>${s}</small>`:''}</div>`).join('')}</div>`;
// a person: photo or initials, their sentence, original words, what we saw, our reading
export const person=({img,ini,name,role,q,en,when,saw,ours})=>`<div class="person"><figure>${img?`<img src="{{img:${img}}}" alt="${name}">`:`<div class="ini">${ini}</div>`}<figcaption><b class="en">${name}</b>${role}${img?`<i>{{cr:${img}}}</i>`:''}</figcaption></figure><div><blockquote>«${q}»</blockquote><div class="en">“${en}” · ${when}</div><dl>${saw?`<div class="f"><dt>بعدش چی دیدیم</dt><dd>${saw}</dd></div>`:''}${ours?`<div class="f"><dt>برداشت ما</dt><dd>${ours}</dd></div>`:''}</dl></div></div>`;
// habits: [what to do, why it works]
export const habits=a=>`<div class="habits">${a.map(([b,p])=>`<div class="f"><b>${b}</b><p><em>چرا؟</em>${p}</p></div>`).join('')}</div>`;
// slope chart: two points per series. s = [[label, start, end, 'r'|'']], from/to labels, y range
export const slope=({s,from,to,lo,hi,unit=''})=>{const W=640,Hh=330,x0=120,x1=W-120,y=v=>20+(hi-v)/(hi-lo)*(Hh-40);
 return `<svg class="chart" viewBox="0 0 ${W} ${Hh+40}" role="img"><line class="ax" x1="${x0}" y1="10" x2="${x0}" y2="${Hh}"/><line class="ax" x1="${x1}" y1="10" x2="${x1}" y2="${Hh}"/>${s.map(([l,a,b,c])=>{const col=c==='r'?'var(--red)':'var(--ink)';return `<line x1="${x0}" y1="${y(a)}" x2="${x1}" y2="${y(b)}" stroke="${col}" stroke-width="6" stroke-linecap="round"/><circle cx="${x0}" cy="${y(a)}" r="9" fill="${col}"/><circle cx="${x1}" cy="${y(b)}" r="9" fill="${col}"/><text x="${x1+20}" y="${y(b)+14}" font-size="44" font-family="L,V" fill="${col}" text-anchor="start" direction="ltr">${fa(b)}${unit}</text><text x="${x1+20}" y="${y(b)+46}" font-size="20" class="mu" text-anchor="start" direction="rtl">${l}</text>`}).join('')}<text x="${x0-20}" y="${y(s[0][1])+14}" font-size="44" font-family="L,V" text-anchor="end">${fa(s[0][1])}</text><text x="${x0}" y="${Hh+34}" font-size="21" class="mu" text-anchor="middle">${from}</text><text x="${x1}" y="${Hh+34}" font-size="21" class="mu" text-anchor="middle">${to}</text></svg>`};
// rising line with labelled dots: pts = [[x 0-1, value 0-100, label, sub]]
export const rise=pts=>{const W=900,Hh=330,X=x=>40+x*(W-80),Y=v=>Hh-v/100*(Hh-30);
 return `<svg class="chart" viewBox="0 0 ${W} ${Hh+20}" role="img"><line class="ax" x1="20" y1="${Hh}" x2="${W-20}" y2="${Hh}"/><polyline points="${pts.map(([x,v])=>`${X(x)},${Y(v)}`).join(' ')}" fill="none" stroke="var(--ink)" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>${pts.map(([x,v,l,sub],i)=>`<circle cx="${X(x)}" cy="${Y(v)}" r="11" fill="${i===pts.length-1?'var(--red)':'var(--ink)'}"/><text x="${X(x)}" y="${Y(v)-58}" font-size="46" font-family="L,V" text-anchor="middle" fill="${i===pts.length-1?'var(--red)':'var(--ink)'}">${l}</text><text x="${X(x)}" y="${Y(v)-26}" font-size="20" class="mu" text-anchor="middle" direction="rtl">${sub}</text>`).join('')}</svg>`};
// the storyline: what got cheap -> what got expensive, one row per chapter. on = chapter to highlight (0 = none)
export const MAP=[['کد','فهمیدن مسئله، اطمینان، جوابگو بودن'],['کارِ کوچیکِ جونیورها و رزومه','اثبات اون سه تا، و اعتماد'],['ادعا و پیش‌بینی','سنجیدنش با چیزی که بعدش دیدیم'],['خروجیِ ظاهراً درست','کاری که اشتباهش گرونه و دیر پیدا می‌شه'],['جواب','فهمیدن؛ همون چیزی که باهاش جواب رو چک می‌کنی']];
export const map=(on=0,f=false)=>`<div class="map ${on?'now':''}"><div class="hd"><span>فصل</span><span>چی ارزون شد</span><span></span><span>حالا چی گرون شد</span></div>${MAP.map(([a,b],i)=>`<div class="${i+1===on?'on':''} ${f?'f':''}"><b>${fa(i+1)}</b><span class="lo">${a}</span>${arrow}<span class="hi">${b}</span></div>`).join('')}</div>`;
// voices: [img id or initials, 'name · when', sentence]
const vo=a=>`<div class="vo">${a.map(([im,w,q])=>`<div>${/^[a-z-]+$/.test(im)?`<img src="{{img:${im}}}" alt="">`:`<div class="ini">${im}</div>`}<div><b><bdi>${w}</bdi></b><p>«${q}»</p></div></div>`).join('')}</div>`;
export const voices=(a,f=false)=>`<div class="${f?'f':''}">${vo(a)}</div>`;
export const camps=([t1,a1],[t2,a2])=>`<div class="camps"><div class="f"><h3>${t1}</h3>${vo(a1)}</div><div class="f"><h3>${t2}</h3>${vo(a2)}</div></div>`;
// table: cols = grid-template-columns, head = [..], rows = [[..]] (rows are clicks)
export const table=(cols,head,rows,f=true)=>`<div class="tbl"><div class="hd" style="grid-template-columns:${cols}">${head.map(h=>`<span>${h}</span>`).join('')}</div>${rows.map(r=>`<div class="${f?'f':''}" style="grid-template-columns:${cols}">${r.map(c=>`<span>${c}</span>`).join('')}</div>`).join('')}</div>`;
// three paths: [title, line, quiet line]
export const paths=a=>`<div class="paths">${a.map(([t,p,q])=>`<div class="f"><h3>${t}</h3><p>${p}</p>${q?`<p>${q}</p>`:''}</div>`).join('')}</div>`;
