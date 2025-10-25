import {
    p as e,
    y as t,
    z as n,
    A as i,
    m as r,
    u as o,
    D as a,
    E as s,
    x as l,
    f as c,
    F as u,
    L as d,
    G as p,
    H as f,
    I as m,
    J as h,
    K as g,
    N as y,
    O as v,
    P as w,
    Q as b,
    T as k,
    U as x,
    V as S,
    W as I,
    X as z,
    Y as E,
    Z as _,
    _ as C,
    $ as F,
    a0 as A,
    a1 as P,
    a2 as T,
    a3 as O,
    a4 as M,
    l as D,
    a5 as N,
    a6 as L,
    h as V,
    j as R,
    k as W,
    a7 as j,
    a8 as q,
    a9 as U,
    i as G,
    aa as H,
    ab as B,
    ac as $,
    ad as Z,
    ae as J,
    af as Y,
    ag as X,
    ah as K,
    ai as Q,
    aj as ee,
    ak as te,
    al as ne,
    am as ie,
    an as re,
    ao as oe,
    ap as ae,
    aq as se,
    ar as le
} from "./3.BD1ZN3cS.chunk.js";
import {
    g as ce,
    i as ue,
    a as de,
    d as pe
} from "./6.CKlS54Ol.chunk.js";
import {
    g as fe,
    d as me,
    b as he,
    m as ge,
    l as ye,
    f as ve,
    t as we,
    a as be,
    n as ke,
    o as xe,
    r as Se,
    c as Ie,
    e as ze,
    h as Ee
} from "./5.8dnJ5-bs.chunk.js";
import {
    f as _e,
    a as Ce,
    i as Fe,
    m as Ae,
    c as Pe,
    r as Te,
    C as Oe,
    u as Me,
    b as De,
    e as Ne,
    h as Le,
    j as Ve,
    k as Re,
    l as We,
    n as je,
    o as qe,
    g as Ue,
    q as Ge
} from "./2.D03LlXhc.chunk.js";
import {
    d as He
} from "./11.Gv78iMd6.chunk.js";
import {
    i as Be
} from "./12.DJPUQwQu.chunk.js";
const $e = {};
const Ze = fe((...e) => (t, n) => {
    if (0 !== t) return;
    const i = e.length;
    if (0 === i) return n(0, () => {}), n(1, []), void n(2);
    let r = i,
        o = i,
        a = i;
    const s = new Array(i),
        l = new Array(i),
        c = (e, t) => {
            if (0 !== e)
                for (let n = 0; n < i; n++) l[n](e, t)
        };
    e.forEach((e, t) => {
        s[t] = $e, e(0, (e, u) => {
            if (0 === e) l[t] = u, 0 == --r && n(0, c);
            else if (1 === e) {
                const e = o ? s[t] === $e ? --o : o : 0;
                if (s[t] = u, 0 === e) {
                    const e = new Array(i);
                    for (let t = 0; t < i; ++t) e[t] = s[t];
                    n(1, e)
                }
            } else 2 === e ? 0 == --a && n(2) : n(e, u)
        })
    })
});
const Je = fe(e => t => (n, i) => {
    if (0 !== n) return;
    let r, o = 0;
    t(0, (t, n) => {
        0 === t ? (r = n, i(t, n)) : 1 === t && o < e ? (o++, r(1)) : i(t, n)
    })
});

function Ye(e, t) {
    return function(t, n) {
        if (0 === t) {
            var i = 0,
                r = setTimeout((function() {
                    n(1, i++), n(2)
                }), e instanceof Date ? e - Date.now() : e);
            n(0, (function(e) {
                2 === e && clearTimeout(r)
            }))
        }
    }
}

function Xe(e, t) {
    return e + t
}
const Ke = e => {
        let {
            code: t,
            message: n
        } = e;
        const i = new Error(n);
        return i.code = t, i
    },
    Qe = (e, t) => o("" + ((e, t) => "https://accounts.livechatinc.com" + (e => {
        let {
            uniqueGroups: t,
            organizationId: n,
            groupId: i
        } = e;
        return t ? "/v2/customer/" + n + "/" + i + "/token" : "/v2/customer/token"
    })(e))(e), {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            response_type: "token",
            grant_type: "cookie",
            client_id: e.clientId,
            organization_id: e.organizationId,
            redirect_uri: ce(String(window.location)) + window.location.pathname
        })
    }).then(e => e.json()).then(t => ((e, t) => {
        if ("identity_exception" in e) throw Ke({
            code: "SSO_IDENTITY_EXCEPTION",
            message: e.identity_exception
        });
        if ("oauth_exception" in e) throw Ke({
            code: "SSO_OAUTH_EXCEPTION",
            message: e.oauth_exception
        });
        return {
            accessToken: e.access_token,
            entityId: e.entity_id,
            expiresIn: 1e3 * e.expires_in,
            tokenType: e.token_type,
            creationDate: Date.now(),
            organizationId: t
        }
    })(t, e.organizationId)),
    et = e => {
        let {
            organizationId: t,
            clientId: n
        } = e;
        if ("string" != typeof t || "string" != typeof n) throw new Error("You need to pass valid configuration object: { organizationId, clientId }.")
    },
    tt = (e, t, n) => {
        et(e);
        const i = a(n),
            r = "" + (e.tokenStoragePrefix || "@@lc_auth_token:") + e.organizationId + (e.uniqueGroups ? ":" + e.groupId : "");
        let o = null,
            s = null,
            l = i.getItem(r).then(e => {
                null !== l && (l = null, e && (s = JSON.parse(e)))
            });
        const c = () => (o = Qe(e).then(e => (o = null, i.setItem(r, JSON.stringify(e)), s = e, e), e => {
                throw o = null, e
            }), o),
            u = () => o || (s && !(e => {
                let {
                    creationDate: t,
                    expiresIn: n
                } = e;
                return Date.now() >= t + n
            })(s) ? Promise.resolve(s) : l ? l.then(u) : c()),
            d = () => l ? l.then(d) : Promise.resolve(!!s);
        return {
            getFreshToken: c,
            getToken: u,
            hasToken: d,
            invalidate: () => (s = null, l = null, i.removeItem(r))
        }
    },
    nt = (e, t) => p(e, "visibility").state === t,
    it = e => k(e).some(e => {
        if ("form" !== e.type) return !1;
        const {
            fields: t
        } = e.properties;
        return t.some(e => "group_chooser" === e.type)
    }),
    rt = n => {
        const i = e(c(n, e => nt(e, "maximized")), Je(1), ve(Boolean));
        e(i, we(1), ve(() => !Math.floor(1e3 * Math.random())), be(() => (e => {
            f({
                isMessagingModeEnabled: m(e),
                isCustomerInvited: h(e),
                groupAvailability: e.getApplicationState().availability,
                minimizedType: g(e)
            })
        })(n))), e((n => e(s(n, l), t(() => e(c(n, e => u(e, d).active), Je(1), ve(Boolean)))))(n), be(() => (e => {
            const {
                s: t,
                embedded: n,
                testGroup: i,
                actingAsDirectLink: r,
                config: o,
                language: a,
                integrationName: s,
                clientChatNumber: l,
                clientVisitNumber: c,
                wrapperVersion: u
            } = e.getApplicationState(), p = o && o.theme && o.theme.name, f = y() || "none", m = v(), z = w(e), E = !!b(e, d), _ = !!e.getSessionUser().email, C = h(e) ? "invitation" : "other", F = g(e), A = k(e), P = A.find(e => !!e.properties.invitation), T = x(A.filter(e => "message" === e.type || "message_draft" === e.type)), O = S(e);
            I({
                s: t,
                embedded: n,
                themeName: p,
                testGroup: i,
                uniqueGroups: m,
                minimizedType: F,
                language: a || "unknown",
                integrationName: s || "none",
                mobileBridgeType: f,
                chatHistoryEnabled: z,
                hasPreviousChatThreads: E,
                hasGroupChooser: String(it(e)),
                hasBeenImmediatelyQueued: String(e.getChat(d).properties.queued),
                isCustomerEmailSet: _,
                actingAsDirectLink: r,
                chatWidgetWidth: window.innerWidth,
                chatWidgetHeight: window.innerHeight,
                clientChatNumber: l + 1,
                clientVisitNumber: c,
                chatSource: C,
                fromGreeting: !!Ce(!1, "properties.fromGreeting", T),
                homescreenEnabled: O,
                ..."android" === f && u && {
                    wrapper_version: u
                },
                ..."invitation" === C && P && {
                    greetingId: P.properties.id,
                    greetingUniqueId: P.properties.uniqueId,
                    greetingType: P.properties.type,
                    greetingSubtype: P.properties.subtype,
                    greetingAddon: P.properties.addon || "none"
                }
            })
        })(n)))
    };
