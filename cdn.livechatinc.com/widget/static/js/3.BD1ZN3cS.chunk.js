import {
    k as e
} from "./4.C_rgEAoe.chunk.js";
import {
    g as t,
    A as n,
    y as r,
    w as a,
    v as i,
    n as o,
    r as s,
    c as l,
    B as c,
    e as u,
    p as d,
    f as p,
    C as h,
    x as f,
    D as g,
    t as m,
    E as _,
    F as b,
    s as v,
    G as y,
    l as w,
    i as k,
    H as x,
    a as C,
    _ as I,
    I as S,
    J as E,
    j as A,
    b as T,
    K as z,
    h as D
} from "./5.8dnJ5-bs.chunk.js";
import {
    a as F,
    g as P,
    f as M,
    e as O,
    h as R,
    i as j,
    d as $,
    t as B
} from "./6.CKlS54Ol.chunk.js";
var q = "__test_storage_support__",
    U = function(e) {
        void 0 === e && (e = "local");
        try {
            var t = "session" === e ? window.sessionStorage : window.localStorage;
            return t.setItem(q, "@@test"), "@@test" !== t.getItem(q) ? !1 : (t.removeItem(q), !0)
        } catch (n) {
            return !1
        }
    },
    L = function() {
        var e = Object.create(null);
        return {
            getItem: function(t) {
                var n = e[t];
                return "string" == typeof n ? n : null
            },
            setItem: function(t, n) {
                e[t] = n
            },
            removeItem: function(t) {
                delete e[t]
            },
            clear: function() {
                e = Object.create(null)
            }
        }
    }();
const N = t(e => (t, n) => {
    if (0 !== t) return;
    if ("function" != typeof e) return n(0, () => {}), void n(2);
    let r, a = !1;
    n(0, e => {
        a || (a = 2 === e, a && "function" == typeof r && r())
    }), a || (r = e(e => {
        a || n(1, e)
    }, e => {
        a || void 0 === e || (a = !0, n(2, e))
    }, () => {
        a || (a = !0, n(2))
    }))
});
var V, H = function(e, t) {
    return e === t
};

function Z(e) {
    return void 0 === e && (e = H),
        function(t) {
            return function(n, r) {
                if (0 === n) {
                    var a, i, o = !1;
                    t(0, (function(t, n) {
                        0 === t && (i = n), 1 === t ? o && e(a, n) ? i(1) : (o = !0, a = n, r(1, n)) : r(t, n)
                    }))
                }
            }
        }
}

function G(e) {
    return function(t) {
        return function(n, r) {
            if (0 === n) {
                var a, i = null,
                    o = function(e, t) {
                        if (0 !== e) return 1 === e ? (r(1, t), void i(1)) : void(2 === e && (i = null));
                        (i = t)(1)
                    },
                    s = function(e, t) {
                        2 === e && null !== i && i(2, t), a(e, t)
                    };
                t(0, (function(t, n) {
                    if (0 === t) return a = n, void r(0, s);
                    if (1 !== t) {
                        if (2 === t) {
                            if (r(2, n), null === i) return;
                            i(2, n)
                        }
                    } else {
                        if (null !== i) return;
                        e(n)(0, o)
                    }
                }))
            }
        }
    }
}
V = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")();
var Y, W, Q = ("function" == typeof(W = V.Symbol) ? W.observable ? Y = W.observable : (Y = W("observable"), W.observable = Y) : Y = "@@observable", Y);
const J = n(Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Q
}, Symbol.toStringTag, {
    value: "Module"
}))).default;
const X = t(e => (t, n) => {
        if (0 !== t) return;
        let r;
        n(0, e => {
            2 === e && r && (r.unsubscribe ? r.unsubscribe() : r())
        }), e = e[J] ? e[J]() : e, r = e.subscribe({
            next: e => n(1, e),
            error: e => n(2, e),
            complete: () => n(2)
        })
    }),
    K = e => (t, n) => {
        if (0 !== t) return;
        let r = !1;
        e.then(e => {
            r || (n(1, e), r || n(2))
        }, e => {
            r || n(2, e)
        }), n(0, e => {
            2 === e && (r = !0)
        })
    };
const ee = t((function(...e) {
    let t = e[0];
    for (let n = 1, r = e.length; n < r; n++) t = e[n](t);
    return t
}));
const te = t(e => t => (n, r) => {
    if (0 !== n) return;
    let a;
    t(0, (t, n) => {
        0 === t ? (a = n, r(0, (e, t) => {
            0 !== e && a(e, t)
        }), r(1, e)) : r(t, n)
    })
});
const ne = t(e => t => (n, r) => {
    0 === n && t(0, (t, n) => {
        r(t, 1 === t ? e(n) : n)
    })
});

function re(e) {
    return t => r(ne(e)(t))
}
var ae = function() {},
    ie = {};

function oe(e) {
    var t, n, r = [],
        a = !1,
        i = ie;
    return function(o, s) {
        if (0 === o) {
            if (i !== ie) return s(0, ae), a && s(1, n), void s(2, i);
            r.push(s);
            var l = function(e, n) {
                if (2 !== e) i === ie && t(e, n);
                else {
                    var a = r.indexOf(s); - 1 !== a && r.splice(a, 1)
                }
            };
            1 !== r.length ? (s(0, l), a && i === ie && s(1, n)) : e(0, (function(e, o) {
                if (0 === e) return t = o, void s(0, l);
                1 === e && (a = !0, n = o);
                var c = r.slice(0);
                2 === e && (i = o, r = null), c.forEach((function(t) {
                    t(e, o)
                }))
            }))
        }
    }
}
const se = t((function() {
        let e = [];
        return (t, n) => {
            if (0 === t) {
                const t = n;
                e.push(t), t(0, n => {
                    if (2 === n) {
                        const n = e.indexOf(t);
                        n > -1 && e.splice(n, 1)
                    }
                })
            } else {
                const r = e.slice(0);
                for (let a, i = 0, o = r.length; i < o; i++) a = r[i], e.indexOf(a) > -1 && a(t, n)
            }
        }
    })),
    le = {},
    ce = e => t => (n, r) => {
        if (0 !== n) return;
        let a, i, o = !1,
            s = le;
        t(0, (t, n) => {
            if (0 === t) return a = n, e(0, (e, t) => 0 === e ? (i = t, void i(1)) : 1 === e ? (s = void 0, i(2), a(2), void(o && r(2))) : void(2 === e && (i = null, t && (s = t, a(2), o && r(e, t))))), o = !0, r(0, (e, t) => {
                s === le && (2 === e && i && i(2), a(e, t))
            }), void(s !== le && r(2, s));
            2 === t && i(2), r(t, n)
        })
    },
    ue = (e, t, n) => t => (n, r) => {
        0 === n && t(0, (t, n) => {
            1 === t && void 0 !== n && e && e(n), r(t, n)
        })
    };

function de(e) {
    const t = function(e) {
        try {
            return window.localStorage
        } catch (t) {
            return "SecurityError" === t.name && e ? e : U() ? window.localStorage : L
        }
    }(e);
    return {
        setItem: (e, n) => new Promise(r => r(t.setItem(e, n))),
        getItem: e => new Promise(n => n(t.getItem(e))),
        removeItem: e => new Promise(n => n(t.removeItem(e)))
    }
}

function pe(e, t) {
    return [].concat(...t.map(e))
}

function he(e) {
    return "object" == typeof e && null !== e && !a(e)
}

function fe(t, n) {
    return e(n).reduce((e, r) => (e[r] = t(n[r]), e), {})
}

function ge(e) {
    let t = e.trim();
    if (0 === t.length) return "";
    if (1 === t.length) return t.toLowerCase();
    if (/^[a-z\d]+$/.test(t)) return t;
    return t !== t.toLowerCase() && (t = function(e) {
        let t = e,
            n = !1,
            r = !1,
            a = !1;
        for (let i = 0; i < t.length; i++) {
            const e = t[i];
            n && /[a-zA-Z]/.test(e) && e.toUpperCase() === e ? (t = t.slice(0, i) + "-" + t.slice(i), n = !1, a = r, r = !0, i++) : r && a && /[a-zA-Z]/.test(e) && e.toLowerCase() === e ? (t = t.slice(0, i - 1) + "-" + t.slice(i - 1), a = r, r = !1, n = !0) : (n = e.toLowerCase() === e, a = r, r = e.toUpperCase() === e)
        }
        return t
    }(t)), t = t.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase()), t
}

function me(e) {
    return a(e) ? e : [e]
}

function _e(t) {
    return e(t).map(e => [e, t[e]])
}

function be(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (e(r)) return r
    }
}

function ve(e, t) {
    for (let n = 0; n < t.length; n++)
        if (e(t[n])) return n;
    return -1
}

function ye(e, t) {
    for (let n = t.length - 1; n >= 0; n--)
        if (e(t[n])) return t[n]
}

function we(e, t, n) {
    for (let r = t; r >= 0; r--)
        if (e(n[r])) return r;
    return -1
}

function ke(e, t) {
    return we(e, t.length - 1, t)
}

function xe(e, t) {
    if (e <= 0) return [];
    const n = [];
    for (; e--;) n.push(t);
    return n
}

function Ce(t, n) {
    return e(n).forEach(e => {
        t(n[e], e)
    })
}

function Ie() {
    return Math.random().toString(36).substring(2)
}

function Se(e) {
    const t = Ie();
    return i(t, e) ? Se(e) : t
}

function Ee(e, t) {
    const n = "string" == typeof e ? e.split(".") : e;
    let r = 0,
        a = t;
    for (; a && r < n.length;) a = a[n[r++]];
    return a
}

function Ae(e, t) {
    return -1 !== t.indexOf(e)
}

function Te(e) {
    return 0 === (a(e) ? e : Object.keys(e)).length
}

function ze(e, t) {
    return t.reduce((t, n) => (t[n[e]] = n, t), {})
}

function De(e) {
    return e.length > 0 ? e[e.length - 1] : void 0
}

function Fe(t, n) {
    return e(n).reduce((e, r) => (Object.defineProperty(e, t(r), {
        value: n[r],
        enumerable: !0
    }), e), {})
}

function Pe(t, n) {
    return e(n).reduce((e, r) => (e[r] = t(n[r], r), e), {})
}

function Me(e, t) {
    if (Te(t)) return e;
    const n = {};
    return Ce((r, o) => {
        if (i(o, t))
            if (he(e[o]) && he(t[o])) n[o] = Me(e[o], t[o]);
            else if (a(e[o]) && a(t[o])) {
            const r = Math.max(e[o].length, t[o].length);
            n[o] = new Array(r);
            for (let a = 0; a < r; a++) a in t[o] ? n[o][a] = t[o][a] : a in e[o] && (n[o][a] = e[o][a])
        } else n[o] = t[o];
        else n[o] = e[o]
    }, e), Ce((e, r) => {
        i(r, n) || (n[r] = t[r])
    }, t), n
}

function Oe(t) {
    return e(t).map(e => t[e])
}

function Re(e, t) {
    const n = "function" == typeof e ? e : t => Ee(e, t);
    return (a(t) ? [...t] : Oe(t)).sort((e, t) => n(e) - n(t))
}

function je(t, n) {
    return e(n).reduce((e, r) => (t(n[r], r) || (e[r] = n[r]), e), {})
}

function $e(e, t) {
    return je((t, n) => -1 !== e.indexOf(n), t)
}

function Be(e, t) {
    return e.reduce((e, n) => (e[n] = t[n], e), {})
}

function qe(t, n) {
    return e(n).reduce((e, r) => (t(n[r]) && (e[r] = n[r]), e), {})
}

function Ue(e, t) {
    return e.reduce((e, n) => (i(n, t) && (e[n] = t[n]), e), {})
}

function Le(e, t) {
    return t.filter(t => !e(t))
}

function Ne(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
}

function Ve(e, t) {
    if (Ne(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let a = 0; a < n.length; a++)
        if (!i(n[a], t) || !Ne(e[n[a]], t[n[a]])) return !1;
    return !0
}

function He(e, t) {
    if (t.length <= e) return t;
    const n = t.split(" "),
        r = [];
    let a = 0;
    for (const i of n) {
        if (a + i.length > e) break;
        a += i.length + 1, r.push(i)
    }
    return r.join(" ") + "..."
}

function Ze(e, t, n) {
    const r = we(t => !e(t), t, n);
    return r === t ? [] : n.slice(r + 1, t + 1)
}

function Ge(e, t) {
    let n, r = Date.now() - 2 * e;
    const a = function() {
            r = Date.now(), t(...arguments)
        },
        i = () => clearTimeout(n),
        o = function() {
            const t = Date.now();
            for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
            t - r >= e ? a(...s) : (i(), n = setTimeout(a, r - t + e, ...s))
        };
    return o.cancel = i, o
}

function Ye(e, t) {
    return e === t ? 0 : e < t ? -1 : 1
}
de();
const We = /\s+$/;

function Qe(e) {
    return e.replace(We, "")
}

function Je(e, t) {
    const n = [];
    return t.filter(t => {
        const r = e(t);
        return -1 === n.indexOf(r) && (n.push(r), !0)
    })
}

function Xe(e, t, n) {
    return [...n.slice(0, e), t, ...n.slice(e + 1, n.length)]
}
const Ke = /(?:[^:]+:\/\/)?([^/\s]+)/;

function et(e) {
    const t = e.match(Ke);
    return t && t[1]
}
const tt = (e, t) => F(t)[e],
    nt = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/,
    rt = e => {
        const t = e.match(nt);
        return "/" + (t && t[1] || "")
    },
    at = /^((http(s)?:)?\/\/)/,
    it = e => e.replace(at, ""),
    ot = /^((http(s)?:)?\/\/)/,
    st = e => {
        const t = e.match(ot);
        return t ? t[2] : null
    },
    lt = (e, t) => {
        if (0 === Object.keys(t).length) return e;
        const n = P(e),
            r = rt(e),
            a = M(e) ? F(e) : {},
            i = O({ ...a,
                ...t
            });
        return e.indexOf("#") > -1 ? "" + n + r + "?" + i + "#" + e.split("#")[1] : "" + n + r + "?" + i
    },
    ct = (e, t) => {
        if (-1 === e.indexOf("?")) return e;
        const n = F(e);
        if (Te(n)) return e;
        if (Object.keys(n).every(e => !t.includes(e))) return e;
        t.forEach(e => delete n[e]);
        const [r] = e.split("?"), a = lt(r, n);
        return e.indexOf("#") > -1 ? a + "#" + e.split("#")[1] : a
    },
    ut = e => "https://" + it(e);

function dt(e, t) {
    return t = t || {}, new Promise((function(n, r) {
        var a = new XMLHttpRequest,
            i = [],
            o = [],
            s = {},
            l = function() {
                return {
                    ok: 2 == (a.status / 100 | 0),
                    statusText: a.statusText,
                    status: a.status,
                    url: a.responseURL,
                    text: function() {
                        return Promise.resolve(a.responseText)
                    },
                    json: function() {
                        return Promise.resolve(a.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([a.response]))
                    },
                    clone: l,
                    headers: {
                        keys: function() {
                            return i
                        },
                        entries: function() {
                            return o
                        },
                        get: function(e) {
                            return s[e.toLowerCase()]
                        },
                        has: function(e) {
                            return e.toLowerCase() in s
                        }
                    }
                }
            };
        for (var c in a.open(t.method || "get", e, !0), a.onload = function() {
                a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                    i.push(t = t.toLowerCase()), o.push([t, n]), s[t] = s[t] ? s[t] + "," + n : n
                })), n(l())
            }, a.onerror = r, a.withCredentials = "include" == t.credentials, t.headers) a.setRequestHeader(c, t.headers[c]);
        a.send(t.body || null)
    }))
}
const pt = "file",
    ht = "filled_form",
    ft = "message",
    gt = "system_message",
    mt = "custom",
    _t = "accept_greeting",
    bt = "cancel_greeting",
    vt = "check_goals",
    yt = "deactivate_chat",
    wt = "delete_chat_properties",
    kt = "delete_event_properties",
    xt = "delete_thread_properties",
    Ct = "get_chat",
    It = "get_customer",
    St = "get_form",
    Et = "get_predicted_agent",
    At = "get_url_info",
    Tt = "list_chats",
    zt = "list_group_statuses",
    Dt = "list_threads",
    Ft = "login",
    Pt = "mark_events_as_seen",
    Mt = "resume_chat",
    Ot = "send_event",
    Rt = "send_rich_message_postback",
    jt = "send_sneak_peek",
    $t = "set_customer_session_fields",
    Bt = "start_chat",
    qt = "update_chat_properties",
    Ut = "update_customer",
    Lt = "update_customer_page",
    Nt = "update_event_properties",
    Vt = "update_thread_properties",
    Ht = "upload_file",
    Zt = "chat_deactivated",
    Gt = "customer_disconnected",
    Yt = "customer_side_storage_updated",
    Wt = "groups_status_updated",
    Qt = "incoming_chat",
    Jt = "incoming_event",
    Xt = "incoming_typing_indicator",
    Kt = "queue_position_updated",
    en = "thread_properties_updated",
    tn = "user_added_to_chat",
    nn = "incoming_thinking_indicator",
    rn = "incoming_event_preview",
    an = Object.freeze(Object.defineProperty({
        __proto__: null,
        CHAT_DEACTIVATED: "chat_deactivated",
        CHAT_PROPERTIES_DELETED: "chat_properties_deleted",
        CHAT_PROPERTIES_UPDATED: "chat_properties_updated",
        CHAT_TRANSFERRED: "chat_transferred",
        CUSTOMER_DISCONNECTED: "customer_disconnected",
        CUSTOMER_SIDE_STORAGE_UPDATED: "customer_side_storage_updated",
        CUSTOMER_UPDATED: "customer_updated",
        EVENTS_MARKED_AS_SEEN: "events_marked_as_seen",
        EVENT_PROPERTIES_DELETED: "event_properties_deleted",
        EVENT_PROPERTIES_UPDATED: "event_properties_updated",
        EVENT_UPDATED: "event_updated",
        GREETING_ACCEPTED: "greeting_accepted",
        GREETING_CANCELED: "greeting_canceled",
        GROUPS_STATUS_UPDATED: "groups_status_updated",
        INCOMING_CHAT: "incoming_chat",
        INCOMING_EVENT: "incoming_event",
        INCOMING_EVENT_PREVIEW: "incoming_event_preview",
        INCOMING_GREETING: "incoming_greeting",
        INCOMING_MULTICAST: "incoming_multicast",
        INCOMING_RICH_MESSAGE_POSTBACK: "incoming_rich_message_postback",
        INCOMING_THINKING_INDICATOR: "incoming_thinking_indicator",
        INCOMING_TYPING_INDICATOR: "incoming_typing_indicator",
        QUEUE_POSITION_UPDATED: "queue_position_updated",
        THREAD_PROPERTIES_DELETED: "thread_properties_deleted",
        THREAD_PROPERTIES_UPDATED: "thread_properties_updated",
        USER_ADDED_TO_CHAT: "user_added_to_chat",
        USER_REMOVED_FROM_CHAT: "user_removed_from_chat"
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    on = "customer";

function sn() {
    const e = {};
    return e.promise = new Promise((t, n) => {
        e.resolve = t, e.reject = n
    }), e
}
const ln = (e, t) => {
        const n = function(n) {
            const r = Object.create(n);
            r.action = (t, r) => {
                const a = {
                    type: e,
                    payload: t
                };
                r && (a.meta = r), n.dispatch(a)
            };
            for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
            return t(r, ...i)
        };
        return n.toString = () => e, n
    },
    cn = (e, t) => {
        const n = "REQUEST_" + e,
            r = ln(e, t),
            a = function(e) {
                for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) i[s - 1] = arguments[s];
                const l = Object.create(e);
                let c;
                if (l.action = (t, a) => {
                        const {
                            promise: s,
                            resolve: l,
                            reject: u
                        } = sn();
                        e.dispatch({
                            type: n,
                            payload: { ...t,
                                meta: a,
                                resolve: l,
                                reject: u
                            }
                        }), c = s, c.then(() => {
                            r(e, ...i)
                        }, o)
                    }, t(l, ...i), void 0 === c) throw new Error("You forgot to call `action` handler in " + n + " creator.");
                return c
            };
        return a.toString = () => n, {
            actionMethod: r,
            requestActionMethod: a
        }
    },
    un = (e, t) => {
        if ("object" != typeof e || null === e || Array.isArray(e)) throw new Error("bindActionMethods expects a plain object with actionMethods as values.");
        return fe(e => ((e, t) => function() {
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return e(t, ...r)
        })(e, t), e)
    },
    dn = (e, t) => (t[void 0] && console.warn(["Reducer contains an 'undefined' action type.", "Have you misspelled a constant?"].join("\n")), function(n, r) {
        return void 0 === n && (n = e), i(r.type, t) ? t[r.type](n, r.payload) : n
    }),
    pn = (e, t) => {
        if ("object" != typeof e || null === e || Array.isArray(e)) throw new Error("bindSelectors expects a plain object with selectors as values.");
        return fe(e => ((e, t) => function() {
            for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return e(t(), ...r)
        })(e, t), e)
    },
    hn = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return (e, n) => t.reduce((e, t) => t(e, n), e)
    },
    fn = Object.freeze({
        success: !0
    }),
    gn = (e, t) => {
        const n = {
            id: t.id,
            authorId: t.author_id,
            createdAt: t.created_at,
            threadId: e,
            properties: t.properties || {}
        };
        return void 0 !== t.custom_id && (n.customId = t.custom_id), n
    },
    mn = (e, t) => {
        let n, r, a, i;
        t.height > t.width ? (n = "height", r = "width", a = t.height, i = t.width) : (n = "width", r = "height", a = t.width, i = t.height);
        const o = e / a;
        return {
            [n]: Math.ceil(Math.min(a, e)),
            [r]: Math.ceil(Math.min(o * i, i))
        }
    },
    _n = (e, t) => void 0 !== t.width && void 0 !== t.height ? ((e, t) => ({ ...gn(e, t),
        type: "file",
        contentType: t.content_type,
        url: t.url,
        name: t.name,
        width: t.width,
        height: t.height,
        thumbnails: {
            default: {
                url: t.thumbnail_url,
                ...mn(300, t)
            },
            high: {
                url: t.thumbnail2x_url,
                ...mn(600, t)
            }
        },
        ...t.alternative_text && {
            alternativeText: t.alternative_text
        }
    }))(e, t) : { ...gn(e, t),
        type: "file",
        contentType: t.content_type,
        url: t.url,
        name: t.name
    },
    bn = e => {
        const t = {};
        if ("string" == typeof e.title && (t.title = e.title), "string" == typeof e.subtitle && (t.subtitle = e.subtitle), e.image) {
            const {
                image: n
            } = e;
            t.image = {
                url: n.url,
                name: n.name,
                ...n.alternative_text && {
                    alternativeText: n.alternative_text
                }
            }
        }
        return e.buttons && (t.buttons = e.buttons.map(e => {
            switch (e.type) {
                case "message":
                case "copy":
                case "phone":
                    return {
                        type: e.type,
                        text: e.text,
                        postbackId: e.postback_id,
                        userIds: e.user_ids,
                        value: e.value,
                        role: e.role || "default"
                    };
                case "cancel":
                    return {
                        type: e.type,
                        text: e.text,
                        postbackId: e.postback_id,
                        userIds: e.user_ids,
                        role: e.role || "default"
                    };
                case "url":
                    {
                        const t = {
                            type: e.type,
                            text: e.text,
                            postbackId: e.postback_id,
                            userIds: e.user_ids,
                            value: e.value,
                            role: e.role || "default"
                        };
                        return e.target && (t.target = e.target),
                        t
                    }
                case "webview":
                    return {
                        type: e.type,
                        text: e.text,
                        postbackId: e.postback_id,
                        userIds: e.user_ids,
                        value: e.value,
                        role: e.role || "default"
                    };
                default:
                    return {
                        text: e.text,
                        postbackId: e.postback_id,
                        userIds: e.user_ids,
                        role: e.role || "default"
                    }
            }
        })), t
    },
    vn = (e, t) => {
        switch (t.type) {
            case "file":
                return _n(e, t);
            case "form":
                return ((e, t) => ({ ...gn(e, t),
                    authorId: "system",
                    type: "form",
                    formId: t.form_id,
                    fields: t.fields
                }))(e, t);
            case "filled_form":
                return ((e, t) => ({ ...gn(e, t),
                    type: "filled_form",
                    formId: t.form_id,
                    fields: t.fields.map(e => {
                        switch (e.type) {
                            case "group_chooser":
                                {
                                    if (!e.answer) return e;
                                    const {
                                        group_id: t,
                                        ...n
                                    } = e.answer;
                                    return { ...e,
                                        answer: { ...n,
                                            groupId: t
                                        }
                                    }
                                }
                            default:
                                return e
                        }
                    })
                }))(e, t);
            case "message":
                return ((e, t) => ({ ...gn(e, t),
                    type: "message",
                    text: t.text
                }))(e, t);
            case "rich_message":
                return ((e, t) => {
                    switch (t.template_id) {
                        case "cards":
                        case "quick_replies":
                        case "sticker":
                            return { ...gn(e, t),
                                type: "rich_message",
                                template: t.template_id,
                                elements: t.elements.map(bn)
                            };
                        default:
                            return null
                    }
                })(e, t);
            case "system_message":
                return ((e, t) => {
                    const n = { ...gn(e, { ...t,
                            author_id: "system"
                        }),
                        type: "system_message",
                        text: t.text,
                        systemMessageType: t.system_message_type
                    };
                    return t.text_vars && (n.textVars = t.text_vars), n
                })(e, t);
            case "custom":
                return ((e, t) => ({ ...gn(e, t),
                    type: "custom",
                    ...t.content && {
                        content: t.content
                    }
                }))(e, t);
            default:
                return null
        }
    },
    yn = e => ({
        id: e.id,
        addon: e.addon || null,
        uniqueId: e.unique_id,
        displayedFirstTime: e.displayed_first_time,
        isExitIntent: e.is_exit_intent,
        accepted: e.accepted || !1,
        subtype: e.subtype || "greeting",
        event: vn(null, e.event),
        agent: {
            id: e.agent.id,
            name: e.agent.name,
            avatar: e.agent.avatar,
            jobTitle: e.agent.job_title,
            isBot: e.agent.is_bot || !1
        }
    }),
    wn = function(e) {
        return void 0 === e && (e = {}), e.group_ids ? {
            groupIds: e.group_ids
        } : {}
    },
    kn = e => fe(e => e.events_seen_up_to ? e.events_seen_up_to : null, ze("id", e)),
    xn = (e, t) => {
        const n = t.properties || {};
        return {
            id: t.id,
            chatId: e,
            active: t.active,
            access: wn(t.access),
            createdAt: t.created_at,
            userIds: t.user_ids,
            events: t.events.map(e => vn(t.id, e)).filter(Boolean),
            properties: n,
            previousThreadId: t.previous_thread_id || null,
            nextThreadId: t.next_thread_id || null,
            queue: t.queue ? zn(t.queue) : null
        }
    },
    Cn = e => ({
        id: e.id,
        access: wn(e.access),
        users: e.users.map(Dn),
        properties: e.properties || {},
        eventsSeenUpToMap: kn(e.users)
    }),
    In = e => {
        const t = Ue(["avatar", "email", "name"], e);
        return e.session_fields && (t.sessionFields = e.session_fields.reduce((e, t) => {
            const [n] = Object.keys(t);
            return e[n] = t[n], e
        }, {})), t
    },
    Sn = e => {
        const t = In(e);
        return {
            id: e.id,
            type: "customer",
            ...t,
            sessionFields: t.sessionFields || {}
        }
    },
    En = e => {
        const {
            statistics: t
        } = e;
        return { ...Sn(e),
            statistics: {
                chatsCount: t.chats_count,
                threadsCount: t.threads_count,
                visitsCount: t.visits_count,
                pageViewsCount: t.page_views_count,
                greetingsShownCount: t.greetings_shown_count,
                greetingsAcceptedCount: t.greetings_accepted_count
            }
        }
    },
    An = e => {
        const {
            agent: t,
            queue: n
        } = e;
        return {
            agent: {
                id: t.id,
                type: "agent",
                name: t.name,
                avatar: t.avatar,
                jobTitle: t.job_title,
                isBot: t.is_bot
            },
            queue: n
        }
    },
    Tn = e => ({
        position: e.position,
        waitTime: e.wait_time
    }),
    zn = e => ({ ...Tn(e),
        queuedAt: e.queued_at
    }),
    Dn = e => {
        return "customer" === e.type ? { ...Sn(n = e),
            present: n.present
        } : {
            id: (t = e).id,
            type: "agent",
            name: t.name,
            avatar: t.avatar,
            jobTitle: t.job_title,
            present: t.present
        };
        var t, n
    },
    Fn = e => "offline" === e ? "offline" : "online",
    Pn = e => ({
        chatId: e.chat_id,
        properties: e.properties
    }),
    Mn = e => {
        const t = {
            chatId: e.chat_id,
            threadId: e.thread_id,
            transferredTo: { ...e.transferred_to.agent_ids && {
                    agentIds: e.transferred_to.agent_ids
                },
                ...e.transferred_to.group_ids && {
                    groupIds: e.transferred_to.group_ids
                }
            },
            queue: e.queue ? zn(e.queue) : null
        };
        return "manual" === e.reason ? { ...t,
            reason: e.reason,
            requesterId: e.requester_id
        } : { ...t,
            reason: e.reason
        }
    },
    On = e => ({
        id: e.id,
        ...In(e)
    }),
    Rn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        properties: e.properties
    }),
    jn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        properties: e.properties
    }),
    $n = e => {
        const t = e.thread_id;
        return {
            chatId: e.chat_id,
            threadId: t,
            event: vn(t, e.event)
        }
    },
    Bn = e => ({
        chatId: e.chat_id,
        userId: e.user_id,
        seenUpTo: e.seen_up_to
    }),
    qn = e => ({
        uniqueId: e.unique_id
    }),
    Un = e => {
        const {
            chat: t
        } = e;
        return {
            chat: { ...Cn(t),
                thread: xn(t.id, t.thread)
            }
        }
    },
    Ln = e => ({
        chatId: e.chat_id,
        event: vn(e.thread_id, e.event)
    }),
    Nn = e => yn(e),
    Vn = e => ({
        userId: e.user_id,
        chatId: e.chat_id,
        threadId: e.thread_id,
        eventId: e.event_id,
        postback: e.postback
    }),
    Hn = e => {
        const {
            chat_id: t,
            typing_indicator: n
        } = e;
        return {
            chatId: t,
            typingIndicator: {
                authorId: n.author_id,
                isTyping: n.is_typing
            }
        }
    },
    Zn = e => {
        const {
            chat_id: t,
            thread_id: n,
            author_id: r,
            sent_at: a,
            custom_id: i,
            title: o,
            description: s
        } = e;
        return {
            chatId: t,
            threadId: n,
            authorId: r,
            sentAt: a,
            ...i && {
                customId: i
            },
            ...o && {
                title: o
            },
            ...s && {
                description: s
            }
        }
    },
    Gn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        event: vn(e.thread_id, e.event)
    }),
    Yn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        queue: Tn(e.queue)
    }),
    Wn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        properties: e.properties
    }),
    Qn = e => ({
        chatId: e.chat_id,
        threadId: e.thread_id,
        properties: e.properties
    }),
    Jn = e => ({
        chatId: e.chat_id,
        user: Dn(e.user),
        present: e.user.present
    }),
    Xn = e => ({
        chatId: e.chat_id,
        userId: e.user_id,
        reason: e.reason
    }),
    Kn = e => e.map(e => {
        switch (e.type) {
            case "group_chooser":
                return { ...e,
                    options: e.options.map(e => {
                        let {
                            group_id: t,
                            ...n
                        } = e;
                        return { ...n,
                            groupId: t
                        }
                    })
                };
            case "rating":
                {
                    const {
                        comment_label: t,
                        ...n
                    } = e;
                    return { ...n,
                        commentLabel: t
                    }
                }
            default:
                return e
        }
    }),
    er = e => {
        const t = e.map((e, t) => ({ ...e,
            id: String(t)
        }));
        return Kn(t)
    },
    tr = e => {
        const t = !("id" in e.fields[0]);
        return {
            id: e.id,
            fields: t ? er(e.fields) : Kn(e.fields)
        }
    },
    nr = e => e.enabled ? { ...e,
        form: tr(e.form)
    } : e,
    rr = e => {
        const t = {
            url: e.url
        };
        return e.title && (t.title = e.title), e.description && (t.description = e.description), e.image_url && (t.imageUrl = "https://" + it(e.image_url), e.image_width && e.image_height && (t.imageWidth = e.image_width, t.imageHeight = e.image_height)), t
    },
    ar = e => {
        let {
            online_groups_ids: t,
            customer_groups: n
        } = e;
        if (!t) return "offline";
        return Ae(n.monitoring.id, t) ? "online" : "offline"
    },
    ir = e => {
        const t = e.chats_summary.map(e => {
            let {
                id: t,
                active: n,
                access: r,
                last_thread_created_at: a,
                last_thread_id: i,
                last_event_per_type: o,
                properties: s = {},
                users: l
            } = e;
            const c = {
                id: t,
                active: n,
                access: wn(r),
                properties: s,
                users: l.map(Dn),
                lastThreadId: i || null,
                lastThreadCreatedAt: a || null,
                eventsSeenUpToMap: kn(l)
            };
            if (!o) return c;
            c.lastEventsPerType = fe(e => vn(e.thread_id, e.event), o);
            const u = o,
                d = De(Object.keys(u).map(e => u[e]).sort((e, t) => e.thread_id === t.thread_id ? Ye(e.event.created_at, t.event.created_at) : Ye(e.thread_created_at, t.thread_created_at)));
            return d && c.lastEventsPerType && (c.lastEvent = c.lastEventsPerType[d.event.type]), c
        });
        return {
            chatsSummary: Re(e => {
                var t;
                let {
                    lastEvent: n,
                    order: r
                } = e;
                return -1 * (null != (t = void 0 !== n ? n.timestamp : r) ? t : 0)
            }, t),
            totalChats: e.total_chats,
            users: Je(e => e.id, pe(e => e.users, t)),
            previousPageId: e.previous_page_id || null,
            nextPageId: e.next_page_id || null
        }
    },
    or = e => e.groups_status,
    sr = (e, t) => ({
        threads: t.threads.map(t => xn(e.payload.chat_id, t)),
        previousPageId: t.previous_page_id || null,
        nextPageId: t.next_page_id || null
    }),
    lr = e => {
        const {
            __priv_dynamic_config: t,
            chats: n,
            greeting: r
        } = e;
        return {
            dynamicConfig: t,
            customer: En(e.customer),
            availability: ar(t),
            chats: n.map(t => ({
                id: t.chat_id,
                active: "has_active_thread" in t ? t.has_active_thread : e.has_active_thread,
                hasUnreadEvents: t.has_unread_events
            })),
            ...r && {
                greeting: yn(r)
            }
        }
    },
    cr = e => {
        switch (e.action) {
            case "chat_deactivated":
                return {
                    action: e.action,
                    payload: {
                        chatId: e.payload.chat_id
                    }
                };
            case "chat_properties_deleted":
                return {
                    action: e.action,
                    payload: (t = e.payload, {
                        chatId: t.chat_id,
                        properties: t.properties
                    })
                };
            case "chat_properties_updated":
                return {
                    action: e.action,
                    payload: Pn(e.payload)
                };
            case "chat_transferred":
                return {
                    action: e.action,
                    payload: Mn(e.payload)
                };
            case "customer_side_storage_updated":
            case "customer_disconnected":
                return {
                    action: e.action,
                    payload: e.payload
                };
            case "customer_updated":
                return {
                    action: e.action,
                    payload: On(e.payload)
                };
            case "event_properties_deleted":
                return {
                    action: e.action,
                    payload: Rn(e.payload)
                };
            case "event_properties_updated":
                return {
                    action: e.action,
                    payload: jn(e.payload)
                };
            case "event_updated":
                return {
                    action: e.action,
                    payload: $n(e.payload)
                };
            case "events_marked_as_seen":
                return {
                    action: e.action,
                    payload: Bn(e.payload)
                };
            case "greeting_accepted":
            case "greeting_canceled":
                return {
                    action: e.action,
                    payload: qn(e.payload)
                };
            case "groups_status_updated":
                return {
                    action: e.action,
                    payload: e.payload
                };
            case "incoming_chat":
                return {
                    action: e.action,
                    payload: Un(e.payload)
                };
            case "incoming_event":
                return {
                    action: e.action,
                    payload: Ln(e.payload)
                };
            case "incoming_greeting":
                return {
                    action: e.action,
                    payload: Nn(e.payload)
                };
            case "incoming_multicast":
                return {
                    action: e.action,
                    payload: e.payload
                };
            case "incoming_rich_message_postback":
                return {
                    action: e.action,
                    payload: Vn(e.payload)
                };
            case "incoming_typing_indicator":
                return {
                    action: e.action,
                    payload: Hn(e.payload)
                };
            case "incoming_thinking_indicator":
                return {
                    action: e.action,
                    payload: Zn(e.payload)
                };
            case "incoming_event_preview":
                return {
                    action: e.action,
                    payload: Gn(e.payload)
                };
            case "queue_position_updated":
                return {
                    action: e.action,
                    payload: Yn(e.payload)
                };
            case "thread_properties_deleted":
                return {
                    action: e.action,
                    payload: Wn(e.payload)
                };
            case "thread_properties_updated":
                return {
                    action: e.action,
                    payload: Qn(e.payload)
                };
            case "user_added_to_chat":
                return {
                    action: e.action,
                    payload: Jn(e.payload)
                };
            case "user_removed_from_chat":
                return {
                    action: e.action,
                    payload: Xn(e.payload)
                }
        }
        var t
    },
    ur = e => {
        let {
            request: t,
            response: n
        } = e;
        switch (n.action) {
            case "accept_greeting":
            case "cancel_greeting":
            case "delete_chat_properties":
            case "delete_event_properties":
            case "delete_thread_properties":
                return {
                    action: n.action,
                    payload: fn
                };
            case "get_chat":
                return {
                    action: n.action,
                    payload: (r = n.payload, { ...Cn(r),
                        thread: r.thread ? xn(r.id, r.thread) : null
                    })
                };
            case "get_customer":
                return {
                    action: n.action,
                    payload: En(n.payload)
                };
            case "get_form":
                return {
                    action: n.action,
                    payload: nr(n.payload)
                };
            case "get_predicted_agent":
                return {
                    action: n.action,
                    payload: An(n.payload)
                };
            case "get_url_info":
                return {
                    action: n.action,
                    payload: rr(n.payload)
                };
            case "list_chats":
                return {
                    action: n.action,
                    payload: ir(n.payload)
                };
            case "list_group_statuses":
                return {
                    action: n.action,
                    payload: or(n.payload)
                };
            case "list_threads":
                return {
                    action: n.action,
                    payload: sr(t, n.payload)
                };
            case "login":
                return {
                    action: n.action,
                    payload: lr(n.payload)
                };
            case "mark_events_as_seen":
            case "send_sneak_peek":
            case "set_customer_session_fields":
            case "send_rich_message_postback":
            case "update_chat_properties":
            case "update_customer":
            case "update_customer_page":
            case "update_event_properties":
            case "update_thread_properties":
                return {
                    action: n.action,
                    payload: fn
                }
        }
        var r
    },
    dr = e => ({
        code: e.type.toUpperCase(),
        message: e.message
    });
