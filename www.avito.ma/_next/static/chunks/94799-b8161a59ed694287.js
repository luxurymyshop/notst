"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94799], {
        21198: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return i
                }
            });
            var r, o = n(71383),
                i = (0, n(68806).Ps)(r || (r = (0, o.Z)(["\n  fragment LabelValue on TargetingCriterion {\n    label\n    value\n  }\n\n  query (\n    $type: MediaType! = TP\n    $active: Boolean = true\n    $category: String\n    $city: String\n    $price: Int\n    $platform: String\n  ) {\n    getMediaCampaigns(\n      type: $type\n      active: $active\n      category: $category\n      city: $city\n      price: $price\n      platform: $platform\n    ) {\n      _id\n      active\n      name\n      client\n      activityPeriod {\n        from\n        to\n      }\n      campaignData {\n        clientLogo\n        message\n        message2\n        redirectLink\n        months\n        rate\n        name\n        creative\n        type\n        title\n        backgroundColor\n        thumbnailCreative\n        bigCreative\n        iframeLink\n        leadsforceCampaign\n        formCreative\n        formCta\n        heading\n        subheading\n        desktopCrea\n        creaCta\n        sov\n        msiteCreative\n        desktopCreative\n      }\n      platforms\n      targeting {\n        categories {\n          ...LabelValue\n        }\n        cities {\n          ...LabelValue\n        }\n      }\n    }\n  }\n"])))
        },
        29995: function(e, t, n) {
            n.d(t, {
                qC: function() {
                    return d
                },
                rf: function() {
                    return p
                },
                zK: function() {
                    return f
                },
                zT: function() {
                    return l
                }
            });
            var r = n(25675),
                o = n.n(r),
                i = n(76871),
                c = n(26654),
                a = n(85893);

            function s(e, t) {
                var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return u(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        a = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var l = function(e) {
                var t = e.fieldName,
                    n = e.iconName,
                    r = e.bg;
                return n ? (0, a.jsx)(c.J, {
                    width: 35,
                    height: 35,
                    bg: r || "smoke_lighter",
                    withGap: !0,
                    children: (0, a.jsx)(o(), {
                        alt: t,
                        src: "".concat(i.assets, "/icons/svg/").concat(n, ".svg"),
                        width: 24,
                        height: 24
                    })
                }) : null
            };

            function d(e, t) {
                var n, r = t.id,
                    o = t.adType,
                    i = s(e);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var c = n.value;
                        if (c.children) {
                            var a = d(c.children, {
                                id: r,
                                adType: o
                            });
                            if (a) return a
                        }
                        if (o) {
                            if (c.category.id === String(r) && c.category.adType === o) return c
                        } else if (c.category.id === String(r)) return c
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
            }

            function f(e, t) {
                return null === e || void 0 === e ? void 0 : e.find((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.id;
                    return n === t
                }))
            }

            function p(e, t) {
                var n, r, o, i, c = null !== e && void 0 !== e && null !== (n = e.parent) && void 0 !== n && n.label ? "".concat(e.parent.label, " - ") : "",
                    a = (null === e || void 0 === e || null === (r = e.child) || void 0 === r ? void 0 : r.length) > 0 ? e.child.map((function(e) {
                        return e.label
                    })).slice(0, t || e.child.length).join(", ") : (null === e || void 0 === e || null === (o = e.child) || void 0 === o ? void 0 : o.label) || "",
                    s = (null === e || void 0 === e || null === (i = e.child) || void 0 === i ? void 0 : i.length) - t > 0 ? ", +".concat(e.child.length - t) : "";
                return "".concat(c).concat(a).concat(s)
            }
        },
        86153: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return T
                }
            });
            var r = n(59499),
                o = n(17674),
                i = n(90116),
                c = n(67294),
                a = n(4511),
                s = n(73723),
                u = n(41686),
                l = n(19521),
                d = n(67710),
                f = n(19235),
                p = n(31155),
                v = n(90762),
                y = n(80775),
                O = (0, l.default)(d.i).withConfig({
                    componentId: "sc-qvuckj-0"
                })(["display:flex;align-items:center;justify-content:space-between;background-color:", ";gap:", ";width:100%;padding-top:", ";padding-bottom:", ";", " @media (min-width:", "px){height:68px;}@media (min-width:", "px){max-width:1092px;}@media (min-width:", "px){max-width:1272px;}@media (min-width:", "px){max-width:1412px;}"], (function(e) {
                    var t = e.backgroundColor;
                    return f.ZP[t]
                }), (0, p.W)(4), (0, p.W)(2), (0, p.W)(2), (function(e) {
                    return e.isFrench ? (0, l.css)(["flex-direction:row-reverse;"]) : null
                }), v.AV.md, v.AV.lg, v.AV.xl, v.AV.xxl),
                g = l.default.div.withConfig({
                    componentId: "sc-qvuckj-1"
                })(["", " display:flex;justify-content:center;align-items:center;"], (function(e) {
                    return e.isFrench ? (0, l.css)(["flex-direction:row-reverse;"]) : null
                })),
                b = (0, l.default)(y.JO).withConfig({
                    componentId: "sc-qvuckj-2"
                })(["min-height:32px;min-width:32px;margin:5px;"]),
                h = (0, l.default)(y.JO).attrs({
                    name: "Close",
                    size: "md"
                }).withConfig({
                    componentId: "sc-qvuckj-3"
                })(["min-height:32px;min-width:32px;margin:5px;"]),
                m = l.default.div.withConfig({
                    componentId: "sc-qvuckj-4"
                })([""]),
                j = n(74324),
                E = n(52471),
                P = n(8309),
                w = n(73315),
                S = n(20511),
                A = n(16700),
                D = n(69311),
                I = n(85893);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function k(e) {
                var t = e.name,
                    n = e.button,
                    r = e.isFrench,
                    o = e.closeButton,
                    i = e.color,
                    a = e.backgroundColor,
                    l = e.content,
                    d = e.icon,
                    f = e.addToClosedBannersList,
                    p = e.containerRef;
                return (0, c.useEffect)((function() {
                    (0, w.ut)(S.D.COMMON__ELEMENT_DISPLAYED, {
                        value: t,
                        element_name: "notification_banner"
                    })
                }), []), (0, I.jsxs)(O, {
                    ref: p,
                    isFrench: r,
                    backgroundColor: a,
                    children: [(0, I.jsxs)(g, {
                        isFrench: r,
                        children: [o && (0, I.jsx)(m, {
                            onClick: function() {
                                f(t), (0, w.ut)(S.D.COMMON__ELEMENT_CLICKED, {
                                    value: t,
                                    element_name: "close_notification_banner"
                                })
                            },
                            children: (0, I.jsx)(h, {})
                        }), n && (0, I.jsx)(s.zx, {
                            onClick: function() {
                                (0, w.ut)(S.D.COMMON__ELEMENT_CLICKED, {
                                    value: t,
                                    element_name: "open_notification_banner"
                                }), (0, j.uX)(n.url)
                            },
                            radius: "radiusMax",
                            color: n.color,
                            size: "sm",
                            uppercase: !1,
                            children: n.text
                        })]
                    }), (0, I.jsxs)(g, {
                        isFrench: r,
                        children: [(0, I.jsx)(u.xv, {
                            dir: r ? "ltr" : "rtl",
                            variant: "body2",
                            color: i,
                            noMargin: !0,
                            children: l
                        }), d && (0, I.jsx)(b, {
                            color: i,
                            name: d,
                            size: "md"
                        })]
                    })]
                })
            }

            function T(e) {
                var t = e.containerRef,
                    n = (0, E.S)(P.aw.notificationBanner.key),
                    r = function(e) {
                        var t = e.name,
                            n = (0, c.useState)([]),
                            r = n[0],
                            o = n[1],
                            a = (0, c.useState)(!0),
                            s = a[0],
                            u = a[1];
                        return (0, c.useEffect)((function() {
                            var e = (0, D.Wi)("lsn") || [];
                            o(e), u(!(void 0 === e.find((function(e) {
                                return e === t
                            }))))
                        }), []), [s, function() {
                            var e = [].concat((0, i.Z)(r), [t]);
                            (0, D.e0)("lsn", e), o(e), u(!0)
                        }]
                    }(n),
                    s = (0, o.Z)(r, 2),
                    u = s[0],
                    l = s[1];
                return Boolean(!u && Object.keys(n).length && n.name && n.content) ? (0, I.jsx)(a.SV, {
                    fallback: null,
                    onError: function(e) {
                        A.Z.error("Error occured in notifiaction banner", null === e || void 0 === e ? void 0 : e.toString())
                    },
                    children: (0, I.jsx)(k, _(_({}, _(_({}, n), {}, {
                        addToClosedBannersList: l
                    })), {}, {
                        containerRef: t
                    }))
                }) : null
            }
            k.defaultProps = {
                isFrench: !1,
                closeButton: !0,
                color: "midnight_normal",
                backgroundColor: "white"
            }
        },
        73110: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return u
                }
            });
            var r = n(59499),
                o = n(40782);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = (0, o.vU)({
                    enter: "slideIn",
                    exit: "slideOut",
                    duration: [500, 400],
                    appendPosition: !0
                }),
                s = {
                    autoClose: !1,
                    position: o.Am.POSITION.BOTTOM_LEFT,
                    className: "toast-notification",
                    transition: a
                },
                u = function(e, t, n) {
                    var r = c(c({}, s), n);
                    switch (t) {
                        case "error":
                            o.Am.error(e, r);
                            break;
                        case "success":
                            o.Am.success(e, r);
                            break;
                        case "warning":
                            o.Am.warning(e, r);
                            break;
                        default:
                            (0, o.Am)(e, r)
                    }
                }
        },
        77574: function(e, t, n) {
            var r = n(50029),
                o = n(59499),
                i = n(87794),
                c = n.n(i),
                a = n(97928),
                s = n(2900),
                u = n(85893);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t = function(t) {
                    return (0, u.jsx)(a.sV, d(d({}, s.I2), {}, {
                        children: (0, u.jsx)(e, d(d({}, t), {}, {
                            targetingArguments: t.targetingArguments
                        }))
                    }))
                };
                return t.getInitialProps = function() {
                    var t = (0, r.Z)(c().mark((function t(n) {
                        var r;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = {}, !e.getInitialProps) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, e.getInitialProps(n);
                                case 4:
                                    r = t.sent;
                                case 5:
                                    return t.abrupt("return", r);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), t
            }
        },
        12063: function(e, t, n) {
            var r = n(59499),
                o = n(75401),
                i = n(35259);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = {
                isLoggedIn: !1,
                token: void 0,
                expiresIn: void 0
            };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.type,
                    r = t.payload;
                switch (n) {
                    case o.ym:
                        var c, u;
                        return "object" === typeof r ? (c = r.token, u = r.expiresIn) : c = r, a(a({}, e), {}, {
                            isLoggedIn: !0,
                            token: c,
                            expiresIn: u
                        });
                    case i.oU.UPDATE_USER_INFOS:
                        var l = r.token,
                            d = r.expiresIn;
                        return a(a({}, e), {}, {
                            isLoggedIn: !0,
                            token: l,
                            expiresIn: d
                        });
                    case o.Nv:
                        return s;
                    default:
                        return e
                }
            }
        },
        21269: function(e, t, n) {
            var r = n(50029),
                o = n(59499),
                i = n(92777),
                c = n(82262),
                a = n(45959),
                s = n(72179),
                u = n(37247),
                l = n(87794),
                d = n.n(l),
                f = n(67294),
                p = n(80925),
                v = n(44194),
                y = n(82361),
                O = n(85893);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, u.Z)(e);
                    if (t) {
                        var o = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            t.Z = function(e) {
                return function(t) {
                    var n = function(n) {
                        (0, a.Z)(s, n);
                        var o = h(s);

                        function s() {
                            return (0, i.Z)(this, s), o.apply(this, arguments)
                        }
                        return (0, c.Z)(s, [{
                            key: "render",
                            value: function() {
                                return (0, O.jsx)(t, b({}, this.props))
                            }
                        }], [{
                            key: "getInitialProps",
                            value: function() {
                                var n = (0, r.Z)(d().mark((function n(r) {
                                    var o, i, c, a, s, u, l, f, O, g;
                                    return d().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (i = r.reduxStore, c = r.req, a = null === c || void 0 === c ? void 0 : c.visitorId, s = (null === c || void 0 === c || null === (o = c.cookies) || void 0 === o ? void 0 : o[p.GA_COOKIE]) || null, u = (0, y.l)(c), l = u.isTablet, f = u.isMobile, O = u.isDesktop, i && i.dispatch((0, v.S1)({
                                                        pageName: e,
                                                        visitorId: a,
                                                        gaSessionId: s,
                                                        isMobile: f,
                                                        isTablet: l,
                                                        isDesktop: O
                                                    })), !t.getInitialProps) {
                                                    n.next = 10;
                                                    break
                                                }
                                                return n.next = 8, t.getInitialProps(r);
                                            case 8:
                                                return g = n.sent, n.abrupt("return", b({}, g));
                                            case 10:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }()
                        }]), s
                    }(f.Component);
                    return n
                }
            }
        },
        76546: function(e, t, n) {
            n.d(t, {
                _L: function() {
                    return u
                },
                lS: function() {
                    return o
                },
                lb: function() {
                    return r
                },
                rs: function() {
                    return c
                },
                s8: function() {
                    return s
                },
                vp: function() {
                    return i
                },
                yL: function() {
                    return a
                }
            });
            var r = "avitomag/FETCH_MAGAZINE_POSTS",
                o = "avitomag/FETCH_MAGAZINE_POSTS_SUCCESS",
                i = "avitomag/FETCH_MAGAZINE_POSTS_FAILED",
                c = "avitomag/LOAD_MAGAZINE_POSTS",
                a = function(e) {
                    return {
                        type: o,
                        payload: e
                    }
                },
                s = function(e, t) {
                    return {
                        type: i,
                        payload: {
                            error: e,
                            code: t
                        }
                    }
                },
                u = function(e) {
                    return {
                        type: c,
                        payload: e
                    }
                }
        },
        23009: function(e, t, n) {
            var r = n(50029),
                o = n(87794),
                i = n.n(o),
                c = n(76871),
                a = n(16700),
                s = n(76546),
                u = n(42050);
            t.Z = function(e) {
                return function(t) {
                    return function() {
                        var n = (0, r.Z)(i().mark((function n(r) {
                            var o, l, d, f, p, v, y, O;
                            return i().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return o = r.type, l = r.payload, o === s.lb && (d = l.categories, f = void 0 === d ? "" : d, p = "".concat(c.avitoMagEndpoint, "?_fields=id,title,link,featured_media,featured_media_src_url").concat(f && "&categories=" + f), e.dispatch((0, u.Z)({
                                            url: p,
                                            method: "GET",
                                            headers: {
                                                "Content-Type": "text/plain"
                                            },
                                            actions: {
                                                successfulResponseAction: s.yL,
                                                erroredResponseAction: s.s8
                                            }
                                        }))), o === s.lS && (v = null === l || void 0 === l ? void 0 : l.sort((function(e, t) {
                                            return t.id - e.id
                                        })), e.dispatch((0, s._L)({
                                            posts: v
                                        }))), o === s.vp && (y = l.error, O = l.code, a.Z.error("Encountered error ".concat(O, " while fetching Avito Mag posts"), y)), n.abrupt("return", t(r));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }
        },
        92827: function(e, t, n) {
            var r = n(59499),
                o = n(76546);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = {
                posts: []
            };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.type,
                    r = t.payload;
                if (n === o.rs) {
                    var i = r.posts;
                    return c(c({}, e), {}, {
                        posts: i
                    })
                }
                return e
            }
        },
        75651: function(e, t, n) {
            n.d(t, {
                B5: function() {
                    return a
                },
                Io: function() {
                    return i
                },
                bz: function() {
                    return c
                },
                gE: function() {
                    return o
                },
                r6: function() {
                    return r
                },
                rY: function() {
                    return s
                }
            });
            var r = "seller/GET_ECOM_SHOP_SUMMARY",
                o = "API/GET_ECOM_SHOP_SUMMARY_SUCCESS",
                i = "seller/UPDATE_ECOM_SHOP_SUMMARY",
                c = function() {
                    return {
                        type: r
                    }
                },
                a = function(e) {
                    return {
                        type: o,
                        payload: e
                    }
                },
                s = function(e) {
                    return {
                        type: i,
                        payload: e
                    }
                }
        },
        87210: function(e, t, n) {
            var r = n(59499),
                o = n(35259),
                i = n(11521),
                c = n(372),
                a = n(75401),
                s = n(75651);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = {
                userId: null,
                name: null,
                email: null,
                type: null,
                role: null,
                phone: {
                    number: null,
                    isHidden: !1
                },
                location: {
                    city: {
                        id: null
                    }
                },
                shopInfo: {
                    allowedAccess: {
                        adMaxImages: 20,
                        adMaxVideos: 1,
                        adUrgentAllowed: !1,
                        adHotdealAllowed: !1,
                        deliveryAllowed: !0,
                        statsPerAdAllowed: !0,
                        adsBulkDeleteAllowed: !0,
                        adsBoostedFilterAllowed: !0,
                        vasConfigureExecTimeAllowed: !1,
                        supportViaWhatsappAllowed: !1
                    }
                },
                notifParams: {},
                userNotifChannel: {},
                sellerInfo: {},
                registeredAt: null
            };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = t.type,
                    r = t.payload;
                switch (n) {
                    case o.aw:
                        var u = r.userId,
                            f = r.name,
                            p = r.email,
                            v = r.type,
                            y = r.role,
                            O = r.isAdmin,
                            g = r.allowedAccess;
                        return l(l({}, e), {}, {
                            userId: u,
                            name: f,
                            email: p,
                            type: v,
                            role: y,
                            isAdmin: O,
                            shopInfo: l(l({}, null === e || void 0 === e ? void 0 : e.shopInfo), g ? {
                                allowedAccess: g
                            } : {})
                        });
                    case o.R8:
                        var b = r.name,
                            h = r.email,
                            m = r.phone,
                            j = r.location,
                            E = r.registeredAt;
                        return l(l({}, e), {}, {
                            name: b,
                            email: h,
                            phone: m,
                            location: j,
                            registeredAt: E
                        });
                    case i.zS:
                        var P, w, S = r.storeId,
                            A = r.email,
                            D = r.name,
                            I = r.desc,
                            x = r.shortDesc,
                            _ = r.category,
                            k = r.imageLogo,
                            T = r.locations,
                            C = r.offersDelivery,
                            M = r.phones,
                            Z = r.storeUrl,
                            R = r.storePoints,
                            U = r.storePointsExpiry,
                            N = r.storeStartDate,
                            L = r.storeEndDate,
                            G = r.membership,
                            F = r.isVerifiedSeller;
                        return l(l({}, e), {}, {
                            userId: S,
                            name: D,
                            email: A,
                            phone: null === M || void 0 === M || null === (P = M[0]) || void 0 === P ? void 0 : P.number,
                            shopInfo: l(l({}, null === e || void 0 === e ? void 0 : e.shopInfo), {}, {
                                desc: I,
                                shortDesc: x,
                                category: _,
                                imageLogo: k,
                                locations: T,
                                address: (null === T || void 0 === T || null === (w = T[0]) || void 0 === w ? void 0 : w.address) || "",
                                offersDelivery: C,
                                phones: M,
                                storeUrl: Z,
                                storePoints: R,
                                storePointsExpiry: U,
                                storeStartDate: N,
                                storeEndDate: L,
                                membership: null === G || void 0 === G ? void 0 : G.name,
                                isVerifiedSeller: F
                            })
                        });
                    case i.KD:
                        var B, $ = r.name,
                            H = r.desc,
                            z = r.shortDesc,
                            V = r.category,
                            q = r.imageLogo,
                            Y = r.locations,
                            K = r.address,
                            Q = r.phones,
                            X = r.storeUrl;
                        return l(l({}, e), {}, {
                            name: $,
                            phone: null === Q || void 0 === Q || null === (B = Q[0]) || void 0 === B ? void 0 : B.number,
                            shopInfo: l(l({}, null === e || void 0 === e ? void 0 : e.shopInfo), {}, {
                                desc: H,
                                shortDesc: z,
                                category: V,
                                imageLogo: q,
                                locations: Y,
                                address: K,
                                phones: Q,
                                storeUrl: X
                            })
                        });
                    case c.d6:
                        return l(l({}, e), {}, {
                            notifParams: r
                        });
                    case c.b7:
                        return l(l({}, e), {}, {
                            userNotifChannel: r
                        });
                    case s.Io:
                        var W = r.orders,
                            J = r.products,
                            ee = r.due,
                            te = r.nextTransfer;
                        return l(l({}, e), {}, {
                            sellerInfo: l(l({}, null === e || void 0 === e ? void 0 : e.sellerInfo), {}, {
                                orders: W,
                                products: J,
                                due: ee,
                                nextTransfer: te
                            })
                        });
                    case o.oU.UPDATE_USER_INFOS:
                        var ne = r.id,
                            re = r.name,
                            oe = r.email,
                            ie = r.type,
                            ce = r.role,
                            ae = r.isAdmin;
                        return l(l({}, e), {}, {
                            userId: ne,
                            name: re,
                            email: oe,
                            type: ie,
                            role: ce,
                            isAdmin: ae
                        });
                    case o.O:
                        var se = r.id,
                            ue = r.accountType;
                        return l(l({}, e), {}, {
                            userId: se,
                            type: ue
                        });
                    case i.y0:
                        return l(l({}, e), {}, {
                            shopInfo: l(l({}, null === e || void 0 === e ? void 0 : e.shopInfo), {}, {
                                storePoints: r
                            })
                        });
                    case a.Nv:
                        return d;
                    default:
                        return e
                }
            }
        },
        42050: function(e, t, n) {
            var r = n(59499),
                o = n(50029),
                i = n(87794),
                c = n.n(i),
                a = n(16700),
                s = n(93088);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t = e.url,
                    n = e.actions,
                    r = void 0 === n ? {
                        successfulResponseAction: null,
                        erroredResponseAction: null
                    } : n,
                    i = e.requestOptions,
                    u = void 0 === i ? {} : i,
                    d = e.method,
                    f = void 0 === d ? "POST" : d,
                    p = e.headers,
                    v = e.metadata,
                    y = void 0 === v ? void 0 : v;
                return function() {
                    var e = (0, o.Z)(c().mark((function e(n) {
                        var o, i, d, v, O, g;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = r.successfulResponseAction, i = r.erroredResponseAction, d = "POST" === f, e.prev = 2, e.next = 5, fetch(t, l({
                                        method: f,
                                        headers: l({
                                            "Content-Type": "application/json"
                                        }, p)
                                    }, d && {
                                        body: u
                                    }));
                                case 5:
                                    if (v = e.sent, (O = v.status) !== s.dv.TOO_MANY_REQUESTS.CODE) {
                                        e.next = 10;
                                        break
                                    }
                                    return i && n(i(s.dv.TOO_MANY_REQUESTS.TEXT, s.dv.TOO_MANY_REQUESTS.CODE)), e.abrupt("return");
                                case 10:
                                    if (O === s.dv.UNAUTHORIZED.CODE && i && n(i(s.dv.UNAUTHORIZED.TEXT, s.dv.UNAUTHORIZED.CODE)), O === s.dv.FORBIDDEN.CODE && i && n(i(s.dv.FORBIDDEN.TEXT, s.dv.FORBIDDEN.CODE)), O === s.dv.BAD_REQUEST.CODE && i && n(i(s.dv.BAD_REQUEST.TEXT, s.dv.BAD_REQUEST.CODE)), O !== s.TD.OK.CODE) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 16, null === v || void 0 === v ? void 0 : v.json();
                                case 16:
                                    (g = e.sent) && o && n(o(g, y));
                                case 18:
                                    e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(2), a.Z.error("Encountered an error while fetching data", {
                                        error: null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.toString(),
                                        url: t,
                                        body: u
                                    });
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 20]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        58492: function(e, t, n) {
            var r = n(50029),
                o = n(59499),
                i = n(87794),
                c = n.n(i),
                a = n(52493),
                s = n(80925),
                u = n(74324),
                l = n(35538),
                d = n(33728),
                f = n(75401),
                p = n(35259),
                v = n(37594),
                y = n(20495),
                O = n(51432),
                g = n(31823),
                b = n(11521),
                h = n(16700),
                m = n(85893);

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                function t(t) {
                    return (0, m.jsx)(e, E({}, t.componentProps))
                }
                return t.getInitialProps = function() {
                    var t = (0, r.Z)(c().mark((function t(n) {
                        var r, i, m, j, P, w, S, A, D, I, x, _, k, T, C, M, Z, R, U, N, L, G, F, B, $, H;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = n.req, i = n.reduxStore, m = {}, j = null, r && r.headers && r.headers.cookie ? j = r.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1") : d.C5 && (j = (0, l.ej)("token")), !(null !== (P = j ? (0, u.$Q)(j) : {}) && void 0 !== P && P.accountId || null !== P && void 0 !== P && P.storeId)) {
                                        t.next = 31;
                                        break
                                    }
                                    if (w = P.accountId, S = P.storeId, A = P.roles, D = P.token, I = P.underlyingAdminId, x = P.exp, _ = P.allowedAccess, k = S || w, T = (null === I || void 0 === I ? void 0 : I.length) > 0, C = new Date(1e3 * x), M = (0, a.L0)({
                                            date: new Date(C + "Z"),
                                            format: "dd/MM/yyyy HH:mm"
                                        }), !(0, a.zR)(M, "dd/MM/yyyy HH:mm")) {
                                        t.next = 15;
                                        break
                                    }
                                    i.dispatch((0, f.kS)()), t.next = 31;
                                    break;
                                case 15:
                                    return Z = (0, v.R)(), U = (R = !!S) ? y.C : O.E8, N = R ? "getMyStoreInfo" : "getMyAccountInfo", L = R ? "storeId" : "userId", t.prev = 20, t.next = 23, Z.query({
                                        query: U,
                                        variables: (0, o.Z)({}, L, String(k)),
                                        context: {
                                            token: D,
                                            isNewGateway: !0
                                        },
                                        fetchPolicy: "no-cache"
                                    });
                                case 23:
                                    B = t.sent, ($ = R ? (0, u.Cw)(null === B || void 0 === B || null === (G = B.data) || void 0 === G ? void 0 : G.getMyStoreInfo, g.d9) : null === B || void 0 === B || null === (F = B.data) || void 0 === F ? void 0 : F.getMyAccountInfo) && (i.dispatch((0, f.x4)({
                                        token: D,
                                        expiresIn: M
                                    })), i.dispatch((0, p.P1)({
                                        userId: k,
                                        name: $.name,
                                        email: $.email,
                                        type: R ? s.USER_TYPES.SHOP : s.USER_TYPES.PRIVATE,
                                        role: null === A || void 0 === A ? void 0 : A[0],
                                        isAdmin: T,
                                        allowedAccess: _
                                    })), R && ($.storeId = k), H = R ? b.Qs : p.Lj, i.dispatch(H($))), t.next = 31;
                                    break;
                                case 28:
                                    t.prev = 28, t.t0 = t.catch(20), h.Z.error("GET USER DATA ERROR: ".concat(N, " | userId=").concat(k, " --- ").concat(t.t0));
                                case 31:
                                    if (t.t1 = e.getInitialProps, !t.t1) {
                                        t.next = 36;
                                        break
                                    }
                                    return t.next = 35, e.getInitialProps(E(E({}, n), {}, {
                                        token: j
                                    }));
                                case 35:
                                    t.t1 = t.sent;
                                case 36:
                                    return m = t.t1, t.abrupt("return", {
                                        componentProps: m
                                    });
                                case 38:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [20, 28]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), t
            }
        },
        74480: function(e, t, n) {
            var r = n(67294),
                o = n(97928);
            t.Z = function(e, t) {
                (0, r.useEffect)((function() {
                    var n = t.id,
                        r = t.name,
                        i = t.sizeMapping;
                    o.eX.getGoogletag().then((function(t) {
                        t.cmd.push((function() {
                            var o = t.defineOutOfPageSlot("".concat(e, "/").concat(r), n).addService(t.pubads()),
                                c = t.sizeMapping();
                            i.forEach((function(e) {
                                var t = e.viewport,
                                    n = e.sizes;
                                c.addSize(t, n)
                            }));
                            var a = c.build();
                            o.defineSizeMapping(a), t.pubads().enableSingleRequest(), t.display(n)
                        }))
                    }))
                }), [])
            }
        },
        58377: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var r = n(80925),
                o = n(35538),
                i = [r.SUPPORTED_LANGUAGES.fr, r.SUPPORTED_LANGUAGES.ar],
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e.acceptsLanguages) return r.DEFAULT_LANGUAGE;
                    var t = e.acceptsLanguages(i);
                    return t || r.DEFAULT_LANGUAGE
                },
                a = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (e = n.lang && i.indexOf(n.lang) >= 0 ? n.lang : t.cookies ? t.cookies[r.LANGUAGE_COOKIE_NAME] : (0, o.ej)(r.LANGUAGE_COOKIE_NAME)) || (e = c(t)), e
                }
        }
    }
]);