"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82906], {
        82906: function(e, t, s) {
            s.r(t);
            var l = s(67294),
                o = s(45697),
                r = s.n(o),
                i = (0, l.memo)((function(e) {
                    var t = e.size,
                        s = e.strokeColor,
                        o = e.strokeWidth,
                        r = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: r,
                            stroke: s,
                            strokeWidth: o,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: t,
                        width: t,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "LocationTitleID"
                    }, l.createElement("title", {
                        id: "LocationTitleID"
                    }, a || "Location Icon"), l.createElement("path", {
                        d: "M14.004 21.99a.87.87 0 00.142.01c.45 0 .865-.29 1.032-.739l6.688-17.648a1.218 1.218 0 00-.245-1.268 1.072 1.072 0 00-1.201-.261L3.7 9.144c-.47.199-.756.71-.69 1.239.064.534.463.953.966 1.019l8.057 1.063 1.008 8.504c.062.532.459.953.963 1.021z"
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
            }, t.default = i
        }
    }
]);