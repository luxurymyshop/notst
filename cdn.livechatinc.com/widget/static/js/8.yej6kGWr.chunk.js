import {
    _ as t
} from "./3.BD1ZN3cS.chunk.js";
import {
    g as r,
    d as o,
    t as s,
    f as n
} from "./6.CKlS54Ol.chunk.js";
const a = t => {
        const o = r(t);
        return !!o && /chatbot\.com$/.test(o)
    },
    e = r => {
        const a = o(s(n(r)));
        if (a.p) try {
            return t(decodeURIComponent, JSON.parse(atob(a.p)))
        } catch {
            return null
        }
        return null
    };
export {
    e as d, a as i
};