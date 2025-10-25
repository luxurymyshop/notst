"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11741], {
        88503: function(l, e, n) {
            n.d(e, {
                u: function() {
                    return r
                }
            });
            var i = n(80925),
                o = n(88468),
                r = function(l) {
                    var e = l.lang,
                        n = void 0 === e ? i.DEFAULT_LANGUAGE : e,
                        r = l.location,
                        t = (r = void 0 === r ? {} : r).regionSlug,
                        u = r.areaSlug,
                        a = l.categorySlug,
                        d = l.subject,
                        v = l.listId,
                        s = l.searchParams,
                        c = {
                            lang: n,
                            location: {
                                regionSlug: u && u !== {
                                    fr: "toute_la_ville",
                                    ar: "\u0627\u0644\u0645\u062f\u064a\u0646\u0629_\u0643\u0644\u0647\u0627"
                                }[n] ? u : t
                            },
                            categorySlug: a,
                            subject: d,
                            listId: v,
                            searchParams: s
                        };
                    return (0, o.M_)(c)
                }
        },
        31860: function(l, e, n) {
            n.d(e, {
                $G: function() {
                    return d
                },
                Cv: function() {
                    return s
                },
                Ex: function() {
                    return p
                },
                HE: function() {
                    return _
                },
                Hn: function() {
                    return f
                },
                I7: function() {
                    return O
                },
                J1: function() {
                    return g
                },
                We: function() {
                    return i
                },
                Xc: function() {
                    return r
                },
                Yq: function() {
                    return S
                },
                ce: function() {
                    return o
                },
                d_: function() {
                    return P
                },
                dh: function() {
                    return u
                },
                f_: function() {
                    return T
                },
                gj: function() {
                    return L
                },
                hx: function() {
                    return a
                },
                kh: function() {
                    return m
                },
                kp: function() {
                    return E
                },
                lg: function() {
                    return h
                },
                nL: function() {
                    return v
                },
                nd: function() {
                    return b
                },
                ol: function() {
                    return D
                },
                qK: function() {
                    return c
                },
                rA: function() {
                    return A
                },
                s6: function() {
                    return C
                },
                w5: function() {
                    return y
                },
                wt: function() {
                    return t
                },
                yr: function() {
                    return I
                }
            });
            var i = "LOAD_AD_VIEW_PAGE",
                o = "SAVE_AD_SUCCESS",
                r = "UNSAVE_AD_SUCCESS",
                t = "CLEAR_NOTIFICATIONS",
                u = "SUBMIT_REPORT_SUCCESS",
                a = "SUBMIT_REPORT_ERROR",
                d = "SUBMIT_NC_LEAD",
                v = "SUBMIT_NC_LEAD_SUCCESS",
                s = "SUBMIT_NC_LEAD_FAILED",
                c = "DISMISS_ALERT",
                m = "AD_NOT_FOUND",
                p = "SERVER_SIDE_ERROR",
                f = "SHOW_MODAL",
                g = "CONTACT_CTA_DISPLAY_TOGGLED",
                A = "TP_DISPLAY_TOGGLED",
                y = "AD_DETAIL_VIEWED",
                h = "PHONE_NUMBER_CALLED",
                E = "TRIGGER_CHAT",
                S = "WHATSAPP_CTA_CLICKED",
                _ = "IMPRESSION_TAG_EVENT",
                I = "CLICK_TAG_EVENT",
                O = "SEE_MORE_FROM_SHOP",
                C = "CLICK_MORE_ADS",
                D = "CHECKOUT/UPDATE_AD_INFO",
                T = "ADVIEW/ECOMMERCE_CTA_CLICKED",
                b = "ADVIEW/LOAD_SIMILAR_ADS",
                L = "ADVIEW/CREDIT_CALCULATOR_DISPLAYED",
                P = "ADVIEW/CREDIT_CALCULATOR_CTA_CLICKED"
        },
        75677: function(l, e, n) {
            n.d(e, {
                ZP: function() {
                    return d
                }
            });
            var i = n(59499),
                o = n(31860),
                r = {
                    src: "/_next/static/media/adview-not-found.48901628.png",
                    height: 624,
                    width: 684,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAy0lEQVR42hXJO07EMBQF0LcOFsYWaGmQoKBhNyBRU9IhehBoJmRQMokmn4nzsRM7fs++hOJUh3ontLnoHd8tEl59xDOA681XjPGBtJfLYRWjHEMZi7rTqM4aduUTgBvyEj+9BBgvXq8xtO2vlOU+1MOCbnb3ZDm8c4xYBGFmhuneoHUaRwZ65xcavSSNtiiUDdO4g6lfME15aGbB6PmDJg63WaWQZA2Sww+Ox2/sDkXI6wHbXVGlpn9P2amL++wsaTlwWrTIK/VIRPQHC5zIbZgBBtQAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 7
                };

            function t(l, e) {
                var n = Object.keys(l);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(l);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(l, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function u(l) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(l, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return l
            }
            var a = {
                    adInfo: {
                        id: null,
                        listId: null,
                        subject: null,
                        description: null,
                        price: null,
                        listTime: null,
                        isPhoneHidden: !1,
                        phone: null,
                        phoneImageUrl: null,
                        isPhoneVerified: !1,
                        hasShipping: !1,
                        friendlyUrl: null,
                        vertical: null,
                        isEligibleToExpertize: !1,
                        rentalBlockedDates: null,
                        isExpertizeSent: !1,
                        seller: {
                            type: null,
                            regTime: null,
                            img: null,
                            website: null,
                            address: null,
                            name: null,
                            uuId: null,
                            id: null,
                            slug: null
                        },
                        location: {
                            city: {
                                id: null,
                                name: null,
                                slug: null
                            },
                            area: {
                                id: null,
                                name: null,
                                slug: null
                            },
                            coordinates: {
                                longitude: null,
                                latitude: null
                            }
                        },
                        category: {
                            id: null,
                            name: null,
                            slug: null,
                            parent: {
                                id: null,
                                name: null,
                                slug: null
                            },
                            parentsNames: null
                        },
                        params: {
                            primary: [],
                            secondary: [],
                            extra: []
                        },
                        images: [],
                        videos: [],
                        type: {
                            key: null,
                            label: null,
                            slug: null
                        },
                        isSaved: !1,
                        searchQuery: ""
                    },
                    alertOptions: {
                        showAlert: !1
                    },
                    toastNotification: {},
                    reportSubmissionStatus: "REPORT_SUBMISSION_UNSUBMITTED",
                    hasStickySeller: !1,
                    isWidgetViewable: !1,
                    similarAds: null,
                    recommendedAds: {
                        adsIds: null,
                        metadata: {
                            transactionId: null,
                            listName: null,
                            queryParams: {
                                itemId: null
                            }
                        }
                    },
                    activeModal: null,
                    navigationLinks: {
                        list: null
                    },
                    errorData: {
                        image: null,
                        title: null,
                        description: null
                    },
                    ncLeadFormSuccess: !1
                },
                d = function() {
                    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e.type,
                        i = e.payload;
                    switch (n) {
                        case o.We:
                            if (null !== i.ad) {
                                var t = i.friendlyUrlSQ,
                                    d = i.ad,
                                    v = i.searchQuery,
                                    s = new URLSearchParams(v),
                                    c = {
                                        query: s.get("q"),
                                        all: v
                                    };
                                return u(u({}, l), {}, {
                                    adInfo: d,
                                    navigationLinks: {
                                        list: t
                                    },
                                    searchQuery: c
                                })
                            }
                            return l;
                        case o.ol:
                            var m = i.id,
                                p = i.seller,
                                f = (p = void 0 === p ? {} : p).id,
                                g = i.price,
                                A = (g = void 0 === g ? {} : g).value;
                            return u(u({}, l), {}, {
                                adInfo: u(u({}, l.adInfo), {}, {
                                    id: m,
                                    price: u(u({}, l.adInfo.price), {}, {
                                        value: A
                                    }),
                                    seller: u(u({}, l.adInfo.seller), {}, {
                                        id: f
                                    })
                                })
                            });
                        case o.Hn:
                            var y = i.modalType,
                                h = i.sourceElement,
                                E = i.dispatchAfterSuccess;
                            return u(u({}, l), {}, {
                                activeModal: y,
                                activeModalSource: h,
                                dispatchAfterSuccess: E
                            });
                        case o.J1:
                            var S = i.ctaDisplayed;
                            return u(u({}, l), {}, {
                                hasStickySeller: !S
                            });
                        case o.rA:
                            var _ = i.tpDisplayed;
                            return u(u({}, l), {}, {
                                hasStickyTP: !_
                            });
                        case o.dh:
                            var I = {
                                type: "success",
                                message: "av.reportForm.success",
                                showAlert: !0
                            };
                            return u(u({}, l), {}, {
                                alertOptions: I
                            });
                        case o.hx:
                            var O = {
                                type: "error",
                                message: "av.common.error",
                                showAlert: !0
                            };
                            return u(u({}, l), {}, {
                                alertOptions: O
                            });
                        case o.nd:
                            return u(u({}, l), {}, {
                                similarAds: i
                            });
                        case o.wt:
                            return u(u({}, l), {}, {
                                toastNotification: {}
                            });
                        case o.qK:
                            return u(u({}, l), {}, {
                                alertOptions: {
                                    showAlert: !1
                                }
                            });
                        case o.HE:
                            var C = i.adsIds,
                                D = i.metadata;
                            return u(u({}, l), {}, {
                                recommendedAds: {
                                    adsIds: C,
                                    metadata: D
                                }
                            });
                        case o.kh:
                            var T = {
                                image: r,
                                title: "av.page.error.adNotFound",
                                description: "av.page.error.adNotFound.description.title",
                                causes: ["av.page.error.adNotFound.description.cause1", "av.page.error.adNotFound.description.cause2", "av.page.error.adNotFound.description.cause3"]
                            };
                            return u(u({}, l), {}, {
                                errorData: T
                            });
                        case o.Ex:
                            var b = {
                                image: r,
                                title: "av.page.error.500.error_message",
                                description: "av.page.error.500.error_summary"
                            };
                            return u(u({}, l), {}, {
                                errorData: b
                            });
                        case o.nL:
                            return u(u({}, l), {}, {
                                ncLeadFormSuccess: !0
                            });
                        case o.Cv:
                            return u(u({}, l), {}, {
                                ncLeadFormSuccess: !1
                            });
                        default:
                            return l
                    }
                }
        },
        5900: function(l, e, n) {
            n.d(e, {
                Y: function() {
                    return a
                }
            });
            var i = n(52493),
                o = n(76871),
                r = n(74324),
                t = n(80925),
                u = n(88503),
                a = function(l) {
                    var e = l.listingAds,
                        n = l.lang,
                        a = [];
                    return e && e.forEach((function(l) {
                        if ("NewConstructionAd" === (null === l || void 0 === l ? void 0 : l.__typename)) {
                            var e, d, v, s, c, m, p, f, g, A, y, h = {
                                rooms: "fr" === n ? "Nombre de pi\xe8ces" : "\u0639\u062f\u062f \u0627\u0644\u0628\u064a\u0648\u062a \u0623\u0648\u0627\u0644\u063a\u0631\u0641",
                                bathrooms: "fr" === n ? "Nombre de salles de bain" : "\u0627\u0644\u062d\u0645\u0627\u0645\u0627\u062a",
                                size: "fr" === n ? "Superficie" : "\u0627\u0644\u0645\u0633\u0627\u062d\u0629",
                                unit: "fr" === n ? "m\xb2" : "\u0645\u062a\u0631 \u0645\u0631\u0628\u0639"
                            };
                            a.push({
                                isNc: !0,
                                id: null === l || void 0 === l ? void 0 : l.externalLink,
                                subject: null === l || void 0 === l ? void 0 : l.title,
                                price: {
                                    value: null === l || void 0 === l || null === (e = l.price) || void 0 === e ? void 0 : e.withoutCurrency,
                                    currency: null === l || void 0 === l || null === (d = l.price) || void 0 === d || null === (v = d.withCurrency) || void 0 === v || null === (s = v.split(" ")) || void 0 === s ? void 0 : s[1]
                                },
                                category: {
                                    formatted: {
                                        fr: "Immobilier neuf",
                                        ar: "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629"
                                    }[n]
                                },
                                location: "".concat(null === l || void 0 === l || null === (c = l.location) || void 0 === c || null === (m = c.city) || void 0 === m ? void 0 : m.name).concat(null !== l && void 0 !== l && null !== (p = l.location) && void 0 !== p && null !== (f = p.area) && void 0 !== f && f.name ? ", ".concat(null === l || void 0 === l || null === (g = l.location) || void 0 === g ? void 0 : g.area.name) : ""),
                                params: {
                                    secondary: [(null === l || void 0 === l ? void 0 : l.rooms) && {
                                        key: "rooms",
                                        label: h.rooms,
                                        value: l.rooms
                                    }, (null === l || void 0 === l ? void 0 : l.bathrooms) && {
                                        key: "bathrooms",
                                        label: h.bathrooms,
                                        value: l.bathrooms
                                    }, (null === l || void 0 === l ? void 0 : l.size) && {
                                        key: "size",
                                        label: h.size,
                                        value: l.size,
                                        unit: h.unit
                                    }].filter(Boolean)
                                },
                                defaultImage: (null === l || void 0 === l || null === (A = l.media) || void 0 === A || null === (y = A.defaultImage) || void 0 === y ? void 0 : y.defaultPath) || t.IMAGE_PLACEHOLDER,
                                href: null === l || void 0 === l ? void 0 : l.externalLink,
                                images: []
                            })
                        } else if (null !== l && void 0 !== l && l.adId) {
                            var E, S, _, I, O, C, D, T, b, L, P, R, U, w, N, M, V, k, x, H, B, j, G, F, W, K, Q, Y, z, q, J, Z, X, $, ll, el, nl, il, ol, rl, tl, ul, al, dl, vl, sl, cl, ml, pl, fl = (null === l || void 0 === l || null === (E = l.media) || void 0 === E || null === (S = E.media) || void 0 === S || null === (_ = S.images) || void 0 === _ ? void 0 : _.map((function(l) {
                                    var e;
                                    return null === (e = l.paths) || void 0 === e ? void 0 : e.standard
                                }))) || [],
                                gl = (null === l || void 0 === l || null === (I = l.media) || void 0 === I || null === (O = I.media) || void 0 === O || null === (C = O.videos) || void 0 === C ? void 0 : C.map((function(l) {
                                    return null === l || void 0 === l ? void 0 : l.defaultPath
                                }))) || [],
                                Al = (null === l || void 0 === l || null === (D = l.category) || void 0 === D ? void 0 : D.name) || "",
                                yl = (null === l || void 0 === l || null === (T = l.category) || void 0 === T || null === (b = T.parent) || void 0 === b ? void 0 : b.name) || "",
                                hl = (0, i.Sy)({
                                    date: null === l || void 0 === l ? void 0 : l.listTime,
                                    lang: n
                                }),
                                El = function() {
                                    var e;
                                    if (null === l || void 0 === l || null === (e = l.params) || void 0 === e || !e.extra || !Array.isArray(l.params.extra)) return !1;
                                    var n = l.params.extra.some((function(l) {
                                            return "car_inspection_report_time" === l.id && l.textValue && "" !== l.textValue.trim()
                                        })),
                                        i = l.params.extra.some((function(l) {
                                            return "car_inspection_report_link" === l.id && l.textValue && "" !== l.textValue.trim()
                                        }));
                                    return n && i
                                }();
                            a.push({
                                id: null === l || void 0 === l ? void 0 : l.adId,
                                listId: null === l || void 0 === l ? void 0 : l.listId,
                                hasShipping: null === l || void 0 === l ? void 0 : l.offersShipping,
                                isEcommerce: null === l || void 0 === l ? void 0 : l.isEcommerce,
                                category: {
                                    formatted: "".concat(yl || "").concat(Al ? " - ".concat(Al) : ""),
                                    name: Al,
                                    id: null === l || void 0 === l || null === (L = l.category) || void 0 === L ? void 0 : L.id,
                                    parent: {
                                        id: null === l || void 0 === l || null === (P = l.category) || void 0 === P || null === (R = P.parent) || void 0 === R ? void 0 : R.id,
                                        name: yl
                                    }
                                },
                                adType: {
                                    key: null === l || void 0 === l || null === (U = l.type) || void 0 === U ? void 0 : U.key,
                                    label: null === l || void 0 === l || null === (w = l.type) || void 0 === w ? void 0 : w.name
                                },
                                subject: null === l || void 0 === l ? void 0 : l.title,
                                description: null === l || void 0 === l ? void 0 : l.description,
                                seller: {
                                    id: "STORE" === (null === l || void 0 === l ? void 0 : l.sellerType) ? null === l || void 0 === l || null === (N = l.seller) || void 0 === N ? void 0 : N.storeId : null === l || void 0 === l || null === (M = l.seller) || void 0 === M ? void 0 : M.accountId,
                                    type: null === l || void 0 === l ? void 0 : l.sellerType,
                                    name: null === l || void 0 === l || null === (V = l.seller) || void 0 === V ? void 0 : V.name,
                                    img: null === l || void 0 === l || null === (k = l.seller) || void 0 === k || null === (x = k.logo) || void 0 === x ? void 0 : x.defaultPath,
                                    isVerifiedSeller: null === l || void 0 === l || null === (H = l.seller) || void 0 === H ? void 0 : H.isVerifiedSeller,
                                    phone: {
                                        number: null === l || void 0 === l || null === (B = l.seller) || void 0 === B || null === (j = B.phone) || void 0 === j ? void 0 : j.number,
                                        verified: null === l || void 0 === l || null === (G = l.seller) || void 0 === G || null === (F = G.phone) || void 0 === F ? void 0 : F.verified
                                    }
                                },
                                price: {
                                    value: null === l || void 0 === l || null === (W = l.price) || void 0 === W ? void 0 : W.withoutCurrency,
                                    currency: null === l || void 0 === l || null === (K = l.price) || void 0 === K || null === (Q = K.withCurrency) || void 0 === Q || null === (Y = Q.split(" ")) || void 0 === Y ? void 0 : Y[1]
                                },
                                monthlyPayment: {
                                    value: null === l || void 0 === l || null === (z = l.monthlyPayment) || void 0 === z ? void 0 : z.withoutCurrency,
                                    currency: null === l || void 0 === l || null === (q = l.monthlyPayment) || void 0 === q || null === (J = q.withCurrency) || void 0 === J || null === (Z = J.split(" ")) || void 0 === Z ? void 0 : Z[1]
                                },
                                oldPrice: {
                                    value: null === l || void 0 === l || null === (X = l.oldPrice) || void 0 === X ? void 0 : X.withoutCurrency,
                                    currency: null === l || void 0 === l || null === ($ = l.oldPrice) || void 0 === $ || null === (ll = $.withCurrency) || void 0 === ll || null === (el = ll.split(" ")) || void 0 === el ? void 0 : el[1]
                                },
                                defaultImage: (null === l || void 0 === l || null === (nl = l.media) || void 0 === nl || null === (il = nl.defaultImage) || void 0 === il || null === (ol = il.paths) || void 0 === ol ? void 0 : ol.standard) || t.IMAGE_PLACEHOLDER,
                                images: fl,
                                videos: gl,
                                params: {
                                    secondary: (null === l || void 0 === l || null === (rl = l.params) || void 0 === rl || null === (tl = rl.secondary) || void 0 === tl ? void 0 : tl.map((function(l) {
                                        var e = l.id,
                                            n = l.name,
                                            i = l.textValue;
                                        return {
                                            key: e,
                                            label: n,
                                            value: l.numericValue || i,
                                            unit: l.unit,
                                            trackingValue: l.trackingValue
                                        }
                                    }))) || []
                                },
                                location: "".concat(null === l || void 0 === l || null === (ul = l.location) || void 0 === ul || null === (al = ul.city) || void 0 === al ? void 0 : al.name).concat(null !== l && void 0 !== l && null !== (dl = l.location) && void 0 !== dl && null !== (vl = dl.area) && void 0 !== vl && vl.name ? ", ".concat(null === l || void 0 === l || null === (sl = l.location) || void 0 === sl ? void 0 : sl.area.name) : ""),
                                date: hl,
                                isHighlighted: null === l || void 0 === l ? void 0 : l.isHighlighted,
                                discount: null === l || void 0 === l ? void 0 : l.discount,
                                isImmoneuf: null === l || void 0 === l ? void 0 : l.isImmoneuf,
                                isPremium: null === l || void 0 === l ? void 0 : l.isPremium,
                                isDelivery: null === l || void 0 === l ? void 0 : l.offersShipping,
                                isSaved: null === l || void 0 === l ? void 0 : l.isInMyFavorites,
                                isShop: "STORE" === (null === l || void 0 === l ? void 0 : l.sellerType),
                                isUrgent: null === l || void 0 === l ? void 0 : l.isUrgent,
                                isHotDeal: null === l || void 0 === l ? void 0 : l.isHotDeal,
                                isCarChecked: El,
                                href: o.baseUrl.concat((0, u.u)({
                                    lang: n,
                                    location: {
                                        regionSlug: (0, r.lV)(null === l || void 0 === l || null === (cl = l.location.city) || void 0 === cl ? void 0 : cl.name),
                                        areaSlug: (0, r.lV)(null === l || void 0 === l || null === (ml = l.location.area) || void 0 === ml ? void 0 : ml.name)
                                    },
                                    categorySlug: (0, r.lV)(null === l || void 0 === l || null === (pl = l.category) || void 0 === pl ? void 0 : pl.name),
                                    subject: null === l || void 0 === l ? void 0 : l.title,
                                    listId: null === l || void 0 === l ? void 0 : l.listId
                                }))
                            })
                        }
                    })), a
                }
        }
    }
]);