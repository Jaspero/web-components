var He=Object.defineProperty,De=(s,e,t)=>e in s?He(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ue=(s,e,t)=>(De(s,typeof e!="symbol"?e+"":e,t),t);import{c as Ke,S as Ne,i as _e,f as S,s as Oe,a as Pe,m as D,e as z,A as de,n as Z,d as c,a0 as ce,p as H,g as I,r as x,L as F,v as U,y as te,B as ue,z as P,l as T,E as ie,w as Re,M as be,W as Ge,Z as We,_ as Ze,q as ne,x as me,a2 as Fe}from"./svelte.js";import"./index2.js";import{c as Je}from"./clickOutside.js";function Qe(s){Pe(s,"svelte-b4nuti",`.has-hint.svelte-b4nuti.svelte-b4nuti{position:relative;margin-bottom:1.25rem}.wrapper.svelte-b4nuti.svelte-b4nuti{position:relative}.select.svelte-b4nuti.svelte-b4nuti{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 0.75rem;gap:0.75rem;background-color:transparent;border:1px solid var(--border-primary);-webkit-border-radius:0.25rem;-moz-border-radius:0.25rem;border-radius:0.25rem}.select.svelte-b4nuti.svelte-b4nuti:focus{outline:none;border-color:var(--primary-color);-webkit-box-shadow:inset 0 0 0 1px var(--primary-color);-moz-box-shadow:inset 0 0 0 1px var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-b4nuti.svelte-b4nuti{-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);-webkit-box-shadow:inset 0 -2px 1px -1px var(--primary-color);-moz-box-shadow:inset 0 -2px 1px -1px var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-b4nuti.svelte-b4nuti:disabled{opacity:0.5}.select-label.svelte-b4nuti.svelte-b4nuti{position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:0.3s;-o-transition:0.3s;-moz-transition:0.3s;transition:0.3s;font-size:1rem}.select-label.move.svelte-b4nuti.svelte-b4nuti{top:0.25rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);font-size:0.75rem}input:required+.select.svelte-b4nuti .select-label.svelte-b4nuti::after{content:' *'}input.svelte-b4nuti:required:invalid+.select.svelte-b4nuti{border-color:var(--danger-color)}.hidden-input.svelte-b4nuti.svelte-b4nuti{top:0;height:100%;opacity:0;position:absolute;width:100%;z-index:-1}.select-option.svelte-b4nuti.svelte-b4nuti{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.select-option-padding.svelte-b4nuti.svelte-b4nuti{padding:1rem 0 0 0}.select-arrow.svelte-b4nuti.svelte-b4nuti{width:1rem;height:1rem;min-width:1rem;min-height:1rem;-webkit-transition:0.3s;-o-transition:0.3s;-moz-transition:0.3s;transition:0.3s}.select-arrow.rotate.svelte-b4nuti.svelte-b4nuti{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}.select-hint.svelte-b4nuti.svelte-b4nuti{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:0.75rem;padding:0 0.75rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-b4nuti.svelte-b4nuti:hover{z-index:255;overflow:unset}.menu.svelte-b4nuti.svelte-b4nuti{z-index:100;position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-border-bottom-left-radius:0.25rem;-moz-border-radius-bottomleft:0.25rem;border-bottom-left-radius:0.25rem;-webkit-border-bottom-right-radius:0.25rem;-moz-border-radius-bottomright:0.25rem;border-bottom-right-radius:0.25rem;-webkit-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);-moz-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);background-color:var(--background-primary)}.menu-buttons.svelte-b4nuti.svelte-b4nuti{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:300px;overflow-y:auto}.menu-button.svelte-b4nuti.svelte-b4nuti{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border:none;border-bottom:1px solid var(--border-secondary);gap:0.75rem;padding:0.75rem;text-align:left;outline:none;-webkit-transition:0.3s;-o-transition:0.3s;-moz-transition:0.3s;transition:0.3s}.loadmore.svelte-b4nuti.svelte-b4nuti{width:100%;display:flex;justify-content:center;padding:10px}.loadmore.svelte-b4nuti button.svelte-b4nuti{padding:5px;border-radius:4px;background:var(--primary-color);color:var(--text-on-primary)}.menu-button.selected.svelte-b4nuti.svelte-b4nuti{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-b4nuti.svelte-b4nuti:disabled{opacity:0.33}.menu-button.svelte-b4nuti.svelte-b4nuti:not(:disabled):hover,.menu-button.svelte-b4nuti.svelte-b4nuti:focus{background-color:var(--background-secondary)}.search-field.svelte-b4nuti.svelte-b4nuti{font-size:0.75rem;line-height:1rem;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;box-sizing:border-box;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;gap:0.75rem;padding:0.75rem;background-color:transparent;border-bottom:1px solid var(--border-secondary)}.search-input.svelte-b4nuti.svelte-b4nuti{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;font-size:1rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding:1.5rem 0.75rem calc(0.5rem - 2px);outline:none;border:1px solid var(--border-primary);-webkit-border-radius:0.25rem;-moz-border-radius:0.25rem;border-radius:0.25rem}.search-label.svelte-b4nuti.svelte-b4nuti{position:absolute;top:50%;left:1.5rem;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);font-size:1rem;-webkit-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-o-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-moz-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.search-label.move.svelte-b4nuti.svelte-b4nuti{top:1rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);font-size:0.75rem}.overlay.svelte-b4nuti.svelte-b4nuti{z-index:100;position:fixed;top:0;left:0;width:100vw;height:100vh}`)}function pe(s,e,t){const i=s.slice();return i[51]=e[t],i[52]=e,i[53]=t,i}function fe(s){let e;return{c(){e=z("div"),c(e,"class","label")},m(t,i){I(t,e,i),e.innerHTML=s[6]},p(t,i){i[0]&64&&(e.innerHTML=t[6])},d(t){t&&T(e)}}}function Xe(s){let e;return{c(){e=z("span"),c(e,"class","select-label svelte-b4nuti"),H(e,"move",s[0]||s[11])},m(t,i){I(t,e,i),e.innerHTML=s[6]},p(t,i){i[0]&64&&(e.innerHTML=t[6]),i[0]&2049&&H(e,"move",t[0]||t[11])},d(t){t&&T(e)}}}function et(s){let e;return{c(){e=z("span"),e.textContent="Loading...",c(e,"class","select-label svelte-b4nuti")},m(t,i){I(t,e,i)},p:P,d(t){t&&T(e)}}}function ve(s){let e;return{c(){e=z("span"),c(e,"class","select-hint svelte-b4nuti")},m(t,i){I(t,e,i),e.innerHTML=s[3]},p(t,i){i[0]&8&&(e.innerHTML=t[3])},d(t){t&&T(e)}}}function xe(s){let e,t,i,l,r=[],g=new Map,m,k,h,Y,u=s[8].search&&ge(s),V=be(s[10]);const L=o=>o[51];for(let o=0;o<V.length;o+=1){let w=pe(s,V,o),A=L(w);g.set(A,r[o]=we(A,w))}let v=s[15]&&ye(),p=s[8].loadMore&&!s[15]&&$e(s);return{c(){e=z("div"),t=z("div"),u&&u.c(),i=D(),l=z("div");for(let o=0;o<r.length;o+=1)r[o].c();m=D(),v&&v.c(),k=D(),p&&p.c(),c(l,"class","menu-buttons svelte-b4nuti"),c(t,"class","menu svelte-b4nuti"),c(t,"style",s[17]),c(t,"role","dialog"),c(e,"class","overlay svelte-b4nuti")},m(o,w){I(o,e,w),x(e,t),u&&u.m(t,null),x(t,i),x(t,l);for(let A=0;A<r.length;A+=1)r[A]&&r[A].m(l,null);x(l,m),v&&v.m(l,null),x(t,k),p&&p.m(t,null),h||(Y=[Ge(Je.call(null,t)),U(t,"click_outside",s[44]),U(t,"keydown",s[23])],h=!0)},p(o,w){o[8].search?u?u.p(o,w):(u=ge(o),u.c(),u.m(t,i)):u&&(u.d(1),u=null),w[0]&265728&&(V=be(o[10]),r=We(r,w,L,1,o,V,g,l,Ze,we,m,pe)),o[15]?v||(v=ye(),v.c(),v.m(l,null)):v&&(v.d(1),v=null),o[8].loadMore&&!o[15]?p?p.p(o,w):(p=$e(o),p.c(),p.m(t,null)):p&&(p.d(1),p=null),w[0]&131072&&c(t,"style",o[17])},d(o){o&&T(e),u&&u.d();for(let w=0;w<r.length;w+=1)r[w].d();v&&v.d(),p&&p.d(),h=!1,ie(Y)}}}function ge(s){let e,t,i,l,r,g;return{c(){e=z("div"),t=z("span"),t.textContent="Search",i=D(),l=z("input"),c(t,"class","search-label svelte-b4nuti"),H(t,"move",s[20]||s[16]),c(l,"name","search"),c(l,"type","text"),c(l,"class","search-input svelte-b4nuti"),c(e,"class","search-field svelte-b4nuti")},m(m,k){I(m,e,k),x(e,t),x(e,i),x(e,l),F(l,s[16]),r||(g=[U(l,"input",s[37]),U(l,"input",s[38]),U(l,"focus",s[39]),U(l,"blur",s[40])],r=!0)},p(m,k){k[0]&1114112&&H(t,"move",m[20]||m[16]),k[0]&65536&&l.value!==m[16]&&F(l,m[16])},d(m){m&&T(e),r=!1,ie(g)}}}function he(s){let e,t;return{c(){e=Z("svg"),t=Z("path"),c(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","1rem"),c(e,"height","1rem"),c(e,"viewBox","0 0 448 512")},m(i,l){I(i,e,l),x(e,t)},d(i){i&&T(e)}}}function we(s,e){let t,i,l=(e[51].label||e[51].value)+"",r,g,m,k=e[53],h,Y,u=e[51].selected&&he();const V=()=>e[41](t,k),L=()=>e[41](null,k);function v(){return e[42](e[51],e[52],e[53])}return{key:s,first:null,c(){t=z("button"),i=z("span"),r=de(l),g=D(),u&&u.c(),c(t,"type","button"),c(t,"class","menu-button svelte-b4nuti"),t.disabled=m=e[51].disabled,H(t,"selected",e[51].selected),this.first=t},m(p,o){I(p,t,o),x(t,i),x(i,r),x(t,g),u&&u.m(t,null),V(),h||(Y=U(t,"click",te(v)),h=!0)},p(p,o){e=p,o[0]&1024&&l!==(l=(e[51].label||e[51].value)+"")&&ue(r,l),e[51].selected?u||(u=he(),u.c(),u.m(t,null)):u&&(u.d(1),u=null),o[0]&1024&&m!==(m=e[51].disabled)&&(t.disabled=m),k!==e[53]&&(L(),k=e[53],V()),o[0]&1024&&H(t,"selected",e[51].selected)},d(p){p&&T(t),u&&u.d(),L(),h=!1,Y()}}}function ye(s){let e;return{c(){e=z("span"),e.textContent="Loading...",ne(e,"display","block"),ne(e,"padding","0.75rem"),ne(e,"text-align","center")},m(t,i){I(t,e,i)},d(t){t&&T(e)}}}function $e(s){let e;function t(r,g){return r[14]?tt:it}let i=t(s),l=i(s);return{c(){e=z("div"),l.c(),c(e,"class","loadmore svelte-b4nuti")},m(r,g){I(r,e,g),l.m(e,null)},p(r,g){i===(i=t(r))&&l?l.p(r,g):(l.d(1),l=i(r),l&&(l.c(),l.m(e,null)))},d(r){r&&T(e),l.d()}}}function tt(s){let e;return{c(){e=z("button"),e.textContent="Loading...",c(e,"type","button"),e.disabled=!0,c(e,"class","svelte-b4nuti")},m(t,i){I(t,e,i)},p:P,d(t){t&&T(e)}}}function it(s){let e,t,i;return{c(){e=z("button"),e.textContent="Load more",c(e,"type","button"),c(e,"class","svelte-b4nuti")},m(l,r){I(l,e,r),t||(i=U(e,"click",Fe(te(s[43]))),t=!0)},p:P,d(l){l&&T(e),t=!1,i()}}}function nt(s){let e,t,i,l,r,g,m,k=(s[19]||"")+"",h,Y,u,V,L,v,p,o,w,A,q=s[6]&&s[7]=="outside"&&fe(s);function O(d,f){if(d[13])return et;if(d[6]&&d[7]=="inside")return Xe}let N=O(s),y=N&&N(s),$=s[3]&&ve(s),M=s[11]&&xe(s);return{c(){q&&q.c(),e=D(),t=z("div"),i=z("input"),l=D(),r=z("button"),y&&y.c(),g=D(),m=z("span"),h=de(k),u=D(),V=Z("svg"),L=Z("path"),p=D(),$&&$.c(),o=D(),M&&M.c(),c(i,"class","hidden-input svelte-b4nuti"),c(i,"tabindex","-1"),c(i,"id",s[4]),c(i,"name",s[5]),i.required=s[2],c(m,"class",Y=ce(`select-option ${s[7]=="outside"||!s[6]?"":"select-option-padding"}`)+" svelte-b4nuti"),c(L,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),c(V,"xmlns","http://www.w3.org/2000/svg"),c(V,"viewBox","0 0 320 512"),c(V,"class","select-arrow svelte-b4nuti"),H(V,"rotate",s[11]),c(r,"type","button"),c(r,"class","select svelte-b4nuti"),r.disabled=v=s[1]||s[13],H(r,"toggled",s[11]),c(t,"class","wrapper svelte-b4nuti"),H(t,"has-hint",s[3])},m(d,f){q&&q.m(d,f),I(d,e,f),I(d,t,f),x(t,i),F(i,s[0]),x(t,l),x(t,r),y&&y.m(r,null),x(r,g),x(r,m),x(m,h),x(r,u),x(r,V),x(V,L),s[36](r),x(t,p),$&&$.m(t,null),x(t,o),M&&M.m(t,null),w||(A=[U(i,"input",s[35]),U(r,"click",te(s[22])),U(r,"keydown",s[23])],w=!0)},p(d,f){d[6]&&d[7]=="outside"?q?q.p(d,f):(q=fe(d),q.c(),q.m(e.parentNode,e)):q&&(q.d(1),q=null),f[0]&16&&c(i,"id",d[4]),f[0]&32&&c(i,"name",d[5]),f[0]&4&&(i.required=d[2]),f[0]&1&&i.value!==d[0]&&F(i,d[0]),N===(N=O(d))&&y?y.p(d,f):(y&&y.d(1),y=N&&N(d),y&&(y.c(),y.m(r,g))),f[0]&524288&&k!==(k=(d[19]||"")+"")&&ue(h,k),f[0]&192&&Y!==(Y=ce(`select-option ${d[7]=="outside"||!d[6]?"":"select-option-padding"}`)+" svelte-b4nuti")&&c(m,"class",Y),f[0]&2048&&H(V,"rotate",d[11]),f[0]&8194&&v!==(v=d[1]||d[13])&&(r.disabled=v),f[0]&2048&&H(r,"toggled",d[11]),d[3]?$?$.p(d,f):($=ve(d),$.c(),$.m(t,o)):$&&($.d(1),$=null),d[11]?M?M.p(d,f):(M=xe(d),M.c(),M.m(t,null)):M&&(M.d(1),M=null),f[0]&8&&H(t,"has-hint",d[3])},i:P,o:P,d(d){d&&(T(e),T(t)),q&&q.d(d),y&&y.d(),s[36](null),$&&$.d(),M&&M.d(),w=!1,ie(A)}}}function st(s,e,t){let i=[],l=!1,r=!1,g=!1,m="",{wording:k={LOADING:"Loading..."}}=e,{attachedInternals:h}=e,{minSelects:Y=0}=e,{maxSelects:u=null}=e,{disabled:V=!1}=e,{required:L=!1}=e,{hint:v=""}=e,{value:p=""}=e,{internalValue:o=""}=e,{id:w=""}=e,{name:A=""}=e,{label:q=""}=e,{labelType:O="inside"}=e;const N=()=>i.filter(n=>n.selected).map(n=>n.value);let{service:y}=e,{validationMessages:$={}}=e,{requiredValidationMessage:M}=e,{minselectsValidationMessage:d}=e,{maxselectsValidationMessage:f}=e,{singleSelect:J=!1}=e,se=!1,_=!1,C,re,K=[],Q="",le,ae,R=!1;const ze=Re(),Ve=()=>{h.reportValidity()};async function oe(){t(10,i=i.filter(a=>a.selected)),t(15,g=!0);const n=await y.search(m);t(10,i=[...i,...n.map(a=>(a.selected=!1,a))]),t(15,g=!1)}function G(n){var a;if((a=n?.target)!=null&&a.closest(".menu"))return;const b=C.getBoundingClientRect(),j=window.innerHeight-b.bottom,X=300;let B="";j<X?B=`
        width: ${b.width}px;
        bottom: ${window.innerHeight-b.top}px;
        left: ${b.left}px;
      `:B=`
        width: ${b.width}px;
        top: ${b.bottom}px;
        left: ${b.left}px;
      `,t(17,re=B),t(11,_=!_),setTimeout(_?()=>{const E=i.findIndex(ee=>!ee.disabled);E!==-1&&K[E].focus()}:()=>{se?C.nextElementSibling.focus():C.focus()},10)}function W(n,a){if(a==="next"){for(let b=n+1;b<i.length;b++)if(!i[b].disabled)return b}else if(a==="previous"){for(let b=n-1;b>=0;b--)if(!i[b].disabled)return b}return n}function Me(n){if(R)return;const a=K.findIndex(j=>j===document.activeElement);let b;if(_){if(n.key==="Escape"){G(),C.focus();return}const j=n.key==="Home"||n.key==="ArrowUp"&&n.metaKey,X=n.key==="End"||n.key==="ArrowDown"&&n.metaKey;if(j){n.preventDefault();const B=i.findIndex(E=>!E.disabled);B!==-1&&K[B].focus();return}if(X){n.preventDefault();const B=i.slice().reverse().findIndex(ee=>!ee.disabled),E=B!==-1?i.length-1-B:-1;E!==-1&&K[E].focus();return}if(["ArrowDown","ArrowUp"].includes(n.key)&&(n.preventDefault(),n.key==="ArrowUp"?b=W(a,"previous"):b=W(a,"next"),K[b].focus()),n.key==="Tab"){if(n.preventDefault(),se=!0,n.shiftKey){if(b=W(a,"previous"),a===b){G(),C.focus();return}}else if(b=W(a,"next"),a===b){G(),C.focus();return}K[b].focus()}if(/^[a-z\d]$/i.test(n.key)){clearTimeout(le),Q+=n.key;const B=i.map(E=>E.label?E.label:E.value).findIndex(E=>E.toLowerCase().includes(Q.toLowerCase()));B!==-1&&K[B].focus(),le=setTimeout(()=>{Q=""},500)}}}async function Se(n){t(13,l=!0);const a=Array.isArray(n)?n:n.split(",");await Promise.all(a.map(async b=>{let j;y.getSingle?(j=await y.getSingle(b),j.selected=!0):j={value:b,selected:!0},t(10,i=[...i,j])})),t(13,l=!1)}function qe(){o=this.value,t(0,o),t(10,i),t(2,L),t(25,h),t(31,M),t(30,$),t(12,C),t(26,Y),t(32,d),t(27,u),t(33,f),t(28,p)}function Ye(n){me[n?"unshift":"push"](()=>{C=n,t(12,C)})}const Le=()=>{g||oe()};function je(){m=this.value,t(16,m)}const Ie=()=>t(20,R=!0),Te=()=>t(20,R=!1);function Ae(n,a){me[n?"unshift":"push"](()=>{K[a]=n,t(18,K)})}const Ce=(n,a,b)=>{J?(t(10,i=i.map(j=>(j.selected=j===n,j))),t(11,_=!1)):t(10,a[b].selected=!n.selected,i)},Ee=async()=>{t(14,r=!0),t(10,i=i.concat(await y.loadMore(m))),t(14,r=!1)},Be=()=>t(11,_=!1);return s.$$set=n=>{"wording"in n&&t(24,k=n.wording),"attachedInternals"in n&&t(25,h=n.attachedInternals),"minSelects"in n&&t(26,Y=n.minSelects),"maxSelects"in n&&t(27,u=n.maxSelects),"disabled"in n&&t(1,V=n.disabled),"required"in n&&t(2,L=n.required),"hint"in n&&t(3,v=n.hint),"value"in n&&t(28,p=n.value),"internalValue"in n&&t(0,o=n.internalValue),"id"in n&&t(4,w=n.id),"name"in n&&t(5,A=n.name),"label"in n&&t(6,q=n.label),"labelType"in n&&t(7,O=n.labelType),"service"in n&&t(8,y=n.service),"validationMessages"in n&&t(30,$=n.validationMessages),"requiredValidationMessage"in n&&t(31,M=n.requiredValidationMessage),"minselectsValidationMessage"in n&&t(32,d=n.minselectsValidationMessage),"maxselectsValidationMessage"in n&&t(33,f=n.maxselectsValidationMessage),"singleSelect"in n&&t(9,J=n.singleSelect)},s.$$.update=()=>{if(s.$$.dirty[0]&2048&&(_?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY=""),s.$$.dirty[0]&1308627972|s.$$.dirty[1]&7){t(10,i=i.filter(a=>a.selected).concat(i.filter(a=>!a.selected)));const n=i.filter(a=>a.selected).length;n==0&&L?h.setValidity({customError:!0},M||$.required||"At least one item needs to be checked.",C):n<Y?h.setValidity({customError:!0},d||$.minselects||"Below limit checks.",C):u!==null&&n>u?h.setValidity({customError:!0},f||$.maxselects||"Above limit checks.",C):h.setValidity({}),h.checkValidity(),t(0,o=i.filter(a=>a.selected).map(a=>a.value).join(",")),t(19,ae=i.filter(a=>a.selected).map(a=>a.label?a.label:a.value)),ze("value",i.filter(a=>a.selected).map(a=>a.value))}s.$$.dirty[0]&268435456&&(p?Se(p):t(10,i=[]))},[o,V,L,v,w,A,q,O,y,J,i,_,C,l,r,g,m,re,K,ae,R,oe,G,Me,k,h,Y,u,p,N,$,M,d,f,Ve,qe,Ye,Le,je,Ie,Te,Ae,Ce,Ee,Be]}class ke extends Ne{constructor(e){super(),_e(this,e,st,nt,Oe,{wording:24,attachedInternals:25,minSelects:26,maxSelects:27,disabled:1,required:2,hint:3,value:28,internalValue:0,id:4,name:5,label:6,labelType:7,getValue:29,service:8,validationMessages:30,requiredValidationMessage:31,minselectsValidationMessage:32,maxselectsValidationMessage:33,singleSelect:9,reportValidity:34},Qe,[-1,-1])}get wording(){return this.$$.ctx[24]}set wording(e){this.$$set({wording:e}),S()}get attachedInternals(){return this.$$.ctx[25]}set attachedInternals(e){this.$$set({attachedInternals:e}),S()}get minSelects(){return this.$$.ctx[26]}set minSelects(e){this.$$set({minSelects:e}),S()}get maxSelects(){return this.$$.ctx[27]}set maxSelects(e){this.$$set({maxSelects:e}),S()}get disabled(){return this.$$.ctx[1]}set disabled(e){this.$$set({disabled:e}),S()}get required(){return this.$$.ctx[2]}set required(e){this.$$set({required:e}),S()}get hint(){return this.$$.ctx[3]}set hint(e){this.$$set({hint:e}),S()}get value(){return this.$$.ctx[28]}set value(e){this.$$set({value:e}),S()}get internalValue(){return this.$$.ctx[0]}set internalValue(e){this.$$set({internalValue:e}),S()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),S()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),S()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),S()}get labelType(){return this.$$.ctx[7]}set labelType(e){this.$$set({labelType:e}),S()}get getValue(){return this.$$.ctx[29]}get service(){return this.$$.ctx[8]}set service(e){this.$$set({service:e}),S()}get validationMessages(){return this.$$.ctx[30]}set validationMessages(e){this.$$set({validationMessages:e}),S()}get requiredValidationMessage(){return this.$$.ctx[31]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),S()}get minselectsValidationMessage(){return this.$$.ctx[32]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),S()}get maxselectsValidationMessage(){return this.$$.ctx[33]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),S()}get singleSelect(){return this.$$.ctx[9]}set singleSelect(e){this.$$set({singleSelect:e}),S()}get reportValidity(){return this.$$.ctx[34]}}try{customElements.define("jp-multisearch",Ke(ke,{wording:{},attachedInternals:{},minSelects:{},maxSelects:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},internalValue:{},id:{},name:{},label:{},labelType:{},service:{},validationMessages:{},requiredValidationMessage:{},minselectsValidationMessage:{},maxselectsValidationMessage:{},singleSelect:{type:"Boolean"}},[],["getValue","reportValidity"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},Ue(e,"formAssociated",!0),e}));}catch{};export{ke as default};
