import{S as K,i as O,s as Q,e as g,G as U,b as H,t as W,d as l,g as y,h as x,o as Z,u as J,n as Y,j as v,l as X,k as o0,a1 as a0,r as _,a2 as i0,m as R,a3 as n0,J as V,D as E,E as B,a4 as r0,M as l0,c as H0,f as G,a as Z0,P as e0,R as t0,I as c0,L as p0,p as d0,q as M0,a5 as F0,a6 as L0}from"./svelte.js";import"./index2.js";function S0(s){let e,t,o,i,r,n,c=s[1].name+"",a,d,p;return{c(){e=g("div"),t=g("button"),o=U("svg"),i=U("path"),r=H(),n=g("span"),a=W(c),l(i,"d","M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"),l(o,"xmlns","http://www.w3.org/2000/svg"),l(o,"width","24"),l(o,"height","24"),l(o,"viewBox","0 -960 960 960"),l(t,"type","button"),l(e,"class","folder")},m(f,b){y(f,e,b),x(e,t),x(t,o),x(o,i),x(t,r),x(t,n),x(n,a),d||(p=Z(t,"click",s[2]),d=!0)},p(f,[b]){b&2&&c!==(c=f[1].name+"")&&J(a,c)},i:Y,o:Y,d(f){f&&v(e),d=!1,p()}}}function P0(s,e,t){let{folder:o}=e,{path:i}=e;const r=()=>t(0,i=o.id);return s.$$set=n=>{"folder"in n&&t(1,o=n.folder),"path"in n&&t(0,i=n.path)},[i,o,r]}class C0 extends K{constructor(e){super(),O(this,e,P0,S0,Q,{folder:1,path:0})}}function b0(s){let e;function t(r,n){if(r[3]==="uploading")return B0;if(r[3]==="paused")return A0;if(r[3]==="error")return E0}let o=t(s),i=o&&o(s);return{c(){i&&i.c(),e=X()},m(r,n){i&&i.m(r,n),y(r,e,n)},p(r,n){o===(o=t(r))&&i?i.p(r,n):(i&&i.d(1),i=o&&o(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){r&&v(e),i&&i.d(r)}}}function E0(s){return{c:Y,m:Y,p:Y,d:Y}}function A0(s){let e,t,o,i,r,n,c,a,d;return{c(){e=g("span"),t=W(s[4]),o=W(" / 100"),i=H(),r=g("button"),r.textContent="Resume",n=H(),c=g("button"),c.textContent="Cancel",l(r,"type","button"),l(c,"type","button")},m(p,f){y(p,e,f),x(e,t),x(e,o),y(p,i,f),y(p,r,f),y(p,n,f),y(p,c,f),a||(d=[Z(r,"click",s[7]),Z(c,"click",s[5])],a=!0)},p(p,f){f&16&&J(t,p[4])},d(p){p&&(v(e),v(i),v(r),v(n),v(c)),a=!1,_(d)}}}function B0(s){let e,t,o,i,r,n,c;return{c(){e=g("span"),t=W(s[4]),o=W(" / 100"),i=H(),r=g("button"),r.textContent="Pause",l(r,"type","button")},m(a,d){y(a,e,d),x(e,t),x(e,o),y(a,i,d),y(a,r,d),n||(c=Z(r,"click",s[6]),n=!0)},p(a,d){d&16&&J(t,a[4])},d(a){a&&(v(e),v(i),v(r)),n=!1,c()}}}function N0(s){let e,t=s[3]&&b0(s);return{c(){t&&t.c(),e=X()},m(o,i){t&&t.m(o,i),y(o,e,i)},p(o,[i]){o[3]?t?t.p(o,i):(t=b0(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Y,o:Y,d(o){o&&v(e),t&&t.d(o)}}}function D0(s,e,t){let o,i=Y,r=()=>(i(),i=a0(f,j=>t(3,o=j)),f),n,c=Y,a=()=>(c(),c=a0(p,j=>t(4,n=j)),p);s.$$.on_destroy.push(()=>i()),s.$$.on_destroy.push(()=>c());let{asset:d}=e,{progress:p}=e;a();let{status:f}=e;r();const b=o0();function u(){d.uploader.cancel(),b("cancel")}const w=()=>d.uploader.pause(),k=()=>d.uploader.resume();return s.$$set=j=>{"asset"in j&&t(0,d=j.asset),"progress"in j&&a(t(1,p=j.progress)),"status"in j&&r(t(2,f=j.status))},[d,p,f,o,n,u,w,k]}class W0 extends K{constructor(e){super(),O(this,e,D0,N0,Q,{asset:0,progress:1,status:2})}}function f0(s){if(s<1024)return`${s} bytes`;if(s>=1024&&s<1048576)return`${(s/1024).toFixed(1)} KB`;if(s>=1048576)return`${(s/1048576).toFixed(1)} MB`}function J0(s){let e;return{c(){e=g("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path></svg>',l(e,"class","icon-only")},m(t,o){y(t,e,o)},p:Y,d(t){t&&v(e)}}}function R0(s){let e;return{c(){e=g("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"></path></svg>',l(e,"class","icon-only")},m(t,o){y(t,e,o)},p:Y,d(t){t&&v(e)}}}function V0(s){let e,t,o;return{c(){e=g("img"),l(e,"class","file-icon-image"),l0(e.src,t=s[0].url)||l(e,"src",t),l(e,"alt",o=s[0].name)},m(i,r){y(i,e,r)},p(i,r){r&1&&!l0(e.src,t=i[0].url)&&l(e,"src",t),r&1&&o!==(o=i[0].name)&&l(e,"alt",o)},d(i){i&&v(e)}}}function G0(s){let e,t,o,i,r,n,c,a,d=s[0].name+"",p,f,b,u,w,k,j=f0(s[0].size)+"",q,T,S,A;function P(z,$){return $&1&&(r=null),$&1&&(n=null),r==null&&(r=!!z[0].contentType.startsWith("image")),r?V0:(n==null&&(n=!!z[0].contentType.startsWith("video")),n?R0:J0)}let N=P(s,-1),F=N(s);return b=new W0({props:{asset:s[0],status:s[0].status,progress:s[0].progress}}),b.$on("cancel",s[5]),{c(){e=g("div"),t=g("button"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"></path></svg>',o=H(),i=g("div"),F.c(),c=H(),a=g("div"),p=W(d),f=H(),i0(b.$$.fragment),u=H(),w=g("div"),k=g("span"),q=W(j),l(t,"class","file-remove"),l(t,"type","button"),l(i,"class","file-icon"),l(a,"class","file-name"),l(w,"class","file-info"),l(e,"class","file"),R(e,"removing",s[1])},m(z,$){y(z,e,$),x(e,t),x(e,o),x(e,i),F.m(i,null),x(e,c),x(e,a),x(a,p),x(a,f),n0(b,a,null),x(e,u),x(e,w),x(w,k),x(k,q),T=!0,S||(A=Z(t,"click",V(s[3])),S=!0)},p(z,[$]){N===(N=P(z,$))&&F?F.p(z,$):(F.d(1),F=N(z),F&&(F.c(),F.m(i,null))),(!T||$&1)&&d!==(d=z[0].name+"")&&J(p,d);const D={};$&1&&(D.asset=z[0]),$&1&&(D.status=z[0].status),$&1&&(D.progress=z[0].progress),b.$set(D),(!T||$&1)&&j!==(j=f0(z[0].size)+"")&&J(q,j),(!T||$&2)&&R(e,"removing",z[1])},i(z){T||(E(b.$$.fragment,z),T=!0)},o(z){B(b.$$.fragment,z),T=!1},d(z){z&&v(e),F.d(),r0(b),S=!1,A()}}}function I0(s,e,t){let{asset:o}=e,{service:i}=e,r=!1;const n=o0();async function c(){t(1,r=!0),await i.remove(o.id),t(1,r=!1),n("remove")}const a=()=>n("cancel");return s.$$set=d=>{"asset"in d&&t(0,o=d.asset),"service"in d&&t(4,i=d.service)},[o,r,n,c,i,a]}class K0 extends K{constructor(e){super(),O(this,e,I0,G0,Q,{asset:0,service:4})}}function O0(s){Z0(s,"svelte-14j0y1",`.svelte-14j0y1.svelte-14j0y1{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.card.svelte-14j0y1.svelte-14j0y1{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:802px;width:100%;height:500px;overflow:auto;background-color:white;-webkit-box-shadow:0 3px 6px rgba(0, 0, 0, 0.12);-moz-box-shadow:0 3px 6px rgba(0, 0, 0, 0.12);box-shadow:0 3px 6px rgba(0, 0, 0, 0.12);font-family:sans-serif}header.svelte-14j0y1.svelte-14j0y1{z-index:1;position:-webkit-sticky;position:sticky;top:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:white;padding:20px;border-bottom:1px solid rgba(0, 0, 0, 0.12)}header.svelte-14j0y1 .route.svelte-14j0y1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:20px}header.svelte-14j0y1 nav.svelte-14j0y1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}.header-actions.svelte-14j0y1.svelte-14j0y1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px}header.svelte-14j0y1 button.svelte-14j0y1{width:40px;height:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border:1px solid rgba(0, 0, 0, 0.12);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;cursor:pointer;-webkit-transition:0.25s;-o-transition:0.25s;-moz-transition:0.25s;transition:0.25s}header.svelte-14j0y1 button.svelte-14j0y1:disabled{opacity:0.5;background-color:rgba(0, 0, 0, 0.1);pointer-events:none}header.svelte-14j0y1 button.svelte-14j0y1:hover{background-color:rgba(0, 0, 0, 0.08);border-color:rgba(0, 0, 0, 0.2)}footer.svelte-14j0y1.svelte-14j0y1{z-index:1;position:-webkit-sticky;position:sticky;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background-color:white;padding:20px;border-top:1px solid rgba(0, 0, 0, 0.12)}footer.svelte-14j0y1 button.svelte-14j0y1{height:40px;padding:0 16px;font-weight:bold;background-color:#E66439;color:white;border:none;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;cursor:pointer;-webkit-transition:0.25s;-o-transition:0.25s;-moz-transition:0.25s;transition:0.25s}footer.svelte-14j0y1 button.svelte-14j0y1:disabled{opacity:.5;pointer-events:none}footer.svelte-14j0y1 button.svelte-14j0y1:active{-webkit-transform:scale(.95);-moz-transform:scale(.95);-ms-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}.add-folder-submit.svelte-14j0y1.svelte-14j0y1{height:32px;padding:0 12px;font-weight:bold;background-color:#E66439;color:white;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;cursor:pointer;margin-top:12px;-webkit-transition:0.25s;-o-transition:0.25s;-moz-transition:0.25s;transition:0.25s}.add-folder-submit.svelte-14j0y1.svelte-14j0y1:disabled{opacity:.5;pointer-events:none}.add-folder-submit.svelte-14j0y1.svelte-14j0y1:active{-webkit-transform:scale(.95);-moz-transform:scale(.95);-ms-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}.drop-here.svelte-14j0y1.svelte-14j0y1{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:white}.add-folder-form.svelte-14j0y1.svelte-14j0y1{padding:20px\r
  }.add-folder-input.svelte-14j0y1.svelte-14j0y1{display:block}.add-folder-input.svelte-14j0y1 span.svelte-14j0y1{display:block;font-size:14px}.add-folder-input.svelte-14j0y1 input.svelte-14j0y1{border:1px solid rgba(0,0,0,.08);height:40px;padding:0 12px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;font-size:14px;margin-top:4px}.file{position:relative;height:100%;border:1px solid rgba(0, 0, 0, 0.12);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background-color:white;overflow:hidden}.file-name{padding:6px 12px 0}.file-info{padding:4px 12px 6px}.file-icon .icon-only{padding:12px}.file .file-remove{position:absolute;top:4px;right:4px;width:32px;height:32px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;cursor:pointer;border:1px solid rgba(0, 0, 0, 0.08)}.file .file-remove:hover{border-color:rgba(0, 0, 0, 0.4)}.file .file-icon-image{width:100%;height:150px;-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;background-color:rgba(0, 0, 0, 0.02)}.files.svelte-14j0y1.svelte-14j0y1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:12px}.info.svelte-14j0y1.svelte-14j0y1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:20px}.asset-button.svelte-14j0y1.svelte-14j0y1{width:25%;padding:8px;-webkit-transition:0.25s;-o-transition:0.25s;-moz-transition:0.25s;transition:0.25s;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;cursor:pointer}.asset-button.selected.svelte-14j0y1.svelte-14j0y1{border:1px solid #E66439}.asset-button:hover .file{background-color:rgba(0, 0, 0, 0.08);border-color:rgba(0, 0, 0, 0.2)}.folder{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:25%;padding:8px}.folder button{width:100%;padding:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid rgba(0, 0, 0, 0.12);gap:6px;background-color:transparent;font-size:14px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;cursor:pointer;-webkit-transition:0.25s;-o-transition:0.25s;-moz-transition:0.25s;transition:0.25s}.folder button:hover{background-color:rgba(0, 0, 0, 0.08);border-color:rgba(0, 0, 0, 0.2)}.loader.svelte-14j0y1.svelte-14j0y1{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.spinner.svelte-14j0y1.svelte-14j0y1{width:150px;height:150px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:9px solid var(--primary-color);-webkit-animation:svelte-14j0y1-spinner-bulqg1 0.8s infinite linear alternate,\r
            svelte-14j0y1-spinner-oaa3wk 1.6s infinite linear;-moz-animation:svelte-14j0y1-spinner-bulqg1 0.8s infinite linear alternate,\r
            svelte-14j0y1-spinner-oaa3wk 1.6s infinite linear;-o-animation:svelte-14j0y1-spinner-bulqg1 0.8s infinite linear alternate,\r
            svelte-14j0y1-spinner-oaa3wk 1.6s infinite linear;animation:svelte-14j0y1-spinner-bulqg1 0.8s infinite linear alternate,\r
            svelte-14j0y1-spinner-oaa3wk 1.6s infinite linear}@-webkit-keyframes svelte-14j0y1-spinner-bulqg1{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{-webkit-clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@-moz-keyframes svelte-14j0y1-spinner-bulqg1{0%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@-o-keyframes svelte-14j0y1-spinner-bulqg1{0%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@keyframes svelte-14j0y1-spinner-bulqg1{0%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%)}12.5%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%)}25%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%)}50%{-webkit-clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}62.5%{-webkit-clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)}75%{-webkit-clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%)}100%{-webkit-clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);clip-path:polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%)}}@-webkit-keyframes svelte-14j0y1-spinner-oaa3wk{0%{-webkit-transform:scaleY(1) rotate(0deg);transform:scaleY(1) rotate(0deg)}49.99%{-webkit-transform:scaleY(1) rotate(135deg);transform:scaleY(1) rotate(135deg)}50%{-webkit-transform:scaleY(-1) rotate(0deg);transform:scaleY(-1) rotate(0deg)}100%{-webkit-transform:scaleY(-1) rotate(-135deg);transform:scaleY(-1) rotate(-135deg)}}@-moz-keyframes svelte-14j0y1-spinner-oaa3wk{0%{-moz-transform:scaleY(1) rotate(0deg);transform:scaleY(1) rotate(0deg)}49.99%{-moz-transform:scaleY(1) rotate(135deg);transform:scaleY(1) rotate(135deg)}50%{-moz-transform:scaleY(-1) rotate(0deg);transform:scaleY(-1) rotate(0deg)}100%{-moz-transform:scaleY(-1) rotate(-135deg);transform:scaleY(-1) rotate(-135deg)}}@-o-keyframes svelte-14j0y1-spinner-oaa3wk{0%{-o-transform:scaleY(1) rotate(0deg);transform:scaleY(1) rotate(0deg)}49.99%{-o-transform:scaleY(1) rotate(135deg);transform:scaleY(1) rotate(135deg)}50%{-o-transform:scaleY(-1) rotate(0deg);transform:scaleY(-1) rotate(0deg)}100%{-o-transform:scaleY(-1) rotate(-135deg);transform:scaleY(-1) rotate(-135deg)}}@keyframes svelte-14j0y1-spinner-oaa3wk{0%{-webkit-transform:scaleY(1) rotate(0deg);-moz-transform:scaleY(1) rotate(0deg);-o-transform:scaleY(1) rotate(0deg);transform:scaleY(1) rotate(0deg)}49.99%{-webkit-transform:scaleY(1) rotate(135deg);-moz-transform:scaleY(1) rotate(135deg);-o-transform:scaleY(1) rotate(135deg);transform:scaleY(1) rotate(135deg)}50%{-webkit-transform:scaleY(-1) rotate(0deg);-moz-transform:scaleY(-1) rotate(0deg);-o-transform:scaleY(-1) rotate(0deg);transform:scaleY(-1) rotate(0deg)}100%{-webkit-transform:scaleY(-1) rotate(-135deg);-moz-transform:scaleY(-1) rotate(-135deg);-o-transform:scaleY(-1) rotate(-135deg);transform:scaleY(-1) rotate(-135deg)}}`)}function m0(s,e,t){const o=s.slice();return o[39]=e[t],o[41]=t,o}function Q0(s){let e,t,o,i,r,n,c,a,d=(s[4].replace(s[0],"")||"/")+"",p,f,b,u,w,k,j,q,T,S,A,P,N,F;const z=[te,ee,_0],$=[];function D(h,L){return h[8]?0:h[5].length==0?1:2}q=D(s),T=$[q]=z[q](s);let M=s[3]&&g0(s);return{c(){e=g("header"),t=g("nav"),o=g("button"),i=U("svg"),r=U("path"),c=H(),a=g("span"),p=W(d),f=H(),b=g("div"),u=g("button"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" class="svelte-14j0y1"><path d="M560-320h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z" class="svelte-14j0y1"></path></svg>',w=H(),k=g("button"),k.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" class="svelte-14j0y1"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" class="svelte-14j0y1"></path></svg>',j=H(),T.c(),S=H(),M&&M.c(),A=X(),l(r,"d","m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"),l(r,"class","svelte-14j0y1"),l(i,"xmlns","http://www.w3.org/2000/svg"),l(i,"width","20"),l(i,"height","20"),l(i,"viewBox","0 -960 960 960"),l(i,"class","svelte-14j0y1"),l(o,"type","button"),l(o,"title","Back"),o.disabled=n=s[4]===s[0],l(o,"class","svelte-14j0y1"),l(a,"class","route svelte-14j0y1"),l(t,"class","svelte-14j0y1"),l(u,"type","button"),l(u,"title","Add Folder"),l(u,"class","svelte-14j0y1"),l(k,"type","button"),l(k,"title","Add Files"),l(k,"class","svelte-14j0y1"),l(b,"class","header-actions svelte-14j0y1"),l(e,"class","svelte-14j0y1")},m(h,L){y(h,e,L),x(e,t),x(t,o),x(o,i),x(i,r),x(t,c),x(t,a),x(a,p),x(e,f),x(e,b),x(b,u),x(b,w),x(b,k),y(h,j,L),$[q].m(h,L),y(h,S,L),M&&M.m(h,L),y(h,A,L),P=!0,N||(F=[Z(o,"click",s[15]),Z(u,"click",V(s[16])),Z(k,"click",V(s[25]))],N=!0)},p(h,L){(!P||L[0]&17&&n!==(n=h[4]===h[0]))&&(o.disabled=n),(!P||L[0]&17)&&d!==(d=(h[4].replace(h[0],"")||"/")+"")&&J(p,d);let I=q;q=D(h),q===I?$[q].p(h,L):(t0(),B($[I],1,1,()=>{$[I]=null}),e0(),T=$[q],T?T.p(h,L):(T=$[q]=z[q](h),T.c()),E(T,1),T.m(S.parentNode,S)),h[3]?M?M.p(h,L):(M=g0(h),M.c(),M.m(A.parentNode,A)):M&&(M.d(1),M=null)},i(h){P||(E(T),P=!0)},o(h){B(T),P=!1},d(h){h&&(v(e),v(j),v(S),v(A)),$[q].d(h),M&&M.d(h),N=!1,_(F)}}}function U0(s){let e,t,o,i,r,n,c,a,d,p,f,b,u;return{c(){e=g("header"),t=g("div"),o=g("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="svelte-14j0y1"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" class="svelte-14j0y1"></path></svg>',i=H(),r=g("form"),n=g("label"),c=g("span"),c.textContent="Folder name",a=H(),d=g("input"),p=H(),f=g("button"),f.textContent="Submit",l(o,"type","button"),l(o,"class","svelte-14j0y1"),l(t,"class","header-actions svelte-14j0y1"),l(e,"class","svelte-14j0y1"),l(c,"class","svelte-14j0y1"),l(d,"pattern",ne),d.required=!0,l(d,"class","svelte-14j0y1"),l(n,"class","add-folder-input svelte-14j0y1"),l(f,"class","add-folder-submit svelte-14j0y1"),l(f,"type","submit"),l(r,"class","add-folder-form svelte-14j0y1")},m(w,k){y(w,e,k),x(e,t),x(t,o),y(w,i,k),y(w,r,k),x(r,n),x(n,c),x(n,a),x(n,d),p0(d,s[10]),x(r,p),x(r,f),b||(u=[Z(o,"click",s[23]),Z(d,"input",s[24]),Z(r,"submit",V(s[17]))],b=!0)},p(w,k){k[0]&1024&&d.value!==w[10]&&p0(d,w[10])},i:Y,o:Y,d(w){w&&(v(e),v(i),v(r)),b=!1,_(u)}}}function X0(s){let e;return{c(){e=g("div"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" class="svelte-14j0y1"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" class="svelte-14j0y1"></path></svg> <div class="svelte-14j0y1">Drop your files here</div>',l(e,"class","drop-here svelte-14j0y1")},m(t,o){y(t,e,o)},p:Y,i:Y,o:Y,d(t){t&&v(e)}}}function _0(s){let e,t,o=d0(s[5]),i=[];for(let n=0;n<o.length;n+=1)i[n]=x0(m0(s,o,n));const r=n=>B(i[n],1,1,()=>{i[n]=null});return{c(){e=g("div");for(let n=0;n<i.length;n+=1)i[n].c();l(e,"class","files svelte-14j0y1")},m(n,c){y(n,e,c);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null);t=!0},p(n,c){if(c[0]&790644){o=d0(n[5]);let a;for(a=0;a<o.length;a+=1){const d=m0(n,o,a);i[a]?(i[a].p(d,c),E(i[a],1)):(i[a]=x0(d),i[a].c(),E(i[a],1),i[a].m(e,null))}for(t0(),a=o.length;a<i.length;a+=1)r(a);e0()}},i(n){if(!t){for(let c=0;c<o.length;c+=1)E(i[c]);t=!0}},o(n){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)B(i[c]);t=!1},d(n){n&&v(e),M0(i,n)}}}function ee(s){let e;return{c(){e=g("div"),e.innerHTML='<p class="svelte-14j0y1">Folder is empty</p>',l(e,"class","info svelte-14j0y1")},m(t,o){y(t,e,o)},p:Y,i:Y,o:Y,d(t){t&&v(e)}}}function te(s){let e;return{c(){e=g("div"),e.innerHTML='<div class="spinner svelte-14j0y1"></div>',l(e,"class","loader svelte-14j0y1")},m(t,o){y(t,e,o)},p:Y,i:Y,o:Y,d(t){t&&v(e)}}}function se(s){let e,t,o,i,r,n;function c(){return s[27](s[41],s[39])}function a(){return s[28](s[39])}t=new K0({props:{asset:s[39],service:s[2]}}),t.$on("remove",c),t.$on("cancel",a);function d(){return s[29](s[39])}return{c(){e=g("div"),i0(t.$$.fragment),o=H(),l(e,"class","asset-button svelte-14j0y1"),l(e,"role","button"),l(e,"tabindex","1"),R(e,"selected",s[6][s[39].id])},m(p,f){y(p,e,f),n0(t,e,null),x(e,o),i=!0,r||(n=Z(e,"click",d),r=!0)},p(p,f){s=p;const b={};f[0]&32&&(b.asset=s[39]),f[0]&4&&(b.service=s[2]),t.$set(b),(!i||f[0]&96)&&R(e,"selected",s[6][s[39].id])},i(p){i||(E(t.$$.fragment,p),i=!0)},o(p){B(t.$$.fragment,p),i=!1},d(p){p&&v(e),r0(t),r=!1,n()}}}function oe(s){let e,t,o;function i(n){s[26](n)}let r={folder:s[39]};return s[4]!==void 0&&(r.path=s[4]),e=new C0({props:r}),c0.push(()=>F0(e,"path",i)),{c(){i0(e.$$.fragment)},m(n,c){n0(e,n,c),o=!0},p(n,c){const a={};c[0]&32&&(a.folder=n[39]),!t&&c[0]&16&&(t=!0,a.path=n[4],L0(()=>t=!1)),e.$set(a)},i(n){o||(E(e.$$.fragment,n),o=!0)},o(n){B(e.$$.fragment,n),o=!1},d(n){r0(e,n)}}}function x0(s){let e,t,o,i;const r=[oe,se],n=[];function c(a,d){return a[39].type==="folder"?0:1}return e=c(s),t=n[e]=r[e](s),{c(){t.c(),o=X()},m(a,d){n[e].m(a,d),y(a,o,d),i=!0},p(a,d){let p=e;e=c(a),e===p?n[e].p(a,d):(t0(),B(n[p],1,1,()=>{n[p]=null}),e0(),t=n[e],t?t.p(a,d):(t=n[e]=r[e](a),t.c()),E(t,1),t.m(o.parentNode,o))},i(a){i||(E(t),i=!0)},o(a){B(t),i=!1},d(a){a&&v(o),n[e].d(a)}}}function g0(s){let e,t,o,i;return{c(){e=g("footer"),t=g("button"),t.textContent="Confirm Selection",l(t,"type","button"),l(t,"class","svelte-14j0y1"),l(e,"class","svelte-14j0y1")},m(r,n){y(r,e,n),x(e,t),o||(i=Z(t,"click",s[20]),o=!0)},p:Y,d(r){r&&v(e),o=!1,i()}}}function ie(s){let e,t,o,i,r,n,c,a;const d=[X0,U0,Q0],p=[];function f(b,u){return b[9]?0:b[11]?1:2}return t=f(s),o=p[t]=d[t](s),{c(){e=g("section"),o.c(),i=H(),r=g("input"),l(e,"class","card svelte-14j0y1"),R(e,"full-border",s[9]),l(r,"type","file"),r.multiple=!0,l(r,"accept",s[1]),r.hidden=!0,l(r,"class","svelte-14j0y1")},m(b,u){y(b,e,u),p[t].m(e,null),y(b,i,u),y(b,r,u),s[34](r),n=!0,c||(a=[Z(e,"dragover",V(s[30])),Z(e,"dragleave",s[31]),Z(e,"dragend",s[32]),Z(e,"drop",V(s[33])),Z(r,"change",s[35])],c=!0)},p(b,u){let w=t;t=f(b),t===w?p[t].p(b,u):(t0(),B(p[w],1,1,()=>{p[w]=null}),e0(),o=p[t],o?o.p(b,u):(o=p[t]=d[t](b),o.c()),E(o,1),o.m(e,null)),(!n||u[0]&512)&&R(e,"full-border",b[9]),(!n||u[0]&2)&&l(r,"accept",b[1])},i(b){n||(E(o),n=!0)},o(b){B(o),n=!1},d(b){b&&(v(e),v(i),v(r)),p[t].d(),s[34](null),c=!1,_(a)}}}let ne="[a-z_\\-]{3,}";function re(s,e,t){let{rootPath:o="/"}=e,{maxSize:i=10*1048576}=e,{acceptedFiles:r="*"}=e,{shownFiles:n}=e,{service:c}=e,{selectable:a=""}=e;const d=o0();let p=o,f=[],b={},u,w=!1,k=!1,j="",q=!1;async function T(m,C){t(5,f=f.filter(s0=>s0.id!==C))}async function S(m){m.target.files.length&&t(5,f=[...f,...await P(m.target.files)]),t(7,u.value=null,u)}async function A(m){m.dataTransfer.files.length&&t(5,f=[...f,...await P(m.dataTransfer.files)]),t(9,k=!1)}function P(m){return Promise.all(Array.from(m).filter(C=>!(!i||i<C.size)).map(C=>c.upload(p,C)))}function N(){t(4,p=p.split("/").slice(0,-1).join("/"))}function F(){t(10,j=""),t(11,q=!0)}async function z(){t(4,p+=`/${j}`),t(11,q=!1)}function $(m){t(5,f=f.filter(C=>C.id!==m))}function D(m){b[m.id]?delete b[m.id]:a==="single"?t(6,b={[m.id]:m}):t(6,b[m.id]=m,b)}function M(){const m=Object.values(b);d("selected",a==="single"?m[0]:m)}function h(){t(8,w=!0),c.fetch(p).then(m=>{t(5,f=m),n!=null&&n.length&&t(5,f=f.filter(C=>C.type==="folder"||n.some(s0=>C.contentType.startsWith(s0))))}).finally(()=>{t(8,w=!1)})}const L=()=>t(11,q=!1);function I(){j=this.value,t(10,j)}const y0=()=>u.click();function v0(m){p=m,t(4,p)}const h0=(m,C)=>T(m,C.id),w0=m=>$(m.id),k0=m=>D(m),j0=()=>t(9,k=!0),z0=()=>t(9,k=!1),$0=()=>t(9,k=!1),Y0=m=>A(m);function T0(m){c0[m?"unshift":"push"](()=>{u=m,t(7,u)})}const q0=m=>S(m);return s.$$set=m=>{"rootPath"in m&&t(0,o=m.rootPath),"maxSize"in m&&t(21,i=m.maxSize),"acceptedFiles"in m&&t(1,r=m.acceptedFiles),"shownFiles"in m&&t(22,n=m.shownFiles),"service"in m&&t(2,c=m.service),"selectable"in m&&t(3,a=m.selectable)},s.$$.update=()=>{s.$$.dirty[0]&16&&p&&h()},[o,r,c,a,p,f,b,u,w,k,j,q,T,S,A,N,F,z,$,D,M,i,n,L,I,y0,v0,h0,w0,k0,j0,z0,$0,Y0,T0,q0]}class u0 extends K{constructor(e){super(),O(this,e,re,ie,Q,{rootPath:0,maxSize:21,acceptedFiles:1,shownFiles:22,service:2,selectable:3},O0,[-1,-1])}get rootPath(){return this.$$.ctx[0]}set rootPath(e){this.$$set({rootPath:e}),G()}get maxSize(){return this.$$.ctx[21]}set maxSize(e){this.$$set({maxSize:e}),G()}get acceptedFiles(){return this.$$.ctx[1]}set acceptedFiles(e){this.$$set({acceptedFiles:e}),G()}get shownFiles(){return this.$$.ctx[22]}set shownFiles(e){this.$$set({shownFiles:e}),G()}get service(){return this.$$.ctx[2]}set service(e){this.$$set({service:e}),G()}get selectable(){return this.$$.ctx[3]}set selectable(e){this.$$set({selectable:e}),G()}}try{customElements.define("jp-asset-manager",H0(u0,{rootPath:{},maxSize:{},acceptedFiles:{},shownFiles:{},service:{},selectable:{}},[],[],!1));}catch{};export{u0 as default};
