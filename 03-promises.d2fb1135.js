!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},u={position:"right-bottom",borderRadius:"5px",cssAnimationStyle:"from-top",clickToClose:!0};function a(e,o){var t=Math.random()>.3;return new Promise((function(n,r){setTimeout((function(){t?n({position:e,delay:o}):r({position:e,delay:o})}),o)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(i.delay.value),t=Number(i.step.value),n=Number(i.amount.value),c=1;c<=n;c++){a(c,o+t*c).then((function(e){var o=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"),u)})).catch((function(e){var o=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"),u)}))}i.form.reset()}))}();
//# sourceMappingURL=03-promises.d2fb1135.js.map
