function a(c,r,o){return new Promise((n,t)=>{typeof r>"u"&&(r={async:!0}),typeof o>"u"&&(o={defer:!0});const e=document.createElement("script");e.src=c,e.async=r.async,e.defer=o.defer,e.onload=()=>n(e),e.onerror=()=>t(new Error(`Script load error for ${c}`)),document.head.append(e)})}export{a as loadScript};
//# sourceMappingURL=scriptLoader.js.map
