var E=Object.defineProperty,j=(a,e,t)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,_=(a,e,t)=>(j(a,typeof e!="symbol"?e+"":e,t),t);import{c as O,S as q,i as z,f,s as B,a as H,q as V,e as $,d as p,g as k,n as M,j as b,r as J,k as L,x as N,b as y,h as v,o as P,t as T,p as U,l as C,U as D}from"./svelte.js";import"./index2.js";function F(a){H(a,"svelte-1gnff2w","div.svelte-1gnff2w.svelte-1gnff2w{display:flex;flex-direction:column;gap:0.5rem}label.svelte-1gnff2w.svelte-1gnff2w{position:relative;display:flex;align-items:center;gap:0.5rem;font-size:0.75rem;line-height:1rem}label.svelte-1gnff2w input.svelte-1gnff2w{position:absolute;top:0;left:0;opacity:0;visibility:hidden}input.svelte-1gnff2w:checked~.checkbox.svelte-1gnff2w{background-color:var(--primary-color)}.checkbox.svelte-1gnff2w.svelte-1gnff2w{width:20px;height:20px;border:1px solid rgba(0, 0, 0, 0.16);border-radius:4px}.checkmark.svelte-1gnff2w.svelte-1gnff2w{display:flex;justify-content:center;align-items:center;width:20px;height:20px;-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.checkmark_stem.svelte-1gnff2w.svelte-1gnff2w{position:absolute;width:3px;height:11px;background-color:var(--text-on-primary);left:8px;top:4px}.checkmark_kick.svelte-1gnff2w.svelte-1gnff2w{position:absolute;width:3px;height:3px;background-color:var(--text-on-primary);left:5px;top:12px}")}function S(a,e,t){const s=a.slice();return s[12]=e[t],s[13]=e,s[14]=t,s}function G(a){let e=a[12].value+"",t;return{c(){t=T(e)},m(s,l){k(s,t,l)},p(s,l){l&1&&e!==(e=s[12].value+"")&&U(t,e)},d(s){s&&b(t)}}}function K(a){let e,t=a[12].label+"",s;return{c(){e=new D(!1),s=C(),e.a=s},m(l,n){e.m(t,l,n),k(l,s,n)},p(l,n){n&1&&t!==(t=l[12].label+"")&&e.p(t)},d(l){l&&(b(s),e.d())}}}function I(a){let e,t,s,l,n,c,d,g,h,m;function w(){a[10].call(t,a[13],a[14])}function x(i,r){return i[12].label?K:G}let u=x(a),o=u(a);return{c(){e=$("label"),t=$("input"),n=y(),c=$("span"),c.innerHTML='<span class="checkmark svelte-1gnff2w"><span class="checkmark_stem svelte-1gnff2w"></span> <span class="checkmark_kick svelte-1gnff2w"></span></span>',d=y(),o.c(),g=y(),p(t,"type","checkbox"),p(t,"name",s=a[12].value),t.disabled=l=a[12].disabled,p(t,"class","svelte-1gnff2w"),p(c,"class","checkbox svelte-1gnff2w"),p(e,"class","svelte-1gnff2w")},m(i,r){k(i,e,r),v(e,t),t.checked=a[12].checked,v(e,n),v(e,c),v(e,d),o.m(e,null),v(e,g),h||(m=P(t,"change",w),h=!0)},p(i,r){a=i,r&1&&s!==(s=a[12].value)&&p(t,"name",s),r&1&&l!==(l=a[12].disabled)&&(t.disabled=l),r&1&&(t.checked=a[12].checked),u===(u=x(a))&&o?o.p(a,r):(o.d(1),o=u(a),o&&(o.c(),o.m(e,g)))},d(i){i&&b(e),o.d(),h=!1,m()}}}function Q(a){let e,t=V(a[0]),s=[];for(let l=0;l<t.length;l+=1)s[l]=I(S(a,t,l));return{c(){e=$("div");for(let l=0;l<s.length;l+=1)s[l].c();p(e,"class","svelte-1gnff2w")},m(l,n){k(l,e,n);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null)},p(l,[n]){if(n&1){t=V(l[0]);let c;for(c=0;c<t.length;c+=1){const d=S(l,t,c);s[c]?s[c].p(d,n):(s[c]=I(d),s[c].c(),s[c].m(e,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=t.length}},i:M,o:M,d(l){l&&b(e),J(s,l)}}}function R(a,e,t){let{attachedInternals:s}=e,{value:l}=e,{options:n=[]}=e,{minSelects:c=0}=e,{maxSelects:d=null}=e,{minselectsValidationMessage:g}=e,{maxselectsValidationMessage:h}=e,{validationMessages:m={}}=e;const w=()=>n.filter(i=>i.checked).map(i=>i.value),x=()=>s.reportValidity(),u=L();N(()=>{typeof n=="string"&&t(0,n=JSON.parse(n)),t(1,d=n.length)});function o(i,r){i[r].checked=this.checked,t(0,n),t(3,l)}return a.$$set=i=>{"attachedInternals"in i&&t(2,s=i.attachedInternals),"value"in i&&t(3,l=i.value),"options"in i&&t(0,n=i.options),"minSelects"in i&&t(4,c=i.minSelects),"maxSelects"in i&&t(1,d=i.maxSelects),"minselectsValidationMessage"in i&&t(5,g=i.minselectsValidationMessage),"maxselectsValidationMessage"in i&&t(6,h=i.maxselectsValidationMessage),"validationMessages"in i&&t(7,m=i.validationMessages)},a.$$.update=()=>{if(a.$$.dirty&9&&l&&Array.isArray(n)&&(t(0,n=n.map(i=>({...i,checked:!1}))),typeof l=="string"?l.split(",").forEach(i=>{t(0,n[n.findIndex(r=>r.value==i)].checked=!0,n)}):l.forEach(i=>{t(0,n[n.findIndex(r=>r.value==i)].checked=!0,n)})),a.$$.dirty&247&&Array.isArray(n)){const i=n.filter(r=>r.checked).length;i<c?s.setValidity({customError:!0},g||m.minselects||"Below limit checks."):i>d?s.setValidity({customError:!0},h||m.maxselects||"Above limit checks."):s.setValidity({}),u("value",n.filter(r=>r.checked).map(r=>r.value))}},[n,d,s,l,c,g,h,m,w,x,o]}class A extends q{constructor(e){super(),z(this,e,R,Q,B,{attachedInternals:2,value:3,options:0,minSelects:4,maxSelects:1,minselectsValidationMessage:5,maxselectsValidationMessage:6,validationMessages:7,getValue:8,reportValidity:9},F)}get attachedInternals(){return this.$$.ctx[2]}set attachedInternals(e){this.$$set({attachedInternals:e}),f()}get value(){return this.$$.ctx[3]}set value(e){this.$$set({value:e}),f()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),f()}get minSelects(){return this.$$.ctx[4]}set minSelects(e){this.$$set({minSelects:e}),f()}get maxSelects(){return this.$$.ctx[1]}set maxSelects(e){this.$$set({maxSelects:e}),f()}get minselectsValidationMessage(){return this.$$.ctx[5]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),f()}get maxselectsValidationMessage(){return this.$$.ctx[6]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),f()}get validationMessages(){return this.$$.ctx[7]}set validationMessages(e){this.$$set({validationMessages:e}),f()}get getValue(){return this.$$.ctx[8]}get reportValidity(){return this.$$.ctx[9]}}try{customElements.define("jp-checkbox",O(A,{attachedInternals:{},value:{},options:{},minSelects:{},maxSelects:{},minselectsValidationMessage:{},maxselectsValidationMessage:{},validationMessages:{}},[],["getValue","reportValidity"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},_(e,"formAssociated",!0),e}));}catch{};export{A as default};
