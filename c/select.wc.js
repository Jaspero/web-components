var le=Object.defineProperty,ae=(n,e,t)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,oe=(n,e,t)=>(ae(n,typeof e!="symbol"?e+"":e,t),t);import{c as de,S as ce,i as ue,f as L,s as pe,a as ve,e as D,b as A,q as _,E as Y,p as me,d as o,t as E,g as H,h as b,I as U,o as K,J,r as O,n as N,j as B,K as P,k as ze,w as he,l as G,P as be,Q as fe,G as Q}from"./svelte.js";import"./index2.js";function ge(n){ve(n,"svelte-1pi29zz",".has-hint.svelte-1pi29zz.svelte-1pi29zz{position:relative;margin-bottom:1.25rem}.overlay.svelte-1pi29zz.svelte-1pi29zz{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1pi29zz.svelte-1pi29zz{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1pi29zz.svelte-1pi29zz:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1pi29zz.svelte-1pi29zz{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.5}.select-label.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s, top .3s, font-size .3s}.select-label.move.svelte-1pi29zz.svelte-1pi29zz{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1pi29zz .select-label.svelte-1pi29zz::after{content:' *'}input.svelte-1pi29zz:required:invalid+.select.svelte-1pi29zz{border-color:var(--danger-color)}.select-option.svelte-1pi29zz.svelte-1pi29zz{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1pi29zz.svelte-1pi29zz{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:transform .3s}.select-arrow.rotate.svelte-1pi29zz.svelte-1pi29zz{transform:rotate(-180deg)}.select-hint.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1pi29zz.svelte-1pi29zz:hover{z-index:255;overflow:unset}.menu.svelte-1pi29zz.svelte-1pi29zz{position:absolute;display:flex;flex-direction:column;max-height:300px;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1pi29zz.svelte-1pi29zz{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:background-color .3s, color .3s, fill .3s}.menu-button.selected.svelte-1pi29zz.svelte-1pi29zz{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.33}.menu-button.svelte-1pi29zz.svelte-1pi29zz:not(:disabled):hover,.menu-button.svelte-1pi29zz.svelte-1pi29zz:focus{background-color:var(--background-secondary)}")}function R(n,e,t){const r=n.slice();return r[26]=e[t],r[27]=e,r[28]=t,r}function F(n){let e;return{c(){e=D("span"),o(e,"class","select-hint svelte-1pi29zz")},m(t,r){H(t,e,r),e.innerHTML=n[4]},p(t,r){r&16&&(e.innerHTML=t[4])},d(t){t&&B(e)}}}function W(n){let e,t,r=[],i=new Map,f,k,x=G(n[1]);const z=a=>a[26];for(let a=0;a<x.length;a+=1){let d=R(n,x,a),g=z(d);i.set(g,r[a]=Z(g,d))}return{c(){e=D("div"),t=D("div");for(let a=0;a<r.length;a+=1)r[a].c();o(t,"class","menu svelte-1pi29zz"),o(t,"style",n[10]),o(e,"class","overlay svelte-1pi29zz"),o(e,"tabindex","-1"),o(e,"role","dialog")},m(a,d){H(a,e,d),b(e,t);for(let g=0;g<r.length;g+=1)r[g]&&r[g].m(t,null);f||(k=[K(e,"click",n[13]),K(e,"keydown",n[14])],f=!0)},p(a,d){d&6147&&(x=G(a[1]),r=be(r,d,z,1,a,x,i,t,fe,Z,null,R)),d&1024&&o(t,"style",a[10])},d(a){a&&B(e);for(let d=0;d<r.length;d+=1)r[d].d();f=!1,P(k)}}}function X(n){let e,t;return{c(){e=Y("svg"),t=Y("path"),o(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","1rem"),o(e,"height","1rem"),o(e,"viewBox","0 0 448 512")},m(r,i){H(r,e,i),b(e,t)},d(r){r&&B(e)}}}function Z(n,e){let t,r,i=(e[26].label?e[26].label:e[26].value)+"",f,k,x,z,a=e[28],d,g,h=e[0]==e[26].value&&X();const v=()=>e[19](t,a),$=()=>e[19](null,a);function T(){return e[20](e[26])}return{key:n,first:null,c(){t=D("button"),r=D("span"),f=_(i),k=A(),h&&h.c(),x=A(),o(t,"class","menu-button svelte-1pi29zz"),t.disabled=z=e[26].disabled,E(t,"selected",e[0]==e[26].value),this.first=t},m(c,y){H(c,t,y),b(t,r),b(r,f),b(t,k),h&&h.m(t,null),b(t,x),v(),d||(g=K(t,"click",J(T)),d=!0)},p(c,y){e=c,y&2&&i!==(i=(e[26].label?e[26].label:e[26].value)+"")&&O(f,i),e[0]==e[26].value?h||(h=X(),h.c(),h.m(t,x)):h&&(h.d(1),h=null),y&2&&z!==(z=e[26].disabled)&&(t.disabled=z),a!==e[28]&&($(),a=e[28],v()),y&3&&E(t,"selected",e[0]==e[26].value)},d(c){c&&B(t),h&&h.d(),$(),d=!1,g()}}}function we(n){let e,t,r,i,f,k=(n[7]||"Select an option")+"",x,z,a,d=(n[12]||"")+"",g,h,v,$,T,c,y,M,S,w=n[4]&&F(n),m=n[8]&&W(n);return{c(){e=D("div"),t=D("input"),r=A(),i=D("button"),f=D("span"),x=_(k),z=A(),a=D("span"),g=_(d),h=A(),v=Y("svg"),$=Y("path"),T=A(),w&&w.c(),c=A(),m&&m.c(),y=me(),o(t,"id",n[5]),o(t,"name",n[6]),t.required=n[3],t.hidden=!0,o(t,"class","svelte-1pi29zz"),o(f,"class","select-label svelte-1pi29zz"),E(f,"move",n[0]||n[8]),o(a,"class","select-option svelte-1pi29zz"),o($,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),o(v,"xmlns","http://www.w3.org/2000/svg"),o(v,"viewBox","0 0 320 512"),o(v,"class","select-arrow svelte-1pi29zz"),E(v,"rotate",n[8]),o(i,"class","select svelte-1pi29zz"),i.disabled=n[2],E(i,"toggled",n[8]),o(e,"class","svelte-1pi29zz"),E(e,"has-hint",n[4])},m(l,u){H(l,e,u),b(e,t),U(t,n[0]),b(e,r),b(e,i),b(i,f),b(f,x),b(i,z),b(i,a),b(a,g),b(i,h),b(i,v),b(v,$),n[18](i),b(e,T),w&&w.m(e,null),H(l,c,u),m&&m.m(l,u),H(l,y,u),M||(S=[K(t,"input",n[17]),K(i,"click",J(n[13])),K(i,"keydown",n[14])],M=!0)},p(l,[u]){u&32&&o(t,"id",l[5]),u&64&&o(t,"name",l[6]),u&8&&(t.required=l[3]),u&1&&t.value!==l[0]&&U(t,l[0]),u&128&&k!==(k=(l[7]||"Select an option")+"")&&O(x,k),u&257&&E(f,"move",l[0]||l[8]),u&4096&&d!==(d=(l[12]||"")+"")&&O(g,d),u&256&&E(v,"rotate",l[8]),u&4&&(i.disabled=l[2]),u&256&&E(i,"toggled",l[8]),l[4]?w?w.p(l,u):(w=F(l),w.c(),w.m(e,null)):w&&(w.d(1),w=null),u&16&&E(e,"has-hint",l[4]),l[8]?m?m.p(l,u):(m=W(l),m.c(),m.m(y.parentNode,y)):m&&(m.d(1),m=null)},i:N,o:N,d(l){l&&(B(e),B(c),B(y)),n[18](null),w&&w.d(),m&&m.d(l),M=!1,P(S)}}}function xe(n,e,t){let{attachedInternals:r}=e,{options:i=[]}=e,{disabled:f=!1}=e,{required:k=!1}=e,{hint:x=""}=e,{value:z=""}=e,{id:a=""}=e,{name:d=""}=e,{label:g="Label"}=e;const h=()=>z;let v=!1,$,T,c=[],y="",M,S;const w=ze();function m(){const s=$.getBoundingClientRect(),I=window.innerHeight-s.bottom,p=300;let j="";I<p?j=`
            min-width: ${s.width}px;
            bottom: ${window.innerHeight-s.top}px;
            left: ${s.left}px;
        `:j=`
            min-width: ${s.width}px;
            top: ${s.bottom}px;
            left: ${s.left}px;
        `,t(10,T=j),t(8,v=!v),v&&setTimeout(()=>{const V=i.findIndex(q=>!q.disabled);V!==-1&&c[V].focus()},10),v||setTimeout(()=>{$.focus()},10)}function l(s,I){if(I==="next"){for(let p=s+1;p<i.length;p++)if(!i[p].disabled)return p}else if(I==="previous"){for(let p=s-1;p>=0;p--)if(!i[p].disabled)return p}return s}function u(s){const I=c.findIndex(j=>j===document.activeElement);let p;if(v){if(s.key==="Escape"){m(),$.focus();return}const j=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,V=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(j){s.preventDefault();const q=i.findIndex(C=>!C.disabled);q!==-1&&c[q].focus();return}if(V){s.preventDefault();const q=i.slice().reverse().findIndex(re=>!re.disabled),C=q!==-1?i.length-1-q:-1;C!==-1&&c[C].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowUp"?p=l(I,"previous"):p=l(I,"next"),c[p].focus()),s.key==="Tab"){if(s.preventDefault(),s.shiftKey){if(p=l(I,"previous"),I===p){m(),$.focus();return}}else if(p=l(I,"next"),I===p){m(),$.focus();return}c[p].focus()}if(/^[a-z\d]$/i.test(s.key)){clearTimeout(M),y+=s.key;const q=i.findIndex(C=>C.toLowerCase().includes(y.toLowerCase()));q!==-1&&c[q].focus(),M=setTimeout(()=>{y=""},500)}}}he(()=>{typeof i=="string"&&t(1,i=JSON.parse(i))});function te(){z=this.value,t(0,z)}function se(s){Q[s?"unshift":"push"](()=>{$=s,t(9,$)})}function ne(s,I){Q[s?"unshift":"push"](()=>{c[I]=s,t(11,c)})}const ie=s=>{t(0,z=s.value),t(12,S=s.label?s.label:s.value)};return n.$$set=s=>{"attachedInternals"in s&&t(15,r=s.attachedInternals),"options"in s&&t(1,i=s.options),"disabled"in s&&t(2,f=s.disabled),"required"in s&&t(3,k=s.required),"hint"in s&&t(4,x=s.hint),"value"in s&&t(0,z=s.value),"id"in s&&t(5,a=s.id),"name"in s&&t(6,d=s.name),"label"in s&&t(7,g=s.label)},n.$$.update=()=>{n.$$.dirty&32769&&(r.checkValidity(),w("value",z)),n.$$.dirty&256&&(v?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[z,i,f,k,x,a,d,g,v,$,T,c,S,m,u,r,h,te,se,ne,ie]}class ee extends ce{constructor(e){super(),ue(this,e,xe,we,pe,{attachedInternals:15,options:1,disabled:2,required:3,hint:4,value:0,id:5,name:6,label:7,getValue:16},ge)}get attachedInternals(){return this.$$.ctx[15]}set attachedInternals(e){this.$$set({attachedInternals:e}),L()}get options(){return this.$$.ctx[1]}set options(e){this.$$set({options:e}),L()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),L()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),L()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),L()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),L()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),L()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),L()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),L()}get getValue(){return this.$$.ctx[16]}}customElements.define("jp-select",de(ee,{attachedInternals:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{}},[],["getValue"],!1,n=>{var e;return e=class extends n{constructor(){super(),this.attachedInternals=this.attachInternals()}},oe(e,"formAssociated",!0),e}));export{ee as default};
