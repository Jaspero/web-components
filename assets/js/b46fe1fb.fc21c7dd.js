"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[463],{7569:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>x,toc:()=>y});var r=n(4848),s=n(8453),i=n(4312),o=(n(7095),n(1129));function l(t){(0,i.a)(t,"svelte-grhwpd",".jp-carousel-slider.svelte-grhwpd{--slider-max-width:600px}.jp-carousel-slider-container.svelte-grhwpd{position:relative;overflow:hidden;width:100%;max-width:var(--slider-max-width);margin:0 auto}.jp-carousel-slider-images.svelte-grhwpd{display:flex;transition:transform 0.3s}.jp-carousel-slider-image.svelte-grhwpd{width:calc(100% / var(--images-per-slide));flex-shrink:0;-o-object-fit:cover;object-fit:cover}.jp-carousel-slider-bar.svelte-grhwpd{position:relative;max-width:var(--slider-max-width);margin:0 auto;width:100%;height:4px;background-color:var(--border-primary)}.jp-carousel-slider-bar-bg.svelte-grhwpd{position:absolute;top:50%;transform:translateY(-50%);background-color:var(--primary-color);height:8px;transition:0.3s}.jp-carousel-prev.svelte-grhwpd,.jp-carousel-next.svelte-grhwpd{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;border-radius:50%;width:2rem;height:2rem;background:rgba(0, 0, 0, 0.5);color:white;fill:white;border:none;cursor:pointer;transition:0.3s}.jp-carousel-prev.svelte-grhwpd:hover,.jp-carousel-next.svelte-grhwpd:hover{background-color:rgba(0, 0, 0, 0.75)}.jp-carousel-prev.svelte-grhwpd{left:10px}.jp-carousel-next.svelte-grhwpd{right:10px}.jp-carousel-pagination.svelte-grhwpd{display:flex;justify-content:center;gap:0.75rem;margin-top:2rem}.jp-carousel-pagination-button.svelte-grhwpd{position:relative;width:0.875rem;height:0.875rem;border:2px solid var(--border-primary);border-radius:50%;transition:0.3s}.jp-carousel-pagination-button.svelte-grhwpd:hover{background-color:var(--background-secondary)}.jp-carousel-pagination-button-active.svelte-grhwpd{border-color:var(--primary-color);background-color:var(--primary-color)}")}function c(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function a(t,e,n){const r=t.slice();return r[15]=e[n],r}function d(t){let e,n,r;return{c(){e=(0,i.e)("img"),(0,i.d)(e,"class","jp-carousel-slider-image svelte-grhwpd"),(0,i.N)(e.src,n=t[15].src)||(0,i.d)(e,"src",n),(0,i.d)(e,"alt",r=t[15].alt)},m(t,n){(0,i.f)(t,e,n)},p(t,s){1&s&&!(0,i.N)(e.src,n=t[15].src)&&(0,i.d)(e,"src",n),1&s&&r!==(r=t[15].alt)&&(0,i.d)(e,"alt",r)},d(t){t&&(0,i.k)(e)}}}function u(t){let e,n,r;return{c(){e=(0,i.e)("div"),n=(0,i.e)("div"),(0,i.d)(n,"class","jp-carousel-slider-bar-bg svelte-grhwpd"),(0,i.d)(n,"style",r=`width: calc(calc(${t[4]} + ${t[1]}) / ${t[0].length} * 100%);`),(0,i.d)(e,"class","jp-carousel-slider-bar svelte-grhwpd")},m(t,r){(0,i.f)(t,e,r),(0,i.p)(e,n)},p(t,e){19&e&&r!==(r=`width: calc(calc(${t[4]} + ${t[1]}) / ${t[0].length} * 100%);`)&&(0,i.d)(n,"style",r)},d(t){t&&(0,i.k)(e)}}}function h(t){let e,n=(0,i.z)(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=p(c(t,n,s));return{c(){e=(0,i.e)("div");for(let t=0;t<r.length;t+=1)r[t].c();(0,i.d)(e,"class","jp-carousel-pagination svelte-grhwpd")},m(t,n){(0,i.f)(t,e,n);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null)},p(t,s){if(17&s){let o;for(n=(0,i.z)(t[0]),o=0;o<n.length;o+=1){const i=c(t,n,o);r[o]?r[o].p(i,s):(r[o]=p(i),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){t&&(0,i.k)(e),(0,i.C)(r,t)}}}function p(t){let e,n,r;function s(){return t[10](t[14])}return{c(){e=(0,i.e)("button"),e.innerHTML="",(0,i.d)(e,"type","button"),(0,i.d)(e,"class","jp-carousel-pagination-button svelte-grhwpd"),(0,i.H)(e,"jp-carousel-pagination-button-active",t[4]===t[14])},m(t,o){(0,i.f)(t,e,o),n||(r=(0,i.m)(e,"click",s),n=!0)},p(n,r){t=n,16&r&&(0,i.H)(e,"jp-carousel-pagination-button-active",t[4]===t[14])},d(t){t&&(0,i.k)(e),n=!1,r()}}}function f(t){let e,n,r,s,l,c,p,f,$,g,m,v,x=(0,i.z)(t[0]),b=[];for(let i=0;i<x.length;i+=1)b[i]=d(a(t,x,i));let y=t[3]&&u(t),j=t[2]&&h(t);return{c(){e=(0,i.e)("div"),n=(0,i.e)("div"),r=(0,i.e)("div");for(let t=0;t<b.length;t+=1)b[t].c();l=(0,i.l)(),c=(0,i.e)("button"),p=(0,i.l)(),f=(0,i.e)("button"),$=(0,i.l)(),y&&y.c(),g=(0,i.l)(),j&&j.c(),(0,i.d)(r,"class","jp-carousel-slider-images svelte-grhwpd"),(0,i.d)(r,"style",s=`transform: translateX(-${t[4]*(100/t[1])}%);`),(0,i.d)(c,"type","button"),(0,i.d)(c,"class","jp-carousel-prev svelte-grhwpd"),(0,i.d)(f,"type","button"),(0,i.d)(f,"class","jp-carousel-next svelte-grhwpd"),(0,i.d)(n,"class","jp-carousel-slider-container svelte-grhwpd"),(0,i.v)(n,"--images-per-slide",t[1]),(0,i.d)(e,"class","jp-carousel-flex jp-carousel-flex-col jp-carousel-slider svelte-grhwpd")},m(s,a){(0,i.f)(s,e,a),(0,i.p)(e,n),(0,i.p)(n,r);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(r,null);(0,i.p)(n,l),(0,i.p)(n,c),c.innerHTML=o.p,(0,i.p)(n,p),(0,i.p)(n,f),f.innerHTML=o.n,(0,i.p)(e,$),y&&y.m(e,null),(0,i.p)(e,g),j&&j.m(e,null),m||(v=[(0,i.m)(c,"click",t[6]),(0,i.m)(f,"click",t[5])],m=!0)},p(t,o){let[l]=o;if(1&l){let e;for(x=(0,i.z)(t[0]),e=0;e<x.length;e+=1){const n=a(t,x,e);b[e]?b[e].p(n,l):(b[e]=d(n),b[e].c(),b[e].m(r,null))}for(;e<b.length;e+=1)b[e].d(1);b.length=x.length}18&l&&s!==(s=`transform: translateX(-${t[4]*(100/t[1])}%);`)&&(0,i.d)(r,"style",s),2&l&&(0,i.v)(n,"--images-per-slide",t[1]),t[3]?y?y.p(t,l):(y=u(t),y.c(),y.m(e,g)):y&&(y.d(1),y=null),t[2]?j?j.p(t,l):(j=h(t),j.c(),j.m(e,null)):j&&(j.d(1),j=null)},i:i.x,o:i.x,d(t){t&&(0,i.k)(e),(0,i.C)(b,t),y&&y.d(),j&&j.d(),m=!1,(0,i.r)(v)}}}function $(t,e,n){let r,{images:s=[]}=e,{imagesPerSlide:o=1}=e,{enablePagination:l=!1}=e,{sliderBar:c=!1}=e,{autoSlide:a=!1}=e,{interval:d=3e3}=e,u=0,h=!0;function p(){if(!h)return;h=!1;let t=u+o,e=s.length-t;n(4,u=e<o&&0!==e?s.length-o:0===e?0:o%1!=0?t-(o-1):t),setTimeout((()=>{h=!0}),300)}(0,i.K)((()=>{"string"==typeof s&&n(0,s=JSON.parse(s)),a&&n(9,r=setInterval(p,d))})),(0,i.L)((()=>{clearInterval(r)}));return t.$$set=t=>{"images"in t&&n(0,s=t.images),"imagesPerSlide"in t&&n(1,o=t.imagesPerSlide),"enablePagination"in t&&n(2,l=t.enablePagination),"sliderBar"in t&&n(3,c=t.sliderBar),"autoSlide"in t&&n(7,a=t.autoSlide),"interval"in t&&n(8,d=t.interval)},t.$$.update=()=>{896&t.$$.dirty&&(a?n(9,r=setInterval(p,d)):clearInterval(r))},[s,o,l,c,u,p,function(){h&&(h=!1,n(4,u===o?u=0:u<=0?u=s.length-o:u-=o),setTimeout((()=>{h=!0}),300))},a,d,r,t=>n(4,u=t)]}class g extends i.S{constructor(t){super(),(0,i.i)(this,t,$,f,i.s,{images:0,imagesPerSlide:1,enablePagination:2,sliderBar:3,autoSlide:7,interval:8},l)}get images(){return this.$$.ctx[0]}set images(t){this.$$set({images:t}),(0,i.o)()}get imagesPerSlide(){return this.$$.ctx[1]}set imagesPerSlide(t){this.$$set({imagesPerSlide:t}),(0,i.o)()}get enablePagination(){return this.$$.ctx[2]}set enablePagination(t){this.$$set({enablePagination:t}),(0,i.o)()}get sliderBar(){return this.$$.ctx[3]}set sliderBar(t){this.$$set({sliderBar:t}),(0,i.o)()}get autoSlide(){return this.$$.ctx[7]}set autoSlide(t){this.$$set({autoSlide:t}),(0,i.o)()}get interval(){return this.$$.ctx[8]}set interval(t){this.$$set({interval:t}),(0,i.o)()}}try{customElements.define("jp-carousel",(0,i.c)(g,{images:{},imagesPerSlide:{},enablePagination:{type:"Boolean"},sliderBar:{type:"Boolean"},autoSlide:{type:"Boolean"},interval:{}},[],[],!1))}catch{}const m={},v="Carousel",x={id:"carousel",title:"Carousel",description:"Description",source:"@site/docs/carousel.md",sourceDirName:".",slug:"/carousel",permalink:"/web-components/docs/carousel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Button",permalink:"/web-components/docs/button"},next:{title:"Confirm",permalink:"/web-components/docs/confirm"}},b={},y=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function j(t){const e={code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"carousel",children:"Carousel"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"<jp-carousel>"})," is a component with the functionality of creating an interactive image carousel."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Name"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Required"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"images"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"Array<{src: string, alt?: string}>"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"stores an image collection"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"imagesPerSlide"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"number"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"number of images shown on a slide"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"enablePagination"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"boolean"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"determines if pagination is enabled"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"sliderBar"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"boolean"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"determines visability of a slider bar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"autoSlide"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"boolean"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"determines if automatic slide is enabled"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"interval"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"number"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"time interval between slides in miliseconds"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"slots",children:"Slots"}),"\n",(0,r.jsx)(e.p,{children:"This component does not have any slots."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(e.p,{children:"This component does not have any methods."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(e.p,{children:"This component does not have any events."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h3,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'// import \'../static/c/carousel.wc.js\';\n\n<jp-carousel images=\'[{"src": "https://picsum.photos/1920/1080"}, {"src": "https://picsum.photos/1280/720"}, {"src": "https://picsum.photos//600"}]\'></jp-carousel>\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.hr,{})]})}function w(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(j,{...t})}):j(t)}},7095:(t,e,n)=>{var r=n(4312);typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(r.P)},1129:(t,e,n)=>{n.d(e,{n:()=>s,p:()=>r});const r='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',s='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>'},4312:(t,e,n)=>{n.d(e,{$:()=>z,A:()=>at,B:()=>J,C:()=>E,D:()=>L,E:()=>I,F:()=>R,G:()=>Z,H:()=>X,I:()=>bt,J:()=>yt,K:()=>V,L:()=>W,M:()=>b,N:()=>h,O:()=>B,P:()=>Mt,Q:()=>ct,R:()=>tt,S:()=>Ct,T:()=>T,U:()=>S,V:()=>mt,W:()=>_t,X:()=>At,Y:()=>Et,Z:()=>gt,_:()=>v,a:()=>j,a0:()=>K,a1:()=>H,a2:()=>kt,a3:()=>wt,a4:()=>D,b:()=>p,c:()=>Nt,d:()=>O,e:()=>P,f:()=>_,g:()=>m,h:()=>$,i:()=>Pt,j:()=>xt,k:()=>A,l:()=>N,m:()=>M,n:()=>nt,o:()=>ht,p:()=>y,q:()=>x,r:()=>c,s:()=>d,t:()=>vt,u:()=>g,v:()=>q,w:()=>C,x:()=>i,y:()=>F,z:()=>jt});var r=Object.defineProperty,s=(t,e,n)=>((t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n)(t,"symbol"!=typeof e?e+"":e,n);function i(){}function o(t){return t()}function l(){return Object.create(null)}function c(t){t.forEach(o)}function a(t){return"function"==typeof t}function d(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function h(t,e){return t===e||(u||(u=document.createElement("a")),u.href=e,t===u.href)}function p(t,e,n,r){if(t){const s=f(t,e,n,r);return t[0](s)}}function f(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function $(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function g(t,e,n,r,s,i){if(s){const o=f(e,n,r,i);t.p(o,s)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function v(t){return t??""}function x(t){return t&&a(t.destroy)?t.destroy:i}new Set;const b=typeof window<"u"?window:typeof globalThis<"u"?globalThis:n.g;function y(t,e){t.appendChild(e)}function j(t,e,n){const r=w(t);if(!r.getElementById(e)){const t=P("style");t.id=e,t.textContent=n,k(r,t)}}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t,e){return y(t.head||t,e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function P(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function N(){return L(" ")}function C(){return L("")}function M(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function B(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function D(t,e,n){const r=e.toLowerCase();r in t?t[r]="boolean"==typeof t[r]&&""===n||n:e in t?t[e]="boolean"==typeof t[e]&&""===n||n:O(t,e,n)}function H(t){let e;return{p(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];e=r,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function z(t){return""===t?null:+t}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function I(t,e){t.value=e??""}function q(t,e,n,r){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function J(t,e,n){for(let r=0;r<t.options.length;r+=1){const n=t.options[r];if(n.__value===e)return void(n.selected=!0)}(!n||void 0!==e)&&(t.selectedIndex=-1)}function F(t){const e=t.querySelector(":checked");return e&&e.__value}function X(t,e,n){t.classList.toggle(e,!!n)}function Y(t,e,n){let{bubbles:r=!1,cancelable:s=!1}=void 0===n?{}:n;return new CustomEvent(t,{detail:e,bubbles:r,cancelable:s})}class K{constructor(t){void 0===t&&(t=!1),s(this,"is_svg",!1),s(this,"e"),s(this,"n"),s(this,"t"),s(this,"a"),this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n){void 0===n&&(n=null),this.e||(this.is_svg?this.e=S(e.nodeName):this.e=P(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(A)}}new Map;let G;function Q(t){G=t}function U(){if(!G)throw new Error("Function called outside component initialization");return G}function V(t){U().$$.on_mount.push(t)}function W(t){U().$$.on_destroy.push(t)}function Z(){const t=U();return function(e,n,r){let{cancelable:s=!1}=void 0===r?{}:r;const i=t.$$.callbacks[e];if(i){const r=Y(e,n,{cancelable:s});return i.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}function tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const et=[],nt=[];let rt=[];const st=[],it=Promise.resolve();let ot=!1;function lt(){ot||(ot=!0,it.then(ht))}function ct(){return lt(),it}function at(t){rt.push(t)}const dt=new Set;let ut=0;function ht(){if(0!==ut)return;const t=G;do{try{for(;ut<et.length;){const t=et[ut];ut++,Q(t),pt(t.$$)}}catch(e){throw et.length=0,ut=0,e}for(Q(null),et.length=0,ut=0;nt.length;)nt.pop()();for(let t=0;t<rt.length;t+=1){const e=rt[t];dt.has(e)||(dt.add(e),e())}rt.length=0}while(et.length);for(;st.length;)st.pop()();ot=!1,dt.clear(),Q(t)}function pt(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(at)}}const ft=new Set;let $t;function gt(){$t={r:0,c:[],p:$t}}function mt(){$t.r||c($t.c),$t=$t.p}function vt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function xt(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),$t.c.push((()=>{ft.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function bt(t,e){const n=e.token={};function r(t,r,s,i){if(e.token!==n)return;e.resolved=i;let o=e.ctx;void 0!==s&&(o=o.slice(),o[s]=i);const l=t&&(e.current=t)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(gt(),xt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),mt())})):e.block.d(1),l.c(),vt(l,1),l.m(e.mount(),e.anchor),c=!0),e.block=l,e.blocks&&(e.blocks[r]=l),c&&ht()}if(function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}(t)){const n=U();if(t.then((t=>{Q(n),r(e.then,1,e.value,t),Q(null)}),(t=>{if(Q(n),r(e.catch,2,e.error,t),Q(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function yt(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function jt(t){return void 0!==t?.length?t:Array.from(t)}function wt(t,e){t.d(1),e.delete(t.key)}function kt(t,e,n,r,s,i,o,l,a,d,u,h){let p=t.length,f=i.length,$=p;const g={};for(;$--;)g[t[$].key]=$;const m=[],v=new Map,x=new Map,b=[];for($=f;$--;){const t=h(s,i,$),r=n(t);let l=o.get(r);l?b.push((()=>l.p(t,e))):(l=d(r,t),l.c()),v.set(r,m[$]=l),r in g&&x.set(r,Math.abs($-g[r]))}const y=new Set,j=new Set;function w(t){vt(t,1),t.m(l,u),o.set(t.key,t),u=t.first,f--}for(;p&&f;){const e=m[f-1],n=t[p-1],r=e.key,s=n.key;e===n?(u=e.first,p--,f--):v.has(s)?!o.has(r)||y.has(r)?w(e):j.has(s)?p--:x.get(r)>x.get(s)?(j.add(r),w(e)):(y.add(s),p--):(a(n,o),p--)}for(;p--;){const e=t[p];v.has(e.key)||a(e,o)}for(;f;)w(m[f-1]);return c(b),m}function _t(t){t&&t.c()}function At(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),at((()=>{const e=t.$$.on_mount.map(o).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...e):c(e),t.$$.on_mount=[]})),s.forEach(at)}function Et(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];rt.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),rt=e}(n.after_update),c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e,n,r,s,o,a,d){void 0===a&&(a=null),void 0===d&&(d=[-1]);const u=G;Q(t);const h=t.$$={fragment:null,ctx:[],props:o,update:i,not_equal:s,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:e.target||u.$$.root};a&&a(h.root);let p=!1;if(h.ctx=n?n(t,e.props||{},(function(e,n){const r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return h.ctx&&s(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),p&&function(t,e){-1===t.$$.dirty[0]&&(et.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),p=!0,c(h.before_update),h.fragment=!!r&&r(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(A)}else h.fragment&&h.fragment.c();e.intro&&vt(t.$$.fragment),At(t,e.target,e.anchor),ht()}Q(u)}let St;function Lt(t,e,n,r){var s;const i=null==(s=n[t])?void 0:s.type;if(e="Boolean"===i&&"boolean"!=typeof e?null!=e:e,!r||!n[t])return e;if("toAttribute"===r)switch(i){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function Nt(t,e,n,r,s,i){let o=class extends St{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(o.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){var r;n=Lt(t,n,e),this.$$d[t]=n,null==(r=this.$$c)||r.$set({[t]:n})}})})),r.forEach((t=>{Object.defineProperty(o.prototype,t,{get(){var e;return null==(e=this.$$c)?void 0:e[t]}})})),i&&(o=i(o)),t.element=o,o}"function"==typeof HTMLElement&&(St=class extends HTMLElement{constructor(t,e,n){super(),s(this,"$$ctor"),s(this,"$$s"),s(this,"$$c"),s(this,"$$cn",!1),s(this,"$$d",{}),s(this,"$$r",!1),s(this,"$$p_d",{}),s(this,"$$l",{}),s(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(t){return()=>{let e;return{c:function(){e=P("slot"),"default"!==t&&O(e,"name",t)},m:function(t,n){_(t,e,n)},d:function(t){t&&A(e)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const s of this.$$s)s in n&&(e[s]=[t(s)]);for(const s of this.attributes){const t=this.$$g_p(s.name);t in this.$$d||(this.$$d[t]=Lt(t,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&void 0!==this[s]&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=Lt(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const s in this.$$l)for(const t of this.$$l[s]){const e=this.$$c.$on(s,t);this.$$l_u.set(t,e)}this.$$l={}}}attributeChangedCallback(t,e,n){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Lt(t,n,this.$$p_d,"toProp"),null==(r=this.$$c)||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class Ct{constructor(){s(this,"$$"),s(this,"$$set")}$destroy(){Et(this,1),this.$destroy=i}$on(t,e){if(!a(e))return i;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Mt="4"},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>l});var r=n(6540);const s={},i=r.createContext(s);function o(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);