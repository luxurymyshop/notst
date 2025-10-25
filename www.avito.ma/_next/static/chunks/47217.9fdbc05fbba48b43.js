"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47217], {
        47217: function(e, s, t) {
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
                        g = {
                            fill: o,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: g,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "CloseTitleID"
                    }, l.createElement("title", {
                        id: "CloseTitleID"
                    }, a || "Close Icon"), l.createElement("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
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