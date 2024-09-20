import * as z from "react";
import it, { Children as ja, isValidElement as or, cloneElement as ar, useState as pt, useEffect as Lr, useMemo as Nn } from "react";
import { styled as Ae, ButtonBase as Na, Slide as Ia } from "@mui/material";
import Fa from "@emotion/styled";
import { CacheProvider as Wa, Global as Ba, ThemeContext as La, css as Ya, keyframes as gr } from "@emotion/react";
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function tt(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
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
var tn = { exports: {} }, Dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var In;
function qa() {
  if (In) return Dt;
  In = 1;
  var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, u, l) {
    var f, h = {}, d = null, E = null;
    l !== void 0 && (d = "" + l), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (E = u.ref);
    for (f in u) n.call(u, f) && !a.hasOwnProperty(f) && (h[f] = u[f]);
    if (s && s.defaultProps) for (f in u = s.defaultProps, u) h[f] === void 0 && (h[f] = u[f]);
    return { $$typeof: t, type: s, key: d, ref: E, props: h, _owner: o.current };
  }
  return Dt.Fragment = r, Dt.jsx = i, Dt.jsxs = i, Dt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function za() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = it, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.iterator, p = "@@iterator";
    function m(c) {
      if (c === null || typeof c != "object")
        return null;
      var w = b && c[b] || c[p];
      return typeof w == "function" ? w : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(c) {
      {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), A = 1; A < w; A++)
          O[A - 1] = arguments[A];
        M("error", c, O);
      }
    }
    function M(c, w, O) {
      {
        var A = x.ReactDebugCurrentFrame, te = A.getStackAddendum();
        te !== "" && (w += "%s", O = O.concat([te]));
        var ce = O.map(function(J) {
          return String(J);
        });
        ce.unshift("Warning: " + w), Function.prototype.apply.call(console[c], console, ce);
      }
    }
    var P = !1, g = !1, j = !1, k = !1, de = !1, Te;
    Te = Symbol.for("react.module.reference");
    function le(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === a || de || c === o || c === l || c === f || k || c === E || P || g || j || typeof c == "object" && c !== null && (c.$$typeof === d || c.$$typeof === h || c.$$typeof === i || c.$$typeof === s || c.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Te || c.getModuleId !== void 0));
    }
    function _(c, w, O) {
      var A = c.displayName;
      if (A)
        return A;
      var te = w.displayName || w.name || "";
      return te !== "" ? O + "(" + te + ")" : O;
    }
    function U(c) {
      return c.displayName || "Context";
    }
    function F(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case s:
            var w = c;
            return U(w) + ".Consumer";
          case i:
            var O = c;
            return U(O._context) + ".Provider";
          case u:
            return _(c, c.render, "ForwardRef");
          case h:
            var A = c.displayName || null;
            return A !== null ? A : F(c.type) || "Memo";
          case d: {
            var te = c, ce = te._payload, J = te._init;
            try {
              return F(J(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, se = 0, Q, pe, ue, Pe, v, S, Y;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function $() {
      {
        if (se === 0) {
          Q = console.log, pe = console.info, ue = console.warn, Pe = console.error, v = console.group, S = console.groupCollapsed, Y = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        se++;
      }
    }
    function V() {
      {
        if (se--, se === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, c, {
              value: Q
            }),
            info: X({}, c, {
              value: pe
            }),
            warn: X({}, c, {
              value: ue
            }),
            error: X({}, c, {
              value: Pe
            }),
            group: X({}, c, {
              value: v
            }),
            groupCollapsed: X({}, c, {
              value: S
            }),
            groupEnd: X({}, c, {
              value: Y
            })
          });
        }
        se < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = x.ReactCurrentDispatcher, I;
    function B(c, w, O) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (te) {
            var A = te.stack.trim().match(/\n( *(at )?)/);
            I = A && A[1] || "";
          }
        return `
` + I + c;
      }
    }
    var N = !1, q;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      q = new we();
    }
    function T(c, w) {
      if (!c || N)
        return "";
      {
        var O = q.get(c);
        if (O !== void 0)
          return O;
      }
      var A;
      N = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = D.current, D.current = null, $();
      try {
        if (w) {
          var J = function() {
            throw Error();
          };
          if (Object.defineProperty(J.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J, []);
            } catch (Ce) {
              A = Ce;
            }
            Reflect.construct(c, [], J);
          } else {
            try {
              J.call();
            } catch (Ce) {
              A = Ce;
            }
            c.call(J.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            A = Ce;
          }
          c();
        }
      } catch (Ce) {
        if (Ce && A && typeof Ce.stack == "string") {
          for (var G = Ce.stack.split(`
`), Re = A.stack.split(`
`), ge = G.length - 1, Ee = Re.length - 1; ge >= 1 && Ee >= 0 && G[ge] !== Re[Ee]; )
            Ee--;
          for (; ge >= 1 && Ee >= 0; ge--, Ee--)
            if (G[ge] !== Re[Ee]) {
              if (ge !== 1 || Ee !== 1)
                do
                  if (ge--, Ee--, Ee < 0 || G[ge] !== Re[Ee]) {
                    var Ne = `
` + G[ge].replace(" at new ", " at ");
                    return c.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", c.displayName)), typeof c == "function" && q.set(c, Ne), Ne;
                  }
                while (ge >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        N = !1, D.current = ce, V(), Error.prepareStackTrace = te;
      }
      var dt = c ? c.displayName || c.name : "", ot = dt ? B(dt) : "";
      return typeof c == "function" && q.set(c, ot), ot;
    }
    function Se(c, w, O) {
      return T(c, !1);
    }
    function C(c) {
      var w = c.prototype;
      return !!(w && w.isReactComponent);
    }
    function Me(c, w, O) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return T(c, C(c));
      if (typeof c == "string")
        return B(c);
      switch (c) {
        case l:
          return B("Suspense");
        case f:
          return B("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            return Se(c.render);
          case h:
            return Me(c.type, w, O);
          case d: {
            var A = c, te = A._payload, ce = A._init;
            try {
              return Me(ce(te), w, O);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, nt = {}, Jt = x.ReactDebugCurrentFrame;
    function ut(c) {
      if (c) {
        var w = c._owner, O = Me(c.type, c._source, w ? w.type : null);
        Jt.setExtraStackFrame(O);
      } else
        Jt.setExtraStackFrame(null);
    }
    function Pt(c, w, O, A, te) {
      {
        var ce = Function.call.bind(je);
        for (var J in c)
          if (ce(c, J)) {
            var G = void 0;
            try {
              if (typeof c[J] != "function") {
                var Re = Error((A || "React class") + ": " + O + " type `" + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[J] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Re.name = "Invariant Violation", Re;
              }
              G = c[J](w, J, A, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              G = ge;
            }
            G && !(G instanceof Error) && (ut(te), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", O, J, typeof G), ut(null)), G instanceof Error && !(G.message in nt) && (nt[G.message] = !0, ut(te), R("Failed %s type: %s", O, G.message), ut(null));
          }
      }
    }
    var Ct = Array.isArray;
    function $t(c) {
      return Ct(c);
    }
    function jr(c) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, O = w && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return O;
      }
    }
    function lt(c) {
      try {
        return Je(c), !1;
      } catch {
        return !0;
      }
    }
    function Je(c) {
      return "" + c;
    }
    function Qt(c) {
      if (lt(c))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jr(c)), Je(c);
    }
    var Qe = x.ReactCurrentOwner, Nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, L, Mt, kt;
    kt = {};
    function Zt(c) {
      if (je.call(c, "ref")) {
        var w = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Pn(c) {
      if (je.call(c, "key")) {
        var w = Object.getOwnPropertyDescriptor(c, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function wa(c, w) {
      if (typeof c.ref == "string" && Qe.current && w && Qe.current.stateNode !== w) {
        var O = F(Qe.current.type);
        kt[O] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Qe.current.type), c.ref), kt[O] = !0);
      }
    }
    function Ea(c, w) {
      {
        var O = function() {
          L || (L = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function xa(c, w) {
      {
        var O = function() {
          Mt || (Mt = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        O.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ta = function(c, w, O, A, te, ce, J) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: w,
        ref: O,
        props: J,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Oa(c, w, O, A, te) {
      {
        var ce, J = {}, G = null, Re = null;
        O !== void 0 && (Qt(O), G = "" + O), Pn(w) && (Qt(w.key), G = "" + w.key), Zt(w) && (Re = w.ref, wa(w, te));
        for (ce in w)
          je.call(w, ce) && !Nr.hasOwnProperty(ce) && (J[ce] = w[ce]);
        if (c && c.defaultProps) {
          var ge = c.defaultProps;
          for (ce in ge)
            J[ce] === void 0 && (J[ce] = ge[ce]);
        }
        if (G || Re) {
          var Ee = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          G && Ea(J, Ee), Re && xa(J, Ee);
        }
        return Ta(c, G, Re, te, A, Qe.current, J);
      }
    }
    var Ir = x.ReactCurrentOwner, Cn = x.ReactDebugCurrentFrame;
    function ft(c) {
      if (c) {
        var w = c._owner, O = Me(c.type, c._source, w ? w.type : null);
        Cn.setExtraStackFrame(O);
      } else
        Cn.setExtraStackFrame(null);
    }
    var Fr;
    Fr = !1;
    function Wr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function $n() {
      {
        if (Ir.current) {
          var c = F(Ir.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Sa(c) {
      return "";
    }
    var Mn = {};
    function _a(c) {
      {
        var w = $n();
        if (!w) {
          var O = typeof c == "string" ? c : c.displayName || c.name;
          O && (w = `

Check the top-level render call using <` + O + ">.");
        }
        return w;
      }
    }
    function kn(c, w) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var O = _a(w);
        if (Mn[O])
          return;
        Mn[O] = !0;
        var A = "";
        c && c._owner && c._owner !== Ir.current && (A = " It was passed a child from " + F(c._owner.type) + "."), ft(c), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, A), ft(null);
      }
    }
    function Dn(c, w) {
      {
        if (typeof c != "object")
          return;
        if ($t(c))
          for (var O = 0; O < c.length; O++) {
            var A = c[O];
            Wr(A) && kn(A, w);
          }
        else if (Wr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var te = m(c);
          if (typeof te == "function" && te !== c.entries)
            for (var ce = te.call(c), J; !(J = ce.next()).done; )
              Wr(J.value) && kn(J.value, w);
        }
      }
    }
    function Ra(c) {
      {
        var w = c.type;
        if (w == null || typeof w == "string")
          return;
        var O;
        if (typeof w == "function")
          O = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === h))
          O = w.propTypes;
        else
          return;
        if (O) {
          var A = F(w);
          Pt(O, c.props, "prop", A, c);
        } else if (w.PropTypes !== void 0 && !Fr) {
          Fr = !0;
          var te = F(w);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pa(c) {
      {
        for (var w = Object.keys(c.props), O = 0; O < w.length; O++) {
          var A = w[O];
          if (A !== "children" && A !== "key") {
            ft(c), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), ft(null);
            break;
          }
        }
        c.ref !== null && (ft(c), R("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    var An = {};
    function jn(c, w, O, A, te, ce) {
      {
        var J = le(c);
        if (!J) {
          var G = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Re = Sa();
          Re ? G += Re : G += $n();
          var ge;
          c === null ? ge = "null" : $t(c) ? ge = "array" : c !== void 0 && c.$$typeof === t ? (ge = "<" + (F(c.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof c, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, G);
        }
        var Ee = Oa(c, w, O, te, ce);
        if (Ee == null)
          return Ee;
        if (J) {
          var Ne = w.children;
          if (Ne !== void 0)
            if (A)
              if ($t(Ne)) {
                for (var dt = 0; dt < Ne.length; dt++)
                  Dn(Ne[dt], c);
                Object.freeze && Object.freeze(Ne);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dn(Ne, c);
        }
        if (je.call(w, "key")) {
          var ot = F(c), Ce = Object.keys(w).filter(function(Aa) {
            return Aa !== "key";
          }), Br = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!An[ot + Br]) {
            var Da = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Br, ot, Da, ot), An[ot + Br] = !0;
          }
        }
        return c === n ? Pa(Ee) : Ra(Ee), Ee;
      }
    }
    function Ca(c, w, O) {
      return jn(c, w, O, !0);
    }
    function $a(c, w, O) {
      return jn(c, w, O, !1);
    }
    var Ma = $a, ka = Ca;
    At.Fragment = n, At.jsx = Ma, At.jsxs = ka;
  }()), At;
}
process.env.NODE_ENV === "production" ? tn.exports = qa() : tn.exports = za();
var H = tn.exports;
const Do = 6048e5, Ua = 864e5, Wn = Symbol.for("constructDateFrom");
function Le(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Wn in e ? e[Wn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ye(e, t) {
  return Le(t || e, e);
}
function Ha(e, t, r) {
  const n = ye(e, r == null ? void 0 : r.in);
  return isNaN(t) ? Le(e, NaN) : (n.setDate(n.getDate() + t), n);
}
function Ao(e, t, r) {
  const n = ye(e, r == null ? void 0 : r.in);
  if (isNaN(t)) return Le(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), a = Le(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), n);
}
let Ka = {};
function qt() {
  return Ka;
}
function xt(e, t) {
  var s, u, l, f;
  const r = qt(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((f = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? 7 : 0) + a - n;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function fr(e, t) {
  return xt(e, { ...t, weekStartsOn: 1 });
}
function jo(e, t) {
  const r = ye(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = Le(r, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = fr(o), i = Le(r, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = fr(i);
  return r.getTime() >= a.getTime() ? n + 1 : r.getTime() >= s.getTime() ? n : n - 1;
}
function Bn(e) {
  const t = ye(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function mn(e, ...t) {
  const r = Le.bind(
    null,
    t.find((n) => typeof n == "object")
  );
  return t.map(r);
}
function dr(e, t) {
  const r = ye(e, t == null ? void 0 : t.in);
  return r.setHours(0, 0, 0, 0), r;
}
function Ga(e, t, r) {
  const [n, o] = mn(
    r == null ? void 0 : r.in,
    e,
    t
  ), a = dr(n), i = dr(o), s = +a - Bn(a), u = +i - Bn(i);
  return Math.round((s - u) / Ua);
}
function Xa(e, t) {
  const r = jo(e, t), n = Le(e, 0);
  return n.setFullYear(r, 0, 4), n.setHours(0, 0, 0, 0), fr(n);
}
function Yr(e, t, r) {
  const [n, o] = mn(
    r == null ? void 0 : r.in,
    e,
    t
  );
  return +dr(n) == +dr(o);
}
function Ja(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Qa(e) {
  return !(!Ja(e) && typeof e != "number" || isNaN(+ye(e)));
}
function Za(e, t) {
  const r = ye(e, t == null ? void 0 : t.in), n = r.getMonth();
  return r.setFullYear(r.getFullYear(), n + 1, 0), r.setHours(23, 59, 59, 999), r;
}
function ei(e, t) {
  const [r, n] = mn(e, t.start, t.end);
  return { start: r, end: n };
}
function rn(e, t) {
  const { start: r, end: n } = ei(t == null ? void 0 : t.in, e);
  let o = +r > +n;
  const a = o ? +r : +n, i = o ? n : r;
  i.setHours(0, 0, 0, 0);
  let s = 1;
  const u = [];
  for (; +i <= a; )
    u.push(Le(r, i)), i.setDate(i.getDate() + s), i.setHours(0, 0, 0, 0);
  return o ? u.reverse() : u;
}
function nn(e, t) {
  const r = ye(e, t == null ? void 0 : t.in);
  return r.setDate(1), r.setHours(0, 0, 0, 0), r;
}
function ti(e, t) {
  const r = ye(e, t == null ? void 0 : t.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
function Ln(e, t) {
  var s, u;
  const r = qt(), n = r.weekStartsOn ?? ((u = (s = r.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < n ? -7 : 0) + 6 - (a - n);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
const ri = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, ni = (e, t, r) => {
  let n;
  const o = ri[e];
  return typeof o == "string" ? n = o : t === 1 ? n = o.one : n = o.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Vr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const oi = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ai = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ii = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, si = {
  date: Vr({
    formats: oi,
    defaultWidth: "full"
  }),
  time: Vr({
    formats: ai,
    defaultWidth: "full"
  }),
  dateTime: Vr({
    formats: ii,
    defaultWidth: "full"
  })
}, ci = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ui = (e, t, r, n) => ci[e];
function jt(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const li = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, fi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, di = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, pi = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, hi = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, mi = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, yi = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, gi = {
  ordinalNumber: yi,
  era: jt({
    values: li,
    defaultWidth: "wide"
  }),
  quarter: jt({
    values: fi,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: jt({
    values: di,
    defaultWidth: "wide"
  }),
  day: jt({
    values: pi,
    defaultWidth: "wide"
  }),
  dayPeriod: jt({
    values: hi,
    defaultWidth: "wide",
    formattingValues: mi,
    defaultFormattingWidth: "wide"
  })
};
function Nt(e) {
  return (t, r = {}) => {
    const n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? vi(s, (h) => h.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      bi(s, (h) => h.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(l)
    ) : l;
    const f = t.slice(i.length);
    return { value: l, rest: f };
  };
}
function bi(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function vi(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function wi(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const o = n[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Ei = /^(\d+)(th|st|nd|rd)?/i, xi = /\d+/i, Ti = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Oi = {
  any: [/^b/i, /^(a|c)/i]
}, Si = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _i = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ri = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Pi = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ci = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $i = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Mi = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ki = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Di = {
  ordinalNumber: wi({
    matchPattern: Ei,
    parsePattern: xi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Nt({
    matchPatterns: Ti,
    defaultMatchWidth: "wide",
    parsePatterns: Oi,
    defaultParseWidth: "any"
  }),
  quarter: Nt({
    matchPatterns: Si,
    defaultMatchWidth: "wide",
    parsePatterns: _i,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Nt({
    matchPatterns: Ri,
    defaultMatchWidth: "wide",
    parsePatterns: Pi,
    defaultParseWidth: "any"
  }),
  day: Nt({
    matchPatterns: Ci,
    defaultMatchWidth: "wide",
    parsePatterns: $i,
    defaultParseWidth: "any"
  }),
  dayPeriod: Nt({
    matchPatterns: Mi,
    defaultMatchWidth: "any",
    parsePatterns: ki,
    defaultParseWidth: "any"
  })
}, Ai = {
  code: "en-US",
  formatDistance: ni,
  formatLong: si,
  formatRelative: ui,
  localize: gi,
  match: Di,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ji(e, t) {
  const r = ye(e, t == null ? void 0 : t.in);
  return Ga(r, ti(r)) + 1;
}
function Ni(e, t) {
  const r = ye(e, t == null ? void 0 : t.in), n = +fr(r) - +Xa(r);
  return Math.round(n / Do) + 1;
}
function No(e, t) {
  var f, h, d, E;
  const r = ye(e, t == null ? void 0 : t.in), n = r.getFullYear(), o = qt(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((E = (d = o.locale) == null ? void 0 : d.options) == null ? void 0 : E.firstWeekContainsDate) ?? 1, i = Le((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(n + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = xt(i, t), u = Le((t == null ? void 0 : t.in) || e, 0);
  u.setFullYear(n, 0, a), u.setHours(0, 0, 0, 0);
  const l = xt(u, t);
  return +r >= +s ? n + 1 : +r >= +l ? n : n - 1;
}
function Ii(e, t) {
  var s, u, l, f;
  const r = qt(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = No(e, t), a = Le((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, n), a.setHours(0, 0, 0, 0), xt(a, t);
}
function Fi(e, t) {
  const r = ye(e, t == null ? void 0 : t.in), n = +xt(r, t) - +Ii(r, t);
  return Math.round(n / Do) + 1;
}
function ie(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const Ze = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return ie(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : ie(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ie(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), o = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return ie(o, t.length);
  }
}, ht = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yn = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
      return r.ordinalNumber(o, { unit: "year" });
    }
    return Ze.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const o = No(e, n), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return ie(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(a, { unit: "year" }) : ie(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = jo(e);
    return ie(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return ie(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return ie(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return ie(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ze.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return ie(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const o = Fi(e, n);
    return t === "wo" ? r.ordinalNumber(o, { unit: "week" }) : ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = Ni(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : ie(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : Ze.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = ji(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : ie(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return ie(a, 2);
      case "eo":
        return r.ordinalNumber(a, { unit: "day" });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const o = e.getDay(), a = (o - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return ie(a, t.length);
      case "co":
        return r.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), o = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ie(o, t.length);
      case "io":
        return r.ordinalNumber(o, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n === 12 ? o = ht.noon : n === 0 ? o = ht.midnight : o = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let o;
    switch (n >= 17 ? o = ht.evening : n >= 12 ? o = ht.afternoon : n >= 4 ? o = ht.morning : o = ht.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return Ze.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : Ze.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : ie(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : ie(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ze.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ze.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ze.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return qn(n);
      case "XXXX":
      case "XX":
        return at(n);
      case "XXXXX":
      case "XXX":
      default:
        return at(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return qn(n);
      case "xxxx":
      case "xx":
        return at(n);
      case "xxxxx":
      case "xxx":
      default:
        return at(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Vn(n, ":");
      case "OOOO":
      default:
        return "GMT" + at(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Vn(n, ":");
      case "zzzz":
      default:
        return "GMT" + at(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(+e / 1e3);
    return ie(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return ie(+e, t.length);
  }
};
function Vn(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? r + String(o) : r + String(o) + t + ie(a, 2);
}
function qn(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ie(Math.abs(e) / 60, 2) : at(e, t);
}
function at(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), o = ie(Math.trunc(n / 60), 2), a = ie(n % 60, 2);
  return r + o + t + a;
}
const zn = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Io = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Wi = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], o = r[2];
  if (!o)
    return zn(e, t);
  let a;
  switch (n) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", zn(n, t)).replace("{{time}}", Io(o, t));
}, Bi = {
  p: Io,
  P: Wi
}, Li = /^D+$/, Yi = /^Y+$/, Vi = ["D", "DD", "YY", "YYYY"];
function qi(e) {
  return Li.test(e);
}
function zi(e) {
  return Yi.test(e);
}
function Ui(e, t, r) {
  const n = Hi(e, t, r);
  if (console.warn(n), Vi.includes(e)) throw new RangeError(n);
}
function Hi(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ki = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Gi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xi = /^'([^]*?)'?$/, Ji = /''/g, Qi = /[a-zA-Z]/;
function Zi(e, t, r) {
  var f, h, d, E;
  const n = qt(), o = n.locale ?? Ai, a = n.firstWeekContainsDate ?? ((h = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = n.weekStartsOn ?? ((E = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : E.weekStartsOn) ?? 0, s = ye(e, r == null ? void 0 : r.in);
  if (!Qa(s))
    throw new RangeError("Invalid time value");
  let u = t.match(Gi).map((b) => {
    const p = b[0];
    if (p === "p" || p === "P") {
      const m = Bi[p];
      return m(b, o.formatLong);
    }
    return b;
  }).join("").match(Ki).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const p = b[0];
    if (p === "'")
      return { isToken: !1, value: es(b) };
    if (Yn[p])
      return { isToken: !0, value: b };
    if (p.match(Qi))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (u = o.localize.preprocessor(s, u));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return u.map((b) => {
    if (!b.isToken) return b.value;
    const p = b.value;
    (zi(p) || qi(p)) && Ui(p, t, String(e));
    const m = Yn[p[0]];
    return m(s, p, o.localize, l);
  }).join("");
}
function es(e) {
  const t = e.match(Xi);
  return t ? t[1].replace(Ji, "'") : e;
}
function Un(e, t) {
  return +ye(e) > +ye(t);
}
function qr(e, t) {
  return +ye(e) < +ye(t);
}
function Ke(e, t) {
  return +ye(e) == +ye(t);
}
function ts(e, t, r) {
  return Ao(e, -t, r);
}
const rs = (e) => {
  const t = xt(nn(e)), r = Ln(Za(e)), n = [];
  let o = t;
  for (; o <= r; ) {
    const a = Ln(o), s = rn({ start: o, end: a }).map((u) => nn(e).getMonth() === u.getMonth() ? u : null);
    n.push(s), o = Ha(a, 1);
  }
  return n;
}, ns = Ae("div")(
  ({ theme: e, borderRadius: t = 25, width: r = 280 }) => ({
    display: "flex",
    flexDirection: "column",
    padding: e.spacing(1),
    width: typeof r == "number" ? `${r}px` : r,
    borderRadius: `${t}px`,
    backgroundColor: e.palette.background.paper
  })
), os = Ae("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: e.spacing(2)
})), as = Ae("div")(({ theme: e }) => ({
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
  marginLeft: 16,
  color: e.palette.text.primary
})), is = Ae("div")({
  display: "flex",
  alignItems: "center"
});
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, K.apply(null, arguments);
}
function Ve(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
var on = { exports: {} }, er = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function ss() {
  if (Hn) return re;
  Hn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function M(g) {
    if (typeof g == "object" && g !== null) {
      var j = g.$$typeof;
      switch (j) {
        case t:
          switch (g = g.type, g) {
            case u:
            case l:
            case n:
            case a:
            case o:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case f:
                case b:
                case E:
                case i:
                  return g;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  function P(g) {
    return M(g) === l;
  }
  return re.AsyncMode = u, re.ConcurrentMode = l, re.ContextConsumer = s, re.ContextProvider = i, re.Element = t, re.ForwardRef = f, re.Fragment = n, re.Lazy = b, re.Memo = E, re.Portal = r, re.Profiler = a, re.StrictMode = o, re.Suspense = h, re.isAsyncMode = function(g) {
    return P(g) || M(g) === u;
  }, re.isConcurrentMode = P, re.isContextConsumer = function(g) {
    return M(g) === s;
  }, re.isContextProvider = function(g) {
    return M(g) === i;
  }, re.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, re.isForwardRef = function(g) {
    return M(g) === f;
  }, re.isFragment = function(g) {
    return M(g) === n;
  }, re.isLazy = function(g) {
    return M(g) === b;
  }, re.isMemo = function(g) {
    return M(g) === E;
  }, re.isPortal = function(g) {
    return M(g) === r;
  }, re.isProfiler = function(g) {
    return M(g) === a;
  }, re.isStrictMode = function(g) {
    return M(g) === o;
  }, re.isSuspense = function(g) {
    return M(g) === h;
  }, re.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === l || g === a || g === o || g === h || g === d || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === E || g.$$typeof === i || g.$$typeof === s || g.$$typeof === f || g.$$typeof === m || g.$$typeof === x || g.$$typeof === R || g.$$typeof === p);
  }, re.typeOf = M, re;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function cs() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function M(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === l || T === a || T === o || T === h || T === d || typeof T == "object" && T !== null && (T.$$typeof === b || T.$$typeof === E || T.$$typeof === i || T.$$typeof === s || T.$$typeof === f || T.$$typeof === m || T.$$typeof === x || T.$$typeof === R || T.$$typeof === p);
    }
    function P(T) {
      if (typeof T == "object" && T !== null) {
        var Se = T.$$typeof;
        switch (Se) {
          case t:
            var C = T.type;
            switch (C) {
              case u:
              case l:
              case n:
              case a:
              case o:
              case h:
                return C;
              default:
                var Me = C && C.$$typeof;
                switch (Me) {
                  case s:
                  case f:
                  case b:
                  case E:
                  case i:
                    return Me;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var g = u, j = l, k = s, de = i, Te = t, le = f, _ = n, U = b, F = E, X = r, se = a, Q = o, pe = h, ue = !1;
    function Pe(T) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), v(T) || P(T) === u;
    }
    function v(T) {
      return P(T) === l;
    }
    function S(T) {
      return P(T) === s;
    }
    function Y(T) {
      return P(T) === i;
    }
    function W(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function $(T) {
      return P(T) === f;
    }
    function V(T) {
      return P(T) === n;
    }
    function D(T) {
      return P(T) === b;
    }
    function I(T) {
      return P(T) === E;
    }
    function B(T) {
      return P(T) === r;
    }
    function N(T) {
      return P(T) === a;
    }
    function q(T) {
      return P(T) === o;
    }
    function we(T) {
      return P(T) === h;
    }
    ne.AsyncMode = g, ne.ConcurrentMode = j, ne.ContextConsumer = k, ne.ContextProvider = de, ne.Element = Te, ne.ForwardRef = le, ne.Fragment = _, ne.Lazy = U, ne.Memo = F, ne.Portal = X, ne.Profiler = se, ne.StrictMode = Q, ne.Suspense = pe, ne.isAsyncMode = Pe, ne.isConcurrentMode = v, ne.isContextConsumer = S, ne.isContextProvider = Y, ne.isElement = W, ne.isForwardRef = $, ne.isFragment = V, ne.isLazy = D, ne.isMemo = I, ne.isPortal = B, ne.isProfiler = N, ne.isStrictMode = q, ne.isSuspense = we, ne.isValidElementType = M, ne.typeOf = P;
  }()), ne;
}
var Gn;
function Fo() {
  return Gn || (Gn = 1, process.env.NODE_ENV === "production" ? er.exports = ss() : er.exports = cs()), er.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zr, Xn;
function us() {
  if (Xn) return zr;
  Xn = 1;
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
      var u = Object.getOwnPropertyNames(i).map(function(f) {
        return i[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zr = o() ? Object.assign : function(a, i) {
    for (var s, u = n(a), l, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var h in s)
        t.call(s, h) && (u[h] = s[h]);
      if (e) {
        l = e(s);
        for (var d = 0; d < l.length; d++)
          r.call(s, l[d]) && (u[l[d]] = s[l[d]]);
      }
    }
    return u;
  }, zr;
}
var Ur, Jn;
function yn() {
  if (Jn) return Ur;
  Jn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ur = e, Ur;
}
var Hr, Qn;
function Wo() {
  return Qn || (Qn = 1, Hr = Function.call.bind(Object.prototype.hasOwnProperty)), Hr;
}
var Kr, Zn;
function ls() {
  if (Zn) return Kr;
  Zn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = yn(), r = {}, n = Wo();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            h = a[f](i, f, u, s, null, t);
          } catch (b) {
            h = b;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var E = l ? l() : "";
            e(
              "Failed " + s + " type: " + h.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Kr = o, Kr;
}
var Gr, eo;
function fs() {
  if (eo) return Gr;
  eo = 1;
  var e = Fo(), t = us(), r = yn(), n = Wo(), o = ls(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Gr = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(v) {
      var S = v && (l && v[l] || v[f]);
      if (typeof S == "function")
        return S;
    }
    var d = "<<anonymous>>", E = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: R(),
      arrayOf: M,
      element: P(),
      elementType: g(),
      instanceOf: j,
      node: le(),
      objectOf: de,
      oneOf: k,
      oneOfType: Te,
      shape: U,
      exact: F
    };
    function b(v, S) {
      return v === S ? v !== 0 || 1 / v === 1 / S : v !== v && S !== S;
    }
    function p(v, S) {
      this.message = v, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function m(v) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, Y = 0;
      function W(V, D, I, B, N, q, we) {
        if (B = B || d, q = q || I, we !== r) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = B + ":" + I;
            !S[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[Se] = !0, Y++);
          }
        }
        return D[I] == null ? V ? D[I] === null ? new p("The " + N + " `" + q + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new p("The " + N + " `" + q + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : v(D, I, B, N, q);
      }
      var $ = W.bind(null, !1);
      return $.isRequired = W.bind(null, !0), $;
    }
    function x(v) {
      function S(Y, W, $, V, D, I) {
        var B = Y[W], N = Q(B);
        if (N !== v) {
          var q = pe(B);
          return new p(
            "Invalid " + V + " `" + D + "` of type " + ("`" + q + "` supplied to `" + $ + "`, expected ") + ("`" + v + "`."),
            { expectedType: v }
          );
        }
        return null;
      }
      return m(S);
    }
    function R() {
      return m(i);
    }
    function M(v) {
      function S(Y, W, $, V, D) {
        if (typeof v != "function")
          return new p("Property `" + D + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var I = Y[W];
        if (!Array.isArray(I)) {
          var B = Q(I);
          return new p("Invalid " + V + " `" + D + "` of type " + ("`" + B + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var N = 0; N < I.length; N++) {
          var q = v(I, N, $, V, D + "[" + N + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return m(S);
    }
    function P() {
      function v(S, Y, W, $, V) {
        var D = S[Y];
        if (!s(D)) {
          var I = Q(D);
          return new p("Invalid " + $ + " `" + V + "` of type " + ("`" + I + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(v);
    }
    function g() {
      function v(S, Y, W, $, V) {
        var D = S[Y];
        if (!e.isValidElementType(D)) {
          var I = Q(D);
          return new p("Invalid " + $ + " `" + V + "` of type " + ("`" + I + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(v);
    }
    function j(v) {
      function S(Y, W, $, V, D) {
        if (!(Y[W] instanceof v)) {
          var I = v.name || d, B = Pe(Y[W]);
          return new p("Invalid " + V + " `" + D + "` of type " + ("`" + B + "` supplied to `" + $ + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return m(S);
    }
    function k(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function S(Y, W, $, V, D) {
        for (var I = Y[W], B = 0; B < v.length; B++)
          if (b(I, v[B]))
            return null;
        var N = JSON.stringify(v, function(we, T) {
          var Se = pe(T);
          return Se === "symbol" ? String(T) : T;
        });
        return new p("Invalid " + V + " `" + D + "` of value `" + String(I) + "` " + ("supplied to `" + $ + "`, expected one of " + N + "."));
      }
      return m(S);
    }
    function de(v) {
      function S(Y, W, $, V, D) {
        if (typeof v != "function")
          return new p("Property `" + D + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var I = Y[W], B = Q(I);
        if (B !== "object")
          return new p("Invalid " + V + " `" + D + "` of type " + ("`" + B + "` supplied to `" + $ + "`, expected an object."));
        for (var N in I)
          if (n(I, N)) {
            var q = v(I, N, $, V, D + "." + N, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return m(S);
    }
    function Te(v) {
      if (!Array.isArray(v))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var S = 0; S < v.length; S++) {
        var Y = v[S];
        if (typeof Y != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(Y) + " at index " + S + "."
          ), i;
      }
      function W($, V, D, I, B) {
        for (var N = [], q = 0; q < v.length; q++) {
          var we = v[q], T = we($, V, D, I, B, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && N.push(T.data.expectedType);
        }
        var Se = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new p("Invalid " + I + " `" + B + "` supplied to " + ("`" + D + "`" + Se + "."));
      }
      return m(W);
    }
    function le() {
      function v(S, Y, W, $, V) {
        return X(S[Y]) ? null : new p("Invalid " + $ + " `" + V + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return m(v);
    }
    function _(v, S, Y, W, $) {
      return new p(
        (v || "React class") + ": " + S + " type `" + Y + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function U(v) {
      function S(Y, W, $, V, D) {
        var I = Y[W], B = Q(I);
        if (B !== "object")
          return new p("Invalid " + V + " `" + D + "` of type `" + B + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var N in v) {
          var q = v[N];
          if (typeof q != "function")
            return _($, V, D, N, pe(q));
          var we = q(I, N, $, V, D + "." + N, r);
          if (we)
            return we;
        }
        return null;
      }
      return m(S);
    }
    function F(v) {
      function S(Y, W, $, V, D) {
        var I = Y[W], B = Q(I);
        if (B !== "object")
          return new p("Invalid " + V + " `" + D + "` of type `" + B + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var N = t({}, Y[W], v);
        for (var q in N) {
          var we = v[q];
          if (n(v, q) && typeof we != "function")
            return _($, V, D, q, pe(we));
          if (!we)
            return new p(
              "Invalid " + V + " `" + D + "` key `" + q + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(Y[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(v), null, "  ")
            );
          var T = we(I, q, $, V, D + "." + q, r);
          if (T)
            return T;
        }
        return null;
      }
      return m(S);
    }
    function X(v) {
      switch (typeof v) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !v;
        case "object":
          if (Array.isArray(v))
            return v.every(X);
          if (v === null || s(v))
            return !0;
          var S = h(v);
          if (S) {
            var Y = S.call(v), W;
            if (S !== v.entries) {
              for (; !(W = Y.next()).done; )
                if (!X(W.value))
                  return !1;
            } else
              for (; !(W = Y.next()).done; ) {
                var $ = W.value;
                if ($ && !X($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(v, S) {
      return v === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function Q(v) {
      var S = typeof v;
      return Array.isArray(v) ? "array" : v instanceof RegExp ? "object" : se(S, v) ? "symbol" : S;
    }
    function pe(v) {
      if (typeof v > "u" || v === null)
        return "" + v;
      var S = Q(v);
      if (S === "object") {
        if (v instanceof Date)
          return "date";
        if (v instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function ue(v) {
      var S = pe(v);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function Pe(v) {
      return !v.constructor || !v.constructor.name ? d : v.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, Gr;
}
var Xr, to;
function ds() {
  if (to) return Xr;
  to = 1;
  var e = yn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Xr = function() {
    function n(i, s, u, l, f, h) {
      if (h !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
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
  }, Xr;
}
if (process.env.NODE_ENV !== "production") {
  var ps = Fo(), hs = !0;
  on.exports = fs()(ps.isElement, hs);
} else
  on.exports = ds()();
var ms = on.exports;
const y = /* @__PURE__ */ Va(ms);
function Bo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Bo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Fe() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Bo(e)) && (n && (n += " "), n += t);
  return n;
}
const ys = y.oneOfType([y.func, y.object]);
function gs(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function bs(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vs(e, t, r, n, o) {
  const a = e[t], i = o || t;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof a == "function" && !bs(a) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${i}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ws = gs(y.elementType, vs);
function gn(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((a, i) => {
        if (i) {
          const s = t(i);
          s !== "" && a.push(s), r && r[i] && a.push(r[i]);
        }
        return a;
      }, []).join(" ");
    }
  ), n;
}
var zt = {}, Lo = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Lo);
var Yo = Lo.exports, Jr = { exports: {} }, ro;
function Es() {
  return ro || (ro = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var a in o) ({}).hasOwnProperty.call(o, a) && (r[a] = o[a]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Jr)), Jr.exports;
}
var Qr = { exports: {} }, no;
function xs() {
  return no || (no = 1, function(e) {
    function t(r, n) {
      if (r == null) return {};
      var o = {};
      for (var a in r) if ({}.hasOwnProperty.call(r, a)) {
        if (n.includes(a)) continue;
        o[a] = r[a];
      }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Qr)), Qr.exports;
}
var Ts = !1;
function Os(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ss(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _s = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ts : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ss(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Os(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), _e = "-ms-", pr = "-moz-", Z = "-webkit-", Vo = "comm", bn = "rule", vn = "decl", Rs = "@import", qo = "@keyframes", Ps = "@layer", Cs = Math.abs, br = String.fromCharCode, $s = Object.assign;
function Ms(e, t) {
  return Oe(e, 0) ^ 45 ? (((t << 2 ^ Oe(e, 0)) << 2 ^ Oe(e, 1)) << 2 ^ Oe(e, 2)) << 2 ^ Oe(e, 3) : 0;
}
function zo(e) {
  return e.trim();
}
function ks(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ee(e, t, r) {
  return e.replace(t, r);
}
function an(e, t) {
  return e.indexOf(t);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Bt(e, t, r) {
  return e.slice(t, r);
}
function ze(e) {
  return e.length;
}
function wn(e) {
  return e.length;
}
function tr(e, t) {
  return t.push(e), e;
}
function Ds(e, t) {
  return e.map(t).join("");
}
var vr = 1, Tt = 1, Uo = 0, $e = 0, xe = 0, Ot = "";
function wr(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: vr, column: Tt, length: i, return: "" };
}
function It(e, t) {
  return $s(wr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function As() {
  return xe;
}
function js() {
  return xe = $e > 0 ? Oe(Ot, --$e) : 0, Tt--, xe === 10 && (Tt = 1, vr--), xe;
}
function De() {
  return xe = $e < Uo ? Oe(Ot, $e++) : 0, Tt++, xe === 10 && (Tt = 1, vr++), xe;
}
function Ue() {
  return Oe(Ot, $e);
}
function ir() {
  return $e;
}
function Ut(e, t) {
  return Bt(Ot, e, t);
}
function Lt(e) {
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
function Ho(e) {
  return vr = Tt = 1, Uo = ze(Ot = e), $e = 0, [];
}
function Ko(e) {
  return Ot = "", e;
}
function sr(e) {
  return zo(Ut($e - 1, sn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ns(e) {
  for (; (xe = Ue()) && xe < 33; )
    De();
  return Lt(e) > 2 || Lt(xe) > 3 ? "" : " ";
}
function Is(e, t) {
  for (; --t && De() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return Ut(e, ir() + (t < 6 && Ue() == 32 && De() == 32));
}
function sn(e) {
  for (; De(); )
    switch (xe) {
      case e:
        return $e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && sn(xe);
        break;
      case 40:
        e === 41 && sn(e);
        break;
      case 92:
        De();
        break;
    }
  return $e;
}
function Fs(e, t) {
  for (; De() && e + xe !== 57; )
    if (e + xe === 84 && Ue() === 47)
      break;
  return "/*" + Ut(t, $e - 1) + "*" + br(e === 47 ? e : De());
}
function Ws(e) {
  for (; !Lt(Ue()); )
    De();
  return Ut(e, $e);
}
function Bs(e) {
  return Ko(cr("", null, null, null, [""], e = Ho(e), 0, [0], e));
}
function cr(e, t, r, n, o, a, i, s, u) {
  for (var l = 0, f = 0, h = i, d = 0, E = 0, b = 0, p = 1, m = 1, x = 1, R = 0, M = "", P = o, g = a, j = n, k = M; m; )
    switch (b = R, R = De()) {
      case 40:
        if (b != 108 && Oe(k, h - 1) == 58) {
          an(k += ee(sr(R), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += sr(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ns(b);
        break;
      case 92:
        k += Is(ir() - 1, 7);
        continue;
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            tr(Ls(Fs(De(), ir()), t, r), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * p:
        s[l++] = ze(k) * x;
      case 125 * p:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            m = 0;
          case 59 + f:
            x == -1 && (k = ee(k, /\f/g, "")), E > 0 && ze(k) - h && tr(E > 32 ? ao(k + ";", n, r, h - 1) : ao(ee(k, " ", "") + ";", n, r, h - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (tr(j = oo(k, t, r, l, f, o, s, M, P = [], g = [], h), a), R === 123)
              if (f === 0)
                cr(k, t, j, j, P, a, h, s, g);
              else
                switch (d === 99 && Oe(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cr(e, j, j, n && tr(oo(e, j, j, 0, 0, o, s, M, o, P = [], h), g), o, g, h, s, n ? P : g);
                    break;
                  default:
                    cr(k, j, j, j, [""], g, 0, s, g);
                }
        }
        l = f = E = 0, p = x = 1, M = k = "", h = i;
        break;
      case 58:
        h = 1 + ze(k), E = b;
      default:
        if (p < 1) {
          if (R == 123)
            --p;
          else if (R == 125 && p++ == 0 && js() == 125)
            continue;
        }
        switch (k += br(R), R * p) {
          case 38:
            x = f > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[l++] = (ze(k) - 1) * x, x = 1;
            break;
          case 64:
            Ue() === 45 && (k += sr(De())), d = Ue(), f = h = ze(M = k += Ws(ir())), R++;
            break;
          case 45:
            b === 45 && ze(k) == 2 && (p = 0);
        }
    }
  return a;
}
function oo(e, t, r, n, o, a, i, s, u, l, f) {
  for (var h = o - 1, d = o === 0 ? a : [""], E = wn(d), b = 0, p = 0, m = 0; b < n; ++b)
    for (var x = 0, R = Bt(e, h + 1, h = Cs(p = i[b])), M = e; x < E; ++x)
      (M = zo(p > 0 ? d[x] + " " + R : ee(R, /&\f/g, d[x]))) && (u[m++] = M);
  return wr(e, t, r, o === 0 ? bn : s, u, l, f);
}
function Ls(e, t, r) {
  return wr(e, t, r, Vo, br(As()), Bt(e, 2, -2), 0);
}
function ao(e, t, r, n) {
  return wr(e, t, r, vn, Bt(e, 0, n), Bt(e, n + 1, -1), n);
}
function wt(e, t) {
  for (var r = "", n = wn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ys(e, t, r, n) {
  switch (e.type) {
    case Ps:
      if (e.children.length) break;
    case Rs:
    case vn:
      return e.return = e.return || e.value;
    case Vo:
      return "";
    case qo:
      return e.return = e.value + "{" + wt(e.children, n) + "}";
    case bn:
      e.value = e.props.join(",");
  }
  return ze(r = wt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Vs(e) {
  var t = wn(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function qs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var zs = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Ue(), o === 38 && a === 12 && (r[n] = 1), !Lt(a); )
    De();
  return Ut(t, $e);
}, Us = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Lt(o)) {
      case 0:
        o === 38 && Ue() === 12 && (r[n] = 1), t[n] += zs($e - 1, r, n);
        break;
      case 2:
        t[n] += sr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ue() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += br(o);
    }
  while (o = De());
  return t;
}, Hs = function(t, r) {
  return Ko(Us(Ho(t), r));
}, io = /* @__PURE__ */ new WeakMap(), Ks = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !io.get(n)) && !o) {
      io.set(t, !0);
      for (var a = [], i = Hs(r, a), s = n.props, u = 0, l = 0; u < i.length; u++)
        for (var f = 0; f < s.length; f++, l++)
          t.props[l] = a[u] ? i[u].replace(/&\f/g, s[f]) : s[f] + " " + i[u];
    }
  }
}, Gs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Go(e, t) {
  switch (Ms(e, t)) {
    case 5103:
      return Z + "print-" + e + e;
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
      return Z + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + pr + e + _e + e + e;
    case 6828:
    case 4268:
      return Z + e + _e + e + e;
    case 6165:
      return Z + e + _e + "flex-" + e + e;
    case 5187:
      return Z + e + ee(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + _e + "flex-$1$2") + e;
    case 5443:
      return Z + e + _e + "flex-item-" + ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Z + e + _e + "flex-line-pack" + ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Z + e + _e + ee(e, "shrink", "negative") + e;
    case 5292:
      return Z + e + _e + ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Z + "box-" + ee(e, "-grow", "") + Z + e + _e + ee(e, "grow", "positive") + e;
    case 4554:
      return Z + ee(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
    case 6187:
      return ee(ee(ee(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ee(e, /(image-set\([^]*)/, Z + "$1$`$1");
    case 4968:
      return ee(ee(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + _e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ee(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
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
      if (ze(e) - 1 - t > 6) switch (Oe(e, t + 1)) {
        case 109:
          if (Oe(e, t + 4) !== 45) break;
        case 102:
          return ee(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + pr + (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~an(e, "stretch") ? Go(ee(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Oe(e, t + 1) !== 115) break;
    case 6444:
      switch (Oe(e, ze(e) - 3 - (~an(e, "!important") && 10))) {
        case 107:
          return ee(e, ":", ":" + Z) + e;
        case 101:
          return ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (Oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + _e + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return Z + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Z + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Z + e + _e + ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Z + e + _e + e + e;
  }
  return e;
}
var Xs = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case vn:
      t.return = Go(t.value, t.length);
      break;
    case qo:
      return wt([It(t, {
        value: ee(t.value, "@", "@" + Z)
      })], o);
    case bn:
      if (t.length) return Ds(t.props, function(a) {
        switch (ks(a, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return wt([It(t, {
              props: [ee(a, /:(read-\w+)/, ":" + pr + "$1")]
            })], o);
          case "::placeholder":
            return wt([It(t, {
              props: [ee(a, /:(plac\w+)/, ":" + Z + "input-$1")]
            }), It(t, {
              props: [ee(a, /:(plac\w+)/, ":" + pr + "$1")]
            }), It(t, {
              props: [ee(a, /:(plac\w+)/, _e + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Js = [Xs], Qs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Js, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), x = 1; x < m.length; x++)
        a[m[x]] = !0;
      s.push(p);
    }
  );
  var u, l = [Ks, Gs];
  {
    var f, h = [Ys, qs(function(p) {
      f.insert(p);
    })], d = Vs(l.concat(o, h)), E = function(m) {
      return wt(Bs(m), d);
    };
    u = function(m, x, R, M) {
      f = R, E(m ? m + "{" + x.styles + "}" : x.styles), M && (b.inserted[x.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new _s({
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
    insert: u
  };
  return b.sheet.hydrate(s), b;
};
let cn;
typeof document == "object" && (cn = Qs({
  key: "css",
  prepend: !0
}));
function Xo(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && cn ? /* @__PURE__ */ H.jsx(Wa, {
    value: cn,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: y.bool
});
function Zs(e) {
  return e == null || Object.keys(e).length === 0;
}
function Jo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Zs(o) ? r : o) : t;
  return /* @__PURE__ */ H.jsx(Ba, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  defaultTheme: y.object,
  styles: y.oneOfType([y.array, y.string, y.object, y.func])
});
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ec(e, t) {
  const r = Fa(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const tc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Jo,
  StyledEngineProvider: Xo,
  ThemeContext: La,
  css: Ya,
  default: ec,
  internal_processStyles: tc,
  keyframes: gr
}, Symbol.toStringTag, { value: "Module" })), nc = /* @__PURE__ */ tt(rc);
function et(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Qo(e) {
  if (!et(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Qo(e[r]);
  }), t;
}
function He(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? K({}, e) : e;
  return et(e) && et(t) && Object.keys(t).forEach((o) => {
    et(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && et(e[o]) ? n[o] = He(e[o], t[o], r) : r.clone ? n[o] = et(t[o]) ? Qo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He,
  isPlainObject: et
}, Symbol.toStringTag, { value: "Module" })), ac = /* @__PURE__ */ tt(oc);
function Yt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt
}, Symbol.toStringTag, { value: "Module" }));
function Ge(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Yt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), cc = /* @__PURE__ */ tt(sc);
var un = { exports: {} }, oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function uc() {
  if (so) return oe;
  so = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function p(m) {
    if (typeof m == "object" && m !== null) {
      var x = m.$$typeof;
      switch (x) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case l:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case i:
                case u:
                case d:
                case h:
                case a:
                  return m;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return oe.ContextConsumer = i, oe.ContextProvider = a, oe.Element = e, oe.ForwardRef = u, oe.Fragment = r, oe.Lazy = d, oe.Memo = h, oe.Portal = t, oe.Profiler = o, oe.StrictMode = n, oe.Suspense = l, oe.SuspenseList = f, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(m) {
    return p(m) === i;
  }, oe.isContextProvider = function(m) {
    return p(m) === a;
  }, oe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, oe.isForwardRef = function(m) {
    return p(m) === u;
  }, oe.isFragment = function(m) {
    return p(m) === r;
  }, oe.isLazy = function(m) {
    return p(m) === d;
  }, oe.isMemo = function(m) {
    return p(m) === h;
  }, oe.isPortal = function(m) {
    return p(m) === t;
  }, oe.isProfiler = function(m) {
    return p(m) === o;
  }, oe.isStrictMode = function(m) {
    return p(m) === n;
  }, oe.isSuspense = function(m) {
    return p(m) === l;
  }, oe.isSuspenseList = function(m) {
    return p(m) === f;
  }, oe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === l || m === f || m === E || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === h || m.$$typeof === a || m.$$typeof === i || m.$$typeof === u || m.$$typeof === b || m.getModuleId !== void 0);
  }, oe.typeOf = p, oe;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function lc() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = !1, p = !1, m = !1, x = !1, R = !1, M;
    M = Symbol.for("react.module.reference");
    function P(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === o || R || C === n || C === l || C === f || x || C === E || b || p || m || typeof C == "object" && C !== null && (C.$$typeof === d || C.$$typeof === h || C.$$typeof === a || C.$$typeof === i || C.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === M || C.getModuleId !== void 0));
    }
    function g(C) {
      if (typeof C == "object" && C !== null) {
        var Me = C.$$typeof;
        switch (Me) {
          case e:
            var je = C.type;
            switch (je) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return je;
              default:
                var nt = je && je.$$typeof;
                switch (nt) {
                  case s:
                  case i:
                  case u:
                  case d:
                  case h:
                  case a:
                    return nt;
                  default:
                    return Me;
                }
            }
          case t:
            return Me;
        }
      }
    }
    var j = i, k = a, de = e, Te = u, le = r, _ = d, U = h, F = t, X = o, se = n, Q = l, pe = f, ue = !1, Pe = !1;
    function v(C) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(C) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(C) {
      return g(C) === i;
    }
    function W(C) {
      return g(C) === a;
    }
    function $(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function V(C) {
      return g(C) === u;
    }
    function D(C) {
      return g(C) === r;
    }
    function I(C) {
      return g(C) === d;
    }
    function B(C) {
      return g(C) === h;
    }
    function N(C) {
      return g(C) === t;
    }
    function q(C) {
      return g(C) === o;
    }
    function we(C) {
      return g(C) === n;
    }
    function T(C) {
      return g(C) === l;
    }
    function Se(C) {
      return g(C) === f;
    }
    ae.ContextConsumer = j, ae.ContextProvider = k, ae.Element = de, ae.ForwardRef = Te, ae.Fragment = le, ae.Lazy = _, ae.Memo = U, ae.Portal = F, ae.Profiler = X, ae.StrictMode = se, ae.Suspense = Q, ae.SuspenseList = pe, ae.isAsyncMode = v, ae.isConcurrentMode = S, ae.isContextConsumer = Y, ae.isContextProvider = W, ae.isElement = $, ae.isForwardRef = V, ae.isFragment = D, ae.isLazy = I, ae.isMemo = B, ae.isPortal = N, ae.isProfiler = q, ae.isStrictMode = we, ae.isSuspense = T, ae.isSuspenseList = Se, ae.isValidElementType = P, ae.typeOf = g;
  }()), ae;
}
process.env.NODE_ENV === "production" ? un.exports = uc() : un.exports = lc();
var uo = un.exports;
const fc = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Zo(e) {
  const t = `${e}`.match(fc);
  return t && t[1] || "";
}
function ea(e, t = "") {
  return e.displayName || e.name || Zo(e) || t;
}
function lo(e, t, r) {
  const n = ea(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function dc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ea(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case uo.ForwardRef:
          return lo(e, e.render, "ForwardRef");
        case uo.Memo:
          return lo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dc,
  getFunctionName: Zo
}, Symbol.toStringTag, { value: "Module" })), hc = /* @__PURE__ */ tt(pc), mc = ["values", "unit", "step"], yc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => K({}, r, {
    [n.key]: n.val
  }), {});
};
function ta(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = Ve(e, mc), a = yc(t), i = Object.keys(a);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function l(d, E) {
    const b = i.indexOf(E);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(b !== -1 && typeof t[i[b]] == "number" ? t[i[b]] : E) - n / 100}${r})`;
  }
  function f(d) {
    return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : s(d);
  }
  function h(d) {
    const E = i.indexOf(d);
    return E === 0 ? s(i[1]) : E === i.length - 1 ? u(i[E]) : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return K({
    keys: i,
    values: a,
    up: s,
    down: u,
    between: l,
    only: f,
    not: h,
    unit: r
  }, o);
}
const gc = {
  borderRadius: 4
}, rt = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function Wt(e, t) {
  return t ? He(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const En = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, fo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${En[e]}px)`
};
function Xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || fo;
    return t.reduce((i, s, u) => (i[a.up(a.keys[u])] = r(t[u]), i), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || fo;
    return Object.keys(t).reduce((i, s) => {
      if (Object.keys(a.values || En).indexOf(s) !== -1) {
        const u = a.up(s);
        i[u] = r(t[s], s);
      } else {
        const u = s;
        i[u] = t[u];
      }
      return i;
    }, {});
  }
  return r(t);
}
function bc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function vc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Er(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function hr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Er(e, r) || n, t && (o = t(o, n, e)), o;
}
function be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (i) => {
    if (i[t] == null)
      return null;
    const s = i[t], u = i.theme, l = Er(u, n) || {};
    return Xe(i, s, (h) => {
      let d = hr(l, o, h);
      return h === d && typeof h == "string" && (d = hr(l, o, `${t}${h === "default" ? "" : Ge(h)}`, h)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: rt
  } : {}, a.filterProps = [t], a;
}
function wc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Ec = {
  m: "margin",
  p: "padding"
}, xc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, po = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Tc = wc((e) => {
  if (e.length > 2)
    if (po[e])
      e = po[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Ec[t], o = xc[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), xr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Tr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Oc = [...xr, ...Tr];
function Ht(e, t, r, n) {
  var o;
  const a = (o = Er(e, t, !1)) != null ? o : r;
  return typeof a == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), a * i) : Array.isArray(a) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > a.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${i} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[i]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ra(e) {
  return Ht(e, "spacing", 8, "spacing");
}
function Kt(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Sc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Kt(t, r), n), {});
}
function _c(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Tc(r), a = Sc(o, n), i = e[r];
  return Xe(e, i, a);
}
function na(e, t) {
  const r = ra(e.theme);
  return Object.keys(e).map((n) => _c(e, t, n, r)).reduce(Wt, {});
}
function he(e) {
  return na(e, xr);
}
he.propTypes = process.env.NODE_ENV !== "production" ? xr.reduce((e, t) => (e[t] = rt, e), {}) : {};
he.filterProps = xr;
function me(e) {
  return na(e, Tr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? Tr.reduce((e, t) => (e[t] = rt, e), {}) : {};
me.filterProps = Tr;
process.env.NODE_ENV !== "production" && Oc.reduce((e, t) => (e[t] = rt, e), {});
function Rc(e = 8) {
  if (e.mui)
    return e;
  const t = ra({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const i = t(a);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function Or(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? Wt(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function qe(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pc = qe("border", Be), Cc = qe("borderTop", Be), $c = qe("borderRight", Be), Mc = qe("borderBottom", Be), kc = qe("borderLeft", Be), Dc = qe("borderColor"), Ac = qe("borderTopColor"), jc = qe("borderRightColor"), Nc = qe("borderBottomColor"), Ic = qe("borderLeftColor"), Fc = qe("outline", Be), Wc = qe("outlineColor"), Sr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ht(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kt(t, n)
    });
    return Xe(e, e.borderRadius, r);
  }
  return null;
};
Sr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: rt
} : {};
Sr.filterProps = ["borderRadius"];
Or(Pc, Cc, $c, Mc, kc, Dc, Ac, jc, Nc, Ic, Sr, Fc, Wc);
const _r = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ht(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kt(t, n)
    });
    return Xe(e, e.gap, r);
  }
  return null;
};
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: rt
} : {};
_r.filterProps = ["gap"];
const Rr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ht(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kt(t, n)
    });
    return Xe(e, e.columnGap, r);
  }
  return null;
};
Rr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: rt
} : {};
Rr.filterProps = ["columnGap"];
const Pr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ht(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kt(t, n)
    });
    return Xe(e, e.rowGap, r);
  }
  return null;
};
Pr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: rt
} : {};
Pr.filterProps = ["rowGap"];
const Bc = be({
  prop: "gridColumn"
}), Lc = be({
  prop: "gridRow"
}), Yc = be({
  prop: "gridAutoFlow"
}), Vc = be({
  prop: "gridAutoColumns"
}), qc = be({
  prop: "gridAutoRows"
}), zc = be({
  prop: "gridTemplateColumns"
}), Uc = be({
  prop: "gridTemplateRows"
}), Hc = be({
  prop: "gridTemplateAreas"
}), Kc = be({
  prop: "gridArea"
});
Or(_r, Rr, Pr, Bc, Lc, Yc, Vc, qc, zc, Uc, Hc, Kc);
function Et(e, t) {
  return t === "grey" ? t : e;
}
const Gc = be({
  prop: "color",
  themeKey: "palette",
  transform: Et
}), Xc = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Et
}), Jc = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Et
});
Or(Gc, Xc, Jc);
function ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Qc = be({
  prop: "width",
  transform: ke
}), xn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || En[r];
      return a ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: ke(r)
      };
    };
    return Xe(e, e.maxWidth, t);
  }
  return null;
};
xn.filterProps = ["maxWidth"];
const Zc = be({
  prop: "minWidth",
  transform: ke
}), eu = be({
  prop: "height",
  transform: ke
}), tu = be({
  prop: "maxHeight",
  transform: ke
}), ru = be({
  prop: "minHeight",
  transform: ke
});
be({
  prop: "size",
  cssProperty: "width",
  transform: ke
});
be({
  prop: "size",
  cssProperty: "height",
  transform: ke
});
const nu = be({
  prop: "boxSizing"
});
Or(Qc, xn, Zc, eu, tu, ru, nu);
const Gt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Be
  },
  borderTop: {
    themeKey: "borders",
    transform: Be
  },
  borderRight: {
    themeKey: "borders",
    transform: Be
  },
  borderBottom: {
    themeKey: "borders",
    transform: Be
  },
  borderLeft: {
    themeKey: "borders",
    transform: Be
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Sr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Et
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Et
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Et
  },
  // spacing
  p: {
    style: me
  },
  pt: {
    style: me
  },
  pr: {
    style: me
  },
  pb: {
    style: me
  },
  pl: {
    style: me
  },
  px: {
    style: me
  },
  py: {
    style: me
  },
  padding: {
    style: me
  },
  paddingTop: {
    style: me
  },
  paddingRight: {
    style: me
  },
  paddingBottom: {
    style: me
  },
  paddingLeft: {
    style: me
  },
  paddingX: {
    style: me
  },
  paddingY: {
    style: me
  },
  paddingInline: {
    style: me
  },
  paddingInlineStart: {
    style: me
  },
  paddingInlineEnd: {
    style: me
  },
  paddingBlock: {
    style: me
  },
  paddingBlockStart: {
    style: me
  },
  paddingBlockEnd: {
    style: me
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: _r
  },
  rowGap: {
    style: Pr
  },
  columnGap: {
    style: Rr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ke
  },
  maxWidth: {
    style: xn
  },
  minWidth: {
    transform: ke
  },
  height: {
    transform: ke
  },
  maxHeight: {
    transform: ke
  },
  minHeight: {
    transform: ke
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ou(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function au(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oa() {
  function e(r, n, o, a) {
    const i = {
      [r]: n,
      theme: o
    }, s = a[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: l,
      transform: f,
      style: h
    } = s;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = Er(o, l) || {};
    return h ? h(i) : Xe(i, n, (b) => {
      let p = hr(d, f, b);
      return b === p && typeof b == "string" && (p = hr(d, f, `${r}${b === "default" ? "" : Ge(b)}`, b)), u === !1 ? p : {
        [u]: p
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: a = {}
    } = r || {};
    if (!o)
      return null;
    const i = (n = a.unstable_sxConfig) != null ? n : Gt;
    function s(u) {
      let l = u;
      if (typeof u == "function")
        l = u(a);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = bc(a.breakpoints), h = Object.keys(f);
      let d = f;
      return Object.keys(l).forEach((E) => {
        const b = au(l[E], a);
        if (b != null)
          if (typeof b == "object")
            if (i[E])
              d = Wt(d, e(E, b, a, i));
            else {
              const p = Xe({
                theme: a
              }, b, (m) => ({
                [E]: m
              }));
              ou(p, b) ? d[E] = t({
                sx: b,
                theme: a
              }) : d = Wt(d, p);
            }
          else
            d = Wt(d, e(E, b, a, i));
      }), vc(h, d);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Cr = oa();
Cr.filterProps = ["sx"];
function aa(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const iu = ["breakpoints", "palette", "spacing", "shape"];
function ia(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {}
  } = e, i = Ve(e, iu), s = ta(r), u = Rc(o);
  let l = He({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: K({
      mode: "light"
    }, n),
    spacing: u,
    shape: K({}, gc, a)
  }, i);
  return l.applyStyles = aa, l = t.reduce((f, h) => He(f, h), l), l.unstable_sxConfig = K({}, Gt, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(h) {
    return Cr({
      sx: h,
      theme: this
    });
  }, l;
}
const su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ia,
  private_createBreakpoints: ta,
  unstable_applyStyles: aa
}, Symbol.toStringTag, { value: "Module" })), cu = /* @__PURE__ */ tt(su), uu = ["sx"], lu = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Gt;
  return Object.keys(e).forEach((a) => {
    o[a] ? n.systemProps[a] = e[a] : n.otherProps[a] = e[a];
  }), n;
};
function sa(e) {
  const {
    sx: t
  } = e, r = Ve(e, uu), {
    systemProps: n,
    otherProps: o
  } = lu(r);
  let a;
  return Array.isArray(t) ? a = [n, ...t] : typeof t == "function" ? a = (...i) => {
    const s = t(...i);
    return et(s) ? K({}, n, s) : n;
  } : a = K({}, n, t), K({}, o, {
    sx: a
  });
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr,
  extendSxProp: sa,
  unstable_createStyleFunctionSx: oa,
  unstable_defaultSxConfig: Gt
}, Symbol.toStringTag, { value: "Module" })), du = /* @__PURE__ */ tt(fu);
var St = Yo;
Object.defineProperty(zt, "__esModule", {
  value: !0
});
var pu = zt.default = Ru;
zt.shouldForwardProp = ur;
zt.systemDefaultTheme = void 0;
var Ie = St(Es()), ln = St(xs()), ho = xu(nc), hu = ac, mu = St(cc), yu = St(hc), gu = St(cu), bu = St(du);
const vu = ["ownerState"], wu = ["variants"], Eu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ca(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ca = function(n) {
    return n ? r : t;
  })(e);
}
function xu(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = ca(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a];
  }
  return n.default = e, r && r.set(e, n), n;
}
function Tu(e) {
  return Object.keys(e).length === 0;
}
function Ou(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ur(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Su = zt.systemDefaultTheme = (0, gu.default)(), mo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function rr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Tu(t) ? e : t[r] || t;
}
function _u(e) {
  return e ? (t, r) => r[e] : null;
}
function lr(e, t) {
  let {
    ownerState: r
  } = t, n = (0, ln.default)(t, vu);
  const o = typeof e == "function" ? e((0, Ie.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((a) => lr(a, (0, Ie.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: a = []
    } = o;
    let s = (0, ln.default)(o, wu);
    return a.forEach((u) => {
      let l = !0;
      typeof u.props == "function" ? l = u.props((0, Ie.default)({
        ownerState: r
      }, n, r)) : Object.keys(u.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== u.props[f] && n[f] !== u.props[f] && (l = !1);
      }), l && (Array.isArray(s) || (s = [s]), s.push(typeof u.style == "function" ? u.style((0, Ie.default)({
        ownerState: r
      }, n, r)) : u.style));
    }), s;
  }
  return o;
}
function Ru(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Su,
    rootShouldForwardProp: n = ur,
    slotShouldForwardProp: o = ur
  } = e, a = (i) => (0, bu.default)((0, Ie.default)({}, i, {
    theme: rr((0, Ie.default)({}, i, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (i, s = {}) => {
    (0, ho.internal_processStyles)(i, (g) => g.filter((j) => !(j != null && j.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = _u(mo(l))
    } = s, E = (0, ln.default)(s, Eu), b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), p = h || !1;
    let m;
    process.env.NODE_ENV !== "production" && u && (m = `${u}-${mo(l || "Root")}`);
    let x = ur;
    l === "Root" || l === "root" ? x = n : l ? x = o : Ou(i) && (x = void 0);
    const R = (0, ho.default)(i, (0, Ie.default)({
      shouldForwardProp: x,
      label: m
    }, E)), M = (g) => typeof g == "function" && g.__emotion_real !== g || (0, hu.isPlainObject)(g) ? (j) => lr(g, (0, Ie.default)({}, j, {
      theme: rr({
        theme: j.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : g, P = (g, ...j) => {
      let k = M(g);
      const de = j ? j.map(M) : [];
      u && d && de.push((_) => {
        const U = rr((0, Ie.default)({}, _, {
          defaultTheme: r,
          themeId: t
        }));
        if (!U.components || !U.components[u] || !U.components[u].styleOverrides)
          return null;
        const F = U.components[u].styleOverrides, X = {};
        return Object.entries(F).forEach(([se, Q]) => {
          X[se] = lr(Q, (0, Ie.default)({}, _, {
            theme: U
          }));
        }), d(_, X);
      }), u && !b && de.push((_) => {
        var U;
        const F = rr((0, Ie.default)({}, _, {
          defaultTheme: r,
          themeId: t
        })), X = F == null || (U = F.components) == null || (U = U[u]) == null ? void 0 : U.variants;
        return lr({
          variants: X
        }, (0, Ie.default)({}, _, {
          theme: F
        }));
      }), p || de.push(a);
      const Te = de.length - j.length;
      if (Array.isArray(g) && Te > 0) {
        const _ = new Array(Te).fill("");
        k = [...g, ..._], k.raw = [...g.raw, ..._];
      }
      const le = R(k, ...de);
      if (process.env.NODE_ENV !== "production") {
        let _;
        u && (_ = `${u}${(0, mu.default)(l || "")}`), _ === void 0 && (_ = `Styled(${(0, yu.default)(i)})`), le.displayName = _;
      }
      return i.muiName && (le.muiName = i.muiName), le;
    };
    return R.withConfig && (P.withConfig = R.withConfig), P;
  };
}
const yo = (e) => e, Pu = () => {
  let e = yo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = yo;
    }
  };
}, Cu = Pu(), $u = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Xt(e, t, r = "Mui") {
  const n = $u[t];
  return n ? `${r}-${n}` : `${Cu.generate(e)}-${t}`;
}
function Mu(e, t) {
  return K({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ve = {};
const ku = /* @__PURE__ */ tt(ic);
function Du(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Du
}, Symbol.toStringTag, { value: "Module" })), ju = /* @__PURE__ */ tt(Au);
var ua = Yo;
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.alpha = pa;
ve.blend = Hu;
ve.colorChannel = void 0;
var Nu = ve.darken = On;
ve.decomposeColor = Ye;
ve.emphasize = ha;
var go = ve.getContrastRatio = Yu;
ve.getLuminance = mr;
ve.hexToRgb = la;
ve.hslToRgb = da;
var Iu = ve.lighten = Sn;
ve.private_safeAlpha = Vu;
ve.private_safeColorChannel = void 0;
ve.private_safeDarken = qu;
ve.private_safeEmphasize = Uu;
ve.private_safeLighten = zu;
ve.recomposeColor = _t;
ve.rgbToHex = Lu;
var bo = ua(ku), Fu = ua(ju);
function Tn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Fu.default)(e, t, r);
}
function la(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Wu(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ye(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ye(la(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, bo.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, bo.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const fa = (e) => {
  const t = Ye(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
ve.colorChannel = fa;
const Bu = (e, t) => {
  try {
    return fa(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ve.private_safeColorChannel = Bu;
function _t(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Lu(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ye(e);
  return `#${t.map((r, n) => Wu(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function da(e) {
  e = Ye(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), i = (l, f = (l + r / 30) % 12) => o - a * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const u = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(t[3])), _t({
    type: s,
    values: u
  });
}
function mr(e) {
  e = Ye(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ye(da(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Yu(e, t) {
  const r = mr(e), n = mr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function pa(e, t) {
  return e = Ye(e), t = Tn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, _t(e);
}
function Vu(e, t, r) {
  try {
    return pa(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function On(e, t) {
  if (e = Ye(e), t = Tn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return _t(e);
}
function qu(e, t, r) {
  try {
    return On(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Sn(e, t) {
  if (e = Ye(e), t = Tn(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return _t(e);
}
function zu(e, t, r) {
  try {
    return Sn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ha(e, t = 0.15) {
  return mr(e) > 0.5 ? On(e, t) : Sn(e, t);
}
function Uu(e, t, r) {
  try {
    return ha(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Hu(e, t, r, n = 1) {
  const o = (u, l) => Math.round((u ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), a = Ye(e), i = Ye(t), s = [o(a.values[0], i.values[0]), o(a.values[1], i.values[1]), o(a.values[2], i.values[2])];
  return _t({
    type: "rgb",
    values: s
  });
}
const Vt = {
  black: "#000",
  white: "#fff"
}, Ku = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, mt = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, yt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ft = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, gt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, bt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, vt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Gu = ["mode", "contrastThreshold", "tonalOffset"], vo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Vt.white,
    default: Vt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Zr = {
  text: {
    primary: Vt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Vt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function wo(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Iu(e.main, o) : t === "dark" && (e.dark = Nu(e.main, a)));
}
function Xu(e = "light") {
  return e === "dark" ? {
    main: gt[200],
    light: gt[50],
    dark: gt[400]
  } : {
    main: gt[700],
    light: gt[400],
    dark: gt[800]
  };
}
function Ju(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[500],
    light: mt[300],
    dark: mt[700]
  };
}
function Qu(e = "light") {
  return e === "dark" ? {
    main: yt[500],
    light: yt[300],
    dark: yt[700]
  } : {
    main: yt[700],
    light: yt[400],
    dark: yt[800]
  };
}
function Zu(e = "light") {
  return e === "dark" ? {
    main: bt[400],
    light: bt[300],
    dark: bt[700]
  } : {
    main: bt[700],
    light: bt[500],
    dark: bt[900]
  };
}
function el(e = "light") {
  return e === "dark" ? {
    main: vt[400],
    light: vt[300],
    dark: vt[700]
  } : {
    main: vt[800],
    light: vt[500],
    dark: vt[900]
  };
}
function tl(e = "light") {
  return e === "dark" ? {
    main: Ft[400],
    light: Ft[300],
    dark: Ft[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ft[500],
    dark: Ft[900]
  };
}
function rl(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Ve(e, Gu), a = e.primary || Xu(t), i = e.secondary || Ju(t), s = e.error || Qu(t), u = e.info || Zu(t), l = e.success || el(t), f = e.warning || tl(t);
  function h(p) {
    const m = go(p, Zr.text.primary) >= r ? Zr.text.primary : vo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = go(p, m);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${m} on ${p}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const d = ({
    color: p,
    name: m,
    mainShade: x = 500,
    lightShade: R = 300,
    darkShade: M = 700
  }) => {
    if (p = K({}, p), !p.main && p[x] && (p.main = p[x]), !p.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Yt(11, m ? ` (${m})` : "", x));
    if (typeof p.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(p.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Yt(12, m ? ` (${m})` : "", JSON.stringify(p.main)));
    return wo(p, "light", R, n), wo(p, "dark", M, n), p.contrastText || (p.contrastText = h(p.main)), p;
  }, E = {
    dark: Zr,
    light: vo
  };
  return process.env.NODE_ENV !== "production" && (E[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), He(K({
    // A collection of common colors.
    common: K({}, Vt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: Ku,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, E[t]), o);
}
const nl = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ol(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eo = {
  textTransform: "uppercase"
}, xo = '"Roboto", "Helvetica", "Arial", sans-serif';
function al(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = xo,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h
  } = r, d = Ve(r, nl);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const E = o / 14, b = h || ((x) => `${x / l * E}rem`), p = (x, R, M, P, g) => K({
    fontFamily: n,
    fontWeight: x,
    fontSize: b(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M
  }, n === xo ? {
    letterSpacing: `${ol(P / R)}em`
  } : {}, g, f), m = {
    h1: p(a, 96, 1.167, -1.5),
    h2: p(a, 60, 1.2, -0.5),
    h3: p(i, 48, 1.167, 0),
    h4: p(i, 34, 1.235, 0.25),
    h5: p(i, 24, 1.334, 0),
    h6: p(s, 20, 1.6, 0.15),
    subtitle1: p(i, 16, 1.75, 0.15),
    subtitle2: p(s, 14, 1.57, 0.1),
    body1: p(i, 16, 1.5, 0.15),
    body2: p(i, 14, 1.43, 0.15),
    button: p(s, 14, 1.75, 0.4, Eo),
    caption: p(i, 12, 1.66, 0.4),
    overline: p(i, 12, 2.66, 1, Eo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return He(K({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: a,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: u
  }, m), d, {
    clone: !1
    // No need to clone deep
  });
}
const il = 0.2, sl = 0.14, cl = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${il})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${sl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cl})`].join(",");
}
const ul = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ll = ["duration", "easing", "delay"], fl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, dl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function To(e) {
  return `${Math.round(e)}ms`;
}
function pl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function hl(e) {
  const t = K({}, fl, e.easing), r = K({}, dl, e.duration);
  return K({
    getAutoHeightDuration: pl,
    create: (o = ["all"], a = {}) => {
      const {
        duration: i = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0
      } = a, l = Ve(a, ll);
      if (process.env.NODE_ENV !== "production") {
        const f = (d) => typeof d == "string", h = (d) => !isNaN(parseFloat(d));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(i) && !f(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof i == "string" ? i : To(i)} ${s} ${typeof u == "string" ? u : To(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const ml = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, yl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Rt(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: a = {}
  } = e, i = Ve(e, yl);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Yt(18));
  const s = rl(n), u = ia(e);
  let l = He(u, {
    mixins: Mu(u.breakpoints, r),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ul.slice(),
    typography: al(s, a),
    transitions: hl(o),
    zIndex: K({}, ml)
  });
  if (l = He(l, i), l = t.reduce((f, h) => He(f, h), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (d, E) => {
      let b;
      for (b in d) {
        const p = d[b];
        if (f.indexOf(b) !== -1 && Object.keys(p).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Xt("", b);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: p
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((d) => {
      const E = l.components[d].styleOverrides;
      E && d.indexOf("Mui") === 0 && h(E, d);
    });
  }
  return l.unstable_sxConfig = K({}, Gt, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(h) {
    return Cr({
      sx: h,
      theme: this
    });
  }, l;
}
const gl = Rt(), bl = "$$material";
function vl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const wl = (e) => vl(e) && e !== "classes", ct = pu({
  themeId: bl,
  defaultTheme: gl,
  rootShouldForwardProp: wl
});
function fn(e, t) {
  const r = K({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = K({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, a = t[n];
      r[n] = {}, !a || !Object.keys(a) ? r[n] = o : !o || !Object.keys(o) ? r[n] = a : (r[n] = K({}, a), Object.keys(o).forEach((i) => {
        r[n][i] = fn(o[i], a[i]);
      }));
    } else r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
const El = /* @__PURE__ */ z.createContext(void 0);
process.env.NODE_ENV !== "production" && (y.node, y.object);
function xl(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? fn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? fn(o, n) : n;
}
function Tl({
  props: e,
  name: t
}) {
  const r = z.useContext(El);
  return xl({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function $r(e) {
  return Tl(e);
}
function Ol(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Oo(...e) {
  return z.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ol(r, t);
    });
  }, e);
}
const Sl = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function nr(e) {
  const t = z.useRef(e);
  return Sl(() => {
    t.current = e;
  }), z.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
const So = {};
function _l(e, t) {
  const r = z.useRef(So);
  return r.current === So && (r.current = e(t)), r;
}
const Rl = [];
function Pl(e) {
  z.useEffect(e, Rl);
}
class Mr {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Mr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Cl() {
  const e = _l(Mr.create).current;
  return Pl(e.disposeEffect), e;
}
let kr = !0, dn = !1;
const $l = new Mr(), Ml = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function kl(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Ml[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Dl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (kr = !0);
}
function en() {
  kr = !1;
}
function Al() {
  this.visibilityState === "hidden" && dn && (kr = !0);
}
function jl(e) {
  e.addEventListener("keydown", Dl, !0), e.addEventListener("mousedown", en, !0), e.addEventListener("pointerdown", en, !0), e.addEventListener("touchstart", en, !0), e.addEventListener("visibilitychange", Al, !0);
}
function Nl(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return kr || kl(t);
}
function Il() {
  const e = z.useCallback((o) => {
    o != null && jl(o.ownerDocument);
  }, []), t = z.useRef(!1);
  function r() {
    return t.current ? (dn = !0, $l.start(100, () => {
      dn = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Nl(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function pn(e, t) {
  return pn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, pn(e, t);
}
function Fl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pn(e, t);
}
const _o = it.createContext(null);
function Wl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _n(e, t) {
  var r = function(a) {
    return t && or(a) ? t(a) : a;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && ja.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Bl(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var a in e)
    a in t ? o.length && (n[a] = o, o = []) : o.push(a);
  var i, s = {};
  for (var u in t) {
    if (n[u])
      for (i = 0; i < n[u].length; i++) {
        var l = n[u][i];
        s[n[u][i]] = r(l);
      }
    s[u] = r(u);
  }
  for (i = 0; i < o.length; i++)
    s[o[i]] = r(o[i]);
  return s;
}
function st(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Ll(e, t) {
  return _n(e.children, function(r) {
    return ar(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: st(r, "appear", e),
      enter: st(r, "enter", e),
      exit: st(r, "exit", e)
    });
  });
}
function Yl(e, t, r) {
  var n = _n(e.children), o = Bl(t, n);
  return Object.keys(o).forEach(function(a) {
    var i = o[a];
    if (or(i)) {
      var s = a in t, u = a in n, l = t[a], f = or(l) && !l.props.in;
      u && (!s || f) ? o[a] = ar(i, {
        onExited: r.bind(null, i),
        in: !0,
        exit: st(i, "exit", e),
        enter: st(i, "enter", e)
      }) : !u && s && !f ? o[a] = ar(i, {
        in: !1
      }) : u && s && or(l) && (o[a] = ar(i, {
        onExited: r.bind(null, i),
        in: l.props.in,
        exit: st(i, "exit", e),
        enter: st(i, "enter", e)
      }));
    }
  }), o;
}
var Vl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ql = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Rn = /* @__PURE__ */ function(e) {
  Fl(t, e);
  function t(n, o) {
    var a;
    a = e.call(this, n, o) || this;
    var i = a.handleExited.bind(Wl(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, a;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, a) {
    var i = a.children, s = a.handleExited, u = a.firstRender;
    return {
      children: u ? Ll(o, s) : Yl(o, i, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, a) {
    var i = _n(this.props.children);
    o.key in i || (o.props.onExited && o.props.onExited(a), this.mounted && this.setState(function(s) {
      var u = K({}, s.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, a = o.component, i = o.childFactory, s = Ve(o, ["component", "childFactory"]), u = this.state.contextValue, l = Vl(this.state.children).map(i);
    return delete s.appear, delete s.enter, delete s.exit, a === null ? /* @__PURE__ */ it.createElement(_o.Provider, {
      value: u
    }, l) : /* @__PURE__ */ it.createElement(_o.Provider, {
      value: u
    }, /* @__PURE__ */ it.createElement(a, s, l));
  }, t;
}(it.Component);
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: y.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: y.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: y.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: y.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: y.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: y.func
} : {};
Rn.defaultProps = ql;
function Dr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Xt(e, o, r);
  }), n;
}
function ma(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: a,
    rippleSize: i,
    in: s,
    onExited: u,
    timeout: l
  } = e, [f, h] = z.useState(!1), d = Fe(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), E = {
    width: i,
    height: i,
    top: -(i / 2) + a,
    left: -(i / 2) + o
  }, b = Fe(r.child, f && r.childLeaving, n && r.childPulsate);
  return !s && !f && h(!0), z.useEffect(() => {
    if (!s && u != null) {
      const p = setTimeout(u, l);
      return () => {
        clearTimeout(p);
      };
    }
  }, [u, s, l]), /* @__PURE__ */ H.jsx("span", {
    className: d,
    style: E,
    children: /* @__PURE__ */ H.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (ma.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object.isRequired,
  className: y.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: y.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: y.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: y.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: y.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: y.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: y.number,
  /**
   * exit delay
   */
  timeout: y.number.isRequired
});
const We = Dr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), zl = ["center", "classes", "className"];
let Ar = (e) => e, Ro, Po, Co, $o;
const hn = 550, Ul = 80, Hl = gr(Ro || (Ro = Ar`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Kl = gr(Po || (Po = Ar`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Gl = gr(Co || (Co = Ar`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Xl = ct("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Jl = ct(ma, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})($o || ($o = Ar`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), We.rippleVisible, Hl, hn, ({
  theme: e
}) => e.transitions.easing.easeInOut, We.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, We.child, We.childLeaving, Kl, hn, ({
  theme: e
}) => e.transitions.easing.easeInOut, We.childPulsate, Gl, ({
  theme: e
}) => e.transitions.easing.easeInOut), ya = /* @__PURE__ */ z.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: a = {},
    className: i
  } = n, s = Ve(n, zl), [u, l] = z.useState([]), f = z.useRef(0), h = z.useRef(null);
  z.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const d = z.useRef(!1), E = Cl(), b = z.useRef(null), p = z.useRef(null), m = z.useCallback((P) => {
    const {
      pulsate: g,
      rippleX: j,
      rippleY: k,
      rippleSize: de,
      cb: Te
    } = P;
    l((le) => [...le, /* @__PURE__ */ H.jsx(Jl, {
      classes: {
        ripple: Fe(a.ripple, We.ripple),
        rippleVisible: Fe(a.rippleVisible, We.rippleVisible),
        ripplePulsate: Fe(a.ripplePulsate, We.ripplePulsate),
        child: Fe(a.child, We.child),
        childLeaving: Fe(a.childLeaving, We.childLeaving),
        childPulsate: Fe(a.childPulsate, We.childPulsate)
      },
      timeout: hn,
      pulsate: g,
      rippleX: j,
      rippleY: k,
      rippleSize: de
    }, f.current)]), f.current += 1, h.current = Te;
  }, [a]), x = z.useCallback((P = {}, g = {}, j = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: de = o || g.pulsate,
      fakeElement: Te = !1
      // For test purposes
    } = g;
    if ((P == null ? void 0 : P.type) === "mousedown" && d.current) {
      d.current = !1;
      return;
    }
    (P == null ? void 0 : P.type) === "touchstart" && (d.current = !0);
    const le = Te ? null : p.current, _ = le ? le.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let U, F, X;
    if (de || P === void 0 || P.clientX === 0 && P.clientY === 0 || !P.clientX && !P.touches)
      U = Math.round(_.width / 2), F = Math.round(_.height / 2);
    else {
      const {
        clientX: se,
        clientY: Q
      } = P.touches && P.touches.length > 0 ? P.touches[0] : P;
      U = Math.round(se - _.left), F = Math.round(Q - _.top);
    }
    if (de)
      X = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), X % 2 === 0 && (X += 1);
    else {
      const se = Math.max(Math.abs((le ? le.clientWidth : 0) - U), U) * 2 + 2, Q = Math.max(Math.abs((le ? le.clientHeight : 0) - F), F) * 2 + 2;
      X = Math.sqrt(se ** 2 + Q ** 2);
    }
    P != null && P.touches ? b.current === null && (b.current = () => {
      m({
        pulsate: k,
        rippleX: U,
        rippleY: F,
        rippleSize: X,
        cb: j
      });
    }, E.start(Ul, () => {
      b.current && (b.current(), b.current = null);
    })) : m({
      pulsate: k,
      rippleX: U,
      rippleY: F,
      rippleSize: X,
      cb: j
    });
  }, [o, m, E]), R = z.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), M = z.useCallback((P, g) => {
    if (E.clear(), (P == null ? void 0 : P.type) === "touchend" && b.current) {
      b.current(), b.current = null, E.start(0, () => {
        M(P, g);
      });
      return;
    }
    b.current = null, l((j) => j.length > 0 ? j.slice(1) : j), h.current = g;
  }, [E]);
  return z.useImperativeHandle(r, () => ({
    pulsate: R,
    start: x,
    stop: M
  }), [R, x, M]), /* @__PURE__ */ H.jsx(Xl, K({
    className: Fe(We.root, a.root, i),
    ref: p
  }, s, {
    children: /* @__PURE__ */ H.jsx(Rn, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (ya.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: y.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string
});
function Ql(e) {
  return Xt("MuiButtonBase", e);
}
const Zl = Dr("MuiButtonBase", ["root", "disabled", "focusVisible"]), ef = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], tf = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, i = gn({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Ql, o);
  return r && n && (i.root += ` ${n}`), i;
}, rf = ct("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Zl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ga = /* @__PURE__ */ z.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: a = !1,
    children: i,
    className: s,
    component: u = "button",
    disabled: l = !1,
    disableRipple: f = !1,
    disableTouchRipple: h = !1,
    focusRipple: d = !1,
    LinkComponent: E = "a",
    onBlur: b,
    onClick: p,
    onContextMenu: m,
    onDragLeave: x,
    onFocus: R,
    onFocusVisible: M,
    onKeyDown: P,
    onKeyUp: g,
    onMouseDown: j,
    onMouseLeave: k,
    onMouseUp: de,
    onTouchEnd: Te,
    onTouchMove: le,
    onTouchStart: _,
    tabIndex: U = 0,
    TouchRippleProps: F,
    touchRippleRef: X,
    type: se
  } = n, Q = Ve(n, ef), pe = z.useRef(null), ue = z.useRef(null), Pe = Oo(ue, X), {
    isFocusVisibleRef: v,
    onFocus: S,
    onBlur: Y,
    ref: W
  } = Il(), [$, V] = z.useState(!1);
  l && $ && V(!1), z.useImperativeHandle(o, () => ({
    focusVisible: () => {
      V(!0), pe.current.focus();
    }
  }), []);
  const [D, I] = z.useState(!1);
  z.useEffect(() => {
    I(!0);
  }, []);
  const B = D && !f && !l;
  z.useEffect(() => {
    $ && d && !f && D && ue.current.pulsate();
  }, [f, d, $, D]);
  function N(L, Mt, kt = h) {
    return nr((Zt) => (Mt && Mt(Zt), !kt && ue.current && ue.current[L](Zt), !0));
  }
  const q = N("start", j), we = N("stop", m), T = N("stop", x), Se = N("stop", de), C = N("stop", (L) => {
    $ && L.preventDefault(), k && k(L);
  }), Me = N("start", _), je = N("stop", Te), nt = N("stop", le), Jt = N("stop", (L) => {
    Y(L), v.current === !1 && V(!1), b && b(L);
  }, !1), ut = nr((L) => {
    pe.current || (pe.current = L.currentTarget), S(L), v.current === !0 && (V(!0), M && M(L)), R && R(L);
  }), Pt = () => {
    const L = pe.current;
    return u && u !== "button" && !(L.tagName === "A" && L.href);
  }, Ct = z.useRef(!1), $t = nr((L) => {
    d && !Ct.current && $ && ue.current && L.key === " " && (Ct.current = !0, ue.current.stop(L, () => {
      ue.current.start(L);
    })), L.target === L.currentTarget && Pt() && L.key === " " && L.preventDefault(), P && P(L), L.target === L.currentTarget && Pt() && L.key === "Enter" && !l && (L.preventDefault(), p && p(L));
  }), jr = nr((L) => {
    d && L.key === " " && ue.current && $ && !L.defaultPrevented && (Ct.current = !1, ue.current.stop(L, () => {
      ue.current.pulsate(L);
    })), g && g(L), p && L.target === L.currentTarget && Pt() && L.key === " " && !L.defaultPrevented && p(L);
  });
  let lt = u;
  lt === "button" && (Q.href || Q.to) && (lt = E);
  const Je = {};
  lt === "button" ? (Je.type = se === void 0 ? "button" : se, Je.disabled = l) : (!Q.href && !Q.to && (Je.role = "button"), l && (Je["aria-disabled"] = l));
  const Qt = Oo(r, W, pe);
  process.env.NODE_ENV !== "production" && z.useEffect(() => {
    B && !ue.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [B]);
  const Qe = K({}, n, {
    centerRipple: a,
    component: u,
    disabled: l,
    disableRipple: f,
    disableTouchRipple: h,
    focusRipple: d,
    tabIndex: U,
    focusVisible: $
  }), Nr = tf(Qe);
  return /* @__PURE__ */ H.jsxs(rf, K({
    as: lt,
    className: Fe(Nr.root, s),
    ownerState: Qe,
    onBlur: Jt,
    onClick: p,
    onContextMenu: we,
    onFocus: ut,
    onKeyDown: $t,
    onKeyUp: jr,
    onMouseDown: q,
    onMouseLeave: C,
    onMouseUp: Se,
    onDragLeave: T,
    onTouchEnd: je,
    onTouchMove: nt,
    onTouchStart: Me,
    ref: Qt,
    tabIndex: l ? -1 : U,
    type: se
  }, Je, Q, {
    children: [i, B ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ H.jsx(ya, K({
        ref: Pe,
        center: a
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ys,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: y.bool,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ws,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: y.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: y.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: y.string,
  /**
   * @ignore
   */
  href: y.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: y.elementType,
  /**
   * @ignore
   */
  onBlur: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * @ignore
   */
  onContextMenu: y.func,
  /**
   * @ignore
   */
  onDragLeave: y.func,
  /**
   * @ignore
   */
  onFocus: y.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: y.func,
  /**
   * @ignore
   */
  onKeyDown: y.func,
  /**
   * @ignore
   */
  onKeyUp: y.func,
  /**
   * @ignore
   */
  onMouseDown: y.func,
  /**
   * @ignore
   */
  onMouseLeave: y.func,
  /**
   * @ignore
   */
  onMouseUp: y.func,
  /**
   * @ignore
   */
  onTouchEnd: y.func,
  /**
   * @ignore
   */
  onTouchMove: y.func,
  /**
   * @ignore
   */
  onTouchStart: y.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @default 0
   */
  tabIndex: y.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: y.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: y.oneOfType([y.func, y.shape({
    current: y.shape({
      pulsate: y.func.isRequired,
      start: y.func.isRequired,
      stop: y.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string])
});
const Mo = Ae(ga)(({ theme: e }) => ({
  padding: e.spacing(1),
  borderRadius: "50%",
  color: e.palette.text.primary
})), nf = ct("div")(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: e.spacing(1)
})), of = Ae("div")({
  display: "flex",
  flexDirection: "column"
}), af = Ae("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 2
});
function sf(e) {
  return Xt("MuiTypography", e);
}
Dr("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const cf = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], uf = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: a,
    classes: i
  } = e, s = {
    root: ["root", a, e.align !== "inherit" && `align${Ge(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return gn(s, sf, i);
}, lf = ct("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Ge(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => K({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), ko = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, ff = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, df = (e) => ff[e] || e, ba = /* @__PURE__ */ z.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiTypography"
  }), o = df(n.color), a = sa(K({}, n, {
    color: o
  })), {
    align: i = "inherit",
    className: s,
    component: u,
    gutterBottom: l = !1,
    noWrap: f = !1,
    paragraph: h = !1,
    variant: d = "body1",
    variantMapping: E = ko
  } = a, b = Ve(a, cf), p = K({}, a, {
    align: i,
    color: o,
    className: s,
    component: u,
    gutterBottom: l,
    noWrap: f,
    paragraph: h,
    variant: d,
    variantMapping: E
  }), m = u || (h ? "p" : E[d] || ko[d]) || "span", x = uf(p);
  return /* @__PURE__ */ H.jsx(lf, K({
    as: m,
    ref: r,
    ownerState: p,
    className: Fe(x.root, s)
  }, b));
});
process.env.NODE_ENV !== "production" && (ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: y.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: y.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: y.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: y.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: y.oneOfType([y.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), y.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: y.object
});
const pf = Ae(ba)(({ theme: e }) => ({
  color: e.palette.text.secondary,
  textAlign: "center",
  width: "100%"
})), hf = Ae("div", {
  shouldForwardProp: (e) => ![
    "isToday",
    "direction",
    "isInRange",
    "isRangeEnd",
    "isRangeStart",
    "isInPreviewingRange"
  ].includes(e)
})(({
  theme: e,
  isToday: t,
  direction: r,
  isInRange: n,
  isRangeEnd: o,
  isRangeStart: a,
  isInPreviewingRange: i
}) => ({
  ...n && {
    borderRadius: 0,
    backgroundColor: e.palette.action.selected
  },
  ...a && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    paddingLeft: 0
  },
  ...o && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    paddingRight: 0
  },
  ":first-of-type": {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    "> div": {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      borderLeftColor: i && !n ? e.palette.info.main : "transparent"
    }
  },
  ":last-of-type": {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    "> div": {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      borderRightColor: i && !n ? e.palette.info.main : "transparent"
    }
  },
  "&:hover": {
    "> div": {
      ...i && !n && {
        borderColor: a || o ? "transparent" : r === "right" ? `${e.palette.info.main} ${e.palette.info.main} ${e.palette.info.main} transparent` : `${e.palette.info.main} transparent ${e.palette.info.main} ${e.palette.info.main}`,
        borderRadius: r === "right" ? "0px 50% 50% 0px" : "50% 0px 0px 50%"
      },
      ...n && a && {
        borderColor: "transparent",
        borderRadius: r === "left" ? "0px 50% 50% 0px" : "50% 0px 0px 50%"
      },
      ...n && o && {
        borderColor: "transparent",
        borderRadius: r === "left" ? "0px 50% 50% 0px" : "50% 0px 0px 50%"
      },
      "> button": {
        ...!t && !n && !a && !o && {
          backgroundColor: e.palette.action.selected,
          border: `1px solid ${e.palette.info.dark}`
        }
      }
    },
    ":first-of-type": {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
      "> div": {
        borderTopLeftRadius: "50%",
        borderBottomLeftRadius: "50%",
        borderLeftColor: i && !n ? e.palette.info.main : "transparent"
      }
    },
    ":last-of-type": {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      "> div": {
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "50%",
        borderRightColor: i && !n ? e.palette.info.main : "transparent"
      }
    }
  }
})), mf = Ae("div", {
  shouldForwardProp: (e) => ![
    "isToday",
    "direction",
    "isInRange",
    "isRangeEnd",
    "isRangeStart",
    "isInPreviewingRange"
  ].includes(e)
})(({
  theme: e,
  isToday: t,
  isInPreviewingRange: r,
  isRangeStart: n,
  isRangeEnd: o,
  isInRange: a,
  direction: i
}) => {
  const s = "2px solid transparent", u = "2px dashed transparent", l = `${e.palette.info.main} transparent ${e.palette.info.main} transparent`, f = `${e.palette.info.main} transparent`, h = i === "left" ? `${e.palette.info.main} ${e.palette.info.main} ${e.palette.info.main} transparent` : `${e.palette.info.main} transparent ${e.palette.info.main} ${e.palette.info.main}`, d = `${e.palette.info.main} ${e.palette.info.main} ${e.palette.info.main} transparent`;
  return {
    border: r ? u : s,
    ...r && !a && {
      borderRadius: 0,
      borderImage: "initial",
      borderColor: t ? l : f
    },
    ...r && n && {
      borderRadius: i === "left" ? "0px 50% 50% 0px" : "50% 0px 0px 50%",
      borderImage: "initial",
      borderColor: h
    },
    ...r && o && {
      borderRadius: "0px 50% 50% 0px",
      borderImage: "initial",
      borderColor: d
    }
  };
}), yf = ct(Na, {
  shouldForwardProp: (e) => ![
    "isToday",
    "direction",
    "isInRange",
    "isRangeEnd",
    "isRangeStart",
    "isInPreviewingRange"
  ].includes(e)
})(({ theme: e, isToday: t, isRangeStart: r, isRangeEnd: n }) => ({
  ...e.typography.button,
  border: t ? `1px solid ${e.palette.info.dark}` : "none",
  background: "none",
  borderRadius: "50%",
  width: 36,
  height: 36,
  margin: 0,
  padding: 0,
  transform: "scale(1.1)",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: e.palette.text.primary,
  ...r || n ? {
    backgroundColor: e.palette.primary.main,
    fontWeight: 500
  } : {}
})), gf = Ae("div")({
  display: "block",
  position: "relative",
  overflowX: "hidden",
  minWidth: 280,
  minHeight: 252
}), bf = ({ children: e, direction: t }) => /* @__PURE__ */ H.jsx(gf, { children: /* @__PURE__ */ H.jsx(Ia, { direction: t, in: !0, children: e }) }), vf = Ae("div")(() => ({
  background: "none",
  borderRadius: "50%",
  width: 36,
  height: 36,
  margin: 0,
  padding: 0,
  transform: "scale(1.1)"
})), wf = Ae("div")({
  border: "2px solid transparent"
}), Ef = () => /* @__PURE__ */ H.jsx("div", { children: /* @__PURE__ */ H.jsx(wf, { children: /* @__PURE__ */ H.jsx(vf, { role: "gridcell" }) }) });
function xf(e) {
  return Xt("MuiSvgIcon", e);
}
Dr("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Tf = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Of = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ge(t)}`, `fontSize${Ge(r)}`]
  };
  return gn(o, xf, n);
}, Sf = ct("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Ge(r.color)}`], t[`fontSize${Ge(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a, i, s, u, l, f, h, d, E, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (i = a.pxToRem) == null ? void 0 : i.call(a, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (u = s.pxToRem) == null ? void 0 : u.call(s, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (h = (d = (e.vars || e).palette) == null || (d = d[t.color]) == null ? void 0 : d.main) != null ? h : {
      action: (E = (e.vars || e).palette) == null || (E = E.action) == null ? void 0 : E.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[t.color]
  };
}), yr = /* @__PURE__ */ z.forwardRef(function(t, r) {
  const n = $r({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: i = "inherit",
    component: s = "svg",
    fontSize: u = "medium",
    htmlColor: l,
    inheritViewBox: f = !1,
    titleAccess: h,
    viewBox: d = "0 0 24 24"
  } = n, E = Ve(n, Tf), b = /* @__PURE__ */ z.isValidElement(o) && o.type === "svg", p = K({}, n, {
    color: i,
    component: s,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: d,
    hasSvgAsChild: b
  }), m = {};
  f || (m.viewBox = d);
  const x = Of(p);
  return /* @__PURE__ */ H.jsxs(Sf, K({
    as: s,
    className: Fe(x.root, a),
    focusable: "false",
    color: l,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r
  }, m, E, b && o.props, {
    ownerState: p,
    children: [b ? o.props.children : o, h ? /* @__PURE__ */ H.jsx("title", {
      children: h
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: y.oneOfType([y.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: y.oneOfType([y.oneOf(["inherit", "large", "medium", "small"]), y.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: y.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: y.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: y.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: y.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: y.string
});
yr.muiName = "SvgIcon";
function va(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ H.jsx(yr, K({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = yr.muiName, /* @__PURE__ */ z.memo(/* @__PURE__ */ z.forwardRef(r));
}
const _f = va(/* @__PURE__ */ H.jsx("path", {
  d: "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"
}), "KeyboardArrowLeft"), Rf = va(/* @__PURE__ */ H.jsx("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
}), "KeyboardArrowRight"), kf = ({
  styles: e,
  startDate: t,
  endDate: r,
  onDateRangeChange: n,
  onDateRangeIsSelected: o
}) => {
  const [a, i] = pt(/* @__PURE__ */ new Date()), [s, u] = pt(t ?? null), [l, f] = pt(r ?? null), [h, d] = pt(null), [E, b] = pt("left"), [p, m] = pt(nn(/* @__PURE__ */ new Date())), x = (_) => {
    m(
      (U) => _ === "prev" ? ts(U, 1) : Ao(U, 1)
    ), b(_ === "prev" ? "left" : "right");
  };
  Lr(() => {
    u(t ?? null);
  }, [t]), Lr(() => {
    f(r ?? null);
  }, [r]), Lr(() => {
    n && n(s, l), o && s && l && o(s, l);
  }, [s, l, n]);
  const R = h && s && qr(h, s) ? "left" : "right", M = Nn(() => !s || !l ? [] : rn({
    start: s,
    end: l
  }), [s, l]);
  function P(_) {
    return h ? s && Ke(s, a) ? _ >= s && _ <= h : l && Ke(l, a) ? l >= _ && _ >= h : !1 : !1;
  }
  const g = Nn(() => {
    if (!h || !a || !s)
      return [];
    const _ = Ke(s, a) ? a : h, U = Ke(s, a) ? h : a;
    return rn({
      start: _,
      end: U
    }).filter(
      (X) => !M.some((se) => Ke(X, se)) && P(X)
    );
  }, [s, h, a, M]), j = rs(p), k = Zi(p, "MMMM yyyy"), de = (_) => {
    s === null ? (u(_), f(null)) : s !== null && l === null ? qr(_, s) ? u(_) : f(_) : qr(_, s) ? Ke(a, l) ? u(_) : (u(_), f(null)) : Un(_, s) ? Ke(a, s) ? f(_) : (Un(_, l) && f(null), u(_)) : (u(_), f(null)), i(_);
  }, Te = (_) => {
    d(_);
  }, le = () => {
    d(null);
  };
  return /* @__PURE__ */ H.jsxs(ns, { ...e, children: [
    /* @__PURE__ */ H.jsxs(os, { children: [
      /* @__PURE__ */ H.jsx(as, { children: k }),
      /* @__PURE__ */ H.jsxs(is, { children: [
        /* @__PURE__ */ H.jsx(Mo, { onClick: () => x("prev"), children: /* @__PURE__ */ H.jsx(_f, {}) }),
        /* @__PURE__ */ H.jsx(Mo, { onClick: () => x("next"), children: /* @__PURE__ */ H.jsx(Rf, {}) })
      ] })
    ] }),
    /* @__PURE__ */ H.jsx(nf, { children: ["S", "M", "T", "W", "T", "F", "S"].map((_, U) => /* @__PURE__ */ H.jsx(pf, { variant: "body2", children: _ }, `${_}-${U}`)) }),
    /* @__PURE__ */ H.jsx(
      bf,
      {
        width: e == null ? void 0 : e.width,
        direction: E,
        children: /* @__PURE__ */ H.jsx(of, { children: j.map((_, U) => /* @__PURE__ */ H.jsx(af, { children: _.map((F, X) => {
          if (!F)
            return /* @__PURE__ */ H.jsx(Ef, {}, X);
          const se = Yr(F, /* @__PURE__ */ new Date()), Q = !!s && Yr(F, s), pe = !!l && Yr(F, l), ue = M.some((v) => Ke(v, F)), Pe = g.some(
            (v) => Ke(v, F)
          );
          return /* @__PURE__ */ H.jsx(
            hf,
            {
              onClick: () => de(F),
              onMouseEnter: () => Te(F),
              onMouseLeave: le,
              isInRange: ue,
              isInPreviewingRange: Pe,
              isRangeStart: Q,
              isRangeEnd: pe,
              direction: R,
              isToday: se,
              children: /* @__PURE__ */ H.jsx(
                mf,
                {
                  direction: R,
                  isInRange: ue,
                  isInPreviewingRange: Pe,
                  isRangeStart: Q,
                  isRangeEnd: pe,
                  isToday: se,
                  children: /* @__PURE__ */ H.jsx(
                    yf,
                    {
                      isToday: se,
                      isRangeStart: Q,
                      isRangeEnd: pe,
                      children: F.getDate()
                    }
                  )
                }
              )
            },
            F.toISOString()
          );
        }) }, U)) })
      },
      p.toString()
    )
  ] });
}, Df = Rt({
  palette: {
    primary: {
      main: "#4169E1",
      light: "#6A83E8",
      dark: "#27408B"
    },
    secondary: {
      main: "#1E90FF"
    },
    background: {
      default: "#E3EFFF",
      paper: "#C7DFFF"
    },
    text: {
      primary: "#27408B",
      secondary: "#6A83E8",
      disabled: "#A0C8FF"
    },
    action: {
      hover: "rgba(65, 105, 225, 0.1)",
      selected: "rgba(65, 105, 225, 0.2)",
      disabled: "rgba(65, 105, 225, 0.3)",
      focus: "rgba(65, 105, 225, 0.5)"
    },
    info: {
      main: "rgba(65, 105, 225, 0.3)",
      dark: "rgba(65, 105, 225, 0.7)"
    },
    divider: "rgba(65, 105, 225, 0.2)"
  }
}), Af = Rt({
  palette: {
    primary: {
      main: "#E91E63",
      light: "#F48FB1",
      dark: "#C2185B"
    },
    secondary: {
      main: "#D81B60"
    },
    background: {
      default: "#FDE2E4",
      paper: "#FAD1D7"
    },
    text: {
      primary: "#880E4F",
      secondary: "#AD1457",
      disabled: "#F8BBD0"
    },
    action: {
      hover: "rgba(233, 30, 99, 0.1)",
      selected: "rgba(233, 30, 99, 0.2)",
      disabled: "rgba(233, 30, 99, 0.3)",
      focus: "rgba(233, 30, 99, 0.5)"
    },
    info: {
      main: "rgba(233, 30, 99, 0.3)",
      dark: "rgba(233, 30, 99, 0.7)"
    },
    divider: "rgba(233, 30, 99, 0.2)"
  }
}), jf = Rt({
  palette: {
    primary: {
      main: "#388E3C",
      light: "#66BB6A",
      dark: "#2E7D32"
    },
    secondary: {
      main: "#43A047"
    },
    background: {
      default: "#E8F5E9",
      paper: "#C8E6C9"
    },
    text: {
      primary: "#1B5E20",
      secondary: "#388E3C",
      disabled: "#A5D6A7"
    },
    action: {
      hover: "rgba(56, 142, 60, 0.1)",
      selected: "rgba(56, 142, 60, 0.2)",
      disabled: "rgba(56, 142, 60, 0.3)",
      focus: "rgba(56, 142, 60, 0.5)"
    },
    info: {
      main: "rgba(56, 142, 60, 0.3)",
      dark: "rgba(56, 142, 60, 0.7)"
    },
    divider: "rgba(56, 142, 60, 0.2)"
  }
}), Nf = Rt({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#dc004e"
    },
    background: {
      default: "#f0f0f0",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#000000",
      secondary: "#5f6368"
    },
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(25, 118, 210, 0.12)"
    },
    info: {
      main: "rgba(0, 0, 0, 0.12)",
      dark: "rgba(0, 0, 0, 0.6)"
    },
    divider: "rgba(0, 0, 0, 0.12)"
  }
}), If = Rt({
  palette: {
    primary: {
      main: "rgb(144, 202, 249)"
    },
    secondary: {
      main: "#03dac6"
    },
    background: {
      default: "#121212",
      paper: "#424242"
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)"
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(144, 202, 249, 0.12)"
    },
    info: {
      main: "rgba(255, 255, 255, 0.12)",
      dark: "rgba(255, 255, 255, 0.6)"
    },
    divider: "rgba(255, 255, 255, 0.12)"
  }
});
export {
  kf as Calendar,
  If as darkTheme,
  jf as greenTheme,
  Nf as lightTheme,
  Af as pinkTheme,
  Df as royalBlueTheme
};
