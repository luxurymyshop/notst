"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [79888], {
        79888: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var i = r(59499),
                n = r(67294),
                o = r(2185),
                s = r(6388),
                l = r(99619),
                a = r(70232),
                c = r(5900),
                u = r(33564),
                d = r(85893);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function v(e) {
                var t = e.title,
                    r = e.queryVars,
                    i = e.listingUrl,
                    p = (0, o.v9)(a.P6),
                    v = (0, n.useMemo)((function() {
                        var e = r || {},
                            t = e.sectionType,
                            i = e.categoryId,
                            n = void 0 === i ? 0 : i,
                            o = e.cityIds,
                            s = void 0 === o ? [] : o,
                            l = e.areaIds,
                            a = void 0 === l ? [] : l,
                            c = e.keyword,
                            u = e.size,
                            d = void 0 === u ? 5 : u,
                            v = e.type;
                        return {
                            variables: {
                                query: {
                                    filters: y(y(y({
                                        ad: y(y({
                                            categoryId: n,
                                            isPremium: "premium" === t,
                                            hasImage: !0,
                                            location: {
                                                cityIds: s,
                                                areaIds: a
                                            }
                                        }, c && {
                                            text: c
                                        }), "ALL" !== v && {
                                            type: v
                                        })
                                    }, "private" === t && {
                                        seller: {
                                            isStore: !1
                                        }
                                    }), "shop" === t && {
                                        seller: {
                                            isStore: !0
                                        }
                                    }), {}, {
                                        extension: {
                                            extendPublishedAdsSearchIfNeeded: !0
                                        }
                                    }),
                                    page: {
                                        number: 1,
                                        size: d
                                    },
                                    sort: {
                                        adProperty: "LIST_TIME",
                                        sortOrder: "DESC"
                                    }
                                }
                            },
                            context: {
                                lang: p,
                                isNewGateway: !0
                            },
                            fetchPolicy: "no-cache"
                        }
                    }), [r, p]),
                    f = (0, s.aM)(l.RX, v),
                    g = f.data,
                    b = f.loading,
                    O = f.error,
                    m = (0, n.useMemo)((function() {
                        var e, t;
                        return (0, c.Y)({
                            listingAds: (null === g || void 0 === g || null === (e = g.getListingAds) || void 0 === e || null === (t = e.ads) || void 0 === t ? void 0 : t.details) || [],
                            lang: p
                        })
                    }), [g, p]);
                return b ? null : O ? (0, d.jsx)("div", {
                    children: "Error loading. Please try again later."
                }) : m.length ? (0, d.jsx)(u.Z, {
                    sectionId: "".concat(null === r || void 0 === r ? void 0 : r.sectionType, "_ads"),
                    lang: p,
                    ads: m,
                    title: t,
                    listingUrl: i,
                    isPremium: "premium" === (null === r || void 0 === r ? void 0 : r.sectionType)
                }) : null
            }

            function f(e) {
                return e.sections.map((function(e) {
                    var t = e.title,
                        r = e.queryVars,
                        i = e.listingUrl;
                    return (0, d.jsx)(v, {
                        title: t,
                        queryVars: r,
                        listingUrl: i
                    }, null === r || void 0 === r ? void 0 : r.sectionType)
                }))
            }
        }
    }
]);