import{c as z,S as H,i as L,f as E,s as M,a as T,z as j,e as f,b,G as $,d as h,m as w,H as k,g as B,h as m,o as q,A,B as C,C as D,D as G,E as I,j as P,k as S,I as F}from"./svelte.js";import"./index2.js";function J(t){T(t,"svelte-1i8ehl0",".expansion-panel.svelte-1i8ehl0.svelte-1i8ehl0{background-color:var(--background-primary);box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);transition:0.3s}.expansion-panel.svelte-1i8ehl0:not(.expanded) .expansion-content.svelte-1i8ehl0{visibility:hidden}.expansion-panel.expanded.svelte-1i8ehl0.svelte-1i8ehl0{border-radius:0.25rem;margin:1rem 0}.expansion-panel.expanded.svelte-1i8ehl0 .expansion-content.svelte-1i8ehl0{padding:0.75rem 1rem}.expansion-header.svelte-1i8ehl0.svelte-1i8ehl0{width:100%;display:flex;align-items:center;background:none;border:none;text-align:left;font-size:1rem;cursor:pointer;padding:0.75rem 1rem;transition:background-color 0.3s}.expansion-header.svelte-1i8ehl0.svelte-1i8ehl0:hover,.expansion-header.svelte-1i8ehl0.svelte-1i8ehl0:focus{background:var(--background-tertiary)}.expansion-header-title.svelte-1i8ehl0.svelte-1i8ehl0{flex-grow:1;margin:0}.expansion-content.svelte-1i8ehl0.svelte-1i8ehl0{overflow:hidden;padding:0 1rem;transition:0.3s ease-out}.toggle-arrow.svelte-1i8ehl0.svelte-1i8ehl0{width:1rem;height:1rem;min-width:1rem;min-height:1rem;-webkit-transition:transform 0.3s;-o-transition:transform 0.3s;-moz-transition:transform 0.3s;transition:transform 0.3s}.toggle-arrow.rotate.svelte-1i8ehl0.svelte-1i8ehl0{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}")}function K(t){let s,n,c,g,r,d,v,i,l,x,u;const a=t[6].default,o=j(a,t,t[5],null);return{c(){s=f("div"),n=f("button"),c=f("p"),g=b(),r=$("svg"),d=$("path"),v=b(),i=f("div"),o&&o.c(),h(c,"class","expansion-header-title svelte-1i8ehl0"),h(d,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),h(r,"xmlns","http://www.w3.org/2000/svg"),h(r,"viewBox","0 0 320 512"),h(r,"class","toggle-arrow svelte-1i8ehl0"),w(r,"rotate",t[1]),h(n,"type","button"),h(n,"class","expansion-header svelte-1i8ehl0"),h(i,"class","expansion-content svelte-1i8ehl0"),k(i,"height",t[1]?`${t[2]}px`:"0px"),h(s,"class","expansion-panel svelte-1i8ehl0"),w(s,"expanded",t[1])},m(e,p){B(e,s,p),m(s,n),m(n,c),c.innerHTML=t[0],m(n,g),m(n,r),m(r,d),m(s,v),m(s,i),o&&o.m(i,null),t[7](i),l=!0,x||(u=q(n,"click",t[4]),x=!0)},p(e,[p]){(!l||p&1)&&(c.innerHTML=e[0]),(!l||p&2)&&w(r,"rotate",e[1]),o&&o.p&&(!l||p&32)&&A(o,a,e,e[5],l?D(a,e[5],p,null):C(e[5]),null),(!l||p&6)&&k(i,"height",e[1]?`${e[2]}px`:"0px"),(!l||p&2)&&w(s,"expanded",e[1])},i(e){l||(G(o,e),l=!0)},o(e){I(o,e),l=!1},d(e){e&&P(s),o&&o.d(e),t[7](null),x=!1,u()}}}function N(t,s,n){let{$$slots:c={},$$scope:g}=s;const r=S();let d=!1,{title:v="Panel Title"}=s,i=0,l;function x(){n(1,d=!d),d?n(2,i=l.scrollHeight):n(2,i=0),r("toggle",{expanded:d})}window.addEventListener("request-close",a=>{a.detail!==v&&n(1,d=!1)});function u(a){F[a?"unshift":"push"](()=>{l=a,n(3,l)})}return t.$$set=a=>{"title"in a&&n(0,v=a.title),"$$scope"in a&&n(5,g=a.$$scope)},[v,d,i,l,x,g,c,u]}class y extends H{constructor(s){super(),L(this,s,N,K,M,{title:0},J)}get title(){return this.$$.ctx[0]}set title(s){this.$$set({title:s}),E()}}try{customElements.define("jp-bellow",z(y,{title:{}},["default"],[],!0));}catch{};export{y as default};
