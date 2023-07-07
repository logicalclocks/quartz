import * as L from "react";
import Pt, { createContext as Or, forwardRef as kt, createElement as Zt, Fragment as Lh, useContext as ft, useLayoutEffect as Qc, useEffect as Xe, useState as St, useRef as Re, useMemo as It, useCallback as ce, useInsertionEffect as Wh, useId as mn, cloneElement as Hh, Children as Uh, isValidElement as Iy, PureComponent as jy } from "react";
import { createPortal as Yh } from "react-dom";
var Qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ps(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function hs(e) {
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
var rc = { exports: {} }, Oo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xd;
function By() {
  if (xd)
    return Oo;
  xd = 1;
  var e = Pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Oo.Fragment = r, Oo.jsx = i, Oo.jsxs = i, Oo;
}
var Do = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function zy() {
  return Sd || (Sd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function g(b) {
      if (b === null || typeof b != "object")
        return null;
      var N = m && b[m] || b[h];
      return typeof N == "function" ? N : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(b) {
      {
        for (var N = arguments.length, G = new Array(N > 1 ? N - 1 : 0), fe = 1; fe < N; fe++)
          G[fe - 1] = arguments[fe];
        w("error", b, G);
      }
    }
    function w(b, N, G) {
      {
        var fe = y.ReactDebugCurrentFrame, $e = fe.getStackAddendum();
        $e !== "" && (N += "%s", G = G.concat([$e]));
        var Te = G.map(function(ke) {
          return String(ke);
        });
        Te.unshift("Warning: " + N), Function.prototype.apply.call(console[b], console, Te);
      }
    }
    var E = !1, _ = !1, j = !1, D = !1, z = !1, V;
    V = Symbol.for("react.module.reference");
    function B(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === a || z || b === o || b === c || b === u || D || b === p || E || _ || j || typeof b == "object" && b !== null && (b.$$typeof === f || b.$$typeof === d || b.$$typeof === i || b.$$typeof === s || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === V || b.getModuleId !== void 0));
    }
    function X(b, N, G) {
      var fe = b.displayName;
      if (fe)
        return fe;
      var $e = N.displayName || N.name || "";
      return $e !== "" ? G + "(" + $e + ")" : G;
    }
    function ae(b) {
      return b.displayName || "Context";
    }
    function te(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
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
      if (typeof b == "object")
        switch (b.$$typeof) {
          case s:
            var N = b;
            return ae(N) + ".Consumer";
          case i:
            var G = b;
            return ae(G._context) + ".Provider";
          case l:
            return X(b, b.render, "ForwardRef");
          case d:
            var fe = b.displayName || null;
            return fe !== null ? fe : te(b.type) || "Memo";
          case f: {
            var $e = b, Te = $e._payload, ke = $e._init;
            try {
              return te(ke(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ee = 0, ie, K, ye, me, O, M, F;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function R() {
      {
        if (ee === 0) {
          ie = console.log, K = console.info, ye = console.warn, me = console.error, O = console.group, M = console.groupCollapsed, F = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        ee++;
      }
    }
    function I() {
      {
        if (ee--, ee === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, b, {
              value: ie
            }),
            info: Q({}, b, {
              value: K
            }),
            warn: Q({}, b, {
              value: ye
            }),
            error: Q({}, b, {
              value: me
            }),
            group: Q({}, b, {
              value: O
            }),
            groupCollapsed: Q({}, b, {
              value: M
            }),
            groupEnd: Q({}, b, {
              value: F
            })
          });
        }
        ee < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = y.ReactCurrentDispatcher, W;
    function $(b, N, G) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch ($e) {
            var fe = $e.stack.trim().match(/\n( *(at )?)/);
            W = fe && fe[1] || "";
          }
        return `
` + W + b;
      }
    }
    var q = !1, H;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      H = new re();
    }
    function P(b, N) {
      if (!b || q)
        return "";
      {
        var G = H.get(b);
        if (G !== void 0)
          return G;
      }
      var fe;
      q = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = S.current, S.current = null, R();
      try {
        if (N) {
          var ke = function() {
            throw Error();
          };
          if (Object.defineProperty(ke.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ke, []);
            } catch (Rt) {
              fe = Rt;
            }
            Reflect.construct(b, [], ke);
          } else {
            try {
              ke.call();
            } catch (Rt) {
              fe = Rt;
            }
            b.call(ke.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            fe = Rt;
          }
          b();
        }
      } catch (Rt) {
        if (Rt && fe && typeof Rt.stack == "string") {
          for (var Ce = Rt.stack.split(`
`), gt = fe.stack.split(`
`), tt = Ce.length - 1, it = gt.length - 1; tt >= 1 && it >= 0 && Ce[tt] !== gt[it]; )
            it--;
          for (; tt >= 1 && it >= 0; tt--, it--)
            if (Ce[tt] !== gt[it]) {
              if (tt !== 1 || it !== 1)
                do
                  if (tt--, it--, it < 0 || Ce[tt] !== gt[it]) {
                    var $t = `
` + Ce[tt].replace(" at new ", " at ");
                    return b.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", b.displayName)), typeof b == "function" && H.set(b, $t), $t;
                  }
                while (tt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        q = !1, S.current = Te, I(), Error.prepareStackTrace = $e;
      }
      var xr = b ? b.displayName || b.name : "", Xa = xr ? $(xr) : "";
      return typeof b == "function" && H.set(b, Xa), Xa;
    }
    function be(b, N, G) {
      return P(b, !1);
    }
    function de(b) {
      var N = b.prototype;
      return !!(N && N.isReactComponent);
    }
    function se(b, N, G) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return P(b, de(b));
      if (typeof b == "string")
        return $(b);
      switch (b) {
        case c:
          return $("Suspense");
        case u:
          return $("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return be(b.render);
          case d:
            return se(b.type, N, G);
          case f: {
            var fe = b, $e = fe._payload, Te = fe._init;
            try {
              return se(Te($e), N, G);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, ve = {}, xe = y.ReactDebugCurrentFrame;
    function ct(b) {
      if (b) {
        var N = b._owner, G = se(b.type, b._source, N ? N.type : null);
        xe.setExtraStackFrame(G);
      } else
        xe.setExtraStackFrame(null);
    }
    function we(b, N, G, fe, $e) {
      {
        var Te = Function.call.bind(Ae);
        for (var ke in b)
          if (Te(b, ke)) {
            var Ce = void 0;
            try {
              if (typeof b[ke] != "function") {
                var gt = Error((fe || "React class") + ": " + G + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Ce = b[ke](N, ke, fe, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ce = tt;
            }
            Ce && !(Ce instanceof Error) && (ct($e), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", G, ke, typeof Ce), ct(null)), Ce instanceof Error && !(Ce.message in ve) && (ve[Ce.message] = !0, ct($e), x("Failed %s type: %s", G, Ce.message), ct(null));
          }
      }
    }
    var st = Array.isArray;
    function Qe(b) {
      return st(b);
    }
    function Oe(b) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, G = N && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return G;
      }
    }
    function oe(b) {
      try {
        return Ee(b), !1;
      } catch {
        return !0;
      }
    }
    function Ee(b) {
      return "" + b;
    }
    function _t(b) {
      if (oe(b))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oe(b)), Ee(b);
    }
    var mt = y.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mr, Fr, Ir;
    Ir = {};
    function Z(b) {
      if (Ae.call(b, "ref")) {
        var N = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function he(b) {
      if (Ae.call(b, "key")) {
        var N = Object.getOwnPropertyDescriptor(b, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function br(b, N) {
      if (typeof b.ref == "string" && mt.current && N && mt.current.stateNode !== N) {
        var G = te(mt.current.type);
        Ir[G] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(mt.current.type), b.ref), Ir[G] = !0);
      }
    }
    function U(b, N) {
      {
        var G = function() {
          Mr || (Mr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        G.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: G,
          configurable: !0
        });
      }
    }
    function ne(b, N) {
      {
        var G = function() {
          Fr || (Fr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        G.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: G,
          configurable: !0
        });
      }
    }
    var ge = function(b, N, G, fe, $e, Te, ke) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: N,
        ref: G,
        props: ke,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return Ce._store = {}, Object.defineProperty(Ce._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ce, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function Se(b, N, G, fe, $e) {
      {
        var Te, ke = {}, Ce = null, gt = null;
        G !== void 0 && (_t(G), Ce = "" + G), he(N) && (_t(N.key), Ce = "" + N.key), Z(N) && (gt = N.ref, br(N, $e));
        for (Te in N)
          Ae.call(N, Te) && !at.hasOwnProperty(Te) && (ke[Te] = N[Te]);
        if (b && b.defaultProps) {
          var tt = b.defaultProps;
          for (Te in tt)
            ke[Te] === void 0 && (ke[Te] = tt[Te]);
        }
        if (Ce || gt) {
          var it = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          Ce && U(ke, it), gt && ne(ke, it);
        }
        return ge(b, Ce, gt, $e, fe, mt.current, ke);
      }
    }
    var We = y.ReactCurrentOwner, vt = y.ReactDebugCurrentFrame;
    function Ge(b) {
      if (b) {
        var N = b._owner, G = se(b.type, b._source, N ? N.type : null);
        vt.setExtraStackFrame(G);
      } else
        vt.setExtraStackFrame(null);
    }
    var et;
    et = !1;
    function jr(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function yr() {
      {
        if (We.current) {
          var b = te(We.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Ws(b) {
      {
        if (b !== void 0) {
          var N = b.fileName.replace(/^.*[\\\/]/, ""), G = b.lineNumber;
          return `

Check your code at ` + N + ":" + G + ".";
        }
        return "";
      }
    }
    var Ua = {};
    function Hs(b) {
      {
        var N = yr();
        if (!N) {
          var G = typeof b == "string" ? b : b.displayName || b.name;
          G && (N = `

Check the top-level render call using <` + G + ">.");
        }
        return N;
      }
    }
    function Ya(b, N) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var G = Hs(N);
        if (Ua[G])
          return;
        Ua[G] = !0;
        var fe = "";
        b && b._owner && b._owner !== We.current && (fe = " It was passed a child from " + te(b._owner.type) + "."), Ge(b), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, fe), Ge(null);
      }
    }
    function Ga(b, N) {
      {
        if (typeof b != "object")
          return;
        if (Qe(b))
          for (var G = 0; G < b.length; G++) {
            var fe = b[G];
            jr(fe) && Ya(fe, N);
          }
        else if (jr(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var $e = g(b);
          if (typeof $e == "function" && $e !== b.entries)
            for (var Te = $e.call(b), ke; !(ke = Te.next()).done; )
              jr(ke.value) && Ya(ke.value, N);
        }
      }
    }
    function ar(b) {
      {
        var N = b.type;
        if (N == null || typeof N == "string")
          return;
        var G;
        if (typeof N == "function")
          G = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === d))
          G = N.propTypes;
        else
          return;
        if (G) {
          var fe = te(N);
          we(G, b.props, "prop", fe, b);
        } else if (N.PropTypes !== void 0 && !et) {
          et = !0;
          var $e = te(N);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Us(b) {
      {
        for (var N = Object.keys(b.props), G = 0; G < N.length; G++) {
          var fe = N[G];
          if (fe !== "children" && fe !== "key") {
            Ge(b), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), Ge(null);
            break;
          }
        }
        b.ref !== null && (Ge(b), x("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    function qa(b, N, G, fe, $e, Te) {
      {
        var ke = B(b);
        if (!ke) {
          var Ce = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = Ws($e);
          gt ? Ce += gt : Ce += yr();
          var tt;
          b === null ? tt = "null" : Qe(b) ? tt = "array" : b !== void 0 && b.$$typeof === t ? (tt = "<" + (te(b.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof b, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Ce);
        }
        var it = Se(b, N, G, $e, Te);
        if (it == null)
          return it;
        if (ke) {
          var $t = N.children;
          if ($t !== void 0)
            if (fe)
              if (Qe($t)) {
                for (var xr = 0; xr < $t.length; xr++)
                  Ga($t[xr], b);
                Object.freeze && Object.freeze($t);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ga($t, b);
        }
        return b === n ? Us(it) : ar(it), it;
      }
    }
    function Ys(b, N, G) {
      return qa(b, N, G, !0);
    }
    function Gs(b, N, G) {
      return qa(b, N, G, !1);
    }
    var qs = Gs, en = Ys;
    Do.Fragment = n, Do.jsx = qs, Do.jsxs = en;
  }()), Do;
}
process.env.NODE_ENV === "production" ? rc.exports = By() : rc.exports = zy();
var Y = rc.exports, ua = {};
function da(e) {
  "@babel/helpers - typeof";
  return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, da(e);
}
function Vy(e, t) {
  if (da(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (da(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ny(e) {
  var t = Vy(e, "string");
  return da(t) === "symbol" ? t : String(t);
}
function eu(e, t, r) {
  return t = Ny(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Gh(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ly = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qh = Gh(
  function(e) {
    return Ly.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function nc(e, t) {
  return nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, nc(e, t);
}
function Wy(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nc(e, t);
}
function Hy(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Uy(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t;
}
var Yy = /* @__PURE__ */ function() {
  function e(r) {
    this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.before = null;
  }
  var t = e.prototype;
  return t.insert = function(n) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var o = Uy(this), a;
      this.tags.length === 0 ? a = this.before : a = this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(o, a), this.tags.push(o);
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Hy(i);
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
function Gy(e) {
  function t(F, T, R, I, S) {
    for (var W = 0, $ = 0, q = 0, H = 0, re, P, be = 0, de = 0, se, Ae = se = re = 0, ve = 0, xe = 0, ct = 0, we = 0, st = R.length, Qe = st - 1, Oe, oe = "", Ee = "", _t = "", mt = "", at; ve < st; ) {
      if (P = R.charCodeAt(ve), ve === Qe && $ + H + q + W !== 0 && ($ !== 0 && (P = $ === 47 ? 10 : 47), H = q = W = 0, st++, Qe++), $ + H + q + W === 0) {
        if (ve === Qe && (0 < xe && (oe = oe.replace(f, "")), 0 < oe.trim().length)) {
          switch (P) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              oe += R.charAt(ve);
          }
          P = 59;
        }
        switch (P) {
          case 123:
            for (oe = oe.trim(), re = oe.charCodeAt(0), se = 1, we = ++ve; ve < st; ) {
              switch (P = R.charCodeAt(ve)) {
                case 123:
                  se++;
                  break;
                case 125:
                  se--;
                  break;
                case 47:
                  switch (P = R.charCodeAt(ve + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ae = ve + 1; Ae < Qe; ++Ae)
                          switch (R.charCodeAt(Ae)) {
                            case 47:
                              if (P === 42 && R.charCodeAt(Ae - 1) === 42 && ve + 2 !== Ae) {
                                ve = Ae + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (P === 47) {
                                ve = Ae + 1;
                                break e;
                              }
                          }
                        ve = Ae;
                      }
                  }
                  break;
                case 91:
                  P++;
                case 40:
                  P++;
                case 34:
                case 39:
                  for (; ve++ < Qe && R.charCodeAt(ve) !== P; )
                    ;
              }
              if (se === 0)
                break;
              ve++;
            }
            switch (se = R.substring(we, ve), re === 0 && (re = (oe = oe.replace(d, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < xe && (oe = oe.replace(f, "")), P = oe.charCodeAt(1), P) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    xe = T;
                    break;
                  default:
                    xe = ie;
                }
                if (se = t(T, xe, se, P, S + 1), we = se.length, 0 < ye && (xe = r(ie, oe, ct), at = s(3, se, xe, T, te, ae, we, P, S, I), oe = xe.join(""), at !== void 0 && (we = (se = at.trim()).length) === 0 && (P = 0, se = "")), 0 < we)
                  switch (P) {
                    case 115:
                      oe = oe.replace(j, i);
                    case 100:
                    case 109:
                    case 45:
                      se = oe + "{" + se + "}";
                      break;
                    case 107:
                      oe = oe.replace(x, "$1 $2"), se = oe + "{" + se + "}", se = ee === 1 || ee === 2 && a("@" + se, 3) ? "@-webkit-" + se + "@" + se : "@" + se;
                      break;
                    default:
                      se = oe + se, I === 112 && (se = (Ee += se, ""));
                  }
                else
                  se = "";
                break;
              default:
                se = t(T, r(T, oe, ct), se, I, S + 1);
            }
            _t += se, se = ct = xe = Ae = re = 0, oe = "", P = R.charCodeAt(++ve);
            break;
          case 125:
          case 59:
            if (oe = (0 < xe ? oe.replace(f, "") : oe).trim(), 1 < (we = oe.length))
              switch (Ae === 0 && (re = oe.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (we = (oe = oe.replace(" ", ":")).length), 0 < ye && (at = s(1, oe, T, F, te, ae, Ee.length, I, S, I)) !== void 0 && (we = (oe = at.trim()).length) === 0 && (oe = "\0\0"), re = oe.charCodeAt(0), P = oe.charCodeAt(1), re) {
                case 0:
                  break;
                case 64:
                  if (P === 105 || P === 99) {
                    mt += oe + R.charAt(ve);
                    break;
                  }
                default:
                  oe.charCodeAt(we - 1) !== 58 && (Ee += o(oe, re, P, oe.charCodeAt(2)));
              }
            ct = xe = Ae = re = 0, oe = "", P = R.charCodeAt(++ve);
        }
      }
      switch (P) {
        case 13:
        case 10:
          $ === 47 ? $ = 0 : 1 + re === 0 && I !== 107 && 0 < oe.length && (xe = 1, oe += "\0"), 0 < ye * O && s(0, oe, T, F, te, ae, Ee.length, I, S, I), ae = 1, te++;
          break;
        case 59:
        case 125:
          if ($ + H + q + W === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, Oe = R.charAt(ve), P) {
            case 9:
            case 32:
              if (H + W + $ === 0)
                switch (be) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Oe = "";
                    break;
                  default:
                    P !== 32 && (Oe = " ");
                }
              break;
            case 0:
              Oe = "\\0";
              break;
            case 12:
              Oe = "\\f";
              break;
            case 11:
              Oe = "\\v";
              break;
            case 38:
              H + $ + W === 0 && (xe = ct = 1, Oe = "\f" + Oe);
              break;
            case 108:
              if (H + $ + W + Q === 0 && 0 < Ae)
                switch (ve - Ae) {
                  case 2:
                    be === 112 && R.charCodeAt(ve - 3) === 58 && (Q = be);
                  case 8:
                    de === 111 && (Q = de);
                }
              break;
            case 58:
              H + $ + W === 0 && (Ae = ve);
              break;
            case 44:
              $ + q + H + W === 0 && (xe = 1, Oe += "\r");
              break;
            case 34:
            case 39:
              $ === 0 && (H = H === P ? 0 : H === 0 ? P : H);
              break;
            case 91:
              H + $ + q === 0 && W++;
              break;
            case 93:
              H + $ + q === 0 && W--;
              break;
            case 41:
              H + $ + W === 0 && q--;
              break;
            case 40:
              if (H + $ + W === 0) {
                if (re === 0)
                  switch (2 * be + 3 * de) {
                    case 533:
                      break;
                    default:
                      re = 1;
                  }
                q++;
              }
              break;
            case 64:
              $ + q + H + W + Ae + se === 0 && (se = 1);
              break;
            case 42:
            case 47:
              if (!(0 < H + W + q))
                switch ($) {
                  case 0:
                    switch (2 * P + 3 * R.charCodeAt(ve + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        we = ve, $ = 42;
                    }
                    break;
                  case 42:
                    P === 47 && be === 42 && we + 2 !== ve && (R.charCodeAt(we + 2) === 33 && (Ee += R.substring(we, ve + 1)), Oe = "", $ = 0);
                }
          }
          $ === 0 && (oe += Oe);
      }
      de = be, be = P, ve++;
    }
    if (we = Ee.length, 0 < we) {
      if (xe = T, 0 < ye && (at = s(2, Ee, xe, F, te, ae, we, I, S, I), at !== void 0 && (Ee = at).length === 0))
        return mt + Ee + _t;
      if (Ee = xe.join(",") + "{" + Ee + "}", ee * Q !== 0) {
        switch (ee !== 2 || a(Ee, 2) || (Q = 0), Q) {
          case 111:
            Ee = Ee.replace(E, ":-moz-$1") + Ee;
            break;
          case 112:
            Ee = Ee.replace(w, "::-webkit-input-$1") + Ee.replace(w, "::-moz-$1") + Ee.replace(w, ":-ms-input-$1") + Ee;
        }
        Q = 0;
      }
    }
    return mt + Ee + _t;
  }
  function r(F, T, R) {
    var I = T.trim().split(g);
    T = I;
    var S = I.length, W = F.length;
    switch (W) {
      case 0:
      case 1:
        var $ = 0;
        for (F = W === 0 ? "" : F[0] + " "; $ < S; ++$)
          T[$] = n(F, T[$], R).trim();
        break;
      default:
        var q = $ = 0;
        for (T = []; $ < S; ++$)
          for (var H = 0; H < W; ++H)
            T[q++] = n(F[H] + " ", I[$], R).trim();
    }
    return T;
  }
  function n(F, T, R) {
    var I = T.charCodeAt(0);
    switch (33 > I && (I = (T = T.trim()).charCodeAt(0)), I) {
      case 38:
        return T.replace(y, "$1" + F.trim());
      case 58:
        return F.trim() + T.replace(y, "$1" + F.trim());
      default:
        if (0 < 1 * R && 0 < T.indexOf("\f"))
          return T.replace(y, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + T;
  }
  function o(F, T, R, I) {
    var S = F + ";", W = 2 * T + 3 * R + 4 * I;
    if (W === 944) {
      F = S.indexOf(":", 9) + 1;
      var $ = S.substring(F, S.length - 1).trim();
      return $ = S.substring(0, F).trim() + $ + ";", ee === 1 || ee === 2 && a($, 1) ? "-webkit-" + $ + $ : $;
    }
    if (ee === 0 || ee === 2 && !a(S, 1))
      return S;
    switch (W) {
      case 1015:
        return S.charCodeAt(10) === 97 ? "-webkit-" + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? "-webkit-" + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? "-webkit-" + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + S + S;
      case 978:
        return "-webkit-" + S + "-moz-" + S + S;
      case 1019:
      case 983:
        return "-webkit-" + S + "-moz-" + S + "-ms-" + S + S;
      case 883:
        if (S.charCodeAt(8) === 45)
          return "-webkit-" + S + S;
        if (0 < S.indexOf("image-set(", 11))
          return S.replace(X, "$1-webkit-$2") + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + S.replace("-grow", "") + "-webkit-" + S + "-ms-" + S.replace("grow", "positive") + S;
            case 115:
              return "-webkit-" + S + "-ms-" + S.replace("shrink", "negative") + S;
            case 98:
              return "-webkit-" + S + "-ms-" + S.replace("basis", "preferred-size") + S;
          }
        return "-webkit-" + S + "-ms-" + S + S;
      case 964:
        return "-webkit-" + S + "-ms-flex-" + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99)
          break;
        return $ = S.substring(S.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + $ + "-webkit-" + S + "-ms-flex-pack" + $ + S;
      case 1005:
        return m.test(S) ? S.replace(p, ":-webkit-") + S.replace(p, ":-moz-") + S : S;
      case 1e3:
        switch ($ = S.substring(13).trim(), T = $.indexOf("-") + 1, $.charCodeAt(0) + $.charCodeAt(T)) {
          case 226:
            $ = S.replace(_, "tb");
            break;
          case 232:
            $ = S.replace(_, "tb-rl");
            break;
          case 220:
            $ = S.replace(_, "lr");
            break;
          default:
            return S;
        }
        return "-webkit-" + S + "-ms-" + $ + S;
      case 1017:
        if (S.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (T = (S = F).length - 10, $ = (S.charCodeAt(T) === 33 ? S.substring(0, T) : S).substring(F.indexOf(":", 7) + 1).trim(), W = $.charCodeAt(0) + ($.charCodeAt(7) | 0)) {
          case 203:
            if (111 > $.charCodeAt(8))
              break;
          case 115:
            S = S.replace($, "-webkit-" + $) + ";" + S;
            break;
          case 207:
          case 102:
            S = S.replace($, "-webkit-" + (102 < W ? "inline-" : "") + "box") + ";" + S.replace($, "-webkit-" + $) + ";" + S.replace($, "-ms-" + $ + "box") + ";" + S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return $ = S.replace("-items", ""), "-webkit-" + S + "-webkit-box-" + $ + "-ms-flex-" + $ + S;
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(z, "") + S;
            default:
              return "-webkit-" + S + "-ms-flex-line-pack" + S.replace("align-content", "").replace(z, "") + S;
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (B.test(F) === !0)
          return ($ = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(F.replace("stretch", "fill-available"), T, R, I).replace(":fill-available", ":stretch") : S.replace($, "-webkit-" + $) + S.replace($, "-moz-" + $.replace("fill-", "")) + S;
        break;
      case 962:
        if (S = "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S, R + I === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf("transform", 10))
          return S.substring(0, S.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + S;
    }
    return S;
  }
  function a(F, T) {
    var R = F.indexOf(T === 1 ? ":" : "{"), I = F.substring(0, T !== 3 ? R : 10);
    return R = F.substring(R + 1, F.length - 1), me(T !== 2 ? I : I.replace(V, "$1"), R, T);
  }
  function i(F, T) {
    var R = o(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return R !== T + ";" ? R.replace(D, " or ($1)").substring(4) : "(" + T + ")";
  }
  function s(F, T, R, I, S, W, $, q, H, re) {
    for (var P = 0, be = T, de; P < ye; ++P)
      switch (de = K[P].call(u, F, be, R, I, S, W, $, q, H, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          be = de;
      }
    if (be !== T)
      return be;
  }
  function l(F) {
    switch (F) {
      case void 0:
      case null:
        ye = K.length = 0;
        break;
      default:
        if (typeof F == "function")
          K[ye++] = F;
        else if (typeof F == "object")
          for (var T = 0, R = F.length; T < R; ++T)
            l(F[T]);
        else
          O = !!F | 0;
    }
    return l;
  }
  function c(F) {
    return F = F.prefix, F !== void 0 && (me = null, F ? typeof F != "function" ? ee = 1 : (ee = 2, me = F) : ee = 0), c;
  }
  function u(F, T) {
    var R = F;
    if (33 > R.charCodeAt(0) && (R = R.trim()), M = R, R = [M], 0 < ye) {
      var I = s(-1, T, R, R, te, ae, 0, 0, 0, 0);
      I !== void 0 && typeof I == "string" && (T = I);
    }
    var S = t(ie, R, T, 0, 0);
    return 0 < ye && (I = s(-2, S, R, R, te, ae, S.length, 0, 0, 0), I !== void 0 && (S = I)), M = "", Q = 0, ae = te = 1, S;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, p = /: */g, m = /zoo|gra/, h = /([,: ])(transform)/g, g = /,\r+?/g, y = /([\t\r\n ])*\f?&/g, x = /@(k\w+)\s*(\S*)\s*/, w = /::(place)/g, E = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, j = /\(\s*(.*)\s*\)/g, D = /([\s\S]*?);/g, z = /-self|flex-/g, V = /[^]*?(:[rp][el]a[\w-]+)[^]*/, B = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, ae = 1, te = 1, Q = 0, ee = 1, ie = [], K = [], ye = 0, me = null, O = 0, M = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var wd = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, oc = "/*|*/", qy = oc + "}";
function Xy(e) {
  e && fa.current.insert(e + "}");
}
var fa = {
  current: null
}, Ky = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return fa.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + oc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return fa.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? oc : "");
      }
    case -2:
      r.split(qy).forEach(Xy);
  }
}, Zy = function(t) {
  t === void 0 && (t = {});
  var r = t.key || "css", n;
  t.prefix !== void 0 && (n = {
    prefix: t.prefix
  });
  var o = new Gy(n);
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
  if (o.use(t.stylisPlugins)(Ky), l = function(p, m, h, g) {
    var y = m.name;
    if (fa.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var x = m.map;
      fa.current = {
        insert: function(E) {
          h.insert(E + x);
        }
      };
    }
    o(p, m.styles), g && (d.inserted[y] = !0);
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
          g && d.compat !== !0 && g.forEach(function(y) {
            var x = new RegExp(y + ".*\\/\\* " + h + " \\*\\/"), w = x.test(p);
            y && !w && console.error('The pseudo class "' + y + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + y.split("-child")[0] + '-of-type".');
          });
          break;
        }
      }
    });
  }
  var d = {
    key: r,
    sheet: new Yy({
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
}, Jy = !0;
function Xh(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var Kh = function(t, r, n) {
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
    Jy === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do
      t.insert("." + o, a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Qy(e) {
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
var e0 = {
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
}, Cd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, t0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", r0 = /[A-Z]|^ms/g, Zh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tu = function(t) {
  return t.charCodeAt(1) === 45;
}, kd = function(t) {
  return t != null && typeof t != "boolean";
}, ol = Gh(function(e) {
  return tu(e) ? e : e.replace(r0, "-$&").toLowerCase();
}), Li = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Zh, function(n, o, a) {
          return cr = {
            name: o,
            styles: a,
            next: cr
          }, o;
        });
  }
  return e0[t] !== 1 && !tu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var n0 = /(attr|calc|counters?|url)\(/, o0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], a0 = Li, i0 = /^-ms-/, s0 = /-(.)/g, _d = {};
  Li = function(t, r) {
    t === "content" && (typeof r != "string" || o0.indexOf(r) === -1 && !n0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = a0(t, r);
    return n !== "" && !tu(t) && t.indexOf("-") !== -1 && _d[t] === void 0 && (_d[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(i0, "ms-").replace(s0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Ed = !0;
function pa(e, t, r, n) {
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
        return cr = {
          name: r.name,
          styles: r.styles,
          next: cr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            cr = {
              name: o.name,
              styles: o.styles,
              next: cr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return l0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = cr, s = r(e);
        return cr = i, pa(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(Zh, function(d, f, p) {
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
  return process.env.NODE_ENV !== "production" && n && Ed && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Ed = !1), u !== void 0 && !n ? u : r;
}
function l0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += pa(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : kd(i) && (n += ol(a) + ":" + Li(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            kd(i[s]) && (n += ol(a) + ":" + Li(a, i[s]) + ";");
        else {
          var l = pa(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += ol(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(t0), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Td = /label:\s*([^\s;\n{]+)\s*;/g, Jh;
process.env.NODE_ENV !== "production" && (Jh = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var cr, ac = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  cr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += pa(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Cd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += pa(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Cd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Jh, function(f) {
    return l = f, "";
  })), Td.lastIndex = 0;
  for (var c = "", u; (u = Td.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = Qy(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: cr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: cr
  };
}, c0 = Object.prototype.hasOwnProperty, Qh = /* @__PURE__ */ Or(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? Zy() : null
), ha = /* @__PURE__ */ Or({});
Qh.Provider;
var em = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ Zt(Qh.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ kt(r);
}, Pd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ad = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", u0 = function() {
  return null;
}, $d = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Pd], s = [a], l = "";
  typeof r.className == "string" ? l = Xh(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = ac(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[Ad];
    u && (c = ac([c, "label:" + u + ";"]));
  }
  Kh(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    c0.call(r, f) && f !== "css" && f !== Pd && (process.env.NODE_ENV === "production" || f !== Ad) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ Zt(i, d), m = /* @__PURE__ */ Zt(u0, null);
  return /* @__PURE__ */ Zt(Lh, null, m, p);
}, d0 = /* @__PURE__ */ em(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ Zt(ha.Consumer, null, function(n) {
    return $d(t, e, n, r);
  }) : $d(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (d0.displayName = "EmotionCssPropInternal");
var f0 = qh, p0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, Rd = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? f0 : p0;
};
function Od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function h0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Od(Object(r), !0).forEach(function(n) {
      eu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Dd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, m0 = function() {
  return null;
}, v0 = function e(t, r) {
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
  var l = o || Rd(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Dd), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(Dd), d.push(u[p], u[0][p]);
    }
    var m = em(function(h, g, y) {
      return /* @__PURE__ */ Zt(ha.Consumer, null, function(x) {
        var w = c && h.as || s, E = "", _ = [], j = h;
        if (h.theme == null) {
          j = {};
          for (var D in h)
            j[D] = h[D];
          j.theme = x;
        }
        typeof h.className == "string" ? E = Xh(g.registered, _, h.className) : h.className != null && (E = h.className + " ");
        var z = ac(d.concat(_), g.registered, j);
        Kh(g, z, typeof w == "string"), E += g.key + "-" + z.name, a !== void 0 && (E += " " + a);
        var V = c && o === void 0 ? Rd(w) : l, B = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          V(X) && (B[X] = h[X]);
        B.className = E, B.ref = y || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ae = /* @__PURE__ */ Zt(w, B), te = /* @__PURE__ */ Zt(m0, null);
        return /* @__PURE__ */ Zt(Lh, null, te, ae);
      });
    });
    return m.displayName = n !== void 0 ? n : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = s, m.__emotion_styles = d, m.__emotion_forwardProp = o, Object.defineProperty(m, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), m.withComponent = function(h, g) {
      return e(h, g !== void 0 ? h0({}, r || {}, {}, g) : r).apply(void 0, d);
    }, m;
  };
}, g0 = [
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
], ic = v0.bind();
g0.forEach(function(e) {
  ic[e] = ic(e);
});
const b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ic
}, Symbol.toStringTag, { value: "Module" })), y0 = /* @__PURE__ */ hs(b0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var al, Md;
function tm() {
  if (Md)
    return al;
  Md = 1;
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
  return al = o() ? Object.assign : function(a, i) {
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
  }, al;
}
var x0 = tm();
const pr = /* @__PURE__ */ ps(x0);
var Fd = function(t, r) {
  var n = pr({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || pr(n, (a = {}, a[o] = pr(t[o], r[o]), a));
  }
  return n;
}, S0 = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, w0 = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, rm = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, C0 = function(t, r) {
  return Gr(r, t, t);
}, Gr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Oa = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = Gr(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || Gr(i.theme, "breakpoints", w0.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(rm)), s = Fd(s, k0(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = Fd(s, _0(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        pr(s, d(f, p, i));
      }
    return l && (s = S0(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, k0 = function(t, r, n, o, a) {
  var i = {};
  return o.slice(0, t.length).forEach(function(s, l) {
    var c = t[l], u = r(s, n, a);
    if (!c)
      pr(i, u);
    else {
      var d;
      pr(i, (d = {}, d[c] = pr({}, i[c], u), d));
    }
  }), i;
}, _0 = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      pr(i, u);
    else {
      var d, f = rm(l);
      pr(i, (d = {}, d[f] = pr({}, i[f], u), d));
    }
  }
  return i;
}, Wi = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? C0 : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, nr = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = Wi({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = Wi(a);
  });
  var n = Oa(r);
  return n;
}, ru = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || pr(t, i.config);
  });
  var a = Oa(t);
  return a;
}, E0 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, T0 = function(t, r) {
  return Gr(r, t, !E0(t) || t > 1 ? t : t * 100 + "%");
}, P0 = {
  width: {
    property: "width",
    scale: "sizes",
    transform: T0
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
}, zt = nr(P0), sc = {
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
sc.bg = sc.backgroundColor;
var nu = nr(sc), A0 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, $0 = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: A0.fontSizes
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
}, Jr = nr($0), R0 = {
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
}, At = nr(R0), il = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, O0 = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: il.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: il.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: il.space
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
}, Vt = nr(O0), wt = {
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
wt.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
wt.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
wt.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
wt.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
wt.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
wt.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
wt.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
wt.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
wt.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
wt.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
wt.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
wt.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
wt.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
wt.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
wt.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
wt.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var vr = nr(wt), qr = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
qr.bgImage = qr.backgroundImage;
qr.bgSize = qr.backgroundSize;
qr.bgPosition = qr.backgroundPosition;
qr.bgRepeat = qr.backgroundRepeat;
var Eo = nr(qr), ei = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, D0 = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: ei.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: ei.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: ei.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: ei.space
  }
}, jn = nr(D0), Ot = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, Id = function(t) {
  return typeof t == "number" && !isNaN(t);
}, xn = function(t, r) {
  if (!Id(t))
    return Gr(r, t, t);
  var n = t < 0, o = Math.abs(t), a = Gr(r, o, o);
  return Id(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Me = {};
Me.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: xn,
    defaultScale: Ot.space
  }
};
Me.margin.m = Me.margin.margin;
Me.margin.mt = Me.margin.marginTop;
Me.margin.mr = Me.margin.marginRight;
Me.margin.mb = Me.margin.marginBottom;
Me.margin.ml = Me.margin.marginLeft;
Me.margin.mx = Me.margin.marginX;
Me.margin.my = Me.margin.marginY;
Me.padding = {
  padding: {
    property: "padding",
    scale: "space",
    defaultScale: Ot.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: Ot.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: Ot.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: Ot.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: Ot.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: Ot.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: Ot.space
  }
};
Me.padding.p = Me.padding.padding;
Me.padding.pt = Me.padding.paddingTop;
Me.padding.pr = Me.padding.paddingRight;
Me.padding.pb = Me.padding.paddingBottom;
Me.padding.pl = Me.padding.paddingLeft;
Me.padding.px = Me.padding.paddingX;
Me.padding.py = Me.padding.paddingY;
var nm = nr(Me.margin), om = nr(Me.padding), am = ru(nm, om), xi = nr({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function ma() {
  return ma = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ma.apply(this, arguments);
}
var lr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, M0 = [40, 52, 64].map(function(e) {
  return e + "em";
}), F0 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, I0 = {
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
}, jd = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, j0 = {
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
}, B0 = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return lr(t, r, r);
  var n = Math.abs(r), o = lr(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, z0 = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return ma({}, e, (r = {}, r[t] = B0, r));
}, {}), im = function(t) {
  return function(r) {
    var n = {}, o = lr(r, "breakpoints", M0), a = [null].concat(o.map(function(u) {
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
}, sm = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = ma({}, F0, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = im(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(lr(n, c))(n);
        o = ma({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = lr(I0, s, s), f = lr(j0, d), p = lr(n, f, lr(n, d, {})), m = lr(z0, d, lr), h = m(p, c, c);
      if (jd[d])
        for (var g = jd[d], y = 0; y < g.length; y++)
          o[g[y]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const lm = sm, V0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: sm,
  default: lm,
  get: lr,
  responsive: im
}, Symbol.toStringTag, { value: "Module" }));
var ms = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return lm(Gr(m, p, null))(h.theme);
  } : c = function(p, m) {
    return Gr(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Oa(u);
  return d;
}, cm = ms({
  key: "buttons"
}), um = ms({
  key: "textStyles",
  prop: "textStyle"
}), dm = ms({
  key: "colorStyles",
  prop: "colors"
}), N0 = zt.width, L0 = zt.height, W0 = zt.minWidth, H0 = zt.minHeight, U0 = zt.maxWidth, Y0 = zt.maxHeight, G0 = zt.size, q0 = zt.verticalAlign, X0 = zt.display, K0 = zt.overflow, Z0 = zt.overflowX, J0 = zt.overflowY, Q0 = nu.opacity, ex = Jr.fontSize, tx = Jr.fontFamily, rx = Jr.fontWeight, nx = Jr.lineHeight, ox = Jr.textAlign, ax = Jr.fontStyle, ix = Jr.letterSpacing, sx = At.alignItems, lx = At.alignContent, cx = At.justifyItems, ux = At.justifyContent, dx = At.flexWrap, fx = At.flexDirection, px = At.flex, hx = At.flexGrow, mx = At.flexShrink, vx = At.flexBasis, gx = At.justifySelf, bx = At.alignSelf, yx = At.order, xx = Vt.gridGap, Sx = Vt.gridColumnGap, wx = Vt.gridRowGap, Cx = Vt.gridColumn, kx = Vt.gridRow, _x = Vt.gridAutoFlow, Ex = Vt.gridAutoColumns, Tx = Vt.gridAutoRows, Px = Vt.gridTemplateColumns, Ax = Vt.gridTemplateRows, $x = Vt.gridTemplateAreas, Rx = Vt.gridArea, Ox = vr.borderWidth, Dx = vr.borderStyle, Mx = vr.borderColor, Fx = vr.borderTop, Ix = vr.borderRight, jx = vr.borderBottom, Bx = vr.borderLeft, zx = vr.borderRadius, Vx = Eo.backgroundImage, Nx = Eo.backgroundSize, Lx = Eo.backgroundPosition, Wx = Eo.backgroundRepeat, Hx = jn.zIndex, Ux = jn.top, Yx = jn.right, Gx = jn.bottom, qx = jn.left, Xx = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = Wi({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Oa(c);
  return u;
};
const Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: lx,
  alignItems: sx,
  alignSelf: bx,
  background: Eo,
  backgroundImage: Vx,
  backgroundPosition: Lx,
  backgroundRepeat: Wx,
  backgroundSize: Nx,
  border: vr,
  borderBottom: jx,
  borderColor: Mx,
  borderLeft: Bx,
  borderRadius: zx,
  borderRight: Ix,
  borderStyle: Dx,
  borderTop: Fx,
  borderWidth: Ox,
  borders: vr,
  bottom: Gx,
  boxShadow: xi,
  buttonStyle: cm,
  color: nu,
  colorStyle: dm,
  compose: ru,
  createParser: Oa,
  createStyleFunction: Wi,
  display: X0,
  flex: px,
  flexBasis: vx,
  flexDirection: fx,
  flexGrow: hx,
  flexShrink: mx,
  flexWrap: dx,
  flexbox: At,
  fontFamily: tx,
  fontSize: ex,
  fontStyle: ax,
  fontWeight: rx,
  get: Gr,
  grid: Vt,
  gridArea: Rx,
  gridAutoColumns: Ex,
  gridAutoFlow: _x,
  gridAutoRows: Tx,
  gridColumn: Cx,
  gridColumnGap: Sx,
  gridGap: xx,
  gridRow: kx,
  gridRowGap: wx,
  gridTemplateAreas: $x,
  gridTemplateColumns: Px,
  gridTemplateRows: Ax,
  height: L0,
  justifyContent: ux,
  justifyItems: cx,
  justifySelf: gx,
  layout: zt,
  left: qx,
  letterSpacing: ix,
  lineHeight: nx,
  margin: nm,
  maxHeight: Y0,
  maxWidth: U0,
  minHeight: H0,
  minWidth: W0,
  opacity: Q0,
  order: yx,
  overflow: K0,
  overflowX: Z0,
  overflowY: J0,
  padding: om,
  position: jn,
  right: Yx,
  shadow: xi,
  size: G0,
  space: am,
  style: Xx,
  system: nr,
  textAlign: ox,
  textShadow: xi,
  textStyle: um,
  top: Ux,
  typography: Jr,
  variant: ms,
  verticalAlign: q0,
  width: N0,
  zIndex: Hx
}, Symbol.toStringTag, { value: "Module" })), Zx = /* @__PURE__ */ hs(Kx), Jx = /* @__PURE__ */ hs(V0);
function Qx(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var eS = ru(am, Jr, nu, zt, At, vr, Eo, jn, Vt, xi, cm, um, dm), fm = eS.propNames, pm = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return Qx(function(n) {
    return qh(n) && !r.test(n);
  });
};
const tS = pm(fm), rS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: pm,
  default: tS,
  props: fm
}, Symbol.toStringTag, { value: "Module" })), nS = /* @__PURE__ */ hs(rS);
Object.defineProperty(ua, "__esModule", {
  value: !0
});
var hm = ua.Flex = Bn = ua.Box = void 0;
ou(Pt);
var mm = ou(y0), Wn = Zx, Ko = aS(Jx), oS = ou(nS);
function vm() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return vm = function() {
    return e;
  }, e;
}
function aS(e) {
  if (e && e.__esModule)
    return e;
  var t = vm();
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
function ou(e) {
  return e && e.__esModule ? e : { default: e };
}
var iS = function(t) {
  return (0, Ko.default)(t.sx)(t.theme);
}, sS = function(t) {
  return (0, Ko.default)(t.__css)(t.theme);
}, lS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, Ko.default)((0, Ko.get)(r, a + "." + n, (0, Ko.get)(r, n)))(r);
}, gm = (0, mm.default)("div", {
  shouldForwardProp: oS.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, sS, lS, iS, function(e) {
  return e.css;
}, (0, Wn.compose)(Wn.space, Wn.layout, Wn.typography, Wn.color, Wn.flexbox)), Bn = ua.Box = gm, cS = (0, mm.default)(gm)({
  display: "flex"
});
hm = ua.Flex = cS;
function un() {
  return un = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, un.apply(this, arguments);
}
var dz = kt(function(e, t) {
  return Pt.createElement(Bn, un({
    ref: t,
    tx: "text"
  }, e));
});
kt(function(e, t) {
  return Pt.createElement(Bn, un({
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
var fz = kt(function(e, t) {
  return Pt.createElement(Bn, un({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), pz = kt(function(e, t) {
  return Pt.createElement(Bn, un({
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
kt(function(e, t) {
  return Pt.createElement(Bn, un({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var hz = kt(function(e, t) {
  return Pt.createElement(Bn, un({
    ref: t,
    variant: "card"
  }, e));
});
function Xn(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function An(e) {
  return function t(r) {
    return arguments.length === 0 || Xn(r) ? t : e.apply(this, arguments);
  };
}
function uS(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Xn(r) ? t : An(function(o) {
          return e(r, o);
        });
      default:
        return Xn(r) && Xn(n) ? t : Xn(r) ? An(function(o) {
          return e(o, n);
        }) : Xn(n) ? An(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function dS(e, t) {
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
const fS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function pS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var hS = /* @__PURE__ */ An(function(t) {
  return fS(t) ? !0 : !t || typeof t != "object" || pS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), mS = /* @__PURE__ */ function() {
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
function vS(e) {
  return new mS(e);
}
var gS = /* @__PURE__ */ uS(function(t, r) {
  return dS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function bS(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function Bd(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function zd(e, t, r, n) {
  return e["@@transducer/result"](r[n](gS(e["@@transducer/step"], e), t));
}
var Vd = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function mz(e, t, r) {
  if (typeof e == "function" && (e = vS(e)), hS(r))
    return bS(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return zd(e, t, r, "fantasy-land/reduce");
  if (r[Vd] != null)
    return Bd(e, t, r[Vd]());
  if (typeof r.next == "function")
    return Bd(e, t, r);
  if (typeof r.reduce == "function")
    return zd(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function lc(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var Nd = Object.prototype.toString, yS = /* @__PURE__ */ function() {
  return Nd.call(arguments) === "[object Arguments]" ? function(t) {
    return Nd.call(t) === "[object Arguments]";
  } : function(t) {
    return lc("callee", t);
  };
}(), xS = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Ld = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Wd = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), SS = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, vz = /* @__PURE__ */ An(typeof Object.keys == "function" && !Wd ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = Wd && yS(t);
  for (r in t)
    lc(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (xS)
    for (n = Ld.length - 1; n >= 0; )
      r = Ld[n], lc(r, t) && !SS(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), wS = /* @__PURE__ */ An(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const gz = wS;
function Fn() {
  return Fn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fn.apply(this, arguments);
}
var cc = { exports: {} }, ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function CS() {
  if (Hd)
    return ze;
  Hd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function w(_) {
    if (typeof _ == "object" && _ !== null) {
      var j = _.$$typeof;
      switch (j) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case u:
                case m:
                case p:
                case i:
                  return _;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function E(_) {
    return w(_) === c;
  }
  return ze.AsyncMode = l, ze.ConcurrentMode = c, ze.ContextConsumer = s, ze.ContextProvider = i, ze.Element = t, ze.ForwardRef = u, ze.Fragment = n, ze.Lazy = m, ze.Memo = p, ze.Portal = r, ze.Profiler = a, ze.StrictMode = o, ze.Suspense = d, ze.isAsyncMode = function(_) {
    return E(_) || w(_) === l;
  }, ze.isConcurrentMode = E, ze.isContextConsumer = function(_) {
    return w(_) === s;
  }, ze.isContextProvider = function(_) {
    return w(_) === i;
  }, ze.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, ze.isForwardRef = function(_) {
    return w(_) === u;
  }, ze.isFragment = function(_) {
    return w(_) === n;
  }, ze.isLazy = function(_) {
    return w(_) === m;
  }, ze.isMemo = function(_) {
    return w(_) === p;
  }, ze.isPortal = function(_) {
    return w(_) === r;
  }, ze.isProfiler = function(_) {
    return w(_) === a;
  }, ze.isStrictMode = function(_) {
    return w(_) === o;
  }, ze.isSuspense = function(_) {
    return w(_) === d;
  }, ze.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === c || _ === a || _ === o || _ === d || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === p || _.$$typeof === i || _.$$typeof === s || _.$$typeof === u || _.$$typeof === g || _.$$typeof === y || _.$$typeof === x || _.$$typeof === h);
  }, ze.typeOf = w, ze;
}
var Ve = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function kS() {
  return Ud || (Ud = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function w(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === c || P === a || P === o || P === d || P === f || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === p || P.$$typeof === i || P.$$typeof === s || P.$$typeof === u || P.$$typeof === g || P.$$typeof === y || P.$$typeof === x || P.$$typeof === h);
    }
    function E(P) {
      if (typeof P == "object" && P !== null) {
        var be = P.$$typeof;
        switch (be) {
          case t:
            var de = P.type;
            switch (de) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return de;
              default:
                var se = de && de.$$typeof;
                switch (se) {
                  case s:
                  case u:
                  case m:
                  case p:
                  case i:
                    return se;
                  default:
                    return be;
                }
            }
          case r:
            return be;
        }
      }
    }
    var _ = l, j = c, D = s, z = i, V = t, B = u, X = n, ae = m, te = p, Q = r, ee = a, ie = o, K = d, ye = !1;
    function me(P) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(P) || E(P) === l;
    }
    function O(P) {
      return E(P) === c;
    }
    function M(P) {
      return E(P) === s;
    }
    function F(P) {
      return E(P) === i;
    }
    function T(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function R(P) {
      return E(P) === u;
    }
    function I(P) {
      return E(P) === n;
    }
    function S(P) {
      return E(P) === m;
    }
    function W(P) {
      return E(P) === p;
    }
    function $(P) {
      return E(P) === r;
    }
    function q(P) {
      return E(P) === a;
    }
    function H(P) {
      return E(P) === o;
    }
    function re(P) {
      return E(P) === d;
    }
    Ve.AsyncMode = _, Ve.ConcurrentMode = j, Ve.ContextConsumer = D, Ve.ContextProvider = z, Ve.Element = V, Ve.ForwardRef = B, Ve.Fragment = X, Ve.Lazy = ae, Ve.Memo = te, Ve.Portal = Q, Ve.Profiler = ee, Ve.StrictMode = ie, Ve.Suspense = K, Ve.isAsyncMode = me, Ve.isConcurrentMode = O, Ve.isContextConsumer = M, Ve.isContextProvider = F, Ve.isElement = T, Ve.isForwardRef = R, Ve.isFragment = I, Ve.isLazy = S, Ve.isMemo = W, Ve.isPortal = $, Ve.isProfiler = q, Ve.isStrictMode = H, Ve.isSuspense = re, Ve.isValidElementType = w, Ve.typeOf = E;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? cc.exports = CS() : cc.exports = kS();
var au = cc.exports, bm = au, _S = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ES = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ym = {};
ym[bm.ForwardRef] = _S;
ym[bm.Memo] = ES;
function Yd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function TS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yd(Object(r), !0).forEach(function(n) {
      eu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var PS = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return TS({}, t, {}, r);
}, AS = wd(function(e) {
  return wd(function(t) {
    return PS(e, t);
  });
}), bz = function(t) {
  return /* @__PURE__ */ Zt(ha.Consumer, null, function(r) {
    return t.theme !== r && (r = AS(r)(t.theme)), /* @__PURE__ */ Zt(ha.Provider, {
      value: r
    }, t.children);
  });
};
function $S() {
  return Pt.useContext(ha);
}
const RS = {
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
}, OS = {
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
}, DS = {
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
}, MS = {
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
}, FS = {
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
}, IS = {
  ghost: RS,
  alert: FS,
  inline: OS,
  primary: DS,
  secondary: MS
}, jS = {
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
}, BS = {
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
}, zS = {
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
}, VS = {
  "icon-primary": jS,
  "icon-ghost": BS,
  "icon-ghost-white": zS
}, NS = {
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
}, LS = {
  "footer-primary": NS
}, WS = {
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
}, HS = {
  "file-secondary": WS
}, US = {
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
}, YS = {
  color: "black"
}, GS = {
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
}, qS = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, XS = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, KS = {
  card: qS,
  readOnly: XS
}, ZS = {
  color: "labels.red"
}, JS = {
  color: "darkGray"
}, QS = {
  error: ZS,
  default: JS
}, e1 = {
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
}, t1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, r1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, n1 = {
  disabled: r1,
  primary: e1,
  white: t1
}, o1 = {
  default: "transparent",
  error: "labels.red"
}, a1 = {
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
}, i1 = {
  bg: "white",
  borderRightColor: "grayShade2",
  "> div": {
    color: "gray",
    path: {
      fill: "gray"
    }
  }
}, s1 = {
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
}, l1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, c1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, u1 = {
  default: s1,
  active: l1,
  disabled: c1
}, d1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, f1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, p1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, h1 = {
  default: f1,
  active: p1,
  disabled: d1
}, m1 = {
  container: i1,
  item: u1,
  subItem: h1,
  category: a1
}, v1 = {
  bg: "white",
  boxShadow: "list"
}, g1 = {
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
}, b1 = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, y1 = {
  primary: g1,
  active: b1
}, x1 = {
  container: v1,
  item: y1
}, S1 = {
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
}, w1 = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, C1 = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, k1 = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, _1 = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, E1 = {
  variant: "text.microlabeling",
  color: "gray"
}, T1 = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, P1 = {
  variant: "text.value",
  color: "primary"
}, A1 = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, $1 = {
  variant: "text.labeling",
  color: "gray"
}, R1 = {
  color: "gray"
}, O1 = {
  color: "primary"
}, D1 = {
  color: "labels.orange"
}, Gd = {
  title: w1,
  text: A1,
  subtitle: C1,
  labeling: k1,
  value: T1,
  valuePrimary: P1,
  labelingGray: $1,
  microlabeling: _1,
  microlabelingGray: E1,
  inputValidationneutral: R1,
  inputValidationsuccess: O1,
  inputValidationwarning: D1
}, M1 = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, F1 = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, I1 = {
  drawerSection: F1,
  primary: M1
}, j1 = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, B1 = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, z1 = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, V1 = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, N1 = {
  gray: z1,
  white: V1
}, L1 = {
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
}, W1 = {
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
}, H1 = {
  keyValue: N1,
  primary: L1,
  bordered: W1,
  dot: j1,
  blink: B1
}, U1 = {
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
}, Y1 = {
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
}, G1 = {
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, q1 = {
  variant: "variants.select.primary",
  bg: "white"
}, X1 = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, K1 = {
  disabled: X1,
  primary: G1,
  white: q1
}, Z1 = {
  color: "labels.red"
}, J1 = {
  color: "darkGray"
}, Q1 = {
  error: Z1,
  default: J1
}, ew = {
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
}, tw = {
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
}, rw = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, nw = {
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
}, ow = {
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
}, aw = {
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
}, iw = {
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
}, sw = {
  valid: nw,
  error: ow,
  warning: aw,
  neutral: iw
}, lw = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, cw = {
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
}, uw = {
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
}, dw = {
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
}, fw = {
  primary: cw,
  white: uw,
  disabled: dw
}, pw = {
  secondary: {
    notification: {
      bg: "white",
      borderColor: "grayShade2"
    }
  }
}, hw = {
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
}, mw = {
  primary: {
    bg: "white"
  },
  white: {
    bg: "grayShade3"
  },
  disabled: {
    bg: "grayShade1"
  }
}, vw = {
  container: hw,
  chip: mw
}, gw = {
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
}, bw = {
  colors: gw,
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
    ...KS,
    tooltip: GS,
    label: YS,
    list: x1,
    header: S1,
    checkbox: U1,
    radio: Y1,
    badges: H1,
    popup: I1,
    bar: ew,
    perf: tw,
    code: rw,
    select: K1,
    callout: sw,
    icon: lw,
    editableSelect: vw,
    ...Gd
  },
  text: {
    inputInfo: QS,
    selectInfo: Q1,
    ...Gd
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...IS,
    ...VS,
    ...LS,
    ...HS,
    toggleButton: US
  },
  navigation: m1,
  inputs: n1,
  inputIntents: o1,
  pagination: fw,
  notification: pw
}, yw = {
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
}, xw = {
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
}, yz = () => $S(), xz = {
  ...bw,
  colors: yw,
  shadows: xw
};
function Sw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ww(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Cw = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ww(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = Sw(o);
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
}(), Ct = "-ms-", Hi = "-moz-", Ie = "-webkit-", iu = "comm", su = "rule", lu = "decl", kw = "@import", xm = "@keyframes", _w = "@layer", Ew = Math.abs, vs = String.fromCharCode, Tw = Object.assign;
function Pw(e, t) {
  return yt(e, 0) ^ 45 ? (((t << 2 ^ yt(e, 0)) << 2 ^ yt(e, 1)) << 2 ^ yt(e, 2)) << 2 ^ yt(e, 3) : 0;
}
function Sm(e) {
  return e.trim();
}
function Aw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, r) {
  return e.replace(t, r);
}
function uc(e, t) {
  return e.indexOf(t);
}
function yt(e, t) {
  return e.charCodeAt(t) | 0;
}
function va(e, t, r) {
  return e.slice(t, r);
}
function kr(e) {
  return e.length;
}
function cu(e) {
  return e.length;
}
function ti(e, t) {
  return t.push(e), e;
}
function $w(e, t) {
  return e.map(t).join("");
}
var gs = 1, go = 1, wm = 0, jt = 0, dt = 0, To = "";
function bs(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: gs, column: go, length: i, return: "" };
}
function Mo(e, t) {
  return Tw(bs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rw() {
  return dt;
}
function Ow() {
  return dt = jt > 0 ? yt(To, --jt) : 0, go--, dt === 10 && (go = 1, gs--), dt;
}
function Lt() {
  return dt = jt < wm ? yt(To, jt++) : 0, go++, dt === 10 && (go = 1, gs++), dt;
}
function Tr() {
  return yt(To, jt);
}
function Si() {
  return jt;
}
function Da(e, t) {
  return va(To, e, t);
}
function ga(e) {
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
function Cm(e) {
  return gs = go = 1, wm = kr(To = e), jt = 0, [];
}
function km(e) {
  return To = "", e;
}
function wi(e) {
  return Sm(Da(jt - 1, dc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Dw(e) {
  for (; (dt = Tr()) && dt < 33; )
    Lt();
  return ga(e) > 2 || ga(dt) > 3 ? "" : " ";
}
function Mw(e, t) {
  for (; --t && Lt() && !(dt < 48 || dt > 102 || dt > 57 && dt < 65 || dt > 70 && dt < 97); )
    ;
  return Da(e, Si() + (t < 6 && Tr() == 32 && Lt() == 32));
}
function dc(e) {
  for (; Lt(); )
    switch (dt) {
      case e:
        return jt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && dc(dt);
        break;
      case 40:
        e === 41 && dc(e);
        break;
      case 92:
        Lt();
        break;
    }
  return jt;
}
function Fw(e, t) {
  for (; Lt() && e + dt !== 47 + 10; )
    if (e + dt === 42 + 42 && Tr() === 47)
      break;
  return "/*" + Da(t, jt - 1) + "*" + vs(e === 47 ? e : Lt());
}
function Iw(e) {
  for (; !ga(Tr()); )
    Lt();
  return Da(e, jt);
}
function jw(e) {
  return km(Ci("", null, null, null, [""], e = Cm(e), 0, [0], e));
}
function Ci(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, g = 1, y = 1, x = 0, w = "", E = o, _ = a, j = n, D = w; g; )
    switch (m = x, x = Lt()) {
      case 40:
        if (m != 108 && yt(D, d - 1) == 58) {
          uc(D += je(wi(x), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += wi(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += Dw(m);
        break;
      case 92:
        D += Mw(Si() - 1, 7);
        continue;
      case 47:
        switch (Tr()) {
          case 42:
          case 47:
            ti(Bw(Fw(Lt(), Si()), t, r), l);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * h:
        s[c++] = kr(D) * y;
      case 125 * h:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            y == -1 && (D = je(D, /\f/g, "")), p > 0 && kr(D) - d && ti(p > 32 ? Xd(D + ";", n, r, d - 1) : Xd(je(D, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            D += ";";
          default:
            if (ti(j = qd(D, t, r, c, u, o, s, w, E = [], _ = [], d), a), x === 123)
              if (u === 0)
                Ci(D, t, j, j, E, a, d, s, _);
              else
                switch (f === 99 && yt(D, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ci(e, j, j, n && ti(qd(e, j, j, 0, 0, o, s, w, o, E = [], d), _), o, _, d, s, n ? E : _);
                    break;
                  default:
                    Ci(D, j, j, j, [""], _, 0, s, _);
                }
        }
        c = u = p = 0, h = y = 1, w = D = "", d = i;
        break;
      case 58:
        d = 1 + kr(D), p = m;
      default:
        if (h < 1) {
          if (x == 123)
            --h;
          else if (x == 125 && h++ == 0 && Ow() == 125)
            continue;
        }
        switch (D += vs(x), x * h) {
          case 38:
            y = u > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            s[c++] = (kr(D) - 1) * y, y = 1;
            break;
          case 64:
            Tr() === 45 && (D += wi(Lt())), f = Tr(), u = d = kr(w = D += Iw(Si())), x++;
            break;
          case 45:
            m === 45 && kr(D) == 2 && (h = 0);
        }
    }
  return a;
}
function qd(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = cu(f), m = 0, h = 0, g = 0; m < n; ++m)
    for (var y = 0, x = va(e, d + 1, d = Ew(h = i[m])), w = e; y < p; ++y)
      (w = Sm(h > 0 ? f[y] + " " + x : je(x, /&\f/g, f[y]))) && (l[g++] = w);
  return bs(e, t, r, o === 0 ? su : s, l, c, u);
}
function Bw(e, t, r) {
  return bs(e, t, r, iu, vs(Rw()), va(e, 2, -2), 0);
}
function Xd(e, t, r, n) {
  return bs(e, t, r, lu, va(e, 0, n), va(e, n + 1, -1), n);
}
function oo(e, t) {
  for (var r = "", n = cu(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function zw(e, t, r, n) {
  switch (e.type) {
    case _w:
      if (e.children.length)
        break;
    case kw:
    case lu:
      return e.return = e.return || e.value;
    case iu:
      return "";
    case xm:
      return e.return = e.value + "{" + oo(e.children, n) + "}";
    case su:
      e.value = e.props.join(",");
  }
  return kr(r = oo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Vw(e) {
  var t = cu(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function Nw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Kd = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function _m(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Lw = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Tr(), o === 38 && a === 12 && (r[n] = 1), !ga(a); )
    Lt();
  return Da(t, jt);
}, Ww = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ga(o)) {
      case 0:
        o === 38 && Tr() === 12 && (r[n] = 1), t[n] += Lw(jt - 1, r, n);
        break;
      case 2:
        t[n] += wi(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Tr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += vs(o);
    }
  while (o = Lt());
  return t;
}, Hw = function(t, r) {
  return km(Ww(Cm(t), r));
}, Zd = /* @__PURE__ */ new WeakMap(), Uw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Zd.get(n)) && !o) {
      Zd.set(t, !0);
      for (var a = [], i = Hw(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, Yw = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Gw = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", qw = function(t) {
  return t.type === "comm" && t.children.indexOf(Gw) > -1;
}, Xw = function(t) {
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
            if (qw(c))
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
}, Em = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Kw = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Em(r[n]))
      return !0;
  return !1;
}, Jd = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Zw = function(t, r, n) {
  Em(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Jd(t)) : Kw(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Jd(t)));
};
function Tm(e, t) {
  switch (Pw(e, t)) {
    case 5103:
      return Ie + "print-" + e + e;
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
      return Ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + e + Hi + e + Ct + e + e;
    case 6828:
    case 4268:
      return Ie + e + Ct + e + e;
    case 6165:
      return Ie + e + Ct + "flex-" + e + e;
    case 5187:
      return Ie + e + je(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + Ct + "flex-$1$2") + e;
    case 5443:
      return Ie + e + Ct + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return Ie + e + Ct + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ie + e + Ct + je(e, "shrink", "negative") + e;
    case 5292:
      return Ie + e + Ct + je(e, "basis", "preferred-size") + e;
    case 6060:
      return Ie + "box-" + je(e, "-grow", "") + Ie + e + Ct + je(e, "grow", "positive") + e;
    case 4554:
      return Ie + je(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + Ct + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
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
      if (kr(e) - 1 - t > 6)
        switch (yt(e, t + 1)) {
          case 109:
            if (yt(e, t + 4) !== 45)
              break;
          case 102:
            return je(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + Hi + (yt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~uc(e, "stretch") ? Tm(je(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (yt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (yt(e, kr(e) - 3 - (~uc(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + Ie) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ie + (yt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + Ct + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (yt(e, t + 11)) {
        case 114:
          return Ie + e + Ct + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ie + e + Ct + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ie + e + Ct + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ie + e + Ct + e + e;
  }
  return e;
}
var Jw = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case lu:
        t.return = Tm(t.value, t.length);
        break;
      case xm:
        return oo([Mo(t, {
          value: je(t.value, "@", "@" + Ie)
        })], o);
      case su:
        if (t.length)
          return $w(t.props, function(a) {
            switch (Aw(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return oo([Mo(t, {
                  props: [je(a, /:(read-\w+)/, ":" + Hi + "$1")]
                })], o);
              case "::placeholder":
                return oo([Mo(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Ie + "input-$1")]
                }), Mo(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Hi + "$1")]
                }), Mo(t, {
                  props: [je(a, /:(plac\w+)/, Ct + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Qw = [Jw], eC = function(t) {
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
  var o = t.stylisPlugins || Qw;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), y = 1; y < g.length; y++)
        a[g[y]] = !0;
      s.push(h);
    }
  );
  var l, c = [Uw, Yw];
  process.env.NODE_ENV !== "production" && c.push(Xw({
    get compat() {
      return m.compat;
    }
  }), Zw);
  {
    var u, d = [zw, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== iu && u.insert(h.value + "{}"));
    } : Nw(function(h) {
      u.insert(h);
    })], f = Vw(c.concat(o, d)), p = function(g) {
      return oo(jw(g), f);
    };
    l = function(g, y, x, w) {
      u = x, process.env.NODE_ENV !== "production" && y.map !== void 0 && (u = {
        insert: function(_) {
          x.insert(_ + y.map);
        }
      }), p(g ? g + "{" + y.styles + "}" : y.styles), w && (m.inserted[y.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new Cw({
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
}, tC = !0;
function uu(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var ys = function(t, r, n) {
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
  tC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, xs = function(t, r, n) {
  ys(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function rC(e) {
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
var nC = {
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
}, Qd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, oC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", aC = /[A-Z]|^ms/g, Pm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, du = function(t) {
  return t.charCodeAt(1) === 45;
}, ef = function(t) {
  return t != null && typeof t != "boolean";
}, sl = /* @__PURE__ */ _m(function(e) {
  return du(e) ? e : e.replace(aC, "-$&").toLowerCase();
}), Ui = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Pm, function(n, o, a) {
          return ur = {
            name: o,
            styles: a,
            next: ur
          }, o;
        });
  }
  return nC[t] !== 1 && !du(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var iC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, sC = ["normal", "none", "initial", "inherit", "unset"], lC = Ui, cC = /^-ms-/, uC = /-(.)/g, tf = {};
  Ui = function(t, r) {
    if (t === "content" && (typeof r != "string" || sC.indexOf(r) === -1 && !iC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = lC(t, r);
    return n !== "" && !du(t) && t.indexOf("-") !== -1 && tf[t] === void 0 && (tf[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(cC, "ms-").replace(uC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Am = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ba(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Am);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return ur = {
          name: r.name,
          styles: r.styles,
          next: ur
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ur = {
              name: n.name,
              styles: n.styles,
              next: ur
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return dC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = ur, i = r(e);
        return ur = a, ba(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Pm, function(u, d, f) {
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
function dC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ba(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : ef(i) && (n += sl(a) + ":" + Ui(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Am);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            ef(i[s]) && (n += sl(a) + ":" + Ui(a, i[s]) + ";");
        else {
          var l = ba(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += sl(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(oC), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var rf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, $m;
process.env.NODE_ENV !== "production" && ($m = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ur, bo = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  ur = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += ba(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Qd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += ba(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Qd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace($m, function(f) {
    return l = f, "";
  })), rf.lastIndex = 0;
  for (var c = "", u; (u = rf.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = rC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: ur,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: ur
  };
}, fC = function(t) {
  return t();
}, Rm = L["useInsertionEffect"] ? L["useInsertionEffect"] : !1, fu = Rm || fC, nf = Rm || L.useLayoutEffect, pC = {}.hasOwnProperty, pu = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ eC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (pu.displayName = "EmotionCacheContext");
pu.Provider;
var Ss = function(t) {
  return /* @__PURE__ */ kt(function(r, n) {
    var o = ft(pu);
    return t(r, o, n);
  });
}, dn = /* @__PURE__ */ L.createContext({});
process.env.NODE_ENV !== "production" && (dn.displayName = "EmotionThemeContext");
var hC = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Fn({}, t, r);
}, mC = /* @__PURE__ */ Kd(function(e) {
  return Kd(function(t) {
    return hC(e, t);
  });
}), Sz = function(t) {
  var r = L.useContext(dn);
  return t.theme !== r && (r = mC(r)(t.theme)), /* @__PURE__ */ L.createElement(dn.Provider, {
    value: r
  }, t.children);
}, of = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", af = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", vC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ys(r, n, o), fu(function() {
    return xs(r, n, o);
  }), null;
}, gC = /* @__PURE__ */ Ss(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[of], a = [n], i = "";
  typeof e.className == "string" ? i = uu(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = bo(a, void 0, L.useContext(dn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[af];
    l && (s = bo([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    pC.call(e, u) && u !== "css" && u !== of && (process.env.NODE_ENV === "production" || u !== af) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(vC, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ L.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (gC.displayName = "EmotionCssPropInternal");
var bC = {
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
}, sf = !1, yC = /* @__PURE__ */ Ss(function(e, t) {
  process.env.NODE_ENV !== "production" && !sf && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), sf = !0);
  var r = e.styles, n = bo([r], void 0, L.useContext(dn)), o = L.useRef();
  return nf(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), nf(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && xs(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (yC.displayName = "EmotionGlobal");
function xC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return bo(t);
}
var wz = function() {
  var t = xC.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, SC = function e(t) {
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
function wC(e, t, r) {
  var n = [], o = uu(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var CC = function(t) {
  var r = t.cache, n = t.serializedArr;
  return fu(function() {
    for (var o = 0; o < n.length; o++)
      xs(r, n[o], !1);
  }), null;
}, kC = /* @__PURE__ */ Ss(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = bo(u, t.registered);
    return n.push(f), ys(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return wC(t.registered, o, SC(u));
  }, i = {
    css: o,
    cx: a,
    theme: L.useContext(dn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(CC, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (kC.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var lf = !0, _C = typeof jest < "u" || typeof vi < "u";
  if (lf && !_C) {
    var cf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : lf ? window : global
    ), uf = "__EMOTION_REACT_" + bC.version.split(".")[0] + "__";
    cf[uf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), cf[uf] = !0;
  }
}
function EC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Qr(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Or(i);
  s.displayName = t;
  function l() {
    var c;
    const u = ft(s);
    if (!u && r) {
      const d = new Error(
        a ?? EC(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [TC, PC] = Qr({
  strict: !1,
  name: "PortalManagerContext"
});
function AC(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ Y.jsx(TC, { value: { zIndex: r }, children: t });
}
AC.displayName = "PortalManager";
var fc = globalThis != null && globalThis.document ? Qc : Xe, [Om, $C] = Qr({
  strict: !1,
  name: "PortalContext"
}), hu = "chakra-portal", RC = ".chakra-portal", OC = (e) => /* @__PURE__ */ Y.jsx(
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
), DC = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = St(null), a = Re(null), [, i] = St({});
  Xe(() => i({}), []);
  const s = $C(), l = PC();
  fc(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = hu, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ Y.jsx(OC, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? Yh(
    /* @__PURE__ */ Y.jsx(Om, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ Y.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, MC = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = It(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = hu), l;
  }, [o]), [, s] = St({});
  return fc(() => s({}), []), fc(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? Yh(
    /* @__PURE__ */ Y.jsx(Om, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function Ma(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ Y.jsx(MC, { containerRef: r, ...n }) : /* @__PURE__ */ Y.jsx(DC, { ...n });
}
Ma.className = hu;
Ma.selector = RC;
Ma.displayName = "Portal";
function Po() {
  const e = ft(
    dn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Dm = Or({});
Dm.displayName = "ColorModeContext";
function mu() {
  const e = ft(Dm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Cz(e, t) {
  const { colorMode: r } = mu();
  return r === "dark" ? t : e;
}
function Mm() {
  const e = mu(), t = Po();
  return { ...e, theme: t };
}
function FC(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function IC(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function kz(e, t, r) {
  const n = Po();
  return jC(e, t, r)(n);
}
function jC(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return FC(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return IC(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var or = (...e) => e.filter(Boolean).join(" ");
function BC() {
  return process.env.NODE_ENV !== "production";
}
function hr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var _z = (e) => {
  const { condition: t, message: r } = e;
  t && BC() && console.warn(r);
};
function En(e, ...t) {
  return zC(e) ? e(...t) : e;
}
var zC = (e) => typeof e == "function", Ez = (e) => e ? "" : void 0, Tz = (e) => e ? !0 : void 0;
function _r(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function Pz(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Yi = { exports: {} };
Yi.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", g = "[object Number]", y = "[object Null]", x = "[object Object]", w = "[object Proxy]", E = "[object RegExp]", _ = "[object Set]", j = "[object String]", D = "[object Undefined]", z = "[object WeakMap]", V = "[object ArrayBuffer]", B = "[object DataView]", X = "[object Float32Array]", ae = "[object Float64Array]", te = "[object Int8Array]", Q = "[object Int16Array]", ee = "[object Int32Array]", ie = "[object Uint8Array]", K = "[object Uint8ClampedArray]", ye = "[object Uint16Array]", me = "[object Uint32Array]", O = /[\\^$.*+?()[\]{}|]/g, M = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, T = {};
  T[X] = T[ae] = T[te] = T[Q] = T[ee] = T[ie] = T[K] = T[ye] = T[me] = !0, T[s] = T[l] = T[V] = T[u] = T[B] = T[d] = T[f] = T[p] = T[h] = T[g] = T[x] = T[E] = T[_] = T[j] = T[z] = !1;
  var R = typeof Qa == "object" && Qa && Qa.Object === Object && Qa, I = typeof self == "object" && self && self.Object === Object && self, S = R || I || Function("return this")(), W = t && !t.nodeType && t, $ = W && !0 && e && !e.nodeType && e, q = $ && $.exports === W, H = q && R.process, re = function() {
    try {
      var v = $ && $.require && $.require("util").types;
      return v || H && H.binding && H.binding("util");
    } catch {
    }
  }(), P = re && re.isTypedArray;
  function be(v, C, A) {
    switch (A.length) {
      case 0:
        return v.call(C);
      case 1:
        return v.call(C, A[0]);
      case 2:
        return v.call(C, A[0], A[1]);
      case 3:
        return v.call(C, A[0], A[1], A[2]);
    }
    return v.apply(C, A);
  }
  function de(v, C) {
    for (var A = -1, J = Array(v); ++A < v; )
      J[A] = C(A);
    return J;
  }
  function se(v) {
    return function(C) {
      return v(C);
    };
  }
  function Ae(v, C) {
    return v == null ? void 0 : v[C];
  }
  function ve(v, C) {
    return function(A) {
      return v(C(A));
    };
  }
  var xe = Array.prototype, ct = Function.prototype, we = Object.prototype, st = S["__core-js_shared__"], Qe = ct.toString, Oe = we.hasOwnProperty, oe = function() {
    var v = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), Ee = we.toString, _t = Qe.call(Object), mt = RegExp(
    "^" + Qe.call(Oe).replace(O, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), at = q ? S.Buffer : void 0, Mr = S.Symbol, Fr = S.Uint8Array, Ir = at ? at.allocUnsafe : void 0, Z = ve(Object.getPrototypeOf, Object), he = Object.create, br = we.propertyIsEnumerable, U = xe.splice, ne = Mr ? Mr.toStringTag : void 0, ge = function() {
    try {
      var v = Ks(Object, "defineProperty");
      return v({}, "", {}), v;
    } catch {
    }
  }(), Se = at ? at.isBuffer : void 0, We = Math.max, vt = Date.now, Ge = Ks(S, "Map"), et = Ks(Object, "create"), jr = function() {
    function v() {
    }
    return function(C) {
      if (!yn(C))
        return {};
      if (he)
        return he(C);
      v.prototype = C;
      var A = new v();
      return v.prototype = void 0, A;
    };
  }();
  function yr(v) {
    var C = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++C < A; ) {
      var J = v[C];
      this.set(J[0], J[1]);
    }
  }
  function Ws() {
    this.__data__ = et ? et(null) : {}, this.size = 0;
  }
  function Ua(v) {
    var C = this.has(v) && delete this.__data__[v];
    return this.size -= C ? 1 : 0, C;
  }
  function Hs(v) {
    var C = this.__data__;
    if (et) {
      var A = C[v];
      return A === n ? void 0 : A;
    }
    return Oe.call(C, v) ? C[v] : void 0;
  }
  function Ya(v) {
    var C = this.__data__;
    return et ? C[v] !== void 0 : Oe.call(C, v);
  }
  function Ga(v, C) {
    var A = this.__data__;
    return this.size += this.has(v) ? 0 : 1, A[v] = et && C === void 0 ? n : C, this;
  }
  yr.prototype.clear = Ws, yr.prototype.delete = Ua, yr.prototype.get = Hs, yr.prototype.has = Ya, yr.prototype.set = Ga;
  function ar(v) {
    var C = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++C < A; ) {
      var J = v[C];
      this.set(J[0], J[1]);
    }
  }
  function Us() {
    this.__data__ = [], this.size = 0;
  }
  function qa(v) {
    var C = this.__data__, A = Rt(C, v);
    if (A < 0)
      return !1;
    var J = C.length - 1;
    return A == J ? C.pop() : U.call(C, A, 1), --this.size, !0;
  }
  function Ys(v) {
    var C = this.__data__, A = Rt(C, v);
    return A < 0 ? void 0 : C[A][1];
  }
  function Gs(v) {
    return Rt(this.__data__, v) > -1;
  }
  function qs(v, C) {
    var A = this.__data__, J = Rt(A, v);
    return J < 0 ? (++this.size, A.push([v, C])) : A[J][1] = C, this;
  }
  ar.prototype.clear = Us, ar.prototype.delete = qa, ar.prototype.get = Ys, ar.prototype.has = Gs, ar.prototype.set = qs;
  function en(v) {
    var C = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++C < A; ) {
      var J = v[C];
      this.set(J[0], J[1]);
    }
  }
  function b() {
    this.size = 0, this.__data__ = {
      hash: new yr(),
      map: new (Ge || ar)(),
      string: new yr()
    };
  }
  function N(v) {
    var C = Za(this, v).delete(v);
    return this.size -= C ? 1 : 0, C;
  }
  function G(v) {
    return Za(this, v).get(v);
  }
  function fe(v) {
    return Za(this, v).has(v);
  }
  function $e(v, C) {
    var A = Za(this, v), J = A.size;
    return A.set(v, C), this.size += A.size == J ? 0 : 1, this;
  }
  en.prototype.clear = b, en.prototype.delete = N, en.prototype.get = G, en.prototype.has = fe, en.prototype.set = $e;
  function Te(v) {
    var C = this.__data__ = new ar(v);
    this.size = C.size;
  }
  function ke() {
    this.__data__ = new ar(), this.size = 0;
  }
  function Ce(v) {
    var C = this.__data__, A = C.delete(v);
    return this.size = C.size, A;
  }
  function gt(v) {
    return this.__data__.get(v);
  }
  function tt(v) {
    return this.__data__.has(v);
  }
  function it(v, C) {
    var A = this.__data__;
    if (A instanceof ar) {
      var J = A.__data__;
      if (!Ge || J.length < r - 1)
        return J.push([v, C]), this.size = ++A.size, this;
      A = this.__data__ = new en(J);
    }
    return A.set(v, C), this.size = A.size, this;
  }
  Te.prototype.clear = ke, Te.prototype.delete = Ce, Te.prototype.get = gt, Te.prototype.has = tt, Te.prototype.set = it;
  function $t(v, C) {
    var A = Qs(v), J = !A && Js(v), Pe = !A && !J && hd(v), He = !A && !J && !Pe && vd(v), Ke = A || J || Pe || He, _e = Ke ? de(v.length, String) : [], Ze = _e.length;
    for (var Yt in v)
      (C || Oe.call(v, Yt)) && !(Ke && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Yt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Pe && (Yt == "offset" || Yt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      He && (Yt == "buffer" || Yt == "byteLength" || Yt == "byteOffset") || // Skip index properties.
      fd(Yt, Ze))) && _e.push(Yt);
    return _e;
  }
  function xr(v, C, A) {
    (A !== void 0 && !Ja(v[C], A) || A === void 0 && !(C in v)) && Xs(v, C, A);
  }
  function Xa(v, C, A) {
    var J = v[C];
    (!(Oe.call(v, C) && Ja(J, A)) || A === void 0 && !(C in v)) && Xs(v, C, A);
  }
  function Rt(v, C) {
    for (var A = v.length; A--; )
      if (Ja(v[A][0], C))
        return A;
    return -1;
  }
  function Xs(v, C, A) {
    C == "__proto__" && ge ? ge(v, C, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : v[C] = A;
  }
  var ay = by();
  function Ka(v) {
    return v == null ? v === void 0 ? D : y : ne && ne in Object(v) ? yy(v) : _y(v);
  }
  function ud(v) {
    return $o(v) && Ka(v) == s;
  }
  function iy(v) {
    if (!yn(v) || Cy(v))
      return !1;
    var C = tl(v) ? mt : M;
    return C.test(Ay(v));
  }
  function sy(v) {
    return $o(v) && md(v.length) && !!T[Ka(v)];
  }
  function ly(v) {
    if (!yn(v))
      return ky(v);
    var C = pd(v), A = [];
    for (var J in v)
      J == "constructor" && (C || !Oe.call(v, J)) || A.push(J);
    return A;
  }
  function dd(v, C, A, J, Pe) {
    v !== C && ay(C, function(He, Ke) {
      if (Pe || (Pe = new Te()), yn(He))
        cy(v, C, Ke, A, dd, J, Pe);
      else {
        var _e = J ? J(Zs(v, Ke), He, Ke + "", v, C, Pe) : void 0;
        _e === void 0 && (_e = He), xr(v, Ke, _e);
      }
    }, gd);
  }
  function cy(v, C, A, J, Pe, He, Ke) {
    var _e = Zs(v, A), Ze = Zs(C, A), Yt = Ke.get(Ze);
    if (Yt) {
      xr(v, A, Yt);
      return;
    }
    var Nt = He ? He(_e, Ze, A + "", v, C, Ke) : void 0, Ro = Nt === void 0;
    if (Ro) {
      var rl = Qs(Ze), nl = !rl && hd(Ze), yd = !rl && !nl && vd(Ze);
      Nt = Ze, rl || nl || yd ? Qs(_e) ? Nt = _e : $y(_e) ? Nt = my(_e) : nl ? (Ro = !1, Nt = fy(Ze, !0)) : yd ? (Ro = !1, Nt = hy(Ze, !0)) : Nt = [] : Ry(Ze) || Js(Ze) ? (Nt = _e, Js(_e) ? Nt = Oy(_e) : (!yn(_e) || tl(_e)) && (Nt = xy(Ze))) : Ro = !1;
    }
    Ro && (Ke.set(Ze, Nt), Pe(Nt, Ze, J, He, Ke), Ke.delete(Ze)), xr(v, A, Nt);
  }
  function uy(v, C) {
    return Ty(Ey(v, C, bd), v + "");
  }
  var dy = ge ? function(v, C) {
    return ge(v, "toString", {
      configurable: !0,
      enumerable: !1,
      value: My(C),
      writable: !0
    });
  } : bd;
  function fy(v, C) {
    if (C)
      return v.slice();
    var A = v.length, J = Ir ? Ir(A) : new v.constructor(A);
    return v.copy(J), J;
  }
  function py(v) {
    var C = new v.constructor(v.byteLength);
    return new Fr(C).set(new Fr(v)), C;
  }
  function hy(v, C) {
    var A = C ? py(v.buffer) : v.buffer;
    return new v.constructor(A, v.byteOffset, v.length);
  }
  function my(v, C) {
    var A = -1, J = v.length;
    for (C || (C = Array(J)); ++A < J; )
      C[A] = v[A];
    return C;
  }
  function vy(v, C, A, J) {
    var Pe = !A;
    A || (A = {});
    for (var He = -1, Ke = C.length; ++He < Ke; ) {
      var _e = C[He], Ze = J ? J(A[_e], v[_e], _e, A, v) : void 0;
      Ze === void 0 && (Ze = v[_e]), Pe ? Xs(A, _e, Ze) : Xa(A, _e, Ze);
    }
    return A;
  }
  function gy(v) {
    return uy(function(C, A) {
      var J = -1, Pe = A.length, He = Pe > 1 ? A[Pe - 1] : void 0, Ke = Pe > 2 ? A[2] : void 0;
      for (He = v.length > 3 && typeof He == "function" ? (Pe--, He) : void 0, Ke && Sy(A[0], A[1], Ke) && (He = Pe < 3 ? void 0 : He, Pe = 1), C = Object(C); ++J < Pe; ) {
        var _e = A[J];
        _e && v(C, _e, J, He);
      }
      return C;
    });
  }
  function by(v) {
    return function(C, A, J) {
      for (var Pe = -1, He = Object(C), Ke = J(C), _e = Ke.length; _e--; ) {
        var Ze = Ke[v ? _e : ++Pe];
        if (A(He[Ze], Ze, He) === !1)
          break;
      }
      return C;
    };
  }
  function Za(v, C) {
    var A = v.__data__;
    return wy(C) ? A[typeof C == "string" ? "string" : "hash"] : A.map;
  }
  function Ks(v, C) {
    var A = Ae(v, C);
    return iy(A) ? A : void 0;
  }
  function yy(v) {
    var C = Oe.call(v, ne), A = v[ne];
    try {
      v[ne] = void 0;
      var J = !0;
    } catch {
    }
    var Pe = Ee.call(v);
    return J && (C ? v[ne] = A : delete v[ne]), Pe;
  }
  function xy(v) {
    return typeof v.constructor == "function" && !pd(v) ? jr(Z(v)) : {};
  }
  function fd(v, C) {
    var A = typeof v;
    return C = C ?? i, !!C && (A == "number" || A != "symbol" && F.test(v)) && v > -1 && v % 1 == 0 && v < C;
  }
  function Sy(v, C, A) {
    if (!yn(A))
      return !1;
    var J = typeof C;
    return (J == "number" ? el(A) && fd(C, A.length) : J == "string" && C in A) ? Ja(A[C], v) : !1;
  }
  function wy(v) {
    var C = typeof v;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? v !== "__proto__" : v === null;
  }
  function Cy(v) {
    return !!oe && oe in v;
  }
  function pd(v) {
    var C = v && v.constructor, A = typeof C == "function" && C.prototype || we;
    return v === A;
  }
  function ky(v) {
    var C = [];
    if (v != null)
      for (var A in Object(v))
        C.push(A);
    return C;
  }
  function _y(v) {
    return Ee.call(v);
  }
  function Ey(v, C, A) {
    return C = We(C === void 0 ? v.length - 1 : C, 0), function() {
      for (var J = arguments, Pe = -1, He = We(J.length - C, 0), Ke = Array(He); ++Pe < He; )
        Ke[Pe] = J[C + Pe];
      Pe = -1;
      for (var _e = Array(C + 1); ++Pe < C; )
        _e[Pe] = J[Pe];
      return _e[C] = A(Ke), be(v, this, _e);
    };
  }
  function Zs(v, C) {
    if (!(C === "constructor" && typeof v[C] == "function") && C != "__proto__")
      return v[C];
  }
  var Ty = Py(dy);
  function Py(v) {
    var C = 0, A = 0;
    return function() {
      var J = vt(), Pe = a - (J - A);
      if (A = J, Pe > 0) {
        if (++C >= o)
          return arguments[0];
      } else
        C = 0;
      return v.apply(void 0, arguments);
    };
  }
  function Ay(v) {
    if (v != null) {
      try {
        return Qe.call(v);
      } catch {
      }
      try {
        return v + "";
      } catch {
      }
    }
    return "";
  }
  function Ja(v, C) {
    return v === C || v !== v && C !== C;
  }
  var Js = ud(function() {
    return arguments;
  }()) ? ud : function(v) {
    return $o(v) && Oe.call(v, "callee") && !br.call(v, "callee");
  }, Qs = Array.isArray;
  function el(v) {
    return v != null && md(v.length) && !tl(v);
  }
  function $y(v) {
    return $o(v) && el(v);
  }
  var hd = Se || Fy;
  function tl(v) {
    if (!yn(v))
      return !1;
    var C = Ka(v);
    return C == p || C == m || C == c || C == w;
  }
  function md(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= i;
  }
  function yn(v) {
    var C = typeof v;
    return v != null && (C == "object" || C == "function");
  }
  function $o(v) {
    return v != null && typeof v == "object";
  }
  function Ry(v) {
    if (!$o(v) || Ka(v) != x)
      return !1;
    var C = Z(v);
    if (C === null)
      return !0;
    var A = Oe.call(C, "constructor") && C.constructor;
    return typeof A == "function" && A instanceof A && Qe.call(A) == _t;
  }
  var vd = P ? se(P) : sy;
  function Oy(v) {
    return vy(v, gd(v));
  }
  function gd(v) {
    return el(v) ? $t(v, !0) : ly(v);
  }
  var Dy = gy(function(v, C, A, J) {
    dd(v, C, A, J);
  });
  function My(v) {
    return function() {
      return v;
    };
  }
  function bd(v) {
    return v;
  }
  function Fy() {
    return !1;
  }
  e.exports = Dy;
})(Yi, Yi.exports);
var VC = Yi.exports;
const Jt = /* @__PURE__ */ ps(VC);
var NC = (e) => /!(important)?$/.test(e), df = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, LC = (e, t) => (r) => {
  const n = String(t), o = NC(n), a = df(n), i = e ? `${e}.${a}` : a;
  let s = hr(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = df(s), o ? `${s} !important` : s;
};
function vu(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = LC(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var ri = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Gt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = vu({
      scale: e,
      transform: t
    }), n;
  };
}
var WC = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function HC(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: WC(t),
    transform: r ? vu({
      scale: r,
      compose: n
    }) : n
  };
}
var Fm = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function UC() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Fm
  ].join(" ");
}
function YC() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Fm
  ].join(" ");
}
var GC = {
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
}, qC = {
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
function XC(e) {
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
var KC = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, pc = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, ZC = new Set(Object.values(pc)), hc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), JC = (e) => e.trim();
function QC(e, t) {
  if (e == null || hc.has(e))
    return e;
  if (!(mc(e) || hc.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(JC).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in pc ? pc[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (ZC.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], g = mc(h) ? h : h && h.split(" "), y = `colors.${m}`, x = y in t.__cssMap ? t.__cssMap[y].varRef : m;
    return g ? [
      x,
      ...Array.isArray(g) ? g : [g]
    ].join(" ") : x;
  });
  return `${s}(${d.join(", ")})`;
}
var mc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), ek = (e, t) => QC(e, t ?? {});
function tk(e) {
  return /^var\(--.+\)$/.test(e);
}
var rk = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Sr = (e) => (t) => `${e}(${t})`, De = {
  filter(e) {
    return e !== "auto" ? e : GC;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : qC;
  },
  ring(e) {
    return XC(De.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? UC() : e === "auto-gpu" ? YC() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = rk(e);
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
    if (tk(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: ek,
  blur: Sr("blur"),
  opacity: Sr("opacity"),
  brightness: Sr("brightness"),
  contrast: Sr("contrast"),
  dropShadow: Sr("drop-shadow"),
  grayscale: Sr("grayscale"),
  hueRotate: Sr("hue-rotate"),
  invert: Sr("invert"),
  saturate: Sr("saturate"),
  sepia: Sr("sepia"),
  bgImage(e) {
    return e == null || mc(e) || hc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = KC[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, k = {
  borderWidths: Gt("borderWidths"),
  borderStyles: Gt("borderStyles"),
  colors: Gt("colors"),
  borders: Gt("borders"),
  gradients: Gt("gradients", De.gradient),
  radii: Gt("radii", De.px),
  space: Gt("space", ri(De.vh, De.px)),
  spaceT: Gt("space", ri(De.vh, De.px)),
  degreeT(e) {
    return { property: e, transform: De.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: vu({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Gt("sizes", ri(De.vh, De.px)),
  sizesT: Gt("sizes", ri(De.vh, De.fraction)),
  shadows: Gt("shadows"),
  logical: HC,
  blur: Gt("blur", De.blur)
}, ki = {
  background: k.colors("background"),
  backgroundColor: k.colors("backgroundColor"),
  backgroundImage: k.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: De.bgClip },
  bgSize: k.prop("backgroundSize"),
  bgPosition: k.prop("backgroundPosition"),
  bg: k.colors("background"),
  bgColor: k.colors("backgroundColor"),
  bgPos: k.prop("backgroundPosition"),
  bgRepeat: k.prop("backgroundRepeat"),
  bgAttachment: k.prop("backgroundAttachment"),
  bgGradient: k.gradients("backgroundImage"),
  bgClip: { transform: De.bgClip }
};
Object.assign(ki, {
  bgImage: ki.backgroundImage,
  bgImg: ki.backgroundImage
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
var nk = {
  color: k.colors("color"),
  textColor: k.colors("color"),
  fill: k.colors("fill"),
  stroke: k.colors("stroke")
}, vc = {
  boxShadow: k.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: k.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: k.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(vc, {
  shadow: vc.boxShadow
});
var ok = {
  filter: { transform: De.filter },
  blur: k.blur("--chakra-blur"),
  brightness: k.propT("--chakra-brightness", De.brightness),
  contrast: k.propT("--chakra-contrast", De.contrast),
  hueRotate: k.degreeT("--chakra-hue-rotate"),
  invert: k.propT("--chakra-invert", De.invert),
  saturate: k.propT("--chakra-saturate", De.saturate),
  dropShadow: k.propT("--chakra-drop-shadow", De.dropShadow),
  backdropFilter: { transform: De.backdropFilter },
  backdropBlur: k.blur("--chakra-backdrop-blur"),
  backdropBrightness: k.propT(
    "--chakra-backdrop-brightness",
    De.brightness
  ),
  backdropContrast: k.propT("--chakra-backdrop-contrast", De.contrast),
  backdropHueRotate: k.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: k.propT("--chakra-backdrop-invert", De.invert),
  backdropSaturate: k.propT("--chakra-backdrop-saturate", De.saturate)
}, Gi = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: De.flexDirection },
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
Object.assign(Gi, {
  flexDir: Gi.flexDirection
});
var Im = {
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
}, ak = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: De.outline },
  outlineOffset: !0,
  outlineColor: k.colors("outlineColor")
}, Xt = {
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
  float: k.propT("float", De.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Xt, {
  w: Xt.width,
  h: Xt.height,
  minW: Xt.minWidth,
  maxW: Xt.maxWidth,
  minH: Xt.minHeight,
  maxH: Xt.maxHeight,
  overscroll: Xt.overscrollBehavior,
  overscrollX: Xt.overscrollBehaviorX,
  overscrollY: Xt.overscrollBehaviorY
});
var ik = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: k.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: k.prop("listStyleImage")
};
function sk(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var lk = (e) => {
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
}, ck = lk(sk), uk = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, dk = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, ll = (e, t, r) => {
  const n = {}, o = ck(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, fk = {
  srOnly: {
    transform(e) {
      return e === !0 ? uk : e === "focusable" ? dk : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => ll(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => ll(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => ll(t, e, r)
  }
}, Zo = {
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
Object.assign(Zo, {
  insetStart: Zo.insetInlineStart,
  insetEnd: Zo.insetInlineEnd
});
var pk = {
  ring: { transform: De.ring },
  ringColor: k.colors("--chakra-ring-color"),
  ringOffset: k.prop("--chakra-ring-offset-width"),
  ringOffsetColor: k.colors("--chakra-ring-offset-color"),
  ringInset: k.prop("--chakra-ring-inset")
}, qe = {
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
Object.assign(qe, {
  m: qe.margin,
  mt: qe.marginTop,
  mr: qe.marginRight,
  me: qe.marginInlineEnd,
  marginEnd: qe.marginInlineEnd,
  mb: qe.marginBottom,
  ml: qe.marginLeft,
  ms: qe.marginInlineStart,
  marginStart: qe.marginInlineStart,
  mx: qe.marginX,
  my: qe.marginY,
  p: qe.padding,
  pt: qe.paddingTop,
  py: qe.paddingY,
  px: qe.paddingX,
  pb: qe.paddingBottom,
  pl: qe.paddingLeft,
  ps: qe.paddingInlineStart,
  paddingStart: qe.paddingInlineStart,
  pr: qe.paddingRight,
  pe: qe.paddingInlineEnd,
  paddingEnd: qe.paddingInlineEnd
});
var hk = {
  textDecorationColor: k.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: k.shadows("textShadow")
}, mk = {
  clipPath: !0,
  transform: k.propT("transform", De.transform),
  transformOrigin: !0,
  translateX: k.spaceT("--chakra-translate-x"),
  translateY: k.spaceT("--chakra-translate-y"),
  skewX: k.degreeT("--chakra-skew-x"),
  skewY: k.degreeT("--chakra-skew-y"),
  scaleX: k.prop("--chakra-scale-x"),
  scaleY: k.prop("--chakra-scale-y"),
  scale: k.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: k.degreeT("--chakra-rotate")
}, vk = {
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
}, gk = {
  fontFamily: k.prop("fontFamily", "fonts"),
  fontSize: k.prop("fontSize", "fontSizes", De.px),
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
}, bk = {
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
function jm(e) {
  return hr(e) && e.reference ? e.reference : String(e);
}
var ws = (e, ...t) => t.map(jm).join(` ${e} `).replace(/calc/g, ""), ff = (...e) => `calc(${ws("+", ...e)})`, pf = (...e) => `calc(${ws("-", ...e)})`, gc = (...e) => `calc(${ws("*", ...e)})`, hf = (...e) => `calc(${ws("/", ...e)})`, mf = (e) => {
  const t = jm(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : gc(t, -1);
}, kn = Object.assign(
  (e) => ({
    add: (...t) => kn(ff(e, ...t)),
    subtract: (...t) => kn(pf(e, ...t)),
    multiply: (...t) => kn(gc(e, ...t)),
    divide: (...t) => kn(hf(e, ...t)),
    negate: () => kn(mf(e)),
    toString: () => e.toString()
  }),
  {
    add: ff,
    subtract: pf,
    multiply: gc,
    divide: hf,
    negate: mf
  }
);
function yk(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function xk(e) {
  const t = yk(e.toString());
  return wk(Sk(t));
}
function Sk(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function wk(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Ck(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function kk(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function _k(e, t = "") {
  return xk(`--${Ck(e, t)}`);
}
function pe(e, t, r) {
  const n = _k(e, r);
  return {
    variable: n,
    reference: kk(n, t)
  };
}
function Ek(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = pe(`${e}-${o}`, a);
      continue;
    }
    r[n] = pe(`${e}-${n}`);
  }
  return r;
}
function Tk(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Pk(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function bc(e) {
  if (e == null)
    return e;
  const { unitless: t } = Pk(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var Bm = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, gu = (e) => Object.fromEntries(Object.entries(e).sort(Bm));
function vf(e) {
  const t = gu(e);
  return Object.assign(Object.values(t), t);
}
function Ak(e) {
  const t = Object.keys(gu(e));
  return new Set(t);
}
function gf(e) {
  var t;
  if (!e)
    return e;
  e = (t = bc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Lo(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${bc(e)})`), t && r.push("and", `(max-width: ${bc(t)})`), r.join(" ");
}
function $k(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = vf(e), n = Object.entries(e).sort(Bm).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? gf(d) : void 0, {
      _minW: gf(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Lo(null, d),
      minWQuery: Lo(s),
      minMaxQuery: Lo(s, d)
    };
  }), o = Ak(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: gu(e),
    asArray: vf(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => Lo(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!hr(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; Tk(s) === null; )
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
var bt = {
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
}, tn = (e) => zm((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Br = (e) => zm((t) => e(t, "~ &"), "[data-peer]", ".peer"), zm = (e, ...t) => t.map(e).join(", "), Cs = {
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
  _groupHover: tn(bt.hover),
  _peerHover: Br(bt.hover),
  _groupFocus: tn(bt.focus),
  _peerFocus: Br(bt.focus),
  _groupFocusVisible: tn(bt.focusVisible),
  _peerFocusVisible: Br(bt.focusVisible),
  _groupActive: tn(bt.active),
  _peerActive: Br(bt.active),
  _groupDisabled: tn(bt.disabled),
  _peerDisabled: Br(bt.disabled),
  _groupInvalid: tn(bt.invalid),
  _peerInvalid: Br(bt.invalid),
  _groupChecked: tn(bt.checked),
  _peerChecked: Br(bt.checked),
  _groupFocusWithin: tn(bt.focusWithin),
  _peerFocusWithin: Br(bt.focusWithin),
  _peerPlaceholderShown: Br(bt.placeholderShown),
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
}, Vm = Object.keys(
  Cs
);
function bf(e, t) {
  return pe(String(e).replace(/\./g, "-"), void 0, t);
}
function Rk(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = bf(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, g = kn.negate(s), y = kn.negate(c);
        n[h] = {
          value: g,
          var: l,
          varRef: y
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
      const { reference: g } = bf(m, t == null ? void 0 : t.cssVarPrefix);
      return g;
    }, d = hr(s) ? s : { default: s };
    r = Jt(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, g;
          if (!m)
            return f;
          const y = u(`${m}`);
          if (p === "default")
            return f[l] = y, f;
          const x = (g = (h = Cs) == null ? void 0 : h[p]) != null ? g : p;
          return f[x] = { [l]: y }, f;
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
function Ok(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Dk(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function Mk(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function yf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (Mk(i) || Array.isArray(i)) {
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
var Fk = [
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
function Ik(e) {
  return Dk(e, Fk);
}
function jk(e) {
  return e.semanticTokens;
}
function Bk(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var zk = (e) => Vm.includes(e) || e === "default";
function Vk({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return yf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), yf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(zk)
    }
  ), r;
}
function Az(e) {
  var t;
  const r = Bk(e), n = Ik(r), o = jk(r), a = Vk({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = Rk(a, { cssVarPrefix: i });
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
    __breakpoints: $k(r.breakpoints)
  }), r;
}
var bu = Jt(
  {},
  ki,
  Fe,
  nk,
  Gi,
  Xt,
  ok,
  pk,
  ak,
  Im,
  fk,
  Zo,
  vc,
  qe,
  bk,
  gk,
  hk,
  mk,
  ik,
  vk
), Nk = Object.assign({}, qe, Xt, Gi, Im, Zo), $z = Object.keys(
  Nk
), Lk = [...Object.keys(bu), ...Vm], Wk = { ...bu, ...Cs }, Hk = (e) => e in Wk, Uk = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = En(e[i], t);
    if (s == null)
      continue;
    if (s = hr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function Yk(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Gk(e) {
  return /^var\(--.+\)$/.test(e);
}
var qk = (e, t) => e.startsWith("--") && typeof t == "string" && !Gk(t), Xk = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = Yk(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function Kk(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = En(a, n), d = Uk(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = En(m, n);
      p in r && (p = r[p]), qk(p, h) && (h = Xk(n, h));
      let g = t[p];
      if (g === !0 && (g = { property: p }), hr(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = Jt(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let y = (c = (l = g == null ? void 0 : g.transform) == null ? void 0 : l.call(g, h, n, u)) != null ? c : h;
      y = g != null && g.processResult ? o(y, !0) : y;
      const x = En(g == null ? void 0 : g.property, n);
      if (!i && (g != null && g.static)) {
        const w = En(g.static, n);
        f = Jt({}, f, w);
      }
      if (x && Array.isArray(x)) {
        for (const w of x)
          f[w] = y;
        continue;
      }
      if (x) {
        x === "&" && hr(y) ? f = Jt({}, f, y) : f[x] = y;
        continue;
      }
      if (hr(y)) {
        f = Jt({}, f, y);
        continue;
      }
      f[p] = y;
    }
    return f;
  };
  return o;
}
var Zk = (e) => (t) => Kk({
  theme: t,
  pseudos: Cs,
  configs: bu
})(e);
function Rz(e) {
  return e;
}
function Oz(e) {
  return e;
}
function Ye(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function Jk(e, t) {
  if (Array.isArray(e))
    return e;
  if (hr(e))
    return t(e);
  if (e != null)
    return [e];
}
function Qk(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function e_(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Jk(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], g = t.details[Qk(u, m)], y = Lo(h.minW, g == null ? void 0 : g._minW), x = En((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (x) {
        if (p) {
          (l = n.parts) == null || l.forEach((w) => {
            Jt(c, {
              [w]: f ? x[w] : { [y]: x[w] }
            });
          });
          continue;
        }
        if (!p) {
          f ? Jt(c, x) : c[y] = x;
          continue;
        }
        c[y] = x;
      }
    }
    return c;
  };
}
function t_(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = e_(a);
    return Jt(
      {},
      En((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function Nm(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function ks(e) {
  return Ok(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var r_ = [
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
function n_(e) {
  return hr(e) ? r_.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var o_ = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, a_ = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, i_ = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, s_ = {
  property: o_,
  easing: a_,
  duration: i_
}, l_ = s_, c_ = {
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
}, u_ = c_, d_ = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, f_ = d_, p_ = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, h_ = p_, m_ = {
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
}, v_ = m_, g_ = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, b_ = g_, y_ = {
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
}, x_ = y_, S_ = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, w_ = S_, C_ = {
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
}, Lm = C_, Wm = {
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
}, k_ = {
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
}, __ = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, E_ = {
  ...Wm,
  ...k_,
  container: __
}, Hm = E_, Um = {
  breakpoints: h_,
  zIndices: u_,
  radii: b_,
  blur: w_,
  colors: v_,
  ...Lm,
  sizes: Hm,
  shadows: x_,
  space: Wm,
  borders: f_,
  transition: l_
}, { defineMultiStyleConfig: T_, definePartsStyle: Wo } = Ye([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), zr = pe("stepper-indicator-size"), Zn = pe("stepper-icon-size"), Jn = pe("stepper-title-font-size"), Ho = pe("stepper-description-font-size"), Fo = pe("stepper-accent-color"), P_ = Wo(({ colorScheme: e }) => ({
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
    [Fo.variable]: `colors.${e}.500`,
    _dark: {
      [Fo.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Jn.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Ho.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Jn.reference
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
    width: Zn.reference,
    height: Zn.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: zr.reference,
    height: zr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Fo.reference
    },
    "&[data-status=complete]": {
      bg: Fo.reference,
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
      bg: Fo.reference
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
      maxHeight: `calc(100% - ${zr.reference} - 8px)`,
      top: `calc(${zr.reference} + 4px)`,
      insetStart: `calc(${zr.reference} / 2 - 1px)`
    }
  }
})), A_ = T_({
  baseStyle: P_,
  sizes: {
    xs: Wo({
      stepper: {
        [zr.variable]: "sizes.4",
        [Zn.variable]: "sizes.3",
        [Jn.variable]: "fontSizes.xs",
        [Ho.variable]: "fontSizes.xs"
      }
    }),
    sm: Wo({
      stepper: {
        [zr.variable]: "sizes.6",
        [Zn.variable]: "sizes.4",
        [Jn.variable]: "fontSizes.sm",
        [Ho.variable]: "fontSizes.xs"
      }
    }),
    md: Wo({
      stepper: {
        [zr.variable]: "sizes.8",
        [Zn.variable]: "sizes.5",
        [Jn.variable]: "fontSizes.md",
        [Ho.variable]: "fontSizes.sm"
      }
    }),
    lg: Wo({
      stepper: {
        [zr.variable]: "sizes.10",
        [Zn.variable]: "sizes.6",
        [Jn.variable]: "fontSizes.lg",
        [Ho.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Ne(e, t = {}) {
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
    return Ne(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return Ne(e, t);
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
var $_ = Ne("accordion").parts("root", "container", "button", "panel").extend("icon"), R_ = Ne("alert").parts("title", "description", "container").extend("icon", "spinner"), O_ = Ne("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), D_ = Ne("breadcrumb").parts("link", "item", "container").extend("separator");
Ne("button").parts();
var M_ = Ne("checkbox").parts("control", "icon", "container").extend("label");
Ne("progress").parts("track", "filledTrack").extend("label");
var F_ = Ne("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), I_ = Ne("editable").parts(
  "preview",
  "input",
  "textarea"
), j_ = Ne("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), B_ = Ne("formError").parts("text", "icon"), z_ = Ne("input").parts("addon", "field", "element"), V_ = Ne("list").parts("container", "item", "icon"), N_ = Ne("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), L_ = Ne("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), W_ = Ne("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Ne("pininput").parts("field");
var H_ = Ne("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), U_ = Ne("progress").parts(
  "label",
  "filledTrack",
  "track"
), Y_ = Ne("radio").parts(
  "container",
  "control",
  "label"
), G_ = Ne("select").parts("field", "icon"), q_ = Ne("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), X_ = Ne("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), K_ = Ne("switch").parts(
  "container",
  "track",
  "thumb"
), Z_ = Ne("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), J_ = Ne("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Q_ = Ne("tag").parts(
  "container",
  "label",
  "closeButton"
), eE = Ne("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function Tn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class tE extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Uo = tE;
function yu(e) {
  if (typeof e != "string")
    throw new Uo(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = cE.test(e) ? oE(e) : e;
  const r = aE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(ya(s, 2), 16)), parseInt(ya(i[3] || "f", 2), 16) / 255];
  }
  const n = iE.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = sE.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = lE.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (Tn(0, 100, s) !== s)
      throw new Uo(e);
    if (Tn(0, 100, l) !== l)
      throw new Uo(e);
    return [...uE(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new Uo(e);
}
function rE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const xf = (e) => parseInt(e.replace(/_/g, ""), 36), nE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = xf(t.substring(0, 3)), n = xf(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function oE(e) {
  const t = e.toLowerCase().trim(), r = nE[rE(t)];
  if (!r)
    throw new Uo(e);
  return `#${r}`;
}
const ya = (e, t) => Array.from(Array(t)).map(() => e).join(""), aE = new RegExp(`^#${ya("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), iE = new RegExp(`^#${ya("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), sE = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${ya(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), lE = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, cE = /^[a-z]+$/i, Sf = (e) => Math.round(e * 255), uE = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Sf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Sf);
};
function dE(e, t, r, n) {
  return `rgba(${Tn(0, 255, e).toFixed()}, ${Tn(0, 255, t).toFixed()}, ${Tn(0, 255, r).toFixed()}, ${parseFloat(Tn(0, 1, n).toFixed(3))})`;
}
function fE(e, t) {
  const [r, n, o, a] = yu(e);
  return dE(r, n, o, a - t);
}
function pE(e) {
  const [t, r, n, o] = yu(e);
  let a = (i) => {
    const s = Tn(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function hE(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var mE = (e) => Object.keys(e).length === 0, qi = (e, t, r) => {
  const n = hE(e, `colors.${t}`, t);
  try {
    return pE(n), n;
  } catch {
    return r ?? "#000000";
  }
}, fr = (e, t, r) => {
  var n;
  return (n = Nm(e, "colors", t)) != null ? n : r;
}, vE = (e) => {
  const [t, r, n] = yu(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, gE = (e) => (t) => {
  const r = qi(t, e);
  return vE(r) < 128 ? "dark" : "light";
}, bE = (e) => (t) => gE(e)(t) === "dark", yo = (e, t) => (r) => {
  const n = qi(r, e);
  return fE(n, 1 - t);
};
function wf(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var yE = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function xE(e) {
  const t = yE();
  return !e || mE(e) ? t : e.string && e.colors ? wE(e.string, e.colors) : e.string && !e.colors ? SE(e.string) : e.colors && !e.string ? CE(e.colors) : t;
}
function SE(e) {
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
function wE(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function CE(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function le(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function xu(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function Ym(e) {
  return hr(e) && e.reference ? e.reference : String(e);
}
var _s = (e, ...t) => t.map(Ym).join(` ${e} `).replace(/calc/g, ""), Cf = (...e) => `calc(${_s("+", ...e)})`, kf = (...e) => `calc(${_s("-", ...e)})`, yc = (...e) => `calc(${_s("*", ...e)})`, _f = (...e) => `calc(${_s("/", ...e)})`, Ef = (e) => {
  const t = Ym(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : yc(t, -1);
}, Vr = Object.assign(
  (e) => ({
    add: (...t) => Vr(Cf(e, ...t)),
    subtract: (...t) => Vr(kf(e, ...t)),
    multiply: (...t) => Vr(yc(e, ...t)),
    divide: (...t) => Vr(_f(e, ...t)),
    negate: () => Vr(Ef(e)),
    toString: () => e.toString()
  }),
  {
    add: Cf,
    subtract: kf,
    multiply: yc,
    divide: _f,
    negate: Ef
  }
);
function kE(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function _E(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Gm(e) {
  const t = _E(e.toString());
  return t.includes("\\.") ? e : kE(e) ? t.replace(".", "\\.") : e;
}
function EE(e, t = "") {
  return [t, Gm(e)].filter(Boolean).join("-");
}
function TE(e, t) {
  return `var(${Gm(e)}${t ? `, ${t}` : ""})`;
}
function PE(e, t = "") {
  return `--${EE(e, t)}`;
}
function ht(e, t) {
  const r = PE(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: TE(r, AE(t == null ? void 0 : t.fallback))
  };
}
function AE(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: $E, definePartsStyle: _i } = Ye(K_.keys), Jo = ht("switch-track-width"), $n = ht("switch-track-height"), cl = ht("switch-track-diff"), RE = Vr.subtract(Jo, $n), xc = ht("switch-thumb-x"), Io = ht("switch-bg"), OE = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Jo.reference],
    height: [$n.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Io.variable]: "colors.gray.300",
    _dark: {
      [Io.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Io.variable]: `colors.${t}.500`,
      _dark: {
        [Io.variable]: `colors.${t}.200`
      }
    },
    bg: Io.reference
  };
}, DE = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$n.reference],
  height: [$n.reference],
  _checked: {
    transform: `translateX(${xc.reference})`
  }
}, ME = _i((e) => ({
  container: {
    [cl.variable]: RE,
    [xc.variable]: cl.reference,
    _rtl: {
      [xc.variable]: Vr(cl).negate().toString()
    }
  },
  track: OE(e),
  thumb: DE
})), FE = {
  sm: _i({
    container: {
      [Jo.variable]: "1.375rem",
      [$n.variable]: "sizes.3"
    }
  }),
  md: _i({
    container: {
      [Jo.variable]: "1.875rem",
      [$n.variable]: "sizes.4"
    }
  }),
  lg: _i({
    container: {
      [Jo.variable]: "2.875rem",
      [$n.variable]: "sizes.6"
    }
  })
}, IE = $E({
  baseStyle: ME,
  sizes: FE,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: jE, definePartsStyle: ao } = Ye(Z_.keys), BE = ao({
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
}), Xi = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, zE = ao((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: le("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: le(`${t}.100`, `${t}.700`)(e),
      ...Xi
    },
    td: {
      borderBottom: "1px",
      borderColor: le(`${t}.100`, `${t}.700`)(e),
      ...Xi
    },
    caption: {
      color: le("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), VE = ao((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: le("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: le(`${t}.100`, `${t}.700`)(e),
      ...Xi
    },
    td: {
      borderBottom: "1px",
      borderColor: le(`${t}.100`, `${t}.700`)(e),
      ...Xi
    },
    caption: {
      color: le("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: le(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: le(`${t}.100`, `${t}.700`)(e)
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
}), NE = {
  simple: zE,
  striped: VE,
  unstyled: {}
}, LE = {
  sm: ao({
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
  md: ao({
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
  lg: ao({
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
}, WE = jE({
  baseStyle: BE,
  variants: NE,
  sizes: LE,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Dt = pe("tabs-color"), dr = pe("tabs-bg"), ni = pe("tabs-border-color"), { defineMultiStyleConfig: HE, definePartsStyle: Pr } = Ye(J_.keys), UE = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, YE = (e) => {
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
}, GE = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, qE = {
  p: 4
}, XE = Pr((e) => ({
  root: UE(e),
  tab: YE(e),
  tablist: GE(e),
  tabpanel: qE
})), KE = {
  sm: Pr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Pr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Pr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, ZE = Pr((e) => {
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
        [Dt.variable]: `colors.${t}.600`,
        _dark: {
          [Dt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [dr.variable]: "colors.gray.200",
        _dark: {
          [dr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Dt.reference,
      bg: dr.reference
    }
  };
}), JE = Pr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ni.variable]: "transparent",
      _selected: {
        [Dt.variable]: `colors.${t}.600`,
        [ni.variable]: "colors.white",
        _dark: {
          [Dt.variable]: `colors.${t}.300`,
          [ni.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ni.reference
      },
      color: Dt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), QE = Pr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [dr.variable]: "colors.gray.50",
      _dark: {
        [dr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [dr.variable]: "colors.white",
        [Dt.variable]: `colors.${t}.600`,
        _dark: {
          [dr.variable]: "colors.gray.800",
          [Dt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Dt.reference,
      bg: dr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), eT = Pr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: qi(r, `${t}.700`),
        bg: qi(r, `${t}.100`)
      }
    }
  };
}), tT = Pr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Dt.variable]: "colors.gray.600",
      _dark: {
        [Dt.variable]: "inherit"
      },
      _selected: {
        [Dt.variable]: "colors.white",
        [dr.variable]: `colors.${t}.600`,
        _dark: {
          [Dt.variable]: "colors.gray.800",
          [dr.variable]: `colors.${t}.300`
        }
      },
      color: Dt.reference,
      bg: dr.reference
    }
  };
}), rT = Pr({}), nT = {
  line: ZE,
  enclosed: JE,
  "enclosed-colored": QE,
  "soft-rounded": eT,
  "solid-rounded": tT,
  unstyled: rT
}, oT = HE({
  baseStyle: XE,
  sizes: KE,
  variants: nT,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), lt = Ek("badge", ["bg", "color", "shadow"]), aT = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: lt.bg.reference,
  color: lt.color.reference,
  boxShadow: lt.shadow.reference
}, iT = (e) => {
  const { colorScheme: t, theme: r } = e, n = yo(`${t}.500`, 0.6)(r);
  return {
    [lt.bg.variable]: `colors.${t}.500`,
    [lt.color.variable]: "colors.white",
    _dark: {
      [lt.bg.variable]: n,
      [lt.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, sT = (e) => {
  const { colorScheme: t, theme: r } = e, n = yo(`${t}.200`, 0.16)(r);
  return {
    [lt.bg.variable]: `colors.${t}.100`,
    [lt.color.variable]: `colors.${t}.800`,
    _dark: {
      [lt.bg.variable]: n,
      [lt.color.variable]: `colors.${t}.200`
    }
  };
}, lT = (e) => {
  const { colorScheme: t, theme: r } = e, n = yo(`${t}.200`, 0.8)(r);
  return {
    [lt.color.variable]: `colors.${t}.500`,
    _dark: {
      [lt.color.variable]: n
    },
    [lt.shadow.variable]: `inset 0 0 0px 1px ${lt.color.reference}`
  };
}, cT = {
  solid: iT,
  subtle: sT,
  outline: lT
}, Qo = {
  baseStyle: aT,
  variants: cT,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: uT, definePartsStyle: Rn } = Ye(Q_.keys), Tf = pe("tag-bg"), Pf = pe("tag-color"), ul = pe("tag-shadow"), Ei = pe("tag-min-height"), Ti = pe("tag-min-width"), Pi = pe("tag-font-size"), Ai = pe("tag-padding-inline"), dT = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Pf.variable]: lt.color.reference,
  [Tf.variable]: lt.bg.reference,
  [ul.variable]: lt.shadow.reference,
  color: Pf.reference,
  bg: Tf.reference,
  boxShadow: ul.reference,
  borderRadius: "md",
  minH: Ei.reference,
  minW: Ti.reference,
  fontSize: Pi.reference,
  px: Ai.reference,
  _focusVisible: {
    [ul.variable]: "shadows.outline"
  }
}, fT = {
  lineHeight: 1.2,
  overflow: "visible"
}, pT = {
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
}, hT = Rn({
  container: dT,
  label: fT,
  closeButton: pT
}), mT = {
  sm: Rn({
    container: {
      [Ei.variable]: "sizes.5",
      [Ti.variable]: "sizes.5",
      [Pi.variable]: "fontSizes.xs",
      [Ai.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Rn({
    container: {
      [Ei.variable]: "sizes.6",
      [Ti.variable]: "sizes.6",
      [Pi.variable]: "fontSizes.sm",
      [Ai.variable]: "space.2"
    }
  }),
  lg: Rn({
    container: {
      [Ei.variable]: "sizes.8",
      [Ti.variable]: "sizes.8",
      [Pi.variable]: "fontSizes.md",
      [Ai.variable]: "space.3"
    }
  })
}, vT = {
  subtle: Rn((e) => {
    var t;
    return {
      container: (t = Qo.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Rn((e) => {
    var t;
    return {
      container: (t = Qo.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Rn((e) => {
    var t;
    return {
      container: (t = Qo.variants) == null ? void 0 : t.outline(e)
    };
  })
}, gT = uT({
  variants: vT,
  baseStyle: hT,
  sizes: mT,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Nr, defineMultiStyleConfig: bT } = Ye(z_.keys), yT = Nr({
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
}), rn = {
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
}, xT = {
  lg: Nr({
    field: rn.lg,
    addon: rn.lg
  }),
  md: Nr({
    field: rn.md,
    addon: rn.md
  }),
  sm: Nr({
    field: rn.sm,
    addon: rn.sm
  }),
  xs: Nr({
    field: rn.xs,
    addon: rn.xs
  })
};
function Su(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || le("blue.500", "blue.300")(e),
    errorBorderColor: r || le("red.500", "red.300")(e)
  };
}
var ST = Nr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Su(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: le("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: fr(t, n),
        boxShadow: `0 0 0 1px ${fr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: fr(t, r),
        boxShadow: `0 0 0 1px ${fr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: le("inherit", "whiteAlpha.50")(e),
      bg: le("gray.100", "whiteAlpha.300")(e)
    }
  };
}), wT = Nr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Su(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: le("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: le("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: fr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: fr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: le("gray.100", "whiteAlpha.50")(e)
    }
  };
}), CT = Nr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Su(e);
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
        borderColor: fr(t, n),
        boxShadow: `0px 1px 0px 0px ${fr(t, n)}`
      },
      _focusVisible: {
        borderColor: fr(t, r),
        boxShadow: `0px 1px 0px 0px ${fr(t, r)}`
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
}), kT = Nr({
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
}), _T = {
  outline: ST,
  filled: wT,
  flushed: CT,
  unstyled: kT
}, Be = bT({
  baseStyle: yT,
  sizes: xT,
  variants: _T,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Af, ET = {
  ...(Af = Be.baseStyle) == null ? void 0 : Af.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, $f, Rf, TT = {
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
  unstyled: (Rf = ($f = Be.variants) == null ? void 0 : $f.unstyled.field) != null ? Rf : {}
}, Of, Df, Mf, Ff, If, jf, Bf, zf, PT = {
  xs: (Df = (Of = Be.sizes) == null ? void 0 : Of.xs.field) != null ? Df : {},
  sm: (Ff = (Mf = Be.sizes) == null ? void 0 : Mf.sm.field) != null ? Ff : {},
  md: (jf = (If = Be.sizes) == null ? void 0 : If.md.field) != null ? jf : {},
  lg: (zf = (Bf = Be.sizes) == null ? void 0 : Bf.lg.field) != null ? zf : {}
}, AT = {
  baseStyle: ET,
  sizes: PT,
  variants: TT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, oi = ht("tooltip-bg"), dl = ht("tooltip-fg"), $T = ht("popper-arrow-bg"), RT = {
  bg: oi.reference,
  color: dl.reference,
  [oi.variable]: "colors.gray.700",
  [dl.variable]: "colors.whiteAlpha.900",
  _dark: {
    [oi.variable]: "colors.gray.300",
    [dl.variable]: "colors.gray.900"
  },
  [$T.variable]: oi.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, OT = {
  baseStyle: RT
}, { defineMultiStyleConfig: DT, definePartsStyle: Yo } = Ye(U_.keys), MT = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = le(
    wf(),
    wf("1rem", "rgba(0,0,0,0.1)")
  )(e), i = le(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${fr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, FT = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, IT = (e) => ({
  bg: le("gray.100", "whiteAlpha.300")(e)
}), jT = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...MT(e)
}), BT = Yo((e) => ({
  label: FT,
  filledTrack: jT(e),
  track: IT(e)
})), zT = {
  xs: Yo({
    track: { h: "1" }
  }),
  sm: Yo({
    track: { h: "2" }
  }),
  md: Yo({
    track: { h: "3" }
  }),
  lg: Yo({
    track: { h: "4" }
  })
}, VT = DT({
  sizes: zT,
  baseStyle: BT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), NT = (e) => typeof e == "function";
function Tt(e, ...t) {
  return NT(e) ? e(...t) : e;
}
var { definePartsStyle: $i, defineMultiStyleConfig: LT } = Ye(M_.keys), ea = pe("checkbox-size"), WT = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ea.reference,
    h: ea.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: le(`${t}.500`, `${t}.200`)(e),
      borderColor: le(`${t}.500`, `${t}.200`)(e),
      color: le("white", "gray.900")(e),
      _hover: {
        bg: le(`${t}.600`, `${t}.300`)(e),
        borderColor: le(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: le("gray.200", "transparent")(e),
        bg: le("gray.200", "whiteAlpha.300")(e),
        color: le("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: le(`${t}.500`, `${t}.200`)(e),
      borderColor: le(`${t}.500`, `${t}.200`)(e),
      color: le("white", "gray.900")(e)
    },
    _disabled: {
      bg: le("gray.100", "whiteAlpha.100")(e),
      borderColor: le("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: le("red.500", "red.300")(e)
    }
  };
}, HT = {
  _disabled: { cursor: "not-allowed" }
}, UT = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, YT = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, GT = $i((e) => ({
  icon: YT,
  container: HT,
  control: Tt(WT, e),
  label: UT
})), qT = {
  sm: $i({
    control: { [ea.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: $i({
    control: { [ea.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: $i({
    control: { [ea.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ki = LT({
  baseStyle: GT,
  sizes: qT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: XT, definePartsStyle: Ri } = Ye(Y_.keys), KT = (e) => {
  var t;
  const r = (t = Tt(Ki.baseStyle, e)) == null ? void 0 : t.control;
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
}, ZT = Ri((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Ki).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Ki).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: KT(e)
  };
}), JT = {
  md: Ri({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ri({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ri({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, QT = XT({
  baseStyle: ZT,
  sizes: JT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: eP, definePartsStyle: tP } = Ye(G_.keys), ai = pe("select-bg"), Vf, rP = {
  ...(Vf = Be.baseStyle) == null ? void 0 : Vf.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ai.reference,
  [ai.variable]: "colors.white",
  _dark: {
    [ai.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ai.reference
  }
}, nP = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, oP = tP({
  field: rP,
  icon: nP
}), ii = {
  paddingInlineEnd: "8"
}, Nf, Lf, Wf, Hf, Uf, Yf, Gf, qf, aP = {
  lg: {
    ...(Nf = Be.sizes) == null ? void 0 : Nf.lg,
    field: {
      ...(Lf = Be.sizes) == null ? void 0 : Lf.lg.field,
      ...ii
    }
  },
  md: {
    ...(Wf = Be.sizes) == null ? void 0 : Wf.md,
    field: {
      ...(Hf = Be.sizes) == null ? void 0 : Hf.md.field,
      ...ii
    }
  },
  sm: {
    ...(Uf = Be.sizes) == null ? void 0 : Uf.sm,
    field: {
      ...(Yf = Be.sizes) == null ? void 0 : Yf.sm.field,
      ...ii
    }
  },
  xs: {
    ...(Gf = Be.sizes) == null ? void 0 : Gf.xs,
    field: {
      ...(qf = Be.sizes) == null ? void 0 : qf.xs.field,
      ...ii
    },
    icon: {
      insetEnd: "1"
    }
  }
}, iP = eP({
  baseStyle: oP,
  sizes: aP,
  variants: Be.variants,
  defaultProps: Be.defaultProps
}), fl = pe("skeleton-start-color"), pl = pe("skeleton-end-color"), sP = {
  [fl.variable]: "colors.gray.100",
  [pl.variable]: "colors.gray.400",
  _dark: {
    [fl.variable]: "colors.gray.800",
    [pl.variable]: "colors.gray.600"
  },
  background: fl.reference,
  borderColor: pl.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, lP = {
  baseStyle: sP
}, hl = pe("skip-link-bg"), cP = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [hl.variable]: "colors.white",
    _dark: {
      [hl.variable]: "colors.gray.700"
    },
    bg: hl.reference
  }
}, uP = {
  baseStyle: cP
}, { defineMultiStyleConfig: dP, definePartsStyle: Es } = Ye(q_.keys), xa = pe("slider-thumb-size"), Sa = pe("slider-track-size"), sn = pe("slider-bg"), fP = (e) => {
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
    ...xu({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, pP = (e) => ({
  ...xu({
    orientation: e.orientation,
    horizontal: { h: Sa.reference },
    vertical: { w: Sa.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [sn.variable]: "colors.gray.200",
  _dark: {
    [sn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [sn.variable]: "colors.gray.300",
    _dark: {
      [sn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: sn.reference
}), hP = (e) => {
  const { orientation: t } = e;
  return {
    ...xu({
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
    w: xa.reference,
    h: xa.reference,
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
}, mP = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [sn.variable]: `colors.${t}.500`,
    _dark: {
      [sn.variable]: `colors.${t}.200`
    },
    bg: sn.reference
  };
}, vP = Es((e) => ({
  container: fP(e),
  track: pP(e),
  thumb: hP(e),
  filledTrack: mP(e)
})), gP = Es({
  container: {
    [xa.variable]: "sizes.4",
    [Sa.variable]: "sizes.1"
  }
}), bP = Es({
  container: {
    [xa.variable]: "sizes.3.5",
    [Sa.variable]: "sizes.1"
  }
}), yP = Es({
  container: {
    [xa.variable]: "sizes.2.5",
    [Sa.variable]: "sizes.0.5"
  }
}), xP = {
  lg: gP,
  md: bP,
  sm: yP
}, SP = dP({
  baseStyle: vP,
  sizes: xP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), _n = ht("spinner-size"), wP = {
  width: [_n.reference],
  height: [_n.reference]
}, CP = {
  xs: {
    [_n.variable]: "sizes.3"
  },
  sm: {
    [_n.variable]: "sizes.4"
  },
  md: {
    [_n.variable]: "sizes.6"
  },
  lg: {
    [_n.variable]: "sizes.8"
  },
  xl: {
    [_n.variable]: "sizes.12"
  }
}, kP = {
  baseStyle: wP,
  sizes: CP,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: _P, definePartsStyle: qm } = Ye(X_.keys), EP = {
  fontWeight: "medium"
}, TP = {
  opacity: 0.8,
  marginBottom: "2"
}, PP = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, AP = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, $P = qm({
  container: {},
  label: EP,
  helpText: TP,
  number: PP,
  icon: AP
}), RP = {
  md: qm({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, OP = _P({
  baseStyle: $P,
  sizes: RP,
  defaultProps: {
    size: "md"
  }
}), ml = pe("kbd-bg"), DP = {
  [ml.variable]: "colors.gray.100",
  _dark: {
    [ml.variable]: "colors.whiteAlpha.100"
  },
  bg: ml.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, MP = {
  baseStyle: DP
}, FP = {
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
}, IP = {
  baseStyle: FP
}, { defineMultiStyleConfig: jP, definePartsStyle: BP } = Ye(V_.keys), zP = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, VP = BP({
  icon: zP
}), NP = jP({
  baseStyle: VP
}), { defineMultiStyleConfig: LP, definePartsStyle: WP } = Ye(N_.keys), Cr = pe("menu-bg"), vl = pe("menu-shadow"), HP = {
  [Cr.variable]: "#fff",
  [vl.variable]: "shadows.sm",
  _dark: {
    [Cr.variable]: "colors.gray.700",
    [vl.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Cr.reference,
  boxShadow: vl.reference
}, UP = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Cr.variable]: "colors.gray.200",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Cr.variable]: "colors.gray.100",
    _dark: {
      [Cr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Cr.reference
}, YP = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, GP = {
  opacity: 0.6
}, qP = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, XP = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, KP = WP({
  button: XP,
  list: HP,
  item: UP,
  groupTitle: YP,
  command: GP,
  divider: qP
}), ZP = LP({
  baseStyle: KP
}), { defineMultiStyleConfig: JP, definePartsStyle: Sc } = Ye(L_.keys), gl = pe("modal-bg"), bl = pe("modal-shadow"), QP = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, eA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, tA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [gl.variable]: "colors.white",
    [bl.variable]: "shadows.lg",
    _dark: {
      [gl.variable]: "colors.gray.700",
      [bl.variable]: "shadows.dark-lg"
    },
    bg: gl.reference,
    boxShadow: bl.reference
  };
}, rA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, nA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, oA = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, aA = {
  px: "6",
  py: "4"
}, iA = Sc((e) => ({
  overlay: QP,
  dialogContainer: Tt(eA, e),
  dialog: Tt(tA, e),
  header: rA,
  closeButton: nA,
  body: Tt(oA, e),
  footer: aA
}));
function ir(e) {
  return Sc(e === "full" ? {
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
var sA = {
  xs: ir("xs"),
  sm: ir("sm"),
  md: ir("md"),
  lg: ir("lg"),
  xl: ir("xl"),
  "2xl": ir("2xl"),
  "3xl": ir("3xl"),
  "4xl": ir("4xl"),
  "5xl": ir("5xl"),
  "6xl": ir("6xl"),
  full: ir("full")
}, lA = JP({
  baseStyle: iA,
  sizes: sA,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: cA, definePartsStyle: Xm } = Ye(W_.keys), wu = ht("number-input-stepper-width"), Km = ht("number-input-input-padding"), uA = Vr(wu).add("0.5rem").toString(), yl = ht("number-input-bg"), xl = ht("number-input-color"), Sl = ht("number-input-border-color"), dA = {
  [wu.variable]: "sizes.6",
  [Km.variable]: uA
}, fA = (e) => {
  var t, r;
  return (r = (t = Tt(Be.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, pA = {
  width: wu.reference
}, hA = {
  borderStart: "1px solid",
  borderStartColor: Sl.reference,
  color: xl.reference,
  bg: yl.reference,
  [xl.variable]: "colors.chakra-body-text",
  [Sl.variable]: "colors.chakra-border-color",
  _dark: {
    [xl.variable]: "colors.whiteAlpha.800",
    [Sl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [yl.variable]: "colors.gray.200",
    _dark: {
      [yl.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, mA = Xm((e) => {
  var t;
  return {
    root: dA,
    field: (t = Tt(fA, e)) != null ? t : {},
    stepperGroup: pA,
    stepper: hA
  };
});
function si(e) {
  var t, r, n;
  const o = (t = Be.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = Lm.fontSizes[i];
  return Xm({
    field: {
      ...o.field,
      paddingInlineEnd: Km.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Vr(s).multiply(0.75).toString(),
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
var vA = {
  xs: si("xs"),
  sm: si("sm"),
  md: si("md"),
  lg: si("lg")
}, gA = cA({
  baseStyle: mA,
  sizes: vA,
  variants: Be.variants,
  defaultProps: Be.defaultProps
}), Xf, bA = {
  ...(Xf = Be.baseStyle) == null ? void 0 : Xf.field,
  textAlign: "center"
}, yA = {
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
}, Kf, Zf, xA = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Tt((t = Be.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Tt((t = Be.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Tt((t = Be.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Zf = (Kf = Be.variants) == null ? void 0 : Kf.unstyled.field) != null ? Zf : {}
}, SA = {
  baseStyle: bA,
  sizes: yA,
  variants: xA,
  defaultProps: Be.defaultProps
}, { defineMultiStyleConfig: wA, definePartsStyle: CA } = Ye(H_.keys), li = ht("popper-bg"), kA = ht("popper-arrow-bg"), Jf = ht("popper-arrow-shadow-color"), _A = { zIndex: 10 }, EA = {
  [li.variable]: "colors.white",
  bg: li.reference,
  [kA.variable]: li.reference,
  [Jf.variable]: "colors.gray.200",
  _dark: {
    [li.variable]: "colors.gray.700",
    [Jf.variable]: "colors.whiteAlpha.300"
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
}, TA = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, PA = {
  px: 3,
  py: 2
}, AA = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, $A = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, RA = CA({
  popper: _A,
  content: EA,
  header: TA,
  body: PA,
  footer: AA,
  closeButton: $A
}), OA = wA({
  baseStyle: RA
}), { definePartsStyle: wc, defineMultiStyleConfig: DA } = Ye(F_.keys), wl = pe("drawer-bg"), Cl = pe("drawer-box-shadow");
function Hn(e) {
  return wc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var MA = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, FA = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, IA = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [wl.variable]: "colors.white",
    [Cl.variable]: "shadows.lg",
    _dark: {
      [wl.variable]: "colors.gray.700",
      [Cl.variable]: "shadows.dark-lg"
    },
    bg: wl.reference,
    boxShadow: Cl.reference
  };
}, jA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, BA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, zA = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, VA = {
  px: "6",
  py: "4"
}, NA = wc((e) => ({
  overlay: MA,
  dialogContainer: FA,
  dialog: Tt(IA, e),
  header: jA,
  closeButton: BA,
  body: zA,
  footer: VA
})), LA = {
  xs: Hn("xs"),
  sm: Hn("md"),
  md: Hn("lg"),
  lg: Hn("2xl"),
  xl: Hn("4xl"),
  full: Hn("full")
}, WA = DA({
  baseStyle: NA,
  sizes: LA,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: HA, defineMultiStyleConfig: UA } = Ye(I_.keys), YA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, GA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, qA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, XA = HA({
  preview: YA,
  input: GA,
  textarea: qA
}), KA = UA({
  baseStyle: XA
}), { definePartsStyle: ZA, defineMultiStyleConfig: JA } = Ye(j_.keys), io = pe("form-control-color"), QA = {
  marginStart: "1",
  [io.variable]: "colors.red.500",
  _dark: {
    [io.variable]: "colors.red.300"
  },
  color: io.reference
}, e$ = {
  mt: "2",
  [io.variable]: "colors.gray.600",
  _dark: {
    [io.variable]: "colors.whiteAlpha.600"
  },
  color: io.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, t$ = ZA({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: QA,
  helperText: e$
}), r$ = JA({
  baseStyle: t$
}), { definePartsStyle: n$, defineMultiStyleConfig: o$ } = Ye(B_.keys), so = pe("form-error-color"), a$ = {
  [so.variable]: "colors.red.500",
  _dark: {
    [so.variable]: "colors.red.300"
  },
  color: so.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, i$ = {
  marginEnd: "0.5em",
  [so.variable]: "colors.red.500",
  _dark: {
    [so.variable]: "colors.red.300"
  },
  color: so.reference
}, s$ = n$({
  text: a$,
  icon: i$
}), l$ = o$({
  baseStyle: s$
}), c$ = {
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
}, u$ = {
  baseStyle: c$
}, d$ = {
  fontFamily: "heading",
  fontWeight: "bold"
}, f$ = {
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
}, p$ = {
  baseStyle: d$,
  sizes: f$,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: h$, definePartsStyle: m$ } = Ye(D_.keys), kl = pe("breadcrumb-link-decor"), v$ = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: kl.reference,
  [kl.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [kl.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, g$ = m$({
  link: v$
}), b$ = h$({
  baseStyle: g$
}), y$ = {
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
}, Zm = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: le("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: le("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: le("gray.200", "whiteAlpha.300")(e) }
    };
  const n = yo(`${t}.200`, 0.12)(r), o = yo(`${t}.200`, 0.24)(r);
  return {
    color: le(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: le(`${t}.50`, n)(e)
    },
    _active: {
      bg: le(`${t}.100`, o)(e)
    }
  };
}, x$ = (e) => {
  const { colorScheme: t } = e, r = le("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Tt(Zm, e)
  };
}, S$ = {
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
}, w$ = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = le("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: le("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: le("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: le("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = S$[r]) != null ? t : {}, s = le(n, `${r}.200`)(e);
  return {
    bg: s,
    color: le(o, "gray.800")(e),
    _hover: {
      bg: le(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: le(i, `${r}.400`)(e) }
  };
}, C$ = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: le(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: le(`${t}.700`, `${t}.500`)(e)
    }
  };
}, k$ = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, _$ = {
  ghost: Zm,
  outline: x$,
  solid: w$,
  link: C$,
  unstyled: k$
}, E$ = {
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
}, T$ = {
  baseStyle: y$,
  variants: _$,
  sizes: E$,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: On, defineMultiStyleConfig: P$ } = Ye(eE.keys), Zi = pe("card-bg"), Wr = pe("card-padding"), Jm = pe("card-shadow"), Oi = pe("card-radius"), Qm = pe("card-border-width", "0"), ev = pe("card-border-color"), A$ = On({
  container: {
    [Zi.variable]: "colors.chakra-body-bg",
    backgroundColor: Zi.reference,
    boxShadow: Jm.reference,
    borderRadius: Oi.reference,
    color: "chakra-body-text",
    borderWidth: Qm.reference,
    borderColor: ev.reference
  },
  body: {
    padding: Wr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Wr.reference
  },
  footer: {
    padding: Wr.reference
  }
}), $$ = {
  sm: On({
    container: {
      [Oi.variable]: "radii.base",
      [Wr.variable]: "space.3"
    }
  }),
  md: On({
    container: {
      [Oi.variable]: "radii.md",
      [Wr.variable]: "space.5"
    }
  }),
  lg: On({
    container: {
      [Oi.variable]: "radii.xl",
      [Wr.variable]: "space.7"
    }
  })
}, R$ = {
  elevated: On({
    container: {
      [Jm.variable]: "shadows.base",
      _dark: {
        [Zi.variable]: "colors.gray.700"
      }
    }
  }),
  outline: On({
    container: {
      [Qm.variable]: "1px",
      [ev.variable]: "colors.chakra-border-color"
    }
  }),
  filled: On({
    container: {
      [Zi.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Wr.variable]: 0
    },
    header: {
      [Wr.variable]: 0
    },
    footer: {
      [Wr.variable]: 0
    }
  }
}, O$ = P$({
  baseStyle: A$,
  variants: R$,
  sizes: $$,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ta = ht("close-button-size"), jo = ht("close-button-bg"), D$ = {
  w: [ta.reference],
  h: [ta.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [jo.variable]: "colors.blackAlpha.100",
    _dark: {
      [jo.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [jo.variable]: "colors.blackAlpha.200",
    _dark: {
      [jo.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: jo.reference
}, M$ = {
  lg: {
    [ta.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ta.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ta.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, F$ = {
  baseStyle: D$,
  sizes: M$,
  defaultProps: {
    size: "md"
  }
}, { variants: I$, defaultProps: j$ } = Qo, B$ = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: lt.bg.reference,
  color: lt.color.reference,
  boxShadow: lt.shadow.reference
}, z$ = {
  baseStyle: B$,
  variants: I$,
  defaultProps: j$
}, V$ = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, N$ = {
  baseStyle: V$
}, L$ = {
  opacity: 0.6,
  borderColor: "inherit"
}, W$ = {
  borderStyle: "solid"
}, H$ = {
  borderStyle: "dashed"
}, U$ = {
  solid: W$,
  dashed: H$
}, Y$ = {
  baseStyle: L$,
  variants: U$,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: G$, defineMultiStyleConfig: q$ } = Ye($_.keys), X$ = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, K$ = {
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
}, Z$ = {
  pt: "2",
  px: "4",
  pb: "5"
}, J$ = {
  fontSize: "1.25em"
}, Q$ = G$({
  container: X$,
  button: K$,
  panel: Z$,
  icon: J$
}), eR = q$({ baseStyle: Q$ }), { definePartsStyle: Fa, defineMultiStyleConfig: tR } = Ye(R_.keys), Wt = pe("alert-fg"), Xr = pe("alert-bg"), rR = Fa({
  container: {
    bg: Xr.reference,
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
    color: Wt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Wt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Cu(e) {
  const { theme: t, colorScheme: r } = e, n = yo(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var nR = Fa((e) => {
  const { colorScheme: t } = e, r = Cu(e);
  return {
    container: {
      [Wt.variable]: `colors.${t}.500`,
      [Xr.variable]: r.light,
      _dark: {
        [Wt.variable]: `colors.${t}.200`,
        [Xr.variable]: r.dark
      }
    }
  };
}), oR = Fa((e) => {
  const { colorScheme: t } = e, r = Cu(e);
  return {
    container: {
      [Wt.variable]: `colors.${t}.500`,
      [Xr.variable]: r.light,
      _dark: {
        [Wt.variable]: `colors.${t}.200`,
        [Xr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Wt.reference
    }
  };
}), aR = Fa((e) => {
  const { colorScheme: t } = e, r = Cu(e);
  return {
    container: {
      [Wt.variable]: `colors.${t}.500`,
      [Xr.variable]: r.light,
      _dark: {
        [Wt.variable]: `colors.${t}.200`,
        [Xr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Wt.reference
    }
  };
}), iR = Fa((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Wt.variable]: "colors.white",
      [Xr.variable]: `colors.${t}.500`,
      _dark: {
        [Wt.variable]: "colors.gray.900",
        [Xr.variable]: `colors.${t}.200`
      },
      color: Wt.reference
    }
  };
}), sR = {
  subtle: nR,
  "left-accent": oR,
  "top-accent": aR,
  solid: iR
}, lR = tR({
  baseStyle: rR,
  variants: sR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: tv, defineMultiStyleConfig: cR } = Ye(O_.keys), lo = pe("avatar-border-color"), ra = pe("avatar-bg"), wa = pe("avatar-font-size"), xo = pe("avatar-size"), uR = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: lo.reference,
  [lo.variable]: "white",
  _dark: {
    [lo.variable]: "colors.gray.800"
  }
}, dR = {
  bg: ra.reference,
  fontSize: wa.reference,
  width: xo.reference,
  height: xo.reference,
  lineHeight: "1",
  [ra.variable]: "colors.gray.200",
  _dark: {
    [ra.variable]: "colors.whiteAlpha.400"
  }
}, fR = (e) => {
  const { name: t, theme: r } = e, n = t ? xE({ string: t }) : "colors.gray.400", o = bE(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: ra.reference,
    fontSize: wa.reference,
    color: a,
    borderColor: lo.reference,
    verticalAlign: "top",
    width: xo.reference,
    height: xo.reference,
    "&:not([data-loaded])": {
      [ra.variable]: n
    },
    [lo.variable]: "colors.white",
    _dark: {
      [lo.variable]: "colors.gray.800"
    }
  };
}, pR = {
  fontSize: wa.reference,
  lineHeight: "1"
}, hR = tv((e) => ({
  badge: Tt(uR, e),
  excessLabel: Tt(dR, e),
  container: Tt(fR, e),
  label: pR
}));
function nn(e) {
  const t = e !== "100%" ? Hm[e] : void 0;
  return tv({
    container: {
      [xo.variable]: t ?? e,
      [wa.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [xo.variable]: t ?? e,
      [wa.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var mR = {
  "2xs": nn(4),
  xs: nn(6),
  sm: nn(8),
  md: nn(12),
  lg: nn(16),
  xl: nn(24),
  "2xl": nn(32),
  full: nn("100%")
}, vR = cR({
  baseStyle: hR,
  sizes: mR,
  defaultProps: {
    size: "md"
  }
}), gR = {
  Accordion: eR,
  Alert: lR,
  Avatar: vR,
  Badge: Qo,
  Breadcrumb: b$,
  Button: T$,
  Checkbox: Ki,
  CloseButton: F$,
  Code: z$,
  Container: N$,
  Divider: Y$,
  Drawer: WA,
  Editable: KA,
  Form: r$,
  FormError: l$,
  FormLabel: u$,
  Heading: p$,
  Input: Be,
  Kbd: MP,
  Link: IP,
  List: NP,
  Menu: ZP,
  Modal: lA,
  NumberInput: gA,
  PinInput: SA,
  Popover: OA,
  Progress: VT,
  Radio: QT,
  Select: iP,
  Skeleton: lP,
  SkipLink: uP,
  Slider: SP,
  Spinner: kP,
  Stat: OP,
  Switch: IE,
  Table: WE,
  Tabs: oT,
  Tag: gT,
  Textarea: AT,
  Tooltip: OT,
  Card: O$,
  Stepper: A_
}, rv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, nv = {
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
}, ov = "ltr", av = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, iv = {
  semanticTokens: rv,
  direction: ov,
  ...Um,
  components: gR,
  styles: nv,
  config: av
}, Dz = iv, bR = {
  semanticTokens: rv,
  direction: ov,
  components: {},
  ...Um,
  styles: nv,
  config: av
};
function Go(e) {
  return typeof e == "function";
}
function yR(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var sv = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return n_(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, yR(
    ...n.map(
      (a) => (i) => Go(a) ? a(i) : lv(i, a)
    )
  )(o);
}, Mz = sv(iv), Fz = sv(bR);
function lv(...e) {
  return Jt({}, ...e, cv);
}
function cv(e, t, r, n) {
  if ((Go(e) || Go(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = Go(e) ? e(...o) : e, i = Go(t) ? t(...o) : t;
      return Jt({}, a, i, cv);
    };
}
function xR(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function SR(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var wR = (e) => {
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
}, CR = wR(SR);
function uv(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var dv = (e) => uv(e, (t) => t != null);
function Qf(e) {
  return typeof e == "number";
}
function kR(e) {
  return typeof e == "function";
}
var _R = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function Iz(e) {
  return "current" in e;
}
function ER(e, ...t) {
  return kR(e) ? e(...t) : e;
}
function jz(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function TR(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var Bz = () => {
}, zz = /* @__PURE__ */ TR((e) => () => {
  const { condition: t, message: r } = e;
  t && _R && console.warn(r);
}), Vz = (...e) => (t) => e.reduce((r, n) => n(r), t), _l = (e, t) => Math.abs(e - t), ep = (e) => "x" in e && "y" in e;
function Nz(e, t) {
  if (Qf(e) && Qf(t))
    return _l(e, t);
  if (ep(e) && ep(t)) {
    const r = _l(e.x, t.x), n = _l(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const fv = 1 / 60 * 1e3, PR = typeof performance < "u" ? () => performance.now() : () => Date.now(), pv = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(PR()), fv);
function AR(e) {
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
const $R = 40;
let Cc = !0, Ca = !1, kc = !1;
const co = {
  delta: 0,
  timestamp: 0
}, Ia = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ts = Ia.reduce((e, t) => (e[t] = AR(() => Ca = !0), e), {}), RR = Ia.reduce((e, t) => {
  const r = Ts[t];
  return e[t] = (n, o = !1, a = !1) => (Ca || MR(), r.schedule(n, o, a)), e;
}, {}), OR = Ia.reduce((e, t) => (e[t] = Ts[t].cancel, e), {});
Ia.reduce((e, t) => (e[t] = () => Ts[t].process(co), e), {});
const DR = (e) => Ts[e].process(co), hv = (e) => {
  Ca = !1, co.delta = Cc ? fv : Math.max(Math.min(e - co.timestamp, $R), 1), co.timestamp = e, kc = !0, Ia.forEach(DR), kc = !1, Ca && (Cc = !1, pv(hv));
}, MR = () => {
  Ca = !0, Cc = !0, kc || pv(hv);
}, tp = () => co;
var FR = typeof Element < "u", IR = typeof Map == "function", jR = typeof Set == "function", BR = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Di(e, t) {
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
        if (!Di(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (IR && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Di(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (jR && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (BR && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (FR && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Di(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var zR = function(t, r) {
  try {
    return Di(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const VR = /* @__PURE__ */ ps(zR);
function ku(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = Mm(), s = e ? CR(a, `components.${e}`) : void 0, l = n || s, c = Jt(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    dv(xR(o, ["children"]))
  ), u = Re({});
  if (l) {
    const f = t_(l)(c);
    VR(u.current, f) || (u.current = f);
  }
  return u.current;
}
function _u(e, t = {}) {
  return ku(e, t);
}
function Eu(e, t = {}) {
  return ku(e, t);
}
function Lz(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = Mm(), i = (r = a.components) == null ? void 0 : r[e], s = i ? lv(i, n) : n;
  return ku(null, {
    ...o,
    styleConfig: s
  });
}
var NR = /* @__PURE__ */ new Set([
  ...Lk,
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
]), LR = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function WR(e) {
  return LR.has(e) || !NR.has(e);
}
function HR(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var UR = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, YR = /* @__PURE__ */ _m(
  function(e) {
    return UR.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), GR = YR, qR = function(t) {
  return t !== "theme";
}, rp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? GR : qR;
}, np = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, op = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, XR = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return ys(r, n, o), fu(function() {
    return xs(r, n, o);
  }), null;
}, KR = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = np(t, r, n), l = s || rp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(op), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(op), d.push(u[p], u[0][p]);
    }
    var m = Ss(function(h, g, y) {
      var x = c && h.as || o, w = "", E = [], _ = h;
      if (h.theme == null) {
        _ = {};
        for (var j in h)
          _[j] = h[j];
        _.theme = L.useContext(dn);
      }
      typeof h.className == "string" ? w = uu(g.registered, E, h.className) : h.className != null && (w = h.className + " ");
      var D = bo(d.concat(E), g.registered, _);
      w += g.key + "-" + D.name, i !== void 0 && (w += " " + i);
      var z = c && s === void 0 ? rp(x) : l, V = {};
      for (var B in h)
        c && B === "as" || // $FlowFixMe
        z(B) && (V[B] = h[B]);
      return V.className = w, V.ref = y, /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(XR, {
        cache: g,
        serialized: D,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ L.createElement(x, V));
    });
    return m.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), m.withComponent = function(h, g) {
      return e(h, Fn({}, r, g, {
        shouldForwardProp: np(m, g, !0)
      })).apply(void 0, d);
    }, m;
  };
}, ZR = [
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
], Ji = KR.bind();
ZR.forEach(function(e) {
  Ji[e] = Ji(e);
});
var ap, JR = (ap = Ji.default) != null ? ap : Ji, QR = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = uv(i, (d, f) => Hk(f)), l = ER(e, t), c = HR(
    {},
    o,
    l,
    dv(s),
    a
  ), u = Zk(c)(t.theme);
  return n ? [u, n] : u;
};
function El(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = WR);
  const o = QR({ baseStyle: r }), a = JR(
    e,
    n
  )(o);
  return Pt.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = mu();
    return Pt.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function eO() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(El, {
    apply(t, r, n) {
      return El(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, El(r)), e.get(r);
    }
  });
}
var Le = eO();
function ot(e) {
  return kt(e);
}
function Qt(e, t = []) {
  const r = Re(e);
  return Xe(() => {
    r.current = e;
  }), ce((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function mv(e, t) {
  const r = Re(!1), n = Re(!1);
  Xe(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Xe(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const vv = Or({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Ps = Or({}), ja = Or(null), As = typeof document < "u", Qi = As ? Qc : Xe, gv = Or({ strict: !1 });
function tO(e, t, r, n) {
  const { visualElement: o } = ft(Ps), a = ft(gv), i = ft(ja), s = ft(vv).reducedMotion, l = Re();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return Wh(() => {
    c && c.update(r, i);
  }), Qi(() => {
    c && c.render();
  }), Xe(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? Qi : Xe)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function Qn(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function rO(e, t, r) {
  return ce(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Qn(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function ka(e) {
  return typeof e == "string" || Array.isArray(e);
}
function $s(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Tu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Pu = ["initial", ...Tu];
function Rs(e) {
  return $s(e.animate) || Pu.some((t) => ka(e[t]));
}
function bv(e) {
  return !!(Rs(e) || e.variants);
}
function nO(e, t) {
  if (Rs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ka(r) ? r : void 0,
      animate: ka(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function oO(e) {
  const { initial: t, animate: r } = nO(e, ft(Ps));
  return It(() => ({ initial: t, animate: r }), [ip(t), ip(r)]);
}
function ip(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const sp = {
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
}, _a = {};
for (const e in sp)
  _a[e] = {
    isEnabled: (t) => sp[e].some((r) => !!t[r])
  };
function aO(e) {
  for (const t in e)
    _a[t] = {
      ..._a[t],
      ...e[t]
    };
}
const Au = Or({}), yv = Or({}), iO = Symbol.for("motionComponentSymbol");
function sO({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && aO(e);
  function a(s, l) {
    let c;
    const u = {
      ...ft(vv),
      ...s,
      layoutId: lO(s)
    }, { isStatic: d } = u, f = oO(s), p = n(s, d);
    if (!d && As) {
      f.visualElement = tO(o, p, u, t);
      const m = ft(yv), h = ft(gv).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        h,
        e,
        m
      ));
    }
    return L.createElement(
      Ps.Provider,
      { value: f },
      c && f.visualElement ? L.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, rO(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = kt(a);
  return i[iO] = o, i;
}
function lO({ layoutId: e }) {
  const t = ft(Au).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function cO(e) {
  function t(n, o = {}) {
    return sO(e(n, o));
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
const uO = [
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
function $u(e) {
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
      !!(uO.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const es = {};
function dO(e) {
  Object.assign(es, e);
}
const Ba = [
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
], zn = new Set(Ba);
function xv(e, { layout: t, layoutId: r }) {
  return zn.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!es[e] || e === "opacity");
}
const Bt = (e) => !!(e && e.getVelocity), fO = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, pO = Ba.length;
function hO(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < pO; i++) {
    const s = Ba[i];
    if (e[s] !== void 0) {
      const l = fO[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Sv = (e) => (t) => typeof t == "string" && t.startsWith(e), wv = Sv("--"), _c = Sv("var(--"), mO = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, vO = (e, t) => t && typeof e == "number" ? t.transform(e) : e, fn = (e, t, r) => Math.min(Math.max(r, e), t), Vn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, na = {
  ...Vn,
  transform: (e) => fn(0, 1, e)
}, ci = {
  ...Vn,
  default: 1
}, oa = (e) => Math.round(e * 1e5) / 1e5, Os = /(-)?([\d]*\.?[\d])+/g, Cv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, gO = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function za(e) {
  return typeof e == "string";
}
const Va = (e) => ({
  test: (t) => za(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), on = Va("deg"), Ar = Va("%"), ue = Va("px"), bO = Va("vh"), yO = Va("vw"), lp = {
  ...Ar,
  parse: (e) => Ar.parse(e) / 100,
  transform: (e) => Ar.transform(e * 100)
}, cp = {
  ...Vn,
  transform: Math.round
}, kv = {
  // Border props
  borderWidth: ue,
  borderTopWidth: ue,
  borderRightWidth: ue,
  borderBottomWidth: ue,
  borderLeftWidth: ue,
  borderRadius: ue,
  radius: ue,
  borderTopLeftRadius: ue,
  borderTopRightRadius: ue,
  borderBottomRightRadius: ue,
  borderBottomLeftRadius: ue,
  // Positioning props
  width: ue,
  maxWidth: ue,
  height: ue,
  maxHeight: ue,
  size: ue,
  top: ue,
  right: ue,
  bottom: ue,
  left: ue,
  // Spacing props
  padding: ue,
  paddingTop: ue,
  paddingRight: ue,
  paddingBottom: ue,
  paddingLeft: ue,
  margin: ue,
  marginTop: ue,
  marginRight: ue,
  marginBottom: ue,
  marginLeft: ue,
  // Transform props
  rotate: on,
  rotateX: on,
  rotateY: on,
  rotateZ: on,
  scale: ci,
  scaleX: ci,
  scaleY: ci,
  scaleZ: ci,
  skew: on,
  skewX: on,
  skewY: on,
  distance: ue,
  translateX: ue,
  translateY: ue,
  translateZ: ue,
  x: ue,
  y: ue,
  z: ue,
  perspective: ue,
  transformPerspective: ue,
  opacity: na,
  originX: lp,
  originY: lp,
  originZ: ue,
  // Misc
  zIndex: cp,
  // SVG
  fillOpacity: na,
  strokeOpacity: na,
  numOctaves: cp
};
function Ru(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (wv(d)) {
      a[d] = f;
      continue;
    }
    const p = kv[d], m = vO(f, p);
    if (zn.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = hO(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Ou = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function _v(e, t, r) {
  for (const n in t)
    !Bt(t[n]) && !xv(n, r) && (e[n] = t[n]);
}
function xO({ transformTemplate: e }, t, r) {
  return It(() => {
    const n = Ou();
    return Ru(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function SO(e, t, r) {
  const n = e.style || {}, o = {};
  return _v(o, n, e), Object.assign(o, xO(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function wO(e, t, r) {
  const n = {}, o = SO(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const CO = /* @__PURE__ */ new Set([
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
function ts(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || CO.has(e);
}
let Ev = (e) => !ts(e);
function kO(e) {
  e && (Ev = (t) => t.startsWith("on") ? !ts(t) : e(t));
}
try {
  kO(require("@emotion/is-prop-valid").default);
} catch {
}
function _O(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Ev(o) || r === !0 && ts(o) || !t && !ts(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function up(e, t, r) {
  return typeof e == "string" ? e : ue.transform(t + r * e);
}
function EO(e, t, r) {
  const n = up(t, e.x, e.width), o = up(r, e.y, e.height);
  return `${n} ${o}`;
}
const TO = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, PO = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function AO(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? TO : PO;
  e[a.offset] = ue.transform(-n);
  const i = ue.transform(t), s = ue.transform(r);
  e[a.array] = `${i} ${s}`;
}
function Du(e, {
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
  if (Ru(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = EO(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && AO(p, i, s, l, !1);
}
const Tv = () => ({
  ...Ou(),
  attrs: {}
}), Mu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $O(e, t, r, n) {
  const o = It(() => {
    const a = Tv();
    return Du(a, t, { enableHardwareAcceleration: !1 }, Mu(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    _v(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function RO(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = ($u(r) ? $O : wO)(n, a, i, r), u = {
      ..._O(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = It(() => Bt(d) ? d.get() : d, [d]);
    return Zt(r, {
      ...u,
      children: f
    });
  };
}
const Fu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Pv(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Av = /* @__PURE__ */ new Set([
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
function $v(e, t, r, n) {
  Pv(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Av.has(o) ? o : Fu(o), t.attrs[o]);
}
function Iu(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Bt(r[o]) || t.style && Bt(t.style[o]) || xv(o, e)) && (n[o] = r[o]);
  return n;
}
function Rv(e, t) {
  const r = Iu(e, t);
  for (const n in e)
    if (Bt(e[n]) || Bt(t[n])) {
      const o = Ba.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function ju(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function Ov(e) {
  const t = Re(null);
  return t.current === null && (t.current = e()), t.current;
}
const rs = (e) => Array.isArray(e), OO = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), DO = (e) => rs(e) ? e[e.length - 1] || 0 : e;
function Mi(e) {
  const t = Bt(e) ? e.get() : e;
  return OO(t) ? t.toValue() : t;
}
function MO({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: FO(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const Dv = (e) => (t, r) => {
  const n = ft(Ps), o = ft(ja), a = () => MO(e, t, n, o);
  return r ? a() : Ov(a);
};
function FO(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = Mi(a[f]);
  let { initial: i, animate: s } = e;
  const l = Rs(e), c = bv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !$s(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = ju(e, p);
    if (!m)
      return;
    const { transitionEnd: h, transition: g, ...y } = m;
    for (const x in y) {
      let w = y[x];
      if (Array.isArray(w)) {
        const E = u ? w.length - 1 : 0;
        w = w[E];
      }
      w !== null && (o[x] = w);
    }
    for (const x in h)
      o[x] = h[x];
  }), o;
}
const IO = {
  useVisualState: Dv({
    scrapeMotionValuesFromProps: Rv,
    createRenderState: Tv,
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
      Du(r, n, { enableHardwareAcceleration: !1 }, Mu(t.tagName), e.transformTemplate), $v(t, r);
    }
  })
}, jO = {
  useVisualState: Dv({
    scrapeMotionValuesFromProps: Iu,
    createRenderState: Ou
  })
};
function BO(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...$u(e) ? IO : jO,
    preloadedFeatures: r,
    useRender: RO(t),
    createVisualElement: n,
    Component: e
  };
}
function Lr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Mv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ds(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const zO = (e) => (t) => Mv(t) && e(t, Ds(t));
function Hr(e, t, r, n) {
  return Lr(e, t, zO(r), n);
}
const VO = (e, t) => (r) => t(e(r)), ln = (...e) => e.reduce(VO);
function Fv(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const dp = Fv("dragHorizontal"), fp = Fv("dragVertical");
function Iv(e) {
  let t = !1;
  if (e === "y")
    t = fp();
  else if (e === "x")
    t = dp();
  else {
    const r = dp(), n = fp();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function jv() {
  const e = Iv(!0);
  return e ? (e(), !1) : !0;
}
class vn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function NO(e) {
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
const rt = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, LO = 40;
let Ec = !0, Ea = !1;
const Ms = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], uo = Ms.reduce((e, t) => (e[t] = NO(() => Ea = !0), e), {}), WO = (e) => uo[e].process(rt), Bv = (e) => {
  Ea = !1, rt.delta = Ec ? 1e3 / 60 : Math.max(Math.min(e - rt.timestamp, LO), 1), rt.timestamp = e, rt.isProcessing = !0, Ms.forEach(WO), rt.isProcessing = !1, Ea && (Ec = !1, requestAnimationFrame(Bv));
}, HO = () => {
  Ea = !0, Ec = !0, rt.isProcessing || requestAnimationFrame(Bv);
}, Je = Ms.reduce((e, t) => {
  const r = uo[t];
  return e[t] = (n, o = !1, a = !1) => (Ea || HO(), r.schedule(n, o, a)), e;
}, {});
function Kr(e) {
  Ms.forEach((t) => uo[t].cancel(e));
}
function pp(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || jv())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && Je.update(() => s[n](a, i));
  };
  return Hr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class UO extends vn {
  mount() {
    this.unmount = ln(pp(this.node, !0), pp(this.node, !1));
  }
  unmount() {
  }
}
class YO extends vn {
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
    this.unmount = ln(Lr(this.node.current, "focus", () => this.onFocus()), Lr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const zv = (e, t) => t ? e === t ? !0 : zv(e, t.parentElement) : !1, pt = (e) => e;
function Tl(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Ds(r));
}
class GO extends vn {
  constructor() {
    super(...arguments), this.removeStartListeners = pt, this.removeEndListeners = pt, this.removeAccessibleListeners = pt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Hr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        Je.update(() => {
          zv(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Hr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = ln(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Tl("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && Je.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Lr(this.node.current, "keyup", i), Tl("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Lr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Tl("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Lr(this.node.current, "blur", n);
      this.removeAccessibleListeners = ln(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Je.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !jv();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && Je.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Hr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Lr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = ln(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Tc = /* @__PURE__ */ new WeakMap(), Pl = /* @__PURE__ */ new WeakMap(), qO = (e) => {
  const t = Tc.get(e.target);
  t && t(e);
}, XO = (e) => {
  e.forEach(qO);
};
function KO({ root: e, ...t }) {
  const r = e || document;
  Pl.has(r) || Pl.set(r, {});
  const n = Pl.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(XO, { root: e, ...t })), n[o];
}
function ZO(e, t, r) {
  const n = KO(t);
  return Tc.set(e, r), n.observe(e), () => {
    Tc.delete(e), n.unobserve(e);
  };
}
const JO = {
  some: 0,
  all: 1
};
class QO extends vn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : JO[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return ZO(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(e2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function e2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const t2 = {
  inView: {
    Feature: QO
  },
  tap: {
    Feature: GO
  },
  focus: {
    Feature: YO
  },
  hover: {
    Feature: UO
  }
};
function Vv(e, t) {
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
function r2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function n2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Fs(e, t, r) {
  const n = e.getProps();
  return ju(n, t, r !== void 0 ? r : n.custom, r2(e), n2(e));
}
const o2 = "framerAppearId", a2 = "data-" + Fu(o2);
let Na = pt, gr = pt;
process.env.NODE_ENV !== "production" && (Na = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, gr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const cn = (e) => e * 1e3, Ur = (e) => e / 1e3, i2 = {
  current: !1
}, Nv = (e) => Array.isArray(e) && typeof e[0] == "number";
function Lv(e) {
  return !!(!e || typeof e == "string" && Wv[e] || Nv(e) || Array.isArray(e) && e.every(Lv));
}
const qo = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, Wv = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: qo([0, 0.65, 0.55, 1]),
  circOut: qo([0.55, 0, 1, 0.45]),
  backIn: qo([0.31, 0.01, 0.66, -0.59]),
  backOut: qo([0.33, 1.53, 0.69, 0.99])
};
function Hv(e) {
  if (e)
    return Nv(e) ? qo(e) : Array.isArray(e) ? e.map(Hv) : Wv[e];
}
function s2(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = Hv(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const hp = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Al = {}, Uv = {};
for (const e in hp)
  Uv[e] = () => (Al[e] === void 0 && (Al[e] = hp[e]()), Al[e]);
function l2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Yv = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, c2 = 1e-7, u2 = 12;
function d2(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = Yv(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > c2 && ++s < u2);
  return i;
}
function La(e, t, r, n) {
  if (e === t && r === n)
    return pt;
  const o = (a) => d2(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : Yv(o(a), t, n);
}
const f2 = La(0.42, 0, 1, 1), p2 = La(0, 0, 0.58, 1), Gv = La(0.42, 0, 0.58, 1), h2 = (e) => Array.isArray(e) && typeof e[0] != "number", qv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Xv = (e) => (t) => 1 - e(1 - t), Kv = (e) => 1 - Math.sin(Math.acos(e)), Bu = Xv(Kv), m2 = qv(Bu), Zv = La(0.33, 1.53, 0.69, 0.99), zu = Xv(Zv), v2 = qv(zu), g2 = (e) => (e *= 2) < 1 ? 0.5 * zu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), mp = {
  linear: pt,
  easeIn: f2,
  easeInOut: Gv,
  easeOut: p2,
  circIn: Kv,
  circInOut: m2,
  circOut: Bu,
  backIn: zu,
  backInOut: v2,
  backOut: Zv,
  anticipate: g2
}, vp = (e) => {
  if (Array.isArray(e)) {
    gr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return La(t, r, n, o);
  } else if (typeof e == "string")
    return gr(mp[e] !== void 0, `Invalid easing type '${e}'`), mp[e];
  return e;
}, Vu = (e, t) => (r) => !!(za(r) && gO.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Jv = (e, t, r) => (n) => {
  if (!za(n))
    return n;
  const [o, a, i, s] = n.match(Os);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, b2 = (e) => fn(0, 255, e), $l = {
  ...Vn,
  transform: (e) => Math.round(b2(e))
}, Pn = {
  test: Vu("rgb", "red"),
  parse: Jv("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + $l.transform(e) + ", " + $l.transform(t) + ", " + $l.transform(r) + ", " + oa(na.transform(n)) + ")"
};
function y2(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Pc = {
  test: Vu("#"),
  parse: y2,
  transform: Pn.transform
}, eo = {
  test: Vu("hsl", "hue"),
  parse: Jv("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Ar.transform(oa(t)) + ", " + Ar.transform(oa(r)) + ", " + oa(na.transform(n)) + ")"
}, Et = {
  test: (e) => Pn.test(e) || Pc.test(e) || eo.test(e),
  parse: (e) => Pn.test(e) ? Pn.parse(e) : eo.test(e) ? eo.parse(e) : Pc.parse(e),
  transform: (e) => za(e) ? e : e.hasOwnProperty("red") ? Pn.transform(e) : eo.transform(e)
}, nt = (e, t, r) => -r * e + r * t + e;
function Rl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function x2({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Rl(l, s, e + 1 / 3), a = Rl(l, s, e), i = Rl(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Ol = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, S2 = [Pc, Pn, eo], w2 = (e) => S2.find((t) => t.test(e));
function gp(e) {
  const t = w2(e);
  gr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === eo && (r = x2(r)), r;
}
const Qv = (e, t) => {
  const r = gp(e), n = gp(t), o = { ...r };
  return (a) => (o.red = Ol(r.red, n.red, a), o.green = Ol(r.green, n.green, a), o.blue = Ol(r.blue, n.blue, a), o.alpha = nt(r.alpha, n.alpha, a), Pn.transform(o));
};
function C2(e) {
  var t, r;
  return isNaN(e) && za(e) && (((t = e.match(Os)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Cv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const eg = {
  regex: mO,
  countKey: "Vars",
  token: "${v}",
  parse: pt
}, tg = {
  regex: Cv,
  countKey: "Colors",
  token: "${c}",
  parse: Et.parse
}, rg = {
  regex: Os,
  countKey: "Numbers",
  token: "${n}",
  parse: Vn.parse
};
function Dl(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function ns(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Dl(r, eg), Dl(r, tg), Dl(r, rg), r;
}
function ng(e) {
  return ns(e).values;
}
function og(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = ns(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(eg.token, i[l]) : l < n + r ? s = s.replace(tg.token, Et.transform(i[l])) : s = s.replace(rg.token, oa(i[l]));
    return s;
  };
}
const k2 = (e) => typeof e == "number" ? 0 : e;
function _2(e) {
  const t = ng(e);
  return og(e)(t.map(k2));
}
const pn = {
  test: C2,
  parse: ng,
  createTransformer: og,
  getAnimatableNone: _2
}, ag = (e, t) => (r) => `${r > 0 ? t : e}`;
function ig(e, t) {
  return typeof e == "number" ? (r) => nt(e, t, r) : Et.test(e) ? Qv(e, t) : e.startsWith("var(") ? ag(e, t) : lg(e, t);
}
const sg = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => ig(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, E2 = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = ig(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, lg = (e, t) => {
  const r = pn.createTransformer(t), n = ns(e), o = ns(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? ln(sg(n.values, o.values), r) : (Na(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ag(e, t));
}, Ta = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, bp = (e, t) => (r) => nt(e, t, r);
function T2(e) {
  return typeof e == "number" ? bp : typeof e == "string" ? Et.test(e) ? Qv : lg : Array.isArray(e) ? sg : typeof e == "object" ? E2 : bp;
}
function P2(e, t, r) {
  const n = [], o = r || T2(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || pt : t;
      s = ln(l, s);
    }
    n.push(s);
  }
  return n;
}
function cg(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (gr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = P2(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Ta(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(fn(e[0], e[a - 1], c)) : l;
}
function A2(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ta(0, t, n);
    e.push(nt(r, 1, o));
  }
}
function $2(e) {
  const t = [0];
  return A2(t, e.length - 1), t;
}
function R2(e, t) {
  return e.map((r) => r * t);
}
function O2(e, t) {
  return e.map(() => t || Gv).splice(0, e.length - 1);
}
function os({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = h2(n) ? n.map(vp) : vp(n), a = {
    done: !1,
    value: t[0]
  }, i = R2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : $2(t),
    e
  ), s = cg(i, t, {
    ease: Array.isArray(o) ? o : O2(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function ug(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const D2 = 5;
function dg(e, t, r) {
  const n = Math.max(t - D2, 0);
  return ug(r - e(n), t - n);
}
const Ml = 1e-3, M2 = 0.01, yp = 10, F2 = 0.05, I2 = 1;
function j2({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  Na(e <= cn(yp), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = fn(F2, I2, i), e = fn(M2, yp, Ur(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = Ac(c, i), m = Math.exp(-d);
    return Ml - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = Ac(Math.pow(c, 2), i);
    return (-o(c) + Ml > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Ml + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = z2(o, a, s);
  if (e = cn(e), isNaN(l))
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
const B2 = 12;
function z2(e, t, r) {
  let n = r;
  for (let o = 1; o < B2; o++)
    n = n - e(n) / t(n);
  return n;
}
function Ac(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const V2 = ["duration", "bounce"], N2 = ["stiffness", "damping", "mass"];
function xp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function L2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!xp(e, N2) && xp(e, V2)) {
    const r = j2(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function fg({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = L2(n), p = u ? -Ur(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, g = Ur(Math.sqrt(s / c)), y = Math.abs(h) < 5;
  r || (r = y ? 0.01 : 2), t || (t = y ? 5e-3 : 0.5);
  let x;
  if (m < 1) {
    const w = Ac(g, m);
    x = (E) => {
      const _ = Math.exp(-m * g * E);
      return a - _ * ((p + m * g * h) / w * Math.sin(w * E) + h * Math.cos(w * E));
    };
  } else if (m === 1)
    x = (w) => a - Math.exp(-g * w) * (h + (p + g * h) * w);
  else {
    const w = g * Math.sqrt(m * m - 1);
    x = (E) => {
      const _ = Math.exp(-m * g * E), j = Math.min(w * E, 300);
      return a - _ * ((p + m * g * h) * Math.sinh(j) + w * h * Math.cosh(j)) / w;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (w) => {
      const E = x(w);
      if (f)
        i.done = w >= d;
      else {
        let _ = p;
        w !== 0 && (m < 1 ? _ = dg(x, w, E) : _ = 0);
        const j = Math.abs(_) <= r, D = Math.abs(a - E) <= t;
        i.done = j && D;
      }
      return i.value = i.done ? a : E, i;
    }
  };
}
function Sp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (z) => s !== void 0 && z < s || l !== void 0 && z > l, m = (z) => s === void 0 ? l : l === void 0 || Math.abs(s - z) < Math.abs(l - z) ? s : l;
  let h = r * t;
  const g = d + h, y = i === void 0 ? g : i(g);
  y !== g && (h = y - d);
  const x = (z) => -h * Math.exp(-z / n), w = (z) => y + x(z), E = (z) => {
    const V = x(z), B = w(z);
    f.done = Math.abs(V) <= c, f.value = f.done ? y : B;
  };
  let _, j;
  const D = (z) => {
    p(f.value) && (_ = z, j = fg({
      keyframes: [f.value, m(f.value)],
      velocity: dg(w, z, f.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (z) => {
      let V = !1;
      return !j && _ === void 0 && (V = !0, E(z), D(z)), _ !== void 0 && z > _ ? j.next(z - _) : (!V && E(z), f);
    }
  };
}
const W2 = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => Je.update(t, !0),
    stop: () => Kr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => rt.isProcessing ? rt.timestamp : performance.now()
  };
}, wp = 2e4;
function Cp(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < wp; )
    t += r, n = e.next(t);
  return t >= wp ? 1 / 0 : t;
}
const H2 = {
  decay: Sp,
  inertia: Sp,
  tween: os,
  keyframes: os,
  spring: fg
};
function as({ autoplay: e = !0, delay: t = 0, driver: r = W2, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, g;
  const y = () => {
    h && h(), g = new Promise((M) => {
      h = M;
    });
  };
  y();
  let x;
  const w = H2[o] || os;
  let E;
  w !== os && typeof n[0] != "number" && (E = cg([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const _ = w({ ...f, keyframes: n });
  let j;
  s === "mirror" && (j = w({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let D = "idle", z = null, V = null, B = null;
  _.calculatedDuration === null && a && (_.calculatedDuration = Cp(_));
  const { calculatedDuration: X } = _;
  let ae = 1 / 0, te = 1 / 0;
  X !== null && (ae = X + i, te = ae * (a + 1) - i);
  let Q = 0;
  const ee = (M) => {
    if (V === null)
      return;
    p > 0 && (V = Math.min(V, M)), p < 0 && (V = Math.min(M - te / p, V)), z !== null ? Q = z : Q = Math.round(M - V) * p;
    const F = Q - t * (p >= 0 ? 1 : -1), T = p >= 0 ? F < 0 : F > te;
    Q = Math.max(F, 0), D === "finished" && z === null && (Q = te);
    let R = Q, I = _;
    if (a) {
      const q = Q / ae;
      let H = Math.floor(q), re = q % 1;
      !re && q >= 1 && (re = 1), re === 1 && H--, H = Math.min(H, a + 1);
      const P = !!(H % 2);
      P && (s === "reverse" ? (re = 1 - re, i && (re -= i / ae)) : s === "mirror" && (I = j));
      let be = fn(0, 1, re);
      Q > te && (be = s === "reverse" && P ? 1 : 0), R = be * ae;
    }
    const S = T ? { done: !1, value: n[0] } : I.next(R);
    E && (S.value = E(S.value));
    let { done: W } = S;
    !T && X !== null && (W = p >= 0 ? Q >= te : Q <= 0);
    const $ = z === null && (D === "finished" || D === "running" && W);
    return d && d(S.value), $ && ye(), S;
  }, ie = () => {
    x && x.stop(), x = void 0;
  }, K = () => {
    D = "idle", ie(), y(), V = B = null;
  }, ye = () => {
    D = "finished", u && u(), ie(), y();
  }, me = () => {
    if (m)
      return;
    x || (x = r(ee));
    const M = x.now();
    l && l(), z !== null ? V = M - z : (!V || D === "finished") && (V = M), B = V, z = null, D = "running", x.start();
  };
  e && me();
  const O = {
    then(M, F) {
      return g.then(M, F);
    },
    get time() {
      return Ur(Q);
    },
    set time(M) {
      M = cn(M), Q = M, z !== null || !x || p === 0 ? z = M : V = x.now() - M / p;
    },
    get duration() {
      const M = _.calculatedDuration === null ? Cp(_) : _.calculatedDuration;
      return Ur(M);
    },
    get speed() {
      return p;
    },
    set speed(M) {
      M === p || !x || (p = M, O.time = Ur(Q));
    },
    get state() {
      return D;
    },
    play: me,
    pause: () => {
      D = "paused", z = Q;
    },
    stop: () => {
      m = !0, D !== "idle" && (D = "idle", c && c(), K());
    },
    cancel: () => {
      B !== null && ee(B), K();
    },
    complete: () => {
      D = "finished";
    },
    sample: (M) => (V = 0, ee(M))
  };
  return O;
}
const U2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ui = 10, Y2 = 2e4, G2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Lv(t.ease);
function q2(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(Uv.waapi() && U2.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((y) => {
      s = y;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (G2(t, o)) {
    const y = as({
      ...o,
      repeat: 0,
      delay: 0
    });
    let x = { done: !1, value: u[0] };
    const w = [];
    let E = 0;
    for (; !x.done && E < Y2; )
      x = y.sample(E), w.push(x.value), E += ui;
    p = void 0, u = w, d = E - ui, f = "linear";
  }
  const m = s2(e.owner.current, t, u, {
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
    Je.update(h), s(), c();
  };
  return m.onfinish = () => {
    e.set(l2(u, o)), n && n(), g();
  }, {
    then(y, x) {
      return l.then(y, x);
    },
    get time() {
      return Ur(m.currentTime || 0);
    },
    set time(y) {
      m.currentTime = cn(y);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(y) {
      m.playbackRate = y;
    },
    get duration() {
      return Ur(d);
    },
    play: () => {
      i || (m.play(), Kr(h));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: y } = m;
      if (y) {
        const x = as({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(x.sample(y - ui).value, x.sample(y).value, ui);
      }
      g();
    },
    complete: () => m.finish(),
    cancel: g
  };
}
function X2({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: pt,
    pause: pt,
    stop: pt,
    then: (a) => (a(), Promise.resolve()),
    cancel: pt,
    complete: pt
  });
  return t ? as({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const K2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Z2 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), J2 = {
  type: "keyframes",
  duration: 0.8
}, Q2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, eD = (e, { keyframes: t }) => t.length > 2 ? J2 : zn.has(e) ? e.startsWith("scale") ? Z2(t[1]) : K2 : Q2, $c = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(pn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), tD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function rD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Os) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = tD.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const nD = /([a-z-]*)\(.*?\)/g, Rc = {
  ...pn,
  getAnimatableNone: (e) => {
    const t = e.match(nD);
    return t ? t.map(rD).join(" ") : e;
  }
}, oD = {
  ...kv,
  // Color props
  color: Et,
  backgroundColor: Et,
  outlineColor: Et,
  fill: Et,
  stroke: Et,
  // Border props
  borderColor: Et,
  borderTopColor: Et,
  borderRightColor: Et,
  borderBottomColor: Et,
  borderLeftColor: Et,
  filter: Rc,
  WebkitFilter: Rc
}, Nu = (e) => oD[e];
function pg(e, t) {
  let r = Nu(e);
  return r !== Rc && (r = pn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const hg = (e) => /^0[^.\s]+$/.test(e);
function aD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || hg(e);
}
function iD(e, t, r, n) {
  const o = $c(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), aD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = pg(t, s);
    }
  return a;
}
function sD({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function mg(e, t) {
  return e[t] || e.default || e;
}
const Lu = (e, t, r, n = {}) => (o) => {
  const a = mg(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - cn(i);
  const l = iD(t, e, r, a), c = l[0], u = l[l.length - 1], d = $c(e, c), f = $c(e, u);
  Na(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
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
  if (sD(a) || (p = {
    ...p,
    ...eD(e, p)
  }), p.duration && (p.duration = cn(p.duration)), p.repeatDelay && (p.repeatDelay = cn(p.repeatDelay)), !d || !f || i2.current || a.type === !1)
    return X2(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = q2(t, e, p);
    if (m)
      return m;
  }
  return as(p);
};
function is(e) {
  return !!(Bt(e) && e.add);
}
const lD = (e) => /^\-?\d*\.?\d+$/.test(e);
function Wu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Hu(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Uu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wu(this.subscriptions, t), () => Hu(this.subscriptions, t);
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
const kp = /* @__PURE__ */ new Set();
function Yu(e, t, r) {
  e || kp.has(t) || (console.warn(t), r && console.warn(r), kp.add(t));
}
const cD = (e) => !isNaN(parseFloat(e));
class uD {
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
      const { delta: a, timestamp: i } = rt;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, Je.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Je.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = cD(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && Yu(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Uu());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), Je.read(() => {
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
      ug(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function So(e, t) {
  return new uD(e, t);
}
const vg = (e) => (t) => t.test(e), dD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, gg = [Vn, ue, Ar, on, yO, bO, dD], Bo = (e) => gg.find(vg(e)), fD = [...gg, Et, pn], pD = (e) => fD.find(vg(e));
function hD(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, So(r));
}
function mD(e, t) {
  const r = Fs(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = DO(a[i]);
    hD(e, i, s);
  }
}
function vD(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (lD(u) || hg(u)) ? u = parseFloat(u) : !pD(u) && pn.test(c) && (u = pg(l, c)), e.addValue(l, So(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function gD(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function bD(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = gD(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function yD({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function bg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && yD(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[a2];
      g && (m.elapsed = window.HandoffAppearAnimations(g, d, f, Je));
    }
    f.start(Lu(d, f, p, e.shouldReduceMotion && zn.has(d) ? { type: !1 } : m));
    const h = f.animation;
    is(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && mD(e, i);
  }), c;
}
function Oc(e, t, r = {}) {
  const n = Fs(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(bg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return xD(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function xD(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(SD).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Oc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function SD(e, t) {
  return e.sortNodePosition(t);
}
function wD(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Oc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Oc(e, t, r);
  else {
    const o = typeof t == "function" ? Fs(e, t, r.custom) : t;
    n = Promise.all(bg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const CD = [...Tu].reverse(), kD = Tu.length;
function _D(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => wD(e, r, n)));
}
function ED(e) {
  let t = _D(e);
  const r = PD();
  let n = !0;
  const o = (l, c) => {
    const u = Fs(e, c);
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
    for (let y = 0; y < kD; y++) {
      const x = CD[y], w = r[x], E = u[x] !== void 0 ? u[x] : d[x], _ = ka(E), j = x === c ? w.isActive : null;
      j === !1 && (h = y);
      let D = E === d[x] && E !== u[x] && _;
      if (D && n && e.manuallyAnimateOnMount && (D = !1), w.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !E && !w.prevProp || // Or if the prop doesn't define an animation
      $s(E) || typeof E == "boolean")
        continue;
      const z = TD(w.prevProp, E);
      let V = z || // If we're making this variant active, we want to always make it active
      x === c && w.isActive && !D && _ || // If we removed a higher-priority variant (i is in reverse order)
      y > h && _;
      const B = Array.isArray(E) ? E : [E];
      let X = B.reduce(o, {});
      j === !1 && (X = {});
      const { prevResolvedValues: ae = {} } = w, te = {
        ...ae,
        ...X
      }, Q = (ee) => {
        V = !0, p.delete(ee), w.needsAnimating[ee] = !0;
      };
      for (const ee in te) {
        const ie = X[ee], K = ae[ee];
        m.hasOwnProperty(ee) || (ie !== K ? rs(ie) && rs(K) ? !Vv(ie, K) || z ? Q(ee) : w.protectedKeys[ee] = !0 : ie !== void 0 ? Q(ee) : p.add(ee) : ie !== void 0 && p.has(ee) ? Q(ee) : w.protectedKeys[ee] = !0);
      }
      w.prevProp = E, w.prevResolvedValues = X, w.isActive && (m = { ...m, ...X }), n && e.blockInitialAnimation && (V = !1), V && !D && f.push(...B.map((ee) => ({
        animation: ee,
        options: { type: x, ...l }
      })));
    }
    if (p.size) {
      const y = {};
      p.forEach((x) => {
        const w = e.getBaseTarget(x);
        w !== void 0 && (y[x] = w);
      }), f.push({ animation: y });
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
function TD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vv(t, e) : !1;
}
function Sn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function PD() {
  return {
    animate: Sn(!0),
    whileInView: Sn(),
    whileHover: Sn(),
    whileTap: Sn(),
    whileDrag: Sn(),
    whileFocus: Sn(),
    exit: Sn()
  };
}
class AD extends vn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ED(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), $s(t) && (this.unmount = t.subscribe(this.node));
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
let $D = 0;
class RD extends vn {
  constructor() {
    super(...arguments), this.id = $D++;
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
const OD = {
  animation: {
    Feature: AD
  },
  exit: {
    Feature: RD
  }
}, _p = (e, t) => Math.abs(e - t);
function DD(e, t) {
  const r = _p(e.x, t.x), n = _p(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class yg {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Il(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = DD(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = rt;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Fl(u, this.transformPagePoint), Je.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = Il(c.type === "pointercancel" ? this.lastMoveEventInfo : Fl(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !Mv(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Ds(t), a = Fl(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = rt;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Il(a, this.history)), this.removeListeners = ln(Hr(window, "pointermove", this.handlePointerMove), Hr(window, "pointerup", this.handlePointerUp), Hr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Kr(this.updatePoint);
  }
}
function Fl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ep(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Il({ point: e }, t) {
  return {
    point: e,
    delta: Ep(e, xg(t)),
    offset: Ep(e, MD(t)),
    velocity: FD(t, 0.1)
  };
}
function MD(e) {
  return e[0];
}
function xg(e) {
  return e[e.length - 1];
}
function FD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = xg(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > cn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Ur(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Ht(e) {
  return e.max - e.min;
}
function Dc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Tp(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = nt(t.min, t.max, e.origin), e.scale = Ht(r) / Ht(t), (Dc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = nt(r.min, r.max, e.origin) - e.originPoint, (Dc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function aa(e, t, r, n) {
  Tp(e.x, t.x, r.x, n ? n.originX : void 0), Tp(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Pp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Ht(t);
}
function ID(e, t, r) {
  Pp(e.x, t.x, r.x), Pp(e.y, t.y, r.y);
}
function Ap(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Ht(t);
}
function ia(e, t, r) {
  Ap(e.x, t.x, r.x), Ap(e.y, t.y, r.y);
}
function jD(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? nt(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? nt(r, e, n.max) : Math.min(e, r)), e;
}
function $p(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function BD(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: $p(e.x, r, o),
    y: $p(e.y, t, n)
  };
}
function Rp(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function zD(e, t) {
  return {
    x: Rp(e.x, t.x),
    y: Rp(e.y, t.y)
  };
}
function VD(e, t) {
  let r = 0.5;
  const n = Ht(e), o = Ht(t);
  return o > n ? r = Ta(t.min, t.max - n, e.min) : n > o && (r = Ta(e.min, e.max - o, t.min)), fn(0, 1, r);
}
function ND(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Mc = 0.35;
function LD(e = Mc) {
  return e === !1 ? e = 0 : e === !0 && (e = Mc), {
    x: Op(e, "left", "right"),
    y: Op(e, "top", "bottom")
  };
}
function Op(e, t, r) {
  return {
    min: Dp(e, t),
    max: Dp(e, r)
  };
}
function Dp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Mp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), to = () => ({
  x: Mp(),
  y: Mp()
}), Fp = () => ({ min: 0, max: 0 }), ut = () => ({
  x: Fp(),
  y: Fp()
});
function wr(e) {
  return [e("x"), e("y")];
}
function Sg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function WD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function HD(e, t) {
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
function jl(e) {
  return e === void 0 || e === 1;
}
function Fc({ scale: e, scaleX: t, scaleY: r }) {
  return !jl(e) || !jl(t) || !jl(r);
}
function wn(e) {
  return Fc(e) || wg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function wg(e) {
  return Ip(e.x) || Ip(e.y);
}
function Ip(e) {
  return e && e !== "0%";
}
function ss(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function jp(e, t, r, n, o) {
  return o !== void 0 && (e = ss(e, o, n)), ss(e, r, n) + t;
}
function Ic(e, t = 0, r = 1, n, o) {
  e.min = jp(e.min, t, r, n, o), e.max = jp(e.max, t, r, n, o);
}
function Cg(e, { x: t, y: r }) {
  Ic(e.x, t.translate, t.scale, t.originPoint), Ic(e.y, r.translate, r.scale, r.originPoint);
}
function UD(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && ro(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Cg(e, i)), n && wn(a.latestValues) && ro(e, a.latestValues));
  }
  t.x = Bp(t.x), t.y = Bp(t.y);
}
function Bp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function an(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function zp(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = nt(e.min, e.max, a);
  Ic(e, t[r], t[n], i, t.scale);
}
const YD = ["x", "scaleX", "originX"], GD = ["y", "scaleY", "originY"];
function ro(e, t) {
  zp(e.x, t, YD), zp(e.y, t, GD);
}
function kg(e, t) {
  return Sg(HD(e.getBoundingClientRect(), t));
}
function qD(e, t, r) {
  const n = kg(e, r), { scroll: o } = t;
  return o && (an(n.x, o.offset.x), an(n.y, o.offset.y)), n;
}
const XD = /* @__PURE__ */ new WeakMap();
class KD {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ut(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Ds(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Iv(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), wr((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if (Ar.test(h)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const y = g.layout.layoutBox[m];
            y && (h = Ht(y) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[m] = h;
      }), f && Je.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: m } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = ZD(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new yg(t, {
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
    a && Je.update(() => a(t, r));
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
    if (!n || !di(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = jD(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && Qn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = BD(n.layoutBox, t) : this.constraints = !1, this.elastic = LD(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && wr((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = ND(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !Qn(t))
      return !1;
    const n = t.current;
    gr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = qD(n, o.root, this.visualElement.getTransformPagePoint());
    let i = zD(o.layout.layoutBox, a);
    if (r) {
      const s = r(WD(i));
      this.hasMutatedConstraints = !!s, s && (i = Sg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = wr((u) => {
      if (!di(u, r, this.currentDirection))
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
    return n.start(Lu(t, n, 0, r));
  }
  stopAnimation() {
    wr((t) => this.getAxisMotionValue(t).stop());
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
    wr((r) => {
      const { drag: n } = this.getProps();
      if (!di(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - nt(i, s, 0.5));
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
    if (!Qn(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    wr((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = VD({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), wr((i) => {
      if (!di(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(nt(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    XD.set(this.visualElement, this);
    const t = this.visualElement.current, r = Hr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Qn(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Lr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (wr((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Mc, dragMomentum: s = !0 } = t;
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
function di(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function ZD(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class JD extends vn {
  constructor(t) {
    super(t), this.removeGroupControls = pt, this.removeListeners = pt, this.controls = new KD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || pt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Vp = (e) => (t, r) => {
  e && Je.update(() => e(t, r));
};
class QD extends vn {
  constructor() {
    super(...arguments), this.removePointerDownListener = pt;
  }
  onPointerDown(t) {
    this.session = new yg(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Vp(t),
      onStart: Vp(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && Je.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Hr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function _g() {
  const e = ft(ja);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = mn();
  return Xe(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function Wz() {
  return eM(ft(ja));
}
function eM(e) {
  return e === null ? !0 : e.isPresent;
}
const Fi = {
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
function Np(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const zo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ue.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Np(e, t.target.x), n = Np(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, tM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = pn.parse(e);
    if (o.length > 5)
      return n;
    const a = pn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = nt(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class rM extends Pt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    dO(nM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), Fi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || Je.postRender(() => {
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
function Eg(e) {
  const [t, r] = _g(), n = ft(Au);
  return Pt.createElement(rM, { ...e, layoutGroup: n, switchLayoutGroup: ft(yv), isPresent: t, safeToRemove: r });
}
const nM = {
  borderRadius: {
    ...zo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: zo,
  borderTopRightRadius: zo,
  borderBottomLeftRadius: zo,
  borderBottomRightRadius: zo,
  boxShadow: tM
}, Tg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], oM = Tg.length, Lp = (e) => typeof e == "string" ? parseFloat(e) : e, Wp = (e) => typeof e == "number" || ue.test(e);
function aM(e, t, r, n, o, a) {
  o ? (e.opacity = nt(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    iM(n)
  ), e.opacityExit = nt(t.opacity !== void 0 ? t.opacity : 1, 0, sM(n))) : a && (e.opacity = nt(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < oM; i++) {
    const s = `border${Tg[i]}Radius`;
    let l = Hp(t, s), c = Hp(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Wp(l) === Wp(c) ? (e[s] = Math.max(nt(Lp(l), Lp(c), n), 0), (Ar.test(c) || Ar.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = nt(t.rotate || 0, r.rotate || 0, n));
}
function Hp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const iM = Pg(0, 0.5, Bu), sM = Pg(0.5, 0.95, pt);
function Pg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ta(e, t, n));
}
function Up(e, t) {
  e.min = t.min, e.max = t.max;
}
function qt(e, t) {
  Up(e.x, t.x), Up(e.y, t.y);
}
function Yp(e, t, r, n, o) {
  return e -= t, e = ss(e, 1 / r, n), o !== void 0 && (e = ss(e, 1 / o, n)), e;
}
function lM(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Ar.test(t) && (t = parseFloat(t), t = nt(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = nt(a.min, a.max, n);
  e === a && (s -= t), e.min = Yp(e.min, t, r, s, o), e.max = Yp(e.max, t, r, s, o);
}
function Gp(e, t, [r, n, o], a, i) {
  lM(e, t[r], t[n], t[o], t.scale, a, i);
}
const cM = ["x", "scaleX", "originX"], uM = ["y", "scaleY", "originY"];
function qp(e, t, r, n) {
  Gp(e.x, t, cM, r ? r.x : void 0, n ? n.x : void 0), Gp(e.y, t, uM, r ? r.y : void 0, n ? n.y : void 0);
}
function Xp(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ag(e) {
  return Xp(e.x) && Xp(e.y);
}
function jc(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Kp(e) {
  return Ht(e.x) / Ht(e.y);
}
class dM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Hu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Zp(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const fM = (e, t) => e.depth - t.depth;
class pM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Wu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Hu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(fM), this.isDirty = !1, this.children.forEach(t);
  }
}
function hM(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (Kr(n), e(a - t));
  };
  return Je.read(n, !0), () => Kr(n);
}
function mM(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function vM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function gM(e, t, r) {
  const n = Bt(e) ? e : So(e);
  return n.start(Lu("", n, t, r)), n.animation;
}
const Jp = ["", "X", "Y", "Z"], Qp = 1e3;
let bM = 0;
const Cn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function $g({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = bM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Cn.totalNodes = Cn.resolvedTargetDeltas = Cn.recalculatedProjection = 0, this.nodes.forEach(SM), this.nodes.forEach(EM), this.nodes.forEach(TM), this.nodes.forEach(wM), mM(Cn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pM());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Uu()), this.eventHandlers.get(i).add(s);
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
      this.isSVG = vM(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = hM(f, 250), Fi.hasAnimatedSinceResize && (Fi.hasAnimatedSinceResize = !1, this.nodes.forEach(th));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || OM, { onLayoutAnimationStart: g, onLayoutAnimationComplete: y } = u.getProps(), x = !this.targetLayout || !jc(this.targetLayout, m) || p, w = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || f && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, w);
          const E = {
            ...mg(h, "layout"),
            onPlay: g,
            onComplete: y
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (E.delay = 0, E.type = !1), this.startAnimation(E);
        } else
          f || th(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Kr(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(PM), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(eh);
        return;
      }
      this.isUpdating || this.nodes.forEach(kM), this.isUpdating = !1, this.nodes.forEach(_M), this.nodes.forEach(yM), this.nodes.forEach(xM), this.clearAllSnapshots();
      const s = performance.now();
      rt.delta = fn(0, 1e3 / 60, s - rt.timestamp), rt.timestamp = s, rt.isProcessing = !0, uo.update.process(rt), uo.preRender.process(rt), uo.render.process(rt), rt.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(CM), this.sharedNodes.forEach(AM);
    }
    scheduleUpdateProjection() {
      Je.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Je.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = ut(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Ag(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || wn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), DM(l), {
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
        return ut();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (an(s.x, l.offset.x), an(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = ut();
      qt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            qt(s, i);
            const { scroll: f } = this.root;
            f && (an(s.x, -f.offset.x), an(s.y, -f.offset.y));
          }
          an(s.x, u.offset.x), an(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = ut();
      qt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && ro(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), wn(u.latestValues) && ro(l, u.latestValues);
      }
      return wn(this.latestValues) && ro(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = ut();
      qt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !wn(c.latestValues))
          continue;
        Fc(c.latestValues) && c.updateSnapshot();
        const u = ut(), d = c.measurePageBox();
        qt(u, d), qp(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return wn(this.latestValues) && qp(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== rt.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = rt.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), ia(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ut(), this.targetWithTransforms = ut()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), ID(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : qt(this.target, this.layout.layoutBox), Cg(this.target, this.targetDelta)) : qt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ut(), this.relativeTargetOrigin = ut(), ia(this.relativeTargetOrigin, this.target, p.target), qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Cn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fc(this.parent.latestValues) || wg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === rt.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      UD(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = to(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = to(), this.projectionDeltaWithTransform = to());
      const h = this.projectionTransform;
      aa(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Zp(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Cn.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = to();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = ut(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, g = this.getStack(), y = !g || g.members.length <= 1, x = !!(h && !y && this.options.crossfade === !0 && !this.path.some(RM));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (E) => {
        const _ = E / 1e3;
        rh(d.x, i.x, _), rh(d.y, i.y, _), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ia(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $M(this.relativeTarget, this.relativeTargetOrigin, f, _), w && jc(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = ut()), qt(w, this.relativeTarget)), h && (this.animationValues = u, aM(u, c, this.latestValues, _, x, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Kr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Je.update(() => {
        Fi.hasAnimatedSinceResize = !0, this.currentAnimation = gM(0, Qp, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Qp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && Rg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ut();
          const d = Ht(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Ht(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        qt(s, l), ro(s, u), aa(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new dM()), this.sharedNodes.get(i).add(s);
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
      for (let u = 0; u < Jp.length; u++) {
        const d = "rotate" + Jp[u];
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Mi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Mi(i.pointerEvents) || ""), this.hasProjected && !wn(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = Zp(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in es) {
        if (f[h] === void 0)
          continue;
        const { correct: g, applyTo: y } = es[h], x = c.transform === "none" ? f[h] : g(f[h], d);
        if (y) {
          const w = y.length;
          for (let E = 0; E < w; E++)
            c[y[E]] = x;
        } else
          c[h] = x;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Mi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(eh), this.root.sharedNodes.clear();
    }
  };
}
function yM(e) {
  e.updateLayout();
}
function xM(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? wr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Ht(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : Rg(a, r.layoutBox, n) && wr((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Ht(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = to();
    aa(s, n, r.layoutBox);
    const l = to();
    i ? aa(l, e.applyTransform(o, !0), r.measuredBox) : aa(l, n, r.layoutBox);
    const c = !Ag(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = ut();
          ia(m, r.layoutBox, f.layoutBox);
          const h = ut();
          ia(h, n, p.layoutBox), jc(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function SM(e) {
  Cn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function wM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CM(e) {
  e.clearSnapshot();
}
function eh(e) {
  e.clearMeasurements();
}
function kM(e) {
  e.isLayoutDirty = !1;
}
function _M(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function th(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function EM(e) {
  e.resolveTargetDelta();
}
function TM(e) {
  e.calcProjection();
}
function PM(e) {
  e.resetRotation();
}
function AM(e) {
  e.removeLeadSnapshot();
}
function rh(e, t, r) {
  e.translate = nt(t.translate, 0, r), e.scale = nt(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function nh(e, t, r, n) {
  e.min = nt(t.min, r.min, n), e.max = nt(t.max, r.max, n);
}
function $M(e, t, r, n) {
  nh(e.x, t.x, r.x, n), nh(e.y, t.y, r.y, n);
}
function RM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const OM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function oh(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function DM(e) {
  oh(e.x), oh(e.y);
}
function Rg(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Dc(Kp(t), Kp(r), 0.2);
}
const MM = $g({
  attachResizeListener: (e, t) => Lr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Bl = {
  current: void 0
}, Og = $g({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Bl.current) {
      const e = new MM({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Bl.current = e;
    }
    return Bl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), FM = {
  pan: {
    Feature: QD
  },
  drag: {
    Feature: JD,
    ProjectionNode: Og,
    MeasureLayout: Eg
  }
}, IM = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function jM(e) {
  const t = IM.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const BM = 4;
function Bc(e, t, r = 1) {
  gr(r <= BM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = jM(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : _c(o) ? Bc(o, t, r + 1) : o;
}
function zM(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!_c(a))
      return;
    const i = Bc(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!_c(a))
      continue;
    const i = Bc(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const VM = /* @__PURE__ */ new Set([
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
]), Dg = (e) => VM.has(e), NM = (e) => Object.keys(e).some(Dg), fi = (e) => e === Vn || e === ue, ah = (e, t) => parseFloat(e.split(", ")[t]), ih = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return ah(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? ah(a[1], e) : 0;
  }
}, LM = /* @__PURE__ */ new Set(["x", "y", "z"]), WM = Ba.filter((e) => !LM.has(e));
function HM(e) {
  const t = [];
  return WM.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const sh = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: ih(4, 13),
  y: ih(5, 14)
}, UM = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = sh[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = sh[c](l, a);
  }), e;
}, YM = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Dg);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Bo(u);
    const f = t[l];
    let p;
    if (rs(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Bo(u);
      for (let g = h; g < m && f[g] !== null; g++)
        p ? gr(Bo(f[g]) === p, "All keyframes must be of the same type") : (p = Bo(f[g]), gr(p === d || fi(d) && fi(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Bo(f);
    if (d !== p)
      if (fi(d) && fi(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === ue && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = HM(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = UM(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), As && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function GM(e, t, r, n) {
  return NM(t) ? YM(e, t, r, n) : { target: t, transitionEnd: n };
}
const qM = (e, t, r, n) => {
  const o = zM(e, t, n);
  return t = o.target, n = o.transitionEnd, GM(e, t, r, n);
}, zc = { current: null }, Mg = { current: !1 };
function XM() {
  if (Mg.current = !0, !!As)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => zc.current = e.matches;
      e.addListener(t), t();
    } else
      zc.current = !1;
}
function KM(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Bt(a))
      e.addValue(o, a), is(n) && n.add(o), process.env.NODE_ENV === "development" && Yu(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Bt(i))
      e.addValue(o, So(a, { owner: e })), is(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, So(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const lh = /* @__PURE__ */ new WeakMap(), Fg = Object.keys(_a), ZM = Fg.length, ch = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], JM = Pu.length;
class QM {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Je.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Rs(r), this.isVariantNode = bv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Bt(f) && (f.set(s[d], !1), is(c) && c.add(d));
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
    this.current = t, lh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Mg.current || XM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : zc.current, process.env.NODE_ENV !== "production" && Yu(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    lh.delete(this.current), this.projection && this.projection.unmount(), Kr(this.notifyUpdate), Kr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = zn.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && Je.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
      r.ignoreStrict ? Na(!1, l) : gr(!1, l);
    }
    for (let l = 0; l < ZM; l++) {
      const c = Fg[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = _a[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && Qn(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ut();
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
    for (let n = 0; n < ch.length; n++) {
      const o = ch[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = KM(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < JM; n++) {
      const o = Pu[n], a = this.props[o];
      (ka(a) || a === !1) && (r[o] = a);
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
    return n === void 0 && r !== void 0 && (n = So(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = ju(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Bt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Uu()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Ig extends QM {
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
    let i = bD(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      vD(this, n, i);
      const s = qM(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function e5(e) {
  return window.getComputedStyle(e);
}
class t5 extends Ig {
  readValueFromInstance(t, r) {
    if (zn.has(r)) {
      const n = Nu(r);
      return n && n.default || 0;
    } else {
      const n = e5(t), o = (wv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return kg(t, r);
  }
  build(t, r, n, o) {
    Ru(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Iu(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Bt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Pv(t, r, n, o);
  }
}
class r5 extends Ig {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (zn.has(r)) {
      const n = Nu(r);
      return n && n.default || 0;
    }
    return r = Av.has(r) ? r : Fu(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ut();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Rv(t, r);
  }
  build(t, r, n, o) {
    Du(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    $v(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = Mu(t.tagName), super.mount(t);
  }
}
const n5 = (e, t) => $u(e) ? new r5(t, { enableHardwareAcceleration: !1 }) : new t5(t, { enableHardwareAcceleration: !0 }), o5 = {
  layout: {
    ProjectionNode: Og,
    MeasureLayout: Eg
  }
}, a5 = {
  ...OD,
  ...t2,
  ...FM,
  ...o5
}, Nn = /* @__PURE__ */ cO((e, t) => BO(e, t, a5, n5));
function jg() {
  const e = Re(!1);
  return Qi(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function i5() {
  const e = jg(), [t, r] = St(0), n = ce(() => {
    e.current && r(t + 1);
  }, [t]);
  return [ce(() => Je.postRender(n), [n]), t];
}
class s5 extends L.Component {
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
function l5({ children: e, isPresent: t }) {
  const r = mn(), n = Re(null), o = Re({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Wh(() => {
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
  }, [t]), L.createElement(s5, { isPresent: t, childRef: n, sizeRef: o }, L.cloneElement(e, { ref: n }));
}
const zl = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = Ov(c5), l = mn(), c = It(
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
  return It(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), L.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = L.createElement(l5, { isPresent: r }, e)), L.createElement(ja.Provider, { value: c }, e);
};
function c5() {
  return /* @__PURE__ */ new Map();
}
function u5(e) {
  return Xe(() => () => e(), []);
}
const Kn = (e) => e.key || "";
function d5(e, t) {
  e.forEach((r) => {
    const n = Kn(r);
    t.set(n, r);
  });
}
function f5(e) {
  const t = [];
  return Uh.forEach(e, (r) => {
    Iy(r) && t.push(r);
  }), t;
}
const Ao = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  gr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = ft(Au).forceRender || i5()[0], l = jg(), c = f5(e);
  let u = c;
  const d = Re(/* @__PURE__ */ new Map()).current, f = Re(u), p = Re(/* @__PURE__ */ new Map()).current, m = Re(!0);
  if (Qi(() => {
    m.current = !1, d5(c, p), f.current = u;
  }), u5(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return L.createElement(L.Fragment, null, u.map((x) => L.createElement(zl, { key: Kn(x), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, x)));
  u = [...u];
  const h = f.current.map(Kn), g = c.map(Kn), y = h.length;
  for (let x = 0; x < y; x++) {
    const w = h[x];
    g.indexOf(w) === -1 && !d.has(w) && d.set(w, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((x, w) => {
    if (g.indexOf(w) !== -1)
      return;
    const E = p.get(w);
    if (!E)
      return;
    const _ = h.indexOf(w);
    let j = x;
    if (!j) {
      const D = () => {
        p.delete(w), d.delete(w);
        const z = f.current.findIndex((V) => V.key === w);
        if (f.current.splice(z, 1), !d.size) {
          if (f.current = c, l.current === !1)
            return;
          s(), n && n();
        }
      };
      j = L.createElement(zl, { key: Kn(E), isPresent: !1, onExitComplete: D, custom: t, presenceAffectsLayout: a, mode: i }, E), d.set(w, j);
    }
    u.splice(_, 0, j);
  }), u = u.map((x) => {
    const w = x.key;
    return d.has(w) ? x : L.createElement(zl, { key: Kn(x), isPresent: !0, presenceAffectsLayout: a, mode: i }, x);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), L.createElement(L.Fragment, null, d.size ? u : u.map((x) => Hh(x)));
};
var uh = {
  path: /* @__PURE__ */ Y.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ Y.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ Y.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ Y.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Bg = ot((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = or("chakra-icon", s), d = _u("Icon", e), f = {
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
  }, m = n ?? uh.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ Y.jsx(Le.svg, { as: r, ...p, ...c });
  const h = i ?? uh.path;
  return /* @__PURE__ */ Y.jsx(Le.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
Bg.displayName = "Icon";
function p5(e) {
  return /* @__PURE__ */ Y.jsx(Bg, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ Y.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var zg = ot(
  function(t, r) {
    const n = _u("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = ks(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ Y.jsx(
      Le.button,
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
        children: o || /* @__PURE__ */ Y.jsx(p5, { width: "1em", height: "1em" })
      }
    );
  }
);
zg.displayName = "CloseButton";
function h5(e, t) {
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
function mr(...e) {
  return (t) => {
    e.forEach((r) => {
      h5(r, t);
    });
  };
}
function Uz(...e) {
  return It(() => mr(...e), e);
}
function Vg(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = Qt(n), i = Qt(o), [s, l] = St(r), c = t !== void 0, u = c ? t : s, d = Qt(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var Vc = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Vo = {
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
function Nc(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Vo.slideRight;
    case "left":
      return Vo.slideLeft;
    case "bottom":
      return Vo.slideDown;
    case "top":
      return Vo.slideUp;
    default:
      return Vo.slideRight;
  }
}
var Dn = {
  enter: {
    duration: 0.2,
    ease: Vc.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Vc.easeIn
  }
}, Yr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, m5 = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Yr.enter(Dn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : Yr.exit(Dn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Ng = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: m5
}, v5 = kt(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ Y.jsx(Ao, { custom: f, children: d && /* @__PURE__ */ Y.jsx(
    Nn.div,
    {
      ref: r,
      className: or("chakra-fade", a),
      custom: f,
      ...Ng,
      animate: u,
      ...c
    }
  ) });
});
v5.displayName = "Fade";
var g5 = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Yr.exit(Dn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : Yr.enter(Dn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, Lg = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: g5
}, b5 = kt(
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
    return /* @__PURE__ */ Y.jsx(Ao, { custom: m, children: f && /* @__PURE__ */ Y.jsx(
      Nn.div,
      {
        ref: r,
        className: or("chakra-offset-slide", s),
        ...Lg,
        animate: p,
        custom: m,
        ...d
      }
    ) });
  }
);
b5.displayName = "ScaleFade";
var y5 = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Yr.exit(Dn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Yr.enter(Dn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : Yr.exit(Dn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, Lc = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: y5
}, x5 = kt(
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
    return /* @__PURE__ */ Y.jsx(Ao, { custom: h, children: p && /* @__PURE__ */ Y.jsx(
      Nn.div,
      {
        ref: r,
        className: or("chakra-offset-slide", i),
        custom: h,
        ...Lc,
        animate: m,
        ...f
      }
    ) });
  }
);
x5.displayName = "SlideFade";
var dh = {
  exit: {
    duration: 0.15,
    ease: Vc.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, S5 = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = Nc({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Yr.exit(dh.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = Nc({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Yr.enter(dh.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Wg = kt(function(t, r) {
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
  } = t, p = Nc({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, g = i || a ? "enter" : "exit", y = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ Y.jsx(Ao, { custom: y, children: h && /* @__PURE__ */ Y.jsx(
    Nn.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: or("chakra-slide", s),
      animate: g,
      exit: "exit",
      custom: y,
      variants: S5,
      style: m,
      ...d
    }
  ) });
});
Wg.displayName = "Slide";
function w5(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function C5(e, t) {
  let r = w5(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function k5(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function ls(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function Hg(e, t, r) {
  return (r - t) * e + t;
}
function Wc(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = k5(r);
  return C5(n, o);
}
function sa(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function Vl(e, t, r, n) {
  const o = Qt(r);
  return Xe(() => {
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
function _5(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Hc = { exports: {} }, Nl, fh;
function Gu() {
  if (fh)
    return Nl;
  fh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Nl = e, Nl;
}
var Ll, ph;
function Ug() {
  return ph || (ph = 1, Ll = Function.call.bind(Object.prototype.hasOwnProperty)), Ll;
}
var Wl, hh;
function E5() {
  if (hh)
    return Wl;
  hh = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Gu(), r = {}, n = Ug();
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
  }, Wl = o, Wl;
}
var Hl, mh;
function T5() {
  if (mh)
    return Hl;
  mh = 1;
  var e = au, t = tm(), r = Gu(), n = Ug(), o = E5(), a = function() {
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
  return Hl = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var M = O && (c && O[c] || O[u]);
      if (typeof M == "function")
        return M;
    }
    var f = "<<anonymous>>", p = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: x(),
      arrayOf: w,
      element: E(),
      elementType: _(),
      instanceOf: j,
      node: B(),
      objectOf: z,
      oneOf: D,
      oneOfType: V,
      shape: ae,
      exact: te
    };
    function m(O, M) {
      return O === M ? O !== 0 || 1 / O === 1 / M : O !== O && M !== M;
    }
    function h(O, M) {
      this.message = O, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, F = 0;
      function T(I, S, W, $, q, H, re) {
        if ($ = $ || f, H = H || W, re !== r) {
          if (l) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = $ + ":" + W;
            !M[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[be] = !0, F++);
          }
        }
        return S[W] == null ? I ? S[W] === null ? new h("The " + q + " `" + H + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new h("The " + q + " `" + H + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : O(S, W, $, q, H);
      }
      var R = T.bind(null, !1);
      return R.isRequired = T.bind(null, !0), R;
    }
    function y(O) {
      function M(F, T, R, I, S, W) {
        var $ = F[T], q = ie($);
        if (q !== O) {
          var H = K($);
          return new h(
            "Invalid " + I + " `" + S + "` of type " + ("`" + H + "` supplied to `" + R + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(M);
    }
    function x() {
      return g(i);
    }
    function w(O) {
      function M(F, T, R, I, S) {
        if (typeof O != "function")
          return new h("Property `" + S + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var W = F[T];
        if (!Array.isArray(W)) {
          var $ = ie(W);
          return new h("Invalid " + I + " `" + S + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an array."));
        }
        for (var q = 0; q < W.length; q++) {
          var H = O(W, q, R, I, S + "[" + q + "]", r);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return g(M);
    }
    function E() {
      function O(M, F, T, R, I) {
        var S = M[F];
        if (!s(S)) {
          var W = ie(S);
          return new h("Invalid " + R + " `" + I + "` of type " + ("`" + W + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function _() {
      function O(M, F, T, R, I) {
        var S = M[F];
        if (!e.isValidElementType(S)) {
          var W = ie(S);
          return new h("Invalid " + R + " `" + I + "` of type " + ("`" + W + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function j(O) {
      function M(F, T, R, I, S) {
        if (!(F[T] instanceof O)) {
          var W = O.name || f, $ = me(F[T]);
          return new h("Invalid " + I + " `" + S + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return g(M);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function M(F, T, R, I, S) {
        for (var W = F[T], $ = 0; $ < O.length; $++)
          if (m(W, O[$]))
            return null;
        var q = JSON.stringify(O, function(re, P) {
          var be = K(P);
          return be === "symbol" ? String(P) : P;
        });
        return new h("Invalid " + I + " `" + S + "` of value `" + String(W) + "` " + ("supplied to `" + R + "`, expected one of " + q + "."));
      }
      return g(M);
    }
    function z(O) {
      function M(F, T, R, I, S) {
        if (typeof O != "function")
          return new h("Property `" + S + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var W = F[T], $ = ie(W);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + S + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an object."));
        for (var q in W)
          if (n(W, q)) {
            var H = O(W, q, R, I, S + "." + q, r);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return g(M);
    }
    function V(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var M = 0; M < O.length; M++) {
        var F = O[M];
        if (typeof F != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(F) + " at index " + M + "."
          ), i;
      }
      function T(R, I, S, W, $) {
        for (var q = [], H = 0; H < O.length; H++) {
          var re = O[H], P = re(R, I, S, W, $, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && q.push(P.data.expectedType);
        }
        var be = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new h("Invalid " + W + " `" + $ + "` supplied to " + ("`" + S + "`" + be + "."));
      }
      return g(T);
    }
    function B() {
      function O(M, F, T, R, I) {
        return Q(M[F]) ? null : new h("Invalid " + R + " `" + I + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function X(O, M, F, T, R) {
      return new h(
        (O || "React class") + ": " + M + " type `" + F + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function ae(O) {
      function M(F, T, R, I, S) {
        var W = F[T], $ = ie(W);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + S + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var q in O) {
          var H = O[q];
          if (typeof H != "function")
            return X(R, I, S, q, K(H));
          var re = H(W, q, R, I, S + "." + q, r);
          if (re)
            return re;
        }
        return null;
      }
      return g(M);
    }
    function te(O) {
      function M(F, T, R, I, S) {
        var W = F[T], $ = ie(W);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + S + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        var q = t({}, F[T], O);
        for (var H in q) {
          var re = O[H];
          if (n(O, H) && typeof re != "function")
            return X(R, I, S, H, K(re));
          if (!re)
            return new h(
              "Invalid " + I + " `" + S + "` key `" + H + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(F[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var P = re(W, H, R, I, S + "." + H, r);
          if (P)
            return P;
        }
        return null;
      }
      return g(M);
    }
    function Q(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(Q);
          if (O === null || s(O))
            return !0;
          var M = d(O);
          if (M) {
            var F = M.call(O), T;
            if (M !== O.entries) {
              for (; !(T = F.next()).done; )
                if (!Q(T.value))
                  return !1;
            } else
              for (; !(T = F.next()).done; ) {
                var R = T.value;
                if (R && !Q(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(O, M) {
      return O === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function ie(O) {
      var M = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : ee(M, O) ? "symbol" : M;
    }
    function K(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var M = ie(O);
      if (M === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function ye(O) {
      var M = K(O);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function me(O) {
      return !O.constructor || !O.constructor.name ? f : O.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Hl;
}
var Ul, vh;
function P5() {
  if (vh)
    return Ul;
  vh = 1;
  var e = Gu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ul = function() {
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
  }, Ul;
}
if (process.env.NODE_ENV !== "production") {
  var A5 = au, $5 = !0;
  Hc.exports = T5()(A5.isElement, $5);
} else
  Hc.exports = P5()();
var Ue = Hc.exports;
const Yg = /* @__PURE__ */ ps(Ue);
var Uc = "data-focus-lock", Gg = "data-focus-lock-disabled", R5 = "data-no-focus-lock", O5 = "data-autofocus-inside", D5 = "data-no-autofocus";
function M5(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function F5(e, t) {
  var r = St(function() {
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
function qg(e, t) {
  return F5(t || null, function(r) {
    return e.forEach(function(n) {
      return M5(n, r);
    });
  });
}
var Yl = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Yg.node;
var Er = function() {
  return Er = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Er.apply(this, arguments);
};
function Xg(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function I5(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Kg(e) {
  return e;
}
function Zg(e, t) {
  t === void 0 && (t = Kg);
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
function qu(e, t) {
  return t === void 0 && (t = Kg), Zg(e, t);
}
function Jg(e) {
  e === void 0 && (e = {});
  var t = Zg(null);
  return t.options = Er({ async: !0, ssr: !1 }, e), t;
}
var Qg = function(e) {
  var t = e.sideCar, r = Xg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return L.createElement(n, Er({}, r));
};
Qg.isSideCarExport = !0;
function j5(e, t) {
  return e.useMedium(t), Qg;
}
var eb = qu({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), tb = qu(), B5 = qu(), z5 = Jg({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), V5 = [], Xu = /* @__PURE__ */ L.forwardRef(function(t, r) {
  var n, o = L.useState(), a = o[0], i = o[1], s = L.useRef(), l = L.useRef(!1), c = L.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, g = t.allowTextSelection, y = t.group, x = t.className, w = t.whiteList, E = t.hasPositiveIndices, _ = t.shards, j = _ === void 0 ? V5 : _, D = t.as, z = D === void 0 ? "div" : D, V = t.lockProps, B = V === void 0 ? {} : V, X = t.sideCar, ae = t.returnFocus, te = t.focusOptions, Q = t.onActivation, ee = t.onDeactivation, ie = L.useState({}), K = ie[0], ye = L.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && Q && Q(s.current), l.current = !0;
  }, [Q]), me = L.useCallback(function() {
    l.current = !1, ee && ee(s.current);
  }, [ee]);
  Xe(function() {
    d || (c.current = null);
  }, []);
  var O = L.useCallback(function($) {
    var q = c.current;
    if (q && q.focus) {
      var H = typeof ae == "function" ? ae(q) : ae;
      if (H) {
        var re = typeof H == "object" ? H : void 0;
        c.current = null, $ ? Promise.resolve().then(function() {
          return q.focus(re);
        }) : q.focus(re);
      }
    }
  }, [ae]), M = L.useCallback(function($) {
    l.current && eb.useMedium($);
  }, []), F = tb.useMedium, T = L.useCallback(function($) {
    s.current !== $ && (s.current = $, i($));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof g < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), L.useEffect(function() {
    !s.current && typeof z != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var R = Fn((n = {}, n[Gg] = d && "disabled", n[Uc] = y, n), B), I = f !== !0, S = I && f !== "tail", W = qg([r, T]);
  return /* @__PURE__ */ L.createElement(L.Fragment, null, I && [
    // nearest focus guard
    /* @__PURE__ */ L.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Yl
    }),
    // first tabbed element guard
    E ? /* @__PURE__ */ L.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Yl
    }) : null
  ], !d && /* @__PURE__ */ L.createElement(X, {
    id: K,
    sideCar: z5,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: h,
    whiteList: w,
    shards: j,
    onActivation: ye,
    onDeactivation: me,
    returnFocus: O,
    focusOptions: te
  }), /* @__PURE__ */ L.createElement(z, Fn({
    ref: W
  }, R, {
    className: x,
    onBlur: F,
    onFocus: M
  }), u), S && /* @__PURE__ */ L.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Yl
  }));
});
Xu.propTypes = process.env.NODE_ENV !== "production" ? {
  children: Ue.node,
  disabled: Ue.bool,
  returnFocus: Ue.oneOfType([Ue.bool, Ue.object, Ue.func]),
  focusOptions: Ue.object,
  noFocusGuards: Ue.bool,
  hasPositiveIndices: Ue.bool,
  allowTextSelection: Ue.bool,
  autoFocus: Ue.bool,
  persistentFocus: Ue.bool,
  crossFrame: Ue.bool,
  group: Ue.string,
  className: Ue.string,
  whiteList: Ue.func,
  shards: Ue.arrayOf(Ue.any),
  as: Ue.oneOfType([Ue.string, Ue.func, Ue.object]),
  lockProps: Ue.object,
  onActivation: Ue.func,
  onDeactivation: Ue.func,
  sideCar: Ue.any.isRequired
} : {};
Xu.defaultProps = {
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
const rb = Xu;
function N5(e, t) {
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
      Wy(u, c);
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
        return /* @__PURE__ */ Pt.createElement(o, this.props);
      }, u;
    }(jy);
    return eu(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Dr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, cs = function(e) {
  return Array.isArray(e) ? e : [e];
}, nb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, L5 = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, ob = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, ab = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, W5 = function(e, t) {
  return !e || ab(e) || !L5(e) && t(ob(e));
}, ib = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = W5(t, ib.bind(void 0, e));
  return e.set(t, n), n;
}, H5 = function(e, t) {
  return e && !ab(e) ? G5(e) ? t(ob(e)) : !1 : !0;
}, sb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = H5(t, sb.bind(void 0, e));
  return e.set(t, n), n;
}, lb = function(e) {
  return e.dataset;
}, U5 = function(e) {
  return e.tagName === "BUTTON";
}, cb = function(e) {
  return e.tagName === "INPUT";
}, ub = function(e) {
  return cb(e) && e.type === "radio";
}, Y5 = function(e) {
  return !((cb(e) || U5(e)) && (e.type === "hidden" || e.disabled));
}, G5 = function(e) {
  var t = e.getAttribute(D5);
  return ![!0, "true", ""].includes(t);
}, Ku = function(e) {
  var t;
  return !!(e && (!((t = lb(e)) === null || t === void 0) && t.focusGuard));
}, us = function(e) {
  return !Ku(e);
}, q5 = function(e) {
  return !!e;
}, X5 = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, db = function(e, t, r) {
  return Dr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(X5);
}, K5 = [
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
], Zu = K5.join(","), Z5 = "".concat(Zu, ", [data-focus-guard]"), fb = function(e, t) {
  return Dr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? Z5 : Zu) ? [n] : [], fb(n));
  }, []);
}, J5 = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Is([e.contentDocument.body], t) : [e];
}, Is = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = fb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return J5(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Dr(n.parentNode.querySelectorAll(Zu)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, Q5 = function(e) {
  var t = e.querySelectorAll("[".concat(O5, "]"));
  return Dr(t).map(function(r) {
    return Is([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Ju = function(e, t) {
  return Dr(e).filter(function(r) {
    return ib(t, r);
  }).filter(function(r) {
    return Y5(r);
  });
}, gh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Dr(e).filter(function(r) {
    return sb(t, r);
  });
}, Yc = function(e, t, r) {
  return db(Ju(Is(e, r), t), !0, r);
}, bh = function(e, t) {
  return db(Ju(Is(e), t), !1);
}, eF = function(e, t) {
  return Ju(Q5(e), t);
}, fo = function(e, t) {
  return e.shadowRoot ? fo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Dr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? fo(o, t) : !1;
    }
    return fo(r, t);
  });
}, tF = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, pb = function(e) {
  return e.parentNode ? pb(e.parentNode) : e;
}, Qu = function(e) {
  var t = cs(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(Uc);
    return r.push.apply(r, o ? tF(Dr(pb(n).querySelectorAll("[".concat(Uc, '="').concat(o, '"]:not([').concat(Gg, '="disabled"])')))) : [n]), r;
  }, []);
}, rF = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Pa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Pa(t.shadowRoot) : t instanceof HTMLIFrameElement && rF(function() {
      return t.contentWindow.document;
    }) ? Pa(t.contentWindow.document) : t;
  }
}, nF = function(e, t) {
  return e === t;
}, oF = function(e, t) {
  return !!Dr(e.querySelectorAll("iframe")).some(function(r) {
    return nF(r, t);
  });
}, hb = function(e, t) {
  return t === void 0 && (t = Pa(nb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : Qu(e).some(function(r) {
    return fo(r, t) || oF(r, t);
  });
}, aF = function(e) {
  e === void 0 && (e = document);
  var t = Pa(e);
  return t ? Dr(e.querySelectorAll("[".concat(R5, "]"))).some(function(r) {
    return fo(r, t);
  }) : !1;
}, iF = function(e, t) {
  return t.filter(ub).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, ed = function(e, t) {
  return ub(e) && e.name ? iF(e, t) : e;
}, sF = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(ed(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, yh = function(e) {
  return e[0] && e.length > 1 ? ed(e[0], e) : e[0];
}, xh = function(e, t) {
  return e.length > 1 ? e.indexOf(ed(e[t], e)) : t;
}, mb = "NEW_FOCUS", lF = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = Ku(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = sF(t), h = r !== void 0 ? m.indexOf(r) : -1, g = h - (n ? m.indexOf(n) : l), y = xh(e, 0), x = xh(e, o - 1);
    if (l === -1 || u === -1)
      return mb;
    if (!d && u >= 0)
      return u;
    if (l <= f && s && Math.abs(d) > 1)
      return x;
    if (l >= p && s && Math.abs(d) > 1)
      return y;
    if (d && Math.abs(g) > 1)
      return u;
    if (l <= f)
      return x;
    if (l > p)
      return y;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, cF = function(e) {
  return function(t) {
    var r, n = (r = lb(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, uF = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = gh(n.filter(cF(r)));
  return o && o.length ? yh(o) : yh(gh(t));
}, Gc = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Gc(e.parentNode.host || e.parentNode, t), t;
}, Gl = function(e, t) {
  for (var r = Gc(e), n = Gc(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, vb = function(e, t, r) {
  var n = cs(e), o = cs(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = Gl(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = Gl(a, l);
      c && (!i || fo(c, i) ? i = c : i = Gl(c, i));
    });
  }), i;
}, dF = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(eF(n, t));
  }, []);
}, fF = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(q5);
}, pF = function(e, t) {
  var r = Pa(cs(e).length > 0 ? document : nb(e).ownerDocument), n = Qu(e).filter(us), o = vb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = bh(n, a), s = Yc(n, a).filter(function(p) {
    var m = p.node;
    return us(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = bh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = fF(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = lF(u, l, r, t);
    if (d === mb) {
      var f = uF(i, u, dF(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, hF = function(e) {
  var t = Qu(e).filter(us), r = vb(e, e, t), n = /* @__PURE__ */ new Map(), o = Yc([r], n, !0), a = Yc(t, n).filter(function(i) {
    var s = i.node;
    return us(s);
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
      guard: Ku(s)
    };
  });
}, mF = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, ql = 0, Xl = !1, gb = function(e, t, r) {
  r === void 0 && (r = {});
  var n = pF(e, t);
  if (!Xl && n) {
    if (ql > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), Xl = !0, setTimeout(function() {
        Xl = !1;
      }, 1);
      return;
    }
    ql++, mF(n.node, r.focusOptions), ql--;
  }
};
function bb(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var vF = function() {
  return document && document.activeElement === document.body;
}, gF = function() {
  return vF() || aF();
}, po = null, no = null, ho = null, Aa = !1, bF = function() {
  return !0;
}, yF = function(t) {
  return (po.whiteList || bF)(t);
}, xF = function(t, r) {
  ho = {
    observerNode: t,
    portaledElement: r
  };
}, SF = function(t) {
  return ho && ho.portaledElement === t;
};
function Sh(e, t, r, n) {
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
var wF = function(t) {
  return t && "current" in t ? t.current : t;
}, CF = function(t) {
  return t ? !!Aa : Aa === "meanwhile";
}, kF = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, _F = function(t, r) {
  return r.some(function(n) {
    return kF(t, n, n);
  });
}, ds = function() {
  var t = !1;
  if (po) {
    var r = po, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || ho && ho.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(wF).filter(Boolean));
      if ((!u || yF(u)) && (o || CF(s) || !gF() || !no && a) && (c && !// active element is "inside" working area
      (hb(d) || // check for shadow-dom contained elements
      u && _F(u, d) || SF(u)) && (document && !no && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = gb(d, no, {
        focusOptions: l
      }), ho = {})), Aa = !1, no = document && document.activeElement), document) {
        var f = document && document.activeElement, p = hF(d), m = p.map(function(h) {
          var g = h.node;
          return g;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var g = h.guard, y = h.node;
          return g && y.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var g = h.node;
          return g.removeAttribute("tabIndex");
        }), Sh(m, p.length, 1, p), Sh(m, -1, -1, p));
      }
    }
  }
  return t;
}, yb = function(t) {
  ds() && t && (t.stopPropagation(), t.preventDefault());
}, td = function() {
  return bb(ds);
}, EF = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || xF(n, r);
}, TF = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Yg.node.isRequired;
var xb = function() {
  Aa = "just", setTimeout(function() {
    Aa = "meanwhile";
  }, 0);
}, PF = function() {
  document.addEventListener("focusin", yb), document.addEventListener("focusout", td), window.addEventListener("blur", xb);
}, AF = function() {
  document.removeEventListener("focusin", yb), document.removeEventListener("focusout", td), window.removeEventListener("blur", xb);
};
function $F(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function RF(e) {
  var t = e.slice(-1)[0];
  t && !po && PF();
  var r = po, n = r && t && t.id === r.id;
  po = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (no = null, (!n || r.observed !== t.observed) && t.onActivation(), ds(), bb(ds)) : (AF(), no = null);
}
eb.assignSyncMedium(EF);
tb.assignMedium(td);
B5.assignMedium(function(e) {
  return e({
    moveFocusInside: gb,
    focusInside: hb
  });
});
const OF = N5($F, RF)(TF);
var Sb = /* @__PURE__ */ L.forwardRef(function(t, r) {
  return /* @__PURE__ */ L.createElement(rb, Fn({
    sideCar: OF,
    ref: r
  }, t));
}), wb = rb.propTypes || {};
wb.sideCar;
var DF = _5(wb, ["sideCar"]);
Sb.propTypes = process.env.NODE_ENV !== "production" ? DF : {};
const wh = Sb;
function Cb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function rd(e) {
  var t;
  if (!Cb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function Yz(e) {
  var t, r;
  return (r = (t = kb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function kb(e) {
  return Cb(e) ? e.ownerDocument : document;
}
function Gz(e) {
  return kb(e).activeElement;
}
function MF(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function FF(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function _b(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : rd(e) && MF(e) ? e : _b(FF(e));
}
var Eb = (e) => e.hasAttribute("tabindex"), IF = (e) => Eb(e) && e.tabIndex === -1;
function jF(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Tb(e) {
  return e.parentElement && Tb(e.parentElement) ? !0 : e.hidden;
}
function BF(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Pb(e) {
  if (!rd(e) || Tb(e) || jF(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : BF(e) ? !0 : Eb(e);
}
function qz(e) {
  return e ? rd(e) && Pb(e) && !IF(e) : !1;
}
var zF = [
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
], VF = zF.join(), NF = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function LF(e) {
  const t = Array.from(
    e.querySelectorAll(VF)
  );
  return t.unshift(e), t.filter((r) => Pb(r) && NF(r));
}
var Ch, WF = (Ch = wh.default) != null ? Ch : wh, Ab = (e) => {
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
  } = e, u = ce(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && LF(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = ce(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ Y.jsx(
    WF,
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
Ab.displayName = "FocusLock";
var $b = Le("div");
$b.displayName = "Box";
var Rb = ot(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ Y.jsx(
    $b,
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
Rb.displayName = "Square";
var HF = ot(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ Y.jsx(Rb, { size: n, ref: r, borderRadius: "9999px", ...o });
});
HF.displayName = "Circle";
var UF = ot(function(t, r) {
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
  return /* @__PURE__ */ Y.jsx(Le.div, { ref: r, __css: d, ...u });
});
UF.displayName = "Flex";
var Un = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), xt = {
  arrowShadowColor: Un("--popper-arrow-shadow-color"),
  arrowSize: Un("--popper-arrow-size", "8px"),
  arrowSizeHalf: Un("--popper-arrow-size-half"),
  arrowBg: Un("--popper-arrow-bg"),
  transformOrigin: Un("--popper-transform-origin"),
  arrowOffset: Un("--popper-arrow-offset")
};
function YF(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var GF = {
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
}, qF = (e) => GF[e], kh = {
  scroll: !0,
  resize: !0
};
function XF(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...kh, ...e }
  } : t = {
    enabled: e,
    options: kh
  }, t;
}
var KF = {
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
}, ZF = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    _h(e);
  },
  effect: ({ state: e }) => () => {
    _h(e);
  }
}, _h = (e) => {
  e.elements.popper.style.setProperty(
    xt.transformOrigin.var,
    qF(e.placement)
  );
}, JF = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    QF(e);
  }
}, QF = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = eI(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: xt.arrowSize.varRef,
      height: xt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [xt.arrowSizeHalf.var]: `calc(${xt.arrowSize.varRef} / 2 - 1px)`,
      [xt.arrowOffset.var]: `calc(${xt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, eI = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: xt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: xt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: xt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: xt.arrowOffset.varRef };
}, tI = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Eh(e);
  },
  effect: ({ state: e }) => () => {
    Eh(e);
  }
}, Eh = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = YF(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: xt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, rI = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, nI = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function oI(e, t = "ltr") {
  var r, n;
  const o = ((r = rI[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = nI[e]) != null ? n : o;
}
var Mt = "top", tr = "bottom", rr = "right", Ft = "left", nd = "auto", Wa = [Mt, tr, rr, Ft], wo = "start", $a = "end", aI = "clippingParents", Ob = "viewport", No = "popper", iI = "reference", Th = /* @__PURE__ */ Wa.reduce(function(e, t) {
  return e.concat([t + "-" + wo, t + "-" + $a]);
}, []), Db = /* @__PURE__ */ [].concat(Wa, [nd]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wo, t + "-" + $a]);
}, []), sI = "beforeRead", lI = "read", cI = "afterRead", uI = "beforeMain", dI = "main", fI = "afterMain", pI = "beforeWrite", hI = "write", mI = "afterWrite", vI = [sI, lI, cI, uI, dI, fI, pI, hI, mI];
function Rr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ut(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function In(e) {
  var t = Ut(e).Element;
  return e instanceof t || e instanceof Element;
}
function er(e) {
  var t = Ut(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function od(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Ut(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gI(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !er(a) || !Rr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function bI(e) {
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
      !er(o) || !Rr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const yI = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: gI,
  effect: bI,
  requires: ["computeStyles"]
};
function $r(e) {
  return e.split("-")[0];
}
var Mn = Math.max, fs = Math.min, Co = Math.round;
function qc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Mb() {
  return !/^((?!chrome|android).)*safari/i.test(qc());
}
function ko(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && er(e) && (o = e.offsetWidth > 0 && Co(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Co(n.height) / e.offsetHeight || 1);
  var i = In(e) ? Ut(e) : window, s = i.visualViewport, l = !Mb() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function ad(e) {
  var t = ko(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Fb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && od(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Zr(e) {
  return Ut(e).getComputedStyle(e);
}
function xI(e) {
  return ["table", "td", "th"].indexOf(Rr(e)) >= 0;
}
function gn(e) {
  return ((In(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function js(e) {
  return Rr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (od(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gn(e)
  );
}
function Ph(e) {
  return !er(e) || // https://github.com/popperjs/popper-core/issues/837
  Zr(e).position === "fixed" ? null : e.offsetParent;
}
function SI(e) {
  var t = /firefox/i.test(qc()), r = /Trident/i.test(qc());
  if (r && er(e)) {
    var n = Zr(e);
    if (n.position === "fixed")
      return null;
  }
  var o = js(e);
  for (od(o) && (o = o.host); er(o) && ["html", "body"].indexOf(Rr(o)) < 0; ) {
    var a = Zr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ha(e) {
  for (var t = Ut(e), r = Ph(e); r && xI(r) && Zr(r).position === "static"; )
    r = Ph(r);
  return r && (Rr(r) === "html" || Rr(r) === "body" && Zr(r).position === "static") ? t : r || SI(e) || t;
}
function id(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function la(e, t, r) {
  return Mn(e, fs(t, r));
}
function wI(e, t, r) {
  var n = la(e, t, r);
  return n > r ? r : n;
}
function Ib() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function jb(e) {
  return Object.assign({}, Ib(), e);
}
function Bb(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var CI = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, jb(typeof t != "number" ? t : Bb(t, Wa));
};
function kI(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = $r(r.placement), l = id(s), c = [Ft, rr].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = CI(o.padding, r), f = ad(a), p = l === "y" ? Mt : Ft, m = l === "y" ? tr : rr, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], g = i[l] - r.rects.reference[l], y = Ha(a), x = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, w = h / 2 - g / 2, E = d[p], _ = x - f[u] - d[m], j = x / 2 - f[u] / 2 + w, D = la(E, j, _), z = l;
    r.modifiersData[n] = (t = {}, t[z] = D, t.centerOffset = D - j, t);
  }
}
function _I(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Fb(t.elements.popper, o) && (t.elements.arrow = o));
}
const EI = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kI,
  effect: _I,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function _o(e) {
  return e.split("-")[1];
}
var TI = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function PI(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Co(r * o) / o || 0,
    y: Co(n * o) / o || 0
  };
}
function Ah(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = g.x, h = g.y;
  var y = i.hasOwnProperty("x"), x = i.hasOwnProperty("y"), w = Ft, E = Mt, _ = window;
  if (c) {
    var j = Ha(r), D = "clientHeight", z = "clientWidth";
    if (j === Ut(r) && (j = gn(r), Zr(j).position !== "static" && s === "absolute" && (D = "scrollHeight", z = "scrollWidth")), j = j, o === Mt || (o === Ft || o === rr) && a === $a) {
      E = tr;
      var V = d && j === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[D]
      );
      h -= V - n.height, h *= l ? 1 : -1;
    }
    if (o === Ft || (o === Mt || o === tr) && a === $a) {
      w = rr;
      var B = d && j === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[z]
      );
      p -= B - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && TI), ae = u === !0 ? PI({
    x: p,
    y: h
  }, Ut(r)) : {
    x: p,
    y: h
  };
  if (p = ae.x, h = ae.y, l) {
    var te;
    return Object.assign({}, X, (te = {}, te[E] = x ? "0" : "", te[w] = y ? "0" : "", te.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", te));
  }
  return Object.assign({}, X, (t = {}, t[E] = x ? h + "px" : "", t[w] = y ? p + "px" : "", t.transform = "", t));
}
function AI(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: $r(t.placement),
    variation: _o(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ah(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ah(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $I = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: AI,
  data: {}
};
var pi = {
  passive: !0
};
function RI(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = Ut(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, pi);
  }), s && l.addEventListener("resize", r.update, pi), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, pi);
    }), s && l.removeEventListener("resize", r.update, pi);
  };
}
const OI = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: RI,
  data: {}
};
var DI = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ii(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return DI[t];
  });
}
var MI = {
  start: "end",
  end: "start"
};
function $h(e) {
  return e.replace(/start|end/g, function(t) {
    return MI[t];
  });
}
function sd(e) {
  var t = Ut(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function ld(e) {
  return ko(gn(e)).left + sd(e).scrollLeft;
}
function FI(e, t) {
  var r = Ut(e), n = gn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = Mb();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + ld(e),
    y: l
  };
}
function II(e) {
  var t, r = gn(e), n = sd(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Mn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Mn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + ld(e), l = -n.scrollTop;
  return Zr(o || r).direction === "rtl" && (s += Mn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function cd(e) {
  var t = Zr(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function zb(e) {
  return ["html", "body", "#document"].indexOf(Rr(e)) >= 0 ? e.ownerDocument.body : er(e) && cd(e) ? e : zb(js(e));
}
function ca(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = zb(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ut(n), i = o ? [a].concat(a.visualViewport || [], cd(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ca(js(i)))
  );
}
function Xc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function jI(e, t) {
  var r = ko(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Rh(e, t, r) {
  return t === Ob ? Xc(FI(e, r)) : In(t) ? jI(t, r) : Xc(II(gn(e)));
}
function BI(e) {
  var t = ca(js(e)), r = ["absolute", "fixed"].indexOf(Zr(e).position) >= 0, n = r && er(e) ? Ha(e) : e;
  return In(n) ? t.filter(function(o) {
    return In(o) && Fb(o, n) && Rr(o) !== "body";
  }) : [];
}
function zI(e, t, r, n) {
  var o = t === "clippingParents" ? BI(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = Rh(e, c, n);
    return l.top = Mn(u.top, l.top), l.right = fs(u.right, l.right), l.bottom = fs(u.bottom, l.bottom), l.left = Mn(u.left, l.left), l;
  }, Rh(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Vb(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? $r(n) : null, a = n ? _o(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Mt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case tr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case rr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ft:
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
  var c = o ? id(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case wo:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case $a:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ra(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? aI : s, c = r.rootBoundary, u = c === void 0 ? Ob : c, d = r.elementContext, f = d === void 0 ? No : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, g = h === void 0 ? 0 : h, y = jb(typeof g != "number" ? g : Bb(g, Wa)), x = f === No ? iI : No, w = e.rects.popper, E = e.elements[m ? x : f], _ = zI(In(E) ? E : E.contextElement || gn(e.elements.popper), l, u, i), j = ko(e.elements.reference), D = Vb({
    reference: j,
    element: w,
    strategy: "absolute",
    placement: o
  }), z = Xc(Object.assign({}, w, D)), V = f === No ? z : j, B = {
    top: _.top - V.top + y.top,
    bottom: V.bottom - _.bottom + y.bottom,
    left: _.left - V.left + y.left,
    right: V.right - _.right + y.right
  }, X = e.modifiersData.offset;
  if (f === No && X) {
    var ae = X[o];
    Object.keys(B).forEach(function(te) {
      var Q = [rr, tr].indexOf(te) >= 0 ? 1 : -1, ee = [Mt, tr].indexOf(te) >= 0 ? "y" : "x";
      B[te] += ae[ee] * Q;
    });
  }
  return B;
}
function VI(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Db : l, u = _o(n), d = u ? s ? Th : Th.filter(function(m) {
    return _o(m) === u;
  }) : Wa, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Ra(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[$r(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function NI(e) {
  if ($r(e) === nd)
    return [];
  var t = Ii(e);
  return [$h(e), t, $h(t)];
}
function LI(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, g = t.options.placement, y = $r(g), x = y === g, w = l || (x || !m ? [Ii(g)] : NI(g)), E = [g].concat(w).reduce(function(R, I) {
      return R.concat($r(I) === nd ? VI(t, {
        placement: I,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : I);
    }, []), _ = t.rects.reference, j = t.rects.popper, D = /* @__PURE__ */ new Map(), z = !0, V = E[0], B = 0; B < E.length; B++) {
      var X = E[B], ae = $r(X), te = _o(X) === wo, Q = [Mt, tr].indexOf(ae) >= 0, ee = Q ? "width" : "height", ie = Ra(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), K = Q ? te ? rr : Ft : te ? tr : Mt;
      _[ee] > j[ee] && (K = Ii(K));
      var ye = Ii(K), me = [];
      if (a && me.push(ie[ae] <= 0), s && me.push(ie[K] <= 0, ie[ye] <= 0), me.every(function(R) {
        return R;
      })) {
        V = X, z = !1;
        break;
      }
      D.set(X, me);
    }
    if (z)
      for (var O = m ? 3 : 1, M = function(I) {
        var S = E.find(function(W) {
          var $ = D.get(W);
          if ($)
            return $.slice(0, I).every(function(q) {
              return q;
            });
        });
        if (S)
          return V = S, "break";
      }, F = O; F > 0; F--) {
        var T = M(F);
        if (T === "break")
          break;
      }
    t.placement !== V && (t.modifiersData[n]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const WI = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: LI,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Oh(e, t, r) {
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
function Dh(e) {
  return [Mt, rr, tr, Ft].some(function(t) {
    return e[t] >= 0;
  });
}
function HI(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Ra(t, {
    elementContext: "reference"
  }), s = Ra(t, {
    altBoundary: !0
  }), l = Oh(i, n), c = Oh(s, o, a), u = Dh(l), d = Dh(c);
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
const UI = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: HI
};
function YI(e, t, r) {
  var n = $r(e), o = [Ft, Mt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ft, rr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function GI(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Db.reduce(function(u, d) {
    return u[d] = YI(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const qI = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: GI
};
function XI(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Vb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const KI = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: XI,
  data: {}
};
function ZI(e) {
  return e === "x" ? "y" : "x";
}
function JI(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, g = Ra(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), y = $r(t.placement), x = _o(t.placement), w = !x, E = id(y), _ = ZI(E), j = t.modifiersData.popperOffsets, D = t.rects.reference, z = t.rects.popper, V = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, B = typeof V == "number" ? {
    mainAxis: V,
    altAxis: V
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, V), X = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ae = {
    x: 0,
    y: 0
  };
  if (j) {
    if (a) {
      var te, Q = E === "y" ? Mt : Ft, ee = E === "y" ? tr : rr, ie = E === "y" ? "height" : "width", K = j[E], ye = K + g[Q], me = K - g[ee], O = p ? -z[ie] / 2 : 0, M = x === wo ? D[ie] : z[ie], F = x === wo ? -z[ie] : -D[ie], T = t.elements.arrow, R = p && T ? ad(T) : {
        width: 0,
        height: 0
      }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ib(), S = I[Q], W = I[ee], $ = la(0, D[ie], R[ie]), q = w ? D[ie] / 2 - O - $ - S - B.mainAxis : M - $ - S - B.mainAxis, H = w ? -D[ie] / 2 + O + $ + W + B.mainAxis : F + $ + W + B.mainAxis, re = t.elements.arrow && Ha(t.elements.arrow), P = re ? E === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, be = (te = X == null ? void 0 : X[E]) != null ? te : 0, de = K + q - be - P, se = K + H - be, Ae = la(p ? fs(ye, de) : ye, K, p ? Mn(me, se) : me);
      j[E] = Ae, ae[E] = Ae - K;
    }
    if (s) {
      var ve, xe = E === "x" ? Mt : Ft, ct = E === "x" ? tr : rr, we = j[_], st = _ === "y" ? "height" : "width", Qe = we + g[xe], Oe = we - g[ct], oe = [Mt, Ft].indexOf(y) !== -1, Ee = (ve = X == null ? void 0 : X[_]) != null ? ve : 0, _t = oe ? Qe : we - D[st] - z[st] - Ee + B.altAxis, mt = oe ? we + D[st] + z[st] - Ee - B.altAxis : Oe, at = p && oe ? wI(_t, we, mt) : la(p ? _t : Qe, we, p ? mt : Oe);
      j[_] = at, ae[_] = at - we;
    }
    t.modifiersData[n] = ae;
  }
}
const QI = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: JI,
  requiresIfExists: ["offset"]
};
function ej(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tj(e) {
  return e === Ut(e) || !er(e) ? sd(e) : ej(e);
}
function rj(e) {
  var t = e.getBoundingClientRect(), r = Co(t.width) / e.offsetWidth || 1, n = Co(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function nj(e, t, r) {
  r === void 0 && (r = !1);
  var n = er(t), o = er(t) && rj(t), a = gn(t), i = ko(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Rr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  cd(a)) && (s = tj(t)), er(t) ? (l = ko(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ld(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function oj(e) {
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
function aj(e) {
  var t = oj(e);
  return vI.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function ij(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function sj(e) {
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
var Mh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function lj(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? Mh : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Mh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(y) {
        var x = typeof y == "function" ? y(u.options) : y;
        h(), u.options = Object.assign({}, a, u.options, x), u.scrollParents = {
          reference: In(s) ? ca(s) : s.contextElement ? ca(s.contextElement) : [],
          popper: ca(l)
        };
        var w = aj(sj([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = w.filter(function(E) {
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
          var y = u.elements, x = y.reference, w = y.popper;
          if (Fh(x, w)) {
            u.rects = {
              reference: nj(x, Ha(w), u.options.strategy === "fixed"),
              popper: ad(w)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(B) {
              return u.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var E = 0; E < u.orderedModifiers.length; E++) {
              if (u.reset === !0) {
                u.reset = !1, E = -1;
                continue;
              }
              var _ = u.orderedModifiers[E], j = _.fn, D = _.options, z = D === void 0 ? {} : D, V = _.name;
              typeof j == "function" && (u = j({
                state: u,
                options: z,
                name: V,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ij(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Fh(s, l))
      return p;
    p.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function m() {
      u.orderedModifiers.forEach(function(g) {
        var y = g.name, x = g.options, w = x === void 0 ? {} : x, E = g.effect;
        if (typeof E == "function") {
          var _ = E({
            state: u,
            name: y,
            instance: p,
            options: w
          }), j = function() {
          };
          d.push(_ || j);
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
var cj = [OI, KI, $I, yI, qI, WI, QI, EI, UI], uj = /* @__PURE__ */ lj({
  defaultModifiers: cj
});
function dj(e = {}) {
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
  } = e, m = Re(null), h = Re(null), g = Re(null), y = oI(n, p), x = Re(() => {
  }), w = ce(() => {
    var B;
    !t || !m.current || !h.current || ((B = x.current) == null || B.call(x), g.current = uj(m.current, h.current, {
      placement: y,
      modifiers: [
        tI,
        JF,
        ZF,
        {
          ...KF,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...XF(i)
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
    }), g.current.forceUpdate(), x.current = g.current.destroy);
  }, [
    y,
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
  Xe(() => () => {
    var B;
    !m.current && !h.current && ((B = g.current) == null || B.destroy(), g.current = null);
  }, []);
  const E = ce(
    (B) => {
      m.current = B, w();
    },
    [w]
  ), _ = ce(
    (B = {}, X = null) => ({
      ...B,
      ref: mr(E, X)
    }),
    [E]
  ), j = ce(
    (B) => {
      h.current = B, w();
    },
    [w]
  ), D = ce(
    (B = {}, X = null) => ({
      ...B,
      ref: mr(j, X),
      style: {
        ...B.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, j, f]
  ), z = ce((B = {}, X = null) => {
    const { size: ae, shadowColor: te, bg: Q, style: ee, ...ie } = B;
    return {
      ...ie,
      ref: X,
      "data-popper-arrow": "",
      style: fj(B)
    };
  }, []), V = ce(
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
    transformOrigin: xt.transformOrigin.varRef,
    referenceRef: E,
    popperRef: j,
    getPopperProps: D,
    getArrowProps: z,
    getArrowInnerProps: V,
    getReferenceProps: _
  };
}
function fj(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function pj(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = Qt(r), i = Qt(t), [s, l] = St(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = mn(), f = o ?? `disclosure-${d}`, p = ce(() => {
    u || l(!1), i == null || i();
  }, [u, i]), m = ce(() => {
    u || l(!0), a == null || a();
  }, [u, a]), h = ce(() => {
    c ? p() : m();
  }, [c, m, p]);
  function g(x = {}) {
    return {
      ...x,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(w) {
        var E;
        (E = x.onClick) == null || E.call(x, w), h();
      }
    };
  }
  function y(x = {}) {
    return {
      ...x,
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
    getDisclosureProps: y
  };
}
var hj = {
  slideInBottom: {
    ...Lc,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...Lc,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...Lg,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, mj = Le(Nn.section), vj = (e) => hj[e || "none"], Nb = kt(
  (e, t) => {
    const { preset: r, motionProps: n = vj(r), ...o } = e;
    return /* @__PURE__ */ Y.jsx(mj, { ref: t, ...n, ...o });
  }
);
Nb.displayName = "ModalTransition";
var gj = Object.defineProperty, bj = (e, t, r) => t in e ? gj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, yj = (e, t, r) => (bj(e, typeof t != "symbol" ? t + "" : t, r), r), xj = class {
  constructor() {
    yj(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, Kc = new xj();
function Lb(e, t) {
  const [r, n] = St(0);
  return Xe(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = Kc.add(o);
        n(a);
      }
      return () => {
        Kc.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var Sj = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yn = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), mi = {}, Kl = 0, Wb = function(e) {
  return e && (e.host || Wb(e.parentNode));
}, wj = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Wb(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Cj = function(e, t, r, n) {
  var o = wj(t, Array.isArray(e) ? e : [e]);
  mi[r] || (mi[r] = /* @__PURE__ */ new WeakMap());
  var a = mi[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (Yn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        Yn.set(f, h), a.set(f, g), i.push(f), h === 1 && m && hi.set(f, !0), g === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), Kl++, function() {
    i.forEach(function(d) {
      var f = Yn.get(d) - 1, p = a.get(d) - 1;
      Yn.set(d, f), a.set(d, p), f || (hi.has(d) || d.removeAttribute(n), hi.delete(d)), p || d.removeAttribute(r);
    }), Kl--, Kl || (Yn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), mi = {});
  };
}, kj = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || Sj(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), Cj(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function _j(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = Re(null), u = Re(null), [d, f, p] = Tj(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  Ej(c, t && i);
  const m = Lb(c, t), h = Re(null), g = ce((V) => {
    h.current = V.target;
  }, []), y = ce(
    (V) => {
      V.key === "Escape" && (V.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [x, w] = St(!1), [E, _] = St(!1), j = ce(
    (V = {}, B = null) => ({
      role: "dialog",
      ...V,
      ref: mr(B, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": x ? f : void 0,
      "aria-describedby": E ? p : void 0,
      onClick: _r(
        V.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, E, d, f, x]
  ), D = ce(
    (V) => {
      V.stopPropagation(), h.current === V.target && Kc.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), z = ce(
    (V = {}, B = null) => ({
      ...V,
      ref: mr(B, u),
      onClick: _r(V.onClick, D),
      onKeyDown: _r(V.onKeyDown, y),
      onMouseDown: _r(V.onMouseDown, g)
    }),
    [y, g, D]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: _,
    setHeaderMounted: w,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: j,
    getDialogContainerProps: z,
    index: m
  };
}
function Ej(e, t) {
  const r = e.current;
  Xe(() => {
    if (!(!e.current || !t))
      return kj(e.current);
  }, [t, e, r]);
}
function Tj(e, ...t) {
  const r = mn(), n = e || r;
  return It(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [Pj, Ln] = Qr({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [Aj, hn] = Qr({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Hb = (e) => {
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
  } = t, h = Eu("Modal", t), y = {
    ..._j(t),
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
  return /* @__PURE__ */ Y.jsx(Aj, { value: y, children: /* @__PURE__ */ Y.jsx(Pj, { value: h, children: /* @__PURE__ */ Y.jsx(Ao, { onExitComplete: m, children: y.isOpen && /* @__PURE__ */ Y.jsx(Ma, { ...r, children: n }) }) }) });
};
Hb.displayName = "Modal";
var ji = "right-scroll-bar-position", Bi = "width-before-scroll-bar", $j = "with-scroll-bars-hidden", Rj = "--removed-body-scroll-bar-size", Ub = Jg(), Zl = function() {
}, Bs = L.forwardRef(function(e, t) {
  var r = L.useRef(null), n = L.useState({
    onScrollCapture: Zl,
    onWheelCapture: Zl,
    onTouchMoveCapture: Zl
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, x = e.gapMode, w = Xg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = f, _ = qg([r, t]), j = Er(Er({}, w), o);
  return L.createElement(
    L.Fragment,
    null,
    u && L.createElement(E, { sideCar: Ub, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: x }),
    i ? L.cloneElement(L.Children.only(s), Er(Er({}, j), { ref: _ })) : L.createElement(y, Er({}, j, { className: l, ref: _ }), s)
  );
});
Bs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Bs.classNames = {
  fullWidth: Bi,
  zeroRight: ji
};
var Ih, Oj = function() {
  if (Ih)
    return Ih;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Dj() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Oj();
  return t && e.setAttribute("nonce", t), e;
}
function Mj(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Fj(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ij = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Dj()) && (Mj(t, r), Fj(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, jj = function() {
  var e = Ij();
  return function(t, r) {
    L.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Yb = function() {
  var e = jj(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Bj = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Jl = function(e) {
  return parseInt(e || "", 10) || 0;
}, zj = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Jl(r), Jl(n), Jl(o)];
}, Vj = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Bj;
  var t = zj(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Nj = Yb(), Lj = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat($j, ` {
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
  
  .`).concat(ji, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Bi, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ji, " .").concat(ji, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Bi, " .").concat(Bi, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(Rj, ": ").concat(s, `px;
  }
`);
}, Wj = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = L.useMemo(function() {
    return Vj(o);
  }, [o]);
  return L.createElement(Nj, { styles: Lj(a, !t, o, r ? "" : "!important") });
}, Zc = !1;
if (typeof window < "u")
  try {
    var gi = Object.defineProperty({}, "passive", {
      get: function() {
        return Zc = !0, !0;
      }
    });
    window.addEventListener("test", gi, gi), window.removeEventListener("test", gi, gi);
  } catch {
    Zc = !1;
  }
var Gn = Zc ? { passive: !1 } : !1, Hj = function(e) {
  return e.tagName === "TEXTAREA";
}, Gb = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Hj(e) && r[t] === "visible")
  );
}, Uj = function(e) {
  return Gb(e, "overflowY");
}, Yj = function(e) {
  return Gb(e, "overflowX");
}, jh = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = qb(e, n);
    if (o) {
      var a = Xb(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, Gj = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, qj = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, qb = function(e, t) {
  return e === "v" ? Uj(t) : Yj(t);
}, Xb = function(e, t) {
  return e === "v" ? Gj(t) : qj(t);
}, Xj = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Kj = function(e, t, r, n, o) {
  var a = Xj(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Xb(e, s), m = p[0], h = p[1], g = p[2], y = h - g - a * m;
    (m || y) && qb(e, s) && (d += y, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, bi = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bh = function(e) {
  return [e.deltaX, e.deltaY];
}, zh = function(e) {
  return e && "current" in e ? e.current : e;
}, Zj = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Jj = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Qj = 0, qn = [];
function eB(e) {
  var t = L.useRef([]), r = L.useRef([0, 0]), n = L.useRef(), o = L.useState(Qj++)[0], a = L.useState(Yb)[0], i = L.useRef(e);
  L.useEffect(function() {
    i.current = e;
  }, [e]), L.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = I5([e.lockRef.current], (e.shards || []).map(zh), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = L.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !i.current.allowPinchZoom;
    var y = bi(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - y[0], E = "deltaY" in h ? h.deltaY : x[1] - y[1], _, j = h.target, D = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in h && D === "h" && j.type === "range")
      return !1;
    var z = jh(D, j);
    if (!z)
      return !0;
    if (z ? _ = D : (_ = D === "v" ? "h" : "v", z = jh(D, j)), !z)
      return !1;
    if (!n.current && "changedTouches" in h && (w || E) && (n.current = _), !_)
      return !0;
    var V = n.current || _;
    return Kj(V, g, h, V === "h" ? w : E, !0);
  }, []), l = L.useCallback(function(h) {
    var g = h;
    if (!(!qn.length || qn[qn.length - 1] !== a)) {
      var y = "deltaY" in g ? Bh(g) : bi(g), x = t.current.filter(function(_) {
        return _.name === g.type && _.target === g.target && Zj(_.delta, y);
      })[0];
      if (x && x.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(zh).filter(Boolean).filter(function(_) {
          return _.contains(g.target);
        }), E = w.length > 0 ? s(g, w[0]) : !i.current.noIsolation;
        E && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = L.useCallback(function(h, g, y, x) {
    var w = { name: h, delta: g, target: y, should: x };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = L.useCallback(function(h) {
    r.current = bi(h), n.current = void 0;
  }, []), d = L.useCallback(function(h) {
    c(h.type, Bh(h), h.target, s(h, e.lockRef.current));
  }, []), f = L.useCallback(function(h) {
    c(h.type, bi(h), h.target, s(h, e.lockRef.current));
  }, []);
  L.useEffect(function() {
    return qn.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Gn), document.addEventListener("touchmove", l, Gn), document.addEventListener("touchstart", u, Gn), function() {
      qn = qn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Gn), document.removeEventListener("touchmove", l, Gn), document.removeEventListener("touchstart", u, Gn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return L.createElement(
    L.Fragment,
    null,
    m ? L.createElement(a, { styles: Jj(o) }) : null,
    p ? L.createElement(Wj, { gapMode: e.gapMode }) : null
  );
}
const tB = j5(Ub, eB);
var Kb = L.forwardRef(function(e, t) {
  return L.createElement(Bs, Er({}, e, { ref: t, sideCar: tB }));
});
Kb.classNames = Bs.classNames;
const rB = Kb;
function Zb(e) {
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
  } = hn(), [f, p] = _g();
  Xe(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = Lb(n, d);
  return /* @__PURE__ */ Y.jsx(
    Ab,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ Y.jsx(
        rB,
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
var nB = ot(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = hn(), c = s(i, t), u = l(o), d = or("chakra-modal__content", r), f = Ln(), p = {
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
    }, { motionPreset: h } = hn();
    return /* @__PURE__ */ Y.jsx(Zb, { children: /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: m,
        children: /* @__PURE__ */ Y.jsx(
          Nb,
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
nB.displayName = "ModalContent";
var [oB, aB] = Qr(), iB = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function sB(e, t) {
  var r, n;
  if (e)
    return (n = (r = iB[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function Xz(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = Po(), l = (t = s.components) == null ? void 0 : t.Drawer, c = sB(o, s.direction);
  return /* @__PURE__ */ Y.jsx(oB, { value: { placement: c }, children: /* @__PURE__ */ Y.jsx(
    Hb,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var lB = Le(Wg), cB = ot(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = hn(), u = s(i, t), d = l(a), f = or("chakra-modal__content", r), p = Ln(), m = {
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
    }, { placement: g } = aB();
    return /* @__PURE__ */ Y.jsx(Zb, { children: /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ Y.jsx(
          lB,
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
cB.displayName = "DrawerContent";
var uB = ot(
  (e, t) => {
    const { className: r, ...n } = e, o = or("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Ln().footer
    };
    return /* @__PURE__ */ Y.jsx(
      Le.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
uB.displayName = "ModalFooter";
var dB = ot(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = hn();
    Xe(() => (a(!0), () => a(!1)), [a]);
    const i = or("chakra-modal__header", r), l = {
      flex: 0,
      ...Ln().header
    };
    return /* @__PURE__ */ Y.jsx(
      Le.header,
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
dB.displayName = "ModalHeader";
var fB = Le(Nn.div), pB = ot(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = or("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Ln().overlay
    }, { motionPreset: c } = hn(), d = o || (c === "none" ? {} : Ng);
    return /* @__PURE__ */ Y.jsx(
      fB,
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
pB.displayName = "ModalOverlay";
var hB = ot((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = hn();
  Xe(() => (a(!0), () => a(!1)), [a]);
  const i = or("chakra-modal__body", r), s = Ln();
  return /* @__PURE__ */ Y.jsx(
    Le.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
hB.displayName = "ModalBody";
var mB = ot(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = hn(), i = or("chakra-modal__close-btn", n), s = Ln();
    return /* @__PURE__ */ Y.jsx(
      zg,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: _r(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
mB.displayName = "ModalCloseButton";
var Kt = (e) => e ? "" : void 0, mo = (e) => e ? !0 : void 0, bn = (...e) => e.filter(Boolean).join(" ");
function vo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function vB(e) {
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
function Xo(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var zi = { width: 0, height: 0 }, yi = (e) => e || zi;
function Jb(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var g;
    const y = (g = n[h]) != null ? g : zi;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...Xo({
        orientation: t,
        vertical: {
          bottom: `calc(${r[h]}% - ${y.height / 2}px)`
        },
        horizontal: {
          left: `calc(${r[h]}% - ${y.width / 2}px)`
        }
      })
    };
  }, i = t === "vertical" ? n.reduce(
    (h, g) => yi(h).height > yi(g).height ? h : g,
    zi
  ) : n.reduce(
    (h, g) => yi(h).width > yi(g).width ? h : g,
    zi
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...Xo({
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
    ...Xo({
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
    ...Xo({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: m, rootStyle: s, getThumbStyle: a };
}
function Qb(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function gB(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function bB(e) {
  const t = xB(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function ey(e) {
  return !!e.touches;
}
function yB(e) {
  return ey(e) && e.touches.length > 1;
}
function xB(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function SB(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function wB(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function ty(e, t = "page") {
  return ey(e) ? SB(e, t) : wB(e, t);
}
function CB(e) {
  return (t) => {
    const r = bB(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function kB(e, t = !1) {
  function r(o) {
    e(o, { point: ty(o) });
  }
  return t ? CB(r) : r;
}
function Vi(e, t, r, n) {
  return gB(e, t, kB(r, t === "pointerdown"), n);
}
var _B = Object.defineProperty, EB = (e, t, r) => t in e ? _B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sr = (e, t, r) => (EB(e, typeof t != "symbol" ? t + "" : t, r), r), TB = class {
  constructor(e, t, r) {
    sr(this, "history", []), sr(this, "startEvent", null), sr(this, "lastEvent", null), sr(this, "lastEventInfo", null), sr(this, "handlers", {}), sr(this, "removeListeners", () => {
    }), sr(this, "threshold", 3), sr(this, "win"), sr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = Ql(this.lastEventInfo, this.history), l = this.startEvent !== null, c = RB(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = tp();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), sr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, RR.update(this.updatePoint, !0);
    }), sr(this, "onPointerUp", (s, l) => {
      const c = Ql(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, yB(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: ty(e) }, { timestamp: a } = tp();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, Ql(o, this.history)), this.removeListeners = $B(
      Vi(this.win, "pointermove", this.onPointerMove),
      Vi(this.win, "pointerup", this.onPointerUp),
      Vi(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), OR.update(this.updatePoint);
  }
};
function Vh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ql(e, t) {
  return {
    point: e.point,
    delta: Vh(e.point, t[t.length - 1]),
    offset: Vh(e.point, t[0]),
    velocity: AB(t, 0.1)
  };
}
var PB = (e) => e * 1e3;
function AB(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > PB(t))); )
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
function $B(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function ec(e, t) {
  return Math.abs(e - t);
}
function Nh(e) {
  return "x" in e && "y" in e;
}
function RB(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return ec(e, t);
  if (Nh(e) && Nh(t)) {
    const r = ec(e.x, t.x), n = ec(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function ry(e) {
  const t = Re(null);
  return t.current = e, t;
}
function ny(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = Re(null), u = ry({
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(d, f) {
      c.current = null, o == null || o(d, f);
    }
  });
  Xe(() => {
    var d;
    (d = c.current) == null || d.updateHandlers(u.current);
  }), Xe(() => {
    const d = e.current;
    if (!d || !l)
      return;
    function f(p) {
      c.current = new TB(p, u.current, s);
    }
    return Vi(d, "pointerdown", f);
  }, [e, l, u, s]), Xe(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function OB(e, t) {
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
var DB = globalThis != null && globalThis.document ? Qc : Xe;
function MB(e, t) {
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
function oy({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = St([]), [o, a] = St(0);
  return DB(() => {
    const i = e(), s = i.map(
      (l, c) => OB(l, (u) => {
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
        MB(l, () => {
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
function FB(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function IB(e) {
  const [t] = oy({
    observeMutation: !1,
    getNodes() {
      return [FB(e) ? e.current : e];
    }
  });
  return t;
}
function jB(e) {
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
    "aria-label": y,
    "aria-labelledby": x,
    name: w,
    focusThumbOnChange: E = !0,
    minStepsBetweenThumbs: _ = 0,
    ...j
  } = e, D = Qt(f), z = Qt(p), V = Qt(h), B = Qb({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ae] = Vg({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [te, Q] = St(!1), [ee, ie] = St(!1), [K, ye] = St(-1), me = !(u || d), O = Re(X), M = X.map((U) => sa(U, t, r)), F = _ * m, T = BB(M, t, r, F), R = Re({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  R.current.value = M, R.current.valueBounds = T;
  const I = M.map((U) => r - U + t), W = (B ? I : M).map((U) => ls(U, t, r)), $ = l === "vertical", q = Re(null), H = Re(null), re = oy({
    getNodes() {
      const U = H.current, ne = U == null ? void 0 : U.querySelectorAll("[role=slider]");
      return ne ? Array.from(ne) : [];
    }
  }), P = mn(), de = vB(c ?? P), se = ce(
    (U) => {
      var ne, ge;
      if (!q.current)
        return;
      R.current.eventSource = "pointer";
      const Se = q.current.getBoundingClientRect(), { clientX: We, clientY: vt } = (ge = (ne = U.touches) == null ? void 0 : ne[0]) != null ? ge : U, Ge = $ ? Se.bottom - vt : We - Se.left, et = $ ? Se.height : Se.width;
      let jr = Ge / et;
      return B && (jr = 1 - jr), Hg(jr, t, r);
    },
    [$, B, r, t]
  ), Ae = (r - t) / 10, ve = m || (r - t) / 100, xe = It(
    () => ({
      setValueAtIndex(U, ne) {
        if (!me)
          return;
        const ge = R.current.valueBounds[U];
        ne = parseFloat(Wc(ne, ge.min, ve)), ne = sa(ne, ge.min, ge.max);
        const Se = [...R.current.value];
        Se[U] = ne, ae(Se);
      },
      setActiveIndex: ye,
      stepUp(U, ne = ve) {
        const ge = R.current.value[U], Se = B ? ge - ne : ge + ne;
        xe.setValueAtIndex(U, Se);
      },
      stepDown(U, ne = ve) {
        const ge = R.current.value[U], Se = B ? ge + ne : ge - ne;
        xe.setValueAtIndex(U, Se);
      },
      reset() {
        ae(O.current);
      }
    }),
    [ve, B, ae, me]
  ), ct = ce(
    (U) => {
      const ne = U.key, Se = {
        ArrowRight: () => xe.stepUp(K),
        ArrowUp: () => xe.stepUp(K),
        ArrowLeft: () => xe.stepDown(K),
        ArrowDown: () => xe.stepDown(K),
        PageUp: () => xe.stepUp(K, Ae),
        PageDown: () => xe.stepDown(K, Ae),
        Home: () => {
          const { min: We } = T[K];
          xe.setValueAtIndex(K, We);
        },
        End: () => {
          const { max: We } = T[K];
          xe.setValueAtIndex(K, We);
        }
      }[ne];
      Se && (U.preventDefault(), U.stopPropagation(), Se(U), R.current.eventSource = "keyboard");
    },
    [xe, K, Ae, T]
  ), { getThumbStyle: we, rootStyle: st, trackStyle: Qe, innerTrackStyle: Oe } = It(
    () => Jb({
      isReversed: B,
      orientation: l,
      thumbRects: re,
      thumbPercents: W
    }),
    [B, l, W, re]
  ), oe = ce(
    (U) => {
      var ne;
      const ge = U ?? K;
      if (ge !== -1 && E) {
        const Se = de.getThumb(ge), We = (ne = H.current) == null ? void 0 : ne.ownerDocument.getElementById(Se);
        We && setTimeout(() => We.focus());
      }
    },
    [E, K, de]
  );
  mv(() => {
    R.current.eventSource === "keyboard" && (z == null || z(R.current.value));
  }, [M, z]);
  const Ee = (U) => {
    const ne = se(U) || 0, ge = R.current.value.map(
      (et) => Math.abs(et - ne)
    ), Se = Math.min(...ge);
    let We = ge.indexOf(Se);
    const vt = ge.filter(
      (et) => et === Se
    );
    vt.length > 1 && ne > R.current.value[We] && (We = We + vt.length - 1), ye(We), xe.setValueAtIndex(We, ne), oe(We);
  }, _t = (U) => {
    if (K == -1)
      return;
    const ne = se(U) || 0;
    ye(K), xe.setValueAtIndex(K, ne), oe(K);
  };
  ny(H, {
    onPanSessionStart(U) {
      me && (Q(!0), Ee(U), D == null || D(R.current.value));
    },
    onPanSessionEnd() {
      me && (Q(!1), z == null || z(R.current.value));
    },
    onPan(U) {
      me && _t(U);
    }
  });
  const mt = ce(
    (U = {}, ne = null) => ({
      ...U,
      ...j,
      id: de.root,
      ref: mr(ne, H),
      tabIndex: -1,
      "aria-disabled": mo(u),
      "data-focused": Kt(ee),
      style: { ...U.style, ...st }
    }),
    [j, u, ee, st, de]
  ), at = ce(
    (U = {}, ne = null) => ({
      ...U,
      ref: mr(ne, q),
      id: de.track,
      "data-disabled": Kt(u),
      style: { ...U.style, ...Qe }
    }),
    [u, Qe, de]
  ), Mr = ce(
    (U = {}, ne = null) => ({
      ...U,
      ref: ne,
      id: de.innerTrack,
      style: {
        ...U.style,
        ...Oe
      }
    }),
    [Oe, de]
  ), Fr = ce(
    (U, ne = null) => {
      var ge;
      const { index: Se, ...We } = U, vt = M[Se];
      if (vt == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${Se}\`. The \`value\` or \`defaultValue\` length is : ${M.length}`
        );
      const Ge = T[Se];
      return {
        ...We,
        ref: ne,
        role: "slider",
        tabIndex: me ? 0 : void 0,
        id: de.getThumb(Se),
        "data-active": Kt(te && K === Se),
        "aria-valuetext": (ge = V == null ? void 0 : V(vt)) != null ? ge : g == null ? void 0 : g[Se],
        "aria-valuemin": Ge.min,
        "aria-valuemax": Ge.max,
        "aria-valuenow": vt,
        "aria-orientation": l,
        "aria-disabled": mo(u),
        "aria-readonly": mo(d),
        "aria-label": y == null ? void 0 : y[Se],
        "aria-labelledby": y != null && y[Se] || x == null ? void 0 : x[Se],
        style: { ...U.style, ...we(Se) },
        onKeyDown: vo(U.onKeyDown, ct),
        onFocus: vo(U.onFocus, () => {
          ie(!0), ye(Se);
        }),
        onBlur: vo(U.onBlur, () => {
          ie(!1), ye(-1);
        })
      };
    },
    [
      de,
      M,
      T,
      me,
      te,
      K,
      V,
      g,
      l,
      u,
      d,
      y,
      x,
      we,
      ct,
      ie
    ]
  ), Ir = ce(
    (U = {}, ne = null) => ({
      ...U,
      ref: ne,
      id: de.output,
      htmlFor: M.map((ge, Se) => de.getThumb(Se)).join(" "),
      "aria-live": "off"
    }),
    [de, M]
  ), Z = ce(
    (U, ne = null) => {
      const { value: ge, ...Se } = U, We = !(ge < t || ge > r), vt = ge >= M[0] && ge <= M[M.length - 1];
      let Ge = ls(ge, t, r);
      Ge = B ? 100 - Ge : Ge;
      const et = {
        position: "absolute",
        pointerEvents: "none",
        ...Xo({
          orientation: l,
          vertical: { bottom: `${Ge}%` },
          horizontal: { left: `${Ge}%` }
        })
      };
      return {
        ...Se,
        ref: ne,
        id: de.getMarker(U.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Kt(u),
        "data-invalid": Kt(!We),
        "data-highlighted": Kt(vt),
        style: {
          ...U.style,
          ...et
        }
      };
    },
    [u, B, r, t, l, M, de]
  ), he = ce(
    (U, ne = null) => {
      const { index: ge, ...Se } = U;
      return {
        ...Se,
        ref: ne,
        id: de.getInput(ge),
        type: "hidden",
        value: M[ge],
        name: Array.isArray(w) ? w[ge] : `${w}-${ge}`
      };
    },
    [w, M, de]
  );
  return {
    state: {
      value: M,
      isFocused: ee,
      isDragging: te,
      getThumbPercent: (U) => W[U],
      getThumbMinValue: (U) => T[U].min,
      getThumbMaxValue: (U) => T[U].max
    },
    actions: xe,
    getRootProps: mt,
    getTrackProps: at,
    getInnerTrackProps: Mr,
    getThumbProps: Fr,
    getMarkerProps: Z,
    getInputProps: he,
    getOutputProps: Ir
  };
}
function BB(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [zB, zs] = Qr({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [VB, Vs] = Qr({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), NB = ot(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Eu("Slider", n), a = ks(n), { direction: i } = Po();
    a.direction = i;
    const { getRootProps: s, ...l } = jB(a), c = It(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ Y.jsx(zB, { value: c, children: /* @__PURE__ */ Y.jsx(VB, { value: o, children: /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...s({}, r),
        className: "chakra-slider",
        __css: o.container,
        children: n.children
      }
    ) }) });
  }
);
NB.displayName = "RangeSlider";
var LB = ot(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = zs(), i = Vs(), s = n(t, r);
    return /* @__PURE__ */ Y.jsxs(
      Le.div,
      {
        ...s,
        className: bn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ Y.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
LB.displayName = "RangeSliderThumb";
var WB = ot(
  function(t, r) {
    const { getTrackProps: n } = zs(), o = Vs(), a = n(t, r);
    return /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...a,
        className: bn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
WB.displayName = "RangeSliderTrack";
var HB = ot(function(t, r) {
  const { getInnerTrackProps: n } = zs(), o = Vs(), a = n(t, r);
  return /* @__PURE__ */ Y.jsx(
    Le.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
HB.displayName = "RangeSliderFilledTrack";
var UB = ot(
  function(t, r) {
    const { getMarkerProps: n } = zs(), o = Vs(), a = n(t, r);
    return /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...a,
        className: bn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
UB.displayName = "RangeSliderMark";
function YB(e) {
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
    "aria-valuetext": y,
    "aria-label": x,
    "aria-labelledby": w,
    name: E,
    focusThumbOnChange: _ = !0,
    ...j
  } = e, D = Qt(p), z = Qt(m), V = Qt(g), B = Qb({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ae] = Vg({
    value: a,
    defaultValue: i ?? qB(r, n),
    onChange: o
  }), [te, Q] = St(!1), [ee, ie] = St(!1), K = !(d || f), ye = (n - r) / 10, me = h || (n - r) / 100, O = sa(X, r, n), M = n - O + r, T = ls(B ? M : O, r, n), R = c === "vertical", I = ry({
    min: r,
    max: n,
    step: h,
    isDisabled: d,
    value: O,
    isInteractive: K,
    isReversed: B,
    isVertical: R,
    eventSource: null,
    focusThumbOnChange: _,
    orientation: c
  }), S = Re(null), W = Re(null), $ = Re(null), q = mn(), H = u ?? q, [re, P] = [`slider-thumb-${H}`, `slider-track-${H}`], be = ce(
    (Z) => {
      var he, br;
      if (!S.current)
        return;
      const U = I.current;
      U.eventSource = "pointer";
      const ne = S.current.getBoundingClientRect(), { clientX: ge, clientY: Se } = (br = (he = Z.touches) == null ? void 0 : he[0]) != null ? br : Z, We = R ? ne.bottom - Se : ge - ne.left, vt = R ? ne.height : ne.width;
      let Ge = We / vt;
      B && (Ge = 1 - Ge);
      let et = Hg(Ge, U.min, U.max);
      return U.step && (et = parseFloat(
        Wc(et, U.min, U.step)
      )), et = sa(et, U.min, U.max), et;
    },
    [R, B, I]
  ), de = ce(
    (Z) => {
      const he = I.current;
      he.isInteractive && (Z = parseFloat(Wc(Z, he.min, me)), Z = sa(Z, he.min, he.max), ae(Z));
    },
    [me, ae, I]
  ), se = It(
    () => ({
      stepUp(Z = me) {
        const he = B ? O - Z : O + Z;
        de(he);
      },
      stepDown(Z = me) {
        const he = B ? O + Z : O - Z;
        de(he);
      },
      reset() {
        de(i || 0);
      },
      stepTo(Z) {
        de(Z);
      }
    }),
    [de, B, O, me, i]
  ), Ae = ce(
    (Z) => {
      const he = I.current, U = {
        ArrowRight: () => se.stepUp(),
        ArrowUp: () => se.stepUp(),
        ArrowLeft: () => se.stepDown(),
        ArrowDown: () => se.stepDown(),
        PageUp: () => se.stepUp(ye),
        PageDown: () => se.stepDown(ye),
        Home: () => de(he.min),
        End: () => de(he.max)
      }[Z.key];
      U && (Z.preventDefault(), Z.stopPropagation(), U(Z), he.eventSource = "keyboard");
    },
    [se, de, ye, I]
  ), ve = (t = V == null ? void 0 : V(O)) != null ? t : y, xe = IB(W), { getThumbStyle: ct, rootStyle: we, trackStyle: st, innerTrackStyle: Qe } = It(() => {
    const Z = I.current, he = xe ?? { width: 0, height: 0 };
    return Jb({
      isReversed: B,
      orientation: Z.orientation,
      thumbRects: [he],
      thumbPercents: [T]
    });
  }, [B, xe, T, I]), Oe = ce(() => {
    I.current.focusThumbOnChange && setTimeout(() => {
      var he;
      return (he = W.current) == null ? void 0 : he.focus();
    });
  }, [I]);
  mv(() => {
    const Z = I.current;
    Oe(), Z.eventSource === "keyboard" && (z == null || z(Z.value));
  }, [O, z]);
  function oe(Z) {
    const he = be(Z);
    he != null && he !== I.current.value && ae(he);
  }
  ny($, {
    onPanSessionStart(Z) {
      const he = I.current;
      he.isInteractive && (Q(!0), Oe(), oe(Z), D == null || D(he.value));
    },
    onPanSessionEnd() {
      const Z = I.current;
      Z.isInteractive && (Q(!1), z == null || z(Z.value));
    },
    onPan(Z) {
      I.current.isInteractive && oe(Z);
    }
  });
  const Ee = ce(
    (Z = {}, he = null) => ({
      ...Z,
      ...j,
      ref: mr(he, $),
      tabIndex: -1,
      "aria-disabled": mo(d),
      "data-focused": Kt(ee),
      style: {
        ...Z.style,
        ...we
      }
    }),
    [j, d, ee, we]
  ), _t = ce(
    (Z = {}, he = null) => ({
      ...Z,
      ref: mr(he, S),
      id: P,
      "data-disabled": Kt(d),
      style: {
        ...Z.style,
        ...st
      }
    }),
    [d, P, st]
  ), mt = ce(
    (Z = {}, he = null) => ({
      ...Z,
      ref: he,
      style: {
        ...Z.style,
        ...Qe
      }
    }),
    [Qe]
  ), at = ce(
    (Z = {}, he = null) => ({
      ...Z,
      ref: mr(he, W),
      role: "slider",
      tabIndex: K ? 0 : void 0,
      id: re,
      "data-active": Kt(te),
      "aria-valuetext": ve,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": O,
      "aria-orientation": c,
      "aria-disabled": mo(d),
      "aria-readonly": mo(f),
      "aria-label": x,
      "aria-labelledby": x ? void 0 : w,
      style: {
        ...Z.style,
        ...ct(0)
      },
      onKeyDown: vo(Z.onKeyDown, Ae),
      onFocus: vo(Z.onFocus, () => ie(!0)),
      onBlur: vo(Z.onBlur, () => ie(!1))
    }),
    [
      K,
      re,
      te,
      ve,
      r,
      n,
      O,
      c,
      d,
      f,
      x,
      w,
      ct,
      Ae
    ]
  ), Mr = ce(
    (Z, he = null) => {
      const br = !(Z.value < r || Z.value > n), U = O >= Z.value, ne = ls(Z.value, r, n), ge = {
        position: "absolute",
        pointerEvents: "none",
        ...GB({
          orientation: c,
          vertical: {
            bottom: B ? `${100 - ne}%` : `${ne}%`
          },
          horizontal: {
            left: B ? `${100 - ne}%` : `${ne}%`
          }
        })
      };
      return {
        ...Z,
        ref: he,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Kt(d),
        "data-invalid": Kt(!br),
        "data-highlighted": Kt(U),
        style: {
          ...Z.style,
          ...ge
        }
      };
    },
    [d, B, n, r, c, O]
  ), Fr = ce(
    (Z = {}, he = null) => ({
      ...Z,
      ref: he,
      type: "hidden",
      value: O,
      name: E
    }),
    [E, O]
  );
  return {
    state: { value: O, isFocused: ee, isDragging: te },
    actions: se,
    getRootProps: Ee,
    getTrackProps: _t,
    getInnerTrackProps: mt,
    getThumbProps: at,
    getMarkerProps: Mr,
    getInputProps: Fr
  };
}
function GB(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function qB(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [XB, Ns] = Qr({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [KB, Ls] = Qr({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), ZB = ot((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Eu("Slider", n), a = ks(n), { direction: i } = Po();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = YB(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ Y.jsx(XB, { value: c, children: /* @__PURE__ */ Y.jsx(KB, { value: o, children: /* @__PURE__ */ Y.jsxs(
    Le.div,
    {
      ...u,
      className: bn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ Y.jsx("input", { ...d })
      ]
    }
  ) }) });
});
ZB.displayName = "Slider";
var JB = ot((e, t) => {
  const { getThumbProps: r } = Ns(), n = Ls(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Le.div,
    {
      ...o,
      className: bn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
JB.displayName = "SliderThumb";
var QB = ot((e, t) => {
  const { getTrackProps: r } = Ns(), n = Ls(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Le.div,
    {
      ...o,
      className: bn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
QB.displayName = "SliderTrack";
var ez = ot(
  (e, t) => {
    const { getInnerTrackProps: r } = Ns(), n = Ls(), o = r(e, t);
    return /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...o,
        className: bn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
ez.displayName = "SliderFilledTrack";
var tz = ot((e, t) => {
  const { getMarkerProps: r } = Ns(), n = Ls(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Le.div,
    {
      ...o,
      className: bn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
tz.displayName = "SliderMark";
var rz = {
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
}, Jc = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, Ni = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function nz(e = {}) {
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
    modifiers: y,
    isDisabled: x,
    gutter: w,
    offset: E,
    direction: _,
    ...j
  } = e, { isOpen: D, onOpen: z, onClose: V } = pj({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: B, getPopperProps: X, getArrowInnerProps: ae, getArrowProps: te } = dj({
    enabled: D,
    placement: u,
    arrowPadding: g,
    modifiers: y,
    gutter: w,
    offset: E,
    direction: _
  }), Q = mn(), ie = `tooltip-${d ?? Q}`, K = Re(null), ye = Re(), me = ce(() => {
    ye.current && (clearTimeout(ye.current), ye.current = void 0);
  }, []), O = Re(), M = ce(() => {
    O.current && (clearTimeout(O.current), O.current = void 0);
  }, []), F = ce(() => {
    M(), V();
  }, [V, M]), T = oz(K, F), R = ce(() => {
    if (!x && !ye.current) {
      T();
      const P = Ni(K);
      ye.current = P.setTimeout(z, t);
    }
  }, [T, x, z, t]), I = ce(() => {
    me();
    const P = Ni(K);
    O.current = P.setTimeout(F, r);
  }, [r, F, me]), S = ce(() => {
    D && n && I();
  }, [n, I, D]), W = ce(() => {
    D && i && I();
  }, [i, I, D]), $ = ce(
    (P) => {
      D && P.key === "Escape" && I();
    },
    [D, I]
  );
  Vl(
    () => Jc(K),
    "keydown",
    s ? $ : void 0
  ), Vl(
    () => {
      const P = K.current;
      if (!P)
        return null;
      const be = _b(P);
      return be.localName === "body" ? Ni(K) : be;
    },
    "scroll",
    () => {
      D && a && F();
    },
    { passive: !0, capture: !0 }
  ), Xe(() => {
    x && (me(), D && V());
  }, [x, D, V, me]), Xe(() => () => {
    me(), M();
  }, [me, M]), Vl(() => K.current, "pointerleave", I);
  const q = ce(
    (P = {}, be = null) => ({
      ...P,
      ref: mr(K, be, B),
      onPointerEnter: _r(P.onPointerEnter, (se) => {
        se.pointerType !== "touch" && R();
      }),
      onClick: _r(P.onClick, S),
      onPointerDown: _r(P.onPointerDown, W),
      onFocus: _r(P.onFocus, R),
      onBlur: _r(P.onBlur, I),
      "aria-describedby": D ? ie : void 0
    }),
    [
      R,
      I,
      W,
      D,
      ie,
      S,
      B
    ]
  ), H = ce(
    (P = {}, be = null) => X(
      {
        ...P,
        style: {
          ...P.style,
          [xt.arrowSize.var]: m ? `${m}px` : void 0,
          [xt.arrowShadowColor.var]: h
        }
      },
      be
    ),
    [X, m, h]
  ), re = ce(
    (P = {}, be = null) => {
      const de = {
        ...P.style,
        position: "relative",
        transformOrigin: xt.transformOrigin.varRef
      };
      return {
        ref: be,
        ...j,
        ...P,
        id: ie,
        role: "tooltip",
        style: de
      };
    },
    [j, ie]
  );
  return {
    isOpen: D,
    show: R,
    hide: I,
    getTriggerProps: q,
    getTooltipProps: re,
    getTooltipPositionerProps: H,
    getArrowProps: te,
    getArrowInnerProps: ae
  };
}
var tc = "chakra-ui:close-tooltip";
function oz(e, t) {
  return Xe(() => {
    const r = Jc(e);
    return r.addEventListener(tc, t), () => r.removeEventListener(tc, t);
  }, [t, e]), () => {
    const r = Jc(e), n = Ni(e);
    r.dispatchEvent(new n.CustomEvent(tc));
  };
}
function az(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function iz(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var sz = Le(Nn.div), lz = ot((e, t) => {
  var r, n;
  const o = _u("Tooltip", e), a = ks(e), i = Po(), {
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
    motionProps: y,
    ...x
  } = a, w = (n = (r = m ?? h) != null ? r : f) != null ? n : g;
  if (w) {
    o.bg = w;
    const X = Nm(i, "colors", w);
    o[xt.arrowBg.var] = X;
  }
  const E = nz({ ...x, direction: i.direction }), _ = typeof s == "string" || c;
  let j;
  if (_)
    j = /* @__PURE__ */ Y.jsx(
      Le.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...E.getTriggerProps(),
        children: s
      }
    );
  else {
    const X = Uh.only(s);
    j = Hh(
      X,
      E.getTriggerProps(X.props, X.ref)
    );
  }
  const D = !!u, z = E.getTooltipProps({}, t), V = D ? az(z, ["role", "id"]) : z, B = iz(z, ["role", "id"]);
  return l ? /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    j,
    /* @__PURE__ */ Y.jsx(Ao, { children: E.isOpen && /* @__PURE__ */ Y.jsx(Ma, { ...p, children: /* @__PURE__ */ Y.jsx(
      Le.div,
      {
        ...E.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ Y.jsxs(
          sz,
          {
            variants: rz,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...y,
            ...V,
            __css: o,
            children: [
              l,
              D && /* @__PURE__ */ Y.jsx(Le.span, { srOnly: !0, ...B, children: u }),
              d && /* @__PURE__ */ Y.jsx(
                Le.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ Y.jsx(
                    Le.div,
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
  ] }) : /* @__PURE__ */ Y.jsx(Y.Fragment, { children: s });
});
lz.displayName = "Tooltip";
const Kz = kt(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ Y.jsx(hm, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  Xz as $,
  Fn as A,
  pz as B,
  hz as C,
  _5 as D,
  pB as E,
  hm as F,
  nB as G,
  dB as H,
  mB as I,
  hB as J,
  uB as K,
  sw as L,
  Hb as M,
  fm as N,
  ps as O,
  uj as P,
  ZB as Q,
  QB as R,
  Yy as S,
  ha as T,
  ez as U,
  JB as V,
  NB as W,
  WB as X,
  HB as Y,
  LB as Z,
  Wy as _,
  uS as a,
  jC as a$,
  cB as a0,
  UF as a1,
  fz as a2,
  mu as a3,
  bz as a4,
  xz as a5,
  wz as a6,
  xC as a7,
  yC as a8,
  fc as a9,
  or as aA,
  Qr as aB,
  Eu as aC,
  zg as aD,
  Ao as aE,
  Ma as aF,
  Mm as aG,
  Dz as aH,
  iv as aI,
  bR as aJ,
  mr as aK,
  Vg as aL,
  _r as aM,
  _z as aN,
  Vc as aO,
  Yr as aP,
  Ez as aQ,
  Uz as aR,
  Tz as aS,
  Pz as aT,
  sa as aU,
  C5 as aV,
  k5 as aW,
  Vl as aX,
  jz as aY,
  Iz as aZ,
  Po as a_,
  Dm as aa,
  lv as ab,
  hr as ac,
  Vz as ad,
  OR as ae,
  Bz as af,
  Nz as ag,
  RR as ah,
  tp as ai,
  zz as aj,
  Az as ak,
  Sz as al,
  CR as am,
  ER as an,
  Zk as ao,
  AC as ap,
  Qt as aq,
  Wz as ar,
  mv as as,
  Nn as at,
  Le as au,
  En as av,
  ot as aw,
  Bg as ax,
  _u as ay,
  ks as az,
  Xn as b,
  Lk as b$,
  LF as b0,
  Gz as b1,
  qz as b2,
  Yz as b3,
  pj as b4,
  dj as b5,
  xt as b6,
  $z as b7,
  pe as b8,
  kz as b9,
  Ns as bA,
  Ls as bB,
  WR as bC,
  El as bD,
  QR as bE,
  Lz as bF,
  Cz as bG,
  Ck as bH,
  ki as bI,
  Fe as bJ,
  kn as bK,
  nk as bL,
  Ek as bM,
  Oz as bN,
  vc as bO,
  ok as bP,
  Vk as bQ,
  Gi as bR,
  Nm as bS,
  Kk as bT,
  Im as bU,
  ak as bV,
  Hk as bW,
  Xt as bX,
  ik as bY,
  fk as bZ,
  Zo as b_,
  Ye as ba,
  L_ as bb,
  Rz as bc,
  q_ as bd,
  Mz as be,
  gw as bf,
  yw as bg,
  Ab as bh,
  HF as bi,
  Rb as bj,
  Aj as bk,
  Zb as bl,
  aB as bm,
  _j as bn,
  hn as bo,
  Lb as bp,
  Ln as bq,
  PC as br,
  UB as bs,
  zB as bt,
  tz as bu,
  XB as bv,
  jB as bw,
  zs as bx,
  Vs as by,
  YB as bz,
  dS as c,
  Vm as c0,
  Cs as c1,
  t_ as c2,
  pk as c3,
  bk as c4,
  qe as c5,
  bu as c6,
  hk as c7,
  _k as c8,
  kk as c9,
  LC as ca,
  mk as cb,
  vk as cc,
  gk as cd,
  n_ as ce,
  r_ as cf,
  Fz as cg,
  nz as ch,
  v5 as ci,
  b5 as cj,
  Wg as ck,
  x5 as cl,
  Ng as cm,
  Nc as cn,
  Lg as co,
  Lc as cp,
  An as d,
  fS as e,
  mz as f,
  pS as g,
  lc as h,
  Kh as i,
  Y as j,
  vz as k,
  bw as l,
  Bn as m,
  dz as n,
  lz as o,
  $b as p,
  da as q,
  nc as r,
  ac as s,
  gz as t,
  yz as u,
  IS as v,
  em as w,
  Ny as x,
  eu as y,
  Kz as z
};
