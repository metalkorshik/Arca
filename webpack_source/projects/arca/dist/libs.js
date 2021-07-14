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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/libs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../libs/js/customLib.js":
/*!****************************************************************************************!*\
  !*** /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/libs/js/customLib.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
window.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
window.scrollTop = 128;
window.scrollDownDirection;
window.mobileWidth; // вычисление ширины скролла

window.scrollbarWidth = function getScrollWidth() {
  // создадим элемент с прокруткой
  let div = document.createElement('div');
  let width = 0;
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  width = div.offsetWidth - div.clientWidth;
  div.remove();
  return width;
};

/***/ }),

/***/ "../../libs/js/jquery.min.js":
/*!*****************************************************************************************!*\
  !*** /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/libs/js/jquery.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

   true && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function (e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }

  var f = "3.5.1",
      S = function (e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;

      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function (e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]);

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) b.attrHandle[n[r]] = t;
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) a.unshift(n);

        n = t;

        while (n = n.parentNode) s.unshift(n);

        while (a[r] === s[r]) r++;

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));

        while (r--) e.splice(n[r], 1);
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);

    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) if (!i[r](e, t, n)) return !1;

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) (a = p[o]) && i.push(f[o] = a);

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;

          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
        }

        c.push(t);
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break;
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) s(c, f, t, n);

            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f);
            }

            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function (e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && S(e).is(n)) break;
      r.push(e);
    }

    return r;
  },
      T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);

    return e;
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return h(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function (e) {
      return O(e, "nextSibling");
    },
    prev: function (e) {
      return O(e, "previousSibling");
    },
    nextAll: function (e) {
      return h(e, "nextSibling");
    },
    prevAll: function (e) {
      return h(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return T(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function () {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
        }), this;
      },
      has: function (e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function () {
        return s && (s = []), this;
      },
      disable: function () {
        return a = u = [], s = t = "", this;
      },
      disabled: function () {
        return !s;
      },
      lock: function () {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function () {
        return !!a;
      },
      fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function () {
        return f.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function () {
          return i;
        },
        always: function () {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function (e) {
          return a.then(null, e);
        },
        pipe: function () {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function (t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function () {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function (e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) I(i[t], a(t), o.reject);

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function (e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) delete r[t[n]];
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == typeof n ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));

    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);

    return e;
  }

  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

      while (c--) a = a.lastChild;

      S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));

    f.textContent = "", d = 0;

    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;

      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));

          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);

        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Ae(this, e, Se), !1;
      },
      trigger: function () {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(je, ""), u, l));
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));

    return e;
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }

        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Re(this, e, !0);
    },
    remove: function (e) {
      return Re(this, e);
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function (e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.call(e), t) e.style[i] = o[i];

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) if ((e = _e[n] + t) in ze) return e;
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function (e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) l.tweens[t].run(1);

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ot.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }

        d[r] = v && v[r] || S.style(e, r);
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
      })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);

        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));

        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i,
          a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }

          return s;
        },
        set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return h ? p : null;
        },
        setRequestHeader: function (e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();

          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) e = e.firstElementChild;

        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || zt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);

        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) e = e.offsetParent;

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return S;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});

/***/ }),

/***/ "../../plugins/menu.js":
/*!***********************************************************************************!*\
  !*** /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/plugins/menu.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.menu = function menu(options) {
  let defaultActiveClass = 'active';
  let button = options.button;
  let buttonActiveClass = options.buttonActiveClass || defaultActiveClass;
  let menuBlock = options.menuBlock;
  let menuBlockActiveClass = options.menuActiveClass || defaultActiveClass;
  let background = options.background;
  let backgroundActiveClass = options.backgroundActiveClass || defaultActiveClass;
  let state = false;
  let buttons = button.split(', ');
  let menuBlocks = menuBlock.split(', ');

  if (background) {
    let backgrounds = background.split(', ');
  }

  this.open = function () {
    openMenu();
  };

  this.close = function () {
    closeMenu();
  };

  this.state = function () {
    return state;
  };

  function openMenu() {
    state = true;

    for (let i = 0; i < buttons.length; i++) {
      $(buttons[i]).addClass(buttonActiveClass);
    }

    for (let i = 0; i < menuBlocks.length; i++) {
      $(menuBlocks[i]).addClass(menuBlockActiveClass);
    }

    if (background) {
      for (let i = 0; i < backgrounds.length; i++) {
        $(backgrounds[i]).addClass(backgroundActiveClass);
      }
    }

    $(document).trigger('change_menu');
  }

  function closeMenu() {
    state = false;

    for (let i = 0; i < buttons.length; i++) {
      $(buttons[i]).removeClass(buttonActiveClass);
    }

    for (let i = 0; i < menuBlocks.length; i++) {
      $(menuBlocks[i]).removeClass(menuBlockActiveClass);
    }

    if (background) {
      for (let i = 0; i < backgrounds.length; i++) {
        $(backgrounds[i]).removeClass(backgroundActiveClass);
      }
    }

    $(document).trigger('change_menu');
  }

  $(document).on('click', function (e) {
    let buttonClick = false;
    let menuClick = false;

    for (let i = 0; i < buttons.length; i++) {
      if ($(e.target).closest(buttons[i]).length === 1) {
        buttonClick = true;
      }
    }

    for (let i = 0; i < menuBlocks.length; i++) {
      if ($(e.target).closest(menuBlocks[i]).length === 1) {
        menuClick = true;
      }
    }

    if (state === false) {
      if (buttonClick === true) {
        openMenu();
      }
    } else {
      if (menuClick === false || buttonClick === true) {
        closeMenu();
      }
    }
  });
};

/***/ }),

/***/ "../../plugins/owlcarousel2/assets/owl.carousel.min.css":
/*!********************************************************************************************************************!*\
  !*** /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/plugins/owlcarousel2/assets/owl.carousel.min.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../plugins/owlcarousel2/owl.carousel.min.js":
/*!************************************************************************************************************!*\
  !*** /home/admin/web/crm.arca-plus.ru/public_html/webpack_source/plugins/owlcarousel2/owl.carousel.min.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function () {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function () {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function () {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function () {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function () {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function () {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
    }
  }], e.prototype.initializeStage = function () {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ">", {
      class: this.settings.stageClass
    }).wrap(a("<div/>", {
      class: this.settings.stageOuterClass
    })), this.$element.append(this.$stage.parent()));
  }, e.prototype.initializeItems = function () {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function (b) {
      return a(b);
    }), this._mergers = this._items.map(function () {
      return 1;
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
  }, e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a);
    }

    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.isVisible = function () {
    return !this.settings.checkVisibility || this.$element.is(":visible");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function (a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e;
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      if (b = this._items.length) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
      return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) this._plugins[d].destroy();

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);

    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
          var c = this._core.settings,
              e = c.center && Math.ceil(c.items / 2) || c.items,
              f = c.center && -1 * e || 0,
              g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
              h = this._core.clones().length,
              i = a.proxy(function (a, b) {
            this.load(b);
          }, this);

          for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager, c.loop && (g -= c.lazyLoadEager, e++)); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1,
    lazyLoadEager: 0
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function () {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("srcset", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);

    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (c) {
    this._core = c, this._previousHeight = null, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function () {
      d._core.settings.autoHeight && d.update();
    }), a(b).resize(function () {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function () {
        d.update();
      }, 250));
    });
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.settings.lazyLoad,
        e = this._core.$stage.children().toArray().slice(b, c),
        f = [],
        g = 0;

    a.each(e, function (b, c) {
      f.push(a(c).height());
    }), g = Math.max.apply(null, f), g <= 1 && d && this._previousHeight && (g = this._previousHeight), this._previousHeight = g, this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);

    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function (c) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? a("<div/>", {
        class: "owl-video-tn " + j,
        srcType: c
      }) : a("<div/>", {
        class: "owl-video-tn",
        style: "opacity:1;background-image:url(" + c + ")"
      }), b.after(d), b.after(e);
    };

    if (b.wrap(a("<div/>", {
      class: "owl-video-wrapper",
      style: g
    })), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'), c.attr("height", h), c.attr("width", g), "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"), a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);

    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);

    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function (d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
  }, e.prototype.read = function () {
    return new Date().getTime() - this._time;
  }, e.prototype.play = function (c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e);
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call));
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);

    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function (b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
  }, e.prototype.destroy = function () {
    var a, b, c, d, e;
    e = this._core.settings;

    for (a in this._handlers) this.$element.off(a, this._handlers[a]);

    for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();

    for (d in this.overides) this._core[d] = this._overrides[d];

    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function (c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);

    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function () {
      return !!e("transform");
    },
    csstransforms3d: function () {
      return !!e("perspective");
    },
    csstransitions: function () {
      return !!e("transition");
    },
    cssanimations: function () {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./plugins/ion-range-slider/css/ion.rangeSlider.min.css":
/*!**************************************************************!*\
  !*** ./plugins/ion-range-slider/css/ion.rangeSlider.min.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./plugins/ion-range-slider/js/ion.rangeSlider.min.js":
/*!************************************************************!*\
  !*** ./plugins/ion-range-slider/js/ion.rangeSlider.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:56:44
!function (i) {
  "undefined" != typeof jQuery && jQuery || "function" != "function" || !__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? "undefined" != typeof jQuery && jQuery || "object" != typeof exports ? i(jQuery, document, window, navigator) : i(__webpack_require__(/*! jquery */ "jquery"), document, window, navigator) : !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (t) {
    return i(t, document, window, navigator);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(function (a, c, l, t, _) {
  "use strict";

  var i,
      s,
      o = 0,
      e = (i = t.userAgent, s = /msie\s\d+/i, 0 < i.search(s) && s.exec(i).toString().split(" ")[1] < 9 && (a("html").addClass("lt-ie9"), !0));
  Function.prototype.bind || (Function.prototype.bind = function (o) {
    var e = this,
        h = [].slice;
    if ("function" != typeof e) throw new TypeError();

    var r = h.call(arguments, 1),
        n = function () {
      if (this instanceof n) {
        var t = function () {};

        t.prototype = e.prototype;
        var i = new t(),
            s = e.apply(i, r.concat(h.call(arguments)));
        return Object(s) === s ? s : i;
      }

      return e.apply(o, r.concat(h.call(arguments)));
    };

    return n;
  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t, i) {
    var s;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var o = Object(this),
        e = o.length >>> 0;
    if (0 == e) return -1;
    var h = +i || 0;
    if (Math.abs(h) === 1 / 0 && (h = 0), e <= h) return -1;

    for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e;) {
      if (s in o && o[s] === t) return s;
      s++;
    }

    return -1;
  });

  function h(t, i, s) {
    this.VERSION = "2.3.1", this.input = t, this.plugin_count = s, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, i = i || {}, this.$cache = {
      win: a(l),
      body: a(c.body),
      input: a(t),
      cont: null,
      rs: null,
      min: null,
      max: null,
      from: null,
      to: null,
      single: null,
      bar: null,
      line: null,
      s_single: null,
      s_from: null,
      s_to: null,
      shad_single: null,
      shad_from: null,
      shad_to: null,
      edge: null,
      grid: null,
      grid_labels: []
    }, this.coords = {
      x_gap: 0,
      x_pointer: 0,
      w_rs: 0,
      w_rs_old: 0,
      w_handle: 0,
      p_gap: 0,
      p_gap_left: 0,
      p_gap_right: 0,
      p_step: 0,
      p_pointer: 0,
      p_handle: 0,
      p_single_fake: 0,
      p_single_real: 0,
      p_from_fake: 0,
      p_from_real: 0,
      p_to_fake: 0,
      p_to_real: 0,
      p_bar_x: 0,
      p_bar_w: 0,
      grid_gap: 0,
      big_num: 0,
      big: [],
      big_w: [],
      big_p: [],
      big_x: []
    }, this.labels = {
      w_min: 0,
      w_max: 0,
      w_from: 0,
      w_to: 0,
      w_single: 0,
      p_min: 0,
      p_max: 0,
      p_from_fake: 0,
      p_from_left: 0,
      p_to_fake: 0,
      p_to_left: 0,
      p_single_fake: 0,
      p_single_left: 0
    };
    var o,
        e,
        h,
        r = this.$cache.input,
        n = r.prop("value");

    for (h in o = {
      skin: "flat",
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !0,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " — ",
      input_values_separator: ";",
      disable: !1,
      block: !1,
      extra_classes: "",
      scope: null,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null
    }, "INPUT" !== r[0].nodeName && console && console.warn && console.warn("Base element should be <input>!", r[0]), (e = {
      skin: r.data("skin"),
      type: r.data("type"),
      min: r.data("min"),
      max: r.data("max"),
      from: r.data("from"),
      to: r.data("to"),
      step: r.data("step"),
      min_interval: r.data("minInterval"),
      max_interval: r.data("maxInterval"),
      drag_interval: r.data("dragInterval"),
      values: r.data("values"),
      from_fixed: r.data("fromFixed"),
      from_min: r.data("fromMin"),
      from_max: r.data("fromMax"),
      from_shadow: r.data("fromShadow"),
      to_fixed: r.data("toFixed"),
      to_min: r.data("toMin"),
      to_max: r.data("toMax"),
      to_shadow: r.data("toShadow"),
      prettify_enabled: r.data("prettifyEnabled"),
      prettify_separator: r.data("prettifySeparator"),
      force_edges: r.data("forceEdges"),
      keyboard: r.data("keyboard"),
      grid: r.data("grid"),
      grid_margin: r.data("gridMargin"),
      grid_num: r.data("gridNum"),
      grid_snap: r.data("gridSnap"),
      hide_min_max: r.data("hideMinMax"),
      hide_from_to: r.data("hideFromTo"),
      prefix: r.data("prefix"),
      postfix: r.data("postfix"),
      max_postfix: r.data("maxPostfix"),
      decorate_both: r.data("decorateBoth"),
      values_separator: r.data("valuesSeparator"),
      input_values_separator: r.data("inputValuesSeparator"),
      disable: r.data("disable"),
      block: r.data("block"),
      extra_classes: r.data("extraClasses")
    }).values = e.values && e.values.split(","), e) e.hasOwnProperty(h) && (e[h] !== _ && "" !== e[h] || delete e[h]);

    n !== _ && "" !== n && ((n = n.split(e.input_values_separator || i.input_values_separator || ";"))[0] && n[0] == +n[0] && (n[0] = +n[0]), n[1] && n[1] == +n[1] && (n[1] = +n[1]), i && i.values && i.values.length ? (o.from = n[0] && i.values.indexOf(n[0]), o.to = n[1] && i.values.indexOf(n[1])) : (o.from = n[0] && +n[0], o.to = n[1] && +n[1])), a.extend(o, i), a.extend(o, e), this.options = o, this.update_check = {}, this.validate(), this.result = {
      input: this.$cache.input,
      slider: null,
      min: this.options.min,
      max: this.options.max,
      from: this.options.from,
      from_percent: 0,
      from_value: null,
      to: this.options.to,
      to_percent: 0,
      to_value: null
    }, this.init();
  }

  h.prototype = {
    init: function (t) {
      this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), t ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene();
    },
    append: function () {
      var t = '<span class="irs irs--' + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + '"></span>';
      this.$cache.input.before(t), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), "single" === this.options.type ? (this.$cache.cont.append('<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append('<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function () {
      var t = this.options.min,
          i = this.options.max,
          s = this.options.from,
          o = this.options.to;
      t < s && o === i ? this.$cache.s_from.addClass("type_last") : o < i && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function (t) {
      switch (t) {
        case "single":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
          break;

        case "from":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
          break;

        case "to":
          this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
          break;

        case "both":
          this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function () {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>'), this.$cache.cont.addClass("irs-disabled");
    },
    removeDisableMask: function () {
      this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
    },
    remove: function () {
      this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), e && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function () {
      this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && "double" === this.options.type ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), "single" === this.options.type ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), e && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
    },
    pointerFocus: function (t) {
      var i, s;
      this.target || (i = (s = "single" === this.options.type ? this.$cache.single : this.$cache.from).offset().left, i += s.width() / 2 - 1, this.pointerClick("single", {
        preventDefault: function () {},
        pageX: i
      }));
    },
    pointerMove: function (t) {
      if (this.dragging) {
        var i = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
        this.coords.x_pointer = i - this.coords.x_gap, this.calc();
      }
    },
    pointerUp: function (t) {
      this.current_plugin === this.plugin_count && this.is_active && (this.is_active = !1, this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, e && a("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (a.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1);
    },
    pointerDown: function (t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && ("both" === t && this.setTempMinInterval(), t = t || this.target || "from", this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = s - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), e && a("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene());
    },
    pointerClick: function (t, i) {
      i.preventDefault();
      var s = i.pageX || i.originalEvent.touches && i.originalEvent.touches[0].pageX;
      2 !== i.button && (this.current_plugin = this.plugin_count, this.target = t, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(s - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"));
    },
    key: function (t, i) {
      if (!(this.current_plugin !== this.plugin_count || i.altKey || i.ctrlKey || i.shiftKey || i.metaKey)) {
        switch (i.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            i.preventDefault(), this.moveByKey(!1);
            break;

          case 87:
          case 68:
          case 38:
          case 39:
            i.preventDefault(), this.moveByKey(!0);
        }

        return !0;
      }
    },
    moveByKey: function (t) {
      var i = this.coords.p_pointer,
          s = (this.options.max - this.options.min) / 100;
      s = this.options.step / s, t ? i += s : i -= s, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * i), this.is_key = !0, this.calc();
    },
    setMinMax: function () {
      if (this.options) {
        if (this.options.hide_min_max) return this.$cache.min[0].style.display = "none", void (this.$cache.max[0].style.display = "none");
        if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));else {
          var t = this._prettify(this.options.min),
              i = this._prettify(this.options.max);

          this.result.min_pretty = t, this.result.max_pretty = i, this.$cache.min.html(this.decorate(t, this.options.min)), this.$cache.max.html(this.decorate(i, this.options.max));
        }
        this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1);
      }
    },
    setTempMinInterval: function () {
      var t = this.result.to - this.result.from;
      null === this.old_min_interval && (this.old_min_interval = this.options.min_interval), this.options.min_interval = t;
    },
    restoreOriginalMinInterval: function () {
      null !== this.old_min_interval && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null);
    },
    calc: function (t) {
      if (this.options && (this.calc_count++, 10 !== this.calc_count && !t || (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
        this.calcPointerPercent();
        var i = this.getHandleX();

        switch ("both" === this.target && (this.coords.p_gap = 0, i = this.getHandleX()), "click" === this.target && (this.coords.p_gap = this.coords.p_handle / 2, i = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(i)), this.target) {
          case "base":
            var s = (this.options.max - this.options.min) / 100,
                o = (this.result.from - this.options.min) / s,
                e = (this.result.to - this.options.min) / s;
            this.coords.p_single_real = this.toFixed(o), this.coords.p_from_real = this.toFixed(o), this.coords.p_to_real = this.toFixed(e), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
            break;

          case "single":
            if (this.options.from_fixed) break;
            this.coords.p_single_real = this.convertToRealPercent(i), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            break;

          case "from":
            if (this.options.from_fixed) break;
            this.coords.p_from_real = this.convertToRealPercent(i), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            break;

          case "to":
            if (this.options.to_fixed) break;
            this.coords.p_to_real = this.convertToRealPercent(i), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both":
            if (this.options.from_fixed || this.options.to_fixed) break;
            i = this.toFixed(i + .001 * this.coords.p_handle), this.coords.p_from_real = this.convertToRealPercent(i) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(i) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both_one":
            if (this.options.from_fixed || this.options.to_fixed) break;
            var h = this.convertToRealPercent(i),
                r = this.result.from_percent,
                n = this.result.to_percent - r,
                a = n / 2,
                c = h - a,
                l = h + a;
            c < 0 && (l = (c = 0) + n), 100 < l && (c = (l = 100) - n), this.coords.p_from_real = this.calcWithStep(c), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(l), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
        }

        "single" === this.options.type ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels();
      }
    },
    calcPointerPercent: function () {
      this.coords.w_rs ? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100)) : this.coords.p_pointer = 0;
    },
    convertToRealPercent: function (t) {
      return t / (100 - this.coords.p_handle) * 100;
    },
    convertToFakePercent: function (t) {
      return t / 100 * (100 - this.coords.p_handle);
    },
    getHandleX: function () {
      var t = 100 - this.coords.p_handle,
          i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      return i < 0 ? i = 0 : t < i && (i = t), i;
    },
    calcHandlePercent: function () {
      "single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
    },
    chooseHandle: function (t) {
      return "single" === this.options.type ? "single" : this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 <= t ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
    },
    calcMinMax: function () {
      this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100);
    },
    calcLabels: function () {
      this.coords.w_rs && !this.options.hide_from_to && ("single" === this.options.type ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left)), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake));
    },
    updateScene: function () {
      this.raf_id && (cancelAnimationFrame(this.raf_id), this.raf_id = null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300));
    },
    drawHandles: function () {
      this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), this.coords.w_rs === this.coords.w_rs_old && !this.force_redraw || (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (this.dragging || this.force_redraw || this.is_key) && ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", "single" === this.options.type ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", this.old_from === this.result.from && !this.force_redraw || (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), this.old_to === this.result.to && !this.force_redraw || (this.$cache.to[0].style.left = this.labels.p_to_left + "%")), this.$cache.single[0].style.left = this.labels.p_single_left + "%", this.writeToInput(), this.old_from === this.result.from && this.old_to === this.result.to || this.is_start || (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, this.is_resize || this.is_update || this.is_start || this.is_finish || this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1));
    },
    drawLabels: function () {
      if (this.options) {
        var t,
            i,
            s,
            o,
            e,
            h = this.options.values.length,
            r = this.options.p_values;
        if (!this.options.hide_from_to) if ("single" === this.options.type) t = h ? this.decorate(r[this.result.from]) : (o = this._prettify(this.result.from), this.decorate(o, this.result.from)), this.$cache.single.html(t), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";else {
          s = h ? (this.options.decorate_both ? (t = this.decorate(r[this.result.from]), t += this.options.values_separator, t += this.decorate(r[this.result.to])) : t = this.decorate(r[this.result.from] + this.options.values_separator + r[this.result.to]), i = this.decorate(r[this.result.from]), this.decorate(r[this.result.to])) : (o = this._prettify(this.result.from), e = this._prettify(this.result.to), this.options.decorate_both ? (t = this.decorate(o, this.result.from), t += this.options.values_separator, t += this.decorate(e, this.result.to)) : t = this.decorate(o + this.options.values_separator + e, this.result.to), i = this.decorate(o, this.result.from), this.decorate(e, this.result.to)), this.$cache.single.html(t), this.$cache.from.html(i), this.$cache.to.html(s), this.calcLabels();
          var n = Math.min(this.labels.p_single_left, this.labels.p_from_left),
              a = this.labels.p_single_left + this.labels.p_single_fake,
              c = this.labels.p_to_left + this.labels.p_to_fake,
              l = Math.max(a, c);
          this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", l = this.result.from === this.result.to ? ("from" === this.target ? this.$cache.from[0].style.visibility = "visible" : "to" === this.target ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", c) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", Math.max(a, c))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), n < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", l > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
        }
      }
    },
    drawShadow: function () {
      var t,
          i,
          s,
          o,
          e = this.options,
          h = this.$cache,
          r = "number" == typeof e.from_min && !isNaN(e.from_min),
          n = "number" == typeof e.from_max && !isNaN(e.from_max),
          a = "number" == typeof e.to_min && !isNaN(e.to_min),
          c = "number" == typeof e.to_max && !isNaN(e.to_max);
      "single" === e.type ? e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_single[0].style.display = "block", h.shad_single[0].style.left = t + "%", h.shad_single[0].style.width = i + "%") : h.shad_single[0].style.display = "none" : (e.from_shadow && (r || n) ? (t = this.convertToPercent(r ? e.from_min : e.min), i = this.convertToPercent(n ? e.from_max : e.max) - t, t = this.toFixed(t - this.coords.p_handle / 100 * t), i = this.toFixed(i - this.coords.p_handle / 100 * i), t += this.coords.p_handle / 2, h.shad_from[0].style.display = "block", h.shad_from[0].style.left = t + "%", h.shad_from[0].style.width = i + "%") : h.shad_from[0].style.display = "none", e.to_shadow && (a || c) ? (s = this.convertToPercent(a ? e.to_min : e.min), o = this.convertToPercent(c ? e.to_max : e.max) - s, s = this.toFixed(s - this.coords.p_handle / 100 * s), o = this.toFixed(o - this.coords.p_handle / 100 * o), s += this.coords.p_handle / 2, h.shad_to[0].style.display = "block", h.shad_to[0].style.left = s + "%", h.shad_to[0].style.width = o + "%") : h.shad_to[0].style.display = "none");
    },
    writeToInput: function () {
      "single" === this.options.type ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to));
    },
    callOnStart: function () {
      this.writeToInput(), this.options.onStart && "function" == typeof this.options.onStart && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
    },
    callOnChange: function () {
      this.writeToInput(), this.options.onChange && "function" == typeof this.options.onChange && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
    },
    callOnFinish: function () {
      this.writeToInput(), this.options.onFinish && "function" == typeof this.options.onFinish && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
    },
    callOnUpdate: function () {
      this.writeToInput(), this.options.onUpdate && "function" == typeof this.options.onUpdate && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
    },
    toggleInput: function () {
      this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index;
    },
    convertToPercent: function (t, i) {
      var s,
          o = this.options.max - this.options.min,
          e = o / 100;
      return o ? (s = (i ? t : t - this.options.min) / e, this.toFixed(s)) : (this.no_diapason = !0, 0);
    },
    convertToValue: function (t) {
      var i,
          s,
          o = this.options.min,
          e = this.options.max,
          h = o.toString().split(".")[1],
          r = e.toString().split(".")[1],
          n = 0,
          a = 0;
      if (0 === t) return this.options.min;
      if (100 === t) return this.options.max;
      h && (n = i = h.length), r && (n = s = r.length), i && s && (n = s <= i ? i : s), o < 0 && (o = +(o + (a = Math.abs(o))).toFixed(n), e = +(e + a).toFixed(n));
      var c,
          l = (e - o) / 100 * t + o,
          _ = this.options.step.toString().split(".")[1];
      return l = _ ? +l.toFixed(_.length) : (l /= this.options.step, +(l *= this.options.step).toFixed(0)), a && (l -= a), (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ? c = this.options.min : c > this.options.max && (c = this.options.max), c;
    },
    calcWithStep: function (t) {
      var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
      return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i);
    },
    checkMinInterval: function (t, i, s) {
      var o,
          e,
          h = this.options;
      return h.min_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o < h.min_interval && (o = e - h.min_interval) : o - e < h.min_interval && (o = e + h.min_interval), this.convertToPercent(o)) : t;
    },
    checkMaxInterval: function (t, i, s) {
      var o,
          e,
          h = this.options;
      return h.max_interval ? (o = this.convertToValue(t), e = this.convertToValue(i), "from" === s ? e - o > h.max_interval && (o = e - h.max_interval) : o - e > h.max_interval && (o = e + h.max_interval), this.convertToPercent(o)) : t;
    },
    checkDiapason: function (t, i, s) {
      var o = this.convertToValue(t),
          e = this.options;
      return "number" != typeof i && (i = e.min), "number" != typeof s && (s = e.max), o < i && (o = i), s < o && (o = s), this.convertToPercent(o);
    },
    toFixed: function (t) {
      return +(t = t.toFixed(20));
    },
    _prettify: function (t) {
      return this.options.prettify_enabled ? this.options.prettify && "function" == typeof this.options.prettify ? this.options.prettify(t) : this.prettify(t) : t;
    },
    prettify: function (t) {
      return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
    },
    checkEdges: function (t, i) {
      return this.options.force_edges && (t < 0 ? t = 0 : 100 - i < t && (t = 100 - i)), this.toFixed(t);
    },
    validate: function () {
      var t,
          i,
          s = this.options,
          o = this.result,
          e = s.values,
          h = e.length;
      if ("string" == typeof s.min && (s.min = +s.min), "string" == typeof s.max && (s.max = +s.max), "string" == typeof s.from && (s.from = +s.from), "string" == typeof s.to && (s.to = +s.to), "string" == typeof s.step && (s.step = +s.step), "string" == typeof s.from_min && (s.from_min = +s.from_min), "string" == typeof s.from_max && (s.from_max = +s.from_max), "string" == typeof s.to_min && (s.to_min = +s.to_min), "string" == typeof s.to_max && (s.to_max = +s.to_max), "string" == typeof s.grid_num && (s.grid_num = +s.grid_num), s.max < s.min && (s.max = s.min), h) for (s.p_values = [], s.min = 0, s.max = h - 1, s.step = 1, s.grid_num = s.max, s.grid_snap = !0, i = 0; i < h; i++) t = +e[i], t = isNaN(t) ? e[i] : (e[i] = t, this._prettify(t)), s.p_values.push(t);
      "number" == typeof s.from && !isNaN(s.from) || (s.from = s.min), "number" == typeof s.to && !isNaN(s.to) || (s.to = s.max), "single" === s.type ? (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max)) : (s.from < s.min && (s.from = s.min), s.from > s.max && (s.from = s.max), s.to < s.min && (s.to = s.min), s.to > s.max && (s.to = s.max), this.update_check.from && (this.update_check.from !== s.from && s.from > s.to && (s.from = s.to), this.update_check.to !== s.to && s.to < s.from && (s.to = s.from)), s.from > s.to && (s.from = s.to), s.to < s.from && (s.to = s.from)), ("number" != typeof s.step || isNaN(s.step) || !s.step || s.step < 0) && (s.step = 1), "number" == typeof s.from_min && s.from < s.from_min && (s.from = s.from_min), "number" == typeof s.from_max && s.from > s.from_max && (s.from = s.from_max), "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min), "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max), o && (o.min !== s.min && (o.min = s.min), o.max !== s.max && (o.max = s.max), (o.from < o.min || o.from > o.max) && (o.from = s.from), (o.to < o.min || o.to > o.max) && (o.to = s.to)), ("number" != typeof s.min_interval || isNaN(s.min_interval) || !s.min_interval || s.min_interval < 0) && (s.min_interval = 0), ("number" != typeof s.max_interval || isNaN(s.max_interval) || !s.max_interval || s.max_interval < 0) && (s.max_interval = 0), s.min_interval && s.min_interval > s.max - s.min && (s.min_interval = s.max - s.min), s.max_interval && s.max_interval > s.max - s.min && (s.max_interval = s.max - s.min);
    },
    decorate: function (t, i) {
      var s = "",
          o = this.options;
      return o.prefix && (s += o.prefix), s += t, o.max_postfix && (o.values.length && t === o.p_values[o.max] ? (s += o.max_postfix, o.postfix && (s += " ")) : i === o.max && (s += o.max_postfix, o.postfix && (s += " "))), o.postfix && (s += o.postfix), s;
    },
    updateFrom: function () {
      this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function () {
      this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function () {
      this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo();
    },
    appendGrid: function () {
      if (this.options.grid) {
        var t,
            i,
            s,
            o,
            e,
            h,
            r = this.options,
            n = r.max - r.min,
            a = r.grid_num,
            c = 0,
            l = 4,
            _ = "";

        for (this.calcGridMargin(), r.grid_snap && (a = n / r.step), 50 < a && (a = 50), s = this.toFixed(100 / a), 4 < a && (l = 3), 7 < a && (l = 2), 14 < a && (l = 1), 28 < a && (l = 0), t = 0; t < a + 1; t++) {
          for (o = l, 100 < (c = this.toFixed(s * t)) && (c = 100), e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1), i = 1; i <= o && 0 !== c; i++) _ += '<span class="irs-grid-pol small" style="left: ' + this.toFixed(c - e * i) + '%"></span>';

          _ += '<span class="irs-grid-pol" style="left: ' + c + '%"></span>', h = this.convertToValue(c), _ += '<span class="irs-grid-text js-grid-text-' + t + '" style="left: ' + c + '%">' + (h = r.values.length ? r.p_values[h] : this._prettify(h)) + "</span>";
        }

        this.coords.big_num = Math.ceil(a + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(_), this.cacheGridLabels();
      }
    },
    cacheGridLabels: function () {
      var t,
          i,
          s = this.coords.big_num;

      for (i = 0; i < s; i++) t = this.$cache.grid.find(".js-grid-text-" + i), this.$cache.grid_labels.push(t);

      this.calcGridLabels();
    },
    calcGridLabels: function () {
      var t,
          i,
          s = [],
          o = [],
          e = this.coords.big_num;

      for (t = 0; t < e; t++) this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1), this.coords.big_p[t] = this.toFixed(this.coords.big_w[t] / this.coords.w_rs * 100), this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2), s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t]), o[t] = this.toFixed(s[t] + this.coords.big_p[t]);

      for (this.options.force_edges && (s[0] < -this.coords.grid_gap && (s[0] = -this.coords.grid_gap, o[0] = this.toFixed(s[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), o[e - 1] > 100 + this.coords.grid_gap && (o[e - 1] = 100 + this.coords.grid_gap, s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1]), this.coords.big_x[e - 1] = this.toFixed(this.coords.big_p[e - 1] - this.coords.grid_gap))), this.calcGridCollision(2, s, o), this.calcGridCollision(4, s, o), t = 0; t < e; t++) i = this.$cache.grid_labels[t][0], this.coords.big_x[t] !== Number.POSITIVE_INFINITY && (i.style.marginLeft = -this.coords.big_x[t] + "%");
    },
    calcGridCollision: function (t, i, s) {
      var o,
          e,
          h,
          r = this.coords.big_num;

      for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t) h = this.$cache.grid_labels[e][0], s[o] <= i[e] ? h.style.visibility = "visible" : h.style.visibility = "hidden";
    },
    calcGridMargin: function () {
      this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && ("single" === this.options.type ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
    },
    update: function (t) {
      this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = a.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0));
    },
    reset: function () {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function () {
      this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), a.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null);
    }
  }, a.fn.ionRangeSlider = function (t) {
    return this.each(function () {
      a.data(this, "ionRangeSlider") || a.data(this, "ionRangeSlider", new h(this, t, o++));
    });
  }, function () {
    for (var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !l.requestAnimationFrame; ++i) l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"], l.cancelAnimationFrame = l[t[i] + "CancelAnimationFrame"] || l[t[i] + "CancelRequestAnimationFrame"];

    l.requestAnimationFrame || (l.requestAnimationFrame = function (t, i) {
      var s = new Date().getTime(),
          o = Math.max(0, 16 - (s - h)),
          e = l.setTimeout(function () {
        t(s + o);
      }, o);
      return h = s + o, e;
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = function (t) {
      clearTimeout(t);
    });
  }();
});

