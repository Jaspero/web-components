import{c as p,S as m,i as $,f,s as h,a as v,b as g,e as w,d as E,g as b,u as j,h as y,j as q,t as x,k as A,l as S,o as k}from"./svelte.js";import"./index2.js";function B(i){v(i,"svelte-1n1t62s",".accordion.svelte-1n1t62s{width:100%;margin:1rem 0;border-radius:50%}")}function C(i){let s,l;const o=i[2].default,e=g(o,i,i[1],null);return{c(){s=w("div"),e&&e.c(),E(s,"class","accordion svelte-1n1t62s")},m(t,n){b(t,s,n),e&&e.m(s,null),l=!0},p(t,[n]){e&&e.p&&(!l||n&2)&&j(e,o,t,t[1],l?q(o,t[1],n,null):y(t[1]),null)},i(t){l||(x(e,t),l=!0)},o(t){A(e,t),l=!1},d(t){t&&S(s),e&&e.d(t)}}}function L(i,s,l){let{$$slots:o={},$$scope:e}=s,{multiple:t=!1}=s,n=[];function d(a,u){if(!t){const c=n[u].title;window.dispatchEvent(new CustomEvent("request-close",{detail:c}))}}return k(()=>{n=Array.from(document.querySelectorAll("jp-bellow")),n.forEach((a,u)=>{a.addEventListener("toggle",c=>d(c,u))})}),i.$$set=a=>{"multiple"in a&&l(0,t=a.multiple),"$$scope"in a&&l(1,e=a.$$scope)},[t,e,o]}class r extends m{constructor(s){super(),$(this,s,L,C,h,{multiple:0},B)}get multiple(){return this.$$.ctx[0]}set multiple(s){this.$$set({multiple:s}),f()}}try{customElements.define("jp-accordion",p(r,{multiple:{type:"Boolean"}},["default"],[],!0));}catch{};export{r as default};
