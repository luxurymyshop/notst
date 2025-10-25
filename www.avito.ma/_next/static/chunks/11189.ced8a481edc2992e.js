"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [11189], {
        11189: function(e, l, t) {
            t.r(l);
            var r = t(67294),
                s = t(45697),
                a = t.n(s),
                i = (0, r.memo)((function(e) {
                    var l = e.size,
                        t = e.strokeColor,
                        s = e.strokeWidth,
                        a = e.fillColor,
                        i = e.svgClass,
                        o = e.className,
                        n = e.svgTitle,
                        h = {
                            fill: a,
                            stroke: t,
                            strokeWidth: s,
                            pointerEvents: "none"
                        };
                    return r.createElement("svg", {
                        className: [i, o].filter(Boolean).join(" "),
                        height: l,
                        width: l,
                        style: h,
                        viewBox: "0 0 8 7",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-labelledby": "DeliveryCarTitleID"
                    }, r.createElement("title", {
                        id: "DeliveryCarTitleID"
                    }, n || "DeliveryCar Icon"), r.createElement("path", {
                        d: "M5.93 1.377a.44.44 0 00-.337-.161h-.175l.044-.25A.454.454 0 005.374.63.47.47 0 005.05.482H1.56a.308.308 0 00-.308.25.293.293 0 00.293.337h1.07a.44.44 0 01.426.513L2.69 3.606a.44.44 0 01-.425.366H1.106a.293.293 0 00-.293.235l-.117.63a.41.41 0 00.103.338.41.41 0 00.307.146h.367a1.026 1.026 0 001.965 0h.674a1.026 1.026 0 001.965 0h.294a.47.47 0 00.454-.396l.323-1.876L5.93 1.377zM2.457 5.468a.44.44 0 110-.88.44.44 0 010 .88zm2.639 0a.44.44 0 110-.88.44.44 0 010 .88zm.015-2.493l.205-1.173h.19l.866 1.173H5.11z"
                    }), r.createElement("path", {
                        d: "M.99 1.95h1.466a.293.293 0 000-.587H.99a.293.293 0 000 .587zm1.612.585a.293.293 0 00-.293-.293H1.136a.293.293 0 000 .587h1.173a.293.293 0 00.293-.294zm-1.319.587a.293.293 0 000 .587h.88a.293.293 0 100-.587h-.88z"
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
                strokeColor: a().string,
                strokeWidth: a().oneOfType([a().string, a().number]),
                fillColor: a().string,
                size: a().oneOfType([a().string, a().number]),
                svgClass: a().string,
                className: a().string,
                svgTitle: a().string
            }, l.default = i
        }
    }
]);