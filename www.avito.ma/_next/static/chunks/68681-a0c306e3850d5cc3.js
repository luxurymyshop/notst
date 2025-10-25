"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68681], {
        53817: function(t, e, n) {
            n.d(e, {
                k: function() {
                    return S
                },
                i: function() {
                    return O
                }
            });
            var o = n(45697),
                r = n.n(o),
                i = n(19521),
                l = n(44547),
                s = (0, l.By)({
                    alignItems: !0,
                    alignContent: !0,
                    justifyItems: !0,
                    justifyContent: !0,
                    flexWrap: !0,
                    flexDirection: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    flexBasis: !0,
                    justifySelf: !0,
                    alignSelf: !0,
                    order: !0
                }),
                a = {
                    fontFamily: {
                        property: "fontFamily",
                        scale: "fonts"
                    },
                    fontSize: {
                        property: "fontSize",
                        scale: "fontSizes",
                        defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
                    },
                    fontWeight: {
                        property: "fontWeight",
                        scale: "fontWeights"
                    },
                    lineHeight: {
                        property: "lineHeight",
                        scale: "lineHeights"
                    },
                    letterSpacing: {
                        property: "letterSpacing",
                        scale: "letterSpacings"
                    },
                    textAlign: !0,
                    fontStyle: !0
                },
                u = (0, l.By)(a),
                f = n(36014),
                d = n(72146),
                c = n(48538),
                p = n(90762);

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }
            var g = ["as", "className", "theme"];

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        v(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function v(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== h(t) || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(t, e || "default");
                            if ("object" !== h(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === h(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function m(t, e) {
                if (null == t) return {};
                var n, o, r = function(t, e) {
                    if (null == t) return {};
                    var n, o, r = {},
                        i = Object.keys(t);
                    for (o = 0; o < i.length; o++) n = i[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
                    return r
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (o = 0; o < i.length; o++) n = i[o], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
                }
                return r
            }
            var S = i.default.div.attrs((function(t) {
                    var e = t.as,
                        n = t.className,
                        o = t.theme,
                        r = m(t, g);
                    return {
                        theme: y(y({}, o), {}, {
                            breakpoints: p.K_
                        }),
                        as: e || "div",
                        className: n,
                        "data-testid": r["data-testid"]
                    }
                })).withConfig({
                    componentId: "sc-ibbrkc-0"
                })(["", " display:", ";flex-direction:", ";", " ", " ", " ", " ", " ", " ", " ", ""], (function(t) {
                    return t.fullWidth && "width: 100%;"
                }), (function(t) {
                    return t.inline ? "inline-flex" : "flex"
                }), (function(t) {
                    var e = t.direction;
                    return null !== e && void 0 !== e ? e : null
                }), (function(t) {
                    var e = t.boxSpacing,
                        n = t.direction;
                    return w({
                        boxSpacing: e,
                        direction: n
                    })
                }), u, s, c.n9, c.o3, c.e6, f.ZP, d.Z),
                w = function(t) {
                    var e = t.boxSpacing,
                        n = t.direction;
                    switch (e) {
                        case "center":
                            return "align-items: center;justify-content: center;";
                        case "center-x":
                            if (n && n.startsWith("row")) return "justify-content: center;";
                            if (n.startsWith("column")) return "align-items: center;";
                            break;
                        case "center-y":
                            if (n && n.startsWith("column")) return "justify-content: center;";
                            if (n && n.startsWith("row")) return "align-items: center;";
                            break;
                        default:
                            return null
                    }
                    return null
                };
            S.displayName = "Flex";
            var O = {
                children: r().node,
                bgcolor: r().string,
                margin: r().number,
                padding: r().number,
                direction: r().string,
                spacing: r().string,
                as: r().string
            };
            S.propTypes = O
        },
        6762: function(t, e, n) {
            n.d(e, {
                Z: function() {
                    return S
                }
            });
            var o = n(67294),
                r = n(45697),
                i = n.n(r),
                l = n(19521),
                s = n(83393),
                a = n(31155),
                u = l.default.div.withConfig({
                    componentId: "sc-xokd7i-0"
                })(["position:relative;display:inline-flex;align-items:center;vertical-align:bottom;"]),
                f = l.default.span.withConfig({
                    componentId: "sc-xokd7i-1"
                })(["visibility:hidden;text-wrap:nowrap;font-size:13px;background-color:", ";color:", ";text-align:center;border-radius:", ";padding:6px ", ";position:absolute;z-index:1;opacity:0;transition:opacity 0.3s;", ""], (function(t) {
                    return t.bgColor
                }), (function(t) {
                    return t.textColor
                }), s.Z.radius, (0, a.W)(2), (function(t) {
                    return function(t, e) {
                        switch (t) {
                            case "top":
                                return (0, l.css)(["top:", ";left:50%;transform:translateX(-50%);"], e || "-34px");
                            case "bottom":
                                return (0, l.css)(["bottom:", ";left:50%;transform:translateX(-50%);"], e || "-34px");
                            case "left":
                                return (0, l.css)(["top:50%;right:100%;transform:translateY(-50%);margin-right:10px;"]);
                            case "right":
                                return (0, l.css)(["top:50%;left:100%;transform:translateY(-50%);margin-left:10px;"]);
                            default:
                                return null
                        }
                    }(t.position, t.offset)
                })),
                d = l.default.span.withConfig({
                    componentId: "sc-xokd7i-2"
                })(["display:block;height:13px;width:13px;background-color:inherit;border:inherit;position:absolute;clip-path:polygon(0% 0%,100% 100%,0% 100%);border-radius:0 0 0 4px;", ""], (function(t) {
                    return function(t) {
                        switch (t) {
                            case "top":
                                return (0, l.css)(["bottom:-6px;transform:rotate(-45deg);left:calc(50% - 7px);"]);
                            case "bottom":
                                return (0, l.css)(["top:-6px;transform:rotate(135deg);left:calc(50% - 7px);"]);
                            case "left":
                                return (0, l.css)(["right:-6px;top:15px;transform:translateY(-50%) rotate(-135deg);"]);
                            case "right":
                                return (0, l.css)(["left:-6px;top:15px;transform:translateY(-50%) rotate(45deg);"]);
                            default:
                                return null
                        }
                    }(t.position)
                })),
                c = l.default.span.withConfig({
                    componentId: "sc-xokd7i-3"
                })(["cursor:pointer;display:inline-flex;position:relative;&:hover + ", "{visibility:visible;opacity:1;}"], f),
                p = n(19235),
                h = n(46774);

            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return v(t)
                }(t) || function(t) {
                    if ("undefined" !== typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || y(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var o, r, i, l, s = [],
                            a = !0,
                            u = !1;
                        try {
                            if (i = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                a = !1
                            } else
                                for (; !(a = (o = i.call(n)).done) && (s.push(o.value), s.length !== e); a = !0);
                        } catch (f) {
                            u = !0, r = f
                        } finally {
                            try {
                                if (!a && null != n.return && (l = n.return(), Object(l) !== l)) return
                            } finally {
                                if (u) throw r
                            }
                        }
                        return s
                    }
                }(t, e) || y(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(t, e) {
                if (t) {
                    if ("string" === typeof t) return v(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o
            }
            var m = function(t) {
                var e = t.text,
                    n = t.children,
                    r = t.position,
                    i = t.offset,
                    l = t.bgColor,
                    s = t.textColor,
                    a = (0, o.useRef)(null),
                    h = (0, o.useRef)(null),
                    g = (0, o.useRef)(null),
                    y = b((0, o.useState)(r), 2),
                    v = y[0],
                    m = y[1];
                return (0, o.useEffect)((function() {
                    var t = function() {
                        var t, e, n = (null === (t = document) || void 0 === t || null === (e = t.documentElement) || void 0 === e ? void 0 : e.dir) || "ltr";
                        m(function(t, e) {
                            if ("rtl" === t) {
                                if ("right" === e) return "left";
                                if ("left" === e) return "right"
                            }
                            return e
                        }(n, r))
                    };
                    t();
                    var e = new MutationObserver(t);
                    return e.observe(document.documentElement, {
                            attributes: !0,
                            attributeFilter: ["dir"]
                        }),
                        function() {
                            return e.disconnect()
                        }
                }), [r]), (0, o.useEffect)((function() {
                    if ("undefined" !== typeof window) {
                        var t = function() {
                            var t = a.current,
                                e = g.current,
                                n = h.current;
                            if (e && t) {
                                var o = e.getBoundingClientRect(),
                                    r = t.getBoundingClientRect(),
                                    i = window.innerWidth || document.documentElement.clientWidth,
                                    l = o.left < 0,
                                    s = o.right > i;
                                "bottom" !== v && "top" !== v || (l && (e.style.left = "0px", n.style.left = "".concat(r.width / 2, "px"), e.style.transform = "none"), s && (e.style.right = "0", e.style.left = "unset", n.style.right = "".concat(r.width / 2, "px"), e.style.transform = "none"))
                            }
                        };
                        return t(), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }
                }), [v]), o.createElement(u, null, o.createElement(c, {
                    ref: a
                }, n), o.createElement(f, {
                    position: v,
                    offset: i,
                    bgColor: "currentColor" === l ? "currentColor" : p.ZP[l],
                    textColor: "currentColor" === s ? "currentColor" : p.ZP[s],
                    ref: g
                }, e, o.createElement(d, {
                    position: v,
                    ref: h
                })))
            };
            m.propTypes = {
                text: i().string,
                children: i().node,
                position: i().oneOf(h.Z),
                offset: i().string,
                bgColor: i().oneOf([].concat(g(Object.keys(p.ZP)), ["currentColor"])),
                textColor: i().oneOf([].concat(g(Object.keys(p.ZP)), ["currentColor"]))
            }, m.defaultProps = {
                position: "top",
                bgColor: "black",
                textColor: "white"
            };
            var S = m
        },
        72146: function(t, e, n) {
            var o = n(44547),
                r = {
                    width: {
                        property: "width",
                        scale: "sizes",
                        transform: function(t, e) {
                            return (0, o.U2)(e, t, ! function(t) {
                                return "number" === typeof t && !isNaN(t)
                            }(t) || t > 1 ? t : 100 * t + "%")
                        }
                    },
                    height: {
                        property: "height",
                        scale: "sizes"
                    },
                    minWidth: {
                        property: "minWidth",
                        scale: "sizes"
                    },
                    minHeight: {
                        property: "minHeight",
                        scale: "sizes"
                    },
                    maxWidth: {
                        property: "maxWidth",
                        scale: "sizes"
                    },
                    maxHeight: {
                        property: "maxHeight",
                        scale: "sizes"
                    },
                    size: {
                        properties: ["width", "height"],
                        scale: "sizes"
                    },
                    overflow: !0,
                    overflowX: !0,
                    overflowY: !0,
                    display: !0,
                    verticalAlign: !0
                },
                i = (0, o.By)(r);
            e.Z = i
        },
        17187: function(t) {
            var e, n = "object" === typeof Reflect ? Reflect : null,
                o = n && "function" === typeof n.apply ? n.apply : function(t, e, n) {
                    return Function.prototype.apply.call(t, e, n)
                };
            e = n && "function" === typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var r = Number.isNaN || function(t) {
                return t !== t
            };

            function i() {
                i.init.call(this)
            }
            t.exports = i, t.exports.once = function(t, e) {
                return new Promise((function(n, o) {
                    function r(n) {
                        t.removeListener(e, i), o(n)
                    }

                    function i() {
                        "function" === typeof t.removeListener && t.removeListener("error", r), n([].slice.call(arguments))
                    }
                    g(t, e, i, {
                        once: !0
                    }), "error" !== e && function(t, e, n) {
                        "function" === typeof t.on && g(t, "error", e, n)
                    }(t, r, {
                        once: !0
                    })
                }))
            }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
            var l = 10;

            function s(t) {
                if ("function" !== typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function a(t) {
                return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
            }

            function u(t, e, n, o) {
                var r, i, l, u;
                if (s(n), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), i = t._events), l = i[e]), void 0 === l) l = i[e] = n, ++t._eventsCount;
                else if ("function" === typeof l ? l = i[e] = o ? [n, l] : [l, n] : o ? l.unshift(n) : l.push(n), (r = a(t)) > 0 && l.length > r && !l.warned) {
                    l.warned = !0;
                    var f = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    f.name = "MaxListenersExceededWarning", f.emitter = t, f.type = e, f.count = l.length, u = f, console && console.warn && console.warn(u)
                }
                return t
            }

            function f() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function d(t, e, n) {
                var o = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    },
                    r = f.bind(o);
                return r.listener = n, o.wrapFn = r, r
            }

            function c(t, e, n) {
                var o = t._events;
                if (void 0 === o) return [];
                var r = o[e];
                return void 0 === r ? [] : "function" === typeof r ? n ? [r.listener || r] : [r] : n ? function(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                    return e
                }(r) : h(r, r.length)
            }

            function p(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" === typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function h(t, e) {
                for (var n = new Array(e), o = 0; o < e; ++o) n[o] = t[o];
                return n
            }

            function g(t, e, n, o) {
                if ("function" === typeof t.on) o.once ? t.once(e, n) : t.on(e, n);
                else {
                    if ("function" !== typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                    t.addEventListener(e, (function r(i) {
                        o.once && t.removeEventListener(e, r), n(i)
                    }))
                }
            }
            Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    if ("number" !== typeof t || t < 0 || r(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    l = t
                }
            }), i.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, i.prototype.setMaxListeners = function(t) {
                if ("number" !== typeof t || t < 0 || r(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, i.prototype.getMaxListeners = function() {
                return a(this)
            }, i.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                var r = "error" === t,
                    i = this._events;
                if (void 0 !== i) r = r && void 0 === i.error;
                else if (!r) return !1;
                if (r) {
                    var l;
                    if (e.length > 0 && (l = e[0]), l instanceof Error) throw l;
                    var s = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
                    throw s.context = l, s
                }
                var a = i[t];
                if (void 0 === a) return !1;
                if ("function" === typeof a) o(a, this, e);
                else {
                    var u = a.length,
                        f = h(a, u);
                    for (n = 0; n < u; ++n) o(f[n], this, e)
                }
                return !0
            }, i.prototype.addListener = function(t, e) {
                return u(this, t, e, !1)
            }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(t, e) {
                return u(this, t, e, !0)
            }, i.prototype.once = function(t, e) {
                return s(e), this.on(t, d(this, t, e)), this
            }, i.prototype.prependOnceListener = function(t, e) {
                return s(e), this.prependListener(t, d(this, t, e)), this
            }, i.prototype.removeListener = function(t, e) {
                var n, o, r, i, l;
                if (s(e), void 0 === (o = this._events)) return this;
                if (void 0 === (n = o[t])) return this;
                if (n === e || n.listener === e) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" !== typeof n) {
                    for (r = -1, i = n.length - 1; i >= 0; i--)
                        if (n[i] === e || n[i].listener === e) {
                            l = n[i].listener, r = i;
                            break
                        }
                    if (r < 0) return this;
                    0 === r ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(n, r), 1 === n.length && (o[t] = n[0]), void 0 !== o.removeListener && this.emit("removeListener", t, l || e)
                }
                return this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(t) {
                var e, n, o;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                if (0 === arguments.length) {
                    var r, i = Object.keys(n);
                    for (o = 0; o < i.length; ++o) "removeListener" !== (r = i[o]) && this.removeAllListeners(r);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(e = n[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (o = e.length - 1; o >= 0; o--) this.removeListener(t, e[o]);
                return this
            }, i.prototype.listeners = function(t) {
                return c(this, t, !0)
            }, i.prototype.rawListeners = function(t) {
                return c(this, t, !1)
            }, i.listenerCount = function(t, e) {
                return "function" === typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
            }, i.prototype.listenerCount = p, i.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            }
        },
        82885: function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.AdSlot = void 0;
            var o = s(n(67294)),
                r = s(n(45697)),
                i = s(n(78269)),
                l = n(36097);

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function a(t) {
                return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function u() {
                return u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                    }
                    return t
                }, u.apply(this, arguments)
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), o.forEach((function(e) {
                        g(t, e, n[e])
                    }))
                }
                return t
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function c(t) {
                return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, c(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function g(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var b = 0,
                y = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = function(t, e) {
                            return !e || "object" !== a(e) && "function" !== typeof e ? h(t) : e
                        }(this, c(e).call(this, t))).doRegisterSlot = n.doRegisterSlot.bind(h(h(n))), n.generateSlotId = n.generateSlotId.bind(h(h(n))), n.getSlotId = n.getSlotId.bind(h(h(n))), n.mapContextToAdSlotProps = n.mapContextToAdSlotProps.bind(h(h(n))), n.slotShouldRefresh = n.slotShouldRefresh.bind(h(h(n))), n.slotRenderEnded = n.slotRenderEnded.bind(h(h(n))), n.slotRegisterCallback = n.slotRegisterCallback.bind(h(h(n))), n.slotIsViewable = n.slotIsViewable.bind(h(h(n))), n.slotVisibilityChanged = n.slotVisibilityChanged.bind(h(h(n))), n.getClasses = n.getClasses.bind(h(h(n))), n.state = {
                            slotId: n.props.slotId || null,
                            className: n.props.className || ""
                        }, n.adElementRef = o.default.createRef ? o.default.createRef() : function(t) {
                            n.adElementRef = t
                        }, n
                    }
                    var n, r, l;
                    return function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && p(t, e)
                    }(e, t), n = e, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            void 0 !== this.context && this.context.newSlotCallback && this.context.newSlotCallback(), this.registerSlot()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.unregisterSlot()
                        }
                    }, {
                        key: "getSlotId",
                        value: function() {
                            return this.props.slotId || this.state.slotId
                        }
                    }, {
                        key: "getClasses",
                        value: function() {
                            var t = this.state.className.split(" ");
                            return t.push("adunitContainer"), t
                        }
                    }, {
                        key: "generateSlotId",
                        value: function() {
                            return "adSlot-".concat(b++)
                        }
                    }, {
                        key: "mapContextToAdSlotProps",
                        value: function() {
                            var t = this.context,
                                e = {};
                            return void 0 !== t.dfpNetworkId && (e.dfpNetworkId = t.dfpNetworkId), void 0 !== t.dfpAdUnit && (e.adUnit = t.dfpAdUnit), void 0 !== t.dfpSizeMapping && (e.sizeMapping = t.dfpSizeMapping), void 0 !== t.dfpTargetingArguments && (e.targetingArguments = t.dfpTargetingArguments), e
                        }
                    }, {
                        key: "doRegisterSlot",
                        value: function() {
                            i.default.registerSlot(f({}, this.mapContextToAdSlotProps(), this.props, this.state, {
                                slotShouldRefresh: this.slotShouldRefresh
                            })), !0 === this.props.fetchNow && i.default.load(this.getSlotId()), i.default.attachSlotRenderEnded(this.slotRenderEnded), i.default.attachSlotIsViewable(this.slotIsViewable), i.default.attachSlotVisibilityChanged(this.slotVisibilityChanged), this.slotRegisterCallback()
                        }
                    }, {
                        key: "registerSlot",
                        value: function() {
                            null === this.state.slotId ? this.setState({
                                slotId: this.generateSlotId()
                            }, this.doRegisterSlot) : this.doRegisterSlot()
                        }
                    }, {
                        key: "unregisterSlot",
                        value: function() {
                            i.default.unregisterSlot(f({}, this.mapContextToAdSlotProps(), this.props, this.state)), i.default.detachSlotRenderEnded(this.slotRenderEnded), i.default.detachSlotIsViewable(this.slotIsViewable), i.default.detachSlotVisibilityChanged(this.slotVisibilityChanged)
                        }
                    }, {
                        key: "slotRenderEnded",
                        value: function(t) {
                            if (t.slotId === this.getSlotId() && void 0 !== this.props.onSlotRender) {
                                var e = f({}, t, {
                                    adElementRef: this.adElementRef
                                });
                                this.props.onSlotRender(e)
                            }
                        }
                    }, {
                        key: "slotRegisterCallback",
                        value: function() {
                            "function" === typeof this.props.onSlotRegister && this.props.onSlotRegister({
                                slotId: this.getSlotId(),
                                sizes: this.props.sizes,
                                slotCount: b,
                                adElementRef: this.adElementRef
                            })
                        }
                    }, {
                        key: "slotIsViewable",
                        value: function(t) {
                            t.slotId === this.getSlotId() && void 0 !== this.props.onSlotIsViewable && this.props.onSlotIsViewable(t)
                        }
                    }, {
                        key: "slotVisibilityChanged",
                        value: function(t) {
                            t.slotId === this.getSlotId() && void 0 !== this.props.onSlotVisibilityChanged && this.props.onSlotVisibilityChanged(t)
                        }
                    }, {
                        key: "slotShouldRefresh",
                        value: function() {
                            var t = !0;
                            return void 0 !== this.props.shouldRefresh && (t = this.props.shouldRefresh(f({}, this.mapContextToAdSlotProps(), this.props, {
                                slotId: this.getSlotId()
                            }))), t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.state.slotId,
                                e = {
                                    className: "adBox"
                                };
                            return null !== t && (e.id = t), o.default.createElement("div", {
                                className: this.getClasses().join(" ").trim()
                            }, o.default.createElement("div", u({
                                ref: this.adElementRef
                            }, e)))
                        }
                    }]) && d(n.prototype, r), l && d(n, l), e
                }(o.default.Component);
            e.AdSlot = y, g(y, "propTypes", {
                dfpNetworkId: r.default.string,
                adUnit: r.default.string,
                sizes: r.default.arrayOf(r.default.oneOfType([r.default.arrayOf(r.default.number), r.default.string])),
                renderOutOfThePage: r.default.bool,
                sizeMapping: r.default.arrayOf(r.default.object),
                fetchNow: r.default.bool,
                adSenseAttributes: r.default.object,
                targetingArguments: r.default.object,
                onSlotRender: r.default.func,
                onSlotRegister: r.default.func,
                onSlotIsViewable: r.default.func,
                onSlotVisibilityChanged: r.default.func,
                shouldRefresh: r.default.func,
                slotId: r.default.string,
                className: r.default.string
            }), g(y, "defaultProps", {
                fetchNow: !1
            }), null === l.Context ? y.contextTypes = {
                dfpNetworkId: r.default.string,
                dfpAdUnit: r.default.string,
                dfpSizeMapping: r.default.arrayOf(r.default.object),
                dfpTargetingArguments: r.default.object,
                newSlotCallback: r.default.func
            } : y.contextType = l.Context;
            var v = y;
            e.default = v
        },
        36097: function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.Context = void 0;
            var o = l(n(67294)),
                r = l(n(45697)),
                i = l(n(78269));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s(t) {
                return s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var p = o.default.createContext ? o.default.createContext({
                dfpNetworkId: null,
                dfpAdUnit: null,
                dfpSizeMapping: null,
                dfpTargetingArguments: null,
                newSlotCallback: null
            }) : null;
            e.Context = p;
            var h = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = function(t, e) {
                        return !e || "object" !== s(e) && "function" !== typeof e ? d(t) : e
                    }(this, u(e).call(this, t))).loadAdsIfPossible = n.loadAdsIfPossible.bind(d(d(n))), n.newSlotCallback = n.newSlotCallback.bind(d(d(n))), n.applyConfigs = n.applyConfigs.bind(d(d(n))), n.shouldReloadConfig = n.shouldReloadConfig.bind(d(d(n))), n.attachLoadCallback = n.attachLoadCallback.bind(d(d(n))), n.getContextValue = n.getContextValue.bind(d(d(n))), n.loadAlreadyCalled = !1, n.loadCallbackAttached = !1, n.shouldReloadAds = !1, n.totalSlots = 0, n.contextValue = {}, null === p && (n.getChildContext = function() {
                        return n.getContextValue()
                    }), n
                }
                var n, r, l;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e)
                }(e, t), n = e, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        this.applyConfigs(), this.props.autoLoad && !this.loadAdsIfPossible() && this.attachLoadCallback()
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(t) {
                        return this.shouldReloadAds = this.shouldReloadConfig(t), t.children !== this.props.children || !(!t.autoLoad || this.props.autoLoad) || this.shouldReloadAds
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.applyConfigs(), this.props.autoLoad && (this.loadAlreadyCalled ? this.shouldReloadAds && i.default.reload() : this.loadAdsIfPossible() || this.attachLoadCallback()), this.shouldReloadAds = !1
                    }
                }, {
                    key: "getContextValue",
                    value: function() {
                        var t = this.props,
                            e = t.dfpNetworkId,
                            n = t.adUnit,
                            o = t.sizeMapping,
                            r = t.targetingArguments,
                            i = this.contextValue,
                            l = i.dfpNetworkId,
                            s = i.adUnit,
                            a = i.sizeMapping,
                            u = i.targetingArguments;
                        return e === l && n === s && o === a && r === u || (this.contextValue = {
                            dfpNetworkId: e,
                            dfpAdUnit: n,
                            dfpSizeMapping: o,
                            dfpTargetingArguments: r,
                            newSlotCallback: this.newSlotCallback
                        }), this.contextValue
                    }
                }, {
                    key: "applyConfigs",
                    value: function() {
                        i.default.configurePersonalizedAds(this.props.personalizedAds), i.default.configureCookieOption(this.props.cookieOption), i.default.configureSingleRequest(this.props.singleRequest), i.default.configureDisableInitialLoad(this.props.disableInitialLoad), i.default.configureLazyLoad(!!this.props.lazyLoad, "boolean" === typeof this.props.lazyLoad ? null : this.props.lazyLoad), i.default.setAdSenseAttributes(this.props.adSenseAttributes), i.default.setCollapseEmptyDivs(this.props.collapseEmptyDivs), i.default.configureLimitedAds(this.props.limitedAds)
                    }
                }, {
                    key: "attachLoadCallback",
                    value: function() {
                        return !1 === this.loadCallbackAttached && (i.default.on("slotRegistered", this.loadAdsIfPossible), this.loadCallbackAttached = !0, !0)
                    }
                }, {
                    key: "newSlotCallback",
                    value: function() {
                        this.totalSlots++
                    }
                }, {
                    key: "loadAdsIfPossible",
                    value: function() {
                        var t = !1;
                        return Object.keys(i.default.getRegisteredSlots()).length >= this.totalSlots && (i.default.removeListener("slotRegistered", this.loadAdsIfPossible), i.default.load(), this.loadAlreadyCalled = !0, this.loadCallbackAttached = !1, t = !0), t
                    }
                }, {
                    key: "shouldReloadConfig",
                    value: function(t) {
                        var e = t.autoReload || this.props.autoReload;
                        if ((this.props.autoLoad || t.autoLoad) && "object" === s(e)) {
                            var n = Object.keys(e);
                            for (var o in n) {
                                var r = n[o];
                                if (!0 === e[r] && this.props[r] !== t[r]) return !0
                            }
                        }
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props.children;
                        return null === p ? t : o.default.createElement(p.Provider, {
                            value: this.getContextValue()
                        }, t)
                    }
                }]) && a(n.prototype, r), l && a(n, l), e
            }(o.default.Component);
            e.default = h, c(h, "propTypes", {
                children: r.default.oneOfType([r.default.element, r.default.array]).isRequired,
                autoLoad: r.default.bool,
                autoReload: r.default.shape({
                    dfpNetworkId: r.default.bool,
                    personalizedAds: r.default.bool,
                    cookieOption: r.default.bool,
                    singleRequest: r.default.bool,
                    disableInitialLoad: r.default.bool,
                    adUnit: r.default.bool,
                    sizeMapping: r.default.bool,
                    adSenseAttributes: r.default.bool,
                    targetingArguments: r.default.bool,
                    collapseEmptyDivs: r.default.bool,
                    lazyLoad: r.default.bool
                }),
                dfpNetworkId: r.default.string.isRequired,
                personalizedAds: r.default.bool,
                cookieOption: r.default.bool,
                singleRequest: r.default.bool,
                disableInitialLoad: r.default.bool,
                adUnit: r.default.string,
                sizeMapping: r.default.arrayOf(r.default.object),
                adSenseAttributes: r.default.object,
                targetingArguments: r.default.object,
                collapseEmptyDivs: r.default.oneOfType([r.default.bool, r.default.object]),
                adSenseAttrs: r.default.object,
                lazyLoad: r.default.oneOfType([r.default.bool, r.default.shape({
                    fetchMarginPercent: r.default.number,
                    renderMarginPercent: r.default.number,
                    mobileScaling: r.default.number
                })]),
                limitedAds: r.default.bool
            }), c(h, "defaultProps", {
                autoLoad: !0,
                autoReload: {
                    dfpNetworkId: !1,
                    personalizedAds: !1,
                    cookieOption: !1,
                    singleRequest: !1,
                    disableInitialLoad: !1,
                    adUnit: !1,
                    sizeMapping: !1,
                    adSenseAttributes: !1,
                    targetingArguments: !1,
                    collapseEmptyDivs: !1,
                    lazyLoad: !1
                },
                personalizedAds: !0,
                cookieOption: !0,
                singleRequest: !0,
                disableInitialLoad: !1,
                collapseEmptyDivs: null,
                lazyLoad: !1,
                limitedAds: !1
            }), null === p && (h.childContextTypes = {
                dfpNetworkId: r.default.string,
                dfpAdUnit: r.default.string,
                dfpSizeMapping: r.default.arrayOf(r.default.object),
                dfpTargetingArguments: r.default.object,
                newSlotCallback: r.default.func
            })
        },
        97928: function(t, e, n) {
            e.sV = e.Un = e.eX = void 0;
            var o = l(n(78269)),
                r = l(n(82885)),
                i = l(n(36097));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var s = o.default;
            e.eX = s;
            var a = r.default;
            e.Un = a;
            var u = i.default;
            e.sV = u
        },
        78269: function(t, e, n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = n(17187),
                r = function(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                o.get || o.set ? Object.defineProperty(e, n, o) : e[n] = t[n]
                            }
                    return e.default = t, e
                }(n(42134));

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    })))), o.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function l(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function s(t) {
                return s = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }
            var a = null,
                u = null,
                f = !0,
                d = !1,
                c = !1,
                p = null,
                h = !0,
                g = !0,
                b = {},
                y = !1,
                v = {},
                m = {},
                S = !1,
                w = Object.assign((new o.EventEmitter).setMaxListeners(0), {
                    singleRequestIsEnabled: function() {
                        return f
                    },
                    configureSingleRequest: function(t) {
                        f = !!t
                    },
                    disableInitialLoadIsEnabled: function() {
                        return d
                    },
                    configureDisableInitialLoad: function(t) {
                        d = !!t
                    },
                    configureLazyLoad: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = null;
                        null !== e && "object" === s(e) && (n = i({}, e)), c = !!t, p = n
                    },
                    lazyLoadIsEnabled: function() {
                        return c
                    },
                    limitedAdsIsEnabled: function() {
                        return S
                    },
                    configureLimitedAds: function(t) {
                        S = !!t
                    },
                    getLazyLoadConfig: function() {
                        return p
                    },
                    getAdSenseAttribute: function(t) {
                        return m[t]
                    },
                    configurePersonalizedAds: function(t) {
                        h = t
                    },
                    configureCookieOption: function(t) {
                        g = t
                    },
                    personalizedAdsEnabled: function() {
                        return h
                    },
                    cookiesEnabled: function() {
                        return g
                    },
                    setAdSenseAttribute: function(t, e) {
                        this.setAdSenseAttributes(l({}, t, e))
                    },
                    getAdSenseAttributes: function() {
                        return i({}, m)
                    },
                    setAdSenseAttributes: function(t) {
                        Object.assign(m, t), !0 === y && this.getGoogletag().then((function(t) {
                            t.cmd.push((function() {
                                var e = t.pubads();
                                Object.keys(m).forEach((function(t) {
                                    e.set(t, v[t])
                                }))
                            }))
                        }))
                    },
                    setTargetingArguments: function(t) {
                        Object.assign(v, t), Object.keys(b).forEach((function(e) {
                            b[e].targetingArguments = t
                        })), !0 === y && this.getGoogletag().then((function(t) {
                            t.cmd.push((function() {
                                var e = t.pubads();
                                Object.keys(v).forEach((function(t) {
                                    e && e.setTargeting(t, v[t])
                                }))
                            }))
                        }))
                    },
                    getTargetingArguments: function() {
                        return i({}, v)
                    },
                    getSlotProperty: function(t, e) {
                        var n = this.getRegisteredSlots()[t],
                            o = null;
                        return void 0 !== n && (o = n[e] || o), o
                    },
                    getSlotTargetingArguments: function(t) {
                        var e = this.getSlotProperty(t, "targetingArguments");
                        return e ? i({}, e) : null
                    },
                    getSlotAdSenseAttributes: function(t) {
                        var e = this.getSlotProperty(t, "adSenseAttributes");
                        return e ? i({}, e) : null
                    },
                    init: function() {
                        var t = this;
                        !1 === y && (y = !0, this.getGoogletag().then((function(e) {
                            e.cmd.push((function() {
                                var n = e.pubads();
                                n.addEventListener("slotRenderEnded", (function(e) {
                                    var n = e.slot.getSlotElementId();
                                    t.emit("slotRenderEnded", {
                                        slotId: n,
                                        event: e
                                    })
                                })), n.addEventListener("impressionViewable", (function(e) {
                                    var n = e.slot.getSlotElementId();
                                    t.emit("impressionViewable", {
                                        slotId: n,
                                        event: e
                                    })
                                })), n.addEventListener("slotVisibilityChanged", (function(e) {
                                    var n = e.slot.getSlotElementId();
                                    t.emit("slotVisibilityChanged", {
                                        slotId: n,
                                        event: e
                                    })
                                })), n.setRequestNonPersonalizedAds(t.personalizedAdsEnabled() ? 0 : 1), n.setCookieOptions(t.cookiesEnabled() ? 0 : 1)
                            }))
                        })))
                    },
                    getGoogletag: function() {
                        return null === u && (u = r.loadGPTScript(S)), u
                    },
                    setCollapseEmptyDivs: function(t) {
                        this.collapseEmptyDivs = t
                    },
                    load: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        a = null === a ? this.doLoad.apply(this, n) : a.then((function() {
                            return t.doLoad.apply(t, n)
                        }))
                    },
                    doLoad: function() {
                        this.init();
                        for (var t = {}, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return (t = (t = n.length > 0 ? n.filter((function(t) {
                            return Object.prototype.hasOwnProperty.call(b, t)
                        })) : Object.keys(b)).filter((function(t) {
                            return !b[t].loading && !b[t].gptSlot
                        }))).forEach((function(t) {
                            b[t].loading = !0
                        })), this.gptLoadAds(t)
                    },
                    gptLoadAds: function(t) {
                        var e = this;
                        return new Promise((function(n) {
                            e.getGoogletag().then((function(o) {
                                e.configureInitialOptions(o), t.forEach((function(t) {
                                    b[t].loading = !1, o.cmd.push((function() {
                                        var n, r = b[t],
                                            i = "".concat(r.dfpNetworkId, "/").concat(r.adUnit);
                                        if (null !== (n = !0 === r.renderOutOfThePage ? o.defineOutOfPageSlot(i, t) : o.defineSlot(i, r.sizes, t))) {
                                            r.gptSlot = n;
                                            var l = e.getSlotTargetingArguments(t);
                                            null !== l && Object.keys(l).forEach((function(t) {
                                                r && r.gptSlot && r.gptSlot.setTargeting(t, l[t])
                                            }));
                                            var s = e.getSlotAdSenseAttributes(t);
                                            if (null !== s && Object.keys(s).forEach((function(t) {
                                                    r.gptSlot.set(t, s[t])
                                                })), r.gptSlot.addService(o.pubads()), r.sizeMapping) {
                                                var a = o.sizeMapping();
                                                r.sizeMapping.forEach((function(t) {
                                                    a = a.addSize(t.viewport, t.sizes)
                                                })), r.gptSlot.defineSizeMapping(a.build())
                                            }
                                        }
                                    }))
                                })), e.configureOptions(o), o.cmd.push((function() {
                                    o.enableServices(), t.forEach((function(t) {
                                        o.display(t)
                                    })), n()
                                }))
                            }))
                        }))
                    },
                    configureInitialOptions: function(t) {
                        var e = this;
                        t.cmd.push((function() {
                            e.disableInitialLoadIsEnabled() && t.pubads().disableInitialLoad()
                        }))
                    },
                    configureOptions: function(t) {
                        var e = this;
                        t.cmd.push((function() {
                            var n = t.pubads();
                            n.setRequestNonPersonalizedAds(e.personalizedAdsEnabled() ? 0 : 1), n.setCookieOptions(e.cookiesEnabled() ? 0 : 1);
                            var o = e.getTargetingArguments();
                            Object.keys(o).forEach((function(t) {
                                n && n.setTargeting(t, o[t])
                            }));
                            var r = e.getAdSenseAttributes();
                            if (Object.keys(r).forEach((function(t) {
                                    n.set(t, r[t])
                                })), e.lazyLoadIsEnabled()) {
                                var i = e.getLazyLoadConfig();
                                i ? n.enableLazyLoad(i) : n.enableLazyLoad()
                            }
                            e.singleRequestIsEnabled() && n.enableSingleRequest(), !0 !== e.collapseEmptyDivs && !1 !== e.collapseEmptyDivs || n.collapseEmptyDivs(e.collapseEmptyDivs)
                        }))
                    },
                    getRefreshableSlots: function() {
                        for (var t = {}, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        if (0 === n.length) {
                            var r = Object.keys(b).map((function(t) {
                                return b[t]
                            }));
                            return r.reduce((function(e, n) {
                                return !0 === n.slotShouldRefresh() && (t[n.slotId] = n), t
                            }), t)
                        }
                        return n.reduce((function(e, n) {
                            var o = b[n];
                            return "undefined" !== typeof o && (t[n] = o), t
                        }), t)
                    },
                    refresh: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        null === a ? this.load() : a.then((function() {
                            t.gptRefreshAds(Object.keys(t.getRefreshableSlots.apply(t, n)))
                        }))
                    },
                    gptRefreshAds: function(t) {
                        var e = this;
                        return this.getGoogletag().then((function(n) {
                            e.configureOptions(n), n.cmd.push((function() {
                                var e = n.pubads(),
                                    o = t.map((function(t) {
                                        return b[t].slotId
                                    }));
                                e.refresh(o)
                            }))
                        }))
                    },
                    reload: function() {
                        var t = this;
                        return this.destroyGPTSlots.apply(this, arguments).then((function() {
                            return t.load()
                        }))
                    },
                    destroyGPTSlots: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        return 0 === n.length && (n = Object.keys(b)), new Promise((function(e) {
                            var o = [];
                            for (var r in n) {
                                var i = n[r],
                                    l = b[i];
                                o.push(l)
                            }
                            t.getGoogletag().then((function(t) {
                                t.cmd.push((function() {
                                    if (!0 === y)
                                        if (n.length > 0) {
                                            for (var r in o) {
                                                var i = o[r];
                                                o.push(i.gptSlot), delete i.gptSlot
                                            }
                                            t.destroySlots(o)
                                        } else t.destroySlots();
                                    e(n)
                                }))
                            }))
                        }))
                    },
                    registerSlot: function(t) {
                        var e = this,
                            n = t.slotId,
                            o = t.dfpNetworkId,
                            r = t.adUnit,
                            i = t.sizes,
                            l = t.renderOutOfThePage,
                            s = t.sizeMapping,
                            u = t.adSenseAttributes,
                            f = t.targetingArguments,
                            d = t.slotShouldRefresh,
                            c = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        Object.prototype.hasOwnProperty.call(b, n) || (b[n] = {
                            slotId: n,
                            sizes: i,
                            renderOutOfThePage: l,
                            dfpNetworkId: o,
                            adUnit: r,
                            adSenseAttributes: u,
                            targetingArguments: f,
                            sizeMapping: s,
                            slotShouldRefresh: d,
                            loading: !1
                        }, this.emit("slotRegistered", {
                            slotId: n
                        }), !0 === c && null !== a && (a = a.catch().then((function() {
                            var t = b[n];
                            if ("undefined" !== typeof t) {
                                var o = t.loading,
                                    r = t.gptSlot;
                                !1 !== o || r || e.load(n)
                            }
                        }))))
                    },
                    unregisterSlot: function(t) {
                        var e = t.slotId;
                        this.destroyGPTSlots(e), delete b[e]
                    },
                    getRegisteredSlots: function() {
                        return b
                    },
                    attachSlotRenderEnded: function(t) {
                        this.on("slotRenderEnded", t)
                    },
                    detachSlotRenderEnded: function(t) {
                        this.removeListener("slotRenderEnded", t)
                    },
                    attachSlotVisibilityChanged: function(t) {
                        this.on("slotVisibilityChanged", t)
                    },
                    detachSlotVisibilityChanged: function(t) {
                        this.removeListener("slotVisibilityChanged", t)
                    },
                    attachSlotIsViewable: function(t) {
                        this.on("impressionViewable", t)
                    },
                    detachSlotIsViewable: function(t) {
                        this.removeListener("impressionViewable", t)
                    }
                }),
                O = w;
            e.default = O
        },
        42134: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.loadGPTScript = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return new Promise((function(e, n) {
                    r(e, n, t)
                }))
            };
            var n = "securepubads.g.doubleclick.net",
                o = "pagead2.googlesyndication.com";

            function r(t, e, r) {
                window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [];
                var i = document.createElement("script");
                i.src = "".concat(document.location.protocol, "//").concat(r ? o : n, "/tag/js/gpt.js"), i.async = !0, i.type = "text/javascript", i.onerror = function(t) {
                    e(t)
                }, i.onload = function() {
                    t(window.googletag)
                }, document.getElementsByTagName("head")[0].appendChild(i)
            }
        }
    }
]);