window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_js_loaded");
const ot = e => new Promise(t => {
        const n = performance.getEntriesByName(e);
        if (!z(n)) return void t(n[0]);
        if ("undefined" == typeof PerformanceObserver) return void t(null);
        const i = setTimeout(() => {
                r.disconnect(), t(null)
            }, 6e4),
            r = new PerformanceObserver(n => {
                const o = E(t => t.name === e, n.getEntries());
                o && (r.disconnect(), clearTimeout(i), t(o))
            });
        r.observe({
            entryTypes: ["paint"]
        })
    }),
    at = () => {
        const e = "lc_get_time_" + _();
        window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
        const [{
            startTime: t
        }] = performance.getEntriesByName(e);
        return performance.clearMarks(e), t
    },
    st = () => {
        if ("undefined" == typeof PerformanceObserver) return null;
        const e = at(),
            t = [],
            n = new PerformanceObserver(e => {
                t.push.apply(t, e.getEntries())
            });
        n.observe({
            entryTypes: ["longtask"]
        });
        const i = () => {
            const n = x(t);
            return n ? (i = n, at() - i.startTime + i.duration) : at() - e;
            var i
        };
        return {
            disconnect: () => n.disconnect(),
            getLongTasks: () => [].concat(t),
            waitForIdle: e => new Promise(r => {
                const o = () => {
                    t.push.apply(t, n.takeRecords());
                    const a = i();
                    a >= e ? r() : setTimeout(o, Math.ceil(e - a))
                };
                o()
            })
        }
    },
    lt = (e, t) => {
        if (!e || !t) return null;
        const n = x(e);
        return n ? Math.max(n.startTime + n.duration, t.startTime) : t.startTime
    },
    ct = () => {
        if (Math.floor(1e3 * Math.random())) return;
        const e = function(e) {
            const t = st();
            return t ? ot(e).then(e => e ? t.waitForIdle(5e3).then(() => (t.disconnect(), t.getLongTasks())) : null) : Promise.resolve(null)
        }("first-paint");
        return {
            getLogs: () => Promise.all([e, ot("first-paint")]).then(e => {
                let [t, n] = e;
                return C(e => {
                    return e && (t = 2, Number(e.toFixed(t)));
                    var t
                }, {
                    totalBlockingTime: t && (i = t.map(e => e.duration), i.reduce(Xe, 0)),
                    firstContentfulPaint: null == n ? void 0 : n.startTime,
                    timeToInteractive: lt(t, n)
                });
                var i
            })
        }
    },
    ut = new RegExp("(" + ["BetterJsPop", "LOCAL_STORAGE is null", "Can't find variable: auto", "Can't find variable: ext", "Can't find variable: $", "_avast_submit", "No license or organization found in the URL.", "getNewsReadStatus4Vivo", "is banned!", "Object Not Found Matching Id"].join("|") + ")"),
    dt = new RegExp("(" + ["chrome-extension://", "https://www.smybeds.com/"].join("|") + ")"),
    pt = e => {
        if (e.message && ut.test(e.message) || e.stack && dt.test(e.stack)) return !0;
        try {
            const t = JSON.stringify(e);
            if (t && ut.test(t)) return !0
        } catch (t) {}
        return !1
    };
window.addEventListener("error", e => {
    let {
        error: t
    } = e;
    if (t && !pt(t))
        if (t.message && -1 !== t.message.indexOf("Incorrect locale information provided")) {
            const e = navigator.language || navigator.userLanguage || "en-US";
            F("onerror", t, {
                "navigator.language": navigator.language,
                "navigator.userLanguage": navigator.userLanguage,
                locale: e,
                err: (() => {
                    try {
                        return new Intl.Locale(e), !1
                    } catch (t) {
                        return !0
                    }
                })()
            })
        } else F("onerror", t)
}), window.addEventListener("unhandledrejection", e => {
    e && e.reason && (pt(e.reason) || F("unhandledrejection", e.reason))
});
const ft = e => e.some(Fe),
    mt = (o, a) => {
        const s = e(function() {
            const e = ye(() => !!document.hasFocus && document.hasFocus()),
                t = r(() => !0)(he(window, "focus")),
                n = r(() => !1)(he(window, "blur"));
            return ge(e, t, n)
        }(), A);
        if (!a) return void e(s, be(e => {
            o.setApplicationState({
                pageFocused: e,
                applicationFocused: e
            })
        }));
        const l = (c = a, e(me(() => i(Promise.race([c.call("isFocused"), new Promise(e => {
            return n = "focus", i = e, void(t = c).on(n, (function e(r) {
                t.off(n, e), i(r)
            }));
            var t, n, i
        })]))), t(t => e(_e(c, "focus"), n(t)))));
        var c;
        e(s, be(e => {
            o.setApplicationState({
                applicationFocused: e
            }), a.emit("focus", e)
        })), e(Ze(s, l), He(50), r(ft), P(), be(e => {
            o.setApplicationState({
                pageFocused: e
            })
        }))
    },
    ht = e => "function" == typeof e.start && "function" == typeof e.stop,
    gt = e => {
        ht(e) ? e.start(0) : e.noteOn(0)
    },
    yt = () => {
        const e = new(window.AudioContext || window.webkitAudioContext);
        let t = !0,
            n = [];
        const i = t => new Promise((n, i) => {
                e.decodeAudioData(t, n, i)
            }),
            r = t => ({
                play: () => {
                    const n = e.createBufferSource();
                    n.connect(e.destination), n.buffer = t;
                    return {
                        playback: new Promise((t, i) => {
                            if (n.onended = () => t(), gt(n), "running" !== e.state) {
                                const t = new Error("Playback failed, AudioContext is in incorrect state '" + e.state + "'");
                                t.name = "PlaybackError", i(t)
                            }
                        }),
                        stop() {
                            (e => {
                                ht(e) ? e.stop(0) : e.noteOff(0)
                            })(n)
                        }
                    }
                }
            });
        return {
            preload: e => (e => new Promise((t, n) => {
                const i = new XMLHttpRequest;
                i.onload = () => {
                    t(i.response)
                }, i.onerror = n, i.open("GET", e), i.responseType = "arraybuffer", i.send()
            }))(e).then(i).then(r),
            playSound: e => {
                const i = e.play();
                return t && n.push(i), i.playback
            },
            unlock: () => new Promise(i => {
                const r = () => {
                    document.removeEventListener("click", r, !0), t && (n.forEach(e => {
                        e.stop()
                    }), n = [], t = !1), e.resume(), (() => {
                        const t = e.createBuffer(1, 1, 22050),
                            n = e.createBufferSource();
                        n.buffer = t, n.connect(e.destination), gt(n)
                    })(), i()
                };
                document.addEventListener("click", r, !0)
            })
        }
    },
    vt = /\.(\w+)$/i,
    wt = new Audio,
    bt = {
        mp3: "audio/mpeg",
        ogg: "audio/ogg"
    },
    kt = e => {
        const t = (e => {
            const t = e.match(vt);
            return t ? t[1].toLowerCase() : ""
        })(e);
        return t in bt && "" !== wt.canPlayType(bt[t])
    },
    xt = () => "function" == typeof window.webkitAudioContext || "function" == typeof window.AudioContext,
    St = e => new Promise((t, n) => {
        const i = new Audio(e);
        i.onloadeddata = () => {
            t(i)
        }, i.onerror = n
    }),
    It = e => {
        const t = e.play();
        return (n = t) && "function" == typeof n.then ? t : Promise.resolve();
        var n
    },
    zt = () => xt() ? (() => {
        const e = yt(),
            t = Ae(t => {
                const n = e.preload(t);
                return n.catch(ke), n
            });
        return {
            play: n => {
                const i = t(n).then(e.playSound);
                return i.catch(ke), i
            },
            preload: t,
            unlock: () => e.unlock()
        }
    })() : (() => {
        const e = Ae(St);
        return {
            play: t => e(t).then(It),
            preload: e,
            unlock: () => Promise.resolve()
        }
    })(),
    Et = e => {
        const t = zt(),
            n = (e => Object.keys(e).reduce((t, n) => {
                const i = E(e => kt(e), T(e[n]));
                return t[n] = i, t
            }, {}))(e);
        return {
            play: e => {
                const i = n[e];
                t.play(i).then(ke, ke)
            },
            preload: e => {
                const i = n[e];
                t.preload(i).then(ke, ke)
            },
            unlock: () => t.unlock()
        }
    },
    _t = () => {
        const e = Et({
            new_message: ["https://cdn.livechatinc.com/widget/static/media/new_message.CTorF0S8.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.C32z5SiC.mp3"]
        });
        return ue && (window.parent.soundPlayer = e), e.unlock().then(() => function(e, t) {
            let n = 0;
            return function() {
                const i = Date.now();
                i - n >= e && (n = Date.now(), t(...arguments))
            }
        }(2e3, t => {
            e.play(t)
        }))
    },
    Ct = {
        isBridgeActive: !1,
        isIframeActive: null,
        hasIframeUnlocked: !1
    };
var Ft = {
        exports: {}
    },
    At = {},
    Pt = xe,
    Tt = Se;