var pr, hr, fr, gr, mr, _r, br, vr, yr, wr;

function kr() {
    return wr ? yr : (wr = 1, yr = function(e) {
        var t = {};
        t.src_Any = (hr ? pr : (hr = 1, pr = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)).source, t.src_Cc = (gr ? fr : (gr = 1, fr = /[\0-\x1F\x7F-\x9F]/)).source, t.src_Z = (_r ? mr : (_r = 1, mr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/)).source, t.src_P = (vr ? br : (vr = 1, br = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/)).source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
        return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
    })
}

function xr(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return t.forEach((function(t) {
        t && Object.keys(t).forEach((function(n) {
            e[n] = t[n]
        }))
    })), e
}

function Cr(e) {
    return Object.prototype.toString.call(e)
}

function Ir(e) {
    return "[object Function]" === Cr(e)
}

function Sr(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
}
var Er = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
};
var Ar = {
        "http:": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] || t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
            }
        },
        "mailto:": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
            }
        }
    },
    Tr = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

function zr(e) {
    var t = e.re = kr()(e.__opts__),
        n = e.__tlds__.slice();

    function r(e) {
        return e.replace("%TLDS%", t.src_tlds)
    }
    e.onCompile(), e.__tlds_replaced__ || n.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(r(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(r(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(r(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(r(t.tpl_host_fuzzy_test), "i");
    var a = [];

    function i(e, t) {
        throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
    }
    e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
        var n = e.__schemas__[t];
        if (null !== n) {
            var r = {
                validate: null,
                link: null
            };
            if (e.__compiled__[t] = r, "[object Object]" === Cr(n)) return ! function(e) {
                return "[object RegExp]" === Cr(e)
            }(n.validate) ? Ir(n.validate) ? r.validate = n.validate : i(t, n) : r.validate = function(e) {
                return function(t, n) {
                    var r = t.slice(n);
                    return e.test(r) ? r.match(e)[0].length : 0
                }
            }(n.validate), void(Ir(n.normalize) ? r.normalize = n.normalize : n.normalize ? i(t, n) : r.normalize = function(e, t) {
                t.normalize(e)
            });
            ! function(e) {
                return "[object String]" === Cr(e)
            }(n) ? i(t, n): a.push(t)
        }
    })), a.forEach((function(t) {
        e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
    })), e.__compiled__[""] = {
        validate: null,
        normalize: function(e, t) {
            t.normalize(e)
        }
    };
    var o = Object.keys(e.__compiled__).filter((function(t) {
        return t.length > 0 && e.__compiled__[t]
    })).map(Sr).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
        function(e) {
            e.__index__ = -1, e.__text_cache__ = ""
        }(e)
}

function Dr(e, t) {
    var n = e.__index__,
        r = e.__last_index__,
        a = e.__text_cache__.slice(n, r);
    this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = r + t, this.raw = a, this.text = a, this.url = a
}

function Fr(e, t) {
    var n = new Dr(e, t);
    return e.__compiled__[n.schema].normalize(n, e), n
}

function Pr(e, t) {
    if (!(this instanceof Pr)) return new Pr(e, t);
    var n;
    t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
        return e || Er.hasOwnProperty(t)
    }), !1) && (t = e, e = {})), this.__opts__ = xr({}, Er, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = xr({}, Ar, e), this.__compiled__ = {}, this.__tlds__ = Tr, this.__tlds_replaced__ = !1, this.re = {}, zr(this)
}
Pr.prototype.add = function(e, t) {
    return this.__schemas__[e] = t, zr(this), this
}, Pr.prototype.set = function(e) {
    return this.__opts__ = xr(this.__opts__, e), this
}, Pr.prototype.test = function(e) {
    if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
    var t, n, r, a, i, o, s, l;
    if (this.re.schema_test.test(e))
        for ((s = this.re.schema_search).lastIndex = 0; null !== (t = s.exec(e));)
            if (a = this.testSchemaAt(e, t[2], s.lastIndex)) {
                this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + a;
                break
            }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = o)), this.__index__ >= 0
}, Pr.prototype.pretest = function(e) {
    return this.re.pretest.test(e)
}, Pr.prototype.testSchemaAt = function(e, t, n) {
    return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
}, Pr.prototype.match = function(e) {
    var t = 0,
        n = [];
    this.__index__ >= 0 && this.__text_cache__ === e && (n.push(Fr(this, t)), t = this.__last_index__);
    for (var r = t ? e.slice(t) : e; this.test(r);) n.push(Fr(this, t)), r = r.slice(this.__last_index__), t += this.__last_index__;
    return n.length ? n : null
}, Pr.prototype.tlds = function(e, t) {
    return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
        return e !== n[t - 1]
    })).reverse(), zr(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, zr(this), this)
}, Pr.prototype.normalize = function(e) {
    e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
}, Pr.prototype.onCompile = function() {};
var Mr = Pr;
const Or = t(Mr);

