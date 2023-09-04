var A=Object.defineProperty,E=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,K=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{c as P,S,i as C,f as h,s as D,a as G,e as b,b as q,d as a,t as u,g as I,h as f,I as z,o as x,n as F,j as L,K as J,k as N}from"./svelte.js";import"./index2.js";function Q(t){G(t,"svelte-6kn1og",".has-hint.svelte-6kn1og.svelte-6kn1og{position:relative;margin-bottom:1.25rem}.field.svelte-6kn1og.svelte-6kn1og{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;min-height:2rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:1px .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.field.required.svelte-6kn1og .field-label.svelte-6kn1og::after{content:' *'}.field.disabled.svelte-6kn1og.svelte-6kn1og{pointer-events:none;opacity:.5}.field.svelte-6kn1og.svelte-6kn1og:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-6kn1og.svelte-6kn1og{position:absolute;top:1.25rem;font-size:1rem;transition:transform .3s, top .3s, font-size .3s}.field-label.move.svelte-6kn1og.svelte-6kn1og{top:.25rem;font-size:.75rem}.field-label.move.svelte-6kn1og+.field-input.svelte-6kn1og::-moz-placeholder{opacity:1}.field-label.move.svelte-6kn1og+.field-input.svelte-6kn1og::placeholder{opacity:1}.field-input.svelte-6kn1og.svelte-6kn1og{flex:auto;width:10rem;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:1.5rem 0 0 0;padding:0 0 .25rem 0;line-height:1.375rem;border:none;outline:none;border-radius:0}.field-input.svelte-6kn1og.svelte-6kn1og::-moz-placeholder{opacity:0;-moz-transition:opacity .3s;transition:opacity .3s}.field-input.svelte-6kn1og.svelte-6kn1og::placeholder{opacity:0;transition:opacity .3s}.field-hint.svelte-6kn1og.svelte-6kn1og{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.field-hint.svelte-6kn1og.svelte-6kn1og:hover{z-index:255;overflow:unset}")}function V(t){let e;return{c(){e=b("span"),a(e,"class","field-hint svelte-6kn1og")},m(n,d){I(n,e,d),e.innerHTML=t[4]},p(n,d){d&16&&(e.innerHTML=n[4])},d(n){n&&L(e)}}}function R(t){let e,n,d,m,l,c,g,v,p,$,o=t[4]&&V(t);return{c(){e=b("div"),n=b("label"),d=b("span"),m=q(),l=b("textarea"),v=q(),o&&o.c(),a(d,"class","field-label svelte-6kn1og"),u(d,"move",t[1]||t[0]),a(l,"class","field-input svelte-6kn1og"),a(l,"aria-hidden",c=t[5]||t[10]),a(l,"tabindex",g=t[5]||t[10]?-1:0),l.disabled=t[5],a(l,"placeholder",t[7]),l.required=t[9],l.readOnly=t[10],a(l,"id",t[2]),a(l,"name",t[6]),a(l,"minlength",t[11]),a(l,"maxlength",t[12]),a(l,"rows",t[8]),a(n,"class","field svelte-6kn1og"),u(n,"disabled",t[5]||t[10]),u(n,"required",t[9]),a(e,"class","svelte-6kn1og"),u(e,"has-hint",t[4])},m(i,s){I(i,e,s),f(e,n),f(n,d),d.innerHTML=t[3],f(n,m),f(n,l),z(l,t[0]),f(e,v),o&&o.m(e,null),p||($=[x(l,"input",t[15]),x(l,"focus",t[16]),x(l,"blur",t[17])],p=!0)},p(i,[s]){s&8&&(d.innerHTML=i[3]),s&3&&u(d,"move",i[1]||i[0]),s&1056&&c!==(c=i[5]||i[10])&&a(l,"aria-hidden",c),s&1056&&g!==(g=i[5]||i[10]?-1:0)&&a(l,"tabindex",g),s&32&&(l.disabled=i[5]),s&128&&a(l,"placeholder",i[7]),s&512&&(l.required=i[9]),s&1024&&(l.readOnly=i[10]),s&4&&a(l,"id",i[2]),s&64&&a(l,"name",i[6]),s&2048&&a(l,"minlength",i[11]),s&4096&&a(l,"maxlength",i[12]),s&256&&a(l,"rows",i[8]),s&1&&z(l,i[0]),s&1056&&u(n,"disabled",i[5]||i[10]),s&512&&u(n,"required",i[9]),i[4]?o?o.p(i,s):(o=V(i),o.c(),o.m(e,null)):o&&(o.d(1),o=null),s&16&&u(e,"has-hint",i[4])},i:F,o:F,d(i){i&&L(e),o&&o.d(),p=!1,J($)}}}function U(t,e,n){let{attachedInternals:d}=e,{id:m=null}=e,{value:l=""}=e,{label:c="Label"}=e,{hint:g=""}=e,{disabled:v=!1}=e,{name:p=null}=e,{placeholder:$=""}=e,{inputFocused:o=!1}=e,{rows:i=4}=e,{required:s=!1}=e,{readonly:k=!1}=e,{minlength:y=null}=e,{maxlength:w=null}=e;const B=()=>l,H=N();function M(){l=this.value,n(0,l)}const T=()=>n(1,o=!0),O=()=>n(1,o=!1);return t.$$set=r=>{"attachedInternals"in r&&n(13,d=r.attachedInternals),"id"in r&&n(2,m=r.id),"value"in r&&n(0,l=r.value),"label"in r&&n(3,c=r.label),"hint"in r&&n(4,g=r.hint),"disabled"in r&&n(5,v=r.disabled),"name"in r&&n(6,p=r.name),"placeholder"in r&&n(7,$=r.placeholder),"inputFocused"in r&&n(1,o=r.inputFocused),"rows"in r&&n(8,i=r.rows),"required"in r&&n(9,s=r.required),"readonly"in r&&n(10,k=r.readonly),"minlength"in r&&n(11,y=r.minlength),"maxlength"in r&&n(12,w=r.maxlength)},t.$$.update=()=>{t.$$.dirty&8193&&(d.checkValidity(),d.setFormValue(l),H("value",{value:l}))},[l,o,m,c,g,v,p,$,i,s,k,y,w,d,B,M,T,O]}class j extends S{constructor(e){super(),C(this,e,U,R,D,{attachedInternals:13,id:2,value:0,label:3,hint:4,disabled:5,name:6,placeholder:7,inputFocused:1,rows:8,required:9,readonly:10,minlength:11,maxlength:12,getValue:14},Q)}get attachedInternals(){return this.$$.ctx[13]}set attachedInternals(e){this.$$set({attachedInternals:e}),h()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),h()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),h()}get disabled(){return this.$$.ctx[5]}set disabled(e){this.$$set({disabled:e}),h()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),h()}get placeholder(){return this.$$.ctx[7]}set placeholder(e){this.$$set({placeholder:e}),h()}get inputFocused(){return this.$$.ctx[1]}set inputFocused(e){this.$$set({inputFocused:e}),h()}get rows(){return this.$$.ctx[8]}set rows(e){this.$$set({rows:e}),h()}get required(){return this.$$.ctx[9]}set required(e){this.$$set({required:e}),h()}get readonly(){return this.$$.ctx[10]}set readonly(e){this.$$set({readonly:e}),h()}get minlength(){return this.$$.ctx[11]}set minlength(e){this.$$set({minlength:e}),h()}get maxlength(){return this.$$.ctx[12]}set maxlength(e){this.$$set({maxlength:e}),h()}get getValue(){return this.$$.ctx[14]}}customElements.define("jp-textarea",P(j,{attachedInternals:{},id:{},value:{},label:{},hint:{},disabled:{type:"Boolean"},name:{},placeholder:{},inputFocused:{type:"Boolean"},rows:{},required:{type:"Boolean"},readonly:{type:"Boolean"},minlength:{},maxlength:{}},[],["getValue"],!1,t=>{var e;return e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},K(e,"formAssociated",!0),e}));export{j as default};
