import{c as j,S as $,i as k,o as H,s as L,a as T,b as M,e as x,l as y,d,A as v,v as m,f as E,p as f,m as q,u as z,g as A,h as P,t as S,j as B,k as C,x as D,n as F}from"./svelte.js";import"./index.js";import{a as G}from"./arrow.js";function I(l){T(l,"svelte-ynfw1u",".jp-bellow-expansion-panel.svelte-ynfw1u.svelte-ynfw1u{background-color:var(--background-primary);box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);transition:0.3s}.jp-bellow-expansion-panel.svelte-ynfw1u:not(.jp-bellow-expansion-panel-expanded) .jp-bellow-expansion-content.svelte-ynfw1u{visibility:hidden}.jp-bellow-expansion-panel-expanded.svelte-ynfw1u.svelte-ynfw1u{border-radius:0.25rem;margin:1rem 0}.jp-bellow-expansion-panel-expanded.svelte-ynfw1u .jp-bellow-expansion-content.svelte-ynfw1u{padding:0.75rem 1rem}.jp-bellow-expansion-header.svelte-ynfw1u.svelte-ynfw1u{width:100%;display:flex;align-items:center;background:none;border:none;text-align:left;font-size:1rem;cursor:pointer;padding:0.75rem 1rem;transition:background-color 0.3s}.jp-bellow-expansion-header.svelte-ynfw1u.svelte-ynfw1u:hover,.jp-bellow-expansion-header.svelte-ynfw1u.svelte-ynfw1u:focus{background:var(--background-tertiary)}.jp-bellow-expansion-header-title.svelte-ynfw1u.svelte-ynfw1u{flex-grow:1;margin:0}.jp-bellow-toggle-arrow.svelte-ynfw1u.svelte-ynfw1u{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:transform 0.3s}.jp-bellow-toggle-arrow-rotate.svelte-ynfw1u.svelte-ynfw1u{transform:rotate(-180deg)}")}function J(l){let t,s,u,c,r,i,a,o,p,g;const b=l[6].default,e=M(b,l,l[5],null);return{c(){t=x("div"),s=x("button"),u=x("p"),c=y(),r=x("p"),i=y(),a=x("div"),e&&e.c(),d(u,"class","jp-bellow-expansion-header-title svelte-ynfw1u"),d(r,"class","jp-bellow-toggle-arrow svelte-ynfw1u"),v(r,"jp-bellow-toggle-arrow-rotate",l[1]),d(s,"type","button"),d(s,"class","jp-bellow-expansion-header svelte-ynfw1u"),d(a,"class","jp-bellow-expansion-content svelte-ynfw1u"),m(a,"height",l[1]?`${l[2]}px`:"0px"),d(t,"class","jp-bellow-expansion-panel svelte-ynfw1u"),v(t,"jp-bellow-expansion-panel-expanded",l[1])},m(n,w){E(n,t,w),f(t,s),f(s,u),u.innerHTML=l[0],f(s,c),f(s,r),r.innerHTML=G,f(t,i),f(t,a),e&&e.m(a,null),l[7](a),o=!0,p||(g=q(s,"click",l[4]),p=!0)},p(n,[w]){(!o||w&1)&&(u.innerHTML=n[0]),(!o||w&2)&&v(r,"jp-bellow-toggle-arrow-rotate",n[1]),e&&e.p&&(!o||w&32)&&z(e,b,n,n[5],o?P(b,n[5],w,null):A(n[5]),null),(!o||w&6)&&m(a,"height",n[1]?`${n[2]}px`:"0px"),(!o||w&2)&&v(t,"jp-bellow-expansion-panel-expanded",n[1])},i(n){o||(S(e,n),o=!0)},o(n){B(e,n),o=!1},d(n){n&&C(t),e&&e.d(n),l[7](null),p=!1,g()}}}function K(l,t,s){let{$$slots:u={},$$scope:c}=t;const r=D();let i=!1,{title:a="Panel Title"}=t,o=0,p;function g(){s(1,i=!i),i?s(2,o=p.scrollHeight):s(2,o=0),r("toggle",{expanded:i})}window.addEventListener("request-close",e=>{e.detail!==a&&s(1,i=!1)});function b(e){F[e?"unshift":"push"](()=>{p=e,s(3,p)})}return l.$$set=e=>{"title"in e&&s(0,a=e.title),"$$scope"in e&&s(5,c=e.$$scope)},[a,i,o,p,g,c,u,b]}class h extends ${constructor(t){super(),k(this,t,K,J,L,{title:0},I)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),H()}}try{customElements.define("jp-bellow",j(h,{title:{}},["default"],[],!0));}catch{};export{h as default};
//# sourceMappingURL=bellow.wc.js.map
