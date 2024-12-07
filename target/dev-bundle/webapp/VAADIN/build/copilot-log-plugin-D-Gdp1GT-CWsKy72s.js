import { b as b$1, J as Ji, G as Gi, I as Il, U as Ut, m as mt, o as os, t as tn, R as Rs, O as O$1, Z as Zt, a as bs } from "./indexhtml-Du5GXi90.js";
import { g as g$1 } from "./state-u4Ab_TUl-BngqUgIa.js";
import { o } from "./base-panel-DqpMqJVg-QyC0W447.js";
import { r as r$1 } from "./icons-BIim_4GH-BMrlUyZf.js";
const C = "copilot-log-panel{padding:var(--space-100);font:var(--font-xsmall);display:flex;flex-direction:column;gap:var(--space-50);overflow-y:auto;max-width:100vw}copilot-log-panel .row{display:flex;align-items:flex-start;padding:var(--space-50) var(--space-100);border-radius:var(--radius-2);gap:var(--space-100)}copilot-log-panel .row.information{background-color:var(--blue-50)}copilot-log-panel .row.warning{background-color:var(--yellow-50)}copilot-log-panel .row.error{background-color:var(--red-50)}copilot-log-panel .type{margin-top:var(--space-25)}copilot-log-panel .type.error{color:var(--red)}copilot-log-panel .type.warning{color:var(--yellow)}copilot-log-panel .type.info{color:var(--color)}copilot-log-panel .message{display:flex;flex-direction:column;flex-grow:1;gap:var(--space-25);overflow:hidden}copilot-log-panel .message>*:not(.expanded){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}copilot-log-panel .message>.expanded{overflow-wrap:break-word}copilot-log-panel .firstrow{display:flex;align-items:baseline;gap:.5em;flex-direction:column}copilot-log-panel .firstrowmessage{width:100%;overflow:hidden;text-overflow:ellipsis}copilot-log-panel button{padding:0;border:0;background:transparent}copilot-log-panel svg{height:12px;width:12px}copilot-log-panel .secondrow,copilot-log-panel .timestamp{font-size:var(--font-size-0);line-height:var(--line-height-1)}copilot-log-panel .expand span{height:12px;width:12px}";
var I = Object.defineProperty, q = Object.getOwnPropertyDescriptor, h = (e, t, a, o2) => {
  for (var s = o2 > 1 ? void 0 : o2 ? q(t, a) : t, p = e.length - 1, i; p >= 0; p--)
    (i = e[p]) && (s = (o2 ? i(t, a, s) : i(s)) || s);
  return o2 && s && I(t, a, s), s;
};
class B {
  constructor() {
    this.showTimestamps = false, Zt(this);
  }
  toggleShowTimestamps() {
    this.showTimestamps = !this.showTimestamps;
  }
}
const g = new B();
let r = class extends o {
  constructor() {
    super(...arguments), this.unreadErrors = false, this.messages = [], this.nextMessageId = 1, this.transitionDuration = 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("log", (e) => {
      this.handleLogEventData({ type: e.data.type, message: e.data.message });
    }), this.onEventBus("log", (e) => this.handleLogEvent(e)), this.onEventBus("update-log", (e) => this.updateLog(e.detail)), this.onEventBus("notification-shown", (e) => this.handleNotification(e)), this.onEventBus("clear-log", () => this.clear()), this.reaction(
      () => b$1.sectionPanelResizing,
      () => {
        this.requestUpdate();
      }
    ), this.transitionDuration = parseInt(
      window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),
      10
    ), Ji((e) => {
      this.log(e.type, e.message, !!e.internal, e.details, e.link);
    }), Gi.forEach((e) => {
      this.log(e.type, e.message, !!e.internal, e.details, e.link);
    }), Gi.length = 0;
  }
  clear() {
    this.messages = [];
  }
  handleNotification(e) {
    this.log(e.detail.type, e.detail.message, true, e.detail.details, e.detail.link, void 0);
  }
  handleLogEvent(e) {
    this.handleLogEventData(e.detail);
  }
  handleLogEventData(e) {
    this.log(
      e.type,
      e.message,
      !!e.internal,
      e.details,
      e.link,
      Il(e.expandedMessage),
      Il(e.expandedDetails),
      e.id
    );
  }
  activate() {
    this.unreadErrors = false, this.updateComplete.then(() => {
      const e = this.renderRoot.querySelector(".message:last-child");
      e && e.scrollIntoView();
    });
  }
  render() {
    return Ut`<style>
        ${C}
      </style>
      ${this.messages.map((e) => this.renderMessage(e))} `;
  }
  renderMessage(e) {
    let t, a, o2;
    return e.type === mt.ERROR ? (t = "error", o2 = r$1.exclamationMark, a = "Error") : e.type === mt.WARNING ? (t = "warning", o2 = r$1.warning, a = "Warning") : (t = "info", o2 = r$1.info, a = "Info"), e.internal && (t += " internal"), Ut`
      <div
        data-id="${e.id}"
        class="row ${e.type} ${e.details || e.link ? "has-details" : ""}">
        <span class="type ${t}" title="${a}">${o2}</span>
        <div class="message" @click=${() => this.toggleExpanded(e)}>
          <span class="firstrow">
            <span class="timestamp" ?hidden=${!g.showTimestamps}>${W(e.timestamp)}</span>
            <span class="firstrowmessage"
              >${e.expanded && e.expandedMessage ? e.expandedMessage : e.message}
            </span>
          </span>
          ${e.expanded ? Ut` <span class="secondrow expanded">${e.expandedDetails ?? e.details}</span>` : Ut`<span class="secondrow" ?hidden="${!e.details && !e.link}"
                >${Il(e.details)}
                ${e.link ? Ut`<a class="ahreflike" href="${e.link}" target="_blank">Learn more</a>` : ""}</span
              >`}
        </div>
        <button
          aria-label="Expand details"
          theme="icon tertiary"
          class="expand"
          @click=${() => this.toggleExpanded(e)}
          ?hidden=${!this.canBeExpanded(e)}>
          <span>${e.expanded ? r$1.chevronDown : r$1.chevronRight}</span>
        </button>
      </div>
    `;
  }
  log(e, t, a, o2, s, p, i, y) {
    const $ = this.nextMessageId;
    this.nextMessageId += 1, i || (i = t);
    const u = {
      id: $,
      type: e,
      message: t,
      details: o2,
      link: s,
      dontShowAgain: false,
      deleted: false,
      expanded: false,
      expandedMessage: p,
      expandedDetails: i,
      timestamp: /* @__PURE__ */ new Date(),
      internal: a,
      userId: y
    };
    for (this.messages.push(u); this.messages.length > r.MAX_LOG_ROWS; )
      this.messages.shift();
    return this.requestUpdate(), this.updateComplete.then(() => {
      const f = this.renderRoot.querySelector(".message:last-child");
      f ? (setTimeout(() => f.scrollIntoView({ behavior: "smooth" }), this.transitionDuration), this.unreadErrors = false) : e === mt.ERROR && (this.unreadErrors = true);
    }), u;
  }
  updateLog(e) {
    let t = this.messages.find((a) => a.userId === e.id);
    t || (t = this.log(mt.INFORMATION, "<Log message to update was not found>", false)), Object.assign(t, e), os(t.expandedDetails) && (t.expandedDetails = Il(t.expandedDetails)), this.requestUpdate();
  }
  updated() {
    var _a;
    const e = this.querySelector(".row:last-child");
    e && this.isTooLong(e.querySelector(".firstrowmessage")) && ((_a = e.querySelector("button.expand")) == null ? void 0 : _a.removeAttribute("hidden"));
  }
  toggleExpanded(e) {
    this.canBeExpanded(e) && (e.expanded = !e.expanded, this.requestUpdate()), tn("use-log", { source: "toggleExpanded" });
  }
  canBeExpanded(e) {
    var _a;
    if (e.expandedMessage || e.expanded)
      return true;
    const t = (_a = this.querySelector(`[data\\-id="${e.id}"]`)) == null ? void 0 : _a.querySelector(
      ".firstrowmessage"
    );
    return this.isTooLong(t);
  }
  isTooLong(e) {
    return e && e.offsetWidth < e.scrollWidth;
  }
};
r.MAX_LOG_ROWS = 1e3;
h([
  g$1()
], r.prototype, "unreadErrors", 2);
h([
  g$1()
], r.prototype, "messages", 2);
r = h([
  bs("copilot-log-panel")
], r);
let w = class extends Rs {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.style.display = "flex";
  }
  render() {
    return Ut`
      <button title="Clear log" aria-label="Clear log" theme="icon tertiary">
        <span
          @click=${() => {
      O$1.emit("clear-log", {});
    }}
          >${r$1.trash}</span
        >
      </button>
      <button title="Toggle timestamps" aria-label="Toggle timestamps" theme="icon tertiary">
        <span
          class="${g.showTimestamps ? "on" : "off"}"
          @click=${() => {
      g.toggleShowTimestamps();
    }}
          >${r$1.clock}</span
        >
      </button>
    `;
  }
};
w = h([
  bs("copilot-log-panel-actions")
], w);
const _ = {
  header: "Log",
  expanded: true,
  panelOrder: 0,
  panel: "bottom",
  floating: false,
  tag: "copilot-log-panel",
  actionsTag: "copilot-log-panel-actions"
}, b = {
  init(e) {
    e.addPanel(_);
  }
};
window.Vaadin.copilot.plugins.push(b);
const P = { hour: "numeric", minute: "numeric", second: "numeric", fractionalSecondDigits: 3 }, A = new Intl.DateTimeFormat(navigator.language, P);
function W(e) {
  return A.format(e);
}
export {
  w as Actions,
  r as CopilotLogPanel
};
