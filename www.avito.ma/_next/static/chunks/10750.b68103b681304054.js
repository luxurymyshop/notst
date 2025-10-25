"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [10750], {
        10750: function(e, s, t) {
            t.r(s);
            var l = t(67294),
                r = t(45697),
                o = t.n(r),
                i = (0, l.memo)((function(e) {
                    var s = e.size,
                        t = e.strokeColor,
                        r = e.strokeWidth,
                        o = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        u = {
                            fill: o,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: u,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "YoutubeTitleID"
                    }, l.createElement("title", {
                        id: "YoutubeTitleID"
                    }, a || "Youtube Icon"), l.createElement("path", {
                        d: "M19.7 8.2c-.2-.7-.7-1.2-1.4-1.4-1.3-.4-6.3-.4-6.3-.4s-5 0-6.3.3c-.6.2-1.2.8-1.4 1.5C4 9.4 4 12 4 12s0 2.6.3 3.8c.2.7.7 1.2 1.4 1.4 1.3.4 6.3.4 6.3.4s5 0 6.3-.3c.7-.2 1.2-.7 1.4-1.4.3-1.3.3-3.9.3-3.9s0-2.6-.3-3.8zm-9.3 6.2V9.6l4.2 2.4-4.2 2.4z"
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
                strokeColor: o().string,
                strokeWidth: o().oneOfType([o().string, o().number]),
                fillColor: o().string,
                size: o().oneOfType([o().string, o().number]),
                svgClass: o().string,
                className: o().string,
                svgTitle: o().string
            }, s.default = i
        }
    }
]);