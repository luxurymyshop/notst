"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11775], {
        11775: function(e, s, t) {
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
                        c = {
                            fill: o,
                            stroke: t,
                            strokeWidth: r,
                            pointerEvents: "none"
                        };
                    return l.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "VideoTitleID"
                    }, l.createElement("title", {
                        id: "VideoTitleID"
                    }, a || "Video Icon"), l.createElement("path", {
                        d: "M21.357 7.9c-.4-.247-.908-.29-1.35-.113L17 8.987V8c0-.53-.226-1.04-.628-1.414A2.223 2.223 0 0014.857 6H4.143c-.569 0-1.113.21-1.515.586A1.935 1.935 0 002 8v8c0 .53.226 1.04.628 1.414A2.22 2.22 0 004.143 18h10.714c.569 0 1.114-.21 1.515-.586.402-.375.628-.884.628-1.414v-.987l3.014 1.2c.438.183.945.142 1.343-.106.401-.247.643-.665.643-1.114v-6a1.314 1.314 0 00-.643-1.093zM15.571 16a.645.645 0 01-.209.471.741.741 0 01-.505.195H4.143a.741.741 0 01-.505-.195.645.645 0 01-.21-.471V8c0-.177.076-.347.21-.472a.741.741 0 01.505-.195h10.714c.19 0 .371.07.505.195s.21.295.21.472v8zM17 13.56v-3.12l3.571-1.433v6L17 13.56z"
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