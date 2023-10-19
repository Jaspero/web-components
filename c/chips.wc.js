var U=Object.defineProperty,W=(a,e,t)=>e in a?U(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,X=(a,e,t)=>(W(a,typeof e!="symbol"?e+"":e,t),t);import{c as Z,S as _,i as ee,f as u,s as te,a as ie,l as L,e as V,b as z,d as $,t as M,g as j,h as b,I as C,o as w,n as H,j as k,m as ae,K as se,k as ne,q as le,J as re,r as de}from"./svelte.js";import"./index2.js";function oe(a){ie(a,"svelte-114jydq",".field.svelte-114jydq.svelte-114jydq{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;min-height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.field.required.svelte-114jydq .field-label.svelte-114jydq::after{content:' *'}.field.disabled.svelte-114jydq.svelte-114jydq{pointer-events:none;opacity:.33}.field.svelte-114jydq.svelte-114jydq:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-114jydq.svelte-114jydq{position:absolute;top:50%;transform:translateY(-50%);font-size:1rem;transition:transform .3s, top .3s, font-size .3s}.field-label.move.svelte-114jydq.svelte-114jydq{top:.125rem;transform:translateY(0);font-size:.75rem}.field-label.move+.field-container.svelte-114jydq .field-container-input.svelte-114jydq::-moz-placeholder{opacity:1}.field-label.move+.field-container.svelte-114jydq .field-container-input.svelte-114jydq::placeholder{opacity:1}.field-container.svelte-114jydq.svelte-114jydq{display:flex;flex-wrap:wrap;gap:.5rem;flex:auto;width:10rem;font-size:1rem;overflow:hidden;padding:1.25rem 0 .25rem 0;border:none;outline:none;border-radius:0}.field-container-chip.svelte-114jydq.svelte-114jydq{display:flex;align-items:center;gap:.25rem;background-color:var(--background-secondary);border-radius:.25rem;padding:.25rem}.field-container-chip-label.svelte-114jydq.svelte-114jydq{font-size:.875rem;word-break:break-all;white-space:normal}.field-container-input.svelte-114jydq.svelte-114jydq{border:none;outline:none;flex:auto;width:10rem;padding:0;border-radius:0;font-size:1rem}.field-container-input.svelte-114jydq.svelte-114jydq::-moz-placeholder{opacity:0;-moz-transition:opacity .3s;transition:opacity .3s}.field-container-input.svelte-114jydq.svelte-114jydq::placeholder{opacity:0;transition:opacity .3s}")}function T(a,e,t){const l=a.slice();return l[29]=e[t],l}function O(a){let e;return{c(){e=V("span"),$(e,"class","field-label svelte-114jydq"),M(e,"move",a[2]||a[0])},m(t,l){j(t,e,l),e.innerHTML=a[6]},p(t,l){l[0]&64&&(e.innerHTML=t[6]),l[0]&5&&M(e,"move",t[2]||t[0])},d(t){t&&k(e)}}}function S(a){let e,t,l=a[29]+"",m,f,o,v,p;function y(){return a[24](a[29])}return{c(){e=V("div"),t=V("span"),m=le(l),f=z(),o=V("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height=".875rem" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',$(t,"class","field-container-chip-label svelte-114jydq"),$(o,"class","field-container-chip-button"),$(e,"class","field-container-chip svelte-114jydq")},m(g,d){j(g,e,d),b(e,t),b(t,m),b(e,f),b(e,o),v||(p=w(o,"click",re(y)),v=!0)},p(g,d){a=g,d[0]&2&&l!==(l=a[29]+"")&&de(m,l)},d(g){g&&k(e),v=!1,p()}}}function ue(a){let e,t,l,m,f,o,v,p,y,g,d=a[6]&&O(a),q=L(a[1]),c=[];for(let n=0;n<q.length;n+=1)c[n]=S(T(a,q,n));return{c(){e=V("div"),t=V("label"),d&&d.c(),l=z(),m=V("div");for(let n=0;n<c.length;n+=1)c[n].c();f=z(),o=V("input"),v=z(),p=V("textarea"),$(o,"type","text"),$(o,"class","field-container-input svelte-114jydq"),$(o,"placeholder",a[7]),$(m,"class","field-container svelte-114jydq"),$(t,"class","field svelte-114jydq"),M(t,"disabled",a[9]),M(t,"required",a[8]),$(p,"id",a[4]),$(p,"name",a[5]),p.value=a[0],p.hidden=!0},m(n,s){j(n,e,s),b(e,t),d&&d.m(t,null),b(t,l),b(t,m);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(m,null);b(m,f),b(m,o),C(o,a[3]),j(n,v,s),j(n,p,s),y||(g=[w(window,"keydown",a[23]),w(o,"focus",a[25]),w(o,"blur",a[26]),w(o,"input",a[27])],y=!0)},p(n,s){if(n[6]?d?d.p(n,s):(d=O(n),d.c(),d.m(t,l)):d&&(d.d(1),d=null),s[0]&2){q=L(n[1]);let r;for(r=0;r<q.length;r+=1){const h=T(n,q,r);c[r]?c[r].p(h,s):(c[r]=S(h),c[r].c(),c[r].m(m,f))}for(;r<c.length;r+=1)c[r].d(1);c.length=q.length}s[0]&128&&$(o,"placeholder",n[7]),s[0]&8&&o.value!==n[3]&&C(o,n[3]),s[0]&512&&M(t,"disabled",n[9]),s[0]&256&&M(t,"required",n[8]),s[0]&16&&$(p,"id",n[4]),s[0]&32&&$(p,"name",n[5]),s[0]&1&&(p.value=n[0])},i:H,o:H,d(n){n&&(k(e),k(v),k(p)),d&&d.d(),ae(c,n),y=!1,se(g)}}}function ce(a,e,t){let{attachedInternals:l}=e,{value:m=""}=e,{id:f=null}=e,{name:o=null}=e,{label:v="Label"}=e,{placeholder:p=null}=e,{minitems:y=0}=e,{maxitems:g=null}=e,{pattern:d=null}=e,{required:q=!1}=e,{unique:c=!1}=e,{disabled:n=!1}=e,{chips:s=[]}=e,{inputFocused:r=!1}=e,{inputValue:h=""}=e,{validationMessages:x={}}=e,{requiredValidationMessage:I}=e,{minitemsValidationMessage:F}=e,{maxitemsValidationMessage:E}=e,{uniqueValidationMessage:B}=e,{patternValidationMessage:A}=e;const D=()=>s,J=ne(),K=()=>{l.reportValidity()},P=i=>{r&&(i.key=="Enter"&&(i.preventDefault(),h&&(t(1,s=[...s,h]),t(3,h=""))),i.key=="Backspace"&&!h&&t(1,s=s.slice(0,-1)))},G=i=>{s.splice(s.indexOf(i),1),t(1,s),t(2,r),t(3,h)},N=()=>t(2,r=!0),Q=()=>t(2,r=!1);function R(){h=this.value,t(3,h),t(2,r),t(1,s)}return a.$$set=i=>{"attachedInternals"in i&&t(10,l=i.attachedInternals),"value"in i&&t(0,m=i.value),"id"in i&&t(4,f=i.id),"name"in i&&t(5,o=i.name),"label"in i&&t(6,v=i.label),"placeholder"in i&&t(7,p=i.placeholder),"minitems"in i&&t(11,y=i.minitems),"maxitems"in i&&t(12,g=i.maxitems),"pattern"in i&&t(13,d=i.pattern),"required"in i&&t(8,q=i.required),"unique"in i&&t(14,c=i.unique),"disabled"in i&&t(9,n=i.disabled),"chips"in i&&t(1,s=i.chips),"inputFocused"in i&&t(2,r=i.inputFocused),"inputValue"in i&&t(3,h=i.inputValue),"validationMessages"in i&&t(15,x=i.validationMessages),"requiredValidationMessage"in i&&t(16,I=i.requiredValidationMessage),"minitemsValidationMessage"in i&&t(17,F=i.minitemsValidationMessage),"maxitemsValidationMessage"in i&&t(18,E=i.maxitemsValidationMessage),"uniqueValidationMessage"in i&&t(19,B=i.uniqueValidationMessage),"patternValidationMessage"in i&&t(20,A=i.patternValidationMessage)},a.$$.update=()=>{a.$$.dirty[0]&14&&!r&&h&&(t(1,s=[...s,h]),t(3,h="")),a.$$.dirty[0]&2096131&&(t(0,m=s.join(",")),m?s.length<y?l.setValidity({customError:!0},F||x.minitems||`A minimum of ${y} items need to be added.`):g&&s.length>g?l.setValidity({customError:!0},E||x.maxitems||`A maximum of ${g} items are allowed.`):c&&new Set(s).size!==s.length?l.setValidity({customError:!0},B||x.unique||"Chips are not unique."):d!=null&&s.filter(i=>d.test(i)).length!=s.length?l.setValidity({customError:!0},A||x.pattern||"Chips dont satisfy pattern."):l.setValidity({}):l.setValidity({customError:!0},I||x.required||"Chips should be non-empty."),l.checkValidity(),l.setFormValue(m),J("value",s))},[m,s,r,h,f,o,v,p,q,n,l,y,g,d,c,x,I,F,E,B,A,D,K,P,G,N,Q,R]}class Y extends _{constructor(e){super(),ee(this,e,ce,ue,te,{attachedInternals:10,value:0,id:4,name:5,label:6,placeholder:7,minitems:11,maxitems:12,pattern:13,required:8,unique:14,disabled:9,chips:1,inputFocused:2,inputValue:3,validationMessages:15,requiredValidationMessage:16,minitemsValidationMessage:17,maxitemsValidationMessage:18,uniqueValidationMessage:19,patternValidationMessage:20,getValue:21,reportValidity:22},oe,[-1,-1])}get attachedInternals(){return this.$$.ctx[10]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),u()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),u()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),u()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),u()}get placeholder(){return this.$$.ctx[7]}set placeholder(e){this.$$set({placeholder:e}),u()}get minitems(){return this.$$.ctx[11]}set minitems(e){this.$$set({minitems:e}),u()}get maxitems(){return this.$$.ctx[12]}set maxitems(e){this.$$set({maxitems:e}),u()}get pattern(){return this.$$.ctx[13]}set pattern(e){this.$$set({pattern:e}),u()}get required(){return this.$$.ctx[8]}set required(e){this.$$set({required:e}),u()}get unique(){return this.$$.ctx[14]}set unique(e){this.$$set({unique:e}),u()}get disabled(){return this.$$.ctx[9]}set disabled(e){this.$$set({disabled:e}),u()}get chips(){return this.$$.ctx[1]}set chips(e){this.$$set({chips:e}),u()}get inputFocused(){return this.$$.ctx[2]}set inputFocused(e){this.$$set({inputFocused:e}),u()}get inputValue(){return this.$$.ctx[3]}set inputValue(e){this.$$set({inputValue:e}),u()}get validationMessages(){return this.$$.ctx[15]}set validationMessages(e){this.$$set({validationMessages:e}),u()}get requiredValidationMessage(){return this.$$.ctx[16]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),u()}get minitemsValidationMessage(){return this.$$.ctx[17]}set minitemsValidationMessage(e){this.$$set({minitemsValidationMessage:e}),u()}get maxitemsValidationMessage(){return this.$$.ctx[18]}set maxitemsValidationMessage(e){this.$$set({maxitemsValidationMessage:e}),u()}get uniqueValidationMessage(){return this.$$.ctx[19]}set uniqueValidationMessage(e){this.$$set({uniqueValidationMessage:e}),u()}get patternValidationMessage(){return this.$$.ctx[20]}set patternValidationMessage(e){this.$$set({patternValidationMessage:e}),u()}get getValue(){return this.$$.ctx[21]}get reportValidity(){return this.$$.ctx[22]}}customElements.define("jp-chips",Z(Y,{attachedInternals:{},value:{},id:{},name:{},label:{},placeholder:{},minitems:{},maxitems:{},pattern:{},required:{type:"Boolean"},unique:{type:"Boolean"},disabled:{type:"Boolean"},chips:{},inputFocused:{type:"Boolean"},inputValue:{},validationMessages:{},requiredValidationMessage:{},minitemsValidationMessage:{},maxitemsValidationMessage:{},uniqueValidationMessage:{},patternValidationMessage:{}},[],["getValue","reportValidity"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},X(e,"formAssociated",!0),e}));export{Y as default};
