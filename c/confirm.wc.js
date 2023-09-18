import{c as B,S as K,i as S,f as $,s as _,a as A,e as m,b as j,q as M,d as u,g as k,h as c,o as y,J as C,M as D,r as z,n as H,j as w,K as F,k as G,t as L}from"./svelte.js";import"./index2.js";import{c as I}from"./clickOutside.js";function J(o){A(o,"svelte-bsi9so",".overlay.svelte-bsi9so{z-index:10;position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.2)}.dialog.svelte-bsi9so{background-color:var(--background-primary);border-radius:.25rem;max-width:20rem}.dialog-header.svelte-bsi9so{padding:1rem}.dialog-header-title.svelte-bsi9so{font-size:1.5rem}.dialog-content.svelte-bsi9so{padding:2rem 1rem}.dialog-content.border-top.svelte-bsi9so{border-top:1px solid var(--border-primary)}.dialog-actions.svelte-bsi9so{display:flex;justify-content:space-between;border-top:1px solid var(--border-primary);padding:1rem}.reject-button.svelte-bsi9so,.accept-button.svelte-bsi9so{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:4rem;padding:0 1rem;border-radius:.25rem;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.reject-button.svelte-bsi9so{color:var(--danger-color);border:1px solid var(--danger-color)}.accept-button.svelte-bsi9so{background-color:var(--primary-color);color:var(--text-on-primary)}")}function T(o){let e,t;return{c(){e=m("div"),t=m("h1"),u(t,"class","dialog-header-title svelte-bsi9so"),u(e,"class","dialog-header svelte-bsi9so")},m(r,l){k(r,e,l),c(e,t),t.innerHTML=o[0]},p(r,l){l&1&&(t.innerHTML=r[0])},d(r){r&&w(e)}}}function E(o){let e;return{c(){e=m("p"),u(e,"class","dialog-content svelte-bsi9so"),L(e,"border-top",o[0])},m(t,r){k(t,e,r),e.innerHTML=o[1]},p(t,r){r&2&&(e.innerHTML=t[1]),r&1&&L(e,"border-top",t[0])},d(t){t&&w(e)}}}function N(o){let e,t,r,l,n,d,b,p,g,f,h,x,s=o[0]&&T(o),i=o[1]&&E(o);return{c(){e=m("div"),t=m("div"),s&&s.c(),r=j(),i&&i.c(),l=j(),n=m("div"),d=m("button"),b=M(o[2]),p=j(),g=m("button"),f=M(o[3]),u(d,"class","reject-button svelte-bsi9so"),u(g,"class","accept-button svelte-bsi9so"),u(n,"class","dialog-actions svelte-bsi9so"),u(t,"class","dialog svelte-bsi9so"),u(e,"class","overlay svelte-bsi9so")},m(a,v){k(a,e,v),c(e,t),s&&s.m(t,null),c(t,r),i&&i.m(t,null),c(t,l),c(t,n),c(n,d),c(d,b),c(n,p),c(n,g),c(g,f),h||(x=[y(window,"keydown",C(o[6])),y(d,"click",o[7]),y(g,"click",o[8]),D(I.call(null,t)),y(t,"click_outside",o[9])],h=!0)},p(a,[v]){a[0]?s?s.p(a,v):(s=T(a),s.c(),s.m(t,r)):s&&(s.d(1),s=null),a[1]?i?i.p(a,v):(i=E(a),i.c(),i.m(t,l)):i&&(i.d(1),i=null),v&4&&z(b,a[2]),v&8&&z(f,a[3])},i:H,o:H,d(a){a&&w(e),s&&s.d(),i&&i.d(),h=!1,F(x)}}}function O(o,e,t){let{title:r=""}=e,{message:l=""}=e,{reject:n=""}=e,{accept:d=""}=e,{closable:b=!1}=e;const p=G(),g=s=>s.key==="Escape"&&b&&p("close"),f=()=>p("confirmation",{confirmed:!1}),h=()=>p("confirmation",{confirmed:!0}),x=()=>{b&&p("close")};return o.$$set=s=>{"title"in s&&t(0,r=s.title),"message"in s&&t(1,l=s.message),"reject"in s&&t(2,n=s.reject),"accept"in s&&t(3,d=s.accept),"closable"in s&&t(4,b=s.closable)},[r,l,n,d,b,p,g,f,h,x]}class q extends K{constructor(e){super(),S(this,e,O,N,_,{title:0,message:1,reject:2,accept:3,closable:4},J)}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),$()}get message(){return this.$$.ctx[1]}set message(e){this.$$set({message:e}),$()}get reject(){return this.$$.ctx[2]}set reject(e){this.$$set({reject:e}),$()}get accept(){return this.$$.ctx[3]}set accept(e){this.$$set({accept:e}),$()}get closable(){return this.$$.ctx[4]}set closable(e){this.$$set({closable:e}),$()}}customElements.define("jp-confirm",B(q,{title:{},message:{},reject:{},accept:{},closable:{type:"Boolean"}},[],[],!1));export{q as default};