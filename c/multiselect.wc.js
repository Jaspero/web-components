var ie=Object.defineProperty,re=(s,e,t)=>e in s?ie(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,oe=(s,e,t)=>(re(s,typeof e!="symbol"?e+"":e,t),t);import{c as ae,S as ce,i as de,f as $,s as ue,a as be,e as S,b as L,q as K,E as O,p as me,d as b,t as q,g as T,h,I as N,o as D,J as P,r as J,n as U,j as B,K as Y,k as ge,w as he,l as Q,O as ve,P as pe,Q as ye,G as R}from"./svelte.js";import"./index2.js";function fe(s){be(s,"svelte-ngbkjy",".has-hint.svelte-ngbkjy.svelte-ngbkjy{position:relative;margin-bottom:1.25rem}.overlay.svelte-ngbkjy.svelte-ngbkjy{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-ngbkjy.svelte-ngbkjy{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.select.svelte-ngbkjy.svelte-ngbkjy:focus{outline:none;border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-ngbkjy.svelte-ngbkjy{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-ngbkjy:disabled .select-label.svelte-ngbkjy,.select.svelte-ngbkjy:disabled .select-arrow.svelte-ngbkjy{opacity:.33}.select-label.svelte-ngbkjy.svelte-ngbkjy{position:absolute;top:50%;transform:translateY(-50%);transition:.3s}.select-label.move.svelte-ngbkjy.svelte-ngbkjy{top:.25rem;transform:translateY(0);font-size:.75rem}input:required+.select.svelte-ngbkjy .select-label.svelte-ngbkjy::after{content:' *'}input.svelte-ngbkjy:required:invalid+.select.svelte-ngbkjy{border-color:var(--danger-color)}.select-option.svelte-ngbkjy.svelte-ngbkjy{flex:auto;width:10rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-top:1rem}.select-arrow.svelte-ngbkjy.svelte-ngbkjy{width:1rem;height:1rem;min-width:1rem;min-height:1rem;transition:.3s}.select-arrow.rotate.svelte-ngbkjy.svelte-ngbkjy{transform:rotate(-180deg)}.select-hint.svelte-ngbkjy.svelte-ngbkjy{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:.75rem;padding:0 .75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-ngbkjy.svelte-ngbkjy:hover{z-index:255;overflow:unset}.menu.svelte-ngbkjy.svelte-ngbkjy{position:absolute;display:flex;flex-direction:column;max-height:20rem;overflow-y:auto;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;box-shadow:0 6px 9px rgba(0,0,0,.16);background-color:var(--background-primary)}.menu-button.svelte-ngbkjy.svelte-ngbkjy{display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:.75rem;text-align:left;outline:none;transition:.3s}.menu-button.selected.svelte-ngbkjy.svelte-ngbkjy{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-ngbkjy.svelte-ngbkjy:hover,.menu-button.svelte-ngbkjy.svelte-ngbkjy:focus{background-color:var(--background-secondary)}")}function _(s,e,t){const l=s.slice();return l[25]=e[t],l[26]=e,l[27]=t,l}function F(s){let e;return{c(){e=S("span"),b(e,"class","select-hint svelte-ngbkjy")},m(t,l){T(t,e,l),e.innerHTML=s[4]},p(t,l){l&16&&(e.innerHTML=t[4])},d(t){t&&B(e)}}}function G(s){let e,t,l=[],i=new Map,m,a,y=Q(s[0]);const j=r=>r[25];for(let r=0;r<y.length;r+=1){let c=_(s,y,r),d=j(c);i.set(d,l[r]=X(d,c))}return{c(){e=S("div"),t=S("div");for(let r=0;r<l.length;r+=1)l[r].c();b(t,"class","menu svelte-ngbkjy"),b(t,"style",s[10]),b(e,"class","overlay svelte-ngbkjy"),b(e,"tabindex","-1"),b(e,"role","dialog")},m(r,c){T(r,e,c),h(e,t);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(t,null);m||(a=[D(e,"click",ve(s[12])),D(e,"keydown",s[13])],m=!0)},p(r,c){c&2049&&(y=Q(r[0]),l=pe(l,c,j,1,r,y,i,t,ye,X,null,_)),c&1024&&b(t,"style",r[10])},d(r){r&&B(e);for(let c=0;c<l.length;c+=1)l[c].d();m=!1,Y(a)}}}function W(s){let e,t;return{c(){e=O("svg"),t=O("path"),b(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"width","1rem"),b(e,"height","1rem"),b(e,"viewBox","0 0 448 512")},m(l,i){T(l,e,i),h(e,t)},d(l){l&&B(e)}}}function X(s,e){let t,l,i=e[25].label+"",m,a,y,j=e[27],r,c,d=e[25].selected&&W();const A=()=>e[20](t,j),w=()=>e[20](null,j);function z(){return e[21](e[25],e[26],e[27])}return{key:s,first:null,c(){t=S("button"),l=S("span"),m=K(i),a=L(),d&&d.c(),y=L(),b(t,"class","menu-button svelte-ngbkjy"),q(t,"selected",e[25].selected),this.first=t},m(f,k){T(f,t,k),h(t,l),h(l,m),h(t,a),d&&d.m(t,null),h(t,y),A(),r||(c=D(t,"click",P(z)),r=!0)},p(f,k){e=f,k&1&&i!==(i=e[25].label+"")&&J(m,i),e[25].selected?d||(d=W(),d.c(),d.m(t,y)):d&&(d.d(1),d=null),j!==e[27]&&(w(),j=e[27],A()),k&1&&q(t,"selected",e[25].selected)},d(f){f&&B(t),d&&d.d(),w(),r=!1,c()}}}function ke(s){let e,t,l,i,m,a=(s[7]||"Select an option")+"",y,j,r,c=(s[1]||"")+"",d,A,w,z,f,k,E,x,V,v=s[4]&&F(s),p=s[8]&&G(s);return{c(){e=S("div"),t=S("input"),l=L(),i=S("button"),m=S("span"),y=K(a),j=L(),r=S("span"),d=K(c),A=L(),w=O("svg"),z=O("path"),f=L(),v&&v.c(),k=L(),p&&p.c(),E=me(),b(t,"id",s[5]),b(t,"name",s[6]),t.required=s[3],t.hidden=!0,b(t,"class","svelte-ngbkjy"),b(m,"class","select-label svelte-ngbkjy"),q(m,"move",s[1]||s[8]),b(r,"class","select-option svelte-ngbkjy"),b(z,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),b(w,"xmlns","http://www.w3.org/2000/svg"),b(w,"viewBox","0 0 320 512"),b(w,"class","select-arrow svelte-ngbkjy"),q(w,"rotate",s[8]),b(i,"class","select svelte-ngbkjy"),i.disabled=s[2],q(i,"toggled",s[8]),b(e,"class","svelte-ngbkjy"),q(e,"has-hint",s[4])},m(o,g){T(o,e,g),h(e,t),N(t,s[1]),h(e,l),h(e,i),h(i,m),h(m,y),h(i,j),h(i,r),h(r,d),h(i,A),h(i,w),h(w,z),s[19](i),h(e,f),v&&v.m(e,null),T(o,k,g),p&&p.m(o,g),T(o,E,g),x||(V=[D(t,"input",s[18]),D(i,"click",P(s[12])),D(i,"keydown",s[13])],x=!0)},p(o,[g]){g&32&&b(t,"id",o[5]),g&64&&b(t,"name",o[6]),g&8&&(t.required=o[3]),g&2&&t.value!==o[1]&&N(t,o[1]),g&128&&a!==(a=(o[7]||"Select an option")+"")&&J(y,a),g&258&&q(m,"move",o[1]||o[8]),g&2&&c!==(c=(o[1]||"")+"")&&J(d,c),g&256&&q(w,"rotate",o[8]),g&4&&(i.disabled=o[2]),g&256&&q(i,"toggled",o[8]),o[4]?v?v.p(o,g):(v=F(o),v.c(),v.m(e,null)):v&&(v.d(1),v=null),g&16&&q(e,"has-hint",o[4]),o[8]?p?p.p(o,g):(p=G(o),p.c(),p.m(E.parentNode,E)):p&&(p.d(1),p=null)},i:U,o:U,d(o){o&&(B(e),B(k),B(E)),s[19](null),v&&v.d(),p&&p.d(o),x=!1,Y(V)}}}function we(s,e,t){let{attachedInternals:l}=e,{minSelects:i=0}=e,{maxSelects:m=null}=e,{options:a=[]}=e,{disabled:y=!1}=e,{required:j=!1}=e,{hint:r=""}=e,{value:c=""}=e,{id:d=""}=e,{name:A=""}=e,{label:w="Label"}=e;const z=()=>a.filter(n=>n.selected).map(n=>n.label);let f=!1,k,E,x=[],V="",v;const p=ge();function o(n){if(n&&n.target&&n.target.closest(".menu"))return;const u=k.getBoundingClientRect(),I=window.innerHeight-u.bottom,H=160;let M="";I<H?M=`
            min-width: ${u.width}px;
            bottom: ${window.innerHeight-u.top}px;
            left: ${u.left}px;
        `:M=`
            min-width: ${u.width}px;
            top: ${u.bottom}px;
            left: ${u.left}px;
        `,t(10,E=M),t(8,f=!f),f&&setTimeout(()=>{const C=c?a.indexOf(c):0;x[C].focus()},1),f||setTimeout(()=>{k.focus()},10)}function g(n){const u=x.findIndex(H=>H===document.activeElement);let I;if(f){if(n.key==="Escape"){o(),k.focus();return}const H=n.key==="Home"||n.key==="ArrowUp"&&n.metaKey,M=n.key==="End"||n.key==="ArrowDown"&&n.metaKey;if(H){n.preventDefault(),x[0].focus();return}if(M){n.preventDefault(),x[a.length-1].focus();return}if(["ArrowDown","ArrowUp"].includes(n.key)&&(n.preventDefault(),n.key==="ArrowDown"?u<a.length-1?I=u+1:I=u:u>0?I=u-1:I=u,x[I].focus()),/^[a-z\d]$/i.test(n.key)){clearTimeout(v),V+=n.key;const C=a.findIndex(le=>le.toLowerCase().includes(V.toLowerCase()));C!==-1&&x[C].focus(),v=setTimeout(()=>{V=""},500)}}}he(()=>{typeof a=="string"&&t(0,a=JSON.parse(a)),m||t(14,m=a.length)});function ee(){c=this.value,t(1,c),t(0,a),t(16,i),t(15,l),t(14,m)}function te(n){R[n?"unshift":"push"](()=>{k=n,t(9,k)})}function ne(n,u){R[n?"unshift":"push"](()=>{x[u]=n,t(11,x)})}const se=(n,u,I)=>t(0,u[I].selected=!n.selected,a);return s.$$set=n=>{"attachedInternals"in n&&t(15,l=n.attachedInternals),"minSelects"in n&&t(16,i=n.minSelects),"maxSelects"in n&&t(14,m=n.maxSelects),"options"in n&&t(0,a=n.options),"disabled"in n&&t(2,y=n.disabled),"required"in n&&t(3,j=n.required),"hint"in n&&t(4,r=n.hint),"value"in n&&t(1,c=n.value),"id"in n&&t(5,d=n.id),"name"in n&&t(6,A=n.name),"label"in n&&t(7,w=n.label)},s.$$.update=()=>{if(s.$$.dirty&114689&&Array.isArray(a)){const n=a.filter(u=>u.selected).length;n<i?l.setValidity({customError:!0},"Below limit checks."):n>m?l.setValidity({customError:!0},"Above limit checks."):l.setValidity({}),l.checkValidity(),t(1,c=a.filter(u=>u.selected).map(u=>u.label).join(",")),p("value",a.filter(u=>u.selected).map(u=>u.label))}},[a,c,y,j,r,d,A,w,f,k,E,x,o,g,m,l,i,z,ee,te,ne,se]}class Z extends ce{constructor(e){super(),de(this,e,we,ke,ue,{attachedInternals:15,minSelects:16,maxSelects:14,options:0,disabled:2,required:3,hint:4,value:1,id:5,name:6,label:7,getValue:17},fe)}get attachedInternals(){return this.$$.ctx[15]}set attachedInternals(e){this.$$set({attachedInternals:e}),$()}get minSelects(){return this.$$.ctx[16]}set minSelects(e){this.$$set({minSelects:e}),$()}get maxSelects(){return this.$$.ctx[14]}set maxSelects(e){this.$$set({maxSelects:e}),$()}get options(){return this.$$.ctx[0]}set options(e){this.$$set({options:e}),$()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),$()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),$()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),$()}get value(){return this.$$.ctx[1]}set value(e){this.$$set({value:e}),$()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),$()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),$()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),$()}get getValue(){return this.$$.ctx[17]}}customElements.define("jp-multiselect",ae(Z,{attachedInternals:{},minSelects:{},maxSelects:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{}},[],["getValue"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},oe(e,"formAssociated",!0),e}));export{Z as default};
