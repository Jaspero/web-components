import{c as y,S as w,i as x,s as g,a as j,x as k,b as X,e as Y,d as E,g as p,o as i,I as m,y as G,z as N,A as z,B as A,C as B,j as f,J as C,G as I}from"./svelte.js";import"./index2.js";function J(a){j(a,"svelte-1kldrp1",".node.svelte-1kldrp1{width:100%;margin:1rem 0;border-radius:50%;cursor:grab}")}function S(a){let o,s,l,d,u;const e=a[5].default,n=k(e,a,a[4],null);return{c(){o=X(),s=Y("div"),n&&n.c(),E(s,"class","node svelte-1kldrp1")},m(t,c){p(t,o,c),p(t,s,c),n&&n.m(s,null),a[9](s),l=!0,d||(u=[i(document,"mousemove",m(a[6])),i(document,"mouseup",m(a[7])),i(s,"mousedown",a[8])],d=!0)},p(t,[c]){n&&n.p&&(!l||c&16)&&G(n,e,t,t[4],l?z(e,t[4],c,null):N(t[4]),null)},i(t){l||(A(n,t),l=!0)},o(t){B(n,t),l=!1},d(t){t&&(f(o),f(s)),n&&n.d(t),a[9](null),d=!1,C(u)}}}function q(a,o,s){let{$$slots:l={},$$scope:d}=o,u=!1,e,n,t;const c=r=>{u&&(s(1,e.style.transform="translateY("+(r.clientY-t)+"px)",e),s(1,e.style.transform+="translateX("+(r.clientX-n)+"px)",e))},v=r=>{s(0,u=!1),s(1,e.style="",e)},b=r=>{s(1,e.style.pointerEvents="none",e),s(0,u=!0),s(2,n=r.clientX),s(3,t=r.clientY),window.jpNodeGrabbed=e.parentNode.host};function h(r){I[r?"unshift":"push"](()=>{e=r,s(1,e)})}return a.$$set=r=>{"$$scope"in r&&s(4,d=r.$$scope)},[u,e,n,t,d,l,c,v,b,h]}class $ extends w{constructor(o){super(),x(this,o,q,S,g,{},J)}}try{customElements.define("jp-node",y($,{},["default"],[],!0));}catch{};export{$ as default};