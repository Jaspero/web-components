var le=Object.defineProperty,ae=(n,e,t)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,oe=(n,e,t)=>(ae(n,typeof e!="symbol"?e+"":e,t),t);import{c as de,S as ue,i as ce,f as L,s as pe,a as ve,e as D,b as A,q as C,E as _,p as me,d as o,t as E,g as H,h as f,I as U,o as V,J,r as O,n as N,j as B,K as P,k as ze,w as he,l as G,P as fe,Q as be,G as Q}from"./svelte.js";import"./index2.js";function ge(n){ve(n,"svelte-1pi29zz",".has-hint.svelte-1pi29zz.svelte-1pi29zz{position:relative;margin-bottom:1.25rem}.overlay.svelte-1pi29zz.svelte-1pi29zz{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1pi29zz.svelte-1pi29zz{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1pi29zz.svelte-1pi29zz:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1pi29zz.svelte-1pi29zz{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.5}.select-label.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s, top .3s, font-size .3s}.select-label.move.svelte-1pi29zz.svelte-1pi29zz{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1pi29zz .select-label.svelte-1pi29zz::after{content:' *'}input.svelte-1pi29zz:required:invalid+.select.svelte-1pi29zz{border-color:var(--danger-color)}.select-option.svelte-1pi29zz.svelte-1pi29zz{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1pi29zz.svelte-1pi29zz{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:transform .3s}.select-arrow.rotate.svelte-1pi29zz.svelte-1pi29zz{transform:rotate(-180deg)}.select-hint.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1pi29zz.svelte-1pi29zz:hover{z-index:255;overflow:unset}.menu.svelte-1pi29zz.svelte-1pi29zz{position:absolute;display:flex;flex-direction:column;max-height:300px;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1pi29zz.svelte-1pi29zz{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:background-color .3s, color .3s, fill .3s}.menu-button.selected.svelte-1pi29zz.svelte-1pi29zz{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.33}.menu-button.svelte-1pi29zz.svelte-1pi29zz:not(:disabled):hover,.menu-button.svelte-1pi29zz.svelte-1pi29zz:focus{background-color:var(--background-secondary)}")}function R(n,e,t){const r=n.slice();return r[26]=e[t],r[27]=e,r[28]=t,r}function F(n){let e;return{c(){e=D("span"),o(e,"class","select-hint svelte-1pi29zz")},m(t,r){H(t,e,r),e.innerHTML=n[4]},p(t,r){r&16&&(e.innerHTML=t[4])},d(t){t&&B(e)}}}function W(n){let e,t,r=[],i=new Map,b,k,x=G(n[1]);const u=a=>a[26];for(let a=0;a<x.length;a+=1){let d=R(n,x,a),g=u(d);i.set(g,r[a]=Z(g,d))}return{c(){e=D("div"),t=D("div");for(let a=0;a<r.length;a+=1)r[a].c();o(t,"class","menu svelte-1pi29zz"),o(t,"style",n[10]),o(e,"class","overlay svelte-1pi29zz"),o(e,"tabindex","-1"),o(e,"role","dialog")},m(a,d){H(a,e,d),f(e,t);for(let g=0;g<r.length;g+=1)r[g]&&r[g].m(t,null);b||(k=[V(e,"click",n[13]),V(e,"keydown",n[14])],b=!0)},p(a,d){d&6147&&(x=G(a[1]),r=fe(r,d,u,1,a,x,i,t,be,Z,null,R)),d&1024&&o(t,"style",a[10])},d(a){a&&B(e);for(let d=0;d<r.length;d+=1)r[d].d();b=!1,P(k)}}}function X(n){let e,t;return{c(){e=_("svg"),t=_("path"),o(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","1rem"),o(e,"height","1rem"),o(e,"viewBox","0 0 448 512")},m(r,i){H(r,e,i),f(e,t)},d(r){r&&B(e)}}}function Z(n,e){let t,r,i=(e[26].label?e[26].label:e[26].value)+"",b,k,x,u,a=e[28],d,g,h=e[0]==e[26].value&&X();const m=()=>e[19](t,a),$=()=>e[19](null,a);function T(){return e[20](e[26])}return{key:n,first:null,c(){t=D("button"),r=D("span"),b=C(i),k=A(),h&&h.c(),x=A(),o(t,"class","menu-button svelte-1pi29zz"),t.disabled=u=e[26].disabled,E(t,"selected",e[0]==e[26].value),this.first=t},m(c,y){H(c,t,y),f(t,r),f(r,b),f(t,k),h&&h.m(t,null),f(t,x),m(),d||(g=V(t,"click",J(T)),d=!0)},p(c,y){e=c,y&2&&i!==(i=(e[26].label?e[26].label:e[26].value)+"")&&O(b,i),e[0]==e[26].value?h||(h=X(),h.c(),h.m(t,x)):h&&(h.d(1),h=null),y&2&&u!==(u=e[26].disabled)&&(t.disabled=u),a!==e[28]&&($(),a=e[28],m()),y&3&&E(t,"selected",e[0]==e[26].value)},d(c){c&&B(t),h&&h.d(),$(),d=!1,g()}}}function we(n){let e,t,r,i,b,k=(n[7]||"Select an option")+"",x,u,a,d=(n[12]||"")+"",g,h,m,$,T,c,y,K,M,w=n[4]&&F(n),z=n[8]&&W(n);return{c(){e=D("div"),t=D("input"),r=A(),i=D("button"),b=D("span"),x=C(k),u=A(),a=D("span"),g=C(d),h=A(),m=_("svg"),$=_("path"),T=A(),w&&w.c(),c=A(),z&&z.c(),y=me(),o(t,"id",n[5]),o(t,"name",n[6]),t.required=n[3],t.hidden=!0,o(t,"class","svelte-1pi29zz"),o(b,"class","select-label svelte-1pi29zz"),E(b,"move",n[0]||n[8]),o(a,"class","select-option svelte-1pi29zz"),o($,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),o(m,"xmlns","http://www.w3.org/2000/svg"),o(m,"viewBox","0 0 320 512"),o(m,"class","select-arrow svelte-1pi29zz"),E(m,"rotate",n[8]),o(i,"class","select svelte-1pi29zz"),i.disabled=n[2],E(i,"toggled",n[8]),o(e,"class","svelte-1pi29zz"),E(e,"has-hint",n[4])},m(l,p){H(l,e,p),f(e,t),U(t,n[0]),f(e,r),f(e,i),f(i,b),f(b,x),f(i,u),f(i,a),f(a,g),f(i,h),f(i,m),f(m,$),n[18](i),f(e,T),w&&w.m(e,null),H(l,c,p),z&&z.m(l,p),H(l,y,p),K||(M=[V(t,"input",n[17]),V(i,"click",J(n[13])),V(i,"keydown",n[14])],K=!0)},p(l,[p]){p&32&&o(t,"id",l[5]),p&64&&o(t,"name",l[6]),p&8&&(t.required=l[3]),p&1&&t.value!==l[0]&&U(t,l[0]),p&128&&k!==(k=(l[7]||"Select an option")+"")&&O(x,k),p&257&&E(b,"move",l[0]||l[8]),p&4096&&d!==(d=(l[12]||"")+"")&&O(g,d),p&256&&E(m,"rotate",l[8]),p&4&&(i.disabled=l[2]),p&256&&E(i,"toggled",l[8]),l[4]?w?w.p(l,p):(w=F(l),w.c(),w.m(e,null)):w&&(w.d(1),w=null),p&16&&E(e,"has-hint",l[4]),l[8]?z?z.p(l,p):(z=W(l),z.c(),z.m(y.parentNode,y)):z&&(z.d(1),z=null)},i:N,o:N,d(l){l&&(B(e),B(c),B(y)),n[18](null),w&&w.d(),z&&z.d(l),K=!1,P(M)}}}function xe(n,e,t){let{attachedInternals:r}=e,{options:i=[]}=e,{disabled:b=!1}=e,{required:k=!1}=e,{hint:x=""}=e,{value:u=""}=e,{id:a=""}=e,{name:d=""}=e,{label:g="Label"}=e;const h=()=>u;let m=!1,$,T,c=[],y="",K,M;const w=ze();function z(){const s=$.getBoundingClientRect(),I=window.innerHeight-s.bottom,v=300;let j="";I<v?j=`
            min-width: ${s.width}px;
            bottom: ${window.innerHeight-s.top}px;
            left: ${s.left}px;
        `:j=`
            min-width: ${s.width}px;
            top: ${s.bottom}px;
            left: ${s.left}px;
        `,t(10,T=j),t(8,m=!m),m&&setTimeout(()=>{const Y=i.findIndex(q=>!q.disabled);Y!==-1&&c[Y].focus()},10),m||setTimeout(()=>{$.focus()},10)}function l(s,I){if(I==="next"){for(let v=s+1;v<i.length;v++)if(!i[v].disabled)return v}else if(I==="previous"){for(let v=s-1;v>=0;v--)if(!i[v].disabled)return v}return s}function p(s){const I=c.findIndex(j=>j===document.activeElement);let v;if(m){if(s.key==="Escape"){z(),$.focus();return}const j=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,Y=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(j){s.preventDefault();const q=i.findIndex(S=>!S.disabled);q!==-1&&c[q].focus();return}if(Y){s.preventDefault();const q=i.slice().reverse().findIndex(re=>!re.disabled),S=q!==-1?i.length-1-q:-1;S!==-1&&c[S].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowUp"?v=l(I,"previous"):v=l(I,"next"),c[v].focus()),s.key==="Tab"){if(s.preventDefault(),s.shiftKey){if(v=l(I,"previous"),I===v){z(),$.focus();return}}else if(v=l(I,"next"),I===v){z(),$.focus();return}c[v].focus()}if(/^[a-z\d]$/i.test(s.key)){clearTimeout(K),y+=s.key;const q=i.findIndex(S=>S.toLowerCase().includes(y.toLowerCase()));q!==-1&&c[q].focus(),K=setTimeout(()=>{y=""},500)}}}he(()=>{typeof i=="string"&&t(1,i=JSON.parse(i)),u&&i.forEach(s=>{s.value==u&&t(12,M=s.label?s.label:s.value)})});function te(){u=this.value,t(0,u)}function se(s){Q[s?"unshift":"push"](()=>{$=s,t(9,$)})}function ne(s,I){Q[s?"unshift":"push"](()=>{c[I]=s,t(11,c)})}const ie=s=>{t(0,u=s.value),t(12,M=s.label?s.label:s.value)};return n.$$set=s=>{"attachedInternals"in s&&t(15,r=s.attachedInternals),"options"in s&&t(1,i=s.options),"disabled"in s&&t(2,b=s.disabled),"required"in s&&t(3,k=s.required),"hint"in s&&t(4,x=s.hint),"value"in s&&t(0,u=s.value),"id"in s&&t(5,a=s.id),"name"in s&&t(6,d=s.name),"label"in s&&t(7,g=s.label)},n.$$.update=()=>{n.$$.dirty&32769&&(r.checkValidity(),w("value",u)),n.$$.dirty&256&&(m?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[u,i,b,k,x,a,d,g,m,$,T,c,M,z,p,r,h,te,se,ne,ie]}class ee extends ue{constructor(e){super(),ce(this,e,xe,we,pe,{attachedInternals:15,options:1,disabled:2,required:3,hint:4,value:0,id:5,name:6,label:7,getValue:16},ge)}get attachedInternals(){return this.$$.ctx[15]}set attachedInternals(e){this.$$set({attachedInternals:e}),L()}get options(){return this.$$.ctx[1]}set options(e){this.$$set({options:e}),L()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),L()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),L()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),L()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),L()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),L()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),L()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),L()}get getValue(){return this.$$.ctx[16]}}customElements.define("jp-select",de(ee,{attachedInternals:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{}},[],["getValue"],!1,n=>{var e;return e=class extends n{constructor(){super(),this.attachedInternals=this.attachInternals()}},oe(e,"formAssociated",!0),e}));export{ee as default};