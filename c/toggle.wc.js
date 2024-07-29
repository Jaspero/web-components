var _=Object.defineProperty,B=(l,e,s)=>e in l?_(l,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[e]=s,L=(l,e,s)=>(B(l,typeof e!="symbol"?e+"":e,s),s);import{c as X,S as H,i as T,f as c,s as A,a as E,m as g,e as v,d as u,L as N,p as m,a0 as j,g as q,r as b,v as S,z as f,l as $,w as C,x as D}from"./svelte.js";import"./index2.js";function F(l){E(l,"svelte-eoxqjl",".switch.svelte-eoxqjl.svelte-eoxqjl{position:relative;display:inline-block}.pointer.svelte-eoxqjl.svelte-eoxqjl{cursor:pointer}.label.svelte-eoxqjl.svelte-eoxqjl{display:block;margin-bottom:4px}.large.svelte-eoxqjl.svelte-eoxqjl{width:60px;height:34px}.small.svelte-eoxqjl.svelte-eoxqjl{width:40px;height:22px}.switch.svelte-eoxqjl input.svelte-eoxqjl{opacity:0;width:0;height:0}.large.svelte-eoxqjl .slider.svelte-eoxqjl{border-radius:34px}.small.svelte-eoxqjl .slider.svelte-eoxqjl{border-radius:22px}.slider.svelte-eoxqjl.svelte-eoxqjl{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s}.large.svelte-eoxqjl .slider.svelte-eoxqjl:before{height:26px;width:26px;left:4px;bottom:4px}.small.svelte-eoxqjl .slider.svelte-eoxqjl:before{height:18px;width:18px;left:2px;bottom:2px}.slider.svelte-eoxqjl.svelte-eoxqjl:before{position:absolute;content:'';background-color:white;-webkit-transition:0.4s;transition:0.4s;border-radius:50%}input.svelte-eoxqjl:checked+.slider.svelte-eoxqjl{background-color:var(--primary-color)}input.svelte-eoxqjl:focus+.slider.svelte-eoxqjl{box-shadow:0 0 1px var(--primary-color)}input.svelte-eoxqjl:checked+.slider.svelte-eoxqjl:before{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}")}function y(l){let e,s;return{c(){e=v("span"),u(e,"class","label svelte-eoxqjl"),u(e,"style",s=`font-size: ${l[4]=="small"?"12px":"20px"}`)},m(t,d){q(t,e,d),e.innerHTML=l[2]},p(t,d){d&4&&(e.innerHTML=t[2]),d&16&&s!==(s=`font-size: ${t[4]=="small"?"12px":"20px"}`)&&u(e,"style",s)},d(t){t&&$(e)}}}function G(l){let e,s,t,d,n,x,h,p,o=l[2]&&y(l);return{c(){o&&o.c(),e=g(),s=v("label"),t=v("input"),d=g(),n=v("span"),u(t,"type","checkbox"),u(t,"name",l[1]),t.disabled=l[5],t.required=l[3],t.__value=!0,N(t,t.__value),t.hidden=!0,u(t,"class","svelte-eoxqjl"),u(n,"class","slider round svelte-eoxqjl"),m(n,"pointer",!l[5]),u(s,"class",x=j("switch "+l[4])+" svelte-eoxqjl")},m(a,i){o&&o.m(a,i),q(a,e,i),q(a,s,i),b(s,t),t.checked=l[0],l[12](t),b(s,d),b(s,n),h||(p=S(t,"change",l[11]),h=!0)},p(a,[i]){a[2]?o?o.p(a,i):(o=y(a),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),i&2&&u(t,"name",a[1]),i&32&&(t.disabled=a[5]),i&8&&(t.required=a[3]),i&1&&(t.checked=a[0]),i&32&&m(n,"pointer",!a[5]),i&16&&x!==(x=j("switch "+a[4])+" svelte-eoxqjl")&&u(s,"class",x)},i:f,o:f,d(a){a&&($(e),$(s)),o&&o.d(a),l[12](null),h=!1,p()}}}function J(l,e,s){let{attachedInternals:t}=e,{name:d=""}=e,{value:n=!1}=e,{label:x=""}=e,{required:h=!1}=e,{requiredValidationMessage:p=""}=e,{size:o="small"}=e,{disabled:a=!1}=e,i;const w=()=>n,k=()=>{t.reportValidity()},M=C();function z(){n=this.checked,s(0,n)}function I(r){D[r?"unshift":"push"](()=>{i=r,s(6,i)})}return l.$$set=r=>{"attachedInternals"in r&&s(7,t=r.attachedInternals),"name"in r&&s(1,d=r.name),"value"in r&&s(0,n=r.value),"label"in r&&s(2,x=r.label),"required"in r&&s(3,h=r.required),"requiredValidationMessage"in r&&s(8,p=r.requiredValidationMessage),"size"in r&&s(4,o=r.size),"disabled"in r&&s(5,a=r.disabled)},l.$$.update=()=>{l.$$.dirty&449&&(t.checkValidity(),i&&i.validity.valueMissing&&t.setValidity({valueMissing:!0},p||i.validationMessage,i),M("value",n))},[n,d,x,h,o,a,i,t,p,w,k,z,I]}class V extends H{constructor(e){super(),T(this,e,J,G,A,{attachedInternals:7,name:1,value:0,label:2,required:3,requiredValidationMessage:8,size:4,disabled:5,getValue:9,reportValidity:10},F)}get attachedInternals(){return this.$$.ctx[7]}set attachedInternals(e){this.$$set({attachedInternals:e}),c()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),c()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),c()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),c()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),c()}get requiredValidationMessage(){return this.$$.ctx[8]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),c()}get size(){return this.$$.ctx[4]}set size(e){this.$$set({size:e}),c()}get disabled(){return this.$$.ctx[5]}set disabled(e){this.$$set({disabled:e}),c()}get getValue(){return this.$$.ctx[9]}get reportValidity(){return this.$$.ctx[10]}}try{customElements.define("jp-toggle",X(V,{attachedInternals:{},name:{},value:{type:"Boolean"},label:{},required:{type:"Boolean"},requiredValidationMessage:{},size:{},disabled:{type:"Boolean"}},[],["getValue","reportValidity"],!1,l=>{var e;return e=class extends l{constructor(){super(),this.attachedInternals=this.attachInternals()}},L(e,"formAssociated",!0),e}));}catch{};export{V as default};
