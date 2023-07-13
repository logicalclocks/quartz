import * as U from "react";
import Rt, { createContext as Mr, forwardRef as Tt, createElement as rr, Fragment as am, useContext as ht, useLayoutEffect as Ss, useEffect as ze, useState as et, useRef as ye, useMemo as _t, useCallback as q, useInsertionEffect as im, useId as Ir, cloneElement as ws, Children as Cs, isValidElement as fu, PureComponent as a0 } from "react";
import { createPortal as sm } from "react-dom";
var ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ks(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(t, o);
        return new a();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var hc = { exports: {} }, Io = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function i0() {
  if (Dd)
    return Io;
  Dd = 1;
  var e = Rt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, d = {}, f = null, p = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: o.current };
  }
  return Io.Fragment = r, Io.jsx = i, Io.jsxs = i, Io;
}
var Fo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function s0() {
  return Md || (Md = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function g(x) {
      if (x === null || typeof x != "object")
        return null;
      var L = m && x[m] || x[h];
      return typeof L == "function" ? L : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var L = arguments.length, K = new Array(L > 1 ? L - 1 : 0), he = 1; he < L; he++)
          K[he - 1] = arguments[he];
        S("error", x, K);
      }
    }
    function S(x, L, K) {
      {
        var he = b.ReactDebugCurrentFrame, Re = he.getStackAddendum();
        Re !== "" && (L += "%s", K = K.concat([Re]));
        var Ae = K.map(function(Ee) {
          return String(Ee);
        });
        Ae.unshift("Warning: " + L), Function.prototype.apply.call(console[x], console, Ae);
      }
    }
    var E = !1, C = !1, I = !1, T = !1, N = !1, V;
    V = Symbol.for("react.module.reference");
    function B(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || N || x === o || x === c || x === u || T || x === p || E || C || I || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === V || x.getModuleId !== void 0));
    }
    function X(x, L, K) {
      var he = x.displayName;
      if (he)
        return he;
      var Re = L.displayName || L.name || "";
      return Re !== "" ? K + "(" + Re + ")" : K;
    }
    function ne(x) {
      return x.displayName || "Context";
    }
    function J(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case s:
            var L = x;
            return ne(L) + ".Consumer";
          case i:
            var K = x;
            return ne(K._context) + ".Provider";
          case l:
            return X(x, x.render, "ForwardRef");
          case d:
            var he = x.displayName || null;
            return he !== null ? he : J(x.type) || "Memo";
          case f: {
            var Re = x, Ae = Re._payload, Ee = Re._init;
            try {
              return J(Ee(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ee = 0, oe, D, ce, de, M, F, z;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function O() {
      {
        if (ee === 0) {
          oe = console.log, D = console.info, ce = console.warn, de = console.error, M = console.group, F = console.groupCollapsed, z = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        ee++;
      }
    }
    function j() {
      {
        if (ee--, ee === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, x, {
              value: oe
            }),
            info: Q({}, x, {
              value: D
            }),
            warn: Q({}, x, {
              value: ce
            }),
            error: Q({}, x, {
              value: de
            }),
            group: Q({}, x, {
              value: M
            }),
            groupCollapsed: Q({}, x, {
              value: F
            }),
            groupEnd: Q({}, x, {
              value: z
            })
          });
        }
        ee < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = b.ReactCurrentDispatcher, H;
    function A(x, L, K) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (Re) {
            var he = Re.stack.trim().match(/\n( *(at )?)/);
            H = he && he[1] || "";
          }
        return `
` + H + x;
      }
    }
    var Z = !1, Y;
    {
      var ae = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new ae();
    }
    function $(x, L) {
      if (!x || Z)
        return "";
      {
        var K = Y.get(x);
        if (K !== void 0)
          return K;
      }
      var he;
      Z = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = w.current, w.current = null, O();
      try {
        if (L) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (It) {
              he = It;
            }
            Reflect.construct(x, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (It) {
              he = It;
            }
            x.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (It) {
            he = It;
          }
          x();
        }
      } catch (It) {
        if (It && he && typeof It.stack == "string") {
          for (var _e = It.stack.split(`
`), xt = he.stack.split(`
`), nt = _e.length - 1, st = xt.length - 1; nt >= 1 && st >= 0 && _e[nt] !== xt[st]; )
            st--;
          for (; nt >= 1 && st >= 0; nt--, st--)
            if (_e[nt] !== xt[st]) {
              if (nt !== 1 || st !== 1)
                do
                  if (nt--, st--, st < 0 || _e[nt] !== xt[st]) {
                    var Mt = `
` + _e[nt].replace(" at new ", " at ");
                    return x.displayName && Mt.includes("<anonymous>") && (Mt = Mt.replace("<anonymous>", x.displayName)), typeof x == "function" && Y.set(x, Mt), Mt;
                  }
                while (nt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        Z = !1, w.current = Ae, j(), Error.prepareStackTrace = Re;
      }
      var Cr = x ? x.displayName || x.name : "", ti = Cr ? A(Cr) : "";
      return typeof x == "function" && Y.set(x, ti), ti;
    }
    function xe(x, L, K) {
      return $(x, !1);
    }
    function pe(x) {
      var L = x.prototype;
      return !!(L && L.isReactComponent);
    }
    function le(x, L, K) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return $(x, pe(x));
      if (typeof x == "string")
        return A(x);
      switch (x) {
        case c:
          return A("Suspense");
        case u:
          return A("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return xe(x.render);
          case d:
            return le(x.type, L, K);
          case f: {
            var he = x, Re = he._payload, Ae = he._init;
            try {
              return le(Ae(Re), L, K);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, ge = {}, Se = b.ReactDebugCurrentFrame;
    function dt(x) {
      if (x) {
        var L = x._owner, K = le(x.type, x._source, L ? L.type : null);
        Se.setExtraStackFrame(K);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ce(x, L, K, he, Re) {
      {
        var Ae = Function.call.bind($e);
        for (var Ee in x)
          if (Ae(x, Ee)) {
            var _e = void 0;
            try {
              if (typeof x[Ee] != "function") {
                var xt = Error((he || "React class") + ": " + K + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xt.name = "Invariant Violation", xt;
              }
              _e = x[Ee](L, Ee, he, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              _e = nt;
            }
            _e && !(_e instanceof Error) && (dt(Re), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", K, Ee, typeof _e), dt(null)), _e instanceof Error && !(_e.message in ge) && (ge[_e.message] = !0, dt(Re), y("Failed %s type: %s", K, _e.message), dt(null));
          }
      }
    }
    var ct = Array.isArray;
    function tt(x) {
      return ct(x);
    }
    function De(x) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, K = L && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return K;
      }
    }
    function se(x) {
      try {
        return Te(x), !1;
      } catch {
        return !0;
      }
    }
    function Te(x) {
      return "" + x;
    }
    function At(x) {
      if (se(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(x)), Te(x);
    }
    var gt = b.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nr, jr, Br;
    Br = {};
    function te(x) {
      if ($e.call(x, "ref")) {
        var L = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ve(x) {
      if ($e.call(x, "key")) {
        var L = Object.getOwnPropertyDescriptor(x, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Sr(x, L) {
      if (typeof x.ref == "string" && gt.current && L && gt.current.stateNode !== L) {
        var K = J(gt.current.type);
        Br[K] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(gt.current.type), x.ref), Br[K] = !0);
      }
    }
    function G(x, L) {
      {
        var K = function() {
          Nr || (Nr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        K.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function ie(x, L) {
      {
        var K = function() {
          jr || (jr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        K.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var be = function(x, L, K, he, Re, Ae, Ee) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: L,
        ref: K,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function we(x, L, K, he, Re) {
      {
        var Ae, Ee = {}, _e = null, xt = null;
        K !== void 0 && (At(K), _e = "" + K), ve(L) && (At(L.key), _e = "" + L.key), te(L) && (xt = L.ref, Sr(L, Re));
        for (Ae in L)
          $e.call(L, Ae) && !it.hasOwnProperty(Ae) && (Ee[Ae] = L[Ae]);
        if (x && x.defaultProps) {
          var nt = x.defaultProps;
          for (Ae in nt)
            Ee[Ae] === void 0 && (Ee[Ae] = nt[Ae]);
        }
        if (_e || xt) {
          var st = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          _e && G(Ee, st), xt && ie(Ee, st);
        }
        return be(x, _e, xt, Re, he, gt.current, Ee);
      }
    }
    var He = b.ReactCurrentOwner, yt = b.ReactDebugCurrentFrame;
    function Xe(x) {
      if (x) {
        var L = x._owner, K = le(x.type, x._source, L ? L.type : null);
        yt.setExtraStackFrame(K);
      } else
        yt.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function zr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function wr() {
      {
        if (He.current) {
          var x = J(He.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function el(x) {
      {
        if (x !== void 0) {
          var L = x.fileName.replace(/^.*[\\\/]/, ""), K = x.lineNumber;
          return `

Check your code at ` + L + ":" + K + ".";
        }
        return "";
      }
    }
    var Za = {};
    function tl(x) {
      {
        var L = wr();
        if (!L) {
          var K = typeof x == "string" ? x : x.displayName || x.name;
          K && (L = `

Check the top-level render call using <` + K + ">.");
        }
        return L;
      }
    }
    function Ja(x, L) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var K = tl(L);
        if (Za[K])
          return;
        Za[K] = !0;
        var he = "";
        x && x._owner && x._owner !== He.current && (he = " It was passed a child from " + J(x._owner.type) + "."), Xe(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, he), Xe(null);
      }
    }
    function Qa(x, L) {
      {
        if (typeof x != "object")
          return;
        if (tt(x))
          for (var K = 0; K < x.length; K++) {
            var he = x[K];
            zr(he) && Ja(he, L);
          }
        else if (zr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Re = g(x);
          if (typeof Re == "function" && Re !== x.entries)
            for (var Ae = Re.call(x), Ee; !(Ee = Ae.next()).done; )
              zr(Ee.value) && Ja(Ee.value, L);
        }
      }
    }
    function cr(x) {
      {
        var L = x.type;
        if (L == null || typeof L == "string")
          return;
        var K;
        if (typeof L == "function")
          K = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === d))
          K = L.propTypes;
        else
          return;
        if (K) {
          var he = J(L);
          Ce(K, x.props, "prop", he, x);
        } else if (L.PropTypes !== void 0 && !rt) {
          rt = !0;
          var Re = J(L);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rl(x) {
      {
        for (var L = Object.keys(x.props), K = 0; K < L.length; K++) {
          var he = L[K];
          if (he !== "children" && he !== "key") {
            Xe(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Xe(null);
            break;
          }
        }
        x.ref !== null && (Xe(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function ei(x, L, K, he, Re, Ae) {
      {
        var Ee = B(x);
        if (!Ee) {
          var _e = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xt = el(Re);
          xt ? _e += xt : _e += wr();
          var nt;
          x === null ? nt = "null" : tt(x) ? nt = "array" : x !== void 0 && x.$$typeof === t ? (nt = "<" + (J(x.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, _e);
        }
        var st = we(x, L, K, Re, Ae);
        if (st == null)
          return st;
        if (Ee) {
          var Mt = L.children;
          if (Mt !== void 0)
            if (he)
              if (tt(Mt)) {
                for (var Cr = 0; Cr < Mt.length; Cr++)
                  Qa(Mt[Cr], x);
                Object.freeze && Object.freeze(Mt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qa(Mt, x);
        }
        return x === n ? rl(st) : cr(st), st;
      }
    }
    function nl(x, L, K) {
      return ei(x, L, K, !0);
    }
    function ol(x, L, K) {
      return ei(x, L, K, !1);
    }
    var al = ol, rn = nl;
    Fo.Fragment = n, Fo.jsx = al, Fo.jsxs = rn;
  }()), Fo;
}
process.env.NODE_ENV === "production" ? hc.exports = i0() : hc.exports = s0();
var W = hc.exports, ha = {};
function ma(e) {
  "@babel/helpers - typeof";
  return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ma(e);
}
function l0(e, t) {
  if (ma(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ma(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c0(e) {
  var t = l0(e, "string");
  return ma(t) === "symbol" ? t : String(t);
}
function pu(e, t, r) {
  return t = c0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function lm(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var u0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cm = lm(
  function(e) {
    return u0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function mc(e, t) {
  return mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, mc(e, t);
}
function d0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, mc(e, t);
}
function f0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function p0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t;
}
var h0 = /* @__PURE__ */ function() {
  function e(r) {
    this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.before = null;
  }
  var t = e.prototype;
  return t.insert = function(n) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var o = p0(this), a;
      this.tags.length === 0 ? a = this.before : a = this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(o, a), this.tags.push(o);
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = f0(i);
      try {
        var l = n.charCodeAt(1) === 105 && n.charCodeAt(0) === 64;
        s.insertRule(
          n,
          // we need to insert @import rules before anything else
          // otherwise there will be an error
          // technically this means that the @import rules will
          // _usually_(not always since there could be multiple style tags)
          // be the first ones in prod and generally later in dev
          // this shouldn't really matter in the real world though
          // @import is generally only used for font faces from google fonts and etc.
          // so while this could be technically correct then it would be slower and larger
          // for a tiny bit of correctness that won't matter in the real world
          l ? 0 : s.cssRules.length
        );
      } catch (c) {
        process.env.NODE_ENV !== "production" && console.warn('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}();
function m0(e) {
  function t(z, P, O, j, w) {
    for (var H = 0, A = 0, Z = 0, Y = 0, ae, $, xe = 0, pe = 0, le, $e = le = ae = 0, ge = 0, Se = 0, dt = 0, Ce = 0, ct = O.length, tt = ct - 1, De, se = "", Te = "", At = "", gt = "", it; ge < ct; ) {
      if ($ = O.charCodeAt(ge), ge === tt && A + Y + Z + H !== 0 && (A !== 0 && ($ = A === 47 ? 10 : 47), Y = Z = H = 0, ct++, tt++), A + Y + Z + H === 0) {
        if (ge === tt && (0 < Se && (se = se.replace(f, "")), 0 < se.trim().length)) {
          switch ($) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += O.charAt(ge);
          }
          $ = 59;
        }
        switch ($) {
          case 123:
            for (se = se.trim(), ae = se.charCodeAt(0), le = 1, Ce = ++ge; ge < ct; ) {
              switch ($ = O.charCodeAt(ge)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch ($ = O.charCodeAt(ge + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for ($e = ge + 1; $e < tt; ++$e)
                          switch (O.charCodeAt($e)) {
                            case 47:
                              if ($ === 42 && O.charCodeAt($e - 1) === 42 && ge + 2 !== $e) {
                                ge = $e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if ($ === 47) {
                                ge = $e + 1;
                                break e;
                              }
                          }
                        ge = $e;
                      }
                  }
                  break;
                case 91:
                  $++;
                case 40:
                  $++;
                case 34:
                case 39:
                  for (; ge++ < tt && O.charCodeAt(ge) !== $; )
                    ;
              }
              if (le === 0)
                break;
              ge++;
            }
            switch (le = O.substring(Ce, ge), ae === 0 && (ae = (se = se.replace(d, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < Se && (se = se.replace(f, "")), $ = se.charCodeAt(1), $) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Se = P;
                    break;
                  default:
                    Se = oe;
                }
                if (le = t(P, Se, le, $, w + 1), Ce = le.length, 0 < ce && (Se = r(oe, se, dt), it = s(3, le, Se, P, J, ne, Ce, $, w, j), se = Se.join(""), it !== void 0 && (Ce = (le = it.trim()).length) === 0 && ($ = 0, le = "")), 0 < Ce)
                  switch ($) {
                    case 115:
                      se = se.replace(I, i);
                    case 100:
                    case 109:
                    case 45:
                      le = se + "{" + le + "}";
                      break;
                    case 107:
                      se = se.replace(y, "$1 $2"), le = se + "{" + le + "}", le = ee === 1 || ee === 2 && a("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                      break;
                    default:
                      le = se + le, j === 112 && (le = (Te += le, ""));
                  }
                else
                  le = "";
                break;
              default:
                le = t(P, r(P, se, dt), le, j, w + 1);
            }
            At += le, le = dt = Se = $e = ae = 0, se = "", $ = O.charCodeAt(++ge);
            break;
          case 125:
          case 59:
            if (se = (0 < Se ? se.replace(f, "") : se).trim(), 1 < (Ce = se.length))
              switch ($e === 0 && (ae = se.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (Ce = (se = se.replace(" ", ":")).length), 0 < ce && (it = s(1, se, P, z, J, ne, Te.length, j, w, j)) !== void 0 && (Ce = (se = it.trim()).length) === 0 && (se = "\0\0"), ae = se.charCodeAt(0), $ = se.charCodeAt(1), ae) {
                case 0:
                  break;
                case 64:
                  if ($ === 105 || $ === 99) {
                    gt += se + O.charAt(ge);
                    break;
                  }
                default:
                  se.charCodeAt(Ce - 1) !== 58 && (Te += o(se, ae, $, se.charCodeAt(2)));
              }
            dt = Se = $e = ae = 0, se = "", $ = O.charCodeAt(++ge);
        }
      }
      switch ($) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + ae === 0 && j !== 107 && 0 < se.length && (Se = 1, se += "\0"), 0 < ce * M && s(0, se, P, z, J, ne, Te.length, j, w, j), ne = 1, J++;
          break;
        case 59:
        case 125:
          if (A + Y + Z + H === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, De = O.charAt(ge), $) {
            case 9:
            case 32:
              if (Y + H + A === 0)
                switch (xe) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    De = "";
                    break;
                  default:
                    $ !== 32 && (De = " ");
                }
              break;
            case 0:
              De = "\\0";
              break;
            case 12:
              De = "\\f";
              break;
            case 11:
              De = "\\v";
              break;
            case 38:
              Y + A + H === 0 && (Se = dt = 1, De = "\f" + De);
              break;
            case 108:
              if (Y + A + H + Q === 0 && 0 < $e)
                switch (ge - $e) {
                  case 2:
                    xe === 112 && O.charCodeAt(ge - 3) === 58 && (Q = xe);
                  case 8:
                    pe === 111 && (Q = pe);
                }
              break;
            case 58:
              Y + A + H === 0 && ($e = ge);
              break;
            case 44:
              A + Z + Y + H === 0 && (Se = 1, De += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Y = Y === $ ? 0 : Y === 0 ? $ : Y);
              break;
            case 91:
              Y + A + Z === 0 && H++;
              break;
            case 93:
              Y + A + Z === 0 && H--;
              break;
            case 41:
              Y + A + H === 0 && Z--;
              break;
            case 40:
              if (Y + A + H === 0) {
                if (ae === 0)
                  switch (2 * xe + 3 * pe) {
                    case 533:
                      break;
                    default:
                      ae = 1;
                  }
                Z++;
              }
              break;
            case 64:
              A + Z + Y + H + $e + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Y + H + Z))
                switch (A) {
                  case 0:
                    switch (2 * $ + 3 * O.charCodeAt(ge + 1)) {
                      case 235:
                        A = 47;
                        break;
                      case 220:
                        Ce = ge, A = 42;
                    }
                    break;
                  case 42:
                    $ === 47 && xe === 42 && Ce + 2 !== ge && (O.charCodeAt(Ce + 2) === 33 && (Te += O.substring(Ce, ge + 1)), De = "", A = 0);
                }
          }
          A === 0 && (se += De);
      }
      pe = xe, xe = $, ge++;
    }
    if (Ce = Te.length, 0 < Ce) {
      if (Se = P, 0 < ce && (it = s(2, Te, Se, z, J, ne, Ce, j, w, j), it !== void 0 && (Te = it).length === 0))
        return gt + Te + At;
      if (Te = Se.join(",") + "{" + Te + "}", ee * Q !== 0) {
        switch (ee !== 2 || a(Te, 2) || (Q = 0), Q) {
          case 111:
            Te = Te.replace(E, ":-moz-$1") + Te;
            break;
          case 112:
            Te = Te.replace(S, "::-webkit-input-$1") + Te.replace(S, "::-moz-$1") + Te.replace(S, ":-ms-input-$1") + Te;
        }
        Q = 0;
      }
    }
    return gt + Te + At;
  }
  function r(z, P, O) {
    var j = P.trim().split(g);
    P = j;
    var w = j.length, H = z.length;
    switch (H) {
      case 0:
      case 1:
        var A = 0;
        for (z = H === 0 ? "" : z[0] + " "; A < w; ++A)
          P[A] = n(z, P[A], O).trim();
        break;
      default:
        var Z = A = 0;
        for (P = []; A < w; ++A)
          for (var Y = 0; Y < H; ++Y)
            P[Z++] = n(z[Y] + " ", j[A], O).trim();
    }
    return P;
  }
  function n(z, P, O) {
    var j = P.charCodeAt(0);
    switch (33 > j && (j = (P = P.trim()).charCodeAt(0)), j) {
      case 38:
        return P.replace(b, "$1" + z.trim());
      case 58:
        return z.trim() + P.replace(b, "$1" + z.trim());
      default:
        if (0 < 1 * O && 0 < P.indexOf("\f"))
          return P.replace(b, (z.charCodeAt(0) === 58 ? "" : "$1") + z.trim());
    }
    return z + P;
  }
  function o(z, P, O, j) {
    var w = z + ";", H = 2 * P + 3 * O + 4 * j;
    if (H === 944) {
      z = w.indexOf(":", 9) + 1;
      var A = w.substring(z, w.length - 1).trim();
      return A = w.substring(0, z).trim() + A + ";", ee === 1 || ee === 2 && a(A, 1) ? "-webkit-" + A + A : A;
    }
    if (ee === 0 || ee === 2 && !a(w, 1))
      return w;
    switch (H) {
      case 1015:
        return w.charCodeAt(10) === 97 ? "-webkit-" + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? "-webkit-" + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? "-webkit-" + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + w + w;
      case 978:
        return "-webkit-" + w + "-moz-" + w + w;
      case 1019:
      case 983:
        return "-webkit-" + w + "-moz-" + w + "-ms-" + w + w;
      case 883:
        if (w.charCodeAt(8) === 45)
          return "-webkit-" + w + w;
        if (0 < w.indexOf("image-set(", 11))
          return w.replace(X, "$1-webkit-$2") + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + w.replace("-grow", "") + "-webkit-" + w + "-ms-" + w.replace("grow", "positive") + w;
            case 115:
              return "-webkit-" + w + "-ms-" + w.replace("shrink", "negative") + w;
            case 98:
              return "-webkit-" + w + "-ms-" + w.replace("basis", "preferred-size") + w;
          }
        return "-webkit-" + w + "-ms-" + w + w;
      case 964:
        return "-webkit-" + w + "-ms-flex-" + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99)
          break;
        return A = w.substring(w.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + w + "-ms-flex-pack" + A + w;
      case 1005:
        return m.test(w) ? w.replace(p, ":-webkit-") + w.replace(p, ":-moz-") + w : w;
      case 1e3:
        switch (A = w.substring(13).trim(), P = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(P)) {
          case 226:
            A = w.replace(C, "tb");
            break;
          case 232:
            A = w.replace(C, "tb-rl");
            break;
          case 220:
            A = w.replace(C, "lr");
            break;
          default:
            return w;
        }
        return "-webkit-" + w + "-ms-" + A + w;
      case 1017:
        if (w.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (P = (w = z).length - 10, A = (w.charCodeAt(P) === 33 ? w.substring(0, P) : w).substring(z.indexOf(":", 7) + 1).trim(), H = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8))
              break;
          case 115:
            w = w.replace(A, "-webkit-" + A) + ";" + w;
            break;
          case 207:
          case 102:
            w = w.replace(A, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + w.replace(A, "-webkit-" + A) + ";" + w.replace(A, "-ms-" + A + "box") + ";" + w;
        }
        return w + ";";
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return A = w.replace("-items", ""), "-webkit-" + w + "-webkit-box-" + A + "-ms-flex-" + A + w;
            case 115:
              return "-webkit-" + w + "-ms-flex-item-" + w.replace(N, "") + w;
            default:
              return "-webkit-" + w + "-ms-flex-line-pack" + w.replace("align-content", "").replace(N, "") + w;
          }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (B.test(z) === !0)
          return (A = z.substring(z.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(z.replace("stretch", "fill-available"), P, O, j).replace(":fill-available", ":stretch") : w.replace(A, "-webkit-" + A) + w.replace(A, "-moz-" + A.replace("fill-", "")) + w;
        break;
      case 962:
        if (w = "-webkit-" + w + (w.charCodeAt(5) === 102 ? "-ms-" + w : "") + w, O + j === 211 && w.charCodeAt(13) === 105 && 0 < w.indexOf("transform", 10))
          return w.substring(0, w.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + w;
    }
    return w;
  }
  function a(z, P) {
    var O = z.indexOf(P === 1 ? ":" : "{"), j = z.substring(0, P !== 3 ? O : 10);
    return O = z.substring(O + 1, z.length - 1), de(P !== 2 ? j : j.replace(V, "$1"), O, P);
  }
  function i(z, P) {
    var O = o(P, P.charCodeAt(0), P.charCodeAt(1), P.charCodeAt(2));
    return O !== P + ";" ? O.replace(T, " or ($1)").substring(4) : "(" + P + ")";
  }
  function s(z, P, O, j, w, H, A, Z, Y, ae) {
    for (var $ = 0, xe = P, pe; $ < ce; ++$)
      switch (pe = D[$].call(u, z, xe, O, j, w, H, A, Z, Y, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          xe = pe;
      }
    if (xe !== P)
      return xe;
  }
  function l(z) {
    switch (z) {
      case void 0:
      case null:
        ce = D.length = 0;
        break;
      default:
        if (typeof z == "function")
          D[ce++] = z;
        else if (typeof z == "object")
          for (var P = 0, O = z.length; P < O; ++P)
            l(z[P]);
        else
          M = !!z | 0;
    }
    return l;
  }
  function c(z) {
    return z = z.prefix, z !== void 0 && (de = null, z ? typeof z != "function" ? ee = 1 : (ee = 2, de = z) : ee = 0), c;
  }
  function u(z, P) {
    var O = z;
    if (33 > O.charCodeAt(0) && (O = O.trim()), F = O, O = [F], 0 < ce) {
      var j = s(-1, P, O, O, J, ne, 0, 0, 0, 0);
      j !== void 0 && typeof j == "string" && (P = j);
    }
    var w = t(oe, O, P, 0, 0);
    return 0 < ce && (j = s(-2, w, O, O, J, ne, w.length, 0, 0, 0), j !== void 0 && (w = j)), F = "", Q = 0, ne = J = 1, w;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, p = /: */g, m = /zoo|gra/, h = /([,: ])(transform)/g, g = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, E = /:(read-only)/g, C = /[svh]\w+-[tblr]{2}/, I = /\(\s*(.*)\s*\)/g, T = /([\s\S]*?);/g, N = /-self|flex-/g, V = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, ne = 1, J = 1, Q = 0, ee = 1, oe = [], D = [], ce = 0, de = null, M = 0, F = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var Id = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, vc = "/*|*/", v0 = vc + "}";
function g0(e) {
  e && va.current.insert(e + "}");
}
var va = {
  current: null
}, b0 = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return va.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + vc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return va.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? vc : "");
      }
    case -2:
      r.split(v0).forEach(g0);
  }
}, y0 = function(t) {
  t === void 0 && (t = {});
  var r = t.key || "css", n;
  t.prefix !== void 0 && (n = {
    prefix: t.prefix
  });
  var o = new m0(n);
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i;
  {
    i = t.container || document.head;
    var s = document.querySelectorAll("style[data-emotion-" + r + "]");
    Array.prototype.forEach.call(s, function(f) {
      var p = f.getAttribute("data-emotion-" + r);
      p.split(" ").forEach(function(m) {
        a[m] = !0;
      }), f.parentNode !== i && i.appendChild(f);
    });
  }
  var l;
  if (o.use(t.stylisPlugins)(b0), l = function(p, m, h, g) {
    var b = m.name;
    if (va.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var y = m.map;
      va.current = {
        insert: function(E) {
          h.insert(E + y);
        }
      };
    }
    o(p, m.styles), g && (d.inserted[b] = !0);
  }, process.env.NODE_ENV !== "production") {
    var c = /\/\*/g, u = /\*\//g;
    o.use(function(f, p) {
      switch (f) {
        case -1: {
          for (; c.test(p); ) {
            if (u.lastIndex = c.lastIndex, u.test(p)) {
              c.lastIndex = u.lastIndex;
              continue;
            }
            throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
          }
          c.lastIndex = 0;
          break;
        }
      }
    }), o.use(function(f, p, m) {
      switch (f) {
        case -1: {
          var h = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", g = p.match(/(:first|:nth|:nth-last)-child/g);
          g && d.compat !== !0 && g.forEach(function(b) {
            var y = new RegExp(b + ".*\\/\\* " + h + " \\*\\/"), S = y.test(p);
            b && !S && console.error('The pseudo class "' + b + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + b.split("-child")[0] + '-of-type".');
          });
          break;
        }
      }
    });
  }
  var d = {
    key: r,
    sheet: new h0({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return d;
}, x0 = !0;
function um(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var dm = function(t, r, n) {
  var o = t.key + "-" + r.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (n === !1 || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    x0 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do
      t.insert("." + o, a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function S0(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var w0 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Fd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, C0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", _0 = /[A-Z]|^ms/g, fm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, hu = function(t) {
  return t.charCodeAt(1) === 45;
}, Nd = function(t) {
  return t != null && typeof t != "boolean";
}, ml = lm(function(e) {
  return hu(e) ? e : e.replace(_0, "-$&").toLowerCase();
}), qi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(fm, function(n, o, a) {
          return pr = {
            name: o,
            styles: a,
            next: pr
          }, o;
        });
  }
  return w0[t] !== 1 && !hu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var k0 = /(attr|calc|counters?|url)\(/, E0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], P0 = qi, T0 = /^-ms-/, A0 = /-(.)/g, jd = {};
  qi = function(t, r) {
    t === "content" && (typeof r != "string" || E0.indexOf(r) === -1 && !k0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = P0(t, r);
    return n !== "" && !hu(t) && t.indexOf("-") !== -1 && jd[t] === void 0 && (jd[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(T0, "ms-").replace(A0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Bd = !0;
function ga(e, t, r, n) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return pr = {
          name: r.name,
          styles: r.styles,
          next: pr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            pr = {
              name: o.name,
              styles: o.styles,
              next: pr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return O0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = pr, s = r(e);
        return pr = i, ga(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(fm, function(d, f, p) {
          var m = "animation" + l.length;
          return l.push("const " + m + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + m + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return process.env.NODE_ENV !== "production" && n && Bd && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Bd = !1), u !== void 0 && !n ? u : r;
}
function O0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ga(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Nd(i) && (n += ml(a) + ":" + qi(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Nd(i[s]) && (n += ml(a) + ":" + qi(a, i[s]) + ";");
        else {
          var l = ga(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += ml(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(C0), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var zd = /label:\s*([^\s;\n{]+)\s*;/g, pm;
process.env.NODE_ENV !== "production" && (pm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var pr, gc = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  pr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += ga(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Fd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += ga(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Fd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(pm, function(f) {
    return l = f, "";
  })), zd.lastIndex = 0;
  for (var c = "", u; (u = zd.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = S0(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: pr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: pr
  };
}, $0 = Object.prototype.hasOwnProperty, hm = /* @__PURE__ */ Mr(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? y0() : null
), ba = /* @__PURE__ */ Mr({});
hm.Provider;
var mm = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ rr(hm.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ Tt(r);
}, Vd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ld = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", R0 = function() {
  return null;
}, Wd = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Vd], s = [a], l = "";
  typeof r.className == "string" ? l = um(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = gc(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[Ld];
    u && (c = gc([c, "label:" + u + ";"]));
  }
  dm(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    $0.call(r, f) && f !== "css" && f !== Vd && (process.env.NODE_ENV === "production" || f !== Ld) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ rr(i, d), m = /* @__PURE__ */ rr(R0, null);
  return /* @__PURE__ */ rr(am, null, m, p);
}, D0 = /* @__PURE__ */ mm(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ rr(ba.Consumer, null, function(n) {
    return Wd(t, e, n, r);
  }) : Wd(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (D0.displayName = "EmotionCssPropInternal");
var M0 = cm, I0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, Ud = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? M0 : I0;
};
function Hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function F0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(r), !0).forEach(function(n) {
      pu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Yd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, N0 = function() {
  return null;
}, j0 = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n, o, a;
  r !== void 0 && (n = r.label, a = r.target, o = t.__emotion_forwardProp && r.shouldForwardProp ? function(u) {
    return t.__emotion_forwardProp(u) && // $FlowFixMe
    r.shouldForwardProp(u);
  } : r.shouldForwardProp);
  var i = t.__emotion_real === t, s = i && t.__emotion_base || t;
  typeof o != "function" && i && (o = t.__emotion_forwardProp);
  var l = o || Ud(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Yd), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(Yd), d.push(u[p], u[0][p]);
    }
    var m = mm(function(h, g, b) {
      return /* @__PURE__ */ rr(ba.Consumer, null, function(y) {
        var S = c && h.as || s, E = "", C = [], I = h;
        if (h.theme == null) {
          I = {};
          for (var T in h)
            I[T] = h[T];
          I.theme = y;
        }
        typeof h.className == "string" ? E = um(g.registered, C, h.className) : h.className != null && (E = h.className + " ");
        var N = gc(d.concat(C), g.registered, I);
        dm(g, N, typeof S == "string"), E += g.key + "-" + N.name, a !== void 0 && (E += " " + a);
        var V = c && o === void 0 ? Ud(S) : l, B = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          V(X) && (B[X] = h[X]);
        B.className = E, B.ref = b || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ne = /* @__PURE__ */ rr(S, B), J = /* @__PURE__ */ rr(N0, null);
        return /* @__PURE__ */ rr(am, null, J, ne);
      });
    });
    return m.displayName = n !== void 0 ? n : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = s, m.__emotion_styles = d, m.__emotion_forwardProp = o, Object.defineProperty(m, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), m.withComponent = function(h, g) {
      return e(h, g !== void 0 ? F0({}, r || {}, {}, g) : r).apply(void 0, d);
    }, m;
  };
}, B0 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], bc = j0.bind();
B0.forEach(function(e) {
  bc[e] = bc(e);
});
const z0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bc
}, Symbol.toStringTag, { value: "Module" })), V0 = /* @__PURE__ */ ks(z0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vl, Gd;
function vm() {
  if (Gd)
    return vl;
  Gd = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vl = o() ? Object.assign : function(a, i) {
    for (var s, l = n(a), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          r.call(s, c[f]) && (l[c[f]] = s[c[f]]);
      }
    }
    return l;
  }, vl;
}
var L0 = vm();
const gr = /* @__PURE__ */ _s(L0);
var qd = function(t, r) {
  var n = gr({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || gr(n, (a = {}, a[o] = gr(t[o], r[o]), a));
  }
  return n;
}, W0 = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, U0 = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, gm = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, H0 = function(t, r) {
  return Kr(r, t, t);
}, Kr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Fa = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = Kr(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || Kr(i.theme, "breakpoints", U0.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(gm)), s = qd(s, Y0(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = qd(s, G0(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        gr(s, d(f, p, i));
      }
    return l && (s = W0(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, Y0 = function(t, r, n, o, a) {
  var i = {};
  return o.slice(0, t.length).forEach(function(s, l) {
    var c = t[l], u = r(s, n, a);
    if (!c)
      gr(i, u);
    else {
      var d;
      gr(i, (d = {}, d[c] = gr({}, i[c], u), d));
    }
  }), i;
}, G0 = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      gr(i, u);
    else {
      var d, f = gm(l);
      gr(i, (d = {}, d[f] = gr({}, i[f], u), d));
    }
  }
  return i;
}, Xi = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? H0 : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, sr = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = Xi({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = Xi(a);
  });
  var n = Fa(r);
  return n;
}, mu = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || gr(t, i.config);
  });
  var a = Fa(t);
  return a;
}, q0 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, X0 = function(t, r) {
  return Kr(r, t, !q0(t) || t > 1 ? t : t * 100 + "%");
}, K0 = {
  width: {
    property: "width",
    scale: "sizes",
    transform: X0
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
}, Lt = sr(K0), yc = {
  color: {
    property: "color",
    scale: "colors"
  },
  backgroundColor: {
    property: "backgroundColor",
    scale: "colors"
  },
  opacity: !0
};
yc.bg = yc.backgroundColor;
var vu = sr(yc), Z0 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, J0 = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: Z0.fontSizes
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
}, tn = sr(J0), Q0 = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: !0,
  // item
  flex: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: !0,
  justifySelf: !0,
  alignSelf: !0,
  order: !0
}, Dt = sr(Q0), gl = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, ex = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: gl.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: gl.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: gl.space
  },
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridAutoRows: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, Wt = sr(ex), kt = {
  border: {
    property: "border",
    scale: "borders"
  },
  borderWidth: {
    property: "borderWidth",
    scale: "borderWidths"
  },
  borderStyle: {
    property: "borderStyle",
    scale: "borderStyles"
  },
  borderColor: {
    property: "borderColor",
    scale: "colors"
  },
  borderRadius: {
    property: "borderRadius",
    scale: "radii"
  },
  borderTop: {
    property: "borderTop",
    scale: "borders"
  },
  borderTopLeftRadius: {
    property: "borderTopLeftRadius",
    scale: "radii"
  },
  borderTopRightRadius: {
    property: "borderTopRightRadius",
    scale: "radii"
  },
  borderRight: {
    property: "borderRight",
    scale: "borders"
  },
  borderBottom: {
    property: "borderBottom",
    scale: "borders"
  },
  borderBottomLeftRadius: {
    property: "borderBottomLeftRadius",
    scale: "radii"
  },
  borderBottomRightRadius: {
    property: "borderBottomRightRadius",
    scale: "radii"
  },
  borderLeft: {
    property: "borderLeft",
    scale: "borders"
  },
  borderX: {
    properties: ["borderLeft", "borderRight"],
    scale: "borders"
  },
  borderY: {
    properties: ["borderTop", "borderBottom"],
    scale: "borders"
  }
};
kt.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
kt.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
kt.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
kt.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
kt.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
kt.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
kt.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
kt.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
kt.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
kt.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
kt.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
kt.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
kt.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
kt.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
kt.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
kt.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var yr = sr(kt), Zr = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
Zr.bgImage = Zr.backgroundImage;
Zr.bgSize = Zr.backgroundSize;
Zr.bgPosition = Zr.backgroundPosition;
Zr.bgRepeat = Zr.backgroundRepeat;
var To = sr(Zr), ii = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, tx = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: ii.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: ii.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: ii.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: ii.space
  }
}, Bn = sr(tx), Ft = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, Xd = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Cn = function(t, r) {
  if (!Xd(t))
    return Kr(r, t, t);
  var n = t < 0, o = Math.abs(t), a = Kr(r, o, o);
  return Xd(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Ie = {};
Ie.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: Cn,
    defaultScale: Ft.space
  }
};
Ie.margin.m = Ie.margin.margin;
Ie.margin.mt = Ie.margin.marginTop;
Ie.margin.mr = Ie.margin.marginRight;
Ie.margin.mb = Ie.margin.marginBottom;
Ie.margin.ml = Ie.margin.marginLeft;
Ie.margin.mx = Ie.margin.marginX;
Ie.margin.my = Ie.margin.marginY;
Ie.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: Ft.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: Ft.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: Ft.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: Ft.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: Ft.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: Ft.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: Ft.space
  }
};
Ie.padding.p = Ie.padding.padding;
Ie.padding.pt = Ie.padding.paddingTop;
Ie.padding.pr = Ie.padding.paddingRight;
Ie.padding.pb = Ie.padding.paddingBottom;
Ie.padding.pl = Ie.padding.paddingLeft;
Ie.padding.px = Ie.padding.paddingX;
Ie.padding.py = Ie.padding.paddingY;
var bm = sr(Ie.margin), ym = sr(Ie.padding), xm = mu(bm, ym), Ei = sr({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function ya() {
  return ya = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ya.apply(this, arguments);
}
var fr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, rx = [40, 52, 64].map(function(e) {
  return e + "em";
}), nx = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, ox = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY"
}, Kd = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, ax = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors"
}, ix = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return fr(t, r, r);
  var n = Math.abs(r), o = fr(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, sx = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return ya({}, e, (r = {}, r[t] = ix, r));
}, {}), Sm = function(t) {
  return function(r) {
    var n = {}, o = fr(r, "breakpoints", rx), a = [null].concat(o.map(function(u) {
      return "@media screen and (min-width: " + u + ")";
    }));
    for (var i in t) {
      var s = typeof t[i] == "function" ? t[i](r) : t[i];
      if (s != null) {
        if (!Array.isArray(s)) {
          n[i] = s;
          continue;
        }
        for (var l = 0; l < s.slice(0, a.length).length; l++) {
          var c = a[l];
          if (!c) {
            n[i] = s[l];
            continue;
          }
          n[c] = n[c] || {}, s[l] != null && (n[c][i] = s[l]);
        }
      }
    }
    return n;
  };
}, wm = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = ya({}, nx, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = Sm(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(fr(n, c))(n);
        o = ya({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = fr(ox, s, s), f = fr(ax, d), p = fr(n, f, fr(n, d, {})), m = fr(sx, d, fr), h = m(p, c, c);
      if (Kd[d])
        for (var g = Kd[d], b = 0; b < g.length; b++)
          o[g[b]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const Cm = wm, lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: wm,
  default: Cm,
  get: fr,
  responsive: Sm
}, Symbol.toStringTag, { value: "Module" }));
var Es = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return Cm(Kr(m, p, null))(h.theme);
  } : c = function(p, m) {
    return Kr(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Fa(u);
  return d;
}, _m = Es({
  key: "buttons"
}), km = Es({
  key: "textStyles",
  prop: "textStyle"
}), Em = Es({
  key: "colorStyles",
  prop: "colors"
}), cx = Lt.width, ux = Lt.height, dx = Lt.minWidth, fx = Lt.minHeight, px = Lt.maxWidth, hx = Lt.maxHeight, mx = Lt.size, vx = Lt.verticalAlign, gx = Lt.display, bx = Lt.overflow, yx = Lt.overflowX, xx = Lt.overflowY, Sx = vu.opacity, wx = tn.fontSize, Cx = tn.fontFamily, _x = tn.fontWeight, kx = tn.lineHeight, Ex = tn.textAlign, Px = tn.fontStyle, Tx = tn.letterSpacing, Ax = Dt.alignItems, Ox = Dt.alignContent, $x = Dt.justifyItems, Rx = Dt.justifyContent, Dx = Dt.flexWrap, Mx = Dt.flexDirection, Ix = Dt.flex, Fx = Dt.flexGrow, Nx = Dt.flexShrink, jx = Dt.flexBasis, Bx = Dt.justifySelf, zx = Dt.alignSelf, Vx = Dt.order, Lx = Wt.gridGap, Wx = Wt.gridColumnGap, Ux = Wt.gridRowGap, Hx = Wt.gridColumn, Yx = Wt.gridRow, Gx = Wt.gridAutoFlow, qx = Wt.gridAutoColumns, Xx = Wt.gridAutoRows, Kx = Wt.gridTemplateColumns, Zx = Wt.gridTemplateRows, Jx = Wt.gridTemplateAreas, Qx = Wt.gridArea, eS = yr.borderWidth, tS = yr.borderStyle, rS = yr.borderColor, nS = yr.borderTop, oS = yr.borderRight, aS = yr.borderBottom, iS = yr.borderLeft, sS = yr.borderRadius, lS = To.backgroundImage, cS = To.backgroundSize, uS = To.backgroundPosition, dS = To.backgroundRepeat, fS = Bn.zIndex, pS = Bn.top, hS = Bn.right, mS = Bn.bottom, vS = Bn.left, gS = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = Xi({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Fa(c);
  return u;
};
const bS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: Ox,
  alignItems: Ax,
  alignSelf: zx,
  background: To,
  backgroundImage: lS,
  backgroundPosition: uS,
  backgroundRepeat: dS,
  backgroundSize: cS,
  border: yr,
  borderBottom: aS,
  borderColor: rS,
  borderLeft: iS,
  borderRadius: sS,
  borderRight: oS,
  borderStyle: tS,
  borderTop: nS,
  borderWidth: eS,
  borders: yr,
  bottom: mS,
  boxShadow: Ei,
  buttonStyle: _m,
  color: vu,
  colorStyle: Em,
  compose: mu,
  createParser: Fa,
  createStyleFunction: Xi,
  display: gx,
  flex: Ix,
  flexBasis: jx,
  flexDirection: Mx,
  flexGrow: Fx,
  flexShrink: Nx,
  flexWrap: Dx,
  flexbox: Dt,
  fontFamily: Cx,
  fontSize: wx,
  fontStyle: Px,
  fontWeight: _x,
  get: Kr,
  grid: Wt,
  gridArea: Qx,
  gridAutoColumns: qx,
  gridAutoFlow: Gx,
  gridAutoRows: Xx,
  gridColumn: Hx,
  gridColumnGap: Wx,
  gridGap: Lx,
  gridRow: Yx,
  gridRowGap: Ux,
  gridTemplateAreas: Jx,
  gridTemplateColumns: Kx,
  gridTemplateRows: Zx,
  height: ux,
  justifyContent: Rx,
  justifyItems: $x,
  justifySelf: Bx,
  layout: Lt,
  left: vS,
  letterSpacing: Tx,
  lineHeight: kx,
  margin: bm,
  maxHeight: hx,
  maxWidth: px,
  minHeight: fx,
  minWidth: dx,
  opacity: Sx,
  order: Vx,
  overflow: bx,
  overflowX: yx,
  overflowY: xx,
  padding: ym,
  position: Bn,
  right: hS,
  shadow: Ei,
  size: mx,
  space: xm,
  style: gS,
  system: sr,
  textAlign: Ex,
  textShadow: Ei,
  textStyle: km,
  top: pS,
  typography: tn,
  variant: Es,
  verticalAlign: vx,
  width: cx,
  zIndex: fS
}, Symbol.toStringTag, { value: "Module" })), yS = /* @__PURE__ */ ks(bS), xS = /* @__PURE__ */ ks(lx);
function SS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var wS = mu(xm, tn, vu, Lt, Dt, yr, To, Bn, Wt, Ei, _m, km, Em), Pm = wS.propNames, Tm = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return SS(function(n) {
    return cm(n) && !r.test(n);
  });
};
const CS = Tm(Pm), _S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: Tm,
  default: CS,
  props: Pm
}, Symbol.toStringTag, { value: "Module" })), kS = /* @__PURE__ */ ks(_S);
Object.defineProperty(ha, "__esModule", {
  value: !0
});
var Am = ha.Flex = zn = ha.Box = void 0;
gu(Rt);
var Om = gu(V0), Hn = yS, Qo = PS(xS), ES = gu(kS);
function $m() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return $m = function() {
    return e;
  }, e;
}
function PS(e) {
  if (e && e.__esModule)
    return e;
  var t = $m();
  if (t && t.has(e))
    return t.get(e);
  var r = {};
  if (e != null) {
    var n = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
      }
  }
  return r.default = e, t && t.set(e, r), r;
}
function gu(e) {
  return e && e.__esModule ? e : { default: e };
}
var TS = function(t) {
  return (0, Qo.default)(t.sx)(t.theme);
}, AS = function(t) {
  return (0, Qo.default)(t.__css)(t.theme);
}, OS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, Qo.default)((0, Qo.get)(r, a + "." + n, (0, Qo.get)(r, n)))(r);
}, Rm = (0, Om.default)("div", {
  shouldForwardProp: ES.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, AS, OS, TS, function(e) {
  return e.css;
}, (0, Hn.compose)(Hn.space, Hn.layout, Hn.typography, Hn.color, Hn.flexbox)), zn = ha.Box = Rm, $S = (0, Om.default)(Rm)({
  display: "flex"
});
Am = ha.Flex = $S;
function pn() {
  return pn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pn.apply(this, arguments);
}
var _z = Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    tx: "text"
  }, e));
});
Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    as: "h2",
    tx: "text",
    variant: "heading"
  }, e, {
    __css: {
      fontSize: 4,
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    }
  }));
});
var kz = Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), Ez = Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    as: "button",
    tx: "buttons",
    variant: "primary"
  }, e, {
    __css: {
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      px: 3,
      py: 2,
      color: "white",
      bg: "primary",
      border: 0,
      borderRadius: 4
    }
  }));
});
Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var Pz = Tt(function(e, t) {
  return Rt.createElement(zn, pn({
    ref: t,
    variant: "card"
  }, e));
});
function Zn(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function $n(e) {
  return function t(r) {
    return arguments.length === 0 || Zn(r) ? t : e.apply(this, arguments);
  };
}
function RS(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Zn(r) ? t : $n(function(o) {
          return e(r, o);
        });
      default:
        return Zn(r) && Zn(n) ? t : Zn(r) ? $n(function(o) {
          return e(o, n);
        }) : Zn(n) ? $n(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function DS(e, t) {
  switch (e) {
    case 0:
      return function() {
        return t.apply(this, arguments);
      };
    case 1:
      return function(r) {
        return t.apply(this, arguments);
      };
    case 2:
      return function(r, n) {
        return t.apply(this, arguments);
      };
    case 3:
      return function(r, n, o) {
        return t.apply(this, arguments);
      };
    case 4:
      return function(r, n, o, a) {
        return t.apply(this, arguments);
      };
    case 5:
      return function(r, n, o, a, i) {
        return t.apply(this, arguments);
      };
    case 6:
      return function(r, n, o, a, i, s) {
        return t.apply(this, arguments);
      };
    case 7:
      return function(r, n, o, a, i, s, l) {
        return t.apply(this, arguments);
      };
    case 8:
      return function(r, n, o, a, i, s, l, c) {
        return t.apply(this, arguments);
      };
    case 9:
      return function(r, n, o, a, i, s, l, c, u) {
        return t.apply(this, arguments);
      };
    case 10:
      return function(r, n, o, a, i, s, l, c, u, d) {
        return t.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}
const MS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function IS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var FS = /* @__PURE__ */ $n(function(t) {
  return MS(t) ? !0 : !t || typeof t != "object" || IS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), NS = /* @__PURE__ */ function() {
  function e(t) {
    this.f = t;
  }
  return e.prototype["@@transducer/init"] = function() {
    throw new Error("init not implemented on XWrap");
  }, e.prototype["@@transducer/result"] = function(t) {
    return t;
  }, e.prototype["@@transducer/step"] = function(t, r) {
    return this.f(t, r);
  }, e;
}();
function jS(e) {
  return new NS(e);
}
var BS = /* @__PURE__ */ RS(function(t, r) {
  return DS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function zS(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function Zd(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function Jd(e, t, r, n) {
  return e["@@transducer/result"](r[n](BS(e["@@transducer/step"], e), t));
}
var Qd = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function Tz(e, t, r) {
  if (typeof e == "function" && (e = jS(e)), FS(r))
    return zS(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return Jd(e, t, r, "fantasy-land/reduce");
  if (r[Qd] != null)
    return Zd(e, t, r[Qd]());
  if (typeof r.next == "function")
    return Zd(e, t, r);
  if (typeof r.reduce == "function")
    return Jd(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function xc(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var ef = Object.prototype.toString, VS = /* @__PURE__ */ function() {
  return ef.call(arguments) === "[object Arguments]" ? function(t) {
    return ef.call(t) === "[object Arguments]";
  } : function(t) {
    return xc("callee", t);
  };
}(), LS = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), tf = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], rf = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), WS = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, Az = /* @__PURE__ */ $n(typeof Object.keys == "function" && !rf ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = rf && VS(t);
  for (r in t)
    xc(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (LS)
    for (n = tf.length - 1; n >= 0; )
      r = tf[n], xc(r, t) && !WS(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), US = /* @__PURE__ */ $n(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const Oz = US;
function Nn() {
  return Nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nn.apply(this, arguments);
}
var Sc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function HS() {
  if (nf)
    return Ve;
  nf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(C) {
    if (typeof C == "object" && C !== null) {
      var I = C.$$typeof;
      switch (I) {
        case t:
          switch (C = C.type, C) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case s:
                case u:
                case m:
                case p:
                case i:
                  return C;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function E(C) {
    return S(C) === c;
  }
  return Ve.AsyncMode = l, Ve.ConcurrentMode = c, Ve.ContextConsumer = s, Ve.ContextProvider = i, Ve.Element = t, Ve.ForwardRef = u, Ve.Fragment = n, Ve.Lazy = m, Ve.Memo = p, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = o, Ve.Suspense = d, Ve.isAsyncMode = function(C) {
    return E(C) || S(C) === l;
  }, Ve.isConcurrentMode = E, Ve.isContextConsumer = function(C) {
    return S(C) === s;
  }, Ve.isContextProvider = function(C) {
    return S(C) === i;
  }, Ve.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, Ve.isForwardRef = function(C) {
    return S(C) === u;
  }, Ve.isFragment = function(C) {
    return S(C) === n;
  }, Ve.isLazy = function(C) {
    return S(C) === m;
  }, Ve.isMemo = function(C) {
    return S(C) === p;
  }, Ve.isPortal = function(C) {
    return S(C) === r;
  }, Ve.isProfiler = function(C) {
    return S(C) === a;
  }, Ve.isStrictMode = function(C) {
    return S(C) === o;
  }, Ve.isSuspense = function(C) {
    return S(C) === d;
  }, Ve.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === c || C === a || C === o || C === d || C === f || typeof C == "object" && C !== null && (C.$$typeof === m || C.$$typeof === p || C.$$typeof === i || C.$$typeof === s || C.$$typeof === u || C.$$typeof === g || C.$$typeof === b || C.$$typeof === y || C.$$typeof === h);
  }, Ve.typeOf = S, Ve;
}
var Le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var of;
function YS() {
  return of || (of = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === c || $ === a || $ === o || $ === d || $ === f || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === p || $.$$typeof === i || $.$$typeof === s || $.$$typeof === u || $.$$typeof === g || $.$$typeof === b || $.$$typeof === y || $.$$typeof === h);
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var xe = $.$$typeof;
        switch (xe) {
          case t:
            var pe = $.type;
            switch (pe) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return pe;
              default:
                var le = pe && pe.$$typeof;
                switch (le) {
                  case s:
                  case u:
                  case m:
                  case p:
                  case i:
                    return le;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var C = l, I = c, T = s, N = i, V = t, B = u, X = n, ne = m, J = p, Q = r, ee = a, oe = o, D = d, ce = !1;
    function de($) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M($) || E($) === l;
    }
    function M($) {
      return E($) === c;
    }
    function F($) {
      return E($) === s;
    }
    function z($) {
      return E($) === i;
    }
    function P($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function O($) {
      return E($) === u;
    }
    function j($) {
      return E($) === n;
    }
    function w($) {
      return E($) === m;
    }
    function H($) {
      return E($) === p;
    }
    function A($) {
      return E($) === r;
    }
    function Z($) {
      return E($) === a;
    }
    function Y($) {
      return E($) === o;
    }
    function ae($) {
      return E($) === d;
    }
    Le.AsyncMode = C, Le.ConcurrentMode = I, Le.ContextConsumer = T, Le.ContextProvider = N, Le.Element = V, Le.ForwardRef = B, Le.Fragment = X, Le.Lazy = ne, Le.Memo = J, Le.Portal = Q, Le.Profiler = ee, Le.StrictMode = oe, Le.Suspense = D, Le.isAsyncMode = de, Le.isConcurrentMode = M, Le.isContextConsumer = F, Le.isContextProvider = z, Le.isElement = P, Le.isForwardRef = O, Le.isFragment = j, Le.isLazy = w, Le.isMemo = H, Le.isPortal = A, Le.isProfiler = Z, Le.isStrictMode = Y, Le.isSuspense = ae, Le.isValidElementType = S, Le.typeOf = E;
  }()), Le;
}
process.env.NODE_ENV === "production" ? Sc.exports = HS() : Sc.exports = YS();
var bu = Sc.exports, Dm = bu, GS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mm = {};
Mm[Dm.ForwardRef] = GS;
Mm[Dm.Memo] = qS;
function af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function XS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? af(Object(r), !0).forEach(function(n) {
      pu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : af(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var KS = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return XS({}, t, {}, r);
}, ZS = Id(function(e) {
  return Id(function(t) {
    return KS(e, t);
  });
}), $z = function(t) {
  return /* @__PURE__ */ rr(ba.Consumer, null, function(r) {
    return t.theme !== r && (r = ZS(r)(t.theme)), /* @__PURE__ */ rr(ba.Provider, {
      value: r
    }, t.children);
  });
};
function JS() {
  return Rt.useContext(ba);
}
const QS = {
  color: "primary",
  bg: "transparent",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  ":hover": {
    bg: "primaryShade2"
  },
  ":focus": {
    outline: "none",
    boxShadow: "focused"
  },
  ":active": {
    outline: "none",
    bg: "primaryShade2",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primary"
  },
  ":disabled": {
    bg: "unset",
    color: "gray"
  }
}, e1 = {
  color: "primary",
  bg: "unset",
  textDecoration: "underline",
  ":hover": {
    cursor: "pointer"
  },
  ":focus": {
    outline: "none",
    boxShadow: "focused"
  },
  ":disabled": {
    color: "gray",
    textDecoration: "none"
  }
}, t1 = {
  color: "white",
  bg: "primary",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "primary",
  boxShadow: "primary",
  ":hover": {
    bg: "primaryShade1",
    borderColor: "primaryShade1"
  },
  ":focus": {
    outline: "none",
    boxShadow: "focused"
  },
  ":active": {
    outline: "none",
    borderColor: "primary"
  },
  ":disabled": {
    bg: "gray",
    color: "white",
    borderWidth: "1px ",
    borderStyle: "solid ",
    borderColor: "gray",
    boxShadow: "disabled"
  }
}, r1 = {
  color: "primary",
  bg: "white",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "grayShade2",
  boxShadow: "secondary",
  ":hover": {
    bg: "primaryShade2",
    borderColor: "grayShade2"
  },
  ":focus": {
    outline: "none",
    boxShadow: "focused"
  },
  ":active": {
    outline: "none",
    borderColor: "primaryShade2"
  },
  ":disabled": {
    bg: "grayShade1",
    color: "black",
    borderColor: "grayShade1",
    boxShadow: "disabled"
  }
}, n1 = {
  variant: "buttons.secondary",
  color: "labels.red",
  borderColor: "grayShade2",
  boxShadow: "secondary",
  ":hover": {
    bg: "labels.redShade2"
  },
  ":active": {
    borderColor: "labels.redShade2"
  },
  ":focus": {
    outline: "none",
    boxShadow: "focused"
  },
  ":disabled": {
    bg: "grayShade1",
    color: "black",
    borderColor: "grayShade1",
    boxShadow: "disabled"
  }
}, o1 = {
  ghost: QS,
  alert: n1,
  inline: e1,
  primary: t1,
  secondary: r1
}, a1 = {
  bg: "white",
  boxShadow: "secondary",
  borderColor: "grayShade2",
  ":hover": {
    borderColor: "grayShade2",
    boxShadow: "0px 0px 0px white"
  },
  ":active": {
    borderColor: "grayShade3"
  },
  ":disabled": {
    borderColor: "grayShade2"
  },
  // Icon color
  "& path": {
    fill: "black"
  }
}, i1 = {
  bg: "white",
  borderColor: "white",
  ":hover": {
    bg: "grayShade3",
    borderColor: "grayShade3"
  },
  ":active": {
    bg: "grayShade3",
    borderColor: "gray"
  },
  ":disabled": {
    borderColor: "grayShade3"
  },
  // Icon color
  "& path": {
    fill: "black"
  }
}, s1 = {
  bg: "transparent",
  borderColor: "transparent",
  ":hover": {
    bg: "white",
    borderColor: "white"
  },
  ":active": {
    bg: "white",
    borderColor: "gray"
  },
  ":disabled": {
    bg: "transparent",
    borderColor: "transparent"
  },
  // Icon color
  "& path": {
    fill: "black"
  }
}, l1 = {
  "icon-primary": a1,
  "icon-ghost": i1,
  "icon-ghost-white": s1
}, c1 = {
  color: "black",
  bg: "grayShade3",
  borderTopColor: "primary",
  ":hover": {
    bg: "primaryShade2",
    color: "primary"
  },
  ":active": {
    bg: "primaryShade2",
    color: "black"
  },
  ":disabled": {
    color: "black",
    bg: "grayShade3"
  }
}, u1 = {
  "footer-primary": c1
}, d1 = {
  color: "primary",
  bg: "white",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "grayShade2",
  boxShadow: "file",
  ":hover": {
    bg: "primaryShade2",
    borderColor: "grayShade2"
  },
  ":focus": {
    outline: "none"
  },
  ":active": {
    outline: "none",
    borderColor: "primaryShade2"
  },
  ":disabled": {
    bg: "grayShade1",
    color: "black",
    borderColor: "grayShade1",
    boxShadow: "disabled"
  }
}, f1 = {
  "file-secondary": d1
}, p1 = {
  primary: {
    div: {
      bg: "grayShade3",
      borderColor: "transparent"
    },
    "> input:hover ~ div": {
      bg: "grayShade3",
      borderColor: "gray"
    },
    "> input:focus,> input:checked ~ div": {
      borderColor: "black"
    },
    "> input:disabled ~ div": {
      bg: "grayShade2",
      borderColor: "transparent"
    }
  },
  white: {
    div: {
      bg: "white",
      borderColor: "transparent"
    },
    "> input:hover ~ div": {
      bg: "grayShade3",
      borderColor: "gray"
    },
    "> input:focus,> input:checked ~ div": {
      borderColor: "black"
    },
    "> input:disabled ~ div": {
      bg: "grayShade2",
      borderColor: "transparent"
    }
  }
}, h1 = {
  color: "black"
}, m1 = {
  bg: "black",
  color: "white",
  // Arrow
  ":after": {
    borderColor: "black"
  },
  // Secondary text
  "> span": {
    pl: "10px",
    color: "gray"
  }
}, v1 = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, g1 = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, b1 = {
  card: v1,
  readOnly: g1
}, y1 = {
  color: "labels.red"
}, x1 = {
  color: "darkGray"
}, S1 = {
  error: y1,
  default: x1
}, w1 = {
  color: "black",
  bg: "grayShade3",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "black"
  },
  ":disabled": {
    bg: "grayShade2",
    borderColor: "grayShade2"
  },
  "::-webkit-input-placeholder": {
    color: "gray"
  },
  "::-moz-placeholder": {
    color: "gray"
  },
  ":-ms-input-placeholder": {
    color: "gray"
  },
  ":-moz-placeholder": {
    color: "gray"
  },
  //  Icon
  "~ svg path": {
    fill: "gray"
  }
}, C1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, _1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, k1 = {
  disabled: _1,
  primary: w1,
  white: C1
}, E1 = {
  default: "transparent",
  error: "labels.red"
}, P1 = {
  bg: "white",
  borderLeftColor: "grayShade2",
  "> div:first-of-type": {
    color: "black",
    svg: {
      mr: "11px",
      path: {
        fill: "black"
      }
    }
  },
  "~ div": {
    borderTopColor: "grayShade3"
  }
}, T1 = {
  bg: "white",
  borderRightColor: "grayShade2",
  "> div": {
    color: "gray",
    path: {
      fill: "gray"
    }
  }
}, A1 = {
  color: "black",
  bg: "white",
  cursor: "pointer",
  path: {
    fill: "black"
  },
  ":hover": {
    bg: "grayShade3",
    color: "primary",
    path: {
      fill: "primary"
    }
  },
  ":active": {
    bg: "grayShade3",
    color: "black",
    path: {
      fill: "black"
    }
  },
  "~ div": {
    borderTopColor: "grayShade3"
  }
}, O1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, $1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, R1 = {
  default: A1,
  active: O1,
  disabled: $1
}, D1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, M1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, I1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, F1 = {
  default: M1,
  active: I1,
  disabled: D1
}, N1 = {
  container: T1,
  item: R1,
  subItem: F1,
  category: P1
}, j1 = {
  bg: "white",
  boxShadow: "list"
}, B1 = {
  color: "black",
  bg: "white",
  fontWeight: "label",
  fontFamily: "label",
  fontSize: "label",
  cursor: "pointer",
  borderBottomColor: "grayShade2",
  ":hover": {
    bg: "grayShade3"
  }
}, z1 = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, V1 = {
  primary: B1,
  active: z1
}, L1 = {
  container: j1,
  item: V1
}, W1 = {
  bg: "white",
  borderBottomColor: "grayShade2",
  zIndex: "modals",
  //  Right Section
  "> div:last-of-type": {
    // Actions container
    "> div:first-of-type": {
      // Single action
      "> span": {
        borderRightColor: "grayShade3"
      }
    }
  }
}, U1 = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, H1 = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, Y1 = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, G1 = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, q1 = {
  variant: "text.microlabeling",
  color: "gray"
}, X1 = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, K1 = {
  variant: "text.value",
  color: "primary"
}, Z1 = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, J1 = {
  variant: "text.labeling",
  color: "gray"
}, Q1 = {
  color: "gray"
}, ew = {
  color: "primary"
}, tw = {
  color: "labels.orange"
}, sf = {
  title: U1,
  text: Z1,
  subtitle: H1,
  labeling: Y1,
  value: X1,
  valuePrimary: K1,
  labelingGray: J1,
  microlabeling: G1,
  microlabelingGray: q1,
  inputValidationneutral: Q1,
  inputValidationsuccess: ew,
  inputValidationwarning: tw
}, rw = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, nw = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, ow = {
  drawerSection: nw,
  primary: rw
}, aw = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, iw = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, sw = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, lw = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, cw = {
  gray: sw,
  white: lw
}, uw = {
  default: {
    "> span": {
      color: "grayShade3"
    },
    bg: "gray"
  },
  fail: {
    "> span": {
      color: "white"
    },
    bg: "labels.red"
  },
  label: {
    "> span": {
      color: "white"
    },
    bg: "black"
  },
  light: {
    "> span": {
      color: "black"
    },
    bg: "grayShade3"
  },
  success: {
    "> span": {
      color: "white"
    },
    bg: "labels.green"
  },
  warning: {
    "> span": {
      color: "grayShade3"
    },
    bg: "labels.orange"
  },
  notice: {
    "> span": {
      color: "black"
    },
    bg: "labels.yellow"
  }
}, dw = {
  default: {
    "> span": {
      color: "black"
    },
    bg: "grayShade2",
    border: "1px solid",
    borderColor: "black"
  },
  fail: {
    "> span": {
      color: "labels.red"
    },
    bg: "labels.redShade2",
    border: "1px solid",
    borderColor: "labels.red"
  },
  label: {
    "> span": {
      color: "black"
    },
    bg: "white",
    border: "1px solid",
    borderColor: "black"
  },
  light: {
    "> span": {
      color: "black"
    },
    bg: "grayShade3",
    border: "1px solid",
    borderColor: "grayShade1"
  },
  success: {
    "> span": {
      color: "labels.green"
    },
    bg: "primaryShade2",
    border: "1px solid",
    borderColor: "labels.green"
  },
  warning: {
    "> span": {
      color: "labels.orange"
    },
    bg: "labels.orangeShade2",
    border: "1px solid",
    borderColor: "labels.orange"
  },
  notice: {
    "> span": {
      color: "black"
    },
    bg: "labels.yellowShade2",
    border: "1px solid",
    borderColor: "labels.yellow"
  }
}, fw = {
  keyValue: cw,
  primary: uw,
  bordered: dw,
  dot: aw,
  blink: iw
}, pw = {
  primary: {
    span: {
      bg: "grayShade3",
      borderColor: "grayShade1",
      ":after": {
        bg: "black"
      }
    },
    "> input:hover ~ span": {
      bg: "grayShade1"
    },
    "> input:disabled ~ span": {
      borderColor: "gray",
      bg: "grayShade1"
    }
  }
}, hw = {
  primary: {
    span: {
      bg: "grayShade3",
      borderColor: "grayShade1",
      ":after": {
        bg: "black"
      }
    },
    "> input:hover ~ span": {
      bg: "grayShade1"
    },
    "> input:disabled ~ span": {
      borderColor: "gray",
      bg: "grayShade1"
    }
  }
}, mw = {
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, vw = {
  variant: "variants.select.primary",
  bg: "white"
}, gw = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, bw = {
  disabled: gw,
  primary: mw,
  white: vw
}, yw = {
  color: "labels.red"
}, xw = {
  color: "darkGray"
}, Sw = {
  error: yw,
  default: xw
}, ww = {
  progress: {
    bg: "labels.green",
    "> span": {
      bg: "#EBEBEB"
    }
  },
  freshness: {
    background: "linear-gradient(90deg, #56CCF2 0%, red 100%)",
    "> span": {
      bg: "#EBEBEB"
    }
  }
}, Cw = {
  black: {
    bg: "grayShade2",
    "> div": {
      bg: "black"
    }
  },
  gray: {
    bg: "grayShade3",
    "& > div": {
      bg: "grayShade1"
    }
  },
  green: {
    bg: "primaryShade2",
    "& > div": {
      bg: "primary"
    }
  },
  orange: {
    bg: "labels.orangeShade2",
    "& > div": {
      bg: "labels.orange"
    }
  }
}, _w = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, kw = {
  color: "labels.green",
  bg: "primaryShade2",
  borderLeftWidth: 0,
  borderLeftStyle: "solid",
  borderLeftColor: "labels.green",
  "> div": {
    ":first-of-type": {
      fill: "labels.green"
    },
    pre: {
      "> div": {
        color: "labels.green"
      }
    }
  }
}, Ew = {
  color: "labels.red",
  bg: "labels.redShade2",
  borderLeftWidth: 0,
  borderLeftStyle: "solid",
  borderLeftColor: "labels.red",
  "> div": {
    ":first-of-type": {
      fill: "labels.red"
    },
    pre: {
      "> div": {
        color: "labels.red"
      }
    }
  }
}, Pw = {
  color: "labels.orange",
  bg: "labels.orangeShade2",
  borderLeftWidth: 0,
  borderLeftStyle: "solid",
  borderLeftColor: "labels.orange",
  "> div": {
    ":first-of-type": {
      fill: "labels.orange"
    },
    pre: {
      "> div": {
        color: "labels.orange"
      }
    }
  }
}, Tw = {
  color: "black",
  bg: "grayShade2",
  borderLeftWidth: 0,
  borderLeftStyle: "solid",
  borderLeftColor: "black",
  "> div": {
    ":first-of-type": {
      fill: "black"
    },
    pre: {
      "> div": {
        color: "black"
      }
    }
  }
}, Aw = {
  valid: kw,
  error: Ew,
  warning: Pw,
  neutral: Tw
}, Ow = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, $w = {
  bg: "transparent",
  label: {
    color: "black",
    bg: "grayShade3",
    cursor: "pointer",
    ":hover": {
      borderColor: "grayShade1"
    },
    ":focus-within": {
      borderColor: "black"
    }
  },
  "& > div > button:disabled > svg > path": {
    fill: "grayShade1"
  }
}, Rw = {
  variant: "pagination.primary",
  label: {
    color: "black",
    bg: "white",
    cursor: "pointer",
    ":hover": {
      borderColor: "grayShade1"
    },
    ":focus-within": {
      borderColor: "gray"
    }
  }
}, Dw = {
  variant: "pagination.primary",
  label: {
    color: "black",
    bg: "grayShade2",
    cursor: "default",
    borderColor: "grayShade2"
  },
  "& > div > button:disabled > svg > path": {
    fill: "grayShade1"
  }
}, Mw = {
  primary: $w,
  white: Rw,
  disabled: Dw
}, Iw = {
  secondary: {
    notification: {
      bg: "white",
      borderColor: "grayShade2"
    }
  }
}, Fw = {
  primary: {
    bg: "grayShade3",
    borderColor: "transparent",
    cursor: "pointer",
    ":hover": { borderColor: "grayShade1" },
    ":focus": { borderColor: "gray" }
  },
  white: {
    variant: "variants.select.primary",
    bg: "white"
  },
  disabled: {
    bg: "grayShade2",
    borderColor: "transparent",
    cursor: "default"
  }
}, Nw = {
  primary: {
    bg: "white"
  },
  white: {
    bg: "grayShade3"
  },
  disabled: {
    bg: "grayShade1"
  }
}, jw = {
  container: Fw,
  chip: Nw
}, Bw = {
  primary: "#21B182",
  primaryShade1: "#65D3AF",
  primaryShade2: "#E6F2EE",
  gray: "#a0a0a0",
  grayShade1: "#CBCBCB",
  grayShade2: "#E2E2E2",
  grayShade3: "#F5F5F5",
  black: "#272727",
  white: "#FFFFFF",
  labels: {
    red: "#EB5757",
    orange: "#f2994a",
    purple: "#9B51E0",
    purpleShade2: "#F5EEFC",
    yellow: "#FFE600",
    yellowShade2: "#FFF8B3",
    green: "#21B182",
    blueShade1: "#41B7DC",
    blueShade2: "#ECF8FC",
    blue: "#186781",
    orangeShade2: "#FDF0E4",
    redShade2: "#F8DEDE"
  }
}, zw = {
  colors: Bw,
  fonts: {
    text: "Inter",
    title: "Inter",
    subtitle: "Inter",
    label: "Inter",
    microlabel: "Inter",
    value: "IBM Plex Mono"
  },
  fontSizes: {
    text: "12px",
    title: "24px",
    subtitle: "18px",
    label: "12px",
    microlabel: "10px",
    value: "12px"
  },
  fontWeights: {
    text: 500,
    title: 700,
    subtitle: 700,
    label: 700,
    microlabel: 700,
    value: 700
  },
  iconSizes: {
    xxs: "8px",
    xs: "12px",
    sm: "16px",
    md: "20px",
    lg: "24px",
    xl: "36px"
  },
  transitions: {
    button: "all .25s ease"
  },
  shadows: {
    primary: "0px 5px 15px rgba(33, 177, 130, 0.2)",
    secondary: "0px 5px 15px rgba(144, 144, 144, 0.2)",
    explorer: "0px -1px 1px #E5E5E5",
    alert: "0px 5px 15px rgba(235, 87, 87, 0.25)",
    disabled: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    cardInsetShadow: "inset 0px -20px 30px -25px rgba(0, 0, 0, 0.15)",
    navigation: "1px 0px 0px #E5E5E5, 2px 0px 0px white",
    list: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    popup: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    notification: "0px 0px 15px rgba(0, 0, 0, 0.25)",
    focused: "0 0 0 2px rgba(33, 177, 130, 0.6)"
  },
  variants: {
    ...b1,
    tooltip: m1,
    label: h1,
    list: L1,
    header: W1,
    checkbox: pw,
    radio: hw,
    badges: fw,
    popup: ow,
    bar: ww,
    perf: Cw,
    code: _w,
    select: bw,
    callout: Aw,
    icon: Ow,
    editableSelect: jw,
    ...sf
  },
  text: {
    inputInfo: S1,
    selectInfo: Sw,
    ...sf
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...o1,
    ...l1,
    ...u1,
    ...f1,
    toggleButton: p1
  },
  navigation: N1,
  inputs: k1,
  inputIntents: E1,
  pagination: Mw,
  notification: Iw
}, Vw = {
  white: "#181a1b",
  gray: "#A6A6A6",
  grayShade1: "#707070",
  grayShade2: "#4D4D4D",
  grayShade3: "#1e2021",
  black: "#F0F0F0",
  primary: "#229570",
  primaryShade1: "#326756",
  primaryShade2: "#264339",
  labels: {
    red: "#C44D4D",
    orange: "#C0844E",
    orangeShade2: "#503E2E",
    purple: "#8449BB",
    yellow: "#D4BF08",
    yellowShade2: "#524D1F",
    green: "#229570",
    blue: "#2885A4",
    blueShade1: "#2D5E6E",
    blueShade2: "#243439",
    redShade2: "#4E3131",
    purpleShade2: "#8449BB"
  }
}, Lw = {
  primary: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  secondary: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  explorer: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  alert: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  disabled: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  cardInsetShadow: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  navigation: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  list: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  popup: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  notification: "0 0 1px 2px rgba(160, 160, 160, 0.1)",
  focused: "0 0 0 2px rgba(33, 177, 130, 0.6)"
}, Rz = () => JS(), Dz = {
  ...zw,
  colors: Vw,
  shadows: Lw
};
function Ww(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Uw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Hw = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Uw(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = Ww(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Et = "-ms-", Ki = "-moz-", Ne = "-webkit-", yu = "comm", xu = "rule", Su = "decl", Yw = "@import", Im = "@keyframes", Gw = "@layer", qw = Math.abs, Ps = String.fromCharCode, Xw = Object.assign;
function Kw(e, t) {
  return wt(e, 0) ^ 45 ? (((t << 2 ^ wt(e, 0)) << 2 ^ wt(e, 1)) << 2 ^ wt(e, 2)) << 2 ^ wt(e, 3) : 0;
}
function Fm(e) {
  return e.trim();
}
function Zw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, r) {
  return e.replace(t, r);
}
function wc(e, t) {
  return e.indexOf(t);
}
function wt(e, t) {
  return e.charCodeAt(t) | 0;
}
function xa(e, t, r) {
  return e.slice(t, r);
}
function Pr(e) {
  return e.length;
}
function wu(e) {
  return e.length;
}
function si(e, t) {
  return t.push(e), e;
}
function Jw(e, t) {
  return e.map(t).join("");
}
var Ts = 1, yo = 1, Nm = 0, zt = 0, pt = 0, Ao = "";
function As(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Ts, column: yo, length: i, return: "" };
}
function No(e, t) {
  return Xw(As("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Qw() {
  return pt;
}
function eC() {
  return pt = zt > 0 ? wt(Ao, --zt) : 0, yo--, pt === 10 && (yo = 1, Ts--), pt;
}
function Yt() {
  return pt = zt < Nm ? wt(Ao, zt++) : 0, yo++, pt === 10 && (yo = 1, Ts++), pt;
}
function Ar() {
  return wt(Ao, zt);
}
function Pi() {
  return zt;
}
function Na(e, t) {
  return xa(Ao, e, t);
}
function Sa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jm(e) {
  return Ts = yo = 1, Nm = Pr(Ao = e), zt = 0, [];
}
function Bm(e) {
  return Ao = "", e;
}
function Ti(e) {
  return Fm(Na(zt - 1, Cc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function tC(e) {
  for (; (pt = Ar()) && pt < 33; )
    Yt();
  return Sa(e) > 2 || Sa(pt) > 3 ? "" : " ";
}
function rC(e, t) {
  for (; --t && Yt() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return Na(e, Pi() + (t < 6 && Ar() == 32 && Yt() == 32));
}
function Cc(e) {
  for (; Yt(); )
    switch (pt) {
      case e:
        return zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Cc(pt);
        break;
      case 40:
        e === 41 && Cc(e);
        break;
      case 92:
        Yt();
        break;
    }
  return zt;
}
function nC(e, t) {
  for (; Yt() && e + pt !== 47 + 10; )
    if (e + pt === 42 + 42 && Ar() === 47)
      break;
  return "/*" + Na(t, zt - 1) + "*" + Ps(e === 47 ? e : Yt());
}
function oC(e) {
  for (; !Sa(Ar()); )
    Yt();
  return Na(e, zt);
}
function aC(e) {
  return Bm(Ai("", null, null, null, [""], e = jm(e), 0, [0], e));
}
function Ai(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, g = 1, b = 1, y = 0, S = "", E = o, C = a, I = n, T = S; g; )
    switch (m = y, y = Yt()) {
      case 40:
        if (m != 108 && wt(T, d - 1) == 58) {
          wc(T += je(Ti(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ti(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += tC(m);
        break;
      case 92:
        T += rC(Pi() - 1, 7);
        continue;
      case 47:
        switch (Ar()) {
          case 42:
          case 47:
            si(iC(nC(Yt(), Pi()), t, r), l);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * h:
        s[c++] = Pr(T) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            b == -1 && (T = je(T, /\f/g, "")), p > 0 && Pr(T) - d && si(p > 32 ? cf(T + ";", n, r, d - 1) : cf(je(T, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            T += ";";
          default:
            if (si(I = lf(T, t, r, c, u, o, s, S, E = [], C = [], d), a), y === 123)
              if (u === 0)
                Ai(T, t, I, I, E, a, d, s, C);
              else
                switch (f === 99 && wt(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ai(e, I, I, n && si(lf(e, I, I, 0, 0, o, s, S, o, E = [], d), C), o, C, d, s, n ? E : C);
                    break;
                  default:
                    Ai(T, I, I, I, [""], C, 0, s, C);
                }
        }
        c = u = p = 0, h = b = 1, S = T = "", d = i;
        break;
      case 58:
        d = 1 + Pr(T), p = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && eC() == 125)
            continue;
        }
        switch (T += Ps(y), y * h) {
          case 38:
            b = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            s[c++] = (Pr(T) - 1) * b, b = 1;
            break;
          case 64:
            Ar() === 45 && (T += Ti(Yt())), f = Ar(), u = d = Pr(S = T += oC(Pi())), y++;
            break;
          case 45:
            m === 45 && Pr(T) == 2 && (h = 0);
        }
    }
  return a;
}
function lf(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = wu(f), m = 0, h = 0, g = 0; m < n; ++m)
    for (var b = 0, y = xa(e, d + 1, d = qw(h = i[m])), S = e; b < p; ++b)
      (S = Fm(h > 0 ? f[b] + " " + y : je(y, /&\f/g, f[b]))) && (l[g++] = S);
  return As(e, t, r, o === 0 ? xu : s, l, c, u);
}
function iC(e, t, r) {
  return As(e, t, r, yu, Ps(Qw()), xa(e, 2, -2), 0);
}
function cf(e, t, r, n) {
  return As(e, t, r, Su, xa(e, 0, n), xa(e, n + 1, -1), n);
}
function io(e, t) {
  for (var r = "", n = wu(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function sC(e, t, r, n) {
  switch (e.type) {
    case Gw:
      if (e.children.length)
        break;
    case Yw:
    case Su:
      return e.return = e.return || e.value;
    case yu:
      return "";
    case Im:
      return e.return = e.value + "{" + io(e.children, n) + "}";
    case xu:
      e.value = e.props.join(",");
  }
  return Pr(r = io(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function lC(e) {
  var t = wu(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function cC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var uf = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function zm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var uC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Ar(), o === 38 && a === 12 && (r[n] = 1), !Sa(a); )
    Yt();
  return Na(t, zt);
}, dC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Sa(o)) {
      case 0:
        o === 38 && Ar() === 12 && (r[n] = 1), t[n] += uC(zt - 1, r, n);
        break;
      case 2:
        t[n] += Ti(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ar() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ps(o);
    }
  while (o = Yt());
  return t;
}, fC = function(t, r) {
  return Bm(dC(jm(t), r));
}, df = /* @__PURE__ */ new WeakMap(), pC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !df.get(n)) && !o) {
      df.set(t, !0);
      for (var a = [], i = fC(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, hC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, mC = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", vC = function(t) {
  return t.type === "comm" && t.children.indexOf(mC) > -1;
}, gC = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var i = !!r.parent, s = i ? r.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (vC(c))
              return;
            break;
          }
        }
        a.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Vm = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, bC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Vm(r[n]))
      return !0;
  return !1;
}, ff = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, yC = function(t, r, n) {
  Vm(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ff(t)) : bC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ff(t)));
};
function Lm(e, t) {
  switch (Kw(e, t)) {
    case 5103:
      return Ne + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ne + e + Ki + e + Et + e + e;
    case 6828:
    case 4268:
      return Ne + e + Et + e + e;
    case 6165:
      return Ne + e + Et + "flex-" + e + e;
    case 5187:
      return Ne + e + je(e, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + Et + "flex-$1$2") + e;
    case 5443:
      return Ne + e + Et + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return Ne + e + Et + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ne + e + Et + je(e, "shrink", "negative") + e;
    case 5292:
      return Ne + e + Et + je(e, "basis", "preferred-size") + e;
    case 6060:
      return Ne + "box-" + je(e, "-grow", "") + Ne + e + Et + je(e, "grow", "positive") + e;
    case 4554:
      return Ne + je(e, /([^-])(transform)/g, "$1" + Ne + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, Ne + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, Ne + "box-pack:$3" + Et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ne + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(e, /(.+)-inline(.+)/, Ne + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Pr(e) - 1 - t > 6)
        switch (wt(e, t + 1)) {
          case 109:
            if (wt(e, t + 4) !== 45)
              break;
          case 102:
            return je(e, /(.+:)(.+)-([^]+)/, "$1" + Ne + "$2-$3$1" + Ki + (wt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~wc(e, "stretch") ? Lm(je(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (wt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (wt(e, Pr(e) - 3 - (~wc(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + Ne) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ne + (wt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ne + "$2$3$1" + Et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (wt(e, t + 11)) {
        case 114:
          return Ne + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ne + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ne + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ne + e + Et + e + e;
  }
  return e;
}
var xC = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Su:
        t.return = Lm(t.value, t.length);
        break;
      case Im:
        return io([No(t, {
          value: je(t.value, "@", "@" + Ne)
        })], o);
      case xu:
        if (t.length)
          return Jw(t.props, function(a) {
            switch (Zw(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return io([No(t, {
                  props: [je(a, /:(read-\w+)/, ":" + Ki + "$1")]
                })], o);
              case "::placeholder":
                return io([No(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Ne + "input-$1")]
                }), No(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Ki + "$1")]
                }), No(t, {
                  props: [je(a, /:(plac\w+)/, Et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, SC = [xC], wC = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var g = h.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || SC;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
        a[g[b]] = !0;
      s.push(h);
    }
  );
  var l, c = [pC, hC];
  process.env.NODE_ENV !== "production" && c.push(gC({
    get compat() {
      return m.compat;
    }
  }), yC);
  {
    var u, d = [sC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== yu && u.insert(h.value + "{}"));
    } : cC(function(h) {
      u.insert(h);
    })], f = lC(c.concat(o, d)), p = function(g) {
      return io(aC(g), f);
    };
    l = function(g, b, y, S) {
      u = y, process.env.NODE_ENV !== "production" && b.map !== void 0 && (u = {
        insert: function(C) {
          y.insert(C + b.map);
        }
      }), p(g ? g + "{" + b.styles + "}" : b.styles), S && (m.inserted[b.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new Hw({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(s), m;
}, CC = !0;
function Cu(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Os = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  CC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, $s = function(t, r, n) {
  Os(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function _C(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var kC = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, pf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, EC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", PC = /[A-Z]|^ms/g, Wm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _u = function(t) {
  return t.charCodeAt(1) === 45;
}, hf = function(t) {
  return t != null && typeof t != "boolean";
}, bl = /* @__PURE__ */ zm(function(e) {
  return _u(e) ? e : e.replace(PC, "-$&").toLowerCase();
}), Zi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Wm, function(n, o, a) {
          return hr = {
            name: o,
            styles: a,
            next: hr
          }, o;
        });
  }
  return kC[t] !== 1 && !_u(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var TC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, AC = ["normal", "none", "initial", "inherit", "unset"], OC = Zi, $C = /^-ms-/, RC = /-(.)/g, mf = {};
  Zi = function(t, r) {
    if (t === "content" && (typeof r != "string" || AC.indexOf(r) === -1 && !TC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = OC(t, r);
    return n !== "" && !_u(t) && t.indexOf("-") !== -1 && mf[t] === void 0 && (mf[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace($C, "ms-").replace(RC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Um = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function wa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Um);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return hr = {
          name: r.name,
          styles: r.styles,
          next: hr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            hr = {
              name: n.name,
              styles: n.styles,
              next: hr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return DC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = hr, i = r(e);
        return hr = a, wa(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Wm, function(u, d, f) {
          var p = "animation" + s.length;
          return s.push("const " + p + " = keyframes`" + f.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function DC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += wa(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : hf(i) && (n += bl(a) + ":" + Zi(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Um);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            hf(i[s]) && (n += bl(a) + ":" + Zi(a, i[s]) + ";");
        else {
          var l = wa(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += bl(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(EC), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var vf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Hm;
process.env.NODE_ENV !== "production" && (Hm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var hr, xo = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  hr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += wa(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(pf), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += wa(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(pf), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Hm, function(f) {
    return l = f, "";
  })), vf.lastIndex = 0;
  for (var c = "", u; (u = vf.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = _C(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: hr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: hr
  };
}, MC = function(t) {
  return t();
}, Ym = U["useInsertionEffect"] ? U["useInsertionEffect"] : !1, ku = Ym || MC, gf = Ym || U.useLayoutEffect, IC = {}.hasOwnProperty, Eu = /* @__PURE__ */ U.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Eu.displayName = "EmotionCacheContext");
Eu.Provider;
var Rs = function(t) {
  return /* @__PURE__ */ Tt(function(r, n) {
    var o = ht(Eu);
    return t(r, o, n);
  });
}, hn = /* @__PURE__ */ U.createContext({});
process.env.NODE_ENV !== "production" && (hn.displayName = "EmotionThemeContext");
var FC = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Nn({}, t, r);
}, NC = /* @__PURE__ */ uf(function(e) {
  return uf(function(t) {
    return FC(e, t);
  });
}), Mz = function(t) {
  var r = U.useContext(hn);
  return t.theme !== r && (r = NC(r)(t.theme)), /* @__PURE__ */ U.createElement(hn.Provider, {
    value: r
  }, t.children);
}, bf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", yf = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", jC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Os(r, n, o), ku(function() {
    return $s(r, n, o);
  }), null;
}, BC = /* @__PURE__ */ Rs(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[bf], a = [n], i = "";
  typeof e.className == "string" ? i = Cu(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = xo(a, void 0, U.useContext(hn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[yf];
    l && (s = xo([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    IC.call(e, u) && u !== "css" && u !== bf && (process.env.NODE_ENV === "production" || u !== yf) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(jC, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ U.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (BC.displayName = "EmotionCssPropInternal");
var zC = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, xf = !1, VC = /* @__PURE__ */ Rs(function(e, t) {
  process.env.NODE_ENV !== "production" && !xf && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), xf = !0);
  var r = e.styles, n = xo([r], void 0, U.useContext(hn)), o = U.useRef();
  return gf(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), gf(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && $s(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (VC.displayName = "EmotionGlobal");
function LC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return xo(t);
}
var Iz = function() {
  var t = LC.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, WC = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var i = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            i = e(a);
          else {
            process.env.NODE_ENV !== "production" && a.styles !== void 0 && a.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var s in a)
              a[s] && s && (i && (i += " "), i += s);
          }
          break;
        }
        default:
          i = a;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function UC(e, t, r) {
  var n = [], o = Cu(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var HC = function(t) {
  var r = t.cache, n = t.serializedArr;
  return ku(function() {
    for (var o = 0; o < n.length; o++)
      $s(r, n[o], !1);
  }), null;
}, YC = /* @__PURE__ */ Rs(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = xo(u, t.registered);
    return n.push(f), Os(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return UC(t.registered, o, WC(u));
  }, i = {
    css: o,
    cx: a,
    theme: U.useContext(hn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(HC, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (YC.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Sf = !0, GC = typeof jest < "u" || typeof vi < "u";
  if (Sf && !GC) {
    var wf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Sf ? window : global
    ), Cf = "__EMOTION_REACT_" + zC.version.split(".")[0] + "__";
    wf[Cf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), wf[Cf] = !0;
  }
}
function qC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function lr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Mr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = ht(s);
    if (!u && r) {
      const d = new Error(
        a ?? qC(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [XC, KC] = lr({
  strict: !1,
  name: "PortalManagerContext"
});
function ZC(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ W.jsx(XC, { value: { zIndex: r }, children: t });
}
ZC.displayName = "PortalManager";
var Ji = globalThis != null && globalThis.document ? Ss : ze, [Gm, JC] = lr({
  strict: !1,
  name: "PortalContext"
}), Pu = "chakra-portal", QC = ".chakra-portal", e_ = (e) => /* @__PURE__ */ W.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
    },
    children: e.children
  }
), t_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = et(null), a = ye(null), [, i] = et({});
  ze(() => i({}), []);
  const s = JC(), l = KC();
  Ji(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = Pu, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ W.jsx(e_, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? sm(
    /* @__PURE__ */ W.jsx(Gm, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ W.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, r_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = _t(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Pu), l;
  }, [o]), [, s] = et({});
  return Ji(() => s({}), []), Ji(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? sm(
    /* @__PURE__ */ W.jsx(Gm, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function ja(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ W.jsx(r_, { containerRef: r, ...n }) : /* @__PURE__ */ W.jsx(t_, { ...n });
}
ja.className = Pu;
ja.selector = QC;
ja.displayName = "Portal";
function Vn() {
  const e = ht(
    hn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var qm = Mr({});
qm.displayName = "ColorModeContext";
function Tu() {
  const e = ht(qm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Fz(e, t) {
  const { colorMode: r } = Tu();
  return r === "dark" ? t : e;
}
function Xm() {
  const e = Tu(), t = Vn();
  return { ...e, theme: t };
}
function n_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function o_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function Nz(e, t, r) {
  const n = Vn();
  return a_(e, t, r)(n);
}
function a_(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return n_(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return o_(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var bt = (...e) => e.filter(Boolean).join(" ");
function i_() {
  return process.env.NODE_ENV !== "production";
}
function br(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var jz = (e) => {
  const { condition: t, message: r } = e;
  t && i_() && console.warn(r);
};
function un(e, ...t) {
  return s_(e) ? e(...t) : e;
}
var s_ = (e) => typeof e == "function", Km = (e) => e ? "" : void 0, Bz = (e) => e ? !0 : void 0;
function Ht(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function l_(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Qi = { exports: {} };
Qi.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", g = "[object Number]", b = "[object Null]", y = "[object Object]", S = "[object Proxy]", E = "[object RegExp]", C = "[object Set]", I = "[object String]", T = "[object Undefined]", N = "[object WeakMap]", V = "[object ArrayBuffer]", B = "[object DataView]", X = "[object Float32Array]", ne = "[object Float64Array]", J = "[object Int8Array]", Q = "[object Int16Array]", ee = "[object Int32Array]", oe = "[object Uint8Array]", D = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", de = "[object Uint32Array]", M = /[\\^$.*+?()[\]{}|]/g, F = /^\[object .+?Constructor\]$/, z = /^(?:0|[1-9]\d*)$/, P = {};
  P[X] = P[ne] = P[J] = P[Q] = P[ee] = P[oe] = P[D] = P[ce] = P[de] = !0, P[s] = P[l] = P[V] = P[u] = P[B] = P[d] = P[f] = P[p] = P[h] = P[g] = P[y] = P[E] = P[C] = P[I] = P[N] = !1;
  var O = typeof ai == "object" && ai && ai.Object === Object && ai, j = typeof self == "object" && self && self.Object === Object && self, w = O || j || Function("return this")(), H = t && !t.nodeType && t, A = H && !0 && e && !e.nodeType && e, Z = A && A.exports === H, Y = Z && O.process, ae = function() {
    try {
      var v = A && A.require && A.require("util").types;
      return v || Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), $ = ae && ae.isTypedArray;
  function xe(v, _, R) {
    switch (R.length) {
      case 0:
        return v.call(_);
      case 1:
        return v.call(_, R[0]);
      case 2:
        return v.call(_, R[0], R[1]);
      case 3:
        return v.call(_, R[0], R[1], R[2]);
    }
    return v.apply(_, R);
  }
  function pe(v, _) {
    for (var R = -1, re = Array(v); ++R < v; )
      re[R] = _(R);
    return re;
  }
  function le(v) {
    return function(_) {
      return v(_);
    };
  }
  function $e(v, _) {
    return v == null ? void 0 : v[_];
  }
  function ge(v, _) {
    return function(R) {
      return v(_(R));
    };
  }
  var Se = Array.prototype, dt = Function.prototype, Ce = Object.prototype, ct = w["__core-js_shared__"], tt = dt.toString, De = Ce.hasOwnProperty, se = function() {
    var v = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), Te = Ce.toString, At = tt.call(Object), gt = RegExp(
    "^" + tt.call(De).replace(M, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), it = Z ? w.Buffer : void 0, Nr = w.Symbol, jr = w.Uint8Array, Br = it ? it.allocUnsafe : void 0, te = ge(Object.getPrototypeOf, Object), ve = Object.create, Sr = Ce.propertyIsEnumerable, G = Se.splice, ie = Nr ? Nr.toStringTag : void 0, be = function() {
    try {
      var v = sl(Object, "defineProperty");
      return v({}, "", {}), v;
    } catch {
    }
  }(), we = it ? it.isBuffer : void 0, He = Math.max, yt = Date.now, Xe = sl(w, "Map"), rt = sl(Object, "create"), zr = function() {
    function v() {
    }
    return function(_) {
      if (!wn(_))
        return {};
      if (ve)
        return ve(_);
      v.prototype = _;
      var R = new v();
      return v.prototype = void 0, R;
    };
  }();
  function wr(v) {
    var _ = -1, R = v == null ? 0 : v.length;
    for (this.clear(); ++_ < R; ) {
      var re = v[_];
      this.set(re[0], re[1]);
    }
  }
  function el() {
    this.__data__ = rt ? rt(null) : {}, this.size = 0;
  }
  function Za(v) {
    var _ = this.has(v) && delete this.__data__[v];
    return this.size -= _ ? 1 : 0, _;
  }
  function tl(v) {
    var _ = this.__data__;
    if (rt) {
      var R = _[v];
      return R === n ? void 0 : R;
    }
    return De.call(_, v) ? _[v] : void 0;
  }
  function Ja(v) {
    var _ = this.__data__;
    return rt ? _[v] !== void 0 : De.call(_, v);
  }
  function Qa(v, _) {
    var R = this.__data__;
    return this.size += this.has(v) ? 0 : 1, R[v] = rt && _ === void 0 ? n : _, this;
  }
  wr.prototype.clear = el, wr.prototype.delete = Za, wr.prototype.get = tl, wr.prototype.has = Ja, wr.prototype.set = Qa;
  function cr(v) {
    var _ = -1, R = v == null ? 0 : v.length;
    for (this.clear(); ++_ < R; ) {
      var re = v[_];
      this.set(re[0], re[1]);
    }
  }
  function rl() {
    this.__data__ = [], this.size = 0;
  }
  function ei(v) {
    var _ = this.__data__, R = It(_, v);
    if (R < 0)
      return !1;
    var re = _.length - 1;
    return R == re ? _.pop() : G.call(_, R, 1), --this.size, !0;
  }
  function nl(v) {
    var _ = this.__data__, R = It(_, v);
    return R < 0 ? void 0 : _[R][1];
  }
  function ol(v) {
    return It(this.__data__, v) > -1;
  }
  function al(v, _) {
    var R = this.__data__, re = It(R, v);
    return re < 0 ? (++this.size, R.push([v, _])) : R[re][1] = _, this;
  }
  cr.prototype.clear = rl, cr.prototype.delete = ei, cr.prototype.get = nl, cr.prototype.has = ol, cr.prototype.set = al;
  function rn(v) {
    var _ = -1, R = v == null ? 0 : v.length;
    for (this.clear(); ++_ < R; ) {
      var re = v[_];
      this.set(re[0], re[1]);
    }
  }
  function x() {
    this.size = 0, this.__data__ = {
      hash: new wr(),
      map: new (Xe || cr)(),
      string: new wr()
    };
  }
  function L(v) {
    var _ = ni(this, v).delete(v);
    return this.size -= _ ? 1 : 0, _;
  }
  function K(v) {
    return ni(this, v).get(v);
  }
  function he(v) {
    return ni(this, v).has(v);
  }
  function Re(v, _) {
    var R = ni(this, v), re = R.size;
    return R.set(v, _), this.size += R.size == re ? 0 : 1, this;
  }
  rn.prototype.clear = x, rn.prototype.delete = L, rn.prototype.get = K, rn.prototype.has = he, rn.prototype.set = Re;
  function Ae(v) {
    var _ = this.__data__ = new cr(v);
    this.size = _.size;
  }
  function Ee() {
    this.__data__ = new cr(), this.size = 0;
  }
  function _e(v) {
    var _ = this.__data__, R = _.delete(v);
    return this.size = _.size, R;
  }
  function xt(v) {
    return this.__data__.get(v);
  }
  function nt(v) {
    return this.__data__.has(v);
  }
  function st(v, _) {
    var R = this.__data__;
    if (R instanceof cr) {
      var re = R.__data__;
      if (!Xe || re.length < r - 1)
        return re.push([v, _]), this.size = ++R.size, this;
      R = this.__data__ = new rn(re);
    }
    return R.set(v, _), this.size = R.size, this;
  }
  Ae.prototype.clear = Ee, Ae.prototype.delete = _e, Ae.prototype.get = xt, Ae.prototype.has = nt, Ae.prototype.set = st;
  function Mt(v, _) {
    var R = ul(v), re = !R && cl(v), Oe = !R && !re && Pd(v), Ye = !R && !re && !Oe && Ad(v), Ze = R || re || Oe || Ye, Pe = Ze ? pe(v.length, String) : [], Je = Pe.length;
    for (var Zt in v)
      (_ || De.call(v, Zt)) && !(Ze && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Zt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Oe && (Zt == "offset" || Zt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ye && (Zt == "buffer" || Zt == "byteLength" || Zt == "byteOffset") || // Skip index properties.
      kd(Zt, Je))) && Pe.push(Zt);
    return Pe;
  }
  function Cr(v, _, R) {
    (R !== void 0 && !oi(v[_], R) || R === void 0 && !(_ in v)) && il(v, _, R);
  }
  function ti(v, _, R) {
    var re = v[_];
    (!(De.call(v, _) && oi(re, R)) || R === void 0 && !(_ in v)) && il(v, _, R);
  }
  function It(v, _) {
    for (var R = v.length; R--; )
      if (oi(v[R][0], _))
        return R;
    return -1;
  }
  function il(v, _, R) {
    _ == "__proto__" && be ? be(v, _, {
      configurable: !0,
      enumerable: !0,
      value: R,
      writable: !0
    }) : v[_] = R;
  }
  var Ty = Vy();
  function ri(v) {
    return v == null ? v === void 0 ? T : b : ie && ie in Object(v) ? Ly(v) : qy(v);
  }
  function Cd(v) {
    return Do(v) && ri(v) == s;
  }
  function Ay(v) {
    if (!wn(v) || Yy(v))
      return !1;
    var _ = fl(v) ? gt : F;
    return _.test(Jy(v));
  }
  function Oy(v) {
    return Do(v) && Td(v.length) && !!P[ri(v)];
  }
  function $y(v) {
    if (!wn(v))
      return Gy(v);
    var _ = Ed(v), R = [];
    for (var re in v)
      re == "constructor" && (_ || !De.call(v, re)) || R.push(re);
    return R;
  }
  function _d(v, _, R, re, Oe) {
    v !== _ && Ty(_, function(Ye, Ze) {
      if (Oe || (Oe = new Ae()), wn(Ye))
        Ry(v, _, Ze, R, _d, re, Oe);
      else {
        var Pe = re ? re(ll(v, Ze), Ye, Ze + "", v, _, Oe) : void 0;
        Pe === void 0 && (Pe = Ye), Cr(v, Ze, Pe);
      }
    }, Od);
  }
  function Ry(v, _, R, re, Oe, Ye, Ze) {
    var Pe = ll(v, R), Je = ll(_, R), Zt = Ze.get(Je);
    if (Zt) {
      Cr(v, R, Zt);
      return;
    }
    var Ut = Ye ? Ye(Pe, Je, R + "", v, _, Ze) : void 0, Mo = Ut === void 0;
    if (Mo) {
      var pl = ul(Je), hl = !pl && Pd(Je), Rd = !pl && !hl && Ad(Je);
      Ut = Je, pl || hl || Rd ? ul(Pe) ? Ut = Pe : Qy(Pe) ? Ut = jy(Pe) : hl ? (Mo = !1, Ut = Iy(Je, !0)) : Rd ? (Mo = !1, Ut = Ny(Je, !0)) : Ut = [] : e0(Je) || cl(Je) ? (Ut = Pe, cl(Pe) ? Ut = t0(Pe) : (!wn(Pe) || fl(Pe)) && (Ut = Wy(Je))) : Mo = !1;
    }
    Mo && (Ze.set(Je, Ut), Oe(Ut, Je, re, Ye, Ze), Ze.delete(Je)), Cr(v, R, Ut);
  }
  function Dy(v, _) {
    return Ky(Xy(v, _, $d), v + "");
  }
  var My = be ? function(v, _) {
    return be(v, "toString", {
      configurable: !0,
      enumerable: !1,
      value: n0(_),
      writable: !0
    });
  } : $d;
  function Iy(v, _) {
    if (_)
      return v.slice();
    var R = v.length, re = Br ? Br(R) : new v.constructor(R);
    return v.copy(re), re;
  }
  function Fy(v) {
    var _ = new v.constructor(v.byteLength);
    return new jr(_).set(new jr(v)), _;
  }
  function Ny(v, _) {
    var R = _ ? Fy(v.buffer) : v.buffer;
    return new v.constructor(R, v.byteOffset, v.length);
  }
  function jy(v, _) {
    var R = -1, re = v.length;
    for (_ || (_ = Array(re)); ++R < re; )
      _[R] = v[R];
    return _;
  }
  function By(v, _, R, re) {
    var Oe = !R;
    R || (R = {});
    for (var Ye = -1, Ze = _.length; ++Ye < Ze; ) {
      var Pe = _[Ye], Je = re ? re(R[Pe], v[Pe], Pe, R, v) : void 0;
      Je === void 0 && (Je = v[Pe]), Oe ? il(R, Pe, Je) : ti(R, Pe, Je);
    }
    return R;
  }
  function zy(v) {
    return Dy(function(_, R) {
      var re = -1, Oe = R.length, Ye = Oe > 1 ? R[Oe - 1] : void 0, Ze = Oe > 2 ? R[2] : void 0;
      for (Ye = v.length > 3 && typeof Ye == "function" ? (Oe--, Ye) : void 0, Ze && Uy(R[0], R[1], Ze) && (Ye = Oe < 3 ? void 0 : Ye, Oe = 1), _ = Object(_); ++re < Oe; ) {
        var Pe = R[re];
        Pe && v(_, Pe, re, Ye);
      }
      return _;
    });
  }
  function Vy(v) {
    return function(_, R, re) {
      for (var Oe = -1, Ye = Object(_), Ze = re(_), Pe = Ze.length; Pe--; ) {
        var Je = Ze[v ? Pe : ++Oe];
        if (R(Ye[Je], Je, Ye) === !1)
          break;
      }
      return _;
    };
  }
  function ni(v, _) {
    var R = v.__data__;
    return Hy(_) ? R[typeof _ == "string" ? "string" : "hash"] : R.map;
  }
  function sl(v, _) {
    var R = $e(v, _);
    return Ay(R) ? R : void 0;
  }
  function Ly(v) {
    var _ = De.call(v, ie), R = v[ie];
    try {
      v[ie] = void 0;
      var re = !0;
    } catch {
    }
    var Oe = Te.call(v);
    return re && (_ ? v[ie] = R : delete v[ie]), Oe;
  }
  function Wy(v) {
    return typeof v.constructor == "function" && !Ed(v) ? zr(te(v)) : {};
  }
  function kd(v, _) {
    var R = typeof v;
    return _ = _ ?? i, !!_ && (R == "number" || R != "symbol" && z.test(v)) && v > -1 && v % 1 == 0 && v < _;
  }
  function Uy(v, _, R) {
    if (!wn(R))
      return !1;
    var re = typeof _;
    return (re == "number" ? dl(R) && kd(_, R.length) : re == "string" && _ in R) ? oi(R[_], v) : !1;
  }
  function Hy(v) {
    var _ = typeof v;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? v !== "__proto__" : v === null;
  }
  function Yy(v) {
    return !!se && se in v;
  }
  function Ed(v) {
    var _ = v && v.constructor, R = typeof _ == "function" && _.prototype || Ce;
    return v === R;
  }
  function Gy(v) {
    var _ = [];
    if (v != null)
      for (var R in Object(v))
        _.push(R);
    return _;
  }
  function qy(v) {
    return Te.call(v);
  }
  function Xy(v, _, R) {
    return _ = He(_ === void 0 ? v.length - 1 : _, 0), function() {
      for (var re = arguments, Oe = -1, Ye = He(re.length - _, 0), Ze = Array(Ye); ++Oe < Ye; )
        Ze[Oe] = re[_ + Oe];
      Oe = -1;
      for (var Pe = Array(_ + 1); ++Oe < _; )
        Pe[Oe] = re[Oe];
      return Pe[_] = R(Ze), xe(v, this, Pe);
    };
  }
  function ll(v, _) {
    if (!(_ === "constructor" && typeof v[_] == "function") && _ != "__proto__")
      return v[_];
  }
  var Ky = Zy(My);
  function Zy(v) {
    var _ = 0, R = 0;
    return function() {
      var re = yt(), Oe = a - (re - R);
      if (R = re, Oe > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return v.apply(void 0, arguments);
    };
  }
  function Jy(v) {
    if (v != null) {
      try {
        return tt.call(v);
      } catch {
      }
      try {
        return v + "";
      } catch {
      }
    }
    return "";
  }
  function oi(v, _) {
    return v === _ || v !== v && _ !== _;
  }
  var cl = Cd(function() {
    return arguments;
  }()) ? Cd : function(v) {
    return Do(v) && De.call(v, "callee") && !Sr.call(v, "callee");
  }, ul = Array.isArray;
  function dl(v) {
    return v != null && Td(v.length) && !fl(v);
  }
  function Qy(v) {
    return Do(v) && dl(v);
  }
  var Pd = we || o0;
  function fl(v) {
    if (!wn(v))
      return !1;
    var _ = ri(v);
    return _ == p || _ == m || _ == c || _ == S;
  }
  function Td(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= i;
  }
  function wn(v) {
    var _ = typeof v;
    return v != null && (_ == "object" || _ == "function");
  }
  function Do(v) {
    return v != null && typeof v == "object";
  }
  function e0(v) {
    if (!Do(v) || ri(v) != y)
      return !1;
    var _ = te(v);
    if (_ === null)
      return !0;
    var R = De.call(_, "constructor") && _.constructor;
    return typeof R == "function" && R instanceof R && tt.call(R) == At;
  }
  var Ad = $ ? le($) : Oy;
  function t0(v) {
    return By(v, Od(v));
  }
  function Od(v) {
    return dl(v) ? Mt(v, !0) : $y(v);
  }
  var r0 = zy(function(v, _, R, re) {
    _d(v, _, R, re);
  });
  function n0(v) {
    return function() {
      return v;
    };
  }
  function $d(v) {
    return v;
  }
  function o0() {
    return !1;
  }
  e.exports = r0;
})(Qi, Qi.exports);
var c_ = Qi.exports;
const nr = /* @__PURE__ */ _s(c_);
var u_ = (e) => /!(important)?$/.test(e), _f = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, d_ = (e, t) => (r) => {
  const n = String(t), o = u_(n), a = _f(n), i = e ? `${e}.${a}` : a;
  let s = br(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = _f(s), o ? `${s} !important` : s;
};
function Au(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = d_(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var li = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Jt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Au({
      scale: e,
      transform: t
    }), n;
  };
}
var f_ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function p_(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: f_(t),
    transform: r ? Au({
      scale: r,
      compose: n
    }) : n
  };
}
var Zm = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function h_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Zm
  ].join(" ");
}
function m_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Zm
  ].join(" ");
}
var v_ = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, g_ = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function b_(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var y_ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, _c = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, x_ = new Set(Object.values(_c)), kc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), S_ = (e) => e.trim();
function w_(e, t) {
  if (e == null || kc.has(e))
    return e;
  if (!(Ec(e) || kc.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(S_).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in _c ? _c[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (x_.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], g = Ec(h) ? h : h && h.split(" "), b = `colors.${m}`, y = b in t.__cssMap ? t.__cssMap[b].varRef : m;
    return g ? [
      y,
      ...Array.isArray(g) ? g : [g]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Ec = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), C_ = (e, t) => w_(e, t ?? {});
function __(e) {
  return /^var\(--.+\)$/.test(e);
}
var k_ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, _r = (e) => (t) => `${e}(${t})`, Me = {
  filter(e) {
    return e !== "auto" ? e : v_;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : g_;
  },
  ring(e) {
    return b_(Me.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? h_() : e === "auto-gpu" ? m_() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = k_(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (__(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: C_,
  blur: _r("blur"),
  opacity: _r("opacity"),
  brightness: _r("brightness"),
  contrast: _r("contrast"),
  dropShadow: _r("drop-shadow"),
  grayscale: _r("grayscale"),
  hueRotate: _r("hue-rotate"),
  invert: _r("invert"),
  saturate: _r("saturate"),
  sepia: _r("sepia"),
  bgImage(e) {
    return e == null || Ec(e) || kc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = y_[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, k = {
  borderWidths: Jt("borderWidths"),
  borderStyles: Jt("borderStyles"),
  colors: Jt("colors"),
  borders: Jt("borders"),
  gradients: Jt("gradients", Me.gradient),
  radii: Jt("radii", Me.px),
  space: Jt("space", li(Me.vh, Me.px)),
  spaceT: Jt("space", li(Me.vh, Me.px)),
  degreeT(e) {
    return { property: e, transform: Me.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Au({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Jt("sizes", li(Me.vh, Me.px)),
  sizesT: Jt("sizes", li(Me.vh, Me.fraction)),
  shadows: Jt("shadows"),
  logical: p_,
  blur: Jt("blur", Me.blur)
}, Oi = {
  background: k.colors("background"),
  backgroundColor: k.colors("backgroundColor"),
  backgroundImage: k.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Me.bgClip },
  bgSize: k.prop("backgroundSize"),
  bgPosition: k.prop("backgroundPosition"),
  bg: k.colors("background"),
  bgColor: k.colors("backgroundColor"),
  bgPos: k.prop("backgroundPosition"),
  bgRepeat: k.prop("backgroundRepeat"),
  bgAttachment: k.prop("backgroundAttachment"),
  bgGradient: k.gradients("backgroundImage"),
  bgClip: { transform: Me.bgClip }
};
Object.assign(Oi, {
  bgImage: Oi.backgroundImage,
  bgImg: Oi.backgroundImage
});
var Fe = {
  border: k.borders("border"),
  borderWidth: k.borderWidths("borderWidth"),
  borderStyle: k.borderStyles("borderStyle"),
  borderColor: k.colors("borderColor"),
  borderRadius: k.radii("borderRadius"),
  borderTop: k.borders("borderTop"),
  borderBlockStart: k.borders("borderBlockStart"),
  borderTopLeftRadius: k.radii("borderTopLeftRadius"),
  borderStartStartRadius: k.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: k.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: k.radii("borderTopRightRadius"),
  borderStartEndRadius: k.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: k.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: k.borders("borderRight"),
  borderInlineEnd: k.borders("borderInlineEnd"),
  borderBottom: k.borders("borderBottom"),
  borderBlockEnd: k.borders("borderBlockEnd"),
  borderBottomLeftRadius: k.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: k.radii("borderBottomRightRadius"),
  borderLeft: k.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: k.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: k.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: k.borders(["borderLeft", "borderRight"]),
  borderInline: k.borders("borderInline"),
  borderY: k.borders(["borderTop", "borderBottom"]),
  borderBlock: k.borders("borderBlock"),
  borderTopWidth: k.borderWidths("borderTopWidth"),
  borderBlockStartWidth: k.borderWidths("borderBlockStartWidth"),
  borderTopColor: k.colors("borderTopColor"),
  borderBlockStartColor: k.colors("borderBlockStartColor"),
  borderTopStyle: k.borderStyles("borderTopStyle"),
  borderBlockStartStyle: k.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: k.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: k.borderWidths("borderBlockEndWidth"),
  borderBottomColor: k.colors("borderBottomColor"),
  borderBlockEndColor: k.colors("borderBlockEndColor"),
  borderBottomStyle: k.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: k.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: k.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: k.borderWidths("borderInlineStartWidth"),
  borderLeftColor: k.colors("borderLeftColor"),
  borderInlineStartColor: k.colors("borderInlineStartColor"),
  borderLeftStyle: k.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: k.borderStyles("borderInlineStartStyle"),
  borderRightWidth: k.borderWidths("borderRightWidth"),
  borderInlineEndWidth: k.borderWidths("borderInlineEndWidth"),
  borderRightColor: k.colors("borderRightColor"),
  borderInlineEndColor: k.colors("borderInlineEndColor"),
  borderRightStyle: k.borderStyles("borderRightStyle"),
  borderInlineEndStyle: k.borderStyles("borderInlineEndStyle"),
  borderTopRadius: k.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: k.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: k.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: k.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(Fe, {
  rounded: Fe.borderRadius,
  roundedTop: Fe.borderTopRadius,
  roundedTopLeft: Fe.borderTopLeftRadius,
  roundedTopRight: Fe.borderTopRightRadius,
  roundedTopStart: Fe.borderStartStartRadius,
  roundedTopEnd: Fe.borderStartEndRadius,
  roundedBottom: Fe.borderBottomRadius,
  roundedBottomLeft: Fe.borderBottomLeftRadius,
  roundedBottomRight: Fe.borderBottomRightRadius,
  roundedBottomStart: Fe.borderEndStartRadius,
  roundedBottomEnd: Fe.borderEndEndRadius,
  roundedLeft: Fe.borderLeftRadius,
  roundedRight: Fe.borderRightRadius,
  roundedStart: Fe.borderInlineStartRadius,
  roundedEnd: Fe.borderInlineEndRadius,
  borderStart: Fe.borderInlineStart,
  borderEnd: Fe.borderInlineEnd,
  borderTopStartRadius: Fe.borderStartStartRadius,
  borderTopEndRadius: Fe.borderStartEndRadius,
  borderBottomStartRadius: Fe.borderEndStartRadius,
  borderBottomEndRadius: Fe.borderEndEndRadius,
  borderStartRadius: Fe.borderInlineStartRadius,
  borderEndRadius: Fe.borderInlineEndRadius,
  borderStartWidth: Fe.borderInlineStartWidth,
  borderEndWidth: Fe.borderInlineEndWidth,
  borderStartColor: Fe.borderInlineStartColor,
  borderEndColor: Fe.borderInlineEndColor,
  borderStartStyle: Fe.borderInlineStartStyle,
  borderEndStyle: Fe.borderInlineEndStyle
});
var E_ = {
  color: k.colors("color"),
  textColor: k.colors("color"),
  fill: k.colors("fill"),
  stroke: k.colors("stroke")
}, Pc = {
  boxShadow: k.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: k.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: k.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Pc, {
  shadow: Pc.boxShadow
});
var P_ = {
  filter: { transform: Me.filter },
  blur: k.blur("--chakra-blur"),
  brightness: k.propT("--chakra-brightness", Me.brightness),
  contrast: k.propT("--chakra-contrast", Me.contrast),
  hueRotate: k.degreeT("--chakra-hue-rotate"),
  invert: k.propT("--chakra-invert", Me.invert),
  saturate: k.propT("--chakra-saturate", Me.saturate),
  dropShadow: k.propT("--chakra-drop-shadow", Me.dropShadow),
  backdropFilter: { transform: Me.backdropFilter },
  backdropBlur: k.blur("--chakra-backdrop-blur"),
  backdropBrightness: k.propT(
    "--chakra-backdrop-brightness",
    Me.brightness
  ),
  backdropContrast: k.propT("--chakra-backdrop-contrast", Me.contrast),
  backdropHueRotate: k.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: k.propT("--chakra-backdrop-invert", Me.invert),
  backdropSaturate: k.propT("--chakra-backdrop-saturate", Me.saturate)
}, es = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Me.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: k.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: k.space("gap"),
  rowGap: k.space("rowGap"),
  columnGap: k.space("columnGap")
};
Object.assign(es, {
  flexDir: es.flexDirection
});
var Jm = {
  gridGap: k.space("gridGap"),
  gridColumnGap: k.space("gridColumnGap"),
  gridRowGap: k.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, T_ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Me.outline },
  outlineOffset: !0,
  outlineColor: k.colors("outlineColor")
}, er = {
  width: k.sizesT("width"),
  inlineSize: k.sizesT("inlineSize"),
  height: k.sizes("height"),
  blockSize: k.sizes("blockSize"),
  boxSize: k.sizes(["width", "height"]),
  minWidth: k.sizes("minWidth"),
  minInlineSize: k.sizes("minInlineSize"),
  minHeight: k.sizes("minHeight"),
  minBlockSize: k.sizes("minBlockSize"),
  maxWidth: k.sizes("maxWidth"),
  maxInlineSize: k.sizes("maxInlineSize"),
  maxHeight: k.sizes("maxHeight"),
  maxBlockSize: k.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: k.propT("float", Me.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(er, {
  w: er.width,
  h: er.height,
  minW: er.minWidth,
  maxW: er.maxWidth,
  minH: er.minHeight,
  maxH: er.maxHeight,
  overscroll: er.overscrollBehavior,
  overscrollX: er.overscrollBehaviorX,
  overscrollY: er.overscrollBehaviorY
});
var A_ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: k.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: k.prop("listStyleImage")
};
function O_(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var $_ = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, R_ = $_(O_), D_ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, M_ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, yl = (e, t, r) => {
  const n = {}, o = R_(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, I_ = {
  srOnly: {
    transform(e) {
      return e === !0 ? D_ : e === "focusable" ? M_ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => yl(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => yl(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => yl(t, e, r)
  }
}, ea = {
  position: !0,
  pos: k.prop("position"),
  zIndex: k.prop("zIndex", "zIndices"),
  inset: k.spaceT("inset"),
  insetX: k.spaceT(["left", "right"]),
  insetInline: k.spaceT("insetInline"),
  insetY: k.spaceT(["top", "bottom"]),
  insetBlock: k.spaceT("insetBlock"),
  top: k.spaceT("top"),
  insetBlockStart: k.spaceT("insetBlockStart"),
  bottom: k.spaceT("bottom"),
  insetBlockEnd: k.spaceT("insetBlockEnd"),
  left: k.spaceT("left"),
  insetInlineStart: k.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: k.spaceT("right"),
  insetInlineEnd: k.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(ea, {
  insetStart: ea.insetInlineStart,
  insetEnd: ea.insetInlineEnd
});
var F_ = {
  ring: { transform: Me.ring },
  ringColor: k.colors("--chakra-ring-color"),
  ringOffset: k.prop("--chakra-ring-offset-width"),
  ringOffsetColor: k.colors("--chakra-ring-offset-color"),
  ringInset: k.prop("--chakra-ring-inset")
}, Ke = {
  margin: k.spaceT("margin"),
  marginTop: k.spaceT("marginTop"),
  marginBlockStart: k.spaceT("marginBlockStart"),
  marginRight: k.spaceT("marginRight"),
  marginInlineEnd: k.spaceT("marginInlineEnd"),
  marginBottom: k.spaceT("marginBottom"),
  marginBlockEnd: k.spaceT("marginBlockEnd"),
  marginLeft: k.spaceT("marginLeft"),
  marginInlineStart: k.spaceT("marginInlineStart"),
  marginX: k.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: k.spaceT("marginInline"),
  marginY: k.spaceT(["marginTop", "marginBottom"]),
  marginBlock: k.spaceT("marginBlock"),
  padding: k.space("padding"),
  paddingTop: k.space("paddingTop"),
  paddingBlockStart: k.space("paddingBlockStart"),
  paddingRight: k.space("paddingRight"),
  paddingBottom: k.space("paddingBottom"),
  paddingBlockEnd: k.space("paddingBlockEnd"),
  paddingLeft: k.space("paddingLeft"),
  paddingInlineStart: k.space("paddingInlineStart"),
  paddingInlineEnd: k.space("paddingInlineEnd"),
  paddingX: k.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: k.space("paddingInline"),
  paddingY: k.space(["paddingTop", "paddingBottom"]),
  paddingBlock: k.space("paddingBlock")
};
Object.assign(Ke, {
  m: Ke.margin,
  mt: Ke.marginTop,
  mr: Ke.marginRight,
  me: Ke.marginInlineEnd,
  marginEnd: Ke.marginInlineEnd,
  mb: Ke.marginBottom,
  ml: Ke.marginLeft,
  ms: Ke.marginInlineStart,
  marginStart: Ke.marginInlineStart,
  mx: Ke.marginX,
  my: Ke.marginY,
  p: Ke.padding,
  pt: Ke.paddingTop,
  py: Ke.paddingY,
  px: Ke.paddingX,
  pb: Ke.paddingBottom,
  pl: Ke.paddingLeft,
  ps: Ke.paddingInlineStart,
  paddingStart: Ke.paddingInlineStart,
  pr: Ke.paddingRight,
  pe: Ke.paddingInlineEnd,
  paddingEnd: Ke.paddingInlineEnd
});
var N_ = {
  textDecorationColor: k.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: k.shadows("textShadow")
}, j_ = {
  clipPath: !0,
  transform: k.propT("transform", Me.transform),
  transformOrigin: !0,
  translateX: k.spaceT("--chakra-translate-x"),
  translateY: k.spaceT("--chakra-translate-y"),
  skewX: k.degreeT("--chakra-skew-x"),
  skewY: k.degreeT("--chakra-skew-y"),
  scaleX: k.prop("--chakra-scale-x"),
  scaleY: k.prop("--chakra-scale-y"),
  scale: k.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: k.degreeT("--chakra-rotate")
}, B_ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: k.prop("transitionDuration", "transition.duration"),
  transitionProperty: k.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: k.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, z_ = {
  fontFamily: k.prop("fontFamily", "fonts"),
  fontSize: k.prop("fontSize", "fontSizes", Me.px),
  fontWeight: k.prop("fontWeight", "fontWeights"),
  lineHeight: k.prop("lineHeight", "lineHeights"),
  letterSpacing: k.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, V_ = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: k.spaceT("scrollMargin"),
  scrollMarginTop: k.spaceT("scrollMarginTop"),
  scrollMarginBottom: k.spaceT("scrollMarginBottom"),
  scrollMarginLeft: k.spaceT("scrollMarginLeft"),
  scrollMarginRight: k.spaceT("scrollMarginRight"),
  scrollMarginX: k.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: k.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: k.spaceT("scrollPadding"),
  scrollPaddingTop: k.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: k.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: k.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: k.spaceT("scrollPaddingRight"),
  scrollPaddingX: k.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: k.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Qm(e) {
  return br(e) && e.reference ? e.reference : String(e);
}
var Ds = (e, ...t) => t.map(Qm).join(` ${e} `).replace(/calc/g, ""), kf = (...e) => `calc(${Ds("+", ...e)})`, Ef = (...e) => `calc(${Ds("-", ...e)})`, Tc = (...e) => `calc(${Ds("*", ...e)})`, Pf = (...e) => `calc(${Ds("/", ...e)})`, Tf = (e) => {
  const t = Qm(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Tc(t, -1);
}, Pn = Object.assign(
  (e) => ({
    add: (...t) => Pn(kf(e, ...t)),
    subtract: (...t) => Pn(Ef(e, ...t)),
    multiply: (...t) => Pn(Tc(e, ...t)),
    divide: (...t) => Pn(Pf(e, ...t)),
    negate: () => Pn(Tf(e)),
    toString: () => e.toString()
  }),
  {
    add: kf,
    subtract: Ef,
    multiply: Tc,
    divide: Pf,
    negate: Tf
  }
);
function L_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function W_(e) {
  const t = L_(e.toString());
  return H_(U_(t));
}
function U_(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function H_(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Y_(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function G_(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function q_(e, t = "") {
  return W_(`--${Y_(e, t)}`);
}
function me(e, t, r) {
  const n = q_(e, r);
  return {
    variable: n,
    reference: G_(n, t)
  };
}
function X_(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = me(`${e}-${o}`, a);
      continue;
    }
    r[n] = me(`${e}-${n}`);
  }
  return r;
}
function K_(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Z_(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Ac(e) {
  if (e == null)
    return e;
  const { unitless: t } = Z_(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var ev = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Ou = (e) => Object.fromEntries(Object.entries(e).sort(ev));
function Af(e) {
  const t = Ou(e);
  return Object.assign(Object.values(t), t);
}
function J_(e) {
  const t = Object.keys(Ou(e));
  return new Set(t);
}
function Of(e) {
  var t;
  if (!e)
    return e;
  e = (t = Ac(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Ho(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Ac(e)})`), t && r.push("and", `(max-width: ${Ac(t)})`), r.join(" ");
}
function Q_(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Af(e), n = Object.entries(e).sort(ev).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? Of(d) : void 0, {
      _minW: Of(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Ho(null, d),
      minWQuery: Ho(s),
      minMaxQuery: Ho(s, d)
    };
  }), o = J_(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Ou(e),
    asArray: Af(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => Ho(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!br(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; K_(s) === null; )
        s.pop();
      return s;
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((s, l, c) => {
        const u = a[c];
        return u != null && l != null && (s[u] = l), s;
      }, {});
    }
  };
}
var St = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, nn = (e) => tv((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Vr = (e) => tv((t) => e(t, "~ &"), "[data-peer]", ".peer"), tv = (e, ...t) => t.map(e).join(", "), Ms = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: nn(St.hover),
  _peerHover: Vr(St.hover),
  _groupFocus: nn(St.focus),
  _peerFocus: Vr(St.focus),
  _groupFocusVisible: nn(St.focusVisible),
  _peerFocusVisible: Vr(St.focusVisible),
  _groupActive: nn(St.active),
  _peerActive: Vr(St.active),
  _groupDisabled: nn(St.disabled),
  _peerDisabled: Vr(St.disabled),
  _groupInvalid: nn(St.invalid),
  _peerInvalid: Vr(St.invalid),
  _groupChecked: nn(St.checked),
  _peerChecked: Vr(St.checked),
  _groupFocusWithin: nn(St.focusWithin),
  _peerFocusWithin: Vr(St.focusWithin),
  _peerPlaceholderShown: Vr(St.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  _horizontal: "&[data-orientation=horizontal]",
  _vertical: "&[data-orientation=vertical]"
}, rv = Object.keys(
  Ms
);
function $f(e, t) {
  return me(String(e).replace(/\./g, "-"), void 0, t);
}
function ek(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = $f(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, g = Pn.negate(s), b = Pn.negate(c);
        n[h] = {
          value: g,
          var: l,
          varRef: b
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (f) => {
      const m = [String(o).split(".")[0], f].join(".");
      if (!e[m])
        return f;
      const { reference: g } = $f(m, t == null ? void 0 : t.cssVarPrefix);
      return g;
    }, d = br(s) ? s : { default: s };
    r = nr(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, g;
          if (!m)
            return f;
          const b = u(`${m}`);
          if (p === "default")
            return f[l] = b, f;
          const y = (g = (h = Ms) == null ? void 0 : h[p]) != null ? g : p;
          return f[y] = { [l]: b }, f;
        },
        {}
      )
    ), n[o] = {
      value: c,
      var: l,
      varRef: c
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function tk(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function rk(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function nk(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Rf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (nk(i) || Array.isArray(i)) {
      const c = {};
      for (const [u, d] of Object.entries(i)) {
        const f = (l = o == null ? void 0 : o(u)) != null ? l : u, p = [...s, f];
        if (n != null && n(i, p))
          return t(i, s);
        c[f] = a(d, p);
      }
      return c;
    }
    return t(i, s);
  }
  return a(e);
}
var ok = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function ak(e) {
  return rk(e, ok);
}
function ik(e) {
  return e.semanticTokens;
}
function sk(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var lk = (e) => rv.includes(e) || e === "default";
function ck({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Rf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Rf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(lk)
    }
  ), r;
}
function zz(e) {
  var t;
  const r = sk(e), n = ak(r), o = ik(r), a = ck({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = ek(a, { cssVarPrefix: i });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: Q_(r.breakpoints)
  }), r;
}
var $u = nr(
  {},
  Oi,
  Fe,
  E_,
  es,
  er,
  P_,
  F_,
  T_,
  Jm,
  I_,
  ea,
  Pc,
  Ke,
  V_,
  z_,
  N_,
  j_,
  A_,
  B_
), uk = Object.assign({}, Ke, er, es, Jm, ea), Vz = Object.keys(
  uk
), dk = [...Object.keys($u), ...rv], fk = { ...$u, ...Ms }, pk = (e) => e in fk, hk = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = un(e[i], t);
    if (s == null)
      continue;
    if (s = br(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      a[i] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        a[i] = s[c];
        continue;
      }
      a[u] = a[u] || {}, s[c] != null && (a[u][i] = s[c]);
    }
  }
  return a;
};
function mk(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function vk(e) {
  return /^var\(--.+\)$/.test(e);
}
var gk = (e, t) => e.startsWith("--") && typeof t == "string" && !vk(t), bk = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = mk(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function yk(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = un(a, n), d = hk(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = un(m, n);
      p in r && (p = r[p]), gk(p, h) && (h = bk(n, h));
      let g = t[p];
      if (g === !0 && (g = { property: p }), br(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = nr(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let b = (c = (l = g == null ? void 0 : g.transform) == null ? void 0 : l.call(g, h, n, u)) != null ? c : h;
      b = g != null && g.processResult ? o(b, !0) : b;
      const y = un(g == null ? void 0 : g.property, n);
      if (!i && (g != null && g.static)) {
        const S = un(g.static, n);
        f = nr({}, f, S);
      }
      if (y && Array.isArray(y)) {
        for (const S of y)
          f[S] = b;
        continue;
      }
      if (y) {
        y === "&" && br(b) ? f = nr({}, f, b) : f[y] = b;
        continue;
      }
      if (br(b)) {
        f = nr({}, f, b);
        continue;
      }
      f[p] = b;
    }
    return f;
  };
  return o;
}
var xk = (e) => (t) => yk({
  theme: t,
  pseudos: Ms,
  configs: $u
})(e);
function Lz(e) {
  return e;
}
function Wz(e) {
  return e;
}
function qe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Sk(e, t) {
  if (Array.isArray(e))
    return e;
  if (br(e))
    return t(e);
  if (e != null)
    return [e];
}
function wk(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Ck(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Sk(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], g = t.details[wk(u, m)], b = Ho(h.minW, g == null ? void 0 : g._minW), y = un((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (y) {
        if (p) {
          (l = n.parts) == null || l.forEach((S) => {
            nr(c, {
              [S]: f ? y[S] : { [b]: y[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? nr(c, y) : c[b] = y;
          continue;
        }
        c[b] = y;
      }
    }
    return c;
  };
}
function _k(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = Ck(a);
    return nr(
      {},
      un((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function nv(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Ba(e) {
  return tk(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var kk = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function Ek(e) {
  return br(e) ? kk.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var Pk = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Tk = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Ak = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Ok = {
  property: Pk,
  easing: Tk,
  duration: Ak
}, $k = Ok, Rk = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, Dk = Rk, Mk = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Ik = Mk, Fk = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, Nk = Fk, jk = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, Bk = jk, zk = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Vk = zk, Lk = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, Wk = Lk, Uk = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, Hk = Uk, Yk = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, ov = Yk, av = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, Gk = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, qk = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, Xk = {
  ...av,
  ...Gk,
  container: qk
}, iv = Xk, sv = {
  breakpoints: Nk,
  zIndices: Dk,
  radii: Vk,
  blur: Hk,
  colors: Bk,
  ...ov,
  sizes: iv,
  shadows: Wk,
  space: av,
  borders: Ik,
  transition: $k
}, { defineMultiStyleConfig: Kk, definePartsStyle: Yo } = qe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Lr = me("stepper-indicator-size"), Qn = me("stepper-icon-size"), eo = me("stepper-title-font-size"), Go = me("stepper-description-font-size"), jo = me("stepper-accent-color"), Zk = Yo(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [jo.variable]: `colors.${e}.500`,
    _dark: {
      [jo.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: eo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Go.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: eo.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Qn.reference,
    height: Qn.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Lr.reference,
    height: Lr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: jo.reference
    },
    "&[data-status=complete]": {
      bg: jo.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: jo.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Lr.reference} - 8px)`,
      top: `calc(${Lr.reference} + 4px)`,
      insetStart: `calc(${Lr.reference} / 2 - 1px)`
    }
  }
})), Jk = Kk({
  baseStyle: Zk,
  sizes: {
    xs: Yo({
      stepper: {
        [Lr.variable]: "sizes.4",
        [Qn.variable]: "sizes.3",
        [eo.variable]: "fontSizes.xs",
        [Go.variable]: "fontSizes.xs"
      }
    }),
    sm: Yo({
      stepper: {
        [Lr.variable]: "sizes.6",
        [Qn.variable]: "sizes.4",
        [eo.variable]: "fontSizes.sm",
        [Go.variable]: "fontSizes.xs"
      }
    }),
    md: Yo({
      stepper: {
        [Lr.variable]: "sizes.8",
        [Qn.variable]: "sizes.5",
        [eo.variable]: "fontSizes.md",
        [Go.variable]: "fontSizes.sm"
      }
    }),
    lg: Yo({
      stepper: {
        [Lr.variable]: "sizes.10",
        [Qn.variable]: "sizes.6",
        [eo.variable]: "fontSizes.lg",
        [Go.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function We(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return We(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return We(e, t);
  }
  function i() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(u) {
    const p = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: a,
    selectors: i,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var Qk = We("accordion").parts("root", "container", "button", "panel").extend("icon"), eE = We("alert").parts("title", "description", "container").extend("icon", "spinner"), tE = We("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), rE = We("breadcrumb").parts("link", "item", "container").extend("separator");
We("button").parts();
var nE = We("checkbox").parts("control", "icon", "container").extend("label");
We("progress").parts("track", "filledTrack").extend("label");
var oE = We("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), aE = We("editable").parts(
  "preview",
  "input",
  "textarea"
), iE = We("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), sE = We("formError").parts("text", "icon"), lE = We("input").parts("addon", "field", "element"), cE = We("list").parts("container", "item", "icon"), uE = We("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), dE = We("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), fE = We("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
We("pininput").parts("field");
var pE = We("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), hE = We("progress").parts(
  "label",
  "filledTrack",
  "track"
), mE = We("radio").parts(
  "container",
  "control",
  "label"
), vE = We("select").parts("field", "icon"), gE = We("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), bE = We("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), yE = We("switch").parts(
  "container",
  "track",
  "thumb"
), xE = We("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), SE = We("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), wE = We("tag").parts(
  "container",
  "label",
  "closeButton"
), CE = We("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function An(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class _E extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var qo = _E;
function Ru(e) {
  if (typeof e != "string")
    throw new qo(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = RE.test(e) ? PE(e) : e;
  const r = TE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(Ca(s, 2), 16)), parseInt(Ca(i[3] || "f", 2), 16) / 255];
  }
  const n = AE.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = OE.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = $E.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (An(0, 100, s) !== s)
      throw new qo(e);
    if (An(0, 100, l) !== l)
      throw new qo(e);
    return [...DE(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new qo(e);
}
function kE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Df = (e) => parseInt(e.replace(/_/g, ""), 36), EE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Df(t.substring(0, 3)), n = Df(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function PE(e) {
  const t = e.toLowerCase().trim(), r = EE[kE(t)];
  if (!r)
    throw new qo(e);
  return `#${r}`;
}
const Ca = (e, t) => Array.from(Array(t)).map(() => e).join(""), TE = new RegExp(`^#${Ca("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), AE = new RegExp(`^#${Ca("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), OE = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ca(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), $E = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, RE = /^[a-z]+$/i, Mf = (e) => Math.round(e * 255), DE = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Mf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Mf);
};
function ME(e, t, r, n) {
  return `rgba(${An(0, 255, e).toFixed()}, ${An(0, 255, t).toFixed()}, ${An(0, 255, r).toFixed()}, ${parseFloat(An(0, 1, n).toFixed(3))})`;
}
function IE(e, t) {
  const [r, n, o, a] = Ru(e);
  return ME(r, n, o, a - t);
}
function FE(e) {
  const [t, r, n, o] = Ru(e);
  let a = (i) => {
    const s = An(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function NE(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var jE = (e) => Object.keys(e).length === 0, ts = (e, t, r) => {
  const n = NE(e, `colors.${t}`, t);
  try {
    return FE(n), n;
  } catch {
    return r ?? "#000000";
  }
}, vr = (e, t, r) => {
  var n;
  return (n = nv(e, "colors", t)) != null ? n : r;
}, BE = (e) => {
  const [t, r, n] = Ru(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, zE = (e) => (t) => {
  const r = ts(t, e);
  return BE(r) < 128 ? "dark" : "light";
}, VE = (e) => (t) => zE(e)(t) === "dark", So = (e, t) => (r) => {
  const n = ts(r, e);
  return IE(n, 1 - t);
};
function If(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var LE = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function WE(e) {
  const t = LE();
  return !e || jE(e) ? t : e.string && e.colors ? HE(e.string, e.colors) : e.string && !e.colors ? UE(e.string) : e.colors && !e.string ? YE(e.colors) : t;
}
function UE(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function HE(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function YE(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ue(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Du(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function lv(e) {
  return br(e) && e.reference ? e.reference : String(e);
}
var Is = (e, ...t) => t.map(lv).join(` ${e} `).replace(/calc/g, ""), Ff = (...e) => `calc(${Is("+", ...e)})`, Nf = (...e) => `calc(${Is("-", ...e)})`, Oc = (...e) => `calc(${Is("*", ...e)})`, jf = (...e) => `calc(${Is("/", ...e)})`, Bf = (e) => {
  const t = lv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Oc(t, -1);
}, Wr = Object.assign(
  (e) => ({
    add: (...t) => Wr(Ff(e, ...t)),
    subtract: (...t) => Wr(Nf(e, ...t)),
    multiply: (...t) => Wr(Oc(e, ...t)),
    divide: (...t) => Wr(jf(e, ...t)),
    negate: () => Wr(Bf(e)),
    toString: () => e.toString()
  }),
  {
    add: Ff,
    subtract: Nf,
    multiply: Oc,
    divide: jf,
    negate: Bf
  }
);
function GE(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function qE(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function cv(e) {
  const t = qE(e.toString());
  return t.includes("\\.") ? e : GE(e) ? t.replace(".", "\\.") : e;
}
function XE(e, t = "") {
  return [t, cv(e)].filter(Boolean).join("-");
}
function KE(e, t) {
  return `var(${cv(e)}${t ? `, ${t}` : ""})`;
}
function ZE(e, t = "") {
  return `--${XE(e, t)}`;
}
function vt(e, t) {
  const r = ZE(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: KE(r, JE(t == null ? void 0 : t.fallback))
  };
}
function JE(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: QE, definePartsStyle: $i } = qe(yE.keys), ta = vt("switch-track-width"), Rn = vt("switch-track-height"), xl = vt("switch-track-diff"), eP = Wr.subtract(ta, Rn), $c = vt("switch-thumb-x"), Bo = vt("switch-bg"), tP = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ta.reference],
    height: [Rn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Bo.variable]: "colors.gray.300",
    _dark: {
      [Bo.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Bo.variable]: `colors.${t}.500`,
      _dark: {
        [Bo.variable]: `colors.${t}.200`
      }
    },
    bg: Bo.reference
  };
}, rP = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Rn.reference],
  height: [Rn.reference],
  _checked: {
    transform: `translateX(${$c.reference})`
  }
}, nP = $i((e) => ({
  container: {
    [xl.variable]: eP,
    [$c.variable]: xl.reference,
    _rtl: {
      [$c.variable]: Wr(xl).negate().toString()
    }
  },
  track: tP(e),
  thumb: rP
})), oP = {
  sm: $i({
    container: {
      [ta.variable]: "1.375rem",
      [Rn.variable]: "sizes.3"
    }
  }),
  md: $i({
    container: {
      [ta.variable]: "1.875rem",
      [Rn.variable]: "sizes.4"
    }
  }),
  lg: $i({
    container: {
      [ta.variable]: "2.875rem",
      [Rn.variable]: "sizes.6"
    }
  })
}, aP = QE({
  baseStyle: nP,
  sizes: oP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: iP, definePartsStyle: so } = qe(xE.keys), sP = so({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), rs = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, lP = so((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...rs
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...rs
    },
    caption: {
      color: ue("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), cP = so((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...rs
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...rs
    },
    caption: {
      color: ue("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: ue(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: ue(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), uP = {
  simple: lP,
  striped: cP,
  unstyled: {}
}, dP = {
  sm: so({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: so({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: so({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, fP = iP({
  baseStyle: sP,
  variants: uP,
  sizes: dP,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Nt = me("tabs-color"), mr = me("tabs-bg"), ci = me("tabs-border-color"), { defineMultiStyleConfig: pP, definePartsStyle: Or } = qe(SE.keys), hP = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, mP = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, vP = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, gP = {
  p: 4
}, bP = Or((e) => ({
  root: hP(e),
  tab: mP(e),
  tablist: vP(e),
  tabpanel: gP
})), yP = {
  sm: Or({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Or({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Or({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, xP = Or((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", a = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [a]: "-2px",
      _selected: {
        [Nt.variable]: `colors.${t}.600`,
        _dark: {
          [Nt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [mr.variable]: "colors.gray.200",
        _dark: {
          [mr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Nt.reference,
      bg: mr.reference
    }
  };
}), SP = Or((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ci.variable]: "transparent",
      _selected: {
        [Nt.variable]: `colors.${t}.600`,
        [ci.variable]: "colors.white",
        _dark: {
          [Nt.variable]: `colors.${t}.300`,
          [ci.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ci.reference
      },
      color: Nt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), wP = Or((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [mr.variable]: "colors.gray.50",
      _dark: {
        [mr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [mr.variable]: "colors.white",
        [Nt.variable]: `colors.${t}.600`,
        _dark: {
          [mr.variable]: "colors.gray.800",
          [Nt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Nt.reference,
      bg: mr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), CP = Or((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ts(r, `${t}.700`),
        bg: ts(r, `${t}.100`)
      }
    }
  };
}), _P = Or((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Nt.variable]: "colors.gray.600",
      _dark: {
        [Nt.variable]: "inherit"
      },
      _selected: {
        [Nt.variable]: "colors.white",
        [mr.variable]: `colors.${t}.600`,
        _dark: {
          [Nt.variable]: "colors.gray.800",
          [mr.variable]: `colors.${t}.300`
        }
      },
      color: Nt.reference,
      bg: mr.reference
    }
  };
}), kP = Or({}), EP = {
  line: xP,
  enclosed: SP,
  "enclosed-colored": wP,
  "soft-rounded": CP,
  "solid-rounded": _P,
  unstyled: kP
}, PP = pP({
  baseStyle: bP,
  sizes: yP,
  variants: EP,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), ut = X_("badge", ["bg", "color", "shadow"]), TP = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: ut.bg.reference,
  color: ut.color.reference,
  boxShadow: ut.shadow.reference
}, AP = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.500`, 0.6)(r);
  return {
    [ut.bg.variable]: `colors.${t}.500`,
    [ut.color.variable]: "colors.white",
    _dark: {
      [ut.bg.variable]: n,
      [ut.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, OP = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.200`, 0.16)(r);
  return {
    [ut.bg.variable]: `colors.${t}.100`,
    [ut.color.variable]: `colors.${t}.800`,
    _dark: {
      [ut.bg.variable]: n,
      [ut.color.variable]: `colors.${t}.200`
    }
  };
}, $P = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.200`, 0.8)(r);
  return {
    [ut.color.variable]: `colors.${t}.500`,
    _dark: {
      [ut.color.variable]: n
    },
    [ut.shadow.variable]: `inset 0 0 0px 1px ${ut.color.reference}`
  };
}, RP = {
  solid: AP,
  subtle: OP,
  outline: $P
}, ra = {
  baseStyle: TP,
  variants: RP,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: DP, definePartsStyle: Dn } = qe(wE.keys), zf = me("tag-bg"), Vf = me("tag-color"), Sl = me("tag-shadow"), Ri = me("tag-min-height"), Di = me("tag-min-width"), Mi = me("tag-font-size"), Ii = me("tag-padding-inline"), MP = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Vf.variable]: ut.color.reference,
  [zf.variable]: ut.bg.reference,
  [Sl.variable]: ut.shadow.reference,
  color: Vf.reference,
  bg: zf.reference,
  boxShadow: Sl.reference,
  borderRadius: "md",
  minH: Ri.reference,
  minW: Di.reference,
  fontSize: Mi.reference,
  px: Ii.reference,
  _focusVisible: {
    [Sl.variable]: "shadows.outline"
  }
}, IP = {
  lineHeight: 1.2,
  overflow: "visible"
}, FP = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, NP = Dn({
  container: MP,
  label: IP,
  closeButton: FP
}), jP = {
  sm: Dn({
    container: {
      [Ri.variable]: "sizes.5",
      [Di.variable]: "sizes.5",
      [Mi.variable]: "fontSizes.xs",
      [Ii.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Dn({
    container: {
      [Ri.variable]: "sizes.6",
      [Di.variable]: "sizes.6",
      [Mi.variable]: "fontSizes.sm",
      [Ii.variable]: "space.2"
    }
  }),
  lg: Dn({
    container: {
      [Ri.variable]: "sizes.8",
      [Di.variable]: "sizes.8",
      [Mi.variable]: "fontSizes.md",
      [Ii.variable]: "space.3"
    }
  })
}, BP = {
  subtle: Dn((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Dn((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Dn((e) => {
    var t;
    return {
      container: (t = ra.variants) == null ? void 0 : t.outline(e)
    };
  })
}, zP = DP({
  variants: BP,
  baseStyle: NP,
  sizes: jP,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Ur, defineMultiStyleConfig: VP } = qe(lE.keys), LP = Ur({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), on = {
  lg: {
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  }
}, WP = {
  lg: Ur({
    field: on.lg,
    addon: on.lg
  }),
  md: Ur({
    field: on.md,
    addon: on.md
  }),
  sm: Ur({
    field: on.sm,
    addon: on.sm
  }),
  xs: Ur({
    field: on.xs,
    addon: on.xs
  })
};
function Mu(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || ue("blue.500", "blue.300")(e),
    errorBorderColor: r || ue("red.500", "red.300")(e)
  };
}
var UP = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mu(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: ue("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: vr(t, n),
        boxShadow: `0 0 0 1px ${vr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: vr(t, r),
        boxShadow: `0 0 0 1px ${vr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: ue("inherit", "whiteAlpha.50")(e),
      bg: ue("gray.100", "whiteAlpha.300")(e)
    }
  };
}), HP = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mu(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ue("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: ue("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: vr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: vr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ue("gray.100", "whiteAlpha.50")(e)
    }
  };
}), YP = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Mu(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: vr(t, n),
        boxShadow: `0px 1px 0px 0px ${vr(t, n)}`
      },
      _focusVisible: {
        borderColor: vr(t, r),
        boxShadow: `0px 1px 0px 0px ${vr(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), GP = Ur({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), qP = {
  outline: UP,
  filled: HP,
  flushed: YP,
  unstyled: GP
}, Be = VP({
  baseStyle: LP,
  sizes: WP,
  variants: qP,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Lf, XP = {
  ...(Lf = Be.baseStyle) == null ? void 0 : Lf.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Wf, Uf, KP = {
  outline: (e) => {
    var t, r;
    return (r = (t = Be.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = Be.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = Be.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Uf = (Wf = Be.variants) == null ? void 0 : Wf.unstyled.field) != null ? Uf : {}
}, Hf, Yf, Gf, qf, Xf, Kf, Zf, Jf, ZP = {
  xs: (Yf = (Hf = Be.sizes) == null ? void 0 : Hf.xs.field) != null ? Yf : {},
  sm: (qf = (Gf = Be.sizes) == null ? void 0 : Gf.sm.field) != null ? qf : {},
  md: (Kf = (Xf = Be.sizes) == null ? void 0 : Xf.md.field) != null ? Kf : {},
  lg: (Jf = (Zf = Be.sizes) == null ? void 0 : Zf.lg.field) != null ? Jf : {}
}, JP = {
  baseStyle: XP,
  sizes: ZP,
  variants: KP,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, ui = vt("tooltip-bg"), wl = vt("tooltip-fg"), QP = vt("popper-arrow-bg"), eT = {
  bg: ui.reference,
  color: wl.reference,
  [ui.variable]: "colors.gray.700",
  [wl.variable]: "colors.whiteAlpha.900",
  _dark: {
    [ui.variable]: "colors.gray.300",
    [wl.variable]: "colors.gray.900"
  },
  [QP.variable]: ui.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, tT = {
  baseStyle: eT
}, { defineMultiStyleConfig: rT, definePartsStyle: Xo } = qe(hE.keys), nT = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = ue(
    If(),
    If("1rem", "rgba(0,0,0,0.1)")
  )(e), i = ue(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${vr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, oT = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, aT = (e) => ({
  bg: ue("gray.100", "whiteAlpha.300")(e)
}), iT = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...nT(e)
}), sT = Xo((e) => ({
  label: oT,
  filledTrack: iT(e),
  track: aT(e)
})), lT = {
  xs: Xo({
    track: { h: "1" }
  }),
  sm: Xo({
    track: { h: "2" }
  }),
  md: Xo({
    track: { h: "3" }
  }),
  lg: Xo({
    track: { h: "4" }
  })
}, cT = rT({
  sizes: lT,
  baseStyle: sT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), uT = (e) => typeof e == "function";
function $t(e, ...t) {
  return uT(e) ? e(...t) : e;
}
var { definePartsStyle: Fi, defineMultiStyleConfig: dT } = qe(nE.keys), na = me("checkbox-size"), fT = (e) => {
  const { colorScheme: t } = e;
  return {
    w: na.reference,
    h: na.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: ue(`${t}.500`, `${t}.200`)(e),
      borderColor: ue(`${t}.500`, `${t}.200`)(e),
      color: ue("white", "gray.900")(e),
      _hover: {
        bg: ue(`${t}.600`, `${t}.300`)(e),
        borderColor: ue(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: ue("gray.200", "transparent")(e),
        bg: ue("gray.200", "whiteAlpha.300")(e),
        color: ue("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: ue(`${t}.500`, `${t}.200`)(e),
      borderColor: ue(`${t}.500`, `${t}.200`)(e),
      color: ue("white", "gray.900")(e)
    },
    _disabled: {
      bg: ue("gray.100", "whiteAlpha.100")(e),
      borderColor: ue("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: ue("red.500", "red.300")(e)
    }
  };
}, pT = {
  _disabled: { cursor: "not-allowed" }
}, hT = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, mT = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, vT = Fi((e) => ({
  icon: mT,
  container: pT,
  control: $t(fT, e),
  label: hT
})), gT = {
  sm: Fi({
    control: { [na.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Fi({
    control: { [na.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Fi({
    control: { [na.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, ns = dT({
  baseStyle: vT,
  sizes: gT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: bT, definePartsStyle: Ni } = qe(mE.keys), yT = (e) => {
  var t;
  const r = (t = $t(ns.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, xT = Ni((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = ns).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = ns).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: yT(e)
  };
}), ST = {
  md: Ni({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ni({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ni({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, wT = bT({
  baseStyle: xT,
  sizes: ST,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: CT, definePartsStyle: _T } = qe(vE.keys), di = me("select-bg"), Qf, kT = {
  ...(Qf = Be.baseStyle) == null ? void 0 : Qf.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: di.reference,
  [di.variable]: "colors.white",
  _dark: {
    [di.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: di.reference
  }
}, ET = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, PT = _T({
  field: kT,
  icon: ET
}), fi = {
  paddingInlineEnd: "8"
}, ep, tp, rp, np, op, ap, ip, sp, TT = {
  lg: {
    ...(ep = Be.sizes) == null ? void 0 : ep.lg,
    field: {
      ...(tp = Be.sizes) == null ? void 0 : tp.lg.field,
      ...fi
    }
  },
  md: {
    ...(rp = Be.sizes) == null ? void 0 : rp.md,
    field: {
      ...(np = Be.sizes) == null ? void 0 : np.md.field,
      ...fi
    }
  },
  sm: {
    ...(op = Be.sizes) == null ? void 0 : op.sm,
    field: {
      ...(ap = Be.sizes) == null ? void 0 : ap.sm.field,
      ...fi
    }
  },
  xs: {
    ...(ip = Be.sizes) == null ? void 0 : ip.xs,
    field: {
      ...(sp = Be.sizes) == null ? void 0 : sp.xs.field,
      ...fi
    },
    icon: {
      insetEnd: "1"
    }
  }
}, AT = CT({
  baseStyle: PT,
  sizes: TT,
  variants: Be.variants,
  defaultProps: Be.defaultProps
}), Cl = me("skeleton-start-color"), _l = me("skeleton-end-color"), OT = {
  [Cl.variable]: "colors.gray.100",
  [_l.variable]: "colors.gray.400",
  _dark: {
    [Cl.variable]: "colors.gray.800",
    [_l.variable]: "colors.gray.600"
  },
  background: Cl.reference,
  borderColor: _l.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, $T = {
  baseStyle: OT
}, kl = me("skip-link-bg"), RT = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [kl.variable]: "colors.white",
    _dark: {
      [kl.variable]: "colors.gray.700"
    },
    bg: kl.reference
  }
}, DT = {
  baseStyle: RT
}, { defineMultiStyleConfig: MT, definePartsStyle: Fs } = qe(gE.keys), _a = me("slider-thumb-size"), ka = me("slider-track-size"), cn = me("slider-bg"), IT = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Du({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, FT = (e) => ({
  ...Du({
    orientation: e.orientation,
    horizontal: { h: ka.reference },
    vertical: { w: ka.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [cn.variable]: "colors.gray.200",
  _dark: {
    [cn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [cn.variable]: "colors.gray.300",
    _dark: {
      [cn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: cn.reference
}), NT = (e) => {
  const { orientation: t } = e;
  return {
    ...Du({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: _a.reference,
    h: _a.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, jT = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [cn.variable]: `colors.${t}.500`,
    _dark: {
      [cn.variable]: `colors.${t}.200`
    },
    bg: cn.reference
  };
}, BT = Fs((e) => ({
  container: IT(e),
  track: FT(e),
  thumb: NT(e),
  filledTrack: jT(e)
})), zT = Fs({
  container: {
    [_a.variable]: "sizes.4",
    [ka.variable]: "sizes.1"
  }
}), VT = Fs({
  container: {
    [_a.variable]: "sizes.3.5",
    [ka.variable]: "sizes.1"
  }
}), LT = Fs({
  container: {
    [_a.variable]: "sizes.2.5",
    [ka.variable]: "sizes.0.5"
  }
}), WT = {
  lg: zT,
  md: VT,
  sm: LT
}, UT = MT({
  baseStyle: BT,
  sizes: WT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Tn = vt("spinner-size"), HT = {
  width: [Tn.reference],
  height: [Tn.reference]
}, YT = {
  xs: {
    [Tn.variable]: "sizes.3"
  },
  sm: {
    [Tn.variable]: "sizes.4"
  },
  md: {
    [Tn.variable]: "sizes.6"
  },
  lg: {
    [Tn.variable]: "sizes.8"
  },
  xl: {
    [Tn.variable]: "sizes.12"
  }
}, GT = {
  baseStyle: HT,
  sizes: YT,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: qT, definePartsStyle: uv } = qe(bE.keys), XT = {
  fontWeight: "medium"
}, KT = {
  opacity: 0.8,
  marginBottom: "2"
}, ZT = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, JT = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, QT = uv({
  container: {},
  label: XT,
  helpText: KT,
  number: ZT,
  icon: JT
}), eA = {
  md: uv({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, tA = qT({
  baseStyle: QT,
  sizes: eA,
  defaultProps: {
    size: "md"
  }
}), El = me("kbd-bg"), rA = {
  [El.variable]: "colors.gray.100",
  _dark: {
    [El.variable]: "colors.whiteAlpha.100"
  },
  bg: El.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, nA = {
  baseStyle: rA
}, oA = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, aA = {
  baseStyle: oA
}, { defineMultiStyleConfig: iA, definePartsStyle: sA } = qe(cE.keys), lA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, cA = sA({
  icon: lA
}), uA = iA({
  baseStyle: cA
}), { defineMultiStyleConfig: dA, definePartsStyle: fA } = qe(uE.keys), Er = me("menu-bg"), Pl = me("menu-shadow"), pA = {
  [Er.variable]: "#fff",
  [Pl.variable]: "shadows.sm",
  _dark: {
    [Er.variable]: "colors.gray.700",
    [Pl.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Er.reference,
  boxShadow: Pl.reference
}, hA = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Er.variable]: "colors.gray.100",
    _dark: {
      [Er.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Er.variable]: "colors.gray.200",
    _dark: {
      [Er.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Er.variable]: "colors.gray.100",
    _dark: {
      [Er.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Er.reference
}, mA = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, vA = {
  opacity: 0.6
}, gA = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, bA = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, yA = fA({
  button: bA,
  list: pA,
  item: hA,
  groupTitle: mA,
  command: vA,
  divider: gA
}), xA = dA({
  baseStyle: yA
}), { defineMultiStyleConfig: SA, definePartsStyle: Rc } = qe(dE.keys), Tl = me("modal-bg"), Al = me("modal-shadow"), wA = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, CA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, _A = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Tl.variable]: "colors.white",
    [Al.variable]: "shadows.lg",
    _dark: {
      [Tl.variable]: "colors.gray.700",
      [Al.variable]: "shadows.dark-lg"
    },
    bg: Tl.reference,
    boxShadow: Al.reference
  };
}, kA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, EA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, PA = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, TA = {
  px: "6",
  py: "4"
}, AA = Rc((e) => ({
  overlay: wA,
  dialogContainer: $t(CA, e),
  dialog: $t(_A, e),
  header: kA,
  closeButton: EA,
  body: $t(PA, e),
  footer: TA
}));
function ur(e) {
  return Rc(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var OA = {
  xs: ur("xs"),
  sm: ur("sm"),
  md: ur("md"),
  lg: ur("lg"),
  xl: ur("xl"),
  "2xl": ur("2xl"),
  "3xl": ur("3xl"),
  "4xl": ur("4xl"),
  "5xl": ur("5xl"),
  "6xl": ur("6xl"),
  full: ur("full")
}, $A = SA({
  baseStyle: AA,
  sizes: OA,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: RA, definePartsStyle: dv } = qe(fE.keys), Iu = vt("number-input-stepper-width"), fv = vt("number-input-input-padding"), DA = Wr(Iu).add("0.5rem").toString(), Ol = vt("number-input-bg"), $l = vt("number-input-color"), Rl = vt("number-input-border-color"), MA = {
  [Iu.variable]: "sizes.6",
  [fv.variable]: DA
}, IA = (e) => {
  var t, r;
  return (r = (t = $t(Be.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, FA = {
  width: Iu.reference
}, NA = {
  borderStart: "1px solid",
  borderStartColor: Rl.reference,
  color: $l.reference,
  bg: Ol.reference,
  [$l.variable]: "colors.chakra-body-text",
  [Rl.variable]: "colors.chakra-border-color",
  _dark: {
    [$l.variable]: "colors.whiteAlpha.800",
    [Rl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ol.variable]: "colors.gray.200",
    _dark: {
      [Ol.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, jA = dv((e) => {
  var t;
  return {
    root: MA,
    field: (t = $t(IA, e)) != null ? t : {},
    stepperGroup: FA,
    stepper: NA
  };
});
function pi(e) {
  var t, r, n;
  const o = (t = Be.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = ov.fontSizes[i];
  return dv({
    field: {
      ...o.field,
      paddingInlineEnd: fv.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Wr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: a[e]
      },
      _last: {
        borderBottomEndRadius: a[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var BA = {
  xs: pi("xs"),
  sm: pi("sm"),
  md: pi("md"),
  lg: pi("lg")
}, zA = RA({
  baseStyle: jA,
  sizes: BA,
  variants: Be.variants,
  defaultProps: Be.defaultProps
}), lp, VA = {
  ...(lp = Be.baseStyle) == null ? void 0 : lp.field,
  textAlign: "center"
}, LA = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, cp, up, WA = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (up = (cp = Be.variants) == null ? void 0 : cp.unstyled.field) != null ? up : {}
}, UA = {
  baseStyle: VA,
  sizes: LA,
  variants: WA,
  defaultProps: Be.defaultProps
}, { defineMultiStyleConfig: HA, definePartsStyle: YA } = qe(pE.keys), hi = vt("popper-bg"), GA = vt("popper-arrow-bg"), dp = vt("popper-arrow-shadow-color"), qA = { zIndex: 10 }, XA = {
  [hi.variable]: "colors.white",
  bg: hi.reference,
  [GA.variable]: hi.reference,
  [dp.variable]: "colors.gray.200",
  _dark: {
    [hi.variable]: "colors.gray.700",
    [dp.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, KA = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, ZA = {
  px: 3,
  py: 2
}, JA = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, QA = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, eO = YA({
  popper: qA,
  content: XA,
  header: KA,
  body: ZA,
  footer: JA,
  closeButton: QA
}), tO = HA({
  baseStyle: eO
}), { definePartsStyle: Dc, defineMultiStyleConfig: rO } = qe(oE.keys), Dl = me("drawer-bg"), Ml = me("drawer-box-shadow");
function Yn(e) {
  return Dc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var nO = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, oO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, aO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Dl.variable]: "colors.white",
    [Ml.variable]: "shadows.lg",
    _dark: {
      [Dl.variable]: "colors.gray.700",
      [Ml.variable]: "shadows.dark-lg"
    },
    bg: Dl.reference,
    boxShadow: Ml.reference
  };
}, iO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, sO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, lO = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, cO = {
  px: "6",
  py: "4"
}, uO = Dc((e) => ({
  overlay: nO,
  dialogContainer: oO,
  dialog: $t(aO, e),
  header: iO,
  closeButton: sO,
  body: lO,
  footer: cO
})), dO = {
  xs: Yn("xs"),
  sm: Yn("md"),
  md: Yn("lg"),
  lg: Yn("2xl"),
  xl: Yn("4xl"),
  full: Yn("full")
}, fO = rO({
  baseStyle: uO,
  sizes: dO,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: pO, defineMultiStyleConfig: hO } = qe(aE.keys), mO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, vO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, gO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, bO = pO({
  preview: mO,
  input: vO,
  textarea: gO
}), yO = hO({
  baseStyle: bO
}), { definePartsStyle: xO, defineMultiStyleConfig: SO } = qe(iE.keys), lo = me("form-control-color"), wO = {
  marginStart: "1",
  [lo.variable]: "colors.red.500",
  _dark: {
    [lo.variable]: "colors.red.300"
  },
  color: lo.reference
}, CO = {
  mt: "2",
  [lo.variable]: "colors.gray.600",
  _dark: {
    [lo.variable]: "colors.whiteAlpha.600"
  },
  color: lo.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, _O = xO({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: wO,
  helperText: CO
}), kO = SO({
  baseStyle: _O
}), { definePartsStyle: EO, defineMultiStyleConfig: PO } = qe(sE.keys), co = me("form-error-color"), TO = {
  [co.variable]: "colors.red.500",
  _dark: {
    [co.variable]: "colors.red.300"
  },
  color: co.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, AO = {
  marginEnd: "0.5em",
  [co.variable]: "colors.red.500",
  _dark: {
    [co.variable]: "colors.red.300"
  },
  color: co.reference
}, OO = EO({
  text: TO,
  icon: AO
}), $O = PO({
  baseStyle: OO
}), RO = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, DO = {
  baseStyle: RO
}, MO = {
  fontFamily: "heading",
  fontWeight: "bold"
}, IO = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, FO = {
  baseStyle: MO,
  sizes: IO,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: NO, definePartsStyle: jO } = qe(rE.keys), Il = me("breadcrumb-link-decor"), BO = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Il.reference,
  [Il.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Il.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, zO = jO({
  link: BO
}), VO = NO({
  baseStyle: zO
}), LO = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, pv = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: ue("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ue("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: ue("gray.200", "whiteAlpha.300")(e) }
    };
  const n = So(`${t}.200`, 0.12)(r), o = So(`${t}.200`, 0.24)(r);
  return {
    color: ue(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: ue(`${t}.50`, n)(e)
    },
    _active: {
      bg: ue(`${t}.100`, o)(e)
    }
  };
}, WO = (e) => {
  const { colorScheme: t } = e, r = ue("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...$t(pv, e)
  };
}, UO = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, HO = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = ue("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: ue("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ue("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: ue("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = UO[r]) != null ? t : {}, s = ue(n, `${r}.200`)(e);
  return {
    bg: s,
    color: ue(o, "gray.800")(e),
    _hover: {
      bg: ue(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: ue(i, `${r}.400`)(e) }
  };
}, YO = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: ue(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: ue(`${t}.700`, `${t}.500`)(e)
    }
  };
}, GO = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, qO = {
  ghost: pv,
  outline: WO,
  solid: HO,
  link: YO,
  unstyled: GO
}, XO = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, KO = {
  baseStyle: LO,
  variants: qO,
  sizes: XO,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Mn, defineMultiStyleConfig: ZO } = qe(CE.keys), os = me("card-bg"), Yr = me("card-padding"), hv = me("card-shadow"), ji = me("card-radius"), mv = me("card-border-width", "0"), vv = me("card-border-color"), JO = Mn({
  container: {
    [os.variable]: "colors.chakra-body-bg",
    backgroundColor: os.reference,
    boxShadow: hv.reference,
    borderRadius: ji.reference,
    color: "chakra-body-text",
    borderWidth: mv.reference,
    borderColor: vv.reference
  },
  body: {
    padding: Yr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Yr.reference
  },
  footer: {
    padding: Yr.reference
  }
}), QO = {
  sm: Mn({
    container: {
      [ji.variable]: "radii.base",
      [Yr.variable]: "space.3"
    }
  }),
  md: Mn({
    container: {
      [ji.variable]: "radii.md",
      [Yr.variable]: "space.5"
    }
  }),
  lg: Mn({
    container: {
      [ji.variable]: "radii.xl",
      [Yr.variable]: "space.7"
    }
  })
}, e$ = {
  elevated: Mn({
    container: {
      [hv.variable]: "shadows.base",
      _dark: {
        [os.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Mn({
    container: {
      [mv.variable]: "1px",
      [vv.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Mn({
    container: {
      [os.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Yr.variable]: 0
    },
    header: {
      [Yr.variable]: 0
    },
    footer: {
      [Yr.variable]: 0
    }
  }
}, t$ = ZO({
  baseStyle: JO,
  variants: e$,
  sizes: QO,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), oa = vt("close-button-size"), zo = vt("close-button-bg"), r$ = {
  w: [oa.reference],
  h: [oa.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [zo.variable]: "colors.blackAlpha.100",
    _dark: {
      [zo.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [zo.variable]: "colors.blackAlpha.200",
    _dark: {
      [zo.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: zo.reference
}, n$ = {
  lg: {
    [oa.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [oa.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [oa.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, o$ = {
  baseStyle: r$,
  sizes: n$,
  defaultProps: {
    size: "md"
  }
}, { variants: a$, defaultProps: i$ } = ra, s$ = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: ut.bg.reference,
  color: ut.color.reference,
  boxShadow: ut.shadow.reference
}, l$ = {
  baseStyle: s$,
  variants: a$,
  defaultProps: i$
}, c$ = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, u$ = {
  baseStyle: c$
}, d$ = {
  opacity: 0.6,
  borderColor: "inherit"
}, f$ = {
  borderStyle: "solid"
}, p$ = {
  borderStyle: "dashed"
}, h$ = {
  solid: f$,
  dashed: p$
}, m$ = {
  baseStyle: d$,
  variants: h$,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: v$, defineMultiStyleConfig: g$ } = qe(Qk.keys), b$ = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, y$ = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, x$ = {
  pt: "2",
  px: "4",
  pb: "5"
}, S$ = {
  fontSize: "1.25em"
}, w$ = v$({
  container: b$,
  button: y$,
  panel: x$,
  icon: S$
}), C$ = g$({ baseStyle: w$ }), { definePartsStyle: za, defineMultiStyleConfig: _$ } = qe(eE.keys), Gt = me("alert-fg"), Jr = me("alert-bg"), k$ = za({
  container: {
    bg: Jr.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: Gt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Gt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Fu(e) {
  const { theme: t, colorScheme: r } = e, n = So(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var E$ = za((e) => {
  const { colorScheme: t } = e, r = Fu(e);
  return {
    container: {
      [Gt.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Gt.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      }
    }
  };
}), P$ = za((e) => {
  const { colorScheme: t } = e, r = Fu(e);
  return {
    container: {
      [Gt.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Gt.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Gt.reference
    }
  };
}), T$ = za((e) => {
  const { colorScheme: t } = e, r = Fu(e);
  return {
    container: {
      [Gt.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Gt.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Gt.reference
    }
  };
}), A$ = za((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Gt.variable]: "colors.white",
      [Jr.variable]: `colors.${t}.500`,
      _dark: {
        [Gt.variable]: "colors.gray.900",
        [Jr.variable]: `colors.${t}.200`
      },
      color: Gt.reference
    }
  };
}), O$ = {
  subtle: E$,
  "left-accent": P$,
  "top-accent": T$,
  solid: A$
}, $$ = _$({
  baseStyle: k$,
  variants: O$,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: gv, defineMultiStyleConfig: R$ } = qe(tE.keys), uo = me("avatar-border-color"), aa = me("avatar-bg"), Ea = me("avatar-font-size"), wo = me("avatar-size"), D$ = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: uo.reference,
  [uo.variable]: "white",
  _dark: {
    [uo.variable]: "colors.gray.800"
  }
}, M$ = {
  bg: aa.reference,
  fontSize: Ea.reference,
  width: wo.reference,
  height: wo.reference,
  lineHeight: "1",
  [aa.variable]: "colors.gray.200",
  _dark: {
    [aa.variable]: "colors.whiteAlpha.400"
  }
}, I$ = (e) => {
  const { name: t, theme: r } = e, n = t ? WE({ string: t }) : "colors.gray.400", o = VE(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: aa.reference,
    fontSize: Ea.reference,
    color: a,
    borderColor: uo.reference,
    verticalAlign: "top",
    width: wo.reference,
    height: wo.reference,
    "&:not([data-loaded])": {
      [aa.variable]: n
    },
    [uo.variable]: "colors.white",
    _dark: {
      [uo.variable]: "colors.gray.800"
    }
  };
}, F$ = {
  fontSize: Ea.reference,
  lineHeight: "1"
}, N$ = gv((e) => ({
  badge: $t(D$, e),
  excessLabel: $t(M$, e),
  container: $t(I$, e),
  label: F$
}));
function an(e) {
  const t = e !== "100%" ? iv[e] : void 0;
  return gv({
    container: {
      [wo.variable]: t ?? e,
      [Ea.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [wo.variable]: t ?? e,
      [Ea.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var j$ = {
  "2xs": an(4),
  xs: an(6),
  sm: an(8),
  md: an(12),
  lg: an(16),
  xl: an(24),
  "2xl": an(32),
  full: an("100%")
}, B$ = R$({
  baseStyle: N$,
  sizes: j$,
  defaultProps: {
    size: "md"
  }
}), z$ = {
  Accordion: C$,
  Alert: $$,
  Avatar: B$,
  Badge: ra,
  Breadcrumb: VO,
  Button: KO,
  Checkbox: ns,
  CloseButton: o$,
  Code: l$,
  Container: u$,
  Divider: m$,
  Drawer: fO,
  Editable: yO,
  Form: kO,
  FormError: $O,
  FormLabel: DO,
  Heading: FO,
  Input: Be,
  Kbd: nA,
  Link: aA,
  List: uA,
  Menu: xA,
  Modal: $A,
  NumberInput: zA,
  PinInput: UA,
  Popover: tO,
  Progress: cT,
  Radio: wT,
  Select: AT,
  Skeleton: $T,
  SkipLink: DT,
  Slider: UT,
  Spinner: GT,
  Stat: tA,
  Switch: aP,
  Table: fP,
  Tabs: PP,
  Tag: zP,
  Textarea: JP,
  Tooltip: tT,
  Card: t$,
  Stepper: Jk
}, bv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, yv = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, xv = "ltr", Sv = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, wv = {
  semanticTokens: bv,
  direction: xv,
  ...sv,
  components: z$,
  styles: yv,
  config: Sv
}, Uz = wv, V$ = {
  semanticTokens: bv,
  direction: xv,
  components: {},
  ...sv,
  styles: yv,
  config: Sv
};
function Ko(e) {
  return typeof e == "function";
}
function L$(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Cv = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return Ek(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, L$(
    ...n.map(
      (a) => (i) => Ko(a) ? a(i) : _v(i, a)
    )
  )(o);
}, Hz = Cv(wv), Yz = Cv(V$);
function _v(...e) {
  return nr({}, ...e, kv);
}
function kv(e, t, r, n) {
  if ((Ko(e) || Ko(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = Ko(e) ? e(...o) : e, i = Ko(t) ? t(...o) : t;
      return nr({}, a, i, kv);
    };
}
function W$(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function U$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var H$ = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, Y$ = H$(U$);
function Ev(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Pv = (e) => Ev(e, (t) => t != null);
function fp(e) {
  return typeof e == "number";
}
function G$(e) {
  return typeof e == "function";
}
var q$ = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function Gz(e) {
  return "current" in e;
}
function X$(e, ...t) {
  return G$(e) ? e(...t) : e;
}
function qz(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function K$(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var Xz = () => {
}, Kz = /* @__PURE__ */ K$((e) => () => {
  const { condition: t, message: r } = e;
  t && q$ && console.warn(r);
}), Zz = (...e) => (t) => e.reduce((r, n) => n(r), t), Fl = (e, t) => Math.abs(e - t), pp = (e) => "x" in e && "y" in e;
function Jz(e, t) {
  if (fp(e) && fp(t))
    return Fl(e, t);
  if (pp(e) && pp(t)) {
    const r = Fl(e.x, t.x), n = Fl(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const Tv = 1 / 60 * 1e3, Z$ = typeof performance < "u" ? () => performance.now() : () => Date.now(), Av = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(Z$()), Tv);
function J$(e) {
  let t = [], r = [], n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l;
    },
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const Q$ = 40;
let Mc = !0, Pa = !1, Ic = !1;
const fo = {
  delta: 0,
  timestamp: 0
}, Va = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ns = Va.reduce((e, t) => (e[t] = J$(() => Pa = !0), e), {}), eR = Va.reduce((e, t) => {
  const r = Ns[t];
  return e[t] = (n, o = !1, a = !1) => (Pa || nR(), r.schedule(n, o, a)), e;
}, {}), tR = Va.reduce((e, t) => (e[t] = Ns[t].cancel, e), {});
Va.reduce((e, t) => (e[t] = () => Ns[t].process(fo), e), {});
const rR = (e) => Ns[e].process(fo), Ov = (e) => {
  Pa = !1, fo.delta = Mc ? Tv : Math.max(Math.min(e - fo.timestamp, Q$), 1), fo.timestamp = e, Ic = !0, Va.forEach(rR), Ic = !1, Pa && (Mc = !1, Av(Ov));
}, nR = () => {
  Pa = !0, Mc = !0, Ic || Av(Ov);
}, hp = () => fo;
var oR = typeof Element < "u", aR = typeof Map == "function", iR = typeof Set == "function", sR = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Bi(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!Bi(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (aR && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Bi(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (iR && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (sR && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (oR && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Bi(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var lR = function(t, r) {
  try {
    return Bi(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const cR = /* @__PURE__ */ _s(lR);
function Nu(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = Xm(), s = e ? Y$(a, `components.${e}`) : void 0, l = n || s, c = nr(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Pv(W$(o, ["children"]))
  ), u = ye({});
  if (l) {
    const f = _k(l)(c);
    cR(u.current, f) || (u.current = f);
  }
  return u.current;
}
function ju(e, t = {}) {
  return Nu(e, t);
}
function js(e, t = {}) {
  return Nu(e, t);
}
function Qz(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = Xm(), i = (r = a.components) == null ? void 0 : r[e], s = i ? _v(i, n) : n;
  return Nu(null, {
    ...o,
    styleConfig: s
  });
}
var uR = /* @__PURE__ */ new Set([
  ...dk,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), dR = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function fR(e) {
  return dR.has(e) || !uR.has(e);
}
function pR(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var hR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mR = /* @__PURE__ */ zm(
  function(e) {
    return hR.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vR = mR, gR = function(t) {
  return t !== "theme";
}, mp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? vR : gR;
}, vp = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, gp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, bR = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Os(r, n, o), ku(function() {
    return $s(r, n, o);
  }), null;
}, yR = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = vp(t, r, n), l = s || mp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(gp), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(gp), d.push(u[p], u[0][p]);
    }
    var m = Rs(function(h, g, b) {
      var y = c && h.as || o, S = "", E = [], C = h;
      if (h.theme == null) {
        C = {};
        for (var I in h)
          C[I] = h[I];
        C.theme = U.useContext(hn);
      }
      typeof h.className == "string" ? S = Cu(g.registered, E, h.className) : h.className != null && (S = h.className + " ");
      var T = xo(d.concat(E), g.registered, C);
      S += g.key + "-" + T.name, i !== void 0 && (S += " " + i);
      var N = c && s === void 0 ? mp(y) : l, V = {};
      for (var B in h)
        c && B === "as" || // $FlowFixMe
        N(B) && (V[B] = h[B]);
      return V.className = S, V.ref = b, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(bR, {
        cache: g,
        serialized: T,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ U.createElement(y, V));
    });
    return m.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), m.withComponent = function(h, g) {
      return e(h, Nn({}, r, g, {
        shouldForwardProp: vp(m, g, !0)
      })).apply(void 0, d);
    }, m;
  };
}, xR = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], as = yR.bind();
xR.forEach(function(e) {
  as[e] = as(e);
});
var bp, SR = (bp = as.default) != null ? bp : as, wR = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = Ev(i, (d, f) => pk(f)), l = X$(e, t), c = pR(
    {},
    o,
    l,
    Pv(s),
    a
  ), u = xk(c)(t.theme);
  return n ? [u, n] : u;
};
function Nl(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = fR);
  const o = wR({ baseStyle: r }), a = SR(
    e,
    n
  )(o);
  return Rt.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Tu();
    return Rt.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function CR() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Nl, {
    apply(t, r, n) {
      return Nl(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Nl(r)), e.get(r);
    }
  });
}
var ke = CR();
function Ue(e) {
  return Tt(e);
}
function qt(e, t = []) {
  const r = ye(e);
  return ze(() => {
    r.current = e;
  }), q((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function Oo(e, t) {
  const r = ye(!1), n = ye(!1);
  ze(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), ze(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const $v = Mr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Bs = Mr({}), La = Mr(null), zs = typeof document < "u", is = zs ? Ss : ze, Rv = Mr({ strict: !1 });
function _R(e, t, r, n) {
  const { visualElement: o } = ht(Bs), a = ht(Rv), i = ht(La), s = ht($v).reducedMotion, l = ye();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return im(() => {
    c && c.update(r, i);
  }), is(() => {
    c && c.render();
  }), ze(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? is : ze)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function to(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function kR(e, t, r) {
  return q(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : to(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ta(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Vs(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Bu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], zu = ["initial", ...Bu];
function Ls(e) {
  return Vs(e.animate) || zu.some((t) => Ta(e[t]));
}
function Dv(e) {
  return !!(Ls(e) || e.variants);
}
function ER(e, t) {
  if (Ls(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Ta(r) ? r : void 0,
      animate: Ta(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function PR(e) {
  const { initial: t, animate: r } = ER(e, ht(Bs));
  return _t(() => ({ initial: t, animate: r }), [yp(t), yp(r)]);
}
function yp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xp = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Aa = {};
for (const e in xp)
  Aa[e] = {
    isEnabled: (t) => xp[e].some((r) => !!t[r])
  };
function TR(e) {
  for (const t in e)
    Aa[t] = {
      ...Aa[t],
      ...e[t]
    };
}
const Vu = Mr({}), Mv = Mr({}), AR = Symbol.for("motionComponentSymbol");
function OR({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && TR(e);
  function a(s, l) {
    let c;
    const u = {
      ...ht($v),
      ...s,
      layoutId: $R(s)
    }, { isStatic: d } = u, f = PR(s), p = n(s, d);
    if (!d && zs) {
      f.visualElement = _R(o, p, u, t);
      const m = ht(Mv), h = ht(Rv).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        h,
        e,
        m
      ));
    }
    return U.createElement(
      Bs.Provider,
      { value: f },
      c && f.visualElement ? U.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, kR(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = Tt(a);
  return i[AR] = o, i;
}
function $R({ layoutId: e }) {
  const t = ht(Vu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function RR(e) {
  function t(n, o = {}) {
    return OR(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const DR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Lu(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(DR.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const ss = {};
function MR(e) {
  Object.assign(ss, e);
}
const Wa = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ln = new Set(Wa);
function Iv(e, { layout: t, layoutId: r }) {
  return Ln.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!ss[e] || e === "opacity");
}
const Vt = (e) => !!(e && e.getVelocity), IR = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, FR = Wa.length;
function NR(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < FR; i++) {
    const s = Wa[i];
    if (e[s] !== void 0) {
      const l = IR[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Fv = (e) => (t) => typeof t == "string" && t.startsWith(e), Nv = Fv("--"), Fc = Fv("var(--"), jR = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, BR = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mn = (e, t, r) => Math.min(Math.max(r, e), t), Wn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ia = {
  ...Wn,
  transform: (e) => mn(0, 1, e)
}, mi = {
  ...Wn,
  default: 1
}, sa = (e) => Math.round(e * 1e5) / 1e5, Ws = /(-)?([\d]*\.?[\d])+/g, jv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, zR = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ua(e) {
  return typeof e == "string";
}
const Ha = (e) => ({
  test: (t) => Ua(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), sn = Ha("deg"), $r = Ha("%"), fe = Ha("px"), VR = Ha("vh"), LR = Ha("vw"), Sp = {
  ...$r,
  parse: (e) => $r.parse(e) / 100,
  transform: (e) => $r.transform(e * 100)
}, wp = {
  ...Wn,
  transform: Math.round
}, Bv = {
  // Border props
  borderWidth: fe,
  borderTopWidth: fe,
  borderRightWidth: fe,
  borderBottomWidth: fe,
  borderLeftWidth: fe,
  borderRadius: fe,
  radius: fe,
  borderTopLeftRadius: fe,
  borderTopRightRadius: fe,
  borderBottomRightRadius: fe,
  borderBottomLeftRadius: fe,
  // Positioning props
  width: fe,
  maxWidth: fe,
  height: fe,
  maxHeight: fe,
  size: fe,
  top: fe,
  right: fe,
  bottom: fe,
  left: fe,
  // Spacing props
  padding: fe,
  paddingTop: fe,
  paddingRight: fe,
  paddingBottom: fe,
  paddingLeft: fe,
  margin: fe,
  marginTop: fe,
  marginRight: fe,
  marginBottom: fe,
  marginLeft: fe,
  // Transform props
  rotate: sn,
  rotateX: sn,
  rotateY: sn,
  rotateZ: sn,
  scale: mi,
  scaleX: mi,
  scaleY: mi,
  scaleZ: mi,
  skew: sn,
  skewX: sn,
  skewY: sn,
  distance: fe,
  translateX: fe,
  translateY: fe,
  translateZ: fe,
  x: fe,
  y: fe,
  z: fe,
  perspective: fe,
  transformPerspective: fe,
  opacity: ia,
  originX: Sp,
  originY: Sp,
  originZ: fe,
  // Misc
  zIndex: wp,
  // SVG
  fillOpacity: ia,
  strokeOpacity: ia,
  numOctaves: wp
};
function Wu(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Nv(d)) {
      a[d] = f;
      continue;
    }
    const p = Bv[d], m = BR(f, p);
    if (Ln.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = NR(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Uu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function zv(e, t, r) {
  for (const n in t)
    !Vt(t[n]) && !Iv(n, r) && (e[n] = t[n]);
}
function WR({ transformTemplate: e }, t, r) {
  return _t(() => {
    const n = Uu();
    return Wu(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function UR(e, t, r) {
  const n = e.style || {}, o = {};
  return zv(o, n, e), Object.assign(o, WR(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function HR(e, t, r) {
  const n = {}, o = UR(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const YR = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function ls(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || YR.has(e);
}
let Vv = (e) => !ls(e);
function GR(e) {
  e && (Vv = (t) => t.startsWith("on") ? !ls(t) : e(t));
}
try {
  GR(require("@emotion/is-prop-valid").default);
} catch {
}
function qR(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Vv(o) || r === !0 && ls(o) || !t && !ls(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Cp(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function XR(e, t, r) {
  const n = Cp(t, e.x, e.width), o = Cp(r, e.y, e.height);
  return `${n} ${o}`;
}
const KR = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ZR = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function JR(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? KR : ZR;
  e[a.offset] = fe.transform(-n);
  const i = fe.transform(t), s = fe.transform(r);
  e[a.array] = `${i} ${s}`;
}
function Hu(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: a,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, f) {
  if (Wu(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = XR(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && JR(p, i, s, l, !1);
}
const Lv = () => ({
  ...Uu(),
  attrs: {}
}), Yu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function QR(e, t, r, n) {
  const o = _t(() => {
    const a = Lv();
    return Hu(a, t, { enableHardwareAcceleration: !1 }, Yu(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    zv(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function e2(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (Lu(r) ? QR : HR)(n, a, i, r), u = {
      ...qR(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = _t(() => Vt(d) ? d.get() : d, [d]);
    return rr(r, {
      ...u,
      children: f
    });
  };
}
const Gu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Wv(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Uv = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Hv(e, t, r, n) {
  Wv(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Uv.has(o) ? o : Gu(o), t.attrs[o]);
}
function qu(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Vt(r[o]) || t.style && Vt(t.style[o]) || Iv(o, e)) && (n[o] = r[o]);
  return n;
}
function Yv(e, t) {
  const r = qu(e, t);
  for (const n in e)
    if (Vt(e[n]) || Vt(t[n])) {
      const o = Wa.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Xu(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function Gv(e) {
  const t = ye(null);
  return t.current === null && (t.current = e()), t.current;
}
const cs = (e) => Array.isArray(e), t2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), r2 = (e) => cs(e) ? e[e.length - 1] || 0 : e;
function zi(e) {
  const t = Vt(e) ? e.get() : e;
  return t2(t) ? t.toValue() : t;
}
function n2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: o2(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const qv = (e) => (t, r) => {
  const n = ht(Bs), o = ht(La), a = () => n2(e, t, n, o);
  return r ? a() : Gv(a);
};
function o2(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = zi(a[f]);
  let { initial: i, animate: s } = e;
  const l = Ls(e), c = Dv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !Vs(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Xu(e, p);
    if (!m)
      return;
    const { transitionEnd: h, transition: g, ...b } = m;
    for (const y in b) {
      let S = b[y];
      if (Array.isArray(S)) {
        const E = u ? S.length - 1 : 0;
        S = S[E];
      }
      S !== null && (o[y] = S);
    }
    for (const y in h)
      o[y] = h[y];
  }), o;
}
const a2 = {
  useVisualState: qv({
    scrapeMotionValuesFromProps: Yv,
    createRenderState: Lv,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      try {
        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Hu(r, n, { enableHardwareAcceleration: !1 }, Yu(t.tagName), e.transformTemplate), Hv(t, r);
    }
  })
}, i2 = {
  useVisualState: qv({
    scrapeMotionValuesFromProps: qu,
    createRenderState: Uu
  })
};
function s2(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Lu(e) ? a2 : i2,
    preloadedFeatures: r,
    useRender: e2(t),
    createVisualElement: n,
    Component: e
  };
}
function Hr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Xv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Us(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const l2 = (e) => (t) => Xv(t) && e(t, Us(t));
function Gr(e, t, r, n) {
  return Hr(e, t, l2(r), n);
}
const c2 = (e, t) => (r) => t(e(r)), dn = (...e) => e.reduce(c2);
function Kv(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const _p = Kv("dragHorizontal"), kp = Kv("dragVertical");
function Zv(e) {
  let t = !1;
  if (e === "y")
    t = kp();
  else if (e === "x")
    t = _p();
  else {
    const r = _p(), n = kp();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Jv() {
  const e = Zv(!0);
  return e ? (e(), !1) : !0;
}
class bn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function u2(e) {
  let t = [], r = [], n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const ot = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, d2 = 40;
let Nc = !0, Oa = !1;
const Hs = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], po = Hs.reduce((e, t) => (e[t] = u2(() => Oa = !0), e), {}), f2 = (e) => po[e].process(ot), Qv = (e) => {
  Oa = !1, ot.delta = Nc ? 1e3 / 60 : Math.max(Math.min(e - ot.timestamp, d2), 1), ot.timestamp = e, ot.isProcessing = !0, Hs.forEach(f2), ot.isProcessing = !1, Oa && (Nc = !1, requestAnimationFrame(Qv));
}, p2 = () => {
  Oa = !0, Nc = !0, ot.isProcessing || requestAnimationFrame(Qv);
}, Qe = Hs.reduce((e, t) => {
  const r = po[t];
  return e[t] = (n, o = !1, a = !1) => (Oa || p2(), r.schedule(n, o, a)), e;
}, {});
function Qr(e) {
  Hs.forEach((t) => po[t].cancel(e));
}
function Ep(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || Jv())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Qe.update(() => s[n](a, i));
  };
  return Gr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class h2 extends bn {
  mount() {
    this.unmount = dn(Ep(this.node, !0), Ep(this.node, !1));
  }
  unmount() {
  }
}
class m2 extends bn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = dn(Hr(this.node.current, "focus", () => this.onFocus()), Hr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const eg = (e, t) => t ? e === t ? !0 : eg(e, t.parentElement) : !1, mt = (e) => e;
function jl(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Us(r));
}
class v2 extends bn {
  constructor() {
    super(...arguments), this.removeStartListeners = mt, this.removeEndListeners = mt, this.removeAccessibleListeners = mt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Gr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        Qe.update(() => {
          eg(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Gr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = dn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || jl("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && Qe.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Hr(this.node.current, "keyup", i), jl("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Hr(this.node.current, "keydown", t), n = () => {
        this.isPressing && jl("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Hr(this.node.current, "blur", n);
      this.removeAccessibleListeners = dn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Qe.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Jv();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Qe.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Gr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Hr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const jc = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), g2 = (e) => {
  const t = jc.get(e.target);
  t && t(e);
}, b2 = (e) => {
  e.forEach(g2);
};
function y2({ root: e, ...t }) {
  const r = e || document;
  Bl.has(r) || Bl.set(r, {});
  const n = Bl.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(b2, { root: e, ...t })), n[o];
}
function x2(e, t, r) {
  const n = y2(t);
  return jc.set(e, r), n.observe(e), () => {
    jc.delete(e), n.unobserve(e);
  };
}
const S2 = {
  some: 0,
  all: 1
};
class w2 extends bn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : S2[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return x2(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(C2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function C2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const _2 = {
  inView: {
    Feature: w2
  },
  tap: {
    Feature: v2
  },
  focus: {
    Feature: m2
  },
  hover: {
    Feature: h2
  }
};
function tg(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function k2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function E2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Ys(e, t, r) {
  const n = e.getProps();
  return Xu(n, t, r !== void 0 ? r : n.custom, k2(e), E2(e));
}
const P2 = "framerAppearId", T2 = "data-" + Gu(P2);
let Ya = mt, xr = mt;
process.env.NODE_ENV !== "production" && (Ya = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, xr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const fn = (e) => e * 1e3, qr = (e) => e / 1e3, A2 = {
  current: !1
}, rg = (e) => Array.isArray(e) && typeof e[0] == "number";
function ng(e) {
  return !!(!e || typeof e == "string" && og[e] || rg(e) || Array.isArray(e) && e.every(ng));
}
const Zo = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, og = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Zo([0, 0.65, 0.55, 1]),
  circOut: Zo([0.55, 0, 1, 0.45]),
  backIn: Zo([0.31, 0.01, 0.66, -0.59]),
  backOut: Zo([0.33, 1.53, 0.69, 0.99])
};
function ag(e) {
  if (e)
    return rg(e) ? Zo(e) : Array.isArray(e) ? e.map(ag) : og[e];
}
function O2(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = ag(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Pp = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, zl = {}, ig = {};
for (const e in Pp)
  ig[e] = () => (zl[e] === void 0 && (zl[e] = Pp[e]()), zl[e]);
function $2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const sg = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, R2 = 1e-7, D2 = 12;
function M2(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = sg(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > R2 && ++s < D2);
  return i;
}
function Ga(e, t, r, n) {
  if (e === t && r === n)
    return mt;
  const o = (a) => M2(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : sg(o(a), t, n);
}
const I2 = Ga(0.42, 0, 1, 1), F2 = Ga(0, 0, 0.58, 1), lg = Ga(0.42, 0, 0.58, 1), N2 = (e) => Array.isArray(e) && typeof e[0] != "number", cg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, ug = (e) => (t) => 1 - e(1 - t), dg = (e) => 1 - Math.sin(Math.acos(e)), Ku = ug(dg), j2 = cg(Ku), fg = Ga(0.33, 1.53, 0.69, 0.99), Zu = ug(fg), B2 = cg(Zu), z2 = (e) => (e *= 2) < 1 ? 0.5 * Zu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Tp = {
  linear: mt,
  easeIn: I2,
  easeInOut: lg,
  easeOut: F2,
  circIn: dg,
  circInOut: j2,
  circOut: Ku,
  backIn: Zu,
  backInOut: B2,
  backOut: fg,
  anticipate: z2
}, Ap = (e) => {
  if (Array.isArray(e)) {
    xr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return Ga(t, r, n, o);
  } else if (typeof e == "string")
    return xr(Tp[e] !== void 0, `Invalid easing type '${e}'`), Tp[e];
  return e;
}, Ju = (e, t) => (r) => !!(Ua(r) && zR.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), pg = (e, t, r) => (n) => {
  if (!Ua(n))
    return n;
  const [o, a, i, s] = n.match(Ws);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, V2 = (e) => mn(0, 255, e), Vl = {
  ...Wn,
  transform: (e) => Math.round(V2(e))
}, On = {
  test: Ju("rgb", "red"),
  parse: pg("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Vl.transform(e) + ", " + Vl.transform(t) + ", " + Vl.transform(r) + ", " + sa(ia.transform(n)) + ")"
};
function L2(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Bc = {
  test: Ju("#"),
  parse: L2,
  transform: On.transform
}, ro = {
  test: Ju("hsl", "hue"),
  parse: pg("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + $r.transform(sa(t)) + ", " + $r.transform(sa(r)) + ", " + sa(ia.transform(n)) + ")"
}, Ot = {
  test: (e) => On.test(e) || Bc.test(e) || ro.test(e),
  parse: (e) => On.test(e) ? On.parse(e) : ro.test(e) ? ro.parse(e) : Bc.parse(e),
  transform: (e) => Ua(e) ? e : e.hasOwnProperty("red") ? On.transform(e) : ro.transform(e)
}, at = (e, t, r) => -r * e + r * t + e;
function Ll(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function W2({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Ll(l, s, e + 1 / 3), a = Ll(l, s, e), i = Ll(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Wl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, U2 = [Bc, On, ro], H2 = (e) => U2.find((t) => t.test(e));
function Op(e) {
  const t = H2(e);
  xr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === ro && (r = W2(r)), r;
}
const hg = (e, t) => {
  const r = Op(e), n = Op(t), o = { ...r };
  return (a) => (o.red = Wl(r.red, n.red, a), o.green = Wl(r.green, n.green, a), o.blue = Wl(r.blue, n.blue, a), o.alpha = at(r.alpha, n.alpha, a), On.transform(o));
};
function Y2(e) {
  var t, r;
  return isNaN(e) && Ua(e) && (((t = e.match(Ws)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(jv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const mg = {
  regex: jR,
  countKey: "Vars",
  token: "${v}",
  parse: mt
}, vg = {
  regex: jv,
  countKey: "Colors",
  token: "${c}",
  parse: Ot.parse
}, gg = {
  regex: Ws,
  countKey: "Numbers",
  token: "${n}",
  parse: Wn.parse
};
function Ul(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function us(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Ul(r, mg), Ul(r, vg), Ul(r, gg), r;
}
function bg(e) {
  return us(e).values;
}
function yg(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = us(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(mg.token, i[l]) : l < n + r ? s = s.replace(vg.token, Ot.transform(i[l])) : s = s.replace(gg.token, sa(i[l]));
    return s;
  };
}
const G2 = (e) => typeof e == "number" ? 0 : e;
function q2(e) {
  const t = bg(e);
  return yg(e)(t.map(G2));
}
const vn = {
  test: Y2,
  parse: bg,
  createTransformer: yg,
  getAnimatableNone: q2
}, xg = (e, t) => (r) => `${r > 0 ? t : e}`;
function Sg(e, t) {
  return typeof e == "number" ? (r) => at(e, t, r) : Ot.test(e) ? hg(e, t) : e.startsWith("var(") ? xg(e, t) : Cg(e, t);
}
const wg = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => Sg(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, X2 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Sg(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, Cg = (e, t) => {
  const r = vn.createTransformer(t), n = us(e), o = us(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? dn(wg(n.values, o.values), r) : (Ya(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), xg(e, t));
}, $a = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, $p = (e, t) => (r) => at(e, t, r);
function K2(e) {
  return typeof e == "number" ? $p : typeof e == "string" ? Ot.test(e) ? hg : Cg : Array.isArray(e) ? wg : typeof e == "object" ? X2 : $p;
}
function Z2(e, t, r) {
  const n = [], o = r || K2(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || mt : t;
      s = dn(l, s);
    }
    n.push(s);
  }
  return n;
}
function _g(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (xr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Z2(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = $a(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(mn(e[0], e[a - 1], c)) : l;
}
function J2(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = $a(0, t, n);
    e.push(at(r, 1, o));
  }
}
function Q2(e) {
  const t = [0];
  return J2(t, e.length - 1), t;
}
function eD(e, t) {
  return e.map((r) => r * t);
}
function tD(e, t) {
  return e.map(() => t || lg).splice(0, e.length - 1);
}
function ds({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = N2(n) ? n.map(Ap) : Ap(n), a = {
    done: !1,
    value: t[0]
  }, i = eD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : Q2(t),
    e
  ), s = _g(i, t, {
    ease: Array.isArray(o) ? o : tD(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function kg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const rD = 5;
function Eg(e, t, r) {
  const n = Math.max(t - rD, 0);
  return kg(r - e(n), t - n);
}
const Hl = 1e-3, nD = 0.01, Rp = 10, oD = 0.05, aD = 1;
function iD({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  Ya(e <= fn(Rp), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = mn(oD, aD, i), e = mn(nD, Rp, qr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = zc(c, i), m = Math.exp(-d);
    return Hl - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = zc(Math.pow(c, 2), i);
    return (-o(c) + Hl > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Hl + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = lD(o, a, s);
  if (e = fn(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const sD = 12;
function lD(e, t, r) {
  let n = r;
  for (let o = 1; o < sD; o++)
    n = n - e(n) / t(n);
  return n;
}
function zc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const cD = ["duration", "bounce"], uD = ["stiffness", "damping", "mass"];
function Dp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function dD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Dp(e, uD) && Dp(e, cD)) {
    const r = iD(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Pg({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = dD(n), p = u ? -qr(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, g = qr(Math.sqrt(s / c)), b = Math.abs(h) < 5;
  r || (r = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (m < 1) {
    const S = zc(g, m);
    y = (E) => {
      const C = Math.exp(-m * g * E);
      return a - C * ((p + m * g * h) / S * Math.sin(S * E) + h * Math.cos(S * E));
    };
  } else if (m === 1)
    y = (S) => a - Math.exp(-g * S) * (h + (p + g * h) * S);
  else {
    const S = g * Math.sqrt(m * m - 1);
    y = (E) => {
      const C = Math.exp(-m * g * E), I = Math.min(S * E, 300);
      return a - C * ((p + m * g * h) * Math.sinh(I) + S * h * Math.cosh(I)) / S;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (S) => {
      const E = y(S);
      if (f)
        i.done = S >= d;
      else {
        let C = p;
        S !== 0 && (m < 1 ? C = Eg(y, S, E) : C = 0);
        const I = Math.abs(C) <= r, T = Math.abs(a - E) <= t;
        i.done = I && T;
      }
      return i.value = i.done ? a : E, i;
    }
  };
}
function Mp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (N) => s !== void 0 && N < s || l !== void 0 && N > l, m = (N) => s === void 0 ? l : l === void 0 || Math.abs(s - N) < Math.abs(l - N) ? s : l;
  let h = r * t;
  const g = d + h, b = i === void 0 ? g : i(g);
  b !== g && (h = b - d);
  const y = (N) => -h * Math.exp(-N / n), S = (N) => b + y(N), E = (N) => {
    const V = y(N), B = S(N);
    f.done = Math.abs(V) <= c, f.value = f.done ? b : B;
  };
  let C, I;
  const T = (N) => {
    p(f.value) && (C = N, I = Pg({
      keyframes: [f.value, m(f.value)],
      velocity: Eg(S, N, f.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return T(0), {
    calculatedDuration: null,
    next: (N) => {
      let V = !1;
      return !I && C === void 0 && (V = !0, E(N), T(N)), C !== void 0 && N > C ? I.next(N - C) : (!V && E(N), f);
    }
  };
}
const fD = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Qe.update(t, !0),
    stop: () => Qr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Ip = 2e4;
function Fp(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Ip; )
    t += r, n = e.next(t);
  return t >= Ip ? 1 / 0 : t;
}
const pD = {
  decay: Mp,
  inertia: Mp,
  tween: ds,
  keyframes: ds,
  spring: Pg
};
function fs({ autoplay: e = !0, delay: t = 0, driver: r = fD, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, g;
  const b = () => {
    h && h(), g = new Promise((F) => {
      h = F;
    });
  };
  b();
  let y;
  const S = pD[o] || ds;
  let E;
  S !== ds && typeof n[0] != "number" && (E = _g([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const C = S({ ...f, keyframes: n });
  let I;
  s === "mirror" && (I = S({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let T = "idle", N = null, V = null, B = null;
  C.calculatedDuration === null && a && (C.calculatedDuration = Fp(C));
  const { calculatedDuration: X } = C;
  let ne = 1 / 0, J = 1 / 0;
  X !== null && (ne = X + i, J = ne * (a + 1) - i);
  let Q = 0;
  const ee = (F) => {
    if (V === null)
      return;
    p > 0 && (V = Math.min(V, F)), p < 0 && (V = Math.min(F - J / p, V)), N !== null ? Q = N : Q = Math.round(F - V) * p;
    const z = Q - t * (p >= 0 ? 1 : -1), P = p >= 0 ? z < 0 : z > J;
    Q = Math.max(z, 0), T === "finished" && N === null && (Q = J);
    let O = Q, j = C;
    if (a) {
      const Z = Q / ne;
      let Y = Math.floor(Z), ae = Z % 1;
      !ae && Z >= 1 && (ae = 1), ae === 1 && Y--, Y = Math.min(Y, a + 1);
      const $ = !!(Y % 2);
      $ && (s === "reverse" ? (ae = 1 - ae, i && (ae -= i / ne)) : s === "mirror" && (j = I));
      let xe = mn(0, 1, ae);
      Q > J && (xe = s === "reverse" && $ ? 1 : 0), O = xe * ne;
    }
    const w = P ? { done: !1, value: n[0] } : j.next(O);
    E && (w.value = E(w.value));
    let { done: H } = w;
    !P && X !== null && (H = p >= 0 ? Q >= J : Q <= 0);
    const A = N === null && (T === "finished" || T === "running" && H);
    return d && d(w.value), A && ce(), w;
  }, oe = () => {
    y && y.stop(), y = void 0;
  }, D = () => {
    T = "idle", oe(), b(), V = B = null;
  }, ce = () => {
    T = "finished", u && u(), oe(), b();
  }, de = () => {
    if (m)
      return;
    y || (y = r(ee));
    const F = y.now();
    l && l(), N !== null ? V = F - N : (!V || T === "finished") && (V = F), B = V, N = null, T = "running", y.start();
  };
  e && de();
  const M = {
    then(F, z) {
      return g.then(F, z);
    },
    get time() {
      return qr(Q);
    },
    set time(F) {
      F = fn(F), Q = F, N !== null || !y || p === 0 ? N = F : V = y.now() - F / p;
    },
    get duration() {
      const F = C.calculatedDuration === null ? Fp(C) : C.calculatedDuration;
      return qr(F);
    },
    get speed() {
      return p;
    },
    set speed(F) {
      F === p || !y || (p = F, M.time = qr(Q));
    },
    get state() {
      return T;
    },
    play: de,
    pause: () => {
      T = "paused", N = Q;
    },
    stop: () => {
      m = !0, T !== "idle" && (T = "idle", c && c(), D());
    },
    cancel: () => {
      B !== null && ee(B), D();
    },
    complete: () => {
      T = "finished";
    },
    sample: (F) => (V = 0, ee(F))
  };
  return M;
}
const hD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), gi = 10, mD = 2e4, vD = (e, t) => t.type === "spring" || e === "backgroundColor" || !ng(t.ease);
function gD(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(ig.waapi() && hD.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (vD(t, o)) {
    const b = fs({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: u[0] };
    const S = [];
    let E = 0;
    for (; !y.done && E < mD; )
      y = b.sample(E), S.push(y.value), E += gi;
    p = void 0, u = S, d = E - gi, f = "linear";
  }
  const m = O2(e.owner.current, t, u, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  }), h = () => m.cancel(), g = () => {
    Qe.update(h), s(), c();
  };
  return m.onfinish = () => {
    e.set($2(u, o)), n && n(), g();
  }, {
    then(b, y) {
      return l.then(b, y);
    },
    get time() {
      return qr(m.currentTime || 0);
    },
    set time(b) {
      m.currentTime = fn(b);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(b) {
      m.playbackRate = b;
    },
    get duration() {
      return qr(d);
    },
    play: () => {
      i || (m.play(), Qr(h));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: b } = m;
      if (b) {
        const y = fs({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(b - gi).value, y.sample(b).value, gi);
      }
      g();
    },
    complete: () => m.finish(),
    cancel: g
  };
}
function bD({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: mt,
    pause: mt,
    stop: mt,
    then: (a) => (a(), Promise.resolve()),
    cancel: mt,
    complete: mt
  });
  return t ? fs({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const yD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, xD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), SD = {
  type: "keyframes",
  duration: 0.8
}, wD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, CD = (e, { keyframes: t }) => t.length > 2 ? SD : Ln.has(e) ? e.startsWith("scale") ? xD(t[1]) : yD : wD, Vc = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(vn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), _D = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function kD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Ws) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = _D.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const ED = /([a-z-]*)\(.*?\)/g, Lc = {
  ...vn,
  getAnimatableNone: (e) => {
    const t = e.match(ED);
    return t ? t.map(kD).join(" ") : e;
  }
}, PD = {
  ...Bv,
  // Color props
  color: Ot,
  backgroundColor: Ot,
  outlineColor: Ot,
  fill: Ot,
  stroke: Ot,
  // Border props
  borderColor: Ot,
  borderTopColor: Ot,
  borderRightColor: Ot,
  borderBottomColor: Ot,
  borderLeftColor: Ot,
  filter: Lc,
  WebkitFilter: Lc
}, Qu = (e) => PD[e];
function Tg(e, t) {
  let r = Qu(e);
  return r !== Lc && (r = vn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Ag = (e) => /^0[^.\s]+$/.test(e);
function TD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Ag(e);
}
function AD(e, t, r, n) {
  const o = Vc(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), TD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = Tg(t, s);
    }
  return a;
}
function OD({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Og(e, t) {
  return e[t] || e.default || e;
}
const ed = (e, t, r, n = {}) => (o) => {
  const a = Og(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - fn(i);
  const l = AD(t, e, r, a), c = l[0], u = l[l.length - 1], d = Vc(e, c), f = Vc(e, u);
  Ya(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...a,
    delay: -s,
    onUpdate: (m) => {
      t.set(m), a.onUpdate && a.onUpdate(m);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    }
  };
  if (OD(a) || (p = {
    ...p,
    ...CD(e, p)
  }), p.duration && (p.duration = fn(p.duration)), p.repeatDelay && (p.repeatDelay = fn(p.repeatDelay)), !d || !f || A2.current || a.type === !1)
    return bD(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = gD(t, e, p);
    if (m)
      return m;
  }
  return fs(p);
};
function ps(e) {
  return !!(Vt(e) && e.add);
}
const $D = (e) => /^\-?\d*\.?\d+$/.test(e);
function td(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rd(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class nd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return td(this.subscriptions, t), () => rd(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let a = 0; a < o; a++) {
          const i = this.subscriptions[a];
          i && i(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Np = /* @__PURE__ */ new Set();
function od(e, t, r) {
  e || Np.has(t) || (console.warn(t), r && console.warn(r), Np.add(t));
}
const RD = (e) => !isNaN(parseFloat(e));
class DD {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.12.18", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: a, timestamp: i } = ot;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, Qe.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Qe.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = RD(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && od(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new nd());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Qe.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      kg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Co(e, t) {
  return new DD(e, t);
}
const $g = (e) => (t) => t.test(e), MD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Rg = [Wn, fe, $r, sn, LR, VR, MD], Vo = (e) => Rg.find($g(e)), ID = [...Rg, Ot, vn], FD = (e) => ID.find($g(e));
function ND(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Co(r));
}
function jD(e, t) {
  const r = Ys(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = r2(a[i]);
    ND(e, i, s);
  }
}
function BD(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && ($D(u) || Ag(u)) ? u = parseFloat(u) : !FD(u) && vn.test(c) && (u = Tg(l, c)), e.addValue(l, Co(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function zD(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function VD(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = zD(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function LD({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Dg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && LD(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[T2];
      g && (m.elapsed = window.HandoffAppearAnimations(g, d, f, Qe));
    }
    f.start(ed(d, f, p, e.shouldReduceMotion && Ln.has(d) ? { type: !1 } : m));
    const h = f.animation;
    ps(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && jD(e, i);
  }), c;
}
function Wc(e, t, r = {}) {
  const n = Ys(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(Dg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return WD(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function WD(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(UD).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Wc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function UD(e, t) {
  return e.sortNodePosition(t);
}
function HD(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Wc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wc(e, t, r);
  else {
    const o = typeof t == "function" ? Ys(e, t, r.custom) : t;
    n = Promise.all(Dg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const YD = [...Bu].reverse(), GD = Bu.length;
function qD(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => HD(e, r, n)));
}
function XD(e) {
  let t = qD(e);
  const r = ZD();
  let n = !0;
  const o = (l, c) => {
    const u = Ys(e, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...p } = u;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function a(l) {
    t = l(e);
  }
  function i(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let m = {}, h = 1 / 0;
    for (let b = 0; b < GD; b++) {
      const y = YD[b], S = r[y], E = u[y] !== void 0 ? u[y] : d[y], C = Ta(E), I = y === c ? S.isActive : null;
      I === !1 && (h = b);
      let T = E === d[y] && E !== u[y] && C;
      if (T && n && e.manuallyAnimateOnMount && (T = !1), S.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && I === null || // If we didn't and don't have any defined prop for this animation type
      !E && !S.prevProp || // Or if the prop doesn't define an animation
      Vs(E) || typeof E == "boolean")
        continue;
      const N = KD(S.prevProp, E);
      let V = N || // If we're making this variant active, we want to always make it active
      y === c && S.isActive && !T && C || // If we removed a higher-priority variant (i is in reverse order)
      b > h && C;
      const B = Array.isArray(E) ? E : [E];
      let X = B.reduce(o, {});
      I === !1 && (X = {});
      const { prevResolvedValues: ne = {} } = S, J = {
        ...ne,
        ...X
      }, Q = (ee) => {
        V = !0, p.delete(ee), S.needsAnimating[ee] = !0;
      };
      for (const ee in J) {
        const oe = X[ee], D = ne[ee];
        m.hasOwnProperty(ee) || (oe !== D ? cs(oe) && cs(D) ? !tg(oe, D) || N ? Q(ee) : S.protectedKeys[ee] = !0 : oe !== void 0 ? Q(ee) : p.add(ee) : oe !== void 0 && p.has(ee) ? Q(ee) : S.protectedKeys[ee] = !0);
      }
      S.prevProp = E, S.prevResolvedValues = X, S.isActive && (m = { ...m, ...X }), n && e.blockInitialAnimation && (V = !1), V && !T && f.push(...B.map((ee) => ({
        animation: ee,
        options: { type: y, ...l }
      })));
    }
    if (p.size) {
      const b = {};
      p.forEach((y) => {
        const S = e.getBaseTarget(y);
        S !== void 0 && (b[y] = S);
      }), f.push({ animation: b });
    }
    let g = !!f.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (g = !1), n = !1, g ? t(f) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
    }), r[l].isActive = c;
    const f = i(u, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: s,
    setAnimateFunction: a,
    getState: () => r
  };
}
function KD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !tg(t, e) : !1;
}
function _n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ZD() {
  return {
    animate: _n(!0),
    whileInView: _n(),
    whileHover: _n(),
    whileTap: _n(),
    whileDrag: _n(),
    whileFocus: _n(),
    exit: _n()
  };
}
class JD extends bn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = XD(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Vs(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let QD = 0;
class eM extends bn {
  constructor() {
    super(...arguments), this.id = QD++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const a = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && a.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const tM = {
  animation: {
    Feature: JD
  },
  exit: {
    Feature: eM
  }
}, jp = (e, t) => Math.abs(e - t);
function rM(e, t) {
  const r = jp(e.x, t.x), n = jp(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Mg {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Gl(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = rM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = ot;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Yl(u, this.transformPagePoint), Qe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = Gl(c.type === "pointercancel" ? this.lastMoveEventInfo : Yl(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !Xv(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Us(t), a = Yl(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = ot;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Gl(a, this.history)), this.removeListeners = dn(Gr(window, "pointermove", this.handlePointerMove), Gr(window, "pointerup", this.handlePointerUp), Gr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qr(this.updatePoint);
  }
}
function Yl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Bp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Gl({ point: e }, t) {
  return {
    point: e,
    delta: Bp(e, Ig(t)),
    offset: Bp(e, nM(t)),
    velocity: oM(t, 0.1)
  };
}
function nM(e) {
  return e[0];
}
function Ig(e) {
  return e[e.length - 1];
}
function oM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Ig(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > fn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = qr(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Xt(e) {
  return e.max - e.min;
}
function Uc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function zp(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = at(t.min, t.max, e.origin), e.scale = Xt(r) / Xt(t), (Uc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = at(r.min, r.max, e.origin) - e.originPoint, (Uc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function la(e, t, r, n) {
  zp(e.x, t.x, r.x, n ? n.originX : void 0), zp(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Vp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Xt(t);
}
function aM(e, t, r) {
  Vp(e.x, t.x, r.x), Vp(e.y, t.y, r.y);
}
function Lp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Xt(t);
}
function ca(e, t, r) {
  Lp(e.x, t.x, r.x), Lp(e.y, t.y, r.y);
}
function iM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? at(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? at(r, e, n.max) : Math.min(e, r)), e;
}
function Wp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function sM(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Wp(e.x, r, o),
    y: Wp(e.y, t, n)
  };
}
function Up(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function lM(e, t) {
  return {
    x: Up(e.x, t.x),
    y: Up(e.y, t.y)
  };
}
function cM(e, t) {
  let r = 0.5;
  const n = Xt(e), o = Xt(t);
  return o > n ? r = $a(t.min, t.max - n, e.min) : n > o && (r = $a(e.min, e.max - o, t.min)), mn(0, 1, r);
}
function uM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Hc = 0.35;
function dM(e = Hc) {
  return e === !1 ? e = 0 : e === !0 && (e = Hc), {
    x: Hp(e, "left", "right"),
    y: Hp(e, "top", "bottom")
  };
}
function Hp(e, t, r) {
  return {
    min: Yp(e, t),
    max: Yp(e, r)
  };
}
function Yp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Gp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), no = () => ({
  x: Gp(),
  y: Gp()
}), qp = () => ({ min: 0, max: 0 }), ft = () => ({
  x: qp(),
  y: qp()
});
function kr(e) {
  return [e("x"), e("y")];
}
function Fg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function fM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function pM(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function ql(e) {
  return e === void 0 || e === 1;
}
function Yc({ scale: e, scaleX: t, scaleY: r }) {
  return !ql(e) || !ql(t) || !ql(r);
}
function kn(e) {
  return Yc(e) || Ng(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ng(e) {
  return Xp(e.x) || Xp(e.y);
}
function Xp(e) {
  return e && e !== "0%";
}
function hs(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Kp(e, t, r, n, o) {
  return o !== void 0 && (e = hs(e, o, n)), hs(e, r, n) + t;
}
function Gc(e, t = 0, r = 1, n, o) {
  e.min = Kp(e.min, t, r, n, o), e.max = Kp(e.max, t, r, n, o);
}
function jg(e, { x: t, y: r }) {
  Gc(e.x, t.translate, t.scale, t.originPoint), Gc(e.y, r.translate, r.scale, r.originPoint);
}
function hM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && oo(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, jg(e, i)), n && kn(a.latestValues) && oo(e, a.latestValues));
  }
  t.x = Zp(t.x), t.y = Zp(t.y);
}
function Zp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function ln(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Jp(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = at(e.min, e.max, a);
  Gc(e, t[r], t[n], i, t.scale);
}
const mM = ["x", "scaleX", "originX"], vM = ["y", "scaleY", "originY"];
function oo(e, t) {
  Jp(e.x, t, mM), Jp(e.y, t, vM);
}
function Bg(e, t) {
  return Fg(pM(e.getBoundingClientRect(), t));
}
function gM(e, t, r) {
  const n = Bg(e, r), { scroll: o } = t;
  return o && (ln(n.x, o.offset.x), ln(n.y, o.offset.y)), n;
}
const bM = /* @__PURE__ */ new WeakMap();
class yM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ft(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Us(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Zv(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), kr((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if ($r.test(h)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const b = g.layout.layoutBox[m];
            b && (h = Xt(b) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[m] = h;
      }), f && Qe.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: m } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = xM(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Mg(t, {
      onSessionStart: o,
      onStart: a,
      onMove: i,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && Qe.update(() => a(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !bi(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = iM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && to(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = sM(n.layoutBox, t) : this.constraints = !1, this.elastic = dM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && kr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = uM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !to(t))
      return !1;
    const n = t.current;
    xr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = gM(n, o.root, this.visualElement.getTransformPagePoint());
    let i = lM(o.layout.layoutBox, a);
    if (r) {
      const s = r(fM(i));
      this.hasMutatedConstraints = !!s, s && (i = Fg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = kr((u) => {
      if (!bi(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...d
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(ed(t, n, 0, r));
  }
  stopAnimation() {
    kr((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    kr((r) => {
      const { drag: n } = this.getProps();
      if (!bi(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - at(i, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!to(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    kr((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = cM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), kr((i) => {
      if (!bi(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(at(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    bM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Gr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      to(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Hr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (kr((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Hc, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: s
    };
  }
}
function bi(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function xM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class SM extends bn {
  constructor(t) {
    super(t), this.removeGroupControls = mt, this.removeListeners = mt, this.controls = new yM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || mt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qp = (e) => (t, r) => {
  e && Qe.update(() => e(t, r));
};
class wM extends bn {
  constructor() {
    super(...arguments), this.removePointerDownListener = mt;
  }
  onPointerDown(t) {
    this.session = new Mg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Qp(t),
      onStart: Qp(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && Qe.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Gr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function zg() {
  const e = ht(La);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = Ir();
  return ze(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function eV() {
  return CM(ht(La));
}
function CM(e) {
  return e === null ? !0 : e.isPresent;
}
const Vi = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function eh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Lo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = eh(e, t.target.x), n = eh(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, _M = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = vn.parse(e);
    if (o.length > 5)
      return n;
    const a = vn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = at(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class kM extends Rt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    MR(EM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), Vi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || Qe.postRender(() => {
      const s = i.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Vg(e) {
  const [t, r] = zg(), n = ht(Vu);
  return Rt.createElement(kM, { ...e, layoutGroup: n, switchLayoutGroup: ht(Mv), isPresent: t, safeToRemove: r });
}
const EM = {
  borderRadius: {
    ...Lo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Lo,
  borderTopRightRadius: Lo,
  borderBottomLeftRadius: Lo,
  borderBottomRightRadius: Lo,
  boxShadow: _M
}, Lg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], PM = Lg.length, th = (e) => typeof e == "string" ? parseFloat(e) : e, rh = (e) => typeof e == "number" || fe.test(e);
function TM(e, t, r, n, o, a) {
  o ? (e.opacity = at(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    AM(n)
  ), e.opacityExit = at(t.opacity !== void 0 ? t.opacity : 1, 0, OM(n))) : a && (e.opacity = at(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < PM; i++) {
    const s = `border${Lg[i]}Radius`;
    let l = nh(t, s), c = nh(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || rh(l) === rh(c) ? (e[s] = Math.max(at(th(l), th(c), n), 0), ($r.test(c) || $r.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = at(t.rotate || 0, r.rotate || 0, n));
}
function nh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const AM = Wg(0, 0.5, Ku), OM = Wg(0.5, 0.95, mt);
function Wg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r($a(e, t, n));
}
function oh(e, t) {
  e.min = t.min, e.max = t.max;
}
function Qt(e, t) {
  oh(e.x, t.x), oh(e.y, t.y);
}
function ah(e, t, r, n, o) {
  return e -= t, e = hs(e, 1 / r, n), o !== void 0 && (e = hs(e, 1 / o, n)), e;
}
function $M(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if ($r.test(t) && (t = parseFloat(t), t = at(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = at(a.min, a.max, n);
  e === a && (s -= t), e.min = ah(e.min, t, r, s, o), e.max = ah(e.max, t, r, s, o);
}
function ih(e, t, [r, n, o], a, i) {
  $M(e, t[r], t[n], t[o], t.scale, a, i);
}
const RM = ["x", "scaleX", "originX"], DM = ["y", "scaleY", "originY"];
function sh(e, t, r, n) {
  ih(e.x, t, RM, r ? r.x : void 0, n ? n.x : void 0), ih(e.y, t, DM, r ? r.y : void 0, n ? n.y : void 0);
}
function lh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ug(e) {
  return lh(e.x) && lh(e.y);
}
function qc(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function ch(e) {
  return Xt(e.x) / Xt(e.y);
}
class MM {
  constructor() {
    this.members = [];
  }
  add(t) {
    td(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (rd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const a = this.members[o];
      if (a.isPresent !== !1) {
        n = a;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function uh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const IM = (e, t) => e.depth - t.depth;
class FM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    td(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    rd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(IM), this.isDirty = !1, this.children.forEach(t);
  }
}
function NM(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (Qr(n), e(a - t));
  };
  return Qe.read(n, !0), () => Qr(n);
}
function jM(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function BM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function zM(e, t, r) {
  const n = Vt(e) ? e : Co(e);
  return n.start(ed("", n, t, r)), n.animation;
}
const dh = ["", "X", "Y", "Z"], fh = 1e3;
let VM = 0;
const En = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Hg({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = VM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        En.totalNodes = En.resolvedTargetDeltas = En.recalculatedProjection = 0, this.nodes.forEach(UM), this.nodes.forEach(XM), this.nodes.forEach(KM), this.nodes.forEach(HM), jM(En);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new FM());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new nd()), this.eventHandlers.get(i).add(s);
    }
    notifyListeners(i, ...s) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...s);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = BM(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = NM(f, 250), Vi.hasAnimatedSinceResize && (Vi.hasAnimatedSinceResize = !1, this.nodes.forEach(hh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || tI, { onLayoutAnimationStart: g, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !qc(this.targetLayout, m) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const E = {
            ...Og(h, "layout"),
            onPlay: g,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (E.delay = 0, E.type = !1), this.startAnimation(E);
        } else
          f || hh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Qr(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ZM), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ph);
        return;
      }
      this.isUpdating || this.nodes.forEach(GM), this.isUpdating = !1, this.nodes.forEach(qM), this.nodes.forEach(LM), this.nodes.forEach(WM), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = mn(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, po.update.process(ot), po.preRender.process(ot), po.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YM), this.sharedNodes.forEach(JM);
    }
    scheduleUpdateProjection() {
      Qe.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Qe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ft(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Ug(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || kn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), rI(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return ft();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (ln(s.x, l.offset.x), ln(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = ft();
      Qt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Qt(s, i);
            const { scroll: f } = this.root;
            f && (ln(s.x, -f.offset.x), ln(s.y, -f.offset.y));
          }
          ln(s.x, u.offset.x), ln(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = ft();
      Qt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && oo(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), kn(u.latestValues) && oo(l, u.latestValues);
      }
      return kn(this.latestValues) && oo(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = ft();
      Qt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !kn(c.latestValues))
          continue;
        Yc(c.latestValues) && c.updateSnapshot();
        const u = ft(), d = c.measurePageBox();
        Qt(u, d), sh(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return kn(this.latestValues) && sh(s, this.latestValues), s;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ot.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = ot.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), ca(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ft(), this.targetWithTransforms = ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), aM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox), jg(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), ca(this.relativeTargetOrigin, this.target, p.target), Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          En.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Yc(this.parent.latestValues) || Ng(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ot.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      hM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = no(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = no(), this.projectionDeltaWithTransform = no());
      const h = this.projectionTransform;
      la(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = uh(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), En.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = no();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = ft(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, g = this.getStack(), b = !g || g.members.length <= 1, y = !!(h && !b && this.options.crossfade === !0 && !this.path.some(eI));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (E) => {
        const C = E / 1e3;
        mh(d.x, i.x, C), mh(d.y, i.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ca(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), QM(this.relativeTarget, this.relativeTargetOrigin, f, C), S && qc(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = ft()), Qt(S, this.relativeTarget)), h && (this.animationValues = u, TM(u, c, this.latestValues, C, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Qr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Qe.update(() => {
        Vi.hasAnimatedSinceResize = !0, this.currentAnimation = zM(0, fh, {
          ...i,
          onUpdate: (s) => {
            this.mixTargetDelta(s), i.onUpdate && i.onUpdate(s);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && Yg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ft();
          const d = Xt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Xt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        Qt(s, l), oo(s, u), la(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new MM()), this.sharedNodes.get(i).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let s = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < dh.length; u++) {
        const d = "rotate" + dh[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var s, l;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = zi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = zi(i.pointerEvents) || ""), this.hasProjected && !kn(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = uh(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in ss) {
        if (f[h] === void 0)
          continue;
        const { correct: g, applyTo: b } = ss[h], y = c.transform === "none" ? f[h] : g(f[h], d);
        if (b) {
          const S = b.length;
          for (let E = 0; E < S; E++)
            c[b[E]] = y;
        } else
          c[h] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? zi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(ph), this.root.sharedNodes.clear();
    }
  };
}
function LM(e) {
  e.updateLayout();
}
function WM(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? kr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Xt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Yg(a, r.layoutBox, n) && kr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Xt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = no();
    la(s, n, r.layoutBox);
    const l = no();
    i ? la(l, e.applyTransform(o, !0), r.measuredBox) : la(l, n, r.layoutBox);
    const c = !Ug(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = ft();
          ca(m, r.layoutBox, f.layoutBox);
          const h = ft();
          ca(h, n, p.layoutBox), qc(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function UM(e) {
  En.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function HM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YM(e) {
  e.clearSnapshot();
}
function ph(e) {
  e.clearMeasurements();
}
function GM(e) {
  e.isLayoutDirty = !1;
}
function qM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function hh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function XM(e) {
  e.resolveTargetDelta();
}
function KM(e) {
  e.calcProjection();
}
function ZM(e) {
  e.resetRotation();
}
function JM(e) {
  e.removeLeadSnapshot();
}
function mh(e, t, r) {
  e.translate = at(t.translate, 0, r), e.scale = at(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function vh(e, t, r, n) {
  e.min = at(t.min, r.min, n), e.max = at(t.max, r.max, n);
}
function QM(e, t, r, n) {
  vh(e.x, t.x, r.x, n), vh(e.y, t.y, r.y, n);
}
function eI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tI = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function gh(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function rI(e) {
  gh(e.x), gh(e.y);
}
function Yg(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Uc(ch(t), ch(r), 0.2);
}
const nI = Hg({
  attachResizeListener: (e, t) => Hr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Xl = {
  current: void 0
}, Gg = Hg({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Xl.current) {
      const e = new nI({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Xl.current = e;
    }
    return Xl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), oI = {
  pan: {
    Feature: wM
  },
  drag: {
    Feature: SM,
    ProjectionNode: Gg,
    MeasureLayout: Vg
  }
}, aI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function iI(e) {
  const t = aI.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const sI = 4;
function Xc(e, t, r = 1) {
  xr(r <= sI, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = iI(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : Fc(o) ? Xc(o, t, r + 1) : o;
}
function lI(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!Fc(a))
      return;
    const i = Xc(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!Fc(a))
      continue;
    const i = Xc(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const cI = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), qg = (e) => cI.has(e), uI = (e) => Object.keys(e).some(qg), yi = (e) => e === Wn || e === fe, bh = (e, t) => parseFloat(e.split(", ")[t]), yh = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return bh(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? bh(a[1], e) : 0;
  }
}, dI = /* @__PURE__ */ new Set(["x", "y", "z"]), fI = Wa.filter((e) => !dI.has(e));
function pI(e) {
  const t = [];
  return fI.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const xh = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: yh(4, 13),
  y: yh(5, 14)
}, hI = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = xh[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = xh[c](l, a);
  }), e;
}, mI = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(qg);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Vo(u);
    const f = t[l];
    let p;
    if (cs(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Vo(u);
      for (let g = h; g < m && f[g] !== null; g++)
        p ? xr(Vo(f[g]) === p, "All keyframes must be of the same type") : (p = Vo(f[g]), xr(p === d || yi(d) && yi(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Vo(f);
    if (d !== p)
      if (yi(d) && yi(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === fe && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = pI(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = hI(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), zs && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function vI(e, t, r, n) {
  return uI(t) ? mI(e, t, r, n) : { target: t, transitionEnd: n };
}
const gI = (e, t, r, n) => {
  const o = lI(e, t, n);
  return t = o.target, n = o.transitionEnd, vI(e, t, r, n);
}, Kc = { current: null }, Xg = { current: !1 };
function bI() {
  if (Xg.current = !0, !!zs)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Kc.current = e.matches;
      e.addListener(t), t();
    } else
      Kc.current = !1;
}
function yI(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Vt(a))
      e.addValue(o, a), ps(n) && n.add(o), process.env.NODE_ENV === "development" && od(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Vt(i))
      e.addValue(o, Co(a, { owner: e })), ps(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Co(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Sh = /* @__PURE__ */ new WeakMap(), Kg = Object.keys(Aa), xI = Kg.length, wh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], SI = zu.length;
class wI {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Qe.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Ls(r), this.isVariantNode = Dv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Vt(f) && (f.set(s[d], !1), ps(c) && c.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Sh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Xg.current || bI(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Kc.current, process.env.NODE_ENV !== "production" && od(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Sh.delete(this.current), this.projection && this.projection.unmount(), Qr(this.notifyUpdate), Qr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ln.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && Qe.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), a = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), a();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, a) {
    let i, s;
    if (process.env.NODE_ENV !== "production" && o && n) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      r.ignoreStrict ? Ya(!1, l) : xr(!1, l);
    }
    for (let l = 0; l < xI; l++) {
      const c = Kg[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = Aa[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && to(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: a,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ft();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < wh.length; n++) {
      const o = wh[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = yI(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < SI; n++) {
      const o = zu[n], a = this.props[o];
      (Ta(a) || a === !1) && (r[o] = a);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = Co(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Xu(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Vt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new nd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Zg extends wI {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, a) {
    let i = VD(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      BD(this, n, i);
      const s = gI(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function CI(e) {
  return window.getComputedStyle(e);
}
class _I extends Zg {
  readValueFromInstance(t, r) {
    if (Ln.has(r)) {
      const n = Qu(r);
      return n && n.default || 0;
    } else {
      const n = CI(t), o = (Nv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Bg(t, r);
  }
  build(t, r, n, o) {
    Wu(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return qu(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Vt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Wv(t, r, n, o);
  }
}
class kI extends Zg {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ln.has(r)) {
      const n = Qu(r);
      return n && n.default || 0;
    }
    return r = Uv.has(r) ? r : Gu(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ft();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Yv(t, r);
  }
  build(t, r, n, o) {
    Hu(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Hv(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Yu(t.tagName), super.mount(t);
  }
}
const EI = (e, t) => Lu(e) ? new kI(t, { enableHardwareAcceleration: !1 }) : new _I(t, { enableHardwareAcceleration: !0 }), PI = {
  layout: {
    ProjectionNode: Gg,
    MeasureLayout: Vg
  }
}, TI = {
  ...tM,
  ..._2,
  ...oI,
  ...PI
}, yn = /* @__PURE__ */ RR((e, t) => s2(e, t, TI, EI));
function Jg() {
  const e = ye(!1);
  return is(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function AI() {
  const e = Jg(), [t, r] = et(0), n = q(() => {
    e.current && r(t + 1);
  }, [t]);
  return [q(() => Qe.postRender(n), [n]), t];
}
class OI extends U.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function $I({ children: e, isPresent: t }) {
  const r = Ir(), n = ye(null), o = ye({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return im(() => {
    const { width: a, height: i, top: s, left: l } = o.current;
    if (t || !n.current || !a || !i)
      return;
    n.current.dataset.motionPopId = r;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), U.createElement(OI, { isPresent: t, childRef: n, sizeRef: o }, U.cloneElement(e, { ref: n }));
}
const Kl = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = Gv(RI), l = Ir(), c = _t(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (u) => {
        s.set(u, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (u) => (s.set(u, !1), () => s.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    a ? void 0 : [r]
  );
  return _t(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), U.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = U.createElement($I, { isPresent: r }, e)), U.createElement(La.Provider, { value: c }, e);
};
function RI() {
  return /* @__PURE__ */ new Map();
}
function DI(e) {
  return ze(() => () => e(), []);
}
const Jn = (e) => e.key || "";
function MI(e, t) {
  e.forEach((r) => {
    const n = Jn(r);
    t.set(n, r);
  });
}
function II(e) {
  const t = [];
  return Cs.forEach(e, (r) => {
    fu(r) && t.push(r);
  }), t;
}
const $o = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  xr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = ht(Vu).forceRender || AI()[0], l = Jg(), c = II(e);
  let u = c;
  const d = ye(/* @__PURE__ */ new Map()).current, f = ye(u), p = ye(/* @__PURE__ */ new Map()).current, m = ye(!0);
  if (is(() => {
    m.current = !1, MI(c, p), f.current = u;
  }), DI(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return U.createElement(U.Fragment, null, u.map((y) => U.createElement(Kl, { key: Jn(y), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, y)));
  u = [...u];
  const h = f.current.map(Jn), g = c.map(Jn), b = h.length;
  for (let y = 0; y < b; y++) {
    const S = h[y];
    g.indexOf(S) === -1 && !d.has(S) && d.set(S, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((y, S) => {
    if (g.indexOf(S) !== -1)
      return;
    const E = p.get(S);
    if (!E)
      return;
    const C = h.indexOf(S);
    let I = y;
    if (!I) {
      const T = () => {
        p.delete(S), d.delete(S);
        const N = f.current.findIndex((V) => V.key === S);
        if (f.current.splice(N, 1), !d.size) {
          if (f.current = c, l.current === !1)
            return;
          s(), n && n();
        }
      };
      I = U.createElement(Kl, { key: Jn(E), isPresent: !1, onExitComplete: T, custom: t, presenceAffectsLayout: a, mode: i }, E), d.set(S, I);
    }
    u.splice(C, 0, I);
  }), u = u.map((y) => {
    const S = y.key;
    return d.has(S) ? y : U.createElement(Kl, { key: Jn(y), isPresent: !0, presenceAffectsLayout: a, mode: i }, y);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), U.createElement(U.Fragment, null, d.size ? u : u.map((y) => ws(y)));
};
var Ch = {
  path: /* @__PURE__ */ W.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ W.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ W.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ W.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Qg = Ue((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = bt("chakra-icon", s), d = ju("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: a,
    className: u,
    __css: f
  }, m = n ?? Ch.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ W.jsx(ke.svg, { as: r, ...p, ...c });
  const h = i ?? Ch.path;
  return /* @__PURE__ */ W.jsx(ke.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
Qg.displayName = "Icon";
function FI(e) {
  return /* @__PURE__ */ W.jsx(Qg, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ W.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var eb = Ue(
  function(t, r) {
    const n = ju("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Ba(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ W.jsx(
      ke.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: a,
        __css: {
          ...l,
          ...n,
          ...i
        },
        ...s,
        children: o || /* @__PURE__ */ W.jsx(FI, { width: "1em", height: "1em" })
      }
    );
  }
);
eb.displayName = "CloseButton";
var NI = Object.defineProperty, jI = (e, t, r) => t in e ? NI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, lt = (e, t, r) => (jI(e, typeof t != "symbol" ? t + "" : t, r), r);
function _h(e) {
  return e.sort((t, r) => {
    const n = t.compareDocumentPosition(r);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var BI = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function kh(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Eh(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var Zc = typeof window < "u" ? Ss : ze, ms = (e) => e, zI = class {
  constructor() {
    lt(this, "descendants", /* @__PURE__ */ new Map()), lt(this, "register", (e) => {
      if (e != null)
        return BI(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), lt(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = _h(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), lt(this, "destroy", () => {
      this.descendants.clear();
    }), lt(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), lt(this, "count", () => this.descendants.size), lt(this, "enabledCount", () => this.enabledValues().length), lt(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), lt(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), lt(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), lt(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), lt(this, "first", () => this.item(0)), lt(this, "firstEnabled", () => this.enabledItem(0)), lt(this, "last", () => this.item(this.descendants.size - 1)), lt(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), lt(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), lt(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), lt(this, "next", (e, t = !0) => {
      const r = kh(e, this.count(), t);
      return this.item(r);
    }), lt(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = kh(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), lt(this, "prev", (e, t = !0) => {
      const r = Eh(e, this.count() - 1, t);
      return this.item(r);
    }), lt(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Eh(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), lt(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = _h(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function VI(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Pt(...e) {
  return (t) => {
    e.forEach((r) => {
      VI(r, t);
    });
  };
}
function rV(...e) {
  return _t(() => Pt(...e), e);
}
function LI() {
  const e = ye(new zI());
  return Zc(() => () => e.current.destroy()), e.current;
}
var [WI, tb] = lr({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function UI(e) {
  const t = tb(), [r, n] = et(-1), o = ye(null);
  Zc(() => () => {
    o.current && t.unregister(o.current);
  }, []), Zc(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = ms(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: Pt(a, o)
  };
}
function HI() {
  return [
    ms(WI),
    () => ms(tb()),
    () => LI(),
    (o) => UI(o)
  ];
}
function ad(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = qt(n), i = qt(o), [s, l] = et(r), c = t !== void 0, u = c ? t : s, d = qt(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var Jc = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Wo = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function Qc(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Wo.slideRight;
    case "left":
      return Wo.slideLeft;
    case "bottom":
      return Wo.slideDown;
    case "top":
      return Wo.slideUp;
    default:
      return Wo.slideRight;
  }
}
var In = {
  enter: {
    duration: 0.2,
    ease: Jc.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Jc.easeIn
  }
}, Xr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, YI = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Xr.enter(In.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : Xr.exit(In.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, rb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: YI
}, GI = Tt(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ W.jsx($o, { custom: f, children: d && /* @__PURE__ */ W.jsx(
    yn.div,
    {
      ref: r,
      className: bt("chakra-fade", a),
      custom: f,
      ...rb,
      animate: u,
      ...c
    }
  ) });
});
GI.displayName = "Fade";
var qI = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Xr.exit(In.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : Xr.enter(In.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, nb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: qI
}, XI = Tt(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      initialScale: i = 0.95,
      className: s,
      transition: l,
      transitionEnd: c,
      delay: u,
      ...d
    } = t, f = n ? o && n : !0, p = o || n ? "enter" : "exit", m = { initialScale: i, reverse: a, transition: l, transitionEnd: c, delay: u };
    return /* @__PURE__ */ W.jsx($o, { custom: m, children: f && /* @__PURE__ */ W.jsx(
      yn.div,
      {
        ref: r,
        className: bt("chakra-offset-slide", s),
        ...nb,
        animate: p,
        custom: m,
        ...d
      }
    ) });
  }
);
XI.displayName = "ScaleFade";
var KI = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Xr.exit(In.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Xr.enter(In.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : Xr.exit(In.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, eu = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: KI
}, ZI = Tt(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      className: i,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: c,
      transitionEnd: u,
      delay: d,
      ...f
    } = t, p = n ? o && n : !0, m = o || n ? "enter" : "exit", h = {
      offsetX: s,
      offsetY: l,
      reverse: a,
      transition: c,
      transitionEnd: u,
      delay: d
    };
    return /* @__PURE__ */ W.jsx($o, { custom: h, children: p && /* @__PURE__ */ W.jsx(
      yn.div,
      {
        ref: r,
        className: bt("chakra-offset-slide", i),
        custom: h,
        ...eu,
        animate: m,
        ...f
      }
    ) });
  }
);
ZI.displayName = "SlideFade";
var Ph = {
  exit: {
    duration: 0.15,
    ease: Jc.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, JI = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = Qc({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Xr.exit(Ph.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = Qc({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Xr.enter(Ph.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, ob = Tt(function(t, r) {
  const {
    direction: n = "right",
    style: o,
    unmountOnExit: a,
    in: i,
    className: s,
    transition: l,
    transitionEnd: c,
    delay: u,
    motionProps: d,
    ...f
  } = t, p = Qc({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, g = i || a ? "enter" : "exit", b = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ W.jsx($o, { custom: b, children: h && /* @__PURE__ */ W.jsx(
    yn.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: bt("chakra-slide", s),
      animate: g,
      exit: "exit",
      custom: b,
      variants: JI,
      style: m,
      ...d
    }
  ) });
});
ob.displayName = "Slide";
function QI(e) {
  return Cs.toArray(e).filter(
    (t) => fu(t)
  );
}
function eF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function tF(e, t) {
  let r = eF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function rF(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function vs(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function ab(e, t, r) {
  return (r - t) * e + t;
}
function tu(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = rF(r);
  return tF(n, o);
}
function ua(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function da(e, t, r, n) {
  const o = qt(r);
  return ze(() => {
    const a = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !a))
      return a.addEventListener(t, o, n), () => {
        a.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const a = typeof e == "function" ? e() : e ?? document;
    a == null || a.removeEventListener(t, o, n);
  };
}
function nF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var ru = { exports: {} }, Zl, Th;
function id() {
  if (Th)
    return Zl;
  Th = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zl = e, Zl;
}
var Jl, Ah;
function ib() {
  return Ah || (Ah = 1, Jl = Function.call.bind(Object.prototype.hasOwnProperty)), Jl;
}
var Ql, Oh;
function oF() {
  if (Oh)
    return Ql;
  Oh = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = id(), r = {}, n = ib();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (n(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = a[u](i, u, l, s, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ql = o, Ql;
}
var ec, $h;
function aF() {
  if ($h)
    return ec;
  $h = 1;
  var e = bu, t = vm(), r = id(), n = ib(), o = oF(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ec = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(M) {
      var F = M && (c && M[c] || M[u]);
      if (typeof F == "function")
        return F;
    }
    var f = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: S,
      element: E(),
      elementType: C(),
      instanceOf: I,
      node: B(),
      objectOf: N,
      oneOf: T,
      oneOfType: V,
      shape: ne,
      exact: J
    };
    function m(M, F) {
      return M === F ? M !== 0 || 1 / M === 1 / F : M !== M && F !== F;
    }
    function h(M, F) {
      this.message = M, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(M) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, z = 0;
      function P(j, w, H, A, Z, Y, ae) {
        if (A = A || f, Y = Y || H, ae !== r) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = A + ":" + H;
            !F[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[xe] = !0, z++);
          }
        }
        return w[H] == null ? j ? w[H] === null ? new h("The " + Z + " `" + Y + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new h("The " + Z + " `" + Y + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : M(w, H, A, Z, Y);
      }
      var O = P.bind(null, !1);
      return O.isRequired = P.bind(null, !0), O;
    }
    function b(M) {
      function F(z, P, O, j, w, H) {
        var A = z[P], Z = oe(A);
        if (Z !== M) {
          var Y = D(A);
          return new h(
            "Invalid " + j + " `" + w + "` of type " + ("`" + Y + "` supplied to `" + O + "`, expected ") + ("`" + M + "`."),
            { expectedType: M }
          );
        }
        return null;
      }
      return g(F);
    }
    function y() {
      return g(i);
    }
    function S(M) {
      function F(z, P, O, j, w) {
        if (typeof M != "function")
          return new h("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var H = z[P];
        if (!Array.isArray(H)) {
          var A = oe(H);
          return new h("Invalid " + j + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an array."));
        }
        for (var Z = 0; Z < H.length; Z++) {
          var Y = M(H, Z, O, j, w + "[" + Z + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return g(F);
    }
    function E() {
      function M(F, z, P, O, j) {
        var w = F[z];
        if (!s(w)) {
          var H = oe(w);
          return new h("Invalid " + O + " `" + j + "` of type " + ("`" + H + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(M);
    }
    function C() {
      function M(F, z, P, O, j) {
        var w = F[z];
        if (!e.isValidElementType(w)) {
          var H = oe(w);
          return new h("Invalid " + O + " `" + j + "` of type " + ("`" + H + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(M);
    }
    function I(M) {
      function F(z, P, O, j, w) {
        if (!(z[P] instanceof M)) {
          var H = M.name || f, A = de(z[P]);
          return new h("Invalid " + j + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return g(F);
    }
    function T(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function F(z, P, O, j, w) {
        for (var H = z[P], A = 0; A < M.length; A++)
          if (m(H, M[A]))
            return null;
        var Z = JSON.stringify(M, function(ae, $) {
          var xe = D($);
          return xe === "symbol" ? String($) : $;
        });
        return new h("Invalid " + j + " `" + w + "` of value `" + String(H) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return g(F);
    }
    function N(M) {
      function F(z, P, O, j, w) {
        if (typeof M != "function")
          return new h("Property `" + w + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var H = z[P], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + j + " `" + w + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an object."));
        for (var Z in H)
          if (n(H, Z)) {
            var Y = M(H, Z, O, j, w + "." + Z, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return g(F);
    }
    function V(M) {
      if (!Array.isArray(M))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var F = 0; F < M.length; F++) {
        var z = M[F];
        if (typeof z != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(z) + " at index " + F + "."
          ), i;
      }
      function P(O, j, w, H, A) {
        for (var Z = [], Y = 0; Y < M.length; Y++) {
          var ae = M[Y], $ = ae(O, j, w, H, A, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && Z.push($.data.expectedType);
        }
        var xe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + H + " `" + A + "` supplied to " + ("`" + w + "`" + xe + "."));
      }
      return g(P);
    }
    function B() {
      function M(F, z, P, O, j) {
        return Q(F[z]) ? null : new h("Invalid " + O + " `" + j + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return g(M);
    }
    function X(M, F, z, P, O) {
      return new h(
        (M || "React class") + ": " + F + " type `" + z + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function ne(M) {
      function F(z, P, O, j, w) {
        var H = z[P], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + j + " `" + w + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var Z in M) {
          var Y = M[Z];
          if (typeof Y != "function")
            return X(O, j, w, Z, D(Y));
          var ae = Y(H, Z, O, j, w + "." + Z, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return g(F);
    }
    function J(M) {
      function F(z, P, O, j, w) {
        var H = z[P], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + j + " `" + w + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = t({}, z[P], M);
        for (var Y in Z) {
          var ae = M[Y];
          if (n(M, Y) && typeof ae != "function")
            return X(O, j, w, Y, D(ae));
          if (!ae)
            return new h(
              "Invalid " + j + " `" + w + "` key `" + Y + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(z[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(M), null, "  ")
            );
          var $ = ae(H, Y, O, j, w + "." + Y, r);
          if ($)
            return $;
        }
        return null;
      }
      return g(F);
    }
    function Q(M) {
      switch (typeof M) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !M;
        case "object":
          if (Array.isArray(M))
            return M.every(Q);
          if (M === null || s(M))
            return !0;
          var F = d(M);
          if (F) {
            var z = F.call(M), P;
            if (F !== M.entries) {
              for (; !(P = z.next()).done; )
                if (!Q(P.value))
                  return !1;
            } else
              for (; !(P = z.next()).done; ) {
                var O = P.value;
                if (O && !Q(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(M, F) {
      return M === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function oe(M) {
      var F = typeof M;
      return Array.isArray(M) ? "array" : M instanceof RegExp ? "object" : ee(F, M) ? "symbol" : F;
    }
    function D(M) {
      if (typeof M > "u" || M === null)
        return "" + M;
      var F = oe(M);
      if (F === "object") {
        if (M instanceof Date)
          return "date";
        if (M instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function ce(M) {
      var F = D(M);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function de(M) {
      return !M.constructor || !M.constructor.name ? f : M.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, ec;
}
var tc, Rh;
function iF() {
  if (Rh)
    return tc;
  Rh = 1;
  var e = id();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, tc = function() {
    function n(i, s, l, c, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, tc;
}
if (process.env.NODE_ENV !== "production") {
  var sF = bu, lF = !0;
  ru.exports = aF()(sF.isElement, lF);
} else
  ru.exports = iF()();
var Ge = ru.exports;
const sb = /* @__PURE__ */ _s(Ge);
var nu = "data-focus-lock", lb = "data-focus-lock-disabled", cF = "data-no-focus-lock", uF = "data-autofocus-inside", dF = "data-no-autofocus";
function fF(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pF(e, t) {
  var r = et(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function cb(e, t) {
  return pF(t || null, function(r) {
    return e.forEach(function(n) {
      return fF(n, r);
    });
  });
}
var rc = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && sb.node;
var Tr = function() {
  return Tr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Tr.apply(this, arguments);
};
function ub(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function hF(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function db(e) {
  return e;
}
function fb(e, t) {
  t === void 0 && (t = db);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), r = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), r;
        }
      };
    }
  };
  return o;
}
function sd(e, t) {
  return t === void 0 && (t = db), fb(e, t);
}
function pb(e) {
  e === void 0 && (e = {});
  var t = fb(null);
  return t.options = Tr({ async: !0, ssr: !1 }, e), t;
}
var hb = function(e) {
  var t = e.sideCar, r = ub(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return U.createElement(n, Tr({}, r));
};
hb.isSideCarExport = !0;
function mF(e, t) {
  return e.useMedium(t), hb;
}
var mb = sd({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), vb = sd(), vF = sd(), gF = pb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), bF = [], ld = /* @__PURE__ */ U.forwardRef(function(t, r) {
  var n, o = U.useState(), a = o[0], i = o[1], s = U.useRef(), l = U.useRef(!1), c = U.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, g = t.allowTextSelection, b = t.group, y = t.className, S = t.whiteList, E = t.hasPositiveIndices, C = t.shards, I = C === void 0 ? bF : C, T = t.as, N = T === void 0 ? "div" : T, V = t.lockProps, B = V === void 0 ? {} : V, X = t.sideCar, ne = t.returnFocus, J = t.focusOptions, Q = t.onActivation, ee = t.onDeactivation, oe = U.useState({}), D = oe[0], ce = U.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && Q && Q(s.current), l.current = !0;
  }, [Q]), de = U.useCallback(function() {
    l.current = !1, ee && ee(s.current);
  }, [ee]);
  ze(function() {
    d || (c.current = null);
  }, []);
  var M = U.useCallback(function(A) {
    var Z = c.current;
    if (Z && Z.focus) {
      var Y = typeof ne == "function" ? ne(Z) : ne;
      if (Y) {
        var ae = typeof Y == "object" ? Y : void 0;
        c.current = null, A ? Promise.resolve().then(function() {
          return Z.focus(ae);
        }) : Z.focus(ae);
      }
    }
  }, [ne]), F = U.useCallback(function(A) {
    l.current && mb.useMedium(A);
  }, []), z = vb.useMedium, P = U.useCallback(function(A) {
    s.current !== A && (s.current = A, i(A));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof g < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), U.useEffect(function() {
    !s.current && typeof N != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var O = Nn((n = {}, n[lb] = d && "disabled", n[nu] = b, n), B), j = f !== !0, w = j && f !== "tail", H = cb([r, P]);
  return /* @__PURE__ */ U.createElement(U.Fragment, null, j && [
    // nearest focus guard
    /* @__PURE__ */ U.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: rc
    }),
    // first tabbed element guard
    E ? /* @__PURE__ */ U.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: rc
    }) : null
  ], !d && /* @__PURE__ */ U.createElement(X, {
    id: D,
    sideCar: gF,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: h,
    whiteList: S,
    shards: I,
    onActivation: ce,
    onDeactivation: de,
    returnFocus: M,
    focusOptions: J
  }), /* @__PURE__ */ U.createElement(N, Nn({
    ref: H
  }, O, {
    className: y,
    onBlur: z,
    onFocus: F
  }), u), w && /* @__PURE__ */ U.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: rc
  }));
});
ld.propTypes = process.env.NODE_ENV !== "production" ? {
  children: Ge.node,
  disabled: Ge.bool,
  returnFocus: Ge.oneOfType([Ge.bool, Ge.object, Ge.func]),
  focusOptions: Ge.object,
  noFocusGuards: Ge.bool,
  hasPositiveIndices: Ge.bool,
  allowTextSelection: Ge.bool,
  autoFocus: Ge.bool,
  persistentFocus: Ge.bool,
  crossFrame: Ge.bool,
  group: Ge.string,
  className: Ge.string,
  whiteList: Ge.func,
  shards: Ge.arrayOf(Ge.any),
  as: Ge.oneOfType([Ge.string, Ge.func, Ge.object]),
  lockProps: Ge.object,
  onActivation: Ge.func,
  onDeactivation: Ge.func,
  sideCar: Ge.any.isRequired
} : {};
ld.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const gb = ld;
function yF(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    if (process.env.NODE_ENV !== "production" && typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [], i;
    function s() {
      i = e(a.map(function(c) {
        return c.props;
      })), t(i);
    }
    var l = /* @__PURE__ */ function(c) {
      d0(u, c);
      function u() {
        return c.apply(this, arguments) || this;
      }
      u.peek = function() {
        return i;
      };
      var d = u.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = a.indexOf(this);
        a.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ Rt.createElement(o, this.props);
      }, u;
    }(a0);
    return pu(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Fr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, gs = function(e) {
  return Array.isArray(e) ? e : [e];
}, bb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, xF = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, yb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, xb = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, SF = function(e, t) {
  return !e || xb(e) || !xF(e) && t(yb(e));
}, Sb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = SF(t, Sb.bind(void 0, e));
  return e.set(t, n), n;
}, wF = function(e, t) {
  return e && !xb(e) ? kF(e) ? t(yb(e)) : !1 : !0;
}, wb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = wF(t, wb.bind(void 0, e));
  return e.set(t, n), n;
}, Cb = function(e) {
  return e.dataset;
}, CF = function(e) {
  return e.tagName === "BUTTON";
}, _b = function(e) {
  return e.tagName === "INPUT";
}, kb = function(e) {
  return _b(e) && e.type === "radio";
}, _F = function(e) {
  return !((_b(e) || CF(e)) && (e.type === "hidden" || e.disabled));
}, kF = function(e) {
  var t = e.getAttribute(dF);
  return ![!0, "true", ""].includes(t);
}, cd = function(e) {
  var t;
  return !!(e && (!((t = Cb(e)) === null || t === void 0) && t.focusGuard));
}, bs = function(e) {
  return !cd(e);
}, EF = function(e) {
  return !!e;
}, PF = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Eb = function(e, t, r) {
  return Fr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(PF);
}, TF = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], ud = TF.join(","), AF = "".concat(ud, ", [data-focus-guard]"), Pb = function(e, t) {
  return Fr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? AF : ud) ? [n] : [], Pb(n));
  }, []);
}, OF = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Gs([e.contentDocument.body], t) : [e];
}, Gs = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = Pb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return OF(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Fr(n.parentNode.querySelectorAll(ud)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, $F = function(e) {
  var t = e.querySelectorAll("[".concat(uF, "]"));
  return Fr(t).map(function(r) {
    return Gs([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, dd = function(e, t) {
  return Fr(e).filter(function(r) {
    return Sb(t, r);
  }).filter(function(r) {
    return _F(r);
  });
}, Dh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Fr(e).filter(function(r) {
    return wb(t, r);
  });
}, ou = function(e, t, r) {
  return Eb(dd(Gs(e, r), t), !0, r);
}, Mh = function(e, t) {
  return Eb(dd(Gs(e), t), !1);
}, RF = function(e, t) {
  return dd($F(e), t);
}, ho = function(e, t) {
  return e.shadowRoot ? ho(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Fr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? ho(o, t) : !1;
    }
    return ho(r, t);
  });
}, DF = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, Tb = function(e) {
  return e.parentNode ? Tb(e.parentNode) : e;
}, fd = function(e) {
  var t = gs(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(nu);
    return r.push.apply(r, o ? DF(Fr(Tb(n).querySelectorAll("[".concat(nu, '="').concat(o, '"]:not([').concat(lb, '="disabled"])')))) : [n]), r;
  }, []);
}, MF = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ra = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ra(t.shadowRoot) : t instanceof HTMLIFrameElement && MF(function() {
      return t.contentWindow.document;
    }) ? Ra(t.contentWindow.document) : t;
  }
}, IF = function(e, t) {
  return e === t;
}, FF = function(e, t) {
  return !!Fr(e.querySelectorAll("iframe")).some(function(r) {
    return IF(r, t);
  });
}, Ab = function(e, t) {
  return t === void 0 && (t = Ra(bb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : fd(e).some(function(r) {
    return ho(r, t) || FF(r, t);
  });
}, NF = function(e) {
  e === void 0 && (e = document);
  var t = Ra(e);
  return t ? Fr(e.querySelectorAll("[".concat(cF, "]"))).some(function(r) {
    return ho(r, t);
  }) : !1;
}, jF = function(e, t) {
  return t.filter(kb).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, pd = function(e, t) {
  return kb(e) && e.name ? jF(e, t) : e;
}, BF = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(pd(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Ih = function(e) {
  return e[0] && e.length > 1 ? pd(e[0], e) : e[0];
}, Fh = function(e, t) {
  return e.length > 1 ? e.indexOf(pd(e[t], e)) : t;
}, Ob = "NEW_FOCUS", zF = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = cd(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = BF(t), h = r !== void 0 ? m.indexOf(r) : -1, g = h - (n ? m.indexOf(n) : l), b = Fh(e, 0), y = Fh(e, o - 1);
    if (l === -1 || u === -1)
      return Ob;
    if (!d && u >= 0)
      return u;
    if (l <= f && s && Math.abs(d) > 1)
      return y;
    if (l >= p && s && Math.abs(d) > 1)
      return b;
    if (d && Math.abs(g) > 1)
      return u;
    if (l <= f)
      return y;
    if (l > p)
      return b;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, VF = function(e) {
  return function(t) {
    var r, n = (r = Cb(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, LF = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Dh(n.filter(VF(r)));
  return o && o.length ? Ih(o) : Ih(Dh(t));
}, au = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && au(e.parentNode.host || e.parentNode, t), t;
}, nc = function(e, t) {
  for (var r = au(e), n = au(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, $b = function(e, t, r) {
  var n = gs(e), o = gs(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = nc(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = nc(a, l);
      c && (!i || ho(c, i) ? i = c : i = nc(c, i));
    });
  }), i;
}, WF = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(RF(n, t));
  }, []);
}, UF = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(EF);
}, HF = function(e, t) {
  var r = Ra(gs(e).length > 0 ? document : bb(e).ownerDocument), n = fd(e).filter(bs), o = $b(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Mh(n, a), s = ou(n, a).filter(function(p) {
    var m = p.node;
    return bs(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Mh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = UF(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = zF(u, l, r, t);
    if (d === Ob) {
      var f = LF(i, u, WF(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, YF = function(e) {
  var t = fd(e).filter(bs), r = $b(e, e, t), n = /* @__PURE__ */ new Map(), o = ou([r], n, !0), a = ou(t, n).filter(function(i) {
    var s = i.node;
    return bs(s);
  }).map(function(i) {
    var s = i.node;
    return s;
  });
  return o.map(function(i) {
    var s = i.node, l = i.index;
    return {
      node: s,
      index: l,
      lockItem: a.indexOf(s) >= 0,
      guard: cd(s)
    };
  });
}, GF = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, oc = 0, ac = !1, Rb = function(e, t, r) {
  r === void 0 && (r = {});
  var n = HF(e, t);
  if (!ac && n) {
    if (oc > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ac = !0, setTimeout(function() {
        ac = !1;
      }, 1);
      return;
    }
    oc++, GF(n.node, r.focusOptions), oc--;
  }
};
function Db(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var qF = function() {
  return document && document.activeElement === document.body;
}, XF = function() {
  return qF() || NF();
}, mo = null, ao = null, vo = null, Da = !1, KF = function() {
  return !0;
}, ZF = function(t) {
  return (mo.whiteList || KF)(t);
}, JF = function(t, r) {
  vo = {
    observerNode: t,
    portaledElement: r
  };
}, QF = function(t) {
  return vo && vo.portaledElement === t;
};
function Nh(e, t, r, n) {
  var o = null, a = e;
  do {
    var i = n[a];
    if (i.guard)
      i.node.dataset.focusAutoGuard && (o = i);
    else if (i.lockItem) {
      if (a !== e)
        return;
      o = null;
    } else
      break;
  } while ((a += r) !== t);
  o && (o.node.tabIndex = 0);
}
var e5 = function(t) {
  return t && "current" in t ? t.current : t;
}, t5 = function(t) {
  return t ? !!Da : Da === "meanwhile";
}, r5 = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, n5 = function(t, r) {
  return r.some(function(n) {
    return r5(t, n, n);
  });
}, ys = function() {
  var t = !1;
  if (mo) {
    var r = mo, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || vo && vo.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(e5).filter(Boolean));
      if ((!u || ZF(u)) && (o || t5(s) || !XF() || !ao && a) && (c && !// active element is "inside" working area
      (Ab(d) || // check for shadow-dom contained elements
      u && n5(u, d) || QF(u)) && (document && !ao && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = Rb(d, ao, {
        focusOptions: l
      }), vo = {})), Da = !1, ao = document && document.activeElement), document) {
        var f = document && document.activeElement, p = YF(d), m = p.map(function(h) {
          var g = h.node;
          return g;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var g = h.guard, b = h.node;
          return g && b.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var g = h.node;
          return g.removeAttribute("tabIndex");
        }), Nh(m, p.length, 1, p), Nh(m, -1, -1, p));
      }
    }
  }
  return t;
}, Mb = function(t) {
  ys() && t && (t.stopPropagation(), t.preventDefault());
}, hd = function() {
  return Db(ys);
}, o5 = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || JF(n, r);
}, a5 = function() {
  return null;
};
process.env.NODE_ENV !== "production" && sb.node.isRequired;
var Ib = function() {
  Da = "just", setTimeout(function() {
    Da = "meanwhile";
  }, 0);
}, i5 = function() {
  document.addEventListener("focusin", Mb), document.addEventListener("focusout", hd), window.addEventListener("blur", Ib);
}, s5 = function() {
  document.removeEventListener("focusin", Mb), document.removeEventListener("focusout", hd), window.removeEventListener("blur", Ib);
};
function l5(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function c5(e) {
  var t = e.slice(-1)[0];
  t && !mo && i5();
  var r = mo, n = r && t && t.id === r.id;
  mo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (ao = null, (!n || r.observed !== t.observed) && t.onActivation(), ys(), Db(ys)) : (s5(), ao = null);
}
mb.assignSyncMedium(o5);
vb.assignMedium(hd);
vF.assignMedium(function(e) {
  return e({
    moveFocusInside: Rb,
    focusInside: Ab
  });
});
const u5 = yF(l5, c5)(a5);
var Fb = /* @__PURE__ */ U.forwardRef(function(t, r) {
  return /* @__PURE__ */ U.createElement(gb, Nn({
    sideCar: u5,
    ref: r
  }, t));
}), Nb = gb.propTypes || {};
Nb.sideCar;
var d5 = nF(Nb, ["sideCar"]);
Fb.propTypes = process.env.NODE_ENV !== "production" ? d5 : {};
const jh = Fb;
function jb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function md(e) {
  var t;
  if (!jb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function f5(e) {
  var t, r;
  return (r = (t = Bb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Bb(e) {
  return jb(e) ? e.ownerDocument : document;
}
function p5(e) {
  return Bb(e).activeElement;
}
function h5(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function m5(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function zb(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : md(e) && h5(e) ? e : zb(m5(e));
}
var Vb = (e) => e.hasAttribute("tabindex"), v5 = (e) => Vb(e) && e.tabIndex === -1;
function g5(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Lb(e) {
  return e.parentElement && Lb(e.parentElement) ? !0 : e.hidden;
}
function b5(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Wb(e) {
  if (!md(e) || Lb(e) || g5(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : b5(e) ? !0 : Vb(e);
}
function y5(e) {
  return e ? md(e) && Wb(e) && !v5(e) : !1;
}
var x5 = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], S5 = x5.join(), w5 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function Ub(e) {
  const t = Array.from(
    e.querySelectorAll(S5)
  );
  return t.unshift(e), t.filter((r) => Wb(r) && w5(r));
}
var Bh, C5 = (Bh = jh.default) != null ? Bh : jh, Hb = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: a,
    isDisabled: i,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: c
  } = e, u = q(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && Ub(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = q(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ W.jsx(
    C5,
    {
      crossFrame: c,
      persistentFocus: l,
      autoFocus: s,
      disabled: i,
      onActivation: u,
      onDeactivation: d,
      returnFocus: f,
      children: a
    }
  );
};
Hb.displayName = "FocusLock";
var Yb = ke("div");
Yb.displayName = "Box";
var Gb = Ue(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ W.jsx(
    Yb,
    {
      ref: r,
      boxSize: n,
      __css: {
        ...i,
        flexShrink: 0,
        flexGrow: 0
      },
      ...a
    }
  );
});
Gb.displayName = "Square";
var _5 = Ue(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ W.jsx(Gb, { size: n, ref: r, borderRadius: "9999px", ...o });
});
_5.displayName = "Circle";
var k5 = Ue(function(t, r) {
  const { direction: n, align: o, justify: a, wrap: i, basis: s, grow: l, shrink: c, ...u } = t, d = {
    display: "flex",
    flexDirection: n,
    alignItems: o,
    justifyContent: a,
    flexWrap: i,
    flexBasis: s,
    flexGrow: l,
    flexShrink: c
  };
  return /* @__PURE__ */ W.jsx(ke.div, { ref: r, __css: d, ...u });
});
k5.displayName = "Flex";
function E5(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function P5(e = {}) {
  const { timeout: t = 300, preventDefault: r = () => !0 } = e, [n, o] = et([]), a = ye(), i = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, s = () => {
    i(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  ze(() => i, []);
  function l(c) {
    return (u) => {
      if (u.key === "Backspace") {
        const d = [...n];
        d.pop(), o(d);
        return;
      }
      if (E5(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
function T5(e, t, r, n) {
  if (t == null)
    return n;
  if (!n)
    return e.find(
      (i) => r(i).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (a) => r(a).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let a;
    return o.includes(n) ? (a = o.indexOf(n) + 1, a === o.length && (a = 0), o[a]) : (a = e.indexOf(o[0]), e[a]);
  }
  return n;
}
function A5() {
  const e = ye(/* @__PURE__ */ new Map()), t = e.current, r = q((o, a, i, s) => {
    e.current.set(i, { type: a, el: o, options: s }), o.addEventListener(a, i, s);
  }, []), n = q(
    (o, a, i, s) => {
      o.removeEventListener(a, i, s), e.current.delete(i);
    },
    []
  );
  return ze(
    () => () => {
      t.forEach((o, a) => {
        n(o.el, o.type, a, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
function ic(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function O5(e = {}) {
  const {
    ref: t,
    isDisabled: r,
    isFocusable: n,
    clickOnEnter: o = !0,
    clickOnSpace: a = !0,
    onMouseDown: i,
    onMouseUp: s,
    onClick: l,
    onKeyDown: c,
    onKeyUp: u,
    tabIndex: d,
    onMouseOver: f,
    onMouseLeave: p,
    ...m
  } = e, [h, g] = et(!0), [b, y] = et(!1), S = A5(), E = (D) => {
    D && D.tagName !== "BUTTON" && g(!1);
  }, C = h ? d : d || 0, I = r && !n, T = q(
    (D) => {
      if (r) {
        D.stopPropagation(), D.preventDefault();
        return;
      }
      D.currentTarget.focus(), l == null || l(D);
    },
    [r, l]
  ), N = q(
    (D) => {
      b && ic(D) && (D.preventDefault(), D.stopPropagation(), y(!1), S.remove(document, "keyup", N, !1));
    },
    [b, S]
  ), V = q(
    (D) => {
      if (c == null || c(D), r || D.defaultPrevented || D.metaKey || !ic(D.nativeEvent) || h)
        return;
      const ce = o && D.key === "Enter";
      a && D.key === " " && (D.preventDefault(), y(!0)), ce && (D.preventDefault(), D.currentTarget.click()), S.add(document, "keyup", N, !1);
    },
    [
      r,
      h,
      c,
      o,
      a,
      S,
      N
    ]
  ), B = q(
    (D) => {
      if (u == null || u(D), r || D.defaultPrevented || D.metaKey || !ic(D.nativeEvent) || h)
        return;
      a && D.key === " " && (D.preventDefault(), y(!1), D.currentTarget.click());
    },
    [a, h, r, u]
  ), X = q(
    (D) => {
      D.button === 0 && (y(!1), S.remove(document, "mouseup", X, !1));
    },
    [S]
  ), ne = q(
    (D) => {
      if (D.button !== 0)
        return;
      if (r) {
        D.stopPropagation(), D.preventDefault();
        return;
      }
      h || y(!0), D.currentTarget.focus({ preventScroll: !0 }), S.add(document, "mouseup", X, !1), i == null || i(D);
    },
    [r, h, i, S, X]
  ), J = q(
    (D) => {
      D.button === 0 && (h || y(!1), s == null || s(D));
    },
    [s, h]
  ), Q = q(
    (D) => {
      if (r) {
        D.preventDefault();
        return;
      }
      f == null || f(D);
    },
    [r, f]
  ), ee = q(
    (D) => {
      b && (D.preventDefault(), y(!1)), p == null || p(D);
    },
    [b, p]
  ), oe = Pt(t, E);
  return h ? {
    ...m,
    ref: oe,
    type: "button",
    "aria-disabled": I ? void 0 : r,
    disabled: I,
    onClick: T,
    onMouseDown: i,
    onMouseUp: s,
    onKeyUp: u,
    onKeyDown: c,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...m,
    ref: oe,
    role: "button",
    "data-active": Km(b),
    "aria-disabled": r ? "true" : void 0,
    tabIndex: I ? void 0 : C,
    onClick: T,
    onMouseDown: ne,
    onMouseUp: J,
    onKeyUp: B,
    onKeyDown: V,
    onMouseOver: Q,
    onMouseLeave: ee
  };
}
function $5(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = p5(t);
  return !r || t.contains(r) ? !1 : !!y5(r);
}
function R5(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  Oo(() => {
    if (!a || $5(e))
      return;
    const i = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (i)
      return s = requestAnimationFrame(() => {
        i.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [a, e, o]);
}
var D5 = {
  preventScroll: !0,
  shouldFocus: !1
};
function nV(e, t = D5) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = M5(e) ? e.current : e, s = o && a, l = ye(s), c = ye(a);
  Ji(() => {
    !c.current && a && (l.current = s), c.current = a;
  }, [a, s]);
  const u = q(() => {
    if (!(!a || !i || !l.current) && (l.current = !1, !i.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = Ub(i);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [a, n, i, r]);
  Oo(() => {
    u();
  }, [u]), da(i, "transitionend", u);
}
function M5(e) {
  return "current" in e;
}
var Gn = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), Ct = {
  arrowShadowColor: Gn("--popper-arrow-shadow-color"),
  arrowSize: Gn("--popper-arrow-size", "8px"),
  arrowSizeHalf: Gn("--popper-arrow-size-half"),
  arrowBg: Gn("--popper-arrow-bg"),
  transformOrigin: Gn("--popper-transform-origin"),
  arrowOffset: Gn("--popper-arrow-offset")
};
function I5(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var F5 = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, N5 = (e) => F5[e], zh = {
  scroll: !0,
  resize: !0
};
function j5(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...zh, ...e }
  } : t = {
    enabled: e,
    options: zh
  }, t;
}
var B5 = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, z5 = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Vh(e);
  },
  effect: ({ state: e }) => () => {
    Vh(e);
  }
}, Vh = (e) => {
  e.elements.popper.style.setProperty(
    Ct.transformOrigin.var,
    N5(e.placement)
  );
}, V5 = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    L5(e);
  }
}, L5 = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = W5(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: Ct.arrowSize.varRef,
      height: Ct.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [Ct.arrowSizeHalf.var]: `calc(${Ct.arrowSize.varRef} / 2 - 1px)`,
      [Ct.arrowOffset.var]: `calc(${Ct.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, W5 = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: Ct.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: Ct.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: Ct.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: Ct.arrowOffset.varRef };
}, U5 = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Lh(e);
  },
  effect: ({ state: e }) => () => {
    Lh(e);
  }
}, Lh = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = I5(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: Ct.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, H5 = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, Y5 = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function G5(e, t = "ltr") {
  var r, n;
  const o = ((r = H5[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = Y5[e]) != null ? n : o;
}
var jt = "top", ar = "bottom", ir = "right", Bt = "left", vd = "auto", qa = [jt, ar, ir, Bt], _o = "start", Ma = "end", q5 = "clippingParents", qb = "viewport", Uo = "popper", X5 = "reference", Wh = /* @__PURE__ */ qa.reduce(function(e, t) {
  return e.concat([t + "-" + _o, t + "-" + Ma]);
}, []), Xb = /* @__PURE__ */ [].concat(qa, [vd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _o, t + "-" + Ma]);
}, []), K5 = "beforeRead", Z5 = "read", J5 = "afterRead", Q5 = "beforeMain", eN = "main", tN = "afterMain", rN = "beforeWrite", nN = "write", oN = "afterWrite", aN = [K5, Z5, J5, Q5, eN, tN, rN, nN, oN];
function Dr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Kt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jn(e) {
  var t = Kt(e).Element;
  return e instanceof t || e instanceof Element;
}
function or(e) {
  var t = Kt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Kt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function iN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !or(a) || !Dr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function sN(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !or(o) || !Dr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const lN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: iN,
  effect: sN,
  requires: ["computeStyles"]
};
function Rr(e) {
  return e.split("-")[0];
}
var Fn = Math.max, xs = Math.min, ko = Math.round;
function iu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Kb() {
  return !/^((?!chrome|android).)*safari/i.test(iu());
}
function Eo(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && or(e) && (o = e.offsetWidth > 0 && ko(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ko(n.height) / e.offsetHeight || 1);
  var i = jn(e) ? Kt(e) : window, s = i.visualViewport, l = !Kb() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function bd(e) {
  var t = Eo(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Zb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && gd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function en(e) {
  return Kt(e).getComputedStyle(e);
}
function cN(e) {
  return ["table", "td", "th"].indexOf(Dr(e)) >= 0;
}
function xn(e) {
  return ((jn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function qs(e) {
  return Dr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (gd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    xn(e)
  );
}
function Uh(e) {
  return !or(e) || // https://github.com/popperjs/popper-core/issues/837
  en(e).position === "fixed" ? null : e.offsetParent;
}
function uN(e) {
  var t = /firefox/i.test(iu()), r = /Trident/i.test(iu());
  if (r && or(e)) {
    var n = en(e);
    if (n.position === "fixed")
      return null;
  }
  var o = qs(e);
  for (gd(o) && (o = o.host); or(o) && ["html", "body"].indexOf(Dr(o)) < 0; ) {
    var a = en(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Xa(e) {
  for (var t = Kt(e), r = Uh(e); r && cN(r) && en(r).position === "static"; )
    r = Uh(r);
  return r && (Dr(r) === "html" || Dr(r) === "body" && en(r).position === "static") ? t : r || uN(e) || t;
}
function yd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fa(e, t, r) {
  return Fn(e, xs(t, r));
}
function dN(e, t, r) {
  var n = fa(e, t, r);
  return n > r ? r : n;
}
function Jb() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qb(e) {
  return Object.assign({}, Jb(), e);
}
function ey(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var fN = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Qb(typeof t != "number" ? t : ey(t, qa));
};
function pN(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Rr(r.placement), l = yd(s), c = [Bt, ir].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = fN(o.padding, r), f = bd(a), p = l === "y" ? jt : Bt, m = l === "y" ? ar : ir, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], g = i[l] - r.rects.reference[l], b = Xa(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = h / 2 - g / 2, E = d[p], C = y - f[u] - d[m], I = y / 2 - f[u] / 2 + S, T = fa(E, I, C), N = l;
    r.modifiersData[n] = (t = {}, t[N] = T, t.centerOffset = T - I, t);
  }
}
function hN(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Zb(t.elements.popper, o) && (t.elements.arrow = o));
}
const mN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: pN,
  effect: hN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Po(e) {
  return e.split("-")[1];
}
var vN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function gN(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ko(r * o) / o || 0,
    y: ko(n * o) / o || 0
  };
}
function Hh(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = g.x, h = g.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), S = Bt, E = jt, C = window;
  if (c) {
    var I = Xa(r), T = "clientHeight", N = "clientWidth";
    if (I === Kt(r) && (I = xn(r), en(I).position !== "static" && s === "absolute" && (T = "scrollHeight", N = "scrollWidth")), I = I, o === jt || (o === Bt || o === ir) && a === Ma) {
      E = ar;
      var V = d && I === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[T]
      );
      h -= V - n.height, h *= l ? 1 : -1;
    }
    if (o === Bt || (o === jt || o === ar) && a === Ma) {
      S = ir;
      var B = d && I === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[N]
      );
      p -= B - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && vN), ne = u === !0 ? gN({
    x: p,
    y: h
  }, Kt(r)) : {
    x: p,
    y: h
  };
  if (p = ne.x, h = ne.y, l) {
    var J;
    return Object.assign({}, X, (J = {}, J[E] = y ? "0" : "", J[S] = b ? "0" : "", J.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", J));
  }
  return Object.assign({}, X, (t = {}, t[E] = y ? h + "px" : "", t[S] = b ? p + "px" : "", t.transform = "", t));
}
function bN(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Rr(t.placement),
    variation: Po(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const yN = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bN,
  data: {}
};
var xi = {
  passive: !0
};
function xN(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = Kt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, xi);
  }), s && l.addEventListener("resize", r.update, xi), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, xi);
    }), s && l.removeEventListener("resize", r.update, xi);
  };
}
const SN = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xN,
  data: {}
};
var wN = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Li(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wN[t];
  });
}
var CN = {
  start: "end",
  end: "start"
};
function Yh(e) {
  return e.replace(/start|end/g, function(t) {
    return CN[t];
  });
}
function xd(e) {
  var t = Kt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Sd(e) {
  return Eo(xn(e)).left + xd(e).scrollLeft;
}
function _N(e, t) {
  var r = Kt(e), n = xn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = Kb();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Sd(e),
    y: l
  };
}
function kN(e) {
  var t, r = xn(e), n = xd(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Fn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Fn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Sd(e), l = -n.scrollTop;
  return en(o || r).direction === "rtl" && (s += Fn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function wd(e) {
  var t = en(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ty(e) {
  return ["html", "body", "#document"].indexOf(Dr(e)) >= 0 ? e.ownerDocument.body : or(e) && wd(e) ? e : ty(qs(e));
}
function pa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ty(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Kt(n), i = o ? [a].concat(a.visualViewport || [], wd(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(pa(qs(i)))
  );
}
function su(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function EN(e, t) {
  var r = Eo(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Gh(e, t, r) {
  return t === qb ? su(_N(e, r)) : jn(t) ? EN(t, r) : su(kN(xn(e)));
}
function PN(e) {
  var t = pa(qs(e)), r = ["absolute", "fixed"].indexOf(en(e).position) >= 0, n = r && or(e) ? Xa(e) : e;
  return jn(n) ? t.filter(function(o) {
    return jn(o) && Zb(o, n) && Dr(o) !== "body";
  }) : [];
}
function TN(e, t, r, n) {
  var o = t === "clippingParents" ? PN(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = Gh(e, c, n);
    return l.top = Fn(u.top, l.top), l.right = xs(u.right, l.right), l.bottom = xs(u.bottom, l.bottom), l.left = Fn(u.left, l.left), l;
  }, Gh(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ry(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Rr(n) : null, a = n ? Po(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case jt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case ar:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case ir:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Bt:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? yd(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case _o:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Ma:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ia(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? q5 : s, c = r.rootBoundary, u = c === void 0 ? qb : c, d = r.elementContext, f = d === void 0 ? Uo : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, g = h === void 0 ? 0 : h, b = Qb(typeof g != "number" ? g : ey(g, qa)), y = f === Uo ? X5 : Uo, S = e.rects.popper, E = e.elements[m ? y : f], C = TN(jn(E) ? E : E.contextElement || xn(e.elements.popper), l, u, i), I = Eo(e.elements.reference), T = ry({
    reference: I,
    element: S,
    strategy: "absolute",
    placement: o
  }), N = su(Object.assign({}, S, T)), V = f === Uo ? N : I, B = {
    top: C.top - V.top + b.top,
    bottom: V.bottom - C.bottom + b.bottom,
    left: C.left - V.left + b.left,
    right: V.right - C.right + b.right
  }, X = e.modifiersData.offset;
  if (f === Uo && X) {
    var ne = X[o];
    Object.keys(B).forEach(function(J) {
      var Q = [ir, ar].indexOf(J) >= 0 ? 1 : -1, ee = [jt, ar].indexOf(J) >= 0 ? "y" : "x";
      B[J] += ne[ee] * Q;
    });
  }
  return B;
}
function AN(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Xb : l, u = Po(n), d = u ? s ? Wh : Wh.filter(function(m) {
    return Po(m) === u;
  }) : qa, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Ia(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Rr(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function ON(e) {
  if (Rr(e) === vd)
    return [];
  var t = Li(e);
  return [Yh(e), t, Yh(t)];
}
function $N(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, g = t.options.placement, b = Rr(g), y = b === g, S = l || (y || !m ? [Li(g)] : ON(g)), E = [g].concat(S).reduce(function(O, j) {
      return O.concat(Rr(j) === vd ? AN(t, {
        placement: j,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : j);
    }, []), C = t.rects.reference, I = t.rects.popper, T = /* @__PURE__ */ new Map(), N = !0, V = E[0], B = 0; B < E.length; B++) {
      var X = E[B], ne = Rr(X), J = Po(X) === _o, Q = [jt, ar].indexOf(ne) >= 0, ee = Q ? "width" : "height", oe = Ia(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), D = Q ? J ? ir : Bt : J ? ar : jt;
      C[ee] > I[ee] && (D = Li(D));
      var ce = Li(D), de = [];
      if (a && de.push(oe[ne] <= 0), s && de.push(oe[D] <= 0, oe[ce] <= 0), de.every(function(O) {
        return O;
      })) {
        V = X, N = !1;
        break;
      }
      T.set(X, de);
    }
    if (N)
      for (var M = m ? 3 : 1, F = function(j) {
        var w = E.find(function(H) {
          var A = T.get(H);
          if (A)
            return A.slice(0, j).every(function(Z) {
              return Z;
            });
        });
        if (w)
          return V = w, "break";
      }, z = M; z > 0; z--) {
        var P = F(z);
        if (P === "break")
          break;
      }
    t.placement !== V && (t.modifiersData[n]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const RN = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $N,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function qh(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Xh(e) {
  return [jt, ir, ar, Bt].some(function(t) {
    return e[t] >= 0;
  });
}
function DN(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Ia(t, {
    elementContext: "reference"
  }), s = Ia(t, {
    altBoundary: !0
  }), l = qh(i, n), c = qh(s, o, a), u = Xh(l), d = Xh(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const MN = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: DN
};
function IN(e, t, r) {
  var n = Rr(e), o = [Bt, jt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Bt, ir].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function FN(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Xb.reduce(function(u, d) {
    return u[d] = IN(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const NN = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: FN
};
function jN(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ry({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const BN = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jN,
  data: {}
};
function zN(e) {
  return e === "x" ? "y" : "x";
}
function VN(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, g = Ia(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), b = Rr(t.placement), y = Po(t.placement), S = !y, E = yd(b), C = zN(E), I = t.modifiersData.popperOffsets, T = t.rects.reference, N = t.rects.popper, V = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, B = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (I) {
    if (a) {
      var J, Q = E === "y" ? jt : Bt, ee = E === "y" ? ar : ir, oe = E === "y" ? "height" : "width", D = I[E], ce = D + g[Q], de = D - g[ee], M = p ? -N[oe] / 2 : 0, F = y === _o ? T[oe] : N[oe], z = y === _o ? -N[oe] : -T[oe], P = t.elements.arrow, O = p && P ? bd(P) : {
        width: 0,
        height: 0
      }, j = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Jb(), w = j[Q], H = j[ee], A = fa(0, T[oe], O[oe]), Z = S ? T[oe] / 2 - M - A - w - B.mainAxis : F - A - w - B.mainAxis, Y = S ? -T[oe] / 2 + M + A + H + B.mainAxis : z + A + H + B.mainAxis, ae = t.elements.arrow && Xa(t.elements.arrow), $ = ae ? E === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, xe = (J = X == null ? void 0 : X[E]) != null ? J : 0, pe = D + Z - xe - $, le = D + Y - xe, $e = fa(p ? xs(ce, pe) : ce, D, p ? Fn(de, le) : de);
      I[E] = $e, ne[E] = $e - D;
    }
    if (s) {
      var ge, Se = E === "x" ? jt : Bt, dt = E === "x" ? ar : ir, Ce = I[C], ct = C === "y" ? "height" : "width", tt = Ce + g[Se], De = Ce - g[dt], se = [jt, Bt].indexOf(b) !== -1, Te = (ge = X == null ? void 0 : X[C]) != null ? ge : 0, At = se ? tt : Ce - T[ct] - N[ct] - Te + B.altAxis, gt = se ? Ce + T[ct] + N[ct] - Te - B.altAxis : De, it = p && se ? dN(At, Ce, gt) : fa(p ? At : tt, Ce, p ? gt : De);
      I[C] = it, ne[C] = it - Ce;
    }
    t.modifiersData[n] = ne;
  }
}
const LN = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: VN,
  requiresIfExists: ["offset"]
};
function WN(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function UN(e) {
  return e === Kt(e) || !or(e) ? xd(e) : WN(e);
}
function HN(e) {
  var t = e.getBoundingClientRect(), r = ko(t.width) / e.offsetWidth || 1, n = ko(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function YN(e, t, r) {
  r === void 0 && (r = !1);
  var n = or(t), o = or(t) && HN(t), a = xn(t), i = Eo(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Dr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  wd(a)) && (s = UN(t)), or(t) ? (l = Eo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Sd(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function GN(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function qN(e) {
  var t = GN(e);
  return aN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function XN(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function KN(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Kh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Zh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function ZN(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Kh : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Kh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(b) {
        var y = typeof b == "function" ? b(u.options) : b;
        h(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = {
          reference: jn(s) ? pa(s) : s.contextElement ? pa(s.contextElement) : [],
          popper: pa(l)
        };
        var S = qN(KN([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(E) {
          return E.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var b = u.elements, y = b.reference, S = b.popper;
          if (Zh(y, S)) {
            u.rects = {
              reference: YN(y, Xa(S), u.options.strategy === "fixed"),
              popper: bd(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
              return u.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var E = 0; E < u.orderedModifiers.length; E++) {
              if (u.reset === !0) {
                u.reset = !1, E = -1;
                continue;
              }
              var C = u.orderedModifiers[E], I = C.fn, T = C.options, N = T === void 0 ? {} : T, V = C.name;
              typeof I == "function" && (u = I({
                state: u,
                options: N,
                name: V,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: XN(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Zh(s, l))
      return p;
    p.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function m() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, y = g.options, S = y === void 0 ? {} : y, E = g.effect;
        if (typeof E == "function") {
          var C = E({
            state: u,
            name: b,
            instance: p,
            options: S
          }), I = function() {
          };
          d.push(C || I);
        }
      });
    }
    function h() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
var JN = [SN, BN, yN, lN, NN, RN, LN, mN, MN], QN = /* @__PURE__ */ ZN({
  defaultModifiers: JN
});
function ny(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: a = 8,
    eventListeners: i = !0,
    offset: s,
    gutter: l = 8,
    flip: c = !0,
    boundary: u = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, m = ye(null), h = ye(null), g = ye(null), b = G5(n, p), y = ye(() => {
  }), S = q(() => {
    var B;
    !t || !m.current || !h.current || ((B = y.current) == null || B.call(y), g.current = QN(m.current, h.current, {
      placement: b,
      modifiers: [
        U5,
        V5,
        z5,
        {
          ...B5,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...j5(i)
        },
        {
          name: "arrow",
          options: { padding: a }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!c,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: u }
        },
        ...r ?? []
      ],
      strategy: o
    }), g.current.forceUpdate(), y.current = g.current.destroy);
  }, [
    b,
    t,
    r,
    f,
    i,
    a,
    s,
    l,
    c,
    d,
    u,
    o
  ]);
  ze(() => () => {
    var B;
    !m.current && !h.current && ((B = g.current) == null || B.destroy(), g.current = null);
  }, []);
  const E = q(
    (B) => {
      m.current = B, S();
    },
    [S]
  ), C = q(
    (B = {}, X = null) => ({
      ...B,
      ref: Pt(E, X)
    }),
    [E]
  ), I = q(
    (B) => {
      h.current = B, S();
    },
    [S]
  ), T = q(
    (B = {}, X = null) => ({
      ...B,
      ref: Pt(I, X),
      style: {
        ...B.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, I, f]
  ), N = q((B = {}, X = null) => {
    const { size: ne, shadowColor: J, bg: Q, style: ee, ...oe } = B;
    return {
      ...oe,
      ref: X,
      "data-popper-arrow": "",
      style: ej(B)
    };
  }, []), V = q(
    (B = {}, X = null) => ({
      ...B,
      ref: X,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var B;
      (B = g.current) == null || B.update();
    },
    forceUpdate() {
      var B;
      (B = g.current) == null || B.forceUpdate();
    },
    transformOrigin: Ct.transformOrigin.varRef,
    referenceRef: E,
    popperRef: I,
    getPopperProps: T,
    getArrowProps: N,
    getArrowInnerProps: V,
    getReferenceProps: C
  };
}
function ej(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function oy(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = qt(r), i = qt(t), [s, l] = et(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = Ir(), f = o ?? `disclosure-${d}`, p = q(() => {
    u || l(!1), i == null || i();
  }, [u, i]), m = q(() => {
    u || l(!0), a == null || a();
  }, [u, a]), h = q(() => {
    c ? p() : m();
  }, [c, m, p]);
  function g(y = {}) {
    return {
      ...y,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(S) {
        var E;
        (E = y.onClick) == null || E.call(y, S), h();
      }
    };
  }
  function b(y = {}) {
    return {
      ...y,
      hidden: !c,
      id: f
    };
  }
  return {
    isOpen: c,
    onOpen: m,
    onClose: p,
    onToggle: h,
    isControlled: u,
    getButtonProps: g,
    getDisclosureProps: b
  };
}
function tj(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = qt(r), i = ye({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  ze(() => {
    if (!n)
      return;
    const s = (d) => {
      sc(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && sc(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && sc(d, t) && (i.isPointerDown = !1, o(d));
    }, u = ay(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function sc(e, t) {
  var r;
  const n = e.target;
  return n && !ay(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function ay(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function rj(e) {
  const { isOpen: t, ref: r } = e, [n, o] = et(t), [a, i] = et(!1);
  return ze(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), da(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = f5(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function nj(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  oj,
  aj,
  ij,
  sj
] = HI(), [lj, Ro] = lr({
  strict: !1,
  name: "MenuContext"
});
function cj(e, ...t) {
  const r = Ir(), n = e || r;
  return _t(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function iy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Jh(e) {
  return iy(e).activeElement === e;
}
function uj(e = {}) {
  const {
    id: t,
    closeOnSelect: r = !0,
    closeOnBlur: n = !0,
    initialFocusRef: o,
    autoSelect: a = !0,
    isLazy: i,
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: u,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: m = !1,
    ...h
  } = e, g = ye(null), b = ye(null), y = ij(), S = q(() => {
    requestAnimationFrame(() => {
      var P;
      (P = g.current) == null || P.focus({ preventScroll: !1 });
    });
  }, []), E = q(() => {
    const P = setTimeout(() => {
      var O;
      if (o)
        (O = o.current) == null || O.focus();
      else {
        const j = y.firstEnabled();
        j && J(j.index);
      }
    });
    ce.current.add(P);
  }, [y, o]), C = q(() => {
    const P = setTimeout(() => {
      const O = y.lastEnabled();
      O && J(O.index);
    });
    ce.current.add(P);
  }, [y]), I = q(() => {
    u == null || u(), a ? E() : S();
  }, [a, E, S, u]), { isOpen: T, onOpen: N, onClose: V, onToggle: B } = oy({
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: I
  });
  tj({
    enabled: T && n,
    ref: g,
    handler: (P) => {
      var O;
      (O = b.current) != null && O.contains(P.target) || V();
    }
  });
  const X = ny({
    ...h,
    enabled: T || m,
    placement: d,
    direction: p
  }), [ne, J] = et(-1);
  Oo(() => {
    T || J(-1);
  }, [T]), R5(g, {
    focusRef: b,
    visible: T,
    shouldFocus: !0
  });
  const Q = rj({ isOpen: T, ref: g }), [ee, oe] = cj(t, "menu-button", "menu-list"), D = q(() => {
    N(), S();
  }, [N, S]), ce = ye(/* @__PURE__ */ new Set([]));
  vj(() => {
    ce.current.forEach((P) => clearTimeout(P)), ce.current.clear();
  });
  const de = q(() => {
    N(), E();
  }, [E, N]), M = q(() => {
    N(), C();
  }, [N, C]), F = q(() => {
    var P, O;
    const j = iy(g.current), w = (P = g.current) == null ? void 0 : P.contains(j.activeElement);
    if (!(T && !w))
      return;
    const A = (O = y.item(ne)) == null ? void 0 : O.node;
    A == null || A.focus();
  }, [T, ne, y]), z = ye(null);
  return {
    openAndFocusMenu: D,
    openAndFocusFirstItem: de,
    openAndFocusLastItem: M,
    onTransitionEnd: F,
    unstable__animationState: Q,
    descendants: y,
    popper: X,
    buttonId: ee,
    menuId: oe,
    forceUpdate: X.forceUpdate,
    orientation: "vertical",
    isOpen: T,
    onToggle: B,
    onOpen: N,
    onClose: V,
    menuRef: g,
    buttonRef: b,
    focusedIndex: ne,
    closeOnSelect: r,
    closeOnBlur: n,
    autoSelect: a,
    setFocusedIndex: J,
    isLazy: i,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: z
  };
}
function dj(e = {}, t = null) {
  const r = Ro(), { onToggle: n, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: i } = r, s = q(
    (l) => {
      const c = l.key, d = {
        Enter: a,
        ArrowDown: a,
        ArrowUp: i
      }[c];
      d && (l.preventDefault(), l.stopPropagation(), d(l));
    },
    [a, i]
  );
  return {
    ...e,
    ref: Pt(r.buttonRef, t, o.referenceRef),
    id: r.buttonId,
    "data-active": Km(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: Ht(e.onClick, n),
    onKeyDown: Ht(e.onKeyDown, s)
  };
}
function lu(e) {
  var t;
  return hj(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function fj(e = {}, t = null) {
  const r = Ro();
  if (!r)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: n,
    setFocusedIndex: o,
    menuRef: a,
    isOpen: i,
    onClose: s,
    menuId: l,
    isLazy: c,
    lazyBehavior: u,
    unstable__animationState: d
  } = r, f = aj(), p = P5({
    preventDefault: (b) => b.key !== " " && lu(b.target)
  }), m = q(
    (b) => {
      if (!b.currentTarget.contains(b.target))
        return;
      const y = b.key, E = {
        Tab: (I) => I.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const I = f.nextEnabled(n);
          I && o(I.index);
        },
        ArrowUp: () => {
          const I = f.prevEnabled(n);
          I && o(I.index);
        }
      }[y];
      if (E) {
        b.preventDefault(), E(b);
        return;
      }
      const C = p((I) => {
        const T = T5(
          f.values(),
          I,
          (N) => {
            var V, B;
            return (B = (V = N == null ? void 0 : N.node) == null ? void 0 : V.textContent) != null ? B : "";
          },
          f.item(n)
        );
        if (T) {
          const N = f.indexOf(T.node);
          o(N);
        }
      });
      lu(b.target) && C(b);
    },
    [
      f,
      n,
      p,
      s,
      o
    ]
  ), h = ye(!1);
  i && (h.current = !0);
  const g = nj({
    wasSelected: h.current,
    enabled: c,
    mode: u,
    isSelected: d.present
  });
  return {
    ...e,
    ref: Pt(a, t),
    children: g ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Ht(e.onKeyDown, m)
  };
}
function pj(e = {}) {
  const { popper: t, isOpen: r } = Ro();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: r ? "visible" : "hidden",
      ...e.style
    }
  });
}
function sy(e = {}, t = null) {
  const {
    onMouseEnter: r,
    onMouseMove: n,
    onMouseLeave: o,
    onClick: a,
    onFocus: i,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: c,
    type: u,
    ...d
  } = e, f = Ro(), {
    setFocusedIndex: p,
    focusedIndex: m,
    closeOnSelect: h,
    onClose: g,
    menuRef: b,
    isOpen: y,
    menuId: S,
    rafId: E
  } = f, C = ye(null), I = `${S}-menuitem-${Ir()}`, { index: T, register: N } = sj({
    disabled: s && !l
  }), V = q(
    (D) => {
      r == null || r(D), !s && p(T);
    },
    [p, T, s, r]
  ), B = q(
    (D) => {
      n == null || n(D), C.current && !Jh(C.current) && V(D);
    },
    [V, n]
  ), X = q(
    (D) => {
      o == null || o(D), !s && p(-1);
    },
    [p, s, o]
  ), ne = q(
    (D) => {
      a == null || a(D), lu(D.currentTarget) && (c ?? h) && g();
    },
    [g, a, h, c]
  ), J = q(
    (D) => {
      i == null || i(D), p(T);
    },
    [p, i, T]
  ), Q = T === m, ee = s && !l;
  Oo(() => {
    y && (Q && !ee && C.current ? (E.current && cancelAnimationFrame(E.current), E.current = requestAnimationFrame(() => {
      var D;
      (D = C.current) == null || D.focus(), E.current = null;
    })) : b.current && !Jh(b.current) && b.current.focus({ preventScroll: !0 }));
  }, [Q, ee, b, y]);
  const oe = O5({
    onClick: ne,
    onFocus: J,
    onMouseEnter: V,
    onMouseMove: B,
    onMouseLeave: X,
    ref: Pt(N, C, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...oe,
    type: u ?? oe.type,
    id: I,
    role: "menuitem",
    tabIndex: Q ? 0 : -1
  };
}
function oV(e = {}, t = null) {
  const { type: r = "radio", isChecked: n, ...o } = e;
  return {
    ...sy(o, t),
    role: `menuitem${r}`,
    "aria-checked": n
  };
}
function aV(e = {}) {
  const {
    children: t,
    type: r = "radio",
    value: n,
    defaultValue: o,
    onChange: a,
    ...i
  } = e, l = r === "radio" ? "" : [], [c, u] = ad({
    defaultValue: o ?? l,
    value: n,
    onChange: a
  }), d = q(
    (m) => {
      if (r === "radio" && typeof c == "string" && u(m), r === "checkbox" && Array.isArray(c)) {
        const h = c.includes(m) ? c.filter((g) => g !== m) : c.concat(m);
        u(h);
      }
    },
    [c, u, r]
  ), p = QI(t).map((m) => {
    if (m.type.id !== "MenuItemOption")
      return m;
    const h = (b) => {
      var y, S;
      d(m.props.value), (S = (y = m.props).onClick) == null || S.call(y, b);
    }, g = r === "radio" ? m.props.value === c : c.includes(m.props.value);
    return ws(m, {
      type: r,
      onClick: h,
      isChecked: g
    });
  });
  return {
    ...i,
    children: p
  };
}
function iV() {
  const { isOpen: e, onClose: t } = Ro();
  return { isOpen: e, onClose: t };
}
function hj(e) {
  var t;
  if (!mj(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function mj(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function vj(e, t = []) {
  return ze(
    () => () => e(),
    t
  );
}
var [gj, Ka] = lr({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), bj = (e) => {
  const { children: t } = e, r = js("Menu", e), n = Ba(e), { direction: o } = Vn(), { descendants: a, ...i } = uj({ ...n, direction: o }), s = _t(() => i, [i]), { isOpen: l, onClose: c, forceUpdate: u } = s;
  return /* @__PURE__ */ W.jsx(oj, { value: a, children: /* @__PURE__ */ W.jsx(lj, { value: s, children: /* @__PURE__ */ W.jsx(gj, { value: r, children: un(t, { isOpen: l, onClose: c, forceUpdate: u }) }) }) });
};
bj.displayName = "Menu";
var ly = Ue(
  (e, t) => {
    const r = Ka();
    return /* @__PURE__ */ W.jsx(
      ke.span,
      {
        ref: t,
        ...e,
        __css: r.command,
        className: "chakra-menu__command"
      }
    );
  }
);
ly.displayName = "MenuCommand";
var yj = Ue(
  (e, t) => {
    const { type: r, ...n } = e, o = Ka(), a = n.as || r ? r ?? void 0 : "button", i = _t(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...o.item
      }),
      [o.item]
    );
    return /* @__PURE__ */ W.jsx(ke.button, { ref: t, type: a, ...n, __css: i });
  }
), cy = (e) => {
  const { className: t, children: r, ...n } = e, o = Cs.only(r), a = fu(o) ? ws(o, {
    focusable: "false",
    "aria-hidden": !0,
    className: bt("chakra-menu__icon", o.props.className)
  }) : null, i = bt("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ W.jsx(
    ke.span,
    {
      className: i,
      ...n,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      },
      children: a
    }
  );
};
cy.displayName = "MenuIcon";
var xj = Ue((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: i,
    ...s
  } = e, l = sy(s, t), u = r || o ? /* @__PURE__ */ W.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: i }) : i;
  return /* @__PURE__ */ W.jsxs(
    yj,
    {
      ...l,
      className: bt("chakra-menu__menuitem", l.className),
      children: [
        r && /* @__PURE__ */ W.jsx(cy, { fontSize: "0.8em", marginEnd: n, children: r }),
        u,
        o && /* @__PURE__ */ W.jsx(ly, { marginStart: a, children: o })
      ]
    }
  );
});
xj.displayName = "MenuItem";
var Sj = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
}, wj = ke(yn.div), Cj = Ue(function(t, r) {
  var n, o;
  const { rootProps: a, motionProps: i, ...s } = t, {
    isOpen: l,
    onTransitionEnd: c,
    unstable__animationState: u
  } = Ro(), d = fj(s, r), f = pj(a), p = Ka();
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ W.jsx(
        wj,
        {
          variants: Sj,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...i,
          className: bt("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: c,
          onAnimationComplete: l_(
            u.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
Cj.displayName = "MenuList";
var _j = Ue((e, t) => {
  const r = Ka();
  return /* @__PURE__ */ W.jsx(
    ke.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...r.button
      }
    }
  );
}), kj = Ue(
  (e, t) => {
    const { children: r, as: n, ...o } = e, a = dj(o, t), i = n || _j;
    return /* @__PURE__ */ W.jsx(
      i,
      {
        ...a,
        className: bt("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ W.jsx(
          ke.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
kj.displayName = "MenuButton";
var Ej = (e) => {
  const { className: t, ...r } = e, n = Ka();
  return /* @__PURE__ */ W.jsx(
    ke.hr,
    {
      "aria-orientation": "horizontal",
      className: bt("chakra-menu__divider", t),
      ...r,
      __css: n.divider
    }
  );
};
Ej.displayName = "MenuDivider";
var Pj = {
  slideInBottom: {
    ...eu,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...eu,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...nb,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, Tj = ke(yn.section), Aj = (e) => Pj[e || "none"], uy = Tt(
  (e, t) => {
    const { preset: r, motionProps: n = Aj(r), ...o } = e;
    return /* @__PURE__ */ W.jsx(Tj, { ref: t, ...n, ...o });
  }
);
uy.displayName = "ModalTransition";
var Oj = Object.defineProperty, $j = (e, t, r) => t in e ? Oj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Rj = (e, t, r) => ($j(e, typeof t != "symbol" ? t + "" : t, r), r), Dj = class {
  constructor() {
    Rj(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, cu = new Dj();
function dy(e, t) {
  const [r, n] = et(0);
  return ze(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = cu.add(o);
        n(a);
      }
      return () => {
        cu.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var Mj = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, qn = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), wi = {}, lc = 0, fy = function(e) {
  return e && (e.host || fy(e.parentNode));
}, Ij = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = fy(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Fj = function(e, t, r, n) {
  var o = Ij(t, Array.isArray(e) ? e : [e]);
  wi[r] || (wi[r] = /* @__PURE__ */ new WeakMap());
  var a = wi[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (qn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        qn.set(f, h), a.set(f, g), i.push(f), h === 1 && m && Si.set(f, !0), g === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), lc++, function() {
    i.forEach(function(d) {
      var f = qn.get(d) - 1, p = a.get(d) - 1;
      qn.set(d, f), a.set(d, p), f || (Si.has(d) || d.removeAttribute(n), Si.delete(d)), p || d.removeAttribute(r);
    }), lc--, lc || (qn = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), wi = {});
  };
}, Nj = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || Mj(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Fj(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function jj(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = ye(null), u = ye(null), [d, f, p] = zj(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  Bj(c, t && i);
  const m = dy(c, t), h = ye(null), g = q((V) => {
    h.current = V.target;
  }, []), b = q(
    (V) => {
      V.key === "Escape" && (V.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [y, S] = et(!1), [E, C] = et(!1), I = q(
    (V = {}, B = null) => ({
      role: "dialog",
      ...V,
      ref: Pt(B, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": E ? p : void 0,
      onClick: Ht(
        V.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, E, d, f, y]
  ), T = q(
    (V) => {
      V.stopPropagation(), h.current === V.target && cu.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), N = q(
    (V = {}, B = null) => ({
      ...V,
      ref: Pt(B, u),
      onClick: Ht(V.onClick, T),
      onKeyDown: Ht(V.onKeyDown, b),
      onMouseDown: Ht(V.onMouseDown, g)
    }),
    [b, g, T]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: C,
    setHeaderMounted: S,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: I,
    getDialogContainerProps: N,
    index: m
  };
}
function Bj(e, t) {
  const r = e.current;
  ze(() => {
    if (!(!e.current || !t))
      return Nj(e.current);
  }, [t, e, r]);
}
function zj(e, ...t) {
  const r = Ir(), n = e || r;
  return _t(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [Vj, Un] = lr({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [Lj, gn] = lr({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), py = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: r,
    children: n,
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: m
  } = t, h = js("Modal", t), b = {
    ...jj(t),
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ W.jsx(Lj, { value: b, children: /* @__PURE__ */ W.jsx(Vj, { value: h, children: /* @__PURE__ */ W.jsx($o, { onExitComplete: m, children: b.isOpen && /* @__PURE__ */ W.jsx(ja, { ...r, children: n }) }) }) });
};
py.displayName = "Modal";
var Wi = "right-scroll-bar-position", Ui = "width-before-scroll-bar", Wj = "with-scroll-bars-hidden", Uj = "--removed-body-scroll-bar-size", hy = pb(), cc = function() {
}, Xs = U.forwardRef(function(e, t) {
  var r = U.useRef(null), n = U.useState({
    onScrollCapture: cc,
    onWheelCapture: cc,
    onTouchMoveCapture: cc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = e.gapMode, S = ub(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = f, C = cb([r, t]), I = Tr(Tr({}, S), o);
  return U.createElement(
    U.Fragment,
    null,
    u && U.createElement(E, { sideCar: hy, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: y }),
    i ? U.cloneElement(U.Children.only(s), Tr(Tr({}, I), { ref: C })) : U.createElement(b, Tr({}, I, { className: l, ref: C }), s)
  );
});
Xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xs.classNames = {
  fullWidth: Ui,
  zeroRight: Wi
};
var Qh, Hj = function() {
  if (Qh)
    return Qh;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Yj() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Hj();
  return t && e.setAttribute("nonce", t), e;
}
function Gj(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function qj(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xj = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Yj()) && (Gj(t, r), qj(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Kj = function() {
  var e = Xj();
  return function(t, r) {
    U.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, my = function() {
  var e = Kj(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Zj = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, uc = function(e) {
  return parseInt(e || "", 10) || 0;
}, Jj = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [uc(r), uc(n), uc(o)];
}, Qj = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zj;
  var t = Jj(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, eB = my(), tB = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Wj, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Wi, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Ui, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Wi, " .").concat(Wi, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ui, " .").concat(Ui, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(Uj, ": ").concat(s, `px;
  }
`);
}, rB = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = U.useMemo(function() {
    return Qj(o);
  }, [o]);
  return U.createElement(eB, { styles: tB(a, !t, o, r ? "" : "!important") });
}, uu = !1;
if (typeof window < "u")
  try {
    var Ci = Object.defineProperty({}, "passive", {
      get: function() {
        return uu = !0, !0;
      }
    });
    window.addEventListener("test", Ci, Ci), window.removeEventListener("test", Ci, Ci);
  } catch {
    uu = !1;
  }
var Xn = uu ? { passive: !1 } : !1, nB = function(e) {
  return e.tagName === "TEXTAREA";
}, vy = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !nB(e) && r[t] === "visible")
  );
}, oB = function(e) {
  return vy(e, "overflowY");
}, aB = function(e) {
  return vy(e, "overflowX");
}, em = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = gy(e, n);
    if (o) {
      var a = by(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, iB = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, sB = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, gy = function(e, t) {
  return e === "v" ? oB(t) : aB(t);
}, by = function(e, t) {
  return e === "v" ? iB(t) : sB(t);
}, lB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, cB = function(e, t, r, n, o) {
  var a = lB(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = by(e, s), m = p[0], h = p[1], g = p[2], b = h - g - a * m;
    (m || b) && gy(e, s) && (d += b, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, _i = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tm = function(e) {
  return [e.deltaX, e.deltaY];
}, rm = function(e) {
  return e && "current" in e ? e.current : e;
}, uB = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dB = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fB = 0, Kn = [];
function pB(e) {
  var t = U.useRef([]), r = U.useRef([0, 0]), n = U.useRef(), o = U.useState(fB++)[0], a = U.useState(my)[0], i = U.useRef(e);
  U.useEffect(function() {
    i.current = e;
  }, [e]), U.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = hF([e.lockRef.current], (e.shards || []).map(rm), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = U.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = _i(h), y = r.current, S = "deltaX" in h ? h.deltaX : y[0] - b[0], E = "deltaY" in h ? h.deltaY : y[1] - b[1], C, I = h.target, T = Math.abs(S) > Math.abs(E) ? "h" : "v";
    if ("touches" in h && T === "h" && I.type === "range")
      return !1;
    var N = em(T, I);
    if (!N)
      return !0;
    if (N ? C = T : (C = T === "v" ? "h" : "v", N = em(T, I)), !N)
      return !1;
    if (!n.current && "changedTouches" in h && (S || E) && (n.current = C), !C)
      return !0;
    var V = n.current || C;
    return cB(V, g, h, V === "h" ? S : E, !0);
  }, []), l = U.useCallback(function(h) {
    var g = h;
    if (!(!Kn.length || Kn[Kn.length - 1] !== a)) {
      var b = "deltaY" in g ? tm(g) : _i(g), y = t.current.filter(function(C) {
        return C.name === g.type && C.target === g.target && uB(C.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var S = (i.current.shards || []).map(rm).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), E = S.length > 0 ? s(g, S[0]) : !i.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = U.useCallback(function(h, g, b, y) {
    var S = { name: h, delta: g, target: b, should: y };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== S;
      });
    }, 1);
  }, []), u = U.useCallback(function(h) {
    r.current = _i(h), n.current = void 0;
  }, []), d = U.useCallback(function(h) {
    c(h.type, tm(h), h.target, s(h, e.lockRef.current));
  }, []), f = U.useCallback(function(h) {
    c(h.type, _i(h), h.target, s(h, e.lockRef.current));
  }, []);
  U.useEffect(function() {
    return Kn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Xn), document.addEventListener("touchmove", l, Xn), document.addEventListener("touchstart", u, Xn), function() {
      Kn = Kn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Xn), document.removeEventListener("touchmove", l, Xn), document.removeEventListener("touchstart", u, Xn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return U.createElement(
    U.Fragment,
    null,
    m ? U.createElement(a, { styles: dB(o) }) : null,
    p ? U.createElement(rB, { gapMode: e.gapMode }) : null
  );
}
const hB = mF(hy, pB);
var yy = U.forwardRef(function(e, t) {
  return U.createElement(Xs, Tr({}, e, { ref: t, sideCar: hB }));
});
yy.classNames = Xs.classNames;
const mB = yy;
function xy(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: a,
    allowPinchZoom: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: c,
    lockFocusAcrossFrames: u,
    isOpen: d
  } = gn(), [f, p] = zg();
  ze(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = dy(n, d);
  return /* @__PURE__ */ W.jsx(
    Hb,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ W.jsx(
        mB,
        {
          removeScrollBar: !c,
          allowPinchZoom: i,
          enabled: m === 1 && a,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var vB = Ue(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = gn(), c = s(i, t), u = l(o), d = bt("chakra-modal__content", r), f = Un(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, m = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: h } = gn();
    return /* @__PURE__ */ W.jsx(xy, { children: /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: m,
        children: /* @__PURE__ */ W.jsx(
          uy,
          {
            preset: h,
            motionProps: a,
            className: d,
            ...c,
            __css: p,
            children: n
          }
        )
      }
    ) });
  }
);
vB.displayName = "ModalContent";
var [gB, bB] = lr(), yB = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function xB(e, t) {
  var r, n;
  if (e)
    return (n = (r = yB[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function sV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = Vn(), l = (t = s.components) == null ? void 0 : t.Drawer, c = xB(o, s.direction);
  return /* @__PURE__ */ W.jsx(gB, { value: { placement: c }, children: /* @__PURE__ */ W.jsx(
    py,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var SB = ke(ob), wB = Ue(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = gn(), u = s(i, t), d = l(a), f = bt("chakra-modal__content", r), p = Un(), m = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, h = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: g } = bB();
    return /* @__PURE__ */ W.jsx(xy, { children: /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ W.jsx(
          SB,
          {
            motionProps: o,
            direction: g,
            in: c,
            className: f,
            ...u,
            __css: m,
            children: n
          }
        )
      }
    ) });
  }
);
wB.displayName = "DrawerContent";
var CB = Ue(
  (e, t) => {
    const { className: r, ...n } = e, o = bt("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Un().footer
    };
    return /* @__PURE__ */ W.jsx(
      ke.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
CB.displayName = "ModalFooter";
var _B = Ue(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = gn();
    ze(() => (a(!0), () => a(!1)), [a]);
    const i = bt("chakra-modal__header", r), l = {
      flex: 0,
      ...Un().header
    };
    return /* @__PURE__ */ W.jsx(
      ke.header,
      {
        ref: t,
        className: i,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
_B.displayName = "ModalHeader";
var kB = ke(yn.div), EB = Ue(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = bt("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Un().overlay
    }, { motionPreset: c } = gn(), d = o || (c === "none" ? {} : rb);
    return /* @__PURE__ */ W.jsx(
      kB,
      {
        ...d,
        __css: l,
        ref: t,
        className: i,
        ...a
      }
    );
  }
);
EB.displayName = "ModalOverlay";
var PB = Ue((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = gn();
  ze(() => (a(!0), () => a(!1)), [a]);
  const i = bt("chakra-modal__body", r), s = Un();
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
PB.displayName = "ModalBody";
var TB = Ue(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = gn(), i = bt("chakra-modal__close-btn", n), s = Un();
    return /* @__PURE__ */ W.jsx(
      eb,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: Ht(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
TB.displayName = "ModalCloseButton";
var tr = (e) => e ? "" : void 0, go = (e) => e ? !0 : void 0, Sn = (...e) => e.filter(Boolean).join(" ");
function bo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function AB(e) {
  return {
    root: `slider-root-${e}`,
    getThumb: (t) => `slider-thumb-${e}-${t}`,
    getInput: (t) => `slider-input-${e}-${t}`,
    track: `slider-track-${e}`,
    innerTrack: `slider-filled-track-${e}`,
    getMarker: (t) => `slider-marker-${e}-${t}`,
    output: `slider-output-${e}`
  };
}
function Jo(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var Hi = { width: 0, height: 0 }, ki = (e) => e || Hi;
function Sy(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var g;
    const b = (g = n[h]) != null ? g : Hi;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...Jo({
        orientation: t,
        vertical: {
          bottom: `calc(${r[h]}% - ${b.height / 2}px)`
        },
        horizontal: {
          left: `calc(${r[h]}% - ${b.width / 2}px)`
        }
      })
    };
  }, i = t === "vertical" ? n.reduce(
    (h, g) => ki(h).height > ki(g).height ? h : g,
    Hi
  ) : n.reduce(
    (h, g) => ki(h).width > ki(g).width ? h : g,
    Hi
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...Jo({
      orientation: t,
      vertical: i ? {
        paddingLeft: i.width / 2,
        paddingRight: i.width / 2
      } : {},
      horizontal: i ? {
        paddingTop: i.height / 2,
        paddingBottom: i.height / 2
      } : {}
    })
  }, l = {
    position: "absolute",
    ...Jo({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  }, c = r.length === 1, u = [0, o ? 100 - r[0] : r[0]], d = c ? u : r;
  let f = d[0];
  !c && o && (f = 100 - f);
  const p = Math.abs(d[d.length - 1] - d[0]), m = {
    ...l,
    ...Jo({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: m, rootStyle: s, getThumbStyle: a };
}
function wy(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function OB(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function $B(e) {
  const t = DB(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function Cy(e) {
  return !!e.touches;
}
function RB(e) {
  return Cy(e) && e.touches.length > 1;
}
function DB(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function MB(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function IB(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function _y(e, t = "page") {
  return Cy(e) ? MB(e, t) : IB(e, t);
}
function FB(e) {
  return (t) => {
    const r = $B(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function NB(e, t = !1) {
  function r(o) {
    e(o, { point: _y(o) });
  }
  return t ? FB(r) : r;
}
function Yi(e, t, r, n) {
  return OB(e, t, NB(r, t === "pointerdown"), n);
}
var jB = Object.defineProperty, BB = (e, t, r) => t in e ? jB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, dr = (e, t, r) => (BB(e, typeof t != "symbol" ? t + "" : t, r), r), zB = class {
  constructor(e, t, r) {
    dr(this, "history", []), dr(this, "startEvent", null), dr(this, "lastEvent", null), dr(this, "lastEventInfo", null), dr(this, "handlers", {}), dr(this, "removeListeners", () => {
    }), dr(this, "threshold", 3), dr(this, "win"), dr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = dc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = UB(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = hp();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), dr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, eR.update(this.updatePoint, !0);
    }), dr(this, "onPointerUp", (s, l) => {
      const c = dc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, RB(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: _y(e) }, { timestamp: a } = hp();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, dc(o, this.history)), this.removeListeners = WB(
      Yi(this.win, "pointermove", this.onPointerMove),
      Yi(this.win, "pointerup", this.onPointerUp),
      Yi(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), tR.update(this.updatePoint);
  }
};
function nm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function dc(e, t) {
  return {
    point: e.point,
    delta: nm(e.point, t[t.length - 1]),
    offset: nm(e.point, t[0]),
    velocity: LB(t, 0.1)
  };
}
var VB = (e) => e * 1e3;
function LB(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > VB(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = (o.timestamp - n.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function WB(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function fc(e, t) {
  return Math.abs(e - t);
}
function om(e) {
  return "x" in e && "y" in e;
}
function UB(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return fc(e, t);
  if (om(e) && om(t)) {
    const r = fc(e.x, t.x), n = fc(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function ky(e) {
  const t = ye(null);
  return t.current = e, t;
}
function Ey(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = ye(null), u = ky({
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(d, f) {
      c.current = null, o == null || o(d, f);
    }
  });
  ze(() => {
    var d;
    (d = c.current) == null || d.updateHandlers(u.current);
  }), ze(() => {
    const d = e.current;
    if (!d || !l)
      return;
    function f(p) {
      c.current = new zB(p, u.current, s);
    }
    return Yi(d, "pointerdown", f);
  }, [e, l, u, s]), ze(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function HB(e, t) {
  if (!e) {
    t(void 0);
    return;
  }
  t({ width: e.offsetWidth, height: e.offsetHeight });
  const r = e.ownerDocument.defaultView ?? window, n = new r.ResizeObserver((o) => {
    if (!Array.isArray(o) || !o.length)
      return;
    const [a] = o;
    let i, s;
    if ("borderBoxSize" in a) {
      const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
      i = c.inlineSize, s = c.blockSize;
    } else
      i = e.offsetWidth, s = e.offsetHeight;
    t({ width: i, height: s });
  });
  return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
}
var YB = globalThis != null && globalThis.document ? Ss : ze;
function GB(e, t) {
  var r, n;
  if (!e || !e.parentElement)
    return;
  const o = (n = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window, a = new o.MutationObserver(() => {
    t();
  });
  return a.observe(e.parentElement, { childList: !0 }), () => {
    a.disconnect();
  };
}
function Py({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = et([]), [o, a] = et(0);
  return YB(() => {
    const i = e(), s = i.map(
      (l, c) => HB(l, (u) => {
        n((d) => [
          ...d.slice(0, c),
          u,
          ...d.slice(c + 1)
        ]);
      })
    );
    if (t) {
      const l = i[0];
      s.push(
        GB(l, () => {
          a((c) => c + 1);
        })
      );
    }
    return () => {
      s.forEach((l) => {
        l == null || l();
      });
    };
  }, [o]), r;
}
function qB(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function XB(e) {
  const [t] = Py({
    observeMutation: !1,
    getNodes() {
      return [qB(e) ? e.current : e];
    }
  });
  return t;
}
function KB(e) {
  const {
    min: t = 0,
    max: r = 100,
    onChange: n,
    value: o,
    defaultValue: a,
    isReversed: i,
    direction: s = "ltr",
    orientation: l = "horizontal",
    id: c,
    isDisabled: u,
    isReadOnly: d,
    onChangeStart: f,
    onChangeEnd: p,
    step: m = 1,
    getAriaValueText: h,
    "aria-valuetext": g,
    "aria-label": b,
    "aria-labelledby": y,
    name: S,
    focusThumbOnChange: E = !0,
    minStepsBetweenThumbs: C = 0,
    ...I
  } = e, T = qt(f), N = qt(p), V = qt(h), B = wy({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ne] = ad({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [J, Q] = et(!1), [ee, oe] = et(!1), [D, ce] = et(-1), de = !(u || d), M = ye(X), F = X.map((G) => ua(G, t, r)), z = C * m, P = ZB(F, t, r, z), O = ye({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  O.current.value = F, O.current.valueBounds = P;
  const j = F.map((G) => r - G + t), H = (B ? j : F).map((G) => vs(G, t, r)), A = l === "vertical", Z = ye(null), Y = ye(null), ae = Py({
    getNodes() {
      const G = Y.current, ie = G == null ? void 0 : G.querySelectorAll("[role=slider]");
      return ie ? Array.from(ie) : [];
    }
  }), $ = Ir(), pe = AB(c ?? $), le = q(
    (G) => {
      var ie, be;
      if (!Z.current)
        return;
      O.current.eventSource = "pointer";
      const we = Z.current.getBoundingClientRect(), { clientX: He, clientY: yt } = (be = (ie = G.touches) == null ? void 0 : ie[0]) != null ? be : G, Xe = A ? we.bottom - yt : He - we.left, rt = A ? we.height : we.width;
      let zr = Xe / rt;
      return B && (zr = 1 - zr), ab(zr, t, r);
    },
    [A, B, r, t]
  ), $e = (r - t) / 10, ge = m || (r - t) / 100, Se = _t(
    () => ({
      setValueAtIndex(G, ie) {
        if (!de)
          return;
        const be = O.current.valueBounds[G];
        ie = parseFloat(tu(ie, be.min, ge)), ie = ua(ie, be.min, be.max);
        const we = [...O.current.value];
        we[G] = ie, ne(we);
      },
      setActiveIndex: ce,
      stepUp(G, ie = ge) {
        const be = O.current.value[G], we = B ? be - ie : be + ie;
        Se.setValueAtIndex(G, we);
      },
      stepDown(G, ie = ge) {
        const be = O.current.value[G], we = B ? be + ie : be - ie;
        Se.setValueAtIndex(G, we);
      },
      reset() {
        ne(M.current);
      }
    }),
    [ge, B, ne, de]
  ), dt = q(
    (G) => {
      const ie = G.key, we = {
        ArrowRight: () => Se.stepUp(D),
        ArrowUp: () => Se.stepUp(D),
        ArrowLeft: () => Se.stepDown(D),
        ArrowDown: () => Se.stepDown(D),
        PageUp: () => Se.stepUp(D, $e),
        PageDown: () => Se.stepDown(D, $e),
        Home: () => {
          const { min: He } = P[D];
          Se.setValueAtIndex(D, He);
        },
        End: () => {
          const { max: He } = P[D];
          Se.setValueAtIndex(D, He);
        }
      }[ie];
      we && (G.preventDefault(), G.stopPropagation(), we(G), O.current.eventSource = "keyboard");
    },
    [Se, D, $e, P]
  ), { getThumbStyle: Ce, rootStyle: ct, trackStyle: tt, innerTrackStyle: De } = _t(
    () => Sy({
      isReversed: B,
      orientation: l,
      thumbRects: ae,
      thumbPercents: H
    }),
    [B, l, H, ae]
  ), se = q(
    (G) => {
      var ie;
      const be = G ?? D;
      if (be !== -1 && E) {
        const we = pe.getThumb(be), He = (ie = Y.current) == null ? void 0 : ie.ownerDocument.getElementById(we);
        He && setTimeout(() => He.focus());
      }
    },
    [E, D, pe]
  );
  Oo(() => {
    O.current.eventSource === "keyboard" && (N == null || N(O.current.value));
  }, [F, N]);
  const Te = (G) => {
    const ie = le(G) || 0, be = O.current.value.map(
      (rt) => Math.abs(rt - ie)
    ), we = Math.min(...be);
    let He = be.indexOf(we);
    const yt = be.filter(
      (rt) => rt === we
    );
    yt.length > 1 && ie > O.current.value[He] && (He = He + yt.length - 1), ce(He), Se.setValueAtIndex(He, ie), se(He);
  }, At = (G) => {
    if (D == -1)
      return;
    const ie = le(G) || 0;
    ce(D), Se.setValueAtIndex(D, ie), se(D);
  };
  Ey(Y, {
    onPanSessionStart(G) {
      de && (Q(!0), Te(G), T == null || T(O.current.value));
    },
    onPanSessionEnd() {
      de && (Q(!1), N == null || N(O.current.value));
    },
    onPan(G) {
      de && At(G);
    }
  });
  const gt = q(
    (G = {}, ie = null) => ({
      ...G,
      ...I,
      id: pe.root,
      ref: Pt(ie, Y),
      tabIndex: -1,
      "aria-disabled": go(u),
      "data-focused": tr(ee),
      style: { ...G.style, ...ct }
    }),
    [I, u, ee, ct, pe]
  ), it = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: Pt(ie, Z),
      id: pe.track,
      "data-disabled": tr(u),
      style: { ...G.style, ...tt }
    }),
    [u, tt, pe]
  ), Nr = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: ie,
      id: pe.innerTrack,
      style: {
        ...G.style,
        ...De
      }
    }),
    [De, pe]
  ), jr = q(
    (G, ie = null) => {
      var be;
      const { index: we, ...He } = G, yt = F[we];
      if (yt == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${we}\`. The \`value\` or \`defaultValue\` length is : ${F.length}`
        );
      const Xe = P[we];
      return {
        ...He,
        ref: ie,
        role: "slider",
        tabIndex: de ? 0 : void 0,
        id: pe.getThumb(we),
        "data-active": tr(J && D === we),
        "aria-valuetext": (be = V == null ? void 0 : V(yt)) != null ? be : g == null ? void 0 : g[we],
        "aria-valuemin": Xe.min,
        "aria-valuemax": Xe.max,
        "aria-valuenow": yt,
        "aria-orientation": l,
        "aria-disabled": go(u),
        "aria-readonly": go(d),
        "aria-label": b == null ? void 0 : b[we],
        "aria-labelledby": b != null && b[we] || y == null ? void 0 : y[we],
        style: { ...G.style, ...Ce(we) },
        onKeyDown: bo(G.onKeyDown, dt),
        onFocus: bo(G.onFocus, () => {
          oe(!0), ce(we);
        }),
        onBlur: bo(G.onBlur, () => {
          oe(!1), ce(-1);
        })
      };
    },
    [
      pe,
      F,
      P,
      de,
      J,
      D,
      V,
      g,
      l,
      u,
      d,
      b,
      y,
      Ce,
      dt,
      oe
    ]
  ), Br = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: ie,
      id: pe.output,
      htmlFor: F.map((be, we) => pe.getThumb(we)).join(" "),
      "aria-live": "off"
    }),
    [pe, F]
  ), te = q(
    (G, ie = null) => {
      const { value: be, ...we } = G, He = !(be < t || be > r), yt = be >= F[0] && be <= F[F.length - 1];
      let Xe = vs(be, t, r);
      Xe = B ? 100 - Xe : Xe;
      const rt = {
        position: "absolute",
        pointerEvents: "none",
        ...Jo({
          orientation: l,
          vertical: { bottom: `${Xe}%` },
          horizontal: { left: `${Xe}%` }
        })
      };
      return {
        ...we,
        ref: ie,
        id: pe.getMarker(G.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": tr(u),
        "data-invalid": tr(!He),
        "data-highlighted": tr(yt),
        style: {
          ...G.style,
          ...rt
        }
      };
    },
    [u, B, r, t, l, F, pe]
  ), ve = q(
    (G, ie = null) => {
      const { index: be, ...we } = G;
      return {
        ...we,
        ref: ie,
        id: pe.getInput(be),
        type: "hidden",
        value: F[be],
        name: Array.isArray(S) ? S[be] : `${S}-${be}`
      };
    },
    [S, F, pe]
  );
  return {
    state: {
      value: F,
      isFocused: ee,
      isDragging: J,
      getThumbPercent: (G) => H[G],
      getThumbMinValue: (G) => P[G].min,
      getThumbMaxValue: (G) => P[G].max
    },
    actions: Se,
    getRootProps: gt,
    getTrackProps: it,
    getInnerTrackProps: Nr,
    getThumbProps: jr,
    getMarkerProps: te,
    getInputProps: ve,
    getOutputProps: Br
  };
}
function ZB(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [JB, Ks] = lr({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [QB, Zs] = lr({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), ez = Ue(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = js("Slider", n), a = Ba(n), { direction: i } = Vn();
    a.direction = i;
    const { getRootProps: s, ...l } = KB(a), c = _t(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ W.jsx(JB, { value: c, children: /* @__PURE__ */ W.jsx(QB, { value: o, children: /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...s({}, r),
        className: "chakra-slider",
        __css: o.container,
        children: n.children
      }
    ) }) });
  }
);
ez.displayName = "RangeSlider";
var tz = Ue(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = Ks(), i = Zs(), s = n(t, r);
    return /* @__PURE__ */ W.jsxs(
      ke.div,
      {
        ...s,
        className: Sn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ W.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
tz.displayName = "RangeSliderThumb";
var rz = Ue(
  function(t, r) {
    const { getTrackProps: n } = Ks(), o = Zs(), a = n(t, r);
    return /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...a,
        className: Sn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
rz.displayName = "RangeSliderTrack";
var nz = Ue(function(t, r) {
  const { getInnerTrackProps: n } = Ks(), o = Zs(), a = n(t, r);
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
nz.displayName = "RangeSliderFilledTrack";
var oz = Ue(
  function(t, r) {
    const { getMarkerProps: n } = Ks(), o = Zs(), a = n(t, r);
    return /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...a,
        className: Sn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
oz.displayName = "RangeSliderMark";
function az(e) {
  var t;
  const {
    min: r = 0,
    max: n = 100,
    onChange: o,
    value: a,
    defaultValue: i,
    isReversed: s,
    direction: l = "ltr",
    orientation: c = "horizontal",
    id: u,
    isDisabled: d,
    isReadOnly: f,
    onChangeStart: p,
    onChangeEnd: m,
    step: h = 1,
    getAriaValueText: g,
    "aria-valuetext": b,
    "aria-label": y,
    "aria-labelledby": S,
    name: E,
    focusThumbOnChange: C = !0,
    ...I
  } = e, T = qt(p), N = qt(m), V = qt(g), B = wy({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ne] = ad({
    value: a,
    defaultValue: i ?? sz(r, n),
    onChange: o
  }), [J, Q] = et(!1), [ee, oe] = et(!1), D = !(d || f), ce = (n - r) / 10, de = h || (n - r) / 100, M = ua(X, r, n), F = n - M + r, P = vs(B ? F : M, r, n), O = c === "vertical", j = ky({
    min: r,
    max: n,
    step: h,
    isDisabled: d,
    value: M,
    isInteractive: D,
    isReversed: B,
    isVertical: O,
    eventSource: null,
    focusThumbOnChange: C,
    orientation: c
  }), w = ye(null), H = ye(null), A = ye(null), Z = Ir(), Y = u ?? Z, [ae, $] = [`slider-thumb-${Y}`, `slider-track-${Y}`], xe = q(
    (te) => {
      var ve, Sr;
      if (!w.current)
        return;
      const G = j.current;
      G.eventSource = "pointer";
      const ie = w.current.getBoundingClientRect(), { clientX: be, clientY: we } = (Sr = (ve = te.touches) == null ? void 0 : ve[0]) != null ? Sr : te, He = O ? ie.bottom - we : be - ie.left, yt = O ? ie.height : ie.width;
      let Xe = He / yt;
      B && (Xe = 1 - Xe);
      let rt = ab(Xe, G.min, G.max);
      return G.step && (rt = parseFloat(
        tu(rt, G.min, G.step)
      )), rt = ua(rt, G.min, G.max), rt;
    },
    [O, B, j]
  ), pe = q(
    (te) => {
      const ve = j.current;
      ve.isInteractive && (te = parseFloat(tu(te, ve.min, de)), te = ua(te, ve.min, ve.max), ne(te));
    },
    [de, ne, j]
  ), le = _t(
    () => ({
      stepUp(te = de) {
        const ve = B ? M - te : M + te;
        pe(ve);
      },
      stepDown(te = de) {
        const ve = B ? M + te : M - te;
        pe(ve);
      },
      reset() {
        pe(i || 0);
      },
      stepTo(te) {
        pe(te);
      }
    }),
    [pe, B, M, de, i]
  ), $e = q(
    (te) => {
      const ve = j.current, G = {
        ArrowRight: () => le.stepUp(),
        ArrowUp: () => le.stepUp(),
        ArrowLeft: () => le.stepDown(),
        ArrowDown: () => le.stepDown(),
        PageUp: () => le.stepUp(ce),
        PageDown: () => le.stepDown(ce),
        Home: () => pe(ve.min),
        End: () => pe(ve.max)
      }[te.key];
      G && (te.preventDefault(), te.stopPropagation(), G(te), ve.eventSource = "keyboard");
    },
    [le, pe, ce, j]
  ), ge = (t = V == null ? void 0 : V(M)) != null ? t : b, Se = XB(H), { getThumbStyle: dt, rootStyle: Ce, trackStyle: ct, innerTrackStyle: tt } = _t(() => {
    const te = j.current, ve = Se ?? { width: 0, height: 0 };
    return Sy({
      isReversed: B,
      orientation: te.orientation,
      thumbRects: [ve],
      thumbPercents: [P]
    });
  }, [B, Se, P, j]), De = q(() => {
    j.current.focusThumbOnChange && setTimeout(() => {
      var ve;
      return (ve = H.current) == null ? void 0 : ve.focus();
    });
  }, [j]);
  Oo(() => {
    const te = j.current;
    De(), te.eventSource === "keyboard" && (N == null || N(te.value));
  }, [M, N]);
  function se(te) {
    const ve = xe(te);
    ve != null && ve !== j.current.value && ne(ve);
  }
  Ey(A, {
    onPanSessionStart(te) {
      const ve = j.current;
      ve.isInteractive && (Q(!0), De(), se(te), T == null || T(ve.value));
    },
    onPanSessionEnd() {
      const te = j.current;
      te.isInteractive && (Q(!1), N == null || N(te.value));
    },
    onPan(te) {
      j.current.isInteractive && se(te);
    }
  });
  const Te = q(
    (te = {}, ve = null) => ({
      ...te,
      ...I,
      ref: Pt(ve, A),
      tabIndex: -1,
      "aria-disabled": go(d),
      "data-focused": tr(ee),
      style: {
        ...te.style,
        ...Ce
      }
    }),
    [I, d, ee, Ce]
  ), At = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: Pt(ve, w),
      id: $,
      "data-disabled": tr(d),
      style: {
        ...te.style,
        ...ct
      }
    }),
    [d, $, ct]
  ), gt = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      style: {
        ...te.style,
        ...tt
      }
    }),
    [tt]
  ), it = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: Pt(ve, H),
      role: "slider",
      tabIndex: D ? 0 : void 0,
      id: ae,
      "data-active": tr(J),
      "aria-valuetext": ge,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": M,
      "aria-orientation": c,
      "aria-disabled": go(d),
      "aria-readonly": go(f),
      "aria-label": y,
      "aria-labelledby": y ? void 0 : S,
      style: {
        ...te.style,
        ...dt(0)
      },
      onKeyDown: bo(te.onKeyDown, $e),
      onFocus: bo(te.onFocus, () => oe(!0)),
      onBlur: bo(te.onBlur, () => oe(!1))
    }),
    [
      D,
      ae,
      J,
      ge,
      r,
      n,
      M,
      c,
      d,
      f,
      y,
      S,
      dt,
      $e
    ]
  ), Nr = q(
    (te, ve = null) => {
      const Sr = !(te.value < r || te.value > n), G = M >= te.value, ie = vs(te.value, r, n), be = {
        position: "absolute",
        pointerEvents: "none",
        ...iz({
          orientation: c,
          vertical: {
            bottom: B ? `${100 - ie}%` : `${ie}%`
          },
          horizontal: {
            left: B ? `${100 - ie}%` : `${ie}%`
          }
        })
      };
      return {
        ...te,
        ref: ve,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": tr(d),
        "data-invalid": tr(!Sr),
        "data-highlighted": tr(G),
        style: {
          ...te.style,
          ...be
        }
      };
    },
    [d, B, n, r, c, M]
  ), jr = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      type: "hidden",
      value: M,
      name: E
    }),
    [E, M]
  );
  return {
    state: { value: M, isFocused: ee, isDragging: J },
    actions: le,
    getRootProps: Te,
    getTrackProps: At,
    getInnerTrackProps: gt,
    getThumbProps: it,
    getMarkerProps: Nr,
    getInputProps: jr
  };
}
function iz(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function sz(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [lz, Js] = lr({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [cz, Qs] = lr({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), uz = Ue((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = js("Slider", n), a = Ba(n), { direction: i } = Vn();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = az(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ W.jsx(lz, { value: c, children: /* @__PURE__ */ W.jsx(cz, { value: o, children: /* @__PURE__ */ W.jsxs(
    ke.div,
    {
      ...u,
      className: Sn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ W.jsx("input", { ...d })
      ]
    }
  ) }) });
});
uz.displayName = "Slider";
var dz = Ue((e, t) => {
  const { getThumbProps: r } = Js(), n = Qs(), o = r(e, t);
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ...o,
      className: Sn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
dz.displayName = "SliderThumb";
var fz = Ue((e, t) => {
  const { getTrackProps: r } = Js(), n = Qs(), o = r(e, t);
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ...o,
      className: Sn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
fz.displayName = "SliderTrack";
var pz = Ue(
  (e, t) => {
    const { getInnerTrackProps: r } = Js(), n = Qs(), o = r(e, t);
    return /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...o,
        className: Sn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
pz.displayName = "SliderFilledTrack";
var hz = Ue((e, t) => {
  const { getMarkerProps: r } = Js(), n = Qs(), o = r(e, t);
  return /* @__PURE__ */ W.jsx(
    ke.div,
    {
      ...o,
      className: Sn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
hz.displayName = "SliderMark";
var mz = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
}, du = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, Gi = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function vz(e = {}) {
  const {
    openDelay: t = 0,
    closeDelay: r = 0,
    closeOnClick: n = !0,
    closeOnMouseDown: o,
    closeOnScroll: a,
    closeOnPointerDown: i = o,
    closeOnEsc: s = !0,
    onOpen: l,
    onClose: c,
    placement: u,
    id: d,
    isOpen: f,
    defaultIsOpen: p,
    arrowSize: m = 10,
    arrowShadowColor: h,
    arrowPadding: g,
    modifiers: b,
    isDisabled: y,
    gutter: S,
    offset: E,
    direction: C,
    ...I
  } = e, { isOpen: T, onOpen: N, onClose: V } = oy({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: B, getPopperProps: X, getArrowInnerProps: ne, getArrowProps: J } = ny({
    enabled: T,
    placement: u,
    arrowPadding: g,
    modifiers: b,
    gutter: S,
    offset: E,
    direction: C
  }), Q = Ir(), oe = `tooltip-${d ?? Q}`, D = ye(null), ce = ye(), de = q(() => {
    ce.current && (clearTimeout(ce.current), ce.current = void 0);
  }, []), M = ye(), F = q(() => {
    M.current && (clearTimeout(M.current), M.current = void 0);
  }, []), z = q(() => {
    F(), V();
  }, [V, F]), P = gz(D, z), O = q(() => {
    if (!y && !ce.current) {
      P();
      const $ = Gi(D);
      ce.current = $.setTimeout(N, t);
    }
  }, [P, y, N, t]), j = q(() => {
    de();
    const $ = Gi(D);
    M.current = $.setTimeout(z, r);
  }, [r, z, de]), w = q(() => {
    T && n && j();
  }, [n, j, T]), H = q(() => {
    T && i && j();
  }, [i, j, T]), A = q(
    ($) => {
      T && $.key === "Escape" && j();
    },
    [T, j]
  );
  da(
    () => du(D),
    "keydown",
    s ? A : void 0
  ), da(
    () => {
      const $ = D.current;
      if (!$)
        return null;
      const xe = zb($);
      return xe.localName === "body" ? Gi(D) : xe;
    },
    "scroll",
    () => {
      T && a && z();
    },
    { passive: !0, capture: !0 }
  ), ze(() => {
    y && (de(), T && V());
  }, [y, T, V, de]), ze(() => () => {
    de(), F();
  }, [de, F]), da(() => D.current, "pointerleave", j);
  const Z = q(
    ($ = {}, xe = null) => ({
      ...$,
      ref: Pt(D, xe, B),
      onPointerEnter: Ht($.onPointerEnter, (le) => {
        le.pointerType !== "touch" && O();
      }),
      onClick: Ht($.onClick, w),
      onPointerDown: Ht($.onPointerDown, H),
      onFocus: Ht($.onFocus, O),
      onBlur: Ht($.onBlur, j),
      "aria-describedby": T ? oe : void 0
    }),
    [
      O,
      j,
      H,
      T,
      oe,
      w,
      B
    ]
  ), Y = q(
    ($ = {}, xe = null) => X(
      {
        ...$,
        style: {
          ...$.style,
          [Ct.arrowSize.var]: m ? `${m}px` : void 0,
          [Ct.arrowShadowColor.var]: h
        }
      },
      xe
    ),
    [X, m, h]
  ), ae = q(
    ($ = {}, xe = null) => {
      const pe = {
        ...$.style,
        position: "relative",
        transformOrigin: Ct.transformOrigin.varRef
      };
      return {
        ref: xe,
        ...I,
        ...$,
        id: oe,
        role: "tooltip",
        style: pe
      };
    },
    [I, oe]
  );
  return {
    isOpen: T,
    show: O,
    hide: j,
    getTriggerProps: Z,
    getTooltipProps: ae,
    getTooltipPositionerProps: Y,
    getArrowProps: J,
    getArrowInnerProps: ne
  };
}
var pc = "chakra-ui:close-tooltip";
function gz(e, t) {
  return ze(() => {
    const r = du(e);
    return r.addEventListener(pc, t), () => r.removeEventListener(pc, t);
  }, [t, e]), () => {
    const r = du(e), n = Gi(e);
    r.dispatchEvent(new n.CustomEvent(pc));
  };
}
function bz(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function yz(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var xz = ke(yn.div), Sz = Ue((e, t) => {
  var r, n;
  const o = ju("Tooltip", e), a = Ba(e), i = Vn(), {
    children: s,
    label: l,
    shouldWrapChildren: c,
    "aria-label": u,
    hasArrow: d,
    bg: f,
    portalProps: p,
    background: m,
    backgroundColor: h,
    bgColor: g,
    motionProps: b,
    ...y
  } = a, S = (n = (r = m ?? h) != null ? r : f) != null ? n : g;
  if (S) {
    o.bg = S;
    const X = nv(i, "colors", S);
    o[Ct.arrowBg.var] = X;
  }
  const E = vz({ ...y, direction: i.direction }), C = typeof s == "string" || c;
  let I;
  if (C)
    I = /* @__PURE__ */ W.jsx(
      ke.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...E.getTriggerProps(),
        children: s
      }
    );
  else {
    const X = Cs.only(s);
    I = ws(
      X,
      E.getTriggerProps(X.props, X.ref)
    );
  }
  const T = !!u, N = E.getTooltipProps({}, t), V = T ? bz(N, ["role", "id"]) : N, B = yz(N, ["role", "id"]);
  return l ? /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    I,
    /* @__PURE__ */ W.jsx($o, { children: E.isOpen && /* @__PURE__ */ W.jsx(ja, { ...p, children: /* @__PURE__ */ W.jsx(
      ke.div,
      {
        ...E.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ W.jsxs(
          xz,
          {
            variants: mz,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...b,
            ...V,
            __css: o,
            children: [
              l,
              T && /* @__PURE__ */ W.jsx(ke.span, { srOnly: !0, ...B, children: u }),
              d && /* @__PURE__ */ W.jsx(
                ke.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ W.jsx(
                    ke.div,
                    {
                      "data-popper-arrow-inner": !0,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: o.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] }) : /* @__PURE__ */ W.jsx(W.Fragment, { children: s });
});
Sz.displayName = "Tooltip";
const lV = Tt(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ W.jsx(Am, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  pz as $,
  Nn as A,
  Ez as B,
  Pz as C,
  nF as D,
  EB as E,
  Am as F,
  vB as G,
  _B as H,
  TB as I,
  PB as J,
  CB as K,
  Aw as L,
  py as M,
  bj as N,
  k5 as O,
  kj as P,
  Cj as Q,
  xj as R,
  h0 as S,
  ba as T,
  Ej as U,
  Pm as V,
  _s as W,
  QN as X,
  uz as Y,
  fz as Z,
  d0 as _,
  RS as a,
  ua as a$,
  dz as a0,
  ez as a1,
  rz as a2,
  nz as a3,
  tz as a4,
  sV as a5,
  wB as a6,
  kz as a7,
  Tu as a8,
  $z as a9,
  un as aA,
  Ue as aB,
  Qg as aC,
  ju as aD,
  Ba as aE,
  bt as aF,
  lr as aG,
  js as aH,
  eb as aI,
  $o as aJ,
  ja as aK,
  Xm as aL,
  Uz as aM,
  wv as aN,
  V$ as aO,
  HI as aP,
  ad as aQ,
  Pt as aR,
  Ht as aS,
  jz as aT,
  Jc as aU,
  Xr as aV,
  Km as aW,
  QI as aX,
  rV as aY,
  Bz as aZ,
  l_ as a_,
  Dz as aa,
  Iz as ab,
  LC as ac,
  VC as ad,
  Ji as ae,
  qm as af,
  _v as ag,
  br as ah,
  Zz as ai,
  tR as aj,
  Xz as ak,
  Jz as al,
  eR as am,
  hp as an,
  Kz as ao,
  zz as ap,
  Mz as aq,
  Y$ as ar,
  X$ as as,
  xk as at,
  ZC as au,
  qt as av,
  eV as aw,
  Oo as ax,
  yn as ay,
  ke as az,
  Zn as b,
  Js as b$,
  tF as b0,
  rF as b1,
  da as b2,
  qz as b3,
  Gz as b4,
  Vn as b5,
  a_ as b6,
  Ka as b7,
  aV as b8,
  oV as b9,
  lj as bA,
  uj as bB,
  dj as bC,
  Ro as bD,
  sj as bE,
  ij as bF,
  aj as bG,
  sy as bH,
  fj as bI,
  pj as bJ,
  iV as bK,
  Lj as bL,
  xy as bM,
  bB as bN,
  jj as bO,
  gn as bP,
  dy as bQ,
  Un as bR,
  KC as bS,
  oz as bT,
  JB as bU,
  hz as bV,
  lz as bW,
  KB as bX,
  Ks as bY,
  Zs as bZ,
  az as b_,
  yj as ba,
  cy as bb,
  oy as bc,
  ny as bd,
  rj as be,
  R5 as bf,
  nV as bg,
  nj as bh,
  Ct as bi,
  Vz as bj,
  me as bk,
  Nz as bl,
  O5 as bm,
  qe as bn,
  dE as bo,
  uE as bp,
  Lz as bq,
  gE as br,
  Hz as bs,
  Bw as bt,
  Vw as bu,
  Hb as bv,
  _5 as bw,
  Gb as bx,
  ly as by,
  oj as bz,
  DS as c,
  Qs as c0,
  fR as c1,
  Nl as c2,
  wR as c3,
  Qz as c4,
  Fz as c5,
  Y_ as c6,
  Oi as c7,
  Fe as c8,
  Pn as c9,
  G_ as cA,
  d_ as cB,
  j_ as cC,
  B_ as cD,
  z_ as cE,
  Ek as cF,
  kk as cG,
  Yz as cH,
  vz as cI,
  GI as cJ,
  XI as cK,
  ob as cL,
  ZI as cM,
  rb as cN,
  Qc as cO,
  nb as cP,
  eu as cQ,
  E_ as ca,
  X_ as cb,
  Wz as cc,
  Pc as cd,
  P_ as ce,
  ck as cf,
  es as cg,
  nv as ch,
  yk as ci,
  Jm as cj,
  T_ as ck,
  pk as cl,
  er as cm,
  A_ as cn,
  I_ as co,
  ea as cp,
  dk as cq,
  rv as cr,
  Ms as cs,
  _k as ct,
  F_ as cu,
  V_ as cv,
  Ke as cw,
  $u as cx,
  N_ as cy,
  q_ as cz,
  $n as d,
  MS as e,
  Tz as f,
  IS as g,
  xc as h,
  dm as i,
  W as j,
  Az as k,
  zw as l,
  zn as m,
  _z as n,
  Sz as o,
  Yb as p,
  ma as q,
  mc as r,
  gc as s,
  Oz as t,
  Rz as u,
  o1 as v,
  mm as w,
  c0 as x,
  pu as y,
  lV as z
};
