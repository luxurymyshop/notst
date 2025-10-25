"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94384], {
        94384: function(e, s, t) {
            t.r(s);
            var l = t(67294),
                r = t(45697),
                i = t.n(r),
                n = (0, l.memo)((function(e) {
                    var s = e.size,
                        t = e.strokeColor,
                        r = e.strokeWidth,
                        i = e.fillColor,
                        n = e.svgClass,
                        o = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: i,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [n, o].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "LinkedinTitleID"
                    }, l.createElement("title", {
                        id: "LinkedinTitleID"
                    }, a || "Linkedin Icon"), l.createElement("path", {
                        d: "M20 20h-3.6v-6c0-.9-1.1-1.7-2-1.7s-1.6.8-1.6 1.7v6H9.3V9.3h3.6v1.8c.6-1 2.1-1.6 3.1-1.6 2.2 0 4 1.8 4 4V20M7.6 20H4V9.3h3.6V20M5.8 4c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8S4 6.8 4 5.8 4.8 4 5.8 4z"
                    }))
                }));
            n.defaultProps = {
                strokeColor: "currentColor",
                strokeWidth: 0,
                fillColor: "currentColor",
                size: 32,
                svgClass: "sui-SVGicon",
                className: "",
                svgTitle: null
            }, n.propTypes = {
                strokeColor: i().string,
                strokeWidth: i().oneOfType([i().string, i().number]),
                fillColor: i().string,
                size: i().oneOfType([i().string, i().number]),
                svgClass: i().string,
                className: i().string,
                svgTitle: i().string
            }, s.default = n
        }
    }
]);