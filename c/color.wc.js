var V=Object.defineProperty,T=(a,e,t)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,j=(a,e,t)=>T(a,typeof e!="symbol"?e+"":e,t);import{c as B,S as H,i as L,f as d,s as M,a as w,b as A,e as p,g as c,h,T as v,l as D,J as f,o as b,D as E}from"./svelte.js";import"./index.js";function F(a){w(a,"svelte-1s97q0h",".label.svelte-1s97q0h{display:flex;flex-direction:column;align-items:flex-start;gap:8px}")}function g(a){let e;return{c(){e=p("div"),c(e,"class","label svelte-1s97q0h")},m(t,n){h(t,e,n),e.innerHTML=a[5]},p(t,n){n&32&&(e.innerHTML=t[5])},d(t){t&&b(e)}}}function S(a){let e,t,n,u,s=a[3]&&g(a);return{c(){s&&s.c(),e=A(),t=p("input"),c(t,"type","color"),c(t,"id",a[1]),c(t,"name",a[2]),t.disabled=a[4]},m(r,i){s&&s.m(r,i),h(r,e,i),h(r,t,i),v(t,a[0]),n||(u=D(t,"input",a[9]),n=!0)},p(r,[i]){r[3]?s?s.p(r,i):(s=g(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),i&2&&c(t,"id",r[1]),i&4&&c(t,"name",r[2]),i&16&&(t.disabled=r[4]),i&1&&v(t,r[0])},i:f,o:f,d(r){r&&(b(e),b(t)),s&&s.d(r),n=!1,u()}}}function k(a,e,t){let n,{attachedInternals:u}=e,{id:s}=e,{name:r}=e,{value:i="e65100"}=e,{label:$=""}=e,{disabled:m=!1}=e,{required:o=!1}=e;const q=()=>i,I=E();function y(){i=this.value,t(0,i)}return a.$$set=l=>{"attachedInternals"in l&&t(6,u=l.attachedInternals),"id"in l&&t(1,s=l.id),"name"in l&&t(2,r=l.name),"value"in l&&t(0,i=l.value),"label"in l&&t(3,$=l.label),"disabled"in l&&t(4,m=l.disabled),"required"in l&&t(7,o=l.required)},a.$$.update=()=>{a.$$.dirty&65&&(u.setFormValue(i),I("value",{value:i})),a.$$.dirty&136&&t(5,n=o?`${$} *`:$)},[i,s,r,$,m,n,u,o,q,y]}class x extends H{constructor(e){super(),L(this,e,k,S,M,{attachedInternals:6,id:1,name:2,value:0,label:3,disabled:4,required:7,getValue:8},F)}get attachedInternals(){return this.$$.ctx[6]}set attachedInternals(e){this.$$set({attachedInternals:e}),d()}get id(){return this.$$.ctx[1]}set id(e){this.$$set({id:e}),d()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),d()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),d()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),d()}get disabled(){return this.$$.ctx[4]}set disabled(e){this.$$set({disabled:e}),d()}get required(){return this.$$.ctx[7]}set required(e){this.$$set({required:e}),d()}get getValue(){return this.$$.ctx[8]}}try{customElements.define("jp-color",B(x,{attachedInternals:{},id:{},name:{},value:{},label:{},disabled:{type:"Boolean"},required:{type:"Boolean"}},[],["getValue"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},j(e,"formAssociated",!0),e}));}catch{};export{x as default};
//# sourceMappingURL=color.wc.js.map
