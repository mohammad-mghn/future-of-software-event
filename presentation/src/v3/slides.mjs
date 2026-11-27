// v3: the slide order. Content lives in p0..p4 (one file per part); helpers in kit.mjs.
// Each slide: S({act, src, cls, say}, html). say = the spoken script (▶ = next click).
import {out,PARTS} from './kit.mjs';
import './p0.mjs';
import './p1.mjs';
import './p2.mjs';
import './p3.mjs';
import './p4.mjs';
export {PARTS};
export default out;
