import{c as P,S as Q,i as R,f as T,s as U,a as V,e as w,b as H,d as $,g as b,h as y,n as h,j as k,k as W,l as x,m as j,t as q,o as E,p as N,q as X,r as Y,u as S,v as Z,H as tt}from"./svelte.js";import"./index2.js";import{g as L}from"./json-pointer.js";function et(s){V(s,"svelte-1p32rwt",`table.svelte-1p32rwt{width:100%;overflow:hidden;border-radius:0.5rem
}tr.svelte-1p32rwt{width:100%
}th.svelte-1p32rwt{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;text-align:left
}td.svelte-1p32rwt{padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;text-align:left
}`)}function _(s,l,r){const n=s.slice();return n[9]=l[r],n[11]=r,n}function z(s,l,r){const n=s.slice();return n[12]=l[r],n}function A(s,l,r){const n=s.slice();return n[12]=l[r],n}function B(s){let l,r=x(s[2]),n=[];for(let t=0;t<r.length;t+=1)n[t]=G(A(s,r,t));return{c(){l=w("tr");for(let t=0;t<n.length;t+=1)n[t].c();$(l,"class","odd:bg-[#F1F5F3] svelte-1p32rwt")},m(t,e){b(t,l,e);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(l,null)},p(t,e){if(e&22){r=x(t[2]);let o;for(o=0;o<r.length;o+=1){const c=A(t,r,o);n[o]?n[o].p(c,e):(n[o]=G(c),n[o].c(),n[o].m(l,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(t){t&&k(l),j(n,t)}}}function D(s){let l,r=s[1].direction==="asc"?"\u2191":"\u2193",n;return{c(){l=w("span"),n=X(r)},m(t,e){b(t,l,e),y(l,n)},p(t,e){e&2&&r!==(r=t[1].direction==="asc"?"\u2191":"\u2193")&&Y(n,r)},d(t){t&&k(l)}}}function G(s){var l;let r,n,t=s[12].label+"",e,o,c,d,u=((l=s[1])==null?void 0:l.key)===s[12].key&&D(s);function M(){return s[6](s[12])}return{c(){r=w("th"),n=w("span"),e=H(),u&&u.c(),o=H(),$(r,"class","svelte-1p32rwt"),q(r,"sortable",s[12].sortable)},m(v,a){b(v,r,a),y(r,n),n.innerHTML=t,y(r,e),u&&u.m(r,null),y(r,o),c||(d=E(r,"click",M),c=!0)},p(v,a){var f;s=v,a&4&&t!==(t=s[12].label+"")&&(n.innerHTML=t),((f=s[1])==null?void 0:f.key)===s[12].key?u?u.p(s,a):(u=D(s),u.c(),u.m(r,o)):u&&(u.d(1),u=null),a&4&&q(r,"sortable",s[12].sortable)},d(v){v&&k(r),u&&u.d(),c=!1,d()}}}function I(s){let l,r=x(s[0]),n=[];for(let t=0;t<r.length;t+=1)n[t]=K(_(s,r,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();l=N()},m(t,e){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(t,e);b(t,l,e)},p(t,e){if(e&45){r=x(t[0]);let o;for(o=0;o<r.length;o+=1){const c=_(t,r,o);n[o]?n[o].p(c,e):(n[o]=K(c),n[o].c(),n[o].m(l.parentNode,l))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(t){t&&k(l),j(n,t)}}}function nt(s){return{c:h,m:h,p:h,d:h}}function rt(s){let l,r=s[15]+"",n;return{c(){l=new tt(!1),n=N(),l.a=n},m(t,e){l.m(r,t,e),b(t,n,e)},p(t,e){e&5&&r!==(r=t[15]+"")&&l.p(r)},d(t){t&&(k(n),l.d())}}}function lt(s){return{c:h,m:h,p:h,d:h}}function J(s){let l,r,n,t,e={ctx:s,current:null,token:null,hasCatch:!1,pending:lt,then:rt,catch:nt,value:15};S(r=s[3](s[12],s[9],s[11]),e);function o(){return s[7](s[9],s[11],s[12])}return{c(){l=w("td"),e.block.c(),$(l,"class","svelte-1p32rwt")},m(c,d){b(c,l,d),e.block.m(l,e.anchor=null),e.mount=()=>l,e.anchor=null,n||(t=E(l,"click",o),n=!0)},p(c,d){s=c,e.ctx=s,d&5&&r!==(r=s[3](s[12],s[9],s[11]))&&S(r,e)||Z(e,s,d)},d(c){c&&k(l),e.block.d(),e.token=null,e=null,n=!1,t()}}}function K(s){let l,r,n=x(s[2]),t=[];for(let e=0;e<n.length;e+=1)t[e]=J(z(s,n,e));return{c(){l=w("tr");for(let e=0;e<t.length;e+=1)t[e].c();r=H(),$(l,"class","odd:bg-[#F1F5F3] svelte-1p32rwt")},m(e,o){b(e,l,o);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(l,null);y(l,r)},p(e,o){if(o&45){n=x(e[2]);let c;for(c=0;c<n.length;c+=1){const d=z(e,n,c);t[c]?t[c].p(d,o):(t[c]=J(d),t[c].c(),t[c].m(l,r))}for(;c<t.length;c+=1)t[c].d(1);t.length=n.length}},d(e){e&&k(l),j(t,e)}}}function st(s){let l,r,n,t=s[2]&&B(s),e=s[0]&&I(s);return{c(){l=w("div"),r=w("table"),t&&t.c(),n=H(),e&&e.c(),$(r,"class","svelte-1p32rwt"),$(l,"class","overflow-x-auto border")},m(o,c){b(o,l,c),y(l,r),t&&t.m(r,null),y(r,n),e&&e.m(r,null)},p(o,[c]){o[2]?t?t.p(o,c):(t=B(o),t.c(),t.m(r,n)):t&&(t.d(1),t=null),o[0]?e?e.p(o,c):(e=I(o),e.c(),e.m(r,null)):e&&(e.d(1),e=null)},i:h,o:h,d(o){o&&k(l),t&&t.d(),e&&e.d()}}}function ot(s,l,r){let{headers:n=[]}=l,{rows:t=[]}=l,{sort:e}=l;const o=W();async function c(a,f,p){const{key:m,fallback:F,pipes:C}=a;let i;try{i=L(f,m)}catch{return F||""}if(!f.pipes)return i;for(const g of C)i=await g(i,f,p);return i}function d(a){const{sortable:f,sortMethod:p}=a;if(!f)return;const m=e?.key===a.key&&e.direction==="asc"?"desc":"asc";if(p){r(0,t=[...t.sort((F,C)=>p(m,F,C))]);return}r(0,t=[...t.sort((F,C)=>{let i,g;try{i=L(F,a.key)}catch{return m==="asc"?1:-1}try{g=L(C,a.key)}catch{return m==="asc"?-1:1}if(i===g)return 0;switch(typeof i){case"number":return m==="asc"?i-g:g-i;case"string":return m==="asc"?i.localeCompare(g):g.localeCompare(i);default:return 0}})]),r(1,e={key:a.key,direction:m})}function u(a,f,p){o("rowClick",{row:a,index:f,header:p})}const M=a=>d(a),v=(a,f,p)=>u(a,f,p);return s.$$set=a=>{"headers"in a&&r(2,n=a.headers),"rows"in a&&r(0,t=a.rows),"sort"in a&&r(1,e=a.sort)},[t,e,n,c,d,u,M,v]}class O extends Q{constructor(l){super(),R(this,l,ot,st,U,{headers:2,rows:0,sort:1},et)}get headers(){return this.$$.ctx[2]}set headers(l){this.$$set({headers:l}),T()}get rows(){return this.$$.ctx[0]}set rows(l){this.$$set({rows:l}),T()}get sort(){return this.$$.ctx[1]}set sort(l){this.$$set({sort:l}),T()}}customElements.define("jp-table",P(O,{headers:{},rows:{},sort:{}},[],[],!1));export{O as default};
