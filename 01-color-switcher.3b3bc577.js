!function(){var t,o={bodyEl:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};function e(){o.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}o.btnStop.disabled=!0,o.bodyEl.addEventListener("click",(function(n){n.target===o.btnStart?(t=setInterval(e,1e3),o.btnStart.disabled=!0,o.btnStop.disabled=!1):n.target===o.btnStop&&(clearInterval(t),o.btnStart.disabled=!1,o.btnStop.disabled=!0)}))}();
//# sourceMappingURL=01-color-switcher.3b3bc577.js.map