function Ot(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Mt = 60106,
    Dt = 60107,
    Nt = 60108,
    Lt = 60114,
    Vt = 60109,
    Rt = 60110,
    Wt = 60112,
    jt = 60113,
    qt = 60120,
    Ut = 60115,
    Gt = 60116,
    Ht = 60121,
    Bt = 60117,
    $t = 60119,
    Zt = 60129,
    Jt = 60131;
if ("function" == typeof Symbol && Symbol.for) {
    var Yt = Symbol.for;
    Mt = Yt("react.portal"), Dt = Yt("react.fragment"), Nt = Yt("react.strict_mode"), Lt = Yt("react.profiler"), Vt = Yt("react.provider"), Rt = Yt("react.context"), Wt = Yt("react.forward_ref"), jt = Yt("react.suspense"), qt = Yt("react.suspense_list"), Ut = Yt("react.memo"), Gt = Yt("react.lazy"), Ht = Yt("react.block"), Bt = Yt("react.fundamental"), $t = Yt("react.scope"), Zt = Yt("react.debug_trace_mode"), Jt = Yt("react.legacy_hidden")
}

function Xt(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case Dt:
            return "Fragment";
        case Mt:
            return "Portal";
        case Lt:
            return "Profiler";
        case Nt:
            return "StrictMode";
        case jt:
            return "Suspense";
        case qt:
            return "SuspenseList"
    }
    if ("object" == typeof e) switch (e.$$typeof) {
        case Rt:
            return (e.displayName || "Context") + ".Consumer";
        case Vt:
            return (e._context.displayName || "Context") + ".Provider";
        case Wt:
            var t = e.render;
            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
        case Ut:
            return Xt(e.type);
        case Ht:
            return Xt(e._render);
        case Gt:
            t = e._payload, e = e._init;
            try {
                return Xt(e(t))
            } catch (n) {}
    }
    return null
}
var Kt = Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Qt = {};

function en(e, t) {
    for (var n = 0 | e._threadCount; n <= t; n++) e[n] = e._currentValue2, e._threadCount = n + 1
}
for (var tn = new Uint16Array(16), nn = 0; 15 > nn; nn++) tn[nn] = nn + 1;
tn[15] = 0;
var rn = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    on = Object.prototype.hasOwnProperty,
    an = {},
    sn = {};

function ln(e) {
    return !!on.call(sn, e) || !on.call(an, e) && (rn.test(e) ? sn[e] = !0 : (an[e] = !0, !1))
}

function cn(e, t, n, i, r, o, a) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a
}
var un = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
    un[e] = new cn(e, 0, !1, e, null, !1, !1)
})), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach((function(e) {
    var t = e[0];
    un[t] = new cn(t, 1, !1, e[1], null, !1, !1)
})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
    un[e] = new cn(e, 2, !1, e.toLowerCase(), null, !1, !1)
})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
    un[e] = new cn(e, 2, !1, e, null, !1, !1)
})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
    un[e] = new cn(e, 3, !1, e.toLowerCase(), null, !1, !1)
})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
    un[e] = new cn(e, 3, !0, e, null, !1, !1)
})), ["capture", "download"].forEach((function(e) {
    un[e] = new cn(e, 4, !1, e, null, !1, !1)
})), ["cols", "rows", "size", "span"].forEach((function(e) {
    un[e] = new cn(e, 6, !1, e, null, !1, !1)
})), ["rowSpan", "start"].forEach((function(e) {
    un[e] = new cn(e, 5, !1, e.toLowerCase(), null, !1, !1)
}));
var dn = /[\-:]([a-z])/g;

function pn(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
    var t = e.replace(dn, pn);
    un[t] = new cn(t, 1, !1, e, null, !1, !1)
})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
    var t = e.replace(dn, pn);
    un[t] = new cn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
    var t = e.replace(dn, pn);
    un[t] = new cn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})), ["tabIndex", "crossOrigin"].forEach((function(e) {
    un[e] = new cn(e, 1, !1, e.toLowerCase(), null, !1, !1)
})), un.xlinkHref = new cn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
    un[e] = new cn(e, 1, !1, e.toLowerCase(), null, !0, !0)
}));
var fn = /["'&<>]/;

function mn(e) {
    if ("boolean" == typeof e || "number" == typeof e) return "" + e;
    e = "" + e;
    var t = fn.exec(e);
    if (t) {
        var n, i = "",
            r = 0;
        for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
                case 34:
                    t = "&quot;";
                    break;
                case 38:
                    t = "&amp;";
                    break;
                case 39:
                    t = "&#x27;";
                    break;
                case 60:
                    t = "&lt;";
                    break;
                case 62:
                    t = "&gt;";
                    break;
                default:
                    continue
            }
            r !== n && (i += e.substring(r, n)), r = n + 1, i += t
        }
        e = r !== n ? i + e.substring(r, n) : i
    }
    return e
}

function hn(e, t) {
    var n, i = un.hasOwnProperty(e) ? un[e] : null;
    return (n = "style" !== e) && (n = null !== i ? 0 === i.type : 2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1])), n || function(e, t, n, i) {
        if (null == t || function(e, t, n, i) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                    case "function":
                    case "symbol":
                        return !0;
                    case "boolean":
                        return null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e;
                    default:
                        return !1
                }
            }(e, t, n)) return !0;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }(e, t, i) ? "" : null !== i ? (e = i.attributeName, 3 === (n = i.type) || 4 === n && !0 === t ? e + '=""' : (i.sanitizeURL && (t = "" + t), e + '="' + mn(t) + '"')) : ln(e) ? e + '="' + mn(t) + '"' : ""
}
var gn = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    },
    yn = null,
    vn = null,
    wn = null,
    bn = !1,
    kn = !1,
    xn = null,
    Sn = 0;

function In() {
    if (null === yn) throw Error(Ot(321));
    return yn
}

function zn() {
    if (0 < Sn) throw Error(Ot(312));
    return {
        memoizedState: null,
        queue: null,
        next: null
    }
}

function En() {
    return null === wn ? null === vn ? (bn = !1, vn = wn = zn()) : (bn = !0, wn = vn) : null === wn.next ? (bn = !1, wn = wn.next = zn()) : (bn = !0, wn = wn.next), wn
}

function _n(e, t, n, i) {
    for (; kn;) kn = !1, Sn += 1, wn = null, n = e(t, i);
    return Cn(), n
}

function Cn() {
    yn = null, kn = !1, vn = null, Sn = 0, wn = xn = null
}

function Fn(e, t) {
    return "function" == typeof t ? t(e) : t
}

function An(e, t, n) {
    if (yn = In(), wn = En(), bn) {
        var i = wn.queue;
        if (t = i.dispatch, null !== xn && void 0 !== (n = xn.get(i))) {
            xn.delete(i), i = wn.memoizedState;
            do {
                i = e(i, n.action), n = n.next
            } while (null !== n);
            return wn.memoizedState = i, [i, t]
        }
        return [wn.memoizedState, t]
    }
    return e = e === Fn ? "function" == typeof t ? t() : t : void 0 !== n ? n(t) : t, wn.memoizedState = e, e = (e = wn.queue = {
        last: null,
        dispatch: null
    }).dispatch = Tn.bind(null, yn, e), [wn.memoizedState, e]
}

function Pn(e, t) {
    if (yn = In(), t = void 0 === t ? null : t, null !== (wn = En())) {
        var n = wn.memoizedState;
        if (null !== n && null !== t) {
            var i = n[1];
            e: if (null === i) i = !1;
                else {
                    for (var r = 0; r < i.length && r < t.length; r++)
                        if (!gn(t[r], i[r])) {
                            i = !1;
                            break e
                        }
                    i = !0
                }
            if (i) return n[0]
        }
    }
    return e = e(), wn.memoizedState = [e, t], e
}

function Tn(e, t, n) {
    if (!(25 > Sn)) throw Error(Ot(301));
    if (e === yn)
        if (kn = !0, e = {
                action: n,
                next: null
            }, null === xn && (xn = new Map), void 0 === (n = xn.get(t))) xn.set(t, e);
        else {
            for (t = n; null !== t.next;) t = t.next;
            t.next = e
        }
}

function On() {}
var Mn = null,
    Dn = {
        readContext: function(e) {
            var t = Mn.threadID;
            return en(e, t), e[t]
        },
        useContext: function(e) {
            In();
            var t = Mn.threadID;
            return en(e, t), e[t]
        },
        useMemo: Pn,
        useReducer: An,
        useRef: function(e) {
            yn = In();
            var t = (wn = En()).memoizedState;
            return null === t ? (e = {
                current: e
            }, wn.memoizedState = e) : t
        },
        useState: function(e) {
            return An(Fn, e)
        },
        useLayoutEffect: function() {},
        useCallback: function(e, t) {
            return Pn((function() {
                return e
            }), t)
        },
        useImperativeHandle: On,
        useEffect: On,
        useDebugValue: On,
        useDeferredValue: function(e) {
            return In(), e
        },
        useTransition: function() {
            return In(), [function(e) {
                e()
            }, !1]
        },
        useOpaqueIdentifier: function() {
            return (Mn.identifierPrefix || "") + "R:" + (Mn.uniqueID++).toString(36)
        },
        useMutableSource: function(e, t) {
            return In(), t(e._source)
        }
    },
    Nn = "http://www.w3.org/1999/xhtml";
var Ln = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    },
    Vn = Pt({
        menuitem: !0
    }, Ln),
    Rn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Wn = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach((function(e) {
    Wn.forEach((function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e]
    }))
}));
var jn = /([A-Z])/g,
    qn = /^ms-/,
    Un = Tt.Children.toArray,
    Gn = Kt.ReactCurrentDispatcher,
    Hn = {
        listing: !0,
        pre: !0,
        textarea: !0
    },
    Bn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    $n = {},
    Zn = {};
var Jn = Object.prototype.hasOwnProperty,
    Yn = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null,
        suppressHydrationWarning: null
    };

function Xn(e, t) {
    if (void 0 === e) throw Error(Ot(152, Xt(t) || "Component"))
}

