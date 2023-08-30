import * as U from "react";
import Mt, { createContext as Cr, forwardRef as At, createElement as ar, Fragment as xu, useContext as ft, useLayoutEffect as Ts, useEffect as Fe, useState as Ye, useRef as be, useMemo as gt, useReducer as x0, useCallback as q, useInsertionEffect as mm, useId as _r, cloneElement as Ua, Children as As, isValidElement as Su, PureComponent as S0 } from "react";
import { createPortal as vm } from "react-dom";
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Rs(e) {
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
var Sc = { exports: {} }, Lo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function w0() {
  if (Wd)
    return Lo;
  Wd = 1;
  var e = Mt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Lo.Fragment = r, Lo.jsx = i, Lo.jsxs = i, Lo;
}
var Wo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function C0() {
  return Ud || (Ud = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Mt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
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
            } catch (jt) {
              he = jt;
            }
            Reflect.construct(x, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (jt) {
              he = jt;
            }
            x.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            he = jt;
          }
          x();
        }
      } catch (jt) {
        if (jt && he && typeof jt.stack == "string") {
          for (var Ee = jt.stack.split(`
`), Ct = he.stack.split(`
`), ot = Ee.length - 1, ct = Ct.length - 1; ot >= 1 && ct >= 0 && Ee[ot] !== Ct[ct]; )
            ct--;
          for (; ot >= 1 && ct >= 0; ot--, ct--)
            if (Ee[ot] !== Ct[ct]) {
              if (ot !== 1 || ct !== 1)
                do
                  if (ot--, ct--, ct < 0 || Ee[ot] !== Ct[ct]) {
                    var Nt = `
` + Ee[ot].replace(" at new ", " at ");
                    return x.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", x.displayName)), typeof x == "function" && Y.set(x, Nt), Nt;
                  }
                while (ot >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        Z = !1, C.current = Oe, B(), Error.prepareStackTrace = De;
      }
      var Pr = x ? x.displayName || x.name : "", ci = Pr ? A(Pr) : "";
      return typeof x == "function" && Y.set(x, ci), ci;
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
    function ht(x) {
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
                var Ct = Error((he || "React class") + ": " + K + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ct.name = "Invariant Violation", Ct;
              }
              Ee = x[Pe](W, Pe, he, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              Ee = ot;
            }
            Ee && !(Ee instanceof Error) && (ht(De), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", K, Pe, typeof Ee), ht(null)), Ee instanceof Error && !(Ee.message in ye) && (ye[Ee.message] = !0, ht(De), y("Failed %s type: %s", K, Ee.message), ht(null));
          }
      }
    }
    var dt = Array.isArray;
    function rt(x) {
      return dt(x);
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
    function Ot(x) {
      if (se(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(x)), Ae(x);
    }
    var xt = b.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zr, Vr, Lr;
    Lr = {};
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
    function kr(x, W) {
      if (typeof x.ref == "string" && xt.current && W && xt.current.stateNode !== W) {
        var K = J(xt.current.type);
        Lr[K] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(xt.current.type), x.ref), Lr[K] = !0);
      }
    }
    function G(x, W) {
      {
        var K = function() {
          zr || (zr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
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
          Vr || (Vr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
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
        var Oe, Pe = {}, Ee = null, Ct = null;
        K !== void 0 && (Ot(K), Ee = "" + K), ve(W) && (Ot(W.key), Ee = "" + W.key), te(W) && (Ct = W.ref, kr(W, De));
        for (Oe in W)
          $e.call(W, Oe) && !lt.hasOwnProperty(Oe) && (Pe[Oe] = W[Oe]);
        if (x && x.defaultProps) {
          var ot = x.defaultProps;
          for (Oe in ot)
            Pe[Oe] === void 0 && (Pe[Oe] = ot[Oe]);
        }
        if (Ee || Ct) {
          var ct = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ee && G(Pe, ct), Ct && ie(Pe, ct);
        }
        return xe(x, Ee, Ct, De, he, xt.current, Pe);
      }
    }
    var He = b.ReactCurrentOwner, wt = b.ReactDebugCurrentFrame;
    function Ze(x) {
      if (x) {
        var W = x._owner, K = le(x.type, x._source, W ? W.type : null);
        wt.setExtraStackFrame(K);
      } else
        wt.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function Wr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Er() {
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
    function il(x) {
      {
        if (x !== void 0) {
          var W = x.fileName.replace(/^.*[\\\/]/, ""), K = x.lineNumber;
          return `

Check your code at ` + W + ":" + K + ".";
        }
        return "";
      }
    }
    var ai = {};
    function sl(x) {
      {
        var W = Er();
        if (!W) {
          var K = typeof x == "string" ? x : x.displayName || x.name;
          K && (W = `

Check the top-level render call using <` + K + ">.");
        }
        return W;
      }
    }
    function ii(x, W) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var K = sl(W);
        if (ai[K])
          return;
        ai[K] = !0;
        var he = "";
        x && x._owner && x._owner !== He.current && (he = " It was passed a child from " + J(x._owner.type) + "."), Ze(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, he), Ze(null);
      }
    }
    function si(x, W) {
      {
        if (typeof x != "object")
          return;
        if (rt(x))
          for (var K = 0; K < x.length; K++) {
            var he = x[K];
            Wr(he) && ii(he, W);
          }
        else if (Wr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var De = v(x);
          if (typeof De == "function" && De !== x.entries)
            for (var Oe = De.call(x), Pe; !(Pe = Oe.next()).done; )
              Wr(Pe.value) && ii(Pe.value, W);
        }
      }
    }
    function dr(x) {
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
    function ll(x) {
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
    function li(x, W, K, he, De, Oe) {
      {
        var Pe = j(x);
        if (!Pe) {
          var Ee = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ct = il(De);
          Ct ? Ee += Ct : Ee += Er();
          var ot;
          x === null ? ot = "null" : rt(x) ? ot = "array" : x !== void 0 && x.$$typeof === t ? (ot = "<" + (J(x.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, Ee);
        }
        var ct = Ce(x, W, K, De, Oe);
        if (ct == null)
          return ct;
        if (Pe) {
          var Nt = W.children;
          if (Nt !== void 0)
            if (he)
              if (rt(Nt)) {
                for (var Pr = 0; Pr < Nt.length; Pr++)
                  si(Nt[Pr], x);
                Object.freeze && Object.freeze(Nt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              si(Nt, x);
        }
        return x === n ? ll(ct) : dr(ct), ct;
      }
    }
    function cl(x, W, K) {
      return li(x, W, K, !0);
    }
    function ul(x, W, K) {
      return li(x, W, K, !1);
    }
    var dl = ul, sn = cl;
    Wo.Fragment = n, Wo.jsx = dl, Wo.jsxs = sn;
  }()), Wo;
}
process.env.NODE_ENV === "production" ? Sc.exports = w0() : Sc.exports = C0();
var L = Sc.exports, Sa = {};
function wa(e) {
  "@babel/helpers - typeof";
  return wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wa(e);
}
function _0(e, t) {
  if (wa(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wa(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k0(e) {
  var t = _0(e, "string");
  return wa(t) === "symbol" ? t : String(t);
}
function wu(e, t, r) {
  return t = k0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gm(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var E0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, bm = gm(
  function(e) {
    return E0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function wc(e, t) {
  return wc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, wc(e, t);
}
function P0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wc(e, t);
}
function T0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function A0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t;
}
var O0 = /* @__PURE__ */ function() {
  function e(r) {
    this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.before = null;
  }
  var t = e.prototype;
  return t.insert = function(n) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var o = A0(this), a;
      this.tags.length === 0 ? a = this.before : a = this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(o, a), this.tags.push(o);
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = T0(i);
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
function R0(e) {
  function t(V, T, O, B, C) {
    for (var H = 0, A = 0, Z = 0, Y = 0, ae, R, Se = 0, pe = 0, le, $e = le = ae = 0, ye = 0, we = 0, ht = 0, ke = 0, dt = O.length, rt = dt - 1, Me, se = "", Ae = "", Ot = "", xt = "", lt; ye < dt; ) {
      if (R = O.charCodeAt(ye), ye === rt && A + Y + Z + H !== 0 && (A !== 0 && (R = A === 47 ? 10 : 47), Y = Z = H = 0, dt++, rt++), A + Y + Z + H === 0) {
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
            for (se = se.trim(), ae = se.charCodeAt(0), le = 1, ke = ++ye; ye < dt; ) {
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
                if (le = t(T, we, le, R, C + 1), ke = le.length, 0 < ce && (we = r(oe, se, ht), lt = s(3, le, we, T, J, ne, ke, R, C, B), se = we.join(""), lt !== void 0 && (ke = (le = lt.trim()).length) === 0 && (R = 0, le = "")), 0 < ke)
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
                le = t(T, r(T, se, ht), le, B, C + 1);
            }
            Ot += le, le = ht = we = $e = ae = 0, se = "", R = O.charCodeAt(++ye);
            break;
          case 125:
          case 59:
            if (se = (0 < we ? se.replace(f, "") : se).trim(), 1 < (ke = se.length))
              switch ($e === 0 && (ae = se.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (ke = (se = se.replace(" ", ":")).length), 0 < ce && (lt = s(1, se, T, V, J, ne, Ae.length, B, C, B)) !== void 0 && (ke = (se = lt.trim()).length) === 0 && (se = "\0\0"), ae = se.charCodeAt(0), R = se.charCodeAt(1), ae) {
                case 0:
                  break;
                case 64:
                  if (R === 105 || R === 99) {
                    xt += se + O.charAt(ye);
                    break;
                  }
                default:
                  se.charCodeAt(ke - 1) !== 58 && (Ae += o(se, ae, R, se.charCodeAt(2)));
              }
            ht = we = $e = ae = 0, se = "", R = O.charCodeAt(++ye);
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
              Y + A + H === 0 && (we = ht = 1, Me = "\f" + Me);
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
      if (we = T, 0 < ce && (lt = s(2, Ae, we, V, J, ne, ke, B, C, B), lt !== void 0 && (Ae = lt).length === 0))
        return xt + Ae + Ot;
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
    return xt + Ae + Ot;
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
var Hd = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, Cc = "/*|*/", $0 = Cc + "}";
function D0(e) {
  e && Ca.current.insert(e + "}");
}
var Ca = {
  current: null
}, M0 = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return Ca.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + Cc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return Ca.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? Cc : "");
      }
    case -2:
      r.split($0).forEach(D0);
  }
}, I0 = function(t) {
  t === void 0 && (t = {});
  var r = t.key || "css", n;
  t.prefix !== void 0 && (n = {
    prefix: t.prefix
  });
  var o = new R0(n);
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
  if (o.use(t.stylisPlugins)(M0), l = function(p, m, h, v) {
    var b = m.name;
    if (Ca.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var y = m.map;
      Ca.current = {
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
    sheet: new O0({
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
}, F0 = !0;
function ym(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var xm = function(t, r, n) {
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
    F0 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do
      t.insert("." + o, a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function N0(e) {
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
var j0 = {
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
}, Yd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, B0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", z0 = /[A-Z]|^ms/g, Sm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cu = function(t) {
  return t.charCodeAt(1) === 45;
}, qd = function(t) {
  return t != null && typeof t != "boolean";
}, Sl = gm(function(e) {
  return Cu(e) ? e : e.replace(z0, "-$&").toLowerCase();
}), rs = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Sm, function(n, o, a) {
          return mr = {
            name: o,
            styles: a,
            next: mr
          }, o;
        });
  }
  return j0[t] !== 1 && !Cu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var V0 = /(attr|calc|counters?|url)\(/, L0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], W0 = rs, U0 = /^-ms-/, H0 = /-(.)/g, Gd = {};
  rs = function(t, r) {
    t === "content" && (typeof r != "string" || L0.indexOf(r) === -1 && !V0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = W0(t, r);
    return n !== "" && !Cu(t) && t.indexOf("-") !== -1 && Gd[t] === void 0 && (Gd[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(U0, "ms-").replace(H0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Xd = !0;
function _a(e, t, r, n) {
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
        return mr = {
          name: r.name,
          styles: r.styles,
          next: mr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            mr = {
              name: o.name,
              styles: o.styles,
              next: mr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return Y0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = mr, s = r(e);
        return mr = i, _a(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(Sm, function(d, f, p) {
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
  return process.env.NODE_ENV !== "production" && n && Xd && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Xd = !1), u !== void 0 && !n ? u : r;
}
function Y0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += _a(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : qd(i) && (n += Sl(a) + ":" + rs(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            qd(i[s]) && (n += Sl(a) + ":" + rs(a, i[s]) + ";");
        else {
          var l = _a(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Sl(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(B0), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Kd = /label:\s*([^\s;\n{]+)\s*;/g, wm;
process.env.NODE_ENV !== "production" && (wm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var mr, _c = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  mr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += _a(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Yd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += _a(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Yd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(wm, function(f) {
    return l = f, "";
  })), Kd.lastIndex = 0;
  for (var c = "", u; (u = Kd.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = N0(a) + c;
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
}, q0 = Object.prototype.hasOwnProperty, Cm = /* @__PURE__ */ Cr(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? I0() : null
), ka = /* @__PURE__ */ Cr({});
Cm.Provider;
var _m = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ ar(Cm.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ At(r);
}, Zd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Jd = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", G0 = function() {
  return null;
}, Qd = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Zd], s = [a], l = "";
  typeof r.className == "string" ? l = ym(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = _c(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[Jd];
    u && (c = _c([c, "label:" + u + ";"]));
  }
  xm(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    q0.call(r, f) && f !== "css" && f !== Zd && (process.env.NODE_ENV === "production" || f !== Jd) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ ar(i, d), m = /* @__PURE__ */ ar(G0, null);
  return /* @__PURE__ */ ar(xu, null, m, p);
}, X0 = /* @__PURE__ */ _m(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ ar(ka.Consumer, null, function(n) {
    return Qd(t, e, n, r);
  }) : Qd(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (X0.displayName = "EmotionCssPropInternal");
var K0 = bm, Z0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, ef = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? K0 : Z0;
};
function tf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tf(Object(r), !0).forEach(function(n) {
      wu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var rf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Q0 = function() {
  return null;
}, ex = function e(t, r) {
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
  var l = o || ef(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(rf), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(rf), d.push(u[p], u[0][p]);
    }
    var m = _m(function(h, v, b) {
      return /* @__PURE__ */ ar(ka.Consumer, null, function(y) {
        var S = c && h.as || s, k = "", w = [], M = h;
        if (h.theme == null) {
          M = {};
          for (var P in h)
            M[P] = h[P];
          M.theme = y;
        }
        typeof h.className == "string" ? k = ym(v.registered, w, h.className) : h.className != null && (k = h.className + " ");
        var I = _c(d.concat(w), v.registered, M);
        xm(v, I, typeof S == "string"), k += v.key + "-" + I.name, a !== void 0 && (k += " " + a);
        var z = c && o === void 0 ? ef(S) : l, j = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          z(X) && (j[X] = h[X]);
        j.className = k, j.ref = b || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ne = /* @__PURE__ */ ar(S, j), J = /* @__PURE__ */ ar(Q0, null);
        return /* @__PURE__ */ ar(xu, null, J, ne);
      });
    });
    return m.displayName = n !== void 0 ? n : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = s, m.__emotion_styles = d, m.__emotion_forwardProp = o, Object.defineProperty(m, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), m.withComponent = function(h, v) {
      return e(h, v !== void 0 ? J0({}, r || {}, {}, v) : r).apply(void 0, d);
    }, m;
  };
}, tx = [
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
], kc = ex.bind();
tx.forEach(function(e) {
  kc[e] = kc(e);
});
const rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kc
}, Symbol.toStringTag, { value: "Module" })), nx = /* @__PURE__ */ Rs(rx);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wl, nf;
function km() {
  if (nf)
    return wl;
  nf = 1;
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
  return wl = o() ? Object.assign : function(a, i) {
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
  }, wl;
}
var ox = km();
const xr = /* @__PURE__ */ Os(ox);
var of = function(t, r) {
  var n = xr({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || xr(n, (a = {}, a[o] = xr(t[o], r[o]), a));
  }
  return n;
}, ax = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, ix = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, Em = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, sx = function(t, r) {
  return Qr(r, t, t);
}, Qr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Ha = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = Qr(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || Qr(i.theme, "breakpoints", ix.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(Em)), s = of(s, lx(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = of(s, cx(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        xr(s, d(f, p, i));
      }
    return l && (s = ax(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, lx = function(t, r, n, o, a) {
  var i = {};
  return o.slice(0, t.length).forEach(function(s, l) {
    var c = t[l], u = r(s, n, a);
    if (!c)
      xr(i, u);
    else {
      var d;
      xr(i, (d = {}, d[c] = xr({}, i[c], u), d));
    }
  }), i;
}, cx = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      xr(i, u);
    else {
      var d, f = Em(l);
      xr(i, (d = {}, d[f] = xr({}, i[f], u), d));
    }
  }
  return i;
}, ns = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? sx : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, ur = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = ns({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = ns(a);
  });
  var n = Ha(r);
  return n;
}, _u = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || xr(t, i.config);
  });
  var a = Ha(t);
  return a;
}, ux = function(t) {
  return typeof t == "number" && !isNaN(t);
}, dx = function(t, r) {
  return Qr(r, t, !ux(t) || t > 1 ? t : t * 100 + "%");
}, fx = {
  width: {
    property: "width",
    scale: "sizes",
    transform: dx
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
}, Yt = ur(fx), Ec = {
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
Ec.bg = Ec.backgroundColor;
var ku = ur(Ec), px = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, hx = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: px.fontSizes
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
}, on = ur(hx), mx = {
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
}, It = ur(mx), Cl = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, vx = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: Cl.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: Cl.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: Cl.space
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
}, qt = ur(vx), Pt = {
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
Pt.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
Pt.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
Pt.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
Pt.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
Pt.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
Pt.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
Pt.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
Pt.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
Pt.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
Pt.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
Pt.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
Pt.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
Pt.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
Pt.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
Pt.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
Pt.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var Sr = ur(Pt), en = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
en.bgImage = en.backgroundImage;
en.bgSize = en.backgroundSize;
en.bgPosition = en.backgroundPosition;
en.bgRepeat = en.backgroundRepeat;
var $o = ur(en), hi = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, gx = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: hi.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: hi.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: hi.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: hi.space
  }
}, Un = ur(gx), Bt = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, af = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Pn = function(t, r) {
  if (!af(t))
    return Qr(r, t, t);
  var n = t < 0, o = Math.abs(t), a = Qr(r, o, o);
  return af(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Ne = {};
Ne.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: Pn,
    defaultScale: Bt.space
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
    defaultScale: Bt.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: Bt.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: Bt.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: Bt.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: Bt.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: Bt.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: Bt.space
  }
};
Ne.padding.p = Ne.padding.padding;
Ne.padding.pt = Ne.padding.paddingTop;
Ne.padding.pr = Ne.padding.paddingRight;
Ne.padding.pb = Ne.padding.paddingBottom;
Ne.padding.pl = Ne.padding.paddingLeft;
Ne.padding.px = Ne.padding.paddingX;
Ne.padding.py = Ne.padding.paddingY;
var Pm = ur(Ne.margin), Tm = ur(Ne.padding), Am = _u(Pm, Tm), Mi = ur({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function Ea() {
  return Ea = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ea.apply(this, arguments);
}
var hr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, bx = [40, 52, 64].map(function(e) {
  return e + "em";
}), yx = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, xx = {
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
}, sf = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, Sx = {
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
}, wx = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return hr(t, r, r);
  var n = Math.abs(r), o = hr(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, Cx = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return Ea({}, e, (r = {}, r[t] = wx, r));
}, {}), Om = function(t) {
  return function(r) {
    var n = {}, o = hr(r, "breakpoints", bx), a = [null].concat(o.map(function(u) {
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
}, Rm = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = Ea({}, yx, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = Om(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(hr(n, c))(n);
        o = Ea({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = hr(xx, s, s), f = hr(Sx, d), p = hr(n, f, hr(n, d, {})), m = hr(Cx, d, hr), h = m(p, c, c);
      if (sf[d])
        for (var v = sf[d], b = 0; b < v.length; b++)
          o[v[b]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const $m = Rm, _x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Rm,
  default: $m,
  get: hr,
  responsive: Om
}, Symbol.toStringTag, { value: "Module" }));
var $s = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return $m(Qr(m, p, null))(h.theme);
  } : c = function(p, m) {
    return Qr(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Ha(u);
  return d;
}, Dm = $s({
  key: "buttons"
}), Mm = $s({
  key: "textStyles",
  prop: "textStyle"
}), Im = $s({
  key: "colorStyles",
  prop: "colors"
}), kx = Yt.width, Ex = Yt.height, Px = Yt.minWidth, Tx = Yt.minHeight, Ax = Yt.maxWidth, Ox = Yt.maxHeight, Rx = Yt.size, $x = Yt.verticalAlign, Dx = Yt.display, Mx = Yt.overflow, Ix = Yt.overflowX, Fx = Yt.overflowY, Nx = ku.opacity, jx = on.fontSize, Bx = on.fontFamily, zx = on.fontWeight, Vx = on.lineHeight, Lx = on.textAlign, Wx = on.fontStyle, Ux = on.letterSpacing, Hx = It.alignItems, Yx = It.alignContent, qx = It.justifyItems, Gx = It.justifyContent, Xx = It.flexWrap, Kx = It.flexDirection, Zx = It.flex, Jx = It.flexGrow, Qx = It.flexShrink, eS = It.flexBasis, tS = It.justifySelf, rS = It.alignSelf, nS = It.order, oS = qt.gridGap, aS = qt.gridColumnGap, iS = qt.gridRowGap, sS = qt.gridColumn, lS = qt.gridRow, cS = qt.gridAutoFlow, uS = qt.gridAutoColumns, dS = qt.gridAutoRows, fS = qt.gridTemplateColumns, pS = qt.gridTemplateRows, hS = qt.gridTemplateAreas, mS = qt.gridArea, vS = Sr.borderWidth, gS = Sr.borderStyle, bS = Sr.borderColor, yS = Sr.borderTop, xS = Sr.borderRight, SS = Sr.borderBottom, wS = Sr.borderLeft, CS = Sr.borderRadius, _S = $o.backgroundImage, kS = $o.backgroundSize, ES = $o.backgroundPosition, PS = $o.backgroundRepeat, TS = Un.zIndex, AS = Un.top, OS = Un.right, RS = Un.bottom, $S = Un.left, DS = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = ns({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Ha(c);
  return u;
};
const MS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: Yx,
  alignItems: Hx,
  alignSelf: rS,
  background: $o,
  backgroundImage: _S,
  backgroundPosition: ES,
  backgroundRepeat: PS,
  backgroundSize: kS,
  border: Sr,
  borderBottom: SS,
  borderColor: bS,
  borderLeft: wS,
  borderRadius: CS,
  borderRight: xS,
  borderStyle: gS,
  borderTop: yS,
  borderWidth: vS,
  borders: Sr,
  bottom: RS,
  boxShadow: Mi,
  buttonStyle: Dm,
  color: ku,
  colorStyle: Im,
  compose: _u,
  createParser: Ha,
  createStyleFunction: ns,
  display: Dx,
  flex: Zx,
  flexBasis: eS,
  flexDirection: Kx,
  flexGrow: Jx,
  flexShrink: Qx,
  flexWrap: Xx,
  flexbox: It,
  fontFamily: Bx,
  fontSize: jx,
  fontStyle: Wx,
  fontWeight: zx,
  get: Qr,
  grid: qt,
  gridArea: mS,
  gridAutoColumns: uS,
  gridAutoFlow: cS,
  gridAutoRows: dS,
  gridColumn: sS,
  gridColumnGap: aS,
  gridGap: oS,
  gridRow: lS,
  gridRowGap: iS,
  gridTemplateAreas: hS,
  gridTemplateColumns: fS,
  gridTemplateRows: pS,
  height: Ex,
  justifyContent: Gx,
  justifyItems: qx,
  justifySelf: tS,
  layout: Yt,
  left: $S,
  letterSpacing: Ux,
  lineHeight: Vx,
  margin: Pm,
  maxHeight: Ox,
  maxWidth: Ax,
  minHeight: Tx,
  minWidth: Px,
  opacity: Nx,
  order: nS,
  overflow: Mx,
  overflowX: Ix,
  overflowY: Fx,
  padding: Tm,
  position: Un,
  right: OS,
  shadow: Mi,
  size: Rx,
  space: Am,
  style: DS,
  system: ur,
  textAlign: Lx,
  textShadow: Mi,
  textStyle: Mm,
  top: AS,
  typography: on,
  variant: $s,
  verticalAlign: $x,
  width: kx,
  zIndex: TS
}, Symbol.toStringTag, { value: "Module" })), IS = /* @__PURE__ */ Rs(MS), FS = /* @__PURE__ */ Rs(_x);
function NS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var jS = _u(Am, on, ku, Yt, It, Sr, $o, Un, qt, Mi, Dm, Mm, Im), Fm = jS.propNames, Nm = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return NS(function(n) {
    return bm(n) && !r.test(n);
  });
};
const BS = Nm(Fm), zS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: Nm,
  default: BS,
  props: Fm
}, Symbol.toStringTag, { value: "Module" })), VS = /* @__PURE__ */ Rs(zS);
Object.defineProperty(Sa, "__esModule", {
  value: !0
});
var jm = Sa.Flex = Hn = Sa.Box = void 0;
Eu(Mt);
var Bm = Eu(nx), Xn = IS, ia = WS(FS), LS = Eu(VS);
function zm() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return zm = function() {
    return e;
  }, e;
}
function WS(e) {
  if (e && e.__esModule)
    return e;
  var t = zm();
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
function Eu(e) {
  return e && e.__esModule ? e : { default: e };
}
var US = function(t) {
  return (0, ia.default)(t.sx)(t.theme);
}, HS = function(t) {
  return (0, ia.default)(t.__css)(t.theme);
}, YS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, ia.default)((0, ia.get)(r, a + "." + n, (0, ia.get)(r, n)))(r);
}, Vm = (0, Bm.default)("div", {
  shouldForwardProp: LS.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, HS, YS, US, function(e) {
  return e.css;
}, (0, Xn.compose)(Xn.space, Xn.layout, Xn.typography, Xn.color, Xn.flexbox)), Hn = Sa.Box = Vm, qS = (0, Bm.default)(Vm)({
  display: "flex"
});
jm = Sa.Flex = qS;
function gn() {
  return gn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gn.apply(this, arguments);
}
var cV = At(function(e, t) {
  return Mt.createElement(Hn, gn({
    ref: t,
    tx: "text"
  }, e));
});
At(function(e, t) {
  return Mt.createElement(Hn, gn({
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
var uV = At(function(e, t) {
  return Mt.createElement(Hn, gn({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), dV = At(function(e, t) {
  return Mt.createElement(Hn, gn({
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
At(function(e, t) {
  return Mt.createElement(Hn, gn({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var fV = At(function(e, t) {
  return Mt.createElement(Hn, gn({
    ref: t,
    variant: "card"
  }, e));
});
function at(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function br(e) {
  return function t(r) {
    return arguments.length === 0 || at(r) ? t : e.apply(this, arguments);
  };
}
function An(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return at(r) ? t : br(function(o) {
          return e(r, o);
        });
      default:
        return at(r) && at(n) ? t : at(r) ? br(function(o) {
          return e(o, n);
        }) : at(n) ? br(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function GS(e, t) {
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
function Lm(e) {
  return function t(r, n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return at(r) ? t : An(function(a, i) {
          return e(r, a, i);
        });
      case 2:
        return at(r) && at(n) ? t : at(r) ? An(function(a, i) {
          return e(a, n, i);
        }) : at(n) ? An(function(a, i) {
          return e(r, a, i);
        }) : br(function(a) {
          return e(r, n, a);
        });
      default:
        return at(r) && at(n) && at(o) ? t : at(r) && at(n) ? An(function(a, i) {
          return e(a, i, o);
        }) : at(r) && at(o) ? An(function(a, i) {
          return e(a, n, i);
        }) : at(n) && at(o) ? An(function(a, i) {
          return e(r, a, i);
        }) : at(r) ? br(function(a) {
          return e(a, n, o);
        }) : at(n) ? br(function(a) {
          return e(r, a, o);
        }) : at(o) ? br(function(a) {
          return e(r, n, a);
        }) : e(r, n, o);
    }
  };
}
const XS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function KS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var ZS = /* @__PURE__ */ br(function(t) {
  return XS(t) ? !0 : !t || typeof t != "object" || KS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), JS = /* @__PURE__ */ function() {
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
function QS(e) {
  return new JS(e);
}
var e1 = /* @__PURE__ */ An(function(t, r) {
  return GS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function t1(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function lf(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function cf(e, t, r, n) {
  return e["@@transducer/result"](r[n](e1(e["@@transducer/step"], e), t));
}
var uf = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function pV(e, t, r) {
  if (typeof e == "function" && (e = QS(e)), ZS(r))
    return t1(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return cf(e, t, r, "fantasy-land/reduce");
  if (r[uf] != null)
    return lf(e, t, r[uf]());
  if (typeof r.next == "function")
    return lf(e, t, r);
  if (typeof r.reduce == "function")
    return cf(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function Mn(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var df = Object.prototype.toString, r1 = /* @__PURE__ */ function() {
  return df.call(arguments) === "[object Arguments]" ? function(t) {
    return df.call(t) === "[object Arguments]";
  } : function(t) {
    return Mn("callee", t);
  };
}(), n1 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), ff = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], pf = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), o1 = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, hV = /* @__PURE__ */ br(typeof Object.keys == "function" && !pf ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = pf && r1(t);
  for (r in t)
    Mn(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (n1)
    for (n = ff.length - 1; n >= 0; )
      r = ff[n], Mn(r, t) && !o1(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), mV = /* @__PURE__ */ br(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function hf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var a1 = /* @__PURE__ */ Lm(function(t, r, n) {
  var o = {}, a;
  for (a in r)
    Mn(a, r) && (o[a] = Mn(a, n) ? t(a, r[a], n[a]) : r[a]);
  for (a in n)
    Mn(a, n) && !Mn(a, o) && (o[a] = n[a]);
  return o;
}), vV = /* @__PURE__ */ Lm(function e(t, r, n) {
  return a1(function(o, a, i) {
    return hf(a) && hf(i) ? e(t, a, i) : t(o, a, i);
  }, r, n);
});
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ln.apply(this, arguments);
}
var Pc = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf;
function i1() {
  if (mf)
    return Le;
  mf = 1;
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
var vf;
function s1() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && function() {
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
process.env.NODE_ENV === "production" ? Pc.exports = i1() : Pc.exports = s1();
var Pu = Pc.exports, Wm = Pu, l1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, c1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Um = {};
Um[Wm.ForwardRef] = l1;
Um[Wm.Memo] = c1;
function gf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function u1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gf(Object(r), !0).forEach(function(n) {
      wu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var d1 = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return u1({}, t, {}, r);
}, f1 = Hd(function(e) {
  return Hd(function(t) {
    return d1(e, t);
  });
}), gV = function(t) {
  return /* @__PURE__ */ ar(ka.Consumer, null, function(r) {
    return t.theme !== r && (r = f1(r)(t.theme)), /* @__PURE__ */ ar(ka.Provider, {
      value: r
    }, t.children);
  });
};
function p1() {
  return Mt.useContext(ka);
}
const h1 = {
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
}, m1 = {
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
}, v1 = {
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
}, g1 = {
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
}, b1 = {
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
}, y1 = {
  ghost: h1,
  alert: b1,
  inline: m1,
  primary: v1,
  secondary: g1
}, x1 = {
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
}, S1 = {
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
}, w1 = {
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
}, C1 = {
  "icon-primary": x1,
  "icon-ghost": S1,
  "icon-ghost-white": w1
}, _1 = {
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
}, k1 = {
  "footer-primary": _1
}, E1 = {
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
}, P1 = {
  "file-secondary": E1
}, T1 = {
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
}, A1 = {
  color: "black"
}, O1 = {
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
}, R1 = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, $1 = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, D1 = {
  card: R1,
  readOnly: $1
}, M1 = {
  color: "labels.red"
}, I1 = {
  color: "darkGray"
}, F1 = {
  error: M1,
  default: I1
}, N1 = {
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
}, j1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, B1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, z1 = {
  disabled: B1,
  primary: N1,
  white: j1
}, V1 = {
  default: "transparent",
  error: "labels.red"
}, L1 = {
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
}, W1 = {
  bg: "white",
  borderRightColor: "grayShade2",
  "> div": {
    color: "gray",
    path: {
      fill: "gray"
    }
  }
}, U1 = {
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
}, H1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, Y1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, q1 = {
  default: U1,
  active: H1,
  disabled: Y1
}, G1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, X1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, K1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, Z1 = {
  default: X1,
  active: K1,
  disabled: G1
}, J1 = {
  container: W1,
  item: q1,
  subItem: Z1,
  category: L1
}, Q1 = {
  bg: "white",
  boxShadow: "list"
}, ew = {
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
}, tw = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, rw = {
  primary: ew,
  active: tw
}, nw = {
  container: Q1,
  item: rw
}, ow = {
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
}, aw = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, iw = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, sw = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, lw = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, cw = {
  variant: "text.microlabeling",
  color: "gray"
}, uw = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, dw = {
  variant: "text.value",
  color: "primary"
}, fw = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, pw = {
  variant: "text.labeling",
  color: "gray"
}, hw = {
  color: "gray"
}, mw = {
  color: "primary"
}, vw = {
  color: "labels.orange"
}, bf = {
  title: aw,
  text: fw,
  subtitle: iw,
  labeling: sw,
  value: uw,
  valuePrimary: dw,
  labelingGray: pw,
  microlabeling: lw,
  microlabelingGray: cw,
  inputValidationneutral: hw,
  inputValidationsuccess: mw,
  inputValidationwarning: vw
}, gw = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, bw = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, yw = {
  drawerSection: bw,
  primary: gw
}, xw = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, Sw = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, ww = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, Cw = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, _w = {
  gray: ww,
  white: Cw
}, kw = {
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
}, Ew = {
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
}, Pw = {
  keyValue: _w,
  primary: kw,
  bordered: Ew,
  dot: xw,
  blink: Sw
}, Tw = {
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
}, Aw = {
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
}, Ow = {
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, Rw = {
  variant: "variants.select.primary",
  bg: "white"
}, $w = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, Dw = {
  disabled: $w,
  primary: Ow,
  white: Rw
}, Mw = {
  color: "labels.red"
}, Iw = {
  color: "darkGray"
}, Fw = {
  error: Mw,
  default: Iw
}, Nw = {
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
}, jw = {
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
}, Bw = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, zw = {
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
}, Vw = {
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
}, Lw = {
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
}, Ww = {
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
}, Uw = {
  valid: zw,
  error: Vw,
  warning: Lw,
  neutral: Ww
}, Hw = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, Yw = {
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
}, qw = {
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
}, Gw = {
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
}, Xw = {
  primary: Yw,
  white: qw,
  disabled: Gw
}, Kw = {
  secondary: {
    notification: {
      bg: "white",
      borderColor: "grayShade2"
    }
  }
}, Zw = {
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
}, Jw = {
  colors: Zw,
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
    ...D1,
    tooltip: O1,
    label: A1,
    list: nw,
    header: ow,
    checkbox: Tw,
    radio: Aw,
    badges: Pw,
    popup: yw,
    bar: Nw,
    perf: jw,
    code: Bw,
    select: Dw,
    callout: Uw,
    icon: Hw,
    ...bf
  },
  text: {
    inputInfo: F1,
    selectInfo: Fw,
    ...bf
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...y1,
    ...C1,
    ...k1,
    ...P1,
    toggleButton: T1
  },
  navigation: J1,
  inputs: z1,
  inputIntents: V1,
  pagination: Xw,
  notification: Kw
}, Qw = {
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
}, eC = {
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
}, bV = () => p1(), yV = {
  ...Jw,
  colors: Qw,
  shadows: eC
};
function tC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function rC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var nC = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(rC(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = tC(o);
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
}(), Tt = "-ms-", os = "-moz-", Be = "-webkit-", Tu = "comm", Au = "rule", Ou = "decl", oC = "@import", Hm = "@keyframes", aC = "@layer", iC = Math.abs, Ds = String.fromCharCode, sC = Object.assign;
function lC(e, t) {
  return kt(e, 0) ^ 45 ? (((t << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function Ym(e) {
  return e.trim();
}
function cC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, r) {
  return e.replace(t, r);
}
function Tc(e, t) {
  return e.indexOf(t);
}
function kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pa(e, t, r) {
  return e.slice(t, r);
}
function Rr(e) {
  return e.length;
}
function Ru(e) {
  return e.length;
}
function mi(e, t) {
  return t.push(e), e;
}
function uC(e, t) {
  return e.map(t).join("");
}
var Ms = 1, Co = 1, qm = 0, Ut = 0, vt = 0, Do = "";
function Is(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Ms, column: Co, length: i, return: "" };
}
function Uo(e, t) {
  return sC(Is("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function dC() {
  return vt;
}
function fC() {
  return vt = Ut > 0 ? kt(Do, --Ut) : 0, Co--, vt === 10 && (Co = 1, Ms--), vt;
}
function Xt() {
  return vt = Ut < qm ? kt(Do, Ut++) : 0, Co++, vt === 10 && (Co = 1, Ms++), vt;
}
function Dr() {
  return kt(Do, Ut);
}
function Ii() {
  return Ut;
}
function Ya(e, t) {
  return Pa(Do, e, t);
}
function Ta(e) {
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
function Gm(e) {
  return Ms = Co = 1, qm = Rr(Do = e), Ut = 0, [];
}
function Xm(e) {
  return Do = "", e;
}
function Fi(e) {
  return Ym(Ya(Ut - 1, Ac(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pC(e) {
  for (; (vt = Dr()) && vt < 33; )
    Xt();
  return Ta(e) > 2 || Ta(vt) > 3 ? "" : " ";
}
function hC(e, t) {
  for (; --t && Xt() && !(vt < 48 || vt > 102 || vt > 57 && vt < 65 || vt > 70 && vt < 97); )
    ;
  return Ya(e, Ii() + (t < 6 && Dr() == 32 && Xt() == 32));
}
function Ac(e) {
  for (; Xt(); )
    switch (vt) {
      case e:
        return Ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ac(vt);
        break;
      case 40:
        e === 41 && Ac(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Ut;
}
function mC(e, t) {
  for (; Xt() && e + vt !== 47 + 10; )
    if (e + vt === 42 + 42 && Dr() === 47)
      break;
  return "/*" + Ya(t, Ut - 1) + "*" + Ds(e === 47 ? e : Xt());
}
function vC(e) {
  for (; !Ta(Dr()); )
    Xt();
  return Ya(e, Ut);
}
function gC(e) {
  return Xm(Ni("", null, null, null, [""], e = Gm(e), 0, [0], e));
}
function Ni(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, v = 1, b = 1, y = 0, S = "", k = o, w = a, M = n, P = S; v; )
    switch (m = y, y = Xt()) {
      case 40:
        if (m != 108 && kt(P, d - 1) == 58) {
          Tc(P += ze(Fi(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Fi(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += pC(m);
        break;
      case 92:
        P += hC(Ii() - 1, 7);
        continue;
      case 47:
        switch (Dr()) {
          case 42:
          case 47:
            mi(bC(mC(Xt(), Ii()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * h:
        s[c++] = Rr(P) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            b == -1 && (P = ze(P, /\f/g, "")), p > 0 && Rr(P) - d && mi(p > 32 ? xf(P + ";", n, r, d - 1) : xf(ze(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (mi(M = yf(P, t, r, c, u, o, s, S, k = [], w = [], d), a), y === 123)
              if (u === 0)
                Ni(P, t, M, M, k, a, d, s, w);
              else
                switch (f === 99 && kt(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ni(e, M, M, n && mi(yf(e, M, M, 0, 0, o, s, S, o, k = [], d), w), o, w, d, s, n ? k : w);
                    break;
                  default:
                    Ni(P, M, M, M, [""], w, 0, s, w);
                }
        }
        c = u = p = 0, h = b = 1, S = P = "", d = i;
        break;
      case 58:
        d = 1 + Rr(P), p = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && fC() == 125)
            continue;
        }
        switch (P += Ds(y), y * h) {
          case 38:
            b = u > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[c++] = (Rr(P) - 1) * b, b = 1;
            break;
          case 64:
            Dr() === 45 && (P += Fi(Xt())), f = Dr(), u = d = Rr(S = P += vC(Ii())), y++;
            break;
          case 45:
            m === 45 && Rr(P) == 2 && (h = 0);
        }
    }
  return a;
}
function yf(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = Ru(f), m = 0, h = 0, v = 0; m < n; ++m)
    for (var b = 0, y = Pa(e, d + 1, d = iC(h = i[m])), S = e; b < p; ++b)
      (S = Ym(h > 0 ? f[b] + " " + y : ze(y, /&\f/g, f[b]))) && (l[v++] = S);
  return Is(e, t, r, o === 0 ? Au : s, l, c, u);
}
function bC(e, t, r) {
  return Is(e, t, r, Tu, Ds(dC()), Pa(e, 2, -2), 0);
}
function xf(e, t, r, n) {
  return Is(e, t, r, Ou, Pa(e, 0, n), Pa(e, n + 1, -1), n);
}
function uo(e, t) {
  for (var r = "", n = Ru(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function yC(e, t, r, n) {
  switch (e.type) {
    case aC:
      if (e.children.length)
        break;
    case oC:
    case Ou:
      return e.return = e.return || e.value;
    case Tu:
      return "";
    case Hm:
      return e.return = e.value + "{" + uo(e.children, n) + "}";
    case Au:
      e.value = e.props.join(",");
  }
  return Rr(r = uo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function xC(e) {
  var t = Ru(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function SC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Sf = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Km(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var wC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Dr(), o === 38 && a === 12 && (r[n] = 1), !Ta(a); )
    Xt();
  return Ya(t, Ut);
}, CC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ta(o)) {
      case 0:
        o === 38 && Dr() === 12 && (r[n] = 1), t[n] += wC(Ut - 1, r, n);
        break;
      case 2:
        t[n] += Fi(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Dr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ds(o);
    }
  while (o = Xt());
  return t;
}, _C = function(t, r) {
  return Xm(CC(Gm(t), r));
}, wf = /* @__PURE__ */ new WeakMap(), kC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !wf.get(n)) && !o) {
      wf.set(t, !0);
      for (var a = [], i = _C(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, EC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, PC = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", TC = function(t) {
  return t.type === "comm" && t.children.indexOf(PC) > -1;
}, AC = function(t) {
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
            if (TC(c))
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
}, Zm = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, OC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Zm(r[n]))
      return !0;
  return !1;
}, Cf = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, RC = function(t, r, n) {
  Zm(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Cf(t)) : OC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Cf(t)));
};
function Jm(e, t) {
  switch (lC(e, t)) {
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
      return Be + e + os + e + Tt + e + e;
    case 6828:
    case 4268:
      return Be + e + Tt + e + e;
    case 6165:
      return Be + e + Tt + "flex-" + e + e;
    case 5187:
      return Be + e + ze(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Tt + "flex-$1$2") + e;
    case 5443:
      return Be + e + Tt + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Tt + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Tt + ze(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Tt + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + ze(e, "-grow", "") + Be + e + Tt + ze(e, "grow", "positive") + e;
    case 4554:
      return Be + ze(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Tt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
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
      if (Rr(e) - 1 - t > 6)
        switch (kt(e, t + 1)) {
          case 109:
            if (kt(e, t + 4) !== 45)
              break;
          case 102:
            return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + os + (kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Tc(e, "stretch") ? Jm(ze(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (kt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (kt(e, Rr(e) - 3 - (~Tc(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Be) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (kt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Tt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (kt(e, t + 11)) {
        case 114:
          return Be + e + Tt + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Tt + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Tt + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Tt + e + e;
  }
  return e;
}
var $C = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ou:
        t.return = Jm(t.value, t.length);
        break;
      case Hm:
        return uo([Uo(t, {
          value: ze(t.value, "@", "@" + Be)
        })], o);
      case Au:
        if (t.length)
          return uC(t.props, function(a) {
            switch (cC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return uo([Uo(t, {
                  props: [ze(a, /:(read-\w+)/, ":" + os + "$1")]
                })], o);
              case "::placeholder":
                return uo([Uo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + Be + "input-$1")]
                }), Uo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + os + "$1")]
                }), Uo(t, {
                  props: [ze(a, /:(plac\w+)/, Tt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, DC = [$C], MC = function(t) {
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
  var o = t.stylisPlugins || DC;
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
  var l, c = [kC, EC];
  process.env.NODE_ENV !== "production" && c.push(AC({
    get compat() {
      return m.compat;
    }
  }), RC);
  {
    var u, d = [yC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== Tu && u.insert(h.value + "{}"));
    } : SC(function(h) {
      u.insert(h);
    })], f = xC(c.concat(o, d)), p = function(v) {
      return uo(gC(v), f);
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
    sheet: new nC({
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
}, IC = !0;
function $u(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Fs = function(t, r, n) {
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
  IC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Ns = function(t, r, n) {
  Fs(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function FC(e) {
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
var NC = {
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
}, _f = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, jC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", BC = /[A-Z]|^ms/g, Qm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Du = function(t) {
  return t.charCodeAt(1) === 45;
}, kf = function(t) {
  return t != null && typeof t != "boolean";
}, _l = /* @__PURE__ */ Km(function(e) {
  return Du(e) ? e : e.replace(BC, "-$&").toLowerCase();
}), as = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Qm, function(n, o, a) {
          return vr = {
            name: o,
            styles: a,
            next: vr
          }, o;
        });
  }
  return NC[t] !== 1 && !Du(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var zC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, VC = ["normal", "none", "initial", "inherit", "unset"], LC = as, WC = /^-ms-/, UC = /-(.)/g, Ef = {};
  as = function(t, r) {
    if (t === "content" && (typeof r != "string" || VC.indexOf(r) === -1 && !zC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = LC(t, r);
    return n !== "" && !Du(t) && t.indexOf("-") !== -1 && Ef[t] === void 0 && (Ef[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(WC, "ms-").replace(UC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var ev = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Aa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ev);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return vr = {
          name: r.name,
          styles: r.styles,
          next: vr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            vr = {
              name: n.name,
              styles: n.styles,
              next: vr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return HC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = vr, i = r(e);
        return vr = a, Aa(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Qm, function(u, d, f) {
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
function HC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Aa(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : kf(i) && (n += _l(a) + ":" + as(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ev);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            kf(i[s]) && (n += _l(a) + ":" + as(a, i[s]) + ";");
        else {
          var l = Aa(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += _l(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(jC), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Pf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tv;
process.env.NODE_ENV !== "production" && (tv = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var vr, _o = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  vr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Aa(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(_f), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Aa(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(_f), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(tv, function(f) {
    return l = f, "";
  })), Pf.lastIndex = 0;
  for (var c = "", u; (u = Pf.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = FC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: vr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: vr
  };
}, YC = function(t) {
  return t();
}, rv = U["useInsertionEffect"] ? U["useInsertionEffect"] : !1, Mu = rv || YC, Tf = rv || U.useLayoutEffect, Iu = {}.hasOwnProperty, Fu = /* @__PURE__ */ U.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ MC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Fu.displayName = "EmotionCacheContext");
Fu.Provider;
var js = function(t) {
  return /* @__PURE__ */ At(function(r, n) {
    var o = ft(Fu);
    return t(r, o, n);
  });
}, bn = /* @__PURE__ */ U.createContext({});
process.env.NODE_ENV !== "production" && (bn.displayName = "EmotionThemeContext");
var qC = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Ln({}, t, r);
}, GC = /* @__PURE__ */ Sf(function(e) {
  return Sf(function(t) {
    return qC(e, t);
  });
}), xV = function(t) {
  var r = U.useContext(bn);
  return t.theme !== r && (r = GC(r)(t.theme)), /* @__PURE__ */ U.createElement(bn.Provider, {
    value: r
  }, t.children);
}, Af = function(t) {
  var r = t.split(".");
  return r[r.length - 1];
}, XC = function(t) {
  var r = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(t);
  if (r || (r = /^([A-Za-z0-9$.]+)@/.exec(t), r))
    return Af(r[1]);
}, KC = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), ZC = function(t) {
  return t.replace(/\$/g, "-");
}, JC = function(t) {
  if (t)
    for (var r = t.split(`
`), n = 0; n < r.length; n++) {
      var o = XC(r[n]);
      if (o) {
        if (KC.has(o))
          break;
        if (/^[A-Z]/.test(o))
          return ZC(o);
      }
    }
}, Oc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Rc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", QC = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof r.css == "string" && // check if there is a css declaration
  r.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + r.css + "`");
  var n = {};
  for (var o in r)
    Iu.call(r, o) && (n[o] = r[o]);
  if (n[Oc] = t, process.env.NODE_ENV !== "production" && r.css && (typeof r.css != "object" || typeof r.css.name != "string" || r.css.name.indexOf("-") === -1)) {
    var a = JC(new Error().stack);
    a && (n[Rc] = a);
  }
  return n;
}, e_ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Fs(r, n, o), Mu(function() {
    return Ns(r, n, o);
  }), null;
}, nv = /* @__PURE__ */ js(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Oc], a = [n], i = "";
  typeof e.className == "string" ? i = $u(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = _o(a, void 0, U.useContext(bn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Rc];
    l && (s = _o([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    Iu.call(e, u) && u !== "css" && u !== Oc && (process.env.NODE_ENV === "production" || u !== Rc) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(e_, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ U.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (nv.displayName = "EmotionCssPropInternal");
var t_ = nv, r_ = {
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
}, SV = function(t, r) {
  var n = arguments;
  if (r == null || !Iu.call(r, "css"))
    return U.createElement.apply(void 0, n);
  var o = n.length, a = new Array(o);
  a[0] = t_, a[1] = QC(t, r);
  for (var i = 2; i < o; i++)
    a[i] = n[i];
  return U.createElement.apply(null, a);
}, Of = !1, n_ = /* @__PURE__ */ js(function(e, t) {
  process.env.NODE_ENV !== "production" && !Of && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Of = !0);
  var r = e.styles, n = _o([r], void 0, U.useContext(bn)), o = U.useRef();
  return Tf(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), Tf(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Ns(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (n_.displayName = "EmotionGlobal");
function o_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return _o(t);
}
var a_ = function() {
  var t = o_.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, i_ = function e(t) {
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
function s_(e, t, r) {
  var n = [], o = $u(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var l_ = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Mu(function() {
    for (var o = 0; o < n.length; o++)
      Ns(r, n[o], !1);
  }), null;
}, c_ = /* @__PURE__ */ js(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = _o(u, t.registered);
    return n.push(f), Fs(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return s_(t.registered, o, i_(u));
  }, i = {
    css: o,
    cx: a,
    theme: U.useContext(bn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(l_, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (c_.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Rf = !0, u_ = typeof jest < "u" || typeof vi < "u";
  if (Rf && !u_) {
    var $f = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Rf ? window : global
    ), Df = "__EMOTION_REACT_" + r_.version.split(".")[0] + "__";
    $f[Df] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), $f[Df] = !0;
  }
}
function d_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ft(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Cr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = ft(s);
    if (!u && r) {
      const d = new Error(
        a ?? d_(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [f_, p_] = Ft({
  strict: !1,
  name: "PortalManagerContext"
});
function h_(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ L.jsx(f_, { value: { zIndex: r }, children: t });
}
h_.displayName = "PortalManager";
var Oa = globalThis != null && globalThis.document ? Ts : Fe, [ov, m_] = Ft({
  strict: !1,
  name: "PortalContext"
}), Nu = "chakra-portal", v_ = ".chakra-portal", g_ = (e) => /* @__PURE__ */ L.jsx(
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
), b_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = Ye(null), a = be(null), [, i] = Ye({});
  Fe(() => i({}), []);
  const s = m_(), l = p_();
  Oa(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = Nu, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ L.jsx(g_, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? vm(
    /* @__PURE__ */ L.jsx(ov, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ L.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, y_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = gt(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Nu), l;
  }, [o]), [, s] = Ye({});
  return Oa(() => s({}), []), Oa(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? vm(
    /* @__PURE__ */ L.jsx(ov, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function qa(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ L.jsx(y_, { containerRef: r, ...n }) : /* @__PURE__ */ L.jsx(b_, { ...n });
}
qa.className = Nu;
qa.selector = v_;
qa.displayName = "Portal";
function an() {
  const e = ft(
    bn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var av = Cr({});
av.displayName = "ColorModeContext";
function ju() {
  const e = ft(av);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function wV(e, t) {
  const { colorMode: r } = ju();
  return r === "dark" ? t : e;
}
function iv() {
  const e = ju(), t = an();
  return { ...e, theme: t };
}
function x_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function S_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function CV(e, t, r) {
  const n = an();
  return w_(e, t, r)(n);
}
function w_(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return x_(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return S_(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var Xe = (...e) => e.filter(Boolean).join(" ");
function C_() {
  return process.env.NODE_ENV !== "production";
}
function Vt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var _V = (e) => {
  const { condition: t, message: r } = e;
  t && C_() && console.warn(r);
};
function hn(e, ...t) {
  return __(e) ? e(...t) : e;
}
var __ = (e) => typeof e == "function", ro = (e) => e ? "" : void 0, kl = (e) => e ? !0 : void 0;
function $t(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function k_(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var is = { exports: {} };
is.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", v = "[object Number]", b = "[object Null]", y = "[object Object]", S = "[object Proxy]", k = "[object RegExp]", w = "[object Set]", M = "[object String]", P = "[object Undefined]", I = "[object WeakMap]", z = "[object ArrayBuffer]", j = "[object DataView]", X = "[object Float32Array]", ne = "[object Float64Array]", J = "[object Int8Array]", Q = "[object Int16Array]", ee = "[object Int32Array]", oe = "[object Uint8Array]", D = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", de = "[object Uint32Array]", F = /[\\^$.*+?()[\]{}|]/g, N = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, T = {};
  T[X] = T[ne] = T[J] = T[Q] = T[ee] = T[oe] = T[D] = T[ce] = T[de] = !0, T[s] = T[l] = T[z] = T[u] = T[j] = T[d] = T[f] = T[p] = T[h] = T[v] = T[y] = T[k] = T[w] = T[M] = T[I] = !1;
  var O = typeof pi == "object" && pi && pi.Object === Object && pi, B = typeof self == "object" && self && self.Object === Object && self, C = O || B || Function("return this")(), H = t && !t.nodeType && t, A = H && !0 && e && !e.nodeType && e, Z = A && A.exports === H, Y = Z && O.process, ae = function() {
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
  var we = Array.prototype, ht = Function.prototype, ke = Object.prototype, dt = C["__core-js_shared__"], rt = ht.toString, Me = ke.hasOwnProperty, se = function() {
    var g = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), Ae = ke.toString, Ot = rt.call(Object), xt = RegExp(
    "^" + rt.call(Me).replace(F, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), lt = Z ? C.Buffer : void 0, zr = C.Symbol, Vr = C.Uint8Array, Lr = lt ? lt.allocUnsafe : void 0, te = ye(Object.getPrototypeOf, Object), ve = Object.create, kr = ke.propertyIsEnumerable, G = we.splice, ie = zr ? zr.toStringTag : void 0, xe = function() {
    try {
      var g = pl(Object, "defineProperty");
      return g({}, "", {}), g;
    } catch {
    }
  }(), Ce = lt ? lt.isBuffer : void 0, He = Math.max, wt = Date.now, Ze = pl(C, "Map"), nt = pl(Object, "create"), Wr = function() {
    function g() {
    }
    return function(_) {
      if (!En(_))
        return {};
      if (ve)
        return ve(_);
      g.prototype = _;
      var $ = new g();
      return g.prototype = void 0, $;
    };
  }();
  function Er(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function il() {
    this.__data__ = nt ? nt(null) : {}, this.size = 0;
  }
  function ai(g) {
    var _ = this.has(g) && delete this.__data__[g];
    return this.size -= _ ? 1 : 0, _;
  }
  function sl(g) {
    var _ = this.__data__;
    if (nt) {
      var $ = _[g];
      return $ === n ? void 0 : $;
    }
    return Me.call(_, g) ? _[g] : void 0;
  }
  function ii(g) {
    var _ = this.__data__;
    return nt ? _[g] !== void 0 : Me.call(_, g);
  }
  function si(g, _) {
    var $ = this.__data__;
    return this.size += this.has(g) ? 0 : 1, $[g] = nt && _ === void 0 ? n : _, this;
  }
  Er.prototype.clear = il, Er.prototype.delete = ai, Er.prototype.get = sl, Er.prototype.has = ii, Er.prototype.set = si;
  function dr(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function ll() {
    this.__data__ = [], this.size = 0;
  }
  function li(g) {
    var _ = this.__data__, $ = jt(_, g);
    if ($ < 0)
      return !1;
    var re = _.length - 1;
    return $ == re ? _.pop() : G.call(_, $, 1), --this.size, !0;
  }
  function cl(g) {
    var _ = this.__data__, $ = jt(_, g);
    return $ < 0 ? void 0 : _[$][1];
  }
  function ul(g) {
    return jt(this.__data__, g) > -1;
  }
  function dl(g, _) {
    var $ = this.__data__, re = jt($, g);
    return re < 0 ? (++this.size, $.push([g, _])) : $[re][1] = _, this;
  }
  dr.prototype.clear = ll, dr.prototype.delete = li, dr.prototype.get = cl, dr.prototype.has = ul, dr.prototype.set = dl;
  function sn(g) {
    var _ = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++_ < $; ) {
      var re = g[_];
      this.set(re[0], re[1]);
    }
  }
  function x() {
    this.size = 0, this.__data__ = {
      hash: new Er(),
      map: new (Ze || dr)(),
      string: new Er()
    };
  }
  function W(g) {
    var _ = di(this, g).delete(g);
    return this.size -= _ ? 1 : 0, _;
  }
  function K(g) {
    return di(this, g).get(g);
  }
  function he(g) {
    return di(this, g).has(g);
  }
  function De(g, _) {
    var $ = di(this, g), re = $.size;
    return $.set(g, _), this.size += $.size == re ? 0 : 1, this;
  }
  sn.prototype.clear = x, sn.prototype.delete = W, sn.prototype.get = K, sn.prototype.has = he, sn.prototype.set = De;
  function Oe(g) {
    var _ = this.__data__ = new dr(g);
    this.size = _.size;
  }
  function Pe() {
    this.__data__ = new dr(), this.size = 0;
  }
  function Ee(g) {
    var _ = this.__data__, $ = _.delete(g);
    return this.size = _.size, $;
  }
  function Ct(g) {
    return this.__data__.get(g);
  }
  function ot(g) {
    return this.__data__.has(g);
  }
  function ct(g, _) {
    var $ = this.__data__;
    if ($ instanceof dr) {
      var re = $.__data__;
      if (!Ze || re.length < r - 1)
        return re.push([g, _]), this.size = ++$.size, this;
      $ = this.__data__ = new sn(re);
    }
    return $.set(g, _), this.size = $.size, this;
  }
  Oe.prototype.clear = Pe, Oe.prototype.delete = Ee, Oe.prototype.get = Ct, Oe.prototype.has = ot, Oe.prototype.set = ct;
  function Nt(g, _) {
    var $ = vl(g), re = !$ && ml(g), Re = !$ && !re && Nd(g), qe = !$ && !re && !Re && Bd(g), Qe = $ || re || Re || qe, Te = Qe ? pe(g.length, String) : [], et = Te.length;
    for (var er in g)
      (_ || Me.call(g, er)) && !(Qe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (er == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Re && (er == "offset" || er == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      qe && (er == "buffer" || er == "byteLength" || er == "byteOffset") || // Skip index properties.
      Id(er, et))) && Te.push(er);
    return Te;
  }
  function Pr(g, _, $) {
    ($ !== void 0 && !fi(g[_], $) || $ === void 0 && !(_ in g)) && fl(g, _, $);
  }
  function ci(g, _, $) {
    var re = g[_];
    (!(Me.call(g, _) && fi(re, $)) || $ === void 0 && !(_ in g)) && fl(g, _, $);
  }
  function jt(g, _) {
    for (var $ = g.length; $--; )
      if (fi(g[$][0], _))
        return $;
    return -1;
  }
  function fl(g, _, $) {
    _ == "__proto__" && xe ? xe(g, _, {
      configurable: !0,
      enumerable: !0,
      value: $,
      writable: !0
    }) : g[_] = $;
  }
  var Wy = r0();
  function ui(g) {
    return g == null ? g === void 0 ? P : b : ie && ie in Object(g) ? n0(g) : c0(g);
  }
  function Dd(g) {
    return zo(g) && ui(g) == s;
  }
  function Uy(g) {
    if (!En(g) || s0(g))
      return !1;
    var _ = bl(g) ? xt : N;
    return _.test(p0(g));
  }
  function Hy(g) {
    return zo(g) && jd(g.length) && !!T[ui(g)];
  }
  function Yy(g) {
    if (!En(g))
      return l0(g);
    var _ = Fd(g), $ = [];
    for (var re in g)
      re == "constructor" && (_ || !Me.call(g, re)) || $.push(re);
    return $;
  }
  function Md(g, _, $, re, Re) {
    g !== _ && Wy(_, function(qe, Qe) {
      if (Re || (Re = new Oe()), En(qe))
        qy(g, _, Qe, $, Md, re, Re);
      else {
        var Te = re ? re(hl(g, Qe), qe, Qe + "", g, _, Re) : void 0;
        Te === void 0 && (Te = qe), Pr(g, Qe, Te);
      }
    }, zd);
  }
  function qy(g, _, $, re, Re, qe, Qe) {
    var Te = hl(g, $), et = hl(_, $), er = Qe.get(et);
    if (er) {
      Pr(g, $, er);
      return;
    }
    var Gt = qe ? qe(Te, et, $ + "", g, _, Qe) : void 0, Vo = Gt === void 0;
    if (Vo) {
      var yl = vl(et), xl = !yl && Nd(et), Ld = !yl && !xl && Bd(et);
      Gt = et, yl || xl || Ld ? vl(Te) ? Gt = Te : h0(Te) ? Gt = Qy(Te) : xl ? (Vo = !1, Gt = Ky(et, !0)) : Ld ? (Vo = !1, Gt = Jy(et, !0)) : Gt = [] : m0(et) || ml(et) ? (Gt = Te, ml(Te) ? Gt = v0(Te) : (!En(Te) || bl(Te)) && (Gt = o0(et))) : Vo = !1;
    }
    Vo && (Qe.set(et, Gt), Re(Gt, et, re, qe, Qe), Qe.delete(et)), Pr(g, $, Gt);
  }
  function Gy(g, _) {
    return d0(u0(g, _, Vd), g + "");
  }
  var Xy = xe ? function(g, _) {
    return xe(g, "toString", {
      configurable: !0,
      enumerable: !1,
      value: b0(_),
      writable: !0
    });
  } : Vd;
  function Ky(g, _) {
    if (_)
      return g.slice();
    var $ = g.length, re = Lr ? Lr($) : new g.constructor($);
    return g.copy(re), re;
  }
  function Zy(g) {
    var _ = new g.constructor(g.byteLength);
    return new Vr(_).set(new Vr(g)), _;
  }
  function Jy(g, _) {
    var $ = _ ? Zy(g.buffer) : g.buffer;
    return new g.constructor($, g.byteOffset, g.length);
  }
  function Qy(g, _) {
    var $ = -1, re = g.length;
    for (_ || (_ = Array(re)); ++$ < re; )
      _[$] = g[$];
    return _;
  }
  function e0(g, _, $, re) {
    var Re = !$;
    $ || ($ = {});
    for (var qe = -1, Qe = _.length; ++qe < Qe; ) {
      var Te = _[qe], et = re ? re($[Te], g[Te], Te, $, g) : void 0;
      et === void 0 && (et = g[Te]), Re ? fl($, Te, et) : ci($, Te, et);
    }
    return $;
  }
  function t0(g) {
    return Gy(function(_, $) {
      var re = -1, Re = $.length, qe = Re > 1 ? $[Re - 1] : void 0, Qe = Re > 2 ? $[2] : void 0;
      for (qe = g.length > 3 && typeof qe == "function" ? (Re--, qe) : void 0, Qe && a0($[0], $[1], Qe) && (qe = Re < 3 ? void 0 : qe, Re = 1), _ = Object(_); ++re < Re; ) {
        var Te = $[re];
        Te && g(_, Te, re, qe);
      }
      return _;
    });
  }
  function r0(g) {
    return function(_, $, re) {
      for (var Re = -1, qe = Object(_), Qe = re(_), Te = Qe.length; Te--; ) {
        var et = Qe[g ? Te : ++Re];
        if ($(qe[et], et, qe) === !1)
          break;
      }
      return _;
    };
  }
  function di(g, _) {
    var $ = g.__data__;
    return i0(_) ? $[typeof _ == "string" ? "string" : "hash"] : $.map;
  }
  function pl(g, _) {
    var $ = $e(g, _);
    return Uy($) ? $ : void 0;
  }
  function n0(g) {
    var _ = Me.call(g, ie), $ = g[ie];
    try {
      g[ie] = void 0;
      var re = !0;
    } catch {
    }
    var Re = Ae.call(g);
    return re && (_ ? g[ie] = $ : delete g[ie]), Re;
  }
  function o0(g) {
    return typeof g.constructor == "function" && !Fd(g) ? Wr(te(g)) : {};
  }
  function Id(g, _) {
    var $ = typeof g;
    return _ = _ ?? i, !!_ && ($ == "number" || $ != "symbol" && V.test(g)) && g > -1 && g % 1 == 0 && g < _;
  }
  function a0(g, _, $) {
    if (!En($))
      return !1;
    var re = typeof _;
    return (re == "number" ? gl($) && Id(_, $.length) : re == "string" && _ in $) ? fi($[_], g) : !1;
  }
  function i0(g) {
    var _ = typeof g;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? g !== "__proto__" : g === null;
  }
  function s0(g) {
    return !!se && se in g;
  }
  function Fd(g) {
    var _ = g && g.constructor, $ = typeof _ == "function" && _.prototype || ke;
    return g === $;
  }
  function l0(g) {
    var _ = [];
    if (g != null)
      for (var $ in Object(g))
        _.push($);
    return _;
  }
  function c0(g) {
    return Ae.call(g);
  }
  function u0(g, _, $) {
    return _ = He(_ === void 0 ? g.length - 1 : _, 0), function() {
      for (var re = arguments, Re = -1, qe = He(re.length - _, 0), Qe = Array(qe); ++Re < qe; )
        Qe[Re] = re[_ + Re];
      Re = -1;
      for (var Te = Array(_ + 1); ++Re < _; )
        Te[Re] = re[Re];
      return Te[_] = $(Qe), Se(g, this, Te);
    };
  }
  function hl(g, _) {
    if (!(_ === "constructor" && typeof g[_] == "function") && _ != "__proto__")
      return g[_];
  }
  var d0 = f0(Xy);
  function f0(g) {
    var _ = 0, $ = 0;
    return function() {
      var re = wt(), Re = a - (re - $);
      if ($ = re, Re > 0) {
        if (++_ >= o)
          return arguments[0];
      } else
        _ = 0;
      return g.apply(void 0, arguments);
    };
  }
  function p0(g) {
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
  function fi(g, _) {
    return g === _ || g !== g && _ !== _;
  }
  var ml = Dd(function() {
    return arguments;
  }()) ? Dd : function(g) {
    return zo(g) && Me.call(g, "callee") && !kr.call(g, "callee");
  }, vl = Array.isArray;
  function gl(g) {
    return g != null && jd(g.length) && !bl(g);
  }
  function h0(g) {
    return zo(g) && gl(g);
  }
  var Nd = Ce || y0;
  function bl(g) {
    if (!En(g))
      return !1;
    var _ = ui(g);
    return _ == p || _ == m || _ == c || _ == S;
  }
  function jd(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= i;
  }
  function En(g) {
    var _ = typeof g;
    return g != null && (_ == "object" || _ == "function");
  }
  function zo(g) {
    return g != null && typeof g == "object";
  }
  function m0(g) {
    if (!zo(g) || ui(g) != y)
      return !1;
    var _ = te(g);
    if (_ === null)
      return !0;
    var $ = Me.call(_, "constructor") && _.constructor;
    return typeof $ == "function" && $ instanceof $ && rt.call($) == Ot;
  }
  var Bd = R ? le(R) : Hy;
  function v0(g) {
    return e0(g, zd(g));
  }
  function zd(g) {
    return gl(g) ? Nt(g, !0) : Yy(g);
  }
  var g0 = t0(function(g, _, $, re) {
    Md(g, _, $, re);
  });
  function b0(g) {
    return function() {
      return g;
    };
  }
  function Vd(g) {
    return g;
  }
  function y0() {
    return !1;
  }
  e.exports = g0;
})(is, is.exports);
var E_ = is.exports;
const ir = /* @__PURE__ */ Os(E_);
var P_ = (e) => /!(important)?$/.test(e), Mf = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, T_ = (e, t) => (r) => {
  const n = String(t), o = P_(n), a = Mf(n), i = e ? `${e}.${a}` : a;
  let s = Vt(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Mf(s), o ? `${s} !important` : s;
};
function Bu(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = T_(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var gi = (...e) => (t) => e.reduce((r, n) => n(r), t);
function tr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Bu({
      scale: e,
      transform: t
    }), n;
  };
}
var A_ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function O_(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: A_(t),
    transform: r ? Bu({
      scale: r,
      compose: n
    }) : n
  };
}
var sv = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function R_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...sv
  ].join(" ");
}
function $_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...sv
  ].join(" ");
}
var D_ = {
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
}, M_ = {
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
function I_(e) {
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
var F_ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, $c = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, N_ = new Set(Object.values($c)), Dc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), j_ = (e) => e.trim();
function B_(e, t) {
  if (e == null || Dc.has(e))
    return e;
  if (!(Mc(e) || Dc.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(j_).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in $c ? $c[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (N_.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], v = Mc(h) ? h : h && h.split(" "), b = `colors.${m}`, y = b in t.__cssMap ? t.__cssMap[b].varRef : m;
    return v ? [
      y,
      ...Array.isArray(v) ? v : [v]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Mc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), z_ = (e, t) => B_(e, t ?? {});
function V_(e) {
  return /^var\(--.+\)$/.test(e);
}
var L_ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Tr = (e) => (t) => `${e}(${t})`, Ie = {
  filter(e) {
    return e !== "auto" ? e : D_;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : M_;
  },
  ring(e) {
    return I_(Ie.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? R_() : e === "auto-gpu" ? $_() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = L_(e);
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
    if (V_(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: z_,
  blur: Tr("blur"),
  opacity: Tr("opacity"),
  brightness: Tr("brightness"),
  contrast: Tr("contrast"),
  dropShadow: Tr("drop-shadow"),
  grayscale: Tr("grayscale"),
  hueRotate: Tr("hue-rotate"),
  invert: Tr("invert"),
  saturate: Tr("saturate"),
  sepia: Tr("sepia"),
  bgImage(e) {
    return e == null || Mc(e) || Dc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = F_[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, E = {
  borderWidths: tr("borderWidths"),
  borderStyles: tr("borderStyles"),
  colors: tr("colors"),
  borders: tr("borders"),
  gradients: tr("gradients", Ie.gradient),
  radii: tr("radii", Ie.px),
  space: tr("space", gi(Ie.vh, Ie.px)),
  spaceT: tr("space", gi(Ie.vh, Ie.px)),
  degreeT(e) {
    return { property: e, transform: Ie.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Bu({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: tr("sizes", gi(Ie.vh, Ie.px)),
  sizesT: tr("sizes", gi(Ie.vh, Ie.fraction)),
  shadows: tr("shadows"),
  logical: O_,
  blur: tr("blur", Ie.blur)
}, ji = {
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
Object.assign(ji, {
  bgImage: ji.backgroundImage,
  bgImg: ji.backgroundImage
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
var W_ = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Ic = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ic, {
  shadow: Ic.boxShadow
});
var U_ = {
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
}, ss = {
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
Object.assign(ss, {
  flexDir: ss.flexDirection
});
var lv = {
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
}, H_ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Ie.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, nr = {
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
Object.assign(nr, {
  w: nr.width,
  h: nr.height,
  minW: nr.minWidth,
  maxW: nr.maxWidth,
  minH: nr.minHeight,
  maxH: nr.maxHeight,
  overscroll: nr.overscrollBehavior,
  overscrollX: nr.overscrollBehaviorX,
  overscrollY: nr.overscrollBehaviorY
});
var Y_ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function q_(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var G_ = (e) => {
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
}, X_ = G_(q_), K_ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Z_ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, El = (e, t, r) => {
  const n = {}, o = X_(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, J_ = {
  srOnly: {
    transform(e) {
      return e === !0 ? K_ : e === "focusable" ? Z_ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => El(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => El(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => El(t, e, r)
  }
}, sa = {
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
Object.assign(sa, {
  insetStart: sa.insetInlineStart,
  insetEnd: sa.insetInlineEnd
});
var Q_ = {
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
var ek = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, tk = {
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
}, rk = {
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
}, nk = {
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
}, ok = {
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
function cv(e) {
  return Vt(e) && e.reference ? e.reference : String(e);
}
var Bs = (e, ...t) => t.map(cv).join(` ${e} `).replace(/calc/g, ""), If = (...e) => `calc(${Bs("+", ...e)})`, Ff = (...e) => `calc(${Bs("-", ...e)})`, Fc = (...e) => `calc(${Bs("*", ...e)})`, Nf = (...e) => `calc(${Bs("/", ...e)})`, jf = (e) => {
  const t = cv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Fc(t, -1);
}, $n = Object.assign(
  (e) => ({
    add: (...t) => $n(If(e, ...t)),
    subtract: (...t) => $n(Ff(e, ...t)),
    multiply: (...t) => $n(Fc(e, ...t)),
    divide: (...t) => $n(Nf(e, ...t)),
    negate: () => $n(jf(e)),
    toString: () => e.toString()
  }),
  {
    add: If,
    subtract: Ff,
    multiply: Fc,
    divide: Nf,
    negate: jf
  }
);
function ak(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ik(e) {
  const t = ak(e.toString());
  return lk(sk(t));
}
function sk(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function lk(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function ck(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function uk(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function dk(e, t = "") {
  return ik(`--${ck(e, t)}`);
}
function me(e, t, r) {
  const n = dk(e, r);
  return {
    variable: n,
    reference: uk(n, t)
  };
}
function fk(e, t) {
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
function pk(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function hk(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Nc(e) {
  if (e == null)
    return e;
  const { unitless: t } = hk(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var uv = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, zu = (e) => Object.fromEntries(Object.entries(e).sort(uv));
function Bf(e) {
  const t = zu(e);
  return Object.assign(Object.values(t), t);
}
function mk(e) {
  const t = Object.keys(zu(e));
  return new Set(t);
}
function zf(e) {
  var t;
  if (!e)
    return e;
  e = (t = Nc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Jo(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Nc(e)})`), t && r.push("and", `(max-width: ${Nc(t)})`), r.join(" ");
}
function vk(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Bf(e), n = Object.entries(e).sort(uv).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? zf(d) : void 0, {
      _minW: zf(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Jo(null, d),
      minWQuery: Jo(s),
      minMaxQuery: Jo(s, d)
    };
  }), o = mk(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: zu(e),
    asArray: Bf(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => Jo(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!Vt(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; pk(s) === null; )
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
var _t = {
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
}, ln = (e) => dv((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Ur = (e) => dv((t) => e(t, "~ &"), "[data-peer]", ".peer"), dv = (e, ...t) => t.map(e).join(", "), zs = {
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
  _groupHover: ln(_t.hover),
  _peerHover: Ur(_t.hover),
  _groupFocus: ln(_t.focus),
  _peerFocus: Ur(_t.focus),
  _groupFocusVisible: ln(_t.focusVisible),
  _peerFocusVisible: Ur(_t.focusVisible),
  _groupActive: ln(_t.active),
  _peerActive: Ur(_t.active),
  _groupDisabled: ln(_t.disabled),
  _peerDisabled: Ur(_t.disabled),
  _groupInvalid: ln(_t.invalid),
  _peerInvalid: Ur(_t.invalid),
  _groupChecked: ln(_t.checked),
  _peerChecked: Ur(_t.checked),
  _groupFocusWithin: ln(_t.focusWithin),
  _peerFocusWithin: Ur(_t.focusWithin),
  _peerPlaceholderShown: Ur(_t.placeholderShown),
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
}, fv = Object.keys(
  zs
);
function Vf(e, t) {
  return me(String(e).replace(/\./g, "-"), void 0, t);
}
function gk(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Vf(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, v = $n.negate(s), b = $n.negate(c);
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
      const { reference: v } = Vf(m, t == null ? void 0 : t.cssVarPrefix);
      return v;
    }, d = Vt(s) ? s : { default: s };
    r = ir(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, v;
          if (!m)
            return f;
          const b = u(`${m}`);
          if (p === "default")
            return f[l] = b, f;
          const y = (v = (h = zs) == null ? void 0 : h[p]) != null ? v : p;
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
function bk(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function yk(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function xk(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Lf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (xk(i) || Array.isArray(i)) {
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
var Sk = [
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
function wk(e) {
  return yk(e, Sk);
}
function Ck(e) {
  return e.semanticTokens;
}
function _k(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var kk = (e) => fv.includes(e) || e === "default";
function Ek({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Lf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Lf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(kk)
    }
  ), r;
}
function kV(e) {
  var t;
  const r = _k(e), n = wk(r), o = Ck(r), a = Ek({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = gk(a, { cssVarPrefix: i });
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
    __breakpoints: vk(r.breakpoints)
  }), r;
}
var Vu = ir(
  {},
  ji,
  je,
  W_,
  ss,
  nr,
  U_,
  Q_,
  H_,
  lv,
  J_,
  sa,
  Ic,
  Je,
  ok,
  nk,
  ek,
  tk,
  Y_,
  rk
), Pk = Object.assign({}, Je, nr, ss, lv, sa), EV = Object.keys(
  Pk
), Tk = [...Object.keys(Vu), ...fv], Ak = { ...Vu, ...zs }, Ok = (e) => e in Ak, Rk = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = hn(e[i], t);
    if (s == null)
      continue;
    if (s = Vt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function $k(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Dk(e) {
  return /^var\(--.+\)$/.test(e);
}
var Mk = (e, t) => e.startsWith("--") && typeof t == "string" && !Dk(t), Ik = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = $k(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function Fk(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = hn(a, n), d = Rk(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = hn(m, n);
      p in r && (p = r[p]), Mk(p, h) && (h = Ik(n, h));
      let v = t[p];
      if (v === !0 && (v = { property: p }), Vt(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = ir(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let b = (c = (l = v == null ? void 0 : v.transform) == null ? void 0 : l.call(v, h, n, u)) != null ? c : h;
      b = v != null && v.processResult ? o(b, !0) : b;
      const y = hn(v == null ? void 0 : v.property, n);
      if (!i && (v != null && v.static)) {
        const S = hn(v.static, n);
        f = ir({}, f, S);
      }
      if (y && Array.isArray(y)) {
        for (const S of y)
          f[S] = b;
        continue;
      }
      if (y) {
        y === "&" && Vt(b) ? f = ir({}, f, b) : f[y] = b;
        continue;
      }
      if (Vt(b)) {
        f = ir({}, f, b);
        continue;
      }
      f[p] = b;
    }
    return f;
  };
  return o;
}
var Nk = (e) => (t) => Fk({
  theme: t,
  pseudos: zs,
  configs: Vu
})(e);
function PV(e) {
  return e;
}
function TV(e) {
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
function jk(e, t) {
  if (Array.isArray(e))
    return e;
  if (Vt(e))
    return t(e);
  if (e != null)
    return [e];
}
function Bk(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function zk(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = jk(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], v = t.details[Bk(u, m)], b = Jo(h.minW, v == null ? void 0 : v._minW), y = hn((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (y) {
        if (p) {
          (l = n.parts) == null || l.forEach((S) => {
            ir(c, {
              [S]: f ? y[S] : { [b]: y[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? ir(c, y) : c[b] = y;
          continue;
        }
        c[b] = y;
      }
    }
    return c;
  };
}
function Vk(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = zk(a);
    return ir(
      {},
      hn((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function pv(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function jr(e) {
  return bk(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var Lk = [
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
function Wk(e) {
  return Vt(e) ? Lk.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var Uk = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Hk = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Yk = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, qk = {
  property: Uk,
  easing: Hk,
  duration: Yk
}, Gk = qk, Xk = {
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
}, Kk = Xk, Zk = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Jk = Zk, Qk = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, eE = Qk, tE = {
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
}, rE = tE, nE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, oE = nE, aE = {
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
}, iE = aE, sE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, lE = sE, cE = {
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
}, hv = cE, mv = {
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
}, uE = {
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
}, dE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, fE = {
  ...mv,
  ...uE,
  container: dE
}, vv = fE, gv = {
  breakpoints: eE,
  zIndices: Kk,
  radii: oE,
  blur: lE,
  colors: rE,
  ...hv,
  sizes: vv,
  shadows: iE,
  space: mv,
  borders: Jk,
  transition: Gk
}, { defineMultiStyleConfig: pE, definePartsStyle: Qo } = Ke([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Hr = me("stepper-indicator-size"), no = me("stepper-icon-size"), oo = me("stepper-title-font-size"), ea = me("stepper-description-font-size"), Ho = me("stepper-accent-color"), hE = Qo(({ colorScheme: e }) => ({
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
    [Ho.variable]: `colors.${e}.500`,
    _dark: {
      [Ho.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: oo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ea.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: oo.reference
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
    width: no.reference,
    height: no.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Hr.reference,
    height: Hr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Ho.reference
    },
    "&[data-status=complete]": {
      bg: Ho.reference,
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
      bg: Ho.reference
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
      maxHeight: `calc(100% - ${Hr.reference} - 8px)`,
      top: `calc(${Hr.reference} + 4px)`,
      insetStart: `calc(${Hr.reference} / 2 - 1px)`
    }
  }
})), mE = pE({
  baseStyle: hE,
  sizes: {
    xs: Qo({
      stepper: {
        [Hr.variable]: "sizes.4",
        [no.variable]: "sizes.3",
        [oo.variable]: "fontSizes.xs",
        [ea.variable]: "fontSizes.xs"
      }
    }),
    sm: Qo({
      stepper: {
        [Hr.variable]: "sizes.6",
        [no.variable]: "sizes.4",
        [oo.variable]: "fontSizes.sm",
        [ea.variable]: "fontSizes.xs"
      }
    }),
    md: Qo({
      stepper: {
        [Hr.variable]: "sizes.8",
        [no.variable]: "sizes.5",
        [oo.variable]: "fontSizes.md",
        [ea.variable]: "fontSizes.sm"
      }
    }),
    lg: Qo({
      stepper: {
        [Hr.variable]: "sizes.10",
        [no.variable]: "sizes.6",
        [oo.variable]: "fontSizes.lg",
        [ea.variable]: "fontSizes.md"
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
var vE = Ue("accordion").parts("root", "container", "button", "panel").extend("icon"), gE = Ue("alert").parts("title", "description", "container").extend("icon", "spinner"), bE = Ue("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), yE = Ue("breadcrumb").parts("link", "item", "container").extend("separator");
Ue("button").parts();
var xE = Ue("checkbox").parts("control", "icon", "container").extend("label");
Ue("progress").parts("track", "filledTrack").extend("label");
var SE = Ue("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), wE = Ue("editable").parts(
  "preview",
  "input",
  "textarea"
), CE = Ue("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), _E = Ue("formError").parts("text", "icon"), kE = Ue("input").parts("addon", "field", "element"), EE = Ue("list").parts("container", "item", "icon"), PE = Ue("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), TE = Ue("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), AE = Ue("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Ue("pininput").parts("field");
var OE = Ue("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), RE = Ue("progress").parts(
  "label",
  "filledTrack",
  "track"
), $E = Ue("radio").parts(
  "container",
  "control",
  "label"
), DE = Ue("select").parts("field", "icon"), ME = Ue("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), IE = Ue("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), FE = Ue("switch").parts(
  "container",
  "track",
  "thumb"
), NE = Ue("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), jE = Ue("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), BE = Ue("tag").parts(
  "container",
  "label",
  "closeButton"
), zE = Ue("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function In(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class VE extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ta = VE;
function Lu(e) {
  if (typeof e != "string")
    throw new ta(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = XE.test(e) ? UE(e) : e;
  const r = HE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(Ra(s, 2), 16)), parseInt(Ra(i[3] || "f", 2), 16) / 255];
  }
  const n = YE.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = qE.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = GE.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (In(0, 100, s) !== s)
      throw new ta(e);
    if (In(0, 100, l) !== l)
      throw new ta(e);
    return [...KE(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new ta(e);
}
function LE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Wf = (e) => parseInt(e.replace(/_/g, ""), 36), WE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Wf(t.substring(0, 3)), n = Wf(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function UE(e) {
  const t = e.toLowerCase().trim(), r = WE[LE(t)];
  if (!r)
    throw new ta(e);
  return `#${r}`;
}
const Ra = (e, t) => Array.from(Array(t)).map(() => e).join(""), HE = new RegExp(`^#${Ra("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), YE = new RegExp(`^#${Ra("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), qE = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ra(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), GE = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, XE = /^[a-z]+$/i, Uf = (e) => Math.round(e * 255), KE = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Uf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Uf);
};
function ZE(e, t, r, n) {
  return `rgba(${In(0, 255, e).toFixed()}, ${In(0, 255, t).toFixed()}, ${In(0, 255, r).toFixed()}, ${parseFloat(In(0, 1, n).toFixed(3))})`;
}
function JE(e, t) {
  const [r, n, o, a] = Lu(e);
  return ZE(r, n, o, a - t);
}
function QE(e) {
  const [t, r, n, o] = Lu(e);
  let a = (i) => {
    const s = In(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function eP(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var tP = (e) => Object.keys(e).length === 0, ls = (e, t, r) => {
  const n = eP(e, `colors.${t}`, t);
  try {
    return QE(n), n;
  } catch {
    return r ?? "#000000";
  }
}, yr = (e, t, r) => {
  var n;
  return (n = pv(e, "colors", t)) != null ? n : r;
}, rP = (e) => {
  const [t, r, n] = Lu(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, nP = (e) => (t) => {
  const r = ls(t, e);
  return rP(r) < 128 ? "dark" : "light";
}, oP = (e) => (t) => nP(e)(t) === "dark", ko = (e, t) => (r) => {
  const n = ls(r, e);
  return JE(n, 1 - t);
};
function Hf(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var aP = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function iP(e) {
  const t = aP();
  return !e || tP(e) ? t : e.string && e.colors ? lP(e.string, e.colors) : e.string && !e.colors ? sP(e.string) : e.colors && !e.string ? cP(e.colors) : t;
}
function sP(e) {
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
function lP(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function cP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ue(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Wu(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function bv(e) {
  return Vt(e) && e.reference ? e.reference : String(e);
}
var Vs = (e, ...t) => t.map(bv).join(` ${e} `).replace(/calc/g, ""), Yf = (...e) => `calc(${Vs("+", ...e)})`, qf = (...e) => `calc(${Vs("-", ...e)})`, jc = (...e) => `calc(${Vs("*", ...e)})`, Gf = (...e) => `calc(${Vs("/", ...e)})`, Xf = (e) => {
  const t = bv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : jc(t, -1);
}, Yr = Object.assign(
  (e) => ({
    add: (...t) => Yr(Yf(e, ...t)),
    subtract: (...t) => Yr(qf(e, ...t)),
    multiply: (...t) => Yr(jc(e, ...t)),
    divide: (...t) => Yr(Gf(e, ...t)),
    negate: () => Yr(Xf(e)),
    toString: () => e.toString()
  }),
  {
    add: Yf,
    subtract: qf,
    multiply: jc,
    divide: Gf,
    negate: Xf
  }
);
function uP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function dP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function yv(e) {
  const t = dP(e.toString());
  return t.includes("\\.") ? e : uP(e) ? t.replace(".", "\\.") : e;
}
function fP(e, t = "") {
  return [t, yv(e)].filter(Boolean).join("-");
}
function pP(e, t) {
  return `var(${yv(e)}${t ? `, ${t}` : ""})`;
}
function hP(e, t = "") {
  return `--${fP(e, t)}`;
}
function yt(e, t) {
  const r = hP(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: pP(r, mP(t == null ? void 0 : t.fallback))
  };
}
function mP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: vP, definePartsStyle: Bi } = Ke(FE.keys), la = yt("switch-track-width"), Nn = yt("switch-track-height"), Pl = yt("switch-track-diff"), gP = Yr.subtract(la, Nn), Bc = yt("switch-thumb-x"), Yo = yt("switch-bg"), bP = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [la.reference],
    height: [Nn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Yo.variable]: "colors.gray.300",
    _dark: {
      [Yo.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Yo.variable]: `colors.${t}.500`,
      _dark: {
        [Yo.variable]: `colors.${t}.200`
      }
    },
    bg: Yo.reference
  };
}, yP = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Nn.reference],
  height: [Nn.reference],
  _checked: {
    transform: `translateX(${Bc.reference})`
  }
}, xP = Bi((e) => ({
  container: {
    [Pl.variable]: gP,
    [Bc.variable]: Pl.reference,
    _rtl: {
      [Bc.variable]: Yr(Pl).negate().toString()
    }
  },
  track: bP(e),
  thumb: yP
})), SP = {
  sm: Bi({
    container: {
      [la.variable]: "1.375rem",
      [Nn.variable]: "sizes.3"
    }
  }),
  md: Bi({
    container: {
      [la.variable]: "1.875rem",
      [Nn.variable]: "sizes.4"
    }
  }),
  lg: Bi({
    container: {
      [la.variable]: "2.875rem",
      [Nn.variable]: "sizes.6"
    }
  })
}, wP = vP({
  baseStyle: xP,
  sizes: SP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: CP, definePartsStyle: fo } = Ke(NE.keys), _P = fo({
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
}), cs = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, kP = fo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...cs
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...cs
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
}), EP = fo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...cs
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...cs
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
}), PP = {
  simple: kP,
  striped: EP,
  unstyled: {}
}, TP = {
  sm: fo({
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
  md: fo({
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
  lg: fo({
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
}, AP = CP({
  baseStyle: _P,
  variants: PP,
  sizes: TP,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), zt = me("tabs-color"), gr = me("tabs-bg"), bi = me("tabs-border-color"), { defineMultiStyleConfig: OP, definePartsStyle: Mr } = Ke(jE.keys), RP = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, $P = (e) => {
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
}, DP = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, MP = {
  p: 4
}, IP = Mr((e) => ({
  root: RP(e),
  tab: $P(e),
  tablist: DP(e),
  tabpanel: MP
})), FP = {
  sm: Mr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Mr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Mr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, NP = Mr((e) => {
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
        [zt.variable]: `colors.${t}.600`,
        _dark: {
          [zt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [gr.variable]: "colors.gray.200",
        _dark: {
          [gr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: zt.reference,
      bg: gr.reference
    }
  };
}), jP = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [bi.variable]: "transparent",
      _selected: {
        [zt.variable]: `colors.${t}.600`,
        [bi.variable]: "colors.white",
        _dark: {
          [zt.variable]: `colors.${t}.300`,
          [bi.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: bi.reference
      },
      color: zt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), BP = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [gr.variable]: "colors.gray.50",
      _dark: {
        [gr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [gr.variable]: "colors.white",
        [zt.variable]: `colors.${t}.600`,
        _dark: {
          [gr.variable]: "colors.gray.800",
          [zt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: zt.reference,
      bg: gr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), zP = Mr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ls(r, `${t}.700`),
        bg: ls(r, `${t}.100`)
      }
    }
  };
}), VP = Mr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [zt.variable]: "colors.gray.600",
      _dark: {
        [zt.variable]: "inherit"
      },
      _selected: {
        [zt.variable]: "colors.white",
        [gr.variable]: `colors.${t}.600`,
        _dark: {
          [zt.variable]: "colors.gray.800",
          [gr.variable]: `colors.${t}.300`
        }
      },
      color: zt.reference,
      bg: gr.reference
    }
  };
}), LP = Mr({}), WP = {
  line: NP,
  enclosed: jP,
  "enclosed-colored": BP,
  "soft-rounded": zP,
  "solid-rounded": VP,
  unstyled: LP
}, UP = OP({
  baseStyle: IP,
  sizes: FP,
  variants: WP,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), pt = fk("badge", ["bg", "color", "shadow"]), HP = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: pt.bg.reference,
  color: pt.color.reference,
  boxShadow: pt.shadow.reference
}, YP = (e) => {
  const { colorScheme: t, theme: r } = e, n = ko(`${t}.500`, 0.6)(r);
  return {
    [pt.bg.variable]: `colors.${t}.500`,
    [pt.color.variable]: "colors.white",
    _dark: {
      [pt.bg.variable]: n,
      [pt.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, qP = (e) => {
  const { colorScheme: t, theme: r } = e, n = ko(`${t}.200`, 0.16)(r);
  return {
    [pt.bg.variable]: `colors.${t}.100`,
    [pt.color.variable]: `colors.${t}.800`,
    _dark: {
      [pt.bg.variable]: n,
      [pt.color.variable]: `colors.${t}.200`
    }
  };
}, GP = (e) => {
  const { colorScheme: t, theme: r } = e, n = ko(`${t}.200`, 0.8)(r);
  return {
    [pt.color.variable]: `colors.${t}.500`,
    _dark: {
      [pt.color.variable]: n
    },
    [pt.shadow.variable]: `inset 0 0 0px 1px ${pt.color.reference}`
  };
}, XP = {
  solid: YP,
  subtle: qP,
  outline: GP
}, ca = {
  baseStyle: HP,
  variants: XP,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: KP, definePartsStyle: jn } = Ke(BE.keys), Kf = me("tag-bg"), Zf = me("tag-color"), Tl = me("tag-shadow"), zi = me("tag-min-height"), Vi = me("tag-min-width"), Li = me("tag-font-size"), Wi = me("tag-padding-inline"), ZP = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Zf.variable]: pt.color.reference,
  [Kf.variable]: pt.bg.reference,
  [Tl.variable]: pt.shadow.reference,
  color: Zf.reference,
  bg: Kf.reference,
  boxShadow: Tl.reference,
  borderRadius: "md",
  minH: zi.reference,
  minW: Vi.reference,
  fontSize: Li.reference,
  px: Wi.reference,
  _focusVisible: {
    [Tl.variable]: "shadows.outline"
  }
}, JP = {
  lineHeight: 1.2,
  overflow: "visible"
}, QP = {
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
}, eT = jn({
  container: ZP,
  label: JP,
  closeButton: QP
}), tT = {
  sm: jn({
    container: {
      [zi.variable]: "sizes.5",
      [Vi.variable]: "sizes.5",
      [Li.variable]: "fontSizes.xs",
      [Wi.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: jn({
    container: {
      [zi.variable]: "sizes.6",
      [Vi.variable]: "sizes.6",
      [Li.variable]: "fontSizes.sm",
      [Wi.variable]: "space.2"
    }
  }),
  lg: jn({
    container: {
      [zi.variable]: "sizes.8",
      [Vi.variable]: "sizes.8",
      [Li.variable]: "fontSizes.md",
      [Wi.variable]: "space.3"
    }
  })
}, rT = {
  subtle: jn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: jn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: jn((e) => {
    var t;
    return {
      container: (t = ca.variants) == null ? void 0 : t.outline(e)
    };
  })
}, nT = KP({
  variants: rT,
  baseStyle: eT,
  sizes: tT,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: qr, defineMultiStyleConfig: oT } = Ke(kE.keys), aT = qr({
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
}), cn = {
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
}, iT = {
  lg: qr({
    field: cn.lg,
    addon: cn.lg
  }),
  md: qr({
    field: cn.md,
    addon: cn.md
  }),
  sm: qr({
    field: cn.sm,
    addon: cn.sm
  }),
  xs: qr({
    field: cn.xs,
    addon: cn.xs
  })
};
function Uu(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || ue("blue.500", "blue.300")(e),
    errorBorderColor: r || ue("red.500", "red.300")(e)
  };
}
var sT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Uu(e);
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
        borderColor: yr(t, n),
        boxShadow: `0 0 0 1px ${yr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: yr(t, r),
        boxShadow: `0 0 0 1px ${yr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: ue("inherit", "whiteAlpha.50")(e),
      bg: ue("gray.100", "whiteAlpha.300")(e)
    }
  };
}), lT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Uu(e);
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
        borderColor: yr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: yr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ue("gray.100", "whiteAlpha.50")(e)
    }
  };
}), cT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Uu(e);
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
        borderColor: yr(t, n),
        boxShadow: `0px 1px 0px 0px ${yr(t, n)}`
      },
      _focusVisible: {
        borderColor: yr(t, r),
        boxShadow: `0px 1px 0px 0px ${yr(t, r)}`
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
}), uT = qr({
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
}), dT = {
  outline: sT,
  filled: lT,
  flushed: cT,
  unstyled: uT
}, Ve = oT({
  baseStyle: aT,
  sizes: iT,
  variants: dT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Jf, fT = {
  ...(Jf = Ve.baseStyle) == null ? void 0 : Jf.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Qf, ep, pT = {
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
  unstyled: (ep = (Qf = Ve.variants) == null ? void 0 : Qf.unstyled.field) != null ? ep : {}
}, tp, rp, np, op, ap, ip, sp, lp, hT = {
  xs: (rp = (tp = Ve.sizes) == null ? void 0 : tp.xs.field) != null ? rp : {},
  sm: (op = (np = Ve.sizes) == null ? void 0 : np.sm.field) != null ? op : {},
  md: (ip = (ap = Ve.sizes) == null ? void 0 : ap.md.field) != null ? ip : {},
  lg: (lp = (sp = Ve.sizes) == null ? void 0 : sp.lg.field) != null ? lp : {}
}, mT = {
  baseStyle: fT,
  sizes: hT,
  variants: pT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, yi = yt("tooltip-bg"), Al = yt("tooltip-fg"), vT = yt("popper-arrow-bg"), gT = {
  bg: yi.reference,
  color: Al.reference,
  [yi.variable]: "colors.gray.700",
  [Al.variable]: "colors.whiteAlpha.900",
  _dark: {
    [yi.variable]: "colors.gray.300",
    [Al.variable]: "colors.gray.900"
  },
  [vT.variable]: yi.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, bT = {
  baseStyle: gT
}, { defineMultiStyleConfig: yT, definePartsStyle: ra } = Ke(RE.keys), xT = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = ue(
    Hf(),
    Hf("1rem", "rgba(0,0,0,0.1)")
  )(e), i = ue(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${yr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, ST = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, wT = (e) => ({
  bg: ue("gray.100", "whiteAlpha.300")(e)
}), CT = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...xT(e)
}), _T = ra((e) => ({
  label: ST,
  filledTrack: CT(e),
  track: wT(e)
})), kT = {
  xs: ra({
    track: { h: "1" }
  }),
  sm: ra({
    track: { h: "2" }
  }),
  md: ra({
    track: { h: "3" }
  }),
  lg: ra({
    track: { h: "4" }
  })
}, ET = yT({
  sizes: kT,
  baseStyle: _T,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), PT = (e) => typeof e == "function";
function Dt(e, ...t) {
  return PT(e) ? e(...t) : e;
}
var { definePartsStyle: Ui, defineMultiStyleConfig: TT } = Ke(xE.keys), ua = me("checkbox-size"), AT = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ua.reference,
    h: ua.reference,
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
}, OT = {
  _disabled: { cursor: "not-allowed" }
}, RT = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, $T = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, DT = Ui((e) => ({
  icon: $T,
  container: OT,
  control: Dt(AT, e),
  label: RT
})), MT = {
  sm: Ui({
    control: { [ua.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Ui({
    control: { [ua.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Ui({
    control: { [ua.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, us = TT({
  baseStyle: DT,
  sizes: MT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: IT, definePartsStyle: Hi } = Ke($E.keys), FT = (e) => {
  var t;
  const r = (t = Dt(us.baseStyle, e)) == null ? void 0 : t.control;
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
}, NT = Hi((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = us).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = us).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: FT(e)
  };
}), jT = {
  md: Hi({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Hi({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Hi({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, BT = IT({
  baseStyle: NT,
  sizes: jT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: zT, definePartsStyle: VT } = Ke(DE.keys), xi = me("select-bg"), cp, LT = {
  ...(cp = Ve.baseStyle) == null ? void 0 : cp.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: xi.reference,
  [xi.variable]: "colors.white",
  _dark: {
    [xi.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: xi.reference
  }
}, WT = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, UT = VT({
  field: LT,
  icon: WT
}), Si = {
  paddingInlineEnd: "8"
}, up, dp, fp, pp, hp, mp, vp, gp, HT = {
  lg: {
    ...(up = Ve.sizes) == null ? void 0 : up.lg,
    field: {
      ...(dp = Ve.sizes) == null ? void 0 : dp.lg.field,
      ...Si
    }
  },
  md: {
    ...(fp = Ve.sizes) == null ? void 0 : fp.md,
    field: {
      ...(pp = Ve.sizes) == null ? void 0 : pp.md.field,
      ...Si
    }
  },
  sm: {
    ...(hp = Ve.sizes) == null ? void 0 : hp.sm,
    field: {
      ...(mp = Ve.sizes) == null ? void 0 : mp.sm.field,
      ...Si
    }
  },
  xs: {
    ...(vp = Ve.sizes) == null ? void 0 : vp.xs,
    field: {
      ...(gp = Ve.sizes) == null ? void 0 : gp.xs.field,
      ...Si
    },
    icon: {
      insetEnd: "1"
    }
  }
}, YT = zT({
  baseStyle: UT,
  sizes: HT,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), Ol = me("skeleton-start-color"), Rl = me("skeleton-end-color"), qT = {
  [Ol.variable]: "colors.gray.100",
  [Rl.variable]: "colors.gray.400",
  _dark: {
    [Ol.variable]: "colors.gray.800",
    [Rl.variable]: "colors.gray.600"
  },
  background: Ol.reference,
  borderColor: Rl.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, GT = {
  baseStyle: qT
}, $l = me("skip-link-bg"), XT = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$l.variable]: "colors.white",
    _dark: {
      [$l.variable]: "colors.gray.700"
    },
    bg: $l.reference
  }
}, KT = {
  baseStyle: XT
}, { defineMultiStyleConfig: ZT, definePartsStyle: Ls } = Ke(ME.keys), $a = me("slider-thumb-size"), Da = me("slider-track-size"), pn = me("slider-bg"), JT = (e) => {
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
    ...Wu({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, QT = (e) => ({
  ...Wu({
    orientation: e.orientation,
    horizontal: { h: Da.reference },
    vertical: { w: Da.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [pn.variable]: "colors.gray.200",
  _dark: {
    [pn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [pn.variable]: "colors.gray.300",
    _dark: {
      [pn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: pn.reference
}), eA = (e) => {
  const { orientation: t } = e;
  return {
    ...Wu({
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
    w: $a.reference,
    h: $a.reference,
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
}, tA = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [pn.variable]: `colors.${t}.500`,
    _dark: {
      [pn.variable]: `colors.${t}.200`
    },
    bg: pn.reference
  };
}, rA = Ls((e) => ({
  container: JT(e),
  track: QT(e),
  thumb: eA(e),
  filledTrack: tA(e)
})), nA = Ls({
  container: {
    [$a.variable]: "sizes.4",
    [Da.variable]: "sizes.1"
  }
}), oA = Ls({
  container: {
    [$a.variable]: "sizes.3.5",
    [Da.variable]: "sizes.1"
  }
}), aA = Ls({
  container: {
    [$a.variable]: "sizes.2.5",
    [Da.variable]: "sizes.0.5"
  }
}), iA = {
  lg: nA,
  md: oA,
  sm: aA
}, sA = ZT({
  baseStyle: rA,
  sizes: iA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Dn = yt("spinner-size"), lA = {
  width: [Dn.reference],
  height: [Dn.reference]
}, cA = {
  xs: {
    [Dn.variable]: "sizes.3"
  },
  sm: {
    [Dn.variable]: "sizes.4"
  },
  md: {
    [Dn.variable]: "sizes.6"
  },
  lg: {
    [Dn.variable]: "sizes.8"
  },
  xl: {
    [Dn.variable]: "sizes.12"
  }
}, uA = {
  baseStyle: lA,
  sizes: cA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: dA, definePartsStyle: xv } = Ke(IE.keys), fA = {
  fontWeight: "medium"
}, pA = {
  opacity: 0.8,
  marginBottom: "2"
}, hA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, mA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, vA = xv({
  container: {},
  label: fA,
  helpText: pA,
  number: hA,
  icon: mA
}), gA = {
  md: xv({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, bA = dA({
  baseStyle: vA,
  sizes: gA,
  defaultProps: {
    size: "md"
  }
}), Dl = me("kbd-bg"), yA = {
  [Dl.variable]: "colors.gray.100",
  _dark: {
    [Dl.variable]: "colors.whiteAlpha.100"
  },
  bg: Dl.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, xA = {
  baseStyle: yA
}, SA = {
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
}, wA = {
  baseStyle: SA
}, { defineMultiStyleConfig: CA, definePartsStyle: _A } = Ke(EE.keys), kA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, EA = _A({
  icon: kA
}), PA = CA({
  baseStyle: EA
}), { defineMultiStyleConfig: TA, definePartsStyle: AA } = Ke(PE.keys), Or = me("menu-bg"), Ml = me("menu-shadow"), OA = {
  [Or.variable]: "#fff",
  [Ml.variable]: "shadows.sm",
  _dark: {
    [Or.variable]: "colors.gray.700",
    [Ml.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Or.reference,
  boxShadow: Ml.reference
}, RA = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Or.variable]: "colors.gray.100",
    _dark: {
      [Or.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Or.variable]: "colors.gray.200",
    _dark: {
      [Or.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Or.variable]: "colors.gray.100",
    _dark: {
      [Or.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Or.reference
}, $A = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, DA = {
  opacity: 0.6
}, MA = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, IA = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, FA = AA({
  button: IA,
  list: OA,
  item: RA,
  groupTitle: $A,
  command: DA,
  divider: MA
}), NA = TA({
  baseStyle: FA
}), { defineMultiStyleConfig: jA, definePartsStyle: zc } = Ke(TE.keys), Il = me("modal-bg"), Fl = me("modal-shadow"), BA = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, zA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, VA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Il.variable]: "colors.white",
    [Fl.variable]: "shadows.lg",
    _dark: {
      [Il.variable]: "colors.gray.700",
      [Fl.variable]: "shadows.dark-lg"
    },
    bg: Il.reference,
    boxShadow: Fl.reference
  };
}, LA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, WA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, UA = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, HA = {
  px: "6",
  py: "4"
}, YA = zc((e) => ({
  overlay: BA,
  dialogContainer: Dt(zA, e),
  dialog: Dt(VA, e),
  header: LA,
  closeButton: WA,
  body: Dt(UA, e),
  footer: HA
}));
function fr(e) {
  return zc(e === "full" ? {
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
var qA = {
  xs: fr("xs"),
  sm: fr("sm"),
  md: fr("md"),
  lg: fr("lg"),
  xl: fr("xl"),
  "2xl": fr("2xl"),
  "3xl": fr("3xl"),
  "4xl": fr("4xl"),
  "5xl": fr("5xl"),
  "6xl": fr("6xl"),
  full: fr("full")
}, GA = jA({
  baseStyle: YA,
  sizes: qA,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: XA, definePartsStyle: Sv } = Ke(AE.keys), Hu = yt("number-input-stepper-width"), wv = yt("number-input-input-padding"), KA = Yr(Hu).add("0.5rem").toString(), Nl = yt("number-input-bg"), jl = yt("number-input-color"), Bl = yt("number-input-border-color"), ZA = {
  [Hu.variable]: "sizes.6",
  [wv.variable]: KA
}, JA = (e) => {
  var t, r;
  return (r = (t = Dt(Ve.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, QA = {
  width: Hu.reference
}, eO = {
  borderStart: "1px solid",
  borderStartColor: Bl.reference,
  color: jl.reference,
  bg: Nl.reference,
  [jl.variable]: "colors.chakra-body-text",
  [Bl.variable]: "colors.chakra-border-color",
  _dark: {
    [jl.variable]: "colors.whiteAlpha.800",
    [Bl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Nl.variable]: "colors.gray.200",
    _dark: {
      [Nl.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, tO = Sv((e) => {
  var t;
  return {
    root: ZA,
    field: (t = Dt(JA, e)) != null ? t : {},
    stepperGroup: QA,
    stepper: eO
  };
});
function wi(e) {
  var t, r, n;
  const o = (t = Ve.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = hv.fontSizes[i];
  return Sv({
    field: {
      ...o.field,
      paddingInlineEnd: wv.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Yr(s).multiply(0.75).toString(),
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
var rO = {
  xs: wi("xs"),
  sm: wi("sm"),
  md: wi("md"),
  lg: wi("lg")
}, nO = XA({
  baseStyle: tO,
  sizes: rO,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), bp, oO = {
  ...(bp = Ve.baseStyle) == null ? void 0 : bp.field,
  textAlign: "center"
}, aO = {
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
}, yp, xp, iO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Dt((t = Ve.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Dt((t = Ve.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Dt((t = Ve.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (xp = (yp = Ve.variants) == null ? void 0 : yp.unstyled.field) != null ? xp : {}
}, sO = {
  baseStyle: oO,
  sizes: aO,
  variants: iO,
  defaultProps: Ve.defaultProps
}, { defineMultiStyleConfig: lO, definePartsStyle: cO } = Ke(OE.keys), Ci = yt("popper-bg"), uO = yt("popper-arrow-bg"), Sp = yt("popper-arrow-shadow-color"), dO = { zIndex: 10 }, fO = {
  [Ci.variable]: "colors.white",
  bg: Ci.reference,
  [uO.variable]: Ci.reference,
  [Sp.variable]: "colors.gray.200",
  _dark: {
    [Ci.variable]: "colors.gray.700",
    [Sp.variable]: "colors.whiteAlpha.300"
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
}, pO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, hO = {
  px: 3,
  py: 2
}, mO = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, vO = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, gO = cO({
  popper: dO,
  content: fO,
  header: pO,
  body: hO,
  footer: mO,
  closeButton: vO
}), bO = lO({
  baseStyle: gO
}), { definePartsStyle: Vc, defineMultiStyleConfig: yO } = Ke(SE.keys), zl = me("drawer-bg"), Vl = me("drawer-box-shadow");
function Kn(e) {
  return Vc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var xO = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, SO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, wO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [zl.variable]: "colors.white",
    [Vl.variable]: "shadows.lg",
    _dark: {
      [zl.variable]: "colors.gray.700",
      [Vl.variable]: "shadows.dark-lg"
    },
    bg: zl.reference,
    boxShadow: Vl.reference
  };
}, CO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, _O = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, kO = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, EO = {
  px: "6",
  py: "4"
}, PO = Vc((e) => ({
  overlay: xO,
  dialogContainer: SO,
  dialog: Dt(wO, e),
  header: CO,
  closeButton: _O,
  body: kO,
  footer: EO
})), TO = {
  xs: Kn("xs"),
  sm: Kn("md"),
  md: Kn("lg"),
  lg: Kn("2xl"),
  xl: Kn("4xl"),
  full: Kn("full")
}, AO = yO({
  baseStyle: PO,
  sizes: TO,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: OO, defineMultiStyleConfig: RO } = Ke(wE.keys), $O = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, DO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, MO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, IO = OO({
  preview: $O,
  input: DO,
  textarea: MO
}), FO = RO({
  baseStyle: IO
}), { definePartsStyle: NO, defineMultiStyleConfig: jO } = Ke(CE.keys), po = me("form-control-color"), BO = {
  marginStart: "1",
  [po.variable]: "colors.red.500",
  _dark: {
    [po.variable]: "colors.red.300"
  },
  color: po.reference
}, zO = {
  mt: "2",
  [po.variable]: "colors.gray.600",
  _dark: {
    [po.variable]: "colors.whiteAlpha.600"
  },
  color: po.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, VO = NO({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: BO,
  helperText: zO
}), LO = jO({
  baseStyle: VO
}), { definePartsStyle: WO, defineMultiStyleConfig: UO } = Ke(_E.keys), ho = me("form-error-color"), HO = {
  [ho.variable]: "colors.red.500",
  _dark: {
    [ho.variable]: "colors.red.300"
  },
  color: ho.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, YO = {
  marginEnd: "0.5em",
  [ho.variable]: "colors.red.500",
  _dark: {
    [ho.variable]: "colors.red.300"
  },
  color: ho.reference
}, qO = WO({
  text: HO,
  icon: YO
}), GO = UO({
  baseStyle: qO
}), XO = {
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
}, KO = {
  baseStyle: XO
}, ZO = {
  fontFamily: "heading",
  fontWeight: "bold"
}, JO = {
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
}, QO = {
  baseStyle: ZO,
  sizes: JO,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: eR, definePartsStyle: tR } = Ke(yE.keys), Ll = me("breadcrumb-link-decor"), rR = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Ll.reference,
  [Ll.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Ll.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, nR = tR({
  link: rR
}), oR = eR({
  baseStyle: nR
}), aR = {
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
}, Cv = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: ue("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ue("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: ue("gray.200", "whiteAlpha.300")(e) }
    };
  const n = ko(`${t}.200`, 0.12)(r), o = ko(`${t}.200`, 0.24)(r);
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
}, iR = (e) => {
  const { colorScheme: t } = e, r = ue("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Dt(Cv, e)
  };
}, sR = {
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
}, lR = (e) => {
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
  } = (t = sR[r]) != null ? t : {}, s = ue(n, `${r}.200`)(e);
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
}, cR = (e) => {
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
}, uR = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, dR = {
  ghost: Cv,
  outline: iR,
  solid: lR,
  link: cR,
  unstyled: uR
}, fR = {
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
}, pR = {
  baseStyle: aR,
  variants: dR,
  sizes: fR,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Bn, defineMultiStyleConfig: hR } = Ke(zE.keys), ds = me("card-bg"), Xr = me("card-padding"), _v = me("card-shadow"), Yi = me("card-radius"), kv = me("card-border-width", "0"), Ev = me("card-border-color"), mR = Bn({
  container: {
    [ds.variable]: "colors.chakra-body-bg",
    backgroundColor: ds.reference,
    boxShadow: _v.reference,
    borderRadius: Yi.reference,
    color: "chakra-body-text",
    borderWidth: kv.reference,
    borderColor: Ev.reference
  },
  body: {
    padding: Xr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Xr.reference
  },
  footer: {
    padding: Xr.reference
  }
}), vR = {
  sm: Bn({
    container: {
      [Yi.variable]: "radii.base",
      [Xr.variable]: "space.3"
    }
  }),
  md: Bn({
    container: {
      [Yi.variable]: "radii.md",
      [Xr.variable]: "space.5"
    }
  }),
  lg: Bn({
    container: {
      [Yi.variable]: "radii.xl",
      [Xr.variable]: "space.7"
    }
  })
}, gR = {
  elevated: Bn({
    container: {
      [_v.variable]: "shadows.base",
      _dark: {
        [ds.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Bn({
    container: {
      [kv.variable]: "1px",
      [Ev.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Bn({
    container: {
      [ds.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Xr.variable]: 0
    },
    header: {
      [Xr.variable]: 0
    },
    footer: {
      [Xr.variable]: 0
    }
  }
}, bR = hR({
  baseStyle: mR,
  variants: gR,
  sizes: vR,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), da = yt("close-button-size"), qo = yt("close-button-bg"), yR = {
  w: [da.reference],
  h: [da.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [qo.variable]: "colors.blackAlpha.100",
    _dark: {
      [qo.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [qo.variable]: "colors.blackAlpha.200",
    _dark: {
      [qo.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: qo.reference
}, xR = {
  lg: {
    [da.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [da.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [da.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, SR = {
  baseStyle: yR,
  sizes: xR,
  defaultProps: {
    size: "md"
  }
}, { variants: wR, defaultProps: CR } = ca, _R = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: pt.bg.reference,
  color: pt.color.reference,
  boxShadow: pt.shadow.reference
}, kR = {
  baseStyle: _R,
  variants: wR,
  defaultProps: CR
}, ER = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, PR = {
  baseStyle: ER
}, TR = {
  opacity: 0.6,
  borderColor: "inherit"
}, AR = {
  borderStyle: "solid"
}, OR = {
  borderStyle: "dashed"
}, RR = {
  solid: AR,
  dashed: OR
}, $R = {
  baseStyle: TR,
  variants: RR,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: DR, defineMultiStyleConfig: MR } = Ke(vE.keys), IR = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, FR = {
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
}, NR = {
  pt: "2",
  px: "4",
  pb: "5"
}, jR = {
  fontSize: "1.25em"
}, BR = DR({
  container: IR,
  button: FR,
  panel: NR,
  icon: jR
}), zR = MR({ baseStyle: BR }), { definePartsStyle: Ga, defineMultiStyleConfig: VR } = Ke(gE.keys), Kt = me("alert-fg"), tn = me("alert-bg"), LR = Ga({
  container: {
    bg: tn.reference,
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
    color: Kt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Kt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Yu(e) {
  const { theme: t, colorScheme: r } = e, n = ko(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var WR = Ga((e) => {
  const { colorScheme: t } = e, r = Yu(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      }
    }
  };
}), UR = Ga((e) => {
  const { colorScheme: t } = e, r = Yu(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Kt.reference
    }
  };
}), HR = Ga((e) => {
  const { colorScheme: t } = e, r = Yu(e);
  return {
    container: {
      [Kt.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [Kt.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Kt.reference
    }
  };
}), YR = Ga((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Kt.variable]: "colors.white",
      [tn.variable]: `colors.${t}.500`,
      _dark: {
        [Kt.variable]: "colors.gray.900",
        [tn.variable]: `colors.${t}.200`
      },
      color: Kt.reference
    }
  };
}), qR = {
  subtle: WR,
  "left-accent": UR,
  "top-accent": HR,
  solid: YR
}, GR = VR({
  baseStyle: LR,
  variants: qR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Pv, defineMultiStyleConfig: XR } = Ke(bE.keys), mo = me("avatar-border-color"), fa = me("avatar-bg"), Ma = me("avatar-font-size"), Eo = me("avatar-size"), KR = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: mo.reference,
  [mo.variable]: "white",
  _dark: {
    [mo.variable]: "colors.gray.800"
  }
}, ZR = {
  bg: fa.reference,
  fontSize: Ma.reference,
  width: Eo.reference,
  height: Eo.reference,
  lineHeight: "1",
  [fa.variable]: "colors.gray.200",
  _dark: {
    [fa.variable]: "colors.whiteAlpha.400"
  }
}, JR = (e) => {
  const { name: t, theme: r } = e, n = t ? iP({ string: t }) : "colors.gray.400", o = oP(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: fa.reference,
    fontSize: Ma.reference,
    color: a,
    borderColor: mo.reference,
    verticalAlign: "top",
    width: Eo.reference,
    height: Eo.reference,
    "&:not([data-loaded])": {
      [fa.variable]: n
    },
    [mo.variable]: "colors.white",
    _dark: {
      [mo.variable]: "colors.gray.800"
    }
  };
}, QR = {
  fontSize: Ma.reference,
  lineHeight: "1"
}, e$ = Pv((e) => ({
  badge: Dt(KR, e),
  excessLabel: Dt(ZR, e),
  container: Dt(JR, e),
  label: QR
}));
function un(e) {
  const t = e !== "100%" ? vv[e] : void 0;
  return Pv({
    container: {
      [Eo.variable]: t ?? e,
      [Ma.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Eo.variable]: t ?? e,
      [Ma.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var t$ = {
  "2xs": un(4),
  xs: un(6),
  sm: un(8),
  md: un(12),
  lg: un(16),
  xl: un(24),
  "2xl": un(32),
  full: un("100%")
}, r$ = XR({
  baseStyle: e$,
  sizes: t$,
  defaultProps: {
    size: "md"
  }
}), n$ = {
  Accordion: zR,
  Alert: GR,
  Avatar: r$,
  Badge: ca,
  Breadcrumb: oR,
  Button: pR,
  Checkbox: us,
  CloseButton: SR,
  Code: kR,
  Container: PR,
  Divider: $R,
  Drawer: AO,
  Editable: FO,
  Form: LO,
  FormError: GO,
  FormLabel: KO,
  Heading: QO,
  Input: Ve,
  Kbd: xA,
  Link: wA,
  List: PA,
  Menu: NA,
  Modal: GA,
  NumberInput: nO,
  PinInput: sO,
  Popover: bO,
  Progress: ET,
  Radio: BT,
  Select: YT,
  Skeleton: GT,
  SkipLink: KT,
  Slider: sA,
  Spinner: uA,
  Stat: bA,
  Switch: wP,
  Table: AP,
  Tabs: UP,
  Tag: nT,
  Textarea: mT,
  Tooltip: bT,
  Card: bR,
  Stepper: mE
}, Tv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Av = {
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
}, Ov = "ltr", Rv = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, $v = {
  semanticTokens: Tv,
  direction: Ov,
  ...gv,
  components: n$,
  styles: Av,
  config: Rv
}, AV = $v, o$ = {
  semanticTokens: Tv,
  direction: Ov,
  components: {},
  ...gv,
  styles: Av,
  config: Rv
};
function na(e) {
  return typeof e == "function";
}
function a$(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Dv = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return Wk(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, a$(
    ...n.map(
      (a) => (i) => na(a) ? a(i) : Mv(i, a)
    )
  )(o);
}, OV = Dv($v), RV = Dv(o$);
function Mv(...e) {
  return ir({}, ...e, Iv);
}
function Iv(e, t, r, n) {
  if ((na(e) || na(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = na(e) ? e(...o) : e, i = na(t) ? t(...o) : t;
      return ir({}, a, i, Iv);
    };
}
function i$(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function s$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var l$ = (e) => {
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
}, c$ = l$(s$);
function Fv(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Nv = (e) => Fv(e, (t) => t != null);
function wp(e) {
  return typeof e == "number";
}
function u$(e) {
  return typeof e == "function";
}
var d$ = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function $V(e) {
  return "current" in e;
}
function f$(e, ...t) {
  return u$(e) ? e(...t) : e;
}
function DV(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function p$(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var MV = () => {
}, IV = /* @__PURE__ */ p$((e) => () => {
  const { condition: t, message: r } = e;
  t && d$ && console.warn(r);
}), FV = (...e) => (t) => e.reduce((r, n) => n(r), t), Wl = (e, t) => Math.abs(e - t), Cp = (e) => "x" in e && "y" in e;
function NV(e, t) {
  if (wp(e) && wp(t))
    return Wl(e, t);
  if (Cp(e) && Cp(t)) {
    const r = Wl(e.x, t.x), n = Wl(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const jv = 1 / 60 * 1e3, h$ = typeof performance < "u" ? () => performance.now() : () => Date.now(), Bv = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(h$()), jv);
function m$(e) {
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
const v$ = 40;
let Lc = !0, Ia = !1, Wc = !1;
const vo = {
  delta: 0,
  timestamp: 0
}, Xa = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ws = Xa.reduce((e, t) => (e[t] = m$(() => Ia = !0), e), {}), g$ = Xa.reduce((e, t) => {
  const r = Ws[t];
  return e[t] = (n, o = !1, a = !1) => (Ia || x$(), r.schedule(n, o, a)), e;
}, {}), b$ = Xa.reduce((e, t) => (e[t] = Ws[t].cancel, e), {});
Xa.reduce((e, t) => (e[t] = () => Ws[t].process(vo), e), {});
const y$ = (e) => Ws[e].process(vo), zv = (e) => {
  Ia = !1, vo.delta = Lc ? jv : Math.max(Math.min(e - vo.timestamp, v$), 1), vo.timestamp = e, Wc = !0, Xa.forEach(y$), Wc = !1, Ia && (Lc = !1, Bv(zv));
}, x$ = () => {
  Ia = !0, Lc = !0, Wc || Bv(zv);
}, _p = () => vo;
var S$ = typeof Element < "u", w$ = typeof Map == "function", C$ = typeof Set == "function", _$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function qi(e, t) {
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
        if (!qi(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (w$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!qi(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (C$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (_$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (S$ && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !qi(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var k$ = function(t, r) {
  try {
    return qi(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const E$ = /* @__PURE__ */ Os(k$);
function qu(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = iv(), s = e ? c$(a, `components.${e}`) : void 0, l = n || s, c = ir(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Nv(i$(o, ["children"]))
  ), u = be({});
  if (l) {
    const f = Vk(l)(c);
    E$(u.current, f) || (u.current = f);
  }
  return u.current;
}
function Mo(e, t = {}) {
  return qu(e, t);
}
function Io(e, t = {}) {
  return qu(e, t);
}
function jV(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = iv(), i = (r = a.components) == null ? void 0 : r[e], s = i ? Mv(i, n) : n;
  return qu(null, {
    ...o,
    styleConfig: s
  });
}
var P$ = /* @__PURE__ */ new Set([
  ...Tk,
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
]), T$ = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function A$(e) {
  return T$.has(e) || !P$.has(e);
}
function O$(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var R$ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $$ = /* @__PURE__ */ Km(
  function(e) {
    return R$.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), D$ = $$, M$ = function(t) {
  return t !== "theme";
}, kp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? D$ : M$;
}, Ep = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Pp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, I$ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Fs(r, n, o), Mu(function() {
    return Ns(r, n, o);
  }), null;
}, F$ = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = Ep(t, r, n), l = s || kp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Pp), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(Pp), d.push(u[p], u[0][p]);
    }
    var m = js(function(h, v, b) {
      var y = c && h.as || o, S = "", k = [], w = h;
      if (h.theme == null) {
        w = {};
        for (var M in h)
          w[M] = h[M];
        w.theme = U.useContext(bn);
      }
      typeof h.className == "string" ? S = $u(v.registered, k, h.className) : h.className != null && (S = h.className + " ");
      var P = _o(d.concat(k), v.registered, w);
      S += v.key + "-" + P.name, i !== void 0 && (S += " " + i);
      var I = c && s === void 0 ? kp(y) : l, z = {};
      for (var j in h)
        c && j === "as" || // $FlowFixMe
        I(j) && (z[j] = h[j]);
      return z.className = S, z.ref = b, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(I$, {
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
      return e(h, Ln({}, r, v, {
        shouldForwardProp: Ep(m, v, !0)
      })).apply(void 0, d);
    }, m;
  };
}, N$ = [
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
], fs = F$.bind();
N$.forEach(function(e) {
  fs[e] = fs(e);
});
var Tp, j$ = (Tp = fs.default) != null ? Tp : fs, B$ = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = Fv(i, (d, f) => Ok(f)), l = f$(e, t), c = O$(
    {},
    o,
    l,
    Nv(s),
    a
  ), u = Nk(c)(t.theme);
  return n ? [u, n] : u;
};
function Ul(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = A$);
  const o = B$({ baseStyle: r }), a = j$(
    e,
    n
  )(o);
  return Mt.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = ju();
    return Mt.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function z$() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Ul, {
    apply(t, r, n) {
      return Ul(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Ul(r)), e.get(r);
    }
  });
}
var ge = z$();
function _e(e) {
  return At(e);
}
var Gu = Cr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Gu.displayName = "EnvironmentContext";
function V$({ defer: e } = {}) {
  const [, t] = x0((r) => r + 1, 0);
  return Oa(() => {
    e && t();
  }, [e]), ft(Gu);
}
function L$(e) {
  const { children: t, environment: r, disabled: n } = e, o = be(null), a = gt(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), i = !n || !r;
  return /* @__PURE__ */ L.jsxs(Gu.Provider, { value: a, children: [
    t,
    i && /* @__PURE__ */ L.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
L$.displayName = "EnvironmentProvider";
function Zt(e, t = []) {
  const r = be(e);
  return Fe(() => {
    r.current = e;
  }), q((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function Fo(e, t) {
  const r = be(!1), n = be(!1);
  Fe(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Fe(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Vv = Cr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Us = Cr({}), Ka = Cr(null), Hs = typeof document < "u", ps = Hs ? Ts : Fe, Lv = Cr({ strict: !1 });
function W$(e, t, r, n) {
  const { visualElement: o } = ft(Us), a = ft(Lv), i = ft(Ka), s = ft(Vv).reducedMotion, l = be();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return mm(() => {
    c && c.update(r, i);
  }), ps(() => {
    c && c.render();
  }), Fe(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? ps : Fe)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function ao(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function U$(e, t, r) {
  return q(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ao(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Fa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ys(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Xu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ku = ["initial", ...Xu];
function qs(e) {
  return Ys(e.animate) || Ku.some((t) => Fa(e[t]));
}
function Wv(e) {
  return !!(qs(e) || e.variants);
}
function H$(e, t) {
  if (qs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Fa(r) ? r : void 0,
      animate: Fa(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Y$(e) {
  const { initial: t, animate: r } = H$(e, ft(Us));
  return gt(() => ({ initial: t, animate: r }), [Ap(t), Ap(r)]);
}
function Ap(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Op = {
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
}, Na = {};
for (const e in Op)
  Na[e] = {
    isEnabled: (t) => Op[e].some((r) => !!t[r])
  };
function q$(e) {
  for (const t in e)
    Na[t] = {
      ...Na[t],
      ...e[t]
    };
}
const Zu = Cr({}), Uv = Cr({}), G$ = Symbol.for("motionComponentSymbol");
function X$({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && q$(e);
  function a(s, l) {
    let c;
    const u = {
      ...ft(Vv),
      ...s,
      layoutId: K$(s)
    }, { isStatic: d } = u, f = Y$(s), p = n(s, d);
    if (!d && Hs) {
      f.visualElement = W$(o, p, u, t);
      const m = ft(Uv), h = ft(Lv).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        h,
        e,
        m
      ));
    }
    return U.createElement(
      Us.Provider,
      { value: f },
      c && f.visualElement ? U.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, U$(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = At(a);
  return i[G$] = o, i;
}
function K$({ layoutId: e }) {
  const t = ft(Zu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Z$(e) {
  function t(n, o = {}) {
    return X$(e(n, o));
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
const J$ = [
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
function Ju(e) {
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
      !!(J$.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const hs = {};
function Q$(e) {
  Object.assign(hs, e);
}
const Za = [
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
], Yn = new Set(Za);
function Hv(e, { layout: t, layoutId: r }) {
  return Yn.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!hs[e] || e === "opacity");
}
const Ht = (e) => !!(e && e.getVelocity), e2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, t2 = Za.length;
function r2(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < t2; i++) {
    const s = Za[i];
    if (e[s] !== void 0) {
      const l = e2[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Yv = (e) => (t) => typeof t == "string" && t.startsWith(e), qv = Yv("--"), Uc = Yv("var(--"), n2 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, o2 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, yn = (e, t, r) => Math.min(Math.max(r, e), t), qn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, pa = {
  ...qn,
  transform: (e) => yn(0, 1, e)
}, _i = {
  ...qn,
  default: 1
}, ha = (e) => Math.round(e * 1e5) / 1e5, Gs = /(-)?([\d]*\.?[\d])+/g, Gv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, a2 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ja(e) {
  return typeof e == "string";
}
const Qa = (e) => ({
  test: (t) => Ja(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), dn = Qa("deg"), Ir = Qa("%"), fe = Qa("px"), i2 = Qa("vh"), s2 = Qa("vw"), Rp = {
  ...Ir,
  parse: (e) => Ir.parse(e) / 100,
  transform: (e) => Ir.transform(e * 100)
}, $p = {
  ...qn,
  transform: Math.round
}, Xv = {
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
  rotate: dn,
  rotateX: dn,
  rotateY: dn,
  rotateZ: dn,
  scale: _i,
  scaleX: _i,
  scaleY: _i,
  scaleZ: _i,
  skew: dn,
  skewX: dn,
  skewY: dn,
  distance: fe,
  translateX: fe,
  translateY: fe,
  translateZ: fe,
  x: fe,
  y: fe,
  z: fe,
  perspective: fe,
  transformPerspective: fe,
  opacity: pa,
  originX: Rp,
  originY: Rp,
  originZ: fe,
  // Misc
  zIndex: $p,
  // SVG
  fillOpacity: pa,
  strokeOpacity: pa,
  numOctaves: $p
};
function Qu(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (qv(d)) {
      a[d] = f;
      continue;
    }
    const p = Xv[d], m = o2(f, p);
    if (Yn.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = r2(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const ed = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Kv(e, t, r) {
  for (const n in t)
    !Ht(t[n]) && !Hv(n, r) && (e[n] = t[n]);
}
function l2({ transformTemplate: e }, t, r) {
  return gt(() => {
    const n = ed();
    return Qu(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function c2(e, t, r) {
  const n = e.style || {}, o = {};
  return Kv(o, n, e), Object.assign(o, l2(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function u2(e, t, r) {
  const n = {}, o = c2(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const d2 = /* @__PURE__ */ new Set([
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
function ms(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || d2.has(e);
}
let Zv = (e) => !ms(e);
function f2(e) {
  e && (Zv = (t) => t.startsWith("on") ? !ms(t) : e(t));
}
try {
  f2(require("@emotion/is-prop-valid").default);
} catch {
}
function p2(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Zv(o) || r === !0 && ms(o) || !t && !ms(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Dp(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function h2(e, t, r) {
  const n = Dp(t, e.x, e.width), o = Dp(r, e.y, e.height);
  return `${n} ${o}`;
}
const m2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, v2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function g2(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? m2 : v2;
  e[a.offset] = fe.transform(-n);
  const i = fe.transform(t), s = fe.transform(r);
  e[a.array] = `${i} ${s}`;
}
function td(e, {
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
  if (Qu(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = h2(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && g2(p, i, s, l, !1);
}
const Jv = () => ({
  ...ed(),
  attrs: {}
}), rd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function b2(e, t, r, n) {
  const o = gt(() => {
    const a = Jv();
    return td(a, t, { enableHardwareAcceleration: !1 }, rd(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    Kv(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function y2(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (Ju(r) ? b2 : u2)(n, a, i, r), u = {
      ...p2(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = gt(() => Ht(d) ? d.get() : d, [d]);
    return ar(r, {
      ...u,
      children: f
    });
  };
}
const nd = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Qv(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const eg = /* @__PURE__ */ new Set([
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
function tg(e, t, r, n) {
  Qv(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(eg.has(o) ? o : nd(o), t.attrs[o]);
}
function od(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Ht(r[o]) || t.style && Ht(t.style[o]) || Hv(o, e)) && (n[o] = r[o]);
  return n;
}
function rg(e, t) {
  const r = od(e, t);
  for (const n in e)
    if (Ht(e[n]) || Ht(t[n])) {
      const o = Za.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function ad(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function ng(e) {
  const t = be(null);
  return t.current === null && (t.current = e()), t.current;
}
const vs = (e) => Array.isArray(e), x2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), S2 = (e) => vs(e) ? e[e.length - 1] || 0 : e;
function Gi(e) {
  const t = Ht(e) ? e.get() : e;
  return x2(t) ? t.toValue() : t;
}
function w2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: C2(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const og = (e) => (t, r) => {
  const n = ft(Us), o = ft(Ka), a = () => w2(e, t, n, o);
  return r ? a() : ng(a);
};
function C2(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = Gi(a[f]);
  let { initial: i, animate: s } = e;
  const l = qs(e), c = Wv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !Ys(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = ad(e, p);
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
const _2 = {
  useVisualState: og({
    scrapeMotionValuesFromProps: rg,
    createRenderState: Jv,
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
      td(r, n, { enableHardwareAcceleration: !1 }, rd(t.tagName), e.transformTemplate), tg(t, r);
    }
  })
}, k2 = {
  useVisualState: og({
    scrapeMotionValuesFromProps: od,
    createRenderState: ed
  })
};
function E2(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Ju(e) ? _2 : k2,
    preloadedFeatures: r,
    useRender: y2(t),
    createVisualElement: n,
    Component: e
  };
}
function Gr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const ag = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Xs(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const P2 = (e) => (t) => ag(t) && e(t, Xs(t));
function Kr(e, t, r, n) {
  return Gr(e, t, P2(r), n);
}
const T2 = (e, t) => (r) => t(e(r)), mn = (...e) => e.reduce(T2);
function ig(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Mp = ig("dragHorizontal"), Ip = ig("dragVertical");
function sg(e) {
  let t = !1;
  if (e === "y")
    t = Ip();
  else if (e === "x")
    t = Mp();
  else {
    const r = Mp(), n = Ip();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function lg() {
  const e = sg(!0);
  return e ? (e(), !1) : !0;
}
class wn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function A2(e) {
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
const it = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, O2 = 40;
let Hc = !0, ja = !1;
const Ks = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], go = Ks.reduce((e, t) => (e[t] = A2(() => ja = !0), e), {}), R2 = (e) => go[e].process(it), cg = (e) => {
  ja = !1, it.delta = Hc ? 1e3 / 60 : Math.max(Math.min(e - it.timestamp, O2), 1), it.timestamp = e, it.isProcessing = !0, Ks.forEach(R2), it.isProcessing = !1, ja && (Hc = !1, requestAnimationFrame(cg));
}, $2 = () => {
  ja = !0, Hc = !0, it.isProcessing || requestAnimationFrame(cg);
}, tt = Ks.reduce((e, t) => {
  const r = go[t];
  return e[t] = (n, o = !1, a = !1) => (ja || $2(), r.schedule(n, o, a)), e;
}, {});
function rn(e) {
  Ks.forEach((t) => go[t].cancel(e));
}
function Fp(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || lg())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && tt.update(() => s[n](a, i));
  };
  return Kr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class D2 extends wn {
  mount() {
    this.unmount = mn(Fp(this.node, !0), Fp(this.node, !1));
  }
  unmount() {
  }
}
class M2 extends wn {
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
    this.unmount = mn(Gr(this.node.current, "focus", () => this.onFocus()), Gr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ug = (e, t) => t ? e === t ? !0 : ug(e, t.parentElement) : !1, bt = (e) => e;
function Hl(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Xs(r));
}
class I2 extends wn {
  constructor() {
    super(...arguments), this.removeStartListeners = bt, this.removeEndListeners = bt, this.removeAccessibleListeners = bt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Kr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        tt.update(() => {
          ug(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Kr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = mn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Hl("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && tt.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Gr(this.node.current, "keyup", i), Hl("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Gr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Hl("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Gr(this.node.current, "blur", n);
      this.removeAccessibleListeners = mn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && tt.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !lg();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && tt.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Kr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Gr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = mn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Yc = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap(), F2 = (e) => {
  const t = Yc.get(e.target);
  t && t(e);
}, N2 = (e) => {
  e.forEach(F2);
};
function j2({ root: e, ...t }) {
  const r = e || document;
  Yl.has(r) || Yl.set(r, {});
  const n = Yl.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(N2, { root: e, ...t })), n[o];
}
function B2(e, t, r) {
  const n = j2(t);
  return Yc.set(e, r), n.observe(e), () => {
    Yc.delete(e), n.unobserve(e);
  };
}
const z2 = {
  some: 0,
  all: 1
};
class V2 extends wn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : z2[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return B2(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(L2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function L2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const W2 = {
  inView: {
    Feature: V2
  },
  tap: {
    Feature: I2
  },
  focus: {
    Feature: M2
  },
  hover: {
    Feature: D2
  }
};
function dg(e, t) {
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
function U2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function H2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Zs(e, t, r) {
  const n = e.getProps();
  return ad(n, t, r !== void 0 ? r : n.custom, U2(e), H2(e));
}
const Y2 = "framerAppearId", q2 = "data-" + nd(Y2);
let ei = bt, wr = bt;
process.env.NODE_ENV !== "production" && (ei = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, wr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const vn = (e) => e * 1e3, Zr = (e) => e / 1e3, G2 = {
  current: !1
}, fg = (e) => Array.isArray(e) && typeof e[0] == "number";
function pg(e) {
  return !!(!e || typeof e == "string" && hg[e] || fg(e) || Array.isArray(e) && e.every(pg));
}
const oa = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, hg = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: oa([0, 0.65, 0.55, 1]),
  circOut: oa([0.55, 0, 1, 0.45]),
  backIn: oa([0.31, 0.01, 0.66, -0.59]),
  backOut: oa([0.33, 1.53, 0.69, 0.99])
};
function mg(e) {
  if (e)
    return fg(e) ? oa(e) : Array.isArray(e) ? e.map(mg) : hg[e];
}
function X2(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = mg(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Np = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, ql = {}, vg = {};
for (const e in Np)
  vg[e] = () => (ql[e] === void 0 && (ql[e] = Np[e]()), ql[e]);
function K2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const gg = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, Z2 = 1e-7, J2 = 12;
function Q2(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = gg(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > Z2 && ++s < J2);
  return i;
}
function ti(e, t, r, n) {
  if (e === t && r === n)
    return bt;
  const o = (a) => Q2(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : gg(o(a), t, n);
}
const eD = ti(0.42, 0, 1, 1), tD = ti(0, 0, 0.58, 1), bg = ti(0.42, 0, 0.58, 1), rD = (e) => Array.isArray(e) && typeof e[0] != "number", yg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xg = (e) => (t) => 1 - e(1 - t), Sg = (e) => 1 - Math.sin(Math.acos(e)), id = xg(Sg), nD = yg(id), wg = ti(0.33, 1.53, 0.69, 0.99), sd = xg(wg), oD = yg(sd), aD = (e) => (e *= 2) < 1 ? 0.5 * sd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), jp = {
  linear: bt,
  easeIn: eD,
  easeInOut: bg,
  easeOut: tD,
  circIn: Sg,
  circInOut: nD,
  circOut: id,
  backIn: sd,
  backInOut: oD,
  backOut: wg,
  anticipate: aD
}, Bp = (e) => {
  if (Array.isArray(e)) {
    wr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return ti(t, r, n, o);
  } else if (typeof e == "string")
    return wr(jp[e] !== void 0, `Invalid easing type '${e}'`), jp[e];
  return e;
}, ld = (e, t) => (r) => !!(Ja(r) && a2.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Cg = (e, t, r) => (n) => {
  if (!Ja(n))
    return n;
  const [o, a, i, s] = n.match(Gs);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, iD = (e) => yn(0, 255, e), Gl = {
  ...qn,
  transform: (e) => Math.round(iD(e))
}, Fn = {
  test: ld("rgb", "red"),
  parse: Cg("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Gl.transform(e) + ", " + Gl.transform(t) + ", " + Gl.transform(r) + ", " + ha(pa.transform(n)) + ")"
};
function sD(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const qc = {
  test: ld("#"),
  parse: sD,
  transform: Fn.transform
}, io = {
  test: ld("hsl", "hue"),
  parse: Cg("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Ir.transform(ha(t)) + ", " + Ir.transform(ha(r)) + ", " + ha(pa.transform(n)) + ")"
}, Rt = {
  test: (e) => Fn.test(e) || qc.test(e) || io.test(e),
  parse: (e) => Fn.test(e) ? Fn.parse(e) : io.test(e) ? io.parse(e) : qc.parse(e),
  transform: (e) => Ja(e) ? e : e.hasOwnProperty("red") ? Fn.transform(e) : io.transform(e)
}, st = (e, t, r) => -r * e + r * t + e;
function Xl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function lD({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Xl(l, s, e + 1 / 3), a = Xl(l, s, e), i = Xl(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Kl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, cD = [qc, Fn, io], uD = (e) => cD.find((t) => t.test(e));
function zp(e) {
  const t = uD(e);
  wr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === io && (r = lD(r)), r;
}
const _g = (e, t) => {
  const r = zp(e), n = zp(t), o = { ...r };
  return (a) => (o.red = Kl(r.red, n.red, a), o.green = Kl(r.green, n.green, a), o.blue = Kl(r.blue, n.blue, a), o.alpha = st(r.alpha, n.alpha, a), Fn.transform(o));
};
function dD(e) {
  var t, r;
  return isNaN(e) && Ja(e) && (((t = e.match(Gs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Gv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const kg = {
  regex: n2,
  countKey: "Vars",
  token: "${v}",
  parse: bt
}, Eg = {
  regex: Gv,
  countKey: "Colors",
  token: "${c}",
  parse: Rt.parse
}, Pg = {
  regex: Gs,
  countKey: "Numbers",
  token: "${n}",
  parse: qn.parse
};
function Zl(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function gs(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Zl(r, kg), Zl(r, Eg), Zl(r, Pg), r;
}
function Tg(e) {
  return gs(e).values;
}
function Ag(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = gs(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(kg.token, i[l]) : l < n + r ? s = s.replace(Eg.token, Rt.transform(i[l])) : s = s.replace(Pg.token, ha(i[l]));
    return s;
  };
}
const fD = (e) => typeof e == "number" ? 0 : e;
function pD(e) {
  const t = Tg(e);
  return Ag(e)(t.map(fD));
}
const xn = {
  test: dD,
  parse: Tg,
  createTransformer: Ag,
  getAnimatableNone: pD
}, Og = (e, t) => (r) => `${r > 0 ? t : e}`;
function Rg(e, t) {
  return typeof e == "number" ? (r) => st(e, t, r) : Rt.test(e) ? _g(e, t) : e.startsWith("var(") ? Og(e, t) : Dg(e, t);
}
const $g = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => Rg(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, hD = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Rg(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, Dg = (e, t) => {
  const r = xn.createTransformer(t), n = gs(e), o = gs(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? mn($g(n.values, o.values), r) : (ei(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Og(e, t));
}, Ba = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Vp = (e, t) => (r) => st(e, t, r);
function mD(e) {
  return typeof e == "number" ? Vp : typeof e == "string" ? Rt.test(e) ? _g : Dg : Array.isArray(e) ? $g : typeof e == "object" ? hD : Vp;
}
function vD(e, t, r) {
  const n = [], o = r || mD(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || bt : t;
      s = mn(l, s);
    }
    n.push(s);
  }
  return n;
}
function Mg(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (wr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = vD(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Ba(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(yn(e[0], e[a - 1], c)) : l;
}
function gD(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ba(0, t, n);
    e.push(st(r, 1, o));
  }
}
function bD(e) {
  const t = [0];
  return gD(t, e.length - 1), t;
}
function yD(e, t) {
  return e.map((r) => r * t);
}
function xD(e, t) {
  return e.map(() => t || bg).splice(0, e.length - 1);
}
function bs({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = rD(n) ? n.map(Bp) : Bp(n), a = {
    done: !1,
    value: t[0]
  }, i = yD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : bD(t),
    e
  ), s = Mg(i, t, {
    ease: Array.isArray(o) ? o : xD(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function Ig(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const SD = 5;
function Fg(e, t, r) {
  const n = Math.max(t - SD, 0);
  return Ig(r - e(n), t - n);
}
const Jl = 1e-3, wD = 0.01, Lp = 10, CD = 0.05, _D = 1;
function kD({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  ei(e <= vn(Lp), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = yn(CD, _D, i), e = yn(wD, Lp, Zr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = Gc(c, i), m = Math.exp(-d);
    return Jl - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = Gc(Math.pow(c, 2), i);
    return (-o(c) + Jl > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Jl + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = PD(o, a, s);
  if (e = vn(e), isNaN(l))
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
const ED = 12;
function PD(e, t, r) {
  let n = r;
  for (let o = 1; o < ED; o++)
    n = n - e(n) / t(n);
  return n;
}
function Gc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const TD = ["duration", "bounce"], AD = ["stiffness", "damping", "mass"];
function Wp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function OD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Wp(e, AD) && Wp(e, TD)) {
    const r = kD(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Ng({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = OD(n), p = u ? -Zr(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, v = Zr(Math.sqrt(s / c)), b = Math.abs(h) < 5;
  r || (r = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (m < 1) {
    const S = Gc(v, m);
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
        S !== 0 && (m < 1 ? w = Fg(y, S, k) : w = 0);
        const M = Math.abs(w) <= r, P = Math.abs(a - k) <= t;
        i.done = M && P;
      }
      return i.value = i.done ? a : k, i;
    }
  };
}
function Up({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
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
    p(f.value) && (w = I, M = Ng({
      keyframes: [f.value, m(f.value)],
      velocity: Fg(S, I, f.value),
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
const RD = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => tt.update(t, !0),
    stop: () => rn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => it.isProcessing ? it.timestamp : performance.now()
  };
}, Hp = 2e4;
function Yp(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Hp; )
    t += r, n = e.next(t);
  return t >= Hp ? 1 / 0 : t;
}
const $D = {
  decay: Up,
  inertia: Up,
  tween: bs,
  keyframes: bs,
  spring: Ng
};
function ys({ autoplay: e = !0, delay: t = 0, driver: r = RD, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, v;
  const b = () => {
    h && h(), v = new Promise((N) => {
      h = N;
    });
  };
  b();
  let y;
  const S = $D[o] || bs;
  let k;
  S !== bs && typeof n[0] != "number" && (k = Mg([0, 100], n, {
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
  w.calculatedDuration === null && a && (w.calculatedDuration = Yp(w));
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
      let Se = yn(0, 1, ae);
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
      return Zr(Q);
    },
    set time(N) {
      N = vn(N), Q = N, I !== null || !y || p === 0 ? I = N : z = y.now() - N / p;
    },
    get duration() {
      const N = w.calculatedDuration === null ? Yp(w) : w.calculatedDuration;
      return Zr(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !y || (p = N, F.time = Zr(Q));
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
const DD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ki = 10, MD = 2e4, ID = (e, t) => t.type === "spring" || e === "backgroundColor" || !pg(t.ease);
function FD(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(vg.waapi() && DD.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (ID(t, o)) {
    const b = ys({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: u[0] };
    const S = [];
    let k = 0;
    for (; !y.done && k < MD; )
      y = b.sample(k), S.push(y.value), k += ki;
    p = void 0, u = S, d = k - ki, f = "linear";
  }
  const m = X2(e.owner.current, t, u, {
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
    e.set(K2(u, o)), n && n(), v();
  }, {
    then(b, y) {
      return l.then(b, y);
    },
    get time() {
      return Zr(m.currentTime || 0);
    },
    set time(b) {
      m.currentTime = vn(b);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(b) {
      m.playbackRate = b;
    },
    get duration() {
      return Zr(d);
    },
    play: () => {
      i || (m.play(), rn(h));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: b } = m;
      if (b) {
        const y = ys({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(b - ki).value, y.sample(b).value, ki);
      }
      v();
    },
    complete: () => m.finish(),
    cancel: v
  };
}
function ND({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: bt,
    pause: bt,
    stop: bt,
    then: (a) => (a(), Promise.resolve()),
    cancel: bt,
    complete: bt
  });
  return t ? ys({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const jD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, BD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), zD = {
  type: "keyframes",
  duration: 0.8
}, VD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, LD = (e, { keyframes: t }) => t.length > 2 ? zD : Yn.has(e) ? e.startsWith("scale") ? BD(t[1]) : jD : VD, Xc = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(xn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), WD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function UD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Gs) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = WD.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const HD = /([a-z-]*)\(.*?\)/g, Kc = {
  ...xn,
  getAnimatableNone: (e) => {
    const t = e.match(HD);
    return t ? t.map(UD).join(" ") : e;
  }
}, YD = {
  ...Xv,
  // Color props
  color: Rt,
  backgroundColor: Rt,
  outlineColor: Rt,
  fill: Rt,
  stroke: Rt,
  // Border props
  borderColor: Rt,
  borderTopColor: Rt,
  borderRightColor: Rt,
  borderBottomColor: Rt,
  borderLeftColor: Rt,
  filter: Kc,
  WebkitFilter: Kc
}, cd = (e) => YD[e];
function jg(e, t) {
  let r = cd(e);
  return r !== Kc && (r = xn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Bg = (e) => /^0[^.\s]+$/.test(e);
function qD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Bg(e);
}
function GD(e, t, r, n) {
  const o = Xc(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), qD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = jg(t, s);
    }
  return a;
}
function XD({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function zg(e, t) {
  return e[t] || e.default || e;
}
const ud = (e, t, r, n = {}) => (o) => {
  const a = zg(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - vn(i);
  const l = GD(t, e, r, a), c = l[0], u = l[l.length - 1], d = Xc(e, c), f = Xc(e, u);
  ei(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
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
  if (XD(a) || (p = {
    ...p,
    ...LD(e, p)
  }), p.duration && (p.duration = vn(p.duration)), p.repeatDelay && (p.repeatDelay = vn(p.repeatDelay)), !d || !f || G2.current || a.type === !1)
    return ND(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = FD(t, e, p);
    if (m)
      return m;
  }
  return ys(p);
};
function xs(e) {
  return !!(Ht(e) && e.add);
}
const KD = (e) => /^\-?\d*\.?\d+$/.test(e);
function dd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fd(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class pd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dd(this.subscriptions, t), () => fd(this.subscriptions, t);
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
const qp = /* @__PURE__ */ new Set();
function hd(e, t, r) {
  e || qp.has(t) || (console.warn(t), r && console.warn(r), qp.add(t));
}
const ZD = (e) => !isNaN(parseFloat(e));
class JD {
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
      const { delta: a, timestamp: i } = it;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, tt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => tt.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = ZD(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && hd(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new pd());
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
      Ig(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Po(e, t) {
  return new JD(e, t);
}
const Vg = (e) => (t) => t.test(e), QD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Lg = [qn, fe, Ir, dn, s2, i2, QD], Go = (e) => Lg.find(Vg(e)), eM = [...Lg, Rt, xn], tM = (e) => eM.find(Vg(e));
function rM(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Po(r));
}
function nM(e, t) {
  const r = Zs(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = S2(a[i]);
    rM(e, i, s);
  }
}
function oM(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (KD(u) || Bg(u)) ? u = parseFloat(u) : !tM(u) && xn.test(c) && (u = jg(l, c)), e.addValue(l, Po(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function aM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function iM(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = aM(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function sM({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Wg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && sM(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[q2];
      v && (m.elapsed = window.HandoffAppearAnimations(v, d, f, tt));
    }
    f.start(ud(d, f, p, e.shouldReduceMotion && Yn.has(d) ? { type: !1 } : m));
    const h = f.animation;
    xs(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && nM(e, i);
  }), c;
}
function Zc(e, t, r = {}) {
  const n = Zs(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(Wg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return lM(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function lM(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(cM).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Zc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function cM(e, t) {
  return e.sortNodePosition(t);
}
function uM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Zc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Zc(e, t, r);
  else {
    const o = typeof t == "function" ? Zs(e, t, r.custom) : t;
    n = Promise.all(Wg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const dM = [...Xu].reverse(), fM = Xu.length;
function pM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => uM(e, r, n)));
}
function hM(e) {
  let t = pM(e);
  const r = vM();
  let n = !0;
  const o = (l, c) => {
    const u = Zs(e, c);
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
    for (let b = 0; b < fM; b++) {
      const y = dM[b], S = r[y], k = u[y] !== void 0 ? u[y] : d[y], w = Fa(k), M = y === c ? S.isActive : null;
      M === !1 && (h = b);
      let P = k === d[y] && k !== u[y] && w;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), S.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !k && !S.prevProp || // Or if the prop doesn't define an animation
      Ys(k) || typeof k == "boolean")
        continue;
      const I = mM(S.prevProp, k);
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
        m.hasOwnProperty(ee) || (oe !== D ? vs(oe) && vs(D) ? !dg(oe, D) || I ? Q(ee) : S.protectedKeys[ee] = !0 : oe !== void 0 ? Q(ee) : p.add(ee) : oe !== void 0 && p.has(ee) ? Q(ee) : S.protectedKeys[ee] = !0);
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
function mM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dg(t, e) : !1;
}
function Tn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function vM() {
  return {
    animate: Tn(!0),
    whileInView: Tn(),
    whileHover: Tn(),
    whileTap: Tn(),
    whileDrag: Tn(),
    whileFocus: Tn(),
    exit: Tn()
  };
}
class gM extends wn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = hM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ys(t) && (this.unmount = t.subscribe(this.node));
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
let bM = 0;
class yM extends wn {
  constructor() {
    super(...arguments), this.id = bM++;
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
const xM = {
  animation: {
    Feature: gM
  },
  exit: {
    Feature: yM
  }
}, Gp = (e, t) => Math.abs(e - t);
function SM(e, t) {
  const r = Gp(e.x, t.x), n = Gp(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Ug {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = ec(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = SM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = it;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Ql(u, this.transformPagePoint), tt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = ec(c.type === "pointercancel" ? this.lastMoveEventInfo : Ql(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !ag(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Xs(t), a = Ql(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = it;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, ec(a, this.history)), this.removeListeners = mn(Kr(window, "pointermove", this.handlePointerMove), Kr(window, "pointerup", this.handlePointerUp), Kr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), rn(this.updatePoint);
  }
}
function Ql(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ec({ point: e }, t) {
  return {
    point: e,
    delta: Xp(e, Hg(t)),
    offset: Xp(e, wM(t)),
    velocity: CM(t, 0.1)
  };
}
function wM(e) {
  return e[0];
}
function Hg(e) {
  return e[e.length - 1];
}
function CM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Hg(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > vn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Zr(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Jt(e) {
  return e.max - e.min;
}
function Jc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Kp(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = st(t.min, t.max, e.origin), e.scale = Jt(r) / Jt(t), (Jc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = st(r.min, r.max, e.origin) - e.originPoint, (Jc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ma(e, t, r, n) {
  Kp(e.x, t.x, r.x, n ? n.originX : void 0), Kp(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Zp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Jt(t);
}
function _M(e, t, r) {
  Zp(e.x, t.x, r.x), Zp(e.y, t.y, r.y);
}
function Jp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Jt(t);
}
function va(e, t, r) {
  Jp(e.x, t.x, r.x), Jp(e.y, t.y, r.y);
}
function kM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? st(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? st(r, e, n.max) : Math.min(e, r)), e;
}
function Qp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function EM(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Qp(e.x, r, o),
    y: Qp(e.y, t, n)
  };
}
function eh(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function PM(e, t) {
  return {
    x: eh(e.x, t.x),
    y: eh(e.y, t.y)
  };
}
function TM(e, t) {
  let r = 0.5;
  const n = Jt(e), o = Jt(t);
  return o > n ? r = Ba(t.min, t.max - n, e.min) : n > o && (r = Ba(e.min, e.max - o, t.min)), yn(0, 1, r);
}
function AM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Qc = 0.35;
function OM(e = Qc) {
  return e === !1 ? e = 0 : e === !0 && (e = Qc), {
    x: th(e, "left", "right"),
    y: th(e, "top", "bottom")
  };
}
function th(e, t, r) {
  return {
    min: rh(e, t),
    max: rh(e, r)
  };
}
function rh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const nh = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), so = () => ({
  x: nh(),
  y: nh()
}), oh = () => ({ min: 0, max: 0 }), mt = () => ({
  x: oh(),
  y: oh()
});
function Ar(e) {
  return [e("x"), e("y")];
}
function Yg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function RM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $M(e, t) {
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
function tc(e) {
  return e === void 0 || e === 1;
}
function eu({ scale: e, scaleX: t, scaleY: r }) {
  return !tc(e) || !tc(t) || !tc(r);
}
function On(e) {
  return eu(e) || qg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function qg(e) {
  return ah(e.x) || ah(e.y);
}
function ah(e) {
  return e && e !== "0%";
}
function Ss(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function ih(e, t, r, n, o) {
  return o !== void 0 && (e = Ss(e, o, n)), Ss(e, r, n) + t;
}
function tu(e, t = 0, r = 1, n, o) {
  e.min = ih(e.min, t, r, n, o), e.max = ih(e.max, t, r, n, o);
}
function Gg(e, { x: t, y: r }) {
  tu(e.x, t.translate, t.scale, t.originPoint), tu(e.y, r.translate, r.scale, r.originPoint);
}
function DM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && lo(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Gg(e, i)), n && On(a.latestValues) && lo(e, a.latestValues));
  }
  t.x = sh(t.x), t.y = sh(t.y);
}
function sh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function fn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function lh(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = st(e.min, e.max, a);
  tu(e, t[r], t[n], i, t.scale);
}
const MM = ["x", "scaleX", "originX"], IM = ["y", "scaleY", "originY"];
function lo(e, t) {
  lh(e.x, t, MM), lh(e.y, t, IM);
}
function Xg(e, t) {
  return Yg($M(e.getBoundingClientRect(), t));
}
function FM(e, t, r) {
  const n = Xg(e, r), { scroll: o } = t;
  return o && (fn(n.x, o.offset.x), fn(n.y, o.offset.y)), n;
}
const NM = /* @__PURE__ */ new WeakMap();
class jM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = mt(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Xs(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = sg(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ar((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if (Ir.test(h)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const b = v.layout.layoutBox[m];
            b && (h = Jt(b) * (parseFloat(h) / 100));
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
        this.currentDirection = BM(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Ug(t, {
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
    if (!n || !Ei(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = kM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && ao(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = EM(n.layoutBox, t) : this.constraints = !1, this.elastic = OM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Ar((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = AM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ao(t))
      return !1;
    const n = t.current;
    wr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = FM(n, o.root, this.visualElement.getTransformPagePoint());
    let i = PM(o.layout.layoutBox, a);
    if (r) {
      const s = r(RM(i));
      this.hasMutatedConstraints = !!s, s && (i = Yg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Ar((u) => {
      if (!Ei(u, r, this.currentDirection))
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
    return n.start(ud(t, n, 0, r));
  }
  stopAnimation() {
    Ar((t) => this.getAxisMotionValue(t).stop());
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
    Ar((r) => {
      const { drag: n } = this.getProps();
      if (!Ei(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - st(i, s, 0.5));
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
    if (!ao(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Ar((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = TM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Ar((i) => {
      if (!Ei(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(st(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    NM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Kr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ao(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Gr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Ar((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Qc, dragMomentum: s = !0 } = t;
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
function Ei(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function BM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class zM extends wn {
  constructor(t) {
    super(t), this.removeGroupControls = bt, this.removeListeners = bt, this.controls = new jM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || bt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ch = (e) => (t, r) => {
  e && tt.update(() => e(t, r));
};
class VM extends wn {
  constructor() {
    super(...arguments), this.removePointerDownListener = bt;
  }
  onPointerDown(t) {
    this.session = new Ug(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: ch(t),
      onStart: ch(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && tt.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Kr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Kg() {
  const e = ft(Ka);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = _r();
  return Fe(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function BV() {
  return LM(ft(Ka));
}
function LM(e) {
  return e === null ? !0 : e.isPresent;
}
const Xi = {
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
function uh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Xo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = uh(e, t.target.x), n = uh(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, WM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = xn.parse(e);
    if (o.length > 5)
      return n;
    const a = xn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = st(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class UM extends Mt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    Q$(HM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), Xi.hasEverUpdated = !0;
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
function Zg(e) {
  const [t, r] = Kg(), n = ft(Zu);
  return Mt.createElement(UM, { ...e, layoutGroup: n, switchLayoutGroup: ft(Uv), isPresent: t, safeToRemove: r });
}
const HM = {
  borderRadius: {
    ...Xo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Xo,
  borderTopRightRadius: Xo,
  borderBottomLeftRadius: Xo,
  borderBottomRightRadius: Xo,
  boxShadow: WM
}, Jg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], YM = Jg.length, dh = (e) => typeof e == "string" ? parseFloat(e) : e, fh = (e) => typeof e == "number" || fe.test(e);
function qM(e, t, r, n, o, a) {
  o ? (e.opacity = st(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    GM(n)
  ), e.opacityExit = st(t.opacity !== void 0 ? t.opacity : 1, 0, XM(n))) : a && (e.opacity = st(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < YM; i++) {
    const s = `border${Jg[i]}Radius`;
    let l = ph(t, s), c = ph(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || fh(l) === fh(c) ? (e[s] = Math.max(st(dh(l), dh(c), n), 0), (Ir.test(c) || Ir.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = st(t.rotate || 0, r.rotate || 0, n));
}
function ph(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const GM = Qg(0, 0.5, id), XM = Qg(0.5, 0.95, bt);
function Qg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ba(e, t, n));
}
function hh(e, t) {
  e.min = t.min, e.max = t.max;
}
function rr(e, t) {
  hh(e.x, t.x), hh(e.y, t.y);
}
function mh(e, t, r, n, o) {
  return e -= t, e = Ss(e, 1 / r, n), o !== void 0 && (e = Ss(e, 1 / o, n)), e;
}
function KM(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Ir.test(t) && (t = parseFloat(t), t = st(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = st(a.min, a.max, n);
  e === a && (s -= t), e.min = mh(e.min, t, r, s, o), e.max = mh(e.max, t, r, s, o);
}
function vh(e, t, [r, n, o], a, i) {
  KM(e, t[r], t[n], t[o], t.scale, a, i);
}
const ZM = ["x", "scaleX", "originX"], JM = ["y", "scaleY", "originY"];
function gh(e, t, r, n) {
  vh(e.x, t, ZM, r ? r.x : void 0, n ? n.x : void 0), vh(e.y, t, JM, r ? r.y : void 0, n ? n.y : void 0);
}
function bh(e) {
  return e.translate === 0 && e.scale === 1;
}
function eb(e) {
  return bh(e.x) && bh(e.y);
}
function ru(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function yh(e) {
  return Jt(e.x) / Jt(e.y);
}
class QM {
  constructor() {
    this.members = [];
  }
  add(t) {
    dd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (fd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function xh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const eI = (e, t) => e.depth - t.depth;
class tI {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    dd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    fd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(eI), this.isDirty = !1, this.children.forEach(t);
  }
}
function rI(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (rn(n), e(a - t));
  };
  return tt.read(n, !0), () => rn(n);
}
function nI(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function oI(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function aI(e, t, r) {
  const n = Ht(e) ? e : Po(e);
  return n.start(ud("", n, t, r)), n.animation;
}
const Sh = ["", "X", "Y", "Z"], wh = 1e3;
let iI = 0;
const Rn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function tb({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = iI++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Rn.totalNodes = Rn.resolvedTargetDeltas = Rn.recalculatedProjection = 0, this.nodes.forEach(cI), this.nodes.forEach(hI), this.nodes.forEach(mI), this.nodes.forEach(uI), nI(Rn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tI());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new pd()), this.eventHandlers.get(i).add(s);
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
      this.isSVG = oI(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = rI(f, 250), Xi.hasAnimatedSinceResize && (Xi.hasAnimatedSinceResize = !1, this.nodes.forEach(_h));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || xI, { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !ru(this.targetLayout, m) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const k = {
            ...zg(h, "layout"),
            onPlay: v,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || _h(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, rn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(vI), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ch);
        return;
      }
      this.isUpdating || this.nodes.forEach(fI), this.isUpdating = !1, this.nodes.forEach(pI), this.nodes.forEach(sI), this.nodes.forEach(lI), this.clearAllSnapshots();
      const s = performance.now();
      it.delta = yn(0, 1e3 / 60, s - it.timestamp), it.timestamp = s, it.isProcessing = !0, go.update.process(it), go.preRender.process(it), go.render.process(it), it.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(dI), this.sharedNodes.forEach(gI);
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
      this.layout = this.measure(!1), this.layoutCorrected = mt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !eb(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || On(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), SI(l), {
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
        return mt();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (fn(s.x, l.offset.x), fn(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = mt();
      rr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            rr(s, i);
            const { scroll: f } = this.root;
            f && (fn(s.x, -f.offset.x), fn(s.y, -f.offset.y));
          }
          fn(s.x, u.offset.x), fn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = mt();
      rr(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && lo(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), On(u.latestValues) && lo(l, u.latestValues);
      }
      return On(this.latestValues) && lo(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = mt();
      rr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !On(c.latestValues))
          continue;
        eu(c.latestValues) && c.updateSnapshot();
        const u = mt(), d = c.measurePageBox();
        rr(u, d), gh(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return On(this.latestValues) && gh(s, this.latestValues), s;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== it.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = it.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), va(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), rr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = mt(), this.targetWithTransforms = mt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), _M(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rr(this.target, this.layout.layoutBox), Gg(this.target, this.targetDelta)) : rr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), va(this.relativeTargetOrigin, this.target, p.target), rr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || eu(this.parent.latestValues) || qg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === it.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      rr(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      DM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = so(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = so(), this.projectionDeltaWithTransform = so());
      const h = this.projectionTransform;
      ma(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = xh(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Rn.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = so();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = mt(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, v = this.getStack(), b = !v || v.members.length <= 1, y = !!(h && !b && this.options.crossfade === !0 && !this.path.some(yI));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (k) => {
        const w = k / 1e3;
        kh(d.x, i.x, w), kh(d.y, i.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (va(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), bI(this.relativeTarget, this.relativeTargetOrigin, f, w), S && ru(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = mt()), rr(S, this.relativeTarget)), h && (this.animationValues = u, qM(u, c, this.latestValues, w, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (rn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.update(() => {
        Xi.hasAnimatedSinceResize = !0, this.currentAnimation = aI(0, wh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(wh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && rb(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || mt();
          const d = Jt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Jt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        rr(s, l), lo(s, u), ma(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new QM()), this.sharedNodes.get(i).add(s);
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
      for (let u = 0; u < Sh.length; u++) {
        const d = "rotate" + Sh[u];
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Gi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Gi(i.pointerEvents) || ""), this.hasProjected && !On(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = xh(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in hs) {
        if (f[h] === void 0)
          continue;
        const { correct: v, applyTo: b } = hs[h], y = c.transform === "none" ? f[h] : v(f[h], d);
        if (b) {
          const S = b.length;
          for (let k = 0; k < S; k++)
            c[b[k]] = y;
        } else
          c[h] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Gi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Ch), this.root.sharedNodes.clear();
    }
  };
}
function sI(e) {
  e.updateLayout();
}
function lI(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? Ar((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Jt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : rb(a, r.layoutBox, n) && Ar((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Jt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = so();
    ma(s, n, r.layoutBox);
    const l = so();
    i ? ma(l, e.applyTransform(o, !0), r.measuredBox) : ma(l, n, r.layoutBox);
    const c = !eb(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = mt();
          va(m, r.layoutBox, f.layoutBox);
          const h = mt();
          va(h, n, p.layoutBox), ru(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function cI(e) {
  Rn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dI(e) {
  e.clearSnapshot();
}
function Ch(e) {
  e.clearMeasurements();
}
function fI(e) {
  e.isLayoutDirty = !1;
}
function pI(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function _h(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function hI(e) {
  e.resolveTargetDelta();
}
function mI(e) {
  e.calcProjection();
}
function vI(e) {
  e.resetRotation();
}
function gI(e) {
  e.removeLeadSnapshot();
}
function kh(e, t, r) {
  e.translate = st(t.translate, 0, r), e.scale = st(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Eh(e, t, r, n) {
  e.min = st(t.min, r.min, n), e.max = st(t.max, r.max, n);
}
function bI(e, t, r, n) {
  Eh(e.x, t.x, r.x, n), Eh(e.y, t.y, r.y, n);
}
function yI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xI = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Ph(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function SI(e) {
  Ph(e.x), Ph(e.y);
}
function rb(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Jc(yh(t), yh(r), 0.2);
}
const wI = tb({
  attachResizeListener: (e, t) => Gr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), rc = {
  current: void 0
}, nb = tb({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!rc.current) {
      const e = new wI({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), rc.current = e;
    }
    return rc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), CI = {
  pan: {
    Feature: VM
  },
  drag: {
    Feature: zM,
    ProjectionNode: nb,
    MeasureLayout: Zg
  }
}, _I = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function kI(e) {
  const t = _I.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const EI = 4;
function nu(e, t, r = 1) {
  wr(r <= EI, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = kI(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : Uc(o) ? nu(o, t, r + 1) : o;
}
function PI(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!Uc(a))
      return;
    const i = nu(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!Uc(a))
      continue;
    const i = nu(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const TI = /* @__PURE__ */ new Set([
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
]), ob = (e) => TI.has(e), AI = (e) => Object.keys(e).some(ob), Pi = (e) => e === qn || e === fe, Th = (e, t) => parseFloat(e.split(", ")[t]), Ah = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Th(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? Th(a[1], e) : 0;
  }
}, OI = /* @__PURE__ */ new Set(["x", "y", "z"]), RI = Za.filter((e) => !OI.has(e));
function $I(e) {
  const t = [];
  return RI.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Oh = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Ah(4, 13),
  y: Ah(5, 14)
}, DI = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = Oh[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = Oh[c](l, a);
  }), e;
}, MI = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(ob);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Go(u);
    const f = t[l];
    let p;
    if (vs(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Go(u);
      for (let v = h; v < m && f[v] !== null; v++)
        p ? wr(Go(f[v]) === p, "All keyframes must be of the same type") : (p = Go(f[v]), wr(p === d || Pi(d) && Pi(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Go(f);
    if (d !== p)
      if (Pi(d) && Pi(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === fe && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = $I(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = DI(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Hs && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function II(e, t, r, n) {
  return AI(t) ? MI(e, t, r, n) : { target: t, transitionEnd: n };
}
const FI = (e, t, r, n) => {
  const o = PI(e, t, n);
  return t = o.target, n = o.transitionEnd, II(e, t, r, n);
}, ou = { current: null }, ab = { current: !1 };
function NI() {
  if (ab.current = !0, !!Hs)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => ou.current = e.matches;
      e.addListener(t), t();
    } else
      ou.current = !1;
}
function jI(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Ht(a))
      e.addValue(o, a), xs(n) && n.add(o), process.env.NODE_ENV === "development" && hd(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Ht(i))
      e.addValue(o, Po(a, { owner: e })), xs(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Po(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Rh = /* @__PURE__ */ new WeakMap(), ib = Object.keys(Na), BI = ib.length, $h = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], zI = Ku.length;
class VI {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => tt.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = qs(r), this.isVariantNode = Wv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Ht(f) && (f.set(s[d], !1), xs(c) && c.add(d));
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
    this.current = t, Rh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), ab.current || NI(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ou.current, process.env.NODE_ENV !== "production" && hd(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Rh.delete(this.current), this.projection && this.projection.unmount(), rn(this.notifyUpdate), rn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Yn.has(t), o = r.on("change", (i) => {
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
      r.ignoreStrict ? ei(!1, l) : wr(!1, l);
    }
    for (let l = 0; l < BI; l++) {
      const c = ib[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = Na[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && ao(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : mt();
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
    for (let n = 0; n < $h.length; n++) {
      const o = $h[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = jI(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < zI; n++) {
      const o = Ku[n], a = this.props[o];
      (Fa(a) || a === !1) && (r[o] = a);
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
    return n === void 0 && r !== void 0 && (n = Po(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = ad(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Ht(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new pd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class sb extends VI {
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
    let i = iM(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      oM(this, n, i);
      const s = FI(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function LI(e) {
  return window.getComputedStyle(e);
}
class WI extends sb {
  readValueFromInstance(t, r) {
    if (Yn.has(r)) {
      const n = cd(r);
      return n && n.default || 0;
    } else {
      const n = LI(t), o = (qv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Xg(t, r);
  }
  build(t, r, n, o) {
    Qu(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return od(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ht(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Qv(t, r, n, o);
  }
}
class UI extends sb {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Yn.has(r)) {
      const n = cd(r);
      return n && n.default || 0;
    }
    return r = eg.has(r) ? r : nd(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return mt();
  }
  scrapeMotionValuesFromProps(t, r) {
    return rg(t, r);
  }
  build(t, r, n, o) {
    td(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    tg(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = rd(t.tagName), super.mount(t);
  }
}
const HI = (e, t) => Ju(e) ? new UI(t, { enableHardwareAcceleration: !1 }) : new WI(t, { enableHardwareAcceleration: !0 }), YI = {
  layout: {
    ProjectionNode: nb,
    MeasureLayout: Zg
  }
}, qI = {
  ...xM,
  ...W2,
  ...CI,
  ...YI
}, Cn = /* @__PURE__ */ Z$((e, t) => E2(e, t, qI, HI));
function lb() {
  const e = be(!1);
  return ps(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function GI() {
  const e = lb(), [t, r] = Ye(0), n = q(() => {
    e.current && r(t + 1);
  }, [t]);
  return [q(() => tt.postRender(n), [n]), t];
}
class XI extends U.Component {
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
function KI({ children: e, isPresent: t }) {
  const r = _r(), n = be(null), o = be({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return mm(() => {
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
  }, [t]), U.createElement(XI, { isPresent: t, childRef: n, sizeRef: o }, U.cloneElement(e, { ref: n }));
}
const nc = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = ng(ZI), l = _r(), c = gt(
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
  return gt(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), U.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = U.createElement(KI, { isPresent: r }, e)), U.createElement(Ka.Provider, { value: c }, e);
};
function ZI() {
  return /* @__PURE__ */ new Map();
}
function JI(e) {
  return Fe(() => () => e(), []);
}
const to = (e) => e.key || "";
function QI(e, t) {
  e.forEach((r) => {
    const n = to(r);
    t.set(n, r);
  });
}
function eF(e) {
  const t = [];
  return As.forEach(e, (r) => {
    Su(r) && t.push(r);
  }), t;
}
const No = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  wr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = ft(Zu).forceRender || GI()[0], l = lb(), c = eF(e);
  let u = c;
  const d = be(/* @__PURE__ */ new Map()).current, f = be(u), p = be(/* @__PURE__ */ new Map()).current, m = be(!0);
  if (ps(() => {
    m.current = !1, QI(c, p), f.current = u;
  }), JI(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return U.createElement(U.Fragment, null, u.map((y) => U.createElement(nc, { key: to(y), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, y)));
  u = [...u];
  const h = f.current.map(to), v = c.map(to), b = h.length;
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
      M = U.createElement(nc, { key: to(k), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: a, mode: i }, k), d.set(S, M);
    }
    u.splice(w, 0, M);
  }), u = u.map((y) => {
    const S = y.key;
    return d.has(S) ? y : U.createElement(nc, { key: to(y), isPresent: !0, presenceAffectsLayout: a, mode: i }, y);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), U.createElement(U.Fragment, null, d.size ? u : u.map((y) => Ua(y)));
};
var Dh = {
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
}, Js = _e((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = Xe("chakra-icon", s), d = Mo("Icon", e), f = {
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
  }, m = n ?? Dh.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ L.jsx(ge.svg, { as: r, ...p, ...c });
  const h = i ?? Dh.path;
  return /* @__PURE__ */ L.jsx(ge.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
Js.displayName = "Icon";
var VV = Js, tF = a_({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), rF = _e((e, t) => {
  const r = Mo("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = jr(e), c = Xe("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${tF} ${a} linear infinite`,
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
rF.displayName = "Spinner";
function nF(e) {
  return /* @__PURE__ */ L.jsx(Js, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ L.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var cb = _e(
  function(t, r) {
    const n = Mo("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = jr(t), l = {
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
        children: o || /* @__PURE__ */ L.jsx(nF, { width: "1em", height: "1em" })
      }
    );
  }
);
cb.displayName = "CloseButton";
var oF = Object.defineProperty, aF = (e, t, r) => t in e ? oF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ut = (e, t, r) => (aF(e, typeof t != "symbol" ? t + "" : t, r), r);
function Mh(e) {
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
var iF = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Ih(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Fh(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var au = typeof window < "u" ? Ts : Fe, ws = (e) => e, sF = class {
  constructor() {
    ut(this, "descendants", /* @__PURE__ */ new Map()), ut(this, "register", (e) => {
      if (e != null)
        return iF(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), ut(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = Mh(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), ut(this, "destroy", () => {
      this.descendants.clear();
    }), ut(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), ut(this, "count", () => this.descendants.size), ut(this, "enabledCount", () => this.enabledValues().length), ut(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), ut(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), ut(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), ut(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), ut(this, "first", () => this.item(0)), ut(this, "firstEnabled", () => this.enabledItem(0)), ut(this, "last", () => this.item(this.descendants.size - 1)), ut(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), ut(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), ut(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), ut(this, "next", (e, t = !0) => {
      const r = Ih(e, this.count(), t);
      return this.item(r);
    }), ut(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Ih(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), ut(this, "prev", (e, t = !0) => {
      const r = Fh(e, this.count() - 1, t);
      return this.item(r);
    }), ut(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Fh(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), ut(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = Mh(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function lF(e, t) {
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
function St(...e) {
  return (t) => {
    e.forEach((r) => {
      lF(r, t);
    });
  };
}
function LV(...e) {
  return gt(() => St(...e), e);
}
function cF() {
  const e = be(new sF());
  return au(() => () => e.current.destroy()), e.current;
}
var [uF, ub] = Ft({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function dF(e) {
  const t = ub(), [r, n] = Ye(-1), o = be(null);
  au(() => () => {
    o.current && t.unregister(o.current);
  }, []), au(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = ws(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: St(a, o)
  };
}
function fF() {
  return [
    ws(uF),
    () => ws(ub()),
    () => cF(),
    (o) => dF(o)
  ];
}
function md(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = Zt(n), i = Zt(o), [s, l] = Ye(r), c = t !== void 0, u = c ? t : s, d = Zt(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var iu = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ko = {
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
function su(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ko.slideRight;
    case "left":
      return Ko.slideLeft;
    case "bottom":
      return Ko.slideDown;
    case "top":
      return Ko.slideUp;
    default:
      return Ko.slideRight;
  }
}
var zn = {
  enter: {
    duration: 0.2,
    ease: iu.easeOut
  },
  exit: {
    duration: 0.1,
    ease: iu.easeIn
  }
}, Jr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, pF = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Jr.enter(zn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : Jr.exit(zn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, db = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: pF
}, hF = At(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ L.jsx(No, { custom: f, children: d && /* @__PURE__ */ L.jsx(
    Cn.div,
    {
      ref: r,
      className: Xe("chakra-fade", a),
      custom: f,
      ...db,
      animate: u,
      ...c
    }
  ) });
});
hF.displayName = "Fade";
var mF = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Jr.exit(zn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : Jr.enter(zn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, fb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: mF
}, vF = At(
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
    return /* @__PURE__ */ L.jsx(No, { custom: m, children: f && /* @__PURE__ */ L.jsx(
      Cn.div,
      {
        ref: r,
        className: Xe("chakra-offset-slide", s),
        ...fb,
        animate: p,
        custom: m,
        ...d
      }
    ) });
  }
);
vF.displayName = "ScaleFade";
var gF = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Jr.exit(zn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Jr.enter(zn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : Jr.exit(zn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, lu = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: gF
}, bF = At(
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
    return /* @__PURE__ */ L.jsx(No, { custom: h, children: p && /* @__PURE__ */ L.jsx(
      Cn.div,
      {
        ref: r,
        className: Xe("chakra-offset-slide", i),
        custom: h,
        ...lu,
        animate: m,
        ...f
      }
    ) });
  }
);
bF.displayName = "SlideFade";
var Nh = {
  exit: {
    duration: 0.15,
    ease: iu.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, yF = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = su({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Jr.exit(Nh.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = su({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Jr.enter(Nh.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, pb = At(function(t, r) {
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
  } = t, p = su({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, v = i || a ? "enter" : "exit", b = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ L.jsx(No, { custom: b, children: h && /* @__PURE__ */ L.jsx(
    Cn.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: Xe("chakra-slide", s),
      animate: v,
      exit: "exit",
      custom: b,
      variants: yF,
      style: m,
      ...d
    }
  ) });
});
pb.displayName = "Slide";
function hb(e) {
  return As.toArray(e).filter(
    (t) => Su(t)
  );
}
var [xF, mb] = Ft({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [SF, jo] = Ft({
  strict: !1,
  name: "FormControlContext"
});
function wF(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = _r(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [f, p] = Ye(!1), [m, h] = Ye(!1), [v, b] = Ye(!1), y = q(
    (P = {}, I = null) => ({
      id: d,
      ...P,
      ref: St(I, (z) => {
        z && h(!0);
      })
    }),
    [d]
  ), S = q(
    (P = {}, I = null) => ({
      ...P,
      ref: I,
      "data-focus": ro(v),
      "data-disabled": ro(o),
      "data-invalid": ro(n),
      "data-readonly": ro(a),
      id: P.id !== void 0 ? P.id : c,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, v, n, a, c]
  ), k = q(
    (P = {}, I = null) => ({
      id: u,
      ...P,
      ref: St(I, (z) => {
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
var CF = _e(
  function(t, r) {
    const n = Io("Form", t), o = jr(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = wF(o), l = Xe("chakra-form-control", t.className);
    return /* @__PURE__ */ L.jsx(SF, { value: s, children: /* @__PURE__ */ L.jsx(xF, { value: n, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
CF.displayName = "FormControl";
var _F = _e(
  function(t, r) {
    const n = jo(), o = mb(), a = Xe("chakra-form__helper-text", t.className);
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
_F.displayName = "FormHelperText";
var [kF, EF] = Ft({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), PF = _e(
  (e, t) => {
    const r = Io("FormError", e), n = jr(e), o = jo();
    return o != null && o.isInvalid ? /* @__PURE__ */ L.jsx(kF, { value: r, children: /* @__PURE__ */ L.jsx(
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
PF.displayName = "FormErrorMessage";
var TF = _e((e, t) => {
  const r = EF(), n = jo();
  if (!(n != null && n.isInvalid))
    return null;
  const o = Xe("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ L.jsx(
    Js,
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
TF.displayName = "FormErrorIcon";
var AF = _e(function(t, r) {
  var n;
  const o = Mo("FormLabel", t), a = jr(t), {
    className: i,
    children: s,
    requiredIndicator: l = /* @__PURE__ */ L.jsx(vb, {}),
    optionalIndicator: c = null,
    ...u
  } = a, d = jo(), f = (n = d == null ? void 0 : d.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
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
AF.displayName = "FormLabel";
var vb = _e(
  function(t, r) {
    const n = jo(), o = mb();
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
vb.displayName = "RequiredIndicator";
function WV(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...a } = OF(e);
  return {
    ...a,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": kl(r),
    "aria-required": kl(o),
    "aria-readonly": kl(n)
  };
}
function OF(e) {
  var t, r, n;
  const o = jo(), {
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
    onFocus: $t(o == null ? void 0 : o.onFocus, p),
    onBlur: $t(o == null ? void 0 : o.onBlur, m)
  };
}
function RF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function $F(e, t) {
  let r = RF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function DF(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function Cs(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function gb(e, t, r) {
  return (r - t) * e + t;
}
function cu(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = DF(r);
  return $F(n, o);
}
function ga(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function ba(e, t, r, n) {
  const o = Zt(r);
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
function MF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var uu = { exports: {} }, oc, jh;
function vd() {
  if (jh)
    return oc;
  jh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oc = e, oc;
}
var ac, Bh;
function bb() {
  return Bh || (Bh = 1, ac = Function.call.bind(Object.prototype.hasOwnProperty)), ac;
}
var ic, zh;
function IF() {
  if (zh)
    return ic;
  zh = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = vd(), r = {}, n = bb();
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
  }, ic = o, ic;
}
var sc, Vh;
function FF() {
  if (Vh)
    return sc;
  Vh = 1;
  var e = Pu, t = km(), r = vd(), n = bb(), o = IF(), a = function() {
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
  return sc = function(s, l) {
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
  }, sc;
}
var lc, Lh;
function NF() {
  if (Lh)
    return lc;
  Lh = 1;
  var e = vd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, lc = function() {
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
  }, lc;
}
if (process.env.NODE_ENV !== "production") {
  var jF = Pu, BF = !0;
  uu.exports = FF()(jF.isElement, BF);
} else
  uu.exports = NF()();
var Ge = uu.exports;
const yb = /* @__PURE__ */ Os(Ge);
var du = "data-focus-lock", xb = "data-focus-lock-disabled", zF = "data-no-focus-lock", VF = "data-autofocus-inside", LF = "data-no-autofocus";
function WF(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function UF(e, t) {
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
function Sb(e, t) {
  return UF(t || null, function(r) {
    return e.forEach(function(n) {
      return WF(n, r);
    });
  });
}
var cc = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && yb.node;
var $r = function() {
  return $r = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, $r.apply(this, arguments);
};
function wb(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function HF(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Cb(e) {
  return e;
}
function _b(e, t) {
  t === void 0 && (t = Cb);
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
function gd(e, t) {
  return t === void 0 && (t = Cb), _b(e, t);
}
function kb(e) {
  e === void 0 && (e = {});
  var t = _b(null);
  return t.options = $r({ async: !0, ssr: !1 }, e), t;
}
var Eb = function(e) {
  var t = e.sideCar, r = wb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return U.createElement(n, $r({}, r));
};
Eb.isSideCarExport = !0;
function YF(e, t) {
  return e.useMedium(t), Eb;
}
var Pb = gd({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Tb = gd(), qF = gd(), GF = kb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), XF = [], bd = /* @__PURE__ */ U.forwardRef(function(t, r) {
  var n, o = U.useState(), a = o[0], i = o[1], s = U.useRef(), l = U.useRef(!1), c = U.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, v = t.allowTextSelection, b = t.group, y = t.className, S = t.whiteList, k = t.hasPositiveIndices, w = t.shards, M = w === void 0 ? XF : w, P = t.as, I = P === void 0 ? "div" : P, z = t.lockProps, j = z === void 0 ? {} : z, X = t.sideCar, ne = t.returnFocus, J = t.focusOptions, Q = t.onActivation, ee = t.onDeactivation, oe = U.useState({}), D = oe[0], ce = U.useCallback(function() {
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
    l.current && Pb.useMedium(A);
  }, []), V = Tb.useMedium, T = U.useCallback(function(A) {
    s.current !== A && (s.current = A, i(A));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof v < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), U.useEffect(function() {
    !s.current && typeof I != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var O = Ln((n = {}, n[xb] = d && "disabled", n[du] = b, n), j), B = f !== !0, C = B && f !== "tail", H = Sb([r, T]);
  return /* @__PURE__ */ U.createElement(U.Fragment, null, B && [
    // nearest focus guard
    /* @__PURE__ */ U.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: cc
    }),
    // first tabbed element guard
    k ? /* @__PURE__ */ U.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: cc
    }) : null
  ], !d && /* @__PURE__ */ U.createElement(X, {
    id: D,
    sideCar: GF,
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
  }), /* @__PURE__ */ U.createElement(I, Ln({
    ref: H
  }, O, {
    className: y,
    onBlur: V,
    onFocus: N
  }), u), C && /* @__PURE__ */ U.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: cc
  }));
});
bd.propTypes = process.env.NODE_ENV !== "production" ? {
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
bd.defaultProps = {
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
const Ab = bd;
function KF(e, t) {
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
      P0(u, c);
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
        return /* @__PURE__ */ Mt.createElement(o, this.props);
      }, u;
    }(S0);
    return wu(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Br = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, _s = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ob = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, ZF = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, Rb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, $b = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, JF = function(e, t) {
  return !e || $b(e) || !ZF(e) && t(Rb(e));
}, Db = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = JF(t, Db.bind(void 0, e));
  return e.set(t, n), n;
}, QF = function(e, t) {
  return e && !$b(e) ? r5(e) ? t(Rb(e)) : !1 : !0;
}, Mb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = QF(t, Mb.bind(void 0, e));
  return e.set(t, n), n;
}, Ib = function(e) {
  return e.dataset;
}, e5 = function(e) {
  return e.tagName === "BUTTON";
}, Fb = function(e) {
  return e.tagName === "INPUT";
}, Nb = function(e) {
  return Fb(e) && e.type === "radio";
}, t5 = function(e) {
  return !((Fb(e) || e5(e)) && (e.type === "hidden" || e.disabled));
}, r5 = function(e) {
  var t = e.getAttribute(LF);
  return ![!0, "true", ""].includes(t);
}, yd = function(e) {
  var t;
  return !!(e && (!((t = Ib(e)) === null || t === void 0) && t.focusGuard));
}, ks = function(e) {
  return !yd(e);
}, n5 = function(e) {
  return !!e;
}, o5 = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, jb = function(e, t, r) {
  return Br(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(o5);
}, a5 = [
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
], xd = a5.join(","), i5 = "".concat(xd, ", [data-focus-guard]"), Bb = function(e, t) {
  return Br((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? i5 : xd) ? [n] : [], Bb(n));
  }, []);
}, s5 = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Qs([e.contentDocument.body], t) : [e];
}, Qs = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = Bb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return s5(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Br(n.parentNode.querySelectorAll(xd)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, l5 = function(e) {
  var t = e.querySelectorAll("[".concat(VF, "]"));
  return Br(t).map(function(r) {
    return Qs([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Sd = function(e, t) {
  return Br(e).filter(function(r) {
    return Db(t, r);
  }).filter(function(r) {
    return t5(r);
  });
}, Wh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Br(e).filter(function(r) {
    return Mb(t, r);
  });
}, fu = function(e, t, r) {
  return jb(Sd(Qs(e, r), t), !0, r);
}, Uh = function(e, t) {
  return jb(Sd(Qs(e), t), !1);
}, c5 = function(e, t) {
  return Sd(l5(e), t);
}, bo = function(e, t) {
  return e.shadowRoot ? bo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Br(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? bo(o, t) : !1;
    }
    return bo(r, t);
  });
}, u5 = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, zb = function(e) {
  return e.parentNode ? zb(e.parentNode) : e;
}, wd = function(e) {
  var t = _s(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(du);
    return r.push.apply(r, o ? u5(Br(zb(n).querySelectorAll("[".concat(du, '="').concat(o, '"]:not([').concat(xb, '="disabled"])')))) : [n]), r;
  }, []);
}, d5 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, za = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? za(t.shadowRoot) : t instanceof HTMLIFrameElement && d5(function() {
      return t.contentWindow.document;
    }) ? za(t.contentWindow.document) : t;
  }
}, f5 = function(e, t) {
  return e === t;
}, p5 = function(e, t) {
  return !!Br(e.querySelectorAll("iframe")).some(function(r) {
    return f5(r, t);
  });
}, Vb = function(e, t) {
  return t === void 0 && (t = za(Ob(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : wd(e).some(function(r) {
    return bo(r, t) || p5(r, t);
  });
}, h5 = function(e) {
  e === void 0 && (e = document);
  var t = za(e);
  return t ? Br(e.querySelectorAll("[".concat(zF, "]"))).some(function(r) {
    return bo(r, t);
  }) : !1;
}, m5 = function(e, t) {
  return t.filter(Nb).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, Cd = function(e, t) {
  return Nb(e) && e.name ? m5(e, t) : e;
}, v5 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(Cd(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Hh = function(e) {
  return e[0] && e.length > 1 ? Cd(e[0], e) : e[0];
}, Yh = function(e, t) {
  return e.length > 1 ? e.indexOf(Cd(e[t], e)) : t;
}, Lb = "NEW_FOCUS", g5 = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = yd(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = v5(t), h = r !== void 0 ? m.indexOf(r) : -1, v = h - (n ? m.indexOf(n) : l), b = Yh(e, 0), y = Yh(e, o - 1);
    if (l === -1 || u === -1)
      return Lb;
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
}, b5 = function(e) {
  return function(t) {
    var r, n = (r = Ib(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, y5 = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Wh(n.filter(b5(r)));
  return o && o.length ? Hh(o) : Hh(Wh(t));
}, pu = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && pu(e.parentNode.host || e.parentNode, t), t;
}, uc = function(e, t) {
  for (var r = pu(e), n = pu(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Wb = function(e, t, r) {
  var n = _s(e), o = _s(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = uc(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = uc(a, l);
      c && (!i || bo(c, i) ? i = c : i = uc(c, i));
    });
  }), i;
}, x5 = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(c5(n, t));
  }, []);
}, S5 = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(n5);
}, w5 = function(e, t) {
  var r = za(_s(e).length > 0 ? document : Ob(e).ownerDocument), n = wd(e).filter(ks), o = Wb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Uh(n, a), s = fu(n, a).filter(function(p) {
    var m = p.node;
    return ks(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Uh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = S5(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = g5(u, l, r, t);
    if (d === Lb) {
      var f = y5(i, u, x5(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, C5 = function(e) {
  var t = wd(e).filter(ks), r = Wb(e, e, t), n = /* @__PURE__ */ new Map(), o = fu([r], n, !0), a = fu(t, n).filter(function(i) {
    var s = i.node;
    return ks(s);
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
      guard: yd(s)
    };
  });
}, _5 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, dc = 0, fc = !1, Ub = function(e, t, r) {
  r === void 0 && (r = {});
  var n = w5(e, t);
  if (!fc && n) {
    if (dc > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), fc = !0, setTimeout(function() {
        fc = !1;
      }, 1);
      return;
    }
    dc++, _5(n.node, r.focusOptions), dc--;
  }
};
function Hb(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var k5 = function() {
  return document && document.activeElement === document.body;
}, E5 = function() {
  return k5() || h5();
}, yo = null, co = null, xo = null, Va = !1, P5 = function() {
  return !0;
}, T5 = function(t) {
  return (yo.whiteList || P5)(t);
}, A5 = function(t, r) {
  xo = {
    observerNode: t,
    portaledElement: r
  };
}, O5 = function(t) {
  return xo && xo.portaledElement === t;
};
function qh(e, t, r, n) {
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
var R5 = function(t) {
  return t && "current" in t ? t.current : t;
}, $5 = function(t) {
  return t ? !!Va : Va === "meanwhile";
}, D5 = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, M5 = function(t, r) {
  return r.some(function(n) {
    return D5(t, n, n);
  });
}, Es = function() {
  var t = !1;
  if (yo) {
    var r = yo, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || xo && xo.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(R5).filter(Boolean));
      if ((!u || T5(u)) && (o || $5(s) || !E5() || !co && a) && (c && !// active element is "inside" working area
      (Vb(d) || // check for shadow-dom contained elements
      u && M5(u, d) || O5(u)) && (document && !co && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = Ub(d, co, {
        focusOptions: l
      }), xo = {})), Va = !1, co = document && document.activeElement), document) {
        var f = document && document.activeElement, p = C5(d), m = p.map(function(h) {
          var v = h.node;
          return v;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var v = h.guard, b = h.node;
          return v && b.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var v = h.node;
          return v.removeAttribute("tabIndex");
        }), qh(m, p.length, 1, p), qh(m, -1, -1, p));
      }
    }
  }
  return t;
}, Yb = function(t) {
  Es() && t && (t.stopPropagation(), t.preventDefault());
}, _d = function() {
  return Hb(Es);
}, I5 = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || A5(n, r);
}, F5 = function() {
  return null;
};
process.env.NODE_ENV !== "production" && yb.node.isRequired;
var qb = function() {
  Va = "just", setTimeout(function() {
    Va = "meanwhile";
  }, 0);
}, N5 = function() {
  document.addEventListener("focusin", Yb), document.addEventListener("focusout", _d), window.addEventListener("blur", qb);
}, j5 = function() {
  document.removeEventListener("focusin", Yb), document.removeEventListener("focusout", _d), window.removeEventListener("blur", qb);
};
function B5(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function z5(e) {
  var t = e.slice(-1)[0];
  t && !yo && N5();
  var r = yo, n = r && t && t.id === r.id;
  yo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (co = null, (!n || r.observed !== t.observed) && t.onActivation(), Es(), Hb(Es)) : (j5(), co = null);
}
Pb.assignSyncMedium(I5);
Tb.assignMedium(_d);
qF.assignMedium(function(e) {
  return e({
    moveFocusInside: Ub,
    focusInside: Vb
  });
});
const V5 = KF(B5, z5)(F5);
var Gb = /* @__PURE__ */ U.forwardRef(function(t, r) {
  return /* @__PURE__ */ U.createElement(Ab, Ln({
    sideCar: V5,
    ref: r
  }, t));
}), Xb = Ab.propTypes || {};
Xb.sideCar;
var L5 = MF(Xb, ["sideCar"]);
Gb.propTypes = process.env.NODE_ENV !== "production" ? L5 : {};
const Gh = Gb;
function Kb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function kd(e) {
  var t;
  if (!Kb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function W5(e) {
  var t, r;
  return (r = (t = Zb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Zb(e) {
  return Kb(e) ? e.ownerDocument : document;
}
function U5(e) {
  return Zb(e).activeElement;
}
function H5(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Y5(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function Jb(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : kd(e) && H5(e) ? e : Jb(Y5(e));
}
var Qb = (e) => e.hasAttribute("tabindex"), q5 = (e) => Qb(e) && e.tabIndex === -1;
function G5(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function ey(e) {
  return e.parentElement && ey(e.parentElement) ? !0 : e.hidden;
}
function X5(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function ty(e) {
  if (!kd(e) || ey(e) || G5(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : X5(e) ? !0 : Qb(e);
}
function K5(e) {
  return e ? kd(e) && ty(e) && !q5(e) : !1;
}
var Z5 = [
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
], J5 = Z5.join(), Q5 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function ry(e) {
  const t = Array.from(
    e.querySelectorAll(J5)
  );
  return t.unshift(e), t.filter((r) => ty(r) && Q5(r));
}
var Xh, eN = (Xh = Gh.default) != null ? Xh : Gh, ny = (e) => {
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
    t != null && t.current ? t.current.focus() : n != null && n.current && ry(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = q(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ L.jsx(
    eN,
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
ny.displayName = "FocusLock";
var oy = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function tN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Vt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function rN(e, t = oy) {
  const r = {};
  return e.forEach((n, o) => {
    const a = t[o];
    n != null && (r[a] = n);
  }), r;
}
var ay = (e) => /* @__PURE__ */ L.jsx(
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
ay.displayName = "StackItem";
function nN(e) {
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
    "&": tN(
      r,
      (o) => n[o]
    )
  };
}
var iy = _e((e, t) => {
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
  } = e, p = r ? "row" : n ?? "column", m = gt(
    () => nN({ spacing: i, direction: p }),
    [i, p]
  ), h = !!c, v = !d && !h, b = gt(() => {
    const S = hb(l);
    return v ? S : S.map((k, w) => {
      const M = typeof k.key < "u" ? k.key : w, P = w + 1 === S.length, z = d ? /* @__PURE__ */ L.jsx(ay, { children: k }, M) : k;
      if (!h)
        return z;
      const j = Ua(
        c,
        {
          __css: m
        }
      ), X = P ? null : j;
      return /* @__PURE__ */ L.jsxs(xu, { children: [
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
iy.displayName = "Stack";
var oN = _e((e, t) => /* @__PURE__ */ L.jsx(iy, { align: "center", ...e, direction: "row", ref: t }));
oN.displayName = "HStack";
var sy = ge("div");
sy.displayName = "Box";
var ly = _e(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ L.jsx(
    sy,
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
ly.displayName = "Square";
var aN = _e(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ L.jsx(ly, { size: n, ref: r, borderRadius: "9999px", ...o });
});
aN.displayName = "Circle";
var iN = _e(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: c,
    ...u
  } = Mo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...m
  } = jr(t), h = {
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
iN.displayName = "Divider";
var sN = _e(function(t, r) {
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
sN.displayName = "Flex";
function lN(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t, { getWindow: o } = V$(), a = Array.isArray(e) ? e : [e];
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
function cN(e, t, r = oy) {
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
function uN(e) {
  var t, r;
  const n = Vt(e) ? e : { fallback: e ?? "base" }, a = an().__breakpoints.details.map(
    ({ minMaxQuery: c, breakpoint: u }) => ({
      breakpoint: u,
      query: c.replace("@media screen and ", "")
    })
  ), i = a.map((c) => c.breakpoint === n.fallback), l = lN(
    a.map((c) => c.query),
    { fallback: i, ssr: n.ssr }
  ).findIndex((c) => c == !0);
  return (r = (t = a[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback;
}
function UV(e, t) {
  var r;
  const n = Vt(t) ? t : { fallback: t ?? "base" }, o = uN(n), a = an();
  if (!o)
    return;
  const i = Array.from(((r = a.__breakpoints) == null ? void 0 : r.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(rN(e, i)).map(
      ([l, c]) => [l, c]
    )
  ) : e;
  return cN(s, o, i);
}
function dN(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function fN(e = {}) {
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
      if (dN(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
function pN(e, t, r, n) {
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
function hN() {
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
function pc(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function mN(e = {}) {
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
  } = e, [h, v] = Ye(!0), [b, y] = Ye(!1), S = hN(), k = (D) => {
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
      b && pc(D) && (D.preventDefault(), D.stopPropagation(), y(!1), S.remove(document, "keyup", I, !1));
    },
    [b, S]
  ), z = q(
    (D) => {
      if (c == null || c(D), r || D.defaultPrevented || D.metaKey || !pc(D.nativeEvent) || h)
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
      if (u == null || u(D), r || D.defaultPrevented || D.metaKey || !pc(D.nativeEvent) || h)
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
  ), oe = St(t, k);
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
    "data-active": ro(b),
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
function vN(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = U5(t);
  return !r || t.contains(r) ? !1 : !!K5(r);
}
function gN(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  Fo(() => {
    if (!a || vN(e))
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
var bN = {
  preventScroll: !0,
  shouldFocus: !1
};
function HV(e, t = bN) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = yN(e) ? e.current : e, s = o && a, l = be(s), c = be(a);
  Oa(() => {
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
        const d = ry(i);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [a, n, i, r]);
  Fo(() => {
    u();
  }, [u]), ba(i, "transitionend", u);
}
function yN(e) {
  return "current" in e;
}
var Zn = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), Et = {
  arrowShadowColor: Zn("--popper-arrow-shadow-color"),
  arrowSize: Zn("--popper-arrow-size", "8px"),
  arrowSizeHalf: Zn("--popper-arrow-size-half"),
  arrowBg: Zn("--popper-arrow-bg"),
  transformOrigin: Zn("--popper-transform-origin"),
  arrowOffset: Zn("--popper-arrow-offset")
};
function xN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var SN = {
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
}, wN = (e) => SN[e], Kh = {
  scroll: !0,
  resize: !0
};
function CN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Kh, ...e }
  } : t = {
    enabled: e,
    options: Kh
  }, t;
}
var _N = {
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
}, kN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Zh(e);
  },
  effect: ({ state: e }) => () => {
    Zh(e);
  }
}, Zh = (e) => {
  e.elements.popper.style.setProperty(
    Et.transformOrigin.var,
    wN(e.placement)
  );
}, EN = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    PN(e);
  }
}, PN = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = TN(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: Et.arrowSize.varRef,
      height: Et.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [Et.arrowSizeHalf.var]: `calc(${Et.arrowSize.varRef} / 2 - 1px)`,
      [Et.arrowOffset.var]: `calc(${Et.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, TN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: Et.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: Et.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: Et.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: Et.arrowOffset.varRef };
}, AN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Jh(e);
  },
  effect: ({ state: e }) => () => {
    Jh(e);
  }
}, Jh = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = xN(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: Et.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, ON = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, RN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function $N(e, t = "ltr") {
  var r, n;
  const o = ((r = ON[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = RN[e]) != null ? n : o;
}
var Lt = "top", lr = "bottom", cr = "right", Wt = "left", Ed = "auto", ri = [Lt, lr, cr, Wt], To = "start", La = "end", DN = "clippingParents", cy = "viewport", Zo = "popper", MN = "reference", Qh = /* @__PURE__ */ ri.reduce(function(e, t) {
  return e.concat([t + "-" + To, t + "-" + La]);
}, []), uy = /* @__PURE__ */ [].concat(ri, [Ed]).reduce(function(e, t) {
  return e.concat([t, t + "-" + To, t + "-" + La]);
}, []), IN = "beforeRead", FN = "read", NN = "afterRead", jN = "beforeMain", BN = "main", zN = "afterMain", VN = "beforeWrite", LN = "write", WN = "afterWrite", UN = [IN, FN, NN, jN, BN, zN, VN, LN, WN];
function Nr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Wn(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function sr(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function HN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !sr(a) || !Nr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function YN(e) {
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
      !sr(o) || !Nr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const qN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: HN,
  effect: YN,
  requires: ["computeStyles"]
};
function Fr(e) {
  return e.split("-")[0];
}
var Vn = Math.max, Ps = Math.min, Ao = Math.round;
function hu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dy() {
  return !/^((?!chrome|android).)*safari/i.test(hu());
}
function Oo(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && sr(e) && (o = e.offsetWidth > 0 && Ao(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Ao(n.height) / e.offsetHeight || 1);
  var i = Wn(e) ? Qt(e) : window, s = i.visualViewport, l = !dy() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function Td(e) {
  var t = Oo(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function fy(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Pd(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function nn(e) {
  return Qt(e).getComputedStyle(e);
}
function GN(e) {
  return ["table", "td", "th"].indexOf(Nr(e)) >= 0;
}
function _n(e) {
  return ((Wn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function el(e) {
  return Nr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _n(e)
  );
}
function em(e) {
  return !sr(e) || // https://github.com/popperjs/popper-core/issues/837
  nn(e).position === "fixed" ? null : e.offsetParent;
}
function XN(e) {
  var t = /firefox/i.test(hu()), r = /Trident/i.test(hu());
  if (r && sr(e)) {
    var n = nn(e);
    if (n.position === "fixed")
      return null;
  }
  var o = el(e);
  for (Pd(o) && (o = o.host); sr(o) && ["html", "body"].indexOf(Nr(o)) < 0; ) {
    var a = nn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ni(e) {
  for (var t = Qt(e), r = em(e); r && GN(r) && nn(r).position === "static"; )
    r = em(r);
  return r && (Nr(r) === "html" || Nr(r) === "body" && nn(r).position === "static") ? t : r || XN(e) || t;
}
function Ad(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ya(e, t, r) {
  return Vn(e, Ps(t, r));
}
function KN(e, t, r) {
  var n = ya(e, t, r);
  return n > r ? r : n;
}
function py() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hy(e) {
  return Object.assign({}, py(), e);
}
function my(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var ZN = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, hy(typeof t != "number" ? t : my(t, ri));
};
function JN(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Fr(r.placement), l = Ad(s), c = [Wt, cr].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = ZN(o.padding, r), f = Td(a), p = l === "y" ? Lt : Wt, m = l === "y" ? lr : cr, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], v = i[l] - r.rects.reference[l], b = ni(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = h / 2 - v / 2, k = d[p], w = y - f[u] - d[m], M = y / 2 - f[u] / 2 + S, P = ya(k, M, w), I = l;
    r.modifiersData[n] = (t = {}, t[I] = P, t.centerOffset = P - M, t);
  }
}
function QN(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || fy(t.elements.popper, o) && (t.elements.arrow = o));
}
const ej = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: JN,
  effect: QN,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ro(e) {
  return e.split("-")[1];
}
var tj = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function rj(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ao(r * o) / o || 0,
    y: Ao(n * o) / o || 0
  };
}
function tm(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = v.x, h = v.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), S = Wt, k = Lt, w = window;
  if (c) {
    var M = ni(r), P = "clientHeight", I = "clientWidth";
    if (M === Qt(r) && (M = _n(r), nn(M).position !== "static" && s === "absolute" && (P = "scrollHeight", I = "scrollWidth")), M = M, o === Lt || (o === Wt || o === cr) && a === La) {
      k = lr;
      var z = d && M === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= z - n.height, h *= l ? 1 : -1;
    }
    if (o === Wt || (o === Lt || o === lr) && a === La) {
      S = cr;
      var j = d && M === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[I]
      );
      p -= j - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && tj), ne = u === !0 ? rj({
    x: p,
    y: h
  }, Qt(r)) : {
    x: p,
    y: h
  };
  if (p = ne.x, h = ne.y, l) {
    var J;
    return Object.assign({}, X, (J = {}, J[k] = y ? "0" : "", J[S] = b ? "0" : "", J.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", J));
  }
  return Object.assign({}, X, (t = {}, t[k] = y ? h + "px" : "", t[S] = b ? p + "px" : "", t.transform = "", t));
}
function nj(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Fr(t.placement),
    variation: Ro(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, tm(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, tm(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const oj = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: nj,
  data: {}
};
var Ti = {
  passive: !0
};
function aj(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = Qt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Ti);
  }), s && l.addEventListener("resize", r.update, Ti), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Ti);
    }), s && l.removeEventListener("resize", r.update, Ti);
  };
}
const ij = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: aj,
  data: {}
};
var sj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ki(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return sj[t];
  });
}
var lj = {
  start: "end",
  end: "start"
};
function rm(e) {
  return e.replace(/start|end/g, function(t) {
    return lj[t];
  });
}
function Od(e) {
  var t = Qt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Rd(e) {
  return Oo(_n(e)).left + Od(e).scrollLeft;
}
function cj(e, t) {
  var r = Qt(e), n = _n(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = dy();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Rd(e),
    y: l
  };
}
function uj(e) {
  var t, r = _n(e), n = Od(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Vn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Vn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Rd(e), l = -n.scrollTop;
  return nn(o || r).direction === "rtl" && (s += Vn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function $d(e) {
  var t = nn(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function vy(e) {
  return ["html", "body", "#document"].indexOf(Nr(e)) >= 0 ? e.ownerDocument.body : sr(e) && $d(e) ? e : vy(el(e));
}
function xa(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vy(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Qt(n), i = o ? [a].concat(a.visualViewport || [], $d(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(xa(el(i)))
  );
}
function mu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function dj(e, t) {
  var r = Oo(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function nm(e, t, r) {
  return t === cy ? mu(cj(e, r)) : Wn(t) ? dj(t, r) : mu(uj(_n(e)));
}
function fj(e) {
  var t = xa(el(e)), r = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, n = r && sr(e) ? ni(e) : e;
  return Wn(n) ? t.filter(function(o) {
    return Wn(o) && fy(o, n) && Nr(o) !== "body";
  }) : [];
}
function pj(e, t, r, n) {
  var o = t === "clippingParents" ? fj(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = nm(e, c, n);
    return l.top = Vn(u.top, l.top), l.right = Ps(u.right, l.right), l.bottom = Ps(u.bottom, l.bottom), l.left = Vn(u.left, l.left), l;
  }, nm(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function gy(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Fr(n) : null, a = n ? Ro(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Lt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case lr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case cr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Wt:
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
  var c = o ? Ad(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case To:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case La:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Wa(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? DN : s, c = r.rootBoundary, u = c === void 0 ? cy : c, d = r.elementContext, f = d === void 0 ? Zo : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, v = h === void 0 ? 0 : h, b = hy(typeof v != "number" ? v : my(v, ri)), y = f === Zo ? MN : Zo, S = e.rects.popper, k = e.elements[m ? y : f], w = pj(Wn(k) ? k : k.contextElement || _n(e.elements.popper), l, u, i), M = Oo(e.elements.reference), P = gy({
    reference: M,
    element: S,
    strategy: "absolute",
    placement: o
  }), I = mu(Object.assign({}, S, P)), z = f === Zo ? I : M, j = {
    top: w.top - z.top + b.top,
    bottom: z.bottom - w.bottom + b.bottom,
    left: w.left - z.left + b.left,
    right: z.right - w.right + b.right
  }, X = e.modifiersData.offset;
  if (f === Zo && X) {
    var ne = X[o];
    Object.keys(j).forEach(function(J) {
      var Q = [cr, lr].indexOf(J) >= 0 ? 1 : -1, ee = [Lt, lr].indexOf(J) >= 0 ? "y" : "x";
      j[J] += ne[ee] * Q;
    });
  }
  return j;
}
function hj(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? uy : l, u = Ro(n), d = u ? s ? Qh : Qh.filter(function(m) {
    return Ro(m) === u;
  }) : ri, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Wa(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Fr(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function mj(e) {
  if (Fr(e) === Ed)
    return [];
  var t = Ki(e);
  return [rm(e), t, rm(t)];
}
function vj(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, v = t.options.placement, b = Fr(v), y = b === v, S = l || (y || !m ? [Ki(v)] : mj(v)), k = [v].concat(S).reduce(function(O, B) {
      return O.concat(Fr(B) === Ed ? hj(t, {
        placement: B,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : B);
    }, []), w = t.rects.reference, M = t.rects.popper, P = /* @__PURE__ */ new Map(), I = !0, z = k[0], j = 0; j < k.length; j++) {
      var X = k[j], ne = Fr(X), J = Ro(X) === To, Q = [Lt, lr].indexOf(ne) >= 0, ee = Q ? "width" : "height", oe = Wa(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), D = Q ? J ? cr : Wt : J ? lr : Lt;
      w[ee] > M[ee] && (D = Ki(D));
      var ce = Ki(D), de = [];
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
const gj = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vj,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function om(e, t, r) {
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
function am(e) {
  return [Lt, cr, lr, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function bj(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Wa(t, {
    elementContext: "reference"
  }), s = Wa(t, {
    altBoundary: !0
  }), l = om(i, n), c = om(s, o, a), u = am(l), d = am(c);
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
const yj = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bj
};
function xj(e, t, r) {
  var n = Fr(e), o = [Wt, Lt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Wt, cr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Sj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = uy.reduce(function(u, d) {
    return u[d] = xj(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const wj = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Sj
};
function Cj(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = gy({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const _j = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cj,
  data: {}
};
function kj(e) {
  return e === "x" ? "y" : "x";
}
function Ej(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, v = Wa(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), b = Fr(t.placement), y = Ro(t.placement), S = !y, k = Ad(b), w = kj(k), M = t.modifiersData.popperOffsets, P = t.rects.reference, I = t.rects.popper, z = typeof h == "function" ? h(Object.assign({}, t.rects, {
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
      var J, Q = k === "y" ? Lt : Wt, ee = k === "y" ? lr : cr, oe = k === "y" ? "height" : "width", D = M[k], ce = D + v[Q], de = D - v[ee], F = p ? -I[oe] / 2 : 0, N = y === To ? P[oe] : I[oe], V = y === To ? -I[oe] : -P[oe], T = t.elements.arrow, O = p && T ? Td(T) : {
        width: 0,
        height: 0
      }, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : py(), C = B[Q], H = B[ee], A = ya(0, P[oe], O[oe]), Z = S ? P[oe] / 2 - F - A - C - j.mainAxis : N - A - C - j.mainAxis, Y = S ? -P[oe] / 2 + F + A + H + j.mainAxis : V + A + H + j.mainAxis, ae = t.elements.arrow && ni(t.elements.arrow), R = ae ? k === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Se = (J = X == null ? void 0 : X[k]) != null ? J : 0, pe = D + Z - Se - R, le = D + Y - Se, $e = ya(p ? Ps(ce, pe) : ce, D, p ? Vn(de, le) : de);
      M[k] = $e, ne[k] = $e - D;
    }
    if (s) {
      var ye, we = k === "x" ? Lt : Wt, ht = k === "x" ? lr : cr, ke = M[w], dt = w === "y" ? "height" : "width", rt = ke + v[we], Me = ke - v[ht], se = [Lt, Wt].indexOf(b) !== -1, Ae = (ye = X == null ? void 0 : X[w]) != null ? ye : 0, Ot = se ? rt : ke - P[dt] - I[dt] - Ae + j.altAxis, xt = se ? ke + P[dt] + I[dt] - Ae - j.altAxis : Me, lt = p && se ? KN(Ot, ke, xt) : ya(p ? Ot : rt, ke, p ? xt : Me);
      M[w] = lt, ne[w] = lt - ke;
    }
    t.modifiersData[n] = ne;
  }
}
const Pj = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ej,
  requiresIfExists: ["offset"]
};
function Tj(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Aj(e) {
  return e === Qt(e) || !sr(e) ? Od(e) : Tj(e);
}
function Oj(e) {
  var t = e.getBoundingClientRect(), r = Ao(t.width) / e.offsetWidth || 1, n = Ao(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Rj(e, t, r) {
  r === void 0 && (r = !1);
  var n = sr(t), o = sr(t) && Oj(t), a = _n(t), i = Oo(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Nr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  $d(a)) && (s = Aj(t)), sr(t) ? (l = Oo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Rd(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function $j(e) {
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
function Dj(e) {
  var t = $j(e);
  return UN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Mj(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Ij(e) {
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
var im = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Fj(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? im : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, im, a),
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
          reference: Wn(s) ? xa(s) : s.contextElement ? xa(s.contextElement) : [],
          popper: xa(l)
        };
        var S = Dj(Ij([].concat(n, u.options.modifiers)));
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
          if (sm(y, S)) {
            u.rects = {
              reference: Rj(y, ni(S), u.options.strategy === "fixed"),
              popper: Td(S)
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
      update: Mj(function() {
        return new Promise(function(v) {
          p.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!sm(s, l))
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
var Nj = [ij, _j, oj, qN, wj, gj, Pj, ej, yj], jj = /* @__PURE__ */ Fj({
  defaultModifiers: Nj
});
function by(e = {}) {
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
  } = e, m = be(null), h = be(null), v = be(null), b = $N(n, p), y = be(() => {
  }), S = q(() => {
    var j;
    !t || !m.current || !h.current || ((j = y.current) == null || j.call(y), v.current = jj(m.current, h.current, {
      placement: b,
      modifiers: [
        AN,
        EN,
        kN,
        {
          ..._N,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...CN(i)
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
      ref: St(k, X)
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
      ref: St(M, X),
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
      style: Bj(j)
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
    transformOrigin: Et.transformOrigin.varRef,
    referenceRef: k,
    popperRef: M,
    getPopperProps: P,
    getArrowProps: I,
    getArrowInnerProps: z,
    getReferenceProps: w
  };
}
function Bj(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function yy(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = Zt(r), i = Zt(t), [s, l] = Ye(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = _r(), f = o ?? `disclosure-${d}`, p = q(() => {
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
function zj(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = Zt(r), i = be({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  Fe(() => {
    if (!n)
      return;
    const s = (d) => {
      hc(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && hc(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && hc(d, t) && (i.isPointerDown = !1, o(d));
    }, u = xy(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function hc(e, t) {
  var r;
  const n = e.target;
  return n && !xy(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function xy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Vj(e) {
  const { isOpen: t, ref: r } = e, [n, o] = Ye(t), [a, i] = Ye(!1);
  return Fe(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), ba(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = W5(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function Lj(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  Wj,
  Uj,
  Hj,
  Yj
] = fF(), [qj, Bo] = Ft({
  strict: !1,
  name: "MenuContext"
});
function Gj(e, ...t) {
  const r = _r(), n = e || r;
  return gt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function Sy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function lm(e) {
  return Sy(e).activeElement === e;
}
function Xj(e = {}) {
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
  } = e, v = be(null), b = be(null), y = Hj(), S = q(() => {
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
  }, [a, k, S, u]), { isOpen: P, onOpen: I, onClose: z, onToggle: j } = yy({
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: M
  });
  zj({
    enabled: P && n,
    ref: v,
    handler: (T) => {
      var O;
      (O = b.current) != null && O.contains(T.target) || z();
    }
  });
  const X = by({
    ...h,
    enabled: P || m,
    placement: d,
    direction: p
  }), [ne, J] = Ye(-1);
  Fo(() => {
    P || J(-1);
  }, [P]), gN(v, {
    focusRef: b,
    visible: P,
    shouldFocus: !0
  });
  const Q = Vj({ isOpen: P, ref: v }), [ee, oe] = Gj(t, "menu-button", "menu-list"), D = q(() => {
    I(), S();
  }, [I, S]), ce = be(/* @__PURE__ */ new Set([]));
  tB(() => {
    ce.current.forEach((T) => clearTimeout(T)), ce.current.clear();
  });
  const de = q(() => {
    I(), k();
  }, [k, I]), F = q(() => {
    I(), w();
  }, [I, w]), N = q(() => {
    var T, O;
    const B = Sy(v.current), C = (T = v.current) == null ? void 0 : T.contains(B.activeElement);
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
function Kj(e = {}, t = null) {
  const r = Bo(), { onToggle: n, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: i } = r, s = q(
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
    ref: St(r.buttonRef, t, o.referenceRef),
    id: r.buttonId,
    "data-active": ro(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: $t(e.onClick, n),
    onKeyDown: $t(e.onKeyDown, s)
  };
}
function vu(e) {
  var t;
  return Qj(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function Zj(e = {}, t = null) {
  const r = Bo();
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
  } = r, f = Uj(), p = fN({
    preventDefault: (b) => b.key !== " " && vu(b.target)
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
        const P = pN(
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
      vu(b.target) && w(b);
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
  const v = Lj({
    wasSelected: h.current,
    enabled: c,
    mode: u,
    isSelected: d.present
  });
  return {
    ...e,
    ref: St(a, t),
    children: v ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: $t(e.onKeyDown, m)
  };
}
function Jj(e = {}) {
  const { popper: t, isOpen: r } = Bo();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: r ? "visible" : "hidden",
      ...e.style
    }
  });
}
function wy(e = {}, t = null) {
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
  } = e, f = Bo(), {
    setFocusedIndex: p,
    focusedIndex: m,
    closeOnSelect: h,
    onClose: v,
    menuRef: b,
    isOpen: y,
    menuId: S,
    rafId: k
  } = f, w = be(null), M = `${S}-menuitem-${_r()}`, { index: P, register: I } = Yj({
    disabled: s && !l
  }), z = q(
    (D) => {
      r == null || r(D), !s && p(P);
    },
    [p, P, s, r]
  ), j = q(
    (D) => {
      n == null || n(D), w.current && !lm(w.current) && z(D);
    },
    [z, n]
  ), X = q(
    (D) => {
      o == null || o(D), !s && p(-1);
    },
    [p, s, o]
  ), ne = q(
    (D) => {
      a == null || a(D), vu(D.currentTarget) && (c ?? h) && v();
    },
    [v, a, h, c]
  ), J = q(
    (D) => {
      i == null || i(D), p(P);
    },
    [p, i, P]
  ), Q = P === m, ee = s && !l;
  Fo(() => {
    y && (Q && !ee && w.current ? (k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
      var D;
      (D = w.current) == null || D.focus(), k.current = null;
    })) : b.current && !lm(b.current) && b.current.focus({ preventScroll: !0 }));
  }, [Q, ee, b, y]);
  const oe = mN({
    onClick: ne,
    onFocus: J,
    onMouseEnter: z,
    onMouseMove: j,
    onMouseLeave: X,
    ref: St(I, w, t),
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
function YV(e = {}, t = null) {
  const { type: r = "radio", isChecked: n, ...o } = e;
  return {
    ...wy(o, t),
    role: `menuitem${r}`,
    "aria-checked": n
  };
}
function qV(e = {}) {
  const {
    children: t,
    type: r = "radio",
    value: n,
    defaultValue: o,
    onChange: a,
    ...i
  } = e, l = r === "radio" ? "" : [], [c, u] = md({
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
  ), p = hb(t).map((m) => {
    if (m.type.id !== "MenuItemOption")
      return m;
    const h = (b) => {
      var y, S;
      d(m.props.value), (S = (y = m.props).onClick) == null || S.call(y, b);
    }, v = r === "radio" ? m.props.value === c : c.includes(m.props.value);
    return Ua(m, {
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
function GV() {
  const { isOpen: e, onClose: t } = Bo();
  return { isOpen: e, onClose: t };
}
function Qj(e) {
  var t;
  if (!eB(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function eB(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function tB(e, t = []) {
  return Fe(
    () => () => e(),
    t
  );
}
var [rB, oi] = Ft({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), nB = (e) => {
  const { children: t } = e, r = Io("Menu", e), n = jr(e), { direction: o } = an(), { descendants: a, ...i } = Xj({ ...n, direction: o }), s = gt(() => i, [i]), { isOpen: l, onClose: c, forceUpdate: u } = s;
  return /* @__PURE__ */ L.jsx(Wj, { value: a, children: /* @__PURE__ */ L.jsx(qj, { value: s, children: /* @__PURE__ */ L.jsx(rB, { value: r, children: hn(t, { isOpen: l, onClose: c, forceUpdate: u }) }) }) });
};
nB.displayName = "Menu";
var Cy = _e(
  (e, t) => {
    const r = oi();
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
Cy.displayName = "MenuCommand";
var oB = _e(
  (e, t) => {
    const { type: r, ...n } = e, o = oi(), a = n.as || r ? r ?? void 0 : "button", i = gt(
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
), _y = (e) => {
  const { className: t, children: r, ...n } = e, o = As.only(r), a = Su(o) ? Ua(o, {
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
_y.displayName = "MenuIcon";
var aB = _e((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: i,
    ...s
  } = e, l = wy(s, t), u = r || o ? /* @__PURE__ */ L.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: i }) : i;
  return /* @__PURE__ */ L.jsxs(
    oB,
    {
      ...l,
      className: Xe("chakra-menu__menuitem", l.className),
      children: [
        r && /* @__PURE__ */ L.jsx(_y, { fontSize: "0.8em", marginEnd: n, children: r }),
        u,
        o && /* @__PURE__ */ L.jsx(Cy, { marginStart: a, children: o })
      ]
    }
  );
});
aB.displayName = "MenuItem";
var iB = {
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
}, sB = ge(Cn.div), lB = _e(function(t, r) {
  var n, o;
  const { rootProps: a, motionProps: i, ...s } = t, {
    isOpen: l,
    onTransitionEnd: c,
    unstable__animationState: u
  } = Bo(), d = Zj(s, r), f = Jj(a), p = oi();
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ L.jsx(
        sB,
        {
          variants: iB,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...i,
          className: Xe("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: c,
          onAnimationComplete: k_(
            u.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
lB.displayName = "MenuList";
var cB = _e((e, t) => {
  const r = oi();
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
}), uB = _e(
  (e, t) => {
    const { children: r, as: n, ...o } = e, a = Kj(o, t), i = n || cB;
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
uB.displayName = "MenuButton";
var dB = (e) => {
  const { className: t, ...r } = e, n = oi();
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
dB.displayName = "MenuDivider";
var fB = {
  slideInBottom: {
    ...lu,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...lu,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...fb,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, pB = ge(Cn.section), hB = (e) => fB[e || "none"], ky = At(
  (e, t) => {
    const { preset: r, motionProps: n = hB(r), ...o } = e;
    return /* @__PURE__ */ L.jsx(pB, { ref: t, ...n, ...o });
  }
);
ky.displayName = "ModalTransition";
var mB = Object.defineProperty, vB = (e, t, r) => t in e ? mB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, gB = (e, t, r) => (vB(e, typeof t != "symbol" ? t + "" : t, r), r), bB = class {
  constructor() {
    gB(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, gu = new bB();
function Ey(e, t) {
  const [r, n] = Ye(0);
  return Fe(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = gu.add(o);
        n(a);
      }
      return () => {
        gu.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var yB = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jn = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Oi = {}, mc = 0, Py = function(e) {
  return e && (e.host || Py(e.parentNode));
}, xB = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Py(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, SB = function(e, t, r, n) {
  var o = xB(t, Array.isArray(e) ? e : [e]);
  Oi[r] || (Oi[r] = /* @__PURE__ */ new WeakMap());
  var a = Oi[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (Jn.get(f) || 0) + 1, v = (a.get(f) || 0) + 1;
        Jn.set(f, h), a.set(f, v), i.push(f), h === 1 && m && Ai.set(f, !0), v === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), mc++, function() {
    i.forEach(function(d) {
      var f = Jn.get(d) - 1, p = a.get(d) - 1;
      Jn.set(d, f), a.set(d, p), f || (Ai.has(d) || d.removeAttribute(n), Ai.delete(d)), p || d.removeAttribute(r);
    }), mc--, mc || (Jn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Oi = {});
  };
}, wB = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || yB(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), SB(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function CB(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = be(null), u = be(null), [d, f, p] = kB(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  _B(c, t && i);
  const m = Ey(c, t), h = be(null), v = q((z) => {
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
      ref: St(j, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": k ? p : void 0,
      onClick: $t(
        z.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, k, d, f, y]
  ), P = q(
    (z) => {
      z.stopPropagation(), h.current === z.target && gu.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), I = q(
    (z = {}, j = null) => ({
      ...z,
      ref: St(j, u),
      onClick: $t(z.onClick, P),
      onKeyDown: $t(z.onKeyDown, b),
      onMouseDown: $t(z.onMouseDown, v)
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
function _B(e, t) {
  const r = e.current;
  Fe(() => {
    if (!(!e.current || !t))
      return wB(e.current);
  }, [t, e, r]);
}
function kB(e, ...t) {
  const r = _r(), n = e || r;
  return gt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [EB, Gn] = Ft({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [PB, Sn] = Ft({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Ty = (e) => {
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
  } = t, h = Io("Modal", t), b = {
    ...CB(t),
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
  return /* @__PURE__ */ L.jsx(PB, { value: b, children: /* @__PURE__ */ L.jsx(EB, { value: h, children: /* @__PURE__ */ L.jsx(No, { onExitComplete: m, children: b.isOpen && /* @__PURE__ */ L.jsx(qa, { ...r, children: n }) }) }) });
};
Ty.displayName = "Modal";
var Zi = "right-scroll-bar-position", Ji = "width-before-scroll-bar", TB = "with-scroll-bars-hidden", AB = "--removed-body-scroll-bar-size", Ay = kb(), vc = function() {
}, tl = U.forwardRef(function(e, t) {
  var r = U.useRef(null), n = U.useState({
    onScrollCapture: vc,
    onWheelCapture: vc,
    onTouchMoveCapture: vc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, y = e.gapMode, S = wb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = f, w = Sb([r, t]), M = $r($r({}, S), o);
  return U.createElement(
    U.Fragment,
    null,
    u && U.createElement(k, { sideCar: Ay, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: y }),
    i ? U.cloneElement(U.Children.only(s), $r($r({}, M), { ref: w })) : U.createElement(b, $r({}, M, { className: l, ref: w }), s)
  );
});
tl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
tl.classNames = {
  fullWidth: Ji,
  zeroRight: Zi
};
var cm, OB = function() {
  if (cm)
    return cm;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function RB() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = OB();
  return t && e.setAttribute("nonce", t), e;
}
function $B(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function DB(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var MB = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = RB()) && ($B(t, r), DB(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, IB = function() {
  var e = MB();
  return function(t, r) {
    U.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Oy = function() {
  var e = IB(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, FB = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, gc = function(e) {
  return parseInt(e || "", 10) || 0;
}, NB = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [gc(r), gc(n), gc(o)];
}, jB = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return FB;
  var t = NB(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, BB = Oy(), zB = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(TB, ` {
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
  
  .`).concat(Zi, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Ji, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Zi, " .").concat(Zi, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ji, " .").concat(Ji, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(AB, ": ").concat(s, `px;
  }
`);
}, VB = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = U.useMemo(function() {
    return jB(o);
  }, [o]);
  return U.createElement(BB, { styles: zB(a, !t, o, r ? "" : "!important") });
}, bu = !1;
if (typeof window < "u")
  try {
    var Ri = Object.defineProperty({}, "passive", {
      get: function() {
        return bu = !0, !0;
      }
    });
    window.addEventListener("test", Ri, Ri), window.removeEventListener("test", Ri, Ri);
  } catch {
    bu = !1;
  }
var Qn = bu ? { passive: !1 } : !1, LB = function(e) {
  return e.tagName === "TEXTAREA";
}, Ry = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !LB(e) && r[t] === "visible")
  );
}, WB = function(e) {
  return Ry(e, "overflowY");
}, UB = function(e) {
  return Ry(e, "overflowX");
}, um = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = $y(e, n);
    if (o) {
      var a = Dy(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, HB = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, YB = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, $y = function(e, t) {
  return e === "v" ? WB(t) : UB(t);
}, Dy = function(e, t) {
  return e === "v" ? HB(t) : YB(t);
}, qB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, GB = function(e, t, r, n, o) {
  var a = qB(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Dy(e, s), m = p[0], h = p[1], v = p[2], b = h - v - a * m;
    (m || b) && $y(e, s) && (d += b, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, $i = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dm = function(e) {
  return [e.deltaX, e.deltaY];
}, fm = function(e) {
  return e && "current" in e ? e.current : e;
}, XB = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, KB = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ZB = 0, eo = [];
function JB(e) {
  var t = U.useRef([]), r = U.useRef([0, 0]), n = U.useRef(), o = U.useState(ZB++)[0], a = U.useState(Oy)[0], i = U.useRef(e);
  U.useEffect(function() {
    i.current = e;
  }, [e]), U.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = HF([e.lockRef.current], (e.shards || []).map(fm), !0).filter(Boolean);
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
    var b = $i(h), y = r.current, S = "deltaX" in h ? h.deltaX : y[0] - b[0], k = "deltaY" in h ? h.deltaY : y[1] - b[1], w, M = h.target, P = Math.abs(S) > Math.abs(k) ? "h" : "v";
    if ("touches" in h && P === "h" && M.type === "range")
      return !1;
    var I = um(P, M);
    if (!I)
      return !0;
    if (I ? w = P : (w = P === "v" ? "h" : "v", I = um(P, M)), !I)
      return !1;
    if (!n.current && "changedTouches" in h && (S || k) && (n.current = w), !w)
      return !0;
    var z = n.current || w;
    return GB(z, v, h, z === "h" ? S : k, !0);
  }, []), l = U.useCallback(function(h) {
    var v = h;
    if (!(!eo.length || eo[eo.length - 1] !== a)) {
      var b = "deltaY" in v ? dm(v) : $i(v), y = t.current.filter(function(w) {
        return w.name === v.type && w.target === v.target && XB(w.delta, b);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var S = (i.current.shards || []).map(fm).filter(Boolean).filter(function(w) {
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
    r.current = $i(h), n.current = void 0;
  }, []), d = U.useCallback(function(h) {
    c(h.type, dm(h), h.target, s(h, e.lockRef.current));
  }, []), f = U.useCallback(function(h) {
    c(h.type, $i(h), h.target, s(h, e.lockRef.current));
  }, []);
  U.useEffect(function() {
    return eo.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Qn), document.addEventListener("touchmove", l, Qn), document.addEventListener("touchstart", u, Qn), function() {
      eo = eo.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Qn), document.removeEventListener("touchmove", l, Qn), document.removeEventListener("touchstart", u, Qn);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return U.createElement(
    U.Fragment,
    null,
    m ? U.createElement(a, { styles: KB(o) }) : null,
    p ? U.createElement(VB, { gapMode: e.gapMode }) : null
  );
}
const QB = YF(Ay, JB);
var My = U.forwardRef(function(e, t) {
  return U.createElement(tl, $r({}, e, { ref: t, sideCar: QB }));
});
My.classNames = tl.classNames;
const ez = My;
function Iy(e) {
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
  } = Sn(), [f, p] = Kg();
  Fe(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = Ey(n, d);
  return /* @__PURE__ */ L.jsx(
    ny,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ L.jsx(
        ez,
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
var tz = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = Sn(), c = s(i, t), u = l(o), d = Xe("chakra-modal__content", r), f = Gn(), p = {
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
    }, { motionPreset: h } = Sn();
    return /* @__PURE__ */ L.jsx(Iy, { children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: m,
        children: /* @__PURE__ */ L.jsx(
          ky,
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
tz.displayName = "ModalContent";
var [rz, nz] = Ft(), oz = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function az(e, t) {
  var r, n;
  if (e)
    return (n = (r = oz[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function XV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = an(), l = (t = s.components) == null ? void 0 : t.Drawer, c = az(o, s.direction);
  return /* @__PURE__ */ L.jsx(rz, { value: { placement: c }, children: /* @__PURE__ */ L.jsx(
    Ty,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var iz = ge(pb), sz = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = Sn(), u = s(i, t), d = l(a), f = Xe("chakra-modal__content", r), p = Gn(), m = {
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
    }, { placement: v } = nz();
    return /* @__PURE__ */ L.jsx(Iy, { children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ L.jsx(
          iz,
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
sz.displayName = "DrawerContent";
var lz = _e(
  (e, t) => {
    const { className: r, ...n } = e, o = Xe("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Gn().footer
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
lz.displayName = "ModalFooter";
var cz = _e(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = Sn();
    Fe(() => (a(!0), () => a(!1)), [a]);
    const i = Xe("chakra-modal__header", r), l = {
      flex: 0,
      ...Gn().header
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
cz.displayName = "ModalHeader";
var uz = ge(Cn.div), dz = _e(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = Xe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Gn().overlay
    }, { motionPreset: c } = Sn(), d = o || (c === "none" ? {} : db);
    return /* @__PURE__ */ L.jsx(
      uz,
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
dz.displayName = "ModalOverlay";
var fz = _e((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = Sn();
  Fe(() => (a(!0), () => a(!1)), [a]);
  const i = Xe("chakra-modal__body", r), s = Gn();
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
fz.displayName = "ModalBody";
var pz = _e(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = Sn(), i = Xe("chakra-modal__close-btn", n), s = Gn();
    return /* @__PURE__ */ L.jsx(
      cb,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: $t(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
pz.displayName = "ModalCloseButton";
var or = (e) => e ? "" : void 0, So = (e) => e ? !0 : void 0, kn = (...e) => e.filter(Boolean).join(" ");
function wo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function hz(e) {
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
function aa(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var Qi = { width: 0, height: 0 }, Di = (e) => e || Qi;
function Fy(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var v;
    const b = (v = n[h]) != null ? v : Qi;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...aa({
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
    (h, v) => Di(h).height > Di(v).height ? h : v,
    Qi
  ) : n.reduce(
    (h, v) => Di(h).width > Di(v).width ? h : v,
    Qi
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...aa({
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
    ...aa({
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
    ...aa({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: m, rootStyle: s, getThumbStyle: a };
}
function Ny(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function mz(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function vz(e) {
  const t = bz(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function jy(e) {
  return !!e.touches;
}
function gz(e) {
  return jy(e) && e.touches.length > 1;
}
function bz(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function yz(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function xz(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function By(e, t = "page") {
  return jy(e) ? yz(e, t) : xz(e, t);
}
function Sz(e) {
  return (t) => {
    const r = vz(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function wz(e, t = !1) {
  function r(o) {
    e(o, { point: By(o) });
  }
  return t ? Sz(r) : r;
}
function es(e, t, r, n) {
  return mz(e, t, wz(r, t === "pointerdown"), n);
}
var Cz = Object.defineProperty, _z = (e, t, r) => t in e ? Cz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, pr = (e, t, r) => (_z(e, typeof t != "symbol" ? t + "" : t, r), r), kz = class {
  constructor(e, t, r) {
    pr(this, "history", []), pr(this, "startEvent", null), pr(this, "lastEvent", null), pr(this, "lastEventInfo", null), pr(this, "handlers", {}), pr(this, "removeListeners", () => {
    }), pr(this, "threshold", 3), pr(this, "win"), pr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = bc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = Az(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = _p();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), pr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, g$.update(this.updatePoint, !0);
    }), pr(this, "onPointerUp", (s, l) => {
      const c = bc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, gz(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: By(e) }, { timestamp: a } = _p();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, bc(o, this.history)), this.removeListeners = Tz(
      es(this.win, "pointermove", this.onPointerMove),
      es(this.win, "pointerup", this.onPointerUp),
      es(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), b$.update(this.updatePoint);
  }
};
function pm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function bc(e, t) {
  return {
    point: e.point,
    delta: pm(e.point, t[t.length - 1]),
    offset: pm(e.point, t[0]),
    velocity: Pz(t, 0.1)
  };
}
var Ez = (e) => e * 1e3;
function Pz(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Ez(t))); )
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
function Tz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function yc(e, t) {
  return Math.abs(e - t);
}
function hm(e) {
  return "x" in e && "y" in e;
}
function Az(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return yc(e, t);
  if (hm(e) && hm(t)) {
    const r = yc(e.x, t.x), n = yc(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function zy(e) {
  const t = be(null);
  return t.current = e, t;
}
function Vy(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = be(null), u = zy({
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
      c.current = new kz(p, u.current, s);
    }
    return es(d, "pointerdown", f);
  }, [e, l, u, s]), Fe(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function Oz(e, t) {
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
var Rz = globalThis != null && globalThis.document ? Ts : Fe;
function $z(e, t) {
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
function Ly({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = Ye([]), [o, a] = Ye(0);
  return Rz(() => {
    const i = e(), s = i.map(
      (l, c) => Oz(l, (u) => {
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
        $z(l, () => {
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
function Dz(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function Mz(e) {
  const [t] = Ly({
    observeMutation: !1,
    getNodes() {
      return [Dz(e) ? e.current : e];
    }
  });
  return t;
}
function Iz(e) {
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
  } = e, P = Zt(f), I = Zt(p), z = Zt(h), j = Ny({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ne] = md({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [J, Q] = Ye(!1), [ee, oe] = Ye(!1), [D, ce] = Ye(-1), de = !(u || d), F = be(X), N = X.map((G) => ga(G, t, r)), V = w * m, T = Fz(N, t, r, V), O = be({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  O.current.value = N, O.current.valueBounds = T;
  const B = N.map((G) => r - G + t), H = (j ? B : N).map((G) => Cs(G, t, r)), A = l === "vertical", Z = be(null), Y = be(null), ae = Ly({
    getNodes() {
      const G = Y.current, ie = G == null ? void 0 : G.querySelectorAll("[role=slider]");
      return ie ? Array.from(ie) : [];
    }
  }), R = _r(), pe = hz(c ?? R), le = q(
    (G) => {
      var ie, xe;
      if (!Z.current)
        return;
      O.current.eventSource = "pointer";
      const Ce = Z.current.getBoundingClientRect(), { clientX: He, clientY: wt } = (xe = (ie = G.touches) == null ? void 0 : ie[0]) != null ? xe : G, Ze = A ? Ce.bottom - wt : He - Ce.left, nt = A ? Ce.height : Ce.width;
      let Wr = Ze / nt;
      return j && (Wr = 1 - Wr), gb(Wr, t, r);
    },
    [A, j, r, t]
  ), $e = (r - t) / 10, ye = m || (r - t) / 100, we = gt(
    () => ({
      setValueAtIndex(G, ie) {
        if (!de)
          return;
        const xe = O.current.valueBounds[G];
        ie = parseFloat(cu(ie, xe.min, ye)), ie = ga(ie, xe.min, xe.max);
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
  ), ht = q(
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
  ), { getThumbStyle: ke, rootStyle: dt, trackStyle: rt, innerTrackStyle: Me } = gt(
    () => Fy({
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
  Fo(() => {
    O.current.eventSource === "keyboard" && (I == null || I(O.current.value));
  }, [N, I]);
  const Ae = (G) => {
    const ie = le(G) || 0, xe = O.current.value.map(
      (nt) => Math.abs(nt - ie)
    ), Ce = Math.min(...xe);
    let He = xe.indexOf(Ce);
    const wt = xe.filter(
      (nt) => nt === Ce
    );
    wt.length > 1 && ie > O.current.value[He] && (He = He + wt.length - 1), ce(He), we.setValueAtIndex(He, ie), se(He);
  }, Ot = (G) => {
    if (D == -1)
      return;
    const ie = le(G) || 0;
    ce(D), we.setValueAtIndex(D, ie), se(D);
  };
  Vy(Y, {
    onPanSessionStart(G) {
      de && (Q(!0), Ae(G), P == null || P(O.current.value));
    },
    onPanSessionEnd() {
      de && (Q(!1), I == null || I(O.current.value));
    },
    onPan(G) {
      de && Ot(G);
    }
  });
  const xt = q(
    (G = {}, ie = null) => ({
      ...G,
      ...M,
      id: pe.root,
      ref: St(ie, Y),
      tabIndex: -1,
      "aria-disabled": So(u),
      "data-focused": or(ee),
      style: { ...G.style, ...dt }
    }),
    [M, u, ee, dt, pe]
  ), lt = q(
    (G = {}, ie = null) => ({
      ...G,
      ref: St(ie, Z),
      id: pe.track,
      "data-disabled": or(u),
      style: { ...G.style, ...rt }
    }),
    [u, rt, pe]
  ), zr = q(
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
  ), Vr = q(
    (G, ie = null) => {
      var xe;
      const { index: Ce, ...He } = G, wt = N[Ce];
      if (wt == null)
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
        "data-active": or(J && D === Ce),
        "aria-valuetext": (xe = z == null ? void 0 : z(wt)) != null ? xe : v == null ? void 0 : v[Ce],
        "aria-valuemin": Ze.min,
        "aria-valuemax": Ze.max,
        "aria-valuenow": wt,
        "aria-orientation": l,
        "aria-disabled": So(u),
        "aria-readonly": So(d),
        "aria-label": b == null ? void 0 : b[Ce],
        "aria-labelledby": b != null && b[Ce] || y == null ? void 0 : y[Ce],
        style: { ...G.style, ...ke(Ce) },
        onKeyDown: wo(G.onKeyDown, ht),
        onFocus: wo(G.onFocus, () => {
          oe(!0), ce(Ce);
        }),
        onBlur: wo(G.onBlur, () => {
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
      ht,
      oe
    ]
  ), Lr = q(
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
      const { value: xe, ...Ce } = G, He = !(xe < t || xe > r), wt = xe >= N[0] && xe <= N[N.length - 1];
      let Ze = Cs(xe, t, r);
      Ze = j ? 100 - Ze : Ze;
      const nt = {
        position: "absolute",
        pointerEvents: "none",
        ...aa({
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
        "data-disabled": or(u),
        "data-invalid": or(!He),
        "data-highlighted": or(wt),
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
    getRootProps: xt,
    getTrackProps: lt,
    getInnerTrackProps: zr,
    getThumbProps: Vr,
    getMarkerProps: te,
    getInputProps: ve,
    getOutputProps: Lr
  };
}
function Fz(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [Nz, rl] = Ft({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [jz, nl] = Ft({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), Bz = _e(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Io("Slider", n), a = jr(n), { direction: i } = an();
    a.direction = i;
    const { getRootProps: s, ...l } = Iz(a), c = gt(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ L.jsx(Nz, { value: c, children: /* @__PURE__ */ L.jsx(jz, { value: o, children: /* @__PURE__ */ L.jsx(
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
Bz.displayName = "RangeSlider";
var zz = _e(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = rl(), i = nl(), s = n(t, r);
    return /* @__PURE__ */ L.jsxs(
      ge.div,
      {
        ...s,
        className: kn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ L.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
zz.displayName = "RangeSliderThumb";
var Vz = _e(
  function(t, r) {
    const { getTrackProps: n } = rl(), o = nl(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: kn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
Vz.displayName = "RangeSliderTrack";
var Lz = _e(function(t, r) {
  const { getInnerTrackProps: n } = rl(), o = nl(), a = n(t, r);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
Lz.displayName = "RangeSliderFilledTrack";
var Wz = _e(
  function(t, r) {
    const { getMarkerProps: n } = rl(), o = nl(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: kn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
Wz.displayName = "RangeSliderMark";
function Uz(e) {
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
  } = e, P = Zt(p), I = Zt(m), z = Zt(v), j = Ny({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ne] = md({
    value: a,
    defaultValue: i ?? Yz(r, n),
    onChange: o
  }), [J, Q] = Ye(!1), [ee, oe] = Ye(!1), D = !(d || f), ce = (n - r) / 10, de = h || (n - r) / 100, F = ga(X, r, n), N = n - F + r, T = Cs(j ? N : F, r, n), O = c === "vertical", B = zy({
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
  }), C = be(null), H = be(null), A = be(null), Z = _r(), Y = u ?? Z, [ae, R] = [`slider-thumb-${Y}`, `slider-track-${Y}`], Se = q(
    (te) => {
      var ve, kr;
      if (!C.current)
        return;
      const G = B.current;
      G.eventSource = "pointer";
      const ie = C.current.getBoundingClientRect(), { clientX: xe, clientY: Ce } = (kr = (ve = te.touches) == null ? void 0 : ve[0]) != null ? kr : te, He = O ? ie.bottom - Ce : xe - ie.left, wt = O ? ie.height : ie.width;
      let Ze = He / wt;
      j && (Ze = 1 - Ze);
      let nt = gb(Ze, G.min, G.max);
      return G.step && (nt = parseFloat(
        cu(nt, G.min, G.step)
      )), nt = ga(nt, G.min, G.max), nt;
    },
    [O, j, B]
  ), pe = q(
    (te) => {
      const ve = B.current;
      ve.isInteractive && (te = parseFloat(cu(te, ve.min, de)), te = ga(te, ve.min, ve.max), ne(te));
    },
    [de, ne, B]
  ), le = gt(
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
  ), ye = (t = z == null ? void 0 : z(F)) != null ? t : b, we = Mz(H), { getThumbStyle: ht, rootStyle: ke, trackStyle: dt, innerTrackStyle: rt } = gt(() => {
    const te = B.current, ve = we ?? { width: 0, height: 0 };
    return Fy({
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
  Fo(() => {
    const te = B.current;
    Me(), te.eventSource === "keyboard" && (I == null || I(te.value));
  }, [F, I]);
  function se(te) {
    const ve = Se(te);
    ve != null && ve !== B.current.value && ne(ve);
  }
  Vy(A, {
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
      ref: St(ve, A),
      tabIndex: -1,
      "aria-disabled": So(d),
      "data-focused": or(ee),
      style: {
        ...te.style,
        ...ke
      }
    }),
    [M, d, ee, ke]
  ), Ot = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: St(ve, C),
      id: R,
      "data-disabled": or(d),
      style: {
        ...te.style,
        ...dt
      }
    }),
    [d, R, dt]
  ), xt = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      style: {
        ...te.style,
        ...rt
      }
    }),
    [rt]
  ), lt = q(
    (te = {}, ve = null) => ({
      ...te,
      ref: St(ve, H),
      role: "slider",
      tabIndex: D ? 0 : void 0,
      id: ae,
      "data-active": or(J),
      "aria-valuetext": ye,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": F,
      "aria-orientation": c,
      "aria-disabled": So(d),
      "aria-readonly": So(f),
      "aria-label": y,
      "aria-labelledby": y ? void 0 : S,
      style: {
        ...te.style,
        ...ht(0)
      },
      onKeyDown: wo(te.onKeyDown, $e),
      onFocus: wo(te.onFocus, () => oe(!0)),
      onBlur: wo(te.onBlur, () => oe(!1))
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
      ht,
      $e
    ]
  ), zr = q(
    (te, ve = null) => {
      const kr = !(te.value < r || te.value > n), G = F >= te.value, ie = Cs(te.value, r, n), xe = {
        position: "absolute",
        pointerEvents: "none",
        ...Hz({
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
        "data-disabled": or(d),
        "data-invalid": or(!kr),
        "data-highlighted": or(G),
        style: {
          ...te.style,
          ...xe
        }
      };
    },
    [d, j, n, r, c, F]
  ), Vr = q(
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
    getTrackProps: Ot,
    getInnerTrackProps: xt,
    getThumbProps: lt,
    getMarkerProps: zr,
    getInputProps: Vr
  };
}
function Hz(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function Yz(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [qz, ol] = Ft({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [Gz, al] = Ft({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), Xz = _e((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Io("Slider", n), a = jr(n), { direction: i } = an();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = Uz(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ L.jsx(qz, { value: c, children: /* @__PURE__ */ L.jsx(Gz, { value: o, children: /* @__PURE__ */ L.jsxs(
    ge.div,
    {
      ...u,
      className: kn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ L.jsx("input", { ...d })
      ]
    }
  ) }) });
});
Xz.displayName = "Slider";
var Kz = _e((e, t) => {
  const { getThumbProps: r } = ol(), n = al(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: kn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
Kz.displayName = "SliderThumb";
var Zz = _e((e, t) => {
  const { getTrackProps: r } = ol(), n = al(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: kn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
Zz.displayName = "SliderTrack";
var Jz = _e(
  (e, t) => {
    const { getInnerTrackProps: r } = ol(), n = al(), o = r(e, t);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...o,
        className: kn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
Jz.displayName = "SliderFilledTrack";
var Qz = _e((e, t) => {
  const { getMarkerProps: r } = ol(), n = al(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: kn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
Qz.displayName = "SliderMark";
var eV = {
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
}, yu = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, ts = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function tV(e = {}) {
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
  } = e, { isOpen: P, onOpen: I, onClose: z } = yy({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: j, getPopperProps: X, getArrowInnerProps: ne, getArrowProps: J } = by({
    enabled: P,
    placement: u,
    arrowPadding: v,
    modifiers: b,
    gutter: S,
    offset: k,
    direction: w
  }), Q = _r(), oe = `tooltip-${d ?? Q}`, D = be(null), ce = be(), de = q(() => {
    ce.current && (clearTimeout(ce.current), ce.current = void 0);
  }, []), F = be(), N = q(() => {
    F.current && (clearTimeout(F.current), F.current = void 0);
  }, []), V = q(() => {
    N(), z();
  }, [z, N]), T = rV(D, V), O = q(() => {
    if (!y && !ce.current) {
      T();
      const R = ts(D);
      ce.current = R.setTimeout(I, t);
    }
  }, [T, y, I, t]), B = q(() => {
    de();
    const R = ts(D);
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
  ba(
    () => yu(D),
    "keydown",
    s ? A : void 0
  ), ba(
    () => {
      const R = D.current;
      if (!R)
        return null;
      const Se = Jb(R);
      return Se.localName === "body" ? ts(D) : Se;
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
  }, [de, N]), ba(() => D.current, "pointerleave", B);
  const Z = q(
    (R = {}, Se = null) => ({
      ...R,
      ref: St(D, Se, j),
      onPointerEnter: $t(R.onPointerEnter, (le) => {
        le.pointerType !== "touch" && O();
      }),
      onClick: $t(R.onClick, C),
      onPointerDown: $t(R.onPointerDown, H),
      onFocus: $t(R.onFocus, O),
      onBlur: $t(R.onBlur, B),
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
          [Et.arrowSize.var]: m ? `${m}px` : void 0,
          [Et.arrowShadowColor.var]: h
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
        transformOrigin: Et.transformOrigin.varRef
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
var xc = "chakra-ui:close-tooltip";
function rV(e, t) {
  return Fe(() => {
    const r = yu(e);
    return r.addEventListener(xc, t), () => r.removeEventListener(xc, t);
  }, [t, e]), () => {
    const r = yu(e), n = ts(e);
    r.dispatchEvent(new n.CustomEvent(xc));
  };
}
function nV(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function oV(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var aV = ge(Cn.div), iV = _e((e, t) => {
  var r, n;
  const o = Mo("Tooltip", e), a = jr(e), i = an(), {
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
    const X = pv(i, "colors", S);
    o[Et.arrowBg.var] = X;
  }
  const k = tV({ ...y, direction: i.direction }), w = typeof s == "string" || c;
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
    const X = As.only(s);
    M = Ua(
      X,
      k.getTriggerProps(X.props, X.ref)
    );
  }
  const P = !!u, I = k.getTooltipProps({}, t), z = P ? nV(I, ["role", "id"]) : I, j = oV(I, ["role", "id"]);
  return l ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
    M,
    /* @__PURE__ */ L.jsx(No, { children: k.isOpen && /* @__PURE__ */ L.jsx(qa, { ...p, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...k.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ L.jsxs(
          aV,
          {
            variants: eV,
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
iV.displayName = "Tooltip";
const KV = At(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ L.jsx(jm, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  SV as $,
  wc as A,
  dV as B,
  k0 as C,
  wu as D,
  fV as E,
  jm as F,
  KV as G,
  Ln as H,
  MF as I,
  dz as J,
  tz as K,
  cz as L,
  Ty as M,
  pz as N,
  fz as O,
  lz as P,
  Uw as Q,
  nB as R,
  O0 as S,
  ka as T,
  sN as U,
  uB as V,
  lB as W,
  aB as X,
  dB as Y,
  a_ as Z,
  P0 as _,
  An as a,
  qa as a$,
  o_ as a0,
  an as a1,
  UV as a2,
  Io as a3,
  iN as a4,
  Mo as a5,
  rF as a6,
  Js as a7,
  ge as a8,
  wV as a9,
  Mv as aA,
  Vt as aB,
  FV as aC,
  b$ as aD,
  MV as aE,
  NV as aF,
  g$ as aG,
  _p as aH,
  IV as aI,
  kV as aJ,
  xV as aK,
  c$ as aL,
  f$ as aM,
  Nk as aN,
  h_ as aO,
  L$ as aP,
  Zt as aQ,
  BV as aR,
  Fo as aS,
  Cn as aT,
  hn as aU,
  _e as aV,
  Ft as aW,
  Xe as aX,
  jr as aY,
  cb as aZ,
  No as a_,
  _y as aa,
  VV as ab,
  WV as ac,
  CF as ad,
  AF as ae,
  PF as af,
  oN as ag,
  Os as ah,
  jj as ai,
  Xz as aj,
  Zz as ak,
  Jz as al,
  Kz as am,
  Bz as an,
  Vz as ao,
  Lz as ap,
  zz as aq,
  XV as ar,
  sz as as,
  uV as at,
  ju as au,
  gV as av,
  yV as aw,
  n_ as ax,
  Oa as ay,
  av as az,
  at as b,
  Cy as b$,
  iv as b0,
  AV as b1,
  $v as b2,
  o$ as b3,
  fF as b4,
  md as b5,
  St as b6,
  $t as b7,
  _V as b8,
  iu as b9,
  Lj as bA,
  Et as bB,
  jo as bC,
  EV as bD,
  me as bE,
  CV as bF,
  mN as bG,
  Ke as bH,
  TE as bI,
  PE as bJ,
  PV as bK,
  ME as bL,
  kE as bM,
  BE as bN,
  OV as bO,
  Zw as bP,
  Qw as bQ,
  ny as bR,
  TF as bS,
  _F as bT,
  vb as bU,
  mb as bV,
  EF as bW,
  aN as bX,
  ly as bY,
  ay as bZ,
  uN as b_,
  Jr as ba,
  ro as bb,
  hb as bc,
  LV as bd,
  OF as be,
  k_ as bf,
  ga as bg,
  $F as bh,
  DF as bi,
  ba as bj,
  kl as bk,
  DV as bl,
  $V as bm,
  tN as bn,
  w_ as bo,
  iy as bp,
  lN as bq,
  oi as br,
  qV as bs,
  YV as bt,
  oB as bu,
  yy as bv,
  by as bw,
  Vj as bx,
  gN as by,
  HV as bz,
  GS as c,
  ek as c$,
  Wj as c0,
  qj as c1,
  Xj as c2,
  Kj as c3,
  Bo as c4,
  Yj as c5,
  Hj as c6,
  Uj as c7,
  wy as c8,
  Zj as c9,
  ji as cA,
  je as cB,
  $n as cC,
  W_ as cD,
  fk as cE,
  TV as cF,
  Ic as cG,
  U_ as cH,
  Ek as cI,
  ss as cJ,
  pv as cK,
  Fk as cL,
  lv as cM,
  H_ as cN,
  Ok as cO,
  nr as cP,
  Y_ as cQ,
  J_ as cR,
  sa as cS,
  Tk as cT,
  fv as cU,
  zs as cV,
  Vk as cW,
  Q_ as cX,
  ok as cY,
  Je as cZ,
  Vu as c_,
  Jj as ca,
  GV as cb,
  PB as cc,
  Iy as cd,
  nz as ce,
  CB as cf,
  Sn as cg,
  Ey as ch,
  Gn as ci,
  p_ as cj,
  V$ as ck,
  Wz as cl,
  Nz as cm,
  Qz as cn,
  qz as co,
  Iz as cp,
  rl as cq,
  nl as cr,
  Uz as cs,
  ol as ct,
  al as cu,
  A$ as cv,
  Ul as cw,
  B$ as cx,
  jV as cy,
  ck as cz,
  br as d,
  dk as d0,
  uk as d1,
  T_ as d2,
  tk as d3,
  rk as d4,
  nk as d5,
  Wk as d6,
  Lk as d7,
  RV as d8,
  tV as d9,
  hF as da,
  vF as db,
  pb as dc,
  bF as dd,
  db as de,
  su as df,
  fb as dg,
  lu as dh,
  Lm as e,
  XS as f,
  pV as g,
  KS as h,
  xm as i,
  Mn as j,
  hV as k,
  hf as l,
  r1 as m,
  vV as n,
  L as o,
  Jw as p,
  Hn as q,
  cV as r,
  _c as s,
  mV as t,
  bV as u,
  y1 as v,
  _m as w,
  iV as x,
  sy as y,
  wa as z
};
