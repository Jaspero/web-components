import{S as k,i as T,s as G,Q as L,d as i,A as M,f as x,p as f,w as q,k as w,c as A,o as B,a as C,l as y,e as b,T as E,U as Q,m as H,N as R,t as v,j,R as U,V,r as W,b as _,u as D,g as F,h as I,W as J}from"./svelte.js";import"./index.js";function K(r){let e,t;return{c(){e=L("svg"),t=L("path"),i(t,"d","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"height","1em"),i(e,"viewBox","0 0 320 512"),i(e,"class","toggle-arrow svelte-4vuqqm"),M(e,"rotate",r[0])},m(a,s){x(a,e,s),f(e,t)},p(a,[s]){s&1&&M(e,"rotate",a[0])},i:q,o:q,d(a){a&&w(e)}}}function O(r,e,t){let{expanded:a=!1}=e;return r.$$set=s=>{"expanded"in s&&t(0,a=s.expanded)},[a]}class P extends k{constructor(e){super(),T(this,e,O,K,G,{expanded:0})}}function X(r){C(r,"svelte-ssr4he",".jp-tree.svelte-ssr4he{display:flex;flex-direction:column}.tree-header.svelte-ssr4he{display:flex;align-items:center}.tree-arrow.svelte-ssr4he{background:none;border:none;cursor:pointer;padding:0.5rem;display:flex;align-items:center;border-radius:50%}.tree-arrow.svelte-ssr4he:hover,.tree-arrow.svelte-ssr4he:focus{background:var(--background-tertiary)}.tree-header-title.svelte-ssr4he{flex-grow:1;margin:0}.tree-children.svelte-ssr4he{display:flex;flex-direction:column;padding-left:50px}")}function S(r){let e,t;const a=r[4].default,s=_(a,r,r[3],null);return{c(){e=b("div"),s&&s.c(),i(e,"class","tree-children svelte-ssr4he")},m(l,c){x(l,e,c),s&&s.m(e,null),t=!0},p(l,c){s&&s.p&&(!t||c&8)&&D(s,a,l,l[3],t?I(a,l[3],c,null):F(l[3]),null)},i(l){t||(v(s,l),t=!0)},o(l){j(s,l),t=!1},d(l){l&&w(e),s&&s.d(l)}}}function Y(r){let e,t,a,s,l,c,h,u,g,o,m,$;l=new P({props:{expanded:r[2]}});let n=r[2]&&S(r);return{c(){e=y(),t=b("div"),a=b("div"),s=b("button"),E(l.$$.fragment),h=y(),u=b("p"),g=y(),n&&n.c(),i(s,"type","button"),i(s,"class","tree-arrow svelte-ssr4he"),s.disabled=c=!r[1],i(u,"class","tree-header-title svelte-ssr4he"),i(a,"class","tree-header svelte-ssr4he"),i(t,"class","jp-tree svelte-ssr4he")},m(d,p){x(d,e,p),x(d,t,p),f(t,a),f(a,s),Q(l,s,null),f(a,h),f(a,u),u.innerHTML=r[0],f(t,g),n&&n.m(t,null),o=!0,m||($=[H(document,"mouseup",R(r[5])),H(s,"click",r[6])],m=!0)},p(d,[p]){const N={};p&4&&(N.expanded=d[2]),l.$set(N),(!o||p&2&&c!==(c=!d[1]))&&(s.disabled=c),(!o||p&1)&&(u.innerHTML=d[0]),d[2]?n?(n.p(d,p),p&4&&v(n,1)):(n=S(d),n.c(),v(n,1),n.m(t,null)):n&&(J(),j(n,1,1,()=>{n=null}),U())},i(d){o||(v(l.$$.fragment,d),v(n),o=!0)},o(d){j(l.$$.fragment,d),j(n),o=!1},d(d){d&&(w(e),w(t)),V(l),n&&n.d(),m=!1,W($)}}}function Z(r,e,t){let{$$slots:a={},$$scope:s}=e,{title:l="Tree Title"}=e,{collapsable:c=!0}=e,h=!c;const u=o=>{if(window.jpNodeGrabbed){const m=window.jpNodeGrabbed,$=o.target.closest("jp-tree");$&&($.isSameNode(m.parentNode)||$.appendChild(m)),window.jpNodeGrabbed=null}},g=()=>t(2,h=!h);return r.$$set=o=>{"title"in o&&t(0,l=o.title),"collapsable"in o&&t(1,c=o.collapsable),"$$scope"in o&&t(3,s=o.$$scope)},[l,c,h,s,a,u,g]}class z extends k{constructor(e){super(),T(this,e,Z,Y,G,{title:0,collapsable:1},X)}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),B()}get collapsable(){return this.$$.ctx[1]}set collapsable(e){this.$$set({collapsable:e}),B()}}try{customElements.define("jp-tree",A(z,{title:{},collapsable:{type:"Boolean"}},["default"],[],!0));}catch{};export{z as default};
//# sourceMappingURL=tree.wc.js.map
