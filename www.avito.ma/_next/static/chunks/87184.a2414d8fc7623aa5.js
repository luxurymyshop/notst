"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [87184], {
        87184: function(e, t, s) {
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
                        c = {
                            fill: o,
                            stroke: s,
                            strokeWidth: l,
                            pointerEvents: "none"
                        };
                    return r.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: t,
                        width: t,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "ArrowLeftTitleID"
                    }, r.createElement("title", {
                        id: "ArrowLeftTitleID"
                    }, a || "ArrowLeft Icon"), r.createElement("path", {
                        d: "M18.973 10.77A1.03 1.03 0 0120 11.795a1.03 1.03 0 01-1.027 1.027H7.503l5.001 5.02a1.023 1.023 0 11-1.447 1.449L4.3 12.515c-.4-.4-.4-1.048 0-1.448L11.067 4.3c.4-.4 1.047-.4 1.448 0 .4.4.4 1.058 0 1.458L7.504 10.77h11.47z"
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