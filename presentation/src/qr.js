// Minimal QR encoder: byte mode, error level L, versions 1-40. Returns a boolean matrix.
function qrMatrix(text){
  const ECC=[0,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30];
  const BLK=[0,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25];
  const data=[...new TextEncoder().encode(text)];
  const raw=v=>{let r=(16*v+128)*v+64;if(v>=2){const n=Math.floor(v/7)+2;r-=(25*n-10)*n-55;if(v>=7)r-=36}return r};
  const cap=v=>Math.floor(raw(v)/8)-ECC[v]*BLK[v];
  let ver=1;for(;;ver++){if(ver>40)throw Error('too long');const cc=ver<10?8:16;if(4+cc+data.length*8<=cap(ver)*8)break}
  const bits=[];const put=(val,len)=>{for(let i=len-1;i>=0;i--)bits.push((val>>>i)&1)};
  put(4,4);put(data.length,ver<10?8:16);data.forEach(b=>put(b,8));
  const total=cap(ver)*8;put(0,Math.min(4,total-bits.length));put(0,(8-bits.length%8)%8);
  for(let p=0xEC;bits.length<total;p^=0xEC^0x11)put(p,8);
  const cw=[];for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=b<<1|bits[i+j];cw.push(b)}
  const mul=(x,y)=>{let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z};
  const div=deg=>{const r=Array(deg).fill(0);r[deg-1]=1;let root=1;for(let i=0;i<deg;i++){for(let j=0;j<deg;j++){r[j]=mul(r[j],root);if(j+1<deg)r[j]^=r[j+1]}root=mul(root,2)}return r};
  const rem=(d,dv)=>{const r=dv.map(()=>0);for(const b of d){const f=b^r.shift();r.push(0);dv.forEach((c,i)=>r[i]^=mul(c,f))}return r};
  const nb=BLK[ver],el=ECC[ver],rawCw=Math.floor(raw(ver)/8),nShort=nb-rawCw%nb,sl=Math.floor(rawCw/nb),dv=div(el),blocks=[];
  for(let i=0,k=0;i<nb;i++){const d=cw.slice(k,k+sl-el+(i<nShort?0:1));k+=d.length;const e=rem(d,dv);if(i<nShort)d.push(0);blocks.push(d.concat(e))}
  const out=[];for(let i=0;i<blocks[0].length;i++)blocks.forEach((b,j)=>{if(i!==sl-el||j>=nShort)out.push(b[i])});
  const n=ver*4+17,M=Array.from({length:n},()=>Array(n).fill(false)),F=Array.from({length:n},()=>Array(n).fill(false));
  const set=(x,y,v)=>{M[y][x]=v;F[y][x]=true};
  for(let i=0;i<n;i++){set(6,i,i%2===0);set(i,6,i%2===0)}
  const finder=(cx,cy)=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const d=Math.max(Math.abs(dx),Math.abs(dy)),x=cx+dx,y=cy+dy;if(x>=0&&x<n&&y>=0&&y<n)set(x,y,d!==2&&d!==4)}};
  finder(3,3);finder(n-4,3);finder(3,n-4);
  const al=[];if(ver>1){const k=Math.floor(ver/7)+2,step=ver===32?26:Math.ceil((ver*4+4)/(k*2-2))*2;al.push(6);for(let p=n-7;al.length<k;p-=step)al.splice(1,0,p)}
  al.forEach((ax,i)=>al.forEach((ay,j)=>{const L=al.length-1;if((i===0&&j===0)||(i===0&&j===L)||(i===L&&j===0))return;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)set(ax+dx,ay+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)}));
  const fmt=mask=>{const d=1<<3|mask;let r=d;for(let i=0;i<10;i++)r=(r<<1)^((r>>>9)*0x537);const b=(d<<10|r)^0x5412,g=i=>((b>>>i)&1)!==0;
    for(let i=0;i<=5;i++)set(8,i,g(i));set(8,7,g(6));set(8,8,g(7));set(7,8,g(8));for(let i=9;i<15;i++)set(14-i,8,g(i));
    for(let i=0;i<8;i++)set(n-1-i,8,g(i));for(let i=8;i<15;i++)set(8,n-15+i,g(i));set(8,n-8,true)};
  fmt(0);
  if(ver>=7){let r=ver;for(let i=0;i<12;i++)r=(r<<1)^((r>>>11)*0x1F25);const b=ver<<12|r;for(let i=0;i<18;i++){const v=((b>>>i)&1)!==0,a=n-11+i%3,c=Math.floor(i/3);set(a,c,v);set(c,a,v)}}
  let i=0;for(let right=n-1;right>=1;right-=2){if(right===6)right=5;for(let v=0;v<n;v++)for(let j=0;j<2;j++){const x=right-j,up=((right+1)&2)===0,y=up?n-1-v:v;if(!F[y][x]&&i<out.length*8){M[y][x]=((out[i>>>3]>>>(7-(i&7)))&1)!==0;i++}}}
  for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(!F[y][x]&&(x+y)%2===0)M[y][x]=!M[y][x]; // mask 0
  fmt(0);
  return M;
}
function qrSvg(text,size){const m=qrMatrix(text),n=m.length,q=4;let d='';m.forEach((r,y)=>r.forEach((v,x)=>{if(v)d+=`M${x+q} ${y+q}h1v1h-1z`}));return `<svg class="qr" viewBox="0 0 ${n+q*2} ${n+q*2}" width="${size}" height="${size}" role="img" aria-label="QR"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#0E1A2B"/></svg>`}