function Rr() {
    return {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1
    }
}
let jr = {
    async: !1,
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1
};
const $r = /[&<>"']/,
    Br = new RegExp($r.source, "g"),
    qr = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    Ur = new RegExp(qr.source, "g"),
    Lr = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    Nr = e => Lr[e];

function Vr(e, t) {
    if (t) {
        if ($r.test(e)) return e.replace(Br, Nr)
    } else if (qr.test(e)) return e.replace(Ur, Nr);
    return e
}
const Hr = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

function Zr(e) {
    return e.replace(Hr, (e, t) => "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "")
}
const Gr = /(^|[^\[])\^/g;

function Yr(e, t) {
    e = "string" == typeof e ? e : e.source, t = t || "";
    const n = {
        replace: (t, r) => (r = (r = r.source || r).replace(Gr, "$1"), e = e.replace(t, r), n),
        getRegex: () => new RegExp(e, t)
    };
    return n
}
const Wr = /[^\w:]/g,
    Qr = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function Jr(e, t, n) {
    if (e) {
        let e;
        try {
            e = decodeURIComponent(Zr(n)).replace(Wr, "").toLowerCase()
        } catch (r) {
            return null
        }
        if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:")) return null
    }
    t && !Qr.test(n) && (n = function(e, t) {
        Xr[" " + e] || (Kr.test(e) ? Xr[" " + e] = e + "/" : Xr[" " + e] = ia(e, "/", !0));
        const n = -1 === (e = Xr[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2) ? n ? t : e.replace(ea, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(ta, "$1") + t : e + t
    }(t, n));
    try {
        n = encodeURI(n).replace(/%25/g, "%")
    } catch (r) {
        return null
    }
    return n
}
const Xr = {},
    Kr = /^[^:]+:\/*[^/]*$/,
    ea = /^([^:]+:)[\s\S]*$/,
    ta = /^([^:]+:\/*[^/]*)[\s\S]*$/;
const na = {
    exec: function() {}
};

function ra(e) {
    let t, n, r = 1;
    for (; r < arguments.length; r++)
        for (n in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e
}

function aa(e, t) {
    const n = e.replace(/\|/g, (e, t, n) => {
        let r = !1,
            a = t;
        for (; --a >= 0 && "\\" === n[a];) r = !r;
        return r ? "|" : " |"
    }).split(/ \|/);
    let r = 0;
    if (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), n.length > t) n.splice(t);
    else
        for (; n.length < t;) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
    return n
}

function ia(e, t, n) {
    const r = e.length;
    if (0 === r) return "";
    let a = 0;
    for (; a < r;) {
        const i = e.charAt(r - a - 1);
        if (i !== t || n) {
            if (i === t || !n) break;
            a++
        } else a++
    }
    return e.slice(0, r - a)
}

function oa(e) {
    e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
}

function sa(e, t) {
    if (t < 1) return "";
    let n = "";
    for (; t > 1;) 1 & t && (n += e), t >>= 1, e += e;
    return n + e
}

function la(e, t, n, r) {
    const a = t.href,
        i = t.title ? Vr(t.title) : null,
        o = e[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== e[0].charAt(0)) {
        r.state.inLink = !0;
        const e = {
            type: "link",
            raw: n,
            href: a,
            title: i,
            text: o,
            tokens: r.inlineTokens(o)
        };
        return r.state.inLink = !1, e
    }
    return {
        type: "image",
        raw: n,
        href: a,
        title: i,
        text: Vr(o)
    }
}
class ca {
    constructor(e) {
        this.options = e || jr
    }
    space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return {
            type: "space",
            raw: t[0]
        }
    }
    code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
            const e = t[0].replace(/^ {1,4}/gm, "");
            return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? e : ia(e, "\n")
            }
        }
    }
    fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
            const e = t[0],
                n = function(e, t) {
                    const n = e.match(/^(\s+)(?:```)/);
                    if (null === n) return t;
                    const r = n[1];
                    return t.split("\n").map(e => {
                        const t = e.match(/^\s+/);
                        if (null === t) return e;
                        const [n] = t;
                        return n.length >= r.length ? e.slice(r.length) : e
                    }).join("\n")
                }(e, t[3] || "");
            return {
                type: "code",
                raw: e,
                lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2],
                text: n
            }
        }
    }
    heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
                const t = ia(e, "#");
                this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
            }
            return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: e,
                tokens: this.lexer.inline(e)
            }
        }
    }
    hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return {
            type: "hr",
            raw: t[0]
        }
    }
    blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
            const e = t[0].replace(/^ *>[ \t]?/gm, ""),
                n = this.lexer.state.top;
            this.lexer.state.top = !0;
            const r = this.lexer.blockTokens(e);
            return this.lexer.state.top = n, {
                type: "blockquote",
                raw: t[0],
                tokens: r,
                text: e
            }
        }
    }
    list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
            let n, r, a, i, o, s, l, c, u, d, p, h, f = t[1].trim();
            const g = f.length > 1,
                m = {
                    type: "list",
                    raw: "",
                    ordered: g,
                    start: g ? +f.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
            f = g ? "\\d{1,9}\\" + f.slice(-1) : "\\" + f, this.options.pedantic && (f = g ? f : "[*+-]");
            const _ = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
            for (; e && (h = !1, t = _.exec(e)) && !this.rules.block.hr.test(e);) {
                if (n = t[0], e = e.substring(n.length), c = t[2].split("\n", 1)[0].replace(/^\t+/, e => " ".repeat(3 * e.length)), u = e.split("\n", 1)[0], this.options.pedantic ? (i = 2, p = c.trimLeft()) : (i = t[2].search(/[^ ]/), i = i > 4 ? 1 : i, p = c.slice(i), i += t[1].length), s = !1, !c && /^ *$/.test(u) && (n += u + "\n", e = e.substring(u.length + 1), h = !0), !h) {
                    const t = new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
                        r = new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                        a = new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),
                        o = new RegExp(`^ {0,${Math.min(3,i-1)}}#`);
                    for (; e && (d = e.split("\n", 1)[0], u = d, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !a.test(u)) && !o.test(u) && !t.test(u) && !r.test(e);) {
                        if (u.search(/[^ ]/) >= i || !u.trim()) p += "\n" + u.slice(i);
                        else {
                            if (s) break;
                            if (c.search(/[^ ]/) >= 4) break;
                            if (a.test(c)) break;
                            if (o.test(c)) break;
                            if (r.test(c)) break;
                            p += "\n" + u
                        }
                        s || u.trim() || (s = !0), n += d + "\n", e = e.substring(d.length + 1), c = u.slice(i)
                    }
                }
                m.loose || (l ? m.loose = !0 : /\n *\n *$/.test(n) && (l = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(p), r && (a = "[ ] " !== r[0], p = p.replace(/^\[[ xX]\] +/, ""))), m.items.push({
                    type: "list_item",
                    raw: n,
                    task: !!r,
                    checked: a,
                    loose: !1,
                    text: p
                }), m.raw += n
            }
            m.items[m.items.length - 1].raw = n.trimRight(), m.items[m.items.length - 1].text = p.trimRight(), m.raw = m.raw.trimRight();
            const b = m.items.length;
            for (o = 0; o < b; o++)
                if (this.lexer.state.top = !1, m.items[o].tokens = this.lexer.blockTokens(m.items[o].text, []), !m.loose) {
                    const e = m.items[o].tokens.filter(e => "space" === e.type),
                        t = e.length > 0 && e.some(e => /\n.*\n/.test(e.raw));
                    m.loose = t
                }
            if (m.loose)
                for (o = 0; o < b; o++) m.items[o].loose = !0;
            return m
        }
    }
    html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
            const e = {
                type: "html",
                raw: t[0],
                pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                text: t[0]
            };
            if (this.options.sanitize) {
                const n = this.options.sanitizer ? this.options.sanitizer(t[0]) : Vr(t[0]);
                e.type = "paragraph", e.text = n, e.tokens = this.lexer.inline(n)
            }
            return e
        }
    }
    def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
            const e = t[1].toLowerCase().replace(/\s+/g, " "),
                n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "",
                r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
            return {
                type: "def",
                tag: e,
                raw: t[0],
                href: n,
                title: r
            }
        }
    }
    table(e) {
        const t = this.rules.block.table.exec(e);
        if (t) {
            const e = {
                type: "table",
                header: aa(t[1]).map(e => ({
                    text: e
                })),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
            };
            if (e.header.length === e.align.length) {
                e.raw = t[0];
                let n, r, a, i, o = e.align.length;
                for (n = 0; n < o; n++) /^ *-+: *$/.test(e.align[n]) ? e.align[n] = "right" : /^ *:-+: *$/.test(e.align[n]) ? e.align[n] = "center" : /^ *:-+ *$/.test(e.align[n]) ? e.align[n] = "left" : e.align[n] = null;
                for (o = e.rows.length, n = 0; n < o; n++) e.rows[n] = aa(e.rows[n], e.header.length).map(e => ({
                    text: e
                }));
                for (o = e.header.length, r = 0; r < o; r++) e.header[r].tokens = this.lexer.inline(e.header[r].text);
                for (o = e.rows.length, r = 0; r < o; r++)
                    for (i = e.rows[r], a = 0; a < i.length; a++) i[a].tokens = this.lexer.inline(i[a].text);
                return e
            }
        }
    }
    lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t) return {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: this.lexer.inline(t[1])
        }
    }
    paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
            const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
                type: "paragraph",
                raw: t[0],
                text: e,
                tokens: this.lexer.inline(e)
            }
        }
    }
    text(e) {
        const t = this.rules.block.text.exec(e);
        if (t) return {
            type: "text",
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0])
        }
    }
    escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return {
            type: "escape",
            raw: t[0],
            text: Vr(t[1])
        }
    }
    tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
            type: this.options.sanitize ? "text" : "html",
            raw: t[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Vr(t[0]) : t[0]
        }
    }
    link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
            const e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
                if (!/>$/.test(e)) return;
                const t = ia(e.slice(0, -1), "\\");
                if ((e.length - t.length) % 2 == 0) return
            } else {
                const e = function(e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    const n = e.length;
                    let r = 0,
                        a = 0;
                    for (; a < n; a++)
                        if ("\\" === e[a]) a++;
                        else if (e[a] === t[0]) r++;
                    else if (e[a] === t[1] && (r--, r < 0)) return a;
                    return -1
                }(t[2], "()");
                if (e > -1) {
                    const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                    t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ""
                }
            }
            let n = t[2],
                r = "";
            if (this.options.pedantic) {
                const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                e && (n = e[1], r = e[3])
            } else r = t[3] ? t[3].slice(1, -1) : "";
            return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), la(t, {
                href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                title: r ? r.replace(this.rules.inline._escapes, "$1") : r
            }, t[0], this.lexer)
        }
    }
    reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
            let e = (n[2] || n[1]).replace(/\s+/g, " ");
            if (e = t[e.toLowerCase()], !e) {
                const e = n[0].charAt(0);
                return {
                    type: "text",
                    raw: e,
                    text: e
                }
            }
            return la(n, e, n[0], this.lexer)
        }
    }
    emStrong(e, t, n = "") {
        let r = this.rules.inline.emStrong.lDelim.exec(e);
        if (!r) return;
        if (r[3] && n.match(/[\p{L}\p{N}]/u)) return;
        const a = r[1] || r[2] || "";
        if (!a || a && ("" === n || this.rules.inline.punctuation.exec(n))) {
            const n = r[0].length - 1;
            let a, i, o = n,
                s = 0;
            const l = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            for (l.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (r = l.exec(t));) {
                if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
                if (i = a.length, r[3] || r[4]) {
                    o += i;
                    continue
                }
                if ((r[5] || r[6]) && n % 3 && !((n + i) % 3)) {
                    s += i;
                    continue
                }
                if (o -= i, o > 0) continue;
                i = Math.min(i, i + o + s);
                const t = e.slice(0, n + r.index + (r[0].length - a.length) + i);
                if (Math.min(n, i) % 2) {
                    const e = t.slice(1, -1);
                    return {
                        type: "em",
                        raw: t,
                        text: e,
                        tokens: this.lexer.inlineTokens(e)
                    }
                }
                const l = t.slice(2, -2);
                return {
                    type: "strong",
                    raw: t,
                    text: l,
                    tokens: this.lexer.inlineTokens(l)
                }
            }
        }
    }
    codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
            let e = t[2].replace(/\n/g, " ");
            const n = /[^ ]/.test(e),
                r = /^ /.test(e) && / $/.test(e);
            return n && r && (e = e.substring(1, e.length - 1)), e = Vr(e, !0), {
                type: "codespan",
                raw: t[0],
                text: e
            }
        }
    }
    br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return {
            type: "br",
            raw: t[0]
        }
    }
    del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t) return {
            type: "del",
            raw: t[0],
            text: t[2],
            tokens: this.lexer.inlineTokens(t[2])
        }
    }
    autolink(e, t) {
        const n = this.rules.inline.autolink.exec(e);
        if (n) {
            let e, r;
            return "@" === n[2] ? (e = Vr(this.options.mangle ? t(n[1]) : n[1]), r = "mailto:" + e) : (e = Vr(n[1]), r = e), {
                type: "link",
                raw: n[0],
                text: e,
                href: r,
                tokens: [{
                    type: "text",
                    raw: e,
                    text: e
                }]
            }
        }
    }
    url(e, t) {
        let n;
        if (n = this.rules.inline.url.exec(e)) {
            let e, r;
            if ("@" === n[2]) e = Vr(this.options.mangle ? t(n[0]) : n[0]), r = "mailto:" + e;
            else {
                let t;
                do {
                    t = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0]
                } while (t !== n[0]);
                e = Vr(n[0]), r = "www." === n[1] ? "http://" + n[0] : n[0]
            }
            return {
                type: "link",
                raw: n[0],
                text: e,
                href: r,
                tokens: [{
                    type: "text",
                    raw: e,
                    text: e
                }]
            }
        }
    }
    inlineText(e, t) {
        const n = this.rules.inline.text.exec(e);
        if (n) {
            let e;
            return e = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : Vr(n[0]) : n[0] : Vr(this.options.smartypants ? t(n[0]) : n[0]), {
                type: "text",
                raw: n[0],
                text: e
            }
        }
    }
}
const ua = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: na,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
};
ua.def = Yr(ua.def).replace("label", ua._label).replace("title", ua._title).getRegex(), ua.bullet = /(?:[*+-]|\d{1,9}[.)])/, ua.listItemStart = Yr(/^( *)(bull) */).replace("bull", ua.bullet).getRegex(), ua.list = Yr(ua.list).replace(/bull/g, ua.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + ua.def.source + ")").getRegex(), ua._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ua._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, ua.html = Yr(ua.html, "i").replace("comment", ua._comment).replace("tag", ua._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ua.paragraph = Yr(ua._paragraph).replace("hr", ua.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ua._tag).getRegex(), ua.blockquote = Yr(ua.blockquote).replace("paragraph", ua.paragraph).getRegex(), ua.normal = ra({}, ua), ua.gfm = ra({}, ua.normal, {
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
}), ua.gfm.table = Yr(ua.gfm.table).replace("hr", ua.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ua._tag).getRegex(), ua.gfm.paragraph = Yr(ua._paragraph).replace("hr", ua.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", ua.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ua._tag).getRegex(), ua.pedantic = ra({}, ua.normal, {
    html: Yr("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", ua._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: na,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: Yr(ua.normal._paragraph).replace("hr", ua.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", ua.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const da = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: na,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: na,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
};

function pa(e) {
    return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
}

function ha(e) {
    let t, n, r = "";
    const a = e.length;
    for (t = 0; t < a; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), r += "&#" + n + ";";
    return r
}
da._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", da.punctuation = Yr(da.punctuation).replace(/punctuation/g, da._punctuation).getRegex(), da.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, da.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, da._comment = Yr(ua._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), da.emStrong.lDelim = Yr(da.emStrong.lDelim).replace(/punct/g, da._punctuation).getRegex(), da.emStrong.rDelimAst = Yr(da.emStrong.rDelimAst, "g").replace(/punct/g, da._punctuation).getRegex(), da.emStrong.rDelimUnd = Yr(da.emStrong.rDelimUnd, "g").replace(/punct/g, da._punctuation).getRegex(), da._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, da._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, da._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, da.autolink = Yr(da.autolink).replace("scheme", da._scheme).replace("email", da._email).getRegex(), da._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, da.tag = Yr(da.tag).replace("comment", da._comment).replace("attribute", da._attribute).getRegex(), da._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, da._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, da._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, da.link = Yr(da.link).replace("label", da._label).replace("href", da._href).replace("title", da._title).getRegex(), da.reflink = Yr(da.reflink).replace("label", da._label).replace("ref", ua._label).getRegex(), da.nolink = Yr(da.nolink).replace("ref", ua._label).getRegex(), da.reflinkSearch = Yr(da.reflinkSearch, "g").replace("reflink", da.reflink).replace("nolink", da.nolink).getRegex(), da.normal = ra({}, da), da.pedantic = ra({}, da.normal, {
    strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
    },
    em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
    },
    link: Yr(/^!?\[(label)\]\((.*?)\)/).replace("label", da._label).getRegex(),
    reflink: Yr(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", da._label).getRegex()
}), da.gfm = ra({}, da.normal, {
    escape: Yr(da.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}), da.gfm.url = Yr(da.gfm.url, "i").replace("email", da.gfm._extended_email).getRegex(), da.breaks = ra({}, da.gfm, {
    br: Yr(da.br).replace("{2,}", "*").getRegex(),
    text: Yr(da.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
class fa {
    constructor(e) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || jr, this.options.tokenizer = this.options.tokenizer || new ca, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        const t = {
            block: ua.normal,
            inline: da.normal
        };
        this.options.pedantic ? (t.block = ua.pedantic, t.inline = da.pedantic) : this.options.gfm && (t.block = ua.gfm, this.options.breaks ? t.inline = da.breaks : t.inline = da.gfm), this.tokenizer.rules = t
    }
    static get rules() {
        return {
            block: ua,
            inline: da
        }
    }
    static lex(e, t) {
        return new fa(t).lex(e)
    }
    static lexInline(e, t) {
        return new fa(t).inlineTokens(e)
    }
    lex(e) {
        let t;
        for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); t = this.inlineQueue.shift();) this.inlineTokens(t.src, t.tokens);
        return this.tokens
    }
    blockTokens(e, t = []) {
        let n, r, a, i;
        for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (e, t, n) => t + "    ".repeat(n.length)); e;)
            if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(r => !!(n = r.call({
                    lexer: this
                }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0))))
                if (n = this.tokenizer.space(e)) e = e.substring(n.raw.length), 1 === n.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(n);
                else if (n = this.tokenizer.code(e)) e = e.substring(n.raw.length), r = t[t.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? t.push(n) : (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
        else if (n = this.tokenizer.fences(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.heading(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.hr(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.blockquote(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.list(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.html(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.def(e)) e = e.substring(n.raw.length), r = t[t.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
            href: n.href,
            title: n.title
        }) : (r.raw += "\n" + n.raw, r.text += "\n" + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
        else if (n = this.tokenizer.table(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.lheading(e)) e = e.substring(n.raw.length), t.push(n);
        else {
            if (a = e, this.options.extensions && this.options.extensions.startBlock) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startBlock.forEach((function(e) {
                    r = e.call({
                        lexer: this
                    }, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                })), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1))
            }
            if (this.state.top && (n = this.tokenizer.paragraph(a))) r = t[t.length - 1], i && "paragraph" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n), i = a.length !== e.length, e = e.substring(n.raw.length);
            else if (n = this.tokenizer.text(e)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === r.type ? (r.raw += "\n" + n.raw, r.text += "\n" + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : t.push(n);
            else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(t);
                    break
                }
                throw new Error(t)
            }
        }
        return this.state.top = !0, t
    }
    inline(e, t = []) {
        return this.inlineQueue.push({
            src: e,
            tokens: t
        }), t
    }
    inlineTokens(e, t = []) {
        let n, r, a, i, o, s, l = e;
        if (this.tokens.links) {
            const e = Object.keys(this.tokens.links);
            if (e.length > 0)
                for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l));) e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + sa("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
        }
        for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, i.index) + "[" + sa("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (i = this.tokenizer.rules.inline.escapedEmSt.exec(l));) l = l.slice(0, i.index + i[0].length - 2) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        for (; e;)
            if (o || (s = ""), o = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(r => !!(n = r.call({
                    lexer: this
                }, e, t)) && (e = e.substring(n.raw.length), t.push(n), !0))))
                if (n = this.tokenizer.escape(e)) e = e.substring(n.raw.length), t.push(n);
                else if (n = this.tokenizer.tag(e)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
        else if (n = this.tokenizer.link(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(n.raw.length), r = t[t.length - 1], r && "text" === n.type && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
        else if (n = this.tokenizer.emStrong(e, l, s)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.codespan(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.br(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.del(e)) e = e.substring(n.raw.length), t.push(n);
        else if (n = this.tokenizer.autolink(e, ha)) e = e.substring(n.raw.length), t.push(n);
        else if (this.state.inLink || !(n = this.tokenizer.url(e, ha))) {
            if (a = e, this.options.extensions && this.options.extensions.startInline) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startInline.forEach((function(e) {
                    r = e.call({
                        lexer: this
                    }, n), "number" == typeof r && r >= 0 && (t = Math.min(t, r))
                })), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1))
            }
            if (n = this.tokenizer.inlineText(a, pa)) e = e.substring(n.raw.length), "_" !== n.raw.slice(-1) && (s = n.raw.slice(-1)), o = !0, r = t[t.length - 1], r && "text" === r.type ? (r.raw += n.raw, r.text += n.text) : t.push(n);
            else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                    console.error(t);
                    break
                }
                throw new Error(t)
            }
        } else e = e.substring(n.raw.length), t.push(n);
        return t
    }
}
class ga {
    constructor(e) {
        this.options = e || jr
    }
    code(e, t, n) {
        const r = (t || "").match(/\S*/)[0];
        if (this.options.highlight) {
            const t = this.options.highlight(e, r);
            null != t && t !== e && (n = !0, e = t)
        }
        return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + Vr(r) + '">' + (n ? e : Vr(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : Vr(e, !0)) + "</code></pre>\n"
    }
    blockquote(e) {
        return `<blockquote>\n${e}</blockquote>\n`
    }
    html(e) {
        return e
    }
    heading(e, t, n, r) {
        if (this.options.headerIds) {
            return `<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`
        }
        return `<h${t}>${e}</h${t}>\n`
    }
    hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }
    list(e, t, n) {
        const r = t ? "ol" : "ul";
        return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
    }
    listitem(e) {
        return `<li>${e}</li>\n`
    }
    checkbox(e) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
    }
    paragraph(e) {
        return `<p>${e}</p>\n`
    }
    table(e, t) {
        return t && (t = `<tbody>${t}</tbody>`), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
    }
    tablerow(e) {
        return `<tr>\n${e}</tr>\n`
    }
    tablecell(e, t) {
        const n = t.header ? "th" : "td";
        return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`
    }
    strong(e) {
        return `<strong>${e}</strong>`
    }
    em(e) {
        return `<em>${e}</em>`
    }
    codespan(e) {
        return `<code>${e}</code>`
    }
    br() {
        return this.options.xhtml ? "<br/>" : "<br>"
    }
    del(e) {
        return `<del>${e}</del>`
    }
    link(e, t, n) {
        if (null === (e = Jr(this.options.sanitize, this.options.baseUrl, e))) return n;
        let r = '<a href="' + e + '"';
        return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>", r
    }
    image(e, t, n) {
        if (null === (e = Jr(this.options.sanitize, this.options.baseUrl, e))) return n;
        let r = `<img src="${e}" alt="${n}"`;
        return t && (r += ` title="${t}"`), r += this.options.xhtml ? "/>" : ">", r
    }
    text(e) {
        return e
    }
}
class ma {
    strong(e) {
        return e
    }
    em(e) {
        return e
    }
    codespan(e) {
        return e
    }
    del(e) {
        return e
    }
    html(e) {
        return e
    }
    text(e) {
        return e
    }
    link(e, t, n) {
        return "" + n
    }
    image(e, t, n) {
        return "" + n
    }
    br() {
        return ""
    }
}
class _a {
    constructor() {
        this.seen = {}
    }
    serialize(e) {
        return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
    }
    getNextSafeSlug(e, t) {
        let n = e,
            r = 0;
        if (this.seen.hasOwnProperty(n)) {
            r = this.seen[e];
            do {
                r++, n = e + "-" + r
            } while (this.seen.hasOwnProperty(n))
        }
        return t || (this.seen[e] = r, this.seen[n] = 0), n
    }
    slug(e, t = {}) {
        const n = this.serialize(e);
        return this.getNextSafeSlug(n, t.dryrun)
    }
}
class ba {
    constructor(e) {
        this.options = e || jr, this.options.renderer = this.options.renderer || new ga, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ma, this.slugger = new _a
    }
    static parse(e, t) {
        return new ba(t).parse(e)
    }
    static parseInline(e, t) {
        return new ba(t).parseInline(e)
    }
    parse(e, t = !0) {
        let n, r, a, i, o, s, l, c, u, d, p, h, f, g, m, _, b, v, y, w = "";
        const k = e.length;
        for (n = 0; n < k; n++)
            if (d = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[d.type] && (y = this.options.extensions.renderers[d.type].call({
                    parser: this
                }, d), !1 !== y || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d.type))) w += y || "";
            else switch (d.type) {
                case "space":
                    continue;
                case "hr":
                    w += this.renderer.hr();
                    continue;
                case "heading":
                    w += this.renderer.heading(this.parseInline(d.tokens), d.depth, Zr(this.parseInline(d.tokens, this.textRenderer)), this.slugger);
                    continue;
                case "code":
                    w += this.renderer.code(d.text, d.lang, d.escaped);
                    continue;
                case "table":
                    for (c = "", l = "", i = d.header.length, r = 0; r < i; r++) l += this.renderer.tablecell(this.parseInline(d.header[r].tokens), {
                        header: !0,
                        align: d.align[r]
                    });
                    for (c += this.renderer.tablerow(l), u = "", i = d.rows.length, r = 0; r < i; r++) {
                        for (s = d.rows[r], l = "", o = s.length, a = 0; a < o; a++) l += this.renderer.tablecell(this.parseInline(s[a].tokens), {
                            header: !1,
                            align: d.align[a]
                        });
                        u += this.renderer.tablerow(l)
                    }
                    w += this.renderer.table(c, u);
                    continue;
                case "blockquote":
                    u = this.parse(d.tokens), w += this.renderer.blockquote(u);
                    continue;
                case "list":
                    for (p = d.ordered, h = d.start, f = d.loose, i = d.items.length, u = "", r = 0; r < i; r++) m = d.items[r], _ = m.checked, b = m.task, g = "", m.task && (v = this.renderer.checkbox(_), f ? m.tokens.length > 0 && "paragraph" === m.tokens[0].type ? (m.tokens[0].text = v + " " + m.tokens[0].text, m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && "text" === m.tokens[0].tokens[0].type && (m.tokens[0].tokens[0].text = v + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({
                        type: "text",
                        text: v
                    }) : g += v), g += this.parse(m.tokens, f), u += this.renderer.listitem(g, b, _);
                    w += this.renderer.list(u, p, h);
                    continue;
                case "html":
                    w += this.renderer.html(d.text);
                    continue;
                case "paragraph":
                    w += this.renderer.paragraph(this.parseInline(d.tokens));
                    continue;
                case "text":
                    for (u = d.tokens ? this.parseInline(d.tokens) : d.text; n + 1 < k && "text" === e[n + 1].type;) d = e[++n], u += "\n" + (d.tokens ? this.parseInline(d.tokens) : d.text);
                    w += t ? this.renderer.paragraph(u) : u;
                    continue;
                default:
                    {
                        const e = 'Token with "' + d.type + '" type was not found.';
                        if (this.options.silent) return void console.error(e);
                        throw new Error(e)
                    }
            }
        return w
    }
    parseInline(e, t) {
        t = t || this.renderer;
        let n, r, a, i = "";
        const o = e.length;
        for (n = 0; n < o; n++)
            if (r = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type] && (a = this.options.extensions.renderers[r.type].call({
                    parser: this
                }, r), !1 !== a || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type))) i += a || "";
            else switch (r.type) {
                case "escape":
                    i += t.text(r.text);
                    break;
                case "html":
                    i += t.html(r.text);
                    break;
                case "link":
                    i += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                    break;
                case "image":
                    i += t.image(r.href, r.title, r.text);
                    break;
                case "strong":
                    i += t.strong(this.parseInline(r.tokens, t));
                    break;
                case "em":
                    i += t.em(this.parseInline(r.tokens, t));
                    break;
                case "codespan":
                    i += t.codespan(r.text);
                    break;
                case "br":
                    i += t.br();
                    break;
                case "del":
                    i += t.del(this.parseInline(r.tokens, t));
                    break;
                case "text":
                    i += t.text(r.text);
                    break;
                default:
                    {
                        const e = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return void console.error(e);
                        throw new Error(e)
                    }
            }
        return i
    }
}

function va(e, t, n) {
    if (null == e) throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    if ("function" == typeof t && (n = t, t = null), oa(t = ra({}, va.defaults, t || {})), n) {
        const r = t.highlight;
        let i;
        try {
            i = fa.lex(e, t)
        } catch (a) {
            return n(a)
        }
        const o = function(e) {
            let o;
            if (!e) try {
                t.walkTokens && va.walkTokens(i, t.walkTokens), o = ba.parse(i, t)
            } catch (a) {
                e = a
            }
            return t.highlight = r, e ? n(e) : n(null, o)
        };
        if (!r || r.length < 3) return o();
        if (delete t.highlight, !i.length) return o();
        let s = 0;
        return va.walkTokens(i, (function(e) {
            "code" === e.type && (s++, setTimeout(() => {
                r(e.text, e.lang, (function(t, n) {
                    if (t) return o(t);
                    null != n && n !== e.text && (e.text = n, e.escaped = !0), s--, 0 === s && o()
                }))
            }, 0))
        })), void(0 === s && o())
    }

    function r(e) {
        if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Vr(e.message + "", !0) + "</pre>";
        throw e
    }
    try {
        const n = fa.lex(e, t);
        if (t.walkTokens) {
            if (t.async) return Promise.all(va.walkTokens(n, t.walkTokens)).then(() => ba.parse(n, t)).catch(r);
            va.walkTokens(n, t.walkTokens)
        }
        return ba.parse(n, t)
    } catch (a) {
        r(a)
    }
}

function ya(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function wa(e, t, n) {
    return t && function(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ka(r.key), r)
        }
    }(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function ka(e) {
    var t = function(e, t) {
        if ("object" != typeof e || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(e, "string");
    return "symbol" == typeof t ? t : t + ""
}

function xa(e, t, n) {
    return t = Ca(t),
        function(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }(e, function() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
            } catch (t) {}
            return function() {
                return !!e
            }()
        }() ? Reflect.construct(t, n || [], Ca(e).constructor) : t.apply(e, n))
}

function Ca(e) {
    return (Ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function Ia(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Sa(e, t)
}

function Sa(e, t) {
    return (Sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}
va.options = va.setOptions = function(e) {
    var t;
    return ra(va.defaults, e), t = va.defaults, jr = t, va
}, va.getDefaults = Rr, va.defaults = jr, va.use = function(...e) {
    const t = va.defaults.extensions || {
        renderers: {},
        childTokens: {}
    };
    e.forEach(e => {
        const n = ra({}, e);
        if (n.async = va.defaults.async || n.async, e.extensions && (e.extensions.forEach(e => {
                if (!e.name) throw new Error("extension name required");
                if (e.renderer) {
                    const n = t.renderers[e.name];
                    t.renderers[e.name] = n ? function(...t) {
                        let r = e.renderer.apply(this, t);
                        return !1 === r && (r = n.apply(this, t)), r
                    } : e.renderer
                }
                if (e.tokenizer) {
                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                    t[e.level] ? t[e.level].unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                }
                e.childTokens && (t.childTokens[e.name] = e.childTokens)
            }), n.extensions = t), e.renderer) {
            const t = va.defaults.renderer || new ga;
            for (const n in e.renderer) {
                const r = t[n];
                t[n] = (...a) => {
                    let i = e.renderer[n].apply(t, a);
                    return !1 === i && (i = r.apply(t, a)), i
                }
            }
            n.renderer = t
        }
        if (e.tokenizer) {
            const t = va.defaults.tokenizer || new ca;
            for (const n in e.tokenizer) {
                const r = t[n];
                t[n] = (...a) => {
                    let i = e.tokenizer[n].apply(t, a);
                    return !1 === i && (i = r.apply(t, a)), i
                }
            }
            n.tokenizer = t
        }
        if (e.walkTokens) {
            const t = va.defaults.walkTokens;
            n.walkTokens = function(n) {
                let r = [];
                return r.push(e.walkTokens.call(this, n)), t && (r = r.concat(t.call(this, n))), r
            }
        }
        va.setOptions(n)
    })
}, va.walkTokens = function(e, t) {
    let n = [];
    for (const r of e) switch (n = n.concat(t.call(va, r)), r.type) {
        case "table":
            for (const e of r.header) n = n.concat(va.walkTokens(e.tokens, t));
            for (const e of r.rows)
                for (const r of e) n = n.concat(va.walkTokens(r.tokens, t));
            break;
        case "list":
            n = n.concat(va.walkTokens(r.items, t));
            break;
        default:
            va.defaults.extensions && va.defaults.extensions.childTokens && va.defaults.extensions.childTokens[r.type] ? va.defaults.extensions.childTokens[r.type].forEach((function(e) {
                n = n.concat(va.walkTokens(r[e], t))
            })) : r.tokens && (n = n.concat(va.walkTokens(r.tokens, t)))
    }
    return n
}, va.parseInline = function(e, t) {
    if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    oa(t = ra({}, va.defaults, t || {}));
    try {
        const n = fa.lexInline(e, t);
        return t.walkTokens && va.walkTokens(n, t.walkTokens), ba.parseInline(n, t)
    } catch (n) {
        if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Vr(n.message + "", !0) + "</pre>";
        throw n
    }
}, va.Parser = ba, va.parser = ba.parse, va.Renderer = ga, va.TextRenderer = ma, va.Lexer = fa, va.lexer = fa.lex, va.Tokenizer = ca, va.Slugger = _a, va.parse = va, va.options, va.setOptions, va.use, va.walkTokens, va.parseInline, ba.parse, fa.lex;
const Ea = new Or,
    {
        map: Aa
    } = Array.prototype,
    Ta = ["A", "UL", "OL", "LI", "STRONG", "EM", "BR", "DEL", "CODE", "PRE"];
let za = function(e) {
        function t() {
            return ya(this, t), xa(this, t, arguments)
        }
        return Ia(t, ga), wa(t, [{
            key: "link",
            value: function(e, t, n) {
                const r = Ea.match(n);
                return r && r.length > 1 ? n : '<a href="' + e + '" target="_blank" rel="nofollow noopener">' + n + "</a>"
            }
        }])
    }(),
    Da = function(e) {
        function t() {
            return ya(this, t), xa(this, t, arguments)
        }
        return Ia(t, za), wa(t, [{
            key: "list",
            value: function(e, t, n) {
                let r = n;
                return e.replace(Fa, () => t ? r++ + ". " : "- ")
            }
        }, {
            key: "listitem",
            value: function(e) {
                return "" + Fa + e
            }
        }])
    }();
const Fa = "%list-item%",
    Pa = e => e.replace(/\n+$/, "");

function Ma(e, t, n) {
    if (function(e, t) {
            let n = e.parentNode;
            for (; n;) {
                if (n.nodeName === t) return !0;
                n = n.parentNode
            }
            return !1
        }(e, "A")) return e.textContent;
    if (null === e.textContent) return null;
    const r = Ea.match(e.textContent);
    if (!r || 0 === r.length) return e.textContent;
    const [a] = Array.from(r).reduce((t, a, i) => {
        let [o, l] = t;
        return o.push(e.textContent.slice(l, a.index), s.createElement(null != n ? n : "a", {
            href: a.url,
            target: "_blank",
            rel: "nofollow noopener"
        }, a.text)), i === r.length - 1 && o.push(e.textContent.slice(a.lastIndex)), [o, a.lastIndex]
    }, [
        [], 0
    ]);
    return s.createElement(s.Fragment, {
        key: t
    }, ...a)
}

function Oa(e) {
    va.setOptions({
        renderer: new Da
    });
    const t = va.parse(e),
        n = new DOMParser,
        {
            body: r
        } = n.parseFromString(t, "text/html");
    return r ? Pa(r.textContent || "") : ""
}
const Ra = e => {
        var t, n;
        let {
            template: r,
            root: a,
            preserveLists: i,
            limit: o,
            linkComponent: l = null
        } = e;
        const c = null != (t = null == a ? void 0 : a.props) ? t : {},
            u = null != (n = null == a ? void 0 : a.component) ? n : s.Fragment,
            d = s.useMemo(() => {
                try {
                    const e = new DOMParser;
                    va.setOptions({
                        renderer: i ? new Da : new za
                    });
                    const t = Pa(va.parse(r)),
                        {
                            body: n
                        } = e.parseFromString(t, "text/html");
                    return n ? function(e, t, n) {
                        let r = 0,
                            a = !1;
                        const i = e => Aa.call(e, (e, o) => {
                            if ("#text" === e.nodeName) return n ? a ? null : e.textContent && e.textContent.length + r < n ? (r += e.textContent.length, Ma(e, o, t)) : (a = !0, e.textContent = He(n - r, e.textContent), Ma(e, o, t)) : Ma(e, o, t);
                            if (!Ae(e.nodeName, Ta)) return e.hasChildNodes() ? i(e.childNodes) : null;
                            const l = {
                                key: o,
                                ...e.hasChildNodes() && {
                                    children: i(e.childNodes)
                                }
                            };
                            if ("OL" === e.nodeName) {
                                const t = e.getAttribute("start");
                                t && (l.start = parseInt(t, 10))
                            }
                            if ("A" === e.nodeName) {
                                let n = e.getAttribute("href");
                                if (!n || R(n)) return i(e.childNodes);
                                if (/\S+@\S+\.\S+/.test(n) || st(n) || (n = "https://" + n), t) return s.createElement(t, {
                                    href: n,
                                    ...l
                                });
                                const r = { ...l,
                                    href: n,
                                    target: "_blank",
                                    rel: "nofollow noopener"
                                };
                                return s.createElement("a", r)
                            }
                            return s.createElement(e.nodeName.toLowerCase(), l)
                        });
                        return i(e)
                    }(n.childNodes, l, o) : ""
                } catch (e) {
                    return console.error("ReactMD: error while parsing template: '" + r + "'", e), r
                }
            }, [r, i, o, l]);
        return s.createElement(u, c, d)
    },
    ja = "not_initialized",
    $a = e => {
        let {
            id: t,
            serverId: n = null,
            active: r = !0,
            participants: a = [],
            properties: i
        } = e;
        if ("string" != typeof t) throw new Error("Chat ID has to be a string.");
        if (null !== n && t !== n) throw new Error('If serverId is given ("' + n + '") it should match id ("' + t + '").');
        return {
            id: t,
            serverId: n,
            active: r,
            participants: a,
            properties: i
        }
    },
    Ba = e => {
        let {
            id: t,
            type: n,
            author: r,
            timestamp: a,
            own: i,
            serverId: o = null,
            thread: s = null,
            serverTimestamp: l = null,
            delivered: c = !0,
            seen: u = !1,
            failed: d = !1,
            properties: p = {}
        } = e;
        if ("string" != typeof t) throw new Error("Event ID has to be a string.");
        if ("string" != typeof n) throw new Error("Event has to have string `type` property.");
        if (null !== o && t !== o) throw new Error('If serverId is given ("' + o + '") it should match id ("' + t + '").');
        return {
            id: t,
            serverId: o,
            type: n,
            thread: s,
            author: r,
            own: i,
            timestamp: a,
            serverTimestamp: l,
            delivered: c,
            seen: u,
            failed: d,
            properties: p
        }
    },
    qa = e => {
        let {
            id: t,
            serverId: n = t,
            type: r = null,
            name: a = null,
            email: i = null,
            avatar: o = null,
            properties: s = {}
        } = e;
        if ("string" != typeof t) throw new Error("User ID has to be a string.");
        return {
            id: t,
            serverId: n,
            type: r,
            name: a,
            email: i,
            avatar: o,
            properties: s
        }
    };

function Ua(e, t) {
    return e === t
}

function La(e, t, n) {
    if (null === t || null === n || t.length !== n.length) return !1;
    for (var r = t.length, a = 0; a < r; a++)
        if (!e(t[a], n[a])) return !1;
    return !0
}

function Na(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ua,
        n = null,
        r = null;
    return function() {
        return La(t, n, arguments) || (r = e.apply(null, arguments)), n = arguments, r
    }
}

function Va(e) {
    var t = Array.isArray(e[0]) ? e[0] : e;
    if (!t.every((function(e) {
            return "function" == typeof e
        }))) {
        var n = t.map((function(e) {
            return typeof e
        })).join(", ");
        throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
    }
    return t
}
var Ha = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return function() {
            for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
            var i = 0,
                o = r.pop(),
                s = Va(r),
                l = e.apply(void 0, [function() {
                    return i++, o.apply(null, arguments)
                }].concat(n)),
                c = Na((function() {
                    for (var e = [], t = s.length, n = 0; n < t; n++) e.push(s[n].apply(null, arguments));
                    return l.apply(null, e)
                }));
            return c.resultFunc = o, c.recomputations = function() {
                return i
            }, c.resetRecomputations = function() {
                return i = 0
            }, c
        }
    }(Na),
    Za = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._cache = {}
        }
        return e.prototype.set = function(e, t) {
            this._cache[e] = t
        }, e.prototype.get = function(e) {
            return this._cache[e]
        }, e.prototype.remove = function(e) {
            delete this._cache[e]
        }, e.prototype.clear = function() {
            this._cache = {}
        }, e
    }();

function Ga() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r = Za;
    return function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = void 0,
            i = void 0;
        "function" == typeof n ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'), a = new r, i = n) : (a = n.cacheObject || new r, i = n.selectorCreator || Ha);
        var o = function() {
            var n = e.apply(void 0, arguments);
            if ("string" == typeof n || "number" == typeof n) {
                var r = a.get(n);
                return void 0 === r && (r = i.apply(void 0, t), a.set(n, r)), r.apply(void 0, arguments)
            }
        };
        return o.getMatchingSelector = function() {
            var t = e.apply(void 0, arguments);
            return a.get(t)
        }, o.removeMatchingSelector = function() {
            var t = e.apply(void 0, arguments);
            a.remove(t)
        }, o.clearCache = function() {
            a.clear()
        }, o.resultFunc = t[t.length - 1], o
    }
}
const Ya = (e, t) => t,
    Wa = (e, t) => Ee(t.replace(/\//gi, "."), e.views),
    Qa = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return Ee(n + "._default", e.views)
    },
    Ja = e => e.views.current,
    Xa = e => e.session.connectionState,
    Ka = e => e.entities.chats.byIds,
    ei = (e, t) => Ka(e)[t],
    ti = (e, t, n) => ei(e, t).events.byIds[n],
    ni = (e, t, n) => ti(e, t, ei(e, t).events.serverIdsMapping[n]),
    ri = (e, t, n) => !!ti(e, t, n),
    ai = (e, t) => ei(e, t).events.byIds,
    ii = Ga([(e, t) => ei(e, t).events.orderedIds, ai], (e, t) => e.map(e => t[e]))(Ya),
    oi = Ga([ei, ii], (e, t) => ({ ...e,
        events: t
    }))(Ya),
    si = (e, t) => !!ei(e, t),
    li = e => fe(t => {
        let {
            id: n
        } = t;
        return oi(e, n)
    }, Ka(e)),
    ci = e => e.entities.users.byIds,
    ui = e => ci(e)[(e => e.session.id)(e)],
    di = (e, t) => ci(e)[t],
    pi = (e, t) => !!di(e, t),
    hi = (e, t) => {
        var n;
        return null == (n = e.views) ? void 0 : n.Chat[t].timeline
    },
    fi = e => ui(e).id,
    gi = Ga([ii, fi], (e, t) => ye(e => {
        let {
            delivered: n,
            author: r
        } = e;
        return n && r === t
    }, e))(Ya),
    mi = Ga([ii, fi], (e, t) => ye(e => {
        let {
            seen: n,
            author: r
        } = e;
        return n && r === t
    }, e))(Ya),
    _i = {
        boosters: !0,
        form: !0,
        system_message: !0
    },
    bi = Ha([ii, e => ui(e).id], (e, t) => ke(e => {
        const n = e.author === t && "message" === e.type,
            r = !!e.properties && "file" === e.properties.serverType,
            a = !0 === e.seen && !_i[e.type] && Boolean(e.serverId);
        return n && !r || a
    }, e)),
    vi = (e, t) => e.author !== t && !e.seen && !_i[e.type],
    yi = (e, t) => {
        const n = bi(e, t),
            r = ui(e).id;
        return ii(e, t).slice(n + 1).filter(e => vi(e, r))
    },
    wi = (e, t) => De(yi(e, t)),
    ki = Ga([(e, t) => ei(e, t).participants, ci], (e, t) => e.map(e => t[e]))(Ya);

function xi(e, t) {
    if (void 0 === t) return e.application;
    const n = t;
    return e.application[n]
}
const Ci = Object.freeze(Object.defineProperty({
        __proto__: null,
        getApplicationState: xi,
        getChat: oi,
        getChatByServerId: (e, t) => oi(e, e.entities.chats.serverIdsMapping[t]),
        getChatList: e => {
            var t;
            return null == (t = e.views) ? void 0 : t.ChatList
        },
        getChats: li,
        getConnectionState: Xa,
        getCurrentView: Ja,
        getDefaultView: Qa,
        getEvent: ti,
        getEventByServerId: ni,
        getEvents: ii,
        getIndexedEvents: ai,
        getLastDeliveredEvent: gi,
        getLastEvent: (e, t) => De(ii(e, t)),
        getLastSeenAgentEvent: (e, t) => {
            const n = bi(e, t);
            if (-1 === n) return null;
            const r = ui(e).id;
            return be(e => vi(e, r), ii(e, t).slice(n + 1))
        },
        getLastSeenEvent: mi,
        getLastUnseenEvent: wi,
        getParticipants: ki,
        getSessionUser: ui,
        getSessionUserId: fi,
        getTimeline: hi,
        getUnseenCount: (e, t) => yi(e, t).length,
        getUser: di,
        getUserByServerId: (e, t) => di(e, e.entities.users.serverIdsMapping[t]),
        getUsers: ci,
        getView: Wa,
        hasChat: si,
        hasEvent: ri,
        hasEventByServerId: (e, t, n) => !!ni(e, t, n),
        hasUser: pi,
        localize: (e, t, n, r) => {
            let a = e.localization[t];
            const i = e.application.language;
            if (void 0 === a) return "";
            if ("object" == typeof a && i) {
                const e = new Intl.PluralRules(i);
                if (void 0 === r) return a[e.select(1)];
                const t = e.select(r);
                if (!(t in a)) return "";
                a = a[t]
            }
            return n ? Object.keys(n).reduce((e, t) => e.replace(new RegExp("%" + t + "%", "g"), n[t]), a) : a
        }
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ii = ["delivered", "failed", "properties", "seen", "serverTimestamp", "thread"],
    Si = (e, t) => e.forEach(e => {
        if (i(e, t)) throw new Error("Updating `" + e + "` property is not possible.")
    }),
    Ei = ln("ADD_VIEW", (function(e, t, n) {
        let {
            action: r,
            getState: a
        } = e;
        if (void 0 === n && (n = {}), Wa(a(), t)) throw new Error('There is already the "' + t + '" view. It has to be unique.');
        return r({
            name: t,
            data: n
        }), Wa(a(), t)
    })),
    Ai = ln("SET_CURRENT_VIEW", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        if (!Wa(r(), t)) {
            const e = Qa(r());
            if (!e) throw new Error('Given view "' + t + "\" doesn't exist.");
            return n({
                name: e
            }), Ja(r())
        }
        return n({
            name: t
        }), Ja(r())
    }),
    Ti = ln("UPDATE_VIEW", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!Wa(a(), t)) throw new Error('There is no "' + t + '" view. You should add it first.');
        return r({
            name: t,
            data: n
        }), Wa(a(), t)
    }),
    zi = ln("SET_DEFAULT_VIEW", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        return r({
            name: n,
            path: t
        }), Wa(a(), t + "/" + n)
    }),
    Di = ln("ADD_CHAT", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        const {
            events: a = [],
            ...i
        } = t;
        if (i.id && si(r(), i.id)) throw new Error('There is already a chat with "' + i.id + '" ID. It has to be unique.');
        const o = be(e => !pi(r(), e), a.map(e => e.author).concat(i.participants || []));
        if (o) throw new Error('Given user ("' + o + "\") doesn't exist. You should add it first.");
        const s = i.id || Se(li(r()));
        return n({
            id: s,
            chat: $a({ ...i,
                id: s
            }),
            events: a.map(Ba)
        }), oi(r(), s)
    }),
    Fi = ln("ADD_EVENT", (e, t, n) => {
        var r;
        let {
            action: a,
            getState: i
        } = e;
        const {
            id: o,
            serverId: s
        } = n, l = i();
        if (!o || !s || o === s) {
            if (!si(l, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
            if (!ri(l, t, o)) {
                if (!pi(l, n.author)) throw new Error('Specified author ("' + n.author + "\") doesn't exist. You should add it first.");
                return a({
                    id: o,
                    chat: t,
                    event: Ba({ ...n,
                        timestamp: null != (r = n.timestamp) ? r : Date.now(),
                        own: n.author === fi(l)
                    })
                }), ti(i(), t, o)
            }
        }
    }),
    Pi = ln("REMOVE_EVENT", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        const i = a();
        if (!si(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!ri(i, t, n)) throw new Error('There is no event with "' + n + '" ID in this chat ("' + t + '").');
        r({
            id: n,
            chat: t
        })
    }),
    Mi = ln("ADD_HISTORY_EVENTS", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        const i = a();
        if (!si(i, t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        n.forEach(e => {
            if (ri(i, t, e.id)) throw new Error('There is already an event with "' + e.id + '" ID in this chat ("' + t + '"). It has to be unique.');
            if (!pi(i, e.author)) throw new Error('Specified author ("' + e.author + "\") doesn't exist. You should add it first.")
        });
        const o = fi(i);
        r({
            chat: t,
            events: n.map(e => Ba({ ...e,
                serverId: e.id,
                own: e.author === o
            }))
        })
    }),
    Oi = ln("ADD_PARTICIPANT", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!si(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!pi(a(), n)) throw new Error('Given user ("' + n + "\") doesn't exist. You should add it first.");
        return r({
            chat: t,
            user: n
        }), ki(a(), t)
    }),
    Ri = ln("ADD_USER", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        const {
            id: a
        } = t;
        if (pi(r(), a)) throw new Error('There is already a user with "' + a + '" ID. It has to be unique.');
        return n({
            id: a,
            user: qa(t)
        }), di(r(), a)
    }),
    ji = ln("FLUSH_CHAT", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        if (!si(r(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return n({
            id: t
        }), oi(r(), t)
    }),
    $i = ln("RECALCULATE_TIMELINE", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        if (!si(r(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return n({
            id: t
        }), hi(r(), t)
    }),
    Bi = ln("REMOVE_PARTICIPANT", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!si(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!pi(a(), n)) throw new Error('Given user ("' + n + "\") doesn't exist. You should add it first.");
        return r({
            chat: t,
            user: n
        }), ki(a(), t)
    }),
    qi = ln("SEND_EVENT", (e, t, n, r) => {
        let {
            action: a,
            getState: i
        } = e;
        if (!si(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (ri(i(), t, n.id)) throw new Error('There is already an event with "' + n.id + '" ID in this chat ("' + t + '"). It has to be unique.');
        const o = n.id || Se(ai(i(), t));
        return a({
            id: o,
            chat: t,
            event: Ba({ ...n,
                author: ui(i()).id,
                own: !0,
                id: o,
                timestamp: Date.now(),
                delivered: !1
            })
        }, r), ti(i(), t, o)
    }),
    Ui = ln("SET_APPLICATION_STATE", (e, t) => {
        let {
            action: n,
            getApplicationState: r
        } = e;
        if (!t || Te(t)) throw new Error("Given data object is empty.");
        return n(t), r()
    }),
    Li = ln("UPDATE_FEATURE", (e, t, n) => {
        let {
            action: r,
            getApplicationState: a
        } = e;
        if (!n || !t || Te(n)) throw new Error("Given data object is empty.");
        return r({
            feature: t,
            data: n
        }), a()
    }),
    Ni = ln("SET_CONNECTION_STATE", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        return n({
            connectionState: t
        }), Xa(r())
    }),
    Vi = ln("SET_CHAT_SERVER_ID", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!si(a(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (null !== oi(a(), t).serverId) throw new Error('Chat with "' + t + '" ID has already serverId.');
        return r({
            id: t,
            serverId: n
        }), oi(a(), t)
    }),
    Hi = ln("CLEAR_CHAT_SERVER_ID", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        if (!si(r(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return n({
            id: t
        }), oi(r(), t)
    }),
    Zi = ln("SET_EVENT_DATA", (e, t, n, r) => {
        let {
            action: a,
            getState: i
        } = e;
        if (!si(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!ri(i(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
        return Si(["id", "type", "own"], r), a({
            chat: t,
            id: n,
            data: { ...Ue(Ii.concat("author", "serverId", "timestamp"), r),
                own: r.author === fi(i())
            }
        }), ti(i(), t, n)
    }),
    Gi = ln("SET_EVENT_SERVER_ID", (e, t, n, r) => {
        let {
            action: a,
            getState: i
        } = e;
        if (!si(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!ri(i(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
        if (null !== ti(i(), t, n).serverId) throw new Error('Event with "' + n + '" ID has already serverId.');
        return a({
            chat: t,
            id: n,
            serverId: r
        }), ti(i(), t, n)
    }),
    Yi = ln("SET_LOCALIZATION", (e, t) => {
        let {
            action: n
        } = e;
        n(t)
    }),
    Wi = ln("SET_USER_SERVER_ID", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!pi(a(), t)) throw new Error('There is no "' + t + '" user. You should add it first.');
        if (null !== di(a(), t).serverId) throw new Error('User with "' + t + '" ID has already serverId.');
        return r({
            id: t,
            serverId: n
        }), di(a(), t)
    }),
    Qi = ln("CLEAR_USER_SERVER_ID", (e, t) => {
        let {
            action: n,
            getState: r
        } = e;
        if (!pi(r(), t)) throw new Error('There is no "' + t + '" user. You should add it first.');
        return n({
            id: t
        }), di(r(), t)
    }),
    {
        actionMethod: Ji,
        requestActionMethod: Xi
    } = cn("SET_USER_PROPERTIES", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!pi(a(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
        return r({
            id: t,
            properties: n
        }), di(a(), t)
    }),
    {
        actionMethod: Ki,
        requestActionMethod: eo
    } = cn("UPDATE_CHAT", (e, t, n, r) => {
        let {
            action: a,
            getState: i
        } = e;
        if (!si(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        return Si(["id", "participants", "events"], n), a({
            id: t,
            data: Ue(["active", "properties"], n)
        }, r), oi(i(), t)
    }),
    {
        actionMethod: to,
        requestActionMethod: no
    } = cn("UPDATE_EVENT", (e, t, n, r) => {
        let {
            action: a,
            getState: i
        } = e;
        if (!si(i(), t)) throw new Error('There is no chat with "' + t + '" ID. You should add it first.');
        if (!ri(i(), t, n)) throw new Error('There is no "' + n + '" event in "' + t + '" chat. You should add it first.');
        return Si(["id", "type", "author", "own", "timestamp"], r), a({
            chat: t,
            id: n,
            data: Ue(Ii, r)
        }), ti(i(), t, n)
    }),
    {
        actionMethod: ro,
        requestActionMethod: ao
    } = cn("UPDATE_USER", (e, t, n) => {
        let {
            action: r,
            getState: a
        } = e;
        if (!pi(a(), t)) throw new Error('There is no user with "' + t + '" ID. You should add it first.');
        return Si(["id", "type"], n), r({
            id: t,
            data: Ue(["name", "email", "avatar", "properties"], n)
        }), di(a(), t)
    }),
    io = Object.freeze(Object.defineProperty({
        __proto__: null,
        addChat: Di,
        addEvent: Fi,
        addHistoryEvents: Mi,
        addParticipant: Oi,
        addUser: Ri,
        addView: Ei,
        clearChatServerId: Hi,
        clearUserServerId: Qi,
        flushChat: ji,
        recalculateTimeline: $i,
        removeEvent: Pi,
        removeParticipant: Bi,
        requestSetUserProperties: Xi,
        requestUpdateChat: eo,
        requestUpdateEvent: no,
        requestUpdateUser: ao,
        sendEvent: qi,
        setApplicationState: Ui,
        setChatServerId: Vi,
        setConnectionState: Ni,
        setCurrentView: Ai,
        setDefaultView: zi,
        setEventData: Zi,
        setEventServerId: Gi,
        setLocalization: Yi,
        setUserProperties: Ji,
        setUserServerId: Wi,
        updateChat: Ki,
        updateEvent: to,
        updateFeature: Li,
        updateUser: ro,
        updateView: Ti
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function oo() {}

function so() {}
so.resetWarningCache = oo;
! function() {
    function e(e, t, n, r, a, i) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
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
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: so,
        resetWarningCache: oo
    };
    n.PropTypes = n
}();
var lo = function(e) {
        e()
    },
    co = function() {
        return lo
    },
    uo = {
        exports: {}
    },
    po = {};
/** @license React v16.7.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(po, "__esModule", {
    value: !0
});
var ho = "function" == typeof Symbol && Symbol.for,
    fo = ho ? Symbol.for("react.element") : 60103,
    go = ho ? Symbol.for("react.portal") : 60106,
    mo = ho ? Symbol.for("react.fragment") : 60107,
    _o = ho ? Symbol.for("react.strict_mode") : 60108,
    bo = ho ? Symbol.for("react.profiler") : 60114,
    vo = ho ? Symbol.for("react.provider") : 60109,
    yo = ho ? Symbol.for("react.context") : 60110,
    wo = ho ? Symbol.for("react.async_mode") : 60111,
    ko = ho ? Symbol.for("react.concurrent_mode") : 60111,
    xo = ho ? Symbol.for("react.forward_ref") : 60112,
    Co = ho ? Symbol.for("react.suspense") : 60113,
    Io = ho ? Symbol.for("react.memo") : 60115,
    So = ho ? Symbol.for("react.lazy") : 60116;

function Eo(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case fo:
                switch (e = e.type) {
                    case wo:
                    case ko:
                    case mo:
                    case bo:
                    case _o:
                    case Co:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case yo:
                            case xo:
                            case vo:
                                return e;
                            default:
                                return t
                        }
                }
            case So:
            case Io:
            case go:
                return t
        }
    }
}

function Ao(e) {
    return Eo(e) === ko
}
po.typeOf = Eo, po.AsyncMode = wo, po.ConcurrentMode = ko, po.ContextConsumer = yo, po.ContextProvider = vo, po.Element = fo, po.ForwardRef = xo, po.Fragment = mo, po.Lazy = So, po.Memo = Io, po.Portal = go, po.Profiler = bo, po.StrictMode = _o, po.Suspense = Co, po.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === mo || e === ko || e === bo || e === _o || e === Co || "object" == typeof e && null !== e && (e.$$typeof === So || e.$$typeof === Io || e.$$typeof === vo || e.$$typeof === yo || e.$$typeof === xo)
}, po.isAsyncMode = function(e) {
    return Ao(e) || Eo(e) === wo
}, po.isConcurrentMode = Ao, po.isContextConsumer = function(e) {
    return Eo(e) === yo
}, po.isContextProvider = function(e) {
    return Eo(e) === vo
}, po.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === fo
}, po.isForwardRef = function(e) {
    return Eo(e) === xo
}, po.isFragment = function(e) {
    return Eo(e) === mo
}, po.isLazy = function(e) {
    return Eo(e) === So
}, po.isMemo = function(e) {
    return Eo(e) === Io
}, po.isPortal = function(e) {
    return Eo(e) === go
}, po.isProfiler = function(e) {
    return Eo(e) === bo
}, po.isStrictMode = function(e) {
    return Eo(e) === _o
}, po.isSuspense = function(e) {
    return Eo(e) === Co
}, uo.exports = po;
var To = uo.exports,
    zo = {};
zo[To.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, zo[To.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
};
var Do, Fo = {},
    Po = "function" == typeof Symbol && Symbol.for,
    Mo = Po ? Symbol.for("react.element") : 60103,
    Oo = Po ? Symbol.for("react.portal") : 60106,
    Ro = Po ? Symbol.for("react.fragment") : 60107,
    jo = Po ? Symbol.for("react.strict_mode") : 60108,
    $o = Po ? Symbol.for("react.profiler") : 60114,
    Bo = Po ? Symbol.for("react.provider") : 60109,
    qo = Po ? Symbol.for("react.context") : 60110,
    Uo = Po ? Symbol.for("react.async_mode") : 60111,
    Lo = Po ? Symbol.for("react.concurrent_mode") : 60111,
    No = Po ? Symbol.for("react.forward_ref") : 60112,
    Vo = Po ? Symbol.for("react.suspense") : 60113,
    Ho = Po ? Symbol.for("react.suspense_list") : 60120,
    Zo = Po ? Symbol.for("react.memo") : 60115,
    Go = Po ? Symbol.for("react.lazy") : 60116,
    Yo = Po ? Symbol.for("react.block") : 60121,
    Wo = Po ? Symbol.for("react.fundamental") : 60117,
    Qo = Po ? Symbol.for("react.responder") : 60118,
    Jo = Po ? Symbol.for("react.scope") : 60119;
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Xo(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case Mo:
                switch (e = e.type) {
                    case Uo:
                    case Lo:
                    case Ro:
                    case $o:
                    case jo:
                    case Vo:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case qo:
                            case No:
                            case Go:
                            case Zo:
                            case Bo:
                                return e;
                            default:
                                return t
                        }
                }
            case Oo:
                return t
        }
    }
}

function Ko(e) {
    return Xo(e) === Lo
}
Fo.AsyncMode = Uo, Fo.ConcurrentMode = Lo, Fo.ContextConsumer = qo, Fo.ContextProvider = Bo, Fo.Element = Mo, Fo.ForwardRef = No, Fo.Fragment = Ro, Fo.Lazy = Go, Fo.Memo = Zo, Fo.Portal = Oo, Fo.Profiler = $o, Fo.StrictMode = jo, Fo.Suspense = Vo, Fo.isAsyncMode = function(e) {
    return Ko(e) || Xo(e) === Uo
}, Fo.isConcurrentMode = Ko, Fo.isContextConsumer = function(e) {
    return Xo(e) === qo
}, Fo.isContextProvider = function(e) {
    return Xo(e) === Bo
}, Fo.isElement = function(e) {
    return "object" == typeof e && null !== e && e.$$typeof === Mo
}, Fo.isForwardRef = function(e) {
    return Xo(e) === No
}, Fo.isFragment = function(e) {
    return Xo(e) === Ro
}, Fo.isLazy = function(e) {
    return Xo(e) === Go
}, Fo.isMemo = function(e) {
    return Xo(e) === Zo
}, Fo.isPortal = function(e) {
    return Xo(e) === Oo
}, Fo.isProfiler = function(e) {
    return Xo(e) === $o
}, Fo.isStrictMode = function(e) {
    return Xo(e) === jo
}, Fo.isSuspense = function(e) {
    return Xo(e) === Vo
}, Fo.isValidElementType = function(e) {
    return "string" == typeof e || "function" == typeof e || e === Ro || e === Lo || e === $o || e === jo || e === Vo || e === Ho || "object" == typeof e && null !== e && (e.$$typeof === Go || e.$$typeof === Zo || e.$$typeof === Bo || e.$$typeof === qo || e.$$typeof === No || e.$$typeof === Wo || e.$$typeof === Qo || e.$$typeof === Jo || e.$$typeof === Yo)
}, Fo.typeOf = Xo, Do = l.unstable_batchedUpdates, lo = Do;
const es = "connected",
    ts = "disconnected",
    ns = "fakely_connected",
    rs = "reconnecting",
    as = "scheduled_reconnecting",
    is = "liveChatChatId",
    os = "openAIChatId",
    ss = "email_prompt",
    ls = "message_draft",
    cs = 100,
    us = 20,
    ds = "Invalid `chat.id`",
    ps = "Move chat to mobile",
    hs = {
        labs: "https://mobile-chat.labs.livechat.com/chat-widget-moment/",
        staging: "https://mobile-chat.staging.livechat.com/chat-widget-moment/",
        production: "https://mobile-chat.livechat.com/chat-widget-moment/"
    },
    fs = 1500,
    gs = 100,
    ms = "before_send_message",
    _s = /^\s+$/,
    bs = /^(?:\s+|[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/;

function vs(e) {
    let t = null,
        n = 0;
    for (; t = bs.exec(e);) {
        const r = t[0];
        if (e = e.slice(r.length), _s.test(r) || n++, n > 3) return !1
    }
    return !e
}
const ys = ["xS94WbAZR", "pJw7AxJZg"],
    ws = ["DfltarqcrRoA5ZoZ", "UsDoxZQESkzF0qds"];

function ks(e) {
    return ys.includes(e)
}

function xs(e) {
    return ws.includes(e)
}
const Cs = j ? 1 : 3,
    Is = "not_ready",
    Ss = "ready",
    Es = "bootstrapped",
    As = 19196658,
    Ts = () => "feade1d6c3f17748ae4c8d917a1e1068",
    zs = () => "bb9e5b2f1ab480e4a715977b7b1b4279",
    Ds = {
        whatsapp: "ee631a7ff555f8b6e354705201860c81",
        messenger: "0e655920289dbafb0376a0f4491372d9",
        apple: "22cc83ef7905d174b6a0eccb9ce404c0",
        telegram: "b0c559436b7d82f29d971faab4c6c2aa",
        twilio: "f14e86a88bd213b7b3717c9f76e5e823",
        instagram: "506038b7a51013790f6c159967b562ae"
    },
    Fs = () => Ds,
    Ps = ["America/", "Europe/"],
    Ms = () => Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("America/"),
    Os = "chatbotChatId",
    Rs = "chatbot-agent",
    js = 18e5,
    $s = j ? 100 : 1e3,
    Bs = ["failed", "cancelled", "expired"],
    qs = "openai_bot",
    Us = "https://cdn.files-text.com/api/ow/img/integrations/openai/orb.gif",
    Ls = 6,
    Ns = {
        id: "textapp_rating_postchat",
        type: "postchat",
        fields: [{
            name: "rating",
            defaultValue: ""
        }, {
            name: "rateComment",
            defaultValue: ""
        }]
    },
    Vs = ["client_inactive", "operator_closed_session", "chat_closed_by_customer", "chat_session_closed"],
    Hs = ["rate_me_confirmation_good", "rate_me_confirmation_bad", "rate_me_comment_added"];

function Zs() {
    return (Zs = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function Gs(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ys(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function Ws(e) {
    return (Ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function Qs(e, t) {
    return (Qs = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function Js() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function Xs(e, t, n) {
    return (Xs = Js() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var a = new(Function.bind.apply(e, r));
        return n && Qs(a, n.prototype), a
    }).apply(null, arguments)
}

function Ks(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (Ks = function(e) {
        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
        var n;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
        }

        function r() {
            return Xs(e, arguments, Ws(this).constructor)
        }
        return r.prototype = Object.create(e.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Qs(r, e)
    })(e)
}
var el = function(e) {
    function t(t) {
        return Gs(e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + t + " for more information.") || this)
    }
    return Ys(t, e), t
}(Ks(Error));

function tl(e) {
    return Math.round(255 * e)
}

function nl(e, t, n) {
    return tl(e) + "," + tl(t) + "," + tl(n)
}

function rl(e, t, n, r) {
    if (void 0 === r && (r = nl), 0 === t) return r(n, n, n);
    var a = (e % 360 + 360) % 360 / 60,
        i = (1 - Math.abs(2 * n - 1)) * t,
        o = i * (1 - Math.abs(a % 2 - 1)),
        s = 0,
        l = 0,
        c = 0;
    a >= 0 && a < 1 ? (s = i, l = o) : a >= 1 && a < 2 ? (s = o, l = i) : a >= 2 && a < 3 ? (l = i, c = o) : a >= 3 && a < 4 ? (l = o, c = i) : a >= 4 && a < 5 ? (s = o, c = i) : a >= 5 && a < 6 && (s = i, c = o);
    var u = n - i / 2;
    return r(s + u, l + u, c + u)
}
var al = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
var il = /^#[a-fA-F0-9]{6}$/,
    ol = /^#[a-fA-F0-9]{8}$/,
    sl = /^#[a-fA-F0-9]{3}$/,
    ll = /^#[a-fA-F0-9]{4}$/,
    cl = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    ul = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    dl = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/i,
    pl = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function hl(e) {
    if ("string" != typeof e) throw new el(3);
    var t = function(e) {
        if ("string" != typeof e) return e;
        var t = e.toLowerCase();
        return al[t] ? "#" + al[t] : e
    }(e);
    if (t.match(il)) return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16)
    };
    if (t.match(ol)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: n
        }
    }
    if (t.match(sl)) return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16)
    };
    if (t.match(ll)) {
        var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: r
        }
    }
    var a = cl.exec(t);
    if (a) return {
        red: parseInt("" + a[1], 10),
        green: parseInt("" + a[2], 10),
        blue: parseInt("" + a[3], 10)
    };
    var i = ul.exec(t);
    if (i) return {
        red: parseInt("" + i[1], 10),
        green: parseInt("" + i[2], 10),
        blue: parseInt("" + i[3], 10),
        alpha: parseFloat("" + i[4])
    };
    var o = dl.exec(t);
    if (o) {
        var s = "rgb(" + rl(parseInt("" + o[1], 10), parseInt("" + o[2], 10) / 100, parseInt("" + o[3], 10) / 100) + ")",
            l = cl.exec(s);
        if (!l) throw new el(4, t, s);
        return {
            red: parseInt("" + l[1], 10),
            green: parseInt("" + l[2], 10),
            blue: parseInt("" + l[3], 10)
        }
    }
    var c = pl.exec(t);
    if (c) {
        var u = "rgb(" + rl(parseInt("" + c[1], 10), parseInt("" + c[2], 10) / 100, parseInt("" + c[3], 10) / 100) + ")",
            d = cl.exec(u);
        if (!d) throw new el(4, t, u);
        return {
            red: parseInt("" + d[1], 10),
            green: parseInt("" + d[2], 10),
            blue: parseInt("" + d[3], 10),
            alpha: parseFloat("" + c[4])
        }
    }
    throw new el(5)
}

function fl(e) {
    return function(e) {
        var t, n = e.red / 255,
            r = e.green / 255,
            a = e.blue / 255,
            i = Math.max(n, r, a),
            o = Math.min(n, r, a),
            s = (i + o) / 2;
        if (i === o) return void 0 !== e.alpha ? {
            hue: 0,
            saturation: 0,
            lightness: s,
            alpha: e.alpha
        } : {
            hue: 0,
            saturation: 0,
            lightness: s
        };
        var l = i - o,
            c = s > .5 ? l / (2 - i - o) : l / (i + o);
        switch (i) {
            case n:
                t = (r - a) / l + (r < a ? 6 : 0);
                break;
            case r:
                t = (a - n) / l + 2;
                break;
            default:
                t = (n - r) / l + 4
        }
        return t *= 60, void 0 !== e.alpha ? {
            hue: t,
            saturation: c,
            lightness: s,
            alpha: e.alpha
        } : {
            hue: t,
            saturation: c,
            lightness: s
        }
    }(hl(e))
}
var gl = function(e) {
    return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e
};

function ml(e) {
    var t = e.toString(16);
    return 1 === t.length ? "0" + t : t
}

function _l(e) {
    return ml(Math.round(255 * e))
}

function bl(e, t, n) {
    return gl("#" + _l(e) + _l(t) + _l(n))
}

function vl(e, t, n) {
    return rl(e, t, n, bl)
}

function yl(e, t, n) {
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return gl("#" + ml(e) + ml(t) + ml(n));
    if ("object" == typeof e && void 0 === t && void 0 === n) return gl("#" + ml(e.red) + ml(e.green) + ml(e.blue));
    throw new el(6)
}

function wl(e, t, n, r) {
    if ("string" == typeof e && "number" == typeof t) {
        var a = hl(e);
        return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")"
    }
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r) return "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r) return e.alpha >= 1 ? yl(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
    throw new el(7)
}

function kl(e) {
    if ("object" != typeof e) throw new el(8);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && "number" == typeof e.alpha
        }(e)) return wl(e);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return yl(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && "number" == typeof e.alpha
        }(e)) return function(e, t, n, r) {
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r) return "rgba(" + rl(e, t, n) + "," + r + ")";
        if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r) return e.alpha >= 1 ? vl(e.hue, e.saturation, e.lightness) : "rgba(" + rl(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
        throw new el(2)
    }(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return function(e, t, n) {
        if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return vl(e, t, n);
        if ("object" == typeof e && void 0 === t && void 0 === n) return vl(e.hue, e.saturation, e.lightness);
        throw new el(1)
    }(e);
    throw new el(8)
}

function xl(e) {
    return function e(t, n, r) {
        return function() {
            var a = r.concat(Array.prototype.slice.call(arguments));
            return a.length >= n ? t.apply(this, a) : e(t, n, a)
        }
    }(e, e.length, [])
}

function Cl(e, t) {
    if ("transparent" === t) return t;
    var n = fl(t);
    return kl(Zs({}, n, {
        hue: n.hue + parseFloat(e)
    }))
}
var Il = xl(Cl);

function Sl(e, t, n) {
    return Math.max(e, Math.min(t, n))
}

function El(e, t) {
    if ("transparent" === t) return t;
    var n = fl(t);
    return kl(Zs({}, n, {
        lightness: Sl(0, 1, n.lightness - parseFloat(e))
    }))
}
var Al = xl(El);

function Tl(e, t) {
    if ("transparent" === t) return t;
    var n = fl(t);
    return kl(Zs({}, n, {
        saturation: Sl(0, 1, n.saturation - parseFloat(e))
    }))
}
var zl = xl(Tl);

function Dl(e) {
    if ("transparent" === e) return 0;
    var t = hl(e),
        n = Object.keys(t).map((function(e) {
            var n = t[e] / 255;
            return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        })),
        r = n[0],
        a = n[1],
        i = n[2];
    return parseFloat((.2126 * r + .7152 * a + .0722 * i).toFixed(3))
}

function Fl(e, t) {
    var n = Dl(e),
        r = Dl(t);
    return parseFloat((n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)).toFixed(2))
}

function Pl(e, t) {
    if ("transparent" === t) return t;
    var n = fl(t);
    return kl(Zs({}, n, {
        lightness: Sl(0, 1, n.lightness + parseFloat(e))
    }))
}
var Ml = xl(Pl);

function Ol(e, t, n) {
    if ("transparent" === t) return n;
    if ("transparent" === n) return t;
    var r = hl(t),
        a = Zs({}, r, {
            alpha: "number" == typeof r.alpha ? r.alpha : 1
        }),
        i = hl(n),
        o = Zs({}, i, {
            alpha: "number" == typeof i.alpha ? i.alpha : 1
        }),
        s = a.alpha - o.alpha,
        l = 2 * parseFloat(e) - 1,
        c = ((l * s == -1 ? l : l + s) / (1 + l * s) + 1) / 2,
        u = 1 - c;
    return wl({
        red: Math.floor(a.red * c + o.red * u),
        green: Math.floor(a.green * c + o.green * u),
        blue: Math.floor(a.blue * c + o.blue * u),
        alpha: a.alpha + (o.alpha - a.alpha) * (parseFloat(e) / 1)
    })
}
var Rl = xl(Ol);

function jl(e, t) {
    return "transparent" === t ? t : Rl(parseFloat(e), "rgb(0, 0, 0)", t)
}
var $l = xl(jl);

function Bl(e, t) {
    return "transparent" === t ? t : Rl(parseFloat(e), "rgb(255, 255, 255)", t)
}
var ql = xl(Bl);

function Ul(e, t) {
    if ("transparent" === t) return t;
    var n = hl(t);
    return wl(Zs({}, n, {
        alpha: Sl(0, 1, (100 * ("number" == typeof n.alpha ? n.alpha : 1) - 100 * parseFloat(e)) / 100)
    }))
}
var Ll = xl(Ul);

function Nl(e) {
    return void 0 === e && (e = -1),
        function(t) {
            return function(n, r) {
                if (0 === n) {
                    var a, i = !1,
                        o = e,
                        s = function(e, t) {
                            a(e, t)
                        };
                    ! function e() {
                        t(0, (function(t, n) {
                            return 0 === t ? (a = n, i ? void s(1) : (i = !0, void r(0, s))) : 2 === t && n && 0 !== o ? (o--, void e()) : void r(t, n)
                        }))
                    }()
                }
            }
        }
}

function Vl() {
    const e = se();
    return [e, () => {
        const t = new Error("Destroyed.");
        t.code = "DESTROYED", e(2, t)
    }]
}
const Hl = Ie();
let Zl = 0;
const Gl = e => {
    const t = document.createElement("a");
    if (t.href = e, t.origin) return "null" === t.origin ? "*" : t.origin;
    const n = t.protocol.length > 4 ? t.protocol : window.location.protocol;
    let r;
    return r = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host, n + "//" + r
};

function Yl(e, t) {
    let {
        frame: n,
        targetOrigin: r = Gl(n.src),
        handshakeRetry: a = {}
    } = e;
    void 0 === t && (t = {});
    const [i, o] = c(t), [s, l] = Vl(), A = Zl++, T = n.contentWindow, z = u(), D = (e, t) => I(Hl, A, e, t), F = e => {
        T.postMessage(e, r)
    }, P = d(h(), p(e => e.owner === Hl && e.instance === A), ce(s), f), M = g(z, P, D, F), O = d(b(P, F, D(E, o), null), _(a.interval || 500), Nl(a.count || 5), m(1), v(e => y in e ? d(b(P, F, D(S)), k(() => e.data)) : w(() => e)), ce(s), f), R = x(M, z.emit, F, i);
    return d(O, v(() => P), C(R)), {
        api: M,
        destroy: l,
        handshake$: O
    }
}

function Wl() {
    return new Promise(e => {
        const t = () => {
            document.body ? e(document.body) : setTimeout(t, 100)
        };
        t()
    })
}

function Ql(e) {
    const {
        parentNode: t
    } = e;
    t && t.removeChild(e)
}
const Jl = (e, t) => {
    const n = document.createElement("iframe");
    return e.appendChild(n), n.src = t, n
};

function Xl(e, t) {
    let {
        onConnected: n,
        ...r
    } = e;
    const a = !r.frame,
        i = (e => {
            if (e.frame) return e.frame;
            const {
                container: t,
                url: n
            } = e;
            return Jl(t, n)
        })(r),
        [o, s] = Vl();
    let l;
    const c = () => {
        a && Ql(i), l ? l.destroy() : s()
    };
    return d(T(i, "load"), v(() => N((e, n) => {
        let a = function(e, t) {
            const {
                api: n,
                destroy: r,
                handshake$: a
            } = Yl(e, t);
            return {
                destroy: r,
                promise: d(a, k(e => (n.data = e, n.destroy = r, n)), A)
            }
        }({ ...r,
            frame: i
        }, t);
        return a.promise.then(e, n), l = a, a.destroy
    })), Nl(), ce(o), C(e => {
        e.destroy = c, e.frame = i, n(e)
    })), {
        destroy: c,
        frame: i
    }
}

function Kl() {
    return (Kl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var ec = ["allow-forms", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "function" == typeof document.hasStorageAccess && "allow-storage-access-by-user-activation"].filter(Boolean).join(" "),
    tc = ["all", "agents"],
    nc = function(e) {
        return "number" != typeof e || Number.isNaN(e) ? e : "" + e
    },
    rc = function(e, t, n) {
        if (!t.length || t.length > n) throw new Error(e + " can not be empty and can only be " + n + " characters long.")
    },
    ac = function(e) {
        if ("string" != typeof(e = nc(e))) throw new Error("`text` must be a string or a number.");
        e = e.trim(), rc("`text`", e, 1024)
    },
    ic = function(e, t) {
        return new Error('Attribute with key "' + e + '" is invalid. ' + t)
    },
    oc = o,
    sc = Object.freeze({
        sendMessage: function(e) {
            var t = e.text,
                n = e.postback;
            if (ac(t), void 0 !== n) {
                if ("string" != typeof n) throw new Error("`postback` must be a string.");
                rc("`postback`", n, 1024)
            }
        },
        sendSystemMessage: function(e) {
            var t = e.text,
                n = e.recipients;
            if (ac(t), void 0 !== n && -1 === tc.indexOf(n)) throw new Error("`recipients` can only be one of: " + tc + ".")
        },
        setAttributes: function(e) {
            if (!e || "object" != typeof e) throw new Error("`attributes` must be a plain object (with shape such as `{ key: 'value' }`).");
            var t = Object.keys(e);
            if (t.length > 99) throw new Error("The maximum number of attributes is 99.");
            t.forEach((function(t) {
                var n = nc(e[t]);
                if (t = nc(t), !/^[\w-]{1,128}$/.test(t)) throw ic(t, "Key must be between 1-128 characters long and can only contain alpha-numeric, underscore and dash characters.");
                if ("string" != typeof n) throw ic(t, "Value must be a string or a number.");
                rc("Value", n, 1024)
            }))
        },
        setExternalLink: function(e) {
            if ("string" == typeof e) {
                if (!/^https:\/\//.test(e)) throw new Error("`externalLink` has to be a HTTPS URL.")
            } else if (null !== e) throw new Error("`externalLink` has to be a string or null.")
        },
        setIsFragile: function(e) {
            if ("boolean" != typeof e) throw new Error("`setIsFragile` argument value can not be empty and must be a boolean.")
        },
        getIdentityTransferToken: function() {},
        updateCustomerData: function(e) {
            if (!e) throw new Error("`updateUserData` arguments values can not be empty.");
            if (e.email && "string" != typeof e.email) throw new Error("`updateUserData` argument `email` has to be a string.");
            if (e.name && "string" != typeof e.name) throw new Error("`updateUserData` argument `name` has to be a string.")
        },
        close: oc,
        setTitle: function(e) {
            if ("string" != typeof e) throw new Error("`setTitle` argument value has to be a string.");
            rc("`title`", e, 1024)
        }
    }),
    lc = function(e) {
        var t = P(e);
        if (!/chatbot\.com$/.test(t)) return e;
        var n = $(B(M(e)));
        if (!n.p) return e;
        try {
            var r = JSON.parse(atob(n.p));
            return r.url ? decodeURIComponent(r.url) : e
        } catch (a) {
            return e
        }
    };

function cc(e, t) {
    var n, r = lc(e.url),
        a = z((function(e) {
            return "function" == typeof e
        }), t),
        i = a[0],
        o = a[1],
        s = Pe((function(e, t) {
            return function() {
                return sc[t].apply(sc, arguments), e.apply(void 0, arguments)
            }
        }), i),
        l = Xl(Kl({}, e, {
            targetOrigin: "*"
        }), Kl({}, o, s, {
            supportedMethods: Object.keys(s)
        })),
        c = l.destroy,
        u = l.frame;
    return u.sandbox = ec, {
        destroy: c,
        frame: u,
        title: (n = r, tt("moment-title", n) || et(n))
    }
}
var uc = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "llc", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "merckmsd", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "sport", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", "セール", "佛山", "ಭಾರತ", "慈善", "集团", "在线", "한국", "ଭାରତ", "大众汽车", "点看", "คอม", "ভাৰত", "ভারত", "八卦", "موقع", "বাংলা", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "қаз", "католик", "онлайн", "сайт", "联通", "срб", "бг", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "電訊盈科", "购物", "クラウド", "ભારત", "通販", "भारतम्", "भारत", "भारोत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "العليان", "اتصالات", "امارات", "بازار", "پاکستان", "الاردن", "موبايلي", "بارت", "بھارت", "المغرب", "ابوظبي", "السعودية", "ڀارت", "كاثوليك", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "عرب", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "招聘", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ελ", "世界", "書籍", "ഭാരതം", "ਭਾਰਤ", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"];
const dc = t(uc),
    pc = e => {
        const t = document.createElement("textarea");
        t.value = e, t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
    },
    hc = e => {
        navigator.clipboard ? navigator.clipboard.writeText(e).catch(pc) : pc(e)
    },
    fc = e => {
        var t, n;
        const r = "feade1d6c3f17748ae4c8d917a1e1068",
            a = Boolean(null == (t = e.properties.group[r]) ? void 0 : t.forwardTicketFormToHelpdesk),
            i = !!e.__unsafeProperties.license && e.__unsafeProperties.license.licenseinboundForwardingToHelpdeskEnabled,
            o = null == (n = e.properties.license[r]) ? void 0 : n.hdLicenseID;
        return "number" == typeof o && o > -1 && (a || i) ? "helpdesk" : e.__unsafeProperties.group.offlineMessagesEnabled ? "offline_message" : "livechat"
    },
    gc = (e, t) => e().then(e => fetch("https://api.helpdesk.com/v1/externalTickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + e.accessToken
        },
        body: JSON.stringify(t)
    }).then(e => e.ok ? e.json() : Promise.reject()).then(e => {
        let {
            ID: t
        } = e;
        return {
            id: t
        }
    })),
    mc = j ? 100 : 600,
    _c = 300,
    bc = j ? 300 : 5e3,
    vc = 304,
    yc = 338,
    wc = 321,
    kc = Object.freeze(Object.defineProperty({
        __proto__: null,
        def: "6px",
        lg: "8px",
        md: "6px",
        none: "0px",
        round: "50%",
        sm: "4px",
        xl: "12px",
        xs: "2px",
        xxl: "16px",
        xxxl: "24px",
        xxxxl: "32px"
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xc = {
        25: "#EDDDBF",
        50: "#FFFAE5",
        100: "#F7C56E",
        500: "#FFD000",
        700: "#7B664C",
        800: "#3A352C"
    },
    Cc = {
        100: "#FF7C6B",
        500: "#D93311"
    },
    Ic = {
        100: "#77Cf9D",
        500: "#268750"
    },
    Sc = {
        100: "#FA6681",
        500: "#E30D34"
    },
    Ec = "#2000F0",
    Ac = {
        0: "#FFFFFF",
        15: "#F6F6F7",
        25: "#F0F0F0",
        50: "#F8F8F8",
        75: "#EDEDED",
        100: "#E3E3E3",
        200: "#D5D5D5",
        300: "#C0C0C0",
        400: "#B3B3B3",
        425: "#A6A4A4",
        450: "#949494",
        500: "#757575",
        525: "#707070",
        550: "#6E6E6E",
        600: "#575757",
        625: "#474747",
        650: "#333333",
        700: "#2E2E2E",
        800: "#252525",
        900: "#111111"
    },
    Tc = Object.freeze(Object.defineProperty({
        __proto__: null,
        accent: "#2000F0",
        brand: {
            orange: "#FF5100",
            black: "#1B1B20"
        },
        grayscale: Ac,
        green: Ic,
        red: Cc,
        ruby: Sc,
        webkitOutline: "#3B99FC",
        yellow: xc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zc = { ...Tc,
        border: Ac[500],
        borderSubtle: Ac[100],
        divider: Ac[100],
        error: Cc[500],
        errorContrast: Ac[0],
        errorSurface: "#FFFAFA",
        subtleFeedback: xc[50],
        subtleFeedbackContrast: Ac[900],
        caution: "#FFAE21",
        cautionDimmed: "#FFF3D6",
        cautionContrast: Ac[900],
        cautionDesaturated: xc[25],
        success: Ic[500],
        successContrast: Ac[0],
        successSurface: Ac[0],
        primaryTextColor: Ac[900],
        secondaryTextColor: Ac[550],
        tertiaryTextColor: Ac[400],
        surface: Ac[0],
        surfaceVariant: Ac[25],
        surfaceVariantHover: "#E6E6E6",
        surfaceInteractive: Ac[50],
        surfaceInteractivePressed: Ac[600],
        surfaceDecorative: Ac[100],
        surfaceDimmed: "#E6E4E1",
        surfaceFade: Ac[15],
        hintSurface: Ac[800],
        floatSurface: Ac[0],
        pressedElement: Ac[300],
        notification: Sc[500],
        notificationContrast: Ac[0],
        widgetBackground: Ac[50],
        disabled: Ac[100],
        disabledContrast: Ac[600],
        inactiveElement: Ac[450],
        formIconColor: Ac[50],
        trademarkFooterText: Ac[600],
        itemHover: Ac[625],
        successHover: "#2FA763",
        inactiveElementHover: Ac[425],
        secondaryButtonBackground: Ac[100],
        secondaryButtonBackgroundHover: Ac[200],
        primaryTimelineSurface: Ac[0],
        decorations: {
            decorOne: "#FFDAB9",
            decorTwo: "#D9CCFA",
            decorThree: "#FACCCC",
            decorFour: "#F4F791",
            decorFive: "#F1C9FC"
        }
    },
    Dc = { ...Tc,
        border: Ac[600],
        borderSubtle: Ac[650],
        divider: Ac[700],
        error: Cc[100],
        errorContrast: Ac[900],
        errorSurface: "#570404",
        subtleFeedback: xc[800],
        subtleFeedbackContrast: xc[100],
        caution: xc[100],
        cautionDimmed: "#322B24",
        cautionContrast: Ac[900],
        cautionDesaturated: xc[700],
        success: Ic[100],
        successContrast: Ac[900],
        successSurface: "#042602",
        primaryTextColor: Ac[0],
        secondaryTextColor: Ac[400],
        tertiaryTextColor: Ac[600],
        surface: Ac[800],
        surfaceVariant: Ac[700],
        surfaceVariantHover: "#333333",
        surfaceInteractive: Ac[700],
        surfaceInteractivePressed: Ac[400],
        surfaceDecorative: Ac[700],
        surfaceDimmed: "#1F1E1D",
        surfaceFade: Ac[700],
        hintSurface: Ac[550],
        floatSurface: Ac[700],
        pressedElement: Ac[600],
        notification: Sc[100],
        notificationContrast: Ac[900],
        widgetBackground: Ac[900],
        disabled: Ac[700],
        disabledContrast: Ac[400],
        inactiveElement: Ac[600],
        formIconColor: Ac[900],
        trademarkFooterText: Ac[400],
        itemHover: Ac[525],
        successHover: "#99DBB5",
        inactiveElementHover: Ac[800],
        secondaryButtonBackground: Ac[650],
        secondaryButtonBackgroundHover: Ac[625],
        primaryTimelineSurface: Ac[800],
        decorations: {
            decorOne: "#D7650F",
            decorTwo: "#400CC6",
            decorThree: "#AF3C3C",
            decorFour: "#ACB125",
            decorFive: "#831AA2"
        }
    },
    Fc = Object.freeze(Object.defineProperty({
        __proto__: null,
        dark: Dc,
        light: zc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pc = j ? 500 : 15e3,
    Mc = j ? 100 : 1e3,
    Oc = j ? 100 : 600,
    Rc = Pc,
    jc = 200,
    $c = 60,
    Bc = 360,
    qc = 130,
    Uc = "16px",
    Lc = (j ? 300 : 5e3) - Mc,
    Nc = Oc + Pc,
    Vc = j ? 500 : 15e3,
    Hc = j ? 100 : 1e3,
    Zc = j ? 100 : 600,
    Gc = Vc,
    Yc = 200,
    Wc = 60,
    Qc = 360,
    Jc = 95,
    Xc = "16px",
    Kc = (j ? 300 : 5e3) - Hc,
    eu = Zc + Vc,
    tu = 2;

function nu(e, t) {
    return ee(X(e), te(e.getState()), ne(t), Z(Ve))
}
const ru = (e, t) => ee(nu(e, e => e.application.readyState), p(e => e === t), m(1), oe),
    au = () => {
        if ((e = window.matchMedia) && /native code/.test(String(e))) {
            return !window.matchMedia("(hover: none)").matches
        }
        var e;
        return !0
    },
    iu = () => Ae(navigator.platform, ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]) && /CriOS/.test(navigator.userAgent),
    ou = () => /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && Ae("iPad", navigator.userAgent)),
    su = () => ou() || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 0,
    lu = () => Ae("Chrome", navigator.userAgent),
    cu = () => {
        const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return e ? parseInt(e[2], 10) : 0
    },
    uu = () => /Firefox/.test(navigator.userAgent),
    du = () => !lu() && /Safari/.test(navigator.userAgent),
    pu = 200,
    hu = 8,
    fu = 8,
    gu = 8,
    mu = 360,
    _u = 8,
    bu = 20,
    vu = {
        recommendations: {
            width: "392px",
            height: "286px"
        },
        mobileRecommendations: {
            width: "100%",
            height: "286px"
        }
    },
    yu = (e, t) => {
        e.getApplicationState("recommendations").products.length > 0 || ee(nu(e, e => e.application.page), ue(t => rp(e, t.url)), ne(() => tf(e)), p(e => e.length >= Cs), G(e => {
            return K(Promise.all([Promise.resolve(e), (n = t.call, r = e, n("/v1.0/recommendations/match", "POST", {
                pages: r
            }))]));
            var n, r
        }), m(1), re(t => {
            let [n, r] = t;
            return ee(ru(e, "ready"), ne(() => [n, r]))
        }), C(t => {
            let [n, r] = t;
            return function(e, t, n) {
                let {
                    products: r,
                    id: a
                } = t;
                void 0 === n && (n = !0);
                const {
                    recommendations: i
                } = e.getApplicationState(), o = null == i ? void 0 : i.hiddenIds.includes(a), s = { ...i,
                    id: a,
                    products: r
                };
                if (e.setApplicationState({
                        recommendations: s
                    }), !o) {
                    const t = !n;
                    e.setApplicationState({
                        recommendations: { ...s,
                            hasSeen: t,
                            isVisible: t
                        }
                    }), Xd(e, {}, {
                        scheduleRerender: t
                    }), ku(e, "recommendations")
                }
            }(e, {
                products: r,
                id: "h=" + n.join(",") + "&t=" + (new Date).getTime()
            })
        }))
    },
    wu = {
        visitorCounter: -1,
        recommendations: -1,
        googleReviews: -1,
        contactInvitation: -1,
        chatBotGreeting: -1
    },
    ku = (e, t) => {
        var n;
        if ("recommendations" === t) return Xd(e, {
            eventsQueue: [t]
        }, {
            scheduleRerender: !1
        }), ep(e, {
            transitionState: "hidden",
            hidden: !0
        }), Kd(e, {
            transitionState: "hidden",
            hidden: !0
        }), tp(e, {
            transitionState: "hidden",
            hidden: !0
        }), void np(e, {
            transitionState: "hidden",
            hidden: !0
        });
        const r = null != (n = e.getView("minimized").eventsQueue) ? n : [];
        Xd(e, {
            eventsQueue: [].concat(r, [t])
        }, {
            scheduleRerender: !1
        })
    },
    xu = (e, t) => {
        var n;
        const r = null != (n = e.getView("minimized").eventsQueue) ? n : [];
        Xd(e, {
            eventsQueue: r.filter(e => e !== t)
        }, {
            scheduleRerender: !1
        })
    },
    Cu = () => {
        Object.values(wu).forEach(e => window.clearTimeout(e))
    },
    Iu = (e, t) => {
        function n(t) {
            return () => {
                e.emit("resize-to-theme-size"), e.once("resize-to-theme-size-done", t)
            }
        }
        Cu();
        const r = "visitorCounter" === t && Boolean(e.getApplicationState("googleReviews")),
            a = e.getApplicationState("contactInvitation").hasSeen;
        switch (t) {
            case "visitorCounter":
                wu.visitorCounter = window.setTimeout(n(() => {
                    Kd(e, {
                        transitionState: "shown"
                    }), wu.visitorCounter = window.setTimeout(() => {
                        Kd(e, {
                            transitionState: "hidden"
                        })
                    }, eu)
                }), r ? 0 : Kc);
                break;
            case "recommendations":
                (e => {
                    const t = ou(),
                        n = t ? vu.mobileRecommendations : vu.recommendations,
                        r = e.getApplicationState("recommendations");
                    if (r.hidden) return;
                    Xd(e, {
                        resizeBubbleAnimation: "shrink"
                    }), e.emit("resize-request", { ...n,
                        maximized: !1,
                        ignoreHorizontalOffset: t
                    }), e.once("resize-request-done", () => e.setApplicationState({
                        recommendations: { ...r,
                            isVisible: !0,
                            hasSeen: !0,
                            animation: "show"
                        }
                    }))
                })(e);
                break;
            case "googleReviews":
                wu.googleReviews = window.setTimeout(n(() => {
                    ep(e, {
                        transitionState: "shown"
                    }), wu.googleReviews = window.setTimeout(() => {
                        ep(e, {
                            transitionState: "hidden"
                        })
                    }, Nc)
                }), Lc);
                break;
            case "contactInvitation":
                wu.contactInvitation = window.setTimeout(n(() => {
                    tp(e, {
                        transitionState: "shown"
                    })
                }), a ? 0 : bc);
                break;
            case "chatBotGreeting":
                wu.chatBotGreeting = window.setTimeout(n(() => {
                    np(e, {
                        transitionState: "shown"
                    })
                }), 0);
                break;
            default:
                return
        }
    },
    Su = e => {
        ee(ru(e, "bootstrapped"), re(() => nu(e, () => (e => {
            const t = e.getView("minimized").eventsQueue;
            return null != t && t.length ? t[0] : null
        })(e))), p(t => {
            if (!t || !Zh(e, "minimized")) return !1;
            const n = e.getApplicationState(t);
            return !!n && !n.isVisible
        }), C(t => {
            Iu(e, t)
        })), ee(nu(e, e => e.application.visibility.state), p(e => "maximized" === e), C(Cu)), ee(nu(e, () => {
            var t;
            return null == (t = e.getApplicationState("visitorCounter")) ? void 0 : t.transitionState
        }), p(e => "hidden" === e), C(() => {
            xu(e, "visitorCounter")
        })), ee(nu(e, () => {
            var t;
            return null == (t = e.getApplicationState("googleReviews")) ? void 0 : t.transitionState
        }), p(e => "hidden" === e), C(() => {
            xu(e, "googleReviews")
        })), ee(nu(e, e => {
            var t, n;
            return null != (t = null == (n = e.application.recommendations) ? void 0 : n.hiddenIds) ? t : []
        }), p(t => {
            const n = e.getApplicationState("recommendations");
            return n && t.includes(n.id)
        }), C(() => {
            xu(e, "recommendations")
        })), ee(nu(e, () => {
            var t;
            return null == (t = e.getApplicationState("contactInvitation")) ? void 0 : t.transitionState
        }), p(e => "hidden" === e), C(() => {
            xu(e, "contactInvitation")
        })), ee(nu(e, () => {
            var t;
            return null == (t = e.getApplicationState("chatBotGreeting")) ? void 0 : t.transitionState
        }), p(e => "hidden" === e), C(() => {
            xu(e, "chatBotGreeting")
        }))
    },
    Eu = j ? 0 : 150,
    Au = U() ? window.localStorage : L,
    Tu = [/sendURLToGuardwareProxy/i, /safari-extension:\/\//],
    zu = !("true" === Au.getItem("_livechat_has_visited"));
Au.setItem("_livechat_has_visited", "true");
const Du = (e, t, n, r) => {
        const {
            timeZone: a
        } = (new Intl.DateTimeFormat).resolvedOptions(), i = (null == r ? void 0 : r.license) || cp(), s = up(), l = {
            type: e + "_" + n,
            ...i ? {
                license: i
            } : {},
            ...s ? {
                organizationId: s
            } : {},
            userAgent: navigator.userAgent,
            mobile: ou(),
            timeZone: String(a),
            logVersion: "2024-11-07",
            firstTimeVisitor: zu,
            severity: t,
            lc_env: "production",
            ...r
        };
        if (a) {
            const [e] = a.split("/");
            e !== a && (l.timeZoneArea = String(e))
        }
        return (e => {
            let {
                type: t,
                license: n,
                organizationId: r,
                ...a
            } = e;
            if (window.location.href.includes("openwidget.com")) return Promise.resolve();
            const i = { ...n ? {
                    licence_id: n.toString()
                } : {},
                ...r ? {
                    organization_id: r
                } : {},
                event_id: t,
                message: JSON.stringify(a)
            };
            return dt("https://applog.livechatinc.com/logs", {
                method: "POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: O(i)
            }).then(() => Promise.resolve()).catch(o)
        })(l)
    },
    Fu = function(e, t, n, r) {
        void 0 === r && (r = "chat_widget");
        const a = {};
        var i;
        if (t instanceof Error ? (a.errorMessage = t.message, a.stack = t.stack, a.code = t.code) : a.errorMessage = JSON.stringify({
                error: t
            }), i = a, !Tu.some(e => e.test(i.errorMessage + " " + i.stack))) return he(n) || (n = {
            meta: JSON.stringify({
                info: n
            })
        }), Du(r, "Error", e, { ...n,
            ...a
        })
    },
    Pu = function(e, t, n) {
        return void 0 === n && (n = "chat_widget"), Du(n, "Informational", e, t)
    },
    Mu = e => Du("chat_widget", "Notice", e),
    Ou = e => Pu("chat_started", e),
    Ru = e => Pu("chat_rated", e),
    ju = e => Pu("widget_opened", e),
    $u = (e, t) => Pu("potential_connection_problem_" + e, t),
    Bu = () => Ee("webkit.messageHandlers.iosMobileWidget.postMessage", window) ? "ios" : !!Ee("androidMobileWidget.postMessage", window) && "android",
    qu = e => window.androidMobileWidget.postMessage(JSON.stringify(e)),
    Uu = e => window.webkit.messageHandlers.iosMobileWidget.postMessage(e),
    Lu = (() => {
        const e = Bu();
        return "android" === e ? qu : "ios" === e ? Uu : null
    })(),
    Nu = () => Boolean(Bu()),
    Vu = e => {
        Lu && (Lu({
            messageType: "uiReady"
        }), e.on("add_event", t => {
            let {
                event: n
            } = t;
            if ("message" !== n.type) return;
            const r = e.getUser(n.author).name;
            Lu({
                messageType: "newMessage",
                text: n.properties.text,
                id: n.id,
                timestamp: n.timestamp,
                author: {
                    name: r
                }
            })
        }), e.on("mobile_wrapper_minimize_intent", () => {
            Lu({
                messageType: "hideChatWindow"
            })
        }))
    },
    Hu = {
        light: {
            maxModifier: .7
        },
        dark: {
            maxModifier: .5
        }
    };

function Zu(e, t, n) {
    return Fl(e, n) > Fl(t, n) ? e : t
}
const Gu = function(e, t, n) {
        void 0 === n && (n = 0);
        const r = Fl(e, t),
            a = gp(t),
            {
                maxModifier: i
            } = Hu[a ? "light" : "dark"];
        if (n >= 5) return e;
        const o = i - r / 4.5 * .5;
        if (r >= 4.5) return e;
        const s = a ? Al(o, e) : Ml(o, e);
        return Fl(s, t) >= 4.5 ? s : Gu(s, t, n + 1)
    },
    Yu = e => {
        const t = e.variant || "light",
            n = Fc[t],
            r = e.customJson || {},
            {
                agentbarBackgroundColor: a,
                agentMessageColorBackground: i
            } = e,
            o = mp(e.titlebarBackgroundColor) ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.065)",
            s = mp(a) ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.05)",
            l = mp(a) ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)",
            c = mp(a) ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)",
            u = Dc.primaryTextColor,
            d = zc.primaryTextColor,
            p = Zu(u, d, e.ctaColor),
            h = Gu(e.ctaColor, n.surface),
            f = kp(i),
            g = Zu(u, d, e.backgroundColor);
        return Me({
            name: e.name,
            variant: t,
            iconTheme: e.name,
            showMessageAvatar: "modern" !== e.name,
            colors: {
                agentBarText: e.agentbarText,
                agentBarBackground: a,
                cta: e.ctaColor,
                ctaText: p,
                minimizedIcon: e.minimizedColorIcon,
                minimizedBackground: e.minimizedColorBackground,
                background: e.backgroundColor,
                visitorMessageText: e.visitorMessageColorText,
                visitorMessageBackground: e.visitorMessageColorBackground,
                systemMessage: e.systemMessageColor,
                agentMessageBackground: i,
                agentMessageText: e.agentMessageColorText,
                minimizedText: e.minimizedColorText,
                titleBarText: e.titlebarText,
                titleBarBackgroundColor: e.titlebarBackgroundColor,
                quickRepliesColor: h,
                lighterOppositeTitleBarColor: o,
                decorativeOppositeAgentBarColor: s,
                lighterOppositeAgentBarColor: l,
                codeBlockBackgroundColor: f
            },
            AgentBar: {
                css: {
                    background: a,
                    color: e.agentbarText
                },
                IconButton: {
                    css: {
                        background: {
                            default: "transparent",
                            active: l
                        }
                    }
                }
            },
            Form: {
                IconButton: {
                    css: {
                        background: {
                            default: "rgba(0, 0, 0, 0.05)",
                            active: e.ctaColor
                        },
                        color: {
                            default: n.formIconColor,
                            active: p
                        }
                    }
                }
            },
            ChatSummary: {
                Icon: {
                    color: e.minimizedColorIcon
                }
            },
            Maximized: {
                css: {
                    background: e.backgroundColor
                }
            },
            Message: {
                own: {
                    Bubble: {
                        css: {
                            background: "modern" === e.name ? "transparent" : e.visitorMessageColorBackground,
                            color: e.visitorMessageColorText
                        }
                    }
                },
                system: {
                    Bubble: {
                        css: {
                            color: e.systemMessageColor
                        }
                    }
                },
                Bubble: {
                    css: {
                        background: "modern" === e.name ? "transparent" : i,
                        color: e.agentMessageColorText
                    }
                },
                css: {
                    color: e.systemMessageColor
                }
            },
            TypingIndicator: {
                css: {
                    color: e.systemMessageColor
                }
            },
            Minimized: {
                MinimizedBubble: {
                    css: {
                        color: e.minimizedColorText,
                        backgroundColor: {
                            default: e.minimizedColorBackground,
                            hasAvatar: "transparent"
                        }
                    },
                    Icon: {
                        color: e.minimizedColorIcon
                    }
                },
                MinimizedBar: {
                    css: {
                        color: e.minimizedColorText,
                        backgroundColor: e.minimizedColorBackground
                    },
                    Icon: {
                        color: e.minimizedColorIcon
                    }
                }
            },
            TitleBar: {
                css: {
                    background: "modern" === e.name ? e.titlebarBackgroundColor : "transparent",
                    color: "modern" === e.name ? e.titlebarText : g
                },
                HourGlassLabel: {
                    css: {
                        backgroundColor: s
                    }
                }
            },
            DividerLabel: {
                css: {
                    color: e.systemMessageColor,
                    borderColor: c
                }
            },
            TextComposer: {
                IconButton: {
                    css: {
                        background: {
                            active: e.ctaColor
                        }
                    },
                    active: {
                        Icon: {
                            color: p
                        }
                    }
                }
            }
        }, r)
    },
    Wu = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
    Qu = e => e.replace(/\b(?:\d[ -]*?){8,15}((?:\d[ -]*?){4})\b/g, (e, t) => {
        const n = e.replace(/(-|\s)/g, "");
        return (e => {
            if (/[^0-9-\s]+/.test(e)) return !1;
            const t = e.replace(/\D/g, "");
            let n, r = t.length,
                a = 1,
                i = 0;
            for (; r;) n = parseInt(t.charAt(--r), 10), i += (a ^= 1) ? Wu[n] : n;
            return i && i % 10 == 0
        })(n) ? "" + (e => {
            const t = e % 4,
                n = t ? 4 - t : 0,
                r = Math.floor(e / 4) + (t ? 1 : 0) - n - 1,
                a = xe(n, "XXX"),
                i = xe(r, "XXXX");
            return a.concat(i).join("-").concat("-")
        })(n.length) + t : e
    }),
    Ju = e => {
        let t = 0;
        return e.split("").forEach(e => {
            const n = e.charCodeAt(0);
            t = (t << 5) - t + n, t &= t
        }), t
    },
    Xu = (e, t) => Ju(e) % (1 / t) == 0;
(new Or).tlds(dc);
const Ku = (e, t, n) => {
        const r = ve(t => t.name === e, n);
        return -1 !== r ? Xe(r, { ...n[r],
            defaultValue: t
        }, n) : n
    },
    ed = (e, t, n) => {
        e.addEvent(t, { ...n,
            serverId: n.serverId || null
        })
    },
    td = (e, t, n) => {
        let {
            systemMessageType: r,
            textVariables: a,
            text: i
        } = n;
        ed(e, t, {
            id: Se(e.getIndexedEvents("liveChatChatId")),
            serverId: null,
            type: "system_message",
            author: "system",
            seen: !0,
            properties: D({
                systemMessageType: r,
                textVariables: a,
                defaultText: i
            })
        })
    },
    nd = e => {
        e.updateChat("liveChatChatId", {
            active: !1,
            properties: {
                ended: !0,
                queued: !1,
                agentActivity: null
            }
        }), e.setApplicationState({
            greetingsMuted: !1
        })
    },
    rd = e => {
        e.setApplicationState({
            eyeCatcher: { ...e.getApplicationState().eyeCatcher,
                hidden: !0
            }
        })
    },
    ad = (e, t) => {
        const n = e.getApplicationState("lightbox"),
            r = { ...n,
                ...t.link && t.link !== n.link && {
                    link: t.link
                },
                ...t.alt && t.alt !== n.alt && {
                    alt: t.alt
                },
                ...t.name && t.name !== n.name && {
                    name: t.name
                },
                ...t.state && t.state !== n.state && {
                    state: t.state
                }
            };
        e.setApplicationState({
            lightbox: r
        })
    },
    id = e => {
        const t = Fh(e);
        if (!t || !t.properties.uniqueId || Ph(e, t)) return;
        const {
            invitation: n
        } = e.getApplicationState();
        var r;
        e.setApplicationState({
            invitation: { ...n,
                hiddenIds: [].concat(n.hiddenIds, [t.properties.uniqueId])
            }
        }), Xu(e.getSessionUser().serverId, .01) && (r = {
            minimizedType: Up(e),
            greetingId: t.properties.id,
            greetingUniqueId: t.properties.uniqueId,
            greetingType: t.properties.type,
            greetingSubtype: t.properties.subtype,
            greetingAddon: t.properties.addon || "none"
        }, Pu("greeting_dismissed", r)), e.emit("render-minimized")
    },
    od = e => {
        const t = Fh(e);
        if (!t || !t.properties.uniqueId || Mh(e)) return;
        const {
            invitation: n
        } = e.getApplicationState();
        e.setApplicationState({
            invitation: { ...n,
                displayedIds: [].concat(n.displayedIds, [t.properties.uniqueId])
            }
        })
    },
    sd = function(e, t) {
        let {
            shouldMaintainModality: n = !0
        } = void 0 === t ? {} : t;
        Zh(e, "maximized") || e.setApplicationState({
            visibility: { ...e.getApplicationState("visibility"),
                state: "maximized",
                ...!n && {
                    interactionModality: "virtual"
                }
            }
        })
    },
    ld = function(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const {
            visibility: r,
            destroyed: a,
            isMinimizedForcefullyDisabled: i
        } = e.getApplicationState();
        !t && "hidden" === r.state && r.forced || "minimized" === r.state || (!Hh(e) || Yp("liveChatChatId", e) || a || i ? e.setApplicationState({
            visibility: { ...e.getApplicationState("visibility"),
                state: "hidden"
            }
        }) : n || !e.getView("Moment").show ? (e.setApplicationState({
            visibility: { ...e.getApplicationState("visibility"),
                state: "minimized"
            }
        }), Xd(e, {
            bubbleHoverState: !1
        })) : e.emit("request_close_moment"))
    },
    cd = e => {
        Zh(e, "minimized") && e.setApplicationState({
            visibility: {
                state: "hidden"
            }
        })
    },
    ud = (e, t) => {
        let {
            id: n,
            active: r = !0,
            thread: a,
            previousThread: i,
            group: o,
            agent: s,
            queued: l = !1,
            timestamp: c
        } = t;
        null === e.getChat("liveChatChatId").serverId && e.setChatServerId("liveChatChatId", n);
        const u = {
            ended: !1,
            queued: l,
            fakeAgentMessageId: null,
            lastThread: a,
            previousThread: i,
            currentAgent: s,
            timestamp: c,
            starting: !1
        };
        "number" == typeof o && (u.group = o), rd(e), e.updateChat("liveChatChatId", {
            active: r,
            properties: u
        }), Ld(e), Nd(e), e.setApplicationState({
            hidden: !1
        });
        const {
            readyState: d
        } = e.getApplicationState();
        "not_ready" === d || Zh(e, "maximized") || (e.setCurrentView("Chat"), sd(e, {
            shouldMaintainModality: !1
        }))
    },
    dd = function(e, t, n) {
        void 0 === n && (n = {});
        const r = Pp("creditCardMasking", e).enabled ? (e => Qu(e.replaceAll(/\/\/(\S*):(\S*)@/g, "//****:****@")))(t) : t;
        return {
            type: vs(r) ? "emoji" : "message",
            thread: Kh(e),
            properties: D({
                text: r,
                ...n
            })
        }
    },
    pd = function(e, t, n, r) {
        void 0 === r && (r = void 0), e.sendEvent(t, dd(e, n, {
            triggeredBy: r
        }))
    },
    hd = (e, t, n) => {
        e.setApplicationState({
            messageDraft: n,
            initialMessageDraft: null
        })
    },
    fd = (e, t, n, r) => {
        const {
            quickReplies: a
        } = n.properties, i = a[r];
        n.properties.invitation ? Gd(e, n.id, i) : pd(e, t, i.text, {
            type: "quick_reply",
            event: n.id,
            button: i
        })
    },
    gd = (e, t, n) => {
        const r = Bh(e, t);
        r ? e.updateEvent(t, r.id, {
            properties: n.properties
        }) : ed(e, t, { ...n,
            seen: !0,
            type: "message_draft",
            author: e.getSessionUserId(),
            id: Se(e.getIndexedEvents("liveChatChatId"))
        }), r || wd(e), e.setCurrentView("Chat")
    },
    md = (e, t) => {
        const n = e.getChat(t).active,
            r = ah(e);
        return Boolean(r && !n)
    },
    _d = function(e, t, n, r) {
        void 0 === r && (r = void 0);
        const a = e.getApplicationState("invitation").current,
            i = e.getEvent(t, a),
            o = dd(e, n, {
                triggeredBy: r,
                ...i && {
                    fromGreeting: { ...Be(["id", "uniqueId"], i.properties)
                    }
                }
            });
        if (!(Pp("preChatAfterGreeting", e).enabled && md(e, t))) return e.setCurrentView("Chat"), void e.sendEvent(t, o);
        gd(e, t, o)
    },
    bd = (e, t, n) => {
        if (sf(e) && !Mp(e)) return;
        if (!md(e, t)) return void e.setApplicationState({
            initialMessageDraft: n
        });
        const r = dd(e, n);
        gd(e, t, r)
    },
    vd = (e, t, n) => {
        let {
            text: r,
            recipients: a = "all"
        } = n;
        e.sendEvent(t, {
            type: "custom_system_message",
            thread: Kh(e),
            properties: {
                text: r.trim(),
                recipients: a
            }
        })
    },
    yd = (e, t) => {
        e.updateChat("liveChatChatId", {
            properties: {
                currentAgent: t
            }
        })
    },
    wd = e => {
        if (!sh(e, "prechat")) {
            const t = e.getView("Chat/prechat");
            Rd(e, t)
        }
    },
    kd = (e, t) => {
        const {
            properties: {
                rate: n,
                rateComment: r
            }
        } = e.getChat("liveChatChatId");
        let {
            fields: a,
            ...i
        } = t;
        n && (a = Ku("rating", n, a)), r && (a = Ku("rateComment", r, a)), Rd(e, { ...i,
            fields: a
        })
    },
    xd = e => {
        const t = Dp(e);
        e.updateChat(t, {
            properties: {
                startChatAgainPending: !0
            }
        })
    },
    Cd = function(e, t, n) {
        let {
            chatId: r,
            forced: a
        } = void 0 === n ? {} : n;
        e.updateChat("liveChatChatId", {
            properties: {
                startChatAgainPending: !1
            }
        }), $d(e);
        const {
            properties: {
                lastThread: i
            },
            serverId: o
        } = e.getChat("liveChatChatId");
        if (a || !Op(e) || o && r !== o) e.flushChat(t), r && e.setChatServerId("liveChatChatId", r);
        else {
            Ud(e);
            const t = Vp(e, "liveChatChatId");
            t && e.removeEvent("liveChatChatId", t.id)
        }
        e.updateChat(t, {
            properties: {
                agentActivity: null,
                ended: !1,
                fakeAgentMessageId: null,
                lastThread: i,
                loadingHistory: !1,
                queued: !1,
                rate: null,
                rateComment: null,
                transcriptSentTo: null
            }
        }), e.setApplicationState({
            greetingsMuted: !1
        })
    },
    Id = e => {
        e.updateChat("liveChatChatId", {
            properties: {
                rate: null,
                rateComment: null,
                transcriptSentTo: null
            }
        })
    },
    Sd = (e, t) => {
        var n, r, a, i, o;
        const s = t.getApplicationState("config");
        t.setApplicationState({
            config: { ...s,
                features: { ...s.features,
                    homeScreen: {
                        enabled: bp(e)
                    },
                    utmParams: {
                        enabled: vp(e)
                    },
                    fileSharing: {
                        enabled: "1" === e.properties.license.core["attachments.enable_for_visitors"]
                    },
                    agentAvatar: {
                        enabled: e.__unsafeProperties.group.hasAgentAvatarsEnabled
                    },
                    continuousChat: {
                        enabled: "1" === e.properties.license.core.continuous_chat_widget_enabled
                    },
                    chatHistory: {
                        enabled: "1" === e.properties.license.core.customer_history_enabled
                    },
                    rating: {
                        enabled: e.__unsafeProperties.group.ratingEnabled
                    },
                    emailTranscript: {
                        enabled: e.__unsafeProperties.group.transcriptButtonEnabled
                    },
                    logo: e.__unsafeProperties.group.logo.enabled ? {
                        enabled: !0,
                        path: e.__unsafeProperties.group.logo.src
                    } : {
                        enabled: !1,
                        path: void 0
                    },
                    linksPreview: {
                        enabled: e.__unsafeProperties.group.linksUnfurlingEnabled
                    },
                    ticketForm: {
                        enabled: "ticketForm" in e,
                        mode: e.__unsafeProperties.ticketFormMode || fc(e)
                    },
                    queue: {
                        writingInQueueEnabled: _p(e)
                    },
                    preChatForm: {
                        enabled: "prechatForm" in e
                    },
                    preChatAfterGreeting: {
                        enabled: e.__unsafeProperties.group.prechatFormAfterGreetingEnabled
                    },
                    creditCardMasking: {
                        enabled: !!e.__unsafeProperties.license && e.__unsafeProperties.license.creditCardMaskingEnabled
                    },
                    hideTrademark: {
                        enabled: e.__unsafeProperties.group.hasHiddenTrademark || !1 === e.isPoweredByEnabled
                    },
                    disableSounds: {
                        enabled: !e.__unsafeProperties.group.hasSoundsEnabled
                    },
                    minimized: {
                        enabled: !e.__unsafeProperties.group.disabledMinimized
                    },
                    mobileMinimized: {
                        enabled: e.__unsafeProperties.group.hasCustomMobileSettings ? !e.__unsafeProperties.group.disabledMinimizedOnMobile : !e.__unsafeProperties.group.disabledMinimized
                    },
                    hideOnInit: {
                        enabled: e.__unsafeProperties.group.hideOnInit
                    },
                    textApp: {
                        enabled: null != (n = e.__unsafeProperties.enableTextApp) && n
                    },
                    privacyPolicy: {
                        enabled: null != (r = null == (a = e.__unsafeProperties.group.privacyPolicy) ? void 0 : a.enabled) && r,
                        text: null != (i = null == (o = e.__unsafeProperties.group.privacyPolicy) ? void 0 : o.text) ? i : ""
                    }
                },
                minimizedType: e.__unsafeProperties.group.minimizedType,
                mobileMinimizedType: e.__unsafeProperties.group.minimizedTypeOnMobile,
                theme: Me(s.theme, Yu(e.__unsafeProperties.group.theme)),
                screenPosition: e.__unsafeProperties.group.screenPosition,
                mobileScreenPosition: e.__unsafeProperties.group.hasCustomMobileSettings ? e.__unsafeProperties.group.screenPositionOnMobile : e.__unsafeProperties.group.screenPosition,
                disabledOnMobile: e.__unsafeProperties.group.disabledOnMobile,
                nonProfitLicense: !!e.__unsafeProperties.license && e.__unsafeProperties.license.nonProfit,
                properties: e.properties,
                screenOffset: {
                    x: e.__unsafeProperties.group.offsetX,
                    y: e.__unsafeProperties.group.offsetY
                }
            }
        }), t.getApplicationState("config").features.disableSounds.enabled && t.setApplicationState({
            muted: !0
        })
    },
    Ed = (e, t, n) => {
        const r = e.getApplicationState("config");
        e.setApplicationState({
            config: { ...r,
                features: Me(r.features, {
                    [t]: n
                })
            }
        })
    },
    Ad = (e, t) => {
        Ed(e, t, {
            enabled: !1
        })
    },
    Td = (e, t, n) => {
        Ed(e, t, {
            enabled: !0,
            ...n
        })
    },
    zd = (e, t) => {
        try {
            const n = JSON.parse(t).filter(e => {
                let {
                    template_id: t
                } = e;
                return "moment" === t || "links" === t
            });
            if (Te(n)) return;
            Td(e, "boosters", {
                items: n.map(e => {
                    if ("links" === e.template_id) return {
                        id: e.id,
                        template: e.template_id,
                        links: e.links
                    };
                    const t = {
                        type: e.action.type,
                        label: e.action.label,
                        url: e.action.url
                    };
                    return {
                        id: e.id,
                        template: e.template_id,
                        title: e.title,
                        description: e.description,
                        icon: e.icon,
                        action: t
                    }
                })
            })
        } catch (n) {}
    },
    Dd = e => {
        const {
            organizationId: t,
            page: n
        } = e.getApplicationState();
        if (e.getApplicationState("showTextSelectionTracking")) return;
        "4c8c0751-837f-4a11-928e-047b2d095307" === t && (e => {
            if (!e.url) return !1;
            const t = new URL(e.url).hostname,
                n = new URL(e.url).pathname;
            return "www.text.com" === t && !n.startsWith("/app")
        })(n) && e.setApplicationState({
            showTextSelectionTracking: !0
        })
    },
    Fd = (e, t, n) => {
        const r = {
            answered: !0
        };
        n && (r.fields = n.properties.fields, n.id && e.setEventServerId("liveChatChatId", t, n.id)), e.updateEvent("liveChatChatId", t, {
            properties: r
        })
    },
    Pd = (e, t) => {
        var n;
        t.properties.receivedFirstTime && Xu(e.getSessionUser().serverId, .01) && (n = {
            minimizedType: Up(e),
            greetingId: t.properties.id,
            greetingUniqueId: t.properties.uniqueId,
            greetingType: t.properties.type,
            greetingSubtype: t.properties.subtype,
            greetingAddon: t.properties.addon || "none"
        }, Pu("greeting_displayed", n))
    },
    Md = (e, t) => {
        const {
            defaultWidget: n,
            embedded: r,
            actingAsDirectLink: a,
            greetingsMuted: i
        } = e.getApplicationState();
        yd(e, t.author), "openwidget" === n && (e => {
            const t = e.getApplicationState("recommendations");
            Cu(), Xd(e, {
                eventsQueue: []
            }, {
                scheduleRerender: !1
            }), ep(e, {
                transitionState: "hidden",
                hidden: !0
            }), Kd(e, {
                transitionState: "hidden",
                hidden: !0
            }), tp(e, {
                transitionState: "hidden",
                hidden: !0
            }), e.setApplicationState({
                recommendations: { ...t,
                    isVisible: !1,
                    hiddenIds: [].concat(t.hiddenIds, [t.id]),
                    hidden: !0
                }
            })
        })(e), "bar" !== Up(e) && rd(e), Ld(e), Vd(e);
        const o = Fh(e);
        var s, l, c, u, d, p;
        o && (p = {
            minimizedType: Up(e),
            greetingId: null == (s = o.properties) ? void 0 : s.id,
            greetingUniqueId: null == (l = o.properties) ? void 0 : l.uniqueId,
            greetingType: null == (c = o.properties) ? void 0 : c.type,
            greetingSubtype: null == (u = o.properties) ? void 0 : u.subtype,
            greetingAddon: (null == (d = o.properties) ? void 0 : d.addon) || "none"
        }, Pu("greeting_not_canceled", p), e.removeEvent("liveChatChatId", o.id));
        me(t.properties.cards || t.properties.card).filter(Boolean).forEach(t => {
            t.title && (t.title = fp(e, t.title)), t.subtitle && (t.subtitle = fp(e, t.subtitle)), t.buttons && (t.buttons.forEach(e => e.invitation = !0), r && !a || t.buttons.filter(e => "url" === e.type && "target" in e).forEach(e => e.target = "new"))
        });
        const h = Se(e.getIndexedEvents("liveChatChatId"));
        ed(e, "liveChatChatId", { ...t,
            seen: !i,
            id: h,
            properties: { ...t.properties,
                ...t.properties.text && {
                    text: fp(e, t.properties.text)
                }
            }
        }), e.updateChat("liveChatChatId", {
            properties: {
                fakeAgentMessageId: h
            }
        }), e.setApplicationState({
            invitation: { ...e.getApplicationState("invitation"),
                current: h
            }
        }), t.properties.receivedFirstTime && e.setCurrentView("Chat"), Zh(e, "maximized") || (Ph(e, t) && t.properties.receivedFirstTime && !i ? sd(e, {
            shouldMaintainModality: !1
        }) : Ph(e, t) || ld(e, !0)), i || Pd(e, t), e.emit("render-minimized")
    },
    Od = (e, t) => {
        const n = (new Date).toISOString();
        e.setApplicationState({
            config: { ...e.getApplicationState("config"),
                features: { ...e.getApplicationState("config").features,
                    ticketForm: { ...e.getApplicationState("config").features.ticketForm,
                        additionalInfo: {
                            lastDisplayedReason: t,
                            lastDisplayedAt: n
                        }
                    }
                }
            }
        }), Rd(e, e.getView("Chat/ticketForm"))
    },
    Rd = (e, t) => {
        const n = {
            formType: t.type,
            formId: t.id,
            fields: t.fields
        };
        if (sh(e)) {
            const {
                id: t
            } = e.getLastEvent("liveChatChatId");
            return e.updateEvent("liveChatChatId", t, {
                properties: n
            })
        }
        const r = {
            id: Se(e.getIndexedEvents("liveChatChatId")),
            type: "form",
            author: "system",
            properties: n
        };
        if (t.id === Ns.id) {
            const {
                properties: {
                    lastThread: t
                }
            } = e.getChat("liveChatChatId");
            r.thread = t
        }
        return ed(e, "liveChatChatId", r)
    },
    jd = (e, t) => {
        const n = e.getView("Moment");
        if (n.show && !t.wasTriggeredByGreeting) return n.data.url === t.url ? void e.emit("request_expand_moment") : void e.emit("request_expand_moment", {
            nextMoment: t
        });
        Ep(t.url) ? (e.updateView("Moment", {
            show: !0,
            data: t
        }), n.show && e.emit("request_expand_moment")) : td(e, "liveChatChatId", {
            text: "Link attached to the button is invalid."
        })
    },
    $d = function(e, t) {
        void 0 === t && (t = !1), e.updateView("Moment", {
            show: !1,
            data: {}
        }), t && ld(e)
    },
    Bd = (e, t) => {
        e.requestUpdateUser(e.getSessionUser().id, t)
    },
    qd = (e, t) => {
        const n = e.getSessionUser().id;
        var r;
        null !== e.getUser(n).serverId && e.clearUserServerId(n), e.setUserServerId(n, t), e.setApplicationState({
            testGroup: (r = t, Ju(r) % 2 ? "A" : "B")
        })
    },
    Ud = function(e, t) {
        void 0 === t && (t = void 0);
        const n = oh(e, t);
        n && e.removeEvent("liveChatChatId", n)
    },
    Ld = e => {
        Ud(e, "prechat")
    },
    Nd = e => {
        Ud(e, "postchat")
    },
    Vd = e => {
        Ud(e, "ticket")
    },
    Hd = (e, t, n) => {
        const r = Ee("error.details.errors", e);
        if (!r) return void n();
        const a = r.reduce((e, n) => "requester.email" === n.field ? { ...e,
            email: t("invalid_email")
        } : "requester.name" === n.field ? { ...e,
            name: n.message
        } : e, {});
        Te(a) ? n() : n(a)
    },
    Zd = e => {
        const t = "email_prompt",
            {
                properties: {
                    lastThread: n
                }
            } = e.getChat("liveChatChatId");
        e.hasEvent("liveChatChatId", t) && e.removeEvent("liveChatChatId", t);
        !!Eh(e).find(e => "form" === e.type && "ask_for_email" === e.properties.formId) || e.addEvent("liveChatChatId", {
            id: t,
            serverId: null,
            seen: !0,
            type: "email_prompt",
            author: "system",
            thread: n
        })
    },
    Gd = function(e, t, n, r) {
        void 0 === r && (r = !1), Ae(n.type, ["message", "webview"]) && sd(e);
        const a = Dp(e);
        switch (e.emit("rich_greeting_button_clicked", {
            button: n,
            event: e.getEvent(a, t)
        }), n.type) {
            case "message":
                _d(e, a, n.text, {
                    event: t,
                    button: n
                });
                break;
            case "webview":
                jd(e, {
                    url: n.value,
                    wasTriggeredByGreeting: r,
                    source: r ? "targeted_message" : "rich_message"
                });
                break;
            case "cancel":
                Jd(e, a, t);
                break;
            case "copy":
                return void hc(n.value)
        }
    },
    Yd = e => {
        e.emit("start_thread")
    },
    Wd = function(e, t, n) {
        void 0 === n && (n = "button");
        const r = e.getChat("liveChatChatId"),
            a = Ae("image", t.type);
        (Ae(["clipboard", "drag"], n) || Math.random() < .1) && Pu("file_upload_added", {
            uploadSource: n
        }), e.sendEvent("liveChatChatId", {
            type: "file",
            thread: r.properties.lastThread,
            properties: {
                name: t.name.substring(0, 255),
                progress: 0,
                finished: !1,
                failed: !1,
                failReason: null,
                fileType: a ? "image" : "other",
                url: a ? URL.createObjectURL(t) : null,
                uploadSource: n
            }
        }, {
            file: t
        })
    },
    Qd = (e, t) => {
        Mh(e) && Dh(e) && e.setApplicationState({
            greetingsMuted: !0
        }), e.removeEvent("liveChatChatId", t), setTimeout(() => e.emit("render-minimized"), 0)
    },
    Jd = (e, t, n) => {
        const r = e.getChat(t),
            {
                mobile: a
            } = e.getApplicationState(),
            i = e.getEvent(t, n);
        var o;
        !r.active && i && (Xu(e.getSessionUser().serverId, .01) && (o = {
            mobile: a,
            greetingId: i.properties.id,
            greetingUniqueId: i.properties.uniqueId,
            greetingType: i.properties.type,
            greetingSubtype: i.properties.subtype,
            greetingAddon: i.properties.addon || "none",
            minimizedType: Up(e)
        }, Pu("greeting_canceled", o)), e.emit("request_cancel_greeting", i))
    },
    Xd = function(e, t, n) {
        let {
            scheduleRerender: r = !0
        } = void 0 === n ? {} : n;
        const a = e.getView("minimized"),
            i = { ...a,
                ...t
            };
        JSON.stringify(a) !== JSON.stringify(i) && (e.updateView("minimized", i), r && setTimeout(() => e.emit("render-minimized"), 0))
    },
    Kd = (e, t) => {
        const {
            session: n,
            transitionState: r
        } = t, a = { ...e.getApplicationState("visitorCounter") || {},
            ...n && {
                session: n
            },
            transitionState: r,
            ...void 0 !== t.hidden ? {
                hidden: t.hidden
            } : {},
            isVisible: !!r && "hidden" !== r
        };
        e.setApplicationState({
            visitorCounter: a
        }), e.emit("render-minimized")
    },
    ep = (e, t) => {
        const {
            transitionState: n
        } = t, r = { ...e.getApplicationState("googleReviews"),
            transitionState: n,
            ...void 0 !== t.hidden ? {
                hidden: t.hidden
            } : {},
            isVisible: !!n && "hidden" !== n
        };
        e.setApplicationState({
            googleReviews: r
        }), e.emit("render-minimized")
    },
    tp = (e, t) => {
        var n;
        const r = e.getApplicationState("contactInvitation"),
            a = null != (n = t.transitionState) ? n : r.transitionState,
            i = { ...r,
                transitionState: a,
                ...void 0 !== t.hidden ? {
                    hidden: t.hidden
                } : {},
                isVisible: !!a && "hidden" !== a,
                hasSeen: void 0 !== t.hasSeen ? t.hasSeen : r.hasSeen
            };
        e.setApplicationState({
            contactInvitation: i
        }), t.transitionState && e.emit("render-minimized")
    },
    np = (e, t) => {
        var n;
        const r = e.getApplicationState("chatBotGreeting"),
            a = null != (n = t.transitionState) ? n : r.transitionState,
            i = { ...r,
                transitionState: a,
                isVisible: !!a && "hidden" !== a,
                text: void 0 !== t.text ? t.text : r.text,
                hidden: void 0 !== t.hidden ? t.hidden : r.hidden,
                hasSeen: void 0 !== t.hasSeen ? t.hasSeen : r.hasSeen
            };
        e.setApplicationState({
            chatBotGreeting: i
        }), t.transitionState && e.emit("render-minimized")
    },
    rp = (e, t) => {
        const {
            history: n
        } = e.getApplicationState("locationHistory"), r = (new Date).getTime();
        if (n.length && De(n) === t) return void e.setApplicationState({
            locationHistory: {
                history: n,
                updatedAt: r
            }
        });
        const a = [].concat(n.slice(-10), [t]);
        e.setApplicationState({
            locationHistory: {
                history: a,
                updatedAt: r
            }
        })
    },
    ap = Ge(500, e => {
        e.emit("scroll_to_bottom")
    }),
    ip = e => {
        ap(e)
    },
    op = e => {
        e.getApplicationState().isPreview || (e.setApplicationState({
            privacyPolicyBannerState: "closing"
        }), setTimeout(() => {
            e.setApplicationState({
                privacyPolicyBannerState: "hidden"
            })
        }, Eu))
    },
    sp = (e, t) => {
        const {
            rate: n,
            rateComment: r
        } = t.properties, a = De(t.events);
        return {
            id: Se(e.getIndexedEvents("liveChatChatId")),
            author: "system",
            own: !1,
            seen: !0,
            serverId: null,
            thread: t.id,
            timestamp: a.timestamp + 1,
            serverTimestamp: null,
            delivered: !1,
            failed: !1,
            type: "form",
            properties: {
                formId: Ns.id,
                answered: !0,
                answers: {
                    rating: n,
                    ...r && {
                        rateComment: r
                    }
                }
            }
        }
    },
    lp = (e, t) => t.map(t => ((e, t) => {
        if (!yf(t)) return t;
        const n = wf(t.events);
        if (kf(n)) return t;
        const r = xf(t.events);
        return Cf(e, t.id) ? { ...t,
            events: r
        } : { ...t,
            events: [].concat(r, [sp(e, t)])
        }
    })(e, t)),
    cp = () => {
        const e = F(window.location.search);
        return parseInt((() => {
            const e = String(window.location).match(/licen(?:s|c)e\/g?(\d+)/);
            return e ? e[1] : null
        })() || e.license_id, 10)
    },
    up = () => F(window.location.search).organization_id || "",
    dp = e => {
        const t = parseInt(e, 10);
        return t > -1 ? t : null
    },
    pp = e => "group" in e ? dp(e.group) : "groups" in e ? dp(e.groups) : null,
    hp = () => "1" === tt("unique_groups", window.location.search) || "1" === tt("unique_group", window.location.search),
    fp = function(e, t, n) {
        void 0 === n && (n = {});
        const r = void 0 !== n.name ? n.name : (e => {
                const {
                    name: t
                } = e.getSessionUser();
                return t || e.localize("client")
            })(e),
            a = void 0 !== n.agent ? n.agent : (() => {
                try {
                    return (e => {
                        const t = Fp("liveChatChatId", e);
                        if (!t) throw new Error("Current chat agent is undefined");
                        if (!t.name) throw new Error("Current chat agent name is undefined");
                        return t.name
                    })(e)
                } catch {
                    return ""
                }
            })();
        return t.replace(/%name%/g, r).replace(/%agent%/g, a)
    },
    gp = e => Dl(e) > .7,
    mp = e => Dl(e) <= .179,
    _p = e => {
        var t;
        return Boolean(null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.messaging_in_queue_enabled)
    },
    bp = e => {
        var t;
        return Boolean(null == (t = e.properties.group.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.homescreen_enabled)
    },
    vp = e => {
        var t;
        return Boolean(null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.utm_params_enabled)
    },
    yp = e => "https://" + e + "." + ("api" === e ? "livechatinc" : "livechat") + ".com",
    wp = () => {
        const e = document.createElement("video"),
            t = document.createElement("canvas");
        return navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia ? navigator.mediaDevices.getDisplayMedia({
            video: {
                cursor: "always",
                displaySurface: "browser"
            },
            audio: !1
        }).then(t => (e.srcObject = t, e.play())).then(() => new Promise(e => {
            setTimeout(e, 150)
        })).then(() => {
            t.width = e.videoWidth, t.height = e.videoHeight;
            t.getContext("2d").drawImage(e, 0, 0, e.videoWidth, e.videoHeight);
            const n = ((e, t) => {
                const [n, r] = e.split(","), a = n.match(/:(.*?);/)[1], i = atob(r);
                let o = i.length;
                const s = new Uint8Array(o);
                for (; o--;) s[o] = i.charCodeAt(o);
                return new File([s], t, {
                    type: a
                })
            })(t.toDataURL("image/png"), "screenshot.png");
            return e.srcObject.getTracks().forEach(e => e.stop()), n
        }) : Promise.reject(new Error("Screen sharing is not supported"))
    },
    kp = e => mp(e) ? zl(.1, Ml(.1, e)) : zl(.2, Al(.15, e));

function xp(e, t, n) {
    if (e.startsWith(n)) return e;
    const r = [e, t],
        a = JSON.stringify(r),
        i = btoa(a),
        o = new URL("/v1.0/t/link", n);
    return o.searchParams.set("d", i), o.toString()
}

function Cp(e) {
    return "https://cdn.livechat-files.com/api/file/lc/main/default/logo/sz2tt7jpJ6VJwBo.png" === ut(e)
}
const Ip = e => {
        const {
            x: t,
            y: n,
            width: r,
            height: a
        } = e.target.getBoundingClientRect();
        return {
            x: t,
            y: n,
            width: r,
            height: a
        }
    },
    Sp = (e, t) => {
        const {
            name: n,
            email: r
        } = fe(e => "string" == typeof e ? Qe(e) : e, Be(["email", "name"], e));
        return n === t("client") ? {
            email: r
        } : {
            email: r,
            name: n
        }
    },
    Ep = e => !!e && (e => {
        const t = st(e);
        return !t || "https:" === t || !1
    })(lc(e)),
    Ap = e => {
        var t;
        return {
            id: e.id,
            name: null != (t = e.title) ? t : "",
            text: e.description,
            icon: e.icon,
            action: {
                label: e.action.label,
                type: "button",
                value: e.action.url
            },
            properties: {}
        }
    },
    Tp = (e, t) => {
        var n, r, a, i;
        const o = Pp("logo", e),
            s = o.enabled ? ut(o.path) : "",
            l = Pp("boosters", e),
            c = null == (n = l.items) ? void 0 : n.find(e => xs(e.id)),
            u = null == (r = l.items) ? void 0 : r.find(e => ks(e.id)),
            d = null == (a = l.items) ? void 0 : a.find(e => "links" === e.id),
            p = null == (i = e.getApplicationState("config").properties.license.feade1d6c3f17748ae4c8d917a1e1068) ? void 0 : i.hdLicenseID,
            h = "number" == typeof p && p > -1,
            f = e.getApplicationState("config").properties.group,
            g = {
                apps: [],
                channels: []
            };
        c && g.apps.push({ ...Ap(c),
            trademarkLink: "https://www.knowledgebase.com/?utm_source=chat_window&utm_medium=referral&utm_campaign=home_screen",
            trademarkLinkAnchor: "Powered by KnowledgeBase"
        }), u && h && (g.apps.push(Ap(u)), e.on("send_helpdesk_form", n => {
            t(n).then(t => e.emit("send_helpdesk_form_success", t)).catch(t => e.emit("send_helpdesk_form_error", t))
        }), e.addView("HelpdeskTicketForm", {
            isLoading: !0,
            hasFetchingError: !1
        })), Te(f) || _e(Fs()).forEach(e => {
            let [t, n] = e;
            const r = f[n];
            r && g.channels.push({
                name: t,
                url: r.button_url_v2
            })
        }), e.addView("Homescreen", g), Td(e, "livechatIntegration", {
            name: "livechat_integration",
            enabled: !0,
            properties: {
                licenseId: e.getApplicationState().license
            }
        }), d && Td(e, "links", {
            enabled: !0,
            name: "links",
            properties: {
                links: d.links
            }
        }), e.setApplicationState({
            header: {
                text: "",
                logo: s,
                backgroundType: "gradient"
            }
        })
    },
    zp = (e, t) => document.referrer ? it(P(document.referrer) || "") : e ? "lc" + e : "orgId" + t,
    Dp = e => {
        const {
            currentChat: t
        } = e.getApplicationState();
        if (!t) throw new Error("Current chat is not set");
        return t
    },
    Fp = (e, t) => {
        const n = t.getChat(e).properties.currentAgent;
        return n ? cf(t, n) : null
    },
    Pp = (e, t) => t.getApplicationState("config").features[e],
    Mp = e => Pp("continuousChat", e).enabled,
    Op = e => Pp("chatHistory", e).enabled,
    Rp = e => ih(e) && !Mp(e),
    jp = (e, t, n) => {
        let {
            authorPredicate: r,
            lastSeenPredicate: a
        } = t;
        const i = n.getEvents(e),
            o = Ze(e => r(e) || !e.seen, ke(a, i), i);
        return Le(r, o)
    },
    $p = (e, t, n) => {
        const r = n.getSessionUserId();
        return jp(e, {
            authorPredicate: e => e.author !== r,
            lastSeenPredicate: e => (e.serverTimestamp || e.timestamp) <= t
        }, n)
    },
    Bp = (e, t, n) => {
        const r = n.getSessionUserId();
        return jp(e, {
            authorPredicate: e => e.author === r,
            lastSeenPredicate: e => e.timestamp <= t
        }, n)
    },
    qp = (e, t, n) => {
        const r = e.getEvent(t, n);
        if ("message_draft" === r.type && null === r.serverId) {
            const n = ye(e => "message_draft" === e.type, e.getEvents(t));
            return r.id === (null == n ? void 0 : n.id) ? e.localize("not_sent_yet") : null
        }
        if (!r.own) return null;
        if (r.failed) return "Message not sent";
        if (r.seen) {
            const r = e.getLastSeenEvent(t);
            return r && n === r.id ? e.localize("message_read") : null
        }
        const a = e.getLastDeliveredEvent(t);
        return a && n === a.id ? e.localize("message_delivered") : null
    },
    Up = e => {
        const t = e.getApplicationState("config");
        return !0 === e.getApplicationState("mobile") ? t.mobileMinimizedType : t.minimizedType
    },
    Lp = e => {
        const {
            config: t
        } = e.getApplicationState();
        return !0 === e.getApplicationState("mobile") ? t.mobileScreenPosition : t.screenPosition
    },
    Np = (e, t) => Op(e) && e.getChat(t).properties.hasMoreHistory,
    Vp = (e, t) => {
        const {
            fakeAgentMessageId: n
        } = e.getChat(t).properties;
        return n ? e.getEvent(t, n) : null
    },
    Hp = (e, t) => !!Vp(e, t),
    Zp = e => {
        const {
            embedded: t,
            actingAsDirectLink: n,
            isInCustomContainer: r,
            isMinimizedForcefullyDisabled: a
        } = e.getApplicationState();
        return !(!t || n || r || a)
    },
    Gp = (e, t) => {
        const {
            active: n,
            properties: {
                queued: r
            }
        } = t.getChat("liveChatChatId");
        if (n || r) return !1;
        const {
            availability: a,
            readyState: i
        } = t.getApplicationState();
        return !(!Mp(t) && "online" !== a) && ("not_ready" === i || (!Zh(t, "maximized") || Te(t.getEvents(e))))
    },
    Yp = (e, t) => {
        if (Op(t)) return !1;
        const {
            availability: n,
            embedded: r,
            actingAsDirectLink: a,
            isInCustomContainer: i,
            defaultWidget: o
        } = t.getApplicationState(), s = t.getChat(e);
        return "livechat" === o && r && !a && !i && !s.active && !s.properties.ended && "offline" === n && !ih(t)
    },
    Wp = e => "connected" === e.getConnectionState(),
    Qp = e => "disconnected" === e.getConnectionState(),
    Jp = e => "reconnecting" === e.getConnectionState() || Qp(e),
    Xp = (e, t) => {
        if (t < 0) return null;
        const n = e[t];
        return n.own && "message" === n.type ? null : "system_message" === n.type || "rich_message_postback" === n.type ? Xp(e, t - 1) : n.properties.quickReplies ? n : null
    },
    Kp = (e, t) => {
        const n = t.getEvents(e),
            r = Xp(n, n.length - 1);
        return r && (r.properties.invitation || t.getChat(e).active) ? r : null
    },
    eh = (e, t) => {
        const {
            availability: n
        } = t.getApplicationState(), {
            active: r,
            properties: {
                queued: a,
                ended: i
            }
        } = t.getChat(e);
        if (a) return t.localize("embedded_waiting_for_operator");
        const o = Fp(e, t);
        return r && o ? t.localize("embedded_chat_with", {
            operator: o.name
        }) : i ? t.localize("embedded_chat_ended") : "online" === n ? t.localize("embedded_chat_now") : ih(t) || Mp(t) ? t.localize("embedded_leave_message") : t.localize("agents_not_available")
    },
    th = (e, t) => {
        var n;
        const r = e.getChat(t),
            a = Mp(e);
        if (e.getApplicationState().limitReached) return null;
        if (yh(e) && !wh(e)) return null;
        if ("chatbotChatId" === t && !r.properties.ended && !1 === (null == (n = Pp("chatbotIntegration", e)) ? void 0 : n.properties.showTextField)) return r.properties.isAnsweringQuestion ? "text" : null;
        if (r.active) {
            var i;
            const n = Th(e),
                r = e.getChat(t).properties.currentAgent;
            return null != n && null != (i = n.properties) && i.useFixedAnswers && (null == n ? void 0 : n.author) === r ? null : "text"
        }
        if (qh(e, t)) return null;
        if (sh(e)) {
            if (ff(e)) {
                const t = ye(e => "form" === e.type, e.getEvents("liveChatChatId"));
                if (t && t.properties.formId === Ns.id) return ah(e) ? "startChatAgain" : "text"
            }
            return null
        }
        return !r.properties.ended || a && !ah(e) && "chatbotChatId" !== t ? a || "offline" !== e.getApplicationState().availability ? Hp(e, "liveChatChatId") ? ah(e) && Pp("preChatAfterGreeting", e).enabled ? "requestPrechat" : ((e, t, n) => {
            const r = Fp(t, e);
            return (null == r ? void 0 : r.properties.isBot) && !n || ch(e)
        })(e, t, r.properties.starting) ? "startChat" : "text" : a ? ah(e) ? "offline" === e.getApplicationState().availability ? null : "requestPrechat" : "text" : a && r.properties.ended ? "text" : null : null : ff(e) && !ah(e) ? "text" : "startChatAgain"
    },
    nh = (e, t) => !!t.getChat(e).properties.starting,
    rh = e => e.getApplicationState("config").theme.name,
    ah = e => e.getApplicationState().config.features.preChatForm.enabled,
    ih = e => e.getApplicationState().config.features.ticketForm.enabled,
    oh = (e, t) => {
        const n = ye(e => "form" === e.type, e.getEvents("liveChatChatId"));
        if (!n) return null;
        const {
            properties: r
        } = n;
        return !r.answered && "ask_for_email" !== r.formId && ("string" != typeof t || r.formType === t) ? n.id : null
    },
    sh = (e, t) => !!oh(e, t),
    lh = e => e.getEvents("liveChatChatId").filter(e => {
        var t;
        return null == (t = e.properties) ? void 0 : t.isPreview
    }),
    ch = e => {
        const {
            properties: {
                groupHasProbableQueue: t
            }
        } = e.getChat("liveChatChatId");
        return !!t
    },
    uh = e => {
        const {
            active: t,
            properties: {
                queued: n,
                ended: r,
                startChatAgainPending: a,
                currentAgent: i
            }
        } = e.getChat("liveChatChatId"), {
            availability: o,
            limitReached: s
        } = e.getApplicationState(), l = Mp(e), c = ih(e);
        return !(!s || c && !l) || "offline" === o && (!(r && !a) && (l ? !i && !n : !t && !n && !c))
    },
    dh = e => {
        const t = Dp(e);
        return Boolean(Fp(t, e)) && !("modern" === rh(e) && sh(e)) && !((e, t) => !!t.getChat(e).properties.queued)(t, e) && !uh(e)
    },
    ph = e => {
        var t;
        return Boolean(null == (t = e.getView("Homescreen")) || null == (t = t.apps) ? void 0 : t.find(e => ks(e.id)))
    },
    hh = e => {
        const t = e.getApplicationState().defaultWidget,
            n = Dp(e);
        return "openAIChatId" === n || "chatbotChatId" === n ? !e.getChat(n).properties.agentActivity && ("Chat" === e.getCurrentView() && Rh(e)) : ("openwidget" !== t || "Chat" === e.getCurrentView()) && (!(!yh(e) || e.getView("Chat/queue")) || !$h(e) && Rh(e))
    },
    fh = e => {
        const t = e.getLastEvent("liveChatChatId");
        return !!t && ("form" === t.type && "ticket" === t.properties.formType && t.properties.answered)
    },
    gh = e => {
        const {
            nonProfitLicense: t
        } = e.getApplicationState("config");
        return t
    },
    mh = e => {
        const {
            actingAsDirectLink: t,
            isInCustomContainer: n,
            mobileWrapper: r,
            embedded: a,
            hideMinimizeButton: i
        } = e.getApplicationState();
        return !t && !n && (r || a) && !i
    },
    _h = e => Boolean(e.getApplicationState("invitation").current),
    bh = e => {
        const {
            lastThread: t,
            currentAgent: n,
            queued: r
        } = e.getChat("liveChatChatId").properties;
        if (!Mp(e) || n || r) return !1;
        return !!!ye(e => {
            let {
                type: n,
                thread: r
            } = e;
            return "email_prompt" === n && r === t
        }, e.getEvents("liveChatChatId"))
    },
    vh = e => {
        const t = Eh(e);
        return e.getChat("liveChatChatId").active && t.some(e => e.properties.welcomeMessage && !e.own)
    },
    yh = e => e.getChat("liveChatChatId").properties.queued,
    wh = e => {
        var t;
        return Boolean(null == (t = Pp("queue", e)) ? void 0 : t.writingInQueueEnabled)
    },
    kh = e => Pp("fileSharing", e).enabled,
    xh = e => !e.getApplicationState("mobile") && Pp("emojiPicker", e).enabled,
    Ch = e => {
        const {
            active: t
        } = e.getChat("liveChatChatId");
        return t && !Jp(e)
    },
    Ih = e => !Jp(e) && !e.getApplicationState("disableSendingMessage"),
    Sh = Ha([e => ii(e, "liveChatChatId"), e => oi(e, "liveChatChatId").properties.lastThread], (e, t) => {
        return Ze(e => e.thread === t, (n = e).length - 1, n);
        var n
    }),
    Eh = e => Sh(e.getState()),
    Ah = Ha([e => Sh(e), e => fi(e)], (e, t) => ye(e => "system" !== e.author && e.author !== t, e)),
    Th = e => Ah(e.getState()),
    zh = (e, t) => {
        if (e.hasEvent("liveChatChatId", t)) {
            const {
                properties: n
            } = e.getEvent("liveChatChatId", t);
            return n.invitation
        }
        return !1
    },
    Dh = e => !e.getApplicationState().mobile && "bar" === Up(e),
    Fh = e => {
        const t = Vp(e, "liveChatChatId");
        return t && t.properties.invitation ? t : null
    },
    Ph = function(e, t) {
        void 0 === t && (t = Fh(e));
        const {
            availability: n,
            invitation: r
        } = e.getApplicationState();
        return !(("offline" !== n || Mp(e)) && !Dh(e)) || (!t || Boolean(t && Ae(t.properties.uniqueId, r.hiddenIds)))
    },
    Mh = function(e, t) {
        void 0 === t && (t = Fh(e));
        const {
            invitation: n
        } = e.getApplicationState();
        return Boolean(t && Ae(t.properties.uniqueId, n.displayedIds))
    },
    Oh = e => {
        const {
            formType: t,
            fields: n,
            answered: r
        } = e.properties, a = n.filter(e => e.answer && e.label);
        return "ticket" !== t && r && Te(a)
    },
    Rh = e => {
        const t = Dp(e),
            n = e.getEvents(t);
        return Te(n) || n.every(e => "form" === e.type && Oh(e))
    },
    jh = e => {
        const t = Dp(e),
            n = e.getEvents(t);
        return Te(n) || n.every(e => "form" === e.type && Oh(e) || e.properties.invitation || e.properties.welcomeMessage)
    },
    $h = e => dh(e) || uh(e) || yh(e),
    Bh = (e, t) => {
        var n;
        return null != (n = e.getEvents(t).find(e => "message_draft" === e.type && null === e.serverId)) ? n : null
    },
    qh = (e, t) => Boolean(Bh(e, t)),
    Uh = e => {
        const {
            embedded: t,
            actingAsDirectLink: n
        } = e.getApplicationState();
        return !t || n ? "direct_link" : "code"
    },
    Lh = Ha([e => Sh(e)], e => e.filter(e => "file" === e.type && !e.delivered && !e.properties.canceled)),
    Nh = e => Lh(e.getState()),
    Vh = e => e.getChat("liveChatChatId").serverId,
    Hh = e => {
        const {
            mobile: t
        } = e.getApplicationState();
        return Pp(t ? "mobileMinimized" : "minimized", e).enabled
    },
    Zh = (e, t) => e.getApplicationState("visibility").state === t,
    Gh = (e, t) => {
        const n = e.getApplicationState("config").properties.license;
        return Object.keys(n).some(e => n[e][t])
    },
    Yh = e => Pp("hideTrademark", e).enabled || "Shopify" === e.getApplicationState("integrationName"),
    Wh = (e, t) => e.getApplicationState("config").properties.license[t],
    Qh = e => {
        const {
            language: t,
            isPreview: n
        } = e.getApplicationState();
        if ("en" !== t || n) return !1;
        const r = Wh(e, "a9f288b2883da20306d30e179067406f");
        return Boolean(null == r ? void 0 : r.transfer_identity_enabled)
    },
    Jh = e => {
        const t = Wh(e, "632cead4b282481a422dd4e1d1567449");
        return {
            url: null == t ? void 0 : t.widget_message_box_moment_url,
            height: null == t ? void 0 : t.widget_message_box_moment_height
        }
    },
    Xh = e => {
        var t;
        const {
            url: n
        } = Jh(e);
        return {
            disabled: !e.getChat("liveChatChatId").active || !Fp("liveChatChatId", e),
            visible: Ep(n) && (null == (t = e.getView("Moment")) || null == (t = t.data) ? void 0 : t.url) !== n
        }
    },
    Kh = e => e.getChat("liveChatChatId").active ? e.getChat("liveChatChatId").properties.lastThread : null,
    ef = e => e.getView("minimized"),
    tf = e => {
        const {
            history: t,
            updatedAt: n
        } = e.getApplicationState("locationHistory");
        return n - (new Date).getTime() > 18e5 ? [] : t
    },
    nf = e => {
        var t;
        return Boolean(null == (t = e.getApplicationState("recommendations")) ? void 0 : t.isVisible)
    },
    rf = e => e.localize(e.getApplicationState("limitReached") || !Mp(e) ? "agents_not_available" : "agents_not_available_continuous"),
    af = e => {
        const t = e.getView("Chat/queue"),
            n = t && t.numberInQueue,
            r = (e => {
                const t = e.localize("user_in_queue"),
                    {
                        fields: n
                    } = e.getView("Chat/prechat");
                if (!n || Te(n)) return t;
                const r = n.find(e => {
                    let {
                        meta: t
                    } = e;
                    return t && "groupSelect" === t
                });
                if (!r || !r.options || Te(r.options)) return t;
                const a = r.options.find(t => {
                    let {
                        groupNumber: n
                    } = t;
                    return n === e.getApplicationState("group")
                });
                return a && a.queueTemplate ? a.queueTemplate : t
            })(e),
            a = r.includes("%minutes%");
        let i = r.replace(/%number%/g, "**" + n + "**"),
            o = null;
        return a && (o = Math.floor(t.waitingTime / 60), i = i.replace(/%minutes%/g, "**" + o + "**")), {
            message: i,
            waitingTime: o
        }
    },
    of = e => {
        if (e.getApplicationState("isPreview")) return !1;
        if (!Pp("rating", e).enabled) return !1;
        if (Jp(e)) return !1;
        const {
            active: t,
            properties: {
                rate: n
            }
        } = e.getChat("liveChatChatId");
        if (!t || n) return !1;
        return (e => {
            const {
                properties: {
                    timestamp: t
                }
            } = e.getChat("liveChatChatId");
            if (!t) return 0;
            const n = Eh(e);
            if (!n || 0 === (null == n ? void 0 : n.length)) return 0;
            const r = ye(e => "system_message" !== e.type, n);
            return r ? r.timestamp - t : 0
        })(e) / 1e3 / 60 > 2 && (e => Eh(e).some(e => {
            let {
                author: t,
                own: n,
                properties: r
            } = e;
            return !n && "system" !== t && !r.invitation && !r.welcomeMessage
        }))(e)
    },
    sf = e => "offline" === e.getApplicationState("availability"),
    lf = e => {
        if (ff(e)) return !1;
        if (!Pp("homeScreen", e).enabled) return !1;
        return !("modern" === rh(e))
    },
    cf = (e, t) => {
        const n = e.getUser(t);
        var r;
        return "openai_bot" === n.id ? { ...n,
            avatar: null != (r = n.avatar) ? r : "https://cdn.files-text.com/api/ow/img/integrations/openai/orb.gif"
        } : n
    },
    uf = (e, t) => {
        if (!t) return "_blank";
        if ("chatbotChatId" !== Dp(e)) return "_blank";
        const {
            page: n
        } = e.getApplicationState();
        return et(t) === et(n.url) ? "_parent" : "_blank"
    },
    df = e => {
        const t = Fh(e);
        return t && t.properties.quickReplies ? t : null
    },
    pf = e => Oe(Fs()).some(t => Boolean(((e, t) => e.getApplicationState("config").properties.group[t])(e, t))),
    hf = e => {
        const {
            page: t
        } = e.getApplicationState(), n = et(t.url);
        return !!n && ("text.com" === n || n.endsWith(".text.com"))
    },
    ff = e => Pp("textApp", e).enabled,
    gf = e => {
        const {
            organizationId: t,
            group: n
        } = e.getApplicationState();
        return "4c8c0751-837f-4a11-928e-047b2d095307" === t && void 0 !== n && (e => 1 === e)(n)
    },
    mf = e => {
        const {
            organizationId: t,
            group: n
        } = e.getApplicationState();
        return "4c8c0751-837f-4a11-928e-047b2d095307" === t && void 0 !== n && (e => 2 === e || 27 === e)(n)
    },
    _f = (e, t) => {
        const n = th(e, t),
            r = e.getApplicationState("privacyPolicyBannerState");
        return (Pp("privacyPolicy", e).enabled || gf(e)) && ("visible" === r || "closing" === r) && !!n && "requestPrechat" !== n
    },
    bf = e => (e => !Eh(e).some(e => {
        let {
            author: t,
            own: n
        } = e;
        return !n && "system" !== t
    }))(e),
    vf = e => {
        const {
            organizationId: t
        } = e.getApplicationState();
        return "5ca64780-6e45-4232-ae2e-da853e5bd06d" !== t && (() => {
            const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return Ps.some(t => e.startsWith(t))
        })()
    },
    yf = e => e.events.length > 0 && Boolean(e.properties.rate),
    wf = e => {
        const t = ke(e => "system_message" === e.type && e.properties.systemMessageType && Vs.includes(e.properties.systemMessageType), e),
            n = ve(e => "system_message" === e.type && e.properties.systemMessageType && Hs.includes(e.properties.systemMessageType), e);
        return {
            lastDeactivationEventIndex: t,
            firstRatingEventIndex: n,
            hasRatingSystemMessages: -1 !== n,
            hasDeactivationEvent: -1 !== t
        }
    },
    kf = e => {
        const {
            hasRatingSystemMessages: t,
            hasDeactivationEvent: n,
            firstRatingEventIndex: r,
            lastDeactivationEventIndex: a
        } = e;
        return t && (!n || r < a)
    },
    xf = e => e.filter(e => !("system_message" === e.type && e.properties.systemMessageType && Hs.includes(e.properties.systemMessageType))),
    Cf = (e, t) => e.getEvents("liveChatChatId").some(e => e.thread === t && "form" === e.type && e.properties.formId === Ns.id),
    If = {};

function Sf(e, t) {
    let {
        query: n = {},
        jsonpParam: r = "jsonp",
        callbackName: a
    } = void 0 === t ? {} : t;
    return new Promise((t, i) => {
        Wl().then(o => {
            const s = document.createElement("script"),
                l = a || Se(If);
            If[l] = !0;
            const c = "__" + l;
            window[c] = e => {
                delete If[l], delete window[c], Ql(s), t(e)
            }, s.src = e + "?" + O({ ...n,
                [r]: c
            }), s.addEventListener("error", () => {
                setTimeout(() => i(new Error("JSONP request failed.")), 100)
            }), o.appendChild(s)
        })
    })
}
const Ef = /\.([a-z]{1,})$/i,
    Af = e => {
        let {
            __priv: t
        } = e;
        const n = {
            enabled: !0,
            x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
            y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
            src: ut(t.group["embedded_chat.eye_grabber.path"])
        };
        if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
            const e = n.src.match(Ef)[1];
            n.srcset = {
                "1x": n.src,
                "2x": n.src.replace(new RegExp("\\." + e, "i"), "-2x." + e)
            }
        }
        return n
    },
    Tf = e => {
        var t;
        return {
            "x-region": null != (t = e.region) ? t : ""
        }
    },
    zf = (e, t) => {
        const n = "get_dynamic_configuration" === e ? "v3.6" : "v3.5";
        return (e => {
            let {
                region: t
            } = e;
            return "https://api" + (e => "fra" === e || "eu-west3" === e ? "-fra" : "")(t) + ".livechatinc.com"
        })(t) + "/" + n + "/customer/action/" + e
    },
    Df = e => {
        let {
            licenseId: t,
            organizationId: n
        } = e;
        return Sf("https://api.livechatinc.com/global-mapper/" + (t ? "lc_license_id/" + t : "organization_id/" + n) + "/region", {
            callbackName: "lc_region"
        }).then(e => e.region).catch(() => {
            const e = new Error("Fetch region failed");
            throw e.code = "FETCH_REGION_FAILED", e
        })
    },
    Ff = function(e, t) {
        let {
            validateDefaultWidget: n = !0
        } = void 0 === t ? {} : t;
        return Sf(zf("get_dynamic_configuration", e), {
            query: { ...Tf(e),
                ...e.organizationId ? {
                    organization_id: e.organizationId
                } : {},
                ...e.licenseId ? {
                    license_id: e.licenseId
                } : {},
                client_id: null != "c5e4f61e1a6c3b1521b541bc5c5a2ac5" ? "c5e4f61e1a6c3b1521b541bc5c5a2ac5" : "",
                url: ct(e.url, ["cw_configurator"]),
                ..."number" == typeof e.groupId && {
                    group_id: e.groupId
                },
                ...e.channelType && {
                    channel_type: e.channelType
                },
                ...e.skipCodeInstallationTracking && {
                    test: 1
                },
                ...e.productName && {
                    origin: e.productName
                },
                ...e.integrationName && {
                    implementation_type: e.integrationName
                }
            }
        }).then(t => {
            if (t.error) switch (t.error.type) {
                case "misdirected_request":
                    return Ff({ ...e,
                        region: t.error.data.region
                    });
                case "license_not_found":
                    {
                        if ("direct_link" === e.channelType) {
                            const t = O({
                                utm_source: "expired_chat_link",
                                utm_medium: "referral",
                                utm_campaign: "lc_" + e.licenseId
                            });
                            window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                        }
                        const t = new Error("License not found");
                        throw t.code = "LICENSE_NOT_FOUND",
                        t
                    }
                default:
                    {
                        const e = new Error(t.error.message);
                        throw e.code = t.error.type.toUpperCase(),
                        e
                    }
            }
            if (19196658 !== e.licenseId && "4c8c0751-837f-4a11-928e-047b2d095307" !== e.organizationId || (t.default_widget = "livechat"), n && "livechat" !== t.default_widget) {
                const e = new Error("The 'default_widget' is not 'livechat', but instead: '" + t.default_widget + "'");
                throw e.code = "DEFAULT_WIDGET_NOT_LIVECHAT", e.organizationId = t.organization_id, e.defaultWidget = t.default_widget, e
            }
            if (!t.livechat_active) {
                if ("direct_link" === e.channelType) {
                    const t = O({
                        utm_source: "expired_chat_link",
                        utm_medium: "referral",
                        utm_campaign: "lc_" + e.licenseId
                    });
                    window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                }
                const t = new Error("License expired");
                throw t.code = "LICENSE_EXPIRED", t
            }
            if (!t.livechat.domain_allowed) {
                const e = new Error("Current domain is not added to the allowlist.");
                throw e.code = "DOMAIN_NOT_ALLOWED", e
            }
            return r = t, a = e.region, {
                organizationId: r.organization_id,
                groupId: r.livechat.group_id,
                clientLimitExceeded: r.livechat.client_limit_exceeded,
                configVersion: r.livechat.config_version,
                localizationVersion: r.livechat.localization_version,
                onlineGroupIds: r.livechat.online_group_ids || [],
                region: a || null,
                language: r.livechat.language
            };
            var r, a
        })
    },
    Pf = e => {
        var t, n;
        const r = "feade1d6c3f17748ae4c8d917a1e1068",
            a = Boolean(null == (t = e.properties.group[r]) ? void 0 : t.forwardTicketFormToHelpdesk),
            i = "1" === e.__priv.license["helpdesk.inbound_forwarding"],
            o = null == (n = e.properties.license[r]) ? void 0 : n.hdLicenseID;
        return "number" == typeof o && o > -1 && (a || i)
    },
    Mf = (e, t) => t.includes(e) ? e : t[0],
    Of = e => Sf(zf("get_configuration", e), {
        callbackName: "lc_static_config",
        query: {
            organization_id: e.organizationId,
            version: e.version,
            ...Tf(e),
            ..."number" == typeof e.groupId && {
                group_id: e.groupId
            }
        }
    }).then(e => (e => {
        const {
            buttons: t,
            allowed_domains: n,
            prechat_form: r,
            ticket_form: a,
            __priv: i,
            properties: o,
            ...s
        } = e, l = "0" === i.group.tickets_enabled, c = !Boolean(i.disable_native_tickets) && Boolean(a), u = Pf(e), d = l || u || c;
        return { ...s,
            ...r && {
                prechatForm: tr(r)
            },
            ...d && a && {
                ticketForm: tr(a)
            },
            properties: o,
            buttons: t.map(e => "image" === e.type ? {
                id: e.id,
                type: e.type,
                onlineValue: ut(e.online_value),
                offlineValue: ut(e.offline_value)
            } : {
                id: e.id,
                type: e.type,
                onlineValue: e.online_value,
                offlineValue: e.offline_value
            }),
            ...n && {
                allowedDomains: n
            },
            __unsafeProperties: { ...i.s && {
                    s: !0
                },
                ...i.enable_textapp && {
                    enableTextApp: !0
                },
                group: {
                    chatBoosters: i.group.chat_boosters,
                    disabledMinimized: "1" === i.group["chat_window.disable_minimized"],
                    disabledMinimizedOnMobile: "1" === i.group["chat_window.mobile_disable_minimized"],
                    disabledOnMobile: "1" === i.group["chat_window.hide_on_mobile"],
                    eyeCatcher: "1" === i.group["embedded_chat.display_eye_catcher"] ? Af(e) : {
                        enabled: !1
                    },
                    hasAgentAvatarsEnabled: "1" === i.group["chat_window.display_avatar"],
                    hasCustomMobileSettings: "1" === i.group["chat_window.custom_mobile_settings"],
                    hasHiddenTrademark: "1" === i.group["chat_window.hide_trademark"],
                    hasSoundsEnabled: "0" === i.group["chat_window.disable_sounds"],
                    initiallyHidden: "1" === i.group["chat_window.hide_on_init"] || "1" === i.group["chat_window.disable_minimized"],
                    initiallyHiddenOnMobile: "1" === i.group["chat_window.mobile_hide_on_init"] || "1" === i.group["chat_window.mobile_disable_minimized"],
                    hideOnInit: "1" === i.group["chat_window.hide_on_init"],
                    language: i.group.language,
                    linksUnfurlingEnabled: "1" === i.group.links_unfurling,
                    privacyPolicy: {
                        enabled: "1" === i.group["privacy_policy.enabled"],
                        text: i.group["privacy_policy.text"]
                    },
                    logo: "1" === i.group["chat_window.display_logo"] ? {
                        enabled: !0,
                        src: i.group["chat_window.logo_path"]
                    } : {
                        enabled: !1
                    },
                    minimizedType: Mf(i.group["chat_window.theme.minimized"], ["circle", "bar"]),
                    minimizedTypeOnMobile: i.group["chat_window.mobile_minimized_theme"],
                    offlineMessagesEnabled: l,
                    offsetX: parseInt(i.group["chat_window.offset_x"]),
                    offsetXOnMobile: parseInt(i.group["chat_window.mobile_offset_x"]),
                    offsetY: parseInt(i.group["chat_window.offset_y"]),
                    offsetYOnMobile: parseInt(i.group["chat_window.mobile_offset_y"]),
                    prechatFormAfterGreetingEnabled: "1" === i.group.pre_chat_survey_after_greeting,
                    ratingEnabled: "1" === i.group["rate_me.enabled"],
                    screenPosition: Mf(i.group["chat_window.screen_position"], ["right", "left"]),
                    screenPositionOnMobile: Mf(i.group["chat_window.mobile_screen_position"], ["right", "left"]),
                    transcriptButtonEnabled: "1" === i.group["chat_window.display_transcript_button"],
                    theme: {
                        name: Mf(i.group["chat_window.new_theme.name"], ["smooth", "modern"]),
                        variant: Mf(i.group["chat_window.new_theme.variant"], ["light", "dark"]),
                        customJson: i.group["chat_window.new_theme.custom_json"],
                        agentbarBackgroundColor: i.group["chat_window.new_theme.agentbar_background_color"],
                        agentbarText: i.group["chat_window.new_theme.agentbar_text"],
                        agentMessageColorBackground: i.group["chat_window.new_theme.agent_message_color_background"],
                        agentMessageColorText: i.group["chat_window.new_theme.agent_message_color_text"],
                        backgroundColor: i.group["chat_window.new_theme.background_color"],
                        ctaColor: i.group["chat_window.new_theme.cta_color"],
                        minimizedColorBackground: i.group["chat_window.new_theme.minimized_color_background"],
                        minimizedColorIcon: i.group["chat_window.new_theme.minimized_color_icon"],
                        minimizedColorText: i.group["chat_window.new_theme.minimized_color_text"],
                        systemMessageColor: i.group["chat_window.new_theme.system_message_color"],
                        titlebarBackgroundColor: i.group["chat_window.new_theme.titlebar_background_color"],
                        titlebarText: i.group["chat_window.new_theme.titlebar_text"],
                        visitorMessageColorBackground: i.group["chat_window.new_theme.visitor_message_color_background"],
                        visitorMessageColorText: i.group["chat_window.new_theme.visitor_message_color_text"]
                    }
                },
                license: {
                    creditCardMaskingEnabled: "1" === i.license.mask_credit_cards,
                    nonProfit: "1" === i.license.non_profit,
                    licenseinboundForwardingToHelpdeskEnabled: "1" === i.license["helpdesk.inbound_forwarding"]
                },
                helpdeskIntegrationEnabled: u,
                ticketFormMode: (p = e, Pf(p) ? "helpdesk" : "0" === p.__priv.group.tickets_enabled ? "offline_message" : "livechat")
            }
        };
        var p
    })(e)),
    Rf = e => Sf(zf("get_localization", e), {
        callbackName: "lc_localization",
        query: {
            organization_id: e.organizationId,
            version: e.version,
            language: e.language,
            ...Tf(e),
            ..."number" == typeof e.groupId && {
                group_id: e.groupId
            }
        }
    }).then(e => Fe(e => e.toLowerCase(), e));
export {
    Fu as $, K as A, ms as B, es as C, de as D, ru as E, oi as F, xi as G, ju as H, Mp as I, _h as J, Up as K, is as L, tu as M, Bu as N, hp as O, Op as P, Np as Q, rs as R, as as S, Eh as T, De as U, lf as V, Ou as W, Te as X, be as Y, Ie as Z, fe as _, lt as a, ji as a$, oe as a0, Z as a1, me as a2, Is as a3, Vu as a4, su as a5, Nu as a6, Ue as a7, Se as a8, vu as a9, Ve as aA, Fc as aB, Zu as aC, Fe as aD, Ml as aE, Ee as aF, Me as aG, Ra as aH, Fp as aI, ih as aJ, fp as aK, sd as aL, ld as aM, Yu as aN, ut as aO, Wl as aP, zd as aQ, Tp as aR, ph as aS, Ts as aT, sn as aU, N as aV, he as aW, Q as aX, Di as aY, Fi as aZ, Ri as a_, Ph as aa, lu as ab, gs as ac, wi as ad, ah as ae, Yd as af, bd as ag, si as ah, os as ai, id as aj, rd as ak, Ae as al, Hh as am, Pu as an, Mu as ao, cp as ap, pp as aq, Es as ar, Jl as as, Ql as at, Yl as au, Ge as av, As as aw, Ec as ax, tt as ay, Ce as az, tp as b, Al as b$, eo as b0, no as b1, qi as b2, Ui as b3, Ni as b4, Xa as b5, Ai as b6, Wa as b7, zi as b8, Ki as b9, ja as bA, Ti as bB, $i as bC, Ei as bD, li as bE, Xe as bF, ui as bG, Re as bH, ye as bI, hn as bJ, Pe as bK, pn as bL, Ci as bM, un as bN, io as bO, co as bP, Au as bQ, je as bR, ou as bS, Zs as bT, se as bU, qe as bV, Ys as bW, Gs as bX, Fl as bY, Dc as bZ, zc as b_, to as ba, ro as bb, Ji as bc, ao as bd, Xi as be, Vi as bf, Hi as bg, Qi as bh, ti as bi, di as bj, Ja as bk, Qa as bl, dn as bm, Li as bn, ze as bo, qa as bp, Oe as bq, Pi as br, Mi as bs, Oi as bt, ve as bu, Bi as bv, Gi as bw, Zi as bx, Wi as by, Yi as bz, ge as c, He as c$, Qe as c0, Mr as c1, uc as c2, Dl as c3, $l as c4, ql as c5, Rl as c6, Ac as c7, gp as c8, Ll as c9, au as cA, np as cB, ks as cC, xp as cD, Pp as cE, wc as cF, vc as cG, yc as cH, _c as cI, mc as cJ, $c as cK, Bc as cL, Uc as cM, jc as cN, Oc as cO, Mc as cP, Rc as cQ, qc as cR, Pc as cS, Be as cT, et as cU, _d as cV, ef as cW, Xd as cX, od as cY, Gd as cZ, Mh as c_, ad as ca, du as cb, uf as cc, kc as cd, cu as ce, uu as cf, rh as cg, Qh as ch, ps as ci, Ip as cj, jd as ck, lc as cl, hs as cm, yp as cn, cc as co, rt as cp, $d as cq, Bd as cr, pd as cs, Gh as ct, vd as cu, Dp as cv, Vh as cw, Yh as cx, mh as cy, Oa as cz, ku as d, Kh as d$, Lp as d0, Wc as d1, Qc as d2, Xc as d3, Jc as d4, Vc as d5, Hc as d6, Zc as d7, Yc as d8, Gc as d9, Jp as dA, Ih as dB, Xh as dC, xh as dD, wl as dE, zp as dF, Ms as dG, xd as dH, hf as dI, ff as dJ, mf as dK, vf as dL, Os as dM, Cp as dN, af as dO, of as dP, uh as dQ, rf as dR, yh as dS, jh as dT, sh as dU, Ga as dV, Ns as dW, cf as dX, fd as dY, wd as dZ, iu as d_, nf as da, bu as db, pu as dc, fu as dd, mu as de, _u as df, gu as dg, hu as dh, Fh as di, eh as dj, kh as dk, Ch as dl, gc as dm, Ha as dn, Wd as dp, U as dq, Nh as dr, Bp as ds, gf as dt, th as du, op as dv, Eu as dw, hd as dx, Jh as dy, td as dz, Td as e, xt as e$, zh as e0, hc as e1, ls as e2, Kp as e3, _f as e4, dh as e5, gh as e6, hh as e7, Le as e8, st as e9, an as eA, tn as eB, rn as eC, nn as eD, Xt as eE, Jt as eF, Wt as eG, Fn as eH, Yt as eI, en as eJ, Kt as eK, Ct as eL, fn as eM, Bt as eN, Mt as eO, dr as eP, ur as eQ, cr as eR, Ht as eS, Dt as eT, $t as eU, Ut as eV, _t as eW, bt as eX, yt as eY, wt as eZ, kt as e_, xs as ea, df as eb, Rp as ec, Il as ed, hl as ee, Sp as ef, Oh as eg, qh as eh, qp as ei, wp as ej, Th as ek, Us as el, mt as em, gt as en, ht as eo, pt as ep, ft as eq, Ot as er, on as es, vt as et, Ft as eu, Lt as ev, Gt as ew, Tt as ex, Qt as ey, Zt as ez, nu as f, fc as f$, It as f0, St as f1, Et as f2, At as f3, zt as f4, Pt as f5, Rt as f6, jt as f7, qt as f8, Nt as f9, Id as fA, fh as fB, Vd as fC, Ld as fD, Od as fE, vh as fF, G as fG, lp as fH, pe as fI, Vp as fJ, Uh as fK, us as fL, ud as fM, nd as fN, bf as fO, Pd as fP, ed as fQ, ss as fR, lh as fS, Md as fT, Gp as fU, ip as fV, cs as fW, Hd as fX, bh as fY, Zd as fZ, fs as f_, Vt as fa, Zp as fb, ue as fc, ce as fd, Qp as fe, $u as ff, ns as fg, ts as fh, yd as fi, Qd as fj, Yp as fk, cd as fl, Dd as fm, Hp as fn, Cd as fo, kd as fp, pf as fq, qd as fr, Wp as fs, $p as ft, Nd as fu, nh as fv, Ru as fw, Fd as fx, Ad as fy, ds as fz, ep as g, vs as g0, it as g1, ke as g2, qs as g3, Bs as g4, Ls as g5, Rs as g6, js as g7, $s as g8, Df as h, Zh as i, Ff as j, Of as k, Rf as l, ne as m, zs as n, $e as o, ee as p, Ed as q, Kd as r, Sd as s, Su as t, dt as u, yu as v, _e as w, Ss as x, re as y, te as z
};