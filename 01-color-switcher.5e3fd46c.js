!function(){var e,t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,o.disabled=!1,e=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),o.addEventListener("click",(function(){clearInterval(e),t.disabled=!1,o.disabled=!0})),t.style.padding="10px 20px",t.style.fontSize="16px",t.style.borderRadius="5px",t.style.color="green",t.style.border="none",o.style.padding="10px 20px",o.style.fontSize="16px",o.style.borderRadius="5px",o.style.color="red",o.style.border="none"}();
//# sourceMappingURL=01-color-switcher.5e3fd46c.js.map
