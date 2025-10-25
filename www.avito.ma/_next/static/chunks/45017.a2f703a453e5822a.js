"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45017], {
        45017: function(e, l, s) {
            s.r(l);
            var t = s(67294),
                r = s(45697),
                o = s.n(r),
                i = (0, t.memo)((function(e) {
                    var l = e.size,
                        s = e.strokeColor,
                        r = e.strokeWidth,
                        o = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: o,
                            stroke: s,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return t.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: l,
                        width: l,
                        style: c,
                        viewBox: "0 0 10 9",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "CrownFillTitleID"
                    }, t.createElement("title", {
                        id: "CrownFillTitleID"
                    }, a || "CrownFill Icon"), t.createElement("path", {
                        d: "M5.593 1.7a.85.85 0 10-.838.001l-.004.008c-.28.581-.666 1.414-1.264 1.727-.49.257-1.196.128-1.72.032a.638.638 0 10-.752.672l1.253 3.237c.19.491.663.815 1.19.815h3.43c.526 0 .999-.324 1.19-.815L9.33 4.14a.638.638 0 10-.752-.691c-.535.07-1.226.158-1.72-.1-.586-.307-.979-1.082-1.266-1.649z"
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
            }, l.default = i
        }
    }
]);