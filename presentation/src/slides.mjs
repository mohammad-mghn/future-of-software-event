// v5: the slide order. Content lives in k0..k6 (start, then one file per chapter; k6 holds chapter 6 and the ending). Helpers in kit.mjs.
// v3 is kept in ./v3, v4 in ./v4. Each slide: S({act, src, cls, say}, html). say = the spoken script (▶ = next click).
import {out,PARTS,TITLE,SUB} from './kit.mjs';
import './k0.mjs';
import './k1.mjs';
import './k2.mjs';
import './k3.mjs';
import './k4.mjs';
import './k5.mjs';
import './k6.mjs';
export {PARTS,TITLE,SUB};
export default out;
