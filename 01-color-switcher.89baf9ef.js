const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),d=document.querySelector("body");let o;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,o=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(o),e.disabled=!1,t.disabled=!0})),e.style.padding="10px 20px",e.style.fontSize="16px",e.style.borderRadius="5px",e.style.color="green",e.style.border="none",t.style.padding="10px 20px",t.style.fontSize="16px",t.style.borderRadius="5px",t.style.color="red",t.style.border="none";
//# sourceMappingURL=01-color-switcher.89baf9ef.js.map
