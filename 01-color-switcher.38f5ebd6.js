const t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let e;function o(){t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnStop.disabled=!0,t.bodyEl.addEventListener("click",(function(n){n.target===t.btnStart?(e=setInterval(o,1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1):n.target===t.btnStop&&(clearInterval(e),t.btnStart.disabled=!1,t.btnStop.disabled=!0)}));
//# sourceMappingURL=01-color-switcher.38f5ebd6.js.map