function Kn(e, t, n) {
    function i(i, r) {
        var o = r.prototype && r.prototype.isReactComponent,
            a = function(e, t, n, i) {
                if (i && ("object" == typeof(i = e.contextType) && null !== i)) return en(i, n), i[n];
                if (e = e.contextTypes) {
                    for (var r in n = {}, e) n[r] = t[r];
                    t = n
                } else t = Qt;
                return t
            }(r, t, n, o),
            s = [],
            l = !1,
            c = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {
                    if (null === s) return null
                },
                enqueueReplaceState: function(e, t) {
                    l = !0, s = [t]
                },
                enqueueSetState: function(e, t) {
                    if (null === s) return null;
                    s.push(t)
                }
            };
        if (o) {
            if (o = new r(i.props, a, c), "function" == typeof r.getDerivedStateFromProps) {
                var u = r.getDerivedStateFromProps.call(null, i.props, o.state);
                null != u && (o.state = Pt({}, o.state, u))
            }
        } else if (yn = {}, o = r(i.props, a, c), null == (o = _n(r, i.props, o, a)) || null == o.render) return void Xn(e = o, r);
        if (o.props = i.props, o.context = a, o.updater = c, void 0 === (c = o.state) && (o.state = c = null), "function" == typeof o.UNSAFE_componentWillMount || "function" == typeof o.componentWillMount)
            if ("function" == typeof o.componentWillMount && "function" != typeof r.getDerivedStateFromProps && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && "function" != typeof r.getDerivedStateFromProps && o.UNSAFE_componentWillMount(), s.length) {
                c = s;
                var d = l;
                if (s = null, l = !1, d && 1 === c.length) o.state = c[0];
                else {
                    u = d ? c[0] : o.state;
                    var p = !0;
                    for (d = d ? 1 : 0; d < c.length; d++) {
                        var f = c[d];
                        null != (f = "function" == typeof f ? f.call(o, u, i.props, a) : f) && (p ? (p = !1, u = Pt({}, u, f)) : Pt(u, f))
                    }
                    o.state = u
                }
            } else s = null;
        if (Xn(e = o.render(), r), "function" == typeof o.getChildContext && "object" == typeof(i = r.childContextTypes)) {
            var m = o.getChildContext();
            for (var h in m)
                if (!(h in i)) throw Error(Ot(108, Xt(r) || "Unknown", h))
        }
        m && (t = Pt({}, t, m))
    }
    for (; Tt.isValidElement(e);) {
        var r = e,
            o = r.type;
        if ("function" != typeof o) break;
        i(r, o)
    }
    return {
        child: e,
        context: t
    }
}
var Qn = function() {
    function e(e, t, n) {
        Tt.isValidElement(e) ? e.type !== Dt ? e = [e] : (e = e.props.children, e = Tt.isValidElement(e) ? [e] : Un(e)) : e = Un(e), e = {
            type: null,
            domNamespace: Nn,
            children: e,
            childIndex: 0,
            context: Qt,
            footer: ""
        };
        var i = tn[0];
        if (0 === i) {
            var r = tn,
                o = 2 * (i = r.length);
            if (!(65536 >= o)) throw Error(Ot(304));
            var a = new Uint16Array(o);
            for (a.set(r), (tn = a)[0] = i + 1, r = i; r < o - 1; r++) tn[r] = r + 1;
            tn[o - 1] = 0
        } else tn[0] = tn[i];
        this.threadID = i, this.stack = [e], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = t, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = [], this.uniqueID = 0, this.identifierPrefix = n && n.identifierPrefix || ""
    }
    var t = e.prototype;
    return t.destroy = function() {
        if (!this.exhausted) {
            this.exhausted = !0, this.clearProviders();
            var e = this.threadID;
            tn[e] = tn[0], tn[0] = e
        }
    }, t.pushProvider = function(e) {
        var t = ++this.contextIndex,
            n = e.type._context,
            i = this.threadID;
        en(n, i);
        var r = n[i];
        this.contextStack[t] = n, this.contextValueStack[t] = r, n[i] = e.props.value
    }, t.popProvider = function() {
        var e = this.contextIndex,
            t = this.contextStack[e],
            n = this.contextValueStack[e];
        this.contextStack[e] = null, this.contextValueStack[e] = null, this.contextIndex--, t[this.threadID] = n
    }, t.clearProviders = function() {
        for (var e = this.contextIndex; 0 <= e; e--) this.contextStack[e][this.threadID] = this.contextValueStack[e]
    }, t.read = function(e) {
        if (this.exhausted) return null;
        var t = Mn;
        Mn = this;
        var n = Gn.current;
        Gn.current = Dn;
        try {
            for (var i = [""], r = !1; i[0].length < e;) {
                if (0 === this.stack.length) {
                    this.exhausted = !0;
                    var o = this.threadID;
                    tn[o] = tn[0], tn[0] = o;
                    break
                }
                var a = this.stack[this.stack.length - 1];
                if (r || a.childIndex >= a.children.length) {
                    var s = a.footer;
                    if ("" !== s && (this.previousWasTextNode = !1), this.stack.pop(), "select" === a.type) this.currentSelectValue = null;
                    else if (null != a.type && null != a.type.type && a.type.type.$$typeof === Vt) this.popProvider(a.type);
                    else if (a.type === jt) {
                        this.suspenseDepth--;
                        var l = i.pop();
                        if (r) {
                            r = !1;
                            var c = a.fallbackFrame;
                            if (!c) throw Error(Ot(303));
                            this.stack.push(c), i[this.suspenseDepth] += "\x3c!--$!--\x3e";
                            continue
                        }
                        i[this.suspenseDepth] += l
                    }
                    i[this.suspenseDepth] += s
                } else {
                    var u = a.children[a.childIndex++],
                        d = "";
                    try {
                        d += this.render(u, a.context, a.domNamespace)
                    } catch (p) {
                        if (null != p && "function" == typeof p.then) throw Error(Ot(294));
                        throw p
                    }
                    i.length <= this.suspenseDepth && i.push(""), i[this.suspenseDepth] += d
                }
            }
            return i[0]
        } finally {
            Gn.current = n, Mn = t, Cn()
        }
    }, t.render = function(e, t, n) {
        if ("string" == typeof e || "number" == typeof e) return "" === (n = "" + e) ? "" : this.makeStaticMarkup ? mn(n) : this.previousWasTextNode ? "\x3c!-- --\x3e" + mn(n) : (this.previousWasTextNode = !0, mn(n));
        if (e = (t = Kn(e, t, this.threadID)).child, t = t.context, null === e || !1 === e) return "";
        if (!Tt.isValidElement(e)) {
            if (null != e && null != e.$$typeof) {
                if ((n = e.$$typeof) === Mt) throw Error(Ot(257));
                throw Error(Ot(258, n.toString()))
            }
            return e = Un(e), this.stack.push({
                type: null,
                domNamespace: n,
                children: e,
                childIndex: 0,
                context: t,
                footer: ""
            }), ""
        }
        var i = e.type;
        if ("string" == typeof i) return this.renderDOM(e, t, n);
        switch (i) {
            case Jt:
            case Zt:
            case Nt:
            case Lt:
            case qt:
            case Dt:
                return e = Un(e.props.children), this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ""
                }), "";
            case jt:
                throw Error(Ot(294));
            case $t:
                throw Error(Ot(343))
        }
        if ("object" == typeof i && null !== i) switch (i.$$typeof) {
            case Wt:
                yn = {};
                var r = i.render(e.props, e.ref);
                return r = _n(i.render, e.props, r, e.ref), r = Un(r), this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: r,
                    childIndex: 0,
                    context: t,
                    footer: ""
                }), "";
            case Ut:
                return e = [Tt.createElement(i.type, Pt({
                    ref: e.ref
                }, e.props))], this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ""
                }), "";
            case Vt:
                return n = {
                    type: e,
                    domNamespace: n,
                    children: i = Un(e.props.children),
                    childIndex: 0,
                    context: t,
                    footer: ""
                }, this.pushProvider(e), this.stack.push(n), "";
            case Rt:
                i = e.type, r = e.props;
                var o = this.threadID;
                return en(i, o), i = Un(r.children(i[o])), this.stack.push({
                    type: e,
                    domNamespace: n,
                    children: i,
                    childIndex: 0,
                    context: t,
                    footer: ""
                }), "";
            case Bt:
                throw Error(Ot(338));
            case Gt:
                return i = (r = (i = e.type)._init)(i._payload), e = [Tt.createElement(i, Pt({
                    ref: e.ref
                }, e.props))], this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ""
                }), ""
        }
        throw Error(Ot(130, null == i ? i : typeof i, ""))
    }, t.renderDOM = function(e, t, n) {
        var i = e.type.toLowerCase();
        if (!$n.hasOwnProperty(i)) {
            if (!Bn.test(i)) throw Error(Ot(65, i));
            $n[i] = !0
        }
        var r = e.props;
        if ("input" === i) r = Pt({
            type: void 0
        }, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: null != r.value ? r.value : r.defaultValue,
            checked: null != r.checked ? r.checked : r.defaultChecked
        });
        else if ("textarea" === i) {
            var o = r.value;
            if (null == o) {
                o = r.defaultValue;
                var a = r.children;
                if (null != a) {
                    if (null != o) throw Error(Ot(92));
                    if (Array.isArray(a)) {
                        if (!(1 >= a.length)) throw Error(Ot(93));
                        a = a[0]
                    }
                    o = "" + a
                }
                null == o && (o = "")
            }
            r = Pt({}, r, {
                value: void 0,
                children: "" + o
            })
        } else if ("select" === i) this.currentSelectValue = null != r.value ? r.value : r.defaultValue, r = Pt({}, r, {
            value: void 0
        });
        else if ("option" === i) {
            a = this.currentSelectValue;
            var s = function(e) {
                if (null == e) return e;
                var t = "";
                return Tt.Children.forEach(e, (function(e) {
                    null != e && (t += e)
                })), t
            }(r.children);
            if (null != a) {
                var l = null != r.value ? r.value + "" : s;
                if (o = !1, Array.isArray(a)) {
                    for (var c = 0; c < a.length; c++)
                        if ("" + a[c] === l) {
                            o = !0;
                            break
                        }
                } else o = "" + a === l;
                r = Pt({
                    selected: void 0,
                    children: void 0
                }, r, {
                    selected: o,
                    children: s
                })
            }
        }
        if (o = r) {
            if (Vn[i] && (null != o.children || null != o.dangerouslySetInnerHTML)) throw Error(Ot(137, i));
            if (null != o.dangerouslySetInnerHTML) {
                if (null != o.children) throw Error(Ot(60));
                if ("object" != typeof o.dangerouslySetInnerHTML || !("__html" in o.dangerouslySetInnerHTML)) throw Error(Ot(61))
            }
            if (null != o.style && "object" != typeof o.style) throw Error(Ot(62))
        }
        o = r, a = this.makeStaticMarkup, s = 1 === this.stack.length, l = "<" + e.type;
        e: if (-1 === i.indexOf("-")) c = "string" == typeof o.is;
            else switch (i) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    c = !1;
                    break e;
                default:
                    c = !0
            }
        for (v in o)
            if (Jn.call(o, v)) {
                var u = o[v];
                if (null != u) {
                    if ("style" === v) {
                        var d = void 0,
                            p = "",
                            f = "";
                        for (d in u)
                            if (u.hasOwnProperty(d)) {
                                var m = 0 === d.indexOf("--"),
                                    h = u[d];
                                if (null != h) {
                                    if (m) var g = d;
                                    else if (g = d, Zn.hasOwnProperty(g)) g = Zn[g];
                                    else {
                                        var y = g.replace(jn, "-$1").toLowerCase().replace(qn, "-ms-");
                                        g = Zn[g] = y
                                    }
                                    p += f + g + ":", f = d, p += m = null == h || "boolean" == typeof h || "" === h ? "" : m || "number" != typeof h || 0 === h || Rn.hasOwnProperty(f) && Rn[f] ? ("" + h).trim() : h + "px", f = ";"
                                }
                            }
                        u = p || null
                    }
                    d = null, c ? Yn.hasOwnProperty(v) || (d = ln(d = v) && null != u ? d + '="' + mn(u) + '"' : "") : d = hn(v, u), d && (l += " " + d)
                }
            }
        a || s && (l += ' data-reactroot=""');
        var v = l;
        o = "", Ln.hasOwnProperty(i) ? v += "/>" : (v += ">", o = "</" + e.type + ">");
        e: {
            if (null != (a = r.dangerouslySetInnerHTML)) {
                if (null != a.__html) {
                    a = a.__html;
                    break e
                }
            } else if ("string" == typeof(a = r.children) || "number" == typeof a) {
                a = mn(a);
                break e
            }
            a = null
        }
        return null != a ? (r = [], Hn.hasOwnProperty(i) && "\n" === a.charAt(0) && (v += "\n"), v += a) : r = Un(r.children), e = e.type, n = null == n || "http://www.w3.org/1999/xhtml" === n ? function(e) {
            switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
            }
        }(e) : "http://www.w3.org/2000/svg" === n && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : n, this.stack.push({
            domNamespace: n,
            type: i,
            children: r,
            childIndex: 0,
            context: t,
            footer: o
        }), this.previousWasTextNode = !1, v
    }, e
}();
At.renderToNodeStream = function() {
    throw Error(Ot(207))
}, At.renderToStaticMarkup = function(e, t) {
    e = new Qn(e, !0, t);
    try {
        return e.read(1 / 0)
    } finally {
        e.destroy()
    }
}, At.renderToStaticNodeStream = function() {
    throw Error(Ot(208))
}, At.renderToString = function(e, t) {
    e = new Qn(e, !1, t);
    try {
        return e.read(1 / 0)
    } finally {
        e.destroy()
    }
}, At.version = "17.0.2", Ft.exports = At;
var ei = Ft.exports,
    ti = {};