/***/ }),

/***/ "./plugins/jquery-ui/jquery-ui.min.css":
/*!*********************************************!*\
  !*** ./plugins/jquery-ui/jquery-ui.min.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./plugins/jquery-ui/jquery-ui.min.js":
/*!********************************************!*\
  !*** ./plugins/jquery-ui/jquery-ui.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");

    return "hidden" !== e;
  }

  function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent();
    }

    return 0;
  }

  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function () {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", i, o);
  }

  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
  }

  function a(e, i) {
    t.extend(e, i);

    for (var s in i) null == i[s] && (e[s] = i[s]);

    return e;
  }

  function r(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
    };
  }

  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var h = 0,
      l = Array.prototype.slice;
  t.cleanData = function (e) {
    return function (i) {
      var s, n, o;

      for (o = 0; null != (n = i[o]); o++) try {
        s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
      } catch (a) {}

      e(i);
    };
  }(t.cleanData), t.widget = function (e, i, s) {
    var n,
        o,
        a,
        r = {},
        h = e.split(".")[0];
    e = e.split(".")[1];
    var l = h + "-" + e;
    return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
      return !!t.data(e, l);
    }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
      return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
    }, t.extend(o, n, {
      version: s.version,
      _proto: t.extend({}, s),
      _childConstructors: []
    }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
      return t.isFunction(s) ? (r[e] = function () {
        function t() {
          return i.prototype[e].apply(this, arguments);
        }

        function n(t) {
          return i.prototype[e].apply(this, t);
        }

        return function () {
          var e,
              i = this._super,
              o = this._superApply;
          return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
        };
      }(), void 0) : (r[e] = s, void 0);
    }), o.prototype = t.widget.extend(a, {
      widgetEventPrefix: n ? a.widgetEventPrefix || e : e
    }, r, {
      constructor: o,
      namespace: h,
      widgetName: e,
      widgetFullName: l
    }), n ? (t.each(n._childConstructors, function (e, i) {
      var s = i.prototype;
      t.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
  }, t.widget.extend = function (e) {
    for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++) for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);

    return e;
  }, t.widget.bridge = function (e, i) {
    var s = i.prototype.widgetFullName || e;

    t.fn[e] = function (n) {
      var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;
      return o ? this.length || "instance" !== n ? this.each(function () {
        var i,
            o = t.data(this, s);
        return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
        var e = t.data(this, s);
        e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
      })), r;
    };
  }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function (e, i) {
      i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function (t) {
          t.target === i && this.destroy();
        }
      }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function () {
      return {};
    },
    _getCreateEventData: t.noop,
    _create: t.noop,
    _init: t.noop,
    destroy: function () {
      var e = this;
      this._destroy(), t.each(this.classesElementLookup, function (t, i) {
        e._removeClass(i, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: t.noop,
    widget: function () {
      return this.element;
    },
    option: function (e, i) {
      var s,
          n,
          o,
          a = e;
      if (0 === arguments.length) return t.widget.extend({}, this.options);
      if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
        for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];

        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
        n[e] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
        a[e] = i;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function (t) {
      var e;

      for (e in t) this._setOption(e, t[e]);

      return this;
    },
    _setOption: function (t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function (e) {
      var i, s, n;

      for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
        element: s,
        keys: i,
        classes: e,
        add: !0
      })));
    },
    _setOptionDisabled: function (t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function () {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function () {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function (e) {
      function i(i, o) {
        var a, r;

        for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
      }

      var s = [],
          n = this;
      return e = t.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, e), this._on(e.element, {
        remove: "_untrackClassesElement"
      }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
    },
    _untrackClassesElement: function (e) {
      var i = this;
      t.each(i.classesElementLookup, function (s, n) {
        -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
      });
    },
    _removeClass: function (t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function (t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function (t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          o = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return o.element.toggleClass(this._classes(o), s), this;
    },
    _on: function (e, i, s) {
      var n,
          o = this;
      "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
        function r() {
          return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
        }

        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + o.eventNamespace,
            c = h[2];
        c ? n.on(l, c, r) : i.on(l, r);
      });
    },
    _off: function (e, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
    },
    _delay: function (t, e) {
      function i() {
        return ("string" == typeof t ? s[t] : t).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, e || 0);
    },
    _hoverable: function (e) {
      this.hoverable = this.hoverable.add(e), this._on(e, {
        mouseenter: function (e) {
          this._addClass(t(e.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function (e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function (e) {
      this.focusable = this.focusable.add(e), this._on(e, {
        focusin: function (e) {
          this._addClass(t(e.currentTarget), null, "ui-state-focus");
        },
        focusout: function (e) {
          this._removeClass(t(e.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function (e, i, s) {
      var n,
          o,
          a = this.options[e];
      if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]);
      return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, t.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (e, i) {
    t.Widget.prototype["_" + e] = function (s, n, o) {
      "string" == typeof n && (n = {
        effect: n
      });
      var a,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
        t(this)[e](), o && o.call(s[0]), i();
      });
    };
  }), t.widget, function () {
    function e(t, e, i) {
      return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)];
    }

    function i(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }

    function s(e) {
      var i = e[0];
      return 9 === i.nodeType ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : t.isWindow(i) ? {
        width: e.width(),
        height: e.height(),
        offset: {
          top: e.scrollTop(),
          left: e.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: e.outerWidth(),
        height: e.outerHeight(),
        offset: e.offset()
      };
    }

    var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
    t.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n;
        var e,
            i,
            s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
        return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i;
      },
      getScrollInfo: function (e) {
        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
        return {
          width: o ? t.position.scrollbarWidth() : 0,
          height: n ? t.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function (e) {
        var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: o ? t(e).offset() : {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: i.outerWidth(),
          height: i.outerHeight()
        };
      }
    }, t.fn.position = function (n) {
      if (!n || !n.of) return d.apply(this, arguments);
      n = t.extend({}, n);

      var u,
          p,
          f,
          g,
          m,
          _,
          v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};

      return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
        var t,
            e,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
        var s,
            r,
            h = t(this),
            l = h.outerWidth(),
            c = h.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = l + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            I = e(k.my, h.outerWidth(), h.outerHeight());

        "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
          marginLeft: d,
          marginTop: _
        }, t.each(["left", "top"], function (e, i) {
          t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
            targetWidth: p,
            targetHeight: f,
            elemWidth: l,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: x,
            collisionHeight: C,
            offset: [u[0] + I[0], u[1] + I[1]],
            my: n.my,
            at: n.at,
            within: b,
            elem: h
          });
        }), n.using && (r = function (t) {
          var e = g.left - D.left,
              i = e + p - l,
              s = g.top - D.top,
              r = s + f - c,
              u = {
            target: {
              element: v,
              left: g.left,
              top: g.top,
              width: p,
              height: f
            },
            element: {
              element: h,
              left: D.left,
              top: D.top,
              width: l,
              height: c
            },
            horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
            vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
          };
          l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u);
        }), h.offset(t.extend(D, {
          using: r
        }));
      });
    }, t.ui.position = {
      fit: {
        left: function (t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - a - n;
          e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left);
        },
        top: function (t, e) {
          var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - a - n;
          e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top);
        }
      },
      flip: {
        left: function (t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              c = l - h,
              u = l + e.collisionWidth - r - h,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
          0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f));
        },
        top: function (t, e) {
          var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              c = l - h,
              u = l + e.collisionHeight - r - h,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
          0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g));
        }
      },
      flipfit: {
        left: function () {
          t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
        }
      }
    };
  }(), t.ui.position, t.extend(t.expr[":"], {
    data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
      return function (i) {
        return !!t.data(i, e);
      };
    }) : function (e, i, s) {
      return !!t.data(e, s[3]);
    }
  }), t.fn.extend({
    disableSelection: function () {
      var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.on(t + ".ui-disableSelection", function (t) {
          t.preventDefault();
        });
      };
    }(),
    enableSelection: function () {
      return this.off(".ui-disableSelection");
    }
  });
  var c = "ui-effects-",
      u = "ui-effects-style",
      d = "ui-effects-animated",
      p = t;
  t.effects = {
    effect: {}
  }, function (t, e) {
    function i(t, e, i) {
      var s = u[e.type] || {};
      return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t);
    }

    function s(i) {
      var s = l(),
          n = s._rgba = [];
      return i = i.toLowerCase(), f(h, function (t, o) {
        var a,
            r = o.re.exec(i),
            h = r && o.parse(r),
            l = o.space || "rgba";
        return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e;
      }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i];
    }

    function n(t, e, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t;
    }

    var o,
        a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function (t) {
        return [t[1], t[2], t[3], t[4]];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function (t) {
        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
      }
    }, {
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function (t) {
        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
      }
    }, {
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function (t) {
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function (t) {
        return [t[1], t[2] / 100, t[3] / 100, t[4]];
      }
    }],
        l = t.Color = function (e, i, s, n) {
      return new t.Color.fn.parse(e, i, s, n);
    },
        c = {
      rgba: {
        props: {
          red: {
            idx: 0,
            type: "byte"
          },
          green: {
            idx: 1,
            type: "byte"
          },
          blue: {
            idx: 2,
            type: "byte"
          }
        }
      },
      hsla: {
        props: {
          hue: {
            idx: 0,
            type: "degrees"
          },
          saturation: {
            idx: 1,
            type: "percent"
          },
          lightness: {
            idx: 2,
            type: "percent"
          }
        }
      }
    },
        u = {
      "byte": {
        floor: !0,
        max: 255
      },
      percent: {
        max: 1
      },
      degrees: {
        mod: 360,
        floor: !0
      }
    },
        d = l.support = {},
        p = t("<p>")[0],
        f = t.each;

    p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
      e.cache = "_" + t, e.props.alpha = {
        idx: 3,
        type: "percent",
        def: 1
      };
    }), l.fn = t.extend(l.prototype, {
      parse: function (n, a, r, h) {
        if (n === e) return this._rgba = [null, null, null, null], this;
        (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
        var u = this,
            d = t.type(n),
            p = this._rgba = [];
        return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
          p[e.idx] = i(n[e.idx], e);
        }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
          n[e.cache] && (u[e.cache] = n[e.cache].slice());
        }) : f(c, function (e, s) {
          var o = s.cache;
          f(s.props, function (t, e) {
            if (!u[o] && s.to) {
              if ("alpha" === t || null == n[t]) return;
              u[o] = s.to(u._rgba);
            }

            u[o][e.idx] = i(n[t], e, !0);
          }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])));
        }), this) : e;
      },
      is: function (t) {
        var i = l(t),
            s = !0,
            n = this;
        return f(c, function (t, o) {
          var a,
              r = i[o.cache];
          return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
            return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e;
          })), s;
        }), s;
      },
      _space: function () {
        var t = [],
            e = this;
        return f(c, function (i, s) {
          e[s.cache] && t.push(i);
        }), t.pop();
      },
      transition: function (t, e) {
        var s = l(t),
            n = s._space(),
            o = c[n],
            a = 0 === this.alpha() ? l("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            h = r.slice();

        return s = s[o.cache], f(o.props, function (t, n) {
          var o = n.idx,
              a = r[o],
              l = s[o],
              c = u[n.type] || {};
          null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)));
        }), this[n](h);
      },
      blend: function (e) {
        if (1 === this._rgba[3]) return this;

        var i = this._rgba.slice(),
            s = i.pop(),
            n = l(e)._rgba;

        return l(t.map(i, function (t, e) {
          return (1 - s) * n[e] + s * t;
        }));
      },
      toRgbaString: function () {
        var e = "rgba(",
            i = t.map(this._rgba, function (t, e) {
          return null == t ? e > 2 ? 1 : 0 : t;
        });
        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
      },
      toHslaString: function () {
        var e = "hsla(",
            i = t.map(this.hsla(), function (t, e) {
          return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
        });
        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
      },
      toHexString: function (e) {
        var i = this._rgba.slice(),
            s = i.pop();

        return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
          return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
        }).join("");
      },
      toString: function () {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }
    }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e,
          i,
          s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          h = Math.min(s, n, o),
          l = r - h,
          c = r + h,
          u = .5 * c;
      return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a];
    }, c.hsla.from = function (t) {
      if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
      var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;
      return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o];
    }, f(c, function (s, n) {
      var o = n.props,
          a = n.cache,
          h = n.to,
          c = n.from;
      l.fn[s] = function (s) {
        if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
        var n,
            r = t.type(s),
            u = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();
        return f(o, function (t, e) {
          var s = u["object" === r ? t : e.idx];
          null == s && (s = d[e.idx]), d[e.idx] = i(s, e);
        }), c ? (n = l(c(d)), n[a] = d, n) : l(d);
      }, f(o, function (e, i) {
        l.fn[e] || (l.fn[e] = function (n) {
          var o,
              a = t.type(n),
              h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              c = l[i.idx];
          return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
        });
      });
    }), l.hook = function (e) {
      var i = e.split(" ");
      f(i, function (e, i) {
        t.cssHooks[i] = {
          set: function (e, n) {
            var o,
                a,
                r = "";

            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
              if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) try {
                  r = t.css(a, "backgroundColor"), a = a.parentNode;
                } catch (h) {}

                n = n.blend(r && "transparent" !== r ? r : "_default");
              }

              n = n.toRgbaString();
            }

            try {
              e.style[i] = n;
            } catch (h) {}
          }
        }, t.fx.step[i] = function (e) {
          e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
        };
      });
    }, l.hook(a), t.cssHooks.borderColor = {
      expand: function (t) {
        var e = {};
        return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
          e["border" + s + "Color"] = t;
        }), e;
      }
    }, o = t.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    };
  }(p), function () {
    function e(e) {
      var i,
          s,
          n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
      if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
      return o;
    }

    function i(e, i) {
      var s,
          o,
          a = {};

      for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));

      return a;
    }

    var s = ["add", "remove", "toggle"],
        n = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
    t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
      t.fx.step[i] = function (t) {
        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0);
      };
    }), t.fn.addBack || (t.fn.addBack = function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t.effects.animateClass = function (n, o, a, r) {
      var h = t.speed(o, a, r);
      return this.queue(function () {
        var o,
            a = t(this),
            r = a.attr("class") || "",
            l = h.children ? a.find("*").addBack() : a;
        l = l.map(function () {
          var i = t(this);
          return {
            el: i,
            start: e(this)
          };
        }), o = function () {
          t.each(s, function (t, e) {
            n[e] && a[e + "Class"](n[e]);
          });
        }, o(), l = l.map(function () {
          return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
        }), a.attr("class", r), l = l.map(function () {
          var e = this,
              i = t.Deferred(),
              s = t.extend({}, h, {
            queue: !1,
            complete: function () {
              i.resolve(e);
            }
          });
          return this.el.animate(this.diff, s), i.promise();
        }), t.when.apply(t, l.get()).done(function () {
          o(), t.each(arguments, function () {
            var e = this.el;
            t.each(this.diff, function (t) {
              e.css(t, "");
            });
          }), h.complete.call(a[0]);
        });
      });
    }, t.fn.extend({
      addClass: function (e) {
        return function (i, s, n, o) {
          return s ? t.effects.animateClass.call(this, {
            add: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.addClass),
      removeClass: function (e) {
        return function (i, s, n, o) {
          return arguments.length > 1 ? t.effects.animateClass.call(this, {
            remove: i
          }, s, n, o) : e.apply(this, arguments);
        };
      }(t.fn.removeClass),
      toggleClass: function (e) {
        return function (i, s, n, o, a) {
          return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
            add: i
          } : {
            remove: i
          }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
            toggle: i
          }, s, n, o);
        };
      }(t.fn.toggleClass),
      switchClass: function (e, i, s, n, o) {
        return t.effects.animateClass.call(this, {
          add: i,
          remove: e
        }, s, n, o);
      }
    });
  }(), function () {
    function e(e, i, s, n) {
      return t.isPlainObject(e) && (i = e, e = e.effect), e = {
        effect: e
      }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e;
    }

    function i(e) {
      return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0;
    }

    function s(t, e) {
      var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
      return {
        top: parseFloat(o[1]) || 0,
        right: "auto" === o[2] ? i : parseFloat(o[2]),
        bottom: "auto" === o[3] ? s : parseFloat(o[3]),
        left: parseFloat(o[4]) || 0
      };
    }

    t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
      return function (i) {
        return !!t(i).data(d) || e(i);
      };
    }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
      save: function (t, e) {
        for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]);
      },
      restore: function (t, e) {
        for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i));
      },
      setMode: function (t, e) {
        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
      },
      createWrapper: function (e) {
        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
        var i = {
          width: e.outerWidth(!0),
          height: e.outerHeight(!0),
          "float": e.css("float")
        },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
            n = {
          width: e.width(),
          height: e.height()
        },
            o = document.activeElement;

        try {
          o.id;
        } catch (a) {
          o = document.body;
        }

        return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
          position: "relative"
        }), e.css({
          position: "relative"
        })) : (t.extend(i, {
          position: e.css("position"),
          zIndex: e.css("z-index")
        }), t.each(["top", "left", "bottom", "right"], function (t, s) {
          i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
        }), e.css({
          position: "relative",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto"
        })), e.css(n), s.css(i).show();
      },
      removeWrapper: function (e) {
        var i = document.activeElement;
        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e;
      }
    }), t.extend(t.effects, {
      version: "1.12.1",
      define: function (e, i, s) {
        return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s;
      },
      scaledDimensions: function (t, e, i) {
        if (0 === e) return {
          height: 0,
          width: 0,
          outerHeight: 0,
          outerWidth: 0
        };
        var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;
        return {
          height: t.height() * n,
          width: t.width() * s,
          outerHeight: t.outerHeight() * n,
          outerWidth: t.outerWidth() * s
        };
      },
      clipToBox: function (t) {
        return {
          width: t.clip.right - t.clip.left,
          height: t.clip.bottom - t.clip.top,
          left: t.clip.left,
          top: t.clip.top
        };
      },
      unshift: function (t, e, i) {
        var s = t.queue();
        e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
      },
      saveStyle: function (t) {
        t.data(u, t[0].style.cssText);
      },
      restoreStyle: function (t) {
        t[0].style.cssText = t.data(u) || "", t.removeData(u);
      },
      mode: function (t, e) {
        var i = t.is(":hidden");
        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e;
      },
      getBaseline: function (t, e) {
        var i, s;

        switch (t[0]) {
          case "top":
            i = 0;
            break;

          case "middle":
            i = .5;
            break;

          case "bottom":
            i = 1;
            break;

          default:
            i = t[0] / e.height;
        }

        switch (t[1]) {
          case "left":
            s = 0;
            break;

          case "center":
            s = .5;
            break;

          case "right":
            s = 1;
            break;

          default:
            s = t[1] / e.width;
        }

        return {
          x: s,
          y: i
        };
      },
      createPlaceholder: function (e) {
        var i,
            s = e.css("position"),
            n = e.position();
        return e.css({
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
          display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
          visibility: "hidden",
          marginTop: e.css("marginTop"),
          marginBottom: e.css("marginBottom"),
          marginLeft: e.css("marginLeft"),
          marginRight: e.css("marginRight"),
          "float": e.css("float")
        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
          position: s,
          left: n.left,
          top: n.top
        }), i;
      },
      removePlaceholder: function (t) {
        var e = c + "placeholder",
            i = t.data(e);
        i && (i.remove(), t.removeData(e));
      },
      cleanUp: function (e) {
        t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
      },
      setTransition: function (e, i, s, n) {
        return n = n || {}, t.each(i, function (t, i) {
          var o = e.cssUnit(i);
          o[0] > 0 && (n[i] = o[0] * s + o[1]);
        }), n;
      }
    }), t.fn.extend({
      effect: function () {
        function i(e) {
          function i() {
            r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a();
          }

          function a() {
            t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e();
          }

          var r = t(this);
          s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a);
        }

        var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            r = a || "fx",
            h = s.complete,
            l = s.mode,
            c = [],
            u = function (e) {
          var i = t(this),
              s = t.effects.mode(i, l) || o;
          i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e();
        };

        return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
          h && h.call(this);
        }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i);
      },
      show: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "show", this.effect.call(this, n);
        };
      }(t.fn.show),
      hide: function (t) {
        return function (s) {
          if (i(s)) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "hide", this.effect.call(this, n);
        };
      }(t.fn.hide),
      toggle: function (t) {
        return function (s) {
          if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
          var n = e.apply(this, arguments);
          return n.mode = "toggle", this.effect.call(this, n);
        };
      }(t.fn.toggle),
      cssUnit: function (e) {
        var i = this.css(e),
            s = [];
        return t.each(["em", "px", "%", "pt"], function (t, e) {
          i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
        }), s;
      },
      cssClip: function (t) {
        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this);
      },
      transfer: function (e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            c = {
          top: l.top - r,
          left: l.left - h,
          height: n.innerHeight(),
          width: n.innerWidth()
        },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
          top: u.top - r,
          left: u.left - h,
          height: s.innerHeight(),
          width: s.innerWidth(),
          position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function () {
          d.remove(), t.isFunction(i) && i();
        });
      }
    }), t.fx.step.clip = function (e) {
      e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
        top: e.pos * (e.end.top - e.start.top) + e.start.top,
        right: e.pos * (e.end.right - e.start.right) + e.start.right,
        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
        left: e.pos * (e.end.left - e.start.left) + e.start.left
      });
    };
  }(), function () {
    var e = {};
    t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
      e[i] = function (e) {
        return Math.pow(e, t + 2);
      };
    }), t.extend(e, {
      Sine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      Circ: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      Elastic: function (t) {
        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
      },
      Back: function (t) {
        return t * t * (3 * t - 2);
      },
      Bounce: function (t) {
        for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);

        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
      }
    }), t.each(e, function (e, i) {
      t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
        return 1 - i(1 - t);
      }, t.easing["easeInOut" + e] = function (t) {
        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
      };
    });
  }();
  var f = t.effects;
  t.effects.define("blind", "hide", function (e, i) {
    var s = {
      up: ["bottom", "top"],
      vertical: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      horizontal: ["right", "left"],
      right: ["left", "right"]
    },
        n = t(this),
        o = e.direction || "up",
        a = n.cssClip(),
        r = {
      clip: t.extend({}, a)
    },
        h = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("bounce", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = e.mode,
        h = "hide" === r,
        l = "show" === r,
        c = e.direction || "up",
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left",
        _ = "up" === c || "left" === c,
        v = 0,
        b = a.queue().length;

    for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
      opacity: 1
    }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;

    h && (s = {
      opacity: 0
    }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1);
  }), t.effects.define("clip", "hide", function (e, i) {
    var s,
        n = {},
        o = t(this),
        a = e.direction || "vertical",
        r = "both" === a,
        h = r || "horizontal" === a,
        l = r || "vertical" === a;
    s = o.cssClip(), n.clip = {
      top: l ? (s.bottom - s.top) / 2 : s.top,
      right: h ? (s.right - s.left) / 2 : s.right,
      bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
      left: h ? (s.right - s.left) / 2 : s.left
    }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("drop", "hide", function (e, i) {
    var s,
        n = t(this),
        o = e.mode,
        a = "show" === o,
        r = e.direction || "left",
        h = "up" === r || "down" === r ? "top" : "left",
        l = "up" === r || "left" === r ? "-=" : "+=",
        c = "+=" === l ? "-=" : "+=",
        u = {
      opacity: 0
    };
    t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("explode", "hide", function (e, i) {
    function s() {
      b.push(this), b.length === u * d && n();
    }

    function n() {
      p.css({
        visibility: "visible"
      }), t(b).remove(), i();
    }

    var o,
        a,
        r,
        h,
        l,
        c,
        u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        d = u,
        p = t(this),
        f = e.mode,
        g = "show" === f,
        m = p.show().css("visibility", "hidden").offset(),
        _ = Math.ceil(p.outerWidth() / d),
        v = Math.ceil(p.outerHeight() / u),
        b = [];

    for (o = 0; u > o; o++) for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
      position: "absolute",
      visibility: "visible",
      left: -a * _,
      top: -o * v
    }).parent().addClass("ui-effects-explode").css({
      position: "absolute",
      overflow: "hidden",
      width: _,
      height: v,
      left: r + (g ? l * _ : 0),
      top: h + (g ? c * v : 0),
      opacity: g ? 0 : 1
    }).animate({
      left: r + (g ? 0 : l * _),
      top: h + (g ? 0 : c * v),
      opacity: g ? 1 : 0
    }, e.duration || 500, e.easing, s);
  }), t.effects.define("fade", "toggle", function (e, i) {
    var s = "show" === e.mode;
    t(this).css("opacity", s ? 0 : 1).animate({
      opacity: s ? 1 : 0
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("fold", "hide", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = e.size || 15,
        h = /([0-9]+)%/.exec(r),
        l = !!e.horizFirst,
        c = l ? ["right", "bottom"] : ["bottom", "right"],
        u = e.duration / 2,
        d = t.effects.createPlaceholder(s),
        p = s.cssClip(),
        f = {
      clip: t.extend({}, p)
    },
        g = {
      clip: t.extend({}, p)
    },
        m = [p[c[0]], p[c[1]]],
        _ = s.queue().length;
    h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i();
    }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4);
  }), t.effects.define("highlight", "show", function (e, i) {
    var s = t(this),
        n = {
      backgroundColor: s.css("backgroundColor")
    };
    "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  }), t.effects.define("size", function (e, i) {
    var s,
        n,
        o,
        a = t(this),
        r = ["fontSize"],
        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        c = e.mode,
        u = "effect" !== c,
        d = e.scale || "both",
        p = e.origin || ["middle", "center"],
        f = a.css("position"),
        g = a.position(),
        m = t.effects.scaledDimensions(a),
        _ = e.from || m,
        v = e.to || t.effects.scaledDimensions(a, 0);

    t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width
      }
    }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
      var i = t(this),
          s = t.effects.scaledDimensions(i),
          o = {
        height: s.height * n.from.y,
        width: s.width * n.from.x,
        outerHeight: s.outerHeight * n.from.y,
        outerWidth: s.outerWidth * n.from.x
      },
          a = {
        height: s.height * n.to.y,
        width: s.width * n.to.x,
        outerHeight: s.height * n.to.y,
        outerWidth: s.width * n.to.x
      };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
        u && t.effects.restoreStyle(i);
      });
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function () {
        var e = a.offset();
        0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i();
      }
    });
  }), t.effects.define("scale", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
        a = t.extend(!0, {
      from: t.effects.scaledDimensions(s),
      to: t.effects.scaledDimensions(s, o, e.direction || "both"),
      origin: e.origin || ["middle", "center"]
    }, e);
    e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
  }), t.effects.define("puff", "hide", function (e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
    });
    t.effects.effect.scale.call(this, s, i);
  }), t.effects.define("pulsate", "show", function (e, i) {
    var s = t(this),
        n = e.mode,
        o = "show" === n,
        a = "hide" === n,
        r = o || a,
        h = 2 * (e.times || 5) + (r ? 1 : 0),
        l = e.duration / h,
        c = 0,
        u = 1,
        d = s.queue().length;

    for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
      opacity: c
    }, l, e.easing), c = 1 - c;

    s.animate({
      opacity: c
    }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1);
  }), t.effects.define("shake", function (e, i) {
    var s = 1,
        n = t(this),
        o = e.direction || "left",
        a = e.distance || 20,
        r = e.times || 3,
        h = 2 * r + 1,
        l = Math.round(e.duration / h),
        c = "up" === o || "down" === o ? "top" : "left",
        u = "up" === o || "left" === o,
        d = {},
        p = {},
        f = {},
        g = n.queue().length;

    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);

    n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1);
  }), t.effects.define("slide", "show", function (e, i) {
    var s,
        n,
        o = t(this),
        a = {
      up: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      right: ["left", "right"]
    },
        r = e.mode,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        c = "up" === h || "left" === h,
        u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
        d = {};
    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    });
  });
  var f;
  t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function (e, i) {
    t(this).transfer(e, i);
  })), t.ui.focusable = function (i, s) {
    var n,
        o,
        a,
        r,
        h,
        l = i.nodeName.toLowerCase();
    return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)));
  }, t.extend(t.expr[":"], {
    focusable: function (e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"));
    }
  }), t.ui.focusable, t.fn.form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
  }, t.ui.formResetMixin = {
    _formResetHandler: function () {
      var e = t(this);
      setTimeout(function () {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function () {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t);
      }
    },
    _unbindFormResetHandler: function () {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
      }
    }
  }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
    function s(e, i, s, o) {
      return t.each(n, function () {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
      }), i;
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        o = i.toLowerCase(),
        a = {
      innerWidth: t.fn.innerWidth,
      innerHeight: t.fn.innerHeight,
      outerWidth: t.fn.outerWidth,
      outerHeight: t.fn.outerHeight
    };
    t.fn["inner" + i] = function (e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
        t(this).css(o, s(this, e) + "px");
      });
    }, t.fn["outer" + i] = function (e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
        t(this).css(o, s(this, e, !0, n) + "px");
      });
    };
  }), t.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.escapeSelector = function () {
    var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
    return function (e) {
      return e.replace(t, "\\$1");
    };
  }(), t.fn.labels = function () {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n));
  }, t.fn.scrollParent = function (e) {
    var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents().filter(function () {
      var e = t(this);
      return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
    }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
  }, t.extend(t.expr[":"], {
    tabbable: function (e) {
      var i = t.attr(e, "tabindex"),
          s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s);
    }
  }), t.fn.extend({
    uniqueId: function () {
      var t = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++t);
        });
      };
    }(),
    removeUniqueId: function () {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
      });
    }
  }), t.widget("ui.accordion", {
    version: "1.12.1",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function () {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function () {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : t()
      };
    },
    _createIcons: function () {
      var e,
          i,
          s = this.options.icons;
      s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    },
    _destroyIcons: function () {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    },
    _destroy: function () {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
    },
    _setOption: function (t, e) {
      return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0);
    },
    _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
    },
    _keydown: function (e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(e.target),
            o = !1;

        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(n + 1) % s];
            break;

          case i.LEFT:
          case i.UP:
            o = this.headers[(n - 1 + s) % s];
            break;

          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);

            break;

          case i.HOME:
            o = this.headers[0];
            break;

          case i.END:
            o = this.headers[s - 1];
        }

        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault());
      }
    },
    _panelKeyDown: function (e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
    },
    refresh: function () {
      var e = this.options;
      this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function () {
      var t = this.headers,
          e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    },
    _refresh: function () {
      var e,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var e = t(this),
            i = e.uniqueId().attr("id"),
            s = e.next(),
            n = s.uniqueId().attr("id");
        e.attr("aria-controls", n), s.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
        var i = t(this),
            s = i.css("position");
        "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
      }), this.headers.each(function () {
        e -= t(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
        var i = t(this).is(":visible");
        i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
      }).height(e));
    },
    _activate: function (e) {
      var i = this._findActive(e)[0];

      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function (e) {
      return "number" == typeof e ? this.headers.eq(e) : t();
    },
    _setupEvents: function (e) {
      var i = {
        keydown: "_keydown"
      };
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function (e) {
      var i,
          s,
          n = this.options,
          o = this.active,
          a = t(e.currentTarget),
          r = a[0] === o[0],
          h = r && n.collapsible,
          l = h ? t() : a.next(),
          c = o.next(),
          u = {
        oldHeader: o,
        oldPanel: c,
        newHeader: h ? t() : a,
        newPanel: l
      };
      e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")));
    },
    _toggle: function (e) {
      var i = e.newPanel,
          s = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
        "aria-hidden": "true"
      }), s.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : i.length && this.headers.filter(function () {
        return 0 === parseInt(t(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _animate: function (t, e, i) {
      var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css("box-sizing"),
          l = t.length && (!e.length || t.index() < e.index()),
          c = this.options.animate || {},
          u = l && c.down || c,
          d = function () {
        a._toggleComplete(i);
      };

      return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function (t, e) {
          e.now = Math.round(t);
        }
      }), t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: d,
        step: function (t, i) {
          i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0);
        }
      }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d);
    },
    _toggleComplete: function (t) {
      var e = t.oldPanel,
          i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
    }
  }), t.ui.safeActiveElement = function (t) {
    var e;

    try {
      e = t.activeElement;
    } catch (i) {
      e = t.body;
    }

    return e || (e = t.body), e.nodeName || (e = t.body), e;
  }, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function () {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function (t) {
          t.preventDefault();
        },
        "click .ui-menu-item": function (e) {
          var i = t(e.target),
              s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function (e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
                s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s));
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function (t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function (e) {
          this._delay(function () {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function (t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function () {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
          i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove();
      });
    },
    _keydown: function (e) {
      var i,
          s,
          n,
          o,
          a = !0;

      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;

        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;

        case t.ui.keyCode.HOME:
          this._move("first", "first", e);

          break;

        case t.ui.keyCode.END:
          this._move("last", "last", e);

          break;

        case t.ui.keyCode.UP:
          this.previous(e);
          break;

        case t.ui.keyCode.DOWN:
          this.next(e);
          break;

        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;

        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;

        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);

          break;

        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;

        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      a && e.preventDefault();
    },
    _activate: function (t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    },
    refresh: function () {
      var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          h = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"));
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content");
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function () {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function (t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");

        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
      }

      this._super(t, e);
    },
    _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    focus: function (t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      });
    },
    _scrollIntoView: function (e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
    },
    blur: function (t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function (t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function (e) {
      var i = t.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function (e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s;
      }, this.delay);
    },
    _close: function (t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function (e) {
      return !t(e.target).closest(".ui-menu").length;
    },
    _isDivider: function (t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function (t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function (t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function (t) {
      this._move("next", "first", t);
    },
    previous: function (t) {
      this._move("prev", "last", t);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function (t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function (e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = t(this), 0 > i.offset().top - s - n;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0);
    },
    previousPage: function (e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = t(this), i.offset().top - s + n > 0;
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0);
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function (e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
    },
    _filterMenuItems: function (e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function () {
      var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function (n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;

          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;

            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;

            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;

            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;

            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;

            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;

            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;

            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function (s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;

          if (!i) {
            var n = t.ui.keyCode;

            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);

                break;

              case n.PAGE_DOWN:
                this._move("nextPage", s);

                break;

              case n.UP:
                this._keyEvent("previous", s);

                break;

              case n.DOWN:
                this._keyEvent("next", s);

            }
          }
        },
        input: function (t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0);
        },
        focus: function () {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function (t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0);
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function (e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        },
        menufocus: function (e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            t(e.target).trigger(e.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0);
        },
        menuselect: function (e, i) {
          var s = i.item.data("ui-autocomplete-item"),
              n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
            this.previous = n, this.selectedItem = s;
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s;
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function (t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function (e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
    },
    _closeOnClickOutside: function (t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _initSource: function () {
      var e,
          i,
          s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
        s(t.ui.autocomplete.filter(e, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function (t) {
            n(t);
          },
          error: function () {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function (t) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var e = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;

        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t));
      }, this.options.delay);
    },
    search: function (t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0;
    },
    _search: function (t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response());
    },
    _response: function () {
      var e = ++this.requestIndex;
      return t.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function (t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function (t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function (t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    },
    _change: function (t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      });
    },
    _normalize: function (e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        });
      });
    },
    _suggest: function (e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function () {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function (e, i) {
      var s = this;
      t.each(i, function (t, i) {
        s._renderItemData(e, i);
      });
    },
    _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function (e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
    },
    _move: function (t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function (t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function (t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function (e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function (t) {
        return s.test(t.label || t.value || t);
      });
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function (t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function (e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
    }
  }), t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    },
    _initWidgets: function () {
      var e = this,
          i = [];
      t.each(this.options.items, function (s, n) {
        var o,
            a = {};
        return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
          var e = t(this);
          e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
          classes: {}
        }, e.element.find(n).each(function () {
          var n = t(this),
              o = n[s]("instance"),
              r = t.widget.extend({}, a);

          if ("button" !== s || !n.parent(".ui-spinner").length) {
            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
            var h = n[s]("widget");
            t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]);
          }
        })), void 0) : void 0;
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this),
            s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
          s = this._buildSimpleOptions(e, "label").classes.label;

      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
          s = {
        classes: {}
      };
      return s.classes[e] = {
        middle: "",
        first: "ui-corner-" + (i ? "top" : "left"),
        last: "ui-corner-" + (i ? "bottom" : "right"),
        only: "ui-corner-all"
      }[t], s;
    },
    _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");

      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        }[t]
      };
    },
    _resolveClassesValues: function (e, i) {
      var s = {};
      return t.each(e, function (n) {
        var o = i.options.classes[n] || "";
        o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ");
      }), s;
    },
    _setOption: function (t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0);
    },
    refresh: function () {
      var e,
          i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
        var n = e[s]().data("ui-controlgroup-data");

        if (n && i["_" + n.widgetName + "Options"]) {
          var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
          o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o);
        } else i._updateCornerClass(e[s](), s);
      }), this._callChildMethod("refresh"));
    }
  }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function () {
      var e,
          i,
          s = this,
          n = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
      }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n;
    },
    _create: function () {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function () {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
        },
        blur: function () {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
        }
      });
    },
    _readType: function () {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
    },
    _enhance: function () {
      this._updateIcon(this.element[0].checked);
    },
    widget: function () {
      return this.label;
    },
    _getRadioGroup: function () {
      var e,
          i = this.element[0].name,
          s = "input[name='" + t.ui.escapeSelector(i) + "']";
      return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
        return 0 === t(this).form().length;
      }), e.not(this.element)) : t([]);
    },
    _toggleClasses: function () {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
        var e = t(this).checkboxradio("instance");
        e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    },
    _destroy: function () {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    },
    _setOption: function (t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0;
    },
    _updateIcon: function (e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    },
    _updateLabel: function () {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
    },
    refresh: function () {
      var t = this.element[0].checked,
          e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
        disabled: e
      });
    }
  }]), t.ui.checkboxradio, t.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function () {
      var t,
          e = this._super() || {};
      return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
    },
    _create: function () {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function (e) {
          e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
        }
      });
    },
    _enhance: function () {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function () {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    },
    _updateIcon: function (e, i) {
      var s = "iconPosition" !== e,
          n = s ? this.options.iconPosition : i,
          o = "top" === n || "bottom" === n;
      this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n));
    },
    _destroy: function () {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function (t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function (t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function (t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function (t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur());
    },
    refresh: function () {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
        disabled: t
      }), this._updateTooltip();
    }
  }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function () {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    },
    _setOption: function (t, e) {
      return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0);
    }
  }), t.fn.button = function (e) {
    return function () {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
        icon: !1
      }) : this.checkboxradio.apply(this, arguments));
    };
  }(t.fn.button), t.fn.buttonset = function () {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments));
  }), t.ui.button, t.extend(t.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var m;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function (e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
    },
    _newInst: function (e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, i) {
      var s,
          n,
          o,
          a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");

      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: o,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
        src: o,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
      }));
    },
    _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");

        a.match(/[DM]/) && (e = function (t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);

          return s;
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r,
          h,
          l,
          c,
          u,
          d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
    },
    _destroyDatepicker: function (e) {
      var i,
          s = t(e),
          n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null));
    },
    _enableDatepicker: function (e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    },
    _disableDatepicker: function (e) {
      var i,
          s,
          n = t(e),
          o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;

      for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;

      return !1;
    },
    _getInst: function (e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n,
          o,
          r,
          h,
          l = this._getInst(e);

      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);

      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);

      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);

      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function (e) {
      var i,
          s,
          n,
          o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");

      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;

        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;

        case 27:
          t.datepicker._hideDatepicker();

          break;

        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");

          break;

        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;

        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;

        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
          break;

        default:
          a = !1;
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (e) {
      var i,
          s,
          n = t.datepicker._getInst(e.target);

      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    },
    _doKeyUp: function (e) {
      var i,
          s = t.datepicker._getInst(e.target);

      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
      } catch (n) {}
      return !0;
    },
    _showDatepicker: function (e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
          return r |= "fixed" === t(this).css("position"), !r;
        }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
      }
    },
    _updateDatepicker: function (e) {
      this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);

      var i,
          s = this._getNumberOfMonths(e),
          n = s[1],
          a = 17,
          r = e.dpDiv.find("." + this._dayOverClass + " a");

      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
          l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i;
    },
    _findPos: function (e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];

      return i = t(e).offset(), [i.left, i.top];
    },
    _hideDatepicker: function (e) {
      var i,
          s,
          n,
          o,
          a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function () {
        t.datepicker._tidyDialog(a);
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
            s = t.datepicker._getInst(i[0]);

        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
    },
    _gotoToday: function (e) {
      var i,
          s = t(e),
          n = this._getInst(s[0]);

      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
          o = this._getInst(n[0]);

      o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
    },
    _selectDay: function (e, i, s, n) {
      var o,
          a = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
    },
    _clearDate: function (e) {
      var i = t(e);

      this._selectDate(i, "");
    },
    _selectDate: function (e, i) {
      var s,
          n = t(e),
          o = this._getInst(n[0]);

      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null);
    },
    _updateAlternate: function (e) {
      var i,
          s,
          n,
          o = this._get(e, "altField");

      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    },
    iso8601Week: function (t) {
      var e,
          i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;

      var n,
          o,
          a,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
          u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          g = -1,
          m = -1,
          _ = -1,
          v = -1,
          b = !1,
          y = function (t) {
        var i = e.length > n + 1 && e.charAt(n + 1) === t;
        return i && n++, i;
      },
          w = function (t) {
        var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);
        if (!a) throw "Missing number at position " + h;
        return h += a[0].length, parseInt(a[0], 10);
      },
          k = function (e, s, n) {
        var o = -1,
            a = t.map(y(e) ? n : s, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });
        if (t.each(a, function (t, e) {
          var s = e[1];
          return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0;
        }), -1 !== o) return o + 1;
        throw "Unknown name at position " + h;
      },
          x = function () {
        if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
        h++;
      };

      for (n = 0; e.length > n; n++) if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;else switch (e.charAt(n)) {
        case "d":
          _ = w("d");
          break;

        case "D":
          k("D", u, d);
          break;

        case "o":
          v = w("o");
          break;

        case "m":
          m = w("m");
          break;

        case "M":
          m = k("M", p, f);
          break;

        case "y":
          g = w("y");
          break;

        case "@":
          r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
          break;

        case "!":
          r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
          break;

        case "'":
          y("'") ? x() : b = !0;
          break;

        default:
          x();
      }

      if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v;;) {
        if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
        m++, _ -= o;
      }
      if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return "";

      var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function (e) {
        var i = t.length > s + 1 && t.charAt(s + 1) === e;
        return i && s++, i;
      },
          l = function (t, e, i) {
        var s = "" + e;
        if (h(t)) for (; i > s.length;) s = "0" + s;
        return s;
      },
          c = function (t, e, i, s) {
        return h(t) ? s[e] : i[e];
      },
          u = "",
          d = !1;

      if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;else switch (t.charAt(s)) {
        case "d":
          u += l("d", e.getDate(), 2);
          break;

        case "D":
          u += c("D", e.getDay(), n, o);
          break;

        case "o":
          u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
          break;

        case "m":
          u += l("m", e.getMonth() + 1, 2);
          break;

        case "M":
          u += c("M", e.getMonth(), a, r);
          break;

        case "y":
          u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
          break;

        case "@":
          u += e.getTime();
          break;

        case "!":
          u += 1e4 * e.getTime() + this._ticksTo1970;
          break;

        case "'":
          h("'") ? u += "'" : d = !0;
          break;

        default:
          u += t.charAt(s);
      }
      return u;
    },
    _possibleChars: function (t) {
      var e,
          i = "",
          s = !1,
          n = function (i) {
        var s = t.length > e + 1 && t.charAt(e + 1) === i;
        return s && e++, s;
      };

      for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {
        case "d":
        case "m":
        case "y":
        case "@":
          i += "0123456789";
          break;

        case "D":
        case "M":
          return null;

        case "'":
          n("'") ? i += "'" : s = !0;
          break;

        default:
          i += t.charAt(e);
      }

      return i;
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);

        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }

        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
        var e = new Date();
        return e.setDate(e.getDate() + t), e;
      },
          o = function (i) {
        try {
          return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
        } catch (s) {}

        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
          switch (l[2] || "d") {
            case "d":
            case "D":
              r += parseInt(l[1], 10);
              break;

            case "w":
            case "W":
              r += 7 * parseInt(l[1], 10);
              break;

            case "m":
            case "M":
              a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
              break;

            case "y":
            case "Y":
              o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
          }

          l = h.exec(i);
        }

        return new Date(o, a, r);
      },
          a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());

      return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function (t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));

      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function (t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function (e) {
      var i = this._get(e, "stepMonths"),
          s = "#" + e.id.replace(/\\\\/g, "\\");

      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, "M");
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, "M");
          },
          hide: function () {
            t.datepicker._hideDatepicker();
          },
          today: function () {
            t.datepicker._gotoToday(s);
          },
          selectDay: function () {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function (t) {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          k,
          x,
          C,
          D,
          I,
          T,
          P,
          M,
          S,
          H,
          z,
          O,
          A,
          N,
          W,
          E,
          F,
          L,
          R = new Date(),
          B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
          Y = this._get(t, "isRTL"),
          j = this._get(t, "showButtonPanel"),
          q = this._get(t, "hideIfNoPrevNext"),
          K = this._get(t, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"),
          $ = this._get(t, "stepMonths"),
          X = 1 !== U[0] || 1 !== U[1],
          G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          Q = this._getMinMaxDate(t, "min"),
          J = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - V,
          te = t.drawYear;

      if (0 > Z && (Z += 12, te--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);

      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
            if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
              case 0:
                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                break;

              case U[1] - 1:
                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                break;

              default:
                T += " ui-datepicker-group-middle", I = "";
            }
            T += "'>";
          }

          for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";

          for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
            for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);

            T += W + "</tr>";
          }

          Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T;
        }

        y += x;
      }

      return y += l, t._keyEvent = !1, y;
    },
    _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
      var h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m = this._get(t, "changeMonth"),
          _ = this._get(t, "changeYear"),
          v = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          y = "";

      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");

        y += "</select>";
      }
      if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function (t) {
          var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(e) ? d : e;
        }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";

        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
      }
      return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));

      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = i && i > e ? i : e;

      return s && n > s ? s : n;
    },
    _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");

      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");

      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));

      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
    },
    _isInRange: function (t, e) {
      var i,
          s,
          n = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          h = this._get(t, "yearRange");

      return h && (i = h.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");

      return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      };
    },
    _formatDate: function (t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
    }
  }), t.fn.datepicker = function (e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
  }, t.datepicker = new s(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());

  var _ = !1;

  t(document).on("mouseup", function () {
    _ = !1;
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function () {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function () {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function (e) {
      if (!_) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
            s = 1 === e.which,
            n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return i._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return i._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0;
      }
    },
    _mouseMove: function (e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
      }

      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
    },
    _mouseUp: function (e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault();
    },
    _mouseDistanceMet: function (t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function () {
      return this.mouseDelayMet;
    },
    _mouseStart: function () {},
    _mouseDrag: function () {},
    _mouseStop: function () {},
    _mouseCapture: function () {
      return !0;
    }
  }), t.ui.plugin = {
    add: function (e, i, s) {
      var n,
          o = t.ui[e].prototype;

      for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]);
    },
    call: function (t, e, i, s) {
      var n,
          o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i);
    }
  }, t.ui.safeBlur = function (e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
  }, t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function (t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function () {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0);
    },
    _mouseCapture: function (e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    },
    _blockFrames: function (e) {
      this.iframeBlocks = this.document.find(e).map(function () {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function (e) {
      var i = t.ui.safeActiveElement(this.document[0]),
          s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i);
    },
    _mouseStart: function (e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === t(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
    },
    _refreshOffsets: function (t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      };
    },
    _mouseDrag: function (e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();

        if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
        this.position = s.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
    },
    _mouseStop: function (e) {
      var i = this,
          s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", e) !== !1 && i._clear();
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1;
    },
    _mouseUp: function (e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
    },
    cancel: function () {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this;
    },
    _getHandle: function (e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function () {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function () {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function (e) {
      var i = this.options,
          s = t.isFunction(i.helper),
          n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    },
    _setPositionRelative: function () {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function (e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _isRootNode: function (t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function () {
      var e = this.offsetParent.offset(),
          i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function () {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);

      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function () {
      var e,
          i,
          s,
          n = this.options,
          o = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    },
    _convertPositionTo: function (t, e) {
      e || (e = this.position);

      var i = "absolute" === t ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);

      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      };
    },
    _generatePosition: function (t, e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = t.pageX,
          l = t.pageY;

      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function () {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _trigger: function (e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s);
    },
    plugins: {},
    _uiHash: function () {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function (e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.sortables = [], t(s.options.connectToSortable).each(function () {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n));
      });
    },
    stop: function (e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
        var t = this;
        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n));
      });
    },
    drag: function (e, i, s) {
      t.each(s.sortables, function () {
        var n = !1,
            o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n;
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
          return i.helper[0];
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), t.ui.plugin.add("draggable", "cursor", {
    start: function (e, i, s) {
      var n = t("body"),
          o = s.options;
      n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor);
    },
    stop: function (e, i, s) {
      var n = s.options;
      n._cursor && t("body").css("cursor", n._cursor);
    }
  }), t.ui.plugin.add("draggable", "opacity", {
    start: function (e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity);
    },
    stop: function (e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css("opacity", n._opacity);
    }
  }), t.ui.plugin.add("draggable", "scroll", {
    start: function (t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function (e, i, s) {
      var n = s.options,
          o = !1,
          a = s.scrollParentNotHidden[0],
          r = s.document[0];
      a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e);
    }
  }), t.ui.plugin.add("draggable", "snap", {
    start: function (e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var e = t(this),
            i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left
        });
      });
    },
    drag: function (e, i, s) {
      var n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f = s.options,
          g = f.snapTolerance,
          m = i.offset.left,
          _ = m + s.helperProportions.width,
          v = i.offset.top,
          b = v + s.helperProportions.height;

      for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
        top: c - s.helperProportions.height,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h - s.helperProportions.width
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
        top: c,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u - s.helperProportions.height,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l - s.helperProportions.width
      }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = n || o || a || r || p);
    }
  }), t.ui.plugin.add("draggable", "stack", {
    start: function (e, i, s) {
      var n,
          o = s.options,
          a = t.makeArray(t(o.stack)).sort(function (e, i) {
        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
      });
      a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
        t(this).css("zIndex", n + e);
      }), this.css("zIndex", n + a.length));
    }
  }), t.ui.plugin.add("draggable", "zIndex", {
    start: function (e, i, s) {
      var n = t(i.helper),
          o = s.options;
      n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex);
    },
    stop: function (e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css("zIndex", n._zIndex);
    }
  }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function (t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function (t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function (e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;
      return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n);
    },
    _create: function () {
      var e,
          i = this.options,
          s = this;
      this._addClass("ui-resizable"), t.extend(this, {
        _aspectRatio: !!i.aspectRatio,
        aspectRatio: i.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
        i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show());
      }).on("mouseleave", function () {
        i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide());
      }), this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy();

      var e,
          i = function (e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      };

      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
        position: e.css("position"),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css("top"),
        left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    },
    _setOption: function (t, e) {
      switch (this._super(t, e), t) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;

        default:
      }
    },
    _setupHandles: function () {
      var e,
          i,
          s,
          n,
          o,
          a = this.options,
          r = this;
      if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
        zIndex: a.zIndex
      }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      this._renderAxis = function (e) {
        var i, s, n, o;
        e = e || this.element;

        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
          mousedown: r._mouseDown
        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se");
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function () {
      this._handles.remove();
    },
    _mouseCapture: function (e) {
      var i,
          s,
          n = !1;

      for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);

      return !this.options.disabled && n;
    },
    _mouseStart: function (e) {
      var i,
          s,
          n,
          o = this.options,
          a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: a.width(),
        height: a.height()
      }, this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight()
      } : {
        width: a.width(),
        height: a.height()
      }, this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: e.pageX,
        top: e.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
    },
    _mouseDrag: function (e) {
      var i,
          s,
          n = this.originalMousePosition,
          o = this.axis,
          a = e.pageX - n.left || 0,
          r = e.pageY - n.top || 0,
          h = this._change[o];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1;
    },
    _mouseStop: function (e) {
      this.resizing = !1;
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          c = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
        width: c.helper.width() - o,
        height: c.helper.height() - n
      }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
        top: h,
        left: r
      })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function () {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function () {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
    },
    _updateVirtualBoundaries: function (t) {
      var e,
          i,
          s,
          n,
          o,
          a = this.options;
      o = {
        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o;
    },
    _updateCache: function (t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function (t) {
      var e = this.position,
          i = this.size,
          s = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
    },
    _respectSize: function (t) {
      var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    },
    _getPaddingPlusBorderDimensions: function (t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;

      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      };
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
        height: i.height() - this.outerDimensions.height || 0,
        width: i.width() - this.outerDimensions.width || 0
      });
    },
    _renderProxy: function () {
      var e = this.element,
          i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function (t, e) {
        return {
          width: this.originalSize.width + e
        };
      },
      w: function (t, e) {
        var i = this.originalSize,
            s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e
        };
      },
      n: function (t, e, i) {
        var s = this.originalSize,
            n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        };
      },
      s: function (t, e, i) {
        return {
          height: this.originalSize.height + i
        };
      },
      se: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      },
      sw: function (e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      },
      ne: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]));
      },
      nw: function (e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]));
      }
    },
    _propagate: function (e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), t.ui.plugin.add("resizable", "animate", {
    stop: function (e) {
      var i = t(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          o = n.length && /textarea/i.test(n[0].nodeName),
          a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = o ? 0 : i.sizeDiff.width,
          h = {
        width: i.size.width - r,
        height: i.size.height - a
      },
          l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function () {
          var s = {
            width: parseFloat(i.element.css("width")),
            height: parseFloat(i.element.css("height")),
            top: parseFloat(i.element.css("top")),
            left: parseFloat(i.element.css("left"))
          };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", e);
        }
      });
    }
  }), t.ui.plugin.add("resizable", "containment", {
    start: function () {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = t(this).resizable("instance"),
          l = h.options,
          c = h.element,
          u = l.containment,
          d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
      d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: t(document),
        left: 0,
        top: 0,
        width: t(document).width(),
        height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
        i[t] = h._num(e.css("padding" + s));
      }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
        height: e.innerHeight() - i[3],
        width: e.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
        element: d,
        left: s.left,
        top: s.top,
        width: a,
        height: r
      }));
    },
    resize: function (e) {
      var i,
          s,
          n,
          o,
          a = t(this).resizable("instance"),
          r = a.options,
          h = a.containerOffset,
          l = a.position,
          c = a._aspectRatio || e.shiftKey,
          u = {
        top: 0,
        left: 0
      },
          d = a.containerElement,
          p = !0;
      d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
    },
    stop: function () {
      var e = t(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.containerPosition,
          o = e.containerElement,
          a = t(e.helper),
          r = a.offset(),
          h = a.outerWidth() - e.sizeDiff.width,
          l = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      });
    }
  }), t.ui.plugin.add("resizable", "alsoResize", {
    start: function () {
      var e = t(this).resizable("instance"),
          i = e.options;
      t(i.alsoResize).each(function () {
        var e = t(this);
        e.data("ui-resizable-alsoresize", {
          width: parseFloat(e.width()),
          height: parseFloat(e.height()),
          left: parseFloat(e.css("left")),
          top: parseFloat(e.css("top"))
        });
      });
    },
    resize: function (e, i) {
      var s = t(this).resizable("instance"),
          n = s.options,
          o = s.originalSize,
          a = s.originalPosition,
          r = {
        height: s.size.height - o.height || 0,
        width: s.size.width - o.width || 0,
        top: s.position.top - a.top || 0,
        left: s.position.left - a.left || 0
      };
      t(n.alsoResize).each(function () {
        var e = t(this),
            s = t(this).data("ui-resizable-alsoresize"),
            n = {},
            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        t.each(o, function (t, e) {
          var i = (s[e] || 0) + (r[e] || 0);
          i && i >= 0 && (n[e] = i || null);
        }), e.css(n);
      });
    },
    stop: function () {
      t(this).removeData("ui-resizable-alsoresize");
    }
  }), t.ui.plugin.add("resizable", "ghost", {
    start: function () {
      var e = t(this).resizable("instance"),
          i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: i.height,
        width: i.width,
        margin: 0,
        left: 0,
        top: 0
      }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper);
    },
    resize: function () {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({
        position: "relative",
        height: e.size.height,
        width: e.size.width
      });
    },
    stop: function () {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
    }
  }), t.ui.plugin.add("resizable", "grid", {
    resize: function () {
      var e,
          i = t(this).resizable("instance"),
          s = i.options,
          n = i.size,
          o = i.originalSize,
          a = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          c = h[1] || 1,
          u = Math.round((n.width - o.width) / l) * l,
          d = Math.round((n.height - o.height) / c) * c,
          p = o.width + u,
          f = o.height + d,
          g = s.maxWidth && p > s.maxWidth,
          m = s.maxHeight && f > s.maxHeight,
          _ = s.minWidth && s.minWidth > p,
          v = s.minHeight && s.minHeight > f;

      s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
    }
  }), t.ui.resizable, t.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function (e) {
          var i = t(this).css(e).offset().top;
          0 > i && t(this).css("top", e.top - i);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function () {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
    },
    _destroy: function () {
      var t,
          e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: t.noop,
    enable: t.noop,
    close: function (e) {
      var i = this;
      this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        i._trigger("close", e);
      }));
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (e, i) {
      var s = !1,
          n = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +t(this).css("z-index");
      }).get(),
          o = Math.max.apply(null, n);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s;
    },
    open: function () {
      var e = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        e._focusTabbable(), e._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"), void 0);
    },
    _focusTabbable: function () {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
    },
    _keepFocus: function (e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
            i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
        i || this._focusTabbable();
      }

      e.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function () {
      this.uiDialog = t("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function (e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;

          if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");
            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
              n.trigger("focus");
            }), e.preventDefault()) : (this._delay(function () {
              s.trigger("focus");
            }), e.preventDefault());
          }
        },
        mousedown: function (t) {
          this._moveToTop(t) && this._focusTabbable();
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      });
    },
    _createTitlebar: function () {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function (e) {
          t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
        }
      }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
        label: t("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function (t) {
          t.preventDefault(), this.close(t);
        }
      }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": e.attr("id")
      });
    },
    _title: function (t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function () {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    },
    _createButtons: function () {
      var e = this,
          i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
        var n, o;
        s = t.isFunction(s) ? {
          click: s,
          text: i
        } : s, s = t.extend({
          type: "button"
        }, s), n = s.click, o = {
          icon: s.icon,
          iconPosition: s.iconPosition,
          showLabel: s.showLabel,
          icons: s.icons,
          text: s.text
        }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
          n.apply(e.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    },
    _makeDraggable: function () {
      function e(t) {
        return {
          position: t.position,
          offset: t.offset
        };
      }

      var i = this,
          s = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function (s, n) {
          i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n));
        },
        drag: function (t, s) {
          i._trigger("drag", t, e(s));
        },
        stop: function (n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
              r = o.offset.top - i.document.scrollTop();
          s.position = {
            my: "left top",
            at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o));
        }
      });
    },
    _makeResizable: function () {
      function e(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size
        };
      }

      var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: a,
        start: function (s, n) {
          i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n));
        },
        resize: function (t, s) {
          i._trigger("resize", t, e(s));
        },
        stop: function (n, o) {
          var a = i.uiDialog.offset(),
              r = a.left - i.document.scrollLeft(),
              h = a.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: "left top",
            at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o));
        }
      }).css("position", o);
    },
    _trackFocus: function () {
      this._on(this.widget(), {
        focusin: function (e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target);
        }
      });
    },
    _makeFocusTarget: function () {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function () {
      var e = this._trackingInstances(),
          i = t.inArray(this, e);

      -1 !== i && e.splice(i, 1);
    },
    _trackingInstances: function () {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
    },
    _minHeight: function () {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    },
    _position: function () {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    },
    _setOptions: function (e) {
      var i = this,
          s = !1,
          n = {};
      t.each(e, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    },
    _setOption: function (e, i) {
      var s,
          n,
          o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
        label: t("<a>").text("" + this.options.closeText).html()
      }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function () {
      var t,
          e,
          i,
          s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var e = t(this);
        return t("<div>").css({
          position: "absolute",
          width: e.outerWidth(),
          height: e.outerHeight()
        }).appendTo(e.parent()).offset(e.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (e) {
      return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function () {
      if (this.options.modal) {
        var e = !0;
        this._delay(function () {
          e = !1;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function (t) {
            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          }
        }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    },
    _destroyOverlay: function () {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;
        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
      }
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function () {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    },
    _setOption: function (t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
    }
  }), t.ui.dialog, t.widget("ui.droppable", {
    version: "1.12.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function () {
      var e,
          i = this.options,
          s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
        return t.is(s);
      }, this.proportions = function () {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function (e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
    },
    _splice: function (t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
    },
    _destroy: function () {
      var e = t.ui.ddmanager.droppables[this.options.scope];

      this._splice(e);
    },
    _setOption: function (e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
        return t.is(i);
      };else if ("scope" === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i);
      }

      this._super(e, i);
    },
    _activate: function (e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
    },
    _deactivate: function (e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
    },
    _over: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
    },
    _out: function (e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
    },
    _drop: function (e, i) {
      var s = i || t.ui.ddmanager.current,
          n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = t(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
          offset: i.element.offset()
        }), i.options.tolerance, e) ? (n = !0, !1) : void 0;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1;
    },
    ui: function (t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      };
    },
    _addHoverClass: function () {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function () {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function () {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function () {
      this._removeClass("ui-droppable-active");
    }
  });

  var v = t.ui.intersect = function () {
    function t(t, e, i) {
      return t >= e && e + i > t;
    }

    return function (e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          a = (e.positionAbs || e.position.absolute).top + e.margins.top,
          r = o + e.helperProportions.width,
          h = a + e.helperProportions.height,
          l = i.offset.left,
          c = i.offset.top,
          u = l + i.proportions().width,
          d = c + i.proportions().height;

      switch (s) {
        case "fit":
          return o >= l && u >= r && a >= c && d >= h;

        case "intersect":
          return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;

        case "pointer":
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);

        case "touch":
          return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);

        default:
          return !1;
      }
    };
  }();

  t.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function (e, i) {
      var s,
          n,
          o = t.ui.ddmanager.droppables[e.options.scope] || [],
          a = i ? i.type : null,
          r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();

      t: for (s = 0; o.length > s; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
        for (n = 0; r.length > n; n++) if (r[n] === o[s].element[0]) {
          o[s].proportions().height = 0;
          continue t;
        }

        o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
          width: o[s].element[0].offsetWidth,
          height: o[s].element[0].offsetHeight
        }));
      }
    },
    drop: function (e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    },
    dragStart: function (e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function () {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      });
    },
    drag: function (e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s,
              n,
              o,
              a = v(e, this, this.options.tolerance, i),
              r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
          r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
            return t(this).droppable("instance").options.scope === n;
          }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    },
    dragStop: function (e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
    }
  }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1
    },
    _addActiveClass: function () {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    },
    _removeActiveClass: function () {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    },
    _addHoverClass: function () {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    },
    _removeHoverClass: function () {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    }
  }), t.ui.droppable, t.widget("ui.progressbar", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-progressbar": "ui-corner-all",
        "ui-progressbar-value": "ui-corner-left",
        "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function () {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    },
    _destroy: function () {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    },
    value: function (t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0);
    },
    _constrainedValue: function (t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t));
    },
    _setOptions: function (t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    },
    _setOption: function (t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
    },
    _setOptionDisabled: function (t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _percentage: function () {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function () {
      var e = this.options.value,
          i = this._percentage();

      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete");
    }
  }), t.widget("ui.selectable", t.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function () {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
          var i = t(this),
              s = i.offset(),
              n = {
            left: s.left - e.elementPos.left,
            top: s.top - e.elementPos.top
          };
          t.data(this, "selectable-item", {
            element: this,
            $element: i,
            left: n.left,
            top: n.top,
            right: n.left + i.outerWidth(),
            bottom: n.top + i.outerHeight(),
            startselected: !1,
            selected: i.hasClass("ui-selected"),
            selecting: i.hasClass("ui-selecting"),
            unselecting: i.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    },
    _destroy: function () {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    },
    _mouseStart: function (e) {
      var i = this,
          s = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var s = t.data(this, "selectable-item");
        s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
          unselecting: s.element
        }));
      }), t(e.target).parents().addBack().each(function () {
        var s,
            n = t.data(this, "selectable-item");
        return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
          selecting: n.element
        }) : i._trigger("unselecting", e, {
          unselecting: n.element
        }), !1) : void 0;
      }));
    },
    _mouseDrag: function (e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
        return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
          left: o,
          top: a,
          width: r - o,
          height: h - a
        }), this.selectees.each(function () {
          var i = t.data(this, "selectable-item"),
              l = !1,
              c = {};
          i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
            selecting: i.element
          }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
            unselecting: i.element
          }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
            unselecting: i.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function (e) {
      var i = this;
      return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
          unselected: s.element
        });
      }), t(".ui-selecting", this.element[0]).each(function () {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
          selected: s.element
        });
      }), this._trigger("stop", e), this.helper.remove(), !1;
    }
  }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
    version: "1.12.1",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function () {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t();
    },
    _drawButton: function () {
      var e,
          i = this,
          s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);

      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function (t) {
          this.button.focus(), t.preventDefault();
        }
      }), this.element.hide(), this.button = t("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        i._rendered || i._refreshMenu();
      });
    },
    _drawMenu: function () {
      var e = this;
      this.menu = t("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function (t, i) {
          t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
        },
        focus: function (t, i) {
          var s = i.item.data("ui-selectmenu-item");
          null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
            item: s
          }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"));
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    },
    refresh: function () {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    },
    _refreshMenu: function () {
      var t,
          e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    },
    open: function (t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
    },
    _position: function () {
      this.menuWrap.position(t.extend({
        of: this.button
      }, this.options.position));
    },
    close: function (t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
    },
    widget: function () {
      return this.button;
    },
    menuWidget: function () {
      return this.menu;
    },
    _renderButtonItem: function (e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
    },
    _renderMenu: function (e, i) {
      var s = this,
          n = "";
      t.each(i, function (i, o) {
        var a;
        o.optgroup !== n && (a = t("<li>", {
          text: o.optgroup
        }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o);
      });
    },
    _renderItemData: function (t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e);
    },
    _renderItem: function (e, i) {
      var s = t("<li>"),
          n = t("<div>", {
        title: i.element.attr("title")
      });
      return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e);
    },
    _setText: function (t, e) {
      e ? t.text(e) : t.html("&#160;");
    },
    _move: function (t, e) {
      var i,
          s,
          n = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s);
    },
    _getSelectedItem: function () {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    },
    _toggle: function (t) {
      this[this.isOpen ? "close" : "open"](t);
    },
    _setSelection: function () {
      var t;
      this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
    },
    _documentClick: {
      mousedown: function (e) {
        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
      }
    },
    _buttonEvents: {
      mousedown: function () {
        var t;
        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange();
      },
      click: function (t) {
        this._setSelection(), this._toggle(t);
      },
      keydown: function (e) {
        var i = !0;

        switch (e.keyCode) {
          case t.ui.keyCode.TAB:
          case t.ui.keyCode.ESCAPE:
            this.close(e), i = !1;
            break;

          case t.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);
            break;

          case t.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);
            break;

          case t.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);
            break;

          case t.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
            break;

          case t.ui.keyCode.LEFT:
            this._move("prev", e);

            break;

          case t.ui.keyCode.RIGHT:
            this._move("next", e);

            break;

          case t.ui.keyCode.HOME:
          case t.ui.keyCode.PAGE_UP:
            this._move("first", e);

            break;

          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_DOWN:
            this._move("last", e);

            break;

          default:
            this.menu.trigger(e), i = !1;
        }

        i && e.preventDefault();
      }
    },
    _selectFocusedItem: function (t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
    },
    _select: function (t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
        item: t
      }), t.index !== i && this._trigger("change", e, {
        item: t
      }), this.close(e);
    },
    _setAria: function (t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
        "aria-labelledby": e,
        "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e);
    },
    _setOption: function (t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");

        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
      }

      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
    },
    _setOptionDisabled: function (t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    },
    _appendTo: function () {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e;
    },
    _toggleAttr: function () {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function () {
      var t = this.options.width;
      return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0);
    },
    _resizeMenu: function () {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    },
    _getCreateOptions: function () {
      var t = this._super();

      return t.disabled = this.element.prop("disabled"), t;
    },
    _parseOptions: function (e) {
      var i = this,
          s = [];
      e.each(function (e, n) {
        s.push(i._parseOption(t(n), e));
      }), this.items = s;
    },
    _parseOption: function (t, e) {
      var i = t.parent("optgroup");
      return {
        element: t,
        index: e,
        value: t.val(),
        label: t.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || t.prop("disabled")
      };
    },
    _destroy: function () {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    }
  }]), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function () {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function () {
      var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];

      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);

      this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
      });
    },
    _createRange: function () {
      var e = this.options;
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function () {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function () {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    },
    _mouseCapture: function (e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this,
          u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e);
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - h.left - o.width() / 2,
        top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
    },
    _mouseStart: function () {
      return !0;
    },
    _mouseDrag: function (t) {
      var e = {
        x: t.pageX,
        y: t.pageY
      },
          i = this._normValueFromMouse(e);

      return this._slide(t, this._handleIndex, i), !1;
    },
    _mouseStop: function (t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function () {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function (t) {
      var e, i, s, n, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
    },
    _uiHash: function (t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
    },
    _hasMultipleValues: function () {
      return this.options.values && this.options.values.length;
    },
    _start: function (t, e) {
      return this._trigger("start", t, this._uiHash(e));
    },
    _slide: function (t, e, i) {
      var s,
          n,
          o = this.value(),
          a = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
    },
    _stop: function (t, e) {
      this._trigger("stop", t, this._uiHash(e));
    },
    _change: function (t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    },
    value: function (t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    },
    values: function (e, i) {
      var s, n, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();

      for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);

      this._refreshValue();
    },
    _setOption: function (e, i) {
      var s,
          n = 0;

      switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _setOptionDisabled: function (t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _value: function () {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function (t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);

      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);

        return i;
      }

      return [];
    },
    _trimAlignValue: function (t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
    },
    _calculateNewMax: function () {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;

      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function (t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.max;
    },
    _refreshRange: function (t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      });
    },
    _refreshValue: function () {
      var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          c = {};
      this._hasMultipleValues() ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), e = i;
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, r.animate));
    },
    _handleEvents: {
      keydown: function (e) {
        var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");

        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;
        }

        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;

          case t.ui.keyCode.END:
            n = this._valueMax();
            break;

          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;

          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o);
        }

        this._slide(e, a, n);
      },
      keyup: function (e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
      }
    }
  }), t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function (t, e, i) {
      return t >= e && e + i > t;
    },
    _isFloating: function (t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    },
    _create: function () {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function (t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    },
    _setHandleClassName: function () {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function () {
      this._mouseDestroy();

      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");

      return this;
    },
    _mouseCapture: function (e, i) {
      var s = null,
          n = !1,
          o = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0;
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
        this === e.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    },
    _mouseStart: function (e, i, s) {
      var n,
          o,
          a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, t.extend(this.offset, {
        click: {
          left: e.pageX - this.offset.left,
          top: e.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0;
    },
    _mouseDrag: function (e) {
      var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;

      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
        this._rearrange(e, s), this._trigger("change", e, this._uiHash());
        break;
      }

      return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function (e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
          o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(e);
          });
        } else this._clear(e, i);

        return !1;
      }
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();

        for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0);
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, t(i).each(function () {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
      }), !s.length && e.key && s.push(e.key + "="), s.join("&");
    },
    toArray: function (e) {
      var i = this._getItemsAsjQuery(e && e.connected),
          s = [];

      return e = e || {}, i.each(function () {
        s.push(t(e.item || this).attr(e.attribute || "id") || "");
      }), s;
    },
    _intersectsWith: function (t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = "x" === this.options.axis || s + l > r && h > s + l,
          d = "y" === this.options.axis || e + c > o && a > e + c,
          p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function (t) {
      var e,
          i,
          s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          o = s && n;

      return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1;
    },
    _intersectsWithSides: function (t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();

      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e);
    },
    _getDragVerticalDirection: function () {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function () {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left");
    },
    refresh: function (t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function () {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    },
    _getItemsAsjQuery: function (e) {
      function i() {
        r.push(this);
      }

      var s,
          n,
          o,
          a,
          r = [],
          h = [],
          l = this._connectWith();

      if (l && e) for (s = l.length - 1; s >= 0; s--) for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);

      for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);

      return t(r);
    },
    _removeCurrentsFromItems: function () {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function (t) {
        for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;

        return !0;
      });
    },
    _refreshItems: function (e) {
      this.items = [], this.containers = [this];

      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this.items,
          u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
        item: this.currentItem
      }) : t(this.options.items, this.element), this]],
          d = this._connectWith();

      if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
        item: this.currentItem
      }) : t(o.options.items, o.element), o]), this.containers.push(o));

      for (i = u.length - 1; i >= 0; i--) for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
        item: h,
        instance: a,
        width: 0,
        height: 0,
        left: 0,
        top: 0
      });
    },
    refreshPositions: function (e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;

      for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder: function (e) {
      e = e || this;
      var i,
          s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function () {
          var s = e.currentItem[0].nodeName.toLowerCase(),
              n = t("<" + s + ">", e.document[0]);
          return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        },
        update: function (t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder);
    },
    _createTrPlaceholder: function (e, i) {
      var s = this;
      e.children().each(function () {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
      });
    },
    _contactContainers: function (e) {
      var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d = null,
          p = null;

      for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
        d = this.containers[i], p = i;
      } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);

      if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));

        if (!o && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    },
    _createHelper: function (e) {
      var i = this.options,
          s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function (e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function () {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function () {
      var e,
          i,
          s,
          n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function (e, i) {
      i || (i = this.position);
      var s = "absolute" === e ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function (e) {
      var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function (t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;

      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function (t, e) {
      function i(t, e, i) {
        return function (s) {
          i._trigger(t, s, e._uiHash(e));
        };
      }

      this.reverting = !1;
      var s,
          n = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");

        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();

      for (this.fromOutside && !e && n.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (n.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), n.push(function (t) {
        return function (e) {
          t._trigger("receive", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (t) {
        return function (e) {
          t._trigger("update", e, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) n[s].call(this, t);

        this._trigger("stop", t, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function () {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function (e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      };
    }
  }), t.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function () {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function () {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _getCreateOptions: function () {
      var e = this._super(),
          i = this.element;

      return t.each(["min", "max", "step"], function (t, s) {
        var n = i.attr(s);
        null != n && n.length && (e[s] = n);
      }), e;
    },
    _events: {
      keydown: function (t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0);
      },
      mousewheel: function (t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(t);
          }, 100), t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function (e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
          e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }

        var s;
        s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function (e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0;
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _enhance: function () {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    },
    _draw: function () {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
          "ui-button": ""
        }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function (e) {
      var i = this.options,
          s = t.ui.keyCode;

      switch (e.keyCode) {
        case s.UP:
          return this._repeat(null, 1, e), !0;

        case s.DOWN:
          return this._repeat(null, -1, e), !0;

        case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;

        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0;
      }

      return !1;
    },
    _start: function (t) {
      return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    },
    _repeat: function (t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    },
    _spin: function (t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
        value: i
      }) === !1 || (this._value(i), this.counter++);
    },
    _increment: function (e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
    },
    _precision: function () {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function (t) {
      var e = "" + t,
          i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1;
    },
    _adjustValue: function (t) {
      var e,
          i,
          s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t;
    },
    _stop: function (t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t));
    },
    _setOption: function (t, e) {
      var i, s, n;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0);
    },
    _setOptionDisabled: function (t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: r(function (t) {
      this._super(t);
    }),
    _parse: function (t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
    },
    _format: function (t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    },
    _refresh: function () {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      });
    },
    isValid: function () {
      var t = this.value();
      return null === t ? !1 : t === this._adjustValue(t);
    },
    _value: function (t, e) {
      var i;
      "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh();
    },
    _destroy: function () {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: r(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function (t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: r(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function (t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: r(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: r(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function (t) {
      return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val());
    },
    widget: function () {
      return this.uiSpinner;
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
    _enhance: function () {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    },
    _uiSpinnerHtml: function () {
      return "<span>";
    },
    _buttonHtml: function () {
      return "<a></a><a></a>";
    }
  }), t.ui.spinner, t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function () {
      var t = /#.*$/;
      return function (e) {
        var i, s;
        i = e.href.replace(t, ""), s = location.href.replace(t, "");

        try {
          i = decodeURIComponent(i);
        } catch (n) {}

        try {
          s = decodeURIComponent(s);
        } catch (n) {}

        return e.hash.length > 1 && i === s;
      };
    }(),
    _create: function () {
      var e = this,
          i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function () {
      var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function (i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
    },
    _getCreateEventData: function () {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      };
    },
    _tabKeydown: function (e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
          s = this.tabs.index(i),
          n = !0;

      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;

          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;

          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;

          case t.ui.keyCode.HOME:
            s = 0;
            break;

          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;

          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;

          default:
            return;
        }

        e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    },
    _panelKeydown: function (e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
    },
    _handlePageNav: function (e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function (e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e;
      }

      for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;

      return e;
    },
    _focusNextTab: function (t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function (t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
    },
    _sanitizeSelector: function (t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function () {
      var e = this.options,
          i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
        return i.index(t);
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
    },
    _refresh: function () {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function () {
      var e = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
        t(this).is(".ui-state-disabled") && e.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        t(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return t("a", this)[0];
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
        var n,
            o,
            a,
            r = t(s).uniqueId().attr("id"),
            h = t(s).closest("li"),
            l = h.attr("aria-controls");
        e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
          "aria-controls": a,
          "aria-labelledby": r
        }), o.attr("aria-labelledby", r);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    },
    _getList: function () {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function (e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function (e) {
      var i, s, n;

      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));

      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
    },
    _setupEvents: function (e) {
      var i = {};
      e && t.each(e.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function (t) {
          t.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (e) {
      var i,
          s = this.element.parent();
      "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var e = t(this),
            s = e.css("position");
        "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= t(this).outerHeight(!0);
      }), this.panels.each(function () {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
        i = Math.max(i, t(this).height("").height());
      }).height(i));
    },
    _eventHandler: function (e) {
      var i = this.options,
          s = this.active,
          n = t(e.currentTarget),
          o = n.closest("li"),
          a = o[0] === s[0],
          r = a && i.collapsible,
          h = r ? t() : this._getPanelForTab(o),
          l = s.length ? this._getPanelForTab(s) : t(),
          c = {
        oldTab: s,
        oldPanel: l,
        newTab: r ? t() : o,
        newPanel: h
      };
      e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
    },
    _toggle: function (e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i);
      }

      function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
      }

      var o = this,
          a = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
        return 0 === t(this).attr("tabIndex");
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function (e) {
      var i,
          s = this._findActive(e);

      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }));
    },
    _findActive: function (e) {
      return e === !1 ? t() : this.tabs.eq(e);
    },
    _getIndex: function (e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var e = t(this),
            i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function (e) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
        return t !== e ? t : null;
      }) : t.map(this.tabs, function (t, i) {
        return i !== e ? i : null;
      })), this._setOptionDisabled(i));
    },
    disable: function (e) {
      var i = this.options.disabled;

      if (i !== !0) {
        if (void 0 === e) i = !0;else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e];
        }

        this._setOptionDisabled(i);
      }
    },
    load: function (e, i) {
      e = this._getIndex(e);

      var s = this,
          n = this.tabs.eq(e),
          o = n.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(n),
          r = {
        tab: n,
        panel: a
      },
          h = function (t, e) {
        "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
      };

      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
        setTimeout(function () {
          a.html(t), s._trigger("load", i, r), h(n, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          h(t, e);
        }, 1);
      })));
    },
    _ajaxSettings: function (e, i, s) {
      var n = this;
      return {
        url: e.attr("href").replace(/#.*$/, ""),
        beforeSend: function (e, o) {
          return n._trigger("beforeLoad", i, t.extend({
            jqXHR: e,
            ajaxSettings: o
          }, s));
        }
      };
    },
    _getPanelForTab: function (e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
    _processTabs: function () {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    }
  }), t.ui.tabs, t.widget("ui.tooltip", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-tooltip": "ui-corner-all ui-widget-shadow"
      },
      content: function () {
        var e = t(this).attr("title") || "";
        return t("<a>").text(e).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function (e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")));
    },
    _removeDescribedBy: function (e) {
      var i = e.data("ui-tooltip-id"),
          s = (e.attr("aria-describedby") || "").split(/\s+/),
          n = t.inArray(i, s);
      -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby");
    },
    _create: function () {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
        role: "log",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]);
    },
    _setOption: function (e, i) {
      var s = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
        s._updateContent(e.element);
      });
    },
    _setOptionDisabled: function (t) {
      this[t ? "_disable" : "_enable"]();
    },
    _disable: function () {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur");
        n.target = n.currentTarget = s.element[0], e.close(n, !0);
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
        var e = t(this);
        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0;
      }));
    },
    _enable: function () {
      this.disabledTitles.each(function () {
        var e = t(this);
        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
      }), this.disabledTitles = t([]);
    },
    open: function (e) {
      var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
        var e,
            s = t(this);
        s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr("title")
        }, s.attr("title", ""));
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e));
    },
    _updateContent: function (t, e) {
      var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;
      return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
        n._delay(function () {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
        });
      }), i && this._open(e, t, i), void 0);
    },
    _open: function (e, i, s) {
      function n(t) {
        l.of = t, a.is(":hidden") || a.position(l);
      }

      var o,
          a,
          r,
          h,
          l = t.extend({}, this.options.position);

      if (s) {
        if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
          mousemove: n
        }), n(e)) : a.position(t.extend({
          of: i
        }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          a.is(":visible") && (n(l.of), clearInterval(r));
        }, t.fx.interval)), this._trigger("open", e, {
          tooltip: a
        });
      }
    },
    _registerCloseHandlers: function (e, i) {
      var s = {
        keyup: function (e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);
            s.currentTarget = i[0], this.close(s, !0);
          }
        }
      };
      i[0] !== this.element[0] && (s.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s);
    },
    close: function (e) {
      var i,
          s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);

      return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
        s._removeTooltip(t(this));
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
        t(i.element).attr("title", i.title), delete s.parents[e];
      }), o.closing = !0, this._trigger("close", e, {
        tooltip: i
      }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
    },
    _tooltip: function (e) {
      var i = t("<div>").attr("role", "tooltip"),
          s = t("<div>").appendTo(i),
          n = i.uniqueId().attr("id");
      return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
        element: e,
        tooltip: i
      };
    },
    _find: function (t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null;
    },
    _removeTooltip: function (t) {
      t.remove(), delete this.tooltips[t.attr("id")];
    },
    _appendTo: function (t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e;
    },
    _destroy: function () {
      var e = this;
      t.each(this.tooltips, function (i, s) {
        var n = t.Event("blur"),
            o = s.element;
        n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
    options: {
      tooltipClass: null
    },
    _tooltip: function () {
      var t = this._superApply(arguments);

      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t;
    }
  }), t.ui.tooltip;
});

/***/ }),

