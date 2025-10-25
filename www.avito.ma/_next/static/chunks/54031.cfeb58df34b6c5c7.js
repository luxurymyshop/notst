"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54031], {
        54031: function(e, l, t) {
            t.r(l);
            var o = t(67294),
                r = t(45697),
                s = t.n(r),
                i = (0, o.memo)((function(e) {
                    var l = e.size,
                        t = e.strokeColor,
                        r = e.strokeWidth,
                        s = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        c = e.svgTitle,
                        a = {
                            fill: s,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return o.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: l,
                        width: l,
                        style: a,
                        viewBox: "0 0 18 18",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "AddNoteTitleID"
                    }, o.createElement("title", {
                        id: "AddNoteTitleID"
                    }, c || "AddNote Icon"), o.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M1.5 5.667c.46 0 .833.373.833.833v9.167H11.5a.833.833 0 010 1.666H2.333c-.92 0-1.666-.746-1.666-1.666V6.5c0-.46.373-.833.833-.833z",
                        clipRule: "evenodd"
                    }), o.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M15.667 2.333h-10v10h10v-10zm-10-1.666h10c.92 0 1.666.746 1.666 1.666v10c0 .92-.746 1.667-1.666 1.667h-10C4.747 14 4 13.254 4 12.333v-10c0-.92.746-1.666 1.667-1.666z",
                        clipRule: "evenodd"
                    }), o.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M10.667 4c.46 0 .833.373.833.833v5a.833.833 0 01-1.667 0v-5c0-.46.373-.833.834-.833z",
                        clipRule: "evenodd"
                    }), o.createElement("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M7.333 7.333c0-.46.374-.833.834-.833h5a.833.833 0 110 1.667h-5a.833.833 0 01-.834-.834z",
                        clipRule: "evenodd"
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
                strokeColor: s().string,
                strokeWidth: s().oneOfType([s().string, s().number]),
                fillColor: s().string,
                size: s().oneOfType([s().string, s().number]),
                svgClass: s().string,
                className: s().string,
                svgTitle: s().string
            }, l.default = i
        }
    }
]);