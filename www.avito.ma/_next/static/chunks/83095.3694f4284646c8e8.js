"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [83095], {
        83095: function(e, s, t) {
            t.r(s);
            var l = t(67294),
                o = t(45697),
                r = t.n(o),
                i = (0, l.memo)((function(e) {
                    var s = e.size,
                        t = e.strokeColor,
                        o = e.strokeWidth,
                        r = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: r,
                            stroke: t,
                            strokeWidth: o,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "FacebookTitleID"
                    }, l.createElement("title", {
                        id: "FacebookTitleID"
                    }, a || "Facebook Icon"), l.createElement("path", {
                        d: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                    }))
                }));
            i.defaultProps = {
                strokeColor: "currentColor",
                strokeWidth: 0,
                fillColor: "currentColor",
                size: 32,
                svgClass: "sui-SVGicon",
                className: "",
                svgTitle: null
            }, i.propTypes = {
                strokeColor: r().string,
                strokeWidth: r().oneOfType([r().string, r().number]),
                fillColor: r().string,
                size: r().oneOfType([r().string, r().number]),
                svgClass: r().string,
                className: r().string,
                svgTitle: r().string
            }, s.default = i
        }
    }
]);