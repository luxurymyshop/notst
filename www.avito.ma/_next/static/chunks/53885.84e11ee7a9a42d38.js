"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [53885], {
        53885: function(e, t, s) {
            s.r(t);
            var r = s(67294),
                l = s(45697),
                i = s.n(l),
                o = (0, r.memo)((function(e) {
                    var t = e.size,
                        s = e.strokeColor,
                        l = e.strokeWidth,
                        i = e.fillColor,
                        o = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: i,
                            stroke: s,
                            strokeWidth: l,
                            pointerEvents: "none"
                        };
                    return r.createElement("svg", {
                        className: [o, n].filter(Boolean).join(" "),
                        height: t,
                        width: t,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "TwitterTitleID"
                    }, r.createElement("title", {
                        id: "TwitterTitleID"
                    }, a || "Twitter Icon"), r.createElement("path", {
                        d: "M20 7c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.7-2.1.8-.6-.7-1.5-1-2.4-1-1.8 0-3.3 1.5-3.3 3.3 0 .3 0 .5.1.7-2.6-.1-5.1-1.4-6.7-3.4-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H4c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.4 1.3-1 1.7-1.7z"
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