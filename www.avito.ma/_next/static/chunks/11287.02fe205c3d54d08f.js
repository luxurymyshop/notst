"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11287], {
        11287: function(e, l, t) {
            t.r(l);
            var s = t(67294),
                r = t(45697),
                i = t.n(r),
                a = (0, s.memo)((function(e) {
                    var l = e.size,
                        t = e.strokeColor,
                        r = e.strokeWidth,
                        i = e.fillColor,
                        a = e.svgClass,
                        n = e.className,
                        o = e.svgTitle,
                        c = {
                            fill: i,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return s.createElement("svg", {
                        className: [a, n].filter(Boolean).join(" "),
                        height: l,
                        width: l,
                        style: c,
                        viewBox: "0 0 9 9",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "ClockOutlineTitleID"
                    }, s.createElement("title", {
                        id: "ClockOutlineTitleID"
                    }, o || "ClockOutline Icon"), s.createElement("g", {
                        clipPath: "url(#clip0_442_9017)"
                    }, s.createElement("path", {
                        d: "M8.293 4.364a4.147 4.147 0 11-8.276-.376l.688.062a3.453 3.453 0 00.569 2.234A3.456 3.456 0 103.833.924L3.77.233a4.151 4.151 0 014.523 4.13zM1.957 1.691l-.438-.534a4.19 4.19 0 00-.58.581l.534.437a3.46 3.46 0 01.484-.484zm1.202-.639L2.962.391a4.141 4.141 0 00-.76.31l.324.61c.202-.107.414-.193.633-.259zM1.093 2.746l-.61-.325a4.151 4.151 0 00-.31.76l.662.197c.065-.219.151-.431.258-.633zm2.708-.455V3.77a.691.691 0 00-.25.25H2.42v.691h1.13a.689.689 0 10.941-.94V2.29h-.69z"
                    })), s.createElement("defs", null, s.createElement("clipPath", {
                        id: "clip0_442_9017"
                    }, s.createElement("path", {
                        d: "M0 0h8.293v8.293H0z",
                        transform: "translate(0 .218)"
                    }))))
                }));
            a.defaultProps = {
                strokeColor: "currentColor",
                strokeWidth: 0,
                fillColor: "currentColor",
                size: 32,
                svgClass: "sui-SVGicon",
                className: "",
                svgTitle: null
            }, a.propTypes = {
                strokeColor: i().string,
                strokeWidth: i().oneOfType([i().string, i().number]),
                fillColor: i().string,
                size: i().oneOfType([i().string, i().number]),
                svgClass: i().string,
                className: i().string,
                svgTitle: i().string
            }, l.default = a
        }
    }
]);