import{c as b,S as h,i as y,s as w,a as x,x as j,b as q,e as X,d as Y,g as p,o as d,y as D,z as E,A as G,B as N,C as z,j as m,J as A,G as B}from"./svelte.js";import"./index2.js";function C(o){x(o,"svelte-1pngcq1",".node.svelte-1pngcq1{width:100%;margin:1rem 0;border-radius:50%;cursor:grab}")}function J(o){let c,s,r,i,u;const e=o[5].default,n=j(e,o,o[4],null);return{c(){c=q(),s=X("div"),n&&n.c(),Y(s,"class","node svelte-1pngcq1")},m(t,l){p(t,c,l),p(t,s,l),n&&n.m(s,null),o[9](s),r=!0,i||(u=[d(document,"mousemove",o[6]),d(document,"mouseup",o[7]),d(s,"mousedown",o[8])],i=!0)},p(t,[l]){n&&n.p&&(!r||l&16)&&D(n,e,t,t[4],r?G(e,t[4],l,null):E(t[4]),null)},i(t){r||(N(n,t),r=!0)},o(t){z(n,t),r=!1},d(t){t&&(m(c),m(s)),n&&n.d(t),o[9](null),i=!1,A(u)}}}function S(o,c,s){let{$$slots:r={},$$scope:i}=c,u=!1,e,n,t;const l=a=>{u&&(a.preventDefault(),s(1,e.style.transform="translateY("+(a.clientY-t)+"px)",e),s(1,e.style.transform+="translateX("+(a.clientX-n)+"px)",e))},$=a=>{u&&(a.preventDefault(),s(0,u=!1),s(1,e.style="",e))},v=a=>{s(1,e.style.pointerEvents="none",e),s(0,u=!0),s(2,n=a.clientX),s(3,t=a.clientY),window.jpNodeGrabbed=e.parentNode.host};function g(a){B[a?"unshift":"push"](()=>{e=a,s(1,e)})}return o.$$set=a=>{"$$scope"in a&&s(4,i=a.$$scope)},[u,e,n,t,i,r,l,$,v,g]}class f extends h{constructor(c){super(),y(this,c,S,J,w,{},C)}}try{customElements.define("jp-node",b(f,{},["default"],[],!0));}catch{};export{f as default};
