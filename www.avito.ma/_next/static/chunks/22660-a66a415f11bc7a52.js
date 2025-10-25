"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22660], {
        22660: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return nt
                }
            });
            var o = n(45697),
                r = n.n(o),
                i = n(67294),
                a = n(19521),
                l = n(98e3),
                c = n(83393),
                s = n(19235),
                d = n(31155),
                u = n(11399),
                p = n(43975),
                f = n(70269),
                m = n(6055),
                g = n(4078),
                v = n(80775),
                h = n(51293),
                b = n(41686),
                y = n(90762),
                x = n(48538),
                w = n(46774);

            function k(e) {
                return function(e) {
                    if (Array.isArray(e)) return C(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return C(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var E = r().oneOfType([r().string, r().shape({
                    src: r().string,
                    srcSet: r().string,
                    sizes: r().string,
                    type: r().string
                })]),
                S = r().shape({
                    text: r().oneOfType([r().string, r().object]),
                    color: r().string,
                    icon: r().oneOf(h.m),
                    tooltipDetails: r().shape({
                        text: r().string,
                        position: r().oneOf(w.Z),
                        offset: r().string,
                        bgColor: r().oneOf([].concat(k(Object.keys(s.ZP)), ["currentColor"])),
                        textColor: r().oneOf([].concat(k(Object.keys(s.ZP)), ["currentColor"]))
                    })
                }),
                O = n(22329),
                z = a.default.button.withConfig({
                    componentId: "sc-j601c5-0"
                })(["background-color:", ";border-radius:", ";color:", ";border:1px solid currentColor;box-shadow:0px 1.15px 2.3px 0px #1f293714;font-size:", ";padding:", " ", " ", " ", ";cursor:pointer;font-family:inherit;display:flex;justify-content:center;align-items:center;gap:", ";transition:background-color 0.2s;:hover{background-color:", ";}"], s.ZP.white, c.p.md, s.ZP.black, (0, O.J)(2), (0, d.W)(2), (0, d.W)(4), (0, d.W)(2), (0, d.W)(3), (0, d.W)(1), s.ZP.smoke_light_background),
                T = n(97506);

            function I(e) {
                var t = e.children,
                    n = e.iconsTheme,
                    o = void 0 === n ? "dark" : n,
                    r = e.actions,
                    a = void 0 === r ? {} : r,
                    l = a.back,
                    c = a.share,
                    s = a.like,
                    d = e.isActionsSectionSticky;
                return i.createElement(j, {
                    isActionsSectionSticky: d
                }, l && "function" === typeof l ? i.createElement(_, {
                    name: "ArrowLeft",
                    $iconsTheme: o,
                    ariaLabel: "Back button",
                    onClick: l
                }) : null, t, i.createElement(P, null, c && "function" === typeof c ? i.createElement(_, {
                    name: "ShareLine",
                    $iconsTheme: o,
                    ariaLabel: "Share",
                    onClick: c
                }) : null, s && "function" === typeof s ? i.createElement(_, {
                    name: "HeartOutline",
                    $iconsTheme: o,
                    ariaLabel: "Like",
                    onClick: s
                }) : null))
            }
            var j = a.default.div.withConfig({
                    componentId: "sc-g05gn8-0"
                })(["height:var(--top-section-height);display:flex;justify-content:space-between;align-items:center;padding:0 ", ";color:", ";", ""], (0, d.W)(3), s.ZP.white, (function(e) {
                    if (e.isActionsSectionSticky) return (0, a.css)(["position:sticky;top:0;z-index:", ";background-color:", ";padding:", ";"], T.Z.fixed, s.ZP.white, (0, d.W)(3))
                })),
                W = {
                    light: {
                        color: "midnight_normal",
                        borderColor: s.ZP.smoke_medium_light,
                        hoverBg: s.ZP.smoke_light_grey
                    },
                    dark: {
                        color: "white",
                        borderColor: s.ZP.white,
                        hoverBg: s.ZP.midnight_normal
                    }
                },
                P = a.default.div.withConfig({
                    componentId: "sc-g05gn8-1"
                })(["display:flex;gap:", ";"], (0, d.W)(2)),
                _ = (0, a.default)(g.h).attrs((function(e) {
                    var t = e.$iconsTheme;
                    return {
                        color: W[t].color
                    }
                })).withConfig({
                    componentId: "sc-g05gn8-2"
                })(["padding:", ";border:1px solid ", ";width:32px;height:32px;&:hover{background-color:", ";}html[dir='rtl'] & svg[aria-labelledby^='Arrow']{transform:rotate(180deg);}"], (0, d.W)(2), (function(e) {
                    var t = e.$iconsTheme;
                    return W[t].borderColor
                }), (function(e) {
                    var t = e.$iconsTheme;
                    return W[t].hoverBg
                }));
            I.propTypes = {
                children: r().node,
                iconsTheme: r().oneOf(["light", "dark"]),
                actions: r().shape({
                    back: r().func,
                    share: r().func,
                    like: r().func
                }),
                isActionsSectionSticky: r().bool
            };
            (0, d.W)(4), (0, x.px)(y.AV.md), (0, d.W)(6), s.ZP.smoke_light_background, s.ZP.smoke_light_background, c.p["2xl"], (0, d.W)(3);

            function A(e) {
                var t = e.children,
                    n = e.onClick;
                return n && "function" === typeof n ? i.createElement(B, {
                    onClick: n
                }, t) : t
            }
            var Z, B = a.default.button.withConfig({
                componentId: "sc-2uqpd-5"
            })(["background:none;border:none;padding:0;margin:0;cursor:pointer;"]);

            function $(e, t) {
                return "string" === typeof e ? {
                    src: e,
                    alt: "Image ".concat(t)
                } : e.src ? {
                    src: e.src,
                    alt: null !== (n = null === e || void 0 === e ? void 0 : e.alt) && void 0 !== n ? n : "Image ".concat(t)
                } : {
                    src: "",
                    alt: ""
                };
                var n
            }
            A.propTypes = {
                children: r().node,
                onClick: r().func
            }, r().arrayOf(E), r().shape({
                src: r().string.isRequired,
                alt: r().string,
                title: r().string,
                description: r().string
            }), I.propTypes.actions, r().func, r().bool;
            var N, L;
            (0, d.W)(1), c.p.lg, (0, l.Z)(Z || (N = ["\n    bottom: ", ";\n    right: ", ";\n  "], L || (L = N.slice(0)), Z = Object.freeze(Object.defineProperties(N, {
                raw: {
                    value: Object.freeze(L)
                }
            }))), (0, d.W)(5), (0, d.W)(5)), s.ZP.smoke_light_background;

            function M(e) {
                return function(t) {
                    t.preventDefault(), t.stopPropagation(), null === e || void 0 === e || e()
                }
            }

            function R(e) {
                var t = e.srcSet,
                    n = e.navButton,
                    o = e.dataTestids,
                    r = void 0 === o ? {} : o,
                    l = e.index,
                    c = e.setIndex,
                    s = e.handleNavButtonClick,
                    u = t.filter(Boolean),
                    p = "rtl" === ((0, i.useContext)(a.ThemeContext) || {
                        dir: "ltr"
                    }).dir;
                return i.createElement(D, {
                    $isRtl: p,
                    style: {
                        "--index": l,
                        "--rtl": p ? 1 : -1
                    }
                }, i.createElement(J, {
                    index: l
                }, u.map((function(e, t) {
                    var n = $(e, l),
                        o = n.src,
                        r = n.alt;
                    return i.createElement(de, {
                        src: o,
                        alt: r,
                        key: o,
                        lazyLoad: 0 !== t
                    })
                }))), i.createElement(V, {
                    onClick: M((function() {
                        l <= 0 || (null === s || void 0 === s || s(), c(l - 1))
                    })),
                    style: {
                        left: p ? void 0 : (null === n || void 0 === n ? void 0 : n.positionSpacing) || (0, d.W)(1),
                        right: p ? (null === n || void 0 === n ? void 0 : n.positionSpacing) || (0, d.W)(1) : void 0
                    },
                    $isRtl: p,
                    name: "ChevronLeft",
                    dataTestid: null === r || void 0 === r ? void 0 : r.prev,
                    color: null === n || void 0 === n ? void 0 : n.color,
                    size: null === n || void 0 === n ? void 0 : n.size,
                    $disabled: l <= 0
                }), i.createElement(V, {
                    onClick: M((function() {
                        l >= u.length - 1 || (null === s || void 0 === s || s(), c(l + 1))
                    })),
                    style: {
                        right: p ? void 0 : (null === n || void 0 === n ? void 0 : n.positionSpacing) || (0, d.W)(1),
                        left: p ? (null === n || void 0 === n ? void 0 : n.positionSpacing) || (0, d.W)(1) : void 0
                    },
                    $isRtl: p,
                    name: "ChevronRight",
                    dataTestid: null === r || void 0 === r ? void 0 : r.next,
                    color: null === n || void 0 === n ? void 0 : n.color,
                    size: null === n || void 0 === n ? void 0 : n.size,
                    $disabled: l >= u.length - 1
                }))
            }
            r().arrayOf(E), r().number, r().func, r().string, r().func;
            var D = a.default.div.withConfig({
                    componentId: "sc-1lz3zw0-0"
                })([""]),
                H = "180ms",
                J = a.default.div.withConfig({
                    componentId: "sc-1lz3zw0-1"
                })(["display:flex;--x:calc(var(--index) * 100%);transform:translateX(calc(var(--x) * var(--rtl)));transition:transform ", " ease;width:100%;height:100%;"], H),
                V = (0, a.default)(g.h).withConfig({
                    componentId: "sc-1lz3zw0-2"
                })(["position:absolute;top:50%;transform:translateY(-50%);background-color:", ";padding:", ";border:1px solid ", ";:before{background-color:transparent;}@media (min-width:", "px){transition:opacity ", " ease;opacity:0;", ":hover &{opacity:0.8;:hover{opacity:1;}}}", ";", ";"], s.ZP.white, (0, d.W)(1), s.ZP.smoke_light, y.AV.lg, H, D, (function(e) {
                    if (e.$isRtl) return (0, a.css)(["transform:rotate(180deg);"])
                }), (function(e) {
                    if (e.$disabled) return (0, a.css)(["opacity:0.8;cursor:default;:hover{opacity:0.8 !important;}"])
                }));
            R.propTypes = {
                srcSet: r().arrayOf(E),
                navButton: r().shape({
                    color: r().string,
                    size: r().string,
                    positionSpacing: r().string
                }),
                dataTestids: r().shape({
                    prev: r().string,
                    next: r().string
                }),
                index: r().bool,
                setIndex: r().func,
                handleNavButtonClick: r().func
            };
            var F = n(46066);

            function U(e) {
                var t = e.srcSet,
                    n = e.navButton,
                    o = e.dataTestids,
                    r = void 0 === o ? {} : o,
                    l = e.setIndex,
                    c = e.handleNavButtonClick,
                    s = (0, i.useContext)(a.ThemeContext),
                    d = t.filter(Boolean),
                    u = "rtl" === (s || {
                        dir: "ltr"
                    }).dir,
                    p = {
                        lazyLoad: !0,
                        speed: 500,
                        infinite: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        prevArrow: i.createElement(q, {
                            isRtl: u,
                            direction: "prev",
                            dataTestids: r,
                            navButton: n,
                            handleNavButtonClick: c
                        }),
                        nextArrow: i.createElement(q, {
                            isRtl: u,
                            direction: "next",
                            dataTestids: r,
                            navButton: n,
                            handleNavButtonClick: c
                        }),
                        beforeChange: function(e, t) {
                            l(t), null === c || void 0 === c || c()
                        }
                    };
                return i.createElement(Y, null, i.createElement(F.Z, p, d.map((function(e, t) {
                    var n = $(e, t),
                        o = n.src,
                        r = n.alt;
                    return i.createElement(de, {
                        src: o,
                        alt: r,
                        key: o,
                        lazyLoad: 0 !== t
                    })
                }))))
            }

            function q(e) {
                var t, n = e.className,
                    o = e.style,
                    r = e.isRtl,
                    a = e.direction,
                    l = e.navButton,
                    c = e.dataTestids,
                    s = e.onClick;
                return i.createElement(X, {
                    className: n,
                    style: o,
                    $isRtl: r,
                    $direction: a,
                    name: "prev" === a ? "ChevronLeft" : "ChevronRight",
                    dataTestid: null === c || void 0 === c ? void 0 : c[a],
                    color: null === l || void 0 === l ? void 0 : l.color,
                    size: null === l || void 0 === l ? void 0 : l.size,
                    positionSpacing: null === l || void 0 === l ? void 0 : l.positionSpacing,
                    onClick: M(s),
                    $disabled: null === n || void 0 === n || null === (t = n.includes) || void 0 === t ? void 0 : t.call(n, "slick-disabled")
                })
            }
            q.propTypes = {
                className: r().string,
                style: r().object,
                isRtl: r().bool,
                direction: r().string,
                navButton: r().shape({
                    color: r().string,
                    size: r().string,
                    positionSpacing: r().string
                }),
                dataTestids: r().shape({
                    prev: r().string,
                    next: r().string
                }),
                onClick: r().func
            };
            var Y = a.default.div.withConfig({
                    componentId: "sc-1nzrvdk-0"
                })(["width:100%;height:100%;overflow:hidden;.slick-slider,.slick-list,.slick-track,.slick-slide,.slick-slide > div,.slick-slide > div > img{height:100%;}.slick-track{display:flex;}"]),
                X = (0, a.default)(g.h).withConfig({
                    componentId: "sc-1nzrvdk-1"
                })(["position:absolute;top:50%;transform:translateY(-50%);background-color:", ";padding:", ";z-index:1;border:1px solid ", ";:before{background-color:transparent;}@media (min-width:", "px){transition:opacity ", " ease;opacity:0;", ":hover &{opacity:0.8;:hover{opacity:1;}}}", ";", " ", ";"], s.ZP.white, (0, d.W)(1), s.ZP.smoke_light, y.AV.lg, "180ms", Y, (function(e) {
                    if (e.$isRtl) return (0, a.css)(["transform:rotate(180deg);"])
                }), (function(e) {
                    var t = e.$isRtl,
                        n = e.$direction;
                    return t ? "next" === n ? (0, a.css)(["left:", ";"], (function(e) {
                        return e.positionSpacing || (0, d.W)(1)
                    })) : (0, a.css)(["right:", ";"], (function(e) {
                        return e.positionSpacing || (0, d.W)(1)
                    })) : "next" === n ? (0, a.css)(["right:", ";"], (function(e) {
                        return e.positionSpacing || (0, d.W)(1)
                    })) : (0, a.css)(["left:", ";"], (function(e) {
                        return e.positionSpacing || (0, d.W)(1)
                    }))
                }), (function(e) {
                    if (e.$disabled) return (0, a.css)(["opacity:0.8;cursor:default;:hover{opacity:0.8 !important;}"])
                }));
            U.propTypes = {
                srcSet: r().arrayOf(E),
                navButton: r().shape({
                    color: r().string,
                    size: r().string,
                    positionSpacing: r().string
                }),
                dataTestids: r().shape({
                    prev: r().string,
                    next: r().string
                }),
                setIndex: r().func,
                handleNavButtonClick: r().func
            };
            var G, K, Q = n(6762);

            function ee(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function te(e) {
                return function(e) {
                    if (Array.isArray(e)) return re(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || oe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var o, r, i, a, l = [],
                            c = !0,
                            s = !1;
                        try {
                            if (i = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (o = i.call(n)).done) && (l.push(o.value), l.length !== t); c = !0);
                        } catch (d) {
                            s = !0, r = d
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (s) throw r
                            }
                        }
                        return l
                    }
                }(e, t) || oe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oe(e, t) {
                if (e) {
                    if ("string" === typeof e) return re(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? re(e, t) : void 0
                }
            }

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function ie(e) {
                var t = e.srcSet,
                    n = void 0 === t ? [] : t,
                    o = e.badges,
                    r = void 0 === o ? [] : o,
                    a = e.dataTestids,
                    l = void 0 === a ? {} : a,
                    c = e.aspectRatio,
                    s = void 0 === c ? {
                        xs: "335 / 234",
                        md: "315 / 250"
                    } : c,
                    d = e.sliderNavButton,
                    u = e.lazyLoad,
                    p = void 0 !== u && u,
                    f = e.withSlideIndexerBadge,
                    m = void 0 !== f && f,
                    g = e.handleSliderNavButtonClick,
                    v = ne((0, i.useState)(0), 2),
                    h = v[0],
                    b = v[1],
                    y = n.filter(Boolean),
                    x = m && (null === y || void 0 === y ? void 0 : y.length) > 0 ? [{
                        text: "".concat(h + 1, "/").concat(y.length),
                        icon: "Camera"
                    }].concat(te(r || [])) : r;
                return i.createElement(ae, {
                    dataTestid: l.media
                }, i.createElement(le, null, i.createElement(me, {
                    badges: r,
                    upper: !0
                }), i.createElement(ce, {
                    $aspectRatio: s
                }, y.length >= 2 ? p ? i.createElement(U, {
                    srcSet: y,
                    navButton: d,
                    dataTestids: {
                        prev: null === l || void 0 === l ? void 0 : l.prev,
                        next: null === l || void 0 === l ? void 0 : l.next
                    },
                    setIndex: b,
                    handleNavButtonClick: g
                }) : i.createElement(R, {
                    srcSet: y,
                    navButton: d,
                    dataTestids: {
                        prev: null === l || void 0 === l ? void 0 : l.prev,
                        next: null === l || void 0 === l ? void 0 : l.next
                    },
                    index: h,
                    setIndex: b,
                    handleNavButtonClick: g
                }) : y.length >= 1 ? i.createElement(de, {
                    src: y[0],
                    lazyLoad: p
                }) : i.createElement(pe, null)), i.createElement(me, {
                    badges: x
                })))
            }
            var ae = a.default.div.withConfig({
                    componentId: "sc-bsm2tm-0"
                })(["padding:", " ", ";"], (0, d.W)(2), (0, d.W)(3)),
                le = a.default.div.withConfig({
                    componentId: "sc-bsm2tm-1"
                })(["position:relative;background-color:", ";border-radius:", ";"], s.ZP.smoke_light_grey, c.p.lg),
                ce = a.default.div.withConfig({
                    componentId: "sc-bsm2tm-2"
                })(["display:flex;border-radius:", ";overflow:hidden;", ""], c.p.lg, (function(e) {
                    var t = e.$aspectRatio;
                    return (0, a.css)(["aspect-ratio:", ";@media (min-width:", "){aspect-ratio:", ";}"], t.xs, (0, x.px)(y.AV.sm), t.md)
                })),
                se = {
                    srcSet: r().arrayOf(E),
                    badges: r().arrayOf(S),
                    dataTestids: r().shape({
                        media: r().string,
                        prev: r().string,
                        next: r().string
                    }),
                    aspectRatio: r().shape({
                        xs: r().string,
                        md: r().string
                    }),
                    sliderNavButton: r().shape({
                        color: r().string,
                        size: r().string,
                        positionSpacing: r().string
                    }),
                    lazyLoad: r().bool,
                    withSlideIndexerBadge: r().bool,
                    handleSliderNavButtonClick: r().func
                };

            function de(e) {
                var t = e.src,
                    n = e.alt,
                    o = e.lazyLoad,
                    r = e.className,
                    a = "";
                return a = "string" === typeof t ? t : t.src, i.createElement(ue, {
                    src: a,
                    alt: n,
                    loading: o ? "lazy" : "eager",
                    className: r
                })
            }
            ie.propTypes = se;
            var ue = a.default.img.withConfig({
                componentId: "sc-bsm2tm-3"
            })(["width:100%;min-width:100%;object-fit:cover;object-position:center;"]);

            function pe() {
                return i.createElement(fe, null, i.createElement(v.JO, {
                    name: "NoImage",
                    size: "xl",
                    color: "smoke_light"
                }))
            }
            de.propTypes = {
                src: E,
                alt: r().string,
                className: r().string,
                lazyLoad: r().bool
            };
            var fe = a.default.div.withConfig({
                componentId: "sc-bsm2tm-4"
            })(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;"]);

            function me(e) {
                var t = e.badges,
                    n = void 0 === t ? [] : t,
                    o = e.upper;
                return i.createElement(be, {
                    upper: o
                }, i.createElement(ge, {
                    badges: n,
                    upper: o
                }))
            }

            function ge(e) {
                var t = e.badges,
                    n = void 0 === t ? [] : t,
                    o = e.bgColor,
                    r = void 0 === o ? "midnight_normal" : o,
                    a = e.textColor,
                    l = void 0 === a ? "smoke_lighter" : a,
                    c = e.upper;
                return n.filter((function(e) {
                    var t = e.position;
                    return c ? "top" === t : "top" !== t
                })).map((function(e, t) {
                    var n = e.text,
                        o = e.icon,
                        a = e.bgColor,
                        c = e.tooltipDetails;
                    return null !== c && void 0 !== c && c.text ? i.createElement(Q.Z, {
                        text: c.text,
                        position: c.position || "bottom",
                        offset: c.offset || "-43px",
                        bgColor: c.bgColor || a,
                        textColor: c.textColor
                    }, i.createElement(m.C, {
                        icon: o,
                        bgColor: a || r,
                        textColor: l,
                        key: t
                    }, n)) : i.createElement(m.C, {
                        icon: o,
                        bgColor: a || r,
                        textColor: l,
                        key: t
                    }, n)
                }))
            }
            var ve, he, be = a.default.div.withConfig({
                componentId: "sc-bsm2tm-5"
            })(["display:flex;flex-direction:row;gap:", ";flex-wrap:wrap;position:absolute;", ""], (0, d.W)(2), (function(e) {
                return e.upper ? (0, l.Z)(G || (G = ee(["\n        top: ", ";\n        right: ", ";\n        z-index: 1;\n        justify-content: flex-end;\n      "])), (0, d.W)(2), (0, d.W)(2)) : (0, l.Z)(K || (K = ee(["\n        bottom: ", ";\n        left: ", ";\n        justify-content: flex-start;\n      "])), (0, d.W)(2), (0, d.W)(2))
            }));

            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function xe(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function we(e) {
                var t = e.price,
                    n = e.pricePerM2,
                    o = e.action,
                    r = e.isActionActive,
                    a = e.supTitle,
                    l = e.title,
                    c = e.titleLarge,
                    s = e.description,
                    v = e.adParams,
                    h = e.priceDiscount,
                    y = void 0 === h ? {} : h,
                    x = e.dataTestids,
                    w = void 0 === x ? {} : x,
                    k = e.startingPriceText,
                    C = e.startingPriceTextColor,
                    E = void 0 === C ? "re_normal" : C,
                    S = e.badges,
                    O = !t && !y.text && !y.discount && !o;
                return i.createElement(Ce, null, i.createElement("div", null, i.createElement(u.k, {
                    condition: a
                }, i.createElement(je, {
                    color: "smoke_normal"
                }, a)), i.createElement(u.k, {
                    condition: !(0, p.xb)(S)
                }, i.createElement(Ie, null, null === S || void 0 === S ? void 0 : S.map((function(e) {
                    var t = e.icon,
                        n = e.text,
                        o = e.color;
                    return i.createElement(je, {
                        key: n,
                        icon: t,
                        color: o
                    }, n)
                })))), i.createElement(b.xv, {
                    truncate: !0,
                    variant: c ? "h5" : "subtitle1",
                    noMargin: !0,
                    margin: {
                        top: (0, d.W)(2),
                        bottom: (0, d.W)(2)
                    },
                    dataTestid: null === w || void 0 === w ? void 0 : w.title,
                    style: {
                        lineHeight: "1.4",
                        whiteSpace: "normal"
                    },
                    title: l,
                    fontWeight: c ? f.Z.bold : void 0
                }, l), !v || v.length <= 0 ? null : i.createElement(Ee, null, i.createElement(ge, {
                    badges: v,
                    bgColor: "smoke_medium_light",
                    textColor: "midnight_normal"
                }))), s ? i.createElement(b.xv, {
                    variant: "body2",
                    color: "midnight_light",
                    style: {
                        "--line-height": "20px",
                        lineHeight: "var(--line-height)",
                        "--line-number": "3",
                        display: "-webkit-box",
                        "-webkit-box-orient": "vertical",
                        "-webkit-line-clamp": "var(--line-number)",
                        overflow: "hidden",
                        maxHeight: "calc(var(--line-height) * var(--line-number))"
                    },
                    title: s,
                    noMargin: !0
                }, s) : null, O ? null : i.createElement(ke, null, i.createElement("div", null, k ? i.createElement(b.xv, {
                    margin: {
                        top: "0",
                        bottom: (0, d.W)(1)
                    },
                    variant: "body2",
                    color: E
                }, k) : null, i.createElement(Oe, {
                    dataTestid: null === w || void 0 === w ? void 0 : w.price,
                    hasPricePerM2: !(null === n || void 0 === n || !n.text)
                }, i.createElement(Se, {
                    variant: "h6",
                    color: "re_normal",
                    noMargin: !0
                }, t), null !== n && void 0 !== n && n.text ? i.createElement(i.Fragment, null, n.separator || i.createElement(ze, {
                    variant: "subtitle1",
                    color: "re_normal",
                    noMargin: !0
                }, "-"), i.createElement(Se, {
                    variant: "subtitle1",
                    color: "re_normal",
                    noMargin: !0
                }, n.text)) : null, y.text && y.discount ? i.createElement(i.Fragment, null, i.createElement(Te, {
                    variant: "caption",
                    color: "smoke_normal",
                    noMargin: !0
                }, y.text), i.createElement(m.C, {
                    bgColor: "vehicules_normal",
                    textColor: "white",
                    rounded: !0
                }, y.discount)) : null)), "function" === typeof o ? i.createElement(g.h, {
                    size: "sm",
                    name: r ? "HeartFill" : "HeartOutline",
                    color: r ? "wine_normal" : "midnight_light",
                    onClick: o
                }) : o))
            }
            me.propTypes = {
                badges: r().arrayOf(S),
                upper: r().bool
            };
            var ke = a.default.div.withConfig({
                    componentId: "sc-b57yxx-0"
                })(["display:flex;justify-content:space-between;align-items:center;margin-top:auto;"]),
                Ce = a.default.div.withConfig({
                    componentId: "sc-b57yxx-1"
                })(["display:flex;flex-direction:column;gap:", ";flex-grow:1;max-width:100%;padding:", " ", " ", " ", ";"], (0, d.W)(3), (0, d.W)(2), (0, d.W)(3), (0, d.W)(1), (0, d.W)(3)),
                Ee = a.default.div.withConfig({
                    componentId: "sc-b57yxx-2"
                })(["display:flex;flex-direction:row;flex-wrap:wrap;gap:", ";> span > span{font-weight:", ";}"], (0, d.W)(2), f.Z.normal),
                Se = (0, a.default)(b.xv).withConfig({
                    componentId: "sc-b57yxx-3"
                })(["", " line-height:1;"], (0, l.Z)(ve || (ve = xe(["direction: ltr;"])))),
                Oe = a.default.div.withConfig({
                    componentId: "sc-b57yxx-4"
                })(["display:flex;align-items:", ";gap:", ";"], (function(e) {
                    return e.hasPricePerM2 ? "flex-end" : "center"
                }), (0, d.W)(1)),
                ze = (0, a.default)(b.xv).withConfig({
                    componentId: "sc-b57yxx-5"
                })(["line-height:1;"]),
                Te = (0, a.default)(b.xv).withConfig({
                    componentId: "sc-b57yxx-6"
                })(["direction:ltr;", " text-decoration:line-through;"], (0, l.Z)(he || (he = xe(["margin-left: ", ";"])), (0, d.W)(2))),
                Ie = a.default.div.withConfig({
                    componentId: "sc-b57yxx-7"
                })(["display:flex;align-items:center;gap:", ";margin-top:", ";"], (0, d.W)(3), (0, d.W)(2));

            function je(e) {
                var t = e.children,
                    n = e.icon,
                    o = void 0 === n ? "Location" : n,
                    r = e.color,
                    a = void 0 === r ? "smoke_normal" : r;
                return i.createElement(_e, null, i.createElement(Ae, null, i.createElement(Pe, {
                    name: o,
                    size: "xs",
                    color: a
                }), i.createElement(b.xv, {
                    variant: "caption",
                    noMargin: !0,
                    color: a,
                    style: {
                        lineHeight: "1"
                    }
                }, t)))
            }
            we.propTypes = {
                price: r().node,
                pricePerM2: r().shape({
                    text: r().node,
                    separator: r().node
                }),
                action: r().func,
                isActionActive: r().bool,
                supTitle: r().string,
                title: r().string,
                titleLarge: r().bool,
                description: r().string,
                adParams: r().arrayOf(S),
                priceDiscount: r().shape({
                    text: r().node,
                    discount: r().node
                }),
                dataTestids: r().shape({
                    title: r().string,
                    price: r().string
                }),
                startingPriceText: r().string,
                startingPriceTextColor: r().string,
                badges: r().arrayOf(S)
            };
            var We, Pe = (0, a.default)(v.JO).withConfig({
                    componentId: "sc-b57yxx-8"
                })(["border-radius:", ";padding:", ";flex-shrink:0;background-color:", ";"], c.Z.radiusMax, (0, d.W)(1), s.ZP.smoke_lighter),
                _e = a.default.div.withConfig({
                    componentId: "sc-b57yxx-9"
                })([""]),
                Ae = a.default.div.withConfig({
                    componentId: "sc-b57yxx-10"
                })(["display:flex;align-items:center;gap:0 ", ";color:", ";"], (0, d.W)(1), s.ZP.smoke_normal);

            function Ze(e) {
                var t = e.name,
                    n = e.avatar,
                    o = e.noAvatar,
                    r = e.date,
                    a = e.extra,
                    l = e.isVerifiedSeller,
                    c = e.verifiedSellerTooltipText,
                    s = e.isShop,
                    d = a && !t && !r && o;
                return i.createElement(Be, {
                    $noAvatar: o,
                    $extraOnly: d
                }, i.createElement($e, null, o ? null : i.createElement(Le, null, n ? i.createElement(He, {
                    src: n
                }) : i.createElement(Me, {
                    name: "user",
                    color: "smoke_light"
                })), t || r || l ? i.createElement("div", null, i.createElement("div", null, t ? i.createElement(Re, {
                    variant: "caption",
                    color: "midnight_normal",
                    noMargin: !0,
                    fontWeight: f.Z.bolder
                }, t, function() {
                    if (l) {
                        var e = i.createElement(De, {
                            name: "VerifiedShopBadge",
                            size: "xs",
                            color: "shops_normal"
                        });
                        return c ? i.createElement(Q.Z, {
                            text: c,
                            bgColor: "shops_normal",
                            position: "right"
                        }, e) : e
                    }
                    return s ? i.createElement(De, {
                        name: "ShopBadge",
                        size: "xs",
                        color: "shops_normal"
                    }) : null
                }()) : null), r ? i.createElement(Ne, null, i.createElement(v.JO, {
                    name: "ClockOutline",
                    size: "tiny",
                    color: "smoke_normal"
                }), i.createElement(b.xv, {
                    variant: "caption",
                    color: "smoke_normal",
                    noMargin: !0,
                    style: {
                        letterSpacing: "0"
                    }
                }, r)) : null) : null), a ? i.createElement("div", {
                    style: {
                        flexShrink: 0
                    }
                }, a) : null)
            }
            je.propTypes = {
                children: r().node,
                icon: r().oneOf(h.m),
                color: r().oneOf([].concat((We = Object.keys(s.ZP), function(e) {
                    if (Array.isArray(e)) return ye(e)
                }(We) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(We) || function(e, t) {
                    if (e) {
                        if ("string" === typeof e) return ye(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ye(e, t) : void 0
                    }
                }(We) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), ["currentColor"]))
            };
            var Be = a.default.div.withConfig({
                    componentId: "sc-1wnmz4-0"
                })(["display:flex;justify-content:space-between;align-items:center;padding:", ";min-height:", ";"], (function(e) {
                    return e.$extraOnly ? "".concat((0, d.W)(1), " ").concat((0, d.W)(3)) : "".concat((0, d.W)(1), " ").concat((0, d.W)(3), " ").concat((0, d.W)(2), " ").concat((0, d.W)(3))
                }), (function(e) {
                    return e.$noAvatar ? "auto" : (0, d.W)(6)
                })),
                $e = a.default.div.withConfig({
                    componentId: "sc-1wnmz4-1"
                })(["display:flex;align-items:center;gap:", ";"], (0, d.W)(2)),
                Ne = a.default.div.withConfig({
                    componentId: "sc-1wnmz4-2"
                })(["display:flex;align-items:center;gap:", ";vertical-align:initial;"], (0, d.W)(1)),
                Le = a.default.div.withConfig({
                    componentId: "sc-1wnmz4-3"
                })(["--size:", ";width:var(--size);height:var(--size);border-radius:", ";border:1px solid ", ";overflow:hidden;display:flex;justify-content:center;align-items:flex-end;background:", ";flex-shrink:0;"], (0, d.W)(7), c.Z.radiusMax, s.ZP.smoke_medium_light, s.ZP.smoke_lighter),
                Me = (0, a.default)(v.JO).withConfig({
                    componentId: "sc-1wnmz4-4"
                })(["margin-bottom:-", ";"], (0, d.W)(1)),
                Re = (0, a.default)(b.xv).withConfig({
                    componentId: "sc-1wnmz4-5"
                })(["display:inline;"]),
                De = (0, a.default)(v.JO).withConfig({
                    componentId: "sc-1wnmz4-6"
                })(["display:inline-block;margin-left:", ";margin-bottom:2px;vertical-align:bottom;"], (0, d.W)(1)),
                He = a.default.img.withConfig({
                    componentId: "sc-1wnmz4-7"
                })(["width:100%;height:100%;object-fit:cover;object-position:center;"]);

            function Je(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function Ve(e) {
                var t = e.children,
                    n = e.icon,
                    o = e.iconRight,
                    r = e.iconSize,
                    a = void 0 === r ? "tiny" : r,
                    l = e.onClick,
                    c = e.color;
                return i.createElement(Fe, {
                    as: l ? "button" : "div",
                    onClick: l,
                    color: c
                }, n ? i.createElement(v.JO, {
                    size: a,
                    name: n,
                    color: "currentColor"
                }) : null, t, o ? i.createElement(v.JO, {
                    size: a,
                    name: o,
                    color: "currentColor"
                }) : null)
            }
            Ze.propTypes = {
                name: r().string,
                noAvatar: r().bool,
                avatar: r().string,
                date: r().string,
                extra: r().node,
                isVerifiedSeller: r().bool,
                verifiedSellerTooltipText: r().string,
                isShop: r().bool
            };
            var Fe = a.default.button.withConfig({
                componentId: "sc-htnzix-0"
            })(["display:flex;align-items:center;justify-content:center;gap:", ";font-size:", "px;text-wrap:nowrap;appearance:none;color:", ";padding:", ";background-color:transparent;border:0;border-radius:", ";", ""], (0, d.W)(1), O.Z[0], (function(e) {
                var t = e.color;
                return s.ZP[t] || s.ZP.midnight_normal
            }), (0, d.W)(2), (0, d.W)(1), (function(e) {
                return e.onClick ? (0, a.css)(["cursor:pointer;"]) : ""
            }));

            function Ue(e) {
                return Ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Ue(e)
            }

            function qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qe(Object(n), !0).forEach((function(t) {
                        Xe(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Xe(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== Ue(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" !== Ue(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === Ue(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Ge(e) {
                var t = e.srcSet,
                    n = void 0 === t ? [] : t,
                    o = e.badges,
                    r = void 0 === o ? [] : o,
                    a = e.dataTestids,
                    l = void 0 === a ? {} : a,
                    c = e.logo,
                    s = void 0 === c ? null : c,
                    d = e.sliderNavButton,
                    u = e.lazyLoad,
                    p = void 0 !== u && u,
                    f = e.withSlideIndexerBadge,
                    m = void 0 !== f && f,
                    g = e.handleSliderNavButtonClick,
                    h = n.filter(Boolean);
                return i.createElement(Qe, {
                    $hasLogo: !!s
                }, i.createElement(ie, {
                    srcSet: h,
                    badges: r,
                    dataTestids: l,
                    aspectRatio: {
                        xs: "388 / 248",
                        md: "388 / 248"
                    },
                    sliderNavButton: d,
                    lazyLoad: p,
                    withSlideIndexerBadge: m,
                    handleSliderNavButtonClick: g
                }), i.createElement(et, null, s ? i.createElement(tt, {
                    src: s,
                    loading: "lazy"
                }) : i.createElement(v.JO, {
                    name: "NoImage",
                    size: "xl",
                    color: "smoke_light"
                })))
            }
            Ve.propTypes = {
                children: r().node,
                icon: r().oneOf(h.m),
                iconRight: r().oneOf(h.m),
                iconSize: r().oneOf(v._E),
                onClick: r().func,
                color: r().oneOf([].concat(function(e) {
                    return function(e) {
                        if (Array.isArray(e)) return Je(e)
                    }(e) || function(e) {
                        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return Je(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Je(e, t)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }(Object.keys(s.ZP)), ["currentColor"]))
            }, Ge.propTypes = Ye(Ye({}, se), {}, {
                logo: r().string
            });
            var Ke, Qe = a.default.div.withConfig({
                    componentId: "sc-1pddr0v-0"
                })(["position:relative;--logo-size:100px;padding-bottom:calc(calc(var(--logo-size) / 2) - 8px);"]),
                et = a.default.div.withConfig({
                    componentId: "sc-1pddr0v-1"
                })(["position:absolute;display:flex;justify-content:center;align-items:center;width:var(--logo-size);height:var(--logo-size);object-fit:contain;object-position:center;background-color:", ";padding:", ";border-radius:", ";position:absolute;top:calc(100% - calc(var(--logo-size)));left:calc(50% - calc(var(--logo-size) / 2));"], s.ZP.white, (0, d.W)(3), c.p.full),
                tt = a.default.img.withConfig({
                    componentId: "sc-1pddr0v-2"
                })(["width:100%;height:100%;object-fit:contain;object-position:center;"]);

            function nt(e) {
                var t = e.children,
                    n = e.href,
                    o = e.target,
                    r = void 0 === o ? "_self" : o,
                    a = e.onClick,
                    l = e.as,
                    c = e.highlighted,
                    s = void 0 !== c && c,
                    d = e.dataTestid,
                    u = l || (n ? "a" : a ? "button" : "div");
                return i.createElement(ot, {
                    as: u,
                    target: r,
                    href: n,
                    onClick: a,
                    $highlighted: s,
                    dataTestid: d
                }, t)
            }
            var ot = a.default.div.withConfig({
                componentId: "sc-1jge648-0"
            })(["width:100%;height:100%;display:flex;flex-direction:column;border:1px solid ", ";border-radius:", ";padding:", " ", ";background-color:", ";transition:box-shadow 0.2s ease-in-out;&:hover{box-shadow:0px 1px 10px 0px #00000017;}&:is(a,button){cursor:pointer;}&:is(button){", "}&:is(a){text-decoration:none;}"], s.ZP.smoke_medium_light, c.Z.radiusLg, (0, d.W)(2), (0, d.W)(0), (function(e) {
                return e.$highlighted ? s.ZP.sea_lighter : "white"
            }), (0, l.Z)(Ke || (Ke = function(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["text-align: left;"]))));
            nt.propTypes = {
                children: r().node,
                href: r().string,
                target: r().string,
                onClick: r().func,
                as: r().oneOfType([r().string, r().elementType]),
                highlighted: r().bool,
                dataTestid: r().string
            }, nt.Media = ie, nt.MediaPromoter = Ge, nt.Header = Ze, nt.HeaderAction = Ve, nt.Footer = we, nt.FooterSupTitle = je
        }
    }
]);