var ce=Object.defineProperty,ue=(i,e,t)=>e in i?ce(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,pe=(i,e,t)=>(ue(i,typeof e!="symbol"?e+"":e,t),t);import{c as ve,S as ze,i as me,f as E,s as he,a as be,e as A,b as j,q as J,E as U,p as fe,d as a,t as L,g as D,h,H as P,o as Y,I as G,r as N,n as Q,j as H,J as R,k as ge,w as we,l as F,P as xe,Q as $e,G as O}from"./svelte.js";import"./index2.js";function ye(i){be(i,"svelte-1pi29zz",".has-hint.svelte-1pi29zz.svelte-1pi29zz{position:relative;margin-bottom:1.25rem}.overlay.svelte-1pi29zz.svelte-1pi29zz{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1pi29zz.svelte-1pi29zz{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1pi29zz.svelte-1pi29zz:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1pi29zz.svelte-1pi29zz{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.5}.select-label.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s, top .3s, font-size .3s}.select-label.move.svelte-1pi29zz.svelte-1pi29zz{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1pi29zz .select-label.svelte-1pi29zz::after{content:' *'}input.svelte-1pi29zz:required:invalid+.select.svelte-1pi29zz{border-color:var(--danger-color)}.select-option.svelte-1pi29zz.svelte-1pi29zz{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1pi29zz.svelte-1pi29zz{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:transform .3s}.select-arrow.rotate.svelte-1pi29zz.svelte-1pi29zz{transform:rotate(-180deg)}.select-hint.svelte-1pi29zz.svelte-1pi29zz{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1pi29zz.svelte-1pi29zz:hover{z-index:255;overflow:unset}.menu.svelte-1pi29zz.svelte-1pi29zz{position:absolute;display:flex;flex-direction:column;max-height:300px;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1pi29zz.svelte-1pi29zz{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:background-color .3s, color .3s, fill .3s}.menu-button.selected.svelte-1pi29zz.svelte-1pi29zz{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1pi29zz.svelte-1pi29zz:disabled{opacity:.33}.menu-button.svelte-1pi29zz.svelte-1pi29zz:not(:disabled):hover,.menu-button.svelte-1pi29zz.svelte-1pi29zz:focus{background-color:var(--background-secondary)}")}function W(i,e,t){const r=i.slice();return r[30]=e[t],r[31]=e,r[32]=t,r}function X(i){let e;return{c(){e=A("span"),a(e,"class","select-hint svelte-1pi29zz")},m(t,r){D(t,e,r),e.innerHTML=i[4]},p(t,r){r[0]&16&&(e.innerHTML=t[4])},d(t){t&&H(e)}}}function Z(i){let e,t,r=[],n=new Map,b,k,x=F(i[1]);const c=l=>l[30];for(let l=0;l<x.length;l+=1){let d=W(i,x,l),f=c(d);n.set(f,r[l]=te(f,d))}return{c(){e=A("div"),t=A("div");for(let l=0;l<r.length;l+=1)r[l].c();a(t,"class","menu svelte-1pi29zz"),a(t,"style",i[11]),a(e,"class","overlay svelte-1pi29zz"),a(e,"tabindex","-1"),a(e,"role","dialog")},m(l,d){D(l,e,d),h(e,t);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(t,null);b||(k=[Y(e,"click",i[14]),Y(e,"keydown",i[15])],b=!0)},p(l,d){d[0]&12291&&(x=F(l[1]),r=xe(r,d,c,1,l,x,n,t,$e,te,null,W)),d[0]&2048&&a(t,"style",l[11])},d(l){l&&H(e);for(let d=0;d<r.length;d+=1)r[d].d();b=!1,R(k)}}}function ee(i){let e,t;return{c(){e=U("svg"),t=U("path"),a(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width","1rem"),a(e,"height","1rem"),a(e,"viewBox","0 0 448 512")},m(r,n){D(r,e,n),h(e,t)},d(r){r&&H(e)}}}function te(i,e){let t,r,n=(e[30].label?e[30].label:e[30].value)+"",b,k,x,c,l=e[32],d,f,v=e[0]==e[30].value&&ee();const w=()=>e[23](t,l),I=()=>e[23](null,l);function V(){return e[24](e[30])}return{key:i,first:null,c(){t=A("button"),r=A("span"),b=J(n),k=j(),v&&v.c(),x=j(),a(t,"class","menu-button svelte-1pi29zz"),t.disabled=c=e[30].disabled,L(t,"selected",e[0]==e[30].value),this.first=t},m(z,$){D(z,t,$),h(t,r),h(r,b),h(t,k),v&&v.m(t,null),h(t,x),w(),d||(f=Y(t,"click",G(V)),d=!0)},p(z,$){e=z,$[0]&2&&n!==(n=(e[30].label?e[30].label:e[30].value)+"")&&N(b,n),e[0]==e[30].value?v||(v=ee(),v.c(),v.m(t,x)):v&&(v.d(1),v=null),$[0]&2&&c!==(c=e[30].disabled)&&(t.disabled=c),l!==e[32]&&(I(),l=e[32],w()),$[0]&3&&L(t,"selected",e[0]==e[30].value)},d(z){z&&H(t),v&&v.d(),I(),d=!1,f()}}}function ke(i){let e,t,r,n,b,k=(i[7]||"Select an option")+"",x,c,l,d=(i[13]||"")+"",f,v,w,I,V,z,$,y,B,g=i[4]&&X(i),m=i[9]&&Z(i);return{c(){e=A("div"),t=A("input"),r=j(),n=A("button"),b=A("span"),x=J(k),c=j(),l=A("span"),f=J(d),v=j(),w=U("svg"),I=U("path"),V=j(),g&&g.c(),z=j(),m&&m.c(),$=fe(),a(t,"id",i[5]),a(t,"name",i[6]),t.required=i[3],t.hidden=!0,a(t,"class","svelte-1pi29zz"),a(b,"class","select-label svelte-1pi29zz"),L(b,"move",i[0]||i[9]),a(l,"class","select-option svelte-1pi29zz"),a(I,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),a(w,"xmlns","http://www.w3.org/2000/svg"),a(w,"viewBox","0 0 320 512"),a(w,"class","select-arrow svelte-1pi29zz"),L(w,"rotate",i[9]),a(n,"class","select svelte-1pi29zz"),n.disabled=i[2],L(n,"toggled",i[9]),a(e,"class","svelte-1pi29zz"),L(e,"has-hint",i[4])},m(o,u){D(o,e,u),h(e,t),P(t,i[0]),i[21](t),h(e,r),h(e,n),h(n,b),h(b,x),h(n,c),h(n,l),h(l,f),h(n,v),h(n,w),h(w,I),i[22](n),h(e,V),g&&g.m(e,null),D(o,z,u),m&&m.m(o,u),D(o,$,u),y||(B=[Y(t,"input",i[20]),Y(n,"click",G(i[14])),Y(n,"keydown",i[15])],y=!0)},p(o,u){u[0]&32&&a(t,"id",o[5]),u[0]&64&&a(t,"name",o[6]),u[0]&8&&(t.required=o[3]),u[0]&1&&t.value!==o[0]&&P(t,o[0]),u[0]&128&&k!==(k=(o[7]||"Select an option")+"")&&N(x,k),u[0]&513&&L(b,"move",o[0]||o[9]),u[0]&8192&&d!==(d=(o[13]||"")+"")&&N(f,d),u[0]&512&&L(w,"rotate",o[9]),u[0]&4&&(n.disabled=o[2]),u[0]&512&&L(n,"toggled",o[9]),o[4]?g?g.p(o,u):(g=X(o),g.c(),g.m(e,null)):g&&(g.d(1),g=null),u[0]&16&&L(e,"has-hint",o[4]),o[9]?m?m.p(o,u):(m=Z(o),m.c(),m.m($.parentNode,$)):m&&(m.d(1),m=null)},i:Q,o:Q,d(o){o&&(H(e),H(z),H($)),i[21](null),i[22](null),g&&g.d(),m&&m.d(o),y=!1,R(B)}}}function qe(i,e,t){let{attachedInternals:r}=e,{options:n=[]}=e,{disabled:b=!1}=e,{required:k=!1}=e,{hint:x=""}=e,{value:c=""}=e,{id:l=""}=e,{name:d=""}=e,{label:f="Label"}=e;const v=()=>c;let{requiredValidationMessage:w}=e,I,V=!1,z,$,y=[],B="",g,m;const o=ge(),u=()=>{r.reportValidity()};function _(){const s=z.getBoundingClientRect(),q=window.innerHeight-s.bottom,p=300;let T="";q<p?T=`
            min-width: ${s.width}px;
            bottom: ${window.innerHeight-s.top}px;
            left: ${s.left}px;
        `:T=`
            min-width: ${s.width}px;
            top: ${s.bottom}px;
            left: ${s.left}px;
        `,t(11,$=T),t(9,V=!V),V&&setTimeout(()=>{const K=n.findIndex(M=>!M.disabled);K!==-1&&y[K].focus()},10),V||setTimeout(()=>{z.focus()},10)}function C(s,q){if(q==="next"){for(let p=s+1;p<n.length;p++)if(!n[p].disabled)return p}else if(q==="previous"){for(let p=s-1;p>=0;p--)if(!n[p].disabled)return p}return s}function ie(s){const q=y.findIndex(T=>T===document.activeElement);let p;if(V){if(s.key==="Escape"){_(),z.focus();return}const T=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,K=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(T){s.preventDefault();const M=n.findIndex(S=>!S.disabled);M!==-1&&y[M].focus();return}if(K){s.preventDefault();const M=n.slice().reverse().findIndex(de=>!de.disabled),S=M!==-1?n.length-1-M:-1;S!==-1&&y[S].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowUp"?p=C(q,"previous"):p=C(q,"next"),y[p].focus()),s.key==="Tab"){if(s.preventDefault(),s.shiftKey){if(p=C(q,"previous"),q===p){_(),z.focus();return}}else if(p=C(q,"next"),q===p){_(),z.focus();return}y[p].focus()}if(/^[a-z\d]$/i.test(s.key)){clearTimeout(g),B+=s.key;const M=n.findIndex(S=>S.toLowerCase().includes(B.toLowerCase()));M!==-1&&y[M].focus(),g=setTimeout(()=>{B=""},500)}}}we(()=>{typeof n=="string"&&t(1,n=JSON.parse(n)),c&&n.forEach(s=>{s.value==c&&t(13,m=s.label?s.label:s.value)})});function ne(){c=this.value,t(0,c)}function re(s){O[s?"unshift":"push"](()=>{I=s,t(8,I)})}function le(s){O[s?"unshift":"push"](()=>{z=s,t(10,z)})}function oe(s,q){O[s?"unshift":"push"](()=>{y[q]=s,t(12,y)})}const ae=s=>{t(0,c=s.value),t(13,m=s.label?s.label:s.value)};return i.$$set=s=>{"attachedInternals"in s&&t(16,r=s.attachedInternals),"options"in s&&t(1,n=s.options),"disabled"in s&&t(2,b=s.disabled),"required"in s&&t(3,k=s.required),"hint"in s&&t(4,x=s.hint),"value"in s&&t(0,c=s.value),"id"in s&&t(5,l=s.id),"name"in s&&t(6,d=s.name),"label"in s&&t(7,f=s.label),"requiredValidationMessage"in s&&t(18,w=s.requiredValidationMessage)},i.$$.update=()=>{i.$$.dirty[0]&327937&&(r.checkValidity(),I&&I.validity.valueMissing&&w&&r.setValidity({customError:!0},w),o("value",c)),i.$$.dirty[0]&512&&(V?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[c,n,b,k,x,l,d,f,I,V,z,$,y,m,_,ie,r,v,w,u,ne,re,le,oe,ae]}class se extends ze{constructor(e){super(),me(this,e,qe,ke,he,{attachedInternals:16,options:1,disabled:2,required:3,hint:4,value:0,id:5,name:6,label:7,getValue:17,requiredValidationMessage:18,reportValidity:19},ye,[-1,-1])}get attachedInternals(){return this.$$.ctx[16]}set attachedInternals(e){this.$$set({attachedInternals:e}),E()}get options(){return this.$$.ctx[1]}set options(e){this.$$set({options:e}),E()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),E()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),E()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),E()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),E()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),E()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),E()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),E()}get getValue(){return this.$$.ctx[17]}get requiredValidationMessage(){return this.$$.ctx[18]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),E()}get reportValidity(){return this.$$.ctx[19]}}try{customElements.define("jp-select",ve(se,{attachedInternals:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{},requiredValidationMessage:{}},[],["getValue","reportValidity"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},pe(e,"formAssociated",!0),e}));}catch{};export{se as default};