Object.defineProperty(ti, "__esModule", {
    value: !0
});
var ni = function(e) {
        return function(t) {
            for (var n, i = new RegExp(e.key + "-([a-zA-Z0-9-_]+)", "gm"), r = {
                    html: t,
                    ids: [],
                    css: ""
                }, o = {}; null !== (n = i.exec(t));) void 0 === o[n[1]] && (o[n[1]] = !0);
            return r.ids = Object.keys(e.inserted).filter((function(t) {
                if ((void 0 !== o[t] || void 0 === e.registered[e.key + "-" + t]) && !0 !== e.inserted[t]) return r.css += e.inserted[t], !0
            })), r
        }
    },
    ii = function(e) {
        return function(t) {
            for (var n, i = new RegExp(e.key + "-([a-zA-Z0-9-_]+)", "gm"), r = {
                    html: t,
                    styles: []
                }, o = {}; null !== (n = i.exec(t));) void 0 === o[n[1]] && (o[n[1]] = !0);
            var a = [],
                s = "";
            return Object.keys(e.inserted).forEach((function(t) {
                void 0 === o[t] && void 0 !== e.registered[e.key + "-" + t] || !0 === e.inserted[t] || (e.registered[e.key + "-" + t] ? (a.push(t), s += e.inserted[t]) : r.styles.push({
                    key: e.key + "-global",
                    ids: [t],
                    css: e.inserted[t]
                }))
            })), r.styles.push({
                key: e.key,
                ids: a,
                css: s
            }), r
        }
    };

function ri(e, t, n, i) {
    return '<style data-emotion="' + e + " " + t + '"' + i + ">" + n + "</style>"
}
var oi = function(e, t) {
        return function(n) {
            var i = e.inserted,
                r = e.key,
                o = e.registered,
                a = new RegExp("<|" + r + "-([a-zA-Z0-9-_]+)", "gm"),
                s = {},
                l = "",
                c = "",
                u = "";
            for (var d in i)
                if (i.hasOwnProperty(d)) {
                    var p = i[d];
                    !0 !== p && void 0 === o[r + "-" + d] && (u += p, c += " " + d)
                }
            "" !== u && (l = ri(r, c.substring(1), u, t));
            for (var f, m = "", h = "", g = 0; null !== (f = a.exec(n));)
                if ("<" !== f[0]) {
                    var y = f[1],
                        v = i[y];
                    !0 === v || void 0 === v || s[y] || (s[y] = !0, h += v, m += " " + y)
                } else "" !== m && (l += ri(r, m.substring(1), h, t), m = "", h = ""), l += n.substring(g, f.index), g = f.index;
            return l += n.substring(g)
        }
    },
    ai = function(e, t) {
        return function(e) {
            var n = "";
            return e.styles.forEach((function(e) {
                n += ri(e.key, e.ids.join(" "), e.css, t)
            })), n
        }
    };
var si = ti.default = function(e) {
    !0 !== e.compat && (e.compat = !0);
    var t = void 0 !== e.nonce ? ' nonce="' + e.nonce + '"' : "";
    return {
        extractCritical: ni(e),
        extractCriticalToChunks: ii(e),
        renderStylesToString: oi(e, t),
        constructStyleTagsFromChunks: ai(0, t)
    }
};
const li = console.error,
    ci = Pe({
        key: "css"
    }),
    ui = si(ci),
    di = ci.insert;

function pi(e, t) {
    Te(), Me.static = !0, console.error = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        t.some(e => "string" == typeof e && e.includes("useLayoutEffect")) || li.apply(void 0, t)
    };
    const n = ei.renderToString(Se.createElement(Oe, {
            value: ci
        }, e)),
        i = ui.constructStyleTagsFromChunks(ui.extractCriticalToChunks(n));
    Me.static = !1, console.error = li;
    return ["\n\t\t" + (t ? "<style>" + t + "</style>" : "") + "\n\t\t" + i + "\n\t", n]
}

