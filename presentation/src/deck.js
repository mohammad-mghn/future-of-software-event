const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const fa=n=>String(n).replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const slides=$$('.slide'),stage=$('.stage'),bar=$('#bar');let cur=0,step=0,t0=null,read=false;const FINAL=location.search.includes('final'); // ?final = همه‌چیز آشکار
const frags=s=>$$('.f',s),steps=s=>frags(s).length; // sources are always visible: no extra click
const acts=[...new Set(slides.map(s=>s.dataset.act))];
acts.forEach(a=>{const b=document.createElement('button');b.setAttribute('aria-label','بخش '+a);b.innerHTML='<i></i>';b.onclick=()=>go(slides.findIndex(s=>s.dataset.act===a));bar.append(b)});
function fit(){if(read)return;const k=Math.min(innerWidth/1280,innerHeight/720);stage.style.transform=`scale(${k}) translate(-50%,-50%)`}
function paint(){const s=slides[cur];if(FINAL)step=steps(s);slides.forEach((x,i)=>x.classList.toggle('on',i===cur));frags(s).forEach((f,i)=>f.classList.toggle('show',i<step));
 $$('#bar i').forEach((x,k)=>{const g=slides.map((q,i)=>[q,i]).filter(([q])=>q.dataset.act===acts[k]).map(([,i])=>i);const d=g.filter(i=>i<=cur).length/g.length;x.style.width=d*100+'%'});
 panel();try{history.replaceState(null,'','#s'+(cur+1))}catch(e){}}
function go(i,st=0){cur=Math.max(0,Math.min(slides.length-1,i));step=st;if(read)slides[cur].scrollIntoView();else paint()}
function next(){if(t0===null)t0=Date.now();if(step<steps(slides[cur])){step++;paint()}else if(cur<slides.length-1)go(cur+1)}
function prev(){if(step>0&&!FINAL){step--;paint()}else if(cur>0)go(cur-1,steps(slides[cur-1]))}
function panel(){const p=$('#panel');if(!p||p.hidden)return;const s=slides[cur],n=$('.note',s),el=t0?Math.floor((Date.now()-t0)/1000):0;
 p.innerHTML=`<div class="meta">اسلاید ${fa(cur+1)} از ${fa(slides.length)} · گذشته ${fa(Math.floor(el/60))}:${fa(String(el%60).padStart(2,'0'))} · برنامه ${s.dataset.t||'—'}</div><div>${n?n.innerHTML:'—'}</div>`}
function overlay(){const o=$('#ov');if(!o.hidden){o.hidden=true;return}const ids=(slides[cur].dataset.src||'').split(' ').filter(Boolean);if(!ids.length)return;
 o.innerHTML='<h2>منبعش کو؟ این‌جاست.</h2><div class="grid">'+ids.map(id=>{const x=SRC[id];return `<div class="it">${qrSvg(x.u,230)}<b>${x.t}</b><span><bdi>${x.w}</bdi> · <bdi dir="rtl">${x.d}</bdi></span><span class="tag"><b>حواست باشه:</b> ${x.c}</span><span class="tag"><b>سودش:</b> ${x.k}</span><a href="${x.u}" target="_blank" rel="noopener">باز کردن منبع</a></div>`}).join('')+'</div>';o.hidden=false}
function setRead(v){read=v;document.body.classList.toggle('read',v);stage.style.transform='';if(!v){fit();paint()}}
addEventListener('resize',()=>{const r=innerWidth<800;if(r!==read)setRead(r);else fit()});
addEventListener('keydown',e=>{if(e.metaKey||e.ctrlKey||e.altKey||read)return;const k=e.key;
 if(!$('#ov').hidden){if(['Escape','s','S','س',' '].includes(k)){$('#ov').hidden=true;e.preventDefault()}return}
 if(['ArrowLeft','ArrowDown','PageDown',' ','Enter'].includes(k)){next();e.preventDefault()}
 else if(['ArrowRight','ArrowUp','PageUp'].includes(k)){prev();e.preventDefault()}
 else if(k==='Home')go(0);else if(k==='End')go(slides.length-1);
 else if(['s','S','س'].includes(k))overlay();
 else if(['n','N','د'].includes(k)){const p=$('#panel');p.hidden=!p.hidden;panel()}
 else if(['f','F','ب'].includes(k)){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>{})}});
$('#b-next').onclick=e=>{next();e.currentTarget.blur()};$('#b-prev').onclick=e=>{prev();e.currentTarget.blur()};
$('#ov').onclick=e=>{if(e.target.id==='ov')e.target.hidden=true};
setInterval(panel,1000);
const h=+(location.hash.match(/^#s(\d+)$/)||[])[1];if(h)cur=Math.min(slides.length,h)-1;
addEventListener('hashchange',()=>{const n=+(location.hash.match(/^#s(\d+)$/)||[])[1];if(n&&n-1!==cur)go(n-1)});
if(innerWidth<800)setRead(true);else{fit();paint()}