/***/ "./plugins/mask-input/dist/jquery.maskedinput.min.js":
/*!***********************************************************!*\
  !*** ./plugins/mask-input/dist/jquery.maskedinput.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (a) {
  var b,
      c = navigator.userAgent,
      d = /iphone/i.test(c),
      e = /chrome/i.test(c),
      f = /android/i.test(c);
  a.mask = {
    definitions: {
      9: "[0-9]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_"
  }, a.fn.extend({
    caret: function (a, b) {
      var c;
      if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
        this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select());
      })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
        begin: a,
        end: b
      });
    },
    unmask: function () {
      return this.trigger("unmask");
    },
    mask: function (c, g) {
      var h, i, j, k, l, m, n, o;

      if (!c && this.length > 0) {
        h = a(this[0]);
        var p = h.data(a.mask.dataName);
        return p ? p() : void 0;
      }

      return g = a.extend({
        autoclear: a.mask.autoclear,
        placeholder: a.mask.placeholder,
        completed: null
      }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
        "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null);
      }), this.trigger("unmask").each(function () {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++) if (j[a] && C[a] === p(a)) return;

            g.completed.call(B);
          }
        }

        function p(a) {
          return g.placeholder.charAt(a < g.placeholder.length ? a : 0);
        }

        function q(a) {
          for (; ++a < n && !j[a];);

          return a;
        }

        function r(a) {
          for (; --a >= 0 && !j[a];);

          return a;
        }

        function s(a, b) {
          var c, d;

          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++) if (j[c]) {
              if (!(n > d && j[c].test(C[d]))) break;
              C[c] = C[d], C[d] = p(d), d = q(d);
            }

            z(), B.caret(Math.max(l, a));
          }
        }

        function t(a) {
          var b, c, d, e;

          for (b = a, c = p(a); n > b; b++) if (j[b]) {
            if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
            c = e;
          }
        }

        function u() {
          var a = B.val(),
              b = B.caret();

          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;

            if (0 === b.begin) for (; b.begin < l && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin);
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) b.begin++;

            B.caret(b.begin, b.begin);
          }

          h();
        }

        function v() {
          A(), B.val() != E && B.change();
        }

        function w(a) {
          if (!B.prop("readonly")) {
            var b,
                c,
                e,
                f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault());
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c,
                d,
                e,
                g = b.which || b.keyCode,
                i = B.caret();

            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function () {
                    a.proxy(a.fn.caret, B, e)();
                  };

                  setTimeout(k, 0);
                } else B.caret(e);

                i.begin <= m && h();
              }

              b.preventDefault();
            }
          }
        }

        function y(a, b) {
          var c;

          for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c));
        }

        function z() {
          B.val(C.join(""));
        }

        function A(a) {
          var b,
              c,
              d,
              e = B.val(),
              f = -1;

          for (b = 0, d = 0; n > b; b++) if (j[b]) {
            for (C[b] = p(b); d++ < e.length;) if (c = e.charAt(d - 1), j[b].test(c)) {
              C[b] = c, f = b;
              break;
            }

            if (d > e.length) {
              y(b + 1, n);
              break;
            }
          } else C[b] === e.charAt(d) && d++, k > b && (f = b);

          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l;
        }

        var B = a(this),
            C = a.map(c.split(""), function (a, b) {
          return "?" != a ? i[a] ? p(b) : a : void 0;
        }),
            D = C.join(""),
            E = B.val();
        B.data(a.mask.dataName, function () {
          return a.map(C, function (a, b) {
            return j[b] && a != p(b) ? a : null;
          }).join("");
        }), B.one("unmask", function () {
          B.off(".mask").removeData(a.mask.dataName);
        }).on("focus.mask", function () {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function () {
              B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a));
            }, 10);
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
          B.prop("readonly") || setTimeout(function () {
            var a = A(!0);
            B.caret(a), h();
          }, 0);
        }), e && f && B.off("input.mask").on("input.mask", u), A();
      });
    }
  });
});

/***/ }),

