"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99508], {
        99508: function(e, t, s) {
            s.r(t);
            var l = s(67294),
                r = s(45697),
                i = s.n(r),
                o = (0, l.memo)((function(e) {
                    var t = e.size,
                        s = e.strokeColor,
                        r = e.strokeWidth,
                        i = e.fillColor,
                        o = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: i,
                            stroke: s,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [o, n].filter(Boolean).join(" "),
                        height: t,
                        width: t,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "Search2LineTitleID"
                    }, l.createElement("title", {
                        id: "Search2LineTitleID"
                    }, a || "Search2Line Icon"), l.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }), l.createElement("path", {
                        d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"
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
            }, t.default = o
        }
    }
]);