var V=Object.defineProperty,j=(a,e,t)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,k=(a,e,t)=>(j(a,typeof e!="symbol"?e+"":e,t),t);import{c as w,S as A,i as B,f as u,s as E,e as o,b as F,d as $,g as b,h,L as m,o as L,n as v,j as p,k as S,t as q,u as z}from"./svelte.js";import"./index2.js";function f(a){let e,t;return{c(){e=o("label"),t=q(a[3])},m(n,d){b(n,e,d),h(e,t)},p(n,d){d&8&&z(t,n[3])},d(n){n&&p(e)}}}function C(a){let e,t,n,d,c,s=a[3]&&f(a);return{c(){e=o("div"),t=o("input"),n=F(),s&&s.c(),$(t,"type","color"),$(t,"id",a[1]),$(t,"name",a[2]),t.disabled=a[4]},m(l,i){b(l,e,i),h(e,t),m(t,a[0]),h(e,n),s&&s.m(e,null),d||(c=L(t,"input",a[7]),d=!0)},p(l,[i]){i&2&&$(t,"id",l[1]),i&4&&$(t,"name",l[2]),i&16&&(t.disabled=l[4]),i&1&&m(t,l[0]),l[3]?s?s.p(l,i):(s=f(l),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:v,o:v,d(l){l&&p(e),s&&s.d(),d=!1,c()}}}function D(a,e,t){let{attachedInternals:n}=e,{id:d}=e,{name:c}=e,{value:s="e65100"}=e,{label:l=""}=e,{disabled:i=!1}=e;const I=()=>s,x=S();function y(){s=this.value,t(0,s)}return a.$$set=r=>{"attachedInternals"in r&&t(5,n=r.attachedInternals),"id"in r&&t(1,d=r.id),"name"in r&&t(2,c=r.name),"value"in r&&t(0,s=r.value),"label"in r&&t(3,l=r.label),"disabled"in r&&t(4,i=r.disabled)},a.$$.update=()=>{a.$$.dirty&33&&(n.setFormValue(s),x("value",{value:s}))},[s,d,c,l,i,n,I,y]}class g extends A{constructor(e){super(),B(this,e,D,C,E,{attachedInternals:5,id:1,name:2,value:0,label:3,disabled:4,getValue:6})}get attachedInternals(){return this.$$.ctx[5]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get id(){return this.$$.ctx[1]}set id(e){this.$$set({id:e}),u()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),u()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),u()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),u()}get disabled(){return this.$$.ctx[4]}set disabled(e){this.$$set({disabled:e}),u()}get getValue(){return this.$$.ctx[6]}}try{customElements.define("jp-color",w(g,{attachedInternals:{},id:{},name:{},value:{},label:{},disabled:{type:"Boolean"}},[],["getValue"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},k(e,"formAssociated",!0),e}));}catch{};export{g as default};
