"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4573], {
        4573: function(e, s, t) {
            t.r(s);
            var r = t(67294),
                l = t(45697),
                o = t.n(l),
                i = (0, r.memo)((function(e) {
                    var s = e.size,
                        t = e.strokeColor,
                        l = e.strokeWidth,
                        o = e.fillColor,
                        i = e.svgClass,
                        n = e.className,
                        a = e.svgTitle,
                        c = {
                            fill: o,
                            stroke: t,
                            strokeWidth: l,
                            pointerEvents: "none"
                        };
                    return r.createElement("svg", {
                        className: [i, n].filter(Boolean).join(" "),
                        height: s,
                        width: s,
                        style: c,
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "CameraTitleID"
                    }, r.createElement("title", {
                        id: "CameraTitleID"
                    }, a || "Camera Icon"), r.createElement("path", {
                        d: "M9.3 4h5.4l1.647 1.778H19.2c.99 0 1.8.8 1.8 1.778v10.666C21 19.2 20.19 20 19.2 20H4.8c-.99 0-1.8-.8-1.8-1.778V7.556c0-.978.81-1.778 1.8-1.778h2.853L9.3 4zM12 17.333c2.484 0 4.5-1.99 4.5-4.444 0-2.453-2.016-4.445-4.5-4.445s-4.5 1.992-4.5 4.445c0 2.453 2.016 4.444 4.5 4.444zm0-1.777c1.491 0 2.7-1.194 2.7-2.667 0-1.473-1.209-2.667-2.7-2.667s-2.7 1.194-2.7 2.667c0 1.473 1.209 2.667 2.7 2.667z"
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