import { f as Jl, a as bs, U as Ut, B as Bs, g as ec } from "./indexhtml-Du5GXi90.js";
import { o } from "./base-panel-DqpMqJVg-QyC0W447.js";
import { r as r$1 } from "./icons-BIim_4GH-BMrlUyZf.js";
const m = "copilot-shortcuts-panel{font:var(--font-xsmall);padding:var(--space-200);display:flex;flex-direction:column;gap:var(--space-50)}copilot-shortcuts-panel h3{font:var(--font-xsmall-strong);margin:0;padding:0}copilot-shortcuts-panel h3:not(:first-of-type){margin-top:var(--space-200)}copilot-shortcuts-panel ul{list-style:none;margin:0;padding:0 var(--space-50);display:flex;flex-direction:column}copilot-shortcuts-panel ul li{display:flex;align-items:center;gap:var(--space-150);padding:var(--space-75) 0}copilot-shortcuts-panel ul li:not(:last-of-type){border-bottom:1px dashed var(--border-color)}copilot-shortcuts-panel ul li svg{height:16px;width:16px}copilot-shortcuts-panel ul li .kbds{flex:1;text-align:right}copilot-shortcuts-panel kbd{display:inline-block;border-radius:var(--radius-1);border:1px solid var(--border-color);min-width:1em;min-height:1em;text-align:center;margin:0 .1em;padding:.25em;box-sizing:border-box;font-size:var(--font-size-1);font-family:var(--font-family);line-height:1}";
var v = (i, s, n, a) => {
  for (var o2 = s, r = i.length - 1, p; r >= 0; r--)
    (p = i[r]) && (o2 = p(o2) || o2);
  return o2;
};
let c = class extends o {
  render() {
    return Ut`<style>
        ${m}
      </style>
      <h3>Global</h3>
      <ul>
        <li>${r$1.vaadinLogo} Copilot ${t(ec.toggleCopilot)}</li>
        <li>${r$1.terminal} Command window ${t(ec.toggleCommandWindow)}</li>
        <li>${r$1.undo} Undo ${t(ec.undo)}</li>
        <li>${r$1.redo} Redo ${t(ec.redo)}</li>
      </ul>
      <h3>Selected component</h3>
      <ul>
        <li>${r$1.code} Go to source ${t(ec.goToSource)}</li>
        <li>${r$1.copy} Copy ${t(ec.copy)}</li>
        <li>${r$1.paste} Paste ${t(ec.paste)}</li>
        <li>${r$1.duplicate} Duplicate ${t(ec.duplicate)}</li>
        <li>${r$1.userUp} Select parent ${t(ec.selectParent)}</li>
        <li>${r$1.userLeft} Select previous sibling ${t(ec.selectPreviousSibling)}</li>
        <li>${r$1.userRight} Select first child / next sibling ${t(ec.selectNextSibling)}</li>
        <li>${r$1.trash} Delete ${t(ec.delete)}</li>
      </ul>`;
  }
};
c = v([
  bs("copilot-shortcuts-panel")
], c);
function t(i) {
  return Ut`<span class="kbds">${Bs(i)}</span>`;
}
const x = Jl({
  header: "Keyboard Shortcuts",
  tag: "copilot-shortcuts-panel",
  width: 400,
  height: 550,
  floatingPosition: {
    top: 50,
    left: 50
  }
}), y = {
  init(i) {
    i.addPanel(x);
  }
};
window.Vaadin.copilot.plugins.push(y);
