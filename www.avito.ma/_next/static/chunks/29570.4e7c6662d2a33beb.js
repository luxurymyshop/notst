"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29570], {
        29570: function(e, l, t) {
            t.r(l);
            var s = t(67294),
                r = t(45697),
                i = t.n(r),
                o = (0, s.memo)((function(e) {
                    var l = e.size,
                        t = e.strokeColor,
                        r = e.strokeWidth,
                        i = e.fillColor,
                        o = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: i,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return s.createElement("svg", {
                        className: [o, n].filter(Boolean).join(" "),
                        height: l,
                        width: l,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "StarFillTitleID"
                    }, s.createElement("title", {
                        id: "StarFillTitleID"
                    }, a || "StarFill Icon"), s.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }), s.createElement("path", {
                        d: "M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"
                    }))
                }));
            o.defaultProps = {
                strokeColor: "currentColor",
                strokeWidth: 0,
                fillColor: "currentColor",
                size: 32,
                svgClass: "sui-SVGicon",
                className: "",
                svgTitle: null
            }, o.propTypes = {
                strokeColor: i().string,
                strokeWidth: i().oneOfType([i().string, i().number]),
                fillColor: i().string,
                size: i().oneOfType([i().string, i().number]),
                svgClass: i().string,
                className: i().string,
                svgTitle: i().string
            }, l.default = o
        }
    }
]);