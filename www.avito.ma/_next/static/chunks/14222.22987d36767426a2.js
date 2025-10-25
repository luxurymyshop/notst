"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14222], {
        14222: function(e, t, s) {
            s.r(t);
            var r = s(67294),
                l = s(45697),
                o = s.n(l),
                i = (0, r.memo)((function(e) {
                    var t = e.size,
                        s = e.strokeColor,
                        l = e.strokeWidth,
                        o = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        g = {
                            fill: o,
                            stroke: s,
                            strokeWidth: l,
                            pointerEvents: "none"
                        };
                    return r.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: t,
                        width: t,
                        style: g,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "ChevronRightTitleID"
                    }, r.createElement("title", {
                        id: "ChevronRightTitleID"
                    }, a || "ChevronRight Icon"), r.createElement("path", {
                        d: "M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"
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
            }, t.default = i
        }
    }
]);