function fi(t, n, i, r, o, a) {
    let {
        adapterOptions: s,
        props: {
            onError: l = ke,
            ...u
        },
        onBootstrap: d = ke
    } = n;
    Promise.resolve().then(() => {
        o({ ...s,
            model: r ? r.model : {}
        }, t, i, a);
        const n = i => {
            let {
                readyState: o
            } = i;
            if (o === O) return;
            window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_sdk_ready"), t.off("set_application_state", n), t.getApplicationState("embedded") || (t => {
                e(c(t, () => t.localize("welcome_title")), be(e => {
                    document.title = e
                }))
            })(t), t.getApplicationState("embedded") && !xt() || (e => {
                _t().then(t => {
                    Ct.hasIframeUnlocked = !0, !1 !== Ct.isIframeActive && (Ct.isIframeActive = !0), e.on("add_event", n => {
                        let {
                            event: i
                        } = n;
                        if (!Ct.isIframeActive) return;
                        const {
                            muted: r
                        } = e.getApplicationState();
                        if (r) return;
                        ((e, t) => "system" !== e.author && !e.properties.welcomeMessage && e.author !== t && "custom" !== e.type)(i, e.getSessionUserId()) && t("new_message")
                    }), e.on("reaction_received", n => {
                        let {
                            event: i
                        } = n;
                        if (!Ct.isIframeActive) return;
                        const {
                            muted: r
                        } = e.getApplicationState();
                        if (r) return;
                        e.getSessionUserId() === i.author && t("new_message")
                    })
                })
            })(t), M(t), rt(t), mt(t, r);
            const a = document.getElementById("root");
            De(a, { ...u,
                onError: (e, t) => {
                    let {
                        componentStack: n
                    } = t;
                    F("react_error", e, {
                        componentStack: n
                    }), Ie.render(null, a), l()
                },
                store: t
            }, r, pi), window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bootstrap_end"), d(t)
        };
        t.on("set_application_state", n)
    })
}
ci.insert = (e, t) => {
    let n = "";
    di(e, t, {
        insert(e) {
            n += e
        }
    }, !0), ci.inserted[t.name] = n
};
const mi = (e, t, n) => {
    const {
        organizationId: i
    } = t, {
        license: r,
        group: o,
        requestedGroup: a,
        pipMode: s,
        wrapperVersion: l
    } = e, {
        language: c
    } = t.__unsafeProperties.group, u = Ve({
        application: {
            organizationId: i,
            license: r,
            group: o,
            requestedGroup: a,
            region: t.region,
            rtl: Re(c),
            language: c,
            embedded: !1,
            mobileWrapper: y(),
            pipMode: s,
            wrapperVersion: l,
            page: {
                title: document.title,
                url: String(document.location),
                referrer: document.referrer
            }
        }
    }, {
        persistKey: n({ ...e,
            organizationId: i
        })
    }), {
        clientLimitExceededLifted: d
    } = u.getApplicationState(), p = !d && t.clientLimitExceeded;
    return u.setApplicationState({
        visibility: { ...u.getApplicationState("visibility"),
            state: "maximized"
        },
        clientLimitExceeded: p
    }), u.updateUser(u.getSessionUserId(), (() => {
        const e = de(window.location.search),
            t = j(["name", "email"], e);
        return e.params && (t.properties = C(e => String(e), pe(e.params))), t
    })()), e.initialView && !u.getCurrentView() && u.setCurrentView(e.initialView), u
};

function hi(e, t, n) {
    window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_config_request");
    const {
        license: i,
        organizationId: r,
        group: o,
        adapter: a
    } = e;
    var s;
    (s = {
        licenseId: i,
        organizationId: r,
        groupId: o,
        url: Ne(String(document.location)),
        channelType: "direct_link"
    }, V(s).then(e => R({ ...s,
        region: e
    }).then(e => {
        const t = e.groupId;
        return Promise.all([e, W({
            organizationId: e.organizationId,
            licenseId: s.licenseId,
            groupId: t,
            region: e.region,
            version: e.configVersion
        })]).then(e => {
            let [t, n] = e;
            return { ...t,
                ...n
            }
        })
    }))).then(r => {
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_server_config");
        const s = r.groupId,
            l = r.region,
            c = r.organizationId;
        Le(r.__unsafeProperties.group.language);
        const u = mi({ ...e,
            group: s,
            requestedGroup: o
        }, r, n);
        D({
            organizationId: c,
            licenseId: i,
            region: l,
            groupId: s,
            version: r.localizationVersion,
            language: r.__unsafeProperties.group.language
        }).then(u.setLocalization);
        const d = {
            adapterOptions: { ...e,
                organizationId: c,
                group: s,
                requestedGroup: o,
                region: l,
                mobile: N()
            },
            props: {},
            onBootstrap: t
        };
        L() && (d.props.onMinimizeButtonPress = () => u.emit("mobile_wrapper_minimize_intent")), fi(u, d, r, null, a, i)
    })
}
/**
  @livechat/postmate - A powerful, simple, promise-based postMessage library
  @version v3.0.4
  @link https://github.com/dollarshaveclub/postmate
  @author Jacob Kelley <jakie8@gmail.com>
  @license MIT
**/
var gi = "application/x-postmate-v1+json",
    yi = 0,
    vi = {
        handshake: 1,
        "handshake-reply": 1,
        call: 1,
        emit: 1,
        reply: 1,
        request: 1
    },
    wi = function(e, t) {
        return ("string" != typeof t || e.origin === t) && (!!e.data && ("object" == typeof e.data && ("postmate" in e.data && (e.data.type === gi && !!vi[e.data.postmate]))))
    },
    bi = function() {
        function e(e) {
            var t = this;
            this.parent = e.parent, this.frame = e.frame, this.child = e.child, this.childOrigin = e.childOrigin, this.events = {}, this.listener = function(e) {
                if (!wi(e, t.childOrigin)) return !1;
                var n = ((e || {}).data || {}).value || {},
                    i = n.data,
                    r = n.name;
                "emit" === e.data.postmate && r in t.events && t.events[r].call(t, i)
            }, this.parent.addEventListener("message", this.listener, !1)
        }
        var t = e.prototype;
        return t.get = function(e) {
            var t = this;
            return new xi.Promise((function(n) {
                var i = ++yi;
                t.parent.addEventListener("message", (function e(r) {
                    r.data.uid === i && "reply" === r.data.postmate && (t.parent.removeEventListener("message", e, !1), n(r.data.value))
                }), !1), t.child.postMessage({
                    postmate: "request",
                    type: gi,
                    property: e,
                    uid: i
                }, t.childOrigin)
            }))
        }, t.call = function(e, t) {
            this.child.postMessage({
                postmate: "call",
                type: gi,
                property: e,
                data: t
            }, this.childOrigin)
        }, t.on = function(e, t) {
            this.events[e] = t
        }, t.destroy = function() {
            window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame)
        }, e
    }(),
    ki = function() {
        function e(e) {
            var t = this;
            this.model = e.model, this.parent = e.parent, this.parentOrigin = e.parentOrigin, this.child = e.child, this.child.addEventListener("message", (function(e) {
                if (wi(e, t.parentOrigin)) {
                    var n = e.data,
                        i = n.property,
                        r = n.uid,
                        o = n.data;
                    "call" !== e.data.postmate ? function(e, t) {
                        var n = "function" == typeof e[t] ? e[t]() : e[t];
                        return xi.Promise.resolve(n)
                    }(t.model, i).then((function(t) {
                        return e.source.postMessage({
                            property: i,
                            postmate: "reply",
                            type: gi,
                            uid: r,
                            value: t
                        }, e.origin)
                    })) : i in t.model && "function" == typeof t.model[i] && t.model[i].call(t, o)
                }
            }))
        }
        return e.prototype.emit = function(e, t) {
            this.parent.postMessage({
                postmate: "emit",
                type: gi,
                value: {
                    name: e,
                    data: t
                }
            }, this.parentOrigin)
        }, e
    }(),
    xi = function() {
        function e(e) {
            var t = e.container,
                n = void 0 === t ? void 0 !== n ? n : document.body : t,
                i = e.model,
                r = e.url,
                o = e.iframeAllowedProperties;
            return this.parent = window, this.frame = document.createElement("iframe"), o && (this.frame.allow = o), n.appendChild(this.frame), this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow, this.model = i || {}, this.sendHandshake(r)
        }
        return e.prototype.sendHandshake = function(t) {
            var n, i = this,
                r = function(e) {
                    var t = document.createElement("a");
                    t.href = e;
                    var n = t.protocol.length > 4 ? t.protocol : window.location.protocol,
                        i = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                    return t.origin || n + "//" + i
                }(t),
                o = 0;
            return new e.Promise((function(e, a) {
                i.parent.addEventListener("message", (function t(o) {
                    return !!wi(o, r) && ("handshake-reply" === o.data.postmate ? (clearInterval(n), i.parent.removeEventListener("message", t, !1), i.childOrigin = o.origin, e(new bi(i))) : a("Failed handshake"))
                }), !1);
                var s = function() {
                        o++, i.child.postMessage({
                            postmate: "handshake",
                            type: gi,
                            model: i.model
                        }, r), 5 === o && clearInterval(n)
                    },
                    l = function() {
                        s(), n = setInterval(s, 500)
                    };
                i.frame.attachEvent ? i.frame.attachEvent("onload", l) : i.frame.addEventListener("load", l), i.frame.src = t
            }))
        }, e
    }();
