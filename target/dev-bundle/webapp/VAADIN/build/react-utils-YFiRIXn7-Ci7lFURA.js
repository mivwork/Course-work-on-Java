function K(e) {
  return e === void 0 ? false : e.nodeId >= 0;
}
function L(e) {
  if (e.javaClass)
    return e.javaClass.substring(e.javaClass.lastIndexOf(".") + 1);
}
function W(e) {
  const t = window.Vaadin;
  if (t && t.Flow) {
    const { clients: n } = t.Flow, r = Object.keys(n);
    for (const o of r) {
      const a = n[o];
      if (a.getNodeId) {
        const u = a.getNodeId(e);
        if (u >= 0) {
          const l = a.getNodeInfo(u);
          return { nodeId: u, uiId: a.getUIId(), element: e, javaClass: l.javaClass, styles: l.styles };
        }
      }
    }
  }
}
function k() {
  const e = window.Vaadin;
  let t;
  if (e && e.Flow) {
    const { clients: n } = e.Flow, r = Object.keys(n);
    for (const o of r) {
      const a = n[o];
      a.getUIId && (t = a.getUIId());
    }
  }
  return t;
}
function q(e) {
  return {
    uiId: e.uiId,
    nodeId: e.nodeId
  };
}
function V(e) {
  var _a;
  return e ? ((_a = e.type) == null ? void 0 : _a.type) === "FlowContainer" : false;
}
function z(e) {
  return e.localName.startsWith("flow-container");
}
const _ = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), C = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), R = Symbol.for("react.lazy");
function h(e, t, n) {
  const r = e.displayName;
  if (r)
    return r;
  const o = t.displayName || t.name || "";
  return o !== "" ? `${n}(${o})` : n;
}
function f(e) {
  return e.displayName || "Context";
}
function i(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case g:
      return "Fragment";
    case _:
      return "Portal";
    case I:
      return "Profiler";
    case S:
      return "StrictMode";
    case T:
      return "Suspense";
    case N:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case C:
        return `${f(e)}.Consumer`;
      case E:
        return `${f(e._context)}.Provider`;
      case d:
        return h(e, e.render, "ForwardRef");
      case F:
        const t = e.displayName || null;
        return t !== null ? t : i(e.type) || "Memo";
      case R: {
        const n = e, r = n._payload, o = n._init;
        try {
          return i(o(r));
        } catch {
          return null;
        }
      }
    }
  return null;
}
let s;
function G() {
  const e = /* @__PURE__ */ new Set();
  return Array.from(document.body.querySelectorAll("*")).flatMap(A).filter(v).filter((n) => !n.fileName.endsWith("frontend/generated/flow/Flow.tsx")).forEach((n) => e.add(n.fileName)), Array.from(e);
}
function v(e) {
  return !!e && e.fileName;
}
function w(e) {
  return (e == null ? void 0 : e._debugSource) || void 0;
}
function P(e) {
  var _a;
  if (e && ((_a = e.type) == null ? void 0 : _a.__debugSourceDefine))
    return e.type.__debugSourceDefine;
}
function A(e) {
  return w(p(e));
}
function b() {
  return `__reactFiber$${m()}`;
}
function O() {
  return `__reactContainer$${m()}`;
}
function m() {
  if (!(!s && (s = Array.from(document.querySelectorAll("*")).flatMap((e) => Object.keys(e)).filter((e) => e.startsWith("__reactFiber$")).map((e) => e.replace("__reactFiber$", "")).find((e) => e), !s)))
    return s;
}
function $(e) {
  const t = e.type;
  return (t == null ? void 0 : t.$$typeof) === d && !t.displayName && e.child ? $(e.child) : i(e.type) ?? i(e.elementType) ?? "???";
}
function J() {
  const e = Array.from(document.querySelectorAll("body > *")).flatMap((n) => n[O()]).find((n) => n), t = c(e);
  return c(t == null ? void 0 : t.child);
}
function Y(e) {
  const t = [];
  let n = c(e.child);
  for (; n; )
    t.push(n), n = c(n.sibling);
  return t;
}
const j = (e) => {
  const t = Y(e);
  if (t.length === 0)
    return [];
  const n = t.filter((r) => D(r) || U(r));
  return n.length === t.length ? t : t.flatMap((r) => n.includes(r) ? r : j(r));
};
function M(e) {
  return e.hasOwnProperty("entanglements") && e.hasOwnProperty("containerInfo");
}
function x(e) {
  return e.hasOwnProperty("stateNode") && e.hasOwnProperty("pendingProps");
}
function c(e) {
  const t = e == null ? void 0 : e.stateNode;
  if ((t == null ? void 0 : t.current) && (M(t) || x(t)))
    return t == null ? void 0 : t.current;
  if (!e)
    return;
  if (!e.alternate)
    return e;
  const n = e.alternate, r = e == null ? void 0 : e.actualStartTime, o = n == null ? void 0 : n.actualStartTime;
  return o !== r && o > r ? n : e;
}
function p(e) {
  const t = b(), n = c(e[t]);
  if (n == null ? void 0 : n._debugSource)
    return n;
  let r = (n == null ? void 0 : n.return) || void 0;
  for (; r && !r._debugSource; )
    r = r.return || void 0;
  return r;
}
function y(e) {
  var _a;
  if (((_a = e.stateNode) == null ? void 0 : _a.isConnected) === true)
    return e.stateNode;
  if (e.child)
    return y(e.child);
}
function D(e) {
  const t = y(e);
  return t && c(p(t)) === e;
}
function U(e) {
  return typeof e.type != "function" ? false : !!(e._debugSource || P(e));
}
export {
  $,
  D,
  G,
  J,
  K,
  L,
  P,
  V,
  W,
  c,
  j,
  k,
  p,
  q,
  w,
  y,
  z
};
