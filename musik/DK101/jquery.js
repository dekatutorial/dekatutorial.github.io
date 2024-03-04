!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t());
})(this, function () {
  "use strict";
  function o(e) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          })(e);
  }
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  function u(e, t, n) {
    t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", { writable: !1 });
  }
  function e(e, t, n) {
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n);
  }
  function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && c(e, t);
  }
  function a(e) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function c(e, t) {
    return (c = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
  }
  function U(e, t) {
    if (t && ("object" == typeof t || "function" == typeof t)) return t;
    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
    t = e;
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function l(n) {
    var i = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = a(n);
      return U(this, i ? ((e = a(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
    };
  }
  function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function s(e, t) {
    var n,
      i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (
        Array.isArray(e) ||
        (i = (function (e, t) {
          if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
          }
        })(e)) ||
        (t && e && "number" == typeof e.length)
      )
        return (
          i && (e = i),
          (n = 0),
          {
            s: (t = function () {}),
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: t,
          }
        );
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      r = !0,
      u = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return (r = e.done), e;
      },
      e: function (e) {
        (u = !0), (o = e);
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (u) throw o;
        }
      },
    };
  }
  var d = !1,
    t = {};
  function v(e) {
    t[e] = !1;
  }
  function q() {
    for (var e in t) if (t[e]) return (d = !0);
    return (d = !1);
  }
  function h() {
    return new Date().getTime();
  }
  function z(e) {
    var t = h();
    return e(), h() - t;
  }
  function B(n, i) {
    function e(t) {
      return function () {
        n && n();
        var e = t.apply(void 0, arguments);
        return i && i(), e;
      };
    }
    var t = window.alert,
      o = window.confirm,
      r = window.prompt;
    try {
      (window.alert = e(t)), (window.confirm = e(o)), (window.prompt = e(r));
    } catch (e) {}
  }
  var p = { iframe: !1, pc: !1, qqBrowser: !1, firefox: !1, macos: !1, edge: !1, oldEdge: !1, ie: !1, iosChrome: !1, iosEdge: !1, chrome: !1, seoBot: !1, mobile: !1 };
  function W() {
    function e(e) {
      return -1 !== t.indexOf(e);
    }
    var t = navigator.userAgent.toLowerCase(),
      n = (function () {
        var e = navigator,
          t = e.platform,
          e = e.maxTouchPoints;
        if ("number" == typeof e) return 1 < e;
        if ("string" == typeof t) {
          e = t.toLowerCase();
          if (/(mac|win)/i.test(e)) return !1;
          if (/(android|iphone|ipad|ipod|arch)/i.test(e)) return !0;
        }
        return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
      })(),
      i = !!window.top && window !== window.top,
      o = !n,
      r = e("qqbrowser"),
      u = e("firefox"),
      a = e("macintosh"),
      c = e("edge"),
      l = c && !e("chrome"),
      f = l || e("trident") || e("msie"),
      s = e("crios"),
      d = e("edgios"),
      v = e("chrome") || s,
      h = !n && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(t);
    Object.assign(p, { iframe: i, pc: o, qqBrowser: r, firefox: u, macos: a, edge: c, oldEdge: l, ie: f, iosChrome: s, iosEdge: d, chrome: v, seoBot: h, mobile: n });
  }
  function H() {
    for (
      var e = (function () {
          for (var e = {}, t = 0; t < 500; t++) e["".concat(t)] = "".concat(t);
          return e;
        })(),
        t = [],
        n = 0;
      n < 50;
      n++
    )
      t.push(e);
    return t;
  }
  var y,
    K = "",
    V = !1;
  function F() {
    var e = w.ignore;
    if (e) {
      if ("function" == typeof e) return e();
      if (0 !== e.length) {
        var t = location.href;
        if (K === t) return V;
        K = t;
        var n,
          i = !1,
          o = s(e);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var r = n.value;
            if ("string" == typeof r) {
              if (-1 !== t.indexOf(r)) {
                i = !0;
                break;
              }
            } else if (r.test(t)) {
              i = !0;
              break;
            }
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
        return (V = i);
      }
    }
  }
  ((A = y = y || {})[(A.Unknown = -1)] = "Unknown"),
    (A[(A.RegToString = 0)] = "RegToString"),
    (A[(A.DefineId = 1)] = "DefineId"),
    (A[(A.Size = 2)] = "Size"),
    (A[(A.DateToString = 3)] = "DateToString"),
    (A[(A.FuncToString = 4)] = "FuncToString"),
    (A[(A.Debugger = 5)] = "Debugger"),
    (A[(A.Performance = 6)] = "Performance"),
    (A[(A.DebugLib = 7)] = "DebugLib");
  var b = (function () {
      function n(e) {
        var t = e.type,
          e = e.enabled,
          e = void 0 === e || e;
        i(this, n), (this.type = y.Unknown), (this.enabled = !0), (this.type = t), (this.enabled = e), this.enabled && ((t = this), $.push(t), this.init());
      }
      return (
        u(n, [
          {
            key: "onDevToolOpen",
            value: function () {
              var e;
              console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】")), w.clearIntervalWhenDevOpenTrigger && g(), window.clearTimeout(N), w.ondevtoolopen(this.type, J), (e = this.type), (t[e] = !0);
            },
          },
          { key: "init", value: function () {} },
        ]),
        n
      );
    })(),
    M = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.DebugLib });
      }
      return (
        u(
          t,
          [
            { key: "init", value: function () {} },
            {
              key: "detect",
              value: function () {
                var e;
                (!0 === (null == (e = null == (e = window.eruda) ? void 0 : e._devTools) ? void 0 : e._isShow) || (window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle"))) && this.onDevToolOpen();
              },
            },
          ],
          [
            {
              key: "isUsing",
              value: function () {
                return !!window.eruda || !!window._vcOrigConsole;
              },
            },
          ]
        ),
        t
      );
    })(),
    X = 0,
    N = 0,
    $ = [],
    G = 0;
  function Y(o) {
    function e() {
      l = !0;
    }
    function t() {
      l = !1;
    }
    var n,
      i,
      r,
      u,
      a,
      c,
      l = !1;
    function f() {
      (c[u] === r ? i : n)();
    }
    B(e, t),
      (n = t),
      (i = e),
      void 0 !== (c = document).hidden
        ? ((r = "hidden"), (a = "visibilitychange"), (u = "visibilityState"))
        : void 0 !== c.mozHidden
        ? ((r = "mozHidden"), (a = "mozvisibilitychange"), (u = "mozVisibilityState"))
        : void 0 !== c.msHidden
        ? ((r = "msHidden"), (a = "msvisibilitychange"), (u = "msVisibilityState"))
        : void 0 !== c.webkitHidden && ((r = "webkitHidden"), (a = "webkitvisibilitychange"), (u = "webkitVisibilityState")),
      c.removeEventListener(a, f, !1),
      c.addEventListener(a, f, !1),
      (X = window.setInterval(function () {
        if (!(o.isSuspend || l || F())) {
          var e,
            t,
            n = s($);
          try {
            for (n.s(); !(e = n.n()).done; ) {
              var i = e.value;
              v(i.type), i.detect(G++);
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
          D(), "function" == typeof w.ondevtoolclose && ((t = d), !q() && t && w.ondevtoolclose());
        }
      }, w.interval)),
      (N = setTimeout(function () {
        p.pc || M.isUsing() || g();
      }, w.stopIntervalTime));
  }
  function g() {
    window.clearInterval(X);
  }
  function J() {
    if ((g(), w.url)) window.location.href = w.url;
    else {
      try {
        (window.opener = null), window.open("", "_self"), window.close(), window.history.back();
      } catch (e) {
        console.log(e);
      }
      setTimeout(function () {
        window.location.href = w.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
      }, 500);
    }
  }
  var w = {
      md5: "",
      ondevtoolopen: J,
      ondevtoolclose: null,
      url: "",
      timeOutUrl: "",
      tkName: "ddtk",
      interval: 500,
      disableMenu: !0,
      stopIntervalTime: 5e3,
      clearIntervalWhenDevOpenTrigger: !1,
      detectors: [0, 1, 3, 4, 5, 6, 7],
      clearLog: !0,
      disableSelect: !1,
      disableCopy: !1,
      disableCut: !1,
      disablePaste: !1,
      ignore: null,
      disableIframeParents: !0,
      seo: !0,
    },
    Q = ["detectors", "ondevtoolclose", "ignore"];
  function Z(e) {
    var t,
      n = 0 < arguments.length && void 0 !== e ? e : {};
    for (t in w) {
      var i = t;
      void 0 === n[i] || (o(w[i]) !== o(n[i]) && -1 === Q.indexOf(i)) || (w[i] = n[i]);
    }
    "function" == typeof w.ondevtoolclose && !0 === w.clearIntervalWhenDevOpenTrigger && ((w.clearIntervalWhenDevOpenTrigger = !1), console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"));
  }
  var m,
    T,
    ee,
    O = window.console || { log: function () {}, table: function () {}, clear: function () {} };
  function D() {
    w.clearLog && ee();
  }
  var te = function () {
    return !1;
  };
  function S(n) {
    var e,
      i = 74,
      o = 73,
      r = 85,
      u = 83,
      a = 123,
      c = p.macos
        ? function (e, t) {
            return e.metaKey && e.altKey && (t === o || t === i);
          }
        : function (e, t) {
            return e.ctrlKey && e.shiftKey && (t === o || t === i);
          },
      l = p.macos
        ? function (e, t) {
            return (e.metaKey && e.altKey && t === r) || (e.metaKey && t === u);
          }
        : function (e, t) {
            return e.ctrlKey && (t === u || t === r);
          };
    n.addEventListener(
      "keydown",
      function (e) {
        var t = (e = e || n.event).keyCode || e.which;
        if (t === a || c(e, t) || l(e, t)) return ne(n, e);
      },
      !0
    ),
      (e = n),
      w.disableMenu && k(e, "contextmenu"),
      (e = n),
      w.disableSelect && k(e, "selectstart"),
      (e = n),
      w.disableCopy && k(e, "copy"),
      (e = n),
      w.disableCut && k(e, "cut"),
      (e = n),
      w.disablePaste && k(e, "paste");
  }
  function k(t, e) {
    t.addEventListener(e, function (e) {
      return ne(t, e);
    });
  }
  function ne(e, t) {
    if (!F() && !te()) return ((t = t || e.event).returnValue = !1), t.preventDefault(), !1;
  }
  var P = 8;
  function ie(e) {
    for (
      var t = (function (e, t) {
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, u = 0; u < e.length; u += 16) {
            var a = n,
              c = i,
              l = o,
              f = r;
            (n = j(n, i, o, r, e[u + 0], 7, -680876936)),
              (r = j(r, n, i, o, e[u + 1], 12, -389564586)),
              (o = j(o, r, n, i, e[u + 2], 17, 606105819)),
              (i = j(i, o, r, n, e[u + 3], 22, -1044525330)),
              (n = j(n, i, o, r, e[u + 4], 7, -176418897)),
              (r = j(r, n, i, o, e[u + 5], 12, 1200080426)),
              (o = j(o, r, n, i, e[u + 6], 17, -1473231341)),
              (i = j(i, o, r, n, e[u + 7], 22, -45705983)),
              (n = j(n, i, o, r, e[u + 8], 7, 1770035416)),
              (r = j(r, n, i, o, e[u + 9], 12, -1958414417)),
              (o = j(o, r, n, i, e[u + 10], 17, -42063)),
              (i = j(i, o, r, n, e[u + 11], 22, -1990404162)),
              (n = j(n, i, o, r, e[u + 12], 7, 1804603682)),
              (r = j(r, n, i, o, e[u + 13], 12, -40341101)),
              (o = j(o, r, n, i, e[u + 14], 17, -1502002290)),
              (i = j(i, o, r, n, e[u + 15], 22, 1236535329)),
              (n = I(n, i, o, r, e[u + 1], 5, -165796510)),
              (r = I(r, n, i, o, e[u + 6], 9, -1069501632)),
              (o = I(o, r, n, i, e[u + 11], 14, 643717713)),
              (i = I(i, o, r, n, e[u + 0], 20, -373897302)),
              (n = I(n, i, o, r, e[u + 5], 5, -701558691)),
              (r = I(r, n, i, o, e[u + 10], 9, 38016083)),
              (o = I(o, r, n, i, e[u + 15], 14, -660478335)),
              (i = I(i, o, r, n, e[u + 4], 20, -405537848)),
              (n = I(n, i, o, r, e[u + 9], 5, 568446438)),
              (r = I(r, n, i, o, e[u + 14], 9, -1019803690)),
              (o = I(o, r, n, i, e[u + 3], 14, -187363961)),
              (i = I(i, o, r, n, e[u + 8], 20, 1163531501)),
              (n = I(n, i, o, r, e[u + 13], 5, -1444681467)),
              (r = I(r, n, i, o, e[u + 2], 9, -51403784)),
              (o = I(o, r, n, i, e[u + 7], 14, 1735328473)),
              (i = I(i, o, r, n, e[u + 12], 20, -1926607734)),
              (n = E(n, i, o, r, e[u + 5], 4, -378558)),
              (r = E(r, n, i, o, e[u + 8], 11, -2022574463)),
              (o = E(o, r, n, i, e[u + 11], 16, 1839030562)),
              (i = E(i, o, r, n, e[u + 14], 23, -35309556)),
              (n = E(n, i, o, r, e[u + 1], 4, -1530992060)),
              (r = E(r, n, i, o, e[u + 4], 11, 1272893353)),
              (o = E(o, r, n, i, e[u + 7], 16, -155497632)),
              (i = E(i, o, r, n, e[u + 10], 23, -1094730640)),
              (n = E(n, i, o, r, e[u + 13], 4, 681279174)),
              (r = E(r, n, i, o, e[u + 0], 11, -358537222)),
              (o = E(o, r, n, i, e[u + 3], 16, -722521979)),
              (i = E(i, o, r, n, e[u + 6], 23, 76029189)),
              (n = E(n, i, o, r, e[u + 9], 4, -640364487)),
              (r = E(r, n, i, o, e[u + 12], 11, -421815835)),
              (o = E(o, r, n, i, e[u + 15], 16, 530742520)),
              (i = E(i, o, r, n, e[u + 2], 23, -995338651)),
              (n = C(n, i, o, r, e[u + 0], 6, -198630844)),
              (r = C(r, n, i, o, e[u + 7], 10, 1126891415)),
              (o = C(o, r, n, i, e[u + 14], 15, -1416354905)),
              (i = C(i, o, r, n, e[u + 5], 21, -57434055)),
              (n = C(n, i, o, r, e[u + 12], 6, 1700485571)),
              (r = C(r, n, i, o, e[u + 3], 10, -1894986606)),
              (o = C(o, r, n, i, e[u + 10], 15, -1051523)),
              (i = C(i, o, r, n, e[u + 1], 21, -2054922799)),
              (n = C(n, i, o, r, e[u + 8], 6, 1873313359)),
              (r = C(r, n, i, o, e[u + 15], 10, -30611744)),
              (o = C(o, r, n, i, e[u + 6], 15, -1560198380)),
              (i = C(i, o, r, n, e[u + 13], 21, 1309151649)),
              (n = C(n, i, o, r, e[u + 4], 6, -145523070)),
              (r = C(r, n, i, o, e[u + 11], 10, -1120210379)),
              (o = C(o, r, n, i, e[u + 2], 15, 718787259)),
              (i = C(i, o, r, n, e[u + 9], 21, -343485551)),
              (n = _(n, a)),
              (i = _(i, c)),
              (o = _(o, l)),
              (r = _(r, f));
          }
          return Array(n, i, o, r);
        })(
          (function (e) {
            for (var t = Array(), n = (1 << P) - 1, i = 0; i < e.length * P; i += P) t[i >> 5] |= (e.charCodeAt(i / P) & n) << i % 32;
            return t;
          })(e),
          e.length * P
        ),
        n = "0123456789abcdef",
        i = "",
        o = 0;
      o < 4 * t.length;
      o++
    )
      i += n.charAt((t[o >> 2] >> ((o % 4) * 8 + 4)) & 15) + n.charAt((t[o >> 2] >> ((o % 4) * 8)) & 15);
    return i;
  }
  function x(e, t, n, i, o, r) {
    return _(((t = _(_(t, e), _(i, r))) << o) | (t >>> (32 - o)), n);
  }
  function j(e, t, n, i, o, r, u) {
    return x((t & n) | (~t & i), e, t, o, r, u);
  }
  function I(e, t, n, i, o, r, u) {
    return x((t & i) | (n & ~i), e, t, o, r, u);
  }
  function E(e, t, n, i, o, r, u) {
    return x(t ^ n ^ i, e, t, o, r, u);
  }
  function C(e, t, n, i, o, r, u) {
    return x(n ^ (t | ~i), e, t, o, r, u);
  }
  function _(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
  }
  var A = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.RegToString, enabled: p.qqBrowser || p.firefox });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              var t = this;
              (this.lastTime = 0),
                (this.reg = /./),
                m(this.reg),
                (this.reg.toString = function () {
                  var e;
                  return p.qqBrowser ? ((e = new Date().getTime()), t.lastTime && e - t.lastTime < 100 ? t.onDevToolOpen() : (t.lastTime = e)) : p.firefox && t.onDevToolOpen(), "";
                });
            },
          },
          {
            key: "detect",
            value: function () {
              m(this.reg);
            },
          },
        ]),
        t
      );
    })(),
    oe = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.DefineId });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              var e = this;
              (this.div = document.createElement("div")),
                this.div.__defineGetter__("id", function () {
                  e.onDevToolOpen();
                }),
                Object.defineProperty(this.div, "id", {
                  get: function () {
                    e.onDevToolOpen();
                  },
                });
            },
          },
          {
            key: "detect",
            value: function () {
              m(this.div);
            },
          },
        ]),
        t
      );
    })(),
    re = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.Size, enabled: !p.iframe && !p.edge });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              var e = this;
              this.checkWindowSizeUneven(),
                window.addEventListener(
                  "resize",
                  function () {
                    setTimeout(function () {
                      e.checkWindowSizeUneven();
                    }, 100);
                  },
                  !0
                );
            },
          },
          { key: "detect", value: function () {} },
          {
            key: "checkWindowSizeUneven",
            value: function () {
              var e = (function () {
                if (ue(window.devicePixelRatio)) return window.devicePixelRatio;
                var e = window.screen;
                return !(ue(e) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI;
              })();
              if (!1 !== e) {
                var t = 200 < window.outerWidth - window.innerWidth * e,
                  e = 300 < window.outerHeight - window.innerHeight * e;
                if (t || e) return this.onDevToolOpen(), !1;
                v(this.type);
              }
              return !0;
            },
          },
        ]),
        t
      );
    })();
  function ue(e) {
    return null != e;
  }
  var L,
    ae = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.DateToString, enabled: !p.iosChrome && !p.iosEdge });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              var e = this;
              (this.count = 0),
                (this.date = new Date()),
                (this.date.toString = function () {
                  return e.count++, "";
                });
            },
          },
          {
            key: "detect",
            value: function () {
              (this.count = 0), m(this.date), D(), 2 <= this.count && this.onDevToolOpen();
            },
          },
        ]),
        t
      );
    })(),
    ce = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.FuncToString, enabled: !p.iosChrome && !p.iosEdge });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              var e = this;
              (this.count = 0),
                (this.func = function () {}),
                (this.func.toString = function () {
                  return e.count++, "";
                });
            },
          },
          {
            key: "detect",
            value: function () {
              (this.count = 0), m(this.func), D(), 2 <= this.count && this.onDevToolOpen();
            },
          },
        ]),
        t
      );
    })(),
    le = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.Debugger, enabled: p.iosChrome || p.iosEdge });
      }
      return (
        u(t, [
          {
            key: "detect",
            value: function () {
              var e = h();
              100 < h() - e && this.onDevToolOpen();
            },
          },
        ]),
        t
      );
    })(),
    fe = (function () {
      n(t, b);
      var e = l(t);
      function t() {
        return i(this, t), e.call(this, { type: y.Performance, enabled: p.chrome || !p.mobile });
      }
      return (
        u(t, [
          {
            key: "init",
            value: function () {
              (this.maxPrintTime = 0), (this.largeObjectArray = H());
            },
          },
          {
            key: "detect",
            value: function () {
              var e = this,
                t = z(function () {
                  T(e.largeObjectArray);
                }),
                n = z(function () {
                  m(e.largeObjectArray);
                });
              if (((this.maxPrintTime = Math.max(this.maxPrintTime, n)), D(), 0 === t || 0 === this.maxPrintTime)) return !1;
              t > 10 * this.maxPrintTime && this.onDevToolOpen();
            },
          },
        ]),
        t
      );
    })(),
    se = (e((L = {}), y.RegToString, A), e(L, y.DefineId, oe), e(L, y.Size, re), e(L, y.DateToString, ae), e(L, y.FuncToString, ce), e(L, y.Debugger, le), e(L, y.Performance, fe), e(L, y.DebugLib, M), L);
  var R = Object.assign(
    function (e) {
      function t() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
        return { success: !e, reason: e };
      }
      if (R.isRunning) return t("already running");
      if (
        (W(),
        (ee = p.ie
          ? ((m = function () {
              return O.log.apply(O, arguments);
            }),
            (T = function () {
              return O.table.apply(O, arguments);
            }),
            function () {
              return O.clear();
            })
          : ((m = O.log), (T = O.table), O.clear)),
        Z(e),
        w.md5 &&
          ie(
            (function (e) {
              var t = window.location.search,
                n = window.location.hash;
              if ("" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && void 0 !== t) {
                (n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i")), (e = t.substr(1).match(n));
                if (null != e) return unescape(e[2]);
              }
              return "";
            })(w.tkName)
          ) === w.md5)
      )
        return t("token passed");
      if (w.seo && p.seoBot) return t("seobot");
      (R.isRunning = !0), Y(R);
      var n = R,
        i =
          ((te = function () {
            return n.isSuspend;
          }),
          window.top),
        o = window.parent;
      if ((S(window), w.disableIframeParents && i && o && i !== window)) {
        for (; o !== i; ) S(o), (o = o.parent);
        S(i);
      }
      return (
        ("all" === w.detectors ? Object.keys(se) : w.detectors).forEach(function (e) {
          new se[e]();
        }),
        t()
      );
    },
    { isRunning: !1, isSuspend: !1, md5: ie, version: "0.3.6", DetectorType: y, isDevToolOpened: q }
  );
  A = (function () {
    if ("undefined" == typeof window || !window.document) return null;
    var n = document.querySelector("[disable-devtool-auto]");
    if (!n) return null;
    var i = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"],
      o = ["interval"],
      r = {};
    return (
      ["md5", "url", "tk-name", "detectors"].concat(i, o).forEach(function (e) {
        var t = n.getAttribute(e);
        null !== t &&
          (-1 !== o.indexOf(e) ? (t = parseInt(t)) : -1 !== i.indexOf(e) ? (t = "false" !== t) : "detector" === e && "all" !== t && (t = t.split(" ")),
          (r[
            (function (e) {
              if (-1 === e.indexOf("-")) return e;
              var t = !1;
              return e
                .split("")
                .map(function (e) {
                  return "-" === e ? ((t = !0), "") : t ? ((t = !1), e.toUpperCase()) : e;
                })
                .join("");
            })(e)
          ] = t));
      }),
      r
    );
  })();
  return A && R(A), R;
});