xi.debug = !1, xi.Promise = function() {
    try {
        return window ? window.Promise : Promise
    } catch (e) {
        return null
    }
}(), xi.Model = function() {
    function e(e) {
        return this.child = window, this.model = e, this.parent = this.child.parent, this.sendHandshakeReply()
    }
    return e.prototype.sendHandshakeReply = function() {
        var e = this;
        return new xi.Promise((function(t, n) {
            e.child.addEventListener("message", (function i(r) {
                if (r.data.postmate) {
                    if ("handshake" === r.data.postmate) {
                        e.child.removeEventListener("message", i, !1), r.source.postMessage({
                            postmate: "handshake-reply",
                            type: gi
                        }, r.origin), e.parentOrigin = r.origin;
                        var o = r.data.model;
                        return o && Object.keys(o).forEach((function(t) {
                            e.model[t] = o[t]
                        })), t(new ki(e))
                    }
                    return n("Handshake Reply Failed")
                }
            }), !1)
        }))
    }, e
}();
const Si = xi.Model;
xi.Model = function() {
    return function(e) {
        const t = ze(),
            n = {};
        return e.resolveRemoteCall = e => {
            let {
                id: t,
                value: i
            } = e;
            const r = n[t];
            delete n[t], r(i)
        }, e.emitEvent = e => {
            let {
                event: n,
                data: i
            } = e;
            t.emit(n, i)
        }, new Si(e).then(i => (i.call = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
            return new Promise(t => {
                const o = q(n);
                n[o] = t, i.emit("remote-call", {
                    id: o,
                    method: e,
                    args: r
                })
            })
        }, e.remoteCall = t => {
            let {
                id: n,
                method: r,
                args: o
            } = t;
            const a = "function" == typeof e[r] ? e[r].apply(i, o) : void 0;
            a && "function" == typeof a.then ? a.then(e => {
                i.call("resolveRemoteCall", {
                    id: n,
                    value: e
                })
            }) : i.call("resolveRemoteCall", {
                id: n,
                value: a
            })
        }, i.on = t.on, i.off = t.off, i))
    }
}();
const Ii = {
        minimizedContainerSize: void 0,
        minimizedVisibility: void 0,
        maximizedVisibility: void 0,
        viewAnimated: void 0,
        viewNotAnimated: void 0,
        resizeToDimensions: void 0
    },
    zi = {
        bar: {
            width: "281px",
            height: "63px"
        },
        bubble: {
            width: "84px",
            height: "84px"
        },
        bubblePulse: {
            width: "90px",
            height: "90px"
        },
        mobileGreetingFull: {
            width: "100%",
            height: "50%"
        },
        full: {
            width: "100%",
            height: "100%"
        },
        ...U
    },
    Ei = e => /px$/.test(e) ? Math.ceil(parseFloat(e)) + "px" : e,
    _i = e => c(e, e => e.application.visibility.state),
    Ci = e => {
        const t = Ii[e];
        t && clearTimeout(t)
    },
    Fi = (e, t) => e.call("resize", (e => ({ ...e,
        width: Ei(e.width),
        height: Ei(e.height)
    }))(t)),
    Ai = (e, t) => e.call("getMinimizedDimensions").then(n => {
        "minimized" === t.getApplicationState().visibility.state && Fi(e, { ...n,
            ignoreHorizontalOffset: t.getApplicationState("mobile")
        })
    }),
    Pi = (e, t, n) => {
        let {
            transient: i
        } = n;
        Ci("minimizedContainerSize"), Ci("resizeToDimensions");
        const r = t.getApplicationState("mobile"),
            o = n => {
                Fi(e, n).then(() => Ai(e, t))
            };
        if (G(t, "maximized")) return void Fi(e, r ? { ...zi.full,
            maximized: !0
        } : { ...je(t.getApplicationState().config.theme.name),
            maximized: !0
        });
        const a = "bar" === g(t),
            s = !H(t),
            l = t.getApplicationState().config.theme.name,
            c = t.getApplicationState().defaultWidget,
            u = t.getView("minimized"),
            d = t.getApplicationState().recommendations,
            p = () => {
                var n, i, p, f, m;
                return (e => {
                    let {
                        isBar: t,
                        isMobile: n,
                        isBubblePulse: i,
                        hasGreeting: r,
                        hasMinimizedEvents: o,
                        productRecommendationsState: a,
                        themeName: s,
                        callResize: l,
                        resizeMinimizedWithGreeting: c,
                        getWindowSizeForTheme: u,
                        dimensions: d,
                        defaultWidget: p,
                        resizeToDimensions: f
                    } = e;
                    if ("livechat" === p && (n ? r ? c(d.mobileGreetingFull) : l(t ? d.bar : d.bubble) : t ? l(d.bar) : r ? c(u(s)) : l(d.bubble)), "openwidget" === p) {
                        if (a.isVisible || a.animation) return a.animation ? void l({ ...n ? d.mobileRecommendations : d.recommendations,
                            ignoreHorizontalOffset: n
                        }) : void f();
                        if (i) return void l(d.bubblePulse);
                        if (r) return n ? void c(d.mobileGreetingFull) : void c(u(s));
                        o || l(d.bubble)
                    }
                })({
                    isBar: a,
                    isMobile: r,
                    hasGreeting: s,
                    isBubblePulse: u.showPulseAnimation,
                    hasMinimizedEvents: !!(null != (n = t.getApplicationState("visitorCounter")) && n.isVisible || null != (i = t.getApplicationState("googleReviews")) && i.isVisible || null != (p = t.getApplicationState("chatBotGreeting")) && p.isVisible || null != (f = t.getApplicationState("contactInvitation")) && f.isVisible),
                    productRecommendationsState: {
                        isVisible: !(null == d || !d.isVisible),
                        animation: null != (m = null == d ? void 0 : d.animation) ? m : null
                    },
                    themeName: l,
                    dimensions: zi,
                    resizeMinimizedWithGreeting: o,
                    getWindowSizeForTheme: je,
                    defaultWidget: c,
                    callResize: t => Fi(e, t),
                    resizeToDimensions: () => Ai(e, t)
                })
            };
        i ? Ii.minimizedContainerSize = setTimeout(p, 300) : p()
    },
    Ti = (e, t, n) => {
        let {
            transient: i
        } = n;
        if (Ci("minimizedVisibility"), Ci("maximizedVisibility"), G(t, "maximized")) e.call("applyFramesStyle", {
            minimizedFrameStyle: {
                display: "none"
            },
            maximizedFrameStyle: {
                display: "block"
            }
        }), B() && (Ii.maximizedVisibility = setTimeout(() => {
            e.call("applyFramesStyle", {
                minimizedFrameStyle: {},
                maximizedFrameStyle: {
                    visibility: "visible"
                }
            })
        }, $));
        else {
            const t = () => {
                e.call("applyFramesStyle", {
                    minimizedFrameStyle: {
                        display: "block"
                    },
                    maximizedFrameStyle: {
                        display: "none",
                        ...B() && {
                            visibility: "hidden"
                        }
                    }
                })
            };
            i ? Ii.minimizedVisibility = setTimeout(t, 300) : t()
        }
    },
    Oi = {
        faq: "FAQ",
        "form-contact": "Form-contact",
        "form-feedback": "Form-feedback",
        "form-bugreport": "Form-bugreport",
        chat: "Chat"
    },
    Mi = (t, n, i) => {
        t.hasChat(n) ? X(t, n, i) : e(c(t, e => K(e, n)), be(e => e && X(t, n, i)))
    },
    Di = (e, t) => {
        const n = e.getApplicationState("defaultWidget"),
            i = "openwidget" === n,
            r = ((e, t) => {
                if ("chatbot" === t) throw new Error('Widget type "chatbot" is not supported.');
                const n = "openwidget" === t,
                    i = "object" == typeof e && null !== e ? e : {},
                    r = n ? ["feature", "messageDraft"] : ["messageDraft", "startChat"];
                for (const s in i)
                    if (!r.includes(s)) {
                        throw new Error((n ? "OpenWidget:" : "[LivechatWidget]") + " You cannot combine " + s + ' argument with "maximize" method. You can only use: ' + r.join(", "))
                    }
                const o = "messageDraft" in i && "string" == typeof i.messageDraft ? i.messageDraft : void 0,
                    a = "startChat" in i && "boolean" == typeof i.startChat ? i.startChat : void 0;
                if (n) {
                    return {
                        feature: "feature" in i && "string" == typeof i.feature ? i.feature : void 0,
                        messageDraft: o,
                        startChat: a
                    }
                }
                return {
                    messageDraft: o,
                    startChat: a
                }
            })(t, n);
        i ? ((e, t) => {
            var n;
            const {
                feature: i,
                messageDraft: r
            } = t;
            if (!i) return;
            if ("string" != typeof i) throw new Error("OpenWidget: Feature name must be a string.");
            const o = Oi[i];
            if (!o) throw new Error("OpenWidget: You cannot combine " + i + " feature with 'maximize' method. You can only use: " + Object.keys(Oi).join(", ") + ".");
            const a = e.getApplicationState("config").features,
                s = Be(a),
                l = null == (n = a.livechatIntegration) ? void 0 : n.enabled,
                c = l || s,
                u = "Chat" === o;
            if (!e.getView(o) || u && !c) throw new Error("OpenWidget: Feature " + i + " is not enabled.");
            if (u && r) {
                Mi(e, l ? d : Q, r)
            }
            e.setCurrentView(o)
        })(e, r) : ((e, t) => {
            const {
                messageDraft: n,
                startChat: i
            } = t;
            if (n && ("Chat" !== e.getCurrentView() && e.setCurrentView("Chat"), Mi(e, d, n)), i) {
                const t = e.getChat(d).active,
                    n = J(e);
                t || n || Y(e)
            }
        })(e, r)
    };

