var O=Object.defineProperty,S=(a,e,s)=>e in a?O(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,j=(a,e,s)=>S(a,typeof e!="symbol"?e+"":e,s);import{c as J,S as V,i as E,o as u,s as I,l as g,e as h,d as m,f as c,w as f,k as d,x as k,G as z,z as A,p as B,B as C,n as G}from"./svelte.js";import"./index.js";function b(a){let e,s;return{c(){e=h("span"),s=A(a[0])},m(o,n){c(o,e,n),B(e,s)},p(o,n){n&1&&C(s,o[0])},d(o){o&&d(e)}}}function q(a){let e,s,o,n,i=a[0]&&b(a);return{c(){i&&i.c(),e=g(),s=h("div"),o=g(),n=h("textarea"),m(n,"name",a[1]),m(n,"id",a[2]),n.value=a[3],n.hidden=!0},m(t,l){i&&i.m(t,l),c(t,e,l),c(t,s,l),a[8](s),c(t,o,l),c(t,n,l)},p(t,[l]){t[0]?i?i.p(t,l):(i=b(t),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),l&2&&m(n,"name",t[1]),l&4&&m(n,"id",t[2]),l&8&&(n.value=t[3])},i:f,o:f,d(t){t&&(d(e),d(s),d(o),d(n)),i&&i.d(t),a[8](null)}}}function D(a,e,s){let{label:o=""}=e,{name:n=null}=e,{id:i=null}=e,{value:t={}}=e,{options:l={}}=e,p,v,$;const y=k(),w=()=>p.get();z(()=>{typeof t=="string"&&s(5,t=JSON.parse(t)),s(6,l.onChange=async()=>{try{s(5,t=p.get()),y("value",{value:t}),s(3,v=JSON.stringify(t))}catch(r){console.log(r)}},l),p=new window.JSONEditor($,l),p.set(t)});function N(r){G[r?"unshift":"push"](()=>{$=r,s(4,$)})}return a.$$set=r=>{"label"in r&&s(0,o=r.label),"name"in r&&s(1,n=r.name),"id"in r&&s(2,i=r.id),"value"in r&&s(5,t=r.value),"options"in r&&s(6,l=r.options)},[o,n,i,v,$,t,l,w,N]}class x extends V{constructor(e){super(),E(this,e,D,q,I,{label:0,name:1,id:2,value:5,options:6,getValue:7})}get label(){return this.$$.ctx[0]}set label(e){this.$$set({label:e}),u()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),u()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),u()}get value(){return this.$$.ctx[5]}set value(e){this.$$set({value:e}),u()}get options(){return this.$$.ctx[6]}set options(e){this.$$set({options:e}),u()}get getValue(){return this.$$.ctx[7]}}try{customElements.define("jp-json-editor",J(x,{label:{},name:{},id:{},value:{},options:{}},[],["getValue"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},j(e,"formAssociated",!0),e}));}catch{};export{x as default};
//# sourceMappingURL=json-editor.wc.js.map
