var pe=Object.defineProperty,fe=(s,e,t)=>e in s?pe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,be=(s,e,t)=>(fe(s,typeof e!="symbol"?e+"":e,t),t);import{c as ge,S as xe,i as $e,f as y,s as qe,a as ye,e as E,b as H,q as P,E as J,p as we,d as u,t as A,g as L,h as g,I as F,o as C,H as W,r as G,n as X,j as B,J as Z,k as Ve,w as Me,l as _,O as ke,P as Ie,Q as Se,G as ee}from"./svelte.js";import"./index2.js";function Ee(s){ye(s,"svelte-171iqoh",".has-hint.svelte-171iqoh.svelte-171iqoh{position:relative;margin-bottom:1.25rem}.overlay.svelte-171iqoh.svelte-171iqoh{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-171iqoh.svelte-171iqoh{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-171iqoh.svelte-171iqoh:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-171iqoh.svelte-171iqoh{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-171iqoh.svelte-171iqoh:disabled{opacity:.5}.select-label.svelte-171iqoh.svelte-171iqoh{position:absolute;top:50%;transform:translateY(-50%);transition:.3s}.select-label.move.svelte-171iqoh.svelte-171iqoh{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-171iqoh .select-label.svelte-171iqoh::after{content:' *'}input.svelte-171iqoh:required:invalid+.select.svelte-171iqoh{border-color:var(--danger-color)}.select-option.svelte-171iqoh.svelte-171iqoh{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-171iqoh.svelte-171iqoh{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:.3s}.select-arrow.rotate.svelte-171iqoh.svelte-171iqoh{transform:rotate(-180deg)}.select-hint.svelte-171iqoh.svelte-171iqoh{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-171iqoh.svelte-171iqoh:hover{z-index:255;overflow:unset}.menu.svelte-171iqoh.svelte-171iqoh{position:absolute;display:flex;flex-direction:column;max-height:300px;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-171iqoh.svelte-171iqoh{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:.3s}.menu-button.selected.svelte-171iqoh.svelte-171iqoh{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-171iqoh.svelte-171iqoh:disabled{opacity:.33}.menu-button.svelte-171iqoh.svelte-171iqoh:not(:disabled):hover,.menu-button.svelte-171iqoh.svelte-171iqoh:focus{background-color:var(--background-secondary)}")}function te(s,e,t){const n=s.slice();return n[34]=e[t],n[35]=e,n[36]=t,n}function ie(s){let e;return{c(){e=E("span"),u(e,"class","select-hint svelte-171iqoh")},m(t,n){L(t,e,n),e.innerHTML=s[4]},p(t,n){n[0]&16&&(e.innerHTML=t[4])},d(t){t&&B(e)}}}function se(s){let e,t,n=[],d=new Map,m,a,w=_(s[0]);const V=o=>o[34];for(let o=0;o<w.length;o+=1){let c=te(s,w,o),f=V(c);d.set(f,n[o]=le(f,c))}return{c(){e=E("div"),t=E("div");for(let o=0;o<n.length;o+=1)n[o].c();u(t,"class","menu svelte-171iqoh"),u(t,"style",s[10]),u(e,"class","overlay svelte-171iqoh"),u(e,"tabindex","-1"),u(e,"role","dialog")},m(o,c){L(o,e,c),g(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);m||(a=[C(e,"click",ke(s[13])),C(e,"keydown",s[14])],m=!0)},p(o,c){c[0]&2049&&(w=_(o[0]),n=Ie(n,c,V,1,o,w,d,t,Se,le,null,te)),c[0]&1024&&u(t,"style",o[10])},d(o){o&&B(e);for(let c=0;c<n.length;c+=1)n[c].d();m=!1,Z(a)}}}function ae(s){let e,t;return{c(){e=J("svg"),t=J("path"),u(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","1rem"),u(e,"height","1rem"),u(e,"viewBox","0 0 448 512")},m(n,d){L(n,e,d),g(e,t)},d(n){n&&B(e)}}}function le(s,e){let t,n,d=(e[34].label?e[34].label:e[34].value)+"",m,a,w,V,o=e[36],c,f,b=e[34].selected&&ae();const M=()=>e[27](t,o),z=()=>e[27](null,o);function D(){return e[28](e[34],e[35],e[36])}return{key:s,first:null,c(){t=E("button"),n=E("span"),m=P(d),a=H(),b&&b.c(),w=H(),u(t,"class","menu-button svelte-171iqoh"),t.disabled=V=e[34].disabled,A(t,"selected",e[34].selected),this.first=t},m($,q){L($,t,q),g(t,n),g(n,m),g(t,a),b&&b.m(t,null),g(t,w),M(),c||(f=C(t,"click",W(D)),c=!0)},p($,q){e=$,q[0]&1&&d!==(d=(e[34].label?e[34].label:e[34].value)+"")&&G(m,d),e[34].selected?b||(b=ae(),b.c(),b.m(t,w)):b&&(b.d(1),b=null),q[0]&1&&V!==(V=e[34].disabled)&&(t.disabled=V),o!==e[36]&&(z(),o=e[36],M()),q[0]&1&&A(t,"selected",e[34].selected)},d($){$&&B(t),b&&b.d(),z(),c=!1,f()}}}function Ae(s){let e,t,n,d,m,a=(s[7]||"Select an option")+"",w,V,o,c=(s[12]||"")+"",f,b,M,z,D,$,q,T,j,x=s[4]&&ie(s),v=s[8]&&se(s);return{c(){e=E("div"),t=E("input"),n=H(),d=E("button"),m=E("span"),w=P(a),V=H(),o=E("span"),f=P(c),b=H(),M=J("svg"),z=J("path"),D=H(),x&&x.c(),$=H(),v&&v.c(),q=we(),u(t,"id",s[5]),u(t,"name",s[6]),t.required=s[3],t.hidden=!0,u(t,"class","svelte-171iqoh"),u(m,"class","select-label svelte-171iqoh"),A(m,"move",s[1]||s[8]),u(o,"class","select-option svelte-171iqoh"),u(z,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),u(M,"xmlns","http://www.w3.org/2000/svg"),u(M,"viewBox","0 0 320 512"),u(M,"class","select-arrow svelte-171iqoh"),A(M,"rotate",s[8]),u(d,"class","select svelte-171iqoh"),d.disabled=s[2],A(d,"toggled",s[8]),u(e,"class","svelte-171iqoh"),A(e,"has-hint",s[4])},m(r,p){L(r,e,p),g(e,t),F(t,s[1]),g(e,n),g(e,d),g(d,m),g(m,w),g(d,V),g(d,o),g(o,f),g(d,b),g(d,M),g(M,z),s[26](d),g(e,D),x&&x.m(e,null),L(r,$,p),v&&v.m(r,p),L(r,q,p),T||(j=[C(t,"input",s[25]),C(d,"click",W(s[13])),C(d,"keydown",s[14])],T=!0)},p(r,p){p[0]&32&&u(t,"id",r[5]),p[0]&64&&u(t,"name",r[6]),p[0]&8&&(t.required=r[3]),p[0]&2&&t.value!==r[1]&&F(t,r[1]),p[0]&128&&a!==(a=(r[7]||"Select an option")+"")&&G(w,a),p[0]&258&&A(m,"move",r[1]||r[8]),p[0]&4096&&c!==(c=(r[12]||"")+"")&&G(f,c),p[0]&256&&A(M,"rotate",r[8]),p[0]&4&&(d.disabled=r[2]),p[0]&256&&A(d,"toggled",r[8]),r[4]?x?x.p(r,p):(x=ie(r),x.c(),x.m(e,null)):x&&(x.d(1),x=null),p[0]&16&&A(e,"has-hint",r[4]),r[8]?v?v.p(r,p):(v=se(r),v.c(),v.m(q.parentNode,q)):v&&(v.d(1),v=null)},i:X,o:X,d(r){r&&(B(e),B($),B(q)),s[26](null),x&&x.d(),v&&v.d(r),T=!1,Z(j)}}}function ze(s,e,t){let{attachedInternals:n}=e,{minSelects:d=0}=e,{maxSelects:m=null}=e,{options:a=[]}=e,{disabled:w=!1}=e,{required:V=!1}=e,{hint:o=""}=e,{value:c}=e,{internalValue:f=""}=e,{id:b=""}=e,{name:M=""}=e,{label:z="Label"}=e;const D=()=>a.filter(i=>i.selected).map(i=>i.value);let{validationMessages:$={}}=e,{requiredValidationMessage:q}=e,{minselectsValidationMessage:T}=e,{maxselectsValidationMessage:j}=e,x=!1,v=!1,r,p,S=[],N="",Q,R;const re=Ve(),oe=()=>{n.reportValidity()};function O(i){if(i&&i.target&&i.target.closest(".menu"))return;const l=r.getBoundingClientRect(),h=window.innerHeight-l.bottom,K=300;let Y="";h<K?Y=`
            min-width: ${l.width}px;
            bottom: ${window.innerHeight-l.top}px;
            left: ${l.left}px;
        `:Y=`
            min-width: ${l.width}px;
            top: ${l.bottom}px;
            left: ${l.left}px;
        `,t(10,p=Y),t(8,v=!v),setTimeout(v?()=>{const I=a.findIndex(k=>!k.disabled);I!==-1&&S[I].focus()}:()=>{x?r.nextElementSibling.focus():r.focus()},10)}function U(i,l){if(l==="next"){for(let h=i+1;h<a.length;h++)if(!a[h].disabled)return h}else if(l==="previous"){for(let h=i-1;h>=0;h--)if(!a[h].disabled)return h}return i}function de(i){const l=S.findIndex(K=>K===document.activeElement);let h;if(v){if(i.key==="Escape"){O(),r.focus();return}const K=i.key==="Home"||i.key==="ArrowUp"&&i.metaKey,Y=i.key==="End"||i.key==="ArrowDown"&&i.metaKey;if(K){i.preventDefault();const I=a.findIndex(k=>!k.disabled);I!==-1&&S[I].focus();return}if(Y){i.preventDefault();const I=a.slice().reverse().findIndex(ve=>!ve.disabled),k=I!==-1?a.length-1-I:-1;k!==-1&&S[k].focus();return}if(["ArrowDown","ArrowUp"].includes(i.key)&&(i.preventDefault(),i.key==="ArrowUp"?h=U(l,"previous"):h=U(l,"next"),S[h].focus()),i.key==="Tab"){if(i.preventDefault(),x=!0,i.shiftKey){if(h=U(l,"previous"),l===h){O(),r.focus();return}}else if(h=U(l,"next"),l===h){O(),r.focus();return}S[h].focus()}if(/^[a-z\d]$/i.test(i.key)){clearTimeout(Q),N+=i.key;const I=a.map(k=>k.label?k.label:k.value).findIndex(k=>k.toLowerCase().includes(N.toLowerCase()));I!==-1&&S[I].focus(),Q=setTimeout(()=>{N=""},500)}}}Me(()=>{typeof a=="string"&&t(0,a=JSON.parse(a)),m||t(15,m=a.length),t(0,a=a.map(i=>(i.selected==null&&(i.selected=!1),i))),c&&(typeof c=="string"?c.split(",").forEach(i=>{t(0,a[a.findIndex(l=>l.value==i)].selected=!0,a)}):c.forEach(i=>{t(0,a[a.findIndex(l=>l.value==i)].selected=!0,a)}))});function ce(){f=this.value,t(1,f),t(0,a),t(3,V),t(16,n),t(21,q),t(20,$),t(17,d),t(22,T),t(15,m),t(23,j)}function ue(i){ee[i?"unshift":"push"](()=>{r=i,t(9,r)})}function he(i,l){ee[i?"unshift":"push"](()=>{S[l]=i,t(11,S)})}const me=(i,l,h)=>t(0,l[h].selected=!i.selected,a);return s.$$set=i=>{"attachedInternals"in i&&t(16,n=i.attachedInternals),"minSelects"in i&&t(17,d=i.minSelects),"maxSelects"in i&&t(15,m=i.maxSelects),"options"in i&&t(0,a=i.options),"disabled"in i&&t(2,w=i.disabled),"required"in i&&t(3,V=i.required),"hint"in i&&t(4,o=i.hint),"value"in i&&t(18,c=i.value),"internalValue"in i&&t(1,f=i.internalValue),"id"in i&&t(5,b=i.id),"name"in i&&t(6,M=i.name),"label"in i&&t(7,z=i.label),"validationMessages"in i&&t(20,$=i.validationMessages),"requiredValidationMessage"in i&&t(21,q=i.requiredValidationMessage),"minselectsValidationMessage"in i&&t(22,T=i.minselectsValidationMessage),"maxselectsValidationMessage"in i&&t(23,j=i.maxselectsValidationMessage)},s.$$.update=()=>{if(s.$$.dirty[0]&15958025&&Array.isArray(a)){const i=a.filter(l=>l.selected).length;i==0&&V?n.setValidity({customError:!0},q||$.required||"At least one item needs to be checked."):i<d?n.setValidity({customError:!0},T||$.minselects||"Below limit checks."):i>m?n.setValidity({customError:!0},j||$.maxselects||"Above limit checks."):n.setValidity({}),n.checkValidity(),t(1,f=a.filter(l=>l.selected).map(l=>l.value).join(",")),t(12,R=a.filter(l=>l.selected).map(l=>l.label?l.label:l.value)),re("value",a.filter(l=>l.selected).map(l=>l.value))}s.$$.dirty[0]&256&&(v?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[a,f,w,V,o,b,M,z,v,r,p,S,R,O,de,m,n,d,c,D,$,q,T,j,oe,ce,ue,he,me]}class ne extends xe{constructor(e){super(),$e(this,e,ze,Ae,qe,{attachedInternals:16,minSelects:17,maxSelects:15,options:0,disabled:2,required:3,hint:4,value:18,internalValue:1,id:5,name:6,label:7,getValue:19,validationMessages:20,requiredValidationMessage:21,minselectsValidationMessage:22,maxselectsValidationMessage:23,reportValidity:24},Ee,[-1,-1])}get attachedInternals(){return this.$$.ctx[16]}set attachedInternals(e){this.$$set({attachedInternals:e}),y()}get minSelects(){return this.$$.ctx[17]}set minSelects(e){this.$$set({minSelects:e}),y()}get maxSelects(){return this.$$.ctx[15]}set maxSelects(e){this.$$set({maxSelects:e}),y()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),y()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),y()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),y()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),y()}get value(){return this.$$.ctx[18]}set value(e){this.$$set({value:e}),y()}get internalValue(){return this.$$.ctx[1]}set internalValue(e){this.$$set({internalValue:e}),y()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),y()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),y()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),y()}get getValue(){return this.$$.ctx[19]}get validationMessages(){return this.$$.ctx[20]}set validationMessages(e){this.$$set({validationMessages:e}),y()}get requiredValidationMessage(){return this.$$.ctx[21]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),y()}get minselectsValidationMessage(){return this.$$.ctx[22]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),y()}get maxselectsValidationMessage(){return this.$$.ctx[23]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),y()}get reportValidity(){return this.$$.ctx[24]}}try{customElements.define("jp-multiselect",ge(ne,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},internalValue:{},id:{},name:{},label:{},validationMessages:{},requiredValidationMessage:{},minselectsValidationMessage:{},maxselectsValidationMessage:{}},[],["getValue","reportValidity"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},be(e,"formAssociated",!0),e}));}catch{};export{ne as default};
