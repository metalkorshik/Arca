/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/highcharts/highcharts-more.js":
/*!****************************************************!*\
  !*** ./node_modules/highcharts/highcharts-more.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (c) {
   true && module.exports ? (c["default"] = c, module.exports = c) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (A) {
    c(A);
    c.Highcharts = A;
    return c;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (c) {
  function A(c, b, h, a) {
    c.hasOwnProperty(b) || (c[b] = a.apply(null, h));
  }

  c = c ? c._modules : {};
  A(c, "Extensions/Pane.js", [c["Core/Chart/Chart.js"], c["Core/Globals.js"], c["Core/Pointer.js"], c["Core/Utilities.js"], c["Mixins/CenteredSeries.js"]], function (c, b, h, a, f) {
    function q(e, f, m) {
      return Math.sqrt(Math.pow(e - m[0], 2) + Math.pow(f - m[1], 2)) <= m[2] / 2;
    }

    var u = a.addEvent,
        z = a.extend,
        E = a.merge,
        B = a.pick,
        e = a.splat;
    c.prototype.collectionsWithUpdate.push("pane");

    a = function () {
      function b(e, m) {
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
          borderColor: "#cccccc",
          backgroundColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [[0, "#ffffff"], [1, "#e6e6e6"]]
          },
          from: -Number.MAX_VALUE,
          innerRadius: 0,
          to: Number.MAX_VALUE,
          outerRadius: "105%"
        };
        this.init(e, m);
      }

      b.prototype.init = function (e, m) {
        this.chart = m;
        this.background = [];
        m.pane.push(this);
        this.setOptions(e);
      };

      b.prototype.setOptions = function (e) {
        this.options = E(this.defaultOptions, this.chart.angular ? {
          background: {}
        } : void 0, e);
      };

      b.prototype.render = function () {
        var b = this.options,
            m = this.options.background,
            f = this.chart.renderer;
        this.group || (this.group = f.g("pane-group").attr({
          zIndex: b.zIndex || 0
        }).add());
        this.updateCenter();
        if (m) for (m = e(m), b = Math.max(m.length, this.background.length || 0), f = 0; f < b; f++) m[f] && this.axis ? this.renderBackground(E(this.defaultBackgroundOptions, m[f]), f) : this.background[f] && (this.background[f] = this.background[f].destroy(), this.background.splice(f, 1));
      };

      b.prototype.renderBackground = function (e, f) {
        var b = "animate",
            m = {
          "class": "highcharts-pane " + (e.className || "")
        };
        this.chart.styledMode || z(m, {
          fill: e.backgroundColor,
          stroke: e.borderColor,
          "stroke-width": e.borderWidth
        });
        this.background[f] || (this.background[f] = this.chart.renderer.path().add(this.group), b = "attr");
        this.background[f][b]({
          d: this.axis.getPlotBandPath(e.from, e.to, e)
        }).attr(m);
      };

      b.prototype.updateCenter = function (e) {
        this.center = (e || this.axis || {}).center = f.getCenter.call(this);
      };

      b.prototype.update = function (e, f) {
        E(!0, this.options, e);
        E(!0, this.chart.options.pane, e);
        this.setOptions(this.options);
        this.render();
        this.chart.axes.forEach(function (e) {
          e.pane === this && (e.pane = null, e.update({}, f));
        }, this);
      };

      return b;
    }();

    c.prototype.getHoverPane = function (e) {
      var f = this,
          b;
      e && f.pane.forEach(function (m) {
        var a = e.chartX - f.plotLeft,
            p = e.chartY - f.plotTop;
        q(f.inverted ? p : a, f.inverted ? a : p, m.center) && (b = m);
      });
      return b;
    };

    u(c, "afterIsInsidePlot", function (e) {
      this.polar && (e.isInsidePlot = this.pane.some(function (f) {
        return q(e.x, e.y, f.center);
      }));
    });
    u(h, "beforeGetHoverData", function (e) {
      var f = this.chart;
      f.polar && (f.hoverPane = f.getHoverPane(e), e.filter = function (b) {
        return b.visible && !(!e.shared && b.directTouch) && B(b.options.enableMouseTracking, !0) && (!f.hoverPane || b.xAxis.pane === f.hoverPane);
      });
    });
    u(h, "afterGetHoverData", function (e) {
      var f = this.chart;
      e.hoverPoint && e.hoverPoint.plotX && e.hoverPoint.plotY && f.hoverPane && !q(e.hoverPoint.plotX, e.hoverPoint.plotY, f.hoverPane.center) && (e.hoverPoint = void 0);
    });
    b.Pane = a;
    return b.Pane;
  });
  A(c, "Core/Axis/HiddenAxis.js", [], function () {
    return function () {
      function c() {}

      c.init = function (b) {
        b.getOffset = function () {};

        b.redraw = function () {
          this.isDirty = !1;
        };

        b.render = function () {
          this.isDirty = !1;
        };

        b.createLabelCollector = function () {
          return function () {};
        };

        b.setScale = function () {};

        b.setCategories = function () {};

        b.setTitle = function () {};

        b.isHidden = !0;
      };

      return c;
    }();
  });
  A(c, "Core/Axis/RadialAxis.js", [c["Core/Axis/Axis.js"], c["Core/Axis/Tick.js"], c["Core/Axis/HiddenAxis.js"], c["Core/Utilities.js"]], function (c, b, h, a) {
    var f = a.addEvent,
        q = a.correctFloat,
        u = a.defined,
        z = a.extend,
        E = a.fireEvent,
        B = a.merge,
        e = a.pick,
        x = a.relativeLength,
        w = a.wrap;

    a = function () {
      function b() {}

      b.init = function (f) {
        var b = c.prototype;

        f.setOptions = function (e) {
          e = this.options = B(f.constructor.defaultOptions, this.defaultPolarOptions, e);
          e.plotBands || (e.plotBands = []);
          E(this, "afterSetOptions");
        };

        f.getOffset = function () {
          b.getOffset.call(this);
          this.chart.axisOffset[this.side] = 0;
        };

        f.getLinePath = function (f, l, k) {
          f = this.pane.center;
          var d = this.chart,
              g = e(l, f[2] / 2 - this.offset);
          "undefined" === typeof k && (k = this.horiz ? 0 : this.center && -this.center[3] / 2);
          k && (g += k);
          this.isCircular || "undefined" !== typeof l ? (l = this.chart.renderer.symbols.arc(this.left + f[0], this.top + f[1], g, g, {
            start: this.startAngleRad,
            end: this.endAngleRad,
            open: !0,
            innerR: 0
          }), l.xBounds = [this.left + f[0]], l.yBounds = [this.top + f[1] - g]) : (l = this.postTranslate(this.angleRad, g), l = [["M", this.center[0] + d.plotLeft, this.center[1] + d.plotTop], ["L", l.x, l.y]]);
          return l;
        };

        f.setAxisTranslation = function () {
          b.setAxisTranslation.call(this);
          this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
        };

        f.beforeSetTickPositions = function () {
          this.autoConnect = this.isCircular && "undefined" === typeof e(this.userMax, this.options.max) && q(this.endAngleRad - this.startAngleRad) === q(2 * Math.PI);
          !this.isCircular && this.chart.inverted && this.max++;
          this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
        };

        f.setAxisSize = function () {
          b.setAxisSize.call(this);

          if (this.isRadial) {
            this.pane.updateCenter(this);
            var f = this.center = z([], this.pane.center);
            if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad;else {
              var l = this.postTranslate(this.angleRad, f[3] / 2);
              f[0] = l.x - this.chart.plotLeft;
              f[1] = l.y - this.chart.plotTop;
            }
            this.len = this.width = this.height = (f[2] - f[3]) * e(this.sector, 1) / 2;
          }
        };

        f.getPosition = function (f, l) {
          f = this.translate(f);
          return this.postTranslate(this.isCircular ? f : this.angleRad, e(this.isCircular ? l : 0 > f ? 0 : f, this.center[2] / 2) - this.offset);
        };

        f.postTranslate = function (e, l) {
          var k = this.chart,
              d = this.center;
          e = this.startAngleRad + e;
          return {
            x: k.plotLeft + d[0] + Math.cos(e) * l,
            y: k.plotTop + d[1] + Math.sin(e) * l
          };
        };

        f.getPlotBandPath = function (f, l, k) {
          var d = function (d) {
            if ("string" === typeof d) {
              var g = parseInt(d, 10);
              n.test(d) && (g = g * D / 100);
              return g;
            }

            return d;
          },
              g = this.center,
              r = this.startAngleRad,
              D = g[2] / 2,
              t = Math.min(this.offset, 0),
              n = /%$/;

          var y = this.isCircular;
          var b = e(d(k.outerRadius), D),
              p = d(k.innerRadius);
          d = e(d(k.thickness), 10);
          if ("polygon" === this.options.gridLineInterpolation) t = this.getPlotLinePath({
            value: f
          }).concat(this.getPlotLinePath({
            value: l,
            reverse: !0
          }));else {
            f = Math.max(f, this.min);
            l = Math.min(l, this.max);
            f = this.translate(f);
            l = this.translate(l);
            y || (b = f || 0, p = l || 0);
            if ("circle" !== k.shape && y) k = r + (f || 0), r += l || 0;else {
              k = -Math.PI / 2;
              r = 1.5 * Math.PI;
              var a = !0;
            }
            b -= t;
            t = this.chart.renderer.symbols.arc(this.left + g[0], this.top + g[1], b, b, {
              start: Math.min(k, r),
              end: Math.max(k, r),
              innerR: e(p, b - (d - t)),
              open: a
            });
            y && (y = (r + k) / 2, a = this.left + g[0] + g[2] / 2 * Math.cos(y), t.xBounds = y > -Math.PI / 2 && y < Math.PI / 2 ? [a, this.chart.plotWidth] : [0, a], t.yBounds = [this.top + g[1] + g[2] / 2 * Math.sin(y)], t.yBounds[0] += y > -Math.PI && 0 > y || y > Math.PI ? -10 : 10);
          }
          return t;
        };

        f.getCrosshairPosition = function (e, l, k) {
          var d = e.value,
              g = this.pane.center;

          if (this.isCircular) {
            if (u(d)) e.point && (r = e.point.shapeArgs || {}, r.start && (d = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x));else {
              var r = e.chartX || 0;
              var D = e.chartY || 0;
              d = this.translate(Math.atan2(D - k, r - l) - this.startAngleRad, !0);
            }
            e = this.getPosition(d);
            r = e.x;
            D = e.y;
          } else u(d) || (r = e.chartX, D = e.chartY), u(r) && u(D) && (k = g[1] + this.chart.plotTop, d = this.translate(Math.min(Math.sqrt(Math.pow(r - l, 2) + Math.pow(D - k, 2)), g[2] / 2) - g[3] / 2, !0));

          return [d, r || 0, D || 0];
        };

        f.getPlotLinePath = function (e) {
          var l = this,
              k = l.pane.center,
              d = l.chart,
              g = d.inverted,
              r = e.value,
              D = e.reverse,
              t = l.getPosition(r),
              n = l.pane.options.background ? l.pane.options.background[0] || l.pane.options.background : {},
              f = n.innerRadius || "0%",
              b = n.outerRadius || "100%";
          n = k[0] + d.plotLeft;
          var a = k[1] + d.plotTop,
              p = t.x,
              m = t.y,
              h = l.height;
          t = k[3] / 2;
          var v;
          e.isCrosshair && (m = this.getCrosshairPosition(e, n, a), r = m[0], p = m[1], m = m[2]);
          if (l.isCircular) r = Math.sqrt(Math.pow(p - n, 2) + Math.pow(m - a, 2)), D = "string" === typeof f ? x(f, 1) : f / r, d = "string" === typeof b ? x(b, 1) : b / r, k && t && (r = t / r, D < r && (D = r), d < r && (d = r)), k = [["M", n + D * (p - n), a - D * (a - m)], ["L", p - (1 - d) * (p - n), m + (1 - d) * (a - m)]];else if ((r = l.translate(r)) && (0 > r || r > h) && (r = 0), "circle" === l.options.gridLineInterpolation) k = l.getLinePath(0, r, t);else if (k = [], d[g ? "yAxis" : "xAxis"].forEach(function (d) {
            d.pane === l.pane && (v = d);
          }), v) for (n = v.tickPositions, v.autoConnect && (n = n.concat([n[0]])), D && (n = n.slice().reverse()), r && (r += t), p = 0; p < n.length; p++) a = v.getPosition(n[p], r), k.push(p ? ["L", a.x, a.y] : ["M", a.x, a.y]);
          return k;
        };

        f.getTitlePosition = function () {
          var e = this.center,
              l = this.chart,
              k = this.options.title;
          return {
            x: l.plotLeft + e[0] + (k.x || 0),
            y: l.plotTop + e[1] - {
              high: .5,
              middle: .25,
              low: 0
            }[k.align] * e[2] + (k.y || 0)
          };
        };

        f.createLabelCollector = function () {
          var e = this;
          return function () {
            if (e.isRadial && e.tickPositions && !0 !== e.options.labels.allowOverlap) return e.tickPositions.map(function (l) {
              return e.ticks[l] && e.ticks[l].label;
            }).filter(function (e) {
              return !!e;
            });
          };
        };
      };

      b.compose = function (a, m) {
        f(a, "init", function (e) {
          var l = this.chart,
              k = l.inverted,
              d = l.angular,
              g = l.polar,
              r = this.isXAxis,
              D = this.coll,
              t = d && r,
              n,
              f = l.options;
          e = e.userOptions.pane || 0;
          e = this.pane = l.pane && l.pane[e];
          if ("colorAxis" === D) this.isRadial = !1;else {
            if (d) {
              if (t ? h.init(this) : b.init(this), n = !r) this.defaultPolarOptions = b.defaultRadialGaugeOptions;
            } else g && (b.init(this), this.defaultPolarOptions = (n = this.horiz) ? b.defaultCircularOptions : B("xAxis" === D ? a.defaultOptions : a.defaultYAxisOptions, b.defaultRadialOptions), k && "yAxis" === D && (this.defaultPolarOptions.stackLabels = a.defaultYAxisOptions.stackLabels));

            d || g ? (this.isRadial = !0, f.chart.zoomType = null, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && l.labelCollectors.push(this.labelCollector)) : this.isRadial = !1;
            e && n && (e.axis = this);
            this.isCircular = n;
          }
        });
        f(a, "afterInit", function () {
          var f = this.chart,
              l = this.options,
              k = this.pane,
              d = k && k.options;
          f.angular && this.isXAxis || !k || !f.angular && !f.polar || (this.angleRad = (l.angle || 0) * Math.PI / 180, this.startAngleRad = (d.startAngle - 90) * Math.PI / 180, this.endAngleRad = (e(d.endAngle, d.startAngle + 360) - 90) * Math.PI / 180, this.offset = l.offset || 0);
        });
        f(a, "autoLabelAlign", function (e) {
          this.isRadial && (e.align = void 0, e.preventDefault());
        });
        f(a, "destroy", function () {
          if (this.chart && this.chart.labelCollectors) {
            var e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
            0 <= e && this.chart.labelCollectors.splice(e, 1);
          }
        });
        f(a, "initialAxisTranslation", function () {
          this.isRadial && this.beforeSetTickPositions();
        });
        f(m, "afterGetPosition", function (e) {
          this.axis.getPosition && z(e.pos, this.axis.getPosition(this.pos));
        });
        f(m, "afterGetLabelPosition", function (f) {
          var l = this.axis,
              k = this.label;

          if (k) {
            var d = k.getBBox(),
                g = l.options.labels,
                r = g.y,
                D = 20,
                t = g.align,
                n = (l.translate(this.pos) + l.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
                y = Math.round(n),
                b = "end",
                a = 0 > y ? y + 360 : y,
                m = a,
                h = 0,
                v = 0,
                p = null === g.y ? .3 * -d.height : 0;

            if (l.isRadial) {
              var c = l.getPosition(this.pos, l.center[2] / 2 + x(e(g.distance, -25), l.center[2] / 2, -l.center[2] / 2));
              "auto" === g.rotation ? k.attr({
                rotation: n
              }) : null === r && (r = l.chart.renderer.fontMetrics(k.styles && k.styles.fontSize).b - d.height / 2);
              null === t && (l.isCircular ? (d.width > l.len * l.tickInterval / (l.max - l.min) && (D = 0), t = n > D && n < 180 - D ? "left" : n > 180 + D && n < 360 - D ? "right" : "center") : t = "center", k.attr({
                align: t
              }));

              if ("auto" === t && 2 === l.tickPositions.length && l.isCircular) {
                90 < a && 180 > a ? a = 180 - a : 270 < a && 360 >= a && (a = 540 - a);
                180 < m && 360 >= m && (m = 360 - m);
                if (l.pane.options.startAngle === y || l.pane.options.startAngle === y + 360 || l.pane.options.startAngle === y - 360) b = "start";
                t = -90 <= y && 90 >= y || -360 <= y && -270 >= y || 270 <= y && 360 >= y ? "start" === b ? "right" : "left" : "start" === b ? "left" : "right";
                70 < m && 110 > m && (t = "center");
                15 > a || 180 <= a && 195 > a ? h = .3 * d.height : 15 <= a && 35 >= a ? h = "start" === b ? 0 : .75 * d.height : 195 <= a && 215 >= a ? h = "start" === b ? .75 * d.height : 0 : 35 < a && 90 >= a ? h = "start" === b ? .25 * -d.height : d.height : 215 < a && 270 >= a && (h = "start" === b ? d.height : .25 * -d.height);
                15 > m ? v = "start" === b ? .15 * -d.height : .15 * d.height : 165 < m && 180 >= m && (v = "start" === b ? .15 * d.height : .15 * -d.height);
                k.attr({
                  align: t
                });
                k.translate(v, h + p);
              }

              f.pos.x = c.x + g.x;
              f.pos.y = c.y + r;
            }
          }
        });
        w(m.prototype, "getMarkPath", function (e, l, k, d, g, r, D) {
          var t = this.axis;
          t.isRadial ? (e = t.getPosition(this.pos, t.center[2] / 2 + d), l = ["M", l, k, "L", e.x, e.y]) : l = e.call(this, l, k, d, g, r, D);
          return l;
        });
      };

      b.defaultCircularOptions = {
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
      b.defaultRadialGaugeOptions = {
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
      b.defaultRadialOptions = {
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
      return b;
    }();

    a.compose(c, b);
    return a;
  });
  A(c, "Series/AreaRangeSeries.js", [c["Core/Series/Series.js"], c["Core/Globals.js"], c["Core/Series/Point.js"], c["Core/Utilities.js"]], function (c, b, h, a) {
    var f = a.defined,
        q = a.extend,
        u = a.isArray,
        z = a.isNumber,
        E = a.pick,
        B = c.seriesTypes.area.prototype,
        e = c.seriesTypes.column.prototype,
        x = h.prototype,
        w = b.Series.prototype;
    c.seriesType("arearange", "area", {
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
    }, {
      pointArrayMap: ["low", "high"],
      pointValKey: "low",
      deferTranslatePolar: !0,
      toYData: function (e) {
        return [e.low, e.high];
      },
      highToXY: function (e) {
        var f = this.chart,
            b = this.xAxis.postTranslate(e.rectPlotX, this.yAxis.len - e.plotHigh);
        e.plotHighX = b.x - f.plotLeft;
        e.plotHigh = b.y - f.plotTop;
        e.plotLowX = e.plotX;
      },
      translate: function () {
        var e = this,
            f = e.yAxis,
            b = !!e.modifyValue;
        B.translate.apply(e);
        e.points.forEach(function (a) {
          var l = a.high,
              k = a.plotY;
          a.isNull ? a.plotY = null : (a.plotLow = k, a.plotHigh = f.translate(b ? e.modifyValue(l, a) : l, 0, 1, 0, 1), b && (a.yBottom = a.plotHigh));
        });
        this.chart.polar && this.points.forEach(function (f) {
          e.highToXY(f);
          f.tooltipPos = [(f.plotHighX + f.plotLowX) / 2, (f.plotHigh + f.plotLow) / 2];
        });
      },
      getGraphPath: function (e) {
        var f = [],
            b = [],
            a,
            l = B.getGraphPath;
        var k = this.options;
        var d = this.chart.polar,
            g = d && !1 !== k.connectEnds,
            r = k.connectNulls,
            D = k.step;
        e = e || this.points;

        for (a = e.length; a--;) {
          var t = e[a];
          var n = d ? {
            plotX: t.rectPlotX,
            plotY: t.yBottom,
            doCurve: !1
          } : {
            plotX: t.plotX,
            plotY: t.plotY,
            doCurve: !1
          };
          t.isNull || g || r || e[a + 1] && !e[a + 1].isNull || b.push(n);
          var y = {
            polarPlotY: t.polarPlotY,
            rectPlotX: t.rectPlotX,
            yBottom: t.yBottom,
            plotX: E(t.plotHighX, t.plotX),
            plotY: t.plotHigh,
            isNull: t.isNull
          };
          b.push(y);
          f.push(y);
          t.isNull || g || r || e[a - 1] && !e[a - 1].isNull || b.push(n);
        }

        e = l.call(this, e);
        D && (!0 === D && (D = "left"), k.step = {
          left: "right",
          center: "center",
          right: "left"
        }[D]);
        f = l.call(this, f);
        b = l.call(this, b);
        k.step = D;
        k = [].concat(e, f);
        !this.chart.polar && b[0] && "M" === b[0][0] && (b[0] = ["L", b[0][1], b[0][2]]);
        this.graphPath = k;
        this.areaPath = e.concat(b);
        k.isArea = !0;
        k.xMap = e.xMap;
        this.areaPath.xMap = e.xMap;
        return k;
      },
      drawDataLabels: function () {
        var e = this.points,
            f = e.length,
            b,
            a = [],
            l = this.options.dataLabels,
            k,
            d = this.chart.inverted;

        if (u(l)) {
          var g = l[0] || {
            enabled: !1
          };
          var r = l[1] || {
            enabled: !1
          };
        } else g = q({}, l), g.x = l.xHigh, g.y = l.yHigh, r = q({}, l), r.x = l.xLow, r.y = l.yLow;

        if (g.enabled || this._hasPointLabels) {
          for (b = f; b--;) if (k = e[b]) {
            var D = g.inside ? k.plotHigh < k.plotLow : k.plotHigh > k.plotLow;
            k.y = k.high;
            k._plotY = k.plotY;
            k.plotY = k.plotHigh;
            a[b] = k.dataLabel;
            k.dataLabel = k.dataLabelUpper;
            k.below = D;
            d ? g.align || (g.align = D ? "right" : "left") : g.verticalAlign || (g.verticalAlign = D ? "top" : "bottom");
          }

          this.options.dataLabels = g;
          w.drawDataLabels && w.drawDataLabels.apply(this, arguments);

          for (b = f; b--;) if (k = e[b]) k.dataLabelUpper = k.dataLabel, k.dataLabel = a[b], delete k.dataLabels, k.y = k.low, k.plotY = k._plotY;
        }

        if (r.enabled || this._hasPointLabels) {
          for (b = f; b--;) if (k = e[b]) D = r.inside ? k.plotHigh < k.plotLow : k.plotHigh > k.plotLow, k.below = !D, d ? r.align || (r.align = D ? "left" : "right") : r.verticalAlign || (r.verticalAlign = D ? "bottom" : "top");

          this.options.dataLabels = r;
          w.drawDataLabels && w.drawDataLabels.apply(this, arguments);
        }

        if (g.enabled) for (b = f; b--;) if (k = e[b]) k.dataLabels = [k.dataLabelUpper, k.dataLabel].filter(function (d) {
          return !!d;
        });
        this.options.dataLabels = l;
      },
      alignDataLabel: function () {
        e.alignDataLabel.apply(this, arguments);
      },
      drawPoints: function () {
        var e = this.points.length,
            b;
        w.drawPoints.apply(this, arguments);

        for (b = 0; b < e;) {
          var a = this.points[b];
          a.origProps = {
            plotY: a.plotY,
            plotX: a.plotX,
            isInside: a.isInside,
            negative: a.negative,
            zone: a.zone,
            y: a.y
          };
          a.lowerGraphic = a.graphic;
          a.graphic = a.upperGraphic;
          a.plotY = a.plotHigh;
          f(a.plotHighX) && (a.plotX = a.plotHighX);
          a.y = a.high;
          a.negative = a.high < (this.options.threshold || 0);
          a.zone = this.zones.length && a.getZone();
          this.chart.polar || (a.isInside = a.isTopInside = "undefined" !== typeof a.plotY && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len);
          b++;
        }

        w.drawPoints.apply(this, arguments);

        for (b = 0; b < e;) a = this.points[b], a.upperGraphic = a.graphic, a.graphic = a.lowerGraphic, q(a, a.origProps), delete a.origProps, b++;
      },
      setStackedPoints: b.noop
    }, {
      setState: function () {
        var e = this.state,
            a = this.series,
            b = a.chart.polar;
        f(this.plotHigh) || (this.plotHigh = a.yAxis.toPixels(this.high, !0));
        f(this.plotLow) || (this.plotLow = this.plotY = a.yAxis.toPixels(this.low, !0));
        a.stateMarkerGraphic && (a.lowerStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.upperStateMarkerGraphic);
        this.graphic = this.upperGraphic;
        this.plotY = this.plotHigh;
        b && (this.plotX = this.plotHighX);
        x.setState.apply(this, arguments);
        this.state = e;
        this.plotY = this.plotLow;
        this.graphic = this.lowerGraphic;
        b && (this.plotX = this.plotLowX);
        a.stateMarkerGraphic && (a.upperStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.lowerStateMarkerGraphic, a.lowerStateMarkerGraphic = void 0);
        x.setState.apply(this, arguments);
      },
      haloPath: function () {
        var e = this.series.chart.polar,
            a = [];
        this.plotY = this.plotLow;
        e && (this.plotX = this.plotLowX);
        this.isInside && (a = x.haloPath.apply(this, arguments));
        this.plotY = this.plotHigh;
        e && (this.plotX = this.plotHighX);
        this.isTopInside && (a = a.concat(x.haloPath.apply(this, arguments)));
        return a;
      },
      destroyElements: function () {
        ["lowerGraphic", "upperGraphic"].forEach(function (e) {
          this[e] && (this[e] = this[e].destroy());
        }, this);
        this.graphic = null;
        return x.destroyElements.apply(this, arguments);
      },
      isValid: function () {
        return z(this.low) && z(this.high);
      }
    });
    "";
  });
  A(c, "Series/AreaSplineRangeSeries.js", [c["Core/Series/Series.js"]], function (c) {
    c.seriesType("areasplinerange", "arearange", null, {
      getPointSpline: c.seriesTypes.spline.prototype.getPointSpline
    });
    "";
  });
  A(c, "Series/ColumnRangeSeries.js", [c["Core/Series/Series.js"], c["Core/Globals.js"], c["Core/Options.js"], c["Core/Utilities.js"]], function (c, b, h, a) {
    b = b.noop;
    h = h.defaultOptions;
    var f = a.clamp,
        q = a.merge,
        u = a.pick,
        z = c.seriesTypes.column.prototype;
    c.seriesType("columnrange", "arearange", q(h.plotOptions.column, h.plotOptions.arearange, {
      pointRange: null,
      marker: null,
      states: {
        hover: {
          halo: !1
        }
      }
    }), {
      translate: function () {
        var a = this,
            b = a.yAxis,
            e = a.xAxis,
            h = e.startAngleRad,
            c,
            m = a.chart,
            q = a.xAxis.isRadial,
            v = Math.max(m.chartWidth, m.chartHeight) + 999,
            p;
        z.translate.apply(a);
        a.points.forEach(function (l) {
          var k = l.shapeArgs,
              d = a.options.minPointLength;
          l.plotHigh = p = f(b.translate(l.high, 0, 1, 0, 1), -v, v);
          l.plotLow = f(l.plotY, -v, v);
          var g = p;
          var r = u(l.rectPlotY, l.plotY) - p;
          Math.abs(r) < d ? (d -= r, r += d, g -= d / 2) : 0 > r && (r *= -1, g -= r);
          q ? (c = l.barX + h, l.shapeType = "arc", l.shapeArgs = a.polarArc(g + r, g, c, c + l.pointWidth)) : (k.height = r, k.y = g, l.tooltipPos = m.inverted ? [b.len + b.pos - m.plotLeft - g - r / 2, e.len + e.pos - m.plotTop - k.x - k.width / 2, r] : [e.left - m.plotLeft + k.x + k.width / 2, b.pos - m.plotTop + g + r / 2, r]);
        });
      },
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      drawGraph: b,
      getSymbol: b,
      crispCol: function () {
        return z.crispCol.apply(this, arguments);
      },
      drawPoints: function () {
        return z.drawPoints.apply(this, arguments);
      },
      drawTracker: function () {
        return z.drawTracker.apply(this, arguments);
      },
      getColumnMetrics: function () {
        return z.getColumnMetrics.apply(this, arguments);
      },
      pointAttribs: function () {
        return z.pointAttribs.apply(this, arguments);
      },
      animate: function () {
        return z.animate.apply(this, arguments);
      },
      polarArc: function () {
        return z.polarArc.apply(this, arguments);
      },
      translate3dPoints: function () {
        return z.translate3dPoints.apply(this, arguments);
      },
      translate3dShapes: function () {
        return z.translate3dShapes.apply(this, arguments);
      }
    }, {
      setState: z.pointClass.prototype.setState
    });
    "";
  });
  A(c, "Series/ColumnPyramidSeries.js", [c["Core/Series/Series.js"], c["Series/ColumnSeries.js"], c["Core/Utilities.js"]], function (c, b, h) {
    var a = b.prototype,
        f = h.clamp,
        q = h.pick;
    c.seriesType("columnpyramid", "column", {}, {
      translate: function () {
        var b = this,
            h = b.chart,
            c = b.options,
            B = b.dense = 2 > b.closestPointRange * b.xAxis.transA;
        B = b.borderWidth = q(c.borderWidth, B ? 0 : 1);
        var e = b.yAxis,
            x = c.threshold,
            w = b.translatedThreshold = e.getThreshold(x),
            m = q(c.minPointLength, 5),
            C = b.getColumnMetrics(),
            v = C.width,
            p = b.barW = Math.max(v, 1 + 2 * B),
            l = b.pointXOffset = C.offset;
        h.inverted && (w -= .5);
        c.pointPadding && (p = Math.ceil(p));
        a.translate.apply(b);
        b.points.forEach(function (k) {
          var d = q(k.yBottom, w),
              g = 999 + Math.abs(d),
              r = f(k.plotY, -g, e.len + g);
          g = k.plotX + l;
          var a = p / 2,
              t = Math.min(r, d);
          d = Math.max(r, d) - t;
          var n;
          k.barX = g;
          k.pointWidth = v;
          k.tooltipPos = h.inverted ? [e.len + e.pos - h.plotLeft - r, b.xAxis.len - g - a, d] : [g + a, r + e.pos - h.plotTop, d];
          r = x + (k.total || k.y);
          "percent" === c.stacking && (r = x + (0 > k.y) ? -100 : 100);
          r = e.toPixels(r, !0);
          var y = (n = h.plotHeight - r - (h.plotHeight - w)) ? a * (t - r) / n : 0;
          var G = n ? a * (t + d - r) / n : 0;
          n = g - y + a;
          y = g + y + a;
          var H = g + G + a;
          G = g - G + a;
          var u = t - m;
          var F = t + d;
          0 > k.y && (u = t, F = t + d + m);
          h.inverted && (H = h.plotWidth - t, n = r - (h.plotWidth - w), y = a * (r - H) / n, G = a * (r - (H - d)) / n, n = g + a + y, y = n - 2 * y, H = g - G + a, G = g + G + a, u = t, F = t + d - m, 0 > k.y && (F = t + d + m));
          k.shapeType = "path";
          k.shapeArgs = {
            x: n,
            y: u,
            width: y - n,
            height: d,
            d: [["M", n, u], ["L", y, u], ["L", H, F], ["L", G, F], ["Z"]]
          };
        });
      }
    });
    "";
  });
  A(c, "Series/GaugeSeries.js", [c["Core/Series/Series.js"], c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, b, h) {
    var a = h.clamp,
        f = h.isNumber,
        q = h.merge,
        u = h.pick,
        z = h.pInt,
        E = b.Series;
    h = b.TrackerMixin;
    c.seriesType("gauge", "line", {
      dataLabels: {
        borderColor: "#cccccc",
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
    }, {
      angular: !0,
      directTouch: !0,
      drawGraph: b.noop,
      fixedBox: !0,
      forceDL: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      translate: function () {
        var b = this.yAxis,
            e = this.options,
            h = b.center;
        this.generatePoints();
        this.points.forEach(function (c) {
          var m = q(e.dial, c.dial),
              x = z(u(m.radius, "80%")) * h[2] / 200,
              w = z(u(m.baseLength, "70%")) * x / 100,
              p = z(u(m.rearLength, "10%")) * x / 100,
              l = m.baseWidth || 3,
              k = m.topWidth || 1,
              d = e.overshoot,
              g = b.startAngleRad + b.translate(c.y, null, null, null, !0);
          if (f(d) || !1 === e.wrap) d = f(d) ? d / 180 * Math.PI : 0, g = a(g, b.startAngleRad - d, b.endAngleRad + d);
          g = 180 * g / Math.PI;
          c.shapeType = "path";
          c.shapeArgs = {
            d: m.path || [["M", -p, -l / 2], ["L", w, -l / 2], ["L", x, -k / 2], ["L", x, k / 2], ["L", w, l / 2], ["L", -p, l / 2], ["Z"]],
            translateX: h[0],
            translateY: h[1],
            rotation: g
          };
          c.plotX = h[0];
          c.plotY = h[1];
        });
      },
      drawPoints: function () {
        var a = this,
            e = a.chart,
            b = a.yAxis.center,
            f = a.pivot,
            h = a.options,
            c = h.pivot,
            z = e.renderer;
        a.points.forEach(function (b) {
          var f = b.graphic,
              k = b.shapeArgs,
              d = k.d,
              g = q(h.dial, b.dial);
          f ? (f.animate(k), k.d = d) : b.graphic = z[b.shapeType](k).attr({
            rotation: k.rotation,
            zIndex: 1
          }).addClass("highcharts-dial").add(a.group);
          if (!e.styledMode) b.graphic[f ? "animate" : "attr"]({
            stroke: g.borderColor || "none",
            "stroke-width": g.borderWidth || 0,
            fill: g.backgroundColor || "#000000"
          });
        });
        f ? f.animate({
          translateX: b[0],
          translateY: b[1]
        }) : (a.pivot = z.circle(0, 0, u(c.radius, 5)).attr({
          zIndex: 2
        }).addClass("highcharts-pivot").translate(b[0], b[1]).add(a.group), e.styledMode || a.pivot.attr({
          "stroke-width": c.borderWidth || 0,
          stroke: c.borderColor || "#cccccc",
          fill: c.backgroundColor || "#000000"
        }));
      },
      animate: function (a) {
        var e = this;
        a || e.points.forEach(function (a) {
          var b = a.graphic;
          b && (b.attr({
            rotation: 180 * e.yAxis.startAngleRad / Math.PI
          }), b.animate({
            rotation: a.shapeArgs.rotation
          }, e.options.animation));
        });
      },
      render: function () {
        this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
        E.prototype.render.call(this);
        this.group.clip(this.chart.clipRect);
      },
      setData: function (a, e) {
        E.prototype.setData.call(this, a, !1);
        this.processData();
        this.generatePoints();
        u(e, !0) && this.chart.redraw();
      },
      hasData: function () {
        return !!this.points.length;
      },
      drawTracker: h && h.drawTrackerPoint
    }, {
      setState: function (a) {
        this.state = a;
      }
    });
    "";
  });
  A(c, "Series/BoxPlotSeries.js", [c["Core/Series/Series.js"], c["Series/ColumnSeries.js"], c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, b, h, a) {
    var f = b.prototype;
    b = h.noop;
    var q = a.pick;
    c.seriesType("boxplot", "column", {
      threshold: null,
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
      },
      whiskerLength: "50%",
      fillColor: "#ffffff",
      lineWidth: 1,
      medianWidth: 2,
      whiskerWidth: 2
    }, {
      pointArrayMap: ["low", "q1", "median", "q3", "high"],
      toYData: function (a) {
        return [a.low, a.q1, a.median, a.q3, a.high];
      },
      pointValKey: "high",
      pointAttribs: function () {
        return {};
      },
      drawDataLabels: b,
      translate: function () {
        var a = this.yAxis,
            b = this.pointArrayMap;
        f.translate.apply(this);
        this.points.forEach(function (f) {
          b.forEach(function (b) {
            null !== f[b] && (f[b + "Plot"] = a.translate(f[b], 0, 1, 0, 1));
          });
          f.plotHigh = f.highPlot;
        });
      },
      drawPoints: function () {
        var a = this,
            b = a.options,
            f = a.chart,
            h = f.renderer,
            e,
            c,
            w,
            m,
            C,
            v,
            p = 0,
            l,
            k,
            d,
            g,
            r = !1 !== a.doQuartiles,
            D,
            t = a.options.whiskerLength;
        a.points.forEach(function (n) {
          var y = n.graphic,
              G = y ? "animate" : "attr",
              x = n.shapeArgs,
              I = {},
              F = {},
              J = {},
              K = {},
              u = n.color || a.color;
          "undefined" !== typeof n.plotY && (l = Math.round(x.width), k = Math.floor(x.x), d = k + l, g = Math.round(l / 2), e = Math.floor(r ? n.q1Plot : n.lowPlot), c = Math.floor(r ? n.q3Plot : n.lowPlot), w = Math.floor(n.highPlot), m = Math.floor(n.lowPlot), y || (n.graphic = y = h.g("point").add(a.group), n.stem = h.path().addClass("highcharts-boxplot-stem").add(y), t && (n.whiskers = h.path().addClass("highcharts-boxplot-whisker").add(y)), r && (n.box = h.path(void 0).addClass("highcharts-boxplot-box").add(y)), n.medianShape = h.path(void 0).addClass("highcharts-boxplot-median").add(y)), f.styledMode || (F.stroke = n.stemColor || b.stemColor || u, F["stroke-width"] = q(n.stemWidth, b.stemWidth, b.lineWidth), F.dashstyle = n.stemDashStyle || b.stemDashStyle || b.dashStyle, n.stem.attr(F), t && (J.stroke = n.whiskerColor || b.whiskerColor || u, J["stroke-width"] = q(n.whiskerWidth, b.whiskerWidth, b.lineWidth), J.dashstyle = n.whiskerDashStyle || b.whiskerDashStyle || b.dashStyle, n.whiskers.attr(J)), r && (I.fill = n.fillColor || b.fillColor || u, I.stroke = b.lineColor || u, I["stroke-width"] = b.lineWidth || 0, I.dashstyle = n.boxDashStyle || b.boxDashStyle || b.dashStyle, n.box.attr(I)), K.stroke = n.medianColor || b.medianColor || u, K["stroke-width"] = q(n.medianWidth, b.medianWidth, b.lineWidth), K.dashstyle = n.medianDashStyle || b.medianDashStyle || b.dashStyle, n.medianShape.attr(K)), v = n.stem.strokeWidth() % 2 / 2, p = k + g + v, y = [["M", p, c], ["L", p, w], ["M", p, e], ["L", p, m]], n.stem[G]({
            d: y
          }), r && (v = n.box.strokeWidth() % 2 / 2, e = Math.floor(e) + v, c = Math.floor(c) + v, k += v, d += v, y = [["M", k, c], ["L", k, e], ["L", d, e], ["L", d, c], ["L", k, c], ["Z"]], n.box[G]({
            d: y
          })), t && (v = n.whiskers.strokeWidth() % 2 / 2, w += v, m += v, D = /%$/.test(t) ? g * parseFloat(t) / 100 : t / 2, y = [["M", p - D, w], ["L", p + D, w], ["M", p - D, m], ["L", p + D, m]], n.whiskers[G]({
            d: y
          })), C = Math.round(n.medianPlot), v = n.medianShape.strokeWidth() % 2 / 2, C += v, y = [["M", k, C], ["L", d, C]], n.medianShape[G]({
            d: y
          }));
        });
      },
      setStackedPoints: b
    });
    "";
  });
  A(c, "Series/ErrorBarSeries.js", [c["Core/Series/Series.js"], c["Core/Globals.js"]], function (c, b) {
    b = b.noop;
    var h = c.seriesTypes;
    c.seriesType("errorbar", "boxplot", {
      color: "#000000",
      grouping: !1,
      linkedTo: ":previous",
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
      },
      whiskerWidth: null
    }, {
      type: "errorbar",
      pointArrayMap: ["low", "high"],
      toYData: function (a) {
        return [a.low, a.high];
      },
      pointValKey: "high",
      doQuartiles: !1,
      drawDataLabels: h.arearange ? function () {
        var a = this.pointValKey;
        h.arearange.prototype.drawDataLabels.call(this);
        this.data.forEach(function (b) {
          b.y = b[a];
        });
      } : b,
      getColumnMetrics: function () {
        return this.linkedParent && this.linkedParent.columnMetrics || h.column.prototype.getColumnMetrics.call(this);
      }
    });
    "";
  });
  A(c, "Series/WaterfallSeries.js", [c["Core/Axis/Axis.js"], c["Core/Series/Series.js"], c["Core/Chart/Chart.js"], c["Core/Globals.js"], c["Core/Series/Point.js"], c["Extensions/Stacking.js"], c["Core/Utilities.js"]], function (c, b, h, a, f, q, u) {
    var z = b.seriesTypes,
        E = u.addEvent,
        B = u.arrayMax,
        e = u.arrayMin,
        x = u.correctFloat,
        w = u.isNumber,
        m = u.objectEach,
        C = u.pick,
        v = a.Series,
        p;

    (function (e) {
      function a() {
        var d = this.waterfall.stacks;
        d && (d.changed = !1, delete d.alreadyChanged);
      }

      function d() {
        var d = this.options.stackLabels;
        d && d.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals();
      }

      function g() {
        for (var d = this.axes, g = this.series, e = g.length; e--;) g[e].options.stacking && (d.forEach(function (d) {
          d.isXAxis || (d.waterfall.stacks.changed = !0);
        }), e = 0);
      }

      function b() {
        this.waterfall || (this.waterfall = new f(this));
      }

      var f = function () {
        function d(d) {
          this.axis = d;
          this.stacks = {
            changed: !1
          };
        }

        d.prototype.renderStackTotals = function () {
          var d = this.axis,
              g = d.waterfall.stacks,
              e = d.stacking && d.stacking.stackTotalGroup,
              a = new q(d, d.options.stackLabels, !1, 0, void 0);
          this.dummyStackItem = a;
          m(g, function (d) {
            m(d, function (d) {
              a.total = d.stackTotal;
              d.label && (a.label = d.label);
              q.prototype.render.call(a, e);
              d.label = a.label;
              delete a.label;
            });
          });
          a.total = null;
        };

        return d;
      }();

      e.Composition = f;

      e.compose = function (e, k) {
        E(e, "init", b);
        E(e, "afterBuildStacks", a);
        E(e, "afterRender", d);
        E(k, "beforeRedraw", g);
      };
    })(p || (p = {}));

    b.seriesType("waterfall", "column", {
      dataLabels: {
        inside: !0
      },
      lineWidth: 1,
      lineColor: "#333333",
      dashStyle: "Dot",
      borderColor: "#333333",
      states: {
        hover: {
          lineWidthPlus: 0
        }
      }
    }, {
      pointValKey: "y",
      showLine: !0,
      generatePoints: function () {
        var e;
        z.column.prototype.generatePoints.apply(this);
        var a = 0;

        for (e = this.points.length; a < e; a++) {
          var d = this.points[a];
          var g = this.processedYData[a];
          if (d.isIntermediateSum || d.isSum) d.y = x(g);
        }
      },
      translate: function () {
        var e = this.options,
            a = this.yAxis,
            d,
            g = C(e.minPointLength, 5),
            b = g / 2,
            f = e.threshold,
            t = e.stacking,
            n = a.waterfall.stacks[this.stackKey];
        z.column.prototype.translate.apply(this);
        var y = d = f;
        var h = this.points;
        var c = 0;

        for (e = h.length; c < e; c++) {
          var m = h[c];
          var x = this.processedYData[c];
          var q = m.shapeArgs;
          var p = [0, x];
          var w = m.y;

          if (t) {
            if (n) {
              p = n[c];

              if ("overlap" === t) {
                var u = p.stackState[p.stateIndex--];
                u = 0 <= w ? u : u - w;
                Object.hasOwnProperty.call(p, "absolutePos") && delete p.absolutePos;
                Object.hasOwnProperty.call(p, "absoluteNeg") && delete p.absoluteNeg;
              } else 0 <= w ? (u = p.threshold + p.posTotal, p.posTotal -= w) : (u = p.threshold + p.negTotal, p.negTotal -= w, u -= w), !p.posTotal && Object.hasOwnProperty.call(p, "absolutePos") && (p.posTotal = p.absolutePos, delete p.absolutePos), !p.negTotal && Object.hasOwnProperty.call(p, "absoluteNeg") && (p.negTotal = p.absoluteNeg, delete p.absoluteNeg);

              m.isSum || (p.connectorThreshold = p.threshold + p.stackTotal);
              a.reversed ? (x = 0 <= w ? u - w : u + w, w = u) : (x = u, w = u - w);
              m.below = x <= C(f, 0);
              q.y = a.translate(x, 0, 1, 0, 1);
              q.height = Math.abs(q.y - a.translate(w, 0, 1, 0, 1));
            }

            if (w = a.waterfall.dummyStackItem) w.x = c, w.label = n[c].label, w.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[c], this.stackedYPos[c]);
          } else u = Math.max(y, y + w) + p[0], q.y = a.translate(u, 0, 1, 0, 1), m.isSum ? (q.y = a.translate(p[1], 0, 1, 0, 1), q.height = Math.min(a.translate(p[0], 0, 1, 0, 1), a.len) - q.y) : m.isIntermediateSum ? (0 <= w ? (x = p[1] + d, w = d) : (x = d, w = p[1] + d), a.reversed && (x ^= w, w ^= x, x ^= w), q.y = a.translate(x, 0, 1, 0, 1), q.height = Math.abs(q.y - Math.min(a.translate(w, 0, 1, 0, 1), a.len)), d += p[1]) : (q.height = 0 < x ? a.translate(y, 0, 1, 0, 1) - q.y : a.translate(y, 0, 1, 0, 1) - a.translate(y - x, 0, 1, 0, 1), y += x, m.below = y < C(f, 0)), 0 > q.height && (q.y += q.height, q.height *= -1);

          m.plotY = q.y = Math.round(q.y) - this.borderWidth % 2 / 2;
          q.height = Math.max(Math.round(q.height), .001);
          m.yBottom = q.y + q.height;
          q.height <= g && !m.isNull ? (q.height = g, q.y -= b, m.plotY = q.y, m.minPointLengthOffset = 0 > m.y ? -b : b) : (m.isNull && (q.width = 0), m.minPointLengthOffset = 0);
          q = m.plotY + (m.negative ? q.height : 0);
          this.chart.inverted ? m.tooltipPos[0] = a.len - q : m.tooltipPos[1] = q;
        }
      },
      processData: function (a) {
        var e = this.options,
            d = this.yData,
            g = e.data,
            b = d.length,
            f = e.threshold || 0,
            t,
            n,
            l,
            h,
            c;

        for (c = n = t = l = h = 0; c < b; c++) {
          var m = d[c];
          var q = g && g[c] ? g[c] : {};
          "sum" === m || q.isSum ? d[c] = x(n) : "intermediateSum" === m || q.isIntermediateSum ? (d[c] = x(t), t = 0) : (n += m, t += m);
          l = Math.min(n, l);
          h = Math.max(n, h);
        }

        v.prototype.processData.call(this, a);
        e.stacking || (this.dataMin = l + f, this.dataMax = h);
      },
      toYData: function (a) {
        return a.isSum ? "sum" : a.isIntermediateSum ? "intermediateSum" : a.y;
      },
      updateParallelArrays: function (a, e) {
        v.prototype.updateParallelArrays.call(this, a, e);
        if ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) this.yData[0] = null;
      },
      pointAttribs: function (a, e) {
        var d = this.options.upColor;
        d && !a.options.color && (a.color = 0 < a.y ? d : null);
        a = z.column.prototype.pointAttribs.call(this, a, e);
        delete a.dashstyle;
        return a;
      },
      getGraphPath: function () {
        return [["M", 0, 0]];
      },
      getCrispPath: function () {
        var a = this.data,
            e = this.yAxis,
            d = a.length,
            g = Math.round(this.graph.strokeWidth()) % 2 / 2,
            b = Math.round(this.borderWidth) % 2 / 2,
            f = this.xAxis.reversed,
            t = this.yAxis.reversed,
            n = this.options.stacking,
            y = [],
            c;

        for (c = 1; c < d; c++) {
          var h = a[c].shapeArgs;
          var m = a[c - 1];
          var q = a[c - 1].shapeArgs;
          var p = e.waterfall.stacks[this.stackKey];
          var x = 0 < m.y ? -q.height : 0;
          p && q && h && (p = p[c - 1], n ? (p = p.connectorThreshold, x = Math.round(e.translate(p, 0, 1, 0, 1) + (t ? x : 0)) - g) : x = q.y + m.minPointLengthOffset + b - g, y.push(["M", (q.x || 0) + (f ? 0 : q.width || 0), x], ["L", (h.x || 0) + (f ? h.width || 0 : 0), x]));
          !n && y.length && q && (0 > m.y && !t || 0 < m.y && t) && (y[y.length - 2][2] += q.height, y[y.length - 1][2] += q.height);
        }

        return y;
      },
      drawGraph: function () {
        v.prototype.drawGraph.call(this);
        this.graph.attr({
          d: this.getCrispPath()
        });
      },
      setStackedPoints: function () {
        function a(d, g, a, e) {
          if (E) for (a; a < E; a++) v.stackState[a] += e;else v.stackState[0] = d, E = v.stackState.length;
          v.stackState.push(v.stackState[E - 1] + g);
        }

        var e = this.options,
            d = this.yAxis.waterfall.stacks,
            g = e.threshold,
            b = g || 0,
            f = b,
            t = this.stackKey,
            n = this.xData,
            c = n.length,
            h,
            q,
            m;
        this.yAxis.stacking.usePercentage = !1;
        var p = q = m = b;

        if (this.visible || !this.chart.options.chart.ignoreHiddenSeries) {
          var x = d.changed;
          (h = d.alreadyChanged) && 0 > h.indexOf(t) && (x = !0);
          d[t] || (d[t] = {});
          h = d[t];

          for (var w = 0; w < c; w++) {
            var u = n[w];
            if (!h[u] || x) h[u] = {
              negTotal: 0,
              posTotal: 0,
              stackTotal: 0,
              threshold: 0,
              stateIndex: 0,
              stackState: [],
              label: x && h[u] ? h[u].label : void 0
            };
            var v = h[u];
            var z = this.yData[w];
            0 <= z ? v.posTotal += z : v.negTotal += z;
            var B = e.data[w];
            u = v.absolutePos = v.posTotal;
            var C = v.absoluteNeg = v.negTotal;
            v.stackTotal = u + C;
            var E = v.stackState.length;
            B && B.isIntermediateSum ? (a(m, q, 0, m), m = q, q = g, b ^= f, f ^= b, b ^= f) : B && B.isSum ? (a(g, p, E), b = g) : (a(b, z, 0, p), B && (p += z, q += z));
            v.stateIndex++;
            v.threshold = b;
            b += v.stackTotal;
          }

          d.changed = !1;
          d.alreadyChanged || (d.alreadyChanged = []);
          d.alreadyChanged.push(t);
        }
      },
      getExtremes: function () {
        var a = this.options.stacking;

        if (a) {
          var b = this.yAxis;
          b = b.waterfall.stacks;
          var d = this.stackedYNeg = [];
          var g = this.stackedYPos = [];
          "overlap" === a ? m(b[this.stackKey], function (a) {
            d.push(e(a.stackState));
            g.push(B(a.stackState));
          }) : m(b[this.stackKey], function (a) {
            d.push(a.negTotal + a.threshold);
            g.push(a.posTotal + a.threshold);
          });
          return {
            dataMin: e(d),
            dataMax: B(g)
          };
        }

        return {
          dataMin: this.dataMin,
          dataMax: this.dataMax
        };
      }
    }, {
      getClassName: function () {
        var a = f.prototype.getClassName.call(this);
        this.isSum ? a += " highcharts-sum" : this.isIntermediateSum && (a += " highcharts-intermediate-sum");
        return a;
      },
      isValid: function () {
        return w(this.y) || this.isSum || !!this.isIntermediateSum;
      }
    });
    "";
    p.compose(c, h);
    return p;
  });
  A(c, "Series/PolygonSeries.js", [c["Core/Series/Series.js"], c["Core/Globals.js"], c["Mixins/LegendSymbol.js"]], function (c, b, h) {
    var a = c.seriesTypes,
        f = b.Series;
    c.seriesType("polygon", "scatter", {
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
    }, {
      type: "polygon",
      getGraphPath: function () {
        for (var a = f.prototype.getGraphPath.call(this), b = a.length + 1; b--;) (b === a.length || "M" === a[b][0]) && 0 < b && a.splice(b, 0, ["Z"]);

        return this.areaPath = a;
      },
      drawGraph: function () {
        this.options.fillColor = this.color;
        a.area.prototype.drawGraph.call(this);
      },
      drawLegendSymbol: h.drawRectangle,
      drawTracker: f.prototype.drawTracker,
      setStackedPoints: b.noop
    });
    "";
  });
  A(c, "Series/Bubble/BubbleLegend.js", [c["Core/Chart/Chart.js"], c["Core/Color/Color.js"], c["Core/Globals.js"], c["Core/Legend.js"], c["Core/Utilities.js"]], function (c, b, h, a, f) {
    var q = b.parse;
    b = f.addEvent;
    var u = f.arrayMax,
        z = f.arrayMin,
        E = f.isNumber,
        B = f.merge,
        e = f.objectEach,
        x = f.pick,
        w = f.setOptions,
        m = f.stableSort,
        C = f.wrap;
    "";
    var v = h.Series,
        p = h.noop;
    w({
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

    w = function () {
      function a(a, d) {
        this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0;
        this.setState = p;
        this.init(a, d);
      }

      a.prototype.init = function (a, d) {
        this.options = a;
        this.visible = !0;
        this.chart = d.chart;
        this.legend = d;
      };

      a.prototype.addToLegend = function (a) {
        a.splice(this.options.legendIndex, 0, this);
      };

      a.prototype.drawLegendSymbol = function (a) {
        var d = this.chart,
            g = this.options,
            e = x(a.options.itemDistance, 20),
            b = g.ranges;
        var f = g.connectorDistance;
        this.fontMetrics = d.renderer.fontMetrics(g.labels.style.fontSize.toString() + "px");
        b && b.length && E(b[0].value) ? (m(b, function (d, a) {
          return a.value - d.value;
        }), this.ranges = b, this.setOptions(), this.render(), d = this.getMaxLabelSize(), b = this.ranges[0].radius, a = 2 * b, f = f - b + d.width, f = 0 < f ? f : 0, this.maxLabel = d, this.movementX = "left" === g.labels.align ? f : 0, this.legendItemWidth = a + f + e, this.legendItemHeight = a + this.fontMetrics.h / 2) : a.options.bubbleLegend.autoRanges = !0;
      };

      a.prototype.setOptions = function () {
        var a = this.ranges,
            d = this.options,
            g = this.chart.series[d.seriesIndex],
            e = this.legend.baseline,
            b = {
          "z-index": d.zIndex,
          "stroke-width": d.borderWidth
        },
            f = {
          "z-index": d.zIndex,
          "stroke-width": d.connectorWidth
        },
            n = this.getLabelStyles(),
            c = g.options.marker.fillOpacity,
            h = this.chart.styledMode;
        a.forEach(function (t, r) {
          h || (b.stroke = x(t.borderColor, d.borderColor, g.color), b.fill = x(t.color, d.color, 1 !== c ? q(g.color).setOpacity(c).get("rgba") : g.color), f.stroke = x(t.connectorColor, d.connectorColor, g.color));
          a[r].radius = this.getRangeRadius(t.value);
          a[r] = B(a[r], {
            center: a[0].radius - a[r].radius + e
          });
          h || B(!0, a[r], {
            bubbleStyle: B(!1, b),
            connectorStyle: B(!1, f),
            labelStyle: n
          });
        }, this);
      };

      a.prototype.getLabelStyles = function () {
        var a = this.options,
            d = {},
            g = "left" === a.labels.align,
            b = this.legend.options.rtl;
        e(a.labels.style, function (a, g) {
          "color" !== g && "fontSize" !== g && "z-index" !== g && (d[g] = a);
        });
        return B(!1, d, {
          "font-size": a.labels.style.fontSize,
          fill: x(a.labels.style.color, "#000000"),
          "z-index": a.zIndex,
          align: b || g ? "right" : "left"
        });
      };

      a.prototype.getRangeRadius = function (a) {
        var d = this.options;
        return this.chart.series[this.options.seriesIndex].getRadius.call(this, d.ranges[d.ranges.length - 1].value, d.ranges[0].value, d.minSize, d.maxSize, a);
      };

      a.prototype.render = function () {
        var a = this.chart.renderer,
            d = this.options.zThreshold;
        this.symbols || (this.symbols = {
          connectors: [],
          bubbleItems: [],
          labels: []
        });
        this.legendSymbol = a.g("bubble-legend");
        this.legendItem = a.g("bubble-legend-item");
        this.legendSymbol.translateX = 0;
        this.legendSymbol.translateY = 0;
        this.ranges.forEach(function (a) {
          a.value >= d && this.renderRange(a);
        }, this);
        this.legendSymbol.add(this.legendItem);
        this.legendItem.add(this.legendGroup);
        this.hideOverlappingLabels();
      };

      a.prototype.renderRange = function (a) {
        var d = this.options,
            g = d.labels,
            e = this.chart.renderer,
            b = this.symbols,
            f = b.labels,
            n = a.center,
            k = Math.abs(a.radius),
            c = d.connectorDistance || 0,
            h = g.align,
            l = g.style.fontSize;
        c = this.legend.options.rtl || "left" === h ? -c : c;
        g = d.connectorWidth;
        var m = this.ranges[0].radius || 0,
            q = n - k - d.borderWidth / 2 + g / 2;
        l = l / 2 - (this.fontMetrics.h - l) / 2;
        var p = e.styledMode;
        "center" === h && (c = 0, d.connectorDistance = 0, a.labelStyle.align = "center");
        h = q + d.labels.y;
        var x = m + c + d.labels.x;
        b.bubbleItems.push(e.circle(m, n + ((q % 1 ? 1 : .5) - (g % 2 ? 0 : .5)), k).attr(p ? {} : a.bubbleStyle).addClass((p ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (d.className || "")).add(this.legendSymbol));
        b.connectors.push(e.path(e.crispLine([["M", m, q], ["L", m + c, q]], d.connectorWidth)).attr(p ? {} : a.connectorStyle).addClass((p ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (d.connectorClassName || "")).add(this.legendSymbol));
        a = e.text(this.formatLabel(a), x, h + l).attr(p ? {} : a.labelStyle).addClass("highcharts-bubble-legend-labels " + (d.labels.className || "")).add(this.legendSymbol);
        f.push(a);
        a.placed = !0;
        a.alignAttr = {
          x: x,
          y: h + l
        };
      };

      a.prototype.getMaxLabelSize = function () {
        var a, d;
        this.symbols.labels.forEach(function (g) {
          d = g.getBBox(!0);
          a = a ? d.width > a.width ? d : a : d;
        });
        return a || {};
      };

      a.prototype.formatLabel = function (a) {
        var d = this.options,
            g = d.labels.formatter;
        d = d.labels.format;
        var e = this.chart.numberFormatter;
        return d ? f.format(d, a) : g ? g.call(a) : e(a.value, 1);
      };

      a.prototype.hideOverlappingLabels = function () {
        var a = this.chart,
            d = this.symbols;
        !this.options.labels.allowOverlap && d && (a.hideOverlappingLabels(d.labels), d.labels.forEach(function (a, e) {
          a.newOpacity ? a.newOpacity !== a.oldOpacity && d.connectors[e].show() : d.connectors[e].hide();
        }));
      };

      a.prototype.getRanges = function () {
        var a = this.legend.bubbleLegend,
            d = a.options.ranges,
            g,
            e = Number.MAX_VALUE,
            b = -Number.MAX_VALUE;
        a.chart.series.forEach(function (d) {
          d.isBubble && !d.ignoreSeries && (g = d.zData.filter(E), g.length && (e = x(d.options.zMin, Math.min(e, Math.max(z(g), !1 === d.options.displayNegative ? d.options.zThreshold : -Number.MAX_VALUE))), b = x(d.options.zMax, Math.max(b, u(g)))));
        });
        var f = e === b ? [{
          value: b
        }] : [{
          value: e
        }, {
          value: (e + b) / 2
        }, {
          value: b,
          autoRanges: !0
        }];
        d.length && d[0].radius && f.reverse();
        f.forEach(function (a, g) {
          d && d[g] && (f[g] = B(!1, d[g], a));
        });
        return f;
      };

      a.prototype.predictBubbleSizes = function () {
        var a = this.chart,
            d = this.fontMetrics,
            g = a.legend.options,
            e = "horizontal" === g.layout,
            b = e ? a.legend.lastLineHeight : 0,
            f = a.plotSizeX,
            n = a.plotSizeY,
            c = a.series[this.options.seriesIndex];
        a = Math.ceil(c.minPxSize);
        var h = Math.ceil(c.maxPxSize);
        c = c.options.maxSize;
        var l = Math.min(n, f);
        if (g.floating || !/%$/.test(c)) d = h;else if (c = parseFloat(c), d = (l + b - d.h / 2) * c / 100 / (c / 100 + 1), e && n - d >= f || !e && f - d >= n) d = h;
        return [a, Math.ceil(d)];
      };

      a.prototype.updateRanges = function (a, d) {
        var g = this.legend.options.bubbleLegend;
        g.minSize = a;
        g.maxSize = d;
        g.ranges = this.getRanges();
      };

      a.prototype.correctSizes = function () {
        var a = this.legend,
            d = this.chart.series[this.options.seriesIndex];
        1 < Math.abs(Math.ceil(d.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, d.maxPxSize), a.render());
      };

      return a;
    }();

    b(a, "afterGetAllItems", function (a) {
      var e = this.bubbleLegend,
          d = this.options,
          g = d.bubbleLegend,
          b = this.chart.getVisibleBubbleSeriesIndex();
      e && e.ranges && e.ranges.length && (g.ranges.length && (g.autoRanges = !!g.ranges[0].autoRanges), this.destroyItem(e));
      0 <= b && d.enabled && g.enabled && (g.seriesIndex = b, this.bubbleLegend = new h.BubbleLegend(g, this), this.bubbleLegend.addToLegend(a.allItems));
    });

    c.prototype.getVisibleBubbleSeriesIndex = function () {
      for (var a = this.series, e = 0; e < a.length;) {
        if (a[e] && a[e].isBubble && a[e].visible && a[e].zData.length) return e;
        e++;
      }

      return -1;
    };

    a.prototype.getLinesHeights = function () {
      var a = this.allItems,
          e = [],
          d = a.length,
          g,
          b = 0;

      for (g = 0; g < d; g++) if (a[g].legendItemHeight && (a[g].itemHeight = a[g].legendItemHeight), a[g] === a[d - 1] || a[g + 1] && a[g]._legendItemPos[1] !== a[g + 1]._legendItemPos[1]) {
        e.push({
          height: 0
        });
        var f = e[e.length - 1];

        for (b; b <= g; b++) a[b].itemHeight > f.height && (f.height = a[b].itemHeight);

        f.step = g;
      }

      return e;
    };

    a.prototype.retranslateItems = function (a) {
      var e,
          d,
          g,
          b = this.options.rtl,
          f = 0;
      this.allItems.forEach(function (t, n) {
        e = t.legendGroup.translateX;
        d = t._legendItemPos[1];
        if ((g = t.movementX) || b && t.ranges) g = b ? e - t.options.maxSize / 2 : e + g, t.legendGroup.attr({
          translateX: g
        });
        n > a[f].step && f++;
        t.legendGroup.attr({
          translateY: Math.round(d + a[f].height / 2)
        });
        t._legendItemPos[1] = d + a[f].height / 2;
      });
    };

    b(v, "legendItemClick", function () {
      var a = this.chart,
          e = this.visible,
          d = this.chart.legend;
      d && d.bubbleLegend && (this.visible = !e, this.ignoreSeries = e, a = 0 <= a.getVisibleBubbleSeriesIndex(), d.bubbleLegend.visible !== a && (d.update({
        bubbleLegend: {
          enabled: a
        }
      }), d.bubbleLegend.visible = a), this.visible = e);
    });
    C(c.prototype, "drawChartBox", function (a, b, d) {
      var g = this.legend,
          f = 0 <= this.getVisibleBubbleSeriesIndex();

      if (g && g.options.enabled && g.bubbleLegend && g.options.bubbleLegend.autoRanges && f) {
        var c = g.bubbleLegend.options;
        f = g.bubbleLegend.predictBubbleSizes();
        g.bubbleLegend.updateRanges(f[0], f[1]);
        c.placed || (g.group.placed = !1, g.allItems.forEach(function (d) {
          d.legendGroup.translateY = null;
        }));
        g.render();
        this.getMargins();
        this.axes.forEach(function (d) {
          d.visible && d.render();
          c.placed || (d.setScale(), d.updateNames(), e(d.ticks, function (d) {
            d.isNew = !0;
            d.isNewLabel = !0;
          }));
        });
        c.placed = !0;
        this.getMargins();
        a.call(this, b, d);
        g.bubbleLegend.correctSizes();
        g.retranslateItems(g.getLinesHeights());
      } else a.call(this, b, d), g && g.options.enabled && g.bubbleLegend && (g.render(), g.retranslateItems(g.getLinesHeights()));
    });
    h.BubbleLegend = w;
    return h.BubbleLegend;
  });
  A(c, "Series/Bubble/BubbleSeries.js", [c["Core/Axis/Axis.js"], c["Core/Series/Series.js"], c["Core/Color/Color.js"], c["Core/Globals.js"], c["Core/Series/Point.js"], c["Core/Utilities.js"]], function (c, b, h, a, f, q) {
    var u = h.parse;
    h = a.noop;
    var z = q.arrayMax,
        E = q.arrayMin,
        B = q.clamp,
        e = q.extend,
        x = q.isNumber,
        w = q.pick,
        m = q.pInt,
        C = a.Series,
        v = b.seriesTypes;
    "";
    b.seriesType("bubble", "scatter", {
      dataLabels: {
        formatter: function () {
          return this.point.z;
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
    }, {
      pointArrayMap: ["y", "z"],
      parallelArrays: ["x", "y", "z"],
      trackerGroups: ["group", "dataLabelsGroup"],
      specialGroup: "group",
      bubblePadding: !0,
      zoneAxis: "z",
      directTouch: !0,
      isBubble: !0,
      pointAttribs: function (a, e) {
        var b = this.options.marker.fillOpacity;
        a = C.prototype.pointAttribs.call(this, a, e);
        1 !== b && (a.fill = u(a.fill).setOpacity(b).get("rgba"));
        return a;
      },
      getRadii: function (a, e, b) {
        var d = this.zData,
            g = this.yData,
            f = b.minPxSize,
            c = b.maxPxSize,
            t = [];
        var n = 0;

        for (b = d.length; n < b; n++) {
          var h = d[n];
          t.push(this.getRadius(a, e, f, c, h, g[n]));
        }

        this.radii = t;
      },
      getRadius: function (a, e, b, d, g, f) {
        var r = this.options,
            t = "width" !== r.sizeBy,
            n = r.zThreshold,
            c = e - a,
            h = .5;
        if (null === f || null === g) return null;

        if (x(g)) {
          r.sizeByAbsoluteValue && (g = Math.abs(g - n), c = Math.max(e - n, Math.abs(a - n)), a = 0);
          if (g < a) return b / 2 - 1;
          0 < c && (h = (g - a) / c);
        }

        t && 0 <= h && (h = Math.sqrt(h));
        return Math.ceil(b + h * (d - b)) / 2;
      },
      animate: function (a) {
        !a && this.points.length < this.options.animationLimit && this.points.forEach(function (a) {
          var e = a.graphic;
          e && e.width && (this.hasRendered || e.attr({
            x: a.plotX,
            y: a.plotY,
            width: 1,
            height: 1
          }), e.animate(this.markerAttribs(a), this.options.animation));
        }, this);
      },
      hasData: function () {
        return !!this.processedXData.length;
      },
      translate: function () {
        var a,
            b = this.data,
            f = this.radii;
        v.scatter.prototype.translate.call(this);

        for (a = b.length; a--;) {
          var d = b[a];
          var g = f ? f[a] : 0;
          x(g) && g >= this.minPxSize / 2 ? (d.marker = e(d.marker, {
            radius: g,
            width: 2 * g,
            height: 2 * g
          }), d.dlBox = {
            x: d.plotX - g,
            y: d.plotY - g,
            width: 2 * g,
            height: 2 * g
          }) : d.shapeArgs = d.plotY = d.dlBox = void 0;
        }
      },
      alignDataLabel: v.column.prototype.alignDataLabel,
      buildKDTree: h,
      applyZones: h
    }, {
      haloPath: function (a) {
        return f.prototype.haloPath.call(this, 0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a);
      },
      ttBelow: !1
    });

    c.prototype.beforePadding = function () {
      var a = this,
          e = this.len,
          b = this.chart,
          d = 0,
          g = e,
          f = this.isXAxis,
          c = f ? "xData" : "yData",
          t = this.min,
          n = {},
          h = Math.min(b.plotWidth, b.plotHeight),
          q = Number.MAX_VALUE,
          u = -Number.MAX_VALUE,
          v = this.max - t,
          F = e / v,
          C = [];
      this.series.forEach(function (d) {
        var e = d.options;
        !d.bubblePadding || !d.visible && b.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, C.push(d), f && (["minSize", "maxSize"].forEach(function (d) {
          var a = e[d],
              g = /%$/.test(a);
          a = m(a);
          n[d] = g ? h * a / 100 : a;
        }), d.minPxSize = n.minSize, d.maxPxSize = Math.max(n.maxSize, n.minSize), d = d.zData.filter(x), d.length && (q = w(e.zMin, B(E(d), !1 === e.displayNegative ? e.zThreshold : -Number.MAX_VALUE, q)), u = w(e.zMax, Math.max(u, z(d))))));
      });
      C.forEach(function (e) {
        var b = e[c],
            n = b.length;
        f && e.getRadii(q, u, e);
        if (0 < v) for (; n--;) if (x(b[n]) && a.dataMin <= b[n] && b[n] <= a.max) {
          var r = e.radii ? e.radii[n] : 0;
          d = Math.min((b[n] - t) * F - r, d);
          g = Math.max((b[n] - t) * F + r, g);
        }
      });
      C.length && 0 < v && !this.logarithmic && (g -= e, F *= (e + Math.max(0, d) - Math.min(g, e)) / e, [["min", "userMin", d], ["max", "userMax", g]].forEach(function (d) {
        "undefined" === typeof w(a.options[d[0]], a[d[1]]) && (a[d[0]] += d[2] / F);
      }));
    };

    "";
  });
  A(c, "Series/Networkgraph/DraggableNodes.js", [c["Core/Chart/Chart.js"], c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, b, h) {
    var a = h.addEvent;
    b.dragNodesMixin = {
      onMouseDown: function (a, b) {
        b = this.chart.pointer.normalize(b);
        a.fixedPosition = {
          chartX: b.chartX,
          chartY: b.chartY,
          plotX: a.plotX,
          plotY: a.plotY
        };
        a.inDragMode = !0;
      },
      onMouseMove: function (a, b) {
        if (a.fixedPosition && a.inDragMode) {
          var f = this.chart;
          b = f.pointer.normalize(b);
          var c = a.fixedPosition.chartX - b.chartX,
              h = a.fixedPosition.chartY - b.chartY;
          b = f.graphLayoutsLookup;
          if (5 < Math.abs(c) || 5 < Math.abs(h)) c = a.fixedPosition.plotX - c, h = a.fixedPosition.plotY - h, f.isInsidePlot(c, h) && (a.plotX = c, a.plotY = h, a.hasDragged = !0, this.redrawHalo(a), b.forEach(function (a) {
            a.restartSimulation();
          }));
        }
      },
      onMouseUp: function (a, b) {
        a.fixedPosition && (a.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), a.inDragMode = a.hasDragged = !1, this.options.fixedDraggable || delete a.fixedPosition);
      },
      redrawHalo: function (a) {
        a && this.halo && this.halo.attr({
          d: a.haloPath(this.options.states.hover.halo.size)
        });
      }
    };
    a(c, "load", function () {
      var b = this,
          c,
          h,
          z;
      b.container && (c = a(b.container, "mousedown", function (f) {
        var c = b.hoverPoint;
        c && c.series && c.series.hasDraggableNodes && c.series.options.draggable && (c.series.onMouseDown(c, f), h = a(b.container, "mousemove", function (a) {
          return c && c.series && c.series.onMouseMove(c, a);
        }), z = a(b.container.ownerDocument, "mouseup", function (a) {
          h();
          z();
          return c && c.series && c.series.onMouseUp(c, a);
        }));
      }));
      a(b, "destroy", function () {
        c();
      });
    });
  });
  A(c, "Series/Networkgraph/Integrations.js", [c["Core/Globals.js"]], function (c) {
    c.networkgraphIntegrations = {
      verlet: {
        attractiveForceFunction: function (b, c) {
          return (c - b) / b;
        },
        repulsiveForceFunction: function (b, c) {
          return (c - b) / b * (c > b ? 1 : 0);
        },
        barycenter: function () {
          var b = this.options.gravitationalConstant,
              c = this.barycenter.xFactor,
              a = this.barycenter.yFactor;
          c = (c - (this.box.left + this.box.width) / 2) * b;
          a = (a - (this.box.top + this.box.height) / 2) * b;
          this.nodes.forEach(function (b) {
            b.fixedPosition || (b.plotX -= c / b.mass / b.degree, b.plotY -= a / b.mass / b.degree);
          });
        },
        repulsive: function (b, c, a) {
          c = c * this.diffTemperature / b.mass / b.degree;
          b.fixedPosition || (b.plotX += a.x * c, b.plotY += a.y * c);
        },
        attractive: function (b, c, a) {
          var f = b.getMass(),
              h = -a.x * c * this.diffTemperature;
          c = -a.y * c * this.diffTemperature;
          b.fromNode.fixedPosition || (b.fromNode.plotX -= h * f.fromNode / b.fromNode.degree, b.fromNode.plotY -= c * f.fromNode / b.fromNode.degree);
          b.toNode.fixedPosition || (b.toNode.plotX += h * f.toNode / b.toNode.degree, b.toNode.plotY += c * f.toNode / b.toNode.degree);
        },
        integrate: function (b, c) {
          var a = -b.options.friction,
              f = b.options.maxSpeed,
              h = (c.plotX + c.dispX - c.prevX) * a;
          a *= c.plotY + c.dispY - c.prevY;
          var u = Math.abs,
              z = u(h) / (h || 1);
          u = u(a) / (a || 1);
          h = z * Math.min(f, Math.abs(h));
          a = u * Math.min(f, Math.abs(a));
          c.prevX = c.plotX + c.dispX;
          c.prevY = c.plotY + c.dispY;
          c.plotX += h;
          c.plotY += a;
          c.temperature = b.vectorLength({
            x: h,
            y: a
          });
        },
        getK: function (b) {
          return Math.pow(b.box.width * b.box.height / b.nodes.length, .5);
        }
      },
      euler: {
        attractiveForceFunction: function (b, c) {
          return b * b / c;
        },
        repulsiveForceFunction: function (b, c) {
          return c * c / b;
        },
        barycenter: function () {
          var b = this.options.gravitationalConstant,
              c = this.barycenter.xFactor,
              a = this.barycenter.yFactor;
          this.nodes.forEach(function (f) {
            if (!f.fixedPosition) {
              var h = f.getDegree();
              h *= 1 + h / 2;
              f.dispX += (c - f.plotX) * b * h / f.degree;
              f.dispY += (a - f.plotY) * b * h / f.degree;
            }
          });
        },
        repulsive: function (b, c, a, f) {
          b.dispX += a.x / f * c / b.degree;
          b.dispY += a.y / f * c / b.degree;
        },
        attractive: function (b, c, a, f) {
          var h = b.getMass(),
              u = a.x / f * c;
          c *= a.y / f;
          b.fromNode.fixedPosition || (b.fromNode.dispX -= u * h.fromNode / b.fromNode.degree, b.fromNode.dispY -= c * h.fromNode / b.fromNode.degree);
          b.toNode.fixedPosition || (b.toNode.dispX += u * h.toNode / b.toNode.degree, b.toNode.dispY += c * h.toNode / b.toNode.degree);
        },
        integrate: function (b, c) {
          c.dispX += c.dispX * b.options.friction;
          c.dispY += c.dispY * b.options.friction;
          var a = c.temperature = b.vectorLength({
            x: c.dispX,
            y: c.dispY
          });
          0 !== a && (c.plotX += c.dispX / a * Math.min(Math.abs(c.dispX), b.temperature), c.plotY += c.dispY / a * Math.min(Math.abs(c.dispY), b.temperature));
        },
        getK: function (b) {
          return Math.pow(b.box.width * b.box.height / b.nodes.length, .3);
        }
      }
    };
  });
  A(c, "Series/Networkgraph/QuadTree.js", [c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, b) {
    b = b.extend;

    var h = c.QuadTreeNode = function (a) {
      this.box = a;
      this.boxSize = Math.min(a.width, a.height);
      this.nodes = [];
      this.body = this.isInternal = !1;
      this.isEmpty = !0;
    };

    b(h.prototype, {
      insert: function (a, b) {
        this.isInternal ? this.nodes[this.getBoxPosition(a)].insert(a, b - 1) : (this.isEmpty = !1, this.body ? b ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, b - 1), this.body = !0), this.nodes[this.getBoxPosition(a)].insert(a, b - 1)) : (b = new h({
          top: a.plotX,
          left: a.plotY,
          width: .1,
          height: .1
        }), b.body = a, b.isInternal = !1, this.nodes.push(b)) : (this.isInternal = !1, this.body = a));
      },
      updateMassAndCenter: function () {
        var a = 0,
            b = 0,
            c = 0;
        this.isInternal ? (this.nodes.forEach(function (f) {
          f.isEmpty || (a += f.mass, b += f.plotX * f.mass, c += f.plotY * f.mass);
        }), b /= a, c /= a) : this.body && (a = this.body.mass, b = this.body.plotX, c = this.body.plotY);
        this.mass = a;
        this.plotX = b;
        this.plotY = c;
      },
      divideBox: function () {
        var a = this.box.width / 2,
            b = this.box.height / 2;
        this.nodes[0] = new h({
          left: this.box.left,
          top: this.box.top,
          width: a,
          height: b
        });
        this.nodes[1] = new h({
          left: this.box.left + a,
          top: this.box.top,
          width: a,
          height: b
        });
        this.nodes[2] = new h({
          left: this.box.left + a,
          top: this.box.top + b,
          width: a,
          height: b
        });
        this.nodes[3] = new h({
          left: this.box.left,
          top: this.box.top + b,
          width: a,
          height: b
        });
      },
      getBoxPosition: function (a) {
        var b = a.plotY < this.box.top + this.box.height / 2;
        return a.plotX < this.box.left + this.box.width / 2 ? b ? 0 : 3 : b ? 1 : 2;
      }
    });

    c = c.QuadTree = function (a, b, c, u) {
      this.box = {
        left: a,
        top: b,
        width: c,
        height: u
      };
      this.maxDepth = 25;
      this.root = new h(this.box, "0");
      this.root.isInternal = !0;
      this.root.isRoot = !0;
      this.root.divideBox();
    };

    b(c.prototype, {
      insertNodes: function (a) {
        a.forEach(function (a) {
          this.root.insert(a, this.maxDepth);
        }, this);
      },
      visitNodeRecursive: function (a, b, c) {
        var f;
        a || (a = this.root);
        a === this.root && b && (f = b(a));
        !1 !== f && (a.nodes.forEach(function (a) {
          if (a.isInternal) {
            b && (f = b(a));
            if (!1 === f) return;
            this.visitNodeRecursive(a, b, c);
          } else a.body && b && b(a.body);

          c && c(a);
        }, this), a === this.root && c && c(a));
      },
      calculateMassAndCenter: function () {
        this.visitNodeRecursive(null, null, function (a) {
          a.updateMassAndCenter();
        });
      }
    });
  });
  A(c, "Series/Networkgraph/Layouts.js", [c["Core/Chart/Chart.js"], c["Core/Animation/AnimationUtilities.js"], c["Core/Globals.js"], c["Core/Utilities.js"]], function (c, b, h, a) {
    var f = b.setAnimation;
    b = a.addEvent;
    var q = a.clamp,
        u = a.defined,
        z = a.extend,
        E = a.isFunction,
        B = a.pick;
    h.layouts = {
      "reingold-fruchterman": function () {}
    };
    z(h.layouts["reingold-fruchterman"].prototype, {
      init: function (a) {
        this.options = a;
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
        this.integration = h.networkgraphIntegrations[a.integration];
        this.enableSimulation = a.enableSimulation;
        this.attractiveForce = B(a.attractiveForce, this.integration.attractiveForceFunction);
        this.repulsiveForce = B(a.repulsiveForce, this.integration.repulsiveForceFunction);
        this.approximation = a.approximation;
      },
      updateSimulation: function (a) {
        this.enableSimulation = B(a, this.options.enableSimulation);
      },
      start: function () {
        var a = this.series,
            b = this.options;
        this.currentStep = 0;
        this.forces = a[0] && a[0].forces || [];
        this.chart = a[0] && a[0].chart;
        this.initialRendering && (this.initPositions(), a.forEach(function (a) {
          a.finishedAnimating = !0;
          a.render();
        }));
        this.setK();
        this.resetSimulation(b);
        this.enableSimulation && this.step();
      },
      step: function () {
        var a = this,
            b = this.series;
        a.currentStep++;
        "barnes-hut" === a.approximation && (a.createQuadTree(), a.quadTree.calculateMassAndCenter());
        a.forces.forEach(function (b) {
          a[b + "Forces"](a.temperature);
        });
        a.applyLimits(a.temperature);
        a.temperature = a.coolDown(a.startTemperature, a.diffTemperature, a.currentStep);
        a.prevSystemTemperature = a.systemTemperature;
        a.systemTemperature = a.getSystemTemperature();
        a.enableSimulation && (b.forEach(function (a) {
          a.chart && a.render();
        }), a.maxIterations-- && isFinite(a.temperature) && !a.isStable() ? (a.simulation && h.win.cancelAnimationFrame(a.simulation), a.simulation = h.win.requestAnimationFrame(function () {
          a.step();
        })) : a.simulation = !1);
      },
      stop: function () {
        this.simulation && h.win.cancelAnimationFrame(this.simulation);
      },
      setArea: function (a, b, c, f) {
        this.box = {
          left: a,
          top: b,
          width: c,
          height: f
        };
      },
      setK: function () {
        this.k = this.options.linkLength || this.integration.getK(this);
      },
      addElementsToCollection: function (a, b) {
        a.forEach(function (a) {
          -1 === b.indexOf(a) && b.push(a);
        });
      },
      removeElementFromCollection: function (a, b) {
        a = b.indexOf(a);
        -1 !== a && b.splice(a, 1);
      },
      clear: function () {
        this.nodes.length = 0;
        this.links.length = 0;
        this.series.length = 0;
        this.resetSimulation();
      },
      resetSimulation: function () {
        this.forcedStop = !1;
        this.systemTemperature = 0;
        this.setMaxIterations();
        this.setTemperature();
        this.setDiffTemperature();
      },
      restartSimulation: function () {
        this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0));
      },
      setMaxIterations: function (a) {
        this.maxIterations = B(a, this.options.maxIterations);
      },
      setTemperature: function () {
        this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
      },
      setDiffTemperature: function () {
        this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
      },
      setInitialRendering: function (a) {
        this.initialRendering = a;
      },
      createQuadTree: function () {
        this.quadTree = new h.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
        this.quadTree.insertNodes(this.nodes);
      },
      initPositions: function () {
        var a = this.options.initialPositions;
        E(a) ? (a.call(this), this.nodes.forEach(function (a) {
          u(a.prevX) || (a.prevX = a.plotX);
          u(a.prevY) || (a.prevY = a.plotY);
          a.dispX = 0;
          a.dispY = 0;
        })) : "circle" === a ? this.setCircularPositions() : this.setRandomPositions();
      },
      setCircularPositions: function () {
        function a(b) {
          b.linksFrom.forEach(function (d) {
            p[d.toNode.id] || (p[d.toNode.id] = !0, q.push(d.toNode), a(d.toNode));
          });
        }

        var b = this.box,
            c = this.nodes,
            f = 2 * Math.PI / (c.length + 1),
            h = c.filter(function (a) {
          return 0 === a.linksTo.length;
        }),
            q = [],
            p = {},
            l = this.options.initialPositionRadius;
        h.forEach(function (b) {
          q.push(b);
          a(b);
        });
        q.length ? c.forEach(function (a) {
          -1 === q.indexOf(a) && q.push(a);
        }) : q = c;
        q.forEach(function (a, d) {
          a.plotX = a.prevX = B(a.plotX, b.width / 2 + l * Math.cos(d * f));
          a.plotY = a.prevY = B(a.plotY, b.height / 2 + l * Math.sin(d * f));
          a.dispX = 0;
          a.dispY = 0;
        });
      },
      setRandomPositions: function () {
        function a(a) {
          a = a * a / Math.PI;
          return a -= Math.floor(a);
        }

        var b = this.box,
            c = this.nodes,
            f = c.length + 1;
        c.forEach(function (e, c) {
          e.plotX = e.prevX = B(e.plotX, b.width * a(c));
          e.plotY = e.prevY = B(e.plotY, b.height * a(f + c));
          e.dispX = 0;
          e.dispY = 0;
        });
      },
      force: function (a) {
        this.integration[a].apply(this, Array.prototype.slice.call(arguments, 1));
      },
      barycenterForces: function () {
        this.getBarycenter();
        this.force("barycenter");
      },
      getBarycenter: function () {
        var a = 0,
            b = 0,
            c = 0;
        this.nodes.forEach(function (e) {
          b += e.plotX * e.mass;
          c += e.plotY * e.mass;
          a += e.mass;
        });
        return this.barycenter = {
          x: b,
          y: c,
          xFactor: b / a,
          yFactor: c / a
        };
      },
      barnesHutApproximation: function (a, b) {
        var e = this.getDistXY(a, b),
            c = this.vectorLength(e);
        if (a !== b && 0 !== c) if (b.isInternal) {
          if (b.boxSize / c < this.options.theta && 0 !== c) {
            var f = this.repulsiveForce(c, this.k);
            this.force("repulsive", a, f * b.mass, e, c);
            var h = !1;
          } else h = !0;
        } else f = this.repulsiveForce(c, this.k), this.force("repulsive", a, f * b.mass, e, c);
        return h;
      },
      repulsiveForces: function () {
        var a = this;
        "barnes-hut" === a.approximation ? a.nodes.forEach(function (b) {
          a.quadTree.visitNodeRecursive(null, function (e) {
            return a.barnesHutApproximation(b, e);
          });
        }) : a.nodes.forEach(function (b) {
          a.nodes.forEach(function (e) {
            if (b !== e && !b.fixedPosition) {
              var c = a.getDistXY(b, e);
              var f = a.vectorLength(c);

              if (0 !== f) {
                var h = a.repulsiveForce(f, a.k);
                a.force("repulsive", b, h * e.mass, c, f);
              }
            }
          });
        });
      },
      attractiveForces: function () {
        var a = this,
            b,
            c,
            f;
        a.links.forEach(function (e) {
          e.fromNode && e.toNode && (b = a.getDistXY(e.fromNode, e.toNode), c = a.vectorLength(b), 0 !== c && (f = a.attractiveForce(c, a.k), a.force("attractive", e, f, b, c)));
        });
      },
      applyLimits: function () {
        var a = this;
        a.nodes.forEach(function (b) {
          b.fixedPosition || (a.integration.integrate(a, b), a.applyLimitBox(b, a.box), b.dispX = 0, b.dispY = 0);
        });
      },
      applyLimitBox: function (a, b) {
        var c = a.radius;
        a.plotX = q(a.plotX, b.left + c, b.width - c);
        a.plotY = q(a.plotY, b.top + c, b.height - c);
      },
      coolDown: function (a, b, c) {
        return a - b * c;
      },
      isStable: function () {
        return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature;
      },
      getSystemTemperature: function () {
        return this.nodes.reduce(function (a, b) {
          return a + b.temperature;
        }, 0);
      },
      vectorLength: function (a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
      },
      getDistR: function (a, b) {
        a = this.getDistXY(a, b);
        return this.vectorLength(a);
      },
      getDistXY: function (a, b) {
        var c = a.plotX - b.plotX;
        a = a.plotY - b.plotY;
        return {
          x: c,
          y: a,
          absX: Math.abs(c),
          absY: Math.abs(a)
        };
      }
    });
    b(c, "predraw", function () {
      this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function (a) {
        a.stop();
      });
    });
    b(c, "render", function () {
      function a(a) {
        a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.enableSimulation && (a.beforeStep && a.beforeStep(), a.step(), c = !1, b = !0);
      }

      var b = !1;

      if (this.graphLayoutsLookup) {
        f(!1, this);

        for (this.graphLayoutsLookup.forEach(function (a) {
          a.start();
        }); !c;) {
          var c = !0;
          this.graphLayoutsLookup.forEach(a);
        }

        b && this.series.forEach(function (a) {
          a && a.layout && a.render();
        });
      }
    });
    b(c, "beforePrint", function () {
      this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(function (a) {
        a.updateSimulation(!1);
      }), this.redraw());
    });
    b(c, "afterPrint", function () {
      this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function (a) {
        a.updateSimulation();
      });
      this.redraw();
    });
  });
  A(c, "Series/PackedBubbleSeries.js", [c["Core/Series/Series.js"], c["Core/Chart/Chart.js"], c["Core/Color/Color.js"], c["Core/Globals.js"], c["Core/Series/Point.js"], c["Core/Utilities.js"]], function (c, b, h, a, f, q) {
    var u = h.parse,
        z = q.addEvent,
        E = q.clamp,
        B = q.defined,
        e = q.extend;
    h = q.extendClass;
    var x = q.fireEvent,
        w = q.isArray,
        m = q.isNumber,
        C = q.merge,
        v = q.pick,
        p = a.Series,
        l = a.layouts["reingold-fruchterman"],
        k = a.dragNodesMixin;
    "";

    b.prototype.getSelectedParentNodes = function () {
      var a = [];
      this.series.forEach(function (d) {
        d.parentNode && d.parentNode.selected && a.push(d.parentNode);
      });
      return a;
    };

    a.networkgraphIntegrations.packedbubble = {
      repulsiveForceFunction: function (a, b, c, e) {
        return Math.min(a, (c.marker.radius + e.marker.radius) / 2);
      },
      barycenter: function () {
        var a = this,
            b = a.options.gravitationalConstant,
            c = a.box,
            e = a.nodes,
            f,
            n;
        e.forEach(function (d) {
          a.options.splitSeries && !d.isParentNode ? (f = d.series.parentNode.plotX, n = d.series.parentNode.plotY) : (f = c.width / 2, n = c.height / 2);
          d.fixedPosition || (d.plotX -= (d.plotX - f) * b / (d.mass * Math.sqrt(e.length)), d.plotY -= (d.plotY - n) * b / (d.mass * Math.sqrt(e.length)));
        });
      },
      repulsive: function (a, b, c, e) {
        var d = b * this.diffTemperature / a.mass / a.degree;
        b = c.x * d;
        c = c.y * d;
        a.fixedPosition || (a.plotX += b, a.plotY += c);
        e.fixedPosition || (e.plotX -= b, e.plotY -= c);
      },
      integrate: a.networkgraphIntegrations.verlet.integrate,
      getK: a.noop
    };
    a.layouts.packedbubble = h(l, {
      beforeStep: function () {
        this.options.marker && this.series.forEach(function (a) {
          a && a.calculateParentRadius();
        });
      },
      setCircularPositions: function () {
        var a = this,
            b = a.box,
            c = a.nodes,
            e = 2 * Math.PI / (c.length + 1),
            f,
            n,
            h = a.options.initialPositionRadius;
        c.forEach(function (d, g) {
          a.options.splitSeries && !d.isParentNode ? (f = d.series.parentNode.plotX, n = d.series.parentNode.plotY) : (f = b.width / 2, n = b.height / 2);
          d.plotX = d.prevX = v(d.plotX, f + h * Math.cos(d.index || g * e));
          d.plotY = d.prevY = v(d.plotY, n + h * Math.sin(d.index || g * e));
          d.dispX = 0;
          d.dispY = 0;
        });
      },
      repulsiveForces: function () {
        var a = this,
            b,
            c,
            e,
            f = a.options.bubblePadding;
        a.nodes.forEach(function (d) {
          d.degree = d.mass;
          d.neighbours = 0;
          a.nodes.forEach(function (g) {
            b = 0;
            d === g || d.fixedPosition || !a.options.seriesInteraction && d.series !== g.series || (e = a.getDistXY(d, g), c = a.vectorLength(e) - (d.marker.radius + g.marker.radius + f), 0 > c && (d.degree += .01, d.neighbours++, b = a.repulsiveForce(-c / Math.sqrt(d.neighbours), a.k, d, g)), a.force("repulsive", d, b * g.mass, e, g, c));
          });
        });
      },
      applyLimitBox: function (a) {
        if (this.options.splitSeries && !a.isParentNode && this.options.parentNodeLimit) {
          var d = this.getDistXY(a, a.series.parentNode);
          var b = a.series.parentNodeRadius - a.marker.radius - this.vectorLength(d);
          0 > b && b > -2 * a.marker.radius && (a.plotX -= .01 * d.x, a.plotY -= .01 * d.y);
        }

        l.prototype.applyLimitBox.apply(this, arguments);
      }
    });
    c.seriesType("packedbubble", "bubble", {
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
        formatter: function () {
          return this.point.value;
        },
        parentNodeFormatter: function () {
          return this.name;
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
    }, {
      hasDraggableNodes: !0,
      forces: ["barycenter", "repulsive"],
      pointArrayMap: ["value"],
      trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"],
      pointValKey: "value",
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      axisTypes: [],
      noSharedTooltip: !0,
      searchPoint: a.noop,
      accumulateAllPoints: function (a) {
        var d = a.chart,
            b = [],
            c,
            e;

        for (c = 0; c < d.series.length; c++) if (a = d.series[c], a.is("packedbubble") && a.visible || !d.options.chart.ignoreHiddenSeries) for (e = 0; e < a.yData.length; e++) b.push([null, null, a.yData[e], a.index, e, {
          id: e,
          marker: {
            radius: 0
          }
        }]);

        return b;
      },
      init: function () {
        p.prototype.init.apply(this, arguments);
        z(this, "updatedData", function () {
          this.chart.series.forEach(function (a) {
            a.type === this.type && (a.isDirty = !0);
          }, this);
        });
        return this;
      },
      render: function () {
        var a = [];
        p.prototype.render.apply(this, arguments);
        this.options.dataLabels.allowOverlap || (this.data.forEach(function (d) {
          w(d.dataLabels) && d.dataLabels.forEach(function (d) {
            a.push(d);
          });
        }), this.options.useSimulation && this.chart.hideOverlappingLabels(a));
      },
      setVisible: function () {
        var a = this;
        p.prototype.setVisible.apply(a, arguments);
        a.parentNodeLayout && a.graph ? a.visible ? (a.graph.show(), a.parentNode.dataLabel && a.parentNode.dataLabel.show()) : (a.graph.hide(), a.parentNodeLayout.removeElementFromCollection(a.parentNode, a.parentNodeLayout.nodes), a.parentNode.dataLabel && a.parentNode.dataLabel.hide()) : a.layout && (a.visible ? a.layout.addElementsToCollection(a.points, a.layout.nodes) : a.points.forEach(function (d) {
          a.layout.removeElementFromCollection(d, a.layout.nodes);
        }));
      },
      drawDataLabels: function () {
        var a = this.options.dataLabels.textPath,
            b = this.points;
        p.prototype.drawDataLabels.apply(this, arguments);
        this.parentNode && (this.parentNode.formatPrefix = "parentNode", this.points = [this.parentNode], this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath, p.prototype.drawDataLabels.apply(this, arguments), this.points = b, this.options.dataLabels.textPath = a);
      },
      seriesBox: function () {
        var a = this.chart,
            b = Math.max,
            c = Math.min,
            e,
            f = [a.plotLeft, a.plotLeft + a.plotWidth, a.plotTop, a.plotTop + a.plotHeight];
        this.data.forEach(function (a) {
          B(a.plotX) && B(a.plotY) && a.marker.radius && (e = a.marker.radius, f[0] = c(f[0], a.plotX - e), f[1] = b(f[1], a.plotX + e), f[2] = c(f[2], a.plotY - e), f[3] = b(f[3], a.plotY + e));
        });
        return m(f.width / f.height) ? f : null;
      },
      calculateParentRadius: function () {
        var a = this.seriesBox();
        this.parentNodeRadius = E(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, a ? Math.max(Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20);
        this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
      },
      drawGraph: function () {
        if (this.layout && this.layout.options.splitSeries) {
          var a = this.chart,
              b = this.layout.options.parentNodeOptions.marker;
          b = {
            fill: b.fillColor || u(this.color).brighten(.4).get(),
            opacity: b.fillOpacity,
            stroke: b.lineColor || this.color,
            "stroke-width": b.lineWidth
          };
          var c = this.visible ? "inherit" : "hidden";
          this.parentNodesGroup || (this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", c, .1, a.seriesGroup), this.group.attr({
            zIndex: 2
          }));
          this.calculateParentRadius();
          c = C({
            x: this.parentNode.plotX - this.parentNodeRadius,
            y: this.parentNode.plotY - this.parentNodeRadius,
            width: 2 * this.parentNodeRadius,
            height: 2 * this.parentNodeRadius
          }, b);
          this.parentNode.graphic || (this.graph = this.parentNode.graphic = a.renderer.symbol(b.symbol).add(this.parentNodesGroup));
          this.parentNode.graphic.attr(c);
        }
      },
      createParentNodes: function () {
        var a = this,
            b = a.chart,
            c = a.parentNodeLayout,
            e,
            f = a.parentNode,
            n = a.pointClass;
        a.parentNodeMass = 0;
        a.points.forEach(function (d) {
          a.parentNodeMass += Math.PI * Math.pow(d.marker.radius, 2);
        });
        a.calculateParentRadius();
        c.nodes.forEach(function (d) {
          d.seriesIndex === a.index && (e = !0);
        });
        c.setArea(0, 0, b.plotWidth, b.plotHeight);
        e || (f || (f = new n().init(this, {
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
        })), a.parentNode && (f.plotX = a.parentNode.plotX, f.plotY = a.parentNode.plotY), a.parentNode = f, c.addElementsToCollection([a], c.series), c.addElementsToCollection([f], c.nodes));
      },
      drawTracker: function () {
        var d = this.parentNode;
        a.TrackerMixin.drawTrackerPoint.call(this);

        if (d) {
          var b = w(d.dataLabels) ? d.dataLabels : d.dataLabel ? [d.dataLabel] : [];
          d.graphic && (d.graphic.element.point = d);
          b.forEach(function (a) {
            a.div ? a.div.point = d : a.element.point = d;
          });
        }
      },
      addSeriesLayout: function () {
        var d = this.options.layoutAlgorithm,
            b = this.chart.graphLayoutsStorage,
            c = this.chart.graphLayoutsLookup,
            e = C(d, d.parentNodeOptions, {
          enableSimulation: this.layout.options.enableSimulation
        });
        var f = b[d.type + "-series"];
        f || (b[d.type + "-series"] = f = new a.layouts[d.type](), f.init(e), c.splice(f.index, 0, f));
        this.parentNodeLayout = f;
        this.createParentNodes();
      },
      addLayout: function () {
        var d = this.options.layoutAlgorithm,
            b = this.chart.graphLayoutsStorage,
            c = this.chart.graphLayoutsLookup,
            e = this.chart.options.chart;
        b || (this.chart.graphLayoutsStorage = b = {}, this.chart.graphLayoutsLookup = c = []);
        var f = b[d.type];
        f || (d.enableSimulation = B(e.forExport) ? !e.forExport : d.enableSimulation, b[d.type] = f = new a.layouts[d.type](), f.init(d), c.splice(f.index, 0, f));
        this.layout = f;
        this.points.forEach(function (a) {
          a.mass = 2;
          a.degree = 1;
          a.collisionNmb = 1;
        });
        f.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight);
        f.addElementsToCollection([this], f.series);
        f.addElementsToCollection(this.points, f.nodes);
      },
      deferLayout: function () {
        var a = this.options.layoutAlgorithm;
        this.visible && (this.addLayout(), a.splitSeries && this.addSeriesLayout());
      },
      translate: function () {
        var a = this.chart,
            b = this.data,
            c = this.index,
            f,
            t = this.options.useSimulation;
        this.processedXData = this.xData;
        this.generatePoints();
        B(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(this), this.getPointRadius());
        if (t) var n = a.allDataPoints;else n = this.placeBubbles(a.allDataPoints), this.options.draggable = !1;

        for (f = 0; f < n.length; f++) if (n[f][3] === c) {
          var h = b[n[f][4]];
          var l = n[f][2];
          t || (h.plotX = n[f][0] - a.plotLeft + a.diffX, h.plotY = n[f][1] - a.plotTop + a.diffY);
          h.marker = e(h.marker, {
            radius: l,
            width: 2 * l,
            height: 2 * l
          });
          h.radius = l;
        }

        t && this.deferLayout();
        x(this, "afterTranslate");
      },
      checkOverlap: function (a, b) {
        var d = a[0] - b[0],
            c = a[1] - b[1];
        return -.001 > Math.sqrt(d * d + c * c) - Math.abs(a[2] + b[2]);
      },
      positionBubble: function (a, b, c) {
        var d = Math.sqrt,
            e = Math.asin,
            g = Math.acos,
            f = Math.pow,
            h = Math.abs;
        d = d(f(a[0] - b[0], 2) + f(a[1] - b[1], 2));
        g = g((f(d, 2) + f(c[2] + b[2], 2) - f(c[2] + a[2], 2)) / (2 * (c[2] + b[2]) * d));
        e = e(h(a[0] - b[0]) / d);
        a = (0 > a[1] - b[1] ? 0 : Math.PI) + g + e * (0 > (a[0] - b[0]) * (a[1] - b[1]) ? 1 : -1);
        return [b[0] + (b[2] + c[2]) * Math.sin(a), b[1] - (b[2] + c[2]) * Math.cos(a), c[2], c[3], c[4]];
      },
      placeBubbles: function (a) {
        var b = this.checkOverlap,
            d = this.positionBubble,
            c = [],
            e = 1,
            f = 0,
            h = 0;
        var l = [];
        var k;
        a = a.sort(function (a, b) {
          return b[2] - a[2];
        });

        if (a.length) {
          c.push([[0, 0, a[0][2], a[0][3], a[0][4]]]);
          if (1 < a.length) for (c.push([[0, 0 - a[1][2] - a[0][2], a[1][2], a[1][3], a[1][4]]]), k = 2; k < a.length; k++) a[k][2] = a[k][2] || 1, l = d(c[e][f], c[e - 1][h], a[k]), b(l, c[e][0]) ? (c.push([]), h = 0, c[e + 1].push(d(c[e][f], c[e][0], a[k])), e++, f = 0) : 1 < e && c[e - 1][h + 1] && b(l, c[e - 1][h + 1]) ? (h++, c[e].push(d(c[e][f], c[e - 1][h], a[k])), f++) : (f++, c[e].push(l));
          this.chart.stages = c;
          this.chart.rawPositions = [].concat.apply([], c);
          this.resizeRadius();
          l = this.chart.rawPositions;
        }

        return l;
      },
      resizeRadius: function () {
        var a = this.chart,
            b = a.rawPositions,
            c = Math.min,
            e = Math.max,
            f = a.plotLeft,
            n = a.plotTop,
            h = a.plotHeight,
            l = a.plotWidth,
            k,
            q,
            m;
        var p = k = Number.POSITIVE_INFINITY;
        var u = q = Number.NEGATIVE_INFINITY;

        for (m = 0; m < b.length; m++) {
          var v = b[m][2];
          p = c(p, b[m][0] - v);
          u = e(u, b[m][0] + v);
          k = c(k, b[m][1] - v);
          q = e(q, b[m][1] + v);
        }

        m = [u - p, q - k];
        c = c.apply([], [(l - f) / m[0], (h - n) / m[1]]);

        if (1e-10 < Math.abs(c - 1)) {
          for (m = 0; m < b.length; m++) b[m][2] *= c;

          this.placeBubbles(b);
        } else a.diffY = h / 2 + n - k - (q - k) / 2, a.diffX = l / 2 + f - p - (u - p) / 2;
      },
      calculateZExtremes: function () {
        var a = this.options.zMin,
            b = this.options.zMax,
            c = Infinity,
            e = -Infinity;
        if (a && b) return [a, b];
        this.chart.series.forEach(function (a) {
          a.yData.forEach(function (a) {
            B(a) && (a > e && (e = a), a < c && (c = a));
          });
        });
        a = v(a, c);
        b = v(b, e);
        return [a, b];
      },
      getPointRadius: function () {
        var a = this,
            b = a.chart,
            c = a.options,
            e = c.useSimulation,
            f = Math.min(b.plotWidth, b.plotHeight),
            n = {},
            h = [],
            k = b.allDataPoints,
            l,
            m,
            q,
            p;
        ["minSize", "maxSize"].forEach(function (a) {
          var b = parseInt(c[a], 10),
              d = /%$/.test(c[a]);
          n[a] = d ? f * b / 100 : b * Math.sqrt(k.length);
        });
        b.minRadius = l = n.minSize / Math.sqrt(k.length);
        b.maxRadius = m = n.maxSize / Math.sqrt(k.length);
        var u = e ? a.calculateZExtremes() : [l, m];
        (k || []).forEach(function (b, d) {
          q = e ? E(b[2], u[0], u[1]) : b[2];
          p = a.getRadius(u[0], u[1], l, m, q);
          0 === p && (p = null);
          k[d][2] = p;
          h.push(p);
        });
        a.radii = h;
      },
      redrawHalo: k.redrawHalo,
      onMouseDown: k.onMouseDown,
      onMouseMove: k.onMouseMove,
      onMouseUp: function (a) {
        if (a.fixedPosition && !a.removed) {
          var b,
              d,
              c = this.layout,
              e = this.parentNodeLayout;
          e && c.options.dragBetweenSeries && e.nodes.forEach(function (e) {
            a && a.marker && e !== a.series.parentNode && (b = c.getDistXY(a, e), d = c.vectorLength(b) - e.marker.radius - a.marker.radius, 0 > d && (e.series.addPoint(C(a.options, {
              plotX: a.plotX,
              plotY: a.plotY
            }), !1), c.removeElementFromCollection(a, c.nodes), a.remove()));
          });
          k.onMouseUp.apply(this, arguments);
        }
      },
      destroy: function () {
        this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(function (a) {
          a.removeElementFromCollection(this, a.series);
        }, this);
        this.parentNode && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy()));
        a.Series.prototype.destroy.apply(this, arguments);
      },
      alignDataLabel: a.Series.prototype.alignDataLabel
    }, {
      destroy: function () {
        this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
        return f.prototype.destroy.apply(this, arguments);
      },
      firePointEvent: function (a, b, c) {
        var d = this.series.options;

        if (this.isParentNode && d.parentNode) {
          var e = d.allowPointSelect;
          d.allowPointSelect = d.parentNode.allowPointSelect;
          f.prototype.firePointEvent.apply(this, arguments);
          d.allowPointSelect = e;
        } else f.prototype.firePointEvent.apply(this, arguments);
      },
      select: function (a, c) {
        var d = this.series.chart;
        this.isParentNode ? (d.getSelectedPoints = d.getSelectedParentNodes, f.prototype.select.apply(this, arguments), d.getSelectedPoints = b.prototype.getSelectedPoints) : f.prototype.select.apply(this, arguments);
      }
    });
    z(b, "beforeRedraw", function () {
      this.allDataPoints && delete this.allDataPoints;
    });
    "";
  });
  A(c, "Extensions/Polar.js", [c["Core/Animation/AnimationUtilities.js"], c["Core/Chart/Chart.js"], c["Core/Globals.js"], c["Extensions/Pane.js"], c["Core/Pointer.js"], c["Core/Renderer/SVG/SVGRenderer.js"], c["Core/Utilities.js"]], function (c, b, h, a, f, q, u) {
    var z = c.animObject,
        E = u.addEvent,
        B = u.defined,
        e = u.find,
        x = u.isNumber,
        w = u.pick,
        m = u.splat,
        C = u.uniqueKey;
    c = u.wrap;
    var v = h.Series,
        p = h.seriesTypes,
        l = v.prototype;
    f = f.prototype;

    l.searchPointByAngle = function (a) {
      var b = this.chart,
          d = this.xAxis.pane.center;
      return this.searchKDTree({
        clientX: 180 + -180 / Math.PI * Math.atan2(a.chartX - d[0] - b.plotLeft, a.chartY - d[1] - b.plotTop)
      });
    };

    l.getConnectors = function (a, b, c, e) {
      var d = e ? 1 : 0;
      var f = 0 <= b && b <= a.length - 1 ? b : 0 > b ? a.length - 1 + b : 0;
      b = 0 > f - 1 ? a.length - (1 + d) : f - 1;
      d = f + 1 > a.length - 1 ? d : f + 1;
      var g = a[b];
      d = a[d];
      var h = g.plotX;
      g = g.plotY;
      var k = d.plotX;
      var l = d.plotY;
      d = a[f].plotX;
      f = a[f].plotY;
      h = (1.5 * d + h) / 2.5;
      g = (1.5 * f + g) / 2.5;
      k = (1.5 * d + k) / 2.5;
      var r = (1.5 * f + l) / 2.5;
      l = Math.sqrt(Math.pow(h - d, 2) + Math.pow(g - f, 2));
      var m = Math.sqrt(Math.pow(k - d, 2) + Math.pow(r - f, 2));
      h = Math.atan2(g - f, h - d);
      r = Math.PI / 2 + (h + Math.atan2(r - f, k - d)) / 2;
      Math.abs(h - r) > Math.PI / 2 && (r -= Math.PI);
      h = d + Math.cos(r) * l;
      g = f + Math.sin(r) * l;
      k = d + Math.cos(Math.PI + r) * m;
      r = f + Math.sin(Math.PI + r) * m;
      d = {
        rightContX: k,
        rightContY: r,
        leftContX: h,
        leftContY: g,
        plotX: d,
        plotY: f
      };
      c && (d.prevPointCont = this.getConnectors(a, b, !1, e));
      return d;
    };

    l.toXY = function (a) {
      var b = this.chart,
          d = this.xAxis;
      var c = this.yAxis;
      var e = a.plotX,
          f = a.plotY,
          h = a.series,
          k = b.inverted,
          l = a.y,
          m = k ? e : c.len - f;
      k && h && !h.isRadialBar && (a.plotY = f = "number" === typeof l ? c.translate(l) || 0 : 0);
      a.rectPlotX = e;
      a.rectPlotY = f;
      c.center && (m += c.center[3] / 2);
      c = k ? c.postTranslate(f, m) : d.postTranslate(e, m);
      a.plotX = a.polarPlotX = c.x - b.plotLeft;
      a.plotY = a.polarPlotY = c.y - b.plotTop;
      this.kdByAngle ? (b = (e / Math.PI * 180 + d.pane.options.startAngle) % 360, 0 > b && (b += 360), a.clientX = b) : a.clientX = a.plotX;
    };

    p.spline && (c(p.spline.prototype, "getPointSpline", function (a, b, c, e) {
      this.chart.polar ? e ? (a = this.getConnectors(b, e, !0, this.connectEnds), a = ["C", a.prevPointCont.rightContX, a.prevPointCont.rightContY, a.leftContX, a.leftContY, a.plotX, a.plotY]) : a = ["M", c.plotX, c.plotY] : a = a.call(this, b, c, e);
      return a;
    }), p.areasplinerange && (p.areasplinerange.prototype.getPointSpline = p.spline.prototype.getPointSpline));
    E(v, "afterTranslate", function () {
      var a = this.chart;

      if (a.polar && this.xAxis) {
        (this.kdByAngle = a.tooltip && a.tooltip.shared) ? this.searchPoint = this.searchPointByAngle : this.options.findNearestPointBy = "xy";
        if (!this.preventPostTranslate) for (var b = this.points, c = b.length; c--;) this.toXY(b[c]), !a.hasParallelCoordinates && !this.yAxis.reversed && b[c].y < this.yAxis.min && (b[c].isNull = !0);
        this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(E(this, "afterRender", function () {
          if (a.polar) {
            var b = this.yAxis.pane.center;
            this.clipCircle ? this.clipCircle.animate({
              x: b[0],
              y: b[1],
              r: b[2] / 2,
              innerR: b[3] / 2
            }) : this.clipCircle = a.renderer.clipCircle(b[0], b[1], b[2] / 2, b[3] / 2);
            this.group.clip(this.clipCircle);
            this.setClip = h.noop;
          }
        })));
      }
    }, {
      order: 2
    });
    c(l, "getGraphPath", function (a, b) {
      var c = this,
          d;

      if (this.chart.polar) {
        b = b || this.points;

        for (d = 0; d < b.length; d++) if (!b[d].isNull) {
          var e = d;
          break;
        }

        if (!1 !== this.options.connectEnds && "undefined" !== typeof e) {
          this.connectEnds = !0;
          b.splice(b.length, 0, b[e]);
          var f = !0;
        }

        b.forEach(function (a) {
          "undefined" === typeof a.polarPlotY && c.toXY(a);
        });
      }

      d = a.apply(this, [].slice.call(arguments, 1));
      f && b.pop();
      return d;
    });

    var k = function (a, b) {
      var c = this,
          d = this.chart,
          e = this.options.animation,
          f = this.group,
          g = this.markerGroup,
          k = this.xAxis.center,
          l = d.plotLeft,
          m = d.plotTop,
          p,
          q,
          u,
          v;
      if (d.polar) {
        if (c.isRadialBar) b || (c.startAngleRad = w(c.translatedThreshold, c.xAxis.startAngleRad), h.seriesTypes.pie.prototype.animate.call(c, b));else {
          if (d.renderer.isSVG) if (e = z(e), c.is("column")) {
            if (!b) {
              var x = k[3] / 2;
              c.points.forEach(function (a) {
                p = a.graphic;
                u = (q = a.shapeArgs) && q.r;
                v = q && q.innerR;
                p && q && (p.attr({
                  r: x,
                  innerR: x
                }), p.animate({
                  r: u,
                  innerR: v
                }, c.options.animation));
              });
            }
          } else b ? (a = {
            translateX: k[0] + l,
            translateY: k[1] + m,
            scaleX: .001,
            scaleY: .001
          }, f.attr(a), g && g.attr(a)) : (a = {
            translateX: l,
            translateY: m,
            scaleX: 1,
            scaleY: 1
          }, f.animate(a, e), g && g.animate(a, e));
        }
      } else a.call(this, b);
    };

    c(l, "animate", k);
    p.column && (v = p.arearange.prototype, p = p.column.prototype, p.polarArc = function (a, b, c, e) {
      var d = this.xAxis.center,
          f = this.yAxis.len,
          g = d[3] / 2;
      b = f - b + g;
      a = f - w(a, f) + g;
      this.yAxis.reversed && (0 > b && (b = g), 0 > a && (a = g));
      return {
        x: d[0],
        y: d[1],
        r: b,
        innerR: a,
        start: c,
        end: e
      };
    }, c(p, "animate", k), c(p, "translate", function (a) {
      var b = this.options,
          c = b.stacking,
          d = this.chart,
          e = this.xAxis,
          f = this.yAxis,
          h = f.reversed,
          k = f.center,
          l = e.startAngleRad,
          m = e.endAngleRad - l;
      this.preventPostTranslate = !0;
      a.call(this);

      if (e.isRadial) {
        a = this.points;
        e = a.length;
        var p = f.translate(f.min);
        var q = f.translate(f.max);
        b = b.threshold || 0;

        if (d.inverted && x(b)) {
          var v = f.translate(b);
          B(v) && (0 > v ? v = 0 : v > m && (v = m), this.translatedThreshold = v + l);
        }

        for (; e--;) {
          b = a[e];
          var w = b.barX;
          var z = b.x;
          var E = b.y;
          b.shapeType = "arc";

          if (d.inverted) {
            b.plotY = f.translate(E);

            if (c && f.stacking) {
              if (E = f.stacking.stacks[(0 > E ? "-" : "") + this.stackKey], this.visible && E && E[z] && !b.isNull) {
                var C = E[z].points[this.getStackIndicator(void 0, z, this.index).key];
                var A = f.translate(C[0]);
                C = f.translate(C[1]);
                B(A) && (A = u.clamp(A, 0, m));
              }
            } else A = v, C = b.plotY;

            A > C && (C = [A, A = C][0]);
            if (!h) {
              if (A < p) A = p;else if (C > q) C = q;else {
                if (C < p || A > q) A = C = 0;
              }
            } else if (C > p) C = p;else if (A < q) A = q;else if (A > p || C < q) A = C = m;
            f.min > f.max && (A = C = h ? m : 0);
            A += l;
            C += l;
            k && (b.barX = w += k[3] / 2);
            z = Math.max(w, 0);
            E = Math.max(w + b.pointWidth, 0);
            b.shapeArgs = {
              x: k && k[0],
              y: k && k[1],
              r: E,
              innerR: z,
              start: A,
              end: C
            };
            b.opacity = A === C ? 0 : void 0;
            b.plotY = (B(this.translatedThreshold) && (A < this.translatedThreshold ? A : C)) - l;
          } else A = w + l, b.shapeArgs = this.polarArc(b.yBottom, b.plotY, A, A + b.pointWidth);

          this.toXY(b);
          d.inverted ? (w = f.postTranslate(b.rectPlotY, w + b.pointWidth / 2), b.tooltipPos = [w.x - d.plotLeft, w.y - d.plotTop]) : b.tooltipPos = [b.plotX, b.plotY];
          k && (b.ttBelow = b.plotY > k[1]);
        }
      }
    }), p.findAlignments = function (a, b) {
      null === b.align && (b.align = 20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center");
      null === b.verticalAlign && (b.verticalAlign = 45 > a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle");
      return b;
    }, v && (v.findAlignments = p.findAlignments), c(p, "alignDataLabel", function (a, b, c, e, f, h) {
      var d = this.chart,
          g = w(e.inside, !!this.options.stacking);
      d.polar ? (a = b.rectPlotX / Math.PI * 180, d.inverted ? (this.forceDL = d.isInsidePlot(b.plotX, Math.round(b.plotY), !1), g && b.shapeArgs ? (f = b.shapeArgs, f = this.yAxis.postTranslate((f.start + f.end) / 2 - this.xAxis.startAngleRad, b.barX + b.pointWidth / 2), f = {
        x: f.x - d.plotLeft,
        y: f.y - d.plotTop
      }) : b.tooltipPos && (f = {
        x: b.tooltipPos[0],
        y: b.tooltipPos[1]
      }), e.align = w(e.align, "center"), e.verticalAlign = w(e.verticalAlign, "middle")) : this.findAlignments && (e = this.findAlignments(a, e)), l.alignDataLabel.call(this, b, c, e, f, h), this.isRadialBar && b.shapeArgs && b.shapeArgs.start === b.shapeArgs.end && c.hide(!0)) : a.call(this, b, c, e, f, h);
    }));
    c(f, "getCoordinates", function (a, b) {
      var c = this.chart,
          d = {
        xAxis: [],
        yAxis: []
      };
      c.polar ? c.axes.forEach(function (a) {
        var e = a.isXAxis,
            f = a.center;

        if ("colorAxis" !== a.coll) {
          var g = b.chartX - f[0] - c.plotLeft;
          f = b.chartY - f[1] - c.plotTop;
          d[e ? "xAxis" : "yAxis"].push({
            axis: a,
            value: a.translate(e ? Math.PI - Math.atan2(g, f) : Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)), !0)
          });
        }
      }) : d = a.call(this, b);
      return d;
    });

    q.prototype.clipCircle = function (a, b, c, e) {
      var d = C(),
          f = this.createElement("clipPath").attr({
        id: d
      }).add(this.defs);
      a = e ? this.arc(a, b, c, e, 0, 2 * Math.PI).add(f) : this.circle(a, b, c).add(f);
      a.id = d;
      a.clipPath = f;
      return a;
    };

    E(b, "getAxes", function () {
      this.pane || (this.pane = []);
      m(this.options.pane).forEach(function (b) {
        new a(b, this);
      }, this);
    });
    E(b, "afterDrawChartBox", function () {
      this.pane.forEach(function (a) {
        a.render();
      });
    });
    E(h.Series, "afterInit", function () {
      var a = this.chart;
      a.inverted && a.polar && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0));
    });
    c(b.prototype, "get", function (a, b) {
      return e(this.pane, function (a) {
        return a.options.id === b;
      }) || a.call(this, b);
    });
  });
  A(c, "masters/highcharts-more.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (X, N) {
   true && module.exports ? (N["default"] = N, module.exports = X.document ? N(X) : N) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return N(X);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (X) {
  function N(f, h, m, z) {
    f.hasOwnProperty(h) || (f[h] = z.apply(null, m));
  }

  var m = {};
  N(m, "Core/Globals.js", [], function () {
    var f = "undefined" !== typeof X ? X : "undefined" !== typeof window ? window : {},
        h = f.document,
        m = f.navigator && f.navigator.userAgent || "",
        z = h && h.createElementNS && !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        F = /(edge|msie|trident)/i.test(m) && !f.opera,
        L = -1 !== m.indexOf("Firefox"),
        K = -1 !== m.indexOf("Chrome"),
        C = L && 4 > parseInt(m.split("Firefox/")[1], 10);
    return {
      product: "Highcharts",
      version: "8.2.2",
      deg2rad: 2 * Math.PI / 360,
      doc: h,
      hasBidiBug: C,
      hasTouch: !!f.TouchEvent,
      isMS: F,
      isWebKit: -1 !== m.indexOf("AppleWebKit"),
      isFirefox: L,
      isChrome: K,
      isSafari: !K && -1 !== m.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(m),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      symbolSizes: {},
      svg: z,
      win: f,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: function () {},
      charts: [],
      dateFormats: {}
    };
  });
  N(m, "Core/Utilities.js", [m["Core/Globals.js"]], function (f) {
    function h(b, k, t, a) {
      var u = k ? "Highcharts error" : "Highcharts warning";
      32 === b && (b = u + ": Deprecated member");
      var c = l(b),
          H = c ? u + " #" + b + ": www.highcharts.com/errors/" + b + "/" : b.toString();

      u = function () {
        if (k) throw Error(H);
        e.console && -1 === h.messages.indexOf(H) && console.log(H);
      };

      if ("undefined" !== typeof a) {
        var d = "";
        c && (H += "?");
        S(a, function (b, k) {
          d += "\n - " + k + ": " + b;
          c && (H += encodeURI(k) + "=" + encodeURI(b));
        });
        H += d;
      }

      t ? ca(t, "displayError", {
        code: b,
        message: H,
        params: a
      }, u) : u();
      h.messages.push(H);
    }

    function m() {
      var b,
          k = arguments,
          t = {},
          a = function (b, k) {
        "object" !== typeof b && (b = {});
        S(k, function (t, u) {
          !z(t, !0) || n(t) || D(t) ? b[u] = k[u] : b[u] = a(b[u] || {}, t);
        });
        return b;
      };

      !0 === k[0] && (t = k[1], k = Array.prototype.slice.call(k, 2));
      var u = k.length;

      for (b = 0; b < u; b++) t = a(t, k[b]);

      return t;
    }

    function z(b, k) {
      return !!b && "object" === typeof b && (!k || !x(b));
    }

    function F(b, k, t) {
      var a;
      v(k) ? w(t) ? b.setAttribute(k, t) : b && b.getAttribute && ((a = b.getAttribute(k)) || "class" !== k || (a = b.getAttribute(k + "Name"))) : S(k, function (k, t) {
        b.setAttribute(t, k);
      });
      return a;
    }

    function L() {
      for (var b = arguments, k = b.length, t = 0; t < k; t++) {
        var a = b[t];
        if ("undefined" !== typeof a && null !== a) return a;
      }
    }

    function K(b, k) {
      if (!b) return k;
      var t = b.split(".").reverse();
      if (1 === t.length) return k[b];

      for (b = t.pop(); "undefined" !== typeof b && "undefined" !== typeof k && null !== k;) k = k[b], b = t.pop();

      return k;
    }

    f.timers = [];
    var C = f.charts,
        y = f.doc,
        e = f.win;
    (h || (h = {})).messages = [];
    f.error = h;
    f.merge = m;

    var I = f.pInt = function (b, k) {
      return parseInt(b, k || 10);
    },
        v = f.isString = function (b) {
      return "string" === typeof b;
    },
        x = f.isArray = function (b) {
      b = Object.prototype.toString.call(b);
      return "[object Array]" === b || "[object Array Iterator]" === b;
    };

    f.isObject = z;

    var D = f.isDOMElement = function (b) {
      return z(b) && "number" === typeof b.nodeType;
    },
        n = f.isClass = function (b) {
      var k = b && b.constructor;
      return !(!z(b, !0) || D(b) || !k || !k.name || "Object" === k.name);
    },
        l = f.isNumber = function (b) {
      return "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b;
    },
        J = f.erase = function (b, k) {
      for (var t = b.length; t--;) if (b[t] === k) {
        b.splice(t, 1);
        break;
      }
    },
        w = f.defined = function (b) {
      return "undefined" !== typeof b && null !== b;
    };

    f.attr = F;

    var r = f.splat = function (b) {
      return x(b) ? b : [b];
    },
        d = f.syncTimeout = function (b, k, t) {
      if (0 < k) return setTimeout(b, k, t);
      b.call(0, t);
      return -1;
    },
        g = f.clearTimeout = function (b) {
      w(b) && clearTimeout(b);
    },
        c = f.extend = function (b, k) {
      var t;
      b || (b = {});

      for (t in k) b[t] = k[t];

      return b;
    };

    f.pick = L;

    var a = f.css = function (b, k) {
      f.isMS && !f.svg && k && "undefined" !== typeof k.opacity && (k.filter = "alpha(opacity=" + 100 * k.opacity + ")");
      c(b.style, k);
    },
        q = f.createElement = function (b, k, t, u, H) {
      b = y.createElement(b);
      k && c(b, k);
      H && a(b, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      t && a(b, t);
      u && u.appendChild(b);
      return b;
    },
        p = f.extendClass = function (b, k) {
      var t = function () {};

      t.prototype = new b();
      c(t.prototype, k);
      return t;
    },
        B = f.pad = function (b, k, t) {
      return Array((k || 2) + 1 - String(b).replace("-", "").length).join(t || "0") + b;
    },
        A = f.relativeLength = function (b, k, t) {
      return /%$/.test(b) ? k * parseFloat(b) / 100 + (t || 0) : parseFloat(b);
    },
        G = f.wrap = function (b, k, t) {
      var a = b[k];

      b[k] = function () {
        var b = Array.prototype.slice.call(arguments),
            k = arguments,
            u = this;

        u.proceed = function () {
          a.apply(u, arguments.length ? arguments : k);
        };

        b.unshift(a);
        b = t.apply(this, b);
        u.proceed = null;
        return b;
      };
    },
        M = f.format = function (b, k, t) {
      var a = "{",
          u = !1,
          H = [],
          c = /f$/,
          d = /\.([0-9])/,
          g = f.defaultOptions.lang,
          p = t && t.time || f.time;

      for (t = t && t.numberFormatter || R; b;) {
        var q = b.indexOf(a);
        if (-1 === q) break;
        var U = b.slice(0, q);

        if (u) {
          U = U.split(":");
          a = K(U.shift() || "", k);
          if (U.length && "number" === typeof a) if (U = U.join(":"), c.test(U)) {
            var r = parseInt((U.match(d) || ["", "-1"])[1], 10);
            null !== a && (a = t(a, r, g.decimalPoint, -1 < U.indexOf(",") ? g.thousandsSep : ""));
          } else a = p.dateFormat(U, a);
          H.push(a);
        } else H.push(U);

        b = b.slice(q + 1);
        a = (u = !u) ? "}" : "{";
      }

      H.push(b);
      return H.join("");
    },
        T = f.getMagnitude = function (b) {
      return Math.pow(10, Math.floor(Math.log(b) / Math.LN10));
    },
        Q = f.normalizeTickInterval = function (b, k, a, u, H) {
      var c = b;
      a = L(a, 1);
      var d = b / a;
      k || (k = H ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === u && (1 === a ? k = k.filter(function (b) {
        return 0 === b % 1;
      }) : .1 >= a && (k = [1 / a])));

      for (u = 0; u < k.length && !(c = k[u], H && c * a >= b || !H && d <= (k[u] + (k[u + 1] || k[u])) / 2); u++);

      return c = t(c * a, -Math.round(Math.log(.001) / Math.LN10));
    },
        O = f.stableSort = function (b, k) {
      var t = b.length,
          a,
          u;

      for (u = 0; u < t; u++) b[u].safeI = u;

      b.sort(function (b, t) {
        a = k(b, t);
        return 0 === a ? b.safeI - t.safeI : a;
      });

      for (u = 0; u < t; u++) delete b[u].safeI;
    },
        E = f.arrayMin = function (b) {
      for (var k = b.length, t = b[0]; k--;) b[k] < t && (t = b[k]);

      return t;
    },
        u = f.arrayMax = function (b) {
      for (var k = b.length, t = b[0]; k--;) b[k] > t && (t = b[k]);

      return t;
    },
        b = f.destroyObjectProperties = function (b, k) {
      S(b, function (t, a) {
        t && t !== k && t.destroy && t.destroy();
        delete b[a];
      });
    },
        k = f.discardElement = function (b) {
      var k = f.garbageBin;
      k || (k = q("div"));
      b && k.appendChild(b);
      k.innerHTML = "";
    },
        t = f.correctFloat = function (b, k) {
      return parseFloat(b.toPrecision(k || 14));
    },
        H = f.timeUnits = {
      millisecond: 1,
      second: 1E3,
      minute: 6E4,
      hour: 36E5,
      day: 864E5,
      week: 6048E5,
      month: 24192E5,
      year: 314496E5
    },
        R = f.numberFormat = function (b, k, t, a) {
      b = +b || 0;
      k = +k;
      var u = f.defaultOptions.lang,
          H = (b.toString().split(".")[1] || "").split("e")[0].length,
          c = b.toString().split("e");
      if (-1 === k) k = Math.min(H, 20);else if (!l(k)) k = 2;else if (k && c[1] && 0 > c[1]) {
        var d = k + +c[1];
        0 <= d ? (c[0] = (+c[0]).toExponential(d).split("e")[0], k = d) : (c[0] = c[0].split(".")[0] || 0, b = 20 > k ? (c[0] * Math.pow(10, c[1])).toFixed(k) : 0, c[1] = 0);
      }
      var g = (Math.abs(c[1] ? c[0] : b) + Math.pow(10, -Math.max(k, H) - 1)).toFixed(k);
      H = String(I(g));
      d = 3 < H.length ? H.length % 3 : 0;
      t = L(t, u.decimalPoint);
      a = L(a, u.thousandsSep);
      b = (0 > b ? "-" : "") + (d ? H.substr(0, d) + a : "");
      b += H.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + a);
      k && (b += t + g.slice(-k));
      c[1] && 0 !== +b && (b += "e" + c[1]);
      return b;
    };

    Math.easeInOutSine = function (b) {
      return -.5 * (Math.cos(Math.PI * b) - 1);
    };

    var U = f.getStyle = function (b, k, t) {
      if ("width" === k) return k = Math.min(b.offsetWidth, b.scrollWidth), t = b.getBoundingClientRect && b.getBoundingClientRect().width, t < k && t >= k - 1 && (k = Math.floor(t)), Math.max(0, k - f.getStyle(b, "padding-left") - f.getStyle(b, "padding-right"));
      if ("height" === k) return Math.max(0, Math.min(b.offsetHeight, b.scrollHeight) - f.getStyle(b, "padding-top") - f.getStyle(b, "padding-bottom"));
      e.getComputedStyle || h(27, !0);
      if (b = e.getComputedStyle(b, void 0)) b = b.getPropertyValue(k), L(t, "opacity" !== k) && (b = I(b));
      return b;
    },
        Z = f.inArray = function (b, k, t) {
      h(32, !1, void 0, {
        "Highcharts.inArray": "use Array.indexOf"
      });
      return k.indexOf(b, t);
    },
        aa = f.find = Array.prototype.find ? function (b, k) {
      return b.find(k);
    } : function (b, k) {
      var t,
          a = b.length;

      for (t = 0; t < a; t++) if (k(b[t], t)) return b[t];
    };

    f.keys = function (b) {
      h(32, !1, void 0, {
        "Highcharts.keys": "use Object.keys"
      });
      return Object.keys(b);
    };

    var ba = f.offset = function (b) {
      var k = y.documentElement;
      b = b.parentElement || b.parentNode ? b.getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: b.top + (e.pageYOffset || k.scrollTop) - (k.clientTop || 0),
        left: b.left + (e.pageXOffset || k.scrollLeft) - (k.clientLeft || 0)
      };
    },
        S = f.objectEach = function (b, k, t) {
      for (var a in b) Object.hasOwnProperty.call(b, a) && k.call(t || b[a], b[a], a, b);
    };

    S({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (b, k) {
      f[k] = function (t) {
        var a;
        h(32, !1, void 0, (a = {}, a["Highcharts." + k] = "use Array." + b, a));
        return Array.prototype[b].apply(t, [].slice.call(arguments, 1));
      };
    });

    var Y = f.addEvent = function (b, k, t, a) {
      void 0 === a && (a = {});
      var u = b.addEventListener || f.addEventListenerPolyfill;
      var c = "function" === typeof b && b.prototype ? b.prototype.protoEvents = b.prototype.protoEvents || {} : b.hcEvents = b.hcEvents || {};
      f.Point && b instanceof f.Point && b.series && b.series.chart && (b.series.chart.runTrackerClick = !0);
      u && u.call(b, k, t, !1);
      c[k] || (c[k] = []);
      c[k].push({
        fn: t,
        order: "number" === typeof a.order ? a.order : Infinity
      });
      c[k].sort(function (b, k) {
        return b.order - k.order;
      });
      return function () {
        W(b, k, t);
      };
    },
        W = f.removeEvent = function (b, k, t) {
      function a(k, t) {
        var a = b.removeEventListener || f.removeEventListenerPolyfill;
        a && a.call(b, k, t, !1);
      }

      function u(t) {
        var u;

        if (b.nodeName) {
          if (k) {
            var c = {};
            c[k] = !0;
          } else c = t;

          S(c, function (b, k) {
            if (t[k]) for (u = t[k].length; u--;) a(k, t[k][u].fn);
          });
        }
      }

      var c;
      ["protoEvents", "hcEvents"].forEach(function (H, d) {
        var g = (d = d ? b : b.prototype) && d[H];
        g && (k ? (c = g[k] || [], t ? (g[k] = c.filter(function (b) {
          return t !== b.fn;
        }), a(k, t)) : (u(g), g[k] = [])) : (u(g), d[H] = {}));
      });
    },
        ca = f.fireEvent = function (b, k, t, a) {
      var u;
      t = t || {};

      if (y.createEvent && (b.dispatchEvent || b.fireEvent)) {
        var H = y.createEvent("Events");
        H.initEvent(k, !0, !0);
        c(H, t);
        b.dispatchEvent ? b.dispatchEvent(H) : b.fireEvent(k, H);
      } else t.target || c(t, {
        preventDefault: function () {
          t.defaultPrevented = !0;
        },
        target: b,
        type: k
      }), function (k, a) {
        void 0 === k && (k = []);
        void 0 === a && (a = []);
        var c = 0,
            H = 0,
            d = k.length + a.length;

        for (u = 0; u < d; u++) !1 === (k[c] ? a[H] ? k[c].order <= a[H].order ? k[c++] : a[H++] : k[c++] : a[H++]).fn.call(b, t) && t.preventDefault();
      }(b.protoEvents && b.protoEvents[k], b.hcEvents && b.hcEvents[k]);

      a && !t.defaultPrevented && a.call(b, t);
    },
        V,
        da = f.uniqueKey = function () {
      var b = Math.random().toString(36).substring(2, 9) + "-",
          k = 0;
      return function () {
        return "highcharts-" + (V ? "" : b) + k++;
      };
    }(),
        ea = f.useSerialIds = function (b) {
      return V = L(b, V);
    },
        fa = f.isFunction = function (b) {
      return "function" === typeof b;
    },
        ha = f.getOptions = function () {
      return f.defaultOptions;
    },
        ia = f.setOptions = function (b) {
      f.defaultOptions = m(!0, f.defaultOptions, b);
      (b.time || b.global) && f.time.update(m(f.defaultOptions.global, f.defaultOptions.time, b.global, b.time));
      return f.defaultOptions;
    };

    e.jQuery && (e.jQuery.fn.highcharts = function () {
      var b = [].slice.call(arguments);
      if (this[0]) return b[0] ? (new f[v(b[0]) ? b.shift() : "Chart"](this[0], b[0], b[1]), this) : C[F(this[0], "data-highcharts-chart")];
    });
    return {
      addEvent: Y,
      arrayMax: u,
      arrayMin: E,
      attr: F,
      clamp: function (b, k, t) {
        return b > k ? b < t ? b : t : k;
      },
      clearTimeout: g,
      correctFloat: t,
      createElement: q,
      css: a,
      defined: w,
      destroyObjectProperties: b,
      discardElement: k,
      erase: J,
      error: h,
      extend: c,
      extendClass: p,
      find: aa,
      fireEvent: ca,
      format: M,
      getMagnitude: T,
      getNestedProperty: K,
      getOptions: ha,
      getStyle: U,
      inArray: Z,
      isArray: x,
      isClass: n,
      isDOMElement: D,
      isFunction: fa,
      isNumber: l,
      isObject: z,
      isString: v,
      merge: m,
      normalizeTickInterval: Q,
      numberFormat: R,
      objectEach: S,
      offset: ba,
      pad: B,
      pick: L,
      pInt: I,
      relativeLength: A,
      removeEvent: W,
      setOptions: ia,
      splat: r,
      stableSort: O,
      syncTimeout: d,
      timeUnits: H,
      uniqueKey: da,
      useSerialIds: ea,
      wrap: G
    };
  });
  N(m, "Core/Color/Color.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.isNumber,
        z = h.merge,
        F = h.pInt;
    "";

    h = function () {
      function h(K) {
        this.parsers = [{
          regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
          parse: function (h) {
            return [F(h[1]), F(h[2]), F(h[3]), parseFloat(h[4], 10)];
          }
        }, {
          regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
          parse: function (h) {
            return [F(h[1]), F(h[2]), F(h[3]), 1];
          }
        }];
        this.rgba = [];
        if (f.Color !== h) return new f.Color(K);
        if (!(this instanceof h)) return new h(K);
        this.init(K);
      }

      h.parse = function (f) {
        return new h(f);
      };

      h.prototype.init = function (f) {
        var C, y;
        if ((this.input = f = h.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = f.stops.map(function (v) {
          return new h(v[1]);
        });else {
          if (f && f.charAt && "#" === f.charAt()) {
            var e = f.length;
            f = parseInt(f.substr(1), 16);
            7 === e ? C = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === e && (C = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1]);
          }

          if (!C) for (y = this.parsers.length; y-- && !C;) {
            var I = this.parsers[y];
            (e = I.regex.exec(f)) && (C = I.parse(e));
          }
        }
        this.rgba = C || [];
      };

      h.prototype.get = function (f) {
        var h = this.input,
            y = this.rgba;

        if ("undefined" !== typeof this.stops) {
          var e = z(h);
          e.stops = [].concat(e.stops);
          this.stops.forEach(function (I, v) {
            e.stops[v] = [e.stops[v][0], I.get(f)];
          });
        } else e = y && m(y[0]) ? "rgb" === f || !f && 1 === y[3] ? "rgb(" + y[0] + "," + y[1] + "," + y[2] + ")" : "a" === f ? y[3] : "rgba(" + y.join(",") + ")" : h;

        return e;
      };

      h.prototype.brighten = function (f) {
        var h,
            y = this.rgba;
        if (this.stops) this.stops.forEach(function (e) {
          e.brighten(f);
        });else if (m(f) && 0 !== f) for (h = 0; 3 > h; h++) y[h] += F(255 * f), 0 > y[h] && (y[h] = 0), 255 < y[h] && (y[h] = 255);
        return this;
      };

      h.prototype.setOpacity = function (f) {
        this.rgba[3] = f;
        return this;
      };

      h.prototype.tweenTo = function (f, h) {
        var y = this.rgba,
            e = f.rgba;
        e.length && y && y.length ? (f = 1 !== e[3] || 1 !== y[3], h = (f ? "rgba(" : "rgb(") + Math.round(e[0] + (y[0] - e[0]) * (1 - h)) + "," + Math.round(e[1] + (y[1] - e[1]) * (1 - h)) + "," + Math.round(e[2] + (y[2] - e[2]) * (1 - h)) + (f ? "," + (e[3] + (y[3] - e[3]) * (1 - h)) : "") + ")") : h = f.input || "none";
        return h;
      };

      h.names = {
        white: "#ffffff",
        black: "#000000"
      };
      return h;
    }();

    f.Color = h;
    f.color = h.parse;
    return h;
  });
  N(m, "Core/Animation/Fx.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = f.win,
        z = h.isNumber,
        F = h.objectEach;

    h = function () {
      function h(f, h, y) {
        this.pos = NaN;
        this.options = h;
        this.elem = f;
        this.prop = y;
      }

      h.prototype.dSetter = function () {
        var f = this.paths,
            h = f && f[0];
        f = f && f[1];
        var y = [],
            e = this.now || 0;
        if (1 !== e && h && f) {
          if (h.length === f.length && 1 > e) for (var I = 0; I < f.length; I++) {
            for (var v = h[I], x = f[I], D = [], n = 0; n < x.length; n++) {
              var l = v[n],
                  J = x[n];
              D[n] = "number" === typeof l && "number" === typeof J && ("A" !== x[0] || 4 !== n && 5 !== n) ? l + e * (J - l) : J;
            }

            y.push(D);
          } else y = f;
        } else y = this.toD || [];
        this.elem.attr("d", y, void 0, !0);
      };

      h.prototype.update = function () {
        var f = this.elem,
            h = this.prop,
            y = this.now,
            e = this.options.step;
        if (this[h + "Setter"]) this[h + "Setter"]();else f.attr ? f.element && f.attr(h, y, null, !0) : f.style[h] = y + this.unit;
        e && e.call(f, y, this);
      };

      h.prototype.run = function (h, C, y) {
        var e = this,
            I = e.options,
            v = function (n) {
          return v.stopped ? !1 : e.step(n);
        },
            x = m.requestAnimationFrame || function (n) {
          setTimeout(n, 13);
        },
            D = function () {
          for (var n = 0; n < f.timers.length; n++) f.timers[n]() || f.timers.splice(n--, 1);

          f.timers.length && x(D);
        };

        h !== C || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = h, this.end = C, this.unit = y, this.now = this.start, this.pos = 0, v.elem = this.elem, v.prop = this.prop, v() && 1 === f.timers.push(v) && x(D)) : (delete I.curAnim[this.prop], I.complete && 0 === Object.keys(I.curAnim).length && I.complete.call(this.elem));
      };

      h.prototype.step = function (f) {
        var h = +new Date(),
            y = this.options,
            e = this.elem,
            I = y.complete,
            v = y.duration,
            x = y.curAnim;
        if (e.attr && !e.element) f = !1;else if (f || h >= v + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var D = x[this.prop] = !0;
          F(x, function (n) {
            !0 !== n && (D = !1);
          });
          D && I && I.call(e);
          f = !1;
        } else this.pos = y.easing((h - this.startTime) / v), this.now = this.start + (this.end - this.start) * this.pos, this.update(), f = !0;
        return f;
      };

      h.prototype.initPath = function (f, h, y) {
        function e(r, d) {
          for (; r.length < w;) {
            var g = r[0],
                c = d[w - r.length];
            c && "M" === g[0] && (r[0] = "C" === c[0] ? ["C", g[1], g[2], g[1], g[2], g[1], g[2]] : ["L", g[1], g[2]]);
            r.unshift(g);
            D && r.push(r[r.length - 1]);
          }
        }

        function I(r, d) {
          for (; r.length < w;) if (d = r[r.length / n - 1].slice(), "C" === d[0] && (d[1] = d[5], d[2] = d[6]), D) {
            var g = r[r.length / n].slice();
            r.splice(r.length / 2, 0, d, g);
          } else r.push(d);
        }

        var v = f.startX,
            x = f.endX;
        h = h && h.slice();
        y = y.slice();
        var D = f.isArea,
            n = D ? 2 : 1;
        if (!h) return [y, y];

        if (v && x) {
          for (f = 0; f < v.length; f++) if (v[f] === x[0]) {
            var l = f;
            break;
          } else if (v[0] === x[x.length - v.length + f]) {
            l = f;
            var J = !0;
            break;
          } else if (v[v.length - 1] === x[x.length - v.length + f]) {
            l = v.length - f;
            break;
          }

          "undefined" === typeof l && (h = []);
        }

        if (h.length && z(l)) {
          var w = y.length + l * n;
          J ? (e(h, y), I(y, h)) : (e(y, h), I(h, y));
        }

        return [h, y];
      };

      h.prototype.fillSetter = function () {
        h.prototype.strokeSetter.apply(this, arguments);
      };

      h.prototype.strokeSetter = function () {
        this.elem.attr(this.prop, f.color(this.start).tweenTo(f.color(this.end), this.pos), null, !0);
      };

      return h;
    }();

    return f.Fx = h;
  });
  N(m, "Core/Animation/AnimationUtilities.js", [m["Core/Animation/Fx.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = m.defined,
        P = m.getStyle,
        L = m.isArray,
        K = m.isNumber,
        C = m.isObject,
        y = m.merge,
        e = m.objectEach,
        I = m.pick;

    m = h.setAnimation = function (l, n) {
      n.renderer.globalAnimation = I(l, n.options.chart.animation, !0);
    };

    var v = h.animObject = function (l) {
      return C(l) ? h.merge({
        duration: 500,
        defer: 0
      }, l) : {
        duration: l ? 500 : 0,
        defer: 0
      };
    },
        x = h.getDeferredAnimation = function (l, n, w) {
      var r = v(n),
          d = 0,
          g = 0;
      (w ? [w] : l.series).forEach(function (c) {
        c = v(c.options.animation);
        d = n && z(n.defer) ? r.defer : Math.max(d, c.duration + c.defer);
        g = Math.min(r.duration, c.duration);
      });
      l.renderer.forExport && (d = 0);
      return {
        defer: Math.max(0, d - g),
        duration: Math.min(d, g)
      };
    },
        D = h.animate = function (l, v, w) {
      var r,
          d = "",
          g,
          c;

      if (!C(w)) {
        var a = arguments;
        w = {
          duration: a[2],
          easing: a[3],
          complete: a[4]
        };
      }

      K(w.duration) || (w.duration = 400);
      w.easing = "function" === typeof w.easing ? w.easing : Math[w.easing] || Math.easeInOutSine;
      w.curAnim = y(v);
      e(v, function (a, p) {
        n(l, p);
        c = new f(l, w, p);
        g = null;
        "d" === p && L(v.d) ? (c.paths = c.initPath(l, l.pathArray, v.d), c.toD = v.d, r = 0, g = 1) : l.attr ? r = l.attr(p) : (r = parseFloat(P(l, p)) || 0, "opacity" !== p && (d = "px"));
        g || (g = a);
        g && g.match && g.match("px") && (g = g.replace(/px/g, ""));
        c.run(r, g, d);
      });
    },
        n = h.stop = function (l, n) {
      for (var w = h.timers.length; w--;) h.timers[w].elem !== l || n && n !== h.timers[w].prop || (h.timers[w].stopped = !0);
    };

    return {
      animate: D,
      animObject: v,
      getDeferredAnimation: x,
      setAnimation: m,
      stop: n
    };
  });
  N(m, "Core/Renderer/SVG/SVGElement.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.animate,
        P = f.animObject,
        K = f.stop,
        C = m.deg2rad,
        y = m.doc,
        e = m.hasTouch,
        I = m.isFirefox,
        v = m.noop,
        x = m.svg,
        D = m.SVG_NS,
        n = m.win,
        l = z.attr,
        J = z.createElement,
        w = z.css,
        r = z.defined,
        d = z.erase,
        g = z.extend,
        c = z.fireEvent,
        a = z.isArray,
        q = z.isFunction,
        p = z.isNumber,
        B = z.isString,
        A = z.merge,
        G = z.objectEach,
        M = z.pick,
        T = z.pInt,
        Q = z.syncTimeout,
        O = z.uniqueKey;
    "";

    f = function () {
      function E() {
        this.height = this.element = void 0;
        this.opacity = 1;
        this.renderer = void 0;
        this.SVG_NS = D;
        this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
        this.width = void 0;
      }

      E.prototype._defaultGetter = function (a) {
        a = M(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      };

      E.prototype._defaultSetter = function (a, b, k) {
        k.setAttribute(b, a);
      };

      E.prototype.add = function (a) {
        var b = this.renderer,
            k = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        "undefined" !== typeof this.textStr && "text" === this.element.nodeName && b.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var t = this.zIndexSetter();
        t || (a ? a.element : b.box).appendChild(k);
        if (this.onAdd) this.onAdd();
        return this;
      };

      E.prototype.addClass = function (a, b) {
        var k = b ? "" : this.attr("class") || "";
        a = (a || "").split(/ /g).reduce(function (b, a) {
          -1 === k.indexOf(a) && b.push(a);
          return b;
        }, k ? [k] : []).join(" ");
        a !== k && this.attr("class", a);
        return this;
      };

      E.prototype.afterSetters = function () {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      };

      E.prototype.align = function (a, b, k) {
        var t,
            c = {};
        var u = this.renderer;
        var g = u.alignedObjects;
        var p, q;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = b, !k || B(k)) this.alignTo = t = k || "renderer", d(g, this), g.push(this), k = void 0;
        } else a = this.alignOptions, b = this.alignByTranslate, t = this.alignTo;

        k = M(k, u[t], u);
        t = a.align;
        u = a.verticalAlign;
        g = (k.x || 0) + (a.x || 0);
        var r = (k.y || 0) + (a.y || 0);
        "right" === t ? p = 1 : "center" === t && (p = 2);
        p && (g += (k.width - (a.width || 0)) / p);
        c[b ? "translateX" : "x"] = Math.round(g);
        "bottom" === u ? q = 1 : "middle" === u && (q = 2);
        q && (r += (k.height - (a.height || 0)) / q);
        c[b ? "translateY" : "y"] = Math.round(r);
        this[this.placed ? "animate" : "attr"](c);
        this.placed = !0;
        this.alignAttr = c;
        return this;
      };

      E.prototype.alignSetter = function (a) {
        var b = {
          left: "start",
          center: "middle",
          right: "end"
        };
        b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
      };

      E.prototype.animate = function (a, b, k) {
        var t = this,
            c = P(M(b, this.renderer.globalAnimation, !0));
        b = c.defer;
        M(y.hidden, y.msHidden, y.webkitHidden, !1) && (c.duration = 0);
        0 !== c.duration ? (k && (c.complete = k), Q(function () {
          t.element && F(t, a, c);
        }, b)) : (this.attr(a, void 0, k), G(a, function (b, k) {
          c.step && c.step.call(this, b, {
            prop: k,
            pos: 1
          });
        }, this));
        return this;
      };

      E.prototype.applyTextOutline = function (a) {
        var b = this.element,
            k;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
        a = a.split(" ");
        var t = a[a.length - 1];

        if ((k = a[0]) && "none" !== k && m.svg) {
          this.fakeTS = !0;
          a = [].slice.call(b.getElementsByTagName("tspan"));
          this.ySetter = this.xSetter;
          k = k.replace(/(^[\d\.]+)(.*?)$/g, function (b, k, t) {
            return 2 * k + t;
          });
          this.removeTextOutline(a);
          var c = b.textContent ? /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(b.textContent) : !1;
          var u = b.firstChild;
          a.forEach(function (a, H) {
            0 === H && (a.setAttribute("x", b.getAttribute("x")), H = b.getAttribute("y"), a.setAttribute("y", H || 0), null === H && b.setAttribute("y", 0));
            H = a.cloneNode(!0);
            l(c && !I ? a : H, {
              "class": "highcharts-text-outline",
              fill: t,
              stroke: t,
              "stroke-width": k,
              "stroke-linejoin": "round"
            });
            b.insertBefore(H, u);
          });
          c && I && a[0] && (a = a[0].cloneNode(!0), a.textContent = " ", b.insertBefore(a, u));
        }
      };

      E.prototype.attr = function (a, b, k, t) {
        var c = this.element,
            u,
            d = this,
            g,
            p,
            q = this.symbolCustomAttribs;

        if ("string" === typeof a && "undefined" !== typeof b) {
          var r = a;
          a = {};
          a[r] = b;
        }

        "string" === typeof a ? d = (this[a + "Getter"] || this._defaultGetter).call(this, a, c) : (G(a, function (b, k) {
          g = !1;
          t || K(this, k);
          this.symbolName && -1 !== q.indexOf(k) && (u || (this.symbolAttr(a), u = !0), g = !0);
          !this.rotation || "x" !== k && "y" !== k || (this.doTransform = !0);
          g || (p = this[k + "Setter"] || this._defaultSetter, p.call(this, b, k, c), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k) && this.updateShadows(k, b, p));
        }, this), this.afterSetters());
        k && k.call(this);
        return d;
      };

      E.prototype.clip = function (a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      };

      E.prototype.crisp = function (a, b) {
        b = b || a.strokeWidth || 0;
        var k = Math.round(b) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + k;
        a.y = Math.floor(a.y || this.y || 0) + k;
        a.width = Math.floor((a.width || this.width || 0) - 2 * k);
        a.height = Math.floor((a.height || this.height || 0) - 2 * k);
        r(a.strokeWidth) && (a.strokeWidth = b);
        return a;
      };

      E.prototype.complexColor = function (u, b, k) {
        var t = this.renderer,
            H,
            d,
            g,
            p,
            q,
            B,
            l,
            n,
            w,
            E,
            V = [],
            v;
        c(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          u.radialGradient ? d = "radialGradient" : u.linearGradient && (d = "linearGradient");

          if (d) {
            g = u[d];
            q = t.gradients;
            B = u.stops;
            w = k.radialReference;
            a(g) && (u[d] = g = {
              x1: g[0],
              y1: g[1],
              x2: g[2],
              y2: g[3],
              gradientUnits: "userSpaceOnUse"
            });
            "radialGradient" === d && w && !r(g.gradientUnits) && (p = g, g = A(g, t.getRadialAttr(w, p), {
              gradientUnits: "userSpaceOnUse"
            }));
            G(g, function (b, k) {
              "id" !== k && V.push(k, b);
            });
            G(B, function (b) {
              V.push(b);
            });
            V = V.join(",");
            if (q[V]) E = q[V].attr("id");else {
              g.id = E = O();
              var c = q[V] = t.createElement(d).attr(g).add(t.defs);
              c.radAttr = p;
              c.stops = [];
              B.forEach(function (b) {
                0 === b[1].indexOf("rgba") ? (H = h.parse(b[1]), l = H.get("rgb"), n = H.get("a")) : (l = b[1], n = 1);
                b = t.createElement("stop").attr({
                  offset: b[0],
                  "stop-color": l,
                  "stop-opacity": n
                }).add(c);
                c.stops.push(b);
              });
            }
            v = "url(" + t.url + "#" + E + ")";
            k.setAttribute(b, v);
            k.gradient = V;

            u.toString = function () {
              return v;
            };
          }
        });
      };

      E.prototype.css = function (a) {
        var b = this.styles,
            k = {},
            t = this.element,
            c = "",
            d = !b,
            u = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        b && G(a, function (a, t) {
          b && b[t] !== a && (k[t] = a, d = !0);
        });

        if (d) {
          b && (a = g(b, k));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === t.nodeName.toLowerCase() && a.width) var p = this.textWidth = T(a.width);
          this.styles = a;
          p && !x && this.renderer.forExport && delete a.width;

          if (t.namespaceURI === this.SVG_NS) {
            var q = function (b, k) {
              return "-" + k.toLowerCase();
            };

            G(a, function (b, k) {
              -1 === u.indexOf(k) && (c += k.replace(/([A-Z])/g, q) + ":" + b + ";");
            });
            c && l(t, "style", c);
          } else w(t, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      };

      E.prototype.dashstyleSetter = function (a) {
        var b = this["stroke-width"];
        "inherit" === b && (b = 1);

        if (a = a && a.toLowerCase()) {
          var k = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (a = k.length; a--;) k[a] = "" + T(k[a]) * M(b, NaN);

          a = k.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      };

      E.prototype.destroy = function () {
        var a = this,
            b = a.element || {},
            k = a.renderer,
            t = k.isSVG && "SPAN" === b.nodeName && a.parentGroup || void 0,
            c = b.ownerSVGElement;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
        K(a);

        if (a.clipPath && c) {
          var g = a.clipPath;
          [].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"), function (b) {
            -1 < b.getAttribute("clip-path").indexOf(g.element.id) && b.removeAttribute("clip-path");
          });
          a.clipPath = g.destroy();
        }

        if (a.stops) {
          for (c = 0; c < a.stops.length; c++) a.stops[c].destroy();

          a.stops.length = 0;
          a.stops = void 0;
        }

        a.safeRemoveChild(b);

        for (k.styledMode || a.destroyShadows(); t && t.div && 0 === t.div.childNodes.length;) b = t.parentGroup, a.safeRemoveChild(t.div), delete t.div, t = b;

        a.alignTo && d(k.alignedObjects, a);
        G(a, function (b, k) {
          a[k] && a[k].parentGroup === a && a[k].destroy && a[k].destroy();
          delete a[k];
        });
      };

      E.prototype.destroyShadows = function () {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      };

      E.prototype.destroyTextPath = function (a, b) {
        var k = a.getElementsByTagName("text")[0];

        if (k) {
          if (k.removeAttribute("dx"), k.removeAttribute("dy"), b.element.setAttribute("id", ""), this.textPathWrapper && k.getElementsByTagName("textPath").length) {
            for (a = this.textPathWrapper.element.childNodes; a.length;) k.appendChild(a[0]);

            k.removeChild(this.textPathWrapper.element);
          }
        } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy");

        this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
      };

      E.prototype.dSetter = function (c, b, k) {
        a(c) && ("string" === typeof c[0] && (c = this.renderer.pathToSegments(c)), this.pathArray = c, c = c.reduce(function (b, k, a) {
          return k && k.join ? (a ? b + " " : "") + k.join(" ") : (k || "").toString();
        }, ""));
        /(NaN| {2}|^$)/.test(c) && (c = "M 0 0");
        this[b] !== c && (k.setAttribute(b, c), this[b] = c);
      };

      E.prototype.fadeOut = function (a) {
        var b = this;
        b.animate({
          opacity: 0
        }, {
          duration: M(a, 150),
          complete: function () {
            b.attr({
              y: -9999
            }).hide();
          }
        });
      };

      E.prototype.fillSetter = function (a, b, k) {
        "string" === typeof a ? k.setAttribute(b, a) : a && this.complexColor(a, b, k);
      };

      E.prototype.getBBox = function (a, b) {
        var k,
            t = this.renderer,
            c = this.element,
            d = this.styles,
            p = this.textStr,
            u = t.cache,
            B = t.cacheKeys,
            A = c.namespaceURI === this.SVG_NS;
        b = M(b, this.rotation, 0);
        var l = t.styledMode ? c && E.prototype.getStyle.call(c, "font-size") : d && d.fontSize;

        if (r(p)) {
          var n = p.toString();
          -1 === n.indexOf("<") && (n = n.replace(/[0-9]/g, "0"));
          n += ["", b, l, this.textWidth, d && d.textOverflow, d && d.fontWeight].join();
        }

        n && !a && (k = u[n]);

        if (!k) {
          if (A || t.forExport) {
            try {
              var w = this.fakeTS && function (b) {
                [].forEach.call(c.querySelectorAll(".highcharts-text-outline"), function (k) {
                  k.style.display = b;
                });
              };

              q(w) && w("none");
              k = c.getBBox ? g({}, c.getBBox()) : {
                width: c.offsetWidth,
                height: c.offsetHeight
              };
              q(w) && w("");
            } catch (ca) {
              "";
            }

            if (!k || 0 > k.width) k = {
              width: 0,
              height: 0
            };
          } else k = this.htmlGetBBox();

          t.isSVG && (a = k.width, t = k.height, A && (k.height = t = {
            "11px,17": 14,
            "13px,20": 16
          }[d && d.fontSize + "," + Math.round(t)] || t), b && (d = b * C, k.width = Math.abs(t * Math.sin(d)) + Math.abs(a * Math.cos(d)), k.height = Math.abs(t * Math.cos(d)) + Math.abs(a * Math.sin(d))));

          if (n && 0 < k.height) {
            for (; 250 < B.length;) delete u[B.shift()];

            u[n] || B.push(n);
            u[n] = k;
          }
        }

        return k;
      };

      E.prototype.getStyle = function (a) {
        return n.getComputedStyle(this.element || this, "").getPropertyValue(a);
      };

      E.prototype.hasClass = function (a) {
        return -1 !== ("" + this.attr("class")).split(" ").indexOf(a);
      };

      E.prototype.hide = function (a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      };

      E.prototype.htmlGetBBox = function () {
        return {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        };
      };

      E.prototype.init = function (a, b) {
        this.element = "span" === b ? J(b) : y.createElementNS(this.SVG_NS, b);
        this.renderer = a;
        c(this, "afterInit");
      };

      E.prototype.invert = function (a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      };

      E.prototype.on = function (a, b) {
        var k,
            t,
            c = this.element,
            d;
        e && "click" === a ? (c.ontouchstart = function (b) {
          k = b.touches[0].clientX;
          t = b.touches[0].clientY;
        }, c.ontouchend = function (a) {
          k && 4 <= Math.sqrt(Math.pow(k - a.changedTouches[0].clientX, 2) + Math.pow(t - a.changedTouches[0].clientY, 2)) || b.call(c, a);
          d = !0;
          !1 !== a.cancelable && a.preventDefault();
        }, c.onclick = function (k) {
          d || b.call(c, k);
        }) : c["on" + a] = b;
        return this;
      };

      E.prototype.opacitySetter = function (a, b, k) {
        this.opacity = a = Number(Number(a).toFixed(3));
        k.setAttribute(b, a);
      };

      E.prototype.removeClass = function (a) {
        return this.attr("class", ("" + this.attr("class")).replace(B(a) ? new RegExp("(^| )" + a + "( |$)") : a, " ").replace(/ +/g, " ").trim());
      };

      E.prototype.removeTextOutline = function (a) {
        for (var b = a.length, k; b--;) k = a[b], "highcharts-text-outline" === k.getAttribute("class") && d(a, this.element.removeChild(k));
      };

      E.prototype.safeRemoveChild = function (a) {
        var b = a.parentNode;
        b && b.removeChild(a);
      };

      E.prototype.setRadialReference = function (a) {
        var b = this.element.gradient && this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
        return this;
      };

      E.prototype.setTextPath = function (a, b) {
        var k = this.element,
            t = {
          textAnchor: "text-anchor"
        },
            c = !1,
            d = this.textPathWrapper,
            g = !d;
        b = A(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, b);
        var q = b.attributes;

        if (a && b && b.enabled) {
          d && null === d.element.parentNode ? (g = !0, d = d.destroy()) : d && this.removeTextOutline.call(d.parentGroup, [].slice.call(k.getElementsByTagName("tspan")));
          this.options && this.options.padding && (q.dx = -this.options.padding);
          d || (this.textPathWrapper = d = this.renderer.createElement("textPath"), c = !0);
          var u = d.element;
          (b = a.element.getAttribute("id")) || a.element.setAttribute("id", b = O());
          if (g) for (a = k.getElementsByTagName("tspan"); a.length;) a[0].setAttribute("y", 0), p(q.dx) && a[0].setAttribute("x", -q.dx), u.appendChild(a[0]);
          c && d && d.add({
            element: this.text ? this.text.element : k
          });
          u.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
          r(q.dy) && (u.parentNode.setAttribute("dy", q.dy), delete q.dy);
          r(q.dx) && (u.parentNode.setAttribute("dx", q.dx), delete q.dx);
          G(q, function (b, k) {
            u.setAttribute(t[k] || k, b);
          });
          k.removeAttribute("transform");
          this.removeTextOutline.call(d, [].slice.call(k.getElementsByTagName("tspan")));
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = v;
        } else d && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(k, a), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));

        return this;
      };

      E.prototype.shadow = function (a, b, k) {
        var t = [],
            c = this.element,
            d = !1,
            p = this.oldShadowOptions;
        var q = {
          color: "#000000",
          offsetX: 1,
          offsetY: 1,
          opacity: .15,
          width: 3
        };
        var u;
        !0 === a ? u = q : "object" === typeof a && (u = g(q, a));
        u && (u && p && G(u, function (b, k) {
          b !== p[k] && (d = !0);
        }), d && this.destroyShadows(), this.oldShadowOptions = u);
        if (!u) this.destroyShadows();else if (!this.shadows) {
          var r = u.opacity / u.width;
          var B = this.parentInverted ? "translate(-1,-1)" : "translate(" + u.offsetX + ", " + u.offsetY + ")";

          for (q = 1; q <= u.width; q++) {
            var A = c.cloneNode(!1);
            var n = 2 * u.width + 1 - 2 * q;
            l(A, {
              stroke: a.color || "#000000",
              "stroke-opacity": r * q,
              "stroke-width": n,
              transform: B,
              fill: "none"
            });
            A.setAttribute("class", (A.getAttribute("class") || "") + " highcharts-shadow");
            k && (l(A, "height", Math.max(l(A, "height") - n, 0)), A.cutHeight = n);
            b ? b.element.appendChild(A) : c.parentNode && c.parentNode.insertBefore(A, c);
            t.push(A);
          }

          this.shadows = t;
        }
        return this;
      };

      E.prototype.show = function (a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      };

      E.prototype.strokeSetter = function (a, b, k) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (E.prototype.fillSetter.call(this, this.stroke, "stroke", k), k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (k.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
      };

      E.prototype.strokeWidth = function () {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width"),
            b = 0;
        if (a.indexOf("px") === a.length - 2) b = T(a);else if ("" !== a) {
          var k = y.createElementNS(D, "rect");
          l(k, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(k);
          b = k.getBBox().width;
          k.parentNode.removeChild(k);
        }
        return b;
      };

      E.prototype.symbolAttr = function (a) {
        var b = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (k) {
          b[k] = M(a[k], b[k]);
        });
        b.attr({
          d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
        });
      };

      E.prototype.textSetter = function (a) {
        a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      };

      E.prototype.titleSetter = function (a) {
        var b = this.element.getElementsByTagName("title")[0];
        b || (b = y.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
        b.firstChild && b.removeChild(b.firstChild);
        b.appendChild(y.createTextNode(String(M(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
      };

      E.prototype.toFront = function () {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      };

      E.prototype.translate = function (a, b) {
        return this.attr({
          translateX: a,
          translateY: b
        });
      };

      E.prototype.updateShadows = function (a, b, k) {
        var t = this.shadows;
        if (t) for (var c = t.length; c--;) k.call(t[c], "height" === a ? Math.max(b - (t[c].cutHeight || 0), 0) : "d" === a ? this.d : b, a, t[c]);
      };

      E.prototype.updateTransform = function () {
        var a = this.translateX || 0,
            b = this.translateY || 0,
            k = this.scaleX,
            t = this.scaleY,
            c = this.inverted,
            d = this.rotation,
            g = this.matrix,
            p = this.element;
        c && (a += this.width, b += this.height);
        a = ["translate(" + a + "," + b + ")"];
        r(g) && a.push("matrix(" + g.join(",") + ")");
        c ? a.push("rotate(90) scale(-1,1)") : d && a.push("rotate(" + d + " " + M(this.rotationOriginX, p.getAttribute("x"), 0) + " " + M(this.rotationOriginY, p.getAttribute("y") || 0) + ")");
        (r(k) || r(t)) && a.push("scale(" + M(k, 1) + " " + M(t, 1) + ")");
        a.length && p.setAttribute("transform", a.join(" "));
      };

      E.prototype.visibilitySetter = function (a, b, k) {
        "inherit" === a ? k.removeAttribute(b) : this[b] !== a && k.setAttribute(b, a);
        this[b] = a;
      };

      E.prototype.xGetter = function (a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      };

      E.prototype.zIndexSetter = function (a, b) {
        var k = this.renderer,
            t = this.parentGroup,
            c = (t || k).element || k.box,
            d = this.element,
            g = !1;
        k = c === k.box;
        var p = this.added;
        var q;
        r(a) ? (d.setAttribute("data-z-index", a), a = +a, this[b] === a && (p = !1)) : r(this[b]) && d.removeAttribute("data-z-index");
        this[b] = a;

        if (p) {
          (a = this.zIndex) && t && (t.handleZ = !0);
          b = c.childNodes;

          for (q = b.length - 1; 0 <= q && !g; q--) {
            t = b[q];
            p = t.getAttribute("data-z-index");
            var u = !r(p);
            if (t !== d) if (0 > a && u && !k && !q) c.insertBefore(d, b[q]), g = !0;else if (T(p) <= a || u && (!r(a) || 0 <= a)) c.insertBefore(d, b[q + 1] || null), g = !0;
          }

          g || (c.insertBefore(d, b[k ? 3 : 0] || null), g = !0);
        }

        return g;
      };

      return E;
    }();

    f.prototype["stroke-widthSetter"] = f.prototype.strokeSetter;
    f.prototype.yGetter = f.prototype.xGetter;

    f.prototype.matrixSetter = f.prototype.rotationOriginXSetter = f.prototype.rotationOriginYSetter = f.prototype.rotationSetter = f.prototype.scaleXSetter = f.prototype.scaleYSetter = f.prototype.translateXSetter = f.prototype.translateYSetter = f.prototype.verticalAlignSetter = function (a, c) {
      this[c] = a;
      this.doTransform = !0;
    };

    m.SVGElement = f;
    return m.SVGElement;
  });
  N(m, "Core/Renderer/SVG/SVGLabel.js", [m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = this && this.__extends || function () {
      var f = function (e, I) {
        f = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (v, e) {
          v.__proto__ = e;
        } || function (v, e) {
          for (var f in e) e.hasOwnProperty(f) && (v[f] = e[f]);
        };

        return f(e, I);
      };

      return function (e, I) {
        function v() {
          this.constructor = e;
        }

        f(e, I);
        e.prototype = null === I ? Object.create(I) : (v.prototype = I.prototype, new v());
      };
    }(),
        z = h.defined,
        F = h.extend,
        L = h.isNumber,
        K = h.merge,
        C = h.removeEvent;

    return function (h) {
      function e(f, v, x, D, n, l, J, w, r, d) {
        var g = h.call(this) || this;
        g.init(f, "g");
        g.textStr = v;
        g.x = x;
        g.y = D;
        g.anchorX = l;
        g.anchorY = J;
        g.baseline = r;
        g.className = d;
        "button" !== d && g.addClass("highcharts-label");
        d && g.addClass("highcharts-" + d);
        g.text = f.text("", 0, 0, w).attr({
          zIndex: 1
        });

        if ("string" === typeof n) {
          var c = /^url\((.*?)\)$/.test(n);
          if (g.renderer.symbols[n] || c) g.symbolKey = n;
        }

        g.bBox = e.emptyBBox;
        g.padding = 3;
        g.paddingLeft = 0;
        g.baselineOffset = 0;
        g.needsBox = f.styledMode || c;
        g.deferredAttr = {};
        g.alignFactor = 0;
        return g;
      }

      m(e, h);

      e.prototype.alignSetter = function (e) {
        e = {
          left: 0,
          center: .5,
          right: 1
        }[e];
        e !== this.alignFactor && (this.alignFactor = e, this.bBox && L(this.xSetting) && this.attr({
          x: this.xSetting
        }));
      };

      e.prototype.anchorXSetter = function (e, v) {
        this.anchorX = e;
        this.boxAttr(v, Math.round(e) - this.getCrispAdjust() - this.xSetting);
      };

      e.prototype.anchorYSetter = function (e, v) {
        this.anchorY = e;
        this.boxAttr(v, e - this.ySetting);
      };

      e.prototype.boxAttr = function (e, v) {
        this.box ? this.box.attr(e, v) : this.deferredAttr[e] = v;
      };

      e.prototype.css = function (h) {
        if (h) {
          var v = {};
          h = K(h);
          e.textProps.forEach(function (e) {
            "undefined" !== typeof h[e] && (v[e] = h[e], delete h[e]);
          });
          this.text.css(v);
          var I = "fontSize" in v || "fontWeight" in v;
          if ("width" in v || I) this.updateBoxSize(), I && this.updateTextPadding();
        }

        return f.prototype.css.call(this, h);
      };

      e.prototype.destroy = function () {
        C(this.element, "mouseenter");
        C(this.element, "mouseleave");
        this.text && this.text.destroy();
        this.box && (this.box = this.box.destroy());
        f.prototype.destroy.call(this);
      };

      e.prototype.fillSetter = function (e, v) {
        e && (this.needsBox = !0);
        this.fill = e;
        this.boxAttr(v, e);
      };

      e.prototype.getBBox = function () {
        var e = this.bBox,
            v = this.padding;
        return {
          width: e.width + 2 * v,
          height: e.height + 2 * v,
          x: e.x - v,
          y: e.y - v
        };
      };

      e.prototype.getCrispAdjust = function () {
        return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
      };

      e.prototype.heightSetter = function (e) {
        this.heightSetting = e;
      };

      e.prototype.on = function (e, v) {
        var h = this,
            D = h.text,
            n = D && "SPAN" === D.element.tagName ? D : void 0;

        if (n) {
          var l = function (l) {
            ("mouseenter" === e || "mouseleave" === e) && l.relatedTarget instanceof Element && (h.element.contains(l.relatedTarget) || n.element.contains(l.relatedTarget)) || v.call(h.element, l);
          };

          n.on(e, l);
        }

        f.prototype.on.call(h, e, l || v);
        return h;
      };

      e.prototype.onAdd = function () {
        var e = this.textStr;
        this.text.add(this);
        this.attr({
          text: z(e) ? e : "",
          x: this.x,
          y: this.y
        });
        this.box && z(this.anchorX) && this.attr({
          anchorX: this.anchorX,
          anchorY: this.anchorY
        });
      };

      e.prototype.paddingSetter = function (e) {
        z(e) && e !== this.padding && (this.padding = e, this.updateTextPadding());
      };

      e.prototype.paddingLeftSetter = function (e) {
        z(e) && e !== this.paddingLeft && (this.paddingLeft = e, this.updateTextPadding());
      };

      e.prototype.rSetter = function (e, v) {
        this.boxAttr(v, e);
      };

      e.prototype.shadow = function (e) {
        e && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(e));
        return this;
      };

      e.prototype.strokeSetter = function (e, v) {
        this.stroke = e;
        this.boxAttr(v, e);
      };

      e.prototype["stroke-widthSetter"] = function (e, v) {
        e && (this.needsBox = !0);
        this["stroke-width"] = e;
        this.boxAttr(v, e);
      };

      e.prototype["text-alignSetter"] = function (e) {
        this.textAlign = e;
      };

      e.prototype.textSetter = function (e) {
        "undefined" !== typeof e && this.text.attr({
          text: e
        });
        this.updateBoxSize();
        this.updateTextPadding();
      };

      e.prototype.updateBoxSize = function () {
        var f = this.text.element.style,
            v = {},
            h = this.padding,
            D = this.paddingLeft,
            n = L(this.widthSetting) && L(this.heightSetting) && !this.textAlign || !z(this.text.textStr) ? e.emptyBBox : this.text.getBBox();
        this.width = (this.widthSetting || n.width || 0) + 2 * h + D;
        this.height = (this.heightSetting || n.height || 0) + 2 * h;
        this.baselineOffset = h + Math.min(this.renderer.fontMetrics(f && f.fontSize, this.text).b, n.height || Infinity);
        this.needsBox && (this.box || (f = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), f.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), f.add(this), f = this.getCrispAdjust(), v.x = f, v.y = (this.baseline ? -this.baselineOffset : 0) + f), v.width = Math.round(this.width), v.height = Math.round(this.height), this.box.attr(F(v, this.deferredAttr)), this.deferredAttr = {});
        this.bBox = n;
      };

      e.prototype.updateTextPadding = function () {
        var e = this.text,
            f = this.baseline ? 0 : this.baselineOffset,
            h = this.paddingLeft + this.padding;
        z(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (h += {
          center: .5,
          right: 1
        }[this.textAlign] * (this.widthSetting - this.bBox.width));
        if (h !== e.x || f !== e.y) e.attr("x", h), e.hasBoxWidthChanged && (this.bBox = e.getBBox(!0), this.updateBoxSize()), "undefined" !== typeof f && e.attr("y", f);
        e.x = h;
        e.y = f;
      };

      e.prototype.widthSetter = function (e) {
        this.widthSetting = L(e) ? e : void 0;
      };

      e.prototype.xSetter = function (e) {
        this.x = e;
        this.alignFactor && (e -= this.alignFactor * ((this.widthSetting || this.bBox.width) + 2 * this.padding), this["forceAnimate:x"] = !0);
        this.xSetting = Math.round(e);
        this.attr("translateX", this.xSetting);
      };

      e.prototype.ySetter = function (e) {
        this.ySetting = this.y = Math.round(e);
        this.attr("translateY", this.ySetting);
      };

      e.emptyBBox = {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      e.textProps = "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
      return e;
    }(f);
  });
  N(m, "Core/Renderer/SVG/SVGRenderer.js", [m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Renderer/SVG/SVGLabel.js"], m["Core/Utilities.js"]], function (f, h, m, z, F) {
    var P = F.addEvent,
        K = F.attr,
        C = F.createElement,
        y = F.css,
        e = F.defined,
        I = F.destroyObjectProperties,
        v = F.extend,
        x = F.isArray,
        D = F.isNumber,
        n = F.isObject,
        l = F.isString,
        J = F.merge,
        w = F.objectEach,
        r = F.pick,
        d = F.pInt,
        g = F.splat,
        c = F.uniqueKey,
        a = h.charts,
        q = h.deg2rad,
        p = h.doc,
        B = h.isFirefox,
        A = h.isMS,
        G = h.isWebKit;
    F = h.noop;

    var M = h.svg,
        T = h.SVG_NS,
        Q = h.symbolSizes,
        O = h.win,
        E = function () {
      function u(b, k, a, c, d, g, p) {
        this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
        this.init(b, k, a, c, d, g, p);
      }

      u.prototype.init = function (b, k, a, c, d, g, q) {
        var t = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        q || t.css(this.getStyle(c));
        c = t.element;
        b.appendChild(c);
        K(b, "dir", "ltr");
        -1 === b.innerHTML.indexOf("xmlns") && K(c, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = c;
        this.boxWrapper = t;
        this.alignedObjects = [];
        this.url = (B || G) && p.getElementsByTagName("base").length ? O.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
        this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 8.2.2"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = g;
        this.forExport = d;
        this.styledMode = q;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(k, a, !1);
        var H;
        B && b.getBoundingClientRect && (k = function () {
          y(b, {
            left: 0,
            top: 0
          });
          H = b.getBoundingClientRect();
          y(b, {
            left: Math.ceil(H.left) - H.left + "px",
            top: Math.ceil(H.top) - H.top + "px"
          });
        }, k(), this.unSubPixelFix = P(O, "resize", k));
      };

      u.prototype.definition = function (b) {
        function k(b, t) {
          var c;
          g(b).forEach(function (b) {
            var d = a.createElement(b.tagName),
                g = {};
            w(b, function (b, k) {
              "tagName" !== k && "children" !== k && "textContent" !== k && (g[k] = b);
            });
            d.attr(g);
            d.add(t || a.defs);
            b.textContent && d.element.appendChild(p.createTextNode(b.textContent));
            k(b.children || [], d);
            c = d;
          });
          return c;
        }

        var a = this;
        return k(b);
      };

      u.prototype.getStyle = function (b) {
        return this.style = v({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, b);
      };

      u.prototype.setStyle = function (b) {
        this.boxWrapper.css(this.getStyle(b));
      };

      u.prototype.isHidden = function () {
        return !this.boxWrapper.getBBox().width;
      };

      u.prototype.destroy = function () {
        var b = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        I(this.gradients || {});
        this.gradients = null;
        b && (this.defs = b.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      };

      u.prototype.createElement = function (b) {
        var k = new this.Element();
        k.init(this, b);
        return k;
      };

      u.prototype.getRadialAttr = function (b, k) {
        return {
          cx: b[0] - b[2] / 2 + k.cx * b[2],
          cy: b[1] - b[2] / 2 + k.cy * b[2],
          r: k.r * b[2]
        };
      };

      u.prototype.truncate = function (b, k, a, c, d, g, q) {
        var t = this,
            H = b.rotation,
            R,
            u = c ? 1 : 0,
            A = (a || c).length,
            r = A,
            B = [],
            n = function (b) {
          k.firstChild && k.removeChild(k.firstChild);
          b && k.appendChild(p.createTextNode(b));
        },
            l = function (g, p) {
          p = p || g;
          if ("undefined" === typeof B[p]) if (k.getSubStringLength) try {
            B[p] = d + k.getSubStringLength(0, c ? p + 1 : p);
          } catch (ja) {
            "";
          } else t.getSpanWidth && (n(q(a || c, g)), B[p] = d + t.getSpanWidth(b, k));
          return B[p];
        },
            e;

        b.rotation = 0;
        var w = l(k.textContent.length);

        if (e = d + w > g) {
          for (; u <= A;) r = Math.ceil((u + A) / 2), c && (R = q(c, r)), w = l(r, R && R.length - 1), u === A ? u = A + 1 : w > g ? A = r - 1 : u = r;

          0 === A ? n("") : a && A === a.length - 1 || n(R || q(a || c, r));
        }

        c && c.splice(0, r);
        b.actualWidth = w;
        b.rotation = H;
        return e;
      };

      u.prototype.buildText = function (b) {
        var k = b.element,
            a = this,
            c = a.forExport,
            g = r(b.textStr, "").toString(),
            q = -1 !== g.indexOf("<"),
            u = k.childNodes,
            A,
            B = K(k, "x"),
            n = b.styles,
            e = b.textWidth,
            G = n && n.lineHeight,
            f = n && n.textOutline,
            V = n && "ellipsis" === n.textOverflow,
            E = n && "nowrap" === n.whiteSpace,
            h = n && n.fontSize,
            v,
            D = u.length;
        n = e && !b.added && this.box;

        var O = function (b) {
          var t;
          a.styledMode || (t = /(px|em)$/.test(b && b.style.fontSize) ? b.style.fontSize : h || a.style.fontSize || 12);
          return G ? d(G) : a.fontMetrics(t, b.getAttribute("style") ? b : k).h;
        },
            J = function (b, k) {
          w(a.escapes, function (a, t) {
            k && -1 !== k.indexOf(a) || (b = b.toString().replace(new RegExp(a, "g"), t));
          });
          return b;
        },
            x = function (b, k) {
          var a = b.indexOf("<");
          b = b.substring(a, b.indexOf(">") - a);
          a = b.indexOf(k + "=");
          if (-1 !== a && (a = a + k.length + 1, k = b.charAt(a), '"' === k || "'" === k)) return b = b.substring(a + 1), b.substring(0, b.indexOf(k));
        },
            I = /<br.*?>/g;

        var m = [g, V, E, G, f, h, e].join();

        if (m !== b.textCache) {
          for (b.textCache = m; D--;) k.removeChild(u[D]);

          q || f || V || e || -1 !== g.indexOf(" ") && (!E || I.test(g)) ? (n && n.appendChild(k), q ? (g = a.styledMode ? g.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : g.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), g = g.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(I)) : g = [g], g = g.filter(function (b) {
            return "" !== b;
          }), g.forEach(function (t, d) {
            var g = 0,
                H = 0;
            t = t.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            var q = t.split("|||");
            q.forEach(function (t) {
              if ("" !== t || 1 === q.length) {
                var R = {},
                    u = p.createElementNS(a.SVG_NS, "tspan"),
                    n,
                    r;
                (n = x(t, "class")) && K(u, "class", n);
                if (n = x(t, "style")) n = n.replace(/(;| |^)color([ :])/, "$1fill$2"), K(u, "style", n);

                if ((r = x(t, "href")) && !c && -1 === r.split(":")[0].toLowerCase().indexOf("javascript")) {
                  var l = p.createElementNS(a.SVG_NS, "a");
                  K(l, "href", r);
                  K(u, "class", "highcharts-anchor");
                  l.appendChild(u);
                  a.styledMode || y(u, {
                    cursor: "pointer"
                  });
                }

                t = J(t.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                if (" " !== t) {
                  u.appendChild(p.createTextNode(t));
                  g ? R.dx = 0 : d && null !== B && (R.x = B);
                  K(u, R);
                  k.appendChild(l || u);
                  !g && v && (!M && c && y(u, {
                    display: "block"
                  }), K(u, "dy", O(u)));

                  if (e) {
                    var w = t.replace(/([^\^])-/g, "$1- ").split(" ");
                    R = !E && (1 < q.length || d || 1 < w.length);
                    l = 0;
                    r = O(u);
                    if (V) A = a.truncate(b, u, t, void 0, 0, Math.max(0, e - parseInt(h || 12, 10)), function (b, k) {
                      return b.substring(0, k) + "\u2026";
                    });else if (R) for (; w.length;) w.length && !E && 0 < l && (u = p.createElementNS(T, "tspan"), K(u, {
                      dy: r,
                      x: B
                    }), n && K(u, "style", n), u.appendChild(p.createTextNode(w.join(" ").replace(/- /g, "-"))), k.appendChild(u)), a.truncate(b, u, null, w, 0 === l ? H : 0, e, function (b, k) {
                      return w.slice(0, k).join(" ").replace(/- /g, "-");
                    }), H = b.actualWidth, l++;
                  }

                  g++;
                }
              }
            });
            v = v || k.childNodes.length;
          }), V && A && b.attr("title", J(b.textStr || "", ["&lt;", "&gt;"])), n && n.removeChild(k), l(f) && b.applyTextOutline && b.applyTextOutline(f)) : k.appendChild(p.createTextNode(J(g)));
        }
      };

      u.prototype.getContrast = function (b) {
        b = f.parse(b).rgba;
        b[0] *= 1;
        b[1] *= 1.2;
        b[2] *= .5;
        return 459 < b[0] + b[1] + b[2] ? "#000000" : "#FFFFFF";
      };

      u.prototype.button = function (b, k, a, c, d, g, p, q, u, n) {
        var t = this.label(b, k, a, u, void 0, void 0, n, void 0, "button"),
            H = 0,
            R = this.styledMode;
        b = (d = d ? J(d) : d) && d.style || {};
        d && d.style && delete d.style;
        t.attr(J({
          padding: 8,
          r: 2
        }, d));

        if (!R) {
          d = J({
            fill: "#f7f7f7",
            stroke: "#cccccc",
            "stroke-width": 1,
            style: {
              color: "#333333",
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, {
            style: b
          }, d);
          var r = d.style;
          delete d.style;
          g = J(d, {
            fill: "#e6e6e6"
          }, g);
          var B = g.style;
          delete g.style;
          p = J(d, {
            fill: "#e6ebf5",
            style: {
              color: "#000000",
              fontWeight: "bold"
            }
          }, p);
          var l = p.style;
          delete p.style;
          q = J(d, {
            style: {
              color: "#cccccc"
            }
          }, q);
          var e = q.style;
          delete q.style;
        }

        P(t.element, A ? "mouseover" : "mouseenter", function () {
          3 !== H && t.setState(1);
        });
        P(t.element, A ? "mouseout" : "mouseleave", function () {
          3 !== H && t.setState(H);
        });

        t.setState = function (b) {
          1 !== b && (t.state = H = b);
          t.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b || 0]);
          R || t.attr([d, g, p, q][b || 0]).css([r, B, l, e][b || 0]);
        };

        R || t.attr(d).css(v({
          cursor: "default"
        }, r));
        return t.on("click", function (b) {
          3 !== H && c.call(t, b);
        });
      };

      u.prototype.crispLine = function (b, k, a) {
        void 0 === a && (a = "round");
        var t = b[0],
            c = b[1];
        t[1] === c[1] && (t[1] = c[1] = Math[a](t[1]) - k % 2 / 2);
        t[2] === c[2] && (t[2] = c[2] = Math[a](t[2]) + k % 2 / 2);
        return b;
      };

      u.prototype.path = function (b) {
        var k = this.styledMode ? {} : {
          fill: "none"
        };
        x(b) ? k.d = b : n(b) && v(k, b);
        return this.createElement("path").attr(k);
      };

      u.prototype.circle = function (b, k, a) {
        b = n(b) ? b : "undefined" === typeof b ? {} : {
          x: b,
          y: k,
          r: a
        };
        k = this.createElement("circle");

        k.xSetter = k.ySetter = function (b, k, a) {
          a.setAttribute("c" + k, b);
        };

        return k.attr(b);
      };

      u.prototype.arc = function (b, k, a, c, d, g) {
        n(b) ? (c = b, k = c.y, a = c.r, b = c.x) : c = {
          innerR: c,
          start: d,
          end: g
        };
        b = this.symbol("arc", b, k, a, a, c);
        b.r = a;
        return b;
      };

      u.prototype.rect = function (b, k, a, c, d, g) {
        d = n(b) ? b.r : d;
        var t = this.createElement("rect");
        b = n(b) ? b : "undefined" === typeof b ? {} : {
          x: b,
          y: k,
          width: Math.max(a, 0),
          height: Math.max(c, 0)
        };
        this.styledMode || ("undefined" !== typeof g && (b.strokeWidth = g, b = t.crisp(b)), b.fill = "none");
        d && (b.r = d);

        t.rSetter = function (b, k, a) {
          t.r = b;
          K(a, {
            rx: b,
            ry: b
          });
        };

        t.rGetter = function () {
          return t.r;
        };

        return t.attr(b);
      };

      u.prototype.setSize = function (b, k, a) {
        var t = this.alignedObjects,
            c = t.length;
        this.width = b;
        this.height = k;

        for (this.boxWrapper.animate({
          width: b,
          height: k
        }, {
          step: function () {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: r(a, !0) ? void 0 : 0
        }); c--;) t[c].align();
      };

      u.prototype.g = function (b) {
        var k = this.createElement("g");
        return b ? k.attr({
          "class": "highcharts-" + b
        }) : k;
      };

      u.prototype.image = function (b, k, a, c, d, g) {
        var t = {
          preserveAspectRatio: "none"
        },
            p = function (b, k) {
          b.setAttributeNS ? b.setAttributeNS("http://www.w3.org/1999/xlink", "href", k) : b.setAttribute("hc-svg-href", k);
        },
            q = function (k) {
          p(H.element, b);
          g.call(H, k);
        };

        1 < arguments.length && v(t, {
          x: k,
          y: a,
          width: c,
          height: d
        });
        var H = this.createElement("image").attr(t);
        g ? (p(H.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), t = new O.Image(), P(t, "load", q), t.src = b, t.complete && q({})) : p(H.element, b);
        return H;
      };

      u.prototype.symbol = function (b, k, t, c, d, g) {
        var q = this,
            H = /^url\((.*?)\)$/,
            u = H.test(b),
            R = !u && (this.symbols[b] ? b : "circle"),
            n = R && this.symbols[R],
            A;

        if (n) {
          "number" === typeof k && (A = n.call(this.symbols, Math.round(k || 0), Math.round(t || 0), c || 0, d || 0, g));
          var B = this.path(A);
          q.styledMode || B.attr("fill", "none");
          v(B, {
            symbolName: R,
            x: k,
            y: t,
            width: c,
            height: d
          });
          g && v(B, g);
        } else if (u) {
          var l = b.match(H)[1];
          B = this.image(l);
          B.imgwidth = r(Q[l] && Q[l].width, g && g.width);
          B.imgheight = r(Q[l] && Q[l].height, g && g.height);

          var w = function () {
            B.attr({
              width: B.width,
              height: B.height
            });
          };

          ["width", "height"].forEach(function (b) {
            B[b + "Setter"] = function (b, k) {
              var a = {},
                  t = this["img" + k],
                  c = "width" === k ? "translateX" : "translateY";
              this[k] = b;
              e(t) && (g && "within" === g.backgroundSize && this.width && this.height && (t = Math.round(t * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(k, t), this.alignByTranslate || (a[c] = ((this[k] || 0) - t) / 2, this.attr(a)));
            };
          });
          e(k) && B.attr({
            x: k,
            y: t
          });
          B.isImg = !0;
          e(B.imgwidth) && e(B.imgheight) ? w() : (B.attr({
            width: 0,
            height: 0
          }), C("img", {
            onload: function () {
              var b = a[q.chartIndex];
              0 === this.width && (y(this, {
                position: "absolute",
                top: "-999em"
              }), p.body.appendChild(this));
              Q[l] = {
                width: this.width,
                height: this.height
              };
              B.imgwidth = this.width;
              B.imgheight = this.height;
              B.element && w();
              this.parentNode && this.parentNode.removeChild(this);
              q.imgCount--;
              if (!q.imgCount && b && !b.hasLoaded) b.onload();
            },
            src: l
          }), this.imgCount++);
        }

        return B;
      };

      u.prototype.clipRect = function (b, k, a, d) {
        var t = c() + "-",
            g = this.createElement("clipPath").attr({
          id: t
        }).add(this.defs);
        b = this.rect(b, k, a, d, 0).add(g);
        b.id = t;
        b.clipPath = g;
        b.count = 0;
        return b;
      };

      u.prototype.text = function (b, k, a, c) {
        var t = {};
        if (c && (this.allowHTML || !this.forExport)) return this.html(b, k, a);
        t.x = Math.round(k || 0);
        a && (t.y = Math.round(a));
        e(b) && (t.text = b);
        b = this.createElement("text").attr(t);
        c || (b.xSetter = function (b, k, a) {
          var t = a.getElementsByTagName("tspan"),
              c = a.getAttribute(k),
              d;

          for (d = 0; d < t.length; d++) {
            var g = t[d];
            g.getAttribute(k) === c && g.setAttribute(k, b);
          }

          a.setAttribute(k, b);
        });
        return b;
      };

      u.prototype.fontMetrics = function (b, k) {
        b = !this.styledMode && /px/.test(b) || !O.getComputedStyle ? b || k && k.style && k.style.fontSize || this.style && this.style.fontSize : k && m.prototype.getStyle.call(k, "font-size");
        b = /px/.test(b) ? d(b) : 12;
        k = 24 > b ? b + 3 : Math.round(1.2 * b);
        return {
          h: k,
          b: Math.round(.8 * k),
          f: b
        };
      };

      u.prototype.rotCorr = function (b, k, a) {
        var t = b;
        k && a && (t = Math.max(t * Math.cos(k * q), 4));
        return {
          x: -b / 3 * Math.sin(k * q),
          y: t
        };
      };

      u.prototype.pathToSegments = function (b) {
        for (var k = [], a = [], c = {
          A: 8,
          C: 7,
          H: 2,
          L: 3,
          M: 3,
          Q: 5,
          S: 5,
          T: 3,
          V: 2
        }, d = 0; d < b.length; d++) l(a[0]) && D(b[d]) && a.length === c[a[0].toUpperCase()] && b.splice(d, 0, a[0].replace("M", "L").replace("m", "l")), "string" === typeof b[d] && (a.length && k.push(a.slice(0)), a.length = 0), a.push(b[d]);

        k.push(a.slice(0));
        return k;
      };

      u.prototype.label = function (b, k, a, c, d, g, p, q, u) {
        return new z(this, b, k, a, c, d, g, p, q, u);
      };

      return u;
    }();

    E.prototype.Element = m;
    E.prototype.SVG_NS = T;
    E.prototype.draw = F;
    E.prototype.escapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };
    E.prototype.symbols = {
      circle: function (a, b, k, t) {
        return this.arc(a + k / 2, b + t / 2, k / 2, t / 2, {
          start: .5 * Math.PI,
          end: 2.5 * Math.PI,
          open: !1
        });
      },
      square: function (a, b, k, t) {
        return [["M", a, b], ["L", a + k, b], ["L", a + k, b + t], ["L", a, b + t], ["Z"]];
      },
      triangle: function (a, b, k, t) {
        return [["M", a + k / 2, b], ["L", a + k, b + t], ["L", a, b + t], ["Z"]];
      },
      "triangle-down": function (a, b, k, t) {
        return [["M", a, b], ["L", a + k, b], ["L", a + k / 2, b + t], ["Z"]];
      },
      diamond: function (a, b, k, t) {
        return [["M", a + k / 2, b], ["L", a + k, b + t / 2], ["L", a + k / 2, b + t], ["L", a, b + t / 2], ["Z"]];
      },
      arc: function (a, b, k, t, c) {
        var d = [];

        if (c) {
          var g = c.start || 0,
              p = c.end || 0,
              q = c.r || k;
          k = c.r || t || k;
          var H = .001 > Math.abs(p - g - 2 * Math.PI);
          p -= .001;
          t = c.innerR;
          H = r(c.open, H);
          var u = Math.cos(g),
              B = Math.sin(g),
              n = Math.cos(p),
              A = Math.sin(p);
          g = r(c.longArc, .001 > p - g - Math.PI ? 0 : 1);
          d.push(["M", a + q * u, b + k * B], ["A", q, k, 0, g, r(c.clockwise, 1), a + q * n, b + k * A]);
          e(t) && d.push(H ? ["M", a + t * n, b + t * A] : ["L", a + t * n, b + t * A], ["A", t, t, 0, g, e(c.clockwise) ? 1 - c.clockwise : 0, a + t * u, b + t * B]);
          H || d.push(["Z"]);
        }

        return d;
      },
      callout: function (a, b, k, t, c) {
        var d = Math.min(c && c.r || 0, k, t),
            g = d + 6,
            p = c && c.anchorX || 0;
        c = c && c.anchorY || 0;
        var q = [["M", a + d, b], ["L", a + k - d, b], ["C", a + k, b, a + k, b, a + k, b + d], ["L", a + k, b + t - d], ["C", a + k, b + t, a + k, b + t, a + k - d, b + t], ["L", a + d, b + t], ["C", a, b + t, a, b + t, a, b + t - d], ["L", a, b + d], ["C", a, b, a, b, a + d, b]];
        p && p > k ? c > b + g && c < b + t - g ? q.splice(3, 1, ["L", a + k, c - 6], ["L", a + k + 6, c], ["L", a + k, c + 6], ["L", a + k, b + t - d]) : q.splice(3, 1, ["L", a + k, t / 2], ["L", p, c], ["L", a + k, t / 2], ["L", a + k, b + t - d]) : p && 0 > p ? c > b + g && c < b + t - g ? q.splice(7, 1, ["L", a, c + 6], ["L", a - 6, c], ["L", a, c - 6], ["L", a, b + d]) : q.splice(7, 1, ["L", a, t / 2], ["L", p, c], ["L", a, t / 2], ["L", a, b + d]) : c && c > t && p > a + g && p < a + k - g ? q.splice(5, 1, ["L", p + 6, b + t], ["L", p, b + t + 6], ["L", p - 6, b + t], ["L", a + d, b + t]) : c && 0 > c && p > a + g && p < a + k - g && q.splice(1, 1, ["L", p - 6, b], ["L", p, b - 6], ["L", p + 6, b], ["L", k - d, b]);
        return q;
      }
    };
    h.SVGRenderer = E;
    h.Renderer = h.SVGRenderer;
    return h.Renderer;
  });
  N(m, "Core/Renderer/HTML/HTMLElement.js", [m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = m.css,
        F = m.defined,
        P = m.extend,
        K = m.pick,
        C = m.pInt,
        y = f.isFirefox;
    P(h.prototype, {
      htmlCss: function (e) {
        var f = "SPAN" === this.element.tagName && e && "width" in e,
            h = K(f && e.width, void 0);

        if (f) {
          delete e.width;
          this.textWidth = h;
          var x = !0;
        }

        e && "ellipsis" === e.textOverflow && (e.whiteSpace = "nowrap", e.overflow = "hidden");
        this.styles = P(this.styles, e);
        z(this.element, e);
        x && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function () {
        var e = this.element;
        return {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: e.offsetWidth,
          height: e.offsetHeight
        };
      },
      htmlUpdateTransform: function () {
        if (this.added) {
          var e = this.renderer,
              f = this.element,
              h = this.translateX || 0,
              x = this.translateY || 0,
              D = this.x || 0,
              n = this.y || 0,
              l = this.textAlign || "left",
              J = {
            left: 0,
            center: .5,
            right: 1
          }[l],
              w = this.styles,
              r = w && w.whiteSpace;
          z(f, {
            marginLeft: h,
            marginTop: x
          });
          !e.styledMode && this.shadows && this.shadows.forEach(function (a) {
            z(a, {
              marginLeft: h + 1,
              marginTop: x + 1
            });
          });
          this.inverted && [].forEach.call(f.childNodes, function (a) {
            e.invertChild(a, f);
          });

          if ("SPAN" === f.tagName) {
            w = this.rotation;
            var d = this.textWidth && C(this.textWidth),
                g = [w, l, f.innerHTML, this.textWidth, this.textAlign].join(),
                c;
            (c = d !== this.oldTextWidth) && !(c = d > this.oldTextWidth) && ((c = this.textPxLength) || (z(f, {
              width: "",
              whiteSpace: r || "nowrap"
            }), c = f.offsetWidth), c = c > d);
            c && (/[ \-]/.test(f.textContent || f.innerText) || "ellipsis" === f.style.textOverflow) ? (z(f, {
              width: d + "px",
              display: "block",
              whiteSpace: r || "normal"
            }), this.oldTextWidth = d, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            g !== this.cTT && (r = e.fontMetrics(f.style.fontSize, f).b, !F(w) || w === (this.oldRotation || 0) && l === this.oldAlign || this.setSpanRotation(w, J, r), this.getSpanCorrection(!F(w) && this.textPxLength || f.offsetWidth, r, J, w, l));
            z(f, {
              left: D + (this.xCorr || 0) + "px",
              top: n + (this.yCorr || 0) + "px"
            });
            this.cTT = g;
            this.oldRotation = w;
            this.oldAlign = l;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function (e, f, h) {
        var v = {},
            D = this.renderer.getTransformKey();
        v[D] = v.transform = "rotate(" + e + "deg)";
        v[D + (y ? "Origin" : "-origin")] = v.transformOrigin = 100 * f + "% " + h + "px";
        z(this.element, v);
      },
      getSpanCorrection: function (e, f, h) {
        this.xCorr = -e * h;
        this.yCorr = -f;
      }
    });
    return h;
  });
  N(m, "Core/Renderer/HTML/HTMLRenderer.js", [m["Core/Globals.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Renderer/SVG/SVGRenderer.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.isFirefox,
        P = f.isMS,
        K = f.isWebKit,
        C = f.win,
        y = z.attr,
        e = z.createElement,
        I = z.extend,
        v = z.pick;
    I(m.prototype, {
      getTransformKey: function () {
        return P && !/Edge/.test(C.navigator.userAgent) ? "-ms-transform" : K ? "-webkit-transform" : F ? "MozTransform" : C.opera ? "-o-transform" : "";
      },
      html: function (f, D, n) {
        var l = this.createElement("span"),
            J = l.element,
            w = l.renderer,
            r = w.isSVG,
            d = function (d, c) {
          ["opacity", "visibility"].forEach(function (a) {
            d[a + "Setter"] = function (g, p, B) {
              var q = d.div ? d.div.style : c;
              h.prototype[a + "Setter"].call(this, g, p, B);
              q && (q[p] = g);
            };
          });
          d.addedSetters = !0;
        };

        l.textSetter = function (d) {
          d !== J.innerHTML && (delete this.bBox, delete this.oldTextWidth);
          this.textStr = d;
          J.innerHTML = v(d, "");
          l.doTransform = !0;
        };

        r && d(l, l.element.style);

        l.xSetter = l.ySetter = l.alignSetter = l.rotationSetter = function (d, c) {
          "align" === c ? l.alignValue = l.textAlign = d : l[c] = d;
          l.doTransform = !0;
        };

        l.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        l.attr({
          text: f,
          x: Math.round(D),
          y: Math.round(n)
        }).css({
          position: "absolute"
        });
        w.styledMode || l.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        J.style.whiteSpace = "nowrap";
        l.css = l.htmlCss;
        r && (l.add = function (g) {
          var c = w.box.parentNode,
              a = [];

          if (this.parentGroup = g) {
            var q = g.div;

            if (!q) {
              for (; g;) a.push(g), g = g.parentGroup;

              a.reverse().forEach(function (g) {
                function p(a, c) {
                  g[c] = a;
                  "translateX" === c ? r.left = a + "px" : r.top = a + "px";
                  g.doTransform = !0;
                }

                var n = y(g.element, "class");
                q = g.div = g.div || e("div", n ? {
                  className: n
                } : void 0, {
                  position: "absolute",
                  left: (g.translateX || 0) + "px",
                  top: (g.translateY || 0) + "px",
                  display: g.display,
                  opacity: g.opacity,
                  pointerEvents: g.styles && g.styles.pointerEvents
                }, q || c);
                var r = q.style;
                I(g, {
                  classSetter: function (a) {
                    return function (c) {
                      this.element.setAttribute("class", c);
                      a.className = c;
                    };
                  }(q),
                  on: function () {
                    a[0].div && l.on.apply({
                      element: a[0].div
                    }, arguments);
                    return g;
                  },
                  translateXSetter: p,
                  translateYSetter: p
                });
                g.addedSetters || d(g);
              });
            }
          } else q = c;

          q.appendChild(J);
          l.added = !0;
          l.alignOnAdd && l.htmlUpdateTransform();
          return l;
        });
        return l;
      }
    });
    return m;
  });
  N(m, "Core/Axis/Tick.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.clamp,
        z = h.correctFloat,
        F = h.defined,
        L = h.destroyObjectProperties,
        K = h.extend,
        C = h.fireEvent,
        y = h.isNumber,
        e = h.merge,
        I = h.objectEach,
        v = h.pick,
        x = f.deg2rad;

    h = function () {
      function f(n, l, e, w, r) {
        this.isNewLabel = this.isNew = !0;
        this.axis = n;
        this.pos = l;
        this.type = e || "";
        this.parameters = r || {};
        this.tickmarkOffset = this.parameters.tickmarkOffset;
        this.options = this.parameters.options;
        C(this, "init");
        e || w || this.addLabel();
      }

      f.prototype.addLabel = function () {
        var n = this,
            l = n.axis,
            e = l.options,
            w = l.chart,
            r = l.categories,
            d = l.logarithmic,
            g = l.names,
            c = n.pos,
            a = v(n.options && n.options.labels, e.labels),
            q = l.tickPositions,
            p = c === q[0],
            B = c === q[q.length - 1];
        g = this.parameters.category || (r ? v(r[c], g[c], c) : c);
        var A = n.label;
        r = (!a.step || 1 === a.step) && 1 === l.tickInterval;
        q = q.info;
        var f, h;

        if (l.dateTime && q) {
          var D = w.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid && q.higherRanks[c] || q.unitName]);
          var x = D.main;
        }

        n.isFirst = p;
        n.isLast = B;
        n.formatCtx = {
          axis: l,
          chart: w,
          isFirst: p,
          isLast: B,
          dateTimeLabelFormat: x,
          tickPositionInfo: q,
          value: d ? z(d.lin2log(g)) : g,
          pos: c
        };
        e = l.labelFormatter.call(n.formatCtx, this.formatCtx);
        if (h = D && D.list) n.shortenLabel = function () {
          for (f = 0; f < h.length; f++) if (A.attr({
            text: l.labelFormatter.call(K(n.formatCtx, {
              dateTimeLabelFormat: h[f]
            }))
          }), A.getBBox().width < l.getSlotWidth(n) - 2 * v(a.padding, 5)) return;

          A.attr({
            text: ""
          });
        };
        r && l._addedPlotLB && n.moveLabel(e, a);
        F(A) || n.movedLabel ? A && A.textStr !== e && !r && (!A.textWidth || a.style && a.style.width || A.styles.width || A.css({
          width: null
        }), A.attr({
          text: e
        }), A.textPxLength = A.getBBox().width) : (n.label = A = n.createLabel({
          x: 0,
          y: 0
        }, e, a), n.rotation = 0);
      };

      f.prototype.createLabel = function (n, l, f) {
        var w = this.axis,
            r = w.chart;
        if (n = F(l) && f.enabled ? r.renderer.text(l, n.x, n.y, f.useHTML).add(w.labelGroup) : null) r.styledMode || n.css(e(f.style)), n.textPxLength = n.getBBox().width;
        return n;
      };

      f.prototype.destroy = function () {
        L(this, this.axis);
      };

      f.prototype.getPosition = function (n, l, e, w) {
        var r = this.axis,
            d = r.chart,
            g = w && d.oldChartHeight || d.chartHeight;
        n = {
          x: n ? z(r.translate(l + e, null, null, w) + r.transB) : r.left + r.offset + (r.opposite ? (w && d.oldChartWidth || d.chartWidth) - r.right - r.left : 0),
          y: n ? g - r.bottom + r.offset - (r.opposite ? r.height : 0) : z(g - r.translate(l + e, null, null, w) - r.transB)
        };
        n.y = m(n.y, -1E5, 1E5);
        C(this, "afterGetPosition", {
          pos: n
        });
        return n;
      };

      f.prototype.getLabelPosition = function (n, l, e, w, r, d, g, c) {
        var a = this.axis,
            q = a.transA,
            p = a.isLinked && a.linkedParent ? a.linkedParent.reversed : a.reversed,
            B = a.staggerLines,
            A = a.tickRotCorr || {
          x: 0,
          y: 0
        },
            f = r.y,
            h = w || a.reserveSpaceDefault ? 0 : -a.labelOffset * ("center" === a.labelAlign ? .5 : 1),
            v = {};
        F(f) || (f = 0 === a.side ? e.rotation ? -8 : -e.getBBox().height : 2 === a.side ? A.y + 8 : Math.cos(e.rotation * x) * (A.y - e.getBBox(!1, 0).height / 2));
        n = n + r.x + h + A.x - (d && w ? d * q * (p ? -1 : 1) : 0);
        l = l + f - (d && !w ? d * q * (p ? 1 : -1) : 0);
        B && (e = g / (c || 1) % B, a.opposite && (e = B - e - 1), l += a.labelOffset / B * e);
        v.x = n;
        v.y = Math.round(l);
        C(this, "afterGetLabelPosition", {
          pos: v,
          tickmarkOffset: d,
          index: g
        });
        return v;
      };

      f.prototype.getLabelSize = function () {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      };

      f.prototype.getMarkPath = function (n, e, f, w, r, d) {
        return d.crispLine([["M", n, e], ["L", n + (r ? 0 : -f), e + (r ? f : 0)]], w);
      };

      f.prototype.handleOverflow = function (n) {
        var e = this.axis,
            f = e.options.labels,
            w = n.x,
            r = e.chart.chartWidth,
            d = e.chart.spacing,
            g = v(e.labelLeft, Math.min(e.pos, d[3]));
        d = v(e.labelRight, Math.max(e.isRadial ? 0 : e.pos + e.len, r - d[1]));
        var c = this.label,
            a = this.rotation,
            q = {
          left: 0,
          center: .5,
          right: 1
        }[e.labelAlign || c.attr("align")],
            p = c.getBBox().width,
            B = e.getSlotWidth(this),
            A = B,
            G = 1,
            h,
            D = {};
        if (a || "justify" !== v(f.overflow, "justify")) 0 > a && w - q * p < g ? h = Math.round(w / Math.cos(a * x) - g) : 0 < a && w + q * p > d && (h = Math.round((r - w) / Math.cos(a * x)));else if (r = w + (1 - q) * p, w - q * p < g ? A = n.x + A * (1 - q) - g : r > d && (A = d - n.x + A * q, G = -1), A = Math.min(B, A), A < B && "center" === e.labelAlign && (n.x += G * (B - A - q * (B - Math.min(p, A)))), p > A || e.autoRotation && (c.styles || {}).width) h = A;
        h && (this.shortenLabel ? this.shortenLabel() : (D.width = Math.floor(h) + "px", (f.style || {}).textOverflow || (D.textOverflow = "ellipsis"), c.css(D)));
      };

      f.prototype.moveLabel = function (n, e) {
        var l = this,
            w = l.label,
            r = !1,
            d = l.axis,
            g = d.reversed;
        w && w.textStr === n ? (l.movedLabel = w, r = !0, delete l.label) : I(d.ticks, function (a) {
          r || a.isNew || a === l || !a.label || a.label.textStr !== n || (l.movedLabel = a.label, r = !0, a.labelPos = l.movedLabel.xy, delete a.label);
        });

        if (!r && (l.labelPos || w)) {
          var c = l.labelPos || w.xy;
          w = d.horiz ? g ? 0 : d.width + d.left : c.x;
          d = d.horiz ? c.y : g ? d.width + d.left : 0;
          l.movedLabel = l.createLabel({
            x: w,
            y: d
          }, n, e);
          l.movedLabel && l.movedLabel.attr({
            opacity: 0
          });
        }
      };

      f.prototype.render = function (e, l, f) {
        var n = this.axis,
            r = n.horiz,
            d = this.pos,
            g = v(this.tickmarkOffset, n.tickmarkOffset);
        d = this.getPosition(r, d, g, l);
        g = d.x;
        var c = d.y;
        n = r && g === n.pos + n.len || !r && c === n.pos ? -1 : 1;
        f = v(f, 1);
        this.isActive = !0;
        this.renderGridLine(l, f, n);
        this.renderMark(d, f, n);
        this.renderLabel(d, l, f, e);
        this.isNew = !1;
        C(this, "afterRender");
      };

      f.prototype.renderGridLine = function (n, e, f) {
        var l = this.axis,
            r = l.options,
            d = this.gridLine,
            g = {},
            c = this.pos,
            a = this.type,
            q = v(this.tickmarkOffset, l.tickmarkOffset),
            p = l.chart.renderer,
            B = a ? a + "Grid" : "grid",
            A = r[B + "LineWidth"],
            G = r[B + "LineColor"];
        r = r[B + "LineDashStyle"];
        d || (l.chart.styledMode || (g.stroke = G, g["stroke-width"] = A, r && (g.dashstyle = r)), a || (g.zIndex = 1), n && (e = 0), this.gridLine = d = p.path().attr(g).addClass("highcharts-" + (a ? a + "-" : "") + "grid-line").add(l.gridGroup));
        if (d && (f = l.getPlotLinePath({
          value: c + q,
          lineWidth: d.strokeWidth() * f,
          force: "pass",
          old: n
        }))) d[n || this.isNew ? "attr" : "animate"]({
          d: f,
          opacity: e
        });
      };

      f.prototype.renderMark = function (n, e, f) {
        var l = this.axis,
            r = l.options,
            d = l.chart.renderer,
            g = this.type,
            c = g ? g + "Tick" : "tick",
            a = l.tickSize(c),
            q = this.mark,
            p = !q,
            B = n.x;
        n = n.y;
        var A = v(r[c + "Width"], !g && l.isXAxis ? 1 : 0);
        r = r[c + "Color"];
        a && (l.opposite && (a[0] = -a[0]), p && (this.mark = q = d.path().addClass("highcharts-" + (g ? g + "-" : "") + "tick").add(l.axisGroup), l.chart.styledMode || q.attr({
          stroke: r,
          "stroke-width": A
        })), q[p ? "attr" : "animate"]({
          d: this.getMarkPath(B, n, a[0], q.strokeWidth() * f, l.horiz, d),
          opacity: e
        }));
      };

      f.prototype.renderLabel = function (e, l, f, w) {
        var n = this.axis,
            d = n.horiz,
            g = n.options,
            c = this.label,
            a = g.labels,
            q = a.step;
        n = v(this.tickmarkOffset, n.tickmarkOffset);
        var p = !0,
            B = e.x;
        e = e.y;
        c && y(B) && (c.xy = e = this.getLabelPosition(B, e, c, d, a, n, w, q), this.isFirst && !this.isLast && !v(g.showFirstLabel, 1) || this.isLast && !this.isFirst && !v(g.showLastLabel, 1) ? p = !1 : !d || a.step || a.rotation || l || 0 === f || this.handleOverflow(e), q && w % q && (p = !1), p && y(e.y) ? (e.opacity = f, c[this.isNewLabel ? "attr" : "animate"](e), this.isNewLabel = !1) : (c.attr("y", -9999), this.isNewLabel = !0));
      };

      f.prototype.replaceMovedLabel = function () {
        var e = this.label,
            l = this.axis,
            f = l.reversed;

        if (e && !this.isNew) {
          var w = l.horiz ? f ? l.left : l.width + l.left : e.xy.x;
          f = l.horiz ? e.xy.y : f ? l.width + l.top : l.top;
          e.animate({
            x: w,
            y: f,
            opacity: 0
          }, void 0, e.destroy);
          delete this.label;
        }

        l.isDirty = !0;
        this.label = this.movedLabel;
        delete this.movedLabel;
      };

      return f;
    }();

    f.Tick = h;
    return f.Tick;
  });
  N(m, "Core/Time.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.defined,
        z = h.error,
        F = h.extend,
        L = h.isObject,
        K = h.merge,
        C = h.objectEach,
        y = h.pad,
        e = h.pick,
        I = h.splat,
        v = h.timeUnits,
        x = f.win;

    h = function () {
      function h(e) {
        this.options = {};
        this.variableTimezone = this.useUTC = !1;
        this.Date = x.Date;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.update(e);
      }

      h.prototype.get = function (e, l) {
        if (this.variableTimezone || this.timezoneOffset) {
          var n = l.getTime(),
              f = n - this.getTimezoneOffset(l);
          l.setTime(f);
          e = l["getUTC" + e]();
          l.setTime(n);
          return e;
        }

        return this.useUTC ? l["getUTC" + e]() : l["get" + e]();
      };

      h.prototype.set = function (e, l, f) {
        if (this.variableTimezone || this.timezoneOffset) {
          if ("Milliseconds" === e || "Seconds" === e || "Minutes" === e) return l["setUTC" + e](f);
          var n = this.getTimezoneOffset(l);
          n = l.getTime() - n;
          l.setTime(n);
          l["setUTC" + e](f);
          e = this.getTimezoneOffset(l);
          n = l.getTime() + e;
          return l.setTime(n);
        }

        return this.useUTC ? l["setUTC" + e](f) : l["set" + e](f);
      };

      h.prototype.update = function (n) {
        var l = e(n && n.useUTC, !0);
        this.options = n = K(!0, this.options || {}, n);
        this.Date = n.Date || x.Date || Date;
        this.timezoneOffset = (this.useUTC = l) && n.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.variableTimezone = !(l && !n.getTimezoneOffset && !n.timezone);
      };

      h.prototype.makeTime = function (n, l, h, w, r, d) {
        if (this.useUTC) {
          var g = this.Date.UTC.apply(0, arguments);
          var c = this.getTimezoneOffset(g);
          g += c;
          var a = this.getTimezoneOffset(g);
          c !== a ? g += a - c : c - 36E5 !== this.getTimezoneOffset(g - 36E5) || f.isSafari || (g -= 36E5);
        } else g = new this.Date(n, l, e(h, 1), e(w, 0), e(r, 0), e(d, 0)).getTime();

        return g;
      };

      h.prototype.timezoneOffsetFunction = function () {
        var e = this,
            l = this.options,
            f = l.moment || x.moment;
        if (!this.useUTC) return function (e) {
          return 6E4 * new Date(e.toString()).getTimezoneOffset();
        };

        if (l.timezone) {
          if (f) return function (e) {
            return 6E4 * -f.tz(e, l.timezone).utcOffset();
          };
          z(25);
        }

        return this.useUTC && l.getTimezoneOffset ? function (e) {
          return 6E4 * l.getTimezoneOffset(e.valueOf());
        } : function () {
          return 6E4 * (e.timezoneOffset || 0);
        };
      };

      h.prototype.dateFormat = function (n, l, h) {
        var w;
        if (!m(l) || isNaN(l)) return (null === (w = f.defaultOptions.lang) || void 0 === w ? void 0 : w.invalidDate) || "";
        n = e(n, "%Y-%m-%d %H:%M:%S");
        var r = this;
        w = new this.Date(l);
        var d = this.get("Hours", w),
            g = this.get("Day", w),
            c = this.get("Date", w),
            a = this.get("Month", w),
            q = this.get("FullYear", w),
            p = f.defaultOptions.lang,
            B = null === p || void 0 === p ? void 0 : p.weekdays,
            A = null === p || void 0 === p ? void 0 : p.shortWeekdays;
        w = F({
          a: A ? A[g] : B[g].substr(0, 3),
          A: B[g],
          d: y(c),
          e: y(c, 2, " "),
          w: g,
          b: p.shortMonths[a],
          B: p.months[a],
          m: y(a + 1),
          o: a + 1,
          y: q.toString().substr(2, 2),
          Y: q,
          H: y(d),
          k: d,
          I: y(d % 12 || 12),
          l: d % 12 || 12,
          M: y(this.get("Minutes", w)),
          p: 12 > d ? "AM" : "PM",
          P: 12 > d ? "am" : "pm",
          S: y(w.getSeconds()),
          L: y(Math.floor(l % 1E3), 3)
        }, f.dateFormats);
        C(w, function (a, c) {
          for (; -1 !== n.indexOf("%" + c);) n = n.replace("%" + c, "function" === typeof a ? a.call(r, l) : a);
        });
        return h ? n.substr(0, 1).toUpperCase() + n.substr(1) : n;
      };

      h.prototype.resolveDTLFormat = function (e) {
        return L(e, !0) ? e : (e = I(e), {
          main: e[0],
          from: e[1],
          to: e[2]
        });
      };

      h.prototype.getTimeTicks = function (n, l, f, h) {
        var r = this,
            d = [],
            g = {};
        var c = new r.Date(l);
        var a = n.unitRange,
            q = n.count || 1,
            p;
        h = e(h, 1);

        if (m(l)) {
          r.set("Milliseconds", c, a >= v.second ? 0 : q * Math.floor(r.get("Milliseconds", c) / q));
          a >= v.second && r.set("Seconds", c, a >= v.minute ? 0 : q * Math.floor(r.get("Seconds", c) / q));
          a >= v.minute && r.set("Minutes", c, a >= v.hour ? 0 : q * Math.floor(r.get("Minutes", c) / q));
          a >= v.hour && r.set("Hours", c, a >= v.day ? 0 : q * Math.floor(r.get("Hours", c) / q));
          a >= v.day && r.set("Date", c, a >= v.month ? 1 : Math.max(1, q * Math.floor(r.get("Date", c) / q)));

          if (a >= v.month) {
            r.set("Month", c, a >= v.year ? 0 : q * Math.floor(r.get("Month", c) / q));
            var B = r.get("FullYear", c);
          }

          a >= v.year && r.set("FullYear", c, B - B % q);
          a === v.week && (B = r.get("Day", c), r.set("Date", c, r.get("Date", c) - B + h + (B < h ? -7 : 0)));
          B = r.get("FullYear", c);
          h = r.get("Month", c);
          var A = r.get("Date", c),
              w = r.get("Hours", c);
          l = c.getTime();
          r.variableTimezone && (p = f - l > 4 * v.month || r.getTimezoneOffset(l) !== r.getTimezoneOffset(f));
          l = c.getTime();

          for (c = 1; l < f;) d.push(l), l = a === v.year ? r.makeTime(B + c * q, 0) : a === v.month ? r.makeTime(B, h + c * q) : !p || a !== v.day && a !== v.week ? p && a === v.hour && 1 < q ? r.makeTime(B, h, A, w + c * q) : l + a * q : r.makeTime(B, h, A + c * q * (a === v.day ? 1 : 7)), c++;

          d.push(l);
          a <= v.hour && 1E4 > d.length && d.forEach(function (a) {
            0 === a % 18E5 && "000000000" === r.dateFormat("%H%M%S%L", a) && (g[a] = "day");
          });
        }

        d.info = F(n, {
          higherRanks: g,
          totalRange: a * q
        });
        return d;
      };

      return h;
    }();

    f.Time = h;
    return f.Time;
  });
  N(m, "Core/Options.js", [m["Core/Globals.js"], m["Core/Color/Color.js"], m["Core/Time.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.isTouchDevice,
        P = f.svg;
    h = h.parse;
    z = z.merge;
    "";
    f.defaultOptions = {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: {
        Date: void 0,
        getTimezoneOffset: void 0,
        timezone: void 0,
        timezoneOffset: 0,
        useUTC: !0
      },
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        width: null,
        height: null,
        borderColor: "#335cad",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: "#333333"
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function () {
          return this.name;
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          activeColor: "#003399",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#cccccc"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: P,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: F ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
        backgroundColor: h("#f7f7f7").setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "12px",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };
    "";
    f.time = new m(z(f.defaultOptions.global, f.defaultOptions.time));

    f.dateFormat = function (h, m, y) {
      return f.time.dateFormat(h, m, y);
    };

    return {
      dateFormat: f.dateFormat,
      defaultOptions: f.defaultOptions,
      time: f.time
    };
  });
  N(m, "Core/Axis/Axis.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Axis/Tick.js"], m["Core/Utilities.js"], m["Core/Options.js"]], function (f, h, m, z, F, L) {
    var K = f.animObject,
        C = F.addEvent,
        y = F.arrayMax,
        e = F.arrayMin,
        I = F.clamp,
        v = F.correctFloat,
        x = F.defined,
        D = F.destroyObjectProperties,
        n = F.error,
        l = F.extend,
        J = F.fireEvent,
        w = F.format,
        r = F.getMagnitude,
        d = F.isArray,
        g = F.isFunction,
        c = F.isNumber,
        a = F.isString,
        q = F.merge,
        p = F.normalizeTickInterval,
        B = F.objectEach,
        A = F.pick,
        G = F.relativeLength,
        M = F.removeEvent,
        T = F.splat,
        Q = F.syncTimeout,
        O = L.defaultOptions,
        E = m.deg2rad;

    f = function () {
      function u(b, k) {
        this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.oldMin = this.oldMax = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
        this.init(b, k);
      }

      u.prototype.init = function (b, k) {
        var a = k.isX,
            c = this;
        c.chart = b;
        c.horiz = b.inverted && !c.isZAxis ? !a : a;
        c.isXAxis = a;
        c.coll = c.coll || (a ? "xAxis" : "yAxis");
        J(this, "init", {
          userOptions: k
        });
        c.opposite = k.opposite;
        c.side = k.side || (c.horiz ? c.opposite ? 0 : 2 : c.opposite ? 1 : 3);
        c.setOptions(k);
        var d = this.options,
            p = d.type;
        c.labelFormatter = d.labels.formatter || c.defaultLabelFormatter;
        c.userOptions = k;
        c.minPixelPadding = 0;
        c.reversed = d.reversed;
        c.visible = !1 !== d.visible;
        c.zoomEnabled = !1 !== d.zoomEnabled;
        c.hasNames = "category" === p || !0 === d.categories;
        c.categories = d.categories || c.hasNames;
        c.names || (c.names = [], c.names.keys = {});
        c.plotLinesAndBandsGroups = {};
        c.positiveValuesOnly = !!c.logarithmic;
        c.isLinked = x(d.linkedTo);
        c.ticks = {};
        c.labelEdge = [];
        c.minorTicks = {};
        c.plotLinesAndBands = [];
        c.alternateBands = {};
        c.len = 0;
        c.minRange = c.userMinRange = d.minRange || d.maxZoom;
        c.range = d.range;
        c.offset = d.offset || 0;
        c.max = null;
        c.min = null;
        c.crosshair = A(d.crosshair, T(b.options.tooltip.crosshairs)[a ? 0 : 1], !1);
        k = c.options.events;
        -1 === b.axes.indexOf(c) && (a ? b.axes.splice(b.xAxis.length, 0, c) : b.axes.push(c), b[c.coll].push(c));
        c.series = c.series || [];
        b.inverted && !c.isZAxis && a && "undefined" === typeof c.reversed && (c.reversed = !0);
        c.labelRotation = c.options.labels.rotation;
        B(k, function (b, k) {
          g(b) && C(c, k, b);
        });
        J(this, "afterInit");
      };

      u.prototype.setOptions = function (b) {
        this.options = q(u.defaultOptions, "yAxis" === this.coll && u.defaultYAxisOptions, [u.defaultTopAxisOptions, u.defaultRightAxisOptions, u.defaultBottomAxisOptions, u.defaultLeftAxisOptions][this.side], q(O[this.coll], b));
        J(this, "afterSetOptions", {
          userOptions: b
        });
      };

      u.prototype.defaultLabelFormatter = function () {
        var b = this.axis,
            k = c(this.value) ? this.value : NaN,
            a = b.chart.time,
            d = b.categories,
            g = this.dateTimeLabelFormat,
            p = O.lang,
            q = p.numericSymbols;
        p = p.numericSymbolMagnitude || 1E3;
        var e = q && q.length,
            u = b.options.labels.format;
        b = b.logarithmic ? Math.abs(k) : b.tickInterval;
        var B = this.chart,
            l = B.numberFormatter;
        if (u) var A = w(u, this, B);else if (d) A = "" + this.value;else if (g) A = a.dateFormat(g, k);else if (e && 1E3 <= b) for (; e-- && "undefined" === typeof A;) a = Math.pow(p, e + 1), b >= a && 0 === 10 * k % a && null !== q[e] && 0 !== k && (A = l(k / a, -1) + q[e]);
        "undefined" === typeof A && (A = 1E4 <= Math.abs(k) ? l(k, -1) : l(k, -1, void 0, ""));
        return A;
      };

      u.prototype.getSeriesExtremes = function () {
        var b = this,
            k = b.chart,
            a;
        J(this, "getSeriesExtremes", null, function () {
          b.hasVisibleSeries = !1;
          b.dataMin = b.dataMax = b.threshold = null;
          b.softThreshold = !b.isXAxis;
          b.stacking && b.stacking.buildStacks();
          b.series.forEach(function (t) {
            if (t.visible || !k.options.chart.ignoreHiddenSeries) {
              var d = t.options,
                  g = d.threshold;
              b.hasVisibleSeries = !0;
              b.positiveValuesOnly && 0 >= g && (g = null);

              if (b.isXAxis) {
                if (d = t.xData, d.length) {
                  d = b.logarithmic ? d.filter(b.validatePositiveValue) : d;
                  a = t.getXExtremes(d);
                  var p = a.min;
                  var q = a.max;
                  c(p) || p instanceof Date || (d = d.filter(c), a = t.getXExtremes(d), p = a.min, q = a.max);
                  d.length && (b.dataMin = Math.min(A(b.dataMin, p), p), b.dataMax = Math.max(A(b.dataMax, q), q));
                }
              } else if (t = t.applyExtremes(), c(t.dataMin) && (p = t.dataMin, b.dataMin = Math.min(A(b.dataMin, p), p)), c(t.dataMax) && (q = t.dataMax, b.dataMax = Math.max(A(b.dataMax, q), q)), x(g) && (b.threshold = g), !d.softThreshold || b.positiveValuesOnly) b.softThreshold = !1;
            }
          });
        });
        J(this, "afterGetSeriesExtremes");
      };

      u.prototype.translate = function (b, a, t, d, g, p) {
        var k = this.linkedParent || this,
            q = 1,
            e = 0,
            H = d ? k.oldTransA : k.transA;
        d = d ? k.oldMin : k.min;
        var u = k.minPixelPadding;
        g = (k.isOrdinal || k.brokenAxis && k.brokenAxis.hasBreaks || k.logarithmic && g) && k.lin2val;
        H || (H = k.transA);
        t && (q *= -1, e = k.len);
        k.reversed && (q *= -1, e -= q * (k.sector || k.len));
        a ? (b = (b * q + e - u) / H + d, g && (b = k.lin2val(b))) : (g && (b = k.val2lin(b)), b = c(d) ? q * (b - d) * H + e + q * u + (c(p) ? H * p : 0) : void 0);
        return b;
      };

      u.prototype.toPixels = function (b, k) {
        return this.translate(b, !1, !this.horiz, null, !0) + (k ? 0 : this.pos);
      };

      u.prototype.toValue = function (b, k) {
        return this.translate(b - (k ? 0 : this.pos), !0, !this.horiz, null, !0);
      };

      u.prototype.getPlotLinePath = function (b) {
        function k(b, a, k) {
          if ("pass" !== l && b < a || b > k) l ? b = I(b, a, k) : E = !0;
          return b;
        }

        var a = this,
            d = a.chart,
            g = a.left,
            p = a.top,
            q = b.old,
            e = b.value,
            u = b.translatedValue,
            B = b.lineWidth,
            l = b.force,
            r,
            n,
            f,
            h,
            w = q && d.oldChartHeight || d.chartHeight,
            G = q && d.oldChartWidth || d.chartWidth,
            E,
            v = a.transB;
        b = {
          value: e,
          lineWidth: B,
          old: q,
          force: l,
          acrossPanes: b.acrossPanes,
          translatedValue: u
        };
        J(this, "getPlotLinePath", b, function (b) {
          u = A(u, a.translate(e, null, null, q));
          u = I(u, -1E5, 1E5);
          r = f = Math.round(u + v);
          n = h = Math.round(w - u - v);
          c(u) ? a.horiz ? (n = p, h = w - a.bottom, r = f = k(r, g, g + a.width)) : (r = g, f = G - a.right, n = h = k(n, p, p + a.height)) : (E = !0, l = !1);
          b.path = E && !l ? null : d.renderer.crispLine([["M", r, n], ["L", f, h]], B || 1);
        });
        return b.path;
      };

      u.prototype.getLinearTickPositions = function (b, a, c) {
        var k = v(Math.floor(a / b) * b);
        c = v(Math.ceil(c / b) * b);
        var t = [],
            d;
        v(k + b) === k && (d = 20);
        if (this.single) return [a];

        for (a = k; a <= c;) {
          t.push(a);
          a = v(a + b, d);
          if (a === g) break;
          var g = a;
        }

        return t;
      };

      u.prototype.getMinorTickInterval = function () {
        var b = this.options;
        return !0 === b.minorTicks ? A(b.minorTickInterval, "auto") : !1 === b.minorTicks ? null : b.minorTickInterval;
      };

      u.prototype.getMinorTickPositions = function () {
        var b = this.options,
            a = this.tickPositions,
            c = this.minorTickInterval,
            d = [],
            g = this.pointRangePadding || 0,
            p = this.min - g;
        g = this.max + g;
        var q = g - p;

        if (q && q / c < this.len / 3) {
          var e = this.logarithmic;
          if (e) this.paddedTicks.forEach(function (b, a, k) {
            a && d.push.apply(d, e.getLogTickPositions(c, k[a - 1], k[a], !0));
          });else if (this.dateTime && "auto" === this.getMinorTickInterval()) d = d.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(c), p, g, b.startOfWeek));else for (b = p + (a[0] - p) % c; b <= g && b !== d[0]; b += c) d.push(b);
        }

        0 !== d.length && this.trimTicks(d);
        return d;
      };

      u.prototype.adjustForMinRange = function () {
        var b = this.options,
            a = this.min,
            c = this.max,
            d = this.logarithmic,
            g,
            p,
            q,
            u,
            B;
        this.isXAxis && "undefined" === typeof this.minRange && !d && (x(b.min) || x(b.max) ? this.minRange = null : (this.series.forEach(function (b) {
          u = b.xData;

          for (p = B = b.xIncrement ? 1 : u.length - 1; 0 < p; p--) if (q = u[p] - u[p - 1], "undefined" === typeof g || q < g) g = q;
        }), this.minRange = Math.min(5 * g, this.dataMax - this.dataMin)));

        if (c - a < this.minRange) {
          var l = this.dataMax - this.dataMin >= this.minRange;
          var r = this.minRange;
          var n = (r - c + a) / 2;
          n = [a - n, A(b.min, a - n)];
          l && (n[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
          a = y(n);
          c = [a + r, A(b.max, a + r)];
          l && (c[2] = d ? d.log2lin(this.dataMax) : this.dataMax);
          c = e(c);
          c - a < r && (n[0] = c - r, n[1] = A(b.min, c - r), a = y(n));
        }

        this.min = a;
        this.max = c;
      };

      u.prototype.getClosest = function () {
        var b;
        this.categories ? b = 1 : this.series.forEach(function (a) {
          var k = a.closestPointRange,
              c = a.visible || !a.chart.options.chart.ignoreHiddenSeries;
          !a.noSharedTooltip && x(k) && c && (b = x(b) ? Math.min(b, k) : k);
        });
        return b;
      };

      u.prototype.nameToX = function (b) {
        var a = d(this.categories),
            c = a ? this.categories : this.names,
            g = b.options.x;
        b.series.requireSorting = !1;
        x(g) || (g = !1 === this.options.uniqueNames ? b.series.autoIncrement() : a ? c.indexOf(b.name) : A(c.keys[b.name], -1));

        if (-1 === g) {
          if (!a) var p = c.length;
        } else p = g;

        "undefined" !== typeof p && (this.names[p] = b.name, this.names.keys[b.name] = p);
        return p;
      };

      u.prototype.updateNames = function () {
        var b = this,
            a = this.names;
        0 < a.length && (Object.keys(a.keys).forEach(function (b) {
          delete a.keys[b];
        }), a.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (a) {
          a.xIncrement = null;
          if (!a.points || a.isDirtyData) b.max = Math.max(b.max, a.xData.length - 1), a.processData(), a.generatePoints();
          a.data.forEach(function (k, c) {
            if (k && k.options && "undefined" !== typeof k.name) {
              var d = b.nameToX(k);
              "undefined" !== typeof d && d !== k.x && (k.x = d, a.xData[c] = d);
            }
          });
        }));
      };

      u.prototype.setAxisTranslation = function (b) {
        var k = this,
            c = k.max - k.min,
            d = k.axisPointRange || 0,
            g = 0,
            p = 0,
            q = k.linkedParent,
            e = !!k.categories,
            u = k.transA,
            B = k.isXAxis;

        if (B || e || d) {
          var l = k.getClosest();
          q ? (g = q.minPointOffset, p = q.pointRangePadding) : k.series.forEach(function (b) {
            var c = e ? 1 : B ? A(b.options.pointRange, l, 0) : k.axisPointRange || 0,
                t = b.options.pointPlacement;
            d = Math.max(d, c);
            if (!k.single || e) b = b.is("xrange") ? !B : B, g = Math.max(g, b && a(t) ? 0 : c / 2), p = Math.max(p, b && "on" === t ? 0 : c);
          });
          q = k.ordinal && k.ordinal.slope && l ? k.ordinal.slope / l : 1;
          k.minPointOffset = g *= q;
          k.pointRangePadding = p *= q;
          k.pointRange = Math.min(d, k.single && e ? 1 : c);
          B && (k.closestPointRange = l);
        }

        b && (k.oldTransA = u);
        k.translationSlope = k.transA = u = k.staticScale || k.len / (c + p || 1);
        k.transB = k.horiz ? k.left : k.bottom;
        k.minPixelPadding = u * g;
        J(this, "afterSetAxisTranslation");
      };

      u.prototype.minFromRange = function () {
        return this.max - this.range;
      };

      u.prototype.setTickInterval = function (b) {
        var a = this,
            d = a.chart,
            g = a.logarithmic,
            q = a.options,
            e = a.isXAxis,
            u = a.isLinked,
            B = q.maxPadding,
            l = q.minPadding,
            f = q.tickInterval,
            h = q.tickPixelInterval,
            w = a.categories,
            G = c(a.threshold) ? a.threshold : null,
            E = a.softThreshold;
        a.dateTime || w || u || this.getTickAmount();
        var O = A(a.userMin, q.min);
        var D = A(a.userMax, q.max);

        if (u) {
          a.linkedParent = d[a.coll][q.linkedTo];
          var M = a.linkedParent.getExtremes();
          a.min = A(M.min, M.dataMin);
          a.max = A(M.max, M.dataMax);
          q.type !== a.linkedParent.options.type && n(11, 1, d);
        } else {
          if (E && x(G)) if (a.dataMin >= G) M = G, l = 0;else if (a.dataMax <= G) {
            var m = G;
            B = 0;
          }
          a.min = A(O, M, a.dataMin);
          a.max = A(D, m, a.dataMax);
        }

        g && (a.positiveValuesOnly && !b && 0 >= Math.min(a.min, A(a.dataMin, a.min)) && n(10, 1, d), a.min = v(g.log2lin(a.min), 16), a.max = v(g.log2lin(a.max), 16));
        a.range && x(a.max) && (a.userMin = a.min = O = Math.max(a.dataMin, a.minFromRange()), a.userMax = D = a.max, a.range = null);
        J(a, "foundExtremes");
        a.beforePadding && a.beforePadding();
        a.adjustForMinRange();
        !(w || a.axisPointRange || a.stacking && a.stacking.usePercentage || u) && x(a.min) && x(a.max) && (d = a.max - a.min) && (!x(O) && l && (a.min -= d * l), !x(D) && B && (a.max += d * B));
        c(a.userMin) || (c(q.softMin) && q.softMin < a.min && (a.min = O = q.softMin), c(q.floor) && (a.min = Math.max(a.min, q.floor)));
        c(a.userMax) || (c(q.softMax) && q.softMax > a.max && (a.max = D = q.softMax), c(q.ceiling) && (a.max = Math.min(a.max, q.ceiling)));
        E && x(a.dataMin) && (G = G || 0, !x(O) && a.min < G && a.dataMin >= G ? a.min = a.options.minRange ? Math.min(G, a.max - a.minRange) : G : !x(D) && a.max > G && a.dataMax <= G && (a.max = a.options.minRange ? Math.max(G, a.min + a.minRange) : G));
        a.tickInterval = a.min === a.max || "undefined" === typeof a.min || "undefined" === typeof a.max ? 1 : u && !f && h === a.linkedParent.options.tickPixelInterval ? f = a.linkedParent.tickInterval : A(f, this.tickAmount ? (a.max - a.min) / Math.max(this.tickAmount - 1, 1) : void 0, w ? 1 : (a.max - a.min) * h / Math.max(a.len, h));
        e && !b && a.series.forEach(function (b) {
          b.processData(a.min !== a.oldMin || a.max !== a.oldMax);
        });
        a.setAxisTranslation(!0);
        J(this, "initialAxisTranslation");
        a.pointRange && !f && (a.tickInterval = Math.max(a.pointRange, a.tickInterval));
        b = A(q.minTickInterval, a.dateTime && !a.series.some(function (b) {
          return b.noSharedTooltip;
        }) ? a.closestPointRange : 0);
        !f && a.tickInterval < b && (a.tickInterval = b);
        a.dateTime || a.logarithmic || f || (a.tickInterval = p(a.tickInterval, void 0, r(a.tickInterval), A(q.allowDecimals, .5 > a.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
        this.tickAmount || (a.tickInterval = a.unsquish());
        this.setTickPositions();
      };

      u.prototype.setTickPositions = function () {
        var b = this.options,
            a = b.tickPositions;
        var c = this.getMinorTickInterval();
        var d = b.tickPositioner,
            g = this.hasVerticalPanning(),
            p = "colorAxis" === this.coll,
            q = (p || !g) && b.startOnTick;
        g = (p || !g) && b.endOnTick;
        this.tickmarkOffset = this.categories && "between" === b.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === c && this.tickInterval ? this.tickInterval / 5 : c;
        this.single = this.min === this.max && x(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== b.allowDecimals);
        this.tickPositions = c = a && a.slice();
        !c && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? c = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b.units), this.min, this.max, b.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (c = [this.min, this.max], n(19, !1, this.chart)), c.length > this.len && (c = [c[0], c.pop()], c[0] === c[1] && (c.length = 1)), this.tickPositions = c, d && (d = d.apply(this, [this.min, this.max]))) && (this.tickPositions = c = d);
        this.paddedTicks = c.slice(0);
        this.trimTicks(c, q, g);
        this.isLinked || (this.single && 2 > c.length && !this.categories && !this.series.some(function (b) {
          return b.is("heatmap") && "between" === b.options.pointPlacement;
        }) && (this.min -= .5, this.max += .5), a || d || this.adjustTickAmount());
        J(this, "afterSetTickPositions");
      };

      u.prototype.trimTicks = function (b, a, c) {
        var k = b[0],
            d = b[b.length - 1],
            t = !this.isOrdinal && this.minPointOffset || 0;
        J(this, "trimTicks");

        if (!this.isLinked) {
          if (a && -Infinity !== k) this.min = k;else for (; this.min - t > b[0];) b.shift();
          if (c) this.max = d;else for (; this.max + t < b[b.length - 1];) b.pop();
          0 === b.length && x(k) && !this.options.tickPositions && b.push((d + k) / 2);
        }
      };

      u.prototype.alignToOthers = function () {
        var b = {},
            a,
            c = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === c.alignTicks || !1 === c.startOnTick || !1 === c.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function (k) {
          var c = k.options;
          c = [k.horiz ? c.left : c.top, c.width, c.height, c.pane].join();
          k.series.length && (b[c] ? a = !0 : b[c] = 1);
        });
        return a;
      };

      u.prototype.getTickAmount = function () {
        var b = this.options,
            a = b.tickAmount,
            c = b.tickPixelInterval;
        !x(b.tickInterval) && !a && this.len < c && !this.isRadial && !this.logarithmic && b.startOnTick && b.endOnTick && (a = 2);
        !a && this.alignToOthers() && (a = Math.ceil(this.len / c) + 1);
        4 > a && (this.finalTickAmt = a, a = 5);
        this.tickAmount = a;
      };

      u.prototype.adjustTickAmount = function () {
        var b = this.options,
            a = this.tickInterval,
            c = this.tickPositions,
            d = this.tickAmount,
            g = this.finalTickAmt,
            p = c && c.length,
            q = A(this.threshold, this.softThreshold ? 0 : null),
            e;

        if (this.hasData()) {
          if (p < d) {
            for (e = this.min; c.length < d;) c.length % 2 || e === q ? c.push(v(c[c.length - 1] + a)) : c.unshift(v(c[0] - a));

            this.transA *= (p - 1) / (d - 1);
            this.min = b.startOnTick ? c[0] : Math.min(this.min, c[0]);
            this.max = b.endOnTick ? c[c.length - 1] : Math.max(this.max, c[c.length - 1]);
          } else p > d && (this.tickInterval *= 2, this.setTickPositions());

          if (x(g)) {
            for (a = b = c.length; a--;) (3 === g && 1 === a % 2 || 2 >= g && 0 < a && a < b - 1) && c.splice(a, 1);

            this.finalTickAmt = void 0;
          }
        }
      };

      u.prototype.setScale = function () {
        var b,
            a = !1,
            c = !1;
        this.series.forEach(function (b) {
          var k;
          a = a || b.isDirtyData || b.isDirty;
          c = c || (null === (k = b.xAxis) || void 0 === k ? void 0 : k.isDirty) || !1;
        });
        this.oldMin = this.min;
        this.oldMax = this.max;
        this.oldAxisLength = this.len;
        this.setAxisSize();
        (b = this.len !== this.oldAxisLength) || a || c || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.stacking && this.stacking.cleanStacks();
        a && this.panningState && (this.panningState.isDirty = !0);
        J(this, "afterSetScale");
      };

      u.prototype.setExtremes = function (b, a, c, d, g) {
        var k = this,
            t = k.chart;
        c = A(c, !0);
        k.series.forEach(function (b) {
          delete b.kdTree;
        });
        g = l(g, {
          min: b,
          max: a
        });
        J(k, "setExtremes", g, function () {
          k.userMin = b;
          k.userMax = a;
          k.eventArgs = g;
          c && t.redraw(d);
        });
      };

      u.prototype.zoom = function (b, a) {
        var k = this,
            c = this.dataMin,
            d = this.dataMax,
            g = this.options,
            p = Math.min(c, A(g.min, c)),
            q = Math.max(d, A(g.max, d));
        b = {
          newMin: b,
          newMax: a
        };
        J(this, "zoom", b, function (b) {
          var a = b.newMin,
              g = b.newMax;
          if (a !== k.min || g !== k.max) k.allowZoomOutside || (x(c) && (a < p && (a = p), a > q && (a = q)), x(d) && (g < p && (g = p), g > q && (g = q))), k.displayBtn = "undefined" !== typeof a || "undefined" !== typeof g, k.setExtremes(a, g, !1, void 0, {
            trigger: "zoom"
          });
          b.zoomed = !0;
        });
        return b.zoomed;
      };

      u.prototype.setAxisSize = function () {
        var b = this.chart,
            a = this.options,
            c = a.offsets || [0, 0, 0, 0],
            d = this.horiz,
            g = this.width = Math.round(G(A(a.width, b.plotWidth - c[3] + c[1]), b.plotWidth)),
            p = this.height = Math.round(G(A(a.height, b.plotHeight - c[0] + c[2]), b.plotHeight)),
            q = this.top = Math.round(G(A(a.top, b.plotTop + c[0]), b.plotHeight, b.plotTop));
        a = this.left = Math.round(G(A(a.left, b.plotLeft + c[3]), b.plotWidth, b.plotLeft));
        this.bottom = b.chartHeight - p - q;
        this.right = b.chartWidth - g - a;
        this.len = Math.max(d ? g : p, 0);
        this.pos = d ? a : q;
      };

      u.prototype.getExtremes = function () {
        var b = this.logarithmic;
        return {
          min: b ? v(b.lin2log(this.min)) : this.min,
          max: b ? v(b.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      };

      u.prototype.getThreshold = function (b) {
        var a = this.logarithmic,
            c = a ? a.lin2log(this.min) : this.min;
        a = a ? a.lin2log(this.max) : this.max;
        null === b || -Infinity === b ? b = c : Infinity === b ? b = a : c > b ? b = c : a < b && (b = a);
        return this.translate(b, 0, 1, 0, 1);
      };

      u.prototype.autoLabelAlign = function (b) {
        var a = (A(b, 0) - 90 * this.side + 720) % 360;
        b = {
          align: "center"
        };
        J(this, "autoLabelAlign", b, function (b) {
          15 < a && 165 > a ? b.align = "right" : 195 < a && 345 > a && (b.align = "left");
        });
        return b.align;
      };

      u.prototype.tickSize = function (b) {
        var a = this.options,
            c = a["tick" === b ? "tickLength" : "minorTickLength"],
            d = A(a["tick" === b ? "tickWidth" : "minorTickWidth"], "tick" === b && this.isXAxis && !this.categories ? 1 : 0);

        if (d && c) {
          "inside" === a[b + "Position"] && (c = -c);
          var g = [c, d];
        }

        b = {
          tickSize: g
        };
        J(this, "afterTickSize", b);
        return b.tickSize;
      };

      u.prototype.labelMetrics = function () {
        var b = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[b] && this.ticks[b].label);
      };

      u.prototype.unsquish = function () {
        var b = this.options.labels,
            a = this.horiz,
            c = this.tickInterval,
            d = c,
            g = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c),
            p,
            q = b.rotation,
            e = this.labelMetrics(),
            u,
            B = Number.MAX_VALUE,
            l,
            r = this.max - this.min,
            n = function (b) {
          var a = b / (g || 1);
          a = 1 < a ? Math.ceil(a) : 1;
          a * c > r && Infinity !== b && Infinity !== g && r && (a = Math.ceil(r / c));
          return v(a * c);
        };

        a ? (l = !b.staggerLines && !b.step && (x(q) ? [q] : g < A(b.autoRotationLimit, 80) && b.autoRotation)) && l.forEach(function (b) {
          if (b === q || b && -90 <= b && 90 >= b) {
            u = n(Math.abs(e.h / Math.sin(E * b)));
            var a = u + Math.abs(b / 360);
            a < B && (B = a, p = b, d = u);
          }
        }) : b.step || (d = n(e.h));
        this.autoRotation = l;
        this.labelRotation = A(p, q);
        return d;
      };

      u.prototype.getSlotWidth = function (b) {
        var a,
            d = this.chart,
            g = this.horiz,
            p = this.options.labels,
            q = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            e = d.margin[3];
        if (b && c(b.slotWidth)) return b.slotWidth;
        if (g && p && 2 > (p.step || 0)) return p.rotation ? 0 : (this.staggerLines || 1) * this.len / q;

        if (!g) {
          b = null === (a = null === p || void 0 === p ? void 0 : p.style) || void 0 === a ? void 0 : a.width;
          if (void 0 !== b) return parseInt(b, 10);
          if (e) return e - d.spacing[3];
        }

        return .33 * d.chartWidth;
      };

      u.prototype.renderUnsquish = function () {
        var b = this.chart,
            k = b.renderer,
            c = this.tickPositions,
            d = this.ticks,
            g = this.options.labels,
            p = g && g.style || {},
            q = this.horiz,
            e = this.getSlotWidth(),
            u = Math.max(1, Math.round(e - 2 * (g.padding || 5))),
            B = {},
            l = this.labelMetrics(),
            r = g.style && g.style.textOverflow,
            n = 0;
        a(g.rotation) || (B.rotation = g.rotation || 0);
        c.forEach(function (b) {
          b = d[b];
          b.movedLabel && b.replaceMovedLabel();
          b && b.label && b.label.textPxLength > n && (n = b.label.textPxLength);
        });
        this.maxLabelLength = n;
        if (this.autoRotation) n > u && n > l.h ? B.rotation = this.labelRotation : this.labelRotation = 0;else if (e) {
          var A = u;

          if (!r) {
            var f = "clip";

            for (u = c.length; !q && u--;) {
              var h = c[u];
              if (h = d[h].label) h.styles && "ellipsis" === h.styles.textOverflow ? h.css({
                textOverflow: "clip"
              }) : h.textPxLength > e && h.css({
                width: e + "px"
              }), h.getBBox().height > this.len / c.length - (l.h - l.f) && (h.specificTextOverflow = "ellipsis");
            }
          }
        }
        B.rotation && (A = n > .5 * b.chartHeight ? .33 * b.chartHeight : n, r || (f = "ellipsis"));
        if (this.labelAlign = g.align || this.autoLabelAlign(this.labelRotation)) B.align = this.labelAlign;
        c.forEach(function (b) {
          var a = (b = d[b]) && b.label,
              k = p.width,
              c = {};
          a && (a.attr(B), b.shortenLabel ? b.shortenLabel() : A && !k && "nowrap" !== p.whiteSpace && (A < a.textPxLength || "SPAN" === a.element.tagName) ? (c.width = A + "px", r || (c.textOverflow = a.specificTextOverflow || f), a.css(c)) : a.styles && a.styles.width && !c.width && !k && a.css({
            width: null
          }), delete a.specificTextOverflow, b.rotation = B.rotation);
        }, this);
        this.tickRotCorr = k.rotCorr(l.b, this.labelRotation || 0, 0 !== this.side);
      };

      u.prototype.hasData = function () {
        return this.series.some(function (b) {
          return b.hasData();
        }) || this.options.showEmpty && x(this.min) && x(this.max);
      };

      u.prototype.addTitle = function (b) {
        var a = this.chart.renderer,
            c = this.horiz,
            d = this.opposite,
            g = this.options.title,
            p,
            e = this.chart.styledMode;
        this.axisTitle || ((p = g.textAlign) || (p = (c ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: d ? "right" : "left",
          middle: "center",
          high: d ? "left" : "right"
        })[g.align]), this.axisTitle = a.text(g.text, 0, 0, g.useHTML).attr({
          zIndex: 7,
          rotation: g.rotation || 0,
          align: p
        }).addClass("highcharts-axis-title"), e || this.axisTitle.css(q(g.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        e || g.style.width || this.isRadial || this.axisTitle.css({
          width: this.len + "px"
        });
        this.axisTitle[b ? "show" : "hide"](b);
      };

      u.prototype.generateTick = function (b) {
        var a = this.ticks;
        a[b] ? a[b].addLabel() : a[b] = new z(this, b);
      };

      u.prototype.getOffset = function () {
        var b = this,
            a = b.chart,
            c = a.renderer,
            d = b.options,
            g = b.tickPositions,
            p = b.ticks,
            q = b.horiz,
            e = b.side,
            u = a.inverted && !b.isZAxis ? [1, 0, 3, 2][e] : e,
            l,
            n = 0,
            r = 0,
            f = d.title,
            h = d.labels,
            G = 0,
            w = a.axisOffset;
        a = a.clipOffset;
        var E = [-1, 1, 1, -1][e],
            v = d.className,
            O = b.axisParent;
        var D = b.hasData();
        b.showAxis = l = D || A(d.showEmpty, !0);
        b.staggerLines = b.horiz && h.staggerLines;
        b.axisGroup || (b.gridGroup = c.g("grid").attr({
          zIndex: d.gridZIndex || 1
        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (v || "")).add(O), b.axisGroup = c.g("axis").attr({
          zIndex: d.zIndex || 2
        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (v || "")).add(O), b.labelGroup = c.g("axis-labels").attr({
          zIndex: h.zIndex || 7
        }).addClass("highcharts-" + b.coll.toLowerCase() + "-labels " + (v || "")).add(O));
        D || b.isLinked ? (g.forEach(function (a, c) {
          b.generateTick(a, c);
        }), b.renderUnsquish(), b.reserveSpaceDefault = 0 === e || 2 === e || {
          1: "left",
          3: "right"
        }[e] === b.labelAlign, A(h.reserveSpace, "center" === b.labelAlign ? !0 : null, b.reserveSpaceDefault) && g.forEach(function (b) {
          G = Math.max(p[b].getLabelSize(), G);
        }), b.staggerLines && (G *= b.staggerLines), b.labelOffset = G * (b.opposite ? -1 : 1)) : B(p, function (b, a) {
          b.destroy();
          delete p[a];
        });

        if (f && f.text && !1 !== f.enabled && (b.addTitle(l), l && !1 !== f.reserveSpace)) {
          b.titleOffset = n = b.axisTitle.getBBox()[q ? "height" : "width"];
          var M = f.offset;
          r = x(M) ? 0 : A(f.margin, q ? 5 : 10);
        }

        b.renderLine();
        b.offset = E * A(d.offset, w[e] ? w[e] + (d.margin || 0) : 0);
        b.tickRotCorr = b.tickRotCorr || {
          x: 0,
          y: 0
        };
        c = 0 === e ? -b.labelMetrics().h : 2 === e ? b.tickRotCorr.y : 0;
        r = Math.abs(G) + r;
        G && (r = r - c + E * (q ? A(h.y, b.tickRotCorr.y + 8 * E) : h.x));
        b.axisTitleMargin = A(M, r);
        b.getMaxLabelDimensions && (b.maxLabelDimensions = b.getMaxLabelDimensions(p, g));
        q = this.tickSize("tick");
        w[e] = Math.max(w[e], b.axisTitleMargin + n + E * b.offset, r, g && g.length && q ? q[0] + E * b.offset : 0);
        d = d.offset ? 0 : 2 * Math.floor(b.axisLine.strokeWidth() / 2);
        a[u] = Math.max(a[u], d);
        J(this, "afterGetOffset");
      };

      u.prototype.getLinePath = function (b) {
        var a = this.chart,
            c = this.opposite,
            d = this.offset,
            g = this.horiz,
            p = this.left + (c ? this.width : 0) + d;
        d = a.chartHeight - this.bottom - (c ? this.height : 0) + d;
        c && (b *= -1);
        return a.renderer.crispLine([["M", g ? this.left : p, g ? d : this.top], ["L", g ? a.chartWidth - this.right : p, g ? d : a.chartHeight - this.bottom]], b);
      };

      u.prototype.renderLine = function () {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      };

      u.prototype.getTitlePosition = function () {
        var b = this.horiz,
            a = this.left,
            c = this.top,
            d = this.len,
            g = this.options.title,
            p = b ? a : c,
            q = this.opposite,
            e = this.offset,
            u = g.x || 0,
            B = g.y || 0,
            l = this.axisTitle,
            r = this.chart.renderer.fontMetrics(g.style && g.style.fontSize, l);
        l = Math.max(l.getBBox(null, 0).height - r.h - 1, 0);
        d = {
          low: p + (b ? 0 : d),
          middle: p + d / 2,
          high: p + (b ? d : 0)
        }[g.align];
        a = (b ? c + this.height : a) + (b ? 1 : -1) * (q ? -1 : 1) * this.axisTitleMargin + [-l, l, r.f, -l][this.side];
        b = {
          x: b ? d + u : a + (q ? this.width : 0) + e + u,
          y: b ? a + B - (q ? this.height : 0) + e : d + B
        };
        J(this, "afterGetTitlePosition", {
          titlePosition: b
        });
        return b;
      };

      u.prototype.renderMinorTick = function (b) {
        var a = this.chart.hasRendered && c(this.oldMin),
            d = this.minorTicks;
        d[b] || (d[b] = new z(this, b, "minor"));
        a && d[b].isNew && d[b].render(null, !0);
        d[b].render(null, !1, 1);
      };

      u.prototype.renderTick = function (b, a) {
        var k,
            d = this.isLinked,
            g = this.ticks,
            p = this.chart.hasRendered && c(this.oldMin);
        if (!d || b >= this.min && b <= this.max || (null === (k = this.grid) || void 0 === k ? 0 : k.isColumn)) g[b] || (g[b] = new z(this, b)), p && g[b].isNew && g[b].render(a, !0, -1), g[b].render(a);
      };

      u.prototype.render = function () {
        var b = this,
            a = b.chart,
            d = b.logarithmic,
            g = b.options,
            p = b.isLinked,
            q = b.tickPositions,
            e = b.axisTitle,
            u = b.ticks,
            l = b.minorTicks,
            r = b.alternateBands,
            n = g.stackLabels,
            f = g.alternateGridColor,
            A = b.tickmarkOffset,
            h = b.axisLine,
            G = b.showAxis,
            w = K(a.renderer.globalAnimation),
            E,
            v;
        b.labelEdge.length = 0;
        b.overlap = !1;
        [u, l, r].forEach(function (b) {
          B(b, function (b) {
            b.isActive = !1;
          });
        });
        if (b.hasData() || p) b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function (a) {
          b.renderMinorTick(a);
        }), q.length && (q.forEach(function (a, c) {
          b.renderTick(a, c);
        }), A && (0 === b.min || b.single) && (u[-1] || (u[-1] = new z(b, -1, null, !0)), u[-1].render(-1))), f && q.forEach(function (c, k) {
          v = "undefined" !== typeof q[k + 1] ? q[k + 1] + A : b.max - A;
          0 === k % 2 && c < b.max && v <= b.max + (a.polar ? -A : A) && (r[c] || (r[c] = new m.PlotLineOrBand(b)), E = c + A, r[c].options = {
            from: d ? d.lin2log(E) : E,
            to: d ? d.lin2log(v) : v,
            color: f,
            className: "highcharts-alternate-grid"
          }, r[c].render(), r[c].isActive = !0);
        }), b._addedPlotLB || ((g.plotLines || []).concat(g.plotBands || []).forEach(function (a) {
          b.addPlotBandOrLine(a);
        }), b._addedPlotLB = !0);
        [u, l, r].forEach(function (b) {
          var c,
              k = [],
              d = w.duration;
          B(b, function (b, a) {
            b.isActive || (b.render(a, !1, 0), b.isActive = !1, k.push(a));
          });
          Q(function () {
            for (c = k.length; c--;) b[k[c]] && !b[k[c]].isActive && (b[k[c]].destroy(), delete b[k[c]]);
          }, b !== r && a.hasRendered && d ? d : 0);
        });
        h && (h[h.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(h.strokeWidth())
        }), h.isPlaced = !0, h[G ? "show" : "hide"](G));
        e && G && (g = b.getTitlePosition(), c(g.y) ? (e[e.isNew ? "attr" : "animate"](g), e.isNew = !1) : (e.attr("y", -9999), e.isNew = !0));
        n && n.enabled && b.stacking && b.stacking.renderStackTotals();
        b.isDirty = !1;
        J(this, "afterRender");
      };

      u.prototype.redraw = function () {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (b) {
          b.render();
        }));
        this.series.forEach(function (b) {
          b.isDirty = !0;
        });
      };

      u.prototype.getKeepProps = function () {
        return this.keepProps || u.keepProps;
      };

      u.prototype.destroy = function (b) {
        var a = this,
            c = a.plotLinesAndBands,
            d;
        J(this, "destroy", {
          keepEvents: b
        });
        b || M(a);
        [a.ticks, a.minorTicks, a.alternateBands].forEach(function (b) {
          D(b);
        });
        if (c) for (b = c.length; b--;) c[b].destroy();
        "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });

        for (d in a.plotLinesAndBandsGroups) a.plotLinesAndBandsGroups[d] = a.plotLinesAndBandsGroups[d].destroy();

        B(a, function (b, c) {
          -1 === a.getKeepProps().indexOf(c) && delete a[c];
        });
      };

      u.prototype.drawCrosshair = function (b, a) {
        var c = this.crosshair,
            k = A(c.snap, !0),
            d,
            g = this.cross,
            p = this.chart;
        J(this, "drawCrosshair", {
          e: b,
          point: a
        });
        b || (b = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (x(a) || !k)) {
          k ? x(a) && (d = A("colorAxis" !== this.coll ? a.crosshairPos : null, this.isXAxis ? a.plotX : this.len - a.plotY)) : d = b && (this.horiz ? b.chartX - this.pos : this.len - b.chartY + this.pos);

          if (x(d)) {
            var q = {
              value: a && (this.isXAxis ? a.x : A(a.stackY, a.y)),
              translatedValue: d
            };
            p.polar && l(q, {
              isCrosshair: !0,
              chartX: b && b.chartX,
              chartY: b && b.chartY,
              point: a
            });
            q = this.getPlotLinePath(q) || null;
          }

          if (!x(q)) {
            this.hideCrosshair();
            return;
          }

          k = this.categories && !this.isRadial;
          g || (this.cross = g = p.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (k ? "category " : "thin ") + c.className).attr({
            zIndex: A(c.zIndex, 2)
          }).add(), p.styledMode || (g.attr({
            stroke: c.color || (k ? h.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
            "stroke-width": A(c.width, 1)
          }).css({
            "pointer-events": "none"
          }), c.dashStyle && g.attr({
            dashstyle: c.dashStyle
          })));
          g.show().attr({
            d: q
          });
          k && !c.width && g.attr({
            "stroke-width": this.transA
          });
          this.cross.e = b;
        } else this.hideCrosshair();

        J(this, "afterDrawCrosshair", {
          e: b,
          point: a
        });
      };

      u.prototype.hideCrosshair = function () {
        this.cross && this.cross.hide();
        J(this, "afterHideCrosshair");
      };

      u.prototype.hasVerticalPanning = function () {
        var b, a;
        return /y/.test((null === (a = null === (b = this.chart.options.chart) || void 0 === b ? void 0 : b.panning) || void 0 === a ? void 0 : a.type) || "");
      };

      u.prototype.validatePositiveValue = function (b) {
        return c(b) && 0 < b;
      };

      u.defaultOptions = {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: "#666666",
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        showEmpty: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: "#666666"
          }
        },
        type: "linear",
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        tickColor: "#ccd6eb"
      };
      u.defaultYAxisOptions = {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function () {
            var b = this.axis.chart.numberFormatter;
            return b(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      };
      u.defaultLeftAxisOptions = {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      };
      u.defaultRightAxisOptions = {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      };
      u.defaultBottomAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      u.defaultTopAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      u.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
      return u;
    }();

    m.Axis = f;
    return m.Axis;
  });
  N(m, "Core/Axis/DateTimeAxis.js", [m["Core/Axis/Axis.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.addEvent,
        z = h.getMagnitude,
        F = h.normalizeTickInterval,
        L = h.timeUnits,
        K = function () {
      function f(f) {
        this.axis = f;
      }

      f.prototype.normalizeTimeTickInterval = function (f, e) {
        var h = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
        e = h[h.length - 1];
        var v = L[e[0]],
            x = e[1],
            D;

        for (D = 0; D < h.length && !(e = h[D], v = L[e[0]], x = e[1], h[D + 1] && f <= (v * x[x.length - 1] + L[h[D + 1][0]]) / 2); D++);

        v === L.year && f < 5 * v && (x = [1, 2, 5]);
        f = F(f / v, x, "year" === e[0] ? Math.max(z(f / v), 1) : 1);
        return {
          unitRange: v,
          count: f,
          unitName: e[0]
        };
      };

      return f;
    }();

    h = function () {
      function f() {}

      f.compose = function (f) {
        f.keepProps.push("dateTime");

        f.prototype.getTimeTicks = function () {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        };

        m(f, "init", function (e) {
          "datetime" !== e.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new K(this));
        });
      };

      f.AdditionsClass = K;
      return f;
    }();

    h.compose(f);
    return h;
  });
  N(m, "Core/Axis/LogarithmicAxis.js", [m["Core/Axis/Axis.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.addEvent,
        z = h.getMagnitude,
        F = h.normalizeTickInterval,
        L = h.pick,
        K = function () {
      function f(f) {
        this.axis = f;
      }

      f.prototype.getLogTickPositions = function (f, e, h, v) {
        var x = this.axis,
            D = x.len,
            n = x.options,
            l = [];
        v || (this.minorAutoInterval = void 0);
        if (.5 <= f) f = Math.round(f), l = x.getLinearTickPositions(f, e, h);else if (.08 <= f) {
          n = Math.floor(e);
          var m, w;

          for (D = .3 < f ? [1, 2, 4] : .15 < f ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < h + 1 && !w; n++) {
            var r = D.length;

            for (m = 0; m < r && !w; m++) {
              var d = this.log2lin(this.lin2log(n) * D[m]);
              d > e && (!v || g <= h) && "undefined" !== typeof g && l.push(g);
              g > h && (w = !0);
              var g = d;
            }
          }
        } else e = this.lin2log(e), h = this.lin2log(h), f = v ? x.getMinorTickInterval() : n.tickInterval, f = L("auto" === f ? null : f, this.minorAutoInterval, n.tickPixelInterval / (v ? 5 : 1) * (h - e) / ((v ? D / x.tickPositions.length : D) || 1)), f = F(f, void 0, z(f)), l = x.getLinearTickPositions(f, e, h).map(this.log2lin), v || (this.minorAutoInterval = f / 5);
        v || (x.tickInterval = f);
        return l;
      };

      f.prototype.lin2log = function (f) {
        return Math.pow(10, f);
      };

      f.prototype.log2lin = function (f) {
        return Math.log(f) / Math.LN10;
      };

      return f;
    }();

    h = function () {
      function f() {}

      f.compose = function (f) {
        f.keepProps.push("logarithmic");
        var e = f.prototype,
            h = K.prototype;
        e.log2lin = h.log2lin;
        e.lin2log = h.lin2log;
        m(f, "init", function (e) {
          var f = this.logarithmic;
          "logarithmic" !== e.userOptions.type ? this.logarithmic = void 0 : (f || (f = this.logarithmic = new K(this)), this.log2lin !== f.log2lin && (f.log2lin = this.log2lin.bind(this)), this.lin2log !== f.lin2log && (f.lin2log = this.lin2log.bind(this)));
        });
        m(f, "afterInit", function () {
          var e = this.logarithmic;
          e && (this.lin2val = function (f) {
            return e.lin2log(f);
          }, this.val2lin = function (f) {
            return e.log2lin(f);
          });
        });
      };

      return f;
    }();

    h.compose(f);
    return h;
  });
  N(m, "Core/Axis/PlotLineOrBand.js", [m["Core/Axis/Axis.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = m.arrayMax,
        F = m.arrayMin,
        P = m.defined,
        K = m.destroyObjectProperties,
        C = m.erase,
        y = m.extend,
        e = m.merge,
        I = m.objectEach,
        v = m.pick;

    m = function () {
      function f(e, f) {
        this.axis = e;
        f && (this.options = f, this.id = f.id);
      }

      f.prototype.render = function () {
        h.fireEvent(this, "render");
        var f = this,
            n = f.axis,
            l = n.horiz,
            m = n.logarithmic,
            w = f.options,
            r = w.label,
            d = f.label,
            g = w.to,
            c = w.from,
            a = w.value,
            q = P(c) && P(g),
            p = P(a),
            B = f.svgElem,
            A = !B,
            G = [],
            M = w.color,
            x = v(w.zIndex, 0),
            Q = w.events;
        G = {
          "class": "highcharts-plot-" + (q ? "band " : "line ") + (w.className || "")
        };
        var O = {},
            E = n.chart.renderer,
            u = q ? "bands" : "lines";
        m && (c = m.log2lin(c), g = m.log2lin(g), a = m.log2lin(a));
        n.chart.styledMode || (p ? (G.stroke = M || "#999999", G["stroke-width"] = v(w.width, 1), w.dashStyle && (G.dashstyle = w.dashStyle)) : q && (G.fill = M || "#e6ebf5", w.borderWidth && (G.stroke = w.borderColor, G["stroke-width"] = w.borderWidth)));
        O.zIndex = x;
        u += "-" + x;
        (m = n.plotLinesAndBandsGroups[u]) || (n.plotLinesAndBandsGroups[u] = m = E.g("plot-" + u).attr(O).add());
        A && (f.svgElem = B = E.path().attr(G).add(m));
        if (p) G = n.getPlotLinePath({
          value: a,
          lineWidth: B.strokeWidth(),
          acrossPanes: w.acrossPanes
        });else if (q) G = n.getPlotBandPath(c, g, w);else return;
        !f.eventsAdded && Q && (I(Q, function (b, a) {
          B.on(a, function (b) {
            Q[a].apply(f, [b]);
          });
        }), f.eventsAdded = !0);
        (A || !B.d) && G && G.length ? B.attr({
          d: G
        }) : B && (G ? (B.show(!0), B.animate({
          d: G
        })) : B.d && (B.hide(), d && (f.label = d = d.destroy())));
        r && (P(r.text) || P(r.formatter)) && G && G.length && 0 < n.width && 0 < n.height && !G.isFlat ? (r = e({
          align: l && q && "center",
          x: l ? !q && 4 : 10,
          verticalAlign: !l && q && "middle",
          y: l ? q ? 16 : 10 : q ? 6 : -4,
          rotation: l && !q && 90
        }, r), this.renderLabel(r, G, q, x)) : d && d.hide();
        return f;
      };

      f.prototype.renderLabel = function (e, f, l, h) {
        var n = this.label,
            r = this.axis.chart.renderer;
        n || (n = {
          align: e.textAlign || e.align,
          rotation: e.rotation,
          "class": "highcharts-plot-" + (l ? "band" : "line") + "-label " + (e.className || "")
        }, n.zIndex = h, h = this.getLabelText(e), this.label = n = r.text(h, 0, 0, e.useHTML).attr(n).add(), this.axis.chart.styledMode || n.css(e.style));
        r = f.xBounds || [f[0][1], f[1][1], l ? f[2][1] : f[0][1]];
        f = f.yBounds || [f[0][2], f[1][2], l ? f[2][2] : f[0][2]];
        l = F(r);
        h = F(f);
        n.align(e, !1, {
          x: l,
          y: h,
          width: z(r) - l,
          height: z(f) - h
        });
        n.show(!0);
      };

      f.prototype.getLabelText = function (e) {
        return P(e.formatter) ? e.formatter.call(this) : e.text;
      };

      f.prototype.destroy = function () {
        C(this.axis.plotLinesAndBands, this);
        delete this.axis;
        K(this);
      };

      return f;
    }();

    y(f.prototype, {
      getPlotBandPath: function (e, f, n) {
        void 0 === n && (n = this.options);
        var l = this.getPlotLinePath({
          value: f,
          force: !0,
          acrossPanes: n.acrossPanes
        });
        n = this.getPlotLinePath({
          value: e,
          force: !0,
          acrossPanes: n.acrossPanes
        });
        var h = [],
            w = this.horiz,
            r = 1;
        e = e < this.min && f < this.min || e > this.max && f > this.max;

        if (n && l) {
          if (e) {
            var d = n.toString() === l.toString();
            r = 0;
          }

          for (e = 0; e < n.length; e += 2) {
            f = n[e];
            var g = n[e + 1],
                c = l[e],
                a = l[e + 1];
            "M" !== f[0] && "L" !== f[0] || "M" !== g[0] && "L" !== g[0] || "M" !== c[0] && "L" !== c[0] || "M" !== a[0] && "L" !== a[0] || (w && c[1] === f[1] ? (c[1] += r, a[1] += r) : w || c[2] !== f[2] || (c[2] += r, a[2] += r), h.push(["M", f[1], f[2]], ["L", g[1], g[2]], ["L", a[1], a[2]], ["L", c[1], c[2]], ["Z"]));
            h.isFlat = d;
          }
        }

        return h;
      },
      addPlotBand: function (e) {
        return this.addPlotBandOrLine(e, "plotBands");
      },
      addPlotLine: function (e) {
        return this.addPlotBandOrLine(e, "plotLines");
      },
      addPlotBandOrLine: function (e, f) {
        var n = new h.PlotLineOrBand(this, e),
            l = this.userOptions;
        this.visible && (n = n.render());

        if (n) {
          if (f) {
            var v = l[f] || [];
            v.push(e);
            l[f] = v;
          }

          this.plotLinesAndBands.push(n);
          this._addedPlotLB = !0;
        }

        return n;
      },
      removePlotBandOrLine: function (e) {
        for (var f = this.plotLinesAndBands, n = this.options, l = this.userOptions, h = f.length; h--;) f[h].id === e && f[h].destroy();

        [n.plotLines || [], l.plotLines || [], n.plotBands || [], l.plotBands || []].forEach(function (f) {
          for (h = f.length; h--;) (f[h] || {}).id === e && C(f, f[h]);
        });
      },
      removePlotBand: function (e) {
        this.removePlotBandOrLine(e);
      },
      removePlotLine: function (e) {
        this.removePlotBandOrLine(e);
      }
    });
    h.PlotLineOrBand = m;
    return h.PlotLineOrBand;
  });
  N(m, "Core/Tooltip.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = f.doc,
        z = h.clamp,
        F = h.css,
        L = h.defined,
        K = h.discardElement,
        C = h.extend,
        y = h.fireEvent,
        e = h.format,
        I = h.isNumber,
        v = h.isString,
        x = h.merge,
        D = h.pick,
        n = h.splat,
        l = h.syncTimeout,
        J = h.timeUnits;
    "";

    var w = function () {
      function r(d, g) {
        this.container = void 0;
        this.crosshairs = [];
        this.distance = 0;
        this.isHidden = !0;
        this.isSticky = !1;
        this.now = {};
        this.options = {};
        this.outside = !1;
        this.chart = d;
        this.init(d, g);
      }

      r.prototype.applyFilter = function () {
        var d = this.chart;
        d.renderer.definition({
          tagName: "filter",
          id: "drop-shadow-" + d.index,
          opacity: .5,
          children: [{
            tagName: "feGaussianBlur",
            "in": "SourceAlpha",
            stdDeviation: 1
          }, {
            tagName: "feOffset",
            dx: 1,
            dy: 1
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              type: "linear",
              slope: .3
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              "in": "SourceGraphic"
            }]
          }]
        });
        d.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + d.index + "{filter:url(#drop-shadow-" + d.index + ")}"
        });
      };

      r.prototype.bodyFormatter = function (d) {
        return d.map(function (d) {
          var c = d.series.tooltipOptions;
          return (c[(d.point.formatPrefix || "point") + "Formatter"] || d.point.tooltipFormatter).call(d.point, c[(d.point.formatPrefix || "point") + "Format"] || "");
        });
      };

      r.prototype.cleanSplit = function (d) {
        this.chart.series.forEach(function (g) {
          var c = g && g.tt;
          c && (!c.isActive || d ? g.tt = c.destroy() : c.isActive = !1);
        });
      };

      r.prototype.defaultFormatter = function (d) {
        var g = this.points || n(this);
        var c = [d.tooltipFooterHeaderFormatter(g[0])];
        c = c.concat(d.bodyFormatter(g));
        c.push(d.tooltipFooterHeaderFormatter(g[0], !0));
        return c;
      };

      r.prototype.destroy = function () {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), K(this.container));
        h.clearTimeout(this.hideTimer);
        h.clearTimeout(this.tooltipTimeout);
      };

      r.prototype.getAnchor = function (d, g) {
        var c = this.chart,
            a = c.pointer,
            q = c.inverted,
            p = c.plotTop,
            e = c.plotLeft,
            f = 0,
            l = 0,
            r,
            h;
        d = n(d);
        this.followPointer && g ? ("undefined" === typeof g.chartX && (g = a.normalize(g)), d = [g.chartX - e, g.chartY - p]) : d[0].tooltipPos ? d = d[0].tooltipPos : (d.forEach(function (a) {
          r = a.series.yAxis;
          h = a.series.xAxis;
          f += a.plotX + (!q && h ? h.left - e : 0);
          l += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!q && r ? r.top - p : 0);
        }), f /= d.length, l /= d.length, d = [q ? c.plotWidth - l : f, this.shared && !q && 1 < d.length && g ? g.chartY - p : q ? c.plotHeight - f : l]);
        return d.map(Math.round);
      };

      r.prototype.getDateFormat = function (d, g, c, a) {
        var q = this.chart.time,
            p = q.dateFormat("%m-%d %H:%M:%S.%L", g),
            e = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            f = "millisecond";

        for (l in J) {
          if (d === J.week && +q.dateFormat("%w", g) === c && "00:00:00.000" === p.substr(6)) {
            var l = "week";
            break;
          }

          if (J[l] > d) {
            l = f;
            break;
          }

          if (e[l] && p.substr(e[l]) !== "01-01 00:00:00.000".substr(e[l])) break;
          "week" !== l && (f = l);
        }

        if (l) var r = q.resolveDTLFormat(a[l]).main;
        return r;
      };

      r.prototype.getLabel = function () {
        var d,
            g,
            c = this,
            a = this.chart.renderer,
            q = this.chart.styledMode,
            p = this.options,
            e = "tooltip" + (L(p.className) ? " " + p.className : ""),
            l = (null === (d = p.style) || void 0 === d ? void 0 : d.pointerEvents) || (!this.followPointer && p.stickOnContact ? "auto" : "none"),
            r;

        d = function () {
          c.inContact = !0;
        };

        var n = function () {
          var a = c.chart.hoverSeries;
          c.inContact = !1;
          if (a && a.onMouseOut) a.onMouseOut();
        };

        if (!this.label) {
          this.outside && (this.container = r = f.doc.createElement("div"), r.className = "highcharts-tooltip-container", F(r, {
            position: "absolute",
            top: "1px",
            pointerEvents: l,
            zIndex: 3
          }), f.doc.body.appendChild(r), this.renderer = a = new f.Renderer(r, 0, 0, null === (g = this.chart.options.chart) || void 0 === g ? void 0 : g.style, void 0, void 0, a.styledMode));
          this.split ? this.label = a.g(e) : (this.label = a.label("", 0, 0, p.shape || "callout", null, null, p.useHTML, null, e).attr({
            padding: p.padding,
            r: p.borderRadius
          }), q || this.label.attr({
            fill: p.backgroundColor,
            "stroke-width": p.borderWidth
          }).css(p.style).css({
            pointerEvents: l
          }).shadow(p.shadow));
          q && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (c.outside && !c.split) {
            var h = this.label,
                w = h.xSetter,
                v = h.ySetter;

            h.xSetter = function (a) {
              w.call(h, c.distance);
              r.style.left = a + "px";
            };

            h.ySetter = function (a) {
              v.call(h, c.distance);
              r.style.top = a + "px";
            };
          }

          this.label.on("mouseenter", d).on("mouseleave", n).attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      };

      r.prototype.getPosition = function (d, g, c) {
        var a = this.chart,
            q = this.distance,
            p = {},
            e = a.inverted && c.h || 0,
            f,
            l = this.outside,
            r = l ? m.documentElement.clientWidth - 2 * q : a.chartWidth,
            n = l ? Math.max(m.body.scrollHeight, m.documentElement.scrollHeight, m.body.offsetHeight, m.documentElement.offsetHeight, m.documentElement.clientHeight) : a.chartHeight,
            h = a.pointer.getChartPosition(),
            w = a.containerScaling,
            E = function (b) {
          return w ? b * w.scaleX : b;
        },
            u = function (b) {
          return w ? b * w.scaleY : b;
        },
            b = function (b) {
          var k = "x" === b;
          return [b, k ? r : n, k ? d : g].concat(l ? [k ? E(d) : u(g), k ? h.left - q + E(c.plotX + a.plotLeft) : h.top - q + u(c.plotY + a.plotTop), 0, k ? r : n] : [k ? d : g, k ? c.plotX + a.plotLeft : c.plotY + a.plotTop, k ? a.plotLeft : a.plotTop, k ? a.plotLeft + a.plotWidth : a.plotTop + a.plotHeight]);
        },
            k = b("y"),
            t = b("x"),
            H = !this.followPointer && D(c.ttBelow, !a.inverted === !!c.negative),
            v = function (b, a, c, k, d, g, t) {
          var f = "y" === b ? u(q) : E(q),
              l = (c - k) / 2,
              r = k < d - q,
              B = d + q + k < a,
              n = d - f - c + l;
          d = d + f - l;
          if (H && B) p[b] = d;else if (!H && r) p[b] = n;else if (r) p[b] = Math.min(t - k, 0 > n - e ? n : n - e);else if (B) p[b] = Math.max(g, d + e + c > a ? d : d + e);else return !1;
        },
            U = function (b, a, c, k, d) {
          var g;
          d < q || d > a - q ? g = !1 : p[b] = d < c / 2 ? 1 : d > a - k / 2 ? a - k - 2 : d - c / 2;
          return g;
        },
            x = function (b) {
          var a = k;
          k = t;
          t = a;
          f = b;
        },
            I = function () {
          !1 !== v.apply(0, k) ? !1 !== U.apply(0, t) || f || (x(!0), I()) : f ? p.x = p.y = 0 : (x(!0), I());
        };

        (a.inverted || 1 < this.len) && x();
        I();
        return p;
      };

      r.prototype.getXDateFormat = function (d, g, c) {
        g = g.dateTimeLabelFormats;
        var a = c && c.closestPointRange;
        return (a ? this.getDateFormat(a, d.x, c.options.startOfWeek, g) : g.day) || g.year;
      };

      r.prototype.hide = function (d) {
        var g = this;
        h.clearTimeout(this.hideTimer);
        d = D(d, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = l(function () {
          g.getLabel().fadeOut(d ? void 0 : d);
          g.isHidden = !0;
        }, d));
      };

      r.prototype.init = function (d, g) {
        this.chart = d;
        this.options = g;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = g.split && !d.inverted && !d.polar;
        this.shared = g.shared || this.split;
        this.outside = D(g.outside, !(!d.scrollablePixelsX && !d.scrollablePixelsY));
      };

      r.prototype.isStickyOnContact = function () {
        return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
      };

      r.prototype.move = function (d, g, c, a) {
        var q = this,
            p = q.now,
            e = !1 !== q.options.animation && !q.isHidden && (1 < Math.abs(d - p.x) || 1 < Math.abs(g - p.y)),
            f = q.followPointer || 1 < q.len;
        C(p, {
          x: e ? (2 * p.x + d) / 3 : d,
          y: e ? (p.y + g) / 2 : g,
          anchorX: f ? void 0 : e ? (2 * p.anchorX + c) / 3 : c,
          anchorY: f ? void 0 : e ? (p.anchorY + a) / 2 : a
        });
        q.getLabel().attr(p);
        q.drawTracker();
        e && (h.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          q && q.move(d, g, c, a);
        }, 32));
      };

      r.prototype.refresh = function (d, g) {
        var c = this.chart,
            a = this.options,
            q = d,
            p = {},
            e = [],
            f = a.formatter || this.defaultFormatter;
        p = this.shared;
        var l = c.styledMode;

        if (a.enabled) {
          h.clearTimeout(this.hideTimer);
          this.followPointer = n(q)[0].series.tooltipOptions.followPointer;
          var r = this.getAnchor(q, g);
          g = r[0];
          var w = r[1];
          !p || q.series && q.series.noSharedTooltip ? p = q.getLabelConfig() : (c.pointer.applyInactiveState(q), q.forEach(function (a) {
            a.setState("hover");
            e.push(a.getLabelConfig());
          }), p = {
            x: q[0].category,
            y: q[0].y
          }, p.points = e, q = q[0]);
          this.len = e.length;
          c = f.call(p, this);
          f = q.series;
          this.distance = D(f.tooltipOptions.distance, 16);
          !1 === c ? this.hide() : (this.split ? this.renderSplit(c, n(d)) : (d = this.getLabel(), a.style.width && !l || d.css({
            width: this.chart.spacingBox.width + "px"
          }), d.attr({
            text: c && c.join ? c.join("") : c
          }), d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + D(q.colorIndex, f.colorIndex)), l || d.attr({
            stroke: a.borderColor || q.color || f.color || "#666666"
          }), this.updatePosition({
            plotX: g,
            plotY: w,
            negative: q.negative,
            ttBelow: q.ttBelow,
            h: r[2] || 0
          })), this.isHidden && this.label && this.label.attr({
            opacity: 1
          }).show(), this.isHidden = !1);
          y(this, "refresh");
        }
      };

      r.prototype.renderSplit = function (d, g) {
        function c(b, a, c, d, g) {
          void 0 === g && (g = !0);
          c ? (a = I ? 0 : F, b = z(b - d / 2, m.left, m.right - d)) : (a -= y, b = g ? b - d - k : b + k, b = z(b, g ? b : m.left, m.right));
          return {
            x: b,
            y: a
          };
        }

        var a = this,
            q = a.chart,
            p = a.chart,
            e = p.plotHeight,
            l = p.plotLeft,
            r = p.plotTop,
            n = p.pointer,
            h = p.renderer,
            w = p.scrollablePixelsY,
            O = void 0 === w ? 0 : w;
        w = p.scrollingContainer;
        w = void 0 === w ? {
          scrollLeft: 0,
          scrollTop: 0
        } : w;
        var E = w.scrollLeft,
            u = w.scrollTop,
            b = p.styledMode,
            k = a.distance,
            t = a.options,
            H = a.options.positioner,
            m = {
          left: E,
          right: E + p.chartWidth,
          top: u,
          bottom: u + p.chartHeight
        },
            x = a.getLabel(),
            I = !(!q.xAxis[0] || !q.xAxis[0].opposite),
            y = r + u,
            J = 0,
            F = e - O;
        v(d) && (d = [!1, d]);
        d = d.slice(0, g.length + 1).reduce(function (d, p, q) {
          if (!1 !== p && "" !== p) {
            q = g[q - 1] || {
              isHeader: !0,
              plotX: g[0].plotX,
              plotY: e,
              series: {}
            };
            var f = q.isHeader,
                n = f ? a : q.series,
                B = n.tt,
                A = q.isHeader;
            var w = q.series;
            var E = "highcharts-color-" + D(q.colorIndex, w.colorIndex, "none");
            B || (B = {
              padding: t.padding,
              r: t.borderRadius
            }, b || (B.fill = t.backgroundColor, B["stroke-width"] = t.borderWidth), B = h.label("", 0, 0, t[A ? "headerShape" : "shape"] || "callout", void 0, void 0, t.useHTML).addClass((A ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + E).attr(B).add(x));
            B.isActive = !0;
            B.attr({
              text: p
            });
            b || B.css(t.style).shadow(t.shadow).attr({
              stroke: t.borderColor || q.color || w.color || "#333333"
            });
            p = n.tt = B;
            A = p.getBBox();
            n = A.width + p.strokeWidth();
            f && (J = A.height, F += J, I && (y -= J));
            w = q.plotX;
            w = void 0 === w ? 0 : w;
            E = q.plotY;
            E = void 0 === E ? 0 : E;
            var v = q.series;

            if (q.isHeader) {
              w = l + w;
              var G = r + e / 2;
            } else B = v.xAxis, v = v.yAxis, w = B.pos + z(w, -k, B.len + k), v.pos + E >= u + r && v.pos + E <= u + r + e - O && (G = v.pos + E);

            w = z(w, m.left - k, m.right + k);
            "number" === typeof G ? (A = A.height + 1, E = H ? H.call(a, n, A, q) : c(w, G, f, n), d.push({
              align: H ? 0 : void 0,
              anchorX: w,
              anchorY: G,
              boxWidth: n,
              point: q,
              rank: D(E.rank, f ? 1 : 0),
              size: A,
              target: E.y,
              tt: p,
              x: E.x
            })) : p.isActive = !1;
          }

          return d;
        }, []);
        !H && d.some(function (b) {
          return b.x < m.left;
        }) && (d = d.map(function (b) {
          var a = c(b.anchorX, b.anchorY, b.point.isHeader, b.boxWidth, !1);
          return C(b, {
            target: a.y,
            x: a.x
          });
        }));
        a.cleanSplit();
        f.distribute(d, F);
        d.forEach(function (b) {
          var a = b.pos;
          b.tt.attr({
            visibility: "undefined" === typeof a ? "hidden" : "inherit",
            x: b.x,
            y: a + y,
            anchorX: b.anchorX,
            anchorY: b.anchorY
          });
        });
        d = a.container;
        q = a.renderer;
        a.outside && d && q && (p = x.getBBox(), q.setSize(p.width + p.x, p.height + p.y, !1), n = n.getChartPosition(), d.style.left = n.left + "px", d.style.top = n.top + "px");
      };

      r.prototype.drawTracker = function () {
        if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();else {
          var d = this.chart,
              g = this.label,
              c = d.hoverPoint;

          if (g && c) {
            var a = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            c = this.getAnchor(c);
            var q = g.getBBox();
            c[0] += d.plotLeft - g.translateX;
            c[1] += d.plotTop - g.translateY;
            a.x = Math.min(0, c[0]);
            a.y = Math.min(0, c[1]);
            a.width = 0 > c[0] ? Math.max(Math.abs(c[0]), q.width - c[0]) : Math.max(Math.abs(c[0]), q.width);
            a.height = 0 > c[1] ? Math.max(Math.abs(c[1]), q.height - Math.abs(c[1])) : Math.max(Math.abs(c[1]), q.height);
            this.tracker ? this.tracker.attr(a) : (this.tracker = g.renderer.rect(a).addClass("highcharts-tracker").add(g), d.styledMode || this.tracker.attr({
              fill: "rgba(0,0,0,0)"
            }));
          }
        }
      };

      r.prototype.styledModeFormat = function (d) {
        return d.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      };

      r.prototype.tooltipFooterHeaderFormatter = function (d, g) {
        var c = g ? "footer" : "header",
            a = d.series,
            q = a.tooltipOptions,
            p = q.xDateFormat,
            f = a.xAxis,
            l = f && "datetime" === f.options.type && I(d.key),
            r = q[c + "Format"];
        g = {
          isFooter: g,
          labelConfig: d
        };
        y(this, "headerFormatter", g, function (c) {
          l && !p && (p = this.getXDateFormat(d, q, f));
          l && p && (d.point && d.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            r = r.replace("{point." + a + "}", "{point." + a + ":" + p + "}");
          });
          a.chart.styledMode && (r = this.styledModeFormat(r));
          c.text = e(r, {
            point: d,
            series: a
          }, this.chart);
        });
        return g.text;
      };

      r.prototype.update = function (d) {
        this.destroy();
        x(!0, this.chart.options.tooltip.userOptions, d);
        this.init(this.chart, x(!0, this.options, d));
      };

      r.prototype.updatePosition = function (d) {
        var g = this.chart,
            c = g.pointer,
            a = this.getLabel(),
            q = d.plotX + g.plotLeft,
            p = d.plotY + g.plotTop;
        c = c.getChartPosition();
        d = (this.options.positioner || this.getPosition).call(this, a.width, a.height, d);

        if (this.outside) {
          var e = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(a.width + e, a.height + e, !1);
          if (g = g.containerScaling) F(this.container, {
            transform: "scale(" + g.scaleX + ", " + g.scaleY + ")"
          }), q *= g.scaleX, p *= g.scaleY;
          q += c.left - d.x;
          p += c.top - d.y;
        }

        this.move(Math.round(d.x), Math.round(d.y || 0), q, p);
      };

      return r;
    }();

    f.Tooltip = w;
    return f.Tooltip;
  });
  N(m, "Core/Pointer.js", [m["Core/Color/Color.js"], m["Core/Globals.js"], m["Core/Tooltip.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.parse,
        P = h.charts,
        K = h.noop,
        C = z.addEvent,
        y = z.attr,
        e = z.css,
        I = z.defined,
        v = z.extend,
        x = z.find,
        D = z.fireEvent,
        n = z.isNumber,
        l = z.isObject,
        J = z.objectEach,
        w = z.offset,
        r = z.pick,
        d = z.splat;
    "";

    f = function () {
      function g(c, a) {
        this.lastValidTouch = {};
        this.pinchDown = [];
        this.runChartClick = !1;
        this.chart = c;
        this.hasDragged = !1;
        this.options = a;

        this.unbindContainerMouseLeave = function () {};

        this.unbindContainerMouseEnter = function () {};

        this.init(c, a);
      }

      g.prototype.applyInactiveState = function (c) {
        var a = [],
            d;
        (c || []).forEach(function (c) {
          d = c.series;
          a.push(d);
          d.linkedParent && a.push(d.linkedParent);
          d.linkedSeries && (a = a.concat(d.linkedSeries));
          d.navigatorSeries && a.push(d.navigatorSeries);
        });
        this.chart.series.forEach(function (c) {
          -1 === a.indexOf(c) ? c.setState("inactive", !0) : c.options.inactiveOtherPoints && c.setAllPointsToState("inactive");
        });
      };

      g.prototype.destroy = function () {
        var c = this;
        "undefined" !== typeof c.unDocMouseMove && c.unDocMouseMove();
        this.unbindContainerMouseLeave();
        h.chartCount || (h.unbindDocumentMouseUp && (h.unbindDocumentMouseUp = h.unbindDocumentMouseUp()), h.unbindDocumentTouchEnd && (h.unbindDocumentTouchEnd = h.unbindDocumentTouchEnd()));
        clearInterval(c.tooltipTimeout);
        J(c, function (a, d) {
          c[d] = void 0;
        });
      };

      g.prototype.drag = function (c) {
        var a = this.chart,
            d = a.options.chart,
            g = c.chartX,
            e = c.chartY,
            f = this.zoomHor,
            r = this.zoomVert,
            n = a.plotLeft,
            h = a.plotTop,
            w = a.plotWidth,
            v = a.plotHeight,
            E = this.selectionMarker,
            u = this.mouseDownX || 0,
            b = this.mouseDownY || 0,
            k = l(d.panning) ? d.panning && d.panning.enabled : d.panning,
            t = d.panKey && c[d.panKey + "Key"];
        if (!E || !E.touch) if (g < n ? g = n : g > n + w && (g = n + w), e < h ? e = h : e > h + v && (e = h + v), this.hasDragged = Math.sqrt(Math.pow(u - g, 2) + Math.pow(b - e, 2)), 10 < this.hasDragged) {
          var H = a.isInsidePlot(u - n, b - h);
          a.hasCartesianSeries && (this.zoomX || this.zoomY) && H && !t && !E && (this.selectionMarker = E = a.renderer.rect(n, h, f ? 1 : w, r ? 1 : v, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), a.styledMode || E.attr({
            fill: d.selectionMarkerFill || F("#335cad").setOpacity(.25).get()
          }));
          E && f && (g -= u, E.attr({
            width: Math.abs(g),
            x: (0 < g ? 0 : g) + u
          }));
          E && r && (g = e - b, E.attr({
            height: Math.abs(g),
            y: (0 < g ? 0 : g) + b
          }));
          H && !E && k && a.pan(c, d.panning);
        }
      };

      g.prototype.dragStart = function (c) {
        var a = this.chart;
        a.mouseIsDown = c.type;
        a.cancelClick = !1;
        a.mouseDownX = this.mouseDownX = c.chartX;
        a.mouseDownY = this.mouseDownY = c.chartY;
      };

      g.prototype.drop = function (c) {
        var a = this,
            d = this.chart,
            g = this.hasPinched;

        if (this.selectionMarker) {
          var f = {
            originalEvent: c,
            xAxis: [],
            yAxis: []
          },
              l = this.selectionMarker,
              r = l.attr ? l.attr("x") : l.x,
              h = l.attr ? l.attr("y") : l.y,
              w = l.attr ? l.attr("width") : l.width,
              m = l.attr ? l.attr("height") : l.height,
              O;
          if (this.hasDragged || g) d.axes.forEach(function (d) {
            if (d.zoomEnabled && I(d.min) && (g || a[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[d.coll]]) && n(r) && n(h)) {
              var p = d.horiz,
                  b = "touchend" === c.type ? d.minPixelPadding : 0,
                  k = d.toValue((p ? r : h) + b);
              p = d.toValue((p ? r + w : h + m) - b);
              f[d.coll].push({
                axis: d,
                min: Math.min(k, p),
                max: Math.max(k, p)
              });
              O = !0;
            }
          }), O && D(d, "selection", f, function (a) {
            d.zoom(v(a, g ? {
              animation: !1
            } : null));
          });
          n(d.index) && (this.selectionMarker = this.selectionMarker.destroy());
          g && this.scaleGroups();
        }

        d && n(d.index) && (e(d.container, {
          cursor: d._cursor
        }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      };

      g.prototype.findNearestKDPoint = function (c, a, d) {
        var g = this.chart,
            q = g.hoverPoint;
        g = g.tooltip;
        if (q && g && g.isStickyOnContact()) return q;
        var e;
        c.forEach(function (c) {
          var g = !(c.noSharedTooltip && a) && 0 > c.options.findNearestPointBy.indexOf("y");
          c = c.searchPoint(d, g);

          if ((g = l(c, !0)) && !(g = !l(e, !0))) {
            g = e.distX - c.distX;
            var p = e.dist - c.dist,
                q = (c.series.group && c.series.group.zIndex) - (e.series.group && e.series.group.zIndex);
            g = 0 < (0 !== g && a ? g : 0 !== p ? p : 0 !== q ? q : e.series.index > c.series.index ? -1 : 1);
          }

          g && (e = c);
        });
        return e;
      };

      g.prototype.getChartCoordinatesFromPoint = function (c, a) {
        var d = c.series,
            g = d.xAxis;
        d = d.yAxis;
        var e = r(c.clientX, c.plotX),
            f = c.shapeArgs;
        if (g && d) return a ? {
          chartX: g.len + g.pos - e,
          chartY: d.len + d.pos - c.plotY
        } : {
          chartX: e + g.pos,
          chartY: c.plotY + d.pos
        };
        if (f && f.x && f.y) return {
          chartX: f.x,
          chartY: f.y
        };
      };

      g.prototype.getChartPosition = function () {
        return this.chartPosition || (this.chartPosition = w(this.chart.container));
      };

      g.prototype.getCoordinates = function (c) {
        var a = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (d) {
          a[d.isXAxis ? "xAxis" : "yAxis"].push({
            axis: d,
            value: d.toValue(c[d.horiz ? "chartX" : "chartY"])
          });
        });
        return a;
      };

      g.prototype.getHoverData = function (c, a, d, g, e, f) {
        var p,
            q = [];
        g = !(!g || !c);
        var n = a && !a.stickyTracking,
            h = {
          chartX: f ? f.chartX : void 0,
          chartY: f ? f.chartY : void 0,
          shared: e
        };
        D(this, "beforeGetHoverData", h);
        n = n ? [a] : d.filter(function (a) {
          return h.filter ? h.filter(a) : a.visible && !(!e && a.directTouch) && r(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        a = (p = g || !f ? c : this.findNearestKDPoint(n, e, f)) && p.series;
        p && (e && !a.noSharedTooltip ? (n = d.filter(function (a) {
          return h.filter ? h.filter(a) : a.visible && !(!e && a.directTouch) && r(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), n.forEach(function (a) {
          var c = x(a.points, function (a) {
            return a.x === p.x && !a.isNull;
          });
          l(c) && (a.chart.isBoosting && (c = a.getPoint(c)), q.push(c));
        })) : q.push(p));
        h = {
          hoverPoint: p
        };
        D(this, "afterGetHoverData", h);
        return {
          hoverPoint: h.hoverPoint,
          hoverSeries: a,
          hoverPoints: q
        };
      };

      g.prototype.getPointFromEvent = function (c) {
        c = c.target;

        for (var a; c && !a;) a = c.point, c = c.parentNode;

        return a;
      };

      g.prototype.onTrackerMouseOut = function (c) {
        c = c.relatedTarget || c.toElement;
        var a = this.chart.hoverSeries;
        this.isDirectTouch = !1;
        if (!(!a || !c || a.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + a.index) && this.inClass(c, "highcharts-tracker"))) a.onMouseOut();
      };

      g.prototype.inClass = function (c, a) {
        for (var d; c;) {
          if (d = y(c, "class")) {
            if (-1 !== d.indexOf(a)) return !0;
            if (-1 !== d.indexOf("highcharts-container")) return !1;
          }

          c = c.parentNode;
        }
      };

      g.prototype.init = function (c, a) {
        this.options = a;
        this.chart = c;
        this.runChartClick = a.chart.events && !!a.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        m && (c.tooltip = new m(c, a.tooltip), this.followTouchMove = r(a.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      };

      g.prototype.normalize = function (c, a) {
        var d = c.touches,
            g = d ? d.length ? d.item(0) : r(d.changedTouches, c.changedTouches)[0] : c;
        a || (a = this.getChartPosition());
        d = g.pageX - a.left;
        a = g.pageY - a.top;
        if (g = this.chart.containerScaling) d /= g.scaleX, a /= g.scaleY;
        return v(c, {
          chartX: Math.round(d),
          chartY: Math.round(a)
        });
      };

      g.prototype.onContainerClick = function (c) {
        var a = this.chart,
            d = a.hoverPoint;
        c = this.normalize(c);
        var g = a.plotLeft,
            e = a.plotTop;
        a.cancelClick || (d && this.inClass(c.target, "highcharts-tracker") ? (D(d.series, "click", v(c, {
          point: d
        })), a.hoverPoint && d.firePointEvent("click", c)) : (v(c, this.getCoordinates(c)), a.isInsidePlot(c.chartX - g, c.chartY - e) && D(a, "click", c)));
      };

      g.prototype.onContainerMouseDown = function (c) {
        var a = 1 === ((c.buttons || c.button) & 1);
        c = this.normalize(c);
        if (h.isFirefox && 0 !== c.button) this.onContainerMouseMove(c);
        if ("undefined" === typeof c.button || a) this.zoomOption(c), a && c.preventDefault && c.preventDefault(), this.dragStart(c);
      };

      g.prototype.onContainerMouseLeave = function (c) {
        var a = P[r(h.hoverChartIndex, -1)],
            d = this.chart.tooltip;
        c = this.normalize(c);
        a && (c.relatedTarget || c.toElement) && (a.pointer.reset(), a.pointer.chartPosition = void 0);
        d && !d.isHidden && this.reset();
      };

      g.prototype.onContainerMouseEnter = function (c) {
        delete this.chartPosition;
      };

      g.prototype.onContainerMouseMove = function (c) {
        var a = this.chart;
        c = this.normalize(c);
        this.setHoverChartIndex();
        c.preventDefault || (c.returnValue = !1);
        "mousedown" === a.mouseIsDown && this.drag(c);
        a.openMenu || !this.inClass(c.target, "highcharts-tracker") && !a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop) || this.runPointActions(c);
      };

      g.prototype.onDocumentTouchEnd = function (c) {
        P[h.hoverChartIndex] && P[h.hoverChartIndex].pointer.drop(c);
      };

      g.prototype.onContainerTouchMove = function (c) {
        this.touch(c);
      };

      g.prototype.onContainerTouchStart = function (c) {
        this.zoomOption(c);
        this.touch(c, !0);
      };

      g.prototype.onDocumentMouseMove = function (c) {
        var a = this.chart,
            d = this.chartPosition;
        c = this.normalize(c, d);
        var g = a.tooltip;
        !d || g && g.isStickyOnContact() || a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop) || this.inClass(c.target, "highcharts-tracker") || this.reset();
      };

      g.prototype.onDocumentMouseUp = function (c) {
        var a = P[r(h.hoverChartIndex, -1)];
        a && a.pointer.drop(c);
      };

      g.prototype.pinch = function (c) {
        var a = this,
            d = a.chart,
            g = a.pinchDown,
            e = c.touches || [],
            f = e.length,
            l = a.lastValidTouch,
            n = a.hasZoom,
            h = a.selectionMarker,
            w = {},
            m = 1 === f && (a.inClass(c.target, "highcharts-tracker") && d.runTrackerClick || a.runChartClick),
            E = {};
        1 < f && (a.initiated = !0);
        n && a.initiated && !m && !1 !== c.cancelable && c.preventDefault();
        [].map.call(e, function (c) {
          return a.normalize(c);
        });
        "touchstart" === c.type ? ([].forEach.call(e, function (a, b) {
          g[b] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), l.x = [g[0].chartX, g[1] && g[1].chartX], l.y = [g[0].chartY, g[1] && g[1].chartY], d.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = d.bounds[a.horiz ? "h" : "v"],
                c = a.minPixelPadding,
                g = a.toPixels(Math.min(r(a.options.min, a.dataMin), a.dataMin)),
                p = a.toPixels(Math.max(r(a.options.max, a.dataMax), a.dataMax)),
                q = Math.max(g, p);
            b.min = Math.min(a.pos, Math.min(g, p) - c);
            b.max = Math.max(a.pos + a.len, q + c);
          }
        }), a.res = !0) : a.followTouchMove && 1 === f ? this.runPointActions(a.normalize(c)) : g.length && (h || (a.selectionMarker = h = v({
          destroy: K,
          touch: !0
        }, d.plotBox)), a.pinchTranslate(g, e, w, h, E, l), a.hasPinched = n, a.scaleGroups(w, E), a.res && (a.res = !1, this.reset(!1, 0)));
      };

      g.prototype.pinchTranslate = function (c, a, d, g, e, f) {
        this.zoomHor && this.pinchTranslateDirection(!0, c, a, d, g, e, f);
        this.zoomVert && this.pinchTranslateDirection(!1, c, a, d, g, e, f);
      };

      g.prototype.pinchTranslateDirection = function (c, a, d, g, e, f, l, r) {
        var p = this.chart,
            q = c ? "x" : "y",
            n = c ? "X" : "Y",
            h = "chart" + n,
            u = c ? "width" : "height",
            b = p["plot" + (c ? "Left" : "Top")],
            k,
            t,
            B = r || 1,
            w = p.inverted,
            A = p.bounds[c ? "h" : "v"],
            v = 1 === a.length,
            G = a[0][h],
            m = d[0][h],
            D = !v && a[1][h],
            M = !v && d[1][h];

        d = function () {
          "number" === typeof M && 20 < Math.abs(G - D) && (B = r || Math.abs(m - M) / Math.abs(G - D));
          t = (b - m) / B + G;
          k = p["plot" + (c ? "Width" : "Height")] / B;
        };

        d();
        a = t;

        if (a < A.min) {
          a = A.min;
          var x = !0;
        } else a + k > A.max && (a = A.max - k, x = !0);

        x ? (m -= .8 * (m - l[q][0]), "number" === typeof M && (M -= .8 * (M - l[q][1])), d()) : l[q] = [m, M];
        w || (f[q] = t - b, f[u] = k);
        f = w ? 1 / B : B;
        e[u] = k;
        e[q] = a;
        g[w ? c ? "scaleY" : "scaleX" : "scale" + n] = B;
        g["translate" + n] = f * b + (m - f * G);
      };

      g.prototype.reset = function (c, a) {
        var g = this.chart,
            p = g.hoverSeries,
            e = g.hoverPoint,
            f = g.hoverPoints,
            l = g.tooltip,
            r = l && l.shared ? f : e;
        c && r && d(r).forEach(function (a) {
          a.series.isCartesian && "undefined" === typeof a.plotX && (c = !1);
        });
        if (c) l && r && d(r).length && (l.refresh(r), l.shared && f ? f.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : e && (e.setState(e.state, !0), g.axes.forEach(function (a) {
          a.crosshair && e.series[a.coll] === a && a.drawCrosshair(null, e);
        })));else {
          if (e) e.onMouseOut();
          f && f.forEach(function (a) {
            a.setState();
          });
          if (p) p.onMouseOut();
          l && l.hide(a);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          g.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = g.hoverPoints = g.hoverPoint = null;
        }
      };

      g.prototype.runPointActions = function (c, a) {
        var d = this.chart,
            g = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            e = g ? g.shared : !1,
            f = a || d.hoverPoint,
            l = f && f.series || d.hoverSeries;
        l = this.getHoverData(f, l, d.series, (!c || "touchmove" !== c.type) && (!!a || l && l.directTouch && this.isDirectTouch), e, c);
        f = l.hoverPoint;
        var n = l.hoverPoints;
        a = (l = l.hoverSeries) && l.tooltipOptions.followPointer;
        e = e && l && !l.noSharedTooltip;

        if (f && (f !== d.hoverPoint || g && g.isHidden)) {
          (d.hoverPoints || []).forEach(function (a) {
            -1 === n.indexOf(a) && a.setState();
          });
          if (d.hoverSeries !== l) l.onMouseOver();
          this.applyInactiveState(n);
          (n || []).forEach(function (a) {
            a.setState("hover");
          });
          d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
          if (!f.series) return;
          d.hoverPoints = n;
          d.hoverPoint = f;
          f.firePointEvent("mouseOver");
          g && g.refresh(e ? n : f, c);
        } else a && g && !g.isHidden && (f = g.getAnchor([{}], c), g.updatePosition({
          plotX: f[0],
          plotY: f[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = C(d.container.ownerDocument, "mousemove", function (a) {
          var c = P[h.hoverChartIndex];
          if (c) c.pointer.onDocumentMouseMove(a);
        }));
        d.axes.forEach(function (a) {
          var g = r((a.crosshair || {}).snap, !0),
              p;
          g && ((p = d.hoverPoint) && p.series[a.coll] === a || (p = x(n, function (c) {
            return c.series[a.coll] === a;
          })));
          p || !g ? a.drawCrosshair(c, p) : a.hideCrosshair();
        });
      };

      g.prototype.scaleGroups = function (c, a) {
        var d = this.chart,
            g;
        d.series.forEach(function (p) {
          g = c || p.getPlotBox();
          p.xAxis && p.xAxis.zoomEnabled && p.group && (p.group.attr(g), p.markerGroup && (p.markerGroup.attr(g), p.markerGroup.clip(a ? d.clipRect : null)), p.dataLabelsGroup && p.dataLabelsGroup.attr(g));
        });
        d.clipRect.attr(a || d.clipBox);
      };

      g.prototype.setDOMEvents = function () {
        var c = this.chart.container,
            a = c.ownerDocument;
        c.onmousedown = this.onContainerMouseDown.bind(this);
        c.onmousemove = this.onContainerMouseMove.bind(this);
        c.onclick = this.onContainerClick.bind(this);
        this.unbindContainerMouseEnter = C(c, "mouseenter", this.onContainerMouseEnter.bind(this));
        this.unbindContainerMouseLeave = C(c, "mouseleave", this.onContainerMouseLeave.bind(this));
        h.unbindDocumentMouseUp || (h.unbindDocumentMouseUp = C(a, "mouseup", this.onDocumentMouseUp.bind(this)));
        h.hasTouch && (C(c, "touchstart", this.onContainerTouchStart.bind(this)), C(c, "touchmove", this.onContainerTouchMove.bind(this)), h.unbindDocumentTouchEnd || (h.unbindDocumentTouchEnd = C(a, "touchend", this.onDocumentTouchEnd.bind(this))));
      };

      g.prototype.setHoverChartIndex = function () {
        var c = this.chart,
            a = h.charts[r(h.hoverChartIndex, -1)];
        if (a && a !== c) a.pointer.onContainerMouseLeave({
          relatedTarget: !0
        });
        a && a.mouseIsDown || (h.hoverChartIndex = c.index);
      };

      g.prototype.touch = function (c, a) {
        var d = this.chart,
            g;
        this.setHoverChartIndex();
        if (1 === c.touches.length) {
          if (c = this.normalize(c), (g = d.isInsidePlot(c.chartX - d.plotLeft, c.chartY - d.plotTop)) && !d.openMenu) {
            a && this.runPointActions(c);

            if ("touchmove" === c.type) {
              a = this.pinchDown;
              var e = a[0] ? 4 <= Math.sqrt(Math.pow(a[0].chartX - c.chartX, 2) + Math.pow(a[0].chartY - c.chartY, 2)) : !1;
            }

            r(e, !0) && this.pinch(c);
          } else a && this.reset();
        } else 2 === c.touches.length && this.pinch(c);
      };

      g.prototype.zoomOption = function (c) {
        var a = this.chart,
            d = a.options.chart,
            g = d.zoomType || "";
        a = a.inverted;
        /touch/.test(c.type) && (g = r(d.pinchType, g));
        this.zoomX = c = /x/.test(g);
        this.zoomY = g = /y/.test(g);
        this.zoomHor = c && !a || g && a;
        this.zoomVert = g && !a || c && a;
        this.hasZoom = c || g;
      };

      return g;
    }();

    return h.Pointer = f;
  });
  N(m, "Core/MSPointer.js", [m["Core/Globals.js"], m["Core/Pointer.js"], m["Core/Utilities.js"]], function (f, h, m) {
    function z() {
      var e = [];

      e.item = function (e) {
        return this[e];
      };

      v(D, function (f) {
        e.push({
          pageX: f.pageX,
          pageY: f.pageY,
          target: f.target
        });
      });
      return e;
    }

    function F(e, n, h, r) {
      "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !K[f.hoverChartIndex] || (r(e), r = K[f.hoverChartIndex].pointer, r[n]({
        type: h,
        target: e.currentTarget,
        preventDefault: y,
        touches: z()
      }));
    }

    var P = this && this.__extends || function () {
      var e = function (f, l) {
        e = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, d) {
          e.__proto__ = d;
        } || function (e, d) {
          for (var g in d) d.hasOwnProperty(g) && (e[g] = d[g]);
        };

        return e(f, l);
      };

      return function (f, l) {
        function r() {
          this.constructor = f;
        }

        e(f, l);
        f.prototype = null === l ? Object.create(l) : (r.prototype = l.prototype, new r());
      };
    }(),
        K = f.charts,
        C = f.doc,
        y = f.noop,
        e = m.addEvent,
        I = m.css,
        v = m.objectEach,
        x = m.removeEvent,
        D = {},
        n = !!f.win.PointerEvent;

    return function (f) {
      function l() {
        return null !== f && f.apply(this, arguments) || this;
      }

      P(l, f);

      l.prototype.batchMSEvents = function (e) {
        e(this.chart.container, n ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
        e(this.chart.container, n ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
        e(C, n ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
      };

      l.prototype.destroy = function () {
        this.batchMSEvents(x);
        f.prototype.destroy.call(this);
      };

      l.prototype.init = function (e, l) {
        f.prototype.init.call(this, e, l);
        this.hasZoom && I(e.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      };

      l.prototype.onContainerPointerDown = function (e) {
        F(e, "onContainerTouchStart", "touchstart", function (e) {
          D[e.pointerId] = {
            pageX: e.pageX,
            pageY: e.pageY,
            target: e.currentTarget
          };
        });
      };

      l.prototype.onContainerPointerMove = function (e) {
        F(e, "onContainerTouchMove", "touchmove", function (e) {
          D[e.pointerId] = {
            pageX: e.pageX,
            pageY: e.pageY
          };
          D[e.pointerId].target || (D[e.pointerId].target = e.currentTarget);
        });
      };

      l.prototype.onDocumentPointerUp = function (e) {
        F(e, "onDocumentTouchEnd", "touchend", function (e) {
          delete D[e.pointerId];
        });
      };

      l.prototype.setDOMEvents = function () {
        f.prototype.setDOMEvents.call(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e);
      };

      return l;
    }(h);
  });
  N(m, "Core/Legend.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = f.animObject,
        F = f.setAnimation,
        L = m.addEvent,
        K = m.css,
        C = m.defined,
        y = m.discardElement,
        e = m.find,
        I = m.fireEvent,
        v = m.format,
        x = m.isNumber,
        D = m.merge,
        n = m.pick,
        l = m.relativeLength,
        J = m.stableSort,
        w = m.syncTimeout;
    f = m.wrap;
    m = h.isFirefox;

    var r = h.marginNames,
        d = h.win,
        g = function () {
      function c(a, c) {
        this.allItems = [];
        this.contentGroup = this.box = void 0;
        this.display = !1;
        this.group = void 0;
        this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
        this.options = {};
        this.padding = 0;
        this.pages = [];
        this.proximate = !1;
        this.scrollGroup = void 0;
        this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
        this.chart = a;
        this.init(a, c);
      }

      c.prototype.init = function (a, c) {
        this.chart = a;
        this.setOptions(c);
        c.enabled && (this.render(), L(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = L(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      };

      c.prototype.setOptions = function (a) {
        var c = n(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = D(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.itemMarginBottom = a.itemMarginBottom || 0;
        this.padding = c;
        this.initialItemY = c - 5;
        this.symbolWidth = n(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
        this.baseline = void 0;
      };

      c.prototype.update = function (a, c) {
        var d = this.chart;
        this.setOptions(D(!0, this.options, a));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        n(c, !0) && d.redraw();
        I(this, "afterUpdate");
      };

      c.prototype.colorizeItem = function (a, c) {
        a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              g = a.legendItem,
              e = a.legendLine,
              f = a.legendSymbol,
              q = this.itemHiddenStyle.color;
          d = c ? d.itemStyle.color : q;
          var l = c ? a.color || q : q,
              r = a.options && a.options.marker,
              n = {
            fill: l
          };
          g && g.css({
            fill: d,
            color: d
          });
          e && e.attr({
            stroke: l
          });
          f && (r && f.isMarker && (n = a.pointAttribs(), c || (n.stroke = n.fill = q)), f.attr(n));
        }

        I(this, "afterColorizeItem", {
          item: a,
          visible: c
        });
      };

      c.prototype.positionItems = function () {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      };

      c.prototype.positionItem = function (a) {
        var c = this,
            d = this.options,
            g = d.symbolPadding,
            e = !d.rtl,
            f = a._legendItemPos;
        d = f[0];
        f = f[1];
        var l = a.checkbox,
            n = a.legendGroup;
        n && n.element && (g = {
          translateX: e ? d : this.legendWidth - d - 2 * g - 4,
          translateY: f
        }, e = function () {
          I(c, "afterPositionItem", {
            item: a
          });
        }, C(n.translateY) ? n.animate(g, void 0, e) : (n.attr(g), e()));
        l && (l.x = d, l.y = f);
      };

      c.prototype.destroyItem = function (a) {
        var c = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (c) {
          a[c] && (a[c] = a[c].destroy());
        });
        c && y(a.checkbox);
      };

      c.prototype.destroy = function () {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (c) {
          ["legendItem", "legendGroup"].forEach(a, c);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      };

      c.prototype.positionCheckboxes = function () {
        var a = this.group && this.group.alignAttr,
            c = this.clipHeight || this.legendHeight,
            d = this.titleHeight;

        if (a) {
          var g = a.translateY;
          this.allItems.forEach(function (e) {
            var p = e.checkbox;

            if (p) {
              var f = g + d + p.y + (this.scrollOffset || 0) + 3;
              K(p, {
                left: a.translateX + e.checkboxOffset + p.x - 20 + "px",
                top: f + "px",
                display: this.proximate || f > g - 6 && f < g + c - 6 ? "" : "none"
              });
            }
          }, this);
        }
      };

      c.prototype.renderTitle = function () {
        var a = this.options,
            c = this.padding,
            d = a.title,
            g = 0;
        d.text && (this.title || (this.title = this.chart.renderer.label(d.text, c - 3, c - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), a = this.title.getBBox(), g = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: g
        }));
        this.titleHeight = g;
      };

      c.prototype.setText = function (a) {
        var c = this.options;
        a.legendItem.attr({
          text: c.labelFormat ? v(c.labelFormat, a, this.chart) : c.labelFormatter.call(a)
        });
      };

      c.prototype.renderItem = function (a) {
        var c = this.chart,
            d = c.renderer,
            g = this.options,
            e = this.symbolWidth,
            f = g.symbolPadding,
            l = this.itemStyle,
            r = this.itemHiddenStyle,
            h = "horizontal" === g.layout ? n(g.itemDistance, 20) : 0,
            w = !g.rtl,
            v = a.legendItem,
            u = !a.series,
            b = !u && a.series.drawLegendSymbol ? a.series : a,
            k = b.options;
        k = this.createCheckboxForItem && k && k.showCheckbox;
        h = e + f + h + (k ? 20 : 0);
        var t = g.useHTML,
            H = a.options.className;
        v || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + b.type + "-series highcharts-color-" + a.colorIndex + (H ? " " + H : "") + (u ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = v = d.text("", w ? e + f : -f, this.baseline || 0, t), c.styledMode || v.css(D(a.visible ? l : r)), v.attr({
          align: w ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(c.styledMode ? 12 : l.fontSize, v), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, v.attr("y", this.baseline)), this.symbolHeight = g.symbolHeight || this.fontMetrics.f, b.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, v, t));
        k && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a);
        this.colorizeItem(a, a.visible);
        !c.styledMode && l.width || v.css({
          width: (g.itemWidth || this.widthOption || c.spacingBox.width) - h + "px"
        });
        this.setText(a);
        c = v.getBBox();
        a.itemWidth = a.checkboxOffset = g.itemWidth || a.legendItemWidth || c.width + h;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || c.height || this.symbolHeight);
      };

      c.prototype.layoutItem = function (a) {
        var c = this.options,
            d = this.padding,
            g = "horizontal" === c.layout,
            e = a.itemHeight,
            f = this.itemMarginBottom,
            l = this.itemMarginTop,
            r = g ? n(c.itemDistance, 20) : 0,
            h = this.maxLegendWidth;
        c = c.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : a.itemWidth;
        g && this.itemX - d + c > h && (this.itemX = d, this.lastLineHeight && (this.itemY += l + this.lastLineHeight + f), this.lastLineHeight = 0);
        this.lastItemY = l + this.itemY + f;
        this.lastLineHeight = Math.max(e, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        g ? this.itemX += c : (this.itemY += l + e + f, this.lastLineHeight = e);
        this.offsetWidth = this.widthOption || Math.max((g ? this.itemX - d - (a.checkbox ? 0 : r) : c) + d, this.offsetWidth);
      };

      c.prototype.getAllItems = function () {
        var a = [];
        this.chart.series.forEach(function (c) {
          var d = c && c.options;
          c && n(d.showInLegend, C(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === d.legendType ? c.data : c)));
        });
        I(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      };

      c.prototype.getAlignment = function () {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      };

      c.prototype.adjustMargins = function (a, c) {
        var d = this.chart,
            g = this.options,
            e = this.getAlignment();
        e && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (f, p) {
          f.test(e) && !C(a[p]) && (d[r[p]] = Math.max(d[r[p]], d.legend[(p + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][p] * g[p % 2 ? "x" : "y"] + n(g.margin, 12) + c[p] + (d.titleOffset[p] || 0)));
        });
      };

      c.prototype.proximatePositions = function () {
        var a = this.chart,
            c = [],
            d = "left" === this.options.align;
        this.allItems.forEach(function (g) {
          var f;
          var p = d;

          if (g.yAxis) {
            g.xAxis.options.reversed && (p = !p);
            g.points && (f = e(p ? g.points : g.points.slice(0).reverse(), function (a) {
              return x(a.plotY);
            }));
            p = this.itemMarginTop + g.legendItem.getBBox().height + this.itemMarginBottom;
            var q = g.yAxis.top - a.plotTop;
            g.visible ? (f = f ? f.plotY : g.yAxis.height, f += q - .3 * p) : f = q + g.yAxis.height;
            c.push({
              target: f,
              size: p,
              item: g
            });
          }
        }, this);
        h.distribute(c, a.plotHeight);
        c.forEach(function (c) {
          c.item._legendItemPos[1] = a.plotTop - a.spacing[0] + c.pos;
        });
      };

      c.prototype.render = function () {
        var a = this.chart,
            c = a.renderer,
            d = this.group,
            g = this.box,
            e = this.options,
            f = this.padding;
        this.itemX = f;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = l(e.width, a.spacingBox.width - f);
        var n = a.spacingBox.width - 2 * f - e.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (n /= 2);
        this.maxLegendWidth = this.widthOption || n;
        d || (this.group = d = c.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = c.g().attr({
          zIndex: 1
        }).add(d), this.scrollGroup = c.g().add(this.contentGroup));
        this.renderTitle();
        var r = this.getAllItems();
        J(r, function (a, c) {
          return (a.options && a.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0);
        });
        e.reversed && r.reverse();
        this.allItems = r;
        this.display = n = !!r.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        r.forEach(this.renderItem, this);
        r.forEach(this.layoutItem, this);
        r = (this.widthOption || this.offsetWidth) + f;
        var h = this.lastItemY + this.lastLineHeight + this.titleHeight;
        h = this.handleOverflow(h);
        h += f;
        g || (this.box = g = c.rect().addClass("highcharts-legend-box").attr({
          r: e.borderRadius
        }).add(d), g.isNew = !0);
        a.styledMode || g.attr({
          stroke: e.borderColor,
          "stroke-width": e.borderWidth || 0,
          fill: e.backgroundColor || "none"
        }).shadow(e.shadow);
        0 < r && 0 < h && (g[g.isNew ? "attr" : "animate"](g.crisp.call({}, {
          x: 0,
          y: 0,
          width: r,
          height: h
        }, g.strokeWidth())), g.isNew = !1);
        g[n ? "show" : "hide"]();
        a.styledMode && "none" === d.getStyle("display") && (r = h = 0);
        this.legendWidth = r;
        this.legendHeight = h;
        n && this.align();
        this.proximate || this.positionItems();
        I(this, "afterRender");
      };

      c.prototype.align = function (a) {
        void 0 === a && (a = this.chart.spacingBox);
        var c = this.chart,
            d = this.options,
            g = a.y;
        /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? g += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] && (g -= c.titleOffset[2]);
        g !== a.y && (a = D(a, {
          y: g
        }));
        this.group.align(D(d, {
          width: this.legendWidth,
          height: this.legendHeight,
          verticalAlign: this.proximate ? "top" : d.verticalAlign
        }), !0, a);
      };

      c.prototype.handleOverflow = function (a) {
        var c = this,
            d = this.chart,
            g = d.renderer,
            e = this.options,
            f = e.y,
            l = this.padding;
        f = d.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - l;

        var r = e.maxHeight,
            h,
            w = this.clipRect,
            v = e.navigation,
            u = n(v.animation, !0),
            b = v.arrowSize || 12,
            k = this.nav,
            t = this.pages,
            H,
            m = this.allItems,
            D = function (a) {
          "number" === typeof a ? w.attr({
            height: a
          }) : w && (c.clipRect = w.destroy(), c.contentGroup.clip());
          c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + l + "px,9999px," + (l + a) + "px,0)" : "auto");
        },
            x = function (a) {
          c[a] = g.circle(0, 0, 1.3 * b).translate(b / 2, b / 2).add(k);
          d.styledMode || c[a].attr("fill", "rgba(0,0,0,0.0001)");
          return c[a];
        };

        "horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (f /= 2);
        r && (f = Math.min(f, r));
        t.length = 0;
        a > f && !1 !== v.enabled ? (this.clipHeight = h = Math.max(f - 20 - this.titleHeight - l, 0), this.currentPage = n(this.currentPage, 1), this.fullHeight = a, m.forEach(function (a, b) {
          var c = a._legendItemPos[1],
              d = Math.round(a.legendItem.getBBox().height),
              g = t.length;
          if (!g || c - t[g - 1] > h && (H || c) !== t[g - 1]) t.push(H || c), g++;
          a.pageIx = g - 1;
          H && (m[b - 1].pageIx = g - 1);
          b === m.length - 1 && c + d - t[g - 1] > h && c !== H && (t.push(c), a.pageIx = g);
          c !== H && (H = c);
        }), w || (w = c.clipRect = g.clipRect(0, l, 9999, 0), c.contentGroup.clip(w)), D(h), k || (this.nav = k = g.g().attr({
          zIndex: 1
        }).add(this.group), this.up = g.symbol("triangle", 0, 0, b, b).add(k), x("upTracker").on("click", function () {
          c.scroll(-1, u);
        }), this.pager = g.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(v.style), this.pager.add(k), this.down = g.symbol("triangle-down", 0, 0, b, b).add(k), x("downTracker").on("click", function () {
          c.scroll(1, u);
        })), c.scroll(0), a = f) : k && (D(), this.nav = k.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      };

      c.prototype.scroll = function (a, c) {
        var d = this,
            g = this.chart,
            e = this.pages,
            f = e.length,
            l = this.currentPage + a;
        a = this.clipHeight;
        var q = this.options.navigation,
            r = this.pager,
            h = this.padding;
        l > f && (l = f);
        0 < l && ("undefined" !== typeof c && F(c, g), this.nav.attr({
          translateX: h,
          translateY: a + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === l ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), r.attr({
          text: l + "/" + f
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": l === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), g.styledMode || (this.up.attr({
          fill: 1 === l ? q.inactiveColor : q.activeColor
        }), this.upTracker.css({
          cursor: 1 === l ? "default" : "pointer"
        }), this.down.attr({
          fill: l === f ? q.inactiveColor : q.activeColor
        }), this.downTracker.css({
          cursor: l === f ? "default" : "pointer"
        })), this.scrollOffset = -e[l - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = l, this.positionCheckboxes(), c = z(n(c, g.renderer.globalAnimation, !0)), w(function () {
          I(d, "afterScroll", {
            currentPage: l
          });
        }, c.duration));
      };

      return c;
    }();

    (/Trident\/7\.0/.test(d.navigator && d.navigator.userAgent) || m) && f(g.prototype, "positionItem", function (c, a) {
      var d = this,
          g = function () {
        a._legendItemPos && c.call(d, a);
      };

      g();
      d.bubbleLegend || setTimeout(g);
    });
    h.Legend = g;
    return h.Legend;
  });
  N(m, "Core/Series/Point.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = f.animObject,
        F = m.defined,
        L = m.erase,
        K = m.extend,
        C = m.fireEvent,
        y = m.format,
        e = m.getNestedProperty,
        I = m.isArray,
        v = m.isNumber,
        x = m.isObject,
        D = m.syncTimeout,
        n = m.pick,
        l = m.removeEvent,
        J = m.uniqueKey;
    "";

    f = function () {
      function f() {
        this.colorIndex = this.category = void 0;
        this.formatPrefix = "point";
        this.id = void 0;
        this.isNull = !1;
        this.percentage = this.options = this.name = void 0;
        this.selected = !1;
        this.total = this.series = void 0;
        this.visible = !0;
        this.x = void 0;
      }

      f.prototype.animateBeforeDestroy = function () {
        var e = this,
            d = {
          x: e.startXPos,
          opacity: 0
        },
            g,
            c = e.getGraphicalProps();
        c.singular.forEach(function (a) {
          g = "dataLabel" === a;
          e[a] = e[a].animate(g ? {
            x: e[a].startXPos,
            y: e[a].startYPos,
            opacity: 0
          } : d);
        });
        c.plural.forEach(function (a) {
          e[a].forEach(function (a) {
            a.element && a.animate(K({
              x: e.startXPos
            }, a.startYPos ? {
              x: a.startXPos,
              y: a.startYPos
            } : {}));
          });
        });
      };

      f.prototype.applyOptions = function (e, d) {
        var g = this.series,
            c = g.options.pointValKey || g.pointValKey;
        e = f.prototype.optionsToObject.call(this, e);
        K(this, e);
        this.options = this.options ? K(this.options, e) : e;
        e.group && delete this.group;
        e.dataLabels && delete this.dataLabels;
        c && (this.y = f.prototype.getNestedProperty.call(this, c));
        this.formatPrefix = (this.isNull = n(this.isValid && !this.isValid(), null === this.x || !v(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && "undefined" === typeof d && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this));
        "undefined" === typeof this.x && g && (this.x = "undefined" === typeof d ? g.autoIncrement(this) : d);
        return this;
      };

      f.prototype.destroy = function () {
        function e() {
          if (d.graphic || d.dataLabel || d.dataLabels) l(d), d.destroyElements();

          for (p in d) d[p] = null;
        }

        var d = this,
            g = d.series,
            c = g.chart;
        g = g.options.dataSorting;
        var a = c.hoverPoints,
            f = z(d.series.chart.renderer.globalAnimation),
            p;
        d.legendItem && c.legend.destroyItem(d);
        a && (d.setState(), L(a, d), a.length || (c.hoverPoints = null));
        if (d === c.hoverPoint) d.onMouseOut();
        g && g.enabled ? (this.animateBeforeDestroy(), D(e, f.duration)) : e();
        c.pointCount--;
      };

      f.prototype.destroyElements = function (e) {
        var d = this;
        e = d.getGraphicalProps(e);
        e.singular.forEach(function (g) {
          d[g] = d[g].destroy();
        });
        e.plural.forEach(function (g) {
          d[g].forEach(function (c) {
            c.element && c.destroy();
          });
          delete d[g];
        });
      };

      f.prototype.firePointEvent = function (e, d, g) {
        var c = this,
            a = this.series.options;
        (a.point.events[e] || c.options && c.options.events && c.options.events[e]) && c.importEvents();
        "click" === e && a.allowPointSelect && (g = function (a) {
          c.select && c.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        C(c, e, d, g);
      };

      f.prototype.getClassName = function () {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      };

      f.prototype.getGraphicalProps = function (e) {
        var d = this,
            g = [],
            c,
            a = {
          singular: [],
          plural: []
        };
        e = e || {
          graphic: 1,
          dataLabel: 1
        };
        e.graphic && g.push("graphic", "shadowGroup");
        e.dataLabel && g.push("dataLabel", "dataLabelUpper", "connector");

        for (c = g.length; c--;) {
          var f = g[c];
          d[f] && a.singular.push(f);
        }

        ["dataLabel", "connector"].forEach(function (c) {
          var g = c + "s";
          e[c] && d[g] && a.plural.push(g);
        });
        return a;
      };

      f.prototype.getLabelConfig = function () {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      };

      f.prototype.getNestedProperty = function (f) {
        if (f) return 0 === f.indexOf("custom.") ? e(f, this.options) : this[f];
      };

      f.prototype.getZone = function () {
        var e = this.series,
            d = e.zones;
        e = e.zoneAxis || "y";
        var g = 0,
            c;

        for (c = d[g]; this[e] >= c.value;) c = d[++g];

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = c && c.color && !this.options.color ? c.color : this.nonZonedColor;
        return c;
      };

      f.prototype.hasNewShapeType = function () {
        return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
      };

      f.prototype.init = function (e, d, g) {
        this.series = e;
        this.applyOptions(d, g);
        this.id = F(this.id) ? this.id : J();
        this.resolveColor();
        e.chart.pointCount++;
        C(this, "afterInit");
        return this;
      };

      f.prototype.optionsToObject = function (e) {
        var d = {},
            g = this.series,
            c = g.options.keys,
            a = c || g.pointArrayMap || ["y"],
            l = a.length,
            p = 0,
            n = 0;
        if (v(e) || null === e) d[a[0]] = e;else if (I(e)) for (!c && e.length > l && (g = typeof e[0], "string" === g ? d.name = e[0] : "number" === g && (d.x = e[0]), p++); n < l;) c && "undefined" === typeof e[p] || (0 < a[n].indexOf(".") ? f.prototype.setNestedProperty(d, e[p], a[n]) : d[a[n]] = e[p]), p++, n++;else "object" === typeof e && (d = e, e.dataLabels && (g._hasPointLabels = !0), e.marker && (g._hasPointMarkers = !0));
        return d;
      };

      f.prototype.resolveColor = function () {
        var e = this.series;
        var d = e.chart.options.chart.colorCount;
        var g = e.chart.styledMode;
        delete this.nonZonedColor;
        g || this.options.color || (this.color = e.color);
        e.options.colorByPoint ? (g || (d = e.options.colors || e.chart.options.colors, this.color = this.color || d[e.colorCounter], d = d.length), g = e.colorCounter, e.colorCounter++, e.colorCounter === d && (e.colorCounter = 0)) : g = e.colorIndex;
        this.colorIndex = n(this.colorIndex, g);
      };

      f.prototype.setNestedProperty = function (e, d, g) {
        g.split(".").reduce(function (c, a, g, e) {
          c[a] = e.length - 1 === g ? d : x(c[a], !0) ? c[a] : {};
          return c[a];
        }, e);
        return e;
      };

      f.prototype.tooltipFormatter = function (e) {
        var d = this.series,
            g = d.tooltipOptions,
            c = n(g.valueDecimals, ""),
            a = g.valuePrefix || "",
            f = g.valueSuffix || "";
        d.chart.styledMode && (e = d.chart.tooltip.styledModeFormat(e));
        (d.pointArrayMap || ["y"]).forEach(function (d) {
          d = "{point." + d;
          if (a || f) e = e.replace(RegExp(d + "}", "g"), a + d + "}" + f);
          e = e.replace(RegExp(d + "}", "g"), d + ":,." + c + "f}");
        });
        return y(e, {
          point: this,
          series: this.series
        }, d.chart);
      };

      return f;
    }();

    return h.Point = f;
  });
  N(m, "Core/Series/Series.js", [m["Core/Globals.js"], m["Core/Series/Point.js"], m["Core/Utilities.js"]], function (f, h, m) {
    var z = m.error,
        F = m.extendClass,
        L = m.fireEvent,
        K = m.getOptions,
        C = m.isObject,
        y = m.merge,
        e = m.objectEach;

    m = function () {
      function f(e, h) {
        var v = y(f.defaultOptions, h);
        this.chart = e;
        this._i = e.series.length;
        e.series.push(this);
        this.options = v;
        this.userOptions = y(h);
      }

      f.addSeries = function (e, h) {
        f.seriesTypes[e] = h;
      };

      f.cleanRecursively = function (h, m) {
        var v = {};
        e(h, function (e, l) {
          if (C(h[l], !0) && !h.nodeType && m[l]) e = f.cleanRecursively(h[l], m[l]), Object.keys(e).length && (v[l] = e);else if (C(h[l]) || h[l] !== m[l]) v[l] = h[l];
        });
        return v;
      };

      f.getSeries = function (e, h) {
        void 0 === h && (h = {});
        var v = e.options.chart;
        v = h.type || v.type || v.defaultSeriesType || "";
        var n = f.seriesTypes[v];
        n || z(17, !0, e, {
          missingModuleFor: v
        });
        return new n(e, h);
      };

      f.seriesType = function (e, m, D, n, l) {
        var v = K().plotOptions || {},
            w = f.seriesTypes;
        m = m || "";
        v[e] = y(v[m], D);
        f.addSeries(e, F(w[m] || function () {}, n));
        w[e].prototype.type = e;
        l && (w[e].prototype.pointClass = F(h, l));
        return w[e];
      };

      f.prototype.update = function (e, h) {
        void 0 === h && (h = !0);
        var m = this;
        e = f.cleanRecursively(e, this.userOptions);
        var n = e.type;
        "undefined" !== typeof n && n !== m.type && (m = f.getSeries(m.chart, e));
        L(m, "update", {
          newOptions: e
        });
        m.userOptions = y(e);
        L(m, "afterUpdate", {
          newOptions: e
        });
        h && m.chart.redraw();
        return m;
      };

      f.defaultOptions = {
        type: "base"
      };
      f.seriesTypes = {};
      return f;
    }();

    m.prototype.pointClass = h;
    f.seriesType = m.seriesType;
    f.seriesTypes = m.seriesTypes;
    return m;
  });
  N(m, "Core/Chart/Chart.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Axis/Axis.js"], m["Core/Series/Series.js"], m["Core/Globals.js"], m["Core/Legend.js"], m["Core/MSPointer.js"], m["Core/Options.js"], m["Core/Pointer.js"], m["Core/Time.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K, C, y, e) {
    var I = f.animate,
        v = f.animObject,
        x = f.setAnimation,
        D = z.charts,
        n = z.doc,
        l = z.win,
        J = K.defaultOptions,
        w = e.addEvent,
        r = e.attr,
        d = e.createElement,
        g = e.css,
        c = e.defined,
        a = e.discardElement,
        q = e.erase,
        p = e.error,
        B = e.extend,
        A = e.find,
        G = e.fireEvent,
        M = e.getStyle,
        T = e.isArray,
        Q = e.isFunction,
        O = e.isNumber,
        E = e.isObject,
        u = e.isString,
        b = e.merge,
        k = e.numberFormat,
        t = e.objectEach,
        H = e.pick,
        R = e.pInt,
        U = e.relativeLength,
        Z = e.removeEvent,
        aa = e.splat,
        ba = e.syncTimeout,
        S = e.uniqueKey,
        Y = z.marginNames,
        W = function () {
      function f(a, b, c) {
        this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
        this.getArgs(a, b, c);
      }

      f.prototype.getArgs = function (a, b, c) {
        u(a) || a.nodeName ? (this.renderTo = a, this.init(b, c)) : this.init(a, b);
      };

      f.prototype.init = function (a, c) {
        var d,
            g = a.series,
            e = a.plotOptions || {};
        G(this, "init", {
          args: arguments
        }, function () {
          a.series = null;
          d = b(J, a);
          var f = d.chart || {};
          t(d.plotOptions, function (a, c) {
            E(a) && (a.tooltip = e[c] && b(e[c].tooltip) || void 0);
          });
          d.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          d.series = a.series = g;
          this.userOptions = a;
          var p = f.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = c;
          this.isResizing = 0;
          this.options = d;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new y(a.time) : z.time;
          this.numberFormatter = f.numberFormatter || k;
          this.styledMode = f.styledMode;
          this.hasCartesianSeries = f.showAxes;
          var l = this;
          l.index = D.length;
          D.push(l);
          z.chartCount++;
          p && t(p, function (a, b) {
            Q(a) && w(l, b, a);
          });
          l.xAxis = [];
          l.yAxis = [];
          l.pointCount = l.colorCounter = l.symbolCounter = 0;
          G(l, "afterInit");
          l.firstRender();
        });
      };

      f.prototype.initSeries = function (a) {
        var b = this.options.chart;
        b = a.type || b.type || b.defaultSeriesType;
        var c = m.seriesTypes[b];
        c || p(17, !0, this, {
          missingModuleFor: b
        });
        b = new c(this, a);
        "function" === typeof b.init && b.init(this, a);
        return b;
      };

      f.prototype.setSeriesData = function () {
        this.getSeriesOrderByLinks().forEach(function (a) {
          a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1);
        });
      };

      f.prototype.getSeriesOrderByLinks = function () {
        return this.series.concat().sort(function (a, b) {
          return a.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - a.linkedSeries.length : 0;
        });
      };

      f.prototype.orderSeries = function (a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].getName());
      };

      f.prototype.isInsidePlot = function (a, b, c) {
        var d = c ? b : a;
        a = c ? a : b;
        d = {
          x: d,
          y: a,
          isInsidePlot: 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        };
        G(this, "afterIsInsidePlot", d);
        return d.isInsidePlot;
      };

      f.prototype.redraw = function (a) {
        G(this, "beforeRedraw");
        var b = this,
            c = b.axes,
            d = b.series,
            g = b.pointer,
            k = b.legend,
            e = b.userOptions.legend,
            f = b.isDirtyLegend,
            t = b.hasCartesianSeries,
            p = b.isDirtyBox,
            l = b.renderer,
            q = l.isHidden(),
            h = [];
        b.setResponsive && b.setResponsive(!1);
        x(b.hasRendered ? a : !1, b);
        q && b.temporaryDisplay();
        b.layOutTitles();

        for (a = d.length; a--;) {
          var n = d[a];

          if (n.options.stacking) {
            var u = !0;

            if (n.isDirty) {
              var r = !0;
              break;
            }
          }
        }

        if (r) for (a = d.length; a--;) n = d[a], n.options.stacking && (n.isDirty = !0);
        d.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), f = !0) : e && (e.labelFormatter || e.labelFormat) && (f = !0));
          a.isDirtyData && G(a, "updatedData");
        });
        f && k && k.options.enabled && (k.render(), b.isDirtyLegend = !1);
        u && b.getStacks();
        t && c.forEach(function (a) {
          b.isResizing && O(a.min) || (a.updateNames(), a.setScale());
        });
        b.getMargins();
        t && (c.forEach(function (a) {
          a.isDirty && (p = !0);
        }), c.forEach(function (a) {
          var b = a.min + "," + a.max;
          a.extKey !== b && (a.extKey = b, h.push(function () {
            G(a, "afterSetExtremes", B(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (p || u) && a.redraw();
        }));
        p && b.drawChartBox();
        G(b, "predraw");
        d.forEach(function (a) {
          (p || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        g && g.reset(!0);
        l.draw();
        G(b, "redraw");
        G(b, "render");
        q && b.temporaryDisplay(!0);
        h.forEach(function (a) {
          a.call();
        });
      };

      f.prototype.get = function (a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var c = this.series,
            d;
        var g = A(this.axes, b) || A(this.series, b);

        for (d = 0; !g && d < c.length; d++) g = A(c[d].points || [], b);

        return g;
      };

      f.prototype.getAxes = function () {
        var a = this,
            b = this.options,
            c = b.xAxis = aa(b.xAxis || {});
        b = b.yAxis = aa(b.yAxis || {});
        G(this, "getAxes");
        c.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        b.forEach(function (a, b) {
          a.index = b;
        });
        c.concat(b).forEach(function (b) {
          new h(a, b);
        });
        G(this, "afterGetAxes");
      };

      f.prototype.getSelectedPoints = function () {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat(b.getPointsCollection().filter(function (a) {
            return H(a.selectedStaging, a.selected);
          }));
        });
        return a;
      };

      f.prototype.getSelectedSeries = function () {
        return this.series.filter(function (a) {
          return a.selected;
        });
      };

      f.prototype.setTitle = function (a, b, c) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", b);
        this.applyDescription("caption", void 0);
        this.layOutTitles(c);
      };

      f.prototype.applyDescription = function (a, c) {
        var d = this,
            g = "title" === a ? {
          color: "#333333",
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: "#666666"
        };
        g = this.options[a] = b(!this.styledMode && {
          style: g
        }, this.options[a], c);
        var k = this[a];
        k && c && (this[a] = k = k.destroy());
        g && !k && (k = this.renderer.text(g.text, 0, 0, g.useHTML).attr({
          align: g.align,
          "class": "highcharts-" + a,
          zIndex: g.zIndex || 4
        }).add(), k.update = function (b) {
          d[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](b);
        }, this.styledMode || k.css(g.style), this[a] = k);
      };

      f.prototype.layOutTitles = function (a) {
        var b = [0, 0, 0],
            c = this.renderer,
            d = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var g = this[a],
              k = this.options[a],
              e = k.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === e ? b[0] + 2 : 0;

          if (g) {
            if (!this.styledMode) var f = k.style.fontSize;
            f = c.fontMetrics(f, g).b;
            g.css({
              width: (k.width || d.width + (k.widthAdjust || 0)) + "px"
            });
            var t = Math.round(g.getBBox(k.useHTML).height);
            g.align(B({
              y: "bottom" === e ? f : a + f,
              height: t
            }, k), !1, "spacingBox");
            k.floating || ("top" === e ? b[0] = Math.ceil(b[0] + t) : "bottom" === e && (b[2] = Math.ceil(b[2] + t)));
          }
        }, this);
        b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
        b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
        var g = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
        this.titleOffset = b;
        G(this, "afterLayOutTitles");
        !this.isDirtyBox && g && (this.isDirtyBox = this.isDirtyLegend = g, this.hasRendered && H(a, !0) && this.isDirtyBox && this.redraw());
      };

      f.prototype.getChartSize = function () {
        var a = this.options.chart,
            b = a.width;
        a = a.height;
        var d = this.renderTo;
        c(b) || (this.containerWidth = M(d, "width"));
        c(a) || (this.containerHeight = M(d, "height"));
        this.chartWidth = Math.max(0, b || this.containerWidth || 600);
        this.chartHeight = Math.max(0, U(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      };

      f.prototype.temporaryDisplay = function (a) {
        var b = this.renderTo;
        if (a) for (; b && b.style;) b.hcOrigStyle && (g(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (n.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode;else for (; b && b.style;) {
          n.body.contains(b) || b.parentNode || (b.hcOrigDetached = !0, n.body.appendChild(b));
          if ("none" === M(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = {
            display: b.style.display,
            height: b.style.height,
            overflow: b.style.overflow
          }, a = {
            display: "block",
            overflow: "hidden"
          }, b !== this.renderTo && (a.height = 0), g(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important");
          b = b.parentNode;
          if (b === n.body) break;
        }
      };

      f.prototype.setClassName = function (a) {
        this.container.className = "highcharts-container " + (a || "");
      };

      f.prototype.getContainer = function () {
        var a = this.options,
            b = a.chart;
        var c = this.renderTo;
        var k = S(),
            e,
            f;
        c || (this.renderTo = c = b.renderTo);
        u(c) && (this.renderTo = c = n.getElementById(c));
        c || p(13, !0, this);
        var t = R(r(c, "data-highcharts-chart"));
        O(t) && D[t] && D[t].hasRendered && D[t].destroy();
        r(c, "data-highcharts-chart", this.index);
        c.innerHTML = "";
        b.skipClone || c.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        t = this.chartWidth;
        var l = this.chartHeight;
        g(c, {
          overflow: "hidden"
        });
        this.styledMode || (e = B({
          position: "relative",
          overflow: "hidden",
          width: t + "px",
          height: l + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          userSelect: "none"
        }, b.style));
        this.container = c = d("div", {
          id: k
        }, e, c);
        this._cursor = c.style.cursor;
        this.renderer = new (z[b.renderer] || z.Renderer)(c, t, l, null, b.forExport, a.exporting && a.exporting.allowHTML, this.styledMode);
        x(void 0, this);
        this.setClassName(b.className);
        if (this.styledMode) for (f in a.defs) this.renderer.definition(a.defs[f]);else this.renderer.setStyle(b.style);
        this.renderer.chartIndex = this.index;
        G(this, "afterGetContainer");
      };

      f.prototype.getMargins = function (a) {
        var b = this.spacing,
            d = this.margin,
            g = this.titleOffset;
        this.resetMargins();
        g[0] && !c(d[0]) && (this.plotTop = Math.max(this.plotTop, g[0] + b[0]));
        g[2] && !c(d[2]) && (this.marginBottom = Math.max(this.marginBottom, g[2] + b[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(d, b);
        G(this, "getMargins");
        a || this.getAxisMargins();
      };

      f.prototype.getAxisMargins = function () {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            d = a.colorAxis,
            g = a.margin,
            k = function (a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? k(a.axes) : d && d.length && k(d);
        Y.forEach(function (d, k) {
          c(g[k]) || (a[d] += b[k]);
        });
        a.setChartSize();
      };

      f.prototype.reflow = function (a) {
        var b = this,
            d = b.options.chart,
            g = b.renderTo,
            k = c(d.width) && c(d.height),
            f = d.width || M(g, "width");
        d = d.height || M(g, "height");
        g = a ? a.target : l;

        if (!k && !b.isPrinting && f && d && (g === l || g === n)) {
          if (f !== b.containerWidth || d !== b.containerHeight) e.clearTimeout(b.reflowTimeout), b.reflowTimeout = ba(function () {
            b.container && b.setSize(void 0, void 0, !1);
          }, a ? 100 : 0);
          b.containerWidth = f;
          b.containerHeight = d;
        }
      };

      f.prototype.setReflow = function (a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = w(l, "resize", function (a) {
          b.options && b.reflow(a);
        }), w(this, "destroy", this.unbindReflow));
      };

      f.prototype.setSize = function (a, b, c) {
        var d = this,
            k = d.renderer;
        d.isResizing += 1;
        x(c, d);
        c = k.globalAnimation;
        d.oldChartHeight = d.chartHeight;
        d.oldChartWidth = d.chartWidth;
        "undefined" !== typeof a && (d.options.chart.width = a);
        "undefined" !== typeof b && (d.options.chart.height = b);
        d.getChartSize();
        d.styledMode || (c ? I : g)(d.container, {
          width: d.chartWidth + "px",
          height: d.chartHeight + "px"
        }, c);
        d.setChartSize(!0);
        k.setSize(d.chartWidth, d.chartHeight, c);
        d.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        d.isDirtyLegend = !0;
        d.isDirtyBox = !0;
        d.layOutTitles();
        d.getMargins();
        d.redraw(c);
        d.oldChartHeight = null;
        G(d, "resize");
        ba(function () {
          d && G(d, "endResize", null, function () {
            --d.isResizing;
          });
        }, v(c).duration);
      };

      f.prototype.setChartSize = function (a) {
        var b = this.inverted,
            c = this.renderer,
            d = this.chartWidth,
            g = this.chartHeight,
            k = this.options.chart,
            e = this.spacing,
            f = this.clipOffset,
            t,
            p,
            l,
            q;
        this.plotLeft = t = Math.round(this.plotLeft);
        this.plotTop = p = Math.round(this.plotTop);
        this.plotWidth = l = Math.max(0, Math.round(d - t - this.marginRight));
        this.plotHeight = q = Math.max(0, Math.round(g - p - this.marginBottom));
        this.plotSizeX = b ? q : l;
        this.plotSizeY = b ? l : q;
        this.plotBorderWidth = k.plotBorderWidth || 0;
        this.spacingBox = c.spacingBox = {
          x: e[3],
          y: e[0],
          width: d - e[3] - e[1],
          height: g - e[0] - e[2]
        };
        this.plotBox = c.plotBox = {
          x: t,
          y: p,
          width: l,
          height: q
        };
        d = 2 * Math.floor(this.plotBorderWidth / 2);
        b = Math.ceil(Math.max(d, f[3]) / 2);
        c = Math.ceil(Math.max(d, f[0]) / 2);
        this.clipBox = {
          x: b,
          y: c,
          width: Math.floor(this.plotSizeX - Math.max(d, f[1]) / 2 - b),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, f[2]) / 2 - c))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        G(this, "afterSetChartSize", {
          skipAxes: a
        });
      };

      f.prototype.resetMargins = function () {
        G(this, "resetMargins");
        var a = this,
            b = a.options.chart;
        ["margin", "spacing"].forEach(function (c) {
          var d = b[c],
              g = E(d) ? d : [d, d, d, d];
          ["Top", "Right", "Bottom", "Left"].forEach(function (d, k) {
            a[c][k] = H(b[c + d], g[k]);
          });
        });
        Y.forEach(function (b, c) {
          a[b] = H(a.margin[c], a.spacing[c]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      };

      f.prototype.drawChartBox = function () {
        var a = this.options.chart,
            b = this.renderer,
            c = this.chartWidth,
            d = this.chartHeight,
            g = this.chartBackground,
            k = this.plotBackground,
            e = this.plotBorder,
            f = this.styledMode,
            t = this.plotBGImage,
            p = a.backgroundColor,
            l = a.plotBackgroundColor,
            q = a.plotBackgroundImage,
            h,
            n = this.plotLeft,
            u = this.plotTop,
            r = this.plotWidth,
            m = this.plotHeight,
            w = this.plotBox,
            v = this.clipRect,
            H = this.clipBox,
            B = "animate";
        g || (this.chartBackground = g = b.rect().addClass("highcharts-background").add(), B = "attr");
        if (f) var A = h = g.strokeWidth();else {
          A = a.borderWidth || 0;
          h = A + (a.shadow ? 8 : 0);
          p = {
            fill: p || "none"
          };
          if (A || g["stroke-width"]) p.stroke = a.borderColor, p["stroke-width"] = A;
          g.attr(p).shadow(a.shadow);
        }
        g[B]({
          x: h / 2,
          y: h / 2,
          width: c - h - A % 2,
          height: d - h - A % 2,
          r: a.borderRadius
        });
        B = "animate";
        k || (B = "attr", this.plotBackground = k = b.rect().addClass("highcharts-plot-background").add());
        k[B](w);
        f || (k.attr({
          fill: l || "none"
        }).shadow(a.plotShadow), q && (t ? (q !== t.attr("href") && t.attr("href", q), t.animate(w)) : this.plotBGImage = b.image(q, n, u, r, m).add()));
        v ? v.animate({
          width: H.width,
          height: H.height
        }) : this.clipRect = b.clipRect(H);
        B = "animate";
        e || (B = "attr", this.plotBorder = e = b.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        f || e.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        e[B](e.crisp({
          x: n,
          y: u,
          width: r,
          height: m
        }, -e.strokeWidth()));
        this.isDirtyBox = !1;
        G(this, "afterDrawChartBox");
      };

      f.prototype.propFromSeries = function () {
        var a = this,
            b = a.options.chart,
            c,
            d = a.options.series,
            g,
            k;
        ["inverted", "angular", "polar"].forEach(function (e) {
          c = m.seriesTypes[b.type || b.defaultSeriesType];
          k = b[e] || c && c.prototype[e];

          for (g = d && d.length; !k && g--;) (c = m.seriesTypes[d[g].type]) && c.prototype[e] && (k = !0);

          a[e] = k;
        });
      };

      f.prototype.linkSeries = function () {
        var a = this,
            b = a.series;
        b.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        b.forEach(function (b) {
          var c = b.options.linkedTo;
          u(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, c.enabledDataSorting && b.setDataSortingOptions(), b.visible = H(b.options.visible, c.options.visible, b.visible));
        });
        G(this, "afterLinkSeries");
      };

      f.prototype.renderSeries = function () {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      };

      f.prototype.renderLabels = function () {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (c) {
          var d = B(b.style, c.style),
              g = R(d.left) + a.plotLeft,
              k = R(d.top) + a.plotTop + 12;
          delete d.left;
          delete d.top;
          a.renderer.text(c.html, g, k).attr({
            zIndex: 2
          }).css(d).add();
        });
      };

      f.prototype.render = function () {
        var a = this.axes,
            b = this.colorAxis,
            c = this.renderer,
            d = this.options,
            g = 0,
            k = function (a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new F(this, d.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        d = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return g = 21, !0;
        });
        var e = this.plotHeight = Math.max(this.plotHeight - g, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var f = 1.1 < d / this.plotWidth;
        var t = 1.05 < e / this.plotHeight;
        if (f || t) a.forEach(function (a) {
          (a.horiz && f || !a.horiz && t) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? k(a) : b && b.length && k(b);
        this.seriesGroup || (this.seriesGroup = c.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.updateContainerScaling();
        this.hasRendered = !0;
      };

      f.prototype.addCredits = function (a) {
        var c = this,
            d = b(!0, this.options.credits, a);
        d.enabled && !this.credits && (this.credits = this.renderer.text(d.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          d.href && (l.location.href = d.href);
        }).attr({
          align: d.position.align,
          zIndex: 8
        }), c.styledMode || this.credits.css(d.style), this.credits.add().align(d.position), this.credits.update = function (a) {
          c.credits = c.credits.destroy();
          c.addCredits(a);
        });
      };

      f.prototype.updateContainerScaling = function () {
        var a = this.container;

        if (2 < a.offsetWidth && 2 < a.offsetHeight && a.getBoundingClientRect) {
          var b = a.getBoundingClientRect(),
              c = b.width / a.offsetWidth;
          a = b.height / a.offsetHeight;
          1 !== c || 1 !== a ? this.containerScaling = {
            scaleX: c,
            scaleY: a
          } : delete this.containerScaling;
        }
      };

      f.prototype.destroy = function () {
        var b = this,
            c = b.axes,
            d = b.series,
            g = b.container,
            k,
            e = g && g.parentNode;
        G(b, "destroy");
        b.renderer.forExport ? q(D, b) : D[b.index] = void 0;
        z.chartCount--;
        b.renderTo.removeAttribute("data-highcharts-chart");
        Z(b);

        for (k = c.length; k--;) c[k] = c[k].destroy();

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (k = d.length; k--;) d[k] = d[k].destroy();

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (a) {
          var c = b[a];
          c && c.destroy && (b[a] = c.destroy());
        });
        g && (g.innerHTML = "", Z(g), e && a(g));
        t(b, function (a, c) {
          delete b[c];
        });
      };

      f.prototype.firstRender = function () {
        var a = this,
            b = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (T(b.series) ? b.series : []).forEach(function (b) {
            a.initSeries(b);
          });
          a.linkSeries();
          a.setSeriesData();
          G(a, "beforeRender");
          C && (a.pointer = z.hasTouch || !l.PointerEvent && !l.MSPointerEvent ? new C(a, b) : new L(a, b));
          a.render();
          if (!a.renderer.imgCount && !a.hasLoaded) a.onload();
          a.temporaryDisplay(!0);
        }
      };

      f.prototype.onload = function () {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && "undefined" !== typeof this.index && a.apply(this, [this]);
        }, this);
        G(this, "load");
        G(this, "render");
        c(this.index) && this.setReflow(this.options.chart.reflow);
        this.hasLoaded = !0;
      };

      return f;
    }();

    W.prototype.callbacks = [];

    z.chart = function (a, b, c) {
      return new W(a, b, c);
    };

    return z.Chart = W;
  });
  N(m, "Extensions/ScrollablePlotArea.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.stop,
        L = z.addEvent,
        K = z.createElement,
        C = z.pick;
    "";
    L(h, "afterSetChartSize", function (f) {
      var e = this.options.chart.scrollablePlotArea,
          h = e && e.minWidth;
      e = e && e.minHeight;

      if (!this.renderer.forExport) {
        if (h) {
          if (this.scrollablePixelsX = h = Math.max(0, h - this.chartWidth)) {
            this.plotWidth += h;
            this.inverted ? (this.clipBox.height += h, this.plotBox.height += h) : (this.clipBox.width += h, this.plotBox.width += h);
            var v = {
              1: {
                name: "right",
                value: h
              }
            };
          }
        } else e && (this.scrollablePixelsY = h = Math.max(0, e - this.chartHeight)) && (this.plotHeight += h, this.inverted ? (this.clipBox.width += h, this.plotBox.width += h) : (this.clipBox.height += h, this.plotBox.height += h), v = {
          2: {
            name: "bottom",
            value: h
          }
        });

        v && !f.skipAxes && this.axes.forEach(function (e) {
          v[e.side] ? e.getPlotLinePath = function () {
            var f = v[e.side].name,
                h = this[f];
            this[f] = h - v[e.side].value;
            var l = m.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[f] = h;
            return l;
          } : (e.setAxisSize(), e.setAxisTranslation());
        });
      }
    });
    L(h, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    h.prototype.setUpScrolling = function () {
      var f = this,
          e = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (e.overflowX = "auto");
      this.scrollablePixelsY && (e.overflowY = "auto");
      this.scrollingParent = K("div", {
        className: "highcharts-scrolling-parent"
      }, {
        position: "relative"
      }, this.renderTo);
      this.scrollingContainer = K("div", {
        className: "highcharts-scrolling"
      }, e, this.scrollingParent);
      L(this.scrollingContainer, "scroll", function () {
        f.pointer && delete f.pointer.chartPosition;
      });
      this.innerContainer = K("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    h.prototype.moveFixedElements = function () {
      var f = this.container,
          e = this.fixedRenderer,
          h = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
          m;
      this.scrollablePixelsX && !this.inverted ? m = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? m = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? m = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (m = ".highcharts-yaxis");
      h.push(m, m + "-labels");
      h.forEach(function (h) {
        [].forEach.call(f.querySelectorAll(h), function (f) {
          (f.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(f);
          f.style.pointerEvents = "auto";
        });
      });
    };

    h.prototype.applyFixed = function () {
      var f,
          e,
          h = !this.fixedDiv,
          v = this.options.chart.scrollablePlotArea;
      h ? (this.fixedDiv = K("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2,
        top: 0
      }, null, !0), null === (f = this.scrollingContainer) || void 0 === f ? void 0 : f.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = f = new m.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (e = this.options.chart) || void 0 === e ? void 0 : e.style), this.scrollableMask = f.path().attr({
        fill: this.options.chart.backgroundColor || "#fff",
        "fill-opacity": C(v.opacity, .85),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), L(this, "afterShowResetZoom", this.moveFixedElements), L(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      e = this.chartWidth + (this.scrollablePixelsX || 0);
      f = this.chartHeight + (this.scrollablePixelsY || 0);
      F(this.container);
      this.container.style.width = e + "px";
      this.container.style.height = f + "px";
      this.renderer.boxWrapper.attr({
        width: e,
        height: f,
        viewBox: [0, 0, e, f].join(" ")
      });
      this.chartBackground.attr({
        width: e,
        height: f
      });
      this.scrollingContainer.style.height = this.chartHeight + "px";
      h && (v.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * v.scrollPositionX), v.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * v.scrollPositionY));
      f = this.axisOffset;
      h = this.plotTop - f[0] - 1;
      v = this.plotLeft - f[3] - 1;
      e = this.plotTop + this.plotHeight + f[2] + 1;
      f = this.plotLeft + this.plotWidth + f[1] + 1;
      var x = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          D = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      h = this.scrollablePixelsX ? [["M", 0, h], ["L", this.plotLeft - 1, h], ["L", this.plotLeft - 1, e], ["L", 0, e], ["Z"], ["M", x, h], ["L", this.chartWidth, h], ["L", this.chartWidth, e], ["L", x, e], ["Z"]] : this.scrollablePixelsY ? [["M", v, 0], ["L", v, this.plotTop - 1], ["L", f, this.plotTop - 1], ["L", f, 0], ["Z"], ["M", v, D], ["L", v, this.chartHeight], ["L", f, this.chartHeight], ["L", f, D], ["Z"]] : [["M", 0, 0]];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: h
      });
    };
  });
  N(m, "Core/Axis/StackingAxis.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = f.getDeferredAnimation,
        z = h.addEvent,
        F = h.destroyObjectProperties,
        L = h.fireEvent,
        K = h.objectEach,
        C = h.pick,
        y = function () {
      function e(e) {
        this.oldStacks = {};
        this.stacks = {};
        this.stacksTouched = 0;
        this.axis = e;
      }

      e.prototype.buildStacks = function () {
        var e = this.axis,
            f = e.series,
            h = C(e.options.reversedStacks, !0),
            m = f.length,
            n;

        if (!e.isXAxis) {
          this.usePercentage = !1;

          for (n = m; n--;) {
            var l = f[h ? n : m - n - 1];
            l.setStackedPoints();
            l.setGroupedPoints();
          }

          for (n = 0; n < m; n++) f[n].modifyStacks();

          L(e, "afterBuildStacks");
        }
      };

      e.prototype.cleanStacks = function () {
        if (!this.axis.isXAxis) {
          if (this.oldStacks) var e = this.stacks = this.oldStacks;
          K(e, function (e) {
            K(e, function (e) {
              e.cumulative = e.total;
            });
          });
        }
      };

      e.prototype.resetStacks = function () {
        var e = this,
            f = e.stacks;
        e.axis.isXAxis || K(f, function (f) {
          K(f, function (h, n) {
            h.touched < e.stacksTouched ? (h.destroy(), delete f[n]) : (h.total = null, h.cumulative = null);
          });
        });
      };

      e.prototype.renderStackTotals = function () {
        var e = this.axis,
            f = e.chart,
            h = f.renderer,
            D = this.stacks;
        e = m(f, e.options.stackLabels.animation);
        var n = this.stackTotalGroup = this.stackTotalGroup || h.g("stack-labels").attr({
          visibility: "visible",
          zIndex: 6,
          opacity: 0
        }).add();
        n.translate(f.plotLeft, f.plotTop);
        K(D, function (e) {
          K(e, function (e) {
            e.render(n);
          });
        });
        n.animate({
          opacity: 1
        }, e);
      };

      return e;
    }();

    return function () {
      function e() {}

      e.compose = function (f) {
        z(f, "init", e.onInit);
        z(f, "destroy", e.onDestroy);
      };

      e.onDestroy = function () {
        var e = this.stacking;

        if (e) {
          var f = e.stacks;
          K(f, function (e, h) {
            F(e);
            f[h] = null;
          });
          e && e.stackTotalGroup && e.stackTotalGroup.destroy();
        }
      };

      e.onInit = function () {
        this.stacking || (this.stacking = new y(this));
      };

      return e;
    }();
  });
  N(m, "Mixins/LegendSymbol.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.merge,
        z = h.pick;
    return f.LegendSymbolMixin = {
      drawRectangle: function (f, h) {
        var m = f.symbolHeight,
            C = f.options.squareSymbol;
        h.legendSymbol = this.chart.renderer.rect(C ? (f.symbolWidth - m) / 2 : 0, f.baseline - m + 1, C ? m : f.symbolWidth, m, z(f.options.symbolRadius, m / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(h.legendGroup);
      },
      drawLineMarker: function (f) {
        var h = this.options,
            F = h.marker,
            C = f.symbolWidth,
            y = f.symbolHeight,
            e = y / 2,
            I = this.chart.renderer,
            v = this.legendGroup;
        f = f.baseline - Math.round(.3 * f.fontMetrics.b);
        var x = {};
        this.chart.styledMode || (x = {
          "stroke-width": h.lineWidth || 0
        }, h.dashStyle && (x.dashstyle = h.dashStyle));
        this.legendLine = I.path([["M", 0, f], ["L", C, f]]).addClass("highcharts-graph").attr(x).add(v);
        F && !1 !== F.enabled && C && (h = Math.min(z(F.radius, e), e), 0 === this.symbol.indexOf("url") && (F = m(F, {
          width: y,
          height: y
        }), h = 0), this.legendSymbol = F = I.symbol(this.symbol, C / 2 - h, f - h, 2 * h, 2 * h, F).addClass("highcharts-point").add(v), F.isMarker = !0);
      }
    };
  });
  N(m, "Core/Series/CartesianSeries.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Series/Series.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Renderer/SVG/SVGElement.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K, C) {
    var y = f.animObject,
        e = F.defaultOptions,
        I = C.addEvent,
        v = C.arrayMax,
        x = C.arrayMin,
        D = C.clamp,
        n = C.correctFloat,
        l = C.defined,
        J = C.erase,
        w = C.error,
        r = C.extend,
        d = C.find,
        g = C.fireEvent,
        c = C.getNestedProperty,
        a = C.isArray,
        q = C.isFunction,
        p = C.isNumber,
        B = C.isString,
        A = C.merge,
        G = C.objectEach,
        M = C.pick,
        T = C.removeEvent,
        Q = C.splat,
        O = C.syncTimeout;
    "";
    var E = h.seriesTypes,
        u = m.win;
    f = h.seriesType("line", void 0, {
      lineWidth: 2,
      allowPointSelect: !1,
      crisp: !0,
      showCheckbox: !1,
      animation: {
        duration: 1E3
      },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: {
            fillColor: "#cccccc",
            lineColor: "#000000",
            lineWidth: 2
          }
        }
      },
      point: {
        events: {}
      },
      dataLabels: {
        animation: {},
        align: "center",
        defer: !0,
        formatter: function () {
          var a = this.series.chart.numberFormatter;
          return "number" !== typeof this.y ? "" : a(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 50
          },
          lineWidthPlus: 1,
          marker: {},
          halo: {
            size: 10,
            opacity: .25
          }
        },
        select: {
          animation: {
            duration: 0
          }
        },
        inactive: {
          animation: {
            duration: 50
          },
          opacity: .2
        }
      },
      stickyTracking: !0,
      turboThreshold: 1E3,
      findNearestPointBy: "x"
    }, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      isCartesian: !0,
      parallelArrays: ["x", "y"],
      pointClass: L,
      requireSorting: !0,
      sorted: !0,
      init: function (a, c) {
        g(this, "init", {
          options: c
        });
        var b = this,
            d = a.series,
            k;
        this.eventOptions = this.eventOptions || {};
        this.eventsToUnbind = [];
        b.chart = a;
        b.options = c = b.setOptions(c);
        b.linkedSeries = [];
        b.bindAxes();
        r(b, {
          name: c.name,
          state: "",
          visible: !1 !== c.visible,
          selected: !0 === c.selected
        });
        var e = c.events;
        G(e, function (a, c) {
          q(a) && b.eventOptions[c] !== a && (q(b.eventOptions[c]) && T(b, c, b.eventOptions[c]), b.eventOptions[c] = a, I(b, c, a));
        });
        if (e && e.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick = !0;
        b.getColor();
        b.getSymbol();
        b.parallelArrays.forEach(function (a) {
          b[a + "Data"] || (b[a + "Data"] = []);
        });
        b.isCartesian && (a.hasCartesianSeries = !0);
        d.length && (k = d[d.length - 1]);
        b._i = M(k && k._i, -1) + 1;
        b.opacity = b.options.opacity;
        a.orderSeries(this.insert(d));
        c.dataSorting && c.dataSorting.enabled ? b.setDataSortingOptions() : b.points || b.data || b.setData(c.data, !1);
        g(this, "afterInit");
      },
      is: function (a) {
        return E[a] && this instanceof E[a];
      },
      insert: function (a) {
        var b = this.options.index,
            c;

        if (p(b)) {
          for (c = a.length; c--;) if (b >= M(a[c].options.index, a[c]._i)) {
            a.splice(c + 1, 0, this);
            break;
          }

          -1 === c && a.unshift(this);
          c += 1;
        } else a.push(this);

        return M(c, a.length - 1);
      },
      bindAxes: function () {
        var a = this,
            c = a.options,
            d = a.chart,
            e;
        g(this, "bindAxes", null, function () {
          (a.axisTypes || []).forEach(function (b) {
            d[b].forEach(function (d) {
              e = d.options;
              if (c[b] === e.index || "undefined" !== typeof c[b] && c[b] === e.id || "undefined" === typeof c[b] && 0 === e.index) a.insert(d.series), a[b] = d, d.isDirty = !0;
            });
            a[b] || a.optionalAxis === b || w(18, !0, d);
          });
        });
        g(this, "afterBindAxes");
      },
      updateParallelArrays: function (a, c) {
        var b = a.series,
            d = arguments,
            g = p(c) ? function (d) {
          var g = "y" === d && b.toYData ? b.toYData(a) : a[d];
          b[d + "Data"][c] = g;
        } : function (a) {
          Array.prototype[c].apply(b[a + "Data"], Array.prototype.slice.call(d, 2));
        };
        b.parallelArrays.forEach(g);
      },
      hasData: function () {
        return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      },
      autoIncrement: function () {
        var a = this.options,
            c = this.xIncrement,
            d,
            g = a.pointIntervalUnit,
            e = this.chart.time;
        c = M(c, a.pointStart, 0);
        this.pointInterval = d = M(this.pointInterval, a.pointInterval, 1);
        g && (a = new e.Date(c), "day" === g ? e.set("Date", a, e.get("Date", a) + d) : "month" === g ? e.set("Month", a, e.get("Month", a) + d) : "year" === g && e.set("FullYear", a, e.get("FullYear", a) + d), d = a.getTime() - c);
        this.xIncrement = c + d;
        return c;
      },
      setDataSortingOptions: function () {
        var a = this.options;
        r(this, {
          requireSorting: !1,
          sorted: !1,
          enabledDataSorting: !0,
          allowDG: !1
        });
        l(a.pointRange) || (a.pointRange = 1);
      },
      setOptions: function (a) {
        var b = this.chart,
            c = b.options,
            d = c.plotOptions,
            f = b.userOptions || {};
        a = A(a);
        b = b.styledMode;
        var p = {
          plotOptions: d,
          userOptions: a
        };
        g(this, "setOptions", p);
        var h = p.plotOptions[this.type],
            q = f.plotOptions || {};
        this.userOptions = p.userOptions;
        f = A(h, d.series, f.plotOptions && f.plotOptions[this.type], a);
        this.tooltipOptions = A(e.tooltip, e.plotOptions.series && e.plotOptions.series.tooltip, e.plotOptions[this.type].tooltip, c.tooltip.userOptions, d.series && d.series.tooltip, d[this.type].tooltip, a.tooltip);
        this.stickyTracking = M(a.stickyTracking, q[this.type] && q[this.type].stickyTracking, q.series && q.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : f.stickyTracking);
        null === h.marker && delete f.marker;
        this.zoneAxis = f.zoneAxis;
        c = this.zones = (f.zones || []).slice();
        !f.negativeColor && !f.negativeFillColor || f.zones || (d = {
          value: f[this.zoneAxis + "Threshold"] || f.threshold || 0,
          className: "highcharts-negative"
        }, b || (d.color = f.negativeColor, d.fillColor = f.negativeFillColor), c.push(d));
        c.length && l(c[c.length - 1].value) && c.push(b ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        g(this, "afterSetOptions", {
          options: f
        });
        return f;
      },
      getName: function () {
        return M(this.options.name, "Series " + (this.index + 1));
      },
      getCyclic: function (a, c, d) {
        var b = this.chart,
            g = this.userOptions,
            k = a + "Index",
            e = a + "Counter",
            f = d ? d.length : M(b.options.chart[a + "Count"], b[a + "Count"]);

        if (!c) {
          var p = M(g[k], g["_" + k]);
          l(p) || (b.series.length || (b[e] = 0), g["_" + k] = p = b[e] % f, b[e] += 1);
          d && (c = d[p]);
        }

        "undefined" !== typeof p && (this[k] = p);
        this[a] = c;
      },
      getColor: function () {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || e.plotOptions[this.type].color, this.chart.options.colors);
      },
      getPointsCollection: function () {
        return (this.hasGroupedData ? this.points : this.data) || [];
      },
      getSymbol: function () {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      },
      findPointIndex: function (a, c) {
        var b = a.id,
            g = a.x,
            k = this.points,
            e,
            f = this.options.dataSorting;
        if (b) var l = this.chart.get(b);else if (this.linkedParent || this.enabledDataSorting) {
          var h = f && f.matchByName ? "name" : "index";
          l = d(k, function (b) {
            return !b.touched && b[h] === a[h];
          });
          if (!l) return;
        }

        if (l) {
          var q = l && l.index;
          "undefined" !== typeof q && (e = !0);
        }

        "undefined" === typeof q && p(g) && (q = this.xData.indexOf(g, c));
        -1 !== q && "undefined" !== typeof q && this.cropped && (q = q >= this.cropStart ? q - this.cropStart : q);
        !e && k[q] && k[q].touched && (q = void 0);
        return q;
      },
      drawLegendSymbol: z.drawLineMarker,
      updateData: function (a, c) {
        var b = this.options,
            d = b.dataSorting,
            g = this.points,
            k = [],
            e,
            f,
            h,
            q = this.requireSorting,
            n = a.length === g.length,
            u = !0;
        this.xIncrement = null;
        a.forEach(function (a, c) {
          var f = l(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var t = f.x;

          if (f.id || p(t)) {
            if (t = this.findPointIndex(f, h), -1 === t || "undefined" === typeof t ? k.push(a) : g[t] && a !== b.data[t] ? (g[t].update(a, !1, null, !1), g[t].touched = !0, q && (h = t + 1)) : g[t] && (g[t].touched = !0), !n || c !== t || d && d.enabled || this.hasDerivedData) e = !0;
          } else k.push(a);
        }, this);
        if (e) for (a = g.length; a--;) (f = g[a]) && !f.touched && f.remove && f.remove(!1, c);else !n || d && d.enabled ? u = !1 : (a.forEach(function (a, b) {
          g[b].update && a !== g[b].y && g[b].update(a, !1, null, !1);
        }), k.length = 0);
        g.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!u) return !1;
        k.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = v(this.xData), this.autoIncrement());
        return !0;
      },
      setData: function (b, c, d, g) {
        var k = this,
            e = k.points,
            f = e && e.length || 0,
            t,
            l = k.options,
            h = k.chart,
            q = l.dataSorting,
            n = null,
            u = k.xAxis;
        n = l.turboThreshold;
        var r = this.xData,
            m = this.yData,
            A = (t = k.pointArrayMap) && t.length,
            v = l.keys,
            E = 0,
            H = 1,
            O;
        b = b || [];
        t = b.length;
        c = M(c, !0);
        q && q.enabled && (b = this.sortData(b));
        !1 !== g && t && f && !k.cropped && !k.hasGroupedData && k.visible && !k.isSeriesBoosting && (O = this.updateData(b, d));

        if (!O) {
          k.xIncrement = null;
          k.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            k[a + "Data"].length = 0;
          });
          if (n && t > n) {
            if (n = k.getFirstValidPoint(b), p(n)) for (d = 0; d < t; d++) r[d] = this.autoIncrement(), m[d] = b[d];else if (a(n)) {
              if (A) for (d = 0; d < t; d++) g = b[d], r[d] = g[0], m[d] = g.slice(1, A + 1);else for (v && (E = v.indexOf("x"), H = v.indexOf("y"), E = 0 <= E ? E : 0, H = 0 <= H ? H : 1), d = 0; d < t; d++) g = b[d], r[d] = g[E], m[d] = g[H];
            } else w(12, !1, h);
          } else for (d = 0; d < t; d++) "undefined" !== typeof b[d] && (g = {
            series: k
          }, k.pointClass.prototype.applyOptions.apply(g, [b[d]]), k.updateParallelArrays(g, d));
          m && B(m[0]) && w(14, !0, h);
          k.data = [];
          k.options.data = k.userOptions.data = b;

          for (d = f; d--;) e[d] && e[d].destroy && e[d].destroy();

          u && (u.minRange = u.userMinRange);
          k.isDirty = h.isDirtyBox = !0;
          k.isDirtyData = !!e;
          d = !1;
        }

        "point" === l.legendType && (this.processData(), this.generatePoints());
        c && h.redraw(d);
      },
      sortData: function (a) {
        var b = this,
            d = b.options.dataSorting.sortKey || "y",
            g = function (a, b) {
          return l(b) && a.pointClass.prototype.optionsToObject.call({
            series: a
          }, b) || {};
        };

        a.forEach(function (c, d) {
          a[d] = g(b, c);
          a[d].index = d;
        }, this);
        a.concat().sort(function (a, b) {
          a = c(d, a);
          b = c(d, b);
          return b < a ? -1 : b > a ? 1 : 0;
        }).forEach(function (a, b) {
          a.x = b;
        }, this);
        b.linkedSeries && b.linkedSeries.forEach(function (b) {
          var c = b.options,
              d = c.data;
          c.dataSorting && c.dataSorting.enabled || !d || (d.forEach(function (c, k) {
            d[k] = g(b, c);
            a[k] && (d[k].x = a[k].x, d[k].index = k);
          }), b.setData(d, !1));
        });
        return a;
      },
      getProcessedData: function (a) {
        var b = this.xData,
            c = this.yData,
            d = b.length;
        var g = 0;
        var e = this.xAxis,
            f = this.options;
        var p = f.cropThreshold;
        var l = a || this.getExtremesFromAll || f.getExtremesFromAll,
            h = this.isCartesian;
        a = e && e.val2lin;
        f = !(!e || !e.logarithmic);
        var q = this.requireSorting;

        if (e) {
          e = e.getExtremes();
          var n = e.min;
          var u = e.max;
        }

        if (h && this.sorted && !l && (!p || d > p || this.forceCrop)) if (b[d - 1] < n || b[0] > u) b = [], c = [];else if (this.yData && (b[0] < n || b[d - 1] > u)) {
          g = this.cropData(this.xData, this.yData, n, u);
          b = g.xData;
          c = g.yData;
          g = g.start;
          var r = !0;
        }

        for (p = b.length || 1; --p;) if (d = f ? a(b[p]) - a(b[p - 1]) : b[p] - b[p - 1], 0 < d && ("undefined" === typeof m || d < m)) var m = d;else 0 > d && q && (w(15, !1, this.chart), q = !1);

        return {
          xData: b,
          yData: c,
          cropped: r,
          cropStart: g,
          closestPointRange: m
        };
      },
      processData: function (a) {
        var b = this.xAxis;
        if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a) return !1;
        a = this.getProcessedData();
        this.cropped = a.cropped;
        this.cropStart = a.cropStart;
        this.processedXData = a.xData;
        this.processedYData = a.yData;
        this.closestPointRange = this.basePointRange = a.closestPointRange;
      },
      cropData: function (a, c, d, g, e) {
        var b = a.length,
            k = 0,
            f = b,
            p;
        e = M(e, this.cropShoulder);

        for (p = 0; p < b; p++) if (a[p] >= d) {
          k = Math.max(0, p - e);
          break;
        }

        for (d = p; d < b; d++) if (a[d] > g) {
          f = d + e;
          break;
        }

        return {
          xData: a.slice(k, f),
          yData: c.slice(k, f),
          start: k,
          end: f
        };
      },
      generatePoints: function () {
        var a = this.options,
            c = a.data,
            d = this.data,
            e,
            f = this.processedXData,
            p = this.processedYData,
            l = this.pointClass,
            h = f.length,
            q = this.cropStart || 0,
            n = this.hasGroupedData;
        a = a.keys;
        var u = [],
            m;
        d || n || (d = [], d.length = c.length, d = this.data = d);
        a && n && (this.options.keys = !1);

        for (m = 0; m < h; m++) {
          var w = q + m;

          if (n) {
            var v = new l().init(this, [f[m]].concat(Q(p[m])));
            v.dataGroup = this.groupMap[m];
            v.dataGroup.options && (v.options = v.dataGroup.options, r(v, v.dataGroup.options), delete v.dataLabels);
          } else (v = d[w]) || "undefined" === typeof c[w] || (d[w] = v = new l().init(this, c[w], f[m]));

          v && (v.index = w, u[m] = v);
        }

        this.options.keys = a;
        if (d && (h !== (e = d.length) || n)) for (m = 0; m < e; m++) m !== q || n || (m += h), d[m] && (d[m].destroyElements(), d[m].plotX = void 0);
        this.data = d;
        this.points = u;
        g(this, "afterGeneratePoints");
      },
      getXExtremes: function (a) {
        return {
          min: x(a),
          max: v(a)
        };
      },
      getExtremes: function (b, c) {
        var d = this.xAxis,
            k = this.yAxis,
            e = this.processedXData || this.xData,
            f = [],
            l = 0,
            h = 0;
        var q = 0;
        var n = this.requireSorting ? this.cropShoulder : 0,
            u = k ? k.positiveValuesOnly : !1,
            r;
        b = b || this.stackedYData || this.processedYData || [];
        k = b.length;
        d && (q = d.getExtremes(), h = q.min, q = q.max);

        for (r = 0; r < k; r++) {
          var m = e[r];
          var w = b[r];
          var A = (p(w) || a(w)) && (w.length || 0 < w || !u);
          m = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d || (e[r + n] || m) >= h && (e[r - n] || m) <= q;
          if (A && m) if (A = w.length) for (; A--;) p(w[A]) && (f[l++] = w[A]);else f[l++] = w;
        }

        b = {
          dataMin: x(f),
          dataMax: v(f)
        };
        g(this, "afterGetExtremes", {
          dataExtremes: b
        });
        return b;
      },
      applyExtremes: function () {
        var a = this.getExtremes();
        this.dataMin = a.dataMin;
        this.dataMax = a.dataMax;
        return a;
      },
      getFirstValidPoint: function (a) {
        for (var b = null, c = a.length, d = 0; null === b && d < c;) b = a[d], d++;

        return b;
      },
      translate: function () {
        this.processedXData || this.processData();
        this.generatePoints();
        var b = this.options,
            c = b.stacking,
            d = this.xAxis,
            e = d.categories,
            f = this.enabledDataSorting,
            h = this.yAxis,
            q = this.points,
            u = q.length,
            r = !!this.modifyValue,
            m,
            w = this.pointPlacementToXValue(),
            v = !!w,
            A = b.threshold,
            B = b.startFromThreshold ? A : 0,
            E,
            O = this.zoneAxis || "y",
            G = Number.MAX_VALUE;

        for (m = 0; m < u; m++) {
          var x = q[m],
              y = x.x,
              z = x.y,
              C = x.low,
              J = c && h.stacking && h.stacking.stacks[(this.negStacks && z < (B ? 0 : A) ? "-" : "") + this.stackKey];
          if (h.positiveValuesOnly && !h.validatePositiveValue(z) || d.positiveValuesOnly && !d.validatePositiveValue(y)) x.isNull = !0;
          x.plotX = E = n(D(d.translate(y, 0, 0, 0, 1, w, "flags" === this.type), -1E5, 1E5));

          if (c && this.visible && J && J[y]) {
            var F = this.getStackIndicator(F, y, this.index);

            if (!x.isNull) {
              var Q = J[y];
              var I = Q.points[F.key];
            }
          }

          a(I) && (C = I[0], z = I[1], C === B && F.key === J[y].base && (C = M(p(A) && A, h.min)), h.positiveValuesOnly && 0 >= C && (C = null), x.total = x.stackTotal = Q.total, x.percentage = Q.total && x.y / Q.total * 100, x.stackY = z, this.irregularWidths || Q.setOffset(this.pointXOffset || 0, this.barW || 0));
          x.yBottom = l(C) ? D(h.translate(C, 0, 1, 0, 1), -1E5, 1E5) : null;
          r && (z = this.modifyValue(z, x));
          x.plotY = "number" === typeof z && Infinity !== z ? D(h.translate(z, 0, 1, 0, 1), -1E5, 1E5) : void 0;
          x.isInside = this.isPointInside(x);
          x.clientX = v ? n(d.translate(y, 0, 0, 0, 1, w)) : E;
          x.negative = x[O] < (b[O + "Threshold"] || A || 0);
          x.category = e && "undefined" !== typeof e[x.x] ? e[x.x] : x.x;

          if (!x.isNull && !1 !== x.visible) {
            "undefined" !== typeof K && (G = Math.min(G, Math.abs(E - K)));
            var K = E;
          }

          x.zone = this.zones.length && x.getZone();
          !x.graphic && this.group && f && (x.isNew = !0);
        }

        this.closestPointRangePx = G;
        g(this, "afterTranslate");
      },
      getValidPoints: function (a, c, d) {
        var b = this.chart;
        return (a || this.points || []).filter(function (a) {
          return c && !b.isInsidePlot(a.plotX, a.plotY, b.inverted) ? !1 : !1 !== a.visible && (d || !a.isNull);
        });
      },
      getClipBox: function (a, c) {
        var b = this.options,
            d = this.chart,
            g = d.inverted,
            k = this.xAxis,
            e = k && this.yAxis,
            f = d.options.chart.scrollablePlotArea || {};
        a && !1 === b.clip && e ? a = g ? {
          y: -d.chartWidth + e.len + e.pos,
          height: d.chartWidth,
          width: d.chartHeight,
          x: -d.chartHeight + k.len + k.pos
        } : {
          y: -e.pos,
          height: d.chartHeight,
          width: d.chartWidth,
          x: -k.pos
        } : (a = this.clipBox || d.clipBox, c && (a.width = d.plotSizeX, a.x = (d.scrollablePixelsX || 0) * (f.scrollPositionX || 0)));
        return c ? {
          width: a.width,
          x: a.x
        } : a;
      },
      setClip: function (a) {
        var b = this.chart,
            c = this.options,
            d = b.renderer,
            g = b.inverted,
            e = this.clipBox,
            f = this.getClipBox(a),
            p = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, f.height, c.xAxis, c.yAxis].join(),
            l = b[p],
            h = b[p + "m"];
        a && (f.width = 0, g && (f.x = b.plotHeight + (!1 !== c.clip ? 0 : b.plotTop)));
        l ? b.hasLoaded || l.attr(f) : (a && (b[p + "m"] = h = d.clipRect(g ? b.plotSizeX + 99 : -99, g ? -b.plotLeft : -b.plotTop, 99, g ? b.chartWidth : b.chartHeight)), b[p] = l = d.clipRect(f), l.count = {
          length: 0
        });
        a && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1);
        if (!1 !== c.clip || a) this.group.clip(a || e ? l : b.clipRect), this.markerGroup.clip(h), this.sharedClipKey = p;
        a || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && p && b[p] && (e || (b[p] = b[p].destroy()), b[p + "m"] && (b[p + "m"] = b[p + "m"].destroy())));
      },
      animate: function (a) {
        var b = this.chart,
            c = y(this.options.animation);
        if (!b.hasRendered) if (a) this.setClip(c);else {
          var d = this.sharedClipKey;
          a = b[d];
          var g = this.getClipBox(c, !0);
          a && a.animate(g, c);
          b[d + "m"] && b[d + "m"].animate({
            width: g.width + 99,
            x: g.x - (b.inverted ? 0 : 99)
          }, c);
        }
      },
      afterAnimate: function () {
        this.setClip();
        g(this, "afterAnimate");
        this.finishedAnimating = !0;
      },
      drawPoints: function () {
        var a = this.points,
            c = this.chart,
            d,
            g,
            e = this.options.marker,
            f = this[this.specialGroup] || this.markerGroup,
            p = this.xAxis,
            l = M(e.enabled, !p || p.isRadial ? !0 : null, this.closestPointRangePx >= e.enabledThreshold * e.radius);
        if (!1 !== e.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
          var h = a[d];
          var q = (g = h.graphic) ? "animate" : "attr";
          var n = h.marker || {};
          var u = !!h.marker;

          if ((l && "undefined" === typeof n.enabled || n.enabled) && !h.isNull && !1 !== h.visible) {
            var r = M(n.symbol, this.symbol);
            var m = this.markerAttribs(h, h.selected && "select");
            this.enabledDataSorting && (h.startXPos = p.reversed ? -m.width : p.width);
            var w = !1 !== h.isInside;
            g ? g[w ? "show" : "hide"](w).animate(m) : w && (0 < m.width || h.hasImage) && (h.graphic = g = c.renderer.symbol(r, m.x, m.y, m.width, m.height, u ? n : e).add(f), this.enabledDataSorting && c.hasRendered && (g.attr({
              x: h.startXPos
            }), q = "animate"));
            g && "animate" === q && g[w ? "show" : "hide"](w).animate(m);
            if (g && !c.styledMode) g[q](this.pointAttribs(h, h.selected && "select"));
            g && g.addClass(h.getClassName(), !0);
          } else g && (h.graphic = g.destroy());
        }
      },
      markerAttribs: function (a, c) {
        var b = this.options,
            d = b.marker,
            g = a.marker || {},
            e = g.symbol || d.symbol,
            k = M(g.radius, d.radius);
        c && (d = d.states[c], c = g.states && g.states[c], k = M(c && c.radius, d && d.radius, k + (d && d.radiusPlus || 0)));
        a.hasImage = e && 0 === e.indexOf("url");
        a.hasImage && (k = 0);
        a = {
          x: b.crisp ? Math.floor(a.plotX) - k : a.plotX - k,
          y: a.plotY - k
        };
        k && (a.width = a.height = 2 * k);
        return a;
      },
      pointAttribs: function (a, c) {
        var b = this.options.marker,
            d = a && a.options,
            g = d && d.marker || {},
            e = this.color,
            k = d && d.color,
            f = a && a.color;
        d = M(g.lineWidth, b.lineWidth);
        var p = a && a.zone && a.zone.color;
        a = 1;
        e = k || p || f || e;
        k = g.fillColor || b.fillColor || e;
        e = g.lineColor || b.lineColor || e;
        c = c || "normal";
        b = b.states[c];
        c = g.states && g.states[c] || {};
        d = M(c.lineWidth, b.lineWidth, d + M(c.lineWidthPlus, b.lineWidthPlus, 0));
        k = c.fillColor || b.fillColor || k;
        e = c.lineColor || b.lineColor || e;
        a = M(c.opacity, b.opacity, a);
        return {
          stroke: e,
          "stroke-width": d,
          fill: k,
          opacity: a
        };
      },
      destroy: function (a) {
        var b = this,
            c = b.chart,
            d = /AppleWebKit\/533/.test(u.navigator.userAgent),
            e,
            f,
            p = b.data || [],
            h,
            l;
        g(b, "destroy");
        this.removeEvents(a);
        (b.axisTypes || []).forEach(function (a) {
          (l = b[a]) && l.series && (J(l.series, b), l.isDirty = l.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (f = p.length; f--;) (h = p[f]) && h.destroy && h.destroy();

        b.points = null;
        C.clearTimeout(b.animationTimeout);
        G(b, function (a, b) {
          a instanceof K && !a.survive && (e = d && "group" === b ? "hide" : "destroy", a[e]());
        });
        c.hoverSeries === b && (c.hoverSeries = null);
        J(c.series, b);
        c.orderSeries();
        G(b, function (c, d) {
          a && "hcEvents" === d || delete b[d];
        });
      },
      getGraphPath: function (a, c, d) {
        var b = this,
            g = b.options,
            e = g.step,
            k,
            f = [],
            p = [],
            h;
        a = a || b.points;
        (k = a.reversed) && a.reverse();
        (e = {
          right: 1,
          center: 2
        }[e] || e && 3) && k && (e = 4 - e);
        a = this.getValidPoints(a, !1, !(g.connectNulls && !c && !d));
        a.forEach(function (k, q) {
          var t = k.plotX,
              n = k.plotY,
              u = a[q - 1];
          (k.leftCliff || u && u.rightCliff) && !d && (h = !0);
          k.isNull && !l(c) && 0 < q ? h = !g.connectNulls : k.isNull && !c ? h = !0 : (0 === q || h ? q = [["M", k.plotX, k.plotY]] : b.getPointSpline ? q = [b.getPointSpline(a, k, q)] : e ? (q = 1 === e ? [["L", u.plotX, n]] : 2 === e ? [["L", (u.plotX + t) / 2, u.plotY], ["L", (u.plotX + t) / 2, n]] : [["L", t, u.plotY]], q.push(["L", t, n])) : q = [["L", t, n]], p.push(k.x), e && (p.push(k.x), 2 === e && p.push(k.x)), f.push.apply(f, q), h = !1);
        });
        f.xMap = p;
        return b.graphPath = f;
      },
      drawGraph: function () {
        var a = this,
            c = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            g = this.chart.styledMode,
            e = [["graph", "highcharts-graph"]];
        g || e[0].push(c.lineColor || this.color || "#cccccc", c.dashStyle);
        e = a.getZonesGraphs(e);
        e.forEach(function (b, e) {
          var k = b[0],
              f = a[k],
              p = f ? "animate" : "attr";
          f ? (f.endX = a.preventGraphAnimation ? null : d.xMap, f.animate({
            d: d
          })) : d.length && (a[k] = f = a.chart.renderer.path(d).addClass(b[1]).attr({
            zIndex: 1
          }).add(a.group));
          f && !g && (k = {
            stroke: b[2],
            "stroke-width": c.lineWidth,
            fill: a.fillGraph && a.color || "none"
          }, b[3] ? k.dashstyle = b[3] : "square" !== c.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), f[p](k).shadow(2 > e && c.shadow));
          f && (f.startX = d.xMap, f.isArea = d.isArea);
        });
      },
      getZonesGraphs: function (a) {
        this.zones.forEach(function (b, c) {
          c = ["zone-graph-" + c, "highcharts-graph highcharts-zone-graph-" + c + " " + (b.className || "")];
          this.chart.styledMode || c.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
          a.push(c);
        }, this);
        return a;
      },
      applyZones: function () {
        var a = this,
            c = this.chart,
            d = c.renderer,
            g = this.zones,
            e,
            f,
            p = this.clips || [],
            h,
            l = this.graph,
            q = this.area,
            n = Math.max(c.chartWidth, c.chartHeight),
            u = this[(this.zoneAxis || "y") + "Axis"],
            r = c.inverted,
            m,
            w,
            v,
            A = !1,
            B,
            E;

        if (g.length && (l || q) && u && "undefined" !== typeof u.min) {
          var O = u.reversed;
          var G = u.horiz;
          l && !this.showLine && l.hide();
          q && q.hide();
          var x = u.getExtremes();
          g.forEach(function (b, g) {
            e = O ? G ? c.plotWidth : 0 : G ? 0 : u.toPixels(x.min) || 0;
            e = D(M(f, e), 0, n);
            f = D(Math.round(u.toPixels(M(b.value, x.max), !0) || 0), 0, n);
            A && (e = f = u.toPixels(x.max));
            m = Math.abs(e - f);
            w = Math.min(e, f);
            v = Math.max(e, f);
            u.isXAxis ? (h = {
              x: r ? v : w,
              y: 0,
              width: m,
              height: n
            }, G || (h.x = c.plotHeight - h.x)) : (h = {
              x: 0,
              y: r ? v : w,
              width: n,
              height: m
            }, G && (h.y = c.plotWidth - h.y));
            r && d.isVML && (h = u.isXAxis ? {
              x: 0,
              y: O ? w : v,
              height: h.width,
              width: c.chartWidth
            } : {
              x: h.y - c.plotLeft - c.spacingBox.x,
              y: 0,
              width: h.height,
              height: c.chartHeight
            });
            p[g] ? p[g].animate(h) : p[g] = d.clipRect(h);
            B = a["zone-area-" + g];
            E = a["zone-graph-" + g];
            l && E && E.clip(p[g]);
            q && B && B.clip(p[g]);
            A = b.value > x.max;
            a.resetZones && 0 === f && (f = void 0);
          });
          this.clips = p;
        } else a.visible && (l && l.show(!0), q && q.show(!0));
      },
      invertGroups: function (a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            c[b] && (d.renderer.isVML && c[b].attr({
              width: c.yAxis.len,
              height: c.xAxis.len
            }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(c.isRadialSeries ? !1 : a));
          });
        }

        var c = this,
            d = c.chart;
        c.xAxis && (c.eventsToUnbind.push(I(d, "resize", b)), b(), c.invertGroups = b);
      },
      plotGroup: function (a, c, d, g, e) {
        var b = this[a],
            k = !b;
        d = {
          visibility: d,
          zIndex: g || .1
        };
        "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (d.opacity = this.opacity);
        k && (this[a] = b = this.chart.renderer.g().add(e));
        b.addClass("highcharts-" + c + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (l(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (b.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        b.attr(d)[k ? "attr" : "animate"](this.getPlotBox());
        return b;
      },
      getPlotBox: function () {
        var a = this.chart,
            c = this.xAxis,
            d = this.yAxis;
        a.inverted && (c = d, d = this.xAxis);
        return {
          translateX: c ? c.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      },
      removeEvents: function (a) {
        a ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) {
          a();
        }), this.eventsToUnbind.length = 0) : T(this);
      },
      render: function () {
        var a = this,
            c = a.chart,
            d = a.options,
            e = y(d.animation),
            f = !a.finishedAnimating && c.renderer.isSVG && e.duration,
            p = a.visible ? "inherit" : "hidden",
            h = d.zIndex,
            l = a.hasRendered,
            q = c.seriesGroup,
            n = c.inverted;
        g(this, "render");
        var u = a.plotGroup("group", "series", p, h, q);
        a.markerGroup = a.plotGroup("markerGroup", "markers", p, h, q);
        f && a.animate && a.animate(!0);
        u.inverted = a.isCartesian || a.invertable ? n : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(n);
        !1 === d.clip || a.sharedClipKey || l || u.clip(c.clipRect);
        f && a.animate && a.animate();
        l || (f && e.defer && (f += e.defer), a.animationTimeout = O(function () {
          a.afterAnimate();
        }, f || 0));
        a.isDirty = !1;
        a.hasRendered = !0;
        g(a, "afterRender");
      },
      redraw: function () {
        var a = this.chart,
            c = this.isDirty || this.isDirtyData,
            d = this.group,
            g = this.xAxis,
            e = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: M(g && g.left, a.plotLeft),
          translateY: M(e && e.top, a.plotTop)
        }));
        this.translate();
        this.render();
        c && delete this.kdTree;
      },
      kdAxisArray: ["clientX", "plotY"],
      searchPoint: function (a, c) {
        var b = this.xAxis,
            d = this.yAxis,
            g = this.chart.inverted;
        return this.searchKDTree({
          clientX: g ? b.len - a.chartY + b.pos : a.chartX - b.pos,
          plotY: g ? d.len - a.chartX + d.pos : a.chartY - d.pos
        }, c, a);
      },
      buildKDTree: function (a) {
        function b(a, d, g) {
          var e;

          if (e = a && a.length) {
            var f = c.kdAxisArray[d % g];
            a.sort(function (a, b) {
              return a[f] - b[f];
            });
            e = Math.floor(e / 2);
            return {
              point: a[e],
              left: b(a.slice(0, e), d + 1, g),
              right: b(a.slice(e + 1), d + 1, g)
            };
          }
        }

        this.buildingKdTree = !0;
        var c = this,
            d = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete c.kdTree;
        O(function () {
          c.kdTree = b(c.getValidPoints(null, !c.directTouch), d, d);
          c.buildingKdTree = !1;
        }, c.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      },
      searchKDTree: function (a, c, d) {
        function b(a, c, d, p) {
          var h = c.point,
              q = g.kdAxisArray[d % p],
              n = h;
          var u = l(a[e]) && l(h[e]) ? Math.pow(a[e] - h[e], 2) : null;
          var t = l(a[f]) && l(h[f]) ? Math.pow(a[f] - h[f], 2) : null;
          t = (u || 0) + (t || 0);
          h.dist = l(t) ? Math.sqrt(t) : Number.MAX_VALUE;
          h.distX = l(u) ? Math.sqrt(u) : Number.MAX_VALUE;
          q = a[q] - h[q];
          t = 0 > q ? "left" : "right";
          u = 0 > q ? "right" : "left";
          c[t] && (t = b(a, c[t], d + 1, p), n = t[k] < n[k] ? t : h);
          c[u] && Math.sqrt(q * q) < n[k] && (a = b(a, c[u], d + 1, p), n = a[k] < n[k] ? a : n);
          return n;
        }

        var g = this,
            e = this.kdAxisArray[0],
            f = this.kdAxisArray[1],
            k = c ? "distX" : "dist";
        c = -1 < g.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(d);
        if (this.kdTree) return b(a, this.kdTree, c, c);
      },
      pointPlacementToXValue: function () {
        var a = this.options,
            c = a.pointRange,
            d = this.xAxis;
        a = a.pointPlacement;
        "between" === a && (a = d.reversed ? -.5 : .5);
        return p(a) ? a * M(c, d.pointRange) : 0;
      },
      isPointInside: function (a) {
        return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len;
      }
    });
    "";
    return f;
  });
  N(m, "Series/LineSeries.js", [m["Core/Series/CartesianSeries.js"], m["Core/Globals.js"]], function (f, h) {
    h.Series = f;
    return h.Series;
  });
  N(m, "Extensions/Stacking.js", [m["Core/Axis/Axis.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Axis/StackingAxis.js"], m["Core/Utilities.js"]], function (f, h, m, z, F) {
    var L = F.correctFloat,
        K = F.defined,
        C = F.destroyObjectProperties,
        y = F.format,
        e = F.isNumber,
        I = F.pick;
    "";

    var v = m.Series,
        x = function () {
      function f(e, f, h, m, r) {
        var d = e.chart.inverted;
        this.axis = e;
        this.isNegative = h;
        this.options = f = f || {};
        this.x = m;
        this.total = null;
        this.points = {};
        this.hasValidPoints = !1;
        this.stack = r;
        this.rightCliff = this.leftCliff = 0;
        this.alignOptions = {
          align: f.align || (d ? h ? "left" : "right" : "center"),
          verticalAlign: f.verticalAlign || (d ? "middle" : h ? "bottom" : "top"),
          y: f.y,
          x: f.x
        };
        this.textAlign = f.textAlign || (d ? h ? "right" : "left" : "center");
      }

      f.prototype.destroy = function () {
        C(this, this.axis);
      };

      f.prototype.render = function (e) {
        var f = this.axis.chart,
            h = this.options,
            n = h.format;
        n = n ? y(n, this, f) : h.formatter.call(this);
        this.label ? this.label.attr({
          text: n,
          visibility: "hidden"
        }) : (this.label = f.renderer.label(n, null, null, h.shape, null, null, h.useHTML, !1, "stack-labels"), n = {
          r: h.borderRadius || 0,
          text: n,
          rotation: h.rotation,
          padding: I(h.padding, 5),
          visibility: "hidden"
        }, f.styledMode || (n.fill = h.backgroundColor, n.stroke = h.borderColor, n["stroke-width"] = h.borderWidth, this.label.css(h.style)), this.label.attr(n), this.label.added || this.label.add(e));
        this.label.labelrank = f.plotHeight;
      };

      f.prototype.setOffset = function (f, h, m, w, r) {
        var d = this.axis,
            g = d.chart;
        w = d.translate(d.stacking.usePercentage ? 100 : w ? w : this.total, 0, 0, 0, 1);
        m = d.translate(m ? m : 0);
        m = K(w) && Math.abs(w - m);
        f = I(r, g.xAxis[0].translate(this.x)) + f;
        d = K(w) && this.getStackBox(g, this, f, w, h, m, d);
        h = this.label;
        m = this.isNegative;
        f = "justify" === I(this.options.overflow, "justify");
        var c = this.textAlign;
        h && d && (r = h.getBBox(), w = h.padding, c = "left" === c ? g.inverted ? -w : w : "right" === c ? r.width : g.inverted && "center" === c ? r.width / 2 : g.inverted ? m ? r.width + w : -w : r.width / 2, m = g.inverted ? r.height / 2 : m ? -w : r.height, this.alignOptions.x = I(this.options.x, 0), this.alignOptions.y = I(this.options.y, 0), d.x -= c, d.y -= m, h.align(this.alignOptions, null, d), g.isInsidePlot(h.alignAttr.x + c - this.alignOptions.x, h.alignAttr.y + m - this.alignOptions.y) ? h.show() : (h.alignAttr.y = -9999, f = !1), f && v.prototype.justifyDataLabel.call(this.axis, h, this.alignOptions, h.alignAttr, r, d), h.attr({
          x: h.alignAttr.x,
          y: h.alignAttr.y
        }), I(!f && this.options.crop, !0) && ((g = e(h.x) && e(h.y) && g.isInsidePlot(h.x - w + h.width, h.y) && g.isInsidePlot(h.x + w, h.y)) || h.hide()));
      };

      f.prototype.getStackBox = function (e, f, h, m, r, d, g) {
        var c = f.axis.reversed,
            a = e.inverted,
            q = g.height + g.pos - (a ? e.plotLeft : e.plotTop);
        f = f.isNegative && !c || !f.isNegative && c;
        return {
          x: a ? f ? m - g.right : m - d + g.pos - e.plotLeft : h + e.xAxis[0].transB - e.plotLeft,
          y: a ? g.height - h - r : f ? q - m - d : q - m,
          width: a ? d : r,
          height: a ? r : d
        };
      };

      return f;
    }();

    h.prototype.getStacks = function () {
      var e = this,
          f = e.inverted;
      e.yAxis.forEach(function (e) {
        e.stacking && e.stacking.stacks && e.hasVisibleSeries && (e.stacking.oldStacks = e.stacking.stacks);
      });
      e.series.forEach(function (h) {
        var l = h.xAxis && h.xAxis.options || {};
        !h.options.stacking || !0 !== h.visible && !1 !== e.options.chart.ignoreHiddenSeries || (h.stackKey = [h.type, I(h.options.stack, ""), f ? l.top : l.left, f ? l.height : l.width].join());
      });
    };

    z.compose(f);

    v.prototype.setGroupedPoints = function () {
      this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length && v.prototype.setStackedPoints.call(this, "group");
    };

    v.prototype.setStackedPoints = function (e) {
      var f = e || this.options.stacking;

      if (f && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var h = this.processedXData,
            m = this.processedYData,
            w = [],
            r = m.length,
            d = this.options,
            g = d.threshold,
            c = I(d.startFromThreshold && g, 0);
        d = d.stack;
        e = e ? this.type + "," + f : this.stackKey;
        var a = "-" + e,
            q = this.negStacks,
            p = this.yAxis,
            v = p.stacking.stacks,
            A = p.stacking.oldStacks,
            G,
            D;
        p.stacking.stacksTouched += 1;

        for (D = 0; D < r; D++) {
          var y = h[D];
          var z = m[D];
          var O = this.getStackIndicator(O, y, this.index);
          var E = O.key;
          var u = (G = q && z < (c ? 0 : g)) ? a : e;
          v[u] || (v[u] = {});
          v[u][y] || (A[u] && A[u][y] ? (v[u][y] = A[u][y], v[u][y].total = null) : v[u][y] = new x(p, p.options.stackLabels, G, y, d));
          u = v[u][y];
          null !== z ? (u.points[E] = u.points[this.index] = [I(u.cumulative, c)], K(u.cumulative) || (u.base = E), u.touched = p.stacking.stacksTouched, 0 < O.index && !1 === this.singleStacks && (u.points[E][0] = u.points[this.index + "," + y + ",0"][0])) : u.points[E] = u.points[this.index] = null;
          "percent" === f ? (G = G ? e : a, q && v[G] && v[G][y] ? (G = v[G][y], u.total = G.total = Math.max(G.total, u.total) + Math.abs(z) || 0) : u.total = L(u.total + (Math.abs(z) || 0))) : "group" === f ? null !== z && (u.total = (u.total || 0) + 1) : u.total = L(u.total + (z || 0));
          u.cumulative = "group" === f ? (u.total || 1) - 1 : I(u.cumulative, c) + (z || 0);
          null !== z && (u.points[E].push(u.cumulative), w[D] = u.cumulative, u.hasValidPoints = !0);
        }

        "percent" === f && (p.stacking.usePercentage = !0);
        "group" !== f && (this.stackedYData = w);
        p.stacking.oldStacks = {};
      }
    };

    v.prototype.modifyStacks = function () {
      var e = this,
          f = e.stackKey,
          h = e.yAxis.stacking.stacks,
          m = e.processedXData,
          w,
          r = e.options.stacking;
      e[r + "Stacker"] && [f, "-" + f].forEach(function (d) {
        for (var g = m.length, c, a; g--;) if (c = m[g], w = e.getStackIndicator(w, c, e.index, d), a = (c = h[d] && h[d][c]) && c.points[w.key]) e[r + "Stacker"](a, c, g);
      });
    };

    v.prototype.percentStacker = function (e, f, h) {
      f = f.total ? 100 / f.total : 0;
      e[0] = L(e[0] * f);
      e[1] = L(e[1] * f);
      this.stackedYData[h] = e[1];
    };

    v.prototype.getStackIndicator = function (e, f, h, m) {
      !K(e) || e.x !== f || m && e.key !== m ? e = {
        x: f,
        index: 0,
        key: m
      } : e.index++;
      e.key = [h, f, e.index].join();
      return e;
    };

    m.StackItem = x;
    return m.StackItem;
  });
  N(m, "Core/Dynamics.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Axis/Axis.js"], m["Core/Series/Series.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Series/LineSeries.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Time.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K, C, y, e) {
    var I = f.animate,
        v = f.setAnimation,
        x = m.seriesTypes,
        D = K.time,
        n = e.addEvent,
        l = e.createElement,
        J = e.css,
        w = e.defined,
        r = e.erase,
        d = e.error,
        g = e.extend,
        c = e.fireEvent,
        a = e.isArray,
        q = e.isNumber,
        p = e.isObject,
        B = e.isString,
        A = e.merge,
        G = e.objectEach,
        M = e.pick,
        T = e.relativeLength,
        Q = e.splat;

    F.cleanRecursively = function (a, c) {
      var d = {};
      G(a, function (b, g) {
        if (p(a[g], !0) && !a.nodeType && c[g]) b = F.cleanRecursively(a[g], c[g]), Object.keys(b).length && (d[g] = b);else if (p(a[g]) || a[g] !== c[g]) d[g] = a[g];
      });
      return d;
    };

    g(z.prototype, {
      addSeries: function (a, d, g) {
        var b,
            e = this;
        a && (d = M(d, !0), c(e, "addSeries", {
          options: a
        }, function () {
          b = e.initSeries(a);
          e.isDirtyLegend = !0;
          e.linkSeries();
          b.enabledDataSorting && b.setData(a.data, !1);
          c(e, "afterAddSeries", {
            series: b
          });
          d && e.redraw(g);
        }));
        return b;
      },
      addAxis: function (a, c, d, b) {
        return this.createAxis(c ? "xAxis" : "yAxis", {
          axis: a,
          redraw: d,
          animation: b
        });
      },
      addColorAxis: function (a, c, d) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: c,
          animation: d
        });
      },
      createAxis: function (a, c) {
        var d = this.options,
            b = "colorAxis" === a,
            g = c.redraw,
            e = c.animation;
        c = A(c.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        var f = b ? new F.ColorAxis(this, c) : new h(this, c);
        d[a] = Q(d[a] || {});
        d[a].push(c);
        b && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
          a.series = [];
        }), this.series.forEach(function (a) {
          a.bindAxes();
          a.isDirtyData = !0;
        }));
        M(g, !0) && this.redraw(e);
        return f;
      },
      showLoading: function (a) {
        var c = this,
            d = c.options,
            b = c.loadingDiv,
            e = d.loading,
            f = function () {
          b && J(b, {
            left: c.plotLeft + "px",
            top: c.plotTop + "px",
            width: c.plotWidth + "px",
            height: c.plotHeight + "px"
          });
        };

        b || (c.loadingDiv = b = l("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, c.container), c.loadingSpan = l("span", {
          className: "highcharts-loading-inner"
        }, null, b), n(c, "redraw", f));
        b.className = "highcharts-loading";
        c.loadingSpan.innerHTML = M(a, d.lang.loading, "");
        c.styledMode || (J(b, g(e.style, {
          zIndex: 10
        })), J(c.loadingSpan, e.labelStyle), c.loadingShown || (J(b, {
          opacity: 0,
          display: ""
        }), I(b, {
          opacity: e.style.opacity || .5
        }, {
          duration: e.showDuration || 0
        })));
        c.loadingShown = !0;
        f();
      },
      hideLoading: function () {
        var a = this.options,
            c = this.loadingDiv;
        c && (c.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || I(c, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function () {
            J(c, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      },
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
      update: function (a, d, g, b) {
        var e = this,
            f = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            p,
            h,
            l,
            n = a.isResponsiveOptions,
            u = [];
        c(e, "update", {
          options: a
        });
        n || e.setResponsive(!1, !0);
        a = F.cleanRecursively(a, e.options);
        A(!0, e.userOptions, a);

        if (p = a.chart) {
          A(!0, e.options.chart, p);
          "className" in p && e.setClassName(p.className);
          "reflow" in p && e.setReflow(p.reflow);

          if ("inverted" in p || "polar" in p || "type" in p) {
            e.propFromSeries();
            var m = !0;
          }

          "alignTicks" in p && (m = !0);
          G(p, function (a, b) {
            -1 !== e.propsRequireUpdateSeries.indexOf("chart." + b) && (h = !0);
            -1 !== e.propsRequireDirtyBox.indexOf(b) && (e.isDirtyBox = !0);
            -1 !== e.propsRequireReflow.indexOf(b) && (n ? e.isDirtyBox = !0 : l = !0);
          });
          !e.styledMode && "style" in p && e.renderer.setStyle(p.style);
        }

        !e.styledMode && a.colors && (this.options.colors = a.colors);
        a.time && (this.time === D && (this.time = new y(a.time)), A(!0, e.options.time, a.time));
        G(a, function (b, c) {
          if (e[c] && "function" === typeof e[c].update) e[c].update(b, !1);else if ("function" === typeof e[f[c]]) e[f[c]](b);else "color" !== c && -1 === e.collectionsWithUpdate.indexOf(c) && A(!0, e.options[c], a[c]);
          "chart" !== c && -1 !== e.propsRequireUpdateSeries.indexOf(c) && (h = !0);
        });
        this.collectionsWithUpdate.forEach(function (b) {
          if (a[b]) {
            if ("series" === b) {
              var c = [];
              e[b].forEach(function (a, b) {
                a.options.isInternal || c.push(M(a.options.index, b));
              });
            }

            Q(a[b]).forEach(function (a, d) {
              var f = w(a.id),
                  k;
              f && (k = e.get(a.id));
              k || (k = e[b][c ? c[d] : d]) && f && w(k.options.id) && (k = void 0);
              k && k.coll === b && (k.update(a, !1), g && (k.touched = !0));
              !k && g && e.collectionsWithInit[b] && (e.collectionsWithInit[b][0].apply(e, [a].concat(e.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
            });
            g && e[b].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : u.push(a);
            });
          }
        });
        u.forEach(function (a) {
          a.remove && a.remove(!1);
        });
        m && e.axes.forEach(function (a) {
          a.update({}, !1);
        });
        h && e.getSeriesOrderByLinks().forEach(function (a) {
          a.chart && a.update({}, !1);
        }, this);
        m = p && p.width;
        p = p && p.height;
        B(p) && (p = T(p, m || e.chartWidth));
        l || q(m) && m !== e.chartWidth || q(p) && p !== e.chartHeight ? e.setSize(m, p, b) : M(d, !0) && e.redraw(b);
        c(e, "afterUpdate", {
          options: a,
          redraw: d,
          animation: b
        });
      },
      setSubtitle: function (a, c) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(c);
      },
      setCaption: function (a, c) {
        this.applyDescription("caption", a);
        this.layOutTitles(c);
      }
    });
    z.prototype.collectionsWithInit = {
      xAxis: [z.prototype.addAxis, [!0]],
      yAxis: [z.prototype.addAxis, [!1]],
      series: [z.prototype.addSeries]
    };
    g(C.prototype, {
      update: function (a, c, d, b) {
        function g() {
          e.applyOptions(a);
          var b = h && e.hasDummyGraphic;
          b = null === e.y ? !b : b;
          h && b && (e.graphic = h.destroy(), delete e.hasDummyGraphic);
          p(a, !0) && (h && h.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (e.graphic = h.destroy()), a && a.dataLabels && e.dataLabel && (e.dataLabel = e.dataLabel.destroy()), e.connector && (e.connector = e.connector.destroy()));
          q = e.index;
          f.updateParallelArrays(e, q);
          n.data[q] = p(n.data[q], !0) || p(a, !0) ? e.options : M(a, n.data[q]);
          f.isDirty = f.isDirtyData = !0;
          !f.fixedBox && f.hasCartesianSeries && (l.isDirtyBox = !0);
          "point" === n.legendType && (l.isDirtyLegend = !0);
          c && l.redraw(d);
        }

        var e = this,
            f = e.series,
            h = e.graphic,
            q,
            l = f.chart,
            n = f.options;
        c = M(c, !0);
        !1 === b ? g() : e.firePointEvent("update", {
          options: a
        }, g);
      },
      remove: function (a, c) {
        this.series.removePoint(this.series.data.indexOf(this), a, c);
      }
    });
    g(L.prototype, {
      addPoint: function (a, d, g, b, e) {
        var f = this.options,
            k = this.data,
            p = this.chart,
            h = this.xAxis;
        h = h && h.hasNames && h.names;
        var q = f.data,
            l = this.xData,
            n;
        d = M(d, !0);
        var u = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(u, [a]);
        var m = u.x;
        var r = l.length;
        if (this.requireSorting && m < l[r - 1]) for (n = !0; r && l[r - 1] > m;) r--;
        this.updateParallelArrays(u, "splice", r, 0, 0);
        this.updateParallelArrays(u, r);
        h && u.name && (h[m] = u.name);
        q.splice(r, 0, a);
        n && (this.data.splice(r, 0, null), this.processData());
        "point" === f.legendType && this.generatePoints();
        g && (k[0] && k[0].remove ? k[0].remove(!1) : (k.shift(), this.updateParallelArrays(u, "shift"), q.shift()));
        !1 !== e && c(this, "addPoint", {
          point: u
        });
        this.isDirtyData = this.isDirty = !0;
        d && p.redraw(b);
      },
      removePoint: function (a, c, d) {
        var b = this,
            g = b.data,
            e = g[a],
            f = b.points,
            p = b.chart,
            h = function () {
          f && f.length === g.length && f.splice(a, 1);
          g.splice(a, 1);
          b.options.data.splice(a, 1);
          b.updateParallelArrays(e || {
            series: b
          }, "splice", a, 1);
          e && e.destroy();
          b.isDirty = !0;
          b.isDirtyData = !0;
          c && p.redraw();
        };

        v(d, p);
        c = M(c, !0);
        e ? e.firePointEvent("remove", null, h) : h();
      },
      remove: function (a, d, g, b) {
        function e() {
          f.destroy(b);
          f.remove = null;
          p.isDirtyLegend = p.isDirtyBox = !0;
          p.linkSeries();
          M(a, !0) && p.redraw(d);
        }

        var f = this,
            p = f.chart;
        !1 !== g ? c(f, "remove", null, e) : e();
      },
      update: function (a, e) {
        a = F.cleanRecursively(a, this.userOptions);
        c(this, "update", {
          options: a
        });
        var f = this,
            b = f.chart,
            k = f.userOptions,
            p = f.initialType || f.type,
            h = b.options.plotOptions,
            q = a.type || k.type || b.options.chart.type,
            l = !(this.hasDerivedData || q && q !== this.type || "undefined" !== typeof a.pointStart || "undefined" !== typeof a.pointInterval || f.hasOptionChanged("dataGrouping") || f.hasOptionChanged("pointStart") || f.hasOptionChanged("pointInterval") || f.hasOptionChanged("pointIntervalUnit") || f.hasOptionChanged("keys")),
            n = x[p].prototype,
            m,
            r = ["eventOptions", "navigatorSeries", "baseSeries"],
            w = f.finishedAnimating && {
          animation: !1
        },
            v = {};
        l && (r.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && r.push("area", "graph"), f.parallelArrays.forEach(function (a) {
          r.push(a + "Data");
        }), a.data && (a.dataSorting && g(f.options.dataSorting, a.dataSorting), this.setData(a.data, !1)));
        a = A(k, w, {
          index: "undefined" === typeof k.index ? f.index : k.index,
          pointStart: M(h && h.series && h.series.pointStart, k.pointStart, f.xData[0])
        }, !l && {
          data: f.options.data
        }, a);
        l && a.data && (a.data = f.options.data);
        r = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(r);
        r.forEach(function (a) {
          r[a] = f[a];
          delete f[a];
        });
        f.remove(!1, null, !1, !0);

        for (m in n) f[m] = void 0;

        x[q || p] ? g(f, x[q || p].prototype) : d(17, !0, b, {
          missingModuleFor: q || p
        });
        r.forEach(function (a) {
          f[a] = r[a];
        });
        f.init(b, a);

        if (l && this.points) {
          var B = f.options;
          !1 === B.visible ? (v.graphic = 1, v.dataLabel = 1) : f._hasPointLabels || (a = B.marker, k = B.dataLabels, a && (!1 === a.enabled || "symbol" in a) && (v.graphic = 1), k && !1 === k.enabled && (v.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(v).length && a.destroyElements(v), !1 === B.showInLegend && a.legendItem && b.legend.destroyItem(a));
          }, this);
        }

        f.initialType = p;
        b.linkSeries();
        c(this, "afterUpdate");
        M(e, !0) && b.redraw(l ? void 0 : !1);
      },
      setName: function (a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      },
      hasOptionChanged: function (a) {
        var c = this.options[a],
            d = this.chart.options.plotOptions,
            b = this.userOptions[a];
        return b ? c !== b : c !== M(d && d[this.type] && d[this.type][a], d && d.series && d.series[a], c);
      }
    });
    g(h.prototype, {
      update: function (a, c) {
        var d = this.chart,
            b = a && a.events || {};
        a = A(this.userOptions, a);
        d.options[this.coll].indexOf && (d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)] = a);
        G(d.options[this.coll].events, function (a, c) {
          "undefined" === typeof b[c] && (b[c] = void 0);
        });
        this.destroy(!0);
        this.init(d, g(a, {
          events: b
        }));
        d.isDirtyBox = !0;
        M(c, !0) && d.redraw();
      },
      remove: function (c) {
        for (var d = this.chart, g = this.coll, b = this.series, e = b.length; e--;) b[e] && b[e].remove(!1);

        r(d.axes, this);
        r(d[g], this);
        a(d.options[g]) ? d.options[g].splice(this.options.index, 1) : delete d.options[g];
        d[g].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        d.isDirtyBox = !0;
        M(c, !0) && d.redraw();
      },
      setTitle: function (a, c) {
        this.update({
          title: a
        }, c);
      },
      setCategories: function (a, c) {
        this.update({
          categories: a
        }, c);
      }
    });
  });
  N(m, "Series/AreaSeries.js", [m["Core/Series/Series.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Core/Utilities.js"]], function (f, h, m, z, F) {
    var L = h.parse,
        K = F.objectEach,
        C = F.pick,
        y = m.Series;
    f.seriesType("area", "line", {
      threshold: 0
    }, {
      singleStacks: !1,
      getStackPoints: function (e) {
        var f = [],
            h = [],
            m = this.xAxis,
            D = this.yAxis,
            n = D.stacking.stacks[this.stackKey],
            l = {},
            y = this.index,
            w = D.series,
            r = w.length,
            d = C(D.options.reversedStacks, !0) ? 1 : -1,
            g;
        e = e || this.points;

        if (this.options.stacking) {
          for (g = 0; g < e.length; g++) e[g].leftNull = e[g].rightNull = void 0, l[e[g].x] = e[g];

          K(n, function (a, c) {
            null !== a.total && h.push(c);
          });
          h.sort(function (a, c) {
            return a - c;
          });
          var c = w.map(function (a) {
            return a.visible;
          });
          h.forEach(function (a, e) {
            var p = 0,
                q,
                w;
            if (l[a] && !l[a].isNull) f.push(l[a]), [-1, 1].forEach(function (f) {
              var p = 1 === f ? "rightNull" : "leftNull",
                  m = 0,
                  v = n[h[e + f]];
              if (v) for (g = y; 0 <= g && g < r;) q = v.points[g], q || (g === y ? l[a][p] = !0 : c[g] && (w = n[a].points[g]) && (m -= w[1] - w[0])), g += d;
              l[a][1 === f ? "rightCliff" : "leftCliff"] = m;
            });else {
              for (g = y; 0 <= g && g < r;) {
                if (q = n[a].points[g]) {
                  p = q[1];
                  break;
                }

                g += d;
              }

              p = D.translate(p, 0, 1, 0, 1);
              f.push({
                isNull: !0,
                plotX: m.translate(a, 0, 0, 0, 1),
                x: a,
                plotY: p,
                yBottom: p
              });
            }
          });
        }

        return f;
      },
      getGraphPath: function (e) {
        var f = y.prototype.getGraphPath,
            h = this.options,
            m = h.stacking,
            D = this.yAxis,
            n,
            l = [],
            z = [],
            w = this.index,
            r = D.stacking.stacks[this.stackKey],
            d = h.threshold,
            g = Math.round(D.getThreshold(h.threshold));
        h = C(h.connectNulls, "percent" === m);

        var c = function (a, c, f) {
          var p = e[a];
          a = m && r[p.x].points[w];
          var h = p[f + "Null"] || 0;
          f = p[f + "Cliff"] || 0;
          p = !0;

          if (f || h) {
            var n = (h ? a[0] : a[1]) + f;
            var v = a[0] + f;
            p = !!h;
          } else !m && e[c] && e[c].isNull && (n = v = d);

          "undefined" !== typeof n && (z.push({
            plotX: q,
            plotY: null === n ? g : D.getThreshold(n),
            isNull: p,
            isCliff: !0
          }), l.push({
            plotX: q,
            plotY: null === v ? g : D.getThreshold(v),
            doCurve: !1
          }));
        };

        e = e || this.points;
        m && (e = this.getStackPoints(e));

        for (n = 0; n < e.length; n++) {
          m || (e[n].leftCliff = e[n].rightCliff = e[n].leftNull = e[n].rightNull = void 0);
          var a = e[n].isNull;
          var q = C(e[n].rectPlotX, e[n].plotX);
          var p = m ? e[n].yBottom : g;
          if (!a || h) h || c(n, n - 1, "left"), a && !m && h || (z.push(e[n]), l.push({
            x: n,
            plotX: q,
            plotY: p
          })), h || c(n, n + 1, "right");
        }

        n = f.call(this, z, !0, !0);
        l.reversed = !0;
        a = f.call(this, l, !0, !0);
        (p = a[0]) && "M" === p[0] && (a[0] = ["L", p[1], p[2]]);
        a = n.concat(a);
        f = f.call(this, z, !1, h);
        a.xMap = n.xMap;
        this.areaPath = a;
        return f;
      },
      drawGraph: function () {
        this.areaPath = [];
        y.prototype.drawGraph.apply(this);
        var e = this,
            f = this.areaPath,
            h = this.options,
            m = [["area", "highcharts-area", this.color, h.fillColor]];
        this.zones.forEach(function (f, n) {
          m.push(["zone-area-" + n, "highcharts-area highcharts-zone-area-" + n + " " + f.className, f.color || e.color, f.fillColor || h.fillColor]);
        });
        m.forEach(function (m) {
          var n = m[0],
              l = e[n],
              v = l ? "animate" : "attr",
              w = {};
          l ? (l.endX = e.preventGraphAnimation ? null : f.xMap, l.animate({
            d: f
          })) : (w.zIndex = 0, l = e[n] = e.chart.renderer.path(f).addClass(m[1]).add(e.group), l.isArea = !0);
          e.chart.styledMode || (w.fill = C(m[3], L(m[2]).setOpacity(C(h.fillOpacity, .75)).get()));
          l[v](w);
          l.startX = f.xMap;
          l.shiftUnit = h.step ? 2 : 1;
        });
      },
      drawLegendSymbol: z.drawRectangle
    });
    "";
  });
  N(m, "Series/SplineSeries.js", [m["Core/Series/Series.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.pick;
    f.seriesType("spline", "line", {}, {
      getPointSpline: function (f, h, L) {
        var z = h.plotX || 0,
            C = h.plotY || 0,
            y = f[L - 1];
        L = f[L + 1];

        if (y && !y.isNull && !1 !== y.doCurve && !h.isCliff && L && !L.isNull && !1 !== L.doCurve && !h.isCliff) {
          f = y.plotY || 0;
          var e = L.plotX || 0;
          L = L.plotY || 0;
          var F = 0;
          var v = (1.5 * z + (y.plotX || 0)) / 2.5;
          var x = (1.5 * C + f) / 2.5;
          e = (1.5 * z + e) / 2.5;
          var D = (1.5 * C + L) / 2.5;
          e !== v && (F = (D - x) * (e - z) / (e - v) + C - D);
          x += F;
          D += F;
          x > f && x > C ? (x = Math.max(f, C), D = 2 * C - x) : x < f && x < C && (x = Math.min(f, C), D = 2 * C - x);
          D > L && D > C ? (D = Math.max(L, C), x = 2 * C - D) : D < L && D < C && (D = Math.min(L, C), x = 2 * C - D);
          h.rightContX = e;
          h.rightContY = D;
        }

        h = ["C", m(y.rightContX, y.plotX, 0), m(y.rightContY, y.plotY, 0), m(v, z, 0), m(x, C, 0), z, C];
        y.rightContX = y.rightContY = void 0;
        return h;
      }
    });
    "";
  });
  N(m, "Series/AreaSplineSeries.js", [m["Core/Series/Series.js"], m["Mixins/LegendSymbol.js"], m["Core/Options.js"]], function (f, h, m) {
    var z = f.seriesTypes.area.prototype;
    f.seriesType("areaspline", "spline", m.defaultOptions.plotOptions.area, {
      getStackPoints: z.getStackPoints,
      getGraphPath: z.getGraphPath,
      drawGraph: z.drawGraph,
      drawLegendSymbol: h.drawRectangle
    });
    "";
  });
  N(m, "Series/ColumnSeries.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Series/Series.js"], m["Core/Color/Color.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Series/LineSeries.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K) {
    var C = f.animObject,
        y = m.parse;
    f = z.noop;
    var e = K.clamp,
        I = K.defined,
        v = K.extend,
        x = K.isArray,
        D = K.isNumber,
        n = K.merge,
        l = K.pick,
        J = K.objectEach;
    "";
    h = h.seriesType("column", "line", {
      borderRadius: 0,
      centerInCategory: !1,
      groupPadding: .2,
      marker: null,
      pointPadding: .1,
      minPointLength: 0,
      cropThreshold: 50,
      pointRange: null,
      states: {
        hover: {
          halo: !1,
          brightness: .1
        },
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      },
      dataLabels: {
        align: void 0,
        verticalAlign: void 0,
        y: void 0
      },
      startFromThreshold: !0,
      stickyTracking: !1,
      tooltip: {
        distance: 6
      },
      threshold: 0,
      borderColor: "#ffffff"
    }, {
      cropShoulder: 0,
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      negStacks: !0,
      init: function () {
        L.prototype.init.apply(this, arguments);
        var e = this,
            f = e.chart;
        f.hasRendered && f.series.forEach(function (d) {
          d.type === e.type && (d.isDirty = !0);
        });
      },
      getColumnMetrics: function () {
        var e = this,
            f = e.options,
            d = e.xAxis,
            g = e.yAxis,
            c = d.options.reversedStacks;
        c = d.reversed && !c || !d.reversed && c;
        var a,
            h = {},
            p = 0;
        !1 === f.grouping ? p = 1 : e.chart.series.forEach(function (c) {
          var d = c.yAxis,
              f = c.options;

          if (c.type === e.type && (c.visible || !e.chart.options.chart.ignoreHiddenSeries) && g.len === d.len && g.pos === d.pos) {
            if (f.stacking && "group" !== f.stacking) {
              a = c.stackKey;
              "undefined" === typeof h[a] && (h[a] = p++);
              var q = h[a];
            } else !1 !== f.grouping && (q = p++);

            c.columnIndex = q;
          }
        });
        var n = Math.min(Math.abs(d.transA) * (d.ordinal && d.ordinal.slope || f.pointRange || d.closestPointRange || d.tickInterval || 1), d.len),
            m = n * f.groupPadding,
            v = (n - 2 * m) / (p || 1);
        f = Math.min(f.maxPointWidth || d.len, l(f.pointWidth, v * (1 - 2 * f.pointPadding)));
        e.columnMetrics = {
          width: f,
          offset: (v - f) / 2 + (m + ((e.columnIndex || 0) + (c ? 1 : 0)) * v - n / 2) * (c ? -1 : 1),
          paddedWidth: v,
          columnCount: p
        };
        return e.columnMetrics;
      },
      crispCol: function (e, f, d, g) {
        var c = this.chart,
            a = this.borderWidth,
            h = -(a % 2 ? .5 : 0);
        a = a % 2 ? .5 : 1;
        c.inverted && c.renderer.isVML && (a += 1);
        this.options.crisp && (d = Math.round(e + d) + h, e = Math.round(e) + h, d -= e);
        g = Math.round(f + g) + a;
        h = .5 >= Math.abs(f) && .5 < g;
        f = Math.round(f) + a;
        g -= f;
        h && g && (--f, g += 1);
        return {
          x: e,
          y: f,
          width: d,
          height: g
        };
      },
      adjustForMissingColumns: function (e, f, d, g) {
        var c = this,
            a = this.options.stacking;

        if (!d.isNull && 1 < g.columnCount) {
          var h = 0,
              p = 0;
          J(this.yAxis.stacking && this.yAxis.stacking.stacks, function (g) {
            if ("number" === typeof d.x && (g = g[d.x.toString()])) {
              var e = g.points[c.index],
                  f = g.total;
              a ? (e && (h = p), g.hasValidPoints && p++) : x(e) && (h = e[1], p = f || 0);
            }
          });
          e = (d.plotX || 0) + ((p - 1) * g.paddedWidth + f) / 2 - f - h * g.paddedWidth;
        }

        return e;
      },
      translate: function () {
        var f = this,
            h = f.chart,
            d = f.options,
            g = f.dense = 2 > f.closestPointRange * f.xAxis.transA;
        g = f.borderWidth = l(d.borderWidth, g ? 0 : 1);
        var c = f.xAxis,
            a = f.yAxis,
            q = d.threshold,
            p = f.translatedThreshold = a.getThreshold(q),
            n = l(d.minPointLength, 5),
            m = f.getColumnMetrics(),
            v = m.width,
            x = f.barW = Math.max(v, 1 + 2 * g),
            y = f.pointXOffset = m.offset,
            z = f.dataMin,
            C = f.dataMax;
        h.inverted && (p -= .5);
        d.pointPadding && (x = Math.ceil(x));
        L.prototype.translate.apply(f);
        f.points.forEach(function (g) {
          var u = l(g.yBottom, p),
              b = 999 + Math.abs(u),
              k = v,
              t = g.plotX || 0;
          b = e(g.plotY, -b, a.len + b);
          var r = t + y,
              w = x,
              A = Math.min(b, u),
              B = Math.max(b, u) - A;

          if (n && Math.abs(B) < n) {
            B = n;
            var E = !a.reversed && !g.negative || a.reversed && g.negative;
            D(q) && D(C) && g.y === q && C <= q && (a.min || 0) < q && z !== C && (E = !E);
            A = Math.abs(A - p) > n ? u - n : p - (E ? n : 0);
          }

          I(g.options.pointWidth) && (k = w = Math.ceil(g.options.pointWidth), r -= Math.round((k - v) / 2));
          d.centerInCategory && (r = f.adjustForMissingColumns(r, k, g, m));
          g.barX = r;
          g.pointWidth = k;
          g.tooltipPos = h.inverted ? [a.len + a.pos - h.plotLeft - b, c.len + c.pos - h.plotTop - (t || 0) - y - w / 2, B] : [r + w / 2, b + a.pos - h.plotTop, B];
          g.shapeType = f.pointClass.prototype.shapeType || "rect";
          g.shapeArgs = f.crispCol.apply(f, g.isNull ? [r, p, w, 0] : [r, A, w, B]);
        });
      },
      getSymbol: f,
      drawLegendSymbol: F.drawRectangle,
      drawGraph: function () {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      },
      pointAttribs: function (e, f) {
        var d = this.options,
            g = this.pointAttrToOptions || {};
        var c = g.stroke || "borderColor";
        var a = g["stroke-width"] || "borderWidth",
            h = e && e.color || this.color,
            p = e && e[c] || d[c] || this.color || h,
            m = e && e[a] || d[a] || this[a] || 0;
        g = e && e.options.dashStyle || d.dashStyle;
        var r = l(e && e.opacity, d.opacity, 1);

        if (e && this.zones.length) {
          var v = e.getZone();
          h = e.options.color || v && (v.color || e.nonZonedColor) || this.color;
          v && (p = v.borderColor || p, g = v.dashStyle || g, m = v.borderWidth || m);
        }

        f && e && (e = n(d.states[f], e.options.states && e.options.states[f] || {}), f = e.brightness, h = e.color || "undefined" !== typeof f && y(h).brighten(e.brightness).get() || h, p = e[c] || p, m = e[a] || m, g = e.dashStyle || g, r = l(e.opacity, r));
        c = {
          fill: h,
          stroke: p,
          "stroke-width": m,
          opacity: r
        };
        g && (c.dashstyle = g);
        return c;
      },
      drawPoints: function () {
        var e = this,
            f = this.chart,
            d = e.options,
            g = f.renderer,
            c = d.animationLimit || 250,
            a;
        e.points.forEach(function (h) {
          var p = h.graphic,
              l = !!p,
              q = p && f.pointCount < c ? "animate" : "attr";

          if (D(h.plotY) && null !== h.y) {
            a = h.shapeArgs;
            p && h.hasNewShapeType() && (p = p.destroy());
            e.enabledDataSorting && (h.startXPos = e.xAxis.reversed ? -(a ? a.width : 0) : e.xAxis.width);
            p || (h.graphic = p = g[h.shapeType](a).add(h.group || e.group)) && e.enabledDataSorting && f.hasRendered && f.pointCount < c && (p.attr({
              x: h.startXPos
            }), l = !0, q = "animate");
            if (p && l) p[q](n(a));
            if (d.borderRadius) p[q]({
              r: d.borderRadius
            });
            f.styledMode || p[q](e.pointAttribs(h, h.selected && "select")).shadow(!1 !== h.allowShadow && d.shadow, null, d.stacking && !d.borderRadius);
            p.addClass(h.getClassName(), !0);
          } else p && (h.graphic = p.destroy());
        });
      },
      animate: function (f) {
        var h = this,
            d = this.yAxis,
            g = h.options,
            c = this.chart.inverted,
            a = {},
            l = c ? "translateX" : "translateY";
        if (f) a.scaleY = .001, f = e(d.toPixels(g.threshold), d.pos, d.pos + d.len), c ? a.translateX = f - d.len : a.translateY = f, h.clipBox && h.setClip(), h.group.attr(a);else {
          var p = h.group.attr(l);
          h.group.animate({
            scaleY: 1
          }, v(C(h.options.animation), {
            step: function (c, g) {
              h.group && (a[l] = p + g.pos * (d.pos - p), h.group.attr(a));
            }
          }));
        }
      },
      remove: function () {
        var e = this,
            f = e.chart;
        f.hasRendered && f.series.forEach(function (d) {
          d.type === e.type && (d.isDirty = !0);
        });
        L.prototype.remove.apply(e, arguments);
      }
    });
    "";
    return h;
  });
  N(m, "Series/BarSeries.js", [m["Core/Series/Series.js"]], function (f) {
    f.seriesType("bar", "column", null, {
      inverted: !0
    });
    "";
  });
  N(m, "Series/ScatterSeries.js", [m["Core/Series/Series.js"], m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h, m) {
    m = m.addEvent;
    var z = h.Series;
    f.seriesType("scatter", "line", {
      lineWidth: 0,
      findNearestPointBy: "xy",
      jitter: {
        x: 0,
        y: 0
      },
      marker: {
        enabled: !0
      },
      tooltip: {
        headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
      }
    }, {
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1,
      drawGraph: function () {
        (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && z.prototype.drawGraph.call(this);
      },
      applyJitter: function () {
        var f = this,
            h = this.options.jitter,
            m = this.points.length;
        h && this.points.forEach(function (z, y) {
          ["x", "y"].forEach(function (e, C) {
            var v = "plot" + e.toUpperCase();

            if (h[e] && !z.isNull) {
              var x = f[e + "Axis"];
              var D = h[e] * x.transA;

              if (x && !x.isLog) {
                var n = Math.max(0, z[v] - D);
                x = Math.min(x.len, z[v] + D);
                C = 1E4 * Math.sin(y + C * m);
                z[v] = n + (x - n) * (C - Math.floor(C));
                "x" === e && (z.clientX = z.plotX);
              }
            }
          });
        });
      }
    });
    m(z, "afterTranslate", function () {
      this.applyJitter && this.applyJitter();
    });
    "";
  });
  N(m, "Mixins/CenteredSeries.js", [m["Core/Globals.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.isNumber,
        z = h.pick,
        F = h.relativeLength,
        L = f.deg2rad;
    return f.CenteredSeriesMixin = {
      getCenter: function () {
        var h = this.options,
            m = this.chart,
            y = 2 * (h.slicedOffset || 0),
            e = m.plotWidth - 2 * y,
            I = m.plotHeight - 2 * y,
            v = h.center,
            x = Math.min(e, I),
            D = h.size,
            n = h.innerSize || 0;
        "string" === typeof D && (D = parseFloat(D));
        "string" === typeof n && (n = parseFloat(n));
        h = [z(v[0], "50%"), z(v[1], "50%"), z(D && 0 > D ? void 0 : h.size, "100%"), z(n && 0 > n ? void 0 : h.innerSize || 0, "0%")];
        !m.angular || this instanceof f.Series || (h[3] = 0);

        for (v = 0; 4 > v; ++v) D = h[v], m = 2 > v || 2 === v && /%$/.test(D), h[v] = F(D, [e, I, x, h[2]][v]) + (m ? y : 0);

        h[3] > h[2] && (h[3] = h[2]);
        return h;
      },
      getStartAndEndRadians: function (f, h) {
        f = m(f) ? f : 0;
        h = m(h) && h > f && 360 > h - f ? h : f + 360;
        return {
          start: L * (f + -90),
          end: L * (h + -90)
        };
      }
    };
  });
  N(m, "Series/PieSeries.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Series/Series.js"], m["Mixins/CenteredSeries.js"], m["Core/Globals.js"], m["Mixins/LegendSymbol.js"], m["Series/LineSeries.js"], m["Core/Series/Point.js"], m["Core/Renderer/SVG/SVGRenderer.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K, C, y) {
    var e = f.setAnimation,
        I = m.getStartAndEndRadians;
    f = z.noop;
    var v = y.addEvent,
        x = y.clamp,
        D = y.defined,
        n = y.fireEvent,
        l = y.isNumber,
        J = y.merge,
        w = y.pick,
        r = y.relativeLength;
    h.seriesType("pie", "line", {
      center: [null, null],
      clip: !1,
      colorByPoint: !0,
      dataLabels: {
        allowOverlap: !0,
        connectorPadding: 5,
        connectorShape: "fixedOffset",
        crookDistance: "70%",
        distance: 30,
        enabled: !0,
        formatter: function () {
          return this.point.isNull ? void 0 : this.point.name;
        },
        softConnector: !0,
        x: 0
      },
      fillColor: void 0,
      ignoreHiddenPoint: !0,
      inactiveOtherPoints: !0,
      legendType: "point",
      marker: null,
      size: null,
      showInLegend: !1,
      slicedOffset: 10,
      stickyTracking: !1,
      tooltip: {
        followPointer: !0
      },
      borderColor: "#ffffff",
      borderWidth: 1,
      lineWidth: void 0,
      states: {
        hover: {
          brightness: .1
        }
      }
    }, {
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      axisTypes: [],
      pointAttribs: h.seriesTypes.column.prototype.pointAttribs,
      animate: function (d) {
        var g = this,
            c = g.points,
            a = g.startAngleRad;
        d || c.forEach(function (c) {
          var d = c.graphic,
              e = c.shapeArgs;
          d && e && (d.attr({
            r: w(c.startR, g.center && g.center[3] / 2),
            start: a,
            end: a
          }), d.animate({
            r: e.r,
            start: e.start,
            end: e.end
          }, g.options.animation));
        });
      },
      hasData: function () {
        return !!this.processedXData.length;
      },
      updateTotals: function () {
        var d,
            g = 0,
            c = this.points,
            a = c.length,
            e = this.options.ignoreHiddenPoint;

        for (d = 0; d < a; d++) {
          var f = c[d];
          g += e && !f.visible ? 0 : f.isNull ? 0 : f.y;
        }

        this.total = g;

        for (d = 0; d < a; d++) f = c[d], f.percentage = 0 < g && (f.visible || !e) ? f.y / g * 100 : 0, f.total = g;
      },
      generatePoints: function () {
        L.prototype.generatePoints.call(this);
        this.updateTotals();
      },
      getX: function (d, g, c) {
        var a = this.center,
            e = this.radii ? this.radii[c.index] : a[2] / 2;
        d = Math.asin(x((d - a[1]) / (e + c.labelDistance), -1, 1));
        return a[0] + (g ? -1 : 1) * Math.cos(d) * (e + c.labelDistance) + (0 < c.labelDistance ? (g ? -1 : 1) * this.options.dataLabels.padding : 0);
      },
      translate: function (d) {
        this.generatePoints();
        var g = 0,
            c = this.options,
            a = c.slicedOffset,
            e = a + (c.borderWidth || 0),
            f = I(c.startAngle, c.endAngle),
            h = this.startAngleRad = f.start;
        f = (this.endAngleRad = f.end) - h;
        var l = this.points,
            m = c.dataLabels.distance;
        c = c.ignoreHiddenPoint;
        var v,
            x = l.length;
        d || (this.center = d = this.getCenter());

        for (v = 0; v < x; v++) {
          var y = l[v];
          var z = h + g * f;
          if (!c || y.visible) g += y.percentage / 100;
          var E = h + g * f;
          y.shapeType = "arc";
          y.shapeArgs = {
            x: d[0],
            y: d[1],
            r: d[2] / 2,
            innerR: d[3] / 2,
            start: Math.round(1E3 * z) / 1E3,
            end: Math.round(1E3 * E) / 1E3
          };
          y.labelDistance = w(y.options.dataLabels && y.options.dataLabels.distance, m);
          y.labelDistance = r(y.labelDistance, y.shapeArgs.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, y.labelDistance);
          E = (E + z) / 2;
          E > 1.5 * Math.PI ? E -= 2 * Math.PI : E < -Math.PI / 2 && (E += 2 * Math.PI);
          y.slicedTranslation = {
            translateX: Math.round(Math.cos(E) * a),
            translateY: Math.round(Math.sin(E) * a)
          };
          var u = Math.cos(E) * d[2] / 2;
          var b = Math.sin(E) * d[2] / 2;
          y.tooltipPos = [d[0] + .7 * u, d[1] + .7 * b];
          y.half = E < -Math.PI / 2 || E > Math.PI / 2 ? 1 : 0;
          y.angle = E;
          z = Math.min(e, y.labelDistance / 5);
          y.labelPosition = {
            natural: {
              x: d[0] + u + Math.cos(E) * y.labelDistance,
              y: d[1] + b + Math.sin(E) * y.labelDistance
            },
            "final": {},
            alignment: 0 > y.labelDistance ? "center" : y.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: d[0] + u + Math.cos(E) * z,
                y: d[1] + b + Math.sin(E) * z
              },
              touchingSliceAt: {
                x: d[0] + u,
                y: d[1] + b
              }
            }
          };
        }

        n(this, "afterTranslate");
      },
      drawEmpty: function () {
        var d = this.startAngleRad,
            g = this.endAngleRad,
            c = this.options;

        if (0 === this.total && this.center) {
          var a = this.center[0];
          var e = this.center[1];
          this.graph || (this.graph = this.chart.renderer.arc(a, e, this.center[1] / 2, 0, d, g).addClass("highcharts-empty-series").add(this.group));
          this.graph.attr({
            d: C.prototype.symbols.arc(a, e, this.center[2] / 2, 0, {
              start: d,
              end: g,
              innerR: this.center[3] / 2
            })
          });
          this.chart.styledMode || this.graph.attr({
            "stroke-width": c.borderWidth,
            fill: c.fillColor || "none",
            stroke: c.color || "#cccccc"
          });
        } else this.graph && (this.graph = this.graph.destroy());
      },
      redrawPoints: function () {
        var d = this,
            e = d.chart,
            c = e.renderer,
            a,
            f,
            h,
            l,
            n = d.options.shadow;
        this.drawEmpty();
        !n || d.shadowGroup || e.styledMode || (d.shadowGroup = c.g("shadow").attr({
          zIndex: -1
        }).add(d.group));
        d.points.forEach(function (g) {
          var p = {};
          f = g.graphic;

          if (!g.isNull && f) {
            l = g.shapeArgs;
            a = g.getTranslate();

            if (!e.styledMode) {
              var q = g.shadowGroup;
              n && !q && (q = g.shadowGroup = c.g("shadow").add(d.shadowGroup));
              q && q.attr(a);
              h = d.pointAttribs(g, g.selected && "select");
            }

            g.delayedRendering ? (f.setRadialReference(d.center).attr(l).attr(a), e.styledMode || f.attr(h).attr({
              "stroke-linejoin": "round"
            }).shadow(n, q), g.delayedRendering = !1) : (f.setRadialReference(d.center), e.styledMode || J(!0, p, h), J(!0, p, l, a), f.animate(p));
            f.attr({
              visibility: g.visible ? "inherit" : "hidden"
            });
            f.addClass(g.getClassName());
          } else f && (g.graphic = f.destroy());
        });
      },
      drawPoints: function () {
        var d = this.chart.renderer;
        this.points.forEach(function (e) {
          e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy());
          e.graphic || (e.graphic = d[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0);
        });
      },
      searchPoint: f,
      sortByAngle: function (d, e) {
        d.sort(function (c, a) {
          return "undefined" !== typeof c.angle && (a.angle - c.angle) * e;
        });
      },
      drawLegendSymbol: F.drawRectangle,
      getCenter: m.getCenter,
      getSymbol: f,
      drawGraph: null
    }, {
      init: function () {
        K.prototype.init.apply(this, arguments);
        var d = this;
        d.name = w(d.name, "Slice");

        var e = function (c) {
          d.slice("select" === c.type);
        };

        v(d, "select", e);
        v(d, "unselect", e);
        return d;
      },
      isValid: function () {
        return l(this.y) && 0 <= this.y;
      },
      setVisible: function (d, e) {
        var c = this,
            a = c.series,
            g = a.chart,
            f = a.options.ignoreHiddenPoint;
        e = w(e, f);
        d !== c.visible && (c.visible = c.options.visible = d = "undefined" === typeof d ? !c.visible : d, a.options.data[a.data.indexOf(c)] = c.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (a) {
          if (c[a]) c[a][d ? "show" : "hide"](!0);
        }), c.legendItem && g.legend.colorizeItem(c, d), d || "hover" !== c.state || c.setState(""), f && (a.isDirty = !0), e && g.redraw());
      },
      slice: function (d, g, c) {
        var a = this.series;
        e(c, a.chart);
        w(g, !0);
        this.sliced = this.options.sliced = D(d) ? d : !this.sliced;
        a.options.data[a.data.indexOf(this)] = this.options;
        this.graphic && this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function () {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      },
      haloPath: function (d) {
        var e = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + d, e.r + d, {
          innerR: e.r - 1,
          start: e.start,
          end: e.end
        });
      },
      connectorShapes: {
        fixedOffset: function (d, e, c) {
          var a = e.breakAt;
          e = e.touchingSliceAt;
          return [["M", d.x, d.y], c.softConnector ? ["C", d.x + ("left" === d.alignment ? -5 : 5), d.y, 2 * a.x - e.x, 2 * a.y - e.y, a.x, a.y] : ["L", a.x, a.y], ["L", e.x, e.y]];
        },
        straight: function (d, e) {
          e = e.touchingSliceAt;
          return [["M", d.x, d.y], ["L", e.x, e.y]];
        },
        crookedLine: function (d, e, c) {
          e = e.touchingSliceAt;
          var a = this.series,
              g = a.center[0],
              f = a.chart.plotWidth,
              h = a.chart.plotLeft;
          a = d.alignment;
          var l = this.shapeArgs.r;
          c = r(c.crookDistance, 1);
          f = "left" === a ? g + l + (f + h - g - l) * (1 - c) : h + (g - l) * c;
          c = ["L", f, d.y];
          g = !0;
          if ("left" === a ? f > d.x || f < e.x : f < d.x || f > e.x) g = !1;
          d = [["M", d.x, d.y]];
          g && d.push(c);
          d.push(["L", e.x, e.y]);
          return d;
        }
      },
      getConnectorPath: function () {
        var d = this.labelPosition,
            e = this.series.options.dataLabels,
            c = e.connectorShape,
            a = this.connectorShapes;
        a[c] && (c = a[c]);
        return c.call(this, {
          x: d.final.x,
          y: d.final.y,
          alignment: d.alignment
        }, d.connectorPosition, e);
      }
    });
    "";
  });
  N(m, "Core/Series/DataLabels.js", [m["Core/Animation/AnimationUtilities.js"], m["Core/Globals.js"], m["Core/Series/CartesianSeries.js"], m["Core/Utilities.js"]], function (f, h, m, z) {
    var F = f.getDeferredAnimation;
    f = h.noop;
    var L = h.seriesTypes,
        K = z.arrayMax,
        C = z.clamp,
        y = z.defined,
        e = z.extend,
        I = z.fireEvent,
        v = z.format,
        x = z.isArray,
        D = z.merge,
        n = z.objectEach,
        l = z.pick,
        J = z.relativeLength,
        w = z.splat,
        r = z.stableSort;
    "";

    h.distribute = function (d, e, c) {
      function a(a, c) {
        return a.target - c.target;
      }

      var f,
          g = !0,
          n = d,
          m = [];
      var v = 0;
      var w = n.reducedLen || e;

      for (f = d.length; f--;) v += d[f].size;

      if (v > w) {
        r(d, function (a, c) {
          return (c.rank || 0) - (a.rank || 0);
        });

        for (v = f = 0; v <= w;) v += d[f].size, f++;

        m = d.splice(f - 1, d.length);
      }

      r(d, a);

      for (d = d.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: l(a.align, .5)
        };
      }); g;) {
        for (f = d.length; f--;) g = d[f], v = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = C(v - g.size * g.align, 0, e - g.size);

        f = d.length;

        for (g = !1; f--;) 0 < f && d[f - 1].pos + d[f - 1].size > d[f].pos && (d[f - 1].size += d[f].size, d[f - 1].targets = d[f - 1].targets.concat(d[f].targets), d[f - 1].align = .5, d[f - 1].pos + d[f - 1].size > e && (d[f - 1].pos = e - d[f - 1].size), d.splice(f, 1), g = !0);
      }

      n.push.apply(n, m);
      f = 0;
      d.some(function (a) {
        var d = 0;
        if (a.targets.some(function () {
          n[f].pos = a.pos + d;
          if ("undefined" !== typeof c && Math.abs(n[f].pos - n[f].target) > c) return n.slice(0, f + 1).forEach(function (a) {
            delete a.pos;
          }), n.reducedLen = (n.reducedLen || e) - .1 * e, n.reducedLen > .1 * e && h.distribute(n, e, c), !0;
          d += n[f].size;
          f++;
        })) return !0;
      });
      r(n, a);
    };

    m.prototype.drawDataLabels = function () {
      function d(a, c) {
        var d = c.filter;
        return d ? (c = d.operator, a = a[d.property], d = d.value, ">" === c && a > d || "<" === c && a < d || ">=" === c && a >= d || "<=" === c && a <= d || "==" === c && a == d || "===" === c && a === d ? !0 : !1) : !0;
      }

      function e(a, c) {
        var d = [],
            b;
        if (x(a) && !x(c)) d = a.map(function (a) {
          return D(a, c);
        });else if (x(c) && !x(a)) d = c.map(function (b) {
          return D(a, b);
        });else if (x(a) || x(c)) for (b = Math.max(a.length, c.length); b--;) d[b] = D(a[b], c[b]);else d = D(a, c);
        return d;
      }

      var c = this,
          a = c.chart,
          f = c.options,
          h = f.dataLabels,
          m = c.points,
          r,
          G = c.hasRendered || 0,
          z = h.animation;
      z = h.defer ? F(a, z, c) : {
        defer: 0,
        duration: 0
      };
      var C = a.renderer;
      h = e(e(a.options.plotOptions && a.options.plotOptions.series && a.options.plotOptions.series.dataLabels, a.options.plotOptions && a.options.plotOptions[c.type] && a.options.plotOptions[c.type].dataLabels), h);
      I(this, "drawDataLabels");

      if (x(h) || h.enabled || c._hasPointLabels) {
        var J = c.plotGroup("dataLabelsGroup", "data-labels", G ? "inherit" : "hidden", h.zIndex || 6);
        J.attr({
          opacity: +G
        });
        !G && (G = c.dataLabelsGroup) && (c.visible && J.show(!0), G[f.animation ? "animate" : "attr"]({
          opacity: 1
        }, z));
        m.forEach(function (g) {
          r = w(e(h, g.dlOptions || g.options && g.options.dataLabels));
          r.forEach(function (e, h) {
            var b = e.enabled && (!g.isNull || g.dataLabelOnNull) && d(g, e),
                k = g.dataLabels ? g.dataLabels[h] : g.dataLabel,
                p = g.connectors ? g.connectors[h] : g.connector,
                m = l(e.distance, g.labelDistance),
                q = !k;

            if (b) {
              var u = g.getLabelConfig();
              var r = l(e[g.formatPrefix + "Format"], e.format);
              u = y(r) ? v(r, u, a) : (e[g.formatPrefix + "Formatter"] || e.formatter).call(u, e);
              r = e.style;
              var A = e.rotation;
              a.styledMode || (r.color = l(e.color, r.color, c.color, "#000000"), "contrast" === r.color ? (g.contrastColor = C.getContrast(g.color || c.color), r.color = !y(m) && e.inside || 0 > m || f.stacking ? g.contrastColor : "#000000") : delete g.contrastColor, f.cursor && (r.cursor = f.cursor));
              var w = {
                r: e.borderRadius || 0,
                rotation: A,
                padding: e.padding,
                zIndex: 1
              };
              a.styledMode || (w.fill = e.backgroundColor, w.stroke = e.borderColor, w["stroke-width"] = e.borderWidth);
              n(w, function (a, b) {
                "undefined" === typeof a && delete w[b];
              });
            }

            !k || b && y(u) ? b && y(u) && (k ? w.text = u : (g.dataLabels = g.dataLabels || [], k = g.dataLabels[h] = A ? C.text(u, 0, -9999, e.useHTML).addClass("highcharts-data-label") : C.label(u, 0, -9999, e.shape, null, null, e.useHTML, null, "data-label"), h || (g.dataLabel = k), k.addClass(" highcharts-data-label-color-" + g.colorIndex + " " + (e.className || "") + (e.useHTML ? " highcharts-tracker" : ""))), k.options = e, k.attr(w), a.styledMode || k.css(r).shadow(e.shadow), k.added || k.add(J), e.textPath && !e.useHTML && (k.setTextPath(g.getDataLabelPath && g.getDataLabelPath(k) || g.graphic, e.textPath), g.dataLabelPath && !e.textPath.enabled && (g.dataLabelPath = g.dataLabelPath.destroy())), c.alignDataLabel(g, k, e, null, q)) : (g.dataLabel = g.dataLabel && g.dataLabel.destroy(), g.dataLabels && (1 === g.dataLabels.length ? delete g.dataLabels : delete g.dataLabels[h]), h || delete g.dataLabel, p && (g.connector = g.connector.destroy(), g.connectors && (1 === g.connectors.length ? delete g.connectors : delete g.connectors[h])));
          });
        });
      }

      I(this, "afterDrawDataLabels");
    };

    m.prototype.alignDataLabel = function (d, g, c, a, f) {
      var h = this,
          n = this.chart,
          m = this.isCartesian && n.inverted,
          q = this.enabledDataSorting,
          r = l(d.dlBox && d.dlBox.centerX, d.plotX, -9999),
          v = l(d.plotY, -9999),
          w = g.getBBox(),
          x = c.rotation,
          y = c.align,
          u = n.isInsidePlot(r, Math.round(v), m),
          b = "justify" === l(c.overflow, q ? "none" : "justify"),
          k = this.visible && !1 !== d.visible && (d.series.forceDL || q && !b || u || c.inside && a && n.isInsidePlot(r, m ? a.x + 1 : a.y + a.height - 1, m));

      var t = function (a) {
        q && h.xAxis && !b && h.setDataLabelStartPos(d, g, f, u, a);
      };

      if (k) {
        var z = n.renderer.fontMetrics(n.styledMode ? void 0 : c.style.fontSize, g).b;
        a = e({
          x: m ? this.yAxis.len - v : r,
          y: Math.round(m ? this.xAxis.len - r : v),
          width: 0,
          height: 0
        }, a);
        e(c, {
          width: w.width,
          height: w.height
        });
        x ? (b = !1, r = n.renderer.rotCorr(z, x), r = {
          x: a.x + (c.x || 0) + a.width / 2 + r.x,
          y: a.y + (c.y || 0) + {
            top: 0,
            middle: .5,
            bottom: 1
          }[c.verticalAlign] * a.height
        }, t(r), g[f ? "attr" : "animate"](r).attr({
          align: y
        }), t = (x + 720) % 360, t = 180 < t && 360 > t, "left" === y ? r.y -= t ? w.height : 0 : "center" === y ? (r.x -= w.width / 2, r.y -= w.height / 2) : "right" === y && (r.x -= w.width, r.y -= t ? 0 : w.height), g.placed = !0, g.alignAttr = r) : (t(a), g.align(c, null, a), r = g.alignAttr);
        b && 0 <= a.height ? this.justifyDataLabel(g, c, r, w, a, f) : l(c.crop, !0) && (k = n.isInsidePlot(r.x, r.y) && n.isInsidePlot(r.x + w.width, r.y + w.height));
        if (c.shape && !x) g[f ? "attr" : "animate"]({
          anchorX: m ? n.plotWidth - d.plotY : d.plotX,
          anchorY: m ? n.plotHeight - d.plotX : d.plotY
        });
      }

      f && q && (g.placed = !1);
      k || q && !b || (g.hide(!0), g.placed = !1);
    };

    m.prototype.setDataLabelStartPos = function (d, e, c, a, f) {
      var g = this.chart,
          h = g.inverted,
          l = this.xAxis,
          n = l.reversed,
          m = h ? e.height / 2 : e.width / 2;
      d = (d = d.pointWidth) ? d / 2 : 0;
      l = h ? f.x : n ? -m - d : l.width - m + d;
      f = h ? n ? this.yAxis.height - m + d : -m - d : f.y;
      e.startXPos = l;
      e.startYPos = f;
      a ? "hidden" === e.visibility && (e.show(), e.attr({
        opacity: 0
      }).animate({
        opacity: 1
      })) : e.attr({
        opacity: 1
      }).animate({
        opacity: 0
      }, void 0, e.hide);
      g.hasRendered && (c && e.attr({
        x: e.startXPos,
        y: e.startYPos
      }), e.placed = !0);
    };

    m.prototype.justifyDataLabel = function (d, e, c, a, f, h) {
      var g = this.chart,
          p = e.align,
          l = e.verticalAlign,
          n = d.box ? 0 : d.padding || 0,
          m = e.x;
      m = void 0 === m ? 0 : m;
      var q = e.y;
      var r = void 0 === q ? 0 : q;
      q = c.x + n;

      if (0 > q) {
        "right" === p && 0 <= m ? (e.align = "left", e.inside = !0) : m -= q;
        var v = !0;
      }

      q = c.x + a.width - n;
      q > g.plotWidth && ("left" === p && 0 >= m ? (e.align = "right", e.inside = !0) : m += g.plotWidth - q, v = !0);
      q = c.y + n;
      0 > q && ("bottom" === l && 0 <= r ? (e.verticalAlign = "top", e.inside = !0) : r -= q, v = !0);
      q = c.y + a.height - n;
      q > g.plotHeight && ("top" === l && 0 >= r ? (e.verticalAlign = "bottom", e.inside = !0) : r += g.plotHeight - q, v = !0);
      v && (e.x = m, e.y = r, d.placed = !h, d.align(e, void 0, f));
      return v;
    };

    L.pie && (L.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function (d) {
        return d.top + d.distributeBox.pos;
      },
      radialDistributionX: function (d, e, c, a) {
        return d.getX(c < e.top + 2 || c > e.bottom - 2 ? a : c, e.half, e);
      },
      justify: function (d, e, c) {
        return c[0] + (d.half ? -1 : 1) * (e + d.labelDistance);
      },
      alignToPlotEdges: function (d, e, c, a) {
        d = d.getBBox().width;
        return e ? d + a : c - d - a;
      },
      alignToConnectors: function (d, e, c, a) {
        var f = 0,
            g;
        d.forEach(function (a) {
          g = a.dataLabel.getBBox().width;
          g > f && (f = g);
        });
        return e ? f + a : c - f - a;
      }
    }, L.pie.prototype.drawDataLabels = function () {
      var d = this,
          e = d.data,
          c,
          a = d.chart,
          f = d.options.dataLabels || {},
          p = f.connectorPadding,
          n,
          r = a.plotWidth,
          v = a.plotHeight,
          w = a.plotLeft,
          x = Math.round(a.chartWidth / 3),
          z,
          C = d.center,
          E = C[2] / 2,
          u = C[1],
          b,
          k,
          t,
          F,
          I = [[], []],
          J,
          L,
          N,
          P,
          S = [0, 0, 0, 0],
          Y = d.dataLabelPositioners,
          W;
      d.visible && (f.enabled || d._hasPointLabels) && (e.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), m.prototype.drawDataLabels.apply(d), e.forEach(function (a) {
        a.dataLabel && (a.visible ? (I[a.half].push(a), a.dataLabel._pos = null, !y(f.style.width) && !y(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > x && (a.dataLabel.css({
          width: Math.round(.7 * x) + "px"
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), I.forEach(function (e, g) {
        var n = e.length,
            m = [],
            q;

        if (n) {
          d.sortByAngle(e, g - .5);

          if (0 < d.maxLabelDistance) {
            var A = Math.max(0, u - E - d.maxLabelDistance);
            var B = Math.min(u + E + d.maxLabelDistance, a.plotHeight);
            e.forEach(function (b) {
              0 < b.labelDistance && b.dataLabel && (b.top = Math.max(0, u - E - b.labelDistance), b.bottom = Math.min(u + E + b.labelDistance, a.plotHeight), q = b.dataLabel.getBBox().height || 21, b.distributeBox = {
                target: b.labelPosition.natural.y - b.top + q / 2,
                size: q,
                rank: b.y
              }, m.push(b.distributeBox));
            });
            A = B + q - A;
            h.distribute(m, A, A / 5);
          }

          for (P = 0; P < n; P++) {
            c = e[P];
            t = c.labelPosition;
            b = c.dataLabel;
            N = !1 === c.visible ? "hidden" : "inherit";
            L = A = t.natural.y;
            m && y(c.distributeBox) && ("undefined" === typeof c.distributeBox.pos ? N = "hidden" : (F = c.distributeBox.size, L = Y.radialDistributionY(c)));
            delete c.positionIndex;
            if (f.justify) J = Y.justify(c, E, C);else switch (f.alignTo) {
              case "connectors":
                J = Y.alignToConnectors(e, g, r, w);
                break;

              case "plotEdges":
                J = Y.alignToPlotEdges(b, g, r, w);
                break;

              default:
                J = Y.radialDistributionX(d, c, L, A);
            }
            b._attr = {
              visibility: N,
              align: t.alignment
            };
            W = c.options.dataLabels || {};
            b._pos = {
              x: J + l(W.x, f.x) + ({
                left: p,
                right: -p
              }[t.alignment] || 0),
              y: L + l(W.y, f.y) - 10
            };
            t.final.x = J;
            t.final.y = L;
            l(f.crop, !0) && (k = b.getBBox().width, A = null, J - k < p && 1 === g ? (A = Math.round(k - J + p), S[3] = Math.max(A, S[3])) : J + k > r - p && 0 === g && (A = Math.round(J + k - r + p), S[1] = Math.max(A, S[1])), 0 > L - F / 2 ? S[0] = Math.max(Math.round(-L + F / 2), S[0]) : L + F / 2 > v && (S[2] = Math.max(Math.round(L + F / 2 - v), S[2])), b.sideOverflow = A);
          }
        }
      }), 0 === K(S) || this.verifyDataLabelOverflow(S)) && (this.placeDataLabels(), this.points.forEach(function (c) {
        W = D(f, c.options.dataLabels);

        if (n = l(W.connectorWidth, 1)) {
          var e;
          z = c.connector;

          if ((b = c.dataLabel) && b._pos && c.visible && 0 < c.labelDistance) {
            N = b._attr.visibility;
            if (e = !z) c.connector = z = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c.colorIndex + (c.className ? " " + c.className : "")).add(d.dataLabelsGroup), a.styledMode || z.attr({
              "stroke-width": n,
              stroke: W.connectorColor || c.color || "#666666"
            });
            z[e ? "attr" : "animate"]({
              d: c.getConnectorPath()
            });
            z.attr("visibility", N);
          } else z && (c.connector = z.destroy());
        }
      }));
    }, L.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (d) {
        var e = d.dataLabel,
            c;
        e && d.visible && ((c = e._pos) ? (e.sideOverflow && (e._attr.width = Math.max(e.getBBox().width - e.sideOverflow, 0), e.css({
          width: e._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](c), e.moved = !0) : e && e.attr({
          y: -9999
        }));
        delete d.distributeBox;
      }, this);
    }, L.pie.prototype.alignDataLabel = f, L.pie.prototype.verifyDataLabelOverflow = function (d) {
      var e = this.center,
          c = this.options,
          a = c.center,
          f = c.minSize || 80,
          h = null !== c.size;

      if (!h) {
        if (null !== a[0]) var l = Math.max(e[2] - Math.max(d[1], d[3]), f);else l = Math.max(e[2] - d[1] - d[3], f), e[0] += (d[3] - d[1]) / 2;
        null !== a[1] ? l = C(l, f, e[2] - Math.max(d[0], d[2])) : (l = C(l, f, e[2] - d[0] - d[2]), e[1] += (d[0] - d[2]) / 2);
        l < e[2] ? (e[2] = l, e[3] = Math.min(J(c.innerSize || 0, l), l), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : h = !0;
      }

      return h;
    });
    L.column && (L.column.prototype.alignDataLabel = function (d, e, c, a, f) {
      var g = this.chart.inverted,
          h = d.series,
          n = d.dlBox || d.shapeArgs,
          q = l(d.below, d.plotY > l(this.translatedThreshold, h.yAxis.len)),
          r = l(c.inside, !!this.options.stacking);
      n && (a = D(n), 0 > a.y && (a.height += a.y, a.y = 0), n = a.y + a.height - h.yAxis.len, 0 < n && n < a.height && (a.height -= n), g && (a = {
        x: h.yAxis.len - a.y - a.height,
        y: h.xAxis.len - a.x - a.width,
        width: a.height,
        height: a.width
      }), r || (g ? (a.x += q ? 0 : a.width, a.width = 0) : (a.y += q ? a.height : 0, a.height = 0)));
      c.align = l(c.align, !g || r ? "center" : q ? "right" : "left");
      c.verticalAlign = l(c.verticalAlign, g || r ? "middle" : q ? "top" : "bottom");
      m.prototype.alignDataLabel.call(this, d, e, c, a, f);
      c.inside && d.contrastColor && e.css({
        color: d.contrastColor
      });
    });
  });
  N(m, "Extensions/OverlappingDataLabels.js", [m["Core/Chart/Chart.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.addEvent,
        z = h.fireEvent,
        F = h.isArray,
        L = h.isNumber,
        K = h.objectEach,
        C = h.pick;
    m(f, "render", function () {
      var f = [];
      (this.labelCollectors || []).forEach(function (e) {
        f = f.concat(e());
      });
      (this.yAxis || []).forEach(function (e) {
        e.stacking && e.options.stackLabels && !e.options.stackLabels.allowOverlap && K(e.stacking.stacks, function (e) {
          K(e, function (e) {
            f.push(e.label);
          });
        });
      });
      (this.series || []).forEach(function (e) {
        var h = e.options.dataLabels;
        e.visible && (!1 !== h.enabled || e._hasPointLabels) && (e.nodes || e.points).forEach(function (e) {
          e.visible && (F(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : []).forEach(function (h) {
            var m = h.options;
            h.labelrank = C(m.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height);
            m.allowOverlap || f.push(h);
          });
        });
      });
      this.hideOverlappingLabels(f);
    });

    f.prototype.hideOverlappingLabels = function (f) {
      var e = this,
          h = f.length,
          m = e.renderer,
          x,
          y,
          n,
          l = !1;

      var C = function (d) {
        var e,
            c = d.box ? 0 : d.padding || 0,
            a = e = 0,
            f;

        if (d && (!d.alignAttr || d.placed)) {
          var h = d.alignAttr || {
            x: d.attr("x"),
            y: d.attr("y")
          };
          var l = d.parentGroup;
          d.width || (e = d.getBBox(), d.width = e.width, d.height = e.height, e = m.fontMetrics(null, d.element).h);
          var n = d.width - 2 * c;
          (f = {
            left: "0",
            center: "0.5",
            right: "1"
          }[d.alignValue]) ? a = +f * n : L(d.x) && Math.round(d.x) !== d.translateX && (a = d.x - d.translateX);
          return {
            x: h.x + (l.translateX || 0) + c - (a || 0),
            y: h.y + (l.translateY || 0) + c - e,
            width: d.width - 2 * c,
            height: d.height - 2 * c
          };
        }
      };

      for (y = 0; y < h; y++) if (x = f[y]) x.oldOpacity = x.opacity, x.newOpacity = 1, x.absoluteBox = C(x);

      f.sort(function (d, e) {
        return (e.labelrank || 0) - (d.labelrank || 0);
      });

      for (y = 0; y < h; y++) {
        var w = (C = f[y]) && C.absoluteBox;

        for (x = y + 1; x < h; ++x) {
          var r = (n = f[x]) && n.absoluteBox;
          !w || !r || C === n || 0 === C.newOpacity || 0 === n.newOpacity || r.x >= w.x + w.width || r.x + r.width <= w.x || r.y >= w.y + w.height || r.y + r.height <= w.y || ((C.labelrank < n.labelrank ? C : n).newOpacity = 0);
        }
      }

      f.forEach(function (d) {
        if (d) {
          var f = d.newOpacity;
          d.oldOpacity !== f && (d.alignAttr && d.placed ? (d[f ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), l = !0, d.alignAttr.opacity = f, d[d.isOld ? "animate" : "attr"](d.alignAttr, null, function () {
            e.styledMode || d.css({
              pointerEvents: f ? "auto" : "none"
            });
            d.visibility = f ? "inherit" : "hidden";
          }), z(e, "afterHideOverlappingLabel")) : d.attr({
            opacity: f
          }));
          d.isOld = !0;
        }
      });
      l && z(e, "afterHideAllOverlappingLabels");
    };
  });
  N(m, "Core/Interaction.js", [m["Core/Series/Series.js"], m["Core/Chart/Chart.js"], m["Core/Globals.js"], m["Core/Legend.js"], m["Series/LineSeries.js"], m["Core/Options.js"], m["Core/Series/Point.js"], m["Core/Utilities.js"]], function (f, h, m, z, F, L, K, C) {
    f = f.seriesTypes;
    var y = m.hasTouch,
        e = m.svg,
        I = L.defaultOptions,
        v = C.addEvent,
        x = C.createElement,
        D = C.css,
        n = C.defined,
        l = C.extend,
        J = C.fireEvent,
        w = C.isArray,
        r = C.isFunction,
        d = C.isNumber,
        g = C.isObject,
        c = C.merge,
        a = C.objectEach,
        q = C.pick;
    "";
    m = m.TrackerMixin = {
      drawTrackerPoint: function () {
        var a = this,
            c = a.chart,
            d = c.pointer,
            e = function (a) {
          var c = d.getPointFromEvent(a);
          "undefined" !== typeof c && (d.isDirectTouch = !0, c.onMouseOver(a));
        },
            f;

        a.points.forEach(function (a) {
          f = w(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          f.forEach(function (c) {
            c.div ? c.div.point = a : c.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (f) {
          if (a[f]) {
            a[f].addClass("highcharts-tracker").on("mouseover", e).on("mouseout", function (a) {
              d.onTrackerMouseOut(a);
            });
            if (y) a[f].on("touchstart", e);
            !c.styledMode && a.options.cursor && a[f].css(D).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        J(this, "afterDrawTracker");
      },
      drawTrackerGraph: function () {
        var a = this,
            c = a.options,
            d = c.trackByArea,
            f = [].concat(d ? a.areaPath : a.graphPath),
            g = a.chart,
            h = g.pointer,
            l = g.renderer,
            n = g.options.tooltip.snap,
            m = a.tracker,
            q = function (b) {
          if (g.hoverSeries !== a) a.onMouseOver();
        },
            b = "rgba(192,192,192," + (e ? .0001 : .002) + ")";

        m ? m.attr({
          d: f
        }) : a.graph && (a.tracker = l.path(f).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(d ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), g.styledMode || a.tracker.attr({
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: b,
          fill: d ? b : "none",
          "stroke-width": a.graph.strokeWidth() + (d ? 0 : 2 * n)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", q).on("mouseout", function (a) {
            h.onTrackerMouseOut(a);
          });
          c.cursor && !g.styledMode && a.css({
            cursor: c.cursor
          });
          if (y) a.on("touchstart", q);
        }));
        J(this, "afterDrawTracker");
      }
    };
    f.column && (f.column.prototype.drawTracker = m.drawTrackerPoint);
    f.pie && (f.pie.prototype.drawTracker = m.drawTrackerPoint);
    f.scatter && (f.scatter.prototype.drawTracker = m.drawTrackerPoint);
    l(z.prototype, {
      setItemEvents: function (a, d, e) {
        var f = this,
            g = f.chart.renderer.boxWrapper,
            h = a instanceof K,
            p = "highcharts-legend-" + (h ? "point" : "series") + "-active",
            l = f.chart.styledMode;
        (e ? [d, a.legendSymbol] : [a.legendGroup]).forEach(function (e) {
          if (e) e.on("mouseover", function () {
            a.visible && f.allItems.forEach(function (c) {
              a !== c && c.setState("inactive", !h);
            });
            a.setState("hover");
            a.visible && g.addClass(p);
            l || d.css(f.options.itemHoverStyle);
          }).on("mouseout", function () {
            f.chart.styledMode || d.css(c(a.visible ? f.itemStyle : f.itemHiddenStyle));
            f.allItems.forEach(function (c) {
              a !== c && c.setState("", !h);
            });
            g.removeClass(p);
            a.setState();
          }).on("click", function (c) {
            var b = function () {
              a.setVisible && a.setVisible();
              f.allItems.forEach(function (b) {
                a !== b && b.setState(a.visible ? "inactive" : "", !h);
              });
            };

            g.removeClass(p);
            c = {
              browserEvent: c
            };
            a.firePointEvent ? a.firePointEvent("legendItemClick", c, b) : J(a, "legendItemClick", c, b);
          });
        });
      },
      createCheckboxForItem: function (a) {
        a.checkbox = x("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        v(a.checkbox, "click", function (c) {
          J(a.series || a, "checkboxClick", {
            checked: c.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      }
    });
    l(h.prototype, {
      showResetZoom: function () {
        function a() {
          c.zoomOut();
        }

        var c = this,
            d = I.lang,
            e = c.options.chart.resetZoomButton,
            f = e.theme,
            g = f.states,
            h = "chart" === e.relativeTo || "spaceBox" === e.relativeTo ? null : "plotBox";
        J(this, "beforeShowResetZoom", null, function () {
          c.resetZoomButton = c.renderer.button(d.resetZoom, null, null, a, f, g && g.hover).attr({
            align: e.position.align,
            title: d.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(e.position, !1, h);
        });
        J(this, "afterShowResetZoom");
      },
      zoomOut: function () {
        J(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      },
      zoom: function (a) {
        var c = this,
            d,
            e = c.pointer,
            f = !1,
            h = c.inverted ? e.mouseDownX : e.mouseDownY;
        !a || a.resetSelection ? (c.axes.forEach(function (a) {
          d = a.zoom();
        }), e.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var g = a.axis,
              p = c.inverted ? g.left : g.top,
              b = c.inverted ? p + g.width : p + g.height,
              k = g.isXAxis,
              l = !1;
          if (!k && h >= p && h <= b || k || !n(h)) l = !0;
          e[k ? "zoomX" : "zoomY"] && l && (d = g.zoom(a.min, a.max), g.displayBtn && (f = !0));
        });
        var p = c.resetZoomButton;
        f && !p ? c.showResetZoom() : !f && g(p) && (c.resetZoomButton = p.destroy());
        d && c.redraw(q(c.options.chart.animation, a && a.animation, 100 > c.pointCount));
      },
      pan: function (a, c) {
        var e = this,
            f = e.hoverPoints,
            g = e.options.chart,
            h = e.options.mapNavigation && e.options.mapNavigation.enabled,
            p;
        c = "object" === typeof c ? c : {
          enabled: c,
          type: "x"
        };
        g && g.panning && (g.panning = c);
        var l = c.type;
        J(this, "pan", {
          originalEvent: a
        }, function () {
          f && f.forEach(function (a) {
            a.setState();
          });
          var c = [1];
          "xy" === l ? c = [1, 0] : "y" === l && (c = [0]);
          c.forEach(function (c) {
            var b = e[c ? "xAxis" : "yAxis"][0],
                f = b.horiz,
                g = a[f ? "chartX" : "chartY"];
            f = f ? "mouseDownX" : "mouseDownY";
            var n = e[f],
                m = (b.pointRange || 0) / 2,
                r = b.reversed && !e.inverted || !b.reversed && e.inverted ? -1 : 1,
                u = b.getExtremes(),
                v = b.toValue(n - g, !0) + m * r;
            r = b.toValue(n + b.len - g, !0) - m * r;
            var w = r < v;
            n = w ? r : v;
            v = w ? v : r;
            var A = b.hasVerticalPanning(),
                x = b.panningState;
            b.series.forEach(function (a) {
              if (A && !c && (!x || x.isDirty)) {
                var b = a.getProcessedData(!0);
                a = a.getExtremes(b.yData, !0);
                x || (x = {
                  startMin: Number.MAX_VALUE,
                  startMax: -Number.MAX_VALUE
                });
                d(a.dataMin) && d(a.dataMax) && (x.startMin = Math.min(a.dataMin, x.startMin), x.startMax = Math.max(a.dataMax, x.startMax));
              }
            });
            r = Math.min(q(null === x || void 0 === x ? void 0 : x.startMin, u.dataMin), m ? u.min : b.toValue(b.toPixels(u.min) - b.minPixelPadding));
            m = Math.max(q(null === x || void 0 === x ? void 0 : x.startMax, u.dataMax), m ? u.max : b.toValue(b.toPixels(u.max) + b.minPixelPadding));
            b.panningState = x;
            b.isOrdinal || (w = r - n, 0 < w && (v += w, n = r), w = v - m, 0 < w && (v = m, n -= w), b.series.length && n !== u.min && v !== u.max && n >= r && v <= m && (b.setExtremes(n, v, !1, !1, {
              trigger: "pan"
            }), e.resetZoomButton || h || n === r || v === m || !l.match("y") || (e.showResetZoom(), b.displayBtn = !1), p = !0), e[f] = g);
          });
          p && e.redraw(!1);
          D(e.container, {
            cursor: "move"
          });
        });
      }
    });
    l(K.prototype, {
      select: function (a, c) {
        var d = this,
            e = d.series,
            f = e.chart;
        this.selectedStaging = a = q(a, !d.selected);
        d.firePointEvent(a ? "select" : "unselect", {
          accumulate: c
        }, function () {
          d.selected = d.options.selected = a;
          e.options.data[e.data.indexOf(d)] = d.options;
          d.setState(a && "select");
          c || f.getSelectedPoints().forEach(function (a) {
            var c = a.series;
            a.selected && a !== d && (a.selected = a.options.selected = !1, c.options.data[c.data.indexOf(a)] = a.options, a.setState(f.hoverPoints && c.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      },
      onMouseOver: function (a) {
        var c = this.series.chart,
            d = c.pointer;
        a = a ? d.normalize(a) : d.getChartCoordinatesFromPoint(this, c.inverted);
        d.runPointActions(a, this);
      },
      onMouseOut: function () {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      },
      importEvents: function () {
        if (!this.hasImportedEvents) {
          var d = this,
              e = c(d.series.options.point, d.options).events;
          d.events = e;
          a(e, function (a, c) {
            r(a) && v(d, c, a);
          });
          this.hasImportedEvents = !0;
        }
      },
      setState: function (a, c) {
        var d = this.series,
            e = this.state,
            f = d.options.states[a || "normal"] || {},
            g = I.plotOptions[d.type].marker && d.options.marker,
            h = g && !1 === g.enabled,
            p = g && g.states && g.states[a || "normal"] || {},
            n = !1 === p.enabled,
            m = d.stateMarkerGraphic,
            b = this.marker || {},
            k = d.chart,
            r = d.halo,
            v,
            w = g && d.markerAttribs;
        a = a || "";

        if (!(a === this.state && !c || this.selected && "select" !== a || !1 === f.enabled || a && (n || h && !1 === p.enabled) || a && b.states && b.states[a] && !1 === b.states[a].enabled)) {
          this.state = a;
          w && (v = d.markerAttribs(this, a));

          if (this.graphic) {
            e && this.graphic.removeClass("highcharts-point-" + e);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!k.styledMode) {
              var x = d.pointAttribs(this, a);
              var y = q(k.options.chart.animation, f.animation);
              d.options.inactiveOtherPoints && x.opacity && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: x.opacity
                }, y);
              }), this.connector && this.connector.animate({
                opacity: x.opacity
              }, y));
              this.graphic.animate(x, y);
            }

            v && this.graphic.animate(v, q(k.options.chart.animation, p.animation, g.animation));
            m && m.hide();
          } else {
            if (a && p) {
              e = b.symbol || d.symbol;
              m && m.currentSymbol !== e && (m = m.destroy());
              if (v) if (m) m[c ? "animate" : "attr"]({
                x: v.x,
                y: v.y
              });else e && (d.stateMarkerGraphic = m = k.renderer.symbol(e, v.x, v.y, v.width, v.height).add(d.markerGroup), m.currentSymbol = e);
              !k.styledMode && m && m.attr(d.pointAttribs(this, a));
            }

            m && (m[a && this.isInside ? "show" : "hide"](), m.element.point = this);
          }

          a = f.halo;
          f = (m = this.graphic || m) && m.visibility || "inherit";
          a && a.size && m && "hidden" !== f && !this.isCluster ? (r || (d.halo = r = k.renderer.path().add(m.parentGroup)), r.show()[c ? "animate" : "attr"]({
            d: this.haloPath(a.size)
          }), r.attr({
            "class": "highcharts-halo highcharts-color-" + q(this.colorIndex, d.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: f,
            zIndex: -1
          }), r.point = this, k.styledMode || r.attr(l({
            fill: this.color || d.color,
            "fill-opacity": a.opacity
          }, a.attributes))) : r && r.point && r.point.haloPath && r.animate({
            d: r.point.haloPath(0)
          }, null, r.hide);
          J(this, "afterSetState");
        }
      },
      haloPath: function (a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      }
    });
    l(F.prototype, {
      onMouseOver: function () {
        var a = this.chart,
            c = a.hoverSeries;
        a.pointer.setHoverChartIndex();
        if (c && c !== this) c.onMouseOut();
        this.options.events.mouseOver && J(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      },
      onMouseOut: function () {
        var a = this.options,
            c = this.chart,
            d = c.tooltip,
            e = c.hoverPoint;
        c.hoverSeries = null;
        if (e) e.onMouseOut();
        this && a.events.mouseOut && J(this, "mouseOut");
        !d || this.stickyTracking || d.shared && !this.noSharedTooltip || d.hide();
        c.series.forEach(function (a) {
          a.setState("", !0);
        });
      },
      setState: function (a, c) {
        var d = this,
            e = d.options,
            f = d.graph,
            g = e.inactiveOtherPoints,
            h = e.states,
            l = e.lineWidth,
            m = e.opacity,
            n = q(h[a || "normal"] && h[a || "normal"].animation, d.chart.options.chart.animation);
        e = 0;
        a = a || "";

        if (d.state !== a && ([d.group, d.markerGroup, d.dataLabelsGroup].forEach(function (b) {
          b && (d.state && b.removeClass("highcharts-series-" + d.state), a && b.addClass("highcharts-series-" + a));
        }), d.state = a, !d.chart.styledMode)) {
          if (h[a] && !1 === h[a].enabled) return;
          a && (l = h[a].lineWidth || l + (h[a].lineWidthPlus || 0), m = q(h[a].opacity, m));
          if (f && !f.dashstyle) for (h = {
            "stroke-width": l
          }, f.animate(h, n); d["zone-graph-" + e];) d["zone-graph-" + e].attr(h), e += 1;
          g || [d.group, d.markerGroup, d.dataLabelsGroup, d.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: m
            }, n);
          });
        }

        c && g && d.points && d.setAllPointsToState(a);
      },
      setAllPointsToState: function (a) {
        this.points.forEach(function (c) {
          c.setState && c.setState(a);
        });
      },
      setVisible: function (a, c) {
        var d = this,
            e = d.chart,
            f = d.legendItem,
            g = e.options.chart.ignoreHiddenSeries,
            h = d.visible;
        var l = (d.visible = a = d.options.visible = d.userOptions.visible = "undefined" === typeof a ? !h : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (d[a]) d[a][l]();
        });
        if (e.hoverSeries === d || (e.hoverPoint && e.hoverPoint.series) === d) d.onMouseOut();
        f && e.legend.colorizeItem(d, a);
        d.isDirty = !0;
        d.options.stacking && e.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        d.linkedSeries.forEach(function (c) {
          c.setVisible(a, !1);
        });
        g && (e.isDirtyBox = !0);
        J(d, l);
        !1 !== c && e.redraw();
      },
      show: function () {
        this.setVisible(!0);
      },
      hide: function () {
        this.setVisible(!1);
      },
      select: function (a) {
        this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        J(this, a ? "select" : "unselect");
      },
      drawTracker: m.drawTrackerGraph
    });
  });
  N(m, "Core/Responsive.js", [m["Core/Chart/Chart.js"], m["Core/Utilities.js"]], function (f, h) {
    var m = h.find,
        z = h.isArray,
        F = h.isObject,
        L = h.merge,
        K = h.objectEach,
        C = h.pick,
        y = h.splat,
        e = h.uniqueKey;

    f.prototype.setResponsive = function (f, h) {
      var v = this.options.responsive,
          y = [],
          n = this.currentResponsive;
      !h && v && v.rules && v.rules.forEach(function (f) {
        "undefined" === typeof f._id && (f._id = e());
        this.matchResponsiveRule(f, y);
      }, this);
      h = L.apply(0, y.map(function (e) {
        return m(v.rules, function (f) {
          return f._id === e;
        }).chartOptions;
      }));
      h.isResponsiveOptions = !0;
      y = y.toString() || void 0;
      y !== (n && n.ruleIds) && (n && this.update(n.undoOptions, f, !0), y ? (n = this.currentOptions(h), n.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: y,
        mergedOptions: h,
        undoOptions: n
      }, this.update(h, f, !0)) : this.currentResponsive = void 0);
    };

    f.prototype.matchResponsiveRule = function (e, f) {
      var h = e.condition;
      (h.callback || function () {
        return this.chartWidth <= C(h.maxWidth, Number.MAX_VALUE) && this.chartHeight <= C(h.maxHeight, Number.MAX_VALUE) && this.chartWidth >= C(h.minWidth, 0) && this.chartHeight >= C(h.minHeight, 0);
      }).call(this) && f.push(e._id);
    };

    f.prototype.currentOptions = function (e) {
      function f(e, l, m, v) {
        var n;
        K(e, function (d, e) {
          if (!v && -1 < h.collectionsWithUpdate.indexOf(e)) for (d = y(d), m[e] = [], n = 0; n < Math.max(d.length, l[e].length); n++) l[e][n] && (void 0 === d[n] ? m[e][n] = l[e][n] : (m[e][n] = {}, f(d[n], l[e][n], m[e][n], v + 1)));else F(d) ? (m[e] = z(d) ? [] : {}, f(d, l[e] || {}, m[e], v + 1)) : m[e] = "undefined" === typeof l[e] ? null : l[e];
        });
      }

      var h = this,
          m = {};
      f(e, this.options, m, 0);
      return m;
    };
  });
  N(m, "masters/highcharts.src.js", [m["Core/Globals.js"]], function (f) {
    return f;
  });
  m["masters/highcharts.src.js"]._modules = m;
  return m["masters/highcharts.src.js"];
});

/***/ }),

/***/ "./node_modules/highcharts/modules/drilldown.js":
/*!******************************************************!*\
  !*** ./node_modules/highcharts/modules/drilldown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function (c) {
   true && module.exports ? (c["default"] = c, module.exports = c) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (m) {
    c(m);
    c.Highcharts = m;
    return c;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (c) {
  function m(c, m, n, y) {
    c.hasOwnProperty(m) || (c[m] = y.apply(null, n));
  }

  c = c ? c._modules : {};
  m(c, "Extensions/Drilldown.js", [c["Core/Animation/AnimationUtilities.js"], c["Core/Axis/Axis.js"], c["Core/Chart/Chart.js"], c["Core/Color/Color.js"], c["Core/Globals.js"], c["Core/Options.js"], c["Core/Series/Point.js"], c["Core/Renderer/SVG/SVGRenderer.js"], c["Core/Axis/Tick.js"], c["Core/Utilities.js"]], function (c, m, n, y, w, p, z, E, B, k) {
    var C = c.animObject,
        F = w.noop;
    c = p.defaultOptions;
    var q = k.addEvent,
        G = k.removeEvent,
        t = k.extend,
        x = k.fireEvent,
        H = k.format,
        u = k.merge,
        I = k.objectEach,
        v = k.pick,
        J = k.syncTimeout;
    p = w.seriesTypes;
    k = p.pie;
    p = p.column;
    var D = 1;
    t(c.lang, {
      drillUpText: "\u25c1 Back to {series.name}"
    });
    c.drilldown = {
      activeAxisLabelStyle: {
        cursor: "pointer",
        color: "#003399",
        fontWeight: "bold",
        textDecoration: "underline"
      },
      activeDataLabelStyle: {
        cursor: "pointer",
        color: "#003399",
        fontWeight: "bold",
        textDecoration: "underline"
      },
      animation: {
        duration: 500
      },
      drillUpButton: {
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      }
    };

    E.prototype.Element.prototype.fadeIn = function (a) {
      this.attr({
        opacity: .1,
        visibility: "inherit"
      }).animate({
        opacity: v(this.newOpacity, 1)
      }, a || {
        duration: 250
      });
    };

    n.prototype.addSeriesAsDrilldown = function (a, b) {
      this.addSingleSeriesAsDrilldown(a, b);
      this.applyDrilldown();
    };

    n.prototype.addSingleSeriesAsDrilldown = function (a, b) {
      var d = a.series,
          e = d.xAxis,
          f = d.yAxis,
          g = [],
          r = [],
          h;
      var l = this.styledMode ? {
        colorIndex: v(a.colorIndex, d.colorIndex)
      } : {
        color: a.color || d.color
      };
      this.drilldownLevels || (this.drilldownLevels = []);
      var c = d.options._levelNumber || 0;
      (h = this.drilldownLevels[this.drilldownLevels.length - 1]) && h.levelNumber !== c && (h = void 0);
      b = t(t({
        _ddSeriesId: D++
      }, l), b);
      var k = d.points.indexOf(a);
      d.chart.series.forEach(function (a) {
        a.xAxis !== e || a.isDrilling || (a.options._ddSeriesId = a.options._ddSeriesId || D++, a.options._colorIndex = a.userOptions._colorIndex, a.options._levelNumber = a.options._levelNumber || c, h ? (g = h.levelSeries, r = h.levelSeriesOptions) : (g.push(a), a.purgedOptions = u({
          _ddSeriesId: a.options._ddSeriesId,
          _levelNumber: a.options._levelNumber,
          selected: a.options.selected
        }, a.userOptions), r.push(a.purgedOptions)));
      });
      a = t({
        levelNumber: c,
        seriesOptions: d.options,
        seriesPurgedOptions: d.purgedOptions,
        levelSeriesOptions: r,
        levelSeries: g,
        shapeArgs: a.shapeArgs,
        bBox: a.graphic ? a.graphic.getBBox() : {},
        color: a.isNull ? new y(l.color).setOpacity(0).get() : l.color,
        lowerSeriesOptions: b,
        pointOptions: d.options.data[k],
        pointIndex: k,
        oldExtremes: {
          xMin: e && e.userMin,
          xMax: e && e.userMax,
          yMin: f && f.userMin,
          yMax: f && f.userMax
        },
        resetZoomButton: this.resetZoomButton
      }, l);
      this.drilldownLevels.push(a);
      e && e.names && (e.names.length = 0);
      b = a.lowerSeries = this.addSeries(b, !1);
      b.options._levelNumber = c + 1;
      e && (e.oldPos = e.pos, e.userMin = e.userMax = null, f.userMin = f.userMax = null);
      d.type === b.type && (b.animate = b.animateDrilldown || F, b.options.animation = !0);
    };

    n.prototype.applyDrilldown = function () {
      var a = this.drilldownLevels;

      if (a && 0 < a.length) {
        var b = a[a.length - 1].levelNumber;
        this.drilldownLevels.forEach(function (a) {
          a.levelNumber === b && a.levelSeries.forEach(function (a) {
            a.options && a.options._levelNumber === b && a.remove(!1);
          });
        });
      }

      this.resetZoomButton && (this.resetZoomButton.hide(), delete this.resetZoomButton);
      this.pointer.reset();
      this.redraw();
      this.showDrillUpButton();
      x(this, "afterDrilldown");
    };

    n.prototype.getDrilldownBackText = function () {
      var a = this.drilldownLevels;
      if (a && 0 < a.length) return a = a[a.length - 1], a.series = a.seriesOptions, H(this.options.lang.drillUpText, a);
    };

    n.prototype.showDrillUpButton = function () {
      var a = this,
          b = this.getDrilldownBackText(),
          d = a.options.drilldown.drillUpButton,
          e;
      if (this.drillUpButton) this.drillUpButton.attr({
        text: b
      }).align();else {
        var f = (e = d.theme) && e.states;
        this.drillUpButton = this.renderer.button(b, null, null, function () {
          a.drillUp();
        }, e, f && f.hover, f && f.select).addClass("highcharts-drillup-button").attr({
          align: d.position.align,
          zIndex: 7
        }).add().align(d.position, !1, d.relativeTo || "plotBox");
      }
    };

    n.prototype.drillUp = function () {
      if (this.drilldownLevels && 0 !== this.drilldownLevels.length) {
        for (var a = this, b = a.drilldownLevels, d = b[b.length - 1].levelNumber, e = b.length, f = a.series, g, c, h, l, k = function (b) {
          f.forEach(function (a) {
            a.options._ddSeriesId === b._ddSeriesId && (d = a);
          });
          var d = d || a.addSeries(b, !1);
          d.type === h.type && d.animateDrillupTo && (d.animate = d.animateDrillupTo);
          b === c.seriesPurgedOptions && (l = d);
        }; e--;) if (c = b[e], c.levelNumber === d) {
          b.pop();
          h = c.lowerSeries;
          if (!h.chart) for (g = f.length; g--;) if (f[g].options.id === c.lowerSeriesOptions.id && f[g].options._levelNumber === d + 1) {
            h = f[g];
            break;
          }
          h.xData = [];
          c.levelSeriesOptions.forEach(k);
          x(a, "drillup", {
            seriesOptions: c.seriesPurgedOptions || c.seriesOptions
          });
          l.type === h.type && (l.drilldownLevel = c, l.options.animation = a.options.drilldown.animation, h.animateDrillupFrom && h.chart && h.animateDrillupFrom(c));
          l.options._levelNumber = d;
          h.remove(!1);
          l.xAxis && (g = c.oldExtremes, l.xAxis.setExtremes(g.xMin, g.xMax, !1), l.yAxis.setExtremes(g.yMin, g.yMax, !1));
          c.resetZoomButton && (a.resetZoomButton = c.resetZoomButton, a.resetZoomButton.show());
        }

        this.redraw();
        0 === this.drilldownLevels.length ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({
          text: this.getDrilldownBackText()
        }).align();
        this.ddDupes.length = [];
        x(a, "drillupall");
      }
    };

    q(n, "afterInit", function () {
      var a = this;
      a.drilldown = {
        update: function (b, d) {
          u(!0, a.options.drilldown, b);
          v(d, !0) && a.redraw();
        }
      };
    });
    q(n, "beforeShowResetZoom", function () {
      if (this.drillUpButton) return !1;
    });
    q(n, "render", function () {
      (this.xAxis || []).forEach(function (a) {
        a.ddPoints = {};
        a.series.forEach(function (b) {
          var d,
              e = b.xData || [],
              f = b.points;

          for (d = 0; d < e.length; d++) {
            var c = b.options.data[d];
            "number" !== typeof c && (c = b.pointClass.prototype.optionsToObject.call({
              series: b
            }, c), c.drilldown && (a.ddPoints[e[d]] || (a.ddPoints[e[d]] = []), a.ddPoints[e[d]].push(f ? f[d] : !0)));
          }
        });
        I(a.ticks, B.prototype.drillable);
      });
    });

    p.prototype.animateDrillupTo = function (a) {
      if (!a) {
        var b = this,
            d = b.drilldownLevel;
        this.points.forEach(function (a) {
          var b = a.dataLabel;
          a.graphic && a.graphic.hide();
          b && (b.hidden = "hidden" === b.attr("visibility"), b.hidden || (b.hide(), a.connector && a.connector.hide()));
        });
        J(function () {
          if (b.points) {
            var a = [];
            b.data.forEach(function (b) {
              a.push(b);
            });
            b.nodes && (a = a.concat(b.nodes));
            a.forEach(function (a, b) {
              b = b === (d && d.pointIndex) ? "show" : "fadeIn";
              var c = "show" === b ? !0 : void 0,
                  e = a.dataLabel;
              if (a.graphic) a.graphic[b](c);
              e && !e.hidden && (e.fadeIn(), a.connector && a.connector.fadeIn());
            });
          }
        }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));
        delete this.animate;
      }
    };

    p.prototype.animateDrilldown = function (a) {
      var b = this,
          d = this.chart,
          e = d.drilldownLevels,
          c,
          g = C(d.options.drilldown.animation),
          r = this.xAxis,
          h = d.styledMode;
      a || (e.forEach(function (a) {
        b.options._ddSeriesId === a.lowerSeriesOptions._ddSeriesId && (c = a.shapeArgs, h || (c.fill = a.color));
      }), c.x += v(r.oldPos, r.pos) - r.pos, this.points.forEach(function (a) {
        var d = a.shapeArgs;
        h || (d.fill = a.color);
        a.graphic && a.graphic.attr(c).animate(t(a.shapeArgs, {
          fill: a.color || b.color
        }), g);
        a.dataLabel && a.dataLabel.fadeIn(g);
      }), delete this.animate);
    };

    p.prototype.animateDrillupFrom = function (a) {
      var b = C(this.chart.options.drilldown.animation),
          d = this.group,
          c = d !== this.chart.columnGroup,
          f = this;
      f.trackerGroups.forEach(function (a) {
        if (f[a]) f[a].on("mouseover");
      });
      c && delete this.group;
      this.points.forEach(function (e) {
        var g = e.graphic,
            h = a.shapeArgs,
            l = function () {
          g.destroy();
          d && c && (d = d.destroy());
        };

        g && h && (delete e.graphic, f.chart.styledMode || (h.fill = a.color), b.duration ? g.animate(h, u(b, {
          complete: l
        })) : (g.attr(h), l()));
      });
    };

    k && t(k.prototype, {
      animateDrillupTo: p.prototype.animateDrillupTo,
      animateDrillupFrom: p.prototype.animateDrillupFrom,
      animateDrilldown: function (a) {
        var b = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
            d = this.chart.options.drilldown.animation;
        this.is("item") && (d.duration = 0);

        if (this.center) {
          var c = b.shapeArgs,
              f = c.start,
              g = (c.end - f) / this.points.length,
              k = this.chart.styledMode;
          a || (this.points.forEach(function (a, e) {
            var h = a.shapeArgs;
            k || (c.fill = b.color, h.fill = a.color);
            if (a.graphic) a.graphic.attr(u(c, {
              start: f + e * g,
              end: f + (e + 1) * g
            }))[d ? "animate" : "attr"](h, d);
          }), delete this.animate);
        }
      }
    });

    z.prototype.doDrilldown = function (a, b, d) {
      var c = this.series.chart,
          f = c.options.drilldown,
          g = (f.series || []).length;
      c.ddDupes || (c.ddDupes = []);

      for (; g-- && !k;) if (f.series[g].id === this.drilldown && -1 === c.ddDupes.indexOf(this.drilldown)) {
        var k = f.series[g];
        c.ddDupes.push(this.drilldown);
      }

      x(c, "drilldown", {
        point: this,
        seriesOptions: k,
        category: b,
        originalEvent: d,
        points: "undefined" !== typeof b && this.series.xAxis.getDDPoints(b).slice(0)
      }, function (b) {
        var d = b.point.series && b.point.series.chart,
            c = b.seriesOptions;
        d && c && (a ? d.addSingleSeriesAsDrilldown(b.point, c) : d.addSeriesAsDrilldown(b.point, c));
      });
    };

    m.prototype.drilldownCategory = function (a, b) {
      this.getDDPoints(a).forEach(function (d) {
        d && d.series && d.series.visible && d.doDrilldown && d.doDrilldown(!0, a, b);
      });
      this.chart.applyDrilldown();
    };

    m.prototype.getDDPoints = function (a) {
      return this.ddPoints && this.ddPoints[a] || [];
    };

    B.prototype.drillable = function () {
      var a = this.pos,
          b = this.label,
          d = this.axis,
          c = "xAxis" === d.coll && d.getDDPoints,
          f = c && d.getDDPoints(a),
          g = d.chart.styledMode;
      c && (b && f && f.length ? (b.drillable = !0, b.basicStyles || g || (b.basicStyles = u(b.styles)), b.addClass("highcharts-drilldown-axis-label"), b.removeOnDrillableClick && G(b.element, "click"), b.removeOnDrillableClick = q(b.element, "click", function (b) {
        b.preventDefault();
        d.drilldownCategory(a, b);
      }), g || b.css(d.chart.options.drilldown.activeAxisLabelStyle)) : b && b.drillable && b.removeOnDrillableClick && (g || (b.styles = {}, b.css(b.basicStyles)), b.removeOnDrillableClick(), b.removeClass("highcharts-drilldown-axis-label")));
    };

    q(z, "afterInit", function () {
      var a = this,
          b = a.series;
      a.drilldown && q(a, "click", function (c) {
        b.xAxis && !1 === b.chart.options.drilldown.allowPointDrilldown ? b.xAxis.drilldownCategory(a.x, c) : a.doDrilldown(void 0, void 0, c);
      });
      return a;
    });
    q(w.Series, "afterDrawDataLabels", function () {
      var a = this.chart.options.drilldown.activeDataLabelStyle,
          b = this.chart.renderer,
          c = this.chart.styledMode;
      this.points.forEach(function (d) {
        var f = d.options.dataLabels,
            e = v(d.dlOptions, f && f.style, {});
        d.drilldown && d.dataLabel && ("contrast" !== a.color || c || (e.color = b.getContrast(d.color || this.color)), f && f.color && (e.color = f.color), d.dataLabel.addClass("highcharts-drilldown-data-label"), c || d.dataLabel.css(a).css(e));
      }, this);
    });

    var A = function (a, b, c, e) {
      a[c ? "addClass" : "removeClass"]("highcharts-drilldown-point");
      e || a.css({
        cursor: b
      });
    };

    q(w.Series, "afterDrawTracker", function () {
      var a = this.chart.styledMode;
      this.points.forEach(function (b) {
        b.drilldown && b.graphic && A(b.graphic, "pointer", !0, a);
      });
    });
    q(z, "afterSetState", function () {
      var a = this.series.chart.styledMode;
      this.drilldown && this.series.halo && "hover" === this.state ? A(this.series.halo, "pointer", !0, a) : this.series.halo && A(this.series.halo, "auto", !1, a);
    });
  });
  m(c, "masters/modules/drilldown.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/exporting.js":
/*!******************************************************!*\
  !*** ./node_modules/highcharts/modules/exporting.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Exporting module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (e) {
   true && module.exports ? (e["default"] = e, module.exports = e) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (q) {
    e(q);
    e.Highcharts = q;
    return e;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (e) {
  function q(e, l, g, k) {
    e.hasOwnProperty(l) || (e[l] = k.apply(null, g));
  }

  e = e ? e._modules : {};
  q(e, "Extensions/FullScreen.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, l, g) {
    var k = g.addEvent;

    g = function () {
      function e(f) {
        this.chart = f;
        this.isOpen = !1;
        f = f.renderTo;
        this.browserProps || ("function" === typeof f.requestFullscreen ? this.browserProps = {
          fullscreenChange: "fullscreenchange",
          requestFullscreen: "requestFullscreen",
          exitFullscreen: "exitFullscreen"
        } : f.mozRequestFullScreen ? this.browserProps = {
          fullscreenChange: "mozfullscreenchange",
          requestFullscreen: "mozRequestFullScreen",
          exitFullscreen: "mozCancelFullScreen"
        } : f.webkitRequestFullScreen ? this.browserProps = {
          fullscreenChange: "webkitfullscreenchange",
          requestFullscreen: "webkitRequestFullScreen",
          exitFullscreen: "webkitExitFullscreen"
        } : f.msRequestFullscreen && (this.browserProps = {
          fullscreenChange: "MSFullscreenChange",
          requestFullscreen: "msRequestFullscreen",
          exitFullscreen: "msExitFullscreen"
        }));
      }

      e.prototype.close = function () {
        var f = this.chart;
        if (this.isOpen && this.browserProps && f.container.ownerDocument instanceof Document) f.container.ownerDocument[this.browserProps.exitFullscreen]();
        this.unbindFullscreenEvent && this.unbindFullscreenEvent();
        this.isOpen = !1;
        this.setButtonText();
      };

      e.prototype.open = function () {
        var f = this,
            e = f.chart;

        if (f.browserProps) {
          f.unbindFullscreenEvent = k(e.container.ownerDocument, f.browserProps.fullscreenChange, function () {
            f.isOpen ? (f.isOpen = !1, f.close()) : (f.isOpen = !0, f.setButtonText());
          });
          var g = e.renderTo[f.browserProps.requestFullscreen]();
          if (g) g["catch"](function () {
            alert("Full screen is not supported inside a frame.");
          });
          k(e, "destroy", f.unbindFullscreenEvent);
        }
      };

      e.prototype.setButtonText = function () {
        var f,
            e = this.chart,
            g = e.exportDivElements,
            k = e.options.exporting,
            l = null === (f = null === k || void 0 === k ? void 0 : k.buttons) || void 0 === f ? void 0 : f.contextButton.menuItems;
        f = e.options.lang;
        (null === k || void 0 === k ? 0 : k.menuItemDefinitions) && (null === f || void 0 === f ? 0 : f.exitFullscreen) && f.viewFullscreen && l && g && g.length && (g[l.indexOf("viewFullscreen")].innerHTML = this.isOpen ? f.exitFullscreen : k.menuItemDefinitions.viewFullscreen.text || f.viewFullscreen);
      };

      e.prototype.toggle = function () {
        this.isOpen ? this.close() : this.open();
      };

      return e;
    }();

    l.Fullscreen = g;
    k(e, "beforeRender", function () {
      this.fullscreen = new l.Fullscreen(this);
    });
    return l.Fullscreen;
  });
  q(e, "Mixins/Navigation.js", [], function () {
    return {
      initUpdate: function (e) {
        e.navigation || (e.navigation = {
          updates: [],
          update: function (e, g) {
            this.updates.forEach(function (k) {
              k.update.call(k.context, e, g);
            });
          }
        });
      },
      addUpdate: function (e, l) {
        l.navigation || this.initUpdate(l);
        l.navigation.updates.push({
          update: e,
          context: l
        });
      }
    };
  });
  q(e, "Extensions/Exporting.js", [e["Core/Chart/Chart.js"], e["Mixins/Navigation.js"], e["Core/Globals.js"], e["Core/Options.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (e, l, g, k, q, f) {
    var A = g.doc,
        H = g.isTouchDevice,
        y = g.win;
    k = k.defaultOptions;
    var v = f.addEvent,
        r = f.css,
        x = f.createElement,
        D = f.discardElement,
        z = f.extend,
        I = f.find,
        C = f.fireEvent,
        J = f.isObject,
        p = f.merge,
        E = f.objectEach,
        t = f.pick,
        K = f.removeEvent,
        L = f.uniqueKey,
        F = y.navigator.userAgent,
        G = g.Renderer.prototype.symbols,
        M = /Edge\/|Trident\/|MSIE /.test(F),
        N = /firefox/i.test(F);
    z(k.lang, {
      viewFullscreen: "View in full screen",
      exitFullscreen: "Exit from full screen",
      printChart: "Print chart",
      downloadPNG: "Download PNG image",
      downloadJPEG: "Download JPEG image",
      downloadPDF: "Download PDF document",
      downloadSVG: "Download SVG vector image",
      contextButtonTitle: "Chart context menu"
    });
    k.navigation || (k.navigation = {});
    p(!0, k.navigation, {
      buttonOptions: {
        theme: {},
        symbolSize: 14,
        symbolX: 12.5,
        symbolY: 10.5,
        align: "right",
        buttonSpacing: 3,
        height: 22,
        verticalAlign: "top",
        width: 24
      }
    });
    p(!0, k.navigation, {
      menuStyle: {
        border: "1px solid #999999",
        background: "#ffffff",
        padding: "5px 0"
      },
      menuItemStyle: {
        padding: "0.5em 1em",
        color: "#333333",
        background: "none",
        fontSize: H ? "14px" : "11px",
        transition: "background 250ms, color 250ms"
      },
      menuItemHoverStyle: {
        background: "#335cad",
        color: "#ffffff"
      },
      buttonOptions: {
        symbolFill: "#666666",
        symbolStroke: "#666666",
        symbolStrokeWidth: 3,
        theme: {
          padding: 5
        }
      }
    });
    k.exporting = {
      type: "image/png",
      url: "https://export.highcharts.com/",
      printMaxWidth: 780,
      scale: 2,
      buttons: {
        contextButton: {
          className: "highcharts-contextbutton",
          menuClassName: "highcharts-contextmenu",
          symbol: "menu",
          titleKey: "contextButtonTitle",
          menuItems: "viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")
        }
      },
      menuItemDefinitions: {
        viewFullscreen: {
          textKey: "viewFullscreen",
          onclick: function () {
            this.fullscreen.toggle();
          }
        },
        printChart: {
          textKey: "printChart",
          onclick: function () {
            this.print();
          }
        },
        separator: {
          separator: !0
        },
        downloadPNG: {
          textKey: "downloadPNG",
          onclick: function () {
            this.exportChart();
          }
        },
        downloadJPEG: {
          textKey: "downloadJPEG",
          onclick: function () {
            this.exportChart({
              type: "image/jpeg"
            });
          }
        },
        downloadPDF: {
          textKey: "downloadPDF",
          onclick: function () {
            this.exportChart({
              type: "application/pdf"
            });
          }
        },
        downloadSVG: {
          textKey: "downloadSVG",
          onclick: function () {
            this.exportChart({
              type: "image/svg+xml"
            });
          }
        }
      }
    };

    g.post = function (a, b, c) {
      var d = x("form", p({
        method: "post",
        action: a,
        enctype: "multipart/form-data"
      }, c), {
        display: "none"
      }, A.body);
      E(b, function (a, b) {
        x("input", {
          type: "hidden",
          name: b,
          value: a
        }, null, d);
      });
      d.submit();
      D(d);
    };

    g.isSafari && g.win.matchMedia("print").addListener(function (a) {
      g.printingChart && (a.matches ? g.printingChart.beforePrint() : g.printingChart.afterPrint());
    });
    z(e.prototype, {
      sanitizeSVG: function (a, b) {
        var c = a.indexOf("</svg>") + 6,
            d = a.substr(c);
        a = a.substr(0, c);
        b && b.exporting && b.exporting.allowHTML && d && (d = '<foreignObject x="0" y="0" width="' + b.chart.width + '" height="' + b.chart.height + '"><body xmlns="http://www.w3.org/1999/xhtml">' + d.replace(/(<(?:img|br).*?(?=>))>/g, "$1 />") + "</body></foreignObject>", a = a.replace("</svg>", d + "</svg>"));
        a = a.replace(/zIndex="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g, " xlink:href=").replace(/\n/, " ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad");
        this.ieSanitizeSVG && (a = this.ieSanitizeSVG(a));
        return a;
      },
      getChartHTML: function () {
        this.styledMode && this.inlineStyles();
        return this.container.innerHTML;
      },
      getSVG: function (a) {
        var b,
            c = p(this.options, a);
        c.plotOptions = p(this.userOptions.plotOptions, a && a.plotOptions);
        c.time = p(this.userOptions.time, a && a.time);
        var d = x("div", null, {
          position: "absolute",
          top: "-9999em",
          width: this.chartWidth + "px",
          height: this.chartHeight + "px"
        }, A.body);
        var f = this.renderTo.style.width;
        var w = this.renderTo.style.height;
        f = c.exporting.sourceWidth || c.chart.width || /px$/.test(f) && parseInt(f, 10) || (c.isGantt ? 800 : 600);
        w = c.exporting.sourceHeight || c.chart.height || /px$/.test(w) && parseInt(w, 10) || 400;
        z(c.chart, {
          animation: !1,
          renderTo: d,
          forExport: !0,
          renderer: "SVGRenderer",
          width: f,
          height: w
        });
        c.exporting.enabled = !1;
        delete c.data;
        c.series = [];
        this.series.forEach(function (a) {
          b = p(a.userOptions, {
            animation: !1,
            enableMouseTracking: !1,
            showCheckbox: !1,
            visible: a.visible
          });
          b.isInternal || c.series.push(b);
        });
        this.axes.forEach(function (a) {
          a.userOptions.internalKey || (a.userOptions.internalKey = L());
        });
        var g = new e(c, this.callback);
        a && ["xAxis", "yAxis", "series"].forEach(function (b) {
          var d = {};
          a[b] && (d[b] = a[b], g.update(d));
        });
        this.axes.forEach(function (a) {
          var b = I(g.axes, function (b) {
            return b.options.internalKey === a.userOptions.internalKey;
          }),
              d = a.getExtremes(),
              c = d.userMin;
          d = d.userMax;
          b && ("undefined" !== typeof c && c !== b.min || "undefined" !== typeof d && d !== b.max) && b.setExtremes(c, d, !0, !1);
        });
        f = g.getChartHTML();
        C(this, "getSVG", {
          chartCopy: g
        });
        f = this.sanitizeSVG(f, c);
        c = null;
        g.destroy();
        D(d);
        return f;
      },
      getSVGForExport: function (a, b) {
        var c = this.options.exporting;
        return this.getSVG(p({
          chart: {
            borderRadius: 0
          }
        }, c.chartOptions, b, {
          exporting: {
            sourceWidth: a && a.sourceWidth || c.sourceWidth,
            sourceHeight: a && a.sourceHeight || c.sourceHeight
          }
        }));
      },
      getFilename: function () {
        var a = this.userOptions.title && this.userOptions.title.text,
            b = this.options.exporting.filename;
        if (b) return b.replace(/\//g, "-");
        "string" === typeof a && (b = a.toLowerCase().replace(/<\/?[^>]+(>|$)/g, "").replace(/[\s_]+/g, "-").replace(/[^a-z0-9\-]/g, "").replace(/^[\-]+/g, "").replace(/[\-]+/g, "-").substr(0, 24).replace(/[\-]+$/g, ""));
        if (!b || 5 > b.length) b = "chart";
        return b;
      },
      exportChart: function (a, b) {
        b = this.getSVGForExport(a, b);
        a = p(this.options.exporting, a);
        g.post(a.url, {
          filename: a.filename ? a.filename.replace(/\//g, "-") : this.getFilename(),
          type: a.type,
          width: a.width || 0,
          scale: a.scale,
          svg: b
        }, a.formAttributes);
      },
      moveContainers: function (a) {
        (this.fixedDiv ? [this.fixedDiv, this.scrollingContainer] : [this.container]).forEach(function (b) {
          a.appendChild(b);
        });
      },
      beforePrint: function () {
        var a = A.body,
            b = this.options.exporting.printMaxWidth,
            c = {
          childNodes: a.childNodes,
          origDisplay: [],
          resetParams: void 0
        };
        this.isPrinting = !0;
        this.pointer.reset(null, 0);
        C(this, "beforePrint");
        b && this.chartWidth > b && (c.resetParams = [this.options.chart.width, void 0, !1], this.setSize(b, void 0, !1));
        [].forEach.call(c.childNodes, function (a, b) {
          1 === a.nodeType && (c.origDisplay[b] = a.style.display, a.style.display = "none");
        });
        this.moveContainers(a);
        this.printReverseInfo = c;
      },
      afterPrint: function () {
        if (this.printReverseInfo) {
          var a = this.printReverseInfo.childNodes,
              b = this.printReverseInfo.origDisplay,
              c = this.printReverseInfo.resetParams;
          this.moveContainers(this.renderTo);
          [].forEach.call(a, function (a, c) {
            1 === a.nodeType && (a.style.display = b[c] || "");
          });
          this.isPrinting = !1;
          c && this.setSize.apply(this, c);
          delete this.printReverseInfo;
          delete g.printingChart;
          C(this, "afterPrint");
        }
      },
      print: function () {
        var a = this;
        a.isPrinting || (g.printingChart = a, g.isSafari || a.beforePrint(), setTimeout(function () {
          y.focus();
          y.print();
          g.isSafari || setTimeout(function () {
            a.afterPrint();
          }, 1E3);
        }, 1));
      },
      contextMenu: function (a, b, c, d, e, g, k) {
        var h = this,
            w = h.options.navigation,
            l = h.chartWidth,
            B = h.chartHeight,
            n = "cache-" + a,
            m = h[n],
            u = Math.max(e, g);

        if (!m) {
          h.exportContextMenu = h[n] = m = x("div", {
            className: a
          }, {
            position: "absolute",
            zIndex: 1E3,
            padding: u + "px",
            pointerEvents: "auto"
          }, h.fixedDiv || h.container);
          var p = x("ul", {
            className: "highcharts-menu"
          }, {
            listStyle: "none",
            margin: 0,
            padding: 0
          }, m);
          h.styledMode || r(p, z({
            MozBoxShadow: "3px 3px 10px #888",
            WebkitBoxShadow: "3px 3px 10px #888",
            boxShadow: "3px 3px 10px #888"
          }, w.menuStyle));

          m.hideMenu = function () {
            r(m, {
              display: "none"
            });
            k && k.setState(0);
            h.openMenu = !1;
            r(h.renderTo, {
              overflow: "hidden"
            });
            f.clearTimeout(m.hideTimer);
            C(h, "exportMenuHidden");
          };

          h.exportEvents.push(v(m, "mouseleave", function () {
            m.hideTimer = y.setTimeout(m.hideMenu, 500);
          }), v(m, "mouseenter", function () {
            f.clearTimeout(m.hideTimer);
          }), v(A, "mouseup", function (b) {
            h.pointer.inClass(b.target, a) || m.hideMenu();
          }), v(m, "click", function () {
            h.openMenu && m.hideMenu();
          }));
          b.forEach(function (a) {
            "string" === typeof a && (a = h.options.exporting.menuItemDefinitions[a]);

            if (J(a, !0)) {
              if (a.separator) var b = x("hr", null, null, p);else "viewData" === a.textKey && h.isDataTableVisible && (a.textKey = "hideData"), b = x("li", {
                className: "highcharts-menu-item",
                onclick: function (b) {
                  b && b.stopPropagation();
                  m.hideMenu();
                  a.onclick && a.onclick.apply(h, arguments);
                },
                innerHTML: a.text || h.options.lang[a.textKey]
              }, null, p), h.styledMode || (b.onmouseover = function () {
                r(this, w.menuItemHoverStyle);
              }, b.onmouseout = function () {
                r(this, w.menuItemStyle);
              }, r(b, z({
                cursor: "pointer"
              }, w.menuItemStyle)));
              h.exportDivElements.push(b);
            }
          });
          h.exportDivElements.push(p, m);
          h.exportMenuWidth = m.offsetWidth;
          h.exportMenuHeight = m.offsetHeight;
        }

        b = {
          display: "block"
        };
        c + h.exportMenuWidth > l ? b.right = l - c - e - u + "px" : b.left = c - u + "px";
        d + g + h.exportMenuHeight > B && "top" !== k.alignOptions.verticalAlign ? b.bottom = B - d - u + "px" : b.top = d + g - u + "px";
        r(m, b);
        r(h.renderTo, {
          overflow: ""
        });
        h.openMenu = !0;
        C(h, "exportMenuShown");
      },
      addButton: function (a) {
        var b = this,
            c = b.renderer,
            d = p(b.options.navigation.buttonOptions, a),
            e = d.onclick,
            f = d.menuItems,
            g = d.symbolSize || 12;
        b.btnCount || (b.btnCount = 0);
        b.exportDivElements || (b.exportDivElements = [], b.exportSVGElements = []);

        if (!1 !== d.enabled) {
          var h = d.theme,
              k = h.states,
              l = k && k.hover;
          k = k && k.select;
          var B;
          b.styledMode || (h.fill = t(h.fill, "#ffffff"), h.stroke = t(h.stroke, "none"));
          delete h.states;
          e ? B = function (a) {
            a && a.stopPropagation();
            e.call(b, a);
          } : f && (B = function (a) {
            a && a.stopPropagation();
            b.contextMenu(n.menuClassName, f, n.translateX, n.translateY, n.width, n.height, n);
            n.setState(2);
          });
          d.text && d.symbol ? h.paddingLeft = t(h.paddingLeft, 25) : d.text || z(h, {
            width: d.width,
            height: d.height,
            padding: 0
          });
          b.styledMode || (h["stroke-linecap"] = "round", h.fill = t(h.fill, "#ffffff"), h.stroke = t(h.stroke, "none"));
          var n = c.button(d.text, 0, 0, B, h, l, k).addClass(a.className).attr({
            title: t(b.options.lang[d._titleKey || d.titleKey], "")
          });
          n.menuClassName = a.menuClassName || "highcharts-menu-" + b.btnCount++;

          if (d.symbol) {
            var m = c.symbol(d.symbol, d.symbolX - g / 2, d.symbolY - g / 2, g, g, {
              width: g,
              height: g
            }).addClass("highcharts-button-symbol").attr({
              zIndex: 1
            }).add(n);
            b.styledMode || m.attr({
              stroke: d.symbolStroke,
              fill: d.symbolFill,
              "stroke-width": d.symbolStrokeWidth || 1
            });
          }

          n.add(b.exportingGroup).align(z(d, {
            width: n.width,
            x: t(d.x, b.buttonOffset)
          }), !0, "spacingBox");
          b.buttonOffset += (n.width + d.buttonSpacing) * ("right" === d.align ? -1 : 1);
          b.exportSVGElements.push(n, m);
        }
      },
      destroyExport: function (a) {
        var b = a ? a.target : this;
        a = b.exportSVGElements;
        var c = b.exportDivElements,
            d = b.exportEvents,
            e;
        a && (a.forEach(function (a, d) {
          a && (a.onclick = a.ontouchstart = null, e = "cache-" + a.menuClassName, b[e] && delete b[e], b.exportSVGElements[d] = a.destroy());
        }), a.length = 0);
        b.exportingGroup && (b.exportingGroup.destroy(), delete b.exportingGroup);
        c && (c.forEach(function (a, d) {
          f.clearTimeout(a.hideTimer);
          K(a, "mouseleave");
          b.exportDivElements[d] = a.onmouseout = a.onmouseover = a.ontouchstart = a.onclick = null;
          D(a);
        }), c.length = 0);
        d && (d.forEach(function (a) {
          a();
        }), d.length = 0);
      }
    });
    q.prototype.inlineToAttributes = "fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");
    q.prototype.inlineBlacklist = [/-/, /^(clipPath|cssText|d|height|width)$/, /^font$/, /[lL]ogical(Width|Height)$/, /perspective/, /TapHighlightColor/, /^transition/, /^length$/];
    q.prototype.unstyledElements = ["clipPath", "defs", "desc"];

    e.prototype.inlineStyles = function () {
      function a(a) {
        return a.replace(/([A-Z])/g, function (a, b) {
          return "-" + b.toLowerCase();
        });
      }

      function b(c) {
        function n(b, g) {
          u = q = !1;

          if (f) {
            for (r = f.length; r-- && !q;) q = f[r].test(g);

            u = !q;
          }

          "transform" === g && "none" === b && (u = !0);

          for (r = e.length; r-- && !u;) u = e[r].test(g) || "function" === typeof b;

          u || w[g] === b && "svg" !== c.nodeName || h[c.nodeName][g] === b || (d && -1 === d.indexOf(g) ? m += a(g) + ":" + b + ";" : b && c.setAttribute(a(g), b));
        }

        var m = "",
            u,
            q,
            r;

        if (1 === c.nodeType && -1 === g.indexOf(c.nodeName)) {
          var t = y.getComputedStyle(c, null);
          var w = "svg" === c.nodeName ? {} : y.getComputedStyle(c.parentNode, null);

          if (!h[c.nodeName]) {
            k = l.getElementsByTagName("svg")[0];
            var v = l.createElementNS(c.namespaceURI, c.nodeName);
            k.appendChild(v);
            h[c.nodeName] = p(y.getComputedStyle(v, null));
            "text" === c.nodeName && delete h.text.fill;
            k.removeChild(v);
          }

          if (N || M) for (var x in t) n(t[x], x);else E(t, n);
          m && (t = c.getAttribute("style"), c.setAttribute("style", (t ? t + ";" : "") + m));
          "svg" === c.nodeName && c.setAttribute("stroke-width", "1px");
          "text" !== c.nodeName && [].forEach.call(c.children || c.childNodes, b);
        }
      }

      var c = this.renderer,
          d = c.inlineToAttributes,
          e = c.inlineBlacklist,
          f = c.inlineWhitelist,
          g = c.unstyledElements,
          h = {},
          k;
      c = A.createElement("iframe");
      r(c, {
        width: "1px",
        height: "1px",
        visibility: "hidden"
      });
      A.body.appendChild(c);
      var l = c.contentWindow.document;
      l.open();
      l.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>');
      l.close();
      b(this.container.querySelector("svg"));
      k.parentNode.remove();
      c.remove();
    };

    G.menu = function (a, b, c, d) {
      return [["M", a, b + 2.5], ["L", a + c, b + 2.5], ["M", a, b + d / 2 + .5], ["L", a + c, b + d / 2 + .5], ["M", a, b + d - 1.5], ["L", a + c, b + d - 1.5]];
    };

    G.menuball = function (a, b, c, d) {
      a = [];
      d = d / 3 - 2;
      return a = a.concat(this.circle(c - d, b, d, d), this.circle(c - d, b + d + 4, d, d), this.circle(c - d, b + 2 * (d + 4), d, d));
    };

    e.prototype.renderExporting = function () {
      var a = this,
          b = a.options.exporting,
          c = b.buttons,
          d = a.isDirtyExporting || !a.exportSVGElements;
      a.buttonOffset = 0;
      a.isDirtyExporting && a.destroyExport();
      d && !1 !== b.enabled && (a.exportEvents = [], a.exportingGroup = a.exportingGroup || a.renderer.g("exporting-group").attr({
        zIndex: 3
      }).add(), E(c, function (b) {
        a.addButton(b);
      }), a.isDirtyExporting = !1);
      v(a, "destroy", a.destroyExport);
    };

    v(e, "init", function () {
      var a = this;
      a.exporting = {
        update: function (b, c) {
          a.isDirtyExporting = !0;
          p(!0, a.options.exporting, b);
          t(c, !0) && a.redraw();
        }
      };
      l.addUpdate(function (b, c) {
        a.isDirtyExporting = !0;
        p(!0, a.options.navigation, b);
        t(c, !0) && a.redraw();
      }, a);
    });
    e.prototype.callbacks.push(function (a) {
      a.renderExporting();
      v(a, "redraw", a.renderExporting);
    });
  });
  q(e, "masters/modules/exporting.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/funnel.js":
/*!***************************************************!*\
  !*** ./node_modules/highcharts/modules/funnel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Highcharts funnel module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (b) {
   true && module.exports ? (b["default"] = b, module.exports = b) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (d) {
    b(d);
    b.Highcharts = d;
    return b;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (b) {
  function d(b, e, d, l) {
    b.hasOwnProperty(e) || (b[e] = l.apply(null, d));
  }

  var e = b ? b._modules : {};
  d(e, "Series/FunnelSeries.js", [e["Core/Series/Series.js"], e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, d, q, l) {
    var E = e.seriesTypes,
        F = q.noop;
    q = l.addEvent;
    var I = l.fireEvent,
        J = l.isArray,
        G = l.pick;
    e.seriesType("funnel", "pie", {
      animation: !1,
      center: ["50%", "50%"],
      width: "90%",
      neckWidth: "30%",
      height: "100%",
      neckHeight: "25%",
      reversed: !1,
      size: !0,
      dataLabels: {
        connectorWidth: 1,
        verticalAlign: "middle"
      },
      states: {
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      }
    }, {
      animate: F,
      translate: function () {
        function a(a, c) {
          return /%$/.test(a) ? c * parseInt(a, 10) / 100 : parseInt(a, 10);
        }

        var w = 0,
            c = this,
            h = c.chart,
            g = c.options,
            H = g.reversed,
            f = g.ignoreHiddenPoint,
            b = h.plotWidth;
        h = h.plotHeight;
        var e = 0,
            d = g.center,
            k = a(d[0], b),
            m = a(d[1], h),
            l = a(g.width, b),
            t,
            u = a(g.height, h),
            y = a(g.neckWidth, b),
            q = a(g.neckHeight, h),
            z = m - u / 2 + u - q;
        b = c.data;
        var B,
            C,
            E = "left" === g.dataLabels.position ? 1 : 0,
            A,
            n,
            D,
            v,
            p,
            x,
            r;

        c.getWidthAt = function (a) {
          var c = m - u / 2;
          return a > z || u === q ? y : y + (l - y) * (1 - (a - c) / (u - q));
        };

        c.getX = function (a, f, b) {
          return k + (f ? -1 : 1) * (c.getWidthAt(H ? 2 * m - a : a) / 2 + b.labelDistance);
        };

        c.center = [k, m, u];
        c.centerX = k;
        b.forEach(function (a) {
          f && !1 === a.visible || (w += a.y);
        });
        b.forEach(function (a) {
          r = null;
          C = w ? a.y / w : 0;
          n = m - u / 2 + e * u;
          p = n + C * u;
          t = c.getWidthAt(n);
          A = k - t / 2;
          D = A + t;
          t = c.getWidthAt(p);
          v = k - t / 2;
          x = v + t;
          n > z ? (A = v = k - y / 2, D = x = k + y / 2) : p > z && (r = p, t = c.getWidthAt(z), v = k - t / 2, x = v + t, p = z);
          H && (n = 2 * m - n, p = 2 * m - p, null !== r && (r = 2 * m - r));
          B = [["M", A, n], ["L", D, n], ["L", x, p]];
          null !== r && B.push(["L", x, r], ["L", v, r]);
          B.push(["L", v, p], ["Z"]);
          a.shapeType = "path";
          a.shapeArgs = {
            d: B
          };
          a.percentage = 100 * C;
          a.plotX = k;
          a.plotY = (n + (r || p)) / 2;
          a.tooltipPos = [k, a.plotY];
          a.dlBox = {
            x: v,
            y: n,
            topWidth: D - A,
            bottomWidth: x - v,
            height: Math.abs(G(r, p) - n),
            width: NaN
          };
          a.slice = F;
          a.half = E;
          f && !1 === a.visible || (e += C);
        });
        I(c, "afterTranslate");
      },
      sortByAngle: function (a) {
        a.sort(function (a, c) {
          return a.plotY - c.plotY;
        });
      },
      drawDataLabels: function () {
        var a = this.data,
            b = this.options.dataLabels.distance,
            c,
            h = a.length;

        for (this.center[2] -= 2 * b; h--;) {
          var g = a[h];
          var e = (c = g.half) ? 1 : -1;
          var f = g.plotY;
          g.labelDistance = G(g.options.dataLabels && g.options.dataLabels.distance, b);
          this.maxLabelDistance = Math.max(g.labelDistance, this.maxLabelDistance || 0);
          var d = this.getX(f, c, g);
          g.labelPosition = {
            natural: {
              x: 0,
              y: f
            },
            "final": {},
            alignment: c ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: d + (g.labelDistance - 5) * e,
                y: f
              },
              touchingSliceAt: {
                x: d + g.labelDistance * e,
                y: f
              }
            }
          };
        }

        E[this.options.dataLabels.inside ? "column" : "pie"].prototype.drawDataLabels.call(this);
      },
      alignDataLabel: function (a, e, c, h, g) {
        var d = a.series;
        h = d.options.reversed;
        var f = a.dlBox || a.shapeArgs,
            w = c.align,
            l = c.verticalAlign,
            q = ((d.options || {}).dataLabels || {}).inside,
            k = d.center[1];
        d = d.getWidthAt((h ? 2 * k - a.plotY : a.plotY) - f.height / 2 + e.height);
        d = "middle" === l ? (f.topWidth - f.bottomWidth) / 4 : (d - f.bottomWidth) / 2;
        k = f.y;
        var m = f.x;
        "middle" === l ? k = f.y - f.height / 2 + e.height / 2 : "top" === l && (k = f.y - f.height + e.height + c.padding);
        if ("top" === l && !h || "bottom" === l && h || "middle" === l) "right" === w ? m = f.x - c.padding + d : "left" === w && (m = f.x + c.padding - d);
        h = {
          x: m,
          y: h ? k - f.height : k,
          width: f.bottomWidth,
          height: f.height
        };
        c.verticalAlign = "bottom";
        q && !a.visible || b.Series.prototype.alignDataLabel.call(this, a, e, c, h, g);
        q && (!a.visible && a.dataLabel && (a.dataLabel.placed = !1), a.contrastColor && e.css({
          color: a.contrastColor
        }));
      }
    });
    q(d, "afterHideAllOverlappingLabels", function () {
      this.series.forEach(function (a) {
        var b = a.options && a.options.dataLabels;
        J(b) && (b = b[0]);
        a.is("pie") && a.placeDataLabels && b && !b.inside && a.placeDataLabels();
      });
    });
    e.seriesType("pyramid", "funnel", {
      neckWidth: "0%",
      neckHeight: "0%",
      reversed: !0
    });
    "";
  });
  d(e, "masters/modules/funnel.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/offline-exporting.js":
/*!**************************************************************!*\
  !*** ./node_modules/highcharts/modules/offline-exporting.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Client side exporting module

 (c) 2015-2019 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function (a) {
   true && module.exports ? (a["default"] = a, module.exports = a) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"), __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (f) {
    a(f);
    a.Highcharts = f;
    return a;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (a) {
  function f(a, b, m, e) {
    a.hasOwnProperty(b) || (a[b] = e.apply(null, m));
  }

  a = a ? a._modules : {};
  f(a, "Extensions/DownloadURL.js", [a["Core/Globals.js"]], function (a) {
    var b = a.win,
        m = b.navigator,
        e = b.document,
        f = b.URL || b.webkitURL || b,
        u = /Edge\/\d+/.test(m.userAgent),
        D = a.dataURLtoBlob = function (a) {
      if ((a = a.replace(/filename=.*;/, "").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/)) && 3 < a.length && b.atob && b.ArrayBuffer && b.Uint8Array && b.Blob && f.createObjectURL) {
        var x = b.atob(a[3]),
            d = new b.ArrayBuffer(x.length);
        d = new b.Uint8Array(d);

        for (var k = 0; k < d.length; ++k) d[k] = x.charCodeAt(k);

        a = new b.Blob([d], {
          type: a[1]
        });
        return f.createObjectURL(a);
      }
    };

    a = a.downloadURL = function (a, f) {
      var d = e.createElement("a");

      if ("string" === typeof a || a instanceof String || !m.msSaveOrOpenBlob) {
        a = "" + a;
        if (u || 2E6 < a.length) if (a = D(a) || "", !a) throw Error("Failed to convert to blob");
        if ("undefined" !== typeof d.download) d.href = a, d.download = f, e.body.appendChild(d), d.click(), e.body.removeChild(d);else try {
          var k = b.open(a, "chart");
          if ("undefined" === typeof k || null === k) throw Error("Failed to open window");
        } catch (E) {
          b.location.href = a;
        }
      } else m.msSaveOrOpenBlob(a, f);
    };

    return {
      dataURLtoBlob: D,
      downloadURL: a
    };
  });
  f(a, "Extensions/OfflineExporting.js", [a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"], a["Extensions/DownloadURL.js"]], function (a, b, f, e, L) {
    function u(a, d) {
      var g = k.getElementsByTagName("head")[0],
          c = k.createElement("script");
      c.type = "text/javascript";
      c.src = a;
      c.onload = d;

      c.onerror = function () {
        F("Error loading script " + a);
      };

      g.appendChild(c);
    }

    function m(a) {
      var b = -1 < v.userAgent.indexOf("WebKit") && 0 > v.userAgent.indexOf("Chrome");

      try {
        if (!b && 0 > v.userAgent.toLowerCase().indexOf("firefox")) return G.createObjectURL(new d.Blob([a], {
          type: "image/svg+xml;charset-utf-16"
        }));
      } catch (g) {}

      return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(a);
    }

    function x(a, b, g, c, y, n, f, p, l) {
      var h = new d.Image(),
          r = function () {
        setTimeout(function () {
          var d = k.createElement("canvas"),
              n = d.getContext && d.getContext("2d");

          try {
            if (n) {
              d.height = h.height * c;
              d.width = h.width * c;
              n.drawImage(h, 0, 0, d.width, d.height);

              try {
                var w = d.toDataURL(b);
                y(w, b, g, c);
              } catch (I) {
                q(a, b, g, c);
              }
            } else f(a, b, g, c);
          } finally {
            l && l(a, b, g, c);
          }
        }, M);
      },
          e = function () {
        p(a, b, g, c);
        l && l(a, b, g, c);
      };

      var q = function () {
        h = new d.Image();
        q = n;
        h.crossOrigin = "Anonymous";
        h.onload = r;
        h.onerror = e;
        h.src = a;
      };

      h.onload = r;
      h.onerror = e;
      h.src = a;
    }

    function C(a, b, g, c) {
      function f(a, b) {
        var c = a.width.baseVal.value + 2 * b;
        b = a.height.baseVal.value + 2 * b;
        c = new d.jsPDF(b > c ? "p" : "l", "pt", [c, b]);
        [].forEach.call(a.querySelectorAll('*[visibility="hidden"]'), function (a) {
          a.parentNode.removeChild(a);
        });
        d.svg2pdf(a, c, {
          removeInvalid: !0
        });
        return c.output("datauristring");
      }

      function n() {
        l.innerHTML = a;
        var b = l.getElementsByTagName("text"),
            d;
        [].forEach.call(b, function (a) {
          ["font-family", "font-size"].forEach(function (b) {
            for (var c = a; c && c !== l;) {
              if (c.style[b]) {
                a.style[b] = c.style[b];
                break;
              }

              c = c.parentNode;
            }
          });
          a.style["font-family"] = a.style["font-family"] && a.style["font-family"].split(" ").splice(-1);
          d = a.getElementsByTagName("title");
          [].forEach.call(d, function (b) {
            a.removeChild(b);
          });
        });
        b = f(l.firstChild, 0);

        try {
          z(b, r), c && c();
        } catch (N) {
          g(N);
        }
      }

      var e = !0,
          p = b.libURL || J().exporting.libURL,
          l = k.createElement("div"),
          h = b.type || "image/png",
          r = (b.filename || "chart") + "." + ("image/svg+xml" === h ? "svg" : h.split("/")[1]),
          A = b.scale || 1;
      p = "/" !== p.slice(-1) ? p + "/" : p;
      if ("image/svg+xml" === h) try {
        if ("undefined" !== typeof v.msSaveOrOpenBlob) {
          var q = new MSBlobBuilder();
          q.append(a);
          var t = q.getBlob("image/svg+xml");
        } else t = m(a);

        z(t, r);
        c && c();
      } catch (w) {
        g(w);
      } else if ("application/pdf" === h) d.jsPDF && d.svg2pdf ? n() : (e = !0, u(p + "jspdf.js", function () {
        u(p + "svg2pdf.js", function () {
          n();
        });
      }));else {
        t = m(a);

        var H = function () {
          try {
            G.revokeObjectURL(t);
          } catch (w) {}
        };

        x(t, h, {}, A, function (a) {
          try {
            z(a, r), c && c();
          } catch (I) {
            g(I);
          }
        }, function () {
          var b = k.createElement("canvas"),
              n = b.getContext("2d"),
              f = a.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1] * A,
              y = a.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1] * A,
              l = function () {
            n.drawSvg(a, 0, 0, f, y);

            try {
              z(v.msSaveOrOpenBlob ? b.msToBlob() : b.toDataURL(h), r), c && c();
            } catch (O) {
              g(O);
            } finally {
              H();
            }
          };

          b.width = f;
          b.height = y;
          d.canvg ? l() : (e = !0, u(p + "rgbcolor.js", function () {
            u(p + "canvg.js", function () {
              l();
            });
          }));
        }, g, g, function () {
          e && H();
        });
      }
    }

    var d = b.win,
        k = b.doc,
        E = e.addEvent,
        F = e.error,
        P = e.extend,
        J = e.getOptions,
        K = e.merge,
        z = L.downloadURL,
        G = d.URL || d.webkitURL || d,
        v = d.navigator,
        B = /Edge\/|Trident\/|MSIE /.test(v.userAgent),
        M = B ? 150 : 0;
    b.CanVGRenderer = {};

    a.prototype.getSVGForLocalExport = function (a, b, d, c) {
      var g = this,
          n = 0,
          f,
          e,
          l,
          h,
          k = function () {
        n === q.length && c(g.sanitizeSVG(f.innerHTML, e));
      },
          r = function (a, b, c) {
        ++n;
        c.imageElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
        k();
      };

      g.unbindGetSVG = E(g, "getSVG", function (a) {
        e = a.chartCopy.options;
        f = a.chartCopy.container.cloneNode(!0);
      });
      g.getSVGForExport(a, b);
      var q = f.getElementsByTagName("image");

      try {
        if (!q.length) {
          c(g.sanitizeSVG(f.innerHTML, e));
          return;
        }

        var t = 0;

        for (l = q.length; t < l; ++t) {
          var m = q[t];
          (h = m.getAttributeNS("http://www.w3.org/1999/xlink", "href")) ? x(h, "image/png", {
            imageElement: m
          }, a.scale, r, d, d, d) : (++n, m.parentNode.removeChild(m), k());
        }
      } catch (w) {
        d(w);
      }

      g.unbindGetSVG();
    };

    a.prototype.exportChartLocal = function (a, b) {
      var d = this,
          c = K(d.options.exporting, a),
          e = function (a) {
        !1 === c.fallbackToExportServer ? c.error ? c.error(c, a) : F(28, !0) : d.exportChart(c);
      };

      a = function () {
        return [].some.call(d.container.getElementsByTagName("image"), function (a) {
          a = a.getAttribute("href");
          return "" !== a && 0 !== a.indexOf("data:");
        });
      };

      B && d.styledMode && (f.prototype.inlineWhitelist = [/^blockSize/, /^border/, /^caretColor/, /^color/, /^columnRule/, /^columnRuleColor/, /^cssFloat/, /^cursor/, /^fill$/, /^fillOpacity/, /^font/, /^inlineSize/, /^length/, /^lineHeight/, /^opacity/, /^outline/, /^parentRule/, /^rx$/, /^ry$/, /^stroke/, /^textAlign/, /^textAnchor/, /^textDecoration/, /^transform/, /^vectorEffect/, /^visibility/, /^x$/, /^y$/]);
      B && ("application/pdf" === c.type || d.container.getElementsByTagName("image").length && "image/svg+xml" !== c.type) || "application/pdf" === c.type && a() ? e("Image type not supported for this chart/browser.") : d.getSVGForLocalExport(c, b, e, function (a) {
        -1 < a.indexOf("<foreignObject") && "image/svg+xml" !== c.type ? e("Image type not supportedfor charts with embedded HTML") : C(a, P({
          filename: d.getFilename()
        }, c), e);
      });
    };

    K(!0, J().exporting, {
      libURL: "https://code.highcharts.com/8.2.2/lib/",
      menuItemDefinitions: {
        downloadPNG: {
          textKey: "downloadPNG",
          onclick: function () {
            this.exportChartLocal();
          }
        },
        downloadJPEG: {
          textKey: "downloadJPEG",
          onclick: function () {
            this.exportChartLocal({
              type: "image/jpeg"
            });
          }
        },
        downloadSVG: {
          textKey: "downloadSVG",
          onclick: function () {
            this.exportChartLocal({
              type: "image/svg+xml"
            });
          }
        },
        downloadPDF: {
          textKey: "downloadPDF",
          onclick: function () {
            this.exportChartLocal({
              type: "application/pdf"
            });
          }
        }
      }
    });
    b.downloadSVGLocal = C;
  });
  f(a, "masters/modules/offline-exporting.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/solid-gauge.js":
/*!********************************************************!*\
  !*** ./node_modules/highcharts/modules/solid-gauge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Solid angular gauge module

 (c) 2010-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (a) {
   true && module.exports ? (a["default"] = a, module.exports = a) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"), __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (c) {
    a(c);
    a.Highcharts = c;
    return a;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (a) {
  function c(a, r, c, t) {
    a.hasOwnProperty(r) || (a[r] = t.apply(null, c));
  }

  a = a ? a._modules : {};
  c(a, "Series/SolidGaugeSeries.js", [a["Core/Series/Series.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Mixins/LegendSymbol.js"], a["Core/Utilities.js"]], function (a, c, m, t, k) {
    var u = c.parse,
        r = k.clamp,
        w = k.extend,
        x = k.isNumber,
        A = k.merge,
        v = k.pick,
        y = k.pInt;
    c = k.wrap;
    c(m.Renderer.prototype.symbols, "arc", function (e, a, l, b, B, d) {
      e = e(a, l, b, B, d);
      d.rounded && (b = ((d.r || b) - (d.innerR || 0)) / 2, a = e[0], d = e[2], "M" === a[0] && "L" === d[0] && (a = ["A", b, b, 0, 1, 1, a[1], a[2]], e[2] = ["A", b, b, 0, 1, 1, d[1], d[2]], e[4] = a));
      return e;
    });
    var h;

    (function (a) {
      var e = {
        initDataClasses: function (a) {
          var e = this.chart,
              l,
              d = 0,
              g = this.options;
          this.dataClasses = l = [];
          a.dataClasses.forEach(function (b, f) {
            b = A(b);
            l.push(b);
            b.color || ("category" === g.dataClassColor ? (f = e.options.colors, b.color = f[d++], d === f.length && (d = 0)) : b.color = u(g.minColor).tweenTo(u(g.maxColor), f / (a.dataClasses.length - 1)));
          });
        },
        initStops: function (a) {
          this.stops = a.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
          this.stops.forEach(function (a) {
            a.color = u(a[1]);
          });
        },
        toColor: function (a, e) {
          var b = this.stops,
              d = this.dataClasses,
              g;
          if (d) for (g = d.length; g--;) {
            var c = d[g];
            var f = c.from;
            b = c.to;

            if (("undefined" === typeof f || a >= f) && ("undefined" === typeof b || a <= b)) {
              var z = c.color;
              e && (e.dataClass = g);
              break;
            }
          } else {
            this.logarithmic && (a = this.val2lin(a));
            a = 1 - (this.max - a) / (this.max - this.min);

            for (g = b.length; g-- && !(a > b[g][0]););

            f = b[g] || b[g + 1];
            b = b[g + 1] || f;
            a = 1 - (b[0] - a) / (b[0] - f[0] || 1);
            z = f.color.tweenTo(b.color, a);
          }
          return z;
        }
      };

      a.init = function (a) {
        w(a, e);
      };
    })(h || (h = {}));

    a.seriesType("solidgauge", "gauge", {
      colorByPoint: !0,
      dataLabels: {
        y: 0
      }
    }, {
      drawLegendSymbol: t.drawRectangle,
      translate: function () {
        var a = this.yAxis;
        h.init(a);
        !a.dataClasses && a.options.dataClasses && a.initDataClasses(a.options);
        a.initStops(a.options);
        m.seriesTypes.gauge.prototype.translate.call(this);
      },
      drawPoints: function () {
        var a = this,
            c = a.yAxis,
            l = c.center,
            b = a.options,
            k = a.chart.renderer,
            d = b.overshoot,
            g = x(d) ? d / 180 * Math.PI : 0,
            h;
        x(b.threshold) && (h = c.startAngleRad + c.translate(b.threshold, null, null, null, !0));
        this.thresholdAngleRad = v(h, c.startAngleRad);
        a.points.forEach(function (f) {
          if (!f.isNull) {
            var d = f.graphic,
                e = c.startAngleRad + c.translate(f.y, null, null, null, !0),
                h = y(v(f.options.radius, b.radius, 100)) * l[2] / 200,
                n = y(v(f.options.innerRadius, b.innerRadius, 60)) * l[2] / 200,
                p = c.toColor(f.y, f),
                q = Math.min(c.startAngleRad, c.endAngleRad),
                m = Math.max(c.startAngleRad, c.endAngleRad);
            "none" === p && (p = f.color || a.color || "none");
            "none" !== p && (f.color = p);
            e = r(e, q - g, m + g);
            !1 === b.wrap && (e = r(e, q, m));
            q = Math.min(e, a.thresholdAngleRad);
            e = Math.max(e, a.thresholdAngleRad);
            e - q > 2 * Math.PI && (e = q + 2 * Math.PI);
            f.shapeArgs = n = {
              x: l[0],
              y: l[1],
              r: h,
              innerR: n,
              start: q,
              end: e,
              rounded: b.rounded
            };
            f.startR = h;
            d ? (h = n.d, d.animate(w({
              fill: p
            }, n)), h && (n.d = h)) : f.graphic = d = k.arc(n).attr({
              fill: p,
              "sweep-flag": 0
            }).add(a.group);
            a.chart.styledMode || ("square" !== b.linecap && d.attr({
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), d.attr({
              stroke: b.borderColor || "none",
              "stroke-width": b.borderWidth || 0
            }));
            d && d.addClass(f.getClassName(), !0);
          }
        });
      },
      animate: function (a) {
        a || (this.startAngleRad = this.thresholdAngleRad, m.seriesTypes.pie.prototype.animate.call(this, a));
      }
    });
    "";
    return h;
  });
  c(a, "masters/modules/solid-gauge.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/treemap.js":
/*!****************************************************!*\
  !*** ./node_modules/highcharts/modules/treemap.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 (c) 2014-2019 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function (a) {
   true && module.exports ? (a["default"] = a, module.exports = a) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (p) {
    a(p);
    a.Highcharts = p;
    return a;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (a) {
  function p(a, c, g, y) {
    a.hasOwnProperty(c) || (a[c] = y.apply(null, g));
  }

  a = a ? a._modules : {};
  p(a, "Mixins/ColorMapSeries.js", [a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function (a, c, g) {
    var y = g.defined;
    return {
      colorMapPointMixin: {
        dataLabelOnNull: !0,
        isValid: function () {
          return null !== this.value && Infinity !== this.value && -Infinity !== this.value;
        },
        setState: function (a) {
          c.prototype.setState.call(this, a);
          this.graphic && this.graphic.attr({
            zIndex: "hover" === a ? 1 : 0
          });
        }
      },
      colorMapSeriesMixin: {
        pointArrayMap: ["value"],
        axisTypes: ["xAxis", "yAxis", "colorAxis"],
        trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
        getSymbol: a.noop,
        parallelArrays: ["x", "y", "value"],
        colorKey: "value",
        pointAttribs: a.seriesTypes.column.prototype.pointAttribs,
        colorAttribs: function (a) {
          var g = {};
          y(a.color) && (g[this.colorProp || "fill"] = a.color);
          return g;
        }
      }
    };
  });
  p(a, "Mixins/DrawPoint.js", [], function () {
    var a = function (a) {
      return "function" === typeof a;
    },
        c = function (g) {
      var c,
          q = this,
          m = q.graphic,
          x = g.animatableAttribs,
          t = g.onComplete,
          h = g.css,
          f = g.renderer,
          z = null === (c = q.series) || void 0 === c ? void 0 : c.options.animation;
      if (q.shouldDraw()) m || (q.graphic = m = f[g.shapeType](g.shapeArgs).add(g.group)), m.css(h).attr(g.attribs).animate(x, g.isNew ? !1 : z, t);else if (m) {
        var E = function () {
          q.graphic = m = m.destroy();
          a(t) && t();
        };

        Object.keys(x).length ? m.animate(x, void 0, function () {
          E();
        }) : E();
      }
    };

    return {
      draw: c,
      drawPoint: function (a) {
        (a.attribs = a.attribs || {})["class"] = this.getClassName();
        c.call(this, a);
      },
      isFn: a
    };
  });
  p(a, "Mixins/TreeSeries.js", [a["Core/Color/Color.js"], a["Core/Utilities.js"]], function (a, c) {
    var g = c.extend,
        p = c.isArray,
        q = c.isNumber,
        m = c.isObject,
        x = c.merge,
        t = c.pick;
    return {
      getColor: function (h, f) {
        var z = f.index,
            g = f.mapOptionsToLevel,
            c = f.parentColor,
            m = f.parentColorIndex,
            q = f.series,
            v = f.colors,
            H = f.siblings,
            n = q.points,
            p = q.chart.options.chart,
            w;

        if (h) {
          n = n[h.i];
          h = g[h.level] || {};

          if (g = n && h.colorByPoint) {
            var x = n.index % (v ? v.length : p.colorCount);
            var F = v && v[x];
          }

          if (!q.chart.styledMode) {
            v = n && n.options.color;
            p = h && h.color;
            if (w = c) w = (w = h && h.colorVariation) && "brightness" === w.key ? a.parse(c).brighten(z / H * w.to).get() : c;
            w = t(v, p, F, w, q.color);
          }

          var y = t(n && n.options.colorIndex, h && h.colorIndex, x, m, f.colorIndex);
        }

        return {
          color: w,
          colorIndex: y
        };
      },
      getLevelOptions: function (a) {
        var f = null;

        if (m(a)) {
          f = {};
          var h = q(a.from) ? a.from : 1;
          var c = a.levels;
          var t = {};
          var y = m(a.defaults) ? a.defaults : {};
          p(c) && (t = c.reduce(function (a, f) {
            if (m(f) && q(f.level)) {
              var c = x({}, f);
              var z = "boolean" === typeof c.levelIsConstant ? c.levelIsConstant : y.levelIsConstant;
              delete c.levelIsConstant;
              delete c.level;
              f = f.level + (z ? 0 : h - 1);
              m(a[f]) ? g(a[f], c) : a[f] = c;
            }

            return a;
          }, {}));
          c = q(a.to) ? a.to : 1;

          for (a = 0; a <= c; a++) f[a] = x({}, y, m(t[a]) ? t[a] : {});
        }

        return f;
      },
      setTreeValues: function E(a, c) {
        var f = c.before,
            m = c.idRoot,
            q = c.mapIdToNode[m],
            v = c.points[a.i],
            p = v && v.options || {},
            n = 0,
            z = [];
        g(a, {
          levelDynamic: a.level - (("boolean" === typeof c.levelIsConstant ? c.levelIsConstant : 1) ? 0 : q.level),
          name: t(v && v.name, ""),
          visible: m === a.id || ("boolean" === typeof c.visible ? c.visible : !1)
        });
        "function" === typeof f && (a = f(a, c));
        a.children.forEach(function (f, m) {
          var q = g({}, c);
          g(q, {
            index: m,
            siblings: a.children.length,
            visible: a.visible
          });
          f = E(f, q);
          z.push(f);
          f.visible && (n += f.val);
        });
        a.visible = 0 < n || a.visible;
        f = t(p.value, n);
        g(a, {
          children: z,
          childrenTotal: n,
          isLeaf: a.visible && !n,
          val: f
        });
        return a;
      },
      updateRootId: function (a) {
        if (m(a)) {
          var c = m(a.options) ? a.options : {};
          c = t(a.rootNode, c.rootId, "");
          m(a.userOptions) && (a.userOptions.rootId = c);
          a.rootNode = c;
        }

        return c;
      }
    };
  });
  p(a, "Series/TreemapSeries.js", [a["Core/Series/Series.js"], a["Core/Color/Color.js"], a["Mixins/ColorMapSeries.js"], a["Mixins/DrawPoint.js"], a["Core/Globals.js"], a["Mixins/LegendSymbol.js"], a["Core/Series/Point.js"], a["Mixins/TreeSeries.js"], a["Core/Utilities.js"]], function (a, c, g, p, q, m, x, t, h) {
    var f = a.seriesTypes,
        z = c.parse,
        y = g.colorMapSeriesMixin;
    c = q.noop;

    var M = t.getColor,
        N = t.getLevelOptions,
        O = t.updateRootId,
        v = h.addEvent,
        H = h.correctFloat,
        n = h.defined,
        P = h.error,
        w = h.extend,
        Q = h.fireEvent,
        F = h.isArray,
        L = h.isNumber,
        R = h.isObject,
        I = h.isString,
        C = h.merge,
        S = h.objectEach,
        A = h.pick,
        T = h.stableSort,
        D = q.Series,
        U = function (b, d, e) {
      e = e || this;
      S(b, function (a, l) {
        d.call(e, a, l, b);
      });
    },
        G = function (b, d, e) {
      e = e || this;
      b = d.call(e, b);
      !1 !== b && G(b, d, e);
    },
        J = !1;

    a.seriesType("treemap", "scatter", {
      allowTraversingTree: !1,
      animationLimit: 250,
      showInLegend: !1,
      marker: void 0,
      colorByPoint: !1,
      dataLabels: {
        defer: !1,
        enabled: !0,
        formatter: function () {
          var b = this && this.point ? this.point : {};
          return I(b.name) ? b.name : "";
        },
        inside: !0,
        verticalAlign: "middle"
      },
      tooltip: {
        headerFormat: "",
        pointFormat: "<b>{point.name}</b>: {point.value}<br/>"
      },
      ignoreHiddenPoint: !0,
      layoutAlgorithm: "sliceAndDice",
      layoutStartingDirection: "vertical",
      alternateStartingDirection: !1,
      levelIsConstant: !0,
      drillUpButton: {
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      },
      traverseUpButton: {
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      },
      borderColor: "#e6e6e6",
      borderWidth: 1,
      colorKey: "colorValue",
      opacity: .15,
      states: {
        hover: {
          borderColor: "#999999",
          brightness: f.heatmap ? 0 : .1,
          halo: !1,
          opacity: .75,
          shadow: !1
        }
      }
    }, {
      pointArrayMap: ["value"],
      directTouch: !0,
      optionalAxis: "colorAxis",
      getSymbol: c,
      parallelArrays: ["x", "y", "value", "colorValue"],
      colorKey: "colorValue",
      trackerGroups: ["group", "dataLabelsGroup"],
      getListOfParents: function (b, d) {
        b = F(b) ? b : [];
        var e = F(d) ? d : [];
        d = b.reduce(function (b, d, e) {
          d = A(d.parent, "");
          "undefined" === typeof b[d] && (b[d] = []);
          b[d].push(e);
          return b;
        }, {
          "": []
        });
        U(d, function (b, d, a) {
          "" !== d && -1 === e.indexOf(d) && (b.forEach(function (b) {
            a[""].push(b);
          }), delete a[d]);
        });
        return d;
      },
      getTree: function () {
        var b = this.data.map(function (b) {
          return b.id;
        });
        b = this.getListOfParents(this.data, b);
        this.nodeMap = {};
        return this.buildNode("", -1, 0, b);
      },
      hasData: function () {
        return !!this.processedXData.length;
      },
      init: function (b, d) {
        y && (this.colorAttribs = y.colorAttribs);
        var e = v(this, "setOptions", function (b) {
          b = b.userOptions;
          n(b.allowDrillToNode) && !n(b.allowTraversingTree) && (b.allowTraversingTree = b.allowDrillToNode, delete b.allowDrillToNode);
          n(b.drillUpButton) && !n(b.traverseUpButton) && (b.traverseUpButton = b.drillUpButton, delete b.drillUpButton);
        });
        D.prototype.init.call(this, b, d);
        delete this.opacity;
        this.eventsToUnbind.push(e);
        this.options.allowTraversingTree && this.eventsToUnbind.push(v(this, "click", this.onClickDrillToNode));
      },
      buildNode: function (b, d, e, a, l) {
        var c = this,
            k = [],
            u = c.points[d],
            K = 0,
            r;
        (a[b] || []).forEach(function (d) {
          r = c.buildNode(c.points[d].id, d, e + 1, a, b);
          K = Math.max(r.height + 1, K);
          k.push(r);
        });
        d = {
          id: b,
          i: d,
          children: k,
          height: K,
          level: e,
          parent: l,
          visible: !1
        };
        c.nodeMap[d.id] = d;
        u && (u.node = d);
        return d;
      },
      setTreeValues: function (b) {
        var d = this,
            e = d.options,
            a = d.nodeMap[d.rootNode];
        e = "boolean" === typeof e.levelIsConstant ? e.levelIsConstant : !0;
        var l = 0,
            c = [],
            k = d.points[b.i];
        b.children.forEach(function (b) {
          b = d.setTreeValues(b);
          c.push(b);
          b.ignore || (l += b.val);
        });
        T(c, function (b, d) {
          return (b.sortIndex || 0) - (d.sortIndex || 0);
        });
        var B = A(k && k.options.value, l);
        k && (k.value = B);
        w(b, {
          children: c,
          childrenTotal: l,
          ignore: !(A(k && k.visible, !0) && 0 < B),
          isLeaf: b.visible && !l,
          levelDynamic: b.level - (e ? 0 : a.level),
          name: A(k && k.name, ""),
          sortIndex: A(k && k.sortIndex, -B),
          val: B
        });
        return b;
      },
      calculateChildrenAreas: function (b, d) {
        var e = this,
            a = e.options,
            l = e.mapOptionsToLevel[b.level + 1],
            c = A(e[l && l.layoutAlgorithm] && l.layoutAlgorithm, a.layoutAlgorithm),
            k = a.alternateStartingDirection,
            B = [];
        b = b.children.filter(function (b) {
          return !b.ignore;
        });
        l && l.layoutStartingDirection && (d.direction = "vertical" === l.layoutStartingDirection ? 0 : 1);
        B = e[c](d, b);
        b.forEach(function (b, a) {
          a = B[a];
          b.values = C(a, {
            val: b.childrenTotal,
            direction: k ? 1 - d.direction : d.direction
          });
          b.pointValues = C(a, {
            x: a.x / e.axisRatio,
            y: 100 - a.y - a.height,
            width: a.width / e.axisRatio
          });
          b.children.length && e.calculateChildrenAreas(b, b.values);
        });
      },
      setPointValues: function () {
        var b = this,
            d = b.xAxis,
            a = b.yAxis,
            c = b.chart.styledMode;
        b.points.forEach(function (e) {
          var l = e.node,
              k = l.pointValues;
          l = l.visible;

          if (k && l) {
            l = k.height;
            var u = k.width,
                f = k.x,
                r = k.y,
                h = c ? 0 : (b.pointAttribs(e)["stroke-width"] || 0) % 2 / 2;
            k = Math.round(d.toPixels(f, !0)) - h;
            u = Math.round(d.toPixels(f + u, !0)) - h;
            f = Math.round(a.toPixels(r, !0)) - h;
            l = Math.round(a.toPixels(r + l, !0)) - h;
            e.shapeArgs = {
              x: Math.min(k, u),
              y: Math.min(f, l),
              width: Math.abs(u - k),
              height: Math.abs(l - f)
            };
            e.plotX = e.shapeArgs.x + e.shapeArgs.width / 2;
            e.plotY = e.shapeArgs.y + e.shapeArgs.height / 2;
          } else delete e.plotX, delete e.plotY;
        });
      },
      setColorRecursive: function (b, d, a, c, l) {
        var e = this,
            k = e && e.chart;
        k = k && k.options && k.options.colors;

        if (b) {
          var u = M(b, {
            colors: k,
            index: c,
            mapOptionsToLevel: e.mapOptionsToLevel,
            parentColor: d,
            parentColorIndex: a,
            series: e,
            siblings: l
          });
          if (d = e.points[b.i]) d.color = u.color, d.colorIndex = u.colorIndex;
          (b.children || []).forEach(function (d, a) {
            e.setColorRecursive(d, u.color, u.colorIndex, a, b.children.length);
          });
        }
      },
      algorithmGroup: function (b, d, a, c) {
        this.height = b;
        this.width = d;
        this.plot = c;
        this.startDirection = this.direction = a;
        this.lH = this.nH = this.lW = this.nW = this.total = 0;
        this.elArr = [];
        this.lP = {
          total: 0,
          lH: 0,
          nH: 0,
          lW: 0,
          nW: 0,
          nR: 0,
          lR: 0,
          aspectRatio: function (b, d) {
            return Math.max(b / d, d / b);
          }
        };

        this.addElement = function (b) {
          this.lP.total = this.elArr[this.elArr.length - 1];
          this.total += b;
          0 === this.direction ? (this.lW = this.nW, this.lP.lH = this.lP.total / this.lW, this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH), this.nW = this.total / this.height, this.lP.nH = this.lP.total / this.nW, this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH)) : (this.lH = this.nH, this.lP.lW = this.lP.total / this.lH, this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH), this.nH = this.total / this.width, this.lP.nW = this.lP.total / this.nH, this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH));
          this.elArr.push(b);
        };

        this.reset = function () {
          this.lW = this.nW = 0;
          this.elArr = [];
          this.total = 0;
        };
      },
      algorithmCalcPoints: function (b, d, a, c) {
        var e,
            u,
            k,
            f,
            h = a.lW,
            r = a.lH,
            g = a.plot,
            m = 0,
            q = a.elArr.length - 1;
        if (d) h = a.nW, r = a.nH;else var n = a.elArr[a.elArr.length - 1];
        a.elArr.forEach(function (b) {
          if (d || m < q) 0 === a.direction ? (e = g.x, u = g.y, k = h, f = b / k) : (e = g.x, u = g.y, f = r, k = b / f), c.push({
            x: e,
            y: u,
            width: k,
            height: H(f)
          }), 0 === a.direction ? g.y += f : g.x += k;
          m += 1;
        });
        a.reset();
        0 === a.direction ? a.width -= h : a.height -= r;
        g.y = g.parent.y + (g.parent.height - a.height);
        g.x = g.parent.x + (g.parent.width - a.width);
        b && (a.direction = 1 - a.direction);
        d || a.addElement(n);
      },
      algorithmLowAspectRatio: function (b, d, a) {
        var e = [],
            c = this,
            f,
            k = {
          x: d.x,
          y: d.y,
          parent: d
        },
            g = 0,
            h = a.length - 1,
            r = new this.algorithmGroup(d.height, d.width, d.direction, k);
        a.forEach(function (a) {
          f = a.val / d.val * d.height * d.width;
          r.addElement(f);
          r.lP.nR > r.lP.lR && c.algorithmCalcPoints(b, !1, r, e, k);
          g === h && c.algorithmCalcPoints(b, !0, r, e, k);
          g += 1;
        });
        return e;
      },
      algorithmFill: function (b, a, e) {
        var d = [],
            c,
            f = a.direction,
            k = a.x,
            g = a.y,
            h = a.width,
            r = a.height,
            m,
            q,
            n,
            p;
        e.forEach(function (e) {
          c = e.val / a.val * a.height * a.width;
          m = k;
          q = g;
          0 === f ? (p = r, n = c / p, h -= n, k += n) : (n = h, p = c / n, r -= p, g += p);
          d.push({
            x: m,
            y: q,
            width: n,
            height: p
          });
          b && (f = 1 - f);
        });
        return d;
      },
      strip: function (b, a) {
        return this.algorithmLowAspectRatio(!1, b, a);
      },
      squarified: function (b, a) {
        return this.algorithmLowAspectRatio(!0, b, a);
      },
      sliceAndDice: function (b, a) {
        return this.algorithmFill(!0, b, a);
      },
      stripes: function (b, a) {
        return this.algorithmFill(!1, b, a);
      },
      translate: function () {
        var b = this,
            a = b.options,
            e = O(b);
        D.prototype.translate.call(b);
        var c = b.tree = b.getTree();
        var l = b.nodeMap[e];
        b.renderTraverseUpButton(e);
        b.mapOptionsToLevel = N({
          from: l.level + 1,
          levels: a.levels,
          to: c.height,
          defaults: {
            levelIsConstant: b.options.levelIsConstant,
            colorByPoint: a.colorByPoint
          }
        });
        "" === e || l && l.children.length || (b.setRootNode("", !1), e = b.rootNode, l = b.nodeMap[e]);
        G(b.nodeMap[b.rootNode], function (a) {
          var d = !1,
              e = a.parent;
          a.visible = !0;
          if (e || "" === e) d = b.nodeMap[e];
          return d;
        });
        G(b.nodeMap[b.rootNode].children, function (b) {
          var a = !1;
          b.forEach(function (b) {
            b.visible = !0;
            b.children.length && (a = (a || []).concat(b.children));
          });
          return a;
        });
        b.setTreeValues(c);
        b.axisRatio = b.xAxis.len / b.yAxis.len;
        b.nodeMap[""].pointValues = e = {
          x: 0,
          y: 0,
          width: 100,
          height: 100
        };
        b.nodeMap[""].values = e = C(e, {
          width: e.width * b.axisRatio,
          direction: "vertical" === a.layoutStartingDirection ? 0 : 1,
          val: c.val
        });
        b.calculateChildrenAreas(c, e);
        b.colorAxis || a.colorByPoint || b.setColorRecursive(b.tree);
        a.allowTraversingTree && (a = l.pointValues, b.xAxis.setExtremes(a.x, a.x + a.width, !1), b.yAxis.setExtremes(a.y, a.y + a.height, !1), b.xAxis.setScale(), b.yAxis.setScale());
        b.setPointValues();
      },
      drawDataLabels: function () {
        var b = this,
            a = b.mapOptionsToLevel,
            e,
            c;
        b.points.filter(function (b) {
          return b.node.visible;
        }).forEach(function (d) {
          c = a[d.node.level];
          e = {
            style: {}
          };
          d.node.isLeaf || (e.enabled = !1);
          c && c.dataLabels && (e = C(e, c.dataLabels), b._hasPointLabels = !0);
          d.shapeArgs && (e.style.width = d.shapeArgs.width, d.dataLabel && d.dataLabel.css({
            width: d.shapeArgs.width + "px"
          }));
          d.dlOptions = C(e, d.options.dataLabels);
        });
        D.prototype.drawDataLabels.call(this);
      },
      alignDataLabel: function (b, a, e) {
        var d = e.style;
        !n(d.textOverflow) && a.text && a.getBBox().width > a.text.textWidth && a.css({
          textOverflow: "ellipsis",
          width: d.width += "px"
        });
        f.column.prototype.alignDataLabel.apply(this, arguments);
        b.dataLabel && b.dataLabel.attr({
          zIndex: (b.node.zIndex || 0) + 1
        });
      },
      pointAttribs: function (b, a) {
        var d = R(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
            c = b && d[b.node.level] || {};
        d = this.options;
        var f = a && d.states[a] || {},
            g = b && b.getClassName() || "";
        b = {
          stroke: b && b.borderColor || c.borderColor || f.borderColor || d.borderColor,
          "stroke-width": A(b && b.borderWidth, c.borderWidth, f.borderWidth, d.borderWidth),
          dashstyle: b && b.borderDashStyle || c.borderDashStyle || f.borderDashStyle || d.borderDashStyle,
          fill: b && b.color || this.color
        };
        -1 !== g.indexOf("highcharts-above-level") ? (b.fill = "none", b["stroke-width"] = 0) : -1 !== g.indexOf("highcharts-internal-node-interactive") ? (a = A(f.opacity, d.opacity), b.fill = z(b.fill).setOpacity(a).get(), b.cursor = "pointer") : -1 !== g.indexOf("highcharts-internal-node") ? b.fill = "none" : a && (b.fill = z(b.fill).brighten(f.brightness).get());
        return b;
      },
      drawPoints: function () {
        var b = this,
            a = b.chart,
            e = a.renderer,
            c = a.styledMode,
            f = b.options,
            g = c ? {} : f.shadow,
            k = f.borderRadius,
            h = a.pointCount < f.animationLimit,
            m = f.allowTraversingTree;
        b.points.forEach(function (a) {
          var d = a.node.levelDynamic,
              l = {},
              n = {},
              q = {},
              p = "level-group-" + a.node.level,
              u = !!a.graphic,
              r = h && u,
              t = a.shapeArgs;
          a.shouldDraw() && (k && (n.r = k), C(!0, r ? l : n, u ? t : {}, c ? {} : b.pointAttribs(a, a.selected ? "select" : void 0)), b.colorAttribs && c && w(q, b.colorAttribs(a)), b[p] || (b[p] = e.g(p).attr({
            zIndex: 1E3 - (d || 0)
          }).add(b.group), b[p].survive = !0));
          a.draw({
            animatableAttribs: l,
            attribs: n,
            css: q,
            group: b[p],
            renderer: e,
            shadow: g,
            shapeArgs: t,
            shapeType: "rect"
          });
          m && a.graphic && (a.drillId = f.interactByLeaf ? b.drillToByLeaf(a) : b.drillToByGroup(a));
        });
      },
      onClickDrillToNode: function (b) {
        var a = (b = b.point) && b.drillId;
        I(a) && (b.setState(""), this.setRootNode(a, !0, {
          trigger: "click"
        }));
      },
      drillToByGroup: function (b) {
        var a = !1;
        1 !== b.node.level - this.nodeMap[this.rootNode].level || b.node.isLeaf || (a = b.id);
        return a;
      },
      drillToByLeaf: function (b) {
        var a = !1;
        if (b.node.parent !== this.rootNode && b.node.isLeaf) for (b = b.node; !a;) b = this.nodeMap[b.parent], b.parent === this.rootNode && (a = b.id);
        return a;
      },
      drillUp: function () {
        var b = this.nodeMap[this.rootNode];
        b && I(b.parent) && this.setRootNode(b.parent, !0, {
          trigger: "traverseUpButton"
        });
      },
      drillToNode: function (b, a) {
        P(32, !1, void 0, {
          "treemap.drillToNode": "use treemap.setRootNode"
        });
        this.setRootNode(b, a);
      },
      setRootNode: function (b, a, e) {
        b = w({
          newRootId: b,
          previousRootId: this.rootNode,
          redraw: A(a, !0),
          series: this
        }, e);
        Q(this, "setRootNode", b, function (b) {
          var a = b.series;
          a.idPreviousRoot = b.previousRootId;
          a.rootNode = b.newRootId;
          a.isDirty = !0;
          b.redraw && a.chart.redraw();
        });
      },
      renderTraverseUpButton: function (b) {
        var a = this,
            e = a.options.traverseUpButton,
            c = A(e.text, a.nodeMap[b].name, "\u25c1 Back");
        if ("" === b || a.is("sunburst") && 1 === a.tree.children.length && b === a.tree.children[0].id) a.drillUpButton && (a.drillUpButton = a.drillUpButton.destroy());else if (this.drillUpButton) this.drillUpButton.placed = !1, this.drillUpButton.attr({
          text: c
        }).align();else {
          var f = (b = e.theme) && b.states;
          this.drillUpButton = this.chart.renderer.button(c, 0, 0, function () {
            a.drillUp();
          }, b, f && f.hover, f && f.select).addClass("highcharts-drillup-button").attr({
            align: e.position.align,
            zIndex: 7
          }).add().align(e.position, !1, e.relativeTo || "plotBox");
        }
      },
      buildKDTree: c,
      drawLegendSymbol: m.drawRectangle,
      getExtremes: function () {
        var b = D.prototype.getExtremes.call(this, this.colorValueData),
            a = b.dataMax;
        this.valueMin = b.dataMin;
        this.valueMax = a;
        return D.prototype.getExtremes.call(this);
      },
      getExtremesFromAll: !0,
      setState: function (b) {
        this.options.inactiveOtherPoints = !0;
        D.prototype.setState.call(this, b, !1);
        this.options.inactiveOtherPoints = !1;
      },
      utils: {
        recursive: G
      }
    }, {
      draw: p.drawPoint,
      setVisible: f.pie.prototype.pointClass.prototype.setVisible,
      getClassName: function () {
        var b = x.prototype.getClassName.call(this),
            a = this.series,
            c = a.options;
        this.node.level <= a.nodeMap[a.rootNode].level ? b += " highcharts-above-level" : this.node.isLeaf || A(c.interactByLeaf, !c.allowTraversingTree) ? this.node.isLeaf || (b += " highcharts-internal-node") : b += " highcharts-internal-node-interactive";
        return b;
      },
      isValid: function () {
        return !(!this.id && !L(this.value));
      },
      setState: function (b) {
        x.prototype.setState.call(this, b);
        this.graphic && this.graphic.attr({
          zIndex: "hover" === b ? 1 : 0
        });
      },
      shouldDraw: function () {
        return L(this.plotY) && null !== this.y;
      }
    });
    v(q.Series, "afterBindAxes", function () {
      var b = this.xAxis,
          a = this.yAxis;
      if (b && a) if (this.is("treemap")) {
        var c = {
          endOnTick: !1,
          gridLineWidth: 0,
          lineWidth: 0,
          min: 0,
          dataMin: 0,
          minPadding: 0,
          max: 100,
          dataMax: 100,
          maxPadding: 0,
          startOnTick: !1,
          title: null,
          tickPositions: []
        };
        w(a.options, c);
        w(b.options, c);
        J = !0;
      } else J && (a.setOptions(a.userOptions), b.setOptions(b.userOptions), J = !1);
    });
    "";
  });
  p(a, "masters/modules/treemap.src.js", [], function () {});
});

/***/ }),

/***/ "./node_modules/highcharts/modules/variable-pie.js":
/*!*********************************************************!*\
  !*** ./node_modules/highcharts/modules/variable-pie.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v8.2.2 (2020-10-22)

 Variable Pie module for Highcharts

 (c) 2010-2019 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
(function (b) {
   true && module.exports ? (b["default"] = b, module.exports = b) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (e) {
    b(e);
    b.Highcharts = e;
    return b;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (b) {
  function e(b, g, e, n) {
    b.hasOwnProperty(g) || (b[g] = n.apply(null, e));
  }

  b = b ? b._modules : {};
  e(b, "Series/VariablePieSeries.js", [b["Core/Series/Series.js"], b["Core/Utilities.js"]], function (b, g) {
    var e = g.arrayMax,
        n = g.arrayMin,
        w = g.clamp,
        x = g.fireEvent,
        p = g.pick,
        y = b.seriesTypes.pie.prototype;
    "";
    b.seriesType("variablepie", "pie", {
      minPointSize: "10%",
      maxPointSize: "100%",
      zMin: void 0,
      zMax: void 0,
      sizeBy: "area",
      tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>'
      }
    }, {
      pointArrayMap: ["y", "z"],
      parallelArrays: ["x", "y", "z"],
      redraw: function () {
        this.center = null;
        y.redraw.call(this, arguments);
      },
      zValEval: function (a) {
        return "number" !== typeof a || isNaN(a) ? null : !0;
      },
      calculateExtremes: function () {
        var a = this.chart,
            b = this.options;
        var c = this.zData;
        var g = Math.min(a.plotWidth, a.plotHeight) - 2 * (b.slicedOffset || 0),
            l = {};
        a = this.center || this.getCenter();
        ["minPointSize", "maxPointSize"].forEach(function (a) {
          var c = b[a],
              k = /%$/.test(c);
          c = parseInt(c, 10);
          l[a] = k ? g * c / 100 : 2 * c;
        });
        this.minPxSize = a[3] + l.minPointSize;
        this.maxPxSize = w(a[2], a[3] + l.minPointSize, l.maxPointSize);
        c.length && (a = p(b.zMin, n(c.filter(this.zValEval))), c = p(b.zMax, e(c.filter(this.zValEval))), this.getRadii(a, c, this.minPxSize, this.maxPxSize));
      },
      getRadii: function (a, b, c, g) {
        var l = 0,
            e = this.zData,
            q = e.length,
            k = [],
            p = "radius" !== this.options.sizeBy,
            u = b - a;

        for (l; l < q; l++) {
          var h = this.zValEval(e[l]) ? e[l] : a;
          h <= a ? h = c / 2 : h >= b ? h = g / 2 : (h = 0 < u ? (h - a) / u : .5, p && (h = Math.sqrt(h)), h = Math.ceil(c + h * (g - c)) / 2);
          k.push(h);
        }

        this.radii = k;
      },
      translate: function (a) {
        this.generatePoints();
        var b = 0,
            c = this.options,
            e = c.slicedOffset,
            g = e + (c.borderWidth || 0),
            t = c.startAngle || 0,
            q = Math.PI / 180 * (t - 90),
            k = Math.PI / 180 * (p(c.endAngle, t + 360) - 90);
        t = k - q;
        var n = this.points,
            u = c.dataLabels.distance;
        c = c.ignoreHiddenPoint;
        var h = n.length;
        this.startAngleRad = q;
        this.endAngleRad = k;
        this.calculateExtremes();
        a || (this.center = a = this.getCenter());

        for (k = 0; k < h; k++) {
          var f = n[k];
          var m = this.radii[k];
          f.labelDistance = p(f.options.dataLabels && f.options.dataLabels.distance, u);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, f.labelDistance);
          var d = q + b * t;
          if (!c || f.visible) b += f.percentage / 100;
          var r = q + b * t;
          f.shapeType = "arc";
          f.shapeArgs = {
            x: a[0],
            y: a[1],
            r: m,
            innerR: a[3] / 2,
            start: Math.round(1E3 * d) / 1E3,
            end: Math.round(1E3 * r) / 1E3
          };
          d = (r + d) / 2;
          d > 1.5 * Math.PI ? d -= 2 * Math.PI : d < -Math.PI / 2 && (d += 2 * Math.PI);
          f.slicedTranslation = {
            translateX: Math.round(Math.cos(d) * e),
            translateY: Math.round(Math.sin(d) * e)
          };
          var v = Math.cos(d) * a[2] / 2;
          var w = Math.sin(d) * a[2] / 2;
          r = Math.cos(d) * m;
          m *= Math.sin(d);
          f.tooltipPos = [a[0] + .7 * v, a[1] + .7 * w];
          f.half = d < -Math.PI / 2 || d > Math.PI / 2 ? 1 : 0;
          f.angle = d;
          v = Math.min(g, f.labelDistance / 5);
          f.labelPosition = {
            natural: {
              x: a[0] + r + Math.cos(d) * f.labelDistance,
              y: a[1] + m + Math.sin(d) * f.labelDistance
            },
            "final": {},
            alignment: f.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: a[0] + r + Math.cos(d) * v,
                y: a[1] + m + Math.sin(d) * v
              },
              touchingSliceAt: {
                x: a[0] + r,
                y: a[1] + m
              }
            }
          };
        }

        x(this, "afterTranslate");
      }
    });
    "";
  });
  e(b, "masters/modules/variable-pie.src.js", [], function () {});
});

/***/ }),

/***/ "./src/blocks/calendar/calendar.js":
/*!*****************************************!*\
  !*** ./src/blocks/calendar/calendar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.calendar__pick-date').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.calendar__date-selector')
  });
  var dateFormat = "mm/dd/yy",
      from = $("#from").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 2
  }).on("change", function () {
    to.datepicker("option", "minDate", getDate(this));
  }),
      to = $("#to").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 2
  }).on("change", function () {
    from.datepicker("option", "maxDate", getDate(this));
  });

  function getDate(element) {
    var date;

    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }

  $('.calendar__trip-select').select2({
    minimumResultsForSearch: Infinity
  });
  $('.js-trip-save').click(function () {
    $('.calendar__trip-select').val(null).trigger('change');
    $('.calendar__trip-input').val('');
  });
});

/***/ }),

/***/ "./src/blocks/commercial-offer/commercial-offer.js":
/*!*********************************************************!*\
  !*** ./src/blocks/commercial-offer/commercial-offer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.js-select-personal').select2({
    minimumResultsForSearch: Infinity
  });
  $('.js-select-engineer').select2({
    minimumResultsForSearch: Infinity
  });
  $('.js-select-designer').select2({
    minimumResultsForSearch: Infinity
  });
  $('.js-add-row').click(function (e) {
    e.preventDefault();
    var i = $('.commercial-offer__tab').children().length - 1;
    var itemRow = "<div class=\"commercial-offer__row\"><div class=\"commercial-offer__col\"><input type=\"text\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" name=\"costs[".concat(i, "][title]\" maxlength=\"50\" class=\"commercial-offer__text\" required></div><div class=\"commercial-offer__col\"><input type=\"number\" placeholder=\"\u0421\u0443\u043C\u043C\u0430\" name=\"costs[").concat(i, "][sum]\" maxlength=\"50\" class=\"commercial-offer__text\" required></div><div class=\"commercial-offer__remove-box\"><div class=\"commercial-offer__remove\"></div>\u0423\u0434\u0430\u043B\u0438\u0442\u044C</div></div>");
    $('.commercial-offer__tab').append(itemRow);
    $('.commercial-offer__remove-box').click(function () {
      $(this).parent().remove();
    });
  });
  $('.commercial-offer__remove-box').click(function () {
    $(this).parent().remove();
  });
  $('.commercial-offer__file-input').change(function () {
    if ($(this).val() != '') {
      $(this).closest('.commercial-offer__file').find('.commercial-offer__file-text').text('Выбрано файлов: ' + $(this)[0].files.length);
    } else {
      $(this).closest('.information__upload').find('.commercial-offer__file-text').text('Нажмите, чтобы добавить файлы');
    }
  });

  updateList = function updateList() {
    var input = document.getElementById('file');
    var output = document.getElementById('fileList'); // output.innerHTML = '<div>';

    for (var i = 0; i < input.files.length; ++i) {
      output.innerHTML += '<div class="commercial-file">' + '<div class="commercial-file__inner">' + '<div class="commercial-file__icon">' + '</div>' + input.files.item(i).name + '</div>' + '<div class="commercial-file__remove ">' + '</div>' + '</div>' + '</div>';
    } // output.innerHTML += '</div>';


    function addModal() {
      $('.modal-remove-box').clone().appendTo('.commercial-file');
    }

    addModal();
    $('.commercial-file__remove').click(function () {
      $(this).closest('.commercial-file').find('.modal-remove-box').show();
      $('.js-file-accept').click(function () {
        $(this).closest('.commercial-file').remove();
      });
      $('.js-file-close, .modal-overlay').click(function () {
        $('.modal-remove-box').hide();
      });
    });
  };

  $('.contracts__open-modal-btn').click(function (e) {
    e.preventDefault();
    var action = $(this).data()['modal'];
    $(this).siblings(".modal-contracts-box[data-modal=\"".concat(action, "\"]")).css('display', 'block');
  });
  $('.js-contracts-close').click(function (e) {
    e.preventDefault();
    $(this).closest('.modal-contracts-box').css('display', 'none');
  });
  $('.js-contracts-accept').click(function (e) {
    var _this = this;

    $.ajax({
      url: "//".concat(window.location.host, "/api/").concat(e.target.dataset.target, "/").concat(e.target.dataset.id, "/").concat(e.target.dataset.action),
      method: 'post',
      success: function success(result) {
        $(_this).closest('.modal-contracts-box').css('display', 'none');
        $(_this).closest('.list__row').remove();
        if (e.target.dataset.redirect) location = e.target.dataset.redirect;
      }
    });
  });
  $('.js-select-position').select2({
    minimumResultsForSearch: Infinity
  });
  $("#imgload").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#imgshow').attr('src', e.target.result);
      };

      reader.readAsDataURL(this.files[0]);
    }
  });
  $('.js-select-fio').select2({
    minimumResultsForSearch: Infinity
  });
  /* if($('#inputClothes').length){
      let input = document.querySelector('#inputClothes');
        input.addEventListener('keypress', (e) => {
          let keyCode = e.keyCode || e.which; // Код символа
          if (!/[A-Za-z ]/.test(String.fromCharCode(keyCode)) // Проверка на разрешённые символы
              || (/[ ]/.test(input.value) && keyCode === 32)) // Проверка на количество пробелов
              e.preventDefault(); // Если условие выполнилось, то запрещаем ввод символа
      });
  } */

  $('.js-validate-rate').keypress(function (key) {
    if (key.charCode == 45 || key.charCode == 46 || key.charCode == 101) return false;
  });

  downloadIdentity = function downloadIdentity() {
    var input = document.getElementById('inputIdentity');
    var output = $('#listIdentity');
    var uploadedDocsLength = $('.commercial-document__row').length;
    var formData = new FormData();
    formData.append("temp_path", document.querySelector('input[name="temp_path"]').value);

    for (var i = 0; i < input.files.length; ++i) {
      formData.append("documents[".concat(i, "]"), input.files[i]);
    }

    $.ajax({
      'url': "//".concat(window.location.host, "/api/staff/documents/upload"),
      'type': 'POST',
      'data': formData,
      'processData': false,
      'contentType': false,
      'enctype': 'multipart/form-data',
      success: function success(data) {
        for (var _i = 0; _i < data.length; ++_i) {
          var docNumber = uploadedDocsLength + _i;
          output.append('<div class="commercial-offer__row">' + '<div class="commercial-offer__col">' + '<div class="commercial-offer__name">' + "<input name=\"documents[".concat(docNumber, "][id]\" value=\"0\" type=\"hidden\"/>") + "<input name=\"documents[".concat(docNumber, "][title]\" type=\"text\" placeholder=\"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\" require value=\"").concat(data[_i]['original'], "\" maxlength=\"50\" class=\"commercial-offer__input_text\">") + "<input name=\"documents[".concat(docNumber, "][path]\" type=\"hidden\" value=\"").concat(data[_i]['name'], "\" />") + '</div>' + '</div>' + '<div class="commercial-offer__col">' + "<input name=\"documents[".concat(docNumber, "][validity]\" type=\"text\" placeholder=\"\u0414\u0430\u0442\u0430\" require maxlength=\"50\" class=\"commercial-offer__input-date js-date\">") + '</div>' + '<div class="commercial-offer__col">' + "<input name=\"documents[".concat(docNumber, "][date_of_issue]\" type=\"text\" placeholder=\"\u0414\u0430\u0442\u0430\" require maxlength=\"50\" class=\".commercial-offer__input-date js-date\">") + '</div>' + "<div class=\"commercial-offer__remove-box\"  data-file=\"".concat(data[_i]['name'], "\">") + '<div class="commercial-offer__remove">' + '</div>' + '</div>' + '</div>');
        }

        $(".js-date").datepicker({
          changeMonth: true,
          changeYear: true,
          dateFormat: 'dd/mm/yy',
          yearRange: '1970:2021',
          firstDay: 1,
          monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
          dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
          dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        });
        $('.commercial-offer__remove-box').click(function (e) {
          var _this2 = this;

          $.ajax({
            'url': "//".concat(window.location.host, "/api/staff/document/remove"),
            'type': 'POST',
            'data': {
              'temp_path': document.querySelector('input[name="temp_path"]').value,
              'file_path': e.target.dataset.file
            },
            success: function success(data) {
              $(_this2).parent().remove();
            }
          });
        });
      }
    });
  }; // Оставить коммантарий


  $('.modal__request-btn').click(function (e) {
    e.preventDefault;
    var nowDate = new Date();
    var nowHours = nowDate.getHours();
    var nowMinutes = nowDate.getMinutes();
    var nowClock = nowHours + ':' + nowMinutes;
    var message = document.getElementById('textMessage').value;
    var output = document.getElementById('comments');
    output.innerHTML += '<div class="modal__comment">' + '<div class="modal__comment-info">' + '<div class="modal__text modal__comment-name">' + 'Вимм Билль Данн' + '</div>' + '<div class="modal__text modal__text--mr">' + '18.01.2020г' + '</div>' + '<div class="modal__text">' + nowClock + '</div>' + '</div>' + '<div class="modal__text">' + message + '</div>' + '</div>';
    document.getElementById('textMessage').value = '';
  });
});

/***/ }),

/***/ "./src/blocks/contracts/contracts.js":
/*!*******************************************!*\
  !*** ./src/blocks/contracts/contracts.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.contracts__input').on('click', function () {
  if ($(this).prop("checked")) {
    $(this).parents('.contracts__row').addClass('contracts__row--active');
  } else {
    $(this).parents('.contracts__row').removeClass('contracts__row--active');
  }
});

/***/ }),

/***/ "./src/blocks/files-modal/files-modal.js":
/*!***********************************************!*\
  !*** ./src/blocks/files-modal/files-modal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.files-modal__select').select2({
  minimumResultsForSearch: Infinity
});

/***/ }),

/***/ "./src/blocks/files/files.js":
/*!***********************************!*\
  !*** ./src/blocks/files/files.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.js-btn-create-folder').click(function () {
  $('.js-create-folder').addClass('files-modal--show');
});
$('.files-modal__close, .js-modal-cancel, .overlay').click(function () {
  $('.files-modal').removeClass('files-modal--show');
});
$('.js-btn-transfer').click(function () {
  $('.js-file-transfer').addClass('files-modal--show');
});
$('.js-btn-folder').click(function () {
  var inputValue = document.getElementById('textMessage').value;
  var output = document.getElementById('filesOutput');
  var nameFolder = document.getElementById('nameFolder').value;
  output.innerHTML += '<div class="files__item">' + '<div class="files__type-icon files__type-icon--folder">' + '</div>' + '<div class="files__named">' + '<div class="files__name">' + nameFolder + '</div>' + '</div>' + '</div>';
  $('.files-modal').removeClass('files-modal--show');
  document.getElementById('nameFolder').value = '';
});
$('.js-transfer-file, .js-btn-remove').click(function () {
  $('.files__item--active').remove();
  $('.files-modal').removeClass('files-modal--show');
});
$('.js-btn-modal-remove').click(function () {
  $('.js-modal-remove').addClass('files-modal--show');
});
$('.files__info-close').click(function () {
  $('.files__info').removeClass('files__info--active');
});
$('.files__container').on('click', '.files__item:not(.files__item--active)', function () {
  $(this).addClass('files__item--active').siblings().removeClass('files__item--active').closest('.files__inner').find('.files__info').removeClass('files__info--active').eq($(this).index()).addClass('files__info--active');
});

downloadFiles = function downloadFiles() {
  var input = document.getElementById('downloadFiles');
  var output = document.getElementById('filesOutput');
  var outputInfo = document.getElementById('outputInformation'); // output.innerHTML = '<div>';

  for (var i = 0; i < input.files.length; ++i) {
    var file = input.files.item(i).name;
    var fileSize = input.files.item(i).size;
    var fileTotalSizeMb = fileSize / Math.pow(1024, 2);
    var fileFinalSize = Math.round(fileTotalSizeMb * 100) / 100;
    output.innerHTML += '<div class="files__item">' + '<div class="files__type-icon files__type-icon--folder">' + '</div>' + '<div class="files__named">' + '<div class="files__name">' + file + '</div>' + '<div class="files__size">' + fileFinalSize + ' mb' + '</div>' + '</div>' + '</div>';
    outputInfo.innerHTML += '<div class="files__info">' + '<div class="files__info-close">' + '</div>' + '<div class="files__info-image">' + '<div class="files__info-type files__info-type--document">' + '</div>' + '</div>' + '<div class="files__info-inner">' + '<div class="files__label">' + 'Название:' + '</div>' + '<input type="text" placeholder="Название" class="input-styled files__input-name" />' + '<div class="files__info-row">' + '<div class="files__label">' + 'Тип:' + '</div>' + '<div class="files__info-text files__info-text--ml">' + file + '</div>' + '</div>' + '<div class="files__info-row">' + '<div class="files__label">' + 'Размер:' + '</div>' + '<div class="files__info-text files__info-text--ml">' + fileFinalSize + ' mb' + '</div>' + '</div>' + '<div class="files__info-row">' + '<div class="files__label">' + 'Ссылка:' + '</div>' + '<a href="#" class="files__link">' + 'Кликните тут' + '</a>' + '</div>' + '<div class="files__info-row files__info-row--direction">' + '<div class="files__label">' + 'Последнее изменение:' + '</div>' + '<div class="files__info-text files__info-text--mt">' + '29/10/2020' + '</div>' + '</div>' + '</div>' + '</div>';
    $('.files__info-close').click(function () {
      $('.files__info').removeClass('files__info--active');
    });
  } // output.innerHTML += '</div>';

};

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.header__menu').click(function () {
    $('.header__menu-list').toggleClass('header__menu-list--show');
  });
});

/***/ }),

/***/ "./src/blocks/main/main.js":
/*!*********************************!*\
  !*** ./src/blocks/main/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  window.onbeforeunload = function () {
    var elements = $('.watched-form input[type=text], .watched-form input[type=number], .watched-form textarea');
    var isUnsavedElements = false;

    for (var index = 0; index < elements.length; index++) {
      if (elements[index].value != '') isUnsavedElements = true;
    }

    return isUnsavedElements ? 'Возможно введенные данные не сохранятся' : null;
  };
});

/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Highcharts) {/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/offline-exporting */ "./node_modules/highcharts/modules/offline-exporting.js");
/* harmony import */ var highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/treemap */ "./node_modules/highcharts/modules/treemap.js");
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_funnel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/funnel */ "./node_modules/highcharts/modules/funnel.js");
/* harmony import */ var highcharts_modules_funnel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_funnel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highcharts_modules_variable_pie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/modules/variable-pie */ "./node_modules/highcharts/modules/variable-pie.js");
/* harmony import */ var highcharts_modules_variable_pie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_variable_pie__WEBPACK_IMPORTED_MODULE_7__);








highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_0___default()(Highcharts);
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(Highcharts);
highcharts_modules_offline_exporting__WEBPACK_IMPORTED_MODULE_2___default()(Highcharts);
highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_3___default()(Highcharts);
highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_4___default()(Highcharts);
highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_5___default()(Highcharts);
highcharts_modules_funnel__WEBPACK_IMPORTED_MODULE_6___default()(Highcharts);
highcharts_modules_variable_pie__WEBPACK_IMPORTED_MODULE_7___default()(Highcharts);

function createRingChart(chartContainer) {
  var attributes = JSON.parse(chartContainer.dataset.rings)[0];
  console.log(attributes);
  var dayProgress = attributes.today.real / attributes.today.goal * 100;
  var weekProgress = attributes.week.real / attributes.week.goal * 100;
  var monthProgress = attributes.month.real / attributes.month.goal * 100;
  $('.js-today').text(attributes.today.real);
  $('.js-week').text(attributes.week.real);
  $('.js-month').text(attributes.month.real); // GRAPHIC FIRST

  function renderIcons() {
    // Move icon
    if (!this.series[0].icon) {
      this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8]).attr({
        // stroke: '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        zIndex: 10
      }).add(this.series[2].group);
    }

    this.series[0].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2); // Exercise icon

    if (!this.series[1].icon) {
      this.series[1].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8]).attr({
        // stroke: '#ffffff',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        zIndex: 10
      }).add(this.series[2].group);
    }

    this.series[1].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR - (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2); // Stand icon

    if (!this.series[2].icon) {
      this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0]).attr({
        // stroke: '#303030',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        zIndex: 10
      }).add(this.series[2].group);
    }

    this.series[2].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR - (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2);
    console.log(chartContainer);
    var dayRing = chartContainer.getElementsByClassName('highcharts-series-0')[0];
    var weekRing = chartContainer.getElementsByClassName('highcharts-series-1')[0];
    var monthRing = chartContainer.getElementsByClassName('highcharts-series-2')[0];
    dayRing.addEventListener('mouseenter', function (e) {
      renderTooltip('today');
    });
    dayRing.addEventListener('mouseleave', function (e) {
      clearTooltip();
    });
    weekRing.addEventListener('mouseenter', function (e) {
      renderTooltip('week');
    });
    weekRing.addEventListener('mouseleave', function (e) {
      clearTooltip();
    });
    monthRing.addEventListener('mouseenter', function (e) {
      renderTooltip('month');
    });
    monthRing.addEventListener('mouseleave', function (e) {
      clearTooltip();
    });

    function renderTooltip(type) {
      var tooltip = chartContainer.closest('.js-ring-chart-wrapper').getElementsByClassName('js-ring-chart-tooltip')[0];
      tooltip.classList.add("js-ring--show");
      var tooltipText = '';
      var tooltipNumber = '';

      if (type === 'today') {
        tooltipText = '<div class="tooltip-info">сегодня</div>';
        tooltipNumber = "<div class=\"tooltip-number tooltip-number--today\">".concat(attributes[type].real, "</div>");
      } else if (type === 'week') {
        tooltipText = '<div class="tooltip-info">за неделю</div>';
        tooltipNumber = "<div class=\"tooltip-number tooltip-number--week\">".concat(attributes[type].real, "</div>");
      } else if (type === 'month') {
        tooltipText = '<div class="tooltip-info">всего</div>';
        tooltipNumber = "<div class=\"tooltip-number tooltip-number--month\">".concat(attributes[type].real, "</div>");
      }

      var template = "".concat(tooltipNumber, "<br>").concat(tooltipText);
      tooltip.innerHTML = template;
    }

    function clearTooltip() {
      var tooltip = chartContainer.closest('.js-ring-chart-wrapper').getElementsByClassName('js-ring-chart-tooltip')[0];
      tooltip.classList.remove("js-ring--show");
    }
  }

  var domElement = document.getElementsByClassName('js-ring-chart')[0];
  Highcharts.chart(domElement, {
    chart: {
      type: 'solidgauge',
      height: '110%',
      events: {
        render: renderIcons
      }
    },
    title: {
      text: 'Активность',
      style: {
        fontSize: '18px'
      }
    },
    tooltip: {
      enabled: false
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        // Track for Move
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
        borderWidth: 0
      }, {
        // Track for Exercise
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
        borderWidth: 0
      }, {
        // Track for Stand
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
        borderWidth: 0
      }]
    },
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },
    series: [{
      name: 'today',
      hint: 'в день',
      real: 6,
      goal: 8,
      data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '112%',
        innerRadius: '88%',
        y: dayProgress
      }]
    }, {
      name: 'Всего',
      hint: 'в день',
      real: 6,
      goal: 40,
      data: [{
        color: Highcharts.getOptions().colors[1],
        radius: '87%',
        innerRadius: '63%',
        y: weekProgress
      }]
    }, {
      name: 'Всего',
      hint: 'в день',
      real: 6,
      goal: 70,
      data: [{
        color: Highcharts.getOptions().colors[2],
        radius: '62%',
        innerRadius: '38%',
        y: monthProgress
      }]
    }]
  }); // GRAPHIC FIRST END
}

if (document.getElementsByClassName('js-ring-chart').length > 0) {
  var charts = document.getElementsByClassName('js-ring-chart');

  for (var i = 0; i < charts.length; i++) {
    createRingChart(charts[i]);
  }
}

$(document).ready(function () {
  $('.modal__sign-button').click(function () {
    $('.modal-sign').fadeIn();
  }); // Клик по ссылке "Закрыть".

  $('.modal__close').click(function () {
    $(this).parents('.modal-sign').fadeOut();
    return false;
  }); // Клик по ссылке "Закрыть".

  $('.modal__close').click(function () {
    $(this).parents('.modal').fadeOut();
    return false;
  }); // Закрытие по клавише Esc.

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').fadeOut();
    }
  });
  $('.modal__reset-button').click(function () {
    $('.modal-reset').fadeIn();
  });
  $('.modal__contract-edit').click(function () {
    $('.modal-edit').fadeIn();
  });
  $('.modal__contract-button').click(function () {
    $('.modal-contract').fadeIn();
  });
  $('.modal__table-button').click(function () {
    $('.modal-edit-table').fadeIn();
  });
  $('.modal__employee-button').click(function () {
    $('.modal-employee').fadeIn();
  });
  $('.modal__employee-card-button').click(function () {
    $('.modal-employee-card').fadeIn();
  });
  $('.modal__subtract').click(function () {
    $('.modal-subtract').fadeIn();
  });
  $('.modal__prize').click(function () {
    $('.modal-prize').fadeIn();
  });
  $('.modal__salary').click(function () {
    $('.modal-salary').fadeIn();
  });
  $('.modal__consumption-modal').click(function () {
    $('.modal-consumption').find('input[name="title"]').val('');
    $('.modal-consumption').find('input[name="sum"]').val('');
    $('.modal-consumption').fadeIn(100);
  });
  $('.modal__consumption-show').click(function () {
    $('.modal-consumption').find('input[name="title"]').val('');
    $('.modal-consumption').find('input[name="sum"]').val('');
    $('.modal-consumption').fadeIn();
  });

  function addDetailConsumption(e) {
    $('.modal-consumption-detail').data('id', e.target.dataset.id);
    $('.modal-consumption-detail').find('input').val('');
    setToday();
    $('.modal-consumption-detail').fadeIn(100);
  }
  /* TO REMOVE */

  /* $('.modal__consumption-add-detail-modal').click(function (e) {
      $('.modal-consumption-detail').data('id', e.target.dataset.id);
      $('.modal-consumption-detail').find('input').val('');
      setToday();
      $('.modal-consumption-detail').fadeIn(100);
  }); */


  $('.modal__consumption-add-detail-modal').on('click', addDetailConsumption);
  $('.modal-consumption-detail').submit(function (e) {
    e.preventDefault();
    $.ajax({
      'url': "".concat(window.location.origin, "/api/contract/consumption/").concat($(this).data('id'), "/detail"),
      'method': e.target.method,
      'data': $(this).serialize(),
      success: function success(data) {
        /* TO DELETE */
        $(".modal__consumption-block[data-id=\"".concat(data.contract_cost_id, "\"]")).append("\n                    <div class=\"modal__contract-row modal__contract-subrow\" style=\"margin-left: 50px;\">\n                        <div class=\"modal__costs-date\">\n                            <div class=\"modal__text\">".concat(data.date, "</div>\n                        </div>\n                        <div class=\"modal__costs-account_number\" style=\"margin-left: 100px;\">\n                            <div class=\"modal__text\">").concat(data.account_number, "</div>\n                        </div>\n                        <div class=\"modal__costs-account_counterparty\" style=\"margin-left: 100px;\">\n                            <div class=\"modal__text\">").concat(data.counterparty, "</div>\n                        </div>\n                        <div class=\"modal__costs-account_nomenclature\" style=\"margin-left: 100px;\">\n                            <div class=\"modal__text\">").concat(data.nomenclature, "</div>\n                        </div>\n                        <div class=\"modal__costs-account_sum\" style=\"margin-left: 100px;\">\n                            <div class=\"modal__text\">").concat(data.sum, " \u0440\u0443\u0431.</div>\n                        </div>\n                    </div>\n                "));
        var spent = $(".modal__consumption-block[data-id=\"".concat(data.contract_cost_id, "\"]")).find('.spent-total-sum');
        spent.text(+data.sum + +spent.text());
        $("#total-spent").text(+data.sum + +$("#total-spent").text());
        /* TO DELETE END */

        $(".list__cost-table tr[data-id=\"".concat(data.contract_cost_id, "\"] + .cost-detail-header")).after("\n                    <tr class=\"cost-detail\">\n                        <td>".concat(data.date, "</td>\n                        <td>").concat(data.account_number, "</td>\n                        <td>").concat(data.counterparty, "</td>\n                        <td>").concat(data.nomenclature, "</td>\n                        <td colspan=\"2\">").concat(data.sum, " \u0440\u0443\u0431.</td>\n                    </tr>\n                "));
        spent = $(".list__cost-table tr[data-id=\"".concat(data.contract_cost_id, "\"]")).find('.list__cost-spent');
        spent.text(+data.sum + +spent.text());
        var profit = $(".list__cost-table tr[data-id=\"".concat(data.contract_cost_id, "\"]")).find('.list__cost-profit');
        profit.text(+profit.text() - +data.sum);
        $('.modal-consumption-detail').fadeOut();
      }
    });
  });
  $('.modal-consumption').submit(function (e) {
    e.preventDefault();
    var title = $(this).find('input[name="title"]').val();
    var sum = $(this).find('input[name="sum"]').val();
    $.ajax({
      'url': e.target.action,
      'method': e.target.method,
      'data': {
        'title': title,
        'sum': sum
      },
      success: function success(data) {
        /* TO REMOVE */
        $('.modal__contract-table .modal__table-inner').append("\n                    <div data-id=\"".concat(data.id, "\">\n                        <div class=\"modal__contract-row\">\n                            <div class=\"modal__contract-name\">\n                            <div class=\"modal__text\">").concat(title, "</div>\n                            </div>\n                            <div class=\"modal__contract-contribution\">\n                            <div class=\"modal__text modal__text--blue\">").concat(sum, " \u0440\u0443\u0431.</div>\n                            </div>\n                            <div class=\"modal__contract-consumption\">\n                            <div class=\"modal__text modal__text--blue\">0 \u0440\u0443\u0431.</div>\n                            </div>\n                            <a href=\"#\" class=\"modal__edited modal__consumption-show\"></a>\n                        </div>\n                    </div>\n                "));
        /* TO REMOVE END */

        $('.list__cost-table tbody').append("\n                    <tr data-id=\"".concat(data.id, "\">\n                        <td class=\"list__cost-title\">").concat(title, "</td>\n                        <td><span class=\"list__cost-sum\">").concat(sum, "</span> \u0440\u0443\u0431.</td>\n                        <td><span class=\"list__cost-spent\">0</span> \u0440\u0443\u0431.</td>\n                        <td><span class=\"list__cost-profit\">").concat(sum, "</span> \u0440\u0443\u0431.</td>\n                        <td class=\"action-block\">\n                            <a href=\"#\" class=\"modal__edited modal__consumption-edit-modal\" data-id=\"").concat(data.id, "\"></a>\n                            <a href=\"#\" class=\"modal__add-cost modal__consumption-add-detail-modal\" data-id=\"").concat(data.id, "\"></a>\n                        </td>\n                    </tr>\n                "));
        $('.modal__consumption-edit-modal').on('click', editConsumption);
        $('.modal__consumption-add-detail-modal').on('click', addDetailConsumption);
        /* TO REMOVE */

        $('.modal__consumption-show').click(function () {
          $('.modal-consumption').fadeIn();
        });
        /* TO REMOVE END */

        $('.modal-consumption').fadeOut();
      }
    });
  });

  function editConsumption(e) {
    $.ajax({
      'url': "".concat(window.location.origin, "/api/contract/consumption/").concat(e.target.dataset.id),
      success: function success(data) {
        $('.modal-consumption-edit').attr('action', "".concat(window.location.origin, "/api/contract/consumption/").concat(e.target.dataset.id));
        $('.modal-consumption-edit').find('input[name="title"]').val(data.title);
        $('.modal-consumption-edit').find('input[name="sum"]').val(data.sum);
        $('.modal-consumption-edit').fadeIn(100);
      }
    });
  }

  $('.modal__consumption-edit-modal').on('click', editConsumption);
  /* TO REMOVE */

  /* $('.modal__consumption-edit-modal').click(function (e) {
      $.ajax({
          'url': `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`,
          success: data => {
              $('.modal-consumption-edit').attr('action', `${window.location.origin}/api/contract/consumption/${e.target.dataset.id}`);
              $('.modal-consumption-edit').find('input[name="title"]').val(data.title);
              $('.modal-consumption-edit').find('input[name="sum"]').val(data.sum);
              $('.modal-consumption-edit').fadeIn(100);
          }
      })
  }); */

  $('.modal-consumption-edit').submit(function (e) {
    e.preventDefault();
    var title = $(this).find('input[name="title"]').val();
    var sum = $(this).find('input[name="sum"]').val();
    $.ajax({
      'url': e.target.action,
      'method': e.target.method,
      'data': {
        'title': title,
        'sum': sum
      },
      success: function success(data) {
        /* TO REMOVE */
        var parent = $(".modal__contract-table .modal__contract-row[data-id=\"".concat(data.id, "\"]"));
        parent.find('.modal__contract-name .modal__text').text(title);
        parent.find('.modal__contract-contribution .modal__text').text(sum + ' руб.'); //$('.modal-consumption-edit').fadeOut();

        /* TO REMOVE END */

        parent = $(".list__cost-table tr[data-id=\"".concat(data.id, "\"]"));
        parent.find('.list__cost-title').text(title);
        parent.find('.list__cost-sum').text(sum);
        parent.find('.list__cost-profit').text(+sum - +parent.find('.list__cost-spent').text());
        $('.modal-consumption-edit').fadeOut();
      }
    });
  });
  $('.modal__editing').click(function () {
    $('.modal-editing').fadeIn();
  });
  $('.modal__show-comment').click(function (e) {
    $('.modal__comment-text').text(e.currentTarget.dataset.comment);
    $('.modal-show-comment').fadeIn();
  });
  $('.modal__flat-add').click(function (e) {
    $('.modal-flat').fadeIn();
  });
  $('.modal__apartments').click(function (e) {
    $.ajax({
      url: "//".concat(window.location.host, "/flat/") + e.target.dataset.id,
      success: function success(result) {
        $('.modal__header--apartments').text(result.address);
        $('.modal-apartments .modal__apartments-inner .modal__apartments-row').remove();
        result.lodgers.forEach(function (lodger) {
          var entrance = new Date(lodger.entrance);
          var leaving = new Date(lodger.leaving);
          $('.modal-apartments .modal__apartments-inner').append("<div class=\"modal__apartments-row\">\n                            <div class=\"modal__apartments-name\">\n                                <div class=\"modal__text modal__text--hidden\">\u041F\u0440\u043E\u0436\u0438\u0432\u0430\u044E\u0442 (\u043B\u0438) \u0432 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435:</div>\n                                <div class=\"modal__text modal__text--bold\">\n                                    ".concat(lodger.lodger.lname, " ").concat(lodger.lodger.fname, " ").concat(lodger.lodger.mname, "\n                                </div>\n                            </div>\n                            <div class=\"modal__apartments-arrival\">\n                                <div class=\"modal__text modal__text--hidden\">\u041F\u0440\u0438\u0431\u044B\u0442\u0438\u0435</div>\n                                <div class=\"modal__text\">\n                                    ").concat(entrance.getDay() + 1, "/").concat(entrance.getMonth(), "/").concat(entrance.getFullYear(), "\n                                </div>\n                            </div>\n                            <div class=\"modal__apartments-departure\">\n                                <div class=\"modal__text modal__text--hidden\">\u0412\u044B\u0435\u0437\u0434</div>\n                                <div class=\"modal__text\">\n                                    ").concat(leaving.getDay() + 1, "/").concat(leaving.getMonth(), "/").concat(leaving.getFullYear(), "\n                                </div>\n                            </div>\n                        </div>"));
        });
      }
    });
    $('.modal-apartments').fadeIn();
    return false;
  });
  $('.modal__flat-edit').click(function (e) {
    $.ajax({
      url: "//".concat(window.location.host, "/flat/") + e.target.dataset.id,
      success: function success(result) {
        $('.modal-flat-edit').data('id', e.target.dataset.id);
        $('.modal-flat-edit .modal__input[name="address"]').val(result.address);
        $('.modal-flat-edit .modal__input[name="cost"]').val(result.cost);
        $('.modal-flat-edit').fadeIn();
      }
    });
  });
  $('.modal-flat-edit').submit(function (e) {
    e.preventDefault();
    var address = $('.modal-flat-edit .modal__input[name="address"]').val();
    var cost = $('.modal-flat-edit .modal__input[name="cost"]').val();
    $.ajax({
      url: "//".concat(window.location.host, "/flat/") + $('.modal-flat-edit').data('id') + '/update',
      method: 'POST',
      data: {
        'address': address,
        'cost': cost
      },
      success: function success(result) {
        $(".flat-".concat(result.id, " .contracts__address .contracts__text")).text(address);
        $(".flat-".concat(result.id, " .contracts__cost .contracts__text")).text(cost + ' руб.');
        $('.modal-flat-edit').fadeOut();
      }
    });
  });

  function showCalender() {
    $('.modal-calendar-cell').data('worker', $(this).attr('data-worker'));
    $('.modal-calendar-cell').data('day', $(this).attr('data-day'));
    $('.modal-calendar-cell').data('date', $(this).attr('data-date'));
    $('.modal-calendar-cell').data('timesheet', $(this).attr('data-timesheet'));
    $('.modal-calendar-cell').data('business', $(this).attr('data-business') ? $(this).attr('data-business') : 0);
    $('.modal-calendar-cell').data('premium', $(this).attr('data-premium'));
    $('.modal-calendar-cell').data('retention', $(this).attr('data-retention'));
    $('.modal-calendar-cell').data('fill', $(this).hasClass('timesheet__cell--fill'));
    $('.modal-calendar-cell').data('hourse', 0); // $('.modal-calendar-date').text($(this).attr('data-date'));

    var cellDate = $(this).attr('data-date');
    var d = new Date(cellDate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    cellDate = [day, month, year].join('.');
    $('.modal-calendar-date').text(cellDate);
    $('#show-business').prop('checked', +this.dataset.engineer ? false : true);
    $('#modal-calendar-cell__clear').hide();
    var hourse = 10;
    var comment = '';
    var business = 600;

    if ($(this).hasClass('timesheet__cell--fill')) {
      $('#modal-calendar-cell__clear').show();
      hourse = $(this).children().text();
      comment = $(this).attr('data-comment');
      if ($(this).attr('data-business')) business = $(this).attr('data-business');else $('#show-business').prop('checked', false);
      $('.modal-calendar-cell').data('hourse', +hourse);
    } else {
      if (+this.dataset.sunday) hourse = 0;else if (+this.dataset.engineer) {
        hourse = 8;
        business = 1250;
      }
    }

    $('.modal-calendar-cell').find('input[name="hourses"]').val(hourse);
    $('.modal-calendar-cell').find('.modal__editing-area').val(comment);
    $('.modal-calendar-cell').find('input[name="business"]').val(business);
    $('.modal-calendar-cell').find('input[name="premium"]').val($(this).attr('data-premium'));
    $('.modal-calendar-cell').find('input[name="retention"]').val($(this).attr('data-retention'));
    $('.modal-calendar-cell').fadeIn();
  }

  $('.calendar__show').on('click', showCalender);
  $(this).keypress(function (ev) {
    var keycode = ev.keyCode ? ev.keyCode : ev.which;
    if (keycode == '13' && $('.modal-calendar-cell').css('display') == 'block') $('.modal__editing-btn').click();
  });
  $('.modal__editing-btn').click(function (e) {
    e.preventDefault();
    $('.modal-calendar-cell').submit();
  });
  $('#modal-calendar-cell__clear').click(function (e) {
    e.preventDefault();
    var timesheet = $('.modal-calendar-cell').data('timesheet');
    var worker = $('.modal-calendar-cell').data('worker');
    var date = $('.modal-calendar-cell').data('date');
    var day = $('.modal-calendar-cell').data('day');
    $.ajax({
      url: "//".concat(window.location.host, "/api/timesheet/").concat(timesheet, "/hour/clear"),
      method: 'POST',
      data: {
        'worker': worker,
        'date': date
      },
      success: function success(result) {
        var classList = "timesheet__cell calendar__show worker-".concat(worker, " day-").concat(day);
        if ($(".worker-".concat(worker, ".day-").concat(day)).hasClass('timesheet__cell--holiday')) classList += ' timesheet__cell--holiday';
        var html = "<div class=\"".concat(classList, "\" data-date=\"").concat(date, "\" data-worker=\"").concat(worker, "\" data-day=\"").concat(day, "\"\n                    data-premium=\"0\" data-retention=\"0\" data-timesheet=\"").concat(timesheet, "\"></div>");
        $(".worker-".concat(worker, ".day-").concat(day)).parent().html(html);
        var totalHourNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__hours .timesheet__table-text"));
        var totalHour = +totalHourNode.text() - +$('.modal-calendar-cell').data('hourse');
        totalHourNode.text(totalHour);
        var totalDaysNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__days .timesheet__table-text"));
        totalDaysNode.text(+totalDaysNode.text() - 1);
        var totalBusinessNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__business .timesheet__table-text"));
        var totalBusiness = +totalBusinessNode.text() - +$('.modal-calendar-cell').data('business');
        totalBusinessNode.text(totalBusiness);
        var totalPremiumNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__premium .timesheet__table-text"));
        var totalPremium = +totalPremiumNode.text() - +$('.modal-calendar-cell').data('premium');
        totalPremiumNode.text(totalPremium);
        var totalRetentionNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__retention .timesheet__table-text"));
        var totalRetention = +totalRetentionNode.text() - +$('.modal-calendar-cell').data('retention');
        totalRetentionNode.text(totalRetention);
        var totalSalary = +$(".timesheet__row.worker-".concat(worker, " .timesheet__rate")).text() * totalHour + totalBusiness + totalPremium - totalRetention;
        $(".timesheet__row.worker-".concat(worker, " .timesheet__salary .timesheet__table-text")).text(totalSalary);
        $(".worker-".concat(worker, ".day-").concat(day)).on('click', showCalender);
        $('.modal-calendar-cell').fadeOut();
      }
    });
  });
  $('.modal-calendar-cell').submit(function (e) {
    var _this = this;

    e.preventDefault();
    var worker = $(this).data('worker');
    var date = $(this).data('date');
    var day = $(this).data('day');
    var hourse = $(this).find('input[name="hourses"]').val();
    var comment = $(this).find('.modal__editing-area').val();
    var timesheet = $(this).data('timesheet');
    var business = $(this).find('#show-business').is(':checked') ? $(this).find('input[name="business"]').val() : null;
    var premium = $(this).find('input[name="premium"]').val();
    var retention = $(this).find('input[name="retention"]').val();
    $.ajax({
      url: "//".concat(window.location.host, "/api/timesheet/").concat(timesheet, "/hour/add"),
      method: 'POST',
      data: {
        'worker': worker,
        'date': date,
        'hourse': hourse,
        'comment': comment,
        'business': business,
        'premium': premium,
        'retention': retention
      },
      success: function success(result) {
        var block = $(".worker-".concat(worker, ".day-").concat(day, "[data-timesheet=\"").concat(timesheet, "\"]"));
        block.html("<div class=\"timesheet__table-text\">".concat(hourse, "</div>"));
        block.attr('data-premium', premium);
        block.attr('data-retention', retention); //if (! block.hasClass('today'))
        //{
        //block.off('click');
        //block.removeClass('timesheet__cell--empty');
        //block.removeClass('calendar__show');

        block.addClass('timesheet__cell--active');
        block.addClass('timesheet__cell--fill');
        if (business) block.attr('data-business', business);else block.removeAttr('data-business');

        if (comment.trim().length != 0) {
          //block.addClass('modal__show-comment');
          block.addClass('timesheet__comment-cell'); //block.addClass('calendar__comment');

          block.attr('data-comment', comment);
          /* block.click(function () {
              $('.modal__comment-text').text(comment);
              $('.modal-show-comment').fadeIn();
          }); */
        } else {
          block.removeClass('timesheet__comment-cell');
          block.removeAttr('data-comment');
        } //}
        //else
        //block.attr('data-comment', comment);


        var totalPremiumNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__premium .timesheet__table-text"));
        var totalPremium = +totalPremiumNode.text();
        if (+$(_this).data('premium') != +premium) totalPremium = totalPremium - +$(_this).data('premium') + +premium;
        totalPremiumNode.text(totalPremium);
        var totalRetentionNode = $(".timesheet__row.worker-".concat(worker, " .timesheet__retention .timesheet__table-text"));
        var totalRetention = +totalRetentionNode.text();
        if (+$(_this).data('retention') != +retention) totalRetention = totalRetention - +$(_this).data('retention') + +retention;
        totalRetentionNode.text(totalRetention);
        var totalHourNode = $(".timesheet__row.worker-".concat(worker)).length > 0 ? $(".timesheet__row.worker-".concat(worker, " .timesheet__hours .timesheet__table-text")) : block.parents('.calendar__row').find('.calendar__cell--hours .calendar__cell-text');
        var totalHour = +totalHourNode.text();
        if (+$(_this).data('hourse') != +hourse) totalHour = totalHour - +$(_this).data('hourse') + +hourse;
        totalHourNode.text(totalHour);

        if (!$(_this).data('fill')) {
          var totalDaysNode = $(".timesheet__row.worker-".concat(worker)).length > 0 ? $(".timesheet__row.worker-".concat(worker, " .timesheet__days .timesheet__table-text")) : block.parents('.calendar__row').find('.calendar__cell--days .calendar__cell-text');
          totalDaysNode.text(+totalDaysNode.text() + 1);
        }

        var totalBusinessNode = $(".timesheet__row.worker-".concat(worker)).length > 0 ? $(".timesheet__row.worker-".concat(worker, " .timesheet__business .timesheet__table-text")) : block.parents('.calendar__row').find('.calendar__cell--business .calendar__cell-text');
        var totalBusiness = +totalBusinessNode.text();

        if (business != null) {
          if ($(_this).data('business') == undefined) totalBusiness += +business;else if (+$(_this).data('business') != +business) totalBusiness = totalBusiness - +$(_this).data('business') + +business;
        } else if ($(_this).data('business') != undefined) totalBusiness -= +$(_this).data('business');

        totalBusinessNode.text(totalBusiness);
        var totalSalary = +$(".timesheet__row.worker-".concat(worker, " .timesheet__rate")).text() * totalHour + totalBusiness + totalPremium - totalRetention;
        $(".timesheet__row.worker-".concat(worker, " .timesheet__salary .timesheet__table-text")).text(totalSalary);
        /* let totalBusinessNode = $(`.timesheet__row.worker-${worker} .timesheet__business .timesheet__table-text`);
        totalBusinessNode.text(+totalBusinessNode.text() + +business);
          totalBusinessNode = block.parents('.calendar__row').find('.calendar__cell--business .calendar__cell-text');
        totalBusinessNode.text(+totalBusinessNode.text() + +business); */

        $('.modal-calendar-cell').fadeOut();
      }
    });
  });
  $('.modal__position-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.modal__position')
  });
  $('.modal__expenses-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.modal__expenses-date')
  });
  $('.modal__editing-select').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.modal__editing-box')
  }); // tabs

  $(function () {
    $('.modal__tabs').on('click', '.modal__tab-item:not(.modal__tab-item--active)', function () {
      $(this).addClass('modal__tab-item--active').siblings().removeClass('modal__tab-item--active').closest('.modal__employee-card').find('.modal__employee-inner').removeClass('modal__employee-inner--active').eq($(this).index()).addClass('modal__employee-inner--active');
    });
  }); // end tabs
  // edit

  $('.modal__edit-icon').click(function () {
    $(this).parents().children('.modal__input').removeAttr('readonly');
  });
  $('.modal__input-edit').blur(function () {
    $(this).attr('readonly', 'readonly');
  });
  $('.modal__edit-icon').click(function () {
    $(this).parents().children('.modal__parameters-text').removeAttr('readonly');
  });
  $('.modal__parameters-text').blur(function () {
    $(this).attr('readonly', 'readonly');
  });
  $('.modal__edit-icon').click(function () {
    $(this).parents().children('.modal__status').attr('contenteditable', 'true');
    $('.modal__status').focus();
  });
  $('.js-edit-pass').click(function () {
    $(this).closest('.modal__profile-row').find('.js-edit-input').removeAttr('readonly');
  });
  $('.js-edit-input').blur(function () {
    $(this).attr('readonly', 'readonly');
  }); // end edit
  // value buttons

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
  }); // end value buttons
  // range slider

  var rangeSliderOptions = {
    hide_from_to: true,
    hide_min_max: true,
    onChange: function onChange(data) {
      $('#input-subtract').val(data.from);
    }
  };
  if ($("#slider-subtract").length) $("#slider-subtract").ionRangeSlider(rangeSliderOptions);
  var rangeSliderOptions2 = {
    hide_from_to: true,
    hide_min_max: true,
    onChange: function onChange(data) {
      $('#input-prize').val(data.from);
    }
  };
  if ($("#slider-prize").length) $("#slider-prize").ionRangeSlider(rangeSliderOptions2);
  var rangeSliderOptions3 = {
    hide_from_to: true,
    hide_min_max: true,
    onChange: function onChange(data) {
      $('#input-salary').val(data.from);
    }
  };
  if ($("#slider-salary").length) $("#slider-salary").ionRangeSlider(rangeSliderOptions3); //end range slider

  if ($('#container2').length) {
    // // GRAPHIC SECOND
    Highcharts.chart('container2', {
      chart: {
        type: 'variablepie'
      },
      title: {
        text: ''
      },
      tooltip: {
        title: false,
        name: false,
        headerFormat: '' // pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        //     'Area (square km): <b>{point.y}</b><br/>' +
        //     'Population density (people per square km): <b>{point.z}</b><br/>'

      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: '',
        data: [{
          name: '',
          y: 505370,
          z: 20
        }, {
          name: '',
          y: 551500,
          z: 20
        }]
      }]
    }); // // GRAPHIC END
  }

  $('.js-select-flat').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.calendar__flat-box')
  });
  $('.label-file').change(function () {
    if ($(this).val() != '') $(this).prev().text('Загружено: ' + $(this)[0].files.length);else $(this).prev().text('Загрузите удостоверение');
  });
  $('.my').change(function () {
    if ($(this).val() != '') $('.modal-inputfile__text').text('Загружено: ' + $(this)[0].files.length);else $('.modal-inputfile__text').text('Загрузите удостоверение');
  });
  $('.modal__close-return').click(function () {
    $('.modal-close').show();
  });
  $('.js-modal-yes').click(function (e) {
    e.preventDefault;
    $('.modal-close').hide();
    $('.modal').hide();
  });
  $('.js-modal-no').click(function (e) {
    e.preventDefault;
    $('.modal-close').hide();
  }); // Загрузка фото

  $("#imgInput").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#imgOutput').attr('src', e.target.result);
      };

      reader.readAsDataURL(this.files[0]);
    }
  }); // Сегодняшняя дата

  function setToday() {
    var nodeId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'todayInputDate';
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var todayMonth = todayDate.getMonth();
    var todayDay = todayDate.getDate();
    var todaySum = todayMonth + '/' + todayDay + '/' + todayYear;
    document.getElementById(nodeId).value = todaySum;
  }

  if ($('#todayInputDate').length) setToday();
}); // Клик по фону, но не по окну.

$('.modal').click(function (e) {
  e.preventDefault;

  if ($(e.target).closest('.modal__content').length == 0) {
    $(this).fadeOut();
  } // return false

});
$('.modal__pass-icon--show-icon').click(function () {
  $('.modal__input-password').attr('type', 'text');
  $(this).addClass('modal__pass-icon--hide');
  $('.modal__pass-icon--hide-icon').removeClass('modal__pass-icon--hide');
});
$('.modal__pass-icon--hide-icon').click(function () {
  $('.modal__input-password').attr('type', 'password');
  $(this).addClass('modal__pass-icon--hide');
  $('.modal__pass-icon--show-icon').removeClass('modal__pass-icon--hide');
});
$('.modal__show-icon').click(function () {
  $('.modal__input-pass').attr('type', 'text');
  $(this).removeClass('modal__show-icon--show');
  $(this).addClass('modal__show-icon--hidden');
  $('.modal__hidden-icon').addClass('modal__hidden-icon--show');
});
$('.modal__hidden-icon').click(function () {
  $('.modal__input-password').attr('type', 'password');
  $('.modal__input-pass').attr('type', 'password');
  $(this).removeClass('modal__hidden-icon--show');
  $(this).addClass('modal__hidden-icon--hidden');
  $('.modal__show-icon').addClass('modal__show-icon--show');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")))

/***/ }),

/***/ "./src/blocks/notes/notes.js":
/*!***********************************!*\
  !*** ./src/blocks/notes/notes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function remove() {
  var _this = this;

  $.ajax({
    'url': "//".concat(window.location.host, "/note/").concat($(this).closest('.notes__item').attr('data-id'), "/remove"),
    'method': 'POST',
    success: function success() {
      return $(_this).closest('.notes__item').remove();
    }
  });
}

function edit() {
  $.ajax({
    'url': "//".concat(window.location.host, "/note/").concat($(this).closest('.notes__item').attr('data-id'), "/edit"),
    'method': 'POST',
    'data': {
      'content': $(this).val()
    },
    success: function success(data) {}
  });
}

function change() {
  var colorItem = $(this);
  var color = colorItem.attr('data-color');
  $.ajax({
    'url': "//".concat(window.location.host, "/note/").concat($(this).closest('.notes__item').attr('data-id'), "/edit"),
    'method': 'POST',
    'data': {
      'color': color
    },
    success: function success(data) {
      var notesItem = colorItem.closest('.notes__item');
      notesItem.css('background', color);
      notesItem.find('.notes__color').removeClass('notes__color_selected');
      colorItem.addClass('notes__color_selected');
    }
  });
}

$('.notes__close').on('click', remove);
$('.notes__color').on('click', change);
$('.notes__text').on('focusout', edit);
$('.notes__add-btn').click(function (e) {
  e.preventDefault;
  $.ajax({
    'url': "//".concat(window.location.host, "/note"),
    'method': 'POST',
    success: function success(data) {
      var date = new Date(data.created_at);
      var output = document.getElementById('outputNotes');
      $.ajax({
        'url': "//".concat(window.location.host, "/identity/notes_colors"),
        'method': 'GET',
        success: function success(colors) {
          console.log(colors);
          colors = colors.reverse();
          var colorsHtml = '';

          for (var i = 0; i < colors.length; i++) {
            colorsHtml += "<div class=\"notes__color ".concat(i == 0 ? 'notes__color_selected' : '', "\" data-color=\"").concat(colors[i].color, "\" style=\"background: ").concat(colors[i].color, "\"></div>");
          }

          output.innerHTML += "<div class=\"notes__item\" data-id=\"".concat(data.id, "\" style=\"background: #fef7b2\">") + '<div class="notes__box">' + '<textarea class="notes__text" name="content" placeholder="Введите текст">' + '</textarea>' + '<div class="notes__bottom">' + '<div class="notes__info">' + '<div class="notes__date">' + 'Создано: ' + '<span>' + date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear() + date.getHours() + ':' + (date.getMinutes() + 1) + '</span>' + '</div>' + '</div>' + '<div class="notes__colors">' + colorsHtml + '</div>' + '</div>' + '</div>' + '<div class="notes__icons">' + '<div class="notes__close"></div>' + '</div>' + '</div>';
          $('.notes__close').on('click', remove);
          $('.notes__color').on('click', change);
          $('.notes__text').on('focusout', edit);
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/blocks/notifications/notifications.js":
/*!***************************************************!*\
  !*** ./src/blocks/notifications/notifications.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$('.notifications__close').click(function () {
  $(this).parent().remove();
});

/***/ }),

/***/ "./src/blocks/personal-area/personal-area.js":
/*!***************************************************!*\
  !*** ./src/blocks/personal-area/personal-area.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Загрузка фото
$("#imgInput").change(function () {
  if (this.files && this.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#imgOutput').attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
  }
});

/***/ }),

/***/ "./src/blocks/settings/settings.js":
/*!*****************************************!*\
  !*** ./src/blocks/settings/settings.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/timesheet/timesheet.js":
/*!*******************************************!*\
  !*** ./src/blocks/timesheet/timesheet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var timesheetSelect = $('.js-select-timesheet-year');
  timesheetSelect.select2({
    minimumResultsForSearch: Infinity
  });
  var itemsDates = $('.date-items__dates');
  timesheetSelect.change(function (e) {
    itemsDates.empty();
    var year = this.value;
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    for (var month = 1; month <= 12; month++) {
      itemsDates.append("<div class=\"button date-items__item button--noselect\">\n                    <a href=\"".concat(this.dataset.link, "?month=").concat(month, "&year=").concat(year, "\">").concat(months[month - 1], ", ").concat(year, "</a>\n                </div>"));
    }
  });
});

/***/ }),

/***/ "./src/blocks/user-panel/user-panel.js":
/*!*********************************************!*\
  !*** ./src/blocks/user-panel/user-panel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.user-panel__sort-date').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.user-panel__sort-box-date')
  });
  $('.user-panel__sort-page').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.user-panel__sort-box-page')
  });
  $('.js-user-dates-start').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.user-panel__dates-start')
  });
  $('.js-user-dates-end').select2({
    minimumResultsForSearch: Infinity,
    dropdownParent: $('.user-panel__dates-end')
  });

  if ($('.user-panel__slider-right').length) {
    var sideScroll = function sideScroll(element, direction, speed, distance, step) {
      scrollAmount = 0;
      var slideTimer = setInterval(function () {
        if (direction == 'left') {
          element.scrollLeft -= step;
        } else {
          element.scrollLeft += step;
        }

        scrollAmount += step;

        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    };

    var button = document.getElementById('slide');

    button.onclick = function () {
      var container = document.getElementById('container');
      sideScroll(container, 'right', 25, 100, 10);
    };

    var back = document.getElementById('slideBack');

    back.onclick = function () {
      var container = document.getElementById('container');
      sideScroll(container, 'left', 25, 100, 10);
    };
  }

  $('.js-user-position').select2({
    minimumResultsForSearch: Infinity
  });
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var masks = {
  'phone': '+7(999) 999-9999'
};
var config = {
  datepicker: {
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd/mm/yy',
    yearRange: '1970:2021',
    firstDay: 1,
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  }
}; //$('.js-input-number').mask('999999 / ver.99');

$('.js-input-height').mask('999');
$('.js-input-shoes').mask('99');
$('.js-input-clothes').mask('99');
$('.js-input-series').mask('9999');
$('.js-input-num').mask('999999');
$(".js-date").datepicker({
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd/mm/yy',
  yearRange: '1970:2021',
  firstDay: 1,
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
  dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
});
$(".js-phone").mask('+7(999) 999-9999'); // $( ".datepicker-select" ).datepicker({
//     numberOfMonths: 2,
//     showButtonPanel: true
// });

$('.js-datepicker-year').datepicker({
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd/mm/yy',
  yearRange: '1970:2021',
  firstDay: 1,
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  dayNamesShort: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
  dayNamesMin: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
}); // Валидация инпут

$('.js-valid-area').keypress(function (key) {
  if (key.charCode == 45 || key.charCode == 46 || key.charCode == 101) return false;
});

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/index.js ./src/blocks/calendar/calendar.js ./src/blocks/commercial-offer/commercial-offer.js ./src/blocks/contracts/contracts.js ./src/blocks/files/files.js ./src/blocks/files-modal/files-modal.js ./src/blocks/header/header.js ./src/blocks/main/main.js ./src/blocks/modal/modal.js ./src/blocks/notes/notes.js ./src/blocks/notifications/notifications.js ./src/blocks/personal-area/personal-area.js ./src/blocks/settings/settings.js ./src/blocks/timesheet/timesheet.js ./src/blocks/user-panel/user-panel.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/index.js */"./src/index.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/calendar/calendar.js */"./src/blocks/calendar/calendar.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/commercial-offer/commercial-offer.js */"./src/blocks/commercial-offer/commercial-offer.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/contracts/contracts.js */"./src/blocks/contracts/contracts.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/files/files.js */"./src/blocks/files/files.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/files-modal/files-modal.js */"./src/blocks/files-modal/files-modal.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/header/header.js */"./src/blocks/header/header.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/main/main.js */"./src/blocks/main/main.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/modal/modal.js */"./src/blocks/modal/modal.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/notes/notes.js */"./src/blocks/notes/notes.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/notifications/notifications.js */"./src/blocks/notifications/notifications.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/personal-area/personal-area.js */"./src/blocks/personal-area/personal-area.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/settings/settings.js */"./src/blocks/settings/settings.js");
__webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/timesheet/timesheet.js */"./src/blocks/timesheet/timesheet.js");
module.exports = __webpack_require__(/*! /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/projects/arca/src/blocks/user-panel/user-panel.js */"./src/blocks/user-panel/user-panel.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map