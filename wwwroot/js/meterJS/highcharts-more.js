/*
 Highcharts JS v9.0.1 (2021-02-15)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(e) {
    "object" === typeof module && module.exports ? (e["default"] = e, module.exports = e) : "function" === typeof define && define.amd ? define("highcharts/highcharts-more", ["highcharts"], function(z) {
        e(z);
        e.Highcharts = z;
        return e
    }) : e("undefined" !== typeof Highcharts ? Highcharts : void 0)
})(function(e) {
    function z(e, c, h, g) {
        e.hasOwnProperty(c) || (e[c] = g.apply(null, h))
    }
    e = e ? e._modules : {};
    z(e, "Extensions/Pane.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Pointer.js"], e["Core/Utilities.js"],
        e["Mixins/CenteredSeries.js"]
    ], function(e, c, h, g, a, u) {
        function d(b, a, k) {
            return Math.sqrt(Math.pow(b - k[0], 2) + Math.pow(a - k[1], 2)) <= k[2] / 2
        }
        var r = a.addEvent,
            n = a.extend,
            x = a.merge,
            b = a.pick,
            k = a.splat;
        e.prototype.collectionsWithUpdate.push("pane");
        a = function() {
            function b(b, a) {
                this.options = this.chart = this.center = this.background = void 0;
                this.coll = "pane";
                this.defaultOptions = {
                    center: ["50%", "50%"],
                    size: "85%",
                    innerSize: "0%",
                    startAngle: 0
                };
                this.defaultBackgroundOptions = {
                    shape: "circle",
                    borderWidth: 1,
                    borderColor: h.neutralColor20,
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, h.backgroundColor],
                            [1, h.neutralColor10]
                        ]
                    },
                    from: -Number.MAX_VALUE,
                    innerRadius: 0,
                    to: Number.MAX_VALUE,
                    outerRadius: "105%"
                };
                this.init(b, a)
            }
            b.prototype.init = function(b, a) {
                this.chart = a;
                this.background = [];
                a.pane.push(this);
                this.setOptions(b)
            };
            b.prototype.setOptions = function(b) {
                this.options = x(this.defaultOptions, this.chart.angular ? {
                    background: {}
                } : void 0, b)
            };
            b.prototype.render = function() {
                var b = this.options,
                    a = this.options.background,
                    l = this.chart.renderer;
                this.group || (this.group = l.g("pane-group").attr({
                    zIndex: b.zIndex || 0
                }).add());
                this.updateCenter();
                if (a)
                    for (a = k(a), b = Math.max(a.length, this.background.length || 0), l = 0; l < b; l++) a[l] && this.axis ? this.renderBackground(x(this.defaultBackgroundOptions, a[l]), l) : this.background[l] && (this.background[l] = this.background[l].destroy(), this.background.splice(l, 1))
            };
            b.prototype.renderBackground = function(b, a) {
                var k = "animate",
                    l = {
                        "class": "highcharts-pane " + (b.className || "")
                    };
                //this.chart.styledMode || n(l, {
                //    fill: b.backgroundColor,
                //    stroke: b.borderColor,
                //    "stroke-width": b.borderWidth
                //});
                //this.background[a] || (this.background[a] = this.chart.renderer.path().add(this.group), k = "attr");
                //this.background[a][k]({
                //    d: this.axis.getPlotBandPath(b.from, b.to, b)
                //}).attr(l)
            };
            b.prototype.updateCenter = function(b) {
                this.center = (b || this.axis || {}).center = u.getCenter.call(this)
            };
            b.prototype.update = function(b, a) {
                x(!0, this.options, b);
                x(!0, this.chart.options.pane, b);
                this.setOptions(this.options);
                this.render();
                this.chart.axes.forEach(function(b) {
                    b.pane === this &&
                        (b.pane = null, b.update({}, a))
                }, this)
            };
            return b
        }();
        e.prototype.getHoverPane = function(b) {
            var a = this,
                k;
            b && a.pane.forEach(function(l) {
                var c = b.chartX - a.plotLeft,
                    h = b.chartY - a.plotTop;
                d(a.inverted ? h : c, a.inverted ? c : h, l.center) && (k = l)
            });
            return k
        };
        r(e, "afterIsInsidePlot", function(b) {
            this.polar && (b.isInsidePlot = this.pane.some(function(a) {
                return d(b.x, b.y, a.center)
            }))
        });
        r(g, "beforeGetHoverData", function(a) {
            var k = this.chart;
            k.polar ? (k.hoverPane = k.getHoverPane(a), a.filter = function(l) {
                return l.visible && !(!a.shared &&
                    l.directTouch) && b(l.options.enableMouseTracking, !0) && (!k.hoverPane || l.xAxis.pane === k.hoverPane)
            }) : k.hoverPane = void 0
        });
        r(g, "afterGetHoverData", function(b) {
            var a = this.chart;
            b.hoverPoint && b.hoverPoint.plotX && b.hoverPoint.plotY && a.hoverPane && !d(b.hoverPoint.plotX, b.hoverPoint.plotY, a.hoverPane.center) && (b.hoverPoint = void 0)
        });
        c.Pane = a;
        return c.Pane
    });
    z(e, "Core/Axis/HiddenAxis.js", [], function() {
        return function() {
            function e() {}
            e.init = function(c) {
                c.getOffset = function() {};
                c.redraw = function() {
                    this.isDirty = !1
                };
                c.render = function() {
                    this.isDirty = !1
                };
                c.createLabelCollector = function() {
                    return function() {}
                };
                c.setScale = function() {};
                c.setCategories = function() {};
                c.setTitle = function() {};
                c.isHidden = !0
            };
            return e
        }()
    });
    z(e, "Core/Axis/RadialAxis.js", [e["Core/Axis/Axis.js"], e["Core/Axis/Tick.js"], e["Core/Axis/HiddenAxis.js"], e["Core/Utilities.js"]], function(e, c, h, g) {
        var a = g.addEvent,
            u = g.correctFloat,
            d = g.defined,
            r = g.extend,
            n = g.fireEvent,
            x = g.merge,
            b = g.pick,
            k = g.relativeLength,
            l = g.wrap;
        g = function() {
            function c() {}
            c.init =
                function(a) {
                    var l = e.prototype;
                    a.setOptions = function(b) {
                        b = this.options = x(a.constructor.defaultOptions, this.defaultPolarOptions, b);
                        b.plotBands || (b.plotBands = []);
                        n(this, "afterSetOptions")
                    };
                    a.getOffset = function() {
                        l.getOffset.call(this);
                        this.chart.axisOffset[this.side] = 0
                    };
                    a.getLinePath = function(a, k, l) {
                        a = this.pane.center;
                        var q = this.chart,
                            p = b(k, a[2] / 2 - this.offset),
                            f = this.left || 0,
                            A = this.top || 0;
                        "undefined" === typeof l && (l = this.horiz ? 0 : this.center && -this.center[3] / 2);
                        l && (p += l);
                        this.isCircular || "undefined" !==
                            typeof k ? (k = this.chart.renderer.symbols.arc(f + a[0], A + a[1], p, p, {
                                start: this.startAngleRad,
                                end: this.endAngleRad,
                                open: !0,
                                innerR: 0
                            }), k.xBounds = [f + a[0]], k.yBounds = [A + a[1] - p]) : (k = this.postTranslate(this.angleRad, p), k = [
                                ["M", this.center[0] + q.plotLeft, this.center[1] + q.plotTop],
                                ["L", k.x, k.y]
                            ]);
                        return k
                    };
                    a.setAxisTranslation = function() {
                        l.setAxisTranslation.call(this);
                        this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max -
                            this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
                    };
                    a.beforeSetTickPositions = function() {
                        this.autoConnect = this.isCircular && "undefined" === typeof b(this.userMax, this.options.max) && u(this.endAngleRad - this.startAngleRad) === u(2 * Math.PI);
                        !this.isCircular && this.chart.inverted && this.max++;
                        this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
                    };
                    a.setAxisSize = function() {
                        l.setAxisSize.call(this);
                        if (this.isRadial) {
                            this.pane.updateCenter(this);
                            var a = this.center = r([], this.pane.center);
                            if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad;
                            else {
                                var k = this.postTranslate(this.angleRad, a[3] / 2);
                                a[0] = k.x - this.chart.plotLeft;
                                a[1] = k.y - this.chart.plotTop
                            }
                            this.len = this.width = this.height = (a[2] - a[3]) * b(this.sector, 1) / 2
                        }
                    };
                    a.getPosition = function(a, k) {
                        a = this.translate(a);
                        return this.postTranslate(this.isCircular ? a : this.angleRad, b(this.isCircular ? k : 0 > a ? 0 : a, this.center[2] / 2) - this.offset)
                    };
                    a.postTranslate = function(b, a) {
                        var k = this.chart,
                            q = this.center;
                        b = this.startAngleRad + b;
                        return {
                            x: k.plotLeft + q[0] + Math.cos(b) * a,
                            y: k.plotTop + q[1] + Math.sin(b) * a
                        }
                    };
                    a.getPlotBandPath = function(a, k, l) {
                        var q = function(f) {
                                if ("string" === typeof f) {
                                    var p = parseInt(f, 10);
                                    c.test(f) && (p = p * A / 100);
                                    return p
                                }
                                return f
                            },
                            p = this.center,
                            f = this.startAngleRad,
                            A = p[2] / 2,
                            v = Math.min(this.offset, 0),
                            m = this.left || 0,
                            D = this.top || 0,
                            c = /%$/;
                        var C = this.isCircular;
                        var d = b(q(l.outerRadius), A),
                            y = q(l.innerRadius);
                        q = b(q(l.thickness), 10);
                        if ("polygon" === this.options.gridLineInterpolation) v = this.getPlotLinePath({
                            value: a
                        }).concat(this.getPlotLinePath({
                            value: k,
                            reverse: !0
                        }));
                        else {
                            a = Math.max(a, this.min);
                            k = Math.min(k, this.max);
                            a = this.translate(a);
                            k = this.translate(k);
                            C || (d = a || 0, y = k || 0);
                            if ("circle" !== l.shape && C) l = f + (a || 0), f += k || 0;
                            else {
                                l = -Math.PI / 2;
                                f = 1.5 * Math.PI;
                                var h = !0
                            }
                            d -= v;
                            v = this.chart.renderer.symbols.arc(m + p[0], D + p[1], d, d, {
                                start: Math.min(l, f),
                                end: Math.max(l, f),
                                innerR: b(y, d - (q - v)),
                                open: h
                            });
                            C && (C = (f + l) / 2, m = m + p[0] + p[2] / 2 * Math.cos(C), v.xBounds = C > -Math.PI / 2 && C < Math.PI / 2 ? [m, this.chart.plotWidth] : [0, m], v.yBounds = [D + p[1] + p[2] / 2 * Math.sin(C)], v.yBounds[0] += C > -Math.PI &&
                                0 > C || C > Math.PI ? -10 : 10)
                        }
                        return v
                    };
                    a.getCrosshairPosition = function(b, a, k) {
                        var q = b.value,
                            p = this.pane.center;
                        if (this.isCircular) {
                            if (d(q)) b.point && (f = b.point.shapeArgs || {}, f.start && (q = this.chart.inverted ? this.translate(b.point.rectPlotY, !0) : b.point.x));
                            else {
                                var f = b.chartX || 0;
                                var A = b.chartY || 0;
                                q = this.translate(Math.atan2(A - k, f - a) - this.startAngleRad, !0)
                            }
                            b = this.getPosition(q);
                            f = b.x;
                            A = b.y
                        } else d(q) || (f = b.chartX, A = b.chartY), d(f) && d(A) && (k = p[1] + this.chart.plotTop, q = this.translate(Math.min(Math.sqrt(Math.pow(f -
                            a, 2) + Math.pow(A - k, 2)), p[2] / 2) - p[3] / 2, !0));
                        return [q, f || 0, A || 0]
                    };
                    a.getPlotLinePath = function(b) {
                        var a = this,
                            l = a.pane.center,
                            q = a.chart,
                            p = q.inverted,
                            f = b.value,
                            A = b.reverse,
                            v = a.getPosition(f),
                            m = a.pane.options.background ? a.pane.options.background[0] || a.pane.options.background : {},
                            D = m.innerRadius || "0%",
                            c = m.outerRadius || "100%";
                        m = l[0] + q.plotLeft;
                        var C = l[1] + q.plotTop,
                            d = v.x,
                            E = v.y,
                            h = a.height;
                        v = l[3] / 2;
                        var g;
                        b.isCrosshair && (E = this.getCrosshairPosition(b, m, C), f = E[0], d = E[1], E = E[2]);
                        if (a.isCircular) f = Math.sqrt(Math.pow(d -
                            m, 2) + Math.pow(E - C, 2)), A = "string" === typeof D ? k(D, 1) : D / f, q = "string" === typeof c ? k(c, 1) : c / f, l && v && (f = v / f, A < f && (A = f), q < f && (q = f)), l = [
                            ["M", m + A * (d - m), C - A * (C - E)],
                            ["L", d - (1 - q) * (d - m), E + (1 - q) * (C - E)]
                        ];
                        else if ((f = a.translate(f)) && (0 > f || f > h) && (f = 0), "circle" === a.options.gridLineInterpolation) l = a.getLinePath(0, f, v);
                        else if (l = [], q[p ? "yAxis" : "xAxis"].forEach(function(f) {
                                f.pane === a.pane && (g = f)
                            }), g)
                            for (m = g.tickPositions, g.autoConnect && (m = m.concat([m[0]])), A && (m = m.slice().reverse()), f && (f += v), d = 0; d < m.length; d++) C = g.getPosition(m[d],
                                f), l.push(d ? ["L", C.x, C.y] : ["M", C.x, C.y]);
                        return l
                    };
                    a.getTitlePosition = function() {
                        var b = this.center,
                            a = this.chart,
                            k = this.options.title;
                        return {
                            x: a.plotLeft + b[0] + (k.x || 0),
                            y: a.plotTop + b[1] - {
                                high: .5,
                                middle: .25,
                                low: 0
                            } [k.align] * b[2] + (k.y || 0)
                        }
                    };
                    a.createLabelCollector = function() {
                        var b = this;
                        return function() {
                            if (b.isRadial && b.tickPositions && !0 !== b.options.labels.allowOverlap) return b.tickPositions.map(function(a) {
                                return b.ticks[a] && b.ticks[a].label
                            }).filter(function(b) {
                                return !!b
                            })
                        }
                    }
                };
            c.compose = function(d, g) {
                a(d,
                    "init",
                    function(b) {
                        var a = this.chart,
                            k = a.inverted,
                            q = a.angular,
                            p = a.polar,
                            f = this.isXAxis,
                            A = this.coll,
                            v = q && f,
                            m, D = a.options;
                        b = b.userOptions.pane || 0;
                        b = this.pane = a.pane && a.pane[b];
                        if ("colorAxis" === A) this.isRadial = !1;
                        else {
                            if (q) {
                                if (v ? h.init(this) : c.init(this), m = !f) this.defaultPolarOptions = c.defaultRadialGaugeOptions
                            } else p && (c.init(this), this.defaultPolarOptions = (m = this.horiz) ? c.defaultCircularOptions : x("xAxis" === A ? d.defaultOptions : d.defaultYAxisOptions, c.defaultRadialOptions), k && "yAxis" === A && (this.defaultPolarOptions.stackLabels =
                                d.defaultYAxisOptions.stackLabels));
                            q || p ? (this.isRadial = !0, D.chart.zoomType = null, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && a.labelCollectors.push(this.labelCollector)) : this.isRadial = !1;
                            b && m && (b.axis = this);
                            this.isCircular = m
                        }
                    });
                a(d, "afterInit", function() {
                    var a = this.chart,
                        k = this.options,
                        l = this.pane,
                        q = l && l.options;
                    a.angular && this.isXAxis || !l || !a.angular && !a.polar || (this.angleRad = (k.angle || 0) * Math.PI / 180, this.startAngleRad = (q.startAngle - 90) * Math.PI / 180,
                        this.endAngleRad = (b(q.endAngle, q.startAngle + 360) - 90) * Math.PI / 180, this.offset = k.offset || 0)
                });
                a(d, "autoLabelAlign", function(b) {
                    this.isRadial && (b.align = void 0, b.preventDefault())
                });
                a(d, "destroy", function() {
                    if (this.chart && this.chart.labelCollectors) {
                        var b = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
                        0 <= b && this.chart.labelCollectors.splice(b, 1)
                    }
                });
                a(d, "initialAxisTranslation", function() {
                    this.isRadial && this.beforeSetTickPositions()
                });
                a(g, "afterGetPosition", function(b) {
                    this.axis.getPosition &&
                        r(b.pos, this.axis.getPosition(this.pos))
                });
                a(g, "afterGetLabelPosition", function(a) {
                    var l = this.axis,
                        d = this.label;
                    if (d) {
                        var q = d.getBBox(),
                            p = l.options.labels,
                            f = p.y,
                            A = 20,
                            v = p.align,
                            m = (l.translate(this.pos) + l.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
                            D = Math.round(m),
                            c = "end",
                            C = 0 > D ? D + 360 : D,
                            g = C,
                            E = 0,
                            h = 0,
                            r = null === p.y ? .3 * -q.height : 0;
                        if (l.isRadial) {
                            var x = l.getPosition(this.pos, l.center[2] / 2 + k(b(p.distance, -25), l.center[2] / 2, -l.center[2] / 2));
                            "auto" === p.rotation ? d.attr({
                                rotation: m
                            }) : null === f && (f = l.chart.renderer.fontMetrics(d.styles &&
                                d.styles.fontSize).b - q.height / 2);
                            null === v && (l.isCircular ? (q.width > l.len * l.tickInterval / (l.max - l.min) && (A = 0), v = m > A && m < 180 - A ? "left" : m > 180 + A && m < 360 - A ? "right" : "center") : v = "center", d.attr({
                                align: v
                            }));
                            if ("auto" === v && 2 === l.tickPositions.length && l.isCircular) {
                                90 < C && 180 > C ? C = 180 - C : 270 < C && 360 >= C && (C = 540 - C);
                                180 < g && 360 >= g && (g = 360 - g);
                                if (l.pane.options.startAngle === D || l.pane.options.startAngle === D + 360 || l.pane.options.startAngle === D - 360) c = "start";
                                v = -90 <= D && 90 >= D || -360 <= D && -270 >= D || 270 <= D && 360 >= D ? "start" === c ? "right" :
                                    "left" : "start" === c ? "left" : "right";
                                70 < g && 110 > g && (v = "center");
                                15 > C || 180 <= C && 195 > C ? E = .3 * q.height : 15 <= C && 35 >= C ? E = "start" === c ? 0 : .75 * q.height : 195 <= C && 215 >= C ? E = "start" === c ? .75 * q.height : 0 : 35 < C && 90 >= C ? E = "start" === c ? .25 * -q.height : q.height : 215 < C && 270 >= C && (E = "start" === c ? q.height : .25 * -q.height);
                                15 > g ? h = "start" === c ? .15 * -q.height : .15 * q.height : 165 < g && 180 >= g && (h = "start" === c ? .15 * q.height : .15 * -q.height);
                                d.attr({
                                    align: v
                                });
                                d.translate(h, E + r)
                            }
                            a.pos.x = x.x + p.x;
                            a.pos.y = x.y + f
                        }
                    }
                });
                l(g.prototype, "getMarkPath", function(b, a, k,
                    q, p, f, A) {
                    var v = this.axis;
                    v.isRadial ? (b = v.getPosition(this.pos, v.center[2] / 2 + q), a = ["M", a, k, "L", b.x, b.y]) : a = b.call(this, a, k, q, p, f, A);
                    return a
                })
            };
            c.defaultCircularOptions = {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null,
                    style: {
                        textOverflow: "none"
                    }
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            };
            c.defaultRadialGaugeOptions = {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            };
            c.defaultRadialOptions = {
                gridLineInterpolation: "circle",
                gridLineWidth: 1,
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            };
            return c
        }();
        g.compose(e, c);
        return g
    });
    z(e, "Series/AreaRange/AreaRangePoint.js", [e["Series/Area/AreaSeries.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(e, c, h) {
        var g = this && this.__extends || function() {
                var a = function(d, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b,
                        a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var k in a) a.hasOwnProperty(k) && (b[k] = a[k])
                    };
                    return a(d, c)
                };
                return function(d, c) {
                    function b() {
                        this.constructor = d
                    }
                    a(d, c);
                    d.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
                }
            }(),
            a = c.prototype,
            u = h.defined,
            d = h.isNumber;
        return function(c) {
            function h() {
                var a = null !== c && c.apply(this, arguments) || this;
                a.high = void 0;
                a.low = void 0;
                a.options = void 0;
                a.plotHigh = void 0;
                a.plotLow = void 0;
                a.plotHighX = void 0;
                a.plotLowX = void 0;
                a.plotX = void 0;
                a.series = void 0;
                return a
            }
            g(h, c);
            h.prototype.setState = function() {
                var d = this.state,
                    b = this.series,
                    k = b.chart.polar;
                u(this.plotHigh) || (this.plotHigh = b.yAxis.toPixels(this.high, !0));
                u(this.plotLow) || (this.plotLow = this.plotY = b.yAxis.toPixels(this.low, !0));
                b.stateMarkerGraphic && (b.lowerStateMarkerGraphic = b.stateMarkerGraphic, b.stateMarkerGraphic = b.upperStateMarkerGraphic);
                this.graphic = this.upperGraphic;
                this.plotY = this.plotHigh;
                k && (this.plotX = this.plotHighX);
                a.setState.apply(this, arguments);
                this.state = d;
                this.plotY = this.plotLow;
                this.graphic =
                    this.lowerGraphic;
                k && (this.plotX = this.plotLowX);
                b.stateMarkerGraphic && (b.upperStateMarkerGraphic = b.stateMarkerGraphic, b.stateMarkerGraphic = b.lowerStateMarkerGraphic, b.lowerStateMarkerGraphic = void 0);
                a.setState.apply(this, arguments)
            };
            h.prototype.haloPath = function() {
                var d = this.series.chart.polar,
                    b = [];
                this.plotY = this.plotLow;
                d && (this.plotX = this.plotLowX);
                this.isInside && (b = a.haloPath.apply(this, arguments));
                this.plotY = this.plotHigh;
                d && (this.plotX = this.plotHighX);
                this.isTopInside && (b = b.concat(a.haloPath.apply(this,
                    arguments)));
                return b
            };
            h.prototype.isValid = function() {
                return d(this.low) && d(this.high)
            };
            return h
        }(e.prototype.pointClass)
    });
    z(e, "Series/AreaRange/AreaRangeSeries.js", [e["Series/AreaRange/AreaRangePoint.js"], e["Series/Area/AreaSeries.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c, h, g, a, u, d) {
        var r = this && this.__extends || function() {
                var b = function(a, q) {
                    b = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof
                    Array && function(b, f) {
                        b.__proto__ = f
                    } || function(b, f) {
                        for (var p in f) f.hasOwnProperty(p) && (b[p] = f[p])
                    };
                    return b(a, q)
                };
                return function(a, q) {
                    function p() {
                        this.constructor = a
                    }
                    b(a, q);
                    a.prototype = null === q ? Object.create(q) : (p.prototype = q.prototype, new p)
                }
            }(),
            n = c.prototype,
            x = h.prototype,
            b = g.noop,
            k = a.prototype,
            l = d.defined,
            t = d.extend,
            w = d.isArray,
            K = d.pick,
            L = d.merge;
        h = function(a) {
            function d() {
                var q = null !== a && a.apply(this, arguments) || this;
                q.data = void 0;
                q.options = void 0;
                q.points = void 0;
                q.lowerStateMarkerGraphic = void 0;
                q.xAxis = void 0;
                q.setStackedPoints = b;
                return q
            }
            r(d, a);
            d.prototype.toYData = function(b) {
                return [b.low, b.high]
            };
            d.prototype.highToXY = function(b) {
                var p = this.chart,
                    f = this.xAxis.postTranslate(b.rectPlotX, this.yAxis.len - b.plotHigh);
                b.plotHighX = f.x - p.plotLeft;
                b.plotHigh = f.y - p.plotTop;
                b.plotLowX = b.plotX
            };
            d.prototype.translate = function() {
                var b = this,
                    p = b.yAxis,
                    f = !!b.modifyValue;
                n.translate.apply(b);
                b.points.forEach(function(a) {
                    var v = a.high,
                        m = a.plotY;
                    a.isNull ? a.plotY = null : (a.plotLow = m, a.plotHigh = p.translate(f ? b.modifyValue(v,
                        a) : v, 0, 1, 0, 1), f && (a.yBottom = a.plotHigh))
                });
                this.chart.polar && this.points.forEach(function(f) {
                    b.highToXY(f);
                    f.tooltipPos = [(f.plotHighX + f.plotLowX) / 2, (f.plotHigh + f.plotLow) / 2]
                })
            };
            d.prototype.getGraphPath = function(b) {
                var p = [],
                    f = [],
                    a, v = n.getGraphPath;
                var m = this.options;
                var q = this.chart.polar,
                    k = q && !1 !== m.connectEnds,
                    l = m.connectNulls,
                    d = m.step;
                b = b || this.points;
                for (a = b.length; a--;) {
                    var c = b[a];
                    var g = q ? {
                        plotX: c.rectPlotX,
                        plotY: c.yBottom,
                        doCurve: !1
                    } : {
                        plotX: c.plotX,
                        plotY: c.plotY,
                        doCurve: !1
                    };
                    c.isNull || k || l || b[a +
                        1] && !b[a + 1].isNull || f.push(g);
                    var h = {
                        polarPlotY: c.polarPlotY,
                        rectPlotX: c.rectPlotX,
                        yBottom: c.yBottom,
                        plotX: K(c.plotHighX, c.plotX),
                        plotY: c.plotHigh,
                        isNull: c.isNull
                    };
                    f.push(h);
                    p.push(h);
                    c.isNull || k || l || b[a - 1] && !b[a - 1].isNull || f.push(g)
                }
                b = v.call(this, b);
                d && (!0 === d && (d = "left"), m.step = {
                    left: "right",
                    center: "center",
                    right: "left"
                } [d]);
                p = v.call(this, p);
                f = v.call(this, f);
                m.step = d;
                m = [].concat(b, p);
                !this.chart.polar && f[0] && "M" === f[0][0] && (f[0] = ["L", f[0][1], f[0][2]]);
                this.graphPath = m;
                this.areaPath = b.concat(f);
                m.isArea = !0;
                m.xMap = b.xMap;
                this.areaPath.xMap = b.xMap;
                return m
            };
            d.prototype.drawDataLabels = function() {
                var b = this.points,
                    a = b.length,
                    f, A = [],
                    v = this.options.dataLabels,
                    m, D = this.chart.inverted;
                if (w(v)) {
                    var l = v[0] || {
                        enabled: !1
                    };
                    var d = v[1] || {
                        enabled: !1
                    }
                } else l = t({}, v), l.x = v.xHigh, l.y = v.yHigh, d = t({}, v), d.x = v.xLow, d.y = v.yLow;
                if (l.enabled || this._hasPointLabels) {
                    for (f = a; f--;)
                        if (m = b[f]) {
                            var c = l.inside ? m.plotHigh < m.plotLow : m.plotHigh > m.plotLow;
                            m.y = m.high;
                            m._plotY = m.plotY;
                            m.plotY = m.plotHigh;
                            A[f] = m.dataLabel;
                            m.dataLabel =
                                m.dataLabelUpper;
                            m.below = c;
                            D ? l.align || (l.align = c ? "right" : "left") : l.verticalAlign || (l.verticalAlign = c ? "top" : "bottom")
                        } this.options.dataLabels = l;
                    k.drawDataLabels && k.drawDataLabels.apply(this, arguments);
                    for (f = a; f--;)
                        if (m = b[f]) m.dataLabelUpper = m.dataLabel, m.dataLabel = A[f], delete m.dataLabels, m.y = m.low, m.plotY = m._plotY
                }
                if (d.enabled || this._hasPointLabels) {
                    for (f = a; f--;)
                        if (m = b[f]) c = d.inside ? m.plotHigh < m.plotLow : m.plotHigh > m.plotLow, m.below = !c, D ? d.align || (d.align = c ? "left" : "right") : d.verticalAlign || (d.verticalAlign =
                            c ? "bottom" : "top");
                    this.options.dataLabels = d;
                    k.drawDataLabels && k.drawDataLabels.apply(this, arguments)
                }
                if (l.enabled)
                    for (f = a; f--;)
                        if (m = b[f]) m.dataLabels = [m.dataLabelUpper, m.dataLabel].filter(function(f) {
                            return !!f
                        });
                this.options.dataLabels = v
            };
            d.prototype.alignDataLabel = function() {
                x.alignDataLabel.apply(this, arguments)
            };
            d.prototype.drawPoints = function() {
                var b = this.points.length,
                    a;
                k.drawPoints.apply(this, arguments);
                for (a = 0; a < b;) {
                    var f = this.points[a];
                    f.origProps = {
                        plotY: f.plotY,
                        plotX: f.plotX,
                        isInside: f.isInside,
                        negative: f.negative,
                        zone: f.zone,
                        y: f.y
                    };
                    f.lowerGraphic = f.graphic;
                    f.graphic = f.upperGraphic;
                    f.plotY = f.plotHigh;
                    l(f.plotHighX) && (f.plotX = f.plotHighX);
                    f.y = f.high;
                    f.negative = f.high < (this.options.threshold || 0);
                    f.zone = this.zones.length && f.getZone();
                    this.chart.polar || (f.isInside = f.isTopInside = "undefined" !== typeof f.plotY && 0 <= f.plotY && f.plotY <= this.yAxis.len && 0 <= f.plotX && f.plotX <= this.xAxis.len);
                    a++
                }
                k.drawPoints.apply(this, arguments);
                for (a = 0; a < b;) f = this.points[a], f.upperGraphic = f.graphic, f.graphic = f.lowerGraphic,
                    t(f, f.origProps), delete f.origProps, a++
            };
            d.defaultOptions = L(c.defaultOptions, {
                lineWidth: 1,
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                trackByArea: !0,
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    xLow: 0,
                    xHigh: 0,
                    yLow: 0,
                    yHigh: 0
                }
            });
            return d
        }(c);
        t(h.prototype, {
            pointArrayMap: ["low", "high"],
            pointValKey: "low",
            deferTranslatePolar: !0,
            pointClass: e
        });
        u.registerSeriesType("arearange", h);
        "";
        return h
    });
    z(e, "Series/AreaSplineRange/AreaSplineRangeSeries.js",
        [e["Series/AreaRange/AreaRangeSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]],
        function(e, c, h) {
            var g = this && this.__extends || function() {
                    var a = function(d, c) {
                        a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(b, a) {
                            b.__proto__ = a
                        } || function(b, a) {
                            for (var k in a) a.hasOwnProperty(k) && (b[k] = a[k])
                        };
                        return a(d, c)
                    };
                    return function(d, c) {
                        function b() {
                            this.constructor = d
                        }
                        a(d, c);
                        d.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
                    }
                }(),
                a = c.seriesTypes.spline,
                u = h.merge;
            h = h.extend;
            var d = function(a) {
                function d() {
                    var d = null !== a && a.apply(this, arguments) || this;
                    d.options = void 0;
                    d.data = void 0;
                    d.points = void 0;
                    return d
                }
                g(d, a);
                d.defaultOptions = u(e.defaultOptions);
                return d
            }(e);
            h(d.prototype, {
                getPointSpline: a.prototype.getPointSpline
            });
            c.registerSeriesType("areasplinerange", d);
            "";
            return d
        });
    z(e, "Series/ColumnRange/ColumnRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c) {
        var h = this && this.__extends || function() {
                var a = function(d, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var k in b) b.hasOwnProperty(k) && (a[k] = b[k])
                    };
                    return a(d, c)
                };
                return function(d, c) {
                    function g() {
                        this.constructor = d
                    }
                    a(d, c);
                    d.prototype = null === c ? Object.create(c) : (g.prototype = c.prototype, new g)
                }
            }(),
            g = e.seriesTypes;
        e = g.column.prototype.pointClass;
        var a = c.extend,
            u = c.isNumber;
        c = function(a) {
            function d() {
                var d = null !== a && a.apply(this, arguments) || this;
                d.series = void 0;
                d.options = void 0;
                d.barX = void 0;
                d.pointWidth = void 0;
                d.shapeArgs =
                    void 0;
                d.shapeType = void 0;
                return d
            }
            h(d, a);
            d.prototype.isValid = function() {
                return u(this.low)
            };
            return d
        }(g.arearange.prototype.pointClass);
        a(c.prototype, {
            setState: e.prototype.setState
        });
        return c
    });
    z(e, "Series/ColumnRange/ColumnRangeSeries.js", [e["Series/ColumnRange/ColumnRangePoint.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c, h, g) {
        var a = this && this.__extends || function() {
            var b = function(a, d) {
                b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b,
                    a) {
                    b.__proto__ = a
                } || function(b, a) {
                    for (var q in a) a.hasOwnProperty(q) && (b[q] = a[q])
                };
                return b(a, d)
            };
            return function(a, d) {
                function k() {
                    this.constructor = a
                }
                b(a, d);
                a.prototype = null === d ? Object.create(d) : (k.prototype = d.prototype, new k)
            }
        }();
        c = c.noop;
        var u = h.seriesTypes,
            d = u.arearange,
            r = u.column,
            n = r.prototype,
            x = d.prototype,
            b = g.clamp,
            k = g.merge,
            l = g.pick;
        g = g.extend;
        var t = {
            pointRange: null,
            marker: null,
            states: {
                hover: {
                    halo: !1
                }
            }
        };
        u = function(c) {
            function g() {
                var b = null !== c && c.apply(this, arguments) || this;
                b.data = void 0;
                b.points = void 0;
                b.options = void 0;
                return b
            }
            a(g, c);
            g.prototype.setOptions = function() {
                k(!0, arguments[0], {
                    stacking: void 0
                });
                return x.setOptions.apply(this, arguments)
            };
            g.prototype.translate = function() {
                var a = this,
                    d = a.yAxis,
                    k = a.xAxis,
                    q = k.startAngleRad,
                    p, f = a.chart,
                    A = a.xAxis.isRadial,
                    v = Math.max(f.chartWidth, f.chartHeight) + 999,
                    m;
                n.translate.apply(a);
                a.points.forEach(function(c) {
                    var D = c.shapeArgs,
                        g = a.options.minPointLength;
                    c.plotHigh = m = b(d.translate(c.high, 0, 1, 0, 1), -v, v);
                    c.plotLow = b(c.plotY, -v, v);
                    var h = m;
                    var e =
                        l(c.rectPlotY, c.plotY) - m;
                    Math.abs(e) < g ? (g -= e, e += g, h -= g / 2) : 0 > e && (e *= -1, h -= e);
                    A ? (p = c.barX + q, c.shapeType = "arc", c.shapeArgs = a.polarArc(h + e, h, p, p + c.pointWidth)) : (D.height = e, D.y = h, c.tooltipPos = f.inverted ? [d.len + d.pos - f.plotLeft - h - e / 2, k.len + k.pos - f.plotTop - D.x - D.width / 2, e] : [k.left - f.plotLeft + D.x + D.width / 2, d.pos - f.plotTop + h + e / 2, e])
                })
            };
            g.prototype.crispCol = function() {
                return n.crispCol.apply(this, arguments)
            };
            g.prototype.drawPoints = function() {
                return n.drawPoints.apply(this, arguments)
            };
            g.prototype.drawTracker =
                function() {
                    return n.drawTracker.apply(this, arguments)
                };
            g.prototype.getColumnMetrics = function() {
                return n.getColumnMetrics.apply(this, arguments)
            };
            g.prototype.pointAttribs = function() {
                return n.pointAttribs.apply(this, arguments)
            };
            g.prototype.adjustForMissingColumns = function() {
                return n.adjustForMissingColumns.apply(this, arguments)
            };
            g.prototype.animate = function() {
                return n.animate.apply(this, arguments)
            };
            g.prototype.translate3dPoints = function() {
                return n.translate3dPoints.apply(this, arguments)
            };
            g.prototype.translate3dShapes =
                function() {
                    return n.translate3dShapes.apply(this, arguments)
                };
            g.defaultOptions = k(r.defaultOptions, d.defaultOptions, t);
            return g
        }(d);
        g(u.prototype, {
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: c,
            getSymbol: c,
            polarArc: function() {
                return n.polarArc.apply(this, arguments)
            },
            pointClass: e
        });
        h.registerSeriesType("columnrange", u);
        "";
        return u
    });
    z(e, "Series/ColumnPyramid/ColumnPyramidSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e,
        c, h) {
        var g = this && this.__extends || function() {
                var a = function(d, b) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d])
                    };
                    return a(d, b)
                };
                return function(d, b) {
                    function k() {
                        this.constructor = d
                    }
                    a(d, b);
                    d.prototype = null === b ? Object.create(b) : (k.prototype = b.prototype, new k)
                }
            }(),
            a = e.prototype,
            u = h.clamp,
            d = h.merge,
            r = h.pick;
        h = function(c) {
            function h() {
                var b = null !== c && c.apply(this, arguments) || this;
                b.data = void 0;
                b.options =
                    void 0;
                b.points = void 0;
                return b
            }
            g(h, c);
            h.prototype.translate = function() {
                var b = this,
                    d = b.chart,
                    c = b.options,
                    g = b.dense = 2 > b.closestPointRange * b.xAxis.transA;
                g = b.borderWidth = r(c.borderWidth, g ? 0 : 1);
                var h = b.yAxis,
                    e = c.threshold,
                    x = b.translatedThreshold = h.getThreshold(e),
                    n = r(c.minPointLength, 5),
                    y = b.getColumnMetrics(),
                    q = y.width,
                    p = b.barW = Math.max(q, 1 + 2 * g),
                    f = b.pointXOffset = y.offset;
                d.inverted && (x -= .5);
                c.pointPadding && (p = Math.ceil(p));
                a.translate.apply(b);
                b.points.forEach(function(a) {
                    var v = r(a.yBottom, x),
                        m = 999 +
                        Math.abs(v),
                        k = u(a.plotY, -m, h.len + m);
                    m = a.plotX + f;
                    var A = p / 2,
                        l = Math.min(k, v);
                    v = Math.max(k, v) - l;
                    var g;
                    a.barX = m;
                    a.pointWidth = q;
                    a.tooltipPos = d.inverted ? [h.len + h.pos - d.plotLeft - k, b.xAxis.len - m - A, v] : [m + A, k + h.pos - d.plotTop, v];
                    k = e + (a.total || a.y);
                    "percent" === c.stacking && (k = e + (0 > a.y) ? -100 : 100);
                    k = h.toPixels(k, !0);
                    var E = (g = d.plotHeight - k - (d.plotHeight - x)) ? A * (l - k) / g : 0;
                    var t = g ? A * (l + v - k) / g : 0;
                    g = m - E + A;
                    E = m + E + A;
                    var y = m + t + A;
                    t = m - t + A;
                    var w = l - n;
                    var H = l + v;
                    0 > a.y && (w = l, H = l + v + n);
                    d.inverted && (y = d.plotWidth - l, g = k - (d.plotWidth -
                        x), E = A * (k - y) / g, t = A * (k - (y - v)) / g, g = m + A + E, E = g - 2 * E, y = m - t + A, t = m + t + A, w = l, H = l + v - n, 0 > a.y && (H = l + v + n));
                    a.shapeType = "path";
                    a.shapeArgs = {
                        x: g,
                        y: w,
                        width: E - g,
                        height: v,
                        d: [
                            ["M", g, w],
                            ["L", E, w],
                            ["L", y, H],
                            ["L", t, H],
                            ["Z"]
                        ]
                    }
                })
            };
            h.defaultOptions = d(e.defaultOptions, {});
            return h
        }(e);
        c.registerSeriesType("columnpyramid", h);
        "";
        return h
    });
    z(e, "Series/Gauge/GaugePoint.js", [e["Core/Series/SeriesRegistry.js"]], function(e) {
        var c = this && this.__extends || function() {
            var c = function(g, a) {
                c = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof
                Array && function(a, d) {
                    a.__proto__ = d
                } || function(a, d) {
                    for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c])
                };
                return c(g, a)
            };
            return function(g, a) {
                function h() {
                    this.constructor = g
                }
                c(g, a);
                g.prototype = null === a ? Object.create(a) : (h.prototype = a.prototype, new h)
            }
        }();
        return function(h) {
            function g() {
                var a = null !== h && h.apply(this, arguments) || this;
                a.options = void 0;
                a.series = void 0;
                a.shapeArgs = void 0;
                return a
            }
            c(g, h);
            g.prototype.setState = function(a) {
                this.state = a
            };
            return g
        }(e.series.prototype.pointClass)
    });
    z(e, "Series/Gauge/GaugeSeries.js",
        [e["Series/Gauge/GaugePoint.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]],
        function(e, c, h, g, a) {
            var u = this && this.__extends || function() {
                var a = function(b, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d])
                    };
                    return a(b, d)
                };
                return function(b, d) {
                    function c() {
                        this.constructor = b
                    }
                    a(b, d);
                    b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype,
                        new c)
                }
            }();
            c = c.noop;
            var d = g.series,
                r = g.seriesTypes.column,
                n = a.clamp,
                x = a.isNumber,
                b = a.extend,
                k = a.merge,
                l = a.pick,
                t = a.pInt;
            a = function(a) {
                function b() {
                    var b = null !== a && a.apply(this, arguments) || this;
                    b.data = void 0;
                    b.points = void 0;
                    b.options = void 0;
                    b.yAxis = void 0;
                    return b
                }
                u(b, a);
                b.prototype.translate = function() {
                    var b = this.yAxis,
                        a = this.options,
                        d = b.center;
                    this.generatePoints();
                    this.points.forEach(function(c) {
                        var p = k(a.dial, c.dial),
                            f = t(l(p.radius, "80%")) * d[2] / 200,
                            A = t(l(p.baseLength, "70%")) * f / 100,
                            v = t(l(p.rearLength,
                                "10%")) * f / 100,
                            m = p.baseWidth || 3,
                            q = p.topWidth || 1,
                            g = a.overshoot,
                            h = b.startAngleRad + b.translate(c.y, null, null, null, !0);
                        if (x(g) || !1 === a.wrap) g = x(g) ? g / 180 * Math.PI : 0, h = n(h, b.startAngleRad - g, b.endAngleRad + g);
                        h = 180 * h / Math.PI;
                        c.shapeType = "path";
                        c.shapeArgs = {
                            d: p.path || [
                                ["M", -v, -m / 2],
                                ["L", A, -m / 2],
                                ["L", f, -q / 2],
                                ["L", f, q / 2],
                                ["L", A, m / 2],
                                ["L", -v, m / 2],
                                ["Z"]
                            ],
                            translateX: d[0],
                            translateY: d[1],
                            rotation: h
                        };
                        c.plotX = d[0];
                        c.plotY = d[1]
                    })
                };
                b.prototype.drawPoints = function() {
                    var b = this,
                        a = b.chart,
                        d = b.yAxis.center,
                        c = b.pivot,
                        p = b.options,
                        f = p.pivot,
                        A = a.renderer;
                    b.points.forEach(function(f) {
                        var d = f.graphic,
                            c = f.shapeArgs,
                            v = c.d,
                            q = k(p.dial, f.dial);
                        d ? (d.animate(c), c.d = v) : f.graphic = A[f.shapeType](c).attr({
                            rotation: c.rotation,
                            zIndex: 1
                        }).addClass("highcharts-dial").add(b.group);
                        if (!a.styledMode) f.graphic[d ? "animate" : "attr"]({
                            stroke: q.borderColor || "none",
                            "stroke-width": q.borderWidth || 0,
                            fill: q.backgroundColor || h.neutralColor100
                        })
                    });
                    c ? c.animate({
                        translateX: d[0],
                        translateY: d[1]
                    }) : (b.pivot = A.circle(0, 0, l(f.radius, 5)).attr({
                        zIndex: 2
                    }).addClass("highcharts-pivot").translate(d[0],
                        d[1]).add(b.group), a.styledMode || b.pivot.attr({
                        "stroke-width": f.borderWidth || 0,
                        stroke: f.borderColor || h.neutralColor20,
                        fill: f.backgroundColor || h.neutralColor100
                    }))
                };
                b.prototype.animate = function(b) {
                    var a = this;
                    b || a.points.forEach(function(b) {
                        var d = b.graphic;
                        d && (d.attr({
                            rotation: 180 * a.yAxis.startAngleRad / Math.PI
                        }), d.animate({
                            rotation: b.shapeArgs.rotation
                        }, a.options.animation))
                    })
                };
                b.prototype.render = function() {
                    this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex,
                        this.chart.seriesGroup);
                    d.prototype.render.call(this);
                    this.group.clip(this.chart.clipRect)
                };
                b.prototype.setData = function(b, a) {
                    d.prototype.setData.call(this, b, !1);
                    this.processData();
                    this.generatePoints();
                    l(a, !0) && this.chart.redraw()
                };
                b.prototype.hasData = function() {
                    return !!this.points.length
                };
                b.defaultOptions = k(d.defaultOptions, {
                    dataLabels: {
                        borderColor: h.neutralColor20,
                        borderRadius: 3,
                        borderWidth: 1,
                        crop: !1,
                        defer: !1,
                        enabled: !0,
                        verticalAlign: "top",
                        y: 15,
                        zIndex: 2
                    },
                    dial: {},
                    pivot: {},
                    tooltip: {
                        headerFormat: ""
                    },
                    showInLegend: !1
                });
                return b
            }(d);
            b(a.prototype, {
                angular: !0,
                directTouch: !0,
                drawGraph: c,
                drawTracker: r.prototype.drawTracker,
                fixedBox: !0,
                forceDL: !0,
                noSharedTooltip: !0,
                pointClass: e,
                trackerGroups: ["group", "dataLabelsGroup"]
            });
            g.registerSeriesType("gauge", a);
            "";
            return a
        });
    z(e, "Series/BoxPlot/BoxPlotSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c, h, g, a) {
        var u = this && this.__extends || function() {
            var a =
                function(b, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d])
                    };
                    return a(b, d)
                };
            return function(b, d) {
                function c() {
                    this.constructor = b
                }
                a(b, d);
                b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
            }
        }();
        c = c.noop;
        var d = a.extend,
            r = a.merge,
            n = a.pick;
        a = function(a) {
            function b() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            u(b, a);
            b.prototype.pointAttribs =
                function() {
                    return {}
                };
            b.prototype.translate = function() {
                var b = this.yAxis,
                    d = this.pointArrayMap;
                a.prototype.translate.apply(this);
                this.points.forEach(function(a) {
                    d.forEach(function(d) {
                        null !== a[d] && (a[d + "Plot"] = b.translate(a[d], 0, 1, 0, 1))
                    });
                    a.plotHigh = a.highPlot
                })
            };
            b.prototype.drawPoints = function() {
                var a = this,
                    b = a.options,
                    d = a.chart,
                    c = d.renderer,
                    g, h, e, r, q, p, f = 0,
                    A, v, m, D, I = !1 !== a.doQuartiles,
                    C, u = a.options.whiskerLength;
                a.points.forEach(function(k) {
                    var l = k.graphic,
                        t = l ? "animate" : "attr",
                        E = k.shapeArgs,
                        x = {},
                        y = {},
                        w = {},
                        J = {},
                        B = k.color || a.color;
                    "undefined" !== typeof k.plotY && (A = Math.round(E.width), v = Math.floor(E.x), m = v + A, D = Math.round(A / 2), g = Math.floor(I ? k.q1Plot : k.lowPlot), h = Math.floor(I ? k.q3Plot : k.lowPlot), e = Math.floor(k.highPlot), r = Math.floor(k.lowPlot), l || (k.graphic = l = c.g("point").add(a.group), k.stem = c.path().addClass("highcharts-boxplot-stem").add(l), u && (k.whiskers = c.path().addClass("highcharts-boxplot-whisker").add(l)), I && (k.box = c.path(void 0).addClass("highcharts-boxplot-box").add(l)), k.medianShape = c.path(void 0).addClass("highcharts-boxplot-median").add(l)),
                        d.styledMode || (y.stroke = k.stemColor || b.stemColor || B, y["stroke-width"] = n(k.stemWidth, b.stemWidth, b.lineWidth), y.dashstyle = k.stemDashStyle || b.stemDashStyle || b.dashStyle, k.stem.attr(y), u && (w.stroke = k.whiskerColor || b.whiskerColor || B, w["stroke-width"] = n(k.whiskerWidth, b.whiskerWidth, b.lineWidth), w.dashstyle = k.whiskerDashStyle || b.whiskerDashStyle || b.dashStyle, k.whiskers.attr(w)), I && (x.fill = k.fillColor || b.fillColor || B, x.stroke = b.lineColor || B, x["stroke-width"] = b.lineWidth || 0, x.dashstyle = k.boxDashStyle || b.boxDashStyle ||
                            b.dashStyle, k.box.attr(x)), J.stroke = k.medianColor || b.medianColor || B, J["stroke-width"] = n(k.medianWidth, b.medianWidth, b.lineWidth), J.dashstyle = k.medianDashStyle || b.medianDashStyle || b.dashStyle, k.medianShape.attr(J)), p = k.stem.strokeWidth() % 2 / 2, f = v + D + p, l = [
                            ["M", f, h],
                            ["L", f, e],
                            ["M", f, g],
                            ["L", f, r]
                        ], k.stem[t]({
                            d: l
                        }), I && (p = k.box.strokeWidth() % 2 / 2, g = Math.floor(g) + p, h = Math.floor(h) + p, v += p, m += p, l = [
                            ["M", v, h],
                            ["L", v, g],
                            ["L", m, g],
                            ["L", m, h],
                            ["L", v, h],
                            ["Z"]
                        ], k.box[t]({
                            d: l
                        })), u && (p = k.whiskers.strokeWidth() % 2 / 2, e +=
                            p, r += p, C = /%$/.test(u) ? D * parseFloat(u) / 100 : u / 2, l = [
                                ["M", f - C, e],
                                ["L", f + C, e],
                                ["M", f - C, r],
                                ["L", f + C, r]
                            ], k.whiskers[t]({
                                d: l
                            })), q = Math.round(k.medianPlot), p = k.medianShape.strokeWidth() % 2 / 2, q += p, l = [
                            ["M", v, q],
                            ["L", m, q]
                        ], k.medianShape[t]({
                            d: l
                        }))
                })
            };
            b.prototype.toYData = function(b) {
                return [b.low, b.q1, b.median, b.q3, b.high]
            };
            b.defaultOptions = r(e.defaultOptions, {
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
                },
                whiskerLength: "50%",
                fillColor: h.backgroundColor,
                lineWidth: 1,
                medianWidth: 2,
                whiskerWidth: 2
            });
            return b
        }(e);
        d(a.prototype, {
            pointArrayMap: ["low", "q1", "median", "q3", "high"],
            pointValKey: "high",
            drawDataLabels: c,
            setStackedPoints: c
        });
        g.registerSeriesType("boxplot", a);
        "";
        return a
    });
    z(e, "Series/ErrorBar/ErrorBarSeries.js", [e["Series/BoxPlot/BoxPlotSeries.js"], e["Series/Column/ColumnSeries.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c, h, g, a) {
        var u = this &&
            this.__extends || function() {
                var a = function(b, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d])
                    };
                    return a(b, d)
                };
                return function(b, d) {
                    function c() {
                        this.constructor = b
                    }
                    a(b, d);
                    b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
                }
            }(),
            d = g.seriesTypes.arearange,
            r = a.merge;
        a = a.extend;
        var n = function(a) {
            function b() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            u(b, a);
            b.prototype.getColumnMetrics = function() {
                return this.linkedParent && this.linkedParent.columnMetrics || c.prototype.getColumnMetrics.call(this)
            };
            b.prototype.drawDataLabels = function() {
                var b = this.pointValKey;
                d && (d.prototype.drawDataLabels.call(this), this.data.forEach(function(a) {
                    a.y = a[b]
                }))
            };
            b.prototype.toYData = function(b) {
                return [b.low, b.high]
            };
            b.defaultOptions = r(e.defaultOptions, {
                color: h.neutralColor100,
                grouping: !1,
                linkedTo: ":previous",
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                whiskerWidth: null
            });
            return b
        }(e);
        a(n.prototype, {
            pointArrayMap: ["low", "high"],
            pointValKey: "high",
            doQuartiles: !1
        });
        g.registerSeriesType("errorbar", n);
        "";
        return n
    });
    z(e, "Core/Axis/WaterfallAxis.js", [e["Extensions/Stacking.js"], e["Core/Utilities.js"]], function(e, c) {
        var h = c.addEvent,
            g = c.objectEach,
            a;
        (function(a) {
            function d() {
                var b = this.waterfall.stacks;
                b && (b.changed = !1, delete b.alreadyChanged)
            }

            function c() {
                var b = this.options.stackLabels;
                b && b.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals()
            }

            function u() {
                for (var b = this.axes, a = this.series, d = a.length; d--;) a[d].options.stacking && (b.forEach(function(b) {
                    b.isXAxis || (b.waterfall.stacks.changed = !0)
                }), d = 0)
            }

            function x() {
                this.waterfall || (this.waterfall = new b(this))
            }
            var b = function() {
                function b(b) {
                    this.axis = b;
                    this.stacks = {
                        changed: !1
                    }
                }
                b.prototype.renderStackTotals = function() {
                    var b = this.axis,
                        a = b.waterfall.stacks,
                        d = b.stacking && b.stacking.stackTotalGroup,
                        c = new e(b, b.options.stackLabels, !1, 0, void 0);
                    this.dummyStackItem = c;
                    g(a, function(b) {
                        g(b, function(b) {
                            c.total =
                                b.stackTotal;
                            b.label && (c.label = b.label);
                            e.prototype.render.call(c, d);
                            b.label = c.label;
                            delete c.label
                        })
                    });
                    c.total = null
                };
                return b
            }();
            a.Composition = b;
            a.compose = function(b, a) {
                h(b, "init", x);
                h(b, "afterBuildStacks", d);
                h(b, "afterRender", c);
                h(a, "beforeRedraw", u)
            }
        })(a || (a = {}));
        return a
    });
    z(e, "Series/Waterfall/WaterfallPoint.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(e, c, h) {
        var g = this && this.__extends || function() {
                var a = function(d, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, d) {
                        a.__proto__ = d
                    } || function(a, d) {
                        for (var b in d) d.hasOwnProperty(b) && (a[b] = d[b])
                    };
                    return a(d, c)
                };
                return function(d, c) {
                    function g() {
                        this.constructor = d
                    }
                    a(d, c);
                    d.prototype = null === c ? Object.create(c) : (g.prototype = c.prototype, new g)
                }
            }(),
            a = h.isNumber;
        return function(h) {
            function d() {
                var a = null !== h && h.apply(this, arguments) || this;
                a.options = void 0;
                a.series = void 0;
                return a
            }
            g(d, h);
            d.prototype.getClassName = function() {
                var a = c.prototype.getClassName.call(this);
                this.isSum ?
                    a += " highcharts-sum" : this.isIntermediateSum && (a += " highcharts-intermediate-sum");
                return a
            };
            d.prototype.isValid = function() {
                return a(this.y) || this.isSum || !!this.isIntermediateSum
            };
            return d
        }(e.prototype.pointClass)
    });
    z(e, "Series/Waterfall/WaterfallSeries.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Core/Axis/WaterfallAxis.js"], e["Series/Waterfall/WaterfallPoint.js"]], function(e, c, h, g, a, u, d) {
        var r = this && this.__extends ||
            function() {
                var b = function(a, d) {
                    b = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, f) {
                        b.__proto__ = f
                    } || function(b, f) {
                        for (var a in f) f.hasOwnProperty(a) && (b[a] = f[a])
                    };
                    return b(a, d)
                };
                return function(a, d) {
                    function p() {
                        this.constructor = a
                    }
                    b(a, d);
                    a.prototype = null === d ? Object.create(d) : (p.prototype = d.prototype, new p)
                }
            }(),
            n = g.seriesTypes,
            x = n.column,
            b = n.line,
            k = a.arrayMax,
            l = a.arrayMin,
            t = a.correctFloat;
        n = a.extend;
        var w = a.merge,
            B = a.objectEach,
            z = a.pick;
        a = function(a) {
            function d() {
                var b = null !== a &&
                    a.apply(this, arguments) || this;
                b.chart = void 0;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                b.stackedYNeg = void 0;
                b.stackedYPos = void 0;
                b.stackKey = void 0;
                b.xData = void 0;
                b.yAxis = void 0;
                b.yData = void 0;
                return b
            }
            r(d, a);
            d.prototype.generatePoints = function() {
                var b;
                x.prototype.generatePoints.apply(this);
                var a = 0;
                for (b = this.points.length; a < b; a++) {
                    var f = this.points[a];
                    var d = this.processedYData[a];
                    if (f.isIntermediateSum || f.isSum) f.y = t(d)
                }
            };
            d.prototype.translate = function() {
                var b = this.options,
                    a = this.yAxis,
                    f, d = z(b.minPointLength,
                        5),
                    c = d / 2,
                    m = b.threshold,
                    k = b.stacking,
                    g = a.waterfall.stacks[this.stackKey];
                x.prototype.translate.apply(this);
                var h = f = m;
                var l = this.points;
                var e = 0;
                for (b = l.length; e < b; e++) {
                    var r = l[e];
                    var u = this.processedYData[e];
                    var t = r.shapeArgs;
                    var n = [0, u];
                    var y = r.y;
                    if (k) {
                        if (g) {
                            n = g[e];
                            if ("overlap" === k) {
                                var w = n.stackState[n.stateIndex--];
                                w = 0 <= y ? w : w - y;
                                Object.hasOwnProperty.call(n, "absolutePos") && delete n.absolutePos;
                                Object.hasOwnProperty.call(n, "absoluteNeg") && delete n.absoluteNeg
                            } else 0 <= y ? (w = n.threshold + n.posTotal, n.posTotal -=
                                y) : (w = n.threshold + n.negTotal, n.negTotal -= y, w -= y), !n.posTotal && Object.hasOwnProperty.call(n, "absolutePos") && (n.posTotal = n.absolutePos, delete n.absolutePos), !n.negTotal && Object.hasOwnProperty.call(n, "absoluteNeg") && (n.negTotal = n.absoluteNeg, delete n.absoluteNeg);
                            r.isSum || (n.connectorThreshold = n.threshold + n.stackTotal);
                            a.reversed ? (u = 0 <= y ? w - y : w + y, y = w) : (u = w, y = w - y);
                            r.below = u <= z(m, 0);
                            t.y = a.translate(u, 0, 1, 0, 1);
                            t.height = Math.abs(t.y - a.translate(y, 0, 1, 0, 1));
                            if (y = a.waterfall.dummyStackItem) y.x = e, y.label = g[e].label,
                                y.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[e], this.stackedYPos[e])
                        }
                    } else w = Math.max(h, h + y) + n[0], t.y = a.translate(w, 0, 1, 0, 1), r.isSum ? (t.y = a.translate(n[1], 0, 1, 0, 1), t.height = Math.min(a.translate(n[0], 0, 1, 0, 1), a.len) - t.y) : r.isIntermediateSum ? (0 <= y ? (u = n[1] + f, y = f) : (u = f, y = n[1] + f), a.reversed && (u ^= y, y ^= u, u ^= y), t.y = a.translate(u, 0, 1, 0, 1), t.height = Math.abs(t.y - Math.min(a.translate(y, 0, 1, 0, 1), a.len)), f += n[1]) : (t.height = 0 < u ? a.translate(h, 0, 1, 0, 1) - t.y : a.translate(h, 0, 1, 0, 1) - a.translate(h - u,
                        0, 1, 0, 1), h += u, r.below = h < z(m, 0)), 0 > t.height && (t.y += t.height, t.height *= -1);
                    r.plotY = t.y = Math.round(t.y) - this.borderWidth % 2 / 2;
                    t.height = Math.max(Math.round(t.height), .001);
                    r.yBottom = t.y + t.height;
                    t.height <= d && !r.isNull ? (t.height = d, t.y -= c, r.plotY = t.y, r.minPointLengthOffset = 0 > r.y ? -c : c) : (r.isNull && (t.width = 0), r.minPointLengthOffset = 0);
                    t = r.plotY + (r.negative ? t.height : 0);
                    this.chart.inverted ? r.tooltipPos[0] = a.len - t : r.tooltipPos[1] = t
                }
            };
            d.prototype.processData = function(b) {
                var d = this.options,
                    f = this.yData,
                    c = d.data,
                    v = f.length,
                    m = d.threshold || 0,
                    k, g, q, h, l;
                for (l = g = k = q = h = 0; l < v; l++) {
                    var e = f[l];
                    var r = c && c[l] ? c[l] : {};
                    "sum" === e || r.isSum ? f[l] = t(g) : "intermediateSum" === e || r.isIntermediateSum ? (f[l] = t(k), k = 0) : (g += e, k += e);
                    q = Math.min(g, q);
                    h = Math.max(g, h)
                }
                a.prototype.processData.call(this, b);
                d.stacking || (this.dataMin = q + m, this.dataMax = h)
            };
            d.prototype.toYData = function(b) {
                return b.isSum ? "sum" : b.isIntermediateSum ? "intermediateSum" : b.y
            };
            d.prototype.updateParallelArrays = function(b, d) {
                a.prototype.updateParallelArrays.call(this, b, d);
                if ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) this.yData[0] = null
            };
            d.prototype.pointAttribs = function(b, a) {
                var f = this.options.upColor;
                f && !b.options.color && (b.color = 0 < b.y ? f : null);
                b = x.prototype.pointAttribs.call(this, b, a);
                delete b.dashstyle;
                return b
            };
            d.prototype.getGraphPath = function() {
                return [
                    ["M", 0, 0]
                ]
            };
            d.prototype.getCrispPath = function() {
                var b = this.data,
                    a = this.yAxis,
                    f = b.length,
                    d = Math.round(this.graph.strokeWidth()) % 2 / 2,
                    c = Math.round(this.borderWidth) % 2 / 2,
                    m = this.xAxis.reversed,
                    k = this.yAxis.reversed,
                    g = this.options.stacking,
                    h = [],
                    l;
                for (l = 1; l < f; l++) {
                    var e = b[l].shapeArgs;
                    var t = b[l - 1];
                    var r = b[l - 1].shapeArgs;
                    var u = a.waterfall.stacks[this.stackKey];
                    var n = 0 < t.y ? -r.height : 0;
                    u && r && e && (u = u[l - 1], g ? (u = u.connectorThreshold, n = Math.round(a.translate(u, 0, 1, 0, 1) + (k ? n : 0)) - d) : n = r.y + t.minPointLengthOffset + c - d, h.push(["M", (r.x || 0) + (m ? 0 : r.width || 0), n], ["L", (e.x || 0) + (m ? e.width || 0 : 0), n]));
                    r && h.length && (!g && 0 > t.y && !k || 0 < t.y && k) && (h[h.length - 2][2] += r.height, h[h.length - 1][2] += r.height)
                }
                return h
            };
            d.prototype.drawGraph = function() {
                b.prototype.drawGraph.call(this);
                this.graph.attr({
                    d: this.getCrispPath()
                })
            };
            d.prototype.setStackedPoints = function() {
                function b(b, f, a, d) {
                    if (z)
                        for (a; a < z; a++) w.stackState[a] += d;
                    else w.stackState[0] = b, z = w.stackState.length;
                    w.stackState.push(w.stackState[z - 1] + f)
                }
                var a = this.options,
                    f = this.yAxis.waterfall.stacks,
                    d = a.threshold,
                    c = d || 0,
                    m = c,
                    k = this.stackKey,
                    g = this.xData,
                    h = g.length,
                    l, e, r;
                this.yAxis.stacking.usePercentage = !1;
                var t = e = r = c;
                if (this.visible || !this.chart.options.chart.ignoreHiddenSeries) {
                    var u = f.changed;
                    (l = f.alreadyChanged) && 0 > l.indexOf(k) &&
                        (u = !0);
                    f[k] || (f[k] = {});
                    l = f[k];
                    for (var n = 0; n < h; n++) {
                        var y = g[n];
                        if (!l[y] || u) l[y] = {
                            negTotal: 0,
                            posTotal: 0,
                            stackTotal: 0,
                            threshold: 0,
                            stateIndex: 0,
                            stackState: [],
                            label: u && l[y] ? l[y].label : void 0
                        };
                        var w = l[y];
                        var x = this.yData[n];
                        0 <= x ? w.posTotal += x : w.negTotal += x;
                        var B = a.data[n];
                        y = w.absolutePos = w.posTotal;
                        var K = w.absoluteNeg = w.negTotal;
                        w.stackTotal = y + K;
                        var z = w.stackState.length;
                        B && B.isIntermediateSum ? (b(r, e, 0, r), r = e, e = d, c ^= m, m ^= c, c ^= m) : B && B.isSum ? (b(d, t, z), c = d) : (b(c, x, 0, t), B && (t += x, e += x));
                        w.stateIndex++;
                        w.threshold =
                            c;
                        c += w.stackTotal
                    }
                    f.changed = !1;
                    f.alreadyChanged || (f.alreadyChanged = []);
                    f.alreadyChanged.push(k)
                }
            };
            d.prototype.getExtremes = function() {
                var b = this.options.stacking;
                if (b) {
                    var a = this.yAxis;
                    a = a.waterfall.stacks;
                    var f = this.stackedYNeg = [];
                    var d = this.stackedYPos = [];
                    "overlap" === b ? B(a[this.stackKey], function(b) {
                        f.push(l(b.stackState));
                        d.push(k(b.stackState))
                    }) : B(a[this.stackKey], function(b) {
                        f.push(b.negTotal + b.threshold);
                        d.push(b.posTotal + b.threshold)
                    });
                    return {
                        dataMin: l(f),
                        dataMax: k(d)
                    }
                }
                return {
                    dataMin: this.dataMin,
                    dataMax: this.dataMax
                }
            };
            d.defaultOptions = w(x.defaultOptions, {
                dataLabels: {
                    inside: !0
                },
                lineWidth: 1,
                lineColor: h.neutralColor80,
                dashStyle: "Dot",
                borderColor: h.neutralColor80,
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            });
            return d
        }(x);
        n(a.prototype, {
            getZonesGraphs: b.prototype.getZonesGraphs,
            pointValKey: "y",
            showLine: !0,
            pointClass: d
        });
        g.registerSeriesType("waterfall", a);
        u.compose(c.Axis, e);
        "";
        return a
    });
    z(e, "Series/Polygon/PolygonSeries.js", [e["Core/Globals.js"], e["Mixins/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"],
        e["Core/Utilities.js"]
    ], function(e, c, h, g) {
        var a = this && this.__extends || function() {
            var b = function(a, d) {
                b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, a) {
                    b.__proto__ = a
                } || function(b, a) {
                    for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d])
                };
                return b(a, d)
            };
            return function(a, d) {
                function c() {
                    this.constructor = a
                }
                b(a, d);
                a.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
            }
        }();
        e = e.noop;
        var u = h.series,
            d = h.seriesTypes,
            r = d.area,
            n = d.line,
            x = d.scatter;
        d = g.extend;
        var b = g.merge;
        g = function(d) {
            function c() {
                var b =
                    null !== d && d.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            a(c, d);
            c.prototype.getGraphPath = function() {
                for (var b = n.prototype.getGraphPath.call(this), a = b.length + 1; a--;)(a === b.length || "M" === b[a][0]) && 0 < a && b.splice(a, 0, ["Z"]);
                return this.areaPath = b
            };
            c.prototype.drawGraph = function() {
                this.options.fillColor = this.color;
                r.prototype.drawGraph.call(this)
            };
            c.defaultOptions = b(x.defaultOptions, {
                marker: {
                    enabled: !1,
                    states: {
                        hover: {
                            enabled: !1
                        }
                    }
                },
                stickyTracking: !1,
                tooltip: {
                    followPointer: !0,
                    pointFormat: ""
                },
                trackByArea: !0
            });
            return c
        }(x);
        d(g.prototype, {
            type: "polygon",
            drawLegendSymbol: c.drawRectangle,
            drawTracker: u.prototype.drawTracker,
            setStackedPoints: e
        });
        h.registerSeriesType("polygon", g);
        "";
        return g
    });
    z(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, c, h) {
        var g = this && this.__extends || function() {
            var a = function(c, d) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, d) {
                    a.__proto__ = d
                } || function(a,
                    d) {
                    for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c])
                };
                return a(c, d)
            };
            return function(c, d) {
                function g() {
                    this.constructor = c
                }
                a(c, d);
                c.prototype = null === d ? Object.create(d) : (g.prototype = d.prototype, new g)
            }
        }();
        h = h.extend;
        c = function(a) {
            function c() {
                var d = null !== a && a.apply(this, arguments) || this;
                d.options = void 0;
                d.series = void 0;
                return d
            }
            g(c, a);
            c.prototype.haloPath = function(a) {
                return e.prototype.haloPath.call(this, 0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a)
            };
            return c
        }(c.seriesTypes.scatter.prototype.pointClass);
        h(c.prototype, {
            ttBelow: !1
        });
        return c
    });
    z(e, "Series/Bubble/BubbleLegend.js", [e["Core/Chart/Chart.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Legend.js"], e["Core/Color/Palette.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(e, c, h, g, a, u, d) {
        var r = c.parse,
            n = h.noop;
        c = d.addEvent;
        var x = d.arrayMax,
            b = d.arrayMin,
            k = d.isNumber,
            l = d.merge,
            t = d.objectEach,
            w = d.pick,
            B = d.setOptions,
            z = d.stableSort,
            G = d.wrap;
        "";
        B({
            legend: {
                bubbleLegend: {
                    borderColor: void 0,
                    borderWidth: 2,
                    className: void 0,
                    color: void 0,
                    connectorClassName: void 0,
                    connectorColor: void 0,
                    connectorDistance: 60,
                    connectorWidth: 1,
                    enabled: !1,
                    labels: {
                        className: void 0,
                        allowOverlap: !1,
                        format: "",
                        formatter: void 0,
                        align: "right",
                        style: {
                            fontSize: 10,
                            color: void 0
                        },
                        x: 0,
                        y: 0
                    },
                    maxSize: 60,
                    minSize: 10,
                    legendIndex: 0,
                    ranges: {
                        value: void 0,
                        borderColor: void 0,
                        color: void 0,
                        connectorColor: void 0
                    },
                    sizeBy: "area",
                    sizeByAbsoluteValue: !1,
                    zIndex: 1,
                    zThreshold: 0
                }
            }
        });
        B = function() {
            function c(b, a) {
                this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel =
                    this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0;
                this.setState = n;
                this.init(b, a)
            }
            c.prototype.init = function(b, a) {
                this.options = b;
                this.visible = !0;
                this.chart = a.chart;
                this.legend = a
            };
            c.prototype.addToLegend = function(b) {
                b.splice(this.options.legendIndex, 0, this)
            };
            c.prototype.drawLegendSymbol = function(b) {
                var a = this.chart,
                    f = this.options,
                    d = w(b.options.itemDistance, 20),
                    c = f.ranges;
                var m = f.connectorDistance;
                this.fontMetrics =
                    a.renderer.fontMetrics(f.labels.style.fontSize.toString() + "px");
                c && c.length && k(c[0].value) ? (z(c, function(b, a) {
                    return a.value - b.value
                }), this.ranges = c, this.setOptions(), this.render(), a = this.getMaxLabelSize(), c = this.ranges[0].radius, b = 2 * c, m = m - c + a.width, m = 0 < m ? m : 0, this.maxLabel = a, this.movementX = "left" === f.labels.align ? m : 0, this.legendItemWidth = b + m + d, this.legendItemHeight = b + this.fontMetrics.h / 2) : b.options.bubbleLegend.autoRanges = !0
            };
            c.prototype.setOptions = function() {
                var b = this.ranges,
                    a = this.options,
                    f = this.chart.series[a.seriesIndex],
                    d = this.legend.baseline,
                    c = {
                        "z-index": a.zIndex,
                        "stroke-width": a.borderWidth
                    },
                    m = {
                        "z-index": a.zIndex,
                        "stroke-width": a.connectorWidth
                    },
                    k = this.getLabelStyles(),
                    g = f.options.marker.fillOpacity,
                    h = this.chart.styledMode;
                b.forEach(function(p, v) {
                    h || (c.stroke = w(p.borderColor, a.borderColor, f.color), c.fill = w(p.color, a.color, 1 !== g ? r(f.color).setOpacity(g).get("rgba") : f.color), m.stroke = w(p.connectorColor, a.connectorColor, f.color));
                    b[v].radius = this.getRangeRadius(p.value);
                    b[v] = l(b[v], {
                        center: b[0].radius - b[v].radius +
                            d
                    });
                    h || l(!0, b[v], {
                        bubbleStyle: l(!1, c),
                        connectorStyle: l(!1, m),
                        labelStyle: k
                    })
                }, this)
            };
            c.prototype.getLabelStyles = function() {
                var b = this.options,
                    d = {},
                    f = "left" === b.labels.align,
                    c = this.legend.options.rtl;
                t(b.labels.style, function(b, a) {
                    "color" !== a && "fontSize" !== a && "z-index" !== a && (d[a] = b)
                });
                return l(!1, d, {
                    "font-size": b.labels.style.fontSize,
                    fill: w(b.labels.style.color, a.neutralColor100),
                    "z-index": b.zIndex,
                    align: c || f ? "right" : "left"
                })
            };
            c.prototype.getRangeRadius = function(b) {
                var a = this.options;
                return this.chart.series[this.options.seriesIndex].getRadius.call(this,
                    a.ranges[a.ranges.length - 1].value, a.ranges[0].value, a.minSize, a.maxSize, b)
            };
            c.prototype.render = function() {
                var b = this.chart.renderer,
                    a = this.options.zThreshold;
                this.symbols || (this.symbols = {
                    connectors: [],
                    bubbleItems: [],
                    labels: []
                });
                this.legendSymbol = b.g("bubble-legend");
                this.legendItem = b.g("bubble-legend-item");
                this.legendSymbol.translateX = 0;
                this.legendSymbol.translateY = 0;
                this.ranges.forEach(function(b) {
                    b.value >= a && this.renderRange(b)
                }, this);
                this.legendSymbol.add(this.legendItem);
                this.legendItem.add(this.legendGroup);
                this.hideOverlappingLabels()
            };
            c.prototype.renderRange = function(b) {
                var a = this.options,
                    f = a.labels,
                    d = this.chart.renderer,
                    c = this.symbols,
                    m = c.labels,
                    k = b.center,
                    g = Math.abs(b.radius),
                    h = a.connectorDistance || 0,
                    e = f.align,
                    l = f.style.fontSize;
                h = this.legend.options.rtl || "left" === e ? -h : h;
                f = a.connectorWidth;
                var q = this.ranges[0].radius || 0,
                    r = k - g - a.borderWidth / 2 + f / 2;
                l = l / 2 - (this.fontMetrics.h - l) / 2;
                var t = d.styledMode;
                "center" === e && (h = 0, a.connectorDistance = 0, b.labelStyle.align = "center");
                e = r + a.labels.y;
                var u = q + h + a.labels.x;
                c.bubbleItems.push(d.circle(q, k + ((r % 1 ? 1 : .5) - (f % 2 ? 0 : .5)), g).attr(t ? {} : b.bubbleStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (a.className || "")).add(this.legendSymbol));
                c.connectors.push(d.path(d.crispLine([
                    ["M", q, r],
                    ["L", q + h, r]
                ], a.connectorWidth)).attr(t ? {} : b.connectorStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (a.connectorClassName || "")).add(this.legendSymbol));
                b = d.text(this.formatLabel(b),
                    u, e + l).attr(t ? {} : b.labelStyle).addClass("highcharts-bubble-legend-labels " + (a.labels.className || "")).add(this.legendSymbol);
                m.push(b);
                b.placed = !0;
                b.alignAttr = {
                    x: u,
                    y: e + l
                }
            };
            c.prototype.getMaxLabelSize = function() {
                var b, a;
                this.symbols.labels.forEach(function(f) {
                    a = f.getBBox(!0);
                    b = b ? a.width > b.width ? a : b : a
                });
                return b || {}
            };
            c.prototype.formatLabel = function(b) {
                var a = this.options,
                    f = a.labels.formatter;
                a = a.labels.format;
                var c = this.chart.numberFormatter;
                return a ? d.format(a, b) : f ? f.call(b) : c(b.value, 1)
            };
            c.prototype.hideOverlappingLabels =
                function() {
                    var b = this.chart,
                        a = this.symbols;
                    !this.options.labels.allowOverlap && a && (b.hideOverlappingLabels(a.labels), a.labels.forEach(function(b, d) {
                        b.newOpacity ? b.newOpacity !== b.oldOpacity && a.connectors[d].show() : a.connectors[d].hide()
                    }))
                };
            c.prototype.getRanges = function() {
                var a = this.legend.bubbleLegend,
                    d = a.options.ranges,
                    f, c = Number.MAX_VALUE,
                    g = -Number.MAX_VALUE;
                a.chart.series.forEach(function(a) {
                    a.isBubble && !a.ignoreSeries && (f = a.zData.filter(k), f.length && (c = w(a.options.zMin, Math.min(c, Math.max(b(f),
                        !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), g = w(a.options.zMax, Math.max(g, x(f)))))
                });
                var m = c === g ? [{
                    value: g
                }] : [{
                    value: c
                }, {
                    value: (c + g) / 2
                }, {
                    value: g,
                    autoRanges: !0
                }];
                d.length && d[0].radius && m.reverse();
                m.forEach(function(b, a) {
                    d && d[a] && (m[a] = l(!1, d[a], b))
                });
                return m
            };
            c.prototype.predictBubbleSizes = function() {
                var b = this.chart,
                    a = this.fontMetrics,
                    f = b.legend.options,
                    d = "horizontal" === f.layout,
                    c = d ? b.legend.lastLineHeight : 0,
                    m = b.plotSizeX,
                    g = b.plotSizeY,
                    k = b.series[this.options.seriesIndex];
                b = Math.ceil(k.minPxSize);
                var h = Math.ceil(k.maxPxSize);
                k = k.options.maxSize;
                var e = Math.min(g, m);
                if (f.floating || !/%$/.test(k)) a = h;
                else if (k = parseFloat(k), a = (e + c - a.h / 2) * k / 100 / (k / 100 + 1), d && g - a >= m || !d && m - a >= g) a = h;
                return [b, Math.ceil(a)]
            };
            c.prototype.updateRanges = function(b, a) {
                var f = this.legend.options.bubbleLegend;
                f.minSize = b;
                f.maxSize = a;
                f.ranges = this.getRanges()
            };
            c.prototype.correctSizes = function() {
                var b = this.legend,
                    a = this.chart.series[this.options.seriesIndex];
                1 < Math.abs(Math.ceil(a.maxPxSize) - this.options.maxSize) &&
                    (this.updateRanges(this.options.minSize, a.maxPxSize), b.render())
            };
            return c
        }();
        c(g, "afterGetAllItems", function(b) {
            var a = this.bubbleLegend,
                d = this.options,
                f = d.bubbleLegend,
                c = this.chart.getVisibleBubbleSeriesIndex();
            a && a.ranges && a.ranges.length && (f.ranges.length && (f.autoRanges = !!f.ranges[0].autoRanges), this.destroyItem(a));
            0 <= c && d.enabled && f.enabled && (f.seriesIndex = c, this.bubbleLegend = new h.BubbleLegend(f, this), this.bubbleLegend.addToLegend(b.allItems))
        });
        e.prototype.getVisibleBubbleSeriesIndex = function() {
            for (var b =
                    this.series, a = 0; a < b.length;) {
                if (b[a] && b[a].isBubble && b[a].visible && b[a].zData.length) return a;
                a++
            }
            return -1
        };
        g.prototype.getLinesHeights = function() {
            var b = this.allItems,
                a = [],
                d = b.length,
                f, c = 0;
            for (f = 0; f < d; f++)
                if (b[f].legendItemHeight && (b[f].itemHeight = b[f].legendItemHeight), b[f] === b[d - 1] || b[f + 1] && b[f]._legendItemPos[1] !== b[f + 1]._legendItemPos[1]) {
                    a.push({
                        height: 0
                    });
                    var k = a[a.length - 1];
                    for (c; c <= f; c++) b[c].itemHeight > k.height && (k.height = b[c].itemHeight);
                    k.step = f
                } return a
        };
        g.prototype.retranslateItems = function(b) {
            var a,
                d, f, c = this.options.rtl,
                k = 0;
            this.allItems.forEach(function(m, g) {
                a = m.legendGroup.translateX;
                d = m._legendItemPos[1];
                if ((f = m.movementX) || c && m.ranges) f = c ? a - m.options.maxSize / 2 : a + f, m.legendGroup.attr({
                    translateX: f
                });
                g > b[k].step && k++;
                m.legendGroup.attr({
                    translateY: Math.round(d + b[k].height / 2)
                });
                m._legendItemPos[1] = d + b[k].height / 2
            })
        };
        c(u, "legendItemClick", function() {
            var b = this.chart,
                a = this.visible,
                d = this.chart.legend;
            d && d.bubbleLegend && (this.visible = !a, this.ignoreSeries = a, b = 0 <= b.getVisibleBubbleSeriesIndex(),
                d.bubbleLegend.visible !== b && (d.update({
                    bubbleLegend: {
                        enabled: b
                    }
                }), d.bubbleLegend.visible = b), this.visible = a)
        });
        G(e.prototype, "drawChartBox", function(b, a, d) {
            var f = this.legend,
                c = 0 <= this.getVisibleBubbleSeriesIndex();
            if (f && f.options.enabled && f.bubbleLegend && f.options.bubbleLegend.autoRanges && c) {
                var k = f.bubbleLegend.options;
                c = f.bubbleLegend.predictBubbleSizes();
                f.bubbleLegend.updateRanges(c[0], c[1]);
                k.placed || (f.group.placed = !1, f.allItems.forEach(function(b) {
                    b.legendGroup.translateY = null
                }));
                f.render();
                this.getMargins();
                this.axes.forEach(function(b) {
                    b.visible && b.render();
                    k.placed || (b.setScale(), b.updateNames(), t(b.ticks, function(b) {
                        b.isNew = !0;
                        b.isNewLabel = !0
                    }))
                });
                k.placed = !0;
                this.getMargins();
                b.call(this, a, d);
                f.bubbleLegend.correctSizes();
                f.retranslateItems(f.getLinesHeights())
            } else b.call(this, a, d), f && f.options.enabled && f.bubbleLegend && (f.render(), f.retranslateItems(f.getLinesHeights()))
        });
        h.BubbleLegend = B;
        return h.BubbleLegend
    });
    z(e, "Series/Bubble/BubbleSeries.js", [e["Core/Axis/Axis.js"], e["Series/Bubble/BubblePoint.js"],
        e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]
    ], function(e, c, h, g, a, u, d) {
        var r = this && this.__extends || function() {
                var b = function(a, f) {
                    b = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var f in a) a.hasOwnProperty(f) && (b[f] = a[f])
                    };
                    return b(a, f)
                };
                return function(a, f) {
                    function d() {
                        this.constructor = a
                    }
                    b(a, f);
                    a.prototype = null === f ? Object.create(f) : (d.prototype = f.prototype,
                        new d)
                }
            }(),
            n = h.parse;
        h = g.noop;
        var x = u.seriesTypes;
        g = x.column;
        var b = x.scatter,
            k = d.arrayMax,
            l = d.arrayMin,
            t = d.clamp,
            w = d.extend,
            B = d.isNumber,
            z = d.merge,
            G = d.pick,
            y = d.pInt;
        d = function(d) {
            function c() {
                var b = null !== d && d.apply(this, arguments) || this;
                b.data = void 0;
                b.maxPxSize = void 0;
                b.minPxSize = void 0;
                b.options = void 0;
                b.points = void 0;
                b.radii = void 0;
                b.yData = void 0;
                b.zData = void 0;
                return b
            }
            r(c, d);
            c.prototype.animate = function(b) {
                !b && this.points.length < this.options.animationLimit && this.points.forEach(function(b) {
                    var a =
                        b.graphic;
                    a && a.width && (this.hasRendered || a.attr({
                        x: b.plotX,
                        y: b.plotY,
                        width: 1,
                        height: 1
                    }), a.animate(this.markerAttribs(b), this.options.animation))
                }, this)
            };
            c.prototype.getRadii = function(b, a, d) {
                var f = this.zData,
                    c = this.yData,
                    k = d.minPxSize,
                    g = d.maxPxSize,
                    h = [];
                var e = 0;
                for (d = f.length; e < d; e++) {
                    var l = f[e];
                    h.push(this.getRadius(b, a, k, g, l, c[e]))
                }
                this.radii = h
            };
            c.prototype.getRadius = function(b, a, d, c, k, g) {
                var f = this.options,
                    m = "width" !== f.sizeBy,
                    h = f.zThreshold,
                    e = a - b,
                    l = .5;
                if (null === g || null === k) return null;
                if (B(k)) {
                    f.sizeByAbsoluteValue &&
                        (k = Math.abs(k - h), e = Math.max(a - h, Math.abs(b - h)), b = 0);
                    if (k < b) return d / 2 - 1;
                    0 < e && (l = (k - b) / e)
                }
                m && 0 <= l && (l = Math.sqrt(l));
                return Math.ceil(d + l * (c - d)) / 2
            };
            c.prototype.hasData = function() {
                return !!this.processedXData.length
            };
            c.prototype.pointAttribs = function(b, d) {
                var f = this.options.marker.fillOpacity;
                b = a.prototype.pointAttribs.call(this, b, d);
                1 !== f && (b.fill = n(b.fill).setOpacity(f).get("rgba"));
                return b
            };
            c.prototype.translate = function() {
                var b, a = this.data,
                    c = this.radii;
                d.prototype.translate.call(this);
                for (b = a.length; b--;) {
                    var k =
                        a[b];
                    var g = c ? c[b] : 0;
                    B(g) && g >= this.minPxSize / 2 ? (k.marker = w(k.marker, {
                        radius: g,
                        width: 2 * g,
                        height: 2 * g
                    }), k.dlBox = {
                        x: k.plotX - g,
                        y: k.plotY - g,
                        width: 2 * g,
                        height: 2 * g
                    }) : k.shapeArgs = k.plotY = k.dlBox = void 0
                }
            };
            c.defaultOptions = z(b.defaultOptions, {
                dataLabels: {
                    formatter: function() {
                        return this.point.z
                    },
                    inside: !0,
                    verticalAlign: "middle"
                },
                animationLimit: 250,
                marker: {
                    lineColor: null,
                    lineWidth: 1,
                    fillOpacity: .5,
                    radius: null,
                    states: {
                        hover: {
                            radiusPlus: 0
                        }
                    },
                    symbol: "circle"
                },
                minSize: 8,
                maxSize: "20%",
                softThreshold: !1,
                states: {
                    hover: {
                        halo: {
                            size: 5
                        }
                    }
                },
                tooltip: {
                    pointFormat: "({point.x}, {point.y}), Size: {point.z}"
                },
                turboThreshold: 0,
                zThreshold: 0,
                zoneAxis: "z"
            });
            return c
        }(b);
        w(d.prototype, {
            alignDataLabel: g.prototype.alignDataLabel,
            applyZones: h,
            bubblePadding: !0,
            buildKDTree: h,
            directTouch: !0,
            isBubble: !0,
            pointArrayMap: ["y", "z"],
            pointClass: c,
            parallelArrays: ["x", "y", "z"],
            trackerGroups: ["group", "dataLabelsGroup"],
            specialGroup: "group",
            zoneAxis: "z"
        });
        e.prototype.beforePadding = function() {
            var b = this,
                a = this.len,
                f = this.chart,
                d = 0,
                c = a,
                g = this.isXAxis,
                h = g ? "xData" :
                "yData",
                e = this.min,
                r = {},
                u = Math.min(f.plotWidth, f.plotHeight),
                n = Number.MAX_VALUE,
                w = -Number.MAX_VALUE,
                x = this.max - e,
                z = a / x,
                H = [];
            this.series.forEach(function(a) {
                var d = a.options;
                !a.bubblePadding || !a.visible && f.options.chart.ignoreHiddenSeries || (b.allowZoomOutside = !0, H.push(a), g && (["minSize", "maxSize"].forEach(function(b) {
                    var a = d[b],
                        f = /%$/.test(a);
                    a = y(a);
                    r[b] = f ? u * a / 100 : a
                }), a.minPxSize = r.minSize, a.maxPxSize = Math.max(r.maxSize, r.minSize), a = a.zData.filter(B), a.length && (n = G(d.zMin, t(l(a), !1 === d.displayNegative ?
                    d.zThreshold : -Number.MAX_VALUE, n)), w = G(d.zMax, Math.max(w, k(a))))))
            });
            H.forEach(function(a) {
                var f = a[h],
                    k = f.length;
                g && a.getRadii(n, w, a);
                if (0 < x)
                    for (; k--;)
                        if (B(f[k]) && b.dataMin <= f[k] && f[k] <= b.max) {
                            var m = a.radii ? a.radii[k] : 0;
                            d = Math.min((f[k] - e) * z - m, d);
                            c = Math.max((f[k] - e) * z + m, c)
                        }
            });
            H.length && 0 < x && !this.logarithmic && (c -= a, z *= (a + Math.max(0, d) - Math.min(c, a)) / a, [
                ["min", "userMin", d],
                ["max", "userMax", c]
            ].forEach(function(a) {
                "undefined" === typeof G(b.options[a[0]], b[a[1]]) && (b[a[0]] += a[2] / z)
            }))
        };
        u.registerSeriesType("bubble",
            d);
        "";
        "";
        return d
    });
    z(e, "Series/PackedBubble/PackedBubblePoint.js", [e["Core/Chart/Chart.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"]], function(e, c, h) {
        var g = this && this.__extends || function() {
            var a = function(c, d) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, d) {
                    a.__proto__ = d
                } || function(a, d) {
                    for (var c in d) d.hasOwnProperty(c) && (a[c] = d[c])
                };
                return a(c, d)
            };
            return function(c, d) {
                function g() {
                    this.constructor = c
                }
                a(c, d);
                c.prototype = null === d ? Object.create(d) : (g.prototype =
                    d.prototype, new g)
            }
        }();
        return function(a) {
            function h() {
                var d = null !== a && a.apply(this, arguments) || this;
                d.degree = NaN;
                d.mass = NaN;
                d.radius = NaN;
                d.options = void 0;
                d.series = void 0;
                d.value = null;
                return d
            }
            g(h, a);
            h.prototype.destroy = function() {
                this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
                return c.prototype.destroy.apply(this, arguments)
            };
            h.prototype.firePointEvent = function() {
                var a = this.series.options;
                if (this.isParentNode && a.parentNode) {
                    var g = a.allowPointSelect;
                    a.allowPointSelect = a.parentNode.allowPointSelect;
                    c.prototype.firePointEvent.apply(this, arguments);
                    a.allowPointSelect = g
                } else c.prototype.firePointEvent.apply(this, arguments)
            };
            h.prototype.select = function() {
                var a = this.series.chart;
                this.isParentNode ? (a.getSelectedPoints = a.getSelectedParentNodes, c.prototype.select.apply(this, arguments), a.getSelectedPoints = e.prototype.getSelectedPoints) : c.prototype.select.apply(this, arguments)
            };
            return h
        }(h.seriesTypes.bubble.prototype.pointClass)
    });
    z(e, "Series/Networkgraph/DraggableNodes.js",
        [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]],
        function(e, c, h) {
            var g = h.addEvent;
            c.dragNodesMixin = {
                onMouseDown: function(a, c) {
                    c = this.chart.pointer.normalize(c);
                    a.fixedPosition = {
                        chartX: c.chartX,
                        chartY: c.chartY,
                        plotX: a.plotX,
                        plotY: a.plotY
                    };
                    a.inDragMode = !0
                },
                onMouseMove: function(a, c) {
                    if (a.fixedPosition && a.inDragMode) {
                        var d = this.chart;
                        c = d.pointer.normalize(c);
                        var g = a.fixedPosition.chartX - c.chartX,
                            h = a.fixedPosition.chartY - c.chartY;
                        c = d.graphLayoutsLookup;
                        if (5 < Math.abs(g) || 5 < Math.abs(h)) g =
                            a.fixedPosition.plotX - g, h = a.fixedPosition.plotY - h, d.isInsidePlot(g, h) && (a.plotX = g, a.plotY = h, a.hasDragged = !0, this.redrawHalo(a), c.forEach(function(a) {
                                a.restartSimulation()
                            }))
                    }
                },
                onMouseUp: function(a, c) {
                    a.fixedPosition && (a.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), a.inDragMode = a.hasDragged = !1, this.options.fixedDraggable || delete a.fixedPosition)
                },
                redrawHalo: function(a) {
                    a && this.halo && this.halo.attr({
                        d: a.haloPath(this.options.states.hover.halo.size)
                    })
                }
            };
            g(e, "load",
                function() {
                    var a = this,
                        c, d, h;
                    a.container && (c = g(a.container, "mousedown", function(c) {
                        var e = a.hoverPoint;
                        e && e.series && e.series.hasDraggableNodes && e.series.options.draggable && (e.series.onMouseDown(e, c), d = g(a.container, "mousemove", function(b) {
                            return e && e.series && e.series.onMouseMove(e, b)
                        }), h = g(a.container.ownerDocument, "mouseup", function(b) {
                            d();
                            h();
                            return e && e.series && e.series.onMouseUp(e, b)
                        }))
                    }));
                    g(a, "destroy", function() {
                        c()
                    })
                })
        });
    z(e, "Series/Networkgraph/Integrations.js", [e["Core/Globals.js"]], function(e) {
        e.networkgraphIntegrations = {
            verlet: {
                attractiveForceFunction: function(c, h) {
                    return (h - c) / c
                },
                repulsiveForceFunction: function(c, h) {
                    return (h - c) / c * (h > c ? 1 : 0)
                },
                barycenter: function() {
                    var c = this.options.gravitationalConstant,
                        h = this.barycenter.xFactor,
                        g = this.barycenter.yFactor;
                    h = (h - (this.box.left + this.box.width) / 2) * c;
                    g = (g - (this.box.top + this.box.height) / 2) * c;
                    this.nodes.forEach(function(a) {
                        a.fixedPosition || (a.plotX -= h / a.mass / a.degree, a.plotY -= g / a.mass / a.degree)
                    })
                },
                repulsive: function(c, h, g) {
                    h = h * this.diffTemperature / c.mass / c.degree;
                    c.fixedPosition ||
                        (c.plotX += g.x * h, c.plotY += g.y * h)
                },
                attractive: function(c, h, g) {
                    var a = c.getMass(),
                        e = -g.x * h * this.diffTemperature;
                    h = -g.y * h * this.diffTemperature;
                    c.fromNode.fixedPosition || (c.fromNode.plotX -= e * a.fromNode / c.fromNode.degree, c.fromNode.plotY -= h * a.fromNode / c.fromNode.degree);
                    c.toNode.fixedPosition || (c.toNode.plotX += e * a.toNode / c.toNode.degree, c.toNode.plotY += h * a.toNode / c.toNode.degree)
                },
                integrate: function(c, e) {
                    var g = -c.options.friction,
                        a = c.options.maxSpeed,
                        h = (e.plotX + e.dispX - e.prevX) * g;
                    g *= e.plotY + e.dispY - e.prevY;
                    var d = Math.abs,
                        r = d(h) / (h || 1);
                    d = d(g) / (g || 1);
                    h = r * Math.min(a, Math.abs(h));
                    g = d * Math.min(a, Math.abs(g));
                    e.prevX = e.plotX + e.dispX;
                    e.prevY = e.plotY + e.dispY;
                    e.plotX += h;
                    e.plotY += g;
                    e.temperature = c.vectorLength({
                        x: h,
                        y: g
                    })
                },
                getK: function(c) {
                    return Math.pow(c.box.width * c.box.height / c.nodes.length, .5)
                }
            },
            euler: {
                attractiveForceFunction: function(c, e) {
                    return c * c / e
                },
                repulsiveForceFunction: function(c, e) {
                    return e * e / c
                },
                barycenter: function() {
                    var c = this.options.gravitationalConstant,
                        e = this.barycenter.xFactor,
                        g = this.barycenter.yFactor;
                    this.nodes.forEach(function(a) {
                        if (!a.fixedPosition) {
                            var h = a.getDegree();
                            h *= 1 + h / 2;
                            a.dispX += (e - a.plotX) * c * h / a.degree;
                            a.dispY += (g - a.plotY) * c * h / a.degree
                        }
                    })
                },
                repulsive: function(c, e, g, a) {
                    c.dispX += g.x / a * e / c.degree;
                    c.dispY += g.y / a * e / c.degree
                },
                attractive: function(c, e, g, a) {
                    var h = c.getMass(),
                        d = g.x / a * e;
                    e *= g.y / a;
                    c.fromNode.fixedPosition || (c.fromNode.dispX -= d * h.fromNode / c.fromNode.degree, c.fromNode.dispY -= e * h.fromNode / c.fromNode.degree);
                    c.toNode.fixedPosition || (c.toNode.dispX += d * h.toNode / c.toNode.degree, c.toNode.dispY +=
                        e * h.toNode / c.toNode.degree)
                },
                integrate: function(c, e) {
                    e.dispX += e.dispX * c.options.friction;
                    e.dispY += e.dispY * c.options.friction;
                    var g = e.temperature = c.vectorLength({
                        x: e.dispX,
                        y: e.dispY
                    });
                    0 !== g && (e.plotX += e.dispX / g * Math.min(Math.abs(e.dispX), c.temperature), e.plotY += e.dispY / g * Math.min(Math.abs(e.dispY), c.temperature))
                },
                getK: function(c) {
                    return Math.pow(c.box.width * c.box.height / c.nodes.length, .3)
                }
            }
        }
    });
    z(e, "Series/Networkgraph/QuadTree.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function(e, c) {
        c = c.extend;
        var h = e.QuadTreeNode = function(c) {
            this.box = c;
            this.boxSize = Math.min(c.width, c.height);
            this.nodes = [];
            this.body = this.isInternal = !1;
            this.isEmpty = !0
        };
        c(h.prototype, {
            insert: function(c, a) {
                this.isInternal ? this.nodes[this.getBoxPosition(c)].insert(c, a - 1) : (this.isEmpty = !1, this.body ? a ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, a - 1), this.body = !0), this.nodes[this.getBoxPosition(c)].insert(c, a - 1)) : (a = new h({
                    top: c.plotX,
                    left: c.plotY,
                    width: .1,
                    height: .1
                }), a.body = c, a.isInternal = !1, this.nodes.push(a)) : (this.isInternal = !1, this.body = c))
            },
            updateMassAndCenter: function() {
                var c = 0,
                    a = 0,
                    e = 0;
                this.isInternal ? (this.nodes.forEach(function(d) {
                    d.isEmpty || (c += d.mass, a += d.plotX * d.mass, e += d.plotY * d.mass)
                }), a /= c, e /= c) : this.body && (c = this.body.mass, a = this.body.plotX, e = this.body.plotY);
                this.mass = c;
                this.plotX = a;
                this.plotY = e
            },
            divideBox: function() {
                var c = this.box.width / 2,
                    a = this.box.height / 2;
                this.nodes[0] = new h({
                    left: this.box.left,
                    top: this.box.top,
                    width: c,
                    height: a
                });
                this.nodes[1] = new h({
                    left: this.box.left + c,
                    top: this.box.top,
                    width: c,
                    height: a
                });
                this.nodes[2] = new h({
                    left: this.box.left + c,
                    top: this.box.top + a,
                    width: c,
                    height: a
                });
                this.nodes[3] = new h({
                    left: this.box.left,
                    top: this.box.top + a,
                    width: c,
                    height: a
                })
            },
            getBoxPosition: function(c) {
                var a = c.plotY < this.box.top + this.box.height / 2;
                return c.plotX < this.box.left + this.box.width / 2 ? a ? 0 : 3 : a ? 1 : 2
            }
        });
        e = e.QuadTree = function(c, a, e, d) {
            this.box = {
                left: c,
                top: a,
                width: e,
                height: d
            };
            this.maxDepth = 25;
            this.root = new h(this.box, "0");
            this.root.isInternal = !0;
            this.root.isRoot = !0;
            this.root.divideBox()
        };
        c(e.prototype, {
            insertNodes: function(c) {
                c.forEach(function(a) {
                    this.root.insert(a, this.maxDepth)
                }, this)
            },
            visitNodeRecursive: function(c, a, e) {
                var d;
                c || (c = this.root);
                c === this.root && a && (d = a(c));
                !1 !== d && (c.nodes.forEach(function(c) {
                    if (c.isInternal) {
                        a && (d = a(c));
                        if (!1 === d) return;
                        this.visitNodeRecursive(c, a, e)
                    } else c.body && a && a(c.body);
                    e && e(c)
                }, this), c === this.root && e && e(c))
            },
            calculateMassAndCenter: function() {
                this.visitNodeRecursive(null, null, function(c) {
                    c.updateMassAndCenter()
                })
            }
        })
    });
    z(e, "Series/Networkgraph/Layouts.js", [e["Core/Chart/Chart.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(e, c, h, g) {
        var a = c.setAnimation;
        c = g.addEvent;
        var u = g.clamp,
            d = g.defined,
            r = g.extend,
            n = g.isFunction,
            x = g.pick;
        h.layouts = {
            "reingold-fruchterman": function() {}
        };
        r(h.layouts["reingold-fruchterman"].prototype, {
            init: function(b) {
                this.options = b;
                this.nodes = [];
                this.links = [];
                this.series = [];
                this.box = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                this.setInitialRendering(!0);
                this.integration =
                    h.networkgraphIntegrations[b.integration];
                this.enableSimulation = b.enableSimulation;
                this.attractiveForce = x(b.attractiveForce, this.integration.attractiveForceFunction);
                this.repulsiveForce = x(b.repulsiveForce, this.integration.repulsiveForceFunction);
                this.approximation = b.approximation
            },
            updateSimulation: function(b) {
                this.enableSimulation = x(b, this.options.enableSimulation)
            },
            start: function() {
                var b = this.series,
                    a = this.options;
                this.currentStep = 0;
                this.forces = b[0] && b[0].forces || [];
                this.chart = b[0] && b[0].chart;
                this.initialRendering &&
                    (this.initPositions(), b.forEach(function(b) {
                        b.finishedAnimating = !0;
                        b.render()
                    }));
                this.setK();
                this.resetSimulation(a);
                this.enableSimulation && this.step()
            },
            step: function() {
                var b = this,
                    a = this.series;
                b.currentStep++;
                "barnes-hut" === b.approximation && (b.createQuadTree(), b.quadTree.calculateMassAndCenter());
                b.forces.forEach(function(a) {
                    b[a + "Forces"](b.temperature)
                });
                b.applyLimits(b.temperature);
                b.temperature = b.coolDown(b.startTemperature, b.diffTemperature, b.currentStep);
                b.prevSystemTemperature = b.systemTemperature;
                b.systemTemperature = b.getSystemTemperature();
                b.enableSimulation && (a.forEach(function(b) {
                    b.chart && b.render()
                }), b.maxIterations-- && isFinite(b.temperature) && !b.isStable() ? (b.simulation && h.win.cancelAnimationFrame(b.simulation), b.simulation = h.win.requestAnimationFrame(function() {
                    b.step()
                })) : b.simulation = !1)
            },
            stop: function() {
                this.simulation && h.win.cancelAnimationFrame(this.simulation)
            },
            setArea: function(b, a, c, d) {
                this.box = {
                    left: b,
                    top: a,
                    width: c,
                    height: d
                }
            },
            setK: function() {
                this.k = this.options.linkLength || this.integration.getK(this)
            },
            addElementsToCollection: function(b, a) {
                b.forEach(function(b) {
                    -1 === a.indexOf(b) && a.push(b)
                })
            },
            removeElementFromCollection: function(b, a) {
                b = a.indexOf(b); - 1 !== b && a.splice(b, 1)
            },
            clear: function() {
                this.nodes.length = 0;
                this.links.length = 0;
                this.series.length = 0;
                this.resetSimulation()
            },
            resetSimulation: function() {
                this.forcedStop = !1;
                this.systemTemperature = 0;
                this.setMaxIterations();
                this.setTemperature();
                this.setDiffTemperature()
            },
            restartSimulation: function() {
                this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1),
                    this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0))
            },
            setMaxIterations: function(b) {
                this.maxIterations = x(b, this.options.maxIterations)
            },
            setTemperature: function() {
                this.temperature = this.startTemperature = Math.sqrt(this.nodes.length)
            },
            setDiffTemperature: function() {
                this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1)
            },
            setInitialRendering: function(b) {
                this.initialRendering = b
            },
            createQuadTree: function() {
                this.quadTree =
                    new h.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
                this.quadTree.insertNodes(this.nodes)
            },
            initPositions: function() {
                var b = this.options.initialPositions;
                n(b) ? (b.call(this), this.nodes.forEach(function(b) {
                    d(b.prevX) || (b.prevX = b.plotX);
                    d(b.prevY) || (b.prevY = b.plotY);
                    b.dispX = 0;
                    b.dispY = 0
                })) : "circle" === b ? this.setCircularPositions() : this.setRandomPositions()
            },
            setCircularPositions: function() {
                function b(a) {
                    a.linksFrom.forEach(function(a) {
                        h[a.toNode.id] || (h[a.toNode.id] = !0, g.push(a.toNode),
                            b(a.toNode))
                    })
                }
                var a = this.box,
                    c = this.nodes,
                    d = 2 * Math.PI / (c.length + 1),
                    e = c.filter(function(b) {
                        return 0 === b.linksTo.length
                    }),
                    g = [],
                    h = {},
                    r = this.options.initialPositionRadius;
                e.forEach(function(a) {
                    g.push(a);
                    b(a)
                });
                g.length ? c.forEach(function(b) {
                    -1 === g.indexOf(b) && g.push(b)
                }) : g = c;
                g.forEach(function(b, c) {
                    b.plotX = b.prevX = x(b.plotX, a.width / 2 + r * Math.cos(c * d));
                    b.plotY = b.prevY = x(b.plotY, a.height / 2 + r * Math.sin(c * d));
                    b.dispX = 0;
                    b.dispY = 0
                })
            },
            setRandomPositions: function() {
                function b(b) {
                    b = b * b / Math.PI;
                    return b -= Math.floor(b)
                }
                var a = this.box,
                    c = this.nodes,
                    d = c.length + 1;
                c.forEach(function(c, e) {
                    c.plotX = c.prevX = x(c.plotX, a.width * b(e));
                    c.plotY = c.prevY = x(c.plotY, a.height * b(d + e));
                    c.dispX = 0;
                    c.dispY = 0
                })
            },
            force: function(b) {
                this.integration[b].apply(this, Array.prototype.slice.call(arguments, 1))
            },
            barycenterForces: function() {
                this.getBarycenter();
                this.force("barycenter")
            },
            getBarycenter: function() {
                var b = 0,
                    a = 0,
                    c = 0;
                this.nodes.forEach(function(d) {
                    a += d.plotX * d.mass;
                    c += d.plotY * d.mass;
                    b += d.mass
                });
                return this.barycenter = {
                    x: a,
                    y: c,
                    xFactor: a / b,
                    yFactor: c / b
                }
            },
            barnesHutApproximation: function(b, a) {
                var c = this.getDistXY(b, a),
                    d = this.vectorLength(c);
                if (b !== a && 0 !== d)
                    if (a.isInternal)
                        if (a.boxSize / d < this.options.theta && 0 !== d) {
                            var e = this.repulsiveForce(d, this.k);
                            this.force("repulsive", b, e * a.mass, c, d);
                            var k = !1
                        } else k = !0;
                else e = this.repulsiveForce(d, this.k), this.force("repulsive", b, e * a.mass, c, d);
                return k
            },
            repulsiveForces: function() {
                var b = this;
                "barnes-hut" === b.approximation ? b.nodes.forEach(function(a) {
                    b.quadTree.visitNodeRecursive(null, function(c) {
                        return b.barnesHutApproximation(a,
                            c)
                    })
                }) : b.nodes.forEach(function(a) {
                    b.nodes.forEach(function(c) {
                        if (a !== c && !a.fixedPosition) {
                            var d = b.getDistXY(a, c);
                            var e = b.vectorLength(d);
                            if (0 !== e) {
                                var k = b.repulsiveForce(e, b.k);
                                b.force("repulsive", a, k * c.mass, d, e)
                            }
                        }
                    })
                })
            },
            attractiveForces: function() {
                var a = this,
                    c, d, e;
                a.links.forEach(function(b) {
                    b.fromNode && b.toNode && (c = a.getDistXY(b.fromNode, b.toNode), d = a.vectorLength(c), 0 !== d && (e = a.attractiveForce(d, a.k), a.force("attractive", b, e, c, d)))
                })
            },
            applyLimits: function() {
                var a = this;
                a.nodes.forEach(function(b) {
                    b.fixedPosition ||
                        (a.integration.integrate(a, b), a.applyLimitBox(b, a.box), b.dispX = 0, b.dispY = 0)
                })
            },
            applyLimitBox: function(a, c) {
                var b = a.radius;
                a.plotX = u(a.plotX, c.left + b, c.width - b);
                a.plotY = u(a.plotY, c.top + b, c.height - b)
            },
            coolDown: function(a, c, d) {
                return a - c * d
            },
            isStable: function() {
                return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature
            },
            getSystemTemperature: function() {
                return this.nodes.reduce(function(a, c) {
                    return a + c.temperature
                }, 0)
            },
            vectorLength: function(a) {
                return Math.sqrt(a.x * a.x +
                    a.y * a.y)
            },
            getDistR: function(a, c) {
                a = this.getDistXY(a, c);
                return this.vectorLength(a)
            },
            getDistXY: function(a, c) {
                var b = a.plotX - c.plotX;
                a = a.plotY - c.plotY;
                return {
                    x: b,
                    y: a,
                    absX: Math.abs(b),
                    absY: Math.abs(a)
                }
            }
        });
        c(e, "predraw", function() {
            this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function(a) {
                a.stop()
            })
        });
        c(e, "render", function() {
            function b(a) {
                a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.enableSimulation && (a.beforeStep && a.beforeStep(), a.step(), d = !1, c = !0)
            }
            var c = !1;
            if (this.graphLayoutsLookup) {
                a(!1,
                    this);
                for (this.graphLayoutsLookup.forEach(function(a) {
                        a.start()
                    }); !d;) {
                    var d = !0;
                    this.graphLayoutsLookup.forEach(b)
                }
                c && this.series.forEach(function(a) {
                    a && a.layout && a.render()
                })
            }
        });
        c(e, "beforePrint", function() {
            this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(function(a) {
                a.updateSimulation(!1)
            }), this.redraw())
        });
        c(e, "afterPrint", function() {
            this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function(a) {
                a.updateSimulation()
            });
            this.redraw()
        })
    });
    z(e, "Series/PackedBubble/PackedBubbleComposition.js",
        [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]],
        function(e, c, h) {
            var g = c.layouts["reingold-fruchterman"],
                a = h.addEvent,
                u = h.extendClass,
                d = h.pick;
            e.prototype.getSelectedParentNodes = function() {
                var a = [];
                this.series.forEach(function(c) {
                    c.parentNode && c.parentNode.selected && a.push(c.parentNode)
                });
                return a
            };
            c.networkgraphIntegrations.packedbubble = {
                repulsiveForceFunction: function(a, c, d, b) {
                    return Math.min(a, (d.marker.radius + b.marker.radius) / 2)
                },
                barycenter: function() {
                    var a = this,
                        c = a.options.gravitationalConstant,
                        d = a.box,
                        b = a.nodes,
                        e, g;
                    b.forEach(function(h) {
                        a.options.splitSeries && !h.isParentNode ? (e = h.series.parentNode.plotX, g = h.series.parentNode.plotY) : (e = d.width / 2, g = d.height / 2);
                        h.fixedPosition || (h.plotX -= (h.plotX - e) * c / (h.mass * Math.sqrt(b.length)), h.plotY -= (h.plotY - g) * c / (h.mass * Math.sqrt(b.length)))
                    })
                },
                repulsive: function(a, c, d, b) {
                    var e = c * this.diffTemperature / a.mass / a.degree;
                    c = d.x * e;
                    d = d.y * e;
                    a.fixedPosition || (a.plotX += c, a.plotY += d);
                    b.fixedPosition || (b.plotX -= c, b.plotY -= d)
                },
                integrate: c.networkgraphIntegrations.verlet.integrate,
                getK: c.noop
            };
            c.layouts.packedbubble = u(g, {
                beforeStep: function() {
                    this.options.marker && this.series.forEach(function(a) {
                        a && a.calculateParentRadius()
                    })
                },
                setCircularPositions: function() {
                    var a = this,
                        c = a.box,
                        e = a.nodes,
                        b = 2 * Math.PI / (e.length + 1),
                        g, h, t = a.options.initialPositionRadius;
                    e.forEach(function(e, k) {
                        a.options.splitSeries && !e.isParentNode ? (g = e.series.parentNode.plotX, h = e.series.parentNode.plotY) : (g = c.width / 2, h = c.height / 2);
                        e.plotX = e.prevX = d(e.plotX, g + t * Math.cos(e.index || k * b));
                        e.plotY = e.prevY = d(e.plotY, h +
                            t * Math.sin(e.index || k * b));
                        e.dispX = 0;
                        e.dispY = 0
                    })
                },
                repulsiveForces: function() {
                    var a = this,
                        c, d, b, e = a.options.bubblePadding;
                    a.nodes.forEach(function(g) {
                        g.degree = g.mass;
                        g.neighbours = 0;
                        a.nodes.forEach(function(h) {
                            c = 0;
                            g === h || g.fixedPosition || !a.options.seriesInteraction && g.series !== h.series || (b = a.getDistXY(g, h), d = a.vectorLength(b) - (g.marker.radius + h.marker.radius + e), 0 > d && (g.degree += .01, g.neighbours++, c = a.repulsiveForce(-d / Math.sqrt(g.neighbours), a.k, g, h)), a.force("repulsive", g, c * h.mass, b, h, d))
                        })
                    })
                },
                applyLimitBox: function(a) {
                    if (this.options.splitSeries &&
                        !a.isParentNode && this.options.parentNodeLimit) {
                        var c = this.getDistXY(a, a.series.parentNode);
                        var d = a.series.parentNodeRadius - a.marker.radius - this.vectorLength(c);
                        0 > d && d > -2 * a.marker.radius && (a.plotX -= .01 * c.x, a.plotY -= .01 * c.y)
                    }
                    g.prototype.applyLimitBox.apply(this, arguments)
                }
            });
            a(e, "beforeRedraw", function() {
                this.allDataPoints && delete this.allDataPoints
            })
        });
    z(e, "Series/PackedBubble/PackedBubbleSeries.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Series/PackedBubble/PackedBubblePoint.js"], e["Core/Series/SeriesRegistry.js"],
        e["Core/Utilities.js"]
    ], function(e, c, h, g, a) {
        var u = this && this.__extends || function() {
                var a = function(b, f) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f])
                    };
                    return a(b, f)
                };
                return function(b, f) {
                    function c() {
                        this.constructor = b
                    }
                    a(b, f);
                    b.prototype = null === f ? Object.create(f) : (c.prototype = f.prototype, new c)
                }
            }(),
            d = e.parse,
            r = g.series,
            n = g.seriesTypes.bubble,
            x = a.addEvent,
            b = a.clamp,
            k = a.defined,
            l = a.extend,
            t = a.fireEvent,
            w = a.isArray,
            z = a.isNumber,
            B = a.merge,
            G = a.pick,
            y = c.dragNodesMixin;
        e = function(a) {
            function e() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.chart = void 0;
                b.data = void 0;
                b.layout = void 0;
                b.options = void 0;
                b.points = void 0;
                b.xData = void 0;
                return b
            }
            u(e, a);
            e.prototype.accumulateAllPoints = function(a) {
                var b = a.chart,
                    c = [],
                    f, d;
                for (f = 0; f < b.series.length; f++)
                    if (a = b.series[f], a.is("packedbubble") && a.visible || !b.options.chart.ignoreHiddenSeries)
                        for (d = 0; d < a.yData.length; d++) c.push([null, null, a.yData[d], a.index, d, {
                            id: d,
                            marker: {
                                radius: 0
                            }
                        }]);
                return c
            };
            e.prototype.addLayout = function() {
                var a = this.options.layoutAlgorithm,
                    b = this.chart.graphLayoutsStorage,
                    d = this.chart.graphLayoutsLookup,
                    e = this.chart.options.chart;
                b || (this.chart.graphLayoutsStorage = b = {}, this.chart.graphLayoutsLookup = d = []);
                var g = b[a.type];
                g || (a.enableSimulation = k(e.forExport) ? !e.forExport : a.enableSimulation, b[a.type] = g = new c.layouts[a.type], g.init(a), d.splice(g.index, 0, g));
                this.layout = g;
                this.points.forEach(function(a) {
                    a.mass = 2;
                    a.degree = 1;
                    a.collisionNmb =
                        1
                });
                g.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight);
                g.addElementsToCollection([this], g.series);
                g.addElementsToCollection(this.points, g.nodes)
            };
            e.prototype.addSeriesLayout = function() {
                var a = this.options.layoutAlgorithm,
                    b = this.chart.graphLayoutsStorage,
                    d = this.chart.graphLayoutsLookup,
                    e = B(a, a.parentNodeOptions, {
                        enableSimulation: this.layout.options.enableSimulation
                    });
                var g = b[a.type + "-series"];
                g || (b[a.type + "-series"] = g = new c.layouts[a.type], g.init(e), d.splice(g.index, 0, g));
                this.parentNodeLayout =
                    g;
                this.createParentNodes()
            };
            e.prototype.calculateParentRadius = function() {
                var a = this.seriesBox();
                this.parentNodeRadius = b(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, a ? Math.max(Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20);
                this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius)
            };
            e.prototype.calculateZExtremes = function() {
                var a = this.options.zMin,
                    b = this.options.zMax,
                    c = Infinity,
                    d = -Infinity;
                if (a && b) return [a,
                    b
                ];
                this.chart.series.forEach(function(a) {
                    a.yData.forEach(function(a) {
                        k(a) && (a > d && (d = a), a < c && (c = a))
                    })
                });
                a = G(a, c);
                b = G(b, d);
                return [a, b]
            };
            e.prototype.checkOverlap = function(a, b) {
                var c = a[0] - b[0],
                    f = a[1] - b[1];
                return -.001 > Math.sqrt(c * c + f * f) - Math.abs(a[2] + b[2])
            };
            e.prototype.createParentNodes = function() {
                var a = this,
                    b = a.chart,
                    c = a.parentNodeLayout,
                    d, e = a.parentNode,
                    g = a.pointClass;
                a.parentNodeMass = 0;
                a.points.forEach(function(b) {
                    a.parentNodeMass += Math.PI * Math.pow(b.marker.radius, 2)
                });
                a.calculateParentRadius();
                c.nodes.forEach(function(b) {
                    b.seriesIndex ===
                        a.index && (d = !0)
                });
                c.setArea(0, 0, b.plotWidth, b.plotHeight);
                d || (e || (e = (new g).init(this, {
                    mass: a.parentNodeRadius / 2,
                    marker: {
                        radius: a.parentNodeRadius
                    },
                    dataLabels: {
                        inside: !1
                    },
                    dataLabelOnNull: !0,
                    degree: a.parentNodeRadius,
                    isParentNode: !0,
                    seriesIndex: a.index
                })), a.parentNode && (e.plotX = a.parentNode.plotX, e.plotY = a.parentNode.plotY), a.parentNode = e, c.addElementsToCollection([a], c.series), c.addElementsToCollection([e], c.nodes))
            };
            e.prototype.deferLayout = function() {
                var a = this.options.layoutAlgorithm;
                this.visible &&
                    (this.addLayout(), a.splitSeries && this.addSeriesLayout())
            };
            e.prototype.destroy = function() {
                this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(function(a) {
                    a.removeElementFromCollection(this, a.series)
                }, this);
                this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy()));
                r.prototype.destroy.apply(this, arguments)
            };
            e.prototype.drawDataLabels =
                function() {
                    var a = this.options.dataLabels.textPath,
                        b = this.points;
                    r.prototype.drawDataLabels.apply(this, arguments);
                    this.parentNode && (this.parentNode.formatPrefix = "parentNode", this.points = [this.parentNode], this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath, r.prototype.drawDataLabels.apply(this, arguments), this.points = b, this.options.dataLabels.textPath = a)
                };
            e.prototype.drawGraph = function() {
                if (this.layout && this.layout.options.splitSeries) {
                    var a = this.chart,
                        b = this.layout.options.parentNodeOptions.marker;
                    b = {
                        fill: b.fillColor || d(this.color).brighten(.4).get(),
                        opacity: b.fillOpacity,
                        stroke: b.lineColor || this.color,
                        "stroke-width": b.lineWidth
                    };
                    var c = this.visible ? "inherit" : "hidden";
                    this.parentNodesGroup || (this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", c, .1, a.seriesGroup), this.group.attr({
                        zIndex: 2
                    }));
                    this.calculateParentRadius();
                    c = B({
                            x: this.parentNode.plotX - this.parentNodeRadius,
                            y: this.parentNode.plotY - this.parentNodeRadius,
                            width: 2 * this.parentNodeRadius,
                            height: 2 * this.parentNodeRadius
                        },
                        b);
                    this.parentNode.graphic || (this.graph = this.parentNode.graphic = a.renderer.symbol(b.symbol).add(this.parentNodesGroup));
                    this.parentNode.graphic.attr(c)
                }
            };
            e.prototype.drawTracker = function() {
                var b = this.parentNode;
                a.prototype.drawTracker.call(this);
                if (b) {
                    var c = w(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : [];
                    b.graphic && (b.graphic.element.point = b);
                    c.forEach(function(a) {
                        a.div ? a.div.point = b : a.element.point = b
                    })
                }
            };
            e.prototype.getPointRadius = function() {
                var a = this,
                    c = a.chart,
                    d = a.options,
                    e = d.useSimulation,
                    g = Math.min(c.plotWidth, c.plotHeight),
                    h = {},
                    k = [],
                    p = c.allDataPoints,
                    l, n, q, r;
                ["minSize", "maxSize"].forEach(function(a) {
                    var b = parseInt(d[a], 10),
                        c = /%$/.test(d[a]);
                    h[a] = c ? g * b / 100 : b * Math.sqrt(p.length)
                });
                c.minRadius = l = h.minSize / Math.sqrt(p.length);
                c.maxRadius = n = h.maxSize / Math.sqrt(p.length);
                var t = e ? a.calculateZExtremes() : [l, n];
                (p || []).forEach(function(c, d) {
                    q = e ? b(c[2], t[0], t[1]) : c[2];
                    r = a.getRadius(t[0], t[1], l, n, q);
                    0 === r && (r = null);
                    p[d][2] = r;
                    k.push(r)
                });
                a.radii = k
            };
            e.prototype.init = function() {
                r.prototype.init.apply(this,
                    arguments);
                this.eventsToUnbind.push(x(this, "updatedData", function() {
                    this.chart.series.forEach(function(a) {
                        a.type === this.type && (a.isDirty = !0)
                    }, this)
                }));
                return this
            };
            e.prototype.onMouseUp = function(a) {
                if (a.fixedPosition && !a.removed) {
                    var b, c, d = this.layout,
                        f = this.parentNodeLayout;
                    f && d.options.dragBetweenSeries && f.nodes.forEach(function(f) {
                        a && a.marker && f !== a.series.parentNode && (b = d.getDistXY(a, f), c = d.vectorLength(b) - f.marker.radius - a.marker.radius, 0 > c && (f.series.addPoint(B(a.options, {
                                plotX: a.plotX,
                                plotY: a.plotY
                            }),
                            !1), d.removeElementFromCollection(a, d.nodes), a.remove()))
                    });
                    y.onMouseUp.apply(this, arguments)
                }
            };
            e.prototype.placeBubbles = function(a) {
                var b = this.checkOverlap,
                    c = this.positionBubble,
                    d = [],
                    f = 1,
                    e = 0,
                    g = 0;
                var h = [];
                var k;
                a = a.sort(function(a, b) {
                    return b[2] - a[2]
                });
                if (a.length) {
                    d.push([
                        [0, 0, a[0][2], a[0][3], a[0][4]]
                    ]);
                    if (1 < a.length)
                        for (d.push([
                                [0, 0 - a[1][2] - a[0][2], a[1][2], a[1][3], a[1][4]]
                            ]), k = 2; k < a.length; k++) a[k][2] = a[k][2] || 1, h = c(d[f][e], d[f - 1][g], a[k]), b(h, d[f][0]) ? (d.push([]), g = 0, d[f + 1].push(c(d[f][e], d[f][0],
                            a[k])), f++, e = 0) : 1 < f && d[f - 1][g + 1] && b(h, d[f - 1][g + 1]) ? (g++, d[f].push(c(d[f][e], d[f - 1][g], a[k])), e++) : (e++, d[f].push(h));
                    this.chart.stages = d;
                    this.chart.rawPositions = [].concat.apply([], d);
                    this.resizeRadius();
                    h = this.chart.rawPositions
                }
                return h
            };
            e.prototype.positionBubble = function(a, b, c) {
                var d = Math.sqrt,
                    f = Math.asin,
                    e = Math.acos,
                    g = Math.pow,
                    h = Math.abs;
                d = d(g(a[0] - b[0], 2) + g(a[1] - b[1], 2));
                e = e((g(d, 2) + g(c[2] + b[2], 2) - g(c[2] + a[2], 2)) / (2 * (c[2] + b[2]) * d));
                f = f(h(a[0] - b[0]) / d);
                a = (0 > a[1] - b[1] ? 0 : Math.PI) + e + f * (0 > (a[0] - b[0]) *
                    (a[1] - b[1]) ? 1 : -1);
                return [b[0] + (b[2] + c[2]) * Math.sin(a), b[1] - (b[2] + c[2]) * Math.cos(a), c[2], c[3], c[4]]
            };
            e.prototype.render = function() {
                var a = [];
                r.prototype.render.apply(this, arguments);
                this.options.dataLabels.allowOverlap || (this.data.forEach(function(b) {
                    w(b.dataLabels) && b.dataLabels.forEach(function(b) {
                        a.push(b)
                    })
                }), this.options.useSimulation && this.chart.hideOverlappingLabels(a))
            };
            e.prototype.resizeRadius = function() {
                var a = this.chart,
                    b = a.rawPositions,
                    c = Math.min,
                    d = Math.max,
                    e = a.plotLeft,
                    g = a.plotTop,
                    h = a.plotHeight,
                    k = a.plotWidth,
                    p, l, n;
                var q = p = Number.POSITIVE_INFINITY;
                var r = l = Number.NEGATIVE_INFINITY;
                for (n = 0; n < b.length; n++) {
                    var t = b[n][2];
                    q = c(q, b[n][0] - t);
                    r = d(r, b[n][0] + t);
                    p = c(p, b[n][1] - t);
                    l = d(l, b[n][1] + t)
                }
                n = [r - q, l - p];
                c = c.apply([], [(k - e) / n[0], (h - g) / n[1]]);
                if (1e-10 < Math.abs(c - 1)) {
                    for (n = 0; n < b.length; n++) b[n][2] *= c;
                    this.placeBubbles(b)
                } else a.diffY = h / 2 + g - p - (l - p) / 2, a.diffX = k / 2 + e - q - (r - q) / 2
            };
            e.prototype.seriesBox = function() {
                var a = this.chart,
                    b = Math.max,
                    c = Math.min,
                    d, e = [a.plotLeft, a.plotLeft + a.plotWidth, a.plotTop, a.plotTop +
                        a.plotHeight
                    ];
                this.data.forEach(function(a) {
                    k(a.plotX) && k(a.plotY) && a.marker.radius && (d = a.marker.radius, e[0] = c(e[0], a.plotX - d), e[1] = b(e[1], a.plotX + d), e[2] = c(e[2], a.plotY - d), e[3] = b(e[3], a.plotY + d))
                });
                return z(e.width / e.height) ? e : null
            };
            e.prototype.setVisible = function() {
                var a = this;
                r.prototype.setVisible.apply(a, arguments);
                a.parentNodeLayout && a.graph ? a.visible ? (a.graph.show(), a.parentNode.dataLabel && a.parentNode.dataLabel.show()) : (a.graph.hide(), a.parentNodeLayout.removeElementFromCollection(a.parentNode,
                    a.parentNodeLayout.nodes), a.parentNode.dataLabel && a.parentNode.dataLabel.hide()) : a.layout && (a.visible ? a.layout.addElementsToCollection(a.points, a.layout.nodes) : a.points.forEach(function(b) {
                    a.layout.removeElementFromCollection(b, a.layout.nodes)
                }))
            };
            e.prototype.translate = function() {
                var a = this.chart,
                    b = this.data,
                    c = this.index,
                    d, e = this.options.useSimulation;
                this.processedXData = this.xData;
                this.generatePoints();
                k(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(this), this.getPointRadius());
                if (e) var g =
                    a.allDataPoints;
                else g = this.placeBubbles(a.allDataPoints), this.options.draggable = !1;
                for (d = 0; d < g.length; d++)
                    if (g[d][3] === c) {
                        var h = b[g[d][4]];
                        var p = g[d][2];
                        e || (h.plotX = g[d][0] - a.plotLeft + a.diffX, h.plotY = g[d][1] - a.plotTop + a.diffY);
                        h.marker = l(h.marker, {
                            radius: p,
                            width: 2 * p,
                            height: 2 * p
                        });
                        h.radius = p
                    } e && this.deferLayout();
                t(this, "afterTranslate")
            };
            e.defaultOptions = B(n.defaultOptions, {
                minSize: "10%",
                maxSize: "50%",
                sizeBy: "area",
                zoneAxis: "y",
                crisp: !1,
                tooltip: {
                    pointFormat: "Value: {point.value}"
                },
                draggable: !0,
                useSimulation: !0,
                parentNode: {
                    allowPointSelect: !1
                },
                dataLabels: {
                    formatter: function() {
                        return this.point.value
                    },
                    parentNodeFormatter: function() {
                        return this.name
                    },
                    parentNodeTextPath: {
                        enabled: !0
                    },
                    padding: 0,
                    style: {
                        transition: "opacity 2000ms"
                    }
                },
                layoutAlgorithm: {
                    initialPositions: "circle",
                    initialPositionRadius: 20,
                    bubblePadding: 5,
                    parentNodeLimit: !1,
                    seriesInteraction: !0,
                    dragBetweenSeries: !1,
                    parentNodeOptions: {
                        maxIterations: 400,
                        gravitationalConstant: .03,
                        maxSpeed: 50,
                        initialPositionRadius: 100,
                        seriesInteraction: !0,
                        marker: {
                            fillColor: null,
                            fillOpacity: 1,
                            lineWidth: 1,
                            lineColor: null,
                            symbol: "circle"
                        }
                    },
                    enableSimulation: !0,
                    type: "packedbubble",
                    integration: "packedbubble",
                    maxIterations: 1E3,
                    splitSeries: !1,
                    maxSpeed: 5,
                    gravitationalConstant: .01,
                    friction: -.981
                }
            });
            return e
        }(n);
        l(e.prototype, {
            alignDataLabel: r.prototype.alignDataLabel,
            axisTypes: [],
            directTouch: !0,
            forces: ["barycenter", "repulsive"],
            hasDraggableNodes: !0,
            isCartesian: !1,
            noSharedTooltip: !0,
            onMouseDown: y.onMouseDown,
            onMouseMove: y.onMouseMove,
            pointArrayMap: ["value"],
            pointClass: h,
            pointValKey: "value",
            redrawHalo: y.redrawHalo,
            requireSorting: !1,
            searchPoint: c.noop,
            trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"]
        });
        g.registerSeriesType("packedbubble", e);
        "";
        "";
        return e
    });
    z(e, "Extensions/Polar.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Extensions/Pane.js"], e["Core/Pointer.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(e, c, h, g, a, u, d, r, n) {
        var x = e.animObject;
        d = d.seriesTypes;
        var b = n.addEvent,
            k = n.defined,
            l = n.find,
            t = n.isNumber,
            w = n.pick,
            z = n.splat,
            B = n.uniqueKey;
        e = n.wrap;
        var G = u.prototype;
        a = a.prototype;
        G.searchPointByAngle = function(a) {
            var b = this.chart,
                c = this.xAxis.pane.center;
            return this.searchKDTree({
                clientX: 180 + -180 / Math.PI * Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop)
            })
        };
        G.getConnectors = function(a, b, c, d) {
            var e = d ? 1 : 0;
            var f = 0 <= b && b <= a.length - 1 ? b : 0 > b ? a.length - 1 + b : 0;
            b = 0 > f - 1 ? a.length - (1 + e) : f - 1;
            e = f + 1 > a.length - 1 ? e : f + 1;
            var g = a[b];
            e = a[e];
            var h = g.plotX;
            g = g.plotY;
            var k = e.plotX;
            var l = e.plotY;
            e = a[f].plotX;
            f = a[f].plotY;
            h = (1.5 * e + h) / 2.5;
            g = (1.5 * f + g) / 2.5;
            k = (1.5 * e + k) / 2.5;
            var p = (1.5 * f + l) / 2.5;
            l = Math.sqrt(Math.pow(h - e, 2) + Math.pow(g - f, 2));
            var v = Math.sqrt(Math.pow(k - e, 2) + Math.pow(p - f, 2));
            h = Math.atan2(g - f, h - e);
            p = Math.PI / 2 + (h + Math.atan2(p - f, k - e)) / 2;
            Math.abs(h - p) > Math.PI / 2 && (p -= Math.PI);
            h = e + Math.cos(p) * l;
            g = f + Math.sin(p) * l;
            k = e + Math.cos(Math.PI + p) * v;
            p = f + Math.sin(Math.PI + p) * v;
            e = {
                rightContX: k,
                rightContY: p,
                leftContX: h,
                leftContY: g,
                plotX: e,
                plotY: f
            };
            c && (e.prevPointCont =
                this.getConnectors(a, b, !1, d));
            return e
        };
        G.toXY = function(a) {
            var b = this.chart,
                c = this.xAxis;
            var d = this.yAxis;
            var e = a.plotX,
                g = a.plotY,
                h = a.series,
                k = b.inverted,
                l = a.y,
                p = k ? e : d.len - g;
            k && h && !h.isRadialBar && (a.plotY = g = "number" === typeof l ? d.translate(l) || 0 : 0);
            a.rectPlotX = e;
            a.rectPlotY = g;
            d.center && (p += d.center[3] / 2);
            d = k ? d.postTranslate(g, p) : c.postTranslate(e, p);
            a.plotX = a.polarPlotX = d.x - b.plotLeft;
            a.plotY = a.polarPlotY = d.y - b.plotTop;
            this.kdByAngle ? (b = (e / Math.PI * 180 + c.pane.options.startAngle) % 360, 0 > b && (b += 360), a.clientX =
                b) : a.clientX = a.plotX
        };
        d.spline && (e(d.spline.prototype, "getPointSpline", function(a, b, c, d) {
            this.chart.polar ? d ? (a = this.getConnectors(b, d, !0, this.connectEnds), a = ["C", a.prevPointCont.rightContX, a.prevPointCont.rightContY, a.leftContX, a.leftContY, a.plotX, a.plotY]) : a = ["M", c.plotX, c.plotY] : a = a.call(this, b, c, d);
            return a
        }), d.areasplinerange && (d.areasplinerange.prototype.getPointSpline = d.spline.prototype.getPointSpline));
        b(u, "afterTranslate", function() {
            var a = this.chart;
            if (a.polar && this.xAxis) {
                (this.kdByAngle =
                    a.tooltip && a.tooltip.shared) ? this.searchPoint = this.searchPointByAngle: this.options.findNearestPointBy = "xy";
                if (!this.preventPostTranslate)
                    for (var c = this.points, d = c.length; d--;) this.toXY(c[d]), !a.hasParallelCoordinates && !this.yAxis.reversed && c[d].y < this.yAxis.min && (c[d].isNull = !0);
                this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(b(this, "afterRender", function() {
                    if (a.polar) {
                        var b = this.yAxis.pane.center;
                        this.clipCircle ? this.clipCircle.animate({
                            x: b[0],
                            y: b[1],
                            r: b[2] / 2,
                            innerR: b[3] /
                                2
                        }) : this.clipCircle = a.renderer.clipCircle(b[0], b[1], b[2] / 2, b[3] / 2);
                        this.group.clip(this.clipCircle);
                        this.setClip = h.noop
                    }
                })))
            }
        }, {
            order: 2
        });
        e(d.line.prototype, "getGraphPath", function(a, b) {
            var c = this,
                d;
            if (this.chart.polar) {
                b = b || this.points;
                for (d = 0; d < b.length; d++)
                    if (!b[d].isNull) {
                        var e = d;
                        break
                    } if (!1 !== this.options.connectEnds && "undefined" !== typeof e) {
                    this.connectEnds = !0;
                    b.splice(b.length, 0, b[e]);
                    var f = !0
                }
                b.forEach(function(a) {
                    "undefined" === typeof a.polarPlotY && c.toXY(a)
                })
            }
            d = a.apply(this, [].slice.call(arguments,
                1));
            f && b.pop();
            return d
        });
        var y = function(a, b) {
            var c = this,
                d = this.chart,
                e = this.options.animation,
                f = this.group,
                g = this.markerGroup,
                k = this.xAxis.center,
                l = d.plotLeft,
                p = d.plotTop,
                n, q, r, t;
            if (d.polar)
                if (c.isRadialBar) b || (c.startAngleRad = w(c.translatedThreshold, c.xAxis.startAngleRad), h.seriesTypes.pie.prototype.animate.call(c, b));
                else {
                    if (d.renderer.isSVG)
                        if (e = x(e), c.is("column")) {
                            if (!b) {
                                var u = k[3] / 2;
                                c.points.forEach(function(a) {
                                    n = a.graphic;
                                    r = (q = a.shapeArgs) && q.r;
                                    t = q && q.innerR;
                                    n && q && (n.attr({
                                            r: u,
                                            innerR: u
                                        }),
                                        n.animate({
                                            r: r,
                                            innerR: t
                                        }, c.options.animation))
                                })
                            }
                        } else b ? (a = {
                            translateX: k[0] + l,
                            translateY: k[1] + p,
                            scaleX: .001,
                            scaleY: .001
                        }, f.attr(a), g && g.attr(a)) : (a = {
                            translateX: l,
                            translateY: p,
                            scaleX: 1,
                            scaleY: 1
                        }, f.animate(a, e), g && g.animate(a, e))
                }
            else a.call(this, b)
        };
        e(G, "animate", y);
        if (d.column) {
            var q = d.arearange.prototype;
            d = d.column.prototype;
            d.polarArc = function(a, b, c, d) {
                var e = this.xAxis.center,
                    f = this.yAxis.len,
                    g = e[3] / 2;
                b = f - b + g;
                a = f - w(a, f) + g;
                this.yAxis.reversed && (0 > b && (b = g), 0 > a && (a = g));
                return {
                    x: e[0],
                    y: e[1],
                    r: b,
                    innerR: a,
                    start: c,
                    end: d
                }
            };
            e(d, "animate", y);
            e(d, "translate", function(a) {
                var b = this.options,
                    c = b.stacking,
                    d = this.chart,
                    e = this.xAxis,
                    g = this.yAxis,
                    h = g.reversed,
                    l = g.center,
                    p = e.startAngleRad,
                    q = e.endAngleRad - p;
                this.preventPostTranslate = !0;
                a.call(this);
                if (e.isRadial) {
                    a = this.points;
                    e = a.length;
                    var r = g.translate(g.min);
                    var u = g.translate(g.max);
                    b = b.threshold || 0;
                    if (d.inverted && t(b)) {
                        var w = g.translate(b);
                        k(w) && (0 > w ? w = 0 : w > q && (w = q), this.translatedThreshold = w + p)
                    }
                    for (; e--;) {
                        b = a[e];
                        var x = b.barX;
                        var y = b.x;
                        var z = b.y;
                        b.shapeType =
                            "arc";
                        if (d.inverted) {
                            b.plotY = g.translate(z);
                            if (c && g.stacking) {
                                if (z = g.stacking.stacks[(0 > z ? "-" : "") + this.stackKey], this.visible && z && z[y] && !b.isNull) {
                                    var B = z[y].points[this.getStackIndicator(void 0, y, this.index).key];
                                    var F = g.translate(B[0]);
                                    B = g.translate(B[1]);
                                    k(F) && (F = n.clamp(F, 0, q))
                                }
                            } else F = w, B = b.plotY;
                            F > B && (B = [F, F = B][0]);
                            if (!h)
                                if (F < r) F = r;
                                else if (B > u) B = u;
                            else {
                                if (B < r || F > u) F = B = 0
                            } else if (B > r) B = r;
                            else if (F < u) F = u;
                            else if (F > r || B < u) F = B = q;
                            g.min > g.max && (F = B = h ? q : 0);
                            F += p;
                            B += p;
                            l && (b.barX = x += l[3] / 2);
                            y = Math.max(x,
                                0);
                            z = Math.max(x + b.pointWidth, 0);
                            b.shapeArgs = {
                                x: l && l[0],
                                y: l && l[1],
                                r: z,
                                innerR: y,
                                start: F,
                                end: B
                            };
                            b.opacity = F === B ? 0 : void 0;
                            b.plotY = (k(this.translatedThreshold) && (F < this.translatedThreshold ? F : B)) - p
                        } else F = x + p, b.shapeArgs = this.polarArc(b.yBottom, b.plotY, F, F + b.pointWidth);
                        this.toXY(b);
                        d.inverted ? (x = g.postTranslate(b.rectPlotY, x + b.pointWidth / 2), b.tooltipPos = [x.x - d.plotLeft, x.y - d.plotTop]) : b.tooltipPos = [b.plotX, b.plotY];
                        l && (b.ttBelow = b.plotY > l[1])
                    }
                }
            });
            d.findAlignments = function(a, b) {
                null === b.align && (b.align =
                    20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center");
                null === b.verticalAlign && (b.verticalAlign = 45 > a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle");
                return b
            };
            q && (q.findAlignments = d.findAlignments);
            e(d, "alignDataLabel", function(a, b, c, d, e, g) {
                var f = this.chart,
                    h = w(d.inside, !!this.options.stacking);
                f.polar ? (a = b.rectPlotX / Math.PI * 180, f.inverted ? (this.forceDL = f.isInsidePlot(b.plotX, Math.round(b.plotY), !1), h && b.shapeArgs ? (e = b.shapeArgs, e = this.yAxis.postTranslate((e.start + e.end) / 2 - this.xAxis.startAngleRad, b.barX +
                    b.pointWidth / 2), e = {
                    x: e.x - f.plotLeft,
                    y: e.y - f.plotTop
                }) : b.tooltipPos && (e = {
                    x: b.tooltipPos[0],
                    y: b.tooltipPos[1]
                }), d.align = w(d.align, "center"), d.verticalAlign = w(d.verticalAlign, "middle")) : this.findAlignments && (d = this.findAlignments(a, d)), G.alignDataLabel.call(this, b, c, d, e, g), this.isRadialBar && b.shapeArgs && b.shapeArgs.start === b.shapeArgs.end && c.hide(!0)) : a.call(this, b, c, d, e, g)
            })
        }
        e(a, "getCoordinates", function(a, b) {
            var c = this.chart,
                d = {
                    xAxis: [],
                    yAxis: []
                };
            c.polar ? c.axes.forEach(function(a) {
                var e = a.isXAxis,
                    f = a.center;
                if ("colorAxis" !== a.coll) {
                    var g = b.chartX - f[0] - c.plotLeft;
                    f = b.chartY - f[1] - c.plotTop;
                    d[e ? "xAxis" : "yAxis"].push({
                        axis: a,
                        value: a.translate(e ? Math.PI - Math.atan2(g, f) : Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)), !0)
                    })
                }
            }) : d = a.call(this, b);
            return d
        });
        r.prototype.clipCircle = function(a, b, c, d) {
            var e = B(),
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = d ? this.arc(a, b, c, d, 0, 2 * Math.PI).add(f) : this.circle(a, b, c).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        };
        b(c, "getAxes", function() {
            this.pane || (this.pane = []);
            z(this.options.pane).forEach(function(a) {
                new g(a, this)
            }, this)
        });
        b(c, "afterDrawChartBox", function() {
            this.pane.forEach(function(a) {
                a.render()
            })
        });
        b(u, "afterInit", function() {
            var a = this.chart;
            a.inverted && a.polar && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0))
        });
        e(c.prototype, "get", function(a, b) {
            return l(this.pane || [], function(a) {
                return a.options.id === b
            }) || a.call(this, b)
        })
    });
    z(e, "masters/highcharts-more.src.js", [], function() {})
});
//# sourceMappingURL=highcharts-more.js.map