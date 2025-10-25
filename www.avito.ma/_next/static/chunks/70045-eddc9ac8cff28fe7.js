"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [70045], {
        99619: function(n, e, t) {
            t.d(e, {
                $C: function() {
                    return x
                },
                Ck: function() {
                    return g
                },
                DG: function() {
                    return P
                },
                R6: function() {
                    return _
                },
                RX: function() {
                    return w
                },
                _w: function() {
                    return y
                },
                gT: function() {
                    return b
                },
                jm: function() {
                    return h
                },
                we: function() {
                    return v
                }
            });
            var r, i, a, o, d, s, l, c, u, m, p = t(71383),
                f = t(68806),
                h = (0, f.Ps)(r || (r = (0, p.Z)(["\n  mutation saveSearch($input: SaveSearchInput!) {\n    saveSearch(input: $input) {\n      id\n      query\n    }\n  }\n"]))),
                g = (0, f.Ps)(i || (i = (0, p.Z)(["\n  mutation unsaveSearch($input: UnsaveSearchInput!) {\n    unsaveSearch(input: $input) {\n      query\n    }\n  }\n"]))),
                v = (0, f.Ps)(a || (a = (0, p.Z)(["\n  query getMySavedSearches($categoryId: ID) {\n    getMySavedSearches(categoryId: $categoryId) {\n      searches {\n        id\n        query\n        title\n        savedTime\n      }\n    }\n  }\n"]))),
                y = (0, f.Ps)(o || (o = (0, p.Z)(["\n  query getSimilarLinks($similarLinksUrl: String!) {\n    getSimilarLinks(similarLinksUrl: $similarLinksUrl) {\n      url\n      label\n    }\n  }\n"]))),
                b = (0, f.Ps)(d || (d = (0, p.Z)(["\n  query getPopularLinks($popularKeyword: String!) {\n    getPopularLinks(popularKeyword: $popularKeyword) {\n      url\n      label\n    }\n  }\n"]))),
                x = (0, f.Ps)(s || (s = (0, p.Z)(["\n  query getListingAds($query: ListingAdsSearchQuery!) {\n    getListingAds(query: $query) {\n      count {\n        total\n      }\n    }\n  }\n"]))),
                w = ((0, f.Ps)(l || (l = (0, p.Z)(["\n  query getListingAds($query: ListingAdsSearchQuery!) {\n    getListingAds(query: $query) {\n      ads {\n        details {\n          ... on PublishedAd {\n            adId\n            listId\n            category {\n              id\n              name\n              parent {\n                id\n                name\n              }\n            }\n            type {\n              key\n              name\n            }\n            title\n            description\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            monthlyPayment {\n              withCurrency\n              withoutCurrency\n            }\n            oldPrice {\n              withCurrency\n              withoutCurrency\n            }\n            discount\n\n            params {\n              # primary {\n              #   ... on TextAdParam {\n              #     id\n              #     name\n              #     textValue\n              #     trackingValue\n              #   }\n              #   ... on NumericAdParam {\n              #     id\n              #     name\n              #     numericValue\n              #     unit\n              #   }\n              #   ... on BooleanAdParam {\n              #     id\n              #     name\n              #     booleanValue\n              #   }\n              # }\n              secondary {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n              # extra {\n              #   ... on BooleanAdParam {\n              #     id\n              #     name\n              #     booleanValue\n              #   }\n              # }\n            }\n            media {\n              defaultImage {\n                paths {\n                  standard\n                  # smallThumbnail\n                  # largeThumbnail\n                  # fullHd\n                }\n              }\n              media {\n                images {\n                  paths {\n                    standard\n                    # smallThumbnail\n                    # largeThumbnail\n                    # fullHd\n                  }\n                }\n              }\n              # mediaCount\n            }\n            seller {\n              ... on PrivateProfile {\n                accountId\n                name\n                phone {\n                  number\n                  verified\n                }\n              }\n              ... on StoreProfile {\n                storeId\n                name\n                phone {\n                  number\n                  verified\n                }\n                logo {\n                  defaultPath\n                }\n              }\n            }\n            sellerType\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            listTime\n            # reservedDays\n            # salesNoticeLink\n            isHighlighted\n            isInMyFavorites\n            offersShipping\n            isEcommerce\n            isImmoneuf\n            # immoneufProjectId\n            isPremium\n            isUrgent\n            isHotDeal\n          }\n        }\n      }\n    }\n  }\n"]))), (0, f.Ps)(c || (c = (0, p.Z)(["\n  query getListingAds($query: ListingAdsSearchQuery!) {\n    getListingAds(query: $query) {\n      count {\n        total\n      }\n      ads {\n        details {\n          ... on PublishedAd {\n            adId\n            listId\n            category {\n              id\n              name\n              parent {\n                id\n                name\n              }\n            }\n            type {\n              key\n              name\n            }\n            title\n            description\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            monthlyPayment {\n              withCurrency\n              withoutCurrency\n            }\n            oldPrice {\n              withCurrency\n              withoutCurrency\n            }\n            discount\n\n            params {\n              # primary {\n              #   ... on TextAdParam {\n              #     id\n              #     name\n              #     textValue\n              #     trackingValue\n              #   }\n              #   ... on NumericAdParam {\n              #     id\n              #     name\n              #     numericValue\n              #     unit\n              #   }\n              #   ... on BooleanAdParam {\n              #     id\n              #     name\n              #     booleanValue\n              #   }\n              # }\n              secondary {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n              extra {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n            }\n            media {\n              defaultImage {\n                paths {\n                  standard\n                  # smallThumbnail\n                  # largeThumbnail\n                  # fullHd\n                }\n              }\n              media {\n                images {\n                  paths {\n                    standard\n                    # smallThumbnail\n                    # largeThumbnail\n                    # fullHd\n                  }\n                }\n                videos {\n                  defaultPath\n                }\n              }\n              # mediaCount\n            }\n            seller {\n              ... on PrivateProfile {\n                accountId\n                name\n                phone {\n                  number\n                  verified\n                }\n              }\n              ... on StoreProfile {\n                storeId\n                name\n                phone {\n                  number\n                  verified\n                }\n                logo {\n                  defaultPath\n                }\n                isVerifiedSeller\n              }\n            }\n            sellerType\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            listTime\n            # reservedDays\n            # salesNoticeLink\n            isHighlighted\n            isInMyFavorites\n            offersShipping\n            isEcommerce\n            isImmoneuf\n            # immoneufProjectId\n            isPremium\n            isUrgent\n            isHotDeal\n          }\n          ... on NewConstructionAd {\n            title\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            rooms\n            bathrooms\n            size\n            externalLink\n            media {\n              defaultImage {\n                defaultPath\n              }\n              # mediaCount\n            }\n          }\n        }\n        searchExtension {\n          extensionType\n        }\n      }\n    }\n  }\n"])))),
                P = (0, f.Ps)(u || (u = (0, p.Z)(["\n  query getCombinedListingAds(\n    $premiumQuery: ListingAdsSearchQuery!\n    $regularQuery: ListingAdsSearchQuery!\n  ) {\n    premiumAds: getListingAds(query: $premiumQuery) {\n      ads {\n        details {\n          ... on PublishedAd {\n            adId\n            listId\n            category {\n              id\n              name\n              parent {\n                id\n                name\n              }\n            }\n            type {\n              key\n              name\n            }\n            title\n            description\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            monthlyPayment {\n              withCurrency\n              withoutCurrency\n            }\n            oldPrice {\n              withCurrency\n              withoutCurrency\n            }\n            discount\n            params {\n              secondary {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n              extra {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n            }\n            media {\n              defaultImage {\n                paths {\n                  standard\n                }\n              }\n              media {\n                images {\n                  paths {\n                    standard\n                  }\n                }\n              }\n            }\n            seller {\n              ... on PrivateProfile {\n                accountId\n                name\n                phone {\n                  number\n                  verified\n                }\n              }\n              ... on StoreProfile {\n                storeId\n                name\n                phone {\n                  number\n                  verified\n                }\n                logo {\n                  defaultPath\n                }\n              }\n            }\n            sellerType\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            listTime\n            isHighlighted\n            isInMyFavorites\n            offersShipping\n            isEcommerce\n            isImmoneuf\n            isPremium\n            isUrgent\n            isHotDeal\n          }\n        }\n      }\n    }\n    regularAds: getListingAds(query: $regularQuery) {\n      count {\n        total\n      }\n      ads {\n        details {\n          ... on PublishedAd {\n            adId\n            listId\n            category {\n              id\n              name\n              parent {\n                id\n                name\n              }\n            }\n            type {\n              key\n              name\n            }\n            title\n            description\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            monthlyPayment {\n              withCurrency\n              withoutCurrency\n            }\n            oldPrice {\n              withCurrency\n              withoutCurrency\n            }\n            discount\n            params {\n              secondary {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n              extra {\n                ... on TextAdParam {\n                  id\n                  name\n                  textValue\n                  trackingValue\n                }\n                ... on NumericAdParam {\n                  id\n                  name\n                  numericValue\n                  unit\n                }\n                ... on BooleanAdParam {\n                  id\n                  name\n                  booleanValue\n                }\n              }\n            }\n            media {\n              defaultImage {\n                paths {\n                  standard\n                }\n              }\n              media {\n                images {\n                  paths {\n                    standard\n                  }\n                }\n                videos {\n                  defaultPath\n                }\n              }\n            }\n            seller {\n              ... on PrivateProfile {\n                accountId\n                name\n                phone {\n                  number\n                  verified\n                }\n              }\n              ... on StoreProfile {\n                storeId\n                name\n                phone {\n                  number\n                  verified\n                }\n                logo {\n                  defaultPath\n                }\n                isVerifiedSeller\n              }\n            }\n            sellerType\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            listTime\n            isHighlighted\n            isInMyFavorites\n            offersShipping\n            isEcommerce\n            isImmoneuf\n            isPremium\n            isUrgent\n            isHotDeal\n          }\n          ... on NewConstructionAd {\n            title\n            price {\n              withCurrency\n              withoutCurrency\n            }\n            location {\n              city {\n                id\n                name\n              }\n              area {\n                id\n                name\n              }\n              address\n            }\n            rooms\n            bathrooms\n            size\n            externalLink\n            media {\n              defaultImage {\n                defaultPath\n              }\n            }\n          }\n        }\n        searchExtension {\n          extensionType\n        }\n      }\n    }\n  }\n"]))),
                _ = (0, f.Ps)(m || (m = (0, p.Z)(["\n  query getPublishedAd($query: PublishedAdQuery!) {\n    getPublishedAd(query: $query) {\n      ad {\n        adId\n        listId\n        listTime\n        title\n        price {\n          withoutCurrency\n        }\n        location {\n          city {\n            id\n            name\n          }\n          area {\n            id\n            name\n          }\n          address\n        }\n        media {\n          defaultImage {\n            paths {\n              largeThumbnail\n            }\n          }\n        }\n        seller {\n          ... on PrivateProfile {\n            name\n          }\n        }\n      }\n    }\n  }\n"])))
        },
        26654: function(n, e, t) {
            t.d(e, {
                J: function() {
                    return m
                }
            });
            var r, i = t(71383),
                a = t(19521),
                o = t(98e3),
                d = t(48538),
                s = t(19235),
                l = t(83393),
                c = t(31155),
                u = t(90762),
                m = a.default.div.withConfig({
                    componentId: "sc-wdregf-0"
                })(["display:flex;flex-shrink:0;align-items:center;justify-content:center;margin:0;height:", ";width:", ";background-color:", ";border-radius:", ";", " ", " ", ""], (function(n) {
                    var e = n.height;
                    return e ? (0, d.px)(e) : "32px"
                }), (function(n) {
                    var e = n.width;
                    return e ? (0, d.px)(e) : "32px"
                }), (function(n) {
                    var e = n.bg;
                    return e ? s.ZP[e] : "transparent"
                }), l.Z.radiusMax, (function(n) {
                    return n.withGap ? (0, o.Z)(r || (r = (0, i.Z)(["margin-right: ", ";"])), (0, c.W)(2)) : ""
                }), (function(n) {
                    var e = n.borderColor;
                    return e ? "border: 1px solid ".concat(s.ZP[e], ";") : ""
                }), (function(n) {
                    return n.mobileProps && (0, a.css)(["@media (max-width:", "px){width:", ";height:", ";}"], u.AV.md, (function(n) {
                        var e = n.mobileProps.width;
                        return (0, d.px)(e)
                    }), (function(n) {
                        var e = n.mobileProps.height;
                        return (0, d.px)(e)
                    }))
                }))
        },
        11893: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return z
                }
            });
            var r, i, a, o = t(59499),
                d = t(67294),
                s = t(46066),
                l = t(19521),
                c = t(25675),
                u = t.n(c),
                m = t(80775),
                p = t(96977),
                f = t(22036),
                h = t(71383),
                g = t(98e3),
                v = t(48538),
                y = t(90762),
                b = t(19235),
                x = t(22329),
                w = t(41686),
                P = t(73723),
                _ = l.default.div.withConfig({
                    componentId: "sc-14uxd5m-0"
                })(["margin-right:auto;"]),
                k = l.default.div.withConfig({
                    componentId: "sc-14uxd5m-1"
                })(["*:focus{outline:none;}.slick-list,.slick-slider{position:relative;display:block;}.slick-track{position:relative;display:flex;justify-content:space-between;}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden;}.slick-slider{box-sizing:border-box;user-select:none;touch-action:pan-y;}.slick-list{overflow-y:hidden;overflow-x:auto;scrollbar-width:none;margin-top:0;padding-top:", ";direction:ltr;@media (max-width:", "){padding-top:10px;}}.slick-slide{display:none;float:left;min-height:1px;}.slick-slide img{display:block;width:100%;}.slick-slide{padding:10px 10px 10px 0;display:flex !important;}.slick-slide > div:first-of-type{width:100%;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-vertical .slick-slide{display:flex;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-slider.slick-initialized{", "}"], (function(n) {
                    return n.hasSeeMoreText ? "60px" : "10px"
                }), (0, v.px)(y.AV.sm), (0, g.Z)(r || (r = (0, h.Z)(["direction:ltr;"])))),
                j = l.default.button.withConfig({
                    componentId: "sc-14uxd5m-2"
                })(["border:none;margin:0;cursor:pointer;:focus{outline:0;}width:40px;height:40px;display:none;justify-content:center;align-items:center;z-index:2;position:absolute;opacity:0.9;background-color:white;box-shadow:0 2px 9px 0 rgba(0,0,0,0.07);border-radius:50%;color:", ";@media (min-width:", "){display:flex;}", ""], b.ZP.smoke_normal, (0, v.px)(y.AV.md), (function(n) {
                    var e = n.navigation,
                        t = n.hasSeeMoreText,
                        r = "rtl" === n.theme.dir,
                        i = t ? "10px" : "-40px",
                        a = "60px";
                    return {
                        next: "\n      top: ".concat(i, ";\n      ").concat(r ? "left: 0; right: auto;" : "right: 0; left: auto;", "\n    "),
                        prev: "\n      top: ".concat(i, ";\n      ").concat(r ? "left: ".concat(a, "; right: auto;") : "right: ".concat(a, "; left: auto;"), "\n    ")
                    }[e] || ""
                }));
            l.default.div.withConfig({
                componentId: "sc-14uxd5m-3"
            })(["--tooltipBgColor:", ";--tooltip-placement:calc(100% + 12px);", " position:absolute;opacity:0;font-size:", "px;padding:8px 14px;@media (max-width:", "px){font-size:10px;padding:6px 8px;}background-color:var(--tooltipBgColor);border-radius:4px;visibility:hidden;display:block;white-space:nowrap;transition:210ms ease-out 105ms;transition-property:opacity;", ":hover &{visibility:visible;animation:fade-in-out 2s;}@keyframes fade-in-out{10%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}:after{content:'';display:block;position:absolute;--arrow-size:5px;--arrow-border-style:var(--arrow-size) solid var(--tooltipBgColor);--hidden-tooltip-arrow-border:calc(var(--arrow-size) - 1px) solid transparent;", "}"], b.ZP.midnight_normal, (0, g.Z)(i || (i = (0, h.Z)(["", ""])), (function(n) {
                if ("left" === n.tooltipPlacement) return "right: var(--tooltip-placement);";
                return "left: var(--tooltip-placement);"
            })), x.Z[0], y.AV.sm, j, (0, g.Z)(a || (a = (0, h.Z)(["", ""])), (function(n) {
                if ("left" === n.tooltipPlacement) return "\n        right: calc(0px - var(--arrow-size));\n        border-left: var(--arrow-border-style);\n        border-bottom: var(--hidden-tooltip-arrow-border);\n        border-top: var(--hidden-tooltip-arrow-border);\n        transform: translateY(-50%);\n        top: 50%;\n      ";
                return "\n        left: calc(0px - var(--arrow-size));\n        border-right: var(--arrow-border-style);\n        border-bottom: var(--hidden-tooltip-arrow-border);\n        border-top: var(--hidden-tooltip-arrow-border);\n        transform: translateY(-50%);\n        top: 50%;"
            })));
            var O = (0, l.default)(w.xv).withConfig({
                    componentId: "sc-14uxd5m-4"
                })(["color:#bdbdbd;font-size:", ";text-align:center;text-wrap:nowrap;"], (0, v.px)(x.Z[3])),
                S = (0, l.default)(P.zx).withConfig({
                    componentId: "sc-14uxd5m-5"
                })(["width:100%;height:48px;background-color:#3aa4ff;border-color:#3aa4ff;&:hover{background-color:#3493e5;border-color:#3493e5;}&:focus{box-shadow:none;}"]),
                C = function(n) {
                    (0, d.useEffect)((function() {
                        var e, t, r = 0,
                            i = !1,
                            a = function(e) {
                                Math.abs(e.deltaX) > Math.abs(e.deltaY) && (e.preventDefault(), i || (r += e.deltaX, Math.abs(r) >= 100 && (i = !0, r > 0 ? n.current.slickNext() : n.current.slickPrev(), r = 0, setTimeout((function() {
                                    i = !1
                                }), 800))))
                            },
                            o = null === (e = n.current) || void 0 === e || null === (t = e.innerSlider) || void 0 === t ? void 0 : t.list;
                        return o && o.addEventListener("wheel", a, {
                                passive: !1
                            }),
                            function() {
                                o && o.removeEventListener("wheel", a)
                            }
                    }), [])
                },
                A = t(85893);

            function I(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function M(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(t), !0).forEach((function(e) {
                        (0, o.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var T = function(n) {
                var e = n.cards,
                    t = n.onArrowClick,
                    r = n.carouselSliderSettings,
                    i = n.seeMoreLink,
                    a = n.onSeeMoreCardClick,
                    o = n.hasSeeMoreText,
                    c = (0, d.useRef)(null);
                C(c);
                var m = (0, d.useContext)(p.Q).__t,
                    h = ((0, d.useContext)(l.ThemeContext) || {
                        dir: "ltr"
                    }).dir,
                    g = (0, d.useState)(0),
                    v = g[0],
                    y = g[1],
                    b = M({
                        dots: !1,
                        speed: 800,
                        infinite: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchMove: !1,
                        autoplay: !1,
                        afterChange: function(n) {
                            return y(n)
                        },
                        nextArrow: (0, A.jsx)(Z, {
                            hasSeeMoreText: o,
                            navigation: "ltr" === h ? "next" : "prev",
                            onArrowClick: t,
                            currentIndex: v
                        }),
                        prevArrow: (0, A.jsx)(Z, {
                            hasSeeMoreText: o,
                            navigation: "ltr" === h ? "prev" : "next",
                            onArrowClick: t,
                            currentIndex: v
                        })
                    }, r);
                return (0, A.jsx)(_, {
                    children: (0, A.jsx)(k, {
                        hasSeeMoreText: o,
                        children: (0, A.jsxs)(s.Z, M(M({}, b), {}, {
                            ref: c,
                            children: [e.map((function(n, e) {
                                return (0, A.jsx)(d.Fragment, {
                                    children: n
                                }, "cardSlider" + e)
                            })), i && (0, A.jsx)(A.Fragment, {
                                children: (0, A.jsxs)(f.Mz, {
                                    children: [(0, A.jsx)(O, {
                                        children: m("av.suggestions.mau.see-more.title")
                                    }), (0, A.jsx)(u(), {
                                        src: "/phoenix-assets/imgs/layout/see-more-illustration.webp",
                                        width: 170,
                                        height: 120
                                    }), (0, A.jsx)(S, {
                                        radius: "radiusLg",
                                        onClick: a,
                                        uppercase: !1,
                                        children: m("av.suggestions.mau.heading.see-more")
                                    })]
                                })
                            })]
                        }))
                    })
                })
            };
            T.defaultProps = {
                cards: [],
                onArrowClick: function() {},
                carouselSliderSettings: {}
            };
            var z = T,
                Z = function(n) {
                    var e = n.navigation,
                        t = n.onArrowClick,
                        r = n.onClick,
                        i = n.hasSeeMoreText,
                        a = n.currentIndex,
                        o = (0, d.useContext)(p.Q).__t,
                        s = o("next" === e ? "av.adNavigation.nextAd" : "av.adNavigation.previousAd");
                    return (0, A.jsx)(j, {
                        hasSeeMoreText: i,
                        currentIndex: a,
                        navigation: e,
                        onClick: function() {
                            null === r || void 0 === r || r(), t()
                        },
                        "aria-label": s,
                        children: (0, A.jsx)(m.JO, {
                            name: "next" === e ? "ArrowRight" : "ArrowLeft",
                            rtlName: "next" === e ? "ArrowLeft" : "ArrowRight",
                            size: "xs",
                            color: 0 === a && "prev" === e ? "smoke_light" : "midnight_lighter",
                            svgTitle: s
                        })
                    })
                }
        },
        5526: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return c
                }
            });
            var r = t(67294),
                i = t(2994),
                a = t(11893),
                o = t(85893),
                d = (0, r.forwardRef)((function(n, e) {
                    var t = n.cards,
                        r = n.heading,
                        d = n.onArrowClick,
                        s = n.seeMoreLink,
                        l = n.onSeeMoreCardClick,
                        c = n.carouselSliderSettings,
                        u = Boolean(r.props.seeMoreText);
                    return (0, o.jsxs)("div", {
                        children: [r, (0, o.jsx)(i.i, {
                            ref: e,
                            children: (0, o.jsx)(a.Z, {
                                hasSeeMoreText: u,
                                cards: t,
                                onArrowClick: d,
                                seeMoreLink: s,
                                onSeeMoreCardClick: l,
                                carouselSliderSettings: c
                            })
                        })]
                    })
                }));
            d.displayName = "CardsSection", d.defaultProps = {
                cards: [],
                heading: "",
                onArrowClick: function() {}
            };
            var s = d,
                l = (0, r.memo)((function(n) {
                    var e = n.heading,
                        t = n.cards,
                        r = n.seeMoreLink,
                        i = n.onSeeMoreCardClick,
                        a = n.onArrowClick,
                        d = n.carouselSliderSettings;
                    return null !== t && void 0 !== t && t.length ? (0, o.jsx)(s, {
                        heading: e,
                        cards: t,
                        seeMoreLink: r,
                        onSeeMoreCardClick: i,
                        onArrowClick: a,
                        carouselSliderSettings: d
                    }) : null
                }));
            l.displayName = "CardsSliderSection";
            var c = l
        },
        22036: function(n, e, t) {
            t.d(e, {
                Ef: function() {
                    return f
                },
                Mz: function() {
                    return g
                },
                OT: function() {
                    return p
                },
                gM: function() {
                    return h
                }
            });
            var r, i = t(71383),
                a = t(19521),
                o = t(98e3),
                d = t(31155),
                s = t(48538),
                l = t(90762),
                c = t(22329),
                u = t(19235),
                m = t(83393),
                p = a.default.header.withConfig({
                    componentId: "sc-1ekmeip-0"
                })(["display:flex;align-items:center;justify-content:space-between;margin:", " 0;margin-bottom:0;@media (min-width:", "){margin:0;margin-top:", ";}"], (0, d.W)(4), (0, s.px)(l.AV.md), (0, d.W)(4)),
                f = a.default.div.withConfig({
                    componentId: "sc-1ekmeip-1"
                })(["display:flex;align-items:center;", " > h2{font-size:", ";}@media (min-width:", "){margin:0;> h2{font-size:", ";}}"], (0, o.Z)(r || (r = (0, i.Z)(["margin-left: ", ";"])), (0, d.W)(2)), (0, s.px)(c.Z[3]), (0, s.px)(l.AV.md), (0, s.px)(c.Z[4])),
                h = a.default.div.withConfig({
                    componentId: "sc-1ekmeip-2"
                })(["& > :first-child{color:", ";}:hover > :first-child{text-decoration:none;color:", ";}"], u.ZP.black, u.ZP.re_normal),
                g = a.default.div.withConfig({
                    componentId: "sc-1ekmeip-3"
                })(["border:1px solid ", ";padding:", ";border-radius:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;:hover{text-decoration:none;}"], u.ZP.smoke_medium_light, (0, d.W)(6), m.Z.radiusLg)
        },
        2994: function(n, e, t) {
            t.d(e, {
                i: function() {
                    return d
                }
            });
            var r = t(19521),
                i = t(31155),
                a = t(48538),
                o = t(90762),
                d = r.default.section.withConfig({
                    componentId: "sc-4zlgvp-0"
                })(["display:inline-block;margin:", " 0;width:100%;@media (min-width:", "){display:block;margin:", " 0 ", ";}"], (0, i.W)(3), (0, a.px)(o.AV.md), (0, i.W)(1), (0, i.W)(6))
        },
        51121: function(n, e, t) {
            t.d(e, {
                R: function() {
                    return l
                }
            });
            var r = t(53817),
                i = t(41686),
                a = t(44855),
                o = t(11399),
                d = t(22036),
                s = t(85893),
                l = function(n) {
                    var e = n.icon,
                        t = n.headingText,
                        l = n.seeMoreLink,
                        c = n.seeMoreText,
                        u = n.onSeeMoreLinkClick;
                    return (0, s.jsxs)(d.OT, {
                        children: [(0, s.jsxs)(r.k, {
                            children: [e, (0, s.jsx)(d.Ef, {
                                children: (0, s.jsx)(i.xv, {
                                    variant: "h6",
                                    as: "h2",
                                    noMargin: !0,
                                    children: t
                                })
                            })]
                        }), (0, s.jsx)(o.k, {
                            condition: l,
                            children: (0, s.jsx)(d.gM, {
                                onClick: u,
                                children: (0, s.jsx)(a.r, {
                                    to: l,
                                    children: c
                                })
                            })
                        })]
                    })
                }
        },
        76803: function(n, e, t) {
            t.d(e, {
                k: function() {
                    return v
                }
            });
            var r = t(59499),
                i = t(90116),
                a = t(50029),
                o = t(87794),
                d = t.n(o),
                s = t(67294),
                l = t(5152),
                c = t.n(l),
                u = t(2185),
                m = t(7864),
                p = t(44194),
                f = t(85893);

            function h(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var g = c()((function() {
                return Promise.all([t.e(1314), t.e(29355), t.e(92389), t.e(91098), t.e(70017), t.e(32867)]).then(t.bind(t, 79540))
            }), {
                loadableGenerated: {
                    webpack: function() {
                        return [79540]
                    }
                }
            });

            function v(n, e) {
                var t = (0, u.I0)(),
                    r = (0, u.v9)(m.d),
                    i = (0, u.v9)(m.C),
                    o = null !== e && void 0 !== e ? e : !r;

                function s() {
                    return s = (0, a.Z)(d().mark((function e() {
                        var r, a, s, l = arguments;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (r = l.length, a = new Array(r), s = 0; s < r; s++) a[s] = l[s];
                                    if (!o) {
                                        e.next = 5;
                                        break
                                    }
                                    return t((0, p.Dv)()), t((0, p.ru)(n, a)), e.abrupt("return");
                                case 5:
                                    n.apply(void 0, a.concat([i]));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), s.apply(this, arguments)
                }
                return function() {
                    return s.apply(this, arguments)
                }
            }
            var y = (0, s.memo)((function() {
                var n = (0, u.I0)(),
                    e = (0, u.v9)((function(n) {
                        return n.page.loginWall
                    }));

                function t() {
                    n((0, p.Dv)())
                }
                var a = {
                    toggle: t,
                    onAuthSuccess: function(n) {
                        var r;
                        t(), null === e || void 0 === e || null === (r = e.successFunction) || void 0 === r || r.call.apply(r, [e].concat((0, i.Z)((null === e || void 0 === e ? void 0 : e.funcArgs) || []), [n]))
                    }
                };
                return null !== e && void 0 !== e && e.isOpen ? (0, f.jsx)(g, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? h(Object(t), !0).forEach((function(e) {
                            (0, r.Z)(n, e, t[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                        }))
                    }
                    return n
                }({}, a)) : null
            }));
            e.Z = y
        },
        2900: function(n, e, t) {
            t.d(e, {
                I2: function() {
                    return c
                },
                SI: function() {
                    return u
                },
                yC: function() {
                    return h
                }
            });
            var r = t(59499);

            function i(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function a(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(t), !0).forEach((function(e) {
                        (0, r.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var o = [1440, 500],
                d = "MOBILE",
                s = "DESKTOP";

            function l(n, e) {
                switch (e) {
                    case d:
                        return [{
                            viewport: [0, 0],
                            sizes: n
                        }, {
                            viewport: o,
                            sizes: []
                        }];
                    case s:
                        return [{
                            viewport: [0, 0],
                            sizes: []
                        }, {
                            viewport: o,
                            sizes: n
                        }];
                    default:
                        return []
                }
            }
            var c = {
                    dfpNetworkId: "58092247",
                    lazyLoad: {
                        fetchMarginPercent: 70,
                        renderMarginPercent: 130,
                        mobileScaling: 1
                    },
                    singleRequest: !1,
                    collapseEmptyDivs: !0
                },
                u = {
                    homePage: "home_page",
                    listingPage: "listingpage",
                    adviewPage: "adviewpage",
                    zeroResultPage: "0ResultPage"
                },
                m = {
                    hab_left: {
                        id: "div-gpt-ad-1553855112248-0",
                        name: "d_am_hab_gauche",
                        formats: [
                            [160, 600]
                        ],
                        sizeMapping: l([
                            [160, 600]
                        ], s)
                    },
                    hab_right: {
                        id: "div-gpt-ad-1553855187494-0",
                        name: "d_am_hab_droit",
                        formats: [
                            [160, 600]
                        ],
                        sizeMapping: l([
                            [160, 600]
                        ], s)
                    },
                    hab_top: {
                        id: "div-gpt-ad-1553855063512-0",
                        name: "d_am_hab_haut",
                        formats: [
                            [990, 90],
                            [990, 200],
                            [990, 250]
                        ],
                        sizeMapping: l([
                            [990, 90],
                            [990, 200],
                            [990, 250]
                        ], s)
                    },
                    d_am_ldr_top: {
                        id: "div-gpt-ad-1419595580591-1",
                        name: "d_am_ldr_top",
                        formats: [
                            [728, 90],
                            [970, 90],
                            [970, 250]
                        ],
                        sizeMapping: l([
                            [728, 90],
                            [970, 90],
                            [970, 250]
                        ], s),
                        platform: s,
                        withPlaceholder: !1
                    },
                    am_rm: {
                        id: "div-gpt-ad-1419595580591-0",
                        name: "d_am_rm",
                        formats: [
                            [1, 1]
                        ],
                        sizeMapping: l([
                            [1, 1]
                        ], s)
                    },
                    d_am_adx_btf: {
                        id: "div-gpt-ad-1554129747327-0",
                        name: "d_am_adx_btf",
                        formats: [
                            [670, 200],
                            [670, 210],
                            [468, 60],
                            [970, 90]
                        ],
                        sizeMapping: l([
                            [670, 200],
                            [670, 210],
                            [468, 60],
                            [970, 90]
                        ], s)
                    },
                    afs_noads: {
                        id: "afs_noads",
                        className: "afs_box_li",
                        style: {
                            width: "650px",
                            height: "auto"
                        }
                    },
                    afs_container: {
                        id: "afs-container",
                        className: "afs-container",
                        style: {
                            width: "650px",
                            height: "auto"
                        }
                    }
                },
                p = {
                    av_vr_right: {
                        id: "div-gpt-ad-1419595580591-9",
                        name: "d_am_av_vr_right",
                        formats: [
                            [160, 600],
                            [120, 600],
                            [240, 600],
                            [240, 400],
                            [300, 600],
                            [300, 250]
                        ],
                        sizeMapping: l([
                            [160, 600],
                            [120, 600],
                            [240, 600],
                            [240, 400],
                            [300, 600],
                            [300, 250]
                        ], s)
                    },
                    ms_ad_top: {
                        id: "div-gpt-ad-1584541823903-0",
                        name: "m_am_ms_ad_top",
                        formats: [
                            [320, 50],
                            [320, 100], "fluid"
                        ],
                        sizeMapping: l([
                            [320, 50], "fluid"
                        ], d),
                        platform: d,
                        defaultSize: [320, 100],
                        withPlaceholder: !0
                    },
                    adview_pave: {
                        id: "div-gpt-ad-1577352445264-0",
                        name: "m_ms_adview_pave",
                        formats: [
                            [300, 250]
                        ],
                        sizeMapping: l([
                            [300, 250]
                        ], d)
                    }
                },
                f = {
                    d_am_mrec_right: {
                        id: "div-gpt-ad-1419595580591-5",
                        name: "d_am_mrec_right",
                        formats: [
                            [250, 250],
                            [300, 250]
                        ],
                        sizeMapping: l([
                            [250, 250],
                            [300, 250]
                        ], s)
                    },
                    d_am_inner_list: {
                        id: "div-gpt-ad-1419595580591-7",
                        name: "d_am_inner_list",
                        formats: [
                            [665, 110],
                            [460, 50],
                            [468, 60],
                            [665, 90],
                            [665, 376], "fluid"
                        ],
                        sizeMapping: l([
                            [665, 110],
                            [460, 50],
                            [468, 60],
                            [665, 90],
                            [665, 376], "fluid"
                        ], s)
                    },
                    d_am_inner_list_1: {
                        id: "div-gpt-ad-1484759613970-0",
                        name: "d_am_inner_list_1",
                        formats: [
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ],
                        sizeMapping: l([
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ], s)
                    },
                    d_am_inner_list_2: {
                        id: "div-gpt-ad-1484759705063-0",
                        name: "d_am_inner_list_2",
                        formats: [
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ],
                        sizeMapping: l([
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ], s)
                    },
                    m_am_ms_list_top: {
                        id: "div-gpt-ad-1424367783235-0",
                        name: "m_am_ms_list_top",
                        formats: [
                            [320, 50],
                            [320, 100]
                        ],
                        sizeMapping: l([
                            [320, 50],
                            [320, 100]
                        ], d),
                        platform: d,
                        defaultSize: [320, 100],
                        withPlaceholder: !0
                    },
                    m_am_ms_list_in: {
                        id: "div-gpt-ad-1424367736701-0",
                        name: "m_am_ms_list_in",
                        formats: [
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ],
                        sizeMapping: l([
                            [200, 200],
                            [250, 250],
                            [300, 250],
                            [336, 280], "fluid"
                        ], d)
                    },
                    m_am_ms_list_in_two: {
                        id: "div-gpt-ad-1598548814561-0",
                        name: "m_am_ms_list_in_two",
                        formats: [
                            [250, 250],
                            [300, 250], "fluid"
                        ],
                        sizeMapping: l([
                            [250, 250],
                            [300, 250], "fluid"
                        ], d)
                    },
                    m_am_ms_list_in_three: {
                        id: "div-gpt-ad-1598548917263-0",
                        name: "m_am_ms_list_in_three",
                        formats: [
                            [250, 250],
                            [300, 250], "fluid"
                        ],
                        sizeMapping: l([
                            [250, 250],
                            [300, 250], "fluid"
                        ], d)
                    },
                    d_sls: {
                        id: "div-gpt-ad-1679068662694-0",
                        name: "d_sls",
                        formats: [
                            [973, 56]
                        ],
                        withPlaceholder: !0,
                        platform: s,
                        defaultSize: [973, 56]
                    },
                    ms_sls: {
                        id: "div-gpt-ad-1679068662694-1",
                        name: "ms_sls",
                        formats: [
                            [312, 50]
                        ],
                        withPlaceholder: !0,
                        platform: d,
                        defaultSize: [312, 50]
                    },
                    m_am_ms_native_listing: {
                        id: "div-gpt-ad-838482329034-0",
                        name: "m_am_ms_native_listing",
                        formats: ["fluid"],
                        sizeMapping: l(["fluid"], d)
                    },
                    d_am_native_listing: {
                        id: "div-gpt-ad-838482329034-1",
                        name: "d_am_native_listing",
                        formats: ["fluid"],
                        sizeMapping: l(["fluid"], s),
                        withPlaceholder: !0,
                        platform: d
                    }
                },
                h = a(a(a({}, m), p), f)
        },
        13810: function(n, e, t) {
            t.d(e, {
                L3: function() {
                    return d
                },
                ZE: function() {
                    return a
                },
                a4: function() {
                    return i
                },
                hL: function() {
                    return o
                },
                mc: function() {
                    return r
                }
            });
            var r = "SHOW_NUMBER_MODAL",
                i = "SHARE_AD_MODAL",
                a = "REPORT_ABUSE_MODAL",
                o = "LOGIN_PROMPT",
                d = "IMMONEUF_LEAD_FORM"
        },
        2750: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return y
                }
            });
            var r = t(17674),
                i = t(67294),
                a = t(97928),
                o = t(11399),
                d = t(25675),
                s = t.n(d),
                l = t(19521),
                c = t(96977),
                u = t(85893),
                m = function(n) {
                    var e = n.width,
                        t = n.height,
                        r = (0, i.useContext)(c.Q).__t,
                        a = .5 * t < 45 ? 45 : .5 * t;
                    return (0, u.jsx)(f, {
                        height: t,
                        width: e,
                        children: (0, u.jsx)(p, {
                            children: (0, u.jsx)(s(), {
                                src: r("av.advertising.avito-advertising-logo-url"),
                                width: a,
                                height: a,
                                layout: "fixed"
                            })
                        })
                    })
                },
                p = l.default.div.withConfig({
                    componentId: "sc-nspxff-0"
                })(["display:flex;flex-direction:column;justify-content:center;"]),
                f = l.default.div.withConfig({
                    componentId: "sc-nspxff-1"
                })(["height:", ";width:", ";display:flex;justify-content:center;background-color:#f7f6f6;"], (function(n) {
                    var e = n.height;
                    return "".concat(e, "px") || 0
                }), (function(n) {
                    var e = n.width;
                    return "".concat(e, "px") || 0
                })),
                h = t(2900),
                g = t(17343),
                v = l.default.div.withConfig({
                    componentId: "sc-1v62tp0-0"
                })(["display:flex;flex-direction:column;justify-content:center;"]),
                y = function(n) {
                    var e = n.name,
                        t = n.native,
                        d = (0, i.useRef)(null),
                        s = (0, i.useState)(!1),
                        l = s[0],
                        c = s[1],
                        p = h.yC[e] || {},
                        f = p.id,
                        y = p.formats,
                        b = p.name,
                        x = p.withPlaceholder,
                        w = p.defaultSize,
                        P = p.sizeMapping,
                        _ = w || [],
                        k = (0, r.Z)(_, 2),
                        j = k[0],
                        O = k[1];
                    return (0, i.useEffect)((function() {
                        var n = null;
                        return a.eX.getGoogletag().then((function(e) {
                                e.cmd.push((function() {
                                    var t = e.pubads().getSlots().find((function(n) {
                                        return n.getSlotElementId() === f
                                    }));
                                    t && e.destroySlots([t]), n = e.defineSlot("/".concat(h.I2.dfpNetworkId, "/").concat(b), y, f).setCollapseEmptyDiv(!1, !1).addService(e.pubads()).defineSizeMapping(function(n) {
                                        return [
                                            [n[1].viewport, n[1].sizes],
                                            [n[0].viewport, n[0].sizes]
                                        ]
                                    }(P)), d.current = n;
                                    e.pubads().addEventListener("slotRenderEnded", (function(e) {
                                        e.slot === n && e.isEmpty && c(!0)
                                    })), e.enableServices(), e.display(n)
                                }))
                            })),
                            function() {
                                d.current && a.eX.getGoogletag().then((function(n) {
                                    n.cmd.push((function() {
                                        n.destroySlots([d.current]), d.current = null
                                    }))
                                }))
                            }
                    }), [f, b, y, P]), t ? (0, u.jsx)(g.v, {
                        id: f,
                        isEmpty: l
                    }) : (0, u.jsxs)(g.J, {
                        isEmpty: l,
                        advHeight: O,
                        advWidth: j,
                        children: [(0, u.jsx)(o.k, {
                            condition: !l,
                            children: (0, u.jsx)(v, {
                                children: (0, u.jsx)("div", {
                                    id: f,
                                    style: {
                                        textAlign: "center",
                                        alignContent: "center"
                                    }
                                })
                            })
                        }), (0, u.jsx)(o.k, {
                            condition: l && x,
                            children: (0, u.jsx)(m, {
                                height: O,
                                width: j
                            })
                        })]
                    })
                }
        },
        17343: function(n, e, t) {
            t.d(e, {
                J: function() {
                    return i
                },
                v: function() {
                    return a
                }
            });
            var r = t(19521),
                i = r.default.div.withConfig({
                    componentId: "sc-16ymu21-0"
                })(["width:100%;display:flex;margin:8px auto;flex-direction:row;justify-content:center;", " max-width:", ";aspect-ratio:", ";overflow:hidden;", ""], (function(n) {
                    return n.isEmpty ? "display: none;" : ""
                }), (function(n) {
                    return "".concat(n.advWidth, "px")
                }), (function(n) {
                    return "".concat(n.advWidth, " / ").concat(n.advHeight)
                }), (function(n) {
                    return n.customStyle
                })),
                a = r.default.div.withConfig({
                    componentId: "sc-16ymu21-1"
                })(["", ";width:100%;display:flex;overflow:hidden;justify-content:center;align-items:center;"], (function(n) {
                    return n.isEmpty ? "display: none;" : ""
                }))
        },
        27274: function(n, e, t) {
            t.d(e, {
                S: function() {
                    return y
                }
            });
            var r = t(50029),
                i = t(59499),
                a = t(4730),
                o = t(87794),
                d = t.n(o),
                s = t(67294),
                l = t(44194),
                c = t(35538),
                u = t(96977),
                m = t(80925),
                p = t(58377),
                f = t(85893),
                h = ["lang"];

            function g(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function v(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(t), !0).forEach((function(e) {
                        (0, i.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var y = function(n) {
                var e = function(e) {
                    var t = e.lang,
                        r = (0, a.Z)(e, h);
                    (0, s.useEffect)((function() {
                        return (0, c.d8)(m.LANGUAGE_COOKIE_NAME, t)
                    }), []);
                    var i = (0, s.useMemo)((function() {
                        return v(v({}, u.p[t]), {}, {
                            lang: t
                        })
                    }), [t]);
                    return (0, f.jsx)(u.Q.Provider, {
                        value: i,
                        children: (0, f.jsx)(n, v({}, r))
                    })
                };
                return e.getInitialProps = function() {
                    var e = (0, r.Z)(d().mark((function e(t) {
                        var r, i, a, o, s;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.req, i = t.query, a = t.reduxStore, o = {}, s = (0, p.U)(r, i), !n.getInitialProps) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 6, n.getInitialProps(t);
                                case 6:
                                    o = e.sent;
                                case 7:
                                    return a.dispatch((0, l.m8)(s)), e.abrupt("return", v({
                                        lang: s
                                    }, o));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), e
            }
        },
        93500: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return g
                }
            });
            var r = t(50029),
                i = t(59499),
                a = t(4730),
                o = t(87794),
                d = t.n(o),
                s = t(19521),
                l = t(80925),
                c = t(58377),
                u = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = (0, c.U)(n.req, n.query);
                    return l.DIR_MAPPING[e]
                },
                m = t(85893),
                p = ["dir"];

            function f(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function h(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(t), !0).forEach((function(e) {
                        (0, i.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var g = function(n) {
                var e = function(e) {
                    var t = e.dir,
                        r = void 0 === t ? l.DEFAULT_DIRECTION : t,
                        i = (0, a.Z)(e, p);
                    return (0, m.jsx)(s.ThemeProvider, {
                        theme: {
                            dir: r
                        },
                        children: (0, m.jsx)(n, h({}, i))
                    })
                };
                return e.getInitialProps = function() {
                    var e = (0, r.Z)(d().mark((function e(t) {
                        var r;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = {}, !n.getInitialProps) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, n.getInitialProps(t);
                                case 4:
                                    r = e.sent;
                                case 5:
                                    return e.abrupt("return", h(h({}, r), {}, {
                                        dir: u(t)
                                    }));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), e
            }
        },
        51338: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return d
                }
            });
            var r = t(17674),
                i = t(67294),
                a = t(45697),
                o = t.n(a);

            function d() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = n.ref,
                    a = n.once,
                    o = void 0 === a || a,
                    d = n.offset,
                    s = void 0 === d ? "0px" : d,
                    l = (0, i.useState)(!1),
                    c = l[0],
                    u = l[1],
                    m = (0, i.useRef)();
                return (0, i.useEffect)((function() {
                    var n, i = (e || m || {}).current;
                    if (i) return (window.IntersectionObserver ? Promise.resolve() : Promise.resolve().then(t.t.bind(t, 66337, 23))).then((function() {
                            n = new window.IntersectionObserver((function(e) {
                                var t = (0, r.Z)(e, 1)[0];
                                u(t.isIntersecting), t.isIntersecting && o && n && n.unobserve(i)
                            }), {
                                rootMargin: s
                            }), i && n.observe(i)
                        })),
                        function() {
                            n && n.unobserve(i)
                        }
                }), [s, o, e]), [c, m]
            }
            d.displayName = "HookUseOnScreen", d.propTypes = {
                offset: o().string,
                once: o().bool,
                ref: o().element
            }
        }
    }
]);