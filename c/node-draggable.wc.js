import{c as h,S as b,i as g,s as k,a as w,b as y,l as q,e as x,d as X,f as p,m as d,u as Y,g as D,h as E,t as N,j as G,k as m,r as S,n as z}from"./svelte.js";import"./index.js";function A(l){w(l,"svelte-11tjskq",".jp-node.svelte-11tjskq{width:100%;margin:1rem 0;cursor:grab}")}function B(l){let u,t,r,i,o;const e=l[5].default,n=y(e,l,l[4],null);return{c(){u=q(),t=x("div"),n&&n.c(),X(t,"class","jp-node svelte-11tjskq")},m(s,c){p(s,u,c),p(s,t,c),n&&n.m(t,null),l[9](t),r=!0,i||(o=[d(document,"mousemove",l[6]),d(document,"mouseup",l[7]),d(t,"mousedown",l[8])],i=!0)},p(s,[c]){n&&n.p&&(!r||c&16)&&Y(n,e,s,s[4],r?E(e,s[4],c,null):D(s[4]),null)},i(s){r||(N(n,s),r=!0)},o(s){G(n,s),r=!1},d(s){s&&(m(u),m(t)),n&&n.d(s),l[9](null),i=!1,S(o)}}}function C(l,u,t){let{$$slots:r={},$$scope:i}=u,o=!1,e,n,s;const c=a=>{o&&(a.preventDefault(),t(1,e.style.transform="translateY("+(a.clientY-s)+"px)",e),t(1,e.style.transform+="translateX("+(a.clientX-n)+"px)",e))},$=a=>{o&&(a.preventDefault(),t(0,o=!1),t(1,e.style="",e))},j=a=>{t(1,e.style.pointerEvents="none",e),t(0,o=!0),t(2,n=a.clientX),t(3,s=a.clientY),window.jpNodeGrabbed=e.parentNode.host};function v(a){z[a?"unshift":"push"](()=>{e=a,t(1,e)})}return l.$$set=a=>{"$$scope"in a&&t(4,i=a.$$scope)},[o,e,n,s,i,r,c,$,j,v]}class f extends b{constructor(u){super(),g(this,u,C,B,k,{},A)}}try{customElements.define("jp-node-draggable",h(f,{},["default"],[],!0));}catch{};export{f as default};
//# sourceMappingURL=node-draggable.wc.js.map