/***/ "./plugins/select2/dist/css/select2.min.css":
/*!**************************************************!*\
  !*** ./plugins/select2/dist/css/select2.min.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./plugins/select2/dist/js/select2.min.js":
/*!************************************************!*\
  !*** ./plugins/select2/dist/js/select2.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (n) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (u) {
  var e = function () {
    if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e = u.fn.select2.amd;

    var t, n, i, h, s, o, f, g, m, v, y, _, r, a, b;

    function w(e, t) {
      return r.call(e, t);
    }

    function l(e, t) {
      var n,
          i,
          r,
          s,
          o,
          a,
          l,
          c,
          u,
          d,
          p,
          h = t && t.split("/"),
          f = y.map,
          g = f && f["*"] || {};

      if (e) {
        for (o = (e = e.split("/")).length - 1, y.nodeIdCompat && b.test(e[o]) && (e[o] = e[o].replace(b, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) if ("." === (p = e[u])) e.splice(u, 1), u -= 1;else if (".." === p) {
          if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
          0 < u && (e.splice(u - 1, 2), u -= 2);
        }

        e = e.join("/");
      }

      if ((h || g) && f) {
        for (u = (n = e.split("/")).length; 0 < u; u -= 1) {
          if (i = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; d -= 1) if (r = (r = f[h.slice(0, d).join("/")]) && r[i]) {
            s = r, a = u;
            break;
          }
          if (s) break;
          !l && g && g[i] && (l = g[i], c = u);
        }

        !s && l && (s = l, a = c), s && (n.splice(0, a, s), e = n.join("/"));
      }

      return e;
    }

    function x(t, n) {
      return function () {
        var e = a.call(arguments, 0);
        return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(h, e.concat([t, n]));
      };
    }

    function A(t) {
      return function (e) {
        m[t] = e;
      };
    }

    function D(e) {
      if (w(v, e)) {
        var t = v[e];
        delete v[e], _[e] = !0, s.apply(h, t);
      }

      if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
      return m[e];
    }

    function c(e) {
      var t,
          n = e ? e.indexOf("!") : -1;
      return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
    }

    function S(e) {
      return e ? c(e) : [];
    }

    return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, b = /\.js$/, f = function (e, t) {
      var n,
          i = c(e),
          r = i[0],
          s = t[1];
      return e = i[1], r && (n = D(r = l(r, s))), r ? e = n && n.normalize ? n.normalize(e, function (t) {
        return function (e) {
          return l(e, t);
        };
      }(s)) : l(e, s) : (r = (i = c(e = l(e, s)))[0], e = i[1], r && (n = D(r))), {
        f: r ? r + "!" + e : e,
        n: e,
        pr: r,
        p: n
      };
    }, g = {
      require: function (e) {
        return x(e);
      },
      exports: function (e) {
        var t = m[e];
        return void 0 !== t ? t : m[e] = {};
      },
      module: function (e) {
        return {
          id: e,
          uri: "",
          exports: m[e],
          config: function (e) {
            return function () {
              return y && y.config && y.config[e] || {};
            };
          }(e)
        };
      }
    }, s = function (e, t, n, i) {
      var r,
          s,
          o,
          a,
          l,
          c,
          u,
          d = [],
          p = typeof n;

      if (c = S(i = i || e), "undefined" == p || "function" == p) {
        for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) if ("require" === (s = (a = f(t[l], c)).f)) d[l] = g.require(e);else if ("exports" === s) d[l] = g.exports(e), u = !0;else if ("module" === s) r = d[l] = g.module(e);else if (w(m, s) || w(v, s) || w(_, s)) d[l] = D(s);else {
          if (!a.p) throw new Error(e + " missing " + s);
          a.p.load(a.n, x(i, !0), A(s), {}), d[l] = m[s];
        }

        o = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== h && r.exports !== m[e] ? m[e] = r.exports : o === h && u || (m[e] = o));
      } else e && (m[e] = n);
    }, t = n = o = function (e, t, n, i, r) {
      if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);

      if (!e.splice) {
        if ((y = e).deps && o(y.deps, y.callback), !t) return;
        t.splice ? (e = t, t = n, n = null) : e = h;
      }

      return t = t || function () {}, "function" == typeof n && (n = i, i = r), i ? s(h, e, t, n) : setTimeout(function () {
        s(h, e, t, n);
      }, 4), o;
    }, o.config = function (e) {
      return o(e);
    }, t._defined = m, (i = function (e, t, n) {
      if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
      t.splice || (n = t, t = []), w(m, e) || w(v, e) || (v[e] = [e, t, n]);
    }).amd = {
      jQuery: !0
    }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function () {}), e.define("jquery", [], function () {
      var e = u || $;
      return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
    }), e.define("select2/utils", ["jquery"], function (s) {
      var r = {};

      function u(e) {
        var t = e.prototype,
            n = [];

        for (var i in t) {
          "function" == typeof t[i] && "constructor" !== i && n.push(i);
        }

        return n;
      }

      r.Extend = function (e, t) {
        var n = {}.hasOwnProperty;

        function i() {
          this.constructor = e;
        }

        for (var r in t) n.call(t, r) && (e[r] = t[r]);

        return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
      }, r.Decorate = function (i, r) {
        var e = u(r),
            t = u(i);

        function s() {
          var e = Array.prototype.unshift,
              t = r.prototype.constructor.length,
              n = i.prototype.constructor;
          0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments);
        }

        r.displayName = i.displayName, s.prototype = new function () {
          this.constructor = s;
        }();

        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          s.prototype[o] = i.prototype[o];
        }

        function a(e) {
          var t = function () {};

          e in s.prototype && (t = s.prototype[e]);
          var n = r.prototype[e];
          return function () {
            return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
          };
        }

        for (var l = 0; l < e.length; l++) {
          var c = e[l];
          s.prototype[c] = a(c);
        }

        return s;
      };

      function e() {
        this.listeners = {};
      }

      e.prototype.on = function (e, t) {
        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
      }, e.prototype.trigger = function (e) {
        var t = Array.prototype.slice,
            n = t.call(arguments, 1);
        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, e.prototype.invoke = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
      }, r.Observable = e, r.generateChars = function (e) {
        for (var t = "", n = 0; n < e; n++) {
          t += Math.floor(36 * Math.random()).toString(36);
        }

        return t;
      }, r.bind = function (e, t) {
        return function () {
          e.apply(t, arguments);
        };
      }, r._convertData = function (e) {
        for (var t in e) {
          var n = t.split("-"),
              i = e;

          if (1 !== n.length) {
            for (var r = 0; r < n.length; r++) {
              var s = n[r];
              (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), r == n.length - 1 && (i[s] = e[t]), i = i[s];
            }

            delete e[t];
          }
        }

        return e;
      }, r.hasScroll = function (e, t) {
        var n = s(t),
            i = t.style.overflowX,
            r = t.style.overflowY;
        return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
      }, r.escapeMarkup = function (e) {
        var t = {
          "\\": "&#92;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#47;"
        };
        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
          return t[e];
        });
      }, r.__cache = {};
      var n = 0;
      return r.GetUniqueElementId = function (e) {
        var t = e.getAttribute("data-select2-id");
        return null != t || (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + r.generateChars(4), e.setAttribute("data-select2-id", t)), t;
      }, r.StoreData = function (e, t, n) {
        var i = r.GetUniqueElementId(e);
        r.__cache[i] || (r.__cache[i] = {}), r.__cache[i][t] = n;
      }, r.GetData = function (e, t) {
        var n = r.GetUniqueElementId(e);
        return t ? r.__cache[n] && null != r.__cache[n][t] ? r.__cache[n][t] : s(e).data(t) : r.__cache[n];
      }, r.RemoveData = function (e) {
        var t = r.GetUniqueElementId(e);
        null != r.__cache[t] && delete r.__cache[t], e.removeAttribute("data-select2-id");
      }, r.copyNonInternalCssClasses = function (e, t) {
        var n = e.getAttribute("class").trim().split(/\s+/);
        n = n.filter(function (e) {
          return 0 === e.indexOf("select2-");
        });
        var i = t.getAttribute("class").trim().split(/\s+/);
        i = i.filter(function (e) {
          return 0 !== e.indexOf("select2-");
        });
        var r = n.concat(i);
        e.setAttribute("class", r.join(" "));
      }, r;
    }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
      function i(e, t, n) {
        this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this);
      }

      return f.Extend(i, f.Observable), i.prototype.render = function () {
        var e = h('<ul class="select2-results__options" role="listbox"></ul>');
        return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
      }, i.prototype.clear = function () {
        this.$results.empty();
      }, i.prototype.displayMessage = function (e) {
        var t = this.options.get("escapeMarkup");
        this.clear(), this.hideLoading();
        var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
            i = this.options.get("translations").get(e.message);
        n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
      }, i.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, i.prototype.append = function (e) {
        this.hideLoading();
        var t = [];

        if (null != e.results && 0 !== e.results.length) {
          e.results = this.sort(e.results);

          for (var n = 0; n < e.results.length; n++) {
            var i = e.results[n],
                r = this.option(i);
            t.push(r);
          }

          this.$results.append(t);
        } else 0 === this.$results.children().length && this.trigger("results:message", {
          message: "noResults"
        });
      }, i.prototype.position = function (e, t) {
        t.find(".select2-results").append(e);
      }, i.prototype.sort = function (e) {
        return this.options.get("sorter")(e);
      }, i.prototype.highlightFirstItem = function () {
        var e = this.$results.find(".select2-results__option--selectable"),
            t = e.filter(".select2-results__option--selected");
        0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, i.prototype.setClasses = function () {
        var t = this;
        this.data.current(function (e) {
          var i = e.map(function (e) {
            return e.id.toString();
          });
          t.$results.find(".select2-results__option--selectable").each(function () {
            var e = h(this),
                t = f.GetData(this, "data"),
                n = "" + t.id;
            null != t.element && t.element.selected || null == t.element && -1 < i.indexOf(n) ? (this.classList.add("select2-results__option--selected"), e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), e.attr("aria-selected", "false"));
          });
        });
      }, i.prototype.showLoading = function (e) {
        this.hideLoading();
        var t = {
          disabled: !0,
          loading: !0,
          text: this.options.get("translations").get("searching")(e)
        },
            n = this.option(t);
        n.className += " loading-results", this.$results.prepend(n);
      }, i.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, i.prototype.option = function (e) {
        var t = document.createElement("li");
        t.classList.add("select2-results__option"), t.classList.add("select2-results__option--selectable");
        var n = {
          role: "option"
        },
            i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

        for (var r in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (n["aria-disabled"] = "true", t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--disabled")), null == e.id && t.classList.remove("select2-results__option--selectable"), null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--group")), n) {
          var s = n[r];
          t.setAttribute(r, s);
        }

        if (e.children) {
          var o = h(t),
              a = document.createElement("strong");
          a.className = "select2-results__group", this.template(e, a);

          for (var l = [], c = 0; c < e.children.length; c++) {
            var u = e.children[c],
                d = this.option(u);
            l.push(d);
          }

          var p = h("<ul></ul>", {
            class: "select2-results__options select2-results__options--nested"
          });
          p.append(l), o.append(a), o.append(p);
        } else this.template(e, t);

        return f.StoreData(t, "data", e), t;
      }, i.prototype.bind = function (t, e) {
        var l = this,
            n = t.id + "-results";
        this.$results.attr("id", n), t.on("results:all", function (e) {
          l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
        }), t.on("results:append", function (e) {
          l.append(e.data), t.isOpen() && l.setClasses();
        }), t.on("query", function (e) {
          l.hideMessages(), l.showLoading(e);
        }), t.on("select", function () {
          t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
        }), t.on("unselect", function () {
          t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
        }), t.on("open", function () {
          l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
        }), t.on("close", function () {
          l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
        }), t.on("results:toggle", function () {
          var e = l.getHighlightedResults();
          0 !== e.length && e.trigger("mouseup");
        }), t.on("results:select", function () {
          var e = l.getHighlightedResults();

          if (0 !== e.length) {
            var t = f.GetData(e[0], "data");
            e.hasClass("select2-results__option--selected") ? l.trigger("close", {}) : l.trigger("select", {
              data: t
            });
          }
        }), t.on("results:previous", function () {
          var e = l.getHighlightedResults(),
              t = l.$results.find(".select2-results__option--selectable"),
              n = t.index(e);

          if (!(n <= 0)) {
            var i = n - 1;
            0 === e.length && (i = 0);
            var r = t.eq(i);
            r.trigger("mouseenter");
            var s = l.$results.offset().top,
                o = r.offset().top,
                a = l.$results.scrollTop() + (o - s);
            0 === i ? l.$results.scrollTop(0) : o - s < 0 && l.$results.scrollTop(a);
          }
        }), t.on("results:next", function () {
          var e = l.getHighlightedResults(),
              t = l.$results.find(".select2-results__option--selectable"),
              n = t.index(e) + 1;

          if (!(n >= t.length)) {
            var i = t.eq(n);
            i.trigger("mouseenter");
            var r = l.$results.offset().top + l.$results.outerHeight(!1),
                s = i.offset().top + i.outerHeight(!1),
                o = l.$results.scrollTop() + s - r;
            0 === n ? l.$results.scrollTop(0) : r < s && l.$results.scrollTop(o);
          }
        }), t.on("results:focus", function (e) {
          e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true");
        }), t.on("results:message", function (e) {
          l.displayMessage(e);
        }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
          var t = l.$results.scrollTop(),
              n = l.$results.get(0).scrollHeight - t + e.deltaY,
              i = 0 < e.deltaY && t - e.deltaY <= 0,
              r = e.deltaY < 0 && n <= l.$results.height();
          i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option--selectable", function (e) {
          var t = h(this),
              n = f.GetData(this, "data");
          t.hasClass("select2-results__option--selected") ? l.options.get("multiple") ? l.trigger("unselect", {
            originalEvent: e,
            data: n
          }) : l.trigger("close", {}) : l.trigger("select", {
            originalEvent: e,
            data: n
          });
        }), this.$results.on("mouseenter", ".select2-results__option--selectable", function (e) {
          var t = f.GetData(this, "data");
          l.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), l.trigger("results:focus", {
            data: t,
            element: h(this)
          });
        });
      }, i.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }, i.prototype.destroy = function () {
        this.$results.remove();
      }, i.prototype.ensureHighlightVisible = function () {
        var e = this.getHighlightedResults();

        if (0 !== e.length) {
          var t = this.$results.find(".select2-results__option--selectable").index(e),
              n = this.$results.offset().top,
              i = e.offset().top,
              r = this.$results.scrollTop() + (i - n),
              s = i - n;
          r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r);
        }
      }, i.prototype.template = function (e, t) {
        var n = this.options.get("templateResult"),
            i = this.options.get("escapeMarkup"),
            r = n(e, t);
        null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r);
      }, i;
    }), e.define("select2/keys", [], function () {
      return {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
    }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, r) {
      function s(e, t) {
        this.$element = e, this.options = t, s.__super__.constructor.call(this);
      }

      return i.Extend(s, i.Observable), s.prototype.render = function () {
        var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
        return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
      }, s.prototype.bind = function (e, t) {
        var n = this,
            i = e.id + "-results";
        this.container = e, this.$selection.on("focus", function (e) {
          n.trigger("focus", e);
        }), this.$selection.on("blur", function (e) {
          n._handleBlur(e);
        }), this.$selection.on("keydown", function (e) {
          n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault();
        }), e.on("results:focus", function (e) {
          n.$selection.attr("aria-activedescendant", e.data._resultId);
        }), e.on("selection:update", function (e) {
          n.update(e.data);
        }), e.on("open", function () {
          n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e);
        }), e.on("close", function () {
          n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
        }), e.on("enable", function () {
          n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
        }), e.on("disable", function () {
          n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
        });
      }, s.prototype._handleBlur = function (e) {
        var t = this;
        window.setTimeout(function () {
          document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
        }, 1);
      }, s.prototype._attachCloseHandler = function (e) {
        n(document.body).on("mousedown.select2." + e.id, function (e) {
          var t = n(e.target).closest(".select2");
          n(".select2.select2-container--open").each(function () {
            this != t[0] && i.GetData(this, "element").select2("close");
          });
        });
      }, s.prototype._detachCloseHandler = function (e) {
        n(document.body).off("mousedown.select2." + e.id);
      }, s.prototype.position = function (e, t) {
        t.find(".selection").append(e);
      }, s.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, s.prototype.update = function (e) {
        throw new Error("The `update` method must be defined in child classes.");
      }, s.prototype.isEnabled = function () {
        return !this.isDisabled();
      }, s.prototype.isDisabled = function () {
        return this.options.get("disabled");
      }, s;
    }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
      function r() {
        r.__super__.constructor.apply(this, arguments);
      }

      return n.Extend(r, t), r.prototype.render = function () {
        var e = r.__super__.render.call(this);

        return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
      }, r.prototype.bind = function (t, e) {
        var n = this;

        r.__super__.bind.apply(this, arguments);

        var i = t.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
          1 === e.which && n.trigger("toggle", {
            originalEvent: e
          });
        }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
          t.isOpen() || n.$selection.trigger("focus");
        });
      }, r.prototype.clear = function () {
        var e = this.$selection.find(".select2-selection__rendered");
        e.empty(), e.removeAttr("title");
      }, r.prototype.display = function (e, t) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(e, t));
      }, r.prototype.selectionContainer = function () {
        return e("<span></span>");
      }, r.prototype.update = function (e) {
        if (0 !== e.length) {
          var t = e[0],
              n = this.$selection.find(".select2-selection__rendered"),
              i = this.display(t, n);
          n.empty().append(i);
          var r = t.title || t.text;
          r ? n.attr("title", r) : n.removeAttr("title");
        } else this.clear();
      }, r;
    }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (r, e, d) {
      function s(e, t) {
        s.__super__.constructor.apply(this, arguments);
      }

      return d.Extend(s, e), s.prototype.render = function () {
        var e = s.__super__.render.call(this);

        return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
      }, s.prototype.bind = function (e, t) {
        var i = this;

        s.__super__.bind.apply(this, arguments);

        var n = e.id + "-container";
        this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.on("click", function (e) {
          i.trigger("toggle", {
            originalEvent: e
          });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
          if (!i.isDisabled()) {
            var t = r(this).parent(),
                n = d.GetData(t[0], "data");
            i.trigger("unselect", {
              originalEvent: e,
              data: n
            });
          }
        }), this.$selection.on("keydown", ".select2-selection__choice__remove", function (e) {
          i.isDisabled() || e.stopPropagation();
        });
      }, s.prototype.clear = function () {
        var e = this.$selection.find(".select2-selection__rendered");
        e.empty(), e.removeAttr("title");
      }, s.prototype.display = function (e, t) {
        var n = this.options.get("templateSelection");
        return this.options.get("escapeMarkup")(n(e, t));
      }, s.prototype.selectionContainer = function () {
        return r('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
      }, s.prototype.update = function (e) {
        if (this.clear(), 0 !== e.length) {
          for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", i = 0; i < e.length; i++) {
            var r = e[i],
                s = this.selectionContainer(),
                o = this.display(r, s),
                a = n + d.generateChars(4) + "-";
            r.id ? a += r.id : a += d.generateChars(4), s.find(".select2-selection__choice__display").append(o).attr("id", a);
            var l = r.title || r.text;
            l && s.attr("title", l);
            var c = this.options.get("translations").get("removeItem"),
                u = s.find(".select2-selection__choice__remove");
            u.attr("title", c()), u.attr("aria-label", c()), u.attr("aria-describedby", a), d.StoreData(s[0], "data", r), t.push(s);
          }

          this.$selection.find(".select2-selection__rendered").append(t);
        }
      }, s;
    }), e.define("select2/selection/placeholder", [], function () {
      function e(e, t, n) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
      }

      return e.prototype.normalizePlaceholder = function (e, t) {
        return "string" == typeof t && (t = {
          id: "",
          text: t
        }), t;
      }, e.prototype.createPlaceholder = function (e, t) {
        var n = this.selectionContainer();
        return n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice"), n;
      }, e.prototype.update = function (e, t) {
        var n = 1 == t.length && t[0].id != this.placeholder.id;
        if (1 < t.length || n) return e.call(this, t);
        this.clear();
        var i = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(i);
      }, e;
    }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (s, i, a) {
      function e() {}

      return e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
          i._handleClear(e);
        }), t.on("keypress", function (e) {
          i._handleKeyboardClear(e, t);
        });
      }, e.prototype._handleClear = function (e, t) {
        if (!this.isDisabled()) {
          var n = this.$selection.find(".select2-selection__clear");

          if (0 !== n.length) {
            t.stopPropagation();
            var i = a.GetData(n[0], "data"),
                r = this.$element.val();
            this.$element.val(this.placeholder.id);
            var s = {
              data: i
            };
            if (this.trigger("clear", s), s.prevented) this.$element.val(r);else {
              for (var o = 0; o < i.length; o++) if (s = {
                data: i[o]
              }, this.trigger("unselect", s), s.prevented) return void this.$element.val(r);

              this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
            }
          }
        }
      }, e.prototype._handleKeyboardClear = function (e, t, n) {
        n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t);
      }, e.prototype.update = function (e, t) {
        if (e.call(this, t), this.$selection.find(".select2-selection__clear").remove(), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
          var n = this.$selection.find(".select2-selection__rendered").attr("id"),
              i = this.options.get("translations").get("removeAllItems"),
              r = s('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
          r.attr("title", i()), r.attr("aria-label", i()), r.attr("aria-describedby", n), a.StoreData(r[0], "data", t), this.$selection.prepend(r);
        }
      }, e;
    }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, l, c) {
      function e(e, t, n) {
        e.call(this, t, n);
      }

      return e.prototype.render = function (e) {
        var t = i('<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
        this.$searchContainer = t, this.$search = t.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete"));
        var n = e.call(this);
        return this._transferTabIndex(), n.append(this.$searchContainer), n;
      }, e.prototype.bind = function (e, t, n) {
        var i = this,
            r = t.id + "-results",
            s = t.id + "-container";
        e.call(this, t, n), i.$search.attr("aria-describedby", s), t.on("open", function () {
          i.$search.attr("aria-controls", r), i.$search.trigger("focus");
        }), t.on("close", function () {
          i.$search.val(""), i.resizeSearch(), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
        }), t.on("enable", function () {
          i.$search.prop("disabled", !1), i._transferTabIndex();
        }), t.on("disable", function () {
          i.$search.prop("disabled", !0);
        }), t.on("focus", function (e) {
          i.$search.trigger("focus");
        }), t.on("results:focus", function (e) {
          e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
        }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
          i.trigger("focus", e);
        }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
          i._handleBlur(e);
        }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
          if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === c.BACKSPACE && "" === i.$search.val()) {
            var t = i.$selection.find(".select2-selection__choice").last();

            if (0 < t.length) {
              var n = l.GetData(t[0], "data");
              i.searchRemoveChoice(n), e.preventDefault();
            }
          }
        }), this.$selection.on("click", ".select2-search--inline", function (e) {
          i.$search.val() && e.stopPropagation();
        });
        var o = document.documentMode,
            a = o && o <= 11;
        this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
          a ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
          if (a && "input" === e.type) i.$selection.off("input.search input.searchcheck");else {
            var t = e.which;
            t != c.SHIFT && t != c.CTRL && t != c.ALT && t != c.TAB && i.handleSearch(e);
          }
        });
      }, e.prototype._transferTabIndex = function (e) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, e.prototype.createPlaceholder = function (e, t) {
        this.$search.attr("placeholder", t.text);
      }, e.prototype.update = function (e, t) {
        var n = this.$search[0] == document.activeElement;
        this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus");
      }, e.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var e = this.$search.val();
          this.trigger("query", {
            term: e
          });
        }

        this._keyUpPrevented = !1;
      }, e.prototype.searchRemoveChoice = function (e, t) {
        this.trigger("unselect", {
          data: t
        }), this.$search.val(t.text), this.handleSearch();
      }, e.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");
        var e = "100%";
        "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em");
        this.$search.css("width", e);
      }, e;
    }), e.define("select2/selection/selectionCss", ["../utils"], function (i) {
      function e() {}

      return e.prototype.render = function (e) {
        var t = e.call(this),
            n = this.options.get("selectionCssClass") || "";
        return -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(n), t;
      }, e;
    }), e.define("select2/selection/eventRelay", ["jquery"], function (o) {
      function e() {}

      return e.prototype.bind = function (e, t, n) {
        var i = this,
            r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
            s = ["opening", "closing", "selecting", "unselecting", "clearing"];
        e.call(this, t, n), t.on("*", function (e, t) {
          if (-1 !== r.indexOf(e)) {
            t = t || {};
            var n = o.Event("select2:" + e, {
              params: t
            });
            i.$element.trigger(n), -1 !== s.indexOf(e) && (t.prevented = n.isDefaultPrevented());
          }
        });
      }, e;
    }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
      function i(e) {
        this.dict = e || {};
      }

      return i.prototype.all = function () {
        return this.dict;
      }, i.prototype.get = function (e) {
        return this.dict[e];
      }, i.prototype.extend = function (e) {
        this.dict = t.extend({}, e.all(), this.dict);
      }, i._cache = {}, i.loadPath = function (e) {
        if (!(e in i._cache)) {
          var t = n(e);
          i._cache[e] = t;
        }

        return new i(i._cache[e]);
      }, i;
    }), e.define("select2/diacritics", [], function () {
      return {
        "Ⓐ": "A",
        "Ａ": "A",
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ầ": "A",
        "Ấ": "A",
        "Ẫ": "A",
        "Ẩ": "A",
        "Ã": "A",
        "Ā": "A",
        "Ă": "A",
        "Ằ": "A",
        "Ắ": "A",
        "Ẵ": "A",
        "Ẳ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ả": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ǎ": "A",
        "Ȁ": "A",
        "Ȃ": "A",
        "Ạ": "A",
        "Ậ": "A",
        "Ặ": "A",
        "Ḁ": "A",
        "Ą": "A",
        "Ⱥ": "A",
        "Ɐ": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ⓑ": "B",
        "Ｂ": "B",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ɓ": "B",
        "Ⓒ": "C",
        "Ｃ": "C",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ꜿ": "C",
        "Ⓓ": "D",
        "Ｄ": "D",
        "Ḋ": "D",
        "Ď": "D",
        "Ḍ": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḏ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ɗ": "D",
        "Ɖ": "D",
        "Ꝺ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "ǲ": "Dz",
        "ǅ": "Dz",
        "Ⓔ": "E",
        "Ｅ": "E",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ề": "E",
        "Ế": "E",
        "Ễ": "E",
        "Ể": "E",
        "Ẽ": "E",
        "Ē": "E",
        "Ḕ": "E",
        "Ḗ": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ë": "E",
        "Ẻ": "E",
        "Ě": "E",
        "Ȅ": "E",
        "Ȇ": "E",
        "Ẹ": "E",
        "Ệ": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ę": "E",
        "Ḙ": "E",
        "Ḛ": "E",
        "Ɛ": "E",
        "Ǝ": "E",
        "Ⓕ": "F",
        "Ｆ": "F",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ꝼ": "F",
        "Ⓖ": "G",
        "Ｇ": "G",
        "Ǵ": "G",
        "Ĝ": "G",
        "Ḡ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ǥ": "G",
        "Ɠ": "G",
        "Ꞡ": "G",
        "Ᵹ": "G",
        "Ꝿ": "G",
        "Ⓗ": "H",
        "Ｈ": "H",
        "Ĥ": "H",
        "Ḣ": "H",
        "Ḧ": "H",
        "Ȟ": "H",
        "Ḥ": "H",
        "Ḩ": "H",
        "Ḫ": "H",
        "Ħ": "H",
        "Ⱨ": "H",
        "Ⱶ": "H",
        "Ɥ": "H",
        "Ⓘ": "I",
        "Ｉ": "I",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "İ": "I",
        "Ï": "I",
        "Ḯ": "I",
        "Ỉ": "I",
        "Ǐ": "I",
        "Ȉ": "I",
        "Ȋ": "I",
        "Ị": "I",
        "Į": "I",
        "Ḭ": "I",
        "Ɨ": "I",
        "Ⓙ": "J",
        "Ｊ": "J",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ⓚ": "K",
        "Ｋ": "K",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ḳ": "K",
        "Ķ": "K",
        "Ḵ": "K",
        "Ƙ": "K",
        "Ⱪ": "K",
        "Ꝁ": "K",
        "Ꝃ": "K",
        "Ꝅ": "K",
        "Ꞣ": "K",
        "Ⓛ": "L",
        "Ｌ": "L",
        "Ŀ": "L",
        "Ĺ": "L",
        "Ľ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḻ": "L",
        "Ł": "L",
        "Ƚ": "L",
        "Ɫ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ꝇ": "L",
        "Ꞁ": "L",
        "Ǉ": "LJ",
        "ǈ": "Lj",
        "Ⓜ": "M",
        "Ｍ": "M",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ɯ": "M",
        "Ⓝ": "N",
        "Ｎ": "N",
        "Ǹ": "N",
        "Ń": "N",
        "Ñ": "N",
        "Ṅ": "N",
        "Ň": "N",
        "Ṇ": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "Ɲ": "N",
        "Ꞑ": "N",
        "Ꞥ": "N",
        "Ǌ": "NJ",
        "ǋ": "Nj",
        "Ⓞ": "O",
        "Ｏ": "O",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Ồ": "O",
        "Ố": "O",
        "Ỗ": "O",
        "Ổ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ȭ": "O",
        "Ṏ": "O",
        "Ō": "O",
        "Ṑ": "O",
        "Ṓ": "O",
        "Ŏ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ỏ": "O",
        "Ő": "O",
        "Ǒ": "O",
        "Ȍ": "O",
        "Ȏ": "O",
        "Ơ": "O",
        "Ờ": "O",
        "Ớ": "O",
        "Ỡ": "O",
        "Ở": "O",
        "Ợ": "O",
        "Ọ": "O",
        "Ộ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Ɔ": "O",
        "Ɵ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Œ": "OE",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ȣ": "OU",
        "Ⓟ": "P",
        "Ｐ": "P",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ƥ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝓ": "P",
        "Ꝕ": "P",
        "Ⓠ": "Q",
        "Ｑ": "Q",
        "Ꝗ": "Q",
        "Ꝙ": "Q",
        "Ɋ": "Q",
        "Ⓡ": "R",
        "Ｒ": "R",
        "Ŕ": "R",
        "Ṙ": "R",
        "Ř": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ŗ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꝛ": "R",
        "Ꞧ": "R",
        "Ꞃ": "R",
        "Ⓢ": "S",
        "Ｓ": "S",
        "ẞ": "S",
        "Ś": "S",
        "Ṥ": "S",
        "Ŝ": "S",
        "Ṡ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ș": "S",
        "Ş": "S",
        "Ȿ": "S",
        "Ꞩ": "S",
        "Ꞅ": "S",
        "Ⓣ": "T",
        "Ｔ": "T",
        "Ṫ": "T",
        "Ť": "T",
        "Ṭ": "T",
        "Ț": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ṯ": "T",
        "Ŧ": "T",
        "Ƭ": "T",
        "Ʈ": "T",
        "Ⱦ": "T",
        "Ꞇ": "T",
        "Ꜩ": "TZ",
        "Ⓤ": "U",
        "Ｕ": "U",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ŭ": "U",
        "Ü": "U",
        "Ǜ": "U",
        "Ǘ": "U",
        "Ǖ": "U",
        "Ǚ": "U",
        "Ủ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ǔ": "U",
        "Ȕ": "U",
        "Ȗ": "U",
        "Ư": "U",
        "Ừ": "U",
        "Ứ": "U",
        "Ữ": "U",
        "Ử": "U",
        "Ự": "U",
        "Ụ": "U",
        "Ṳ": "U",
        "Ų": "U",
        "Ṷ": "U",
        "Ṵ": "U",
        "Ʉ": "U",
        "Ⓥ": "V",
        "Ｖ": "V",
        "Ṽ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ꝟ": "V",
        "Ʌ": "V",
        "Ꝡ": "VY",
        "Ⓦ": "W",
        "Ｗ": "W",
        "Ẁ": "W",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẇ": "W",
        "Ẅ": "W",
        "Ẉ": "W",
        "Ⱳ": "W",
        "Ⓧ": "X",
        "Ｘ": "X",
        "Ẋ": "X",
        "Ẍ": "X",
        "Ⓨ": "Y",
        "Ｙ": "Y",
        "Ỳ": "Y",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ỹ": "Y",
        "Ȳ": "Y",
        "Ẏ": "Y",
        "Ÿ": "Y",
        "Ỷ": "Y",
        "Ỵ": "Y",
        "Ƴ": "Y",
        "Ɏ": "Y",
        "Ỿ": "Y",
        "Ⓩ": "Z",
        "Ｚ": "Z",
        "Ź": "Z",
        "Ẑ": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "Ẓ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ȥ": "Z",
        "Ɀ": "Z",
        "Ⱬ": "Z",
        "Ꝣ": "Z",
        "ⓐ": "a",
        "ａ": "a",
        "ẚ": "a",
        "à": "a",
        "á": "a",
        "â": "a",
        "ầ": "a",
        "ấ": "a",
        "ẫ": "a",
        "ẩ": "a",
        "ã": "a",
        "ā": "a",
        "ă": "a",
        "ằ": "a",
        "ắ": "a",
        "ẵ": "a",
        "ẳ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ä": "a",
        "ǟ": "a",
        "ả": "a",
        "å": "a",
        "ǻ": "a",
        "ǎ": "a",
        "ȁ": "a",
        "ȃ": "a",
        "ạ": "a",
        "ậ": "a",
        "ặ": "a",
        "ḁ": "a",
        "ą": "a",
        "ⱥ": "a",
        "ɐ": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ⓑ": "b",
        "ｂ": "b",
        "ḃ": "b",
        "ḅ": "b",
        "ḇ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɓ": "b",
        "ⓒ": "c",
        "ｃ": "c",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ꜿ": "c",
        "ↄ": "c",
        "ⓓ": "d",
        "ｄ": "d",
        "ḋ": "d",
        "ď": "d",
        "ḍ": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ḏ": "d",
        "đ": "d",
        "ƌ": "d",
        "ɖ": "d",
        "ɗ": "d",
        "ꝺ": "d",
        "ǳ": "dz",
        "ǆ": "dz",
        "ⓔ": "e",
        "ｅ": "e",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ề": "e",
        "ế": "e",
        "ễ": "e",
        "ể": "e",
        "ẽ": "e",
        "ē": "e",
        "ḕ": "e",
        "ḗ": "e",
        "ĕ": "e",
        "ė": "e",
        "ë": "e",
        "ẻ": "e",
        "ě": "e",
        "ȅ": "e",
        "ȇ": "e",
        "ẹ": "e",
        "ệ": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ę": "e",
        "ḙ": "e",
        "ḛ": "e",
        "ɇ": "e",
        "ɛ": "e",
        "ǝ": "e",
        "ⓕ": "f",
        "ｆ": "f",
        "ḟ": "f",
        "ƒ": "f",
        "ꝼ": "f",
        "ⓖ": "g",
        "ｇ": "g",
        "ǵ": "g",
        "ĝ": "g",
        "ḡ": "g",
        "ğ": "g",
        "ġ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ǥ": "g",
        "ɠ": "g",
        "ꞡ": "g",
        "ᵹ": "g",
        "ꝿ": "g",
        "ⓗ": "h",
        "ｈ": "h",
        "ĥ": "h",
        "ḣ": "h",
        "ḧ": "h",
        "ȟ": "h",
        "ḥ": "h",
        "ḩ": "h",
        "ḫ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ⱨ": "h",
        "ⱶ": "h",
        "ɥ": "h",
        "ƕ": "hv",
        "ⓘ": "i",
        "ｉ": "i",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "ï": "i",
        "ḯ": "i",
        "ỉ": "i",
        "ǐ": "i",
        "ȉ": "i",
        "ȋ": "i",
        "ị": "i",
        "į": "i",
        "ḭ": "i",
        "ɨ": "i",
        "ı": "i",
        "ⓙ": "j",
        "ｊ": "j",
        "ĵ": "j",
        "ǰ": "j",
        "ɉ": "j",
        "ⓚ": "k",
        "ｋ": "k",
        "ḱ": "k",
        "ǩ": "k",
        "ḳ": "k",
        "ķ": "k",
        "ḵ": "k",
        "ƙ": "k",
        "ⱪ": "k",
        "ꝁ": "k",
        "ꝃ": "k",
        "ꝅ": "k",
        "ꞣ": "k",
        "ⓛ": "l",
        "ｌ": "l",
        "ŀ": "l",
        "ĺ": "l",
        "ľ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ḻ": "l",
        "ſ": "l",
        "ł": "l",
        "ƚ": "l",
        "ɫ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ꞁ": "l",
        "ꝇ": "l",
        "ǉ": "lj",
        "ⓜ": "m",
        "ｍ": "m",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ɯ": "m",
        "ⓝ": "n",
        "ｎ": "n",
        "ǹ": "n",
        "ń": "n",
        "ñ": "n",
        "ṅ": "n",
        "ň": "n",
        "ṇ": "n",
        "ņ": "n",
        "ṋ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ɲ": "n",
        "ŉ": "n",
        "ꞑ": "n",
        "ꞥ": "n",
        "ǌ": "nj",
        "ⓞ": "o",
        "ｏ": "o",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "ồ": "o",
        "ố": "o",
        "ỗ": "o",
        "ổ": "o",
        "õ": "o",
        "ṍ": "o",
        "ȭ": "o",
        "ṏ": "o",
        "ō": "o",
        "ṑ": "o",
        "ṓ": "o",
        "ŏ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ö": "o",
        "ȫ": "o",
        "ỏ": "o",
        "ő": "o",
        "ǒ": "o",
        "ȍ": "o",
        "ȏ": "o",
        "ơ": "o",
        "ờ": "o",
        "ớ": "o",
        "ỡ": "o",
        "ở": "o",
        "ợ": "o",
        "ọ": "o",
        "ộ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "ɔ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ɵ": "o",
        "œ": "oe",
        "ƣ": "oi",
        "ȣ": "ou",
        "ꝏ": "oo",
        "ⓟ": "p",
        "ｐ": "p",
        "ṕ": "p",
        "ṗ": "p",
        "ƥ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝓ": "p",
        "ꝕ": "p",
        "ⓠ": "q",
        "ｑ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ꝙ": "q",
        "ⓡ": "r",
        "ｒ": "r",
        "ŕ": "r",
        "ṙ": "r",
        "ř": "r",
        "ȑ": "r",
        "ȓ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ŗ": "r",
        "ṟ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ꝛ": "r",
        "ꞧ": "r",
        "ꞃ": "r",
        "ⓢ": "s",
        "ｓ": "s",
        "ß": "s",
        "ś": "s",
        "ṥ": "s",
        "ŝ": "s",
        "ṡ": "s",
        "š": "s",
        "ṧ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ș": "s",
        "ş": "s",
        "ȿ": "s",
        "ꞩ": "s",
        "ꞅ": "s",
        "ẛ": "s",
        "ⓣ": "t",
        "ｔ": "t",
        "ṫ": "t",
        "ẗ": "t",
        "ť": "t",
        "ṭ": "t",
        "ț": "t",
        "ţ": "t",
        "ṱ": "t",
        "ṯ": "t",
        "ŧ": "t",
        "ƭ": "t",
        "ʈ": "t",
        "ⱦ": "t",
        "ꞇ": "t",
        "ꜩ": "tz",
        "ⓤ": "u",
        "ｕ": "u",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ũ": "u",
        "ṹ": "u",
        "ū": "u",
        "ṻ": "u",
        "ŭ": "u",
        "ü": "u",
        "ǜ": "u",
        "ǘ": "u",
        "ǖ": "u",
        "ǚ": "u",
        "ủ": "u",
        "ů": "u",
        "ű": "u",
        "ǔ": "u",
        "ȕ": "u",
        "ȗ": "u",
        "ư": "u",
        "ừ": "u",
        "ứ": "u",
        "ữ": "u",
        "ử": "u",
        "ự": "u",
        "ụ": "u",
        "ṳ": "u",
        "ų": "u",
        "ṷ": "u",
        "ṵ": "u",
        "ʉ": "u",
        "ⓥ": "v",
        "ｖ": "v",
        "ṽ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ꝟ": "v",
        "ʌ": "v",
        "ꝡ": "vy",
        "ⓦ": "w",
        "ｗ": "w",
        "ẁ": "w",
        "ẃ": "w",
        "ŵ": "w",
        "ẇ": "w",
        "ẅ": "w",
        "ẘ": "w",
        "ẉ": "w",
        "ⱳ": "w",
        "ⓧ": "x",
        "ｘ": "x",
        "ẋ": "x",
        "ẍ": "x",
        "ⓨ": "y",
        "ｙ": "y",
        "ỳ": "y",
        "ý": "y",
        "ŷ": "y",
        "ỹ": "y",
        "ȳ": "y",
        "ẏ": "y",
        "ÿ": "y",
        "ỷ": "y",
        "ẙ": "y",
        "ỵ": "y",
        "ƴ": "y",
        "ɏ": "y",
        "ỿ": "y",
        "ⓩ": "z",
        "ｚ": "z",
        "ź": "z",
        "ẑ": "z",
        "ż": "z",
        "ž": "z",
        "ẓ": "z",
        "ẕ": "z",
        "ƶ": "z",
        "ȥ": "z",
        "ɀ": "z",
        "ⱬ": "z",
        "ꝣ": "z",
        "Ά": "Α",
        "Έ": "Ε",
        "Ή": "Η",
        "Ί": "Ι",
        "Ϊ": "Ι",
        "Ό": "Ο",
        "Ύ": "Υ",
        "Ϋ": "Υ",
        "Ώ": "Ω",
        "ά": "α",
        "έ": "ε",
        "ή": "η",
        "ί": "ι",
        "ϊ": "ι",
        "ΐ": "ι",
        "ό": "ο",
        "ύ": "υ",
        "ϋ": "υ",
        "ΰ": "υ",
        "ώ": "ω",
        "ς": "σ",
        "’": "'"
      };
    }), e.define("select2/data/base", ["../utils"], function (i) {
      function n(e, t) {
        n.__super__.constructor.call(this);
      }

      return i.Extend(n, i.Observable), n.prototype.current = function (e) {
        throw new Error("The `current` method must be defined in child classes.");
      }, n.prototype.query = function (e, t) {
        throw new Error("The `query` method must be defined in child classes.");
      }, n.prototype.bind = function (e, t) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (e, t) {
        var n = e.id + "-result-";
        return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n;
      }, n;
    }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, l, c) {
      function n(e, t) {
        this.$element = e, this.options = t, n.__super__.constructor.call(this);
      }

      return l.Extend(n, e), n.prototype.current = function (e) {
        var t = this;
        e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (e) {
          return t.item(c(e));
        }));
      }, n.prototype.select = function (r) {
        var s = this;
        if (r.selected = !0, null != r.element && "option" === r.element.tagName.toLowerCase()) return r.element.selected = !0, void this.$element.trigger("input").trigger("change");
        if (this.$element.prop("multiple")) this.current(function (e) {
          var t = [];
          (r = [r]).push.apply(r, e);

          for (var n = 0; n < r.length; n++) {
            var i = r[n].id;
            -1 === t.indexOf(i) && t.push(i);
          }

          s.$element.val(t), s.$element.trigger("input").trigger("change");
        });else {
          var e = r.id;
          this.$element.val(e), this.$element.trigger("input").trigger("change");
        }
      }, n.prototype.unselect = function (r) {
        var s = this;

        if (this.$element.prop("multiple")) {
          if (r.selected = !1, null != r.element && "option" === r.element.tagName.toLowerCase()) return r.element.selected = !1, void this.$element.trigger("input").trigger("change");
          this.current(function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var i = e[n].id;
              i !== r.id && -1 === t.indexOf(i) && t.push(i);
            }

            s.$element.val(t), s.$element.trigger("input").trigger("change");
          });
        }
      }, n.prototype.bind = function (e, t) {
        var n = this;
        (this.container = e).on("select", function (e) {
          n.select(e.data);
        }), e.on("unselect", function (e) {
          n.unselect(e.data);
        });
      }, n.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          l.RemoveData(this);
        });
      }, n.prototype.query = function (i, e) {
        var r = [],
            s = this;
        this.$element.children().each(function () {
          if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
            var e = c(this),
                t = s.item(e),
                n = s.matches(i, t);
            null !== n && r.push(n);
          }
        }), e({
          results: r
        });
      }, n.prototype.addOptions = function (e) {
        this.$element.append(e);
      }, n.prototype.option = function (e) {
        var t;
        e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);

        var n = this._normalizeItem(e);

        return n.element = t, l.StoreData(t, "data", n), c(t);
      }, n.prototype.item = function (e) {
        var t = {};
        if (null != (t = l.GetData(e[0], "data"))) return t;
        var n = e[0];
        if ("option" === n.tagName.toLowerCase()) t = {
          id: e.val(),
          text: e.text(),
          disabled: e.prop("disabled"),
          selected: e.prop("selected"),
          title: e.prop("title")
        };else if ("optgroup" === n.tagName.toLowerCase()) {
          t = {
            text: e.prop("label"),
            children: [],
            title: e.prop("title")
          };

          for (var i = e.children("option"), r = [], s = 0; s < i.length; s++) {
            var o = c(i[s]),
                a = this.item(o);
            r.push(a);
          }

          t.children = r;
        }
        return (t = this._normalizeItem(t)).element = e[0], l.StoreData(e[0], "data", t), t;
      }, n.prototype._normalizeItem = function (e) {
        e !== Object(e) && (e = {
          id: e,
          text: e
        });
        return null != (e = c.extend({}, {
          text: ""
        }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), c.extend({}, {
          selected: !1,
          disabled: !1
        }, e);
      }, n.prototype.matches = function (e, t) {
        return this.options.get("matcher")(e, t);
      }, n;
    }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, f) {
      function i(e, t) {
        this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t);
      }

      return t.Extend(i, e), i.prototype.bind = function (e, t) {
        i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
      }, i.prototype.select = function (n) {
        var e = this.$element.find("option").filter(function (e, t) {
          return t.value == n.id.toString();
        });
        0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n);
      }, i.prototype.convertToOptions = function (e) {
        var t = this,
            n = this.$element.find("option"),
            i = n.map(function () {
          return t.item(f(this)).id;
        }).get(),
            r = [];

        function s(e) {
          return function () {
            return f(this).val() == e.id;
          };
        }

        for (var o = 0; o < e.length; o++) {
          var a = this._normalizeItem(e[o]);

          if (0 <= i.indexOf(a.id)) {
            var l = n.filter(s(a)),
                c = this.item(l),
                u = f.extend(!0, {}, a, c),
                d = this.option(u);
            l.replaceWith(d);
          } else {
            var p = this.option(a);

            if (a.children) {
              var h = this.convertToOptions(a.children);
              p.append(h);
            }

            r.push(p);
          }
        }

        return r;
      }, i;
    }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, s) {
      function n(e, t) {
        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
      }

      return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
        var t = {
          data: function (e) {
            return s.extend({}, e, {
              q: e.term
            });
          },
          transport: function (e, t, n) {
            var i = s.ajax(e);
            return i.then(t), i.fail(n), i;
          }
        };
        return s.extend({}, t, e, !0);
      }, n.prototype.processResults = function (e) {
        return e;
      }, n.prototype.query = function (n, i) {
        var r = this;
        null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
        var t = s.extend({
          type: "GET"
        }, this.ajaxOptions);

        function e() {
          var e = t.transport(t, function (e) {
            var t = r.processResults(e, n);
            r.options.get("debug") && window.console && console.error && (t && t.results && Array.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t);
          }, function () {
            "status" in e && (0 === e.status || "0" === e.status) || r.trigger("results:message", {
              message: "errorLoading"
            });
          });
          r._request = e;
        }

        "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
      }, n;
    }), e.define("select2/data/tags", ["jquery"], function (t) {
      function e(e, t, n) {
        var i = n.get("tags"),
            r = n.get("createTag");
        void 0 !== r && (this.createTag = r);
        var s = n.get("insertTag");
        if (void 0 !== s && (this.insertTag = s), e.call(this, t, n), Array.isArray(i)) for (var o = 0; o < i.length; o++) {
          var a = i[o],
              l = this._normalizeItem(a),
              c = this.option(l);

          this.$element.append(c);
        }
      }

      return e.prototype.query = function (e, c, u) {
        var d = this;
        this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
          for (var i = t.results, r = 0; r < i.length; r++) {
            var s = i[r],
                o = null != s.children && !e({
              results: s.children
            }, !0);
            if ((s.text || "").toUpperCase() === (c.term || "").toUpperCase() || o) return !n && (t.data = i, void u(t));
          }

          if (n) return !0;
          var a = d.createTag(c);

          if (null != a) {
            var l = d.option(a);
            l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a);
          }

          t.results = i, u(t);
        }) : e.call(this, c, u);
      }, e.prototype.createTag = function (e, t) {
        if (null == t.term) return null;
        var n = t.term.trim();
        return "" === n ? null : {
          id: n,
          text: n
        };
      }, e.prototype.insertTag = function (e, t, n) {
        t.unshift(n);
      }, e.prototype._removeOldTags = function (e) {
        this.$element.find("option[data-select2-tag]").each(function () {
          this.selected || t(this).remove();
        });
      }, e;
    }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
      function e(e, t, n) {
        var i = n.get("tokenizer");
        void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
      }

      return e.prototype.bind = function (e, t, n) {
        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
      }, e.prototype.query = function (e, t, n) {
        var i = this;
        t.term = t.term || "";
        var r = this.tokenizer(t, this.options, function (e) {
          var t = i._normalizeItem(e);

          if (!i.$element.find("option").filter(function () {
            return d(this).val() === t.id;
          }).length) {
            var n = i.option(t);
            n.attr("data-select2-tag", !0), i._removeOldTags(), i.addOptions([n]);
          }

          !function (e) {
            i.trigger("select", {
              data: e
            });
          }(t);
        });
        r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.trigger("focus")), t.term = r.term), e.call(this, t, n);
      }, e.prototype.tokenizer = function (e, t, n, i) {
        for (var r = n.get("tokenSeparators") || [], s = t.term, o = 0, a = this.createTag || function (e) {
          return {
            id: e.term,
            text: e.term
          };
        }; o < s.length;) {
          var l = s[o];

          if (-1 !== r.indexOf(l)) {
            var c = s.substr(0, o),
                u = a(d.extend({}, t, {
              term: c
            }));
            null != u ? (i(u), s = s.substr(o + 1) || "", o = 0) : o++;
          } else o++;
        }

        return {
          term: s
        };
      }, e;
    }), e.define("select2/data/minimumInputLength", [], function () {
      function e(e, t, n) {
        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
      }

      return e.prototype.query = function (e, t, n) {
        t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
          message: "inputTooShort",
          args: {
            minimum: this.minimumInputLength,
            input: t.term,
            params: t
          }
        }) : e.call(this, t, n);
      }, e;
    }), e.define("select2/data/maximumInputLength", [], function () {
      function e(e, t, n) {
        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
      }

      return e.prototype.query = function (e, t, n) {
        t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
          message: "inputTooLong",
          args: {
            maximum: this.maximumInputLength,
            input: t.term,
            params: t
          }
        }) : e.call(this, t, n);
      }, e;
    }), e.define("select2/data/maximumSelectionLength", [], function () {
      function e(e, t, n) {
        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
      }

      return e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), t.on("select", function () {
          i._checkIfMaximumSelected();
        });
      }, e.prototype.query = function (e, t, n) {
        var i = this;

        this._checkIfMaximumSelected(function () {
          e.call(i, t, n);
        });
      }, e.prototype._checkIfMaximumSelected = function (e, n) {
        var i = this;
        this.current(function (e) {
          var t = null != e ? e.length : 0;
          0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger("results:message", {
            message: "maximumSelected",
            args: {
              maximum: i.maximumSelectionLength
            }
          }) : n && n();
        });
      }, e;
    }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
      function n(e, t) {
        this.$element = e, this.options = t, n.__super__.constructor.call(this);
      }

      return e.Extend(n, e.Observable), n.prototype.render = function () {
        var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
        return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
      }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
        this.$dropdown.remove();
      }, n;
    }), e.define("select2/dropdown/search", ["jquery"], function (s) {
      function e() {}

      return e.prototype.render = function (e) {
        var t = e.call(this),
            n = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
        return this.$searchContainer = n, this.$search = n.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), t.prepend(n), t;
      }, e.prototype.bind = function (e, t, n) {
        var i = this,
            r = t.id + "-results";
        e.call(this, t, n), this.$search.on("keydown", function (e) {
          i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
        }), this.$search.on("input", function (e) {
          s(this).off("keyup");
        }), this.$search.on("keyup input", function (e) {
          i.handleSearch(e);
        }), t.on("open", function () {
          i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", r), i.$search.trigger("focus"), window.setTimeout(function () {
            i.$search.trigger("focus");
          }, 0);
        }), t.on("close", function () {
          i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur");
        }), t.on("focus", function () {
          t.isOpen() || i.$search.trigger("focus");
        }), t.on("results:all", function (e) {
          null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer[0].classList.remove("select2-search--hide") : i.$searchContainer[0].classList.add("select2-search--hide"));
        }), t.on("results:focus", function (e) {
          e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
        });
      }, e.prototype.handleSearch = function (e) {
        if (!this._keyUpPrevented) {
          var t = this.$search.val();
          this.trigger("query", {
            term: t
          });
        }

        this._keyUpPrevented = !1;
      }, e.prototype.showSearch = function (e, t) {
        return !0;
      }, e;
    }), e.define("select2/dropdown/hidePlaceholder", [], function () {
      function e(e, t, n, i) {
        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i);
      }

      return e.prototype.append = function (e, t) {
        t.results = this.removePlaceholder(t.results), e.call(this, t);
      }, e.prototype.normalizePlaceholder = function (e, t) {
        return "string" == typeof t && (t = {
          id: "",
          text: t
        }), t;
      }, e.prototype.removePlaceholder = function (e, t) {
        for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
          var r = t[i];
          this.placeholder.id === r.id && n.splice(i, 1);
        }

        return n;
      }, e;
    }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
      function e(e, t, n, i) {
        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }

      return e.prototype.append = function (e, t) {
        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
      }, e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), t.on("query", function (e) {
          i.lastParams = e, i.loading = !0;
        }), t.on("query:append", function (e) {
          i.lastParams = e, i.loading = !0;
        }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
      }, e.prototype.loadMoreIfNeeded = function () {
        var e = n.contains(document.documentElement, this.$loadingMore[0]);

        if (!this.loading && e) {
          var t = this.$results.offset().top + this.$results.outerHeight(!1);
          this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
        }
      }, e.prototype.loadMore = function () {
        this.loading = !0;
        var e = n.extend({}, {
          page: 1
        }, this.lastParams);
        e.page++, this.trigger("query:append", e);
      }, e.prototype.showLoadingMore = function (e, t) {
        return t.pagination && t.pagination.more;
      }, e.prototype.createLoadingMore = function () {
        var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
            t = this.options.get("translations").get("loadingMore");
        return e.html(t(this.lastParams)), e;
      }, e;
    }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
      function e(e, t, n) {
        this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n);
      }

      return e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), t.on("open", function () {
          i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
        }), t.on("close", function () {
          i._hideDropdown(), i._detachPositioningHandler(t);
        }), this.$dropdownContainer.on("mousedown", function (e) {
          e.stopPropagation();
        });
      }, e.prototype.destroy = function (e) {
        e.call(this), this.$dropdownContainer.remove();
      }, e.prototype.position = function (e, t, n) {
        t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({
          position: "absolute",
          top: -999999
        }), this.$container = n;
      }, e.prototype.render = function (e) {
        var t = f("<span></span>"),
            n = e.call(this);
        return t.append(n), this.$dropdownContainer = t;
      }, e.prototype._hideDropdown = function (e) {
        this.$dropdownContainer.detach();
      }, e.prototype._bindContainerResultHandlers = function (e, t) {
        if (!this._containerResultsHandlersBound) {
          var n = this;
          t.on("results:all", function () {
            n._positionDropdown(), n._resizeDropdown();
          }), t.on("results:append", function () {
            n._positionDropdown(), n._resizeDropdown();
          }), t.on("results:message", function () {
            n._positionDropdown(), n._resizeDropdown();
          }), t.on("select", function () {
            n._positionDropdown(), n._resizeDropdown();
          }), t.on("unselect", function () {
            n._positionDropdown(), n._resizeDropdown();
          }), this._containerResultsHandlersBound = !0;
        }
      }, e.prototype._attachPositioningHandler = function (e, t) {
        var n = this,
            i = "scroll.select2." + t.id,
            r = "resize.select2." + t.id,
            s = "orientationchange.select2." + t.id,
            o = this.$container.parents().filter(a.hasScroll);
        o.each(function () {
          a.StoreData(this, "select2-scroll-position", {
            x: f(this).scrollLeft(),
            y: f(this).scrollTop()
          });
        }), o.on(i, function (e) {
          var t = a.GetData(this, "select2-scroll-position");
          f(this).scrollTop(t.y);
        }), f(window).on(i + " " + r + " " + s, function (e) {
          n._positionDropdown(), n._resizeDropdown();
        });
      }, e.prototype._detachPositioningHandler = function (e, t) {
        var n = "scroll.select2." + t.id,
            i = "resize.select2." + t.id,
            r = "orientationchange.select2." + t.id;
        this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r);
      }, e.prototype._positionDropdown = function () {
        var e = f(window),
            t = this.$dropdown[0].classList.contains("select2-dropdown--above"),
            n = this.$dropdown[0].classList.contains("select2-dropdown--below"),
            i = null,
            r = this.$container.offset();
        r.bottom = r.top + this.$container.outerHeight(!1);
        var s = {
          height: this.$container.outerHeight(!1)
        };
        s.top = r.top, s.bottom = r.top + s.height;
        var o = this.$dropdown.outerHeight(!1),
            a = e.scrollTop(),
            l = e.scrollTop() + e.height(),
            c = a < r.top - o,
            u = l > r.bottom + o,
            d = {
          left: r.left,
          top: s.bottom
        },
            p = this.$dropdownParent;
        "static" === p.css("position") && (p = p.offsetParent());
        var h = {
          top: 0,
          left: 0
        };
        (f.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = s.top - h.top - o), null != i && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + i), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + i)), this.$dropdownContainer.css(d);
      }, e.prototype._resizeDropdown = function () {
        var e = {
          width: this.$container.outerWidth(!1) + "px"
        };
        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
      }, e.prototype._showDropdown = function (e) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, e;
    }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function e(e, t, n, i) {
        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
      }

      return e.prototype.showSearch = function (e, t) {
        return !(function e(t) {
          for (var n = 0, i = 0; i < t.length; i++) {
            var r = t[i];
            r.children ? n += e(r.children) : n++;
          }

          return n;
        }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
      }, e;
    }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
      function e() {}

      return e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), t.on("close", function (e) {
          i._handleSelectOnClose(e);
        });
      }, e.prototype._handleSelectOnClose = function (e, t) {
        if (t && null != t.originalSelect2Event) {
          var n = t.originalSelect2Event;
          if ("select" === n._type || "unselect" === n._type) return;
        }

        var i = this.getHighlightedResults();

        if (!(i.length < 1)) {
          var r = s.GetData(i[0], "data");
          null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
            data: r
          });
        }
      }, e;
    }), e.define("select2/dropdown/closeOnSelect", [], function () {
      function e() {}

      return e.prototype.bind = function (e, t, n) {
        var i = this;
        e.call(this, t, n), t.on("select", function (e) {
          i._selectTriggered(e);
        }), t.on("unselect", function (e) {
          i._selectTriggered(e);
        });
      }, e.prototype._selectTriggered = function (e, t) {
        var n = t.originalEvent;
        n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
          originalEvent: n,
          originalSelect2Event: t
        });
      }, e;
    }), e.define("select2/dropdown/dropdownCss", ["../utils"], function (i) {
      function e() {}

      return e.prototype.render = function (e) {
        var t = e.call(this),
            n = this.options.get("dropdownCssClass") || "";
        return -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(n), t;
      }, e;
    }), e.define("select2/i18n/en", [], function () {
      return {
        errorLoading: function () {
          return "The results could not be loaded.";
        },
        inputTooLong: function (e) {
          var t = e.input.length - e.maximum,
              n = "Please delete " + t + " character";
          return 1 != t && (n += "s"), n;
        },
        inputTooShort: function (e) {
          return "Please enter " + (e.minimum - e.input.length) + " or more characters";
        },
        loadingMore: function () {
          return "Loading more results…";
        },
        maximumSelected: function (e) {
          var t = "You can only select " + e.maximum + " item";
          return 1 != e.maximum && (t += "s"), t;
        },
        noResults: function () {
          return "No results found";
        },
        searching: function () {
          return "Searching…";
        },
        removeAllItems: function () {
          return "Remove all items";
        },
        removeItem: function () {
          return "Remove item";
        }
      };
    }), e.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./i18n/en"], function (l, s, o, a, c, u, d, p, h, f, g, t, m, v, y, _, b, $, w, x, A, D, S, E, O, C, L, T, q, e) {
      function n() {
        this.reset();
      }

      return n.prototype.apply = function (e) {
        if (null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = y : null != e.data ? e.dataAdapter = v : e.dataAdapter = m, 0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), null == e.resultsAdapter && (e.resultsAdapter = s, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L))), null == e.dropdownAdapter) {
          if (e.multiple) e.dropdownAdapter = A;else {
            var t = f.Decorate(A, D);
            e.dropdownAdapter = t;
          }
          0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O);
        }

        null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o, null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), e.language.push("en");

        for (var n = [], i = 0; i < e.language.length; i++) {
          var r = e.language[i];
          -1 === n.indexOf(r) && n.push(r);
        }

        return e.language = n, e.translations = this._processTranslations(e.language, e.debug), e;
      }, n.prototype.reset = function () {
        function a(e) {
          return e.replace(/[^\u0000-\u007E]/g, function (e) {
            return t[e] || e;
          });
        }

        this.defaults = {
          amdLanguageBase: "./i18n/",
          autocomplete: "off",
          closeOnSelect: !0,
          debug: !1,
          dropdownAutoWidth: !1,
          escapeMarkup: f.escapeMarkup,
          language: {},
          matcher: function e(t, n) {
            if (null == t.term || "" === t.term.trim()) return n;

            if (n.children && 0 < n.children.length) {
              for (var i = l.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) null == e(t, n.children[r]) && i.children.splice(r, 1);

              return 0 < i.children.length ? i : e(t, i);
            }

            var s = a(n.text).toUpperCase(),
                o = a(t.term).toUpperCase();
            return -1 < s.indexOf(o) ? n : null;
          },
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          scrollAfterSelect: !1,
          sorter: function (e) {
            return e;
          },
          templateResult: function (e) {
            return e.text;
          },
          templateSelection: function (e) {
            return e.text;
          },
          theme: "default",
          width: "resolve"
        };
      }, n.prototype.applyFromElement = function (e, t) {
        var n = e.language,
            i = this.defaults.language,
            r = t.prop("lang"),
            s = t.closest("[lang]").prop("lang"),
            o = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s));
        return e.language = o, e;
      }, n.prototype._resolveLanguage = function (e) {
        if (!e) return [];
        if (l.isEmptyObject(e)) return [];
        if (l.isPlainObject(e)) return [e];
        var t;
        t = Array.isArray(e) ? e : [e];

        for (var n = [], i = 0; i < t.length; i++) if (n.push(t[i]), "string" == typeof t[i] && 0 < t[i].indexOf("-")) {
          var r = t[i].split("-")[0];
          n.push(r);
        }

        return n;
      }, n.prototype._processTranslations = function (e, t) {
        for (var n = new g(), i = 0; i < e.length; i++) {
          var r = new g(),
              s = e[i];
          if ("string" == typeof s) try {
            r = g.loadPath(s);
          } catch (e) {
            try {
              s = this.defaults.amdLanguageBase + s, r = g.loadPath(s);
            } catch (e) {
              t && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.');
            }
          } else r = l.isPlainObject(s) ? new g(s) : s;
          n.extend(r);
        }

        return n;
      }, n.prototype.set = function (e, t) {
        var n = {};
        n[l.camelCase(e)] = t;

        var i = f._convertData(n);

        l.extend(!0, this.defaults, i);
      }, new n();
    }), e.define("select2/options", ["jquery", "./defaults", "./utils"], function (d, n, p) {
      function e(e, t) {
        this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), this.options = n.apply(this.options);
      }

      return e.prototype.fromElement = function (e) {
        var t = ["select2"];
        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
        var n = {};

        function i(e, t) {
          return t.toUpperCase();
        }

        for (var r = 0; r < e[0].attributes.length; r++) {
          var s = e[0].attributes[r].name,
              o = "data-";

          if (s.substr(0, o.length) == o) {
            var a = s.substring(o.length),
                l = p.GetData(e[0], a);
            n[a.replace(/-([a-z])/g, i)] = l;
          }
        }

        d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
        var c = d.extend(!0, {}, p.GetData(e[0]), n);

        for (var u in c = p._convertData(c)) -1 < t.indexOf(u) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);

        return this;
      }, e.prototype.get = function (e) {
        return this.options[e];
      }, e.prototype.set = function (e, t) {
        this.options[e] = t;
      }, e;
    }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, c, u, i) {
      var d = function (e, t) {
        null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
        var n = e.attr("tabindex") || 0;
        u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
        var i = this.options.get("dataAdapter");
        this.dataAdapter = new i(e, this.options);
        var r = this.render();

        this._placeContainer(r);

        var s = this.options.get("selectionAdapter");
        this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
        var o = this.options.get("dropdownAdapter");
        this.dropdown = new o(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
        var a = this.options.get("resultsAdapter");
        this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
        var l = this;
        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
          l.trigger("selection:update", {
            data: e
          });
        }), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
      };

      return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
        return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
      }, d.prototype._placeContainer = function (e) {
        e.insertAfter(this.$element);

        var t = this._resolveWidth(this.$element, this.options.get("width"));

        null != t && e.css("width", t);
      }, d.prototype._resolveWidth = function (e, t) {
        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

        if ("resolve" == t) {
          var i = this._resolveWidth(e, "style");

          return null != i ? i : this._resolveWidth(e, "element");
        }

        if ("element" == t) {
          var r = e.outerWidth(!1);
          return r <= 0 ? "auto" : r + "px";
        }

        if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
        var s = e.attr("style");
        if ("string" != typeof s) return null;

        for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
          var c = o[a].replace(/\s/g, "").match(n);
          if (null !== c && 1 <= c.length) return c[1];
        }

        return null;
      }, d.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, d.prototype._registerDomEvents = function () {
        var t = this;
        this.$element.on("change.select2", function () {
          t.dataAdapter.current(function (e) {
            t.trigger("selection:update", {
              data: e
            });
          });
        }), this.$element.on("focus.select2", function (e) {
          t.trigger("focus", e);
        }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function (e) {
          t._syncA(), t._syncS(e);
        }), this._observer.observe(this.$element[0], {
          attributes: !0,
          childList: !0,
          subtree: !1
        });
      }, d.prototype._registerDataEvents = function () {
        var n = this;
        this.dataAdapter.on("*", function (e, t) {
          n.trigger(e, t);
        });
      }, d.prototype._registerSelectionEvents = function () {
        var n = this,
            i = ["toggle", "focus"];
        this.selection.on("toggle", function () {
          n.toggleDropdown();
        }), this.selection.on("focus", function (e) {
          n.focus(e);
        }), this.selection.on("*", function (e, t) {
          -1 === i.indexOf(e) && n.trigger(e, t);
        });
      }, d.prototype._registerDropdownEvents = function () {
        var n = this;
        this.dropdown.on("*", function (e, t) {
          n.trigger(e, t);
        });
      }, d.prototype._registerResultsEvents = function () {
        var n = this;
        this.results.on("*", function (e, t) {
          n.trigger(e, t);
        });
      }, d.prototype._registerEvents = function () {
        var n = this;
        this.on("open", function () {
          n.$container[0].classList.add("select2-container--open");
        }), this.on("close", function () {
          n.$container[0].classList.remove("select2-container--open");
        }), this.on("enable", function () {
          n.$container[0].classList.remove("select2-container--disabled");
        }), this.on("disable", function () {
          n.$container[0].classList.add("select2-container--disabled");
        }), this.on("blur", function () {
          n.$container[0].classList.remove("select2-container--focus");
        }), this.on("query", function (t) {
          n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
            n.trigger("results:all", {
              data: e,
              query: t
            });
          });
        }), this.on("query:append", function (t) {
          this.dataAdapter.query(t, function (e) {
            n.trigger("results:append", {
              data: e,
              query: t
            });
          });
        }), this.on("keypress", function (e) {
          var t = e.which;
          n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault());
        });
      }, d.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, d.prototype._isChangeMutation = function (e) {
        var t = this;
        if (e.addedNodes && 0 < e.addedNodes.length) for (var n = 0; n < e.addedNodes.length; n++) {
          if (e.addedNodes[n].selected) return !0;
        } else {
          if (e.removedNodes && 0 < e.removedNodes.length) return !0;
          if (Array.isArray(e)) return e.some(function (e) {
            return t._isChangeMutation(e);
          });
        }
        return !1;
      }, d.prototype._syncSubtree = function (e) {
        var t = this._isChangeMutation(e),
            n = this;

        t && this.dataAdapter.current(function (e) {
          n.trigger("selection:update", {
            data: e
          });
        });
      }, d.prototype.trigger = function (e, t) {
        var n = d.__super__.trigger,
            i = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting",
          clear: "clearing"
        };

        if (void 0 === t && (t = {}), e in i) {
          var r = i[e],
              s = {
            prevented: !1,
            name: e,
            args: t
          };
          if (n.call(this, r, s), s.prevented) return void (t.prevented = !0);
        }

        n.call(this, e, t);
      }, d.prototype.toggleDropdown = function () {
        this.isDisabled() || (this.isOpen() ? this.close() : this.open());
      }, d.prototype.open = function () {
        this.isOpen() || this.isDisabled() || this.trigger("query", {});
      }, d.prototype.close = function (e) {
        this.isOpen() && this.trigger("close", {
          originalEvent: e
        });
      }, d.prototype.isEnabled = function () {
        return !this.isDisabled();
      }, d.prototype.isDisabled = function () {
        return this.options.get("disabled");
      }, d.prototype.isOpen = function () {
        return this.$container[0].classList.contains("select2-container--open");
      }, d.prototype.hasFocus = function () {
        return this.$container[0].classList.contains("select2-container--focus");
      }, d.prototype.focus = function (e) {
        this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
      }, d.prototype.enable = function (e) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
        var t = !e[0];
        this.$element.prop("disabled", t);
      }, d.prototype.data = function () {
        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
        var t = [];
        return this.dataAdapter.current(function (e) {
          t = e;
        }), t;
      }, d.prototype.val = function (e) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
        var t = e[0];
        Array.isArray(t) && (t = t.map(function (e) {
          return e.toString();
        })), this.$element.val(t).trigger("input").trigger("change");
      }, d.prototype.destroy = function () {
        this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, d.prototype.render = function () {
        var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
        return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
      }, d;
    }), e.define("jquery-mousewheel", ["jquery"], function (e) {
      return e;
    }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (r, e, s, t, o) {
      if (null == r.fn.select2) {
        var a = ["open", "close", "destroy"];

        r.fn.select2 = function (t) {
          if ("object" == typeof (t = t || {})) return this.each(function () {
            var e = r.extend(!0, {}, t);
            new s(r(this), e);
          }), this;
          if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
          var n,
              i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var e = o.GetData(this, "select2");
            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i);
          }), -1 < a.indexOf(t) ? this : n;
        };
      }

      return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), s;
    }), {
      define: e.define,
      require: e.require
    };
  }(),
      t = e.require("jquery.select2");

  return u.fn.select2.amd = e, t;
});

/***/ }),

