import * as U from "react";
import Dt, { createContext as Sr, forwardRef as Tt, createElement as or, Fragment as yu, useContext as dt, useLayoutEffect as Es, useEffect as Fe, useState as Ye, useRef as be, useMemo as vt, useReducer as g0, useCallback as q, useInsertionEffect as pm, useId as wr, cloneElement as La, Children as Ps, isValidElement as xu, PureComponent as b0 } from "react";
import { createPortal as hm } from "react-dom";
var di = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function As(e) {
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
var yc = { exports: {} }, zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function y0() {
  if (Ld)
    return zo;
  Ld = 1;
  var e = Dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return zo.Fragment = r, zo.jsx = i, zo.jsxs = i, zo;
}
var Vo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function x0() {
  return Wd || (Wd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Dt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function v(x) {
      if (x === null || typeof x != "object")
        return null;
      var W = m && x[m] || x[h];
      return typeof W == "function" ? W : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var W = arguments.length, K = new Array(W > 1 ? W - 1 : 0), he = 1; he < W; he++)
          K[he - 1] = arguments[he];
        S("error", x, K);
      }
    }
    function S(x, W, K) {
      {
        var he = b.ReactDebugCurrentFrame, De = he.getStackAddendum();
        De !== "" && (W += "%s", K = K.concat([De]));
        var Oe = K.map(function(Pe) {
          return String(Pe);
        });
        Oe.unshift("Warning: " + W), Function.prototype.apply.call(console[x], console, Oe);
      }
    }
    var k = !1, w = !1, M = !1, P = !1, I = !1, z;
    z = Symbol.for("react.module.reference");
    function j(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || I || x === o || x === c || x === u || P || x === p || k || w || M || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function X(x, W, K) {
      var he = x.displayName;
      if (he)
        return he;
      var De = W.displayName || W.name || "";
      return De !== "" ? K + "(" + De + ")" : K;
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
            var W = x;
            return ne(W) + ".Consumer";
          case i:
            var K = x;
            return ne(K._context) + ".Provider";
          case l:
            return X(x, x.render, "ForwardRef");
          case d:
            var he = x.displayName || null;
            return he !== null ? he : J(x.type) || "Memo";
          case f: {
            var De = x, Oe = De._payload, Pe = De._init;
            try {
              return J(Pe(Oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ee = 0, oe, D, ce, de, F, N, V;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function O() {
      {
        if (ee === 0) {
          oe = console.log, D = console.info, ce = console.warn, de = console.error, F = console.group, N = console.groupCollapsed, V = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: T,
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
    function B() {
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
              value: F
            }),
            groupCollapsed: Q({}, x, {
              value: N
            }),
            groupEnd: Q({}, x, {
              value: V
            })
          });
        }
        ee < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = b.ReactCurrentDispatcher, H;
    function A(x, W, K) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (De) {
            var he = De.stack.trim().match(/\n( *(at )?)/);
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
    function R(x, W) {
      if (!x || Z)
        return "";
      {
        var K = Y.get(x);
        if (K !== void 0)
          return K;
      }
      var he;
      Z = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Oe;
      Oe = C.current, C.current = null, O();
      try {
        if (W) {
          var Pe = function() {
            throw Error();
          };
          if (Object.defineProperty(Pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pe, []);
            } catch (Nt) {
              he = Nt;
            }
            Reflect.construct(x, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (Nt) {
              he = Nt;
            }
            x.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Nt) {
            he = Nt;
          }
          x();
        }
      } catch (Nt) {
        if (Nt && he && typeof Nt.stack == "string") {
          for (var Ee = Nt.stack.split(`
`), wt = he.stack.split(`
`), ot = Ee.length - 1, lt = wt.length - 1; ot >= 1 && lt >= 0 && Ee[ot] !== wt[lt]; )
            lt--;
          for (; ot >= 1 && lt >= 0; ot--, lt--)
            if (Ee[ot] !== wt[lt]) {
              if (ot !== 1 || lt !== 1)
                do
                  if (ot--, lt--, lt < 0 || Ee[ot] !== wt[lt]) {
                    var Ft = `
` + Ee[ot].replace(" at new ", " at ");
                    return x.displayName && Ft.includes("<anonymous>") && (Ft = Ft.replace("<anonymous>", x.displayName)), typeof x == "function" && Y.set(x, Ft), Ft;
                  }
                while (ot >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        Z = !1, C.current = Oe, B(), Error.prepareStackTrace = De;
      }
      var kr = x ? x.displayName || x.name : "", si = kr ? A(kr) : "";
      return typeof x == "function" && Y.set(x, si), si;
    }
    function Se(x, W, K) {
      return R(x, !1);
    }
    function pe(x) {
      var W = x.prototype;
      return !!(W && W.isReactComponent);
    }
    function le(x, W, K) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return R(x, pe(x));
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
            return Se(x.render);
          case d:
            return le(x.type, W, K);
          case f: {
            var he = x, De = he._payload, Oe = he._init;
            try {
              return le(Oe(De), W, K);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, ye = {}, we = b.ReactDebugCurrentFrame;
    function pt(x) {
      if (x) {
        var W = x._owner, K = le(x.type, x._source, W ? W.type : null);
        we.setExtraStackFrame(K);
      } else
        we.setExtraStackFrame(null);
    }
    function ke(x, W, K, he, De) {
      {
        var Oe = Function.call.bind($e);
        for (var Pe in x)
          if (Oe(x, Pe)) {
            var Ee = void 0;
            try {
              if (typeof x[Pe] != "function") {
                var wt = Error((he || "React class") + ": " + K + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wt.name = "Invariant Violation", wt;
              }
              Ee = x[Pe](W, Pe, he, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              Ee = ot;
            }
            Ee && !(Ee instanceof Error) && (pt(De), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", K, Pe, typeof Ee), pt(null)), Ee instanceof Error && !(Ee.message in ye) && (ye[Ee.message] = !0, pt(De), y("Failed %s type: %s", K, Ee.message), pt(null));
          }
      }
    }
    var ut = Array.isArray;
    function rt(x) {
      return ut(x);
    }
    function Me(x) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, K = W && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return K;
      }
    }
    function se(x) {
      try {
        return Ae(x), !1;
      } catch {
        return !0;
      }
    }
    function Ae(x) {
      return "" + x;
    }
    function At(x) {
      if (se(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(x)), Ae(x);
    }
    var yt = b.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jr, Br, zr;
    zr = {};
    function te(x) {
      if ($e.call(x, "ref")) {
        var W = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ve(x) {
      if ($e.call(x, "key")) {
        var W = Object.getOwnPropertyDescriptor(x, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Cr(x, W) {
      if (typeof x.ref == "string" && yt.current && W && yt.current.stateNode !== W) {
        var K = J(yt.current.type);
        zr[K] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(yt.current.type), x.ref), zr[K] = !0);
      }
    }
    function G(x, W) {
      {
        var K = function() {
          jr || (jr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        K.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function ie(x, W) {
      {
        var K = function() {
          Br || (Br = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        K.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var xe = function(x, W, K, he, De, Oe, Pe) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: W,
        ref: K,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: Oe
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Ce(x, W, K, he, De) {
      {
        var Oe, Pe = {}, Ee = null, wt = null;
        K !== void 0 && (At(K), Ee = "" + K), ve(W) && (At(W.key), Ee = "" + W.key), te(W) && (wt = W.ref, Cr(W, De));
        for (Oe in W)
          $e.call(W, Oe) && !st.hasOwnProperty(Oe) && (Pe[Oe] = W[Oe]);
        if (x && x.defaultProps) {
          var ot = x.defaultProps;
          for (Oe in ot)
            Pe[Oe] === void 0 && (Pe[Oe] = ot[Oe]);
        }
        if (Ee || wt) {
          var lt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ee && G(Pe, lt), wt && ie(Pe, lt);
        }
        return xe(x, Ee, wt, De, he, yt.current, Pe);
      }
    }
    var He = b.ReactCurrentOwner, St = b.ReactDebugCurrentFrame;
    function Ze(x) {
      if (x) {
        var W = x._owner, K = le(x.type, x._source, W ? W.type : null);
        St.setExtraStackFrame(K);
      } else
        St.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function Vr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function _r() {
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
    function ol(x) {
      {
        if (x !== void 0) {
          var W = x.fileName.replace(/^.*[\\\/]/, ""), K = x.lineNumber;
          return `

Check your code at ` + W + ":" + K + ".";
        }
        return "";
      }
    }
    var ni = {};
    function al(x) {
      {
        var W = _r();
        if (!W) {
          var K = typeof x == "string" ? x : x.displayName || x.name;
          K && (W = `

Check the top-level render call using <` + K + ">.");
        }
        return W;
      }
    }
    function oi(x, W) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var K = al(W);
        if (ni[K])
          return;
        ni[K] = !0;
        var he = "";
        x && x._owner && x._owner !== He.current && (he = " It was passed a child from " + J(x._owner.type) + "."), Ze(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, he), Ze(null);
      }
    }
    function ai(x, W) {
      {
        if (typeof x != "object")
          return;
        if (rt(x))
          for (var K = 0; K < x.length; K++) {
            var he = x[K];
            Vr(he) && oi(he, W);
          }
        else if (Vr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var De = v(x);
          if (typeof De == "function" && De !== x.entries)
            for (var Oe = De.call(x), Pe; !(Pe = Oe.next()).done; )
              Vr(Pe.value) && oi(Pe.value, W);
        }
      }
    }
    function ur(x) {
      {
        var W = x.type;
        if (W == null || typeof W == "string")
          return;
        var K;
        if (typeof W == "function")
          K = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === d))
          K = W.propTypes;
        else
          return;
        if (K) {
          var he = J(W);
          ke(K, x.props, "prop", he, x);
        } else if (W.PropTypes !== void 0 && !nt) {
          nt = !0;
          var De = J(W);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function il(x) {
      {
        for (var W = Object.keys(x.props), K = 0; K < W.length; K++) {
          var he = W[K];
          if (he !== "children" && he !== "key") {
            Ze(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Ze(null);
            break;
          }
        }
        x.ref !== null && (Ze(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    function ii(x, W, K, he, De, Oe) {
      {
        var Pe = j(x);
        if (!Pe) {
          var Ee = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wt = ol(De);
          wt ? Ee += wt : Ee += _r();
          var ot;
          x === null ? ot = "null" : rt(x) ? ot = "array" : x !== void 0 && x.$$typeof === t ? (ot = "<" + (J(x.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, Ee);
        }
        var lt = Ce(x, W, K, De, Oe);
        if (lt == null)
          return lt;
        if (Pe) {
          var Ft = W.children;
          if (Ft !== void 0)
            if (he)
              if (rt(Ft)) {
                for (var kr = 0; kr < Ft.length; kr++)
                  ai(Ft[kr], x);
                Object.freeze && Object.freeze(Ft);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ai(Ft, x);
        }
        return x === n ? il(lt) : ur(lt), lt;
      }
    }
    function sl(x, W, K) {
      return ii(x, W, K, !0);
    }
    function ll(x, W, K) {
      return ii(x, W, K, !1);
    }
    var cl = ll, on = sl;
    Vo.Fragment = n, Vo.jsx = cl, Vo.jsxs = on;
  }()), Vo;
}
process.env.NODE_ENV === "production" ? yc.exports = y0() : yc.exports = x0();
var L = yc.exports, ya = {};
function xa(e) {
  "@babel/helpers - typeof";
  return xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xa(e);
}
function S0(e, t) {
  if (xa(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xa(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w0(e) {
  var t = S0(e, "string");
  return xa(t) === "symbol" ? t : String(t);
}
function Su(e, t, r) {
  return t = w0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function mm(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var C0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vm = mm(
  function(e) {
    return C0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function xc(e, t) {
  return xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, xc(e, t);
}
function _0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xc(e, t);
}
function k0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function E0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t;
}
var P0 = /* @__PURE__ */ function() {
  function e(r) {
    this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.before = null;
  }
  var t = e.prototype;
  return t.insert = function(n) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var o = E0(this), a;
      this.tags.length === 0 ? a = this.before : a = this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(o, a), this.tags.push(o);
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = k0(i);
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
function T0(e) {
  function t(V, T, O, B, C) {
    for (var H = 0, A = 0, Z = 0, Y = 0, ae, R, Se = 0, pe = 0, le, $e = le = ae = 0, ye = 0, we = 0, pt = 0, ke = 0, ut = O.length, rt = ut - 1, Me, se = "", Ae = "", At = "", yt = "", st; ye < ut; ) {
      if (R = O.charCodeAt(ye), ye === rt && A + Y + Z + H !== 0 && (A !== 0 && (R = A === 47 ? 10 : 47), Y = Z = H = 0, ut++, rt++), A + Y + Z + H === 0) {
        if (ye === rt && (0 < we && (se = se.replace(f, "")), 0 < se.trim().length)) {
          switch (R) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += O.charAt(ye);
          }
          R = 59;
        }
        switch (R) {
          case 123:
            for (se = se.trim(), ae = se.charCodeAt(0), le = 1, ke = ++ye; ye < ut; ) {
              switch (R = O.charCodeAt(ye)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (R = O.charCodeAt(ye + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for ($e = ye + 1; $e < rt; ++$e)
                          switch (O.charCodeAt($e)) {
                            case 47:
                              if (R === 42 && O.charCodeAt($e - 1) === 42 && ye + 2 !== $e) {
                                ye = $e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (R === 47) {
                                ye = $e + 1;
                                break e;
                              }
                          }
                        ye = $e;
                      }
                  }
                  break;
                case 91:
                  R++;
                case 40:
                  R++;
                case 34:
                case 39:
                  for (; ye++ < rt && O.charCodeAt(ye) !== R; )
                    ;
              }
              if (le === 0)
                break;
              ye++;
            }
            switch (le = O.substring(ke, ye), ae === 0 && (ae = (se = se.replace(d, "").trim()).charCodeAt(0)), ae) {
              case 64:
                switch (0 < we && (se = se.replace(f, "")), R = se.charCodeAt(1), R) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    we = T;
                    break;
                  default:
                    we = oe;
                }
                if (le = t(T, we, le, R, C + 1), ke = le.length, 0 < ce && (we = r(oe, se, pt), st = s(3, le, we, T, J, ne, ke, R, C, B), se = we.join(""), st !== void 0 && (ke = (le = st.trim()).length) === 0 && (R = 0, le = "")), 0 < ke)
                  switch (R) {
                    case 115:
                      se = se.replace(M, i);
                    case 100:
                    case 109:
                    case 45:
                      le = se + "{" + le + "}";
                      break;
                    case 107:
                      se = se.replace(y, "$1 $2"), le = se + "{" + le + "}", le = ee === 1 || ee === 2 && a("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                      break;
                    default:
                      le = se + le, B === 112 && (le = (Ae += le, ""));
                  }
                else
                  le = "";
                break;
              default:
                le = t(T, r(T, se, pt), le, B, C + 1);
            }
            At += le, le = pt = we = $e = ae = 0, se = "", R = O.charCodeAt(++ye);
            break;
          case 125:
          case 59:
            if (se = (0 < we ? se.replace(f, "") : se).trim(), 1 < (ke = se.length))
              switch ($e === 0 && (ae = se.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (ke = (se = se.replace(" ", ":")).length), 0 < ce && (st = s(1, se, T, V, J, ne, Ae.length, B, C, B)) !== void 0 && (ke = (se = st.trim()).length) === 0 && (se = "\0\0"), ae = se.charCodeAt(0), R = se.charCodeAt(1), ae) {
                case 0:
                  break;
                case 64:
                  if (R === 105 || R === 99) {
                    yt += se + O.charAt(ye);
                    break;
                  }
                default:
                  se.charCodeAt(ke - 1) !== 58 && (Ae += o(se, ae, R, se.charCodeAt(2)));
              }
            pt = we = $e = ae = 0, se = "", R = O.charCodeAt(++ye);
        }
      }
      switch (R) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + ae === 0 && B !== 107 && 0 < se.length && (we = 1, se += "\0"), 0 < ce * F && s(0, se, T, V, J, ne, Ae.length, B, C, B), ne = 1, J++;
          break;
        case 59:
        case 125:
          if (A + Y + Z + H === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, Me = O.charAt(ye), R) {
            case 9:
            case 32:
              if (Y + H + A === 0)
                switch (Se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Me = "";
                    break;
                  default:
                    R !== 32 && (Me = " ");
                }
              break;
            case 0:
              Me = "\\0";
              break;
            case 12:
              Me = "\\f";
              break;
            case 11:
              Me = "\\v";
              break;
            case 38:
              Y + A + H === 0 && (we = pt = 1, Me = "\f" + Me);
              break;
            case 108:
              if (Y + A + H + Q === 0 && 0 < $e)
                switch (ye - $e) {
                  case 2:
                    Se === 112 && O.charCodeAt(ye - 3) === 58 && (Q = Se);
                  case 8:
                    pe === 111 && (Q = pe);
                }
              break;
            case 58:
              Y + A + H === 0 && ($e = ye);
              break;
            case 44:
              A + Z + Y + H === 0 && (we = 1, Me += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (Y = Y === R ? 0 : Y === 0 ? R : Y);
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
                  switch (2 * Se + 3 * pe) {
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
                    switch (2 * R + 3 * O.charCodeAt(ye + 1)) {
                      case 235:
                        A = 47;
                        break;
                      case 220:
                        ke = ye, A = 42;
                    }
                    break;
                  case 42:
                    R === 47 && Se === 42 && ke + 2 !== ye && (O.charCodeAt(ke + 2) === 33 && (Ae += O.substring(ke, ye + 1)), Me = "", A = 0);
                }
          }
          A === 0 && (se += Me);
      }
      pe = Se, Se = R, ye++;
    }
    if (ke = Ae.length, 0 < ke) {
      if (we = T, 0 < ce && (st = s(2, Ae, we, V, J, ne, ke, B, C, B), st !== void 0 && (Ae = st).length === 0))
        return yt + Ae + At;
      if (Ae = we.join(",") + "{" + Ae + "}", ee * Q !== 0) {
        switch (ee !== 2 || a(Ae, 2) || (Q = 0), Q) {
          case 111:
            Ae = Ae.replace(k, ":-moz-$1") + Ae;
            break;
          case 112:
            Ae = Ae.replace(S, "::-webkit-input-$1") + Ae.replace(S, "::-moz-$1") + Ae.replace(S, ":-ms-input-$1") + Ae;
        }
        Q = 0;
      }
    }
    return yt + Ae + At;
  }
  function r(V, T, O) {
    var B = T.trim().split(v);
    T = B;
    var C = B.length, H = V.length;
    switch (H) {
      case 0:
      case 1:
        var A = 0;
        for (V = H === 0 ? "" : V[0] + " "; A < C; ++A)
          T[A] = n(V, T[A], O).trim();
        break;
      default:
        var Z = A = 0;
        for (T = []; A < C; ++A)
          for (var Y = 0; Y < H; ++Y)
            T[Z++] = n(V[Y] + " ", B[A], O).trim();
    }
    return T;
  }
  function n(V, T, O) {
    var B = T.charCodeAt(0);
    switch (33 > B && (B = (T = T.trim()).charCodeAt(0)), B) {
      case 38:
        return T.replace(b, "$1" + V.trim());
      case 58:
        return V.trim() + T.replace(b, "$1" + V.trim());
      default:
        if (0 < 1 * O && 0 < T.indexOf("\f"))
          return T.replace(b, (V.charCodeAt(0) === 58 ? "" : "$1") + V.trim());
    }
    return V + T;
  }
  function o(V, T, O, B) {
    var C = V + ";", H = 2 * T + 3 * O + 4 * B;
    if (H === 944) {
      V = C.indexOf(":", 9) + 1;
      var A = C.substring(V, C.length - 1).trim();
      return A = C.substring(0, V).trim() + A + ";", ee === 1 || ee === 2 && a(A, 1) ? "-webkit-" + A + A : A;
    }
    if (ee === 0 || ee === 2 && !a(C, 1))
      return C;
    switch (H) {
      case 1015:
        return C.charCodeAt(10) === 97 ? "-webkit-" + C + C : C;
      case 951:
        return C.charCodeAt(3) === 116 ? "-webkit-" + C + C : C;
      case 963:
        return C.charCodeAt(5) === 110 ? "-webkit-" + C + C : C;
      case 1009:
        if (C.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + C + C;
      case 978:
        return "-webkit-" + C + "-moz-" + C + C;
      case 1019:
      case 983:
        return "-webkit-" + C + "-moz-" + C + "-ms-" + C + C;
      case 883:
        if (C.charCodeAt(8) === 45)
          return "-webkit-" + C + C;
        if (0 < C.indexOf("image-set(", 11))
          return C.replace(X, "$1-webkit-$2") + C;
        break;
      case 932:
        if (C.charCodeAt(4) === 45)
          switch (C.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + C.replace("-grow", "") + "-webkit-" + C + "-ms-" + C.replace("grow", "positive") + C;
            case 115:
              return "-webkit-" + C + "-ms-" + C.replace("shrink", "negative") + C;
            case 98:
              return "-webkit-" + C + "-ms-" + C.replace("basis", "preferred-size") + C;
          }
        return "-webkit-" + C + "-ms-" + C + C;
      case 964:
        return "-webkit-" + C + "-ms-flex-" + C + C;
      case 1023:
        if (C.charCodeAt(8) !== 99)
          break;
        return A = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + C + "-ms-flex-pack" + A + C;
      case 1005:
        return m.test(C) ? C.replace(p, ":-webkit-") + C.replace(p, ":-moz-") + C : C;
      case 1e3:
        switch (A = C.substring(13).trim(), T = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(T)) {
          case 226:
            A = C.replace(w, "tb");
            break;
          case 232:
            A = C.replace(w, "tb-rl");
            break;
          case 220:
            A = C.replace(w, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + A + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (T = (C = V).length - 10, A = (C.charCodeAt(T) === 33 ? C.substring(0, T) : C).substring(V.indexOf(":", 7) + 1).trim(), H = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8))
              break;
          case 115:
            C = C.replace(A, "-webkit-" + A) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(A, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + C.replace(A, "-webkit-" + A) + ";" + C.replace(A, "-ms-" + A + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return A = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + A + "-ms-flex-" + A + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(I, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(I, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (j.test(V) === !0)
          return (A = V.substring(V.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(V.replace("stretch", "fill-available"), T, O, B).replace(":fill-available", ":stretch") : C.replace(A, "-webkit-" + A) + C.replace(A, "-moz-" + A.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, O + B === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + C;
    }
    return C;
  }
  function a(V, T) {
    var O = V.indexOf(T === 1 ? ":" : "{"), B = V.substring(0, T !== 3 ? O : 10);
    return O = V.substring(O + 1, V.length - 1), de(T !== 2 ? B : B.replace(z, "$1"), O, T);
  }
  function i(V, T) {
    var O = o(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return O !== T + ";" ? O.replace(P, " or ($1)").substring(4) : "(" + T + ")";
  }
  function s(V, T, O, B, C, H, A, Z, Y, ae) {
    for (var R = 0, Se = T, pe; R < ce; ++R)
      switch (pe = D[R].call(u, V, Se, O, B, C, H, A, Z, Y, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Se = pe;
      }
    if (Se !== T)
      return Se;
  }
  function l(V) {
    switch (V) {
      case void 0:
      case null:
        ce = D.length = 0;
        break;
      default:
        if (typeof V == "function")
          D[ce++] = V;
        else if (typeof V == "object")
          for (var T = 0, O = V.length; T < O; ++T)
            l(V[T]);
        else
          F = !!V | 0;
    }
    return l;
  }
  function c(V) {
    return V = V.prefix, V !== void 0 && (de = null, V ? typeof V != "function" ? ee = 1 : (ee = 2, de = V) : ee = 0), c;
  }
  function u(V, T) {
    var O = V;
    if (33 > O.charCodeAt(0) && (O = O.trim()), N = O, O = [N], 0 < ce) {
      var B = s(-1, T, O, O, J, ne, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (T = B);
    }
    var C = t(oe, O, T, 0, 0);
    return 0 < ce && (B = s(-2, C, O, O, J, ne, C.length, 0, 0, 0), B !== void 0 && (C = B)), N = "", Q = 0, ne = J = 1, C;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, p = /: */g, m = /zoo|gra/, h = /([,: ])(transform)/g, v = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, k = /:(read-only)/g, w = /[svh]\w+-[tblr]{2}/, M = /\(\s*(.*)\s*\)/g, P = /([\s\S]*?);/g, I = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, ne = 1, J = 1, Q = 0, ee = 1, oe = [], D = [], ce = 0, de = null, F = 0, N = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var Ud = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, Sc = "/*|*/", A0 = Sc + "}";
function O0(e) {
  e && Sa.current.insert(e + "}");
}
var Sa = {
  current: null
}, R0 = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return Sa.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + Sc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return Sa.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? Sc : "");
      }
    case -2:
      r.split(A0).forEach(O0);
  }
}, $0 = function(t) {
  t === void 0 && (t = {});
  var r = t.key || "css", n;
  t.prefix !== void 0 && (n = {
    prefix: t.prefix
  });
  var o = new T0(n);
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
  if (o.use(t.stylisPlugins)(R0), l = function(p, m, h, v) {
    var b = m.name;
    if (Sa.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var y = m.map;
      Sa.current = {
        insert: function(k) {
          h.insert(k + y);
        }
      };
    }
    o(p, m.styles), v && (d.inserted[b] = !0);
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
          var h = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", v = p.match(/(:first|:nth|:nth-last)-child/g);
          v && d.compat !== !0 && v.forEach(function(b) {
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
    sheet: new P0({
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
}, D0 = !0;
function gm(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var bm = function(t, r, n) {
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
    D0 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do
      t.insert("." + o, a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function M0(e) {
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
var I0 = {
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
}, Hd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, F0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", N0 = /[A-Z]|^ms/g, ym = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wu = function(t) {
  return t.charCodeAt(1) === 45;
}, Yd = function(t) {
  return t != null && typeof t != "boolean";
}, yl = mm(function(e) {
  return wu(e) ? e : e.replace(N0, "-$&").toLowerCase();
}), es = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ym, function(n, o, a) {
          return hr = {
            name: o,
            styles: a,
            next: hr
          }, o;
        });
  }
  return I0[t] !== 1 && !wu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var j0 = /(attr|calc|counters?|url)\(/, B0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], z0 = es, V0 = /^-ms-/, L0 = /-(.)/g, qd = {};
  es = function(t, r) {
    t === "content" && (typeof r != "string" || B0.indexOf(r) === -1 && !j0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = z0(t, r);
    return n !== "" && !wu(t) && t.indexOf("-") !== -1 && qd[t] === void 0 && (qd[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(V0, "ms-").replace(L0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Gd = !0;
function wa(e, t, r, n) {
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
        return hr = {
          name: r.name,
          styles: r.styles,
          next: hr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            hr = {
              name: o.name,
              styles: o.styles,
              next: hr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return W0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = hr, s = r(e);
        return hr = i, wa(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(ym, function(d, f, p) {
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
  return process.env.NODE_ENV !== "production" && n && Gd && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Gd = !1), u !== void 0 && !n ? u : r;
}
function W0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += wa(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Yd(i) && (n += yl(a) + ":" + es(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Yd(i[s]) && (n += yl(a) + ":" + es(a, i[s]) + ";");
        else {
          var l = wa(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += yl(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(F0), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Xd = /label:\s*([^\s;\n{]+)\s*;/g, xm;
process.env.NODE_ENV !== "production" && (xm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var hr, wc = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  hr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += wa(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Hd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += wa(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Hd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(xm, function(f) {
    return l = f, "";
  })), Xd.lastIndex = 0;
  for (var c = "", u; (u = Xd.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = M0(a) + c;
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
}, U0 = Object.prototype.hasOwnProperty, Sm = /* @__PURE__ */ Sr(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? $0() : null
), Ca = /* @__PURE__ */ Sr({});
Sm.Provider;
var wm = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ or(Sm.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ Tt(r);
}, Kd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Zd = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", H0 = function() {
  return null;
}, Jd = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Kd], s = [a], l = "";
  typeof r.className == "string" ? l = gm(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = wc(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[Zd];
    u && (c = wc([c, "label:" + u + ";"]));
  }
  bm(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    U0.call(r, f) && f !== "css" && f !== Kd && (process.env.NODE_ENV === "production" || f !== Zd) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ or(i, d), m = /* @__PURE__ */ or(H0, null);
  return /* @__PURE__ */ or(yu, null, m, p);
}, Y0 = /* @__PURE__ */ wm(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ or(Ca.Consumer, null, function(n) {
    return Jd(t, e, n, r);
  }) : Jd(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (Y0.displayName = "EmotionCssPropInternal");
var q0 = vm, G0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, Qd = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? q0 : G0;
};
function ef(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function X0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(r), !0).forEach(function(n) {
      Su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var tf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, K0 = function() {
  return null;
}, Z0 = function e(t, r) {
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
  var l = o || Qd(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(tf), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(tf), d.push(u[p], u[0][p]);
    }
    var m = wm(function(h, v, b) {
      return /* @__PURE__ */ or(Ca.Consumer, null, function(y) {
        var S = c && h.as || s, k = "", w = [], M = h;
        if (h.theme == null) {
          M = {};
          for (var P in h)
            M[P] = h[P];
          M.theme = y;
        }
        typeof h.className == "string" ? k = gm(v.registered, w, h.className) : h.className != null && (k = h.className + " ");
        var I = wc(d.concat(w), v.registered, M);
        bm(v, I, typeof S == "string"), k += v.key + "-" + I.name, a !== void 0 && (k += " " + a);
        var z = c && o === void 0 ? Qd(S) : l, j = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          z(X) && (j[X] = h[X]);
        j.className = k, j.ref = b || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ne = /* @__PURE__ */ or(S, j), J = /* @__PURE__ */ or(K0, null);
        return /* @__PURE__ */ or(yu, null, J, ne);
      });
    });
    return m.displayName = n !== void 0 ? n : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = s, m.__emotion_styles = d, m.__emotion_forwardProp = o, Object.defineProperty(m, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), m.withComponent = function(h, v) {
      return e(h, v !== void 0 ? X0({}, r || {}, {}, v) : r).apply(void 0, d);
    }, m;
  };
}, J0 = [
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
], Cc = Z0.bind();
J0.forEach(function(e) {
  Cc[e] = Cc(e);
});
const Q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cc
}, Symbol.toStringTag, { value: "Module" })), ex = /* @__PURE__ */ As(Q0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xl, rf;
function Cm() {
  if (rf)
    return xl;
  rf = 1;
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
  return xl = o() ? Object.assign : function(a, i) {
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
  }, xl;
}
var tx = Cm();
const br = /* @__PURE__ */ Ts(tx);
var nf = function(t, r) {
  var n = br({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || br(n, (a = {}, a[o] = br(t[o], r[o]), a));
  }
  return n;
}, rx = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, nx = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, _m = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, ox = function(t, r) {
  return Zr(r, t, t);
}, Zr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Wa = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = Zr(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || Zr(i.theme, "breakpoints", nx.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(_m)), s = nf(s, ax(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = nf(s, ix(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        br(s, d(f, p, i));
      }
    return l && (s = rx(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, ax = function(t, r, n, o, a) {
  var i = {};
  return o.slice(0, t.length).forEach(function(s, l) {
    var c = t[l], u = r(s, n, a);
    if (!c)
      br(i, u);
    else {
      var d;
      br(i, (d = {}, d[c] = br({}, i[c], u), d));
    }
  }), i;
}, ix = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      br(i, u);
    else {
      var d, f = _m(l);
      br(i, (d = {}, d[f] = br({}, i[f], u), d));
    }
  }
  return i;
}, ts = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? ox : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, cr = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = ts({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = ts(a);
  });
  var n = Wa(r);
  return n;
}, Cu = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || br(t, i.config);
  });
  var a = Wa(t);
  return a;
}, sx = function(t) {
  return typeof t == "number" && !isNaN(t);
}, lx = function(t, r) {
  return Zr(r, t, !sx(t) || t > 1 ? t : t * 100 + "%");
}, cx = {
  width: {
    property: "width",
    scale: "sizes",
    transform: lx
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
}, Ht = cr(cx), _c = {
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
_c.bg = _c.backgroundColor;
var _u = cr(_c), ux = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, dx = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: ux.fontSizes
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
}, rn = cr(dx), fx = {
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
}, Mt = cr(fx), Sl = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, px = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: Sl.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: Sl.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: Sl.space
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
}, Yt = cr(px), Et = {
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
Et.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
Et.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
Et.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
Et.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
Et.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
Et.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
Et.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
Et.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
Et.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
Et.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
Et.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
Et.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
Et.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
Et.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
Et.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
Et.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var yr = cr(Et), Jr = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
Jr.bgImage = Jr.backgroundImage;
Jr.bgSize = Jr.backgroundSize;
Jr.bgPosition = Jr.backgroundPosition;
Jr.bgRepeat = Jr.backgroundRepeat;
var Oo = cr(Jr), fi = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, hx = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: fi.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: fi.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: fi.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: fi.space
  }
}, Vn = cr(hx), jt = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, of = function(t) {
  return typeof t == "number" && !isNaN(t);
}, kn = function(t, r) {
  if (!of(t))
    return Zr(r, t, t);
  var n = t < 0, o = Math.abs(t), a = Zr(r, o, o);
  return of(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Ne = {};
Ne.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: kn,
    defaultScale: jt.space
  }
};
Ne.margin.m = Ne.margin.margin;
Ne.margin.mt = Ne.margin.marginTop;
Ne.margin.mr = Ne.margin.marginRight;
Ne.margin.mb = Ne.margin.marginBottom;
Ne.margin.ml = Ne.margin.marginLeft;
Ne.margin.mx = Ne.margin.marginX;
Ne.margin.my = Ne.margin.marginY;
Ne.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: jt.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: jt.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: jt.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: jt.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: jt.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: jt.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: jt.space
  }
};
Ne.padding.p = Ne.padding.padding;
Ne.padding.pt = Ne.padding.paddingTop;
Ne.padding.pr = Ne.padding.paddingRight;
Ne.padding.pb = Ne.padding.paddingBottom;
Ne.padding.pl = Ne.padding.paddingLeft;
Ne.padding.px = Ne.padding.paddingX;
Ne.padding.py = Ne.padding.paddingY;
var km = cr(Ne.margin), Em = cr(Ne.padding), Pm = Cu(km, Em), $i = cr({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function _a() {
  return _a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _a.apply(this, arguments);
}
var pr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, mx = [40, 52, 64].map(function(e) {
  return e + "em";
}), vx = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, gx = {
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
}, af = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, bx = {
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
}, yx = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return pr(t, r, r);
  var n = Math.abs(r), o = pr(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, xx = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return _a({}, e, (r = {}, r[t] = yx, r));
}, {}), Tm = function(t) {
  return function(r) {
    var n = {}, o = pr(r, "breakpoints", mx), a = [null].concat(o.map(function(u) {
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
}, Am = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = _a({}, vx, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = Tm(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(pr(n, c))(n);
        o = _a({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = pr(gx, s, s), f = pr(bx, d), p = pr(n, f, pr(n, d, {})), m = pr(xx, d, pr), h = m(p, c, c);
      if (af[d])
        for (var v = af[d], b = 0; b < v.length; b++)
          o[v[b]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const Om = Am, Sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Am,
  default: Om,
  get: pr,
  responsive: Tm
}, Symbol.toStringTag, { value: "Module" }));
var Os = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return Om(Zr(m, p, null))(h.theme);
  } : c = function(p, m) {
    return Zr(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Wa(u);
  return d;
}, Rm = Os({
  key: "buttons"
}), $m = Os({
  key: "textStyles",
  prop: "textStyle"
}), Dm = Os({
  key: "colorStyles",
  prop: "colors"
}), wx = Ht.width, Cx = Ht.height, _x = Ht.minWidth, kx = Ht.minHeight, Ex = Ht.maxWidth, Px = Ht.maxHeight, Tx = Ht.size, Ax = Ht.verticalAlign, Ox = Ht.display, Rx = Ht.overflow, $x = Ht.overflowX, Dx = Ht.overflowY, Mx = _u.opacity, Ix = rn.fontSize, Fx = rn.fontFamily, Nx = rn.fontWeight, jx = rn.lineHeight, Bx = rn.textAlign, zx = rn.fontStyle, Vx = rn.letterSpacing, Lx = Mt.alignItems, Wx = Mt.alignContent, Ux = Mt.justifyItems, Hx = Mt.justifyContent, Yx = Mt.flexWrap, qx = Mt.flexDirection, Gx = Mt.flex, Xx = Mt.flexGrow, Kx = Mt.flexShrink, Zx = Mt.flexBasis, Jx = Mt.justifySelf, Qx = Mt.alignSelf, eS = Mt.order, tS = Yt.gridGap, rS = Yt.gridColumnGap, nS = Yt.gridRowGap, oS = Yt.gridColumn, aS = Yt.gridRow, iS = Yt.gridAutoFlow, sS = Yt.gridAutoColumns, lS = Yt.gridAutoRows, cS = Yt.gridTemplateColumns, uS = Yt.gridTemplateRows, dS = Yt.gridTemplateAreas, fS = Yt.gridArea, pS = yr.borderWidth, hS = yr.borderStyle, mS = yr.borderColor, vS = yr.borderTop, gS = yr.borderRight, bS = yr.borderBottom, yS = yr.borderLeft, xS = yr.borderRadius, SS = Oo.backgroundImage, wS = Oo.backgroundSize, CS = Oo.backgroundPosition, _S = Oo.backgroundRepeat, kS = Vn.zIndex, ES = Vn.top, PS = Vn.right, TS = Vn.bottom, AS = Vn.left, OS = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = ts({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Wa(c);
  return u;
};
const RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: Wx,
  alignItems: Lx,
  alignSelf: Qx,
  background: Oo,
  backgroundImage: SS,
  backgroundPosition: CS,
  backgroundRepeat: _S,
  backgroundSize: wS,
  border: yr,
  borderBottom: bS,
  borderColor: mS,
  borderLeft: yS,
  borderRadius: xS,
  borderRight: gS,
  borderStyle: hS,
  borderTop: vS,
  borderWidth: pS,
  borders: yr,
  bottom: TS,
  boxShadow: $i,
  buttonStyle: Rm,
  color: _u,
  colorStyle: Dm,
  compose: Cu,
  createParser: Wa,
  createStyleFunction: ts,
  display: Ox,
  flex: Gx,
  flexBasis: Zx,
  flexDirection: qx,
  flexGrow: Xx,
  flexShrink: Kx,
  flexWrap: Yx,
  flexbox: Mt,
  fontFamily: Fx,
  fontSize: Ix,
  fontStyle: zx,
  fontWeight: Nx,
  get: Zr,
  grid: Yt,
  gridArea: fS,
  gridAutoColumns: sS,
  gridAutoFlow: iS,
  gridAutoRows: lS,
  gridColumn: oS,
  gridColumnGap: rS,
  gridGap: tS,
  gridRow: aS,
  gridRowGap: nS,
  gridTemplateAreas: dS,
  gridTemplateColumns: cS,
  gridTemplateRows: uS,
  height: Cx,
  justifyContent: Hx,
  justifyItems: Ux,
  justifySelf: Jx,
  layout: Ht,
  left: AS,
  letterSpacing: Vx,
  lineHeight: jx,
  margin: km,
  maxHeight: Px,
  maxWidth: Ex,
  minHeight: kx,
  minWidth: _x,
  opacity: Mx,
  order: eS,
  overflow: Rx,
  overflowX: $x,
  overflowY: Dx,
  padding: Em,
  position: Vn,
  right: PS,
  shadow: $i,
  size: Tx,
  space: Pm,
  style: OS,
  system: cr,
  textAlign: Bx,
  textShadow: $i,
  textStyle: $m,
  top: ES,
  typography: rn,
  variant: Os,
  verticalAlign: Ax,
  width: wx,
  zIndex: kS
}, Symbol.toStringTag, { value: "Module" })), $S = /* @__PURE__ */ As(RS), DS = /* @__PURE__ */ As(Sx);
function MS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var IS = Cu(Pm, rn, _u, Ht, Mt, yr, Oo, Vn, Yt, $i, Rm, $m, Dm), Mm = IS.propNames, Im = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return MS(function(n) {
    return vm(n) && !r.test(n);
  });
};
const FS = Im(Mm), NS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: Im,
  default: FS,
  props: Mm
}, Symbol.toStringTag, { value: "Module" })), jS = /* @__PURE__ */ As(NS);
Object.defineProperty(ya, "__esModule", {
  value: !0
});
var Fm = ya.Flex = Ln = ya.Box = void 0;
ku(Dt);
var Nm = ku(ex), Yn = $S, oa = zS(DS), BS = ku(jS);
function jm() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return jm = function() {
    return e;
  }, e;
}
function zS(e) {
  if (e && e.__esModule)
    return e;
  var t = jm();
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
function ku(e) {
  return e && e.__esModule ? e : { default: e };
}
var VS = function(t) {
  return (0, oa.default)(t.sx)(t.theme);
}, LS = function(t) {
  return (0, oa.default)(t.__css)(t.theme);
}, WS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, oa.default)((0, oa.get)(r, a + "." + n, (0, oa.get)(r, n)))(r);
}, Bm = (0, Nm.default)("div", {
  shouldForwardProp: BS.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, LS, WS, VS, function(e) {
  return e.css;
}, (0, Yn.compose)(Yn.space, Yn.layout, Yn.typography, Yn.color, Yn.flexbox)), Ln = ya.Box = Bm, US = (0, Nm.default)(Bm)({
  display: "flex"
});
Fm = ya.Flex = US;
function mn() {
  return mn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mn.apply(this, arguments);
}
var iV = Tt(function(e, t) {
  return Dt.createElement(Ln, mn({
    ref: t,
    tx: "text"
  }, e));
});
Tt(function(e, t) {
  return Dt.createElement(Ln, mn({
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
var sV = Tt(function(e, t) {
  return Dt.createElement(Ln, mn({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), lV = Tt(function(e, t) {
  return Dt.createElement(Ln, mn({
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
  return Dt.createElement(Ln, mn({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var cV = Tt(function(e, t) {
  return Dt.createElement(Ln, mn({
    ref: t,
    variant: "card"
  }, e));
});
function Jn(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function Dn(e) {
  return function t(r) {
    return arguments.length === 0 || Jn(r) ? t : e.apply(this, arguments);
  };
}
function HS(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Jn(r) ? t : Dn(function(o) {
          return e(r, o);
        });
      default:
        return Jn(r) && Jn(n) ? t : Jn(r) ? Dn(function(o) {
          return e(o, n);
        }) : Jn(n) ? Dn(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function YS(e, t) {
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
const qS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function GS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var XS = /* @__PURE__ */ Dn(function(t) {
  return qS(t) ? !0 : !t || typeof t != "object" || GS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), KS = /* @__PURE__ */ function() {
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
function ZS(e) {
  return new KS(e);
}
var JS = /* @__PURE__ */ HS(function(t, r) {
  return YS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function QS(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function sf(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function lf(e, t, r, n) {
  return e["@@transducer/result"](r[n](JS(e["@@transducer/step"], e), t));
}
var cf = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function uV(e, t, r) {
  if (typeof e == "function" && (e = ZS(e)), XS(r))
    return QS(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return lf(e, t, r, "fantasy-land/reduce");
  if (r[cf] != null)
    return sf(e, t, r[cf]());
  if (typeof r.next == "function")
    return sf(e, t, r);
  if (typeof r.reduce == "function")
    return lf(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function kc(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var uf = Object.prototype.toString, e1 = /* @__PURE__ */ function() {
  return uf.call(arguments) === "[object Arguments]" ? function(t) {
    return uf.call(t) === "[object Arguments]";
  } : function(t) {
    return kc("callee", t);
  };
}(), t1 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), df = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], ff = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), r1 = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, dV = /* @__PURE__ */ Dn(typeof Object.keys == "function" && !ff ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = ff && e1(t);
  for (r in t)
    kc(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (t1)
    for (n = df.length - 1; n >= 0; )
      r = df[n], kc(r, t) && !r1(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), fV = /* @__PURE__ */ Dn(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function Bn() {
  return Bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bn.apply(this, arguments);
}
var Ec = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf;
function n1() {
  if (pf)
    return Le;
  pf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function S(w) {
    if (typeof w == "object" && w !== null) {
      var M = w.$$typeof;
      switch (M) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case m:
                case p:
                case i:
                  return w;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function k(w) {
    return S(w) === c;
  }
  return Le.AsyncMode = l, Le.ConcurrentMode = c, Le.ContextConsumer = s, Le.ContextProvider = i, Le.Element = t, Le.ForwardRef = u, Le.Fragment = n, Le.Lazy = m, Le.Memo = p, Le.Portal = r, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = d, Le.isAsyncMode = function(w) {
    return k(w) || S(w) === l;
  }, Le.isConcurrentMode = k, Le.isContextConsumer = function(w) {
    return S(w) === s;
  }, Le.isContextProvider = function(w) {
    return S(w) === i;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Le.isForwardRef = function(w) {
    return S(w) === u;
  }, Le.isFragment = function(w) {
    return S(w) === n;
  }, Le.isLazy = function(w) {
    return S(w) === m;
  }, Le.isMemo = function(w) {
    return S(w) === p;
  }, Le.isPortal = function(w) {
    return S(w) === r;
  }, Le.isProfiler = function(w) {
    return S(w) === a;
  }, Le.isStrictMode = function(w) {
    return S(w) === o;
  }, Le.isSuspense = function(w) {
    return S(w) === d;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === a || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === p || w.$$typeof === i || w.$$typeof === s || w.$$typeof === u || w.$$typeof === v || w.$$typeof === b || w.$$typeof === y || w.$$typeof === h);
  }, Le.typeOf = S, Le;
}
var We = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function o1() {
  return hf || (hf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === c || R === a || R === o || R === d || R === f || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === p || R.$$typeof === i || R.$$typeof === s || R.$$typeof === u || R.$$typeof === v || R.$$typeof === b || R.$$typeof === y || R.$$typeof === h);
    }
    function k(R) {
      if (typeof R == "object" && R !== null) {
        var Se = R.$$typeof;
        switch (Se) {
          case t:
            var pe = R.type;
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
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var w = l, M = c, P = s, I = i, z = t, j = u, X = n, ne = m, J = p, Q = r, ee = a, oe = o, D = d, ce = !1;
    function de(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(R) || k(R) === l;
    }
    function F(R) {
      return k(R) === c;
    }
    function N(R) {
      return k(R) === s;
    }
    function V(R) {
      return k(R) === i;
    }
    function T(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function O(R) {
      return k(R) === u;
    }
    function B(R) {
      return k(R) === n;
    }
    function C(R) {
      return k(R) === m;
    }
    function H(R) {
      return k(R) === p;
    }
    function A(R) {
      return k(R) === r;
    }
    function Z(R) {
      return k(R) === a;
    }
    function Y(R) {
      return k(R) === o;
    }
    function ae(R) {
      return k(R) === d;
    }
    We.AsyncMode = w, We.ConcurrentMode = M, We.ContextConsumer = P, We.ContextProvider = I, We.Element = z, We.ForwardRef = j, We.Fragment = X, We.Lazy = ne, We.Memo = J, We.Portal = Q, We.Profiler = ee, We.StrictMode = oe, We.Suspense = D, We.isAsyncMode = de, We.isConcurrentMode = F, We.isContextConsumer = N, We.isContextProvider = V, We.isElement = T, We.isForwardRef = O, We.isFragment = B, We.isLazy = C, We.isMemo = H, We.isPortal = A, We.isProfiler = Z, We.isStrictMode = Y, We.isSuspense = ae, We.isValidElementType = S, We.typeOf = k;
  }()), We;
}
process.env.NODE_ENV === "production" ? Ec.exports = n1() : Ec.exports = o1();
var Eu = Ec.exports, zm = Eu, a1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, i1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Vm = {};
Vm[zm.ForwardRef] = a1;
Vm[zm.Memo] = i1;
function mf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function s1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mf(Object(r), !0).forEach(function(n) {
      Su(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var l1 = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return s1({}, t, {}, r);
}, c1 = Ud(function(e) {
  return Ud(function(t) {
    return l1(e, t);
  });
}), pV = function(t) {
  return /* @__PURE__ */ or(Ca.Consumer, null, function(r) {
    return t.theme !== r && (r = c1(r)(t.theme)), /* @__PURE__ */ or(Ca.Provider, {
      value: r
    }, t.children);
  });
};
function u1() {
  return Dt.useContext(Ca);
}
const d1 = {
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
}, f1 = {
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
}, p1 = {
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
}, h1 = {
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
}, m1 = {
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
}, v1 = {
  ghost: d1,
  alert: m1,
  inline: f1,
  primary: p1,
  secondary: h1
}, g1 = {
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
}, b1 = {
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
}, y1 = {
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
}, x1 = {
  "icon-primary": g1,
  "icon-ghost": b1,
  "icon-ghost-white": y1
}, S1 = {
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
}, w1 = {
  "footer-primary": S1
}, C1 = {
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
}, _1 = {
  "file-secondary": C1
}, k1 = {
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
}, E1 = {
  color: "black"
}, P1 = {
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
}, T1 = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, A1 = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, O1 = {
  card: T1,
  readOnly: A1
}, R1 = {
  color: "labels.red"
}, $1 = {
  color: "darkGray"
}, D1 = {
  error: R1,
  default: $1
}, M1 = {
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
}, I1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, F1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, N1 = {
  disabled: F1,
  primary: M1,
  white: I1
}, j1 = {
  default: "transparent",
  error: "labels.red"
}, B1 = {
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
}, z1 = {
  bg: "white",
  borderRightColor: "grayShade2",
  "> div": {
    color: "gray",
    path: {
      fill: "gray"
    }
  }
}, V1 = {
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
}, L1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, W1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, U1 = {
  default: V1,
  active: L1,
  disabled: W1
}, H1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, Y1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, q1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, G1 = {
  default: Y1,
  active: q1,
  disabled: H1
}, X1 = {
  container: z1,
  item: U1,
  subItem: G1,
  category: B1
}, K1 = {
  bg: "white",
  boxShadow: "list"
}, Z1 = {
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
}, J1 = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, Q1 = {
  primary: Z1,
  active: J1
}, ew = {
  container: K1,
  item: Q1
}, tw = {
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
}, rw = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, nw = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, ow = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, aw = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, iw = {
  variant: "text.microlabeling",
  color: "gray"
}, sw = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, lw = {
  variant: "text.value",
  color: "primary"
}, cw = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, uw = {
  variant: "text.labeling",
  color: "gray"
}, dw = {
  color: "gray"
}, fw = {
  color: "primary"
}, pw = {
  color: "labels.orange"
}, vf = {
  title: rw,
  text: cw,
  subtitle: nw,
  labeling: ow,
  value: sw,
  valuePrimary: lw,
  labelingGray: uw,
  microlabeling: aw,
  microlabelingGray: iw,
  inputValidationneutral: dw,
  inputValidationsuccess: fw,
  inputValidationwarning: pw
}, hw = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, mw = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, vw = {
  drawerSection: mw,
  primary: hw
}, gw = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, bw = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, yw = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, xw = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, Sw = {
  gray: yw,
  white: xw
}, ww = {
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
}, Cw = {
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
}, _w = {
  keyValue: Sw,
  primary: ww,
  bordered: Cw,
  dot: gw,
  blink: bw
}, kw = {
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
}, Ew = {
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
}, Pw = {
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, Tw = {
  variant: "variants.select.primary",
  bg: "white"
}, Aw = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, Ow = {
  disabled: Aw,
  primary: Pw,
  white: Tw
}, Rw = {
  color: "labels.red"
}, $w = {
  color: "darkGray"
}, Dw = {
  error: Rw,
  default: $w
}, Mw = {
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
}, Iw = {
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
}, Fw = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, Nw = {
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
}, jw = {
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
}, Bw = {
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
}, zw = {
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
}, Vw = {
  valid: Nw,
  error: jw,
  warning: Bw,
  neutral: zw
}, Lw = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, Ww = {
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
}, Uw = {
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
}, Hw = {
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
}, Yw = {
  primary: Ww,
  white: Uw,
  disabled: Hw
}, qw = {
  secondary: {
    notification: {
      bg: "white",
      borderColor: "grayShade2"
    }
  }
}, Gw = {
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
}, Xw = {
  colors: Gw,
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
    ...O1,
    tooltip: P1,
    label: E1,
    list: ew,
    header: tw,
    checkbox: kw,
    radio: Ew,
    badges: _w,
    popup: vw,
    bar: Mw,
    perf: Iw,
    code: Fw,
    select: Ow,
    callout: Vw,
    icon: Lw,
    ...vf
  },
  text: {
    inputInfo: D1,
    selectInfo: Dw,
    ...vf
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...v1,
    ...x1,
    ...w1,
    ..._1,
    toggleButton: k1
  },
  navigation: X1,
  inputs: N1,
  inputIntents: j1,
  pagination: Yw,
  notification: qw
}, Kw = {
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
}, Zw = {
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
}, hV = () => u1(), mV = {
  ...Xw,
  colors: Kw,
  shadows: Zw
};
function Jw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Qw(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var eC = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qw(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = Jw(o);
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
}(), Pt = "-ms-", rs = "-moz-", Be = "-webkit-", Pu = "comm", Tu = "rule", Au = "decl", tC = "@import", Lm = "@keyframes", rC = "@layer", nC = Math.abs, Rs = String.fromCharCode, oC = Object.assign;
function aC(e, t) {
  return _t(e, 0) ^ 45 ? (((t << 2 ^ _t(e, 0)) << 2 ^ _t(e, 1)) << 2 ^ _t(e, 2)) << 2 ^ _t(e, 3) : 0;
}
function Wm(e) {
  return e.trim();
}
function iC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, r) {
  return e.replace(t, r);
}
function Pc(e, t) {
  return e.indexOf(t);
}
function _t(e, t) {
  return e.charCodeAt(t) | 0;
}
function ka(e, t, r) {
  return e.slice(t, r);
}
function Ar(e) {
  return e.length;
}
function Ou(e) {
  return e.length;
}
function pi(e, t) {
  return t.push(e), e;
}
function sC(e, t) {
  return e.map(t).join("");
}
var $s = 1, So = 1, Um = 0, Wt = 0, mt = 0, Ro = "";
function Ds(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: $s, column: So, length: i, return: "" };
}
function Lo(e, t) {
  return oC(Ds("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lC() {
  return mt;
}
function cC() {
  return mt = Wt > 0 ? _t(Ro, --Wt) : 0, So--, mt === 10 && (So = 1, $s--), mt;
}
function Gt() {
  return mt = Wt < Um ? _t(Ro, Wt++) : 0, So++, mt === 10 && (So = 1, $s++), mt;
}
function Rr() {
  return _t(Ro, Wt);
}
function Di() {
  return Wt;
}
function Ua(e, t) {
  return ka(Ro, e, t);
}
function Ea(e) {
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
function Hm(e) {
  return $s = So = 1, Um = Ar(Ro = e), Wt = 0, [];
}
function Ym(e) {
  return Ro = "", e;
}
function Mi(e) {
  return Wm(Ua(Wt - 1, Tc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uC(e) {
  for (; (mt = Rr()) && mt < 33; )
    Gt();
  return Ea(e) > 2 || Ea(mt) > 3 ? "" : " ";
}
function dC(e, t) {
  for (; --t && Gt() && !(mt < 48 || mt > 102 || mt > 57 && mt < 65 || mt > 70 && mt < 97); )
    ;
  return Ua(e, Di() + (t < 6 && Rr() == 32 && Gt() == 32));
}
function Tc(e) {
  for (; Gt(); )
    switch (mt) {
      case e:
        return Wt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Tc(mt);
        break;
      case 40:
        e === 41 && Tc(e);
        break;
      case 92:
        Gt();
        break;
    }
  return Wt;
}
function fC(e, t) {
  for (; Gt() && e + mt !== 47 + 10; )
    if (e + mt === 42 + 42 && Rr() === 47)
      break;
  return "/*" + Ua(t, Wt - 1) + "*" + Rs(e === 47 ? e : Gt());
}
function pC(e) {
  for (; !Ea(Rr()); )
    Gt();
  return Ua(e, Wt);
}
function hC(e) {
  return Ym(Ii("", null, null, null, [""], e = Hm(e), 0, [0], e));
}
function Ii(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, v = 1, b = 1, y = 0, S = "", k = o, w = a, M = n, P = S; v; )
    switch (m = y, y = Gt()) {
      case 40:
        if (m != 108 && _t(P, d - 1) == 58) {
          Pc(P += ze(Mi(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Mi(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += uC(m);
        break;
      case 92:
        P += dC(Di() - 1, 7);
        continue;
      case 47:
        switch (Rr()) {
          case 42:
          case 47:
            pi(mC(fC(Gt(), Di()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * h:
        s[c++] = Ar(P) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            b == -1 && (P = ze(P, /\f/g, "")), p > 0 && Ar(P) - d && pi(p > 32 ? bf(P + ";", n, r, d - 1) : bf(ze(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (pi(M = gf(P, t, r, c, u, o, s, S, k = [], w = [], d), a), y === 123)
              if (u === 0)
                Ii(P, t, M, M, k, a, d, s, w);
              else
                switch (f === 99 && _t(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ii(e, M, M, n && pi(gf(e, M, M, 0, 0, o, s, S, o, k = [], d), w), o, w, d, s, n ? k : w);
                    break;
                  default:
                    Ii(P, M, M, M, [""], w, 0, s, w);
                }
        }
        c = u = p = 0, h = b = 1, S = P = "", d = i;
        break;
      case 58:
        d = 1 + Ar(P), p = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && cC() == 125)
            continue;
        }
        switch (P += Rs(y), y * h) {
          case 38:
            b = u > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[c++] = (Ar(P) - 1) * b, b = 1;
            break;
          case 64:
            Rr() === 45 && (P += Mi(Gt())), f = Rr(), u = d = Ar(S = P += pC(Di())), y++;
            break;
          case 45:
            m === 45 && Ar(P) == 2 && (h = 0);
        }
    }
  return a;
}
function gf(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = Ou(f), m = 0, h = 0, v = 0; m < n; ++m)
    for (var b = 0, y = ka(e, d + 1, d = nC(h = i[m])), S = e; b < p; ++b)
      (S = Wm(h > 0 ? f[b] + " " + y : ze(y, /&\f/g, f[b]))) && (l[v++] = S);
  return Ds(e, t, r, o === 0 ? Tu : s, l, c, u);
}
function mC(e, t, r) {
  return Ds(e, t, r, Pu, Rs(lC()), ka(e, 2, -2), 0);
}
function bf(e, t, r, n) {
  return Ds(e, t, r, Au, ka(e, 0, n), ka(e, n + 1, -1), n);
}
function lo(e, t) {
  for (var r = "", n = Ou(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function vC(e, t, r, n) {
  switch (e.type) {
    case rC:
      if (e.children.length)
        break;
    case tC:
    case Au:
      return e.return = e.return || e.value;
    case Pu:
      return "";
    case Lm:
      return e.return = e.value + "{" + lo(e.children, n) + "}";
    case Tu:
      e.value = e.props.join(",");
  }
  return Ar(r = lo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function gC(e) {
  var t = Ou(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function bC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var yf = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function qm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var yC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Rr(), o === 38 && a === 12 && (r[n] = 1), !Ea(a); )
    Gt();
  return Ua(t, Wt);
}, xC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ea(o)) {
      case 0:
        o === 38 && Rr() === 12 && (r[n] = 1), t[n] += yC(Wt - 1, r, n);
        break;
      case 2:
        t[n] += Mi(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Rr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Rs(o);
    }
  while (o = Gt());
  return t;
}, SC = function(t, r) {
  return Ym(xC(Hm(t), r));
}, xf = /* @__PURE__ */ new WeakMap(), wC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !xf.get(n)) && !o) {
      xf.set(t, !0);
      for (var a = [], i = SC(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, CC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, _C = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", kC = function(t) {
  return t.type === "comm" && t.children.indexOf(_C) > -1;
}, EC = function(t) {
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
            if (kC(c))
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
}, Gm = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, PC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Gm(r[n]))
      return !0;
  return !1;
}, Sf = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, TC = function(t, r, n) {
  Gm(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Sf(t)) : PC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Sf(t)));
};
function Xm(e, t) {
  switch (aC(e, t)) {
    case 5103:
      return Be + "print-" + e + e;
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
      return Be + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Be + e + rs + e + Pt + e + e;
    case 6828:
    case 4268:
      return Be + e + Pt + e + e;
    case 6165:
      return Be + e + Pt + "flex-" + e + e;
    case 5187:
      return Be + e + ze(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Pt + "flex-$1$2") + e;
    case 5443:
      return Be + e + Pt + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Pt + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Pt + ze(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Pt + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + ze(e, "-grow", "") + Be + e + Pt + ze(e, "grow", "positive") + e;
    case 4554:
      return Be + ze(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
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
      if (Ar(e) - 1 - t > 6)
        switch (_t(e, t + 1)) {
          case 109:
            if (_t(e, t + 4) !== 45)
              break;
          case 102:
            return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + rs + (_t(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Pc(e, "stretch") ? Xm(ze(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (_t(e, t + 1) !== 115)
        break;
    case 6444:
      switch (_t(e, Ar(e) - 3 - (~Pc(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Be) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (_t(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Pt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_t(e, t + 11)) {
        case 114:
          return Be + e + Pt + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Pt + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Pt + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Pt + e + e;
  }
  return e;
}
var AC = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Au:
        t.return = Xm(t.value, t.length);
        break;
      case Lm:
        return lo([Lo(t, {
          value: ze(t.value, "@", "@" + Be)
        })], o);
      case Tu:
        if (t.length)
          return sC(t.props, function(a) {
            switch (iC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return lo([Lo(t, {
                  props: [ze(a, /:(read-\w+)/, ":" + rs + "$1")]
                })], o);
              case "::placeholder":
                return lo([Lo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + Be + "input-$1")]
                }), Lo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + rs + "$1")]
                }), Lo(t, {
                  props: [ze(a, /:(plac\w+)/, Pt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, OC = [AC], RC = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var v = h.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || OC;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var v = h.getAttribute("data-emotion").split(" "), b = 1; b < v.length; b++)
        a[v[b]] = !0;
      s.push(h);
    }
  );
  var l, c = [wC, CC];
  process.env.NODE_ENV !== "production" && c.push(EC({
    get compat() {
      return m.compat;
    }
  }), TC);
  {
    var u, d = [vC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== Pu && u.insert(h.value + "{}"));
    } : bC(function(h) {
      u.insert(h);
    })], f = gC(c.concat(o, d)), p = function(v) {
      return lo(hC(v), f);
    };
    l = function(v, b, y, S) {
      u = y, process.env.NODE_ENV !== "production" && b.map !== void 0 && (u = {
        insert: function(w) {
          y.insert(w + b.map);
        }
      }), p(v ? v + "{" + b.styles + "}" : b.styles), S && (m.inserted[b.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new eC({
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
}, $C = !0;
function Ru(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Ms = function(t, r, n) {
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
  $C === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Is = function(t, r, n) {
  Ms(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function DC(e) {
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
var MC = {
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
}, wf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, IC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", FC = /[A-Z]|^ms/g, Km = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $u = function(t) {
  return t.charCodeAt(1) === 45;
}, Cf = function(t) {
  return t != null && typeof t != "boolean";
}, wl = /* @__PURE__ */ qm(function(e) {
  return $u(e) ? e : e.replace(FC, "-$&").toLowerCase();
}), ns = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Km, function(n, o, a) {
          return mr = {
            name: o,
            styles: a,
            next: mr
          }, o;
        });
  }
  return MC[t] !== 1 && !$u(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var NC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, jC = ["normal", "none", "initial", "inherit", "unset"], BC = ns, zC = /^-ms-/, VC = /-(.)/g, _f = {};
  ns = function(t, r) {
    if (t === "content" && (typeof r != "string" || jC.indexOf(r) === -1 && !NC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = BC(t, r);
    return n !== "" && !$u(t) && t.indexOf("-") !== -1 && _f[t] === void 0 && (_f[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(zC, "ms-").replace(VC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Zm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Pa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Zm);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return mr = {
          name: r.name,
          styles: r.styles,
          next: mr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            mr = {
              name: n.name,
              styles: n.styles,
              next: mr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return LC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = mr, i = r(e);
        return mr = a, Pa(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Km, function(u, d, f) {
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
function LC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Pa(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Cf(i) && (n += wl(a) + ":" + ns(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Zm);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Cf(i[s]) && (n += wl(a) + ":" + ns(a, i[s]) + ";");
        else {
          var l = Pa(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += wl(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(IC), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var kf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Jm;
process.env.NODE_ENV !== "production" && (Jm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var mr, wo = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  mr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Pa(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(wf), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Pa(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(wf), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Jm, function(f) {
    return l = f, "";
  })), kf.lastIndex = 0;
  for (var c = "", u; (u = kf.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = DC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: mr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: mr
  };
}, WC = function(t) {
  return t();
}, Qm = U["useInsertionEffect"] ? U["useInsertionEffect"] : !1, Du = Qm || WC, Ef = Qm || U.useLayoutEffect, Mu = {}.hasOwnProperty, Iu = /* @__PURE__ */ U.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ RC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Iu.displayName = "EmotionCacheContext");
Iu.Provider;
var Fs = function(t) {
  return /* @__PURE__ */ Tt(function(r, n) {
    var o = dt(Iu);
    return t(r, o, n);
  });
}, vn = /* @__PURE__ */ U.createContext({});
process.env.NODE_ENV !== "production" && (vn.displayName = "EmotionThemeContext");
var UC = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Bn({}, t, r);
}, HC = /* @__PURE__ */ yf(function(e) {
  return yf(function(t) {
    return UC(e, t);
  });
}), vV = function(t) {
  var r = U.useContext(vn);
  return t.theme !== r && (r = HC(r)(t.theme)), /* @__PURE__ */ U.createElement(vn.Provider, {
    value: r
  }, t.children);
}, Pf = function(t) {
  var r = t.split(".");
  return r[r.length - 1];
}, YC = function(t) {
  var r = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(t);
  if (r || (r = /^([A-Za-z0-9$.]+)@/.exec(t), r))
    return Pf(r[1]);
}, qC = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), GC = function(t) {
  return t.replace(/\$/g, "-");
}, XC = function(t) {
  if (t)
    for (var r = t.split(`
`), n = 0; n < r.length; n++) {
      var o = YC(r[n]);
      if (o) {
        if (qC.has(o))
          break;
        if (/^[A-Z]/.test(o))
          return GC(o);
      }
    }
}, Ac = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Oc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", KC = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof r.css == "string" && // check if there is a css declaration
  r.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + r.css + "`");
  var n = {};
  for (var o in r)
    Mu.call(r, o) && (n[o] = r[o]);
  if (n[Ac] = t, process.env.NODE_ENV !== "production" && r.css && (typeof r.css != "object" || typeof r.css.name != "string" || r.css.name.indexOf("-") === -1)) {
    var a = XC(new Error().stack);
    a && (n[Oc] = a);
  }
  return n;
}, ZC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Ms(r, n, o), Du(function() {
    return Is(r, n, o);
  }), null;
}, ev = /* @__PURE__ */ Fs(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Ac], a = [n], i = "";
  typeof e.className == "string" ? i = Ru(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = wo(a, void 0, U.useContext(vn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Oc];
    l && (s = wo([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    Mu.call(e, u) && u !== "css" && u !== Ac && (process.env.NODE_ENV === "production" || u !== Oc) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(ZC, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ U.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (ev.displayName = "EmotionCssPropInternal");
var JC = ev, QC = {
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
}, gV = function(t, r) {
  var n = arguments;
  if (r == null || !Mu.call(r, "css"))
    return U.createElement.apply(void 0, n);
  var o = n.length, a = new Array(o);
  a[0] = JC, a[1] = KC(t, r);
  for (var i = 2; i < o; i++)
    a[i] = n[i];
  return U.createElement.apply(null, a);
}, Tf = !1, e_ = /* @__PURE__ */ Fs(function(e, t) {
  process.env.NODE_ENV !== "production" && !Tf && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Tf = !0);
  var r = e.styles, n = wo([r], void 0, U.useContext(vn)), o = U.useRef();
  return Ef(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), Ef(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Is(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (e_.displayName = "EmotionGlobal");
function t_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return wo(t);
}
var r_ = function() {
  var t = t_.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, n_ = function e(t) {
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
function o_(e, t, r) {
  var n = [], o = Ru(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var a_ = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Du(function() {
    for (var o = 0; o < n.length; o++)
      Is(r, n[o], !1);
  }), null;
}, i_ = /* @__PURE__ */ Fs(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = wo(u, t.registered);
    return n.push(f), Ms(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return o_(t.registered, o, n_(u));
  }, i = {
    css: o,
    cx: a,
    theme: U.useContext(vn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(a_, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (i_.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Af = !0, s_ = typeof jest < "u" || typeof vi < "u";
  if (Af && !s_) {
    var Of = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Af ? window : global
    ), Rf = "__EMOTION_REACT_" + QC.version.split(".")[0] + "__";
    Of[Rf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Of[Rf] = !0;
  }
}
function l_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function It(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Sr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = dt(s);
    if (!u && r) {
      const d = new Error(
        a ?? l_(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [c_, u_] = It({
  strict: !1,
  name: "PortalManagerContext"
});
function d_(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ L.jsx(c_, { value: { zIndex: r }, children: t });
}
d_.displayName = "PortalManager";
var Ta = globalThis != null && globalThis.document ? Es : Fe, [tv, f_] = It({
  strict: !1,
  name: "PortalContext"
}), Fu = "chakra-portal", p_ = ".chakra-portal", h_ = (e) => /* @__PURE__ */ L.jsx(
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
), m_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = Ye(null), a = be(null), [, i] = Ye({});
  Fe(() => i({}), []);
  const s = f_(), l = u_();
  Ta(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = Fu, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ L.jsx(h_, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? hm(
    /* @__PURE__ */ L.jsx(tv, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ L.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, v_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = vt(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Fu), l;
  }, [o]), [, s] = Ye({});
  return Ta(() => s({}), []), Ta(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? hm(
    /* @__PURE__ */ L.jsx(tv, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function Ha(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ L.jsx(v_, { containerRef: r, ...n }) : /* @__PURE__ */ L.jsx(m_, { ...n });
}
Ha.className = Fu;
Ha.selector = p_;
Ha.displayName = "Portal";
function nn() {
  const e = dt(
    vn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var rv = Sr({});
rv.displayName = "ColorModeContext";
function Nu() {
  const e = dt(rv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function bV(e, t) {
  const { colorMode: r } = Nu();
  return r === "dark" ? t : e;
}
function nv() {
  const e = Nu(), t = nn();
  return { ...e, theme: t };
}
function g_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function b_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function yV(e, t, r) {
  const n = nn();
  return y_(e, t, r)(n);
}
function y_(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return g_(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return b_(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var Xe = (...e) => e.filter(Boolean).join(" ");
function x_() {
  return process.env.NODE_ENV !== "production";
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var xV = (e) => {
  const { condition: t, message: r } = e;
  t && x_() && console.warn(r);
};
function fn(e, ...t) {
  return S_(e) ? e(...t) : e;
}
var S_ = (e) => typeof e == "function", eo = (e) => e ? "" : void 0, Cl = (e) => e ? !0 : void 0;
function Rt(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function w_(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var os = { exports: {} };
os.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", v = "[object Number]", b = "[object Null]", y = "[object Object]", S = "[object Proxy]", k = "[object RegExp]", w = "[object Set]", M = "[object String]", P = "[object Undefined]", I = "[object WeakMap]", z = "[object ArrayBuffer]", j = "[object DataView]", X = "[object Float32Array]", ne = "[object Float64Array]", J = "[object Int8Array]", Q = "[object Int16Array]", ee = "[object Int32Array]", oe = "[object Uint8Array]", D = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", de = "[object Uint32Array]", F = /[\\^$.*+?()[\]{}|]/g, N = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, T = {};
  T[X] = T[ne] = T[J] = T[Q] = T[ee] = T[oe] = T[D] = T[ce] = T[de] = !0, T[s] = T[l] = T[z] = T[u] = T[j] = T[d] = T[f] = T[p] = T[h] = T[v] = T[y] = T[k] = T[w] = T[M] = T[I] = !1;
  var O = typeof di == "object" && di && di.Object === Object && di, B = typeof self == "object" && self && self.Object === Object && self, C = O || B || Function("return this")(), H = t && !t.nodeType && t, A = H && !0 && e && !e.nodeType && e, Z = A && A.exports === H, Y = Z && O.process, ae = function() {
    try {
      var g = A && A.require && A.require("util").types;
      return g || Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), R = ae && ae.isTypedArray;
  function Se(g, _, $) {
    switch ($.length) {
      case 0:
        return g.call(_);
      case 1:
        return g.call(_, $[0]);
      case 2:
        return g.call(_, $[0], $[1]);
      case 3:
        return g.call(_, $[0], $[1], $[2]);
    }
    return g.apply(_, $);
  }
  function pe(g, _) {
    for (var $ = -1, re = Array(g); ++$ < g; )
      re[$] = _($);
    return re;
  }
  function le(g) {
    return function(_) {
      return g(_);
    };
  }
  function $e(g, _) {
    return g == null ? void 0 : g[_];
  }
  function ye(g, _) {
    return function($) {
      return g(_($));
    };
  }
  var we = Array.prototype, pt = Function.prototype, ke = Object.prototype, ut = C["__core-js_shared__"], rt = pt.toString, Me = ke.hasOwnProperty, se = function() {
    var g = /[^.]+$/.exec(ut && ut.keys && ut.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), Ae = ke.toString, At = rt.call(Object), yt = RegExp(
    "^" + rt.call(Me).replace(F, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), st = Z ? C.Buffer : void 0, jr = C.Symbol, Br = C.Uint8Array, zr = st ? st.allocUnsafe : void 0, te = ye(Object.getPrototypeOf, Object), ve = Object.create, Cr = ke.propertyIsEnumerable, G = we.splice, ie = jr ? jr.toStringTag : void 0, xe = function() {
    try {
      var g = dl(Object, "defineProperty");
      return g({}, "", {}), g;
    } catch {
    }
  }(), Ce = st ? st.isBuffer : void 0, He = Math.max, St = Date.now, Ze = dl(C, "Map"), nt = dl(Object, "create"), Vr = function() {
    function g() {
    }
    return function(_) {
      if (!_n(_))
        return {};
      if (ve)
        return ve(_);
      g.prototype = _;
      var $ = new g();
      return g.prototype = void 0, $;
    };
  }();
  function _r(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function ol() {
    this.__data__ = nt ? nt(null) : {}, this.size = 0;
  }
  function ni(g) {
    var _ = this.has(g) && delete this.__data__[g];
    return this.size -= _ ? 1 : 0, _;
  }
  function al(g) {
    var _ = this.__data__;
    if (nt) {
      var $ = _[g];
      return $ === n ? void 0 : $;
    }
    return Me.call(_, g) ? _[g] : void 0;
  }
  function oi(g) {
    var _ = this.__data__;
    return nt ? _[g] !== void 0 : Me.call(_, g);
  }
  function ai(g, _) {
    var $ = this.__data__;
    return this.size += this.has(g) ? 0 : 1, $[g] = nt && _ === void 0 ? n : _, this;
  }
  _r.prototype.clear = ol, _r.prototype.delete = ni, _r.prototype.get = al, _r.prototype.has = oi, _r.prototype.set = ai;
  function ur(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function il() {
    this.__data__ = [], this.size = 0;
  }
  function ii(g) {
    var _ = this.__data__, $ = Nt(_, g);
    if ($ < 0)
      return !1;
    var re = _.length - 1;
    return $ == re ? _.pop() : G.call(_, $, 1), --this.size, !0;
  }
  function sl(g) {
    var _ = this.__data__, $ = Nt(_, g);
    return $ < 0 ? void 0 : _[$][1];
  }
  function ll(g) {
    return Nt(this.__data__, g) > -1;
  }
  function cl(g, _) {
    var $ = this.__data__, re = Nt($, g);
    return re < 0 ? (++this.size, $.push([g, _])) : $[re][1] = _, this;
  }
  ur.prototype.clear = il, ur.prototype.delete = ii, ur.prototype.get = sl, ur.prototype.has = ll, ur.prototype.set = cl;
  function on(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function x() {
    this.size = 0, this.__data__ = {
      hash: new _r(),
      map: new (Ze || ur)(),
      string: new _r()
    };
  }
  function W(g) {
    var _ = ci(this, g).delete(g);
    return this.size -= _ ? 1 : 0, _;
  }
  function K(g) {
    return ci(this, g).get(g);
  }
  function he(g) {
    return ci(this, g).has(g);
  }
  function De(g, _) {
    var $ = ci(this, g), re = $.size;
    return $.set(g, _), this.size += $.size == re ? 0 : 1, this;
  }
  on.prototype.clear = x, on.prototype.delete = W, on.prototype.get = K, on.prototype.has = he, on.prototype.set = De;
  function Oe(g) {
    var _ = this.__data__ = new ur(g);
    this.size = _.size;
  }
  function Pe() {
    this.__data__ = new ur(), this.size = 0;
  }
  function Ee(g) {
    var _ = this.__data__, $ = _.delete(g);
    return this.size = _.size, $;
  }
  function wt(g) {
    return this.__data__.get(g);
  }
  function ot(g) {
    return this.__data__.has(g);
  }
  function lt(g, _) {
    var $ = this.__data__;
    if ($ instanceof ur) {
      var re = $.__data__;
      if (!Ze || re.length < r - 1)
        return re.push([g, _]), this.size = ++$.size, this;
      $ = this.__data__ = new on(re);
    }
    return $.set(g, _), this.size = $.size, this;
  }
  Oe.prototype.clear = Pe, Oe.prototype.delete = Ee, Oe.prototype.get = wt, Oe.prototype.has = ot, Oe.prototype.set = lt;
  function Ft(g, _) {
    var $ = hl(g), re = !$ && pl(g), Re = !$ && !re && Fd(g), qe = !$ && !re && !Re && jd(g), Qe = $ || re || Re || qe, Te = Qe ? pe(g.length, String) : [], et = Te.length;
    for (var Qt in g)
      (_ || Me.call(g, Qt)) && !(Qe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Qt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Re && (Qt == "offset" || Qt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      qe && (Qt == "buffer" || Qt == "byteLength" || Qt == "byteOffset") || // Skip index properties.
      Md(Qt, et))) && Te.push(Qt);
    return Te;
  }
  function kr(g, _, $) {
    ($ !== void 0 && !ui(g[_], $) || $ === void 0 && !(_ in g)) && ul(g, _, $);
  }
  function si(g, _, $) {
    var re = g[_];
    (!(Me.call(g, _) && ui(re, $)) || $ === void 0 && !(_ in g)) && ul(g, _, $);
  }
  function Nt(g, _) {
    for (var $ = g.length; $--; )
      if (ui(g[$][0], _))
        return $;
    return -1;
  }
  function ul(g, _, $) {
    _ == "__proto__" && xe ? xe(g, _, {
      configurable: !0,
      enumerable: !0,
      value: $,
      writable: !0
    }) : g[_] = $;
  }
  var zy = Qy();
  function li(g) {
    return g == null ? g === void 0 ? P : b : ie && ie in Object(g) ? e0(g) : i0(g);
  }
  function $d(g) {
    return jo(g) && li(g) == s;
  }
  function Vy(g) {
    if (!_n(g) || o0(g))
      return !1;
    var _ = vl(g) ? yt : N;
    return _.test(u0(g));
  }
  function Ly(g) {
    return jo(g) && Nd(g.length) && !!T[li(g)];
  }
  function Wy(g) {
    if (!_n(g))
      return a0(g);
    var _ = Id(g), $ = [];
    for (var re in g)
      re == "constructor" && (_ || !Me.call(g, re)) || $.push(re);
    return $;
  }
  function Dd(g, _, $, re, Re) {
    g !== _ && zy(_, function(qe, Qe) {
      if (Re || (Re = new Oe()), _n(qe))
        Uy(g, _, Qe, $, Dd, re, Re);
      else {
        var Te = re ? re(fl(g, Qe), qe, Qe + "", g, _, Re) : void 0;
        Te === void 0 && (Te = qe), kr(g, Qe, Te);
      }
    }, Bd);
  }
  function Uy(g, _, $, re, Re, qe, Qe) {
    var Te = fl(g, $), et = fl(_, $), Qt = Qe.get(et);
    if (Qt) {
      kr(g, $, Qt);
      return;
    }
    var qt = qe ? qe(Te, et, $ + "", g, _, Qe) : void 0, Bo = qt === void 0;
    if (Bo) {
      var gl = hl(et), bl = !gl && Fd(et), Vd = !gl && !bl && jd(et);
      qt = et, gl || bl || Vd ? hl(Te) ? qt = Te : d0(Te) ? qt = Ky(Te) : bl ? (Bo = !1, qt = qy(et, !0)) : Vd ? (Bo = !1, qt = Xy(et, !0)) : qt = [] : f0(et) || pl(et) ? (qt = Te, pl(Te) ? qt = p0(Te) : (!_n(Te) || vl(Te)) && (qt = t0(et))) : Bo = !1;
    }
    Bo && (Qe.set(et, qt), Re(qt, et, re, qe, Qe), Qe.delete(et)), kr(g, $, qt);
  }
  function Hy(g, _) {
    return l0(s0(g, _, zd), g + "");
  }
  var Yy = xe ? function(g, _) {
    return xe(g, "toString", {
      configurable: !0,
      enumerable: !1,
      value: m0(_),
      writable: !0
    });
  } : zd;
  function qy(g, _) {
    if (_)
      return g.slice();
    var $ = g.length, re = zr ? zr($) : new g.constructor($);
    return g.copy(re), re;
  }
  function Gy(g) {
    var _ = new g.constructor(g.byteLength);
    return new Br(_).set(new Br(g)), _;
  }
  function Xy(g, _) {
    var $ = _ ? Gy(g.buffer) : g.buffer;
    return new g.constructor($, g.byteOffset, g.length);
  }
  function Ky(g, _) {
    var $ = -1, re = g.length;
    for (_ || (_ = Array(re)); ++$ < re; )
      _[$] = g[$];
    return _;
  }
  function Zy(g, _, $, re) {
    var Re = !$;
    $ || ($ = {});
    for (var qe = -1, Qe = _.length; ++qe < Qe; ) {
      var Te = _[qe], et = re ? re($[Te], g[Te], Te, $, g) : void 0;
      et === void 0 && (et = g[Te]), Re ? ul($, Te, et) : si($, Te, et);
    }
    return $;
  }
  function Jy(g) {
    return Hy(function(_, $) {
      var re = -1, Re = $.length, qe = Re > 1 ? $[Re - 1] : void 0, Qe = Re > 2 ? $[2] : void 0;
      for (qe = g.length > 3 && typeof qe == "function" ? (Re--, qe) : void 0, Qe && r0($[0], $[1], Qe) && (qe = Re < 3 ? void 0 : qe, Re = 1), _ = Object(_); ++re < Re; ) {
        var Te = $[re];
        Te && g(_, Te, re, qe);
      }
      return _;
    });
  }
  function Qy(g) {
    return function(_, $, re) {
      for (var Re = -1, qe = Object(_), Qe = re(_), Te = Qe.length; Te--; ) {
        var et = Qe[g ? Te : ++Re];
        if ($(qe[et], et, qe) === !1)
          break;
      }
      return _;
    };
  }
  function ci(g, _) {
    var $ = g.__data__;
    return n0(_) ? $[typeof _ == "string" ? "string" : "hash"] : $.map;
  }
  function dl(g, _) {
    var $ = $e(g, _);
    return Vy($) ? $ : void 0;
  }
  function e0(g) {
    var _ = Me.call(g, ie), $ = g[ie];
    try {
      g[ie] = void 0;
      var re = !0;
    } catch {
    }
    var Re = Ae.call(g);
    return re && (_ ? g[ie] = $ : delete g[ie]), Re;
  }
  function t0(g) {
    return typeof g.constructor == "function" && !Id(g) ? Vr(te(g)) : {};
  }
  function Md(g, _) {
    var $ = typeof g;
    return _ = _ ?? i, !!_ && ($ == "number" || $ != "symbol" && V.test(g)) && g > -1 && g % 1 == 0 && g < _;
  }
  function r0(g, _, $) {
    if (!_n($))
      return !1;
    var re = typeof _;
    return (re == "number" ? ml($) && Md(_, $.length) : re == "string" && _ in $) ? ui($[_], g) : !1;
  }
  function n0(g) {
    var _ = typeof g;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? g !== "__proto__" : g === null;
  }
  function o0(g) {
    return !!se && se in g;
  }
  function Id(g) {
    var _ = g && g.constructor, $ = typeof _ == "function" && _.prototype || ke;
    return g === $;
  }
  function a0(g) {
    var _ = [];
    if (g != null)
      for (var $ in Object(g))
        _.push($);
    return _;
  }
  function i0(g) {
    return Ae.call(g);
  }
  function s0(g, _, $) {
    return _ = He(_ === void 0 ? g.length - 1 : _, 0), function() {
      for (var re = arguments, Re = -1, qe = He(re.length - _, 0), Qe = Array(qe); ++Re < qe; )
        Qe[Re] = re[_ + Re];
      Re = -1;
      for (var Te = Array(_ + 1); ++Re < _; )
        Te[Re] = re[Re];
      return Te[_] = $(Qe), Se(g, this, Te);
    };
  }
  function fl(g, _) {
    if (!(_ === "constructor" && typeof g[_] == "function") && _ != "__proto__")
      return g[_];
  }
  var l0 = c0(Yy);
  function c0(g) {
    var _ = 0, $ = 0;
    return function() {
      var re = St(), Re = a - (re - $);
      if ($ = re, Re > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return g.apply(void 0, arguments);
    };
  }
  function u0(g) {
    if (g != null) {
      try {
        return rt.call(g);
      } catch {
      }
      try {
        return g + "";
      } catch {
      }
    }
    return "";
  }
  function ui(g, _) {
    return g === _ || g !== g && _ !== _;
  }
  var pl = $d(function() {
    return arguments;
  }()) ? $d : function(g) {
    return jo(g) && Me.call(g, "callee") && !Cr.call(g, "callee");
  }, hl = Array.isArray;
  function ml(g) {
    return g != null && Nd(g.length) && !vl(g);
  }
  function d0(g) {
    return jo(g) && ml(g);
  }
  var Fd = Ce || v0;
  function vl(g) {
    if (!_n(g))
      return !1;
    var _ = li(g);
    return _ == p || _ == m || _ == c || _ == S;
  }
  function Nd(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= i;
  }
  function _n(g) {
    var _ = typeof g;
    return g != null && (_ == "object" || _ == "function");
  }
  function jo(g) {
    return g != null && typeof g == "object";
  }
  function f0(g) {
    if (!jo(g) || li(g) != y)
      return !1;
    var _ = te(g);
    if (_ === null)
      return !0;
    var $ = Me.call(_, "constructor") && _.constructor;
    return typeof $ == "function" && $ instanceof $ && rt.call($) == At;
  }
  var jd = R ? le(R) : Ly;
  function p0(g) {
    return Zy(g, Bd(g));
  }
  function Bd(g) {
    return ml(g) ? Ft(g, !0) : Wy(g);
  }
  var h0 = Jy(function(g, _, $, re) {
    Dd(g, _, $, re);
  });
  function m0(g) {
    return function() {
      return g;
    };
  }
  function zd(g) {
    return g;
  }
  function v0() {
    return !1;
  }
  e.exports = h0;
})(os, os.exports);
var C_ = os.exports;
const ar = /* @__PURE__ */ Ts(C_);
var __ = (e) => /!(important)?$/.test(e), $f = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, k_ = (e, t) => (r) => {
  const n = String(t), o = __(n), a = $f(n), i = e ? `${e}.${a}` : a;
  let s = zt(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = $f(s), o ? `${s} !important` : s;
};
function ju(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = k_(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var hi = (...e) => (t) => e.reduce((r, n) => n(r), t);
function er(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = ju({
      scale: e,
      transform: t
    }), n;
  };
}
var E_ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function P_(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: E_(t),
    transform: r ? ju({
      scale: r,
      compose: n
    }) : n
  };
}
var ov = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function T_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...ov
  ].join(" ");
}
function A_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...ov
  ].join(" ");
}
var O_ = {
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
}, R_ = {
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
function $_(e) {
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
var D_ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Rc = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, M_ = new Set(Object.values(Rc)), $c = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), I_ = (e) => e.trim();
function F_(e, t) {
  if (e == null || $c.has(e))
    return e;
  if (!(Dc(e) || $c.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(I_).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in Rc ? Rc[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (M_.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], v = Dc(h) ? h : h && h.split(" "), b = `colors.${m}`, y = b in t.__cssMap ? t.__cssMap[b].varRef : m;
    return v ? [
      y,
      ...Array.isArray(v) ? v : [v]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Dc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), N_ = (e, t) => F_(e, t ?? {});
function j_(e) {
  return /^var\(--.+\)$/.test(e);
}
var B_ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Er = (e) => (t) => `${e}(${t})`, Ie = {
  filter(e) {
    return e !== "auto" ? e : O_;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : R_;
  },
  ring(e) {
    return $_(Ie.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? T_() : e === "auto-gpu" ? A_() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = B_(e);
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
    if (j_(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: N_,
  blur: Er("blur"),
  opacity: Er("opacity"),
  brightness: Er("brightness"),
  contrast: Er("contrast"),
  dropShadow: Er("drop-shadow"),
  grayscale: Er("grayscale"),
  hueRotate: Er("hue-rotate"),
  invert: Er("invert"),
  saturate: Er("saturate"),
  sepia: Er("sepia"),
  bgImage(e) {
    return e == null || Dc(e) || $c.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = D_[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, E = {
  borderWidths: er("borderWidths"),
  borderStyles: er("borderStyles"),
  colors: er("colors"),
  borders: er("borders"),
  gradients: er("gradients", Ie.gradient),
  radii: er("radii", Ie.px),
  space: er("space", hi(Ie.vh, Ie.px)),
  spaceT: er("space", hi(Ie.vh, Ie.px)),
  degreeT(e) {
    return { property: e, transform: Ie.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: ju({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: er("sizes", hi(Ie.vh, Ie.px)),
  sizesT: er("sizes", hi(Ie.vh, Ie.fraction)),
  shadows: er("shadows"),
  logical: P_,
  blur: er("blur", Ie.blur)
}, Fi = {
  background: E.colors("background"),
  backgroundColor: E.colors("backgroundColor"),
  backgroundImage: E.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Ie.bgClip },
  bgSize: E.prop("backgroundSize"),
  bgPosition: E.prop("backgroundPosition"),
  bg: E.colors("background"),
  bgColor: E.colors("backgroundColor"),
  bgPos: E.prop("backgroundPosition"),
  bgRepeat: E.prop("backgroundRepeat"),
  bgAttachment: E.prop("backgroundAttachment"),
  bgGradient: E.gradients("backgroundImage"),
  bgClip: { transform: Ie.bgClip }
};
Object.assign(Fi, {
  bgImage: Fi.backgroundImage,
  bgImg: Fi.backgroundImage
});
var je = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(je, {
  rounded: je.borderRadius,
  roundedTop: je.borderTopRadius,
  roundedTopLeft: je.borderTopLeftRadius,
  roundedTopRight: je.borderTopRightRadius,
  roundedTopStart: je.borderStartStartRadius,
  roundedTopEnd: je.borderStartEndRadius,
  roundedBottom: je.borderBottomRadius,
  roundedBottomLeft: je.borderBottomLeftRadius,
  roundedBottomRight: je.borderBottomRightRadius,
  roundedBottomStart: je.borderEndStartRadius,
  roundedBottomEnd: je.borderEndEndRadius,
  roundedLeft: je.borderLeftRadius,
  roundedRight: je.borderRightRadius,
  roundedStart: je.borderInlineStartRadius,
  roundedEnd: je.borderInlineEndRadius,
  borderStart: je.borderInlineStart,
  borderEnd: je.borderInlineEnd,
  borderTopStartRadius: je.borderStartStartRadius,
  borderTopEndRadius: je.borderStartEndRadius,
  borderBottomStartRadius: je.borderEndStartRadius,
  borderBottomEndRadius: je.borderEndEndRadius,
  borderStartRadius: je.borderInlineStartRadius,
  borderEndRadius: je.borderInlineEndRadius,
  borderStartWidth: je.borderInlineStartWidth,
  borderEndWidth: je.borderInlineEndWidth,
  borderStartColor: je.borderInlineStartColor,
  borderEndColor: je.borderInlineEndColor,
  borderStartStyle: je.borderInlineStartStyle,
  borderEndStyle: je.borderInlineEndStyle
});
var z_ = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Mc = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Mc, {
  shadow: Mc.boxShadow
});
var V_ = {
  filter: { transform: Ie.filter },
  blur: E.blur("--chakra-blur"),
  brightness: E.propT("--chakra-brightness", Ie.brightness),
  contrast: E.propT("--chakra-contrast", Ie.contrast),
  hueRotate: E.degreeT("--chakra-hue-rotate"),
  invert: E.propT("--chakra-invert", Ie.invert),
  saturate: E.propT("--chakra-saturate", Ie.saturate),
  dropShadow: E.propT("--chakra-drop-shadow", Ie.dropShadow),
  backdropFilter: { transform: Ie.backdropFilter },
  backdropBlur: E.blur("--chakra-backdrop-blur"),
  backdropBrightness: E.propT(
    "--chakra-backdrop-brightness",
    Ie.brightness
  ),
  backdropContrast: E.propT("--chakra-backdrop-contrast", Ie.contrast),
  backdropHueRotate: E.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: E.propT("--chakra-backdrop-invert", Ie.invert),
  backdropSaturate: E.propT("--chakra-backdrop-saturate", Ie.saturate)
}, as = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Ie.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: E.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: E.space("gap"),
  rowGap: E.space("rowGap"),
  columnGap: E.space("columnGap")
};
Object.assign(as, {
  flexDir: as.flexDirection
});
var av = {
  gridGap: E.space("gridGap"),
  gridColumnGap: E.space("gridColumnGap"),
  gridRowGap: E.space("gridRowGap"),
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
}, L_ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Ie.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, rr = {
  width: E.sizesT("width"),
  inlineSize: E.sizesT("inlineSize"),
  height: E.sizes("height"),
  blockSize: E.sizes("blockSize"),
  boxSize: E.sizes(["width", "height"]),
  minWidth: E.sizes("minWidth"),
  minInlineSize: E.sizes("minInlineSize"),
  minHeight: E.sizes("minHeight"),
  minBlockSize: E.sizes("minBlockSize"),
  maxWidth: E.sizes("maxWidth"),
  maxInlineSize: E.sizes("maxInlineSize"),
  maxHeight: E.sizes("maxHeight"),
  maxBlockSize: E.sizes("maxBlockSize"),
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
  float: E.propT("float", Ie.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(rr, {
  w: rr.width,
  h: rr.height,
  minW: rr.minWidth,
  maxW: rr.maxWidth,
  minH: rr.minHeight,
  maxH: rr.maxHeight,
  overscroll: rr.overscrollBehavior,
  overscrollX: rr.overscrollBehaviorX,
  overscrollY: rr.overscrollBehaviorY
});
var W_ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function U_(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var H_ = (e) => {
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
}, Y_ = H_(U_), q_ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, G_ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, _l = (e, t, r) => {
  const n = {}, o = Y_(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, X_ = {
  srOnly: {
    transform(e) {
      return e === !0 ? q_ : e === "focusable" ? G_ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => _l(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => _l(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => _l(t, e, r)
  }
}, aa = {
  position: !0,
  pos: E.prop("position"),
  zIndex: E.prop("zIndex", "zIndices"),
  inset: E.spaceT("inset"),
  insetX: E.spaceT(["left", "right"]),
  insetInline: E.spaceT("insetInline"),
  insetY: E.spaceT(["top", "bottom"]),
  insetBlock: E.spaceT("insetBlock"),
  top: E.spaceT("top"),
  insetBlockStart: E.spaceT("insetBlockStart"),
  bottom: E.spaceT("bottom"),
  insetBlockEnd: E.spaceT("insetBlockEnd"),
  left: E.spaceT("left"),
  insetInlineStart: E.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: E.spaceT("right"),
  insetInlineEnd: E.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(aa, {
  insetStart: aa.insetInlineStart,
  insetEnd: aa.insetInlineEnd
});
var K_ = {
  ring: { transform: Ie.ring },
  ringColor: E.colors("--chakra-ring-color"),
  ringOffset: E.prop("--chakra-ring-offset-width"),
  ringOffsetColor: E.colors("--chakra-ring-offset-color"),
  ringInset: E.prop("--chakra-ring-inset")
}, Je = {
  margin: E.spaceT("margin"),
  marginTop: E.spaceT("marginTop"),
  marginBlockStart: E.spaceT("marginBlockStart"),
  marginRight: E.spaceT("marginRight"),
  marginInlineEnd: E.spaceT("marginInlineEnd"),
  marginBottom: E.spaceT("marginBottom"),
  marginBlockEnd: E.spaceT("marginBlockEnd"),
  marginLeft: E.spaceT("marginLeft"),
  marginInlineStart: E.spaceT("marginInlineStart"),
  marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: E.spaceT("marginInline"),
  marginY: E.spaceT(["marginTop", "marginBottom"]),
  marginBlock: E.spaceT("marginBlock"),
  padding: E.space("padding"),
  paddingTop: E.space("paddingTop"),
  paddingBlockStart: E.space("paddingBlockStart"),
  paddingRight: E.space("paddingRight"),
  paddingBottom: E.space("paddingBottom"),
  paddingBlockEnd: E.space("paddingBlockEnd"),
  paddingLeft: E.space("paddingLeft"),
  paddingInlineStart: E.space("paddingInlineStart"),
  paddingInlineEnd: E.space("paddingInlineEnd"),
  paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: E.space("paddingInline"),
  paddingY: E.space(["paddingTop", "paddingBottom"]),
  paddingBlock: E.space("paddingBlock")
};
Object.assign(Je, {
  m: Je.margin,
  mt: Je.marginTop,
  mr: Je.marginRight,
  me: Je.marginInlineEnd,
  marginEnd: Je.marginInlineEnd,
  mb: Je.marginBottom,
  ml: Je.marginLeft,
  ms: Je.marginInlineStart,
  marginStart: Je.marginInlineStart,
  mx: Je.marginX,
  my: Je.marginY,
  p: Je.padding,
  pt: Je.paddingTop,
  py: Je.paddingY,
  px: Je.paddingX,
  pb: Je.paddingBottom,
  pl: Je.paddingLeft,
  ps: Je.paddingInlineStart,
  paddingStart: Je.paddingInlineStart,
  pr: Je.paddingRight,
  pe: Je.paddingInlineEnd,
  paddingEnd: Je.paddingInlineEnd
});
var Z_ = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, J_ = {
  clipPath: !0,
  transform: E.propT("transform", Ie.transform),
  transformOrigin: !0,
  translateX: E.spaceT("--chakra-translate-x"),
  translateY: E.spaceT("--chakra-translate-y"),
  skewX: E.degreeT("--chakra-skew-x"),
  skewY: E.degreeT("--chakra-skew-y"),
  scaleX: E.prop("--chakra-scale-x"),
  scaleY: E.prop("--chakra-scale-y"),
  scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: E.degreeT("--chakra-rotate")
}, Q_ = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: E.prop("transitionDuration", "transition.duration"),
  transitionProperty: E.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: E.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, ek = {
  fontFamily: E.prop("fontFamily", "fonts"),
  fontSize: E.prop("fontSize", "fontSizes", Ie.px),
  fontWeight: E.prop("fontWeight", "fontWeights"),
  lineHeight: E.prop("lineHeight", "lineHeights"),
  letterSpacing: E.prop("letterSpacing", "letterSpacings"),
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
}, tk = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: E.spaceT("scrollMargin"),
  scrollMarginTop: E.spaceT("scrollMarginTop"),
  scrollMarginBottom: E.spaceT("scrollMarginBottom"),
  scrollMarginLeft: E.spaceT("scrollMarginLeft"),
  scrollMarginRight: E.spaceT("scrollMarginRight"),
  scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: E.spaceT("scrollPadding"),
  scrollPaddingTop: E.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: E.spaceT("scrollPaddingRight"),
  scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function iv(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Ns = (e, ...t) => t.map(iv).join(` ${e} `).replace(/calc/g, ""), Df = (...e) => `calc(${Ns("+", ...e)})`, Mf = (...e) => `calc(${Ns("-", ...e)})`, Ic = (...e) => `calc(${Ns("*", ...e)})`, If = (...e) => `calc(${Ns("/", ...e)})`, Ff = (e) => {
  const t = iv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ic(t, -1);
}, An = Object.assign(
  (e) => ({
    add: (...t) => An(Df(e, ...t)),
    subtract: (...t) => An(Mf(e, ...t)),
    multiply: (...t) => An(Ic(e, ...t)),
    divide: (...t) => An(If(e, ...t)),
    negate: () => An(Ff(e)),
    toString: () => e.toString()
  }),
  {
    add: Df,
    subtract: Mf,
    multiply: Ic,
    divide: If,
    negate: Ff
  }
);
function rk(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function nk(e) {
  const t = rk(e.toString());
  return ak(ok(t));
}
function ok(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function ak(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function ik(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function sk(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function lk(e, t = "") {
  return nk(`--${ik(e, t)}`);
}
function me(e, t, r) {
  const n = lk(e, r);
  return {
    variable: n,
    reference: sk(n, t)
  };
}
function ck(e, t) {
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
function uk(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function dk(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Fc(e) {
  if (e == null)
    return e;
  const { unitless: t } = dk(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var sv = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Bu = (e) => Object.fromEntries(Object.entries(e).sort(sv));
function Nf(e) {
  const t = Bu(e);
  return Object.assign(Object.values(t), t);
}
function fk(e) {
  const t = Object.keys(Bu(e));
  return new Set(t);
}
function jf(e) {
  var t;
  if (!e)
    return e;
  e = (t = Fc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Ko(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Fc(e)})`), t && r.push("and", `(max-width: ${Fc(t)})`), r.join(" ");
}
function pk(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Nf(e), n = Object.entries(e).sort(sv).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? jf(d) : void 0, {
      _minW: jf(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Ko(null, d),
      minWQuery: Ko(s),
      minMaxQuery: Ko(s, d)
    };
  }), o = fk(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Bu(e),
    asArray: Nf(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => Ko(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!zt(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; uk(s) === null; )
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
var Ct = {
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
}, an = (e) => lv((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Lr = (e) => lv((t) => e(t, "~ &"), "[data-peer]", ".peer"), lv = (e, ...t) => t.map(e).join(", "), js = {
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
  _groupHover: an(Ct.hover),
  _peerHover: Lr(Ct.hover),
  _groupFocus: an(Ct.focus),
  _peerFocus: Lr(Ct.focus),
  _groupFocusVisible: an(Ct.focusVisible),
  _peerFocusVisible: Lr(Ct.focusVisible),
  _groupActive: an(Ct.active),
  _peerActive: Lr(Ct.active),
  _groupDisabled: an(Ct.disabled),
  _peerDisabled: Lr(Ct.disabled),
  _groupInvalid: an(Ct.invalid),
  _peerInvalid: Lr(Ct.invalid),
  _groupChecked: an(Ct.checked),
  _peerChecked: Lr(Ct.checked),
  _groupFocusWithin: an(Ct.focusWithin),
  _peerFocusWithin: Lr(Ct.focusWithin),
  _peerPlaceholderShown: Lr(Ct.placeholderShown),
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
}, cv = Object.keys(
  js
);
function Bf(e, t) {
  return me(String(e).replace(/\./g, "-"), void 0, t);
}
function hk(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Bf(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, v = An.negate(s), b = An.negate(c);
        n[h] = {
          value: v,
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
      const { reference: v } = Bf(m, t == null ? void 0 : t.cssVarPrefix);
      return v;
    }, d = zt(s) ? s : { default: s };
    r = ar(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, v;
          if (!m)
            return f;
          const b = u(`${m}`);
          if (p === "default")
            return f[l] = b, f;
          const y = (v = (h = js) == null ? void 0 : h[p]) != null ? v : p;
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
function mk(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function vk(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function gk(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function zf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (gk(i) || Array.isArray(i)) {
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
var bk = [
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
function yk(e) {
  return vk(e, bk);
}
function xk(e) {
  return e.semanticTokens;
}
function Sk(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var wk = (e) => cv.includes(e) || e === "default";
function Ck({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return zf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), zf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(wk)
    }
  ), r;
}
function SV(e) {
  var t;
  const r = Sk(e), n = yk(r), o = xk(r), a = Ck({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = hk(a, { cssVarPrefix: i });
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
    __breakpoints: pk(r.breakpoints)
  }), r;
}
var zu = ar(
  {},
  Fi,
  je,
  z_,
  as,
  rr,
  V_,
  K_,
  L_,
  av,
  X_,
  aa,
  Mc,
  Je,
  tk,
  ek,
  Z_,
  J_,
  W_,
  Q_
), _k = Object.assign({}, Je, rr, as, av, aa), wV = Object.keys(
  _k
), kk = [...Object.keys(zu), ...cv], Ek = { ...zu, ...js }, Pk = (e) => e in Ek, Tk = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = fn(e[i], t);
    if (s == null)
      continue;
    if (s = zt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function Ak(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Ok(e) {
  return /^var\(--.+\)$/.test(e);
}
var Rk = (e, t) => e.startsWith("--") && typeof t == "string" && !Ok(t), $k = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = Ak(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function Dk(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = fn(a, n), d = Tk(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = fn(m, n);
      p in r && (p = r[p]), Rk(p, h) && (h = $k(n, h));
      let v = t[p];
      if (v === !0 && (v = { property: p }), zt(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = ar(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let b = (c = (l = v == null ? void 0 : v.transform) == null ? void 0 : l.call(v, h, n, u)) != null ? c : h;
      b = v != null && v.processResult ? o(b, !0) : b;
      const y = fn(v == null ? void 0 : v.property, n);
      if (!i && (v != null && v.static)) {
        const S = fn(v.static, n);
        f = ar({}, f, S);
      }
      if (y && Array.isArray(y)) {
        for (const S of y)
          f[S] = b;
        continue;
      }
      if (y) {
        y === "&" && zt(b) ? f = ar({}, f, b) : f[y] = b;
        continue;
      }
      if (zt(b)) {
        f = ar({}, f, b);
        continue;
      }
      f[p] = b;
    }
    return f;
  };
  return o;
}
var Mk = (e) => (t) => Dk({
  theme: t,
  pseudos: js,
  configs: zu
})(e);
function CV(e) {
  return e;
}
function _V(e) {
  return e;
}
function Ke(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Ik(e, t) {
  if (Array.isArray(e))
    return e;
  if (zt(e))
    return t(e);
  if (e != null)
    return [e];
}
function Fk(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Nk(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Ik(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], v = t.details[Fk(u, m)], b = Ko(h.minW, v == null ? void 0 : v._minW), y = fn((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (y) {
        if (p) {
          (l = n.parts) == null || l.forEach((S) => {
            ar(c, {
              [S]: f ? y[S] : { [b]: y[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? ar(c, y) : c[b] = y;
          continue;
        }
        c[b] = y;
      }
    }
    return c;
  };
}
function jk(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = Nk(a);
    return ar(
      {},
      fn((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function uv(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Fr(e) {
  return mk(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var Bk = [
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
function zk(e) {
  return zt(e) ? Bk.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var Vk = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Lk = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Wk = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Uk = {
  property: Vk,
  easing: Lk,
  duration: Wk
}, Hk = Uk, Yk = {
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
}, qk = Yk, Gk = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Xk = Gk, Kk = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, Zk = Kk, Jk = {
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
}, Qk = Jk, eE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, tE = eE, rE = {
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
}, nE = rE, oE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, aE = oE, iE = {
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
}, dv = iE, fv = {
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
}, sE = {
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
}, lE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, cE = {
  ...fv,
  ...sE,
  container: lE
}, pv = cE, hv = {
  breakpoints: Zk,
  zIndices: qk,
  radii: tE,
  blur: aE,
  colors: Qk,
  ...dv,
  sizes: pv,
  shadows: nE,
  space: fv,
  borders: Xk,
  transition: Hk
}, { defineMultiStyleConfig: uE, definePartsStyle: Zo } = Ke([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Wr = me("stepper-indicator-size"), to = me("stepper-icon-size"), ro = me("stepper-title-font-size"), Jo = me("stepper-description-font-size"), Wo = me("stepper-accent-color"), dE = Zo(({ colorScheme: e }) => ({
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
    [Wo.variable]: `colors.${e}.500`,
    _dark: {
      [Wo.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: ro.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Jo.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: ro.reference
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
    width: to.reference,
    height: to.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Wr.reference,
    height: Wr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Wo.reference
    },
    "&[data-status=complete]": {
      bg: Wo.reference,
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
      bg: Wo.reference
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
      maxHeight: `calc(100% - ${Wr.reference} - 8px)`,
      top: `calc(${Wr.reference} + 4px)`,
      insetStart: `calc(${Wr.reference} / 2 - 1px)`
    }
  }
})), fE = uE({
  baseStyle: dE,
  sizes: {
    xs: Zo({
      stepper: {
        [Wr.variable]: "sizes.4",
        [to.variable]: "sizes.3",
        [ro.variable]: "fontSizes.xs",
        [Jo.variable]: "fontSizes.xs"
      }
    }),
    sm: Zo({
      stepper: {
        [Wr.variable]: "sizes.6",
        [to.variable]: "sizes.4",
        [ro.variable]: "fontSizes.sm",
        [Jo.variable]: "fontSizes.xs"
      }
    }),
    md: Zo({
      stepper: {
        [Wr.variable]: "sizes.8",
        [to.variable]: "sizes.5",
        [ro.variable]: "fontSizes.md",
        [Jo.variable]: "fontSizes.sm"
      }
    }),
    lg: Zo({
      stepper: {
        [Wr.variable]: "sizes.10",
        [to.variable]: "sizes.6",
        [ro.variable]: "fontSizes.lg",
        [Jo.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Ue(e, t = {}) {
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
    return Ue(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return Ue(e, t);
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
var pE = Ue("accordion").parts("root", "container", "button", "panel").extend("icon"), hE = Ue("alert").parts("title", "description", "container").extend("icon", "spinner"), mE = Ue("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), vE = Ue("breadcrumb").parts("link", "item", "container").extend("separator");
Ue("button").parts();
var gE = Ue("checkbox").parts("control", "icon", "container").extend("label");
Ue("progress").parts("track", "filledTrack").extend("label");
var bE = Ue("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), yE = Ue("editable").parts(
  "preview",
  "input",
  "textarea"
), xE = Ue("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), SE = Ue("formError").parts("text", "icon"), wE = Ue("input").parts("addon", "field", "element"), CE = Ue("list").parts("container", "item", "icon"), _E = Ue("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), kE = Ue("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), EE = Ue("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Ue("pininput").parts("field");
var PE = Ue("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), TE = Ue("progress").parts(
  "label",
  "filledTrack",
  "track"
), AE = Ue("radio").parts(
  "container",
  "control",
  "label"
), OE = Ue("select").parts("field", "icon"), RE = Ue("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), $E = Ue("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), DE = Ue("switch").parts(
  "container",
  "track",
  "thumb"
), ME = Ue("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), IE = Ue("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), FE = Ue("tag").parts(
  "container",
  "label",
  "closeButton"
), NE = Ue("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function Rn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class jE extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Qo = jE;
function Vu(e) {
  if (typeof e != "string")
    throw new Qo(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = YE.test(e) ? VE(e) : e;
  const r = LE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(Aa(s, 2), 16)), parseInt(Aa(i[3] || "f", 2), 16) / 255];
  }
  const n = WE.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = UE.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = HE.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (Rn(0, 100, s) !== s)
      throw new Qo(e);
    if (Rn(0, 100, l) !== l)
      throw new Qo(e);
    return [...qE(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new Qo(e);
}
function BE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Vf = (e) => parseInt(e.replace(/_/g, ""), 36), zE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Vf(t.substring(0, 3)), n = Vf(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function VE(e) {
  const t = e.toLowerCase().trim(), r = zE[BE(t)];
  if (!r)
    throw new Qo(e);
  return `#${r}`;
}
const Aa = (e, t) => Array.from(Array(t)).map(() => e).join(""), LE = new RegExp(`^#${Aa("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), WE = new RegExp(`^#${Aa("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), UE = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Aa(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), HE = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, YE = /^[a-z]+$/i, Lf = (e) => Math.round(e * 255), qE = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Lf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Lf);
};
function GE(e, t, r, n) {
  return `rgba(${Rn(0, 255, e).toFixed()}, ${Rn(0, 255, t).toFixed()}, ${Rn(0, 255, r).toFixed()}, ${parseFloat(Rn(0, 1, n).toFixed(3))})`;
}
function XE(e, t) {
  const [r, n, o, a] = Vu(e);
  return GE(r, n, o, a - t);
}
function KE(e) {
  const [t, r, n, o] = Vu(e);
  let a = (i) => {
    const s = Rn(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function ZE(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var JE = (e) => Object.keys(e).length === 0, is = (e, t, r) => {
  const n = ZE(e, `colors.${t}`, t);
  try {
    return KE(n), n;
  } catch {
    return r ?? "#000000";
  }
}, gr = (e, t, r) => {
  var n;
  return (n = uv(e, "colors", t)) != null ? n : r;
}, QE = (e) => {
  const [t, r, n] = Vu(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, eP = (e) => (t) => {
  const r = is(t, e);
  return QE(r) < 128 ? "dark" : "light";
}, tP = (e) => (t) => eP(e)(t) === "dark", Co = (e, t) => (r) => {
  const n = is(r, e);
  return XE(n, 1 - t);
};
function Wf(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var rP = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function nP(e) {
  const t = rP();
  return !e || JE(e) ? t : e.string && e.colors ? aP(e.string, e.colors) : e.string && !e.colors ? oP(e.string) : e.colors && !e.string ? iP(e.colors) : t;
}
function oP(e) {
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
function aP(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function iP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ue(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Lu(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function mv(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
var Bs = (e, ...t) => t.map(mv).join(` ${e} `).replace(/calc/g, ""), Uf = (...e) => `calc(${Bs("+", ...e)})`, Hf = (...e) => `calc(${Bs("-", ...e)})`, Nc = (...e) => `calc(${Bs("*", ...e)})`, Yf = (...e) => `calc(${Bs("/", ...e)})`, qf = (e) => {
  const t = mv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Nc(t, -1);
}, Ur = Object.assign(
  (e) => ({
    add: (...t) => Ur(Uf(e, ...t)),
    subtract: (...t) => Ur(Hf(e, ...t)),
    multiply: (...t) => Ur(Nc(e, ...t)),
    divide: (...t) => Ur(Yf(e, ...t)),
    negate: () => Ur(qf(e)),
    toString: () => e.toString()
  }),
  {
    add: Uf,
    subtract: Hf,
    multiply: Nc,
    divide: Yf,
    negate: qf
  }
);
function sP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function lP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function vv(e) {
  const t = lP(e.toString());
  return t.includes("\\.") ? e : sP(e) ? t.replace(".", "\\.") : e;
}
function cP(e, t = "") {
  return [t, vv(e)].filter(Boolean).join("-");
}
function uP(e, t) {
  return `var(${vv(e)}${t ? `, ${t}` : ""})`;
}
function dP(e, t = "") {
  return `--${cP(e, t)}`;
}
function bt(e, t) {
  const r = dP(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: uP(r, fP(t == null ? void 0 : t.fallback))
  };
}
function fP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: pP, definePartsStyle: Ni } = Ke(DE.keys), ia = bt("switch-track-width"), Mn = bt("switch-track-height"), kl = bt("switch-track-diff"), hP = Ur.subtract(ia, Mn), jc = bt("switch-thumb-x"), Uo = bt("switch-bg"), mP = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ia.reference],
    height: [Mn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Uo.variable]: "colors.gray.300",
    _dark: {
      [Uo.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Uo.variable]: `colors.${t}.500`,
      _dark: {
        [Uo.variable]: `colors.${t}.200`
      }
    },
    bg: Uo.reference
  };
}, vP = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Mn.reference],
  height: [Mn.reference],
  _checked: {
    transform: `translateX(${jc.reference})`
  }
}, gP = Ni((e) => ({
  container: {
    [kl.variable]: hP,
    [jc.variable]: kl.reference,
    _rtl: {
      [jc.variable]: Ur(kl).negate().toString()
    }
  },
  track: mP(e),
  thumb: vP
})), bP = {
  sm: Ni({
    container: {
      [ia.variable]: "1.375rem",
      [Mn.variable]: "sizes.3"
    }
  }),
  md: Ni({
    container: {
      [ia.variable]: "1.875rem",
      [Mn.variable]: "sizes.4"
    }
  }),
  lg: Ni({
    container: {
      [ia.variable]: "2.875rem",
      [Mn.variable]: "sizes.6"
    }
  })
}, yP = pP({
  baseStyle: gP,
  sizes: bP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: xP, definePartsStyle: co } = Ke(ME.keys), SP = co({
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
}), ss = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, wP = co((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ss
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ss
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
}), CP = co((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ss
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ss
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
}), _P = {
  simple: wP,
  striped: CP,
  unstyled: {}
}, kP = {
  sm: co({
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
  md: co({
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
  lg: co({
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
}, EP = xP({
  baseStyle: SP,
  variants: _P,
  sizes: kP,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Bt = me("tabs-color"), vr = me("tabs-bg"), mi = me("tabs-border-color"), { defineMultiStyleConfig: PP, definePartsStyle: $r } = Ke(IE.keys), TP = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, AP = (e) => {
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
}, OP = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, RP = {
  p: 4
}, $P = $r((e) => ({
  root: TP(e),
  tab: AP(e),
  tablist: OP(e),
  tabpanel: RP
})), DP = {
  sm: $r({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: $r({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: $r({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, MP = $r((e) => {
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
        [Bt.variable]: `colors.${t}.600`,
        _dark: {
          [Bt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [vr.variable]: "colors.gray.200",
        _dark: {
          [vr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Bt.reference,
      bg: vr.reference
    }
  };
}), IP = $r((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [mi.variable]: "transparent",
      _selected: {
        [Bt.variable]: `colors.${t}.600`,
        [mi.variable]: "colors.white",
        _dark: {
          [Bt.variable]: `colors.${t}.300`,
          [mi.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: mi.reference
      },
      color: Bt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), FP = $r((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [vr.variable]: "colors.gray.50",
      _dark: {
        [vr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [vr.variable]: "colors.white",
        [Bt.variable]: `colors.${t}.600`,
        _dark: {
          [vr.variable]: "colors.gray.800",
          [Bt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Bt.reference,
      bg: vr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), NP = $r((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: is(r, `${t}.700`),
        bg: is(r, `${t}.100`)
      }
    }
  };
}), jP = $r((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Bt.variable]: "colors.gray.600",
      _dark: {
        [Bt.variable]: "inherit"
      },
      _selected: {
        [Bt.variable]: "colors.white",
        [vr.variable]: `colors.${t}.600`,
        _dark: {
          [Bt.variable]: "colors.gray.800",
          [vr.variable]: `colors.${t}.300`
        }
      },
      color: Bt.reference,
      bg: vr.reference
    }
  };
}), BP = $r({}), zP = {
  line: MP,
  enclosed: IP,
  "enclosed-colored": FP,
  "soft-rounded": NP,
  "solid-rounded": jP,
  unstyled: BP
}, VP = PP({
  baseStyle: $P,
  sizes: DP,
  variants: zP,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), ft = ck("badge", ["bg", "color", "shadow"]), LP = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: ft.bg.reference,
  color: ft.color.reference,
  boxShadow: ft.shadow.reference
}, WP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Co(`${t}.500`, 0.6)(r);
  return {
    [ft.bg.variable]: `colors.${t}.500`,
    [ft.color.variable]: "colors.white",
    _dark: {
      [ft.bg.variable]: n,
      [ft.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, UP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Co(`${t}.200`, 0.16)(r);
  return {
    [ft.bg.variable]: `colors.${t}.100`,
    [ft.color.variable]: `colors.${t}.800`,
    _dark: {
      [ft.bg.variable]: n,
      [ft.color.variable]: `colors.${t}.200`
    }
  };
}, HP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Co(`${t}.200`, 0.8)(r);
  return {
    [ft.color.variable]: `colors.${t}.500`,
    _dark: {
      [ft.color.variable]: n
    },
    [ft.shadow.variable]: `inset 0 0 0px 1px ${ft.color.reference}`
  };
}, YP = {
  solid: WP,
  subtle: UP,
  outline: HP
}, sa = {
  baseStyle: LP,
  variants: YP,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: qP, definePartsStyle: In } = Ke(FE.keys), Gf = me("tag-bg"), Xf = me("tag-color"), El = me("tag-shadow"), ji = me("tag-min-height"), Bi = me("tag-min-width"), zi = me("tag-font-size"), Vi = me("tag-padding-inline"), GP = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Xf.variable]: ft.color.reference,
  [Gf.variable]: ft.bg.reference,
  [El.variable]: ft.shadow.reference,
  color: Xf.reference,
  bg: Gf.reference,
  boxShadow: El.reference,
  borderRadius: "md",
  minH: ji.reference,
  minW: Bi.reference,
  fontSize: zi.reference,
  px: Vi.reference,
  _focusVisible: {
    [El.variable]: "shadows.outline"
  }
}, XP = {
  lineHeight: 1.2,
  overflow: "visible"
}, KP = {
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
}, ZP = In({
  container: GP,
  label: XP,
  closeButton: KP
}), JP = {
  sm: In({
    container: {
      [ji.variable]: "sizes.5",
      [Bi.variable]: "sizes.5",
      [zi.variable]: "fontSizes.xs",
      [Vi.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: In({
    container: {
      [ji.variable]: "sizes.6",
      [Bi.variable]: "sizes.6",
      [zi.variable]: "fontSizes.sm",
      [Vi.variable]: "space.2"
    }
  }),
  lg: In({
    container: {
      [ji.variable]: "sizes.8",
      [Bi.variable]: "sizes.8",
      [zi.variable]: "fontSizes.md",
      [Vi.variable]: "space.3"
    }
  })
}, QP = {
  subtle: In((e) => {
    var t;
    return {
      container: (t = sa.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: In((e) => {
    var t;
    return {
      container: (t = sa.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: In((e) => {
    var t;
    return {
      container: (t = sa.variants) == null ? void 0 : t.outline(e)
    };
  })
}, eT = qP({
  variants: QP,
  baseStyle: ZP,
  sizes: JP,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Hr, defineMultiStyleConfig: tT } = Ke(wE.keys), rT = Hr({
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
}), sn = {
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
}, nT = {
  lg: Hr({
    field: sn.lg,
    addon: sn.lg
  }),
  md: Hr({
    field: sn.md,
    addon: sn.md
  }),
  sm: Hr({
    field: sn.sm,
    addon: sn.sm
  }),
  xs: Hr({
    field: sn.xs,
    addon: sn.xs
  })
};
function Wu(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || ue("blue.500", "blue.300")(e),
    errorBorderColor: r || ue("red.500", "red.300")(e)
  };
}
var oT = Hr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Wu(e);
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
        borderColor: gr(t, n),
        boxShadow: `0 0 0 1px ${gr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: gr(t, r),
        boxShadow: `0 0 0 1px ${gr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: ue("inherit", "whiteAlpha.50")(e),
      bg: ue("gray.100", "whiteAlpha.300")(e)
    }
  };
}), aT = Hr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Wu(e);
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
        borderColor: gr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: gr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ue("gray.100", "whiteAlpha.50")(e)
    }
  };
}), iT = Hr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Wu(e);
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
        borderColor: gr(t, n),
        boxShadow: `0px 1px 0px 0px ${gr(t, n)}`
      },
      _focusVisible: {
        borderColor: gr(t, r),
        boxShadow: `0px 1px 0px 0px ${gr(t, r)}`
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
}), sT = Hr({
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
}), lT = {
  outline: oT,
  filled: aT,
  flushed: iT,
  unstyled: sT
}, Ve = tT({
  baseStyle: rT,
  sizes: nT,
  variants: lT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Kf, cT = {
  ...(Kf = Ve.baseStyle) == null ? void 0 : Kf.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Zf, Jf, uT = {
  outline: (e) => {
    var t, r;
    return (r = (t = Ve.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = Ve.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = Ve.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Jf = (Zf = Ve.variants) == null ? void 0 : Zf.unstyled.field) != null ? Jf : {}
}, Qf, ep, tp, rp, np, op, ap, ip, dT = {
  xs: (ep = (Qf = Ve.sizes) == null ? void 0 : Qf.xs.field) != null ? ep : {},
  sm: (rp = (tp = Ve.sizes) == null ? void 0 : tp.sm.field) != null ? rp : {},
  md: (op = (np = Ve.sizes) == null ? void 0 : np.md.field) != null ? op : {},
  lg: (ip = (ap = Ve.sizes) == null ? void 0 : ap.lg.field) != null ? ip : {}
}, fT = {
  baseStyle: cT,
  sizes: dT,
  variants: uT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, gi = bt("tooltip-bg"), Pl = bt("tooltip-fg"), pT = bt("popper-arrow-bg"), hT = {
  bg: gi.reference,
  color: Pl.reference,
  [gi.variable]: "colors.gray.700",
  [Pl.variable]: "colors.whiteAlpha.900",
  _dark: {
    [gi.variable]: "colors.gray.300",
    [Pl.variable]: "colors.gray.900"
  },
  [pT.variable]: gi.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, mT = {
  baseStyle: hT
}, { defineMultiStyleConfig: vT, definePartsStyle: ea } = Ke(TE.keys), gT = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = ue(
    Wf(),
    Wf("1rem", "rgba(0,0,0,0.1)")
  )(e), i = ue(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${gr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, bT = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, yT = (e) => ({
  bg: ue("gray.100", "whiteAlpha.300")(e)
}), xT = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...gT(e)
}), ST = ea((e) => ({
  label: bT,
  filledTrack: xT(e),
  track: yT(e)
})), wT = {
  xs: ea({
    track: { h: "1" }
  }),
  sm: ea({
    track: { h: "2" }
  }),
  md: ea({
    track: { h: "3" }
  }),
  lg: ea({
    track: { h: "4" }
  })
}, CT = vT({
  sizes: wT,
  baseStyle: ST,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), _T = (e) => typeof e == "function";
function $t(e, ...t) {
  return _T(e) ? e(...t) : e;
}
var { definePartsStyle: Li, defineMultiStyleConfig: kT } = Ke(gE.keys), la = me("checkbox-size"), ET = (e) => {
  const { colorScheme: t } = e;
  return {
    w: la.reference,
    h: la.reference,
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
}, PT = {
  _disabled: { cursor: "not-allowed" }
}, TT = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, AT = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, OT = Li((e) => ({
  icon: AT,
  container: PT,
  control: $t(ET, e),
  label: TT
})), RT = {
  sm: Li({
    control: { [la.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Li({
    control: { [la.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Li({
    control: { [la.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, ls = kT({
  baseStyle: OT,
  sizes: RT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: $T, definePartsStyle: Wi } = Ke(AE.keys), DT = (e) => {
  var t;
  const r = (t = $t(ls.baseStyle, e)) == null ? void 0 : t.control;
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
}, MT = Wi((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = ls).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = ls).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: DT(e)
  };
}), IT = {
  md: Wi({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Wi({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Wi({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, FT = $T({
  baseStyle: MT,
  sizes: IT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: NT, definePartsStyle: jT } = Ke(OE.keys), bi = me("select-bg"), sp, BT = {
  ...(sp = Ve.baseStyle) == null ? void 0 : sp.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: bi.reference,
  [bi.variable]: "colors.white",
  _dark: {
    [bi.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: bi.reference
  }
}, zT = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, VT = jT({
  field: BT,
  icon: zT
}), yi = {
  paddingInlineEnd: "8"
}, lp, cp, up, dp, fp, pp, hp, mp, LT = {
  lg: {
    ...(lp = Ve.sizes) == null ? void 0 : lp.lg,
    field: {
      ...(cp = Ve.sizes) == null ? void 0 : cp.lg.field,
      ...yi
    }
  },
  md: {
    ...(up = Ve.sizes) == null ? void 0 : up.md,
    field: {
      ...(dp = Ve.sizes) == null ? void 0 : dp.md.field,
      ...yi
    }
  },
  sm: {
    ...(fp = Ve.sizes) == null ? void 0 : fp.sm,
    field: {
      ...(pp = Ve.sizes) == null ? void 0 : pp.sm.field,
      ...yi
    }
  },
  xs: {
    ...(hp = Ve.sizes) == null ? void 0 : hp.xs,
    field: {
      ...(mp = Ve.sizes) == null ? void 0 : mp.xs.field,
      ...yi
    },
    icon: {
      insetEnd: "1"
    }
  }
}, WT = NT({
  baseStyle: VT,
  sizes: LT,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), Tl = me("skeleton-start-color"), Al = me("skeleton-end-color"), UT = {
  [Tl.variable]: "colors.gray.100",
  [Al.variable]: "colors.gray.400",
  _dark: {
    [Tl.variable]: "colors.gray.800",
    [Al.variable]: "colors.gray.600"
  },
  background: Tl.reference,
  borderColor: Al.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, HT = {
  baseStyle: UT
}, Ol = me("skip-link-bg"), YT = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Ol.variable]: "colors.white",
    _dark: {
      [Ol.variable]: "colors.gray.700"
    },
    bg: Ol.reference
  }
}, qT = {
  baseStyle: YT
}, { defineMultiStyleConfig: GT, definePartsStyle: zs } = Ke(RE.keys), Oa = me("slider-thumb-size"), Ra = me("slider-track-size"), dn = me("slider-bg"), XT = (e) => {
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
    ...Lu({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, KT = (e) => ({
  ...Lu({
    orientation: e.orientation,
    horizontal: { h: Ra.reference },
    vertical: { w: Ra.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [dn.variable]: "colors.gray.200",
  _dark: {
    [dn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [dn.variable]: "colors.gray.300",
    _dark: {
      [dn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: dn.reference
}), ZT = (e) => {
  const { orientation: t } = e;
  return {
    ...Lu({
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
    w: Oa.reference,
    h: Oa.reference,
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
}, JT = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [dn.variable]: `colors.${t}.500`,
    _dark: {
      [dn.variable]: `colors.${t}.200`
    },
    bg: dn.reference
  };
}, QT = zs((e) => ({
  container: XT(e),
  track: KT(e),
  thumb: ZT(e),
  filledTrack: JT(e)
})), eA = zs({
  container: {
    [Oa.variable]: "sizes.4",
    [Ra.variable]: "sizes.1"
  }
}), tA = zs({
  container: {
    [Oa.variable]: "sizes.3.5",
    [Ra.variable]: "sizes.1"
  }
}), rA = zs({
  container: {
    [Oa.variable]: "sizes.2.5",
    [Ra.variable]: "sizes.0.5"
  }
}), nA = {
  lg: eA,
  md: tA,
  sm: rA
}, oA = GT({
  baseStyle: QT,
  sizes: nA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), On = bt("spinner-size"), aA = {
  width: [On.reference],
  height: [On.reference]
}, iA = {
  xs: {
    [On.variable]: "sizes.3"
  },
  sm: {
    [On.variable]: "sizes.4"
  },
  md: {
    [On.variable]: "sizes.6"
  },
  lg: {
    [On.variable]: "sizes.8"
  },
  xl: {
    [On.variable]: "sizes.12"
  }
}, sA = {
  baseStyle: aA,
  sizes: iA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: lA, definePartsStyle: gv } = Ke($E.keys), cA = {
  fontWeight: "medium"
}, uA = {
  opacity: 0.8,
  marginBottom: "2"
}, dA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, fA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, pA = gv({
  container: {},
  label: cA,
  helpText: uA,
  number: dA,
  icon: fA
}), hA = {
  md: gv({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, mA = lA({
  baseStyle: pA,
  sizes: hA,
  defaultProps: {
    size: "md"
  }
}), Rl = me("kbd-bg"), vA = {
  [Rl.variable]: "colors.gray.100",
  _dark: {
    [Rl.variable]: "colors.whiteAlpha.100"
  },
  bg: Rl.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, gA = {
  baseStyle: vA
}, bA = {
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
}, yA = {
  baseStyle: bA
}, { defineMultiStyleConfig: xA, definePartsStyle: SA } = Ke(CE.keys), wA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, CA = SA({
  icon: wA
}), _A = xA({
  baseStyle: CA
}), { defineMultiStyleConfig: kA, definePartsStyle: EA } = Ke(_E.keys), Tr = me("menu-bg"), $l = me("menu-shadow"), PA = {
  [Tr.variable]: "#fff",
  [$l.variable]: "shadows.sm",
  _dark: {
    [Tr.variable]: "colors.gray.700",
    [$l.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Tr.reference,
  boxShadow: $l.reference
}, TA = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Tr.variable]: "colors.gray.100",
    _dark: {
      [Tr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Tr.variable]: "colors.gray.200",
    _dark: {
      [Tr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Tr.variable]: "colors.gray.100",
    _dark: {
      [Tr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Tr.reference
}, AA = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, OA = {
  opacity: 0.6
}, RA = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, $A = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, DA = EA({
  button: $A,
  list: PA,
  item: TA,
  groupTitle: AA,
  command: OA,
  divider: RA
}), MA = kA({
  baseStyle: DA
}), { defineMultiStyleConfig: IA, definePartsStyle: Bc } = Ke(kE.keys), Dl = me("modal-bg"), Ml = me("modal-shadow"), FA = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, NA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, jA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Dl.variable]: "colors.white",
    [Ml.variable]: "shadows.lg",
    _dark: {
      [Dl.variable]: "colors.gray.700",
      [Ml.variable]: "shadows.dark-lg"
    },
    bg: Dl.reference,
    boxShadow: Ml.reference
  };
}, BA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, zA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, VA = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, LA = {
  px: "6",
  py: "4"
}, WA = Bc((e) => ({
  overlay: FA,
  dialogContainer: $t(NA, e),
  dialog: $t(jA, e),
  header: BA,
  closeButton: zA,
  body: $t(VA, e),
  footer: LA
}));
function dr(e) {
  return Bc(e === "full" ? {
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
var UA = {
  xs: dr("xs"),
  sm: dr("sm"),
  md: dr("md"),
  lg: dr("lg"),
  xl: dr("xl"),
  "2xl": dr("2xl"),
  "3xl": dr("3xl"),
  "4xl": dr("4xl"),
  "5xl": dr("5xl"),
  "6xl": dr("6xl"),
  full: dr("full")
}, HA = IA({
  baseStyle: WA,
  sizes: UA,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: YA, definePartsStyle: bv } = Ke(EE.keys), Uu = bt("number-input-stepper-width"), yv = bt("number-input-input-padding"), qA = Ur(Uu).add("0.5rem").toString(), Il = bt("number-input-bg"), Fl = bt("number-input-color"), Nl = bt("number-input-border-color"), GA = {
  [Uu.variable]: "sizes.6",
  [yv.variable]: qA
}, XA = (e) => {
  var t, r;
  return (r = (t = $t(Ve.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, KA = {
  width: Uu.reference
}, ZA = {
  borderStart: "1px solid",
  borderStartColor: Nl.reference,
  color: Fl.reference,
  bg: Il.reference,
  [Fl.variable]: "colors.chakra-body-text",
  [Nl.variable]: "colors.chakra-border-color",
  _dark: {
    [Fl.variable]: "colors.whiteAlpha.800",
    [Nl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Il.variable]: "colors.gray.200",
    _dark: {
      [Il.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, JA = bv((e) => {
  var t;
  return {
    root: GA,
    field: (t = $t(XA, e)) != null ? t : {},
    stepperGroup: KA,
    stepper: ZA
  };
});
function xi(e) {
  var t, r, n;
  const o = (t = Ve.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = dv.fontSizes[i];
  return bv({
    field: {
      ...o.field,
      paddingInlineEnd: yv.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Ur(s).multiply(0.75).toString(),
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
var QA = {
  xs: xi("xs"),
  sm: xi("sm"),
  md: xi("md"),
  lg: xi("lg")
}, eO = YA({
  baseStyle: JA,
  sizes: QA,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), vp, tO = {
  ...(vp = Ve.baseStyle) == null ? void 0 : vp.field,
  textAlign: "center"
}, rO = {
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
}, gp, bp, nO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ve.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ve.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ve.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (bp = (gp = Ve.variants) == null ? void 0 : gp.unstyled.field) != null ? bp : {}
}, oO = {
  baseStyle: tO,
  sizes: rO,
  variants: nO,
  defaultProps: Ve.defaultProps
}, { defineMultiStyleConfig: aO, definePartsStyle: iO } = Ke(PE.keys), Si = bt("popper-bg"), sO = bt("popper-arrow-bg"), yp = bt("popper-arrow-shadow-color"), lO = { zIndex: 10 }, cO = {
  [Si.variable]: "colors.white",
  bg: Si.reference,
  [sO.variable]: Si.reference,
  [yp.variable]: "colors.gray.200",
  _dark: {
    [Si.variable]: "colors.gray.700",
    [yp.variable]: "colors.whiteAlpha.300"
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
}, uO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, dO = {
  px: 3,
  py: 2
}, fO = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, pO = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, hO = iO({
  popper: lO,
  content: cO,
  header: uO,
  body: dO,
  footer: fO,
  closeButton: pO
}), mO = aO({
  baseStyle: hO
}), { definePartsStyle: zc, defineMultiStyleConfig: vO } = Ke(bE.keys), jl = me("drawer-bg"), Bl = me("drawer-box-shadow");
function qn(e) {
  return zc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var gO = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, bO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, yO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [jl.variable]: "colors.white",
    [Bl.variable]: "shadows.lg",
    _dark: {
      [jl.variable]: "colors.gray.700",
      [Bl.variable]: "shadows.dark-lg"
    },
    bg: jl.reference,
    boxShadow: Bl.reference
  };
}, xO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, SO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, wO = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, CO = {
  px: "6",
  py: "4"
}, _O = zc((e) => ({
  overlay: gO,
  dialogContainer: bO,
  dialog: $t(yO, e),
  header: xO,
  closeButton: SO,
  body: wO,
  footer: CO
})), kO = {
  xs: qn("xs"),
  sm: qn("md"),
  md: qn("lg"),
  lg: qn("2xl"),
  xl: qn("4xl"),
  full: qn("full")
}, EO = vO({
  baseStyle: _O,
  sizes: kO,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: PO, defineMultiStyleConfig: TO } = Ke(yE.keys), AO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, OO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, RO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, $O = PO({
  preview: AO,
  input: OO,
  textarea: RO
}), DO = TO({
  baseStyle: $O
}), { definePartsStyle: MO, defineMultiStyleConfig: IO } = Ke(xE.keys), uo = me("form-control-color"), FO = {
  marginStart: "1",
  [uo.variable]: "colors.red.500",
  _dark: {
    [uo.variable]: "colors.red.300"
  },
  color: uo.reference
}, NO = {
  mt: "2",
  [uo.variable]: "colors.gray.600",
  _dark: {
    [uo.variable]: "colors.whiteAlpha.600"
  },
  color: uo.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, jO = MO({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: FO,
  helperText: NO
}), BO = IO({
  baseStyle: jO
}), { definePartsStyle: zO, defineMultiStyleConfig: VO } = Ke(SE.keys), fo = me("form-error-color"), LO = {
  [fo.variable]: "colors.red.500",
  _dark: {
    [fo.variable]: "colors.red.300"
  },
  color: fo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, WO = {
  marginEnd: "0.5em",
  [fo.variable]: "colors.red.500",
  _dark: {
    [fo.variable]: "colors.red.300"
  },
  color: fo.reference
}, UO = zO({
  text: LO,
  icon: WO
}), HO = VO({
  baseStyle: UO
}), YO = {
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
}, qO = {
  baseStyle: YO
}, GO = {
  fontFamily: "heading",
  fontWeight: "bold"
}, XO = {
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
}, KO = {
  baseStyle: GO,
  sizes: XO,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: ZO, definePartsStyle: JO } = Ke(vE.keys), zl = me("breadcrumb-link-decor"), QO = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: zl.reference,
  [zl.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [zl.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, eR = JO({
  link: QO
}), tR = ZO({
  baseStyle: eR
}), rR = {
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
}, xv = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: ue("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ue("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: ue("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Co(`${t}.200`, 0.12)(r), o = Co(`${t}.200`, 0.24)(r);
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
}, nR = (e) => {
  const { colorScheme: t } = e, r = ue("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...$t(xv, e)
  };
}, oR = {
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
}, aR = (e) => {
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
  } = (t = oR[r]) != null ? t : {}, s = ue(n, `${r}.200`)(e);
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
}, iR = (e) => {
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
}, sR = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, lR = {
  ghost: xv,
  outline: nR,
  solid: aR,
  link: iR,
  unstyled: sR
}, cR = {
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
}, uR = {
  baseStyle: rR,
  variants: lR,
  sizes: cR,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Fn, defineMultiStyleConfig: dR } = Ke(NE.keys), cs = me("card-bg"), qr = me("card-padding"), Sv = me("card-shadow"), Ui = me("card-radius"), wv = me("card-border-width", "0"), Cv = me("card-border-color"), fR = Fn({
  container: {
    [cs.variable]: "colors.chakra-body-bg",
    backgroundColor: cs.reference,
    boxShadow: Sv.reference,
    borderRadius: Ui.reference,
    color: "chakra-body-text",
    borderWidth: wv.reference,
    borderColor: Cv.reference
  },
  body: {
    padding: qr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: qr.reference
  },
  footer: {
    padding: qr.reference
  }
}), pR = {
  sm: Fn({
    container: {
      [Ui.variable]: "radii.base",
      [qr.variable]: "space.3"
    }
  }),
  md: Fn({
    container: {
      [Ui.variable]: "radii.md",
      [qr.variable]: "space.5"
    }
  }),
  lg: Fn({
    container: {
      [Ui.variable]: "radii.xl",
      [qr.variable]: "space.7"
    }
  })
}, hR = {
  elevated: Fn({
    container: {
      [Sv.variable]: "shadows.base",
      _dark: {
        [cs.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Fn({
    container: {
      [wv.variable]: "1px",
      [Cv.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Fn({
    container: {
      [cs.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [qr.variable]: 0
    },
    header: {
      [qr.variable]: 0
    },
    footer: {
      [qr.variable]: 0
    }
  }
}, mR = dR({
  baseStyle: fR,
  variants: hR,
  sizes: pR,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ca = bt("close-button-size"), Ho = bt("close-button-bg"), vR = {
  w: [ca.reference],
  h: [ca.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Ho.variable]: "colors.blackAlpha.100",
    _dark: {
      [Ho.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Ho.variable]: "colors.blackAlpha.200",
    _dark: {
      [Ho.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Ho.reference
}, gR = {
  lg: {
    [ca.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ca.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ca.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, bR = {
  baseStyle: vR,
  sizes: gR,
  defaultProps: {
    size: "md"
  }
}, { variants: yR, defaultProps: xR } = sa, SR = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: ft.bg.reference,
  color: ft.color.reference,
  boxShadow: ft.shadow.reference
}, wR = {
  baseStyle: SR,
  variants: yR,
  defaultProps: xR
}, CR = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, _R = {
  baseStyle: CR
}, kR = {
  opacity: 0.6,
  borderColor: "inherit"
}, ER = {
  borderStyle: "solid"
}, PR = {
  borderStyle: "dashed"
}, TR = {
  solid: ER,
  dashed: PR
}, AR = {
  baseStyle: kR,
  variants: TR,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: OR, defineMultiStyleConfig: RR } = Ke(pE.keys), $R = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, DR = {
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
}, MR = {
  pt: "2",
  px: "4",
  pb: "5"
}, IR = {
  fontSize: "1.25em"
}, FR = OR({
  container: $R,
  button: DR,
  panel: MR,
  icon: IR
}), NR = RR({ baseStyle: FR }), { definePartsStyle: Ya, defineMultiStyleConfig: jR } = Ke(hE.keys), Xt = me("alert-fg"), Qr = me("alert-bg"), BR = Ya({
  container: {
    bg: Qr.reference,
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
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Xt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Hu(e) {
  const { theme: t, colorScheme: r } = e, n = Co(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var zR = Ya((e) => {
  const { colorScheme: t } = e, r = Hu(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.500`,
      [Qr.variable]: r.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Qr.variable]: r.dark
      }
    }
  };
}), VR = Ya((e) => {
  const { colorScheme: t } = e, r = Hu(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.500`,
      [Qr.variable]: r.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Qr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Xt.reference
    }
  };
}), LR = Ya((e) => {
  const { colorScheme: t } = e, r = Hu(e);
  return {
    container: {
      [Xt.variable]: `colors.${t}.500`,
      [Qr.variable]: r.light,
      _dark: {
        [Xt.variable]: `colors.${t}.200`,
        [Qr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Xt.reference
    }
  };
}), WR = Ya((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Xt.variable]: "colors.white",
      [Qr.variable]: `colors.${t}.500`,
      _dark: {
        [Xt.variable]: "colors.gray.900",
        [Qr.variable]: `colors.${t}.200`
      },
      color: Xt.reference
    }
  };
}), UR = {
  subtle: zR,
  "left-accent": VR,
  "top-accent": LR,
  solid: WR
}, HR = jR({
  baseStyle: BR,
  variants: UR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: _v, defineMultiStyleConfig: YR } = Ke(mE.keys), po = me("avatar-border-color"), ua = me("avatar-bg"), $a = me("avatar-font-size"), _o = me("avatar-size"), qR = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: po.reference,
  [po.variable]: "white",
  _dark: {
    [po.variable]: "colors.gray.800"
  }
}, GR = {
  bg: ua.reference,
  fontSize: $a.reference,
  width: _o.reference,
  height: _o.reference,
  lineHeight: "1",
  [ua.variable]: "colors.gray.200",
  _dark: {
    [ua.variable]: "colors.whiteAlpha.400"
  }
}, XR = (e) => {
  const { name: t, theme: r } = e, n = t ? nP({ string: t }) : "colors.gray.400", o = tP(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: ua.reference,
    fontSize: $a.reference,
    color: a,
    borderColor: po.reference,
    verticalAlign: "top",
    width: _o.reference,
    height: _o.reference,
    "&:not([data-loaded])": {
      [ua.variable]: n
    },
    [po.variable]: "colors.white",
    _dark: {
      [po.variable]: "colors.gray.800"
    }
  };
}, KR = {
  fontSize: $a.reference,
  lineHeight: "1"
}, ZR = _v((e) => ({
  badge: $t(qR, e),
  excessLabel: $t(GR, e),
  container: $t(XR, e),
  label: KR
}));
function ln(e) {
  const t = e !== "100%" ? pv[e] : void 0;
  return _v({
    container: {
      [_o.variable]: t ?? e,
      [$a.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [_o.variable]: t ?? e,
      [$a.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var JR = {
  "2xs": ln(4),
  xs: ln(6),
  sm: ln(8),
  md: ln(12),
  lg: ln(16),
  xl: ln(24),
  "2xl": ln(32),
  full: ln("100%")
}, QR = YR({
  baseStyle: ZR,
  sizes: JR,
  defaultProps: {
    size: "md"
  }
}), e$ = {
  Accordion: NR,
  Alert: HR,
  Avatar: QR,
  Badge: sa,
  Breadcrumb: tR,
  Button: uR,
  Checkbox: ls,
  CloseButton: bR,
  Code: wR,
  Container: _R,
  Divider: AR,
  Drawer: EO,
  Editable: DO,
  Form: BO,
  FormError: HO,
  FormLabel: qO,
  Heading: KO,
  Input: Ve,
  Kbd: gA,
  Link: yA,
  List: _A,
  Menu: MA,
  Modal: HA,
  NumberInput: eO,
  PinInput: oO,
  Popover: mO,
  Progress: CT,
  Radio: FT,
  Select: WT,
  Skeleton: HT,
  SkipLink: qT,
  Slider: oA,
  Spinner: sA,
  Stat: mA,
  Switch: yP,
  Table: EP,
  Tabs: VP,
  Tag: eT,
  Textarea: fT,
  Tooltip: mT,
  Card: mR,
  Stepper: fE
}, kv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Ev = {
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
}, Pv = "ltr", Tv = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Av = {
  semanticTokens: kv,
  direction: Pv,
  ...hv,
  components: e$,
  styles: Ev,
  config: Tv
}, kV = Av, t$ = {
  semanticTokens: kv,
  direction: Pv,
  components: {},
  ...hv,
  styles: Ev,
  config: Tv
};
function ta(e) {
  return typeof e == "function";
}
function r$(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Ov = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return zk(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, r$(
    ...n.map(
      (a) => (i) => ta(a) ? a(i) : Rv(i, a)
    )
  )(o);
}, EV = Ov(Av), PV = Ov(t$);
function Rv(...e) {
  return ar({}, ...e, $v);
}
function $v(e, t, r, n) {
  if ((ta(e) || ta(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = ta(e) ? e(...o) : e, i = ta(t) ? t(...o) : t;
      return ar({}, a, i, $v);
    };
}
function n$(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function o$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var a$ = (e) => {
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
}, i$ = a$(o$);
function Dv(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Mv = (e) => Dv(e, (t) => t != null);
function xp(e) {
  return typeof e == "number";
}
function s$(e) {
  return typeof e == "function";
}
var l$ = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function TV(e) {
  return "current" in e;
}
function c$(e, ...t) {
  return s$(e) ? e(...t) : e;
}
function AV(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function u$(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var OV = () => {
}, RV = /* @__PURE__ */ u$((e) => () => {
  const { condition: t, message: r } = e;
  t && l$ && console.warn(r);
}), $V = (...e) => (t) => e.reduce((r, n) => n(r), t), Vl = (e, t) => Math.abs(e - t), Sp = (e) => "x" in e && "y" in e;
function DV(e, t) {
  if (xp(e) && xp(t))
    return Vl(e, t);
  if (Sp(e) && Sp(t)) {
    const r = Vl(e.x, t.x), n = Vl(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const Iv = 1 / 60 * 1e3, d$ = typeof performance < "u" ? () => performance.now() : () => Date.now(), Fv = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(d$()), Iv);
function f$(e) {
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
const p$ = 40;
let Vc = !0, Da = !1, Lc = !1;
const ho = {
  delta: 0,
  timestamp: 0
}, qa = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Vs = qa.reduce((e, t) => (e[t] = f$(() => Da = !0), e), {}), h$ = qa.reduce((e, t) => {
  const r = Vs[t];
  return e[t] = (n, o = !1, a = !1) => (Da || g$(), r.schedule(n, o, a)), e;
}, {}), m$ = qa.reduce((e, t) => (e[t] = Vs[t].cancel, e), {});
qa.reduce((e, t) => (e[t] = () => Vs[t].process(ho), e), {});
const v$ = (e) => Vs[e].process(ho), Nv = (e) => {
  Da = !1, ho.delta = Vc ? Iv : Math.max(Math.min(e - ho.timestamp, p$), 1), ho.timestamp = e, Lc = !0, qa.forEach(v$), Lc = !1, Da && (Vc = !1, Fv(Nv));
}, g$ = () => {
  Da = !0, Vc = !0, Lc || Fv(Nv);
}, wp = () => ho;
var b$ = typeof Element < "u", y$ = typeof Map == "function", x$ = typeof Set == "function", S$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hi(e, t) {
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
        if (!Hi(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (y$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Hi(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (x$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (S$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (b$ && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Hi(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var w$ = function(t, r) {
  try {
    return Hi(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const C$ = /* @__PURE__ */ Ts(w$);
function Yu(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = nv(), s = e ? i$(a, `components.${e}`) : void 0, l = n || s, c = ar(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Mv(n$(o, ["children"]))
  ), u = be({});
  if (l) {
    const f = jk(l)(c);
    C$(u.current, f) || (u.current = f);
  }
  return u.current;
}
function $o(e, t = {}) {
  return Yu(e, t);
}
function Do(e, t = {}) {
  return Yu(e, t);
}
function MV(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = nv(), i = (r = a.components) == null ? void 0 : r[e], s = i ? Rv(i, n) : n;
  return Yu(null, {
    ...o,
    styleConfig: s
  });
}
var _$ = /* @__PURE__ */ new Set([
  ...kk,
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
]), k$ = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function E$(e) {
  return k$.has(e) || !_$.has(e);
}
function P$(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var T$ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, A$ = /* @__PURE__ */ qm(
  function(e) {
    return T$.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), O$ = A$, R$ = function(t) {
  return t !== "theme";
}, Cp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? O$ : R$;
}, _p = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, kp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, $$ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Ms(r, n, o), Du(function() {
    return Is(r, n, o);
  }), null;
}, D$ = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = _p(t, r, n), l = s || Cp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(kp), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(kp), d.push(u[p], u[0][p]);
    }
    var m = Fs(function(h, v, b) {
      var y = c && h.as || o, S = "", k = [], w = h;
      if (h.theme == null) {
        w = {};
        for (var M in h)
          w[M] = h[M];
        w.theme = U.useContext(vn);
      }
      typeof h.className == "string" ? S = Ru(v.registered, k, h.className) : h.className != null && (S = h.className + " ");
      var P = wo(d.concat(k), v.registered, w);
      S += v.key + "-" + P.name, i !== void 0 && (S += " " + i);
      var I = c && s === void 0 ? Cp(y) : l, z = {};
      for (var j in h)
        c && j === "as" || // $FlowFixMe
        I(j) && (z[j] = h[j]);
      return z.className = S, z.ref = b, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement($$, {
        cache: v,
        serialized: P,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ U.createElement(y, z));
    });
    return m.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), m.withComponent = function(h, v) {
      return e(h, Bn({}, r, v, {
        shouldForwardProp: _p(m, v, !0)
      })).apply(void 0, d);
    }, m;
  };
}, M$ = [
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
], us = D$.bind();
M$.forEach(function(e) {
  us[e] = us(e);
});
var Ep, I$ = (Ep = us.default) != null ? Ep : us, F$ = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = Dv(i, (d, f) => Pk(f)), l = c$(e, t), c = P$(
    {},
    o,
    l,
    Mv(s),
    a
  ), u = Mk(c)(t.theme);
  return n ? [u, n] : u;
};
function Ll(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = E$);
  const o = F$({ baseStyle: r }), a = I$(
    e,
    n
  )(o);
  return Dt.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Nu();
    return Dt.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function N$() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ll, {
    apply(t, r, n) {
      return Ll(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Ll(r)), e.get(r);
    }
  });
}
var ge = N$();
function _e(e) {
  return Tt(e);
}
var qu = Sr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
qu.displayName = "EnvironmentContext";
function j$({ defer: e } = {}) {
  const [, t] = g0((r) => r + 1, 0);
  return Ta(() => {
    e && t();
  }, [e]), dt(qu);
}
function B$(e) {
  const { children: t, environment: r, disabled: n } = e, o = be(null), a = vt(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), i = !n || !r;
  return /* @__PURE__ */ L.jsxs(qu.Provider, { value: a, children: [
    t,
    i && /* @__PURE__ */ L.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
B$.displayName = "EnvironmentProvider";
function Kt(e, t = []) {
  const r = be(e);
  return Fe(() => {
    r.current = e;
  }), q((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function Mo(e, t) {
  const r = be(!1), n = be(!1);
  Fe(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Fe(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const jv = Sr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ls = Sr({}), Ga = Sr(null), Ws = typeof document < "u", ds = Ws ? Es : Fe, Bv = Sr({ strict: !1 });
function z$(e, t, r, n) {
  const { visualElement: o } = dt(Ls), a = dt(Bv), i = dt(Ga), s = dt(jv).reducedMotion, l = be();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return pm(() => {
    c && c.update(r, i);
  }), ds(() => {
    c && c.render();
  }), Fe(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? ds : Fe)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function no(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function V$(e, t, r) {
  return q(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : no(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ma(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Us(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Gu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Xu = ["initial", ...Gu];
function Hs(e) {
  return Us(e.animate) || Xu.some((t) => Ma(e[t]));
}
function zv(e) {
  return !!(Hs(e) || e.variants);
}
function L$(e, t) {
  if (Hs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Ma(r) ? r : void 0,
      animate: Ma(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function W$(e) {
  const { initial: t, animate: r } = L$(e, dt(Ls));
  return vt(() => ({ initial: t, animate: r }), [Pp(t), Pp(r)]);
}
function Pp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Tp = {
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
}, Ia = {};
for (const e in Tp)
  Ia[e] = {
    isEnabled: (t) => Tp[e].some((r) => !!t[r])
  };
function U$(e) {
  for (const t in e)
    Ia[t] = {
      ...Ia[t],
      ...e[t]
    };
}
const Ku = Sr({}), Vv = Sr({}), H$ = Symbol.for("motionComponentSymbol");
function Y$({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && U$(e);
  function a(s, l) {
    let c;
    const u = {
      ...dt(jv),
      ...s,
      layoutId: q$(s)
    }, { isStatic: d } = u, f = W$(s), p = n(s, d);
    if (!d && Ws) {
      f.visualElement = z$(o, p, u, t);
      const m = dt(Vv), h = dt(Bv).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        h,
        e,
        m
      ));
    }
    return U.createElement(
      Ls.Provider,
      { value: f },
      c && f.visualElement ? U.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, V$(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = Tt(a);
  return i[H$] = o, i;
}
function q$({ layoutId: e }) {
  const t = dt(Ku).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function G$(e) {
  function t(n, o = {}) {
    return Y$(e(n, o));
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
const X$ = [
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
function Zu(e) {
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
      !!(X$.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const fs = {};
function K$(e) {
  Object.assign(fs, e);
}
const Xa = [
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
], Wn = new Set(Xa);
function Lv(e, { layout: t, layoutId: r }) {
  return Wn.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!fs[e] || e === "opacity");
}
const Ut = (e) => !!(e && e.getVelocity), Z$ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, J$ = Xa.length;
function Q$(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < J$; i++) {
    const s = Xa[i];
    if (e[s] !== void 0) {
      const l = Z$[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Wv = (e) => (t) => typeof t == "string" && t.startsWith(e), Uv = Wv("--"), Wc = Wv("var(--"), e2 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, t2 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, gn = (e, t, r) => Math.min(Math.max(r, e), t), Un = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, da = {
  ...Un,
  transform: (e) => gn(0, 1, e)
}, wi = {
  ...Un,
  default: 1
}, fa = (e) => Math.round(e * 1e5) / 1e5, Ys = /(-)?([\d]*\.?[\d])+/g, Hv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, r2 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ka(e) {
  return typeof e == "string";
}
const Za = (e) => ({
  test: (t) => Ka(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), cn = Za("deg"), Dr = Za("%"), fe = Za("px"), n2 = Za("vh"), o2 = Za("vw"), Ap = {
  ...Dr,
  parse: (e) => Dr.parse(e) / 100,
  transform: (e) => Dr.transform(e * 100)
}, Op = {
  ...Un,
  transform: Math.round
}, Yv = {
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
  rotate: cn,
  rotateX: cn,
  rotateY: cn,
  rotateZ: cn,
  scale: wi,
  scaleX: wi,
  scaleY: wi,
  scaleZ: wi,
  skew: cn,
  skewX: cn,
  skewY: cn,
  distance: fe,
  translateX: fe,
  translateY: fe,
  translateZ: fe,
  x: fe,
  y: fe,
  z: fe,
  perspective: fe,
  transformPerspective: fe,
  opacity: da,
  originX: Ap,
  originY: Ap,
  originZ: fe,
  // Misc
  zIndex: Op,
  // SVG
  fillOpacity: da,
  strokeOpacity: da,
  numOctaves: Op
};
function Ju(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Uv(d)) {
      a[d] = f;
      continue;
    }
    const p = Yv[d], m = t2(f, p);
    if (Wn.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = Q$(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Qu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function qv(e, t, r) {
  for (const n in t)
    !Ut(t[n]) && !Lv(n, r) && (e[n] = t[n]);
}
function a2({ transformTemplate: e }, t, r) {
  return vt(() => {
    const n = Qu();
    return Ju(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function i2(e, t, r) {
  const n = e.style || {}, o = {};
  return qv(o, n, e), Object.assign(o, a2(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function s2(e, t, r) {
  const n = {}, o = i2(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const l2 = /* @__PURE__ */ new Set([
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
function ps(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || l2.has(e);
}
let Gv = (e) => !ps(e);
function c2(e) {
  e && (Gv = (t) => t.startsWith("on") ? !ps(t) : e(t));
}
try {
  c2(require("@emotion/is-prop-valid").default);
} catch {
}
function u2(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Gv(o) || r === !0 && ps(o) || !t && !ps(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Rp(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function d2(e, t, r) {
  const n = Rp(t, e.x, e.width), o = Rp(r, e.y, e.height);
  return `${n} ${o}`;
}
const f2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, p2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function h2(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? f2 : p2;
  e[a.offset] = fe.transform(-n);
  const i = fe.transform(t), s = fe.transform(r);
  e[a.array] = `${i} ${s}`;
}
function ed(e, {
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
  if (Ju(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = d2(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && h2(p, i, s, l, !1);
}
const Xv = () => ({
  ...Qu(),
  attrs: {}
}), td = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function m2(e, t, r, n) {
  const o = vt(() => {
    const a = Xv();
    return ed(a, t, { enableHardwareAcceleration: !1 }, td(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    qv(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function v2(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (Zu(r) ? m2 : s2)(n, a, i, r), u = {
      ...u2(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = vt(() => Ut(d) ? d.get() : d, [d]);
    return or(r, {
      ...u,
      children: f
    });
  };
}
const rd = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Kv(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Zv = /* @__PURE__ */ new Set([
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
function Jv(e, t, r, n) {
  Kv(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Zv.has(o) ? o : rd(o), t.attrs[o]);
}
function nd(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Ut(r[o]) || t.style && Ut(t.style[o]) || Lv(o, e)) && (n[o] = r[o]);
  return n;
}
function Qv(e, t) {
  const r = nd(e, t);
  for (const n in e)
    if (Ut(e[n]) || Ut(t[n])) {
      const o = Xa.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function od(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function eg(e) {
  const t = be(null);
  return t.current === null && (t.current = e()), t.current;
}
const hs = (e) => Array.isArray(e), g2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), b2 = (e) => hs(e) ? e[e.length - 1] || 0 : e;
function Yi(e) {
  const t = Ut(e) ? e.get() : e;
  return g2(t) ? t.toValue() : t;
}
function y2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: x2(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const tg = (e) => (t, r) => {
  const n = dt(Ls), o = dt(Ga), a = () => y2(e, t, n, o);
  return r ? a() : eg(a);
};
function x2(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = Yi(a[f]);
  let { initial: i, animate: s } = e;
  const l = Hs(e), c = zv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !Us(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = od(e, p);
    if (!m)
      return;
    const { transitionEnd: h, transition: v, ...b } = m;
    for (const y in b) {
      let S = b[y];
      if (Array.isArray(S)) {
        const k = u ? S.length - 1 : 0;
        S = S[k];
      }
      S !== null && (o[y] = S);
    }
    for (const y in h)
      o[y] = h[y];
  }), o;
}
const S2 = {
  useVisualState: tg({
    scrapeMotionValuesFromProps: Qv,
    createRenderState: Xv,
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
      ed(r, n, { enableHardwareAcceleration: !1 }, td(t.tagName), e.transformTemplate), Jv(t, r);
    }
  })
}, w2 = {
  useVisualState: tg({
    scrapeMotionValuesFromProps: nd,
    createRenderState: Qu
  })
};
function C2(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Zu(e) ? S2 : w2,
    preloadedFeatures: r,
    useRender: v2(t),
    createVisualElement: n,
    Component: e
  };
}
function Yr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const rg = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function qs(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const _2 = (e) => (t) => rg(t) && e(t, qs(t));
function Gr(e, t, r, n) {
  return Yr(e, t, _2(r), n);
}
const k2 = (e, t) => (r) => t(e(r)), pn = (...e) => e.reduce(k2);
function ng(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const $p = ng("dragHorizontal"), Dp = ng("dragVertical");
function og(e) {
  let t = !1;
  if (e === "y")
    t = Dp();
  else if (e === "x")
    t = $p();
  else {
    const r = $p(), n = Dp();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function ag() {
  const e = og(!0);
  return e ? (e(), !1) : !0;
}
class xn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function E2(e) {
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
const at = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, P2 = 40;
let Uc = !0, Fa = !1;
const Gs = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], mo = Gs.reduce((e, t) => (e[t] = E2(() => Fa = !0), e), {}), T2 = (e) => mo[e].process(at), ig = (e) => {
  Fa = !1, at.delta = Uc ? 1e3 / 60 : Math.max(Math.min(e - at.timestamp, P2), 1), at.timestamp = e, at.isProcessing = !0, Gs.forEach(T2), at.isProcessing = !1, Fa && (Uc = !1, requestAnimationFrame(ig));
}, A2 = () => {
  Fa = !0, Uc = !0, at.isProcessing || requestAnimationFrame(ig);
}, tt = Gs.reduce((e, t) => {
  const r = mo[t];
  return e[t] = (n, o = !1, a = !1) => (Fa || A2(), r.schedule(n, o, a)), e;
}, {});
function en(e) {
  Gs.forEach((t) => mo[t].cancel(e));
}
function Mp(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || ag())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && tt.update(() => s[n](a, i));
  };
  return Gr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class O2 extends xn {
  mount() {
    this.unmount = pn(Mp(this.node, !0), Mp(this.node, !1));
  }
  unmount() {
  }
}
class R2 extends xn {
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
    this.unmount = pn(Yr(this.node.current, "focus", () => this.onFocus()), Yr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const sg = (e, t) => t ? e === t ? !0 : sg(e, t.parentElement) : !1, gt = (e) => e;
function Wl(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, qs(r));
}
class $2 extends xn {
  constructor() {
    super(...arguments), this.removeStartListeners = gt, this.removeEndListeners = gt, this.removeAccessibleListeners = gt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Gr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        tt.update(() => {
          sg(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Gr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = pn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Wl("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && tt.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Yr(this.node.current, "keyup", i), Wl("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Yr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Wl("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Yr(this.node.current, "blur", n);
      this.removeAccessibleListeners = pn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && tt.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ag();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && tt.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Gr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Yr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = pn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Hc = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), D2 = (e) => {
  const t = Hc.get(e.target);
  t && t(e);
}, M2 = (e) => {
  e.forEach(D2);
};
function I2({ root: e, ...t }) {
  const r = e || document;
  Ul.has(r) || Ul.set(r, {});
  const n = Ul.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(M2, { root: e, ...t })), n[o];
}
function F2(e, t, r) {
  const n = I2(t);
  return Hc.set(e, r), n.observe(e), () => {
    Hc.delete(e), n.unobserve(e);
  };
}
const N2 = {
  some: 0,
  all: 1
};
class j2 extends xn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : N2[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return F2(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(B2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function B2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const z2 = {
  inView: {
    Feature: j2
  },
  tap: {
    Feature: $2
  },
  focus: {
    Feature: R2
  },
  hover: {
    Feature: O2
  }
};
function lg(e, t) {
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
function V2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function L2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Xs(e, t, r) {
  const n = e.getProps();
  return od(n, t, r !== void 0 ? r : n.custom, V2(e), L2(e));
}
const W2 = "framerAppearId", U2 = "data-" + rd(W2);
let Ja = gt, xr = gt;
process.env.NODE_ENV !== "production" && (Ja = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, xr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const hn = (e) => e * 1e3, Xr = (e) => e / 1e3, H2 = {
  current: !1
}, cg = (e) => Array.isArray(e) && typeof e[0] == "number";
function ug(e) {
  return !!(!e || typeof e == "string" && dg[e] || cg(e) || Array.isArray(e) && e.every(ug));
}
const ra = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, dg = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ra([0, 0.65, 0.55, 1]),
  circOut: ra([0.55, 0, 1, 0.45]),
  backIn: ra([0.31, 0.01, 0.66, -0.59]),
  backOut: ra([0.33, 1.53, 0.69, 0.99])
};
function fg(e) {
  if (e)
    return cg(e) ? ra(e) : Array.isArray(e) ? e.map(fg) : dg[e];
}
function Y2(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = fg(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Ip = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Hl = {}, pg = {};
for (const e in Ip)
  pg[e] = () => (Hl[e] === void 0 && (Hl[e] = Ip[e]()), Hl[e]);
function q2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const hg = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, G2 = 1e-7, X2 = 12;
function K2(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = hg(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > G2 && ++s < X2);
  return i;
}
function Qa(e, t, r, n) {
  if (e === t && r === n)
    return gt;
  const o = (a) => K2(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : hg(o(a), t, n);
}
const Z2 = Qa(0.42, 0, 1, 1), J2 = Qa(0, 0, 0.58, 1), mg = Qa(0.42, 0, 0.58, 1), Q2 = (e) => Array.isArray(e) && typeof e[0] != "number", vg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, gg = (e) => (t) => 1 - e(1 - t), bg = (e) => 1 - Math.sin(Math.acos(e)), ad = gg(bg), eD = vg(ad), yg = Qa(0.33, 1.53, 0.69, 0.99), id = gg(yg), tD = vg(id), rD = (e) => (e *= 2) < 1 ? 0.5 * id(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Fp = {
  linear: gt,
  easeIn: Z2,
  easeInOut: mg,
  easeOut: J2,
  circIn: bg,
  circInOut: eD,
  circOut: ad,
  backIn: id,
  backInOut: tD,
  backOut: yg,
  anticipate: rD
}, Np = (e) => {
  if (Array.isArray(e)) {
    xr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return Qa(t, r, n, o);
  } else if (typeof e == "string")
    return xr(Fp[e] !== void 0, `Invalid easing type '${e}'`), Fp[e];
  return e;
}, sd = (e, t) => (r) => !!(Ka(r) && r2.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), xg = (e, t, r) => (n) => {
  if (!Ka(n))
    return n;
  const [o, a, i, s] = n.match(Ys);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, nD = (e) => gn(0, 255, e), Yl = {
  ...Un,
  transform: (e) => Math.round(nD(e))
}, $n = {
  test: sd("rgb", "red"),
  parse: xg("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Yl.transform(e) + ", " + Yl.transform(t) + ", " + Yl.transform(r) + ", " + fa(da.transform(n)) + ")"
};
function oD(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Yc = {
  test: sd("#"),
  parse: oD,
  transform: $n.transform
}, oo = {
  test: sd("hsl", "hue"),
  parse: xg("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Dr.transform(fa(t)) + ", " + Dr.transform(fa(r)) + ", " + fa(da.transform(n)) + ")"
}, Ot = {
  test: (e) => $n.test(e) || Yc.test(e) || oo.test(e),
  parse: (e) => $n.test(e) ? $n.parse(e) : oo.test(e) ? oo.parse(e) : Yc.parse(e),
  transform: (e) => Ka(e) ? e : e.hasOwnProperty("red") ? $n.transform(e) : oo.transform(e)
}, it = (e, t, r) => -r * e + r * t + e;
function ql(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function aD({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = ql(l, s, e + 1 / 3), a = ql(l, s, e), i = ql(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Gl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, iD = [Yc, $n, oo], sD = (e) => iD.find((t) => t.test(e));
function jp(e) {
  const t = sD(e);
  xr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === oo && (r = aD(r)), r;
}
const Sg = (e, t) => {
  const r = jp(e), n = jp(t), o = { ...r };
  return (a) => (o.red = Gl(r.red, n.red, a), o.green = Gl(r.green, n.green, a), o.blue = Gl(r.blue, n.blue, a), o.alpha = it(r.alpha, n.alpha, a), $n.transform(o));
};
function lD(e) {
  var t, r;
  return isNaN(e) && Ka(e) && (((t = e.match(Ys)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Hv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const wg = {
  regex: e2,
  countKey: "Vars",
  token: "${v}",
  parse: gt
}, Cg = {
  regex: Hv,
  countKey: "Colors",
  token: "${c}",
  parse: Ot.parse
}, _g = {
  regex: Ys,
  countKey: "Numbers",
  token: "${n}",
  parse: Un.parse
};
function Xl(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function ms(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Xl(r, wg), Xl(r, Cg), Xl(r, _g), r;
}
function kg(e) {
  return ms(e).values;
}
function Eg(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = ms(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(wg.token, i[l]) : l < n + r ? s = s.replace(Cg.token, Ot.transform(i[l])) : s = s.replace(_g.token, fa(i[l]));
    return s;
  };
}
const cD = (e) => typeof e == "number" ? 0 : e;
function uD(e) {
  const t = kg(e);
  return Eg(e)(t.map(cD));
}
const bn = {
  test: lD,
  parse: kg,
  createTransformer: Eg,
  getAnimatableNone: uD
}, Pg = (e, t) => (r) => `${r > 0 ? t : e}`;
function Tg(e, t) {
  return typeof e == "number" ? (r) => it(e, t, r) : Ot.test(e) ? Sg(e, t) : e.startsWith("var(") ? Pg(e, t) : Og(e, t);
}
const Ag = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => Tg(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, dD = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Tg(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, Og = (e, t) => {
  const r = bn.createTransformer(t), n = ms(e), o = ms(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? pn(Ag(n.values, o.values), r) : (Ja(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Pg(e, t));
}, Na = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Bp = (e, t) => (r) => it(e, t, r);
function fD(e) {
  return typeof e == "number" ? Bp : typeof e == "string" ? Ot.test(e) ? Sg : Og : Array.isArray(e) ? Ag : typeof e == "object" ? dD : Bp;
}
function pD(e, t, r) {
  const n = [], o = r || fD(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || gt : t;
      s = pn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Rg(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (xr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = pD(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Na(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(gn(e[0], e[a - 1], c)) : l;
}
function hD(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Na(0, t, n);
    e.push(it(r, 1, o));
  }
}
function mD(e) {
  const t = [0];
  return hD(t, e.length - 1), t;
}
function vD(e, t) {
  return e.map((r) => r * t);
}
function gD(e, t) {
  return e.map(() => t || mg).splice(0, e.length - 1);
}
function vs({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = Q2(n) ? n.map(Np) : Np(n), a = {
    done: !1,
    value: t[0]
  }, i = vD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : mD(t),
    e
  ), s = Rg(i, t, {
    ease: Array.isArray(o) ? o : gD(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function $g(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const bD = 5;
function Dg(e, t, r) {
  const n = Math.max(t - bD, 0);
  return $g(r - e(n), t - n);
}
const Kl = 1e-3, yD = 0.01, zp = 10, xD = 0.05, SD = 1;
function wD({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  Ja(e <= hn(zp), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = gn(xD, SD, i), e = gn(yD, zp, Xr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = qc(c, i), m = Math.exp(-d);
    return Kl - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = qc(Math.pow(c, 2), i);
    return (-o(c) + Kl > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Kl + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = _D(o, a, s);
  if (e = hn(e), isNaN(l))
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
const CD = 12;
function _D(e, t, r) {
  let n = r;
  for (let o = 1; o < CD; o++)
    n = n - e(n) / t(n);
  return n;
}
function qc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const kD = ["duration", "bounce"], ED = ["stiffness", "damping", "mass"];
function Vp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function PD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Vp(e, ED) && Vp(e, kD)) {
    const r = wD(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Mg({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = PD(n), p = u ? -Xr(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, v = Xr(Math.sqrt(s / c)), b = Math.abs(h) < 5;
  r || (r = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (m < 1) {
    const S = qc(v, m);
    y = (k) => {
      const w = Math.exp(-m * v * k);
      return a - w * ((p + m * v * h) / S * Math.sin(S * k) + h * Math.cos(S * k));
    };
  } else if (m === 1)
    y = (S) => a - Math.exp(-v * S) * (h + (p + v * h) * S);
  else {
    const S = v * Math.sqrt(m * m - 1);
    y = (k) => {
      const w = Math.exp(-m * v * k), M = Math.min(S * k, 300);
      return a - w * ((p + m * v * h) * Math.sinh(M) + S * h * Math.cosh(M)) / S;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (S) => {
      const k = y(S);
      if (f)
        i.done = S >= d;
      else {
        let w = p;
        S !== 0 && (m < 1 ? w = Dg(y, S, k) : w = 0);
        const M = Math.abs(w) <= r, P = Math.abs(a - k) <= t;
        i.done = M && P;
      }
      return i.value = i.done ? a : k, i;
    }
  };
}
function Lp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (I) => s !== void 0 && I < s || l !== void 0 && I > l, m = (I) => s === void 0 ? l : l === void 0 || Math.abs(s - I) < Math.abs(l - I) ? s : l;
  let h = r * t;
  const v = d + h, b = i === void 0 ? v : i(v);
  b !== v && (h = b - d);
  const y = (I) => -h * Math.exp(-I / n), S = (I) => b + y(I), k = (I) => {
    const z = y(I), j = S(I);
    f.done = Math.abs(z) <= c, f.value = f.done ? b : j;
  };
  let w, M;
  const P = (I) => {
    p(f.value) && (w = I, M = Mg({
      keyframes: [f.value, m(f.value)],
      velocity: Dg(S, I, f.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return P(0), {
    calculatedDuration: null,
    next: (I) => {
      let z = !1;
      return !M && w === void 0 && (z = !0, k(I), P(I)), w !== void 0 && I > w ? M.next(I - w) : (!z && k(I), f);
    }
  };
}
const TD = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => tt.update(t, !0),
    stop: () => en(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => at.isProcessing ? at.timestamp : performance.now()
  };
}, Wp = 2e4;
function Up(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Wp; )
    t += r, n = e.next(t);
  return t >= Wp ? 1 / 0 : t;
}
const AD = {
  decay: Lp,
  inertia: Lp,
  tween: vs,
  keyframes: vs,
  spring: Mg
};
function gs({ autoplay: e = !0, delay: t = 0, driver: r = TD, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, v;
  const b = () => {
    h && h(), v = new Promise((N) => {
      h = N;
    });
  };
  b();
  let y;
  const S = AD[o] || vs;
  let k;
  S !== vs && typeof n[0] != "number" && (k = Rg([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const w = S({ ...f, keyframes: n });
  let M;
  s === "mirror" && (M = S({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let P = "idle", I = null, z = null, j = null;
  w.calculatedDuration === null && a && (w.calculatedDuration = Up(w));
  const { calculatedDuration: X } = w;
  let ne = 1 / 0, J = 1 / 0;
  X !== null && (ne = X + i, J = ne * (a + 1) - i);
  let Q = 0;
  const ee = (N) => {
    if (z === null)
      return;
    p > 0 && (z = Math.min(z, N)), p < 0 && (z = Math.min(N - J / p, z)), I !== null ? Q = I : Q = Math.round(N - z) * p;
    const V = Q - t * (p >= 0 ? 1 : -1), T = p >= 0 ? V < 0 : V > J;
    Q = Math.max(V, 0), P === "finished" && I === null && (Q = J);
    let O = Q, B = w;
    if (a) {
      const Z = Q / ne;
      let Y = Math.floor(Z), ae = Z % 1;
      !ae && Z >= 1 && (ae = 1), ae === 1 && Y--, Y = Math.min(Y, a + 1);
      const R = !!(Y % 2);
      R && (s === "reverse" ? (ae = 1 - ae, i && (ae -= i / ne)) : s === "mirror" && (B = M));
      let Se = gn(0, 1, ae);
      Q > J && (Se = s === "reverse" && R ? 1 : 0), O = Se * ne;
    }
    const C = T ? { done: !1, value: n[0] } : B.next(O);
    k && (C.value = k(C.value));
    let { done: H } = C;
    !T && X !== null && (H = p >= 0 ? Q >= J : Q <= 0);
    const A = I === null && (P === "finished" || P === "running" && H);
    return d && d(C.value), A && ce(), C;
  }, oe = () => {
    y && y.stop(), y = void 0;
  }, D = () => {
    P = "idle", oe(), b(), z = j = null;
  }, ce = () => {
    P = "finished", u && u(), oe(), b();
  }, de = () => {
    if (m)
      return;
    y || (y = r(ee));
    const N = y.now();
    l && l(), I !== null ? z = N - I : (!z || P === "finished") && (z = N), j = z, I = null, P = "running", y.start();
  };
  e && de();
  const F = {
    then(N, V) {
      return v.then(N, V);
    },
    get time() {
      return Xr(Q);
    },
    set time(N) {
      N = hn(N), Q = N, I !== null || !y || p === 0 ? I = N : z = y.now() - N / p;
    },
    get duration() {
      const N = w.calculatedDuration === null ? Up(w) : w.calculatedDuration;
      return Xr(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !y || (p = N, F.time = Xr(Q));
    },
    get state() {
      return P;
    },
    play: de,
    pause: () => {
      P = "paused", I = Q;
    },
    stop: () => {
      m = !0, P !== "idle" && (P = "idle", c && c(), D());
    },
    cancel: () => {
      j !== null && ee(j), D();
    },
    complete: () => {
      P = "finished";
    },
    sample: (N) => (z = 0, ee(N))
  };
  return F;
}
const OD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ci = 10, RD = 2e4, $D = (e, t) => t.type === "spring" || e === "backgroundColor" || !ug(t.ease);
function DD(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(pg.waapi() && OD.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if ($D(t, o)) {
    const b = gs({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: u[0] };
    const S = [];
    let k = 0;
    for (; !y.done && k < RD; )
      y = b.sample(k), S.push(y.value), k += Ci;
    p = void 0, u = S, d = k - Ci, f = "linear";
  }
  const m = Y2(e.owner.current, t, u, {
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
  }), h = () => m.cancel(), v = () => {
    tt.update(h), s(), c();
  };
  return m.onfinish = () => {
    e.set(q2(u, o)), n && n(), v();
  }, {
    then(b, y) {
      return l.then(b, y);
    },
    get time() {
      return Xr(m.currentTime || 0);
    },
    set time(b) {
      m.currentTime = hn(b);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(b) {
      m.playbackRate = b;
    },
    get duration() {
      return Xr(d);
    },
    play: () => {
      i || (m.play(), en(h));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: b } = m;
      if (b) {
        const y = gs({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(b - Ci).value, y.sample(b).value, Ci);
      }
      v();
    },
    complete: () => m.finish(),
    cancel: v
  };
}
function MD({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: gt,
    pause: gt,
    stop: gt,
    then: (a) => (a(), Promise.resolve()),
    cancel: gt,
    complete: gt
  });
  return t ? gs({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const ID = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, FD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ND = {
  type: "keyframes",
  duration: 0.8
}, jD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, BD = (e, { keyframes: t }) => t.length > 2 ? ND : Wn.has(e) ? e.startsWith("scale") ? FD(t[1]) : ID : jD, Gc = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(bn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), zD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function VD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Ys) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = zD.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const LD = /([a-z-]*)\(.*?\)/g, Xc = {
  ...bn,
  getAnimatableNone: (e) => {
    const t = e.match(LD);
    return t ? t.map(VD).join(" ") : e;
  }
}, WD = {
  ...Yv,
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
  filter: Xc,
  WebkitFilter: Xc
}, ld = (e) => WD[e];
function Ig(e, t) {
  let r = ld(e);
  return r !== Xc && (r = bn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Fg = (e) => /^0[^.\s]+$/.test(e);
function UD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Fg(e);
}
function HD(e, t, r, n) {
  const o = Gc(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), UD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = Ig(t, s);
    }
  return a;
}
function YD({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Ng(e, t) {
  return e[t] || e.default || e;
}
const cd = (e, t, r, n = {}) => (o) => {
  const a = Ng(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - hn(i);
  const l = HD(t, e, r, a), c = l[0], u = l[l.length - 1], d = Gc(e, c), f = Gc(e, u);
  Ja(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
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
  if (YD(a) || (p = {
    ...p,
    ...BD(e, p)
  }), p.duration && (p.duration = hn(p.duration)), p.repeatDelay && (p.repeatDelay = hn(p.repeatDelay)), !d || !f || H2.current || a.type === !1)
    return MD(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = DD(t, e, p);
    if (m)
      return m;
  }
  return gs(p);
};
function bs(e) {
  return !!(Ut(e) && e.add);
}
const qD = (e) => /^\-?\d*\.?\d+$/.test(e);
function ud(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function dd(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class fd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ud(this.subscriptions, t), () => dd(this.subscriptions, t);
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
const Hp = /* @__PURE__ */ new Set();
function pd(e, t, r) {
  e || Hp.has(t) || (console.warn(t), r && console.warn(r), Hp.add(t));
}
const GD = (e) => !isNaN(parseFloat(e));
class XD {
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
      const { delta: a, timestamp: i } = at;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, tt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => tt.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = GD(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && pd(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new fd());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), tt.read(() => {
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
      $g(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function ko(e, t) {
  return new XD(e, t);
}
const jg = (e) => (t) => t.test(e), KD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bg = [Un, fe, Dr, cn, o2, n2, KD], Yo = (e) => Bg.find(jg(e)), ZD = [...Bg, Ot, bn], JD = (e) => ZD.find(jg(e));
function QD(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ko(r));
}
function eM(e, t) {
  const r = Xs(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = b2(a[i]);
    QD(e, i, s);
  }
}
function tM(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (qD(u) || Fg(u)) ? u = parseFloat(u) : !JD(u) && bn.test(c) && (u = Ig(l, c)), e.addValue(l, ko(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function rM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function nM(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = rM(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function oM({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function zg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && oM(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[U2];
      v && (m.elapsed = window.HandoffAppearAnimations(v, d, f, tt));
    }
    f.start(cd(d, f, p, e.shouldReduceMotion && Wn.has(d) ? { type: !1 } : m));
    const h = f.animation;
    bs(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && eM(e, i);
  }), c;
}
function Kc(e, t, r = {}) {
  const n = Xs(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(zg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return aM(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function aM(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(iM).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Kc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function iM(e, t) {
  return e.sortNodePosition(t);
}
function sM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Kc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Kc(e, t, r);
  else {
    const o = typeof t == "function" ? Xs(e, t, r.custom) : t;
    n = Promise.all(zg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const lM = [...Gu].reverse(), cM = Gu.length;
function uM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => sM(e, r, n)));
}
function dM(e) {
  let t = uM(e);
  const r = pM();
  let n = !0;
  const o = (l, c) => {
    const u = Xs(e, c);
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
    for (let b = 0; b < cM; b++) {
      const y = lM[b], S = r[y], k = u[y] !== void 0 ? u[y] : d[y], w = Ma(k), M = y === c ? S.isActive : null;
      M === !1 && (h = b);
      let P = k === d[y] && k !== u[y] && w;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), S.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !k && !S.prevProp || // Or if the prop doesn't define an animation
      Us(k) || typeof k == "boolean")
        continue;
      const I = fM(S.prevProp, k);
      let z = I || // If we're making this variant active, we want to always make it active
      y === c && S.isActive && !P && w || // If we removed a higher-priority variant (i is in reverse order)
      b > h && w;
      const j = Array.isArray(k) ? k : [k];
      let X = j.reduce(o, {});
      M === !1 && (X = {});
      const { prevResolvedValues: ne = {} } = S, J = {
        ...ne,
        ...X
      }, Q = (ee) => {
        z = !0, p.delete(ee), S.needsAnimating[ee] = !0;
      };
      for (const ee in J) {
        const oe = X[ee], D = ne[ee];
        m.hasOwnProperty(ee) || (oe !== D ? hs(oe) && hs(D) ? !lg(oe, D) || I ? Q(ee) : S.protectedKeys[ee] = !0 : oe !== void 0 ? Q(ee) : p.add(ee) : oe !== void 0 && p.has(ee) ? Q(ee) : S.protectedKeys[ee] = !0);
      }
      S.prevProp = k, S.prevResolvedValues = X, S.isActive && (m = { ...m, ...X }), n && e.blockInitialAnimation && (z = !1), z && !P && f.push(...j.map((ee) => ({
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
    let v = !!f.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (v = !1), n = !1, v ? t(f) : Promise.resolve();
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
function fM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !lg(t, e) : !1;
}
function En(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function pM() {
  return {
    animate: En(!0),
    whileInView: En(),
    whileHover: En(),
    whileTap: En(),
    whileDrag: En(),
    whileFocus: En(),
    exit: En()
  };
}
class hM extends xn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = dM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Us(t) && (this.unmount = t.subscribe(this.node));
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
let mM = 0;
class vM extends xn {
  constructor() {
    super(...arguments), this.id = mM++;
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
const gM = {
  animation: {
    Feature: hM
  },
  exit: {
    Feature: vM
  }
}, Yp = (e, t) => Math.abs(e - t);
function bM(e, t) {
  const r = Yp(e.x, t.x), n = Yp(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Vg {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Jl(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = bM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = at;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Zl(u, this.transformPagePoint), tt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = Jl(c.type === "pointercancel" ? this.lastMoveEventInfo : Zl(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !rg(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = qs(t), a = Zl(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = at;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Jl(a, this.history)), this.removeListeners = pn(Gr(window, "pointermove", this.handlePointerMove), Gr(window, "pointerup", this.handlePointerUp), Gr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), en(this.updatePoint);
  }
}
function Zl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function qp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Jl({ point: e }, t) {
  return {
    point: e,
    delta: qp(e, Lg(t)),
    offset: qp(e, yM(t)),
    velocity: xM(t, 0.1)
  };
}
function yM(e) {
  return e[0];
}
function Lg(e) {
  return e[e.length - 1];
}
function xM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Lg(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > hn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Xr(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Zt(e) {
  return e.max - e.min;
}
function Zc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Gp(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = it(t.min, t.max, e.origin), e.scale = Zt(r) / Zt(t), (Zc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = it(r.min, r.max, e.origin) - e.originPoint, (Zc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function pa(e, t, r, n) {
  Gp(e.x, t.x, r.x, n ? n.originX : void 0), Gp(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Xp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Zt(t);
}
function SM(e, t, r) {
  Xp(e.x, t.x, r.x), Xp(e.y, t.y, r.y);
}
function Kp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Zt(t);
}
function ha(e, t, r) {
  Kp(e.x, t.x, r.x), Kp(e.y, t.y, r.y);
}
function wM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? it(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? it(r, e, n.max) : Math.min(e, r)), e;
}
function Zp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function CM(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Zp(e.x, r, o),
    y: Zp(e.y, t, n)
  };
}
function Jp(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function _M(e, t) {
  return {
    x: Jp(e.x, t.x),
    y: Jp(e.y, t.y)
  };
}
function kM(e, t) {
  let r = 0.5;
  const n = Zt(e), o = Zt(t);
  return o > n ? r = Na(t.min, t.max - n, e.min) : n > o && (r = Na(e.min, e.max - o, t.min)), gn(0, 1, r);
}
function EM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Jc = 0.35;
function PM(e = Jc) {
  return e === !1 ? e = 0 : e === !0 && (e = Jc), {
    x: Qp(e, "left", "right"),
    y: Qp(e, "top", "bottom")
  };
}
function Qp(e, t, r) {
  return {
    min: eh(e, t),
    max: eh(e, r)
  };
}
function eh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const th = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ao = () => ({
  x: th(),
  y: th()
}), rh = () => ({ min: 0, max: 0 }), ht = () => ({
  x: rh(),
  y: rh()
});
function Pr(e) {
  return [e("x"), e("y")];
}
function Wg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function TM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function AM(e, t) {
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
function Ql(e) {
  return e === void 0 || e === 1;
}
function Qc({ scale: e, scaleX: t, scaleY: r }) {
  return !Ql(e) || !Ql(t) || !Ql(r);
}
function Pn(e) {
  return Qc(e) || Ug(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ug(e) {
  return nh(e.x) || nh(e.y);
}
function nh(e) {
  return e && e !== "0%";
}
function ys(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function oh(e, t, r, n, o) {
  return o !== void 0 && (e = ys(e, o, n)), ys(e, r, n) + t;
}
function eu(e, t = 0, r = 1, n, o) {
  e.min = oh(e.min, t, r, n, o), e.max = oh(e.max, t, r, n, o);
}
function Hg(e, { x: t, y: r }) {
  eu(e.x, t.translate, t.scale, t.originPoint), eu(e.y, r.translate, r.scale, r.originPoint);
}
function OM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && io(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Hg(e, i)), n && Pn(a.latestValues) && io(e, a.latestValues));
  }
  t.x = ah(t.x), t.y = ah(t.y);
}
function ah(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function un(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function ih(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = it(e.min, e.max, a);
  eu(e, t[r], t[n], i, t.scale);
}
const RM = ["x", "scaleX", "originX"], $M = ["y", "scaleY", "originY"];
function io(e, t) {
  ih(e.x, t, RM), ih(e.y, t, $M);
}
function Yg(e, t) {
  return Wg(AM(e.getBoundingClientRect(), t));
}
function DM(e, t, r) {
  const n = Yg(e, r), { scroll: o } = t;
  return o && (un(n.x, o.offset.x), un(n.y, o.offset.y)), n;
}
const MM = /* @__PURE__ */ new WeakMap();
class IM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ht(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(qs(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = og(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Pr((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if (Dr.test(h)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const b = v.layout.layoutBox[m];
            b && (h = Zt(b) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[m] = h;
      }), f && tt.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: m } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = FM(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Vg(t, {
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
    a && tt.update(() => a(t, r));
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
    if (!n || !_i(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = wM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && no(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = CM(n.layoutBox, t) : this.constraints = !1, this.elastic = PM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Pr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = EM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !no(t))
      return !1;
    const n = t.current;
    xr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = DM(n, o.root, this.visualElement.getTransformPagePoint());
    let i = _M(o.layout.layoutBox, a);
    if (r) {
      const s = r(TM(i));
      this.hasMutatedConstraints = !!s, s && (i = Wg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Pr((u) => {
      if (!_i(u, r, this.currentDirection))
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
    return n.start(cd(t, n, 0, r));
  }
  stopAnimation() {
    Pr((t) => this.getAxisMotionValue(t).stop());
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
    Pr((r) => {
      const { drag: n } = this.getProps();
      if (!_i(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - it(i, s, 0.5));
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
    if (!no(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Pr((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = kM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Pr((i) => {
      if (!_i(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(it(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    MM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Gr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      no(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Yr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Pr((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Jc, dragMomentum: s = !0 } = t;
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
function _i(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function FM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class NM extends xn {
  constructor(t) {
    super(t), this.removeGroupControls = gt, this.removeListeners = gt, this.controls = new IM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || gt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const sh = (e) => (t, r) => {
  e && tt.update(() => e(t, r));
};
class jM extends xn {
  constructor() {
    super(...arguments), this.removePointerDownListener = gt;
  }
  onPointerDown(t) {
    this.session = new Vg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: sh(t),
      onStart: sh(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && tt.update(() => o(a, i));
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
function qg() {
  const e = dt(Ga);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = wr();
  return Fe(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function IV() {
  return BM(dt(Ga));
}
function BM(e) {
  return e === null ? !0 : e.isPresent;
}
const qi = {
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
function lh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const qo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = lh(e, t.target.x), n = lh(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, zM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = bn.parse(e);
    if (o.length > 5)
      return n;
    const a = bn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = it(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class VM extends Dt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    K$(LM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), qi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || tt.postRender(() => {
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
function Gg(e) {
  const [t, r] = qg(), n = dt(Ku);
  return Dt.createElement(VM, { ...e, layoutGroup: n, switchLayoutGroup: dt(Vv), isPresent: t, safeToRemove: r });
}
const LM = {
  borderRadius: {
    ...qo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: qo,
  borderTopRightRadius: qo,
  borderBottomLeftRadius: qo,
  borderBottomRightRadius: qo,
  boxShadow: zM
}, Xg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], WM = Xg.length, ch = (e) => typeof e == "string" ? parseFloat(e) : e, uh = (e) => typeof e == "number" || fe.test(e);
function UM(e, t, r, n, o, a) {
  o ? (e.opacity = it(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    HM(n)
  ), e.opacityExit = it(t.opacity !== void 0 ? t.opacity : 1, 0, YM(n))) : a && (e.opacity = it(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < WM; i++) {
    const s = `border${Xg[i]}Radius`;
    let l = dh(t, s), c = dh(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || uh(l) === uh(c) ? (e[s] = Math.max(it(ch(l), ch(c), n), 0), (Dr.test(c) || Dr.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = it(t.rotate || 0, r.rotate || 0, n));
}
function dh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const HM = Kg(0, 0.5, ad), YM = Kg(0.5, 0.95, gt);
function Kg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Na(e, t, n));
}
function fh(e, t) {
  e.min = t.min, e.max = t.max;
}
function tr(e, t) {
  fh(e.x, t.x), fh(e.y, t.y);
}
function ph(e, t, r, n, o) {
  return e -= t, e = ys(e, 1 / r, n), o !== void 0 && (e = ys(e, 1 / o, n)), e;
}
function qM(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Dr.test(t) && (t = parseFloat(t), t = it(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = it(a.min, a.max, n);
  e === a && (s -= t), e.min = ph(e.min, t, r, s, o), e.max = ph(e.max, t, r, s, o);
}
function hh(e, t, [r, n, o], a, i) {
  qM(e, t[r], t[n], t[o], t.scale, a, i);
}
const GM = ["x", "scaleX", "originX"], XM = ["y", "scaleY", "originY"];
function mh(e, t, r, n) {
  hh(e.x, t, GM, r ? r.x : void 0, n ? n.x : void 0), hh(e.y, t, XM, r ? r.y : void 0, n ? n.y : void 0);
}
function vh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Zg(e) {
  return vh(e.x) && vh(e.y);
}
function tu(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function gh(e) {
  return Zt(e.x) / Zt(e.y);
}
class KM {
  constructor() {
    this.members = [];
  }
  add(t) {
    ud(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (dd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function bh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const ZM = (e, t) => e.depth - t.depth;
class JM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ud(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    dd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(ZM), this.isDirty = !1, this.children.forEach(t);
  }
}
function QM(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (en(n), e(a - t));
  };
  return tt.read(n, !0), () => en(n);
}
function eI(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function tI(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function rI(e, t, r) {
  const n = Ut(e) ? e : ko(e);
  return n.start(cd("", n, t, r)), n.animation;
}
const yh = ["", "X", "Y", "Z"], xh = 1e3;
let nI = 0;
const Tn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Jg({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = nI++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Tn.totalNodes = Tn.resolvedTargetDeltas = Tn.recalculatedProjection = 0, this.nodes.forEach(iI), this.nodes.forEach(dI), this.nodes.forEach(fI), this.nodes.forEach(sI), eI(Tn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new JM());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new fd()), this.eventHandlers.get(i).add(s);
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
      this.isSVG = tI(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = QM(f, 250), qi.hasAnimatedSinceResize && (qi.hasAnimatedSinceResize = !1, this.nodes.forEach(wh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || gI, { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !tu(this.targetLayout, m) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const k = {
            ...Ng(h, "layout"),
            onPlay: v,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || wh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, en(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pI), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sh);
        return;
      }
      this.isUpdating || this.nodes.forEach(cI), this.isUpdating = !1, this.nodes.forEach(uI), this.nodes.forEach(oI), this.nodes.forEach(aI), this.clearAllSnapshots();
      const s = performance.now();
      at.delta = gn(0, 1e3 / 60, s - at.timestamp), at.timestamp = s, at.isProcessing = !0, mo.update.process(at), mo.preRender.process(at), mo.render.process(at), at.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(lI), this.sharedNodes.forEach(hI);
    }
    scheduleUpdateProjection() {
      tt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      tt.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = ht(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Zg(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || Pn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), bI(l), {
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
        return ht();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (un(s.x, l.offset.x), un(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = ht();
      tr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            tr(s, i);
            const { scroll: f } = this.root;
            f && (un(s.x, -f.offset.x), un(s.y, -f.offset.y));
          }
          un(s.x, u.offset.x), un(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = ht();
      tr(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && io(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Pn(u.latestValues) && io(l, u.latestValues);
      }
      return Pn(this.latestValues) && io(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = ht();
      tr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Pn(c.latestValues))
          continue;
        Qc(c.latestValues) && c.updateSnapshot();
        const u = ht(), d = c.measurePageBox();
        tr(u, d), mh(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Pn(this.latestValues) && mh(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== at.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = at.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ht(), this.relativeTargetOrigin = ht(), ha(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), tr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ht(), this.targetWithTransforms = ht()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), SM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tr(this.target, this.layout.layoutBox), Hg(this.target, this.targetDelta)) : tr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ht(), this.relativeTargetOrigin = ht(), ha(this.relativeTargetOrigin, this.target, p.target), tr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Tn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Qc(this.parent.latestValues) || Ug(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === at.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      tr(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      OM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = ao(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = ao(), this.projectionDeltaWithTransform = ao());
      const h = this.projectionTransform;
      pa(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = bh(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Tn.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = ao();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = ht(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, v = this.getStack(), b = !v || v.members.length <= 1, y = !!(h && !b && this.options.crossfade === !0 && !this.path.some(vI));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (k) => {
        const w = k / 1e3;
        Ch(d.x, i.x, w), Ch(d.y, i.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ha(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mI(this.relativeTarget, this.relativeTargetOrigin, f, w), S && tu(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = ht()), tr(S, this.relativeTarget)), h && (this.animationValues = u, UM(u, c, this.latestValues, w, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (en(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.update(() => {
        qi.hasAnimatedSinceResize = !0, this.currentAnimation = rI(0, xh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && Qg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ht();
          const d = Zt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Zt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        tr(s, l), io(s, u), pa(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new KM()), this.sharedNodes.get(i).add(s);
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
      for (let u = 0; u < yh.length; u++) {
        const d = "rotate" + yh[u];
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Yi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Yi(i.pointerEvents) || ""), this.hasProjected && !Pn(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = bh(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in fs) {
        if (f[h] === void 0)
          continue;
        const { correct: v, applyTo: b } = fs[h], y = c.transform === "none" ? f[h] : v(f[h], d);
        if (b) {
          const S = b.length;
          for (let k = 0; k < S; k++)
            c[b[k]] = y;
        } else
          c[h] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Yi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Sh), this.root.sharedNodes.clear();
    }
  };
}
function oI(e) {
  e.updateLayout();
}
function aI(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? Pr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Zt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Qg(a, r.layoutBox, n) && Pr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Zt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = ao();
    pa(s, n, r.layoutBox);
    const l = ao();
    i ? pa(l, e.applyTransform(o, !0), r.measuredBox) : pa(l, n, r.layoutBox);
    const c = !Zg(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = ht();
          ha(m, r.layoutBox, f.layoutBox);
          const h = ht();
          ha(h, n, p.layoutBox), tu(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function iI(e) {
  Tn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function lI(e) {
  e.clearSnapshot();
}
function Sh(e) {
  e.clearMeasurements();
}
function cI(e) {
  e.isLayoutDirty = !1;
}
function uI(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function wh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function dI(e) {
  e.resolveTargetDelta();
}
function fI(e) {
  e.calcProjection();
}
function pI(e) {
  e.resetRotation();
}
function hI(e) {
  e.removeLeadSnapshot();
}
function Ch(e, t, r) {
  e.translate = it(t.translate, 0, r), e.scale = it(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function _h(e, t, r, n) {
  e.min = it(t.min, r.min, n), e.max = it(t.max, r.max, n);
}
function mI(e, t, r, n) {
  _h(e.x, t.x, r.x, n), _h(e.y, t.y, r.y, n);
}
function vI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gI = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function kh(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function bI(e) {
  kh(e.x), kh(e.y);
}
function Qg(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Zc(gh(t), gh(r), 0.2);
}
const yI = Jg({
  attachResizeListener: (e, t) => Yr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ec = {
  current: void 0
}, eb = Jg({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ec.current) {
      const e = new yI({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ec.current = e;
    }
    return ec.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), xI = {
  pan: {
    Feature: jM
  },
  drag: {
    Feature: NM,
    ProjectionNode: eb,
    MeasureLayout: Gg
  }
}, SI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function wI(e) {
  const t = SI.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const CI = 4;
function ru(e, t, r = 1) {
  xr(r <= CI, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = wI(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : Wc(o) ? ru(o, t, r + 1) : o;
}
function _I(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!Wc(a))
      return;
    const i = ru(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!Wc(a))
      continue;
    const i = ru(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const kI = /* @__PURE__ */ new Set([
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
]), tb = (e) => kI.has(e), EI = (e) => Object.keys(e).some(tb), ki = (e) => e === Un || e === fe, Eh = (e, t) => parseFloat(e.split(", ")[t]), Ph = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Eh(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? Eh(a[1], e) : 0;
  }
}, PI = /* @__PURE__ */ new Set(["x", "y", "z"]), TI = Xa.filter((e) => !PI.has(e));
function AI(e) {
  const t = [];
  return TI.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Th = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Ph(4, 13),
  y: Ph(5, 14)
}, OI = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = Th[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = Th[c](l, a);
  }), e;
}, RI = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(tb);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Yo(u);
    const f = t[l];
    let p;
    if (hs(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Yo(u);
      for (let v = h; v < m && f[v] !== null; v++)
        p ? xr(Yo(f[v]) === p, "All keyframes must be of the same type") : (p = Yo(f[v]), xr(p === d || ki(d) && ki(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Yo(f);
    if (d !== p)
      if (ki(d) && ki(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === fe && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = AI(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = OI(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Ws && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function $I(e, t, r, n) {
  return EI(t) ? RI(e, t, r, n) : { target: t, transitionEnd: n };
}
const DI = (e, t, r, n) => {
  const o = _I(e, t, n);
  return t = o.target, n = o.transitionEnd, $I(e, t, r, n);
}, nu = { current: null }, rb = { current: !1 };
function MI() {
  if (rb.current = !0, !!Ws)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => nu.current = e.matches;
      e.addListener(t), t();
    } else
      nu.current = !1;
}
function II(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Ut(a))
      e.addValue(o, a), bs(n) && n.add(o), process.env.NODE_ENV === "development" && pd(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Ut(i))
      e.addValue(o, ko(a, { owner: e })), bs(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, ko(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Ah = /* @__PURE__ */ new WeakMap(), nb = Object.keys(Ia), FI = nb.length, Oh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], NI = Xu.length;
class jI {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => tt.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Hs(r), this.isVariantNode = zv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Ut(f) && (f.set(s[d], !1), bs(c) && c.add(d));
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
    this.current = t, Ah.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), rb.current || MI(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : nu.current, process.env.NODE_ENV !== "production" && pd(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ah.delete(this.current), this.projection && this.projection.unmount(), en(this.notifyUpdate), en(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Wn.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && tt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
      r.ignoreStrict ? Ja(!1, l) : xr(!1, l);
    }
    for (let l = 0; l < FI; l++) {
      const c = nb[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = Ia[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && no(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ht();
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
    for (let n = 0; n < Oh.length; n++) {
      const o = Oh[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = II(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < NI; n++) {
      const o = Xu[n], a = this.props[o];
      (Ma(a) || a === !1) && (r[o] = a);
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
    return n === void 0 && r !== void 0 && (n = ko(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = od(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Ut(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new fd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class ob extends jI {
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
    let i = nM(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      tM(this, n, i);
      const s = DI(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function BI(e) {
  return window.getComputedStyle(e);
}
class zI extends ob {
  readValueFromInstance(t, r) {
    if (Wn.has(r)) {
      const n = ld(r);
      return n && n.default || 0;
    } else {
      const n = BI(t), o = (Uv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Yg(t, r);
  }
  build(t, r, n, o) {
    Ju(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return nd(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ut(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Kv(t, r, n, o);
  }
}
class VI extends ob {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Wn.has(r)) {
      const n = ld(r);
      return n && n.default || 0;
    }
    return r = Zv.has(r) ? r : rd(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ht();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Qv(t, r);
  }
  build(t, r, n, o) {
    ed(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Jv(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = td(t.tagName), super.mount(t);
  }
}
const LI = (e, t) => Zu(e) ? new VI(t, { enableHardwareAcceleration: !1 }) : new zI(t, { enableHardwareAcceleration: !0 }), WI = {
  layout: {
    ProjectionNode: eb,
    MeasureLayout: Gg
  }
}, UI = {
  ...gM,
  ...z2,
  ...xI,
  ...WI
}, Sn = /* @__PURE__ */ G$((e, t) => C2(e, t, UI, LI));
function ab() {
  const e = be(!1);
  return ds(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function HI() {
  const e = ab(), [t, r] = Ye(0), n = q(() => {
    e.current && r(t + 1);
  }, [t]);
  return [q(() => tt.postRender(n), [n]), t];
}
class YI extends U.Component {
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
function qI({ children: e, isPresent: t }) {
  const r = wr(), n = be(null), o = be({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return pm(() => {
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
  }, [t]), U.createElement(YI, { isPresent: t, childRef: n, sizeRef: o }, U.cloneElement(e, { ref: n }));
}
const tc = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = eg(GI), l = wr(), c = vt(
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
  return vt(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), U.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = U.createElement(qI, { isPresent: r }, e)), U.createElement(Ga.Provider, { value: c }, e);
};
function GI() {
  return /* @__PURE__ */ new Map();
}
function XI(e) {
  return Fe(() => () => e(), []);
}
const Qn = (e) => e.key || "";
function KI(e, t) {
  e.forEach((r) => {
    const n = Qn(r);
    t.set(n, r);
  });
}
function ZI(e) {
  const t = [];
  return Ps.forEach(e, (r) => {
    xu(r) && t.push(r);
  }), t;
}
const Io = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  xr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = dt(Ku).forceRender || HI()[0], l = ab(), c = ZI(e);
  let u = c;
  const d = be(/* @__PURE__ */ new Map()).current, f = be(u), p = be(/* @__PURE__ */ new Map()).current, m = be(!0);
  if (ds(() => {
    m.current = !1, KI(c, p), f.current = u;
  }), XI(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return U.createElement(U.Fragment, null, u.map((y) => U.createElement(tc, { key: Qn(y), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, y)));
  u = [...u];
  const h = f.current.map(Qn), v = c.map(Qn), b = h.length;
  for (let y = 0; y < b; y++) {
    const S = h[y];
    v.indexOf(S) === -1 && !d.has(S) && d.set(S, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((y, S) => {
    if (v.indexOf(S) !== -1)
      return;
    const k = p.get(S);
    if (!k)
      return;
    const w = h.indexOf(S);
    let M = y;
    if (!M) {
      const P = () => {
        p.delete(S), d.delete(S);
        const I = f.current.findIndex((z) => z.key === S);
        if (f.current.splice(I, 1), !d.size) {
          if (f.current = c, l.current === !1)
            return;
          s(), n && n();
        }
      };
      M = U.createElement(tc, { key: Qn(k), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: a, mode: i }, k), d.set(S, M);
    }
    u.splice(w, 0, M);
  }), u = u.map((y) => {
    const S = y.key;
    return d.has(S) ? y : U.createElement(tc, { key: Qn(y), isPresent: !0, presenceAffectsLayout: a, mode: i }, y);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), U.createElement(U.Fragment, null, d.size ? u : u.map((y) => La(y)));
};
var Rh = {
  path: /* @__PURE__ */ L.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ L.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ L.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ L.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Ks = _e((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = Xe("chakra-icon", s), d = $o("Icon", e), f = {
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
  }, m = n ?? Rh.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ L.jsx(ge.svg, { as: r, ...p, ...c });
  const h = i ?? Rh.path;
  return /* @__PURE__ */ L.jsx(ge.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
Ks.displayName = "Icon";
var NV = Ks, JI = r_({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), QI = _e((e, t) => {
  const r = $o("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = Fr(e), c = Xe("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${JI} ${a} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ L.jsx(ge.span, { srOnly: !0, children: n })
    }
  );
});
QI.displayName = "Spinner";
function eF(e) {
  return /* @__PURE__ */ L.jsx(Ks, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ L.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var ib = _e(
  function(t, r) {
    const n = $o("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Fr(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ L.jsx(
      ge.button,
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
        children: o || /* @__PURE__ */ L.jsx(eF, { width: "1em", height: "1em" })
      }
    );
  }
);
ib.displayName = "CloseButton";
var tF = Object.defineProperty, rF = (e, t, r) => t in e ? tF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ct = (e, t, r) => (rF(e, typeof t != "symbol" ? t + "" : t, r), r);
function $h(e) {
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
var nF = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Dh(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Mh(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var ou = typeof window < "u" ? Es : Fe, xs = (e) => e, oF = class {
  constructor() {
    ct(this, "descendants", /* @__PURE__ */ new Map()), ct(this, "register", (e) => {
      if (e != null)
        return nF(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), ct(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = $h(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), ct(this, "destroy", () => {
      this.descendants.clear();
    }), ct(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), ct(this, "count", () => this.descendants.size), ct(this, "enabledCount", () => this.enabledValues().length), ct(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), ct(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), ct(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), ct(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), ct(this, "first", () => this.item(0)), ct(this, "firstEnabled", () => this.enabledItem(0)), ct(this, "last", () => this.item(this.descendants.size - 1)), ct(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), ct(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), ct(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), ct(this, "next", (e, t = !0) => {
      const r = Dh(e, this.count(), t);
      return this.item(r);
    }), ct(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Dh(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), ct(this, "prev", (e, t = !0) => {
      const r = Mh(e, this.count() - 1, t);
      return this.item(r);
    }), ct(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Mh(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), ct(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = $h(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function aF(e, t) {
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
function xt(...e) {
  return (t) => {
    e.forEach((r) => {
      aF(r, t);
    });
  };
}
function jV(...e) {
  return vt(() => xt(...e), e);
}
function iF() {
  const e = be(new oF());
  return ou(() => () => e.current.destroy()), e.current;
}
var [sF, sb] = It({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function lF(e) {
  const t = sb(), [r, n] = Ye(-1), o = be(null);
  ou(() => () => {
    o.current && t.unregister(o.current);
  }, []), ou(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = xs(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: xt(a, o)
  };
}
function cF() {
  return [
    xs(sF),
    () => xs(sb()),
    () => iF(),
    (o) => lF(o)
  ];
}
function hd(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = Kt(n), i = Kt(o), [s, l] = Ye(r), c = t !== void 0, u = c ? t : s, d = Kt(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var au = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Go = {
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
function iu(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Go.slideRight;
    case "left":
      return Go.slideLeft;
    case "bottom":
      return Go.slideDown;
    case "top":
      return Go.slideUp;
    default:
      return Go.slideRight;
  }
}
var Nn = {
  enter: {
    duration: 0.2,
    ease: au.easeOut
  },
  exit: {
    duration: 0.1,
    ease: au.easeIn
  }
}, Kr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, uF = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Kr.enter(Nn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : Kr.exit(Nn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, lb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: uF
}, dF = Tt(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ L.jsx(Io, { custom: f, children: d && /* @__PURE__ */ L.jsx(
    Sn.div,
    {
      ref: r,
      className: Xe("chakra-fade", a),
      custom: f,
      ...lb,
      animate: u,
      ...c
    }
  ) });
});
dF.displayName = "Fade";
var fF = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Kr.exit(Nn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : Kr.enter(Nn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, cb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: fF
}, pF = Tt(
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
    return /* @__PURE__ */ L.jsx(Io, { custom: m, children: f && /* @__PURE__ */ L.jsx(
      Sn.div,
      {
        ref: r,
        className: Xe("chakra-offset-slide", s),
        ...cb,
        animate: p,
        custom: m,
        ...d
      }
    ) });
  }
);
pF.displayName = "ScaleFade";
var hF = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Kr.exit(Nn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Kr.enter(Nn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : Kr.exit(Nn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, su = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: hF
}, mF = Tt(
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
    return /* @__PURE__ */ L.jsx(Io, { custom: h, children: p && /* @__PURE__ */ L.jsx(
      Sn.div,
      {
        ref: r,
        className: Xe("chakra-offset-slide", i),
        custom: h,
        ...su,
        animate: m,
        ...f
      }
    ) });
  }
);
mF.displayName = "SlideFade";
var Ih = {
  exit: {
    duration: 0.15,
    ease: au.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, vF = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = iu({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Kr.exit(Ih.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = iu({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Kr.enter(Ih.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, ub = Tt(function(t, r) {
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
  } = t, p = iu({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, v = i || a ? "enter" : "exit", b = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ L.jsx(Io, { custom: b, children: h && /* @__PURE__ */ L.jsx(
    Sn.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: Xe("chakra-slide", s),
      animate: v,
      exit: "exit",
      custom: b,
      variants: vF,
      style: m,
      ...d
    }
  ) });
});
ub.displayName = "Slide";
function db(e) {
  return Ps.toArray(e).filter(
    (t) => xu(t)
  );
}
var [gF, fb] = It({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [bF, Fo] = It({
  strict: !1,
  name: "FormControlContext"
});
function yF(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = wr(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [f, p] = Ye(!1), [m, h] = Ye(!1), [v, b] = Ye(!1), y = q(
    (P = {}, I = null) => ({
      id: d,
      ...P,
      ref: xt(I, (z) => {
        z && h(!0);
      })
    }),
    [d]
  ), S = q(
    (P = {}, I = null) => ({
      ...P,
      ref: I,
      "data-focus": eo(v),
      "data-disabled": eo(o),
      "data-invalid": eo(n),
      "data-readonly": eo(a),
      id: P.id !== void 0 ? P.id : c,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, v, n, a, c]
  ), k = q(
    (P = {}, I = null) => ({
      id: u,
      ...P,
      ref: xt(I, (z) => {
        z && p(!0);
      }),
      "aria-live": "polite"
    }),
    [u]
  ), w = q(
    (P = {}, I = null) => ({
      ...P,
      ...i,
      ref: I,
      role: "group"
    }),
    [i]
  ), M = q(
    (P = {}, I = null) => ({
      ...P,
      ref: I,
      role: "presentation",
      "aria-hidden": !0,
      children: P.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!v,
    onFocus: () => b(!0),
    onBlur: () => b(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: m,
    setHasHelpText: h,
    id: l,
    labelId: c,
    feedbackId: u,
    helpTextId: d,
    htmlProps: i,
    getHelpTextProps: y,
    getErrorMessageProps: k,
    getRootProps: w,
    getLabelProps: S,
    getRequiredIndicatorProps: M
  };
}
var xF = _e(
  function(t, r) {
    const n = Do("Form", t), o = Fr(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = yF(o), l = Xe("chakra-form-control", t.className);
    return /* @__PURE__ */ L.jsx(bF, { value: s, children: /* @__PURE__ */ L.jsx(gF, { value: n, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
xF.displayName = "FormControl";
var SF = _e(
  function(t, r) {
    const n = Fo(), o = fb(), a = Xe("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: a
      }
    );
  }
);
SF.displayName = "FormHelperText";
var [wF, CF] = It({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), _F = _e(
  (e, t) => {
    const r = Do("FormError", e), n = Fr(e), o = Fo();
    return o != null && o.isInvalid ? /* @__PURE__ */ L.jsx(wF, { value: r, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...o == null ? void 0 : o.getErrorMessageProps(n, t),
        className: Xe("chakra-form__error-message", e.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...r.text
        }
      }
    ) }) : null;
  }
);
_F.displayName = "FormErrorMessage";
var kF = _e((e, t) => {
  const r = CF(), n = Fo();
  if (!(n != null && n.isInvalid))
    return null;
  const o = Xe("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ L.jsx(
    Ks,
    {
      ref: t,
      "aria-hidden": !0,
      ...e,
      __css: r.icon,
      className: o,
      children: /* @__PURE__ */ L.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
kF.displayName = "FormErrorIcon";
var EF = _e(function(t, r) {
  var n;
  const o = $o("FormLabel", t), a = Fr(t), {
    className: i,
    children: s,
    requiredIndicator: l = /* @__PURE__ */ L.jsx(pb, {}),
    optionalIndicator: c = null,
    ...u
  } = a, d = Fo(), f = (n = d == null ? void 0 : d.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
  return /* @__PURE__ */ L.jsxs(
    ge.label,
    {
      ...f,
      className: Xe("chakra-form__label", a.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...o
      },
      children: [
        s,
        d != null && d.isRequired ? l : c
      ]
    }
  );
});
EF.displayName = "FormLabel";
var pb = _e(
  function(t, r) {
    const n = Fo(), o = fb();
    if (!(n != null && n.isRequired))
      return null;
    const a = Xe("chakra-form__required-indicator", t.className);
    return /* @__PURE__ */ L.jsx(
      ge.span,
      {
        ...n == null ? void 0 : n.getRequiredIndicatorProps(t, r),
        __css: o.requiredIndicator,
        className: a
      }
    );
  }
);
pb.displayName = "RequiredIndicator";
function BV(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...a } = PF(e);
  return {
    ...a,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Cl(r),
    "aria-required": Cl(o),
    "aria-readonly": Cl(n)
  };
}
function PF(e) {
  var t, r, n;
  const o = Fo(), {
    id: a,
    disabled: i,
    readOnly: s,
    required: l,
    isRequired: c,
    isInvalid: u,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: m,
    ...h
  } = e, v = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && v.push(o.feedbackId), o != null && o.hasHelpText && v.push(o.helpTextId), {
    ...h,
    "aria-describedby": v.join(" ") || void 0,
    id: a ?? (o == null ? void 0 : o.id),
    isDisabled: (t = i ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? c) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: u ?? (o == null ? void 0 : o.isInvalid),
    onFocus: Rt(o == null ? void 0 : o.onFocus, p),
    onBlur: Rt(o == null ? void 0 : o.onBlur, m)
  };
}
function TF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function AF(e, t) {
  let r = TF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function OF(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function Ss(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function hb(e, t, r) {
  return (r - t) * e + t;
}
function lu(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = OF(r);
  return AF(n, o);
}
function ma(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function va(e, t, r, n) {
  const o = Kt(r);
  return Fe(() => {
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
function RF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var cu = { exports: {} }, rc, Fh;
function md() {
  if (Fh)
    return rc;
  Fh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return rc = e, rc;
}
var nc, Nh;
function mb() {
  return Nh || (Nh = 1, nc = Function.call.bind(Object.prototype.hasOwnProperty)), nc;
}
var oc, jh;
function $F() {
  if (jh)
    return oc;
  jh = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = md(), r = {}, n = mb();
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
  }, oc = o, oc;
}
var ac, Bh;
function DF() {
  if (Bh)
    return ac;
  Bh = 1;
  var e = Eu, t = Cm(), r = md(), n = mb(), o = $F(), a = function() {
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
  return ac = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(F) {
      var N = F && (c && F[c] || F[u]);
      if (typeof N == "function")
        return N;
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
      element: k(),
      elementType: w(),
      instanceOf: M,
      node: j(),
      objectOf: I,
      oneOf: P,
      oneOfType: z,
      shape: ne,
      exact: J
    };
    function m(F, N) {
      return F === N ? F !== 0 || 1 / F === 1 / N : F !== F && N !== N;
    }
    function h(F, N) {
      this.message = F, this.data = N && typeof N == "object" ? N : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(F) {
      if (process.env.NODE_ENV !== "production")
        var N = {}, V = 0;
      function T(B, C, H, A, Z, Y, ae) {
        if (A = A || f, Y = Y || H, ae !== r) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = A + ":" + H;
            !N[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Se] = !0, V++);
          }
        }
        return C[H] == null ? B ? C[H] === null ? new h("The " + Z + " `" + Y + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new h("The " + Z + " `" + Y + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : F(C, H, A, Z, Y);
      }
      var O = T.bind(null, !1);
      return O.isRequired = T.bind(null, !0), O;
    }
    function b(F) {
      function N(V, T, O, B, C, H) {
        var A = V[T], Z = oe(A);
        if (Z !== F) {
          var Y = D(A);
          return new h(
            "Invalid " + B + " `" + C + "` of type " + ("`" + Y + "` supplied to `" + O + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return v(N);
    }
    function y() {
      return v(i);
    }
    function S(F) {
      function N(V, T, O, B, C) {
        if (typeof F != "function")
          return new h("Property `" + C + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var H = V[T];
        if (!Array.isArray(H)) {
          var A = oe(H);
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an array."));
        }
        for (var Z = 0; Z < H.length; Z++) {
          var Y = F(H, Z, O, B, C + "[" + Z + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return v(N);
    }
    function k() {
      function F(N, V, T, O, B) {
        var C = N[V];
        if (!s(C)) {
          var H = oe(C);
          return new h("Invalid " + O + " `" + B + "` of type " + ("`" + H + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(F);
    }
    function w() {
      function F(N, V, T, O, B) {
        var C = N[V];
        if (!e.isValidElementType(C)) {
          var H = oe(C);
          return new h("Invalid " + O + " `" + B + "` of type " + ("`" + H + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(F);
    }
    function M(F) {
      function N(V, T, O, B, C) {
        if (!(V[T] instanceof F)) {
          var H = F.name || f, A = de(V[T]);
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return v(N);
    }
    function P(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function N(V, T, O, B, C) {
        for (var H = V[T], A = 0; A < F.length; A++)
          if (m(H, F[A]))
            return null;
        var Z = JSON.stringify(F, function(ae, R) {
          var Se = D(R);
          return Se === "symbol" ? String(R) : R;
        });
        return new h("Invalid " + B + " `" + C + "` of value `" + String(H) + "` " + ("supplied to `" + O + "`, expected one of " + Z + "."));
      }
      return v(N);
    }
    function I(F) {
      function N(V, T, O, B, C) {
        if (typeof F != "function")
          return new h("Property `" + C + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var H = V[T], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + A + "` supplied to `" + O + "`, expected an object."));
        for (var Z in H)
          if (n(H, Z)) {
            var Y = F(H, Z, O, B, C + "." + Z, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return v(N);
    }
    function z(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var N = 0; N < F.length; N++) {
        var V = F[N];
        if (typeof V != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ce(V) + " at index " + N + "."
          ), i;
      }
      function T(O, B, C, H, A) {
        for (var Z = [], Y = 0; Y < F.length; Y++) {
          var ae = F[Y], R = ae(O, B, C, H, A, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var Se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + H + " `" + A + "` supplied to " + ("`" + C + "`" + Se + "."));
      }
      return v(T);
    }
    function j() {
      function F(N, V, T, O, B) {
        return Q(N[V]) ? null : new h("Invalid " + O + " `" + B + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return v(F);
    }
    function X(F, N, V, T, O) {
      return new h(
        (F || "React class") + ": " + N + " type `" + V + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function ne(F) {
      function N(V, T, O, B, C) {
        var H = V[T], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + B + " `" + C + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var Z in F) {
          var Y = F[Z];
          if (typeof Y != "function")
            return X(O, B, C, Z, D(Y));
          var ae = Y(H, Z, O, B, C + "." + Z, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return v(N);
    }
    function J(F) {
      function N(V, T, O, B, C) {
        var H = V[T], A = oe(H);
        if (A !== "object")
          return new h("Invalid " + B + " `" + C + "` of type `" + A + "` " + ("supplied to `" + O + "`, expected `object`."));
        var Z = t({}, V[T], F);
        for (var Y in Z) {
          var ae = F[Y];
          if (n(F, Y) && typeof ae != "function")
            return X(O, B, C, Y, D(ae));
          if (!ae)
            return new h(
              "Invalid " + B + " `" + C + "` key `" + Y + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(V[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var R = ae(H, Y, O, B, C + "." + Y, r);
          if (R)
            return R;
        }
        return null;
      }
      return v(N);
    }
    function Q(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(Q);
          if (F === null || s(F))
            return !0;
          var N = d(F);
          if (N) {
            var V = N.call(F), T;
            if (N !== F.entries) {
              for (; !(T = V.next()).done; )
                if (!Q(T.value))
                  return !1;
            } else
              for (; !(T = V.next()).done; ) {
                var O = T.value;
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
    function ee(F, N) {
      return F === "symbol" ? !0 : N ? N["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && N instanceof Symbol : !1;
    }
    function oe(F) {
      var N = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : ee(N, F) ? "symbol" : N;
    }
    function D(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var N = oe(F);
      if (N === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return N;
    }
    function ce(F) {
      var N = D(F);
      switch (N) {
        case "array":
        case "object":
          return "an " + N;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + N;
        default:
          return N;
      }
    }
    function de(F) {
      return !F.constructor || !F.constructor.name ? f : F.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, ac;
}
var ic, zh;
function MF() {
  if (zh)
    return ic;
  zh = 1;
  var e = md();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ic = function() {
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
  }, ic;
}
if (process.env.NODE_ENV !== "production") {
  var IF = Eu, FF = !0;
  cu.exports = DF()(IF.isElement, FF);
} else
  cu.exports = MF()();
var Ge = cu.exports;
const vb = /* @__PURE__ */ Ts(Ge);
var uu = "data-focus-lock", gb = "data-focus-lock-disabled", NF = "data-no-focus-lock", jF = "data-autofocus-inside", BF = "data-no-autofocus";
function zF(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function VF(e, t) {
  var r = Ye(function() {
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
function bb(e, t) {
  return VF(t || null, function(r) {
    return e.forEach(function(n) {
      return zF(n, r);
    });
  });
}
var sc = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && vb.node;
var Or = function() {
  return Or = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Or.apply(this, arguments);
};
function yb(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function LF(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function xb(e) {
  return e;
}
function Sb(e, t) {
  t === void 0 && (t = xb);
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
function vd(e, t) {
  return t === void 0 && (t = xb), Sb(e, t);
}
function wb(e) {
  e === void 0 && (e = {});
  var t = Sb(null);
  return t.options = Or({ async: !0, ssr: !1 }, e), t;
}
var Cb = function(e) {
  var t = e.sideCar, r = yb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return U.createElement(n, Or({}, r));
};
Cb.isSideCarExport = !0;
function WF(e, t) {
  return e.useMedium(t), Cb;
}
var _b = vd({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), kb = vd(), UF = vd(), HF = wb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), YF = [], gd = /* @__PURE__ */ U.forwardRef(function(t, r) {
  var n, o = U.useState(), a = o[0], i = o[1], s = U.useRef(), l = U.useRef(!1), c = U.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, v = t.allowTextSelection, b = t.group, y = t.className, S = t.whiteList, k = t.hasPositiveIndices, w = t.shards, M = w === void 0 ? YF : w, P = t.as, I = P === void 0 ? "div" : P, z = t.lockProps, j = z === void 0 ? {} : z, X = t.sideCar, ne = t.returnFocus, J = t.focusOptions, Q = t.onActivation, ee = t.onDeactivation, oe = U.useState({}), D = oe[0], ce = U.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && Q && Q(s.current), l.current = !0;
  }, [Q]), de = U.useCallback(function() {
    l.current = !1, ee && ee(s.current);
  }, [ee]);
  Fe(function() {
    d || (c.current = null);
  }, []);
  var F = U.useCallback(function(A) {
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
  }, [ne]), N = U.useCallback(function(A) {
    l.current && _b.useMedium(A);
  }, []), V = kb.useMedium, T = U.useCallback(function(A) {
    s.current !== A && (s.current = A, i(A));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof v < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), U.useEffect(function() {
    !s.current && typeof I != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var O = Bn((n = {}, n[gb] = d && "disabled", n[uu] = b, n), j), B = f !== !0, C = B && f !== "tail", H = bb([r, T]);
  return /* @__PURE__ */ U.createElement(U.Fragment, null, B && [
    // nearest focus guard
    /* @__PURE__ */ U.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: sc
    }),
    // first tabbed element guard
    k ? /* @__PURE__ */ U.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: sc
    }) : null
  ], !d && /* @__PURE__ */ U.createElement(X, {
    id: D,
    sideCar: HF,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: h,
    whiteList: S,
    shards: M,
    onActivation: ce,
    onDeactivation: de,
    returnFocus: F,
    focusOptions: J
  }), /* @__PURE__ */ U.createElement(I, Bn({
    ref: H
  }, O, {
    className: y,
    onBlur: V,
    onFocus: N
  }), u), C && /* @__PURE__ */ U.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: sc
  }));
});
gd.propTypes = process.env.NODE_ENV !== "production" ? {
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
gd.defaultProps = {
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
const Eb = gd;
function qF(e, t) {
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
      _0(u, c);
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
        return /* @__PURE__ */ Dt.createElement(o, this.props);
      }, u;
    }(b0);
    return Su(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Nr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, ws = function(e) {
  return Array.isArray(e) ? e : [e];
}, Pb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, GF = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Tb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Ab = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, XF = function(e, t) {
  return !e || Ab(e) || !GF(e) && t(Tb(e));
}, Ob = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = XF(t, Ob.bind(void 0, e));
  return e.set(t, n), n;
}, KF = function(e, t) {
  return e && !Ab(e) ? QF(e) ? t(Tb(e)) : !1 : !0;
}, Rb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = KF(t, Rb.bind(void 0, e));
  return e.set(t, n), n;
}, $b = function(e) {
  return e.dataset;
}, ZF = function(e) {
  return e.tagName === "BUTTON";
}, Db = function(e) {
  return e.tagName === "INPUT";
}, Mb = function(e) {
  return Db(e) && e.type === "radio";
}, JF = function(e) {
  return !((Db(e) || ZF(e)) && (e.type === "hidden" || e.disabled));
}, QF = function(e) {
  var t = e.getAttribute(BF);
  return ![!0, "true", ""].includes(t);
}, bd = function(e) {
  var t;
  return !!(e && (!((t = $b(e)) === null || t === void 0) && t.focusGuard));
}, Cs = function(e) {
  return !bd(e);
}, e5 = function(e) {
  return !!e;
}, t5 = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, Ib = function(e, t, r) {
  return Nr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(t5);
}, r5 = [
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
], yd = r5.join(","), n5 = "".concat(yd, ", [data-focus-guard]"), Fb = function(e, t) {
  return Nr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? n5 : yd) ? [n] : [], Fb(n));
  }, []);
}, o5 = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Zs([e.contentDocument.body], t) : [e];
}, Zs = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = Fb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return o5(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Nr(n.parentNode.querySelectorAll(yd)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, a5 = function(e) {
  var t = e.querySelectorAll("[".concat(jF, "]"));
  return Nr(t).map(function(r) {
    return Zs([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, xd = function(e, t) {
  return Nr(e).filter(function(r) {
    return Ob(t, r);
  }).filter(function(r) {
    return JF(r);
  });
}, Vh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Nr(e).filter(function(r) {
    return Rb(t, r);
  });
}, du = function(e, t, r) {
  return Ib(xd(Zs(e, r), t), !0, r);
}, Lh = function(e, t) {
  return Ib(xd(Zs(e), t), !1);
}, i5 = function(e, t) {
  return xd(a5(e), t);
}, vo = function(e, t) {
  return e.shadowRoot ? vo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Nr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? vo(o, t) : !1;
    }
    return vo(r, t);
  });
}, s5 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, Nb = function(e) {
  return e.parentNode ? Nb(e.parentNode) : e;
}, Sd = function(e) {
  var t = ws(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(uu);
    return r.push.apply(r, o ? s5(Nr(Nb(n).querySelectorAll("[".concat(uu, '="').concat(o, '"]:not([').concat(gb, '="disabled"])')))) : [n]), r;
  }, []);
}, l5 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, ja = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? ja(t.shadowRoot) : t instanceof HTMLIFrameElement && l5(function() {
      return t.contentWindow.document;
    }) ? ja(t.contentWindow.document) : t;
  }
}, c5 = function(e, t) {
  return e === t;
}, u5 = function(e, t) {
  return !!Nr(e.querySelectorAll("iframe")).some(function(r) {
    return c5(r, t);
  });
}, jb = function(e, t) {
  return t === void 0 && (t = ja(Pb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Sd(e).some(function(r) {
    return vo(r, t) || u5(r, t);
  });
}, d5 = function(e) {
  e === void 0 && (e = document);
  var t = ja(e);
  return t ? Nr(e.querySelectorAll("[".concat(NF, "]"))).some(function(r) {
    return vo(r, t);
  }) : !1;
}, f5 = function(e, t) {
  return t.filter(Mb).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, wd = function(e, t) {
  return Mb(e) && e.name ? f5(e, t) : e;
}, p5 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(wd(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Wh = function(e) {
  return e[0] && e.length > 1 ? wd(e[0], e) : e[0];
}, Uh = function(e, t) {
  return e.length > 1 ? e.indexOf(wd(e[t], e)) : t;
}, Bb = "NEW_FOCUS", h5 = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = bd(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = p5(t), h = r !== void 0 ? m.indexOf(r) : -1, v = h - (n ? m.indexOf(n) : l), b = Uh(e, 0), y = Uh(e, o - 1);
    if (l === -1 || u === -1)
      return Bb;
    if (!d && u >= 0)
      return u;
    if (l <= f && s && Math.abs(d) > 1)
      return y;
    if (l >= p && s && Math.abs(d) > 1)
      return b;
    if (d && Math.abs(v) > 1)
      return u;
    if (l <= f)
      return y;
    if (l > p)
      return b;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, m5 = function(e) {
  return function(t) {
    var r, n = (r = $b(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, v5 = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Vh(n.filter(m5(r)));
  return o && o.length ? Wh(o) : Wh(Vh(t));
}, fu = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && fu(e.parentNode.host || e.parentNode, t), t;
}, lc = function(e, t) {
  for (var r = fu(e), n = fu(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, zb = function(e, t, r) {
  var n = ws(e), o = ws(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = lc(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = lc(a, l);
      c && (!i || vo(c, i) ? i = c : i = lc(c, i));
    });
  }), i;
}, g5 = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(i5(n, t));
  }, []);
}, b5 = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(e5);
}, y5 = function(e, t) {
  var r = ja(ws(e).length > 0 ? document : Pb(e).ownerDocument), n = Sd(e).filter(Cs), o = zb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Lh(n, a), s = du(n, a).filter(function(p) {
    var m = p.node;
    return Cs(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Lh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = b5(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = h5(u, l, r, t);
    if (d === Bb) {
      var f = v5(i, u, g5(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, x5 = function(e) {
  var t = Sd(e).filter(Cs), r = zb(e, e, t), n = /* @__PURE__ */ new Map(), o = du([r], n, !0), a = du(t, n).filter(function(i) {
    var s = i.node;
    return Cs(s);
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
      guard: bd(s)
    };
  });
}, S5 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, cc = 0, uc = !1, Vb = function(e, t, r) {
  r === void 0 && (r = {});
  var n = y5(e, t);
  if (!uc && n) {
    if (cc > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), uc = !0, setTimeout(function() {
        uc = !1;
      }, 1);
      return;
    }
    cc++, S5(n.node, r.focusOptions), cc--;
  }
};
function Lb(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var w5 = function() {
  return document && document.activeElement === document.body;
}, C5 = function() {
  return w5() || d5();
}, go = null, so = null, bo = null, Ba = !1, _5 = function() {
  return !0;
}, k5 = function(t) {
  return (go.whiteList || _5)(t);
}, E5 = function(t, r) {
  bo = {
    observerNode: t,
    portaledElement: r
  };
}, P5 = function(t) {
  return bo && bo.portaledElement === t;
};
function Hh(e, t, r, n) {
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
var T5 = function(t) {
  return t && "current" in t ? t.current : t;
}, A5 = function(t) {
  return t ? !!Ba : Ba === "meanwhile";
}, O5 = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, R5 = function(t, r) {
  return r.some(function(n) {
    return O5(t, n, n);
  });
}, _s = function() {
  var t = !1;
  if (go) {
    var r = go, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || bo && bo.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(T5).filter(Boolean));
      if ((!u || k5(u)) && (o || A5(s) || !C5() || !so && a) && (c && !// active element is "inside" working area
      (jb(d) || // check for shadow-dom contained elements
      u && R5(u, d) || P5(u)) && (document && !so && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = Vb(d, so, {
        focusOptions: l
      }), bo = {})), Ba = !1, so = document && document.activeElement), document) {
        var f = document && document.activeElement, p = x5(d), m = p.map(function(h) {
          var v = h.node;
          return v;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var v = h.guard, b = h.node;
          return v && b.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var v = h.node;
          return v.removeAttribute("tabIndex");
        }), Hh(m, p.length, 1, p), Hh(m, -1, -1, p));
      }
    }
  }
  return t;
}, Wb = function(t) {
  _s() && t && (t.stopPropagation(), t.preventDefault());
}, Cd = function() {
  return Lb(_s);
}, $5 = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || E5(n, r);
}, D5 = function() {
  return null;
};
process.env.NODE_ENV !== "production" && vb.node.isRequired;
var Ub = function() {
  Ba = "just", setTimeout(function() {
    Ba = "meanwhile";
  }, 0);
}, M5 = function() {
  document.addEventListener("focusin", Wb), document.addEventListener("focusout", Cd), window.addEventListener("blur", Ub);
}, I5 = function() {
  document.removeEventListener("focusin", Wb), document.removeEventListener("focusout", Cd), window.removeEventListener("blur", Ub);
};
function F5(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function N5(e) {
  var t = e.slice(-1)[0];
  t && !go && M5();
  var r = go, n = r && t && t.id === r.id;
  go = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (so = null, (!n || r.observed !== t.observed) && t.onActivation(), _s(), Lb(_s)) : (I5(), so = null);
}
_b.assignSyncMedium($5);
kb.assignMedium(Cd);
UF.assignMedium(function(e) {
  return e({
    moveFocusInside: Vb,
    focusInside: jb
  });
});
const j5 = qF(F5, N5)(D5);
var Hb = /* @__PURE__ */ U.forwardRef(function(t, r) {
  return /* @__PURE__ */ U.createElement(Eb, Bn({
    sideCar: j5,
    ref: r
  }, t));
}), Yb = Eb.propTypes || {};
Yb.sideCar;
var B5 = RF(Yb, ["sideCar"]);
Hb.propTypes = process.env.NODE_ENV !== "production" ? B5 : {};
const Yh = Hb;
function qb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function _d(e) {
  var t;
  if (!qb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function z5(e) {
  var t, r;
  return (r = (t = Gb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Gb(e) {
  return qb(e) ? e.ownerDocument : document;
}
function V5(e) {
  return Gb(e).activeElement;
}
function L5(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function W5(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function Xb(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : _d(e) && L5(e) ? e : Xb(W5(e));
}
var Kb = (e) => e.hasAttribute("tabindex"), U5 = (e) => Kb(e) && e.tabIndex === -1;
function H5(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Zb(e) {
  return e.parentElement && Zb(e.parentElement) ? !0 : e.hidden;
}
function Y5(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Jb(e) {
  if (!_d(e) || Zb(e) || H5(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : Y5(e) ? !0 : Kb(e);
}
function q5(e) {
  return e ? _d(e) && Jb(e) && !U5(e) : !1;
}
var G5 = [
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
], X5 = G5.join(), K5 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function Qb(e) {
  const t = Array.from(
    e.querySelectorAll(X5)
  );
  return t.unshift(e), t.filter((r) => Jb(r) && K5(r));
}
var qh, Z5 = (qh = Yh.default) != null ? qh : Yh, ey = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && Qb(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = q(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ L.jsx(
    Z5,
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
ey.displayName = "FocusLock";
var ty = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function J5(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : zt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function Q5(e, t = ty) {
  const r = {};
  return e.forEach((n, o) => {
    const a = t[o];
    n != null && (r[a] = n);
  }), r;
}
var ry = (e) => /* @__PURE__ */ L.jsx(
  ge.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
ry.displayName = "StackItem";
function eN(e) {
  const { spacing: t, direction: r } = e, n = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": J5(
      r,
      (o) => n[o]
    )
  };
}
var ny = _e((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: a,
    spacing: i = "0.5rem",
    wrap: s,
    children: l,
    divider: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", m = vt(
    () => eN({ spacing: i, direction: p }),
    [i, p]
  ), h = !!c, v = !d && !h, b = vt(() => {
    const S = db(l);
    return v ? S : S.map((k, w) => {
      const M = typeof k.key < "u" ? k.key : w, P = w + 1 === S.length, z = d ? /* @__PURE__ */ L.jsx(ry, { children: k }, M) : k;
      if (!h)
        return z;
      const j = La(
        c,
        {
          __css: m
        }
      ), X = P ? null : j;
      return /* @__PURE__ */ L.jsxs(yu, { children: [
        z,
        X
      ] }, M);
    });
  }, [
    c,
    m,
    h,
    v,
    d,
    l
  ]), y = Xe("chakra-stack", u);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: p,
      flexWrap: s,
      gap: h ? void 0 : i,
      className: y,
      ...f,
      children: b
    }
  );
});
ny.displayName = "Stack";
var tN = _e((e, t) => /* @__PURE__ */ L.jsx(ny, { align: "center", ...e, direction: "row", ref: t }));
tN.displayName = "HStack";
var oy = ge("div");
oy.displayName = "Box";
var ay = _e(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ L.jsx(
    oy,
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
ay.displayName = "Square";
var rN = _e(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ L.jsx(ay, { size: n, ref: r, borderRadius: "9999px", ...o });
});
rN.displayName = "Circle";
var nN = _e(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: c,
    ...u
  } = $o("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...m
  } = Fr(t), h = {
    vertical: {
      borderLeftWidth: n || i || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || a || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ L.jsx(
    ge.hr,
    {
      ref: r,
      "aria-orientation": f,
      ...m,
      __css: {
        ...u,
        border: "0",
        borderColor: c,
        borderStyle: l,
        ...h[f],
        ...p
      },
      className: Xe("chakra-divider", d)
    }
  );
});
nN.displayName = "Divider";
var oN = _e(function(t, r) {
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
  return /* @__PURE__ */ L.jsx(ge.div, { ref: r, __css: d, ...u });
});
oN.displayName = "Flex";
function aN(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t, { getWindow: o } = j$(), a = Array.isArray(e) ? e : [e];
  let i = Array.isArray(n) ? n : [n];
  i = i.filter((c) => c != null);
  const [s, l] = Ye(() => a.map((c, u) => ({
    media: c,
    matches: r ? !!i[u] : o().matchMedia(c).matches
  })));
  return Fe(() => {
    const c = o();
    l(
      a.map((f) => ({
        media: f,
        matches: c.matchMedia(f).matches
      }))
    );
    const u = a.map((f) => c.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((m) => m.media === f.media ? { ...m, matches: f.matches } : m));
    };
    return u.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      u.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((c) => c.matches);
}
function iN(e, t, r = ty) {
  let n = Object.keys(e).indexOf(t);
  if (n !== -1)
    return e[t];
  let o = r.indexOf(t);
  for (; o >= 0; ) {
    const a = r[o];
    if (e.hasOwnProperty(a)) {
      n = o;
      break;
    }
    o -= 1;
  }
  if (n !== -1) {
    const a = r[n];
    return e[a];
  }
}
function sN(e) {
  var t, r;
  const n = zt(e) ? e : { fallback: e ?? "base" }, a = nn().__breakpoints.details.map(
    ({ minMaxQuery: c, breakpoint: u }) => ({
      breakpoint: u,
      query: c.replace("@media screen and ", "")
    })
  ), i = a.map((c) => c.breakpoint === n.fallback), l = aN(
    a.map((c) => c.query),
    { fallback: i, ssr: n.ssr }
  ).findIndex((c) => c == !0);
  return (r = (t = a[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback;
}
function zV(e, t) {
  var r;
  const n = zt(t) ? t : { fallback: t ?? "base" }, o = sN(n), a = nn();
  if (!o)
    return;
  const i = Array.from(((r = a.__breakpoints) == null ? void 0 : r.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(Q5(e, i)).map(
      ([l, c]) => [l, c]
    )
  ) : e;
  return iN(s, o, i);
}
function lN(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function cN(e = {}) {
  const { timeout: t = 300, preventDefault: r = () => !0 } = e, [n, o] = Ye([]), a = be(), i = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, s = () => {
    i(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  Fe(() => i, []);
  function l(c) {
    return (u) => {
      if (u.key === "Backspace") {
        const d = [...n];
        d.pop(), o(d);
        return;
      }
      if (lN(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
function uN(e, t, r, n) {
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
function dN() {
  const e = be(/* @__PURE__ */ new Map()), t = e.current, r = q((o, a, i, s) => {
    e.current.set(i, { type: a, el: o, options: s }), o.addEventListener(a, i, s);
  }, []), n = q(
    (o, a, i, s) => {
      o.removeEventListener(a, i, s), e.current.delete(i);
    },
    []
  );
  return Fe(
    () => () => {
      t.forEach((o, a) => {
        n(o.el, o.type, a, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
function dc(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function fN(e = {}) {
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
  } = e, [h, v] = Ye(!0), [b, y] = Ye(!1), S = dN(), k = (D) => {
    D && D.tagName !== "BUTTON" && v(!1);
  }, w = h ? d : d || 0, M = r && !n, P = q(
    (D) => {
      if (r) {
        D.stopPropagation(), D.preventDefault();
        return;
      }
      D.currentTarget.focus(), l == null || l(D);
    },
    [r, l]
  ), I = q(
    (D) => {
      b && dc(D) && (D.preventDefault(), D.stopPropagation(), y(!1), S.remove(document, "keyup", I, !1));
    },
    [b, S]
  ), z = q(
    (D) => {
      if (c == null || c(D), r || D.defaultPrevented || D.metaKey || !dc(D.nativeEvent) || h)
        return;
      const ce = o && D.key === "Enter";
      a && D.key === " " && (D.preventDefault(), y(!0)), ce && (D.preventDefault(), D.currentTarget.click()), S.add(document, "keyup", I, !1);
    },
    [
      r,
      h,
      c,
      o,
      a,
      S,
      I
    ]
  ), j = q(
    (D) => {
      if (u == null || u(D), r || D.defaultPrevented || D.metaKey || !dc(D.nativeEvent) || h)
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
  ), oe = xt(t, k);
  return h ? {
    ...m,
    ref: oe,
    type: "button",
    "aria-disabled": M ? void 0 : r,
    disabled: M,
    onClick: P,
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
    "data-active": eo(b),
    "aria-disabled": r ? "true" : void 0,
    tabIndex: M ? void 0 : w,
    onClick: P,
    onMouseDown: ne,
    onMouseUp: J,
    onKeyUp: j,
    onKeyDown: z,
    onMouseOver: Q,
    onMouseLeave: ee
  };
}
function pN(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = V5(t);
  return !r || t.contains(r) ? !1 : !!q5(r);
}
function hN(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  Mo(() => {
    if (!a || pN(e))
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
var mN = {
  preventScroll: !0,
  shouldFocus: !1
};
function VV(e, t = mN) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = vN(e) ? e.current : e, s = o && a, l = be(s), c = be(a);
  Ta(() => {
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
        const d = Qb(i);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [a, n, i, r]);
  Mo(() => {
    u();
  }, [u]), va(i, "transitionend", u);
}
function vN(e) {
  return "current" in e;
}
var Gn = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), kt = {
  arrowShadowColor: Gn("--popper-arrow-shadow-color"),
  arrowSize: Gn("--popper-arrow-size", "8px"),
  arrowSizeHalf: Gn("--popper-arrow-size-half"),
  arrowBg: Gn("--popper-arrow-bg"),
  transformOrigin: Gn("--popper-transform-origin"),
  arrowOffset: Gn("--popper-arrow-offset")
};
function gN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var bN = {
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
}, yN = (e) => bN[e], Gh = {
  scroll: !0,
  resize: !0
};
function xN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Gh, ...e }
  } : t = {
    enabled: e,
    options: Gh
  }, t;
}
var SN = {
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
}, wN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Xh(e);
  },
  effect: ({ state: e }) => () => {
    Xh(e);
  }
}, Xh = (e) => {
  e.elements.popper.style.setProperty(
    kt.transformOrigin.var,
    yN(e.placement)
  );
}, CN = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    _N(e);
  }
}, _N = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = kN(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: kt.arrowSize.varRef,
      height: kt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [kt.arrowSizeHalf.var]: `calc(${kt.arrowSize.varRef} / 2 - 1px)`,
      [kt.arrowOffset.var]: `calc(${kt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, kN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: kt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: kt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: kt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: kt.arrowOffset.varRef };
}, EN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Kh(e);
  },
  effect: ({ state: e }) => () => {
    Kh(e);
  }
}, Kh = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = gN(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: kt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, PN = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, TN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function AN(e, t = "ltr") {
  var r, n;
  const o = ((r = PN[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = TN[e]) != null ? n : o;
}
var Vt = "top", sr = "bottom", lr = "right", Lt = "left", kd = "auto", ei = [Vt, sr, lr, Lt], Eo = "start", za = "end", ON = "clippingParents", iy = "viewport", Xo = "popper", RN = "reference", Zh = /* @__PURE__ */ ei.reduce(function(e, t) {
  return e.concat([t + "-" + Eo, t + "-" + za]);
}, []), sy = /* @__PURE__ */ [].concat(ei, [kd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Eo, t + "-" + za]);
}, []), $N = "beforeRead", DN = "read", MN = "afterRead", IN = "beforeMain", FN = "main", NN = "afterMain", jN = "beforeWrite", BN = "write", zN = "afterWrite", VN = [$N, DN, MN, IN, FN, NN, jN, BN, zN];
function Ir(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Jt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function zn(e) {
  var t = Jt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ir(e) {
  var t = Jt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ed(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Jt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function LN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !ir(a) || !Ir(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function WN(e) {
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
      !ir(o) || !Ir(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const UN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: LN,
  effect: WN,
  requires: ["computeStyles"]
};
function Mr(e) {
  return e.split("-")[0];
}
var jn = Math.max, ks = Math.min, Po = Math.round;
function pu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ly() {
  return !/^((?!chrome|android).)*safari/i.test(pu());
}
function To(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && ir(e) && (o = e.offsetWidth > 0 && Po(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Po(n.height) / e.offsetHeight || 1);
  var i = zn(e) ? Jt(e) : window, s = i.visualViewport, l = !ly() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function Pd(e) {
  var t = To(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function cy(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ed(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function tn(e) {
  return Jt(e).getComputedStyle(e);
}
function HN(e) {
  return ["table", "td", "th"].indexOf(Ir(e)) >= 0;
}
function wn(e) {
  return ((zn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Js(e) {
  return Ir(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ed(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e)
  );
}
function Jh(e) {
  return !ir(e) || // https://github.com/popperjs/popper-core/issues/837
  tn(e).position === "fixed" ? null : e.offsetParent;
}
function YN(e) {
  var t = /firefox/i.test(pu()), r = /Trident/i.test(pu());
  if (r && ir(e)) {
    var n = tn(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Js(e);
  for (Ed(o) && (o = o.host); ir(o) && ["html", "body"].indexOf(Ir(o)) < 0; ) {
    var a = tn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ti(e) {
  for (var t = Jt(e), r = Jh(e); r && HN(r) && tn(r).position === "static"; )
    r = Jh(r);
  return r && (Ir(r) === "html" || Ir(r) === "body" && tn(r).position === "static") ? t : r || YN(e) || t;
}
function Td(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ga(e, t, r) {
  return jn(e, ks(t, r));
}
function qN(e, t, r) {
  var n = ga(e, t, r);
  return n > r ? r : n;
}
function uy() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dy(e) {
  return Object.assign({}, uy(), e);
}
function fy(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var GN = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, dy(typeof t != "number" ? t : fy(t, ei));
};
function XN(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Mr(r.placement), l = Td(s), c = [Lt, lr].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = GN(o.padding, r), f = Pd(a), p = l === "y" ? Vt : Lt, m = l === "y" ? sr : lr, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], v = i[l] - r.rects.reference[l], b = ti(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = h / 2 - v / 2, k = d[p], w = y - f[u] - d[m], M = y / 2 - f[u] / 2 + S, P = ga(k, M, w), I = l;
    r.modifiersData[n] = (t = {}, t[I] = P, t.centerOffset = P - M, t);
  }
}
function KN(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || cy(t.elements.popper, o) && (t.elements.arrow = o));
}
const ZN = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: XN,
  effect: KN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ao(e) {
  return e.split("-")[1];
}
var JN = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function QN(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Po(r * o) / o || 0,
    y: Po(n * o) / o || 0
  };
}
function Qh(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = v.x, h = v.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), S = Lt, k = Vt, w = window;
  if (c) {
    var M = ti(r), P = "clientHeight", I = "clientWidth";
    if (M === Jt(r) && (M = wn(r), tn(M).position !== "static" && s === "absolute" && (P = "scrollHeight", I = "scrollWidth")), M = M, o === Vt || (o === Lt || o === lr) && a === za) {
      k = sr;
      var z = d && M === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= z - n.height, h *= l ? 1 : -1;
    }
    if (o === Lt || (o === Vt || o === sr) && a === za) {
      S = lr;
      var j = d && M === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[I]
      );
      p -= j - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && JN), ne = u === !0 ? QN({
    x: p,
    y: h
  }, Jt(r)) : {
    x: p,
    y: h
  };
  if (p = ne.x, h = ne.y, l) {
    var J;
    return Object.assign({}, X, (J = {}, J[k] = y ? "0" : "", J[S] = b ? "0" : "", J.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", J));
  }
  return Object.assign({}, X, (t = {}, t[k] = y ? h + "px" : "", t[S] = b ? p + "px" : "", t.transform = "", t));
}
function ej(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Mr(t.placement),
    variation: Ao(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const tj = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ej,
  data: {}
};
var Ei = {
  passive: !0
};
function rj(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = Jt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Ei);
  }), s && l.addEventListener("resize", r.update, Ei), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Ei);
    }), s && l.removeEventListener("resize", r.update, Ei);
  };
}
const nj = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: rj,
  data: {}
};
var oj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Gi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return oj[t];
  });
}
var aj = {
  start: "end",
  end: "start"
};
function em(e) {
  return e.replace(/start|end/g, function(t) {
    return aj[t];
  });
}
function Ad(e) {
  var t = Jt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Od(e) {
  return To(wn(e)).left + Ad(e).scrollLeft;
}
function ij(e, t) {
  var r = Jt(e), n = wn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = ly();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Od(e),
    y: l
  };
}
function sj(e) {
  var t, r = wn(e), n = Ad(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = jn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = jn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Od(e), l = -n.scrollTop;
  return tn(o || r).direction === "rtl" && (s += jn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Rd(e) {
  var t = tn(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function py(e) {
  return ["html", "body", "#document"].indexOf(Ir(e)) >= 0 ? e.ownerDocument.body : ir(e) && Rd(e) ? e : py(Js(e));
}
function ba(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = py(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Jt(n), i = o ? [a].concat(a.visualViewport || [], Rd(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ba(Js(i)))
  );
}
function hu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function lj(e, t) {
  var r = To(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function tm(e, t, r) {
  return t === iy ? hu(ij(e, r)) : zn(t) ? lj(t, r) : hu(sj(wn(e)));
}
function cj(e) {
  var t = ba(Js(e)), r = ["absolute", "fixed"].indexOf(tn(e).position) >= 0, n = r && ir(e) ? ti(e) : e;
  return zn(n) ? t.filter(function(o) {
    return zn(o) && cy(o, n) && Ir(o) !== "body";
  }) : [];
}
function uj(e, t, r, n) {
  var o = t === "clippingParents" ? cj(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = tm(e, c, n);
    return l.top = jn(u.top, l.top), l.right = ks(u.right, l.right), l.bottom = ks(u.bottom, l.bottom), l.left = jn(u.left, l.left), l;
  }, tm(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function hy(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Mr(n) : null, a = n ? Ao(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Vt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case sr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case lr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Lt:
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
  var c = o ? Td(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Eo:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case za:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Va(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? ON : s, c = r.rootBoundary, u = c === void 0 ? iy : c, d = r.elementContext, f = d === void 0 ? Xo : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, v = h === void 0 ? 0 : h, b = dy(typeof v != "number" ? v : fy(v, ei)), y = f === Xo ? RN : Xo, S = e.rects.popper, k = e.elements[m ? y : f], w = uj(zn(k) ? k : k.contextElement || wn(e.elements.popper), l, u, i), M = To(e.elements.reference), P = hy({
    reference: M,
    element: S,
    strategy: "absolute",
    placement: o
  }), I = hu(Object.assign({}, S, P)), z = f === Xo ? I : M, j = {
    top: w.top - z.top + b.top,
    bottom: z.bottom - w.bottom + b.bottom,
    left: w.left - z.left + b.left,
    right: z.right - w.right + b.right
  }, X = e.modifiersData.offset;
  if (f === Xo && X) {
    var ne = X[o];
    Object.keys(j).forEach(function(J) {
      var Q = [lr, sr].indexOf(J) >= 0 ? 1 : -1, ee = [Vt, sr].indexOf(J) >= 0 ? "y" : "x";
      j[J] += ne[ee] * Q;
    });
  }
  return j;
}
function dj(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? sy : l, u = Ao(n), d = u ? s ? Zh : Zh.filter(function(m) {
    return Ao(m) === u;
  }) : ei, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Va(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Mr(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function fj(e) {
  if (Mr(e) === kd)
    return [];
  var t = Gi(e);
  return [em(e), t, em(t)];
}
function pj(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, v = t.options.placement, b = Mr(v), y = b === v, S = l || (y || !m ? [Gi(v)] : fj(v)), k = [v].concat(S).reduce(function(O, B) {
      return O.concat(Mr(B) === kd ? dj(t, {
        placement: B,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : B);
    }, []), w = t.rects.reference, M = t.rects.popper, P = /* @__PURE__ */ new Map(), I = !0, z = k[0], j = 0; j < k.length; j++) {
      var X = k[j], ne = Mr(X), J = Ao(X) === Eo, Q = [Vt, sr].indexOf(ne) >= 0, ee = Q ? "width" : "height", oe = Va(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), D = Q ? J ? lr : Lt : J ? sr : Vt;
      w[ee] > M[ee] && (D = Gi(D));
      var ce = Gi(D), de = [];
      if (a && de.push(oe[ne] <= 0), s && de.push(oe[D] <= 0, oe[ce] <= 0), de.every(function(O) {
        return O;
      })) {
        z = X, I = !1;
        break;
      }
      P.set(X, de);
    }
    if (I)
      for (var F = m ? 3 : 1, N = function(B) {
        var C = k.find(function(H) {
          var A = P.get(H);
          if (A)
            return A.slice(0, B).every(function(Z) {
              return Z;
            });
        });
        if (C)
          return z = C, "break";
      }, V = F; V > 0; V--) {
        var T = N(V);
        if (T === "break")
          break;
      }
    t.placement !== z && (t.modifiersData[n]._skip = !0, t.placement = z, t.reset = !0);
  }
}
const hj = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pj,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rm(e, t, r) {
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
function nm(e) {
  return [Vt, lr, sr, Lt].some(function(t) {
    return e[t] >= 0;
  });
}
function mj(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Va(t, {
    elementContext: "reference"
  }), s = Va(t, {
    altBoundary: !0
  }), l = rm(i, n), c = rm(s, o, a), u = nm(l), d = nm(c);
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
const vj = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mj
};
function gj(e, t, r) {
  var n = Mr(e), o = [Lt, Vt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Lt, lr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function bj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = sy.reduce(function(u, d) {
    return u[d] = gj(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const yj = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bj
};
function xj(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = hy({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Sj = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xj,
  data: {}
};
function wj(e) {
  return e === "x" ? "y" : "x";
}
function Cj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, v = Va(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), b = Mr(t.placement), y = Ao(t.placement), S = !y, k = Td(b), w = wj(k), M = t.modifiersData.popperOffsets, P = t.rects.reference, I = t.rects.popper, z = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, j = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ne = {
    x: 0,
    y: 0
  };
  if (M) {
    if (a) {
      var J, Q = k === "y" ? Vt : Lt, ee = k === "y" ? sr : lr, oe = k === "y" ? "height" : "width", D = M[k], ce = D + v[Q], de = D - v[ee], F = p ? -I[oe] / 2 : 0, N = y === Eo ? P[oe] : I[oe], V = y === Eo ? -I[oe] : -P[oe], T = t.elements.arrow, O = p && T ? Pd(T) : {
        width: 0,
        height: 0
      }, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : uy(), C = B[Q], H = B[ee], A = ga(0, P[oe], O[oe]), Z = S ? P[oe] / 2 - F - A - C - j.mainAxis : N - A - C - j.mainAxis, Y = S ? -P[oe] / 2 + F + A + H + j.mainAxis : V + A + H + j.mainAxis, ae = t.elements.arrow && ti(t.elements.arrow), R = ae ? k === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Se = (J = X == null ? void 0 : X[k]) != null ? J : 0, pe = D + Z - Se - R, le = D + Y - Se, $e = ga(p ? ks(ce, pe) : ce, D, p ? jn(de, le) : de);
      M[k] = $e, ne[k] = $e - D;
    }
    if (s) {
      var ye, we = k === "x" ? Vt : Lt, pt = k === "x" ? sr : lr, ke = M[w], ut = w === "y" ? "height" : "width", rt = ke + v[we], Me = ke - v[pt], se = [Vt, Lt].indexOf(b) !== -1, Ae = (ye = X == null ? void 0 : X[w]) != null ? ye : 0, At = se ? rt : ke - P[ut] - I[ut] - Ae + j.altAxis, yt = se ? ke + P[ut] + I[ut] - Ae - j.altAxis : Me, st = p && se ? qN(At, ke, yt) : ga(p ? At : rt, ke, p ? yt : Me);
      M[w] = st, ne[w] = st - ke;
    }
    t.modifiersData[n] = ne;
  }
}
const _j = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Cj,
  requiresIfExists: ["offset"]
};
function kj(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ej(e) {
  return e === Jt(e) || !ir(e) ? Ad(e) : kj(e);
}
function Pj(e) {
  var t = e.getBoundingClientRect(), r = Po(t.width) / e.offsetWidth || 1, n = Po(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Tj(e, t, r) {
  r === void 0 && (r = !1);
  var n = ir(t), o = ir(t) && Pj(t), a = wn(t), i = To(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ir(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Rd(a)) && (s = Ej(t)), ir(t) ? (l = To(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Od(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Aj(e) {
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
function Oj(e) {
  var t = Aj(e);
  return VN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Rj(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function $j(e) {
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
var om = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function am() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Dj(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? om : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, om, a),
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
          reference: zn(s) ? ba(s) : s.contextElement ? ba(s.contextElement) : [],
          popper: ba(l)
        };
        var S = Oj($j([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(k) {
          return k.enabled;
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
          if (am(y, S)) {
            u.rects = {
              reference: Tj(y, ti(S), u.options.strategy === "fixed"),
              popper: Pd(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var k = 0; k < u.orderedModifiers.length; k++) {
              if (u.reset === !0) {
                u.reset = !1, k = -1;
                continue;
              }
              var w = u.orderedModifiers[k], M = w.fn, P = w.options, I = P === void 0 ? {} : P, z = w.name;
              typeof M == "function" && (u = M({
                state: u,
                options: I,
                name: z,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Rj(function() {
        return new Promise(function(v) {
          p.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!am(s, l))
      return p;
    p.setOptions(c).then(function(v) {
      !f && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var b = v.name, y = v.options, S = y === void 0 ? {} : y, k = v.effect;
        if (typeof k == "function") {
          var w = k({
            state: u,
            name: b,
            instance: p,
            options: S
          }), M = function() {
          };
          d.push(w || M);
        }
      });
    }
    function h() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return p;
  };
}
var Mj = [nj, Sj, tj, UN, yj, hj, _j, ZN, vj], Ij = /* @__PURE__ */ Dj({
  defaultModifiers: Mj
});
function my(e = {}) {
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
  } = e, m = be(null), h = be(null), v = be(null), b = AN(n, p), y = be(() => {
  }), S = q(() => {
    var j;
    !t || !m.current || !h.current || ((j = y.current) == null || j.call(y), v.current = Ij(m.current, h.current, {
      placement: b,
      modifiers: [
        EN,
        CN,
        wN,
        {
          ...SN,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...xN(i)
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
    }), v.current.forceUpdate(), y.current = v.current.destroy);
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
  Fe(() => () => {
    var j;
    !m.current && !h.current && ((j = v.current) == null || j.destroy(), v.current = null);
  }, []);
  const k = q(
    (j) => {
      m.current = j, S();
    },
    [S]
  ), w = q(
    (j = {}, X = null) => ({
      ...j,
      ref: xt(k, X)
    }),
    [k]
  ), M = q(
    (j) => {
      h.current = j, S();
    },
    [S]
  ), P = q(
    (j = {}, X = null) => ({
      ...j,
      ref: xt(M, X),
      style: {
        ...j.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, M, f]
  ), I = q((j = {}, X = null) => {
    const { size: ne, shadowColor: J, bg: Q, style: ee, ...oe } = j;
    return {
      ...oe,
      ref: X,
      "data-popper-arrow": "",
      style: Fj(j)
    };
  }, []), z = q(
    (j = {}, X = null) => ({
      ...j,
      ref: X,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var j;
      (j = v.current) == null || j.update();
    },
    forceUpdate() {
      var j;
      (j = v.current) == null || j.forceUpdate();
    },
    transformOrigin: kt.transformOrigin.varRef,
    referenceRef: k,
    popperRef: M,
    getPopperProps: P,
    getArrowProps: I,
    getArrowInnerProps: z,
    getReferenceProps: w
  };
}
function Fj(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function vy(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = Kt(r), i = Kt(t), [s, l] = Ye(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = wr(), f = o ?? `disclosure-${d}`, p = q(() => {
    u || l(!1), i == null || i();
  }, [u, i]), m = q(() => {
    u || l(!0), a == null || a();
  }, [u, a]), h = q(() => {
    c ? p() : m();
  }, [c, m, p]);
  function v(y = {}) {
    return {
      ...y,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(S) {
        var k;
        (k = y.onClick) == null || k.call(y, S), h();
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
    getButtonProps: v,
    getDisclosureProps: b
  };
}
function Nj(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = Kt(r), i = be({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  Fe(() => {
    if (!n)
      return;
    const s = (d) => {
      fc(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && fc(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && fc(d, t) && (i.isPointerDown = !1, o(d));
    }, u = gy(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function fc(e, t) {
  var r;
  const n = e.target;
  return n && !gy(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function gy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function jj(e) {
  const { isOpen: t, ref: r } = e, [n, o] = Ye(t), [a, i] = Ye(!1);
  return Fe(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), va(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = z5(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function Bj(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  zj,
  Vj,
  Lj,
  Wj
] = cF(), [Uj, No] = It({
  strict: !1,
  name: "MenuContext"
});
function Hj(e, ...t) {
  const r = wr(), n = e || r;
  return vt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function by(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function im(e) {
  return by(e).activeElement === e;
}
function Yj(e = {}) {
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
  } = e, v = be(null), b = be(null), y = Lj(), S = q(() => {
    requestAnimationFrame(() => {
      var T;
      (T = v.current) == null || T.focus({ preventScroll: !1 });
    });
  }, []), k = q(() => {
    const T = setTimeout(() => {
      var O;
      if (o)
        (O = o.current) == null || O.focus();
      else {
        const B = y.firstEnabled();
        B && J(B.index);
      }
    });
    ce.current.add(T);
  }, [y, o]), w = q(() => {
    const T = setTimeout(() => {
      const O = y.lastEnabled();
      O && J(O.index);
    });
    ce.current.add(T);
  }, [y]), M = q(() => {
    u == null || u(), a ? k() : S();
  }, [a, k, S, u]), { isOpen: P, onOpen: I, onClose: z, onToggle: j } = vy({
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: M
  });
  Nj({
    enabled: P && n,
    ref: v,
    handler: (T) => {
      var O;
      (O = b.current) != null && O.contains(T.target) || z();
    }
  });
  const X = my({
    ...h,
    enabled: P || m,
    placement: d,
    direction: p
  }), [ne, J] = Ye(-1);
  Mo(() => {
    P || J(-1);
  }, [P]), hN(v, {
    focusRef: b,
    visible: P,
    shouldFocus: !0
  });
  const Q = jj({ isOpen: P, ref: v }), [ee, oe] = Hj(t, "menu-button", "menu-list"), D = q(() => {
    I(), S();
  }, [I, S]), ce = be(/* @__PURE__ */ new Set([]));
  Jj(() => {
    ce.current.forEach((T) => clearTimeout(T)), ce.current.clear();
  });
  const de = q(() => {
    I(), k();
  }, [k, I]), F = q(() => {
    I(), w();
  }, [I, w]), N = q(() => {
    var T, O;
    const B = by(v.current), C = (T = v.current) == null ? void 0 : T.contains(B.activeElement);
    if (!(P && !C))
      return;
    const A = (O = y.item(ne)) == null ? void 0 : O.node;
    A == null || A.focus();
  }, [P, ne, y]), V = be(null);
  return {
    openAndFocusMenu: D,
    openAndFocusFirstItem: de,
    openAndFocusLastItem: F,
    onTransitionEnd: N,
    unstable__animationState: Q,
    descendants: y,
    popper: X,
    buttonId: ee,
    menuId: oe,
    forceUpdate: X.forceUpdate,
    orientation: "vertical",
    isOpen: P,
    onToggle: j,
    onOpen: I,
    onClose: z,
    menuRef: v,
    buttonRef: b,
    focusedIndex: ne,
    closeOnSelect: r,
    closeOnBlur: n,
    autoSelect: a,
    setFocusedIndex: J,
    isLazy: i,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: V
  };
}
function qj(e = {}, t = null) {
  const r = No(), { onToggle: n, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: i } = r, s = q(
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
    ref: xt(r.buttonRef, t, o.referenceRef),
    id: r.buttonId,
    "data-active": eo(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: Rt(e.onClick, n),
    onKeyDown: Rt(e.onKeyDown, s)
  };
}
function mu(e) {
  var t;
  return Kj(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function Gj(e = {}, t = null) {
  const r = No();
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
  } = r, f = Vj(), p = cN({
    preventDefault: (b) => b.key !== " " && mu(b.target)
  }), m = q(
    (b) => {
      if (!b.currentTarget.contains(b.target))
        return;
      const y = b.key, k = {
        Tab: (M) => M.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const M = f.nextEnabled(n);
          M && o(M.index);
        },
        ArrowUp: () => {
          const M = f.prevEnabled(n);
          M && o(M.index);
        }
      }[y];
      if (k) {
        b.preventDefault(), k(b);
        return;
      }
      const w = p((M) => {
        const P = uN(
          f.values(),
          M,
          (I) => {
            var z, j;
            return (j = (z = I == null ? void 0 : I.node) == null ? void 0 : z.textContent) != null ? j : "";
          },
          f.item(n)
        );
        if (P) {
          const I = f.indexOf(P.node);
          o(I);
        }
      });
      mu(b.target) && w(b);
    },
    [
      f,
      n,
      p,
      s,
      o
    ]
  ), h = be(!1);
  i && (h.current = !0);
  const v = Bj({
    wasSelected: h.current,
    enabled: c,
    mode: u,
    isSelected: d.present
  });
  return {
    ...e,
    ref: xt(a, t),
    children: v ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Rt(e.onKeyDown, m)
  };
}
function Xj(e = {}) {
  const { popper: t, isOpen: r } = No();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: r ? "visible" : "hidden",
      ...e.style
    }
  });
}
function yy(e = {}, t = null) {
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
  } = e, f = No(), {
    setFocusedIndex: p,
    focusedIndex: m,
    closeOnSelect: h,
    onClose: v,
    menuRef: b,
    isOpen: y,
    menuId: S,
    rafId: k
  } = f, w = be(null), M = `${S}-menuitem-${wr()}`, { index: P, register: I } = Wj({
    disabled: s && !l
  }), z = q(
    (D) => {
      r == null || r(D), !s && p(P);
    },
    [p, P, s, r]
  ), j = q(
    (D) => {
      n == null || n(D), w.current && !im(w.current) && z(D);
    },
    [z, n]
  ), X = q(
    (D) => {
      o == null || o(D), !s && p(-1);
    },
    [p, s, o]
  ), ne = q(
    (D) => {
      a == null || a(D), mu(D.currentTarget) && (c ?? h) && v();
    },
    [v, a, h, c]
  ), J = q(
    (D) => {
      i == null || i(D), p(P);
    },
    [p, i, P]
  ), Q = P === m, ee = s && !l;
  Mo(() => {
    y && (Q && !ee && w.current ? (k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
      var D;
      (D = w.current) == null || D.focus(), k.current = null;
    })) : b.current && !im(b.current) && b.current.focus({ preventScroll: !0 }));
  }, [Q, ee, b, y]);
  const oe = fN({
    onClick: ne,
    onFocus: J,
    onMouseEnter: z,
    onMouseMove: j,
    onMouseLeave: X,
    ref: xt(I, w, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...oe,
    type: u ?? oe.type,
    id: M,
    role: "menuitem",
    tabIndex: Q ? 0 : -1
  };
}
function LV(e = {}, t = null) {
  const { type: r = "radio", isChecked: n, ...o } = e;
  return {
    ...yy(o, t),
    role: `menuitem${r}`,
    "aria-checked": n
  };
}
function WV(e = {}) {
  const {
    children: t,
    type: r = "radio",
    value: n,
    defaultValue: o,
    onChange: a,
    ...i
  } = e, l = r === "radio" ? "" : [], [c, u] = hd({
    defaultValue: o ?? l,
    value: n,
    onChange: a
  }), d = q(
    (m) => {
      if (r === "radio" && typeof c == "string" && u(m), r === "checkbox" && Array.isArray(c)) {
        const h = c.includes(m) ? c.filter((v) => v !== m) : c.concat(m);
        u(h);
      }
    },
    [c, u, r]
  ), p = db(t).map((m) => {
    if (m.type.id !== "MenuItemOption")
      return m;
    const h = (b) => {
      var y, S;
      d(m.props.value), (S = (y = m.props).onClick) == null || S.call(y, b);
    }, v = r === "radio" ? m.props.value === c : c.includes(m.props.value);
    return La(m, {
      type: r,
      onClick: h,
      isChecked: v
    });
  });
  return {
    ...i,
    children: p
  };
}
function UV() {
  const { isOpen: e, onClose: t } = No();
  return { isOpen: e, onClose: t };
}
function Kj(e) {
  var t;
  if (!Zj(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function Zj(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Jj(e, t = []) {
  return Fe(
    () => () => e(),
    t
  );
}
var [Qj, ri] = It({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), eB = (e) => {
  const { children: t } = e, r = Do("Menu", e), n = Fr(e), { direction: o } = nn(), { descendants: a, ...i } = Yj({ ...n, direction: o }), s = vt(() => i, [i]), { isOpen: l, onClose: c, forceUpdate: u } = s;
  return /* @__PURE__ */ L.jsx(zj, { value: a, children: /* @__PURE__ */ L.jsx(Uj, { value: s, children: /* @__PURE__ */ L.jsx(Qj, { value: r, children: fn(t, { isOpen: l, onClose: c, forceUpdate: u }) }) }) });
};
eB.displayName = "Menu";
var xy = _e(
  (e, t) => {
    const r = ri();
    return /* @__PURE__ */ L.jsx(
      ge.span,
      {
        ref: t,
        ...e,
        __css: r.command,
        className: "chakra-menu__command"
      }
    );
  }
);
xy.displayName = "MenuCommand";
var tB = _e(
  (e, t) => {
    const { type: r, ...n } = e, o = ri(), a = n.as || r ? r ?? void 0 : "button", i = vt(
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
    return /* @__PURE__ */ L.jsx(ge.button, { ref: t, type: a, ...n, __css: i });
  }
), Sy = (e) => {
  const { className: t, children: r, ...n } = e, o = Ps.only(r), a = xu(o) ? La(o, {
    focusable: "false",
    "aria-hidden": !0,
    className: Xe("chakra-menu__icon", o.props.className)
  }) : null, i = Xe("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ L.jsx(
    ge.span,
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
Sy.displayName = "MenuIcon";
var rB = _e((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: i,
    ...s
  } = e, l = yy(s, t), u = r || o ? /* @__PURE__ */ L.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: i }) : i;
  return /* @__PURE__ */ L.jsxs(
    tB,
    {
      ...l,
      className: Xe("chakra-menu__menuitem", l.className),
      children: [
        r && /* @__PURE__ */ L.jsx(Sy, { fontSize: "0.8em", marginEnd: n, children: r }),
        u,
        o && /* @__PURE__ */ L.jsx(xy, { marginStart: a, children: o })
      ]
    }
  );
});
rB.displayName = "MenuItem";
var nB = {
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
}, oB = ge(Sn.div), aB = _e(function(t, r) {
  var n, o;
  const { rootProps: a, motionProps: i, ...s } = t, {
    isOpen: l,
    onTransitionEnd: c,
    unstable__animationState: u
  } = No(), d = Gj(s, r), f = Xj(a), p = ri();
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ L.jsx(
        oB,
        {
          variants: nB,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...i,
          className: Xe("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: c,
          onAnimationComplete: w_(
            u.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
aB.displayName = "MenuList";
var iB = _e((e, t) => {
  const r = ri();
  return /* @__PURE__ */ L.jsx(
    ge.button,
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
}), sB = _e(
  (e, t) => {
    const { children: r, as: n, ...o } = e, a = qj(o, t), i = n || iB;
    return /* @__PURE__ */ L.jsx(
      i,
      {
        ...a,
        className: Xe("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ L.jsx(
          ge.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
sB.displayName = "MenuButton";
var lB = (e) => {
  const { className: t, ...r } = e, n = ri();
  return /* @__PURE__ */ L.jsx(
    ge.hr,
    {
      "aria-orientation": "horizontal",
      className: Xe("chakra-menu__divider", t),
      ...r,
      __css: n.divider
    }
  );
};
lB.displayName = "MenuDivider";
var cB = {
  slideInBottom: {
    ...su,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...su,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...cb,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, uB = ge(Sn.section), dB = (e) => cB[e || "none"], wy = Tt(
  (e, t) => {
    const { preset: r, motionProps: n = dB(r), ...o } = e;
    return /* @__PURE__ */ L.jsx(uB, { ref: t, ...n, ...o });
  }
);
wy.displayName = "ModalTransition";
var fB = Object.defineProperty, pB = (e, t, r) => t in e ? fB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hB = (e, t, r) => (pB(e, typeof t != "symbol" ? t + "" : t, r), r), mB = class {
  constructor() {
    hB(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, vu = new mB();
function Cy(e, t) {
  const [r, n] = Ye(0);
  return Fe(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = vu.add(o);
        n(a);
      }
      return () => {
        vu.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var vB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xn = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Ti = {}, pc = 0, _y = function(e) {
  return e && (e.host || _y(e.parentNode));
}, gB = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = _y(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, bB = function(e, t, r, n) {
  var o = gB(t, Array.isArray(e) ? e : [e]);
  Ti[r] || (Ti[r] = /* @__PURE__ */ new WeakMap());
  var a = Ti[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (Xn.get(f) || 0) + 1, v = (a.get(f) || 0) + 1;
        Xn.set(f, h), a.set(f, v), i.push(f), h === 1 && m && Pi.set(f, !0), v === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), pc++, function() {
    i.forEach(function(d) {
      var f = Xn.get(d) - 1, p = a.get(d) - 1;
      Xn.set(d, f), a.set(d, p), f || (Pi.has(d) || d.removeAttribute(n), Pi.delete(d)), p || d.removeAttribute(r);
    }), pc--, pc || (Xn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Ti = {});
  };
}, yB = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || vB(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), bB(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function xB(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = be(null), u = be(null), [d, f, p] = wB(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  SB(c, t && i);
  const m = Cy(c, t), h = be(null), v = q((z) => {
    h.current = z.target;
  }, []), b = q(
    (z) => {
      z.key === "Escape" && (z.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [y, S] = Ye(!1), [k, w] = Ye(!1), M = q(
    (z = {}, j = null) => ({
      role: "dialog",
      ...z,
      ref: xt(j, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": k ? p : void 0,
      onClick: Rt(
        z.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, k, d, f, y]
  ), P = q(
    (z) => {
      z.stopPropagation(), h.current === z.target && vu.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), I = q(
    (z = {}, j = null) => ({
      ...z,
      ref: xt(j, u),
      onClick: Rt(z.onClick, P),
      onKeyDown: Rt(z.onKeyDown, b),
      onMouseDown: Rt(z.onMouseDown, v)
    }),
    [b, v, P]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: w,
    setHeaderMounted: S,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: M,
    getDialogContainerProps: I,
    index: m
  };
}
function SB(e, t) {
  const r = e.current;
  Fe(() => {
    if (!(!e.current || !t))
      return yB(e.current);
  }, [t, e, r]);
}
function wB(e, ...t) {
  const r = wr(), n = e || r;
  return vt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [CB, Hn] = It({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [_B, yn] = It({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), ky = (e) => {
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
  } = t, h = Do("Modal", t), b = {
    ...xB(t),
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
  return /* @__PURE__ */ L.jsx(_B, { value: b, children: /* @__PURE__ */ L.jsx(CB, { value: h, children: /* @__PURE__ */ L.jsx(Io, { onExitComplete: m, children: b.isOpen && /* @__PURE__ */ L.jsx(Ha, { ...r, children: n }) }) }) });
};
ky.displayName = "Modal";
var Xi = "right-scroll-bar-position", Ki = "width-before-scroll-bar", kB = "with-scroll-bars-hidden", EB = "--removed-body-scroll-bar-size", Ey = wb(), hc = function() {
}, Qs = U.forwardRef(function(e, t) {
  var r = U.useRef(null), n = U.useState({
    onScrollCapture: hc,
    onWheelCapture: hc,
    onTouchMoveCapture: hc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, y = e.gapMode, S = yb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, w = bb([r, t]), M = Or(Or({}, S), o);
  return U.createElement(
    U.Fragment,
    null,
    u && U.createElement(k, { sideCar: Ey, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: y }),
    i ? U.cloneElement(U.Children.only(s), Or(Or({}, M), { ref: w })) : U.createElement(b, Or({}, M, { className: l, ref: w }), s)
  );
});
Qs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qs.classNames = {
  fullWidth: Ki,
  zeroRight: Xi
};
var sm, PB = function() {
  if (sm)
    return sm;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function TB() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = PB();
  return t && e.setAttribute("nonce", t), e;
}
function AB(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function OB(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var RB = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = TB()) && (AB(t, r), OB(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $B = function() {
  var e = RB();
  return function(t, r) {
    U.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Py = function() {
  var e = $B(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, DB = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, mc = function(e) {
  return parseInt(e || "", 10) || 0;
}, MB = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [mc(r), mc(n), mc(o)];
}, IB = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return DB;
  var t = MB(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, FB = Py(), NB = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(kB, ` {
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
  
  .`).concat(Xi, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Ki, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Xi, " .").concat(Xi, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ki, " .").concat(Ki, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(EB, ": ").concat(s, `px;
  }
`);
}, jB = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = U.useMemo(function() {
    return IB(o);
  }, [o]);
  return U.createElement(FB, { styles: NB(a, !t, o, r ? "" : "!important") });
}, gu = !1;
if (typeof window < "u")
  try {
    var Ai = Object.defineProperty({}, "passive", {
      get: function() {
        return gu = !0, !0;
      }
    });
    window.addEventListener("test", Ai, Ai), window.removeEventListener("test", Ai, Ai);
  } catch {
    gu = !1;
  }
var Kn = gu ? { passive: !1 } : !1, BB = function(e) {
  return e.tagName === "TEXTAREA";
}, Ty = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !BB(e) && r[t] === "visible")
  );
}, zB = function(e) {
  return Ty(e, "overflowY");
}, VB = function(e) {
  return Ty(e, "overflowX");
}, lm = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Ay(e, n);
    if (o) {
      var a = Oy(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, LB = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, WB = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Ay = function(e, t) {
  return e === "v" ? zB(t) : VB(t);
}, Oy = function(e, t) {
  return e === "v" ? LB(t) : WB(t);
}, UB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, HB = function(e, t, r, n, o) {
  var a = UB(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Oy(e, s), m = p[0], h = p[1], v = p[2], b = h - v - a * m;
    (m || b) && Ay(e, s) && (d += b, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, Oi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cm = function(e) {
  return [e.deltaX, e.deltaY];
}, um = function(e) {
  return e && "current" in e ? e.current : e;
}, YB = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qB = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, GB = 0, Zn = [];
function XB(e) {
  var t = U.useRef([]), r = U.useRef([0, 0]), n = U.useRef(), o = U.useState(GB++)[0], a = U.useState(Py)[0], i = U.useRef(e);
  U.useEffect(function() {
    i.current = e;
  }, [e]), U.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = LF([e.lockRef.current], (e.shards || []).map(um), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = U.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = Oi(h), y = r.current, S = "deltaX" in h ? h.deltaX : y[0] - b[0], k = "deltaY" in h ? h.deltaY : y[1] - b[1], w, M = h.target, P = Math.abs(S) > Math.abs(k) ? "h" : "v";
    if ("touches" in h && P === "h" && M.type === "range")
      return !1;
    var I = lm(P, M);
    if (!I)
      return !0;
    if (I ? w = P : (w = P === "v" ? "h" : "v", I = lm(P, M)), !I)
      return !1;
    if (!n.current && "changedTouches" in h && (S || k) && (n.current = w), !w)
      return !0;
    var z = n.current || w;
    return HB(z, v, h, z === "h" ? S : k, !0);
  }, []), l = U.useCallback(function(h) {
    var v = h;
    if (!(!Zn.length || Zn[Zn.length - 1] !== a)) {
      var b = "deltaY" in v ? cm(v) : Oi(v), y = t.current.filter(function(w) {
        return w.name === v.type && w.target === v.target && YB(w.delta, b);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var S = (i.current.shards || []).map(um).filter(Boolean).filter(function(w) {
          return w.contains(v.target);
        }), k = S.length > 0 ? s(v, S[0]) : !i.current.noIsolation;
        k && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = U.useCallback(function(h, v, b, y) {
    var S = { name: h, delta: v, target: b, should: y };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== S;
      });
    }, 1);
  }, []), u = U.useCallback(function(h) {
    r.current = Oi(h), n.current = void 0;
  }, []), d = U.useCallback(function(h) {
    c(h.type, cm(h), h.target, s(h, e.lockRef.current));
  }, []), f = U.useCallback(function(h) {
    c(h.type, Oi(h), h.target, s(h, e.lockRef.current));
  }, []);
  U.useEffect(function() {
    return Zn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Kn), document.addEventListener("touchmove", l, Kn), document.addEventListener("touchstart", u, Kn), function() {
      Zn = Zn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Kn), document.removeEventListener("touchmove", l, Kn), document.removeEventListener("touchstart", u, Kn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return U.createElement(
    U.Fragment,
    null,
    m ? U.createElement(a, { styles: qB(o) }) : null,
    p ? U.createElement(jB, { gapMode: e.gapMode }) : null
  );
}
const KB = WF(Ey, XB);
var Ry = U.forwardRef(function(e, t) {
  return U.createElement(Qs, Or({}, e, { ref: t, sideCar: KB }));
});
Ry.classNames = Qs.classNames;
const ZB = Ry;
function $y(e) {
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
  } = yn(), [f, p] = qg();
  Fe(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = Cy(n, d);
  return /* @__PURE__ */ L.jsx(
    ey,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ L.jsx(
        ZB,
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
var JB = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = yn(), c = s(i, t), u = l(o), d = Xe("chakra-modal__content", r), f = Hn(), p = {
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
    }, { motionPreset: h } = yn();
    return /* @__PURE__ */ L.jsx($y, { children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: m,
        children: /* @__PURE__ */ L.jsx(
          wy,
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
JB.displayName = "ModalContent";
var [QB, ez] = It(), tz = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function rz(e, t) {
  var r, n;
  if (e)
    return (n = (r = tz[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function HV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = nn(), l = (t = s.components) == null ? void 0 : t.Drawer, c = rz(o, s.direction);
  return /* @__PURE__ */ L.jsx(QB, { value: { placement: c }, children: /* @__PURE__ */ L.jsx(
    ky,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var nz = ge(ub), oz = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = yn(), u = s(i, t), d = l(a), f = Xe("chakra-modal__content", r), p = Hn(), m = {
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
    }, { placement: v } = ez();
    return /* @__PURE__ */ L.jsx($y, { children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ L.jsx(
          nz,
          {
            motionProps: o,
            direction: v,
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
oz.displayName = "DrawerContent";
var az = _e(
  (e, t) => {
    const { className: r, ...n } = e, o = Xe("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Hn().footer
    };
    return /* @__PURE__ */ L.jsx(
      ge.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
az.displayName = "ModalFooter";
var iz = _e(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = yn();
    Fe(() => (a(!0), () => a(!1)), [a]);
    const i = Xe("chakra-modal__header", r), l = {
      flex: 0,
      ...Hn().header
    };
    return /* @__PURE__ */ L.jsx(
      ge.header,
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
iz.displayName = "ModalHeader";
var sz = ge(Sn.div), lz = _e(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = Xe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Hn().overlay
    }, { motionPreset: c } = yn(), d = o || (c === "none" ? {} : lb);
    return /* @__PURE__ */ L.jsx(
      sz,
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
lz.displayName = "ModalOverlay";
var cz = _e((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = yn();
  Fe(() => (a(!0), () => a(!1)), [a]);
  const i = Xe("chakra-modal__body", r), s = Hn();
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
cz.displayName = "ModalBody";
var uz = _e(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = yn(), i = Xe("chakra-modal__close-btn", n), s = Hn();
    return /* @__PURE__ */ L.jsx(
      ib,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: Rt(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
uz.displayName = "ModalCloseButton";
var nr = (e) => e ? "" : void 0, yo = (e) => e ? !0 : void 0, Cn = (...e) => e.filter(Boolean).join(" ");
function xo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function dz(e) {
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
function na(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var Zi = { width: 0, height: 0 }, Ri = (e) => e || Zi;
function Dy(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var v;
    const b = (v = n[h]) != null ? v : Zi;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...na({
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
    (h, v) => Ri(h).height > Ri(v).height ? h : v,
    Zi
  ) : n.reduce(
    (h, v) => Ri(h).width > Ri(v).width ? h : v,
    Zi
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...na({
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
    ...na({
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
    ...na({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: m, rootStyle: s, getThumbStyle: a };
}
function My(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function fz(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function pz(e) {
  const t = mz(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function Iy(e) {
  return !!e.touches;
}
function hz(e) {
  return Iy(e) && e.touches.length > 1;
}
function mz(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function vz(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function gz(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function Fy(e, t = "page") {
  return Iy(e) ? vz(e, t) : gz(e, t);
}
function bz(e) {
  return (t) => {
    const r = pz(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function yz(e, t = !1) {
  function r(o) {
    e(o, { point: Fy(o) });
  }
  return t ? bz(r) : r;
}
function Ji(e, t, r, n) {
  return fz(e, t, yz(r, t === "pointerdown"), n);
}
var xz = Object.defineProperty, Sz = (e, t, r) => t in e ? xz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fr = (e, t, r) => (Sz(e, typeof t != "symbol" ? t + "" : t, r), r), wz = class {
  constructor(e, t, r) {
    fr(this, "history", []), fr(this, "startEvent", null), fr(this, "lastEvent", null), fr(this, "lastEventInfo", null), fr(this, "handlers", {}), fr(this, "removeListeners", () => {
    }), fr(this, "threshold", 3), fr(this, "win"), fr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = vc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = Ez(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = wp();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), fr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, h$.update(this.updatePoint, !0);
    }), fr(this, "onPointerUp", (s, l) => {
      const c = vc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, hz(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: Fy(e) }, { timestamp: a } = wp();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, vc(o, this.history)), this.removeListeners = kz(
      Ji(this.win, "pointermove", this.onPointerMove),
      Ji(this.win, "pointerup", this.onPointerUp),
      Ji(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), m$.update(this.updatePoint);
  }
};
function dm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function vc(e, t) {
  return {
    point: e.point,
    delta: dm(e.point, t[t.length - 1]),
    offset: dm(e.point, t[0]),
    velocity: _z(t, 0.1)
  };
}
var Cz = (e) => e * 1e3;
function _z(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Cz(t))); )
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
function kz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function gc(e, t) {
  return Math.abs(e - t);
}
function fm(e) {
  return "x" in e && "y" in e;
}
function Ez(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return gc(e, t);
  if (fm(e) && fm(t)) {
    const r = gc(e.x, t.x), n = gc(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function Ny(e) {
  const t = be(null);
  return t.current = e, t;
}
function jy(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = be(null), u = Ny({
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(d, f) {
      c.current = null, o == null || o(d, f);
    }
  });
  Fe(() => {
    var d;
    (d = c.current) == null || d.updateHandlers(u.current);
  }), Fe(() => {
    const d = e.current;
    if (!d || !l)
      return;
    function f(p) {
      c.current = new wz(p, u.current, s);
    }
    return Ji(d, "pointerdown", f);
  }, [e, l, u, s]), Fe(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function Pz(e, t) {
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
var Tz = globalThis != null && globalThis.document ? Es : Fe;
function Az(e, t) {
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
function By({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = Ye([]), [o, a] = Ye(0);
  return Tz(() => {
    const i = e(), s = i.map(
      (l, c) => Pz(l, (u) => {
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
        Az(l, () => {
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
function Oz(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function Rz(e) {
  const [t] = By({
    observeMutation: !1,
    getNodes() {
      return [Oz(e) ? e.current : e];
    }
  });
  return t;
}
function $z(e) {
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
    "aria-valuetext": v,
    "aria-label": b,
    "aria-labelledby": y,
    name: S,
    focusThumbOnChange: k = !0,
    minStepsBetweenThumbs: w = 0,
    ...M
  } = e, P = Kt(f), I = Kt(p), z = Kt(h), j = My({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ne] = hd({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [J, Q] = Ye(!1), [ee, oe] = Ye(!1), [D, ce] = Ye(-1), de = !(u || d), F = be(X), N = X.map((G) => ma(G, t, r)), V = w * m, T = Dz(N, t, r, V), O = be({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  O.current.value = N, O.current.valueBounds = T;
  const B = N.map((G) => r - G + t), H = (j ? B : N).map((G) => Ss(G, t, r)), A = l === "vertical", Z = be(null), Y = be(null), ae = By({
    getNodes() {
      const G = Y.current, ie = G == null ? void 0 : G.querySelectorAll("[role=slider]");
      return ie ? Array.from(ie) : [];
    }
  }), R = wr(), pe = dz(c ?? R), le = q(
    (G) => {
      var ie, xe;
      if (!Z.current)
        return;
      O.current.eventSource = "pointer";
      const Ce = Z.current.getBoundingClientRect(), { clientX: He, clientY: St } = (xe = (ie = G.touches) == null ? void 0 : ie[0]) != null ? xe : G, Ze = A ? Ce.bottom - St : He - Ce.left, nt = A ? Ce.height : Ce.width;
      let Vr = Ze / nt;
      return j && (Vr = 1 - Vr), hb(Vr, t, r);
    },
    [A, j, r, t]
  ), $e = (r - t) / 10, ye = m || (r - t) / 100, we = vt(
    () => ({
      setValueAtIndex(G, ie) {
        if (!de)
          return;
        const xe = O.current.valueBounds[G];
        ie = parseFloat(lu(ie, xe.min, ye)), ie = ma(ie, xe.min, xe.max);
        const Ce = [...O.current.value];
        Ce[G] = ie, ne(Ce);
      },
      setActiveIndex: ce,
      stepUp(G, ie = ye) {
        const xe = O.current.value[G], Ce = j ? xe - ie : xe + ie;
        we.setValueAtIndex(G, Ce);
      },
      stepDown(G, ie = ye) {
        const xe = O.current.value[G], Ce = j ? xe + ie : xe - ie;
        we.setValueAtIndex(G, Ce);
      },
      reset() {
        ne(F.current);
      }
    }),
    [ye, j, ne, de]
  ), pt = q(
    (G) => {
      const ie = G.key, Ce = {
        ArrowRight: () => we.stepUp(D),
        ArrowUp: () => we.stepUp(D),
        ArrowLeft: () => we.stepDown(D),
        ArrowDown: () => we.stepDown(D),
        PageUp: () => we.stepUp(D, $e),
        PageDown: () => we.stepDown(D, $e),
        Home: () => {
          const { min: He } = T[D];
          we.setValueAtIndex(D, He);
        },
        End: () => {
          const { max: He } = T[D];
          we.setValueAtIndex(D, He);
        }
      }[ie];
      Ce && (G.preventDefault(), G.stopPropagation(), Ce(G), O.current.eventSource = "keyboard");
    },
    [we, D, $e, T]
  ), { getThumbStyle: ke, rootStyle: ut, trackStyle: rt, innerTrackStyle: Me } = vt(
    () => Dy({
      isReversed: j,
      orientation: l,
      thumbRects: ae,
      thumbPercents: H
    }),
    [j, l, H, ae]
  ), se = q(
    (G) => {
      var ie;
      const xe = G ?? D;
      if (xe !== -1 && k) {
        const Ce = pe.getThumb(xe), He = (ie = Y.current) == null ? void 0 : ie.ownerDocument.getElementById(Ce);
        He && setTimeout(() => He.focus());
      }
    },
    [k, D, pe]
  );
  Mo(() => {
    O.current.eventSource === "keyboard" && (I == null || I(O.current.value));
  }, [N, I]);
  const Ae = (G) => {
    const ie = le(G) || 0, xe = O.current.value.map(
      (nt) => Math.abs(nt - ie)
    ), Ce = Math.min(...xe);
    let He = xe.indexOf(Ce);
    const St = xe.filter(
      (nt) => nt === Ce
    );
    St.length > 1 && ie > O.current.value[He] && (He = He + St.length - 1), ce(He), we.setValueAtIndex(He, ie), se(He);
  }, At = (G) => {
    if (D == -1)
      return;
    const ie = le(G) || 0;
    ce(D), we.setValueAtIndex(D, ie), se(D);
  };
  jy(Y, {
    onPanSessionStart(G) {
      de && (Q(!0), Ae(G), P == null || P(O.current.value));
    },
    onPanSessionEnd() {
      de && (Q(!1), I == null || I(O.current.value));
    },
    onPan(G) {
      de && At(G);
    }
  });
  const yt = q(
    (G = {}, ie = null) => ({
      ...G,
      ...M,
      id: pe.root,
      ref: xt(ie, Y),
      tabIndex: -1,
      "aria-disabled": yo(u),
      "data-focused": nr(ee),
      style: { ...G.style, ...ut }
    }),
    [M, u, ee, ut, pe]
  ), st = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: xt(ie, Z),
      id: pe.track,
      "data-disabled": nr(u),
      style: { ...G.style, ...rt }
    }),
    [u, rt, pe]
  ), jr = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: ie,
      id: pe.innerTrack,
      style: {
        ...G.style,
        ...Me
      }
    }),
    [Me, pe]
  ), Br = q(
    (G, ie = null) => {
      var xe;
      const { index: Ce, ...He } = G, St = N[Ce];
      if (St == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${Ce}\`. The \`value\` or \`defaultValue\` length is : ${N.length}`
        );
      const Ze = T[Ce];
      return {
        ...He,
        ref: ie,
        role: "slider",
        tabIndex: de ? 0 : void 0,
        id: pe.getThumb(Ce),
        "data-active": nr(J && D === Ce),
        "aria-valuetext": (xe = z == null ? void 0 : z(St)) != null ? xe : v == null ? void 0 : v[Ce],
        "aria-valuemin": Ze.min,
        "aria-valuemax": Ze.max,
        "aria-valuenow": St,
        "aria-orientation": l,
        "aria-disabled": yo(u),
        "aria-readonly": yo(d),
        "aria-label": b == null ? void 0 : b[Ce],
        "aria-labelledby": b != null && b[Ce] || y == null ? void 0 : y[Ce],
        style: { ...G.style, ...ke(Ce) },
        onKeyDown: xo(G.onKeyDown, pt),
        onFocus: xo(G.onFocus, () => {
          oe(!0), ce(Ce);
        }),
        onBlur: xo(G.onBlur, () => {
          oe(!1), ce(-1);
        })
      };
    },
    [
      pe,
      N,
      T,
      de,
      J,
      D,
      z,
      v,
      l,
      u,
      d,
      b,
      y,
      ke,
      pt,
      oe
    ]
  ), zr = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: ie,
      id: pe.output,
      htmlFor: N.map((xe, Ce) => pe.getThumb(Ce)).join(" "),
      "aria-live": "off"
    }),
    [pe, N]
  ), te = q(
    (G, ie = null) => {
      const { value: xe, ...Ce } = G, He = !(xe < t || xe > r), St = xe >= N[0] && xe <= N[N.length - 1];
      let Ze = Ss(xe, t, r);
      Ze = j ? 100 - Ze : Ze;
      const nt = {
        position: "absolute",
        pointerEvents: "none",
        ...na({
          orientation: l,
          vertical: { bottom: `${Ze}%` },
          horizontal: { left: `${Ze}%` }
        })
      };
      return {
        ...Ce,
        ref: ie,
        id: pe.getMarker(G.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": nr(u),
        "data-invalid": nr(!He),
        "data-highlighted": nr(St),
        style: {
          ...G.style,
          ...nt
        }
      };
    },
    [u, j, r, t, l, N, pe]
  ), ve = q(
    (G, ie = null) => {
      const { index: xe, ...Ce } = G;
      return {
        ...Ce,
        ref: ie,
        id: pe.getInput(xe),
        type: "hidden",
        value: N[xe],
        name: Array.isArray(S) ? S[xe] : `${S}-${xe}`
      };
    },
    [S, N, pe]
  );
  return {
    state: {
      value: N,
      isFocused: ee,
      isDragging: J,
      getThumbPercent: (G) => H[G],
      getThumbMinValue: (G) => T[G].min,
      getThumbMaxValue: (G) => T[G].max
    },
    actions: we,
    getRootProps: yt,
    getTrackProps: st,
    getInnerTrackProps: jr,
    getThumbProps: Br,
    getMarkerProps: te,
    getInputProps: ve,
    getOutputProps: zr
  };
}
function Dz(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [Mz, el] = It({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [Iz, tl] = It({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), Fz = _e(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Do("Slider", n), a = Fr(n), { direction: i } = nn();
    a.direction = i;
    const { getRootProps: s, ...l } = $z(a), c = vt(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ L.jsx(Mz, { value: c, children: /* @__PURE__ */ L.jsx(Iz, { value: o, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...s({}, r),
        className: "chakra-slider",
        __css: o.container,
        children: n.children
      }
    ) }) });
  }
);
Fz.displayName = "RangeSlider";
var Nz = _e(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = el(), i = tl(), s = n(t, r);
    return /* @__PURE__ */ L.jsxs(
      ge.div,
      {
        ...s,
        className: Cn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ L.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
Nz.displayName = "RangeSliderThumb";
var jz = _e(
  function(t, r) {
    const { getTrackProps: n } = el(), o = tl(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: Cn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
jz.displayName = "RangeSliderTrack";
var Bz = _e(function(t, r) {
  const { getInnerTrackProps: n } = el(), o = tl(), a = n(t, r);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
Bz.displayName = "RangeSliderFilledTrack";
var zz = _e(
  function(t, r) {
    const { getMarkerProps: n } = el(), o = tl(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: Cn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
zz.displayName = "RangeSliderMark";
function Vz(e) {
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
    getAriaValueText: v,
    "aria-valuetext": b,
    "aria-label": y,
    "aria-labelledby": S,
    name: k,
    focusThumbOnChange: w = !0,
    ...M
  } = e, P = Kt(p), I = Kt(m), z = Kt(v), j = My({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ne] = hd({
    value: a,
    defaultValue: i ?? Wz(r, n),
    onChange: o
  }), [J, Q] = Ye(!1), [ee, oe] = Ye(!1), D = !(d || f), ce = (n - r) / 10, de = h || (n - r) / 100, F = ma(X, r, n), N = n - F + r, T = Ss(j ? N : F, r, n), O = c === "vertical", B = Ny({
    min: r,
    max: n,
    step: h,
    isDisabled: d,
    value: F,
    isInteractive: D,
    isReversed: j,
    isVertical: O,
    eventSource: null,
    focusThumbOnChange: w,
    orientation: c
  }), C = be(null), H = be(null), A = be(null), Z = wr(), Y = u ?? Z, [ae, R] = [`slider-thumb-${Y}`, `slider-track-${Y}`], Se = q(
    (te) => {
      var ve, Cr;
      if (!C.current)
        return;
      const G = B.current;
      G.eventSource = "pointer";
      const ie = C.current.getBoundingClientRect(), { clientX: xe, clientY: Ce } = (Cr = (ve = te.touches) == null ? void 0 : ve[0]) != null ? Cr : te, He = O ? ie.bottom - Ce : xe - ie.left, St = O ? ie.height : ie.width;
      let Ze = He / St;
      j && (Ze = 1 - Ze);
      let nt = hb(Ze, G.min, G.max);
      return G.step && (nt = parseFloat(
        lu(nt, G.min, G.step)
      )), nt = ma(nt, G.min, G.max), nt;
    },
    [O, j, B]
  ), pe = q(
    (te) => {
      const ve = B.current;
      ve.isInteractive && (te = parseFloat(lu(te, ve.min, de)), te = ma(te, ve.min, ve.max), ne(te));
    },
    [de, ne, B]
  ), le = vt(
    () => ({
      stepUp(te = de) {
        const ve = j ? F - te : F + te;
        pe(ve);
      },
      stepDown(te = de) {
        const ve = j ? F + te : F - te;
        pe(ve);
      },
      reset() {
        pe(i || 0);
      },
      stepTo(te) {
        pe(te);
      }
    }),
    [pe, j, F, de, i]
  ), $e = q(
    (te) => {
      const ve = B.current, G = {
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
    [le, pe, ce, B]
  ), ye = (t = z == null ? void 0 : z(F)) != null ? t : b, we = Rz(H), { getThumbStyle: pt, rootStyle: ke, trackStyle: ut, innerTrackStyle: rt } = vt(() => {
    const te = B.current, ve = we ?? { width: 0, height: 0 };
    return Dy({
      isReversed: j,
      orientation: te.orientation,
      thumbRects: [ve],
      thumbPercents: [T]
    });
  }, [j, we, T, B]), Me = q(() => {
    B.current.focusThumbOnChange && setTimeout(() => {
      var ve;
      return (ve = H.current) == null ? void 0 : ve.focus();
    });
  }, [B]);
  Mo(() => {
    const te = B.current;
    Me(), te.eventSource === "keyboard" && (I == null || I(te.value));
  }, [F, I]);
  function se(te) {
    const ve = Se(te);
    ve != null && ve !== B.current.value && ne(ve);
  }
  jy(A, {
    onPanSessionStart(te) {
      const ve = B.current;
      ve.isInteractive && (Q(!0), Me(), se(te), P == null || P(ve.value));
    },
    onPanSessionEnd() {
      const te = B.current;
      te.isInteractive && (Q(!1), I == null || I(te.value));
    },
    onPan(te) {
      B.current.isInteractive && se(te);
    }
  });
  const Ae = q(
    (te = {}, ve = null) => ({
      ...te,
      ...M,
      ref: xt(ve, A),
      tabIndex: -1,
      "aria-disabled": yo(d),
      "data-focused": nr(ee),
      style: {
        ...te.style,
        ...ke
      }
    }),
    [M, d, ee, ke]
  ), At = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: xt(ve, C),
      id: R,
      "data-disabled": nr(d),
      style: {
        ...te.style,
        ...ut
      }
    }),
    [d, R, ut]
  ), yt = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      style: {
        ...te.style,
        ...rt
      }
    }),
    [rt]
  ), st = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: xt(ve, H),
      role: "slider",
      tabIndex: D ? 0 : void 0,
      id: ae,
      "data-active": nr(J),
      "aria-valuetext": ye,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": F,
      "aria-orientation": c,
      "aria-disabled": yo(d),
      "aria-readonly": yo(f),
      "aria-label": y,
      "aria-labelledby": y ? void 0 : S,
      style: {
        ...te.style,
        ...pt(0)
      },
      onKeyDown: xo(te.onKeyDown, $e),
      onFocus: xo(te.onFocus, () => oe(!0)),
      onBlur: xo(te.onBlur, () => oe(!1))
    }),
    [
      D,
      ae,
      J,
      ye,
      r,
      n,
      F,
      c,
      d,
      f,
      y,
      S,
      pt,
      $e
    ]
  ), jr = q(
    (te, ve = null) => {
      const Cr = !(te.value < r || te.value > n), G = F >= te.value, ie = Ss(te.value, r, n), xe = {
        position: "absolute",
        pointerEvents: "none",
        ...Lz({
          orientation: c,
          vertical: {
            bottom: j ? `${100 - ie}%` : `${ie}%`
          },
          horizontal: {
            left: j ? `${100 - ie}%` : `${ie}%`
          }
        })
      };
      return {
        ...te,
        ref: ve,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": nr(d),
        "data-invalid": nr(!Cr),
        "data-highlighted": nr(G),
        style: {
          ...te.style,
          ...xe
        }
      };
    },
    [d, j, n, r, c, F]
  ), Br = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      type: "hidden",
      value: F,
      name: k
    }),
    [k, F]
  );
  return {
    state: { value: F, isFocused: ee, isDragging: J },
    actions: le,
    getRootProps: Ae,
    getTrackProps: At,
    getInnerTrackProps: yt,
    getThumbProps: st,
    getMarkerProps: jr,
    getInputProps: Br
  };
}
function Lz(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function Wz(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [Uz, rl] = It({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [Hz, nl] = It({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), Yz = _e((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Do("Slider", n), a = Fr(n), { direction: i } = nn();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = Vz(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ L.jsx(Uz, { value: c, children: /* @__PURE__ */ L.jsx(Hz, { value: o, children: /* @__PURE__ */ L.jsxs(
    ge.div,
    {
      ...u,
      className: Cn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ L.jsx("input", { ...d })
      ]
    }
  ) }) });
});
Yz.displayName = "Slider";
var qz = _e((e, t) => {
  const { getThumbProps: r } = rl(), n = nl(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: Cn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
qz.displayName = "SliderThumb";
var Gz = _e((e, t) => {
  const { getTrackProps: r } = rl(), n = nl(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: Cn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
Gz.displayName = "SliderTrack";
var Xz = _e(
  (e, t) => {
    const { getInnerTrackProps: r } = rl(), n = nl(), o = r(e, t);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...o,
        className: Cn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
Xz.displayName = "SliderFilledTrack";
var Kz = _e((e, t) => {
  const { getMarkerProps: r } = rl(), n = nl(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: Cn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
Kz.displayName = "SliderMark";
var Zz = {
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
}, bu = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, Qi = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function Jz(e = {}) {
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
    arrowPadding: v,
    modifiers: b,
    isDisabled: y,
    gutter: S,
    offset: k,
    direction: w,
    ...M
  } = e, { isOpen: P, onOpen: I, onClose: z } = vy({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: j, getPopperProps: X, getArrowInnerProps: ne, getArrowProps: J } = my({
    enabled: P,
    placement: u,
    arrowPadding: v,
    modifiers: b,
    gutter: S,
    offset: k,
    direction: w
  }), Q = wr(), oe = `tooltip-${d ?? Q}`, D = be(null), ce = be(), de = q(() => {
    ce.current && (clearTimeout(ce.current), ce.current = void 0);
  }, []), F = be(), N = q(() => {
    F.current && (clearTimeout(F.current), F.current = void 0);
  }, []), V = q(() => {
    N(), z();
  }, [z, N]), T = Qz(D, V), O = q(() => {
    if (!y && !ce.current) {
      T();
      const R = Qi(D);
      ce.current = R.setTimeout(I, t);
    }
  }, [T, y, I, t]), B = q(() => {
    de();
    const R = Qi(D);
    F.current = R.setTimeout(V, r);
  }, [r, V, de]), C = q(() => {
    P && n && B();
  }, [n, B, P]), H = q(() => {
    P && i && B();
  }, [i, B, P]), A = q(
    (R) => {
      P && R.key === "Escape" && B();
    },
    [P, B]
  );
  va(
    () => bu(D),
    "keydown",
    s ? A : void 0
  ), va(
    () => {
      const R = D.current;
      if (!R)
        return null;
      const Se = Xb(R);
      return Se.localName === "body" ? Qi(D) : Se;
    },
    "scroll",
    () => {
      P && a && V();
    },
    { passive: !0, capture: !0 }
  ), Fe(() => {
    y && (de(), P && z());
  }, [y, P, z, de]), Fe(() => () => {
    de(), N();
  }, [de, N]), va(() => D.current, "pointerleave", B);
  const Z = q(
    (R = {}, Se = null) => ({
      ...R,
      ref: xt(D, Se, j),
      onPointerEnter: Rt(R.onPointerEnter, (le) => {
        le.pointerType !== "touch" && O();
      }),
      onClick: Rt(R.onClick, C),
      onPointerDown: Rt(R.onPointerDown, H),
      onFocus: Rt(R.onFocus, O),
      onBlur: Rt(R.onBlur, B),
      "aria-describedby": P ? oe : void 0
    }),
    [
      O,
      B,
      H,
      P,
      oe,
      C,
      j
    ]
  ), Y = q(
    (R = {}, Se = null) => X(
      {
        ...R,
        style: {
          ...R.style,
          [kt.arrowSize.var]: m ? `${m}px` : void 0,
          [kt.arrowShadowColor.var]: h
        }
      },
      Se
    ),
    [X, m, h]
  ), ae = q(
    (R = {}, Se = null) => {
      const pe = {
        ...R.style,
        position: "relative",
        transformOrigin: kt.transformOrigin.varRef
      };
      return {
        ref: Se,
        ...M,
        ...R,
        id: oe,
        role: "tooltip",
        style: pe
      };
    },
    [M, oe]
  );
  return {
    isOpen: P,
    show: O,
    hide: B,
    getTriggerProps: Z,
    getTooltipProps: ae,
    getTooltipPositionerProps: Y,
    getArrowProps: J,
    getArrowInnerProps: ne
  };
}
var bc = "chakra-ui:close-tooltip";
function Qz(e, t) {
  return Fe(() => {
    const r = bu(e);
    return r.addEventListener(bc, t), () => r.removeEventListener(bc, t);
  }, [t, e]), () => {
    const r = bu(e), n = Qi(e);
    r.dispatchEvent(new n.CustomEvent(bc));
  };
}
function eV(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function tV(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var rV = ge(Sn.div), nV = _e((e, t) => {
  var r, n;
  const o = $o("Tooltip", e), a = Fr(e), i = nn(), {
    children: s,
    label: l,
    shouldWrapChildren: c,
    "aria-label": u,
    hasArrow: d,
    bg: f,
    portalProps: p,
    background: m,
    backgroundColor: h,
    bgColor: v,
    motionProps: b,
    ...y
  } = a, S = (n = (r = m ?? h) != null ? r : f) != null ? n : v;
  if (S) {
    o.bg = S;
    const X = uv(i, "colors", S);
    o[kt.arrowBg.var] = X;
  }
  const k = Jz({ ...y, direction: i.direction }), w = typeof s == "string" || c;
  let M;
  if (w)
    M = /* @__PURE__ */ L.jsx(
      ge.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...k.getTriggerProps(),
        children: s
      }
    );
  else {
    const X = Ps.only(s);
    M = La(
      X,
      k.getTriggerProps(X.props, X.ref)
    );
  }
  const P = !!u, I = k.getTooltipProps({}, t), z = P ? eV(I, ["role", "id"]) : I, j = tV(I, ["role", "id"]);
  return l ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
    M,
    /* @__PURE__ */ L.jsx(Io, { children: k.isOpen && /* @__PURE__ */ L.jsx(Ha, { ...p, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...k.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ L.jsxs(
          rV,
          {
            variants: Zz,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...b,
            ...z,
            __css: o,
            children: [
              l,
              P && /* @__PURE__ */ L.jsx(ge.span, { srOnly: !0, ...j, children: u }),
              d && /* @__PURE__ */ L.jsx(
                ge.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ L.jsx(
                    ge.div,
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
  ] }) : /* @__PURE__ */ L.jsx(L.Fragment, { children: s });
});
nV.displayName = "Tooltip";
const YV = Tt(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ L.jsx(Fm, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  zV as $,
  YV as A,
  lV as B,
  cV as C,
  Bn as D,
  RF as E,
  Fm as F,
  lz as G,
  JB as H,
  iz as I,
  uz as J,
  cz as K,
  az as L,
  ky as M,
  Vw as N,
  eB as O,
  oN as P,
  sB as Q,
  aB as R,
  P0 as S,
  Ca as T,
  rB as U,
  lB as V,
  r_ as W,
  gV as X,
  t_ as Y,
  nn as Z,
  _0 as _,
  HS as a,
  Av as a$,
  Do as a0,
  nN as a1,
  $o as a2,
  QI as a3,
  Ks as a4,
  ge as a5,
  bV as a6,
  Sy as a7,
  NV as a8,
  BV as a9,
  m$ as aA,
  OV as aB,
  DV as aC,
  h$ as aD,
  wp as aE,
  RV as aF,
  SV as aG,
  vV as aH,
  i$ as aI,
  c$ as aJ,
  Mk as aK,
  d_ as aL,
  B$ as aM,
  Kt as aN,
  IV as aO,
  Mo as aP,
  Sn as aQ,
  fn as aR,
  _e as aS,
  It as aT,
  Xe as aU,
  Fr as aV,
  ib as aW,
  Io as aX,
  Ha as aY,
  nv as aZ,
  kV as a_,
  xF as aa,
  EF as ab,
  _F as ac,
  tN as ad,
  Ts as ae,
  Ij as af,
  Yz as ag,
  Gz as ah,
  Xz as ai,
  qz as aj,
  Fz as ak,
  jz as al,
  Bz as am,
  Nz as an,
  HV as ao,
  oz as ap,
  sV as aq,
  Nu as ar,
  pV as as,
  mV as at,
  e_ as au,
  Ta as av,
  rv as aw,
  Rv as ax,
  zt as ay,
  $V as az,
  Jn as b,
  Yj as b$,
  t$ as b0,
  cF as b1,
  hd as b2,
  xt as b3,
  Rt as b4,
  xV as b5,
  au as b6,
  Kr as b7,
  eo as b8,
  db as b9,
  wV as bA,
  me as bB,
  yV as bC,
  fN as bD,
  Ke as bE,
  kE as bF,
  _E as bG,
  CV as bH,
  RE as bI,
  wE as bJ,
  FE as bK,
  EV as bL,
  Gw as bM,
  Kw as bN,
  ey as bO,
  kF as bP,
  SF as bQ,
  pb as bR,
  fb as bS,
  CF as bT,
  rN as bU,
  ay as bV,
  ry as bW,
  sN as bX,
  xy as bY,
  zj as bZ,
  Uj as b_,
  jV as ba,
  PF as bb,
  w_ as bc,
  ma as bd,
  AF as be,
  OF as bf,
  va as bg,
  Cl as bh,
  AV as bi,
  TV as bj,
  J5 as bk,
  y_ as bl,
  ny as bm,
  aN as bn,
  ri as bo,
  WV as bp,
  LV as bq,
  tB as br,
  vy as bs,
  my as bt,
  jj as bu,
  hN as bv,
  VV as bw,
  Bj as bx,
  kt as by,
  Fo as bz,
  YS as c,
  k_ as c$,
  qj as c0,
  No as c1,
  Wj as c2,
  Lj as c3,
  Vj as c4,
  yy as c5,
  Gj as c6,
  Xj as c7,
  UV as c8,
  _B as c9,
  z_ as cA,
  ck as cB,
  _V as cC,
  Mc as cD,
  V_ as cE,
  Ck as cF,
  as as cG,
  uv as cH,
  Dk as cI,
  av as cJ,
  L_ as cK,
  Pk as cL,
  rr as cM,
  W_ as cN,
  X_ as cO,
  aa as cP,
  kk as cQ,
  cv as cR,
  js as cS,
  jk as cT,
  K_ as cU,
  tk as cV,
  Je as cW,
  zu as cX,
  Z_ as cY,
  lk as cZ,
  sk as c_,
  $y as ca,
  ez as cb,
  xB as cc,
  yn as cd,
  Cy as ce,
  Hn as cf,
  u_ as cg,
  j$ as ch,
  zz as ci,
  Mz as cj,
  Kz as ck,
  Uz as cl,
  $z as cm,
  el as cn,
  tl as co,
  Vz as cp,
  rl as cq,
  nl as cr,
  E$ as cs,
  Ll as ct,
  F$ as cu,
  MV as cv,
  ik as cw,
  Fi as cx,
  je as cy,
  An as cz,
  Dn as d,
  J_ as d0,
  Q_ as d1,
  ek as d2,
  zk as d3,
  Bk as d4,
  PV as d5,
  Jz as d6,
  dF as d7,
  pF as d8,
  ub as d9,
  mF as da,
  lb as db,
  iu as dc,
  cb as dd,
  su as de,
  qS as e,
  uV as f,
  GS as g,
  kc as h,
  bm as i,
  e1 as j,
  dV as k,
  L as l,
  Xw as m,
  Ln as n,
  iV as o,
  nV as p,
  oy as q,
  xa as r,
  wc as s,
  fV as t,
  hV as u,
  v1 as v,
  wm as w,
  xc as x,
  w0 as y,
  Su as z
};
