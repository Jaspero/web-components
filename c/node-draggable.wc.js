import{c as h,S as b,i as g,s as k,a as w,b as y,m as j,e as q,d as E,g as m,v as d,u as X,h as Y,j as D,t as N,k as G,l as p,E as S,x as z}from"./svelte.js";import"./index2.js";function A(l){w(l,"svelte-qxmk8v",".node.svelte-qxmk8v{width:100%;margin:1rem 0;cursor:grab}")}function B(l){let u,t,o,i,r;const e=l[5].default,n=y(e,l,l[4],null);return{c(){u=j(),t=q("div"),n&&n.c(),E(t,"class","node svelte-qxmk8v")},m(s,c){m(s,u,c),m(s,t,c),n&&n.m(t,null),l[9](t),o=!0,i||(r=[d(document,"mousemove",l[6]),d(document,"mouseup",l[7]),d(t,"mousedown",l[8])],i=!0)},p(s,[c]){n&&n.p&&(!o||c&16)&&X(n,e,s,s[4],o?D(e,s[4],c,null):Y(s[4]),null)},i(s){o||(N(n,s),o=!0)},o(s){G(n,s),o=!1},d(s){s&&(p(u),p(t)),n&&n.d(s),l[9](null),i=!1,S(r)}}}function C(l,u,t){let{$$slots:o={},$$scope:i}=u,r=!1,e,n,s;const c=a=>{r&&(a.preventDefault(),t(1,e.style.transform="translateY("+(a.clientY-s)+"px)",e),t(1,e.style.transform+="translateX("+(a.clientX-n)+"px)",e))},v=a=>{r&&(a.preventDefault(),t(0,r=!1),t(1,e.style="",e))},$=a=>{t(1,e.style.pointerEvents="none",e),t(0,r=!0),t(2,n=a.clientX),t(3,s=a.clientY),window.jpNodeGrabbed=e.parentNode.host};function x(a){z[a?"unshift":"push"](()=>{e=a,t(1,e)})}return l.$$set=a=>{"$$scope"in a&&t(4,i=a.$$scope)},[r,e,n,s,i,o,c,v,$,x]}class f extends b{constructor(u){super(),g(this,u,C,B,k,{},A)}}try{customElements.define("jp-node-draggable",h(f,{},["default"],[],!0));}catch{};export{f as default};