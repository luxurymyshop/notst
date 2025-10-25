"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [33106], {
        33106: function(e, t, s) {
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
                        "aria-labelledby": "CustomerServiceTitleID"
                    }, r.createElement("title", {
                        id: "CustomerServiceTitleID"
                    }, a || "CustomerService Icon"), r.createElement("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                    }), r.createElement("path", {
                        d: "M21 8a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 106 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.963 7.963 0 01-4.24-1.215z"
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