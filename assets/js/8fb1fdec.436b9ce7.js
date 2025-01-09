"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5080],{7448:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>$,default:()=>m,frontMatter:()=>h,metadata:()=>f,toc:()=>p});var s=n(4848),r=n(8453),i=n(4312),c=(n(7095),Object.defineProperty),l=(t,e,n)=>((t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n)(t,"symbol"!=typeof e?e+"":e,n);function o(t){let e,n;return{c(){e=new i.a0(!1),n=(0,i.w)(),e.a=n},m(s,r){e.m(t[9],s,r),(0,i.f)(s,n,r)},p(t,n){512&n&&e.p(t[9])},d(t){t&&((0,i.k)(n),e.d())}}}function d(t){let e,n,s,r,c,l,d,a,u,h,$,f,x,p,g,m,y,b=t[7]&&o(t);return{c(){e=(0,i.e)("div"),b&&b.c(),n=(0,i.l)(),s=(0,i.e)("div"),r=(0,i.e)("div"),l=(0,i.l)(),d=(0,i.e)("input"),$=(0,i.l)(),f=(0,i.e)("input"),(0,i.d)(e,"class","jp-range-slider-container"),(0,i.d)(r,"class","jp-range-progress"),(0,i.d)(r,"style",c=`left: ${t[11]}%; right: ${100-t[10]}%`),(0,i.d)(d,"type","range"),(0,i.d)(d,"class","jp-range-input"),d.disabled=t[0],(0,i.d)(d,"step",a=t[6]?t[4]:"any"),(0,i.d)(d,"min",t[3]),(0,i.d)(d,"max",t[2]),(0,i.d)(d,"id",u=t[1]+"_min"),(0,i.d)(d,"name",h=t[5]+"_min"),(0,i.H)(d,"jp-range-input-disabled",t[0]),(0,i.d)(f,"type","range"),(0,i.d)(f,"class","jp-range-input"),f.disabled=t[0],(0,i.d)(f,"step",x=t[6]?t[4]:"any"),(0,i.d)(f,"min",t[3]),(0,i.d)(f,"max",t[2]),(0,i.d)(f,"id",p=t[1]+"_max"),(0,i.d)(f,"name",g=t[5]+"_max"),(0,i.H)(f,"jp-range-input-disabled",t[0]),(0,i.d)(s,"class","jp-range-slider")},m(c,o){(0,i.f)(c,e,o),b&&b.m(e,null),(0,i.f)(c,n,o),(0,i.f)(c,s,o),(0,i.p)(s,r),(0,i.p)(s,l),(0,i.p)(s,d),(0,i.E)(d,t[8][0]),(0,i.p)(s,$),(0,i.p)(s,f),(0,i.E)(f,t[8][1]),m||(y=[(0,i.m)(d,"change",t[15]),(0,i.m)(d,"input",t[15]),(0,i.m)(f,"change",t[16]),(0,i.m)(f,"input",t[16])],m=!0)},p(t,n){let[s]=n;t[7]?b?b.p(t,s):(b=o(t),b.c(),b.m(e,null)):b&&(b.d(1),b=null),3072&s&&c!==(c=`left: ${t[11]}%; right: ${100-t[10]}%`)&&(0,i.d)(r,"style",c),1&s&&(d.disabled=t[0]),80&s&&a!==(a=t[6]?t[4]:"any")&&(0,i.d)(d,"step",a),8&s&&(0,i.d)(d,"min",t[3]),4&s&&(0,i.d)(d,"max",t[2]),2&s&&u!==(u=t[1]+"_min")&&(0,i.d)(d,"id",u),32&s&&h!==(h=t[5]+"_min")&&(0,i.d)(d,"name",h),256&s&&(0,i.E)(d,t[8][0]),1&s&&(0,i.H)(d,"jp-range-input-disabled",t[0]),1&s&&(f.disabled=t[0]),80&s&&x!==(x=t[6]?t[4]:"any")&&(0,i.d)(f,"step",x),8&s&&(0,i.d)(f,"min",t[3]),4&s&&(0,i.d)(f,"max",t[2]),2&s&&p!==(p=t[1]+"_max")&&(0,i.d)(f,"id",p),32&s&&g!==(g=t[5]+"_max")&&(0,i.d)(f,"name",g),256&s&&(0,i.E)(f,t[8][1]),1&s&&(0,i.H)(f,"jp-range-input-disabled",t[0])},i:i.x,o:i.x,d(t){t&&((0,i.k)(e),(0,i.k)(n),(0,i.k)(s)),b&&b.d(),m=!1,(0,i.r)(y)}}}function a(t,e,n){let s,r,c,{disabled:l=!1}=e,{id:o=""}=e,{max:d=100}=e,{min:a=0}=e,{value:u=""}=e,{step:h=1}=e,{name:$=""}=e,{discrete:f=!0}=e,{required:x=!1}=e,{label:p=""}=e,g=[a,d];const m=(0,i.G)();return t.$$set=t=>{"disabled"in t&&n(0,l=t.disabled),"id"in t&&n(1,o=t.id),"max"in t&&n(2,d=t.max),"min"in t&&n(3,a=t.min),"value"in t&&n(12,u=t.value),"step"in t&&n(4,h=t.step),"name"in t&&n(5,$=t.name),"discrete"in t&&n(6,f=t.discrete),"required"in t&&n(13,x=t.required),"label"in t&&n(7,p=t.label)},t.$$.update=()=>{256&t.$$.dirty&&g[0]>g[1]&&n(8,g[0]=g[1],g),256&t.$$.dirty&&g[1]<g[0]&&n(8,g[1]=g[0],g),4108&t.$$.dirty&&(u?("string"==typeof u&&n(12,u=JSON.parse(u)),n(8,g=u)):n(8,g=[a,d])),268&t.$$.dirty&&n(11,s=Math.round((g[0]-a)/(d-a)*100)),268&t.$$.dirty&&n(10,r=Math.round((g[1]-a)/(d-a)*100)),256&t.$$.dirty&&m("value",{value:g}),8320&t.$$.dirty&&n(9,c=x?`${p} *`:p)},[l,o,d,a,h,$,f,p,g,c,r,s,u,x,()=>g,function(){g[0]=(0,i.$)(this.value),n(8,g),n(12,u),n(3,a),n(2,d)},function(){g[1]=(0,i.$)(this.value),n(8,g),n(12,u),n(3,a),n(2,d)}]}class u extends i.S{constructor(t){super(),(0,i.i)(this,t,a,d,i.s,{disabled:0,id:1,max:2,min:3,value:12,step:4,name:5,discrete:6,required:13,label:7,getValue:14})}get disabled(){return this.$$.ctx[0]}set disabled(t){this.$$set({disabled:t}),(0,i.o)()}get id(){return this.$$.ctx[1]}set id(t){this.$$set({id:t}),(0,i.o)()}get max(){return this.$$.ctx[2]}set max(t){this.$$set({max:t}),(0,i.o)()}get min(){return this.$$.ctx[3]}set min(t){this.$$set({min:t}),(0,i.o)()}get value(){return this.$$.ctx[12]}set value(t){this.$$set({value:t}),(0,i.o)()}get step(){return this.$$.ctx[4]}set step(t){this.$$set({step:t}),(0,i.o)()}get name(){return this.$$.ctx[5]}set name(t){this.$$set({name:t}),(0,i.o)()}get discrete(){return this.$$.ctx[6]}set discrete(t){this.$$set({discrete:t}),(0,i.o)()}get required(){return this.$$.ctx[13]}set required(t){this.$$set({required:t}),(0,i.o)()}get label(){return this.$$.ctx[7]}set label(t){this.$$set({label:t}),(0,i.o)()}get getValue(){return this.$$.ctx[14]}}try{customElements.define("jp-range",(0,i.c)(u,{disabled:{type:"Boolean"},id:{},max:{},min:{},value:{},step:{},name:{},discrete:{type:"Boolean"},required:{type:"Boolean"},label:{}},[],["getValue"],!1,(t=>{var e;return l(e=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},"formAssociated",!0),e})))}catch{}const h={},$="Range",f={id:"Form fields/range",title:"Range",description:"Description",source:"@site/docs/Form fields/range.md",sourceDirName:"Form fields",slug:"/Form fields/range",permalink:"/web-components/docs/Form fields/range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Radio",permalink:"/web-components/docs/Form fields/radio"},next:{title:"Select",permalink:"/web-components/docs/Form fields/select"}},x={},p=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function g(t){const e={code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"range",children:"Range"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"<jp-range>"})," that has a two thumb ",(0,s.jsx)(e.code,{children:'<input type="range">'})," functionality."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Name"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Required"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"value"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"[number, number]"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"setter"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"unique identifier"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"disabled"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"boolean"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"determines if slider is disabled"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"max"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"number"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"maximal slider value"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"min"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"number"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"minimal slider value"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"step"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"number"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"size of increment/decrement when sliding"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"discrete"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"boolean"})}),(0,s.jsxs)(e.td,{style:{textAlign:"center"},children:["whether slider is smooth or in ticks ",(0,s.jsx)("br",{})," (when ",(0,s.jsx)(e.code,{children:"false"})," step is ",(0,s.jsx)(e.code,{children:"any"}),")"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"showValue"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"boolean"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"determines if values are shown"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"startLabel"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"message shown before start value"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"endLabel"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"message shown before end value"})]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(e.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"getValue"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"returns form field value"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"value"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"triggers when slider value changes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:"// import '@jaspero/web-components/range.wc.js';\n// import '@jaspero/web-components/range.css';\n\n<jp-range></jp-range>\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(e.hr,{})]})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(g,{...t})}):g(t)}},7095:(t,e,n)=>{var s=n(4312);typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(s.P)},4312:(t,e,n)=>{n.d(e,{$:()=>F,A:()=>dt,B:()=>I,C:()=>E,D:()=>P,E:()=>H,F:()=>B,G:()=>Z,H:()=>z,I:()=>bt,J:()=>jt,K:()=>X,L:()=>Y,M:()=>b,N:()=>h,O:()=>T,P:()=>Ot,Q:()=>ot,R:()=>tt,S:()=>Ct,T:()=>S,U:()=>M,V:()=>gt,W:()=>_t,X:()=>kt,Y:()=>Et,Z:()=>pt,_:()=>m,a:()=>v,a0:()=>K,a1:()=>D,a2:()=>wt,a3:()=>At,a4:()=>R,b:()=>$,c:()=>Lt,d:()=>q,e:()=>N,f:()=>_,g:()=>g,h:()=>x,i:()=>Nt,j:()=>yt,k:()=>k,l:()=>L,m:()=>O,n:()=>nt,o:()=>ht,p:()=>j,q:()=>y,r:()=>o,s:()=>a,t:()=>mt,u:()=>p,v:()=>V,w:()=>C,x:()=>i,y:()=>J,z:()=>vt});var s=Object.defineProperty,r=(t,e,n)=>((t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n)(t,"symbol"!=typeof e?e+"":e,n);function i(){}function c(t){return t()}function l(){return Object.create(null)}function o(t){t.forEach(c)}function d(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function h(t,e){return t===e||(u||(u=document.createElement("a")),u.href=e,t===u.href)}function $(t,e,n,s){if(t){const r=f(t,e,n,s);return t[0](r)}}function f(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function x(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function p(t,e,n,s,r,i){if(r){const c=f(e,n,s,i);t.p(c,r)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function m(t){return t??""}function y(t){return t&&d(t.destroy)?t.destroy:i}new Set;const b=typeof window<"u"?window:typeof globalThis<"u"?globalThis:n.g;function j(t,e){t.appendChild(e)}function v(t,e,n){const s=A(t);if(!s.getElementById(e)){const t=N("style");t.id=e,t.textContent=n,w(s,t)}}function A(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function w(t,e){return j(t.head||t,e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function L(){return P(" ")}function C(){return P("")}function O(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function q(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t,e,n){const s=e.toLowerCase();s in t?t[s]="boolean"==typeof t[s]&&""===n||n:e in t?t[e]="boolean"==typeof t[e]&&""===n||n:q(t,e,n)}function D(t){let e;return{p(){for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];e=s,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function F(t){return""===t?null:+t}function B(t,e){e=""+e,t.data!==e&&(t.data=e)}function H(t,e){t.value=e??""}function V(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function I(t,e,n){for(let s=0;s<t.options.length;s+=1){const n=t.options[s];if(n.__value===e)return void(n.selected=!0)}(!n||void 0!==e)&&(t.selectedIndex=-1)}function J(t){const e=t.querySelector(":checked");return e&&e.__value}function z(t,e,n){t.classList.toggle(e,!!n)}function G(t,e,n){let{bubbles:s=!1,cancelable:r=!1}=void 0===n?{}:n;return new CustomEvent(t,{detail:e,bubbles:s,cancelable:r})}class K{constructor(t){void 0===t&&(t=!1),r(this,"is_svg",!1),r(this,"e"),r(this,"n"),r(this,"t"),r(this,"a"),this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n){void 0===n&&(n=null),this.e||(this.is_svg?this.e=M(e.nodeName):this.e=N(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(k)}}new Map;let Q;function U(t){Q=t}function W(){if(!Q)throw new Error("Function called outside component initialization");return Q}function X(t){W().$$.on_mount.push(t)}function Y(t){W().$$.on_destroy.push(t)}function Z(){const t=W();return function(e,n,s){let{cancelable:r=!1}=void 0===s?{}:s;const i=t.$$.callbacks[e];if(i){const s=G(e,n,{cancelable:r});return i.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const et=[],nt=[];let st=[];const rt=[],it=Promise.resolve();let ct=!1;function lt(){ct||(ct=!0,it.then(ht))}function ot(){return lt(),it}function dt(t){st.push(t)}const at=new Set;let ut=0;function ht(){if(0!==ut)return;const t=Q;do{try{for(;ut<et.length;){const t=et[ut];ut++,U(t),$t(t.$$)}}catch(e){throw et.length=0,ut=0,e}for(U(null),et.length=0,ut=0;nt.length;)nt.pop()();for(let t=0;t<st.length;t+=1){const e=st[t];at.has(e)||(at.add(e),e())}st.length=0}while(et.length);for(;rt.length;)rt.pop()();ct=!1,at.clear(),U(t)}function $t(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(dt)}}const ft=new Set;let xt;function pt(){xt={r:0,c:[],p:xt}}function gt(){xt.r||o(xt.c),xt=xt.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function yt(t,e,n,s){if(t&&t.o){if(ft.has(t))return;ft.add(t),xt.c.push((()=>{ft.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function bt(t,e){const n=e.token={};function s(t,s,r,i){if(e.token!==n)return;e.resolved=i;let c=e.ctx;void 0!==r&&(c=c.slice(),c[r]=i);const l=t&&(e.current=t)(c);let o=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(pt(),yt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),gt())})):e.block.d(1),l.c(),mt(l,1),l.m(e.mount(),e.anchor),o=!0),e.block=l,e.blocks&&(e.blocks[s]=l),o&&ht()}if(function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}(t)){const n=W();if(t.then((t=>{U(n),s(e.then,1,e.value,t),U(null)}),(t=>{if(U(n),s(e.catch,2,e.error,t),U(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function jt(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function vt(t){return void 0!==t?.length?t:Array.from(t)}function At(t,e){t.d(1),e.delete(t.key)}function wt(t,e,n,s,r,i,c,l,d,a,u,h){let $=t.length,f=i.length,x=$;const p={};for(;x--;)p[t[x].key]=x;const g=[],m=new Map,y=new Map,b=[];for(x=f;x--;){const t=h(r,i,x),s=n(t);let l=c.get(s);l?b.push((()=>l.p(t,e))):(l=a(s,t),l.c()),m.set(s,g[x]=l),s in p&&y.set(s,Math.abs(x-p[s]))}const j=new Set,v=new Set;function A(t){mt(t,1),t.m(l,u),c.set(t.key,t),u=t.first,f--}for(;$&&f;){const e=g[f-1],n=t[$-1],s=e.key,r=n.key;e===n?(u=e.first,$--,f--):m.has(r)?!c.has(s)||j.has(s)?A(e):v.has(r)?$--:y.get(s)>y.get(r)?(v.add(s),A(e)):(j.add(r),$--):(d(n,c),$--)}for(;$--;){const e=t[$];m.has(e.key)||d(e,c)}for(;f;)A(g[f-1]);return o(b),g}function _t(t){t&&t.c()}function kt(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),dt((()=>{const e=t.$$.on_mount.map(c).filter(d);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),r.forEach(dt)}function Et(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];st.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),st=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e,n,s,r,c,d,a){void 0===d&&(d=null),void 0===a&&(a=[-1]);const u=Q;U(t);const h=t.$$={fragment:null,ctx:[],props:c,update:i,not_equal:r,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:l(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};d&&d(h.root);let $=!1;if(h.ctx=n?n(t,e.props||{},(function(e,n){const s=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return h.ctx&&r(h.ctx[e],h.ctx[e]=s)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](s),$&&function(t,e){-1===t.$$.dirty[0]&&(et.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),$=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(k)}else h.fragment&&h.fragment.c();e.intro&&mt(t.$$.fragment),kt(t,e.target,e.anchor),ht()}U(u)}let Mt;function Pt(t,e,n,s){var r;const i=null==(r=n[t])?void 0:r.type;if(e="Boolean"===i&&"boolean"!=typeof e?null!=e:e,!s||!n[t])return e;if("toAttribute"===s)switch(i){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function Lt(t,e,n,s,r,i){let c=class extends Mt{constructor(){super(t,n,r),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(c.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){var s;n=Pt(t,n,e),this.$$d[t]=n,null==(s=this.$$c)||s.$set({[t]:n})}})})),s.forEach((t=>{Object.defineProperty(c.prototype,t,{get(){var e;return null==(e=this.$$c)?void 0:e[t]}})})),i&&(c=i(c)),t.element=c,c}"function"==typeof HTMLElement&&(Mt=class extends HTMLElement{constructor(t,e,n){super(),r(this,"$$ctor"),r(this,"$$s"),r(this,"$$c"),r(this,"$$cn",!1),r(this,"$$d",{}),r(this,"$$r",!1),r(this,"$$p_d",{}),r(this,"$$l",{}),r(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(t){return()=>{let e;return{c:function(){e=N("slot"),"default"!==t&&q(e,"name",t)},m:function(t,n){_(t,e,n)},d:function(t){t&&k(e)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const r of this.$$s)r in n&&(e[r]=[t(r)]);for(const r of this.attributes){const t=this.$$g_p(r.name);t in this.$$d||(this.$$d[t]=Pt(t,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&void 0!==this[r]&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=Pt(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const r in this.$$l)for(const t of this.$$l[r]){const e=this.$$c.$on(r,t);this.$$l_u.set(t,e)}this.$$l={}}}attributeChangedCallback(t,e,n){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Pt(t,n,this.$$p_d,"toProp"),null==(s=this.$$c)||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class Ct{constructor(){r(this,"$$"),r(this,"$$set")}$destroy(){Et(this,1),this.$destroy=i}$on(t,e){if(!d(e))return i;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ot="4"},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function c(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);