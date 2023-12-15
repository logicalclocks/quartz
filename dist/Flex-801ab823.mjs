import * as U from "react";
import It, { createContext as Cr, forwardRef as At, createElement as ir, Fragment as Su, useContext as ft, useLayoutEffect as $s, useEffect as Fe, useState as Ye, useRef as be, useMemo as gt, useReducer as x0, useCallback as G, useInsertionEffect as gm, useId as _r, cloneElement as Ka, Children as Ds, isValidElement as wu, PureComponent as S0 } from "react";
import { createPortal as bm } from "react-dom";
var yi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Is(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
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
var Cc = { exports: {} }, Go = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd;
function w0() {
  if (Hd)
    return Go;
  Hd = 1;
  var e = It, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Go.Fragment = r, Go.jsx = i, Go.jsxs = i, Go;
}
var qo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function C0() {
  return Yd || (Yd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = It, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function v(x) {
      if (x === null || typeof x != "object")
        return null;
      var W = m && x[m] || x[h];
      return typeof W == "function" ? W : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(x) {
      {
        for (var W = arguments.length, K = new Array(W > 1 ? W - 1 : 0), me = 1; me < W; me++)
          K[me - 1] = arguments[me];
        S("error", x, K);
      }
    }
    function S(x, W, K) {
      {
        var me = b.ReactDebugCurrentFrame, Me = me.getStackAddendum();
        Me !== "" && (W += "%s", K = K.concat([Me]));
        var Re = K.map(function(Pe) {
          return String(Pe);
        });
        Re.unshift("Warning: " + W), Function.prototype.apply.call(console[x], console, Re);
      }
    }
    var _ = !1, w = !1, M = !1, P = !1, I = !1, z;
    z = Symbol.for("react.module.reference");
    function j(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || I || x === o || x === c || x === u || P || x === p || _ || w || M || typeof x == "object" && x !== null && (x.$$typeof === f || x.$$typeof === d || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function X(x, W, K) {
      var me = x.displayName;
      if (me)
        return me;
      var Me = W.displayName || W.name || "";
      return Me !== "" ? K + "(" + Me + ")" : K;
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
            var me = x.displayName || null;
            return me !== null ? me : J(x.type) || "Memo";
          case f: {
            var Me = x, Re = Me._payload, Pe = Me._init;
            try {
              return J(Pe(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, ee = 0, oe, D, ce, fe, F, N, V;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function A() {
      {
        if (ee === 0) {
          oe = console.log, D = console.info, ce = console.warn, fe = console.error, F = console.group, N = console.groupCollapsed, V = console.groupEnd;
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
              value: fe
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
    function O(x, W, K) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (Me) {
            var me = Me.stack.trim().match(/\n( *(at )?)/);
            H = me && me[1] || "";
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
      var me;
      Z = !0;
      var Me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = C.current, C.current = null, A();
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
            } catch (Bt) {
              me = Bt;
            }
            Reflect.construct(x, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (Bt) {
              me = Bt;
            }
            x.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Bt) {
            me = Bt;
          }
          x();
        }
      } catch (Bt) {
        if (Bt && me && typeof Bt.stack == "string") {
          for (var Ee = Bt.stack.split(`
`), Ct = me.stack.split(`
`), ot = Ee.length - 1, ct = Ct.length - 1; ot >= 1 && ct >= 0 && Ee[ot] !== Ct[ct]; )
            ct--;
          for (; ot >= 1 && ct >= 0; ot--, ct--)
            if (Ee[ot] !== Ct[ct]) {
              if (ot !== 1 || ct !== 1)
                do
                  if (ot--, ct--, ct < 0 || Ee[ot] !== Ct[ct]) {
                    var jt = `
` + Ee[ot].replace(" at new ", " at ");
                    return x.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", x.displayName)), typeof x == "function" && Y.set(x, jt), jt;
                  }
                while (ot >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        Z = !1, C.current = Re, B(), Error.prepareStackTrace = Me;
      }
      var Pr = x ? x.displayName || x.name : "", hi = Pr ? O(Pr) : "";
      return typeof x == "function" && Y.set(x, hi), hi;
    }
    function Se(x, W, K) {
      return R(x, !1);
    }
    function he(x) {
      var W = x.prototype;
      return !!(W && W.isReactComponent);
    }
    function le(x, W, K) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return R(x, he(x));
      if (typeof x == "string")
        return O(x);
      switch (x) {
        case c:
          return O("Suspense");
        case u:
          return O("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return Se(x.render);
          case d:
            return le(x.type, W, K);
          case f: {
            var me = x, Me = me._payload, Re = me._init;
            try {
              return le(Re(Me), W, K);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, ye = {}, we = b.ReactDebugCurrentFrame;
    function ht(x) {
      if (x) {
        var W = x._owner, K = le(x.type, x._source, W ? W.type : null);
        we.setExtraStackFrame(K);
      } else
        we.setExtraStackFrame(null);
    }
    function ke(x, W, K, me, Me) {
      {
        var Re = Function.call.bind(De);
        for (var Pe in x)
          if (Re(x, Pe)) {
            var Ee = void 0;
            try {
              if (typeof x[Pe] != "function") {
                var Ct = Error((me || "React class") + ": " + K + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ct.name = "Invariant Violation", Ct;
              }
              Ee = x[Pe](W, Pe, me, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              Ee = ot;
            }
            Ee && !(Ee instanceof Error) && (ht(Me), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", me || "React class", K, Pe, typeof Ee), ht(null)), Ee instanceof Error && !(Ee.message in ye) && (ye[Ee.message] = !0, ht(Me), y("Failed %s type: %s", K, Ee.message), ht(null));
          }
      }
    }
    var dt = Array.isArray;
    function rt(x) {
      return dt(x);
    }
    function Ie(x) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, K = W && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return K;
      }
    }
    function se(x) {
      try {
        return Oe(x), !1;
      } catch {
        return !0;
      }
    }
    function Oe(x) {
      return "" + x;
    }
    function Ot(x) {
      if (se(x))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(x)), Oe(x);
    }
    var xt = b.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vr, Lr, Wr;
    Wr = {};
    function te(x) {
      if (De.call(x, "ref")) {
        var W = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ve(x) {
      if (De.call(x, "key")) {
        var W = Object.getOwnPropertyDescriptor(x, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function kr(x, W) {
      if (typeof x.ref == "string" && xt.current && W && xt.current.stateNode !== W) {
        var K = J(xt.current.type);
        Wr[K] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', J(xt.current.type), x.ref), Wr[K] = !0);
      }
    }
    function q(x, W) {
      {
        var K = function() {
          Vr || (Vr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
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
          Lr || (Lr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        K.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var xe = function(x, W, K, me, Me, Re, Pe) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: W,
        ref: K,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: Re
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
        value: me
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Ce(x, W, K, me, Me) {
      {
        var Re, Pe = {}, Ee = null, Ct = null;
        K !== void 0 && (Ot(K), Ee = "" + K), ve(W) && (Ot(W.key), Ee = "" + W.key), te(W) && (Ct = W.ref, kr(W, Me));
        for (Re in W)
          De.call(W, Re) && !lt.hasOwnProperty(Re) && (Pe[Re] = W[Re]);
        if (x && x.defaultProps) {
          var ot = x.defaultProps;
          for (Re in ot)
            Pe[Re] === void 0 && (Pe[Re] = ot[Re]);
        }
        if (Ee || Ct) {
          var ct = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ee && q(Pe, ct), Ct && ie(Pe, ct);
        }
        return xe(x, Ee, Ct, Me, me, xt.current, Pe);
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
    function Ur(x) {
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
    function cl(x) {
      {
        if (x !== void 0) {
          var W = x.fileName.replace(/^.*[\\\/]/, ""), K = x.lineNumber;
          return `

Check your code at ` + W + ":" + K + ".";
        }
        return "";
      }
    }
    var ui = {};
    function ul(x) {
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
    function di(x, W) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var K = ul(W);
        if (ui[K])
          return;
        ui[K] = !0;
        var me = "";
        x && x._owner && x._owner !== He.current && (me = " It was passed a child from " + J(x._owner.type) + "."), Ze(x), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, me), Ze(null);
      }
    }
    function fi(x, W) {
      {
        if (typeof x != "object")
          return;
        if (rt(x))
          for (var K = 0; K < x.length; K++) {
            var me = x[K];
            Ur(me) && di(me, W);
          }
        else if (Ur(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var Me = v(x);
          if (typeof Me == "function" && Me !== x.entries)
            for (var Re = Me.call(x), Pe; !(Pe = Re.next()).done; )
              Ur(Pe.value) && di(Pe.value, W);
        }
      }
    }
    function fr(x) {
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
          var me = J(W);
          ke(K, x.props, "prop", me, x);
        } else if (W.PropTypes !== void 0 && !nt) {
          nt = !0;
          var Me = J(W);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Me || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dl(x) {
      {
        for (var W = Object.keys(x.props), K = 0; K < W.length; K++) {
          var me = W[K];
          if (me !== "children" && me !== "key") {
            Ze(x), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", me), Ze(null);
            break;
          }
        }
        x.ref !== null && (Ze(x), y("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    function pi(x, W, K, me, Me, Re) {
      {
        var Pe = j(x);
        if (!Pe) {
          var Ee = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ct = cl(Me);
          Ct ? Ee += Ct : Ee += Er();
          var ot;
          x === null ? ot = "null" : rt(x) ? ot = "array" : x !== void 0 && x.$$typeof === t ? (ot = "<" + (J(x.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof x, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, Ee);
        }
        var ct = Ce(x, W, K, Me, Re);
        if (ct == null)
          return ct;
        if (Pe) {
          var jt = W.children;
          if (jt !== void 0)
            if (me)
              if (rt(jt)) {
                for (var Pr = 0; Pr < jt.length; Pr++)
                  fi(jt[Pr], x);
                Object.freeze && Object.freeze(jt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fi(jt, x);
        }
        return x === n ? dl(ct) : fr(ct), ct;
      }
    }
    function fl(x, W, K) {
      return pi(x, W, K, !0);
    }
    function pl(x, W, K) {
      return pi(x, W, K, !1);
    }
    var hl = pl, ln = fl;
    qo.Fragment = n, qo.jsx = hl, qo.jsxs = ln;
  }()), qo;
}
process.env.NODE_ENV === "production" ? Cc.exports = w0() : Cc.exports = C0();
var L = Cc.exports, Pa = {};
function Ta(e) {
  "@babel/helpers - typeof";
  return Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ta(e);
}
function _0(e, t) {
  if (Ta(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ta(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k0(e) {
  var t = _0(e, "string");
  return Ta(t) === "symbol" ? t : String(t);
}
function Cu(e, t, r) {
  return t = k0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function ym(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var E0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xm = ym(
  function(e) {
    return E0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function _c(e, t) {
  return _c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, _c(e, t);
}
function P0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _c(e, t);
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
  function t(V, T, A, B, C) {
    for (var H = 0, O = 0, Z = 0, Y = 0, ae, R, Se = 0, he = 0, le, De = le = ae = 0, ye = 0, we = 0, ht = 0, ke = 0, dt = A.length, rt = dt - 1, Ie, se = "", Oe = "", Ot = "", xt = "", lt; ye < dt; ) {
      if (R = A.charCodeAt(ye), ye === rt && O + Y + Z + H !== 0 && (O !== 0 && (R = O === 47 ? 10 : 47), Y = Z = H = 0, dt++, rt++), O + Y + Z + H === 0) {
        if (ye === rt && (0 < we && (se = se.replace(f, "")), 0 < se.trim().length)) {
          switch (R) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += A.charAt(ye);
          }
          R = 59;
        }
        switch (R) {
          case 123:
            for (se = se.trim(), ae = se.charCodeAt(0), le = 1, ke = ++ye; ye < dt; ) {
              switch (R = A.charCodeAt(ye)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (R = A.charCodeAt(ye + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (De = ye + 1; De < rt; ++De)
                          switch (A.charCodeAt(De)) {
                            case 47:
                              if (R === 42 && A.charCodeAt(De - 1) === 42 && ye + 2 !== De) {
                                ye = De + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (R === 47) {
                                ye = De + 1;
                                break e;
                              }
                          }
                        ye = De;
                      }
                  }
                  break;
                case 91:
                  R++;
                case 40:
                  R++;
                case 34:
                case 39:
                  for (; ye++ < rt && A.charCodeAt(ye) !== R; )
                    ;
              }
              if (le === 0)
                break;
              ye++;
            }
            switch (le = A.substring(ke, ye), ae === 0 && (ae = (se = se.replace(d, "").trim()).charCodeAt(0)), ae) {
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
                      le = se + le, B === 112 && (le = (Oe += le, ""));
                  }
                else
                  le = "";
                break;
              default:
                le = t(T, r(T, se, ht), le, B, C + 1);
            }
            Ot += le, le = ht = we = De = ae = 0, se = "", R = A.charCodeAt(++ye);
            break;
          case 125:
          case 59:
            if (se = (0 < we ? se.replace(f, "") : se).trim(), 1 < (ke = se.length))
              switch (De === 0 && (ae = se.charCodeAt(0), ae === 45 || 96 < ae && 123 > ae) && (ke = (se = se.replace(" ", ":")).length), 0 < ce && (lt = s(1, se, T, V, J, ne, Oe.length, B, C, B)) !== void 0 && (ke = (se = lt.trim()).length) === 0 && (se = "\0\0"), ae = se.charCodeAt(0), R = se.charCodeAt(1), ae) {
                case 0:
                  break;
                case 64:
                  if (R === 105 || R === 99) {
                    xt += se + A.charAt(ye);
                    break;
                  }
                default:
                  se.charCodeAt(ke - 1) !== 58 && (Oe += o(se, ae, R, se.charCodeAt(2)));
              }
            ht = we = De = ae = 0, se = "", R = A.charCodeAt(++ye);
        }
      }
      switch (R) {
        case 13:
        case 10:
          O === 47 ? O = 0 : 1 + ae === 0 && B !== 107 && 0 < se.length && (we = 1, se += "\0"), 0 < ce * F && s(0, se, T, V, J, ne, Oe.length, B, C, B), ne = 1, J++;
          break;
        case 59:
        case 125:
          if (O + Y + Z + H === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, Ie = A.charAt(ye), R) {
            case 9:
            case 32:
              if (Y + H + O === 0)
                switch (Se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ie = "";
                    break;
                  default:
                    R !== 32 && (Ie = " ");
                }
              break;
            case 0:
              Ie = "\\0";
              break;
            case 12:
              Ie = "\\f";
              break;
            case 11:
              Ie = "\\v";
              break;
            case 38:
              Y + O + H === 0 && (we = ht = 1, Ie = "\f" + Ie);
              break;
            case 108:
              if (Y + O + H + Q === 0 && 0 < De)
                switch (ye - De) {
                  case 2:
                    Se === 112 && A.charCodeAt(ye - 3) === 58 && (Q = Se);
                  case 8:
                    he === 111 && (Q = he);
                }
              break;
            case 58:
              Y + O + H === 0 && (De = ye);
              break;
            case 44:
              O + Z + Y + H === 0 && (we = 1, Ie += "\r");
              break;
            case 34:
            case 39:
              O === 0 && (Y = Y === R ? 0 : Y === 0 ? R : Y);
              break;
            case 91:
              Y + O + Z === 0 && H++;
              break;
            case 93:
              Y + O + Z === 0 && H--;
              break;
            case 41:
              Y + O + H === 0 && Z--;
              break;
            case 40:
              if (Y + O + H === 0) {
                if (ae === 0)
                  switch (2 * Se + 3 * he) {
                    case 533:
                      break;
                    default:
                      ae = 1;
                  }
                Z++;
              }
              break;
            case 64:
              O + Z + Y + H + De + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Y + H + Z))
                switch (O) {
                  case 0:
                    switch (2 * R + 3 * A.charCodeAt(ye + 1)) {
                      case 235:
                        O = 47;
                        break;
                      case 220:
                        ke = ye, O = 42;
                    }
                    break;
                  case 42:
                    R === 47 && Se === 42 && ke + 2 !== ye && (A.charCodeAt(ke + 2) === 33 && (Oe += A.substring(ke, ye + 1)), Ie = "", O = 0);
                }
          }
          O === 0 && (se += Ie);
      }
      he = Se, Se = R, ye++;
    }
    if (ke = Oe.length, 0 < ke) {
      if (we = T, 0 < ce && (lt = s(2, Oe, we, V, J, ne, ke, B, C, B), lt !== void 0 && (Oe = lt).length === 0))
        return xt + Oe + Ot;
      if (Oe = we.join(",") + "{" + Oe + "}", ee * Q !== 0) {
        switch (ee !== 2 || a(Oe, 2) || (Q = 0), Q) {
          case 111:
            Oe = Oe.replace(_, ":-moz-$1") + Oe;
            break;
          case 112:
            Oe = Oe.replace(S, "::-webkit-input-$1") + Oe.replace(S, "::-moz-$1") + Oe.replace(S, ":-ms-input-$1") + Oe;
        }
        Q = 0;
      }
    }
    return xt + Oe + Ot;
  }
  function r(V, T, A) {
    var B = T.trim().split(v);
    T = B;
    var C = B.length, H = V.length;
    switch (H) {
      case 0:
      case 1:
        var O = 0;
        for (V = H === 0 ? "" : V[0] + " "; O < C; ++O)
          T[O] = n(V, T[O], A).trim();
        break;
      default:
        var Z = O = 0;
        for (T = []; O < C; ++O)
          for (var Y = 0; Y < H; ++Y)
            T[Z++] = n(V[Y] + " ", B[O], A).trim();
    }
    return T;
  }
  function n(V, T, A) {
    var B = T.charCodeAt(0);
    switch (33 > B && (B = (T = T.trim()).charCodeAt(0)), B) {
      case 38:
        return T.replace(b, "$1" + V.trim());
      case 58:
        return V.trim() + T.replace(b, "$1" + V.trim());
      default:
        if (0 < 1 * A && 0 < T.indexOf("\f"))
          return T.replace(b, (V.charCodeAt(0) === 58 ? "" : "$1") + V.trim());
    }
    return V + T;
  }
  function o(V, T, A, B) {
    var C = V + ";", H = 2 * T + 3 * A + 4 * B;
    if (H === 944) {
      V = C.indexOf(":", 9) + 1;
      var O = C.substring(V, C.length - 1).trim();
      return O = C.substring(0, V).trim() + O + ";", ee === 1 || ee === 2 && a(O, 1) ? "-webkit-" + O + O : O;
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
        return O = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + O + "-webkit-" + C + "-ms-flex-pack" + O + C;
      case 1005:
        return m.test(C) ? C.replace(p, ":-webkit-") + C.replace(p, ":-moz-") + C : C;
      case 1e3:
        switch (O = C.substring(13).trim(), T = O.indexOf("-") + 1, O.charCodeAt(0) + O.charCodeAt(T)) {
          case 226:
            O = C.replace(w, "tb");
            break;
          case 232:
            O = C.replace(w, "tb-rl");
            break;
          case 220:
            O = C.replace(w, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + O + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (T = (C = V).length - 10, O = (C.charCodeAt(T) === 33 ? C.substring(0, T) : C).substring(V.indexOf(":", 7) + 1).trim(), H = O.charCodeAt(0) + (O.charCodeAt(7) | 0)) {
          case 203:
            if (111 > O.charCodeAt(8))
              break;
          case 115:
            C = C.replace(O, "-webkit-" + O) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace(O, "-webkit-" + (102 < H ? "inline-" : "") + "box") + ";" + C.replace(O, "-webkit-" + O) + ";" + C.replace(O, "-ms-" + O + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return O = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + O + "-ms-flex-" + O + C;
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
          return (O = V.substring(V.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(V.replace("stretch", "fill-available"), T, A, B).replace(":fill-available", ":stretch") : C.replace(O, "-webkit-" + O) + C.replace(O, "-moz-" + O.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, A + B === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + C;
    }
    return C;
  }
  function a(V, T) {
    var A = V.indexOf(T === 1 ? ":" : "{"), B = V.substring(0, T !== 3 ? A : 10);
    return A = V.substring(A + 1, V.length - 1), fe(T !== 2 ? B : B.replace(z, "$1"), A, T);
  }
  function i(V, T) {
    var A = o(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return A !== T + ";" ? A.replace(P, " or ($1)").substring(4) : "(" + T + ")";
  }
  function s(V, T, A, B, C, H, O, Z, Y, ae) {
    for (var R = 0, Se = T, he; R < ce; ++R)
      switch (he = D[R].call(u, V, Se, A, B, C, H, O, Z, Y, ae)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Se = he;
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
          for (var T = 0, A = V.length; T < A; ++T)
            l(V[T]);
        else
          F = !!V | 0;
    }
    return l;
  }
  function c(V) {
    return V = V.prefix, V !== void 0 && (fe = null, V ? typeof V != "function" ? ee = 1 : (ee = 2, fe = V) : ee = 0), c;
  }
  function u(V, T) {
    var A = V;
    if (33 > A.charCodeAt(0) && (A = A.trim()), N = A, A = [N], 0 < ce) {
      var B = s(-1, T, A, A, J, ne, 0, 0, 0, 0);
      B !== void 0 && typeof B == "string" && (T = B);
    }
    var C = t(oe, A, T, 0, 0);
    return 0 < ce && (B = s(-2, C, A, A, J, ne, C.length, 0, 0, 0), B !== void 0 && (C = B)), N = "", Q = 0, ne = J = 1, C;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, p = /: */g, m = /zoo|gra/, h = /([,: ])(transform)/g, v = /,\r+?/g, b = /([\t\r\n ])*\f?&/g, y = /@(k\w+)\s*(\S*)\s*/, S = /::(place)/g, _ = /:(read-only)/g, w = /[svh]\w+-[tblr]{2}/, M = /\(\s*(.*)\s*\)/g, P = /([\s\S]*?);/g, I = /-self|flex-/g, z = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, ne = 1, J = 1, Q = 0, ee = 1, oe = [], D = [], ce = 0, fe = null, F = 0, N = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var Gd = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, kc = "/*|*/", $0 = kc + "}";
function D0(e) {
  e && Aa.current.insert(e + "}");
}
var Aa = {
  current: null
}, M0 = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return Aa.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + kc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return Aa.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? kc : "");
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
    if (Aa.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var y = m.map;
      Aa.current = {
        insert: function(_) {
          h.insert(_ + y);
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
function Sm(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var wm = function(t, r, n) {
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
}, qd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, B0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", z0 = /[A-Z]|^ms/g, Cm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _u = function(t) {
  return t.charCodeAt(1) === 45;
}, Xd = function(t) {
  return t != null && typeof t != "boolean";
}, _l = ym(function(e) {
  return _u(e) ? e : e.replace(z0, "-$&").toLowerCase();
}), ss = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Cm, function(n, o, a) {
          return vr = {
            name: o,
            styles: a,
            next: vr
          }, o;
        });
  }
  return j0[t] !== 1 && !_u(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var V0 = /(attr|calc|counters?|url)\(/, L0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], W0 = ss, U0 = /^-ms-/, H0 = /-(.)/g, Kd = {};
  ss = function(t, r) {
    t === "content" && (typeof r != "string" || L0.indexOf(r) === -1 && !V0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = W0(t, r);
    return n !== "" && !_u(t) && t.indexOf("-") !== -1 && Kd[t] === void 0 && (Kd[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(U0, "ms-").replace(H0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Zd = !0;
function Oa(e, t, r, n) {
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
        return vr = {
          name: r.name,
          styles: r.styles,
          next: vr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            vr = {
              name: o.name,
              styles: o.styles,
              next: vr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return Y0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = vr, s = r(e);
        return vr = i, Oa(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(Cm, function(d, f, p) {
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
  return process.env.NODE_ENV !== "production" && n && Zd && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Zd = !1), u !== void 0 && !n ? u : r;
}
function Y0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Oa(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Xd(i) && (n += _l(a) + ":" + ss(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Xd(i[s]) && (n += _l(a) + ":" + ss(a, i[s]) + ";");
        else {
          var l = Oa(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += _l(a) + ":" + l + ";";
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
var Jd = /label:\s*([^\s;\n{]+)\s*;/g, _m;
process.env.NODE_ENV !== "production" && (_m = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var vr, Ec = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  vr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Oa(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(qd), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Oa(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(qd), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(_m, function(f) {
    return l = f, "";
  })), Jd.lastIndex = 0;
  for (var c = "", u; (u = Jd.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = N0(a) + c;
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
}, G0 = Object.prototype.hasOwnProperty, km = /* @__PURE__ */ Cr(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? I0() : null
), Ra = /* @__PURE__ */ Cr({});
km.Provider;
var Em = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ ir(km.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ At(r);
}, Qd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ef = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", q0 = function() {
  return null;
}, tf = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Qd], s = [a], l = "";
  typeof r.className == "string" ? l = Sm(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = Ec(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[ef];
    u && (c = Ec([c, "label:" + u + ";"]));
  }
  wm(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    G0.call(r, f) && f !== "css" && f !== Qd && (process.env.NODE_ENV === "production" || f !== ef) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ ir(i, d), m = /* @__PURE__ */ ir(q0, null);
  return /* @__PURE__ */ ir(Su, null, m, p);
}, X0 = /* @__PURE__ */ Em(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ ir(Ra.Consumer, null, function(n) {
    return tf(t, e, n, r);
  }) : tf(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (X0.displayName = "EmotionCssPropInternal");
var K0 = xm, Z0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, rf = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? K0 : Z0;
};
function nf(e, t) {
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
    t % 2 ? nf(Object(r), !0).forEach(function(n) {
      Cu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var of = `You have illegal escape sequence in your template literal, most likely inside content's property value.
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
  var l = o || rf(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(of), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(of), d.push(u[p], u[0][p]);
    }
    var m = Em(function(h, v, b) {
      return /* @__PURE__ */ ir(Ra.Consumer, null, function(y) {
        var S = c && h.as || s, _ = "", w = [], M = h;
        if (h.theme == null) {
          M = {};
          for (var P in h)
            M[P] = h[P];
          M.theme = y;
        }
        typeof h.className == "string" ? _ = Sm(v.registered, w, h.className) : h.className != null && (_ = h.className + " ");
        var I = Ec(d.concat(w), v.registered, M);
        wm(v, I, typeof S == "string"), _ += v.key + "-" + I.name, a !== void 0 && (_ += " " + a);
        var z = c && o === void 0 ? rf(S) : l, j = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          z(X) && (j[X] = h[X]);
        j.className = _, j.ref = b || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ne = /* @__PURE__ */ ir(S, j), J = /* @__PURE__ */ ir(Q0, null);
        return /* @__PURE__ */ ir(Su, null, J, ne);
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
], Pc = ex.bind();
tx.forEach(function(e) {
  Pc[e] = Pc(e);
});
const rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pc
}, Symbol.toStringTag, { value: "Module" })), nx = /* @__PURE__ */ Is(rx);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var af = Object.getOwnPropertySymbols, ox = Object.prototype.hasOwnProperty, ax = Object.prototype.propertyIsEnumerable;
function ix(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function sx() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, r = 0; r < 10; r++)
      t["_" + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function(a) {
      return t[a];
    });
    if (n.join("") !== "0123456789")
      return !1;
    var o = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(a) {
      o[a] = a;
    }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var Pm = sx() ? Object.assign : function(e, t) {
  for (var r, n = ix(e), o, a = 1; a < arguments.length; a++) {
    r = Object(arguments[a]);
    for (var i in r)
      ox.call(r, i) && (n[i] = r[i]);
    if (af) {
      o = af(r);
      for (var s = 0; s < o.length; s++)
        ax.call(r, o[s]) && (n[o[s]] = r[o[s]]);
    }
  }
  return n;
};
const xr = /* @__PURE__ */ Ms(Pm);
var sf = function(t, r) {
  var n = xr({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || xr(n, (a = {}, a[o] = xr(t[o], r[o]), a));
  }
  return n;
}, lx = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, cx = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, Tm = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, ux = function(t, r) {
  return en(r, t, t);
}, en = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Za = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = en(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || en(i.theme, "breakpoints", cx.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(Tm)), s = sf(s, dx(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = sf(s, fx(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        xr(s, d(f, p, i));
      }
    return l && (s = lx(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, dx = function(t, r, n, o, a) {
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
}, fx = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      xr(i, u);
    else {
      var d, f = Tm(l);
      xr(i, (d = {}, d[f] = xr({}, i[f], u), d));
    }
  }
  return i;
}, ls = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? ux : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, dr = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = ls({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = ls(a);
  });
  var n = Za(r);
  return n;
}, ku = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || xr(t, i.config);
  });
  var a = Za(t);
  return a;
}, px = function(t) {
  return typeof t == "number" && !isNaN(t);
}, hx = function(t, r) {
  return en(r, t, !px(t) || t > 1 ? t : t * 100 + "%");
}, mx = {
  width: {
    property: "width",
    scale: "sizes",
    transform: hx
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
}, Gt = dr(mx), Tc = {
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
Tc.bg = Tc.backgroundColor;
var Eu = dr(Tc), vx = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, gx = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: vx.fontSizes
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
}, an = dr(gx), bx = {
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
}, Ft = dr(bx), kl = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, yx = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: kl.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: kl.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: kl.space
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
}, qt = dr(yx), Pt = {
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
var Sr = dr(Pt), tn = {
  background: !0,
  backgroundImage: !0,
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0
};
tn.bgImage = tn.backgroundImage;
tn.bgSize = tn.backgroundSize;
tn.bgPosition = tn.backgroundPosition;
tn.bgRepeat = tn.backgroundRepeat;
var Fo = dr(tn), xi = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, xx = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: xi.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: xi.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: xi.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: xi.space
  }
}, Hn = dr(xx), zt = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, lf = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Tn = function(t, r) {
  if (!lf(t))
    return en(r, t, t);
  var n = t < 0, o = Math.abs(t), a = en(r, o, o);
  return lf(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Ne = {};
Ne.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: Tn,
    defaultScale: zt.space
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
    defaultScale: zt.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: zt.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: zt.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: zt.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: zt.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: zt.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: zt.space
  }
};
Ne.padding.p = Ne.padding.padding;
Ne.padding.pt = Ne.padding.paddingTop;
Ne.padding.pr = Ne.padding.paddingRight;
Ne.padding.pb = Ne.padding.paddingBottom;
Ne.padding.pl = Ne.padding.paddingLeft;
Ne.padding.px = Ne.padding.paddingX;
Ne.padding.py = Ne.padding.paddingY;
var Am = dr(Ne.margin), Om = dr(Ne.padding), Rm = ku(Am, Om), Bi = dr({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function $a() {
  return $a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
var mr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Sx = [40, 52, 64].map(function(e) {
  return e + "em";
}), wx = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, Cx = {
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
}, cf = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, _x = {
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
}, kx = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return mr(t, r, r);
  var n = Math.abs(r), o = mr(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, Ex = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return $a({}, e, (r = {}, r[t] = kx, r));
}, {}), $m = function(t) {
  return function(r) {
    var n = {}, o = mr(r, "breakpoints", Sx), a = [null].concat(o.map(function(u) {
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
}, Dm = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = $a({}, wx, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = $m(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(mr(n, c))(n);
        o = $a({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = mr(Cx, s, s), f = mr(_x, d), p = mr(n, f, mr(n, d, {})), m = mr(Ex, d, mr), h = m(p, c, c);
      if (cf[d])
        for (var v = cf[d], b = 0; b < v.length; b++)
          o[v[b]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const Mm = Dm, Px = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Dm,
  default: Mm,
  get: mr,
  responsive: $m
}, Symbol.toStringTag, { value: "Module" }));
var Fs = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return Mm(en(m, p, null))(h.theme);
  } : c = function(p, m) {
    return en(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Za(u);
  return d;
}, Im = Fs({
  key: "buttons"
}), Fm = Fs({
  key: "textStyles",
  prop: "textStyle"
}), Nm = Fs({
  key: "colorStyles",
  prop: "colors"
}), Tx = Gt.width, Ax = Gt.height, Ox = Gt.minWidth, Rx = Gt.minHeight, $x = Gt.maxWidth, Dx = Gt.maxHeight, Mx = Gt.size, Ix = Gt.verticalAlign, Fx = Gt.display, Nx = Gt.overflow, jx = Gt.overflowX, Bx = Gt.overflowY, zx = Eu.opacity, Vx = an.fontSize, Lx = an.fontFamily, Wx = an.fontWeight, Ux = an.lineHeight, Hx = an.textAlign, Yx = an.fontStyle, Gx = an.letterSpacing, qx = Ft.alignItems, Xx = Ft.alignContent, Kx = Ft.justifyItems, Zx = Ft.justifyContent, Jx = Ft.flexWrap, Qx = Ft.flexDirection, eS = Ft.flex, tS = Ft.flexGrow, rS = Ft.flexShrink, nS = Ft.flexBasis, oS = Ft.justifySelf, aS = Ft.alignSelf, iS = Ft.order, sS = qt.gridGap, lS = qt.gridColumnGap, cS = qt.gridRowGap, uS = qt.gridColumn, dS = qt.gridRow, fS = qt.gridAutoFlow, pS = qt.gridAutoColumns, hS = qt.gridAutoRows, mS = qt.gridTemplateColumns, vS = qt.gridTemplateRows, gS = qt.gridTemplateAreas, bS = qt.gridArea, yS = Sr.borderWidth, xS = Sr.borderStyle, SS = Sr.borderColor, wS = Sr.borderTop, CS = Sr.borderRight, _S = Sr.borderBottom, kS = Sr.borderLeft, ES = Sr.borderRadius, PS = Fo.backgroundImage, TS = Fo.backgroundSize, AS = Fo.backgroundPosition, OS = Fo.backgroundRepeat, RS = Hn.zIndex, $S = Hn.top, DS = Hn.right, MS = Hn.bottom, IS = Hn.left, FS = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = ls({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Za(c);
  return u;
};
const NS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: Xx,
  alignItems: qx,
  alignSelf: aS,
  background: Fo,
  backgroundImage: PS,
  backgroundPosition: AS,
  backgroundRepeat: OS,
  backgroundSize: TS,
  border: Sr,
  borderBottom: _S,
  borderColor: SS,
  borderLeft: kS,
  borderRadius: ES,
  borderRight: CS,
  borderStyle: xS,
  borderTop: wS,
  borderWidth: yS,
  borders: Sr,
  bottom: MS,
  boxShadow: Bi,
  buttonStyle: Im,
  color: Eu,
  colorStyle: Nm,
  compose: ku,
  createParser: Za,
  createStyleFunction: ls,
  display: Fx,
  flex: eS,
  flexBasis: nS,
  flexDirection: Qx,
  flexGrow: tS,
  flexShrink: rS,
  flexWrap: Jx,
  flexbox: Ft,
  fontFamily: Lx,
  fontSize: Vx,
  fontStyle: Yx,
  fontWeight: Wx,
  get: en,
  grid: qt,
  gridArea: bS,
  gridAutoColumns: pS,
  gridAutoFlow: fS,
  gridAutoRows: hS,
  gridColumn: uS,
  gridColumnGap: lS,
  gridGap: sS,
  gridRow: dS,
  gridRowGap: cS,
  gridTemplateAreas: gS,
  gridTemplateColumns: mS,
  gridTemplateRows: vS,
  height: Ax,
  justifyContent: Zx,
  justifyItems: Kx,
  justifySelf: oS,
  layout: Gt,
  left: IS,
  letterSpacing: Gx,
  lineHeight: Ux,
  margin: Am,
  maxHeight: Dx,
  maxWidth: $x,
  minHeight: Rx,
  minWidth: Ox,
  opacity: zx,
  order: iS,
  overflow: Nx,
  overflowX: jx,
  overflowY: Bx,
  padding: Om,
  position: Hn,
  right: DS,
  shadow: Bi,
  size: Mx,
  space: Rm,
  style: FS,
  system: dr,
  textAlign: Hx,
  textShadow: Bi,
  textStyle: Fm,
  top: $S,
  typography: an,
  variant: Fs,
  verticalAlign: Ix,
  width: Tx,
  zIndex: RS
}, Symbol.toStringTag, { value: "Module" })), jS = /* @__PURE__ */ Is(NS), BS = /* @__PURE__ */ Is(Px);
function zS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var VS = ku(Rm, an, Eu, Gt, Ft, Sr, Fo, Hn, qt, Bi, Im, Fm, Nm), jm = VS.propNames, Bm = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return zS(function(n) {
    return xm(n) && !r.test(n);
  });
};
const LS = Bm(jm), WS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: Bm,
  default: LS,
  props: jm
}, Symbol.toStringTag, { value: "Module" })), US = /* @__PURE__ */ Is(WS);
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
var zm = Pa.Flex = Yn = Pa.Box = void 0;
Pu(It);
var Vm = Pu(nx), Kn = jS, fa = YS(BS), HS = Pu(US);
function Lm() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return Lm = function() {
    return e;
  }, e;
}
function YS(e) {
  if (e && e.__esModule)
    return e;
  var t = Lm();
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
function Pu(e) {
  return e && e.__esModule ? e : { default: e };
}
var GS = function(t) {
  return (0, fa.default)(t.sx)(t.theme);
}, qS = function(t) {
  return (0, fa.default)(t.__css)(t.theme);
}, XS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, fa.default)((0, fa.get)(r, a + "." + n, (0, fa.get)(r, n)))(r);
}, Wm = (0, Vm.default)("div", {
  shouldForwardProp: HS.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, qS, XS, GS, function(e) {
  return e.css;
}, (0, Kn.compose)(Kn.space, Kn.layout, Kn.typography, Kn.color, Kn.flexbox)), Yn = Pa.Box = Wm, KS = (0, Vm.default)(Wm)({
  display: "flex"
});
zm = Pa.Flex = KS;
function bn() {
  return bn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bn.apply(this, arguments);
}
var hV = At(function(e, t) {
  return It.createElement(Yn, bn({
    ref: t,
    tx: "text"
  }, e));
});
At(function(e, t) {
  return It.createElement(Yn, bn({
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
var mV = At(function(e, t) {
  return It.createElement(Yn, bn({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), vV = At(function(e, t) {
  return It.createElement(Yn, bn({
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
  return It.createElement(Yn, bn({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var gV = At(function(e, t) {
  return It.createElement(Yn, bn({
    ref: t,
    variant: "card"
  }, e));
});
function at(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function yr(e) {
  return function t(r) {
    return arguments.length === 0 || at(r) ? t : e.apply(this, arguments);
  };
}
function On(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return at(r) ? t : yr(function(o) {
          return e(r, o);
        });
      default:
        return at(r) && at(n) ? t : at(r) ? yr(function(o) {
          return e(o, n);
        }) : at(n) ? yr(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function ZS(e, t) {
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
function Um(e) {
  return function t(r, n, o) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return at(r) ? t : On(function(a, i) {
          return e(r, a, i);
        });
      case 2:
        return at(r) && at(n) ? t : at(r) ? On(function(a, i) {
          return e(a, n, i);
        }) : at(n) ? On(function(a, i) {
          return e(r, a, i);
        }) : yr(function(a) {
          return e(r, n, a);
        });
      default:
        return at(r) && at(n) && at(o) ? t : at(r) && at(n) ? On(function(a, i) {
          return e(a, i, o);
        }) : at(r) && at(o) ? On(function(a, i) {
          return e(a, n, i);
        }) : at(n) && at(o) ? On(function(a, i) {
          return e(r, a, i);
        }) : at(r) ? yr(function(a) {
          return e(a, n, o);
        }) : at(n) ? yr(function(a) {
          return e(r, a, o);
        }) : at(o) ? yr(function(a) {
          return e(r, n, a);
        }) : e(r, n, o);
    }
  };
}
const JS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function QS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var e1 = /* @__PURE__ */ yr(function(t) {
  return JS(t) ? !0 : !t || typeof t != "object" || QS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), t1 = /* @__PURE__ */ function() {
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
function r1(e) {
  return new t1(e);
}
var n1 = /* @__PURE__ */ On(function(t, r) {
  return ZS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function o1(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function uf(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function df(e, t, r, n) {
  return e["@@transducer/result"](r[n](n1(e["@@transducer/step"], e), t));
}
var ff = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function bV(e, t, r) {
  if (typeof e == "function" && (e = r1(e)), e1(r))
    return o1(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return df(e, t, r, "fantasy-land/reduce");
  if (r[ff] != null)
    return uf(e, t, r[ff]());
  if (typeof r.next == "function")
    return uf(e, t, r);
  if (typeof r.reduce == "function")
    return df(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function In(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var pf = Object.prototype.toString, a1 = /* @__PURE__ */ function() {
  return pf.call(arguments) === "[object Arguments]" ? function(t) {
    return pf.call(t) === "[object Arguments]";
  } : function(t) {
    return In("callee", t);
  };
}(), i1 = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), hf = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], mf = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), s1 = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, yV = /* @__PURE__ */ yr(typeof Object.keys == "function" && !mf ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = mf && a1(t);
  for (r in t)
    In(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (i1)
    for (n = hf.length - 1; n >= 0; )
      r = hf[n], In(r, t) && !s1(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), xV = /* @__PURE__ */ yr(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
function vf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
var l1 = /* @__PURE__ */ Um(function(t, r, n) {
  var o = {}, a;
  for (a in r)
    In(a, r) && (o[a] = In(a, n) ? t(a, r[a], n[a]) : r[a]);
  for (a in n)
    In(a, n) && !In(a, o) && (o[a] = n[a]);
  return o;
}), SV = /* @__PURE__ */ Um(function e(t, r, n) {
  return l1(function(o, a, i) {
    return vf(a) && vf(i) ? e(t, a, i) : t(o, a, i);
  }, r, n);
});
function Wn() {
  return Wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wn.apply(this, arguments);
}
var Ac = { exports: {} }, We = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function c1() {
  if (gf)
    return We;
  gf = 1;
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
  function _(w) {
    return S(w) === c;
  }
  return We.AsyncMode = l, We.ConcurrentMode = c, We.ContextConsumer = s, We.ContextProvider = i, We.Element = t, We.ForwardRef = u, We.Fragment = n, We.Lazy = m, We.Memo = p, We.Portal = r, We.Profiler = a, We.StrictMode = o, We.Suspense = d, We.isAsyncMode = function(w) {
    return _(w) || S(w) === l;
  }, We.isConcurrentMode = _, We.isContextConsumer = function(w) {
    return S(w) === s;
  }, We.isContextProvider = function(w) {
    return S(w) === i;
  }, We.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, We.isForwardRef = function(w) {
    return S(w) === u;
  }, We.isFragment = function(w) {
    return S(w) === n;
  }, We.isLazy = function(w) {
    return S(w) === m;
  }, We.isMemo = function(w) {
    return S(w) === p;
  }, We.isPortal = function(w) {
    return S(w) === r;
  }, We.isProfiler = function(w) {
    return S(w) === a;
  }, We.isStrictMode = function(w) {
    return S(w) === o;
  }, We.isSuspense = function(w) {
    return S(w) === d;
  }, We.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === a || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === p || w.$$typeof === i || w.$$typeof === s || w.$$typeof === u || w.$$typeof === v || w.$$typeof === b || w.$$typeof === y || w.$$typeof === h);
  }, We.typeOf = S, We;
}
var Ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function u1() {
  return bf || (bf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function S(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === c || R === a || R === o || R === d || R === f || typeof R == "object" && R !== null && (R.$$typeof === m || R.$$typeof === p || R.$$typeof === i || R.$$typeof === s || R.$$typeof === u || R.$$typeof === v || R.$$typeof === b || R.$$typeof === y || R.$$typeof === h);
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var Se = R.$$typeof;
        switch (Se) {
          case t:
            var he = R.type;
            switch (he) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return he;
              default:
                var le = he && he.$$typeof;
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
    function fe(R) {
      return ce || (ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(R) || _(R) === l;
    }
    function F(R) {
      return _(R) === c;
    }
    function N(R) {
      return _(R) === s;
    }
    function V(R) {
      return _(R) === i;
    }
    function T(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function A(R) {
      return _(R) === u;
    }
    function B(R) {
      return _(R) === n;
    }
    function C(R) {
      return _(R) === m;
    }
    function H(R) {
      return _(R) === p;
    }
    function O(R) {
      return _(R) === r;
    }
    function Z(R) {
      return _(R) === a;
    }
    function Y(R) {
      return _(R) === o;
    }
    function ae(R) {
      return _(R) === d;
    }
    Ue.AsyncMode = w, Ue.ConcurrentMode = M, Ue.ContextConsumer = P, Ue.ContextProvider = I, Ue.Element = z, Ue.ForwardRef = j, Ue.Fragment = X, Ue.Lazy = ne, Ue.Memo = J, Ue.Portal = Q, Ue.Profiler = ee, Ue.StrictMode = oe, Ue.Suspense = D, Ue.isAsyncMode = fe, Ue.isConcurrentMode = F, Ue.isContextConsumer = N, Ue.isContextProvider = V, Ue.isElement = T, Ue.isForwardRef = A, Ue.isFragment = B, Ue.isLazy = C, Ue.isMemo = H, Ue.isPortal = O, Ue.isProfiler = Z, Ue.isStrictMode = Y, Ue.isSuspense = ae, Ue.isValidElementType = S, Ue.typeOf = _;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? Ac.exports = c1() : Ac.exports = u1();
var Tu = Ac.exports, Hm = Tu, d1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, f1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ym = {};
Ym[Hm.ForwardRef] = d1;
Ym[Hm.Memo] = f1;
function yf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function p1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yf(Object(r), !0).forEach(function(n) {
      Cu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var h1 = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return p1({}, t, {}, r);
}, m1 = Gd(function(e) {
  return Gd(function(t) {
    return h1(e, t);
  });
}), wV = function(t) {
  return /* @__PURE__ */ ir(Ra.Consumer, null, function(r) {
    return t.theme !== r && (r = m1(r)(t.theme)), /* @__PURE__ */ ir(Ra.Provider, {
      value: r
    }, t.children);
  });
};
function v1() {
  return It.useContext(Ra);
}
const g1 = {
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
}, b1 = {
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
}, y1 = {
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
}, x1 = {
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
}, S1 = {
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
}, w1 = {
  ghost: g1,
  alert: S1,
  inline: b1,
  primary: y1,
  secondary: x1
}, C1 = {
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
}, _1 = {
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
}, k1 = {
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
}, E1 = {
  "icon-primary": C1,
  "icon-ghost": _1,
  "icon-ghost-white": k1
}, P1 = {
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
}, T1 = {
  "footer-primary": P1
}, A1 = {
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
}, O1 = {
  "file-secondary": A1
}, R1 = {
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
}, $1 = {
  color: "black"
}, D1 = {
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
}, M1 = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, I1 = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, F1 = {
  card: M1,
  readOnly: I1
}, N1 = {
  color: "labels.red"
}, j1 = {
  color: "darkGray"
}, B1 = {
  error: N1,
  default: j1
}, z1 = {
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
}, V1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, L1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, W1 = {
  disabled: L1,
  primary: z1,
  white: V1
}, U1 = {
  default: "transparent",
  error: "labels.red"
}, H1 = {
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
}, Y1 = {
  bg: "white",
  borderRightColor: "grayShade2",
  "> div": {
    color: "gray",
    path: {
      fill: "gray"
    }
  }
}, G1 = {
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
}, q1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, X1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, K1 = {
  default: G1,
  active: q1,
  disabled: X1
}, Z1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, J1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, Q1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, ew = {
  default: J1,
  active: Q1,
  disabled: Z1
}, tw = {
  container: Y1,
  item: K1,
  subItem: ew,
  category: H1
}, rw = {
  bg: "white",
  boxShadow: "list"
}, nw = {
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
}, ow = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, aw = {
  primary: nw,
  active: ow
}, iw = {
  container: rw,
  item: aw
}, sw = {
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
}, lw = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, cw = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, uw = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, dw = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, fw = {
  variant: "text.microlabeling",
  color: "gray"
}, pw = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, hw = {
  variant: "text.value",
  color: "primary"
}, mw = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, vw = {
  variant: "text.labeling",
  color: "gray"
}, gw = {
  color: "gray"
}, bw = {
  color: "primary"
}, yw = {
  color: "labels.orange"
}, xf = {
  title: lw,
  text: mw,
  subtitle: cw,
  labeling: uw,
  value: pw,
  valuePrimary: hw,
  labelingGray: vw,
  microlabeling: dw,
  microlabelingGray: fw,
  inputValidationneutral: gw,
  inputValidationsuccess: bw,
  inputValidationwarning: yw
}, xw = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, Sw = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, ww = {
  drawerSection: Sw,
  primary: xw
}, Cw = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, _w = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, kw = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, Ew = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, Pw = {
  gray: kw,
  white: Ew
}, Tw = {
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
}, Aw = {
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
}, Ow = {
  keyValue: Pw,
  primary: Tw,
  bordered: Aw,
  dot: Cw,
  blink: _w
}, Rw = {
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
}, $w = {
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
}, Dw = {
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, Mw = {
  variant: "variants.select.primary",
  bg: "white"
}, Iw = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, Fw = {
  disabled: Iw,
  primary: Dw,
  white: Mw
}, Nw = {
  color: "labels.red"
}, jw = {
  color: "darkGray"
}, Bw = {
  error: Nw,
  default: jw
}, zw = {
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
}, Vw = {
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
}, Lw = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, Ww = {
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
}, Uw = {
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
}, Hw = {
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
}, Yw = {
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
}, Gw = {
  valid: Ww,
  error: Uw,
  warning: Hw,
  neutral: Yw
}, qw = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, Xw = {
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
}, Kw = {
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
}, Zw = {
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
}, Jw = {
  primary: Xw,
  white: Kw,
  disabled: Zw
}, Qw = {
  secondary: {
    notification: {
      bg: "white",
      borderColor: "grayShade2"
    }
  }
}, eC = {
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
}, tC = {
  colors: eC,
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
    ...F1,
    tooltip: D1,
    label: $1,
    list: iw,
    header: sw,
    checkbox: Rw,
    radio: $w,
    badges: Ow,
    popup: ww,
    bar: zw,
    perf: Vw,
    code: Lw,
    select: Fw,
    callout: Gw,
    icon: qw,
    ...xf
  },
  text: {
    inputInfo: B1,
    selectInfo: Bw,
    ...xf
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...w1,
    ...E1,
    ...T1,
    ...O1,
    toggleButton: R1
  },
  navigation: tw,
  inputs: W1,
  inputIntents: U1,
  pagination: Jw,
  notification: Qw
}, rC = {
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
}, nC = {
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
}, CV = () => v1(), _V = {
  ...tC,
  colors: rC,
  shadows: nC
};
function oC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function aC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var iC = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(aC(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = oC(o);
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
}(), Tt = "-ms-", cs = "-moz-", Be = "-webkit-", Au = "comm", Ou = "rule", Ru = "decl", sC = "@import", Gm = "@keyframes", lC = "@layer", cC = Math.abs, Ns = String.fromCharCode, uC = Object.assign;
function dC(e, t) {
  return kt(e, 0) ^ 45 ? (((t << 2 ^ kt(e, 0)) << 2 ^ kt(e, 1)) << 2 ^ kt(e, 2)) << 2 ^ kt(e, 3) : 0;
}
function qm(e) {
  return e.trim();
}
function fC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, r) {
  return e.replace(t, r);
}
function Oc(e, t) {
  return e.indexOf(t);
}
function kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Da(e, t, r) {
  return e.slice(t, r);
}
function $r(e) {
  return e.length;
}
function $u(e) {
  return e.length;
}
function Si(e, t) {
  return t.push(e), e;
}
function pC(e, t) {
  return e.map(t).join("");
}
var js = 1, Po = 1, Xm = 0, Ht = 0, vt = 0, No = "";
function Bs(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: js, column: Po, length: i, return: "" };
}
function Xo(e, t) {
  return uC(Bs("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hC() {
  return vt;
}
function mC() {
  return vt = Ht > 0 ? kt(No, --Ht) : 0, Po--, vt === 10 && (Po = 1, js--), vt;
}
function Kt() {
  return vt = Ht < Xm ? kt(No, Ht++) : 0, Po++, vt === 10 && (Po = 1, js++), vt;
}
function Mr() {
  return kt(No, Ht);
}
function zi() {
  return Ht;
}
function Ja(e, t) {
  return Da(No, e, t);
}
function Ma(e) {
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
function Km(e) {
  return js = Po = 1, Xm = $r(No = e), Ht = 0, [];
}
function Zm(e) {
  return No = "", e;
}
function Vi(e) {
  return qm(Ja(Ht - 1, Rc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function vC(e) {
  for (; (vt = Mr()) && vt < 33; )
    Kt();
  return Ma(e) > 2 || Ma(vt) > 3 ? "" : " ";
}
function gC(e, t) {
  for (; --t && Kt() && !(vt < 48 || vt > 102 || vt > 57 && vt < 65 || vt > 70 && vt < 97); )
    ;
  return Ja(e, zi() + (t < 6 && Mr() == 32 && Kt() == 32));
}
function Rc(e) {
  for (; Kt(); )
    switch (vt) {
      case e:
        return Ht;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rc(vt);
        break;
      case 40:
        e === 41 && Rc(e);
        break;
      case 92:
        Kt();
        break;
    }
  return Ht;
}
function bC(e, t) {
  for (; Kt() && e + vt !== 47 + 10; )
    if (e + vt === 42 + 42 && Mr() === 47)
      break;
  return "/*" + Ja(t, Ht - 1) + "*" + Ns(e === 47 ? e : Kt());
}
function yC(e) {
  for (; !Ma(Mr()); )
    Kt();
  return Ja(e, Ht);
}
function xC(e) {
  return Zm(Li("", null, null, null, [""], e = Km(e), 0, [0], e));
}
function Li(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, v = 1, b = 1, y = 0, S = "", _ = o, w = a, M = n, P = S; v; )
    switch (m = y, y = Kt()) {
      case 40:
        if (m != 108 && kt(P, d - 1) == 58) {
          Oc(P += ze(Vi(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Vi(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += vC(m);
        break;
      case 92:
        P += gC(zi() - 1, 7);
        continue;
      case 47:
        switch (Mr()) {
          case 42:
          case 47:
            Si(SC(bC(Kt(), zi()), t, r), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * h:
        s[c++] = $r(P) * b;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            b == -1 && (P = ze(P, /\f/g, "")), p > 0 && $r(P) - d && Si(p > 32 ? wf(P + ";", n, r, d - 1) : wf(ze(P, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (Si(M = Sf(P, t, r, c, u, o, s, S, _ = [], w = [], d), a), y === 123)
              if (u === 0)
                Li(P, t, M, M, _, a, d, s, w);
              else
                switch (f === 99 && kt(P, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Li(e, M, M, n && Si(Sf(e, M, M, 0, 0, o, s, S, o, _ = [], d), w), o, w, d, s, n ? _ : w);
                    break;
                  default:
                    Li(P, M, M, M, [""], w, 0, s, w);
                }
        }
        c = u = p = 0, h = b = 1, S = P = "", d = i;
        break;
      case 58:
        d = 1 + $r(P), p = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && mC() == 125)
            continue;
        }
        switch (P += Ns(y), y * h) {
          case 38:
            b = u > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[c++] = ($r(P) - 1) * b, b = 1;
            break;
          case 64:
            Mr() === 45 && (P += Vi(Kt())), f = Mr(), u = d = $r(S = P += yC(zi())), y++;
            break;
          case 45:
            m === 45 && $r(P) == 2 && (h = 0);
        }
    }
  return a;
}
function Sf(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = $u(f), m = 0, h = 0, v = 0; m < n; ++m)
    for (var b = 0, y = Da(e, d + 1, d = cC(h = i[m])), S = e; b < p; ++b)
      (S = qm(h > 0 ? f[b] + " " + y : ze(y, /&\f/g, f[b]))) && (l[v++] = S);
  return Bs(e, t, r, o === 0 ? Ou : s, l, c, u);
}
function SC(e, t, r) {
  return Bs(e, t, r, Au, Ns(hC()), Da(e, 2, -2), 0);
}
function wf(e, t, r, n) {
  return Bs(e, t, r, Ru, Da(e, 0, n), Da(e, n + 1, -1), n);
}
function mo(e, t) {
  for (var r = "", n = $u(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function wC(e, t, r, n) {
  switch (e.type) {
    case lC:
      if (e.children.length)
        break;
    case sC:
    case Ru:
      return e.return = e.return || e.value;
    case Au:
      return "";
    case Gm:
      return e.return = e.value + "{" + mo(e.children, n) + "}";
    case Ou:
      e.value = e.props.join(",");
  }
  return $r(r = mo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function CC(e) {
  var t = $u(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function _C(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Cf = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Jm(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var kC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Mr(), o === 38 && a === 12 && (r[n] = 1), !Ma(a); )
    Kt();
  return Ja(t, Ht);
}, EC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Ma(o)) {
      case 0:
        o === 38 && Mr() === 12 && (r[n] = 1), t[n] += kC(Ht - 1, r, n);
        break;
      case 2:
        t[n] += Vi(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Mr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Ns(o);
    }
  while (o = Kt());
  return t;
}, PC = function(t, r) {
  return Zm(EC(Km(t), r));
}, _f = /* @__PURE__ */ new WeakMap(), TC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !_f.get(n)) && !o) {
      _f.set(t, !0);
      for (var a = [], i = PC(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, AC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, OC = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", RC = function(t) {
  return t.type === "comm" && t.children.indexOf(OC) > -1;
}, $C = function(t) {
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
            if (RC(c))
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
}, Qm = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, DC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Qm(r[n]))
      return !0;
  return !1;
}, kf = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, MC = function(t, r, n) {
  Qm(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), kf(t)) : DC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), kf(t)));
};
function ev(e, t) {
  switch (dC(e, t)) {
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
      return Be + e + cs + e + Tt + e + e;
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
      if ($r(e) - 1 - t > 6)
        switch (kt(e, t + 1)) {
          case 109:
            if (kt(e, t + 4) !== 45)
              break;
          case 102:
            return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + cs + (kt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Oc(e, "stretch") ? ev(ze(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (kt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (kt(e, $r(e) - 3 - (~Oc(e, "!important") && 10))) {
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
var IC = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ru:
        t.return = ev(t.value, t.length);
        break;
      case Gm:
        return mo([Xo(t, {
          value: ze(t.value, "@", "@" + Be)
        })], o);
      case Ou:
        if (t.length)
          return pC(t.props, function(a) {
            switch (fC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return mo([Xo(t, {
                  props: [ze(a, /:(read-\w+)/, ":" + cs + "$1")]
                })], o);
              case "::placeholder":
                return mo([Xo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + Be + "input-$1")]
                }), Xo(t, {
                  props: [ze(a, /:(plac\w+)/, ":" + cs + "$1")]
                }), Xo(t, {
                  props: [ze(a, /:(plac\w+)/, Tt + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, FC = [IC], NC = function(t) {
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
  var o = t.stylisPlugins || FC;
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
  var l, c = [TC, AC];
  process.env.NODE_ENV !== "production" && c.push($C({
    get compat() {
      return m.compat;
    }
  }), MC);
  {
    var u, d = [wC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== Au && u.insert(h.value + "{}"));
    } : _C(function(h) {
      u.insert(h);
    })], f = CC(c.concat(o, d)), p = function(v) {
      return mo(xC(v), f);
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
    sheet: new iC({
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
}, jC = !0;
function Du(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var zs = function(t, r, n) {
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
  jC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Vs = function(t, r, n) {
  zs(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function BC(e) {
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
var zC = {
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
}, Ef = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, VC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", LC = /[A-Z]|^ms/g, tv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mu = function(t) {
  return t.charCodeAt(1) === 45;
}, Pf = function(t) {
  return t != null && typeof t != "boolean";
}, El = /* @__PURE__ */ Jm(function(e) {
  return Mu(e) ? e : e.replace(LC, "-$&").toLowerCase();
}), us = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(tv, function(n, o, a) {
          return gr = {
            name: o,
            styles: a,
            next: gr
          }, o;
        });
  }
  return zC[t] !== 1 && !Mu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var WC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, UC = ["normal", "none", "initial", "inherit", "unset"], HC = us, YC = /^-ms-/, GC = /-(.)/g, Tf = {};
  us = function(t, r) {
    if (t === "content" && (typeof r != "string" || UC.indexOf(r) === -1 && !WC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = HC(t, r);
    return n !== "" && !Mu(t) && t.indexOf("-") !== -1 && Tf[t] === void 0 && (Tf[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(YC, "ms-").replace(GC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var rv = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ia(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(rv);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return gr = {
          name: r.name,
          styles: r.styles,
          next: gr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            gr = {
              name: n.name,
              styles: n.styles,
              next: gr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return qC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = gr, i = r(e);
        return gr = a, Ia(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(tv, function(u, d, f) {
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
function qC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ia(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Pf(i) && (n += El(a) + ":" + us(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(rv);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Pf(i[s]) && (n += El(a) + ":" + us(a, i[s]) + ";");
        else {
          var l = Ia(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += El(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(VC), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Af = /label:\s*([^\s;\n{]+)\s*(;|$)/g, nv;
process.env.NODE_ENV !== "production" && (nv = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var gr, To = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  gr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Ia(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Ef), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Ia(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Ef), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(nv, function(f) {
    return l = f, "";
  })), Af.lastIndex = 0;
  for (var c = "", u; (u = Af.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = BC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: gr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: gr
  };
}, XC = function(t) {
  return t();
}, ov = U["useInsertionEffect"] ? U["useInsertionEffect"] : !1, Iu = ov || XC, Of = ov || U.useLayoutEffect, Fu = {}.hasOwnProperty, Nu = /* @__PURE__ */ U.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ NC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Nu.displayName = "EmotionCacheContext");
Nu.Provider;
var Ls = function(t) {
  return /* @__PURE__ */ At(function(r, n) {
    var o = ft(Nu);
    return t(r, o, n);
  });
}, yn = /* @__PURE__ */ U.createContext({});
process.env.NODE_ENV !== "production" && (yn.displayName = "EmotionThemeContext");
var KC = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Wn({}, t, r);
}, ZC = /* @__PURE__ */ Cf(function(e) {
  return Cf(function(t) {
    return KC(e, t);
  });
}), kV = function(t) {
  var r = U.useContext(yn);
  return t.theme !== r && (r = ZC(r)(t.theme)), /* @__PURE__ */ U.createElement(yn.Provider, {
    value: r
  }, t.children);
}, Rf = function(t) {
  var r = t.split(".");
  return r[r.length - 1];
}, JC = function(t) {
  var r = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(t);
  if (r || (r = /^([A-Za-z0-9$.]+)@/.exec(t), r))
    return Rf(r[1]);
}, QC = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), e_ = function(t) {
  return t.replace(/\$/g, "-");
}, t_ = function(t) {
  if (t)
    for (var r = t.split(`
`), n = 0; n < r.length; n++) {
      var o = JC(r[n]);
      if (o) {
        if (QC.has(o))
          break;
        if (/^[A-Z]/.test(o))
          return e_(o);
      }
    }
}, $c = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Dc = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", r_ = function(t, r) {
  if (process.env.NODE_ENV !== "production" && typeof r.css == "string" && // check if there is a css declaration
  r.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + r.css + "`");
  var n = {};
  for (var o in r)
    Fu.call(r, o) && (n[o] = r[o]);
  if (n[$c] = t, process.env.NODE_ENV !== "production" && r.css && (typeof r.css != "object" || typeof r.css.name != "string" || r.css.name.indexOf("-") === -1)) {
    var a = t_(new Error().stack);
    a && (n[Dc] = a);
  }
  return n;
}, n_ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return zs(r, n, o), Iu(function() {
    return Vs(r, n, o);
  }), null;
}, av = /* @__PURE__ */ Ls(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[$c], a = [n], i = "";
  typeof e.className == "string" ? i = Du(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = To(a, void 0, U.useContext(yn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Dc];
    l && (s = To([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    Fu.call(e, u) && u !== "css" && u !== $c && (process.env.NODE_ENV === "production" || u !== Dc) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(n_, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ U.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (av.displayName = "EmotionCssPropInternal");
var o_ = av, a_ = {
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
}, EV = function(t, r) {
  var n = arguments;
  if (r == null || !Fu.call(r, "css"))
    return U.createElement.apply(void 0, n);
  var o = n.length, a = new Array(o);
  a[0] = o_, a[1] = r_(t, r);
  for (var i = 2; i < o; i++)
    a[i] = n[i];
  return U.createElement.apply(null, a);
}, $f = !1, i_ = /* @__PURE__ */ Ls(function(e, t) {
  process.env.NODE_ENV !== "production" && !$f && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), $f = !0);
  var r = e.styles, n = To([r], void 0, U.useContext(yn)), o = U.useRef();
  return Of(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), Of(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Vs(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (i_.displayName = "EmotionGlobal");
function s_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return To(t);
}
var l_ = function() {
  var t = s_.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, c_ = function e(t) {
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
function u_(e, t, r) {
  var n = [], o = Du(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var d_ = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Iu(function() {
    for (var o = 0; o < n.length; o++)
      Vs(r, n[o], !1);
  }), null;
}, f_ = /* @__PURE__ */ Ls(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = To(u, t.registered);
    return n.push(f), zs(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return u_(t.registered, o, c_(u));
  }, i = {
    css: o,
    cx: a,
    theme: U.useContext(yn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(d_, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (f_.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Df = !0, p_ = typeof jest < "u" || typeof vi < "u";
  if (Df && !p_) {
    var Mf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Df ? window : global
    ), If = "__EMOTION_REACT_" + a_.version.split(".")[0] + "__";
    Mf[If] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Mf[If] = !0;
  }
}
function h_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Nt(e = {}) {
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
        a ?? h_(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [m_, v_] = Nt({
  strict: !1,
  name: "PortalManagerContext"
});
function g_(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ L.jsx(m_, { value: { zIndex: r }, children: t });
}
g_.displayName = "PortalManager";
var Fa = globalThis != null && globalThis.document ? $s : Fe, [iv, b_] = Nt({
  strict: !1,
  name: "PortalContext"
}), ju = "chakra-portal", y_ = ".chakra-portal", x_ = (e) => /* @__PURE__ */ L.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
      // NB: Don't add `bottom: 0`, it makes the entire app unusable
      // @see https://github.com/chakra-ui/chakra-ui/issues/3201
    },
    children: e.children
  }
), S_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = Ye(null), a = be(null), [, i] = Ye({});
  Fe(() => i({}), []);
  const s = b_(), l = v_();
  Fa(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = ju, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ L.jsx(x_, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? bm(
    /* @__PURE__ */ L.jsx(iv, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ L.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, w_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = gt(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = ju), l;
  }, [o]), [, s] = Ye({});
  return Fa(() => s({}), []), Fa(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? bm(
    /* @__PURE__ */ L.jsx(iv, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function Qa(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ L.jsx(w_, { containerRef: r, ...n }) : /* @__PURE__ */ L.jsx(S_, { ...n });
}
Qa.className = ju;
Qa.selector = y_;
Qa.displayName = "Portal";
function sn() {
  const e = ft(
    yn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var sv = Cr({});
sv.displayName = "ColorModeContext";
function Bu() {
  const e = ft(sv);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function PV(e, t) {
  const { colorMode: r } = Bu();
  return r === "dark" ? t : e;
}
function lv() {
  const e = Bu(), t = sn();
  return { ...e, theme: t };
}
function C_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function __(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function TV(e, t, r) {
  const n = sn();
  return k_(e, t, r)(n);
}
function k_(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return C_(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return __(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var Xe = (...e) => e.filter(Boolean).join(" ");
function E_() {
  return process.env.NODE_ENV !== "production";
}
function Lt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var AV = (e) => {
  const { condition: t, message: r } = e;
  t && E_() && console.warn(r);
};
function mn(e, ...t) {
  return P_(e) ? e(...t) : e;
}
var P_ = (e) => typeof e == "function", Ar = (e) => e ? "" : void 0, Pl = (e) => e ? !0 : void 0;
function $t(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function T_(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var ds = { exports: {} };
ds.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", v = "[object Number]", b = "[object Null]", y = "[object Object]", S = "[object Proxy]", _ = "[object RegExp]", w = "[object Set]", M = "[object String]", P = "[object Undefined]", I = "[object WeakMap]", z = "[object ArrayBuffer]", j = "[object DataView]", X = "[object Float32Array]", ne = "[object Float64Array]", J = "[object Int8Array]", Q = "[object Int16Array]", ee = "[object Int32Array]", oe = "[object Uint8Array]", D = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", fe = "[object Uint32Array]", F = /[\\^$.*+?()[\]{}|]/g, N = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, T = {};
  T[X] = T[ne] = T[J] = T[Q] = T[ee] = T[oe] = T[D] = T[ce] = T[fe] = !0, T[s] = T[l] = T[z] = T[u] = T[j] = T[d] = T[f] = T[p] = T[h] = T[v] = T[y] = T[_] = T[w] = T[M] = T[I] = !1;
  var A = typeof yi == "object" && yi && yi.Object === Object && yi, B = typeof self == "object" && self && self.Object === Object && self, C = A || B || Function("return this")(), H = t && !t.nodeType && t, O = H && !0 && e && !e.nodeType && e, Z = O && O.exports === H, Y = Z && A.process, ae = function() {
    try {
      var g = O && O.require && O.require("util").types;
      return g || Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), R = ae && ae.isTypedArray;
  function Se(g, k, $) {
    switch ($.length) {
      case 0:
        return g.call(k);
      case 1:
        return g.call(k, $[0]);
      case 2:
        return g.call(k, $[0], $[1]);
      case 3:
        return g.call(k, $[0], $[1], $[2]);
    }
    return g.apply(k, $);
  }
  function he(g, k) {
    for (var $ = -1, re = Array(g); ++$ < g; )
      re[$] = k($);
    return re;
  }
  function le(g) {
    return function(k) {
      return g(k);
    };
  }
  function De(g, k) {
    return g == null ? void 0 : g[k];
  }
  function ye(g, k) {
    return function($) {
      return g(k($));
    };
  }
  var we = Array.prototype, ht = Function.prototype, ke = Object.prototype, dt = C["__core-js_shared__"], rt = ht.toString, Ie = ke.hasOwnProperty, se = function() {
    var g = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), Oe = ke.toString, Ot = rt.call(Object), xt = RegExp(
    "^" + rt.call(Ie).replace(F, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), lt = Z ? C.Buffer : void 0, Vr = C.Symbol, Lr = C.Uint8Array, Wr = lt ? lt.allocUnsafe : void 0, te = ye(Object.getPrototypeOf, Object), ve = Object.create, kr = ke.propertyIsEnumerable, q = we.splice, ie = Vr ? Vr.toStringTag : void 0, xe = function() {
    try {
      var g = vl(Object, "defineProperty");
      return g({}, "", {}), g;
    } catch {
    }
  }(), Ce = lt ? lt.isBuffer : void 0, He = Math.max, wt = Date.now, Ze = vl(C, "Map"), nt = vl(Object, "create"), Ur = function() {
    function g() {
    }
    return function(k) {
      if (!Pn(k))
        return {};
      if (ve)
        return ve(k);
      g.prototype = k;
      var $ = new g();
      return g.prototype = void 0, $;
    };
  }();
  function Er(g) {
    var k = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++k < $; ) {
      var re = g[k];
      this.set(re[0], re[1]);
    }
  }
  function cl() {
    this.__data__ = nt ? nt(null) : {}, this.size = 0;
  }
  function ui(g) {
    var k = this.has(g) && delete this.__data__[g];
    return this.size -= k ? 1 : 0, k;
  }
  function ul(g) {
    var k = this.__data__;
    if (nt) {
      var $ = k[g];
      return $ === n ? void 0 : $;
    }
    return Ie.call(k, g) ? k[g] : void 0;
  }
  function di(g) {
    var k = this.__data__;
    return nt ? k[g] !== void 0 : Ie.call(k, g);
  }
  function fi(g, k) {
    var $ = this.__data__;
    return this.size += this.has(g) ? 0 : 1, $[g] = nt && k === void 0 ? n : k, this;
  }
  Er.prototype.clear = cl, Er.prototype.delete = ui, Er.prototype.get = ul, Er.prototype.has = di, Er.prototype.set = fi;
  function fr(g) {
    var k = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++k < $; ) {
      var re = g[k];
      this.set(re[0], re[1]);
    }
  }
  function dl() {
    this.__data__ = [], this.size = 0;
  }
  function pi(g) {
    var k = this.__data__, $ = Bt(k, g);
    if ($ < 0)
      return !1;
    var re = k.length - 1;
    return $ == re ? k.pop() : q.call(k, $, 1), --this.size, !0;
  }
  function fl(g) {
    var k = this.__data__, $ = Bt(k, g);
    return $ < 0 ? void 0 : k[$][1];
  }
  function pl(g) {
    return Bt(this.__data__, g) > -1;
  }
  function hl(g, k) {
    var $ = this.__data__, re = Bt($, g);
    return re < 0 ? (++this.size, $.push([g, k])) : $[re][1] = k, this;
  }
  fr.prototype.clear = dl, fr.prototype.delete = pi, fr.prototype.get = fl, fr.prototype.has = pl, fr.prototype.set = hl;
  function ln(g) {
    var k = -1, $ = g == null ? 0 : g.length;
    for (this.clear(); ++k < $; ) {
      var re = g[k];
      this.set(re[0], re[1]);
    }
  }
  function x() {
    this.size = 0, this.__data__ = {
      hash: new Er(),
      map: new (Ze || fr)(),
      string: new Er()
    };
  }
  function W(g) {
    var k = gi(this, g).delete(g);
    return this.size -= k ? 1 : 0, k;
  }
  function K(g) {
    return gi(this, g).get(g);
  }
  function me(g) {
    return gi(this, g).has(g);
  }
  function Me(g, k) {
    var $ = gi(this, g), re = $.size;
    return $.set(g, k), this.size += $.size == re ? 0 : 1, this;
  }
  ln.prototype.clear = x, ln.prototype.delete = W, ln.prototype.get = K, ln.prototype.has = me, ln.prototype.set = Me;
  function Re(g) {
    var k = this.__data__ = new fr(g);
    this.size = k.size;
  }
  function Pe() {
    this.__data__ = new fr(), this.size = 0;
  }
  function Ee(g) {
    var k = this.__data__, $ = k.delete(g);
    return this.size = k.size, $;
  }
  function Ct(g) {
    return this.__data__.get(g);
  }
  function ot(g) {
    return this.__data__.has(g);
  }
  function ct(g, k) {
    var $ = this.__data__;
    if ($ instanceof fr) {
      var re = $.__data__;
      if (!Ze || re.length < r - 1)
        return re.push([g, k]), this.size = ++$.size, this;
      $ = this.__data__ = new ln(re);
    }
    return $.set(g, k), this.size = $.size, this;
  }
  Re.prototype.clear = Pe, Re.prototype.delete = Ee, Re.prototype.get = Ct, Re.prototype.has = ot, Re.prototype.set = ct;
  function jt(g, k) {
    var $ = yl(g), re = !$ && bl(g), $e = !$ && !re && Bd(g), Ge = !$ && !re && !$e && Vd(g), Qe = $ || re || $e || Ge, Te = Qe ? he(g.length, String) : [], et = Te.length;
    for (var tr in g)
      (k || Ie.call(g, tr)) && !(Qe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (tr == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      $e && (tr == "offset" || tr == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ge && (tr == "buffer" || tr == "byteLength" || tr == "byteOffset") || // Skip index properties.
      Nd(tr, et))) && Te.push(tr);
    return Te;
  }
  function Pr(g, k, $) {
    ($ !== void 0 && !bi(g[k], $) || $ === void 0 && !(k in g)) && ml(g, k, $);
  }
  function hi(g, k, $) {
    var re = g[k];
    (!(Ie.call(g, k) && bi(re, $)) || $ === void 0 && !(k in g)) && ml(g, k, $);
  }
  function Bt(g, k) {
    for (var $ = g.length; $--; )
      if (bi(g[$][0], k))
        return $;
    return -1;
  }
  function ml(g, k, $) {
    k == "__proto__" && xe ? xe(g, k, {
      configurable: !0,
      enumerable: !0,
      value: $,
      writable: !0
    }) : g[k] = $;
  }
  var Wy = r0();
  function mi(g) {
    return g == null ? g === void 0 ? P : b : ie && ie in Object(g) ? n0(g) : c0(g);
  }
  function Id(g) {
    return Ho(g) && mi(g) == s;
  }
  function Uy(g) {
    if (!Pn(g) || s0(g))
      return !1;
    var k = Sl(g) ? xt : N;
    return k.test(p0(g));
  }
  function Hy(g) {
    return Ho(g) && zd(g.length) && !!T[mi(g)];
  }
  function Yy(g) {
    if (!Pn(g))
      return l0(g);
    var k = jd(g), $ = [];
    for (var re in g)
      re == "constructor" && (k || !Ie.call(g, re)) || $.push(re);
    return $;
  }
  function Fd(g, k, $, re, $e) {
    g !== k && Wy(k, function(Ge, Qe) {
      if ($e || ($e = new Re()), Pn(Ge))
        Gy(g, k, Qe, $, Fd, re, $e);
      else {
        var Te = re ? re(gl(g, Qe), Ge, Qe + "", g, k, $e) : void 0;
        Te === void 0 && (Te = Ge), Pr(g, Qe, Te);
      }
    }, Ld);
  }
  function Gy(g, k, $, re, $e, Ge, Qe) {
    var Te = gl(g, $), et = gl(k, $), tr = Qe.get(et);
    if (tr) {
      Pr(g, $, tr);
      return;
    }
    var Xt = Ge ? Ge(Te, et, $ + "", g, k, Qe) : void 0, Yo = Xt === void 0;
    if (Yo) {
      var wl = yl(et), Cl = !wl && Bd(et), Ud = !wl && !Cl && Vd(et);
      Xt = et, wl || Cl || Ud ? yl(Te) ? Xt = Te : h0(Te) ? Xt = Qy(Te) : Cl ? (Yo = !1, Xt = Ky(et, !0)) : Ud ? (Yo = !1, Xt = Jy(et, !0)) : Xt = [] : m0(et) || bl(et) ? (Xt = Te, bl(Te) ? Xt = v0(Te) : (!Pn(Te) || Sl(Te)) && (Xt = o0(et))) : Yo = !1;
    }
    Yo && (Qe.set(et, Xt), $e(Xt, et, re, Ge, Qe), Qe.delete(et)), Pr(g, $, Xt);
  }
  function qy(g, k) {
    return d0(u0(g, k, Wd), g + "");
  }
  var Xy = xe ? function(g, k) {
    return xe(g, "toString", {
      configurable: !0,
      enumerable: !1,
      value: b0(k),
      writable: !0
    });
  } : Wd;
  function Ky(g, k) {
    if (k)
      return g.slice();
    var $ = g.length, re = Wr ? Wr($) : new g.constructor($);
    return g.copy(re), re;
  }
  function Zy(g) {
    var k = new g.constructor(g.byteLength);
    return new Lr(k).set(new Lr(g)), k;
  }
  function Jy(g, k) {
    var $ = k ? Zy(g.buffer) : g.buffer;
    return new g.constructor($, g.byteOffset, g.length);
  }
  function Qy(g, k) {
    var $ = -1, re = g.length;
    for (k || (k = Array(re)); ++$ < re; )
      k[$] = g[$];
    return k;
  }
  function e0(g, k, $, re) {
    var $e = !$;
    $ || ($ = {});
    for (var Ge = -1, Qe = k.length; ++Ge < Qe; ) {
      var Te = k[Ge], et = re ? re($[Te], g[Te], Te, $, g) : void 0;
      et === void 0 && (et = g[Te]), $e ? ml($, Te, et) : hi($, Te, et);
    }
    return $;
  }
  function t0(g) {
    return qy(function(k, $) {
      var re = -1, $e = $.length, Ge = $e > 1 ? $[$e - 1] : void 0, Qe = $e > 2 ? $[2] : void 0;
      for (Ge = g.length > 3 && typeof Ge == "function" ? ($e--, Ge) : void 0, Qe && a0($[0], $[1], Qe) && (Ge = $e < 3 ? void 0 : Ge, $e = 1), k = Object(k); ++re < $e; ) {
        var Te = $[re];
        Te && g(k, Te, re, Ge);
      }
      return k;
    });
  }
  function r0(g) {
    return function(k, $, re) {
      for (var $e = -1, Ge = Object(k), Qe = re(k), Te = Qe.length; Te--; ) {
        var et = Qe[g ? Te : ++$e];
        if ($(Ge[et], et, Ge) === !1)
          break;
      }
      return k;
    };
  }
  function gi(g, k) {
    var $ = g.__data__;
    return i0(k) ? $[typeof k == "string" ? "string" : "hash"] : $.map;
  }
  function vl(g, k) {
    var $ = De(g, k);
    return Uy($) ? $ : void 0;
  }
  function n0(g) {
    var k = Ie.call(g, ie), $ = g[ie];
    try {
      g[ie] = void 0;
      var re = !0;
    } catch {
    }
    var $e = Oe.call(g);
    return re && (k ? g[ie] = $ : delete g[ie]), $e;
  }
  function o0(g) {
    return typeof g.constructor == "function" && !jd(g) ? Ur(te(g)) : {};
  }
  function Nd(g, k) {
    var $ = typeof g;
    return k = k ?? i, !!k && ($ == "number" || $ != "symbol" && V.test(g)) && g > -1 && g % 1 == 0 && g < k;
  }
  function a0(g, k, $) {
    if (!Pn($))
      return !1;
    var re = typeof k;
    return (re == "number" ? xl($) && Nd(k, $.length) : re == "string" && k in $) ? bi($[k], g) : !1;
  }
  function i0(g) {
    var k = typeof g;
    return k == "string" || k == "number" || k == "symbol" || k == "boolean" ? g !== "__proto__" : g === null;
  }
  function s0(g) {
    return !!se && se in g;
  }
  function jd(g) {
    var k = g && g.constructor, $ = typeof k == "function" && k.prototype || ke;
    return g === $;
  }
  function l0(g) {
    var k = [];
    if (g != null)
      for (var $ in Object(g))
        k.push($);
    return k;
  }
  function c0(g) {
    return Oe.call(g);
  }
  function u0(g, k, $) {
    return k = He(k === void 0 ? g.length - 1 : k, 0), function() {
      for (var re = arguments, $e = -1, Ge = He(re.length - k, 0), Qe = Array(Ge); ++$e < Ge; )
        Qe[$e] = re[k + $e];
      $e = -1;
      for (var Te = Array(k + 1); ++$e < k; )
        Te[$e] = re[$e];
      return Te[k] = $(Qe), Se(g, this, Te);
    };
  }
  function gl(g, k) {
    if (!(k === "constructor" && typeof g[k] == "function") && k != "__proto__")
      return g[k];
  }
  var d0 = f0(Xy);
  function f0(g) {
    var k = 0, $ = 0;
    return function() {
      var re = wt(), $e = a - (re - $);
      if ($ = re, $e > 0) {
        if (++k >= o)
          return arguments[0];
      } else
        k = 0;
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
  function bi(g, k) {
    return g === k || g !== g && k !== k;
  }
  var bl = Id(function() {
    return arguments;
  }()) ? Id : function(g) {
    return Ho(g) && Ie.call(g, "callee") && !kr.call(g, "callee");
  }, yl = Array.isArray;
  function xl(g) {
    return g != null && zd(g.length) && !Sl(g);
  }
  function h0(g) {
    return Ho(g) && xl(g);
  }
  var Bd = Ce || y0;
  function Sl(g) {
    if (!Pn(g))
      return !1;
    var k = mi(g);
    return k == p || k == m || k == c || k == S;
  }
  function zd(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= i;
  }
  function Pn(g) {
    var k = typeof g;
    return g != null && (k == "object" || k == "function");
  }
  function Ho(g) {
    return g != null && typeof g == "object";
  }
  function m0(g) {
    if (!Ho(g) || mi(g) != y)
      return !1;
    var k = te(g);
    if (k === null)
      return !0;
    var $ = Ie.call(k, "constructor") && k.constructor;
    return typeof $ == "function" && $ instanceof $ && rt.call($) == Ot;
  }
  var Vd = R ? le(R) : Hy;
  function v0(g) {
    return e0(g, Ld(g));
  }
  function Ld(g) {
    return xl(g) ? jt(g, !0) : Yy(g);
  }
  var g0 = t0(function(g, k, $, re) {
    Fd(g, k, $, re);
  });
  function b0(g) {
    return function() {
      return g;
    };
  }
  function Wd(g) {
    return g;
  }
  function y0() {
    return !1;
  }
  e.exports = g0;
})(ds, ds.exports);
var A_ = ds.exports;
const sr = /* @__PURE__ */ Ms(A_);
var O_ = (e) => /!(important)?$/.test(e), Ff = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, R_ = (e, t) => (r) => {
  const n = String(t), o = O_(n), a = Ff(n), i = e ? `${e}.${a}` : a;
  let s = Lt(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Ff(s), o ? `${s} !important` : s;
};
function zu(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = R_(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var wi = (...e) => (t) => e.reduce((r, n) => n(r), t);
function rr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = zu({
      scale: e,
      transform: t
    }), n;
  };
}
var $_ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function D_(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: $_(t),
    transform: r ? zu({
      scale: r,
      compose: n
    }) : n
  };
}
var cv = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function M_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...cv
  ].join(" ");
}
function I_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...cv
  ].join(" ");
}
var F_ = {
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
}, N_ = {
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
function j_(e) {
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
var B_ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Mc = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, z_ = new Set(Object.values(Mc)), Ic = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), V_ = (e) => e.trim();
function L_(e, t) {
  if (e == null || Ic.has(e))
    return e;
  if (!(Fc(e) || Ic.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(V_).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in Mc ? Mc[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (z_.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], v = Fc(h) ? h : h && h.split(" "), b = `colors.${m}`, y = b in t.__cssMap ? t.__cssMap[b].varRef : m;
    return v ? [
      y,
      ...Array.isArray(v) ? v : [v]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Fc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), W_ = (e, t) => L_(e, t ?? {});
function U_(e) {
  return /^var\(--.+\)$/.test(e);
}
var H_ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Tr = (e) => (t) => `${e}(${t})`, Ae = {
  filter(e) {
    return e !== "auto" ? e : F_;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : N_;
  },
  ring(e) {
    return j_(Ae.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? M_() : e === "auto-gpu" ? I_() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = H_(e);
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
    if (U_(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: W_,
  blur: Tr("blur"),
  opacity: Tr("opacity"),
  brightness: Tr("brightness"),
  contrast: Tr("contrast"),
  dropShadow: Tr("drop-shadow"),
  grayscale: Tr("grayscale"),
  hueRotate: (e) => Tr("hue-rotate")(Ae.degree(e)),
  invert: Tr("invert"),
  saturate: Tr("saturate"),
  sepia: Tr("sepia"),
  bgImage(e) {
    return e == null || Fc(e) || Ic.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = B_[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, E = {
  borderWidths: rr("borderWidths"),
  borderStyles: rr("borderStyles"),
  colors: rr("colors"),
  borders: rr("borders"),
  gradients: rr("gradients", Ae.gradient),
  radii: rr("radii", Ae.px),
  space: rr("space", wi(Ae.vh, Ae.px)),
  spaceT: rr("space", wi(Ae.vh, Ae.px)),
  degreeT(e) {
    return { property: e, transform: Ae.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: zu({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: rr("sizes", wi(Ae.vh, Ae.px)),
  sizesT: rr("sizes", wi(Ae.vh, Ae.fraction)),
  shadows: rr("shadows"),
  logical: D_,
  blur: rr("blur", Ae.blur)
}, Wi = {
  background: E.colors("background"),
  backgroundColor: E.colors("backgroundColor"),
  backgroundImage: E.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Ae.bgClip },
  bgSize: E.prop("backgroundSize"),
  bgPosition: E.prop("backgroundPosition"),
  bg: E.colors("background"),
  bgColor: E.colors("backgroundColor"),
  bgPos: E.prop("backgroundPosition"),
  bgRepeat: E.prop("backgroundRepeat"),
  bgAttachment: E.prop("backgroundAttachment"),
  bgGradient: E.gradients("backgroundImage"),
  bgClip: { transform: Ae.bgClip }
};
Object.assign(Wi, {
  bgImage: Wi.backgroundImage,
  bgImg: Wi.backgroundImage
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
var Y_ = {
  color: E.colors("color"),
  textColor: E.colors("color"),
  fill: E.colors("fill"),
  stroke: E.colors("stroke")
}, Nc = {
  boxShadow: E.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: E.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: E.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Nc, {
  shadow: Nc.boxShadow
});
var G_ = {
  filter: { transform: Ae.filter },
  blur: E.blur("--chakra-blur"),
  brightness: E.propT("--chakra-brightness", Ae.brightness),
  contrast: E.propT("--chakra-contrast", Ae.contrast),
  hueRotate: E.propT("--chakra-hue-rotate", Ae.hueRotate),
  invert: E.propT("--chakra-invert", Ae.invert),
  saturate: E.propT("--chakra-saturate", Ae.saturate),
  dropShadow: E.propT("--chakra-drop-shadow", Ae.dropShadow),
  backdropFilter: { transform: Ae.backdropFilter },
  backdropBlur: E.blur("--chakra-backdrop-blur"),
  backdropBrightness: E.propT(
    "--chakra-backdrop-brightness",
    Ae.brightness
  ),
  backdropContrast: E.propT("--chakra-backdrop-contrast", Ae.contrast),
  backdropHueRotate: E.propT(
    "--chakra-backdrop-hue-rotate",
    Ae.hueRotate
  ),
  backdropInvert: E.propT("--chakra-backdrop-invert", Ae.invert),
  backdropSaturate: E.propT("--chakra-backdrop-saturate", Ae.saturate)
}, fs = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Ae.flexDirection },
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
Object.assign(fs, {
  flexDir: fs.flexDirection
});
var uv = {
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
}, q_ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Ae.outline },
  outlineOffset: !0,
  outlineColor: E.colors("outlineColor")
}, or = {
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
  float: E.propT("float", Ae.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(or, {
  w: or.width,
  h: or.height,
  minW: or.minWidth,
  maxW: or.maxWidth,
  minH: or.minHeight,
  maxH: or.maxHeight,
  overscroll: or.overscrollBehavior,
  overscrollX: or.overscrollBehaviorX,
  overscrollY: or.overscrollBehaviorY
});
var X_ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage")
};
function K_(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var Z_ = (e) => {
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
}, J_ = Z_(K_), Q_ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, ek = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Tl = (e, t, r) => {
  const n = {}, o = J_(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, tk = {
  srOnly: {
    transform(e) {
      return e === !0 ? Q_ : e === "focusable" ? ek : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Tl(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Tl(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Tl(t, e, r)
  }
}, pa = {
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
Object.assign(pa, {
  insetStart: pa.insetInlineStart,
  insetEnd: pa.insetInlineEnd
});
var rk = {
  ring: { transform: Ae.ring },
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
var nk = {
  textDecorationColor: E.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: E.shadows("textShadow")
}, ok = {
  clipPath: !0,
  transform: E.propT("transform", Ae.transform),
  transformOrigin: !0,
  translateX: E.spaceT("--chakra-translate-x"),
  translateY: E.spaceT("--chakra-translate-y"),
  skewX: E.degreeT("--chakra-skew-x"),
  skewY: E.degreeT("--chakra-skew-y"),
  scaleX: E.prop("--chakra-scale-x"),
  scaleY: E.prop("--chakra-scale-y"),
  scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: E.degreeT("--chakra-rotate")
}, ak = {
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
}, ik = {
  fontFamily: E.prop("fontFamily", "fonts"),
  fontSize: E.prop("fontSize", "fontSizes", Ae.px),
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
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, sk = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: E.spaceT("scrollMargin"),
  scrollMarginTop: E.spaceT("scrollMarginTop"),
  scrollMarginBottom: E.spaceT("scrollMarginBottom"),
  scrollMarginLeft: E.spaceT("scrollMarginLeft"),
  scrollMarginRight: E.spaceT("scrollMarginRight"),
  scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: E.spaceT("scrollPadding"),
  scrollPaddingTop: E.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: E.spaceT("scrollPaddingRight"),
  scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function dv(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Ws = (e, ...t) => t.map(dv).join(` ${e} `).replace(/calc/g, ""), Nf = (...e) => `calc(${Ws("+", ...e)})`, jf = (...e) => `calc(${Ws("-", ...e)})`, jc = (...e) => `calc(${Ws("*", ...e)})`, Bf = (...e) => `calc(${Ws("/", ...e)})`, zf = (e) => {
  const t = dv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : jc(t, -1);
}, Dn = Object.assign(
  (e) => ({
    add: (...t) => Dn(Nf(e, ...t)),
    subtract: (...t) => Dn(jf(e, ...t)),
    multiply: (...t) => Dn(jc(e, ...t)),
    divide: (...t) => Dn(Bf(e, ...t)),
    negate: () => Dn(zf(e)),
    toString: () => e.toString()
  }),
  {
    add: Nf,
    subtract: jf,
    multiply: jc,
    divide: Bf,
    negate: zf
  }
);
function lk(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ck(e) {
  const t = lk(e.toString());
  return dk(uk(t));
}
function uk(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function dk(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function fk(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function pk(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function hk(e, t = "") {
  return ck(`--${fk(e, t)}`);
}
function de(e, t, r) {
  const n = hk(e, r);
  return {
    variable: n,
    reference: pk(n, t)
  };
}
function mk(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = de(`${e}-${o}`, a);
      continue;
    }
    r[n] = de(`${e}-${n}`);
  }
  return r;
}
function vk(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function gk(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Bc(e) {
  if (e == null)
    return e;
  const { unitless: t } = gk(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var fv = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Vu = (e) => Object.fromEntries(Object.entries(e).sort(fv));
function Vf(e) {
  const t = Vu(e);
  return Object.assign(Object.values(t), t);
}
function bk(e) {
  const t = Object.keys(Vu(e));
  return new Set(t);
}
function Lf(e) {
  var t;
  if (!e)
    return e;
  e = (t = Bc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function na(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Bc(e)})`), t && r.push("and", `(max-width: ${Bc(t)})`), r.join(" ");
}
function yk(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Vf(e), n = Object.entries(e).sort(fv).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? Lf(d) : void 0, {
      _minW: Lf(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: na(null, d),
      minWQuery: na(s),
      minMaxQuery: na(s, d)
    };
  }), o = bk(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Vu(e),
    asArray: Vf(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => na(i)).slice(1)
    ],
    /**
     * Converts the object responsive syntax to array syntax
     *
     * @example
     * toArrayValue({ base: 1, sm: 2, md: 3 }) // => [1, 2, 3]
     */
    toArrayValue(i) {
      if (!Lt(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; vk(s) === null; )
        s.pop();
      return s;
    },
    /**
     * Converts the array responsive syntax to object syntax
     *
     * @example
     * toObjectValue([1, 2, 3]) // => { base: 1, sm: 2, md: 3 }
     */
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
}, cn = (e) => pv((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Hr = (e) => pv((t) => e(t, "~ &"), "[data-peer]", ".peer"), pv = (e, ...t) => t.map(e).join(", "), Us = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: cn(_t.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Hr(_t.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: cn(_t.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Hr(_t.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: cn(_t.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Hr(_t.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: cn(_t.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Hr(_t.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: cn(_t.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Hr(_t.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: cn(_t.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Hr(_t.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: cn(_t.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Hr(_t.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: cn(_t.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Hr(_t.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Hr(_t.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, hv = Object.keys(
  Us
);
function Wf(e, t) {
  return de(String(e).replace(/\./g, "-"), void 0, t);
}
function xk(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Wf(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, v = Dn.negate(s), b = Dn.negate(c);
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
      const { reference: v } = Wf(m, t == null ? void 0 : t.cssVarPrefix);
      return v;
    }, d = Lt(s) ? s : { default: s };
    r = sr(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, v;
          if (!m)
            return f;
          const b = u(`${m}`);
          if (p === "default")
            return f[l] = b, f;
          const y = (v = (h = Us) == null ? void 0 : h[p]) != null ? v : p;
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
function Sk(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function wk(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function Ck(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Uf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (Ck(i) || Array.isArray(i)) {
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
var _k = [
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
function kk(e) {
  return wk(e, _k);
}
function Ek(e) {
  return e.semanticTokens;
}
function Pk(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var Tk = (e) => hv.includes(e) || e === "default";
function Ak({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Uf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Uf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(Tk)
    }
  ), r;
}
function OV(e) {
  var t;
  const r = Pk(e), n = kk(r), o = Ek(r), a = Ak({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap: s,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars: l
  } = xk(a, { cssVarPrefix: i });
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
    __breakpoints: yk(r.breakpoints)
  }), r;
}
var Lu = sr(
  {},
  Wi,
  je,
  Y_,
  fs,
  or,
  G_,
  rk,
  q_,
  uv,
  tk,
  pa,
  Nc,
  Je,
  sk,
  ik,
  nk,
  ok,
  X_,
  ak
), Ok = Object.assign({}, Je, or, fs, uv, pa), RV = Object.keys(
  Ok
), Rk = [...Object.keys(Lu), ...hv], $k = { ...Lu, ...Us }, Dk = (e) => e in $k, Mk = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = mn(e[i], t);
    if (s == null)
      continue;
    if (s = Lt(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function Ik(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function Fk(e) {
  return /^var\(--.+\)$/.test(e);
}
var Nk = (e, t) => e.startsWith("--") && typeof t == "string" && !Fk(t), jk = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = Ik(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function Bk(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = mn(a, n), d = Mk(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = mn(m, n);
      p in r && (p = r[p]), Nk(p, h) && (h = jk(n, h));
      let v = t[p];
      if (v === !0 && (v = { property: p }), Lt(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = sr(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let b = (c = (l = v == null ? void 0 : v.transform) == null ? void 0 : l.call(v, h, n, u)) != null ? c : h;
      b = v != null && v.processResult ? o(b, !0) : b;
      const y = mn(v == null ? void 0 : v.property, n);
      if (!i && (v != null && v.static)) {
        const S = mn(v.static, n);
        f = sr({}, f, S);
      }
      if (y && Array.isArray(y)) {
        for (const S of y)
          f[S] = b;
        continue;
      }
      if (y) {
        y === "&" && Lt(b) ? f = sr({}, f, b) : f[y] = b;
        continue;
      }
      if (Lt(b)) {
        f = sr({}, f, b);
        continue;
      }
      f[p] = b;
    }
    return f;
  };
  return o;
}
var zk = (e) => (t) => Bk({
  theme: t,
  pseudos: Us,
  configs: Lu
})(e);
function $V(e) {
  return e;
}
function DV(e) {
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
function Vk(e, t) {
  if (Array.isArray(e))
    return e;
  if (Lt(e))
    return t(e);
  if (e != null)
    return [e];
}
function Lk(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Wk(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = Vk(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], v = t.details[Lk(u, m)], b = na(h.minW, v == null ? void 0 : v._minW), y = mn((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (y) {
        if (p) {
          (l = n.parts) == null || l.forEach((S) => {
            sr(c, {
              [S]: f ? y[S] : { [b]: y[S] }
            });
          });
          continue;
        }
        if (!p) {
          f ? sr(c, y) : c[b] = y;
          continue;
        }
        c[b] = y;
      }
    }
    return c;
  };
}
function Uk(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = Wk(a);
    return sr(
      {},
      mn((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function Hk(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Br(e) {
  return Sk(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var Yk = [
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
function Gk(e) {
  return Lt(e) ? Yk.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var qk = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Xk = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Kk = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Zk = {
  property: qk,
  easing: Xk,
  duration: Kk
}, Jk = Zk, Qk = {
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
}, eE = Qk, tE = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, rE = tE, nE = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, oE = nE, aE = {
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
}, iE = aE, sE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, lE = sE, cE = {
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
}, uE = cE, dE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, fE = dE, pE = {
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
}, mv = pE, vv = {
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
}, hE = {
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
}, mE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, vE = {
  ...vv,
  ...hE,
  container: mE
}, gv = vE, bv = {
  breakpoints: oE,
  zIndices: eE,
  radii: lE,
  blur: fE,
  colors: iE,
  ...mv,
  sizes: gv,
  shadows: uE,
  space: vv,
  borders: rE,
  transition: Jk
}, { defineMultiStyleConfig: gE, definePartsStyle: oa } = Ke([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Yr = de("stepper-indicator-size"), no = de("stepper-icon-size"), oo = de("stepper-title-font-size"), aa = de("stepper-description-font-size"), Ko = de("stepper-accent-color"), bE = oa(({ colorScheme: e }) => ({
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
    [Ko.variable]: `colors.${e}.500`,
    _dark: {
      [Ko.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: oo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: aa.reference,
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
    width: Yr.reference,
    height: Yr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Ko.reference
    },
    "&[data-status=complete]": {
      bg: Ko.reference,
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
      bg: Ko.reference
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
      maxHeight: `calc(100% - ${Yr.reference} - 8px)`,
      top: `calc(${Yr.reference} + 4px)`,
      insetStart: `calc(${Yr.reference} / 2 - 1px)`
    }
  }
})), yE = gE({
  baseStyle: bE,
  sizes: {
    xs: oa({
      stepper: {
        [Yr.variable]: "sizes.4",
        [no.variable]: "sizes.3",
        [oo.variable]: "fontSizes.xs",
        [aa.variable]: "fontSizes.xs"
      }
    }),
    sm: oa({
      stepper: {
        [Yr.variable]: "sizes.6",
        [no.variable]: "sizes.4",
        [oo.variable]: "fontSizes.sm",
        [aa.variable]: "fontSizes.xs"
      }
    }),
    md: oa({
      stepper: {
        [Yr.variable]: "sizes.8",
        [no.variable]: "sizes.5",
        [oo.variable]: "fontSizes.md",
        [aa.variable]: "fontSizes.sm"
      }
    }),
    lg: oa({
      stepper: {
        [Yr.variable]: "sizes.10",
        [no.variable]: "sizes.6",
        [oo.variable]: "fontSizes.lg",
        [aa.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Le(e, t = {}) {
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
    return Le(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return Le(e, t);
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
var xE = Le("accordion").parts("root", "container", "button", "panel").extend("icon"), SE = Le("alert").parts("title", "description", "container").extend("icon", "spinner"), wE = Le("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), CE = Le("breadcrumb").parts("link", "item", "container").extend("separator");
Le("button").parts();
var _E = Le("checkbox").parts("control", "icon", "container").extend("label");
Le("progress").parts("track", "filledTrack").extend("label");
var kE = Le("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), EE = Le("editable").parts(
  "preview",
  "input",
  "textarea"
), PE = Le("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), TE = Le("formError").parts("text", "icon"), AE = Le("input").parts(
  "addon",
  "field",
  "element",
  "group"
), OE = Le("list").parts("container", "item", "icon"), RE = Le("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), $E = Le("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), DE = Le("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Le("pininput").parts("field");
var ME = Le("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), IE = Le("progress").parts(
  "label",
  "filledTrack",
  "track"
), FE = Le("radio").parts(
  "container",
  "control",
  "label"
), NE = Le("select").parts("field", "icon"), jE = Le("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), BE = Le("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), zE = Le("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), VE = Le("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), LE = Le("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), WE = Le("tag").parts(
  "container",
  "label",
  "closeButton"
), UE = Le("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Le("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function Fn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class HE extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ia = HE;
function Wu(e) {
  if (typeof e != "string")
    throw new ia(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = QE.test(e) ? qE(e) : e;
  const r = XE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(Na(s, 2), 16)), parseInt(Na(i[3] || "f", 2), 16) / 255];
  }
  const n = KE.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = ZE.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = JE.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (Fn(0, 100, s) !== s)
      throw new ia(e);
    if (Fn(0, 100, l) !== l)
      throw new ia(e);
    return [...eP(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new ia(e);
}
function YE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Hf = (e) => parseInt(e.replace(/_/g, ""), 36), GE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Hf(t.substring(0, 3)), n = Hf(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function qE(e) {
  const t = e.toLowerCase().trim(), r = GE[YE(t)];
  if (!r)
    throw new ia(e);
  return `#${r}`;
}
const Na = (e, t) => Array.from(Array(t)).map(() => e).join(""), XE = new RegExp(`^#${Na("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), KE = new RegExp(`^#${Na("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), ZE = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Na(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), JE = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, QE = /^[a-z]+$/i, Yf = (e) => Math.round(e * 255), eP = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Yf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Yf);
};
function tP(e, t, r, n) {
  return `rgba(${Fn(0, 255, e).toFixed()}, ${Fn(0, 255, t).toFixed()}, ${Fn(0, 255, r).toFixed()}, ${parseFloat(Fn(0, 1, n).toFixed(3))})`;
}
function rP(e, t) {
  const [r, n, o, a] = Wu(e);
  return tP(r, n, o, a - t);
}
function nP(e) {
  const [t, r, n, o] = Wu(e);
  let a = (i) => {
    const s = Fn(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function oP(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var aP = (e) => Object.keys(e).length === 0, Dt = (e, t, r) => {
  const n = oP(e, `colors.${t}`, t);
  try {
    return nP(n), n;
  } catch {
    return r ?? "#000000";
  }
}, iP = (e) => {
  const [t, r, n] = Wu(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, sP = (e) => (t) => {
  const r = Dt(t, e);
  return iP(r) < 128 ? "dark" : "light";
}, lP = (e) => (t) => sP(e)(t) === "dark", Ao = (e, t) => (r) => {
  const n = Dt(r, e);
  return rP(n, 1 - t);
};
function Gf(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var cP = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function uP(e) {
  const t = cP();
  return !e || aP(e) ? t : e.string && e.colors ? fP(e.string, e.colors) : e.string && !e.colors ? dP(e.string) : e.colors && !e.string ? pP(e.colors) : t;
}
function dP(e) {
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
function fP(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function pP(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ue(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Uu(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function yv(e) {
  return Lt(e) && e.reference ? e.reference : String(e);
}
var Hs = (e, ...t) => t.map(yv).join(` ${e} `).replace(/calc/g, ""), qf = (...e) => `calc(${Hs("+", ...e)})`, Xf = (...e) => `calc(${Hs("-", ...e)})`, zc = (...e) => `calc(${Hs("*", ...e)})`, Kf = (...e) => `calc(${Hs("/", ...e)})`, Zf = (e) => {
  const t = yv(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : zc(t, -1);
}, Gr = Object.assign(
  (e) => ({
    add: (...t) => Gr(qf(e, ...t)),
    subtract: (...t) => Gr(Xf(e, ...t)),
    multiply: (...t) => Gr(zc(e, ...t)),
    divide: (...t) => Gr(Kf(e, ...t)),
    negate: () => Gr(Zf(e)),
    toString: () => e.toString()
  }),
  {
    add: qf,
    subtract: Xf,
    multiply: zc,
    divide: Kf,
    negate: Zf
  }
);
function hP(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function mP(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function xv(e) {
  const t = mP(e.toString());
  return t.includes("\\.") ? e : hP(e) ? t.replace(".", "\\.") : e;
}
function vP(e, t = "") {
  return [t, xv(e)].filter(Boolean).join("-");
}
function gP(e, t) {
  return `var(${xv(e)}${t ? `, ${t}` : ""})`;
}
function bP(e, t = "") {
  return `--${vP(e, t)}`;
}
function yt(e, t) {
  const r = bP(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: gP(r, yP(t == null ? void 0 : t.fallback))
  };
}
function yP(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: xP, definePartsStyle: Ui } = Ke(zE.keys), ha = yt("switch-track-width"), jn = yt("switch-track-height"), Al = yt("switch-track-diff"), SP = Gr.subtract(ha, jn), Vc = yt("switch-thumb-x"), Zo = yt("switch-bg"), wP = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ha.reference],
    height: [jn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Zo.variable]: "colors.gray.300",
    _dark: {
      [Zo.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Zo.variable]: `colors.${t}.500`,
      _dark: {
        [Zo.variable]: `colors.${t}.200`
      }
    },
    bg: Zo.reference
  };
}, CP = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [jn.reference],
  height: [jn.reference],
  _checked: {
    transform: `translateX(${Vc.reference})`
  }
}, _P = Ui((e) => ({
  container: {
    [Al.variable]: SP,
    [Vc.variable]: Al.reference,
    _rtl: {
      [Vc.variable]: Gr(Al).negate().toString()
    }
  },
  track: wP(e),
  thumb: CP
})), kP = {
  sm: Ui({
    container: {
      [ha.variable]: "1.375rem",
      [jn.variable]: "sizes.3"
    }
  }),
  md: Ui({
    container: {
      [ha.variable]: "1.875rem",
      [jn.variable]: "sizes.4"
    }
  }),
  lg: Ui({
    container: {
      [ha.variable]: "2.875rem",
      [jn.variable]: "sizes.6"
    }
  })
}, EP = xP({
  baseStyle: _P,
  sizes: kP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: PP, definePartsStyle: vo } = Ke(VE.keys), TP = vo({
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
}), ps = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, AP = vo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ps
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ps
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
}), OP = vo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ue("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ps
    },
    td: {
      borderBottom: "1px",
      borderColor: ue(`${t}.100`, `${t}.700`)(e),
      ...ps
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
}), RP = {
  simple: AP,
  striped: OP,
  unstyled: {}
}, $P = {
  sm: vo({
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
  md: vo({
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
  lg: vo({
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
}, DP = PP({
  baseStyle: TP,
  variants: RP,
  sizes: $P,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Vt = de("tabs-color"), br = de("tabs-bg"), Ci = de("tabs-border-color"), { defineMultiStyleConfig: MP, definePartsStyle: Ir } = Ke(LE.keys), IP = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, FP = (e) => {
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
}, NP = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, jP = {
  p: 4
}, BP = Ir((e) => ({
  root: IP(e),
  tab: FP(e),
  tablist: NP(e),
  tabpanel: jP
})), zP = {
  sm: Ir({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ir({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ir({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, VP = Ir((e) => {
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
        [Vt.variable]: `colors.${t}.600`,
        _dark: {
          [Vt.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [br.variable]: "colors.gray.200",
        _dark: {
          [br.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Vt.reference,
      bg: br.reference
    }
  };
}), LP = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Ci.variable]: "transparent",
      _selected: {
        [Vt.variable]: `colors.${t}.600`,
        [Ci.variable]: "colors.white",
        _dark: {
          [Vt.variable]: `colors.${t}.300`,
          [Ci.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Ci.reference
      },
      color: Vt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), WP = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [br.variable]: "colors.gray.50",
      _dark: {
        [br.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [br.variable]: "colors.white",
        [Vt.variable]: `colors.${t}.600`,
        _dark: {
          [br.variable]: "colors.gray.800",
          [Vt.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Vt.reference,
      bg: br.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), UP = Ir((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Dt(r, `${t}.700`),
        bg: Dt(r, `${t}.100`)
      }
    }
  };
}), HP = Ir((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Vt.variable]: "colors.gray.600",
      _dark: {
        [Vt.variable]: "inherit"
      },
      _selected: {
        [Vt.variable]: "colors.white",
        [br.variable]: `colors.${t}.600`,
        _dark: {
          [Vt.variable]: "colors.gray.800",
          [br.variable]: `colors.${t}.300`
        }
      },
      color: Vt.reference,
      bg: br.reference
    }
  };
}), YP = Ir({}), GP = {
  line: VP,
  enclosed: LP,
  "enclosed-colored": WP,
  "soft-rounded": UP,
  "solid-rounded": HP,
  unstyled: YP
}, qP = MP({
  baseStyle: BP,
  sizes: zP,
  variants: GP,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), pt = mk("badge", ["bg", "color", "shadow"]), XP = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: pt.bg.reference,
  color: pt.color.reference,
  boxShadow: pt.shadow.reference
}, KP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ao(`${t}.500`, 0.6)(r);
  return {
    [pt.bg.variable]: `colors.${t}.500`,
    [pt.color.variable]: "colors.white",
    _dark: {
      [pt.bg.variable]: n,
      [pt.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, ZP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ao(`${t}.200`, 0.16)(r);
  return {
    [pt.bg.variable]: `colors.${t}.100`,
    [pt.color.variable]: `colors.${t}.800`,
    _dark: {
      [pt.bg.variable]: n,
      [pt.color.variable]: `colors.${t}.200`
    }
  };
}, JP = (e) => {
  const { colorScheme: t, theme: r } = e, n = Ao(`${t}.200`, 0.8)(r);
  return {
    [pt.color.variable]: `colors.${t}.500`,
    _dark: {
      [pt.color.variable]: n
    },
    [pt.shadow.variable]: `inset 0 0 0px 1px ${pt.color.reference}`
  };
}, QP = {
  solid: KP,
  subtle: ZP,
  outline: JP
}, ma = {
  baseStyle: XP,
  variants: QP,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: eT, definePartsStyle: Bn } = Ke(WE.keys), Jf = de("tag-bg"), Qf = de("tag-color"), Ol = de("tag-shadow"), Hi = de("tag-min-height"), Yi = de("tag-min-width"), Gi = de("tag-font-size"), qi = de("tag-padding-inline"), tT = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Qf.variable]: pt.color.reference,
  [Jf.variable]: pt.bg.reference,
  [Ol.variable]: pt.shadow.reference,
  color: Qf.reference,
  bg: Jf.reference,
  boxShadow: Ol.reference,
  borderRadius: "md",
  minH: Hi.reference,
  minW: Yi.reference,
  fontSize: Gi.reference,
  px: qi.reference,
  _focusVisible: {
    [Ol.variable]: "shadows.outline"
  }
}, rT = {
  lineHeight: 1.2,
  overflow: "visible"
}, nT = {
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
}, oT = Bn({
  container: tT,
  label: rT,
  closeButton: nT
}), aT = {
  sm: Bn({
    container: {
      [Hi.variable]: "sizes.5",
      [Yi.variable]: "sizes.5",
      [Gi.variable]: "fontSizes.xs",
      [qi.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Bn({
    container: {
      [Hi.variable]: "sizes.6",
      [Yi.variable]: "sizes.6",
      [Gi.variable]: "fontSizes.sm",
      [qi.variable]: "space.2"
    }
  }),
  lg: Bn({
    container: {
      [Hi.variable]: "sizes.8",
      [Yi.variable]: "sizes.8",
      [Gi.variable]: "fontSizes.md",
      [qi.variable]: "space.3"
    }
  })
}, iT = {
  subtle: Bn((e) => {
    var t;
    return {
      container: (t = ma.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Bn((e) => {
    var t;
    return {
      container: (t = ma.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Bn((e) => {
    var t;
    return {
      container: (t = ma.variants) == null ? void 0 : t.outline(e)
    };
  })
}, sT = eT({
  variants: iT,
  baseStyle: oT,
  sizes: aT,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: qr, defineMultiStyleConfig: lT } = Ke(AE.keys), ao = de("input-height"), io = de("input-font-size"), so = de("input-padding"), lo = de("input-border-radius"), cT = qr({
  addon: {
    height: ao.reference,
    fontSize: io.reference,
    px: so.reference,
    borderRadius: lo.reference
  },
  field: {
    width: "100%",
    height: ao.reference,
    fontSize: io.reference,
    px: so.reference,
    borderRadius: lo.reference,
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
}), un = {
  lg: {
    [io.variable]: "fontSizes.lg",
    [so.variable]: "space.4",
    [lo.variable]: "radii.md",
    [ao.variable]: "sizes.12"
  },
  md: {
    [io.variable]: "fontSizes.md",
    [so.variable]: "space.4",
    [lo.variable]: "radii.md",
    [ao.variable]: "sizes.10"
  },
  sm: {
    [io.variable]: "fontSizes.sm",
    [so.variable]: "space.3",
    [lo.variable]: "radii.sm",
    [ao.variable]: "sizes.8"
  },
  xs: {
    [io.variable]: "fontSizes.xs",
    [so.variable]: "space.2",
    [lo.variable]: "radii.sm",
    [ao.variable]: "sizes.6"
  }
}, uT = {
  lg: qr({
    field: un.lg,
    group: un.lg
  }),
  md: qr({
    field: un.md,
    group: un.md
  }),
  sm: qr({
    field: un.sm,
    group: un.sm
  }),
  xs: qr({
    field: un.xs,
    group: un.xs
  })
};
function Hu(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || ue("blue.500", "blue.300")(e),
    errorBorderColor: r || ue("red.500", "red.300")(e)
  };
}
var dT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Hu(e);
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
        borderColor: Dt(t, n),
        boxShadow: `0 0 0 1px ${Dt(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Dt(t, r),
        boxShadow: `0 0 0 1px ${Dt(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: ue("inherit", "whiteAlpha.50")(e),
      bg: ue("gray.100", "whiteAlpha.300")(e)
    }
  };
}), fT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Hu(e);
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
        borderColor: Dt(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Dt(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ue("gray.100", "whiteAlpha.50")(e)
    }
  };
}), pT = qr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Hu(e);
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
        borderColor: Dt(t, n),
        boxShadow: `0px 1px 0px 0px ${Dt(t, n)}`
      },
      _focusVisible: {
        borderColor: Dt(t, r),
        boxShadow: `0px 1px 0px 0px ${Dt(t, r)}`
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
}), hT = qr({
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
}), mT = {
  outline: dT,
  filled: fT,
  flushed: pT,
  unstyled: hT
}, Ve = lT({
  baseStyle: cT,
  sizes: uT,
  variants: mT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), ep, vT = {
  ...(ep = Ve.baseStyle) == null ? void 0 : ep.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, tp, rp, gT = {
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
  unstyled: (rp = (tp = Ve.variants) == null ? void 0 : tp.unstyled.field) != null ? rp : {}
}, np, op, ap, ip, sp, lp, cp, up, bT = {
  xs: (op = (np = Ve.sizes) == null ? void 0 : np.xs.field) != null ? op : {},
  sm: (ip = (ap = Ve.sizes) == null ? void 0 : ap.sm.field) != null ? ip : {},
  md: (lp = (sp = Ve.sizes) == null ? void 0 : sp.md.field) != null ? lp : {},
  lg: (up = (cp = Ve.sizes) == null ? void 0 : cp.lg.field) != null ? up : {}
}, yT = {
  baseStyle: vT,
  sizes: bT,
  variants: gT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, _i = yt("tooltip-bg"), Rl = yt("tooltip-fg"), xT = yt("popper-arrow-bg"), ST = {
  bg: _i.reference,
  color: Rl.reference,
  [_i.variable]: "colors.gray.700",
  [Rl.variable]: "colors.whiteAlpha.900",
  _dark: {
    [_i.variable]: "colors.gray.300",
    [Rl.variable]: "colors.gray.900"
  },
  [xT.variable]: _i.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, wT = {
  baseStyle: ST
}, { defineMultiStyleConfig: CT, definePartsStyle: sa } = Ke(IE.keys), _T = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = ue(
    Gf(),
    Gf("1rem", "rgba(0,0,0,0.1)")
  )(e), i = ue(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Dt(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, kT = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, ET = (e) => ({
  bg: ue("gray.100", "whiteAlpha.300")(e)
}), PT = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ..._T(e)
}), TT = sa((e) => ({
  label: kT,
  filledTrack: PT(e),
  track: ET(e)
})), AT = {
  xs: sa({
    track: { h: "1" }
  }),
  sm: sa({
    track: { h: "2" }
  }),
  md: sa({
    track: { h: "3" }
  }),
  lg: sa({
    track: { h: "4" }
  })
}, OT = CT({
  sizes: AT,
  baseStyle: TT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), RT = (e) => typeof e == "function";
function Mt(e, ...t) {
  return RT(e) ? e(...t) : e;
}
var { definePartsStyle: Xi, defineMultiStyleConfig: $T } = Ke(_E.keys), va = de("checkbox-size"), DT = (e) => {
  const { colorScheme: t } = e;
  return {
    w: va.reference,
    h: va.reference,
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
}, MT = {
  _disabled: { cursor: "not-allowed" }
}, IT = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, FT = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, NT = Xi((e) => ({
  icon: FT,
  container: MT,
  control: Mt(DT, e),
  label: IT
})), jT = {
  sm: Xi({
    control: { [va.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Xi({
    control: { [va.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Xi({
    control: { [va.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, hs = $T({
  baseStyle: NT,
  sizes: jT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: BT, definePartsStyle: Ki } = Ke(FE.keys), zT = (e) => {
  var t;
  const r = (t = Mt(hs.baseStyle, e)) == null ? void 0 : t.control;
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
}, VT = Ki((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = hs).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = hs).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: zT(e)
  };
}), LT = {
  md: Ki({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ki({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ki({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, WT = BT({
  baseStyle: VT,
  sizes: LT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: UT, definePartsStyle: HT } = Ke(NE.keys), ki = de("select-bg"), dp, YT = {
  ...(dp = Ve.baseStyle) == null ? void 0 : dp.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ki.reference,
  [ki.variable]: "colors.white",
  _dark: {
    [ki.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ki.reference
  }
}, GT = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, qT = HT({
  field: YT,
  icon: GT
}), Ei = {
  paddingInlineEnd: "8"
}, fp, pp, hp, mp, vp, gp, bp, yp, XT = {
  lg: {
    ...(fp = Ve.sizes) == null ? void 0 : fp.lg,
    field: {
      ...(pp = Ve.sizes) == null ? void 0 : pp.lg.field,
      ...Ei
    }
  },
  md: {
    ...(hp = Ve.sizes) == null ? void 0 : hp.md,
    field: {
      ...(mp = Ve.sizes) == null ? void 0 : mp.md.field,
      ...Ei
    }
  },
  sm: {
    ...(vp = Ve.sizes) == null ? void 0 : vp.sm,
    field: {
      ...(gp = Ve.sizes) == null ? void 0 : gp.sm.field,
      ...Ei
    }
  },
  xs: {
    ...(bp = Ve.sizes) == null ? void 0 : bp.xs,
    field: {
      ...(yp = Ve.sizes) == null ? void 0 : yp.xs.field,
      ...Ei
    },
    icon: {
      insetEnd: "1"
    }
  }
}, KT = UT({
  baseStyle: qT,
  sizes: XT,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), $l = de("skeleton-start-color"), Dl = de("skeleton-end-color"), ZT = {
  [$l.variable]: "colors.gray.100",
  [Dl.variable]: "colors.gray.400",
  _dark: {
    [$l.variable]: "colors.gray.800",
    [Dl.variable]: "colors.gray.600"
  },
  background: $l.reference,
  borderColor: Dl.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, JT = {
  baseStyle: ZT
}, Ml = de("skip-link-bg"), QT = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Ml.variable]: "colors.white",
    _dark: {
      [Ml.variable]: "colors.gray.700"
    },
    bg: Ml.reference
  }
}, eA = {
  baseStyle: QT
}, { defineMultiStyleConfig: tA, definePartsStyle: Ys } = Ke(jE.keys), ja = de("slider-thumb-size"), Ba = de("slider-track-size"), hn = de("slider-bg"), rA = (e) => {
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
    ...Uu({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, nA = (e) => ({
  ...Uu({
    orientation: e.orientation,
    horizontal: { h: Ba.reference },
    vertical: { w: Ba.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [hn.variable]: "colors.gray.200",
  _dark: {
    [hn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [hn.variable]: "colors.gray.300",
    _dark: {
      [hn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: hn.reference
}), oA = (e) => {
  const { orientation: t } = e;
  return {
    ...Uu({
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
    w: ja.reference,
    h: ja.reference,
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
}, aA = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [hn.variable]: `colors.${t}.500`,
    _dark: {
      [hn.variable]: `colors.${t}.200`
    },
    bg: hn.reference
  };
}, iA = Ys((e) => ({
  container: rA(e),
  track: nA(e),
  thumb: oA(e),
  filledTrack: aA(e)
})), sA = Ys({
  container: {
    [ja.variable]: "sizes.4",
    [Ba.variable]: "sizes.1"
  }
}), lA = Ys({
  container: {
    [ja.variable]: "sizes.3.5",
    [Ba.variable]: "sizes.1"
  }
}), cA = Ys({
  container: {
    [ja.variable]: "sizes.2.5",
    [Ba.variable]: "sizes.0.5"
  }
}), uA = {
  lg: sA,
  md: lA,
  sm: cA
}, dA = tA({
  baseStyle: iA,
  sizes: uA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Mn = yt("spinner-size"), fA = {
  width: [Mn.reference],
  height: [Mn.reference]
}, pA = {
  xs: {
    [Mn.variable]: "sizes.3"
  },
  sm: {
    [Mn.variable]: "sizes.4"
  },
  md: {
    [Mn.variable]: "sizes.6"
  },
  lg: {
    [Mn.variable]: "sizes.8"
  },
  xl: {
    [Mn.variable]: "sizes.12"
  }
}, hA = {
  baseStyle: fA,
  sizes: pA,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: mA, definePartsStyle: Sv } = Ke(BE.keys), vA = {
  fontWeight: "medium"
}, gA = {
  opacity: 0.8,
  marginBottom: "2"
}, bA = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, yA = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, xA = Sv({
  container: {},
  label: vA,
  helpText: gA,
  number: bA,
  icon: yA
}), SA = {
  md: Sv({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, wA = mA({
  baseStyle: xA,
  sizes: SA,
  defaultProps: {
    size: "md"
  }
}), Il = de("kbd-bg"), CA = {
  [Il.variable]: "colors.gray.100",
  _dark: {
    [Il.variable]: "colors.whiteAlpha.100"
  },
  bg: Il.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, _A = {
  baseStyle: CA
}, kA = {
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
}, EA = {
  baseStyle: kA
}, { defineMultiStyleConfig: PA, definePartsStyle: TA } = Ke(OE.keys), AA = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, OA = TA({
  icon: AA
}), RA = PA({
  baseStyle: OA
}), { defineMultiStyleConfig: $A, definePartsStyle: DA } = Ke(RE.keys), Rr = de("menu-bg"), Fl = de("menu-shadow"), MA = {
  [Rr.variable]: "#fff",
  [Fl.variable]: "shadows.sm",
  _dark: {
    [Rr.variable]: "colors.gray.700",
    [Fl.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Rr.reference,
  boxShadow: Fl.reference
}, IA = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Rr.variable]: "colors.gray.100",
    _dark: {
      [Rr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Rr.variable]: "colors.gray.200",
    _dark: {
      [Rr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Rr.variable]: "colors.gray.100",
    _dark: {
      [Rr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Rr.reference
}, FA = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, NA = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, jA = {
  opacity: 0.6
}, BA = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, zA = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, VA = DA({
  button: zA,
  list: MA,
  item: IA,
  groupTitle: FA,
  icon: NA,
  command: jA,
  divider: BA
}), LA = $A({
  baseStyle: VA
}), { defineMultiStyleConfig: WA, definePartsStyle: Lc } = Ke($E.keys), Nl = de("modal-bg"), jl = de("modal-shadow"), UA = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, HA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, YA = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Nl.variable]: "colors.white",
    [jl.variable]: "shadows.lg",
    _dark: {
      [Nl.variable]: "colors.gray.700",
      [jl.variable]: "shadows.dark-lg"
    },
    bg: Nl.reference,
    boxShadow: jl.reference
  };
}, GA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, qA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, XA = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, KA = {
  px: "6",
  py: "4"
}, ZA = Lc((e) => ({
  overlay: UA,
  dialogContainer: Mt(HA, e),
  dialog: Mt(YA, e),
  header: GA,
  closeButton: qA,
  body: Mt(XA, e),
  footer: KA
}));
function pr(e) {
  return Lc(e === "full" ? {
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
var JA = {
  xs: pr("xs"),
  sm: pr("sm"),
  md: pr("md"),
  lg: pr("lg"),
  xl: pr("xl"),
  "2xl": pr("2xl"),
  "3xl": pr("3xl"),
  "4xl": pr("4xl"),
  "5xl": pr("5xl"),
  "6xl": pr("6xl"),
  full: pr("full")
}, QA = WA({
  baseStyle: ZA,
  sizes: JA,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: eO, definePartsStyle: wv } = Ke(DE.keys), Yu = yt("number-input-stepper-width"), Cv = yt("number-input-input-padding"), tO = Gr(Yu).add("0.5rem").toString(), Bl = yt("number-input-bg"), zl = yt("number-input-color"), Vl = yt("number-input-border-color"), rO = {
  [Yu.variable]: "sizes.6",
  [Cv.variable]: tO
}, nO = (e) => {
  var t, r;
  return (r = (t = Mt(Ve.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, oO = {
  width: Yu.reference
}, aO = {
  borderStart: "1px solid",
  borderStartColor: Vl.reference,
  color: zl.reference,
  bg: Bl.reference,
  [zl.variable]: "colors.chakra-body-text",
  [Vl.variable]: "colors.chakra-border-color",
  _dark: {
    [zl.variable]: "colors.whiteAlpha.800",
    [Vl.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Bl.variable]: "colors.gray.200",
    _dark: {
      [Bl.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, iO = wv((e) => {
  var t;
  return {
    root: rO,
    field: (t = Mt(nO, e)) != null ? t : {},
    stepperGroup: oO,
    stepper: aO
  };
});
function Pi(e) {
  var t, r, n;
  const o = (t = Ve.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = mv.fontSizes[i];
  return wv({
    field: {
      ...o.field,
      paddingInlineEnd: Cv.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Gr(s).multiply(0.75).toString(),
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
var sO = {
  xs: Pi("xs"),
  sm: Pi("sm"),
  md: Pi("md"),
  lg: Pi("lg")
}, lO = eO({
  baseStyle: iO,
  sizes: sO,
  variants: Ve.variants,
  defaultProps: Ve.defaultProps
}), xp, cO = {
  ...(xp = Ve.baseStyle) == null ? void 0 : xp.field,
  textAlign: "center"
}, uO = {
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
}, Sp, wp, dO = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Mt((t = Ve.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Mt((t = Ve.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Mt((t = Ve.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (wp = (Sp = Ve.variants) == null ? void 0 : Sp.unstyled.field) != null ? wp : {}
}, fO = {
  baseStyle: cO,
  sizes: uO,
  variants: dO,
  defaultProps: Ve.defaultProps
}, { defineMultiStyleConfig: pO, definePartsStyle: hO } = Ke(ME.keys), Ti = yt("popper-bg"), mO = yt("popper-arrow-bg"), Cp = yt("popper-arrow-shadow-color"), vO = { zIndex: 10 }, gO = {
  [Ti.variable]: "colors.white",
  bg: Ti.reference,
  [mO.variable]: Ti.reference,
  [Cp.variable]: "colors.gray.200",
  _dark: {
    [Ti.variable]: "colors.gray.700",
    [Cp.variable]: "colors.whiteAlpha.300"
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
}, bO = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, yO = {
  px: 3,
  py: 2
}, xO = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, SO = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, wO = hO({
  popper: vO,
  content: gO,
  header: bO,
  body: yO,
  footer: xO,
  closeButton: SO
}), CO = pO({
  baseStyle: wO
}), { definePartsStyle: Wc, defineMultiStyleConfig: _O } = Ke(kE.keys), Ll = de("drawer-bg"), Wl = de("drawer-box-shadow");
function Zn(e) {
  return Wc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var kO = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, EO = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, PO = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Ll.variable]: "colors.white",
    [Wl.variable]: "shadows.lg",
    _dark: {
      [Ll.variable]: "colors.gray.700",
      [Wl.variable]: "shadows.dark-lg"
    },
    bg: Ll.reference,
    boxShadow: Wl.reference
  };
}, TO = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, AO = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, OO = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, RO = {
  px: "6",
  py: "4"
}, $O = Wc((e) => ({
  overlay: kO,
  dialogContainer: EO,
  dialog: Mt(PO, e),
  header: TO,
  closeButton: AO,
  body: OO,
  footer: RO
})), DO = {
  xs: Zn("xs"),
  sm: Zn("md"),
  md: Zn("lg"),
  lg: Zn("2xl"),
  xl: Zn("4xl"),
  full: Zn("full")
}, MO = _O({
  baseStyle: $O,
  sizes: DO,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: IO, defineMultiStyleConfig: FO } = Ke(EE.keys), NO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, jO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, BO = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, zO = IO({
  preview: NO,
  input: jO,
  textarea: BO
}), VO = FO({
  baseStyle: zO
}), { definePartsStyle: LO, defineMultiStyleConfig: WO } = Ke(PE.keys), go = de("form-control-color"), UO = {
  marginStart: "1",
  [go.variable]: "colors.red.500",
  _dark: {
    [go.variable]: "colors.red.300"
  },
  color: go.reference
}, HO = {
  mt: "2",
  [go.variable]: "colors.gray.600",
  _dark: {
    [go.variable]: "colors.whiteAlpha.600"
  },
  color: go.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, YO = LO({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: UO,
  helperText: HO
}), GO = WO({
  baseStyle: YO
}), { definePartsStyle: qO, defineMultiStyleConfig: XO } = Ke(TE.keys), bo = de("form-error-color"), KO = {
  [bo.variable]: "colors.red.500",
  _dark: {
    [bo.variable]: "colors.red.300"
  },
  color: bo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, ZO = {
  marginEnd: "0.5em",
  [bo.variable]: "colors.red.500",
  _dark: {
    [bo.variable]: "colors.red.300"
  },
  color: bo.reference
}, JO = qO({
  text: KO,
  icon: ZO
}), QO = XO({
  baseStyle: JO
}), eR = {
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
}, tR = {
  baseStyle: eR
}, rR = {
  fontFamily: "heading",
  fontWeight: "bold"
}, nR = {
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
}, oR = {
  baseStyle: rR,
  sizes: nR,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: aR, definePartsStyle: iR } = Ke(CE.keys), Ul = de("breadcrumb-link-decor"), sR = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Ul.reference,
  [Ul.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Ul.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, lR = iR({
  link: sR
}), cR = aR({
  baseStyle: lR
}), uR = {
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
}, _v = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: ue("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ue("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: ue("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Ao(`${t}.200`, 0.12)(r), o = Ao(`${t}.200`, 0.24)(r);
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
}, dR = (e) => {
  const { colorScheme: t } = e, r = ue("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Mt(_v, e)
  };
}, fR = {
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
}, pR = (e) => {
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
  } = (t = fR[r]) != null ? t : {}, s = ue(n, `${r}.200`)(e);
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
}, hR = (e) => {
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
}, mR = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, vR = {
  ghost: _v,
  outline: dR,
  solid: pR,
  link: hR,
  unstyled: mR
}, gR = {
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
}, bR = {
  baseStyle: uR,
  variants: vR,
  sizes: gR,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: zn, defineMultiStyleConfig: yR } = Ke(UE.keys), ms = de("card-bg"), Kr = de("card-padding"), kv = de("card-shadow"), Zi = de("card-radius"), Ev = de("card-border-width", "0"), Pv = de("card-border-color"), xR = zn({
  container: {
    [ms.variable]: "colors.chakra-body-bg",
    backgroundColor: ms.reference,
    boxShadow: kv.reference,
    borderRadius: Zi.reference,
    color: "chakra-body-text",
    borderWidth: Ev.reference,
    borderColor: Pv.reference
  },
  body: {
    padding: Kr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Kr.reference
  },
  footer: {
    padding: Kr.reference
  }
}), SR = {
  sm: zn({
    container: {
      [Zi.variable]: "radii.base",
      [Kr.variable]: "space.3"
    }
  }),
  md: zn({
    container: {
      [Zi.variable]: "radii.md",
      [Kr.variable]: "space.5"
    }
  }),
  lg: zn({
    container: {
      [Zi.variable]: "radii.xl",
      [Kr.variable]: "space.7"
    }
  })
}, wR = {
  elevated: zn({
    container: {
      [kv.variable]: "shadows.base",
      _dark: {
        [ms.variable]: "colors.gray.700"
      }
    }
  }),
  outline: zn({
    container: {
      [Ev.variable]: "1px",
      [Pv.variable]: "colors.chakra-border-color"
    }
  }),
  filled: zn({
    container: {
      [ms.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Kr.variable]: 0
    },
    header: {
      [Kr.variable]: 0
    },
    footer: {
      [Kr.variable]: 0
    }
  }
}, CR = yR({
  baseStyle: xR,
  variants: wR,
  sizes: SR,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ga = yt("close-button-size"), Jo = yt("close-button-bg"), _R = {
  w: [ga.reference],
  h: [ga.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Jo.variable]: "colors.blackAlpha.100",
    _dark: {
      [Jo.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Jo.variable]: "colors.blackAlpha.200",
    _dark: {
      [Jo.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Jo.reference
}, kR = {
  lg: {
    [ga.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ga.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ga.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, ER = {
  baseStyle: _R,
  sizes: kR,
  defaultProps: {
    size: "md"
  }
}, { variants: PR, defaultProps: TR } = ma, AR = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: pt.bg.reference,
  color: pt.color.reference,
  boxShadow: pt.shadow.reference
}, OR = {
  baseStyle: AR,
  variants: PR,
  defaultProps: TR
}, RR = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, $R = {
  baseStyle: RR
}, DR = {
  opacity: 0.6,
  borderColor: "inherit"
}, MR = {
  borderStyle: "solid"
}, IR = {
  borderStyle: "dashed"
}, FR = {
  solid: MR,
  dashed: IR
}, NR = {
  baseStyle: DR,
  variants: FR,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: jR, defineMultiStyleConfig: BR } = Ke(xE.keys), zR = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, VR = {
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
}, LR = {
  pt: "2",
  px: "4",
  pb: "5"
}, WR = {
  fontSize: "1.25em"
}, UR = jR({
  container: zR,
  button: VR,
  panel: LR,
  icon: WR
}), HR = BR({ baseStyle: UR }), { definePartsStyle: ei, defineMultiStyleConfig: YR } = Ke(SE.keys), Zt = de("alert-fg"), rn = de("alert-bg"), GR = ei({
  container: {
    bg: rn.reference,
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
    color: Zt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Zt.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Gu(e) {
  const { theme: t, colorScheme: r } = e, n = Ao(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var qR = ei((e) => {
  const { colorScheme: t } = e, r = Gu(e);
  return {
    container: {
      [Zt.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Zt.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      }
    }
  };
}), XR = ei((e) => {
  const { colorScheme: t } = e, r = Gu(e);
  return {
    container: {
      [Zt.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Zt.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Zt.reference
    }
  };
}), KR = ei((e) => {
  const { colorScheme: t } = e, r = Gu(e);
  return {
    container: {
      [Zt.variable]: `colors.${t}.600`,
      [rn.variable]: r.light,
      _dark: {
        [Zt.variable]: `colors.${t}.200`,
        [rn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Zt.reference
    }
  };
}), ZR = ei((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Zt.variable]: "colors.white",
      [rn.variable]: `colors.${t}.600`,
      _dark: {
        [Zt.variable]: "colors.gray.900",
        [rn.variable]: `colors.${t}.200`
      },
      color: Zt.reference
    }
  };
}), JR = {
  subtle: qR,
  "left-accent": XR,
  "top-accent": KR,
  solid: ZR
}, QR = YR({
  baseStyle: GR,
  variants: JR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Tv, defineMultiStyleConfig: e$ } = Ke(wE.keys), yo = de("avatar-border-color"), ba = de("avatar-bg"), za = de("avatar-font-size"), Oo = de("avatar-size"), t$ = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: yo.reference,
  [yo.variable]: "white",
  _dark: {
    [yo.variable]: "colors.gray.800"
  }
}, r$ = {
  bg: ba.reference,
  fontSize: za.reference,
  width: Oo.reference,
  height: Oo.reference,
  lineHeight: "1",
  [ba.variable]: "colors.gray.200",
  _dark: {
    [ba.variable]: "colors.whiteAlpha.400"
  }
}, n$ = (e) => {
  const { name: t, theme: r } = e, n = t ? uP({ string: t }) : "colors.gray.400", o = lP(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: ba.reference,
    fontSize: za.reference,
    color: a,
    borderColor: yo.reference,
    verticalAlign: "top",
    width: Oo.reference,
    height: Oo.reference,
    "&:not([data-loaded])": {
      [ba.variable]: n
    },
    [yo.variable]: "colors.white",
    _dark: {
      [yo.variable]: "colors.gray.800"
    }
  };
}, o$ = {
  fontSize: za.reference,
  lineHeight: "1"
}, a$ = Tv((e) => ({
  badge: Mt(t$, e),
  excessLabel: Mt(r$, e),
  container: Mt(n$, e),
  label: o$
}));
function dn(e) {
  const t = e !== "100%" ? gv[e] : void 0;
  return Tv({
    container: {
      [Oo.variable]: t ?? e,
      [za.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Oo.variable]: t ?? e,
      [za.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var i$ = {
  "2xs": dn(4),
  xs: dn(6),
  sm: dn(8),
  md: dn(12),
  lg: dn(16),
  xl: dn(24),
  "2xl": dn(32),
  full: dn("100%")
}, s$ = e$({
  baseStyle: a$,
  sizes: i$,
  defaultProps: {
    size: "md"
  }
}), l$ = {
  Accordion: HR,
  Alert: QR,
  Avatar: s$,
  Badge: ma,
  Breadcrumb: cR,
  Button: bR,
  Checkbox: hs,
  CloseButton: ER,
  Code: OR,
  Container: $R,
  Divider: NR,
  Drawer: MO,
  Editable: VO,
  Form: GO,
  FormError: QO,
  FormLabel: tR,
  Heading: oR,
  Input: Ve,
  Kbd: _A,
  Link: EA,
  List: RA,
  Menu: LA,
  Modal: QA,
  NumberInput: lO,
  PinInput: fO,
  Popover: CO,
  Progress: OT,
  Radio: WT,
  Select: KT,
  Skeleton: JT,
  SkipLink: eA,
  Slider: dA,
  Spinner: hA,
  Stat: wA,
  Switch: EP,
  Table: DP,
  Tabs: qP,
  Tag: sT,
  Textarea: yT,
  Tooltip: wT,
  Card: CR,
  Stepper: yE
}, Av = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Ov = {
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
}, Rv = "ltr", $v = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, c$ = {
  semanticTokens: Av,
  direction: Rv,
  ...bv,
  components: l$,
  styles: Ov,
  config: $v
}, u$ = {
  semanticTokens: Av,
  direction: Rv,
  components: {},
  ...bv,
  styles: Ov,
  config: $v
};
function la(e) {
  return typeof e == "function";
}
function d$(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Dv = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return Gk(o) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, d$(
    ...n.map(
      (a) => (i) => la(a) ? a(i) : Mv(i, a)
    )
  )(o);
}, MV = Dv(c$), IV = Dv(u$);
function Mv(...e) {
  return sr({}, ...e, Iv);
}
function Iv(e, t, r, n) {
  if ((la(e) || la(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = la(e) ? e(...o) : e, i = la(t) ? t(...o) : t;
      return sr({}, a, i, Iv);
    };
}
function f$(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function p$(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var h$ = (e) => {
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
}, m$ = h$(p$);
function Fv(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Nv = (e) => Fv(e, (t) => t != null);
function _p(e) {
  return typeof e == "number";
}
function v$(e) {
  return typeof e == "function";
}
var g$ = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function FV(e) {
  return "current" in e;
}
function b$(e, ...t) {
  return v$(e) ? e(...t) : e;
}
function NV(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function y$(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var jV = () => {
}, BV = /* @__PURE__ */ y$((e) => () => {
  const { condition: t, message: r } = e;
  t && g$ && console.warn(r);
}), zV = (...e) => (t) => e.reduce((r, n) => n(r), t), Hl = (e, t) => Math.abs(e - t), kp = (e) => "x" in e && "y" in e;
function VV(e, t) {
  if (_p(e) && _p(t))
    return Hl(e, t);
  if (kp(e) && kp(t)) {
    const r = Hl(e.x, t.x), n = Hl(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const jv = 1 / 60 * 1e3, x$ = typeof performance < "u" ? () => performance.now() : () => Date.now(), Bv = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(x$()), jv);
function S$(e) {
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
const w$ = 40;
let Uc = !0, Va = !1, Hc = !1;
const xo = {
  delta: 0,
  timestamp: 0
}, ti = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Gs = ti.reduce((e, t) => (e[t] = S$(() => Va = !0), e), {}), C$ = ti.reduce((e, t) => {
  const r = Gs[t];
  return e[t] = (n, o = !1, a = !1) => (Va || E$(), r.schedule(n, o, a)), e;
}, {}), _$ = ti.reduce((e, t) => (e[t] = Gs[t].cancel, e), {});
ti.reduce((e, t) => (e[t] = () => Gs[t].process(xo), e), {});
const k$ = (e) => Gs[e].process(xo), zv = (e) => {
  Va = !1, xo.delta = Uc ? jv : Math.max(Math.min(e - xo.timestamp, w$), 1), xo.timestamp = e, Hc = !0, ti.forEach(k$), Hc = !1, Va && (Uc = !1, Bv(zv));
}, E$ = () => {
  Va = !0, Uc = !0, Hc || Bv(zv);
}, Ep = () => xo;
var P$ = typeof Element < "u", T$ = typeof Map == "function", A$ = typeof Set == "function", O$ = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ji(e, t) {
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
        if (!Ji(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (T$ && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Ji(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (A$ && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (O$ && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (P$ && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Ji(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var R$ = function(t, r) {
  try {
    return Ji(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const $$ = /* @__PURE__ */ Ms(R$);
function qu(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = lv(), s = e ? m$(a, `components.${e}`) : void 0, l = n || s, c = sr(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Nv(f$(o, ["children"]))
  ), u = be({});
  if (l) {
    const f = Uk(l)(c);
    $$(u.current, f) || (u.current = f);
  }
  return u.current;
}
function jo(e, t = {}) {
  return qu(e, t);
}
function Bo(e, t = {}) {
  return qu(e, t);
}
function LV(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = lv(), i = (r = a.components) == null ? void 0 : r[e], s = i ? Mv(i, n) : n;
  return qu(null, {
    ...o,
    styleConfig: s
  });
}
var D$ = /* @__PURE__ */ new Set([
  ...Rk,
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
]), M$ = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function I$(e) {
  return M$.has(e) || !D$.has(e);
}
function F$(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var N$ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, j$ = /* @__PURE__ */ Jm(
  function(e) {
    return N$.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), B$ = j$, z$ = function(t) {
  return t !== "theme";
}, Pp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? B$ : z$;
}, Tp = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ap = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, V$ = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return zs(r, n, o), Iu(function() {
    return Vs(r, n, o);
  }), null;
}, L$ = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = Tp(t, r, n), l = s || Pp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Ap), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(Ap), d.push(u[p], u[0][p]);
    }
    var m = Ls(function(h, v, b) {
      var y = c && h.as || o, S = "", _ = [], w = h;
      if (h.theme == null) {
        w = {};
        for (var M in h)
          w[M] = h[M];
        w.theme = U.useContext(yn);
      }
      typeof h.className == "string" ? S = Du(v.registered, _, h.className) : h.className != null && (S = h.className + " ");
      var P = To(d.concat(_), v.registered, w);
      S += v.key + "-" + P.name, i !== void 0 && (S += " " + i);
      var I = c && s === void 0 ? Pp(y) : l, z = {};
      for (var j in h)
        c && j === "as" || // $FlowFixMe
        I(j) && (z[j] = h[j]);
      return z.className = S, z.ref = b, /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement(V$, {
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
      return e(h, Wn({}, r, v, {
        shouldForwardProp: Tp(m, v, !0)
      })).apply(void 0, d);
    }, m;
  };
}, W$ = [
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
], vs = L$.bind();
W$.forEach(function(e) {
  vs[e] = vs(e);
});
var Op, U$ = (Op = vs.default) != null ? Op : vs, H$ = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = Fv(i, (d, f) => Dk(f)), l = b$(e, t), c = F$(
    {},
    o,
    l,
    Nv(s),
    a
  ), u = zk(c)(t.theme);
  return n ? [u, n] : u;
};
function Yl(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = I$);
  const o = H$({ baseStyle: r }), a = U$(
    e,
    n
  )(o);
  return It.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Bu();
    return It.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function Y$() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Yl, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(t, r, n) {
      return Yl(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Yl(r)), e.get(r);
    }
  });
}
var ge = Y$();
function _e(e) {
  return At(e);
}
var Xu = Cr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
Xu.displayName = "EnvironmentContext";
function G$({ defer: e } = {}) {
  const [, t] = x0((r) => r + 1, 0);
  return Fa(() => {
    e && t();
  }, [e]), ft(Xu);
}
function q$(e) {
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
  return /* @__PURE__ */ L.jsxs(Xu.Provider, { value: a, children: [
    t,
    i && /* @__PURE__ */ L.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
q$.displayName = "EnvironmentProvider";
function Jt(e, t = []) {
  const r = be(e);
  return Fe(() => {
    r.current = e;
  }), G((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function zo(e, t) {
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
}), qs = Cr({}), ri = Cr(null), Xs = typeof document < "u", gs = Xs ? $s : Fe, Lv = Cr({ strict: !1 });
function X$(e, t, r, n) {
  const { visualElement: o } = ft(qs), a = ft(Lv), i = ft(ri), s = ft(Vv).reducedMotion, l = be();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return gm(() => {
    c && c.update(r, i);
  }), gs(() => {
    c && c.render();
  }), Fe(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? gs : Fe)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function co(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function K$(e, t, r) {
  return G(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : co(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function La(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ks(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ku = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Zu = ["initial", ...Ku];
function Zs(e) {
  return Ks(e.animate) || Zu.some((t) => La(e[t]));
}
function Wv(e) {
  return !!(Zs(e) || e.variants);
}
function Z$(e, t) {
  if (Zs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || La(r) ? r : void 0,
      animate: La(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function J$(e) {
  const { initial: t, animate: r } = Z$(e, ft(qs));
  return gt(() => ({ initial: t, animate: r }), [Rp(t), Rp(r)]);
}
function Rp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const $p = {
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
}, Wa = {};
for (const e in $p)
  Wa[e] = {
    isEnabled: (t) => $p[e].some((r) => !!t[r])
  };
function Q$(e) {
  for (const t in e)
    Wa[t] = {
      ...Wa[t],
      ...e[t]
    };
}
const Ju = Cr({}), Uv = Cr({}), e2 = Symbol.for("motionComponentSymbol");
function t2({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && Q$(e);
  function a(s, l) {
    let c;
    const u = {
      ...ft(Vv),
      ...s,
      layoutId: r2(s)
    }, { isStatic: d } = u, f = J$(s), p = n(s, d);
    if (!d && Xs) {
      f.visualElement = X$(o, p, u, t);
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
      qs.Provider,
      { value: f },
      c && f.visualElement ? U.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, K$(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = At(a);
  return i[e2] = o, i;
}
function r2({ layoutId: e }) {
  const t = ft(Ju).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function n2(e) {
  function t(n, o = {}) {
    return t2(e(n, o));
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
const o2 = [
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
function Qu(e) {
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
      !!(o2.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const bs = {};
function a2(e) {
  Object.assign(bs, e);
}
const ni = [
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
], Gn = new Set(ni);
function Hv(e, { layout: t, layoutId: r }) {
  return Gn.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!bs[e] || e === "opacity");
}
const Yt = (e) => !!(e && e.getVelocity), i2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, s2 = ni.length;
function l2(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < s2; i++) {
    const s = ni[i];
    if (e[s] !== void 0) {
      const l = i2[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Yv = (e) => (t) => typeof t == "string" && t.startsWith(e), Gv = Yv("--"), Yc = Yv("var(--"), c2 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, u2 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, xn = (e, t, r) => Math.min(Math.max(r, e), t), qn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ya = {
  ...qn,
  transform: (e) => xn(0, 1, e)
}, Ai = {
  ...qn,
  default: 1
}, xa = (e) => Math.round(e * 1e5) / 1e5, Js = /(-)?([\d]*\.?[\d])+/g, qv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, d2 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function oi(e) {
  return typeof e == "string";
}
const ai = (e) => ({
  test: (t) => oi(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), fn = ai("deg"), Fr = ai("%"), pe = ai("px"), f2 = ai("vh"), p2 = ai("vw"), Dp = {
  ...Fr,
  parse: (e) => Fr.parse(e) / 100,
  transform: (e) => Fr.transform(e * 100)
}, Mp = {
  ...qn,
  transform: Math.round
}, Xv = {
  // Border props
  borderWidth: pe,
  borderTopWidth: pe,
  borderRightWidth: pe,
  borderBottomWidth: pe,
  borderLeftWidth: pe,
  borderRadius: pe,
  radius: pe,
  borderTopLeftRadius: pe,
  borderTopRightRadius: pe,
  borderBottomRightRadius: pe,
  borderBottomLeftRadius: pe,
  // Positioning props
  width: pe,
  maxWidth: pe,
  height: pe,
  maxHeight: pe,
  size: pe,
  top: pe,
  right: pe,
  bottom: pe,
  left: pe,
  // Spacing props
  padding: pe,
  paddingTop: pe,
  paddingRight: pe,
  paddingBottom: pe,
  paddingLeft: pe,
  margin: pe,
  marginTop: pe,
  marginRight: pe,
  marginBottom: pe,
  marginLeft: pe,
  // Transform props
  rotate: fn,
  rotateX: fn,
  rotateY: fn,
  rotateZ: fn,
  scale: Ai,
  scaleX: Ai,
  scaleY: Ai,
  scaleZ: Ai,
  skew: fn,
  skewX: fn,
  skewY: fn,
  distance: pe,
  translateX: pe,
  translateY: pe,
  translateZ: pe,
  x: pe,
  y: pe,
  z: pe,
  perspective: pe,
  transformPerspective: pe,
  opacity: ya,
  originX: Dp,
  originY: Dp,
  originZ: pe,
  // Misc
  zIndex: Mp,
  // SVG
  fillOpacity: ya,
  strokeOpacity: ya,
  numOctaves: Mp
};
function ed(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Gv(d)) {
      a[d] = f;
      continue;
    }
    const p = Xv[d], m = u2(f, p);
    if (Gn.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = l2(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const td = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Kv(e, t, r) {
  for (const n in t)
    !Yt(t[n]) && !Hv(n, r) && (e[n] = t[n]);
}
function h2({ transformTemplate: e }, t, r) {
  return gt(() => {
    const n = td();
    return ed(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function m2(e, t, r) {
  const n = e.style || {}, o = {};
  return Kv(o, n, e), Object.assign(o, h2(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function v2(e, t, r) {
  const n = {}, o = m2(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const g2 = /* @__PURE__ */ new Set([
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
function ys(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || g2.has(e);
}
let Zv = (e) => !ys(e);
function b2(e) {
  e && (Zv = (t) => t.startsWith("on") ? !ys(t) : e(t));
}
try {
  b2(require("@emotion/is-prop-valid").default);
} catch {
}
function y2(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Zv(o) || r === !0 && ys(o) || !t && !ys(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Ip(e, t, r) {
  return typeof e == "string" ? e : pe.transform(t + r * e);
}
function x2(e, t, r) {
  const n = Ip(t, e.x, e.width), o = Ip(r, e.y, e.height);
  return `${n} ${o}`;
}
const S2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, w2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function C2(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? S2 : w2;
  e[a.offset] = pe.transform(-n);
  const i = pe.transform(t), s = pe.transform(r);
  e[a.array] = `${i} ${s}`;
}
function rd(e, {
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
  if (ed(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = x2(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && C2(p, i, s, l, !1);
}
const Jv = () => ({
  ...td(),
  attrs: {}
}), nd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function _2(e, t, r, n) {
  const o = gt(() => {
    const a = Jv();
    return rd(a, t, { enableHardwareAcceleration: !1 }, nd(n), e.transformTemplate), {
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
function k2(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (Qu(r) ? _2 : v2)(n, a, i, r), u = {
      ...y2(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = gt(() => Yt(d) ? d.get() : d, [d]);
    return ir(r, {
      ...u,
      children: f
    });
  };
}
const od = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
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
    e.setAttribute(eg.has(o) ? o : od(o), t.attrs[o]);
}
function ad(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Yt(r[o]) || t.style && Yt(t.style[o]) || Hv(o, e)) && (n[o] = r[o]);
  return n;
}
function rg(e, t) {
  const r = ad(e, t);
  for (const n in e)
    if (Yt(e[n]) || Yt(t[n])) {
      const o = ni.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function id(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function ng(e) {
  const t = be(null);
  return t.current === null && (t.current = e()), t.current;
}
const xs = (e) => Array.isArray(e), E2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), P2 = (e) => xs(e) ? e[e.length - 1] || 0 : e;
function Qi(e) {
  const t = Yt(e) ? e.get() : e;
  return E2(t) ? t.toValue() : t;
}
function T2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: A2(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const og = (e) => (t, r) => {
  const n = ft(qs), o = ft(ri), a = () => T2(e, t, n, o);
  return r ? a() : ng(a);
};
function A2(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = Qi(a[f]);
  let { initial: i, animate: s } = e;
  const l = Zs(e), c = Wv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !Ks(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = id(e, p);
    if (!m)
      return;
    const { transitionEnd: h, transition: v, ...b } = m;
    for (const y in b) {
      let S = b[y];
      if (Array.isArray(S)) {
        const _ = u ? S.length - 1 : 0;
        S = S[_];
      }
      S !== null && (o[y] = S);
    }
    for (const y in h)
      o[y] = h[y];
  }), o;
}
const O2 = {
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
      rd(r, n, { enableHardwareAcceleration: !1 }, nd(t.tagName), e.transformTemplate), tg(t, r);
    }
  })
}, R2 = {
  useVisualState: og({
    scrapeMotionValuesFromProps: ad,
    createRenderState: td
  })
};
function $2(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...Qu(e) ? O2 : R2,
    preloadedFeatures: r,
    useRender: k2(t),
    createVisualElement: n,
    Component: e
  };
}
function Xr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const ag = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Qs(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const D2 = (e) => (t) => ag(t) && e(t, Qs(t));
function Zr(e, t, r, n) {
  return Xr(e, t, D2(r), n);
}
const M2 = (e, t) => (r) => t(e(r)), vn = (...e) => e.reduce(M2);
function ig(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Fp = ig("dragHorizontal"), Np = ig("dragVertical");
function sg(e) {
  let t = !1;
  if (e === "y")
    t = Np();
  else if (e === "x")
    t = Fp();
  else {
    const r = Fp(), n = Np();
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
class Cn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function I2(e) {
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
}, F2 = 40;
let Gc = !0, Ua = !1;
const el = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], So = el.reduce((e, t) => (e[t] = I2(() => Ua = !0), e), {}), N2 = (e) => So[e].process(it), cg = (e) => {
  Ua = !1, it.delta = Gc ? 1e3 / 60 : Math.max(Math.min(e - it.timestamp, F2), 1), it.timestamp = e, it.isProcessing = !0, el.forEach(N2), it.isProcessing = !1, Ua && (Gc = !1, requestAnimationFrame(cg));
}, j2 = () => {
  Ua = !0, Gc = !0, it.isProcessing || requestAnimationFrame(cg);
}, tt = el.reduce((e, t) => {
  const r = So[t];
  return e[t] = (n, o = !1, a = !1) => (Ua || j2(), r.schedule(n, o, a)), e;
}, {});
function nn(e) {
  el.forEach((t) => So[t].cancel(e));
}
function jp(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || lg())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && tt.update(() => s[n](a, i));
  };
  return Zr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class B2 extends Cn {
  mount() {
    this.unmount = vn(jp(this.node, !0), jp(this.node, !1));
  }
  unmount() {
  }
}
class z2 extends Cn {
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
    this.unmount = vn(Xr(this.node.current, "focus", () => this.onFocus()), Xr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const ug = (e, t) => t ? e === t ? !0 : ug(e, t.parentElement) : !1, bt = (e) => e;
function Gl(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Qs(r));
}
class V2 extends Cn {
  constructor() {
    super(...arguments), this.removeStartListeners = bt, this.removeEndListeners = bt, this.removeAccessibleListeners = bt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Zr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        tt.update(() => {
          ug(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Zr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = vn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Gl("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && tt.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Xr(this.node.current, "keyup", i), Gl("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Xr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Gl("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Xr(this.node.current, "blur", n);
      this.removeAccessibleListeners = vn(r, o);
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
    const t = this.node.getProps(), r = Zr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Xr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = vn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const qc = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), L2 = (e) => {
  const t = qc.get(e.target);
  t && t(e);
}, W2 = (e) => {
  e.forEach(L2);
};
function U2({ root: e, ...t }) {
  const r = e || document;
  ql.has(r) || ql.set(r, {});
  const n = ql.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(W2, { root: e, ...t })), n[o];
}
function H2(e, t, r) {
  const n = U2(t);
  return qc.set(e, r), n.observe(e), () => {
    qc.delete(e), n.unobserve(e);
  };
}
const Y2 = {
  some: 0,
  all: 1
};
class G2 extends Cn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : Y2[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return H2(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(q2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function q2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const X2 = {
  inView: {
    Feature: G2
  },
  tap: {
    Feature: V2
  },
  focus: {
    Feature: z2
  },
  hover: {
    Feature: B2
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
function K2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function Z2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function tl(e, t, r) {
  const n = e.getProps();
  return id(n, t, r !== void 0 ? r : n.custom, K2(e), Z2(e));
}
const J2 = "framerAppearId", Q2 = "data-" + od(J2);
let ii = bt, wr = bt;
process.env.NODE_ENV !== "production" && (ii = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, wr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const gn = (e) => e * 1e3, Jr = (e) => e / 1e3, eD = {
  current: !1
}, fg = (e) => Array.isArray(e) && typeof e[0] == "number";
function pg(e) {
  return !!(!e || typeof e == "string" && hg[e] || fg(e) || Array.isArray(e) && e.every(pg));
}
const ca = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, hg = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ca([0, 0.65, 0.55, 1]),
  circOut: ca([0.55, 0, 1, 0.45]),
  backIn: ca([0.31, 0.01, 0.66, -0.59]),
  backOut: ca([0.33, 1.53, 0.69, 0.99])
};
function mg(e) {
  if (e)
    return fg(e) ? ca(e) : Array.isArray(e) ? e.map(mg) : hg[e];
}
function tD(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
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
const Bp = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Xl = {}, vg = {};
for (const e in Bp)
  vg[e] = () => (Xl[e] === void 0 && (Xl[e] = Bp[e]()), Xl[e]);
function rD(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const gg = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, nD = 1e-7, oD = 12;
function aD(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = gg(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > nD && ++s < oD);
  return i;
}
function si(e, t, r, n) {
  if (e === t && r === n)
    return bt;
  const o = (a) => aD(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : gg(o(a), t, n);
}
const iD = si(0.42, 0, 1, 1), sD = si(0, 0, 0.58, 1), bg = si(0.42, 0, 0.58, 1), lD = (e) => Array.isArray(e) && typeof e[0] != "number", yg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xg = (e) => (t) => 1 - e(1 - t), Sg = (e) => 1 - Math.sin(Math.acos(e)), sd = xg(Sg), cD = yg(sd), wg = si(0.33, 1.53, 0.69, 0.99), ld = xg(wg), uD = yg(ld), dD = (e) => (e *= 2) < 1 ? 0.5 * ld(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), zp = {
  linear: bt,
  easeIn: iD,
  easeInOut: bg,
  easeOut: sD,
  circIn: Sg,
  circInOut: cD,
  circOut: sd,
  backIn: ld,
  backInOut: uD,
  backOut: wg,
  anticipate: dD
}, Vp = (e) => {
  if (Array.isArray(e)) {
    wr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return si(t, r, n, o);
  } else if (typeof e == "string")
    return wr(zp[e] !== void 0, `Invalid easing type '${e}'`), zp[e];
  return e;
}, cd = (e, t) => (r) => !!(oi(r) && d2.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Cg = (e, t, r) => (n) => {
  if (!oi(n))
    return n;
  const [o, a, i, s] = n.match(Js);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, fD = (e) => xn(0, 255, e), Kl = {
  ...qn,
  transform: (e) => Math.round(fD(e))
}, Nn = {
  test: cd("rgb", "red"),
  parse: Cg("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Kl.transform(e) + ", " + Kl.transform(t) + ", " + Kl.transform(r) + ", " + xa(ya.transform(n)) + ")"
};
function pD(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Xc = {
  test: cd("#"),
  parse: pD,
  transform: Nn.transform
}, uo = {
  test: cd("hsl", "hue"),
  parse: Cg("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Fr.transform(xa(t)) + ", " + Fr.transform(xa(r)) + ", " + xa(ya.transform(n)) + ")"
}, Rt = {
  test: (e) => Nn.test(e) || Xc.test(e) || uo.test(e),
  parse: (e) => Nn.test(e) ? Nn.parse(e) : uo.test(e) ? uo.parse(e) : Xc.parse(e),
  transform: (e) => oi(e) ? e : e.hasOwnProperty("red") ? Nn.transform(e) : uo.transform(e)
}, st = (e, t, r) => -r * e + r * t + e;
function Zl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function hD({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Zl(l, s, e + 1 / 3), a = Zl(l, s, e), i = Zl(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Jl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, mD = [Xc, Nn, uo], vD = (e) => mD.find((t) => t.test(e));
function Lp(e) {
  const t = vD(e);
  wr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === uo && (r = hD(r)), r;
}
const _g = (e, t) => {
  const r = Lp(e), n = Lp(t), o = { ...r };
  return (a) => (o.red = Jl(r.red, n.red, a), o.green = Jl(r.green, n.green, a), o.blue = Jl(r.blue, n.blue, a), o.alpha = st(r.alpha, n.alpha, a), Nn.transform(o));
};
function gD(e) {
  var t, r;
  return isNaN(e) && oi(e) && (((t = e.match(Js)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(qv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const kg = {
  regex: c2,
  countKey: "Vars",
  token: "${v}",
  parse: bt
}, Eg = {
  regex: qv,
  countKey: "Colors",
  token: "${c}",
  parse: Rt.parse
}, Pg = {
  regex: Js,
  countKey: "Numbers",
  token: "${n}",
  parse: qn.parse
};
function Ql(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function Ss(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Ql(r, kg), Ql(r, Eg), Ql(r, Pg), r;
}
function Tg(e) {
  return Ss(e).values;
}
function Ag(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Ss(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(kg.token, i[l]) : l < n + r ? s = s.replace(Eg.token, Rt.transform(i[l])) : s = s.replace(Pg.token, xa(i[l]));
    return s;
  };
}
const bD = (e) => typeof e == "number" ? 0 : e;
function yD(e) {
  const t = Tg(e);
  return Ag(e)(t.map(bD));
}
const Sn = {
  test: gD,
  parse: Tg,
  createTransformer: Ag,
  getAnimatableNone: yD
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
}, xD = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Rg(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, Dg = (e, t) => {
  const r = Sn.createTransformer(t), n = Ss(e), o = Ss(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? vn($g(n.values, o.values), r) : (ii(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Og(e, t));
}, Ha = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Wp = (e, t) => (r) => st(e, t, r);
function SD(e) {
  return typeof e == "number" ? Wp : typeof e == "string" ? Rt.test(e) ? _g : Dg : Array.isArray(e) ? $g : typeof e == "object" ? xD : Wp;
}
function wD(e, t, r) {
  const n = [], o = r || SD(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || bt : t;
      s = vn(l, s);
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
  const i = wD(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Ha(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(xn(e[0], e[a - 1], c)) : l;
}
function CD(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ha(0, t, n);
    e.push(st(r, 1, o));
  }
}
function _D(e) {
  const t = [0];
  return CD(t, e.length - 1), t;
}
function kD(e, t) {
  return e.map((r) => r * t);
}
function ED(e, t) {
  return e.map(() => t || bg).splice(0, e.length - 1);
}
function ws({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = lD(n) ? n.map(Vp) : Vp(n), a = {
    done: !1,
    value: t[0]
  }, i = kD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : _D(t),
    e
  ), s = Mg(i, t, {
    ease: Array.isArray(o) ? o : ED(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function Ig(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const PD = 5;
function Fg(e, t, r) {
  const n = Math.max(t - PD, 0);
  return Ig(r - e(n), t - n);
}
const ec = 1e-3, TD = 0.01, Up = 10, AD = 0.05, OD = 1;
function RD({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  ii(e <= gn(Up), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = xn(AD, OD, i), e = xn(TD, Up, Jr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = Kc(c, i), m = Math.exp(-d);
    return ec - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = Kc(Math.pow(c, 2), i);
    return (-o(c) + ec > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -ec + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = DD(o, a, s);
  if (e = gn(e), isNaN(l))
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
const $D = 12;
function DD(e, t, r) {
  let n = r;
  for (let o = 1; o < $D; o++)
    n = n - e(n) / t(n);
  return n;
}
function Kc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const MD = ["duration", "bounce"], ID = ["stiffness", "damping", "mass"];
function Hp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function FD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Hp(e, ID) && Hp(e, MD)) {
    const r = RD(e);
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
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = FD(n), p = u ? -Jr(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, v = Jr(Math.sqrt(s / c)), b = Math.abs(h) < 5;
  r || (r = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (m < 1) {
    const S = Kc(v, m);
    y = (_) => {
      const w = Math.exp(-m * v * _);
      return a - w * ((p + m * v * h) / S * Math.sin(S * _) + h * Math.cos(S * _));
    };
  } else if (m === 1)
    y = (S) => a - Math.exp(-v * S) * (h + (p + v * h) * S);
  else {
    const S = v * Math.sqrt(m * m - 1);
    y = (_) => {
      const w = Math.exp(-m * v * _), M = Math.min(S * _, 300);
      return a - w * ((p + m * v * h) * Math.sinh(M) + S * h * Math.cosh(M)) / S;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (S) => {
      const _ = y(S);
      if (f)
        i.done = S >= d;
      else {
        let w = p;
        S !== 0 && (m < 1 ? w = Fg(y, S, _) : w = 0);
        const M = Math.abs(w) <= r, P = Math.abs(a - _) <= t;
        i.done = M && P;
      }
      return i.value = i.done ? a : _, i;
    }
  };
}
function Yp({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (I) => s !== void 0 && I < s || l !== void 0 && I > l, m = (I) => s === void 0 ? l : l === void 0 || Math.abs(s - I) < Math.abs(l - I) ? s : l;
  let h = r * t;
  const v = d + h, b = i === void 0 ? v : i(v);
  b !== v && (h = b - d);
  const y = (I) => -h * Math.exp(-I / n), S = (I) => b + y(I), _ = (I) => {
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
      return !M && w === void 0 && (z = !0, _(I), P(I)), w !== void 0 && I > w ? M.next(I - w) : (!z && _(I), f);
    }
  };
}
const ND = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => tt.update(t, !0),
    stop: () => nn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => it.isProcessing ? it.timestamp : performance.now()
  };
}, Gp = 2e4;
function qp(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Gp; )
    t += r, n = e.next(t);
  return t >= Gp ? 1 / 0 : t;
}
const jD = {
  decay: Yp,
  inertia: Yp,
  tween: ws,
  keyframes: ws,
  spring: Ng
};
function Cs({ autoplay: e = !0, delay: t = 0, driver: r = ND, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, v;
  const b = () => {
    h && h(), v = new Promise((N) => {
      h = N;
    });
  };
  b();
  let y;
  const S = jD[o] || ws;
  let _;
  S !== ws && typeof n[0] != "number" && (_ = Mg([0, 100], n, {
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
  w.calculatedDuration === null && a && (w.calculatedDuration = qp(w));
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
    let A = Q, B = w;
    if (a) {
      const Z = Q / ne;
      let Y = Math.floor(Z), ae = Z % 1;
      !ae && Z >= 1 && (ae = 1), ae === 1 && Y--, Y = Math.min(Y, a + 1);
      const R = !!(Y % 2);
      R && (s === "reverse" ? (ae = 1 - ae, i && (ae -= i / ne)) : s === "mirror" && (B = M));
      let Se = xn(0, 1, ae);
      Q > J && (Se = s === "reverse" && R ? 1 : 0), A = Se * ne;
    }
    const C = T ? { done: !1, value: n[0] } : B.next(A);
    _ && (C.value = _(C.value));
    let { done: H } = C;
    !T && X !== null && (H = p >= 0 ? Q >= J : Q <= 0);
    const O = I === null && (P === "finished" || P === "running" && H);
    return d && d(C.value), O && ce(), C;
  }, oe = () => {
    y && y.stop(), y = void 0;
  }, D = () => {
    P = "idle", oe(), b(), z = j = null;
  }, ce = () => {
    P = "finished", u && u(), oe(), b();
  }, fe = () => {
    if (m)
      return;
    y || (y = r(ee));
    const N = y.now();
    l && l(), I !== null ? z = N - I : (!z || P === "finished") && (z = N), j = z, I = null, P = "running", y.start();
  };
  e && fe();
  const F = {
    then(N, V) {
      return v.then(N, V);
    },
    get time() {
      return Jr(Q);
    },
    set time(N) {
      N = gn(N), Q = N, I !== null || !y || p === 0 ? I = N : z = y.now() - N / p;
    },
    get duration() {
      const N = w.calculatedDuration === null ? qp(w) : w.calculatedDuration;
      return Jr(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !y || (p = N, F.time = Jr(Q));
    },
    get state() {
      return P;
    },
    play: fe,
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
const BD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Oi = 10, zD = 2e4, VD = (e, t) => t.type === "spring" || e === "backgroundColor" || !pg(t.ease);
function LD(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(vg.waapi() && BD.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (VD(t, o)) {
    const b = Cs({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: u[0] };
    const S = [];
    let _ = 0;
    for (; !y.done && _ < zD; )
      y = b.sample(_), S.push(y.value), _ += Oi;
    p = void 0, u = S, d = _ - Oi, f = "linear";
  }
  const m = tD(e.owner.current, t, u, {
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
    e.set(rD(u, o)), n && n(), v();
  }, {
    then(b, y) {
      return l.then(b, y);
    },
    get time() {
      return Jr(m.currentTime || 0);
    },
    set time(b) {
      m.currentTime = gn(b);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(b) {
      m.playbackRate = b;
    },
    get duration() {
      return Jr(d);
    },
    play: () => {
      i || (m.play(), nn(h));
    },
    pause: () => m.pause(),
    stop: () => {
      if (i = !0, m.playState === "idle")
        return;
      const { currentTime: b } = m;
      if (b) {
        const y = Cs({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(b - Oi).value, y.sample(b).value, Oi);
      }
      v();
    },
    complete: () => m.finish(),
    cancel: v
  };
}
function WD({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
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
  return t ? Cs({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const UD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, HD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), YD = {
  type: "keyframes",
  duration: 0.8
}, GD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, qD = (e, { keyframes: t }) => t.length > 2 ? YD : Gn.has(e) ? e.startsWith("scale") ? HD(t[1]) : UD : GD, Zc = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Sn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), XD = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function KD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Js) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = XD.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const ZD = /([a-z-]*)\(.*?\)/g, Jc = {
  ...Sn,
  getAnimatableNone: (e) => {
    const t = e.match(ZD);
    return t ? t.map(KD).join(" ") : e;
  }
}, JD = {
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
  filter: Jc,
  WebkitFilter: Jc
}, ud = (e) => JD[e];
function jg(e, t) {
  let r = ud(e);
  return r !== Jc && (r = Sn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Bg = (e) => /^0[^.\s]+$/.test(e);
function QD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Bg(e);
}
function eM(e, t, r, n) {
  const o = Zc(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), QD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = jg(t, s);
    }
  return a;
}
function tM({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function zg(e, t) {
  return e[t] || e.default || e;
}
const dd = (e, t, r, n = {}) => (o) => {
  const a = zg(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - gn(i);
  const l = eM(t, e, r, a), c = l[0], u = l[l.length - 1], d = Zc(e, c), f = Zc(e, u);
  ii(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
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
  if (tM(a) || (p = {
    ...p,
    ...qD(e, p)
  }), p.duration && (p.duration = gn(p.duration)), p.repeatDelay && (p.repeatDelay = gn(p.repeatDelay)), !d || !f || eD.current || a.type === !1)
    return WD(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = LD(t, e, p);
    if (m)
      return m;
  }
  return Cs(p);
};
function _s(e) {
  return !!(Yt(e) && e.add);
}
const rM = (e) => /^\-?\d*\.?\d+$/.test(e);
function fd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pd(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class hd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return fd(this.subscriptions, t), () => pd(this.subscriptions, t);
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
const Xp = /* @__PURE__ */ new Set();
function md(e, t, r) {
  e || Xp.has(t) || (console.warn(t), r && console.warn(r), Xp.add(t));
}
const nM = (e) => !isNaN(parseFloat(e));
class oM {
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
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = nM(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && md(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new hd());
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
function Ro(e, t) {
  return new oM(e, t);
}
const Vg = (e) => (t) => t.test(e), aM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Lg = [qn, pe, Fr, fn, p2, f2, aM], Qo = (e) => Lg.find(Vg(e)), iM = [...Lg, Rt, Sn], sM = (e) => iM.find(Vg(e));
function lM(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ro(r));
}
function cM(e, t) {
  const r = tl(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = P2(a[i]);
    lM(e, i, s);
  }
}
function uM(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (rM(u) || Bg(u)) ? u = parseFloat(u) : !sM(u) && Sn.test(c) && (u = jg(l, c)), e.addValue(l, Ro(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function dM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function fM(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = dM(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function pM({ protectedKeys: e, needsAnimating: t }, r) {
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
    if (!f || p === void 0 || u && pM(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[Q2];
      v && (m.elapsed = window.HandoffAppearAnimations(v, d, f, tt));
    }
    f.start(dd(d, f, p, e.shouldReduceMotion && Gn.has(d) ? { type: !1 } : m));
    const h = f.animation;
    _s(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && cM(e, i);
  }), c;
}
function Qc(e, t, r = {}) {
  const n = tl(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(Wg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return hM(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function hM(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(mM).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Qc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function mM(e, t) {
  return e.sortNodePosition(t);
}
function vM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Qc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Qc(e, t, r);
  else {
    const o = typeof t == "function" ? tl(e, t, r.custom) : t;
    n = Promise.all(Wg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const gM = [...Ku].reverse(), bM = Ku.length;
function yM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => vM(e, r, n)));
}
function xM(e) {
  let t = yM(e);
  const r = wM();
  let n = !0;
  const o = (l, c) => {
    const u = tl(e, c);
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
    for (let b = 0; b < bM; b++) {
      const y = gM[b], S = r[y], _ = u[y] !== void 0 ? u[y] : d[y], w = La(_), M = y === c ? S.isActive : null;
      M === !1 && (h = b);
      let P = _ === d[y] && _ !== u[y] && w;
      if (P && n && e.manuallyAnimateOnMount && (P = !1), S.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !S.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
      !_ && !S.prevProp || // Or if the prop doesn't define an animation
      Ks(_) || typeof _ == "boolean")
        continue;
      const I = SM(S.prevProp, _);
      let z = I || // If we're making this variant active, we want to always make it active
      y === c && S.isActive && !P && w || // If we removed a higher-priority variant (i is in reverse order)
      b > h && w;
      const j = Array.isArray(_) ? _ : [_];
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
        m.hasOwnProperty(ee) || (oe !== D ? xs(oe) && xs(D) ? !dg(oe, D) || I ? Q(ee) : S.protectedKeys[ee] = !0 : oe !== void 0 ? Q(ee) : p.add(ee) : oe !== void 0 && p.has(ee) ? Q(ee) : S.protectedKeys[ee] = !0);
      }
      S.prevProp = _, S.prevResolvedValues = X, S.isActive && (m = { ...m, ...X }), n && e.blockInitialAnimation && (z = !1), z && !P && f.push(...j.map((ee) => ({
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
function SM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dg(t, e) : !1;
}
function An(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function wM() {
  return {
    animate: An(!0),
    whileInView: An(),
    whileHover: An(),
    whileTap: An(),
    whileDrag: An(),
    whileFocus: An(),
    exit: An()
  };
}
class CM extends Cn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = xM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ks(t) && (this.unmount = t.subscribe(this.node));
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
let _M = 0;
class kM extends Cn {
  constructor() {
    super(...arguments), this.id = _M++;
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
const EM = {
  animation: {
    Feature: CM
  },
  exit: {
    Feature: kM
  }
}, Kp = (e, t) => Math.abs(e - t);
function PM(e, t) {
  const r = Kp(e.x, t.x), n = Kp(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Ug {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = rc(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = PM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = it;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = tc(u, this.transformPagePoint), tt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = rc(c.type === "pointercancel" ? this.lastMoveEventInfo : tc(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !ag(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Qs(t), a = tc(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = it;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, rc(a, this.history)), this.removeListeners = vn(Zr(window, "pointermove", this.handlePointerMove), Zr(window, "pointerup", this.handlePointerUp), Zr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), nn(this.updatePoint);
  }
}
function tc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function rc({ point: e }, t) {
  return {
    point: e,
    delta: Zp(e, Hg(t)),
    offset: Zp(e, TM(t)),
    velocity: AM(t, 0.1)
  };
}
function TM(e) {
  return e[0];
}
function Hg(e) {
  return e[e.length - 1];
}
function AM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = Hg(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > gn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = Jr(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Qt(e) {
  return e.max - e.min;
}
function eu(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Jp(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = st(t.min, t.max, e.origin), e.scale = Qt(r) / Qt(t), (eu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = st(r.min, r.max, e.origin) - e.originPoint, (eu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Sa(e, t, r, n) {
  Jp(e.x, t.x, r.x, n ? n.originX : void 0), Jp(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Qp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Qt(t);
}
function OM(e, t, r) {
  Qp(e.x, t.x, r.x), Qp(e.y, t.y, r.y);
}
function eh(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Qt(t);
}
function wa(e, t, r) {
  eh(e.x, t.x, r.x), eh(e.y, t.y, r.y);
}
function RM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? st(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? st(r, e, n.max) : Math.min(e, r)), e;
}
function th(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function $M(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: th(e.x, r, o),
    y: th(e.y, t, n)
  };
}
function rh(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function DM(e, t) {
  return {
    x: rh(e.x, t.x),
    y: rh(e.y, t.y)
  };
}
function MM(e, t) {
  let r = 0.5;
  const n = Qt(e), o = Qt(t);
  return o > n ? r = Ha(t.min, t.max - n, e.min) : n > o && (r = Ha(e.min, e.max - o, t.min)), xn(0, 1, r);
}
function IM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const tu = 0.35;
function FM(e = tu) {
  return e === !1 ? e = 0 : e === !0 && (e = tu), {
    x: nh(e, "left", "right"),
    y: nh(e, "top", "bottom")
  };
}
function nh(e, t, r) {
  return {
    min: oh(e, t),
    max: oh(e, r)
  };
}
function oh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ah = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), fo = () => ({
  x: ah(),
  y: ah()
}), ih = () => ({ min: 0, max: 0 }), mt = () => ({
  x: ih(),
  y: ih()
});
function Or(e) {
  return [e("x"), e("y")];
}
function Yg({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function NM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jM(e, t) {
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
function nc(e) {
  return e === void 0 || e === 1;
}
function ru({ scale: e, scaleX: t, scaleY: r }) {
  return !nc(e) || !nc(t) || !nc(r);
}
function Rn(e) {
  return ru(e) || Gg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Gg(e) {
  return sh(e.x) || sh(e.y);
}
function sh(e) {
  return e && e !== "0%";
}
function ks(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function lh(e, t, r, n, o) {
  return o !== void 0 && (e = ks(e, o, n)), ks(e, r, n) + t;
}
function nu(e, t = 0, r = 1, n, o) {
  e.min = lh(e.min, t, r, n, o), e.max = lh(e.max, t, r, n, o);
}
function qg(e, { x: t, y: r }) {
  nu(e.x, t.translate, t.scale, t.originPoint), nu(e.y, r.translate, r.scale, r.originPoint);
}
function BM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && po(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, qg(e, i)), n && Rn(a.latestValues) && po(e, a.latestValues));
  }
  t.x = ch(t.x), t.y = ch(t.y);
}
function ch(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function pn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function uh(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = st(e.min, e.max, a);
  nu(e, t[r], t[n], i, t.scale);
}
const zM = ["x", "scaleX", "originX"], VM = ["y", "scaleY", "originY"];
function po(e, t) {
  uh(e.x, t, zM), uh(e.y, t, VM);
}
function Xg(e, t) {
  return Yg(jM(e.getBoundingClientRect(), t));
}
function LM(e, t, r) {
  const n = Xg(e, r), { scroll: o } = t;
  return o && (pn(n.x, o.offset.x), pn(n.y, o.offset.y)), n;
}
const WM = /* @__PURE__ */ new WeakMap();
class UM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = mt(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Qs(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = sg(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Or((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if (Fr.test(h)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const b = v.layout.layoutBox[m];
            b && (h = Qt(b) * (parseFloat(h) / 100));
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
        this.currentDirection = HM(m), this.currentDirection !== null && f && f(this.currentDirection);
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
    if (!n || !Ri(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = RM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && co(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = $M(n.layoutBox, t) : this.constraints = !1, this.elastic = FM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Or((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = IM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !co(t))
      return !1;
    const n = t.current;
    wr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = LM(n, o.root, this.visualElement.getTransformPagePoint());
    let i = DM(o.layout.layoutBox, a);
    if (r) {
      const s = r(NM(i));
      this.hasMutatedConstraints = !!s, s && (i = Yg(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Or((u) => {
      if (!Ri(u, r, this.currentDirection))
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
    return n.start(dd(t, n, 0, r));
  }
  stopAnimation() {
    Or((t) => this.getAxisMotionValue(t).stop());
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
    Or((r) => {
      const { drag: n } = this.getProps();
      if (!Ri(r, n, this.currentDirection))
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
    if (!co(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Or((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = MM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Or((i) => {
      if (!Ri(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(st(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    WM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Zr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      co(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Xr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Or((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = tu, dragMomentum: s = !0 } = t;
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
function Ri(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function HM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class YM extends Cn {
  constructor(t) {
    super(t), this.removeGroupControls = bt, this.removeListeners = bt, this.controls = new UM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || bt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const dh = (e) => (t, r) => {
  e && tt.update(() => e(t, r));
};
class GM extends Cn {
  constructor() {
    super(...arguments), this.removePointerDownListener = bt;
  }
  onPointerDown(t) {
    this.session = new Ug(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: dh(t),
      onStart: dh(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && tt.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Zr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Kg() {
  const e = ft(ri);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = _r();
  return Fe(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function WV() {
  return qM(ft(ri));
}
function qM(e) {
  return e === null ? !0 : e.isPresent;
}
const es = {
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
function fh(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ea = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (pe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = fh(e, t.target.x), n = fh(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, XM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Sn.parse(e);
    if (o.length > 5)
      return n;
    const a = Sn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = st(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class KM extends It.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    a2(ZM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), es.hasEverUpdated = !0;
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
  const [t, r] = Kg(), n = ft(Ju);
  return It.createElement(KM, { ...e, layoutGroup: n, switchLayoutGroup: ft(Uv), isPresent: t, safeToRemove: r });
}
const ZM = {
  borderRadius: {
    ...ea,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ea,
  borderTopRightRadius: ea,
  borderBottomLeftRadius: ea,
  borderBottomRightRadius: ea,
  boxShadow: XM
}, Jg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], JM = Jg.length, ph = (e) => typeof e == "string" ? parseFloat(e) : e, hh = (e) => typeof e == "number" || pe.test(e);
function QM(e, t, r, n, o, a) {
  o ? (e.opacity = st(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    eI(n)
  ), e.opacityExit = st(t.opacity !== void 0 ? t.opacity : 1, 0, tI(n))) : a && (e.opacity = st(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < JM; i++) {
    const s = `border${Jg[i]}Radius`;
    let l = mh(t, s), c = mh(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || hh(l) === hh(c) ? (e[s] = Math.max(st(ph(l), ph(c), n), 0), (Fr.test(c) || Fr.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = st(t.rotate || 0, r.rotate || 0, n));
}
function mh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const eI = Qg(0, 0.5, sd), tI = Qg(0.5, 0.95, bt);
function Qg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ha(e, t, n));
}
function vh(e, t) {
  e.min = t.min, e.max = t.max;
}
function nr(e, t) {
  vh(e.x, t.x), vh(e.y, t.y);
}
function gh(e, t, r, n, o) {
  return e -= t, e = ks(e, 1 / r, n), o !== void 0 && (e = ks(e, 1 / o, n)), e;
}
function rI(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Fr.test(t) && (t = parseFloat(t), t = st(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = st(a.min, a.max, n);
  e === a && (s -= t), e.min = gh(e.min, t, r, s, o), e.max = gh(e.max, t, r, s, o);
}
function bh(e, t, [r, n, o], a, i) {
  rI(e, t[r], t[n], t[o], t.scale, a, i);
}
const nI = ["x", "scaleX", "originX"], oI = ["y", "scaleY", "originY"];
function yh(e, t, r, n) {
  bh(e.x, t, nI, r ? r.x : void 0, n ? n.x : void 0), bh(e.y, t, oI, r ? r.y : void 0, n ? n.y : void 0);
}
function xh(e) {
  return e.translate === 0 && e.scale === 1;
}
function eb(e) {
  return xh(e.x) && xh(e.y);
}
function ou(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Sh(e) {
  return Qt(e.x) / Qt(e.y);
}
class aI {
  constructor() {
    this.members = [];
  }
  add(t) {
    fd(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (pd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function wh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const iI = (e, t) => e.depth - t.depth;
class sI {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    fd(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    pd(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(iI), this.isDirty = !1, this.children.forEach(t);
  }
}
function lI(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (nn(n), e(a - t));
  };
  return tt.read(n, !0), () => nn(n);
}
function cI(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function uI(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function dI(e, t, r) {
  const n = Yt(e) ? e : Ro(e);
  return n.start(dd("", n, t, r)), n.animation;
}
const Ch = ["", "X", "Y", "Z"], _h = 1e3;
let fI = 0;
const $n = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function tb({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = fI++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        $n.totalNodes = $n.resolvedTargetDeltas = $n.recalculatedProjection = 0, this.nodes.forEach(mI), this.nodes.forEach(xI), this.nodes.forEach(SI), this.nodes.forEach(vI), cI($n);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new sI());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new hd()), this.eventHandlers.get(i).add(s);
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
      this.isSVG = uI(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = lI(f, 250), es.hasAnimatedSinceResize && (es.hasAnimatedSinceResize = !1, this.nodes.forEach(Eh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || EI, { onLayoutAnimationStart: v, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !ou(this.targetLayout, m) || p, S = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || S || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, S);
          const _ = {
            ...zg(h, "layout"),
            onPlay: v,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          f || Eh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, nn(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wI), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kh);
        return;
      }
      this.isUpdating || this.nodes.forEach(bI), this.isUpdating = !1, this.nodes.forEach(yI), this.nodes.forEach(pI), this.nodes.forEach(hI), this.clearAllSnapshots();
      const s = performance.now();
      it.delta = xn(0, 1e3 / 60, s - it.timestamp), it.timestamp = s, it.isProcessing = !0, So.update.process(it), So.preRender.process(it), So.render.process(it), it.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(gI), this.sharedNodes.forEach(CI);
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
      i && (s || Rn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), PI(l), {
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
      return l && (pn(s.x, l.offset.x), pn(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = mt();
      nr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            nr(s, i);
            const { scroll: f } = this.root;
            f && (pn(s.x, -f.offset.x), pn(s.y, -f.offset.y));
          }
          pn(s.x, u.offset.x), pn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = mt();
      nr(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && po(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Rn(u.latestValues) && po(l, u.latestValues);
      }
      return Rn(this.latestValues) && po(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = mt();
      nr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Rn(c.latestValues))
          continue;
        ru(c.latestValues) && c.updateSnapshot();
        const u = mt(), d = c.measurePageBox();
        nr(u, d), yh(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Rn(this.latestValues) && yh(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), wa(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), nr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = mt(), this.targetWithTransforms = mt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), OM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nr(this.target, this.layout.layoutBox), qg(this.target, this.targetDelta)) : nr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = mt(), this.relativeTargetOrigin = mt(), wa(this.relativeTargetOrigin, this.target, p.target), nr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          $n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ru(this.parent.latestValues) || Gg(this.parent.latestValues)))
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
      nr(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      BM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = fo(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = fo(), this.projectionDeltaWithTransform = fo());
      const h = this.projectionTransform;
      Sa(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = wh(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), $n.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = fo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = mt(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, v = this.getStack(), b = !v || v.members.length <= 1, y = !!(h && !b && this.options.crossfade === !0 && !this.path.some(kI));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (_) => {
        const w = _ / 1e3;
        Ph(d.x, i.x, w), Ph(d.y, i.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (wa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _I(this.relativeTarget, this.relativeTargetOrigin, f, w), S && ou(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = mt()), nr(S, this.relativeTarget)), h && (this.animationValues = u, QM(u, c, this.latestValues, w, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (nn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tt.update(() => {
        es.hasAnimatedSinceResize = !0, this.currentAnimation = dI(0, _h, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_h), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && rb(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || mt();
          const d = Qt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Qt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        nr(s, l), po(s, u), Sa(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new aI()), this.sharedNodes.get(i).add(s);
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
      for (let u = 0; u < Ch.length; u++) {
        const d = "rotate" + Ch[u];
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Qi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Qi(i.pointerEvents) || ""), this.hasProjected && !Rn(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = wh(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in bs) {
        if (f[h] === void 0)
          continue;
        const { correct: v, applyTo: b } = bs[h], y = c.transform === "none" ? f[h] : v(f[h], d);
        if (b) {
          const S = b.length;
          for (let _ = 0; _ < S; _++)
            c[b[_]] = y;
        } else
          c[h] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Qi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(kh), this.root.sharedNodes.clear();
    }
  };
}
function pI(e) {
  e.updateLayout();
}
function hI(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? Or((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Qt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : rb(a, r.layoutBox, n) && Or((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Qt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = fo();
    Sa(s, n, r.layoutBox);
    const l = fo();
    i ? Sa(l, e.applyTransform(o, !0), r.measuredBox) : Sa(l, n, r.layoutBox);
    const c = !eb(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = mt();
          wa(m, r.layoutBox, f.layoutBox);
          const h = mt();
          wa(h, n, p.layoutBox), ou(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function mI(e) {
  $n.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vI(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gI(e) {
  e.clearSnapshot();
}
function kh(e) {
  e.clearMeasurements();
}
function bI(e) {
  e.isLayoutDirty = !1;
}
function yI(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Eh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function xI(e) {
  e.resolveTargetDelta();
}
function SI(e) {
  e.calcProjection();
}
function wI(e) {
  e.resetRotation();
}
function CI(e) {
  e.removeLeadSnapshot();
}
function Ph(e, t, r) {
  e.translate = st(t.translate, 0, r), e.scale = st(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Th(e, t, r, n) {
  e.min = st(t.min, r.min, n), e.max = st(t.max, r.max, n);
}
function _I(e, t, r, n) {
  Th(e.x, t.x, r.x, n), Th(e.y, t.y, r.y, n);
}
function kI(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const EI = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Ah(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function PI(e) {
  Ah(e.x), Ah(e.y);
}
function rb(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !eu(Sh(t), Sh(r), 0.2);
}
const TI = tb({
  attachResizeListener: (e, t) => Xr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), oc = {
  current: void 0
}, nb = tb({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!oc.current) {
      const e = new TI({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), oc.current = e;
    }
    return oc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), AI = {
  pan: {
    Feature: GM
  },
  drag: {
    Feature: YM,
    ProjectionNode: nb,
    MeasureLayout: Zg
  }
}, OI = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function RI(e) {
  const t = OI.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const $I = 4;
function au(e, t, r = 1) {
  wr(r <= $I, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = RI(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : Yc(o) ? au(o, t, r + 1) : o;
}
function DI(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!Yc(a))
      return;
    const i = au(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!Yc(a))
      continue;
    const i = au(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const MI = /* @__PURE__ */ new Set([
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
]), ob = (e) => MI.has(e), II = (e) => Object.keys(e).some(ob), $i = (e) => e === qn || e === pe, Oh = (e, t) => parseFloat(e.split(", ")[t]), Rh = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Oh(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? Oh(a[1], e) : 0;
  }
}, FI = /* @__PURE__ */ new Set(["x", "y", "z"]), NI = ni.filter((e) => !FI.has(e));
function jI(e) {
  const t = [];
  return NI.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const $h = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Rh(4, 13),
  y: Rh(5, 14)
}, BI = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = $h[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = $h[c](l, a);
  }), e;
}, zI = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(ob);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Qo(u);
    const f = t[l];
    let p;
    if (xs(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Qo(u);
      for (let v = h; v < m && f[v] !== null; v++)
        p ? wr(Qo(f[v]) === p, "All keyframes must be of the same type") : (p = Qo(f[v]), wr(p === d || $i(d) && $i(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Qo(f);
    if (d !== p)
      if ($i(d) && $i(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === pe && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = jI(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = BI(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Xs && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function VI(e, t, r, n) {
  return II(t) ? zI(e, t, r, n) : { target: t, transitionEnd: n };
}
const LI = (e, t, r, n) => {
  const o = DI(e, t, n);
  return t = o.target, n = o.transitionEnd, VI(e, t, r, n);
}, iu = { current: null }, ab = { current: !1 };
function WI() {
  if (ab.current = !0, !!Xs)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => iu.current = e.matches;
      e.addListener(t), t();
    } else
      iu.current = !1;
}
function UI(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Yt(a))
      e.addValue(o, a), _s(n) && n.add(o), process.env.NODE_ENV === "development" && md(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Yt(i))
      e.addValue(o, Ro(a, { owner: e })), _s(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ro(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Dh = /* @__PURE__ */ new WeakMap(), ib = Object.keys(Wa), HI = ib.length, Mh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], YI = Zu.length;
class GI {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => tt.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Zs(r), this.isVariantNode = Wv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Yt(f) && (f.set(s[d], !1), _s(c) && c.add(d));
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
    this.current = t, Dh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), ab.current || WI(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : iu.current, process.env.NODE_ENV !== "production" && md(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Dh.delete(this.current), this.projection && this.projection.unmount(), nn(this.notifyUpdate), nn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Gn.has(t), o = r.on("change", (i) => {
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
      r.ignoreStrict ? ii(!1, l) : wr(!1, l);
    }
    for (let l = 0; l < HI; l++) {
      const c = ib[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = Wa[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && co(d),
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
    for (let n = 0; n < Mh.length; n++) {
      const o = Mh[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = UI(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < YI; n++) {
      const o = Zu[n], a = this.props[o];
      (La(a) || a === !1) && (r[o] = a);
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
    return n === void 0 && r !== void 0 && (n = Ro(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = id(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Yt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new hd()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class sb extends GI {
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
    let i = fM(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      uM(this, n, i);
      const s = LI(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function qI(e) {
  return window.getComputedStyle(e);
}
class XI extends sb {
  readValueFromInstance(t, r) {
    if (Gn.has(r)) {
      const n = ud(r);
      return n && n.default || 0;
    } else {
      const n = qI(t), o = (Gv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return Xg(t, r);
  }
  build(t, r, n, o) {
    ed(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return ad(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Yt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Qv(t, r, n, o);
  }
}
class KI extends sb {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Gn.has(r)) {
      const n = ud(r);
      return n && n.default || 0;
    }
    return r = eg.has(r) ? r : od(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return mt();
  }
  scrapeMotionValuesFromProps(t, r) {
    return rg(t, r);
  }
  build(t, r, n, o) {
    rd(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    tg(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = nd(t.tagName), super.mount(t);
  }
}
const ZI = (e, t) => Qu(e) ? new KI(t, { enableHardwareAcceleration: !1 }) : new XI(t, { enableHardwareAcceleration: !0 }), JI = {
  layout: {
    ProjectionNode: nb,
    MeasureLayout: Zg
  }
}, QI = {
  ...EM,
  ...X2,
  ...AI,
  ...JI
}, _n = /* @__PURE__ */ n2((e, t) => $2(e, t, QI, ZI));
function lb() {
  const e = be(!1);
  return gs(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function eF() {
  const e = lb(), [t, r] = Ye(0), n = G(() => {
    e.current && r(t + 1);
  }, [t]);
  return [G(() => tt.postRender(n), [n]), t];
}
class tF extends U.Component {
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
function rF({ children: e, isPresent: t }) {
  const r = _r(), n = be(null), o = be({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return gm(() => {
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
  }, [t]), U.createElement(tF, { isPresent: t, childRef: n, sizeRef: o }, U.cloneElement(e, { ref: n }));
}
const ac = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = ng(nF), l = _r(), c = gt(
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
  }, [r]), i === "popLayout" && (e = U.createElement(rF, { isPresent: r }, e)), U.createElement(ri.Provider, { value: c }, e);
};
function nF() {
  return /* @__PURE__ */ new Map();
}
function oF(e) {
  return Fe(() => () => e(), []);
}
const ro = (e) => e.key || "";
function aF(e, t) {
  e.forEach((r) => {
    const n = ro(r);
    t.set(n, r);
  });
}
function iF(e) {
  const t = [];
  return Ds.forEach(e, (r) => {
    wu(r) && t.push(r);
  }), t;
}
const Vo = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  wr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = ft(Ju).forceRender || eF()[0], l = lb(), c = iF(e);
  let u = c;
  const d = be(/* @__PURE__ */ new Map()).current, f = be(u), p = be(/* @__PURE__ */ new Map()).current, m = be(!0);
  if (gs(() => {
    m.current = !1, aF(c, p), f.current = u;
  }), oF(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return U.createElement(U.Fragment, null, u.map((y) => U.createElement(ac, { key: ro(y), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, y)));
  u = [...u];
  const h = f.current.map(ro), v = c.map(ro), b = h.length;
  for (let y = 0; y < b; y++) {
    const S = h[y];
    v.indexOf(S) === -1 && !d.has(S) && d.set(S, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((y, S) => {
    if (v.indexOf(S) !== -1)
      return;
    const _ = p.get(S);
    if (!_)
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
      M = U.createElement(ac, { key: ro(_), isPresent: !1, onExitComplete: P, custom: t, presenceAffectsLayout: a, mode: i }, _), d.set(S, M);
    }
    u.splice(w, 0, M);
  }), u = u.map((y) => {
    const S = y.key;
    return d.has(S) ? y : U.createElement(ac, { key: ro(y), isPresent: !0, presenceAffectsLayout: a, mode: i }, y);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), U.createElement(U.Fragment, null, d.size ? u : u.map((y) => Ka(y)));
};
var Ih = {
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
}, vd = _e((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = Xe("chakra-icon", s), d = jo("Icon", e), f = {
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
  }, m = n ?? Ih.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ L.jsx(ge.svg, { as: r, ...p, ...c });
  const h = i ?? Ih.path;
  return /* @__PURE__ */ L.jsx(ge.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
vd.displayName = "Icon";
var sF = l_({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), lF = _e((e, t) => {
  const r = jo("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = Br(e), c = Xe("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${sF} ${a} linear infinite`,
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
lF.displayName = "Spinner";
function cF(e) {
  return /* @__PURE__ */ L.jsx(vd, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ L.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var cb = _e(
  function(t, r) {
    const n = jo("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Br(t), l = {
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
        children: o || /* @__PURE__ */ L.jsx(cF, { width: "1em", height: "1em" })
      }
    );
  }
);
cb.displayName = "CloseButton";
var uF = Object.defineProperty, dF = (e, t, r) => t in e ? uF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ut = (e, t, r) => (dF(e, typeof t != "symbol" ? t + "" : t, r), r);
function Fh(e) {
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
var fF = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function Nh(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function jh(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var su = typeof window < "u" ? $s : Fe, Es = (e) => e, pF = class {
  constructor() {
    ut(this, "descendants", /* @__PURE__ */ new Map()), ut(this, "register", (e) => {
      if (e != null)
        return fF(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), ut(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = Fh(Array.from(this.descendants.keys()));
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
      const r = Nh(e, this.count(), t);
      return this.item(r);
    }), ut(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Nh(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), ut(this, "prev", (e, t = !0) => {
      const r = jh(e, this.count() - 1, t);
      return this.item(r);
    }), ut(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = jh(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), ut(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = Fh(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function hF(e, t) {
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
      hF(r, t);
    });
  };
}
function HV(...e) {
  return gt(() => St(...e), e);
}
function mF() {
  const e = be(new pF());
  return su(() => () => e.current.destroy()), e.current;
}
var [vF, ub] = Nt({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function gF(e) {
  const t = ub(), [r, n] = Ye(-1), o = be(null);
  su(() => () => {
    o.current && t.unregister(o.current);
  }, []), su(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = Es(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: St(a, o)
  };
}
function bF() {
  return [
    Es(vF),
    () => Es(ub()),
    () => mF(),
    (o) => gF(o)
  ];
}
function gd(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = Jt(n), i = Jt(o), [s, l] = Ye(r), c = t !== void 0, u = c ? t : s, d = Jt(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var lu = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, ta = {
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
function cu(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return ta.slideRight;
    case "left":
      return ta.slideLeft;
    case "bottom":
      return ta.slideDown;
    case "top":
      return ta.slideUp;
    default:
      return ta.slideRight;
  }
}
var Vn = {
  enter: {
    duration: 0.2,
    ease: lu.easeOut
  },
  exit: {
    duration: 0.1,
    ease: lu.easeIn
  }
}, Qr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, yF = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Qr.enter(Vn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : Qr.exit(Vn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, db = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: yF
}, xF = At(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ L.jsx(Vo, { custom: f, children: d && /* @__PURE__ */ L.jsx(
    _n.div,
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
xF.displayName = "Fade";
var SF = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Qr.exit(Vn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : Qr.enter(Vn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, fb = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: SF
}, wF = At(
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
    return /* @__PURE__ */ L.jsx(Vo, { custom: m, children: f && /* @__PURE__ */ L.jsx(
      _n.div,
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
wF.displayName = "ScaleFade";
var CF = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : Qr.exit(Vn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : Qr.enter(Vn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : Qr.exit(Vn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, ua = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: CF
}, _F = At(
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
    return /* @__PURE__ */ L.jsx(Vo, { custom: h, children: p && /* @__PURE__ */ L.jsx(
      _n.div,
      {
        ref: r,
        className: Xe("chakra-offset-slide", i),
        custom: h,
        ...ua,
        animate: m,
        ...f
      }
    ) });
  }
);
_F.displayName = "SlideFade";
var Bh = {
  exit: {
    duration: 0.15,
    ease: lu.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, kF = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = cu({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Qr.exit(Bh.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = cu({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Qr.enter(Bh.enter, n),
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
  } = t, p = cu({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, v = i || a ? "enter" : "exit", b = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ L.jsx(Vo, { custom: b, children: h && /* @__PURE__ */ L.jsx(
    _n.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: Xe("chakra-slide", s),
      animate: v,
      exit: "exit",
      custom: b,
      variants: kF,
      style: m,
      ...d
    }
  ) });
});
pb.displayName = "Slide";
function hb(e) {
  return Ds.toArray(e).filter(
    (t) => wu(t)
  );
}
var [EF, mb] = Nt({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [PF, Lo] = Nt({
  strict: !1,
  name: "FormControlContext"
});
function TF(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = _r(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [f, p] = Ye(!1), [m, h] = Ye(!1), [v, b] = Ye(!1), y = G(
    (P = {}, I = null) => ({
      id: d,
      ...P,
      /**
       * Notify the field context when the help text is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: St(I, (z) => {
        z && h(!0);
      })
    }),
    [d]
  ), S = G(
    (P = {}, I = null) => ({
      ...P,
      ref: I,
      "data-focus": Ar(v),
      "data-disabled": Ar(o),
      "data-invalid": Ar(n),
      "data-readonly": Ar(a),
      id: P.id !== void 0 ? P.id : c,
      htmlFor: P.htmlFor !== void 0 ? P.htmlFor : l
    }),
    [l, o, v, n, a, c]
  ), _ = G(
    (P = {}, I = null) => ({
      id: u,
      ...P,
      /**
       * Notify the field context when the error message is rendered on screen,
       * so we can apply the correct `aria-describedby` to the field (e.g. input, textarea).
       */
      ref: St(I, (z) => {
        z && p(!0);
      }),
      "aria-live": "polite"
    }),
    [u]
  ), w = G(
    (P = {}, I = null) => ({
      ...P,
      ...i,
      ref: I,
      role: "group",
      "data-focus": Ar(v),
      "data-disabled": Ar(o),
      "data-invalid": Ar(n),
      "data-readonly": Ar(a)
    }),
    [i, o, v, n, a]
  ), M = G(
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
    getErrorMessageProps: _,
    getRootProps: w,
    getLabelProps: S,
    getRequiredIndicatorProps: M
  };
}
var AF = _e(
  function(t, r) {
    const n = Bo("Form", t), o = Br(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = TF(o), l = Xe("chakra-form-control", t.className);
    return /* @__PURE__ */ L.jsx(PF, { value: s, children: /* @__PURE__ */ L.jsx(EF, { value: n, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
AF.displayName = "FormControl";
var OF = _e(
  function(t, r) {
    const n = Lo(), o = mb(), a = Xe("chakra-form__helper-text", t.className);
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
OF.displayName = "FormHelperText";
var [RF, $F] = Nt({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), DF = _e(
  (e, t) => {
    const r = Bo("FormError", e), n = Br(e), o = Lo();
    return o != null && o.isInvalid ? /* @__PURE__ */ L.jsx(RF, { value: r, children: /* @__PURE__ */ L.jsx(
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
DF.displayName = "FormErrorMessage";
var MF = _e((e, t) => {
  const r = $F(), n = Lo();
  if (!(n != null && n.isInvalid))
    return null;
  const o = Xe("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ L.jsx(
    vd,
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
MF.displayName = "FormErrorIcon";
var IF = _e(function(t, r) {
  var n;
  const o = jo("FormLabel", t), a = Br(t), {
    className: i,
    children: s,
    requiredIndicator: l = /* @__PURE__ */ L.jsx(vb, {}),
    optionalIndicator: c = null,
    ...u
  } = a, d = Lo(), f = (n = d == null ? void 0 : d.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
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
IF.displayName = "FormLabel";
var vb = _e(
  function(t, r) {
    const n = Lo(), o = mb();
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
function YV(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...a } = FF(e);
  return {
    ...a,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": Pl(r),
    "aria-required": Pl(o),
    "aria-readonly": Pl(n)
  };
}
function FF(e) {
  var t, r, n;
  const o = Lo(), {
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
function NF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function jF(e, t) {
  let r = NF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function BF(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function Ps(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function gb(e, t, r) {
  return (r - t) * e + t;
}
function uu(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = BF(r);
  return jF(n, o);
}
function Ca(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function _a(e, t, r, n) {
  const o = Jt(r);
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
function zF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var du = { exports: {} }, ic, zh;
function bd() {
  if (zh)
    return ic;
  zh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ic = e, ic;
}
var sc, Vh;
function bb() {
  return Vh || (Vh = 1, sc = Function.call.bind(Object.prototype.hasOwnProperty)), sc;
}
var lc, Lh;
function VF() {
  if (Lh)
    return lc;
  Lh = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = bd(), r = {}, n = bb();
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
  }, lc = o, lc;
}
var cc, Wh;
function LF() {
  if (Wh)
    return cc;
  Wh = 1;
  var e = Tu, t = Pm, r = bd(), n = bb(), o = VF(), a = function() {
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
  return cc = function(s, l) {
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
      element: _(),
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
      function T(B, C, H, O, Z, Y, ae) {
        if (O = O || f, Y = Y || H, ae !== r) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = O + ":" + H;
            !N[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), N[Se] = !0, V++);
          }
        }
        return C[H] == null ? B ? C[H] === null ? new h("The " + Z + " `" + Y + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new h("The " + Z + " `" + Y + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : F(C, H, O, Z, Y);
      }
      var A = T.bind(null, !1);
      return A.isRequired = T.bind(null, !0), A;
    }
    function b(F) {
      function N(V, T, A, B, C, H) {
        var O = V[T], Z = oe(O);
        if (Z !== F) {
          var Y = D(O);
          return new h(
            "Invalid " + B + " `" + C + "` of type " + ("`" + Y + "` supplied to `" + A + "`, expected ") + ("`" + F + "`."),
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
      function N(V, T, A, B, C) {
        if (typeof F != "function")
          return new h("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var H = V[T];
        if (!Array.isArray(H)) {
          var O = oe(H);
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an array."));
        }
        for (var Z = 0; Z < H.length; Z++) {
          var Y = F(H, Z, A, B, C + "[" + Z + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return v(N);
    }
    function _() {
      function F(N, V, T, A, B) {
        var C = N[V];
        if (!s(C)) {
          var H = oe(C);
          return new h("Invalid " + A + " `" + B + "` of type " + ("`" + H + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(F);
    }
    function w() {
      function F(N, V, T, A, B) {
        var C = N[V];
        if (!e.isValidElementType(C)) {
          var H = oe(C);
          return new h("Invalid " + A + " `" + B + "` of type " + ("`" + H + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(F);
    }
    function M(F) {
      function N(V, T, A, B, C) {
        if (!(V[T] instanceof F)) {
          var H = F.name || f, O = fe(V[T]);
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected ") + ("instance of `" + H + "`."));
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
      function N(V, T, A, B, C) {
        for (var H = V[T], O = 0; O < F.length; O++)
          if (m(H, F[O]))
            return null;
        var Z = JSON.stringify(F, function(ae, R) {
          var Se = D(R);
          return Se === "symbol" ? String(R) : R;
        });
        return new h("Invalid " + B + " `" + C + "` of value `" + String(H) + "` " + ("supplied to `" + A + "`, expected one of " + Z + "."));
      }
      return v(N);
    }
    function I(F) {
      function N(V, T, A, B, C) {
        if (typeof F != "function")
          return new h("Property `" + C + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var H = V[T], O = oe(H);
        if (O !== "object")
          return new h("Invalid " + B + " `" + C + "` of type " + ("`" + O + "` supplied to `" + A + "`, expected an object."));
        for (var Z in H)
          if (n(H, Z)) {
            var Y = F(H, Z, A, B, C + "." + Z, r);
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
      function T(A, B, C, H, O) {
        for (var Z = [], Y = 0; Y < F.length; Y++) {
          var ae = F[Y], R = ae(A, B, C, H, O, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var Se = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + H + " `" + O + "` supplied to " + ("`" + C + "`" + Se + "."));
      }
      return v(T);
    }
    function j() {
      function F(N, V, T, A, B) {
        return Q(N[V]) ? null : new h("Invalid " + A + " `" + B + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return v(F);
    }
    function X(F, N, V, T, A) {
      return new h(
        (F || "React class") + ": " + N + " type `" + V + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function ne(F) {
      function N(V, T, A, B, C) {
        var H = V[T], O = oe(H);
        if (O !== "object")
          return new h("Invalid " + B + " `" + C + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var Z in F) {
          var Y = F[Z];
          if (typeof Y != "function")
            return X(A, B, C, Z, D(Y));
          var ae = Y(H, Z, A, B, C + "." + Z, r);
          if (ae)
            return ae;
        }
        return null;
      }
      return v(N);
    }
    function J(F) {
      function N(V, T, A, B, C) {
        var H = V[T], O = oe(H);
        if (O !== "object")
          return new h("Invalid " + B + " `" + C + "` of type `" + O + "` " + ("supplied to `" + A + "`, expected `object`."));
        var Z = t({}, V[T], F);
        for (var Y in Z) {
          var ae = F[Y];
          if (n(F, Y) && typeof ae != "function")
            return X(A, B, C, Y, D(ae));
          if (!ae)
            return new h(
              "Invalid " + B + " `" + C + "` key `" + Y + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(V[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var R = ae(H, Y, A, B, C + "." + Y, r);
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
                var A = T.value;
                if (A && !Q(A[1]))
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
    function fe(F) {
      return !F.constructor || !F.constructor.name ? f : F.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, cc;
}
var uc, Uh;
function WF() {
  if (Uh)
    return uc;
  Uh = 1;
  var e = bd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, uc = function() {
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
  }, uc;
}
if (process.env.NODE_ENV !== "production") {
  var UF = Tu, HF = !0;
  du.exports = LF()(UF.isElement, HF);
} else
  du.exports = WF()();
var qe = du.exports;
const yb = /* @__PURE__ */ Ms(qe);
var fu = "data-focus-lock", xb = "data-focus-lock-disabled", YF = "data-no-focus-lock", GF = "data-autofocus-inside", qF = "data-no-autofocus";
function XF(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function KF(e, t) {
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
  return KF(t || null, function(r) {
    return e.forEach(function(n) {
      return XF(n, r);
    });
  });
}
var dc = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && yb.node;
var Dr = function() {
  return Dr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Dr.apply(this, arguments);
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
function ZF(e, t, r) {
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
function yd(e, t) {
  return t === void 0 && (t = Cb), _b(e, t);
}
function kb(e) {
  e === void 0 && (e = {});
  var t = _b(null);
  return t.options = Dr({ async: !0, ssr: !1 }, e), t;
}
var Eb = function(e) {
  var t = e.sideCar, r = wb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return U.createElement(n, Dr({}, r));
};
Eb.isSideCarExport = !0;
function JF(e, t) {
  return e.useMedium(t), Eb;
}
var Pb = yd({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), Tb = yd(), QF = yd(), e5 = kb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), t5 = [], xd = /* @__PURE__ */ U.forwardRef(function(t, r) {
  var n, o = U.useState(), a = o[0], i = o[1], s = U.useRef(), l = U.useRef(!1), c = U.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, v = t.allowTextSelection, b = t.group, y = t.className, S = t.whiteList, _ = t.hasPositiveIndices, w = t.shards, M = w === void 0 ? t5 : w, P = t.as, I = P === void 0 ? "div" : P, z = t.lockProps, j = z === void 0 ? {} : z, X = t.sideCar, ne = t.returnFocus, J = t.focusOptions, Q = t.onActivation, ee = t.onDeactivation, oe = U.useState({}), D = oe[0], ce = U.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && Q && Q(s.current), l.current = !0;
  }, [Q]), fe = U.useCallback(function() {
    l.current = !1, ee && ee(s.current);
  }, [ee]);
  Fe(function() {
    d || (c.current = null);
  }, []);
  var F = U.useCallback(function(O) {
    var Z = c.current;
    if (Z && Z.focus) {
      var Y = typeof ne == "function" ? ne(Z) : ne;
      if (Y) {
        var ae = typeof Y == "object" ? Y : void 0;
        c.current = null, O ? Promise.resolve().then(function() {
          return Z.focus(ae);
        }) : Z.focus(ae);
      }
    }
  }, [ne]), N = U.useCallback(function(O) {
    l.current && Pb.useMedium(O);
  }, []), V = Tb.useMedium, T = U.useCallback(function(O) {
    s.current !== O && (s.current = O, i(O));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof v < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), U.useEffect(function() {
    !s.current && typeof I != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var A = Wn((n = {}, n[xb] = d && "disabled", n[fu] = b, n), j), B = f !== !0, C = B && f !== "tail", H = Sb([r, T]);
  return /* @__PURE__ */ U.createElement(U.Fragment, null, B && [
    // nearest focus guard
    /* @__PURE__ */ U.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: dc
    }),
    // first tabbed element guard
    _ ? /* @__PURE__ */ U.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: dc
    }) : null
  ], !d && /* @__PURE__ */ U.createElement(X, {
    id: D,
    sideCar: e5,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: h,
    whiteList: S,
    shards: M,
    onActivation: ce,
    onDeactivation: fe,
    returnFocus: F,
    focusOptions: J
  }), /* @__PURE__ */ U.createElement(I, Wn({
    ref: H
  }, A, {
    className: y,
    onBlur: V,
    onFocus: N
  }), u), C && /* @__PURE__ */ U.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: dc
  }));
});
xd.propTypes = process.env.NODE_ENV !== "production" ? {
  children: qe.node,
  disabled: qe.bool,
  returnFocus: qe.oneOfType([qe.bool, qe.object, qe.func]),
  focusOptions: qe.object,
  noFocusGuards: qe.bool,
  hasPositiveIndices: qe.bool,
  allowTextSelection: qe.bool,
  autoFocus: qe.bool,
  persistentFocus: qe.bool,
  crossFrame: qe.bool,
  group: qe.string,
  className: qe.string,
  whiteList: qe.func,
  shards: qe.arrayOf(qe.any),
  as: qe.oneOfType([qe.string, qe.func, qe.object]),
  lockProps: qe.object,
  onActivation: qe.func,
  onDeactivation: qe.func,
  sideCar: qe.any.isRequired
} : {};
xd.defaultProps = {
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
const Ab = xd;
function r5(e, t) {
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
        return /* @__PURE__ */ It.createElement(o, this.props);
      }, u;
    }(S0);
    return Cu(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var zr = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, Ts = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ob = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, n5 = function(e) {
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
}, o5 = function(e, t) {
  return !e || $b(e) || !n5(e) && t(Rb(e));
}, Db = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = o5(t, Db.bind(void 0, e));
  return e.set(t, n), n;
}, a5 = function(e, t) {
  return e && !$b(e) ? l5(e) ? t(Rb(e)) : !1 : !0;
}, Mb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = a5(t, Mb.bind(void 0, e));
  return e.set(t, n), n;
}, Ib = function(e) {
  return e.dataset;
}, i5 = function(e) {
  return e.tagName === "BUTTON";
}, Fb = function(e) {
  return e.tagName === "INPUT";
}, Nb = function(e) {
  return Fb(e) && e.type === "radio";
}, s5 = function(e) {
  return !((Fb(e) || i5(e)) && (e.type === "hidden" || e.disabled));
}, l5 = function(e) {
  var t = e.getAttribute(qF);
  return ![!0, "true", ""].includes(t);
}, Sd = function(e) {
  var t;
  return !!(e && (!((t = Ib(e)) === null || t === void 0) && t.focusGuard));
}, As = function(e) {
  return !Sd(e);
}, c5 = function(e) {
  return !!e;
}, u5 = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, jb = function(e, t, r) {
  return zr(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(u5);
}, d5 = [
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
], wd = d5.join(","), f5 = "".concat(wd, ", [data-focus-guard]"), Bb = function(e, t) {
  return zr((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? f5 : wd) ? [n] : [], Bb(n));
  }, []);
}, p5 = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? rl([e.contentDocument.body], t) : [e];
}, rl = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = Bb(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return p5(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? zr(n.parentNode.querySelectorAll(wd)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, h5 = function(e) {
  var t = e.querySelectorAll("[".concat(GF, "]"));
  return zr(t).map(function(r) {
    return rl([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Cd = function(e, t) {
  return zr(e).filter(function(r) {
    return Db(t, r);
  }).filter(function(r) {
    return s5(r);
  });
}, Hh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), zr(e).filter(function(r) {
    return Mb(t, r);
  });
}, pu = function(e, t, r) {
  return jb(Cd(rl(e, r), t), !0, r);
}, Yh = function(e, t) {
  return jb(Cd(rl(e), t), !1);
}, m5 = function(e, t) {
  return Cd(h5(e), t);
}, wo = function(e, t) {
  return e.shadowRoot ? wo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : zr(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? wo(o, t) : !1;
    }
    return wo(r, t);
  });
}, v5 = function(e) {
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
}, _d = function(e) {
  var t = Ts(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(fu);
    return r.push.apply(r, o ? v5(zr(zb(n).querySelectorAll("[".concat(fu, '="').concat(o, '"]:not([').concat(xb, '="disabled"])')))) : [n]), r;
  }, []);
}, g5 = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ya = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ya(t.shadowRoot) : t instanceof HTMLIFrameElement && g5(function() {
      return t.contentWindow.document;
    }) ? Ya(t.contentWindow.document) : t;
  }
}, b5 = function(e, t) {
  return e === t;
}, y5 = function(e, t) {
  return !!zr(e.querySelectorAll("iframe")).some(function(r) {
    return b5(r, t);
  });
}, Vb = function(e, t) {
  return t === void 0 && (t = Ya(Ob(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : _d(e).some(function(r) {
    return wo(r, t) || y5(r, t);
  });
}, x5 = function(e) {
  e === void 0 && (e = document);
  var t = Ya(e);
  return t ? zr(e.querySelectorAll("[".concat(YF, "]"))).some(function(r) {
    return wo(r, t);
  }) : !1;
}, S5 = function(e, t) {
  return t.filter(Nb).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, kd = function(e, t) {
  return Nb(e) && e.name ? S5(e, t) : e;
}, w5 = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(kd(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Gh = function(e) {
  return e[0] && e.length > 1 ? kd(e[0], e) : e[0];
}, qh = function(e, t) {
  return e.length > 1 ? e.indexOf(kd(e[t], e)) : t;
}, Lb = "NEW_FOCUS", C5 = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = Sd(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = w5(t), h = r !== void 0 ? m.indexOf(r) : -1, v = h - (n ? m.indexOf(n) : l), b = qh(e, 0), y = qh(e, o - 1);
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
}, _5 = function(e) {
  return function(t) {
    var r, n = (r = Ib(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, k5 = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Hh(n.filter(_5(r)));
  return o && o.length ? Gh(o) : Gh(Hh(t));
}, hu = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && hu(e.parentNode.host || e.parentNode, t), t;
}, fc = function(e, t) {
  for (var r = hu(e), n = hu(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Wb = function(e, t, r) {
  var n = Ts(e), o = Ts(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = fc(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = fc(a, l);
      c && (!i || wo(c, i) ? i = c : i = fc(c, i));
    });
  }), i;
}, E5 = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(m5(n, t));
  }, []);
}, P5 = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(c5);
}, T5 = function(e, t) {
  var r = Ya(Ts(e).length > 0 ? document : Ob(e).ownerDocument), n = _d(e).filter(As), o = Wb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Yh(n, a), s = pu(n, a).filter(function(p) {
    var m = p.node;
    return As(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Yh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = P5(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = C5(u, l, r, t);
    if (d === Lb) {
      var f = k5(i, u, E5(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, A5 = function(e) {
  var t = _d(e).filter(As), r = Wb(e, e, t), n = /* @__PURE__ */ new Map(), o = pu([r], n, !0), a = pu(t, n).filter(function(i) {
    var s = i.node;
    return As(s);
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
      guard: Sd(s)
    };
  });
}, O5 = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, pc = 0, hc = !1, Ub = function(e, t, r) {
  r === void 0 && (r = {});
  var n = T5(e, t);
  if (!hc && n) {
    if (pc > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), hc = !0, setTimeout(function() {
        hc = !1;
      }, 1);
      return;
    }
    pc++, O5(n.node, r.focusOptions), pc--;
  }
};
function Hb(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var R5 = function() {
  return document && document.activeElement === document.body;
}, $5 = function() {
  return R5() || x5();
}, Co = null, ho = null, _o = null, Ga = !1, D5 = function() {
  return !0;
}, M5 = function(t) {
  return (Co.whiteList || D5)(t);
}, I5 = function(t, r) {
  _o = {
    observerNode: t,
    portaledElement: r
  };
}, F5 = function(t) {
  return _o && _o.portaledElement === t;
};
function Xh(e, t, r, n) {
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
var N5 = function(t) {
  return t && "current" in t ? t.current : t;
}, j5 = function(t) {
  return t ? !!Ga : Ga === "meanwhile";
}, B5 = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, z5 = function(t, r) {
  return r.some(function(n) {
    return B5(t, n, n);
  });
}, Os = function() {
  var t = !1;
  if (Co) {
    var r = Co, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || _o && _o.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(N5).filter(Boolean));
      if ((!u || M5(u)) && (o || j5(s) || !$5() || !ho && a) && (c && !// active element is "inside" working area
      (Vb(d) || // check for shadow-dom contained elements
      u && z5(u, d) || F5(u)) && (document && !ho && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = Ub(d, ho, {
        focusOptions: l
      }), _o = {})), Ga = !1, ho = document && document.activeElement), document) {
        var f = document && document.activeElement, p = A5(d), m = p.map(function(h) {
          var v = h.node;
          return v;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var v = h.guard, b = h.node;
          return v && b.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var v = h.node;
          return v.removeAttribute("tabIndex");
        }), Xh(m, p.length, 1, p), Xh(m, -1, -1, p));
      }
    }
  }
  return t;
}, Yb = function(t) {
  Os() && t && (t.stopPropagation(), t.preventDefault());
}, Ed = function() {
  return Hb(Os);
}, V5 = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || I5(n, r);
}, L5 = function() {
  return null;
};
process.env.NODE_ENV !== "production" && yb.node.isRequired;
var Gb = function() {
  Ga = "just", setTimeout(function() {
    Ga = "meanwhile";
  }, 0);
}, W5 = function() {
  document.addEventListener("focusin", Yb), document.addEventListener("focusout", Ed), window.addEventListener("blur", Gb);
}, U5 = function() {
  document.removeEventListener("focusin", Yb), document.removeEventListener("focusout", Ed), window.removeEventListener("blur", Gb);
};
function H5(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function Y5(e) {
  var t = e.slice(-1)[0];
  t && !Co && W5();
  var r = Co, n = r && t && t.id === r.id;
  Co = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (ho = null, (!n || r.observed !== t.observed) && t.onActivation(), Os(), Hb(Os)) : (U5(), ho = null);
}
Pb.assignSyncMedium(V5);
Tb.assignMedium(Ed);
QF.assignMedium(function(e) {
  return e({
    moveFocusInside: Ub,
    focusInside: Vb
  });
});
const G5 = r5(H5, Y5)(L5);
var qb = /* @__PURE__ */ U.forwardRef(function(t, r) {
  return /* @__PURE__ */ U.createElement(Ab, Wn({
    sideCar: G5,
    ref: r
  }, t));
}), Xb = Ab.propTypes || {};
Xb.sideCar;
var q5 = zF(Xb, ["sideCar"]);
qb.propTypes = process.env.NODE_ENV !== "production" ? q5 : {};
const Kh = qb;
function Kb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Pd(e) {
  var t;
  if (!Kb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function X5(e) {
  var t, r;
  return (r = (t = Zb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Zb(e) {
  return Kb(e) ? e.ownerDocument : document;
}
function K5(e) {
  return Zb(e).activeElement;
}
function Z5(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function J5(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function Jb(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : Pd(e) && Z5(e) ? e : Jb(J5(e));
}
var Qb = (e) => e.hasAttribute("tabindex"), Q5 = (e) => Qb(e) && e.tabIndex === -1;
function eN(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function ey(e) {
  return e.parentElement && ey(e.parentElement) ? !0 : e.hidden;
}
function tN(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function ty(e) {
  if (!Pd(e) || ey(e) || eN(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : tN(e) ? !0 : Qb(e);
}
function rN(e) {
  return e ? Pd(e) && ty(e) && !Q5(e) : !1;
}
var nN = [
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
], oN = nN.join(), aN = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function ry(e) {
  const t = Array.from(
    e.querySelectorAll(oN)
  );
  return t.unshift(e), t.filter((r) => ty(r) && aN(r));
}
var Zh, iN = (Zh = Kh.default) != null ? Zh : Kh, ny = (e) => {
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
  } = e, u = G(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && ry(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = G(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ L.jsx(
    iN,
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
function sN(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : Lt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function lN(e, t = oy) {
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
function cN(e) {
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
    "&": sN(
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
    () => cN({ spacing: i, direction: p }),
    [i, p]
  ), h = !!c, v = !d && !h, b = gt(() => {
    const S = hb(l);
    return v ? S : S.map((_, w) => {
      const M = typeof _.key < "u" ? _.key : w, P = w + 1 === S.length, z = d ? /* @__PURE__ */ L.jsx(ay, { children: _ }, M) : _;
      if (!h)
        return z;
      const j = Ka(
        c,
        {
          __css: m
        }
      ), X = P ? null : j;
      return /* @__PURE__ */ L.jsxs(Su, { children: [
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
var uN = _e((e, t) => /* @__PURE__ */ L.jsx(iy, { align: "center", ...e, direction: "row", ref: t }));
uN.displayName = "HStack";
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
var dN = _e(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ L.jsx(ly, { size: n, ref: r, borderRadius: "9999px", ...o });
});
dN.displayName = "Circle";
var fN = _e(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: c,
    ...u
  } = jo("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...m
  } = Br(t), h = {
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
fN.displayName = "Divider";
var pN = _e(function(t, r) {
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
pN.displayName = "Flex";
function hN(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t, { getWindow: o } = G$(), a = Array.isArray(e) ? e : [e];
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
function mN(e, t, r = oy) {
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
function vN(e) {
  var t, r;
  const n = Lt(e) ? e : { fallback: e ?? "base" }, a = sn().__breakpoints.details.map(
    ({ minMaxQuery: c, breakpoint: u }) => ({
      breakpoint: u,
      query: c.replace("@media screen and ", "")
    })
  ), i = a.map((c) => c.breakpoint === n.fallback), l = hN(
    a.map((c) => c.query),
    { fallback: i, ssr: n.ssr }
  ).findIndex((c) => c == !0);
  return (r = (t = a[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback;
}
function GV(e, t) {
  var r;
  const n = Lt(t) ? t : { fallback: t ?? "base" }, o = vN(n), a = sn();
  if (!o)
    return;
  const i = Array.from(((r = a.__breakpoints) == null ? void 0 : r.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(lN(e, i)).map(
      ([l, c]) => [l, c]
    )
  ) : e;
  return mN(s, o, i);
}
function gN(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function bN(e = {}) {
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
      if (gN(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
function yN(e, t, r, n) {
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
function xN() {
  const e = be(/* @__PURE__ */ new Map()), t = e.current, r = G((o, a, i, s) => {
    e.current.set(i, { type: a, el: o, options: s }), o.addEventListener(a, i, s);
  }, []), n = G(
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
function mc(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function SN(e = {}) {
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
  } = e, [h, v] = Ye(!0), [b, y] = Ye(!1), S = xN(), _ = (D) => {
    D && D.tagName !== "BUTTON" && v(!1);
  }, w = h ? d : d || 0, M = r && !n, P = G(
    (D) => {
      if (r) {
        D.stopPropagation(), D.preventDefault();
        return;
      }
      D.currentTarget.focus(), l == null || l(D);
    },
    [r, l]
  ), I = G(
    (D) => {
      b && mc(D) && (D.preventDefault(), D.stopPropagation(), y(!1), S.remove(document, "keyup", I, !1));
    },
    [b, S]
  ), z = G(
    (D) => {
      if (c == null || c(D), r || D.defaultPrevented || D.metaKey || !mc(D.nativeEvent) || h)
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
  ), j = G(
    (D) => {
      if (u == null || u(D), r || D.defaultPrevented || D.metaKey || !mc(D.nativeEvent) || h)
        return;
      a && D.key === " " && (D.preventDefault(), y(!1), D.currentTarget.click());
    },
    [a, h, r, u]
  ), X = G(
    (D) => {
      D.button === 0 && (y(!1), S.remove(document, "mouseup", X, !1));
    },
    [S]
  ), ne = G(
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
  ), J = G(
    (D) => {
      D.button === 0 && (h || y(!1), s == null || s(D));
    },
    [s, h]
  ), Q = G(
    (D) => {
      if (r) {
        D.preventDefault();
        return;
      }
      f == null || f(D);
    },
    [r, f]
  ), ee = G(
    (D) => {
      b && (D.preventDefault(), y(!1)), p == null || p(D);
    },
    [b, p]
  ), oe = St(t, _);
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
    "data-active": Ar(b),
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
function wN(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = K5(t);
  return !r || t.contains(r) ? !1 : !!rN(r);
}
function CN(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  zo(() => {
    if (!a || wN(e))
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
var _N = {
  preventScroll: !0,
  shouldFocus: !1
};
function qV(e, t = _N) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = kN(e) ? e.current : e, s = o && a, l = be(s), c = be(a);
  Fa(() => {
    !c.current && a && (l.current = s), c.current = a;
  }, [a, s]);
  const u = G(() => {
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
  zo(() => {
    u();
  }, [u]), _a(i, "transitionend", u);
}
function kN(e) {
  return "current" in e;
}
var Jn = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), Et = {
  arrowShadowColor: Jn("--popper-arrow-shadow-color"),
  arrowSize: Jn("--popper-arrow-size", "8px"),
  arrowSizeHalf: Jn("--popper-arrow-size-half"),
  arrowBg: Jn("--popper-arrow-bg"),
  transformOrigin: Jn("--popper-transform-origin"),
  arrowOffset: Jn("--popper-arrow-offset")
};
function EN(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var PN = {
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
}, TN = (e) => PN[e], Jh = {
  scroll: !0,
  resize: !0
};
function AN(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Jh, ...e }
  } : t = {
    enabled: e,
    options: Jh
  }, t;
}
var ON = {
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
}, RN = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Qh(e);
  },
  effect: ({ state: e }) => () => {
    Qh(e);
  }
}, Qh = (e) => {
  e.elements.popper.style.setProperty(
    Et.transformOrigin.var,
    TN(e.placement)
  );
}, $N = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    DN(e);
  }
}, DN = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = MN(e.placement);
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
}, MN = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: Et.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: Et.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: Et.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: Et.arrowOffset.varRef };
}, IN = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    em(e);
  },
  effect: ({ state: e }) => () => {
    em(e);
  }
}, em = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = EN(e.placement);
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
}, FN = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, NN = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function jN(e, t = "ltr") {
  var r, n;
  const o = ((r = FN[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = NN[e]) != null ? n : o;
}
var Wt = "top", cr = "bottom", ur = "right", Ut = "left", Td = "auto", li = [Wt, cr, ur, Ut], $o = "start", qa = "end", BN = "clippingParents", cy = "viewport", ra = "popper", zN = "reference", tm = /* @__PURE__ */ li.reduce(function(e, t) {
  return e.concat([t + "-" + $o, t + "-" + qa]);
}, []), uy = /* @__PURE__ */ [].concat(li, [Td]).reduce(function(e, t) {
  return e.concat([t, t + "-" + $o, t + "-" + qa]);
}, []), VN = "beforeRead", LN = "read", WN = "afterRead", UN = "beforeMain", HN = "main", YN = "afterMain", GN = "beforeWrite", qN = "write", XN = "afterWrite", KN = [VN, LN, WN, UN, HN, YN, GN, qN, XN];
function jr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function er(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Un(e) {
  var t = er(e).Element;
  return e instanceof t || e instanceof Element;
}
function lr(e) {
  var t = er(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ad(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = er(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ZN(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !lr(a) || !jr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function JN(e) {
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
      !lr(o) || !jr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const QN = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ZN,
  effect: JN,
  requires: ["computeStyles"]
};
function Nr(e) {
  return e.split("-")[0];
}
var Ln = Math.max, Rs = Math.min, Do = Math.round;
function mu() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dy() {
  return !/^((?!chrome|android).)*safari/i.test(mu());
}
function Mo(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && lr(e) && (o = e.offsetWidth > 0 && Do(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Do(n.height) / e.offsetHeight || 1);
  var i = Un(e) ? er(e) : window, s = i.visualViewport, l = !dy() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function Od(e) {
  var t = Mo(e), r = e.offsetWidth, n = e.offsetHeight;
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
  if (r && Ad(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function on(e) {
  return er(e).getComputedStyle(e);
}
function ej(e) {
  return ["table", "td", "th"].indexOf(jr(e)) >= 0;
}
function kn(e) {
  return ((Un(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function nl(e) {
  return jr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ad(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    kn(e)
  );
}
function rm(e) {
  return !lr(e) || // https://github.com/popperjs/popper-core/issues/837
  on(e).position === "fixed" ? null : e.offsetParent;
}
function tj(e) {
  var t = /firefox/i.test(mu()), r = /Trident/i.test(mu());
  if (r && lr(e)) {
    var n = on(e);
    if (n.position === "fixed")
      return null;
  }
  var o = nl(e);
  for (Ad(o) && (o = o.host); lr(o) && ["html", "body"].indexOf(jr(o)) < 0; ) {
    var a = on(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ci(e) {
  for (var t = er(e), r = rm(e); r && ej(r) && on(r).position === "static"; )
    r = rm(r);
  return r && (jr(r) === "html" || jr(r) === "body" && on(r).position === "static") ? t : r || tj(e) || t;
}
function Rd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ka(e, t, r) {
  return Ln(e, Rs(t, r));
}
function rj(e, t, r) {
  var n = ka(e, t, r);
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
var nj = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, hy(typeof t != "number" ? t : my(t, li));
};
function oj(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Nr(r.placement), l = Rd(s), c = [Ut, ur].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = nj(o.padding, r), f = Od(a), p = l === "y" ? Wt : Ut, m = l === "y" ? cr : ur, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], v = i[l] - r.rects.reference[l], b = ci(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, S = h / 2 - v / 2, _ = d[p], w = y - f[u] - d[m], M = y / 2 - f[u] / 2 + S, P = ka(_, M, w), I = l;
    r.modifiersData[n] = (t = {}, t[I] = P, t.centerOffset = P - M, t);
  }
}
function aj(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || fy(t.elements.popper, o) && (t.elements.arrow = o));
}
const ij = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oj,
  effect: aj,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Io(e) {
  return e.split("-")[1];
}
var sj = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function lj(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Do(r * o) / o || 0,
    y: Do(n * o) / o || 0
  };
}
function nm(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, v = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = v.x, h = v.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), S = Ut, _ = Wt, w = window;
  if (c) {
    var M = ci(r), P = "clientHeight", I = "clientWidth";
    if (M === er(r) && (M = kn(r), on(M).position !== "static" && s === "absolute" && (P = "scrollHeight", I = "scrollWidth")), M = M, o === Wt || (o === Ut || o === ur) && a === qa) {
      _ = cr;
      var z = d && M === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      h -= z - n.height, h *= l ? 1 : -1;
    }
    if (o === Ut || (o === Wt || o === cr) && a === qa) {
      S = ur;
      var j = d && M === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[I]
      );
      p -= j - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && sj), ne = u === !0 ? lj({
    x: p,
    y: h
  }, er(r)) : {
    x: p,
    y: h
  };
  if (p = ne.x, h = ne.y, l) {
    var J;
    return Object.assign({}, X, (J = {}, J[_] = y ? "0" : "", J[S] = b ? "0" : "", J.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", J));
  }
  return Object.assign({}, X, (t = {}, t[_] = y ? h + "px" : "", t[S] = b ? p + "px" : "", t.transform = "", t));
}
function cj(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Nr(t.placement),
    variation: Io(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, nm(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, nm(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const uj = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cj,
  data: {}
};
var Di = {
  passive: !0
};
function dj(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = er(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Di);
  }), s && l.addEventListener("resize", r.update, Di), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Di);
    }), s && l.removeEventListener("resize", r.update, Di);
  };
}
const fj = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dj,
  data: {}
};
var pj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ts(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pj[t];
  });
}
var hj = {
  start: "end",
  end: "start"
};
function om(e) {
  return e.replace(/start|end/g, function(t) {
    return hj[t];
  });
}
function $d(e) {
  var t = er(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Dd(e) {
  return Mo(kn(e)).left + $d(e).scrollLeft;
}
function mj(e, t) {
  var r = er(e), n = kn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = dy();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Dd(e),
    y: l
  };
}
function vj(e) {
  var t, r = kn(e), n = $d(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ln(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Ln(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Dd(e), l = -n.scrollTop;
  return on(o || r).direction === "rtl" && (s += Ln(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Md(e) {
  var t = on(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function vy(e) {
  return ["html", "body", "#document"].indexOf(jr(e)) >= 0 ? e.ownerDocument.body : lr(e) && Md(e) ? e : vy(nl(e));
}
function Ea(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = vy(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = er(n), i = o ? [a].concat(a.visualViewport || [], Md(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ea(nl(i)))
  );
}
function vu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gj(e, t) {
  var r = Mo(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function am(e, t, r) {
  return t === cy ? vu(mj(e, r)) : Un(t) ? gj(t, r) : vu(vj(kn(e)));
}
function bj(e) {
  var t = Ea(nl(e)), r = ["absolute", "fixed"].indexOf(on(e).position) >= 0, n = r && lr(e) ? ci(e) : e;
  return Un(n) ? t.filter(function(o) {
    return Un(o) && fy(o, n) && jr(o) !== "body";
  }) : [];
}
function yj(e, t, r, n) {
  var o = t === "clippingParents" ? bj(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = am(e, c, n);
    return l.top = Ln(u.top, l.top), l.right = Rs(u.right, l.right), l.bottom = Rs(u.bottom, l.bottom), l.left = Ln(u.left, l.left), l;
  }, am(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function gy(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Nr(n) : null, a = n ? Io(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case Wt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case cr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case ur:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Ut:
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
  var c = o ? Rd(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case $o:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case qa:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Xa(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? BN : s, c = r.rootBoundary, u = c === void 0 ? cy : c, d = r.elementContext, f = d === void 0 ? ra : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, v = h === void 0 ? 0 : h, b = hy(typeof v != "number" ? v : my(v, li)), y = f === ra ? zN : ra, S = e.rects.popper, _ = e.elements[m ? y : f], w = yj(Un(_) ? _ : _.contextElement || kn(e.elements.popper), l, u, i), M = Mo(e.elements.reference), P = gy({
    reference: M,
    element: S,
    strategy: "absolute",
    placement: o
  }), I = vu(Object.assign({}, S, P)), z = f === ra ? I : M, j = {
    top: w.top - z.top + b.top,
    bottom: z.bottom - w.bottom + b.bottom,
    left: w.left - z.left + b.left,
    right: z.right - w.right + b.right
  }, X = e.modifiersData.offset;
  if (f === ra && X) {
    var ne = X[o];
    Object.keys(j).forEach(function(J) {
      var Q = [ur, cr].indexOf(J) >= 0 ? 1 : -1, ee = [Wt, cr].indexOf(J) >= 0 ? "y" : "x";
      j[J] += ne[ee] * Q;
    });
  }
  return j;
}
function xj(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? uy : l, u = Io(n), d = u ? s ? tm : tm.filter(function(m) {
    return Io(m) === u;
  }) : li, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Xa(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Nr(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function Sj(e) {
  if (Nr(e) === Td)
    return [];
  var t = ts(e);
  return [om(e), t, om(t)];
}
function wj(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, v = t.options.placement, b = Nr(v), y = b === v, S = l || (y || !m ? [ts(v)] : Sj(v)), _ = [v].concat(S).reduce(function(A, B) {
      return A.concat(Nr(B) === Td ? xj(t, {
        placement: B,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : B);
    }, []), w = t.rects.reference, M = t.rects.popper, P = /* @__PURE__ */ new Map(), I = !0, z = _[0], j = 0; j < _.length; j++) {
      var X = _[j], ne = Nr(X), J = Io(X) === $o, Q = [Wt, cr].indexOf(ne) >= 0, ee = Q ? "width" : "height", oe = Xa(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), D = Q ? J ? ur : Ut : J ? cr : Wt;
      w[ee] > M[ee] && (D = ts(D));
      var ce = ts(D), fe = [];
      if (a && fe.push(oe[ne] <= 0), s && fe.push(oe[D] <= 0, oe[ce] <= 0), fe.every(function(A) {
        return A;
      })) {
        z = X, I = !1;
        break;
      }
      P.set(X, fe);
    }
    if (I)
      for (var F = m ? 3 : 1, N = function(B) {
        var C = _.find(function(H) {
          var O = P.get(H);
          if (O)
            return O.slice(0, B).every(function(Z) {
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
const Cj = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wj,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function im(e, t, r) {
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
function sm(e) {
  return [Wt, ur, cr, Ut].some(function(t) {
    return e[t] >= 0;
  });
}
function _j(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Xa(t, {
    elementContext: "reference"
  }), s = Xa(t, {
    altBoundary: !0
  }), l = im(i, n), c = im(s, o, a), u = sm(l), d = sm(c);
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
const kj = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _j
};
function Ej(e, t, r) {
  var n = Nr(e), o = [Ut, Wt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Ut, ur].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Pj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = uy.reduce(function(u, d) {
    return u[d] = Ej(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const Tj = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Pj
};
function Aj(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = gy({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Oj = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Aj,
  data: {}
};
function Rj(e) {
  return e === "x" ? "y" : "x";
}
function $j(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, v = Xa(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), b = Nr(t.placement), y = Io(t.placement), S = !y, _ = Rd(b), w = Rj(_), M = t.modifiersData.popperOffsets, P = t.rects.reference, I = t.rects.popper, z = typeof h == "function" ? h(Object.assign({}, t.rects, {
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
      var J, Q = _ === "y" ? Wt : Ut, ee = _ === "y" ? cr : ur, oe = _ === "y" ? "height" : "width", D = M[_], ce = D + v[Q], fe = D - v[ee], F = p ? -I[oe] / 2 : 0, N = y === $o ? P[oe] : I[oe], V = y === $o ? -I[oe] : -P[oe], T = t.elements.arrow, A = p && T ? Od(T) : {
        width: 0,
        height: 0
      }, B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : py(), C = B[Q], H = B[ee], O = ka(0, P[oe], A[oe]), Z = S ? P[oe] / 2 - F - O - C - j.mainAxis : N - O - C - j.mainAxis, Y = S ? -P[oe] / 2 + F + O + H + j.mainAxis : V + O + H + j.mainAxis, ae = t.elements.arrow && ci(t.elements.arrow), R = ae ? _ === "y" ? ae.clientTop || 0 : ae.clientLeft || 0 : 0, Se = (J = X == null ? void 0 : X[_]) != null ? J : 0, he = D + Z - Se - R, le = D + Y - Se, De = ka(p ? Rs(ce, he) : ce, D, p ? Ln(fe, le) : fe);
      M[_] = De, ne[_] = De - D;
    }
    if (s) {
      var ye, we = _ === "x" ? Wt : Ut, ht = _ === "x" ? cr : ur, ke = M[w], dt = w === "y" ? "height" : "width", rt = ke + v[we], Ie = ke - v[ht], se = [Wt, Ut].indexOf(b) !== -1, Oe = (ye = X == null ? void 0 : X[w]) != null ? ye : 0, Ot = se ? rt : ke - P[dt] - I[dt] - Oe + j.altAxis, xt = se ? ke + P[dt] + I[dt] - Oe - j.altAxis : Ie, lt = p && se ? rj(Ot, ke, xt) : ka(p ? Ot : rt, ke, p ? xt : Ie);
      M[w] = lt, ne[w] = lt - ke;
    }
    t.modifiersData[n] = ne;
  }
}
const Dj = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $j,
  requiresIfExists: ["offset"]
};
function Mj(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ij(e) {
  return e === er(e) || !lr(e) ? $d(e) : Mj(e);
}
function Fj(e) {
  var t = e.getBoundingClientRect(), r = Do(t.width) / e.offsetWidth || 1, n = Do(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Nj(e, t, r) {
  r === void 0 && (r = !1);
  var n = lr(t), o = lr(t) && Fj(t), a = kn(t), i = Mo(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((jr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Md(a)) && (s = Ij(t)), lr(t) ? (l = Mo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Dd(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function jj(e) {
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
function Bj(e) {
  var t = jj(e);
  return KN.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function zj(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Vj(e) {
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
var lm = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function cm() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Lj(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? lm : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, lm, a),
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
          reference: Un(s) ? Ea(s) : s.contextElement ? Ea(s.contextElement) : [],
          popper: Ea(l)
        };
        var S = Bj(Vj([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(_) {
          return _.enabled;
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
          if (cm(y, S)) {
            u.rects = {
              reference: Nj(y, ci(S), u.options.strategy === "fixed"),
              popper: Od(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var _ = 0; _ < u.orderedModifiers.length; _++) {
              if (u.reset === !0) {
                u.reset = !1, _ = -1;
                continue;
              }
              var w = u.orderedModifiers[_], M = w.fn, P = w.options, I = P === void 0 ? {} : P, z = w.name;
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
      update: zj(function() {
        return new Promise(function(v) {
          p.forceUpdate(), v(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!cm(s, l))
      return p;
    p.setOptions(c).then(function(v) {
      !f && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function m() {
      u.orderedModifiers.forEach(function(v) {
        var b = v.name, y = v.options, S = y === void 0 ? {} : y, _ = v.effect;
        if (typeof _ == "function") {
          var w = _({
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
var Wj = [fj, Oj, uj, QN, Tj, Cj, Dj, ij, kj], Uj = /* @__PURE__ */ Lj({
  defaultModifiers: Wj
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
  } = e, m = be(null), h = be(null), v = be(null), b = jN(n, p), y = be(() => {
  }), S = G(() => {
    var j;
    !t || !m.current || !h.current || ((j = y.current) == null || j.call(y), v.current = Uj(m.current, h.current, {
      placement: b,
      modifiers: [
        IN,
        $N,
        RN,
        {
          ...ON,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...AN(i)
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
        // allow users override internal modifiers
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
  const _ = G(
    (j) => {
      m.current = j, S();
    },
    [S]
  ), w = G(
    (j = {}, X = null) => ({
      ...j,
      ref: St(_, X)
    }),
    [_]
  ), M = G(
    (j) => {
      h.current = j, S();
    },
    [S]
  ), P = G(
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
  ), I = G((j = {}, X = null) => {
    const { size: ne, shadowColor: J, bg: Q, style: ee, ...oe } = j;
    return {
      ...oe,
      ref: X,
      "data-popper-arrow": "",
      style: Hj(j)
    };
  }, []), z = G(
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
    referenceRef: _,
    popperRef: M,
    getPopperProps: P,
    getArrowProps: I,
    getArrowInnerProps: z,
    getReferenceProps: w
  };
}
function Hj(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function yy(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = Jt(r), i = Jt(t), [s, l] = Ye(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = _r(), f = o ?? `disclosure-${d}`, p = G(() => {
    u || l(!1), i == null || i();
  }, [u, i]), m = G(() => {
    u || l(!0), a == null || a();
  }, [u, a]), h = G(() => {
    c ? p() : m();
  }, [c, m, p]);
  function v(y = {}) {
    return {
      ...y,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(S) {
        var _;
        (_ = y.onClick) == null || _.call(y, S), h();
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
function Yj(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = Jt(r), i = be({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  Fe(() => {
    if (!n)
      return;
    const s = (d) => {
      vc(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && vc(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && vc(d, t) && (i.isPointerDown = !1, o(d));
    }, u = xy(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function vc(e, t) {
  var r;
  const n = e.target;
  return n && !xy(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function xy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Gj(e) {
  const { isOpen: t, ref: r } = e, [n, o] = Ye(t), [a, i] = Ye(!1);
  return Fe(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), _a(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = X5(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function qj(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  Xj,
  Kj,
  Zj,
  Jj
] = bF(), [Qj, Wo] = Nt({
  strict: !1,
  name: "MenuContext"
});
function eB(e, ...t) {
  const r = _r(), n = e || r;
  return gt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function Sy(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function um(e) {
  return Sy(e).activeElement === e;
}
function tB(e = {}) {
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
  } = e, v = be(null), b = be(null), y = Zj(), S = G(() => {
    requestAnimationFrame(() => {
      var T;
      (T = v.current) == null || T.focus({ preventScroll: !1 });
    });
  }, []), _ = G(() => {
    const T = setTimeout(() => {
      var A;
      if (o)
        (A = o.current) == null || A.focus();
      else {
        const B = y.firstEnabled();
        B && J(B.index);
      }
    });
    ce.current.add(T);
  }, [y, o]), w = G(() => {
    const T = setTimeout(() => {
      const A = y.lastEnabled();
      A && J(A.index);
    });
    ce.current.add(T);
  }, [y]), M = G(() => {
    u == null || u(), a ? _() : S();
  }, [a, _, S, u]), { isOpen: P, onOpen: I, onClose: z, onToggle: j } = yy({
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: M
  });
  Yj({
    enabled: P && n,
    ref: v,
    handler: (T) => {
      var A;
      (A = b.current) != null && A.contains(T.target) || z();
    }
  });
  const X = by({
    ...h,
    enabled: P || m,
    placement: d,
    direction: p
  }), [ne, J] = Ye(-1);
  zo(() => {
    P || J(-1);
  }, [P]), CN(v, {
    focusRef: b,
    visible: P,
    shouldFocus: !0
  });
  const Q = Gj({ isOpen: P, ref: v }), [ee, oe] = eB(t, "menu-button", "menu-list"), D = G(() => {
    I(), S();
  }, [I, S]), ce = be(/* @__PURE__ */ new Set([]));
  Fe(() => {
    const T = ce.current;
    return () => {
      T.forEach((A) => clearTimeout(A)), T.clear();
    };
  }, []);
  const fe = G(() => {
    I(), _();
  }, [_, I]), F = G(() => {
    I(), w();
  }, [I, w]), N = G(() => {
    var T, A;
    const B = Sy(v.current), C = (T = v.current) == null ? void 0 : T.contains(B.activeElement);
    if (!(P && !C))
      return;
    const O = (A = y.item(ne)) == null ? void 0 : A.node;
    O == null || O.focus({ preventScroll: !0 });
  }, [P, ne, y]), V = be(null);
  return {
    openAndFocusMenu: D,
    openAndFocusFirstItem: fe,
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
function rB(e = {}, t = null) {
  const r = Wo(), { onToggle: n, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: i } = r, s = G(
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
    "data-active": Ar(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: $t(e.onClick, n),
    onKeyDown: $t(e.onKeyDown, s)
  };
}
function gu(e) {
  var t;
  return aB(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function nB(e = {}, t = null) {
  const r = Wo();
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
  } = r, f = Kj(), p = bN({
    preventDefault: (b) => b.key !== " " && gu(b.target)
  }), m = G(
    (b) => {
      if (!b.currentTarget.contains(b.target))
        return;
      const y = b.key, _ = {
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
      if (_) {
        b.preventDefault(), _(b);
        return;
      }
      const w = p((M) => {
        const P = yN(
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
      gu(b.target) && w(b);
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
  const v = qj({
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
function oB(e = {}) {
  const { popper: t, isOpen: r } = Wo();
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
  } = e, f = Wo(), {
    setFocusedIndex: p,
    focusedIndex: m,
    closeOnSelect: h,
    onClose: v,
    menuRef: b,
    isOpen: y,
    menuId: S,
    rafId: _
  } = f, w = be(null), M = `${S}-menuitem-${_r()}`, { index: P, register: I } = Jj({
    disabled: s && !l
  }), z = G(
    (D) => {
      r == null || r(D), !s && p(P);
    },
    [p, P, s, r]
  ), j = G(
    (D) => {
      n == null || n(D), w.current && !um(w.current) && z(D);
    },
    [z, n]
  ), X = G(
    (D) => {
      o == null || o(D), !s && p(-1);
    },
    [p, s, o]
  ), ne = G(
    (D) => {
      a == null || a(D), gu(D.currentTarget) && (c ?? h) && v();
    },
    [v, a, h, c]
  ), J = G(
    (D) => {
      i == null || i(D), p(P);
    },
    [p, i, P]
  ), Q = P === m, ee = s && !l;
  zo(() => {
    if (y)
      return Q && !ee && w.current ? (_.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
        var D;
        (D = w.current) == null || D.focus({ preventScroll: !0 }), _.current = null;
      })) : b.current && !um(b.current) && b.current.focus({ preventScroll: !0 }), () => {
        _.current && cancelAnimationFrame(_.current);
      };
  }, [Q, ee, b, y]);
  const oe = SN({
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
function XV(e = {}, t = null) {
  const { type: r = "radio", isChecked: n, ...o } = e;
  return {
    ...wy(o, t),
    role: `menuitem${r}`,
    "aria-checked": n
  };
}
function KV(e = {}) {
  const {
    children: t,
    type: r = "radio",
    value: n,
    defaultValue: o,
    onChange: a,
    ...i
  } = e, l = r === "radio" ? "" : [], [c, u] = gd({
    defaultValue: o ?? l,
    value: n,
    onChange: a
  }), d = G(
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
    return Ka(m, {
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
function ZV() {
  const { isOpen: e, onClose: t } = Wo();
  return { isOpen: e, onClose: t };
}
function aB(e) {
  var t;
  if (!iB(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function iB(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
var [sB, Uo] = Nt({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), lB = (e) => {
  const { children: t } = e, r = Bo("Menu", e), n = Br(e), { direction: o } = sn(), { descendants: a, ...i } = tB({ ...n, direction: o }), s = gt(() => i, [i]), { isOpen: l, onClose: c, forceUpdate: u } = s;
  return /* @__PURE__ */ L.jsx(Xj, { value: a, children: /* @__PURE__ */ L.jsx(Qj, { value: s, children: /* @__PURE__ */ L.jsx(sB, { value: r, children: mn(t, { isOpen: l, onClose: c, forceUpdate: u }) }) }) });
};
lB.displayName = "Menu";
var Cy = _e(
  (e, t) => {
    const r = Uo();
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
var cB = _e(
  (e, t) => {
    const { type: r, ...n } = e, o = Uo(), a = n.as || r ? r ?? void 0 : "button", i = gt(
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
  const { className: t, children: r, ...n } = e, o = Uo(), a = Ds.only(r), i = wu(a) ? Ka(a, {
    focusable: "false",
    "aria-hidden": !0,
    className: Xe("chakra-menu__icon", a.props.className)
  }) : null, s = Xe("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ L.jsx(ge.span, { className: s, ...n, __css: o.icon, children: i });
};
_y.displayName = "MenuIcon";
var uB = _e((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: i,
    ...s
  } = e, l = wy(s, t), u = r || o ? /* @__PURE__ */ L.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: i }) : i;
  return /* @__PURE__ */ L.jsxs(
    cB,
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
uB.displayName = "MenuItem";
var dB = {
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
}, fB = ge(_n.div), pB = _e(function(t, r) {
  var n, o;
  const { rootProps: a, motionProps: i, ...s } = t, {
    isOpen: l,
    onTransitionEnd: c,
    unstable__animationState: u
  } = Wo(), d = nB(s, r), f = oB(a), p = Uo();
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ L.jsx(
        fB,
        {
          variants: dB,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...i,
          className: Xe("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: c,
          onAnimationComplete: T_(
            u.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
pB.displayName = "MenuList";
var hB = _e((e, t) => {
  const r = Uo();
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
}), mB = _e(
  (e, t) => {
    const { children: r, as: n, ...o } = e, a = rB(o, t), i = n || hB;
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
mB.displayName = "MenuButton";
var vB = (e) => {
  const { className: t, ...r } = e, n = Uo();
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
vB.displayName = "MenuDivider";
var gB = {
  slideInBottom: {
    ...ua,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...ua,
    custom: { offsetX: 16, reverse: !0 }
  },
  slideInTop: {
    ...ua,
    custom: { offsetY: -16, reverse: !0 }
  },
  slideInLeft: {
    ...ua,
    custom: { offsetX: -16, reverse: !0 }
  },
  scale: {
    ...fb,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, bB = ge(_n.section), yB = (e) => gB[e || "none"], ky = At(
  (e, t) => {
    const { preset: r, motionProps: n = yB(r), ...o } = e;
    return /* @__PURE__ */ L.jsx(bB, { ref: t, ...n, ...o });
  }
);
ky.displayName = "ModalTransition";
var xB = Object.defineProperty, SB = (e, t, r) => t in e ? xB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, wB = (e, t, r) => (SB(e, typeof t != "symbol" ? t + "" : t, r), r), CB = class {
  constructor() {
    wB(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, bu = new CB();
function Ey(e, t) {
  const [r, n] = Ye(0);
  return Fe(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = bu.add(o);
        n(a);
      }
      return () => {
        bu.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var _B = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qn = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Ii = {}, gc = 0, Py = function(e) {
  return e && (e.host || Py(e.parentNode));
}, kB = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Py(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, EB = function(e, t, r, n) {
  var o = kB(t, Array.isArray(e) ? e : [e]);
  Ii[r] || (Ii[r] = /* @__PURE__ */ new WeakMap());
  var a = Ii[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (Qn.get(f) || 0) + 1, v = (a.get(f) || 0) + 1;
        Qn.set(f, h), a.set(f, v), i.push(f), h === 1 && m && Mi.set(f, !0), v === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), gc++, function() {
    i.forEach(function(d) {
      var f = Qn.get(d) - 1, p = a.get(d) - 1;
      Qn.set(d, f), a.set(d, p), f || (Mi.has(d) || d.removeAttribute(n), Mi.delete(d)), p || d.removeAttribute(r);
    }), gc--, gc || (Qn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap(), Ii = {});
  };
}, PB = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || _B(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), EB(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function TB(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = be(null), u = be(null), [d, f, p] = OB(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  AB(c, t && i);
  const m = Ey(c, t), h = be(null), v = G((z) => {
    h.current = z.target;
  }, []), b = G(
    (z) => {
      z.key === "Escape" && (z.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [y, S] = Ye(!1), [_, w] = Ye(!1), M = G(
    (z = {}, j = null) => ({
      role: "dialog",
      ...z,
      ref: St(j, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": _ ? p : void 0,
      onClick: $t(
        z.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, _, d, f, y]
  ), P = G(
    (z) => {
      z.stopPropagation(), h.current === z.target && bu.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), I = G(
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
function AB(e, t) {
  const r = e.current;
  Fe(() => {
    if (!(!e.current || !t))
      return PB(e.current);
  }, [t, e, r]);
}
function OB(e, ...t) {
  const r = _r(), n = e || r;
  return gt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [RB, Xn] = Nt({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [$B, wn] = Nt({
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
  } = t, h = Bo("Modal", t), b = {
    ...TB(t),
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
  return /* @__PURE__ */ L.jsx($B, { value: b, children: /* @__PURE__ */ L.jsx(RB, { value: h, children: /* @__PURE__ */ L.jsx(Vo, { onExitComplete: m, children: b.isOpen && /* @__PURE__ */ L.jsx(Qa, { ...r, children: n }) }) }) });
};
Ty.displayName = "Modal";
var rs = "right-scroll-bar-position", ns = "width-before-scroll-bar", DB = "with-scroll-bars-hidden", MB = "--removed-body-scroll-bar-size", Ay = kb(), bc = function() {
}, ol = U.forwardRef(function(e, t) {
  var r = U.useRef(null), n = U.useState({
    onScrollCapture: bc,
    onWheelCapture: bc,
    onTouchMoveCapture: bc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, y = e.gapMode, S = wb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = f, w = Sb([r, t]), M = Dr(Dr({}, S), o);
  return U.createElement(
    U.Fragment,
    null,
    u && U.createElement(_, { sideCar: Ay, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: y }),
    i ? U.cloneElement(U.Children.only(s), Dr(Dr({}, M), { ref: w })) : U.createElement(b, Dr({}, M, { className: l, ref: w }), s)
  );
});
ol.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ol.classNames = {
  fullWidth: ns,
  zeroRight: rs
};
var dm, IB = function() {
  if (dm)
    return dm;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function FB() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = IB();
  return t && e.setAttribute("nonce", t), e;
}
function NB(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function jB(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var BB = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = FB()) && (NB(t, r), jB(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, zB = function() {
  var e = BB();
  return function(t, r) {
    U.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Oy = function() {
  var e = zB(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, VB = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yc = function(e) {
  return parseInt(e || "", 10) || 0;
}, LB = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yc(r), yc(n), yc(o)];
}, WB = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return VB;
  var t = LB(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, UB = Oy(), HB = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(DB, ` {
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
  
  .`).concat(rs, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(ns, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(rs, " .").concat(rs, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ns, " .").concat(ns, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(MB, ": ").concat(s, `px;
  }
`);
}, YB = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = U.useMemo(function() {
    return WB(o);
  }, [o]);
  return U.createElement(UB, { styles: HB(a, !t, o, r ? "" : "!important") });
}, yu = !1;
if (typeof window < "u")
  try {
    var Fi = Object.defineProperty({}, "passive", {
      get: function() {
        return yu = !0, !0;
      }
    });
    window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
  } catch {
    yu = !1;
  }
var eo = yu ? { passive: !1 } : !1, GB = function(e) {
  return e.tagName === "TEXTAREA";
}, Ry = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !GB(e) && r[t] === "visible")
  );
}, qB = function(e) {
  return Ry(e, "overflowY");
}, XB = function(e) {
  return Ry(e, "overflowX");
}, fm = function(e, t) {
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
}, KB = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ZB = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, $y = function(e, t) {
  return e === "v" ? qB(t) : XB(t);
}, Dy = function(e, t) {
  return e === "v" ? KB(t) : ZB(t);
}, JB = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, QB = function(e, t, r, n, o) {
  var a = JB(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Dy(e, s), m = p[0], h = p[1], v = p[2], b = h - v - a * m;
    (m || b) && $y(e, s) && (d += b, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, Ni = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, pm = function(e) {
  return [e.deltaX, e.deltaY];
}, hm = function(e) {
  return e && "current" in e ? e.current : e;
}, ez = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, tz = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rz = 0, to = [];
function nz(e) {
  var t = U.useRef([]), r = U.useRef([0, 0]), n = U.useRef(), o = U.useState(rz++)[0], a = U.useState(Oy)[0], i = U.useRef(e);
  U.useEffect(function() {
    i.current = e;
  }, [e]), U.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = ZF([e.lockRef.current], (e.shards || []).map(hm), !0).filter(Boolean);
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
    var b = Ni(h), y = r.current, S = "deltaX" in h ? h.deltaX : y[0] - b[0], _ = "deltaY" in h ? h.deltaY : y[1] - b[1], w, M = h.target, P = Math.abs(S) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && P === "h" && M.type === "range")
      return !1;
    var I = fm(P, M);
    if (!I)
      return !0;
    if (I ? w = P : (w = P === "v" ? "h" : "v", I = fm(P, M)), !I)
      return !1;
    if (!n.current && "changedTouches" in h && (S || _) && (n.current = w), !w)
      return !0;
    var z = n.current || w;
    return QB(z, v, h, z === "h" ? S : _, !0);
  }, []), l = U.useCallback(function(h) {
    var v = h;
    if (!(!to.length || to[to.length - 1] !== a)) {
      var b = "deltaY" in v ? pm(v) : Ni(v), y = t.current.filter(function(w) {
        return w.name === v.type && w.target === v.target && ez(w.delta, b);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var S = (i.current.shards || []).map(hm).filter(Boolean).filter(function(w) {
          return w.contains(v.target);
        }), _ = S.length > 0 ? s(v, S[0]) : !i.current.noIsolation;
        _ && v.cancelable && v.preventDefault();
      }
    }
  }, []), c = U.useCallback(function(h, v, b, y) {
    var S = { name: h, delta: v, target: b, should: y };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== S;
      });
    }, 1);
  }, []), u = U.useCallback(function(h) {
    r.current = Ni(h), n.current = void 0;
  }, []), d = U.useCallback(function(h) {
    c(h.type, pm(h), h.target, s(h, e.lockRef.current));
  }, []), f = U.useCallback(function(h) {
    c(h.type, Ni(h), h.target, s(h, e.lockRef.current));
  }, []);
  U.useEffect(function() {
    return to.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, eo), document.addEventListener("touchmove", l, eo), document.addEventListener("touchstart", u, eo), function() {
      to = to.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, eo), document.removeEventListener("touchmove", l, eo), document.removeEventListener("touchstart", u, eo);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return U.createElement(
    U.Fragment,
    null,
    m ? U.createElement(a, { styles: tz(o) }) : null,
    p ? U.createElement(YB, { gapMode: e.gapMode }) : null
  );
}
const oz = JF(Ay, nz);
var My = U.forwardRef(function(e, t) {
  return U.createElement(ol, Dr({}, e, { ref: t, sideCar: oz }));
});
My.classNames = ol.classNames;
const az = My;
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
  } = wn(), [f, p] = Kg();
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
        az,
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
var iz = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = wn(), c = s(i, t), u = l(o), d = Xe("chakra-modal__content", r), f = Xn(), p = {
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
    }, { motionPreset: h } = wn();
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
iz.displayName = "ModalContent";
var [sz, lz] = Nt(), cz = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function uz(e, t) {
  var r, n;
  if (e)
    return (n = (r = cz[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function JV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = sn(), l = (t = s.components) == null ? void 0 : t.Drawer, c = uz(o, s.direction);
  return /* @__PURE__ */ L.jsx(sz, { value: { placement: c }, children: /* @__PURE__ */ L.jsx(
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
var dz = ge(pb), fz = _e(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = wn(), u = s(i, t), d = l(a), f = Xe("chakra-modal__content", r), p = Xn(), m = {
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
    }, { placement: v } = lz();
    return /* @__PURE__ */ L.jsx(Iy, { children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ L.jsx(
          dz,
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
fz.displayName = "DrawerContent";
var pz = _e(
  (e, t) => {
    const { className: r, ...n } = e, o = Xe("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Xn().footer
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
pz.displayName = "ModalFooter";
var hz = _e(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = wn();
    Fe(() => (a(!0), () => a(!1)), [a]);
    const i = Xe("chakra-modal__header", r), l = {
      flex: 0,
      ...Xn().header
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
hz.displayName = "ModalHeader";
var mz = ge(_n.div), vz = _e(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = Xe("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Xn().overlay
    }, { motionPreset: c } = wn(), d = o || (c === "none" ? {} : db);
    return /* @__PURE__ */ L.jsx(
      mz,
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
vz.displayName = "ModalOverlay";
var gz = _e((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = wn();
  Fe(() => (a(!0), () => a(!1)), [a]);
  const i = Xe("chakra-modal__body", r), s = Xn();
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
gz.displayName = "ModalBody";
var bz = _e(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = wn(), i = Xe("chakra-modal__close-btn", n), s = Xn();
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
bz.displayName = "ModalCloseButton";
var ar = (e) => e ? "" : void 0, ko = (e) => e ? !0 : void 0, En = (...e) => e.filter(Boolean).join(" ");
function Eo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function yz(e) {
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
function da(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var os = { width: 0, height: 0 }, ji = (e) => e || os;
function Fy(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var v;
    const b = (v = n[h]) != null ? v : os;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...da({
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
    (h, v) => ji(h).height > ji(v).height ? h : v,
    os
  ) : n.reduce(
    (h, v) => ji(h).width > ji(v).width ? h : v,
    os
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...da({
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
    ...da({
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
    ...da({
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
function xz(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function Sz(e) {
  const t = Cz(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function jy(e) {
  return !!e.touches;
}
function wz(e) {
  return jy(e) && e.touches.length > 1;
}
function Cz(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function _z(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function kz(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function By(e, t = "page") {
  return jy(e) ? _z(e, t) : kz(e, t);
}
function Ez(e) {
  return (t) => {
    const r = Sz(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function Pz(e, t = !1) {
  function r(o) {
    e(o, { point: By(o) });
  }
  return t ? Ez(r) : r;
}
function as(e, t, r, n) {
  return xz(e, t, Pz(r, t === "pointerdown"), n);
}
var Tz = Object.defineProperty, Az = (e, t, r) => t in e ? Tz(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hr = (e, t, r) => (Az(e, typeof t != "symbol" ? t + "" : t, r), r), Oz = class {
  constructor(e, t, r) {
    hr(this, "history", []), hr(this, "startEvent", null), hr(this, "lastEvent", null), hr(this, "lastEventInfo", null), hr(this, "handlers", {}), hr(this, "removeListeners", () => {
    }), hr(this, "threshold", 3), hr(this, "win"), hr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = xc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = Mz(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = Ep();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), hr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, C$.update(this.updatePoint, !0);
    }), hr(this, "onPointerUp", (s, l) => {
      const c = xc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, wz(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: By(e) }, { timestamp: a } = Ep();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, xc(o, this.history)), this.removeListeners = Dz(
      as(this.win, "pointermove", this.onPointerMove),
      as(this.win, "pointerup", this.onPointerUp),
      as(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), _$.update(this.updatePoint);
  }
};
function mm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function xc(e, t) {
  return {
    point: e.point,
    delta: mm(e.point, t[t.length - 1]),
    offset: mm(e.point, t[0]),
    velocity: $z(t, 0.1)
  };
}
var Rz = (e) => e * 1e3;
function $z(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Rz(t))); )
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
function Dz(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function Sc(e, t) {
  return Math.abs(e - t);
}
function vm(e) {
  return "x" in e && "y" in e;
}
function Mz(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return Sc(e, t);
  if (vm(e) && vm(t)) {
    const r = Sc(e.x, t.x), n = Sc(e.y, t.y);
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
      c.current = new Oz(p, u.current, s);
    }
    return as(d, "pointerdown", f);
  }, [e, l, u, s]), Fe(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function Iz(e, t) {
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
var Fz = globalThis != null && globalThis.document ? $s : Fe;
function Nz(e, t) {
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
  return Fz(() => {
    const i = e(), s = i.map(
      (l, c) => Iz(l, (u) => {
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
        Nz(l, () => {
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
function jz(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function Bz(e) {
  const [t] = Ly({
    observeMutation: !1,
    getNodes() {
      return [jz(e) ? e.current : e];
    }
  });
  return t;
}
function zz(e) {
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
    focusThumbOnChange: _ = !0,
    minStepsBetweenThumbs: w = 0,
    ...M
  } = e, P = Jt(f), I = Jt(p), z = Jt(h), j = Ny({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ne] = gd({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [J, Q] = Ye(!1), [ee, oe] = Ye(!1), [D, ce] = Ye(-1), fe = !(u || d), F = be(X), N = X.map((q) => Ca(q, t, r)), V = w * m, T = Vz(N, t, r, V), A = be({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  A.current.value = N, A.current.valueBounds = T;
  const B = N.map((q) => r - q + t), H = (j ? B : N).map((q) => Ps(q, t, r)), O = l === "vertical", Z = be(null), Y = be(null), ae = Ly({
    getNodes() {
      const q = Y.current, ie = q == null ? void 0 : q.querySelectorAll("[role=slider]");
      return ie ? Array.from(ie) : [];
    }
  }), R = _r(), he = yz(c ?? R), le = G(
    (q) => {
      var ie, xe;
      if (!Z.current)
        return;
      A.current.eventSource = "pointer";
      const Ce = Z.current.getBoundingClientRect(), { clientX: He, clientY: wt } = (xe = (ie = q.touches) == null ? void 0 : ie[0]) != null ? xe : q, Ze = O ? Ce.bottom - wt : He - Ce.left, nt = O ? Ce.height : Ce.width;
      let Ur = Ze / nt;
      return j && (Ur = 1 - Ur), gb(Ur, t, r);
    },
    [O, j, r, t]
  ), De = (r - t) / 10, ye = m || (r - t) / 100, we = gt(
    () => ({
      setValueAtIndex(q, ie) {
        if (!fe)
          return;
        const xe = A.current.valueBounds[q];
        ie = parseFloat(uu(ie, xe.min, ye)), ie = Ca(ie, xe.min, xe.max);
        const Ce = [...A.current.value];
        Ce[q] = ie, ne(Ce);
      },
      setActiveIndex: ce,
      stepUp(q, ie = ye) {
        const xe = A.current.value[q], Ce = j ? xe - ie : xe + ie;
        we.setValueAtIndex(q, Ce);
      },
      stepDown(q, ie = ye) {
        const xe = A.current.value[q], Ce = j ? xe + ie : xe - ie;
        we.setValueAtIndex(q, Ce);
      },
      reset() {
        ne(F.current);
      }
    }),
    [ye, j, ne, fe]
  ), ht = G(
    (q) => {
      const ie = q.key, Ce = {
        ArrowRight: () => we.stepUp(D),
        ArrowUp: () => we.stepUp(D),
        ArrowLeft: () => we.stepDown(D),
        ArrowDown: () => we.stepDown(D),
        PageUp: () => we.stepUp(D, De),
        PageDown: () => we.stepDown(D, De),
        Home: () => {
          const { min: He } = T[D];
          we.setValueAtIndex(D, He);
        },
        End: () => {
          const { max: He } = T[D];
          we.setValueAtIndex(D, He);
        }
      }[ie];
      Ce && (q.preventDefault(), q.stopPropagation(), Ce(q), A.current.eventSource = "keyboard");
    },
    [we, D, De, T]
  ), { getThumbStyle: ke, rootStyle: dt, trackStyle: rt, innerTrackStyle: Ie } = gt(
    () => Fy({
      isReversed: j,
      orientation: l,
      thumbRects: ae,
      thumbPercents: H
    }),
    [j, l, H, ae]
  ), se = G(
    (q) => {
      var ie;
      const xe = q ?? D;
      if (xe !== -1 && _) {
        const Ce = he.getThumb(xe), He = (ie = Y.current) == null ? void 0 : ie.ownerDocument.getElementById(Ce);
        He && setTimeout(() => He.focus());
      }
    },
    [_, D, he]
  );
  zo(() => {
    A.current.eventSource === "keyboard" && (I == null || I(A.current.value));
  }, [N, I]);
  const Oe = (q) => {
    const ie = le(q) || 0, xe = A.current.value.map(
      (nt) => Math.abs(nt - ie)
    ), Ce = Math.min(...xe);
    let He = xe.indexOf(Ce);
    const wt = xe.filter(
      (nt) => nt === Ce
    );
    wt.length > 1 && ie > A.current.value[He] && (He = He + wt.length - 1), ce(He), we.setValueAtIndex(He, ie), se(He);
  }, Ot = (q) => {
    if (D == -1)
      return;
    const ie = le(q) || 0;
    ce(D), we.setValueAtIndex(D, ie), se(D);
  };
  Vy(Y, {
    onPanSessionStart(q) {
      fe && (Q(!0), Oe(q), P == null || P(A.current.value));
    },
    onPanSessionEnd() {
      fe && (Q(!1), I == null || I(A.current.value));
    },
    onPan(q) {
      fe && Ot(q);
    }
  });
  const xt = G(
    (q = {}, ie = null) => ({
      ...q,
      ...M,
      id: he.root,
      ref: St(ie, Y),
      tabIndex: -1,
      "aria-disabled": ko(u),
      "data-focused": ar(ee),
      style: { ...q.style, ...dt }
    }),
    [M, u, ee, dt, he]
  ), lt = G(
    (q = {}, ie = null) => ({
      ...q,
      ref: St(ie, Z),
      id: he.track,
      "data-disabled": ar(u),
      style: { ...q.style, ...rt }
    }),
    [u, rt, he]
  ), Vr = G(
    (q = {}, ie = null) => ({
      ...q,
      ref: ie,
      id: he.innerTrack,
      style: {
        ...q.style,
        ...Ie
      }
    }),
    [Ie, he]
  ), Lr = G(
    (q, ie = null) => {
      var xe;
      const { index: Ce, ...He } = q, wt = N[Ce];
      if (wt == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${Ce}\`. The \`value\` or \`defaultValue\` length is : ${N.length}`
        );
      const Ze = T[Ce];
      return {
        ...He,
        ref: ie,
        role: "slider",
        tabIndex: fe ? 0 : void 0,
        id: he.getThumb(Ce),
        "data-active": ar(J && D === Ce),
        "aria-valuetext": (xe = z == null ? void 0 : z(wt)) != null ? xe : v == null ? void 0 : v[Ce],
        "aria-valuemin": Ze.min,
        "aria-valuemax": Ze.max,
        "aria-valuenow": wt,
        "aria-orientation": l,
        "aria-disabled": ko(u),
        "aria-readonly": ko(d),
        "aria-label": b == null ? void 0 : b[Ce],
        "aria-labelledby": b != null && b[Ce] || y == null ? void 0 : y[Ce],
        style: { ...q.style, ...ke(Ce) },
        onKeyDown: Eo(q.onKeyDown, ht),
        onFocus: Eo(q.onFocus, () => {
          oe(!0), ce(Ce);
        }),
        onBlur: Eo(q.onBlur, () => {
          oe(!1), ce(-1);
        })
      };
    },
    [
      he,
      N,
      T,
      fe,
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
  ), Wr = G(
    (q = {}, ie = null) => ({
      ...q,
      ref: ie,
      id: he.output,
      htmlFor: N.map((xe, Ce) => he.getThumb(Ce)).join(" "),
      "aria-live": "off"
    }),
    [he, N]
  ), te = G(
    (q, ie = null) => {
      const { value: xe, ...Ce } = q, He = !(xe < t || xe > r), wt = xe >= N[0] && xe <= N[N.length - 1];
      let Ze = Ps(xe, t, r);
      Ze = j ? 100 - Ze : Ze;
      const nt = {
        position: "absolute",
        pointerEvents: "none",
        ...da({
          orientation: l,
          vertical: { bottom: `${Ze}%` },
          horizontal: { left: `${Ze}%` }
        })
      };
      return {
        ...Ce,
        ref: ie,
        id: he.getMarker(q.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": ar(u),
        "data-invalid": ar(!He),
        "data-highlighted": ar(wt),
        style: {
          ...q.style,
          ...nt
        }
      };
    },
    [u, j, r, t, l, N, he]
  ), ve = G(
    (q, ie = null) => {
      const { index: xe, ...Ce } = q;
      return {
        ...Ce,
        ref: ie,
        id: he.getInput(xe),
        type: "hidden",
        value: N[xe],
        name: Array.isArray(S) ? S[xe] : `${S}-${xe}`
      };
    },
    [S, N, he]
  );
  return {
    state: {
      value: N,
      isFocused: ee,
      isDragging: J,
      getThumbPercent: (q) => H[q],
      getThumbMinValue: (q) => T[q].min,
      getThumbMaxValue: (q) => T[q].max
    },
    actions: we,
    getRootProps: xt,
    getTrackProps: lt,
    getInnerTrackProps: Vr,
    getThumbProps: Lr,
    getMarkerProps: te,
    getInputProps: ve,
    getOutputProps: Wr
  };
}
function Vz(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [Lz, al] = Nt({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [Wz, il] = Nt({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), Uz = _e(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Bo("Slider", n), a = Br(n), { direction: i } = sn();
    a.direction = i;
    const { getRootProps: s, ...l } = zz(a), c = gt(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ L.jsx(Lz, { value: c, children: /* @__PURE__ */ L.jsx(Wz, { value: o, children: /* @__PURE__ */ L.jsx(
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
Uz.displayName = "RangeSlider";
var Hz = _e(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = al(), i = il(), s = n(t, r);
    return /* @__PURE__ */ L.jsxs(
      ge.div,
      {
        ...s,
        className: En("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ L.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
Hz.displayName = "RangeSliderThumb";
var Yz = _e(
  function(t, r) {
    const { getTrackProps: n } = al(), o = il(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: En("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
Yz.displayName = "RangeSliderTrack";
var Gz = _e(function(t, r) {
  const { getInnerTrackProps: n } = al(), o = il(), a = n(t, r);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
Gz.displayName = "RangeSliderFilledTrack";
var qz = _e(
  function(t, r) {
    const { getMarkerProps: n } = al(), o = il(), a = n(t, r);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...a,
        className: En("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
qz.displayName = "RangeSliderMark";
function Xz(e) {
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
    name: _,
    focusThumbOnChange: w = !0,
    ...M
  } = e, P = Jt(p), I = Jt(m), z = Jt(v), j = Ny({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ne] = gd({
    value: a,
    defaultValue: i ?? Zz(r, n),
    onChange: o
  }), [J, Q] = Ye(!1), [ee, oe] = Ye(!1), D = !(d || f), ce = (n - r) / 10, fe = h || (n - r) / 100, F = Ca(X, r, n), N = n - F + r, T = Ps(j ? N : F, r, n), A = c === "vertical", B = zy({
    min: r,
    max: n,
    step: h,
    isDisabled: d,
    value: F,
    isInteractive: D,
    isReversed: j,
    isVertical: A,
    eventSource: null,
    focusThumbOnChange: w,
    orientation: c
  }), C = be(null), H = be(null), O = be(null), Z = _r(), Y = u ?? Z, [ae, R] = [`slider-thumb-${Y}`, `slider-track-${Y}`], Se = G(
    (te) => {
      var ve, kr;
      if (!C.current)
        return;
      const q = B.current;
      q.eventSource = "pointer";
      const ie = C.current.getBoundingClientRect(), { clientX: xe, clientY: Ce } = (kr = (ve = te.touches) == null ? void 0 : ve[0]) != null ? kr : te, He = A ? ie.bottom - Ce : xe - ie.left, wt = A ? ie.height : ie.width;
      let Ze = He / wt;
      j && (Ze = 1 - Ze);
      let nt = gb(Ze, q.min, q.max);
      return q.step && (nt = parseFloat(
        uu(nt, q.min, q.step)
      )), nt = Ca(nt, q.min, q.max), nt;
    },
    [A, j, B]
  ), he = G(
    (te) => {
      const ve = B.current;
      ve.isInteractive && (te = parseFloat(uu(te, ve.min, fe)), te = Ca(te, ve.min, ve.max), ne(te));
    },
    [fe, ne, B]
  ), le = gt(
    () => ({
      stepUp(te = fe) {
        const ve = j ? F - te : F + te;
        he(ve);
      },
      stepDown(te = fe) {
        const ve = j ? F + te : F - te;
        he(ve);
      },
      reset() {
        he(i || 0);
      },
      stepTo(te) {
        he(te);
      }
    }),
    [he, j, F, fe, i]
  ), De = G(
    (te) => {
      const ve = B.current, q = {
        ArrowRight: () => le.stepUp(),
        ArrowUp: () => le.stepUp(),
        ArrowLeft: () => le.stepDown(),
        ArrowDown: () => le.stepDown(),
        PageUp: () => le.stepUp(ce),
        PageDown: () => le.stepDown(ce),
        Home: () => he(ve.min),
        End: () => he(ve.max)
      }[te.key];
      q && (te.preventDefault(), te.stopPropagation(), q(te), ve.eventSource = "keyboard");
    },
    [le, he, ce, B]
  ), ye = (t = z == null ? void 0 : z(F)) != null ? t : b, we = Bz(H), { getThumbStyle: ht, rootStyle: ke, trackStyle: dt, innerTrackStyle: rt } = gt(() => {
    const te = B.current, ve = we ?? { width: 0, height: 0 };
    return Fy({
      isReversed: j,
      orientation: te.orientation,
      thumbRects: [ve],
      thumbPercents: [T]
    });
  }, [j, we, T, B]), Ie = G(() => {
    B.current.focusThumbOnChange && setTimeout(() => {
      var ve;
      return (ve = H.current) == null ? void 0 : ve.focus();
    });
  }, [B]);
  zo(() => {
    const te = B.current;
    Ie(), te.eventSource === "keyboard" && (I == null || I(te.value));
  }, [F, I]);
  function se(te) {
    const ve = Se(te);
    ve != null && ve !== B.current.value && ne(ve);
  }
  Vy(O, {
    onPanSessionStart(te) {
      const ve = B.current;
      ve.isInteractive && (Q(!0), Ie(), se(te), P == null || P(ve.value));
    },
    onPanSessionEnd() {
      const te = B.current;
      te.isInteractive && (Q(!1), I == null || I(te.value));
    },
    onPan(te) {
      B.current.isInteractive && se(te);
    }
  });
  const Oe = G(
    (te = {}, ve = null) => ({
      ...te,
      ...M,
      ref: St(ve, O),
      tabIndex: -1,
      "aria-disabled": ko(d),
      "data-focused": ar(ee),
      style: {
        ...te.style,
        ...ke
      }
    }),
    [M, d, ee, ke]
  ), Ot = G(
    (te = {}, ve = null) => ({
      ...te,
      ref: St(ve, C),
      id: R,
      "data-disabled": ar(d),
      style: {
        ...te.style,
        ...dt
      }
    }),
    [d, R, dt]
  ), xt = G(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      style: {
        ...te.style,
        ...rt
      }
    }),
    [rt]
  ), lt = G(
    (te = {}, ve = null) => ({
      ...te,
      ref: St(ve, H),
      role: "slider",
      tabIndex: D ? 0 : void 0,
      id: ae,
      "data-active": ar(J),
      "aria-valuetext": ye,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": F,
      "aria-orientation": c,
      "aria-disabled": ko(d),
      "aria-readonly": ko(f),
      "aria-label": y,
      "aria-labelledby": y ? void 0 : S,
      style: {
        ...te.style,
        ...ht(0)
      },
      onKeyDown: Eo(te.onKeyDown, De),
      onFocus: Eo(te.onFocus, () => oe(!0)),
      onBlur: Eo(te.onBlur, () => oe(!1))
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
      De
    ]
  ), Vr = G(
    (te, ve = null) => {
      const kr = !(te.value < r || te.value > n), q = F >= te.value, ie = Ps(te.value, r, n), xe = {
        position: "absolute",
        pointerEvents: "none",
        ...Kz({
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
        "data-disabled": ar(d),
        "data-invalid": ar(!kr),
        "data-highlighted": ar(q),
        style: {
          ...te.style,
          ...xe
        }
      };
    },
    [d, j, n, r, c, F]
  ), Lr = G(
    (te = {}, ve = null) => ({
      ...te,
      ref: ve,
      type: "hidden",
      value: F,
      name: _
    }),
    [_, F]
  );
  return {
    state: { value: F, isFocused: ee, isDragging: J },
    actions: le,
    getRootProps: Oe,
    getTrackProps: Ot,
    getInnerTrackProps: xt,
    getThumbProps: lt,
    getMarkerProps: Vr,
    getInputProps: Lr
  };
}
function Kz(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function Zz(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [Jz, sl] = Nt({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [Qz, ll] = Nt({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), eV = _e((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Bo("Slider", n), a = Br(n), { direction: i } = sn();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = Xz(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ L.jsx(Jz, { value: c, children: /* @__PURE__ */ L.jsx(Qz, { value: o, children: /* @__PURE__ */ L.jsxs(
    ge.div,
    {
      ...u,
      className: En("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ L.jsx("input", { ...d })
      ]
    }
  ) }) });
});
eV.displayName = "Slider";
var tV = _e((e, t) => {
  const { getThumbProps: r } = sl(), n = ll(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: En("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
tV.displayName = "SliderThumb";
var rV = _e((e, t) => {
  const { getTrackProps: r } = sl(), n = ll(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: En("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
rV.displayName = "SliderTrack";
var nV = _e(
  (e, t) => {
    const { getInnerTrackProps: r } = sl(), n = ll(), o = r(e, t);
    return /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ...o,
        className: En("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
nV.displayName = "SliderFilledTrack";
var oV = _e((e, t) => {
  const { getMarkerProps: r } = sl(), n = ll(), o = r(e, t);
  return /* @__PURE__ */ L.jsx(
    ge.div,
    {
      ...o,
      className: En("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
oV.displayName = "SliderMark";
var aV = {
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
}, xu = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, is = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function iV(e = {}) {
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
    offset: _,
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
    offset: _,
    direction: w
  }), Q = _r(), oe = `tooltip-${d ?? Q}`, D = be(null), ce = be(), fe = G(() => {
    ce.current && (clearTimeout(ce.current), ce.current = void 0);
  }, []), F = be(), N = G(() => {
    F.current && (clearTimeout(F.current), F.current = void 0);
  }, []), V = G(() => {
    N(), z();
  }, [z, N]), T = sV(D, V), A = G(() => {
    if (!y && !ce.current) {
      P && T();
      const R = is(D);
      ce.current = R.setTimeout(I, t);
    }
  }, [T, y, P, I, t]), B = G(() => {
    fe();
    const R = is(D);
    F.current = R.setTimeout(V, r);
  }, [r, V, fe]), C = G(() => {
    P && n && B();
  }, [n, B, P]), H = G(() => {
    P && i && B();
  }, [i, B, P]), O = G(
    (R) => {
      P && R.key === "Escape" && B();
    },
    [P, B]
  );
  _a(
    () => xu(D),
    "keydown",
    s ? O : void 0
  ), _a(
    () => {
      if (!a)
        return null;
      const R = D.current;
      if (!R)
        return null;
      const Se = Jb(R);
      return Se.localName === "body" ? is(D) : Se;
    },
    "scroll",
    () => {
      P && a && V();
    },
    { passive: !0, capture: !0 }
  ), Fe(() => {
    y && (fe(), P && z());
  }, [y, P, z, fe]), Fe(() => () => {
    fe(), N();
  }, [fe, N]), _a(() => D.current, "pointerleave", B);
  const Z = G(
    (R = {}, Se = null) => ({
      ...R,
      ref: St(D, Se, j),
      onPointerEnter: $t(R.onPointerEnter, (le) => {
        le.pointerType !== "touch" && A();
      }),
      onClick: $t(R.onClick, C),
      onPointerDown: $t(R.onPointerDown, H),
      onFocus: $t(R.onFocus, A),
      onBlur: $t(R.onBlur, B),
      "aria-describedby": P ? oe : void 0
    }),
    [
      A,
      B,
      H,
      P,
      oe,
      C,
      j
    ]
  ), Y = G(
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
  ), ae = G(
    (R = {}, Se = null) => {
      const he = {
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
        style: he
      };
    },
    [M, oe]
  );
  return {
    isOpen: P,
    show: A,
    hide: B,
    getTriggerProps: Z,
    getTooltipProps: ae,
    getTooltipPositionerProps: Y,
    getArrowProps: J,
    getArrowInnerProps: ne
  };
}
var wc = "chakra-ui:close-tooltip";
function sV(e, t) {
  return Fe(() => {
    const r = xu(e);
    return r.addEventListener(wc, t), () => r.removeEventListener(wc, t);
  }, [t, e]), () => {
    const r = xu(e), n = is(e);
    r.dispatchEvent(new n.CustomEvent(wc));
  };
}
function lV(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function cV(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var uV = ge(_n.div), dV = _e((e, t) => {
  var r, n;
  const o = jo("Tooltip", e), a = Br(e), i = sn(), {
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
    const X = Hk(i, "colors", S);
    o[Et.arrowBg.var] = X;
  }
  const _ = iV({ ...y, direction: i.direction }), w = typeof s == "string" || c;
  let M;
  if (w)
    M = /* @__PURE__ */ L.jsx(
      ge.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ..._.getTriggerProps(),
        children: s
      }
    );
  else {
    const X = Ds.only(s);
    M = Ka(
      X,
      _.getTriggerProps(X.props, X.ref)
    );
  }
  const P = !!u, I = _.getTooltipProps({}, t), z = P ? lV(I, ["role", "id"]) : I, j = cV(I, ["role", "id"]);
  return l ? /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
    M,
    /* @__PURE__ */ L.jsx(Vo, { children: _.isOpen && /* @__PURE__ */ L.jsx(Qa, { ...p, children: /* @__PURE__ */ L.jsx(
      ge.div,
      {
        ..._.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ L.jsxs(
          uV,
          {
            variants: aV,
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
dV.displayName = "Tooltip";
const QV = At(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ L.jsx(zm, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  EV as $,
  _c as A,
  vV as B,
  k0 as C,
  Cu as D,
  gV as E,
  zm as F,
  QV as G,
  Wn as H,
  zF as I,
  vz as J,
  iz as K,
  hz as L,
  Ty as M,
  bz as N,
  gz as O,
  pz as P,
  Gw as Q,
  lB as R,
  O0 as S,
  Ra as T,
  pN as U,
  mB as V,
  pB as W,
  uB as X,
  vB as Y,
  l_ as Z,
  P0 as _,
  On as a,
  Qa as a$,
  s_ as a0,
  sn as a1,
  GV as a2,
  Bo as a3,
  fN as a4,
  jo as a5,
  lF as a6,
  vd as a7,
  ge as a8,
  PV as a9,
  Mv as aA,
  Lt as aB,
  zV as aC,
  _$ as aD,
  jV as aE,
  VV as aF,
  C$ as aG,
  Ep as aH,
  BV as aI,
  OV as aJ,
  kV as aK,
  m$ as aL,
  b$ as aM,
  zk as aN,
  g_ as aO,
  q$ as aP,
  Jt as aQ,
  WV as aR,
  zo as aS,
  _n as aT,
  mn as aU,
  _e as aV,
  Nt as aW,
  Xe as aX,
  Br as aY,
  cb as aZ,
  Vo as a_,
  _y as aa,
  YV as ab,
  AF as ac,
  IF as ad,
  DF as ae,
  uN as af,
  Ms as ag,
  $$ as ah,
  Uj as ai,
  eV as aj,
  rV as ak,
  nV as al,
  tV as am,
  Uz as an,
  Yz as ao,
  Gz as ap,
  Hz as aq,
  JV as ar,
  fz as as,
  mV as at,
  Bu as au,
  wV as av,
  _V as aw,
  i_ as ax,
  Fa as ay,
  sv as az,
  at as b,
  Xj as b$,
  lv as b0,
  c$ as b1,
  u$ as b2,
  bF as b3,
  gd as b4,
  St as b5,
  $t as b6,
  AV as b7,
  lu as b8,
  Qr as b9,
  Et as bA,
  Lo as bB,
  RV as bC,
  de as bD,
  TV as bE,
  SN as bF,
  Ke as bG,
  $E as bH,
  RE as bI,
  $V as bJ,
  jE as bK,
  AE as bL,
  WE as bM,
  MV as bN,
  eC as bO,
  rC as bP,
  ny as bQ,
  MF as bR,
  OF as bS,
  vb as bT,
  mb as bU,
  $F as bV,
  dN as bW,
  ly as bX,
  ay as bY,
  vN as bZ,
  Cy as b_,
  Ar as ba,
  hb as bb,
  HV as bc,
  FF as bd,
  T_ as be,
  Ca as bf,
  jF as bg,
  BF as bh,
  _a as bi,
  Pl as bj,
  NV as bk,
  FV as bl,
  sN as bm,
  k_ as bn,
  iy as bo,
  hN as bp,
  Uo as bq,
  KV as br,
  XV as bs,
  cB as bt,
  yy as bu,
  by as bv,
  Gj as bw,
  CN as bx,
  qV as by,
  qj as bz,
  ZS as c,
  hk as c$,
  Qj as c0,
  tB as c1,
  rB as c2,
  Wo as c3,
  Jj as c4,
  Zj as c5,
  Kj as c6,
  wy as c7,
  nB as c8,
  oB as c9,
  je as cA,
  Dn as cB,
  Y_ as cC,
  mk as cD,
  DV as cE,
  Nc as cF,
  G_ as cG,
  Ak as cH,
  fs as cI,
  Hk as cJ,
  Bk as cK,
  uv as cL,
  q_ as cM,
  Dk as cN,
  or as cO,
  X_ as cP,
  tk as cQ,
  pa as cR,
  Rk as cS,
  hv as cT,
  Us as cU,
  Uk as cV,
  rk as cW,
  sk as cX,
  Je as cY,
  Lu as cZ,
  nk as c_,
  ZV as ca,
  $B as cb,
  Iy as cc,
  lz as cd,
  TB as ce,
  wn as cf,
  Ey as cg,
  Xn as ch,
  v_ as ci,
  G$ as cj,
  qz as ck,
  Lz as cl,
  oV as cm,
  Jz as cn,
  zz as co,
  al as cp,
  il as cq,
  Xz as cr,
  sl as cs,
  ll as ct,
  I$ as cu,
  Yl as cv,
  H$ as cw,
  LV as cx,
  fk as cy,
  Wi as cz,
  yr as d,
  pk as d0,
  R_ as d1,
  ok as d2,
  ak as d3,
  ik as d4,
  Gk as d5,
  Yk as d6,
  IV as d7,
  iV as d8,
  xF as d9,
  wF as da,
  pb as db,
  _F as dc,
  db as dd,
  cu as de,
  fb as df,
  ua as dg,
  Um as e,
  JS as f,
  bV as g,
  QS as h,
  wm as i,
  In as j,
  yV as k,
  vf as l,
  a1 as m,
  SV as n,
  L as o,
  tC as p,
  Yn as q,
  hV as r,
  Ec as s,
  xV as t,
  CV as u,
  w1 as v,
  Em as w,
  dV as x,
  sy as y,
  Ta as z
};
