import {
    aV as e,
    aW as t,
    _ as n,
    aF as r,
    aG as o,
    aX as a,
    aY as i,
    aZ as s,
    a_ as u,
    a$ as l,
    b0 as c,
    b1 as d,
    b2 as p,
    b3 as m,
    G as f,
    b4 as h,
    b5 as g,
    b6 as D,
    b7 as v,
    b8 as b,
    b9 as y,
    ba as x,
    bb as C,
    bc as E,
    bd as w,
    be as F,
    bf as k,
    bg as S,
    bh as L,
    F as T,
    bi as P,
    bj as B,
    bk as A,
    bl as M,
    bm as O,
    bn as I,
    bo as _,
    bp as z,
    bq as R,
    br as j,
    bs as N,
    bt as W,
    bu as V,
    bv as U,
    bw as H,
    bx as q,
    by as K,
    o as G,
    bz as Z,
    bA as Y,
    X as $,
    bB as X,
    bC as J,
    bD as Q,
    bE as ee,
    bF as te,
    U as ne,
    bG as re,
    bH as oe,
    bI as ae,
    bJ as ie,
    bK as se,
    bL as ue,
    bM as le,
    bN as ce,
    Z as de,
    Y as pe,
    bO as me,
    bP as fe,
    az as he,
    ax as ge,
    al as De,
    bQ as ve,
    bR as be,
    aU as ye,
    L as xe,
    bS as Ce,
    a3 as Ee,
    ay as we,
    bT as Fe,
    bU as ke,
    bV as Se,
    bW as Le,
    bX as Te,
    bY as Pe,
    bZ as Be,
    b_ as Ae,
    av as Me,
    b$ as Oe,
    aD as Ie,
    c0 as _e,
    p as ze,
    f as Re,
    z as je,
    c1 as Ne,
    c2 as We,
    c3 as Ve,
    c4 as Ue,
    c5 as He,
    c6 as qe,
    c7 as Ke,
    c8 as Ge,
    aE as Ze,
    c9 as Ye,
    ca as $e,
    cb as Xe,
    cc as Je,
    aH as Qe,
    aB as et,
    cd as tt,
    a6 as nt,
    aM as rt,
    ab as ot,
    ce as at,
    cf as it,
    cg as st,
    ch as ut,
    ci as lt,
    cj as ct,
    ck as dt,
    cl as pt,
    cm as mt,
    u as ft,
    cn as ht,
    c as gt,
    co as Dt,
    an as vt,
    cp as bt,
    cq as yt,
    cr as xt,
    cs as Ct,
    ct as Et,
    cu as wt,
    cv as Ft,
    cw as kt,
    cx as St,
    cy as Lt,
    cz as Tt,
    cA as Pt,
    cB as Bt,
    aL as At,
    cC as Mt,
    cD as Ot,
    cE as It,
    cF as _t,
    cG as zt,
    cH as Rt,
    b as jt,
    cI as Nt,
    cJ as Wt,
    cK as Vt,
    cL as Ut,
    cM as Ht,
    cN as qt,
    cO as Kt,
    cP as Gt,
    cQ as Zt,
    cR as Yt,
    cS as $t,
    g as Xt,
    cT as Jt,
    cU as Qt,
    cV as en,
    cW as tn,
    cX as nn,
    aj as rn,
    cY as on,
    cZ as an,
    c_ as sn,
    c$ as un,
    d0 as ln,
    d1 as cn,
    d2 as dn,
    d3 as pn,
    d4 as mn,
    d5 as fn,
    d6 as hn,
    d7 as gn,
    d8 as Dn,
    d9 as vn,
    r as bn,
    da as yn,
    db as xn,
    a as Cn,
    dc as En,
    dd as wn,
    de as Fn,
    df as kn,
    dg as Sn,
    dh as Ln,
    di as Tn,
    aa as Pn,
    aI as Bn,
    K as An,
    dj as Mn,
    am as On,
    dk as In,
    dl as _n,
    ac as zn
} from "./3.BD1ZN3cS.chunk.js";
import {
    v as Rn,
    w as jn,
    e as Nn,
    q as Wn,
    r as Vn,
    n as Un,
    g as Hn,
    c as qn,
    x as Kn,
    d as Gn,
    y as Zn,
    h as Yn,
    u as $n,
    z as Xn,
    a as Jn,
    f as Qn,
    k as er
} from "./5.8dnJ5-bs.chunk.js";
import {
    k as tr
} from "./4.C_rgEAoe.chunk.js";
import {
    i as nr,
    L as rr,
    b as or,
    c as ar,
    e as ir,
    g as sr
} from "./6.CKlS54Ol.chunk.js";
import {
    _ as ur
} from "./13.Du4z9uvj.chunk.js";

function lr(t, n) {
    return e(e => (t.on(n, e), () => {
        t.off(n, e)
    }))
}

function cr(e) {
    return function(t, n) {
        if (0 === t) {
            var r, o, a, i = 0;
            e(0, (function(e, t) {
                if (0 === e && (a = t), 1 === e) {
                    var s = [o, t];
                    r = s[0], o = s[1], ++i < 2 ? a(1) : n(1, [r, o])
                } else n(e, t)
            }))
        }
    }
}

function dr() {
    return (dr = Object.assign || function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.forEach(t => {
            for (const n in t) Rn(n, t) && (e[n] = t[n])
        }), e
    })(...arguments)
}

function pr(e) {
    return jn(e) ? e.map(pr) : t(e) ? n(pr, e) : e
}

function mr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce((e, t) => function() {
        return e(t(...arguments))
    })
}

function fr(e, t) {
    let n;
    return function() {
        clearTimeout(n);
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
        n = setTimeout(t, e, ...o)
    }
}

function hr(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
    if (!r.length) return e;
    const a = r.shift();
    if (t(e) && t(a))
        for (const i in a) t(a[i]) ? (e[i] || Object.assign(e, {
            [i]: {}
        }), hr(e[i], a[i])) : Object.assign(e, {
            [i]: a[i]
        });
    return hr(e, ...r)
}

function gr(e, t) {
    return t.slice(0, -e)
}

function Dr(e) {
    return e
}

function vr(e, t, n) {
    const o = r(t, n);
    return null != o ? o : e
}

function br(e, t) {
    const n = {};
    return function() {
        const r = e(...arguments);
        if (Rn(r, n)) return n[r];
        const o = t(...arguments);
        return n[r] = o, o
    }
}

function yr(e) {
    return br(Dr, e)
}

function xr(e, t) {
    return tr(t).reduce((n, r) => (e(t[r], r) && (n[r] = t[r]), n), {})
}

function Cr(e, t) {
    const n = [...t];
    return n.splice(e, 1), n
}

function Er(e, t, n) {
    const r = jn(e) ? e : e.split("."),
        o = r[0];
    let a = t;
    if (r.length > 1) {
        const e = null != n && Rn(o, n) ? n[o] : {};
        a = Er(r.slice(1), t, e)
    }
    return { ...n,
        [o]: a
    }
}
var wr = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    },
    Fr = {
        INIT: "@@redux/INIT" + wr(),
        REPLACE: "@@redux/REPLACE" + wr(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + wr()
        }
    };

function kr(e) {
    if ("object" != typeof e || null === e) return !1;
    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}

function Sr(e, t, n) {
    var r;
    if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(Sr)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var o = e,
        i = t,
        s = [],
        u = s,
        l = !1;

    function c() {
        u === s && (u = s.slice())
    }

    function d() {
        if (l) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return i
    }

    function p(e) {
        if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
        if (l) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        var t = !0;
        return c(), u.push(e),
            function() {
                if (t) {
                    if (l) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    t = !1, c();
                    var n = u.indexOf(e);
                    u.splice(n, 1)
                }
            }
    }

    function m(e) {
        if (!kr(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (l) throw new Error("Reducers may not dispatch actions.");
        try {
            l = !0, i = o(i, e)
        } finally {
            l = !1
        }
        for (var t = s = u, n = 0; n < t.length; n++) {
            (0, t[n])()
        }
        return e
    }

    function f(e) {
        if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
        o = e, m({
            type: Fr.REPLACE
        })
    }

    function h() {
        var e, t = p;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(d())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[a] = function() {
            return this
        }, e
    }
    return m({
        type: Fr.INIT
    }), (r = {
        dispatch: m,
        subscribe: p,
        getState: d,
        replaceReducer: f
    })[a] = h, r
}

function Lr(e, t) {
    var n = t && t.type;
    return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
}

function Tr(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        "function" == typeof e[o] && (n[o] = e[o])
    }
    var a, i = Object.keys(n);
    try {
        ! function(e) {
            Object.keys(e).forEach((function(t) {
                var n = e[t];
                if (void 0 === n(void 0, {
                        type: Fr.INIT
                    })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                if (void 0 === n(void 0, {
                        type: Fr.PROBE_UNKNOWN_ACTION()
                    })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + Fr.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
            }))
        }(n)
    } catch (Am) {
        a = Am
    }
    return function(e, t) {
        if (void 0 === e && (e = {}), a) throw a;
        for (var r = !1, o = {}, s = 0; s < i.length; s++) {
            var u = i[s],
                l = n[u],
                c = e[u],
                d = l(c, t);
            if (void 0 === d) {
                var p = Lr(u, t);
                throw new Error(p)
            }
            o[u] = d, r = r || d !== c
        }
        return r ? o : e
    }
}

function Pr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Br(e, t) {
    var n = Object.keys(e);
    return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)), t && (n = n.filter((function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), n
}

function Ar(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Br(n, !0).forEach((function(t) {
            Pr(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Br(n).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function Mr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}

function Or() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function() {
            var n = e.apply(void 0, arguments),
                r = function() {
                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                },
                o = {
                    getState: n.getState,
                    dispatch: function() {
                        return r.apply(void 0, arguments)
                    }
                },
                a = t.map((function(e) {
                    return e(o)
                }));
            return Ar({}, n, {
                dispatch: r = Mr.apply(void 0, a)(n.dispatch)
            })
        }
    }
}
const Ir = () => {
        const e = [],
            t = t => n => r => {
                const o = n(r);
                return e.forEach(e => {
                    e(r, t)
                }), o
            };
        return t.add = t => {
            e.push(t)
        }, t
    },
    _r = e => {
        let {
            min: t = 1e3,
            max: n = 5e3,
            jitter: r = .5
        } = e, o = 0;
        return {
            duration: () => {
                let e = t * Math.pow(2, o++);
                if (r) {
                    const t = Math.random(),
                        n = Math.floor(t * r * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                }
                return 0 | Math.min(e, n)
            },
            reset: () => {
                o = 0
            }
        }
    };

function zr(e, t) {
    let {
        retriesCount: n = 1 / 0,
        minTime: r = 100,
        maxTime: o = 1e4
    } = void 0 === t ? {} : t;
    const a = _r({
        min: r,
        max: o,
        jitter: 0
    });
    return new Promise((t, r) => {
        let o = 0;
        const i = () => e().then(t, () => {
            n === 1 / 0 || o++ < n ? setTimeout(i, a.duration()) : r(new Error("Maximum retries count (" + n + ") reached"))
        });
        i()
    })
}
const Rr = (e, t) => {
        let {
            id: n
        } = e, {
            getState: r
        } = t;
        return T(r(), n)
    },
    jr = (e, t) => {
        let {
            id: n,
            chat: r
        } = e, {
            getState: o
        } = t;
        return {
            chat: r,
            event: P(o(), r, n)
        }
    },
    Nr = (e, t) => {
        let {
            id: n
        } = e, {
            getState: r
        } = t;
        return B(r(), n)
    },
    Wr = e => {
        const t = A(e);
        return {
            view: t,
            default: M(e, t)
        }
    },
    Vr = e => ((e, t) => (n, r) => {
        if (!Rn(n.type, e)) return;
        const o = e[n.type](n.payload, r);
        n.meta && (o.meta = n.meta), t(n.type.toLowerCase(), o)
    })({
        [i]: Rr,
        [s]: jr,
        [u]: Nr,
        [l]: Rr,
        [c]: Dr,
        [d]: Dr,
        [p]: jr,
        [m]: (e, t) => {
            let {
                getState: n
            } = t;
            return f(n())
        },
        [h]: (e, t) => {
            let {
                getState: n
            } = t;
            return g(n())
        },
        [D]: (e, t) => {
            let {
                name: n
            } = e, {
                getState: r
            } = t;
            return {
                name: n,
                data: v(r(), n),
                viewInfo: Wr(r())
            }
        },
        [b]: (e, t) => {
            let {
                name: n,
                path: r
            } = e, {
                getState: o
            } = t;
            return {
                name: n,
                path: r,
                data: v(o(), r + "/" + n),
                viewInfo: Wr(o())
            }
        },
        [y]: Rr,
        [x]: jr,
        [C]: Nr,
        [E]: Nr,
        [w]: Dr,
        [F]: Dr,
        [k]: Dr,
        [S]: Dr,
        [L]: Dr
    }, e),
    Ur = function(e) {
        return void 0 === e && (e = {}), O(e, {
            [I]: (e, t) => {
                let {
                    feature: n,
                    data: r
                } = t;
                return { ...e,
                    config: { ...e.config,
                        features: { ...e.config.features,
                            [n]: { ...e.config.features[n],
                                ...r
                            }
                        }
                    }
                }
            },
            [m]: (e, t) => ({ ...e,
                ...t
            })
        })
    },
    Hr = e => R(e).reduce((e, t) => {
        let {
            serverId: n,
            id: r
        } = t;
        return null === n || (e[n] = r), e
    }, {}),
    qr = (e, t) => null !== t.serverId ? { ...e,
        [t.serverId]: t.id
    } : e,
    Kr = (e, t) => {
        let {
            id: n,
            chat: r,
            event: o
        } = t;
        return { ...e,
            chats: { ...e.chats,
                byIds: { ...e.chats.byIds,
                    [r]: { ...e.chats.byIds[r],
                        events: {
                            byIds: { ...e.chats.byIds[r].events.byIds,
                                [n]: o
                            },
                            orderedIds: e.chats.byIds[r].events.orderedIds.concat(n),
                            serverIdsMapping: qr(e.chats.byIds[r].events.serverIdsMapping, o)
                        }
                    }
                }
            }
        }
    },
    Gr = (e, t) => {
        let {
            id: n,
            chat: r
        } = t;
        return { ...e,
            chats: { ...e.chats,
                byIds: { ...e.chats.byIds,
                    [r]: { ...e.chats.byIds[r],
                        events: {
                            byIds: G([n], e.chats.byIds[r].events.byIds),
                            orderedIds: e.chats.byIds[r].events.orderedIds.filter(e => e !== n),
                            serverIdsMapping: (o = e => e === n, a = e.chats.byIds[r].events.serverIdsMapping, tr(a).reduce((e, t) => (o(a[t]) || (e[t] = a[t]), e), {}))
                        }
                    }
                }
            }
        };
        var o, a
    },
    Zr = (e, t) => {
        let {
            chat: r,
            events: o
        } = t;
        return { ...e,
            chats: { ...e.chats,
                byIds: { ...e.chats.byIds,
                    [r]: { ...e.chats.byIds[r],
                        events: {
                            byIds: { ...e.chats.byIds[r].events.byIds,
                                ..._("id", o)
                            },
                            orderedIds: o.map(e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            }).concat(e.chats.byIds[r].events.orderedIds),
                            serverIdsMapping: { ...e.chats.byIds[r].events.serverIdsMapping,
                                ...n(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return t
                                }, _("serverId", o))
                            }
                        }
                    }
                }
            }
        }
    },
    Yr = (e, t) => {
        let {
            id: n,
            user: r
        } = t;
        return { ...e,
            users: { ...e.users,
                byIds: { ...e.users.byIds,
                    [n]: r
                },
                serverIdsMapping: qr(e.users.serverIdsMapping, r)
            }
        }
    },
    $r = (e, t, n) => {
        let {
            properties: r,
            ...o
        } = n;
        const a = e.byIds[t];
        return { ...e,
            byIds: { ...e.byIds,
                [t]: { ...a,
                    ...o,
                    properties: r ? { ...a.properties,
                        ...r
                    } : a.properties
                }
            }
        }
    },
    Xr = (e, t, n) => {
        const r = e.byIds[t],
            o = {
                byIds: { ...e.byIds,
                    [t]: { ...r,
                        ...n
                    }
                },
                ...n.serverId && Rn("serverIdsMapping", e) && { ...e.serverIdsMapping,
                    [n.serverId]: t
                }
            };
        return { ...e,
            ...o
        }
    },
    Jr = function(e) {
        let {
            users: t = []
        } = void 0 === e ? {} : e;
        const n = _("id", t.map(z));
        return O({
            users: {
                byIds: { ...n,
                    system: {
                        id: "system",
                        type: "system"
                    }
                },
                serverIdsMapping: Hr(n)
            },
            chats: {
                byIds: {},
                serverIdsMapping: {}
            }
        }, {
            [i]: (e, t) => {
                let {
                    id: n,
                    chat: r,
                    events: o
                } = t;
                return { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [n]: { ...r,
                                events: {
                                    byIds: _("id", o),
                                    orderedIds: o.map(e => {
                                        let {
                                            id: t
                                        } = e;
                                        return t
                                    }),
                                    serverIdsMapping: Hr(o)
                                }
                            }
                        },
                        serverIdsMapping: qr(e.chats.serverIdsMapping, r)
                    }
                }
            },
            [s]: Kr,
            [j]: Gr,
            [N]: Zr,
            [W]: (e, t) => {
                let {
                    chat: n,
                    user: r
                } = t;
                const {
                    participants: o
                } = e.chats.byIds[n];
                return V(e => r === e, o) > -1 ? e : { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [n]: { ...e.chats.byIds[n],
                                participants: [...o, r]
                            }
                        }
                    }
                }
            },
            [u]: Yr,
            [l]: (e, t) => {
                let {
                    id: n
                } = t;
                return { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [n]: { ...e.chats.byIds[n],
                                serverId: null,
                                events: {
                                    byIds: {},
                                    orderedIds: [],
                                    serverIdsMapping: {}
                                },
                                properties: {}
                            }
                        }
                    }
                }
            },
            [U]: (e, t) => {
                let {
                    chat: n,
                    user: r
                } = t;
                const {
                    participants: o
                } = e.chats.byIds[n], a = V(e => r === e, o);
                return -1 === a ? e : { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [n]: { ...e.chats.byIds[n],
                                participants: Cr(a, o)
                            }
                        }
                    }
                }
            },
            [p]: Kr,
            [k]: (e, t) => {
                let {
                    id: n,
                    serverId: r
                } = t;
                return { ...e,
                    chats: { ...$r(e.chats, n, {
                            serverId: r
                        }),
                        serverIdsMapping: { ...e.chats.serverIdsMapping,
                            [r]: n
                        }
                    }
                }
            },
            [S]: (e, t) => {
                let {
                    id: n
                } = t;
                const r = e.chats.byIds[n],
                    o = null == r ? void 0 : r.serverId,
                    a = { ...e.chats.serverIdsMapping
                    };
                return o && delete a[o], { ...e,
                    chats: { ...$r(e.chats, n, {
                            serverId: null
                        }),
                        serverIdsMapping: a
                    }
                }
            },
            [H]: (e, t) => {
                let {
                    id: n,
                    chat: r,
                    serverId: o
                } = t;
                return { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [r]: { ...e.chats.byIds[r],
                                events: { ...$r(e.chats.byIds[r].events, n, {
                                        serverId: o
                                    }),
                                    serverIdsMapping: { ...e.chats.byIds[r].events.serverIdsMapping,
                                        [o]: n
                                    }
                                }
                            }
                        }
                    }
                }
            },
            [q]: (e, t) => {
                let {
                    id: n,
                    chat: r,
                    data: o
                } = t;
                return { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [r]: { ...e.chats.byIds[r],
                                events: Xr(e.chats.byIds[r].events, n, o)
                            }
                        }
                    }
                }
            },
            [E]: (e, t) => {
                let {
                    id: n,
                    properties: r
                } = t;
                return { ...e,
                    users: Xr(e.users, n, {
                        properties: r
                    })
                }
            },
            [K]: (e, t) => {
                let {
                    id: n,
                    serverId: r
                } = t;
                return { ...e,
                    users: { ...$r(e.users, n, {
                            serverId: r
                        }),
                        serverIdsMapping: { ...e.users.serverIdsMapping,
                            [r]: n
                        }
                    }
                }
            },
            [L]: (e, t) => {
                let {
                    id: n
                } = t;
                const r = e.users.byIds[n],
                    o = null == r ? void 0 : r.serverId,
                    a = { ...e.users.serverIdsMapping
                    };
                return o && delete a[o], { ...e,
                    users: { ...$r(e.users, n, {
                            serverId: null
                        }),
                        serverIdsMapping: a
                    }
                }
            },
            [y]: (e, t) => {
                let {
                    id: n,
                    data: r
                } = t;
                return { ...e,
                    chats: $r(e.chats, n, r)
                }
            },
            [x]: (e, t) => {
                let {
                    id: n,
                    chat: r,
                    data: o
                } = t;
                return { ...e,
                    chats: { ...e.chats,
                        byIds: { ...e.chats.byIds,
                            [r]: { ...e.chats.byIds[r],
                                events: $r(e.chats.byIds[r].events, n, o)
                            }
                        }
                    }
                }
            },
            [C]: (e, t) => {
                let {
                    id: n,
                    data: r
                } = t;
                return { ...e,
                    users: $r(e.users, n, r)
                }
            }
        })
    },
    Qr = function(e) {
        return void 0 === e && (e = {}),
            function(t, n) {
                return void 0 === t && (t = e), n.type !== String(Z) ? t : { ...t,
                    ...n.payload
                }
            }
    },
    eo = e => O((e => {
        let {
            id: t,
            connectionState: n = Y
        } = e;
        return {
            id: t,
            connectionState: n
        }
    })(e), {
        [h]: (e, t) => {
            let {
                connectionState: n
            } = t;
            return { ...e,
                connectionState: n
            }
        }
    }),
    to = e => +new Date(e).setHours(0, 0, 0, 0),
    no = (e, t) => to(e) === to(t),
    ro = e => {
        let {
            sessionUserId: t,
            event: n,
            showDate: r = !1
        } = e;
        return {
            own: n.author === t,
            author: n.author,
            events: [{
                id: n.id,
                type: n.type
            }],
            type: n.type,
            showDate: r,
            timestamp: n.timestamp
        }
    },
    oo = (e, t) => ro({
        sessionUserId: re(e).id,
        event: t,
        showDate: !0
    }),
    ao = e => oe(e => -1 * vr(0, "timestamp", ne(e.events)), e).map(e => {
        let {
            id: t
        } = e;
        return {
            id: t
        }
    }),
    io = (e, t) => {
        let {
            id: n
        } = t;
        return { ...e,
            Chat: { ...e.Chat,
                [n]: { ...e.Chat[n],
                    timeline: []
                }
            }
        }
    },
    so = () => !1,
    uo = () => !0,
    lo = function(e) {
        return void 0 === e && (e = {}),
            function(t) {
                return void 0 === t && (t = e), t
            }
    },
    co = (e, t) => ie(Tr(se((t, n) => t(e[n]), {
        application: Ur,
        entities: Jr,
        localization: Qr,
        session: eo,
        views: lo
    })), (e => {
        let {
            shouldAddToTimeline: t = uo,
            shouldCreateNewGroup: o = so
        } = e;
        const a = (e, t) => {
                const n = re(e).id;
                return (r, a) => {
                    const i = ne(r),
                        s = P(e, t, ne(i.events).id);
                    if ("message_draft" === a.type && "form" === i.type) {
                        const e = ae(e => "message_draft" === e.type, r);
                        return e ? [...gr(2, r), { ...e,
                            events: [...e.events, {
                                id: a.id,
                                type: a.type
                            }]
                        }, i] : [...gr(1, r), ro({
                            sessionUserId: n,
                            event: a
                        }), i]
                    }
                    return no(s.timestamp, a.timestamp) ? a.timestamp >= i.timestamp + 3e5 || i.author !== a.author || o(a, s) ? [...r, ro({
                        sessionUserId: n,
                        event: a
                    })] : [...gr(1, r), { ...i,
                        events: [...i.events, {
                            id: a.id,
                            type: a.type
                        }]
                    }] : [...r, ro({
                        sessionUserId: n,
                        event: a,
                        showDate: !0
                    })]
                }
            },
            u = (e, n, r) => {
                const o = r.filter(t);
                if (0 === o.length) return [];
                const [i, ...s] = o, u = oo(e, i);
                return s.reduce(a(e, n), [u])
            },
            c = (e, t, r) => {
                const o = ee(r);
                return {
                    Chat: n(e => ({
                        [e.id]: {
                            timeline: u(r, e.id, e.events)
                        }
                    }), o),
                    ChatList: ao(o),
                    current: null
                }
            },
            d = (e, t, n) => {
                let {
                    id: r
                } = t;
                return { ...e,
                    Chat: { ...e.Chat,
                        [r]: {
                            timeline: u(n, r, T(n, r).events)
                        }
                    },
                    ChatList: ao(ee(n))
                }
            },
            m = (e, n, r) => {
                let {
                    chat: o,
                    id: i
                } = n;
                const {
                    timeline: s
                } = e.Chat[o], u = P(r, o, i);
                return t(u) ? { ...e,
                    Chat: { ...e.Chat,
                        [o]: { ...e.Chat[o],
                            timeline: s.length > 0 ? a(r, o)(s, u) : [oo(r, u)]
                        }
                    },
                    ChatList: ao(ee(r))
                } : e
            },
            f = (e, t) => {
                let {
                    chat: n,
                    id: r
                } = t;
                const {
                    timeline: o
                } = e.Chat[n], a = V(e => e.events.some(e => e.id === r), o), i = o[a], s = i.events.filter(e => e.id !== r);
                let u;
                return s.length > 0 ? u = te(a, { ...i,
                    events: s
                }, o) : (u = a + 1 < o.length ? te(a + 1, { ...o[a + 1],
                    showDate: o[a + 1].showDate || i.showDate
                }, o) : o, u = Cr(a, u)), { ...e,
                    Chat: { ...e.Chat,
                        [n]: { ...e.Chat[n],
                            timeline: u
                        }
                    }
                }
            },
            h = (e, t, n) => {
                let {
                    chat: r,
                    events: o
                } = t, [a, ...i] = e.Chat[r].timeline;
                const s = ne(o);
                a && no(s.timestamp, a.timestamp) && (a = { ...a,
                    showDate: !no(Date.now(), a.timestamp)
                });
                const l = u(n, r, o),
                    c = a ? [...l, a, ...i] : l,
                    [d] = o,
                    p = !no(d.timestamp, Date.now());
                return { ...e,
                    Chat: { ...e.Chat,
                        [r]: { ...e.Chat[r],
                            hasDividers: p,
                            timeline: c
                        }
                    }
                }
            },
            g = (e, t, n) => {
                let {
                    id: r
                } = t;
                return { ...e,
                    Chat: { ...e.Chat,
                        [r]: {
                            timeline: u(n, r, T(n, r).events)
                        }
                    }
                }
            };
        return (e, t) => {
            let {
                type: n,
                payload: o
            } = t;
            if ($(e.views)) return { ...e,
                views: c(e.views, 0, e)
            };
            switch (n) {
                case String(i):
                    return { ...e,
                        views: d(e.views, o, e)
                    };
                case String(s):
                case String(p):
                    return { ...e,
                        views: m(e.views, o, e)
                    };
                case String(j):
                    return { ...e,
                        views: f(e.views, o)
                    };
                case String(N):
                    return { ...e,
                        views: h(e.views, o, e)
                    };
                case String(Q):
                    {
                        const t = o.name.replace(/\//gi, ".");
                        return { ...e,
                            views: Er(t, o.data, e.views)
                        }
                    }
                case String(l):
                    return { ...e,
                        views: io(e.views, o)
                    };
                case String(b):
                    {
                        const t = o.path.replace(/\//gi, ".") + "._default";
                        return { ...e,
                            views: Er(t, o.name, e.views)
                        }
                    }
                case String(J):
                    return { ...e,
                        views: g(e.views, o, e)
                    };
                case String(D):
                    return { ...e,
                        views: { ...e.views,
                            current: o.name
                        }
                    };
                case String(X):
                    {
                        const t = o.name.replace(/\//gi, "."),
                            n = r(t, e.views);
                        return { ...e,
                            views: Er(t, { ...n,
                                ...o.data
                            }, e.views)
                        }
                    }
                default:
                    return e
            }
        }
    })(t));

function po(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {});
    const n = Nn(),
        r = Dr,
        o = Ir(),
        a = Sr(co((e => {
            const {
                entities: t = {},
                session: n = {}
            } = e, {
                id: r = "session_" + de()
            } = n, {
                users: o = []
            } = t, a = pe(e => e.id === r, o);
            return { ...e,
                entities: { ...t,
                    users: a ? o : [...o, {
                        id: r,
                        serverId: null
                    }]
                },
                session: { ...n,
                    id: r
                }
            }
        })(e), t), void 0, r(Or(o)));
    o.add(Vr(n.emit));
    const i = a.getState();
    let s = i,
        u = i;
    return a.subscribe(() => {
        const e = a.getState();
        u !== e && ([s, u] = [u, e])
    }), dr(a, ce(me, a), ue(le, a.getState), {
        getPreviousState: () => s,
        emit: n.emit,
        on: n.on,
        once: n.once,
        off(e, t) {
            if (!e || !t) throw new Error(".off needs to be called with both type and handler arguments.");
            if ("*" === e) throw new Error(".off('*', ...) is not supported.");
            n.off(e, t)
        }
    }), a
}
var mo = Wn.createContext(null),
    fo = {
        notify: function() {}
    };
var ho = function() {
        function e(e, t) {
            this.store = e, this.parentSub = t, this.unsubscribe = null, this.listeners = fo, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
        }
        var t = e.prototype;
        return t.addNestedSub = function(e) {
            return this.trySubscribe(), this.listeners.subscribe(e)
        }, t.notifyNestedSubs = function() {
            this.listeners.notify()
        }, t.handleChangeWrapper = function() {
            this.onStateChange && this.onStateChange()
        }, t.isSubscribed = function() {
            return Boolean(this.unsubscribe)
        }, t.trySubscribe = function() {
            var e, t, n;
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = (e = fe(), t = null, n = null, {
                clear: function() {
                    t = null, n = null
                },
                notify: function() {
                    e((function() {
                        for (var e = t; e;) e.callback(), e = e.next
                    }))
                },
                get: function() {
                    for (var e = [], n = t; n;) e.push(n), n = n.next;
                    return e
                },
                subscribe: function(e) {
                    var r = !0,
                        o = n = {
                            callback: e,
                            next: null,
                            prev: n
                        };
                    return o.prev ? o.prev.next = o : t = o,
                        function() {
                            r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                        }
                }
            }))
        }, t.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = fo)
        }, e
    }(),
    go = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? Vn.useLayoutEffect : Vn.useEffect;

function Do(e) {
    var t = e.store,
        n = e.context,
        r = e.children,
        o = Vn.useMemo((function() {
            var e = new ho(t);
            return e.onStateChange = e.notifyNestedSubs, {
                store: t,
                subscription: e
            }
        }), [t]),
        a = Vn.useMemo((function() {
            return t.getState()
        }), [t]);
    go((function() {
        var e = o.subscription;
        return e.trySubscribe(), a !== t.getState() && e.notifyNestedSubs(),
            function() {
                e.tryUnsubscribe(), e.onStateChange = null
            }
    }), [o, a]);
    var i = n || mo;
    return Wn.createElement(i.Provider, {
        value: o
    }, r)
}

function vo(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
}

function bo(e, t) {
    if (vo(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (var o = 0; o < n.length; o++)
        if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !vo(e[n[o]], t[n[o]])) return !1;
    return !0
}

function yo() {
    return Vn.useContext(mo)
}

function xo(e) {
    void 0 === e && (e = mo);
    var t = e === mo ? yo : function() {
        return Vn.useContext(e)
    };
    return function() {
        return t().store
    }
}
var Co = xo(),
    Eo = function(e, t) {
        return e === t
    };

function wo(e) {
    void 0 === e && (e = mo);
    var t = e === mo ? yo : function() {
        return Vn.useContext(e)
    };
    return function(e, n) {
        void 0 === n && (n = Eo);
        var r = t(),
            o = function(e, t, n, r) {
                var o, a = Vn.useReducer((function(e) {
                        return e + 1
                    }), 0)[1],
                    i = Vn.useMemo((function() {
                        return new ho(n, r)
                    }), [n, r]),
                    s = Vn.useRef(),
                    u = Vn.useRef(),
                    l = Vn.useRef(),
                    c = Vn.useRef(),
                    d = n.getState();
                try {
                    if (e !== u.current || d !== l.current || s.current) {
                        var p = e(d);
                        o = void 0 !== c.current && t(p, c.current) ? c.current : p
                    } else o = c.current
                } catch (m) {
                    throw s.current && (m.message += "\nThe error may be correlated with this previous error:\n" + s.current.stack + "\n\n"), m
                }
                return go((function() {
                    u.current = e, l.current = d, c.current = o, s.current = void 0
                })), go((function() {
                    function e() {
                        try {
                            var e = n.getState(),
                                r = u.current(e);
                            if (t(r, c.current)) return;
                            c.current = r, l.current = e
                        } catch (m) {
                            s.current = m
                        }
                        a()
                    }
                    return i.onStateChange = e, i.trySubscribe(), e(),
                        function() {
                            return i.tryUnsubscribe()
                        }
                }), [n, i]), o
            }(e, n, r.store, r.subscription);
        return Vn.useDebugValue(o), o
    }
}
var Fo = wo();
const ko = () => Co(),
    So = (e, t) => {
        const n = ko();
        return Fo(() => e(n), null != t ? t : bo)
    },
    Lo = Vn.createContext(void 0),
    To = e => {
        let {
            children: t
        } = e;
        const {
            localize: n
        } = ko();
        return So(e => e.getState().localization), Vn.createElement(Lo.Provider, {
            value: n
        }, t)
    },
    Po = e => {
        if ("string" == typeof e.children) {
            const {
                children: t,
                ...n
            } = e;
            return Vn.createElement(Lo.Consumer, null, e => e(t, n))
        }
        return Vn.createElement(Lo.Consumer, e)
    };

function Bo(e) {
    let {
        store: t,
        children: n
    } = e;
    return Vn.createElement(Do, {
        store: t
    }, Vn.createElement(To, null, n))
}
const Ao = (e, t) => {
        he((e, n) => {
            t.style[n] = e
        }, e)
    },
    Mo = (e, t) => {
        he((e, n) => {
            "style" !== n ? t.setAttribute(n, e) : Ao(e, t)
        }, e)
    };
let Oo = null;
const Io = () => {
    if (Oo) return Oo;
    const e = document.createElement("div"),
        t = e.style;
    t.width = "50px", t.height = "50px", t.overflow = "scroll", t.direction = "rtl";
    const n = document.createElement("div"),
        r = n.style;
    return r.width = "100px", r.height = "50px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? Oo = "positive-descending" : (e.scrollLeft = 1, Oo = 0 === e.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(e), Oo
};
const _o = "0px 0.48px 2.41px -0.38px rgba(0, 0, 0, 0.05), 0px 4px 20px -0.75px rgba(0, 0, 0, 0.17)",
    zo = "0 0 0 1px " + ge,
    Ro = Object.freeze(Object.defineProperty({
        __proto__: null,
        enormous: "rgba(0, 0, 0, 0.035) 0px 0.796192px 3.98096px -0.1875px, rgba(0, 0, 0, 0.047) 0px 2.41451px 12.0725px -0.375px, rgba(0, 0, 0, 0.075) 0px 6.38265px 31.9133px -0.5625px, rgba(0, 0, 0, 0.17) 0px 20px 100px -0.75px;",
        floating: _o,
        lg: "0px 0.48px 2.41px -0.38px rgba(0, 0, 0, 0.05), 0px 4px 20px -0.75px rgba(0, 0, 0, 0.17)",
        md: "0px 0.48px 2.41px -0.38px rgba(0, 0, 0, 0.05), 0px 4px 20px -0.75px rgba(0, 0, 0, 0.17)",
        outline: zo,
        sm: "0px 0.48px 2.22px -1.17px rgba(0, 0, 0, 0.14), 0px 1.83px 8.42px -2.33px rgba(0, 0, 0, 0.12), 0px 8px 36.8px -3.5px rgba(0, 0, 0, 0.06);",
        subtle: "rgba(0, 0, 0, 0.125) 0px 0.362176px 0.941657px -1px, rgba(0, 0, 0, 0.18) 0px 3px 7.8px -2px",
        xl: "rgba(0, 0, 0, 0.075) 0px 0.602187px 2.04744px -1.33333px, rgba(0, 0, 0, 0.067) 0px 2.28853px 7.78101px -2.66667px, rgba(0, 0, 0, 0.02) 0px 10px 34px -4px",
        xs: "0px 0.6px 0.54px -1.33px rgba(0, 0, 0, 0.15), 0px 2.29px 2.06px -2.67px rgba(0, 0, 0, 0.13), 0px 10px 9px -4px rgba(0, 0, 0, 0.04);"
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    jo = e => e / 16 + "rem",
    No = jo(18),
    Wo = jo(16),
    Vo = jo(14),
    Uo = jo(12),
    Ho = Object.freeze(Object.defineProperty({
        __proto__: null,
        space0: "0px",
        space1: "2px",
        space2: "4px",
        space3: "8px",
        space4: "10px",
        space5: "12px",
        space6: "16px",
        space7: "24px"
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qo = Object.freeze(Object.defineProperty({
        __proto__: null,
        easings: {
            easeOutStrong: "cubic-bezier(0.25, 1, 0.5, 1)",
            linear: "cubic-bezier(0, 0, 1, 1)",
            sharp: "cubic-bezier(0.33, 0, 0, 1)",
            smooth: "cubic-bezier(0.33, 0, 0.67, 1)",
            swift: "cubic-bezier(0.14, 0, 0, 1)",
            spring: "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
        }
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ko = {
        fontSize: Wo,
        fontWeight: "bold"
    },
    Go = {
        fontSize: Vo,
        fontWeight: "bold"
    },
    Zo = {
        fontSize: Vo,
        fontWeight: "normal"
    },
    Yo = {
        fontSize: Vo,
        fontWeight: "normal"
    },
    $o = {
        fontSize: Uo,
        fontWeight: "normal"
    },
    Xo = {
        fontSize: Vo,
        fontWeight: "normal"
    },
    Jo = {
        fontSize: Vo,
        fontWeight: "normal"
    },
    Qo = {
        fontSize: Uo,
        fontWeight: "normal"
    },
    ea = {
        fontSize: No,
        fontWeight: "bold"
    },
    ta = {
        fontSize: Vo,
        fontWeight: "bold"
    },
    na = {
        fontSize: Uo,
        fontWeight: "bold"
    },
    ra = Object.freeze(Object.defineProperty({
        __proto__: null,
        basic: Xo,
        basicContrast: Jo,
        buttonText: ta,
        caption: $o,
        code: {
            fontFamily: "monospace !important",
            fontSize: "13px",
            fontWeight: "normal"
        },
        errorCaption: Qo,
        heading: Ko,
        heroHeader: ea,
        input: Zo,
        placeholder: Yo,
        strongCaption: na,
        subheading: Go
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    oa = e => {
        let {
            organizationId: t,
            group: n,
            uniqueGroups: r
        } = e;
        return t + (r ? ":" + n : "") + ":state"
    },
    aa = e => De(e, ["ar", "he", "fa"]),
    ia = e => {
        document.documentElement.lang = e
    },
    sa = e => e.replace(/\?+$/, "");

function ua(e, t) {
    return "object" == typeof e && "object" == typeof t ? la(e, t) : e
}

function la(e, t) {
    if (null === e || null === t) return e === t ? null : e;
    let n;
    if (Array.isArray(e)) {
        n = new Array(e.length);
        for (let r = 0; r < e.length; r++) e[r] !== t[r] && (n[r] = ua(e[r], t[r]))
    } else {
        n = {};
        new Set([...Object.keys(e), ...Object.keys(t)]).forEach(r => {
            e[r] !== t[r] && (n[r] = r in e ? ua(e[r], t[r]) : void 0)
        })
    }
    return n
}

function ca(e, t) {
    let {
        schema: a,
        preSave: i
    } = t;
    const s = n(e => {
            let {
                defaultValue: t
            } = e;
            return t
        }, a),
        u = Object.keys(a),
        l = mr(e => ({ ...s,
            ...e
        }), e => n(e => {
            let {
                value: t
            } = e;
            return t
        }, e), e => {
            const t = Date.now();
            return be((e, n) => {
                let {
                    expires: r
                } = e;
                return r < t || void 0 === a[n]
            }, e)
        }, JSON.parse, (c = "{}", e => function(e) {
            return null == e
        }(e) ? c : e), e => ve.getItem(e));
    var c;
    const d = mr(JSON.stringify, e => {
        const t = Date.now() + 18e5;
        return n(e => ({
            value: e,
            expires: t
        }), e)
    });
    let p;
    return {
        persist: t => (t.subscribe(() => {
            const n = (s = t.getState(), u.reduce((e, t) => (e[t] = r(a[t].path, s), e), {}));
            var s;
            const c = la(n, p);
            null === c || $(c) || (ve.setItem(e, d(i(o(l(e), c)))), p = n)
        }), t),
        rehydrate() {
            return p = l(e), t = p, u.reduce((e, n) => Er(a[n].path, t[n], e), {});
            var t
        }
    }
}
const da = e => {
        let t;
        const n = [],
            r = ye();
        return e.startStateSync = o => {
            t = e.getState(), o.emit("state", t);
            const a = () => {
                    n.forEach(e => {
                        let [t, n] = e;
                        o.emit(t, n)
                    }), n.length = 0
                },
                i = (e, t) => {
                    1 === n.push([e, t]) && setTimeout(a, 0)
                };
            e.subscribe(() => {
                const n = e.getState();
                n !== t && (i("state_diff", la(n, t)), t = n)
            });
            const s = /^request_/;
            e.on("*", (e, t) => {
                s.test(e) || i("store_event", [e, t])
            }), r.resolve(void 0)
        }, e.syncing = () => r.promise, e
    },
    pa = {
        application: {
            organizationId: "",
            rtl: !1,
            s: !1,
            region: null,
            actingAsDirectLink: !1,
            availability: null,
            isSendingFileEvents: !1,
            clientLimitExceeded: !1,
            clientLimitExceededLifted: !1,
            limitReached: !1,
            defaultWidget: "livechat",
            currentChat: xe,
            config: {
                features: {
                    agentAvatar: {
                        enabled: !0
                    },
                    boosters: {
                        enabled: !1,
                        items: []
                    },
                    chatHistory: {
                        enabled: !1
                    },
                    continuousChat: {
                        enabled: !1
                    },
                    creditCardMasking: {
                        enabled: !1
                    },
                    disableSounds: {
                        enabled: !1
                    },
                    emailTranscript: {
                        enabled: !0
                    },
                    facebookButton: {
                        enabled: !1
                    },
                    fileSharing: {
                        enabled: !0
                    },
                    emojiPicker: {
                        enabled: !0
                    },
                    googlePlusButton: {
                        enabled: !1
                    },
                    hideOnInit: {
                        enabled: !1
                    },
                    hideTrademark: {
                        enabled: !1
                    },
                    linksPreview: {
                        enabled: !0
                    },
                    logo: {
                        enabled: !0,
                        path: "https://cdn.livechat-static.com/api/file/lc/main/default/logo/c4bf6633aa89a76af7461279581d8bdb.png"
                    },
                    ticketForm: {
                        enabled: !0,
                        mode: "livechat"
                    },
                    preChatAfterGreeting: {
                        enabled: !0
                    },
                    preChatForm: {
                        enabled: !1
                    },
                    rating: {
                        enabled: !0
                    },
                    twitterButton: {
                        enabled: !1
                    },
                    mobileMinimized: {
                        enabled: !0
                    },
                    minimized: {
                        enabled: !0
                    },
                    homeScreen: {
                        enabled: !0
                    },
                    queue: {
                        writingInQueueEnabled: !1
                    },
                    utmParams: {
                        enabled: !0
                    },
                    textApp: {
                        enabled: !1
                    },
                    privacyPolicy: {
                        enabled: !1,
                        text: ""
                    }
                },
                minimizedType: "bar",
                mobileMinimizedType: "bar",
                screenPosition: "right",
                mobileScreenPosition: "right",
                disabledOnMobile: !1,
                screenOffset: {
                    x: 0,
                    y: 0
                },
                properties: {
                    license: {},
                    group: {}
                },
                theme: {},
                nonProfitLicense: !1
            },
            destroyed: !1,
            eagerFetchingMode: !1,
            embedded: !0,
            requestedGroup: null,
            mobileWrapper: null,
            invitation: {
                current: null,
                hiddenIds: [],
                displayedIds: []
            },
            isInCustomContainer: !1,
            isMinimizedForcefullyDisabled: !1,
            hasUnseenEvents: !1,
            hidden: !1,
            maximized: !1,
            pageFocused: !1,
            applicationFocused: !1,
            mobile: Ce(),
            muted: !1,
            readyState: Ee,
            loadedInitialHistory: !1,
            integrationName: null,
            language: null,
            localizationVersion: null,
            clientVisitNumber: 0,
            clientChatNumber: 0,
            visibility: {
                state: "minimized",
                interactionModality: "virtual"
            },
            greetingsMuted: !1,
            isPreview: !1,
            dropAreaVisible: !1,
            wasActivated: !1,
            page: {
                title: "",
                url: "",
                referrer: ""
            },
            owApiURL: "",
            messageDraft: "",
            initialMessageDraft: null,
            locationHistory: {
                history: [],
                updatedAt: (new Date).getTime()
            },
            recommendations: {
                id: "",
                products: [],
                hiddenIds: []
            },
            pendingOpenAIRunId: null,
            streamedOpenAIMessage: null,
            contactInvitation: {},
            chatBotGreeting: {},
            lightbox: {
                state: "closed"
            },
            visitorCounter: {
                session: {
                    sessions: 0
                }
            },
            googleReviews: {},
            disableSendingMessage: !1,
            clientWidth: 0,
            clientHeight: 0,
            postponedGreeting: null,
            limits: [],
            header: {
                text: "",
                logo: "",
                backgroundType: "gradient"
            },
            showChatPreviewWarningBanner: !1,
            hideMinimizeButton: !1,
            hideMeatballsMenu: !1,
            textInputMaxLength: null,
            showTextSelectionTracking: !1,
            privacyPolicyBannerState: "unset"
        }
    },
    ma = {
        boosters: !0,
        carousel: !0,
        emoji: !0,
        form: !0,
        image_preview: !0,
        message: !0,
        rich_message: !0,
        sticker: !0,
        system_message: !0,
        url_preview: !0,
        email_prompt: !0,
        message_draft: !0
    },
    fa = {
        boosters: !0,
        carousel: !0,
        form: !0
    },
    ha = e => po(e, {
        shouldAddToTimeline: e => ma[e.type],
        shouldCreateNewGroup: (e, t) => !!fa[e.type] || !(!t || "carousel" !== t.type)
    }),
    ga = (e, t) => {
        const {
            persistKey: n
        } = t || {}, r = ca(n, {
            schema: {
                messageDraft: {
                    path: ["application", "messageDraft"],
                    defaultValue: null
                },
                clientLimitExceededLifted: {
                    path: ["application", "clientLimitExceededLifted"],
                    defaultValue: !1
                },
                eyeCatcherHidden: {
                    path: ["application", "eyeCatcher", "hidden"],
                    defaultValue: !1
                },
                invitationHiddenIds: {
                    path: ["application", "invitation", "hiddenIds"],
                    defaultValue: []
                },
                invitationDisplayedIds: {
                    path: ["application", "invitation", "displayedIds"],
                    defaultValue: []
                },
                maximized: {
                    path: ["application", "maximized"],
                    defaultValue: !1
                },
                visibility: {
                    path: ["application", "visibility"],
                    defaultValue: {
                        state: "minimized"
                    }
                },
                muted: {
                    path: ["application", "muted"],
                    defaultValue: !1
                },
                limitReached: {
                    path: ["application", "limitReached"],
                    defaultValue: !1
                },
                greetingsMuted: {
                    path: ["application", "greetingsMuted"],
                    defaultValue: !1
                },
                wasActivated: {
                    path: ["application", "wasActivated"],
                    defaultValue: !1
                },
                currentView: {
                    path: ["views", "current"]
                },
                locationHistory: {
                    path: ["application", "locationHistory"],
                    defaultValue: {
                        history: [],
                        updatedAt: (new Date).getTime()
                    }
                },
                recommendations: {
                    path: ["application", "recommendations"],
                    defaultValue: {
                        id: "",
                        products: [],
                        hiddenIds: []
                    }
                },
                pendingOpenAIRunId: {
                    path: ["application", "pendingOpenAIRunId"],
                    defaultValue: null
                },
                contactInvitation: {
                    path: ["application", "contactInvitation"],
                    defaultValue: {
                        hidden: !1,
                        hasSeen: !1
                    }
                },
                chatBotGreeting: {
                    path: ["application", "chatBotGreeting"],
                    defaultValue: {
                        hidden: !1,
                        hasSeen: !1
                    }
                },
                postponedGreeting: {
                    path: ["application", "postponedGreeting"],
                    defaultValue: null
                },
                pipConsent: {
                    path: ["application", "pipConsent"],
                    defaultValue: null
                }
            },
            preSave: e => ({ ...e,
                visibility: {
                    state: e.visibility && "hidden" === e.visibility.state ? "minimized" : e.visibility.state
                }
            })
        }), a = o(pa, o(e, r.rehydrate()));
        return mr(r.persist, da, ha)(a)
    },
    Da = e => ha(hr(pa, e, {
        application: {
            isPreview: !0
        }
    })),
    va = [{
        id: "iframekb",
        template: "moment",
        title: "Knowledge Base",
        description: "Save time with Knowledge Base - easy to access know-how right in the LiveChat widget",
        icon: "https://www.knowledgebase.ai/apple-touch-icon.71342b95.png",
        action: {
            type: "button",
            label: "Search",
            url: "https://livechat.kb.help/"
        }
    }],
    ba = (e, t, n) => {
        const r = !!we("lc_boosters", window.location.search) ? (e => o(e, {
                application: {
                    config: {
                        features: {
                            boosters: {
                                enabled: !0,
                                items: va
                            }
                        }
                    }
                }
            }))(e) : e,
            a = (n ? Da : ga)(r, t);
        return a.addView("Chat/postchat"), a.addView("Chat/prechat"), a.addView("Chat/queue"), a.addView("minimized", {
            text: "Chat"
        }), a.addView("Chat/ticketForm"), a.addView("Moment", {
            show: !1,
            data: {}
        }), a.addChat({
            id: xe,
            active: !1,
            properties: {
                agentActivity: null,
                ended: !1,
                fakeAgentMessageId: null,
                hasMoreHistory: null,
                lastThread: null,
                previousThread: null,
                loadingHistory: !1,
                queued: !1,
                rate: null,
                rateComment: null,
                starting: !1,
                startChatAgainPending: !1,
                eventsSeenUpToMap: {},
                currentAgent: null
            }
        }), a
    };
var ya = function() {
        function e(e) {
            var t = this;
            this._insertTag = function(e) {
                var n;
                n = 0 === t.tags.length ? t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(e) {
            e.forEach(this._insertTag)
        }, t.insert = function(e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                var t = document.createElement("style");
                return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
            }(this));
            var t = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var n = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                        if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                }(t);
                try {
                    n.insertRule(e, n.cssRules.length)
                } catch (Am) {}
            } else t.appendChild(document.createTextNode(e));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach((function(e) {
                return e.parentNode.removeChild(e)
            })), this.tags = [], this.ctr = 0
        }, e
    }(),
    xa = "-ms-",
    Ca = "-moz-",
    Ea = "-webkit-",
    wa = Math.abs,
    Fa = String.fromCharCode;

function ka(e) {
    return e.trim()
}

function Sa(e, t, n) {
    return e.replace(t, n)
}

function La(e, t) {
    return e.indexOf(t)
}

function Ta(e, t) {
    return 0 | e.charCodeAt(t)
}

function Pa(e, t, n) {
    return e.slice(t, n)
}

function Ba(e) {
    return e.length
}

function Aa(e) {
    return e.length
}

function Ma(e, t) {
    return t.push(e), e
}
var Oa = 1,
    Ia = 1,
    _a = 0,
    za = 0,
    Ra = 0,
    ja = "";

function Na(e, t, n, r, o, a, i) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: a,
        line: Oa,
        column: Ia,
        length: i,
        return: ""
    }
}

function Wa(e, t, n) {
    return Na(e, t.root, t.parent, n, t.props, t.children, 0)
}

function Va() {
    return Ra = za < _a ? Ta(ja, za++) : 0, Ia++, 10 === Ra && (Ia = 1, Oa++), Ra
}

function Ua() {
    return Ta(ja, za)
}

function Ha() {
    return za
}

function qa(e, t) {
    return Pa(ja, e, t)
}

function Ka(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function Ga(e) {
    return Oa = Ia = 1, _a = Ba(ja = e), za = 0, []
}

function Za(e) {
    return ja = "", e
}

function Ya(e) {
    return ka(qa(za - 1, function e(t) {
        for (; Va();) switch (Ra) {
            case t:
                return za;
            case 34:
            case 39:
                return e(34 === t || 39 === t ? t : Ra);
            case 40:
                41 === t && e(t);
                break;
            case 92:
                Va()
        }
        return za
    }(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
}

function $a(e) {
    for (;
        (Ra = Ua()) && Ra < 33;) Va();
    return Ka(e) > 2 || Ka(Ra) > 3 ? "" : " "
}

function Xa(e, t) {
    for (; --t && Va() && !(Ra < 48 || Ra > 102 || Ra > 57 && Ra < 65 || Ra > 70 && Ra < 97););
    return qa(e, Ha() + (t < 6 && 32 == Ua() && 32 == Va()))
}

function Ja(e, t) {
    for (; Va() && e + Ra !== 57 && (e + Ra !== 84 || 47 !== Ua()););
    return "/*" + qa(t, za - 1) + "*" + Fa(47 === e ? e : Va())
}

function Qa(e) {
    for (; !Ka(Ua());) Va();
    return qa(e, za)
}

function ei(e) {
    return Za(function e(t, n, r, o, a, i, s, u, l) {
        var c = 0,
            d = 0,
            p = s,
            m = 0,
            f = 0,
            h = 0,
            g = 1,
            D = 1,
            v = 1,
            b = 0,
            y = "",
            x = a,
            C = i,
            E = o,
            w = y;
        for (; D;) switch (h = b, b = Va()) {
            case 34:
            case 39:
            case 91:
            case 40:
                w += Ya(b);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                w += $a(h);
                break;
            case 92:
                w += Xa(Ha() - 1, 7);
                continue;
            case 47:
                switch (Ua()) {
                    case 42:
                    case 47:
                        Ma(ni(Ja(Va(), Ha()), n, r), l);
                        break;
                    default:
                        w += "/"
                }
                break;
            case 123 * g:
                u[c++] = Ba(w) * v;
            case 125 * g:
            case 59:
            case 0:
                switch (b) {
                    case 0:
                    case 125:
                        D = 0;
                    case 59 + d:
                        f > 0 && Ba(w) - p && Ma(f > 32 ? ri(w + ";", o, r, p - 1) : ri(Sa(w, " ", "") + ";", o, r, p - 2), l);
                        break;
                    case 59:
                        w += ";";
                    default:
                        if (Ma(E = ti(w, n, r, c, d, a, u, y, x = [], C = [], p), i), 123 === b)
                            if (0 === d) e(w, n, E, E, x, i, p, u, C);
                            else switch (m) {
                                case 100:
                                case 109:
                                case 115:
                                    e(t, E, E, o && Ma(ti(t, E, E, 0, 0, a, u, y, a, x = [], p), C), a, C, p, u, o ? x : C);
                                    break;
                                default:
                                    e(w, E, E, E, [""], C, p, u, C)
                            }
                }
                c = d = f = 0, g = v = 1, y = w = "", p = s;
                break;
            case 58:
                p = 1 + Ba(w), f = h;
            default:
                if (g < 1)
                    if (123 == b) --g;
                    else if (125 == b && 0 == g++ && 125 == (Ra = za > 0 ? Ta(ja, --za) : 0, Ia--, 10 === Ra && (Ia = 1, Oa--), Ra)) continue;
                switch (w += Fa(b), b * g) {
                    case 38:
                        v = d > 0 ? 1 : (w += "\f", -1);
                        break;
                    case 44:
                        u[c++] = (Ba(w) - 1) * v, v = 1;
                        break;
                    case 64:
                        45 === Ua() && (w += Ya(Va())), m = Ua(), d = Ba(y = w += Qa(Ha())), b++;
                        break;
                    case 45:
                        45 === h && 2 == Ba(w) && (g = 0)
                }
        }
        return i
    }("", null, null, null, [""], e = Ga(e), 0, [0], e))
}

function ti(e, t, n, r, o, a, i, s, u, l, c) {
    for (var d = o - 1, p = 0 === o ? a : [""], m = Aa(p), f = 0, h = 0, g = 0; f < r; ++f)
        for (var D = 0, v = Pa(e, d + 1, d = wa(h = i[f])), b = e; D < m; ++D)(b = ka(h > 0 ? p[D] + " " + v : Sa(v, /&\f/g, p[D]))) && (u[g++] = b);
    return Na(e, t, n, 0 === o ? "rule" : s, u, l, c)
}

function ni(e, t, n) {
    return Na(e, t, n, "comm", Fa(Ra), Pa(e, 2, -2), 0)
}

function ri(e, t, n, r) {
    return Na(e, t, n, "decl", Pa(e, 0, r), Pa(e, r + 1, -1), r)
}

function oi(e, t) {
    switch (function(e, t) {
        return (((t << 2 ^ Ta(e, 0)) << 2 ^ Ta(e, 1)) << 2 ^ Ta(e, 2)) << 2 ^ Ta(e, 3)
    }(e, t)) {
        case 5103:
            return Ea + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return Ea + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return Ea + e + Ca + e + xa + e + e;
        case 6828:
        case 4268:
            return Ea + e + xa + e + e;
        case 6165:
            return Ea + e + xa + "flex-" + e + e;
        case 5187:
            return Ea + e + Sa(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
        case 5443:
            return Ea + e + xa + "flex-item-" + Sa(e, /flex-|-self/, "") + e;
        case 4675:
            return Ea + e + xa + "flex-line-pack" + Sa(e, /align-content|flex-|-self/, "") + e;
        case 5548:
            return Ea + e + xa + Sa(e, "shrink", "negative") + e;
        case 5292:
            return Ea + e + xa + Sa(e, "basis", "preferred-size") + e;
        case 6060:
            return Ea + "box-" + Sa(e, "-grow", "") + Ea + e + xa + Sa(e, "grow", "positive") + e;
        case 4554:
            return Ea + Sa(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
        case 6187:
            return Sa(Sa(Sa(e, /(zoom-|grab)/, Ea + "$1"), /(image-set)/, Ea + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return Sa(e, /(image-set\([^]*)/, Ea + "$1$`$1");
        case 4968:
            return Sa(Sa(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ea + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return Sa(e, /(.+)-inline(.+)/, Ea + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Ba(e) - 1 - t > 6) switch (Ta(e, t + 1)) {
                case 109:
                    if (45 !== Ta(e, t + 4)) break;
                case 102:
                    return Sa(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + Ca + (108 == Ta(e, t + 3) ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~La(e, "stretch") ? oi(Sa(e, "stretch", "fill-available"), t) + e : e
            }
            break;
        case 4949:
            if (115 !== Ta(e, t + 1)) break;
        case 6444:
            switch (Ta(e, Ba(e) - 3 - (~La(e, "!important") && 10))) {
                case 107:
                    return Sa(e, ":", ":" + Ea) + e;
                case 101:
                    return Sa(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ea + (45 === Ta(e, 14) ? "inline-" : "") + "box$3$1" + Ea + "$2$3$1" + xa + "$2box$3") + e
            }
            break;
        case 5936:
            switch (Ta(e, t + 11)) {
                case 114:
                    return Ea + e + xa + Sa(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return Ea + e + xa + Sa(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return Ea + e + xa + Sa(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return Ea + e + xa + e + e
    }
    return e
}

function ai(e, t) {
    for (var n = "", r = Aa(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n
}

function ii(e, t, n, r) {
    switch (e.type) {
        case "@import":
        case "decl":
            return e.return = e.return || e.value;
        case "comm":
            return "";
        case "rule":
            e.value = e.props.join(",")
    }
    return Ba(n = ai(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function si(e, t, n, r) {
    if (!e.return) switch (e.type) {
        case "decl":
            e.return = oi(e.value, e.length);
            break;
        case "@keyframes":
            return ai([Wa(Sa(e.value, "@", "@" + Ea), e, "")], r);
        case "rule":
            if (e.length) return function(e, t) {
                return e.map(t).join("")
            }(e.props, (function(t) {
                switch (function(e, t) {
                    return (e = t.exec(e)) ? e[0] : e
                }(t, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return ai([Wa(Sa(t, /:(read-\w+)/, ":-moz-$1"), e, "")], r);
                    case "::placeholder":
                        return ai([Wa(Sa(t, /:(plac\w+)/, ":-webkit-input-$1"), e, ""), Wa(Sa(t, /:(plac\w+)/, ":-moz-$1"), e, ""), Wa(Sa(t, /:(plac\w+)/, xa + "input-$1"), e, "")], r)
                }
                return ""
            }))
    }
}
var ui = function(e) {
    var t = new WeakMap;
    return function(n) {
        if (t.has(n)) return t.get(n);
        var r = e(n);
        return t.set(n, r), r
    }
};

function li(e) {
    var t = Object.create(null);
    return function(n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n]
    }
}
var ci = function(e, t) {
        return Za(function(e, t) {
            var n = -1,
                r = 44;
            do {
                switch (Ka(r)) {
                    case 0:
                        38 === r && 12 === Ua() && (t[n] = 1), e[n] += Qa(za - 1);
                        break;
                    case 2:
                        e[n] += Ya(r);
                        break;
                    case 4:
                        if (44 === r) {
                            e[++n] = 58 === Ua() ? "&\f" : "", t[n] = e[n].length;
                            break
                        }
                    default:
                        e[n] += Fa(r)
                }
            } while (r = Va());
            return e
        }(Ga(e), t))
    },
    di = new WeakMap,
    pi = function(e) {
        if ("rule" === e.type && e.parent && e.length) {
            for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                "rule" !== n.type;)
                if (!(n = n.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || di.get(n)) && !r) {
                di.set(e, !0);
                for (var o = [], a = ci(t, o), i = n.props, s = 0, u = 0; s < a.length; s++)
                    for (var l = 0; l < i.length; l++, u++) e.props[u] = o[s] ? a[s].replace(/&\f/g, i[l]) : i[l] + " " + a[s]
            }
        }
    },
    mi = function(e) {
        if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
        }
    },
    fi = [si],
    hi = function(e) {
        var t = e.key;
        if ("css" === t) {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, (function(e) {
                -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
            }))
        }
        var r, o, a = e.stylisPlugins || fi,
            i = {},
            s = [];
        r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
            for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
            s.push(e)
        }));
        var u, l, c, d, p = [ii, (d = function(e) {
                u.insert(e)
            }, function(e) {
                e.root || (e = e.return) && d(e)
            })],
            m = (l = [pi, mi].concat(a, p), c = Aa(l), function(e, t, n, r) {
                for (var o = "", a = 0; a < c; a++) o += l[a](e, t, n, r) || "";
                return o
            });
        o = function(e, t, n, r) {
            u = n, ai(ei(e ? e + "{" + t.styles + "}" : t.styles), m), r && (f.inserted[t.name] = !0)
        };
        var f = {
            key: t,
            sheet: new ya({
                key: t,
                container: r,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend
            }),
            nonce: e.nonce,
            inserted: i,
            registered: {},
            insert: o
        };
        return f.sheet.hydrate(s), f
    };

function gi() {
    return (gi = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function Di(e, t, n) {
    var r = "";
    return n.split(" ").forEach((function(n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
    })), r
}
var vi = function(e, t, n) {
    var r = e.key + "-" + t.name;
    if (!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name]) {
        var o = t;
        do {
            e.insert(t === o ? "." + r : "", o, e.sheet, !0), o = o.next
        } while (void 0 !== o)
    }
};
var bi = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    yi = /[A-Z]|^ms/g,
    xi = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Ci = function(e) {
        return 45 === e.charCodeAt(1)
    },
    Ei = function(e) {
        return null != e && "boolean" != typeof e
    },
    wi = li((function(e) {
        return Ci(e) ? e : e.replace(yi, "-$&").toLowerCase()
    })),
    Fi = function(e, t) {
        switch (e) {
            case "animation":
            case "animationName":
                if ("string" == typeof t) return t.replace(xi, (function(e, t, n) {
                    return Si = {
                        name: t,
                        styles: n,
                        next: Si
                    }, t
                }))
        }
        return 1 === bi[e] || Ci(e) || "number" != typeof t || 0 === t ? t : t + "px"
    };

function ki(e, t, n) {
    if (null == n) return "";
    if (void 0 !== n.__emotion_styles) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object":
            if (1 === n.anim) return Si = {
                name: n.name,
                styles: n.styles,
                next: Si
            }, n.name;
            if (void 0 !== n.styles) {
                var r = n.next;
                if (void 0 !== r)
                    for (; void 0 !== r;) Si = {
                        name: r.name,
                        styles: r.styles,
                        next: Si
                    }, r = r.next;
                return n.styles + ";"
            }
            return function(e, t, n) {
                var r = "";
                if (Array.isArray(n))
                    for (var o = 0; o < n.length; o++) r += ki(e, t, n[o]) + ";";
                else
                    for (var a in n) {
                        var i = n[a];
                        if ("object" != typeof i) null != t && void 0 !== t[i] ? r += a + "{" + t[i] + "}" : Ei(i) && (r += wi(a) + ":" + Fi(a, i) + ";");
                        else if (!Array.isArray(i) || "string" != typeof i[0] || null != t && void 0 !== t[i[0]]) {
                            var s = ki(e, t, i);
                            switch (a) {
                                case "animation":
                                case "animationName":
                                    r += wi(a) + ":" + s + ";";
                                    break;
                                default:
                                    r += a + "{" + s + "}"
                            }
                        } else
                            for (var u = 0; u < i.length; u++) Ei(i[u]) && (r += wi(a) + ":" + Fi(a, i[u]) + ";")
                    }
                return r
            }(e, t, n);
        case "function":
            if (void 0 !== e) {
                var o = Si,
                    a = n(e);
                return Si = o, ki(e, t, a)
            }
    }
    if (null == t) return n;
    var i = t[n];
    return void 0 !== i ? i : n
}
var Si, Li = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Ti = function(e, t, n) {
        if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
        var r = !0,
            o = "";
        Si = void 0;
        var a = e[0];
        null == a || void 0 === a.raw ? (r = !1, o += ki(n, t, a)) : o += a[0];
        for (var i = 1; i < e.length; i++) o += ki(n, t, e[i]), r && (o += a[i]);
        Li.lastIndex = 0;
        for (var s, u = ""; null !== (s = Li.exec(o));) u += "-" + s[1];
        return {
            name: function(e) {
                for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                switch (o) {
                    case 3:
                        n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                }
                return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
            }(o) + u,
            styles: o,
            next: Si
        }
    },
    Pi = Object.prototype.hasOwnProperty,
    Bi = Vn.createContext("undefined" != typeof HTMLElement ? hi({
        key: "css"
    }) : null),
    Ai = Bi.Provider,
    Mi = function(e) {
        return Vn.forwardRef((function(t, n) {
            var r = Vn.useContext(Bi);
            return e(t, r, n)
        }))
    },
    Oi = Vn.createContext({}),
    Ii = function() {
        return Vn.useContext(Oi)
    },
    _i = ui((function(e) {
        return ui((function(t) {
            return function(e, t) {
                return "function" == typeof t ? t(e) : gi({}, e, t)
            }(e, t)
        }))
    })),
    zi = function(e) {
        var t = Vn.useContext(Oi);
        return e.theme !== t && (t = _i(t)(e.theme)), Vn.createElement(Oi.Provider, {
            value: t
        }, e.children)
    },
    Ri = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    ji = function(e, t) {
        var n = {};
        for (var r in t) Pi.call(t, r) && (n[r] = t[r]);
        return n[Ri] = e, n
    },
    Ni = Mi((function(e, t, n) {
        var r = e.css;
        "string" == typeof r && void 0 !== t.registered[r] && (r = t.registered[r]);
        var o = e[Ri],
            a = [r],
            i = "";
        "string" == typeof e.className ? i = Di(t.registered, a, e.className) : null != e.className && (i = e.className + " ");
        var s = Ti(a, void 0, "function" == typeof r || Array.isArray(r) ? Vn.useContext(Oi) : void 0);
        vi(t, s, "string" == typeof o), i += t.key + "-" + s.name;
        var u = {};
        for (var l in e) Pi.call(e, l) && "css" !== l && l !== Ri && (u[l] = e[l]);
        return u.ref = n, u.className = i, Vn.createElement(o, u)
    })),
    Wi = function(e, t) {
        var n = arguments;
        if (null == t || !Pi.call(t, "css")) return Vn.createElement.apply(void 0, n);
        var r = n.length,
            o = new Array(r);
        o[0] = Ni, o[1] = ji(e, t);
        for (var a = 2; a < r; a++) o[a] = n[a];
        return Vn.createElement.apply(null, o)
    },
    Vi = Mi((function(e, t) {
        var n = e.styles,
            r = Ti([n], void 0, "function" == typeof n || Array.isArray(n) ? Vn.useContext(Oi) : void 0),
            o = Vn.useRef();
        return Vn.useLayoutEffect((function() {
            var e = t.key + "-global",
                n = new ya({
                    key: e,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy
                }),
                a = !1,
                i = document.querySelector('style[data-emotion="' + e + " " + r.name + '"]');
            return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== i && (a = !0, i.setAttribute("data-emotion", e), n.hydrate([i])), o.current = [n, a],
                function() {
                    n.flush()
                }
        }), [t]), Vn.useLayoutEffect((function() {
            var e = o.current,
                n = e[0];
            if (e[1]) e[1] = !1;
            else {
                if (void 0 !== r.next && vi(t, r.next, !0), n.tags.length) {
                    var a = n.tags[n.tags.length - 1].nextElementSibling;
                    n.before = a, n.flush()
                }
                t.insert("", r, n, !1)
            }
        }), [t, r.name]), null
    }));

function Ui() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return Ti(t)
}
var Hi = function() {
        var e = Ui.apply(void 0, arguments),
            t = "animation-" + e.name;
        return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function() {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
        }
    },
    qi = function e(t) {
        for (var n = t.length, r = 0, o = ""; r < n; r++) {
            var a = t[r];
            if (null != a) {
                var i = void 0;
                switch (typeof a) {
                    case "boolean":
                        break;
                    case "object":
                        if (Array.isArray(a)) i = e(a);
                        else
                            for (var s in i = "", a) a[s] && s && (i && (i += " "), i += s);
                        break;
                    default:
                        i = a
                }
                i && (o && (o += " "), o += i)
            }
        }
        return o
    };

function Ki(e, t, n) {
    var r = [],
        o = Di(e, r, n);
    return r.length < 2 ? n : o + t(r)
}
var Gi = Mi((function(e, t) {
    var n = function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            var o = Ti(n, t.registered);
            return vi(t, o, !1), t.key + "-" + o.name
        },
        r = {
            css: n,
            cx: function() {
                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                return Ki(t.registered, n, qi(r))
            },
            theme: Vn.useContext(Oi)
        },
        o = e.children(r);
    return !0, o
}));
const Zi = Promise.resolve(),
    Yi = e => {
        Zi.then(e)
    },
    $i = "data-lc-id",
    Xi = "data-lc-focus",
    Ji = "data-lc-event",
    Qi = new Map,
    es = new Map,
    ts = {
        value: -1
    };
let ns = [];

function rs() {
    Qi.clear(), ts.value = -1, ns.forEach(Yi), ns = []
}

function os(e, t) {
    const n = Qi.get(e);
    "function" == typeof n && Yi(() => n({ ...t,
        preventDefault: Un,
        stopPropagation: Un
    }))
}

function as(e) {
    const t = ++ts.value,
        n = { ...e,
            onFocus: n => {
                e.onFocus && e.onFocus(n), es.set(t, !0)
            },
            onBlur: n => {
                e.onBlur && e.onBlur(n), es.delete(t)
            }
        };
    return { ...n,
        [$i]: String(t),
        ...es.has(t) && {
            [Xi]: "true"
        },
        [Ji]: Object.keys(n).map(e => {
            let t = e.replace(/^on/, "").toLowerCase();
            const r = de();
            return "press" === t && (t = "click"), Qi.set(r, n[e]), t + ":" + r
        }).join(";")
    }
}

function is(e, t) {
    is.static ? setTimeout(() => {
        const t = e();
        t && ns.push(t)
    }, 0) : Vn.useEffect(e, t)
}

function ss(e, t, n) {
    let [r, o] = Vn.useState(e || t), a = Vn.useRef(void 0 !== e), i = a.current, s = void 0 !== e, u = Vn.useRef(r);
    i !== s && console.warn("WARN: A component changed from " + (i ? "controlled" : "uncontrolled") + " to " + (s ? "controlled" : "uncontrolled") + "."), a.current = s;
    let l = Vn.useCallback((function(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
        let i = function(e) {
            if (n && !Object.is(u.current, e)) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                n(e, ...r)
            }
            s || (u.current = e)
        };
        if ("function" == typeof e) {
            o((function(t) {
                for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                let l = e(s ? u.current : t, ...o);
                return i(l, ...r), s ? t : l
            }))
        } else s || o(e), i(e, ...r)
    }), [s, n]);
    return s ? u.current = e : e = r, [e, l]
}

function us(e) {
    var t, n, r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = us(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function ls() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = us(e)) && (r && (r += " "), r += t);
    return r
}
is.static = !1;
const cs = {
        prefix: Math.round(1e10 * Math.random()),
        current: 0
    },
    ds = Wn.createContext(cs);
let ps = Boolean("undefined" != typeof window && window.document && window.document.createElement);

function ms() {
    let e = Vn.useContext(ds) !== cs,
        [t, n] = Vn.useState(e);
    return "undefined" != typeof window && e && Vn.useLayoutEffect(() => {
        n(!1)
    }, []), t
}
const fs = "undefined" != typeof window ? Wn.useLayoutEffect : () => {};
let hs = new Map;
const gs = Wn.createContext({
    document: document,
    window: window
});

function Ds(e) {
    let {
        document: t,
        window: n,
        children: r
    } = e, o = {
        document: t,
        window: n
    };
    return Wn.createElement(gs.Provider, {
        value: o
    }, r)
}

function vs() {
    return Wn.useContext(gs)
}

function bs(e) {
    let t = Vn.useRef(!0);
    t.current = !0;
    let [n, r] = Vn.useState(e), o = Vn.useRef(null), a = e => {
        t.current ? o.current = e : r(e)
    };
    fs(() => {
        t.current = !1
    }, [a]), Vn.useEffect(() => {
        let e = o.current;
        e && (r(e), o.current = null)
    }, [r, a]);
    let i = function(e) {
        let t = Vn.useContext(ds);
        return t !== cs || ps || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."), Vn.useMemo(() => e || "react-aria-" + t.prefix + "-" + ++t.current, [e])
    }(n);
    return hs.set(i, a), i
}

function ys(e, t) {
    if (e === t) return e;
    let n = hs.get(e);
    if (n) return n(t), t;
    let r = hs.get(t);
    return r ? (r(e), e) : t
}

function xs() {
    let [e, t] = Vn.useState(bs());
    return fs(() => {
        hs.get(e) && !document.getElementById(e) && t(null)
    }, [e]), e
}

function Cs() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function() {
        for (let e of t) "function" == typeof e && e(...arguments)
    }
}

function Es() {
    let e = {};
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    for (let o of n) {
        for (let t in e) /^on[A-Z]/.test(t) && "function" == typeof e[t] && "function" == typeof o[t] ? e[t] = Cs(e[t], o[t]) : "className" === t && "string" == typeof e.className && "string" == typeof o.className ? e[t] = ls(e.className, o.className) : "UNSAFE_className" === t && "string" == typeof e.UNSAFE_className && "string" == typeof o.UNSAFE_className ? e[t] = ls(e.UNSAFE_className, o.UNSAFE_className) : "id" === t && e.id && o.id ? e.id = ys(e.id, o.id) : e[t] = void 0 !== o[t] ? o[t] : e[t];
        for (let t in o) void 0 === e[t] && (e[t] = o[t])
    }
    return e
}
const ws = new Set(["id"]),
    Fs = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
    ks = /^(data-.*)$/;

function Ss(e, t) {
    void 0 === t && (t = {});
    let {
        labelable: n,
        propNames: r
    } = t, o = {};
    for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (ws.has(a) || n && Fs.has(a) || null != r && r.has(a) || ks.test(a)) && (o[a] = e[a]);
    return o
}

function Ls(e) {
    if (function() {
            if (null == Ts) {
                Ts = !1;
                try {
                    document.createElement("div").focus({
                        get preventScroll() {
                            return Ts = !0, !0
                        }
                    })
                } catch (Am) {}
            }
            return Ts
        }()) e.focus({
        preventScroll: !0
    });
    else {
        let t = function(e) {
            var t = e.parentNode,
                n = [],
                r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
                element: t,
                scrollTop: t.scrollTop,
                scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            r instanceof HTMLElement && n.push({
                element: r,
                scrollTop: r.scrollTop,
                scrollLeft: r.scrollLeft
            });
            return n
        }(e);
        e.focus(),
            function(e) {
                for (let {
                        element: t,
                        scrollTop: n,
                        scrollLeft: r
                    } of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
    }
}
let Ts = null;
let Ps = new Map,
    Bs = new Set;

function As() {
    if ("undefined" == typeof window) return;
    let e = t => {
        let n = Ps.get(t.target);
        if (n && (n.delete(t.propertyName), 0 === n.size && (t.target.removeEventListener("transitioncancel", e), Ps.delete(t.target)), 0 === Ps.size)) {
            for (let e of Bs) e();
            Bs.clear()
        }
    };
    document.body.addEventListener("transitionrun", t => {
        let n = Ps.get(t.target);
        n || (n = new Set, Ps.set(t.target, n), t.target.addEventListener("transitioncancel", e)), n.add(t.propertyName)
    }), document.body.addEventListener("transitionend", e)
}

function Ms(e) {
    requestAnimationFrame(() => {
        0 === Ps.size ? e() : Bs.add(e)
    })
}

function Os(e, t) {
    let {
        id: n,
        "aria-label": r,
        "aria-labelledby": o
    } = e;
    if (n = bs(n), o && r) {
        let e = new Set([...o.trim().split(/\s+/), n]);
        o = [...e].join(" ")
    } else o && (o = o.trim().split(/\s+/).join(" "));
    return r || o || !t || (r = t), {
        id: n,
        "aria-label": r,
        "aria-labelledby": o
    }
}

function Is(e, t) {
    fs(() => {
        if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref.current = null
        }
    }, [e, t])
}

function _s(e) {
    for (; e && !zs(e);) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement
}

function zs(e) {
    let t = window.getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
}

function Rs(e) {
    return "undefined" != typeof window && null != window.navigator && e.test(window.navigator.platform)
}

function js() {
    return Rs(/^Mac/)
}

function Ns() {
    return Rs(/^iPhone/) || Rs(/^iPad/) || js() && navigator.maxTouchPoints > 1
}

function Ws(e, t) {
    if (null == e) return {};
    var n, r, o = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
}
"undefined" != typeof document && ("loading" !== document.readyState ? As() : document.addEventListener("DOMContentLoaded", As));
let Vs = "default",
    Us = "";

function Hs() {
    "default" === Vs && (Us = document.documentElement.style.webkitUserSelect, document.documentElement.style.webkitUserSelect = "none"), Vs = "disabled"
}

function qs() {
    "disabled" === Vs && (Vs = "restoring", setTimeout(() => {
        Ms(() => {
            "restoring" === Vs && ("none" === document.documentElement.style.webkitUserSelect && (document.documentElement.style.webkitUserSelect = Us || ""), Us = "", Vs = "default")
        })
    }, 300))
}

function Ks(e) {
    return !(0 !== e.mozInputSource || !e.isTrusted) || 0 === e.detail && !e.pointerType
}
const Gs = Wn.createContext(null);

function Zs(e) {
    let t = function(e) {
            let t = Vn.useContext(Gs);
            if (t) {
                let {
                    register: n
                } = t;
                e = Es(Ws(t, ["register"]), e), n()
            }
            return Is(t, e.ref), e
        }(e),
        {
            onPress: n,
            onPressChange: r,
            onPressStart: o,
            onPressEnd: a,
            onPressUp: i,
            isDisabled: s,
            isPressed: u,
            preventFocusOnPress: l
        } = t,
        c = Ws(t, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "ref"]),
        d = Vn.useRef(null);
    d.current = {
        onPress: n,
        onPressChange: r,
        onPressStart: o,
        onPressEnd: a,
        onPressUp: i,
        isDisabled: s
    };
    let [p, m] = Vn.useState(!1), f = Vn.useRef({
        isPressed: !1,
        ignoreEmulatedMouseEvents: !1,
        ignoreClickAfterPress: !1,
        didFirePressStart: !1,
        activePointerId: null,
        target: null,
        isOverTarget: !1,
        pointerType: null
    }), {
        addGlobalListener: h,
        removeAllGlobalListeners: g
    } = function() {
        let e = Vn.useRef(new Map),
            t = Vn.useCallback((t, n, r, o) => {
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    options: o
                }), t.addEventListener(n, r, o)
            }, []),
            n = Vn.useCallback((t, n, r, o) => {
                t.removeEventListener(n, r, o), e.current.delete(r)
            }, []),
            r = Vn.useCallback(() => {
                e.current.forEach((e, t) => {
                    n(e.eventTarget, e.type, t, e.options)
                })
            }, [n]);
        return Vn.useEffect(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
        }
    }();
    const {
        document: D,
        window: v
    } = vs();
    let b = Vn.useMemo(() => {
        let e = f.current,
            t = (t, n) => {
                let {
                    onPressStart: r,
                    onPressChange: o,
                    isDisabled: a
                } = d.current;
                a || e.didFirePressStart || (r && r({
                    type: "pressstart",
                    pointerType: n,
                    target: t.currentTarget,
                    shiftKey: t.shiftKey,
                    metaKey: t.metaKey,
                    ctrlKey: t.ctrlKey
                }), o && o(!0), e.didFirePressStart = !0, m(!0))
            },
            n = function(t, n, r) {
                void 0 === r && (r = !0);
                let {
                    onPressEnd: o,
                    onPressChange: a,
                    onPress: i,
                    isDisabled: s
                } = d.current;
                e.didFirePressStart && (e.ignoreClickAfterPress = !0, e.didFirePressStart = !1, o && o({
                    type: "pressend",
                    pointerType: n,
                    target: t.currentTarget,
                    shiftKey: t.shiftKey,
                    metaKey: t.metaKey,
                    ctrlKey: t.ctrlKey
                }), a && a(!1), m(!1), i && r && !s && i({
                    type: "press",
                    pointerType: n,
                    target: t.currentTarget,
                    shiftKey: t.shiftKey,
                    metaKey: t.metaKey,
                    ctrlKey: t.ctrlKey
                }))
            },
            r = (e, t) => {
                let {
                    onPressUp: n,
                    isDisabled: r
                } = d.current;
                r || n && n({
                    type: "pressup",
                    pointerType: t,
                    target: e.currentTarget,
                    shiftKey: e.shiftKey,
                    metaKey: e.metaKey,
                    ctrlKey: e.ctrlKey
                })
            },
            o = t => {
                e.isPressed && (e.isOverTarget && n(Js(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, g(), qs())
            },
            a = {
                onKeyDown(n) {
                    $s(n.nativeEvent) && n.currentTarget.contains(n.target) && (n.preventDefault(), n.stopPropagation(), e.isPressed || n.repeat || (e.target = n.currentTarget, e.isPressed = !0, t(n, "keyboard"), h(D, "keyup", i, !1)))
                },
                onKeyUp(t) {
                    $s(t.nativeEvent) && !t.repeat && t.currentTarget.contains(t.target) && r(Js(e.target, t), "keyboard")
                },
                onClick(o) {
                    o && !o.currentTarget.contains(o.target) || o && 0 === o.button && (o.stopPropagation(), s && o.preventDefault(), e.ignoreClickAfterPress || e.ignoreEmulatedMouseEvents || !Ks(o.nativeEvent) || (s || l || Ls(o.currentTarget), t(o, "virtual"), r(o, "virtual"), n(o, "virtual")), e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1)
                }
            },
            i = t => {
                e.isPressed && $s(t) && (t.preventDefault(), t.stopPropagation(), e.isPressed = !1, n(Js(e.target, t), "keyboard", t.target === e.target), g(), (t.target === e.target && Ys(e.target) || "link" === e.target.getAttribute("role")) && e.target.click())
            };
        if ("undefined" != typeof PointerEvent) {
            a.onPointerDown = n => {
                var r;
                0 === n.button && n.currentTarget.contains(n.target) && (eu(n.target) && n.preventDefault(), e.pointerType = 0 === (r = n.nativeEvent).width && 0 === r.height ? "virtual" : n.pointerType, n.stopPropagation(), e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, s || l || Ls(n.currentTarget), Hs(), t(n, e.pointerType), h(D, "pointermove", i, !1), h(D, "pointerup", u, !1), h(D, "pointercancel", c, !1)))
            }, a.onMouseDown = e => {
                e.currentTarget.contains(e.target) && 0 === e.button && (eu(e.target) && e.preventDefault(), e.stopPropagation())
            }, a.onPointerUp = t => {
                t.currentTarget.contains(t.target) && 0 === t.button && Qs(t, t.currentTarget) && r(t, e.pointerType)
            };
            let i = r => {
                    r.pointerId === e.activePointerId && (Qs(r, e.target) ? e.isOverTarget || (e.isOverTarget = !0, t(Js(e.target, r), e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, n(Js(e.target, r), e.pointerType, !1)))
                },
                u = t => {
                    t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && (Qs(t, e.target) ? n(Js(e.target, t), e.pointerType) : e.isOverTarget && n(Js(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, g(), qs())
                },
                c = e => {
                    o(e)
                };
            a.onDragStart = e => {
                e.currentTarget.contains(e.target) && o(e)
            }
        } else {
            a.onMouseDown = n => {
                0 === n.button && n.currentTarget.contains(n.target) && (eu(n.target) && n.preventDefault(), n.stopPropagation(), e.ignoreEmulatedMouseEvents || (e.isPressed = !0, e.isOverTarget = !0, e.target = n.currentTarget, e.pointerType = Ks(n.nativeEvent) ? "virtual" : "mouse", s || l || Ls(n.currentTarget), t(n, e.pointerType), h(D, "mouseup", i, !1)))
            }, a.onMouseEnter = n => {
                n.currentTarget.contains(n.target) && (n.stopPropagation(), e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !0, t(n, e.pointerType)))
            }, a.onMouseLeave = t => {
                t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && !e.ignoreEmulatedMouseEvents && (e.isOverTarget = !1, n(t, e.pointerType, !1)))
            }, a.onMouseUp = t => {
                t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || r(t, e.pointerType))
            };
            let i = t => {
                0 === t.button && (e.isPressed = !1, g(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (Qs(t, e.target) ? n(Js(e.target, t), e.pointerType) : e.isOverTarget && n(Js(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            a.onTouchStart = n => {
                if (!n.currentTarget.contains(n.target)) return;
                n.stopPropagation();
                let r = function(e) {
                    const {
                        targetTouches: t
                    } = e;
                    if (t.length > 0) return t[0];
                    return null
                }(n.nativeEvent);
                r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = n.currentTarget, e.pointerType = "touch", s || l || Ls(n.currentTarget), Hs(), t(n, e.pointerType), h(v, "scroll", u, !0))
            }, a.onTouchMove = r => {
                if (!r.currentTarget.contains(r.target)) return;
                if (r.stopPropagation(), !e.isPressed) return;
                let o = Xs(r.nativeEvent, e.activePointerId);
                o && Qs(o, r.currentTarget) ? e.isOverTarget || (e.isOverTarget = !0, t(r, e.pointerType)) : e.isOverTarget && (e.isOverTarget = !1, n(r, e.pointerType, !1))
            }, a.onTouchEnd = t => {
                if (!t.currentTarget.contains(t.target)) return;
                if (t.stopPropagation(), !e.isPressed) return;
                let o = Xs(t.nativeEvent, e.activePointerId);
                o && Qs(o, t.currentTarget) ? (r(t, e.pointerType), n(t, e.pointerType)) : e.isOverTarget && n(t, e.pointerType, !1), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, qs(), g()
            }, a.onTouchCancel = t => {
                t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && o(t))
            };
            let u = t => {
                e.isPressed && t.target.contains(e.target) && o({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1
                })
            };
            a.onDragStart = e => {
                e.currentTarget.contains(e.target) && o(e)
            }
        }
        return a
    }, [h, s, l, g]);
    return Vn.useEffect(() => () => qs(), []), {
        isPressed: u || p,
        pressProps: Es(c, b)
    }
}

function Ys(e) {
    return "A" === e.tagName && e.hasAttribute("href")
}

function $s(e) {
    const {
        key: t,
        target: n
    } = e, r = n, {
        tagName: o,
        isContentEditable: a
    } = r, i = r.getAttribute("role");
    return !("Enter" !== t && " " !== t && "Spacebar" !== t || "INPUT" === o || "TEXTAREA" === o || !0 === a || Ys(r) && ("button" !== i || "Enter" === t) || "link" === i && "Enter" !== t)
}

function Xs(e, t) {
    const n = e.changedTouches;
    for (let r = 0; r < n.length; r++) {
        const e = n[r];
        if (e.identifier === t) return e
    }
    return null
}

function Js(e, t) {
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey
    }
}

function Qs(e, t) {
    let n = t.getBoundingClientRect(),
        r = function(e) {
            let t = e.width / 2 || e.radiusX || 0,
                n = e.height / 2 || e.radiusY || 0;
            return {
                top: e.clientY - n,
                right: e.clientX + t,
                bottom: e.clientY + n,
                left: e.clientX - t
            }
        }(e);
    return a = r, !((o = n).left > a.right || a.left > o.right || o.top > a.bottom || a.top > o.bottom);
    var o, a
}

function eu(e) {
    return !e.closest('[draggable="true"]')
}
Gs.displayName = "PressResponderContext";
const tu = Wn.forwardRef((e, t) => {
    let {
        children: n
    } = e, r = Ws(e, ["children"]), o = Vn.useRef(!1), a = Vn.useContext(Gs), i = Es(a || {}, Fe({}, r, {
        ref: t || (null == a ? void 0 : a.ref),
        register() {
            o.current = !0, a && a.register()
        }
    }));
    return Is(a, t), Vn.useEffect(() => {
        o.current || console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.")
    }, []), Wn.createElement(Gs.Provider, {
        value: i
    }, n)
});

function nu(e) {
    if (e.isDisabled) return {
        focusProps: {}
    };
    let t, n;
    return (e.onFocus || e.onFocusChange) && (t = t => {
        t.target === t.currentTarget && (e.onFocus && e.onFocus(t), e.onFocusChange && e.onFocusChange(!0))
    }), (e.onBlur || e.onFocusChange) && (n = t => {
        t.target === t.currentTarget && (e.onBlur && e.onBlur(t), e.onFocusChange && e.onFocusChange(!1))
    }), {
        focusProps: {
            onFocus: t,
            onBlur: n
        }
    }
}
let ru = null,
    ou = new Set,
    au = !1,
    iu = !1;
const su = {
    Tab: !0,
    Escape: !0
};

function uu(e, t) {
    for (let n of ou) n(e, t)
}

function lu(e) {
    au = !0,
        function(e) {
            return !(e.metaKey || !js() && e.altKey || e.ctrlKey || "keyup" === e.type && ("Control" === e.key || "Shift" === e.key))
        }(e) && (ru = "keyboard", uu("keyboard", e))
}

function cu(e) {
    ru = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (au = !0, uu("pointer", e))
}

function du(e) {
    Ks(e) && (au = !0, ru = "virtual")
}

function pu() {
    au = !1, iu = !0
}

function mu(e = window, t = document) {
    const n = e || n,
        r = t || r;
    if (void 0 === n || n.hasSetupGlobalListeners) return;
    let o = n.HTMLElement.prototype.focus;
    n.HTMLElement.prototype.focus = function() {
        au = !0, o.apply(this, arguments)
    }, r.addEventListener("keydown", lu, !0), r.addEventListener("keyup", lu, !0), r.addEventListener("click", du, !0), n.addEventListener("focus", e => function(e, t = widnow, n = document) {
        e.target !== t && e.target !== n && (au || iu || (ru = "virtual", uu("virtual", e)), au = !1, iu = !1)
    }(e, n, r), !0), n.addEventListener("blur", pu, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", cu, !0), r.addEventListener("pointermove", cu, !0), r.addEventListener("pointerup", cu, !0)) : (r.addEventListener("mousedown", cu, !0), r.addEventListener("mousemove", cu, !0), r.addEventListener("mouseup", cu, !0)), n.hasSetupGlobalListeners = !0
}

function fu() {
    return "pointer" !== ru
}

function hu() {
    return ru
}

function gu(e) {
    void 0 === e && (e = {});
    let {
        isTextInput: t,
        autoFocus: n,
        skipFocusVisible: r
    } = e, [o, a] = Vn.useState(n || fu());
    return Du(e => {
        a(e)
    }, [t], {
        isTextInput: t,
        skipFocusVisible: r
    }), r ? {} : {
        isFocusVisible: o
    }
}

function Du(e, t, n) {
    const {
        document: r,
        window: o
    } = vs();
    n.skipFocusVisible || mu(o, r), Vn.useEffect(() => {
        if (n.skipFocusVisible) return;
        let t = (t, r) => {
            (function(e, t, n) {
                return !(e && "keyboard" === t && n instanceof KeyboardEvent && !su[n.key])
            })(null == n ? void 0 : n.isTextInput, t, r) && e(fu())
        };
        return ou.add(t), () => ou.delete(t)
    }, t)
}

function vu(e) {
    let t = Vn.useRef({
        isFocusWithin: !1
    }).current;
    if (e.isDisabled) return {
        focusWithinProps: {}
    };
    return {
        focusWithinProps: {
            onFocus: n => {
                t.isFocusWithin || (e.onFocusWithin && e.onFocusWithin(n), e.onFocusWithinChange && e.onFocusWithinChange(!0), t.isFocusWithin = !0)
            },
            onBlur: n => {
                t.isFocusWithin && !n.currentTarget.contains(n.relatedTarget) && (e.onBlurWithin && e.onBlurWithin(n), e.onFocusWithinChange && e.onFocusWithinChange(!1), t.isFocusWithin = !1)
            }
        }
    }
}
"undefined" != typeof document && ("loading" !== document.readyState ? mu(window, document) : document.addEventListener("DOMContentLoaded", () => mu(window, document)));
let bu = !1,
    yu = 0;

function xu() {
    bu = !0, setTimeout(() => {
        bu = !1
    }, 50)
}

function Cu(e) {
    "touch" === e.pointerType && xu()
}

function Eu(e) {
    let {
        onHoverStart: t,
        onHoverChange: n,
        onHoverEnd: r,
        isDisabled: o
    } = e, [a, i] = Vn.useState(!1), s = Vn.useRef({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
    }).current;
    vs(), Vn.useEffect(() => function() {
        if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", Cu) : document.addEventListener("touchend", xu), yu++, () => {
            yu--, yu > 0 || ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", Cu) : document.removeEventListener("touchend", xu))
        }
    }(), []);
    let {
        hoverProps: u,
        triggerHoverEnd: l
    } = Vn.useMemo(() => {
        let e = (e, r) => {
                if (s.pointerType = r, o || "touch" === r || s.isHovered || !e.currentTarget.contains(e.target)) return;
                s.isHovered = !0;
                let a = e.target;
                s.target = a, t && t({
                    type: "hoverstart",
                    target: a,
                    pointerType: r
                }), n && n(!0), i(!0)
            },
            a = (e, t) => {
                if (s.pointerType = "", s.target = null, "touch" === t || !s.isHovered) return;
                s.isHovered = !1;
                let o = e.target;
                r && r({
                    type: "hoverend",
                    target: o,
                    pointerType: t
                }), n && n(!1), i(!1)
            },
            u = {};
        return "undefined" != typeof PointerEvent ? (u.onPointerEnter = t => {
            bu && "mouse" === t.pointerType || e(t, t.pointerType)
        }, u.onPointerLeave = e => {
            !o && e.currentTarget.contains(e.target) && a(e, e.pointerType)
        }) : (u.onTouchStart = () => {
            s.ignoreEmulatedMouseEvents = !0
        }, u.onMouseEnter = t => {
            s.ignoreEmulatedMouseEvents || bu || e(t, "mouse"), s.ignoreEmulatedMouseEvents = !1
        }, u.onMouseLeave = e => {
            !o && e.currentTarget.contains(e.target) && a(e, "mouse")
        }), {
            hoverProps: u,
            triggerHoverEnd: a
        }
    }, [t, n, r, o, s]);
    return Vn.useEffect(() => {
        o && l({
            target: s.target
        }, s.pointerType)
    }, [o]), {
        hoverProps: u,
        isHovered: a
    }
}

function wu(e, t) {
    if (e.button > 0) return !1;
    if (e.target) {
        const t = e.target.ownerDocument;
        if (!t || !t.documentElement.contains(e.target)) return !1
    }
    return t.current && !t.current.contains(e.target)
}

function Fu(e) {
    if (!e) return;
    let t = !0;
    return n => {
        let r = Fe({}, n, {
            preventDefault() {
                n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
                t = !1
            }
        });
        e(r), t && n.stopPropagation()
    }
}

function ku(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Su, Lu, Tu = {
    exports: {}
};
Su = Tu, (Lu = Tu.exports).__esModule = !0, Lu.default = function(e) {
    return e && e.ownerDocument || document
}, Su.exports = Lu.default;
var Pu = Tu.exports,
    Bu = {
        exports: {}
    };
var Au, Mu = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    },
    Ou = {
        exports: {}
    };

function Iu() {
    return Au || (Au = 1, function(e, t) {
        t.__esModule = !0, t.default = function(e) {
            return e === e.window ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }, e.exports = t.default
    }(Ou, Ou.exports)), Ou.exports
}! function(e, t) {
    var n = Mu;
    t.__esModule = !0, t.default = function(e, t) {
        var n = (0, r.default)(e);
        if (void 0 === t) return n ? "pageYOffset" in n ? n.pageYOffset : n.document.documentElement.scrollTop : e.scrollTop;
        n ? n.scrollTo("pageXOffset" in n ? n.pageXOffset : n.document.documentElement.scrollLeft, t) : e.scrollTop = t
    };
    var r = n(Iu());
    e.exports = t.default
}(Bu, Bu.exports);
var _u = Bu.exports,
    zu = {
        exports: {}
    };
! function(e, t) {
    var n = Mu;
    t.__esModule = !0, t.default = function(e, t) {
        var n = (0, r.default)(e);
        if (void 0 === t) return n ? "pageXOffset" in n ? n.pageXOffset : n.document.documentElement.scrollLeft : e.scrollLeft;
        n ? n.scrollTo(t, "pageYOffset" in n ? n.pageYOffset : n.document.documentElement.scrollTop) : e.scrollLeft = t
    };
    var r = n(Iu());
    e.exports = t.default
}(zu, zu.exports);
var Ru, ju, Nu = zu.exports,
    Wu = {
        exports: {}
    };

function Vu() {
    if (ju) return Ru;

    function e() {
        return Ru = e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, e.apply(this, arguments)
    }
    return ju = 1, Ru = e
}
var Uu, Hu, qu, Ku = {
        exports: {}
    },
    Gu = {
        exports: {}
    },
    Zu = {
        exports: {}
    };

function Yu() {
    return Uu || (Uu = 1, function(e, t) {
        t.__esModule = !0, t.default = void 0;
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.default = n, e.exports = t.default
    }(Zu, Zu.exports)), Zu.exports
}

function $u() {
    return qu || (qu = 1, function(e, t) {
        var n = Mu;
        t.__esModule = !0, t.default = function(e) {
            var t = (0, a.default)(e),
                n = (0, o.default)(t),
                i = t && t.documentElement,
                s = {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
            if (!t) return;
            if (!(0, r.default)(i, e)) return s;
            void 0 !== e.getBoundingClientRect && (s = e.getBoundingClientRect());
            return s = {
                top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                width: (null == s.width ? e.offsetWidth : s.width) || 0,
                height: (null == s.height ? e.offsetHeight : s.height) || 0
            }
        };
        var r = n((Hu || (Hu = 1, function(e, t) {
                var n = Mu;
                t.__esModule = !0, t.default = void 0;
                var r = n(Yu()).default ? function(e, t) {
                    return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : o(e, t)
                } : o;

                function o(e, t) {
                    if (t)
                        do {
                            if (t === e) return !0
                        } while (t = t.parentNode);
                    return !1
                }
                t.default = r, e.exports = t.default
            }(Gu, Gu.exports)), Gu.exports)),
            o = n(Iu()),
            a = n(Pu);
        e.exports = t.default
    }(Ku, Ku.exports)), Ku.exports
}
var Xu, Ju, Qu = {
        exports: {}
    },
    el = {
        exports: {}
    },
    tl = {
        exports: {}
    },
    nl = {
        exports: {}
    };

function rl() {
    return Ju || (Ju = 1, function(e, t) {
        var n = Mu;
        t.__esModule = !0, t.default = function(e) {
            return (0, r.default)(e.replace(o, "ms-"))
        };
        var r = n((Xu || (Xu = 1, function(e, t) {
                t.__esModule = !0, t.default = function(e) {
                    return e.replace(n, (function(e, t) {
                        return t.toUpperCase()
                    }))
                };
                var n = /-(.)/g;
                e.exports = t.default
            }(nl, nl.exports)), nl.exports)),
            o = /^-ms-/;
        e.exports = t.default
    }(tl, tl.exports)), tl.exports
}
var ol, al, il = {
        exports: {}
    },
    sl = {
        exports: {}
    };

function ul() {
    return al || (al = 1, function(e, t) {
        var n = Mu;
        t.__esModule = !0, t.default = function(e) {
            return (0, r.default)(e).replace(o, "-ms-")
        };
        var r = n((ol || (ol = 1, function(e, t) {
                t.__esModule = !0, t.default = function(e) {
                    return e.replace(n, "-$1").toLowerCase()
                };
                var n = /([A-Z])/g;
                e.exports = t.default
            }(sl, sl.exports)), sl.exports)),
            o = /^ms-/;
        e.exports = t.default
    }(il, il.exports)), il.exports
}
var ll, cl = {
    exports: {}
};
var dl, pl = {
    exports: {}
};
var ml, fl = {};
var hl, gl, Dl, vl = {
    exports: {}
};

function bl() {
    return gl || (gl = 1, function(e, t) {
        var n = Mu;
        t.__esModule = !0, t.default = function(e, t, n) {
            var l = "",
                c = "",
                d = t;
            if ("string" == typeof t) {
                if (void 0 === n) return e.style[(0, r.default)(t)] || (0, a.default)(e).getPropertyValue((0, o.default)(t));
                (d = {})[t] = n
            }
            Object.keys(d).forEach((function(t) {
                var n = d[t];
                n || 0 === n ? (0, u.default)(t) ? c += t + "(" + n + ") " : l += (0, o.default)(t) + ": " + n + ";" : (0, i.default)(e, (0, o.default)(t))
            })), c && (l += s.transform + ": " + c + ";");
            e.style.cssText += ";" + l
        };
        var r = n(rl()),
            o = n(ul()),
            a = n((ll || (ll = 1, function(e, t) {
                var n = Mu;
                t.__esModule = !0, t.default = function(e) {
                    if (!e) throw new TypeError("No Element passed to `getComputedStyle()`");
                    var t = e.ownerDocument;
                    return "defaultView" in t ? t.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : window.getComputedStyle(e, null) : {
                        getPropertyValue: function(t) {
                            var n = e.style;
                            "float" == (t = (0, r.default)(t)) && (t = "styleFloat");
                            var i = e.currentStyle[t] || null;
                            if (null == i && n && n[t] && (i = n[t]), a.test(i) && !o.test(t)) {
                                var s = n.left,
                                    u = e.runtimeStyle,
                                    l = u && u.left;
                                l && (u.left = e.currentStyle.left), n.left = "fontSize" === t ? "1em" : i, i = n.pixelLeft + "px", n.left = s, l && (u.left = l)
                            }
                            return i
                        }
                    }
                };
                var r = n(rl()),
                    o = /^(top|right|bottom|left)$/,
                    a = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
                e.exports = t.default
            }(cl, cl.exports)), cl.exports)),
            i = n((dl || (dl = 1, function(e, t) {
                t.__esModule = !0, t.default = function(e, t) {
                    return "removeProperty" in e.style ? e.style.removeProperty(t) : e.style.removeAttribute(t)
                }, e.exports = t.default
            }(pl, pl.exports)), pl.exports)),
            s = function() {
                if (ml) return fl;
                ml = 1;
                var e = Mu;
                fl.__esModule = !0, fl.default = fl.animationEnd = fl.animationDelay = fl.animationTiming = fl.animationDuration = fl.animationName = fl.transitionEnd = fl.transitionDuration = fl.transitionDelay = fl.transitionTiming = fl.transitionProperty = fl.transform = void 0;
                var t, n, r, o, a, i, s, u, l, c, d, p = e(Yu()),
                    m = "transform";
                if (fl.transform = m, fl.animationEnd = r, fl.transitionEnd = n, fl.transitionDelay = s, fl.transitionTiming = i, fl.transitionDuration = a, fl.transitionProperty = o, fl.animationDelay = d, fl.animationTiming = c, fl.animationDuration = l, fl.animationName = u, p.default) {
                    var f = function() {
                        for (var e, t, n = document.createElement("div").style, r = {
                                O: function(e) {
                                    return "o" + e.toLowerCase()
                                },
                                Moz: function(e) {
                                    return e.toLowerCase()
                                },
                                Webkit: function(e) {
                                    return "webkit" + e
                                },
                                ms: function(e) {
                                    return "MS" + e
                                }
                            }, o = Object.keys(r), a = "", i = 0; i < o.length; i++) {
                            var s = o[i];
                            if (s + "TransitionProperty" in n) {
                                a = "-" + s.toLowerCase(), e = r[s]("TransitionEnd"), t = r[s]("AnimationEnd");
                                break
                            }
                        }!e && "transitionProperty" in n && (e = "transitionend");
                        !t && "animationName" in n && (t = "animationend");
                        return n = null, {
                            animationEnd: t,
                            transitionEnd: e,
                            prefix: a
                        }
                    }();
                    t = f.prefix, fl.transitionEnd = n = f.transitionEnd, fl.animationEnd = r = f.animationEnd, fl.transform = m = t + "-" + m, fl.transitionProperty = o = t + "-transition-property", fl.transitionDuration = a = t + "-transition-duration", fl.transitionDelay = s = t + "-transition-delay", fl.transitionTiming = i = t + "-transition-timing-function", fl.animationName = u = t + "-animation-name", fl.animationDuration = l = t + "-animation-duration", fl.animationTiming = c = t + "-animation-delay", fl.animationDelay = d = t + "-animation-timing-function"
                }
                var h = {
                    transform: m,
                    end: n,
                    property: o,
                    timing: i,
                    delay: s,
                    duration: a
                };
                return fl.default = h, fl
            }(),
            u = n((hl || (hl = 1, function(e, t) {
                t.__esModule = !0, t.default = function(e) {
                    return !(!e || !n.test(e))
                };
                var n = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
                e.exports = t.default
            }(vl, vl.exports)), vl.exports));
        e.exports = t.default
    }(el, el.exports)), el.exports
}! function(e, t) {
    var n = Mu;
    t.__esModule = !0, t.default = function(e, t) {
        var n, l = {
            top: 0,
            left: 0
        };
        "fixed" === (0, u.default)(e, "position") ? n = e.getBoundingClientRect(): (t = t || (0, a.default)(e), n = (0, o.default)(e), "html" !== function(e) {
            return e.nodeName && e.nodeName.toLowerCase()
        }(t) && (l = (0, o.default)(t)), l.top += parseInt((0, u.default)(t, "borderTopWidth"), 10) - (0, i.default)(t) || 0, l.left += parseInt((0, u.default)(t, "borderLeftWidth"), 10) - (0, s.default)(t) || 0);
        return (0, r.default)({}, n, {
            top: n.top - l.top - (parseInt((0, u.default)(e, "marginTop"), 10) || 0),
            left: n.left - l.left - (parseInt((0, u.default)(e, "marginLeft"), 10) || 0)
        })
    };
    var r = n(Vu()),
        o = n($u()),
        a = n((Dl || (Dl = 1, function(e, t) {
            var n = Mu;
            t.__esModule = !0, t.default = function(e) {
                for (var t = (0, r.default)(e), n = e && e.offsetParent; n && "html" !== a(e) && "static" === (0, o.default)(n, "position");) n = n.offsetParent;
                return n || t.documentElement
            };
            var r = n(Pu),
                o = n(bl());

            function a(e) {
                return e.nodeName && e.nodeName.toLowerCase()
            }
            e.exports = t.default
        }(Qu, Qu.exports)), Qu.exports)),
        i = n(_u),
        s = n(Nu),
        u = n(bl());
    e.exports = t.default
}(Wu, Wu.exports), $u(), bl();
const yl = [];

function xl(e, t) {
    let {
        onClose: n,
        shouldCloseOnBlur: r,
        isOpen: o,
        isDismissable: a = !1,
        isKeyboardDismissDisabled: i = !1,
        shouldCloseOnInteractOutside: s
    } = e;
    Vn.useEffect(() => (o && yl.push(t), () => {
        let e = yl.indexOf(t);
        e >= 0 && yl.splice(e, 1)
    }), [o, t]);
    let u = () => {
        yl[yl.length - 1] === t && n && n()
    };
    ! function(e) {
        let {
            ref: t,
            onInteractOutside: n,
            isDisabled: r,
            onInteractOutsideStart: o
        } = e, a = Vn.useRef({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }).current;
        const {
            document: i
        } = vs();
        Vn.useEffect(() => {
            let e = e => {
                r || wu(e, t) && n && (o && o(e), a.isPointerDown = !0)
            };
            if ("undefined" != typeof PointerEvent) {
                let o = e => {
                    r || a.isPointerDown && n && wu(e, t) && (a.isPointerDown = !1, n(e))
                };
                return i.addEventListener("pointerdown", e, !0), i.addEventListener("pointerup", o, !0), () => {
                    i.removeEventListener("pointerdown", e, !0), i.removeEventListener("pointerup", o, !0)
                }
            } {
                let o = e => {
                        r || (a.ignoreEmulatedMouseEvents ? a.ignoreEmulatedMouseEvents = !1 : a.isPointerDown && n && wu(e, t) && (a.isPointerDown = !1, n(e)))
                    },
                    s = e => {
                        r || (a.ignoreEmulatedMouseEvents = !0, n && a.isPointerDown && wu(e, t) && (a.isPointerDown = !1, n(e)))
                    };
                return i.addEventListener("mousedown", e, !0), i.addEventListener("mouseup", o, !0), i.addEventListener("touchstart", e, !0), i.addEventListener("touchend", s, !0), () => {
                    i.removeEventListener("mousedown", e, !0), i.removeEventListener("mouseup", o, !0), i.removeEventListener("touchstart", e, !0), i.removeEventListener("touchend", s, !0)
                }
            }
        }, [n, t, a.ignoreEmulatedMouseEvents, a.isPointerDown, r])
    }({
        ref: t,
        onInteractOutside: a ? e => {
            s && !s(e.target) || (yl[yl.length - 1] === t && (e.stopPropagation(), e.preventDefault()), u())
        } : null,
        onInteractOutsideStart: e => {
            s && !s(e.target) || yl[yl.length - 1] === t && (e.stopPropagation(), e.preventDefault())
        }
    });
    let {
        focusWithinProps: l
    } = vu({
        isDisabled: !r,
        onBlurWithin: e => {
            s && !s(e.relatedTarget) || n()
        }
    });
    return {
        overlayProps: Fe({
            onKeyDown: e => {
                "Escape" !== e.key || i || (e.preventDefault(), u())
            }
        }, l),
        underlayProps: {
            onPointerDown: e => {
                e.target === e.currentTarget && e.preventDefault()
            }
        }
    }
}
const Cl = "undefined" != typeof window && window.visualViewport,
    El = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

function wl(e) {
    void 0 === e && (e = {});
    let {
        isDisabled: t
    } = e;
    fs(() => {
        if (!t) return Ns() ? function() {
            let e, t = 0,
                n = window.pageXOffset,
                r = window.pageYOffset,
                o = Cs(Fl(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), Fl(document.documentElement, "overflow", "hidden"), Fl(document.body, "marginTop", "-" + r + "px"));
            window.scrollTo(0, 0);
            let a = Cs(kl(document, "touchstart", n => {
                e = _s(n.target), e === document.documentElement && e === document.body || (t = n.changedTouches[0].pageY)
            }, {
                passive: !1,
                capture: !0
            }), kl(document, "touchmove", n => {
                if (e === document.documentElement || e === document.body) return void n.preventDefault();
                let r = n.changedTouches[0].pageY,
                    o = e.scrollTop,
                    a = e.scrollHeight - e.clientHeight;
                (o <= 0 && r > t || o >= a && r < t) && n.preventDefault(), t = r
            }, {
                passive: !1,
                capture: !0
            }), kl(document, "touchend", e => {
                let t = e.target;
                t instanceof HTMLInputElement && !El.has(t.type) && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
                    t.style.transform = ""
                }))
            }, {
                passive: !1,
                capture: !0
            }), kl(document, "focus", e => {
                let t = e.target;
                t instanceof HTMLInputElement && !El.has(t.type) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                    t.style.transform = "", Cl && (Cl.height < window.innerHeight ? requestAnimationFrame(() => {
                        Sl(t)
                    }) : Cl.addEventListener("resize", () => Sl(t), {
                        once: !0
                    }))
                }))
            }, !0), kl(window, "scroll", () => {
                window.scrollTo(0, 0)
            }));
            return () => {
                o(), a(), window.scrollTo(n, r)
            }
        }() : Cs(Fl(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), Fl(document.documentElement, "overflow", "hidden"))
    }, [t])
}

function Fl(e, t, n) {
    let r = e.style[t];
    return e.style[t] = n, () => {
        e.style[t] = r
    }
}

function kl(e, t, n, r) {
    return e.addEventListener(t, n, r), () => {
        e.removeEventListener(t, n, r)
    }
}

function Sl(e) {
    let t = _s(e);
    if (t !== document.documentElement && t !== document.body) {
        let n = t.getBoundingClientRect().top,
            r = e.getBoundingClientRect().top;
        r > n + e.clientHeight && (t.scrollTop += r - n)
    }
}
const Ll = Wn.createContext(null);

function Tl(e) {
    let {
        children: t
    } = e, n = Vn.useContext(Ll), [r, o] = Vn.useState(0), a = Vn.useMemo(() => ({
        parent: n,
        modalCount: r,
        addModal() {
            o(e => e + 1), n && n.addModal()
        },
        removeModal() {
            o(e => e - 1), n && n.removeModal()
        }
    }), [n, r]);
    return Wn.createElement(Ll.Provider, {
        value: a
    }, t)
}

function Pl(e) {
    let t = Vn.useContext(Ll);
    if (!t) throw new Error("Modal is not contained within a provider");
    return Vn.useEffect(() => {
        if (t && t.parent) return t.parent.addModal(), () => {
            t && t.parent && t.parent.removeModal()
        }
    }, [t, t.parent, void 0]), {
        modalProps: {
            "data-ismodal": !(null != e)
        }
    }
}
var Bl;
Bl = JSON.parse('{"dismiss":"تجاهل"}');
var Al;
Al = JSON.parse('{"dismiss":"Отхвърляне"}');
var Ml;
Ml = JSON.parse('{"dismiss":"Odstranit"}');
var Ol;
Ol = JSON.parse('{"dismiss":"Luk"}');
var Il;
Il = JSON.parse('{"dismiss":"Schließen"}');
var _l;
_l = JSON.parse('{"dismiss":"Απόρριψη"}');
var zl;
zl = JSON.parse('{"dismiss":"Dismiss"}');
var Rl;
Rl = JSON.parse('{"dismiss":"Descartar"}');
var jl;
jl = JSON.parse('{"dismiss":"Lõpeta"}');
var Nl;
Nl = JSON.parse('{"dismiss":"Hylkää"}');
var Wl;
Wl = JSON.parse('{"dismiss":"Rejeter"}');
var Vl;
Vl = JSON.parse('{"dismiss":"התעלם"}');
var Ul;
Ul = JSON.parse('{"dismiss":"Odbaci"}');
var Hl;
Hl = JSON.parse('{"dismiss":"Elutasítás"}');
var ql;
ql = JSON.parse('{"dismiss":"Ignora"}');
var Kl;
Kl = JSON.parse('{"dismiss":"閉じる"}');
var Gl;
Gl = JSON.parse('{"dismiss":"무시"}');
var Zl;
Zl = JSON.parse('{"dismiss":"Atmesti"}');
var Yl;
Yl = JSON.parse('{"dismiss":"Nerādīt"}');
var $l;
$l = JSON.parse('{"dismiss":"Lukk"}');
var Xl;
Xl = JSON.parse('{"dismiss":"Negeren"}');
var Jl;
Jl = JSON.parse('{"dismiss":"Zignoruj"}');
var Ql;
Ql = JSON.parse('{"dismiss":"Descartar"}');
var ec;
ec = JSON.parse('{"dismiss":"Dispensar"}');
var tc;
tc = JSON.parse('{"dismiss":"Revocare"}');
var nc;
nc = JSON.parse('{"dismiss":"Пропустить"}');
var rc;
rc = JSON.parse('{"dismiss":"Zrušiť"}');
var oc;
oc = JSON.parse('{"dismiss":"Opusti"}');
var ac;
ac = JSON.parse('{"dismiss":"Odbaci"}');
var ic;
ic = JSON.parse('{"dismiss":"Avvisa"}');
var sc;
sc = JSON.parse('{"dismiss":"Kapat"}');
var uc;
uc = JSON.parse('{"dismiss":"Скасувати"}');
var lc;
lc = JSON.parse('{"dismiss":"取消"}');
var cc;
cc = JSON.parse('{"dismiss":"關閉"}'), ku(Bl).default, ku(Al).default, ku(Ml).default, ku(Ol).default, ku(Il).default, ku(_l).default, ku(zl).default, ku(Rl).default, ku(jl).default, ku(Nl).default, ku(Wl).default, ku(Vl).default, ku(Ul).default, ku(Hl).default, ku(ql).default, ku(Kl).default, ku(Gl).default, ku(Zl).default, ku(Yl).default, ku($l).default, ku(Xl).default, ku(Jl).default, ku(Ql).default, ku(ec).default, ku(tc).default, ku(nc).default, ku(rc).default, ku(oc).default, ku(ac).default, ku(ic).default, ku(sc).default, ku(uc).default, ku(lc).default, ku(cc).default;
var dc = {
    exports: {}
};

function pc() {}
dc.exports = function() {
    function e(e, t, n, r, o, a) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) {
            var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw i.name = "Invariant Violation", i
        }
    }

    function t() {
        return e
    }
    e.isRequired = e;
    var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t
    };
    return n.checkPropTypes = pc, n.PropTypes = n, n
}();
var mc = dc.exports,
    fc = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: 0,
        width: "1px",
        position: "absolute"
    },
    hc = function(e) {
        var t = e.message,
            n = e["aria-live"];
        return Wn.createElement("div", {
            style: fc,
            role: "log",
            "aria-live": n
        }, t || "")
    };

function gc(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Dc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
hc.propTypes = {};
var vc = function(e) {
    function t() {
        var n, r;
        gc(this, t);
        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return n = r = Dc(this, e.call.apply(e, [this].concat(a))), r.state = {
            assertiveMessage1: "",
            assertiveMessage2: "",
            politeMessage1: "",
            politeMessage2: "",
            oldPolitemessage: "",
            oldPoliteMessageId: "",
            oldAssertiveMessage: "",
            oldAssertiveMessageId: "",
            setAlternatePolite: !1,
            setAlternateAssertive: !1
        }, Dc(r, n)
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, e), t.getDerivedStateFromProps = function(e, t) {
        var n = t.oldPolitemessage,
            r = t.oldPoliteMessageId,
            o = t.oldAssertiveMessage,
            a = t.oldAssertiveMessageId,
            i = e.politeMessage,
            s = e.politeMessageId,
            u = e.assertiveMessage,
            l = e.assertiveMessageId;
        return n !== i || r !== s ? {
            politeMessage1: t.setAlternatePolite ? "" : i,
            politeMessage2: t.setAlternatePolite ? i : "",
            oldPolitemessage: i,
            oldPoliteMessageId: s,
            setAlternatePolite: !t.setAlternatePolite
        } : o !== u || a !== l ? {
            assertiveMessage1: t.setAlternateAssertive ? "" : u,
            assertiveMessage2: t.setAlternateAssertive ? u : "",
            oldAssertiveMessage: u,
            oldAssertiveMessageId: l,
            setAlternateAssertive: !t.setAlternateAssertive
        } : null
    }, t.prototype.render = function() {
        var e = this.state,
            t = e.assertiveMessage1,
            n = e.assertiveMessage2,
            r = e.politeMessage1,
            o = e.politeMessage2;
        return Wn.createElement("div", null, Wn.createElement(hc, {
            "aria-live": "assertive",
            message: t
        }), Wn.createElement(hc, {
            "aria-live": "assertive",
            message: n
        }), Wn.createElement(hc, {
            "aria-live": "polite",
            message: r
        }), Wn.createElement(hc, {
            "aria-live": "polite",
            message: o
        }))
    }, t
}(Vn.Component);
vc.propTypes = {};
var bc = Wn.createContext({
    announceAssertive: yc,
    announcePolite: yc
});

function yc() {
    console.warn("Announcement failed, LiveAnnouncer context is missing")
}
var xc = function(e) {
        function t(n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, e.call(this, n));
            return r.announcePolite = function(e, t) {
                r.setState({
                    announcePoliteMessage: e,
                    politeMessageId: t || ""
                })
            }, r.announceAssertive = function(e, t) {
                r.setState({
                    announceAssertiveMessage: e,
                    assertiveMessageId: t || ""
                })
            }, r.state = {
                announcePoliteMessage: "",
                politeMessageId: "",
                announceAssertiveMessage: "",
                assertiveMessageId: "",
                updateFunctions: {
                    announcePolite: r.announcePolite,
                    announceAssertive: r.announceAssertive
                }
            }, r
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), t.prototype.render = function() {
            var e = this.state,
                t = e.announcePoliteMessage,
                n = e.politeMessageId,
                r = e.announceAssertiveMessage,
                o = e.assertiveMessageId,
                a = e.updateFunctions;
            return Wn.createElement(bc.Provider, {
                value: a
            }, this.props.children, Wn.createElement(vc, {
                assertiveMessage: r,
                assertiveMessageId: o,
                politeMessage: t,
                politeMessageId: n
            }))
        }, t
    }(Vn.Component),
    Cc = {
        exports: {}
    },
    Ec = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
if (Ec) {
    var wc = new Uint8Array(16);
    Cc.exports = function() {
        return Ec(wc), wc
    }
} else {
    var Fc = new Array(16);
    Cc.exports = function() {
        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), Fc[t] = e >>> ((3 & t) << 3) & 255;
        return Fc
    }
}
for (var kc = Cc.exports, Sc = [], Lc = 0; Lc < 256; ++Lc) Sc[Lc] = (Lc + 256).toString(16).substr(1);
var Tc = kc,
    Pc = function(e, t) {
        var n = t || 0,
            r = Sc;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    };
const Bc = Hn((function(e, t, n) {
    var r = t && n || 0;
    "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
    var o = (e = e || {}).random || (e.rng || Tc)();
    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
        for (var a = 0; a < 16; ++a) t[r + a] = o[a];
    return t || Pc(o)
}));

function Ac(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Mc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
var Oc = function(e) {
    function t() {
        var n, r;
        Ac(this, t);
        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return n = r = Mc(this, e.call.apply(e, [this].concat(a))), r.announce = function() {
            var e = r.props,
                t = e.message,
                n = e["aria-live"],
                o = e.announceAssertive,
                a = e.announcePolite;
            "assertive" === n && o(t || "", Bc()), "polite" === n && a(t || "", Bc())
        }, Mc(r, n)
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, e), t.prototype.componentDidMount = function() {
        this.announce()
    }, t.prototype.componentDidUpdate = function(e) {
        this.props.message !== e.message && this.announce()
    }, t.prototype.componentWillUnmount = function() {
        var e = this.props,
            t = e.clearOnUnmount,
            n = e.announceAssertive,
            r = e.announcePolite;
        !0 !== t && "true" !== t || (n(""), r(""))
    }, t.prototype.render = function() {
        return null
    }, t
}(Vn.Component);
Oc.propTypes = {};
var Ic = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _c = function(e) {
        return Wn.createElement(bc.Consumer, null, (function(t) {
            return Wn.createElement(Oc, Ic({}, t, e))
        }))
    };
_c.propTypes = {};
var zc = {},
    Rc = {};
Object.defineProperty(Rc, "__esModule", {
    value: !0
}), Rc.FrameContextConsumer = Rc.FrameContextProvider = Rc.useFrame = Rc.FrameContext = void 0;
var jc, Nc = (jc = Vn) && jc.__esModule ? jc : {
    default: jc
};
var Wc = void 0,
    Vc = void 0;
"undefined" != typeof document && (Wc = document), "undefined" != typeof window && (Vc = window);
var Uc = Rc.FrameContext = Nc.default.createContext({
    document: Wc,
    window: Vc
});
Rc.useFrame = function() {
    return Nc.default.useContext(Uc)
};
var Hc = Uc.Provider,
    qc = Uc.Consumer;
Rc.FrameContextProvider = Hc, Rc.FrameContextConsumer = qc;
var Kc = {},
    Gc = {};
Object.defineProperty(Gc, "__esModule", {
    value: !0
});
var Zc = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    Yc = Vn;
Xc(Yc);
var $c = Xc(mc);

function Xc(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Jc(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Qc(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
var ed = function(e) {
    function t() {
        return Jc(this, t), Qc(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, Yc.Component), Zc(t, [{
        key: "componentDidMount",
        value: function() {
            this.props.contentDidMount()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.props.contentDidUpdate()
        }
    }, {
        key: "render",
        value: function() {
            return Yc.Children.only(this.props.children)
        }
    }]), t
}();
ed.propTypes = {
    children: $c.default.element.isRequired,
    contentDidMount: $c.default.func.isRequired,
    contentDidUpdate: $c.default.func.isRequired
}, Gc.default = ed, Object.defineProperty(Kc, "__esModule", {
    value: !0
});
var td = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    nd = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    rd = Vn,
    od = ld(rd),
    ad = ld(qn),
    id = ld(mc),
    sd = Rc,
    ud = ld(Gc);

function ld(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var cd = function(e) {
    function t(e, n) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
        return r.setRef = function(e) {
            r.node = e
        }, r.handleLoad = function() {
            r.setState({
                iframeLoaded: !0
            })
        }, r._isMounted = !1, r.state = {
            iframeLoaded: !1
        }, r
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, rd.Component), nd(t, [{
        key: "componentDidMount",
        value: function() {
            this._isMounted = !0;
            var e = this.getDoc();
            e && "complete" === e.readyState ? this.forceUpdate() : this.node.addEventListener("load", this.handleLoad)
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this._isMounted = !1, this.node.removeEventListener("load", this.handleLoad)
        }
    }, {
        key: "getDoc",
        value: function() {
            return this.node ? this.node.contentDocument : null
        }
    }, {
        key: "getMountTarget",
        value: function() {
            var e = this.getDoc();
            return this.props.mountTarget ? e.querySelector(this.props.mountTarget) : e.body.children[0]
        }
    }, {
        key: "renderFrameContents",
        value: function() {
            if (!this._isMounted) return null;
            var e = this.getDoc();
            if (!e) return null;
            var t = this.props.contentDidMount,
                n = this.props.contentDidUpdate,
                r = e.defaultView || e.parentView,
                o = od.default.createElement(ud.default, {
                    contentDidMount: t,
                    contentDidUpdate: n
                }, od.default.createElement(sd.FrameContextProvider, {
                    value: {
                        document: e,
                        window: r
                    }
                }, od.default.createElement("div", {
                    className: "frame-content"
                }, this.props.children))),
                a = this.getMountTarget();
            return [ad.default.createPortal(this.props.head, this.getDoc().head), ad.default.createPortal(o, a)]
        }
    }, {
        key: "render",
        value: function() {
            var e = td({}, this.props, {
                srcDoc: this.props.initialContent,
                children: void 0
            });
            return delete e.head, delete e.initialContent, delete e.mountTarget, delete e.contentDidMount, delete e.contentDidUpdate, od.default.createElement("iframe", td({}, e, {
                ref: this.setRef,
                onLoad: this.handleLoad
            }), this.state.iframeLoaded && this.renderFrameContents())
        }
    }]), t
}();
cd.propTypes = {
        style: id.default.object,
        head: id.default.node,
        initialContent: id.default.string,
        mountTarget: id.default.string,
        contentDidMount: id.default.func,
        contentDidUpdate: id.default.func,
        children: id.default.oneOfType([id.default.element, id.default.arrayOf(id.default.element)])
    }, cd.defaultProps = {
        style: {},
        head: null,
        children: void 0,
        mountTarget: void 0,
        contentDidMount: function() {},
        contentDidUpdate: function() {},
        initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
    }, Kc.default = cd,
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.useFrame = e.FrameContextConsumer = e.FrameContext = void 0;
        var t = Rc;
        Object.defineProperty(e, "FrameContext", {
            enumerable: !0,
            get: function() {
                return t.FrameContext
            }
        }), Object.defineProperty(e, "FrameContextConsumer", {
            enumerable: !0,
            get: function() {
                return t.FrameContextConsumer
            }
        }), Object.defineProperty(e, "useFrame", {
            enumerable: !0,
            get: function() {
                return t.useFrame
            }
        });
        var n = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(Kc);
        e.default = n.default
    }(zc);
const dd = Hn(zc);

function pd(e) {
    var t = Vn.useRef();
    return t.current || (t.current = {
        v: e()
    }), t.current.v
}
var md, fd = function(e, t) {
        "function" != typeof e ? e.current = t : e(t)
    },
    hd = function(e, t) {
        var n = Vn.useRef();
        return Vn.useCallback((function(r) {
            e.current = r, n.current && fd(n.current, null), n.current = t, t && fd(t, r)
        }), [t])
    },
    gd = function(e) {
        var t = Vn.useRef(e);
        return Vn.useEffect((function() {
            t.current = e
        })), t
    };
var Dd = function(e) {
        if ("touchstart" === e && function() {
                if (void 0 !== md) return md;
                var e = !1,
                    t = {
                        get passive() {
                            e = !0
                        }
                    },
                    n = function() {};
                return window.addEventListener("t", n, t), window.removeEventListener("t", n, t), md = e, e
            }()) return {
            passive: !0
        }
    },
    vd = document;

function bd(e, t, n) {
    var r = (void 0 === n ? {} : n).document,
        o = void 0 === r ? vd : r,
        a = gd(t),
        i = "ontouchend" in o ? "touchstart" : "mousedown";
    Vn.useEffect((function() {
        if (t) {
            var n = function(t) {
                e.current && a.current && !e.current.contains(t.target) && a.current(t)
            };
            return o.addEventListener(i, n, Dd(i)),
                function() {
                    o.removeEventListener(i, n)
                }
        }
    }), [!t])
}

function yd(e) {
    var t = Vn.useRef();
    return Vn.useEffect((function() {
        t.current = e
    })), t.current
}
var xd = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }(function(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }(2)),
    Cd = function() {
        return (Cd = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    },
    Ed = function(e, t) {
        return function(n) {
            return Math.max(Math.min(n, t), e)
        }
    },
    wd = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
    Fd = {
        test: function(e) {
            return "number" == typeof e
        },
        parse: parseFloat,
        transform: function(e) {
            return e
        }
    };
Cd({}, Fd, {
    transform: Ed(0, 1)
}), Cd({}, Fd, {
    default: 1
});
var kd, Sd = (kd = "%", {
    test: function(e) {
        return "string" == typeof e && e.endsWith(kd) && 1 === e.split(" ").length
    },
    parse: parseFloat,
    transform: function(e) {
        return "" + e + kd
    }
});
Cd({}, Sd, {
    parse: function(e) {
        return Sd.parse(e) / 100
    },
    transform: function(e) {
        return Sd.transform(100 * e)
    }
});
var Ld = Ed(0, 255),
    Td = Cd({}, Fd, {
        transform: function(e) {
            return Math.round(Ld(e))
        }
    });

function Pd(e, t) {
    return e.startsWith(t) && wd.test(e)
}
var Bd, Ad = {
    test: function(e) {
        return "string" == typeof e ? Pd(e, "rgb") : function(e) {
            return void 0 !== e.red
        }(e)
    },
    parse: (Bd = ["red", "green", "blue", "alpha"], function(e) {
        if ("string" != typeof e) return e;
        for (var t, n = {}, r = (t = e, t.substring(t.indexOf("(") + 1, t.lastIndexOf(")"))).split(/,\s*/), o = 0; o < 4; o++) n[Bd[o]] = void 0 !== r[o] ? parseFloat(r[o]) : 1;
        return n
    }),
    transform: function(e) {
        var t, n = e.red,
            r = e.green,
            o = e.blue,
            a = e.alpha;
        return function(e) {
            var t = e.red,
                n = e.green,
                r = e.blue,
                o = e.alpha;
            return "rgba(" + t + ", " + n + ", " + r + ", " + (void 0 === o ? 1 : o) + ")"
        }({
            red: Td.transform(n),
            green: Td.transform(r),
            blue: Td.transform(o),
            alpha: (t = a, t % 1 ? Number(t.toFixed(5)) : t)
        })
    }
};
Cd({}, Ad, {
    test: function(e) {
        return "string" == typeof e && Pd(e, "#")
    },
    parse: function(e) {
        var t = "",
            n = "",
            r = "";
        return e.length > 4 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), t += t, n += n, r += r), {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: 1
        }
    }
});
var Md, Od, Id = 0,
    _d = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function(e) {
        return window.requestAnimationFrame(e)
    } : function(e) {
        var t = Date.now(),
            n = Math.max(0, 16.7 - (t - Id));
        Id = t + n, setTimeout((function() {
            return e(Id)
        }), n)
    };
(Od = Md || (Md = {})).Read = "read", Od.Update = "update", Od.Render = "render", Od.PostRender = "postRender", Od.FixedUpdate = "fixedUpdate";
var zd = 1 / 60 * 1e3,
    Rd = !0,
    jd = !1,
    Nd = !1,
    Wd = {
        delta: 0,
        timestamp: 0
    },
    Vd = [Md.Read, Md.Update, Md.Render, Md.PostRender],
    Ud = function(e) {
        return jd = e
    },
    Hd = Vd.reduce((function(e, t) {
        var n = function(e) {
            var t = [],
                n = [],
                r = 0,
                o = !1,
                a = 0,
                i = new WeakSet,
                s = new WeakSet,
                u = {
                    cancel: function(e) {
                        var t = n.indexOf(e);
                        i.add(e), -1 !== t && n.splice(t, 1)
                    },
                    process: function(l) {
                        var c, d;
                        if (o = !0, t = (c = [n, t])[0], (n = c[1]).length = 0, r = t.length)
                            for (a = 0; a < r; a++)(d = t[a])(l), !0 !== s.has(d) || i.has(d) || (u.schedule(d), e(!0));
                        o = !1
                    },
                    schedule: function(e, a, u) {
                        void 0 === a && (a = !1), void 0 === u && (u = !1);
                        var l = u && o,
                            c = l ? t : n;
                        i.delete(e), a && s.add(e), -1 === c.indexOf(e) && (c.push(e), l && (r = t.length))
                    }
                };
            return u
        }(Ud);
        return e.sync[t] = function(e, t, r) {
            return void 0 === t && (t = !1), void 0 === r && (r = !1), jd || Yd(), n.schedule(e, t, r), e
        }, e.cancelSync[t] = function(e) {
            return n.cancel(e)
        }, e.steps[t] = n, e
    }), {
        steps: {},
        sync: {},
        cancelSync: {}
    }),
    qd = Hd.steps;
Hd.sync, Hd.cancelSync;
var Kd, Gd = function(e) {
        return qd[e].process(Wd)
    },
    Zd = function(e) {
        jd = !1, Wd.delta = Rd ? zd : Math.max(Math.min(e - Wd.timestamp, 40), 1), Rd || (zd = Wd.delta), Wd.timestamp = e, Nd = !0, Vd.forEach(Gd), Nd = !1, jd && (Rd = !1, _d(Zd))
    },
    Yd = function() {
        jd = !0, Rd = !0, Nd || _d(Zd)
    };

function $d() {
    if (void 0 !== Kd) return Kd;
    var e = !1,
        t = {
            get passive() {
                e = !0
            }
        },
        n = function() {};
    return window.addEventListener("t", n, t), window.removeEventListener("t", n, t), Kd = e, e
}
const Xd = {},
    Jd = (...e) => (t, n) => {
        if (0 !== t) return;
        const r = e.length;
        if (0 === r) return n(0, () => {}), void n(2);
        let o, a = 0,
            i = Xd;
        const s = (e, t) => {
            1 === e && (i = t), o(e, t)
        };
        ! function t() {
            a !== r ? e[a](0, (e, r) => {
                0 === e ? (o = r, 0 === a ? n(0, s) : i !== Xd && o(1, i)) : 2 === e && r ? n(2, r) : 2 === e ? (a++, t()) : n(e, r)
            }) : n(2)
        }()
    };

function Qd() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e, n) {
        if (0 === e) {
            var r = !1;
            for (n(0, (function(e) {
                    2 === e && (r = !0, t.length = 0)
                })); 0 !== t.length;) n(1, t.shift());
            r || n(2)
        }
    }
}
const ep = Hn(e => t => (n, r) => {
    0 === n && t(0, (t, n) => {
        r(t, 1 === t ? e(n) : n)
    })
});
var tp = Kn((function(e, t) {
        var n;
        0 === e && (o(), t(0, (function(e) {
            2 === e && cancelAnimationFrame(n)
        })));

        function r(e) {
            o(), t(1, e)
        }

        function o() {
            n = requestAnimationFrame(r)
        }
    })),
    np = Gn((function() {
        var e = Date.now();
        return ep((function() {
            return Date.now() - e
        }))(tp)
    }));

function rp(e) {
    return function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
            return Jd(e, Qd.apply(void 0, t))
        }
    }(1)((t = function(e) {
        return e <= 1
    }, function(e) {
        return function(n, r) {
            var o;
            0 === n && e(0, (function(e, n) {
                if (0 === e && (o = n), 1 === e && !t(n)) return o(2), void r(2);
                r(e, n)
            }))
        }
    })(ep((function(t) {
        return t / e
    }))(np)));
    var t
}
const op = (e, t, n) => (r, o) => {
    if (0 !== r) return;
    let a = !1;
    const i = e => {
        o(1, e)
    };
    o(0, r => {
        2 === r && (a = !0, e.removeEventListener(t, i, n))
    }), a || e.addEventListener(t, i, n)
};
const ap = {};
var ip = [],
    sp = $d() ? {
        passive: !0
    } : void 0;

function up(e, t) {
    var n = pd(ke),
        r = Vn.useRef();
    Vn.useEffect((function() {
        r.current = ["x" === e ? "scrollLeft" : "scrollTop", t.current]
    }));
    var o = Vn.useCallback((function(e, t) {
        var o = void 0 === t ? {} : t,
            a = o.duration,
            i = void 0 === a ? 300 : a,
            s = o.easing,
            u = void 0 === s ? xd : s,
            l = r.current,
            c = l[0],
            d = l[1];
        n(1, [c, d, e, i, u])
    }), ip);
    return Vn.useEffect((function() {
        return ((e = {}) => t => {
            "function" == typeof e && (e = {
                next: e
            });
            let n, {
                next: r,
                error: o,
                complete: a
            } = e;
            t(0, (e, t) => {
                0 === e && (n = t), 1 === e && r && r(t), 1 !== e && 0 !== e || n(1), 2 === e && !t && a && a(), 2 === e && t && o && o(t)
            });
            return () => {
                n && n(2)
            }
        })((function(e) {
            var t = e[0],
                n = e[1],
                r = e[2];
            t[n] = r
        }))(Zn(ep((function(e) {
            var t, n = e[0],
                r = e[1],
                o = e[2],
                a = e[3],
                i = e[4],
                s = [r, n, 0],
                u = r[n],
                l = Math.max(0, "function" == typeof a ? a(Math.abs(o - u)) : a);
            return 0 === l ? (s[2] = o, Qd(s)) : (t = function(...e) {
                return (t, n) => {
                    if (0 !== t) return;
                    const r = e.length,
                        o = new Array(r);
                    let a = 0,
                        i = 0,
                        s = !1;
                    const u = (e, t) => {
                        2 === e && (s = !0);
                        for (let n = 0; n < r; n++) o[n] && o[n](e, t)
                    };
                    for (let l = 0; l < r; l++) {
                        if (s) return;
                        e[l](0, (e, t) => {
                            if (0 === e) o[l] = t, 1 == ++a && n(0, u);
                            else if (2 === e && t) {
                                s = !0;
                                for (let e = 0; e < r; e++) e !== l && o[e] && o[e](2);
                                n(2, t)
                            } else 2 === e ? (o[l] = void 0, ++i === r && n(2)) : n(e, t)
                        })
                    }
                }
            }(op(r, "wheel", sp), op(r, "touchstart", sp)), e => (n, r) => {
                if (0 !== n) return;
                let o, a, i = !1,
                    s = ap;
                e(0, (e, n) => {
                    if (0 === e) return o = n, t(0, (e, t) => 0 === e ? (a = t, void a(1)) : 1 === e ? (s = void 0, a(2), o(2), void(i && r(2))) : void(2 === e && (a = null, s = t, null != t && (o(2), i && r(e, t))))), i = !0, r(0, (e, t) => {
                        s === ap && (2 === e && a && a(2), o(e, t))
                    }), void(s !== ap && r(2, s));
                    2 === e && a(2), s === ap && r(e, n)
                })
            })(ep((function(e) {
                var t, n, r;
                return s[2] = (t = u, n = o, -(r = i(e)) * t + r * n + t), s
            }))(rp(l)))
        }))(n)))
    }), ip), o
}
var lp = {
        exports: {}
    },
    cp = {};
/** @license React v1.1.1
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(cp, "__esModule", {
    value: !0
});
var dp = Vn,
    pp = Object.getOwnPropertySymbols,
    mp = Object.prototype.hasOwnProperty,
    fp = Object.prototype.propertyIsEnumerable,
    hp = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            var t = {};
            for (e = 0; 10 > e; e++) t["_" + String.fromCharCode(e)] = e;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                n[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (r) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        for (var n, r = Object(e), o = 1; o < arguments.length; o++) {
            var a = Object(arguments[o]);
            for (var i in a) mp.call(a, i) && (r[i] = a[i]);
            if (pp) {
                n = pp(a);
                for (var s = 0; s < n.length; s++) fp.call(a, n[s]) && (r[n[s]] = a[n[s]])
            }
        }
        return r
    };
cp.useSubscription = function(e) {
    var t = e.getCurrentValue,
        n = e.subscribe,
        r = dp.useState((function() {
            return {
                getCurrentValue: t,
                subscribe: n,
                value: t()
            }
        }));
    e = r[0];
    var o = r[1];
    return r = e.value, e.getCurrentValue === t && e.subscribe === n || (r = t(), o({
        getCurrentValue: t,
        subscribe: n,
        value: r
    })), dp.useDebugValue(r), dp.useEffect((function() {
        function e() {
            if (!r) {
                var e = t();
                o((function(r) {
                    return r.getCurrentValue !== t || r.subscribe !== n || r.value === e ? r : hp({}, r, {
                        value: e
                    })
                }))
            }
        }
        var r = !1,
            a = n(e);
        return e(),
            function() {
                r = !0, a()
            }
    }), [t, n]), r
}, lp.exports = cp;
var gp = lp.exports;
const Dp = (e, t) => {
        e.forEach(e => {
            if (e !== t.modalElement) {
                if (!t.ancestors.has(e)) {
                    const n = e.getAttribute("aria-hidden");
                    return t.originalValues.set(e, n), void e.setAttribute("aria-hidden", "true")
                }
                e.children && Dp([].slice.call(e.children), t)
            }
        })
    },
    vp = e => {
        Vn.useEffect(() => {
            if (!e) return;
            const t = e.current,
                n = t.ownerDocument || document,
                r = ((e, t) => {
                    const n = new Set;
                    let r = e;
                    for (; r = r.parentElement;) {
                        if (t.body === r) return n;
                        n.add(r)
                    }
                    return n
                })(t, n),
                o = new Map;
            return Dp([].slice.call(n.body.children), {
                ancestors: r,
                originalValues: o,
                modalElement: t
            }), () => {
                o.forEach((e, t) => {
                    null !== e ? t.setAttribute("aria-hidden", e) : t.removeAttribute("aria-hidden")
                })
            }
        }, [e])
    };

function bp(e, t, n) {
    Vn.useEffect(() => (document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)), [e, t, n])
}
const yp = (e, t) => {
    Vn.useEffect(() => {
        const n = t.current;
        if (n) {
            const t = e => {
                e.preventDefault()
            };
            return n.addEventListener(e, t, {
                passive: !1
            }), () => n.removeEventListener("touchmove", t)
        }
    }, [e, t])
};

function xp(e) {
    Vn.useEffect(e, [])
}
const Cp = (e, t) => {
        const n = Vn.useRef(!1);
        Vn.useEffect(() => {
            n.current ? e() : n.current = !0
        }, t)
    },
    Ep = {
        duration: 0
    },
    wp = $d(),
    Fp = ["End", "Home", "Space", "PageUp", "PageDown", "ArrowUp", "ArrowDown"];

function kp(e, t) {
    void 0 === t && (t = {});
    const {
        firstItemKey: n,
        lastItemKey: r,
        topThreshold: o = 20,
        bottomThreshold: a = 20,
        initialScrollTop: i,
        onIsUserScrollingChanged: s,
        onIsScrolledToTopChanged: u,
        onIsScrolledToBottomChanged: l,
        onScrollDeltaChanged: c,
        isScrollingChangedTimeout: d = 300
    } = t, p = Vn.useRef(0), m = Vn.useRef(0), f = Vn.useRef(!1), h = Vn.useRef(!1), g = Vn.useRef(!1), D = Vn.useRef(!1), v = Vn.useRef(null), b = Vn.useRef({
        timeout: 0,
        value: !1
    }), y = up("y", e), x = Vn.useCallback((function() {
        D.current = !0, y(...arguments)
    }), [y]), C = yd(n), E = yd(r), w = Vn.useCallback(() => {
        D.current = !1
    }, []), F = Vn.useCallback(() => h.current, []), k = Vn.useCallback(() => g.current, []), S = Vn.useCallback(e => x(0, e), [y]), L = Vn.useCallback(t => {
        if (e.current) {
            const {
                scrollHeight: n,
                clientHeight: r
            } = e.current;
            x(n - r, t)
        }
    }, [e, x]), T = Vn.useCallback(e => v.current = e, []), P = Vn.useCallback(() => !!e.current && e.current.scrollHeight > e.current.clientHeight, [e]), B = Vn.useCallback(() => {
        b.current.value || (b.current.value = !0, s && s(b.current.value)), clearTimeout(b.current.timeout), b.current.timeout = window.setTimeout(() => {
            b.current.value && (b.current.value = !1, s && s(b.current.value))
        }, d)
    }, [d]), A = Vn.useCallback(() => {
        const t = e.current,
            {
                scrollTop: n,
                scrollHeight: r
            } = t,
            i = p.current > n,
            s = p.current < n,
            d = p.current === n,
            v = r < m.current,
            y = r > m.current,
            x = p.current - n,
            C = r > 1.5 * window.innerHeight;
        if (p.current = n, m.current = r, P() && !D.current && B(), d && f.current) return;
        const E = h.current && i,
            w = g.current && (s || v || y),
            F = E || function(e, t) {
                return void 0 === t && (t = 0), e.scrollTop <= t
            }(t, o),
            k = w || function(e, t) {
                return void 0 === t && (t = 0), Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) <= t
            }(t, a);
        u && (!h.current && F ? u(!0) : h.current && !F && u(!1)), l && (!g.current && k ? l(!0) : g.current && !k && l(!1)), h.current = F, g.current = k, !y && !h.current && c && !g.current && f.current && b.current && wp && !D.current && C && c({
            deltaX: 0,
            deltaY: x / 2
        })
    }, [u, l, B]), M = Vn.useCallback(e => {
        De(e.key, Fp) && w()
    }, [w]), O = () => {
        x(v.current.offsetTop, Ep), v.current = null
    }, I = () => {
        v.current ? O() : (C !== n && (() => {
            const {
                scrollHeight: t
            } = e.current, n = m.current - p.current;
            x(t - n, Ep)
        })(), E !== r && g.current && L())
    };
    return bp("keydown", M), Vn.useEffect(() => {
        !1 === f.current ? (v.current ? O() : x("number" == typeof i ? i : e.current.scrollHeight, Ep), A(), f.current = !0) : I()
    }), Vn.useEffect(() => {
        if (e.current) {
            const t = e.current;
            return t.addEventListener("scroll", A, wp ? {
                passive: !0
            } : void 0), () => t.removeEventListener("scroll", A)
        }
    }, [e, A]), {
        scrollTo: x,
        scrollToTop: S,
        scrollToBottom: L,
        getIsOnTop: F,
        getIsOnBottom: k,
        getIsScrollable: P,
        setScrollTargetNode: T,
        onWheel: w,
        onTouchStart: w
    }
}
const Sp = e => pd(() => {
        let t = e;
        const n = [];
        return {
            subscribe: e => (n.push(e), () => {
                n.splice(n.indexOf(e), 1)
            }),
            next(e) {
                t = e, n.forEach(t => t(e))
            },
            get: () => t
        }
    }),
    Lp = (e, t) => {
        Vn.useEffect(() => {
            const n = setTimeout(e, t);
            return () => clearTimeout(n)
        }, [e, t])
    };

function Tp(e) {
    const [t, n] = Vn.useState(e);
    return [t, Vn.useCallback(() => {
        n(e => !e)
    }, [])]
}
const Pp = new Map,
    Bp = Vn.createContext(Pp);

function Ap(e) {
    const t = Vn.useContext(Bp);
    if (void 0 === e) return t;
    if (t.has(e)) return t.get(e);
    const n = {},
        r = {
            get: () => n.value,
            set: e => n.value = e,
            clear: () => delete n.value,
            destroy: () => t.delete(e)
        };
    return t.set(e, r), r
}
Bp.Provider;
const Mp = function(e) {
    void 0 === e && (e = !1);
    const [t, n] = Vn.useState(e), {
        focusWithinProps: r
    } = vu({
        onFocusWithin: () => {
            n(!0)
        },
        onBlurWithin: () => {
            n(!1)
        }
    });
    return [t, r]
};

function Op() {
    return (Op = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var Ip = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    _p = li((function(e) {
        return Ip.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
    })),
    zp = _p,
    Rp = function(e) {
        return "theme" !== e
    },
    jp = function(e) {
        return "string" == typeof e && e.charCodeAt(0) > 96 ? zp : Rp
    },
    Np = function(e, t, n) {
        var r;
        if (t) {
            var o = t.shouldForwardProp;
            r = e.__emotion_forwardProp && o ? function(t) {
                return e.__emotion_forwardProp(t) && o(t)
            } : o
        }
        return "function" != typeof r && n && (r = e.__emotion_forwardProp), r
    },
    Wp = function e(t, n) {
        var r, o, a = t.__emotion_real === t,
            i = a && t.__emotion_base || t;
        void 0 !== n && (r = n.label, o = n.target);
        var s = Np(t, n, a),
            u = s || jp(i),
            l = !u("as");
        return function() {
            var c = arguments,
                d = a && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
            if (void 0 !== r && d.push("label:" + r + ";"), null == c[0] || void 0 === c[0].raw) d.push.apply(d, c);
            else {
                d.push(c[0][0]);
                for (var p = c.length, m = 1; m < p; m++) d.push(c[m], c[0][m])
            }
            var f = Mi((function(e, t, n) {
                var r = l && e.as || i,
                    a = "",
                    c = [],
                    p = e;
                if (null == e.theme) {
                    for (var m in p = {}, e) p[m] = e[m];
                    p.theme = Vn.useContext(Oi)
                }
                "string" == typeof e.className ? a = Di(t.registered, c, e.className) : null != e.className && (a = e.className + " ");
                var f = Ti(d.concat(c), t.registered, p);
                vi(t, f, "string" == typeof r), a += t.key + "-" + f.name, void 0 !== o && (a += " " + o);
                var h = l && void 0 === s ? jp(r) : u,
                    g = {};
                for (var D in e) l && "as" === D || h(D) && (g[D] = e[D]);
                return g.className = a, g.ref = n, Vn.createElement(r, g)
            }));
            return f.displayName = void 0 !== r ? r : "Styled(" + ("string" == typeof i ? i : i.displayName || i.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = i, f.__emotion_styles = d, f.__emotion_forwardProp = s, Object.defineProperty(f, "toString", {
                value: function() {
                    return "." + o
                }
            }), f.withComponent = function(t, r) {
                return e(t, Op({}, n, r, {
                    shouldForwardProp: Np(f, r, !0)
                })).apply(void 0, d)
            }, f
        }
    },
    Vp = Wp.bind();
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach((function(e) {
    Vp[e] = Vp(e)
}));
const Up = e => {
        const t = {};
        if (e.flexFill && (t.flexGrow = 1, t.maxWidth = "100%"), e.flexFit && (t.flexGrow = 0), e.noShrink && (t.flexShrink = 0), e.ellipsis && (t.whiteSpace = "nowrap", t.overflow = "hidden", t.textOverflow = "ellipsis"), e.nowrap && (t.whiteSpace = "nowrap"), "isFocusVisible" in e && (t["&:focus"] = {
                outlineStyle: e.isFocusVisible ? "auto" : "none"
            }), e.preserveLines && (t.whiteSpace = "pre-line"), e.textWrap) {
            const e = "break-word";
            t.wordWrap = e, t.overflowWrap = e, t.wordBreak = e
        }
        return t
    },
    Hp = e => e.charAt(0) !== e.charAt(0).toLowerCase(),
    qp = (e, t) => Hp(t);
be.bind(null, qp);
const Kp = xr.bind(null, qp),
    Gp = {},
    Zp = e => function(e, t) {
        return tr(t).reduce((n, r) => {
            const o = e(r);
            return n[o] = n[o] || {}, n[o][r] = t[r], n
        }, {})
    }(n => Hp(n) ? "components" : t(e[n]) ? "propsDescriptions" : "themeProps", e),
    Yp = e => {
        if (!e) return Gp;
        const {
            css: t,
            vars: n,
            ...r
        } = e;
        return {
            css: t,
            vars: n,
            ...Zp(r)
        }
    },
    $p = Vn.createContext(),
    Xp = e => {
        let {
            value: t,
            children: n
        } = e;
        return Vn.createElement(zi, {
            theme: t
        }, Vn.createElement($p.Provider, {
            value: t
        }, n))
    };

function Jp() {
    return (Jp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const Qp = e => t => n => {
        const r = n[e];
        if (!r) return n;
        const {
            propsDescriptions: a,
            components: i
        } = Yp(r);
        if (!a && !i) return n;
        return function(e) {
            if (0 === e.length) return {};
            const [t, ...n] = e;
            return n.reduce((e, t) => o(e, t), t)
        }([n, i, ... function(e, t, n) {
            void 0 === n && (n = {});
            const r = xr((e, n) => t[n], n);
            return Object.keys(r).map(t => {
                const n = r[t],
                    {
                        themeProps: o,
                        components: a
                    } = Yp(n);
                if (!o) return a;
                const i = {
                    [e]: o
                };
                return a ? { ...i,
                    ...a
                } : i
            })
        }(e, t, a)].filter(Boolean))
    },
    em = e => {
        const t = e.__ui_kit_name,
            n = Qp(t);
        return Vn.forwardRef((function(t, r) {
            return Vn.createElement(Xp, {
                value: n(t)
            }, Vn.createElement(e, Jp({}, t, {
                ref: r
            })))
        }))
    },
    tm = (e, n) => {
        const r = Se(t, n);
        return 0 === Object.keys(r) ? n : Yn(se((n, r) => {
            if (!t(n)) return n;
            if (":" === r[0]) return tm(e, n);
            return n[pe(t => e[t], Object.keys(n))] || n.default
        }, n))
    },
    nm = (e, t, n) => {
        const {
            theme: r,
            style: o
        } = e, {
            css: a,
            vars: i,
            themeProps: s
        } = Yp(r[t]);
        return [i ? { ...r.vars,
            ...i
        } : r.vars, "function" == typeof n && void 0 !== s && n(s), a && tm(e, a), Up(e), "function" == typeof n && n({ ...s,
            ...e
        }), o]
    },
    rm = function(e, t) {
        void 0 === t && (t = {});
        const {
            displayName: n,
            displayType: r,
            mapPropsToStyles: o
        } = t, a = Vp(e, t);
        return function() {
            for (var e = arguments.length, i = new Array(e), s = 0; s < e; s++) i[s] = arguments[s];
            if (i.length > 0 && void 0 !== i[0].raw) {
                const e = i;
                i = [e[0][0]];
                for (let t = 1; t < e.length; t++) i.push(e[t], e[0][t])
            }
            const u = n || r || null,
                l = a(...i, e => nm(e, u, o));
            return l.__ui_kit_name = u, t.section ? Object.defineProperty(em(l), "toString", {
                value: l.toString
            }) : l
        }
    };

function om(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}
const am = !1,
    im = Wn.createContext(null);
var sm = "entering",
    um = "entered",
    lm = "exiting",
    cm = function(e) {
        function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var o, a = n && !n.isMounting ? t.enter : t.appear;
            return r.appearStatus = null, t.in ? a ? (o = "exited", r.appearStatus = "entering") : o = "entered" : o = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", r.state = {
                status: o
            }, r.nextCallback = null, r
        }
        Le(t, e), t.getDerivedStateFromProps = function(e, t) {
            return e.in && "unmounted" === t.status ? {
                status: "exited"
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
                var n = this.state.status;
                this.props.in ? "entering" !== n && "entered" !== n && (t = "entering") : "entering" !== n && "entered" !== n || (t = "exiting")
            }
            this.updateStatus(!1, t)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var e, t, n, r = this.props.timeout;
            return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                exit: e,
                enter: t,
                appear: n
            }
        }, n.updateStatus = function(e, t) {
            void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), "entering" === t ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && "exited" === this.state.status && this.setState({
                status: "unmounted"
            })
        }, n.performEnter = function(e) {
            var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [r] : [$n.findDOMNode(this), r],
                a = o[0],
                i = o[1],
                s = this.getTimeouts(),
                u = r ? s.appear : s.enter;
            !e && !n || am ? this.safeSetState({
                status: "entered"
            }, (function() {
                t.props.onEntered(a)
            })) : (this.props.onEnter(a, i), this.safeSetState({
                status: "entering"
            }, (function() {
                t.props.onEntering(a, i), t.onTransitionEnd(u, (function() {
                    t.safeSetState({
                        status: "entered"
                    }, (function() {
                        t.props.onEntered(a, i)
                    }))
                }))
            })))
        }, n.performExit = function() {
            var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : $n.findDOMNode(this);
            t && !am ? (this.props.onExit(r), this.safeSetState({
                status: "exiting"
            }, (function() {
                e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                    e.safeSetState({
                        status: "exited"
                    }, (function() {
                        e.props.onExited(r)
                    }))
                }))
            }))) : this.safeSetState({
                status: "exited"
            }, (function() {
                e.props.onExited(r)
            }))
        }, n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(e, t) {
            t = this.setNextCallback(t), this.setState(e, t)
        }, n.setNextCallback = function(e) {
            var t = this,
                n = !0;
            return this.nextCallback = function(r) {
                n && (n = !1, t.nextCallback = null, e(r))
            }, this.nextCallback.cancel = function() {
                n = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : $n.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
            if (n && !r) {
                if (this.props.addEndListener) {
                    var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                        a = o[0],
                        i = o[1];
                    this.props.addEndListener(a, i)
                }
                null != e && setTimeout(this.nextCallback, e)
            } else setTimeout(this.nextCallback, 0)
        }, n.render = function() {
            var e = this.state.status;
            if ("unmounted" === e) return null;
            var t = this.props,
                n = t.children;
            t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef;
            var r = Ws(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return Wn.createElement(im.Provider, {
                value: null
            }, "function" == typeof n ? n(e, r) : Wn.cloneElement(Wn.Children.only(n), r))
        }, t
    }(Wn.Component);

function dm() {}
cm.contextType = im, cm.propTypes = {}, cm.defaultProps = { in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: dm,
    onEntering: dm,
    onEntered: dm,
    onExit: dm,
    onExiting: dm,
    onExited: dm
}, cm.UNMOUNTED = "unmounted", cm.EXITED = "exited", cm.ENTERING = "entering", cm.ENTERED = "entered", cm.EXITING = "exiting";
var pm = function(e, t) {
        return e && t && t.split(" ").forEach((function(t) {
            return r = t, void((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = om(n.className, r) : n.setAttribute("class", om(n.className && n.className.baseVal || "", r)));
            var n, r
        }))
    },
    mm = function(e) {
        function t() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            }, t.onEnter = function(e, n) {
                var r = t.resolveArguments(e, n),
                    o = r[0],
                    a = r[1];
                t.removeClasses(o, "exit"), t.addClass(o, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
            }, t.onEntering = function(e, n) {
                var r = t.resolveArguments(e, n),
                    o = r[0],
                    a = r[1] ? "appear" : "enter";
                t.addClass(o, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
            }, t.onEntered = function(e, n) {
                var r = t.resolveArguments(e, n),
                    o = r[0],
                    a = r[1] ? "appear" : "enter";
                t.removeClasses(o, a), t.addClass(o, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
            }, t.onExit = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
            }, t.onExiting = function(e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
            }, t.onExited = function(e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
            }, t.resolveArguments = function(e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
            }, t.getClassNames = function(e) {
                var n = t.props.classNames,
                    r = "string" == typeof n,
                    o = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                return {
                    baseClassName: o,
                    activeClassName: r ? o + "-active" : n[e + "Active"],
                    doneClassName: r ? o + "-done" : n[e + "Done"]
                }
            }, t
        }
        Le(t, e);
        var n = t.prototype;
        return n.addClass = function(e, t, n) {
            var r = this.getClassNames(t)[n + "ClassName"],
                o = this.getClassNames("enter").doneClassName;
            "appear" === t && "done" === n && o && (r += " " + o), "active" === n && e && e.scrollTop, r && (this.appliedClasses[t][n] = r, function(e, t) {
                e && t && t.split(" ").forEach((function(t) {
                    return r = t, void((n = e).classList ? n.classList.add(r) : function(e, t) {
                        return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                    }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                    var n, r
                }))
            }(e, r))
        }, n.removeClasses = function(e, t) {
            var n = this.appliedClasses[t],
                r = n.base,
                o = n.active,
                a = n.done;
            this.appliedClasses[t] = {}, r && pm(e, r), o && pm(e, o), a && pm(e, a)
        }, n.render = function() {
            var e = this.props;
            e.classNames;
            var t = Ws(e, ["classNames"]);
            return Wn.createElement(cm, Fe({}, t, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }, t
    }(Wn.Component);

function fm(e, t) {
    var n = Object.create(null);
    return e && Vn.Children.map(e, (function(e) {
        return e
    })).forEach((function(e) {
        n[e.key] = function(e) {
            return t && Vn.isValidElement(e) ? t(e) : e
        }(e)
    })), n
}

function hm(e, t, n) {
    return null != n[t] ? n[t] : e.props[t]
}

function gm(e, t, n) {
    var r = fm(e.children),
        o = function(e, t) {
            function n(n) {
                return n in t ? t[n] : e[n]
            }
            e = e || {}, t = t || {};
            var r, o = Object.create(null),
                a = [];
            for (var i in e) i in t ? a.length && (o[i] = a, a = []) : a.push(i);
            var s = {};
            for (var u in t) {
                if (o[u])
                    for (r = 0; r < o[u].length; r++) {
                        var l = o[u][r];
                        s[o[u][r]] = n(l)
                    }
                s[u] = n(u)
            }
            for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
            return s
        }(t, r);
    return Object.keys(o).forEach((function(a) {
        var i = o[a];
        if (Vn.isValidElement(i)) {
            var s = a in t,
                u = a in r,
                l = t[a],
                c = Vn.isValidElement(l) && !l.props.in;
            !u || s && !c ? u || !s || c ? u && s && Vn.isValidElement(l) && (o[a] = Vn.cloneElement(i, {
                onExited: n.bind(null, i),
                in: l.props.in,
                exit: hm(i, "exit", e),
                enter: hm(i, "enter", e)
            })) : o[a] = Vn.cloneElement(i, { in: !1
            }) : o[a] = Vn.cloneElement(i, {
                onExited: n.bind(null, i),
                in: !0,
                exit: hm(i, "exit", e),
                enter: hm(i, "enter", e)
            })
        }
    })), o
}
mm.defaultProps = {
    classNames: ""
}, mm.propTypes = {};
var Dm = Object.values || function(e) {
        return Object.keys(e).map((function(t) {
            return e[t]
        }))
    },
    vm = function(e) {
        function t(t, n) {
            var r, o = (r = e.call(this, t, n) || this).handleExited.bind(Te(r));
            return r.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: o,
                firstRender: !0
            }, r
        }
        Le(t, e);
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, n.componentWillUnmount = function() {
            this.mounted = !1
        }, t.getDerivedStateFromProps = function(e, t) {
            var n, r, o = t.children,
                a = t.handleExited;
            return {
                children: t.firstRender ? (n = e, r = a, fm(n.children, (function(e) {
                    return Vn.cloneElement(e, {
                        onExited: r.bind(null, e),
                        in: !0,
                        appear: hm(e, "appear", n),
                        enter: hm(e, "enter", n),
                        exit: hm(e, "exit", n)
                    })
                }))) : gm(e, o, a),
                firstRender: !1
            }
        }, n.handleExited = function(e, t) {
            var n = fm(this.props.children);
            e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                var n = Fe({}, t.children);
                return delete n[e.key], {
                    children: n
                }
            })))
        }, n.render = function() {
            var e = this.props,
                t = e.component,
                n = e.childFactory,
                r = Ws(e, ["component", "childFactory"]),
                o = this.state.contextValue,
                a = Dm(this.state.children).map(n);
            return delete r.appear, delete r.enter, delete r.exit, null === t ? Wn.createElement(im.Provider, {
                value: o
            }, a) : Wn.createElement(im.Provider, {
                value: o
            }, Wn.createElement(t, r, a))
        }, t
    }(Wn.Component);
vm.propTypes = {}, vm.defaultProps = {
    component: "div",
    childFactory: function(e) {
        return e
    }
}, mc.bool, mc.node.isRequired, mc.func, mc.shape(), mc.bool, mc.node.isRequired, mc.func, mc.shape(), mc.node.isRequired, mc.bool, mc.shape();
const bm = rm("div", {
    mapPropsToStyles: e => {
        const t = {};
        return e.verticalAlign && ("top" === e.verticalAlign ? t.alignItems = "flex-start" : "bottom" === e.verticalAlign ? t.alignItems = "flex-end" : t.alignItems = e.verticalAlign), e.justify && (!0 === e.justify ? t.justifyContent = "space-between" : "left" === e.justify ? t.justifyContent = "flex-start" : "right" === e.justify ? t.justifyContent = "flex-end" : t.justifyContent = e.justify), e.reverse && (t.flexDirection = "row-reverse"), t
    },
    target: "e1kv8om20"
})({
    name: "14u08z3",
    styles: "display:flex;min-width:0"
});

function ym() {
    return (ym = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
mc.bool, mc.node.isRequired;
const xm = rm(bm, {
        displayName: "AgentBar",
        section: !0,
        target: "e1ftalwb0"
    })({
        name: "66u5jz",
        styles: "padding:1em"
    }),
    Cm = Vn.forwardRef((e, t) => Vn.createElement(xm, ym({
        verticalAlign: "center",
        ref: t
    }, e)));
var Em;

function wm() {
    return (wm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Cm.displayName = "AgentBar", Cm.propTypes = {
    children: mc.node
};
const Fm = e => {
        return e(Em || (t = ["\n\t&-enter {\n\t\topacity: 0;\n\t\theight: 0;\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\theight: 1.2em;\n\t\ttransition: height 200ms ease-in-out, opacity 100ms ease-in-out 100ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\theight: 1.2em;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\theight: 0;\n\t\ttransition: height 100ms ease-in-out 100ms, opacity 200ms ease-in-out;\n\t}\n"], n || (n = t.slice(0)), t.raw = n, Em = t));
        var t, n
    },
    km = e => Vn.createElement(Gi, null, t => {
        let {
            css: n
        } = t;
        return Vn.createElement(mm, wm({}, e, {
            classNames: Fm(n),
            timeout: 200
        }))
    });
var Sm;

function Lm() {
    return (Lm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
km.propTypes = {
    children: mc.node
};
const Tm = e => {
        return e(Sm || (t = ["\n\t&-enter {\n\t\topacity: 0;\n\t\ttransform: scale(1.2);\n\t}\n\n\t&-enter-active {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t\ttransition: opacity ", "ms ", ", transform ", "ms ", ";\n\t}\n\n\t&-enter-done {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n"], n || (n = t.slice(0)), t.raw = n, Sm = t), 200, "cubic-bezier(0.14, 0, 0, 1)", 200, "cubic-bezier(0.14, 0, 0, 1)");
        var t, n
    },
    Pm = e => Vn.createElement(Gi, null, t => {
        let {
            css: n
        } = t;
        return Vn.createElement(mm, Lm({}, e, {
            classNames: Tm(n),
            timeout: 500
        }))
    });
var Bm;
var Am, Mm;
const Om = Ui("animation:1.5s ease-in-out 0s infinite;animation-name:", Hi(Bm || (Am = ["\n\t0% {\n\t\topacity: 1.0;\n\t}\n\n\t50% {\n\t\topacity: 0.4;\n\t}\n\n\t100% {\n\t\topacity: 1.0;\n\t}\n"], Mm || (Mm = Am.slice(0)), Am.raw = Mm, Bm = Am)), ";"),
    Im = rm("div", {
        displayName: "ImgOverlay",
        target: "elhjse0"
    })("width:100vw;max-width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surfaceDecorative
    }, ";&>svg{width:32px;height:32px;fill:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";}"),
    _m = e => Wi(Im, e, Wi("svg", {
        viewBox: "0 0 32 32",
        css: Om
    }, Wi("path", {
        d: "M6.1,22.1l5.3-4.8c0.4-0.3,1-0.3,1.3,0l3.2,2.8l6.5-5.8c0.4-0.3,1-0.3,1.3,0l2.3,2.1V9c0-0.6-0.4-1-1-1h-18 c-0.6,0-1,0.4-1,1L6.1,22.1C6.1,22,6.1,22,6.1,22.1z M8,23h8.1l-4.1-3.7L8,23z M19.1,23h5.9c0.6,0,1-0.4,1-1v-3l-3-2.7l-5.7,5.1 L19.1,23z M7.1,6h18c1.7,0,3,1.3,3,3v13c0,1.7-1.3,3-3,3h-18c-1.7,0-3-1.3-3-3V9C4.1,7.3,5.4,6,7.1,6z M15.1,16c-1.7,0-3-1.3-3-3 s1.3-3,3-3s3,1.3,3,3S16.8,16,15.1,16z M15.1,14c0.6,0,1-0.4,1-1s-0.4-1-1-1c-0.6,0-1,0.4-1,1S14.5,14,15.1,14z"
    }))),
    zm = e => Wi(Im, e, Wi("svg", {
        viewBox: "0 0 32 32"
    }, Wi("path", {
        d: "M3.6,5.1L3.6,5.1l24.1,21.1c0.4,0.4,0.5,1,0.1,1.4c-0.3,0.4-0.9,0.4-1.3,0.2l-0.1-0.1l-8.1-7.1l-2,1.8  l1.7,1.5h4l2.3,2l-0.1,0L24,26H6c-1.6,0-2.9-1.2-3-2.8L3,23L3,7.3L2.3,6.7c-0.4-0.4-0.5-1-0.1-1.4C2.6,4.9,3.1,4.9,3.6,5.1z   M11,20.3L6.9,24h8.1L11,20.3z M26,5c1.6,0,2.9,1.2,3,2.8L29,8v15.4l0,0l-2-1.7l0-3.7l-3-2.7l-2.2,2L20.3,16l3.1-2.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l2.3,2.1V8c0-0.5-0.4-0.9-0.9-1L26,7H10L7.7,5l0.1,0L8,5H26z M5,9.1l0,14l5.3-4.8  c0.3-0.3,0.9-0.3,1.2-0.1l0.1,0.1l3.2,2.8l1.9-1.7L5,9.1z M20,8c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S18.3,8,20,8z M20,10  c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,10,20,10z"
    })));

function Rm() {
    return (Rm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const jm = rm("img", {
        displayName: "Img",
        target: "e174eclu0"
    })("display:", e => {
        let {
            isLoaded: t
        } = e;
        return t ? "inline-block" : "none"
    }, ";"),
    Nm = e => {
        let {
            children: t,
            src: n,
            srcSet: r,
            className: o,
            alt: a = "",
            ...i
        } = e;
        const [s, u] = Vn.useState("pending"), [l, c] = Vn.useState(!1), d = Vn.useRef(0), p = "loaded" === s;
        let m = null;
        if (t) m = t({
            imageStatus: s,
            shouldAnimate: l
        });
        else switch (s) {
            case "pending":
                m = Vn.createElement(_m, i);
                break;
            case "failed":
                m = Vn.createElement(zm, i);
                break;
            default:
                m = null
        }
        return Vn.useLayoutEffect(() => (u("pending"), c(!1), d.current = setTimeout(() => c(!0), 400), () => clearTimeout(d.current)), [n, r]), Vn.createElement(Vn.Fragment, null, Vn.createElement(Pm, { in: l && p
        }, Vn.createElement(jm, Rm({
            alt: a
        }, i, {
            src: n,
            isLoaded: p,
            srcSet: r,
            className: o,
            onLoad: () => {
                u("loaded"), clearTimeout(d.current)
            },
            onError: () => u("failed")
        }))), m)
    };

function Wm(e, t) {
    if ("undefined" != typeof Intl && Intl.Segmenter) try {
        const n = function(e) {
            if (null != e) return "string" == typeof e ? e : Array.isArray(e) ? e.map(e => "string" == typeof e ? e : String(e)) : String(e)
        }(e);
        return new Intl.Segmenter(n, t)
    } catch {
        return null
    }
    return null
}
Nm.propTypes = {
    children: mc.func,
    src: mc.string.isRequired,
    srcSet: mc.string,
    className: mc.string
};
const Vm = ["#8133cc", "#d75b74", "#328dff", "#23958d", "#9146ff", "#e66427", "#3376db", "#a372ff", "#c29b00", "#9e4eaa", "#779e47", "#d0810b", "#c474ac", "#7070aa"];

function Um(e, t) {
    void 0 === e && (e = "");
    const n = e.trim();
    if (!/[\p{L}\p{Emoji_Presentation}\p{Extended_Pictographic}]/u.test(n)) {
        const e = n.match(/\d/g);
        return e ? e[0].toUpperCase() : ""
    }
    const r = n.split(/\s+/),
        o = /[\p{L}\p{Emoji_Presentation}\p{Extended_Pictographic}]/u,
        a = r.filter(e => o.test(e)),
        i = a.map(e => {
            const t = function(e, t) {
                const {
                    locale: n,
                    granularity: r = "word"
                } = null != t ? t : {}, o = Wm(n, {
                    granularity: r
                });
                if (o) try {
                    return Array.from(o.segment(e), e => e.segment)
                } catch {}
                return Array.from(e)
            }(e, {
                granularity: "grapheme"
            }).find(e => o.test(e));
            return null != t ? t : ""
        });
    if (a.length <= t) return i.join("").toUpperCase();
    const s = [i[0]];
    for (let u = a.length - t + 1; u < a.length; u++) s.push(i[u]);
    return s.join("").toUpperCase()
}

function Hm() {
    return (Hm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const qm = Wp("div", {
    displayName: "InitialsWrapper",
    target: "e19r4350"
})("width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-radius:50%;color:", e => {
    let {
        theme: t
    } = e;
    return t.colors.surface
}, ";background-color:", e => {
    let {
        background: t
    } = e;
    return t
}, ";font-weight:700;font-size:", e => {
    let {
        fontSize: t
    } = e;
    return null != t ? t : "16px"
}, ";color:", e => {
    let {
        background: t
    } = e;
    return function(e, t, n) {
        return Pe(e, n) > Pe(t, n) ? e : t
    }(Ae.primaryTextColor, Be.primaryTextColor, t)
}, ";");

function Km(e) {
    let {
        text: t,
        ...n
    } = e;
    const r = Wn.useMemo(() => Um(t, 1), [t]),
        o = Wn.useMemo(() => function(e) {
            if (!e) return;
            const t = e.split("").reduce((e, t) => e + t.charCodeAt(0), 0);
            return Vm[t % Vm.length]
        }(t), [t]);
    return Wn.createElement(qm, Hm({
        background: o
    }, n), Wn.createElement("span", {
        "aria-hidden": !0
    }, r))
}
var Gm;

function Zm() {
    return (Zm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Km.propTypes = {
    style: mc.shape(),
    text: mc.string,
    css: mc.oneOfType([mc.array, mc.object, mc.string]),
    fontSize: mc.string
};
const Ym = {
        name: "n7acn9",
        styles: "border-radius:inherit;width:100%;height:100%;object-fit:cover"
    },
    $m = rm("div", {
        displayName: "Avatar",
        mapPropsToStyles: e => {
            const t = {},
                n = {},
                {
                    size: r,
                    borderRadius: o = "50%",
                    fontSize: a
                } = e;
            return r && (t.width = r, t.height = r, t.lineHeight = r), o && (t.borderRadius = o, n.borderRadius = o), a && (t.fontSize = a), { ...t,
                "& img": n
            }
        },
        target: "eovd9vs1"
    })("text-align:center;text-transform:uppercase;overflow:hidden;", e => e.withBackground ? "background-color: #fff;" : "", ";"),
    Xm = Hi(Gm || (Gm = function(e, t) {
        return t || (t = e.slice(0)), e.raw = t, e
    }(["\n\t50% {\n\t\topacity: 0.0;\n\t}\n"]))),
    Jm = rm("span", {
        target: "eovd9vs0"
    })("display:block;height:100%;width:100%;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.grayscale[50]
    }, ";opacity:0.3;animation:", Xm, " 1.5s linear 0s infinite;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";margin-bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, ";"),
    Qm = e => {
        const {
            imgUrl: t,
            imgAlt: n = "avatar",
            text: r,
            fontSize: o,
            imgProps: a = {}
        } = e;
        let i = null;
        return i = t ? Wi(Nm, Zm({}, a, {
            src: t,
            css: Ym,
            alt: n,
            draggable: !1
        }), e => {
            let {
                imageStatus: t,
                shouldAnimate: n
            } = e;
            return "pending" === t && n ? Wi(Jm, null) : "failed" === t ? Wi(Km, {
                css: Ym,
                text: r,
                fontSize: o
            }) : null
        }) : r ? Wi(Km, {
            css: Ym,
            text: r,
            fontSize: o
        }) : Wi(Jm, null), Wi($m, e, i)
    };
Qm.propTypes = {
    imgProps: mc.shape(),
    imgUrl: mc.string,
    imgAlt: mc.string,
    text: mc.string,
    size: mc.string,
    style: mc.shape(),
    fontSize: mc.string,
    borderRadius: mc.string
};
const ef = {
        name: "1oep8ze",
        styles: "&>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:0;border-bottom-left-radius:0;}&>:last-child{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}&>:first-child:last-child{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:inherit;}"
    },
    tf = rm("div", {
        displayName: "Bubble",
        mapPropsToStyles: e => {
            const {
                isOwn: t,
                ovalBorderRadius: n,
                sharpBorderRadius: r,
                radiusType: o
            } = e, a = {
                borderTopLeftRadius: "single" === o || "first" === o ? n : r,
                borderTopRightRadius: n,
                borderBottomRightRadius: n,
                borderBottomLeftRadius: "single" === o || "last" === o ? n : r
            };
            return t ? (e => {
                let {
                    borderTopLeftRadius: t,
                    borderTopRightRadius: n,
                    borderBottomRightRadius: r,
                    borderBottomLeftRadius: o
                } = e;
                return {
                    borderTopLeftRadius: n,
                    borderTopRightRadius: t,
                    borderBottomRightRadius: o,
                    borderBottomLeftRadius: r
                }
            })(a) : a
        },
        target: "ed33afz0"
    })(ef, ";border:1px solid rgba(0, 0, 0, 0.05);display:inline-block;max-width:280px;margin-bottom:0.1em;& img{max-width:100%;display:block;}");
tf.propTypes = {
    children: mc.node,
    isOwn: mc.bool,
    radiusType: mc.oneOf(["single", "first", "last"])
};
const nf = rm("div", {
    target: "e131382t0"
})({
    name: "1ojnsow",
    styles: "display:flex;flex-direction:column;min-width:0"
});

function rf() {
    return (rf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const of = rm("div", {
    mapPropsToStyles: e => ({
        flexShrink: e.shrink ? 1 : 0
    }),
    target: "e1nodz7b0"
})(""), af = e => Vn.createElement( of , rf({
    flexFill: !0
}, e));

function sf() {
    return (sf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
af.defaultProps = {
    shrink: !0
}, af.propTypes = {
    shrink: mc.bool
};
const uf = rm("button", {
        displayName: "IconButton",
        section: !0,
        target: "ejbfa1m0"
    })({
        name: "1dor5y1",
        styles: "appearance:none;background:transparent;border:0;display:inline-block;margin:0;padding:0.5em;color:inherit;cursor:pointer;&:disabled{cursor:not-allowed;}"
    }),
    lf = Vn.forwardRef((function(e, t) {
        const n = gu(e);
        return Vn.createElement(uf, sf({
            ref: t
        }, n, e))
    }));
var cf;

function df() {
    return (df = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
lf.propTypes = {
    active: mc.bool,
    disabled: mc.bool,
    children: mc.node.isRequired,
    color: mc.string,
    onClick: mc.func
}, mc.string.isRequired;
const pf = e => e(cf || (cf = function(e, t) {
        return t || (t = e.slice(0)), e.raw = t, e
    }(["\n\t&-enter {\n\t\topacity: 0;\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\ttransition: opacity 100ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransition: opacity 100ms;\n\t}\n"]))),
    mf = e => Vn.createElement(Gi, null, t => {
        let {
            css: n
        } = t;
        return Vn.createElement(mm, df({}, e, {
            classNames: pf(n),
            timeout: 100
        }))
    });
mf.propTypes = {
    children: mc.node
};
const ff = e => e.getBoundingClientRect().top + window.pageYOffset;

function hf() {
    return (hf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const gf = 20,
    {
        Provider: Df,
        Consumer: vf
    } = Vn.createContext({
        registerUnseenListItem: Un,
        isScrollOnBottom: Un,
        scrollToBottom: Un
    }),
    bf = function(e) {
        void 0 === e && (e = 0);
        let t = e;
        return () => t++
    }(),
    yf = rm("div", {
        displayName: "MessageList",
        target: "eyglfwq0"
    })("padding:", 20, "px;overflow-y:auto;height:100%;outline-offset:-5px;"),
    xf = Vn.forwardRef((function(e, t) {
        let {
            active: n = !0,
            onScroll: r,
            preList: o = null,
            postList: a = null,
            gridRef: i,
            children: s,
            ...u
        } = e;
        const l = Vn.useRef(),
            c = hd(l, t),
            {
                getAll: d,
                registerItem: p
            } = (() => {
                const e = Vn.useRef([]);
                return {
                    getAll: () => e.current,
                    registerItem: Vn.useCallback(t => {
                        const n = bf(),
                            r = e.current;
                        return r.push({ ...t,
                            id: n
                        }), () => {
                            const e = V(e => {
                                let {
                                    id: t
                                } = e;
                                return t === n
                            }, r); - 1 !== e && r.splice(e, 1)
                        }
                    }, [])
                }
            })(),
            m = gd(n),
            f = gd(r),
            h = gu(),
            g = Vn.useCallback(() => {
                d().forEach(e => {
                    var t, n;
                    (t = l.current, n = e.ref, ff(n) - ff(t) + n.clientHeight <= t.clientHeight) && e.onSeen()
                })
            }, [d]),
            D = Vn.useMemo(() => Me(300, () => {
                m.current && g()
            }), [m, g]),
            v = Vn.useCallback(e => {
                D(), f.current && f.current(e)
            }, [f, D]);
        Vn.useEffect(() => {
            n && g()
        }, [n, g]);
        const b = Vn.useMemo(() => ({
            registerUnseenListItem: p,
            isScrollOnBottom: () => {
                return e = l.current, t = 20, e.scrollTop + e.clientHeight - e.scrollHeight >= -t;
                var e, t
            },
            scrollToBottom: () => {
                var e;
                (e = l.current).scrollTop = e.scrollHeight
            }
        }), [p]);
        return Vn.createElement(Df, {
            value: b
        }, Vn.createElement(yf, hf({}, h, u, {
            ref: c,
            onScroll: v
        }), o, Vn.createElement("div", {
            role: "grid",
            "aria-live": "polite",
            "aria-relevant": "additions",
            ref: i
        }, s), a))
    }));
class Cf extends Vn.Component {
    constructor() {
        super(...arguments), this._unregisterFromMessageList = Un, this._registerInMessageList = function(e) {
            let t, n, r = !1;
            return function() {
                return r && (arguments.length <= 0 ? void 0 : arguments[0]) === n || (r = !0, n = arguments.length <= 0 ? void 0 : arguments[0], t = e(...arguments)), t
            }
        }(e => t => {
            this._unregisterFromMessageList(), t && (this._unregisterFromMessageList = e({
                ref: t,
                onSeen: this.props.onSeen
            }))
        })
    }
    componentWillUnmount() {
        this._unregisterFromMessageList()
    }
    render() {
        return Vn.createElement(vf, null, e => {
            let {
                registerUnseenListItem: t
            } = e;
            return Vn.createElement("div", {
                ref: this.props.seen ? null : this._registerInMessageList(t),
                role: "row"
            }, Vn.Children.only(this.props.children))
        })
    }
}

function Ef() {
    return (Ef = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Cf.propTypes = {
    children: mc.node.isRequired,
    onSeen: mc.func
}, Cf.defaultProps = {
    onSeen: Un
};
const wf = rm("div", {
        displayName: "Message",
        mapPropsToStyles: e => {
            let {
                horizontalAlign: t,
                increasedAvatarPadding: n,
                ...r
            } = e;
            return { ...t && {
                    flexDirection: "left" === t ? "row" : "row-reverse"
                },
                ...n && "smooth" === r.theme.name && {
                    paddingLeft: "calc(" + r.theme.Avatar.size + " + 0.2em)"
                }
            }
        },
        section: !0,
        target: "e10kpz9x6"
    })({
        name: "1rjamkv",
        styles: "align-items:flex-start;font-size:0.9em;margin-bottom:0.3em;margin-top:0;max-width:100%;line-height:1.25em"
    }),
    Ff = rm("span", {
        displayName: "AuthorName",
        target: "e10kpz9x5"
    })({
        name: "1rawn5e",
        styles: "font-size:0.8em"
    }),
    kf = rm("span", {
        displayName: "Time",
        target: "e10kpz9x4"
    })({
        name: "1rawn5e",
        styles: "font-size:0.8em"
    }),
    Sf = rm("div", {
        displayName: "MessageMeta",
        target: "e10kpz9x3"
    })({
        name: "v86cdg",
        styles: "text-align:left;margin-bottom:0.1em"
    }),
    Lf = rm("div", {
        displayName: "NewMessageMeta",
        target: "e10kpz9x2"
    })("max-width:280px;display:flex;align-items:center;padding:2px;border:1px solid ", e => {
        let {
            theme: t
        } = e;
        return t.colors.divider
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.md
    }, ";position:relative;bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space4
    }, ";right:", e => {
        let {
            isOwn: t
        } = e;
        return t ? "-" : ""
    }, e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, ";z-index:1;"),
    Tf = rm("div", {
        displayName: "Content",
        target: "e10kpz9x1"
    })({
        name: "65ztgt",
        styles: "display:flex;flex-direction:column;overflow:visible;align-items:flex-start"
    }),
    Pf = rm("div", {
        displayName: "Status",
        target: "e10kpz9x0"
    })({
        name: "5m4wg",
        styles: "text-align:right;font-size:0.8em"
    }),
    Bf = {
        name: "oldbq4",
        styles: "user-select:none"
    };
var Af = {
    name: "a4hmbt",
    styles: "position:absolute"
};
const Mf = Vn.forwardRef((function(e, t) {
    let {
        children: n,
        authorName: r,
        deliveryStatus: o = "",
        isOwn: a,
        date: i,
        messageMetadataPosition: s,
        onSeen: u,
        seen: l,
        enforceDeliveryStatusDisplay: c,
        onClick: d = Un,
        onKeyUp: p = Un,
        isSelected: m,
        isFirstInGroup: f,
        ...h
    } = e;
    const g = gu(),
        [D, v] = Tp(!1);
    return Wi(Cf, {
        onSeen: u,
        seen: l
    }, Wi(wf, Ef({
        ref: t
    }, h, {
        onKeyUp: e => {
            p(e), "above" !== s || "Enter" !== e.key && " " !== e.key || v()
        },
        onClick: e => {
            d(e), "above" === s && v()
        },
        own: a,
        tabIndex: null
    }), Wi(Tf, Ef({
        role: "gridcell"
    }, g), "above" === s ? Wi(vm, null, (f || D) && Wi(km, null, Wi(Sf, null, r && Wi(Ff, null, r, " "), i && Wi(kf, null, i)))) : Wi(vm, {
        css: Af
    }, m && Wi(mf, null, Wi(Lf, {
        isOwn: a
    }, !a && r && Wi(Ff, {
        ellipsis: !0
    }, r, " "), i && Wi(kf, null, i)))), n, o ? Wi(Pf, null, o) : c ? Wi(Pf, {
        css: Bf
    }, " ") : null)))
}));
Mf.propTypes = {
    authorName: mc.oneOfType([mc.string, mc.node]),
    authorOpen: mc.bool,
    children: mc.node,
    date: mc.string,
    deliveryStatus: mc.string,
    enforceDeliveryStatusDisplay: mc.bool,
    isOwn: mc.bool,
    onClick: mc.func,
    onSeen: mc.func,
    style: mc.shape(),
    messageMetadataPosition: mc.oneOf(["above", "within"]),
    seen: mc.bool,
    isFirstInGroup: mc.bool
}, Mf.defaultProps = {
    onClick: Un,
    seen: !1
};
const Of = rm("div", {
    displayName: "SubTitle",
    target: "ex074sh0"
})("");
Of.defaultProps = {
    textWrap: !0
};
const If = rm("div", {
    displayName: "Title",
    target: "e2ydd6j0"
})({
    name: "mmvz9h",
    styles: "font-weight:400"
});
If.defaultProps = {
    textWrap: !0
}, Xn(console.warn.bind(console));
const _f = rm("div", {
        displayName: "MessageTitle",
        target: "elx7a8b0"
    })({
        name: "1kj42yy",
        styles: "font-weight:600;padding:1em"
    }),
    zf = {
        name: "11rcwxl",
        styles: "margin-bottom:4px"
    },
    Rf = e => {
        let {
            children: t,
            title: n,
            subtitle: r,
            ...o
        } = e;
        const a = t || [n && Wi(If, {
            key: "title",
            preserveLines: !0,
            css: zf
        }, n), r && Wi(Of, {
            key: "subtitle",
            preserveLines: !0
        }, r)];
        return Wi(_f, o, a)
    };
Rf.propTypes = {
    children: mc.oneOfType([mc.arrayOf(mc.node), mc.node]),
    subtitle: mc.string,
    title: mc.string
};
const jf = rm("div", {
        displayName: "MessageText",
        target: "e12hl5pq0"
    })({
        name: "xao44",
        styles: "white-space:pre-line;word-wrap:break-word;overflow-wrap:anywhere;max-width:100%;padding:12px 18px 14px"
    }),
    Nf = "1px solid rgba(0, 0, 0, 0.1)",
    Wf = rm("div", {
        displayName: "MessageButtons",
        target: "esivob70"
    })(ef, ";&>:first-child{border-top:", Nf, ";}&:first-child>:first-child{border-top:0;}&>:last-child{border-bottom:", Nf, ";}&:last-child>:last-child{border-bottom:0;}>*{border-color:", "rgba(0, 0, 0, 0.1)", "!important;}");

function Vf(e) {
    if ("virtual" === hu()) {
        let t = document.activeElement;
        Ms(() => {
            document.activeElement === t && document.contains(e) && Ls(e)
        })
    } else Ls(e)
}
const Uf = Wn.createContext(null);
let Hf = null,
    qf = new Set;

function Kf(e) {
    let {
        children: t,
        contain: n,
        restoreFocus: r,
        autoFocus: o
    } = e, a = Vn.useRef(), i = Vn.useRef(), s = Vn.useRef([]);
    const {
        document: u
    } = vs();
    fs(() => {
            let e = a.current.nextSibling,
                t = [];
            for (; e && e !== i.current;) t.push(e), e = e.nextSibling;
            return s.current = t, qf.add(s), () => {
                qf.delete(s)
            }
        }, [t]),
        function(e, t) {
            let n = Vn.useRef(),
                r = Vn.useRef(null);
            const {
                document: o
            } = vs();
            Vn.useEffect(() => {
                let a = e.current;
                if (!t) return;
                let i = e => {
                        if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey) return;
                        let t = o.activeElement;
                        if (!Jf(t, a)) return;
                        let n = th($f(a), {
                            tabbable: !0
                        }, a, o);
                        n.currentNode = t;
                        let r = e.shiftKey ? n.previousNode() : n.nextNode();
                        r || (n.currentNode = e.shiftKey ? a[a.length - 1].nextElementSibling : a[0].previousElementSibling, r = e.shiftKey ? n.previousNode() : n.nextNode()), e.preventDefault(), r && Qf(r, !0)
                    },
                    s = t => {
                        Xf(t.target, qf) ? (Hf = e, n.current = t.target) : n.current ? n.current.focus() : Hf && eh(Hf.current)
                    },
                    u = t => {
                        r.current = requestAnimationFrame(() => {
                            Xf(o.activeElement, qf) || (Hf = e, n.current = t.target, n.current.focus())
                        })
                    };
                return o.addEventListener("keydown", i, !1), o.addEventListener("focusin", s, !1), a.forEach(e => e.addEventListener("focusin", s, !1)), a.forEach(e => e.addEventListener("focusout", u, !1)), () => {
                    o.removeEventListener("keydown", i, !1), o.removeEventListener("focusin", s, !1), a.forEach(e => e.removeEventListener("focusin", s, !1)), a.forEach(e => e.removeEventListener("focusout", u, !1))
                }
            }, [e, t]), Vn.useEffect(() => () => cancelAnimationFrame(r.current), [r])
        }(s, n),
        function(e, t, n) {
            const {
                document: r
            } = vs();
            fs(() => {
                let o = e.current,
                    a = r.activeElement,
                    i = e => {
                        if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey) return;
                        let t = r.activeElement;
                        if (!Jf(t, o)) return;
                        let n = th(r.body, {
                            tabbable: !0
                        }, void 0, r);
                        n.currentNode = t;
                        let i = e.shiftKey ? n.previousNode() : n.nextNode();
                        if (r.body.contains(a) && a !== r.body || (a = null), (!i || !Jf(i, o)) && a) {
                            n.currentNode = a;
                            do {
                                i = e.shiftKey ? n.previousNode() : n.nextNode()
                            } while (Jf(i, o));
                            e.preventDefault(), e.stopPropagation(), i ? Qf(i, !0) : t.blur()
                        }
                    };
                return n || r.addEventListener("keydown", i, !0), () => {
                    n || r.removeEventListener("keydown", i, !0), t && a && Jf(r.activeElement, o) && requestAnimationFrame(() => {
                        r.body.contains(a) && Qf(a)
                    })
                }
            }, [e, t, n])
        }(s, r, n),
        function(e, t) {
            const {
                document: n
            } = vs();
            Vn.useEffect(() => {
                t && (Hf = e, Jf(n.activeElement, Hf.current) || eh(e.current, n))
            }, [e, t])
        }(s, o);
    let l = function(e, t = document) {
        const n = t;
        return {
            focusNext(t) {
                void 0 === t && (t = {});
                let r = e.current,
                    {
                        from: o,
                        tabbable: a,
                        wrap: i
                    } = t,
                    s = o || n.activeElement,
                    u = r[0].previousElementSibling,
                    l = th($f(r), {
                        tabbable: a
                    }, r, n);
                l.currentNode = Jf(s, r) ? s : u;
                let c = l.nextNode();
                return !c && i && (l.currentNode = u, c = l.nextNode()), c && Qf(c, !0), c
            },
            focusPrevious(t) {
                void 0 === t && (t = {});
                let r = e.current,
                    {
                        from: o,
                        tabbable: a,
                        wrap: i
                    } = t,
                    s = o || n.activeElement,
                    u = r[r.length - 1].nextElementSibling,
                    l = th($f(r), {
                        tabbable: a
                    }, r, n);
                l.currentNode = Jf(s, r) ? s : u;
                let c = l.previousNode();
                return !c && i && (l.currentNode = u, c = l.previousNode()), c && Qf(c, !0), c
            }
        }
    }(s, u);
    return Wn.createElement(Uf.Provider, {
        value: l
    }, Wn.createElement("span", {
        hidden: !0,
        ref: a
    }), t, Wn.createElement("span", {
        hidden: !0,
        ref: i
    }))
}
const Gf = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
    Zf = Gf.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Gf.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Yf = Gf.join(':not([hidden]):not([tabindex="-1"]),');

function $f(e) {
    return e[0].parentElement
}

function Xf(e, t) {
    for (let n of t.values())
        if (Jf(e, n.current)) return !0;
    return !1
}

function Jf(e, t) {
    return t.some(t => t.contains(e))
}

function Qf(e, t) {
    if (void 0 === t && (t = !1), null == e || t) {
        if (null != e) try {
            e.focus()
        } catch (n) {}
    } else try {
        Vf(e)
    } catch (n) {}
}

function eh(e, t = document) {
    let n = e[0].previousElementSibling,
        r = th($f(e), {
            tabbable: !0
        }, e, t);
    r.currentNode = n, Qf(r.nextNode())
}

function th(e, t, n, r = document) {
    const o = r;
    let a = null != t && t.tabbable ? Yf : Zf,
        i = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var r;
                return null != t && null != (r = t.from) && r.contains(e) ? NodeFilter.FILTER_REJECT : e.matches(a) && function e(t, n) {
                    return "#comment" !== t.nodeName && function(e) {
                        if (!(e instanceof e.ownerDocument.defaultView.HTMLElement || e instanceof e.ownerDocument.defaultView.SVGElement)) return !1;
                        let {
                            display: t,
                            visibility: n
                        } = e.style, r = "none" !== t && "hidden" !== n && "collapse" !== n;
                        if (r) {
                            const {
                                getComputedStyle: t
                            } = e.ownerDocument.defaultView;
                            let {
                                display: n,
                                visibility: o
                            } = t(e);
                            r = "none" !== n && "hidden" !== o && "collapse" !== o
                        }
                        return r
                    }(t) && function(e, t) {
                        return !e.hasAttribute("hidden") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
                    }(t, n) && (!t.parentElement || e(t.parentElement, t))
                }(e) && (!n || Jf(e, n)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    return null != t && t.from && (i.currentNode = t.from), i
}

function nh(e) {
    void 0 === e && (e = {});
    let {
        autoFocus: t = !1,
        isTextInput: n,
        within: r
    } = e, o = Vn.useRef({
        isFocused: !1,
        isFocusVisible: t || fu()
    }).current, [a, i] = Vn.useState(() => o.isFocused && o.isFocusVisible), s = () => i(o.isFocused && o.isFocusVisible), u = e => {
        o.isFocused = e, s()
    };
    Du(e => {
        o.isFocusVisible = e, s()
    }, [], {
        isTextInput: n
    });
    let {
        focusProps: l
    } = nu({
        isDisabled: r,
        onFocusChange: u
    }), {
        focusWithinProps: c
    } = vu({
        isDisabled: !r,
        onFocusWithinChange: u
    });
    return {
        isFocused: o.isFocused,
        isFocusVisible: o.isFocused && a,
        focusProps: r ? c : l
    }
}
let rh = Wn.createContext(null);

function oh(e, t) {
    let {
        children: n
    } = e, r = Ws(e, ["children"]), o = Fe({}, r, {
        ref: t
    });
    return Wn.createElement(rh.Provider, {
        value: o
    }, n)
}
let ah = Wn.forwardRef(oh);

function ih(e, t) {
    let {
        focusProps: n
    } = nu(e), {
        keyboardProps: r
    } = function(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: Fu(e.onKeyDown),
                onKeyUp: Fu(e.onKeyUp)
            }
        }
    }(e), o = Es(n, r), a = function(e) {
        let t = Vn.useContext(rh) || {};
        return Is(t, e), t
    }(t), i = e.isDisabled ? {} : a;
    return Vn.useEffect(() => {
        e.autoFocus && t.current && t.current.focus()
    }, [e.autoFocus, t]), {
        focusableProps: Es(Fe({}, o, {
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
        }), i)
    }
}

function sh(e, t) {
    let n, {
        elementType: r = "button",
        isDisabled: o,
        onPress: a,
        onPressStart: i,
        onPressEnd: s,
        onPressChange: u,
        preventFocusOnPress: l,
        onClick: c,
        href: d,
        target: p,
        rel: m,
        type: f = "button"
    } = e;
    n = "button" === r ? {
        type: f,
        disabled: o
    } : {
        role: "button",
        tabIndex: o ? void 0 : 0,
        href: "a" === r && o ? void 0 : d,
        target: "a" === r ? p : void 0,
        type: "input" === r ? f : void 0,
        disabled: "input" === r ? o : void 0,
        "aria-disabled": o && "input" !== r ? o : void 0,
        rel: "a" === r ? m : void 0
    };
    let {
        pressProps: h,
        isPressed: g
    } = Zs({
        onPressStart: i,
        onPressEnd: s,
        onPressChange: u,
        onPress: a,
        isDisabled: o,
        preventFocusOnPress: l,
        ref: t
    }), {
        focusableProps: D
    } = ih(e, t), v = Es(D, h);
    return v = Es(v, Ss(e, {
        labelable: !0
    })), {
        isPressed: g,
        buttonProps: Es(n, v, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: e => {
                c && (c(e), console.warn("onClick is deprecated, please use onPress"))
            }
        })
    }
}

function uh() {
    return (uh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const lh = Oe(.2),
    ch = rm(Vn.forwardRef((function(e, t) {
        let {
            href: n,
            ...r
        } = e;
        return n ? Vn.createElement("a", uh({
            href: n,
            rel: "nofollow noopener"
        }, r, {
            ref: t
        })) : Vn.createElement("button", uh({}, r, {
            ref: t
        }))
    })), {
        displayName: "Button",
        mapPropsToStyles: e => {
            const t = e.primary ? e.theme.vars["--primary-color"] : "black",
                n = lh(t);
            return {
                borderColor: t,
                color: t,
                "&:hover": {
                    color: n,
                    borderColor: n
                }
            }
        },
        shouldForwardProp: _p,
        target: "e898cdi0"
    })({
        name: "1x6954b",
        styles: "border-width:1px;border-style:solid;background-color:#fff;font-size:1em;font-family:inherit;line-height:1.4em;text-align:center;text-decoration:none;appearance:none;padding:0.8em;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;&:hover{cursor:pointer;}&:active{box-shadow:none;outline:none;}&[disabled]{pointer-events:none;}"
    }),
    dh = e => {
        let {
            label: t,
            onPress: n,
            disabled: r,
            ...o
        } = e;
        const a = gu(),
            i = Vn.useRef(),
            {
                buttonProps: s
            } = sh({
                onPress: n,
                isDisabled: r,
                ...o
            }, i);
        return Vn.createElement(ch, Es(a, s, o, {
            ref: i
        }), t)
    };

function ph() {
    return (ph = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
dh.propTypes = {
    label: mc.oneOfType([mc.string, mc.node])
};
const mh = rm(dh, {
    target: "es0r3nd0"
})("display:inline-block;width:100%;border-left:0;border-right:0;border-top:0;border-bottom-color:rgba(0, 0, 0, 0.1);box-shadow:none;transition:background-color 0.1s;background:transparent;color:", e => e.disabled ? "#8D9BA9" : "inherit", ";margin:0;&:hover{border-bottom-color:rgba(0, 0, 0, 0.15);background:rgba(0, 0, 0, 0.02);color:inherit;}&:active{background:rgba(0, 0, 0, 0.04);color:inherit;}");
class fh extends Vn.Component {
    constructor() {
        super(...arguments), this.handleClick = e => {
            e.stopPropagation(), this.props.onClick(e)
        }
    }
    render() {
        return Vn.createElement(mh, ph({}, this.props, {
            onClick: this.handleClick
        }))
    }
}
fh.propTypes = {
    className: mc.string,
    label: mc.string,
    onClick: mc.func,
    primary: mc.bool,
    value: mc.oneOfType([mc.string, mc.number])
}, fh.defaultProps = {
    onClick: Un
};
const hh = e => Vn.Children.toArray(e).filter(Boolean),
    gh = {
        radiusType: "single"
    },
    Dh = {
        radiusType: "first"
    },
    vh = {
        radiusType: "last"
    },
    bh = {
        authorName: null,
        date: null
    },
    yh = rm("div", {
        displayName: "MessageGroup",
        mapPropsToStyles: e => e.isOwn ? {
            flexDirection: "row-reverse"
        } : null,
        target: "e7t81ts1"
    })({
        name: "a5a8k1",
        styles: "display:flex;margin-bottom:1em"
    }),
    xh = rm("div", {
        target: "e7t81ts0"
    })("display:flex;flex-direction:column;align-items:center;text-align:center;font-size:0.7em;line-height:1.6em;", e => {
        const t = e.theme.isRtl ? "0 8px 0 0" : "0 0 0 8px",
            n = e.theme.isRtl ? "0 0 0 8px" : "0 8px 0 0",
            r = e.isOwn ? t : n;
        return {
            minWidth: e.theme.Avatar.size,
            margin: r
        }
    }, ";"),
    Ch = Ui(""),
    Eh = e => {
        let {
            avatar: t,
            avatarLetter: n,
            avatarAlt: r = "Agent's avatar",
            children: o,
            onlyFirstWithMeta: a,
            ...i
        } = e;
        const s = hh(o),
            u = Vn.Children.count(s);
        return Wi(yh, i, (t || n) && Wi(xh, {
            flexFit: !0,
            isOwn: i.isOwn
        }, Wi(Qm, {
            imgUrl: t,
            imgAlt: r,
            text: n,
            fontSize: "10px"
        })), Wi(af, {
            css: Ch
        }, Vn.Children.map(s, (e, t) => {
            if (1 === u) return Vn.cloneElement(e, gh);
            if (0 === t) return Vn.cloneElement(e, Dh);
            const n = a && t > 0;
            return t === u - 1 ? Vn.cloneElement(e, n ? { ...vh,
                ...bh
            } : vh) : n ? Vn.cloneElement(e, bh) : e
        })))
    };
Eh.propTypes = {
    avatar: mc.string,
    avatarLetter: mc.string,
    avatarAlt: mc.string,
    children: mc.node,
    isOwn: mc.bool,
    onlyFirstWithMeta: mc.bool
};
const wh = {
        vars: {
            "primary-color": "#427fe1",
            "secondary-color": "#fbfbfb",
            "tertiary-color": "#fff"
        },
        AgentBar: {
            Avatar: {
                size: "42px"
            },
            css: {
                backgroundColor: "var(--secondary-color)"
            }
        },
        Avatar: {
            size: "30px"
        },
        Bubble: {
            sharpBorderRadius: "0.3em",
            ovalBorderRadius: "1.4em",
            css: {
                backgroundColor: {
                    default: "var(--secondary-color)",
                    bot: "green"
                }
            }
        },
        Button: {},
        ChatListItem: {
            Avatar: {
                css: {
                    marginRight: ".5em"
                }
            }
        },
        FixedWrapperMaximized: {
            animationDuration: 100,
            width: "400px",
            height: "500px"
        },
        FixedWrapperMinimized: {
            animationDuration: 100
        },
        FixedWrapperRoot: {
            position: "right",
            css: {}
        },
        Message: {
            secondaryTextColor: "#000",
            horizontalAlign: "left",
            own: {
                horizontalAlign: "right",
                Bubble: {
                    css: {
                        backgroundColor: "var(--primary-color)",
                        color: "#fff"
                    }
                },
                Content: {
                    css: {
                        alignItems: "flex-end"
                    }
                },
                MessageMeta: {
                    css: {
                        textAlign: "right"
                    }
                },
                Time: {
                    css: {
                        textAlign: "right"
                    }
                }
            },
            bot: {
                Bubble: {
                    css: {
                        backgroundColor: "green"
                    }
                }
            }
        },
        MessageButtons: {},
        MessageGroup: {},
        MessageList: {
            css: {
                backgroundColor: "var(--tertiary-color)"
            }
        },
        MessageMedia: {},
        MessageText: {},
        MessageTitle: {},
        QuickReply: {
            css: {
                backgroundColor: "#fff"
            }
        },
        TextComposer: {
            inputColor: "#000",
            Icon: {
                color: "#aaa"
            },
            IconButton: {
                active: {
                    Icon: {
                        color: "var(--primary-color)"
                    }
                }
            }
        },
        TitleBar: {
            iconsColor: "#fff",
            behaviour: "default",
            css: {
                backgroundColor: "var(--primary-color)"
            }
        }
    },
    Fh = e => {
        const t = Kp(e);
        return 0 === Object.keys(t).length ? { ...e,
            vars: Ie(e => "--" + e, e.vars || {})
        } : { ...e,
            ...n(e => ({ ...Fh(e),
                css: e.css || {}
            }), t),
            vars: Ie(e => "--" + e, e.vars || {})
        }
    },
    kh = e => {
        let {
            theme: t = {},
            children: n
        } = e;
        const r = Fh(o(wh, t));
        return Vn.createElement(Xp, {
            value: r
        }, n)
    };

function Sh() {
    return (Sh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const Lh = rm("button", {
        displayName: "QuickReply",
        target: "esv18m00"
    })({
        name: "cdfzur",
        styles: "border-width:1px;border-style:solid;font-size:1em;line-height:1em;appearance:none;transition:box-shadow 0.1s,color 0.1s,border-color 0.2s;margin:0.25em;background-color:#fff;border-radius:1.4em;font-weight:400;overflow:hidden;padding:0.375em 1em 0.5em;word-break:break-word;&:hover{cursor:pointer;}&:active{outline:none;}"
    }),
    Th = e => {
        const {
            value: t,
            onSelect: n = Un,
            onClick: r = Un,
            ...o
        } = e, a = gu(), i = Vn.useCallback(e => {
            n(t), r(e)
        }, [r, n, t]);
        return Vn.createElement(Lh, Sh({
            value: t
        }, o, a, as({
            onClick: i
        })))
    };

function Ph() {
    return (Ph = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Xn(console.warn.bind(console));
const Bh = rm("div", {
    displayName: "QuickReplies",
    target: "eul24n40"
})("display:flex;flex-wrap:wrap;text-align:center;justify-content:", e => {
    let {
        centered: t
    } = e;
    return t ? "center" : "flex-start"
}, ";width:100%;");
let Ah = class extends Vn.Component {
    constructor() {
        super(...arguments), this._handleSelect = e => this.props.onSelect(e)
    }
    render() {
        const {
            children: e,
            replies: t,
            onSelect: n,
            centered: r = !0,
            ...o
        } = this.props, a = e ? hh(e) : t.map((e, t) => Vn.createElement(Th, {
            key: t,
            value: e
        }, e));
        return Vn.createElement(Bh, Ph({}, o, {
            role: "group",
            centered: r
        }), Vn.Children.map(a, e => Vn.cloneElement(e, {
            onSelect: this._handleSelect
        })))
    }
};

function Mh() {
    return (Mh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Ah.defaultProps = {
    onSelect: Un
}, Ah.propTypes = {
    children: mc.node,
    onSelect: mc.func,
    replies: mc.arrayOf(mc.string),
    centered: mc.bool
};
const Oh = rm("div", {
        displayName: "TitleBar",
        section: !0,
        target: "emevikl1"
    })({
        name: "1rw1ajx",
        styles: "display:flex;justify-content:center;align-items:center;width:100%;border:#000;color:#fff;position:relative;z-index:2;text-align:center;padding:0.4em"
    }),
    Ih = rm("div", {
        displayName: "TitleBarTitle",
        target: "emevikl0"
    })("width:100%;margin:0;margin-left:", e => {
        let {
            isIconProvided: t
        } = e;
        return !t && "32px"
    }, ";padding:0 2px;text-align:center;font-size:0.9em;flex-grow:1;"),
    _h = Vn.forwardRef((e, t) => {
        let {
            leftIcons: n,
            rightIcons: r,
            title: o,
            ...a
        } = e;
        const [i] = n;
        return Vn.createElement(Oh, Mh({}, a, {
            ref: t
        }), n, Vn.createElement(Ih, {
            ellipsis: !0,
            isIconProvided: i
        }, o), r)
    });
_h.displayName = "TitleBar", _h.propTypes = {
    leftIcons: mc.arrayOf(mc.node),
    rightIcons: mc.arrayOf(mc.node),
    theme: mc.shape(),
    title: mc.node
};
const zh = e => 13 === e.which,
    Rh = Vn.createContext(),
    jh = () => Vn.useContext(Rh),
    Nh = rm("div", {
        displayName: "TextComposer",
        section: !0,
        target: "e1016sln0"
    })("padding:0;margin:0 15px;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";");
class Wh extends Vn.Component {
    constructor() {
        super(...arguments), this.state = {
            value: this._getValue({
                value: this.props.defaultValue
            })
        }, this._handleButtonClick = e => {
            this.maybeSend() && this.props.onButtonClick(e)
        }, this._handleChange = e => {
            const {
                value: t
            } = e.target;
            this._isControlled() || this.setState({
                value: t
            }), this.props.onValueChange(t), this.props.onChange(e)
        }, this._handleInputRef = e => {
            this._inputRef = e
        }, this._handleKeyDown = e => {
            const {
                onKeyDown: t
            } = this.props;
            (e => zh(e) && !e.altKey && !e.shiftKey)(e) && e.preventDefault(), zh(e) && !(e => zh(e) && (e.altKey || e.shiftKey))(e) ? (this.maybeSend(), t(e)) : t(e)
        }, this.maybeSend = () => (this.props.onBeforeSend(), !!this._canSend() && (this._isControlled() || this.setState({
            value: ""
        }), this.props.onSend(_e(this._getValue())), !0))
    }
    _getValue(e, t) {
        return void 0 === e && (e = this.state), void 0 === t && (t = this.props), this._isControlled() ? t.value : e.value
    }
    _canSend() {
        return this.props.active && "" !== this._getValue().trim()
    }
    _isControlled() {
        return "string" == typeof this.props.value
    }
    _setCursorAtTheEnd() {
        const e = this._inputRef.value.length;
        this._inputRef.setSelectionRange(e, e)
    }
    componentDidMount() {
        this.props.defaultValue && this._inputRef && document.activeElement === this._inputRef && this._setCursorAtTheEnd()
    }
    componentDidUpdate(e, t) {
        const n = this._getValue();
        n !== this._getValue(t, e) && "" === n && this._inputRef.focus()
    }
    render() {
        const {
            active: e,
            children: t,
            defaultValue: n,
            onButtonClick: r,
            onChange: o,
            onKeyDown: a,
            onSend: i,
            onValueChange: s,
            onBeforeSend: u,
            value: l,
            ...c
        } = this.props, d = {
            active: this._canSend(),
            inputRef: this._handleInputRef,
            value: this._getValue(),
            maybeSend: this.maybeSend,
            onButtonClick: this._handleButtonClick,
            onChange: this._handleChange,
            onKeyDown: this._handleKeyDown
        };
        return Vn.createElement(Rh.Provider, {
            value: d
        }, Vn.createElement(Nh, c, t))
    }
}
Wh.propTypes = {
    active: mc.bool,
    children: mc.node,
    defaultValue: mc.string,
    onButtonClick: mc.func,
    onChange: mc.func,
    onKeyDown: mc.func,
    onSend: mc.func,
    onBeforeSend: mc.func,
    value: mc.string
}, Wh.defaultProps = {
    active: !0,
    defaultValue: "",
    onButtonClick: Un,
    onChange: Un,
    onKeyDown: Un,
    onSend: Un,
    onValueChange: Un,
    onBeforeSend: Un
};
const Vh = e => {
        let {
            color: t
        } = e;
        return t ? {
            fill: t,
            "& *": {
                fill: t
            }
        } : null
    },
    Uh = yr(e => rm(e, {
        displayType: "Icon",
        mapPropsToStyles: Vh,
        shouldForwardProp: _p,
        target: "eh4tvav0"
    })({
        name: "y0b0au",
        styles: "&{display:block;}&,& *{fill:currentColor;}"
    })),
    Hh = e => {
        let {
            children: t,
            ...n
        } = e;
        const r = Uh(t.type);
        return Vn.createElement(r, n)
    };

function qh() {
    return (qh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Hh.propTypes = {
    children: mc.node.isRequired
};
const Kh = e => Vn.createElement("svg", qh({
        width: "8px",
        height: "13px",
        viewBox: "0 0 8 13"
    }, e), Vn.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, Vn.createElement("g", {
        transform: "translate(-840.000000, -560.000000)",
        fill: "#424D57",
        fillRule: "nonzero"
    }, Vn.createElement("g", {
        transform: "translate(845.000000, 567.000000) scale(-1, 1) translate(-845.000000, -567.000000) translate(831.000000, 553.000000)"
    }, Vn.createElement("g", {
        transform: "translate(3.000000, 1.000000)"
    }, Vn.createElement("polygon", {
        points: "8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75"
    })))))),
    Gh = e => Vn.createElement(Hh, e, Vn.createElement(Kh, null));

function Zh() {
    return (Zh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
const Yh = e => Vn.createElement("svg", Zh({
        width: "8px",
        height: "13px",
        viewBox: "0 0 8 13"
    }, e), Vn.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, Vn.createElement("g", {
        transform: "translate(-1104.000000, -560.000000)",
        fill: "#424D57",
        fillRule: "nonzero"
    }, Vn.createElement("g", {
        transform: "translate(1094.000000, 553.000000)"
    }, Vn.createElement("g", {
        transform: "translate(2.000000, 1.000000)"
    }, Vn.createElement("polygon", {
        points: "8.59 17.34 13.17 12.75 8.59 8.16 10 6.75 16 12.75 10 18.75"
    })))))),
    $h = e => Vn.createElement(Hh, e, Vn.createElement(Yh, null));

function Xh() {
    return (Xh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
class Jh extends Vn.Component {
    constructor() {
        super(...arguments), this.handleButtonClick = e => t => {
            this.props.onButtonClick(t, e)
        }
    }
    render() {
        let e = null;
        const t = V(e => {
            let {
                showMore: t
            } = e;
            return t
        }, this.props.buttons);
        if (-1 !== t) {
            const {
                text: n,
                ...r
            } = this.props.buttons[t];
            e = Vn.createElement(fh, Xh({}, r, {
                label: n,
                "data-variant": "show-more",
                onClick: this.handleButtonClick(t)
            }))
        }
        return Vn.createElement(Vn.Fragment, null, Vn.createElement(Wf, null, this.props.buttons.map((e, n) => {
            let {
                text: r,
                key: o,
                showMore: a,
                ...i
            } = e;
            const s = void 0 !== o ? o : n;
            return n !== t ? Vn.createElement(fh, Xh({
                key: s,
                label: r.length > 20 ? r.slice(0, 20).trim() + "…" : r,
                onClick: this.handleButtonClick(s)
            }, i)) : null
        })), e)
    }
}

function Qh() {
    return (Qh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(null, arguments)
}
Jh.defaultProps = {
    onButtonClick: Un
}, mc.string, mc.string.isRequired, mc.string;
const eg = rm("div", {
        target: "e19iyixw3"
    })({
        name: "1u909ow",
        styles: "position:relative;width:100%;display:flex"
    }),
    tg = {
        name: "fol00x",
        styles: "scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}"
    },
    ng = rm("div", {
        target: "e19iyixw2"
    })("display:flex;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;align-items:flex-start;scroll-snap-type:x mandatory;scroll-behavior:", nr ? "unset" : "smooth", ";", tg, " ", e => {
        let {
            padding: t,
            dir: n
        } = e;
        return { ...void 0 !== t && {
                padding: t
            },
            "> :not(:last-child)": {
                ["rtl" === n ? "marginLeft" : "marginRight"]: 8
            }
        }
    }, ";"),
    rg = rm("div", {
        target: "e19iyixw1"
    })({
        name: "idvx4m",
        styles: "flex-grow:0;flex-shrink:0;scroll-snap-align:center;scroll-snap-stop:always"
    }),
    og = rm("button", {
        target: "e19iyixw0"
    })("position:absolute;width:30px;height:30px;border-radius:50%;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.floatSurface
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";border:0;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);text-align:center;top:32%;display:flex;align-items:center;justify-content:center;padding:0;z-index:1;outline:0;-webkit-transform:translate3d(0, 0, 0);&:hover{cursor:pointer;}svg{display:inline;}", e => {
        let {
            variant: t
        } = e;
        return {
            [t]: ".5em"
        }
    }, ";"),
    ag = e => {
        let {
            itemCount: t,
            itemWidth: n,
            spacing: r
        } = e;
        return t * n + (t - 1) * r
    },
    ig = e => {
        let {
            clientWidth: t,
            scrollableElement: n,
            currentX: r,
            nextX: o,
            scrollDirection: a,
            isRtl: i
        } = e;
        const s = n.firstElementChild.getBoundingClientRect().width,
            u = ((e, t) => {
                if (e.length < 2) return 0;
                const [n, r] = e, o = n.getBoundingClientRect(), a = r.getBoundingClientRect();
                return t ? o.left - a.right : a.left - o.right
            })(n.children, i),
            l = (i ? n.lastElementChild : n.firstElementChild).getBoundingClientRect().left - n.getBoundingClientRect().left + r,
            c = (e => {
                let {
                    x: t,
                    scrollDirection: n,
                    leftElementXOffset: r,
                    itemWidth: o,
                    spacing: a
                } = e;
                const i = (t - r) / (o + a);
                return 1 === n ? Math.floor(i) : Math.ceil(i)
            })({
                x: o,
                scrollDirection: a,
                leftElementXOffset: l,
                itemWidth: s,
                spacing: u
            });
        if (s > t) {
            return l + (1 === a ? c + 1 : c - 1) * (s + u)
        }
        const d = l + c * (s + u),
            p = Math.floor(t / (s + u)),
            m = ag({
                itemCount: p,
                itemWidth: s,
                spacing: u
            });
        return d + (m + s <= t ? ag({
            itemCount: p + 1,
            itemWidth: s,
            spacing: u
        }) : m) / 2 - t / 2
    },
    sg = e => {
        let {
            children: t,
            scrollableElementPadding: n,
            dir: r,
            nextItemLabel: o,
            previousItemLabel: a,
            ...i
        } = e;
        const s = Vn.useRef(0),
            u = Vn.useRef(null),
            {
                isFocusVisible: l
            } = gu(),
            [c, d] = Vn.useState(!0),
            [p, m] = Vn.useState(!0),
            [f, h] = Mp(),
            g = up("x", u),
            D = !(f && l),
            v = Vn.useCallback(() => {
                const e = u.current;
                e && (d(!(e => {
                    if ("ltr" === getComputedStyle(e).direction) return e.scrollLeft <= 1;
                    const t = e.scrollWidth - e.clientWidth;
                    switch (Io()) {
                        case "negative":
                            return e.scrollLeft <= 1 - t;
                        case "positive-ascending":
                            return e.scrollLeft >= t - 1;
                        case "positive-descending":
                            return e.scrollLeft <= 1
                    }
                })(e)), m(!(e => {
                    const t = getComputedStyle(e).direction,
                        n = e.scrollWidth - e.clientWidth;
                    if ("ltr" === t) return e.scrollLeft >= n - 1;
                    switch (Io()) {
                        case "negative":
                            return e.scrollLeft >= -1;
                        case "positive-ascending":
                            return e.scrollLeft <= 1;
                        case "positive-descending":
                            return e.scrollLeft >= n - 1
                    }
                })(e)))
            }, []),
            b = Vn.useMemo(() => Me(200, v), [v]);
        xp(() => {
            if ("undefined" == typeof ResizeObserver) return;
            const e = requestAnimationFrame(v),
                t = new ResizeObserver(fr(200, v));
            return t.observe(u.current), () => {
                cancelAnimationFrame(e), t.disconnect()
            }
        }), Vn.useEffect(() => {
            const e = u.current;
            if (!e) return;
            const t = new MutationObserver(e => {
                e.forEach(e => {
                    "childList" === e.type && (e.addedNodes.length > 0 || e.removedNodes.length > 0) && v()
                })
            });
            return t.observe(e, {
                childList: !0,
                subtree: !0
            }), () => {
                t.disconnect()
            }
        }, [v]);
        const y = e => {
            s.current += e, s.current < 0 ? s.current = 0 : s.current >= t.length && (s.current = t.length - 1);
            const n = u.current,
                {
                    clientWidth: o,
                    scrollWidth: a
                } = n,
                i = "rtl" === r,
                l = ((e, t) => {
                    const n = e.scrollWidth - e.clientWidth;
                    if (t) switch (Io()) {
                        case "negative":
                            return n + e.scrollLeft;
                        case "positive-ascending":
                            return n - e.scrollLeft;
                        case "positive-descending":
                            return e.scrollLeft
                    }
                    return e.scrollLeft
                })(n, i),
                c = l + e * o,
                d = 1 === e ? Math.min(c, a - o) : Math.max(c, 0),
                p = c === d ? ig({
                    clientWidth: o,
                    scrollableElement: n,
                    currentX: l,
                    nextX: c,
                    scrollDirection: e,
                    isRtl: i
                }) : d;
            if (i) switch (Io()) {
                case "negative":
                    return void g(-a + o + p, {
                        duration: 0
                    });
                case "positive-ascending":
                    return void g(a - o - p, {
                        duration: 0
                    });
                case "positive-descending":
                    return void g(p, {
                        duration: 0
                    })
            } else g(p, {
                duration: 0
            })
        };
        return Vn.createElement(eg, i, D && c && Vn.createElement(og, {
            variant: "left",
            type: "button",
            "aria-label": a || "Previous item",
            onClick: e => {
                e.stopPropagation(), y(-1)
            }
        }, Vn.createElement(Gh, {
            "aria-hidden": !0
        })), Vn.createElement(ng, Qh({
            dir: r,
            tabIndex: -1,
            ref: u,
            onScroll: b,
            padding: n
        }, h), Vn.Children.map(t, (e, t) => Vn.createElement(rg, {
            onFocus: () => {
                var e;
                l && f && y("number" != typeof(e = t - s.current) || isNaN(e) ? NaN : Object.is(e, 0) ? 0 : Object.is(e, -0) ? -0 : e > 0 ? 1 : -1)
            }
        }, e))), D && p && Vn.createElement(og, {
            variant: "right",
            type: "button",
            "aria-label": o || "Next item",
            onClick: e => {
                e.stopPropagation(), y(1)
            }
        }, Vn.createElement($h, {
            "aria-hidden": !0
        })))
    };

function ug(e, t) {
    return t || (t = e.slice(0)), e.raw = t, e
}
let lg = !1;
const cg = e => !e && (lg ? (lg = !1, !0) : "function" == typeof document.hasFocus && document.hasFocus()),
    dg = e => !Ce() && cg(e),
    pg = (e, t) => {
        ze(lr(e, "host_focus_shifted"), Jn(() => {
            lg = !1
        })), ze(Re(t, e => e.application.visibility), je(null), cr, Qn(e => {
            let [t, n] = e;
            return t && (null == t ? void 0 : t.state) !== (null == n ? void 0 : n.state) && !!n.interactionModality
        }), Jn(e => {
            let [, t] = e;
            var n;
            n = t.interactionModality, ru = n, uu(n, null), lg = "virtual" !== t.interactionModality
        }))
    },
    mg = Vn.createContext(!1),
    fg = () => Vn.useContext(mg),
    hg = mg.Provider,
    gg = Wn.createContext({
        isDragNDropAllowed: () => !1,
        setModalOpen: Un,
        setMenuOpen: Un,
        setMomentExpand: Un
    }),
    Dg = e => {
        let {
            children: t
        } = e;
        const n = fg(),
            r = Sp(!1),
            o = Sp(!1),
            a = Sp(!1),
            i = Wn.useMemo(() => ({
                isDragNDropAllowed: () => !(n || r.get() || o.get() || a.get()),
                setModalOpen: e => o.next(e),
                setMenuOpen: e => r.next(e),
                setMomentExpand: e => a.next(e)
            }), [r, o, a, n]);
        return Wn.createElement(gg.Provider, {
            value: i
        }, t)
    },
    vg = () => Wn.useContext(gg),
    bg = function() {
        const e = "undefined" != typeof document && document.createElement("link").relList;
        return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload"
    }(),
    yg = {},
    xg = function(e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            document.getElementsByTagName("link");
            const e = document.querySelector("meta[property=csp-nonce]"),
                n = (null == e ? void 0 : e.nonce) || (null == e ? void 0 : e.getAttribute("nonce"));
            r = Promise.all(t.map(e => {
                if ((e = function(e) {
                        return "https://cdn.livechatinc.com/widget/" + e
                    }(e)) in yg) return;
                yg[e] = !0;
                const t = e.endsWith(".css"),
                    r = t ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${e}"]${r}`)) return;
                const o = document.createElement("link");
                return o.rel = t ? "stylesheet" : bg, t || (o.as = "script", o.crossOrigin = ""), o.href = e, n && o.setAttribute("nonce", n), document.head.appendChild(o), t ? new Promise((t, n) => {
                    o.addEventListener("load", t), o.addEventListener("error", () => n(new Error("Unable to preload CSS for " + e)))
                }) : void 0
            }))
        }
        return r.then(() => e()).catch(e => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        })
    },
    Cg = e => Ui("display:inline-block;flex-shrink:0;width:1em;height:1em;font-size:", e ? jo(e) : "inherit", ";user-select:none;fill:currentColor;"),
    Eg = e => {
        let {
            size: t,
            label: n,
            color: r = "inherit",
            children: o,
            ...a
        } = e;
        const i = bs(),
            s = n ? {
                "aria-labelledby": i
            } : {};
        return Wi("svg", ur({
            color: r,
            css: Cg(t)
        }, a, s), n && Wi("title", {
            id: i
        }, n), o)
    },
    wg = (e, t) => Vn.memo(n => Wi(Eg, ur({}, t, n), e));
var Fg;
const kg = Hi(Fg || (Fg = ug(["\n\tto {\n\t\tstroke-dashoffset: 0;\n\t}\n"])));
wg(Wi("polyline", {
    css: Ui("fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;animation-fill-mode:forwards;animation-name:", kg, ";animation-duration:0.5s;animation-iteration-count:1;animation-timing-function:cubic-bezier(0, 0, 1, 1);stroke-dasharray:9.7;stroke-dashoffset:9.7;"),
    points: "4.3,8.1 5.3,9.1 6.8,10.5 9,8.2 11.1,6.1 "
}), {
    size: 16,
    viewBox: "0 0 16 16"
});
const Sg = wg(Vn.createElement("path", {
        d: "M23.7,16.7l-6,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1l4.3-4.3H10c-0.5,0-0.9-0.4-1-0.9L9,16 c0-0.5,0.4-0.9,0.9-1l0.1,0h10.6l-4.3-4.3c-0.4-0.4-0.4-0.9-0.1-1.3l0.1-0.1c0.4-0.4,0.9-0.4,1.3-0.1l0.1,0.1l6,6 C24.1,15.7,24.1,16.2,23.7,16.7L23.7,16.7z"
    }), {
        size: 32,
        viewBox: "0 0 32 32"
    }),
    Lg = wg(Vn.createElement("path", {
        d: "M10.4928932,10.1071068 C10.1023689,9.71658249 9.46920395,9.71658249 9.07867966,10.1071068 C8.68815536,10.4976311 8.68815536,11.1307961 9.07867966,11.5213203 L11.9071068,14.3497475 C12.2976311,14.7402718 12.9307961,14.7402718 13.3213203,14.3497475 L16.1497475,11.5213203 C16.5402718,11.1307961 16.5402718,10.4976311 16.1497475,10.1071068 C15.7592232,9.71658249 15.1260582,9.71658249 14.7355339,10.1071068 L12.6142136,12.2284271 L10.4928932,10.1071068 Z"
    }), {
        size: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "none",
        strokeWidth: 1,
        fillRule: "evenodd"
    }),
    Tg = wg(Vn.createElement("path", {
        d: "M17.4,16l5.3,5.3c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0L16,17.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0\tc-0.4-0.4-0.4-1,0-1.4l5.3-5.3l-5.3-5.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0\tc0.4,0.4,0.4,1,0,1.4L17.4,16z"
    }), {
        size: 32,
        viewBox: "0 0 32 32"
    }),
    Pg = wg(Vn.createElement("g", null, Vn.createElement("path", {
        d: "M5.87014298,6.34370573 L5.87014298,7.9487527 L9.65072364,7.9487527 C9.53495965,8.84917256 9.23921768,9.50813989 8.78919821,9.97139007 C8.23630226,10.5325366 7.37470234,11.1458442 5.87014298,11.1458442 C3.54264619,11.1458442 1.72305085,9.24068246 1.72305085,6.87877178 C1.72305085,4.51686111 3.54264619,2.61162379 5.87014298,2.61162379 C7.12395486,2.61162379 8.04336228,3.11403252 8.71842872,3.7599218 L9.83077612,2.63112747 C8.8920747,1.70462711 7.63185632,1 5.87021747,1 C2.68112076,1 0,3.63594493 0,6.87211936 C0,10.108445 2.68119525,12.7443899 5.87021747,12.7443899 C7.59334282,12.7443899 8.8921492,12.1700897 9.90795211,11.10026 C10.9496045,10.0432815 11.2774535,8.54898221 11.2774535,7.34852319 C11.2774535,6.97666816 11.2516785,6.63081803 11.1937965,6.34370573 L5.87014298,6.34370573 Z",
        fill: "#4285F4"
    }), Vn.createElement("path", {
        d: "M16.0031346,11.1261969 C14.8714932,11.1261969 13.8942783,10.1798904 13.8942783,8.82944965 C13.8942783,7.46570401 14.8714932,6.53285362 16.0031346,6.53285362 C17.1347015,6.53285362 18.1119909,7.46585521 18.1119909,8.82944965 C18.1119909,10.1801172 17.1347015,11.1261969 16.0031346,11.1261969 M16.0031346,5.03878108 C13.9391983,5.03878108 12.254661,6.63074999 12.254661,8.82960084 C12.254661,11.0086456 13.9391983,12.6204206 16.0031346,12.6204206 C18.0670709,12.6204206 19.7515338,11.0153736 19.7515338,8.82960084 C19.7515338,6.63074999 18.0669964,5.03878108 16.0031346,5.03878108",
        fill: "#EA4335"
    }), Vn.createElement("path", {
        d: "M32.4949065,11.1261969 C31.3634886,11.1261969 30.5017397,10.1475355 30.5017397,8.82944965 C30.5017397,7.49193571 31.3632651,6.53285362 32.4949065,6.53285362 C33.6138094,6.53285362 34.488257,7.51151498 34.488257,8.84260329 C34.4946288,10.1670392 33.6137349,11.1261969 32.4949065,11.1261969 L32.4949065,11.1261969 Z M34.3787903,5.88696434 L34.3209828,5.88696434 C33.9544714,5.44336903 33.2472234,5.03878108 32.353591,5.03878108 C30.4890757,5.03878108 28.8624203,6.68956341 28.8624203,8.82960084 C28.8624203,10.9566358 30.4890757,12.6204206 32.353591,12.6204206 C33.2472234,12.6204206 33.9544714,12.2158327 34.3209828,11.7590081 L34.3787903,11.7590081 L34.3787903,12.2874217 C34.3787903,13.7359101 33.6136604,14.5124287 32.3856235,14.5124287 C31.3827081,14.5124287 30.7589682,13.7817211 30.5017397,13.1619123 L29.0744308,13.7621418 C29.4857133,14.7668837 30.5725092,16 32.3856235,16 C34.3080953,16 35.9347507,14.8518532 35.9347507,12.0526972 L35.9347507,5.23442263 L34.3787903,5.23442263 L34.3787903,5.88696434 Z",
        fill: "#4285F4"
    }), Vn.createElement("path", {
        d: "M24.3615776,11.1261969 C23.2299362,11.1261969 22.2524978,10.1798904 22.2524978,8.82944965 C22.2524978,7.46570401 23.2297872,6.53285362 24.3615776,6.53285362 C25.4929955,6.53285362 26.4705084,7.46585521 26.4705084,8.82944965 C26.4705084,10.1801172 25.4931445,11.1261969 24.3615776,11.1261969 M24.3615776,5.03878108 C22.2974923,5.03878108 20.6131039,6.63074999 20.6131039,8.82960084 C20.6131039,11.0086456 22.2975668,12.6204206 24.3615776,12.6204206 C26.4252904,12.6204206 28.1098278,11.0153736 28.1098278,8.82960084 C28.1099767,6.63074999 26.4255139,5.03878108 24.3615776,5.03878108",
        fill: "#FBBC05"
    }), Vn.createElement("polygon", {
        fill: "#34A853",
        points: "37.2208111 12.6203299 38.834579 12.6203299 38.834579 1.15655104 37.2208111 1.15655104"
    }), Vn.createElement("path", {
        d: "M43.7017693,6.4610831 C44.3641717,6.4610831 44.9297317,6.80685763 45.1161907,7.29626391 L41.740784,8.71209495 C41.740784,7.12005044 42.8529079,6.4610831 43.7017693,6.4610831 M43.8174588,11.1261666 C42.9814104,11.1261666 42.3900754,10.7413091 42.0043444,9.97786862 L47,7.88349097 L46.832835,7.45289811 C46.52428,6.60471485 45.5726166,5.03875084 43.6374063,5.03875084 C41.7149345,5.03875084 40.1140541,6.57205753 40.1140541,8.8296462 C40.1140541,10.9566056 41.6956405,12.6203904 43.8176078,12.6203904 C45.5277711,12.6203904 46.517948,11.5570619 46.929305,10.9435275 L45.6561991,10.082115 C45.2318802,10.7085762 44.6532837,11.1261666 43.8174588,11.1261666",
        fill: "#EA4335"
    })), {
        viewBox: "0 0 47 16"
    });
var Bg, Ag, Mg, Og, Ig, _g, zg, Rg, jg;
wg(Wi(Vn.Fragment, null, Wi("g", {
    css: Ui("fill:none;transform:translate(16px, 16px) rotate(0deg) translate(-16px, -16px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(Bg || (Bg = ug(["\n            75% {\n              transform: translate(16px, 16px) rotate(0deg) translate(-16px, -16px);\n            }\n            91.67% {\n              transform: translate(16px, 16px) rotate(180deg) translate(-16px, -16px);\n            }\n            0% {\n              transform: translate(16px, 16px) rotate(0deg) translate(-16px, -16px);\n            }\n            100% {\n              transform: translate(16px, 16px) rotate(180deg) translate(-16px, -16px);\n            }\n          "]))), ";")
}, Wi("path", {
    d: "M22,22 L22,26 L10,26 L10,22 L16,16 L22,22 Z M22,10 L16,16 L10,10 L10,6 L22,6 L22,10 Z",
    strokeLinejoin: "round",
    css: {
        name: "9mktyj",
        styles: "stroke:currentColor;stroke-width:2"
    }
})), Wi("g", {
    css: Ui("transform:translate(16px, 15px) scale(1, 1) translate(-16px, -15px);animation-fill-mode:backwards;animation-name:", Hi(Ag || (Ag = ug(["\n            0% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n            61.67% {\n              transform: translate(16px, 15px) scale(0, 0) translate(-16px, -15px);\n            }\n            63.33% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n            100% {\n              transform: translate(16px, 15px) scale(1, 1) translate(-16px, -15px);\n            }\n          "]))), ";animation-timing-function:cubic-bezier(0.42, 0, 1, 1);")
}, Wi("polygon", {
    points: "12 11 20 11 16 15",
    css: Ui("fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(Mg || (Mg = ug(["\n              58.33% {\n                opacity: 1;\n              }\n              60% {\n                opacity: 0;\n              }\n              91.67% {\n                opacity: 0;\n              }\n              96.67% {\n                opacity: 1;\n              }\n              0% {\n                opacity: 1;\n              }\n              100% {\n                opacity: 1;\n              }\n            "]))), ";")
})), Wi("path", {
    d: "M16,17 L16,23",
    css: Ui("stroke:currentColor;stroke-width:2;stroke-dashoffset:12;stroke-dasharray:6,0,6,6;animation-fill-mode:backwards,backwards;animation-timing-function:cubic-bezier(0.42, 0, 1, 1),cubic-bezier(0, 0, 1, 1);animation-name:", Hi(Og || (Og = ug(["\n            0% {\n              stroke-dashoffset: 12;\n            }\n            68.33% {\n              stroke-dashoffset: -6;\n            }\n            100% {\n              stroke-dashoffset: -6;\n            }\n          "]))), ",", Hi(Ig || (Ig = ug(["\n            0% {\n              stroke-dasharray: 6, 0, 6, 6;\n            }\n            100% {\n              stroke-dasharray: 6, 0, 6, 6;\n            }\n          "]))), ";")
}), Wi("g", {
    css: Ui("transform:translate(16px, 24px) translate(-16px, -24px) translate(0px, 2px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(_g || (_g = ug(["\n            0% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 2px);\n            }\n            40% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 0px);\n            }\n            75% {\n              transform: translate(16px, 24px) translate(-16px, -24px) translate(0px, 0px);\n            }\n            76.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-2px, 0px);\n            }\n            78.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-4px, -1px);\n            }\n            81.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -6px);\n            }\n            83.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -8px);\n            }\n            85% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-8px, -11px);\n            }\n            88.33% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(-4px, -13px);\n            }\n            91.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -13px);\n            }\n            96.67% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -11px);\n            }\n            100% {\n              transform: translate(16px, 24px) translate(-16px, -24px)\n                translate(0px, -11px);\n            }\n          "]))), ";")
}, Wi("g", {
    css: Ui("transform:translate(16px, 24px) rotate(0deg) translate(-16px, -24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(zg || (zg = ug(["\n              75% {\n                transform: translate(16px, 24px) rotate(0deg) translate(-16px, -24px);\n              }\n              78.33% {\n                transform: translate(16px, 24px) rotate(36deg) translate(-16px, -24px);\n              }\n              83.33% {\n                transform: translate(16px, 24px) rotate(90deg) translate(-16px, -24px);\n              }\n              91.67% {\n                transform: translate(16px, 24px) rotate(180deg) translate(-16px, -24px);\n              }\n              0% {\n                transform: translate(16px, 24px) rotate(0deg) translate(-16px, -24px);\n              }\n              100% {\n                transform: translate(16px, 24px) rotate(180deg) translate(-16px, -24px);\n              }\n            "]))), ";")
}, Wi("g", {
    css: Ui("transform:translate(16px, 24px) scale(1, 1) translate(-16px, -24px);animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(Rg || (Rg = ug(["\n                0% {\n                  transform: translate(16px, 24px) scale(1, 1) translate(-16px, -24px);\n                }\n                40% {\n                  transform: translate(16px, 24px) scale(1, 1.4) translate(-16px, -24px);\n                }\n                68.33% {\n                  transform: translate(16px, 24px) scale(1, 1.6) translate(-16px, -24px);\n                }\n                86.67% {\n                  transform: translate(16px, 24px) scale(1, 1.6) translate(-16px, -24px);\n                }\n                88.33% {\n                  transform: translate(16px, 24px) scale(1, 1.4) translate(-16px, -24px);\n                }\n                91.67% {\n                  transform: translate(16px, 24px) scale(0.8, 1.3) translate(-16px, -24px);\n                }\n                96.67% {\n                  transform: translate(16px, 24px) scale(0.45, 1.6) translate(-16px, -24px);\n                }\n                100% {\n                  transform: translate(16px, 24px) scale(0.45, 1.6) translate(-16px, -24px);\n                }\n              "]))), ";")
}, Wi("rect", {
    x: "10",
    y: "23",
    width: "12",
    height: "2",
    css: Ui("fill:currentColor;opacity:1;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0, 0, 1, 1);animation-name:", Hi(jg || (jg = ug(["\n                  75% {\n                    opacity: 1;\n                  }\n                  0% {\n                    opacity: 1;\n                  }\n                  100% {\n                    opacity: 1;\n                  }\n                "]))), ";")
}))))), {
    size: 32,
    viewBox: "0 0 32 32",
    css: {
        name: "2mc0ji",
        styles: "*{animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(0, 0, 1, 1);}"
    }
});
const Ng = rm(Vn.forwardRef((function(e, t) {
        let {
            onPress: n,
            disabled: r,
            ...o
        } = e;
        t = t || Vn.useRef(null);
        const {
            buttonProps: {
                ref: a,
                ...i
            }
        } = sh({
            onPress: n,
            isDisabled: r,
            ...o
        }, t);
        return Vn.createElement(lf, ur({
            ref: t
        }, Es(i, o), {
            onPointerDown: e => {
                i.onPointerDown(e), o.active || document.dispatchEvent(new MouseEvent(Ce() ? "touchdown" : "mousedown", {
                    relatedTarget: t.current
                }))
            }
        }))
    })), {
        target: "e1mwfyk10"
    })("padding:0;display:flex;justify-content:center;align-items:center;border:0;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.def
    }, ";"),
    Wg = rm("path", {
        target: "eam5rsy0"
    })(e => {
        let {
            collapsed: t
        } = e;
        return {
            opacity: t ? 0 : 1,
            transform: "scale(" + (t ? 0 : 1) + ")"
        }
    }, " transform-origin:50% 50%;transition:200ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.spring
    }, " 50ms;"),
    Vg = e => {
        let {
            backgroundColor: t,
            color: n,
            filled: r = !1,
            smile: o = !1,
            ...a
        } = e;
        return Vn.createElement(Eg, ur({
            viewBox: "0 0 32 32"
        }, a), Vn.createElement("path", {
            fill: n,
            d: "M12.63,26.46H8.83a6.61,6.61,0,0,1-6.65-6.07,89.05,89.05,0,0,1,0-11.2A6.5,6.5,0,0,1,8.23,3.25a121.62,121.62,0,0,1,15.51,0A6.51,6.51,0,0,1,29.8,9.19a77.53,77.53,0,0,1,0,11.2,6.61,6.61,0,0,1-6.66,6.07H19.48L12.63,31V26.46"
        }), Vn.createElement(Wg, {
            collapsed: r,
            fill: t,
            d: "M19.57,21.68h3.67a2.08,2.08,0,0,0,2.11-1.81,89.86,89.86,0,0,0,0-10.38,1.9,1.9,0,0,0-1.84-1.74,113.15,113.15,0,0,0-15,0A1.9,1.9,0,0,0,6.71,9.49a74.92,74.92,0,0,0-.06,10.38,2,2,0,0,0,2.1,1.81h3.81V26.5Z"
        }), o && Vn.createElement("path", {
            style: {
                zIndex: 1
            },
            d: "M10.1323 14.052C9.61464 13.873 9 14.1779 9 14.6347V16.9776C9 17.3027 9.21685 17.6019 9.57923 17.7403C10.6835 18.1618 13.228 19 16.0001 19C18.7721 19 21.3166 18.1618 22.4209 17.7403C22.7833 17.6019 23 17.3027 23 16.9776V14.6347C23 14.1779 22.3855 13.873 21.8678 14.052C20.5905 14.4935 18.3791 15.1109 16.0001 15.1109C13.621 15.1109 11.4096 14.4935 10.1323 14.052Z",
            fill: n
        }))
    },
    Ug = wg(Vn.createElement(Vn.Fragment, null, Vn.createElement("defs", null, Vn.createElement("radialGradient", {
        cx: "16.75%",
        cy: "99.9972466%",
        fx: "16.75%",
        fy: "99.9972466%",
        r: "110%",
        id: "radialGradient-1"
    }, Vn.createElement("stop", {
        stopColor: "#0099FF",
        offset: "0%"
    }), Vn.createElement("stop", {
        stopColor: "#A033FF",
        offset: "60%"
    }), Vn.createElement("stop", {
        stopColor: "#FF5280",
        offset: "90%"
    }), Vn.createElement("stop", {
        stopColor: "#FF7061",
        offset: "100%"
    }))), Vn.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, Vn.createElement("path", {
        d: "M12,2 C6.3675,2 2,6.12738635 2,11.6997329 C2,14.6146527 3.195,17.1345833 5.14,18.8745354 C5.3025,19.0195314 5.4025,19.2245257 5.4075,19.4445197 L5.4625,21.2244707 C5.47063238,21.4904161 5.61045967,21.7349145 5.83555586,21.8767863 C6.06065205,22.0186582 6.34155568,22.0393349 6.585,21.9319512 L8.57,21.0569753 C8.7375,20.9819773 8.9275,20.9694777 9.105,21.0169764 C10.0175,21.2669695 10.9875,21.4019658 12,21.4019658 C17.6325,21.4019658 22,17.2745794 22,11.7022329 C22,6.12988629 17.6325,2 12,2 Z",
        fill: "url(#radialGradient-1)",
        fillRule: "nonzero"
    }), Vn.createElement("path", {
        d: "M6.07640929,14.3289348 L8.97376539,10.0516937 C9.19412208,9.72612354 9.55082482,9.50121593 9.95744403,9.43146629 C10.3640632,9.36171665 10.7834949,9.45348964 11.1141102,9.68454854 L13.4196659,11.2931033 C13.6311344,11.4404337 13.9219243,11.4394974 14.1322922,11.2908086 L17.2441759,9.09252697 C17.6584362,8.79881084 18.2009199,9.2623316 17.9247464,9.67307525 L15.0249244,13.9480217 C14.8045678,14.2735919 14.447865,14.4984995 14.0412458,14.5682491 C13.6346266,14.6379988 13.2151949,14.5462258 12.8845797,14.3151669 L10.579024,12.7066121 C10.3675554,12.5592817 10.0767655,12.560218 9.86639766,12.7089068 L6.75451391,14.9071884 C6.34025363,15.2009046 5.79776993,14.7396785 6.07640929,14.3289348 L6.07640929,14.3289348 Z",
        fill: "#FFFFFF",
        fillRule: "nonzero"
    }))), {
        size: 24,
        viewBox: "0 0 24 24"
    }),
    Hg = wg(Vn.createElement("path", {
        d: "M24.1818182,21 C24.6336875,21 25,21.4477153 25,22 C25,22.5522847 24.6336875,23 24.1818182,23 L7.81818182,23 C7.36631248,23 7,22.5522847 7,22 C7,21.4477153 7.36631248,21 7.81818182,21 L24.1818182,21 Z"
    }), {
        size: 32,
        viewBox: "0 0 32 32"
    }),
    qg = wg(Vn.createElement("path", {
        d: "M9.1,8H12c0.6,0,1,0.4,1,1c0,0.5-0.4,0.9-0.9,1L12,10H9.1C9.1,10,9,10,9,10.1l0,0v12.8 C9,22.9,9,23,9.1,23l0,0h12.8c0.1,0,0.1,0,0.1-0.1l0,0V20c0-0.6,0.4-1,1-1c0.5,0,0.9,0.4,1,0.9l0,0.1v2.9c0,1.1-0.9,2-2,2.1l-0.2,0 H9.1c-1.1,0-2-0.9-2.1-2l0-0.2V10.1C7,9,7.9,8.1,9,8L9.1,8H12H9.1z M23,8L23,8C23,8,23.1,8,23,8L23,8c0.1,0,0.1,0,0.1,0 c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1 c0,0,0.1,0.1,0.1,0.1l-0.1-0.1c0.1,0,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0,0,0,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1 c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0v6c0,0.6-0.4,1-1,1s-1-0.4-1-1 l0-3.6l-5.3,5.3c-0.4,0.4-0.9,0.4-1.3,0.1l-0.1-0.1c-0.4-0.4-0.4-1,0-1.4l5.3-5.3H17c-0.6,0-1-0.4-1-1s0.4-1,1-1H23z"
    }), {
        size: 32,
        viewBox: "0 0 32 32"
    }),
    Kg = wg(Vn.createElement("path", {
        d: "M6.00016621,0 C7.12163402,0 8.28315426,0.0427726124 9.32451723,0.128317837 C10.6862996,0.256635674 11.8077674,1.3687236 11.9279247,2.86576503 L11.9419904,3.12420162 L11.956542,3.45232027 C11.9709443,3.81219896 11.9854303,4.62906207 12,5.90290962 L11.9924956,6.31600096 C11.977667,7.03775237 11.9551008,7.68450676 11.9279247,8.13434446 C11.8077674,9.63138589 10.6862996,10.7434738 9.32451723,10.8717916 C8.37782362,10.94956 7.33182648,10.9919792 6.30689373,10.999049 L5.99764151,11 C4.87617369,11 3.71465345,10.9572274 2.67329048,10.8716822 C1.31150814,10.7433643 0.190040321,9.6312764 0.0698830554,8.13423497 L0.0558172934,7.87579838 L0.0457550959,7.6562875 C0.0262329791,7.1991234 0.0104183521,6.63676231 5.68434189e-14,6.03503125 L5.68434189e-14,4.96507823 L0.00805921385,4.55536166 C0.0228604772,3.88569725 0.0443346891,3.28876881 0.0698830554,2.86587451 C0.190040321,1.36883308 1.31150814,0.256745158 2.67329048,0.128427321 C3.61998409,0.050658935 4.66598123,0.00823981533 5.69091398,0.00116996205 L6.00016621,0 Z M5.99890396,2.09625899 L5.63224138,2.09797246 L5.27783939,2.1030162 C4.45156521,2.11836672 3.6307937,2.15878976 2.83350017,2.22428533 C2.39292353,2.26705794 2.07250415,2.60923884 2.03245173,3.03696496 L2.01890621,3.19047439 C1.98206093,3.64763807 1.95813669,4.28893573 1.94419461,4.99353581 L1.94419461,6.00657368 L1.95304386,6.39295036 C1.96958774,7.02332583 1.99526556,7.57926478 2.03245173,7.96314452 C2.07250415,8.39087065 2.39292353,8.73305155 2.83350017,8.77582416 C3.6307937,8.84131972 4.45156521,8.88174276 5.27783939,8.89709329 L5.63224138,8.90213703 L6.02318064,8.9038505 L6.36556633,8.90224651 C7.31125721,8.89289 8.25311494,8.85078571 9.16430754,8.77593364 C9.60488418,8.73316103 9.92530356,8.39098013 9.96535598,7.96325401 L9.9789015,7.80974458 C10.0240037,7.25013189 10.0497448,6.41461035 10.0615154,5.52480966 L10.0536131,4.99342632 L10.0447639,4.60704964 C10.02822,3.97667417 10.0025422,3.42073522 9.96535598,3.03685548 C9.92530356,2.60912935 9.60488418,2.26694845 9.16430754,2.22417584 C8.36701402,2.15868028 7.5462425,2.11825724 6.71996832,2.10290671 L6.36556633,2.09786297 L5.99890396,2.09625899 Z"
    }), {
        viewBox: "0 0 12 11"
    }),
    Gg = wg(Vn.createElement("path", {
        d: "M11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 Z M5.9767173,19.2491327 L11.2533121,16.1582476 L11.2533121,16.1582476 C11.6515456,15.9588357 12.248896,15.9588357 12.7466879,16.1582476 L18.0232827,19.2491327 L16.2312317,14.5629521 C16.0321149,13.9647163 16.2312317,13.3664805 16.6294652,12.9676566 L19.8153338,9.97647753 L15.4347645,9.97647753 C14.8374142,9.97647753 14.3396222,9.57765366 14.040947,9.07912381 L12.0497792,4.69206117 L10.0586114,9.07912381 C9.85949458,9.67735963 9.26214423,9.97647753 8.66479387,9.97647753 L4.28422464,9.97647753 L7.37053478,12.9676566 C7.76876835,13.3664805 7.96788513,13.9647163 7.76876835,14.5629521 L5.9767173,19.2491327 Z"
    }), {
        size: 24,
        viewBox: "0 0 24 24"
    }),
    Zg = wg(Vn.createElement("path", {
        d: "M13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 Z M11.9999796,5.90483784 L11.9997933,16.0090226 L11.9997933,16.0090226 C12.2498258,16.0135115 12.5095533,16.0632532 12.7466879,16.1582476 L18.0232827,19.2491327 L16.2312317,14.5629521 C16.0321149,13.9647163 16.2312317,13.3664805 16.6294652,12.9676566 L19.8153338,9.97647753 L15.4347645,9.97647753 C14.8374142,9.97647753 14.3396222,9.57765366 14.040947,9.07912381 L12.4756278,5.79721856 C12.4161888,5.67259651 12.2669778,5.61975524 12.1423557,5.67919428 C12.0553736,5.72068079 11.9999814,5.80846865 11.9999796,5.90483784 Z"
    }), {
        size: 24,
        viewBox: "0 0 24 24"
    }),
    Yg = wg(Vn.createElement("path", {
        d: "M11.9502208,18.052661 L5.67804212,21.8414879 C4.48334142,22.4397237 3.08952393,21.243252 3.58731589,19.9470744 L5.77760051,14.2638342 L1.99438162,10.5747133 C0.998797707,9.67735963 1.59614806,7.98235815 2.98996554,7.98235815 L8.26656031,7.98235815 L10.5564033,2.89735372 C11.0541953,1.70088209 12.7466879,1.70088209 13.3440383,2.89735372 L15.6338813,7.98235815 L21.0100345,7.98235815 C22.4038519,7.98235815 23.0012023,9.67735963 22.0056184,10.5747133 L18.1228411,14.2638342 L20.3131257,19.9470744 C20.8109177,21.243252 19.4171002,22.4397237 18.1228411,21.7417819 L11.9502208,18.052661 Z"
    }), {
        size: 24,
        viewBox: "0 0 24 24"
    }),
    $g = wg(Vn.createElement("g", null, Vn.createElement("defs", null, Vn.createElement("linearGradient", {
        id: "idIK4UgTvmeg90634330",
        gradientTransform: "rotate(40, 0.5, 0.5)"
    }, Vn.createElement("stop", {
        offset: "0",
        stopColor: "hsl(250, 12%, 92%)",
        stopOpacity: "1"
    }), Vn.createElement("stop", {
        offset: "1",
        stopColor: "hsl(250, 9%, 59%)",
        stopOpacity: "1"
    }))), Vn.createElement("path", {
        d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10.909 3.636 C 10.591 2.79 9.394 2.79 9.076 3.636 L 7.784 7.285 L 4.361 7.285 L 4.249 7.291 C 3.413 7.379 3.06 8.455 3.735 9.015 L 6.276 11.134 L 4.983 14.585 L 4.95 14.685 C 4.728 15.52 5.655 16.235 6.417 15.757 L 10 13.518 L 13.584 15.758 L 13.675 15.81 C 14.449 16.193 15.335 15.427 15.018 14.585 L 13.724 11.134 L 16.266 9.015 L 16.348 8.939 C 16.935 8.336 16.517 7.285 15.64 7.285 L 12.216 7.285 Z",
        fill: "url(#idIK4UgTvmeg90634330)"
    })), {
        size: 20,
        viewBox: "0 0 20 20"
    }),
    Xg = wg(Vn.createElement("g", null, Vn.createElement("defs", null, Vn.createElement("linearGradient", {
        id: "idBSRHZgMrgg688673678",
        gradientTransform: "rotate(40, 0.5, 0.5)"
    }, Vn.createElement("stop", {
        offset: "0",
        stopColor: "hsl(0, 0%, 60%)",
        stopOpacity: "1"
    }), Vn.createElement("stop", {
        offset: "1",
        stopColor: "hsl(250, 3%, 27%)",
        stopOpacity: "1"
    }))), Vn.createElement("path", {
        d: "M 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 Z M 10.909 3.636 C 10.591 2.79 9.394 2.79 9.076 3.636 L 7.784 7.285 L 4.361 7.285 L 4.249 7.291 C 3.413 7.379 3.06 8.455 3.735 9.015 L 6.276 11.134 L 4.983 14.585 L 4.95 14.685 C 4.728 15.52 5.655 16.235 6.417 15.757 L 10 13.518 L 13.584 15.758 L 13.675 15.81 C 14.449 16.193 15.335 15.427 15.018 14.585 L 13.724 11.134 L 16.266 9.015 L 16.348 8.939 C 16.935 8.336 16.517 7.285 15.64 7.285 L 12.216 7.285 Z",
        fill: "url(#idBSRHZgMrgg688673678)"
    })), {
        size: 20,
        viewBox: "0 0 20 20"
    }),
    Jg = wg(Vn.createElement("path", {
        d: "M16.7071068,8.29289322 L22.7071068,14.2928932 C23.0976311,14.6834175 23.0976311,15.3165825 22.7071068,15.7071068 C22.3466228,16.0675907 21.7793918,16.0953203 21.3871006,15.7902954 L21.2928932,15.7071068 L17,11.414 L17,24 C17,24.5128358 16.6139598,24.9355072 16.1166211,24.9932723 L16,25 C15.4871642,25 15.0644928,24.6139598 15.0067277,24.1166211 L15,24 L15,11.414 L10.7071068,15.7071068 C10.3466228,16.0675907 9.77939176,16.0953203 9.38710056,15.7902954 L9.29289322,15.7071068 C8.93240926,15.3466228 8.90467972,14.7793918 9.20970461,14.3871006 L9.29289322,14.2928932 L15.2928932,8.29289322 C15.6533772,7.93240926 16.2206082,7.90467972 16.6128994,8.20970461 L16.7071068,8.29289322 Z"
    }), {
        size: 32,
        viewBox: "0 0 32 32"
    }),
    Qg = wg(Vn.createElement("path", {
        d: "M13,5 C12.6507226,4.06859359 11.3332476,4.06859359 10.9839702,5 L9.56169322,9.01297783 L5.79696151,9.01349048 L5.67401787,9.01991222 C4.75420744,9.11733992 4.36646985,10.2993421 5.10776433,10.9170875 L7.90379021,13.2470899 L6.48068437,17.042909 L6.44523523,17.1536211 C6.20111897,18.0716011 7.22009485,18.8583236 8.05927515,18.3338359 L11.999026,15.869591 L15.9407249,18.3338359 L16.0421972,18.3905562 C16.8934525,18.812035 17.8667879,17.9695016 17.5193156,17.042909 L16.0953383,13.2470899 L18.8922357,10.9170875 L18.9825725,10.8334476 C19.6268187,10.1697532 19.1679877,9.01349048 18.2030385,9.01349048 L14.4374353,9.01297783 L13,5 Z"
    }), {
        size: 24,
        viewBox: "0 0 24 24"
    }),
    eD = wg(Vn.createElement(Vn.Fragment, null, Vn.createElement("defs", null, Vn.createElement("linearGradient", {
        x1: "48.9819823%",
        y1: "6.00107933%",
        x2: "49.4888977%",
        y2: "91.4572449%",
        id: "linearGradient-1"
    }, Vn.createElement("stop", {
        stopColor: "#57D163",
        offset: "0%"
    }), Vn.createElement("stop", {
        stopColor: "#23B33A",
        offset: "100%"
    }))), Vn.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
    }, Vn.createElement("path", {
        d: "M7.0758182,19.5104961 L7.40855824,19.7067288 C8.8060664,20.532418 10.4084293,20.9691988 12.0425029,20.9699399 L12.0459271,20.9699399 C17.0641233,20.9699399 21.1481165,16.9050769 21.1502014,11.9089978 C21.151094,9.4879544 20.2049808,7.2112695 18.4860473,5.49867957 C16.7831208,3.79269401 14.4653823,2.8358817 12.0495002,2.84150949 C7.02743319,2.84150949 2.94329115,6.90595273 2.94149516,11.9017354 C2.93903134,13.6076528 3.42157674,15.2794351 4.33335546,16.7238136 L4.54997146,17.0664798 L3.63006063,20.4098467 L7.0758182,19.5104961 Z M1,23 L2.55412674,17.3510469 C1.59565677,15.69789 1.09141046,13.822415 1.09200597,11.9009944 C1.09453688,5.89010752 6.00807254,1 12.046076,1 C14.9761237,1.00148212 17.7263281,2.13663801 19.7946759,4.19722978 C21.8630237,6.25782155 23.0010393,8.99677976 23,11.9097389 C22.9973174,17.9201811 18.0830373,22.8111779 12.0459271,22.8111779 L12.0411631,22.8111779 C10.2080409,22.8104368 8.40677836,22.3526099 6.80679751,21.4840874 L1,23 Z",
        fill: "#B3B3B3",
        fillRule: "nonzero"
    }), Vn.createElement("path", {
        d: "M1,23 L2.55412689,17.3510469 C1.59400636,15.6938955 1.08968652,13.8140444 1.09200598,11.9009944 C1.09453689,5.89010752 6.00807303,1 12.0460771,1 C14.9761251,1.00148212 17.7263297,2.13663801 19.7946777,4.19722978 C21.8630257,6.25782155 23.0010414,8.99677976 23,11.9097389 C22.9973195,17.9201811 18.083039,22.8111779 12.0459282,22.8111779 L12.0411641,22.8111779 C10.2080418,22.8104368 8.40677908,22.3526099 6.80679808,21.4840874 L1,23 Z",
        fill: "#FFFFFF",
        fillRule: "nonzero"
    }), Vn.createElement("path", {
        d: "M12.0035143,3 C7.03906248,3 3.00177538,7.0356158 3,11.9959654 C2.99756444,13.6897834 3.47457388,15.3497085 4.37589231,16.7838426 L4.5900232,17.1240784 L3.68066596,20.4438793 L7.08703957,19.5507603 L7.41596228,19.7456012 C8.79743766,20.5654341 10.3814176,20.999117 11.9967445,21 L12.0001294,21 C16.9607548,21 20.9980419,16.9639674 21,12.0033235 C21.0075216,9.6151253 20.0591815,7.32317914 18.3663659,5.63847101 C16.6829644,3.944495 14.3917527,2.99441171 12.0035143,3 L12.0035143,3 Z",
        fill: "#000000",
        fillRule: "nonzero"
    }), Vn.createElement("path", {
        d: "M12.0035143,3 C7.03906248,3 3.00177538,7.03564906 3,11.9960392 C2.99756444,13.6898709 3.47457388,15.3498096 4.37589231,16.7839554 L4.5900232,17.1243411 L3.68066596,20.4440219 L7.08703957,19.5508956 L7.41596228,19.7457381 C8.79743766,20.5655777 10.3814176,20.999117 11.9967445,21 L12.0001294,21 C16.9607548,21 20.9980419,16.9639345 21,12.0032501 C21.0075216,9.61503244 20.0591815,7.32306758 18.3663659,5.63834571 C16.6829401,3.94440988 14.3917314,2.99437308 12.0035143,3 L12.0035143,3 Z",
        fill: "url(#linearGradient-1)",
        fillRule: "nonzero"
    }), Vn.createElement("path", {
        d: "M9.79681271,7.46450685 C9.59394883,7.02279965 9.38048539,7.01385295 9.18777943,7.00620497 L8.66898967,7 C8.48850265,7 8.19524805,7.06637874 7.94733602,7.33189368 C7.699424,7.59740863 7,8.23911785 7,9.54432584 C7,10.8495338 7.9698601,12.1107298 8.10500454,12.2879322 C8.24014898,12.4651345 9.97729973,15.2289431 12.7283282,16.2923016 C15.014448,17.1760046 15.4796511,17.0002453 15.976064,16.956089 C16.4724769,16.9119327 17.5773343,16.3143798 17.8027222,15.694893 C18.0281102,15.0754062 18.0282574,14.5446649 17.9606851,14.433697 C17.8931129,14.3227291 17.7126259,14.2567832 17.4417482,14.1240258 C17.1708704,13.9912683 15.8404779,13.3495591 15.5924187,13.2609579 C15.3443595,13.1723567 15.1640197,13.1283447 14.9833854,13.3938597 C14.8027512,13.6593746 14.2846975,14.2566389 14.1267346,14.433697 C13.9687716,14.6107551 13.8111031,14.6329775 13.5402254,14.5003643 C13.2693476,14.3677512 12.3978279,14.0875175 11.3637816,13.1837565 C10.5592452,12.4805748 10.0161648,11.6121678 9.85805463,11.3467971 C9.69994447,11.0814265 9.84127199,10.9377021 9.97700529,10.8055218 C10.0984586,10.6866173 10.2475886,10.4957063 10.3831747,10.3408707 C10.5187608,10.1860351 10.5633673,10.0753557 10.6534636,9.89858627 C10.7435599,9.72181681 10.6986589,9.56654828 10.6309395,9.43393511 C10.5632201,9.30132194 10.0373639,7.98933178 9.79681271,7.46465116",
        fill: "#FFFFFF"
    }))), {
        size: 24,
        viewBox: "0 0 24 24"
    });
var tD = {};
Object.defineProperty(tD, "__esModule", {
    value: !0
}), tD.linkify = void 0;
var nD = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    rD = sD(Vn),
    oD = sD(Ne),
    aD = sD(We),
    iD = sD(mc);

function sD(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function uD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function lD(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
var cD = tD.linkify = new oD.default;
cD.tlds(aD.default);
var dD = function(e) {
    function t() {
        var e, n, r;
        uD(this, t);
        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return n = r = lD(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), r.parseCounter = 0, lD(r, n)
    }
    return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(t, rD.default.Component), nD(t, [{
        key: "getMatches",
        value: function(e) {
            return cD.match(e)
        }
    }, {
        key: "parseString",
        value: function(e) {
            var n = this,
                r = [];
            if ("" === e) return r;
            var o = this.getMatches(e);
            if (!o) return e;
            var a = 0;
            return o.forEach((function(o, i) {
                o.index > a && r.push(e.substring(a, o.index));
                var s = {
                    href: o.url,
                    key: "parse" + n.parseCounter + "match" + i
                };
                for (var u in n.props.properties) {
                    var l = n.props.properties[u];
                    l === t.MATCH && (l = o.url), s[u] = l
                }
                r.push(rD.default.createElement(n.props.component, s, o.text)), a = o.lastIndex
            })), a < e.length && r.push(e.substring(a)), 1 === r.length ? r[0] : r
        }
    }, {
        key: "parse",
        value: function(e) {
            var t = this,
                n = e;
            return "string" == typeof e ? n = this.parseString(e) : rD.default.isValidElement(e) && "a" !== e.type && "button" !== e.type ? n = rD.default.cloneElement(e, {
                key: "parse" + ++this.parseCounter
            }, this.parse(e.props.children)) : e instanceof Array && (n = e.map((function(e) {
                return t.parse(e)
            }))), n
        }
    }, {
        key: "render",
        value: function() {
            this.parseCounter = 0;
            var e = this.parse(this.props.children);
            return rD.default.createElement("span", {
                className: this.props.className
            }, e)
        }
    }]), t
}();
dD.MATCH = "LINKIFY_MATCH", dD.propTypes = {
    className: iD.default.string,
    component: iD.default.any,
    properties: iD.default.object,
    urlRegex: iD.default.object,
    emailRegex: iD.default.object
}, dD.defaultProps = {
    className: "Linkify",
    component: "a",
    properties: {}
};
var pD = tD.default = dD;

function mD(e) {
    return mD.raw(e).split(" ").map((function(e) {
        return parseInt(e).toString(16)
    })).join(" ")
}
mD.raw = function(e) {
    if (1 === e.length) return e.charCodeAt(0).toString();
    if (e.length > 1) {
        for (var t = [], n = 0; n < e.length; n++) e.charCodeAt(n) >= 55296 && e.charCodeAt(n) <= 56319 ? e.charCodeAt(n + 1) >= 56320 && e.charCodeAt(n + 1) <= 57343 && t.push(1024 * (e.charCodeAt(n) - 55296) + (e.charCodeAt(n + 1) - 56320) + 65536) : (e.charCodeAt(n) < 55296 || e.charCodeAt(n) > 57343) && t.push(e.charCodeAt(n));
        return t.join(" ")
    }
    return ""
};
const fD = Hn(mD),
    hD = /\s/g,
    gD = () => null,
    DD = {
        name: "14c9nf6",
        styles: "width:1.75em;height:1.75em;margin:-1px;vertical-align:middle!important;display:inline!important"
    },
    vD = e => {
        let {
            emoji: t
        } = e;
        const n = fD(t).toUpperCase().replace(hD, "-");
        return Wi(Nm, {
            alt: t,
            css: DD,
            src: "https://cdn.livechat-static.com/api/file/lc/img/emoji-fallback/" + n + ".svg"
        }, gD)
    },
    bD = Vn.memo(vD);
const yD = Hn((function() {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]/g
    })),
    xD = () => new RegExp("(" + yD().source + ")");
var CD, ED, wD = {
    exports: {}
};
const FD = Hn(wD.exports = (CD = function(e) {
        return Array.prototype.toString.call(e)
    }, ED = function(e, t) {
        try {
            var n = document.createElement("canvas");
            n.width = 1, n.height = 1;
            var r = n.getContext("2d");
            return r.textBaseline = "top", r.font = "100px -no-font-family-here-", r.fillStyle = t, r.scale(.01, .01), r.fillText(e, 0, 0), r.getImageData(0, 0, 1, 1).data
        } catch (Am) {
            return !1
        }
    }, function(e) {
        var t = ED(e, "#000"),
            n = ED(e, "#fff");
        return t && n && function(e, t) {
            var n = CD(e);
            return n === CD(t) && "0,0,0,0" !== n
        }(t, n)
    })),
    kD = "msCrypto" in window,
    SD = xD(),
    LD = e => e.split(SD).map((e, t) => {
        return t % 2 == 1 && (n = e, kD || !FD(n)) ? Vn.createElement(bD, {
            key: t,
            emoji: e
        }) : e;
        var n
    }),
    TD = e => Vn.Children.map(e, e => {
        var t;
        return "string" == typeof e ? LD(e) : Vn.Children.count(null == e || null == (t = e.props) ? void 0 : t.children) ? Vn.cloneElement(e, void 0, TD(e.props.children)) : e
    }),
    PD = e => {
        let {
            children: t
        } = e;
        return "string" == typeof t ? LD(t) : t ? TD(t) : null
    },
    BD = Vn.memo(PD),
    AD = ["livechat-files.com", "join.zoho.in", "get.teamviewer.com", "lisiewski.com", "neat.no", "zalaczniki.play.pl", "uj.ac.za", "wpx.net"];
const MD = br((e, t) => e + ":" + t, (function(e, t) {
        if (!e) return e;
        try {
            const n = new URL(e);
            if (AD.some(e => n.host.includes(e))) return e;
            if (n.searchParams.toString().includes("utm_")) return e;
            const r = () => {
                try {
                    return t ? new URL(t).host : ""
                } catch {
                    return ""
                }
            };
            return n.searchParams.set("utm_medium", "chat"), n.searchParams.set("utm_campaign", "link-shared-in-chat"), n.searchParams.set("utm_source", "livechat.com"), n.searchParams.set("utm_content", r()), n.toString()
        } catch {
            return e
        }
    })),
    OD = e => e.stopPropagation(),
    ID = rm("a", {
        target: "ecc17ou0"
    })({
        name: "c5z5om",
        styles: "color:inherit;&:focus{outline-offset:-1px;}"
    }),
    _D = e => {
        let {
            href: t,
            ...n
        } = e;
        const r = gu(),
            o = So(e => e.getApplicationState("defaultWidget")),
            a = So(e => {
                var t;
                return null == (t = e.getApplicationState().page) ? void 0 : t.url
            }),
            i = So(e => e.getApplicationState().config.features.utmParams.enabled);
        return Vn.createElement(ID, ur({
            rel: "nofollow noopener",
            target: "_blank",
            textWrap: !0,
            href: "livechat" === o && i ? MD(t, a) : t
        }, n, {
            onClick: OD
        }, r))
    },
    zD = function(e) {
        return void 0 === e && (e = 3), Ui("-webkit-line-clamp:", e, ";-webkit-box-orient:vertical;-webkit-box-pack:center;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;")
    },
    RD = (e, t) => "light" === e ? Ue(.65, t) : He(.8, t),
    jD = (e, t) => "light" === e ? qe(.03, t, Ke[75]) : qe(.025, t, Ke[700]),
    ND = e => Ve(e) > .99;

function WD(e) {
    var t;
    const n = window.getComputedStyle(e),
        r = null != (t = e.textContent) ? t : "",
        o = n.fontWeight + " " + n.fontStyle + " " + n.fontSize + " " + n.fontFamily,
        a = document.createElement("canvas"),
        i = a.getContext("2d");
    if (!i) return a.remove(), 0;
    i.font = o;
    const s = i.measureText(r).width;
    return a.remove(), Math.ceil(s)
}
var VD, UD, HD;
const qD = Hi(UD || (UD = ug(["\n  0% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(270deg);\n  }\n"]))),
    KD = Hi(HD || (HD = ug(["\n  0% {\n    stroke-dasharray: 1 1000;\n  }\n 100% {\n    stroke-dasharray: 100 1000;\n  }\n"]))),
    GD = rm("circle", {
        target: "e5pj4iq3"
    })("animation-duration:1s;transform-origin:center;animation-name:", e => {
        return t = e.animationFactor, Hi(VD || (VD = ug(["\n  0% {\n    stroke-dasharray: ", " ", ";\n  }\n  50% {\n    stroke-dasharray: ", " ", ";\n  }\n  100% {\n    stroke-dasharray: ", " ", ";\n  }\n"])), 22 * t, 1e3 * t, 88 * t, 1e3 * t, 22 * t, 1e3 * t);
        var t
    }, ",", qD, ";animation-iteration-count:infinite;animation-timing-function:linear;"),
    ZD = rm("circle", {
        target: "e5pj4iq2"
    })("stroke-dasharray:130;transform-origin:center;transform:rotate(-90deg);transition:stroke-dashoffset 100ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.linear
    }, ";"),
    YD = rm("circle", {
        target: "e5pj4iq1"
    })("transform:rotate(-90deg);stroke-dasharray:1 100;animation-duration:", e => e.duration, "ms;animation-delay:", e => e.delay, "ms;transform-origin:center;animation-name:", KD, ";animation-timing-function:linear;animation-fill-mode:forwards;"),
    $D = {
        r: "28",
        cx: "32",
        cy: "32",
        fill: "none",
        strokeLinecap: "round"
    },
    XD = {
        small: {
            sideLength: 16,
            strokeWidth: 2
        },
        medium: {
            sideLength: 24,
            strokeWidth: 3
        },
        large: {
            sideLength: 32,
            strokeWidth: 4
        },
        xlarge: {
            sideLength: 56,
            strokeWidth: 4
        }
    },
    JD = rm("svg", {
        target: "e5pj4iq0"
    })(""),
    QD = e => {
        let {
            size: t,
            progress: n,
            strokeColor: r
        } = e;
        const {
            sideLength: o,
            strokeWidth: a
        } = XD[t];
        return void 0 === n ? Vn.createElement(GD, ur({}, $D, {
            strokeWidth: a,
            stroke: r,
            vectorEffect: "non-scaling-stroke",
            animationFactor: o / 56
        })) : "number" == typeof n ? Vn.createElement(ZD, ur({}, $D, {
            strokeWidth: a,
            stroke: r,
            vectorEffect: "non-scaling-stroke"
        })) : "auto" === n.type ? Vn.createElement(YD, ur({}, $D, {
            strokeWidth: a,
            stroke: r,
            vectorEffect: "non-scaling-stroke",
            duration: n.duration,
            delay: n.delay
        })) : null
    },
    ev = e => {
        let {
            size: t,
            useCurrentColor: n,
            adjustToColor: r,
            ariaLabel: o,
            progress: a,
            ...i
        } = e;
        const s = Ii(),
            u = ko(),
            l = r || s.colors.surface,
            c = Ge(l) ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)",
            {
                sideLength: d,
                strokeWidth: p
            } = XD[t],
            m = gu(),
            f = Vn.useMemo(() => {
                if (n) return "currentColor";
                const e = Ge(s.colors.cta) ? Ue(.6, s.colors.cta) : s.colors.cta;
                return Ge(l) ? e : s.colors.grayscale[0]
            }, [l, n, s.colors.cta, s.colors.grayscale]);
        return Vn.createElement(JD, ur({
            height: d + "px",
            width: d + "px",
            viewBox: "0 0 64 64",
            role: "img",
            "aria-live": "assertive",
            "aria-labelledby": "loader-label"
        }, i, m), Vn.createElement("title", {
            id: "loader-label"
        }, null != o ? o : u.localize("loading")), Vn.createElement("circle", ur({}, $D, {
            strokeWidth: p,
            stroke: c,
            vectorEffect: "non-scaling-stroke"
        })), Vn.createElement(QD, {
            progress: a,
            size: t,
            strokeColor: f
        }))
    },
    tv = e => Ui("color:", e.colors.disabledContrast, ";background-color:", e.colors.disabled, ";"),
    nv = (e, t, n) => e ? t.disabled : n,
    rv = rm("button", {
        displayType: "Button",
        target: "esv0owm2"
    })("font-size:inherit;font-weight:700;border:0;font-family:inherit;width:100%;max-width:320px;flex-shrink:0;cursor:pointer;display:flex;justify-content:center;align-items:center;outline-offset:2px;", e => {
        let {
            capitalize: t,
            textColor: n,
            backgroundColor: r,
            disabled: o,
            theme: {
                spaceBase: a,
                typography: i,
                borderRadius: s,
                colors: u,
                variant: l
            }
        } = e;
        return {
            borderRadius: s.md,
            ...i.basicContrast,
            fontWeight: "bold",
            padding: 1.5 * a + "px",
            color: n,
            backgroundColor: "" + nv(o, u, r),
            ...o ? {
                "&:hover": {
                    cursor: "default"
                }
            } : {},
            ...t ? {
                textTransform: "capitalize"
            } : {},
            ..."light" === l && ND(r) && {
                border: "1px solid " + u.grayscale[100]
            },
            ..."dark" === l && u.cta === u.surface && {
                border: "1px solid " + u.grayscale[600]
            }
        }
    }, " ", e => {
        let {
            disabled: t,
            theme: n
        } = e;
        return t && tv(n)
    }, ";"),
    ov = rm("span", {
        target: "esv0owm1"
    })("display:flex;", e => {
        let {
            theme: t
        } = e;
        return Ui("margin-", t.isRtl ? "right" : "left", ":0.5em;")
    }, ";"),
    av = rm("span", {
        target: "esv0owm0"
    })(""),
    iv = e => {
        let {
            children: t,
            destructive: n,
            disabled: r = !1,
            pending: o = !1,
            ...a
        } = e;
        const i = Ii(),
            s = n ? i.colors.error : i.colors.cta,
            u = n ? i.colors.errorContrast : i.colors.ctaText,
            l = gu();
        return Vn.createElement(rv, ur({}, l, a, {
            disabled: r || o,
            textColor: u,
            backgroundColor: s
        }), Vn.createElement(av, {
            ellipsis: !0
        }, t), o && Vn.createElement(ov, {
            "aria-hidden": !0
        }, Vn.createElement(ev, {
            size: "small",
            adjustToColor: i.colors.disabled,
            useCurrentColor: !0
        })))
    },
    sv = e => {
        let {
            color: t,
            backgroundColor: n,
            hoverBackgroundColor: r
        } = e;
        return Ui("color:", t, ";background-color:", n, ";&:hover{color:", t, ";background-color:", r, ";}")
    },
    uv = (e, t) => ND(t) ? Ue(.03, t) : Ge(e) ? Ue(.25, t) : Ze(.1, t),
    lv = (e, t) => "light" === e.variant && "primary" === t && ND(e.colors.cta) ? "1px solid " + e.colors.grayscale[100] : "dark" === e.variant && "primary" === t && e.colors.cta === e.colors.surface ? "1px solid " + e.colors.grayscale[600] : "none !important",
    cv = rm(dh, {
        target: "e1osmd0p1"
    })("padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";padding-bottom:", e => {
        let {
            theme: t
        } = e;
        return "calc(" + t.spaces.space3 + " + 1px)"
    }, ";overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border:", e => {
        let {
            theme: t,
            variant: n
        } = e;
        return lv(t, n)
    }, ";width:100%;display:block;outline-offset:2px;transition:background-color 300ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.smooth
    }, ";", e => {
        let {
            theme: t,
            variant: n,
            disabled: r
        } = e;
        return Ui(t.typography.input, ";font-weight:700;border-radius:", "modern" === t.name ? 4 : 6, "px!important;", (!n || "default" === n) && sv("light" === t.variant ? {
            color: RD("light", t.colors.cta),
            backgroundColor: jD("light", t.colors.cta),
            hoverBackgroundColor: Ue(.07, jD("light", t.colors.cta))
        } : {
            color: RD("dark", t.colors.cta),
            backgroundColor: jD("dark", t.colors.cta),
            hoverBackgroundColor: Ze(.03, jD("dark", t.colors.cta))
        }), " ", "primary" === n && sv({
            color: t.colors.ctaText,
            backgroundColor: t.colors.cta,
            hoverBackgroundColor: uv(t.colors.ctaText, t.colors.cta)
        }), " ", "danger" === n && sv({
            color: t.colors.errorContrast,
            backgroundColor: t.colors.error,
            hoverBackgroundColor: uv(t.colors.errorContrast, t.colors.error)
        }), " ", "secondary" === n && sv({
            color: t.colors.primaryTextColor,
            backgroundColor: t.colors.secondaryButtonBackground,
            hoverBackgroundColor: t.colors.secondaryButtonBackgroundHover
        }), " ", r && tv(t), ";")
    }, " &:hover{border:", e => {
        let {
            theme: t,
            variant: n
        } = e;
        return lv(t, n)
    }, ";cursor:pointer;}&[disabled]{pointer-events:none;}");
const dv = rm(dh, {
        target: "e1osmd0p0"
    })("padding:6px 4px;width:100%;height:32px;overflow:hidden;font-weight:400;white-space:nowrap;text-overflow:ellipsis;border:none;", e => {
        let {
            theme: t
        } = e;
        return sv({
            color: "light" === t.variant ? Ue(.6, t.colors.cta) : Ze(.2, t.colors.cta),
            backgroundColor: Ze(.02, t.colors.surfaceVariant),
            hoverBackgroundColor: Ze(.01, t.colors.surfaceVariant)
        })
    }, ";"),
    pv = {
        name: "1yjrpym",
        styles: "margin:0 5px;margin-bottom:10px;padding:8px;border-radius:6px!important"
    },
    mv = rm(Th, {
        target: "ecz5hmt0"
    })("font-family:inherit;font-size:0.9em;", e => {
        let {
            theme: t
        } = e;
        return Ui("color:", t.colors.primaryTextColor, ";border-color:", t.colors.cta, ";background-color:", t.colors.surface, ";box-shadow:0 5px 12px -3px ", Ye("dark" === t.variant ? .6 : .8, t.colors.cta), ";transition:box-shadow 0.1s ease-in,transform 0.1s ease-in;&:hover{box-shadow:0 5px 12px -3px ", Ye("dark" === t.variant ? .8 : .9, t.colors.cta), ";transform:scale(1.05);}&:disabled{cursor:not-allowed;transform:none;opacity:0.6;}")
    }, ";"),
    fv = e => e.stopPropagation(),
    hv = e => {
        let {
            replies: t,
            onSelect: n,
            disabled: r,
            ...o
        } = e;
        const a = gu();
        return Wi(Ah, ur({
            onSelect: n
        }, o, a), t.map((e, t) => {
            let {
                text: n
            } = e;
            return Wi(mv, {
                key: t,
                onClick: fv,
                value: t,
                css: pv,
                disabled: r
            }, Wi(BD, null, n.length > 20 ? n.slice(0, 20).trim() + "…" : n))
        }))
    },
    gv = rm("li", {
        target: "e52g9ij3"
    })("margin-bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";width:", e => {
        let {
            fullWidth: t
        } = e;
        return t ? "100%" : "auto"
    }, ";", e => {
        let {
            compact: t
        } = e;
        return t && Ui(pv, " padding:0;flex-grow:1;")
    }, ";"),
    Dv = rm("ul", {
        target: "e52g9ij2"
    })("list-style:none;display:flex;flex-direction:column;margin:0;padding:1em;", e => {
        let {
            compact: t,
            theme: n
        } = e;
        return t && Ui("flex:1;padding:", n.spaces.space3, ";flex-wrap:wrap;flex-direction:row;")
    }, " &>", gv, ":last-of-type{margin-bottom:0;}"),
    vv = rm("div", {
        target: "e52g9ij1"
    })("margin:0;padding:1em;", e => {
        let {
            compact: t,
            theme: n
        } = e;
        return t && Ui("padding:", n.spaces.space3, ";")
    }, ";"),
    bv = rm("div", {
        target: "e52g9ij0"
    })("margin-bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";", e => {
        let {
            compact: t
        } = e;
        return t && Ui(pv, " padding:0;")
    }, ";"),
    yv = rm("div", {
        target: "e7yhn050"
    })("background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";"),
    xv = rm(yv, {
        target: "ezxewqd1"
    })("display:flex;overflow:hidden;overflow-y:auto;flex-direction:column;width:230px;max-width:100%;margin-bottom:0.1em;", e => {
        let {
            theme: t
        } = e;
        return "smooth" === t.name ? Ui("box-shadow:", t.boxShadow.xs, ";") : Ui("border:1px solid ", t.colors.divider, ";")
    }, ";"),
    Cv = rm("div", {
        target: "ezxewqd0"
    })("display:flex;flex-direction:column;width:230px;min-width:0%;max-width:100%;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";", e => {
        let {
            narrow: t
        } = e;
        return t && {
            flex: 2
        }
    }, ";"),
    Ev = rm("div", {
        target: "eztkvdh2"
    })({
        name: "o30wb6",
        styles: "padding:1em;&:active{outline:none;}"
    }),
    wv = rm("h2", {
        target: "eztkvdh1"
    })({
        name: "yoe8zv",
        styles: "margin:0;margin-bottom:4px;font-size:1em;font-weight:400"
    }),
    Fv = rm("p", {
        target: "eztkvdh0"
    })("margin:0;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";"),
    kv = rm("div", {
        target: "epch3w90"
    })("padding:5px;margin-bottom:5px;text-align:center;border:1px solid ", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.sm
    }, ";"),
    Sv = {
        name: "idj2s4",
        styles: "object-fit:cover;width:100%;height:100%"
    },
    Lv = {
        name: "je8g23",
        styles: "pointer-events:none"
    },
    Tv = rm("div", {
        target: "ex5d4ma0"
    })("overflow:hidden;width:100%;min-height:150px;border-top-left-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.md
    }, ";border-top-right-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.md
    }, ";"),
    Pv = e => {
        let {
            url: t,
            link: n,
            alternativeText: r = ""
        } = e;
        const o = Wi(Tv, null, Wi(Nm, {
            alt: r,
            src: t,
            css: Sv
        }));
        return n ? Wi(_D, {
            href: n,
            css: Lv
        }, o) : o
    };
const Bv = {
        name: "1y4r7fy",
        styles: "padding-top:0.5em"
    },
    Av = {
        name: "1p6jvwd",
        styles: "padding-bottom:0.5em"
    },
    Mv = e => {
        let {
            card: t,
            onButtonClick: n = Un,
            onShowMoreButtonClick: r,
            TitleComponent: o = wv,
            ...a
        } = e;
        const i = gu(),
            s = Vn.useRef(null),
            {
                title: u,
                subtitle: l,
                image: c,
                buttons: d = []
            } = function(e) {
                return e.buttons ? { ...e,
                    buttons: e.buttons.map(e => {
                        switch (e.type) {
                            case "phone":
                                {
                                    const {
                                        type: t,
                                        value: n,
                                        role: r,
                                        ...o
                                    } = e;
                                    return { ...o,
                                        href: "tel:" + n,
                                        target: "_parent",
                                        variant: r
                                    }
                                }
                            case "url":
                                {
                                    const {
                                        type: t,
                                        value: n,
                                        role: r,
                                        target: o,
                                        ...a
                                    } = e;
                                    return "invitation" in e ? { ...a,
                                        variant: r
                                    } : { ...a,
                                        href: n,
                                        target: "current" === o ? "_parent" : "_blank",
                                        variant: r
                                    }
                                }
                            case "copy":
                                {
                                    const {
                                        type: t,
                                        value: n,
                                        role: r,
                                        ...o
                                    } = e;
                                    return { ...o,
                                        type: t,
                                        value: n,
                                        variant: r
                                    }
                                }
                            default:
                                {
                                    if ("value" in e) {
                                        const {
                                            type: t,
                                            value: n,
                                            role: r,
                                            ...o
                                        } = e;
                                        return { ...o,
                                            variant: r
                                        }
                                    }
                                    const {
                                        type: t,
                                        role: n,
                                        ...r
                                    } = e;
                                    return { ...r,
                                        variant: n
                                    }
                                }
                        }
                    })
                } : e
            }(t),
            p = u || l,
            m = !!r,
            f = m && d.length > 3,
            h = d.length > 1,
            g = h ? Dv : vv,
            D = h ? gv : bv,
            v = d.find(e => "copy" === e.type);
        return Wi(xv, ur({
            ref: s
        }, a), c && Wi(Pv, c), Wi(Cv, null, p && Wi(pD, {
            component: _D
        }, Wi(Ev, ur({
            css: [!$(d) && Av, ""]
        }, i), v && Wi(kv, {
            ellipsis: !0
        }, v.value), u && Wi(o, {
            textWrap: !0,
            preserveLines: !0
        }, Wi(BD, null, u)), l && Wi(Fv, {
            textWrap: !0,
            preserveLines: !0
        }, Wi(BD, null, l)))), !$(d) && Wi(g, {
            css: p && Bv,
            compact: !!r
        }, (f ? d.slice(0, 3) : d).map((e, t) => {
            let {
                text: r,
                type: o,
                value: a,
                ...i
            } = e;
            const s = r.length > 20 ? r.slice(0, 20).trim() + "…" : r;
            return Wi(D, {
                key: t,
                compact: m,
                fullWidth: "copy" === o
            }, Wi(Po, null, e => Wi(cv, ur({
                label: Wi(BD, null, s)
            }, i, m && {
                isFocusVisible: !0
            }, as({
                onPress: e => {
                    n(t, e)
                }
            }), "copy" === o && {
                "data-lc-action": "copy",
                "data-lc-action-value": a,
                "data-lc-action-success": e("copied") || "Copied!"
            }))))
        })), f && Wi(Po, null, e => Wi(dv, ur({
            label: e("show_more")
        }, as({
            onPress: () => null == r ? void 0 : r()
        }), m && {
            isFocusVisible: !0
        })))))
    },
    Ov = "overlay_portal_container",
    Iv = "tooltip_portal_container",
    _v = "rate-good-button",
    zv = "rate-bad-button",
    Rv = "start-chat-button",
    jv = "agent-bar",
    Nv = "modal",
    Wv = "minimize",
    Vv = "quick-replies-container",
    Uv = "privacy-policy-banner-close-button",
    Hv = (e, t) => t.getElementById(e),
    qv = e => {
        let {
            portalId: t = Ov,
            children: n
        } = e;
        const {
            document: r
        } = zc.useFrame(), [o, a] = Vn.useState(() => Hv(t, r));
        return Vn.useEffect(() => {
            const e = Hv(t, r);
            e && e !== o && a(e)
        }, [o, t, r]), o ? qn.createPortal(n, o) : null
    };
var Kv, Gv, Zv, Yv;
const $v = Hi(Kv || (Kv = ug(["\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n"]))),
    Xv = Hi(Gv || (Gv = ug(["\n\tfrom {\n\t\topacity: 0;\n\t\ttransform: translateY(-30px);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n"]))),
    Jv = Hi(Zv || (Zv = ug(["\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n"]))),
    Qv = Hi(Yv || (Yv = ug(["\n    from {\n        opacity: 1;\n        transform: translateY(0);\n    }\n    to {\n        opacity: 0;\n        transform: translateY(-30px);\n    }\n"]))),
    eb = e => {
        let {
            theme: t
        } = e;
        return Ui("width:40px;height:40px;background:white;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;color:#000000;box-shadow:", t.boxShadow.xl, ";&:hover{background:#ffffffcc;}&:focus{outline-style:auto;outline-offset:-1px;}")
    },
    tb = rm(Ng, {
        target: "e19xvutp6"
    })(eb, ";"),
    nb = rm(_D, {
        target: "e19xvutp5"
    })(eb, " text-decoration:none;&:visited{color:inherit;}"),
    rb = rm("div", {
        target: "e19xvutp4"
    })("position:fixed;top:0;left:0;width:100%;height:100%;background:#000000cc;display:flex;align-items:center;justify-content:center;z-index:2;outline:none;animation:", e => {
        let {
            shouldFadeOut: t
        } = e;
        return t ? Jv : $v
    }, " ", rr, "ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.linear
    }, ";"),
    ob = rm("div", {
        target: "e19xvutp3"
    })({
        name: "16xrca4",
        styles: "position:relative;display:flex;align-items:center;justify-content:center;max-width:100%;max-height:100%;cursor:auto"
    }),
    ab = rm("div", {
        target: "e19xvutp2"
    })({
        name: "lli6vz",
        styles: "width:100%;height:100%;display:flex;justify-content:center;align-items:center;position:fixed"
    }),
    ib = rm("img", {
        target: "e19xvutp1"
    })("min-width:300px;max-width:80vw;max-height:80vh;width:auto;height:auto;object-fit:contain;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.divider
    }, ";display:", e => {
        let {
            transitionState: t
        } = e;
        return "loading" === t ? "none" : "block"
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.lg
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.enormous
    }, ";animation:", e => {
        let {
            transitionState: t
        } = e;
        return "closing" === t ? Qv : Xv
    }, " ", or, "ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.sharp
    }, " ", ar, "ms both;"),
    sb = rm("div", {
        target: "e19xvutp0"
    })("position:absolute;bottom:calc(100% + 4px);right:0px;display:flex;gap:5px;animation:", e => {
        let {
            shouldSlideOut: t
        } = e;
        return t ? Qv : Xv
    }, " ", or, "ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.sharp
    }, " ", ar, "ms both;"),
    ub = () => {
        const e = ko(),
            {
                link: t,
                alt: n,
                name: r,
                state: o
            } = So(e => e.getApplicationState("lightbox")),
            a = is.static,
            i = e.localize,
            s = Wn.useCallback(() => {
                requestAnimationFrame(() => {
                    $e(e, {
                        state: "closing"
                    })
                })
            }, [e]),
            u = () => {
                "loading" === o && requestAnimationFrame(() => {
                    $e(e, {
                        state: "loaded"
                    })
                })
            };
        is(() => {
            if ("closing" === o) {
                const t = setTimeout(() => {
                    $e(e, {
                        state: "closed"
                    })
                }, rr);
                return () => {
                    clearTimeout(t)
                }
            }
        }, [o]), is(() => {
            const e = new Image;
            Xe() && t && (e.src = t, e.complete ? u() : e.onload = u)
        }, [t]), Wn.useEffect(() => {
            const e = e => {
                "Escape" === e.key && s()
            };
            return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
            }
        }, [s]);
        const l = Wn.createElement(rb, ur({
            shouldFadeOut: "closing" === o
        }, as({
            onClick: () => {
                s()
            }
        })), Wn.createElement(ob, null, "loading" === o ? Wn.createElement(ab, null, Wn.createElement(ev, {
            size: "xlarge"
        })) : Wn.createElement(Wn.Fragment, null, Wn.createElement(sb, {
            shouldSlideOut: "closing" === o
        }, Wn.createElement(nb, ur({
            "aria-label": i("open_image_in_new_tab"),
            href: t,
            target: "_blank",
            rel: "noopener noreferrer"
        }, as({
            onClick: e => e.stopPropagation()
        })), Wn.createElement(qg, {
            "aria-hidden": !0
        })), Wn.createElement(tb, ur({
            "aria-label": i("close_image_preview")
        }, as({
            onPress: s
        })), Wn.createElement(Tg, {
            "aria-hidden": !0
        })))), Wn.createElement(ib, ur({
            src: t,
            alt: n || r,
            transitionState: o
        }, as({
            onClick: e => {
                e.stopPropagation()
            },
            onLoad: u
        })))));
        return a ? l : Wn.createElement(qv, null, l)
    },
    lb = rm(Nm, {
        target: "e1f2pv4c1"
    })("width:100%;height:100%;object-fit:", e => {
        let {
            scaleImage: t
        } = e;
        return t ? "cover" : "fill"
    }, ";cursor:zoom-in;"),
    cb = rm("div", {
        displayName: "ImagePreview",
        target: "e1f2pv4c0"
    })("display:flex;margin:0 auto;align-items:center;justify-content:center;overflow:hidden;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.divider
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";", e => {
        let {
            withMargin: t
        } = e;
        return t && "margin-bottom: 0.1em;"
    }, " ", e => {
        let {
            dimensions: t
        } = e;
        return { ...t
        }
    }, ";"),
    db = e => {
        let {
            url: t,
            link: n,
            width: r,
            height: o,
            maxWidth: a,
            maxHeight: i,
            srcSet: s,
            alternativeText: u = "",
            name: l = "",
            withMargin: c = !1,
            ...d
        } = e;
        const p = ko(),
            m = So(e => e.getApplicationState("mobile")),
            f = So(e => e.getApplicationState("embedded")),
            {
                state: h
            } = So(e => e.getApplicationState("lightbox")),
            g = () => {
                requestAnimationFrame(() => {
                    $e(p, {
                        link: n || t,
                        name: l,
                        alt: u,
                        state: "loading"
                    })
                })
            },
            D = !!r || !!o,
            v = function(e) {
                let {
                    width: t = 230,
                    height: n = 150,
                    maxWidth: r = 200,
                    maxHeight: o = 300
                } = void 0 === e ? {} : e;
                const a = t / n;
                return t > r && (t = r, n = t / a), n > o && (n = o, t = n * a), {
                    width: t,
                    height: n
                }
            }({
                width: r,
                height: o,
                maxWidth: a,
                maxHeight: i
            });
        return Vn.createElement(Vn.Fragment, null, Vn.createElement(cb, {
            dimensions: v,
            withMargin: c,
            role: "button",
            tabIndex: 0,
            "aria-label": p.localize("open_image_preview"),
            onKeyDown: e => {
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), g())
            },
            onClick: g
        }, Vn.createElement(lb, ur({}, d, {
            alt: u || l,
            src: t,
            srcSet: s,
            scaleImage: !D
        }))), (!f || m) && "closed" !== h && Vn.createElement(ub, null))
    },
    pb = rm("div", {
        target: "e1faam643"
    })("position:relative;height:18.5px;margin-top:", e => {
        let {
            withMarginTop: t
        } = e;
        return t ? 6 : 0
    }, "px;transition:margin-top 200ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.swift
    }, ";transition-delay:300ms;will-change:margin-top;"),
    mb = rm("div", {
        target: "e1faam642"
    })("display:flex;flex-direction:row;align-items:center;position:absolute;white-space:nowrap;overflow:visible;", e => {
        let {
            side: t
        } = e;
        return Ui(t, ":0;")
    }, ";"),
    fb = rm("span", {
        target: "e1faam641"
    })(e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";"),
    hb = rm("button", {
        target: "e1faam640"
    })("background:none;border:none;cursor:pointer;appearance:none;", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.cta
    }, ";"),
    gb = e => {
        let {
            visible: t,
            onToggle: n,
            withMarginTop: r,
            side: o
        } = e;
        const a = gu();
        return Vn.createElement(pb, {
            withMarginTop: r
        }, Vn.createElement(mb, {
            side: o
        }, t && Vn.createElement(fb, null, "Text translated"), Vn.createElement(hb, ur({}, a, {
            onClick: e => {
                e.stopPropagation(), n()
            }
        }), t ? "Show original" : "Show translation")))
    },
    Db = e => {
        let {
            text: t,
            children: n,
            setIsAnimating: r
        } = e;
        const [o, a] = Vn.useState(""), i = Vn.useRef(""), s = Vn.useRef(null);
        return Vn.useEffect(() => (s.current && clearInterval(s.current), r(!0), s.current = setInterval(() => {
            const e = i.current;
            if (e.length < t.length) {
                const n = e + t[e.length];
                i.current = n, a(n)
            } else s.current && (clearInterval(s.current), s.current = null), r(!1)
        }, 3), () => {
            s.current && (clearInterval(s.current), r(!1))
        }), [t, r]), Wi(Vn.Fragment, null, n(o))
    },
    vb = e => e.stopPropagation(),
    bb = {
        name: "opde7s",
        styles: "color:inherit"
    },
    yb = rm("div", {
        target: "e4c3y4j0"
    })({
        name: "1ohivhk",
        styles: "ul,ol{margin:8px 0;display:inline-block;white-space:normal;width:100%;padding-left:24px;}"
    }),
    xb = e => {
        let {
            children: t,
            href: n,
            ...r
        } = e;
        const o = So(e => Je(e, n)),
            a = So(e => e.getApplicationState().defaultWidget),
            i = So(e => {
                var t;
                return null == (t = e.getApplicationState().page) ? void 0 : t.url
            }),
            s = So(e => e.getApplicationState().config.features.utmParams.enabled);
        return Wi("a", ur({}, r, {
            href: "livechat" === a && s ? MD(n, i) : n,
            onClick: vb,
            css: bb,
            rel: "nofollow noopener",
            target: o
        }), t)
    },
    Cb = e => {
        let {
            text: t,
            url: n,
            eventId: r,
            shouldUseMarkdown: o = !1,
            isStreamingPreview: a = !1,
            scrollToBottom: i
        } = e;
        const [s, u] = Vn.useState(!1), l = Vn.useCallback(e => {
            u(e), e || "function" != typeof i || i()
        }, [i]), c = e => o ? Wi(yb, null, Wi(Qe, {
            root: {
                component: BD
            },
            template: e,
            linkComponent: xb
        })) : Wi(pD, {
            component: xb
        }, Wi(BD, null, e)), d = a || s ? Wi(Db, {
            text: t,
            setIsAnimating: l
        }, e => c(e)) : c(t);
        return Wi(jf, r ? {
            id: r
        } : {}, n ? Wi(xb, {
            href: n
        }, t) : Wi(Vn.Fragment, null, d))
    },
    Eb = e => "smooth" === e.name ? Ui("color:", e.colors.primaryTextColor, ";background-color:", e.colors.surfaceDecorative, ";") : Ui("color:", e.colors.secondaryTextColor, ";"),
    wb = {
        name: "1jwcxx3",
        styles: "font-style:italic"
    },
    Fb = e => Ui("pre{margin:", e.spaces.space1, " ", e.spaces.space0, ";display:inline-block;white-space:pre-wrap;background-color:", e.colors.codeBlockBackgroundColor, ";border-radius:", e.borderRadius.sm, ";padding:", e.spaces.space3, ";}code{", e.typography.code, ";color:inherit;background-color:", e.colors.codeBlockBackgroundColor, ";border-radius:", e.borderRadius.sm, ";padding:", e.spaces.space0, " ", e.spaces.space1, ";}"),
    kb = e => {
        let {
            text: t,
            url: n,
            translation: r,
            reaction: o,
            formatting: a,
            radiusType: i = "single",
            draft: s = !1,
            own: u = !1,
            eventId: l = "",
            isStreamingPreview: c = !1,
            scrollToBottom: d
        } = e;
        const p = Ii(),
            [m, f] = Tp(!u),
            h = "modern" === p.name,
            g = p.isRtl ? "left" : "right",
            D = p.isRtl ? "right" : "left",
            v = u && !h ? g : D;
        return Wi(Vn.Fragment, null, Wi(tf, {
            radiusType: i,
            css: [s && Eb(p), !!r && m && wb, Fb(p), ""]
        }, Wi(Cb, {
            text: r && m ? r.targetMessage : t,
            url: n,
            eventId: l,
            shouldUseMarkdown: !u && "commonmark" === a,
            isStreamingPreview: c,
            scrollToBottom: d
        })), r && Wi(gb, {
            visible: m,
            onToggle: f,
            side: v,
            withMarginTop: !!o && !h
        }))
    },
    Sb = rm("div", {
        target: "erkouar1"
    })({
        name: "olzfrd",
        styles: "max-width:300px;max-height:300px"
    }),
    Lb = rm("img", {
        target: "erkouar0"
    })({
        name: "14j4j9s",
        styles: "display:block;width:auto;height:auto;max-width:100%;max-height:100%"
    }),
    Tb = e => {
        let {
            url: t,
            name: n
        } = e;
        return Vn.createElement(Sb, null, Vn.createElement(Lb, {
            alt: n,
            src: t
        }))
    },
    Pb = {
        spaceBase: 8,
        typography: ra,
        colors: et,
        transitions: qo,
        borderRadius: tt,
        boxShadow: Ro,
        spaces: Ho
    };
var Bb;
const Ab = Hi(Bb || (Bb = ug(["\n\t100% {\n\t\topacity: 0.3;\n\t}\n"])));
var Mb, Ob;
(new Date).toISOString();
const Ib = Hi(Ob || (Ob = ug(["\n\t0% {\n\t\ttransform: scale(0);\n\t}\n\n\t100% {\n\t\ttransform: scale(1);\n\t}\n"]))),
    _b = rm("div", {
        target: "eyqxlol0"
    })("display:flex;align-items:center;justify-content:center;width:auto;min-width:1.5em;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";padding:0 4px;flex-shrink:0;background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.notification
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.notificationContrast
    }, ";height:1.5em;line-height:1.5em;text-align:center;font-size:0.8em;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.xs
    }, ";font-weight:bold;", e => {
        let {
            animated: t,
            theme: n,
            minScale: r,
            maxScale: o,
            animationKind: a = "spring"
        } = e;
        return !nr && t && ("spring" === a ? Ui("animation-name:", function(e, t) {
            return void 0 === e && (e = 0), void 0 === t && (t = 1.3), Hi(Mb || (Mb = ug(["\n\t0% {\n\t\ttransform: scale(", ");\n\t}\n\n\t25% {\n\t\ttransform: scale(", ");\n\t}\n\n\t50% {\n\t\ttransform: scale(", ");\n\t}\n\n\t100% {\n\t\ttransform: scale(1.0);\n\t}\n"])), e, e, t)
        }(r, o), ";animation-duration:0.625s;animation-timing-function:", n.transitions.easings.spring, ";") : Ui("animation-name:", Ib, ";animation-duration:0.15s;animation-timing-function:", n.transitions.easings.swift, ";"))
    }, ";");
const zb = 1500;
let Rb = {},
    jb = 0,
    Nb = !1,
    Wb = null,
    Vb = null;

function Ub(e) {
    void 0 === e && (e = {});
    let {
        delay: t = zb
    } = e, {
        isOpen: n,
        open: r,
        close: o
    } = function(e) {
        let [t, n] = ss(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
        return {
            isOpen: t,
            open() {
                n(!0)
            },
            close() {
                n(!1)
            },
            toggle() {
                n(!t)
            }
        }
    }(e), a = Vn.useMemo(() => "" + ++jb, []), i = Vn.useRef(), s = () => {
        Rb[a] = c
    }, u = () => {
        for (let e in Rb) e !== a && (Rb[e](!0), delete Rb[e])
    }, l = () => {
        clearTimeout(i.current), i.current = null, u(), s(), Nb = !0, r(), Wb && (clearTimeout(Wb), Wb = null), Vb && (clearTimeout(Vb), Vb = null)
    }, c = e => {
        e ? (clearTimeout(i.current), i.current = null, o()) : i.current || (i.current = setTimeout(() => {
            i.current = null, o()
        }, 500)), Wb && (clearTimeout(Wb), Wb = null), Nb && (Vb && clearTimeout(Vb), Vb = setTimeout(() => {
            delete Rb[a], Vb = null, Nb = !1
        }, 500))
    };
    return Vn.useEffect(() => () => {
        clearTimeout(i.current), Rb[a] && delete Rb[a]
    }, [a]), {
        isOpen: n,
        open: e => {
            !e && t > 0 && !i.current ? (u(), s(), n || Wb || Nb ? n || l() : Wb = setTimeout(() => {
                Wb = null, Nb = !0, l()
            }, t)) : l()
        },
        close: c
    }
}
const Hb = rm("div", {
        displayName: "Tooltip",
        target: "ezqijrk2"
    })("display:inline-block;background-color:", e => {
        let {
            theme: t,
            kind: n
        } = e;
        return t.colors[n + "Surface"]
    }, ";color:", e => {
        let {
            theme: t,
            kind: n
        } = e;
        return "hint" === n ? t.colors.grayscale[0] : t.colors.primaryTextColor
    }, ";padding:1em;position:fixed;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.lg
    }, ";z-index:9;font-size:0.8em;font-weight:normal;margin-top:0.5em;margin-bottom:0.5em;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.floating
    }, ";transition:", e => {
        let {
            theme: t
        } = e;
        return "opacity 200ms " + t.transitions.easings.swift + ", transform 300ms " + t.transitions.easings.swift
    }, ";", e => {
        let {
            position: t
        } = e;
        return {
            left: t.left ? t.left - 10 + "px" : "auto",
            right: t.right ? t.right - 10 + "px" : "auto",
            top: t.top ? t.top + "px" : "auto",
            bottom: t.bottom ? t.bottom : "auto",
            marginRight: t.right ? 0 : "10px",
            marginLeft: t.left ? 0 : "10px"
        }
    }, ";"),
    qb = rm("svg", {
        displayName: "TooltipArrow",
        target: "ezqijrk1"
    })("position:absolute;fill:", e => {
        let {
            theme: t,
            kind: n
        } = e;
        return t.colors[n + "Surface"]
    }, ";margin-top:-1.5em;margin-bottom:-1.5em;", e => {
        let {
            position: t,
            horizontalFactor: n,
            placement: r = "top",
            theme: o
        } = e;
        return {
            left: t.left ? n - 10 + ("modern" === o.name ? 3 : -1) + "px" : "auto",
            right: t.right ? n - 10 + ("modern" === o.name ? 3 : -1) + "px" : "auto",
            ..."bottom" === r ? {
                top: 0
            } : {
                bottom: 0,
                transform: "rotate(180deg)"
            }
        }
    }, ";"),
    Kb = rm("div", {
        target: "ezqijrk0"
    })({
        name: "bjn8wh",
        styles: "position:relative"
    }),
    Gb = (e, t, n) => {
        const {
            left: r,
            right: o,
            bottom: a,
            top: i
        } = e.getBoundingClientRect(), {
            innerWidth: s,
            innerHeight: u,
            pageXOffset: l,
            pageYOffset: c
        } = n.window;
        return { ..."top" === t ? {
                bottom: u - (i + c)
            } : {
                top: a + c
            },
            ...r + l > s / 2 ? {
                right: s - (o + l)
            } : {
                left: r + l
            }
        }
    },
    Zb = {
        position: {
            top: 0,
            left: 0
        },
        targetWidth: 0
    };

function Yb(e) {
    let {
        children: t,
        description: n,
        allowTouch: r,
        controlsRef: o,
        animated: a = !1,
        placement: i = "bottom",
        trigger: s = "hover",
        onOpenChange: u = Un,
        kind: l = "hint",
        ...c
    } = e;
    const d = Vn.useRef(null);
    ! function() {
        const {
            window: e,
            document: t
        } = vs();
        mu(e, t);
        let [n, r] = Vn.useState(ru);
        Vn.useEffect(() => {
            let e = () => {
                r(ru)
            };
            return ou.add(e), () => {
                ou.delete(e)
            }
        }, [])
    }();
    const p = Vn.useRef(null),
        m = Vn.useRef(!1),
        [f, h] = Vn.useState(Zb),
        [g, D] = Vn.useState(!1),
        {
            isFocusVisible: v,
            focusProps: b
        } = nh(),
        [y, x] = Vn.useState(v),
        C = zc.useFrame();
    Vn.useEffect(() => {
        if (x(v), v) {
            const e = e => {
                "Escape" === e.key && x(!1)
            };
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
        }
    }, [v]);
    const E = Ub({
        isDisabled: v,
        onOpenChange: e => {
            if (!p.current) return;
            a && requestAnimationFrame(() => D(e));
            const t = () => {
                u(e, m.current), m.current = !1
            };
            e ? (h({
                position: Gb(p.current, i, C),
                targetWidth: p.current.offsetWidth
            }), requestAnimationFrame(t)) : t()
        },
        ...c
    });
    null != o && o.current && (o.current = {
        open: () => {
            m.current = !0, E.open(!0)
        },
        close: () => {
            m.current = !0, E.close(!0)
        }
    });
    const {
        tooltipProps: w,
        triggerProps: F
    } = function(e, t, n) {
        let {
            isDisabled: r,
            trigger: o
        } = e, a = bs(), i = Vn.useRef(!1), s = Vn.useRef(!1);
        const {
            document: u
        } = vs();
        let l = () => {
                (i.current || s.current) && t.open(s.current)
            },
            c = e => {
                i.current || s.current || t.close(e)
            };
        Vn.useEffect(() => {
            let e = e => {
                n && n.current && "Escape" === e.key && t.close(!0)
            };
            if (t.isOpen) return u.addEventListener("keydown", e, !0), () => {
                u.removeEventListener("keydown", e, !0)
            }
        }, [n, t]);
        let {
            hoverProps: d
        } = Eu({
            isDisabled: r,
            onHoverStart: () => {
                "focus" !== o && ("pointer" === hu() ? i.current = !0 : i.current = !1, l())
            },
            onHoverEnd: () => {
                "focus" !== o && (s.current = !1, i.current = !1, c())
            }
        }), {
            pressProps: p
        } = Zs({
            onPressStart: () => {
                s.current = !1, i.current = !1, c(!0)
            }
        }), {
            focusableProps: m
        } = ih({
            isDisabled: r,
            onFocus: () => {
                fu() && (s.current = !0, l())
            },
            onBlur: () => {
                s.current = !1, i.current = !1, c(!0)
            }
        }, n);
        return {
            triggerProps: Fe({
                "aria-describedby": t.isOpen ? a : void 0
            }, Es(m, d, p)),
            tooltipProps: {
                id: a
            }
        }
    }(c, E, p), {
        tooltipProps: k
    } = function(e, t) {
        let n = Ss(e, {
                labelable: !0
            }),
            {
                hoverProps: r
            } = Eu({
                onHoverStart: () => null == t ? void 0 : t.open(!0),
                onHoverEnd: () => null == t ? void 0 : t.close()
            });
        return {
            tooltipProps: Es(n, r, {
                role: "tooltip"
            })
        }
    }(w, E), {
        pressProps: S
    } = Zs({
        onPress: () => {
            E.open(!0)
        }
    });
    return bd(d, e => {
        p.current.contains(e.target) || E.close(!0)
    }, C), c.isDisabled && E.isOpen && E.close(), Vn.createElement(ah, ur({}, "press" === s ? S : Es(F, r ? S : b), {
        ref: p
    }), t, (E.isOpen || y) && Vn.createElement(qv, {
        portalId: "tooltip_portal_container"
    }, Vn.createElement(Hb, ur({
        ref: d,
        position: f.position,
        kind: l
    }, "hover" === s && k, a && {
        style: {
            opacity: (L = g) ? 1 : 0,
            transform: "translateY(" + (L ? 0 : 8) + "px)"
        }
    }), Vn.createElement(Kb, null, Vn.createElement(qb, {
        placement: i,
        kind: l,
        horizontalFactor: f.targetWidth / 2,
        height: "10",
        position: f.position,
        width: "16"
    }, Vn.createElement("polygon", {
        points: "0,10 16,10 8,0"
    })), n))));
    var L
}
var $b = {
    name: "jwdjdb",
    styles: "transform:scale(1.1)"
};
const Xb = rm(Ng, {
        target: "ea5qvgz0"
    })("border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";", e => {
        let {
            size: t
        } = e;
        return t && Ui("width:", t, "px;height:", t, "px;")
    }, " ", e => {
        let {
            withBackground: t,
            theme: n
        } = e;
        return Ui("background-color:", t ? n.colors.background : "transparent", ";transition:transform 200ms ", n.transitions.easings.swift, ",background-color 200ms ", n.transitions.easings.swift, ";")
    }, " &:hover{", e => {
        let {
            withBackground: t,
            theme: n
        } = e;
        return t ? $b : Ui("background-color:", n.colors.lighterOppositeTitleBarColor, ";")
    }, ";}"),
    Jb = e => {
        let {
            iconColor: t,
            onPress: n,
            withBackground: r,
            size: o,
            ...a
        } = e;
        const i = ko(),
            s = fg(),
            u = Ce(),
            l = Vn.useRef(null),
            c = Ap("is-minimize-button-focused"),
            {
                focusProps: d
            } = nu({
                onFocusChange: c.set
            }),
            {
                interactionModality: p
            } = i.getApplicationState("visibility") || {},
            m = c.get() && "keyboard" === p;
        return Vn.createElement(Yb, {
            description: i.localize("embedded_minimize_window")
        }, Vn.createElement(Xb, ur({
            ref: l,
            onPress: null != n ? n : () => {
                s && u || (nt() ? i.emit("mobile_wrapper_minimize_intent") : rt(i))
            },
            "aria-label": i.localize("embedded_minimize_window"),
            withBackground: r,
            id: "minimize",
            size: o
        }, m && {
            autoFocus: !0
        }, Es(d, a)), Vn.createElement(Hg, ur({
            "aria-hidden": !0
        }, t && {
            color: t
        }))))
    },
    Qb = rm("h2", {
        target: "e5gms8x0"
    })("flex-grow:1;flex-basis:100%;font-weight:700;font-size:14px;margin:0 8px;", e => {
        let {
            theme: t
        } = e;
        return t.typography.heading
    }, ";"),
    ey = rm(bm, {
        target: "e1txcupw0"
    })({
        name: "dyzzbf",
        styles: "padding:0 0.8em;height:48px;display:flex;align-items:center"
    });
var ty;
const ny = 100,
    ry = 999,
    oy = e => ({
        enter: 300,
        exit: e + 300
    }),
    ay = e => "light" === e ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.7)",
    iy = (e, t, n, r) => e(ty || (ty = ug(["\n\t&-enter,\n\t&-appear {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t}\n\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tbackground-color: ", ";\n\t\ttransition: background-color ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\tbackground-color: ", ";\n\t}\n\n\t&-exit-active,\n\t&-exit-done {\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\ttransition: background-color ", "ms ", ";\n\t\ttransition-delay: ", "ms;\n\t}\n"])), r ? n.colors.widgetBackground : ay(n.variant), 300, n.transitions.easings.smooth, r ? n.colors.widgetBackground : ay(n.variant), 300, n.transitions.easings.smooth, t),
    sy = e => {
        let {
            zIndex: t
        } = e;
        return Ui("z-index:", t, ";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;")
    },
    uy = e => {
        let {
            zIndex: t,
            ...n
        } = e;
        const r = Vn.useRef(null);
        return yp("touchmove", r), Wi("div", ur({
            ref: r,
            css: sy({
                zIndex: t
            })
        }, n))
    },
    ly = e => {
        let {
            shown: t,
            fullCover: n = !1,
            onPress: r,
            exitDelay: o = ny,
            zIndex: a = ry
        } = e;
        const {
            pressProps: i
        } = Zs({
            onPress: r
        });
        return Wi(Gi, null, e => {
            let {
                css: r,
                theme: s
            } = e;
            return Wi(vm, {
                appear: !0,
                component: null
            }, t && Wi(mm, {
                classNames: iy(r, o, s, n),
                timeout: oy(o)
            }, Wi(uy, ur({
                zIndex: a
            }, i))))
        })
    },
    cy = Vn.memo(ly);
var dy;
const py = function(e, t, n) {
        return void 0 === n && (n = {
            x: 50,
            y: 200,
            width: 200,
            height: 50
        }), e(dy || (dy = ug(["\n\t&-enter,\n\t&-appear {\n\t\tclip-path: inset(\n\t\t\t", "px ", "px ", "px ", "px round 16px\n\t\t);\n\t}\n\t&-enter-active,\n\t&-appear-active,\n\t&-enter-done,\n\t&-appear-done {\n\t\tclip-path: inset(0% 0% 0% 0% round 16px);\n\t\ttransition: clip-path ", "ms ", ";\n\t}\n\n\t&-exit {\n\t\tclip-path: inset(0% 0% 0% 0% round 16px);\n\t\topacity: 1;\n\t}\n\n\t&-exit-active {\n\t\tclip-path: inset(\n\t\t\t", "px ", "px ", "px ", "px round 16px\n\t\t);\n\t\topacity: 0;\n\t\ttransition: clip-path ", "ms ", ",\n\t\t\topacity ", "ms ", ";\n\t}\n"])), n.y, n.x, window.innerHeight - 100 - n.y - n.height, n.x, 400, t.transitions.easings.swift, n.y, n.x, window.innerHeight - 100 - n.y - n.height, n.x, 400, t.transitions.easings.swift, 400, t.transitions.easings.swift)
    },
    my = e => {
        let {
            show: t,
            onTransitionStart: n,
            onTransitionEnd: r,
            children: o,
            nodeRef: a,
            target: i
        } = e;
        return Vn.createElement(Gi, null, e => {
            let {
                css: s,
                theme: u
            } = e;
            return Vn.createElement(vm, {
                appear: !0,
                component: null
            }, t && Vn.createElement(mm, {
                timeout: 400,
                onExited: r,
                onEntered: r,
                onExiting: n,
                onEntering: n,
                classNames: py(s, u, i),
                nodeRef: a
            }, o))
        })
    };

function fy(e, t) {
    return n = t, r = function(t) {
        return e.forEach((function(e) {
            return function(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
        }))
    }, (o = Vn.useState((function() {
        return {
            value: n,
            callback: r,
            facade: {
                get current() {
                    return o.value
                },
                set current(e) {
                    var t = o.value;
                    t !== e && (o.value = e, o.callback(e, t))
                }
            }
        }
    }))[0]).callback = r, o.facade;
    var n, r, o
}
var hy = {
        width: "1px",
        height: "0px",
        padding: 0,
        overflow: "hidden",
        position: "fixed",
        top: "1px",
        left: "1px"
    },
    gy = function() {
        return (gy = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Dy(e) {
    return e
}

function vy(e, t) {
    void 0 === t && (t = Dy);
    var n = [],
        r = !1;
    return {
        read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
                function() {
                    n = n.filter((function(e) {
                        return e !== o
                    }))
                }
        },
        assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
                var t = n;
                n = [], t.forEach(e)
            }
            n = {
                push: function(t) {
                    return e(t)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
                var o = n;
                n = [], o.forEach(e), t = n
            }
            var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                },
                i = function() {
                    return Promise.resolve().then(a)
                };
            i(), n = {
                push: function(e) {
                    t.push(e), i()
                },
                filter: function(e) {
                    return t = t.filter(e), n
                }
            }
        }
    }
}

function by(e, t) {
    return void 0 === t && (t = Dy), vy(e, t)
}
var yy = by({}, (function(e) {
        return {
            target: e.target,
            currentTarget: e.currentTarget
        }
    })),
    xy = by(),
    Cy = by(),
    Ey = function(e) {
        void 0 === e && (e = {});
        var t = vy(null);
        return t.options = gy({
            async: !0,
            ssr: !1
        }, e), t
    }({
        async: !0
    }),
    wy = [],
    Fy = Vn.forwardRef((function(e, t) {
        var n, r = Vn.useState(),
            o = r[0],
            a = r[1],
            i = Vn.useRef(),
            s = Vn.useRef(!1),
            u = Vn.useRef(null),
            l = e.children,
            c = e.disabled,
            d = e.noFocusGuards,
            p = e.persistentFocus,
            m = e.crossFrame,
            f = e.autoFocus;
        e.allowTextSelection;
        var h = e.group,
            g = e.className,
            D = e.whiteList,
            v = e.shards,
            b = void 0 === v ? wy : v,
            y = e.as,
            x = void 0 === y ? "div" : y,
            C = e.lockProps,
            E = void 0 === C ? {} : C,
            w = e.sideCar,
            F = e.returnFocus,
            k = e.onActivation,
            S = e.onDeactivation,
            L = Vn.useState({})[0],
            T = Vn.useCallback((function() {
                u.current = u.current || document && document.activeElement, i.current && k && k(i.current), s.current = !0
            }), [k]),
            P = Vn.useCallback((function() {
                s.current = !1, S && S(i.current)
            }), [S]),
            B = Vn.useCallback((function(e) {
                var t = u.current;
                if (Boolean(F) && t && t.focus) {
                    var n = "object" == typeof F ? F : void 0;
                    u.current = null, e ? Promise.resolve().then((function() {
                        return t.focus(n)
                    })) : t.focus(n)
                }
            }), [F]),
            A = Vn.useCallback((function(e) {
                s.current && yy.useMedium(e)
            }), []),
            M = xy.useMedium,
            O = Vn.useCallback((function(e) {
                i.current !== e && (i.current = e, a(e))
            }), []),
            I = Fe(((n = {})["data-focus-lock-disabled"] = c && "disabled", n["data-focus-lock"] = h, n), E),
            _ = !0 !== d,
            z = _ && "tail" !== d,
            R = fy([t, O]);
        return Vn.createElement(Vn.Fragment, null, _ && [Vn.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: c ? -1 : 0,
            style: hy
        }), Vn.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: c ? -1 : 1,
            style: hy
        })], !c && Vn.createElement(w, {
            id: L,
            sideCar: Ey,
            observed: o,
            disabled: c,
            persistentFocus: p,
            crossFrame: m,
            autoFocus: f,
            whiteList: D,
            shards: b,
            onActivation: T,
            onDeactivation: P,
            returnFocus: B
        }), Vn.createElement(x, Fe({
            ref: R
        }, I, {
            className: g,
            onBlur: M,
            onFocus: A
        }), l), z && Vn.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: c ? -1 : 0,
            style: hy
        }))
    }));
Fy.propTypes = {}, Fy.defaultProps = {
    children: void 0,
    disabled: !1,
    returnFocus: !1,
    noFocusGuards: !1,
    autoFocus: !0,
    persistentFocus: !1,
    crossFrame: !0,
    allowTextSelection: void 0,
    group: void 0,
    className: void 0,
    whiteList: void 0,
    shards: void 0,
    as: "div",
    lockProps: {},
    onActivation: void 0,
    onDeactivation: void 0
};
var ky = function(e) {
        for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
        return t
    },
    Sy = function(e) {
        return Array.isArray(e) ? e : [e]
    },
    Ly = function(e) {
        return e.parentNode ? Ly(e.parentNode) : e
    },
    Ty = function(e) {
        return Sy(e).filter(Boolean).reduce((function(e, t) {
            var n = t.getAttribute("data-focus-lock");
            return e.push.apply(e, n ? function(e) {
                for (var t = new Set, n = e.length, r = 0; r < n; r += 1)
                    for (var o = r + 1; o < n; o += 1) {
                        var a = e[r].compareDocumentPosition(e[o]);
                        (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r)
                    }
                return e.filter((function(e, n) {
                    return !t.has(n)
                }))
            }(ky(Ly(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([data-focus-lock-disabled="disabled"])'))) : [t]), e
        }), [])
    },
    Py = function(e) {
        return !e || e === document || e && e.nodeType === Node.DOCUMENT_NODE || !((t = window.getComputedStyle(e, null)) && t.getPropertyValue && ("none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility"))) && Py(e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode);
        var t
    },
    By = function(e) {
        return Boolean(e && e.dataset && e.dataset.focusGuard)
    },
    Ay = function(e) {
        return !By(e)
    },
    My = function(e) {
        return Boolean(e)
    },
    Oy = function(e, t) {
        var n = e.tabIndex - t.tabIndex,
            r = e.index - t.index;
        if (n) {
            if (!e.tabIndex) return 1;
            if (!t.tabIndex) return -1
        }
        return n || r
    },
    Iy = function(e, t, n) {
        return ky(e).map((function(e, t) {
            return {
                node: e,
                index: t,
                tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
        })).filter((function(e) {
            return !t || e.tabIndex >= 0
        })).sort(Oy)
    },
    _y = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
    zy = _y + ", [data-focus-guard]",
    Ry = function(e, t) {
        return e.reduce((function(e, n) {
            return e.concat(ky(n.querySelectorAll(t ? zy : _y)), n.parentNode ? ky(n.parentNode.querySelectorAll(_y)).filter((function(e) {
                return e === n
            })) : [])
        }), [])
    },
    jy = function(e) {
        return ky(e).filter((function(e) {
            return Py(e)
        })).filter((function(e) {
            return function(e) {
                return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
            }(e)
        }))
    },
    Ny = function(e, t) {
        return Iy(jy(Ry(e, t)), !0, t)
    },
    Wy = function(e) {
        return Iy(jy(Ry(e)), !1)
    },
    Vy = function(e) {
        return jy((t = e.querySelectorAll("[data-autofocus-inside]"), ky(t).map((function(e) {
            return Ry([e])
        })).reduce((function(e, t) {
            return e.concat(t)
        }), [])));
        var t
    },
    Uy = function(e, t) {
        return void 0 === t && (t = []), t.push(e), e.parentNode && Uy(e.parentNode, t), t
    },
    Hy = function(e, t) {
        for (var n = Uy(e), r = Uy(t), o = 0; o < n.length; o += 1) {
            var a = n[o];
            if (r.indexOf(a) >= 0) return a
        }
        return !1
    },
    qy = function(e, t, n) {
        var r = Sy(e),
            o = Sy(t),
            a = r[0],
            i = !1;
        return o.filter(Boolean).forEach((function(e) {
            i = Hy(i || e, e) || i, n.filter(Boolean).forEach((function(e) {
                var t = Hy(a, e);
                t && (i = !i || t.contains(i) ? t : Hy(t, i))
            }))
        })), i
    },
    Ky = function(e) {
        return Boolean(ky(e.querySelectorAll("iframe")).some((function(e) {
            return e === document.activeElement
        })))
    },
    Gy = function(e) {
        var t = document && document.activeElement;
        return !(!t || t.dataset && t.dataset.focusGuard) && Ty(e).reduce((function(e, n) {
            return e || n.contains(t) || Ky(n)
        }), !1)
    },
    Zy = function(e) {
        return "INPUT" === e.tagName && "radio" === e.type
    },
    Yy = function(e, t) {
        return Zy(e) && e.name ? function(e, t) {
            return t.filter(Zy).filter((function(t) {
                return t.name === e.name
            })).filter((function(e) {
                return e.checked
            }))[0] || e
        }(e, t) : e
    },
    $y = function(e) {
        return e[0] && e.length > 1 ? Yy(e[0], e) : e[0]
    },
    Xy = function(e, t) {
        return e.length > 1 ? e.indexOf(Yy(e[t], e)) : t
    },
    Jy = function(e, t, n, r) {
        var o = e.length,
            a = e[0],
            i = e[o - 1],
            s = By(n);
        if (!(e.indexOf(n) >= 0)) {
            var u, l, c = t.indexOf(n),
                d = r ? t.indexOf(r) : c,
                p = r ? e.indexOf(r) : -1,
                m = c - d,
                f = t.indexOf(a),
                h = t.indexOf(i),
                g = (u = t, l = new Set, u.forEach((function(e) {
                    return l.add(Yy(e, u))
                })), u.filter((function(e) {
                    return l.has(e)
                }))),
                D = g.indexOf(n) - (r ? g.indexOf(r) : c),
                v = Xy(e, 0),
                b = Xy(e, o - 1);
            return -1 === c || -1 === p ? "NEW_FOCUS" : !m && p >= 0 ? p : c <= f && s && Math.abs(m) > 1 ? b : c >= h && s && Math.abs(m) > 1 ? v : m && Math.abs(D) > 1 ? p : c <= f ? b : c > h ? v : m ? Math.abs(m) > 1 ? p : (o + p + m) % o : void 0
        }
    },
    Qy = function(e, t) {
        var n = document && document.activeElement,
            r = Ty(e).filter(Ay),
            o = qy(n || e, e, r),
            a = Wy(r),
            i = Ny(r).filter((function(e) {
                var t = e.node;
                return Ay(t)
            }));
        if (i[0] || (i = a)[0]) {
            var s, u, l, c, d = Wy([o]).map((function(e) {
                    return e.node
                })),
                p = (s = d, u = i, l = new Map, u.forEach((function(e) {
                    return l.set(e.node, e)
                })), s.map((function(e) {
                    return l.get(e)
                })).filter(My)),
                m = p.map((function(e) {
                    return e.node
                })),
                f = Jy(m, d, n, t);
            if ("NEW_FOCUS" === f) {
                var h = a.map((function(e) {
                    return e.node
                })).filter((c = function(e) {
                    return e.reduce((function(e, t) {
                        return e.concat(Vy(t))
                    }), [])
                }(r), function(e) {
                    return e.autofocus || e.dataset && !!e.dataset.autofocus || c.indexOf(e) >= 0
                }));
                return {
                    node: h && h.length ? $y(h) : $y(m)
                }
            }
            return void 0 === f ? f : p[f]
        }
    },
    ex = 0,
    tx = !1,
    nx = function(e, t) {
        var n, r = Qy(e, t);
        if (!tx && r) {
            if (ex > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), tx = !0, void setTimeout((function() {
                tx = !1
            }), 1);
            ex++, (n = r.node).focus(), "contentWindow" in n && n.contentWindow && n.contentWindow.focus(), ex--
        }
    };

function rx(e) {
    var t = window.setImmediate;
    void 0 !== t ? t(e) : setTimeout(e, 1)
}
var ox = function() {
        return document && document.activeElement === document.body || document && ky(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) {
            return e.contains(document.activeElement)
        }))
    },
    ax = null,
    ix = null,
    sx = null,
    ux = !1,
    lx = function() {
        return !0
    };

function cx(e, t, n, r) {
    var o = null,
        a = e;
    do {
        var i = r[a];
        if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
        else {
            if (!i.lockItem) break;
            if (a !== e) return;
            o = null
        }
    } while ((a += n) !== t);
    o && (o.node.tabIndex = 0)
}
var dx = function(e) {
        return e && "current" in e ? e.current : e
    },
    px = function() {
        var e, t, n, r, o, a, i = !1;
        if (ax) {
            var s = ax,
                u = s.observed,
                l = s.persistentFocus,
                c = s.autoFocus,
                d = s.shards,
                p = s.crossFrame,
                m = u || sx && sx.portaledElement,
                f = document && document.activeElement;
            if (m) {
                var h = [m].concat(d.map(dx).filter(Boolean));
                if (f && ! function(e) {
                        return (ax.whiteList || lx)(e)
                    }(f) || (l || (p ? Boolean(ux) : "meanwhile" === ux) || !ox() || !ix && c) && (!m || Gy(h) || (a = f, sx && sx.portaledElement === a) || (document && !ix && f && !c ? (f.blur && f.blur(), document.body.focus()) : (i = nx(h, ix), sx = {})), ux = !1, ix = document && document.activeElement), document) {
                    var g = document && document.activeElement,
                        D = (t = Ty(e = h).filter(Ay), n = qy(e, e, t), r = Ny([n], !0), o = Ny(t).filter((function(e) {
                            var t = e.node;
                            return Ay(t)
                        })).map((function(e) {
                            return e.node
                        })), r.map((function(e) {
                            var t = e.node;
                            return {
                                node: t,
                                index: e.index,
                                lockItem: o.indexOf(t) >= 0,
                                guard: By(t)
                            }
                        }))),
                        v = D.map((function(e) {
                            return e.node
                        })).indexOf(g);
                    v > -1 && (D.filter((function(e) {
                        var t = e.guard,
                            n = e.node;
                        return t && n.dataset.focusAutoGuard
                    })).forEach((function(e) {
                        return e.node.removeAttribute("tabIndex")
                    })), cx(v, D.length, 1, D), cx(v, -1, -1, D))
                }
            }
        }
        return i
    },
    mx = function(e) {
        px() && e && (e.stopPropagation(), e.preventDefault())
    },
    fx = function() {
        return rx(px)
    },
    hx = function() {
        ux = "just", setTimeout((function() {
            ux = "meanwhile"
        }), 0)
    };
yy.assignSyncMedium((function(e) {
    var t = e.target,
        n = e.currentTarget;
    n.contains(t) || (sx = {
        observerNode: n,
        portaledElement: t
    })
})), xy.assignMedium(fx), Cy.assignMedium((function(e) {
    return e({
        moveFocusInside: nx,
        focusInside: Gy
    })
}));
const gx = (Dx = function(e) {
    return e.filter((function(e) {
        return !e.disabled
    }))
}, vx = function(e) {
    var t = e.slice(-1)[0];
    t && !ax && (document.addEventListener("focusin", mx, !0), document.addEventListener("focusout", fx), window.addEventListener("blur", hx));
    var n = ax,
        r = n && t && t.id === n.id;
    ax = t, n && !r && (n.onDeactivation(), e.filter((function(e) {
        return e.id === n.id
    })).length || n.returnFocus(!t)), t ? (ix = null, r && n.observed === t.observed || t.onActivation(), px(), rx(px)) : (document.removeEventListener("focusin", mx, !0), document.removeEventListener("focusout", fx), window.removeEventListener("blur", hx), ix = null)
}, function(e) {
    var t, n = [];

    function r() {
        t = Dx(n.map((function(e) {
            return e.props
        }))), vx(t)
    }
    var o = function(o) {
        function a() {
            return o.apply(this, arguments) || this
        }
        Le(a, o), a.peek = function() {
            return t
        };
        var i = a.prototype;
        return i.componentDidMount = function() {
            n.push(this), r()
        }, i.componentDidUpdate = function() {
            r()
        }, i.componentWillUnmount = function() {
            var e = n.indexOf(this);
            n.splice(e, 1), r()
        }, i.render = function() {
            return Wn.createElement(e, this.props)
        }, a
    }(Vn.PureComponent);
    return function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n
    }(o, "displayName", "SideEffect(" + function(e) {
        return e.displayName || e.name || "Component"
    }(e) + ")"), o
})((function() {
    return null
}));
var Dx, vx, bx = Vn.forwardRef((function(e, t) {
        return Vn.createElement(Fy, Fe({
            sideCar: gx,
            ref: t
        }, e))
    })),
    yx = Fy.propTypes || {};
yx.sideCar, Ws(yx, ["sideCar"]), bx.propTypes = {};
const xx = "transform, height, bottom, min-height, max-height, box-shadow, z-index, border-radius";
var Cx = {
        name: "dig7ox",
        styles: "height:calc(100% - 36px);bottom:35px"
    },
    Ex = {
        name: "1vljhnn",
        styles: "height:calc(100% - 100px);bottom:100px"
    };
const wx = Vn.forwardRef((function(e, t) {
        let {
            children: n,
            animationEnded: r,
            onTransitionEnd: o,
            isFooterHidden: a,
            ...i
        } = e;
        const s = Vn.useRef(null),
            u = hd(s, t),
            l = fg();
        yp("touchmove", s), vp(l ? null : s);
        const c = So(e => e.getApplicationState("defaultWidget")),
            d = So(e => e.getCurrentView()),
            p = So(e => st(e)),
            m = "livechat" === c && "Chat" !== d && "modern" !== p;
        return Wi(bx, {
            autoFocus: !1,
            returnFocus: !0,
            crossFrame: !1,
            css: e => (e => {
                let {
                    animationEnded: t,
                    theme: n,
                    areTabsVisible: r
                } = e;
                return Ui("position:absolute;z-index:1500;display:flex;flex-direction:column;max-height:100%;left:10px;right:10px;border-radius:inherit;color:", n.colors.primaryTextColor, ";box-shadow:none;", t && {
                    transitionProperty: xx,
                    transitionDuration: "300ms",
                    transitionTimingFunction: "" + n.transitions.easings.swift,
                    willChange: xx
                }, " ", r ? Ex : Cx, ";")
            })({
                animationEnded: r,
                theme: e,
                areTabsVisible: m
            }),
            ref: u,
            lockProps: {
                role: "dialog",
                "aria-modal": !0,
                onTransitionEnd: o,
                ...i
            }
        }, n)
    })),
    Fx = [].concat(Object.values(mt), ["https://customer-mobile-app.ngrok.io/chat-widget-moment/"]),
    kx = e => {
        const t = pt(e);
        return Fx.some(e => 0 === t.lastIndexOf(e, 0))
    },
    Sx = (e, t) => {
        const n = e.getView("Moment");
        return {
            available: ut(e),
            disabled: n.show && !!n.data.url && !kx(n.data.url),
            showMoment: n => {
                const r = ir({
                        source: t,
                        "moment-title": lt
                    }),
                    o = {
                        url: mt.production + "?" + r
                    };
                n && (o.triggeredTarget = ct(n)), dt(e, o)
            }
        }
    },
    Lx = {
        scrolling: "yes",
        style: {
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            height: "1px",
            width: "1px",
            margin: "0",
            padding: "0",
            background: "none",
            border: "0"
        }
    },
    Tx = (e, t) => ({
        moment_url: sr(e) + bt(e),
        moment_origin: sr(e) || "",
        ...t && {
            ui_source: t
        }
    }),
    Px = e => Ui("flex-grow:1;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;display:", e ? "none" : "block", ";background-color:#ffffff;"),
    Bx = (e, t, n) => {
        const r = document.createElement("iframe");
        return r.allow = n, r.src = t, e.appendChild(r), r
    },
    Ax = e => {
        let {
            id: t,
            url: n,
            close: r,
            hidden: o,
            sendMessage: a,
            sendSystemMessage: i,
            setAttributes: s,
            onLoadingChanged: u,
            onMomentDataChanged: l,
            iframeAllowedProperties: c,
            getCustomerToken: d,
            updateCustomerData: p,
            licenseId: m,
            chatId: f,
            groupId: h,
            source: g
        } = e;
        const D = Vn.useRef(void 0),
            v = Vn.useRef(Un),
            b = Vn.useRef(Un),
            y = Vn.createRef();
        return v.current = () => {
            if (!n || !y.current) return;
            const e = () => {
                    D.current && (u(!1), D.current.frame.removeEventListener("load", e))
                },
                t = {
                    close: r,
                    sendMessage: a,
                    setAttributes: s,
                    updateCustomerData: p,
                    licenseId: m,
                    chatId: f,
                    groupId: h,
                    setExternalLink(e) {
                        l({
                            externalLink: e
                        })
                    },
                    setIsFragile() {},
                    setTitle(e) {
                        l({
                            title: e
                        })
                    },
                    getIdentityTransferToken() {
                        if (kx(n)) return d().then(e => (e => {
                            let {
                                accessToken: t
                            } = e;
                            return ft(ht("accounts") + "/customer/identity_transfer", {
                                method: "POST",
                                headers: {
                                    Authorization: "Bearer " + t
                                },
                                body: JSON.stringify({
                                    bearer_type: "customer",
                                    client_id: "c5e4f61e1a6c3b1521b541bc5c5a2ac5"
                                })
                            }).then(e => e.json()).then(e => Ie(gt, e))
                        })(e)).catch(e => e);
                        throw new Error("Moment App not authorized")
                    }
                };
            if (i && (t.sendSystemMessage = i), D.current = Dt({
                    frame: Bx(y.current, n, c),
                    url: n,
                    onConnected: e => {
                        let {
                            data: t
                        } = e;
                        u(!1), l(t)
                    }
                }, t), y.current) {
                const e = y.current.querySelector("iframe");
                e && e.setAttribute("data-testid", "moment-app")
            }
            Mo(Lx, D.current.frame), u(!0), D.current.frame.addEventListener("load", e), l({
                title: D.current.title
            }), vt("moment_opened", Tx(pt(n), g))
        }, b.current = () => {
            D.current && (D.current.destroy(), y.current && (y.current.innerHTML = ""), l(null), u(!1), D.current = void 0), n && vt("moment_closed", Tx(pt(n)))
        }, Vn.useEffect(() => (v.current(), () => b.current()), [n]), Wi("div", {
            id: t,
            ref: y,
            css: Px(o),
            onScroll: e => {
                (e => {
                    if (!e) return;
                    const t = e.scrollTop,
                        n = e.scrollHeight - e.offsetHeight;
                    0 === t ? e.scrollTop = 1 : t === n && (e.scrollTop = n - 1)
                })(e.currentTarget)
            }
        })
    },
    Mx = "set_can_be_shown",
    Ox = "main_transition_start",
    Ix = "main_transition_end",
    _x = "drawer_transition_end",
    zx = "reset_collapsed",
    Rx = () => ({
        type: Mx
    }),
    jx = () => ({
        type: Ox
    }),
    Nx = () => ({
        type: Ix
    }),
    Wx = () => ({
        type: _x
    }),
    Vx = () => ({
        type: zx
    }),
    Ux = (e, t) => {
        switch (t.type) {
            case Mx:
                return { ...e,
                    canBeShown: !0
                };
            case zx:
                return { ...e,
                    animationEnded: !1
                };
            case Ox:
                return { ...e,
                    isAnimating: !0
                };
            case Ix:
                return { ...e,
                    isAnimating: !1,
                    animationEnded: !0
                };
            case _x:
                return { ...e,
                    isExpanding: !1
                };
            default:
                return e
        }
    },
    Hx = rm(Qb, {
        target: "e1crrbvm4"
    })("text-align:left;", e => {
        let {
            theme: t
        } = e;
        return t.typography.basic
    }, ";"),
    qx = {
        name: "zjik7",
        styles: "display:flex"
    },
    Kx = rm("div", {
        target: "e1crrbvm3"
    })("background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.floatSurface
    }, ";display:flex;flex-grow:1;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xxl
    }, ";overflow:hidden;"),
    Gx = Ui(Hx, ";background-color:transparent;color:inherit;display:flex;align-items:center;border:none;padding:0;padding-right:10px;position:relative;&:hover{color:inherit;}"),
    Zx = rm("div", {
        target: "e1crrbvm2"
    })({
        name: "1sqak2y",
        styles: "position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;z-index:1"
    }),
    Yx = rm(ey, {
        target: "e1crrbvm1"
    })({
        name: "1g8u6m8",
        styles: "padding:0;justify-content:space-between"
    }),
    $x = rm("div", {
        target: "e1crrbvm0"
    })("width:8px;height:8px;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.notification
    }, ";position:absolute;top:5px;left:20px;"),
    Xx = e => {
        const {
            show: t,
            data: {
                url: n,
                ...r
            }
        } = e.getView("Moment"), o = e.getApplicationState("license"), a = e.getApplicationState("group"), i = Ft(e), s = i ? e.getUnseenCount(i) : 0, u = i === xe ? kt(e) : null;
        return {
            show: t,
            momentData: r,
            url: n,
            licenseId: String(o),
            isFooterHidden: St(e),
            updateMomentData: t => {
                const n = e.getView("Moment");
                e.updateView("Moment", {
                    data: { ...n.data,
                        ...t
                    }
                })
            },
            chatId: i,
            chatServerId: u,
            unseenCount: s,
            groupId: null != a ? a : 0
        }
    };
var Jx = {
    name: "21xn5r",
    styles: "transform:rotate(180deg)"
};
const Qx = e => {
        let {
            onSendMessage: t
        } = e;
        const {
            show: n,
            url: r,
            licenseId: o,
            isFooterHidden: a,
            updateMomentData: i,
            chatId: s,
            chatServerId: u,
            groupId: l,
            unseenCount: c,
            momentData: d
        } = So(Xx), p = ko(), m = {
            canBeShown: !1,
            isExpanding: !0,
            isAnimating: !1,
            animationEnded: !1
        }, [{
            canBeShown: f,
            isAnimating: h,
            animationEnded: g
        }, D] = Vn.useReducer(Ux, m, () => ({ ...m
        })), v = Vn.useRef(null), [b, y] = Vn.useState(!1), [x, C] = Vn.useState({}), E = Vn.useCallback(() => yt(p), [p]), [w, F] = function(e, t) {
            const [n, r] = Vn.useState(e), o = Vn.useRef(null);
            return Vn.useEffect(() => {
                o.current = e ? document.activeElement : null, r(e)
            }, [e, o]), [n, () => {
                t(), o.current instanceof HTMLElement && o.current.focus()
            }]
        }(f && n, () => E()), k = h || b, S = bs(), L = p.localize, T = Vn.useCallback(e => xt(p, {
            properties: e
        }), [p]), P = Vn.useCallback(e => {
            ["email", "name"].forEach(t => {
                (e[t] && "string" != typeof e[t] || "" === e[t]) && delete e[t]
            }), (e.email || e.name) && xt(p, e)
        }, [p]), B = Vn.useCallback(e => s && Ct(p, s, e), [p, s]), A = Vn.useMemo(() => (e => {
            let {
                allowAutoplay: t,
                allowVideoConferencing: n,
                allowClipboardWrite: r,
                allowDisplayCapture: o
            } = e, a = ["clipboard-read; clipboard-write;"];
            if (t && !it() && a.push("autoplay;"), o && a.push("display-capture *;"), n) {
                const e = {
                    "display-capture *;": !ot() || at() >= 94,
                    "picture-in-picture *;": "PictureInPictureEvent" in window,
                    "fullscreen *;": "function" == typeof Element.prototype.requestFullscreen
                };
                a = [].concat(a, ["microphone *;", "camera *;"], Object.keys(Se(Boolean, e)))
            }
            return r && !it() && a.push("clipboard-write *;"), a.join(" ")
        })({
            allowVideoConferencing: Et(p, "microphone"),
            allowClipboardWrite: Et(p, "clipboard_write")
        }), [p]), M = Vn.useCallback(e => s && wt(p, s, e), [p, s]), O = Vn.useCallback(() => new Promise((e, t) => {
            p.once("customer_token_response", e), p.once("customer_token_error", t), p.emit("request_customer_token")
        }), [p]), I = Vn.useCallback(e => (p.on("request_close_moment", e), () => p.off("request_close_moment", e)), [p]), _ = Vn.useCallback(e => (p.on("request_expand_moment", e), () => p.off("request_expand_moment", e)), [p]), z = Vn.useCallback(e => p.updateView("Moment", {
            show: !0,
            data: e
        }), [p]), R = Vn.useCallback((function(e) {
            return void 0 === e && (e = !1), rt(p, !1, e)
        }), [p]);
        return $(x) && !$(d) && C({ ...x,
            ...d
        }), Lp(Vn.useCallback(() => D(Rx()), []), 300), Vn.useEffect(() => {
            d.wasTriggeredByGreeting && g && z({ ...d,
                url: r,
                wasTriggeredByGreeting: !1
            })
        }, [g, r, d, z]), Vn.useEffect(() => {
            const e = I(() => {
                R(!0)
            });
            return () => e()
        }, [R, I]), Vn.useEffect(() => {
            const e = _(e => {
                null != e && e.nextMoment && (F(), z(e.nextMoment))
            });
            return () => e()
        }, [_, F, z]), Vn.useEffect(() => {
            !w && g && D(Vx())
        }, [w, g]), Wi(Vn.Fragment, null, Wi(cy, {
            fullCover: !0,
            shown: n,
            zIndex: 99
        }), Wi(my, {
            target: x.triggeredTarget,
            show: w,
            nodeRef: v,
            onTransitionEnd: () => {
                D(Nx())
            },
            onTransitionStart: () => {
                D(jx())
            }
        }, Wi(wx, {
            ref: v,
            animationEnded: g,
            isFooterHidden: a,
            onTransitionEnd: () => D(Wx())
        }, Wi(Yx, {
            noShrink: !0
        }, Wi(dh, {
            onPress: F,
            css: Gx,
            autoFocus: !0,
            label: Wi(Vn.Fragment, null, Wi(Sg, {
                "aria-hidden": !0,
                css: Jx
            }), c > 0 && Wi($x, null), Wi("span", null, L("go_back_to_homescreen") || L("back")))
        }), x.externalLink && Wi(Vn.Fragment, null, Wi(_D, {
            href: x.externalLink,
            rel: "nofollow noopener noreferrer",
            css: qx,
            "aria-label": L("open_new_tab")
        }, Wi(qg, {
            "aria-hidden": !0
        })))), Wi(Kx, null, Wi(Ax, ur({
            id: S,
            hidden: k,
            close: F,
            url: r,
            licenseId: o,
            groupId: l,
            source: x.source,
            sendMessage: e => {
                let {
                    text: n
                } = e;
                B(n), t && t(n)
            },
            sendSystemMessage: M,
            setAttributes: T,
            setTitle: e => C(t => ({ ...t,
                title: e
            })),
            updateCustomerData: P,
            onMomentDataChanged: e => {
                e && (e.title || e.icon) && i(e), C(t => e ? { ...t,
                    ...e
                } : {})
            },
            onLoadingChanged: y,
            iframeAllowedProperties: A,
            getCustomerToken: O
        }, u && {
            chatId: u
        }))), k && Wi(Zx, null, Wi(ev, {
            size: "xlarge",
            style: {
                margin: "auto"
            }
        })))))
    },
    eC = Vn.createContext({}),
    tC = () => Vn.useContext(eC),
    nC = e => {
        let {
            children: t
        } = e;
        const n = Sp(!0),
            r = Sp(!0),
            o = Sp(0),
            a = Vn.useMemo(() => ({
                isAgentBarExpandedSource: n,
                isOnBottomSource: r,
                dynamicIslandAbsoluteTopSource: o
            }), [o, n, r]);
        return Vn.createElement(eC.Provider, {
            value: a
        }, t)
    },
    rC = Vn.lazy(() => zr(() => xg(() =>
        import ("./21.Uz1HBcsR.chunk.js").then(e => e.M), []))),
    oC = rm("div", {
        displayName: "ApplicationWrapper",
        target: "edvz03i3"
    })({
        name: "jcdn5o",
        styles: "position:absolute;top:0;left:auto;right:0;bottom:0;width:100%;height:100%;will-change:tranform,opacity;backface-visibility:hidden"
    }),
    aC = rm("div", {
        displayName: "Maximized",
        target: "edvz03i2"
    })("position:relative;display:flex;flex-direction:column;min-width:0;height:100%;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.floating
    }, ";overflow:auto;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";isolation:isolate;", e => {
        let {
            theme: t
        } = e;
        return "dark" === t.variant && {
            colorScheme: "dark"
        }
    }, ";", e => {
        let {
            expandToEdge: t,
            theme: n
        } = e;
        return {
            borderRadius: t ? n.borderRadius.none + " !important" : n.borderRadius.xxxl
        }
    }, ";"),
    iC = rm("div", {
        target: "edvz03i1"
    })({
        name: "dhssmq",
        styles: "flex-grow:1;display:flex;align-items:center;justify-content:center"
    }),
    sC = rm(Jb, {
        target: "edvz03i0"
    })({
        name: "us6u8p",
        styles: "position:absolute;top:0.8em;right:0.8em"
    }),
    uC = () => {
        const e = Ii(),
            {
                defaultWidget: t
            } = So(e => e.getApplicationState()),
            n = So(e => Lt(e)),
            [r, o] = Vn.useState(!1);
        return Lp(() => o(!0), 500), r ? Wi(iC, null, n && Wi(sC, {
            primaryColor: !0
        }), "openwidget" === t ? Wi(Kg, {
            size: 64,
            css: Om,
            color: e.colors.border
        }) : Wi(Vg, {
            size: 64,
            css: Om,
            color: e.colors.border,
            backgroundColor: e.colors.surface
        })) : null
    },
    lC = Vn.forwardRef((function(e, t) {
        let {
            dir: n,
            showMinimizedButton: r,
            isMainViewVisible: o,
            expandToEdge: a,
            onMinimizeButtonPress: i,
            onDragEnter: s
        } = e;
        const u = fg();
        return Wi(oC, ur({}, u ? {
            id: "chat-widget-maximized"
        } : {}, {
            dir: n,
            expandToEdge: a,
            ref: t,
            onDragEnter: s
        }), Wi(aC, {
            expandToEdge: a,
            role: "main"
        }, o ? Wi(Vn.Suspense, {
            fallback: Wi(uC, null)
        }, Wi(nC, null, Wi(rC, {
            showMinimizedButton: r,
            onMinimizeButtonPress: i
        }))) : Wi(uC, null), Wi(Qx, null)))
    })),
    cC = e => {
        let {
            message: t,
            "aria-live": n,
            clearOnUnmount: r
        } = e;
        const o = ko(),
            a = is.static,
            i = Tt(t);
        return is(() => {
            if (a) return o.emit("set-live-announcer-message", {
                message: i,
                ariaLevel: n
            }), r ? () => {
                o.emit("set-live-announcer-message", {
                    message: "",
                    ariaLevel: n
                })
            } : void 0
        }, [o]), a ? null : Wn.createElement(_c, {
            message: i,
            "aria-live": n,
            clearOnUnmount: r
        })
    },
    dC = rm(Ng, {
        target: "e241ssi0"
    })("width:", jo(24), ";height:", jo(24), ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";margin-bottom:", e => {
        let {
            theme: t
        } = e;
        return .5 * t.spaceBase
    }, "px;opacity:", e => {
        let {
            mobile: t
        } = e;
        return !Pt() || t ? "1" : "0"
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";&:focus{opacity:1;}"),
    pC = Ui("font-size:", jo(24), ";"),
    mC = e => {
        let {
            mobile: t = !1,
            ...n
        } = e;
        return Wi(dC, ur({
            skipFocusVisible: !0,
            mobile: t
        }, n), Wi(Tg, {
            css: pC,
            "aria-hidden": !0
        }))
    };
var fC, hC;
const gC = Hi(fC || (fC = ug(["\n\tfrom {\n\t\topacity: 0;\n    transform: translateY(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),
    DC = Hi(hC || (hC = ug(["\n\tfrom {\n    opacity: 1;\n    transform: translateY(0);\n\t}\n\tto {\n    opacity: 0;\n    transform: translateY(50px);\n\t}\n"]))),
    vC = nr ? 100 : 600,
    bC = nr ? 0 : 300,
    yC = rm("div", {
        target: "eu700o11"
    })("opacity:", e => {
        let {
            shouldUseEnterTransition: t
        } = e;
        return t ? 0 : 1
    }, ";display:inline-flex;flex-direction:column;white-space:nowrap;cursor:default;z-index:2;margin-bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space4
    }, ";&:hover{flex-direction:column;", dC, "{opacity:1;}}", tf, "{color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";}", e => {
        let {
            theme: t,
            transitionState: n,
            shouldUseEnterTransition: r
        } = e;
        return r && "shown" === n ? Ui("animation:", gC, ";animation-duration:", vC, "ms;animation-delay:", bC, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : "closed" === n ? Ui("animation:", DC, ";animation-duration:", vC, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : void 0
    }, ";"),
    xC = rm(bm, {
        target: "eu700o10"
    })(e => {
        let {
            theme: t
        } = e;
        return t.typography.basic
    }, " max-width:100%;cursor:pointer;"),
    CC = e => {
        var t;
        let {
            transitionState: n,
            screenPosition: r,
            text: o,
            mobile: a
        } = e;
        const i = ko(),
            s = fg(),
            {
                hasSeen: u
            } = null == (t = i.getApplicationState()) ? void 0 : t.chatBotGreeting;
        is(() => {
            u && (i.emit("resize-request", a ? {
                width: "100%"
            } : {
                width: "360px"
            }), i.once("resize-request-done", () => i.emit("resize-to-dimensions")))
        }, [i, u]);
        return Wn.createElement(yC, ur({
            transitionState: n,
            shouldUseEnterTransition: !u
        }, as({
            onAnimationStart: Xn(() => {
                i.emit("resize-request", a ? {
                    width: "100%"
                } : {
                    width: "360px"
                }), i.once("resize-request-done", () => i.emit("resize-to-dimensions"))
            }),
            onAnimationEnd: Xn(() => {
                Bt(i, {
                    hasSeen: !0
                })
            })
        })), Wn.createElement(cC, {
            message: o,
            clearOnUnmount: !0,
            "aria-live": "polite"
        }), Wn.createElement(bm, {
            reverse: "right" === r
        }, Wn.createElement(mC, ur({}, as({
            onClick: e => {
                if (s) return null == e || e.preventDefault(), void(null == e || e.stopPropagation());
                Bt(i, {
                    transitionState: "closed",
                    hidden: !0
                }), setTimeout(() => {
                    Bt(i, {
                        transitionState: "hidden",
                        text: null
                    })
                }, vC)
            }
        }), {
            "aria-label": i.localize("hide_invitation"),
            mobile: a
        }))), Wn.createElement(xC, as({
            onClick: () => {
                "Chat" !== i.getCurrentView() && i.setCurrentView("Chat"), At(i), s || Bt(i, {
                    hidden: !0,
                    transitionState: "hidden",
                    hasSeen: !0
                })
            }
        }), Wn.createElement(kb, {
            text: o
        })))
    },
    EC = rm("svg", {
        target: "exnyfh40"
    })("height:", e => {
        let {
            height: t
        } = e;
        return t
    }, "px;max-width:", e => {
        let {
            maxWidth: t
        } = e;
        return t
    }, "px;"),
    wC = e => {
        const t = e.getView("Moment");
        var n, r;
        return null != t && t.show ? {
            trademarkLink: null == (n = t.data) ? void 0 : n.trademarkLink,
            title: null != (r = t.data.trademarkLinkAnchor) ? r : t.data.title,
            icon: t.data.icon
        } : (e => {
            if ("HelpdeskTicketForm" === e.getCurrentView()) {
                var t, n;
                const r = (null != (t = null == (n = e.getView("Homescreen")) ? void 0 : n.apps) ? t : []).find(e => Mt(e.id));
                return r ? {
                    trademarkLink: "https://helpdesk.com?utm_source=chat_window&utm_medium=referral&utm_campaign=home_screen",
                    title: "Powered by HelpDesk",
                    icon: null == r ? void 0 : r.icon
                } : null
            }
            return null
        })(e)
    },
    FC = e => {
        let {
            fill: t,
            maxWidth: n,
            height: r,
            className: o
        } = e;
        return Vn.createElement(EC, {
            fill: "none",
            width: n,
            height: r,
            viewBox: "0 0 160 160",
            maxWidth: n,
            className: o
        }, Vn.createElement("path", {
            d: "M35.7456021,1.53601172 C64.2568137,-0.511998205 95.8777154,-0.512005929 124.388706,1.53600068 C142.54061,2.83986826 157.41875,17.0089937 158.905019,35.5119454 C160.387978,53.9744005 160.322878,80.9824003 158.962396,99.4327175 C157.468403,119.698759 140.208039,134.042483 120.933985,134.042483 L100.142216,134.028138 L59.9969477,160 L59.9969477,134.000552 L38.9871476,133.985104 C19.713535,133.985104 2.41363717,119.698759 0.919254708,99.4327175 C-0.441234423,80.9824003 -0.253326741,53.9744005 1.22978567,35.5119454 C2.71613212,17.0089937 17.5939187,2.8398793 35.7456021,1.53601172 Z M122.52618,27.469242 C95.2551815,25.5102902 64.8793476,25.5102902 37.6082384,27.469242 C31.8996185,27.8792833 27.5742109,32.2505937 27.1449914,37.5939316 C25.7683994,54.7297108 25.5852363,80.4024279 26.8475169,97.520552 C27.2644888,103.174731 32.2285397,108.028248 38.9442256,108.028248 L59.9969477,108.028248 L59.9969477,134.000552 L100.141885,108.028248 L120.937296,108.028248 C127.653644,108.028248 132.617805,103.174731 133.034887,97.520552 C134.297168,80.4023176 134.365578,54.7297108 132.989648,37.5939316 C132.560428,32.2505937 128.235131,27.8792833 122.52618,27.469242 Z M111.847551,58.9209384 C114.657891,57.7246901 117.993445,59.7626487 117.993445,62.8168832 L117.993445,78.4793383 C117.993445,80.6531314 116.817229,82.6535727 114.849881,83.5783727 L111.821429,84.9321033 C104.883971,87.8828772 92.8935125,92.0000003 79.9959302,92.0000003 C64.9486406,92.0000003 51.1362674,86.3961382 45.1420896,83.5783727 C43.1749621,82.6535727 41.9978634,80.6531314 41.9978634,78.4793383 L41.9978634,62.8168832 C41.9978634,59.7626487 45.3343005,57.7246901 48.1443093,58.9209384 C55.0775841,61.8724418 67.0820493,66.0000004 79.9959302,66.0000004 C92.9098112,66.0000004 104.914166,61.8724418 111.847551,58.9209384 Z",
            fill: t
        }))
    },
    kC = e => {
        let {
            fill: t,
            maxWidth: n,
            height: r,
            className: o
        } = e;
        return Vn.createElement(EC, {
            width: n,
            height: r,
            viewBox: "0 0 460 80",
            className: o
        }, Vn.createElement("g", {
            stroke: "none",
            strokeWidth: "1"
        }, Vn.createElement("path", {
            d: "M32.6948136,80 C51.606052,80 63.2518726,67.1431476 64,51.8216941 L50.1106641,51.8216941 C49.1484145,60.2859741 43.806629,67.6789077 32.6948136,67.6789077 C20.1942379,67.6789077 14.8515855,59.1074409 14.8515855,47.1073874 L14.8515855,34.8930472 C14.8515855,22.8929937 20.1942379,14.321527 32.6948136,14.321527 C43.806629,14.321527 49.1484145,21.7143736 50.1106641,30.1787405 L64,30.1787405 C63.2518726,14.8572002 51.606052,2 32.6948136,2 C10.1504328,2 0,16.4643937 0,35.6430071 L0,46.3573406 C0,65.536041 10.1504328,80 32.6948136,80 Z M72,78 L86.2697453,78 L86.2697453,45.0903608 C86.2697453,37.6109171 90.3620174,33.764346 96.7622051,33.764346 C103.686803,33.764346 106.730255,38.3589048 106.730255,44.7698566 L106.730255,78 L121,78 L121,42.4191743 C121,29.2766798 113.550141,21.1561409 101.693874,21.1561409 C94.6637131,21.1561409 89.1029223,24.2548109 86.2697453,29.0629814 L86.2697453,0 L72,0 L72,78 Z M150.019299,79 C156.420919,79 163.462267,76.3347791 166.022915,72.6028642 L166.022915,77.7205901 L180,77.7205901 L180,42.3234976 C180,29.4228248 170.504481,21 156.633873,21 C144.684184,21 136.042214,26.7573444 132.840972,37.5257539 L146.284805,37.5257539 C147.778083,34.5404642 150.872849,32.3014537 155.886801,32.3014537 C161.861646,32.3014537 165.489663,36.1396833 165.489663,41.2573227 L165.489663,48.8272076 C162.929015,46.6948579 158.020674,44.1360382 151.4061,44.1360382 C138.06961,44.1360382 129,49.6801475 129,61.7278804 C129,72.49629 137.535492,79 150.019299,79 Z M152.952169,69 C146.709655,69 142,66.0133333 142,60.8933333 C142,55.7733333 146.380868,53 153.390256,53 C160.071746,53 165,55.8800433 165,60.7867099 C165,65.4800433 159.523471,69 152.952169,69 Z M207.021821,78 L217.2389,78 L217.2389,66.2023444 L211.261226,66.2023444 C207.348133,66.2023444 205.93441,64.7008356 205.93441,61.0543144 L205.93441,34.0271572 L218,34.0271572 L218,22.2295886 L205.93441,22.2295886 L205.93441,7 L191.043139,7 L191.043139,22.2295886 L183,22.2295886 L183,34.0271572 L191.043139,34.0271572 L191.043139,62.1268207 C191.043139,71.993878 196.152119,78 207.021821,78 Z M224,78 L257.850074,78 C272.706189,78 283,69.4284944 283,56.8928381 C283,46.714235 276.844893,40.8214282 269.204605,39.2142437 C274.404031,36.2142472 278.542735,30.5357258 278.542735,21.9643072 C278.542735,10.7142768 270.372087,3 257.319713,3 L224,3 L224,78 Z M239,66 L239,45 L257.749674,45 C264.821332,45 269,49.0680269 269,55.4450038 C269,61.9319731 265.035177,66 257.857466,66 L239,66 Z M239,35 L239,15 L254.949751,15 C261.286221,15 265,18.7777778 265,24.6667117 C265,30.6667117 261.504261,35 255.058771,35 L239,35 Z M312.999569,79 C329.554534,79 339,68.1249297 339,53.9448471 L339,46.0551529 C339,31.8749838 329.554534,21 312.999569,21 C296.444605,21 287,31.8749838 287,46.0551529 L287,53.9448471 C287,68.1249297 296.444605,79 312.999569,79 Z M325,55.0181376 C325,62.4363194 321.17706,68 312.999569,68 C304.82294,68 301,62.4363194 301,55.0181376 L301,44.9817739 C301,37.5635921 304.82294,32 312.999569,32 C321.17706,32 325,37.5635921 325,44.9817739 L325,55.0181376 Z M365.021821,78 L375.2389,78 L375.2389,66.2023444 L369.261226,66.2023444 C365.348133,66.2023444 363.935292,64.7008356 363.935292,61.0543144 L363.935292,34.0271572 L376,34.0271572 L376,22.2295886 L363.935292,22.2295886 L363.935292,7 L349.043139,7 L349.043139,22.2295886 L341,22.2295886 L341,34.0271572 L349.043139,34.0271572 L349.043139,62.1268207 C349.043139,71.993878 354.152119,78 365.021821,78 Z",
            fill: t
        })))
    },
    SC = rm("span", {
        target: "e11crs6s0"
    })("display:inline-flex;position:relative;height:", e => {
        let {
            height: t
        } = e;
        return t
    }, "px;gap:", e => {
        let {
            horizontalGap: t
        } = e;
        return t
    }, "px;"),
    LC = e => {
        let {
            maxWidth: t = 58,
            colors: n,
            className: r
        } = e;
        const o = Ii(),
            a = (null == n ? void 0 : n.signet) || "#0066FF",
            i = (null == n ? void 0 : n.letters) || o.colors.primaryTextColor,
            s = Math.round(t / 5),
            u = Math.round(t / 15),
            l = Math.round(s / 12),
            c = Math.round(t - (s + u)),
            d = Math.round(s + l);
        return Vn.createElement(SC, {
            horizontalGap: u,
            verticalGap: l,
            height: d,
            className: r,
            "aria-label": "ChatBot",
            role: "img"
        }, Vn.createElement(FC, {
            maxWidth: s,
            height: s,
            fill: a
        }), Vn.createElement(kC, {
            maxWidth: c,
            height: s,
            fill: i
        }))
    },
    TC = rm("div", {
        target: "e1fdxphr1"
    })("width:100%;height:100%;padding:6px;padding-top:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";display:flex;justify-content:center;align-items:center;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";background:#0066ff;"),
    PC = rm(FC, {
        target: "e1fdxphr0"
    })({
        name: "18kjo4j",
        styles: "height:100%;width:100%;fill:white"
    }),
    BC = e => e.imgUrl || "ChatBot" !== e.text ? Wn.createElement(Qm, e) : Wn.createElement(TC, e, Wn.createElement(PC, null)),
    AC = rm(dh, {
        target: "egnkqwt2"
    })("padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";border:none;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.md
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surfaceVariant
    }, ";display:grid;grid-template-columns:", e => {
        let {
            showChevron: t
        } = e;
        return t ? "20px 1fr 20px" : "20px min-content"
    }, ";grid-template-rows:min-content 1fr;grid-column-gap:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";align-items:center;line-height:1.2;", e => {
        let {
            theme: t
        } = e;
        return t.typography.buttonText
    }, ";justify-content:center;text-align:center;text-decoration:inherit;&:hover{color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surfaceVariantHover
    }, ";}").withComponent("a", {
        target: "egnkqwt3"
    }),
    MC = rm("span", {
        target: "egnkqwt1"
    })({
        name: "7fko3c",
        styles: "justify-self:start"
    }),
    OC = rm(Lg, {
        target: "egnkqwt0"
    })({
        name: "cz33k0",
        styles: "rotate:-90deg;margin-left:auto"
    }),
    IC = (e, t, n, r, o) => {
        const a = "https://wa.me/" + t + e;
        return !o && n ? Ot(a, n, r) : a
    },
    _C = (e, t, n, r) => {
        const o = "https://m.me/" + encodeURI(e) + "?ref=openwidget";
        return !r && t ? Ot(o, t, n) : o
    },
    zC = e => {
        let {
            pageName: t,
            showChevron: n,
            ...r
        } = e;
        const {
            localize: o
        } = ko(), a = fg(), {
            organizationId: i,
            owApiURL: s
        } = So(e => e.getApplicationState()), u = _C(t, i, s, a);
        return i ? Wn.createElement(AC, ur({
            href: u,
            target: "_blank",
            rel: "noreferrer",
            showChevron: n
        }, r), Wn.createElement(Ug, null), Wn.createElement(MC, null, o("contact_us_on_messenger")), n && Wn.createElement(OC, {
            "aria-hidden": !0
        })) : (console.error("Messenger button is not displayed because organizationId is not available"), null)
    },
    RC = e => {
        let {
            phoneNumber: t,
            countryCode: n,
            showChevron: r = !1,
            ...o
        } = e;
        const {
            localize: a
        } = ko(), i = fg(), {
            organizationId: s,
            owApiURL: u
        } = So(e => e.getApplicationState()), l = IC(t, n, s, u, i);
        return s ? Wn.createElement(AC, ur({
            href: l,
            target: "_blank",
            rel: "noreferrer",
            showChevron: r
        }, o), Wn.createElement(eD, null), Wn.createElement(MC, null, a("contact_us_on_whatsapp")), r && Wn.createElement(OC, {
            "aria-hidden": !0
        })) : (console.error("WhatsApp button is not displayed because organizationId is not available"), null)
    },
    jC = rm("div", {
        target: "e1jb6k2h6"
    })("opacity:", e => {
        let {
            shouldUseEnterTransition: t
        } = e;
        return t ? 0 : 1
    }, ";white-space:nowrap;overflow:hidden;cursor:default;z-index:2;padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space4
    }, ";width:", zt, "px;&:hover{", dC, "{opacity:1;}}", e => {
        let {
            theme: t,
            transitionState: n,
            shouldUseEnterTransition: r
        } = e;
        return r && "shown" === n ? Ui("animation:", gC, ";animation-duration:", Wt, "ms;animation-delay:", Nt, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : "closed" === n ? Ui("animation:", DC, ";animation-duration:", Wt, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : void 0
    }, ";"),
    NC = rm(bm, {
        target: "e1jb6k2h5"
    })("display:flex;flex-direction:column;justify-content:space-between;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xxl
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";white-space:nowrap;overflow:hidden;cursor:pointer;"),
    WC = rm(BC, {
        target: "e1jb6k2h4"
    })({
        name: "1kzq5ms",
        styles: "height:100%;width:100%"
    }),
    VC = rm("div", {
        target: "e1jb6k2h3"
    })("width:24px;height:24px;flex-shrink:0;display:flex;margin-right:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";"),
    UC = rm("p", {
        target: "e1jb6k2h2"
    })("margin:3px 0 0;line-height:1.2;white-space:pre-wrap;word-wrap:break-word;word-break:break-word;", e => {
        let {
            theme: t
        } = e;
        return t.typography.basic
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";"),
    HC = rm("div", {
        target: "e1jb6k2h1"
    })("position:relative;display:flex;max-width:100%;padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, " ", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, " 0;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.lg
    }, ";word-break:break-word;"),
    qC = rm("div", {
        target: "e1jb6k2h0"
    })("display:flex;flex-direction:column;gap:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space4
    }, " ", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";"),
    KC = e => {
        var t, n, r;
        let {
            screenPosition: o,
            transitionState: a
        } = e;
        const i = ko(),
            s = fg(),
            u = It("messenger", i),
            l = It("whatsapp", i),
            c = It("forms", i),
            d = So(e => e.getApplicationState("contactInvitation").hasSeen),
            p = So(e => e.getApplicationState("mobile")),
            m = So(e => e.getApplicationState("visibility").state);
        is(() => {
            d && "minimized" === m && i.emit("resize-request", p ? {
                width: "100%",
                height: _t + "px",
                ignoreHorizontalOffset: !0
            } : {
                width: zt + "px",
                height: Rt + "px"
            })
        }, [i, d, m]);
        const f = e => {
            e.stopPropagation()
        };
        return Wn.createElement(jC, ur({
            transitionState: a,
            shouldUseEnterTransition: !d
        }, as({
            onAnimationStart: Xn(() => {
                i.emit("resize-request", p ? {
                    width: "100%",
                    height: _t + "px",
                    ignoreHorizontalOffset: !0
                } : {
                    width: zt + "px",
                    height: Rt + "px"
                })
            }),
            onAnimationEnd: Xn(() => {
                jt(i, {
                    hasSeen: !0
                })
            })
        })), Wn.createElement(cC, {
            message: (null == c ? void 0 : c.properties.message) + " " + (null != l && l.enabled ? i.localize("contact_us_on_whatsapp") : "") + " " + (null != u && u.enabled ? i.localize("contact_us_on_messenger") : ""),
            "aria-live": "polite",
            clearOnUnmount: !0
        }), Wn.createElement(bm, {
            reverse: "right" === o
        }, Wn.createElement(mC, ur({}, as({
            onClick: e => {
                if (s) return null == e || e.preventDefault(), void(null == e || e.stopPropagation());
                jt(i, {
                    hidden: !0,
                    transitionState: "closed"
                }), setTimeout(() => {
                    jt(i, {
                        transitionState: "hidden"
                    })
                }, Wt)
            }
        }), {
            "aria-label": i.localize("hide_invitation")
        }))), Wn.createElement(NC, as({
            onClick: () => {
                At(i), s || jt(i, {
                    hidden: !0,
                    transitionState: "hidden"
                })
            }
        }), Wn.createElement(HC, null, Wn.createElement(VC, null, Wn.createElement(WC, {
            imgUrl: null == c ? void 0 : c.properties.agent.avatarUrl,
            text: null == c ? void 0 : c.properties.agent.name
        })), Wn.createElement(UC, null, null == c ? void 0 : c.properties.message)), Wn.createElement(qC, null, (null == l ? void 0 : l.enabled) && Wn.createElement(RC, ur({
            phoneNumber: null == (t = l.properties) ? void 0 : t.phoneNumber,
            countryCode: null == (n = l.properties) ? void 0 : n.countryCode
        }, as({
            onClick: f
        }))), (null == u ? void 0 : u.enabled) && Wn.createElement(zC, ur({
            pageName: null == (r = u.properties) ? void 0 : r.pageName
        }, as({
            onClick: f
        }))))))
    },
    GC = Wp("button", {
        target: "e6evvm21"
    })("display:flex;align-items:center;justify-content:center;position:relative;border:0;background-color:transparent;cursor:pointer;padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";"),
    ZC = Wp(ev, {
        target: "e6evvm20"
    })({
        name: "a4hmbt",
        styles: "position:absolute"
    }),
    YC = e => {
        let {
            delay: t,
            duration: n,
            ...r
        } = e;
        const o = Ii(),
            a = fg();
        return Wn.createElement(GC, r, Wn.createElement(ZC, {
            size: "large",
            progress: a ? 100 : {
                type: "auto",
                delay: t,
                duration: n
            },
            adjustToColor: "light" === o.variant ? o.colors.grayscale[0] : void 0
        }), Wn.createElement(Tg, {
            size: 24,
            color: o.colors.primaryTextColor
        }))
    };
var $C, XC, JC;
const QC = Hi($C || ($C = ug(["\n\tfrom {\n\t\tmax-width: ", "px;\n\t\topacity: 0;\n\t\tborder-radius: ", "px;\n  }\n  to {\n    max-width: calc(", "px - 1em);\n    opacity: 1;\n    border-radius: ", ";\n  }\n"])), Vt, Vt, Ut, Ht),
    eE = Hi(XC || (XC = ug(["\n\tfrom {\n\t\tmax-width: calc(", "px - 1em);\n    opacity: 1;\n    border-radius: ", ";\n\t}\n\tto {\n\t  max-width: ", "px;\n    opacity: 0;\n    border-radius: ", ";\n\t}\n"])), Ut, Ht, Vt, Vt),
    tE = Hi(JC || (JC = ug(["\n\tfrom {\n    opacity: 1;\n    border-radius: ", ";\n\t}\n\tto {\n    opacity: 0;\n    border-radius: ", ";\n\t}\n"])), Ht, Vt);
var nE = {
        name: "1m2k91r",
        styles: "right:0.5em;justify-content:space-between"
    },
    rE = {
        name: "14ltnho",
        styles: "left:0.5em;flex-direction:row-reverse;justify-content:flex-end"
    };
const oE = rm("div", {
        target: "e17nbi8r0"
    })("display:flex;opacity:0;pointer-events:none;position:absolute;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xxl
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.md
    }, ";align-items:flex-start;white-space:nowrap;overflow:hidden;cursor:default;z-index:2;", e => {
        let {
            screenPosition: t
        } = e;
        return "left" === t ? rE : nE
    }, ";", e => {
        let {
            theme: t,
            transitionState: n,
            isPreview: r,
            isAnotherMinimizedElementComing: o
        } = e;
        return "shown" === n ? Ui("pointer-events:all;animation:", r ? QC : Ui(QC, ",", o ? tE : eE, ";"), ";animation-delay:", r ? "0s" : Gt + "ms, " + Zt + "ms", ";animation-duration:", Kt, "ms,", o ? qt : Kt, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : "closed" === n ? Ui("animation:", eE, ";animation-duration:", Kt, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : void 0
    }, ";"),
    aE = rm("div", {
        target: "er6lqub1"
    })("display:flex;align-items:center;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";"),
    iE = rm("span", {
        target: "er6lqub0"
    })("color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";margin-right:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, ";font-size:24px;font-weight:700;"),
    sE = e => {
        let {
            rating: t
        } = e;
        const n = Math.floor(t),
            r = Number((t - n).toFixed(2)),
            o = n + (r >= .8 ? 1 : 0),
            a = r > .2 && r < .8,
            i = Array.from({
                length: 5
            }, (e, t) => t < o ? Wn.createElement(Yg, {
                label: "Full Star Icon",
                role: "img"
            }) : t === o && a ? Wn.createElement(Zg, {
                label: "Half Star Icon",
                role: "img"
            }) : Wn.createElement(Gg, {
                label: "Empty Star Icon",
                role: "img"
            }));
        return Wn.createElement(aE, null, Wn.createElement(iE, null, t.toFixed(1)), i.map((e, t) => Wn.createElement(Wn.Fragment, {
            key: t
        }, e)))
    },
    uE = Wn.memo(sE),
    lE = rm("div", {
        target: "e1yihp563"
    })("display:flex;flex-direction:column;min-width:0;overflow:hidden;gap:6px;padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";", e => {
        let {
            screenPosition: t,
            theme: n
        } = e;
        return t && Ui("padding-", "left" === t ? "right" : "left", ":", n.spaces.space6, ";")
    }, ";"),
    cE = rm("div", {
        target: "e1yihp562"
    })("color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";"),
    dE = rm("a", {
        target: "e1yihp561"
    })("border:0;padding:0;margin:0;text-decoration:none;background-color:transparent;width:max-content;display:flex;flex-wrap:wrap;align-items:center;gap:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";strong{color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";}"),
    pE = rm(Pg, {
        target: "e1yihp560"
    })({
        name: "5w6j9d",
        styles: "height:14px;width:auto"
    }),
    mE = e => {
        let {
            rating: t,
            name: n,
            screenPosition: r,
            url: o,
            label: a,
            linkProps: i
        } = e;
        return Wn.createElement(lE, {
            screenPosition: r
        }, Wn.createElement(uE, {
            rating: t
        }), Wn.createElement(cE, {
            ellipsis: !0
        }, n), Wn.createElement(cE, null, Wn.createElement(dE, ur({
            href: o,
            rel: "noreferrer",
            target: "_blank"
        }, i), a, Wn.createElement(pE, {
            "aria-label": "Google"
        }))))
    },
    fE = e => {
        var t;
        let {
            screenPosition: n
        } = e;
        const r = ko(),
            {
                organizationId: o,
                owApiURL: a
            } = So(e => e.getApplicationState()),
            {
                name: i,
                rating: s,
                url: u,
                userRatingsTotal: l
            } = null == (t = It("googleReviews", r)) ? void 0 : t.properties,
            c = o && Ot(u, o, a),
            d = r.localize("check_x_reviews_on_google", {
                count: l
            }, l);
        return Wn.createElement(mE, {
            screenPosition: n,
            name: i,
            rating: s,
            url: c,
            label: Wn.createElement(Qe, {
                template: d
            }),
            linkProps: as({
                onClick: e => {
                    e.stopPropagation()
                }
            })
        })
    },
    hE = e => {
        var t;
        let {
            screenPosition: n,
            ...r
        } = e;
        const o = ko(),
            a = Ce(),
            i = Wn.useRef(0),
            s = fg(),
            u = So(e => {
                var t, n;
                return null != (t = null == (n = e.getView("minimized").eventsQueue) ? void 0 : n.includes("visitorCounter")) && t
            }),
            {
                name: l,
                userRatingsTotal: c
            } = null == (t = It("googleReviews", o)) ? void 0 : t.properties,
            d = o.localize("check_x_reviews_on_google", {
                count: c
            }, c);
        return Wn.createElement(oE, ur({
            screenPosition: n,
            isPreview: s,
            isAnotherMinimizedElementComing: u
        }, r, as({
            onClick: () => {
                At(o)
            },
            onAnimationStart: Xn(() => {
                o.emit("resize-request", a ? {
                    width: "100%",
                    height: Yt + "px"
                } : {
                    width: Ut + "px",
                    height: Yt + "px"
                })
            })
        })), Wn.createElement(cC, {
            message: l + " " + d + " Google",
            clearOnUnmount: !0,
            "aria-live": "polite"
        }), Wn.createElement(fE, {
            screenPosition: n
        }), Wn.createElement(YC, ur({
            duration: $t,
            delay: Gt + Kt
        }, as({
            onClick: () => {
                s || (window.clearTimeout(i.current), Xt(o, {
                    transitionState: "closed",
                    hidden: !0
                }), setTimeout(() => {
                    Xt(o, {
                        transitionState: "hidden"
                    })
                }, Kt))
            }
        }), {
            "aria-label": o.localize("hide_google_reviews")
        })))
    },
    gE = rm("span", {
        target: "e18wkano0"
    })({
        name: "1i2clz5",
        styles: "font-size:2.5em;line-height:1"
    }),
    DE = e => {
        let {
            event: t,
            radiusType: n
        } = e;
        return Vn.createElement(tf, {
            radiusType: n
        }, Vn.createElement(jf, null, Vn.createElement(gE, null, Vn.createElement(BD, null, t.properties.text))))
    };

function vE(e, t) {
    return (vE = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function bE(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vE(e, t)
}
const yE = e => {
    const t = Ii();
    let n, r;
    return t && "modern" === t.name && (n = 150, r = 250), Vn.createElement(db, ur({
        maxWidth: n,
        maxHeight: r
    }, e, {
        withMargin: !0
    }))
};
let xE = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    bE(t, e);
    var n = t.prototype;
    return n.componentDidUpdate = function(e, t, n) {
        n && this._messageListContext.scrollToBottom()
    }, n.getSnapshotBeforeUpdate = function(e) {
        return !this.shouldRenderPreview(e) && this.shouldRenderPreview() && this._messageListContext.isScrollOnBottom()
    }, n.shouldRenderPreview = function(e) {
        return void 0 === e && (e = this.props), Boolean(e.urlPreview.properties.title)
    }, n.render = function() {
        return Vn.createElement(vf, null, e => {
            this._messageListContext = e;
            const {
                urlPreview: {
                    properties: t
                },
                radiusType: n
            } = this.props, r = Jt(["url", "link"], t.image);
            return this.shouldRenderPreview() ? Vn.createElement(tf, {
                radiusType: n
            }, Vn.createElement(yE, r), Vn.createElement(Rf, {
                subtitle: t.description,
                title: t.title
            })) : Vn.createElement(tf, {
                radiusType: n
            }, Vn.createElement(Cb, {
                text: t.text
            }))
        })
    }, t
}(Vn.Component);
const CE = function(e, t, n, r) {
        return void 0 === n && (n = []), void 0 === r && (r = ""), e.buttons ? { ...e,
            buttons: e.buttons.map((e, o) => {
                const a = ((e, t) => {
                    if ("url" === e.type && e.proxiedValue) {
                        if (Qt(t) === Qt(e.proxiedValue)) return "current"
                    }
                })(e, r);
                return { ...e,
                    disabled: De(o, n),
                    ...t && {
                        "aria-disabled": "true"
                    },
                    ...a && {
                        target: a
                    }
                }
            })
        } : e
    },
    EE = e => {
        let {
            card: t,
            disabledButtons: n,
            eventId: r,
            onActionButtonClick: o,
            onShowMoreButtonClick: a,
            pageUrl: i,
            ...s
        } = e;
        const [u, l] = Vn.useState(!1);
        return Vn.useEffect(() => {
            if (u) {
                const e = setTimeout(() => {
                    l(!1)
                }, 1e3);
                return () => clearTimeout(e)
            }
        }, [u]), Vn.createElement(Mv, ur({
            card: CE(t, u, n, i),
            onButtonClick: (e, n) => {
                u || (l(!0), o({
                    button: t.buttons[e],
                    event: r,
                    browserEvent: n
                }))
            },
            onShowMoreButtonClick: a
        }, s))
    },
    wE = rm("div", {
        target: "e1kfksj70"
    })({
        name: "yoe8zv",
        styles: "margin:0;margin-bottom:4px;font-size:1em;font-weight:400"
    }),
    FE = e => {
        let {
            event: t,
            mobile: n,
            radiusType: r,
            areChatInteractionButtonsActive: o,
            onActionButtonClick: a,
            onShowMoreButtonClick: i,
            onShow: s = Un,
            rtl: u,
            pageUrl: l,
            isStreamingPreview: c = !1,
            scrollToBottom: d
        } = e;
        xp(s);
        const p = Ii(),
            {
                localize: m
            } = ko(),
            f = Vn.useCallback(e => {
                var n;
                if (void 0 === o || t.properties.invitation && !t.thread) return [];
                return (null == e || null == (n = e.buttons) ? void 0 : n.reduce((e, t, n) => ((e => "cancel" === e.type || ["webview", "message"].includes(e.type) && !o)(t) && e.push(n), e), [])) || []
            }, [o, t.properties.invitation, t.thread]);
        switch (t.type) {
            case "carousel":
                return Vn.createElement(sg, {
                    dir: u ? "rtl" : "ltr",
                    mobile: n,
                    scrollableElementPadding: p.spaces.space5,
                    nextItemLabel: m("next_item"),
                    previousItemLabel: m("previous_item")
                }, t.properties.cards.map((e, n) => Vn.createElement(EE, {
                    key: n,
                    card: e,
                    eventId: t.id,
                    disabledButtons: f(e),
                    onActionButtonClick: a,
                    TitleComponent: wE,
                    onShowMoreButtonClick: i,
                    pageUrl: l
                })));
            case "message":
            case "message_draft":
                return Vn.createElement(kb, ur({}, t.properties, {
                    own: t.own,
                    radiusType: r,
                    draft: "message_draft" === t.type && null === t.serverId,
                    eventId: t.properties.quickReplies && t.id,
                    isStreamingPreview: c,
                    scrollToBottom: d
                }));
            case "emoji":
                return Vn.createElement(DE, {
                    event: t,
                    radiusType: r
                });
            case "rich_message":
                return Vn.createElement(EE, {
                    eventId: t.id,
                    card: t.properties.card,
                    disabledButtons: f(t.properties.card),
                    onActionButtonClick: a,
                    onShowMoreButtonClick: i,
                    pageUrl: l
                });
            case "sticker":
                return Vn.createElement(Tb, t.properties);
            case "url_preview":
                return Vn.createElement(xE, {
                    radiusType: r,
                    urlPreview: t
                });
            case "image_preview":
                {
                    const e = Jt(["url", "link", "width", "height", "srcSet", "alternativeText", "name"], t.properties);
                    return Vn.createElement(yE, e)
                }
        }
        return null
    };
var kE;
const SE = e => Ui("transition-delay:", e, "ms;"),
    LE = e => e(kE || (kE = ug(["\n\t&-enter,\n\t&-appear {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t}\n\n\t&-enter-active,\n\t&-appear-active {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n\n\t&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t\ttransition: opacity 100ms ease-in, transform 200ms ease-in;\n\t}\n"]))),
    TE = e => {
        let {
            delay: t = 0,
            ...n
        } = e;
        return Wi(Gi, null, e => {
            let {
                css: r
            } = e;
            return Wi(mm, ur({}, n, {
                timeout: 200 + t,
                classNames: LE(r),
                css: SE(t)
            }))
        })
    };
var PE;
const BE = Hi(PE || (PE = ug(["\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(8px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n"]))),
    AE = rm(bm, {
        target: "e1wumze50"
    })("width:100%;margin-bottom:", e => e.noMargin ? 0 : 8, "px;", e => {
        let {
            animated: t
        } = e;
        return t && Ui("opacity:0;transform:translateY(8px);animation:", BE, " 200ms ease-in forwards;animation-delay:200ms;")
    }, ";"),
    ME = e => {
        let {
            reverse: t,
            noMargin: n,
            children: r,
            animated: o,
            ...a
        } = e;
        return Vn.createElement(TE, a, Vn.createElement(AE, {
            reverse: t,
            noMargin: n,
            animated: o
        }, r))
    };
var OE;
const IE = Hi(OE || (OE = ug(["\n\t0% {\n\t\topacity: 0;\n\t\ttransform: translateY(30px);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translateY(0);\n\t}\n"]))),
    _E = rm(nf, {
        displayName: "Invitation",
        section: !0,
        target: "efsb37y0"
    })("line-height:1.35;max-width:", e => {
        let {
            maxWidth: t
        } = e;
        return t
    }, ";width:100%;margin-bottom:8px;align-items:", e => {
        let {
            reverse: t
        } = e;
        return t ? "flex-end" : "flex-start"
    }, ";&:hover{", dC, "{opacity:1;}}", xv, ",", tf, "{color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";}", e => {
        let {
            animated: t,
            theme: n
        } = e;
        return t && Ui("opacity:0;transform:translateY(30px);animation:", IE, " 300ms ", n.transitions.easings.smooth, " forwards;animation-delay:400ms;")
    }, ";"),
    zE = rm(bm, {
        target: "e1svly570"
    })(e => {
        let {
            theme: t
        } = e;
        return t.typography.basic
    }, " color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";max-width:100%;margin-bottom:10px;cursor:pointer;box-shadow:none;"),
    RE = rm(tf, {
        target: "e1r3j30a1"
    })("width:100%;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";transition:border-color 100ms ease-in-out;background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";", e => "modern" === e.theme.name && {
        padding: 0
    }, " border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";"),
    jE = rm(jf, {
        target: "e1r3j30a0"
    })("padding:", "8px", ";"),
    NE = e => {
        let {
            children: t
        } = e;
        return Vn.createElement(RE, null, Vn.createElement(jE, null, t))
    },
    WE = rm(tf, {
        target: "ejca6bd0"
    })("max-width:255px;cursor:pointer;background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.floating
    }, ";"),
    VE = e => {
        let {
            children: t,
            ...n
        } = e;
        return Vn.createElement(WE, n, Vn.createElement(jf, null, t))
    },
    UE = rm("input", {
        target: "e19y96k30"
    })("width:", e => {
        let {
            mobile: t
        } = e;
        return t ? "290px" : "240px"
    }, ";margin:-8px;padding:14px 10px;", e => {
        let {
            theme: t
        } = e;
        const n = t.isRtl ? "left" : "right";
        return Ui("margin-", n, ":-40px;padding-", n, ":40px;")
    }, ";min-width:0;flex:1;outline:none;font-family:inherit;border:1px solid transparent;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.input
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xl
    }, ";&::placeholder{color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";}&:focus{border-color:", e => e.theme.colors.cta, ";}"),
    HE = e => Ui("display:flex;flex-shrink:0;color:", e.colors.ctaText, ";background-color:", e.colors.cta, ";transition:background-color 100ms ease-in-out;&:disabled{background-color:", e.colors.disabled, ";color:", e.colors.disabledContrast, ";}"),
    qE = e => {
        let {
            disabled: t,
            mobile: n,
            children: r,
            onPress: o,
            ...a
        } = e;
        const {
            localize: i
        } = ko();
        return Wi(Ng, ur({
            skipFocusVisible: !0,
            type: "submit",
            disabled: t,
            mobile: n,
            css: HE,
            onPress: o,
            "aria-label": i("send_message")
        }, a), r)
    };
var KE, GE, ZE, YE;
const $E = ["0px, 0px", "0px, -8px", "0px, -10px", "0px, -6px", "0px, -2px", "0px, 3px", "0px, 2px", "0px, -1px"],
    XE = [9, 30, 51],
    JE = [
        ["0%, 66.67%, 100%", "6.67%", "13.33%, 20%", "26.67%", "33.33%", "40%", "46.67%", "53.33%"],
        ["0%, 6.67%, 73.33%, 100%", "13.33%", "20%, 26.67%", "33.33%", "40%", "46.67%", "53.33%", "60%"],
        ["0%, 13.33%, 80%, 100%", "20%", "26.67%, 33.33%", "40%", "46.67%", "53.33%", "60%", "66.67%"]
    ].map((e, t) => ((e, t) => {
        const n = XE[t] - 30;
        return Hi(KE || (KE = ug(["\n        ", "\n    "])), e.map((e, t) => e + " { transform: translateX(" + n + "px) translate(" + $E[t] + "); }"))
    })(e, t)),
    QE = [210, 90, 330],
    ew = e => Ui("min-width:", e, ";"),
    tw = (e, t, n, r) => {
        return t ? "rotating" === n ? (i = XE[e], s = QE[e], Hi(ZE || (ZE = ug(["\n\tfrom { transform: translateX(", "px); }\n\tto { transform: rotate(", "deg) translateX(12px) rotate(-", "deg); }\n"])), i - 30, s, s)) : (o = QE[e], a = XE[e], Hi(YE || (YE = ug(["\n\tfrom { transform: rotate(", "deg) translateX(12px) rotate(-", "deg); }\n\tto { transform: translateX(", "px); }\n"])), o, o, a - 30)) : "rotating" === r ? (u = QE[e], Hi(GE || (GE = ug(["\n\tfrom { transform: rotate(", "deg) translateX(12px) rotate(-", "deg); }\n\tto { transform: rotate(", "deg) translateX(12px) rotate(-", "deg); }\n"])), u, u, u + 360, u + 360)) : JE[e];
        var o, a, i, s, u
    },
    nw = e => {
        let {
            height: t,
            width: n,
            animationDuration: r = 2,
            animationIterationCount: o,
            color: a,
            mode: i = "typing",
            ...s
        } = e;
        const u = Ii(),
            [l, c] = Vn.useState(!1),
            [d, p] = Vn.useState(i),
            m = yd(i);
        return Vn.useEffect(() => {
            i !== m && (c(!0), setTimeout(() => {
                p(i), c(!1)
            }, 300))
        }, [i, m]), Wi("svg", ur({
            viewBox: "0 0 60 40",
            height: t,
            width: n,
            fill: a || u.colors.primaryTextColor
        }, n && {
            css: ew(n)
        }, s), [0, 1, 2].map(e => {
            const t = tw(e, l, i, d),
                n = l ? .3 : r,
                s = l ? 1 : o;
            return Wi("circle", {
                key: e,
                r: "6",
                cx: 30,
                cy: 20,
                fill: a || u.colors.primaryTextColor,
                css: Ui("transform-box:fill-box;transform-origin:", 30, "px ", 20, "px;animation-timing-function:", l ? "ease-out" : u.transitions.easings.linear, ";animation-name:", t, ";animation-duration:", n, "s;animation-iteration-count:", s || "infinite", ";animation-delay:0ms;animation-fill-mode:", l || "typing" === d ? "both" : "none", ";")
            })
        }))
    },
    rw = rm(_E, {
        target: "e1u2equ40"
    })({
        name: "kvqlxk",
        styles: "width:255px"
    }),
    ow = e => {
        let {
            onClose: t,
            onAnimationStart: n,
            rowReverse: r = !1,
            ...o
        } = e;
        return Vn.createElement(rw, ur({
            animated: !0,
            reverse: r
        }, as({
            onAnimationStart: n
        })), Vn.createElement(nf, null, Vn.createElement(bm, {
            reverse: r
        }, Vn.createElement(mC, as({
            onClick: t
        }))), Vn.createElement(bm, {
            reverse: r
        }, Vn.createElement(VE, o, Vn.createElement(nw, {
            width: "32px",
            height: "21px"
        })))))
    },
    aw = rm("form", {
        target: "e1gikzvv0"
    })({
        name: "ti75j2",
        styles: "margin:0"
    }),
    iw = e => {
        var t;
        let {
            type: n,
            mobile: r,
            greetingEvent: o,
            animated: a = !1
        } = e;
        const i = ko(),
            s = So(e => e.getApplicationState("language")),
            u = i.localize,
            l = "en" === s ? "Type your email…" : u("forms_email").replace(":", ""),
            c = Vn.useCallback(() => At(i), [i]),
            d = Vn.useCallback(e => dt(i, e), [i]),
            p = Vn.useCallback(e => en(i, xe, e), [i]),
            m = Vn.useCallback(() => tn(i), [i]),
            f = Vn.useCallback((e, t) => nn(i, e, t), [i]),
            h = Vn.useCallback(e => {
                switch (n) {
                    case "message_input":
                        return void p(e);
                    case "email_input":
                        {
                            var t;
                            const n = null == (t = o.properties) || null == (t = t.card) ? void 0 : t.buttons.find(e => "webview" === e.type);
                            if (!n) return;
                            const r = new URL(n.value);
                            return r.searchParams.set("email", e),
                            void d({
                                url: r.toString()
                            })
                        }
                    default:
                        return
                }
            }, [o, p, d, n]),
            g = e => {
                f({
                    messageInput: e.target.value
                }, {
                    scheduleRerender: !1
                })
            },
            {
                inputProps: D,
                buttonIcon: v
            } = ((e, t, n) => {
                switch (e) {
                    case "message_input":
                        {
                            const e = n("write_a_message");
                            return {
                                buttonIcon: Vn.createElement(Jg, null),
                                inputProps: {
                                    placeholder: e,
                                    "aria-label": e
                                }
                            }
                        }
                    case "email_input":
                        return {
                            buttonIcon: Vn.createElement(Sg, null),
                            inputProps: {
                                type: "email",
                                placeholder: t,
                                "aria-label": t
                            }
                        };
                    default:
                        return {
                            buttonIcon: null,
                            inputProps: {}
                        }
                }
            })(n, l, u);
        return Vn.createElement(ME, {
            animated: a,
            delay: 750
        }, Vn.createElement(NE, null, Vn.createElement(aw, as({
            onSubmit: e => {
                var t;
                e.preventDefault();
                const n = null == (t = m().messageInput) ? void 0 : t.trim();
                n && (c(), f({
                    messageInput: ""
                }), h(n))
            }
        }), Vn.createElement(bm, null, Vn.createElement(UE, ur({
            mobile: r
        }, D, as({
            onKeyUp: g,
            onChange: g
        }), {
            value: m().messageInput
        })), Vn.createElement(qE, {
            disabled: !(null != (t = m().messageInput) && t.trim()),
            "data-lc-prop": "disabled:!messageInput"
        }, v)))))
    },
    sw = rm(zE, {
        target: "e14hu3ox0"
    })(e => {
        let {
            maxHeight: t
        } = e;
        return t && Ui("max-height:", t, "px;")
    }, ";"),
    uw = (e, t) => {
        if (0 === e) return null;
        const n = e - t;
        return n > 401 && n <= 525 ? 210 : n <= 400 ? 130 : null
    },
    lw = nr ? 100 : 1200,
    cw = e => {
        const {
            children: t,
            screenPosition: n,
            onClose: r,
            onPress: o,
            onShow: a
        } = e, {
            showIndicator: i
        } = So(e => tn(e)), s = ko(), u = Vn.useCallback(e => nn(s, e), [s]);
        return is(() => {
            if (void 0 === i && (s.emit("resize-to-theme-size"), s.once("resize-to-theme-size-done", () => u({
                    showIndicator: !0
                }))), i) {
                const e = setTimeout(() => {
                    s.emit("resize-to-theme-size"), s.once("resize-to-theme-size-done", () => {
                        u({
                            showIndicator: !1
                        }), setTimeout(a, 0)
                    })
                }, lw);
                return () => clearTimeout(e)
            }
        }, [s, i, u, a]), i ? Vn.createElement(ow, ur({
            onClose: r,
            rowReverse: "right" === n
        }, as({
            onClick: o
        }), {
            onAnimationStart: Xn(() => s.emit("resize-to-dimensions"))
        })) : void 0 === i ? null : t
    },
    dw = e => {
        var t;
        let {
            id: n,
            onResize: r,
            onPress: o
        } = e;
        const a = ko(),
            {
                clientHeight: i,
                isPreview: s,
                screenOffset: u,
                wasDisplayed: l,
                event: c,
                mobile: d,
                screenPosition: p,
                rtl: m,
                isExitIntent: f
            } = So(e => ((e, t) => {
                const {
                    mobile: n,
                    clientHeight: r,
                    isPreview: o,
                    rtl: a,
                    config: {
                        screenOffset: i
                    }
                } = e.getApplicationState(), s = e.getEvent(xe, t), u = pr(s), l = sn(e, s);
                return s.properties.card && s.properties.card.image && (u.properties.card.image = G(["link"], s.properties.card.image)), s.properties.text && (u.properties.text = un(200, s.properties.text)), {
                    clientHeight: r,
                    isPreview: o,
                    screenOffset: i,
                    mobile: n,
                    wasDisplayed: l,
                    rtl: a,
                    event: u,
                    screenPosition: ln(e),
                    isExitIntent: u.properties.isExitIntent
                }
            })(e, n)),
            {
                quickReplies: h,
                addon: g
            } = c.properties,
            D = pd(() => !l && !f),
            v = !(null == c || null == (t = c.properties) || null == (t = t.card) || !t.image),
            b = Vn.useMemo(() => h && !$(h), [h]),
            y = Vn.useCallback(() => {
                s || rn(a)
            }, [a, s]),
            x = Vn.useCallback(() => {
                s || on(a)
            }, [a, s]),
            C = Vn.useCallback(e => {
                let {
                    event: t,
                    button: n
                } = e;
                an(a, t, n, !0)
            }, [a]),
            E = Vn.useCallback(e => {
                C({
                    event: c.id,
                    button: h[e]
                })
            }, [c.id, C, h]);
        is(() => {
            f && a.emit("resize-to-theme-size")
        }, [a, f]);
        const w = Vn.createElement(_E, ur({
            animated: D,
            reverse: "right" === p,
            maxWidth: "message" === c.type ? "255px" : "230px"
        }, as({
            onAnimationStart: Xn(() => a.emit("resize-to-dimensions"))
        })), Vn.createElement(bm, {
            reverse: "right" === p
        }, Vn.createElement(mC, ur({
            mobile: d,
            "aria-label": a.localize("hide_greeting")
        }, as({
            onClick: y
        })))), Vn.createElement(sw, ur({
            reverse: "right" === p,
            maxHeight: uw(i, u.y)
        }, as({
            onClick: o
        })), Vn.createElement(FE, {
            event: c,
            mobile: d,
            onActionButtonClick: C,
            onShowMoreButtonClick: o,
            rtl: m
        })), b && Vn.createElement(bm, {
            reverse: "right" === p
        }, Vn.createElement(hv, {
            "aria-labelledby": c.id,
            replies: h,
            onSelect: E
        })), g && De("input", g) && Vn.createElement(zE, {
            reverse: "right" === p,
            fullWidth: d && v
        }, Vn.createElement(iw, {
            mobile: d,
            type: g,
            greetingEvent: c,
            animated: D
        })));
        return D ? Vn.createElement(cw, {
            screenPosition: p,
            onResize: r,
            onClose: y,
            onPress: o,
            onShow: x
        }, w) : w
    },
    pw = e => {
        let {
            width: t,
            height: n
        } = e;
        return Wn.createElement("svg", {
            viewBox: "0 0 16 16",
            height: n,
            width: t
        }, Wn.createElement("g", null, Wn.createElement("g", null, Wn.createElement("defs", null, Wn.createElement("linearGradient", {
            id: "idMxj8N4CLSg262406917",
            gradientTransform: "rotate(90, 0.5, 0.5)"
        }, Wn.createElement("stop", {
            offset: "0",
            stopColor: "#77Cf9D",
            stopOpacity: "1"
        }), Wn.createElement("stop", {
            offset: "1",
            stopColor: "#268750",
            stopOpacity: "1"
        }))), Wn.createElement("path", {
            d: "M 16 8 C 16 7.453 15.692 6.838 15.076 6.156 C 14.614 5.644 14.343 4.988 14.308 4.299 C 14.262 3.38 14.045 2.728 13.658 2.342 C 13.272 1.955 12.62 1.738 11.701 1.692 C 11.012 1.657 10.356 1.387 9.844 0.925 C 9.162 0.308 8.547 0 8 0 C 7.454 0 6.843 0.306 6.166 0.92 C 5.653 1.385 4.994 1.657 4.303 1.692 C 3.382 1.738 2.728 1.955 2.342 2.342 C 1.955 2.728 1.74 3.379 1.696 4.297 C 1.663 4.989 1.391 5.649 0.926 6.163 C 0.307 6.842 0 7.454 0 8 C 0 8.546 0.308 9.158 0.923 9.839 L 0.925 9.837 C 1.39 10.351 1.662 11.011 1.696 11.703 C 1.74 12.621 1.955 13.273 2.342 13.658 C 2.728 14.045 3.38 14.262 4.299 14.308 C 4.988 14.343 5.644 14.613 6.156 15.075 C 6.838 15.692 7.453 16 8 16 C 8.547 16 9.162 15.692 9.844 15.076 C 10.356 14.614 11.012 14.343 11.701 14.308 C 12.62 14.262 13.272 14.045 13.658 13.658 C 14.045 13.272 14.262 12.62 14.308 11.701 C 14.343 11.012 14.613 10.356 15.075 9.844 C 15.692 9.162 16 8.547 16 8 Z",
            fill: "url(#idMxj8N4CLSg262406917)"
        })), Wn.createElement("path", {
            d: "M 6.86 11.278 L 3.94 8.36 L 5.041 7.252 L 6.806 9.016 L 10.552 4.934 L 11.7 5.994 Z",
            fill: "rgb(247,255,247)"
        })))
    },
    mw = (e, t) => {
        const n = new URL(t);
        return "https://openwidget.com/verified?" + ir({
            sessions: e,
            domain: n.hostname
        })
    },
    fw = rm("div", {
        target: "e1arqr0l2"
    })("display:flex;flex-direction:column;min-width:0;overflow:hidden;gap:6px;padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";", e => {
        let {
            screenPosition: t,
            theme: n
        } = e;
        return t && Ui("padding-", "left" === t ? "right" : "left", ":", n.spaces.space6, ";")
    }, ";"),
    hw = rm("div", {
        target: "e1arqr0l1"
    })("text-align:left;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";"),
    gw = rm("a", {
        target: "e1arqr0l0"
    })("border:0;padding:0;margin:0;text-decoration:none;background-color:transparent;display:flex;align-items:center;gap:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.secondaryTextColor
    }, ";", e => {
        let {
            theme: t
        } = e;
        return t.typography.caption
    }, ";"),
    Dw = e => {
        let {
            sessions: t,
            url: n,
            screenPosition: r,
            announce: o = !1
        } = e;
        const {
            localize: a
        } = ko(), i = a("x_people_are_browsing_website", {
            count: t
        }, t);
        return Wn.createElement(fw, {
            screenPosition: r
        }, o && Wn.createElement(cC, {
            message: i + " Verified by OpenWidget",
            "aria-live": "polite",
            clearOnUnmount: !0
        }), Wn.createElement(hw, null, Wn.createElement(Qe, {
            template: i
        })), Wn.createElement(gw, ur({
            href: mw(t, n),
            rel: "noreferrer",
            target: "_blank"
        }, as({
            onClick: e => {
                e.stopPropagation()
            }
        })), Wn.createElement(pw, {
            width: "16",
            height: "16",
            "aria-hidden": !0
        }), " ", Wn.createElement("span", null, "Verified by OpenWidget")))
    };
var vw, bw, yw;
const xw = Hi(vw || (vw = ug([" \n\t0% {\n\t\tmax-width: ", "px;\n\t\topacity: 0;\n\t\tborder-radius: ", "px;\n\t\tmax-height: 60px;\n\t\twhite-space: nowrap;\n\t} \n\t50% {\n\t\twhite-space: nowrap;\n\t} \n\t100% {\n\t\twhite-space: normal;\n\t\tmax-width: calc(", "px - 1em);\n\t\topacity: 1;\n\t\tborder-radius: ", ";\n\t\tmax-height: 100px;\n\t}\n"])), cn, cn, dn, pn),
    Cw = Hi(bw || (bw = ug([" \n\t0% {\n\t\twhite-space: nowrap;\n\t\tmax-width: calc(", "px - 1em);\n\t\tmax-height: 100px;\n\t\topacity: 1;\n\t\tborder-radius: ", ";\n\t} \n\t50% {\n\t\t\twhite-space: nowrap;\n\t} \n\t100% {\n\t\twhite-space: normal;\n\t\tmax-width: ", "px;\n\t\tmax-height: 60px;\n\t\topacity: 0;\n\t\tborder-radius: ", ";\n\t}\n"])), dn, pn, cn, cn),
    Ew = Hi(yw || (yw = ug([" \n\tfrom {\n\t\tmax-width: calc(", "px - 1em);\n\t\ttransform: translateY(50px);\n\t\topacity: 0;\n\t\tborder-radius: ", "px;\n\t} \n\tto {\n\t\tmax-width: calc(", "px - 1em);\n\t\ttransform: translateY(0px);\n\t\topacity: 1;\n\t\tborder-radius: ", ";\n\t}\n"])), dn, cn, dn, pn);
var ww = {
        name: "1m2k91r",
        styles: "right:0.5em;justify-content:space-between"
    },
    Fw = {
        name: "14ltnho",
        styles: "left:0.5em;flex-direction:row-reverse;justify-content:flex-end"
    };
const kw = rm("div", {
        target: "eepg5sj0"
    })("display:flex;opacity:0;pointer-events:none;position:absolute;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xxl
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.md
    }, ";width:max-content;overflow:hidden;cursor:default;z-index:2;", e => {
        let {
            screenPosition: t
        } = e;
        return "left" === t ? Fw : ww
    }, ";", e => {
        let {
            theme: t,
            transitionState: n,
            isPreview: r,
            wasOtherMinimizedElementPreviously: o
        } = e;
        return "shown" === n ? Ui("pointer-events:all;animation:", r ? xw : Ui(o ? Ew : xw, ",", Cw, ";"), ";animation-delay:", r ? "0s" : (o ? 0 : hn) + "ms, " + vn + "ms", ";animation-duration:", o ? Dn : gn, "ms,", gn, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : "closed" === n ? Ui("animation:", Cw, ";animation-duration:", gn, "ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;") : void 0
    }, ";"),
    Sw = e => {
        let {
            session: t,
            screenPosition: n,
            ...r
        } = e;
        const o = ko(),
            a = Ce(),
            i = Wn.useRef(0),
            s = So(e => e.getApplicationState("page")),
            {
                sessions: u
            } = t,
            l = fg(),
            c = So(e => {
                var t;
                return Boolean("hidden" === (null == (t = e.getApplicationState("googleReviews")) ? void 0 : t.transitionState))
            });
        return Wn.createElement(kw, ur({
            screenPosition: n,
            isPreview: l,
            wasOtherMinimizedElementPreviously: c
        }, r, as({
            onClick: () => {
                At(o)
            },
            onAnimationStart: Xn(() => {
                o.emit("resize-request", a ? {
                    width: "100%",
                    height: mn + "px"
                } : {
                    width: dn + "px",
                    height: mn + "px"
                })
            })
        })), Wn.createElement(Dw, {
            sessions: u,
            url: s.url,
            screenPosition: n,
            announce: !0
        }), Wn.createElement(YC, ur({
            duration: fn,
            delay: hn + gn
        }, as({
            onClick: () => {
                l || (window.clearTimeout(i.current), bn(o, {
                    transitionState: "closed"
                }), setTimeout(() => {
                    bn(o, {
                        transitionState: "hidden"
                    })
                }, gn))
            }
        }), {
            "aria-label": o.localize("hide_visitor_counter")
        })))
    },
    Lw = rm("p", {
        target: "ejp8d810"
    })({
        name: "oelr46",
        styles: "margin:1em 0"
    });
var Tw, Pw, Bw, Aw, Mw;
const Ow = Hi(Tw || (Tw = ug(["\n\t0% {\n\t\ttransform: scale(1.0);\n\t}\n\n\t100% {\n\t\ttransform: scale(1.05);\n\t}\n"]))),
    Iw = Hi(Pw || (Pw = ug(["\n\t0% {\n\t\ttransform: scale(1.05);\n\t}\n\n\t100% {\n\t\ttransform: scale(1.0);\n\t}\n"]))),
    _w = Hi(Bw || (Bw = ug(["\n\t0% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n\n\t100% {\n\t\topacity: 0;\n\t\ttransform: scale(0.8);\n\n\t}\n"]))),
    zw = Hi(Aw || (Aw = ug(["\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0.8);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1);\n\t}\n"]))),
    Rw = Hi(Mw || (Mw = ug(["\n\t0% {\n\t\topacity: 0;\n\t\ttransform: scale(0);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: scale(1.3);\n\t}\n"]))),
    jw = e => {
        let {
            height: t,
            width: n,
            color: r,
            ...o
        } = e;
        const a = Ii();
        return Vn.createElement("svg", ur({
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 58 52",
            height: t,
            width: n
        }, o), Vn.createElement("path", {
            d: "M29.481017,9 L26.7193716,9.00780269 L25.0166328,9.03077059 C21.0467647,9.10067287 17.1033343,9.28474889 13.272705,9.58299863 C11.1559364,9.77777398 9.61646844,11.3359767 9.42403494,13.2837302 L9.35895495,13.9827722 C9.18193028,16.0645766 9.0669853,18.9848792 9,22.1934446 L9,29.8065554 L9.04251657,31.5660142 C9.1220023,34.4365801 9.24537246,36.9681814 9.42403494,38.7162698 C9.61646844,40.6640233 11.1559364,42.222226 13.272705,42.4170014 C17.1033343,42.7152511 21.0467647,42.8993271 25.0166328,42.9692294 L26.7193716,42.9921973 L29.5976553,43 L31.2426614,42.9926959 C35.7862719,42.9500888 40.3114659,42.7583568 44.6893281,42.4174999 C46.8060966,42.2227246 48.3455646,40.6645218 48.5379981,38.7167684 L48.6030781,38.0177264 C48.8197734,35.4693959 48.9434478,29.6646482 49,25.6127275 L48.962033,22.192946 L48.9195164,20.4334872 C48.8400307,17.5629214 48.7166605,15.0313201 48.5379981,13.2832316 C48.3455646,11.3354782 46.8060966,9.77727542 44.6893281,9.58250007 C40.8586987,9.28425033 36.9152683,9.10017431 32.9454002,9.03027203 L31.2426614,9.00730413 L29.481017,9 Z",
            fill: r || a.colors.minimizedBackground
        }))
    },
    Nw = e => {
        let {
            height: t,
            width: n,
            color: r,
            ...o
        } = e;
        const a = Ii();
        return Vn.createElement("svg", ur({
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 58 52",
            height: t,
            width: n
        }, o), Vn.createElement("path", {
            d: "M29.0008033,0 C34.4212311,0 40.0352456,0.194420965 45.0684999,0.583262896 C51.650448,1.16652579 57.0708757,6.22147089 57.6516358,13.0262047 L57.7196204,14.2009165 L57.7899531,15.6923649 C57.859564,17.3281771 57.9295796,21.7078579 58,28.8314074 L57.9637288,30.7090953 C57.8920573,33.9897835 57.782987,36.9295762 57.6516358,38.974293 C57.0708757,45.7790268 51.650448,50.8339719 45.0684999,51.4172348 C40.4928142,51.7707274 35.4371613,51.9635416 30.4833197,51.9956773 L28.9886006,52 C23.5681728,52 17.9541584,51.805579 12.920904,51.4167371 C6.33895599,50.8334742 0.91852822,45.7785291 0.337768101,38.9737953 L0.269783585,37.7990835 L0.22114963,36.8013068 C0.126792732,34.7232882 0.0503553685,32.1671014 0,29.4319602 L0,22.5685374 L0.0389528669,20.7061894 C0.110492307,17.6622602 0.21428433,14.9489491 0.337768101,13.0267023 C0.91852822,6.22196854 6.33895599,1.16702345 12.920904,0.583760551 C17.4965898,0.230267886 22.5522426,0.0374537061 27.5060842,0.00531800931 L29.0008033,0 Z",
            fill: r || a.colors.ctaText
        }))
    },
    Ww = e => {
        let {
            height: t,
            width: n,
            color: r,
            ...o
        } = e;
        const a = Ii();
        return Vn.createElement("svg", ur({
            viewBox: "0 0 58 52",
            height: t,
            width: n
        }, o), Vn.createElement("path", {
            d: "M28.5109686,35 L26.5109686,35 C25.1302567,35 24.0109686,36.1192881 24.0109686,37.5 L24.0109686,39.5 C24.0109686,40.8807119 25.1302567,42 26.5109686,42 L28.5109686,42 C29.8916804,42 31.0109686,40.8807119 31.0109686,39.5 L31.0109686,37.5 C31.0109686,36.1192881 29.8916804,35 28.5109686,35 Z M24.2180929,7.00002757 L24.1267943,7.0035235 C20.2549106,7.32941625 17.3553549,9.56561273 17.047887,12.9874285 L17.0275374,13.3466047 L17.0094313,14.0213331 C17.0050362,14.2844884 17.0022361,14.5864297 17.0008954,14.9287777 L17.0008954,15.9493215 L17.0110107,17.5091836 C17.013122,18.8237491 18.1881183,19.9979219 19.5093967,19.9999988 L21.5109686,20 L21.6691026,19.9944262 C22.9274186,19.9057695 24.0109686,18.7721183 24.0109686,17.5 L24.0062874,16.0062677 C24.0029832,14.9519111 24.8161499,14.0855552 25.8507654,14.0059633 L26.0062776,14 L31.0264559,14 C32.1206394,14 33.011709,14.8792827 33.0262786,15.9733692 L33.0657015,18.9338062 C33.0716182,19.4056689 32.9104738,19.8644183 32.6085881,20.2271337 L32.2944303,20.5975878 C32.0115119,20.9223892 31.6757925,21.2874147 31.2872723,21.6926643 L30.9447052,22.0400403 L31,22 C30.6427514,22.27188 30.266987,22.5220304 29.7475087,22.8381107 L28.724449,23.4442306 C25.7855457,25.172701 24.6451012,27.6378256 24.4474136,30.0331331 C24.4419067,30.0989938 24.4391785,30.1661675 24.439274,30.2334264 C24.441164,31.5638952 25.3552045,32.3864983 26.6788053,32.3846167 L29.1441007,32.3848707 C30.2347844,32.3831295 31.0828877,31.6446446 31.4354641,30.6172352 L31.4895952,30.4434019 C31.7323113,29.5779052 32.3932452,28.8757375 33.8585487,27.841307 L35.2493394,26.8890547 C38.4189615,24.7057033 39.9000188,22.8283919 39.9669365,19.6772614 L39.9990321,16.3132808 L40.0063004,15.2416415 L40.0109634,13.7873075 C39.6977061,10.2540552 36.8323239,7.51973947 33.2524784,7.10691418 L32.956295,7.07993622 L24.6087214,7.00293535 C24.4800723,7.0019754 24.3498647,7.00100617 24.2180929,7.00002757 Z",
            fill: r || a.colors.minimizedBackground
        }))
    },
    Vw = (e, t) => e ? t ? 16 : 24 : t ? 24 : 32,
    Uw = (e, t) => Ui("display:flex;width:", Vw(e, t), "px;height:", Vw(e, t), "px;align-items:center;justify-content:center;"),
    Hw = rm("div", {
        target: "e1dmt1bi3"
    })("position:relative;", e => {
        let {
            mobileBubble: t,
            small: n
        } = e;
        return Uw(t, n)
    }, " ", e => {
        let {
            hoverState: t,
            theme: n
        } = e;
        return "in" === t ? Ui("transform:scale(1);animation:", Ow, " 200ms ", n.transitions.easings.spring, " forwards;") : "out" === t ? Ui("transform:scale(1.25);animation:", Iw, " 200ms ", n.transitions.easings.spring, " forwards;") : void 0
    }, ";"),
    qw = rm("div", {
        target: "e1dmt1bi2"
    })("position:absolute;z-index:1;left:0;right:0;bottom:1px;transition:opacity 150ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.smooth
    }, " 50ms;", e => {
        let {
            mobileBubble: t
        } = e;
        return Uw(t)
    }, " ", e => {
        let {
            isVisible: t
        } = e;
        return {
            opacity: t ? 1 : 0
        }
    }, " ", e => {
        let {
            hoverState: t,
            theme: n
        } = e;
        return "in" === t ? Ui("transform:scale(1);animation:", Ow, " 200ms ", n.transitions.easings.spring, " forwards;") : "out" === t ? Ui("transform:scale(1.25);animation:", Iw, " 200ms ", n.transitions.easings.spring, " forwards;") : void 0
    }, ";"),
    Kw = rm("div", {
        target: "e1dmt1bi1"
    })("position:absolute;z-index:1;left:0;right:0;bottom:0;top:0;display:flex;align-items:center;justify-content:center;", e => {
        let {
            hoverState: t,
            theme: n
        } = e;
        return "in" === t ? Ui("animation:", _w, " 1000ms ", n.transitions.easings.spring, " forwards;") : "out" === t ? Ui("animation:", zw, " 400ms ", n.transitions.easings.spring, " forwards;") : void 0
    }, ";"),
    Gw = rm("div", {
        target: "e1dmt1bi0"
    })("position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;", e => {
        let {
            mobileBubble: t,
            small: n
        } = e;
        return Uw(t, n)
    }, " ", e => {
        let {
            active: t,
            theme: n
        } = e;
        return t && Ui("animation:", Rw, " 400ms ", n.transitions.easings.spring, " forwards;")
    }, ";"),
    Zw = e => {
        let {
            hoverState: t,
            mobileBubble: n,
            small: r,
            showRecommendationsIcon: o
        } = e;
        const a = r ? "24px" : "30px",
            i = {
                width: r ? "24px" : "30px",
                height: r ? "20px" : "24px"
            },
            s = {
                width: r ? "20px" : "22px",
                height: r ? "16px" : "18px"
            },
            u = Ii();
        return Vn.createElement(Vn.Fragment, null, Vn.createElement(Nw, {
            width: a,
            height: a,
            color: u.colors.minimizedIcon
        }), Vn.createElement(Kw, {
            hoverState: t
        }, o ? Vn.createElement(Qg, {
            color: u.colors.minimizedBackground
        }) : Vn.createElement(Ww, {
            height: i.height,
            width: i.width
        })), Vn.createElement(Gw, {
            mobileBubble: n,
            small: r,
            active: "in" === t
        }, "in" === t && Vn.createElement(jw, {
            height: s.height,
            width: s.width
        })))
    },
    Yw = e => {
        let {
            hoverState: t,
            mobileBubble: n = !1,
            small: r = !1,
            showRecommendationsIcon: o = !1,
            ...a
        } = e;
        const i = ko(),
            {
                getApplicationState: s
            } = i,
            u = Ii(),
            l = "in" === t,
            {
                defaultWidget: c
            } = s(),
            d = It("chatbotIntegration", i);
        return Vn.createElement(Hw, ur({
            hoverState: t,
            small: r,
            mobileBubble: n
        }, a), "openwidget" !== c || null != d && d.enabled ? Vn.createElement(Vn.Fragment, null, Vn.createElement(Vg, {
            filled: l,
            smile: !(null == d || !d.enabled),
            size: n ? 24 : 32,
            color: u.colors.minimizedIcon,
            backgroundColor: u.colors.minimizedBackground
        }), Vn.createElement(qw, {
            isVisible: l,
            mobileBubble: n
        }, l && Vn.createElement(nw, {
            width: n ? "14px" : "18px",
            animationDuration: 1,
            animationIterationCount: 1,
            color: u.colors.minimizedBackground
        }))) : Vn.createElement(Zw, {
            hoverState: t,
            mobileBubble: n,
            small: r,
            showRecommendationsIcon: o
        }))
    },
    $w = {
        bar: 255,
        bubble: 60
    },
    Xw = (e, t, n) => e ? 4 : t ? n ? 9 : 7 : 5,
    Jw = e => {
        let {
            color: t,
            minimizedType: n,
            isModern: r = !1,
            mobileBubble: o = !1
        } = e;
        const a = o ? 8 : 12,
            i = Xw(o, "bar" === n, r);
        return "radial-gradient(circle " + (a + 2) + "px at " + ((o ? 40 : $w[n]) - a + i) + "px " + (a - i) + "px, transparent 98%, " + t + ") top right"
    },
    Qw = (e, t, n) => Ui("height:", e ? 16 : 24, "px;width:", e ? 16 : 24, "px;font-size:", e ? .6 : .8, "em;z-index:1;position:absolute;right:-", Xw(e, t, n), "px;top:-", Xw(e, t, n), "px;"),
    eF = e => {
        let {
            mobileBubble: t = !1,
            unseenEventsCount: n = 0,
            bar: r
        } = e;
        const {
            localize: o
        } = ko(), {
            animateUnseenEventIndicator: a
        } = So(e => tn(e)), i = "modern" === Ii().name;
        return Wi(_b, {
            animated: a,
            animationKind: "swift",
            css: Qw(t, r, i),
            "aria-label": o("new_messages_notification"),
            tabIndex: 0,
            role: "img"
        }, n > 9 ? "9+" : n)
    },
    tF = rm("div", {
        displayName: "MinimizedBar",
        section: !0,
        target: "e16i86ec1"
    })("position:relative;width:255px;height:50px;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return [t.borderRadius.lg, t.borderRadius.lg, t.borderRadius.none, t.borderRadius.none].join(" ")
    }, ";display:flex;padding:0 0.9em;align-items:center;background:", e => {
        let {
            theme: t,
            hasUnseenEvents: n
        } = e;
        return n ? Jw({
            color: t.colors.minimizedBackground,
            minimizedType: "bar",
            isModern: "modern" === t.name
        }) + " !important" : t.colors.surface
    }, ";&:hover{cursor:pointer;}"),
    nF = rm(Lw, {
        target: "e16i86ec0"
    })("flex-grow:1;font-weight:700;font-size:0.9em;", e => {
        let {
            theme: t
        } = e;
        return Ui("margin-", t.isRtl ? "left" : "right", ":", t.spaces.space2, ";")
    }, ";"),
    rF = e => {
        let {
            text: t,
            hasUnseenEvents: n,
            unseenEventsCount: r,
            onClick: o
        } = e;
        const a = gu(),
            i = ko(),
            s = Ce(),
            {
                bubbleHoverState: u = !1,
                animated: l
            } = tn(i);
        return Vn.createElement(tF, ur({
            hasUnseenEvents: n
        }, Es(a, as({
            onClick: o,
            onMouseLeave: () => {
                l || s || (nn(i, {
                    bubbleHoverState: "out"
                }), setTimeout(() => nn(i, {
                    bubbleHoverState: !1
                }), 200))
            },
            onMouseEnter: () => {
                l || s || nn(i, {
                    bubbleHoverState: "in"
                })
            }
        }))), n ? Vn.createElement(eF, {
            bar: !0,
            key: r,
            unseenEventsCount: r
        }) : null, Vn.createElement(nF, {
            ellipsis: !0
        }, Vn.createElement(BD, null, t)), Vn.createElement(Ng, {
            onPress: o,
            "aria-label": i.localize("launch_livechat_widget")
        }, Vn.createElement(Yw, {
            mobileBubble: !0,
            hoverState: u
        })))
    };
var oF, aF;
const iF = (e, t) => e ? t ? "25px" : "40px" : t ? "38px" : "60px",
    sF = (e, t) => Hi(oF || (oF = ug(["\n\tfrom {\n\t\twidth: ", ";\n\t\theight: ", ";\n\t}\n\tto {\n\t\twidth: ", ";\n\t\theight: ", ";\n\t}\n"])), e, e, t, t),
    uF = rm("div", {
        target: "e1ybl9g12"
    })("z-index:-1;position:absolute;top:0;left:0;width:", e => {
        let {
            mobile: t
        } = e;
        return t ? 40 : 60
    }, "px;height:", e => {
        let {
            mobile: t
        } = e;
        return t ? 40 : 60
    }, "px;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.cta
    }, ";animation-name:", e => {
        let {
            scaleTo: t
        } = e;
        return (e => Hi(aF || (aF = ug(["\n\tfrom {\n\t\ttransform: scale(1);\n\t\topacity: 0.6;\n\t}\n\tto {\n\t\ttransform: scale(", ");\n\t\topacity: 0;\n\t}\n"])), e))(t)
    }, ";animation-duration:0.9s;animation-delay:", e => {
        let {
            delay: t
        } = e;
        return null != t ? t : 0
    }, "s;animation-iteration-count:1;animation-timing-function:", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.swift
    }, ";"),
    lF = rm("div", {
        displayName: "MinimizedBubble",
        section: !0,
        target: "e1ybl9g11"
    })("display:flex;width:", e => {
        let {
            mobile: t,
            small: n
        } = e;
        return iF(t, n)
    }, ";height:", e => {
        let {
            mobile: t,
            small: n
        } = e;
        return iF(t, n)
    }, ";box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.subtle
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.round
    }, ";justify-content:center;position:relative;overflow:visible;background:", e => {
        let {
            theme: t,
            hasUnseenEvents: n,
            hasAvatar: r,
            mobile: o
        } = e;
        return n && !r ? Jw({
            color: t.colors.minimizedBackground,
            minimizedType: "bubble",
            mobileBubble: o
        }) + " !important" : t.colors.surface
    }, ";", e => {
        let {
            theme: t,
            mobile: n,
            screenPosition: r
        } = e;
        return n ? t.isRtl ? Ui("margin-bottom:24px;margin-", "left" === r ? "left" : "right", ":8px;") : Ui("margin-bottom:24px;margin-", "left" === r ? "right" : "left", ":8px;") : Ui("margin-", "left" === r ? "right" : "left", ":auto;")
    }, " ", e => {
        let {
            theme: t,
            mobile: n,
            resizeAnimation: r
        } = e;
        return "shrink" === r ? Ui("animation-name:", sF(iF(n, !1), iF(n, !0)), ";animation-duration:600ms;animation-timing-function:", t.transitions.easings.swift, ";") : "grow" === r ? Ui("animation-name:", sF(iF(n, !0), iF(n, !1)), ";animation-duration:300ms;animation-timing-function:", t.transitions.easings.swift, ";animation-fill-mode:forwards;animation-iteration-count:1;") : void 0
    }, " &:hover{cursor:pointer;}"),
    cF = {
        name: "1btxy8w",
        styles: "padding:0;width:100%;display:flex;justify-content:center;align-items:center"
    },
    dF = rm(BC, {
        target: "e1ybl9g10"
    })("pointer-events:none;", e => {
        let {
            hasUnseenEvents: t,
            mobileBubble: n
        } = e;
        return t && Ui("img{mask:", Jw({
            color: "black",
            minimizedType: "bubble",
            mobileBubble: n
        }), ";}")
    }, ";"),
    pF = e => {
        let {
            mobileBubble: t,
            avatar: n,
            agentName: r,
            hasUnseenEvents: o,
            unseenEventsCount: a,
            screenPosition: i,
            onClick: s
        } = e;
        const u = ko(),
            l = Ce(),
            c = So(e => yn(e)),
            {
                defaultWidget: d,
                visitorCounter: p,
                googleReviews: m,
                contactInvitation: f,
                chatBotGreeting: h
            } = So(e => e.getApplicationState()),
            g = bs(),
            D = "livechat" === d && Boolean(n),
            {
                bubbleHoverState: v = !1,
                animated: b,
                resizeBubbleAnimation: y,
                showPulseAnimation: x,
                showAvatarFallback: C
            } = So(e => tn(e));
        return Wi(lF, ur({
            mobile: t,
            small: c,
            resizeAnimation: y,
            hasAvatar: D && !C,
            screenPosition: i,
            hasUnseenEvents: o
        }, as({
            onClick: s,
            onAnimationEnd: () => {
                if (!y) return;
                nn(u, {
                    resizeBubbleAnimation: null,
                    ..."grow" === y && !x && {
                        showPulseAnimation: !0
                    }
                })
            },
            ...!n && {
                onMouseLeave: () => {
                    b || y || x || l || null != p && p.isVisible || null != m && m.isVisible || null != f && f.isVisible || null != h && h.isVisible || (nn(u, {
                        bubbleHoverState: "out"
                    }), setTimeout(() => nn(u, {
                        bubbleHoverState: !1
                    }), 200))
                }
            },
            ...!n && {
                onMouseEnter: () => {
                    b || y || x || l || null != p && p.isVisible || null != m && m.isVisible || null != f && f.isVisible || null != h && h.isVisible || nn(u, {
                        bubbleHoverState: "in"
                    })
                }
            }
        })), o && Wi(eF, {
            mobileBubble: t,
            key: a,
            unseenEventsCount: a
        }), x && Wi(Vn.Fragment, null, Wi(uF, {
            mobile: t,
            scaleTo: 1.5
        }), Wi(uF, ur({
            mobile: t,
            delay: .3,
            scaleTo: 1.3
        }, as({
            onAnimationEnd: () => {
                nn(u, {
                    showPulseAnimation: !1
                })
            }
        })))), Wi(Ng, ur({
            skipFocusVisible: !0,
            css: cF,
            "aria-label": u.localize("livechat" === d ? "launch_livechat_widget" : "launch_openwidget_widget")
        }, as({
            onPress: s
        })), D && !C ? Wi(dF, {
            "aria-hidden": !0,
            imgUrl: n,
            imgAlt: u.localize("current_agent_avatar"),
            size: t ? "40px" : "60px",
            hasUnseenEvents: o,
            mobileBubble: t,
            imgProps: { ...as({
                    onError: () => {
                        u.emit("call-element-method", ["#" + g, "remove"]), nn(u, {
                            showAvatarFallback: !0
                        })
                    }
                }),
                id: g
            },
            text: r,
            fontSize: "24px"
        }) : Wi(Yw, {
            "aria-hidden": !0,
            mobileBubble: t,
            small: c,
            hoverState: v,
            showRecommendationsIcon: x
        })))
    },
    mF = (e, t) => {
        e.on("track-event", e => ((e, t) => {
            let {
                name: n,
                eventProperties: r
            } = t;
            e("/v1.0/t/event", "POST", {
                name: n,
                eventProperties: r
            })
        })(t.call, e))
    };
var fF, hF;
const gF = (e, t, n) => Hi(fF || (fF = ug(["\n    from {\n        transform: translate(", ", ", "px);\n        width: 30px;\n        height: 30px;\n        opacity: 0;\n    }\n    to {\n        transform: translate(0, 0);\n        width: ", "px;\n        height: 220px;\n        opacity: 1;\n    }\n"])), ((e, t) => "" + ("right" === e ? "-" : "") + Vw(t, !1) / 2 + "px")(t, n), xn, e),
    DF = Hi(hF || (hF = ug(["\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n"]))),
    vF = rm("div", {
        target: "e11wgx213"
    })({
        name: "1etdpvc",
        styles: "overflow-x:auto;display:flex"
    }),
    bF = rm("button", {
        target: "e11wgx212"
    })("position:absolute;width:30px;height:30px;border-radius:50%;background:", e => {
        let {
            theme: t
        } = e;
        return t.colors.floatSurface
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";border:0;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);text-align:center;top:32%;display:flex;align-items:center;justify-content:center;padding:0;z-index:1;outline:0;-webkit-transform:translate3d(0, 0, 0);&:hover{cursor:pointer;}svg{display:inline;}", e => {
        let {
            variant: t
        } = e;
        return {
            [t]: "0.5em"
        }
    }, ";"),
    yF = rm(Sg, {
        target: "e11wgx211"
    })({
        name: "21xn5r",
        styles: "transform:rotate(180deg)"
    }),
    xF = rm("div", {
        target: "e11wgx210"
    })({
        name: "pw7jst",
        styles: "position:relative;width:100%"
    }),
    CF = (e, t, n) => new Promise(r => {
        e.emit("get-element-properties-request", ["#" + t, n]), e.once("get-element-properties-response", e => r(e))
    }),
    EF = function(e, t, n, r) {
        void 0 === r && (r = !0);
        const o = e.getView("minimized")[t];
        nn(e, {
            [t]: { ...o,
                ...n
            }
        }, {
            scheduleRerender: r
        })
    },
    wF = e => {
        let {
            children: t,
            storeName: n,
            galleryStyles: r,
            isMeasurable: o,
            onArrowClick: a
        } = e;
        const i = ko(),
            {
                isPreview: s
            } = So(e => e.getApplicationState()),
            u = "carousel-gallery-" + n,
            l = So(e => e.getView("minimized")),
            c = "carousel-" + n,
            d = l[c],
            p = e => {
                null == a || a(e);
                const t = {
                    top: 0,
                    left: "right" === e ? 200 : -200,
                    behavior: "smooth"
                };
                var n;
                s ? null == (n = document.getElementById(u)) || n.scrollBy(t) : i.emit("call-element-method", ["#" + u, "scrollBy", t])
            };
        return is(() => {
            !o || d && Rn("showButtons", d) || CF(i, u, ["scrollWidth", "clientWidth"]).then(e => {
                let {
                    scrollWidth: t,
                    clientWidth: n
                } = e;
                t > n && EF(i, c, {
                    showButtons: !0
                })
            })
        }, [d, c, u, o, i]), is(() => {
            const e = null == d ? void 0 : d.scrollPosition;
            e && i.emit("call-element-method", ["#" + u, "scrollTo", e, 0])
        }, []), Wi(xF, null, (null == d ? void 0 : d.showButtons) && Wi(bF, ur({
            variant: "left",
            "aria-hidden": !0,
            tabIndex: -1
        }, as({
            onClick: () => p("left")
        })), Wi(yF, null)), Wi(vF, ur({
            id: u,
            css: r
        }, as({
            onScroll: () => {
                CF(i, u, ["scrollLeft"]).then(e => {
                    let {
                        scrollLeft: t
                    } = e;
                    "number" == typeof t && EF(i, c, {
                        scrollPosition: t
                    }, !1)
                })
            }
        })), Vn.Children.map(t, e => Wi("div", null, e))), (null == d ? void 0 : d.showButtons) && Wi(bF, ur({
            variant: "right",
            "aria-hidden": !0,
            tabIndex: -1
        }, as({
            onClick: () => p("right")
        })), Wi(Sg, null)))
    },
    FF = () => "dark" === Ii().variant ? Vn.createElement($g, null) : Vn.createElement(Xg, null),
    kF = Wp("h2", {
        target: "e185lfs00"
    })(e => {
        let {
            theme: t
        } = e;
        return t.typography.subheading
    }, ";color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";display:flex;align-items:center;gap:6px;margin:0;"),
    SF = e => {
        const {
            localize: t
        } = ko();
        return Vn.createElement(kF, e, Vn.createElement(FF, null), t("you_may_be_interested_in"))
    },
    LF = Ce(),
    TF = rm("div", {
        target: "edgbg0i3"
    })("width:200px;height:140px;border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.md
    }, ";border:1px solid ", e => {
        let {
            theme: t
        } = e;
        return t.colors.divider
    }, ";overflow:hidden;transition:height 300ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.swift
    }, ";"),
    PF = rm(Nm, {
        target: "edgbg0i2"
    })("width:100%;height:100%;object-fit:cover;transform:scale(1);transition:transform 300ms ", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.swift
    }, ";will-change:transform;"),
    BF = rm("p", {
        target: "edgbg0i1"
    })("color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";font-size:", jo(14), ";margin-bottom:0;margin-top:6px;padding:0 12px;max-height:20px;max-width:100%;overflow:hidden;word-break:break-word;", zD(2), ";"),
    AF = Ui(TF, "{height:120px;}", BF, "{max-height:40px;}"),
    MF = rm("a", {
        target: "edgbg0i0"
    })("display:flex;text-decoration:none;text-align:left;flex-direction:column;max-width:212px;height:180px;cursor:pointer;text-decoration:none;transition-property:opacity,transform;transition-duration:300ms;transition-timing-function:", e => {
        let {
            theme: t
        } = e;
        return t.transitions.easings.swift
    }, " 0.2s;opacity:1;transform:scale(1);will-change:opacity,transform;padding:0 ", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space2
    }, " 12px;", e => {
        let {
            isMultiline: t
        } = e;
        return t && LF && AF
    }, ";", e => {
        let {
            isMultiline: t
        } = e;
        return t && !LF && Ui("&:hover,:focus{", AF, ";}")
    }, " &:hover{", PF, "{transform:scale(1.05);}}:focus{outline-offset:-2px;}"),
    OF = e => {
        let {
            name: t,
            image: n,
            link: r,
            onClick: o,
            isPreview: a
        } = e;
        const i = a ? r : Cn(r, {
            widgetSource: "minimized"
        });
        return Vn.createElement(MF, ur({
            isMultiline: t.length > 27,
            href: i,
            target: "_parent",
            referrerpolicy: "origin"
        }, as({
            onClick: o
        })), Vn.createElement(TF, null, Vn.createElement(PF, {
            src: n
        })), Vn.createElement(BF, null, t))
    };
OF.parentStyles = Ui(">div:first-child{& ", MF, "{padding-left:8px;}}>div:last-child{", MF, "{padding-right:8px;}}&:hover{", MF, ":not(:hover){opacity:0.6;transform:scale(0.97);}}");
const IF = Ce(),
    _F = rm("div", {
        target: "e5hftou2"
    })("width:", e => {
        let {
            width: t
        } = e;
        return t
    }, "px;background-color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.surface
    }, ";border-radius:", e => {
        let {
            theme: t
        } = e;
        return t.borderRadius.xxl
    }, ";overflow:hidden;box-shadow:", e => {
        let {
            theme: t
        } = e;
        return t.boxShadow.floating
    }, ";", e => {
        let {
            animation: t,
            width: n,
            screenPosition: r,
            theme: o
        } = e;
        return "hide" === t ? Ui("animation-name:", gF(n, r, IF), ";animation-duration:300ms;animation-iteration-count:1;animation-timing-function:", o.transitions.easings.swift, ";animation-direction:reverse;animation-fill-mode:forwards;") : "show" === t ? Ui("animation-name:", gF(n, r, IF), ";animation-duration:600ms;animation-iteration-count:1;animation-timing-function:", o.transitions.easings.swift, ";animation-fill-mode:forwards;") : void 0
    }, ";"),
    zF = rm("div", {
        target: "e5hftou1"
    })("display:flex;width:100%;flex-direction:column;opacity:", e => {
        let {
            animation: t
        } = e;
        return t ? 0 : 1
    }, ";", e => {
        let {
            animation: t,
            theme: n
        } = e;
        return t && Ui("animation-name:", DF, ";animation-duration:", "show" === t ? .4 : .2, "s;animation-delay:", "show" === t ? .2 : 0, "s;animation-iteration-count:1;animation-timing-function:", n.transitions.easings.swift, ";animation-fill-mode:forwards;animation-direction:", "show" === t ? "normal" : "reverse", ";")
    }, ";"),
    RF = rm("div", {
        target: "e5hftou0"
    })("padding:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space5
    }, ";padding-bottom:", e => {
        let {
            theme: t
        } = e;
        return t.spaces.space3
    }, ";display:flex;justify-content:space-between;color:", e => {
        let {
            theme: t
        } = e;
        return t.colors.primaryTextColor
    }, ";"),
    jF = () => {
        const e = ko(),
            {
                clientWidth: t,
                config: n,
                isPreview: r,
                recommendations: o
            } = So(e => e.getApplicationState()),
            a = (e => {
                let {
                    mobile: t,
                    productsCount: n,
                    clientWidth: r
                } = e;
                if (!t) return 1 === n ? En + 2 * wn : Fn;
                const o = n * En + (n - 1) * Ln + 2 * wn;
                return Math.min(o, r - (kn + 2 * Sn))
            })({
                mobile: IF,
                productsCount: o.products.length,
                clientWidth: t
            }),
            i = (() => {
                const {
                    emit: e
                } = ko();
                return Vn.useCallback(t => e("track-event", t), [e])
            })(),
            s = t => {
                if (r) return null == t || t.preventDefault(), void(null == t || t.stopPropagation());
                e.setApplicationState({
                    recommendations: { ...o,
                        isVisible: !1,
                        animation: "hide",
                        hiddenIds: [].concat(o.hiddenIds, [o.id])
                    }
                }), nn(e, {
                    resizeBubbleAnimation: "grow"
                })
            };
        return Vn.createElement(_F, ur({
            width: a,
            screenPosition: n.screenPosition,
            animation: o.animation
        }, as({
            onAnimationEnd: () => {
                e.setApplicationState({
                    recommendations: { ...o,
                        animation: null
                    }
                }), e.emit("render-minimized")
            }
        })), Vn.createElement(cC, {
            message: e.localize("you_may_be_interested_in") + " " + o.products.map(e => e.name).join(", "),
            clearOnUnmount: !0,
            "aria-live": "polite"
        }), Vn.createElement(zF, ur({}, as({
            onAnimationEnd: Un
        }), {
            animation: o.animation
        }), Vn.createElement(RF, null, Vn.createElement(SF, null), Vn.createElement(Ng, ur({
            "aria-label": e.localize("close_recommendations")
        }, as({
            onClick: () => {
                s(), r || i({
                    name: "Product recommendations dismissed"
                })
            }
        })), Vn.createElement(Tg, {
            size: 24
        }))), Vn.createElement(wF, {
            storeName: "recommendations",
            galleryStyles: OF.parentStyles,
            isMeasurable: !o.animation,
            onArrowClick: e => "right" === e && i({
                name: "Product recommendations arrow clicked"
            })
        }, o.products.map(e => Vn.createElement(OF, ur({}, e, {
            key: e.id,
            onClick: s,
            isPreview: r
        }))))))
    };
var NF;
const WF = Hi(NF || (NF = ug(["\n\t0% {\n\t\topacity: 0;\n \t\ttransform: translate3d(0, 100%, 0);\n\t}\n\n\t100% {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t}\n"]))),
    VF = e => {
        let {
            minimizedType: t,
            position: n,
            evenSidePadding: r
        } = e;
        return "bar" === t ? "0.8em 0.8em 0 0.8em" : r ? "0.5em 0.5em 1em 0.5em" : "left" === n ? "0.5em 1em 1em 0.5em" : "0.5em 0.5em 1em 1em"
    },
    UF = rm("div", {
        displayName: "Minimized",
        section: !0,
        target: "e1558m8u1"
    })("max-width:100%;position:absolute;bottom:0;z-index:2;display:flex;align-items:flex-end;will-change:width,height,transform,opacity;backface-visibility:hidden;", e => ({
        padding: VF(e),
        [e.position]: 0,
        justifyContent: "right" === e.position && "flex-end"
    }), " ", e => {
        let {
            animated: t
        } = e;
        return t && Ui("animation:", WF, " 200ms ease forwards;")
    }, ";"),
    HF = rm(bm, {
        target: "e1558m8u0"
    })("position:relative;bottom:-", xn, "px;", e => {
        let {
            side: t
        } = e;
        return Ui(t, ":", kn, "px;margin-", "left" === t ? "right" : "left", ":", kn, "px;")
    }, ";"),
    qF = e => {
        var t;
        const {
            availability: n,
            eagerFetchingMode: r,
            hasUnseenEvents: o,
            mobile: a,
            defaultWidget: i,
            visitorCounter: s,
            googleReviews: u,
            contactInvitation: l,
            chatBotGreeting: c,
            recommendations: d
        } = e.getApplicationState(), p = "online" === n, m = e.getChat(xe).active, f = Tn(e), h = !f || Pn(e, f) ? null : f.id, g = It("agentAvatar", e).enabled && (p || m), D = Bn(xe, e), v = e.getLastEvent(xe), b = v && (null == (t = v.properties) ? void 0 : t.invitation) && !v.seen;
        return {
            mobile: a,
            visibleGreetingId: h,
            getMinimizedView: () => e.getView("minimized"),
            productRecommendationsVisible: (null == d ? void 0 : d.isVisible) || (null == d ? void 0 : d.animation),
            avatar: g ? vr(!1, "avatar", D) : null,
            agentName: vr("", "name", D),
            minimizedType: An(e),
            screenPosition: ln(e),
            minimizedText: "livechat" === i ? Mn(xe, e) : "",
            hasUnseenEvents: r ? e.getUnseenCount(xe) > 0 : b || o,
            unseenEventsCount: r ? e.getUnseenCount(xe) : b || o ? 1 : 0,
            newMessageAlert: e.localize("new_message"),
            defaultWidget: i,
            visitorCounter: s,
            googleReviews: u,
            contactInvitation: l,
            chatBotGreeting: c
        }
    },
    KF = e => {
        let {
            dir: t,
            onMaximize: n,
            innerRef: r = Un,
            onResize: o = Un
        } = e;
        const {
            mobile: a,
            visibleGreetingId: i,
            getMinimizedView: s,
            productRecommendationsVisible: u,
            avatar: l,
            agentName: c,
            minimizedType: d,
            screenPosition: p,
            minimizedText: m,
            hasUnseenEvents: f,
            unseenEventsCount: h,
            newMessageAlert: g,
            defaultWidget: D,
            visitorCounter: v,
            googleReviews: b,
            contactInvitation: y,
            chatBotGreeting: x
        } = So(qF);
        let C = null,
            E = null;
        if (i && (C = Vn.createElement(dw, {
                key: i,
                id: i,
                onPress: n,
                onResize: o
            })), "circle" === d) {
            const e = "livechat" === D && i && a;
            E = Vn.createElement(pF, {
                avatar: l,
                agentName: c,
                onClick: n,
                hasUnseenEvents: f,
                unseenEventsCount: h,
                mobileBubble: e,
                screenPosition: p
            })
        }
        "bar" === d && (E = Vn.createElement(rF, {
            text: m,
            hasUnseenEvents: f,
            unseenEventsCount: h,
            onClick: n
        }));
        let w = null;
        var F, k;
        return "livechat" === D && (a && "circle" === d ? (F = "left" === p, k = [Vn.createElement(nf, {
            key: "greeting-column"
        }, Vn.createElement(bm, null, C)), Vn.createElement(nf, {
            key: "bubble-column",
            noShrink: !0
        }, Vn.createElement(bm, null, E))], w = F ? k.reverse() : k) : w = Vn.createElement(nf, null, Vn.createElement(bm, null, C), Vn.createElement(bm, {
            reverse: "right" === p
        }, E))), "openwidget" === D && (w = Vn.createElement(Vn.Fragment, null, Vn.createElement(nf, null, u && Vn.createElement(HF, {
            side: p
        }, Vn.createElement(jF, null)), (null == y ? void 0 : y.isVisible) && Vn.createElement(bm, null, Vn.createElement(KC, ur({
            screenPosition: p
        }, y))), (null == x ? void 0 : x.isVisible) && Vn.createElement(bm, null, Vn.createElement(CC, ur({
            text: x.text,
            screenPosition: p
        }, x))), C && Vn.createElement(nf, null, Vn.createElement(bm, null, C)), Vn.createElement(bm, null, E)), (null == v ? void 0 : v.isVisible) && Vn.createElement(Sw, ur({
            screenPosition: p
        }, v)), (null == b ? void 0 : b.isVisible) && Vn.createElement(hE, ur({
            screenPosition: p
        }, b)))), Vn.createElement(UF, ur({
            dir: t,
            role: "main",
            ref: r,
            minimizedType: d,
            position: p,
            animated: !!s().animated,
            evenSidePadding: u
        }, as({
            onMouseOver: () => {
                xg(() =>
                    import ("./21.Uz1HBcsR.chunk.js").then(e => e.M), []).catch(Un), "openwidget" === D && xg(() =>
                    import ("./22.DqXaMY_H.chunk.js"), []).catch(Un)
            }
        })), Vn.createElement(Vn.Fragment, null, f && Vn.createElement(cC, {
            key: h,
            message: g,
            "aria-live": "polite",
            clearOnUnmount: !0
        }), w))
    };
var GF, ZF;
const YF = e => e(GF || (GF = ug(["\n\t&-enter {\n\t\topacity: 0;\n\t\ttransform: translate3d(0, 100%, 0);\n\t}\n\n\t&-enter&-enter-active {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t\ttransition: opacity 140ms ease 200ms, transform 140ms ease 200ms;\n\t}\n\n\t&-exit {\n\t\topacity: 1;\n\t\ttransform: translate3d(0, 0%, 0);\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translate3d(0, 100%, 0);\n\t\ttransition: opacity 140ms ease, transform 140ms ease;\n\t}\n"]))),
    $F = (e, t, n) => e(ZF || (ZF = ug(["\n\t&-enter {\n\t\ttransform: translate3d(", "40%, 40%, 0) scale(0.1);\n\n\t\t[role='main'] > * {\n\t\t\topacity: 0;\n\t\t\ttransform: translate3d(0, 20%, 0);\n\t\t}\n\t}\n\n\t&-enter&-enter-active {\n\t\ttransform: translate3d(0%, 0%, 0) scale(1);\n\t\ttransition: transform ", "ms ", ";\n\n\t\t[role='main'] > * {\n\t\t\topacity: 1;\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t\ttransition: opacity 160ms ", " 270ms,\n\t\t\t\ttransform 160ms ", " 270ms;\n\t\t}\n\t}\n\n\t&-exit {\n\t\ttransform: translate3d(0%, 0%, 0) scale(1);\n\t\topacity: 1;\n\t\t[role='main'] > * {\n\t\t\topacity: 1;\n\t\t\ttransform: translate3d(0, 0%, 0);\n\t\t}\n\t}\n\n\t&-exit&-exit-active {\n\t\topacity: 0;\n\t\ttransform: translate3d(", "40%, 40%, 0) scale(0.1);\n\t\ttransition: transform ", "ms ", ", opacity 300ms ease;\n\t\t[role='main'] > * {\n\t\t\topacity: 0;\n\t\t\ttransform: translate3d(0, 10%, 0);\n\t\t\ttransition: opacity 160ms ", ", transform 160ms ", ";\n\t\t}\n\t}\n"])), "right" === t ? "" : "-", 430, n.transitions.easings.sharp, n.transitions.easings.sharp, n.transitions.easings.sharp, "right" === t ? "" : "-", 430, n.transitions.easings.sharp, n.transitions.easings.sharp, n.transitions.easings.sharp),
    XF = e => {
        const {
            mobile: t,
            embedded: n,
            actingAsDirectLink: r,
            isInCustomContainer: o,
            rtl: a,
            isMinimizedForcefullyDisabled: i
        } = e.getApplicationState();
        return {
            embedded: n,
            expandToEdge: t || !n || o,
            visibilityState: e.getApplicationState("visibility").state,
            showMinimized: !r && On(e) && !i,
            screenPosition: ln(e),
            dir: a ? "rtl" : "ltr",
            showMinimizedButton: Lt(e),
            isFileUploadAvailable: In(e) && _n(e)
        }
    };

function JF(e) {
    let {
        onAnimationEnd: t = Un,
        onMinimizeButtonPress: n = Un,
        onMaximizeButtonPress: r = Un,
        onMinimizedRef: o = Un,
        onMinimizedResize: a
    } = e;
    const {
        embedded: i,
        expandToEdge: s,
        visibilityState: u,
        showMinimized: l,
        screenPosition: c,
        dir: d,
        showMinimizedButton: p,
        isFileUploadAvailable: m
    } = So(XF), f = ko(), h = Vn.useRef(), g = Vn.useRef(), {
        isDragNDropAllowed: D
    } = vg(), v = fg(), [b, y] = Vn.useState("maximized" === u), [x, C] = Vn.useState("maximized" === u), E = Vn.useCallback(e => f.setApplicationState({
        dropAreaVisible: e
    }), [f]), w = Vn.useCallback(e => {
        e ? At(f) : rt(f)
    }, [f]), F = Vn.useCallback(e => {
        m && D() && (e.preventDefault(), e.stopPropagation(), E(!0))
    }, [m, D, E]);
    Cp(() => {
        if ("maximized" === u) {
            const e = setTimeout(() => C(!0), zn);
            return () => clearTimeout(e)
        }
        C(!1)
    }, [u]);
    const k = Vn.useCallback(() => {
        i && w(!1), n()
    }, [i, n, w]);
    return Vn.createElement(Gi, null, e => {
        let {
            css: n,
            theme: i
        } = e;
        return Vn.createElement(vm, {
            appear: !0,
            component: null
        }, x && Vn.createElement(mm, {
            classNames: $F(n, c, i),
            nodeRef: g,
            onExited: t,
            onEntered: () => y(!0),
            onExit: () => y(!1),
            timeout: 430
        }, Vn.createElement(lC, {
            dir: d,
            ref: g,
            isMainViewVisible: b,
            showMinimizedButton: p,
            expandToEdge: s,
            onMinimizeButtonPress: k,
            onDragEnter: F
        })), v && De(u, ["minimized", "hidden"]) && l && Vn.createElement(mm, {
            classNames: YF(n),
            nodeRef: h,
            onExited: t,
            timeout: 430
        }, Vn.createElement(Kf, {
            autoFocus: cg(v)
        }, Vn.createElement(KF, {
            dir: d,
            onMaximize: () => {
                w(!0), r()
            },
            innerRef: e => {
                h.current = e, o(e)
            },
            onResize: a
        }))))
    })
}
let QF = function(e) {
    function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
            crashed: !1
        }, t
    }
    bE(t, e);
    var n = t.prototype;
    return n.componentDidCatch = function(e, t) {
        this.setState({
            crashed: !0
        }), this.props.onError(e, t)
    }, n.render = function() {
        return this.state.crashed ? null : this.props.children
    }, t
}(Vn.Component);
QF.defaultProps = {
    onError: Un
};
const ek = "widget-global-" + de(),
    tk = '\n* {\n\tfont-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\t-webkit-tap-highlight-color: transparent;\n}\nbody {\n\tmargin: 0;\n}\n';

function nk(e) {
    let {
        children: t
    } = e;
    return Vn.createElement(Vn.Fragment, null, Vn.createElement(Vi, {
        styles: Ui("#" + ek + " " + tk, "")
    }), Vn.createElement("div", {
        id: ek
    }, t))
}
const rk = (e, t) => {
        return "modern" === e ? (n = t, { ...n,
            borderRadius: { ...n.borderRadius,
                def: n.borderRadius.sm
            },
            TitleBar: {
                css: {
                    textAlign: "center",
                    minHeight: "42px",
                    justifyContent: "flex-start"
                },
                TitleBarTitle: {
                    css: {
                        fontWeight: "700",
                        textAlign: "center",
                        fontSize: jo(14)
                    }
                },
                Avatar: {
                    css: {
                        border: "0"
                    }
                }
            },
            IconButton: {
                css: {
                    padding: "0 .5em"
                }
            },
            MessageList: {
                css: {
                    backgroundColor: n.colors.surface,
                    padding: "0.5em"
                }
            },
            Maximized: {
                css: {
                    borderRadius: [n.borderRadius.sm, n.borderRadius.sm, n.borderRadius.none, n.borderRadius.none].join(" ")
                }
            },
            Footer: {
                css: {
                    position: "relative",
                    right: 0,
                    bottom: 0,
                    fontSize: "0.6em",
                    backgroundColor: n.colors.surfaceVariant,
                    textAlign: "center",
                    padding: "1em"
                },
                FooterLink: {
                    css: {
                        textDecoration: "none",
                        fontWeight: "bold",
                        padding: "0.2em"
                    }
                }
            },
            ApplicationWrapper: {
                css: {
                    padding: {
                        default: "1em 1em 0 1em",
                        expandToEdge: "0"
                    }
                }
            },
            AgentBar: {
                css: {
                    padding: "0.6em",
                    paddingBottom: "0.6em"
                },
                Avatar: {
                    size: "60px",
                    css: {
                        borderRadius: n.borderRadius.none,
                        marginRight: "0.6em"
                    }
                },
                SubTitle: {
                    css: {
                        fontSize: ".8em",
                        fontWeight: "normal"
                    }
                },
                Title: {
                    css: {
                        fontSize: "1em",
                        fontWeight: "bold"
                    }
                },
                IconButton: {
                    css: {
                        fontSize: jo(24),
                        backgroundColor: "transparent !important",
                        color: {
                            default: "inherit"
                        },
                        opacity: {
                            default: "0.3",
                            disabled: "0.15",
                            active: "0.6"
                        }
                    }
                }
            },
            Button: {
                css: {
                    boxShadow: "none"
                }
            },
            Message: {
                horizontalAlign: "left",
                own: {
                    horizontalAlign: "left",
                    Content: {
                        css: {
                            alignItems: "flex-start"
                        }
                    }
                },
                system: {
                    MessageText: {
                        css: {
                            fontSize: ".9em"
                        }
                    }
                },
                css: {
                    flexDirection: "row",
                    margin: "0.3em"
                },
                Bubble: {
                    sharpBorderRadius: "0px",
                    ovalBorderRadius: "0px",
                    css: {
                        border: "0",
                        padding: "0",
                        background: "transparent",
                        boxShadow: "none"
                    }
                },
                ImagePreview: {
                    css: {
                        maxWidth: "150px",
                        maxHeight: "250px",
                        borderRadius: n.borderRadius.none
                    }
                },
                Button: {
                    css: {
                        borderTop: "0!important"
                    }
                }
            },
            MessageText: {
                css: {
                    padding: "0",
                    fontSize: "14px"
                }
            },
            MessageGroup: {
                css: {
                    marginBottom: ".5em"
                }
            },
            Minimized: {
                Img: {
                    css: {
                        display: "block"
                    }
                },
                ImgOverlay: {
                    css: {
                        display: "none"
                    }
                }
            },
            MinimizedBar: {
                css: {
                    borderRadius: [n.borderRadius.sm, n.borderRadius.sm, n.borderRadius.none, n.borderRadius.none].join(" "),
                    height: "40px"
                },
                Icon: {
                    css: {
                        transform: "scale(0.8)"
                    }
                }
            },
            MinimizedBubble: {
                css: {
                    position: "relative"
                }
            },
            View: {
                Bubble: {
                    css: {
                        border: "0",
                        padding: "0",
                        background: "transparent",
                        boxShadow: "none"
                    }
                },
                ViewContent: {
                    css: {
                        paddingTop: ".5em"
                    }
                },
                css: {
                    paddingBottom: "0"
                }
            },
            TextInput: {
                css: {
                    lineHeight: "1.1em"
                }
            },
            Form: {
                css: {
                    fontSize: "0.9em"
                }
            },
            Tooltip: {
                css: {
                    padding: "0.5em 0.8em",
                    fontSize: ".7em"
                }
            },
            TooltipArrow: {
                css: {
                    marginTop: "-1em"
                }
            },
            Invitation: {
                Bubble: {
                    sharpBorderRadius: "6px",
                    ovalBorderRadius: "6px",
                    css: {
                        padding: ".5em"
                    }
                }
            },
            InformationField: {
                css: {
                    fontSize: "1.1em"
                }
            },
            SystemCard: {
                css: {
                    maxWidth: "368px",
                    width: "calc(100% - 0.6em)",
                    margin: "0.3em",
                    boxShadow: "none",
                    border: "1px solid " + n.colors.divider,
                    padding: "8px"
                }
            },
            TextComposer: {
                IconButton: {
                    css: {
                        opacity: {
                            active: 1,
                            default: .4
                        }
                    }
                },
                css: {
                    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                    margin: 0,
                    borderRadius: 0
                }
            },
            NewMessageHorizontalDivider: {
                css: {
                    margin: "8px -0.5em"
                }
            },
            BoosterContainer: {
                css: {
                    border: "1px solid " + n.colors.divider,
                    maxWidth: "368px",
                    width: "calc(100% - 0.6em)",
                    margin: "0.3em",
                    boxShadow: "none",
                    borderRadius: n.borderRadius.md
                }
            },
            BoosterButton: {
                css: {
                    boxShadow: "none"
                }
            }
        }) : (e => ({ ...e,
            borderRadius: { ...e.borderRadius,
                def: e.borderRadius.md
            },
            vars: {
                "primary-color": e.colors.accent,
                "secondary-color": e.colors.grayscale[0],
                "tertiary-color": e.colors.divider
            },
            ApplicationWrapper: {
                css: {
                    padding: {
                        default: "1em 1em 1em 1em",
                        expandToEdge: "0"
                    }
                }
            },
            AgentBar: {
                Avatar: {
                    size: "40px"
                },
                IconButton: {
                    css: {
                        width: "40px",
                        height: "40px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "6px",
                        fontSize: jo(32),
                        opacity: {
                            default: "1",
                            disabled: "0.15"
                        }
                    }
                },
                Title: {
                    css: {
                        fontSize: jo(16),
                        fontWeight: "bold"
                    }
                },
                SubTitle: {
                    css: {
                        fontSize: jo(16),
                        fontWeight: "normal",
                        opacity: "1"
                    }
                },
                css: {
                    backgroundColor: e.colors.surface,
                    zIndex: "1",
                    color: e.colors.primaryTextColor,
                    padding: "1rem"
                }
            },
            Avatar: {
                size: "20px",
                css: {
                    border: 0
                }
            },
            Bubble: {
                sharpBorderRadius: "10px",
                ovalBorderRadius: "10px",
                css: {
                    boxShadow: e.boxShadow.xs,
                    border: "0"
                }
            },
            ImagePreview: {
                css: {
                    maxWidth: "200px",
                    maxHeight: "300px",
                    borderRadius: e.borderRadius.md
                }
            },
            IconButton: {
                css: {
                    padding: "0 .5em"
                }
            },
            Footer: {
                css: {
                    fontSize: "0.65em",
                    padding: "0.3em 0",
                    minHeight: "36px",
                    width: "100%",
                    textAlign: "center"
                },
                FooterLink: {
                    css: {
                        textDecoration: "none",
                        padding: "8px",
                        borderRadius: e.borderRadius.md
                    }
                }
            },
            MessageButtons: {
                css: {
                    color: e.colors.accent
                }
            },
            MessageText: {
                css: {
                    fontSize: "14px"
                }
            },
            Message: {
                css: {
                    animation: {
                        default: "none",
                        sending: Ab + " 2s 2s forwards"
                    },
                    opacity: {
                        default: "1",
                        failed: "0.7"
                    },
                    color: e.colors.primaryTextColor,
                    justifyContent: {
                        default: "flex-start",
                        system: "center"
                    }
                },
                Bubble: {
                    sharpBorderRadius: "10px",
                    ovalBorderRadius: "10px",
                    css: {
                        boxShadow: e.boxShadow.xs,
                        border: "0"
                    }
                },
                system: {
                    Bubble: {
                        css: {
                            background: "transparent",
                            textAlign: "center",
                            border: "0",
                            width: "100%",
                            boxShadow: "none"
                        }
                    },
                    MessageText: {
                        css: {
                            padding: "0 1em"
                        }
                    }
                },
                fullWidth: {
                    Content: {
                        css: {
                            width: "100%"
                        }
                    }
                }
            },
            MinimizedBar: {
                Icon: {
                    color: "var(--primary-color)"
                },
                css: {
                    position: "relative"
                }
            },
            MinimizedBubble: {
                css: {
                    position: "relative",
                    background: {
                        default: "var(--primary-color)",
                        hasAvatar: "transparent"
                    }
                }
            },
            Minimized: {
                Avatar: {
                    css: {
                        border: "0",
                        backgroundColor: "transparent"
                    }
                },
                Img: {
                    css: {
                        display: "block"
                    }
                },
                ImgOverlay: {
                    css: {
                        display: "none"
                    }
                }
            },
            Invitation: {
                IconButton: {
                    css: {
                        visibility: {
                            mobile: "visible"
                        }
                    }
                },
                Bubble: {
                    sharpBorderRadius: "10px",
                    ovalBorderRadius: "10px",
                    css: {
                        border: "0"
                    }
                }
            },
            TextComposer: {
                css: {
                    fontSize: {
                        default: "14px",
                        mobile: "16px"
                    }
                },
                IconButton: {
                    css: {
                        opacity: {
                            active: 1,
                            default: .4
                        }
                    }
                },
                Icon: {
                    color: "unset"
                }
            },
            View: {
                css: {
                    color: e.colors.primaryTextColor
                },
                Bubble: {
                    sharpBorderRadius: "10px",
                    ovalBorderRadius: "10px",
                    css: {
                        boxShadow: e.boxShadow.xs,
                        border: "0"
                    }
                }
            },
            SystemCard: {
                css: {
                    backgroundColor: e.colors.primaryTimelineSurface,
                    border: "1px solid " + e.colors.borderSubtle,
                    boxShadow: "none"
                }
            }
        }))(t);
        var n
    },
    ok = e => {
        let {
            children: t
        } = e;
        const n = So(e => e.getApplicationState("isPreview")),
            {
                mobile: r,
                rtl: a,
                config: {
                    theme: i
                }
            } = So(e => e.getApplicationState(), n ? null : () => !0),
            s = Pb.colors[i.variant],
            u = { ...Pb,
                variant: i.variant,
                colors: s,
                isRtl: a
            },
            l = o(rk(i.name, u), i);
        return Vn.createElement(kh, {
            theme: r ? o(l, {
                typography: {
                    input: {
                        fontSize: "16px"
                    },
                    placeholder: {
                        fontSize: "16px"
                    }
                }
            }) : l
        }, t)
    },
    ak = () => {
        let e = null;
        const t = (t, n) => e[n] || t;
        return (n, r, o, a) => {
            if (!e) {
                e = {};
                try {
                    return a(n, r, o, a), (i = n).value = "", i.root = null, i.parent = null, i.type = "", i.props = [], i.children = [], i.length = 0, void(i.return = "")
                } finally {
                    e = null
                }
            }
            var i;
            if ("decl" === n.type)
                if (45 === n.props.charCodeAt(0) && 45 === n.props.charCodeAt(1)) {
                    const t = n.props.trim(),
                        r = n.children;
                    e[t] = r, n.return = "", n.value = ""
                } else n.children.indexOf("var(") > -1 && (n.value = n.value.replace(/var\((.*)\)/g, t))
        }
    },
    ik = function(e, t) {
        void 0 === t && (t = "lc");
        const n = hi({
            key: t,
            container: e,
            stylisPlugins: [ak(), si]
        });
        return n.compat = !0, n
    },
    sk = e => {
        let {
            store: t,
            onError: n,
            ...r
        } = e;
        const o = zc.useFrame(),
            a = !t || t.getApplicationState("isPreview"),
            i = pd(() => ik(o.document.head)),
            s = Vn.createElement(hg, {
                value: a
            }, Vn.createElement(xc, null, Vn.createElement(Ai, {
                value: i
            }, Vn.createElement(ok, {
                isPreview: a
            }, Vn.createElement(nk, null, Vn.createElement(Tl, null, Vn.createElement(Dg, null, Vn.createElement(JF, r))))))));
        return t ? Vn.createElement(QF, {
            onError: n
        }, Vn.createElement(Bo, {
            store: t
        }, s)) : Vn.createElement(QF, {
            onError: n
        }, s)
    };

function uk(e) {
    const {
        rtl: t
    } = e.store.getApplicationState();
    return Vn.createElement(Bo, {
        store: e.store
    }, Vn.createElement(ok, null, Vn.createElement(KF, {
        dir: t ? "rtl" : "ltr",
        innerRef: e.onMinimizedRef,
        onResize: e.onMinimizedResize,
        onMaximize: () => {
            e.store.setApplicationState({
                pageFocused: !0,
                applicationFocused: !0,
                visibility: { ...e.store.getApplicationState("visibility"),
                    state: "maximized"
                }
            })
        }
    })))
}

function lk(e) {
    return Vn.createElement(Bo, {
        store: e.store
    }, Vn.createElement(ok, null, Vn.createElement(ub, null)))
}
const ck = (e, t, n, r, o) => {
        let { ...a
        } = t;
        if (n && r) {
            const e = () => {
                n.call("renderCrossFrameMarkup", r(Vn.createElement(uk, a), tk))
            };
            e();
            const t = e => {
                    let [t, r, ...o] = e;
                    n.call("callElementMethod", [t, r].concat(o))
                },
                o = e => {
                    let [t, r] = e;
                    n.call("getElementProperties", [t, r]).then(e => {
                        a.store.emit("get-element-properties-response", e)
                    })
                },
                i = e => {
                    let {
                        message: t,
                        ariaLevel: r
                    } = e;
                    n.call("setLiveAnnouncerMessage", {
                        message: t,
                        ariaLevel: r
                    })
                },
                s = () => {
                    n.call("renderLightboxMarkup", r(Vn.createElement(lk, a)))
                },
                u = () => {
                    n.call("removeLightboxMarkup")
                };
            a.store.on("render-image-lightbox", s), a.store.on("remove-image-lightbox", u), a.store.on("render-minimized", e), a.store.on("call-element-method", t), a.store.on("get-element-properties-request", o), a.store.on("set-live-announcer-message", i)
        }
        qn.render(Vn.createElement(sk, a), e)
    },
    dk = e => "modern" === e ? {
        width: "400px",
        height: "465px"
    } : {
        width: "392px",
        height: "714px"
    };
export {
    xc as $, Ao as A, pd as B, Ai as C, Ui as D, ls as E, ko as F, Vi as G, So as H, Gi as I, ug as J, Wp as K, rm as L, _D as M, wg as N, fr as O, bs as P, Es as Q, Ii as R, gu as S, vm as T, Eu as U, yd as V, dd as W, Ds as X, ik as Y, kh as Z, xg as _, vr as a, Rv as a$, _c as a0, sk as a1, Bo as a2, gp as a3, bp as a4, Hh as a5, jh as a6, lf as a7, Ws as a8, hd as a9, Jg as aA, bm as aB, xp as aC, xs as aD, vs as aE, Vf as aF, Ss as aG, vg as aH, cy as aI, qv as aJ, wl as aK, xl as aL, Pl as aM, Nv as aN, Kf as aO, Cp as aP, Sx as aQ, BC as aR, jo as aS, _v as aT, zv as aU, nh as aV, tC as aW, bd as aX, jv as aY, Jb as aZ, Wv as a_, Tg as aa, Sg as ab, BD as ac, _b as ad, WD as ae, Wi as af, tf as ag, jf as ah, nw as ai, Mf as aj, Hi as ak, ev as al, zD as am, Po as an, Ng as ao, Yb as ap, ih as aq, iv as ar, cC as as, sg as at, TE as au, Uv as av, Ap as aw, fg as ax, dg as ay, Wh as az, ck as b, _r as b$, Vv as b0, Sp as b1, kp as b2, xf as b3, Eh as b4, hv as b5, gf as b6, Lw as b7, Qm as b8, Cm as b9, fE as bA, _h as bB, um as bC, sm as bD, lm as bE, im as bF, yv as bG, RD as bH, ND as bI, Mp as bJ, Ls as bK, ss as bL, Zs as bM, Cb as bN, Tp as bO, FE as bP, IC as bQ, _C as bR, cg as bS, Iv as bT, Ov as bU, ms as bV, Os as bW, th as bX, Ir as bY, Sr as bZ, Or as b_, Of as ba, nf as bb, If as bc, EC as bd, wC as be, LC as bf, dh as bg, xv as bh, Cv as bi, cv as bj, uv as bk, Lg as bl, pD as bm, vu as bn, tu as bo, fu as bp, qg as bq, Er as br, Qb as bs, ey as bt, Ug as bu, eD as bv, Nm as bw, xD as bx, SF as by, Dw as bz, hi as c, hr as d, sa as e, lr as f, oa as g, ia as h, Dr as i, ba as j, aa as k, cr as l, yr as m, dk as n, os as o, zr as p, pg as q, rs as r, mF as s, Mo as t, is as u, gd as v, zc as w, Vu as x, mc as y, mm as z
};