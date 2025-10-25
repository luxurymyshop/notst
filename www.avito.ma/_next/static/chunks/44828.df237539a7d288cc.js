"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [44828], {
        44828: function(e, s, t) {
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
                        h = {
                            fill: o,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: h,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "TelephonesTitleID"
                    }, l.createElement("title", {
                        id: "TelephonesTitleID"
                    }, a || "Telephones Icon"), l.createElement("path", {
                        d: "M20 2a2 2 0 00-2-2H8a2 2 0 00-2 2v20a2 2 0 002 2h10a2 2 0 002-2V2zm-8.5 0h3a.5.5 0 010 1h-3a.5.5 0 010-1zM13 22a1 1 0 110-2 1 1 0 010 2zm5-3H8V4.976h10V19z"
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