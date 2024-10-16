var Be=Object.defineProperty,Ie=(s,e,t)=>e in s?Be(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Oe=(s,e,t)=>Ie(s,typeof e!="symbol"?e+"":e,t);import{c as Se,S as je,i as ke,f as E,s as De,a as Ae,b as L,e as w,g as r,t as K,h as $,V as ie,l as _,p as J,J as G,o as b,r as Z,D as Ye,y as ae,B as re,C as qe,F as N,j as f,G as P,d as T,A as Ne,H as Pe,O as C}from"./svelte.js";import"./index.js";import{formatDisplayFileName as Te}from"./fileNameFormatter.js";function Ce(s){Ae(s,"svelte-1wl2lnd",`.grab.svelte-1wl2lnd.svelte-1wl2lnd{cursor:grab}.grab.svelte-1wl2lnd.svelte-1wl2lnd:active{cursor:grabbing}.dropzone.svelte-1wl2lnd.svelte-1wl2lnd{position:relative;background-color:#f4f4f4;height:var(--file-list-height, auto);min-height:var(--file-list-min-height, 500px);width:100%;border-radius:0.25rem;border:1px dashed #e6510030}.fullBorder.svelte-1wl2lnd.svelte-1wl2lnd{border:1px dashed var(--primary-color)}.info.svelte-1wl2lnd.svelte-1wl2lnd{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:inherit}.info.svelte-1wl2lnd a.svelte-1wl2lnd{color:var(--primary-color);cursor:pointer}.info.svelte-1wl2lnd a.svelte-1wl2lnd:hover{text-decoration:underline}.files.svelte-1wl2lnd.svelte-1wl2lnd{display:grid;grid-template-columns:repeat(4, minmax(0, 1fr));height:100%;padding:1rem;gap:1rem;overflow:auto}.add-more.svelte-1wl2lnd.svelte-1wl2lnd{position:absolute;display:flex;justify-content:center;align-items:center;cursor:pointer;width:40px;height:40px;right:20px;bottom:20px;border-radius:50%;background-color:var(--primary-color);fill:var(--text-on-primary)}.add-more.svelte-1wl2lnd svg.svelte-1wl2lnd{height:60%}.file.svelte-1wl2lnd.svelte-1wl2lnd{position:relative;grid-column:span 1 / span 1;display:flex;flex-direction:column;align-items:center}.file-name.svelte-1wl2lnd.svelte-1wl2lnd{width:100%;text-align:left;font-size:12px;font-weight:500;line-height:1.3;margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:rtl}.file-info.svelte-1wl2lnd.svelte-1wl2lnd{width:100%;padding:0 5% 0 0;display:flex;justify-content:space-between;color:#757575;font-size:11px;font-weight:400}.file-remove.svelte-1wl2lnd.svelte-1wl2lnd{cursor:pointer;position:absolute;top:0;right:0;padding:0;transform:translate(50%, -50%)}.file-icon.svelte-1wl2lnd.svelte-1wl2lnd{display:flex;justify-content:center;align-items:center;overflow:hidden;background-color:var(--file-list-background-color, #e5e5e5);fill:var(--text-on-primary);width:100%;height:100%}.file-icon.svelte-1wl2lnd img.svelte-1wl2lnd,.file-icon.svelte-1wl2lnd video.svelte-1wl2lnd{aspect-ratio:1 / 1;-o-object-fit:contain;object-fit:contain;width:100%;height:100%;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.audio-wrapper.svelte-1wl2lnd.svelte-1wl2lnd{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.audio-wrapper.svelte-1wl2lnd audio.svelte-1wl2lnd{height:100px;width:250px}.file-icon.svelte-1wl2lnd svg.svelte-1wl2lnd{height:50%}.loader.svelte-1wl2lnd.svelte-1wl2lnd{margin-top:50px;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.spinner.svelte-1wl2lnd.svelte-1wl2lnd{width:70px;height:70px;border-radius:50%;border:5px solid var(--primary-color);animation:svelte-1wl2lnd-spinner-bulqg1 0.8s infinite linear alternate,
      svelte-1wl2lnd-spinner-oaa3wk 1.6s infinite linear}@media(max-width: 900px){.files.svelte-1wl2lnd.svelte-1wl2lnd{grid-template-columns:repeat(3, minmax(0, 1fr))}}@media(max-width: 600px){.files.svelte-1wl2lnd.svelte-1wl2lnd{grid-template-columns:repeat(2, minmax(0, 1fr))}}@keyframes svelte-1wl2lnd-spinner-bulqg1{0%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@keyframes svelte-1wl2lnd-spinner-oaa3wk{0%{transform:scaleY(1) rotate(0deg)}49.99%{transform:scaleY(1) rotate(135deg)}50%{transform:scaleY(-1) rotate(0deg)}100%{transform:scaleY(-1) rotate(-135deg)}}`)}function oe(s,e,t){const n=s.slice();return n[54]=e[t],n[55]=e,n[56]=t,n}function de(s){let e;return{c(){e=w("label")},m(t,n){$(t,e,n),e.innerHTML=s[12]},p(t,n){n[0]&4096&&(e.innerHTML=t[12])},d(t){t&&b(e)}}}function Ue(s){let e,t,n,a,i,d=re(s[6]),m=[];for(let o=0;o<d.length;o+=1)m[o]=ce(oe(s,d,o));return{c(){e=w("div");for(let o=0;o<m.length;o+=1)m[o].c();t=L(),n=w("button"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="svelte-1wl2lnd"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>',r(e,"class","files svelte-1wl2lnd"),r(n,"type","button"),r(n,"class","add-more svelte-1wl2lnd")},m(o,x){$(o,e,x);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(e,null);$(o,t,x),$(o,n,x),a||(i=_(n,"click",J(s[39])),a=!0)},p(o,x){if(x[0]&272481){d=re(o[6]);let c;for(c=0;c<d.length;c+=1){const v=oe(o,d,c);m[c]?m[c].p(v,x):(m[c]=ce(v),m[c].c(),m[c].m(e,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=d.length}},d(o){o&&(b(e),b(t),b(n)),qe(m,o),a=!1,i()}}}function We(s){let e,t,n=s[0].DROP_FILES_HERE_OR+"",a,i,d,m=s[0].BROWSE_FILES+"",o,x,c,v;return{c(){e=w("div"),t=w("div"),a=N(n),i=L(),d=w("a"),o=N(m),r(d,"class","svelte-1wl2lnd"),r(e,"class","info svelte-1wl2lnd"),e.hidden=x=s[6].length!==0},m(y,V){$(y,e,V),f(e,t),f(t,a),f(t,i),f(t,d),f(d,o),c||(v=_(d,"click",s[35]),c=!0)},p(y,V){V[0]&1&&n!==(n=y[0].DROP_FILES_HERE_OR+"")&&P(a,n),V[0]&1&&m!==(m=y[0].BROWSE_FILES+"")&&P(o,m),V[0]&64&&x!==(x=y[6].length!==0)&&(e.hidden=x)},d(y){y&&b(e),c=!1,v()}}}function Xe(s){let e,t,n,a,i,d=s[0].DROP_YOUR_FILES_HERE+"",m,o,x;return{c(){e=w("div"),t=T("svg"),n=T("path"),a=L(),i=w("div"),m=N(d),r(n,"d","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"height","2em"),r(t,"viewBox","0 0 384 512"),r(e,"class","info svelte-1wl2lnd")},m(c,v){$(c,e,v),f(e,t),f(t,n),f(e,a),f(e,i),f(i,m),o||(x=[_(e,"dragleave",s[32]),_(e,"dragend",s[33]),_(e,"drop",J(s[34]))],o=!0)},p(c,v){v[0]&1&&d!==(d=c[0].DROP_YOUR_FILES_HERE+"")&&P(m,d)},d(c){c&&b(e),o=!1,Z(x)}}}function Ge(s){let e;return{c(){e=w("div"),e.innerHTML='<div class="spinner svelte-1wl2lnd"></div>',r(e,"class","loader svelte-1wl2lnd")},m(t,n){$(t,e,n)},p:G,d(t){t&&b(e)}}}function Ke(s){let e,t;return{c(){e=T("svg"),t=T("path"),r(t,"d","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"height","100px"),r(e,"viewBox","0 0 384 512"),r(e,"class","svelte-1wl2lnd")},m(n,a){$(n,e,a),f(e,t)},p:G,d(n){n&&b(e)}}}function Je(s){let e,t;return{c(){e=T("svg"),t=T("path"),r(t,"d","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"height","100px"),r(e,"viewBox","0 0 640 512"),r(e,"class","svelte-1wl2lnd")},m(n,a){$(n,e,a),f(e,t)},p:G,d(n){n&&b(e)}}}function Qe(s){let e;function t(i,d){if(i[54].type==="image")return tt;if(i[54].type==="video")return et;if(i[54].type==="audio")return Ze}let n=t(s),a=n&&n(s);return{c(){a&&a.c(),e=Pe()},m(i,d){a&&a.m(i,d),$(i,e,d)},p(i,d){n===(n=t(i))&&a?a.p(i,d):(a&&a.d(1),a=n&&n(i),a&&(a.c(),a.m(e.parentNode,e)))},d(i){i&&b(e),a&&a.d(i)}}}function Ze(s){let e,t,n,a;return{c(){e=w("div"),t=w("audio"),n=w("source"),C(n.src,a=s[54].src)||r(n,"src",a),t.controls=!0,r(t,"class","svelte-1wl2lnd"),r(e,"class","audio-wrapper svelte-1wl2lnd")},m(i,d){$(i,e,d),f(e,t),f(t,n)},p(i,d){d[0]&64&&!C(n.src,a=i[54].src)&&r(n,"src",a)},d(i){i&&b(e)}}}function et(s){let e,t,n;return{c(){e=w("video"),t=w("source"),C(t.src,n=s[54].src)||r(t,"src",n),e.controls=!0,r(e,"class","svelte-1wl2lnd")},m(a,i){$(a,e,i),f(e,t)},p(a,i){i[0]&64&&!C(t.src,n=a[54].src)&&r(t,"src",n)},d(a){a&&b(e)}}}function tt(s){let e,t,n;return{c(){e=w("img"),C(e.src,t=s[54].src)||r(e,"src",t),r(e,"alt",n=s[54].name),r(e,"class","svelte-1wl2lnd")},m(a,i){$(a,e,i)},p(a,i){i[0]&64&&!C(e.src,t=a[54].src)&&r(e,"src",t),i[0]&64&&n!==(n=a[54].name)&&r(e,"alt",n)},d(a){a&&b(e)}}}function ce(s){let e,t,n,a,i,d,m=s[54].displayedName+"",o,x,c,v,y=(s[54].size||"")+"",V,F,u,h=(s[54].saved?s[0].SAVED:"")+"",k,Y,O=s[56],q,H;function U(){return s[36](s[56])}function W(R,z){return R[54].src?Qe:R[54].external?Je:Ke}let D=W(s),p=D(s);function I(...R){return s[37](s[56],...R)}const S=()=>s[38](e,O),j=()=>s[38](null,O);return{c(){e=w("div"),t=w("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',n=L(),a=w("div"),p.c(),i=L(),d=w("div"),o=N(m),x=L(),c=w("div"),v=w("span"),V=N(y),F=L(),u=w("span"),k=N(h),Y=L(),r(t,"type","button"),r(t,"class","file-remove svelte-1wl2lnd"),r(a,"class","file-icon svelte-1wl2lnd"),r(d,"class","file-name svelte-1wl2lnd"),Ne(u,"color","rgb(26 151 26)"),r(c,"class","file-info svelte-1wl2lnd"),r(e,"class","file svelte-1wl2lnd"),K(e,"grab",s[5])},m(R,z){$(R,e,z),f(e,t),f(e,n),f(e,a),p.m(a,null),f(e,i),f(e,d),f(d,o),f(e,x),f(e,c),f(c,v),f(v,V),f(c,F),f(c,u),f(u,k),f(e,Y),S(),q||(H=[_(t,"mousedown",J(U)),_(e,"mousedown",I)],q=!0)},p(R,z){s=R,D===(D=W(s))&&p?p.p(s,z):(p.d(1),p=D(s),p&&(p.c(),p.m(a,null))),z[0]&64&&m!==(m=s[54].displayedName+"")&&P(o,m),z[0]&64&&y!==(y=(s[54].size||"")+"")&&P(V,y),z[0]&65&&h!==(h=(s[54].saved?s[0].SAVED:"")+"")&&P(k,h),O!==s[56]&&(j(),O=s[56],S()),z[0]&32&&K(e,"grab",s[5])},d(R){R&&b(e),p.d(),j(),q=!1,Z(H)}}}function lt(s){let e,t,n,a,i,d,m,o,x,c,v=s[1]&&de(s);function y(u,h){return u[9]?Ge:u[10]?Xe:u[6].length===0?We:Ue}let V=y(s),F=V(s);return{c(){e=L(),v&&v.c(),t=L(),n=w("div"),F.c(),a=L(),i=w("input"),m=L(),o=w("input"),r(n,"class","dropzone svelte-1wl2lnd"),K(n,"fullBorder",s[10]),r(i,"type","file"),i.multiple=!0,r(i,"accept",d=s[4]&&s[4].acceptedFiles),i.hidden=!0,r(o,"type","text"),r(o,"id",s[2]),r(o,"name",s[3]),o.hidden=!0},m(u,h){$(u,e,h),v&&v.m(u,h),$(u,t,h),$(u,n,h),F.m(n,null),$(u,a,h),$(u,i,h),s[41](i),$(u,m,h),$(u,o,h),ie(o,s[7]),x||(c=[_(document,"mousemove",s[16]),_(document,"mouseup",s[17]),_(n,"dragover",J(s[40])),_(i,"change",s[42]),_(o,"input",s[43])],x=!0)},p(u,h){u[1]?v?v.p(u,h):(v=de(u),v.c(),v.m(t.parentNode,t)):v&&(v.d(1),v=null),V===(V=y(u))&&F?F.p(u,h):(F.d(1),F=V(u),F&&(F.c(),F.m(n,null))),h[0]&1024&&K(n,"fullBorder",u[10]),h[0]&16&&d!==(d=u[4]&&u[4].acceptedFiles)&&r(i,"accept",d),h[0]&4&&r(o,"id",u[2]),h[0]&8&&r(o,"name",u[3]),h[0]&128&&o.value!==u[7]&&ie(o,u[7])},i:G,o:G,d(u){u&&(b(e),b(t),b(n),b(a),b(i),b(m),b(o)),v&&v.d(u),F.d(),s[41](null),x=!1,Z(c)}}}function st(s,e,t){let n,{wording:a={DROP_YOUR_FILES_HERE:"Drop your files here",BROWSE_FILES:"Browse files",DROP_FILES_HERE_OR:"Drop files here or",SAVED:"saved"}}=e,{attachedInternals:i}=e,{value:d=""}=e,{label:m=""}=e,{id:o=""}=e,{name:x=""}=e,{service:c}=e,{maxfiles:v=null}=e,{minfiles:y=null}=e,{maxfilesValidationMessage:V}=e,{minfilesValidationMessage:F}=e,{validationMessages:u={}}=e,{sortable:h=!0}=e,{required:k=!1}=e,{displayFormat:Y="snake"}=e,{displayFormatFunction:O}=e,q="",H=null,U=-1,W,D,p=[],I,S=!1,j=!1,R=[],z="";const me=()=>z.split(",").filter(Boolean),pe=()=>i.reportValidity(),X=Ye();async function ve(){t(9,S=!0);try{await Promise.allSettled(p.map(async l=>{if(!l.saved){const g=await c.uploadFile(l.file);l.saved=!0,l.url=g}})),t(6,p=[...p])}catch(l){console.error(l)}finally{t(9,S=!1)}}function ee(l){p[l].saved&&X("removed",{url:p[l].url}),t(6,p=p.filter((g,M)=>l!==M))}function te(l){l.target.files.length&&(t(6,p=p.concat(se(Array.from(l.target.files)))),X("change",{unsaved:p.filter(g=>!g.saved).length}),t(8,I.value=null,I))}function le(l){l.dataTransfer.files.length&&(t(6,p=p.concat(se(Array.from(l.dataTransfer.files)))),X("change",{unsaved:p.filter(g=>!g.saved).length})),t(10,j=!1)}const ge=l=>{if(l<1024)return`${l} bytes`;if(l>=1024&&l<1048576)return`${(l/1024).toFixed(1)} KB`;if(l>=1048576)return`${(l/1048576).toFixed(1)} MB`},se=l=>l.filter(g=>c&&c.maxSize?(X("rejected",{file:g.name,code:"maxSize"}),g.size<c.maxSize):!0).map(g=>{q=Te(g.name,Y,O);let M={name:g.name,size:ge(g.size),file:g,saved:!1,displayedName:q};const B=g.type.split("/")[0];return(B==="image"||B==="video"||B==="audio")&&(M.src=URL.createObjectURL(g),M.type=B),M}),fe=(l,g)=>new File([l],g),he=async l=>{Array.isArray(l)&&(l=l.join(","));const g=l.split(",");t(6,p=(await Promise.all(g.map(async M=>{try{const B=await fetch(M),Q=fe(B.blob(),M);let A={name:Q.name,displayedName:Q.name,size:"",file:Q,saved:!0,url:M,external:!0};return/\.jpg|\.png|\.jpeg|\.webp|\.svg|\.gif/.test(M)?(A.src=M,A.type="image"):/\.mp4|\.mov/.test(M)?(A.src=M,A.type="video"):/\.mp3|\.wav/.test(M)&&(A.src=M,A.type="audio"),A}catch(B){console.error(B)}}))).filter(Boolean))};function we(l){H&&(l.preventDefault(),H.style.transform="translateY("+(l.clientY-W)+"px)",H.style.transform+="translateX("+(l.clientX-D)+"px)")}function xe(l){if(H){l.preventDefault();const g=l.target.closest(".file");if(g){const M=[...g.parentNode.children].indexOf(g),B=p[M];t(6,p[M]=p[U],p),t(6,p[U]=B,p)}H.style="",H=null}}function ne(l,g){h&&(H=R[l],U=l,H.style.zIndex="2",H.style.pointerEvents="none",D=g.clientX,W=g.clientY)}const ye=()=>t(10,j=!1),$e=()=>t(10,j=!1),be=l=>le(l),Ve=()=>I.click(),Fe=l=>ee(l),Me=(l,g)=>ne(l,g);function ze(l,g){ae[l?"unshift":"push"](()=>{R[g]=l,t(11,R)})}const Ee=()=>I.click(),Re=()=>t(10,j=!0);function He(l){ae[l?"unshift":"push"](()=>{I=l,t(8,I)})}const Le=l=>te(l);function _e(){z=this.value,t(7,z),t(6,p),t(22,y),t(19,i),t(24,F),t(25,u),t(21,v),t(23,V),t(20,d)}return s.$$set=l=>{"wording"in l&&t(0,a=l.wording),"attachedInternals"in l&&t(19,i=l.attachedInternals),"value"in l&&t(20,d=l.value),"label"in l&&t(1,m=l.label),"id"in l&&t(2,o=l.id),"name"in l&&t(3,x=l.name),"service"in l&&t(4,c=l.service),"maxfiles"in l&&t(21,v=l.maxfiles),"minfiles"in l&&t(22,y=l.minfiles),"maxfilesValidationMessage"in l&&t(23,V=l.maxfilesValidationMessage),"minfilesValidationMessage"in l&&t(24,F=l.minfilesValidationMessage),"validationMessages"in l&&t(25,u=l.validationMessages),"sortable"in l&&t(5,h=l.sortable),"required"in l&&t(26,k=l.required),"displayFormat"in l&&t(27,Y=l.displayFormat),"displayFormatFunction"in l&&t(28,O=l.displayFormatFunction)},s.$$.update=()=>{s.$$.dirty[0]&1048576&&(t(6,p=[]),d&&(!Array.isArray(d)||d.length)&&(t(9,S=!0),he(d),t(9,S=!1))),s.$$.dirty[0]&65536192&&(t(7,z=p.filter(l=>l.saved).map(l=>l.url).join(",")),y&&p.length<y?i.setValidity({customError:!0},F||u.minfiles||"Not enough files."):v&&p.length>v?i.setValidity({customError:!0},V||u.maxfiles||"Too many files."):i.setValidity({}),i.checkValidity(),i.setFormValue(z),X("value",{value:z})),s.$$.dirty[0]&67108866&&t(12,n=k?`${m} *`:m)},[a,m,o,x,c,h,p,z,I,S,j,R,n,ee,te,le,we,xe,ne,i,d,v,y,V,F,u,k,Y,O,me,pe,ve,ye,$e,be,Ve,Fe,Me,ze,Ee,Re,He,Le,_e]}class ue extends je{constructor(e){super(),ke(this,e,st,lt,De,{wording:0,attachedInternals:19,value:20,label:1,id:2,name:3,service:4,maxfiles:21,minfiles:22,maxfilesValidationMessage:23,minfilesValidationMessage:24,validationMessages:25,sortable:5,required:26,displayFormat:27,displayFormatFunction:28,getValue:29,reportValidity:30,save:31},Ce,[-1,-1])}get wording(){return this.$$.ctx[0]}set wording(e){this.$$set({wording:e}),E()}get attachedInternals(){return this.$$.ctx[19]}set attachedInternals(e){this.$$set({attachedInternals:e}),E()}get value(){return this.$$.ctx[20]}set value(e){this.$$set({value:e}),E()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),E()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),E()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),E()}get service(){return this.$$.ctx[4]}set service(e){this.$$set({service:e}),E()}get maxfiles(){return this.$$.ctx[21]}set maxfiles(e){this.$$set({maxfiles:e}),E()}get minfiles(){return this.$$.ctx[22]}set minfiles(e){this.$$set({minfiles:e}),E()}get maxfilesValidationMessage(){return this.$$.ctx[23]}set maxfilesValidationMessage(e){this.$$set({maxfilesValidationMessage:e}),E()}get minfilesValidationMessage(){return this.$$.ctx[24]}set minfilesValidationMessage(e){this.$$set({minfilesValidationMessage:e}),E()}get validationMessages(){return this.$$.ctx[25]}set validationMessages(e){this.$$set({validationMessages:e}),E()}get sortable(){return this.$$.ctx[5]}set sortable(e){this.$$set({sortable:e}),E()}get required(){return this.$$.ctx[26]}set required(e){this.$$set({required:e}),E()}get displayFormat(){return this.$$.ctx[27]}set displayFormat(e){this.$$set({displayFormat:e}),E()}get displayFormatFunction(){return this.$$.ctx[28]}set displayFormatFunction(e){this.$$set({displayFormatFunction:e}),E()}get getValue(){return this.$$.ctx[29]}get reportValidity(){return this.$$.ctx[30]}get save(){return this.$$.ctx[31]}}try{customElements.define("jp-file-list",Se(ue,{wording:{},attachedInternals:{},value:{},label:{},id:{},name:{},service:{},maxfiles:{},minfiles:{},maxfilesValidationMessage:{},minfilesValidationMessage:{},validationMessages:{},sortable:{type:"Boolean"},required:{type:"Boolean"},displayFormat:{},displayFormatFunction:{}},[],["getValue","reportValidity","save"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},Oe(e,"formAssociated",!0),e}));}catch{};export{ue as default};
//# sourceMappingURL=file-list.wc.js.map
