var ie=Object.defineProperty,oe=(n,e,t)=>e in n?ie(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,re=(n,e,t)=>(oe(n,typeof e!="symbol"?e+"":e,t),t);import{c as ae,S as de,i as ce,f as S,s as he,a as ue,e as q,b as L,q as K,E as O,p as me,d as u,t as I,g as j,h as x,I as J,o as B,J as N,r as _,n as P,j as D,K as U,k as pe,w as xe,l as Y,V as ve,O as fe,P as be,G as R}from"./svelte.js";import"./index2.js";function ge(n){ue(n,"svelte-1hx70d2",".has-hint.svelte-1hx70d2.svelte-1hx70d2{position:relative;margin-bottom:1.25rem}.overlay.svelte-1hx70d2.svelte-1hx70d2{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-1hx70d2.svelte-1hx70d2{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-1hx70d2.svelte-1hx70d2:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-1hx70d2.svelte-1hx70d2{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-1hx70d2.svelte-1hx70d2:disabled{opacity:.5}.select-label.svelte-1hx70d2.svelte-1hx70d2{position:absolute;top:50%;transform:translateY(-50%);transition:.3s}.select-label.move.svelte-1hx70d2.svelte-1hx70d2{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-1hx70d2 .select-label.svelte-1hx70d2::after{content:' *'}input.svelte-1hx70d2:required:invalid+.select.svelte-1hx70d2{border-color:var(--danger-color)}.select-option.svelte-1hx70d2.svelte-1hx70d2{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-1hx70d2.svelte-1hx70d2{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:.3s}.select-arrow.rotate.svelte-1hx70d2.svelte-1hx70d2{transform:rotate(-180deg)}.select-hint.svelte-1hx70d2.svelte-1hx70d2{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-1hx70d2.svelte-1hx70d2:hover{z-index:255;overflow:unset}.menu.svelte-1hx70d2.svelte-1hx70d2{position:absolute;display:flex;flex-direction:column;max-height:20rem;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-1hx70d2.svelte-1hx70d2{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:.3s}.menu-button.selected.svelte-1hx70d2.svelte-1hx70d2{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-1hx70d2.svelte-1hx70d2:hover,.menu-button.svelte-1hx70d2.svelte-1hx70d2:focus{background-color:var(--background-secondary)}")}function F(n,e,t){const l=n.slice();return l[25]=e[t],l[26]=e,l[27]=t,l}function G(n){let e;return{c(){e=q("span"),u(e,"class","select-hint svelte-1hx70d2")},m(t,l){j(t,e,l),e.innerHTML=n[4]},p(t,l){l&16&&(e.innerHTML=t[4])},d(t){t&&D(e)}}}function Q(n){let e,t,l=[],i=new Map,m,a,b=Y(n[0]);const y=o=>o[25];for(let o=0;o<b.length;o+=1){let d=F(n,b,o),c=y(d);i.set(c,l[o]=X(c,d))}return{c(){e=q("div"),t=q("div");for(let o=0;o<l.length;o+=1)l[o].c();u(t,"class","menu svelte-1hx70d2"),u(t,"style",n[10]),u(e,"class","overlay svelte-1hx70d2"),u(e,"tabindex","-1"),u(e,"role","dialog")},m(o,d){j(o,e,d),x(e,t);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(t,null);m||(a=[B(e,"click",ve(n[12])),B(e,"keydown",n[13])],m=!0)},p(o,d){d&2049&&(b=Y(o[0]),l=fe(l,d,y,1,o,b,i,t,be,X,null,F)),d&1024&&u(t,"style",o[10])},d(o){o&&D(e);for(let d=0;d<l.length;d+=1)l[d].d();m=!1,U(a)}}}function W(n){let e,t;return{c(){e=O("svg"),t=O("path"),u(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","1rem"),u(e,"height","1rem"),u(e,"viewBox","0 0 448 512")},m(l,i){j(l,e,i),x(e,t)},d(l){l&&D(e)}}}function X(n,e){let t,l,i=e[25].label+"",m,a,b,y=e[27],o,d,c=e[25].selected&&W();const V=()=>e[20](t,y),$=()=>e[20](null,y);function E(){return e[21](e[25],e[26],e[27])}return{key:n,first:null,c(){t=q("button"),l=q("span"),m=K(i),a=L(),c&&c.c(),b=L(),u(t,"class","menu-button svelte-1hx70d2"),I(t,"selected",e[25].selected),this.first=t},m(g,w){j(g,t,w),x(t,l),x(l,m),x(t,a),c&&c.m(t,null),x(t,b),V(),o||(d=B(t,"click",N(E)),o=!0)},p(g,w){e=g,w&1&&i!==(i=e[25].label+"")&&_(m,i),e[25].selected?c||(c=W(),c.c(),c.m(t,b)):c&&(c.d(1),c=null),y!==e[27]&&($(),y=e[27],V()),w&1&&I(t,"selected",e[25].selected)},d(g){g&&D(t),c&&c.d(),$(),o=!1,d()}}}function we(n){let e,t,l,i,m,a=(n[7]||"Select an option")+"",b,y,o,d=(n[1]||"")+"",c,V,$,E,g,w,z,k,T,v=n[4]&&G(n),f=n[8]&&Q(n);return{c(){e=q("div"),t=q("input"),l=L(),i=q("button"),m=q("span"),b=K(a),y=L(),o=q("span"),c=K(d),V=L(),$=O("svg"),E=O("path"),g=L(),v&&v.c(),w=L(),f&&f.c(),z=me(),u(t,"id",n[5]),u(t,"name",n[6]),t.required=n[3],t.hidden=!0,u(t,"class","svelte-1hx70d2"),u(m,"class","select-label svelte-1hx70d2"),I(m,"move",n[1]||n[8]),u(o,"class","select-option svelte-1hx70d2"),u(E,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),u($,"xmlns","http://www.w3.org/2000/svg"),u($,"viewBox","0 0 320 512"),u($,"class","select-arrow svelte-1hx70d2"),I($,"rotate",n[8]),u(i,"class","select svelte-1hx70d2"),i.disabled=n[2],I(i,"toggled",n[8]),u(e,"class","svelte-1hx70d2"),I(e,"has-hint",n[4])},m(r,p){j(r,e,p),x(e,t),J(t,n[1]),x(e,l),x(e,i),x(i,m),x(m,b),x(i,y),x(i,o),x(o,c),x(i,V),x(i,$),x($,E),n[19](i),x(e,g),v&&v.m(e,null),j(r,w,p),f&&f.m(r,p),j(r,z,p),k||(T=[B(t,"input",n[18]),B(i,"click",N(n[12])),B(i,"keydown",n[13])],k=!0)},p(r,[p]){p&32&&u(t,"id",r[5]),p&64&&u(t,"name",r[6]),p&8&&(t.required=r[3]),p&2&&t.value!==r[1]&&J(t,r[1]),p&128&&a!==(a=(r[7]||"Select an option")+"")&&_(b,a),p&258&&I(m,"move",r[1]||r[8]),p&2&&d!==(d=(r[1]||"")+"")&&_(c,d),p&256&&I($,"rotate",r[8]),p&4&&(i.disabled=r[2]),p&256&&I(i,"toggled",r[8]),r[4]?v?v.p(r,p):(v=G(r),v.c(),v.m(e,null)):v&&(v.d(1),v=null),p&16&&I(e,"has-hint",r[4]),r[8]?f?f.p(r,p):(f=Q(r),f.c(),f.m(z.parentNode,z)):f&&(f.d(1),f=null)},i:P,o:P,d(r){r&&(D(e),D(w),D(z)),n[19](null),v&&v.d(),f&&f.d(r),k=!1,U(T)}}}function $e(n,e,t){let{attachedInternals:l}=e,{minSelects:i=0}=e,{maxSelects:m=null}=e,{options:a=[]}=e,{disabled:b=!1}=e,{required:y=!1}=e,{hint:o=""}=e,{value:d=""}=e,{id:c=""}=e,{name:V=""}=e,{label:$="Label"}=e;const E=()=>a.filter(s=>s.selected).map(s=>s.label);let g=!1,w,z,k=[],T="",v;const f=pe();function r(s){if(s&&s.target&&s.target.closest(".menu"))return;const h=w.getBoundingClientRect(),A=window.innerHeight-h.bottom,H=160;let M="";A<H?M=`
            min-width: ${h.width}px;
            bottom: ${window.innerHeight-h.top}px;
            left: ${h.left}px;
        `:M=`
            min-width: ${h.width}px;
            top: ${h.bottom}px;
            left: ${h.left}px;
        `,t(10,z=M),t(8,g=!g),g&&setTimeout(()=>{const C=d?a.indexOf(d):0;k[C].focus()},1),g||setTimeout(()=>{w.focus()},10)}function p(s){const h=k.findIndex(H=>H===document.activeElement);let A;if(g){if(s.key==="Escape"){r(),w.focus();return}const H=s.key==="Home"||s.key==="ArrowUp"&&s.metaKey,M=s.key==="End"||s.key==="ArrowDown"&&s.metaKey;if(H){s.preventDefault(),k[0].focus();return}if(M){s.preventDefault(),k[a.length-1].focus();return}if(["ArrowDown","ArrowUp"].includes(s.key)&&(s.preventDefault(),s.key==="ArrowDown"?h<a.length-1?A=h+1:A=h:h>0?A=h-1:A=h,k[A].focus()),/^[a-z\d]$/i.test(s.key)){clearTimeout(v),T+=s.key;const C=a.findIndex(le=>le.toLowerCase().includes(T.toLowerCase()));C!==-1&&k[C].focus(),v=setTimeout(()=>{T=""},500)}}}xe(()=>{typeof a=="string"&&t(0,a=JSON.parse(a)),m||t(14,m=a.length)});function ee(){d=this.value,t(1,d),t(0,a),t(16,i),t(15,l),t(14,m)}function te(s){R[s?"unshift":"push"](()=>{w=s,t(9,w)})}function se(s,h){R[s?"unshift":"push"](()=>{k[h]=s,t(11,k)})}const ne=(s,h,A)=>t(0,h[A].selected=!s.selected,a);return n.$$set=s=>{"attachedInternals"in s&&t(15,l=s.attachedInternals),"minSelects"in s&&t(16,i=s.minSelects),"maxSelects"in s&&t(14,m=s.maxSelects),"options"in s&&t(0,a=s.options),"disabled"in s&&t(2,b=s.disabled),"required"in s&&t(3,y=s.required),"hint"in s&&t(4,o=s.hint),"value"in s&&t(1,d=s.value),"id"in s&&t(5,c=s.id),"name"in s&&t(6,V=s.name),"label"in s&&t(7,$=s.label)},n.$$.update=()=>{if(n.$$.dirty&114689&&Array.isArray(a)){const s=a.filter(h=>h.selected).length;s<i?l.setValidity({customError:!0},"Below limit checks."):s>m?l.setValidity({customError:!0},"Above limit checks."):l.setValidity({}),l.checkValidity(),t(1,d=a.filter(h=>h.selected).map(h=>h.label).join(",")),f("value",a.filter(h=>h.selected).map(h=>h.label))}},[a,d,b,y,o,c,V,$,g,w,z,k,r,p,m,l,i,E,ee,te,se,ne]}class Z extends de{constructor(e){super(),ce(this,e,$e,we,he,{attachedInternals:15,minSelects:16,maxSelects:14,options:0,disabled:2,required:3,hint:4,value:1,id:5,name:6,label:7,getValue:17},ge)}get attachedInternals(){return this.$$.ctx[15]}set attachedInternals(e){this.$$set({attachedInternals:e}),S()}get minSelects(){return this.$$.ctx[16]}set minSelects(e){this.$$set({minSelects:e}),S()}get maxSelects(){return this.$$.ctx[14]}set maxSelects(e){this.$$set({maxSelects:e}),S()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),S()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),S()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),S()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),S()}get value(){return this.$$.ctx[1]}set value(e){this.$$set({value:e}),S()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),S()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),S()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),S()}get getValue(){return this.$$.ctx[17]}}customElements.define("jp-multiselect",ae(Z,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{}},[],["getValue"],!1,n=>{var e;return e=class extends n{constructor(){super(),this.attachedInternals=this.attachInternals()}},re(e,"formAssociated",!0),e}));export{Z as default};
