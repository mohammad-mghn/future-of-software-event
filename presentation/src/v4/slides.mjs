// v4: the slide order. Content lives in c0..c5 (one file per chapter); helpers in kit.mjs. v3 is kept in ./v3.
// Each slide: S({act, src, cls, say}, html). say = the spoken script (▶ = next click).
import {out,PARTS,MAP} from './kit.mjs';
import './c0.mjs';
import './c1.mjs';
import './c2.mjs';
import './c3.mjs';
import './c4.mjs';
import './c5.mjs';
import './c6.mjs';
export {PARTS,MAP};
export default out;