function Ni(e) {
    return {
        hide() {
            G(e, "hidden") || e.setApplicationState({
                visibility: {
                    state: "hidden",
                    forced: !0
                }
            })
        },
        hideGreeting() {
            ee(e)
        },
        hideEyeCatcher() {
            te(e)
        },
        isFocused: () => !!document.hasFocus && document.hasFocus(),
        shouldBridgeHandleAudio: () => !Ct.hasIframeUnlocked && (Ct.isIframeActive = !1, !0),
        maximize(t, n) {
            try {
                Di(e, n)
            } catch (a) {
                return void console.error(a.message)
            }
            const i = t && ne(t, ["click", "pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"]),
                r = e.getApplicationState("visibility").interactionModality,
                o = i ? r : "virtual";
            e.setApplicationState({
                visibility: { ...e.getApplicationState("visibility"),
                    state: "maximized",
                    interactionModality: o
                }
            })
        },
        minimize() {
            e.setApplicationState({
                visibility: { ...e.getApplicationState("visibility"),
                    state: !e.getApplicationState("isMinimizedForcefullyDisabled") && ie(e) ? "minimized" : "hidden",
                    interactionModality: "virtual"
                }
            })
        },
        startStateSync() {
            e.startStateSync(this)
        },
        storeMethod(t) {
            let [n, ...i] = t;
            e[n].apply(e, i)
        },
        logInfo() {
            re.apply(void 0, arguments)
        },
        logError() {
            F.apply(void 0, arguments)
        },
        logNotice() {
            oe.apply(void 0, arguments)
        },
        crossFrameEvent(e, t) {
            qe(e, { ...JSON.parse(t),
                stopPropagation: ke,
                preventDefault: ke
            })
        },
        setInteractionModality(t) {
            e.setApplicationState({
                visibility: { ...e.getApplicationState("visibility"),
                    interactionModality: t
                }
            })
        },
        getPipConsent(e) {
            const t = window.localStorage.getItem(Ue(e));
            try {
                return t ? JSON.parse(t).pipConsent.value : null
            } catch {
                return null
            }
        },
        setPipConsent(t) {
            e.setApplicationState({
                pipConsent: t
            })
        }
    }
}
const Li = ["4b57ed6a-6d46-426b-a4a5-088360a6f773"],
    Vi = (e, t, n, i) => {
        const r = e.getApplicationState("visibility");
        return i && "maximized" !== r.state ? {
            state: "hidden",
            forced: !0
        } : n ? {
            state: "maximized"
        } : t ? i ? {
            state: "hidden",
            forced: !0
        } : {
            state: "minimized"
        } : r
    };

function Ri(t, i, r) {
    const {
        license: o,
        organizationId: a,
        group: s,
        uniqueGroups: l,
        isIdentityProviderEnabled: u,
        shouldUseParentStorage: p,
        adapter: f
    } = t, m = Ve({
        application: {
            organizationId: a,
            ...o ? {
                license: o
            } : {},
            group: s
        }
    }, {
        persistKey: r(t)
    }), h = Ni(m);
    ue && (window.parent.store = m), new xi.Model(h).then(e => Promise.all([e, m.syncing()])).then(t => {
        let [r] = t;
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_postmate_ready");
        const {
            clientLimitExceeded: a,
            customer: h,
            requestedGroup: g,
            hidden: y,
            integrationName: v,
            isInCustomContainer: w,
            page: b,
            region: k,
            serverConfig: x,
            actingAsDirectLink: S,
            isMinimizedForcefullyDisabled: I,
            initMaximized: z,
            parentWidth: E,
            parentHeight: _,
            defaultWidget: C,
            selectToChat: F
        } = r.model, A = m.getApplicationState("mobile"), P = "livechat" === C ? x.__unsafeProperties.group.language : x.language, T = S || w || z, {
            organizationId: O
        } = x;
        Le(P), m.updateUser(m.getSessionUserId(), h), m.setApplicationState({
            organizationId: O,
            clientLimitExceeded: !m.getApplicationState("clientLimitExceededLifted") && a,
            actingAsDirectLink: S,
            isMinimizedForcefullyDisabled: I,
            embedded: !0,
            region: k,
            isInCustomContainer: w,
            mobileWrapper: null,
            page: b,
            rtl: Re(P),
            language: P,
            integrationName: v,
            requestedGroup: g,
            visibility: Vi(m, A, T, y),
            clientWidth: E,
            clientHeight: _,
            defaultWidget: C,
            showTextSelectionTracking: F
        });
        const M = {
            onAnimationEnd: () => m.emit("animation_end"),
            onError: () => {
                r.call("kill")
            },
            onMinimizedRef: e => {
                r.minimizedRef = e
            }
        };
        fi(m, {
            adapterOptions: {
                organizationId: O,
                group: s,
                requestedGroup: g,
                region: k,
                uniqueGroups: l,
                mobile: N(),
                ...u && {
                    identityProvider: () => ({
                        getToken: () => r.call("callIdentityProvider", "getToken"),
                        getFreshToken: () => r.call("callIdentityProvider", "getFreshToken"),
                        hasToken: () => r.call("callIdentityProvider", "hasToken"),
                        invalidate: () => r.call("callIdentityProvider", "invalidate")
                    })
                },
                ...p && {
                    parentStorage: {
                        setItem: (e, t) => r.call("callParentStorageMethod", "setItem", e, t),
                        getItem: e => r.call("callParentStorageMethod", "getItem", e),
                        removeItem: e => r.call("callParentStorageMethod", "removeItem", e)
                    }
                }
            },
            props: M,
            onBootstrap: () => {
                Ge(r, m);
                const {
                    visibility: t
                } = m.getApplicationState();
                (T || "hidden" !== t.state) && r.call("show"), A || (t => {
                    e(c(t, e => e.application.lightbox.state), We, ve(e => {
                        let [t, n] = e;
                        return t !== n
                    }), be(e => {
                        let [, n] = e;
                        "closed" !== n ? t.emit("render-image-lightbox") : t.emit("remove-image-lightbox")
                    }))
                })(m), Li.includes(O) || ((t, n) => {
                    e(c(n, e => Z(e, d)), be(e => {
                        const i = null == e ? void 0 : e.author;
                        if (i && n.hasUser(i)) {
                            const e = n.getUser(i),
                                r = n.localize("embedded_new_message", {
                                    operator: e.name
                                });
                            t.call("setTitleNotification", r)
                        } else t.call("setTitleNotification", null)
                    }))
                })(r, m), ((t, i) => {
                    e(_i(i), n(null), We, ve(e => {
                        let [t, n] = e;
                        return "maximized" === t && "minimized" === n
                    }), be(() => {
                        Ci("viewNotAnimated");
                        const e = e => {
                            i.updateView("minimized", { ...i.getView("minimized"),
                                animated: e
                            }), i.emit("render-minimized")
                        };
                        e(!0);
                        const {
                            interactionModality: n
                        } = i.getApplicationState("visibility");
                        Ii.viewNotAnimated = setTimeout(() => {
                            e(!1), "keyboard" === n && t.call("focusMinimized")
                        }, 500)
                    })), e(_i(i), Je(1), be(() => Ti(t, i, {
                        transient: !0
                    }))), e(c(i, e => e.application.ready), Je(1), ve(Boolean), be(() => requestAnimationFrame(() => Ti(t, i, {
                        transient: !0
                    })))), Ti(t, i, {
                        transient: !1
                    })
                })(r, m), ((t, n) => {
                    e(_i(n), Je(1), be(() => Pi(t, n, {
                        transient: !0
                    }))), e(c(n, e => e.application.invitation.hiddenIds.length), Je(1), be(() => Pi(t, n, {
                        transient: !0
                    }))), n.on("render-minimized", () => Pi(t, n, {
                        transient: !0
                    })), t.on("minimized_frame_fonts_ready", () => Pi(t, n, {
                        transient: !1
                    })), n.on("resize-request", e => Fi(t, e).then(() => n.emit("resize-request-done"))), n.on("resize-to-dimensions", () => Ai(t, n)), n.on("resize-to-theme-size", () => {
                        const e = n.getApplicationState().config.theme.name,
                            i = n.getApplicationState("mobile");
                        return Fi(t, { ...i ? zi.mobileGreetingFull : je(e),
                            ignoreHorizontalOffset: i
                        }).then(() => n.emit("resize-to-theme-size-done"))
                    }), Pi(t, n, {
                        transient: !1
                    })
                })(r, m), i(m)
            }
        }, x, r, f, o)
    })
}
var Wi, ji, qi;
const Ui = de(window.location.search),
    Gi = ae(),
    Hi = null != (Wi = Ui.organization_id) ? Wi : "",
    Bi = se(Ui),
    $i = v(),
    Zi = null != (ji = Ui.initial_view) ? ji : null,
    Ji = "1" === (null == Ui ? void 0 : Ui.pip_mode),
    Yi = "1" === Ui.custom_identity_provider,
    Xi = "1" === Ui.use_parent_storage,
    Ki = null != (qi = Ui.wrapper_version) ? qi : null;
if (!Gi && !Hi) throw new Error("No license or organization found in the URL.");

function Qi(e, t) {
    const n = { ...Gi ? {
                license: Gi
            } : {},
            organizationId: Hi,
            group: Bi,
            uniqueGroups: $i,
            isIdentityProviderEnabled: Yi,
            shouldUseParentStorage: Xi,
            initialView: Zi,
            adapter: e,
            pipMode: Ji,
            wrapperVersion: Ki
        },
        i = ct(),
        r = e => {
            e.setApplicationState({
                readyState: le
            }), Yi && re("custom_identity_provider_enabled", {}), n.initialView && !e.getCurrentView() && e.setCurrentView(n.initialView), i && i.getLogs().then(e => {
                re("iframe_vitals", Ee({ ...e,
                    isEmbedded: !!Ui.embedded
                }))
            })
        };
    Ui.embedded ? Ri(n, r, t) : hi(n, r, t)
}
export {
    tt as c, nt as h, Qi as i, Je as s, Ye as t, et as v
};