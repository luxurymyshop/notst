import {
    I as e,
    bV as t,
    Y as r,
    X as s,
    $ as a,
    L as n,
    e2 as o,
    U as i,
    a8 as d,
    aK as u,
    k as c,
    f$ as p,
    bo as h,
    u as l,
    fJ as m
} from "./3.BD1ZN3cS.chunk.js";
import {
    w as g
} from "./5.8dnJ5-bs.chunk.js";
import {
    n as v,
    g as f,
    o as I,
    q as k,
    r as _,
    s as w,
    a as S,
    u as y,
    p as M
} from "./7.CK1t1i3G.chunk.js";
import "./6.CKlS54Ol.chunk.js";
const T = (e, t) => {
        const r = m(e, n);
        return r ? { ...t,
            events: t.events.map(e => e.properties.welcomeMessage || e.properties.invitation ? { ...e,
                id: r.id
            } : e)
        } : t
    },
    U = e => ({ ...e,
        properties: { ...e.properties,
            accepted: !0
        }
    }),
    x = (e, t) => {
        let {
            sdk: r
        } = e;
        const {
            uniqueId: s,
            id: a
        } = t.event.properties;
        return r.acceptGreeting({
            greetingId: a,
            uniqueId: s
        }).then(() => U(t), e => {
            if ("INTERNAL" === e.code) return U(t);
            throw e
        })
    },
    C = function(i, d) {
        var u;
        let {
            sdk: c,
            store: p
        } = i, {
            group: h,
            customerStartingEvent: l,
            agentFakeEvent: m
        } = void 0 === d ? {} : d;
        const I = {
            chat: {
                thread: {
                    properties: {}
                },
                properties: {}
            }
        };
        e(p) && (I.continuous = !0, I.chat.properties.routing = {
            email_follow_up: !0
        }), "number" == typeof h && (I.chat.access = {
            groupIds: [h]
        });
        let k = {};
        if ("filled_form" === (null == l ? void 0 : l.type)) {
            var _, w;
            k = { ...t(Boolean, {
                    name: null == (_ = r(e => "name" === e.type, l.fields)) ? void 0 : _.answer,
                    email: null == (w = r(e => "email" === e.type, l.fields)) ? void 0 : w.answer
                })
            }
        }
        const S = p.getSessionUser();
        S.name && "Customer" !== S.name || (k.name = p.localize("client"));
        const y = s(k) ? Promise.resolve() : c.updateCustomer(k).catch(e => a("update_customer_request_failed", e));
        if ("ticket" === (null == l || null == (u = l.properties.lc2) ? void 0 : u.form_type)) I.active = !1, I.chat.thread.properties.routing = {
            offline_message: !0
        }, I.chat.thread.events = [v(p, l)];
        else {
            const e = p.getEvents(n).filter(e => e.type === o && null === e.serverId);
            if (s(e) || (I.chat.thread.events = e.map(e => v(p, e))), l) {
                const e = v(p, l);
                g(I.chat.thread.events) ? I.chat.thread.events.push(e) : I.chat.thread.events = [e]
            }
            m && (I.chat.thread.properties = (e => ({
                lc2: {
                    welcome_author_id: e.author,
                    ...e.properties.invitation ? {
                        greeting_id: e.properties.id,
                        greeting_unique_id: e.properties.uniqueId
                    } : {
                        welcome_text: e.properties.originalText
                    }
                }
            }))(m))
        }
        const M = p.getChat(n).serverId;
        return M ? y.then(() => c.resumeChat({ ...I,
            chat: { ...I.chat,
                id: M
            }
        })).then(e => T(p, f(p, e))) : y.then(() => c.startChat(I)).then(e => T(p, f(p, e)))
    },
    b = e => {
        let {
            sdk: t
        } = e;
        return t.listChats().then(e => {
            let {
                chatsSummary: t
            } = e;
            const r = i(t);
            return r ? I(r) : null
        })
    },
    q = (e, t) => {
        let {
            sdk: r
        } = e, {
            groupIds: s
        } = t;
        return r.listGroupStatuses({
            groupIds: s
        }).then(e => s.reduce((t, r) => {
            const s = e[r];
            return t[r] = s ? w(s) : "not_found", t
        }, {}))
    },
    E = (e, t) => {
        let {
            groupId: r
        } = t;
        return q(e, {
            groupIds: [r]
        }).then(e => {
            let {
                [r]: t
            } = e;
            return t
        })
    },
    F = function(e, t, r) {
        let {
            sdk: s
        } = e;
        return void 0 === r && (r = M), s.getForm(t).then(e => e.enabled ? {
            enabled: !0,
            form: r(t.type, e.form)
        } : e).catch(e => (a("get_form_request_failed", e), {
            enabled: !1
        }))
    },
    N = e => {
        let {
            sdk: t,
            store: r
        } = e;
        return t.getPredictedAgent().then(e => {
            let {
                agent: t,
                queue: s
            } = e;
            const a = r.localize("welcome_to_chat");
            return {
                agent: t,
                groupHasQueue: s,
                message: k((o = {
                    id: d(r.getIndexedEvents(n)),
                    type: "message",
                    authorId: t.id,
                    text: u(r, a, {
                        agent: t.name
                    }),
                    originalText: a,
                    welcomeMessage: !0
                }, { ...o,
                    serverId: null,
                    timestamp: Date.now(),
                    seen: !0,
                    properties: o.properties || {}
                }))
            };
            var o
        })
    },
    j = (e, t) => F(e, {
        groupId: t,
        type: "postchat"
    }),
    D = (e, t) => F(e, {
        groupId: t,
        type: "ticket"
    }, (e, t) => S(t)),
    z = (e, t) => {
        let {
            store: r
        } = e, {
            groupId: s
        } = t;
        const {
            license: a,
            region: n,
            organizationId: o
        } = r.getApplicationState();
        return c({
            organizationId: o,
            licenseId: a,
            groupId: s,
            region: n,
            version: "tfm"
        }).then(e => e.__unsafeProperties.ticketFormMode || p(e))
    },
    G = (e, t) => {
        let {
            sdk: r
        } = e, {
            chatId: s
        } = t;
        return r.getChat({
            chatId: s
        }).then(e => {
            let {
                users: t,
                eventsSeenUpToMap: r
            } = e;
            return {
                users: t,
                eventsSeenUpToMap: r
            }
        })
    },
    H = (e, t) => {
        let {
            sdk: r,
            store: s
        } = e, {
            chatId: a,
            threadId: n
        } = t;
        return r.getChat({
            chatId: a,
            threadId: n
        }).then(e => _(s, {
            thread: e.thread,
            users: e.users,
            eventsSeenUpToMap: e.eventsSeenUpToMap
        }))
    },
    O = (e, t) => t.next().then(t => {
        let {
            value: r,
            done: s
        } = t;
        return r ? {
            value: r.threads.map(t => y(e, {
                thread: t
            })),
            done: s
        } : {
            value: r,
            done: s
        }
    }).catch(e => {
        if ("NOT_FOUND" === e.code) return {
            value: [],
            done: !0
        };
        throw e
    }),
    P = (e, t) => {
        let {
            sdk: r,
            store: s
        } = e;
        const a = r.getChatHistory({
            chatId: t
        });
        return {
            next: () => O(s, a)
        }
    },
    A = (e, t) => {
        let {
            sdk: r,
            store: s
        } = e;
        const a = r.getChatHistory({
            chatId: t
        });
        return Promise.all([a.next(), G({
            sdk: r,
            store: s
        }, {
            chatId: t
        })]).then(e => {
            let [{
                value: t,
                done: r
            }, {
                users: n,
                eventsSeenUpToMap: o
            }] = e;
            const i = h("id", n);
            if (t && t.threads.some(e => e.events.some(e => "system" !== e.authorId && !(e.authorId in i)))) {
                const e = new Error;
                throw e.code = "MISSING_USER", e
            }
            return {
                threads: t && t.threads.map(e => _(s, {
                    thread: e,
                    users: n,
                    eventsSeenUpToMap: o
                }).thread).filter(Boolean),
                eventsSeenUpToMap: o,
                hasMore: !r,
                iterator: {
                    next: () => O(s, a)
                }
            }
        }).catch(e => {
            if ("NOT_FOUND" === e.code) return {
                threads: [],
                hasMore: !1
            };
            throw e
        })
    },
    B = async (e, t) => {
        const r = await l("https://api.helpdesk.com/v1/contactForms/formSettings?licenseID=" + e + "&lcGroupID=" + t);
        if (!r.ok) throw new Error("Failed to fetch HelpDesk ticket form configuration");
        return r.json()
    };
export {
    E as a, z as b, C as c, N as d, A as e, B as f, D as g, P as h, j as i, x as j, H as k, b as l, q as m
};