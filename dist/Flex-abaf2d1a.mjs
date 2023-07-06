import * as W from "react";
import At, { createContext as Fr, forwardRef as kt, createElement as Qt, Fragment as rm, useContext as ht, useLayoutEffect as ou, useEffect as Ze, useState as Ct, useRef as Re, useMemo as Nt, useCallback as ue, useInsertionEffect as nm, useId as bn, cloneElement as om, Children as am, isValidElement as e0, PureComponent as t0 } from "react";
import { createPortal as im } from "react-dom";
var ni = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xs(e) {
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
var sc = { exports: {} }, Mo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function r0() {
  if (Td)
    return Mo;
  Td = 1;
  var e = At, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Mo.Fragment = r, Mo.jsx = i, Mo.jsxs = i, Mo;
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
var Pd;
function n0() {
  return Pd || (Pd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = At, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function g(y) {
      if (y === null || typeof y != "object")
        return null;
      var z = m && y[m] || y[h];
      return typeof z == "function" ? z : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(y) {
      {
        for (var z = arguments.length, q = new Array(z > 1 ? z - 1 : 0), he = 1; he < z; he++)
          q[he - 1] = arguments[he];
        w("error", y, q);
      }
    }
    function w(y, z, q) {
      {
        var he = x.ReactDebugCurrentFrame, Ae = he.getStackAddendum();
        Ae !== "" && (z += "%s", q = q.concat([Ae]));
        var Te = q.map(function(_e) {
          return String(_e);
        });
        Te.unshift("Warning: " + z), Function.prototype.apply.call(console[y], console, Te);
      }
    }
    var T = !1, b = !1, j = !1, D = !1, B = !1, V;
    V = Symbol.for("react.module.reference");
    function N(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === a || B || y === o || y === c || y === u || D || y === p || T || b || j || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === d || y.$$typeof === i || y.$$typeof === s || y.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === V || y.getModuleId !== void 0));
    }
    function X(y, z, q) {
      var he = y.displayName;
      if (he)
        return he;
      var Ae = z.displayName || z.name || "";
      return Ae !== "" ? q + "(" + Ae + ")" : q;
    }
    function ae(y) {
      return y.displayName || "Context";
    }
    function te(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
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
      if (typeof y == "object")
        switch (y.$$typeof) {
          case s:
            var z = y;
            return ae(z) + ".Consumer";
          case i:
            var q = y;
            return ae(q._context) + ".Provider";
          case l:
            return X(y, y.render, "ForwardRef");
          case d:
            var he = y.displayName || null;
            return he !== null ? he : te(y.type) || "Memo";
          case f: {
            var Ae = y, Te = Ae._payload, _e = Ae._init;
            try {
              return te(_e(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, J = 0, ie, K, ve, pe, O, M, F;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function R() {
      {
        if (J === 0) {
          ie = console.log, K = console.info, ve = console.warn, pe = console.error, O = console.group, M = console.groupCollapsed, F = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        J++;
      }
    }
    function I() {
      {
        if (J--, J === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, y, {
              value: ie
            }),
            info: Z({}, y, {
              value: K
            }),
            warn: Z({}, y, {
              value: ve
            }),
            error: Z({}, y, {
              value: pe
            }),
            group: Z({}, y, {
              value: O
            }),
            groupCollapsed: Z({}, y, {
              value: M
            }),
            groupEnd: Z({}, y, {
              value: F
            })
          });
        }
        J < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var C = x.ReactCurrentDispatcher, L;
    function $(y, z, q) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var he = Ae.stack.trim().match(/\n( *(at )?)/);
            L = he && he[1] || "";
          }
        return `
` + L + y;
      }
    }
    var G = !1, U;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      U = new re();
    }
    function _(y, z) {
      if (!y || G)
        return "";
      {
        var q = U.get(y);
        if (q !== void 0)
          return q;
      }
      var he;
      G = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = C.current, C.current = null, R();
      try {
        if (z) {
          var _e = function() {
            throw Error();
          };
          if (Object.defineProperty(_e.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_e, []);
            } catch (Dt) {
              he = Dt;
            }
            Reflect.construct(y, [], _e);
          } else {
            try {
              _e.call();
            } catch (Dt) {
              he = Dt;
            }
            y.call(_e.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Dt) {
            he = Dt;
          }
          y();
        }
      } catch (Dt) {
        if (Dt && he && typeof Dt.stack == "string") {
          for (var Ce = Dt.stack.split(`
`), yt = he.stack.split(`
`), nt = Ce.length - 1, lt = yt.length - 1; nt >= 1 && lt >= 0 && Ce[nt] !== yt[lt]; )
            lt--;
          for (; nt >= 1 && lt >= 0; nt--, lt--)
            if (Ce[nt] !== yt[lt]) {
              if (nt !== 1 || lt !== 1)
                do
                  if (nt--, lt--, lt < 0 || Ce[nt] !== yt[lt]) {
                    var Ot = `
` + Ce[nt].replace(" at new ", " at ");
                    return y.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", y.displayName)), typeof y == "function" && U.set(y, Ot), Ot;
                  }
                while (nt >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        G = !1, C.current = Te, I(), Error.prepareStackTrace = Ae;
      }
      var Cr = y ? y.displayName || y.name : "", Qa = Cr ? $(Cr) : "";
      return typeof y == "function" && U.set(y, Qa), Qa;
    }
    function de(y, z, q) {
      return _(y, !1);
    }
    function le(y) {
      var z = y.prototype;
      return !!(z && z.isReactComponent);
    }
    function oe(y, z, q) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return _(y, le(y));
      if (typeof y == "string")
        return $(y);
      switch (y) {
        case c:
          return $("Suspense");
        case u:
          return $("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case l:
            return de(y.render);
          case d:
            return oe(y.type, z, q);
          case f: {
            var he = y, Ae = he._payload, Te = he._init;
            try {
              return oe(Te(Ae), z, q);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, be = {}, xe = x.ReactDebugCurrentFrame;
    function dt(y) {
      if (y) {
        var z = y._owner, q = oe(y.type, y._source, z ? z.type : null);
        xe.setExtraStackFrame(q);
      } else
        xe.setExtraStackFrame(null);
    }
    function we(y, z, q, he, Ae) {
      {
        var Te = Function.call.bind($e);
        for (var _e in y)
          if (Te(y, _e)) {
            var Ce = void 0;
            try {
              if (typeof y[_e] != "function") {
                var yt = Error((he || "React class") + ": " + q + " type `" + _e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[_e] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw yt.name = "Invariant Violation", yt;
              }
              Ce = y[_e](z, _e, he, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Ce = nt;
            }
            Ce && !(Ce instanceof Error) && (dt(Ae), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", q, _e, typeof Ce), dt(null)), Ce instanceof Error && !(Ce.message in be) && (be[Ce.message] = !0, dt(Ae), S("Failed %s type: %s", q, Ce.message), dt(null));
          }
      }
    }
    var ct = Array.isArray;
    function tt(y) {
      return ct(y);
    }
    function Oe(y) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, q = z && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return q;
      }
    }
    function se(y) {
      try {
        return ke(y), !1;
      } catch {
        return !0;
      }
    }
    function ke(y) {
      return "" + y;
    }
    function Tt(y) {
      if (se(y))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oe(y)), ke(y);
    }
    var gt = x.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jr, Nr, Br;
    Br = {};
    function Q(y) {
      if ($e.call(y, "ref")) {
        var z = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function ge(y) {
      if ($e.call(y, "key")) {
        var z = Object.getOwnPropertyDescriptor(y, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function Sr(y, z) {
      if (typeof y.ref == "string" && gt.current && z && gt.current.stateNode !== z) {
        var q = te(gt.current.type);
        Br[q] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(gt.current.type), y.ref), Br[q] = !0);
      }
    }
    function H(y, z) {
      {
        var q = function() {
          jr || (jr = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        q.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function ne(y, z) {
      {
        var q = function() {
          Nr || (Nr = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        q.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var ye = function(y, z, q, he, Ae, Te, _e) {
      var Ce = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: y,
        key: z,
        ref: q,
        props: _e,
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
        value: he
      }), Object.defineProperty(Ce, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(Ce.props), Object.freeze(Ce)), Ce;
    };
    function Se(y, z, q, he, Ae) {
      {
        var Te, _e = {}, Ce = null, yt = null;
        q !== void 0 && (Tt(q), Ce = "" + q), ge(z) && (Tt(z.key), Ce = "" + z.key), Q(z) && (yt = z.ref, Sr(z, Ae));
        for (Te in z)
          $e.call(z, Te) && !st.hasOwnProperty(Te) && (_e[Te] = z[Te]);
        if (y && y.defaultProps) {
          var nt = y.defaultProps;
          for (Te in nt)
            _e[Te] === void 0 && (_e[Te] = nt[Te]);
        }
        if (Ce || yt) {
          var lt = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          Ce && H(_e, lt), yt && ne(_e, lt);
        }
        return ye(y, Ce, yt, Ae, he, gt.current, _e);
      }
    }
    var He = x.ReactCurrentOwner, bt = x.ReactDebugCurrentFrame;
    function Xe(y) {
      if (y) {
        var z = y._owner, q = oe(y.type, y._source, z ? z.type : null);
        bt.setExtraStackFrame(q);
      } else
        bt.setExtraStackFrame(null);
    }
    var rt;
    rt = !1;
    function Vr(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }
    function wr() {
      {
        if (He.current) {
          var y = te(He.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function Gs(y) {
      {
        if (y !== void 0) {
          var z = y.fileName.replace(/^.*[\\\/]/, ""), q = y.lineNumber;
          return `

Check your code at ` + z + ":" + q + ".";
        }
        return "";
      }
    }
    var Xa = {};
    function qs(y) {
      {
        var z = wr();
        if (!z) {
          var q = typeof y == "string" ? y : y.displayName || y.name;
          q && (z = `

Check the top-level render call using <` + q + ">.");
        }
        return z;
      }
    }
    function Ka(y, z) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var q = qs(z);
        if (Xa[q])
          return;
        Xa[q] = !0;
        var he = "";
        y && y._owner && y._owner !== He.current && (he = " It was passed a child from " + te(y._owner.type) + "."), Xe(y), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, he), Xe(null);
      }
    }
    function Za(y, z) {
      {
        if (typeof y != "object")
          return;
        if (tt(y))
          for (var q = 0; q < y.length; q++) {
            var he = y[q];
            Vr(he) && Ka(he, z);
          }
        else if (Vr(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var Ae = g(y);
          if (typeof Ae == "function" && Ae !== y.entries)
            for (var Te = Ae.call(y), _e; !(_e = Te.next()).done; )
              Vr(_e.value) && Ka(_e.value, z);
        }
      }
    }
    function sr(y) {
      {
        var z = y.type;
        if (z == null || typeof z == "string")
          return;
        var q;
        if (typeof z == "function")
          q = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === d))
          q = z.propTypes;
        else
          return;
        if (q) {
          var he = te(z);
          we(q, y.props, "prop", he, y);
        } else if (z.PropTypes !== void 0 && !rt) {
          rt = !0;
          var Ae = te(z);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xs(y) {
      {
        for (var z = Object.keys(y.props), q = 0; q < z.length; q++) {
          var he = z[q];
          if (he !== "children" && he !== "key") {
            Xe(y), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Xe(null);
            break;
          }
        }
        y.ref !== null && (Xe(y), S("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function Ja(y, z, q, he, Ae, Te) {
      {
        var _e = N(y);
        if (!_e) {
          var Ce = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var yt = Gs(Ae);
          yt ? Ce += yt : Ce += wr();
          var nt;
          y === null ? nt = "null" : tt(y) ? nt = "array" : y !== void 0 && y.$$typeof === t ? (nt = "<" + (te(y.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof y, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Ce);
        }
        var lt = Se(y, z, q, Ae, Te);
        if (lt == null)
          return lt;
        if (_e) {
          var Ot = z.children;
          if (Ot !== void 0)
            if (he)
              if (tt(Ot)) {
                for (var Cr = 0; Cr < Ot.length; Cr++)
                  Za(Ot[Cr], y);
                Object.freeze && Object.freeze(Ot);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Za(Ot, y);
        }
        return y === n ? Xs(lt) : sr(lt), lt;
      }
    }
    function Ks(y, z, q) {
      return Ja(y, z, q, !0);
    }
    function Zs(y, z, q) {
      return Ja(y, z, q, !1);
    }
    var Js = Zs, nn = Ks;
    Fo.Fragment = n, Fo.jsx = Js, Fo.jsxs = nn;
  }()), Fo;
}
process.env.NODE_ENV === "production" ? sc.exports = r0() : sc.exports = n0();
var Y = sc.exports, fa = {};
function pa(e) {
  "@babel/helpers - typeof";
  return pa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pa(e);
}
function o0(e, t) {
  if (pa(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pa(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a0(e) {
  var t = o0(e, "string");
  return pa(t) === "symbol" ? t : String(t);
}
function au(e, t, r) {
  return t = a0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function i0(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var s0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, sm = i0(
  function(e) {
    return s0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function lc(e, t) {
  return lc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, lc(e, t);
}
function l0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, lc(e, t);
}
function c0(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function u0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t;
}
var d0 = /* @__PURE__ */ function() {
  function e(r) {
    this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.before = null;
  }
  var t = e.prototype;
  return t.insert = function(n) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      var o = u0(this), a;
      this.tags.length === 0 ? a = this.before : a = this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(o, a), this.tags.push(o);
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = c0(i);
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
function f0(e) {
  function t(F, P, R, I, C) {
    for (var L = 0, $ = 0, G = 0, U = 0, re, _, de = 0, le = 0, oe, $e = oe = re = 0, be = 0, xe = 0, dt = 0, we = 0, ct = R.length, tt = ct - 1, Oe, se = "", ke = "", Tt = "", gt = "", st; be < ct; ) {
      if (_ = R.charCodeAt(be), be === tt && $ + U + G + L !== 0 && ($ !== 0 && (_ = $ === 47 ? 10 : 47), U = G = L = 0, ct++, tt++), $ + U + G + L === 0) {
        if (be === tt && (0 < xe && (se = se.replace(f, "")), 0 < se.trim().length)) {
          switch (_) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              se += R.charAt(be);
          }
          _ = 59;
        }
        switch (_) {
          case 123:
            for (se = se.trim(), re = se.charCodeAt(0), oe = 1, we = ++be; be < ct; ) {
              switch (_ = R.charCodeAt(be)) {
                case 123:
                  oe++;
                  break;
                case 125:
                  oe--;
                  break;
                case 47:
                  switch (_ = R.charCodeAt(be + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for ($e = be + 1; $e < tt; ++$e)
                          switch (R.charCodeAt($e)) {
                            case 47:
                              if (_ === 42 && R.charCodeAt($e - 1) === 42 && be + 2 !== $e) {
                                be = $e + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (_ === 47) {
                                be = $e + 1;
                                break e;
                              }
                          }
                        be = $e;
                      }
                  }
                  break;
                case 91:
                  _++;
                case 40:
                  _++;
                case 34:
                case 39:
                  for (; be++ < tt && R.charCodeAt(be) !== _; )
                    ;
              }
              if (oe === 0)
                break;
              be++;
            }
            switch (oe = R.substring(we, be), re === 0 && (re = (se = se.replace(d, "").trim()).charCodeAt(0)), re) {
              case 64:
                switch (0 < xe && (se = se.replace(f, "")), _ = se.charCodeAt(1), _) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    xe = P;
                    break;
                  default:
                    xe = ie;
                }
                if (oe = t(P, xe, oe, _, C + 1), we = oe.length, 0 < ve && (xe = r(ie, se, dt), st = s(3, oe, xe, P, te, ae, we, _, C, I), se = xe.join(""), st !== void 0 && (we = (oe = st.trim()).length) === 0 && (_ = 0, oe = "")), 0 < we)
                  switch (_) {
                    case 115:
                      se = se.replace(j, i);
                    case 100:
                    case 109:
                    case 45:
                      oe = se + "{" + oe + "}";
                      break;
                    case 107:
                      se = se.replace(S, "$1 $2"), oe = se + "{" + oe + "}", oe = J === 1 || J === 2 && a("@" + oe, 3) ? "@-webkit-" + oe + "@" + oe : "@" + oe;
                      break;
                    default:
                      oe = se + oe, I === 112 && (oe = (ke += oe, ""));
                  }
                else
                  oe = "";
                break;
              default:
                oe = t(P, r(P, se, dt), oe, I, C + 1);
            }
            Tt += oe, oe = dt = xe = $e = re = 0, se = "", _ = R.charCodeAt(++be);
            break;
          case 125:
          case 59:
            if (se = (0 < xe ? se.replace(f, "") : se).trim(), 1 < (we = se.length))
              switch ($e === 0 && (re = se.charCodeAt(0), re === 45 || 96 < re && 123 > re) && (we = (se = se.replace(" ", ":")).length), 0 < ve && (st = s(1, se, P, F, te, ae, ke.length, I, C, I)) !== void 0 && (we = (se = st.trim()).length) === 0 && (se = "\0\0"), re = se.charCodeAt(0), _ = se.charCodeAt(1), re) {
                case 0:
                  break;
                case 64:
                  if (_ === 105 || _ === 99) {
                    gt += se + R.charAt(be);
                    break;
                  }
                default:
                  se.charCodeAt(we - 1) !== 58 && (ke += o(se, re, _, se.charCodeAt(2)));
              }
            dt = xe = $e = re = 0, se = "", _ = R.charCodeAt(++be);
        }
      }
      switch (_) {
        case 13:
        case 10:
          $ === 47 ? $ = 0 : 1 + re === 0 && I !== 107 && 0 < se.length && (xe = 1, se += "\0"), 0 < ve * O && s(0, se, P, F, te, ae, ke.length, I, C, I), ae = 1, te++;
          break;
        case 59:
        case 125:
          if ($ + U + G + L === 0) {
            ae++;
            break;
          }
        default:
          switch (ae++, Oe = R.charAt(be), _) {
            case 9:
            case 32:
              if (U + L + $ === 0)
                switch (de) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Oe = "";
                    break;
                  default:
                    _ !== 32 && (Oe = " ");
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
              U + $ + L === 0 && (xe = dt = 1, Oe = "\f" + Oe);
              break;
            case 108:
              if (U + $ + L + Z === 0 && 0 < $e)
                switch (be - $e) {
                  case 2:
                    de === 112 && R.charCodeAt(be - 3) === 58 && (Z = de);
                  case 8:
                    le === 111 && (Z = le);
                }
              break;
            case 58:
              U + $ + L === 0 && ($e = be);
              break;
            case 44:
              $ + G + U + L === 0 && (xe = 1, Oe += "\r");
              break;
            case 34:
            case 39:
              $ === 0 && (U = U === _ ? 0 : U === 0 ? _ : U);
              break;
            case 91:
              U + $ + G === 0 && L++;
              break;
            case 93:
              U + $ + G === 0 && L--;
              break;
            case 41:
              U + $ + L === 0 && G--;
              break;
            case 40:
              if (U + $ + L === 0) {
                if (re === 0)
                  switch (2 * de + 3 * le) {
                    case 533:
                      break;
                    default:
                      re = 1;
                  }
                G++;
              }
              break;
            case 64:
              $ + G + U + L + $e + oe === 0 && (oe = 1);
              break;
            case 42:
            case 47:
              if (!(0 < U + L + G))
                switch ($) {
                  case 0:
                    switch (2 * _ + 3 * R.charCodeAt(be + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        we = be, $ = 42;
                    }
                    break;
                  case 42:
                    _ === 47 && de === 42 && we + 2 !== be && (R.charCodeAt(we + 2) === 33 && (ke += R.substring(we, be + 1)), Oe = "", $ = 0);
                }
          }
          $ === 0 && (se += Oe);
      }
      le = de, de = _, be++;
    }
    if (we = ke.length, 0 < we) {
      if (xe = P, 0 < ve && (st = s(2, ke, xe, F, te, ae, we, I, C, I), st !== void 0 && (ke = st).length === 0))
        return gt + ke + Tt;
      if (ke = xe.join(",") + "{" + ke + "}", J * Z !== 0) {
        switch (J !== 2 || a(ke, 2) || (Z = 0), Z) {
          case 111:
            ke = ke.replace(T, ":-moz-$1") + ke;
            break;
          case 112:
            ke = ke.replace(w, "::-webkit-input-$1") + ke.replace(w, "::-moz-$1") + ke.replace(w, ":-ms-input-$1") + ke;
        }
        Z = 0;
      }
    }
    return gt + ke + Tt;
  }
  function r(F, P, R) {
    var I = P.trim().split(g);
    P = I;
    var C = I.length, L = F.length;
    switch (L) {
      case 0:
      case 1:
        var $ = 0;
        for (F = L === 0 ? "" : F[0] + " "; $ < C; ++$)
          P[$] = n(F, P[$], R).trim();
        break;
      default:
        var G = $ = 0;
        for (P = []; $ < C; ++$)
          for (var U = 0; U < L; ++U)
            P[G++] = n(F[U] + " ", I[$], R).trim();
    }
    return P;
  }
  function n(F, P, R) {
    var I = P.charCodeAt(0);
    switch (33 > I && (I = (P = P.trim()).charCodeAt(0)), I) {
      case 38:
        return P.replace(x, "$1" + F.trim());
      case 58:
        return F.trim() + P.replace(x, "$1" + F.trim());
      default:
        if (0 < 1 * R && 0 < P.indexOf("\f"))
          return P.replace(x, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + P;
  }
  function o(F, P, R, I) {
    var C = F + ";", L = 2 * P + 3 * R + 4 * I;
    if (L === 944) {
      F = C.indexOf(":", 9) + 1;
      var $ = C.substring(F, C.length - 1).trim();
      return $ = C.substring(0, F).trim() + $ + ";", J === 1 || J === 2 && a($, 1) ? "-webkit-" + $ + $ : $;
    }
    if (J === 0 || J === 2 && !a(C, 1))
      return C;
    switch (L) {
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
        return $ = C.substring(C.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + $ + "-webkit-" + C + "-ms-flex-pack" + $ + C;
      case 1005:
        return m.test(C) ? C.replace(p, ":-webkit-") + C.replace(p, ":-moz-") + C : C;
      case 1e3:
        switch ($ = C.substring(13).trim(), P = $.indexOf("-") + 1, $.charCodeAt(0) + $.charCodeAt(P)) {
          case 226:
            $ = C.replace(b, "tb");
            break;
          case 232:
            $ = C.replace(b, "tb-rl");
            break;
          case 220:
            $ = C.replace(b, "lr");
            break;
          default:
            return C;
        }
        return "-webkit-" + C + "-ms-" + $ + C;
      case 1017:
        if (C.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (P = (C = F).length - 10, $ = (C.charCodeAt(P) === 33 ? C.substring(0, P) : C).substring(F.indexOf(":", 7) + 1).trim(), L = $.charCodeAt(0) + ($.charCodeAt(7) | 0)) {
          case 203:
            if (111 > $.charCodeAt(8))
              break;
          case 115:
            C = C.replace($, "-webkit-" + $) + ";" + C;
            break;
          case 207:
          case 102:
            C = C.replace($, "-webkit-" + (102 < L ? "inline-" : "") + "box") + ";" + C.replace($, "-webkit-" + $) + ";" + C.replace($, "-ms-" + $ + "box") + ";" + C;
        }
        return C + ";";
      case 938:
        if (C.charCodeAt(5) === 45)
          switch (C.charCodeAt(6)) {
            case 105:
              return $ = C.replace("-items", ""), "-webkit-" + C + "-webkit-box-" + $ + "-ms-flex-" + $ + C;
            case 115:
              return "-webkit-" + C + "-ms-flex-item-" + C.replace(B, "") + C;
            default:
              return "-webkit-" + C + "-ms-flex-line-pack" + C.replace("align-content", "").replace(B, "") + C;
          }
        break;
      case 973:
      case 989:
        if (C.charCodeAt(3) !== 45 || C.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (N.test(F) === !0)
          return ($ = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(F.replace("stretch", "fill-available"), P, R, I).replace(":fill-available", ":stretch") : C.replace($, "-webkit-" + $) + C.replace($, "-moz-" + $.replace("fill-", "")) + C;
        break;
      case 962:
        if (C = "-webkit-" + C + (C.charCodeAt(5) === 102 ? "-ms-" + C : "") + C, R + I === 211 && C.charCodeAt(13) === 105 && 0 < C.indexOf("transform", 10))
          return C.substring(0, C.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + C;
    }
    return C;
  }
  function a(F, P) {
    var R = F.indexOf(P === 1 ? ":" : "{"), I = F.substring(0, P !== 3 ? R : 10);
    return R = F.substring(R + 1, F.length - 1), pe(P !== 2 ? I : I.replace(V, "$1"), R, P);
  }
  function i(F, P) {
    var R = o(P, P.charCodeAt(0), P.charCodeAt(1), P.charCodeAt(2));
    return R !== P + ";" ? R.replace(D, " or ($1)").substring(4) : "(" + P + ")";
  }
  function s(F, P, R, I, C, L, $, G, U, re) {
    for (var _ = 0, de = P, le; _ < ve; ++_)
      switch (le = K[_].call(u, F, de, R, I, C, L, $, G, U, re)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          de = le;
      }
    if (de !== P)
      return de;
  }
  function l(F) {
    switch (F) {
      case void 0:
      case null:
        ve = K.length = 0;
        break;
      default:
        if (typeof F == "function")
          K[ve++] = F;
        else if (typeof F == "object")
          for (var P = 0, R = F.length; P < R; ++P)
            l(F[P]);
        else
          O = !!F | 0;
    }
    return l;
  }
  function c(F) {
    return F = F.prefix, F !== void 0 && (pe = null, F ? typeof F != "function" ? J = 1 : (J = 2, pe = F) : J = 0), c;
  }
  function u(F, P) {
    var R = F;
    if (33 > R.charCodeAt(0) && (R = R.trim()), M = R, R = [M], 0 < ve) {
      var I = s(-1, P, R, R, te, ae, 0, 0, 0, 0);
      I !== void 0 && typeof I == "string" && (P = I);
    }
    var C = t(ie, R, P, 0, 0);
    return 0 < ve && (I = s(-2, C, R, R, te, ae, C.length, 0, 0, 0), I !== void 0 && (C = I)), M = "", Z = 0, ae = te = 1, C;
  }
  var d = /^\0+/g, f = /[\0\r\f]/g, p = /: */g, m = /zoo|gra/, h = /([,: ])(transform)/g, g = /,\r+?/g, x = /([\t\r\n ])*\f?&/g, S = /@(k\w+)\s*(\S*)\s*/, w = /::(place)/g, T = /:(read-only)/g, b = /[svh]\w+-[tblr]{2}/, j = /\(\s*(.*)\s*\)/g, D = /([\s\S]*?);/g, B = /-self|flex-/g, V = /[^]*?(:[rp][el]a[\w-]+)[^]*/, N = /stretch|:\s*\w+\-(?:conte|avail)/, X = /([^-])(image-set\()/, ae = 1, te = 1, Z = 0, J = 1, ie = [], K = [], ve = 0, pe = null, O = 0, M = "";
  return u.use = l, u.set = c, e !== void 0 && c(e), u;
}
var $d = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
}, cc = "/*|*/", p0 = cc + "}";
function h0(e) {
  e && ha.current.insert(e + "}");
}
var ha = {
  current: null
}, m0 = function(t, r, n, o, a, i, s, l, c, u) {
  switch (t) {
    case 1: {
      switch (r.charCodeAt(0)) {
        case 64:
          return ha.current.insert(r + ";"), "";
        case 108:
          if (r.charCodeAt(2) === 98)
            return "";
      }
      break;
    }
    case 2: {
      if (l === 0)
        return r + cc;
      break;
    }
    case 3:
      switch (l) {
        case 102:
        case 112:
          return ha.current.insert(n[0] + r), "";
        default:
          return r + (u === 0 ? cc : "");
      }
    case -2:
      r.split(p0).forEach(h0);
  }
}, v0 = function(t) {
  t === void 0 && (t = {});
  var r = t.key || "css", n;
  t.prefix !== void 0 && (n = {
    prefix: t.prefix
  });
  var o = new f0(n);
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
  if (o.use(t.stylisPlugins)(m0), l = function(p, m, h, g) {
    var x = m.name;
    if (ha.current = h, process.env.NODE_ENV !== "production" && m.map !== void 0) {
      var S = m.map;
      ha.current = {
        insert: function(T) {
          h.insert(T + S);
        }
      };
    }
    o(p, m.styles), g && (d.inserted[x] = !0);
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
          g && d.compat !== !0 && g.forEach(function(x) {
            var S = new RegExp(x + ".*\\/\\* " + h + " \\*\\/"), w = S.test(p);
            x && !w && console.error('The pseudo class "' + x + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + x.split("-child")[0] + '-of-type".');
          });
          break;
        }
      }
    });
  }
  var d = {
    key: r,
    sheet: new d0({
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
}, g0 = !0;
function lm(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o]) : n += o + " ";
  }), n;
}
var cm = function(t, r, n) {
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
    g0 === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles), t.inserted[r.name] === void 0
  ) {
    var a = r;
    do
      t.insert("." + o, a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function b0(e) {
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
var y0 = {
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
};
function x0(e) {
  var t = {};
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ad = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, S0 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", w0 = /[A-Z]|^ms/g, um = /_EMO_([^_]+?)_([^]*?)_EMO_/g, iu = function(t) {
  return t.charCodeAt(1) === 45;
}, Rd = function(t) {
  return t != null && typeof t != "boolean";
}, ll = x0(function(e) {
  return iu(e) ? e : e.replace(w0, "-$&").toLowerCase();
}), Gi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(um, function(n, o, a) {
          return dr = {
            name: o,
            styles: a,
            next: dr
          }, o;
        });
  }
  return y0[t] !== 1 && !iu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var C0 = /(attr|calc|counters?|url)\(/, _0 = ["normal", "none", "counter", "open-quote", "close-quote", "no-open-quote", "no-close-quote", "initial", "inherit", "unset"], E0 = Gi, k0 = /^-ms-/, T0 = /-(.)/g, Od = {};
  Gi = function(t, r) {
    t === "content" && (typeof r != "string" || _0.indexOf(r) === -1 && !C0.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = E0(t, r);
    return n !== "" && !iu(t) && t.indexOf("-") !== -1 && Od[t] === void 0 && (Od[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(k0, "ms-").replace(T0, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Dd = !0;
function ma(e, t, r, n) {
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
        return dr = {
          name: r.name,
          styles: r.styles,
          next: dr
        }, r.name;
      if (r.styles !== void 0) {
        var o = r.next;
        if (o !== void 0)
          for (; o !== void 0; )
            dr = {
              name: o.name,
              styles: o.styles,
              next: dr
            }, o = o.next;
        var a = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (a += r.map), a;
      }
      return P0(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = dr, s = r(e);
        return dr = i, ma(e, t, s, n);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], c = r.replace(um, function(d, f, p) {
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
  return process.env.NODE_ENV !== "production" && n && Dd && u !== void 0 && (console.error("Interpolating a className from css`` is not recommended and will cause problems with composition.\nInterpolating a className from css`` will be completely unsupported in a future major version of Emotion"), Dd = !1), u !== void 0 && !n ? u : r;
}
function P0(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += ma(e, t, r[o], !1);
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : Rd(i) && (n += ll(a) + ":" + Gi(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Rd(i[s]) && (n += ll(a) + ":" + Gi(a, i[s]) + ";");
        else {
          var l = ma(e, t, i, !1);
          switch (a) {
            case "animation":
            case "animationName": {
              n += ll(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(S0), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Md = /label:\s*([^\s;\n{]+)\s*;/g, dm;
process.env.NODE_ENV !== "production" && (dm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//);
var dr, uc = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  dr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += ma(n, r, i, !1)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Ad), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += ma(n, r, t[s], a.charCodeAt(a.length - 1) === 46), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Ad), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(dm, function(f) {
    return l = f, "";
  })), Md.lastIndex = 0;
  for (var c = "", u; (u = Md.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = b0(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: dr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: dr
  };
}, $0 = Object.prototype.hasOwnProperty, fm = /* @__PURE__ */ Fr(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? v0() : null
), va = /* @__PURE__ */ Fr({});
fm.Provider;
var pm = function(t) {
  var r = function(o, a) {
    return /* @__PURE__ */ Qt(fm.Consumer, null, function(i) {
      return t(o, i, a);
    });
  };
  return /* @__PURE__ */ kt(r);
}, Fd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Id = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", A0 = function() {
  return null;
}, jd = function(t, r, n, o) {
  var a = n === null ? r.css : r.css(n);
  typeof a == "string" && t.registered[a] !== void 0 && (a = t.registered[a]);
  var i = r[Fd], s = [a], l = "";
  typeof r.className == "string" ? l = lm(t.registered, s, r.className) : r.className != null && (l = r.className + " ");
  var c = uc(s);
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = r[Id];
    u && (c = uc([c, "label:" + u + ";"]));
  }
  cm(t, c, typeof i == "string"), l += t.key + "-" + c.name;
  var d = {};
  for (var f in r)
    $0.call(r, f) && f !== "css" && f !== Fd && (process.env.NODE_ENV === "production" || f !== Id) && (d[f] = r[f]);
  d.ref = o, d.className = l;
  var p = /* @__PURE__ */ Qt(i, d), m = /* @__PURE__ */ Qt(A0, null);
  return /* @__PURE__ */ Qt(rm, null, m, p);
}, R0 = /* @__PURE__ */ pm(function(e, t, r) {
  return typeof e.css == "function" ? /* @__PURE__ */ Qt(va.Consumer, null, function(n) {
    return jd(t, e, n, r);
  }) : jd(t, e, null, r);
});
process.env.NODE_ENV !== "production" && (R0.displayName = "EmotionCssPropInternal");
var O0 = sm, D0 = function(t) {
  return t !== "theme" && t !== "innerRef";
}, Nd = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? O0 : D0;
};
function Bd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bd(Object(r), !0).forEach(function(n) {
      au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Vd = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, F0 = function() {
  return null;
}, I0 = function e(t, r) {
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
  var l = o || Nd(s), c = !l("as");
  return function() {
    var u = arguments, d = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (n !== void 0 && d.push("label:" + n + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Vd), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(Vd), d.push(u[p], u[0][p]);
    }
    var m = pm(function(h, g, x) {
      return /* @__PURE__ */ Qt(va.Consumer, null, function(S) {
        var w = c && h.as || s, T = "", b = [], j = h;
        if (h.theme == null) {
          j = {};
          for (var D in h)
            j[D] = h[D];
          j.theme = S;
        }
        typeof h.className == "string" ? T = lm(g.registered, b, h.className) : h.className != null && (T = h.className + " ");
        var B = uc(d.concat(b), g.registered, j);
        cm(g, B, typeof w == "string"), T += g.key + "-" + B.name, a !== void 0 && (T += " " + a);
        var V = c && o === void 0 ? Nd(w) : l, N = {};
        for (var X in h)
          c && X === "as" || // $FlowFixMe
          V(X) && (N[X] = h[X]);
        N.className = T, N.ref = x || h.innerRef, process.env.NODE_ENV !== "production" && h.innerRef && console.error("`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead" + (n === void 0 ? "" : " in the usage of `" + n + "`"));
        var ae = /* @__PURE__ */ Qt(w, N), te = /* @__PURE__ */ Qt(F0, null);
        return /* @__PURE__ */ Qt(rm, null, te, ae);
      });
    });
    return m.displayName = n !== void 0 ? n : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = s, m.__emotion_styles = d, m.__emotion_forwardProp = o, Object.defineProperty(m, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), m.withComponent = function(h, g) {
      return e(h, g !== void 0 ? M0({}, r || {}, {}, g) : r).apply(void 0, d);
    }, m;
  };
}, j0 = [
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
], dc = I0.bind();
j0.forEach(function(e) {
  dc[e] = dc(e);
});
const N0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dc
}, Symbol.toStringTag, { value: "Module" })), B0 = /* @__PURE__ */ xs(N0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cl, zd;
function hm() {
  if (zd)
    return cl;
  zd = 1;
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
  return cl = o() ? Object.assign : function(a, i) {
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
  }, cl;
}
var V0 = hm();
const vr = /* @__PURE__ */ ys(V0);
var Ld = function(t, r) {
  var n = vr({}, t, r);
  for (var o in t) {
    var a;
    !t[o] || typeof r[o] != "object" || vr(n, (a = {}, a[o] = vr(t[o], r[o]), a));
  }
  return n;
}, z0 = function(t) {
  var r = {};
  return Object.keys(t).sort(function(n, o) {
    return n.localeCompare(o, void 0, {
      numeric: !0,
      sensitivity: "base"
    });
  }).forEach(function(n) {
    r[n] = t[n];
  }), r;
}, L0 = {
  breakpoints: [40, 52, 64].map(function(e) {
    return e + "em";
  })
}, mm = function(t) {
  return "@media screen and (min-width: " + t + ")";
}, W0 = function(t, r) {
  return Kr(r, t, t);
}, Kr = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, Ia = function e(t) {
  var r = {}, n = function(i) {
    var s = {}, l = !1, c = i.theme && i.theme.disableStyledSystemCache;
    for (var u in i)
      if (t[u]) {
        var d = t[u], f = i[u], p = Kr(i.theme, d.scale, d.defaults);
        if (typeof f == "object") {
          if (r.breakpoints = !c && r.breakpoints || Kr(i.theme, "breakpoints", L0.breakpoints), Array.isArray(f)) {
            r.media = !c && r.media || [null].concat(r.breakpoints.map(mm)), s = Ld(s, U0(r.media, d, p, f, i));
            continue;
          }
          f !== null && (s = Ld(s, H0(r.breakpoints, d, p, f, i)), l = !0);
          continue;
        }
        vr(s, d(f, p, i));
      }
    return l && (s = z0(s)), s;
  };
  n.config = t, n.propNames = Object.keys(t), n.cache = r;
  var o = Object.keys(t).filter(function(a) {
    return a !== "config";
  });
  return o.length > 1 && o.forEach(function(a) {
    var i;
    n[a] = e((i = {}, i[a] = t[a], i));
  }), n;
}, U0 = function(t, r, n, o, a) {
  var i = {};
  return o.slice(0, t.length).forEach(function(s, l) {
    var c = t[l], u = r(s, n, a);
    if (!c)
      vr(i, u);
    else {
      var d;
      vr(i, (d = {}, d[c] = vr({}, i[c], u), d));
    }
  }), i;
}, H0 = function(t, r, n, o, a) {
  var i = {};
  for (var s in o) {
    var l = t[s], c = o[s], u = r(c, n, a);
    if (!l)
      vr(i, u);
    else {
      var d, f = mm(l);
      vr(i, (d = {}, d[f] = vr({}, i[f], u), d));
    }
  }
  return i;
}, qi = function(t) {
  var r = t.properties, n = t.property, o = t.scale, a = t.transform, i = a === void 0 ? W0 : a, s = t.defaultScale;
  r = r || [n];
  var l = function(u, d, f) {
    var p = {}, m = i(u, d, f);
    if (m !== null)
      return r.forEach(function(h) {
        p[h] = m;
      }), p;
  };
  return l.scale = o, l.defaults = s, l;
}, ar = function(t) {
  t === void 0 && (t = {});
  var r = {};
  Object.keys(t).forEach(function(o) {
    var a = t[o];
    if (a === !0) {
      r[o] = qi({
        property: o,
        scale: o
      });
      return;
    }
    if (typeof a == "function") {
      r[o] = a;
      return;
    }
    r[o] = qi(a);
  });
  var n = Ia(r);
  return n;
}, su = function() {
  for (var t = {}, r = arguments.length, n = new Array(r), o = 0; o < r; o++)
    n[o] = arguments[o];
  n.forEach(function(i) {
    !i || !i.config || vr(t, i.config);
  });
  var a = Ia(t);
  return a;
}, Y0 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, G0 = function(t, r) {
  return Kr(r, t, !Y0(t) || t > 1 ? t : t * 100 + "%");
}, q0 = {
  width: {
    property: "width",
    scale: "sizes",
    transform: G0
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
}, zt = ar(q0), fc = {
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
fc.bg = fc.backgroundColor;
var lu = ar(fc), X0 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, K0 = {
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    defaultScale: X0.fontSizes
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
}, tn = ar(K0), Z0 = {
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
}, Rt = ar(Z0), ul = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, J0 = {
  gridGap: {
    property: "gridGap",
    scale: "space",
    defaultScale: ul.space
  },
  gridColumnGap: {
    property: "gridColumnGap",
    scale: "space",
    defaultScale: ul.space
  },
  gridRowGap: {
    property: "gridRowGap",
    scale: "space",
    defaultScale: ul.space
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
}, Lt = ar(J0), _t = {
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
_t.borderTopWidth = {
  property: "borderTopWidth",
  scale: "borderWidths"
};
_t.borderTopColor = {
  property: "borderTopColor",
  scale: "colors"
};
_t.borderTopStyle = {
  property: "borderTopStyle",
  scale: "borderStyles"
};
_t.borderTopLeftRadius = {
  property: "borderTopLeftRadius",
  scale: "radii"
};
_t.borderTopRightRadius = {
  property: "borderTopRightRadius",
  scale: "radii"
};
_t.borderBottomWidth = {
  property: "borderBottomWidth",
  scale: "borderWidths"
};
_t.borderBottomColor = {
  property: "borderBottomColor",
  scale: "colors"
};
_t.borderBottomStyle = {
  property: "borderBottomStyle",
  scale: "borderStyles"
};
_t.borderBottomLeftRadius = {
  property: "borderBottomLeftRadius",
  scale: "radii"
};
_t.borderBottomRightRadius = {
  property: "borderBottomRightRadius",
  scale: "radii"
};
_t.borderLeftWidth = {
  property: "borderLeftWidth",
  scale: "borderWidths"
};
_t.borderLeftColor = {
  property: "borderLeftColor",
  scale: "colors"
};
_t.borderLeftStyle = {
  property: "borderLeftStyle",
  scale: "borderStyles"
};
_t.borderRightWidth = {
  property: "borderRightWidth",
  scale: "borderWidths"
};
_t.borderRightColor = {
  property: "borderRightColor",
  scale: "colors"
};
_t.borderRightStyle = {
  property: "borderRightStyle",
  scale: "borderStyles"
};
var yr = ar(_t), Zr = {
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
var Po = ar(Zr), oi = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, Q0 = {
  position: !0,
  zIndex: {
    property: "zIndex",
    scale: "zIndices"
  },
  top: {
    property: "top",
    scale: "space",
    defaultScale: oi.space
  },
  right: {
    property: "right",
    scale: "space",
    defaultScale: oi.space
  },
  bottom: {
    property: "bottom",
    scale: "space",
    defaultScale: oi.space
  },
  left: {
    property: "left",
    scale: "space",
    defaultScale: oi.space
  }
}, Vn = ar(Q0), Mt = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
}, Wd = function(t) {
  return typeof t == "number" && !isNaN(t);
}, Cn = function(t, r) {
  if (!Wd(t))
    return Kr(r, t, t);
  var n = t < 0, o = Math.abs(t), a = Kr(r, o, o);
  return Wd(a) ? a * (n ? -1 : 1) : n ? "-" + a : a;
}, Me = {};
Me.margin = {
  margin: {
    property: "margin",
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
  },
  marginY: {
    properties: ["marginTop", "marginBottom"],
    scale: "space",
    transform: Cn,
    defaultScale: Mt.space
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
    defaultScale: Mt.space
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    defaultScale: Mt.space
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    defaultScale: Mt.space
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    defaultScale: Mt.space
  },
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    defaultScale: Mt.space
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    defaultScale: Mt.space
  },
  paddingY: {
    properties: ["paddingTop", "paddingBottom"],
    scale: "space",
    defaultScale: Mt.space
  }
};
Me.padding.p = Me.padding.padding;
Me.padding.pt = Me.padding.paddingTop;
Me.padding.pr = Me.padding.paddingRight;
Me.padding.pb = Me.padding.paddingBottom;
Me.padding.pl = Me.padding.paddingLeft;
Me.padding.px = Me.padding.paddingX;
Me.padding.py = Me.padding.paddingY;
var vm = ar(Me.margin), gm = ar(Me.padding), bm = su(vm, gm), Ei = ar({
  boxShadow: {
    property: "boxShadow",
    scale: "shadows"
  },
  textShadow: {
    property: "textShadow",
    scale: "shadows"
  }
});
function ga() {
  return ga = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ga.apply(this, arguments);
}
var ur = function(t, r, n, o, a) {
  for (r = r && r.split ? r.split(".") : [r], o = 0; o < r.length; o++)
    t = t ? t[r[o]] : a;
  return t === a ? n : t;
}, ex = [40, 52, 64].map(function(e) {
  return e + "em";
}), tx = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
}, rx = {
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
}, Ud = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
}, nx = {
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
}, ox = function(t, r) {
  if (typeof r != "number" || r >= 0)
    return ur(t, r, r);
  var n = Math.abs(r), o = ur(t, n, n);
  return typeof o == "string" ? "-" + o : o * -1;
}, ax = ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "top", "bottom", "left", "right"].reduce(function(e, t) {
  var r;
  return ga({}, e, (r = {}, r[t] = ox, r));
}, {}), ym = function(t) {
  return function(r) {
    var n = {}, o = ur(r, "breakpoints", ex), a = [null].concat(o.map(function(u) {
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
}, xm = function e(t) {
  return function(r) {
    r === void 0 && (r = {});
    var n = ga({}, tx, {}, r.theme || r), o = {}, a = typeof t == "function" ? t(n) : t, i = ym(a)(n);
    for (var s in i) {
      var l = i[s], c = typeof l == "function" ? l(n) : l;
      if (s === "variant") {
        var u = e(ur(n, c))(n);
        o = ga({}, o, {}, u);
        continue;
      }
      if (c && typeof c == "object") {
        o[s] = e(c)(n);
        continue;
      }
      var d = ur(rx, s, s), f = ur(nx, d), p = ur(n, f, ur(n, d, {})), m = ur(ax, d, ur), h = m(p, c, c);
      if (Ud[d])
        for (var g = Ud[d], x = 0; x < g.length; x++)
          o[g[x]] = h;
      else
        o[d] = h;
    }
    return o;
  };
};
const Sm = xm, ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xm,
  default: Sm,
  get: ur,
  responsive: ym
}, Symbol.toStringTag, { value: "Module" }));
var Ss = function(t) {
  var r, n = t.scale, o = t.prop, a = o === void 0 ? "variant" : o, i = t.variants, s = i === void 0 ? {} : i, l = t.key, c;
  Object.keys(s).length ? c = function(p, m, h) {
    return Sm(Kr(m, p, null))(h.theme);
  } : c = function(p, m) {
    return Kr(m, p, null);
  }, c.scale = n || l, c.defaults = s;
  var u = (r = {}, r[a] = c, r), d = Ia(u);
  return d;
}, wm = Ss({
  key: "buttons"
}), Cm = Ss({
  key: "textStyles",
  prop: "textStyle"
}), _m = Ss({
  key: "colorStyles",
  prop: "colors"
}), sx = zt.width, lx = zt.height, cx = zt.minWidth, ux = zt.minHeight, dx = zt.maxWidth, fx = zt.maxHeight, px = zt.size, hx = zt.verticalAlign, mx = zt.display, vx = zt.overflow, gx = zt.overflowX, bx = zt.overflowY, yx = lu.opacity, xx = tn.fontSize, Sx = tn.fontFamily, wx = tn.fontWeight, Cx = tn.lineHeight, _x = tn.textAlign, Ex = tn.fontStyle, kx = tn.letterSpacing, Tx = Rt.alignItems, Px = Rt.alignContent, $x = Rt.justifyItems, Ax = Rt.justifyContent, Rx = Rt.flexWrap, Ox = Rt.flexDirection, Dx = Rt.flex, Mx = Rt.flexGrow, Fx = Rt.flexShrink, Ix = Rt.flexBasis, jx = Rt.justifySelf, Nx = Rt.alignSelf, Bx = Rt.order, Vx = Lt.gridGap, zx = Lt.gridColumnGap, Lx = Lt.gridRowGap, Wx = Lt.gridColumn, Ux = Lt.gridRow, Hx = Lt.gridAutoFlow, Yx = Lt.gridAutoColumns, Gx = Lt.gridAutoRows, qx = Lt.gridTemplateColumns, Xx = Lt.gridTemplateRows, Kx = Lt.gridTemplateAreas, Zx = Lt.gridArea, Jx = yr.borderWidth, Qx = yr.borderStyle, eS = yr.borderColor, tS = yr.borderTop, rS = yr.borderRight, nS = yr.borderBottom, oS = yr.borderLeft, aS = yr.borderRadius, iS = Po.backgroundImage, sS = Po.backgroundSize, lS = Po.backgroundPosition, cS = Po.backgroundRepeat, uS = Vn.zIndex, dS = Vn.top, fS = Vn.right, pS = Vn.bottom, hS = Vn.left, mS = function(t) {
  var r = t.prop, n = t.cssProperty, o = t.alias, a = t.key, i = t.transformValue, s = t.scale, l = t.properties, c = {};
  c[r] = qi({
    properties: l,
    property: n || r,
    scale: a,
    defaultScale: s,
    transform: i
  }), o && (c[o] = c[r]);
  var u = Ia(c);
  return u;
};
const vS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alignContent: Px,
  alignItems: Tx,
  alignSelf: Nx,
  background: Po,
  backgroundImage: iS,
  backgroundPosition: lS,
  backgroundRepeat: cS,
  backgroundSize: sS,
  border: yr,
  borderBottom: nS,
  borderColor: eS,
  borderLeft: oS,
  borderRadius: aS,
  borderRight: rS,
  borderStyle: Qx,
  borderTop: tS,
  borderWidth: Jx,
  borders: yr,
  bottom: pS,
  boxShadow: Ei,
  buttonStyle: wm,
  color: lu,
  colorStyle: _m,
  compose: su,
  createParser: Ia,
  createStyleFunction: qi,
  display: mx,
  flex: Dx,
  flexBasis: Ix,
  flexDirection: Ox,
  flexGrow: Mx,
  flexShrink: Fx,
  flexWrap: Rx,
  flexbox: Rt,
  fontFamily: Sx,
  fontSize: xx,
  fontStyle: Ex,
  fontWeight: wx,
  get: Kr,
  grid: Lt,
  gridArea: Zx,
  gridAutoColumns: Yx,
  gridAutoFlow: Hx,
  gridAutoRows: Gx,
  gridColumn: Wx,
  gridColumnGap: zx,
  gridGap: Vx,
  gridRow: Ux,
  gridRowGap: Lx,
  gridTemplateAreas: Kx,
  gridTemplateColumns: qx,
  gridTemplateRows: Xx,
  height: lx,
  justifyContent: Ax,
  justifyItems: $x,
  justifySelf: jx,
  layout: zt,
  left: hS,
  letterSpacing: kx,
  lineHeight: Cx,
  margin: vm,
  maxHeight: fx,
  maxWidth: dx,
  minHeight: ux,
  minWidth: cx,
  opacity: yx,
  order: Bx,
  overflow: vx,
  overflowX: gx,
  overflowY: bx,
  padding: gm,
  position: Vn,
  right: fS,
  shadow: Ei,
  size: px,
  space: bm,
  style: mS,
  system: ar,
  textAlign: _x,
  textShadow: Ei,
  textStyle: Cm,
  top: dS,
  typography: tn,
  variant: Ss,
  verticalAlign: hx,
  width: sx,
  zIndex: uS
}, Symbol.toStringTag, { value: "Module" })), gS = /* @__PURE__ */ xs(vS), bS = /* @__PURE__ */ xs(ix);
function yS(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var xS = su(bm, tn, lu, zt, Rt, yr, Po, Vn, Lt, Ei, wm, Cm, _m), Em = xS.propNames, km = function(t) {
  var r = new RegExp("^(" + t.join("|") + ")$");
  return yS(function(n) {
    return sm(n) && !r.test(n);
  });
};
const SS = km(Em), wS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createShouldForwardProp: km,
  default: SS,
  props: Em
}, Symbol.toStringTag, { value: "Module" })), CS = /* @__PURE__ */ xs(wS);
Object.defineProperty(fa, "__esModule", {
  value: !0
});
var Tm = fa.Flex = zn = fa.Box = void 0;
cu(At);
var Pm = cu(B0), Yn = gS, Jo = ES(bS), _S = cu(CS);
function $m() {
  if (typeof WeakMap != "function")
    return null;
  var e = /* @__PURE__ */ new WeakMap();
  return $m = function() {
    return e;
  }, e;
}
function ES(e) {
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
function cu(e) {
  return e && e.__esModule ? e : { default: e };
}
var kS = function(t) {
  return (0, Jo.default)(t.sx)(t.theme);
}, TS = function(t) {
  return (0, Jo.default)(t.__css)(t.theme);
}, PS = function(t) {
  var r = t.theme, n = t.variant, o = t.tx, a = o === void 0 ? "variants" : o;
  return (0, Jo.default)((0, Jo.get)(r, a + "." + n, (0, Jo.get)(r, n)))(r);
}, Am = (0, Pm.default)("div", {
  shouldForwardProp: _S.default
})({
  boxSizing: "border-box",
  margin: 0,
  minWidth: 0
}, TS, PS, kS, function(e) {
  return e.css;
}, (0, Yn.compose)(Yn.space, Yn.layout, Yn.typography, Yn.color, Yn.flexbox)), zn = fa.Box = Am, $S = (0, Pm.default)(Am)({
  display: "flex"
});
Tm = fa.Flex = $S;
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
var qB = kt(function(e, t) {
  return At.createElement(zn, pn({
    ref: t,
    tx: "text"
  }, e));
});
kt(function(e, t) {
  return At.createElement(zn, pn({
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
var XB = kt(function(e, t) {
  return At.createElement(zn, pn({
    ref: t,
    as: "a",
    variant: "link"
  }, e));
}), KB = kt(function(e, t) {
  return At.createElement(zn, pn({
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
  return At.createElement(zn, pn({
    ref: t,
    as: "img"
  }, e, {
    __css: {
      maxWidth: "100%",
      height: "auto"
    }
  }));
});
var ZB = kt(function(e, t) {
  return At.createElement(zn, pn({
    ref: t,
    variant: "card"
  }, e));
});
function Jn(e) {
  return e != null && typeof e == "object" && e["@@functional/placeholder"] === !0;
}
function On(e) {
  return function t(r) {
    return arguments.length === 0 || Jn(r) ? t : e.apply(this, arguments);
  };
}
function AS(e) {
  return function t(r, n) {
    switch (arguments.length) {
      case 0:
        return t;
      case 1:
        return Jn(r) ? t : On(function(o) {
          return e(r, o);
        });
      default:
        return Jn(r) && Jn(n) ? t : Jn(r) ? On(function(o) {
          return e(o, n);
        }) : Jn(n) ? On(function(o) {
          return e(r, o);
        }) : e(r, n);
    }
  };
}
function RS(e, t) {
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
const OS = Array.isArray || function(t) {
  return t != null && t.length >= 0 && Object.prototype.toString.call(t) === "[object Array]";
};
function DS(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
var MS = /* @__PURE__ */ On(function(t) {
  return OS(t) ? !0 : !t || typeof t != "object" || DS(t) ? !1 : t.length === 0 ? !0 : t.length > 0 ? t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1) : !1;
}), FS = /* @__PURE__ */ function() {
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
function IS(e) {
  return new FS(e);
}
var jS = /* @__PURE__ */ AS(function(t, r) {
  return RS(t.length, function() {
    return t.apply(r, arguments);
  });
});
function NS(e, t, r) {
  for (var n = 0, o = r.length; n < o; ) {
    if (t = e["@@transducer/step"](t, r[n]), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n += 1;
  }
  return e["@@transducer/result"](t);
}
function Hd(e, t, r) {
  for (var n = r.next(); !n.done; ) {
    if (t = e["@@transducer/step"](t, n.value), t && t["@@transducer/reduced"]) {
      t = t["@@transducer/value"];
      break;
    }
    n = r.next();
  }
  return e["@@transducer/result"](t);
}
function Yd(e, t, r, n) {
  return e["@@transducer/result"](r[n](jS(e["@@transducer/step"], e), t));
}
var Gd = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function JB(e, t, r) {
  if (typeof e == "function" && (e = IS(e)), MS(r))
    return NS(e, t, r);
  if (typeof r["fantasy-land/reduce"] == "function")
    return Yd(e, t, r, "fantasy-land/reduce");
  if (r[Gd] != null)
    return Hd(e, t, r[Gd]());
  if (typeof r.next == "function")
    return Hd(e, t, r);
  if (typeof r.reduce == "function")
    return Yd(e, t, r, "reduce");
  throw new TypeError("reduce: list must be array or iterable");
}
function pc(e, t) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
var qd = Object.prototype.toString, BS = /* @__PURE__ */ function() {
  return qd.call(arguments) === "[object Arguments]" ? function(t) {
    return qd.call(t) === "[object Arguments]";
  } : function(t) {
    return pc("callee", t);
  };
}(), VS = !/* @__PURE__ */ {
  toString: null
}.propertyIsEnumerable("toString"), Xd = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], Kd = /* @__PURE__ */ function() {
  return arguments.propertyIsEnumerable("length");
}(), zS = function(t, r) {
  for (var n = 0; n < t.length; ) {
    if (t[n] === r)
      return !0;
    n += 1;
  }
  return !1;
}, QB = /* @__PURE__ */ On(typeof Object.keys == "function" && !Kd ? function(t) {
  return Object(t) !== t ? [] : Object.keys(t);
} : function(t) {
  if (Object(t) !== t)
    return [];
  var r, n, o = [], a = Kd && BS(t);
  for (r in t)
    pc(r, t) && (!a || r !== "length") && (o[o.length] = r);
  if (VS)
    for (n = Xd.length - 1; n >= 0; )
      r = Xd[n], pc(r, t) && !zS(o, r) && (o[o.length] = r), n -= 1;
  return o;
}), LS = /* @__PURE__ */ On(function(t) {
  return t === null ? "Null" : t === void 0 ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
});
const eV = LS;
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
var hc = { exports: {} }, Be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function WS() {
  if (Zd)
    return Be;
  Zd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var j = b.$$typeof;
      switch (j) {
        case t:
          switch (b = b.type, b) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case u:
                case m:
                case p:
                case i:
                  return b;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function T(b) {
    return w(b) === c;
  }
  return Be.AsyncMode = l, Be.ConcurrentMode = c, Be.ContextConsumer = s, Be.ContextProvider = i, Be.Element = t, Be.ForwardRef = u, Be.Fragment = n, Be.Lazy = m, Be.Memo = p, Be.Portal = r, Be.Profiler = a, Be.StrictMode = o, Be.Suspense = d, Be.isAsyncMode = function(b) {
    return T(b) || w(b) === l;
  }, Be.isConcurrentMode = T, Be.isContextConsumer = function(b) {
    return w(b) === s;
  }, Be.isContextProvider = function(b) {
    return w(b) === i;
  }, Be.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Be.isForwardRef = function(b) {
    return w(b) === u;
  }, Be.isFragment = function(b) {
    return w(b) === n;
  }, Be.isLazy = function(b) {
    return w(b) === m;
  }, Be.isMemo = function(b) {
    return w(b) === p;
  }, Be.isPortal = function(b) {
    return w(b) === r;
  }, Be.isProfiler = function(b) {
    return w(b) === a;
  }, Be.isStrictMode = function(b) {
    return w(b) === o;
  }, Be.isSuspense = function(b) {
    return w(b) === d;
  }, Be.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === a || b === o || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === p || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === g || b.$$typeof === x || b.$$typeof === S || b.$$typeof === h);
  }, Be.typeOf = w, Be;
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
var Jd;
function US() {
  return Jd || (Jd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === c || _ === a || _ === o || _ === d || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === p || _.$$typeof === i || _.$$typeof === s || _.$$typeof === u || _.$$typeof === g || _.$$typeof === x || _.$$typeof === S || _.$$typeof === h);
    }
    function T(_) {
      if (typeof _ == "object" && _ !== null) {
        var de = _.$$typeof;
        switch (de) {
          case t:
            var le = _.type;
            switch (le) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return le;
              default:
                var oe = le && le.$$typeof;
                switch (oe) {
                  case s:
                  case u:
                  case m:
                  case p:
                  case i:
                    return oe;
                  default:
                    return de;
                }
            }
          case r:
            return de;
        }
      }
    }
    var b = l, j = c, D = s, B = i, V = t, N = u, X = n, ae = m, te = p, Z = r, J = a, ie = o, K = d, ve = !1;
    function pe(_) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(_) || T(_) === l;
    }
    function O(_) {
      return T(_) === c;
    }
    function M(_) {
      return T(_) === s;
    }
    function F(_) {
      return T(_) === i;
    }
    function P(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function R(_) {
      return T(_) === u;
    }
    function I(_) {
      return T(_) === n;
    }
    function C(_) {
      return T(_) === m;
    }
    function L(_) {
      return T(_) === p;
    }
    function $(_) {
      return T(_) === r;
    }
    function G(_) {
      return T(_) === a;
    }
    function U(_) {
      return T(_) === o;
    }
    function re(_) {
      return T(_) === d;
    }
    Ve.AsyncMode = b, Ve.ConcurrentMode = j, Ve.ContextConsumer = D, Ve.ContextProvider = B, Ve.Element = V, Ve.ForwardRef = N, Ve.Fragment = X, Ve.Lazy = ae, Ve.Memo = te, Ve.Portal = Z, Ve.Profiler = J, Ve.StrictMode = ie, Ve.Suspense = K, Ve.isAsyncMode = pe, Ve.isConcurrentMode = O, Ve.isContextConsumer = M, Ve.isContextProvider = F, Ve.isElement = P, Ve.isForwardRef = R, Ve.isFragment = I, Ve.isLazy = C, Ve.isMemo = L, Ve.isPortal = $, Ve.isProfiler = G, Ve.isStrictMode = U, Ve.isSuspense = re, Ve.isValidElementType = w, Ve.typeOf = T;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? hc.exports = WS() : hc.exports = US();
var HS = hc.exports, Rm = HS, YS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, GS = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Om = {};
Om[Rm.ForwardRef] = YS;
Om[Rm.Memo] = GS;
function Qd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qd(Object(r), !0).forEach(function(n) {
      au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var XS = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return qS({}, t, {}, r);
}, KS = $d(function(e) {
  return $d(function(t) {
    return XS(e, t);
  });
}), tV = function(t) {
  return /* @__PURE__ */ Qt(va.Consumer, null, function(r) {
    return t.theme !== r && (r = KS(r)(t.theme)), /* @__PURE__ */ Qt(va.Provider, {
      value: r
    }, t.children);
  });
};
function ZS() {
  return At.useContext(va);
}
const JS = {
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
}, QS = {
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
}, e1 = {
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
}, t1 = {
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
}, r1 = {
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
}, n1 = {
  ghost: JS,
  alert: r1,
  inline: QS,
  primary: e1,
  secondary: t1
}, o1 = {
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
}, a1 = {
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
}, i1 = {
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
}, s1 = {
  "icon-primary": o1,
  "icon-ghost": a1,
  "icon-ghost-white": i1
}, l1 = {
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
}, c1 = {
  "footer-primary": l1
}, u1 = {
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
}, d1 = {
  "file-secondary": u1
}, f1 = {
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
}, p1 = {
  color: "black"
}, h1 = {
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
}, m1 = {
  bg: "white",
  color: "black",
  borderColor: "grayShade2"
}, v1 = {
  bg: "white",
  color: "black",
  borderColor: "gray"
}, g1 = {
  card: m1,
  readOnly: v1
}, b1 = {
  color: "labels.red"
}, y1 = {
  color: "darkGray"
}, x1 = {
  error: b1,
  default: y1
}, S1 = {
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
}, w1 = {
  variant: "inputs.primary",
  bg: "white",
  ":focus": {
    borderColor: "gray"
  }
}, C1 = {
  variant: "inputs.primary",
  bg: "grayShade2",
  borderColor: "grayShade2",
  ":focus": {
    borderColor: "grayShade2"
  }
}, _1 = {
  disabled: C1,
  primary: S1,
  white: w1
}, E1 = {
  default: "transparent",
  error: "labels.red"
}, k1 = {
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
}, P1 = {
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
}, $1 = {
  bg: "primaryShade2",
  color: "primary",
  path: {
    fill: "primary"
  },
  cursor: "default",
  "~ div": {
    borderTopColor: "primaryShade2"
  }
}, A1 = {
  variant: "navigation.item.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, R1 = {
  default: P1,
  active: $1,
  disabled: A1
}, O1 = {
  variant: "navigation.subItem.default",
  cursor: "default",
  ":hover": {},
  ":active": {}
}, D1 = {
  variant: "navigation.item.default",
  borderLeftWidth: "2px",
  borderLeftStyle: "solid",
  borderLeftColor: "grayShade2"
}, M1 = {
  variant: "navigation.subItem.default",
  color: "primary",
  cursor: "default",
  borderLeftColor: "primary",
  ":hover": {}
}, F1 = {
  default: D1,
  active: M1,
  disabled: O1
}, I1 = {
  container: T1,
  item: R1,
  subItem: F1,
  category: k1
}, j1 = {
  bg: "white",
  boxShadow: "list"
}, N1 = {
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
}, B1 = {
  variant: "variants.list.item.primary",
  bg: "grayShade3"
}, V1 = {
  primary: N1,
  active: B1
}, z1 = {
  container: j1,
  item: V1
}, L1 = {
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
}, W1 = {
  fontFamily: "title",
  fontSize: "title",
  fontWeight: "title",
  color: "black"
}, U1 = {
  fontFamily: "subtitle",
  fontSize: "subtitle",
  fontWeight: "subtitle",
  color: "black"
}, H1 = {
  fontFamily: "label",
  fontSize: "label",
  fontWeight: 500,
  color: "black"
}, Y1 = {
  fontFamily: "microlabel",
  fontSize: "microlabel",
  fontWeight: "microlabel",
  color: "black"
}, G1 = {
  variant: "text.microlabeling",
  color: "gray"
}, q1 = {
  fontFamily: "value",
  fontSize: "value",
  fontWeight: "value",
  color: "black"
}, X1 = {
  variant: "text.value",
  color: "primary"
}, K1 = {
  fontFamily: "text",
  fontSize: "text",
  fontWeight: "text",
  color: "black"
}, Z1 = {
  variant: "text.labeling",
  color: "gray"
}, J1 = {
  color: "gray"
}, Q1 = {
  color: "primary"
}, ew = {
  color: "labels.orange"
}, ef = {
  title: W1,
  text: K1,
  subtitle: U1,
  labeling: H1,
  value: q1,
  valuePrimary: X1,
  labelingGray: Z1,
  microlabeling: Y1,
  microlabelingGray: G1,
  inputValidationneutral: J1,
  inputValidationsuccess: Q1,
  inputValidationwarning: ew
}, tw = {
  bg: "white",
  borderTopColor: "primary",
  boxShadow: "popup"
}, rw = {
  bg: "white",
  ":not(:last-of-type)": {
    borderBottomColor: "grayShade3",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid"
  }
}, nw = {
  drawerSection: rw,
  primary: tw
}, ow = {
  black: {
    bg: "black",
    color: "white"
  },
  green: {
    bg: "labels.green",
    color: "white"
  }
}, aw = {
  red: {
    bg: "labels.red"
  },
  green: {
    bg: "labels.green"
  },
  gray: {
    bg: "gray"
  }
}, iw = {
  bg: "grayShade2",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "white"
    }
  }
}, sw = {
  bg: "white",
  borderColor: "gray",
  "> span": {
    "&:last-of-type": {
      bg: "grayShade2"
    }
  }
}, lw = {
  gray: iw,
  white: sw
}, cw = {
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
}, uw = {
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
}, dw = {
  keyValue: lw,
  primary: cw,
  bordered: uw,
  dot: ow,
  blink: aw
}, fw = {
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
  bg: "grayShade3",
  borderColor: "transparent",
  cursor: "pointer",
  ":hover": {
    borderColor: "grayShade1"
  },
  ":focus": {
    borderColor: "gray"
  }
}, mw = {
  variant: "variants.select.primary",
  bg: "white"
}, vw = {
  bg: "grayShade2",
  borderColor: "transparent",
  cursor: "default",
  pointerEvents: "none"
}, gw = {
  disabled: vw,
  primary: hw,
  white: mw
}, bw = {
  color: "labels.red"
}, yw = {
  color: "darkGray"
}, xw = {
  error: bw,
  default: yw
}, Sw = {
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
}, ww = {
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
}, Cw = {
  bg: "primaryShade2",
  whiteSpace: "pre-wrap",
  pre: {
    color: "black",
    fontFamily: "value",
    fontSize: "value",
    whiteSpace: "pre-wrap"
  }
}, _w = {
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
}, kw = {
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
}, Pw = {
  valid: _w,
  error: Ew,
  warning: kw,
  neutral: Tw
}, $w = {
  primary: {
    path: {
      fill: "black"
    }
  }
}, Aw = {
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
}, Ow = {
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
}, Dw = {
  primary: Aw,
  white: Rw,
  disabled: Ow
}, Mw = {
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
}, Iw = {
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
  chip: Iw
}, Nw = {
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
}, Bw = {
  colors: Nw,
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
    ...g1,
    tooltip: h1,
    label: p1,
    list: z1,
    header: L1,
    checkbox: fw,
    radio: pw,
    badges: dw,
    popup: nw,
    bar: Sw,
    perf: ww,
    code: Cw,
    select: gw,
    callout: Pw,
    icon: $w,
    editableSelect: jw,
    ...ef
  },
  text: {
    inputInfo: x1,
    selectInfo: xw,
    ...ef
  },
  zIndices: {
    default: 10,
    tooltips: 1e3,
    popups: 30,
    modals: 40,
    notifications: 50
  },
  buttons: {
    ...n1,
    ...s1,
    ...c1,
    ...d1,
    toggleButton: f1
  },
  navigation: I1,
  inputs: _1,
  inputIntents: E1,
  pagination: Dw,
  notification: Mw
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
}, zw = {
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
}, rV = () => ZS(), nV = {
  ...Bw,
  colors: Vw,
  shadows: zw
};
function Lw(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ww(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Uw = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ww(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = Lw(o);
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
}(), Et = "-ms-", Xi = "-moz-", Ie = "-webkit-", uu = "comm", du = "rule", fu = "decl", Hw = "@import", Dm = "@keyframes", Yw = "@layer", Gw = Math.abs, ws = String.fromCharCode, qw = Object.assign;
function Xw(e, t) {
  return St(e, 0) ^ 45 ? (((t << 2 ^ St(e, 0)) << 2 ^ St(e, 1)) << 2 ^ St(e, 2)) << 2 ^ St(e, 3) : 0;
}
function Mm(e) {
  return e.trim();
}
function Kw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, r) {
  return e.replace(t, r);
}
function mc(e, t) {
  return e.indexOf(t);
}
function St(e, t) {
  return e.charCodeAt(t) | 0;
}
function ba(e, t, r) {
  return e.slice(t, r);
}
function Tr(e) {
  return e.length;
}
function pu(e) {
  return e.length;
}
function ai(e, t) {
  return t.push(e), e;
}
function Zw(e, t) {
  return e.map(t).join("");
}
var Cs = 1, xo = 1, Fm = 0, Bt = 0, pt = 0, $o = "";
function _s(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: Cs, column: xo, length: i, return: "" };
}
function Io(e, t) {
  return qw(_s("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Jw() {
  return pt;
}
function Qw() {
  return pt = Bt > 0 ? St($o, --Bt) : 0, xo--, pt === 10 && (xo = 1, Cs--), pt;
}
function Ut() {
  return pt = Bt < Fm ? St($o, Bt++) : 0, xo++, pt === 10 && (xo = 1, Cs++), pt;
}
function Ar() {
  return St($o, Bt);
}
function ki() {
  return Bt;
}
function ja(e, t) {
  return ba($o, e, t);
}
function ya(e) {
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
function Im(e) {
  return Cs = xo = 1, Fm = Tr($o = e), Bt = 0, [];
}
function jm(e) {
  return $o = "", e;
}
function Ti(e) {
  return Mm(ja(Bt - 1, vc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function eC(e) {
  for (; (pt = Ar()) && pt < 33; )
    Ut();
  return ya(e) > 2 || ya(pt) > 3 ? "" : " ";
}
function tC(e, t) {
  for (; --t && Ut() && !(pt < 48 || pt > 102 || pt > 57 && pt < 65 || pt > 70 && pt < 97); )
    ;
  return ja(e, ki() + (t < 6 && Ar() == 32 && Ut() == 32));
}
function vc(e) {
  for (; Ut(); )
    switch (pt) {
      case e:
        return Bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vc(pt);
        break;
      case 40:
        e === 41 && vc(e);
        break;
      case 92:
        Ut();
        break;
    }
  return Bt;
}
function rC(e, t) {
  for (; Ut() && e + pt !== 47 + 10; )
    if (e + pt === 42 + 42 && Ar() === 47)
      break;
  return "/*" + ja(t, Bt - 1) + "*" + ws(e === 47 ? e : Ut());
}
function nC(e) {
  for (; !ya(Ar()); )
    Ut();
  return ja(e, Bt);
}
function oC(e) {
  return jm(Pi("", null, null, null, [""], e = Im(e), 0, [0], e));
}
function Pi(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, m = 0, h = 1, g = 1, x = 1, S = 0, w = "", T = o, b = a, j = n, D = w; g; )
    switch (m = S, S = Ut()) {
      case 40:
        if (m != 108 && St(D, d - 1) == 58) {
          mc(D += je(Ti(S), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += Ti(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += eC(m);
        break;
      case 92:
        D += tC(ki() - 1, 7);
        continue;
      case 47:
        switch (Ar()) {
          case 42:
          case 47:
            ai(aC(rC(Ut(), ki()), t, r), l);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * h:
        s[c++] = Tr(D) * x;
      case 125 * h:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            x == -1 && (D = je(D, /\f/g, "")), p > 0 && Tr(D) - d && ai(p > 32 ? rf(D + ";", n, r, d - 1) : rf(je(D, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            D += ";";
          default:
            if (ai(j = tf(D, t, r, c, u, o, s, w, T = [], b = [], d), a), S === 123)
              if (u === 0)
                Pi(D, t, j, j, T, a, d, s, b);
              else
                switch (f === 99 && St(D, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pi(e, j, j, n && ai(tf(e, j, j, 0, 0, o, s, w, o, T = [], d), b), o, b, d, s, n ? T : b);
                    break;
                  default:
                    Pi(D, j, j, j, [""], b, 0, s, b);
                }
        }
        c = u = p = 0, h = x = 1, w = D = "", d = i;
        break;
      case 58:
        d = 1 + Tr(D), p = m;
      default:
        if (h < 1) {
          if (S == 123)
            --h;
          else if (S == 125 && h++ == 0 && Qw() == 125)
            continue;
        }
        switch (D += ws(S), S * h) {
          case 38:
            x = u > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            s[c++] = (Tr(D) - 1) * x, x = 1;
            break;
          case 64:
            Ar() === 45 && (D += Ti(Ut())), f = Ar(), u = d = Tr(w = D += nC(ki())), S++;
            break;
          case 45:
            m === 45 && Tr(D) == 2 && (h = 0);
        }
    }
  return a;
}
function tf(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = pu(f), m = 0, h = 0, g = 0; m < n; ++m)
    for (var x = 0, S = ba(e, d + 1, d = Gw(h = i[m])), w = e; x < p; ++x)
      (w = Mm(h > 0 ? f[x] + " " + S : je(S, /&\f/g, f[x]))) && (l[g++] = w);
  return _s(e, t, r, o === 0 ? du : s, l, c, u);
}
function aC(e, t, r) {
  return _s(e, t, r, uu, ws(Jw()), ba(e, 2, -2), 0);
}
function rf(e, t, r, n) {
  return _s(e, t, r, fu, ba(e, 0, n), ba(e, n + 1, -1), n);
}
function so(e, t) {
  for (var r = "", n = pu(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function iC(e, t, r, n) {
  switch (e.type) {
    case Yw:
      if (e.children.length)
        break;
    case Hw:
    case fu:
      return e.return = e.return || e.value;
    case uu:
      return "";
    case Dm:
      return e.return = e.value + "{" + so(e.children, n) + "}";
    case du:
      e.value = e.props.join(",");
  }
  return Tr(r = so(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function sC(e) {
  var t = pu(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function lC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var nf = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function hu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var cC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Ar(), o === 38 && a === 12 && (r[n] = 1), !ya(a); )
    Ut();
  return ja(t, Bt);
}, uC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ya(o)) {
      case 0:
        o === 38 && Ar() === 12 && (r[n] = 1), t[n] += cC(Bt - 1, r, n);
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
        t[n] += ws(o);
    }
  while (o = Ut());
  return t;
}, dC = function(t, r) {
  return jm(uC(Im(t), r));
}, of = /* @__PURE__ */ new WeakMap(), fC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !of.get(n)) && !o) {
      of.set(t, !0);
      for (var a = [], i = dC(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, pC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, hC = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", mC = function(t) {
  return t.type === "comm" && t.children.indexOf(hC) > -1;
}, vC = function(t) {
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
            if (mC(c))
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
}, Nm = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, gC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Nm(r[n]))
      return !0;
  return !1;
}, af = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, bC = function(t, r, n) {
  Nm(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), af(t)) : gC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), af(t)));
};
function Bm(e, t) {
  switch (Xw(e, t)) {
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
      return Ie + e + Xi + e + Et + e + e;
    case 6828:
    case 4268:
      return Ie + e + Et + e + e;
    case 6165:
      return Ie + e + Et + "flex-" + e + e;
    case 5187:
      return Ie + e + je(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + Et + "flex-$1$2") + e;
    case 5443:
      return Ie + e + Et + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return Ie + e + Et + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ie + e + Et + je(e, "shrink", "negative") + e;
    case 5292:
      return Ie + e + Et + je(e, "basis", "preferred-size") + e;
    case 6060:
      return Ie + "box-" + je(e, "-grow", "") + Ie + e + Et + je(e, "grow", "positive") + e;
    case 4554:
      return Ie + je(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + Et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
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
      if (Tr(e) - 1 - t > 6)
        switch (St(e, t + 1)) {
          case 109:
            if (St(e, t + 4) !== 45)
              break;
          case 102:
            return je(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + Xi + (St(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~mc(e, "stretch") ? Bm(je(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (St(e, t + 1) !== 115)
        break;
    case 6444:
      switch (St(e, Tr(e) - 3 - (~mc(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + Ie) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ie + (St(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + Et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (St(e, t + 11)) {
        case 114:
          return Ie + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ie + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ie + e + Et + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ie + e + Et + e + e;
  }
  return e;
}
var yC = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fu:
        t.return = Bm(t.value, t.length);
        break;
      case Dm:
        return so([Io(t, {
          value: je(t.value, "@", "@" + Ie)
        })], o);
      case du:
        if (t.length)
          return Zw(t.props, function(a) {
            switch (Kw(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return so([Io(t, {
                  props: [je(a, /:(read-\w+)/, ":" + Xi + "$1")]
                })], o);
              case "::placeholder":
                return so([Io(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Ie + "input-$1")]
                }), Io(t, {
                  props: [je(a, /:(plac\w+)/, ":" + Xi + "$1")]
                }), Io(t, {
                  props: [je(a, /:(plac\w+)/, Et + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, xC = [yC], SC = function(t) {
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
  var o = t.stylisPlugins || xC;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), x = 1; x < g.length; x++)
        a[g[x]] = !0;
      s.push(h);
    }
  );
  var l, c = [fC, pC];
  process.env.NODE_ENV !== "production" && c.push(vC({
    get compat() {
      return m.compat;
    }
  }), bC);
  {
    var u, d = [iC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== uu && u.insert(h.value + "{}"));
    } : lC(function(h) {
      u.insert(h);
    })], f = sC(c.concat(o, d)), p = function(g) {
      return so(oC(g), f);
    };
    l = function(g, x, S, w) {
      u = S, process.env.NODE_ENV !== "production" && x.map !== void 0 && (u = {
        insert: function(b) {
          S.insert(b + x.map);
        }
      }), p(g ? g + "{" + x.styles + "}" : x.styles), w && (m.inserted[x.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new Uw({
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
}, wC = !0;
function Vm(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var mu = function(t, r, n) {
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
  wC === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, vu = function(t, r, n) {
  mu(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function CC(e) {
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
var _C = {
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
}, sf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, EC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", kC = /[A-Z]|^ms/g, zm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gu = function(t) {
  return t.charCodeAt(1) === 45;
}, lf = function(t) {
  return t != null && typeof t != "boolean";
}, dl = /* @__PURE__ */ hu(function(e) {
  return gu(e) ? e : e.replace(kC, "-$&").toLowerCase();
}), Ki = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(zm, function(n, o, a) {
          return fr = {
            name: o,
            styles: a,
            next: fr
          }, o;
        });
  }
  return _C[t] !== 1 && !gu(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var TC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, PC = ["normal", "none", "initial", "inherit", "unset"], $C = Ki, AC = /^-ms-/, RC = /-(.)/g, cf = {};
  Ki = function(t, r) {
    if (t === "content" && (typeof r != "string" || PC.indexOf(r) === -1 && !TC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = $C(t, r);
    return n !== "" && !gu(t) && t.indexOf("-") !== -1 && cf[t] === void 0 && (cf[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(AC, "ms-").replace(RC, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Lm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function xa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Lm);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return fr = {
          name: r.name,
          styles: r.styles,
          next: fr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            fr = {
              name: n.name,
              styles: n.styles,
              next: fr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return OC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = fr, i = r(e);
        return fr = a, xa(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(zm, function(u, d, f) {
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
function OC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += xa(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : lf(i) && (n += dl(a) + ":" + Ki(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Lm);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            lf(i[s]) && (n += dl(a) + ":" + Ki(a, i[s]) + ";");
        else {
          var l = xa(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += dl(a) + ":" + l + ";";
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
var uf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Wm;
process.env.NODE_ENV !== "production" && (Wm = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var fr, Sa = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  fr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += xa(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(sf), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += xa(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(sf), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Wm, function(f) {
    return l = f, "";
  })), uf.lastIndex = 0;
  for (var c = "", u; (u = uf.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = CC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: fr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: fr
  };
}, DC = function(t) {
  return t();
}, Um = W["useInsertionEffect"] ? W["useInsertionEffect"] : !1, bu = Um || DC, df = Um || W.useLayoutEffect, MC = {}.hasOwnProperty, yu = /* @__PURE__ */ W.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ SC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (yu.displayName = "EmotionCacheContext");
yu.Provider;
var Es = function(t) {
  return /* @__PURE__ */ kt(function(r, n) {
    var o = ht(yu);
    return t(r, o, n);
  });
}, hn = /* @__PURE__ */ W.createContext({});
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
}, IC = /* @__PURE__ */ nf(function(e) {
  return nf(function(t) {
    return FC(e, t);
  });
}), oV = function(t) {
  var r = W.useContext(hn);
  return t.theme !== r && (r = IC(r)(t.theme)), /* @__PURE__ */ W.createElement(hn.Provider, {
    value: r
  }, t.children);
}, ff = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", pf = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", jC = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return mu(r, n, o), bu(function() {
    return vu(r, n, o);
  }), null;
}, NC = /* @__PURE__ */ Es(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ff], a = [n], i = "";
  typeof e.className == "string" ? i = Vm(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Sa(a, void 0, W.useContext(hn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[pf];
    l && (s = Sa([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    MC.call(e, u) && u !== "css" && u !== ff && (process.env.NODE_ENV === "production" || u !== pf) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(jC, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ W.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (NC.displayName = "EmotionCssPropInternal");
var BC = {
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
}, hf = !1, VC = /* @__PURE__ */ Es(function(e, t) {
  process.env.NODE_ENV !== "production" && !hf && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), hf = !0);
  var r = e.styles, n = Sa([r], void 0, W.useContext(hn)), o = W.useRef();
  return df(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), df(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && vu(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (VC.displayName = "EmotionGlobal");
function zC() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Sa(t);
}
var aV = function() {
  var t = zC.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, LC = function e(t) {
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
function WC(e, t, r) {
  var n = [], o = Vm(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var UC = function(t) {
  var r = t.cache, n = t.serializedArr;
  return bu(function() {
    for (var o = 0; o < n.length; o++)
      vu(r, n[o], !1);
  }), null;
}, HC = /* @__PURE__ */ Es(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = Sa(u, t.registered);
    return n.push(f), mu(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return WC(t.registered, o, LC(u));
  }, i = {
    css: o,
    cx: a,
    theme: W.useContext(hn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(UC, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (HC.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var mf = !0, YC = typeof jest < "u" || typeof vi < "u";
  if (mf && !YC) {
    var vf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : mf ? window : global
    ), gf = "__EMOTION_REACT_" + BC.version.split(".")[0] + "__";
    vf[gf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), vf[gf] = !0;
  }
}
function GC(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function rn(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Fr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = ht(s);
    if (!u && r) {
      const d = new Error(
        a ?? GC(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [qC, XC] = rn({
  strict: !1,
  name: "PortalManagerContext"
});
function KC(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ Y.jsx(qC, { value: { zIndex: r }, children: t });
}
KC.displayName = "PortalManager";
var gc = globalThis != null && globalThis.document ? ou : Ze, [Hm, ZC] = rn({
  strict: !1,
  name: "PortalContext"
}), xu = "chakra-portal", JC = ".chakra-portal", QC = (e) => /* @__PURE__ */ Y.jsx(
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
), e_ = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = Ct(null), a = Re(null), [, i] = Ct({});
  Ze(() => i({}), []);
  const s = ZC(), l = XC();
  gc(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = xu, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ Y.jsx(QC, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? im(
    /* @__PURE__ */ Y.jsx(Hm, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ Y.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, t_ = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = Nt(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = xu), l;
  }, [o]), [, s] = Ct({});
  return gc(() => s({}), []), gc(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? im(
    /* @__PURE__ */ Y.jsx(Hm, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function Na(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ Y.jsx(t_, { containerRef: r, ...n }) : /* @__PURE__ */ Y.jsx(e_, { ...n });
}
Na.className = xu;
Na.selector = JC;
Na.displayName = "Portal";
function Ao() {
  const e = ht(
    hn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Ym = Fr({});
Ym.displayName = "ColorModeContext";
function Su() {
  const e = ht(Ym);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function iV(e, t) {
  const { colorMode: r } = Su();
  return r === "dark" ? t : e;
}
function Gm() {
  const e = Su(), t = Ao();
  return { ...e, theme: t };
}
function r_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function n_(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function sV(e, t, r) {
  const n = Ao();
  return o_(e, t, r)(n);
}
function o_(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return r_(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return n_(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var ir = (...e) => e.filter(Boolean).join(" ");
function a_() {
  return process.env.NODE_ENV !== "production";
}
function gr(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var lV = (e) => {
  const { condition: t, message: r } = e;
  t && a_() && console.warn(r);
};
function $n(e, ...t) {
  return i_(e) ? e(...t) : e;
}
var i_ = (e) => typeof e == "function", cV = (e) => e ? "" : void 0, uV = (e) => e ? !0 : void 0;
function Pr(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function dV(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Zi = { exports: {} };
Zi.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", m = "[object GeneratorFunction]", h = "[object Map]", g = "[object Number]", x = "[object Null]", S = "[object Object]", w = "[object Proxy]", T = "[object RegExp]", b = "[object Set]", j = "[object String]", D = "[object Undefined]", B = "[object WeakMap]", V = "[object ArrayBuffer]", N = "[object DataView]", X = "[object Float32Array]", ae = "[object Float64Array]", te = "[object Int8Array]", Z = "[object Int16Array]", J = "[object Int32Array]", ie = "[object Uint8Array]", K = "[object Uint8ClampedArray]", ve = "[object Uint16Array]", pe = "[object Uint32Array]", O = /[\\^$.*+?()[\]{}|]/g, M = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, P = {};
  P[X] = P[ae] = P[te] = P[Z] = P[J] = P[ie] = P[K] = P[ve] = P[pe] = !0, P[s] = P[l] = P[V] = P[u] = P[N] = P[d] = P[f] = P[p] = P[h] = P[g] = P[S] = P[T] = P[b] = P[j] = P[B] = !1;
  var R = typeof ni == "object" && ni && ni.Object === Object && ni, I = typeof self == "object" && self && self.Object === Object && self, C = R || I || Function("return this")(), L = t && !t.nodeType && t, $ = L && !0 && e && !e.nodeType && e, G = $ && $.exports === L, U = G && R.process, re = function() {
    try {
      var v = $ && $.require && $.require("util").types;
      return v || U && U.binding && U.binding("util");
    } catch {
    }
  }(), _ = re && re.isTypedArray;
  function de(v, E, A) {
    switch (A.length) {
      case 0:
        return v.call(E);
      case 1:
        return v.call(E, A[0]);
      case 2:
        return v.call(E, A[0], A[1]);
      case 3:
        return v.call(E, A[0], A[1], A[2]);
    }
    return v.apply(E, A);
  }
  function le(v, E) {
    for (var A = -1, ee = Array(v); ++A < v; )
      ee[A] = E(A);
    return ee;
  }
  function oe(v) {
    return function(E) {
      return v(E);
    };
  }
  function $e(v, E) {
    return v == null ? void 0 : v[E];
  }
  function be(v, E) {
    return function(A) {
      return v(E(A));
    };
  }
  var xe = Array.prototype, dt = Function.prototype, we = Object.prototype, ct = C["__core-js_shared__"], tt = dt.toString, Oe = we.hasOwnProperty, se = function() {
    var v = /[^.]+$/.exec(ct && ct.keys && ct.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), ke = we.toString, Tt = tt.call(Object), gt = RegExp(
    "^" + tt.call(Oe).replace(O, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), st = G ? C.Buffer : void 0, jr = C.Symbol, Nr = C.Uint8Array, Br = st ? st.allocUnsafe : void 0, Q = be(Object.getPrototypeOf, Object), ge = Object.create, Sr = we.propertyIsEnumerable, H = xe.splice, ne = jr ? jr.toStringTag : void 0, ye = function() {
    try {
      var v = el(Object, "defineProperty");
      return v({}, "", {}), v;
    } catch {
    }
  }(), Se = st ? st.isBuffer : void 0, He = Math.max, bt = Date.now, Xe = el(C, "Map"), rt = el(Object, "create"), Vr = function() {
    function v() {
    }
    return function(E) {
      if (!wn(E))
        return {};
      if (ge)
        return ge(E);
      v.prototype = E;
      var A = new v();
      return v.prototype = void 0, A;
    };
  }();
  function wr(v) {
    var E = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++E < A; ) {
      var ee = v[E];
      this.set(ee[0], ee[1]);
    }
  }
  function Gs() {
    this.__data__ = rt ? rt(null) : {}, this.size = 0;
  }
  function Xa(v) {
    var E = this.has(v) && delete this.__data__[v];
    return this.size -= E ? 1 : 0, E;
  }
  function qs(v) {
    var E = this.__data__;
    if (rt) {
      var A = E[v];
      return A === n ? void 0 : A;
    }
    return Oe.call(E, v) ? E[v] : void 0;
  }
  function Ka(v) {
    var E = this.__data__;
    return rt ? E[v] !== void 0 : Oe.call(E, v);
  }
  function Za(v, E) {
    var A = this.__data__;
    return this.size += this.has(v) ? 0 : 1, A[v] = rt && E === void 0 ? n : E, this;
  }
  wr.prototype.clear = Gs, wr.prototype.delete = Xa, wr.prototype.get = qs, wr.prototype.has = Ka, wr.prototype.set = Za;
  function sr(v) {
    var E = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++E < A; ) {
      var ee = v[E];
      this.set(ee[0], ee[1]);
    }
  }
  function Xs() {
    this.__data__ = [], this.size = 0;
  }
  function Ja(v) {
    var E = this.__data__, A = Dt(E, v);
    if (A < 0)
      return !1;
    var ee = E.length - 1;
    return A == ee ? E.pop() : H.call(E, A, 1), --this.size, !0;
  }
  function Ks(v) {
    var E = this.__data__, A = Dt(E, v);
    return A < 0 ? void 0 : E[A][1];
  }
  function Zs(v) {
    return Dt(this.__data__, v) > -1;
  }
  function Js(v, E) {
    var A = this.__data__, ee = Dt(A, v);
    return ee < 0 ? (++this.size, A.push([v, E])) : A[ee][1] = E, this;
  }
  sr.prototype.clear = Xs, sr.prototype.delete = Ja, sr.prototype.get = Ks, sr.prototype.has = Zs, sr.prototype.set = Js;
  function nn(v) {
    var E = -1, A = v == null ? 0 : v.length;
    for (this.clear(); ++E < A; ) {
      var ee = v[E];
      this.set(ee[0], ee[1]);
    }
  }
  function y() {
    this.size = 0, this.__data__ = {
      hash: new wr(),
      map: new (Xe || sr)(),
      string: new wr()
    };
  }
  function z(v) {
    var E = ti(this, v).delete(v);
    return this.size -= E ? 1 : 0, E;
  }
  function q(v) {
    return ti(this, v).get(v);
  }
  function he(v) {
    return ti(this, v).has(v);
  }
  function Ae(v, E) {
    var A = ti(this, v), ee = A.size;
    return A.set(v, E), this.size += A.size == ee ? 0 : 1, this;
  }
  nn.prototype.clear = y, nn.prototype.delete = z, nn.prototype.get = q, nn.prototype.has = he, nn.prototype.set = Ae;
  function Te(v) {
    var E = this.__data__ = new sr(v);
    this.size = E.size;
  }
  function _e() {
    this.__data__ = new sr(), this.size = 0;
  }
  function Ce(v) {
    var E = this.__data__, A = E.delete(v);
    return this.size = E.size, A;
  }
  function yt(v) {
    return this.__data__.get(v);
  }
  function nt(v) {
    return this.__data__.has(v);
  }
  function lt(v, E) {
    var A = this.__data__;
    if (A instanceof sr) {
      var ee = A.__data__;
      if (!Xe || ee.length < r - 1)
        return ee.push([v, E]), this.size = ++A.size, this;
      A = this.__data__ = new nn(ee);
    }
    return A.set(v, E), this.size = A.size, this;
  }
  Te.prototype.clear = _e, Te.prototype.delete = Ce, Te.prototype.get = yt, Te.prototype.has = nt, Te.prototype.set = lt;
  function Ot(v, E) {
    var A = nl(v), ee = !A && rl(v), Pe = !A && !ee && Sd(v), Ye = !A && !ee && !Pe && Cd(v), Je = A || ee || Pe || Ye, Ee = Je ? le(v.length, String) : [], Qe = Ee.length;
    for (var qt in v)
      (E || Oe.call(v, qt)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (qt == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Pe && (qt == "offset" || qt == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ye && (qt == "buffer" || qt == "byteLength" || qt == "byteOffset") || // Skip index properties.
      yd(qt, Qe))) && Ee.push(qt);
    return Ee;
  }
  function Cr(v, E, A) {
    (A !== void 0 && !ri(v[E], A) || A === void 0 && !(E in v)) && Qs(v, E, A);
  }
  function Qa(v, E, A) {
    var ee = v[E];
    (!(Oe.call(v, E) && ri(ee, A)) || A === void 0 && !(E in v)) && Qs(v, E, A);
  }
  function Dt(v, E) {
    for (var A = v.length; A--; )
      if (ri(v[A][0], E))
        return A;
    return -1;
  }
  function Qs(v, E, A) {
    E == "__proto__" && ye ? ye(v, E, {
      configurable: !0,
      enumerable: !0,
      value: A,
      writable: !0
    }) : v[E] = A;
  }
  var Cy = Iy();
  function ei(v) {
    return v == null ? v === void 0 ? D : x : ne && ne in Object(v) ? jy(v) : Wy(v);
  }
  function gd(v) {
    return Oo(v) && ei(v) == s;
  }
  function _y(v) {
    if (!wn(v) || zy(v))
      return !1;
    var E = al(v) ? gt : M;
    return E.test(Gy(v));
  }
  function Ey(v) {
    return Oo(v) && wd(v.length) && !!P[ei(v)];
  }
  function ky(v) {
    if (!wn(v))
      return Ly(v);
    var E = xd(v), A = [];
    for (var ee in v)
      ee == "constructor" && (E || !Oe.call(v, ee)) || A.push(ee);
    return A;
  }
  function bd(v, E, A, ee, Pe) {
    v !== E && Cy(E, function(Ye, Je) {
      if (Pe || (Pe = new Te()), wn(Ye))
        Ty(v, E, Je, A, bd, ee, Pe);
      else {
        var Ee = ee ? ee(tl(v, Je), Ye, Je + "", v, E, Pe) : void 0;
        Ee === void 0 && (Ee = Ye), Cr(v, Je, Ee);
      }
    }, _d);
  }
  function Ty(v, E, A, ee, Pe, Ye, Je) {
    var Ee = tl(v, A), Qe = tl(E, A), qt = Je.get(Qe);
    if (qt) {
      Cr(v, A, qt);
      return;
    }
    var Wt = Ye ? Ye(Ee, Qe, A + "", v, E, Je) : void 0, Do = Wt === void 0;
    if (Do) {
      var il = nl(Qe), sl = !il && Sd(Qe), kd = !il && !sl && Cd(Qe);
      Wt = Qe, il || sl || kd ? nl(Ee) ? Wt = Ee : qy(Ee) ? Wt = Dy(Ee) : sl ? (Do = !1, Wt = Ay(Qe, !0)) : kd ? (Do = !1, Wt = Oy(Qe, !0)) : Wt = [] : Xy(Qe) || rl(Qe) ? (Wt = Ee, rl(Ee) ? Wt = Ky(Ee) : (!wn(Ee) || al(Ee)) && (Wt = Ny(Qe))) : Do = !1;
    }
    Do && (Je.set(Qe, Wt), Pe(Wt, Qe, ee, Ye, Je), Je.delete(Qe)), Cr(v, A, Wt);
  }
  function Py(v, E) {
    return Hy(Uy(v, E, Ed), v + "");
  }
  var $y = ye ? function(v, E) {
    return ye(v, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Jy(E),
      writable: !0
    });
  } : Ed;
  function Ay(v, E) {
    if (E)
      return v.slice();
    var A = v.length, ee = Br ? Br(A) : new v.constructor(A);
    return v.copy(ee), ee;
  }
  function Ry(v) {
    var E = new v.constructor(v.byteLength);
    return new Nr(E).set(new Nr(v)), E;
  }
  function Oy(v, E) {
    var A = E ? Ry(v.buffer) : v.buffer;
    return new v.constructor(A, v.byteOffset, v.length);
  }
  function Dy(v, E) {
    var A = -1, ee = v.length;
    for (E || (E = Array(ee)); ++A < ee; )
      E[A] = v[A];
    return E;
  }
  function My(v, E, A, ee) {
    var Pe = !A;
    A || (A = {});
    for (var Ye = -1, Je = E.length; ++Ye < Je; ) {
      var Ee = E[Ye], Qe = ee ? ee(A[Ee], v[Ee], Ee, A, v) : void 0;
      Qe === void 0 && (Qe = v[Ee]), Pe ? Qs(A, Ee, Qe) : Qa(A, Ee, Qe);
    }
    return A;
  }
  function Fy(v) {
    return Py(function(E, A) {
      var ee = -1, Pe = A.length, Ye = Pe > 1 ? A[Pe - 1] : void 0, Je = Pe > 2 ? A[2] : void 0;
      for (Ye = v.length > 3 && typeof Ye == "function" ? (Pe--, Ye) : void 0, Je && By(A[0], A[1], Je) && (Ye = Pe < 3 ? void 0 : Ye, Pe = 1), E = Object(E); ++ee < Pe; ) {
        var Ee = A[ee];
        Ee && v(E, Ee, ee, Ye);
      }
      return E;
    });
  }
  function Iy(v) {
    return function(E, A, ee) {
      for (var Pe = -1, Ye = Object(E), Je = ee(E), Ee = Je.length; Ee--; ) {
        var Qe = Je[v ? Ee : ++Pe];
        if (A(Ye[Qe], Qe, Ye) === !1)
          break;
      }
      return E;
    };
  }
  function ti(v, E) {
    var A = v.__data__;
    return Vy(E) ? A[typeof E == "string" ? "string" : "hash"] : A.map;
  }
  function el(v, E) {
    var A = $e(v, E);
    return _y(A) ? A : void 0;
  }
  function jy(v) {
    var E = Oe.call(v, ne), A = v[ne];
    try {
      v[ne] = void 0;
      var ee = !0;
    } catch {
    }
    var Pe = ke.call(v);
    return ee && (E ? v[ne] = A : delete v[ne]), Pe;
  }
  function Ny(v) {
    return typeof v.constructor == "function" && !xd(v) ? Vr(Q(v)) : {};
  }
  function yd(v, E) {
    var A = typeof v;
    return E = E ?? i, !!E && (A == "number" || A != "symbol" && F.test(v)) && v > -1 && v % 1 == 0 && v < E;
  }
  function By(v, E, A) {
    if (!wn(A))
      return !1;
    var ee = typeof E;
    return (ee == "number" ? ol(A) && yd(E, A.length) : ee == "string" && E in A) ? ri(A[E], v) : !1;
  }
  function Vy(v) {
    var E = typeof v;
    return E == "string" || E == "number" || E == "symbol" || E == "boolean" ? v !== "__proto__" : v === null;
  }
  function zy(v) {
    return !!se && se in v;
  }
  function xd(v) {
    var E = v && v.constructor, A = typeof E == "function" && E.prototype || we;
    return v === A;
  }
  function Ly(v) {
    var E = [];
    if (v != null)
      for (var A in Object(v))
        E.push(A);
    return E;
  }
  function Wy(v) {
    return ke.call(v);
  }
  function Uy(v, E, A) {
    return E = He(E === void 0 ? v.length - 1 : E, 0), function() {
      for (var ee = arguments, Pe = -1, Ye = He(ee.length - E, 0), Je = Array(Ye); ++Pe < Ye; )
        Je[Pe] = ee[E + Pe];
      Pe = -1;
      for (var Ee = Array(E + 1); ++Pe < E; )
        Ee[Pe] = ee[Pe];
      return Ee[E] = A(Je), de(v, this, Ee);
    };
  }
  function tl(v, E) {
    if (!(E === "constructor" && typeof v[E] == "function") && E != "__proto__")
      return v[E];
  }
  var Hy = Yy($y);
  function Yy(v) {
    var E = 0, A = 0;
    return function() {
      var ee = bt(), Pe = a - (ee - A);
      if (A = ee, Pe > 0) {
        if (++E >= o)
          return arguments[0];
      } else
        E = 0;
      return v.apply(void 0, arguments);
    };
  }
  function Gy(v) {
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
  function ri(v, E) {
    return v === E || v !== v && E !== E;
  }
  var rl = gd(function() {
    return arguments;
  }()) ? gd : function(v) {
    return Oo(v) && Oe.call(v, "callee") && !Sr.call(v, "callee");
  }, nl = Array.isArray;
  function ol(v) {
    return v != null && wd(v.length) && !al(v);
  }
  function qy(v) {
    return Oo(v) && ol(v);
  }
  var Sd = Se || Qy;
  function al(v) {
    if (!wn(v))
      return !1;
    var E = ei(v);
    return E == p || E == m || E == c || E == w;
  }
  function wd(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= i;
  }
  function wn(v) {
    var E = typeof v;
    return v != null && (E == "object" || E == "function");
  }
  function Oo(v) {
    return v != null && typeof v == "object";
  }
  function Xy(v) {
    if (!Oo(v) || ei(v) != S)
      return !1;
    var E = Q(v);
    if (E === null)
      return !0;
    var A = Oe.call(E, "constructor") && E.constructor;
    return typeof A == "function" && A instanceof A && tt.call(A) == Tt;
  }
  var Cd = _ ? oe(_) : Ey;
  function Ky(v) {
    return My(v, _d(v));
  }
  function _d(v) {
    return ol(v) ? Ot(v, !0) : ky(v);
  }
  var Zy = Fy(function(v, E, A, ee) {
    bd(v, E, A, ee);
  });
  function Jy(v) {
    return function() {
      return v;
    };
  }
  function Ed(v) {
    return v;
  }
  function Qy() {
    return !1;
  }
  e.exports = Zy;
})(Zi, Zi.exports);
var s_ = Zi.exports;
const er = /* @__PURE__ */ ys(s_);
var l_ = (e) => /!(important)?$/.test(e), bf = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, c_ = (e, t) => (r) => {
  const n = String(t), o = l_(n), a = bf(n), i = e ? `${e}.${a}` : a;
  let s = gr(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = bf(s), o ? `${s} !important` : s;
};
function wu(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = c_(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var ii = (...e) => (t) => e.reduce((r, n) => n(r), t);
function Xt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = wu({
      scale: e,
      transform: t
    }), n;
  };
}
var u_ = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function d_(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: u_(t),
    transform: r ? wu({
      scale: r,
      compose: n
    }) : n
  };
}
var qm = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function f_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...qm
  ].join(" ");
}
function p_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...qm
  ].join(" ");
}
var h_ = {
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
}, m_ = {
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
function v_(e) {
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
var g_ = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, bc = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, b_ = new Set(Object.values(bc)), yc = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), y_ = (e) => e.trim();
function x_(e, t) {
  if (e == null || yc.has(e))
    return e;
  if (!(xc(e) || yc.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(y_).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in bc ? bc[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (b_.has(f))
      return f;
    const p = f.indexOf(" "), [m, h] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], g = xc(h) ? h : h && h.split(" "), x = `colors.${m}`, S = x in t.__cssMap ? t.__cssMap[x].varRef : m;
    return g ? [
      S,
      ...Array.isArray(g) ? g : [g]
    ].join(" ") : S;
  });
  return `${s}(${d.join(", ")})`;
}
var xc = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), S_ = (e, t) => x_(e, t ?? {});
function w_(e) {
  return /^var\(--.+\)$/.test(e);
}
var C_ = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, _r = (e) => (t) => `${e}(${t})`, De = {
  filter(e) {
    return e !== "auto" ? e : h_;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : m_;
  },
  ring(e) {
    return v_(De.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? f_() : e === "auto-gpu" ? p_() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = C_(e);
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
    if (w_(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: S_,
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
    return e == null || xc(e) || yc.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = g_[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, k = {
  borderWidths: Xt("borderWidths"),
  borderStyles: Xt("borderStyles"),
  colors: Xt("colors"),
  borders: Xt("borders"),
  gradients: Xt("gradients", De.gradient),
  radii: Xt("radii", De.px),
  space: Xt("space", ii(De.vh, De.px)),
  spaceT: Xt("space", ii(De.vh, De.px)),
  degreeT(e) {
    return { property: e, transform: De.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: wu({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: Xt("sizes", ii(De.vh, De.px)),
  sizesT: Xt("sizes", ii(De.vh, De.fraction)),
  shadows: Xt("shadows"),
  logical: d_,
  blur: Xt("blur", De.blur)
}, $i = {
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
Object.assign($i, {
  bgImage: $i.backgroundImage,
  bgImg: $i.backgroundImage
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
var __ = {
  color: k.colors("color"),
  textColor: k.colors("color"),
  fill: k.colors("fill"),
  stroke: k.colors("stroke")
}, Sc = {
  boxShadow: k.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: k.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: k.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Sc, {
  shadow: Sc.boxShadow
});
var E_ = {
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
}, Ji = {
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
Object.assign(Ji, {
  flexDir: Ji.flexDirection
});
var Xm = {
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
}, k_ = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: De.outline },
  outlineOffset: !0,
  outlineColor: k.colors("outlineColor")
}, Zt = {
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
Object.assign(Zt, {
  w: Zt.width,
  h: Zt.height,
  minW: Zt.minWidth,
  maxW: Zt.maxWidth,
  minH: Zt.minHeight,
  maxH: Zt.maxHeight,
  overscroll: Zt.overscrollBehavior,
  overscrollX: Zt.overscrollBehaviorX,
  overscrollY: Zt.overscrollBehaviorY
});
var T_ = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: k.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: k.prop("listStyleImage")
};
function P_(e, t, r, n) {
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
}, A_ = $_(P_), R_ = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, O_ = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, fl = (e, t, r) => {
  const n = {}, o = A_(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, D_ = {
  srOnly: {
    transform(e) {
      return e === !0 ? R_ : e === "focusable" ? O_ : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => fl(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => fl(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => fl(t, e, r)
  }
}, Qo = {
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
Object.assign(Qo, {
  insetStart: Qo.insetInlineStart,
  insetEnd: Qo.insetInlineEnd
});
var M_ = {
  ring: { transform: De.ring },
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
var F_ = {
  textDecorationColor: k.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: k.shadows("textShadow")
}, I_ = {
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
}, j_ = {
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
}, N_ = {
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
}, B_ = {
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
function Km(e) {
  return gr(e) && e.reference ? e.reference : String(e);
}
var ks = (e, ...t) => t.map(Km).join(` ${e} `).replace(/calc/g, ""), yf = (...e) => `calc(${ks("+", ...e)})`, xf = (...e) => `calc(${ks("-", ...e)})`, wc = (...e) => `calc(${ks("*", ...e)})`, Sf = (...e) => `calc(${ks("/", ...e)})`, wf = (e) => {
  const t = Km(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : wc(t, -1);
}, Tn = Object.assign(
  (e) => ({
    add: (...t) => Tn(yf(e, ...t)),
    subtract: (...t) => Tn(xf(e, ...t)),
    multiply: (...t) => Tn(wc(e, ...t)),
    divide: (...t) => Tn(Sf(e, ...t)),
    negate: () => Tn(wf(e)),
    toString: () => e.toString()
  }),
  {
    add: yf,
    subtract: xf,
    multiply: wc,
    divide: Sf,
    negate: wf
  }
);
function V_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function z_(e) {
  const t = V_(e.toString());
  return W_(L_(t));
}
function L_(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function W_(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function U_(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function H_(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Y_(e, t = "") {
  return z_(`--${U_(e, t)}`);
}
function me(e, t, r) {
  const n = Y_(e, r);
  return {
    variable: n,
    reference: H_(n, t)
  };
}
function G_(e, t) {
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
function q_(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function X_(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Cc(e) {
  if (e == null)
    return e;
  const { unitless: t } = X_(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var Zm = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Cu = (e) => Object.fromEntries(Object.entries(e).sort(Zm));
function Cf(e) {
  const t = Cu(e);
  return Object.assign(Object.values(t), t);
}
function K_(e) {
  const t = Object.keys(Cu(e));
  return new Set(t);
}
function _f(e) {
  var t;
  if (!e)
    return e;
  e = (t = Cc(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function Uo(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Cc(e)})`), t && r.push("and", `(max-width: ${Cc(t)})`), r.join(" ");
}
function Z_(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Cf(e), n = Object.entries(e).sort(Zm).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? _f(d) : void 0, {
      _minW: _f(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: Uo(null, d),
      minWQuery: Uo(s),
      minMaxQuery: Uo(s, d)
    };
  }), o = K_(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Cu(e),
    asArray: Cf(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => Uo(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!gr(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; q_(s) === null; )
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
var xt = {
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
}, on = (e) => Jm((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), zr = (e) => Jm((t) => e(t, "~ &"), "[data-peer]", ".peer"), Jm = (e, ...t) => t.map(e).join(", "), Ts = {
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
  _groupHover: on(xt.hover),
  _peerHover: zr(xt.hover),
  _groupFocus: on(xt.focus),
  _peerFocus: zr(xt.focus),
  _groupFocusVisible: on(xt.focusVisible),
  _peerFocusVisible: zr(xt.focusVisible),
  _groupActive: on(xt.active),
  _peerActive: zr(xt.active),
  _groupDisabled: on(xt.disabled),
  _peerDisabled: zr(xt.disabled),
  _groupInvalid: on(xt.invalid),
  _peerInvalid: zr(xt.invalid),
  _groupChecked: on(xt.checked),
  _peerChecked: zr(xt.checked),
  _groupFocusWithin: on(xt.focusWithin),
  _peerFocusWithin: zr(xt.focusWithin),
  _peerPlaceholderShown: zr(xt.placeholderShown),
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
}, Qm = Object.keys(
  Ts
);
function Ef(e, t) {
  return me(String(e).replace(/\./g, "-"), void 0, t);
}
function J_(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Ef(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...m] = f, h = `${p}.-${m.join(".")}`, g = Tn.negate(s), x = Tn.negate(c);
        n[h] = {
          value: g,
          var: l,
          varRef: x
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
      const { reference: g } = Ef(m, t == null ? void 0 : t.cssVarPrefix);
      return g;
    }, d = gr(s) ? s : { default: s };
    r = er(
      r,
      Object.entries(d).reduce(
        (f, [p, m]) => {
          var h, g;
          if (!m)
            return f;
          const x = u(`${m}`);
          if (p === "default")
            return f[l] = x, f;
          const S = (g = (h = Ts) == null ? void 0 : h[p]) != null ? g : p;
          return f[S] = { [l]: x }, f;
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
function Q_(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function eE(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function tE(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function kf(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (tE(i) || Array.isArray(i)) {
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
var rE = [
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
function nE(e) {
  return eE(e, rE);
}
function oE(e) {
  return e.semanticTokens;
}
function aE(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var iE = (e) => Qm.includes(e) || e === "default";
function sE({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return kf(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), kf(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(iE)
    }
  ), r;
}
function fV(e) {
  var t;
  const r = aE(e), n = nE(r), o = oE(r), a = sE({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = J_(a, { cssVarPrefix: i });
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
    __breakpoints: Z_(r.breakpoints)
  }), r;
}
var _u = er(
  {},
  $i,
  Fe,
  __,
  Ji,
  Zt,
  E_,
  M_,
  k_,
  Xm,
  D_,
  Qo,
  Sc,
  Ke,
  B_,
  N_,
  F_,
  I_,
  T_,
  j_
), lE = Object.assign({}, Ke, Zt, Ji, Xm, Qo), pV = Object.keys(
  lE
), cE = [...Object.keys(_u), ...Qm], uE = { ..._u, ...Ts }, dE = (e) => e in uE, fE = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = $n(e[i], t);
    if (s == null)
      continue;
    if (s = gr(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
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
function pE(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function hE(e) {
  return /^var\(--.+\)$/.test(e);
}
var mE = (e, t) => e.startsWith("--") && typeof t == "string" && !hE(t), vE = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = pE(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function gE(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = $n(a, n), d = fE(u)(n);
    let f = {};
    for (let p in d) {
      const m = d[p];
      let h = $n(m, n);
      p in r && (p = r[p]), mE(p, h) && (h = vE(n, h));
      let g = t[p];
      if (g === !0 && (g = { property: p }), gr(h)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = er(
          {},
          f[p],
          o(h, !0)
        );
        continue;
      }
      let x = (c = (l = g == null ? void 0 : g.transform) == null ? void 0 : l.call(g, h, n, u)) != null ? c : h;
      x = g != null && g.processResult ? o(x, !0) : x;
      const S = $n(g == null ? void 0 : g.property, n);
      if (!i && (g != null && g.static)) {
        const w = $n(g.static, n);
        f = er({}, f, w);
      }
      if (S && Array.isArray(S)) {
        for (const w of S)
          f[w] = x;
        continue;
      }
      if (S) {
        S === "&" && gr(x) ? f = er({}, f, x) : f[S] = x;
        continue;
      }
      if (gr(x)) {
        f = er({}, f, x);
        continue;
      }
      f[p] = x;
    }
    return f;
  };
  return o;
}
var bE = (e) => (t) => gE({
  theme: t,
  pseudos: Ts,
  configs: _u
})(e);
function hV(e) {
  return e;
}
function mV(e) {
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
function yE(e, t) {
  if (Array.isArray(e))
    return e;
  if (gr(e))
    return t(e);
  if (e != null)
    return [e];
}
function xE(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function SE(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = yE(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let m = 0; m < d; m++) {
      const h = t.details[m], g = t.details[xE(u, m)], x = Uo(h.minW, g == null ? void 0 : g._minW), S = $n((s = n[o]) == null ? void 0 : s[u[m]], i);
      if (S) {
        if (p) {
          (l = n.parts) == null || l.forEach((w) => {
            er(c, {
              [w]: f ? S[w] : { [x]: S[w] }
            });
          });
          continue;
        }
        if (!p) {
          f ? er(c, S) : c[x] = S;
          continue;
        }
        c[x] = S;
      }
    }
    return c;
  };
}
function wE(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = SE(a);
    return er(
      {},
      $n((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function ev(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Ps(e) {
  return Q_(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var CE = [
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
function _E(e) {
  return gr(e) ? CE.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var EE = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, kE = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, TE = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, PE = {
  property: EE,
  easing: kE,
  duration: TE
}, $E = PE, AE = {
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
}, RE = AE, OE = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, DE = OE, ME = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, FE = ME, IE = {
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
}, jE = IE, NE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, BE = NE, VE = {
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
}, zE = VE, LE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, WE = LE, UE = {
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
}, tv = UE, rv = {
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
}, HE = {
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
}, YE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, GE = {
  ...rv,
  ...HE,
  container: YE
}, nv = GE, ov = {
  breakpoints: FE,
  zIndices: RE,
  radii: BE,
  blur: WE,
  colors: jE,
  ...tv,
  sizes: nv,
  shadows: zE,
  space: rv,
  borders: DE,
  transition: $E
}, { defineMultiStyleConfig: qE, definePartsStyle: Ho } = qe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Lr = me("stepper-indicator-size"), eo = me("stepper-icon-size"), to = me("stepper-title-font-size"), Yo = me("stepper-description-font-size"), jo = me("stepper-accent-color"), XE = Ho(({ colorScheme: e }) => ({
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
    fontSize: to.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: Yo.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: to.reference
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
    width: eo.reference,
    height: eo.reference
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
})), KE = qE({
  baseStyle: XE,
  sizes: {
    xs: Ho({
      stepper: {
        [Lr.variable]: "sizes.4",
        [eo.variable]: "sizes.3",
        [to.variable]: "fontSizes.xs",
        [Yo.variable]: "fontSizes.xs"
      }
    }),
    sm: Ho({
      stepper: {
        [Lr.variable]: "sizes.6",
        [eo.variable]: "sizes.4",
        [to.variable]: "fontSizes.sm",
        [Yo.variable]: "fontSizes.xs"
      }
    }),
    md: Ho({
      stepper: {
        [Lr.variable]: "sizes.8",
        [eo.variable]: "sizes.5",
        [to.variable]: "fontSizes.md",
        [Yo.variable]: "fontSizes.sm"
      }
    }),
    lg: Ho({
      stepper: {
        [Lr.variable]: "sizes.10",
        [eo.variable]: "sizes.6",
        [to.variable]: "fontSizes.lg",
        [Yo.variable]: "fontSizes.md"
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
var ZE = We("accordion").parts("root", "container", "button", "panel").extend("icon"), JE = We("alert").parts("title", "description", "container").extend("icon", "spinner"), QE = We("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), ek = We("breadcrumb").parts("link", "item", "container").extend("separator");
We("button").parts();
var tk = We("checkbox").parts("control", "icon", "container").extend("label");
We("progress").parts("track", "filledTrack").extend("label");
var rk = We("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), nk = We("editable").parts(
  "preview",
  "input",
  "textarea"
), ok = We("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), ak = We("formError").parts("text", "icon"), ik = We("input").parts("addon", "field", "element"), sk = We("list").parts("container", "item", "icon"), lk = We("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), ck = We("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), uk = We("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
We("pininput").parts("field");
var dk = We("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), fk = We("progress").parts(
  "label",
  "filledTrack",
  "track"
), pk = We("radio").parts(
  "container",
  "control",
  "label"
), hk = We("select").parts("field", "icon"), mk = We("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), vk = We("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), gk = We("switch").parts(
  "container",
  "track",
  "thumb"
), bk = We("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), yk = We("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), xk = We("tag").parts(
  "container",
  "label",
  "closeButton"
), Sk = We("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function An(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class wk extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Go = wk;
function Eu(e) {
  if (typeof e != "string")
    throw new Go(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = Ak.test(e) ? Ek(e) : e;
  const r = kk.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(wa(s, 2), 16)), parseInt(wa(i[3] || "f", 2), 16) / 255];
  }
  const n = Tk.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = Pk.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = $k.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (An(0, 100, s) !== s)
      throw new Go(e);
    if (An(0, 100, l) !== l)
      throw new Go(e);
    return [...Rk(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new Go(e);
}
function Ck(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Tf = (e) => parseInt(e.replace(/_/g, ""), 36), _k = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Tf(t.substring(0, 3)), n = Tf(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function Ek(e) {
  const t = e.toLowerCase().trim(), r = _k[Ck(t)];
  if (!r)
    throw new Go(e);
  return `#${r}`;
}
const wa = (e, t) => Array.from(Array(t)).map(() => e).join(""), kk = new RegExp(`^#${wa("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Tk = new RegExp(`^#${wa("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Pk = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${wa(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), $k = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Ak = /^[a-z]+$/i, Pf = (e) => Math.round(e * 255), Rk = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Pf);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Pf);
};
function Ok(e, t, r, n) {
  return `rgba(${An(0, 255, e).toFixed()}, ${An(0, 255, t).toFixed()}, ${An(0, 255, r).toFixed()}, ${parseFloat(An(0, 1, n).toFixed(3))})`;
}
function Dk(e, t) {
  const [r, n, o, a] = Eu(e);
  return Ok(r, n, o, a - t);
}
function Mk(e) {
  const [t, r, n, o] = Eu(e);
  let a = (i) => {
    const s = An(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function Fk(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var Ik = (e) => Object.keys(e).length === 0, Qi = (e, t, r) => {
  const n = Fk(e, `colors.${t}`, t);
  try {
    return Mk(n), n;
  } catch {
    return r ?? "#000000";
  }
}, mr = (e, t, r) => {
  var n;
  return (n = ev(e, "colors", t)) != null ? n : r;
}, jk = (e) => {
  const [t, r, n] = Eu(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, Nk = (e) => (t) => {
  const r = Qi(t, e);
  return jk(r) < 128 ? "dark" : "light";
}, Bk = (e) => (t) => Nk(e)(t) === "dark", So = (e, t) => (r) => {
  const n = Qi(r, e);
  return Dk(n, 1 - t);
};
function $f(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var Vk = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function zk(e) {
  const t = Vk();
  return !e || Ik(e) ? t : e.string && e.colors ? Wk(e.string, e.colors) : e.string && !e.colors ? Lk(e.string) : e.colors && !e.string ? Uk(e.colors) : t;
}
function Lk(e) {
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
function Wk(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function Uk(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function ce(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function ku(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function av(e) {
  return gr(e) && e.reference ? e.reference : String(e);
}
var $s = (e, ...t) => t.map(av).join(` ${e} `).replace(/calc/g, ""), Af = (...e) => `calc(${$s("+", ...e)})`, Rf = (...e) => `calc(${$s("-", ...e)})`, _c = (...e) => `calc(${$s("*", ...e)})`, Of = (...e) => `calc(${$s("/", ...e)})`, Df = (e) => {
  const t = av(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : _c(t, -1);
}, Wr = Object.assign(
  (e) => ({
    add: (...t) => Wr(Af(e, ...t)),
    subtract: (...t) => Wr(Rf(e, ...t)),
    multiply: (...t) => Wr(_c(e, ...t)),
    divide: (...t) => Wr(Of(e, ...t)),
    negate: () => Wr(Df(e)),
    toString: () => e.toString()
  }),
  {
    add: Af,
    subtract: Rf,
    multiply: _c,
    divide: Of,
    negate: Df
  }
);
function Hk(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function Yk(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function iv(e) {
  const t = Yk(e.toString());
  return t.includes("\\.") ? e : Hk(e) ? t.replace(".", "\\.") : e;
}
function Gk(e, t = "") {
  return [t, iv(e)].filter(Boolean).join("-");
}
function qk(e, t) {
  return `var(${iv(e)}${t ? `, ${t}` : ""})`;
}
function Xk(e, t = "") {
  return `--${Gk(e, t)}`;
}
function vt(e, t) {
  const r = Xk(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: qk(r, Kk(t == null ? void 0 : t.fallback))
  };
}
function Kk(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: Zk, definePartsStyle: Ai } = qe(gk.keys), ea = vt("switch-track-width"), Dn = vt("switch-track-height"), pl = vt("switch-track-diff"), Jk = Wr.subtract(ea, Dn), Ec = vt("switch-thumb-x"), No = vt("switch-bg"), Qk = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [ea.reference],
    height: [Dn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [No.variable]: "colors.gray.300",
    _dark: {
      [No.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [No.variable]: `colors.${t}.500`,
      _dark: {
        [No.variable]: `colors.${t}.200`
      }
    },
    bg: No.reference
  };
}, eT = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Dn.reference],
  height: [Dn.reference],
  _checked: {
    transform: `translateX(${Ec.reference})`
  }
}, tT = Ai((e) => ({
  container: {
    [pl.variable]: Jk,
    [Ec.variable]: pl.reference,
    _rtl: {
      [Ec.variable]: Wr(pl).negate().toString()
    }
  },
  track: Qk(e),
  thumb: eT
})), rT = {
  sm: Ai({
    container: {
      [ea.variable]: "1.375rem",
      [Dn.variable]: "sizes.3"
    }
  }),
  md: Ai({
    container: {
      [ea.variable]: "1.875rem",
      [Dn.variable]: "sizes.4"
    }
  }),
  lg: Ai({
    container: {
      [ea.variable]: "2.875rem",
      [Dn.variable]: "sizes.6"
    }
  })
}, nT = Zk({
  baseStyle: tT,
  sizes: rT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: oT, definePartsStyle: lo } = qe(bk.keys), aT = lo({
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
}), es = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, iT = lo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ce("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ce(`${t}.100`, `${t}.700`)(e),
      ...es
    },
    td: {
      borderBottom: "1px",
      borderColor: ce(`${t}.100`, `${t}.700`)(e),
      ...es
    },
    caption: {
      color: ce("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), sT = lo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: ce("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: ce(`${t}.100`, `${t}.700`)(e),
      ...es
    },
    td: {
      borderBottom: "1px",
      borderColor: ce(`${t}.100`, `${t}.700`)(e),
      ...es
    },
    caption: {
      color: ce("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: ce(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: ce(`${t}.100`, `${t}.700`)(e)
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
}), lT = {
  simple: iT,
  striped: sT,
  unstyled: {}
}, cT = {
  sm: lo({
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
  md: lo({
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
  lg: lo({
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
}, uT = oT({
  baseStyle: aT,
  variants: lT,
  sizes: cT,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ft = me("tabs-color"), hr = me("tabs-bg"), si = me("tabs-border-color"), { defineMultiStyleConfig: dT, definePartsStyle: Rr } = qe(yk.keys), fT = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, pT = (e) => {
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
}, hT = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, mT = {
  p: 4
}, vT = Rr((e) => ({
  root: fT(e),
  tab: pT(e),
  tablist: hT(e),
  tabpanel: mT
})), gT = {
  sm: Rr({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Rr({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Rr({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, bT = Rr((e) => {
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
        [Ft.variable]: `colors.${t}.600`,
        _dark: {
          [Ft.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [hr.variable]: "colors.gray.200",
        _dark: {
          [hr.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ft.reference,
      bg: hr.reference
    }
  };
}), yT = Rr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [si.variable]: "transparent",
      _selected: {
        [Ft.variable]: `colors.${t}.600`,
        [si.variable]: "colors.white",
        _dark: {
          [Ft.variable]: `colors.${t}.300`,
          [si.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: si.reference
      },
      color: Ft.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), xT = Rr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [hr.variable]: "colors.gray.50",
      _dark: {
        [hr.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [hr.variable]: "colors.white",
        [Ft.variable]: `colors.${t}.600`,
        _dark: {
          [hr.variable]: "colors.gray.800",
          [Ft.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ft.reference,
      bg: hr.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), ST = Rr((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Qi(r, `${t}.700`),
        bg: Qi(r, `${t}.100`)
      }
    }
  };
}), wT = Rr((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ft.variable]: "colors.gray.600",
      _dark: {
        [Ft.variable]: "inherit"
      },
      _selected: {
        [Ft.variable]: "colors.white",
        [hr.variable]: `colors.${t}.600`,
        _dark: {
          [Ft.variable]: "colors.gray.800",
          [hr.variable]: `colors.${t}.300`
        }
      },
      color: Ft.reference,
      bg: hr.reference
    }
  };
}), CT = Rr({}), _T = {
  line: bT,
  enclosed: yT,
  "enclosed-colored": xT,
  "soft-rounded": ST,
  "solid-rounded": wT,
  unstyled: CT
}, ET = dT({
  baseStyle: vT,
  sizes: gT,
  variants: _T,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), ut = G_("badge", ["bg", "color", "shadow"]), kT = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: ut.bg.reference,
  color: ut.color.reference,
  boxShadow: ut.shadow.reference
}, TT = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.500`, 0.6)(r);
  return {
    [ut.bg.variable]: `colors.${t}.500`,
    [ut.color.variable]: "colors.white",
    _dark: {
      [ut.bg.variable]: n,
      [ut.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, PT = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.200`, 0.16)(r);
  return {
    [ut.bg.variable]: `colors.${t}.100`,
    [ut.color.variable]: `colors.${t}.800`,
    _dark: {
      [ut.bg.variable]: n,
      [ut.color.variable]: `colors.${t}.200`
    }
  };
}, $T = (e) => {
  const { colorScheme: t, theme: r } = e, n = So(`${t}.200`, 0.8)(r);
  return {
    [ut.color.variable]: `colors.${t}.500`,
    _dark: {
      [ut.color.variable]: n
    },
    [ut.shadow.variable]: `inset 0 0 0px 1px ${ut.color.reference}`
  };
}, AT = {
  solid: TT,
  subtle: PT,
  outline: $T
}, ta = {
  baseStyle: kT,
  variants: AT,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: RT, definePartsStyle: Mn } = qe(xk.keys), Mf = me("tag-bg"), Ff = me("tag-color"), hl = me("tag-shadow"), Ri = me("tag-min-height"), Oi = me("tag-min-width"), Di = me("tag-font-size"), Mi = me("tag-padding-inline"), OT = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Ff.variable]: ut.color.reference,
  [Mf.variable]: ut.bg.reference,
  [hl.variable]: ut.shadow.reference,
  color: Ff.reference,
  bg: Mf.reference,
  boxShadow: hl.reference,
  borderRadius: "md",
  minH: Ri.reference,
  minW: Oi.reference,
  fontSize: Di.reference,
  px: Mi.reference,
  _focusVisible: {
    [hl.variable]: "shadows.outline"
  }
}, DT = {
  lineHeight: 1.2,
  overflow: "visible"
}, MT = {
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
}, FT = Mn({
  container: OT,
  label: DT,
  closeButton: MT
}), IT = {
  sm: Mn({
    container: {
      [Ri.variable]: "sizes.5",
      [Oi.variable]: "sizes.5",
      [Di.variable]: "fontSizes.xs",
      [Mi.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Mn({
    container: {
      [Ri.variable]: "sizes.6",
      [Oi.variable]: "sizes.6",
      [Di.variable]: "fontSizes.sm",
      [Mi.variable]: "space.2"
    }
  }),
  lg: Mn({
    container: {
      [Ri.variable]: "sizes.8",
      [Oi.variable]: "sizes.8",
      [Di.variable]: "fontSizes.md",
      [Mi.variable]: "space.3"
    }
  })
}, jT = {
  subtle: Mn((e) => {
    var t;
    return {
      container: (t = ta.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Mn((e) => {
    var t;
    return {
      container: (t = ta.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Mn((e) => {
    var t;
    return {
      container: (t = ta.variants) == null ? void 0 : t.outline(e)
    };
  })
}, NT = RT({
  variants: jT,
  baseStyle: FT,
  sizes: IT,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Ur, defineMultiStyleConfig: BT } = qe(ik.keys), VT = Ur({
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
}), an = {
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
}, zT = {
  lg: Ur({
    field: an.lg,
    addon: an.lg
  }),
  md: Ur({
    field: an.md,
    addon: an.md
  }),
  sm: Ur({
    field: an.sm,
    addon: an.sm
  }),
  xs: Ur({
    field: an.xs,
    addon: an.xs
  })
};
function Tu(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || ce("blue.500", "blue.300")(e),
    errorBorderColor: r || ce("red.500", "red.300")(e)
  };
}
var LT = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Tu(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: ce("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: mr(t, n),
        boxShadow: `0 0 0 1px ${mr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: mr(t, r),
        boxShadow: `0 0 0 1px ${mr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: ce("inherit", "whiteAlpha.50")(e),
      bg: ce("gray.100", "whiteAlpha.300")(e)
    }
  };
}), WT = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Tu(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ce("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: ce("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: mr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: mr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: ce("gray.100", "whiteAlpha.50")(e)
    }
  };
}), UT = Ur((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = Tu(e);
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
        borderColor: mr(t, n),
        boxShadow: `0px 1px 0px 0px ${mr(t, n)}`
      },
      _focusVisible: {
        borderColor: mr(t, r),
        boxShadow: `0px 1px 0px 0px ${mr(t, r)}`
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
}), HT = Ur({
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
}), YT = {
  outline: LT,
  filled: WT,
  flushed: UT,
  unstyled: HT
}, Ne = BT({
  baseStyle: VT,
  sizes: zT,
  variants: YT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), If, GT = {
  ...(If = Ne.baseStyle) == null ? void 0 : If.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, jf, Nf, qT = {
  outline: (e) => {
    var t, r;
    return (r = (t = Ne.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = Ne.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = Ne.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Nf = (jf = Ne.variants) == null ? void 0 : jf.unstyled.field) != null ? Nf : {}
}, Bf, Vf, zf, Lf, Wf, Uf, Hf, Yf, XT = {
  xs: (Vf = (Bf = Ne.sizes) == null ? void 0 : Bf.xs.field) != null ? Vf : {},
  sm: (Lf = (zf = Ne.sizes) == null ? void 0 : zf.sm.field) != null ? Lf : {},
  md: (Uf = (Wf = Ne.sizes) == null ? void 0 : Wf.md.field) != null ? Uf : {},
  lg: (Yf = (Hf = Ne.sizes) == null ? void 0 : Hf.lg.field) != null ? Yf : {}
}, KT = {
  baseStyle: GT,
  sizes: XT,
  variants: qT,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, li = vt("tooltip-bg"), ml = vt("tooltip-fg"), ZT = vt("popper-arrow-bg"), JT = {
  bg: li.reference,
  color: ml.reference,
  [li.variable]: "colors.gray.700",
  [ml.variable]: "colors.whiteAlpha.900",
  _dark: {
    [li.variable]: "colors.gray.300",
    [ml.variable]: "colors.gray.900"
  },
  [ZT.variable]: li.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, QT = {
  baseStyle: JT
}, { defineMultiStyleConfig: eP, definePartsStyle: qo } = qe(fk.keys), tP = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = ce(
    $f(),
    $f("1rem", "rgba(0,0,0,0.1)")
  )(e), i = ce(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${mr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, rP = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, nP = (e) => ({
  bg: ce("gray.100", "whiteAlpha.300")(e)
}), oP = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...tP(e)
}), aP = qo((e) => ({
  label: rP,
  filledTrack: oP(e),
  track: nP(e)
})), iP = {
  xs: qo({
    track: { h: "1" }
  }),
  sm: qo({
    track: { h: "2" }
  }),
  md: qo({
    track: { h: "3" }
  }),
  lg: qo({
    track: { h: "4" }
  })
}, sP = eP({
  sizes: iP,
  baseStyle: aP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), lP = (e) => typeof e == "function";
function $t(e, ...t) {
  return lP(e) ? e(...t) : e;
}
var { definePartsStyle: Fi, defineMultiStyleConfig: cP } = qe(tk.keys), ra = me("checkbox-size"), uP = (e) => {
  const { colorScheme: t } = e;
  return {
    w: ra.reference,
    h: ra.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: ce(`${t}.500`, `${t}.200`)(e),
      borderColor: ce(`${t}.500`, `${t}.200`)(e),
      color: ce("white", "gray.900")(e),
      _hover: {
        bg: ce(`${t}.600`, `${t}.300`)(e),
        borderColor: ce(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: ce("gray.200", "transparent")(e),
        bg: ce("gray.200", "whiteAlpha.300")(e),
        color: ce("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: ce(`${t}.500`, `${t}.200`)(e),
      borderColor: ce(`${t}.500`, `${t}.200`)(e),
      color: ce("white", "gray.900")(e)
    },
    _disabled: {
      bg: ce("gray.100", "whiteAlpha.100")(e),
      borderColor: ce("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: ce("red.500", "red.300")(e)
    }
  };
}, dP = {
  _disabled: { cursor: "not-allowed" }
}, fP = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, pP = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, hP = Fi((e) => ({
  icon: pP,
  container: dP,
  control: $t(uP, e),
  label: fP
})), mP = {
  sm: Fi({
    control: { [ra.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Fi({
    control: { [ra.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Fi({
    control: { [ra.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, ts = cP({
  baseStyle: hP,
  sizes: mP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: vP, definePartsStyle: Ii } = qe(pk.keys), gP = (e) => {
  var t;
  const r = (t = $t(ts.baseStyle, e)) == null ? void 0 : t.control;
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
}, bP = Ii((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = ts).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = ts).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: gP(e)
  };
}), yP = {
  md: Ii({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ii({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ii({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, xP = vP({
  baseStyle: bP,
  sizes: yP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: SP, definePartsStyle: wP } = qe(hk.keys), ci = me("select-bg"), Gf, CP = {
  ...(Gf = Ne.baseStyle) == null ? void 0 : Gf.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: ci.reference,
  [ci.variable]: "colors.white",
  _dark: {
    [ci.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: ci.reference
  }
}, _P = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, EP = wP({
  field: CP,
  icon: _P
}), ui = {
  paddingInlineEnd: "8"
}, qf, Xf, Kf, Zf, Jf, Qf, ep, tp, kP = {
  lg: {
    ...(qf = Ne.sizes) == null ? void 0 : qf.lg,
    field: {
      ...(Xf = Ne.sizes) == null ? void 0 : Xf.lg.field,
      ...ui
    }
  },
  md: {
    ...(Kf = Ne.sizes) == null ? void 0 : Kf.md,
    field: {
      ...(Zf = Ne.sizes) == null ? void 0 : Zf.md.field,
      ...ui
    }
  },
  sm: {
    ...(Jf = Ne.sizes) == null ? void 0 : Jf.sm,
    field: {
      ...(Qf = Ne.sizes) == null ? void 0 : Qf.sm.field,
      ...ui
    }
  },
  xs: {
    ...(ep = Ne.sizes) == null ? void 0 : ep.xs,
    field: {
      ...(tp = Ne.sizes) == null ? void 0 : tp.xs.field,
      ...ui
    },
    icon: {
      insetEnd: "1"
    }
  }
}, TP = SP({
  baseStyle: EP,
  sizes: kP,
  variants: Ne.variants,
  defaultProps: Ne.defaultProps
}), vl = me("skeleton-start-color"), gl = me("skeleton-end-color"), PP = {
  [vl.variable]: "colors.gray.100",
  [gl.variable]: "colors.gray.400",
  _dark: {
    [vl.variable]: "colors.gray.800",
    [gl.variable]: "colors.gray.600"
  },
  background: vl.reference,
  borderColor: gl.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, $P = {
  baseStyle: PP
}, bl = me("skip-link-bg"), AP = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [bl.variable]: "colors.white",
    _dark: {
      [bl.variable]: "colors.gray.700"
    },
    bg: bl.reference
  }
}, RP = {
  baseStyle: AP
}, { defineMultiStyleConfig: OP, definePartsStyle: As } = qe(mk.keys), Ca = me("slider-thumb-size"), _a = me("slider-track-size"), un = me("slider-bg"), DP = (e) => {
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
    ...ku({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, MP = (e) => ({
  ...ku({
    orientation: e.orientation,
    horizontal: { h: _a.reference },
    vertical: { w: _a.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [un.variable]: "colors.gray.200",
  _dark: {
    [un.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [un.variable]: "colors.gray.300",
    _dark: {
      [un.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: un.reference
}), FP = (e) => {
  const { orientation: t } = e;
  return {
    ...ku({
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
    w: Ca.reference,
    h: Ca.reference,
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
}, IP = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [un.variable]: `colors.${t}.500`,
    _dark: {
      [un.variable]: `colors.${t}.200`
    },
    bg: un.reference
  };
}, jP = As((e) => ({
  container: DP(e),
  track: MP(e),
  thumb: FP(e),
  filledTrack: IP(e)
})), NP = As({
  container: {
    [Ca.variable]: "sizes.4",
    [_a.variable]: "sizes.1"
  }
}), BP = As({
  container: {
    [Ca.variable]: "sizes.3.5",
    [_a.variable]: "sizes.1"
  }
}), VP = As({
  container: {
    [Ca.variable]: "sizes.2.5",
    [_a.variable]: "sizes.0.5"
  }
}), zP = {
  lg: NP,
  md: BP,
  sm: VP
}, LP = OP({
  baseStyle: jP,
  sizes: zP,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Pn = vt("spinner-size"), WP = {
  width: [Pn.reference],
  height: [Pn.reference]
}, UP = {
  xs: {
    [Pn.variable]: "sizes.3"
  },
  sm: {
    [Pn.variable]: "sizes.4"
  },
  md: {
    [Pn.variable]: "sizes.6"
  },
  lg: {
    [Pn.variable]: "sizes.8"
  },
  xl: {
    [Pn.variable]: "sizes.12"
  }
}, HP = {
  baseStyle: WP,
  sizes: UP,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: YP, definePartsStyle: sv } = qe(vk.keys), GP = {
  fontWeight: "medium"
}, qP = {
  opacity: 0.8,
  marginBottom: "2"
}, XP = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, KP = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, ZP = sv({
  container: {},
  label: GP,
  helpText: qP,
  number: XP,
  icon: KP
}), JP = {
  md: sv({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, QP = YP({
  baseStyle: ZP,
  sizes: JP,
  defaultProps: {
    size: "md"
  }
}), yl = me("kbd-bg"), e$ = {
  [yl.variable]: "colors.gray.100",
  _dark: {
    [yl.variable]: "colors.whiteAlpha.100"
  },
  bg: yl.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, t$ = {
  baseStyle: e$
}, r$ = {
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
}, n$ = {
  baseStyle: r$
}, { defineMultiStyleConfig: o$, definePartsStyle: a$ } = qe(sk.keys), i$ = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, s$ = a$({
  icon: i$
}), l$ = o$({
  baseStyle: s$
}), { defineMultiStyleConfig: c$, definePartsStyle: u$ } = qe(lk.keys), kr = me("menu-bg"), xl = me("menu-shadow"), d$ = {
  [kr.variable]: "#fff",
  [xl.variable]: "shadows.sm",
  _dark: {
    [kr.variable]: "colors.gray.700",
    [xl.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: kr.reference,
  boxShadow: xl.reference
}, f$ = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [kr.variable]: "colors.gray.200",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [kr.variable]: "colors.gray.100",
    _dark: {
      [kr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: kr.reference
}, p$ = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, h$ = {
  opacity: 0.6
}, m$ = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, v$ = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, g$ = u$({
  button: v$,
  list: d$,
  item: f$,
  groupTitle: p$,
  command: h$,
  divider: m$
}), b$ = c$({
  baseStyle: g$
}), { defineMultiStyleConfig: y$, definePartsStyle: kc } = qe(ck.keys), Sl = me("modal-bg"), wl = me("modal-shadow"), x$ = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, S$ = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, w$ = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Sl.variable]: "colors.white",
    [wl.variable]: "shadows.lg",
    _dark: {
      [Sl.variable]: "colors.gray.700",
      [wl.variable]: "shadows.dark-lg"
    },
    bg: Sl.reference,
    boxShadow: wl.reference
  };
}, C$ = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, _$ = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, E$ = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, k$ = {
  px: "6",
  py: "4"
}, T$ = kc((e) => ({
  overlay: x$,
  dialogContainer: $t(S$, e),
  dialog: $t(w$, e),
  header: C$,
  closeButton: _$,
  body: $t(E$, e),
  footer: k$
}));
function lr(e) {
  return kc(e === "full" ? {
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
var P$ = {
  xs: lr("xs"),
  sm: lr("sm"),
  md: lr("md"),
  lg: lr("lg"),
  xl: lr("xl"),
  "2xl": lr("2xl"),
  "3xl": lr("3xl"),
  "4xl": lr("4xl"),
  "5xl": lr("5xl"),
  "6xl": lr("6xl"),
  full: lr("full")
}, $$ = y$({
  baseStyle: T$,
  sizes: P$,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: A$, definePartsStyle: lv } = qe(uk.keys), Pu = vt("number-input-stepper-width"), cv = vt("number-input-input-padding"), R$ = Wr(Pu).add("0.5rem").toString(), Cl = vt("number-input-bg"), _l = vt("number-input-color"), El = vt("number-input-border-color"), O$ = {
  [Pu.variable]: "sizes.6",
  [cv.variable]: R$
}, D$ = (e) => {
  var t, r;
  return (r = (t = $t(Ne.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, M$ = {
  width: Pu.reference
}, F$ = {
  borderStart: "1px solid",
  borderStartColor: El.reference,
  color: _l.reference,
  bg: Cl.reference,
  [_l.variable]: "colors.chakra-body-text",
  [El.variable]: "colors.chakra-border-color",
  _dark: {
    [_l.variable]: "colors.whiteAlpha.800",
    [El.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Cl.variable]: "colors.gray.200",
    _dark: {
      [Cl.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, I$ = lv((e) => {
  var t;
  return {
    root: O$,
    field: (t = $t(D$, e)) != null ? t : {},
    stepperGroup: M$,
    stepper: F$
  };
});
function di(e) {
  var t, r, n;
  const o = (t = Ne.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = tv.fontSizes[i];
  return lv({
    field: {
      ...o.field,
      paddingInlineEnd: cv.reference,
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
var j$ = {
  xs: di("xs"),
  sm: di("sm"),
  md: di("md"),
  lg: di("lg")
}, N$ = A$({
  baseStyle: I$,
  sizes: j$,
  variants: Ne.variants,
  defaultProps: Ne.defaultProps
}), rp, B$ = {
  ...(rp = Ne.baseStyle) == null ? void 0 : rp.field,
  textAlign: "center"
}, V$ = {
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
}, np, op, z$ = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ne.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ne.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = $t((t = Ne.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (op = (np = Ne.variants) == null ? void 0 : np.unstyled.field) != null ? op : {}
}, L$ = {
  baseStyle: B$,
  sizes: V$,
  variants: z$,
  defaultProps: Ne.defaultProps
}, { defineMultiStyleConfig: W$, definePartsStyle: U$ } = qe(dk.keys), fi = vt("popper-bg"), H$ = vt("popper-arrow-bg"), ap = vt("popper-arrow-shadow-color"), Y$ = { zIndex: 10 }, G$ = {
  [fi.variable]: "colors.white",
  bg: fi.reference,
  [H$.variable]: fi.reference,
  [ap.variable]: "colors.gray.200",
  _dark: {
    [fi.variable]: "colors.gray.700",
    [ap.variable]: "colors.whiteAlpha.300"
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
}, q$ = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, X$ = {
  px: 3,
  py: 2
}, K$ = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Z$ = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, J$ = U$({
  popper: Y$,
  content: G$,
  header: q$,
  body: X$,
  footer: K$,
  closeButton: Z$
}), Q$ = W$({
  baseStyle: J$
}), { definePartsStyle: Tc, defineMultiStyleConfig: eA } = qe(rk.keys), kl = me("drawer-bg"), Tl = me("drawer-box-shadow");
function Gn(e) {
  return Tc(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var tA = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, rA = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, nA = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [kl.variable]: "colors.white",
    [Tl.variable]: "shadows.lg",
    _dark: {
      [kl.variable]: "colors.gray.700",
      [Tl.variable]: "shadows.dark-lg"
    },
    bg: kl.reference,
    boxShadow: Tl.reference
  };
}, oA = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, aA = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, iA = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, sA = {
  px: "6",
  py: "4"
}, lA = Tc((e) => ({
  overlay: tA,
  dialogContainer: rA,
  dialog: $t(nA, e),
  header: oA,
  closeButton: aA,
  body: iA,
  footer: sA
})), cA = {
  xs: Gn("xs"),
  sm: Gn("md"),
  md: Gn("lg"),
  lg: Gn("2xl"),
  xl: Gn("4xl"),
  full: Gn("full")
}, uA = eA({
  baseStyle: lA,
  sizes: cA,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: dA, defineMultiStyleConfig: fA } = qe(nk.keys), pA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, hA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, mA = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, vA = dA({
  preview: pA,
  input: hA,
  textarea: mA
}), gA = fA({
  baseStyle: vA
}), { definePartsStyle: bA, defineMultiStyleConfig: yA } = qe(ok.keys), co = me("form-control-color"), xA = {
  marginStart: "1",
  [co.variable]: "colors.red.500",
  _dark: {
    [co.variable]: "colors.red.300"
  },
  color: co.reference
}, SA = {
  mt: "2",
  [co.variable]: "colors.gray.600",
  _dark: {
    [co.variable]: "colors.whiteAlpha.600"
  },
  color: co.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, wA = bA({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: xA,
  helperText: SA
}), CA = yA({
  baseStyle: wA
}), { definePartsStyle: _A, defineMultiStyleConfig: EA } = qe(ak.keys), uo = me("form-error-color"), kA = {
  [uo.variable]: "colors.red.500",
  _dark: {
    [uo.variable]: "colors.red.300"
  },
  color: uo.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, TA = {
  marginEnd: "0.5em",
  [uo.variable]: "colors.red.500",
  _dark: {
    [uo.variable]: "colors.red.300"
  },
  color: uo.reference
}, PA = _A({
  text: kA,
  icon: TA
}), $A = EA({
  baseStyle: PA
}), AA = {
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
}, RA = {
  baseStyle: AA
}, OA = {
  fontFamily: "heading",
  fontWeight: "bold"
}, DA = {
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
}, MA = {
  baseStyle: OA,
  sizes: DA,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: FA, definePartsStyle: IA } = qe(ek.keys), Pl = me("breadcrumb-link-decor"), jA = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Pl.reference,
  [Pl.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Pl.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, NA = IA({
  link: jA
}), BA = FA({
  baseStyle: NA
}), VA = {
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
}, uv = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: ce("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ce("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: ce("gray.200", "whiteAlpha.300")(e) }
    };
  const n = So(`${t}.200`, 0.12)(r), o = So(`${t}.200`, 0.24)(r);
  return {
    color: ce(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: ce(`${t}.50`, n)(e)
    },
    _active: {
      bg: ce(`${t}.100`, o)(e)
    }
  };
}, zA = (e) => {
  const { colorScheme: t } = e, r = ce("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...$t(uv, e)
  };
}, LA = {
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
}, WA = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = ce("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: ce("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: ce("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: ce("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = LA[r]) != null ? t : {}, s = ce(n, `${r}.200`)(e);
  return {
    bg: s,
    color: ce(o, "gray.800")(e),
    _hover: {
      bg: ce(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: ce(i, `${r}.400`)(e) }
  };
}, UA = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: ce(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: ce(`${t}.700`, `${t}.500`)(e)
    }
  };
}, HA = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, YA = {
  ghost: uv,
  outline: zA,
  solid: WA,
  link: UA,
  unstyled: HA
}, GA = {
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
}, qA = {
  baseStyle: VA,
  variants: YA,
  sizes: GA,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Fn, defineMultiStyleConfig: XA } = qe(Sk.keys), rs = me("card-bg"), Yr = me("card-padding"), dv = me("card-shadow"), ji = me("card-radius"), fv = me("card-border-width", "0"), pv = me("card-border-color"), KA = Fn({
  container: {
    [rs.variable]: "colors.chakra-body-bg",
    backgroundColor: rs.reference,
    boxShadow: dv.reference,
    borderRadius: ji.reference,
    color: "chakra-body-text",
    borderWidth: fv.reference,
    borderColor: pv.reference
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
}), ZA = {
  sm: Fn({
    container: {
      [ji.variable]: "radii.base",
      [Yr.variable]: "space.3"
    }
  }),
  md: Fn({
    container: {
      [ji.variable]: "radii.md",
      [Yr.variable]: "space.5"
    }
  }),
  lg: Fn({
    container: {
      [ji.variable]: "radii.xl",
      [Yr.variable]: "space.7"
    }
  })
}, JA = {
  elevated: Fn({
    container: {
      [dv.variable]: "shadows.base",
      _dark: {
        [rs.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Fn({
    container: {
      [fv.variable]: "1px",
      [pv.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Fn({
    container: {
      [rs.variable]: "colors.chakra-subtle-bg"
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
}, QA = XA({
  baseStyle: KA,
  variants: JA,
  sizes: ZA,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), na = vt("close-button-size"), Bo = vt("close-button-bg"), eR = {
  w: [na.reference],
  h: [na.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [Bo.variable]: "colors.blackAlpha.100",
    _dark: {
      [Bo.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Bo.variable]: "colors.blackAlpha.200",
    _dark: {
      [Bo.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: Bo.reference
}, tR = {
  lg: {
    [na.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [na.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [na.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, rR = {
  baseStyle: eR,
  sizes: tR,
  defaultProps: {
    size: "md"
  }
}, { variants: nR, defaultProps: oR } = ta, aR = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: ut.bg.reference,
  color: ut.color.reference,
  boxShadow: ut.shadow.reference
}, iR = {
  baseStyle: aR,
  variants: nR,
  defaultProps: oR
}, sR = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, lR = {
  baseStyle: sR
}, cR = {
  opacity: 0.6,
  borderColor: "inherit"
}, uR = {
  borderStyle: "solid"
}, dR = {
  borderStyle: "dashed"
}, fR = {
  solid: uR,
  dashed: dR
}, pR = {
  baseStyle: cR,
  variants: fR,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: hR, defineMultiStyleConfig: mR } = qe(ZE.keys), vR = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, gR = {
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
}, bR = {
  pt: "2",
  px: "4",
  pb: "5"
}, yR = {
  fontSize: "1.25em"
}, xR = hR({
  container: vR,
  button: gR,
  panel: bR,
  icon: yR
}), SR = mR({ baseStyle: xR }), { definePartsStyle: Ba, defineMultiStyleConfig: wR } = qe(JE.keys), Ht = me("alert-fg"), Jr = me("alert-bg"), CR = Ba({
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
    color: Ht.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: Ht.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function $u(e) {
  const { theme: t, colorScheme: r } = e, n = So(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var _R = Ba((e) => {
  const { colorScheme: t } = e, r = $u(e);
  return {
    container: {
      [Ht.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Ht.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      }
    }
  };
}), ER = Ba((e) => {
  const { colorScheme: t } = e, r = $u(e);
  return {
    container: {
      [Ht.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Ht.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: Ht.reference
    }
  };
}), kR = Ba((e) => {
  const { colorScheme: t } = e, r = $u(e);
  return {
    container: {
      [Ht.variable]: `colors.${t}.500`,
      [Jr.variable]: r.light,
      _dark: {
        [Ht.variable]: `colors.${t}.200`,
        [Jr.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: Ht.reference
    }
  };
}), TR = Ba((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [Ht.variable]: "colors.white",
      [Jr.variable]: `colors.${t}.500`,
      _dark: {
        [Ht.variable]: "colors.gray.900",
        [Jr.variable]: `colors.${t}.200`
      },
      color: Ht.reference
    }
  };
}), PR = {
  subtle: _R,
  "left-accent": ER,
  "top-accent": kR,
  solid: TR
}, $R = wR({
  baseStyle: CR,
  variants: PR,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: hv, defineMultiStyleConfig: AR } = qe(QE.keys), fo = me("avatar-border-color"), oa = me("avatar-bg"), Ea = me("avatar-font-size"), wo = me("avatar-size"), RR = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: fo.reference,
  [fo.variable]: "white",
  _dark: {
    [fo.variable]: "colors.gray.800"
  }
}, OR = {
  bg: oa.reference,
  fontSize: Ea.reference,
  width: wo.reference,
  height: wo.reference,
  lineHeight: "1",
  [oa.variable]: "colors.gray.200",
  _dark: {
    [oa.variable]: "colors.whiteAlpha.400"
  }
}, DR = (e) => {
  const { name: t, theme: r } = e, n = t ? zk({ string: t }) : "colors.gray.400", o = Bk(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: oa.reference,
    fontSize: Ea.reference,
    color: a,
    borderColor: fo.reference,
    verticalAlign: "top",
    width: wo.reference,
    height: wo.reference,
    "&:not([data-loaded])": {
      [oa.variable]: n
    },
    [fo.variable]: "colors.white",
    _dark: {
      [fo.variable]: "colors.gray.800"
    }
  };
}, MR = {
  fontSize: Ea.reference,
  lineHeight: "1"
}, FR = hv((e) => ({
  badge: $t(RR, e),
  excessLabel: $t(OR, e),
  container: $t(DR, e),
  label: MR
}));
function sn(e) {
  const t = e !== "100%" ? nv[e] : void 0;
  return hv({
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
var IR = {
  "2xs": sn(4),
  xs: sn(6),
  sm: sn(8),
  md: sn(12),
  lg: sn(16),
  xl: sn(24),
  "2xl": sn(32),
  full: sn("100%")
}, jR = AR({
  baseStyle: FR,
  sizes: IR,
  defaultProps: {
    size: "md"
  }
}), NR = {
  Accordion: SR,
  Alert: $R,
  Avatar: jR,
  Badge: ta,
  Breadcrumb: BA,
  Button: qA,
  Checkbox: ts,
  CloseButton: rR,
  Code: iR,
  Container: lR,
  Divider: pR,
  Drawer: uA,
  Editable: gA,
  Form: CA,
  FormError: $A,
  FormLabel: RA,
  Heading: MA,
  Input: Ne,
  Kbd: t$,
  Link: n$,
  List: l$,
  Menu: b$,
  Modal: $$,
  NumberInput: N$,
  PinInput: L$,
  Popover: Q$,
  Progress: sP,
  Radio: xP,
  Select: TP,
  Skeleton: $P,
  SkipLink: RP,
  Slider: LP,
  Spinner: HP,
  Stat: QP,
  Switch: nT,
  Table: uT,
  Tabs: ET,
  Tag: NT,
  Textarea: KT,
  Tooltip: QT,
  Card: QA,
  Stepper: KE
}, mv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, vv = {
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
}, gv = "ltr", bv = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, yv = {
  semanticTokens: mv,
  direction: gv,
  ...ov,
  components: NR,
  styles: vv,
  config: bv
}, vV = yv, BR = {
  semanticTokens: mv,
  direction: gv,
  components: {},
  ...ov,
  styles: vv,
  config: bv
};
function Xo(e) {
  return typeof e == "function";
}
function VR(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var xv = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return _E(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, VR(
    ...n.map(
      (a) => (i) => Xo(a) ? a(i) : Sv(i, a)
    )
  )(o);
}, gV = xv(yv), bV = xv(BR);
function Sv(...e) {
  return er({}, ...e, wv);
}
function wv(e, t, r, n) {
  if ((Xo(e) || Xo(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = Xo(e) ? e(...o) : e, i = Xo(t) ? t(...o) : t;
      return er({}, a, i, wv);
    };
}
function zR(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function LR(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var WR = (e) => {
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
}, UR = WR(LR);
function Cv(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var _v = (e) => Cv(e, (t) => t != null);
function ip(e) {
  return typeof e == "number";
}
function HR(e) {
  return typeof e == "function";
}
var YR = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function yV(e) {
  return "current" in e;
}
function GR(e, ...t) {
  return HR(e) ? e(...t) : e;
}
function xV(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function qR(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var SV = () => {
}, wV = /* @__PURE__ */ qR((e) => () => {
  const { condition: t, message: r } = e;
  t && YR && console.warn(r);
}), CV = (...e) => (t) => e.reduce((r, n) => n(r), t), $l = (e, t) => Math.abs(e - t), sp = (e) => "x" in e && "y" in e;
function _V(e, t) {
  if (ip(e) && ip(t))
    return $l(e, t);
  if (sp(e) && sp(t)) {
    const r = $l(e.x, t.x), n = $l(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
const Ev = 1 / 60 * 1e3, XR = typeof performance < "u" ? () => performance.now() : () => Date.now(), kv = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(XR()), Ev);
function KR(e) {
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
const ZR = 40;
let Pc = !0, ka = !1, $c = !1;
const po = {
  delta: 0,
  timestamp: 0
}, Va = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Rs = Va.reduce((e, t) => (e[t] = KR(() => ka = !0), e), {}), JR = Va.reduce((e, t) => {
  const r = Rs[t];
  return e[t] = (n, o = !1, a = !1) => (ka || tO(), r.schedule(n, o, a)), e;
}, {}), QR = Va.reduce((e, t) => (e[t] = Rs[t].cancel, e), {});
Va.reduce((e, t) => (e[t] = () => Rs[t].process(po), e), {});
const eO = (e) => Rs[e].process(po), Tv = (e) => {
  ka = !1, po.delta = Pc ? Ev : Math.max(Math.min(e - po.timestamp, ZR), 1), po.timestamp = e, $c = !0, Va.forEach(eO), $c = !1, ka && (Pc = !1, kv(Tv));
}, tO = () => {
  ka = !0, Pc = !0, $c || kv(Tv);
}, lp = () => po;
var rO = typeof Element < "u", nO = typeof Map == "function", oO = typeof Set == "function", aO = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Ni(e, t) {
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
        if (!Ni(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (nO && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Ni(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (oO && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (aO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (rO && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Ni(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var iO = function(t, r) {
  try {
    return Ni(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const sO = /* @__PURE__ */ ys(iO);
function Au(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = Gm(), s = e ? UR(a, `components.${e}`) : void 0, l = n || s, c = er(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    _v(zR(o, ["children"]))
  ), u = Re({});
  if (l) {
    const f = wE(l)(c);
    sO(u.current, f) || (u.current = f);
  }
  return u.current;
}
function Ru(e, t = {}) {
  return Au(e, t);
}
function Ou(e, t = {}) {
  return Au(e, t);
}
function EV(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = Gm(), i = (r = a.components) == null ? void 0 : r[e], s = i ? Sv(i, n) : n;
  return Au(null, {
    ...o,
    styleConfig: s
  });
}
var lO = /* @__PURE__ */ new Set([
  ...cE,
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
]), cO = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function uO(e) {
  return cO.has(e) || !lO.has(e);
}
function dO(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var fO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, pO = /* @__PURE__ */ hu(
  function(e) {
    return fO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hO = !0;
function mO(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Pv = function(t, r, n) {
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
  hO === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, vO = function(t, r, n) {
  Pv(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function gO(e) {
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
var bO = {
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
}, cp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, yO = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", xO = /[A-Z]|^ms/g, $v = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Du = function(t) {
  return t.charCodeAt(1) === 45;
}, up = function(t) {
  return t != null && typeof t != "boolean";
}, Al = /* @__PURE__ */ hu(function(e) {
  return Du(e) ? e : e.replace(xO, "-$&").toLowerCase();
}), ns = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace($v, function(n, o, a) {
          return pr = {
            name: o,
            styles: a,
            next: pr
          }, o;
        });
  }
  return bO[t] !== 1 && !Du(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var SO = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, wO = ["normal", "none", "initial", "inherit", "unset"], CO = ns, _O = /^-ms-/, EO = /-(.)/g, dp = {};
  ns = function(t, r) {
    if (t === "content" && (typeof r != "string" || wO.indexOf(r) === -1 && !SO.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = CO(t, r);
    return n !== "" && !Du(t) && t.indexOf("-") !== -1 && dp[t] === void 0 && (dp[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(_O, "ms-").replace(EO, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Av = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ta(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Av);
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
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            pr = {
              name: n.name,
              styles: n.styles,
              next: pr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return kO(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = pr, i = r(e);
        return pr = a, Ta(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace($v, function(u, d, f) {
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
function kO(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ta(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : up(i) && (n += Al(a) + ":" + ns(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Av);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            up(i[s]) && (n += Al(a) + ":" + ns(a, i[s]) + ";");
        else {
          var l = Ta(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Al(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(yO), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var fp = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Rv;
process.env.NODE_ENV !== "production" && (Rv = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var pr, TO = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  pr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Ta(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(cp), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Ta(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(cp), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Rv, function(f) {
    return l = f, "";
  })), fp.lastIndex = 0;
  for (var c = "", u; (u = fp.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = gO(a) + c;
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
}, PO = pO, $O = function(t) {
  return t !== "theme";
}, pp = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? PO : $O;
}, hp = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, mp = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, AO = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Pv(r, n, o), bu(function() {
    return vO(r, n, o);
  }), null;
}, RO = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = hp(t, r, n), l = s || pp(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(mp), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(mp), d.push(u[p], u[0][p]);
    }
    var m = Es(function(h, g, x) {
      var S = c && h.as || o, w = "", T = [], b = h;
      if (h.theme == null) {
        b = {};
        for (var j in h)
          b[j] = h[j];
        b.theme = W.useContext(hn);
      }
      typeof h.className == "string" ? w = mO(g.registered, T, h.className) : h.className != null && (w = h.className + " ");
      var D = TO(d.concat(T), g.registered, b);
      w += g.key + "-" + D.name, i !== void 0 && (w += " " + i);
      var B = c && s === void 0 ? pp(S) : l, V = {};
      for (var N in h)
        c && N === "as" || // $FlowFixMe
        B(N) && (V[N] = h[N]);
      return V.className = w, V.ref = x, /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(AO, {
        cache: g,
        serialized: D,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ W.createElement(S, V));
    });
    return m.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", m.defaultProps = t.defaultProps, m.__emotion_real = m, m.__emotion_base = o, m.__emotion_styles = d, m.__emotion_forwardProp = s, Object.defineProperty(m, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), m.withComponent = function(h, g) {
      return e(h, Nn({}, r, g, {
        shouldForwardProp: hp(m, g, !0)
      })).apply(void 0, d);
    }, m;
  };
}, OO = [
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
], os = RO.bind();
OO.forEach(function(e) {
  os[e] = os(e);
});
var vp, DO = (vp = os.default) != null ? vp : os, MO = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = Cv(i, (d, f) => dE(f)), l = GR(e, t), c = dO(
    {},
    o,
    l,
    _v(s),
    a
  ), u = bE(c)(t.theme);
  return n ? [u, n] : u;
};
function Rl(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = uO);
  const o = MO({ baseStyle: r }), a = DO(
    e,
    n
  )(o);
  return At.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = Su();
    return At.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function FO() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Rl, {
    apply(t, r, n) {
      return Rl(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Rl(r)), e.get(r);
    }
  });
}
var Ue = FO();
function it(e) {
  return kt(e);
}
function tr(e, t = []) {
  const r = Re(e);
  return Ze(() => {
    r.current = e;
  }), ue((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function Ov(e, t) {
  const r = Re(!1), n = Re(!1);
  Ze(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Ze(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Dv = Fr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Os = Fr({}), za = Fr(null), Ds = typeof document < "u", as = Ds ? ou : Ze, Mv = Fr({ strict: !1 });
function IO(e, t, r, n) {
  const { visualElement: o } = ht(Os), a = ht(Mv), i = ht(za), s = ht(Dv).reducedMotion, l = Re();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return nm(() => {
    c && c.update(r, i);
  }), as(() => {
    c && c.render();
  }), Ze(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? as : Ze)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function ro(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function jO(e, t, r) {
  return ue(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : ro(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Pa(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ms(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Mu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Fu = ["initial", ...Mu];
function Fs(e) {
  return Ms(e.animate) || Fu.some((t) => Pa(e[t]));
}
function Fv(e) {
  return !!(Fs(e) || e.variants);
}
function NO(e, t) {
  if (Fs(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Pa(r) ? r : void 0,
      animate: Pa(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function BO(e) {
  const { initial: t, animate: r } = NO(e, ht(Os));
  return Nt(() => ({ initial: t, animate: r }), [gp(t), gp(r)]);
}
function gp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const bp = {
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
}, $a = {};
for (const e in bp)
  $a[e] = {
    isEnabled: (t) => bp[e].some((r) => !!t[r])
  };
function VO(e) {
  for (const t in e)
    $a[t] = {
      ...$a[t],
      ...e[t]
    };
}
const Iu = Fr({}), Iv = Fr({}), zO = Symbol.for("motionComponentSymbol");
function LO({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && VO(e);
  function a(s, l) {
    let c;
    const u = {
      ...ht(Dv),
      ...s,
      layoutId: WO(s)
    }, { isStatic: d } = u, f = BO(s), p = n(s, d);
    if (!d && Ds) {
      f.visualElement = IO(o, p, u, t);
      const m = ht(Iv), h = ht(Mv).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        h,
        e,
        m
      ));
    }
    return W.createElement(
      Os.Provider,
      { value: f },
      c && f.visualElement ? W.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, jO(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = kt(a);
  return i[zO] = o, i;
}
function WO({ layoutId: e }) {
  const t = ht(Iu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function UO(e) {
  function t(n, o = {}) {
    return LO(e(n, o));
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
const HO = [
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
function ju(e) {
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
      !!(HO.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const is = {};
function YO(e) {
  Object.assign(is, e);
}
const La = [
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
], Ln = new Set(La);
function jv(e, { layout: t, layoutId: r }) {
  return Ln.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!is[e] || e === "opacity");
}
const Vt = (e) => !!(e && e.getVelocity), GO = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, qO = La.length;
function XO(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < qO; i++) {
    const s = La[i];
    if (e[s] !== void 0) {
      const l = GO[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const Nv = (e) => (t) => typeof t == "string" && t.startsWith(e), Bv = Nv("--"), Ac = Nv("var(--"), KO = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, ZO = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mn = (e, t, r) => Math.min(Math.max(r, e), t), Wn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, aa = {
  ...Wn,
  transform: (e) => mn(0, 1, e)
}, pi = {
  ...Wn,
  default: 1
}, ia = (e) => Math.round(e * 1e5) / 1e5, Is = /(-)?([\d]*\.?[\d])+/g, Vv = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, JO = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Wa(e) {
  return typeof e == "string";
}
const Ua = (e) => ({
  test: (t) => Wa(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ln = Ua("deg"), Or = Ua("%"), fe = Ua("px"), QO = Ua("vh"), e2 = Ua("vw"), yp = {
  ...Or,
  parse: (e) => Or.parse(e) / 100,
  transform: (e) => Or.transform(e * 100)
}, xp = {
  ...Wn,
  transform: Math.round
}, zv = {
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
  rotate: ln,
  rotateX: ln,
  rotateY: ln,
  rotateZ: ln,
  scale: pi,
  scaleX: pi,
  scaleY: pi,
  scaleZ: pi,
  skew: ln,
  skewX: ln,
  skewY: ln,
  distance: fe,
  translateX: fe,
  translateY: fe,
  translateZ: fe,
  x: fe,
  y: fe,
  z: fe,
  perspective: fe,
  transformPerspective: fe,
  opacity: aa,
  originX: yp,
  originY: yp,
  originZ: fe,
  // Misc
  zIndex: xp,
  // SVG
  fillOpacity: aa,
  strokeOpacity: aa,
  numOctaves: xp
};
function Nu(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Bv(d)) {
      a[d] = f;
      continue;
    }
    const p = zv[d], m = ZO(f, p);
    if (Ln.has(d)) {
      if (l = !0, i[d] = m, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = m) : o[d] = m;
  }
  if (t.transform || (l || n ? o.transform = XO(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const Bu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Lv(e, t, r) {
  for (const n in t)
    !Vt(t[n]) && !jv(n, r) && (e[n] = t[n]);
}
function t2({ transformTemplate: e }, t, r) {
  return Nt(() => {
    const n = Bu();
    return Nu(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function r2(e, t, r) {
  const n = e.style || {}, o = {};
  return Lv(o, n, e), Object.assign(o, t2(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function n2(e, t, r) {
  const n = {}, o = r2(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const o2 = /* @__PURE__ */ new Set([
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
function ss(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || o2.has(e);
}
let Wv = (e) => !ss(e);
function a2(e) {
  e && (Wv = (t) => t.startsWith("on") ? !ss(t) : e(t));
}
try {
  a2(require("@emotion/is-prop-valid").default);
} catch {
}
function i2(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Wv(o) || r === !0 && ss(o) || !t && !ss(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function Sp(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function s2(e, t, r) {
  const n = Sp(t, e.x, e.width), o = Sp(r, e.y, e.height);
  return `${n} ${o}`;
}
const l2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, c2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function u2(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? l2 : c2;
  e[a.offset] = fe.transform(-n);
  const i = fe.transform(t), s = fe.transform(r);
  e[a.array] = `${i} ${s}`;
}
function Vu(e, {
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
  if (Nu(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: h } = e;
  p.transform && (h && (m.transform = p.transform), delete p.transform), h && (o !== void 0 || a !== void 0 || m.transform) && (m.transformOrigin = s2(h, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && u2(p, i, s, l, !1);
}
const Uv = () => ({
  ...Bu(),
  attrs: {}
}), zu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function d2(e, t, r, n) {
  const o = Nt(() => {
    const a = Uv();
    return Vu(a, t, { enableHardwareAcceleration: !1 }, zu(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    Lv(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function f2(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (ju(r) ? d2 : n2)(n, a, i, r), u = {
      ...i2(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = Nt(() => Vt(d) ? d.get() : d, [d]);
    return Qt(r, {
      ...u,
      children: f
    });
  };
}
const Lu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Hv(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Yv = /* @__PURE__ */ new Set([
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
function Gv(e, t, r, n) {
  Hv(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Yv.has(o) ? o : Lu(o), t.attrs[o]);
}
function Wu(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Vt(r[o]) || t.style && Vt(t.style[o]) || jv(o, e)) && (n[o] = r[o]);
  return n;
}
function qv(e, t) {
  const r = Wu(e, t);
  for (const n in e)
    if (Vt(e[n]) || Vt(t[n])) {
      const o = La.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function Uu(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function Xv(e) {
  const t = Re(null);
  return t.current === null && (t.current = e()), t.current;
}
const ls = (e) => Array.isArray(e), p2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), h2 = (e) => ls(e) ? e[e.length - 1] || 0 : e;
function Bi(e) {
  const t = Vt(e) ? e.get() : e;
  return p2(t) ? t.toValue() : t;
}
function m2({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: v2(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const Kv = (e) => (t, r) => {
  const n = ht(Os), o = ht(za), a = () => m2(e, t, n, o);
  return r ? a() : Xv(a);
};
function v2(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = Bi(a[f]);
  let { initial: i, animate: s } = e;
  const l = Fs(e), c = Fv(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !Ms(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Uu(e, p);
    if (!m)
      return;
    const { transitionEnd: h, transition: g, ...x } = m;
    for (const S in x) {
      let w = x[S];
      if (Array.isArray(w)) {
        const T = u ? w.length - 1 : 0;
        w = w[T];
      }
      w !== null && (o[S] = w);
    }
    for (const S in h)
      o[S] = h[S];
  }), o;
}
const g2 = {
  useVisualState: Kv({
    scrapeMotionValuesFromProps: qv,
    createRenderState: Uv,
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
      Vu(r, n, { enableHardwareAcceleration: !1 }, zu(t.tagName), e.transformTemplate), Gv(t, r);
    }
  })
}, b2 = {
  useVisualState: Kv({
    scrapeMotionValuesFromProps: Wu,
    createRenderState: Bu
  })
};
function y2(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...ju(e) ? g2 : b2,
    preloadedFeatures: r,
    useRender: f2(t),
    createVisualElement: n,
    Component: e
  };
}
function Hr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Zv = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function js(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const x2 = (e) => (t) => Zv(t) && e(t, js(t));
function Gr(e, t, r, n) {
  return Hr(e, t, x2(r), n);
}
const S2 = (e, t) => (r) => t(e(r)), dn = (...e) => e.reduce(S2);
function Jv(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const wp = Jv("dragHorizontal"), Cp = Jv("dragVertical");
function Qv(e) {
  let t = !1;
  if (e === "y")
    t = Cp();
  else if (e === "x")
    t = wp();
  else {
    const r = wp(), n = Cp();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function eg() {
  const e = Qv(!0);
  return e ? (e(), !1) : !0;
}
class yn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function w2(e) {
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
}, C2 = 40;
let Rc = !0, Aa = !1;
const Ns = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], ho = Ns.reduce((e, t) => (e[t] = w2(() => Aa = !0), e), {}), _2 = (e) => ho[e].process(ot), tg = (e) => {
  Aa = !1, ot.delta = Rc ? 1e3 / 60 : Math.max(Math.min(e - ot.timestamp, C2), 1), ot.timestamp = e, ot.isProcessing = !0, Ns.forEach(_2), ot.isProcessing = !1, Aa && (Rc = !1, requestAnimationFrame(tg));
}, E2 = () => {
  Aa = !0, Rc = !0, ot.isProcessing || requestAnimationFrame(tg);
}, et = Ns.reduce((e, t) => {
  const r = ho[t];
  return e[t] = (n, o = !1, a = !1) => (Aa || E2(), r.schedule(n, o, a)), e;
}, {});
function Qr(e) {
  Ns.forEach((t) => ho[t].cancel(e));
}
function _p(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || eg())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && et.update(() => s[n](a, i));
  };
  return Gr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class k2 extends yn {
  mount() {
    this.unmount = dn(_p(this.node, !0), _p(this.node, !1));
  }
  unmount() {
  }
}
class T2 extends yn {
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
const rg = (e, t) => t ? e === t ? !0 : rg(e, t.parentElement) : !1, mt = (e) => e;
function Ol(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, js(r));
}
class P2 extends yn {
  constructor() {
    super(...arguments), this.removeStartListeners = mt, this.removeEndListeners = mt, this.removeAccessibleListeners = mt, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Gr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        et.update(() => {
          rg(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Gr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = dn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Ol("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && et.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Hr(this.node.current, "keyup", i), Ol("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Hr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Ol("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Hr(this.node.current, "blur", n);
      this.removeAccessibleListeners = dn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && et.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !eg();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && et.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Gr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Hr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = dn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Oc = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap(), $2 = (e) => {
  const t = Oc.get(e.target);
  t && t(e);
}, A2 = (e) => {
  e.forEach($2);
};
function R2({ root: e, ...t }) {
  const r = e || document;
  Dl.has(r) || Dl.set(r, {});
  const n = Dl.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(A2, { root: e, ...t })), n[o];
}
function O2(e, t, r) {
  const n = R2(t);
  return Oc.set(e, r), n.observe(e), () => {
    Oc.delete(e), n.unobserve(e);
  };
}
const D2 = {
  some: 0,
  all: 1
};
class M2 extends yn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : D2[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return O2(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(F2(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function F2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const I2 = {
  inView: {
    Feature: M2
  },
  tap: {
    Feature: P2
  },
  focus: {
    Feature: T2
  },
  hover: {
    Feature: k2
  }
};
function ng(e, t) {
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
function j2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function N2(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Bs(e, t, r) {
  const n = e.getProps();
  return Uu(n, t, r !== void 0 ? r : n.custom, j2(e), N2(e));
}
const B2 = "framerAppearId", V2 = "data-" + Lu(B2);
let Ha = mt, xr = mt;
process.env.NODE_ENV !== "production" && (Ha = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, xr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const fn = (e) => e * 1e3, qr = (e) => e / 1e3, z2 = {
  current: !1
}, og = (e) => Array.isArray(e) && typeof e[0] == "number";
function ag(e) {
  return !!(!e || typeof e == "string" && ig[e] || og(e) || Array.isArray(e) && e.every(ag));
}
const Ko = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, ig = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ko([0, 0.65, 0.55, 1]),
  circOut: Ko([0.55, 0, 1, 0.45]),
  backIn: Ko([0.31, 0.01, 0.66, -0.59]),
  backOut: Ko([0.33, 1.53, 0.69, 0.99])
};
function sg(e) {
  if (e)
    return og(e) ? Ko(e) : Array.isArray(e) ? e.map(sg) : ig[e];
}
function L2(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = sg(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Ep = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Ml = {}, lg = {};
for (const e in Ep)
  lg[e] = () => (Ml[e] === void 0 && (Ml[e] = Ep[e]()), Ml[e]);
function W2(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const cg = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, U2 = 1e-7, H2 = 12;
function Y2(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = cg(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > U2 && ++s < H2);
  return i;
}
function Ya(e, t, r, n) {
  if (e === t && r === n)
    return mt;
  const o = (a) => Y2(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : cg(o(a), t, n);
}
const G2 = Ya(0.42, 0, 1, 1), q2 = Ya(0, 0, 0.58, 1), ug = Ya(0.42, 0, 0.58, 1), X2 = (e) => Array.isArray(e) && typeof e[0] != "number", dg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, fg = (e) => (t) => 1 - e(1 - t), pg = (e) => 1 - Math.sin(Math.acos(e)), Hu = fg(pg), K2 = dg(Hu), hg = Ya(0.33, 1.53, 0.69, 0.99), Yu = fg(hg), Z2 = dg(Yu), J2 = (e) => (e *= 2) < 1 ? 0.5 * Yu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), kp = {
  linear: mt,
  easeIn: G2,
  easeInOut: ug,
  easeOut: q2,
  circIn: pg,
  circInOut: K2,
  circOut: Hu,
  backIn: Yu,
  backInOut: Z2,
  backOut: hg,
  anticipate: J2
}, Tp = (e) => {
  if (Array.isArray(e)) {
    xr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return Ya(t, r, n, o);
  } else if (typeof e == "string")
    return xr(kp[e] !== void 0, `Invalid easing type '${e}'`), kp[e];
  return e;
}, Gu = (e, t) => (r) => !!(Wa(r) && JO.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), mg = (e, t, r) => (n) => {
  if (!Wa(n))
    return n;
  const [o, a, i, s] = n.match(Is);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, Q2 = (e) => mn(0, 255, e), Fl = {
  ...Wn,
  transform: (e) => Math.round(Q2(e))
}, Rn = {
  test: Gu("rgb", "red"),
  parse: mg("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Fl.transform(e) + ", " + Fl.transform(t) + ", " + Fl.transform(r) + ", " + ia(aa.transform(n)) + ")"
};
function eD(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Dc = {
  test: Gu("#"),
  parse: eD,
  transform: Rn.transform
}, no = {
  test: Gu("hsl", "hue"),
  parse: mg("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Or.transform(ia(t)) + ", " + Or.transform(ia(r)) + ", " + ia(aa.transform(n)) + ")"
}, Pt = {
  test: (e) => Rn.test(e) || Dc.test(e) || no.test(e),
  parse: (e) => Rn.test(e) ? Rn.parse(e) : no.test(e) ? no.parse(e) : Dc.parse(e),
  transform: (e) => Wa(e) ? e : e.hasOwnProperty("red") ? Rn.transform(e) : no.transform(e)
}, at = (e, t, r) => -r * e + r * t + e;
function Il(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tD({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Il(l, s, e + 1 / 3), a = Il(l, s, e), i = Il(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const jl = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, rD = [Dc, Rn, no], nD = (e) => rD.find((t) => t.test(e));
function Pp(e) {
  const t = nD(e);
  xr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === no && (r = tD(r)), r;
}
const vg = (e, t) => {
  const r = Pp(e), n = Pp(t), o = { ...r };
  return (a) => (o.red = jl(r.red, n.red, a), o.green = jl(r.green, n.green, a), o.blue = jl(r.blue, n.blue, a), o.alpha = at(r.alpha, n.alpha, a), Rn.transform(o));
};
function oD(e) {
  var t, r;
  return isNaN(e) && Wa(e) && (((t = e.match(Is)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Vv)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const gg = {
  regex: KO,
  countKey: "Vars",
  token: "${v}",
  parse: mt
}, bg = {
  regex: Vv,
  countKey: "Colors",
  token: "${c}",
  parse: Pt.parse
}, yg = {
  regex: Is,
  countKey: "Numbers",
  token: "${n}",
  parse: Wn.parse
};
function Nl(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function cs(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Nl(r, gg), Nl(r, bg), Nl(r, yg), r;
}
function xg(e) {
  return cs(e).values;
}
function Sg(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = cs(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(gg.token, i[l]) : l < n + r ? s = s.replace(bg.token, Pt.transform(i[l])) : s = s.replace(yg.token, ia(i[l]));
    return s;
  };
}
const aD = (e) => typeof e == "number" ? 0 : e;
function iD(e) {
  const t = xg(e);
  return Sg(e)(t.map(aD));
}
const vn = {
  test: oD,
  parse: xg,
  createTransformer: Sg,
  getAnimatableNone: iD
}, wg = (e, t) => (r) => `${r > 0 ? t : e}`;
function Cg(e, t) {
  return typeof e == "number" ? (r) => at(e, t, r) : Pt.test(e) ? vg(e, t) : e.startsWith("var(") ? wg(e, t) : Eg(e, t);
}
const _g = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => Cg(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, sD = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Cg(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, Eg = (e, t) => {
  const r = vn.createTransformer(t), n = cs(e), o = cs(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? dn(_g(n.values, o.values), r) : (Ha(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), wg(e, t));
}, Ra = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, $p = (e, t) => (r) => at(e, t, r);
function lD(e) {
  return typeof e == "number" ? $p : typeof e == "string" ? Pt.test(e) ? vg : Eg : Array.isArray(e) ? _g : typeof e == "object" ? sD : $p;
}
function cD(e, t, r) {
  const n = [], o = r || lD(e[0]), a = e.length - 1;
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
function kg(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (xr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = cD(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Ra(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(mn(e[0], e[a - 1], c)) : l;
}
function uD(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Ra(0, t, n);
    e.push(at(r, 1, o));
  }
}
function dD(e) {
  const t = [0];
  return uD(t, e.length - 1), t;
}
function fD(e, t) {
  return e.map((r) => r * t);
}
function pD(e, t) {
  return e.map(() => t || ug).splice(0, e.length - 1);
}
function us({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = X2(n) ? n.map(Tp) : Tp(n), a = {
    done: !1,
    value: t[0]
  }, i = fD(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : dD(t),
    e
  ), s = kg(i, t, {
    ease: Array.isArray(o) ? o : pD(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function Tg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const hD = 5;
function Pg(e, t, r) {
  const n = Math.max(t - hD, 0);
  return Tg(r - e(n), t - n);
}
const Bl = 1e-3, mD = 0.01, Ap = 10, vD = 0.05, gD = 1;
function bD({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  Ha(e <= fn(Ap), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = mn(vD, gD, i), e = mn(mD, Ap, qr(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = Mc(c, i), m = Math.exp(-d);
    return Bl - f / p * m;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), h = Mc(Math.pow(c, 2), i);
    return (-o(c) + Bl > 0 ? -1 : 1) * ((f - p) * m) / h;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -Bl + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = xD(o, a, s);
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
const yD = 12;
function xD(e, t, r) {
  let n = r;
  for (let o = 1; o < yD; o++)
    n = n - e(n) / t(n);
  return n;
}
function Mc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const SD = ["duration", "bounce"], wD = ["stiffness", "damping", "mass"];
function Rp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function CD(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Rp(e, wD) && Rp(e, SD)) {
    const r = bD(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function $g({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = CD(n), p = u ? -qr(u) : 0, m = l / (2 * Math.sqrt(s * c)), h = a - o, g = qr(Math.sqrt(s / c)), x = Math.abs(h) < 5;
  r || (r = x ? 0.01 : 2), t || (t = x ? 5e-3 : 0.5);
  let S;
  if (m < 1) {
    const w = Mc(g, m);
    S = (T) => {
      const b = Math.exp(-m * g * T);
      return a - b * ((p + m * g * h) / w * Math.sin(w * T) + h * Math.cos(w * T));
    };
  } else if (m === 1)
    S = (w) => a - Math.exp(-g * w) * (h + (p + g * h) * w);
  else {
    const w = g * Math.sqrt(m * m - 1);
    S = (T) => {
      const b = Math.exp(-m * g * T), j = Math.min(w * T, 300);
      return a - b * ((p + m * g * h) * Math.sinh(j) + w * h * Math.cosh(j)) / w;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (w) => {
      const T = S(w);
      if (f)
        i.done = w >= d;
      else {
        let b = p;
        w !== 0 && (m < 1 ? b = Pg(S, w, T) : b = 0);
        const j = Math.abs(b) <= r, D = Math.abs(a - T) <= t;
        i.done = j && D;
      }
      return i.value = i.done ? a : T, i;
    }
  };
}
function Op({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (B) => s !== void 0 && B < s || l !== void 0 && B > l, m = (B) => s === void 0 ? l : l === void 0 || Math.abs(s - B) < Math.abs(l - B) ? s : l;
  let h = r * t;
  const g = d + h, x = i === void 0 ? g : i(g);
  x !== g && (h = x - d);
  const S = (B) => -h * Math.exp(-B / n), w = (B) => x + S(B), T = (B) => {
    const V = S(B), N = w(B);
    f.done = Math.abs(V) <= c, f.value = f.done ? x : N;
  };
  let b, j;
  const D = (B) => {
    p(f.value) && (b = B, j = $g({
      keyframes: [f.value, m(f.value)],
      velocity: Pg(w, B, f.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (B) => {
      let V = !1;
      return !j && b === void 0 && (V = !0, T(B), D(B)), b !== void 0 && B > b ? j.next(B - b) : (!V && T(B), f);
    }
  };
}
const _D = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => et.update(t, !0),
    stop: () => Qr(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ot.isProcessing ? ot.timestamp : performance.now()
  };
}, Dp = 2e4;
function Mp(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Dp; )
    t += r, n = e.next(t);
  return t >= Dp ? 1 / 0 : t;
}
const ED = {
  decay: Op,
  inertia: Op,
  tween: us,
  keyframes: us,
  spring: $g
};
function ds({ autoplay: e = !0, delay: t = 0, driver: r = _D, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, m = !1, h, g;
  const x = () => {
    h && h(), g = new Promise((M) => {
      h = M;
    });
  };
  x();
  let S;
  const w = ED[o] || us;
  let T;
  w !== us && typeof n[0] != "number" && (T = kg([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const b = w({ ...f, keyframes: n });
  let j;
  s === "mirror" && (j = w({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let D = "idle", B = null, V = null, N = null;
  b.calculatedDuration === null && a && (b.calculatedDuration = Mp(b));
  const { calculatedDuration: X } = b;
  let ae = 1 / 0, te = 1 / 0;
  X !== null && (ae = X + i, te = ae * (a + 1) - i);
  let Z = 0;
  const J = (M) => {
    if (V === null)
      return;
    p > 0 && (V = Math.min(V, M)), p < 0 && (V = Math.min(M - te / p, V)), B !== null ? Z = B : Z = Math.round(M - V) * p;
    const F = Z - t * (p >= 0 ? 1 : -1), P = p >= 0 ? F < 0 : F > te;
    Z = Math.max(F, 0), D === "finished" && B === null && (Z = te);
    let R = Z, I = b;
    if (a) {
      const G = Z / ae;
      let U = Math.floor(G), re = G % 1;
      !re && G >= 1 && (re = 1), re === 1 && U--, U = Math.min(U, a + 1);
      const _ = !!(U % 2);
      _ && (s === "reverse" ? (re = 1 - re, i && (re -= i / ae)) : s === "mirror" && (I = j));
      let de = mn(0, 1, re);
      Z > te && (de = s === "reverse" && _ ? 1 : 0), R = de * ae;
    }
    const C = P ? { done: !1, value: n[0] } : I.next(R);
    T && (C.value = T(C.value));
    let { done: L } = C;
    !P && X !== null && (L = p >= 0 ? Z >= te : Z <= 0);
    const $ = B === null && (D === "finished" || D === "running" && L);
    return d && d(C.value), $ && ve(), C;
  }, ie = () => {
    S && S.stop(), S = void 0;
  }, K = () => {
    D = "idle", ie(), x(), V = N = null;
  }, ve = () => {
    D = "finished", u && u(), ie(), x();
  }, pe = () => {
    if (m)
      return;
    S || (S = r(J));
    const M = S.now();
    l && l(), B !== null ? V = M - B : (!V || D === "finished") && (V = M), N = V, B = null, D = "running", S.start();
  };
  e && pe();
  const O = {
    then(M, F) {
      return g.then(M, F);
    },
    get time() {
      return qr(Z);
    },
    set time(M) {
      M = fn(M), Z = M, B !== null || !S || p === 0 ? B = M : V = S.now() - M / p;
    },
    get duration() {
      const M = b.calculatedDuration === null ? Mp(b) : b.calculatedDuration;
      return qr(M);
    },
    get speed() {
      return p;
    },
    set speed(M) {
      M === p || !S || (p = M, O.time = qr(Z));
    },
    get state() {
      return D;
    },
    play: pe,
    pause: () => {
      D = "paused", B = Z;
    },
    stop: () => {
      m = !0, D !== "idle" && (D = "idle", c && c(), K());
    },
    cancel: () => {
      N !== null && J(N), K();
    },
    complete: () => {
      D = "finished";
    },
    sample: (M) => (V = 0, J(M))
  };
  return O;
}
const kD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), hi = 10, TD = 2e4, PD = (e, t) => t.type === "spring" || e === "backgroundColor" || !ag(t.ease);
function $D(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(lg.waapi() && kD.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((x) => {
      s = x;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (PD(t, o)) {
    const x = ds({
      ...o,
      repeat: 0,
      delay: 0
    });
    let S = { done: !1, value: u[0] };
    const w = [];
    let T = 0;
    for (; !S.done && T < TD; )
      S = x.sample(T), w.push(S.value), T += hi;
    p = void 0, u = w, d = T - hi, f = "linear";
  }
  const m = L2(e.owner.current, t, u, {
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
    et.update(h), s(), c();
  };
  return m.onfinish = () => {
    e.set(W2(u, o)), n && n(), g();
  }, {
    then(x, S) {
      return l.then(x, S);
    },
    get time() {
      return qr(m.currentTime || 0);
    },
    set time(x) {
      m.currentTime = fn(x);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(x) {
      m.playbackRate = x;
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
      const { currentTime: x } = m;
      if (x) {
        const S = ds({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(S.sample(x - hi).value, S.sample(x).value, hi);
      }
      g();
    },
    complete: () => m.finish(),
    cancel: g
  };
}
function AD({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
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
  return t ? ds({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const RD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, OD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), DD = {
  type: "keyframes",
  duration: 0.8
}, MD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, FD = (e, { keyframes: t }) => t.length > 2 ? DD : Ln.has(e) ? e.startsWith("scale") ? OD(t[1]) : RD : MD, Fc = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(vn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), ID = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function jD(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(Is) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = ID.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const ND = /([a-z-]*)\(.*?\)/g, Ic = {
  ...vn,
  getAnimatableNone: (e) => {
    const t = e.match(ND);
    return t ? t.map(jD).join(" ") : e;
  }
}, BD = {
  ...zv,
  // Color props
  color: Pt,
  backgroundColor: Pt,
  outlineColor: Pt,
  fill: Pt,
  stroke: Pt,
  // Border props
  borderColor: Pt,
  borderTopColor: Pt,
  borderRightColor: Pt,
  borderBottomColor: Pt,
  borderLeftColor: Pt,
  filter: Ic,
  WebkitFilter: Ic
}, qu = (e) => BD[e];
function Ag(e, t) {
  let r = qu(e);
  return r !== Ic && (r = vn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const Rg = (e) => /^0[^.\s]+$/.test(e);
function VD(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || Rg(e);
}
function zD(e, t, r, n) {
  const o = Fc(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), VD(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = Ag(t, s);
    }
  return a;
}
function LD({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Og(e, t) {
  return e[t] || e.default || e;
}
const Xu = (e, t, r, n = {}) => (o) => {
  const a = Og(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - fn(i);
  const l = zD(t, e, r, a), c = l[0], u = l[l.length - 1], d = Fc(e, c), f = Fc(e, u);
  Ha(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
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
  if (LD(a) || (p = {
    ...p,
    ...FD(e, p)
  }), p.duration && (p.duration = fn(p.duration)), p.repeatDelay && (p.repeatDelay = fn(p.repeatDelay)), !d || !f || z2.current || a.type === !1)
    return AD(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = $D(t, e, p);
    if (m)
      return m;
  }
  return ds(p);
};
function fs(e) {
  return !!(Vt(e) && e.add);
}
const WD = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ku(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zu(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Ju {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ku(this.subscriptions, t), () => Zu(this.subscriptions, t);
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
const Fp = /* @__PURE__ */ new Set();
function Qu(e, t, r) {
  e || Fp.has(t) || (console.warn(t), r && console.warn(r), Fp.add(t));
}
const UD = (e) => !isNaN(parseFloat(e));
class HD {
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
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, et.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => et.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = UD(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && Qu(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Ju());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), et.read(() => {
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
      Tg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  return new HD(e, t);
}
const Dg = (e) => (t) => t.test(e), YD = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Mg = [Wn, fe, Or, ln, e2, QO, YD], Vo = (e) => Mg.find(Dg(e)), GD = [...Mg, Pt, vn], qD = (e) => GD.find(Dg(e));
function XD(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Co(r));
}
function KD(e, t) {
  const r = Bs(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = h2(a[i]);
    XD(e, i, s);
  }
}
function ZD(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (WD(u) || Rg(u)) ? u = parseFloat(u) : !qD(u) && vn.test(c) && (u = Ag(l, c)), e.addValue(l, Co(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function JD(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function QD(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = JD(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function eM({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Fg(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && eM(u, d))
      continue;
    const m = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[V2];
      g && (m.elapsed = window.HandoffAppearAnimations(g, d, f, et));
    }
    f.start(Xu(d, f, p, e.shouldReduceMotion && Ln.has(d) ? { type: !1 } : m));
    const h = f.animation;
    fs(l) && (l.add(d), h.then(() => l.remove(d))), c.push(h);
  }
  return i && Promise.all(c).then(() => {
    i && KD(e, i);
  }), c;
}
function jc(e, t, r = {}) {
  const n = Bs(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(Fg(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return tM(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function tM(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(rM).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(jc(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function rM(e, t) {
  return e.sortNodePosition(t);
}
function nM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => jc(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = jc(e, t, r);
  else {
    const o = typeof t == "function" ? Bs(e, t, r.custom) : t;
    n = Promise.all(Fg(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const oM = [...Mu].reverse(), aM = Mu.length;
function iM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => nM(e, r, n)));
}
function sM(e) {
  let t = iM(e);
  const r = cM();
  let n = !0;
  const o = (l, c) => {
    const u = Bs(e, c);
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
    for (let x = 0; x < aM; x++) {
      const S = oM[x], w = r[S], T = u[S] !== void 0 ? u[S] : d[S], b = Pa(T), j = S === c ? w.isActive : null;
      j === !1 && (h = x);
      let D = T === d[S] && T !== u[S] && b;
      if (D && n && e.manuallyAnimateOnMount && (D = !1), w.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !T && !w.prevProp || // Or if the prop doesn't define an animation
      Ms(T) || typeof T == "boolean")
        continue;
      const B = lM(w.prevProp, T);
      let V = B || // If we're making this variant active, we want to always make it active
      S === c && w.isActive && !D && b || // If we removed a higher-priority variant (i is in reverse order)
      x > h && b;
      const N = Array.isArray(T) ? T : [T];
      let X = N.reduce(o, {});
      j === !1 && (X = {});
      const { prevResolvedValues: ae = {} } = w, te = {
        ...ae,
        ...X
      }, Z = (J) => {
        V = !0, p.delete(J), w.needsAnimating[J] = !0;
      };
      for (const J in te) {
        const ie = X[J], K = ae[J];
        m.hasOwnProperty(J) || (ie !== K ? ls(ie) && ls(K) ? !ng(ie, K) || B ? Z(J) : w.protectedKeys[J] = !0 : ie !== void 0 ? Z(J) : p.add(J) : ie !== void 0 && p.has(J) ? Z(J) : w.protectedKeys[J] = !0);
      }
      w.prevProp = T, w.prevResolvedValues = X, w.isActive && (m = { ...m, ...X }), n && e.blockInitialAnimation && (V = !1), V && !D && f.push(...N.map((J) => ({
        animation: J,
        options: { type: S, ...l }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((S) => {
        const w = e.getBaseTarget(S);
        w !== void 0 && (x[S] = w);
      }), f.push({ animation: x });
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
function lM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ng(t, e) : !1;
}
function _n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function cM() {
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
class uM extends yn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = sM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Ms(t) && (this.unmount = t.subscribe(this.node));
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
let dM = 0;
class fM extends yn {
  constructor() {
    super(...arguments), this.id = dM++;
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
const pM = {
  animation: {
    Feature: uM
  },
  exit: {
    Feature: fM
  }
}, Ip = (e, t) => Math.abs(e - t);
function hM(e, t) {
  const r = Ip(e.x, t.x), n = Ip(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Ig {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = zl(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = hM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = ot;
      this.history.push({ ...f, timestamp: p });
      const { onStart: m, onMove: h } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Vl(u, this.transformPagePoint), et.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = zl(c.type === "pointercancel" ? this.lastMoveEventInfo : Vl(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !Zv(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = js(t), a = Vl(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = ot;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, zl(a, this.history)), this.removeListeners = dn(Gr(window, "pointermove", this.handlePointerMove), Gr(window, "pointerup", this.handlePointerUp), Gr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qr(this.updatePoint);
  }
}
function Vl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function jp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function zl({ point: e }, t) {
  return {
    point: e,
    delta: jp(e, jg(t)),
    offset: jp(e, mM(t)),
    velocity: vM(t, 0.1)
  };
}
function mM(e) {
  return e[0];
}
function jg(e) {
  return e[e.length - 1];
}
function vM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = jg(e);
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
function Yt(e) {
  return e.max - e.min;
}
function Nc(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Np(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = at(t.min, t.max, e.origin), e.scale = Yt(r) / Yt(t), (Nc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = at(r.min, r.max, e.origin) - e.originPoint, (Nc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function sa(e, t, r, n) {
  Np(e.x, t.x, r.x, n ? n.originX : void 0), Np(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Bp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Yt(t);
}
function gM(e, t, r) {
  Bp(e.x, t.x, r.x), Bp(e.y, t.y, r.y);
}
function Vp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Yt(t);
}
function la(e, t, r) {
  Vp(e.x, t.x, r.x), Vp(e.y, t.y, r.y);
}
function bM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? at(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? at(r, e, n.max) : Math.min(e, r)), e;
}
function zp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function yM(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: zp(e.x, r, o),
    y: zp(e.y, t, n)
  };
}
function Lp(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function xM(e, t) {
  return {
    x: Lp(e.x, t.x),
    y: Lp(e.y, t.y)
  };
}
function SM(e, t) {
  let r = 0.5;
  const n = Yt(e), o = Yt(t);
  return o > n ? r = Ra(t.min, t.max - n, e.min) : n > o && (r = Ra(e.min, e.max - o, t.min)), mn(0, 1, r);
}
function wM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Bc = 0.35;
function CM(e = Bc) {
  return e === !1 ? e = 0 : e === !0 && (e = Bc), {
    x: Wp(e, "left", "right"),
    y: Wp(e, "top", "bottom")
  };
}
function Wp(e, t, r) {
  return {
    min: Up(e, t),
    max: Up(e, r)
  };
}
function Up(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Hp = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), oo = () => ({
  x: Hp(),
  y: Hp()
}), Yp = () => ({ min: 0, max: 0 }), ft = () => ({
  x: Yp(),
  y: Yp()
});
function Er(e) {
  return [e("x"), e("y")];
}
function Ng({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function _M({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function EM(e, t) {
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
function Ll(e) {
  return e === void 0 || e === 1;
}
function Vc({ scale: e, scaleX: t, scaleY: r }) {
  return !Ll(e) || !Ll(t) || !Ll(r);
}
function En(e) {
  return Vc(e) || Bg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Bg(e) {
  return Gp(e.x) || Gp(e.y);
}
function Gp(e) {
  return e && e !== "0%";
}
function ps(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function qp(e, t, r, n, o) {
  return o !== void 0 && (e = ps(e, o, n)), ps(e, r, n) + t;
}
function zc(e, t = 0, r = 1, n, o) {
  e.min = qp(e.min, t, r, n, o), e.max = qp(e.max, t, r, n, o);
}
function Vg(e, { x: t, y: r }) {
  zc(e.x, t.translate, t.scale, t.originPoint), zc(e.y, r.translate, r.scale, r.originPoint);
}
function kM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && ao(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Vg(e, i)), n && En(a.latestValues) && ao(e, a.latestValues));
  }
  t.x = Xp(t.x), t.y = Xp(t.y);
}
function Xp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function cn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Kp(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = at(e.min, e.max, a);
  zc(e, t[r], t[n], i, t.scale);
}
const TM = ["x", "scaleX", "originX"], PM = ["y", "scaleY", "originY"];
function ao(e, t) {
  Kp(e.x, t, TM), Kp(e.y, t, PM);
}
function zg(e, t) {
  return Ng(EM(e.getBoundingClientRect(), t));
}
function $M(e, t, r) {
  const n = zg(e, r), { scroll: o } = t;
  return o && (cn(n.x, o.offset.x), cn(n.y, o.offset.y)), n;
}
const AM = /* @__PURE__ */ new WeakMap();
class RM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ft(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(js(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Qv(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Er((m) => {
        let h = this.getAxisMotionValue(m).get() || 0;
        if (Or.test(h)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const x = g.layout.layoutBox[m];
            x && (h = Yt(x) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[m] = h;
      }), f && et.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: m } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = OM(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Ig(t, {
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
    a && et.update(() => a(t, r));
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
    if (!n || !mi(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = bM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && ro(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = yM(n.layoutBox, t) : this.constraints = !1, this.elastic = CM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Er((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = wM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !ro(t))
      return !1;
    const n = t.current;
    xr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = $M(n, o.root, this.visualElement.getTransformPagePoint());
    let i = xM(o.layout.layoutBox, a);
    if (r) {
      const s = r(_M(i));
      this.hasMutatedConstraints = !!s, s && (i = Ng(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = Er((u) => {
      if (!mi(u, r, this.currentDirection))
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
    return n.start(Xu(t, n, 0, r));
  }
  stopAnimation() {
    Er((t) => this.getAxisMotionValue(t).stop());
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
    Er((r) => {
      const { drag: n } = this.getProps();
      if (!mi(r, n, this.currentDirection))
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
    if (!ro(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Er((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = SM({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Er((i) => {
      if (!mi(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(at(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    AM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Gr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ro(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Hr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (Er((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Bc, dragMomentum: s = !0 } = t;
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
function mi(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function OM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class DM extends yn {
  constructor(t) {
    super(t), this.removeGroupControls = mt, this.removeListeners = mt, this.controls = new RM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || mt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zp = (e) => (t, r) => {
  e && et.update(() => e(t, r));
};
class MM extends yn {
  constructor() {
    super(...arguments), this.removePointerDownListener = mt;
  }
  onPointerDown(t) {
    this.session = new Ig(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Zp(t),
      onStart: Zp(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && et.update(() => o(a, i));
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
function Lg() {
  const e = ht(za);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = bn();
  return Ze(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function kV() {
  return FM(ht(za));
}
function FM(e) {
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
function Jp(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const zo = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Jp(e, t.target.x), n = Jp(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, IM = {
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
class jM extends At.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    YO(NM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), Vi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || et.postRender(() => {
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
function Wg(e) {
  const [t, r] = Lg(), n = ht(Iu);
  return At.createElement(jM, { ...e, layoutGroup: n, switchLayoutGroup: ht(Iv), isPresent: t, safeToRemove: r });
}
const NM = {
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
  boxShadow: IM
}, Ug = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], BM = Ug.length, Qp = (e) => typeof e == "string" ? parseFloat(e) : e, eh = (e) => typeof e == "number" || fe.test(e);
function VM(e, t, r, n, o, a) {
  o ? (e.opacity = at(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    zM(n)
  ), e.opacityExit = at(t.opacity !== void 0 ? t.opacity : 1, 0, LM(n))) : a && (e.opacity = at(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < BM; i++) {
    const s = `border${Ug[i]}Radius`;
    let l = th(t, s), c = th(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || eh(l) === eh(c) ? (e[s] = Math.max(at(Qp(l), Qp(c), n), 0), (Or.test(c) || Or.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = at(t.rotate || 0, r.rotate || 0, n));
}
function th(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const zM = Hg(0, 0.5, Hu), LM = Hg(0.5, 0.95, mt);
function Hg(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Ra(e, t, n));
}
function rh(e, t) {
  e.min = t.min, e.max = t.max;
}
function Kt(e, t) {
  rh(e.x, t.x), rh(e.y, t.y);
}
function nh(e, t, r, n, o) {
  return e -= t, e = ps(e, 1 / r, n), o !== void 0 && (e = ps(e, 1 / o, n)), e;
}
function WM(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Or.test(t) && (t = parseFloat(t), t = at(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = at(a.min, a.max, n);
  e === a && (s -= t), e.min = nh(e.min, t, r, s, o), e.max = nh(e.max, t, r, s, o);
}
function oh(e, t, [r, n, o], a, i) {
  WM(e, t[r], t[n], t[o], t.scale, a, i);
}
const UM = ["x", "scaleX", "originX"], HM = ["y", "scaleY", "originY"];
function ah(e, t, r, n) {
  oh(e.x, t, UM, r ? r.x : void 0, n ? n.x : void 0), oh(e.y, t, HM, r ? r.y : void 0, n ? n.y : void 0);
}
function ih(e) {
  return e.translate === 0 && e.scale === 1;
}
function Yg(e) {
  return ih(e.x) && ih(e.y);
}
function Lc(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function sh(e) {
  return Yt(e.x) / Yt(e.y);
}
class YM {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ku(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Zu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function lh(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const GM = (e, t) => e.depth - t.depth;
class qM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ku(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Zu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(GM), this.isDirty = !1, this.children.forEach(t);
  }
}
function XM(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (Qr(n), e(a - t));
  };
  return et.read(n, !0), () => Qr(n);
}
function KM(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function ZM(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function JM(e, t, r) {
  const n = Vt(e) ? e : Co(e);
  return n.start(Xu("", n, t, r)), n.animation;
}
const ch = ["", "X", "Y", "Z"], uh = 1e3;
let QM = 0;
const kn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Gg({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = QM++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        kn.totalNodes = kn.resolvedTargetDeltas = kn.recalculatedProjection = 0, this.nodes.forEach(r5), this.nodes.forEach(s5), this.nodes.forEach(l5), this.nodes.forEach(n5), KM(kn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qM());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ju()), this.eventHandlers.get(i).add(s);
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
      this.isSVG = ZM(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = XM(f, 250), Vi.hasAnimatedSinceResize && (Vi.hasAnimatedSinceResize = !1, this.nodes.forEach(fh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const h = this.options.transition || u.getDefaultTransition() || p5, { onLayoutAnimationStart: g, onLayoutAnimationComplete: x } = u.getProps(), S = !this.targetLayout || !Lc(this.targetLayout, m) || p, w = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || f && (S || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, w);
          const T = {
            ...Og(h, "layout"),
            onPlay: g,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (T.delay = 0, T.type = !1), this.startAnimation(T);
        } else
          f || fh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(c5), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(dh);
        return;
      }
      this.isUpdating || this.nodes.forEach(a5), this.isUpdating = !1, this.nodes.forEach(i5), this.nodes.forEach(e5), this.nodes.forEach(t5), this.clearAllSnapshots();
      const s = performance.now();
      ot.delta = mn(0, 1e3 / 60, s - ot.timestamp), ot.timestamp = s, ot.isProcessing = !0, ho.update.process(ot), ho.preRender.process(ot), ho.render.process(ot), ot.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(o5), this.sharedNodes.forEach(u5);
    }
    scheduleUpdateProjection() {
      et.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      et.postRender(() => {
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
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !Yg(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || En(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), h5(l), {
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
      return l && (cn(s.x, l.offset.x), cn(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = ft();
      Kt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Kt(s, i);
            const { scroll: f } = this.root;
            f && (cn(s.x, -f.offset.x), cn(s.y, -f.offset.y));
          }
          cn(s.x, u.offset.x), cn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = ft();
      Kt(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && ao(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), En(u.latestValues) && ao(l, u.latestValues);
      }
      return En(this.latestValues) && ao(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = ft();
      Kt(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !En(c.latestValues))
          continue;
        Vc(c.latestValues) && c.updateSnapshot();
        const u = ft(), d = c.measurePageBox();
        Kt(u, d), ah(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return En(this.latestValues) && ah(s, this.latestValues), s;
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
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), la(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ft(), this.targetWithTransforms = ft()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Kt(this.target, this.layout.layoutBox), Vg(this.target, this.targetDelta)) : Kt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ft(), this.relativeTargetOrigin = ft(), la(this.relativeTargetOrigin, this.target, p.target), Kt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          kn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Vc(this.parent.latestValues) || Bg(this.parent.latestValues)))
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
      Kt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      kM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: m } = s;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = oo(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = oo(), this.projectionDeltaWithTransform = oo());
      const h = this.projectionTransform;
      sa(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = lh(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), kn.recalculatedProjection++;
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
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = oo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = ft(), p = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, h = p !== m, g = this.getStack(), x = !g || g.members.length <= 1, S = !!(h && !x && this.options.crossfade === !0 && !this.path.some(f5));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (T) => {
        const b = T / 1e3;
        ph(d.x, i.x, b), ph(d.y, i.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (la(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), d5(this.relativeTarget, this.relativeTargetOrigin, f, b), w && Lc(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = ft()), Kt(w, this.relativeTarget)), h && (this.animationValues = u, VM(u, c, this.latestValues, b, S, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Qr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = et.update(() => {
        Vi.hasAnimatedSinceResize = !0, this.currentAnimation = JM(0, uh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(uh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && qg(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ft();
          const d = Yt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = Yt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        Kt(s, l), ao(s, u), sa(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new YM()), this.sharedNodes.get(i).add(s);
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
      for (let u = 0; u < ch.length; u++) {
        const d = "rotate" + ch[u];
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Bi(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const h = {};
        return this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Bi(i.pointerEvents) || ""), this.hasProjected && !En(this.latestValues) && (h.transform = u ? u({}, "") : "none", this.hasProjected = !1), h;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = lh(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: m } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const h in is) {
        if (f[h] === void 0)
          continue;
        const { correct: g, applyTo: x } = is[h], S = c.transform === "none" ? f[h] : g(f[h], d);
        if (x) {
          const w = x.length;
          for (let T = 0; T < w; T++)
            c[x[T]] = S;
        } else
          c[h] = S;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Bi(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(dh), this.root.sharedNodes.clear();
    }
  };
}
function e5(e) {
  e.updateLayout();
}
function t5(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? Er((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Yt(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : qg(a, r.layoutBox, n) && Er((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = Yt(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = oo();
    sa(s, n, r.layoutBox);
    const l = oo();
    i ? sa(l, e.applyTransform(o, !0), r.measuredBox) : sa(l, n, r.layoutBox);
    const c = !Yg(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = ft();
          la(m, r.layoutBox, f.layoutBox);
          const h = ft();
          la(h, n, p.layoutBox), Lc(m, h) || (u = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = m, e.relativeParent = d);
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
function r5(e) {
  kn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function n5(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function o5(e) {
  e.clearSnapshot();
}
function dh(e) {
  e.clearMeasurements();
}
function a5(e) {
  e.isLayoutDirty = !1;
}
function i5(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function fh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function s5(e) {
  e.resolveTargetDelta();
}
function l5(e) {
  e.calcProjection();
}
function c5(e) {
  e.resetRotation();
}
function u5(e) {
  e.removeLeadSnapshot();
}
function ph(e, t, r) {
  e.translate = at(t.translate, 0, r), e.scale = at(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function hh(e, t, r, n) {
  e.min = at(t.min, r.min, n), e.max = at(t.max, r.max, n);
}
function d5(e, t, r, n) {
  hh(e.x, t.x, r.x, n), hh(e.y, t.y, r.y, n);
}
function f5(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const p5 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mh(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function h5(e) {
  mh(e.x), mh(e.y);
}
function qg(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Nc(sh(t), sh(r), 0.2);
}
const m5 = Gg({
  attachResizeListener: (e, t) => Hr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Wl = {
  current: void 0
}, Xg = Gg({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Wl.current) {
      const e = new m5({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Wl.current = e;
    }
    return Wl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), v5 = {
  pan: {
    Feature: MM
  },
  drag: {
    Feature: DM,
    ProjectionNode: Xg,
    MeasureLayout: Wg
  }
}, g5 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function b5(e) {
  const t = g5.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const y5 = 4;
function Wc(e, t, r = 1) {
  xr(r <= y5, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = b5(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : Ac(o) ? Wc(o, t, r + 1) : o;
}
function x5(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!Ac(a))
      return;
    const i = Wc(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!Ac(a))
      continue;
    const i = Wc(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const S5 = /* @__PURE__ */ new Set([
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
]), Kg = (e) => S5.has(e), w5 = (e) => Object.keys(e).some(Kg), gi = (e) => e === Wn || e === fe, vh = (e, t) => parseFloat(e.split(", ")[t]), gh = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return vh(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? vh(a[1], e) : 0;
  }
}, C5 = /* @__PURE__ */ new Set(["x", "y", "z"]), _5 = La.filter((e) => !C5.has(e));
function E5(e) {
  const t = [];
  return _5.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const bh = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: gh(4, 13),
  y: gh(5, 14)
}, k5 = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = bh[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = bh[c](l, a);
  }), e;
}, T5 = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(Kg);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = Vo(u);
    const f = t[l];
    let p;
    if (ls(f)) {
      const m = f.length, h = f[0] === null ? 1 : 0;
      u = f[h], d = Vo(u);
      for (let g = h; g < m && f[g] !== null; g++)
        p ? xr(Vo(f[g]) === p, "All keyframes must be of the same type") : (p = Vo(f[g]), xr(p === d || gi(d) && gi(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = Vo(f);
    if (d !== p)
      if (gi(d) && gi(p)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === fe && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = E5(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = k5(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Ds && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function P5(e, t, r, n) {
  return w5(t) ? T5(e, t, r, n) : { target: t, transitionEnd: n };
}
const $5 = (e, t, r, n) => {
  const o = x5(e, t, n);
  return t = o.target, n = o.transitionEnd, P5(e, t, r, n);
}, Uc = { current: null }, Zg = { current: !1 };
function A5() {
  if (Zg.current = !0, !!Ds)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Uc.current = e.matches;
      e.addListener(t), t();
    } else
      Uc.current = !1;
}
function R5(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Vt(a))
      e.addValue(o, a), fs(n) && n.add(o), process.env.NODE_ENV === "development" && Qu(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Vt(i))
      e.addValue(o, Co(a, { owner: e })), fs(n) && n.remove(o);
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
const yh = /* @__PURE__ */ new WeakMap(), Jg = Object.keys($a), O5 = Jg.length, xh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], D5 = Fu.length;
class M5 {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => et.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Fs(r), this.isVariantNode = Fv(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Vt(f) && (f.set(s[d], !1), fs(c) && c.add(d));
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
    this.current = t, yh.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Zg.current || A5(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Uc.current, process.env.NODE_ENV !== "production" && Qu(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    yh.delete(this.current), this.projection && this.projection.unmount(), Qr(this.notifyUpdate), Qr(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Ln.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && et.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
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
      r.ignoreStrict ? Ha(!1, l) : xr(!1, l);
    }
    for (let l = 0; l < O5; l++) {
      const c = Jg[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = $a[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && ro(d),
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
    for (let n = 0; n < xh.length; n++) {
      const o = xh[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = R5(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < D5; n++) {
      const o = Fu[n], a = this.props[o];
      (Pa(a) || a === !1) && (r[o] = a);
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = Uu(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Vt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Ju()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Qg extends M5 {
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
    let i = QD(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      ZD(this, n, i);
      const s = $5(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function F5(e) {
  return window.getComputedStyle(e);
}
class I5 extends Qg {
  readValueFromInstance(t, r) {
    if (Ln.has(r)) {
      const n = qu(r);
      return n && n.default || 0;
    } else {
      const n = F5(t), o = (Bv(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return zg(t, r);
  }
  build(t, r, n, o) {
    Nu(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Wu(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Vt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Hv(t, r, n, o);
  }
}
class j5 extends Qg {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Ln.has(r)) {
      const n = qu(r);
      return n && n.default || 0;
    }
    return r = Yv.has(r) ? r : Lu(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ft();
  }
  scrapeMotionValuesFromProps(t, r) {
    return qv(t, r);
  }
  build(t, r, n, o) {
    Vu(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Gv(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = zu(t.tagName), super.mount(t);
  }
}
const N5 = (e, t) => ju(e) ? new j5(t, { enableHardwareAcceleration: !1 }) : new I5(t, { enableHardwareAcceleration: !0 }), B5 = {
  layout: {
    ProjectionNode: Xg,
    MeasureLayout: Wg
  }
}, V5 = {
  ...pM,
  ...I2,
  ...v5,
  ...B5
}, Un = /* @__PURE__ */ UO((e, t) => y2(e, t, V5, N5));
function eb() {
  const e = Re(!1);
  return as(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function z5() {
  const e = eb(), [t, r] = Ct(0), n = ue(() => {
    e.current && r(t + 1);
  }, [t]);
  return [ue(() => et.postRender(n), [n]), t];
}
class L5 extends W.Component {
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
function W5({ children: e, isPresent: t }) {
  const r = bn(), n = Re(null), o = Re({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return nm(() => {
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
  }, [t]), W.createElement(L5, { isPresent: t, childRef: n, sizeRef: o }, W.cloneElement(e, { ref: n }));
}
const Ul = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = Xv(U5), l = bn(), c = Nt(
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
  return Nt(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), W.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = W.createElement(W5, { isPresent: r }, e)), W.createElement(za.Provider, { value: c }, e);
};
function U5() {
  return /* @__PURE__ */ new Map();
}
function H5(e) {
  return Ze(() => () => e(), []);
}
const Qn = (e) => e.key || "";
function Y5(e, t) {
  e.forEach((r) => {
    const n = Qn(r);
    t.set(n, r);
  });
}
function G5(e) {
  const t = [];
  return am.forEach(e, (r) => {
    e0(r) && t.push(r);
  }), t;
}
const Ro = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  xr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = ht(Iu).forceRender || z5()[0], l = eb(), c = G5(e);
  let u = c;
  const d = Re(/* @__PURE__ */ new Map()).current, f = Re(u), p = Re(/* @__PURE__ */ new Map()).current, m = Re(!0);
  if (as(() => {
    m.current = !1, Y5(c, p), f.current = u;
  }), H5(() => {
    m.current = !0, p.clear(), d.clear();
  }), m.current)
    return W.createElement(W.Fragment, null, u.map((S) => W.createElement(Ul, { key: Qn(S), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, S)));
  u = [...u];
  const h = f.current.map(Qn), g = c.map(Qn), x = h.length;
  for (let S = 0; S < x; S++) {
    const w = h[S];
    g.indexOf(w) === -1 && !d.has(w) && d.set(w, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((S, w) => {
    if (g.indexOf(w) !== -1)
      return;
    const T = p.get(w);
    if (!T)
      return;
    const b = h.indexOf(w);
    let j = S;
    if (!j) {
      const D = () => {
        p.delete(w), d.delete(w);
        const B = f.current.findIndex((V) => V.key === w);
        if (f.current.splice(B, 1), !d.size) {
          if (f.current = c, l.current === !1)
            return;
          s(), n && n();
        }
      };
      j = W.createElement(Ul, { key: Qn(T), isPresent: !1, onExitComplete: D, custom: t, presenceAffectsLayout: a, mode: i }, T), d.set(w, j);
    }
    u.splice(b, 0, j);
  }), u = u.map((S) => {
    const w = S.key;
    return d.has(w) ? S : W.createElement(Ul, { key: Qn(S), isPresent: !0, presenceAffectsLayout: a, mode: i }, S);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), W.createElement(W.Fragment, null, d.size ? u : u.map((S) => om(S)));
};
var Sh = {
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
}, tb = it((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = ir("chakra-icon", s), d = Ru("Icon", e), f = {
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
  }, m = n ?? Sh.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ Y.jsx(Ue.svg, { as: r, ...p, ...c });
  const h = i ?? Sh.path;
  return /* @__PURE__ */ Y.jsx(Ue.svg, { verticalAlign: "middle", viewBox: m, ...p, ...c, children: h });
});
tb.displayName = "Icon";
function q5(e) {
  return /* @__PURE__ */ Y.jsx(tb, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ Y.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var rb = it(
  function(t, r) {
    const n = Ru("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Ps(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ Y.jsx(
      Ue.button,
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
        children: o || /* @__PURE__ */ Y.jsx(q5, { width: "1em", height: "1em" })
      }
    );
  }
);
rb.displayName = "CloseButton";
function X5(e, t) {
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
function br(...e) {
  return (t) => {
    e.forEach((r) => {
      X5(r, t);
    });
  };
}
function PV(...e) {
  return Nt(() => br(...e), e);
}
function nb(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = tr(n), i = tr(o), [s, l] = Ct(r), c = t !== void 0, u = c ? t : s, d = tr(
    (f) => {
      const m = typeof f == "function" ? f(u) : f;
      i(u, m) && (c || l(m), a(m));
    },
    [c, a, u, i]
  );
  return [u, d];
}
var Hc = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Lo = {
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
function Yc(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Lo.slideRight;
    case "left":
      return Lo.slideLeft;
    case "bottom":
      return Lo.slideDown;
    case "top":
      return Lo.slideUp;
    default:
      return Lo.slideRight;
  }
}
var In = {
  enter: {
    duration: 0.2,
    ease: Hc.easeOut
  },
  exit: {
    duration: 0.1,
    ease: Hc.easeIn
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
}, K5 = {
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
}, ob = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: K5
}, Z5 = kt(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ Y.jsx(Ro, { custom: f, children: d && /* @__PURE__ */ Y.jsx(
    Un.div,
    {
      ref: r,
      className: ir("chakra-fade", a),
      custom: f,
      ...ob,
      animate: u,
      ...c
    }
  ) });
});
Z5.displayName = "Fade";
var J5 = {
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
}, ab = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: J5
}, Q5 = kt(
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
    return /* @__PURE__ */ Y.jsx(Ro, { custom: m, children: f && /* @__PURE__ */ Y.jsx(
      Un.div,
      {
        ref: r,
        className: ir("chakra-offset-slide", s),
        ...ab,
        animate: p,
        custom: m,
        ...d
      }
    ) });
  }
);
Q5.displayName = "ScaleFade";
var eF = {
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
}, Gc = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: eF
}, tF = kt(
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
    return /* @__PURE__ */ Y.jsx(Ro, { custom: h, children: p && /* @__PURE__ */ Y.jsx(
      Un.div,
      {
        ref: r,
        className: ir("chakra-offset-slide", i),
        custom: h,
        ...Gc,
        animate: m,
        ...f
      }
    ) });
  }
);
tF.displayName = "SlideFade";
var wh = {
  exit: {
    duration: 0.15,
    ease: Hc.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, rF = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = Yc({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Xr.exit(wh.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = Yc({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : Xr.enter(wh.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, ib = kt(function(t, r) {
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
  } = t, p = Yc({ direction: n }), m = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), h = a ? i && a : !0, g = i || a ? "enter" : "exit", x = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ Y.jsx(Ro, { custom: x, children: h && /* @__PURE__ */ Y.jsx(
    Un.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: ir("chakra-slide", s),
      animate: g,
      exit: "exit",
      custom: x,
      variants: rF,
      style: m,
      ...d
    }
  ) });
});
ib.displayName = "Slide";
function nF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function oF(e, t) {
  let r = nF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function aF(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function hs(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function sb(e, t, r) {
  return (r - t) * e + t;
}
function qc(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = aF(r);
  return oF(n, o);
}
function ca(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function Hl(e, t, r, n) {
  const o = tr(r);
  return Ze(() => {
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
function iF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Xc = { exports: {} }, bi = { exports: {} }, ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function sF() {
  if (Ch)
    return ze;
  Ch = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var j = b.$$typeof;
      switch (j) {
        case t:
          switch (b = b.type, b) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case u:
                case m:
                case p:
                case i:
                  return b;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function T(b) {
    return w(b) === c;
  }
  return ze.AsyncMode = l, ze.ConcurrentMode = c, ze.ContextConsumer = s, ze.ContextProvider = i, ze.Element = t, ze.ForwardRef = u, ze.Fragment = n, ze.Lazy = m, ze.Memo = p, ze.Portal = r, ze.Profiler = a, ze.StrictMode = o, ze.Suspense = d, ze.isAsyncMode = function(b) {
    return T(b) || w(b) === l;
  }, ze.isConcurrentMode = T, ze.isContextConsumer = function(b) {
    return w(b) === s;
  }, ze.isContextProvider = function(b) {
    return w(b) === i;
  }, ze.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ze.isForwardRef = function(b) {
    return w(b) === u;
  }, ze.isFragment = function(b) {
    return w(b) === n;
  }, ze.isLazy = function(b) {
    return w(b) === m;
  }, ze.isMemo = function(b) {
    return w(b) === p;
  }, ze.isPortal = function(b) {
    return w(b) === r;
  }, ze.isProfiler = function(b) {
    return w(b) === a;
  }, ze.isStrictMode = function(b) {
    return w(b) === o;
  }, ze.isSuspense = function(b) {
    return w(b) === d;
  }, ze.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === c || b === a || b === o || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === p || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === g || b.$$typeof === x || b.$$typeof === S || b.$$typeof === h);
  }, ze.typeOf = w, ze;
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
var _h;
function lF() {
  return _h || (_h = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === c || _ === a || _ === o || _ === d || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === p || _.$$typeof === i || _.$$typeof === s || _.$$typeof === u || _.$$typeof === g || _.$$typeof === x || _.$$typeof === S || _.$$typeof === h);
    }
    function T(_) {
      if (typeof _ == "object" && _ !== null) {
        var de = _.$$typeof;
        switch (de) {
          case t:
            var le = _.type;
            switch (le) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return le;
              default:
                var oe = le && le.$$typeof;
                switch (oe) {
                  case s:
                  case u:
                  case m:
                  case p:
                  case i:
                    return oe;
                  default:
                    return de;
                }
            }
          case r:
            return de;
        }
      }
    }
    var b = l, j = c, D = s, B = i, V = t, N = u, X = n, ae = m, te = p, Z = r, J = a, ie = o, K = d, ve = !1;
    function pe(_) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(_) || T(_) === l;
    }
    function O(_) {
      return T(_) === c;
    }
    function M(_) {
      return T(_) === s;
    }
    function F(_) {
      return T(_) === i;
    }
    function P(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function R(_) {
      return T(_) === u;
    }
    function I(_) {
      return T(_) === n;
    }
    function C(_) {
      return T(_) === m;
    }
    function L(_) {
      return T(_) === p;
    }
    function $(_) {
      return T(_) === r;
    }
    function G(_) {
      return T(_) === a;
    }
    function U(_) {
      return T(_) === o;
    }
    function re(_) {
      return T(_) === d;
    }
    Le.AsyncMode = b, Le.ConcurrentMode = j, Le.ContextConsumer = D, Le.ContextProvider = B, Le.Element = V, Le.ForwardRef = N, Le.Fragment = X, Le.Lazy = ae, Le.Memo = te, Le.Portal = Z, Le.Profiler = J, Le.StrictMode = ie, Le.Suspense = K, Le.isAsyncMode = pe, Le.isConcurrentMode = O, Le.isContextConsumer = M, Le.isContextProvider = F, Le.isElement = P, Le.isForwardRef = R, Le.isFragment = I, Le.isLazy = C, Le.isMemo = L, Le.isPortal = $, Le.isProfiler = G, Le.isStrictMode = U, Le.isSuspense = re, Le.isValidElementType = w, Le.typeOf = T;
  }()), Le;
}
var Eh;
function lb() {
  return Eh || (Eh = 1, process.env.NODE_ENV === "production" ? bi.exports = sF() : bi.exports = lF()), bi.exports;
}
var Yl, kh;
function ed() {
  if (kh)
    return Yl;
  kh = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yl = e, Yl;
}
var Gl, Th;
function cb() {
  return Th || (Th = 1, Gl = Function.call.bind(Object.prototype.hasOwnProperty)), Gl;
}
var ql, Ph;
function cF() {
  if (Ph)
    return ql;
  Ph = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ed(), r = {}, n = cb();
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
  }, ql = o, ql;
}
var Xl, $h;
function uF() {
  if ($h)
    return Xl;
  $h = 1;
  var e = lb(), t = hm(), r = ed(), n = cb(), o = cF(), a = function() {
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
  return Xl = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var M = O && (c && O[c] || O[u]);
      if (typeof M == "function")
        return M;
    }
    var f = "<<anonymous>>", p = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: S(),
      arrayOf: w,
      element: T(),
      elementType: b(),
      instanceOf: j,
      node: N(),
      objectOf: B,
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
      function P(I, C, L, $, G, U, re) {
        if ($ = $ || f, U = U || L, re !== r) {
          if (l) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var de = $ + ":" + L;
            !M[de] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[de] = !0, F++);
          }
        }
        return C[L] == null ? I ? C[L] === null ? new h("The " + G + " `" + U + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new h("The " + G + " `" + U + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : O(C, L, $, G, U);
      }
      var R = P.bind(null, !1);
      return R.isRequired = P.bind(null, !0), R;
    }
    function x(O) {
      function M(F, P, R, I, C, L) {
        var $ = F[P], G = ie($);
        if (G !== O) {
          var U = K($);
          return new h(
            "Invalid " + I + " `" + C + "` of type " + ("`" + U + "` supplied to `" + R + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(M);
    }
    function S() {
      return g(i);
    }
    function w(O) {
      function M(F, P, R, I, C) {
        if (typeof O != "function")
          return new h("Property `" + C + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var L = F[P];
        if (!Array.isArray(L)) {
          var $ = ie(L);
          return new h("Invalid " + I + " `" + C + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an array."));
        }
        for (var G = 0; G < L.length; G++) {
          var U = O(L, G, R, I, C + "[" + G + "]", r);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return g(M);
    }
    function T() {
      function O(M, F, P, R, I) {
        var C = M[F];
        if (!s(C)) {
          var L = ie(C);
          return new h("Invalid " + R + " `" + I + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function b() {
      function O(M, F, P, R, I) {
        var C = M[F];
        if (!e.isValidElementType(C)) {
          var L = ie(C);
          return new h("Invalid " + R + " `" + I + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function j(O) {
      function M(F, P, R, I, C) {
        if (!(F[P] instanceof O)) {
          var L = O.name || f, $ = pe(F[P]);
          return new h("Invalid " + I + " `" + C + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected ") + ("instance of `" + L + "`."));
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
      function M(F, P, R, I, C) {
        for (var L = F[P], $ = 0; $ < O.length; $++)
          if (m(L, O[$]))
            return null;
        var G = JSON.stringify(O, function(re, _) {
          var de = K(_);
          return de === "symbol" ? String(_) : _;
        });
        return new h("Invalid " + I + " `" + C + "` of value `" + String(L) + "` " + ("supplied to `" + R + "`, expected one of " + G + "."));
      }
      return g(M);
    }
    function B(O) {
      function M(F, P, R, I, C) {
        if (typeof O != "function")
          return new h("Property `" + C + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var L = F[P], $ = ie(L);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + C + "` of type " + ("`" + $ + "` supplied to `" + R + "`, expected an object."));
        for (var G in L)
          if (n(L, G)) {
            var U = O(L, G, R, I, C + "." + G, r);
            if (U instanceof Error)
              return U;
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
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ve(F) + " at index " + M + "."
          ), i;
      }
      function P(R, I, C, L, $) {
        for (var G = [], U = 0; U < O.length; U++) {
          var re = O[U], _ = re(R, I, C, L, $, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && G.push(_.data.expectedType);
        }
        var de = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new h("Invalid " + L + " `" + $ + "` supplied to " + ("`" + C + "`" + de + "."));
      }
      return g(P);
    }
    function N() {
      function O(M, F, P, R, I) {
        return Z(M[F]) ? null : new h("Invalid " + R + " `" + I + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function X(O, M, F, P, R) {
      return new h(
        (O || "React class") + ": " + M + " type `" + F + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function ae(O) {
      function M(F, P, R, I, C) {
        var L = F[P], $ = ie(L);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + C + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var G in O) {
          var U = O[G];
          if (typeof U != "function")
            return X(R, I, C, G, K(U));
          var re = U(L, G, R, I, C + "." + G, r);
          if (re)
            return re;
        }
        return null;
      }
      return g(M);
    }
    function te(O) {
      function M(F, P, R, I, C) {
        var L = F[P], $ = ie(L);
        if ($ !== "object")
          return new h("Invalid " + I + " `" + C + "` of type `" + $ + "` " + ("supplied to `" + R + "`, expected `object`."));
        var G = t({}, F[P], O);
        for (var U in G) {
          var re = O[U];
          if (n(O, U) && typeof re != "function")
            return X(R, I, C, U, K(re));
          if (!re)
            return new h(
              "Invalid " + I + " `" + C + "` key `" + U + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(F[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var _ = re(L, U, R, I, C + "." + U, r);
          if (_)
            return _;
        }
        return null;
      }
      return g(M);
    }
    function Z(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(Z);
          if (O === null || s(O))
            return !0;
          var M = d(O);
          if (M) {
            var F = M.call(O), P;
            if (M !== O.entries) {
              for (; !(P = F.next()).done; )
                if (!Z(P.value))
                  return !1;
            } else
              for (; !(P = F.next()).done; ) {
                var R = P.value;
                if (R && !Z(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(O, M) {
      return O === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function ie(O) {
      var M = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : J(M, O) ? "symbol" : M;
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
    function ve(O) {
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
    function pe(O) {
      return !O.constructor || !O.constructor.name ? f : O.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Xl;
}
var Kl, Ah;
function dF() {
  if (Ah)
    return Kl;
  Ah = 1;
  var e = ed();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Kl = function() {
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
  }, Kl;
}
if (process.env.NODE_ENV !== "production") {
  var fF = lb(), pF = !0;
  Xc.exports = uF()(fF.isElement, pF);
} else
  Xc.exports = dF()();
var Ge = Xc.exports;
const ub = /* @__PURE__ */ ys(Ge);
var Kc = "data-focus-lock", db = "data-focus-lock-disabled", hF = "data-no-focus-lock", mF = "data-autofocus-inside", vF = "data-no-autofocus";
function gF(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bF(e, t) {
  var r = Ct(function() {
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
function fb(e, t) {
  return bF(t || null, function(r) {
    return e.forEach(function(n) {
      return gF(n, r);
    });
  });
}
var Zl = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && ub.node;
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
function pb(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function yF(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function hb(e) {
  return e;
}
function mb(e, t) {
  t === void 0 && (t = hb);
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
function td(e, t) {
  return t === void 0 && (t = hb), mb(e, t);
}
function vb(e) {
  e === void 0 && (e = {});
  var t = mb(null);
  return t.options = $r({ async: !0, ssr: !1 }, e), t;
}
var gb = function(e) {
  var t = e.sideCar, r = pb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return W.createElement(n, $r({}, r));
};
gb.isSideCarExport = !0;
function xF(e, t) {
  return e.useMedium(t), gb;
}
var bb = td({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), yb = td(), SF = td(), wF = vb({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), CF = [], rd = /* @__PURE__ */ W.forwardRef(function(t, r) {
  var n, o = W.useState(), a = o[0], i = o[1], s = W.useRef(), l = W.useRef(!1), c = W.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, m = t.crossFrame, h = t.autoFocus, g = t.allowTextSelection, x = t.group, S = t.className, w = t.whiteList, T = t.hasPositiveIndices, b = t.shards, j = b === void 0 ? CF : b, D = t.as, B = D === void 0 ? "div" : D, V = t.lockProps, N = V === void 0 ? {} : V, X = t.sideCar, ae = t.returnFocus, te = t.focusOptions, Z = t.onActivation, J = t.onDeactivation, ie = W.useState({}), K = ie[0], ve = W.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && Z && Z(s.current), l.current = !0;
  }, [Z]), pe = W.useCallback(function() {
    l.current = !1, J && J(s.current);
  }, [J]);
  Ze(function() {
    d || (c.current = null);
  }, []);
  var O = W.useCallback(function($) {
    var G = c.current;
    if (G && G.focus) {
      var U = typeof ae == "function" ? ae(G) : ae;
      if (U) {
        var re = typeof U == "object" ? U : void 0;
        c.current = null, $ ? Promise.resolve().then(function() {
          return G.focus(re);
        }) : G.focus(re);
      }
    }
  }, [ae]), M = W.useCallback(function($) {
    l.current && bb.useMedium($);
  }, []), F = yb.useMedium, P = W.useCallback(function($) {
    s.current !== $ && (s.current = $, i($));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof g < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), W.useEffect(function() {
    !s.current && typeof B != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var R = Nn((n = {}, n[db] = d && "disabled", n[Kc] = x, n), N), I = f !== !0, C = I && f !== "tail", L = fb([r, P]);
  return /* @__PURE__ */ W.createElement(W.Fragment, null, I && [
    // nearest focus guard
    /* @__PURE__ */ W.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Zl
    }),
    // first tabbed element guard
    T ? /* @__PURE__ */ W.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Zl
    }) : null
  ], !d && /* @__PURE__ */ W.createElement(X, {
    id: K,
    sideCar: wF,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: m,
    autoFocus: h,
    whiteList: w,
    shards: j,
    onActivation: ve,
    onDeactivation: pe,
    returnFocus: O,
    focusOptions: te
  }), /* @__PURE__ */ W.createElement(B, Nn({
    ref: L
  }, R, {
    className: S,
    onBlur: F,
    onFocus: M
  }), u), C && /* @__PURE__ */ W.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Zl
  }));
});
rd.propTypes = process.env.NODE_ENV !== "production" ? {
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
rd.defaultProps = {
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
const xb = rd;
function _F(e, t) {
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
      l0(u, c);
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
        return /* @__PURE__ */ At.createElement(o, this.props);
      }, u;
    }(t0);
    return au(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Ir = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, ms = function(e) {
  return Array.isArray(e) ? e : [e];
}, Sb = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, EF = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, wb = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, Cb = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, kF = function(e, t) {
  return !e || Cb(e) || !EF(e) && t(wb(e));
}, _b = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = kF(t, _b.bind(void 0, e));
  return e.set(t, n), n;
}, TF = function(e, t) {
  return e && !Cb(e) ? AF(e) ? t(wb(e)) : !1 : !0;
}, Eb = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = TF(t, Eb.bind(void 0, e));
  return e.set(t, n), n;
}, kb = function(e) {
  return e.dataset;
}, PF = function(e) {
  return e.tagName === "BUTTON";
}, Tb = function(e) {
  return e.tagName === "INPUT";
}, Pb = function(e) {
  return Tb(e) && e.type === "radio";
}, $F = function(e) {
  return !((Tb(e) || PF(e)) && (e.type === "hidden" || e.disabled));
}, AF = function(e) {
  var t = e.getAttribute(vF);
  return ![!0, "true", ""].includes(t);
}, nd = function(e) {
  var t;
  return !!(e && (!((t = kb(e)) === null || t === void 0) && t.focusGuard));
}, vs = function(e) {
  return !nd(e);
}, RF = function(e) {
  return !!e;
}, OF = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, $b = function(e, t, r) {
  return Ir(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(OF);
}, DF = [
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
], od = DF.join(","), MF = "".concat(od, ", [data-focus-guard]"), Ab = function(e, t) {
  return Ir((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? MF : od) ? [n] : [], Ab(n));
  }, []);
}, FF = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? Vs([e.contentDocument.body], t) : [e];
}, Vs = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = Ab(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return FF(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Ir(n.parentNode.querySelectorAll(od)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, IF = function(e) {
  var t = e.querySelectorAll("[".concat(mF, "]"));
  return Ir(t).map(function(r) {
    return Vs([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, ad = function(e, t) {
  return Ir(e).filter(function(r) {
    return _b(t, r);
  }).filter(function(r) {
    return $F(r);
  });
}, Rh = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ir(e).filter(function(r) {
    return Eb(t, r);
  });
}, Zc = function(e, t, r) {
  return $b(ad(Vs(e, r), t), !0, r);
}, Oh = function(e, t) {
  return $b(ad(Vs(e), t), !1);
}, jF = function(e, t) {
  return ad(IF(e), t);
}, mo = function(e, t) {
  return e.shadowRoot ? mo(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ir(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? mo(o, t) : !1;
    }
    return mo(r, t);
  });
}, NF = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, Rb = function(e) {
  return e.parentNode ? Rb(e.parentNode) : e;
}, id = function(e) {
  var t = ms(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(Kc);
    return r.push.apply(r, o ? NF(Ir(Rb(n).querySelectorAll("[".concat(Kc, '="').concat(o, '"]:not([').concat(db, '="disabled"])')))) : [n]), r;
  }, []);
}, BF = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Oa = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Oa(t.shadowRoot) : t instanceof HTMLIFrameElement && BF(function() {
      return t.contentWindow.document;
    }) ? Oa(t.contentWindow.document) : t;
  }
}, VF = function(e, t) {
  return e === t;
}, zF = function(e, t) {
  return !!Ir(e.querySelectorAll("iframe")).some(function(r) {
    return VF(r, t);
  });
}, Ob = function(e, t) {
  return t === void 0 && (t = Oa(Sb(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : id(e).some(function(r) {
    return mo(r, t) || zF(r, t);
  });
}, LF = function(e) {
  e === void 0 && (e = document);
  var t = Oa(e);
  return t ? Ir(e.querySelectorAll("[".concat(hF, "]"))).some(function(r) {
    return mo(r, t);
  }) : !1;
}, WF = function(e, t) {
  return t.filter(Pb).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, sd = function(e, t) {
  return Pb(e) && e.name ? WF(e, t) : e;
}, UF = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(sd(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, Dh = function(e) {
  return e[0] && e.length > 1 ? sd(e[0], e) : e[0];
}, Mh = function(e, t) {
  return e.length > 1 ? e.indexOf(sd(e[t], e)) : t;
}, Db = "NEW_FOCUS", HF = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = nd(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), m = UF(t), h = r !== void 0 ? m.indexOf(r) : -1, g = h - (n ? m.indexOf(n) : l), x = Mh(e, 0), S = Mh(e, o - 1);
    if (l === -1 || u === -1)
      return Db;
    if (!d && u >= 0)
      return u;
    if (l <= f && s && Math.abs(d) > 1)
      return S;
    if (l >= p && s && Math.abs(d) > 1)
      return x;
    if (d && Math.abs(g) > 1)
      return u;
    if (l <= f)
      return S;
    if (l > p)
      return x;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, YF = function(e) {
  return function(t) {
    var r, n = (r = kb(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, GF = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Rh(n.filter(YF(r)));
  return o && o.length ? Dh(o) : Dh(Rh(t));
}, Jc = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && Jc(e.parentNode.host || e.parentNode, t), t;
}, Jl = function(e, t) {
  for (var r = Jc(e), n = Jc(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, Mb = function(e, t, r) {
  var n = ms(e), o = ms(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = Jl(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = Jl(a, l);
      c && (!i || mo(c, i) ? i = c : i = Jl(c, i));
    });
  }), i;
}, qF = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(jF(n, t));
  }, []);
}, XF = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(RF);
}, KF = function(e, t) {
  var r = Oa(ms(e).length > 0 ? document : Sb(e).ownerDocument), n = id(e).filter(vs), o = Mb(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Oh(n, a), s = Zc(n, a).filter(function(p) {
    var m = p.node;
    return vs(m);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Oh([o], a).map(function(p) {
      var m = p.node;
      return m;
    }), c = XF(l, s), u = c.map(function(p) {
      var m = p.node;
      return m;
    }), d = HF(u, l, r, t);
    if (d === Db) {
      var f = GF(i, u, qF(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, ZF = function(e) {
  var t = id(e).filter(vs), r = Mb(e, e, t), n = /* @__PURE__ */ new Map(), o = Zc([r], n, !0), a = Zc(t, n).filter(function(i) {
    var s = i.node;
    return vs(s);
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
      guard: nd(s)
    };
  });
}, JF = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Ql = 0, ec = !1, Fb = function(e, t, r) {
  r === void 0 && (r = {});
  var n = KF(e, t);
  if (!ec && n) {
    if (Ql > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ec = !0, setTimeout(function() {
        ec = !1;
      }, 1);
      return;
    }
    Ql++, JF(n.node, r.focusOptions), Ql--;
  }
};
function Ib(e) {
  var t = window, r = t.setImmediate;
  typeof r < "u" ? r(e) : setTimeout(e, 1);
}
var QF = function() {
  return document && document.activeElement === document.body;
}, eI = function() {
  return QF() || LF();
}, vo = null, io = null, go = null, Da = !1, tI = function() {
  return !0;
}, rI = function(t) {
  return (vo.whiteList || tI)(t);
}, nI = function(t, r) {
  go = {
    observerNode: t,
    portaledElement: r
  };
}, oI = function(t) {
  return go && go.portaledElement === t;
};
function Fh(e, t, r, n) {
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
var aI = function(t) {
  return t && "current" in t ? t.current : t;
}, iI = function(t) {
  return t ? !!Da : Da === "meanwhile";
}, sI = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, lI = function(t, r) {
  return r.some(function(n) {
    return sI(t, n, n);
  });
}, gs = function() {
  var t = !1;
  if (vo) {
    var r = vo, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || go && go.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(aI).filter(Boolean));
      if ((!u || rI(u)) && (o || iI(s) || !eI() || !io && a) && (c && !// active element is "inside" working area
      (Ob(d) || // check for shadow-dom contained elements
      u && lI(u, d) || oI(u)) && (document && !io && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = Fb(d, io, {
        focusOptions: l
      }), go = {})), Da = !1, io = document && document.activeElement), document) {
        var f = document && document.activeElement, p = ZF(d), m = p.map(function(h) {
          var g = h.node;
          return g;
        }).indexOf(f);
        m > -1 && (p.filter(function(h) {
          var g = h.guard, x = h.node;
          return g && x.dataset.focusAutoGuard;
        }).forEach(function(h) {
          var g = h.node;
          return g.removeAttribute("tabIndex");
        }), Fh(m, p.length, 1, p), Fh(m, -1, -1, p));
      }
    }
  }
  return t;
}, jb = function(t) {
  gs() && t && (t.stopPropagation(), t.preventDefault());
}, ld = function() {
  return Ib(gs);
}, cI = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || nI(n, r);
}, uI = function() {
  return null;
};
process.env.NODE_ENV !== "production" && ub.node.isRequired;
var Nb = function() {
  Da = "just", setTimeout(function() {
    Da = "meanwhile";
  }, 0);
}, dI = function() {
  document.addEventListener("focusin", jb), document.addEventListener("focusout", ld), window.addEventListener("blur", Nb);
}, fI = function() {
  document.removeEventListener("focusin", jb), document.removeEventListener("focusout", ld), window.removeEventListener("blur", Nb);
};
function pI(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function hI(e) {
  var t = e.slice(-1)[0];
  t && !vo && dI();
  var r = vo, n = r && t && t.id === r.id;
  vo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (io = null, (!n || r.observed !== t.observed) && t.onActivation(), gs(), Ib(gs)) : (fI(), io = null);
}
bb.assignSyncMedium(cI);
yb.assignMedium(ld);
SF.assignMedium(function(e) {
  return e({
    moveFocusInside: Fb,
    focusInside: Ob
  });
});
const mI = _F(pI, hI)(uI);
var Bb = /* @__PURE__ */ W.forwardRef(function(t, r) {
  return /* @__PURE__ */ W.createElement(xb, Nn({
    sideCar: mI,
    ref: r
  }, t));
}), Vb = xb.propTypes || {};
Vb.sideCar;
var vI = iF(Vb, ["sideCar"]);
Bb.propTypes = process.env.NODE_ENV !== "production" ? vI : {};
const Ih = Bb;
function zb(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function cd(e) {
  var t;
  if (!zb(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function $V(e) {
  var t, r;
  return (r = (t = Lb(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function Lb(e) {
  return zb(e) ? e.ownerDocument : document;
}
function AV(e) {
  return Lb(e).activeElement;
}
function gI(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function bI(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function Wb(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : cd(e) && gI(e) ? e : Wb(bI(e));
}
var Ub = (e) => e.hasAttribute("tabindex"), yI = (e) => Ub(e) && e.tabIndex === -1;
function xI(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Hb(e) {
  return e.parentElement && Hb(e.parentElement) ? !0 : e.hidden;
}
function SI(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Yb(e) {
  if (!cd(e) || Hb(e) || xI(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : SI(e) ? !0 : Ub(e);
}
function RV(e) {
  return e ? cd(e) && Yb(e) && !yI(e) : !1;
}
var wI = [
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
], CI = wI.join(), _I = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function EI(e) {
  const t = Array.from(
    e.querySelectorAll(CI)
  );
  return t.unshift(e), t.filter((r) => Yb(r) && _I(r));
}
var jh, kI = (jh = Ih.default) != null ? jh : Ih, Gb = (e) => {
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
  } = e, u = ue(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && EI(n.current).length === 0 && requestAnimationFrame(() => {
      var m;
      (m = n.current) == null || m.focus();
    });
  }, [t, n]), d = ue(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ Y.jsx(
    kI,
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
Gb.displayName = "FocusLock";
var qb = Ue("div");
qb.displayName = "Box";
var Xb = it(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ Y.jsx(
    qb,
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
Xb.displayName = "Square";
var TI = it(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ Y.jsx(Xb, { size: n, ref: r, borderRadius: "9999px", ...o });
});
TI.displayName = "Circle";
var PI = it(function(t, r) {
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
  return /* @__PURE__ */ Y.jsx(Ue.div, { ref: r, __css: d, ...u });
});
PI.displayName = "Flex";
var qn = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), wt = {
  arrowShadowColor: qn("--popper-arrow-shadow-color"),
  arrowSize: qn("--popper-arrow-size", "8px"),
  arrowSizeHalf: qn("--popper-arrow-size-half"),
  arrowBg: qn("--popper-arrow-bg"),
  transformOrigin: qn("--popper-transform-origin"),
  arrowOffset: qn("--popper-arrow-offset")
};
function $I(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var AI = {
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
}, RI = (e) => AI[e], Nh = {
  scroll: !0,
  resize: !0
};
function OI(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Nh, ...e }
  } : t = {
    enabled: e,
    options: Nh
  }, t;
}
var DI = {
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
}, MI = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Bh(e);
  },
  effect: ({ state: e }) => () => {
    Bh(e);
  }
}, Bh = (e) => {
  e.elements.popper.style.setProperty(
    wt.transformOrigin.var,
    RI(e.placement)
  );
}, FI = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    II(e);
  }
}, II = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = jI(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: wt.arrowSize.varRef,
      height: wt.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [wt.arrowSizeHalf.var]: `calc(${wt.arrowSize.varRef} / 2 - 1px)`,
      [wt.arrowOffset.var]: `calc(${wt.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, jI = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: wt.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: wt.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: wt.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: wt.arrowOffset.varRef };
}, NI = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    Vh(e);
  },
  effect: ({ state: e }) => () => {
    Vh(e);
  }
}, Vh = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = $I(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: wt.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, BI = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, VI = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function zI(e, t = "ltr") {
  var r, n;
  const o = ((r = BI[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = VI[e]) != null ? n : o;
}
var It = "top", nr = "bottom", or = "right", jt = "left", ud = "auto", Ga = [It, nr, or, jt], _o = "start", Ma = "end", LI = "clippingParents", Kb = "viewport", Wo = "popper", WI = "reference", zh = /* @__PURE__ */ Ga.reduce(function(e, t) {
  return e.concat([t + "-" + _o, t + "-" + Ma]);
}, []), Zb = /* @__PURE__ */ [].concat(Ga, [ud]).reduce(function(e, t) {
  return e.concat([t, t + "-" + _o, t + "-" + Ma]);
}, []), UI = "beforeRead", HI = "read", YI = "afterRead", GI = "beforeMain", qI = "main", XI = "afterMain", KI = "beforeWrite", ZI = "write", JI = "afterWrite", QI = [UI, HI, YI, GI, qI, XI, KI, ZI, JI];
function Mr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Gt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bn(e) {
  var t = Gt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rr(e) {
  var t = Gt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function dd(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Gt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ej(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !rr(a) || !Mr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function tj(e) {
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
      !rr(o) || !Mr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const rj = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ej,
  effect: tj,
  requires: ["computeStyles"]
};
function Dr(e) {
  return e.split("-")[0];
}
var jn = Math.max, bs = Math.min, Eo = Math.round;
function Qc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Jb() {
  return !/^((?!chrome|android).)*safari/i.test(Qc());
}
function ko(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && rr(e) && (o = e.offsetWidth > 0 && Eo(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Eo(n.height) / e.offsetHeight || 1);
  var i = Bn(e) ? Gt(e) : window, s = i.visualViewport, l = !Jb() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
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
function fd(e) {
  var t = ko(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Qb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && dd(r)) {
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
  return Gt(e).getComputedStyle(e);
}
function nj(e) {
  return ["table", "td", "th"].indexOf(Mr(e)) >= 0;
}
function xn(e) {
  return ((Bn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function zs(e) {
  return Mr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (dd(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    xn(e)
  );
}
function Lh(e) {
  return !rr(e) || // https://github.com/popperjs/popper-core/issues/837
  en(e).position === "fixed" ? null : e.offsetParent;
}
function oj(e) {
  var t = /firefox/i.test(Qc()), r = /Trident/i.test(Qc());
  if (r && rr(e)) {
    var n = en(e);
    if (n.position === "fixed")
      return null;
  }
  var o = zs(e);
  for (dd(o) && (o = o.host); rr(o) && ["html", "body"].indexOf(Mr(o)) < 0; ) {
    var a = en(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function qa(e) {
  for (var t = Gt(e), r = Lh(e); r && nj(r) && en(r).position === "static"; )
    r = Lh(r);
  return r && (Mr(r) === "html" || Mr(r) === "body" && en(r).position === "static") ? t : r || oj(e) || t;
}
function pd(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ua(e, t, r) {
  return jn(e, bs(t, r));
}
function aj(e, t, r) {
  var n = ua(e, t, r);
  return n > r ? r : n;
}
function ey() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ty(e) {
  return Object.assign({}, ey(), e);
}
function ry(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var ij = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ty(typeof t != "number" ? t : ry(t, Ga));
};
function sj(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Dr(r.placement), l = pd(s), c = [jt, or].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = ij(o.padding, r), f = fd(a), p = l === "y" ? It : jt, m = l === "y" ? nr : or, h = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], g = i[l] - r.rects.reference[l], x = qa(a), S = x ? l === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, w = h / 2 - g / 2, T = d[p], b = S - f[u] - d[m], j = S / 2 - f[u] / 2 + w, D = ua(T, j, b), B = l;
    r.modifiersData[n] = (t = {}, t[B] = D, t.centerOffset = D - j, t);
  }
}
function lj(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Qb(t.elements.popper, o) && (t.elements.arrow = o));
}
const cj = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sj,
  effect: lj,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function To(e) {
  return e.split("-")[1];
}
var uj = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dj(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Eo(r * o) / o || 0,
    y: Eo(n * o) / o || 0
  };
}
function Wh(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, m = i.y, h = m === void 0 ? 0 : m, g = typeof u == "function" ? u({
    x: p,
    y: h
  }) : {
    x: p,
    y: h
  };
  p = g.x, h = g.y;
  var x = i.hasOwnProperty("x"), S = i.hasOwnProperty("y"), w = jt, T = It, b = window;
  if (c) {
    var j = qa(r), D = "clientHeight", B = "clientWidth";
    if (j === Gt(r) && (j = xn(r), en(j).position !== "static" && s === "absolute" && (D = "scrollHeight", B = "scrollWidth")), j = j, o === It || (o === jt || o === or) && a === Ma) {
      T = nr;
      var V = d && j === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[D]
      );
      h -= V - n.height, h *= l ? 1 : -1;
    }
    if (o === jt || (o === It || o === nr) && a === Ma) {
      w = or;
      var N = d && j === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[B]
      );
      p -= N - n.width, p *= l ? 1 : -1;
    }
  }
  var X = Object.assign({
    position: s
  }, c && uj), ae = u === !0 ? dj({
    x: p,
    y: h
  }, Gt(r)) : {
    x: p,
    y: h
  };
  if (p = ae.x, h = ae.y, l) {
    var te;
    return Object.assign({}, X, (te = {}, te[T] = S ? "0" : "", te[w] = x ? "0" : "", te.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", te));
  }
  return Object.assign({}, X, (t = {}, t[T] = S ? h + "px" : "", t[w] = x ? p + "px" : "", t.transform = "", t));
}
function fj(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Dr(t.placement),
    variation: To(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wh(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wh(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const pj = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fj,
  data: {}
};
var yi = {
  passive: !0
};
function hj(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = Gt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, yi);
  }), s && l.addEventListener("resize", r.update, yi), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, yi);
    }), s && l.removeEventListener("resize", r.update, yi);
  };
}
const mj = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hj,
  data: {}
};
var vj = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function zi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vj[t];
  });
}
var gj = {
  start: "end",
  end: "start"
};
function Uh(e) {
  return e.replace(/start|end/g, function(t) {
    return gj[t];
  });
}
function hd(e) {
  var t = Gt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function md(e) {
  return ko(xn(e)).left + hd(e).scrollLeft;
}
function bj(e, t) {
  var r = Gt(e), n = xn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = Jb();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + md(e),
    y: l
  };
}
function yj(e) {
  var t, r = xn(e), n = hd(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = jn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = jn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + md(e), l = -n.scrollTop;
  return en(o || r).direction === "rtl" && (s += jn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function vd(e) {
  var t = en(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ny(e) {
  return ["html", "body", "#document"].indexOf(Mr(e)) >= 0 ? e.ownerDocument.body : rr(e) && vd(e) ? e : ny(zs(e));
}
function da(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ny(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Gt(n), i = o ? [a].concat(a.visualViewport || [], vd(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(da(zs(i)))
  );
}
function eu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xj(e, t) {
  var r = ko(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Hh(e, t, r) {
  return t === Kb ? eu(bj(e, r)) : Bn(t) ? xj(t, r) : eu(yj(xn(e)));
}
function Sj(e) {
  var t = da(zs(e)), r = ["absolute", "fixed"].indexOf(en(e).position) >= 0, n = r && rr(e) ? qa(e) : e;
  return Bn(n) ? t.filter(function(o) {
    return Bn(o) && Qb(o, n) && Mr(o) !== "body";
  }) : [];
}
function wj(e, t, r, n) {
  var o = t === "clippingParents" ? Sj(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = Hh(e, c, n);
    return l.top = jn(u.top, l.top), l.right = bs(u.right, l.right), l.bottom = bs(u.bottom, l.bottom), l.left = jn(u.left, l.left), l;
  }, Hh(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function oy(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Dr(n) : null, a = n ? To(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case It:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case nr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case or:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case jt:
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
  var c = o ? pd(o) : null;
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
function Fa(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? LI : s, c = r.rootBoundary, u = c === void 0 ? Kb : c, d = r.elementContext, f = d === void 0 ? Wo : d, p = r.altBoundary, m = p === void 0 ? !1 : p, h = r.padding, g = h === void 0 ? 0 : h, x = ty(typeof g != "number" ? g : ry(g, Ga)), S = f === Wo ? WI : Wo, w = e.rects.popper, T = e.elements[m ? S : f], b = wj(Bn(T) ? T : T.contextElement || xn(e.elements.popper), l, u, i), j = ko(e.elements.reference), D = oy({
    reference: j,
    element: w,
    strategy: "absolute",
    placement: o
  }), B = eu(Object.assign({}, w, D)), V = f === Wo ? B : j, N = {
    top: b.top - V.top + x.top,
    bottom: V.bottom - b.bottom + x.bottom,
    left: b.left - V.left + x.left,
    right: V.right - b.right + x.right
  }, X = e.modifiersData.offset;
  if (f === Wo && X) {
    var ae = X[o];
    Object.keys(N).forEach(function(te) {
      var Z = [or, nr].indexOf(te) >= 0 ? 1 : -1, J = [It, nr].indexOf(te) >= 0 ? "y" : "x";
      N[te] += ae[J] * Z;
    });
  }
  return N;
}
function Cj(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Zb : l, u = To(n), d = u ? s ? zh : zh.filter(function(m) {
    return To(m) === u;
  }) : Ga, f = d.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(m, h) {
    return m[h] = Fa(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Dr(h)], m;
  }, {});
  return Object.keys(p).sort(function(m, h) {
    return p[m] - p[h];
  });
}
function _j(e) {
  if (Dr(e) === ud)
    return [];
  var t = zi(e);
  return [Uh(e), t, Uh(t)];
}
function Ej(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, g = t.options.placement, x = Dr(g), S = x === g, w = l || (S || !m ? [zi(g)] : _j(g)), T = [g].concat(w).reduce(function(R, I) {
      return R.concat(Dr(I) === ud ? Cj(t, {
        placement: I,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: h
      }) : I);
    }, []), b = t.rects.reference, j = t.rects.popper, D = /* @__PURE__ */ new Map(), B = !0, V = T[0], N = 0; N < T.length; N++) {
      var X = T[N], ae = Dr(X), te = To(X) === _o, Z = [It, nr].indexOf(ae) >= 0, J = Z ? "width" : "height", ie = Fa(t, {
        placement: X,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), K = Z ? te ? or : jt : te ? nr : It;
      b[J] > j[J] && (K = zi(K));
      var ve = zi(K), pe = [];
      if (a && pe.push(ie[ae] <= 0), s && pe.push(ie[K] <= 0, ie[ve] <= 0), pe.every(function(R) {
        return R;
      })) {
        V = X, B = !1;
        break;
      }
      D.set(X, pe);
    }
    if (B)
      for (var O = m ? 3 : 1, M = function(I) {
        var C = T.find(function(L) {
          var $ = D.get(L);
          if ($)
            return $.slice(0, I).every(function(G) {
              return G;
            });
        });
        if (C)
          return V = C, "break";
      }, F = O; F > 0; F--) {
        var P = M(F);
        if (P === "break")
          break;
      }
    t.placement !== V && (t.modifiersData[n]._skip = !0, t.placement = V, t.reset = !0);
  }
}
const kj = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ej,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yh(e, t, r) {
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
function Gh(e) {
  return [It, or, nr, jt].some(function(t) {
    return e[t] >= 0;
  });
}
function Tj(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Fa(t, {
    elementContext: "reference"
  }), s = Fa(t, {
    altBoundary: !0
  }), l = Yh(i, n), c = Yh(s, o, a), u = Gh(l), d = Gh(c);
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
const Pj = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Tj
};
function $j(e, t, r) {
  var n = Dr(e), o = [jt, It].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [jt, or].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Aj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = Zb.reduce(function(u, d) {
    return u[d] = $j(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const Rj = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Aj
};
function Oj(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = oy({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Dj = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Oj,
  data: {}
};
function Mj(e) {
  return e === "x" ? "y" : "x";
}
function Fj(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, m = r.tetherOffset, h = m === void 0 ? 0 : m, g = Fa(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), x = Dr(t.placement), S = To(t.placement), w = !S, T = pd(x), b = Mj(T), j = t.modifiersData.popperOffsets, D = t.rects.reference, B = t.rects.popper, V = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, N = typeof V == "number" ? {
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
      var te, Z = T === "y" ? It : jt, J = T === "y" ? nr : or, ie = T === "y" ? "height" : "width", K = j[T], ve = K + g[Z], pe = K - g[J], O = p ? -B[ie] / 2 : 0, M = S === _o ? D[ie] : B[ie], F = S === _o ? -B[ie] : -D[ie], P = t.elements.arrow, R = p && P ? fd(P) : {
        width: 0,
        height: 0
      }, I = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ey(), C = I[Z], L = I[J], $ = ua(0, D[ie], R[ie]), G = w ? D[ie] / 2 - O - $ - C - N.mainAxis : M - $ - C - N.mainAxis, U = w ? -D[ie] / 2 + O + $ + L + N.mainAxis : F + $ + L + N.mainAxis, re = t.elements.arrow && qa(t.elements.arrow), _ = re ? T === "y" ? re.clientTop || 0 : re.clientLeft || 0 : 0, de = (te = X == null ? void 0 : X[T]) != null ? te : 0, le = K + G - de - _, oe = K + U - de, $e = ua(p ? bs(ve, le) : ve, K, p ? jn(pe, oe) : pe);
      j[T] = $e, ae[T] = $e - K;
    }
    if (s) {
      var be, xe = T === "x" ? It : jt, dt = T === "x" ? nr : or, we = j[b], ct = b === "y" ? "height" : "width", tt = we + g[xe], Oe = we - g[dt], se = [It, jt].indexOf(x) !== -1, ke = (be = X == null ? void 0 : X[b]) != null ? be : 0, Tt = se ? tt : we - D[ct] - B[ct] - ke + N.altAxis, gt = se ? we + D[ct] + B[ct] - ke - N.altAxis : Oe, st = p && se ? aj(Tt, we, gt) : ua(p ? Tt : tt, we, p ? gt : Oe);
      j[b] = st, ae[b] = st - we;
    }
    t.modifiersData[n] = ae;
  }
}
const Ij = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Fj,
  requiresIfExists: ["offset"]
};
function jj(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Nj(e) {
  return e === Gt(e) || !rr(e) ? hd(e) : jj(e);
}
function Bj(e) {
  var t = e.getBoundingClientRect(), r = Eo(t.width) / e.offsetWidth || 1, n = Eo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Vj(e, t, r) {
  r === void 0 && (r = !1);
  var n = rr(t), o = rr(t) && Bj(t), a = xn(t), i = ko(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Mr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vd(a)) && (s = Nj(t)), rr(t) ? (l = ko(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = md(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function zj(e) {
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
function Lj(e) {
  var t = zj(e);
  return QI.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Wj(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Uj(e) {
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
var qh = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Hj(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? qh : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qh, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(x) {
        var S = typeof x == "function" ? x(u.options) : x;
        h(), u.options = Object.assign({}, a, u.options, S), u.scrollParents = {
          reference: Bn(s) ? da(s) : s.contextElement ? da(s.contextElement) : [],
          popper: da(l)
        };
        var w = Lj(Uj([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = w.filter(function(T) {
          return T.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var x = u.elements, S = x.reference, w = x.popper;
          if (Xh(S, w)) {
            u.rects = {
              reference: Vj(S, qa(w), u.options.strategy === "fixed"),
              popper: fd(w)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(N) {
              return u.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var T = 0; T < u.orderedModifiers.length; T++) {
              if (u.reset === !0) {
                u.reset = !1, T = -1;
                continue;
              }
              var b = u.orderedModifiers[T], j = b.fn, D = b.options, B = D === void 0 ? {} : D, V = b.name;
              typeof j == "function" && (u = j({
                state: u,
                options: B,
                name: V,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Wj(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Xh(s, l))
      return p;
    p.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function m() {
      u.orderedModifiers.forEach(function(g) {
        var x = g.name, S = g.options, w = S === void 0 ? {} : S, T = g.effect;
        if (typeof T == "function") {
          var b = T({
            state: u,
            name: x,
            instance: p,
            options: w
          }), j = function() {
          };
          d.push(b || j);
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
var Yj = [mj, Dj, pj, rj, Rj, kj, Ij, cj, Pj], Gj = /* @__PURE__ */ Hj({
  defaultModifiers: Yj
});
function qj(e = {}) {
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
  } = e, m = Re(null), h = Re(null), g = Re(null), x = zI(n, p), S = Re(() => {
  }), w = ue(() => {
    var N;
    !t || !m.current || !h.current || ((N = S.current) == null || N.call(S), g.current = Gj(m.current, h.current, {
      placement: x,
      modifiers: [
        NI,
        FI,
        MI,
        {
          ...DI,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...OI(i)
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
    }), g.current.forceUpdate(), S.current = g.current.destroy);
  }, [
    x,
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
  Ze(() => () => {
    var N;
    !m.current && !h.current && ((N = g.current) == null || N.destroy(), g.current = null);
  }, []);
  const T = ue(
    (N) => {
      m.current = N, w();
    },
    [w]
  ), b = ue(
    (N = {}, X = null) => ({
      ...N,
      ref: br(T, X)
    }),
    [T]
  ), j = ue(
    (N) => {
      h.current = N, w();
    },
    [w]
  ), D = ue(
    (N = {}, X = null) => ({
      ...N,
      ref: br(j, X),
      style: {
        ...N.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, j, f]
  ), B = ue((N = {}, X = null) => {
    const { size: ae, shadowColor: te, bg: Z, style: J, ...ie } = N;
    return {
      ...ie,
      ref: X,
      "data-popper-arrow": "",
      style: Xj(N)
    };
  }, []), V = ue(
    (N = {}, X = null) => ({
      ...N,
      ref: X,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var N;
      (N = g.current) == null || N.update();
    },
    forceUpdate() {
      var N;
      (N = g.current) == null || N.forceUpdate();
    },
    transformOrigin: wt.transformOrigin.varRef,
    referenceRef: T,
    popperRef: j,
    getPopperProps: D,
    getArrowProps: B,
    getArrowInnerProps: V,
    getReferenceProps: b
  };
}
function Xj(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function Kj(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = tr(r), i = tr(t), [s, l] = Ct(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = bn(), f = o ?? `disclosure-${d}`, p = ue(() => {
    u || l(!1), i == null || i();
  }, [u, i]), m = ue(() => {
    u || l(!0), a == null || a();
  }, [u, a]), h = ue(() => {
    c ? p() : m();
  }, [c, m, p]);
  function g(S = {}) {
    return {
      ...S,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(w) {
        var T;
        (T = S.onClick) == null || T.call(S, w), h();
      }
    };
  }
  function x(S = {}) {
    return {
      ...S,
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
    getDisclosureProps: x
  };
}
var Zj = {
  slideInBottom: {
    ...Gc,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...Gc,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...ab,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, Jj = Ue(Un.section), Qj = (e) => Zj[e || "none"], ay = kt(
  (e, t) => {
    const { preset: r, motionProps: n = Qj(r), ...o } = e;
    return /* @__PURE__ */ Y.jsx(Jj, { ref: t, ...n, ...o });
  }
);
ay.displayName = "ModalTransition";
var eN = Object.defineProperty, tN = (e, t, r) => t in e ? eN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rN = (e, t, r) => (tN(e, typeof t != "symbol" ? t + "" : t, r), r), nN = class {
  constructor() {
    rN(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, tu = new nN();
function iy(e, t) {
  const [r, n] = Ct(0);
  return Ze(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = tu.add(o);
        n(a);
      }
      return () => {
        tu.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var oN = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xn = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Si = {}, tc = 0, sy = function(e) {
  return e && (e.host || sy(e.parentNode));
}, aN = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = sy(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, iN = function(e, t, r, n) {
  var o = aN(t, Array.isArray(e) ? e : [e]);
  Si[r] || (Si[r] = /* @__PURE__ */ new WeakMap());
  var a = Si[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), m = p !== null && p !== "false", h = (Xn.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        Xn.set(f, h), a.set(f, g), i.push(f), h === 1 && m && xi.set(f, !0), g === 1 && f.setAttribute(r, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), tc++, function() {
    i.forEach(function(d) {
      var f = Xn.get(d) - 1, p = a.get(d) - 1;
      Xn.set(d, f), a.set(d, p), f || (xi.has(d) || d.removeAttribute(n), xi.delete(d)), p || d.removeAttribute(r);
    }), tc--, tc || (Xn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Si = {});
  };
}, sN = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || oN(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), iN(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function lN(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = Re(null), u = Re(null), [d, f, p] = uN(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  cN(c, t && i);
  const m = iy(c, t), h = Re(null), g = ue((V) => {
    h.current = V.target;
  }, []), x = ue(
    (V) => {
      V.key === "Escape" && (V.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [S, w] = Ct(!1), [T, b] = Ct(!1), j = ue(
    (V = {}, N = null) => ({
      role: "dialog",
      ...V,
      ref: br(N, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": S ? f : void 0,
      "aria-describedby": T ? p : void 0,
      onClick: Pr(
        V.onClick,
        (X) => X.stopPropagation()
      )
    }),
    [p, T, d, f, S]
  ), D = ue(
    (V) => {
      V.stopPropagation(), h.current === V.target && tu.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), B = ue(
    (V = {}, N = null) => ({
      ...V,
      ref: br(N, u),
      onClick: Pr(V.onClick, D),
      onKeyDown: Pr(V.onKeyDown, x),
      onMouseDown: Pr(V.onMouseDown, g)
    }),
    [x, g, D]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: b,
    setHeaderMounted: w,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: j,
    getDialogContainerProps: B,
    index: m
  };
}
function cN(e, t) {
  const r = e.current;
  Ze(() => {
    if (!(!e.current || !t))
      return sN(e.current);
  }, [t, e, r]);
}
function uN(e, ...t) {
  const r = bn(), n = e || r;
  return Nt(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [dN, Hn] = rn({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [fN, gn] = rn({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), ly = (e) => {
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
  } = t, h = Ou("Modal", t), x = {
    ...lN(t),
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
  return /* @__PURE__ */ Y.jsx(fN, { value: x, children: /* @__PURE__ */ Y.jsx(dN, { value: h, children: /* @__PURE__ */ Y.jsx(Ro, { onExitComplete: m, children: x.isOpen && /* @__PURE__ */ Y.jsx(Na, { ...r, children: n }) }) }) });
};
ly.displayName = "Modal";
var Li = "right-scroll-bar-position", Wi = "width-before-scroll-bar", pN = "with-scroll-bars-hidden", hN = "--removed-body-scroll-bar-size", cy = vb(), rc = function() {
}, Ls = W.forwardRef(function(e, t) {
  var r = W.useRef(null), n = W.useState({
    onScrollCapture: rc,
    onWheelCapture: rc,
    onTouchMoveCapture: rc
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, h = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, S = e.gapMode, w = pb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), T = f, b = fb([r, t]), j = $r($r({}, w), o);
  return W.createElement(
    W.Fragment,
    null,
    u && W.createElement(T, { sideCar: cy, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!h, lockRef: r, gapMode: S }),
    i ? W.cloneElement(W.Children.only(s), $r($r({}, j), { ref: b })) : W.createElement(x, $r({}, j, { className: l, ref: b }), s)
  );
});
Ls.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ls.classNames = {
  fullWidth: Wi,
  zeroRight: Li
};
var Kh, mN = function() {
  if (Kh)
    return Kh;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function vN() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = mN();
  return t && e.setAttribute("nonce", t), e;
}
function gN(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function bN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yN = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = vN()) && (gN(t, r), bN(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, xN = function() {
  var e = yN();
  return function(t, r) {
    W.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, uy = function() {
  var e = xN(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, SN = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nc = function(e) {
  return parseInt(e || "", 10) || 0;
}, wN = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [nc(r), nc(n), nc(o)];
}, CN = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return SN;
  var t = wN(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, _N = uy(), EN = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(pN, ` {
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
  
  .`).concat(Li, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Wi, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Li, " .").concat(Li, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Wi, " .").concat(Wi, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(hN, ": ").concat(s, `px;
  }
`);
}, kN = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = W.useMemo(function() {
    return CN(o);
  }, [o]);
  return W.createElement(_N, { styles: EN(a, !t, o, r ? "" : "!important") });
}, ru = !1;
if (typeof window < "u")
  try {
    var wi = Object.defineProperty({}, "passive", {
      get: function() {
        return ru = !0, !0;
      }
    });
    window.addEventListener("test", wi, wi), window.removeEventListener("test", wi, wi);
  } catch {
    ru = !1;
  }
var Kn = ru ? { passive: !1 } : !1, TN = function(e) {
  return e.tagName === "TEXTAREA";
}, dy = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !TN(e) && r[t] === "visible")
  );
}, PN = function(e) {
  return dy(e, "overflowY");
}, $N = function(e) {
  return dy(e, "overflowX");
}, Zh = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = fy(e, n);
    if (o) {
      var a = py(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, AN = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, RN = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, fy = function(e, t) {
  return e === "v" ? PN(t) : $N(t);
}, py = function(e, t) {
  return e === "v" ? AN(t) : RN(t);
}, ON = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, DN = function(e, t, r, n, o) {
  var a = ON(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = py(e, s), m = p[0], h = p[1], g = p[2], x = h - g - a * m;
    (m || x) && fy(e, s) && (d += x, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, Ci = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Jh = function(e) {
  return [e.deltaX, e.deltaY];
}, Qh = function(e) {
  return e && "current" in e ? e.current : e;
}, MN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, FN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, IN = 0, Zn = [];
function jN(e) {
  var t = W.useRef([]), r = W.useRef([0, 0]), n = W.useRef(), o = W.useState(IN++)[0], a = W.useState(uy)[0], i = W.useRef(e);
  W.useEffect(function() {
    i.current = e;
  }, [e]), W.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = yF([e.lockRef.current], (e.shards || []).map(Qh), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = W.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !i.current.allowPinchZoom;
    var x = Ci(h), S = r.current, w = "deltaX" in h ? h.deltaX : S[0] - x[0], T = "deltaY" in h ? h.deltaY : S[1] - x[1], b, j = h.target, D = Math.abs(w) > Math.abs(T) ? "h" : "v";
    if ("touches" in h && D === "h" && j.type === "range")
      return !1;
    var B = Zh(D, j);
    if (!B)
      return !0;
    if (B ? b = D : (b = D === "v" ? "h" : "v", B = Zh(D, j)), !B)
      return !1;
    if (!n.current && "changedTouches" in h && (w || T) && (n.current = b), !b)
      return !0;
    var V = n.current || b;
    return DN(V, g, h, V === "h" ? w : T, !0);
  }, []), l = W.useCallback(function(h) {
    var g = h;
    if (!(!Zn.length || Zn[Zn.length - 1] !== a)) {
      var x = "deltaY" in g ? Jh(g) : Ci(g), S = t.current.filter(function(b) {
        return b.name === g.type && b.target === g.target && MN(b.delta, x);
      })[0];
      if (S && S.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!S) {
        var w = (i.current.shards || []).map(Qh).filter(Boolean).filter(function(b) {
          return b.contains(g.target);
        }), T = w.length > 0 ? s(g, w[0]) : !i.current.noIsolation;
        T && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = W.useCallback(function(h, g, x, S) {
    var w = { name: h, delta: g, target: x, should: S };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(T) {
        return T !== w;
      });
    }, 1);
  }, []), u = W.useCallback(function(h) {
    r.current = Ci(h), n.current = void 0;
  }, []), d = W.useCallback(function(h) {
    c(h.type, Jh(h), h.target, s(h, e.lockRef.current));
  }, []), f = W.useCallback(function(h) {
    c(h.type, Ci(h), h.target, s(h, e.lockRef.current));
  }, []);
  W.useEffect(function() {
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
  return W.createElement(
    W.Fragment,
    null,
    m ? W.createElement(a, { styles: FN(o) }) : null,
    p ? W.createElement(kN, { gapMode: e.gapMode }) : null
  );
}
const NN = xF(cy, jN);
var hy = W.forwardRef(function(e, t) {
  return W.createElement(Ls, $r({}, e, { ref: t, sideCar: NN }));
});
hy.classNames = Ls.classNames;
const BN = hy;
function my(e) {
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
  } = gn(), [f, p] = Lg();
  Ze(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const m = iy(n, d);
  return /* @__PURE__ */ Y.jsx(
    Gb,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ Y.jsx(
        BN,
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
var VN = it(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = gn(), c = s(i, t), u = l(o), d = ir("chakra-modal__content", r), f = Hn(), p = {
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
    return /* @__PURE__ */ Y.jsx(my, { children: /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: m,
        children: /* @__PURE__ */ Y.jsx(
          ay,
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
VN.displayName = "ModalContent";
var [zN, LN] = rn(), WN = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function UN(e, t) {
  var r, n;
  if (e)
    return (n = (r = WN[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function OV(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = Ao(), l = (t = s.components) == null ? void 0 : t.Drawer, c = UN(o, s.direction);
  return /* @__PURE__ */ Y.jsx(zN, { value: { placement: c }, children: /* @__PURE__ */ Y.jsx(
    ly,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var HN = Ue(ib), YN = it(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = gn(), u = s(i, t), d = l(a), f = ir("chakra-modal__content", r), p = Hn(), m = {
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
    }, { placement: g } = LN();
    return /* @__PURE__ */ Y.jsx(my, { children: /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: h,
        children: /* @__PURE__ */ Y.jsx(
          HN,
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
YN.displayName = "DrawerContent";
var GN = it(
  (e, t) => {
    const { className: r, ...n } = e, o = ir("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...Hn().footer
    };
    return /* @__PURE__ */ Y.jsx(
      Ue.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
GN.displayName = "ModalFooter";
var qN = it(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = gn();
    Ze(() => (a(!0), () => a(!1)), [a]);
    const i = ir("chakra-modal__header", r), l = {
      flex: 0,
      ...Hn().header
    };
    return /* @__PURE__ */ Y.jsx(
      Ue.header,
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
qN.displayName = "ModalHeader";
var XN = Ue(Un.div), KN = it(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = ir("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...Hn().overlay
    }, { motionPreset: c } = gn(), d = o || (c === "none" ? {} : ob);
    return /* @__PURE__ */ Y.jsx(
      XN,
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
KN.displayName = "ModalOverlay";
var ZN = it((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = gn();
  Ze(() => (a(!0), () => a(!1)), [a]);
  const i = ir("chakra-modal__body", r), s = Hn();
  return /* @__PURE__ */ Y.jsx(
    Ue.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
ZN.displayName = "ModalBody";
var JN = it(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = gn(), i = ir("chakra-modal__close-btn", n), s = Hn();
    return /* @__PURE__ */ Y.jsx(
      rb,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: Pr(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
JN.displayName = "ModalCloseButton";
var Jt = (e) => e ? "" : void 0, bo = (e) => e ? !0 : void 0, Sn = (...e) => e.filter(Boolean).join(" ");
function yo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function QN(e) {
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
function Zo(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var Ui = { width: 0, height: 0 }, _i = (e) => e || Ui;
function vy(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (h) => {
    var g;
    const x = (g = n[h]) != null ? g : Ui;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...Zo({
        orientation: t,
        vertical: {
          bottom: `calc(${r[h]}% - ${x.height / 2}px)`
        },
        horizontal: {
          left: `calc(${r[h]}% - ${x.width / 2}px)`
        }
      })
    };
  }, i = t === "vertical" ? n.reduce(
    (h, g) => _i(h).height > _i(g).height ? h : g,
    Ui
  ) : n.reduce(
    (h, g) => _i(h).width > _i(g).width ? h : g,
    Ui
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...Zo({
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
    ...Zo({
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
    ...Zo({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: m, rootStyle: s, getThumbStyle: a };
}
function gy(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function eB(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function tB(e) {
  const t = nB(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function by(e) {
  return !!e.touches;
}
function rB(e) {
  return by(e) && e.touches.length > 1;
}
function nB(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function oB(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function aB(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function yy(e, t = "page") {
  return by(e) ? oB(e, t) : aB(e, t);
}
function iB(e) {
  return (t) => {
    const r = tB(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function sB(e, t = !1) {
  function r(o) {
    e(o, { point: yy(o) });
  }
  return t ? iB(r) : r;
}
function Hi(e, t, r, n) {
  return eB(e, t, sB(r, t === "pointerdown"), n);
}
var lB = Object.defineProperty, cB = (e, t, r) => t in e ? lB(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, cr = (e, t, r) => (cB(e, typeof t != "symbol" ? t + "" : t, r), r), uB = class {
  constructor(e, t, r) {
    cr(this, "history", []), cr(this, "startEvent", null), cr(this, "lastEvent", null), cr(this, "lastEventInfo", null), cr(this, "handlers", {}), cr(this, "removeListeners", () => {
    }), cr(this, "threshold", 3), cr(this, "win"), cr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = oc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = hB(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = lp();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), cr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, JR.update(this.updatePoint, !0);
    }), cr(this, "onPointerUp", (s, l) => {
      const c = oc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, rB(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: yy(e) }, { timestamp: a } = lp();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, oc(o, this.history)), this.removeListeners = pB(
      Hi(this.win, "pointermove", this.onPointerMove),
      Hi(this.win, "pointerup", this.onPointerUp),
      Hi(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), QR.update(this.updatePoint);
  }
};
function em(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function oc(e, t) {
  return {
    point: e.point,
    delta: em(e.point, t[t.length - 1]),
    offset: em(e.point, t[0]),
    velocity: fB(t, 0.1)
  };
}
var dB = (e) => e * 1e3;
function fB(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > dB(t))); )
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
function pB(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function ac(e, t) {
  return Math.abs(e - t);
}
function tm(e) {
  return "x" in e && "y" in e;
}
function hB(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return ac(e, t);
  if (tm(e) && tm(t)) {
    const r = ac(e.x, t.x), n = ac(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function xy(e) {
  const t = Re(null);
  return t.current = e, t;
}
function Sy(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = Re(null), u = xy({
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(d, f) {
      c.current = null, o == null || o(d, f);
    }
  });
  Ze(() => {
    var d;
    (d = c.current) == null || d.updateHandlers(u.current);
  }), Ze(() => {
    const d = e.current;
    if (!d || !l)
      return;
    function f(p) {
      c.current = new uB(p, u.current, s);
    }
    return Hi(d, "pointerdown", f);
  }, [e, l, u, s]), Ze(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function mB(e, t) {
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
var vB = globalThis != null && globalThis.document ? ou : Ze;
function gB(e, t) {
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
function wy({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = Ct([]), [o, a] = Ct(0);
  return vB(() => {
    const i = e(), s = i.map(
      (l, c) => mB(l, (u) => {
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
        gB(l, () => {
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
function bB(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function yB(e) {
  const [t] = wy({
    observeMutation: !1,
    getNodes() {
      return [bB(e) ? e.current : e];
    }
  });
  return t;
}
function xB(e) {
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
    "aria-label": x,
    "aria-labelledby": S,
    name: w,
    focusThumbOnChange: T = !0,
    minStepsBetweenThumbs: b = 0,
    ...j
  } = e, D = tr(f), B = tr(p), V = tr(h), N = gy({
    isReversed: i,
    direction: s,
    orientation: l
  }), [X, ae] = nb({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(X))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof X}\``
    );
  const [te, Z] = Ct(!1), [J, ie] = Ct(!1), [K, ve] = Ct(-1), pe = !(u || d), O = Re(X), M = X.map((H) => ca(H, t, r)), F = b * m, P = SB(M, t, r, F), R = Re({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  R.current.value = M, R.current.valueBounds = P;
  const I = M.map((H) => r - H + t), L = (N ? I : M).map((H) => hs(H, t, r)), $ = l === "vertical", G = Re(null), U = Re(null), re = wy({
    getNodes() {
      const H = U.current, ne = H == null ? void 0 : H.querySelectorAll("[role=slider]");
      return ne ? Array.from(ne) : [];
    }
  }), _ = bn(), le = QN(c ?? _), oe = ue(
    (H) => {
      var ne, ye;
      if (!G.current)
        return;
      R.current.eventSource = "pointer";
      const Se = G.current.getBoundingClientRect(), { clientX: He, clientY: bt } = (ye = (ne = H.touches) == null ? void 0 : ne[0]) != null ? ye : H, Xe = $ ? Se.bottom - bt : He - Se.left, rt = $ ? Se.height : Se.width;
      let Vr = Xe / rt;
      return N && (Vr = 1 - Vr), sb(Vr, t, r);
    },
    [$, N, r, t]
  ), $e = (r - t) / 10, be = m || (r - t) / 100, xe = Nt(
    () => ({
      setValueAtIndex(H, ne) {
        if (!pe)
          return;
        const ye = R.current.valueBounds[H];
        ne = parseFloat(qc(ne, ye.min, be)), ne = ca(ne, ye.min, ye.max);
        const Se = [...R.current.value];
        Se[H] = ne, ae(Se);
      },
      setActiveIndex: ve,
      stepUp(H, ne = be) {
        const ye = R.current.value[H], Se = N ? ye - ne : ye + ne;
        xe.setValueAtIndex(H, Se);
      },
      stepDown(H, ne = be) {
        const ye = R.current.value[H], Se = N ? ye + ne : ye - ne;
        xe.setValueAtIndex(H, Se);
      },
      reset() {
        ae(O.current);
      }
    }),
    [be, N, ae, pe]
  ), dt = ue(
    (H) => {
      const ne = H.key, Se = {
        ArrowRight: () => xe.stepUp(K),
        ArrowUp: () => xe.stepUp(K),
        ArrowLeft: () => xe.stepDown(K),
        ArrowDown: () => xe.stepDown(K),
        PageUp: () => xe.stepUp(K, $e),
        PageDown: () => xe.stepDown(K, $e),
        Home: () => {
          const { min: He } = P[K];
          xe.setValueAtIndex(K, He);
        },
        End: () => {
          const { max: He } = P[K];
          xe.setValueAtIndex(K, He);
        }
      }[ne];
      Se && (H.preventDefault(), H.stopPropagation(), Se(H), R.current.eventSource = "keyboard");
    },
    [xe, K, $e, P]
  ), { getThumbStyle: we, rootStyle: ct, trackStyle: tt, innerTrackStyle: Oe } = Nt(
    () => vy({
      isReversed: N,
      orientation: l,
      thumbRects: re,
      thumbPercents: L
    }),
    [N, l, L, re]
  ), se = ue(
    (H) => {
      var ne;
      const ye = H ?? K;
      if (ye !== -1 && T) {
        const Se = le.getThumb(ye), He = (ne = U.current) == null ? void 0 : ne.ownerDocument.getElementById(Se);
        He && setTimeout(() => He.focus());
      }
    },
    [T, K, le]
  );
  Ov(() => {
    R.current.eventSource === "keyboard" && (B == null || B(R.current.value));
  }, [M, B]);
  const ke = (H) => {
    const ne = oe(H) || 0, ye = R.current.value.map(
      (rt) => Math.abs(rt - ne)
    ), Se = Math.min(...ye);
    let He = ye.indexOf(Se);
    const bt = ye.filter(
      (rt) => rt === Se
    );
    bt.length > 1 && ne > R.current.value[He] && (He = He + bt.length - 1), ve(He), xe.setValueAtIndex(He, ne), se(He);
  }, Tt = (H) => {
    if (K == -1)
      return;
    const ne = oe(H) || 0;
    ve(K), xe.setValueAtIndex(K, ne), se(K);
  };
  Sy(U, {
    onPanSessionStart(H) {
      pe && (Z(!0), ke(H), D == null || D(R.current.value));
    },
    onPanSessionEnd() {
      pe && (Z(!1), B == null || B(R.current.value));
    },
    onPan(H) {
      pe && Tt(H);
    }
  });
  const gt = ue(
    (H = {}, ne = null) => ({
      ...H,
      ...j,
      id: le.root,
      ref: br(ne, U),
      tabIndex: -1,
      "aria-disabled": bo(u),
      "data-focused": Jt(J),
      style: { ...H.style, ...ct }
    }),
    [j, u, J, ct, le]
  ), st = ue(
    (H = {}, ne = null) => ({
      ...H,
      ref: br(ne, G),
      id: le.track,
      "data-disabled": Jt(u),
      style: { ...H.style, ...tt }
    }),
    [u, tt, le]
  ), jr = ue(
    (H = {}, ne = null) => ({
      ...H,
      ref: ne,
      id: le.innerTrack,
      style: {
        ...H.style,
        ...Oe
      }
    }),
    [Oe, le]
  ), Nr = ue(
    (H, ne = null) => {
      var ye;
      const { index: Se, ...He } = H, bt = M[Se];
      if (bt == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${Se}\`. The \`value\` or \`defaultValue\` length is : ${M.length}`
        );
      const Xe = P[Se];
      return {
        ...He,
        ref: ne,
        role: "slider",
        tabIndex: pe ? 0 : void 0,
        id: le.getThumb(Se),
        "data-active": Jt(te && K === Se),
        "aria-valuetext": (ye = V == null ? void 0 : V(bt)) != null ? ye : g == null ? void 0 : g[Se],
        "aria-valuemin": Xe.min,
        "aria-valuemax": Xe.max,
        "aria-valuenow": bt,
        "aria-orientation": l,
        "aria-disabled": bo(u),
        "aria-readonly": bo(d),
        "aria-label": x == null ? void 0 : x[Se],
        "aria-labelledby": x != null && x[Se] || S == null ? void 0 : S[Se],
        style: { ...H.style, ...we(Se) },
        onKeyDown: yo(H.onKeyDown, dt),
        onFocus: yo(H.onFocus, () => {
          ie(!0), ve(Se);
        }),
        onBlur: yo(H.onBlur, () => {
          ie(!1), ve(-1);
        })
      };
    },
    [
      le,
      M,
      P,
      pe,
      te,
      K,
      V,
      g,
      l,
      u,
      d,
      x,
      S,
      we,
      dt,
      ie
    ]
  ), Br = ue(
    (H = {}, ne = null) => ({
      ...H,
      ref: ne,
      id: le.output,
      htmlFor: M.map((ye, Se) => le.getThumb(Se)).join(" "),
      "aria-live": "off"
    }),
    [le, M]
  ), Q = ue(
    (H, ne = null) => {
      const { value: ye, ...Se } = H, He = !(ye < t || ye > r), bt = ye >= M[0] && ye <= M[M.length - 1];
      let Xe = hs(ye, t, r);
      Xe = N ? 100 - Xe : Xe;
      const rt = {
        position: "absolute",
        pointerEvents: "none",
        ...Zo({
          orientation: l,
          vertical: { bottom: `${Xe}%` },
          horizontal: { left: `${Xe}%` }
        })
      };
      return {
        ...Se,
        ref: ne,
        id: le.getMarker(H.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Jt(u),
        "data-invalid": Jt(!He),
        "data-highlighted": Jt(bt),
        style: {
          ...H.style,
          ...rt
        }
      };
    },
    [u, N, r, t, l, M, le]
  ), ge = ue(
    (H, ne = null) => {
      const { index: ye, ...Se } = H;
      return {
        ...Se,
        ref: ne,
        id: le.getInput(ye),
        type: "hidden",
        value: M[ye],
        name: Array.isArray(w) ? w[ye] : `${w}-${ye}`
      };
    },
    [w, M, le]
  );
  return {
    state: {
      value: M,
      isFocused: J,
      isDragging: te,
      getThumbPercent: (H) => L[H],
      getThumbMinValue: (H) => P[H].min,
      getThumbMaxValue: (H) => P[H].max
    },
    actions: xe,
    getRootProps: gt,
    getTrackProps: st,
    getInnerTrackProps: jr,
    getThumbProps: Nr,
    getMarkerProps: Q,
    getInputProps: ge,
    getOutputProps: Br
  };
}
function SB(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [wB, Ws] = rn({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [CB, Us] = rn({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), _B = it(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Ou("Slider", n), a = Ps(n), { direction: i } = Ao();
    a.direction = i;
    const { getRootProps: s, ...l } = xB(a), c = Nt(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ Y.jsx(wB, { value: c, children: /* @__PURE__ */ Y.jsx(CB, { value: o, children: /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...s({}, r),
        className: "chakra-slider",
        __css: o.container,
        children: n.children
      }
    ) }) });
  }
);
_B.displayName = "RangeSlider";
var EB = it(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = Ws(), i = Us(), s = n(t, r);
    return /* @__PURE__ */ Y.jsxs(
      Ue.div,
      {
        ...s,
        className: Sn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ Y.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
EB.displayName = "RangeSliderThumb";
var kB = it(
  function(t, r) {
    const { getTrackProps: n } = Ws(), o = Us(), a = n(t, r);
    return /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...a,
        className: Sn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
kB.displayName = "RangeSliderTrack";
var TB = it(function(t, r) {
  const { getInnerTrackProps: n } = Ws(), o = Us(), a = n(t, r);
  return /* @__PURE__ */ Y.jsx(
    Ue.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
TB.displayName = "RangeSliderFilledTrack";
var PB = it(
  function(t, r) {
    const { getMarkerProps: n } = Ws(), o = Us(), a = n(t, r);
    return /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...a,
        className: Sn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
PB.displayName = "RangeSliderMark";
function $B(e) {
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
    "aria-valuetext": x,
    "aria-label": S,
    "aria-labelledby": w,
    name: T,
    focusThumbOnChange: b = !0,
    ...j
  } = e, D = tr(p), B = tr(m), V = tr(g), N = gy({
    isReversed: s,
    direction: l,
    orientation: c
  }), [X, ae] = nb({
    value: a,
    defaultValue: i ?? RB(r, n),
    onChange: o
  }), [te, Z] = Ct(!1), [J, ie] = Ct(!1), K = !(d || f), ve = (n - r) / 10, pe = h || (n - r) / 100, O = ca(X, r, n), M = n - O + r, P = hs(N ? M : O, r, n), R = c === "vertical", I = xy({
    min: r,
    max: n,
    step: h,
    isDisabled: d,
    value: O,
    isInteractive: K,
    isReversed: N,
    isVertical: R,
    eventSource: null,
    focusThumbOnChange: b,
    orientation: c
  }), C = Re(null), L = Re(null), $ = Re(null), G = bn(), U = u ?? G, [re, _] = [`slider-thumb-${U}`, `slider-track-${U}`], de = ue(
    (Q) => {
      var ge, Sr;
      if (!C.current)
        return;
      const H = I.current;
      H.eventSource = "pointer";
      const ne = C.current.getBoundingClientRect(), { clientX: ye, clientY: Se } = (Sr = (ge = Q.touches) == null ? void 0 : ge[0]) != null ? Sr : Q, He = R ? ne.bottom - Se : ye - ne.left, bt = R ? ne.height : ne.width;
      let Xe = He / bt;
      N && (Xe = 1 - Xe);
      let rt = sb(Xe, H.min, H.max);
      return H.step && (rt = parseFloat(
        qc(rt, H.min, H.step)
      )), rt = ca(rt, H.min, H.max), rt;
    },
    [R, N, I]
  ), le = ue(
    (Q) => {
      const ge = I.current;
      ge.isInteractive && (Q = parseFloat(qc(Q, ge.min, pe)), Q = ca(Q, ge.min, ge.max), ae(Q));
    },
    [pe, ae, I]
  ), oe = Nt(
    () => ({
      stepUp(Q = pe) {
        const ge = N ? O - Q : O + Q;
        le(ge);
      },
      stepDown(Q = pe) {
        const ge = N ? O + Q : O - Q;
        le(ge);
      },
      reset() {
        le(i || 0);
      },
      stepTo(Q) {
        le(Q);
      }
    }),
    [le, N, O, pe, i]
  ), $e = ue(
    (Q) => {
      const ge = I.current, H = {
        ArrowRight: () => oe.stepUp(),
        ArrowUp: () => oe.stepUp(),
        ArrowLeft: () => oe.stepDown(),
        ArrowDown: () => oe.stepDown(),
        PageUp: () => oe.stepUp(ve),
        PageDown: () => oe.stepDown(ve),
        Home: () => le(ge.min),
        End: () => le(ge.max)
      }[Q.key];
      H && (Q.preventDefault(), Q.stopPropagation(), H(Q), ge.eventSource = "keyboard");
    },
    [oe, le, ve, I]
  ), be = (t = V == null ? void 0 : V(O)) != null ? t : x, xe = yB(L), { getThumbStyle: dt, rootStyle: we, trackStyle: ct, innerTrackStyle: tt } = Nt(() => {
    const Q = I.current, ge = xe ?? { width: 0, height: 0 };
    return vy({
      isReversed: N,
      orientation: Q.orientation,
      thumbRects: [ge],
      thumbPercents: [P]
    });
  }, [N, xe, P, I]), Oe = ue(() => {
    I.current.focusThumbOnChange && setTimeout(() => {
      var ge;
      return (ge = L.current) == null ? void 0 : ge.focus();
    });
  }, [I]);
  Ov(() => {
    const Q = I.current;
    Oe(), Q.eventSource === "keyboard" && (B == null || B(Q.value));
  }, [O, B]);
  function se(Q) {
    const ge = de(Q);
    ge != null && ge !== I.current.value && ae(ge);
  }
  Sy($, {
    onPanSessionStart(Q) {
      const ge = I.current;
      ge.isInteractive && (Z(!0), Oe(), se(Q), D == null || D(ge.value));
    },
    onPanSessionEnd() {
      const Q = I.current;
      Q.isInteractive && (Z(!1), B == null || B(Q.value));
    },
    onPan(Q) {
      I.current.isInteractive && se(Q);
    }
  });
  const ke = ue(
    (Q = {}, ge = null) => ({
      ...Q,
      ...j,
      ref: br(ge, $),
      tabIndex: -1,
      "aria-disabled": bo(d),
      "data-focused": Jt(J),
      style: {
        ...Q.style,
        ...we
      }
    }),
    [j, d, J, we]
  ), Tt = ue(
    (Q = {}, ge = null) => ({
      ...Q,
      ref: br(ge, C),
      id: _,
      "data-disabled": Jt(d),
      style: {
        ...Q.style,
        ...ct
      }
    }),
    [d, _, ct]
  ), gt = ue(
    (Q = {}, ge = null) => ({
      ...Q,
      ref: ge,
      style: {
        ...Q.style,
        ...tt
      }
    }),
    [tt]
  ), st = ue(
    (Q = {}, ge = null) => ({
      ...Q,
      ref: br(ge, L),
      role: "slider",
      tabIndex: K ? 0 : void 0,
      id: re,
      "data-active": Jt(te),
      "aria-valuetext": be,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": O,
      "aria-orientation": c,
      "aria-disabled": bo(d),
      "aria-readonly": bo(f),
      "aria-label": S,
      "aria-labelledby": S ? void 0 : w,
      style: {
        ...Q.style,
        ...dt(0)
      },
      onKeyDown: yo(Q.onKeyDown, $e),
      onFocus: yo(Q.onFocus, () => ie(!0)),
      onBlur: yo(Q.onBlur, () => ie(!1))
    }),
    [
      K,
      re,
      te,
      be,
      r,
      n,
      O,
      c,
      d,
      f,
      S,
      w,
      dt,
      $e
    ]
  ), jr = ue(
    (Q, ge = null) => {
      const Sr = !(Q.value < r || Q.value > n), H = O >= Q.value, ne = hs(Q.value, r, n), ye = {
        position: "absolute",
        pointerEvents: "none",
        ...AB({
          orientation: c,
          vertical: {
            bottom: N ? `${100 - ne}%` : `${ne}%`
          },
          horizontal: {
            left: N ? `${100 - ne}%` : `${ne}%`
          }
        })
      };
      return {
        ...Q,
        ref: ge,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Jt(d),
        "data-invalid": Jt(!Sr),
        "data-highlighted": Jt(H),
        style: {
          ...Q.style,
          ...ye
        }
      };
    },
    [d, N, n, r, c, O]
  ), Nr = ue(
    (Q = {}, ge = null) => ({
      ...Q,
      ref: ge,
      type: "hidden",
      value: O,
      name: T
    }),
    [T, O]
  );
  return {
    state: { value: O, isFocused: J, isDragging: te },
    actions: oe,
    getRootProps: ke,
    getTrackProps: Tt,
    getInnerTrackProps: gt,
    getThumbProps: st,
    getMarkerProps: jr,
    getInputProps: Nr
  };
}
function AB(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function RB(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [OB, Hs] = rn({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [DB, Ys] = rn({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), MB = it((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Ou("Slider", n), a = Ps(n), { direction: i } = Ao();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = $B(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ Y.jsx(OB, { value: c, children: /* @__PURE__ */ Y.jsx(DB, { value: o, children: /* @__PURE__ */ Y.jsxs(
    Ue.div,
    {
      ...u,
      className: Sn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ Y.jsx("input", { ...d })
      ]
    }
  ) }) });
});
MB.displayName = "Slider";
var FB = it((e, t) => {
  const { getThumbProps: r } = Hs(), n = Ys(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Ue.div,
    {
      ...o,
      className: Sn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
FB.displayName = "SliderThumb";
var IB = it((e, t) => {
  const { getTrackProps: r } = Hs(), n = Ys(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Ue.div,
    {
      ...o,
      className: Sn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
IB.displayName = "SliderTrack";
var jB = it(
  (e, t) => {
    const { getInnerTrackProps: r } = Hs(), n = Ys(), o = r(e, t);
    return /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...o,
        className: Sn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
jB.displayName = "SliderFilledTrack";
var NB = it((e, t) => {
  const { getMarkerProps: r } = Hs(), n = Ys(), o = r(e, t);
  return /* @__PURE__ */ Y.jsx(
    Ue.div,
    {
      ...o,
      className: Sn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
NB.displayName = "SliderMark";
var BB = {
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
}, nu = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, Yi = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function VB(e = {}) {
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
    modifiers: x,
    isDisabled: S,
    gutter: w,
    offset: T,
    direction: b,
    ...j
  } = e, { isOpen: D, onOpen: B, onClose: V } = Kj({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: N, getPopperProps: X, getArrowInnerProps: ae, getArrowProps: te } = qj({
    enabled: D,
    placement: u,
    arrowPadding: g,
    modifiers: x,
    gutter: w,
    offset: T,
    direction: b
  }), Z = bn(), ie = `tooltip-${d ?? Z}`, K = Re(null), ve = Re(), pe = ue(() => {
    ve.current && (clearTimeout(ve.current), ve.current = void 0);
  }, []), O = Re(), M = ue(() => {
    O.current && (clearTimeout(O.current), O.current = void 0);
  }, []), F = ue(() => {
    M(), V();
  }, [V, M]), P = zB(K, F), R = ue(() => {
    if (!S && !ve.current) {
      P();
      const _ = Yi(K);
      ve.current = _.setTimeout(B, t);
    }
  }, [P, S, B, t]), I = ue(() => {
    pe();
    const _ = Yi(K);
    O.current = _.setTimeout(F, r);
  }, [r, F, pe]), C = ue(() => {
    D && n && I();
  }, [n, I, D]), L = ue(() => {
    D && i && I();
  }, [i, I, D]), $ = ue(
    (_) => {
      D && _.key === "Escape" && I();
    },
    [D, I]
  );
  Hl(
    () => nu(K),
    "keydown",
    s ? $ : void 0
  ), Hl(
    () => {
      const _ = K.current;
      if (!_)
        return null;
      const de = Wb(_);
      return de.localName === "body" ? Yi(K) : de;
    },
    "scroll",
    () => {
      D && a && F();
    },
    { passive: !0, capture: !0 }
  ), Ze(() => {
    S && (pe(), D && V());
  }, [S, D, V, pe]), Ze(() => () => {
    pe(), M();
  }, [pe, M]), Hl(() => K.current, "pointerleave", I);
  const G = ue(
    (_ = {}, de = null) => ({
      ..._,
      ref: br(K, de, N),
      onPointerEnter: Pr(_.onPointerEnter, (oe) => {
        oe.pointerType !== "touch" && R();
      }),
      onClick: Pr(_.onClick, C),
      onPointerDown: Pr(_.onPointerDown, L),
      onFocus: Pr(_.onFocus, R),
      onBlur: Pr(_.onBlur, I),
      "aria-describedby": D ? ie : void 0
    }),
    [
      R,
      I,
      L,
      D,
      ie,
      C,
      N
    ]
  ), U = ue(
    (_ = {}, de = null) => X(
      {
        ..._,
        style: {
          ..._.style,
          [wt.arrowSize.var]: m ? `${m}px` : void 0,
          [wt.arrowShadowColor.var]: h
        }
      },
      de
    ),
    [X, m, h]
  ), re = ue(
    (_ = {}, de = null) => {
      const le = {
        ..._.style,
        position: "relative",
        transformOrigin: wt.transformOrigin.varRef
      };
      return {
        ref: de,
        ...j,
        ..._,
        id: ie,
        role: "tooltip",
        style: le
      };
    },
    [j, ie]
  );
  return {
    isOpen: D,
    show: R,
    hide: I,
    getTriggerProps: G,
    getTooltipProps: re,
    getTooltipPositionerProps: U,
    getArrowProps: te,
    getArrowInnerProps: ae
  };
}
var ic = "chakra-ui:close-tooltip";
function zB(e, t) {
  return Ze(() => {
    const r = nu(e);
    return r.addEventListener(ic, t), () => r.removeEventListener(ic, t);
  }, [t, e]), () => {
    const r = nu(e), n = Yi(e);
    r.dispatchEvent(new n.CustomEvent(ic));
  };
}
function LB(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function WB(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var UB = Ue(Un.div), HB = it((e, t) => {
  var r, n;
  const o = Ru("Tooltip", e), a = Ps(e), i = Ao(), {
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
    motionProps: x,
    ...S
  } = a, w = (n = (r = m ?? h) != null ? r : f) != null ? n : g;
  if (w) {
    o.bg = w;
    const X = ev(i, "colors", w);
    o[wt.arrowBg.var] = X;
  }
  const T = VB({ ...S, direction: i.direction }), b = typeof s == "string" || c;
  let j;
  if (b)
    j = /* @__PURE__ */ Y.jsx(
      Ue.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...T.getTriggerProps(),
        children: s
      }
    );
  else {
    const X = am.only(s);
    j = om(
      X,
      T.getTriggerProps(X.props, X.ref)
    );
  }
  const D = !!u, B = T.getTooltipProps({}, t), V = D ? LB(B, ["role", "id"]) : B, N = WB(B, ["role", "id"]);
  return l ? /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    j,
    /* @__PURE__ */ Y.jsx(Ro, { children: T.isOpen && /* @__PURE__ */ Y.jsx(Na, { ...p, children: /* @__PURE__ */ Y.jsx(
      Ue.div,
      {
        ...T.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ Y.jsxs(
          UB,
          {
            variants: BB,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...x,
            ...V,
            __css: o,
            children: [
              l,
              D && /* @__PURE__ */ Y.jsx(Ue.span, { srOnly: !0, ...N, children: u }),
              d && /* @__PURE__ */ Y.jsx(
                Ue.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ Y.jsx(
                    Ue.div,
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
HB.displayName = "Tooltip";
const DV = kt(({ children: e, gap: t, sx: r, ...n }, o) => /* @__PURE__ */ Y.jsx(Tm, { ref: o, sx: { gap: t, ...r }, ...n, children: e }));
export {
  OV as $,
  Nn as A,
  KB as B,
  ZB as C,
  iF as D,
  KN as E,
  Tm as F,
  VN as G,
  qN as H,
  JN as I,
  ZN as J,
  GN as K,
  Pw as L,
  ly as M,
  Em as N,
  ys as O,
  Gj as P,
  MB as Q,
  IB as R,
  d0 as S,
  va as T,
  jB as U,
  FB as V,
  _B as W,
  kB as X,
  TB as Y,
  EB as Z,
  l0 as _,
  AS as a,
  o_ as a$,
  YN as a0,
  PI as a1,
  XB as a2,
  Su as a3,
  tV as a4,
  nV as a5,
  aV as a6,
  zC as a7,
  VC as a8,
  gc as a9,
  ir as aA,
  rn as aB,
  Ou as aC,
  rb as aD,
  Ro as aE,
  Na as aF,
  Gm as aG,
  vV as aH,
  yv as aI,
  BR as aJ,
  br as aK,
  nb as aL,
  Pr as aM,
  lV as aN,
  Hc as aO,
  Xr as aP,
  cV as aQ,
  PV as aR,
  uV as aS,
  dV as aT,
  ca as aU,
  oF as aV,
  aF as aW,
  Hl as aX,
  xV as aY,
  yV as aZ,
  Ao as a_,
  Ym as aa,
  Sv as ab,
  gr as ac,
  CV as ad,
  QR as ae,
  SV as af,
  _V as ag,
  JR as ah,
  lp as ai,
  wV as aj,
  fV as ak,
  oV as al,
  UR as am,
  GR as an,
  bE as ao,
  KC as ap,
  tr as aq,
  kV as ar,
  Ov as as,
  Un as at,
  Ue as au,
  $n as av,
  it as aw,
  tb as ax,
  Ru as ay,
  Ps as az,
  Jn as b,
  cE as b$,
  EI as b0,
  AV as b1,
  RV as b2,
  $V as b3,
  Kj as b4,
  qj as b5,
  wt as b6,
  pV as b7,
  me as b8,
  sV as b9,
  Hs as bA,
  Ys as bB,
  uO as bC,
  Rl as bD,
  MO as bE,
  EV as bF,
  iV as bG,
  U_ as bH,
  $i as bI,
  Fe as bJ,
  Tn as bK,
  __ as bL,
  G_ as bM,
  mV as bN,
  Sc as bO,
  E_ as bP,
  sE as bQ,
  Ji as bR,
  ev as bS,
  gE as bT,
  Xm as bU,
  k_ as bV,
  dE as bW,
  Zt as bX,
  T_ as bY,
  D_ as bZ,
  Qo as b_,
  qe as ba,
  ck as bb,
  hV as bc,
  mk as bd,
  gV as be,
  Nw as bf,
  Vw as bg,
  Gb as bh,
  TI as bi,
  Xb as bj,
  fN as bk,
  my as bl,
  LN as bm,
  lN as bn,
  gn as bo,
  iy as bp,
  Hn as bq,
  XC as br,
  PB as bs,
  wB as bt,
  NB as bu,
  OB as bv,
  xB as bw,
  Ws as bx,
  Us as by,
  $B as bz,
  RS as c,
  Qm as c0,
  Ts as c1,
  wE as c2,
  M_ as c3,
  B_ as c4,
  Ke as c5,
  _u as c6,
  F_ as c7,
  Y_ as c8,
  H_ as c9,
  c_ as ca,
  I_ as cb,
  j_ as cc,
  N_ as cd,
  _E as ce,
  CE as cf,
  bV as cg,
  VB as ch,
  Z5 as ci,
  Q5 as cj,
  ib as ck,
  tF as cl,
  ob as cm,
  Yc as cn,
  ab as co,
  Gc as cp,
  On as d,
  OS as e,
  JB as f,
  DS as g,
  pc as h,
  cm as i,
  Y as j,
  QB as k,
  Bw as l,
  zn as m,
  qB as n,
  HB as o,
  qb as p,
  pa as q,
  lc as r,
  uc as s,
  eV as t,
  rV as u,
  n1 as v,
  pm as w,
  a0 as x,
  au as y,
  DV as z
};
