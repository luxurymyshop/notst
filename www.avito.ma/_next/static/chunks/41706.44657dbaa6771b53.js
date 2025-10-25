"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [41706], {
        41706: function(e, t, s) {
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
                        "aria-labelledby": "ArrowRightTitleID"
                    }, r.createElement("title", {
                        id: "ArrowRightTitleID"
                    }, a || "ArrowRight Icon"), r.createElement("path", {
                        d: "M5.027 12.823A1.03 1.03 0 014 11.796a1.03 1.03 0 011.027-1.027h11.47l-5.001-5.02A1.023 1.023 0 1112.943 4.3l6.757 6.777c.4.4.4 1.047 0 1.448l-6.767 6.767c-.4.4-1.047.4-1.448 0-.4-.4-.4-1.058 0-1.459l5.011-5.01H5.026z"
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