/***/ "./src/libs.js":
/*!*********************!*\
  !*** ./src/libs.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_js_jquery_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/js/jquery.min */ "../../libs/js/jquery.min.js");
/* harmony import */ var _libs_js_jquery_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_js_jquery_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_owlcarousel2_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../plugins/owlcarousel2/assets/owl.carousel.min.css */ "../../plugins/owlcarousel2/assets/owl.carousel.min.css");
/* harmony import */ var _plugins_owlcarousel2_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_plugins_owlcarousel2_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/select2/dist/css/select2.min.css */ "./plugins/select2/dist/css/select2.min.css");
/* harmony import */ var _plugins_select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_select2_dist_css_select2_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_ion_range_slider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/ion-range-slider/css/ion.rangeSlider.min.css */ "./plugins/ion-range-slider/css/ion.rangeSlider.min.css");
/* harmony import */ var _plugins_ion_range_slider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugins_ion_range_slider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_jquery_ui_jquery_ui_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/jquery-ui/jquery-ui.min.css */ "./plugins/jquery-ui/jquery-ui.min.css");
/* harmony import */ var _plugins_jquery_ui_jquery_ui_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_jquery_ui_jquery_ui_min_css__WEBPACK_IMPORTED_MODULE_4__);
// Подключение Jquery

