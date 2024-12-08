var qe=Object.defineProperty,Se=(l,e,t)=>e in l?qe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,Ie=(l,e,t)=>Se(l,typeof e!="symbol"?e+"":e,t);import{c as Ae,S as Ee,i as Oe,o as V,s as He,l as L,e as A,D as ee,W as Ce,d as $,H as T,f as D,p as j,E as te,X as Le,m as F,T as se,F as le,t as De,j as Ke,k as K,Y as Be,r as ie,G as Ye,K as ze,x as Ue,z as ae,q as Fe,a2 as We,a3 as Ge,n as ne,w as Ne,a0 as Pe}from"./svelte.js";import"./index.js";import{clickOutside as Re}from"./click-outside.js";import{c as _e}from"./clear.js";import{A as Je,c as Xe}from"./checkmark.js";function re(l,e,t){const n=l.slice();return n[42]=e[t],n[43]=e,n[44]=t,n}function ce(l){let e;return{c(){e=A("div"),$(e,"class","label")},m(t,n){D(t,e,n),e.innerHTML=l[8]},p(t,n){n[0]&256&&(e.innerHTML=t[8])},d(t){t&&K(e)}}}function de(l){let e,t,n;return{c(){e=A("button"),$(e,"class","jp-multiselect-clear")},m(r,b){D(r,e,b),e.innerHTML=_e,t||(n=F(e,"click",l[18]),t=!0)},p:Ue,d(r){r&&K(e),t=!1,n()}}}function ue(l){let e;return{c(){e=A("span"),$(e,"class","jp-multiselect-select-label"),T(e,"jp-multiselect-select-label-move",l[1]||l[11])},m(t,n){D(t,e,n),e.innerHTML=l[8]},p(t,n){n[0]&256&&(e.innerHTML=t[8]),n[0]&2050&&T(e,"jp-multiselect-select-label-move",t[1]||t[11])},d(t){t&&K(e)}}}function oe(l){let e;return{c(){e=A("span"),$(e,"class","jp-multiselect-select-hint")},m(t,n){D(t,e,n),e.innerHTML=l[4]},p(t,n){n[0]&16&&(e.innerHTML=t[4])},d(t){t&&K(e)}}}function me(l){let e,t,n=[],r=new Map,b,w,i=ae(l[0]);const k=u=>u[42];for(let u=0;u<i.length;u+=1){let p=re(l,i,u),f=k(p);r.set(f,n[u]=he(f,p))}return{c(){e=A("div"),t=A("div");for(let u=0;u<n.length;u+=1)n[u].c();$(t,"class","jp-multiselect-menu"),$(t,"style",l[13]),$(e,"class","jp-multiselect-overlay")},m(u,p){D(u,e,p),j(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);b||(w=[Fe(Re.call(null,t)),F(t,"click_outside",l[35]),F(t,"keydown",l[20])],b=!0)},p(u,p){p[0]&81921&&(i=ae(u[0]),n=We(n,p,k,1,u,i,r,t,Ge,he,null,re)),p[0]&8192&&$(t,"style",u[13])},d(u){u&&K(e);for(let p=0;p<n.length;p+=1)n[p].d();b=!1,ie(w)}}}function pe(l){let e,t;return{c(){e=new Pe(!1),t=Ne(),e.a=t},m(n,r){e.m(Xe,n,r),D(n,t,r)},d(n){n&&(K(t),e.d())}}}function he(l,e){let t,n,r=(e[42].label?e[42].label:e[42].value)+"",b,w,i,k,u=e[44],p,f,h=e[42].selected&&pe();const B=()=>e[33](t,u),q=()=>e[33](null,u);function U(){return e[34](e[42],e[43],e[44])}return{key:l,first:null,c(){t=A("button"),n=A("span"),b=ee(r),w=L(),h&&h.c(),i=L(),$(t,"type","button"),$(t,"class","jp-multiselect-menu-button"),t.disabled=k=e[42].disabled,T(t,"jp-multiselect-menu-button-selected",e[42].selected),T(t,"jp-multiselect-menu-button-disabled",e[42].disabled),this.first=t},m(S,m){D(S,t,m),j(t,n),j(n,b),j(t,w),h&&h.m(t,null),j(t,i),B(),p||(f=F(t,"click",se(U)),p=!0)},p(S,m){e=S,m[0]&1&&r!==(r=(e[42].label?e[42].label:e[42].value)+"")&&le(b,r),e[42].selected?h||(h=pe(),h.c(),h.m(t,i)):h&&(h.d(1),h=null),m[0]&1&&k!==(k=e[42].disabled)&&(t.disabled=k),u!==e[44]&&(q(),u=e[44],B()),m[0]&1&&T(t,"jp-multiselect-menu-button-selected",e[42].selected),m[0]&1&&T(t,"jp-multiselect-menu-button-disabled",e[42].disabled)},d(S){S&&K(t),h&&h.d(),q(),p=!1,f()}}}function Qe(l){let e,t,n,r,b,w,i,k,u,p=(l[15]||"")+"",f,h,B,q,U,S,m,W,R,g=l[8]&&l[9]=="outside"&&ce(l),x=l[10]&&l[17]&&de(l),y=l[8]&&l[9]=="inside"&&ue(l);q=new Je({props:{open:l[11]}});let v=l[4]&&oe(l),M=l[11]&&me(l);return{c(){g&&g.c(),e=L(),t=A("div"),x&&x.c(),n=L(),r=A("input"),w=L(),i=A("button"),y&&y.c(),k=L(),u=A("span"),f=ee(p),B=L(),Ce(q.$$.fragment),U=L(),v&&v.c(),S=L(),M&&M.c(),$(r,"class","jp-multiselect-input"),$(r,"tabindex","-1"),r.required=l[3],$(r,"id",l[5]),$(r,"name",l[6]),$(r,"autocomplete",b=l[7]||l[6]),$(u,"class",h=`jp-multiselect-select-option ${l[9]=="outside"||!l[8]?"":"jp-multiselect-select-option-padding"}`),T(u,"has-clear",l[10]),$(i,"type","button"),$(i,"class","jp-multiselect-select"),i.disabled=l[2],T(i,"jp-multiselect-select-toggled",l[11]),T(i,"jp-multiselect-select-disabled",l[2]),$(t,"class","jp-multiselect-wrapper"),T(t,"jp-multiselect-has-hint",l[4])},m(a,c){g&&g.m(a,c),D(a,e,c),D(a,t,c),x&&x.m(t,null),j(t,n),j(t,r),te(r,l[1]),j(t,w),j(t,i),y&&y.m(i,null),j(i,k),j(i,u),j(u,f),j(i,B),Le(q,i,null),l[32](i),j(t,U),v&&v.m(t,null),j(t,S),M&&M.m(t,null),m=!0,W||(R=[F(r,"input",l[31]),F(i,"click",se(l[19])),F(i,"keydown",l[20])],W=!0)},p(a,c){a[8]&&a[9]=="outside"?g?g.p(a,c):(g=ce(a),g.c(),g.m(e.parentNode,e)):g&&(g.d(1),g=null),a[10]&&a[17]?x?x.p(a,c):(x=de(a),x.c(),x.m(t,n)):x&&(x.d(1),x=null),(!m||c[0]&8)&&(r.required=a[3]),(!m||c[0]&32)&&$(r,"id",a[5]),(!m||c[0]&64)&&$(r,"name",a[6]),(!m||c[0]&192&&b!==(b=a[7]||a[6]))&&$(r,"autocomplete",b),c[0]&2&&r.value!==a[1]&&te(r,a[1]),a[8]&&a[9]=="inside"?y?y.p(a,c):(y=ue(a),y.c(),y.m(i,k)):y&&(y.d(1),y=null),(!m||c[0]&32768)&&p!==(p=(a[15]||"")+"")&&le(f,p),(!m||c[0]&768&&h!==(h=`jp-multiselect-select-option ${a[9]=="outside"||!a[8]?"":"jp-multiselect-select-option-padding"}`))&&$(u,"class",h),(!m||c[0]&1792)&&T(u,"has-clear",a[10]);const G={};c[0]&2048&&(G.open=a[11]),q.$set(G),(!m||c[0]&4)&&(i.disabled=a[2]),(!m||c[0]&2048)&&T(i,"jp-multiselect-select-toggled",a[11]),(!m||c[0]&4)&&T(i,"jp-multiselect-select-disabled",a[2]),a[4]?v?v.p(a,c):(v=oe(a),v.c(),v.m(t,S)):v&&(v.d(1),v=null),a[11]?M?M.p(a,c):(M=me(a),M.c(),M.m(t,null)):M&&(M.d(1),M=null),(!m||c[0]&16)&&T(t,"jp-multiselect-has-hint",a[4])},i(a){m||(De(q.$$.fragment,a),m=!0)},o(a){Ke(q.$$.fragment,a),m=!1},d(a){a&&(K(e),K(t)),g&&g.d(a),x&&x.d(),y&&y.d(),Be(q),l[32](null),v&&v.d(),M&&M.d(),W=!1,ie(R)}}}function Ze(l,e,t){let n,{attachedInternals:r}=e,{minSelects:b=0}=e,{maxSelects:w=null}=e,{options:i=[]}=e,{disabled:k=!1}=e,{required:u=!1}=e,{hint:p=""}=e,{value:f}=e,{internalValue:h=""}=e,{id:B=""}=e,{name:q=""}=e,{autocomplete:U=""}=e,{label:S=""}=e,{labelType:m="inside"}=e,{showClear:W=!1}=e;const R=()=>i.filter(s=>s.selected).sort((s,o)=>s.selectedOrder-o.selectedOrder).map(s=>s.value);let{validationMessages:g={}}=e,{requiredValidationMessage:x}=e,{minselectsValidationMessage:y}=e,{maxselectsValidationMessage:v}=e,M=!1,a=!1,c,G,H=[],X="",Z,Q,N=0;const fe=Ye(),ge=()=>{r.reportValidity()};function be(){t(15,Q=null),Array.isArray(i)&&t(0,i=i.map(s=>({...s,selected:!1,selectedOrder:null})))}function xe(){if(t(0,i=i.map(s=>({...s,selected:!1,selectedOrder:null}))),typeof f=="string"){const s=f.split(",");s.forEach((o,d)=>{const E=i[i.findIndex(Y=>Y.value==o)];E.selected=!0,E.selectedOrder=d}),t(16,N=s.length)}else f.forEach((s,o)=>{const d=i[i.findIndex(E=>E.value==s)];d.selected=!0,d.selectedOrder=o}),t(16,N=f.length)}function _(s){if(s&&s.target&&s.target.closest(".menu"))return;const o=c.getBoundingClientRect(),d=window.innerHeight-o.bottom,E=300;let Y="";d<E?Y=`
        width: ${o.width}px;
        bottom: ${window.innerHeight-o.top}px;
        left: ${o.left}px;
      `:Y=`
        width: ${o.width}px;
        top: ${o.bottom}px;
        left: ${o.left}px;
      `,t(13,G=Y),t(11,a=!a),setTimeout(a?()=>{var I;const O=i.findIndex(P=>!P.disabled);O!==-1&&((I=H[O])==null||I.focus())}:()=>{var I;M?(I=c.nextElementSibling)==null||I.focus():c?.focus()},10)}function J(s,o){if(o==="next"){for(let d=s+1;d<i.length;d++)if(!i[d].disabled)return d}else if(o==="previous"){for(let d=s-1;d>=0;d--)if(!i[d].disabled)return d}return s}function ye(s){var o,d,E,Y;const I=H.findIndex(P=>P===document.activeElement);let O;if(a){if(s.key==="Escape"){_(),c.focus();return}const P=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,ke=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(P){s.preventDefault();const z=i.findIndex(C=>!C.disabled);z!==-1&&((o=H[z])==null||o.focus());return}if(ke){s.preventDefault();const z=i.slice().reverse().findIndex(Te=>!Te.disabled),C=z!==-1?i.length-1-z:-1;C!==-1&&((d=H[C])==null||d.focus());return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowUp"?O=J(I,"previous"):O=J(I,"next"),(E=H[O])==null||E.focus()),s.key==="Tab"){if(s.preventDefault(),M=!0,s.shiftKey){if(O=J(I,"previous"),I===O){_(),c?.focus();return}}else if(O=J(I,"next"),I===O){_(),c?.focus();return}(Y=H[O])==null||Y.focus()}if(/^[a-z\d]$/i.test(s.key)){clearTimeout(Z),X+=s.key;const z=i.map(C=>C.label?C.label:C.value).findIndex(C=>C.toLowerCase().startsWith(X.toLowerCase()));z!==-1&&H[z].focus(),Z=setTimeout(()=>{X=""},500)}}}ze(()=>{typeof i=="string"&&t(0,i=JSON.parse(i)),w||t(21,w=i.length),t(0,i=i.map(s=>(s.selected==null&&(s.selected=!1),s.selectedOrder=null,s)))});function ve(){h=this.value,t(1,h),t(0,i),t(3,u),t(22,r),t(27,x),t(26,g),t(12,c),t(23,b),t(28,y),t(21,w),t(29,v)}function Ve(s){ne[s?"unshift":"push"](()=>{c=s,t(12,c)})}function Me(s,o){ne[s?"unshift":"push"](()=>{H[o]=s,t(14,H)})}const we=(s,o,d)=>{t(0,o[d].selected=!s.selected,i),s.selected?t(0,o[d].selectedOrder=t(16,N++,N),i):t(0,o[d].selectedOrder=null,i)},je=()=>t(11,a=!1);return l.$$set=s=>{"attachedInternals"in s&&t(22,r=s.attachedInternals),"minSelects"in s&&t(23,b=s.minSelects),"maxSelects"in s&&t(21,w=s.maxSelects),"options"in s&&t(0,i=s.options),"disabled"in s&&t(2,k=s.disabled),"required"in s&&t(3,u=s.required),"hint"in s&&t(4,p=s.hint),"value"in s&&t(24,f=s.value),"internalValue"in s&&t(1,h=s.internalValue),"id"in s&&t(5,B=s.id),"name"in s&&t(6,q=s.name),"autocomplete"in s&&t(7,U=s.autocomplete),"label"in s&&t(8,S=s.label),"labelType"in s&&t(9,m=s.labelType),"showClear"in s&&t(10,W=s.showClear),"validationMessages"in s&&t(26,g=s.validationMessages),"requiredValidationMessage"in s&&t(27,x=s.requiredValidationMessage),"minselectsValidationMessage"in s&&t(28,y=s.minselectsValidationMessage),"maxselectsValidationMessage"in s&&t(29,v=s.maxselectsValidationMessage)},l.$$.update=()=>{if(l.$$.dirty[0]&2048&&(a?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY=""),l.$$.dirty[0]&1021317129&&Array.isArray(i)){const s=i.filter(d=>d.selected).length;s==0&&u?r.setValidity({customError:!0},x||g.required||"At least one item needs to be checked.",c):s<b?r.setValidity({customError:!0},y||g.minselects||"Below limit checks.",c):w!=null&&s>w?r.setValidity({customError:!0},v||g.maxselects||"Above limit checks.",c):r.setValidity({}),r.checkValidity();const o=i.filter(d=>d.selected).sort((d,E)=>d.selectedOrder-E.selectedOrder);t(1,h=o.map(d=>d.value).join(",")),t(15,Q=o.map(d=>d.label?d.label:d.value)),fe("value",o.map(d=>d.value))}l.$$.dirty[0]&1&&t(17,n=Array.isArray(i)&&i.some(s=>s.selected)),l.$$.dirty[0]&16777216&&f&&xe()},[i,h,k,u,p,B,q,U,S,m,W,a,c,G,H,Q,N,n,be,_,ye,w,r,b,f,R,g,x,y,v,ge,ve,Ve,Me,we,je]}class $e extends Ee{constructor(e){super(),Oe(this,e,Ze,Qe,He,{attachedInternals:22,minSelects:23,maxSelects:21,options:0,disabled:2,required:3,hint:4,value:24,internalValue:1,id:5,name:6,autocomplete:7,label:8,labelType:9,showClear:10,getValue:25,validationMessages:26,requiredValidationMessage:27,minselectsValidationMessage:28,maxselectsValidationMessage:29,reportValidity:30},null,[-1,-1])}get attachedInternals(){return this.$$.ctx[22]}set attachedInternals(e){this.$$set({attachedInternals:e}),V()}get minSelects(){return this.$$.ctx[23]}set minSelects(e){this.$$set({minSelects:e}),V()}get maxSelects(){return this.$$.ctx[21]}set maxSelects(e){this.$$set({maxSelects:e}),V()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),V()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),V()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),V()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),V()}get value(){return this.$$.ctx[24]}set value(e){this.$$set({value:e}),V()}get internalValue(){return this.$$.ctx[1]}set internalValue(e){this.$$set({internalValue:e}),V()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),V()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),V()}get autocomplete(){return this.$$.ctx[7]}set autocomplete(e){this.$$set({autocomplete:e}),V()}get label(){return this.$$.ctx[8]}set label(e){this.$$set({label:e}),V()}get labelType(){return this.$$.ctx[9]}set labelType(e){this.$$set({labelType:e}),V()}get showClear(){return this.$$.ctx[10]}set showClear(e){this.$$set({showClear:e}),V()}get getValue(){return this.$$.ctx[25]}get validationMessages(){return this.$$.ctx[26]}set validationMessages(e){this.$$set({validationMessages:e}),V()}get requiredValidationMessage(){return this.$$.ctx[27]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),V()}get minselectsValidationMessage(){return this.$$.ctx[28]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),V()}get maxselectsValidationMessage(){return this.$$.ctx[29]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),V()}get reportValidity(){return this.$$.ctx[30]}}try{customElements.define("jp-multiselect",Ae($e,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},internalValue:{},id:{},name:{},autocomplete:{},label:{},labelType:{},showClear:{type:"Boolean"},validationMessages:{},requiredValidationMessage:{},minselectsValidationMessage:{},maxselectsValidationMessage:{}},[],["getValue","reportValidity"],!1,l=>{var e;return e=class extends l{constructor(){super(),this.attachedInternals=this.attachInternals()}},Ie(e,"formAssociated",!0),e}));}catch{};export{$e as default};
//# sourceMappingURL=multiselect.wc.js.map
