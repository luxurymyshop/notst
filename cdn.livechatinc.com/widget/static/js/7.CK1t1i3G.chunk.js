import {
    g0 as e,
    aF as t,
    Y as r,
    aD as s,
    cz as a,
    a2 as n,
    c0 as i,
    aW as o,
    o as p,
    al as l,
    Z as u,
    L as c,
    U as d,
    g1 as m,
    bq as g,
    g2 as y
} from "./3.BD1ZN3cS.chunk.js";
import {
    h as f
} from "./6.CKlS54Ol.chunk.js";
import {
    v as _
} from "./5.8dnJ5-bs.chunk.js";
import {
    i as v,
    d as b
} from "./8.yej6kGWr.chunk.js";

function h(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
const x = e => {
        let {
            id: t,
            authorId: r,
            timestamp: s,
            serverId: a = t,
            threadId: n = null,
            seen: i = !1
        } = e;
        return {
            id: t,
            serverId: a,
            thread: n,
            author: r,
            timestamp: s,
            seen: i
        }
    },
    T = e => {
        let {
            id: t,
            customId: r,
            authorId: s,
            timestamp: a,
            threadId: n,
            properties: i,
            seen: o,
            serverId: p,
            type: l,
            text: u,
            urlDetails: c,
            ...d
        } = e;
        return d
    },
    I = e => _("bb9e5b2f1ab480e4a715977b7b1b4279", e.properties) ? {
        reaction: t("bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction", e.properties)
    } : null,
    w = e => _("aa8151b317737a3e79d8e3384e6082de", e.properties) ? {
        useFixedAnswers: t("aa8151b317737a3e79d8e3384e6082de.use_fixed_answers", e.properties)
    } : null,
    k = t => {
        if (t.urlDetails) {
            const {
                urlDetails: e
            } = t;
            return { ...x(t),
                type: "url_preview",
                properties: {
                    serverType: t.type,
                    title: e.title,
                    description: e.description,
                    image: {
                        url: e.imageUrl,
                        link: e.url
                    }
                }
            }
        }
        if (e(t.text)) {
            return { ...x(t),
                type: "emoji",
                properties: {
                    serverType: t.type,
                    text: t.text,
                    ...T(t)
                }
            }
        }
        return { ...x(t),
            type: "message",
            properties: {
                serverType: t.type,
                text: t.text,
                customId: t.customId,
                ...T(t)
            }
        }
    },
    M = e => {
        switch (e.type) {
            case "url":
                if (f(e.value)) return null;
                if (v(e.value)) {
                    const t = b(e.value);
                    if (t && t.url) return { ...e,
                        proxiedValue: t.url
                    }
                }
                return e;
            case "webview":
                if (f(e.value)) return null;
                if (v(e.value)) {
                    const t = b(e.value);
                    if (t && t.url) return { ...e,
                        proxiedValue: t.url
                    }
                }
                return e;
            default:
                return e
        }
    },
    q = e => {
        const t = {};
        return "string" == typeof e.title && (t.title = e.title), "string" == typeof e.subtitle && (t.subtitle = e.subtitle), e.image && (t.image = { ...e.image,
            link: e.image.url
        }), e.buttons && (t.buttons = e.buttons.map(M).filter(Boolean)), t
    },
    U = e => {
        switch (e.template) {
            case "quick_replies":
                {
                    const t = e.elements[0];
                    return { ...x(e),
                        type: "message",
                        properties: {
                            serverType: e.type,
                            text: t.title,
                            quickReplies: t.buttons.map(e => ({
                                type: e.type,
                                text: e.text,
                                value: e.value,
                                postbackId: e.postbackId
                            })),
                            ...I(e),
                            ...w(e)
                        }
                    }
                }
            case "sticker":
                {
                    const t = e.elements[0].image;
                    return { ...x(e),
                        type: "sticker",
                        properties: {
                            serverType: e.type,
                            url: t.url,
                            name: t.name,
                            ...I(e),
                            ...w(e)
                        }
                    }
                }
            default:
                {
                    if (e.elements.length > 1) {
                        return { ...x(e),
                            type: "carousel",
                            properties: {
                                serverType: e.type,
                                cards: e.elements.map(q)
                            }
                        }
                    }
                    const t = e.elements[0];
                    if (1 === Object.keys(t).length && t.image) {
                        const {
                            image: r
                        } = t;
                        return { ...x(e),
                            type: "image_preview",
                            properties: {
                                name: r.name,
                                serverType: e.type,
                                url: r.url,
                                ...r.alternativeText && {
                                    alternativeText: r.alternativeText
                                },
                                ...I(e),
                                ...w(e)
                            }
                        }
                    }
                    return { ...x(e),
                        type: "rich_message",
                        properties: {
                            serverType: e.type,
                            card: q(t),
                            ...I(e),
                            ...w(e)
                        }
                    }
                }
        }
    },
    S = e => {
        const t = { ...x(e),
            type: "system_message",
            properties: {
                serverType: e.type,
                systemMessageType: e.systemMessageType,
                defaultText: e.text
            }
        };
        return e.textVars && (t.properties.textVariables = e.textVars), t
    },
    V = {
        question: {
            type: "text"
        },
        checkbox_for_email: {
            type: "checkbox",
            meta: "confirm_subscription"
        },
        header: {
            type: "information"
        },
        skill: {
            type: "group_select"
        }
    },
    j = e => e.map((e, t) => {
        const r = {};
        return _("label", e) && (r.label = e.label), _("checked", e) && (r.checked = e.checked), r.value = String(t), _("skill_id", e) && (r.value = String(e.skill_id)), _("embedded_chat_hide_when_offline", e) && (r.ticketFormDisabled = Boolean(e.embedded_chat_hide_when_offline)), _("queue_template", e) && (r.queueTemplate = e.queue_template), r
    }),
    B = e => {
        let t = !1;
        const r = {
            fields: e.fields.sort((e, t) => e.order - t.order).map((e, r) => {
                const s = {};
                if ("facebookConnect" === e.type) return t = !0, !1;
                e.id ? s.name = e.id : -1 === ["header", "information"].indexOf(e.type) && (s.name = String(r)), _("value", e) && (s.value = e.value), _("label", e) && (s.label = e.label), _("required", e) && (s.required = e.required), "rating" === e.type && (s.commentLabel = e.options[0]), e.skills && e.skills.length > 0 ? s.options = j(e.skills) : e.options && e.options.length > 0 && (e.options_data ? s.options = j(e.options_data) : o(e.options[0]) ? s.options = e.options.map((e, t) => {
                    let {
                        label: r
                    } = e;
                    return {
                        label: r,
                        value: String(t)
                    }
                }) : s.options = e.options.map((e, t) => ({
                    label: e,
                    value: String(t)
                }))), e.serverType && (s.serverType = e.serverType);
                const {
                    type: a,
                    meta: n
                } = (e => ({
                    type: V[e] && V[e].type || e,
                    meta: V[e] && V[e].meta || !1
                }))(e.type);
                return s.type = a, n && (s.meta = n), s
            }).filter(Boolean)
        };
        return e.id && (r.id = e.id), t && (r.facebookConnect = !0), r
    },
    A = e => ({ ...e,
        fields: e.fields.map(e => {
            switch (e.type) {
                case "name":
                case "subject":
                    return { ...e,
                        maxLength: 1024
                    };
                case "email":
                case "textarea":
                    return { ...e,
                        required: !0
                    };
                default:
                    return e
            }
        })
    }),
    D = e => {
        let {
            hdLicenseID: t,
            group: o,
            pageUrl: p,
            form: l,
            answers: u,
            additionalInfo: c
        } = e;
        const d = ((e, t) => {
                const o = s(e => "message" === e ? "textarea" : e, e);
                return t.fields.map(e => {
                    if ("information" === e.type) return null;
                    const t = {
                        type: e.type,
                        text: "undefined" != typeof document ? a(e.label) : e.label,
                        serverType: e.serverType
                    };
                    return (e.name in o || e.type in o) && ("options" in e ? t.value = n(o[e.name]).map(t => r(e => e.value === t, e.options).label).join(", ") : e.name in o ? t.value = o[e.name] : t.value = o[e.type], t.value = i(t.value), t.text = t.text + " " + t.value), t
                }).filter(Boolean)
            })(u, l),
            m = r(e => "email" === e.type || "email" === e.serverType, d),
            g = r(e => "name" === e.type || "name" === e.serverType, d);
        if (!m) throw new Error("Missing email");
        if (!r(e => "textarea" === e.type, d)) throw new Error("Missing message");
        const y = r(e => "subject" === e.type || "subject" === e.serverType, d),
            f = d.filter(e => {
                let {
                    type: t,
                    serverType: r
                } = e;
                return -1 === ["name", "email", "subject"].indexOf(r || t)
            }).map(e => {
                let {
                    text: t
                } = e;
                return t
            }).join("\n");
        return { ...y && y.value && {
                subject: y.value
            },
            message: {
                text: f
            },
            requester: {
                email: m.value,
                ...g && g.value && {
                    name: g.value
                }
            },
            integration: {
                type: "livechat",
                licenseID: t,
                teamID: String(o),
                referenceReason: c.lastDisplayedReason,
                referenceReasonAt: c.lastDisplayedAt,
                ...p && {
                    referenceURL: p
                }
            }
        }
    },
    F = (e, t) => {
        const {
            requester: r,
            message: s,
            subject: a
        } = t, {
            text: n
        } = s, {
            name: i,
            email: o
        } = r;
        return {
            id: e,
            text: n,
            ...a && {
                subject: a
            },
            visitor: {
                name: i || null,
                email: o || null
            }
        }
    },
    C = {
        group_chooser: "select",
        header: "information",
        name: "text",
        question: "text",
        subject: "text",
        checkbox_for_email: "checkbox"
    },
    L = (e, t) => e.getSessionUser().serverId === t.authorId,
    E = (e, t) => L(e, t) ? e.getSessionUser().id : t.authorId,
    O = (e, t) => {
        if ("file" === t.type) return t.id;
        if (L(e, t)) return "customId" in t && e.hasEvent(c, t.customId) ? t.customId : t.id;
        const r = e.getEventByServerId(c, t.id);
        return r ? r.id : t.id
    },
    R = e => null != e && e.groupIds ? e.groupIds[0] : null,
    z = e => "offline" === e ? "offline" : "online",
    N = (e, t) => {
        const r = e.getSessionUser().serverId,
            s = d(t.filter(e => e.present && e.id !== r));
        return s ? s.id : null
    },
    P = (e, t) => {
        let {
            chat: r,
            chat: {
                thread: s,
                users: a
            }
        } = t;
        return {
            id: r.id,
            active: s.active,
            agent: N(e, a),
            events: s.events.map(t => $(e, { ...t,
                seen: !1
            })).filter(Boolean),
            group: R(r.access),
            thread: s.id,
            previousThread: s.previousThreadId,
            properties: ie(s)
        }
    },
    W = e => {
        let {
            id: t,
            active: r,
            access: s,
            lastThreadId: a
        } = e;
        return {
            id: t,
            active: r,
            lastThreadId: a,
            group: R(s)
        }
    },
    Y = (e, t) => ({ ...t,
        type: e,
        fields: t.fields.reduce((e, t) => {
            let {
                id: r,
                ...s
            } = t;
            const a = { ...s,
                type: C[s.type] || s.type,
                serverName: r,
                serverType: s.type
            };
            if ("information" === a.type) a.value = a.label.replace(/<br(\s)?(\/)?>/gi, "\n");
            else if ("checkbox_for_email" === s.type) a.meta = "confirm_subscription", a.label = "", a.options = [{
                label: s.label,
                checked: s.checked,
                value: "index0_0",
                originalValue: "0"
            }], s.checked && (a.defaultValue = [a.options[0].value]);
            else if (s.options) {
                const e = "group_chooser" === s.type;
                e && (a.meta = "groupSelect"), a.options = a.options.map((t, r) => {
                    const s = e ? t.groupId : t.id;
                    return { ...p(["id", "checked"], t),
                        value: "index" + r + "_" + s,
                        originalValue: String(s)
                    }
                })
            }
            return a.name = l(s.type, ["name", "email", "rating"]) ? s.type : u() + "_" + r, "rating" === s.type ? [].concat(e, [a, {
                name: "rateComment",
                type: "textarea",
                label: a.commentLabel,
                required: !1,
                dependOn: "rating"
            }]) : [].concat(e, [a])
        }, [])
    }),
    Z = e => A(Y("ticket", e)),
    G = (e, t) => {
        const r = e.getSessionUser().serverId,
            {
                [r]: s,
                ...a
            } = t;
        return {
            sessionUserSeenUpTo: s,
            latestOtherUserSeenUpTo: d(g(a).filter(Boolean).sort())
        }
    },
    H = e => {
        const t = y(e => "systemMessageType" in e && "rating.chat_commented" === e.systemMessageType, e),
            r = y(e => "systemMessageType" in e && "rating.chat_rated" === e.systemMessageType, e),
            s = y(e => "systemMessageType" in e && "rating.chat_rating_canceled" === e.systemMessageType, e);
        return e.filter((e, a) => {
            const n = "systemMessageType" in e && ["rating.chat_rated", "rating.chat_commented", "rating.chat_rating_canceled"].includes(e.systemMessageType),
                i = "filled_form" === e.type && !e.fields.some(e => "answer" in e && Boolean(e.answer));
            return !n && !i || a === t || a === r || a === s && s > r
        })
    },
    J = e => {
        if (!e) return !1;
        const {
            events: t,
            active: r
        } = e;
        if (r) return !0;
        if (!t.length) return !1;
        const s = t[0],
            a = d(t);
        return 2 !== t.length || "filled_form" !== s.type || "system_message" !== a.type || "manual_archived_customer" !== a.systemMessageType || s.fields.some(e => "answer" in e && Boolean(e.answer))
    },
    K = (e, t) => {
        let {
            thread: r,
            users: s,
            eventsSeenUpToMap: a
        } = t;
        const n = e.getSessionUser().serverId,
            i = N(e, s),
            {
                sessionUserSeenUpTo: o,
                latestOtherUserSeenUpTo: p
            } = G(e, a);
        if (!J(r)) return {
            thread: null,
            eventsSeenUpToMap: a
        };
        const {
            id: l,
            active: u,
            events: c,
            access: d
        } = r;
        return {
            thread: {
                id: l,
                active: u,
                agent: u ? i : null,
                events: (u ? c : H(c)).map(t => {
                    const r = t.authorId === n ? p >= t.createdAt : o >= t.createdAt;
                    return $(e, { ...t,
                        seen: r
                    })
                }).filter(Boolean),
                group: R(d),
                properties: ie(r)
            },
            eventsSeenUpToMap: a
        }
    },
    Q = (e, t) => {
        let {
            thread: r
        } = t;
        const {
            id: s,
            active: a,
            events: n,
            access: i
        } = r, {
            eventsSeenUpToMap: o
        } = e.getChat(c).properties, p = e.getSessionUser().serverId, {
            sessionUserSeenUpTo: l,
            latestOtherUserSeenUpTo: u
        } = G(e, o);
        return J(r) ? {
            id: s,
            active: a,
            events: H(n).map(t => {
                const r = t.authorId === p ? u >= t.createdAt : l >= t.createdAt;
                return $(e, { ...t,
                    seen: r
                })
            }).filter(Boolean),
            group: R(i),
            properties: ie(r)
        } : null
    },
    X = e => {
        let {
            properties: t,
            ...r
        } = e;
        if ("lc2" in t) {
            const e = t.lc2;
            if ("greeting_unique_id" in e) return ((e, t) => {
                const r = k({ ...e
                });
                return r.properties = { ...r.properties,
                    invitation: !0,
                    subtype: e.subtype,
                    id: t.greeting_id,
                    uniqueId: t.greeting_unique_id
                }, r
            })(r, e);
            if (e.welcome_message) return ((e, t) => {
                var r;
                return k({ ...e,
                    welcomeMessage: !0,
                    ...(null == (r = t.chats) ? void 0 : r.formatting) && {
                        formatting: t.chats.formatting
                    },
                    ..."bb9e5b2f1ab480e4a715977b7b1b4279" in t && {
                        reaction: t.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction
                    },
                    ..."aa8151b317737a3e79d8e3384e6082de" in t && {
                        useFixedAnswers: t.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers
                    }
                })
            })(r, t)
        }
        return ((e, t) => {
            var r;
            return k({ ...e,
                ...t.url_details && {
                    urlDetails: t.url_details
                },
                ...t.translation && {
                    translation: ue(t.translation)
                },
                ...(null == (r = t.chats) ? void 0 : r.formatting) && {
                    formatting: t.chats.formatting
                },
                ..."bb9e5b2f1ab480e4a715977b7b1b4279" in t && {
                    reaction: t.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction
                },
                ..."aa8151b317737a3e79d8e3384e6082de" in t && {
                    useFixedAnswers: t.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers
                }
            })
        })(r, t)
    },
    $ = (e, t) => {
        const r = { ...t,
            id: O(e, t),
            serverId: t.id,
            authorId: E(e, t),
            timestamp: new Date(t.createdAt).getTime()
        };
        switch (r.type) {
            case "form":
                return te(r);
            case "filled_form":
                return re(r);
            case "message":
                return X(r);
            case "rich_message":
                return (e => {
                    if ("lc2" in e.properties && "greeting_unique_id" in e.properties.lc2) {
                        const t = U(e);
                        return t.properties = { ...t.properties,
                            invitation: !0,
                            subtype: e.subtype,
                            id: e.properties.lc2.greeting_id,
                            uniqueId: e.properties.lc2.greeting_unique_id,
                            ..."bb9e5b2f1ab480e4a715977b7b1b4279" in e.properties && {
                                reaction: e.properties.bb9e5b2f1ab480e4a715977b7b1b4279.message_reaction
                            }
                        }, t
                    }
                    const t = U(e);
                    return "aa8151b317737a3e79d8e3384e6082de" in e.properties && (t.properties = { ...t.properties,
                        useFixedAnswers: e.properties.aa8151b317737a3e79d8e3384e6082de.use_fixed_answers
                    }), t
                })(r);
            case "file":
                return (e => {
                    if (e.thumbnails) {
                        const {
                            thumbnails: t
                        } = e, r = { ...x(e),
                            type: "image_preview",
                            properties: {
                                name: e.name,
                                serverType: e.type,
                                ...t.default,
                                link: e.url,
                                srcSet: t.default.url + " 1x, " + t.high.url + " 2x",
                                ...I(e),
                                ...w(e)
                            }
                        };
                        return e.alternativeText && (r.properties.alternativeText = e.alternativeText), r
                    }
                    return { ...x(e),
                        type: "message",
                        properties: {
                            serverType: e.type,
                            text: e.name,
                            url: e.url,
                            ...e.alternativeText && {
                                alternativeText: e.alternativeText
                            },
                            ...I(e),
                            ...w(e)
                        }
                    }
                })(r);
            case "system_message":
                return se(r);
            case "custom":
                return ee(r);
            default:
                return null
        }
    },
    ee = e => {
        const {
            properties: t,
            customId: r
        } = e;
        return { ...x(e),
            type: "custom",
            properties: { ...t,
                customId: r
            }
        }
    },
    te = e => {
        var t;
        const r = { ...e,
            fields: e.fields.map(e => e.id ? e : { ...e,
                id: u()
            })
        };
        return { ...x(r),
            type: "form",
            properties: {
                answered: !1,
                formType: (null == (t = r.properties.lc2) ? void 0 : t.form_type) || null,
                fields: Y("", r).fields,
                formId: r.formId.replace(/_[0-9]+/, "")
            }
        }
    },
    re = e => {
        var t;
        return { ...x(e),
            type: "form",
            properties: {
                answered: !0,
                formId: e.formId,
                formType: (null == (t = e.properties.lc2) ? void 0 : t.form_type) || null,
                fields: e.fields.filter(e => "answer" in e || "answers" in e && 0 !== e.answers.length).map(e => {
                    if ("string" == typeof e.answer) return e;
                    if ("answers" in e) {
                        const {
                            answers: t,
                            ...r
                        } = e;
                        return { ...r,
                            answer: t.map(e => {
                                let {
                                    label: t
                                } = e;
                                return t
                            })
                        }
                    }
                    return { ...e,
                        answer: e.answer.label
                    }
                })
            }
        }
    },
    se = e => {
        switch (e.systemMessageType) {
            case "archived_customer_disconnected":
            case "routing.archived_inactive":
                return S({ ...e,
                    systemMessageType: "client_inactive"
                });
            case "manual_archived_agent":
                return S({ ...e,
                    systemMessageType: "operator_closed_session",
                    textVars: {
                        operator: e.textVars.agent
                    }
                });
            case "manual_archived_customer":
                return S({ ...e,
                    systemMessageType: "chat_closed_by_customer"
                });
            case "system_archived":
            case "customer_banned":
            case "routing.archived_deleted":
            case "routing.archived_disconnected":
            case "routing.archived_offline":
            case "routing.archived_other":
            case "routing.archived_remotely_signed_out":
            case "routing.archived_signed_out":
                return S({ ...e,
                    systemMessageType: "chat_session_closed"
                });
            case "routing.assigned_other":
                return S({ ...e,
                    systemMessageType: "user_transfer",
                    textVars: {
                        operator: e.textVars.agent
                    }
                });
            case "routing.assigned_deleted":
            case "routing.assigned_disconnected":
            case "routing.assigned_inactive":
            case "routing.assigned_remotely_signed_out":
            case "routing.assigned_signed_out":
                return S({ ...e,
                    systemMessageType: "user_transfer",
                    textVars: {
                        operator: e.textVars.agent_added
                    }
                });
            case "chat_transferred":
                return S({ ...e,
                    systemMessageType: "user_transfer",
                    textVars: {
                        operator: e.textVars.targets
                    }
                });
            case "agent_joined":
            case "agent_added":
                return S({ ...e,
                    systemMessageType: "operator_joined_conference",
                    textVars: {
                        operator: e.textVars.agent
                    }
                });
            case "agent_left":
            case "agent_removed":
                return S({ ...e,
                    systemMessageType: "operator_left_conference",
                    textVars: {
                        operator: e.textVars.agent
                    }
                });
            case "rating.chat_rated":
                return S({ ...e,
                    systemMessageType: "rate_me_confirmation_" + e.textVars.score
                });
            case "rating.chat_commented":
                return S({ ...e,
                    systemMessageType: "rate_me_comment_added",
                    textVars: {
                        comment: e.textVars.comment
                    }
                });
            case "rating.chat_rating_canceled":
                return S({ ...e,
                    systemMessageType: "rate_me_cancel"
                });
            case "custom":
                {
                    const {
                        systemMessageType: t,
                        ...r
                    } = e;
                    return S(r)
                }
            default:
                return null
        }
    },
    ae = e => {
        const {
            score: t,
            comment: r
        } = e;
        return { ..."number" == typeof t && {
                rate: 1 === t ? "good" : "bad"
            },
            ..."string" == typeof r && {
                rateComment: r
            }
        }
    },
    ne = e => ({
        position: e.position,
        waitingTime: e.waitTime
    }),
    ie = e => ({ ..."rating" in e.properties && ae(e.properties.rating),
        ...e.queue && {
            queue: ne(e.queue)
        },
        timestamp: new Date(e.createdAt).getTime()
    }),
    oe = (e, t) => {
        const r = {
            event: $(e, t.event),
            author: { ...t.agent,
                type: "agent"
            }
        };
        var s;
        return r.event.properties = { ...r.event.properties,
            invitation: !0,
            id: t.id,
            addon: t.addon,
            uniqueId: t.uniqueId,
            accepted: t.accepted,
            type: (s = r.event, s.properties.quickReplies ? "quick_replies" : "rich_message" === s.type ? "card" : "plain_text"),
            subtype: t.subtype,
            receivedFirstTime: t.displayedFirstTime,
            isExitIntent: t.isExitIntent
        }, r
    },
    pe = (e, t) => {
        const {
            type: r,
            id: s
        } = t;
        switch (r) {
            case "filled_form":
                {
                    const {
                        formId: e,
                        ...r
                    } = t;
                    return {
                        customId: r.customId,
                        formId: e,
                        ...r
                    }
                }
            case "emoji":
            case "message":
            case "message_draft":
            case "url_preview":
                {
                    const {
                        text: r,
                        triggeredBy: a
                    } = t.properties,
                    n = {
                        type: "message",
                        customId: s,
                        text: r
                    };
                    if (a) {
                        const t = e.getEvent(c, a.event);
                        t && t.thread && t.serverId ? n.postback = {
                            id: a.button.postbackId,
                            type: "message",
                            value: a.button.value,
                            eventId: t.serverId,
                            threadId: t.thread
                        } : n.properties = {
                            c5e4f61e1a6c3b1521b541bc5c5a2ac5: {
                                postback_id: a.button.postbackId
                            }
                        }
                    }
                    return n
                }
            case "custom_system_message":
                {
                    const {
                        recipients: e,
                        text: r
                    } = t.properties;
                    return {
                        type: "system_message",
                        customId: s,
                        text: r,
                        recipients: e,
                        systemMessageType: "custom"
                    }
                }
            default:
                return
        }
    },
    le = (e, t) => {
        if (t.id === e.getSessionUser().serverId || "customer" === t.type) {
            const e = {
                id: t.id,
                type: "customer"
            };
            return t.name && "Customer" !== t.name && (e.name = t.name), t.email && (e.email = t.email), t.sessionFields && (e.properties = t.sessionFields), e
        }
        return {
            id: t.id,
            type: t.type,
            name: t.name,
            avatar: t.avatar ? "https://" + m(t.avatar) : "",
            properties: {
                jobTitle: t.jobTitle,
                isBot: t.isBot || !1
            }
        }
    },
    ue = e => ({
        sourceLangCode: e.source_lang_code,
        targetLangCode: e.target_lang_code,
        targetMessage: e.target_message
    }),
    ce = (e, t) => {
        const r = $(e, t);
        return r.id = t.customId, r.properties = { ...r.properties,
            isPreview: !0
        }, r
    };
export {
    Z as a, ae as b, h as c, ne as d, ue as e, oe as f, P as g, D as h, $ as i, A as j, le as k, ce as l, F as m, pe as n, W as o, Y as p, k as q, K as r, z as s, B as t, Q as u
};