window.jQuery = _libs_js_jquery_min__WEBPACK_IMPORTED_MODULE_0___default.a;
window.$ = _libs_js_jquery_min__WEBPACK_IMPORTED_MODULE_0___default.a;
window.mobileWidth = 1279;
window.mobileWidthSmall = 768; // Подключение кастомных глобальных переменных и универсальных функций

__webpack_require__(/*! ../../../libs/js/customLib.js */ "../../libs/js/customLib.js"); // Подключение плагинов


__webpack_require__(/*! ../../../plugins/menu.js */ "../../plugins/menu.js");

__webpack_require__(/*! ../../../plugins/owlcarousel2/owl.carousel.min.js */ "../../plugins/owlcarousel2/owl.carousel.min.js");

 // Подключение Select 2

__webpack_require__(/*! ../plugins/select2/dist/js/select2.min */ "./plugins/select2/dist/js/select2.min.js");

 // Подключение Highcharts
// require('../plugins/highcharts/code/highcharts.js');
// require('../plugins/highcharts/code/highcharts-more.js');
// require('../plugins/highcharts/code/modules/solid-gauge.js');
// Подключение Ion Range Slider

__webpack_require__(/*! ../plugins/ion-range-slider/js/ion.rangeSlider.min */ "./plugins/ion-range-slider/js/ion.rangeSlider.min.js");

 // Подключение jQuery UI

__webpack_require__(/*! ../plugins/jquery-ui/jquery-ui.min.js */ "./plugins/jquery-ui/jquery-ui.min.js");

 // Подключение Masked input

__webpack_require__(/*! ../plugins/mask-input/dist/jquery.maskedinput.min */ "./plugins/mask-input/dist/jquery.maskedinput.min.js");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=libs.js.map