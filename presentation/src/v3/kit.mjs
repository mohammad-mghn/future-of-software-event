// Shared helpers for the slide files (p0..p4). Each slide: S({act, t, src, cls, say}, html)
// say = the spoken script for that slide. Paragraphs are split by blank lines. ▶ marks the next click.
export const out=[];
export const S=(o,html)=>out.push({...o,html});
export const PARTS=['الان چی شده؟','کی چی می‌گه؟','بازار کی رو می‌خواد؟','ما چی کار کنیم؟'];
export const H=(kick,t)=>`${kick?`<div class="kick">${kick}</div>`:''}<h1>${t}</h1>`;
export const take=(t,l='یادت بمونه')=>`<div class="take f"><span>${l}</span><p>${t}</p></div>`;
export const div=(n,t,p)=>`<div class="dnum">${n}</div><h1>${t}</h1>${p?`<p>${p}</p>`:''}`;
// quote card: photo, their sentence (Persian + original), what the data says, our reading
export const quote=({img,ini,name,role,gain,q,en,when,data,ours})=>`<div class="qc"><div class="ph">${img?`<img src="{{img:${img}}}" alt="${name}">`:`<div class="ini">${ini||''}</div>`}<b class="en">${name}</b><span>${role}</span>${gain?`<div class="gain">${gain}</div>`:''}${img?`<div class="cr">{{cr:${img}}}</div>`:''}</div><div><div class="q">${q}</div><div class="orig">“${en}” · ${when}</div><div class="rows">${data?`<div class="row f"><span>داده چی می‌گه</span><p>${data}</p></div>`:''}${ours?`<div class="row me f"><span>برداشت ما</span><p>${ours}</p></div>`:''}</div></div></div>`;
export const paper=({mast,hdl,en})=>`<div class="paper"><div class="mast"><span>${mast[0]}</span><span>${mast[1]}</span></div><div class="hdl">${hdl}${en?`<span class="en">${en}</span>`:''}</div></div>`;
export const marks=a=>`<div class="marks">${a.map(x=>`<div class="f"><p>${x}</p></div>`).join('')}</div>`;
// bars: [label, length 0-100, value text, 'up'|'dn'|'mu'|'']
export const tl=a=>`<div class="tl">${a.map(([b,s,c=''])=>`<div class="f ${c}"><b>${b}</b><span>${s}</span></div>`).join('')}</div>`;
export const bars=(a,cls='')=>`<div class="bars ${cls}">${a.map(([l,v,txt,c=''])=>`<div class="bar ${c}"><span class="lab">${l}</span><i style="--v:${v}"></i><b>${txt}</b></div>`).join('')}</div>`;
export const steps=(a,cls='')=>`<div class="steps ${cls}">${a.map(x=>`<div class="f"><p>${x}</p></div>`).join('')}</div>`;
export const cards=(a,cls='grid3')=>`<div class="${cls}">${a.map(([t,p,c=''],i)=>`<div class="card ${c} f"><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>`;
export const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
// big numbers: [value, label, 'up'|'dn'|'bl'|''], fragments unless noF
export const nums=(a,{n=a.length,noF=false}={})=>`<div class="nums" style="--n:${n}">${a.map(([v,l,c=''])=>`<div class="${c} ${noF?'':'f'}"><b class="${/←/.test(v)?'rtl':''}">${v}</b><span>${l}</span></div>`).join('')}</div>`;
// chain of links; hi = index to highlight (with a tag)
export const chain=(a,hi,tag)=>`<div class="chain">${a.map(([t,s],i)=>`<div class="${i===hi?'hi':''}">${i===hi&&tag?`<span class="tag f">${tag}</span>`:''}<b>${t}</b><span>${s}</span></div>`).join('')}</div>`;
// small quote cards: [img or initials, name, role, quote (fa), original (en), verdict text, 'up'|'dn'|'eq']
export const faces=a=>`<div class="faces" style="--n:${a.length}">${a.map(([im,n,r,q,en,v,c])=>`<div class="f"><div class="who">${/^[a-z-]+$/.test(im)?`<img src="{{img:${im}}}" alt="${n}">`:`<div class="ini">${im}</div>`}<b class="en">${n}<span>${r}</span></b></div><q>${q}</q><div class="en">“${en}”</div><span class="v ${c}">${v}</span></div>`).join('')}</div>`;
// ranges in thousands of dollars on a [lo, hi] axis: [label, floor, mid, ceiling]
export const rng=(a,lo=150,hi=550)=>{const x=v=>((v-lo)/(hi-lo)*100).toFixed(1);return `<div class="rng"><div class="ax"><span></span><div class="tr">${[150,250,350,450,550].map(v=>`<span>$${v}K</span>`).join('')}</div><span></span></div>${a.map(([l,f0,m,c])=>`<div><span>${l}</span><div class="tr"><i style="left:${x(f0)}%;right:${(100-x(c)).toFixed(1)}%"></i><u style="left:calc(${x(m)}% - 2px)"></u></div><b>$${m}K</b></div>`).join('')}</div>`};
// table: cols = grid-template-columns, head = [..], rows = [[..]]
export const tbl=(cols,head,rows,f=true)=>`<div class="tbl"><div class="hd" style="grid-template-columns:${cols}">${head.map(h=>`<span>${h}</span>`).join('')}</div>${rows.map(r=>`<div class="${f?'f':''}" style="grid-template-columns:${cols}">${r.map(c=>`<span>${c}</span>`).join('')}</div>`).join('')}</div>`;
