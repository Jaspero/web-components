"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4444],{1504:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>_,contentTitle:()=>w,default:()=>N,frontMatter:()=>j,metadata:()=>k,toc:()=>E});var s=n(4848),o=n(8453),r=n(4312);n(7095);function i(t){let e,n;return{c(){e=(0,r.Q)("svg"),n=(0,r.Q)("path"),(0,r.d)(n,"d","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"),(0,r.d)(e,"xmlns","http://www.w3.org/2000/svg"),(0,r.d)(e,"height","1em"),(0,r.d)(e,"viewBox","0 0 320 512"),(0,r.d)(e,"class","toggle-arrow svelte-4vuqqm"),(0,r.A)(e,"rotate",t[0])},m(t,s){(0,r.f)(t,e,s),(0,r.p)(e,n)},p(t,n){let[s]=n;1&s&&(0,r.A)(e,"rotate",t[0])},i:r.w,o:r.w,d(t){t&&(0,r.k)(e)}}}function c(t,e,n){let{expanded:s=!1}=e;return t.$$set=t=>{"expanded"in t&&n(0,s=t.expanded)},[s]}class l extends r.S{constructor(t){super(),(0,r.i)(this,t,c,i,r.s,{expanded:0})}}function d(t){(0,r.a)(t,"svelte-ssr4he",".jp-tree.svelte-ssr4he{display:flex;flex-direction:column}.tree-header.svelte-ssr4he{display:flex;align-items:center}.tree-arrow.svelte-ssr4he{background:none;border:none;cursor:pointer;padding:0.5rem;display:flex;align-items:center;border-radius:50%}.tree-arrow.svelte-ssr4he:hover,.tree-arrow.svelte-ssr4he:focus{background:var(--background-tertiary)}.tree-header-title.svelte-ssr4he{flex-grow:1;margin:0}.tree-children.svelte-ssr4he{display:flex;flex-direction:column;padding-left:50px}")}function u(t){let e,n;const s=t[4].default,o=(0,r.b)(s,t,t[3],null);return{c(){e=(0,r.e)("div"),o&&o.c(),(0,r.d)(e,"class","tree-children svelte-ssr4he")},m(t,s){(0,r.f)(t,e,s),o&&o.m(e,null),n=!0},p(t,e){o&&o.p&&(!n||8&e)&&(0,r.u)(o,s,t,t[3],n?(0,r.h)(s,t[3],e,null):(0,r.g)(t[3]),null)},i(t){n||((0,r.t)(o,t),n=!0)},o(t){(0,r.j)(o,t),n=!1},d(t){t&&(0,r.k)(e),o&&o.d(t)}}}function a(t){let e,n,s,o,i,c,d,a,h,f,p,$;i=new l({props:{expanded:t[2]}});let m=t[2]&&u(t);return{c(){e=(0,r.l)(),n=(0,r.e)("div"),s=(0,r.e)("div"),o=(0,r.e)("button"),(0,r.T)(i.$$.fragment),d=(0,r.l)(),a=(0,r.e)("p"),h=(0,r.l)(),m&&m.c(),(0,r.d)(o,"type","button"),(0,r.d)(o,"class","tree-arrow svelte-ssr4he"),o.disabled=c=!t[1],(0,r.d)(a,"class","tree-header-title svelte-ssr4he"),(0,r.d)(s,"class","tree-header svelte-ssr4he"),(0,r.d)(n,"class","jp-tree svelte-ssr4he")},m(c,l){(0,r.f)(c,e,l),(0,r.f)(c,n,l),(0,r.p)(n,s),(0,r.p)(s,o),(0,r.U)(i,o,null),(0,r.p)(s,d),(0,r.p)(s,a),a.innerHTML=t[0],(0,r.p)(n,h),m&&m.m(n,null),f=!0,p||($=[(0,r.m)(document,"mouseup",(0,r.N)(t[5])),(0,r.m)(o,"click",t[6])],p=!0)},p(t,e){let[s]=e;const l={};4&s&&(l.expanded=t[2]),i.$set(l),(!f||2&s&&c!==(c=!t[1]))&&(o.disabled=c),(!f||1&s)&&(a.innerHTML=t[0]),t[2]?m?(m.p(t,s),4&s&&(0,r.t)(m,1)):(m=u(t),m.c(),(0,r.t)(m,1),m.m(n,null)):m&&((0,r.W)(),(0,r.j)(m,1,1,(()=>{m=null})),(0,r.R)())},i(t){f||((0,r.t)(i.$$.fragment,t),(0,r.t)(m),f=!0)},o(t){(0,r.j)(i.$$.fragment,t),(0,r.j)(m),f=!1},d(t){t&&((0,r.k)(e),(0,r.k)(n)),(0,r.V)(i),m&&m.d(),p=!1,(0,r.r)($)}}}function h(t,e,n){let{$$slots:s={},$$scope:o}=e,{title:r="Tree Title"}=e,{collapsable:i=!0}=e,c=!i;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"collapsable"in t&&n(1,i=t.collapsable),"$$scope"in t&&n(3,o=t.$$scope)},[r,i,c,o,s,t=>{if(window.jpNodeGrabbed){const e=window.jpNodeGrabbed,n=t.target.closest("jp-tree");n&&(n.isSameNode(e.parentNode)||n.appendChild(e)),window.jpNodeGrabbed=null}},()=>n(2,c=!c)]}class f extends r.S{constructor(t){super(),(0,r.i)(this,t,h,a,r.s,{title:0,collapsable:1},d)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),(0,r.o)()}get collapsable(){return this.$$.ctx[1]}set collapsable(t){this.$$set({collapsable:t}),(0,r.o)()}}try{customElements.define("jp-tree",(0,r.c)(f,{title:{},collapsable:{type:"Boolean"}},["default"],[],!0))}catch{}function p(t){(0,r.a)(t,"svelte-11f3h64",".node.svelte-11f3h64{width:100%;margin:1rem 0}")}function $(t){let e,n;const s=t[1].default,o=(0,r.b)(s,t,t[0],null);return{c(){e=(0,r.e)("div"),o&&o.c(),(0,r.d)(e,"class","node svelte-11f3h64")},m(t,s){(0,r.f)(t,e,s),o&&o.m(e,null),n=!0},p(t,e){let[i]=e;o&&o.p&&(!n||1&i)&&(0,r.u)(o,s,t,t[0],n?(0,r.h)(s,t[0],i,null):(0,r.g)(t[0]),null)},i(t){n||((0,r.t)(o,t),n=!0)},o(t){(0,r.j)(o,t),n=!1},d(t){t&&(0,r.k)(e),o&&o.d(t)}}}function m(t,e,n){let{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,s]}class g extends r.S{constructor(t){super(),(0,r.i)(this,t,m,$,r.s,{},p)}}try{customElements.define("jp-node",(0,r.c)(g,{},["default"],[],!0))}catch{}function b(t){(0,r.a)(t,"svelte-qxmk8v",".node.svelte-qxmk8v{width:100%;margin:1rem 0;cursor:grab}")}function v(t){let e,n,s,o,i;const c=t[5].default,l=(0,r.b)(c,t,t[4],null);return{c(){e=(0,r.l)(),n=(0,r.e)("div"),l&&l.c(),(0,r.d)(n,"class","node svelte-qxmk8v")},m(c,d){(0,r.f)(c,e,d),(0,r.f)(c,n,d),l&&l.m(n,null),t[9](n),s=!0,o||(i=[(0,r.m)(document,"mousemove",t[6]),(0,r.m)(document,"mouseup",t[7]),(0,r.m)(n,"mousedown",t[8])],o=!0)},p(t,e){let[n]=e;l&&l.p&&(!s||16&n)&&(0,r.u)(l,c,t,t[4],s?(0,r.h)(c,t[4],n,null):(0,r.g)(t[4]),null)},i(t){s||((0,r.t)(l,t),s=!0)},o(t){(0,r.j)(l,t),s=!1},d(s){s&&((0,r.k)(e),(0,r.k)(n)),l&&l.d(s),t[9](null),o=!1,(0,r.r)(i)}}}function x(t,e,n){let s,o,i,{$$slots:c={},$$scope:l}=e,d=!1;return t.$$set=t=>{"$$scope"in t&&n(4,l=t.$$scope)},[d,s,o,i,l,c,t=>{d&&(t.preventDefault(),n(1,s.style.transform="translateY("+(t.clientY-i)+"px)",s),n(1,s.style.transform+="translateX("+(t.clientX-o)+"px)",s))},t=>{d&&(t.preventDefault(),n(0,d=!1),n(1,s.style="",s))},t=>{n(1,s.style.pointerEvents="none",s),n(0,d=!0),n(2,o=t.clientX),n(3,i=t.clientY),window.jpNodeGrabbed=s.parentNode.host},function(t){r.n[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class y extends r.S{constructor(t){super(),(0,r.i)(this,t,x,v,r.s,{},b)}}try{customElements.define("jp-node-draggable",(0,r.c)(y,{},["default"],[],!0))}catch{}const j={},w="Tree",k={id:"tree",title:"Tree",description:"Description",source:"@site/docs/tree.md",sourceDirName:".",slug:"/tree",permalink:"/web-components/docs/tree",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Tooltip",permalink:"/web-components/docs/tooltip"}},_={},E=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function A(t){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"tree",children:"Tree"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"<jp-tree>"})," is a component with nested, collapsable, drag and droppable content."]}),"\n",(0,s.jsx)(e.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Name"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Required"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Type"})}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:(0,s.jsx)(e.strong,{children:"Description"})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"title"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"string"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"Title of the tree"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"collapsable"}),(0,s.jsx)(e.td,{style:{textAlign:"center"}}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:(0,s.jsx)(e.code,{children:"boolean"})}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"collapse enabled"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(e.p,{children:["Slot should be a list of ",(0,s.jsx)(e.code,{children:"<jp-node>"}),"'s.\nIf you want a node to be draggable, use ",(0,s.jsx)(e.code,{children:"<jp-node-draggable>"}),".\nYou can also nest trees by using ",(0,s.jsx)(e.code,{children:"<jp-tree>"})," recursively."]}),"\n",(0,s.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(e.p,{children:"This component does not have any methods."}),"\n",(0,s.jsxs)(e.p,{children:["However, there is a ",(0,s.jsx)(e.code,{children:"jpTreeStructure"})," function in ",(0,s.jsx)(e.code,{children:"structure.js"}),". It takes a tree and returns object containing the structure of a tree. For it to work you have to assign ",(0,s.jsx)(e.code,{children:"value"})," attribute to all nodes and subtrees."]}),"\n",(0,s.jsx)(e.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(e.p,{children:"This component does not have any events."}),"\n",(0,s.jsx)(e.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:"// import '../static/c/tree.wc.js';\n// import '../static/c/tree.css';\n// import '../static/c/node.wc.js';\n// import '../static/c/node-draggable.wc.js';\n\n<div>\n  <jp-tree title=\"Fruit\">\n    <jp-node>Apple</jp-node>\n    <jp-node-draggable>Banana</jp-node-draggable>\n    <jp-node>Fruit Loops</jp-node>\n  </jp-tree>\n  <jp-tree title=\"Vegetables\">\n    <jp-tree title=\"Green\">\n      <jp-node-draggable>Broccoli</jp-node-draggable>\n      <jp-node>Brussels sprouts</jp-node>\n    </jp-tree>\n    <jp-node>Tomato</jp-node>\n  </jp-tree>\n</div>\n"})})]})}function N(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(A,{...t})}):A(t)}},7095:(t,e,n)=>{var s=n(4312);typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(s.P)},4312:(t,e,n)=>{n.d(e,{$:()=>jt,A:()=>I,B:()=>q,C:()=>xt,D:()=>_,E:()=>bt,F:()=>vt,G:()=>Q,H:()=>V,I:()=>x,J:()=>h,K:()=>C,L:()=>rt,M:()=>W,N:()=>S,O:()=>Y,P:()=>Lt,Q:()=>A,R:()=>$t,S:()=>Tt,T:()=>wt,U:()=>kt,V:()=>_t,W:()=>pt,X:()=>b,Y:()=>R,Z:()=>B,_:()=>D,a:()=>j,a0:()=>yt,a1:()=>O,a2:()=>it,a3:()=>F,a4:()=>G,b:()=>f,c:()=>Nt,d:()=>P,e:()=>E,f:()=>w,g:()=>g,h:()=>$,i:()=>Et,j:()=>gt,k:()=>k,l:()=>T,m:()=>M,n:()=>Z,o:()=>dt,p:()=>y,q:()=>v,r:()=>l,s:()=>u,t:()=>mt,u:()=>m,v:()=>H,w:()=>r,x:()=>U,y:()=>L,z:()=>N});var s=Object.defineProperty,o=(t,e,n)=>((t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n)(t,"symbol"!=typeof e?e+"":e,n);function r(){}function i(t){return t()}function c(){return Object.create(null)}function l(t){t.forEach(i)}function d(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function h(t,e){return t===e||(a||(a=document.createElement("a")),a.href=e,t===a.href)}function f(t,e,n,s){if(t){const o=p(t,e,n,s);return t[0](o)}}function p(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function $(t,e,n,s){if(t[2]&&s){const o=t[2](s(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|o[s];return t}return e.dirty|o}return e.dirty}function m(t,e,n,s,o,r){if(o){const i=p(e,n,s,r);t.p(i,o)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function b(t){return t??""}function v(t){return t&&d(t.destroy)?t.destroy:r}const x=typeof window<"u"?window:typeof globalThis<"u"?globalThis:n.g;function y(t,e){t.appendChild(e)}function j(t,e,n){const s=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!s.getElementById(e)){const t=E("style");t.id=e,t.textContent=n,function(t,e){y(t.head||t,e),e.sheet}(s,t)}}function w(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function T(){return N(" ")}function L(){return N("")}function M(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function S(t){return function(e){return e.preventDefault(),t.call(this,e)}}function C(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e,n){const s=e.toLowerCase();s in t?t[s]="boolean"==typeof t[s]&&""===n||n:e in t?t[e]="boolean"==typeof t[e]&&""===n||n:P(t,e,n)}function D(t){let e;return{p(){for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];e=s,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function B(t){return""===t?null:+t}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}function R(t,e){t.value=e??""}function H(t,e,n,s){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function F(t,e,n){for(let s=0;s<t.options.length;s+=1){const n=t.options[s];if(n.__value===e)return void(n.selected=!0)}(!n||void 0!==e)&&(t.selectedIndex=-1)}function G(t){const e=t.querySelector(":checked");return e&&e.__value}function I(t,e,n){t.classList.toggle(e,!!n)}class Y{constructor(t){void 0===t&&(t=!1),o(this,"is_svg",!1),o(this,"e"),o(this,"n"),o(this,"t"),o(this,"a"),this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n){void 0===n&&(n=null),this.e||(this.is_svg?this.e=A(e.nodeName):this.e=E(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)w(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(k)}}let X;function z(t){X=t}function J(){if(!X)throw new Error("Function called outside component initialization");return X}function Q(t){J().$$.on_mount.push(t)}function V(t){J().$$.on_destroy.push(t)}function U(){const t=J();return function(e,n,s){let{cancelable:o=!1}=void 0===s?{}:s;const r=t.$$.callbacks[e];if(r){const s=function(t,e,n){let{bubbles:s=!1,cancelable:o=!1}=void 0===n?{}:n;return new CustomEvent(t,{detail:e,bubbles:s,cancelable:o})}(e,n,{cancelable:o});return r.slice().forEach((e=>{e.call(t,s)})),!s.defaultPrevented}return!0}}function W(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const K=[],Z=[];let tt=[];const et=[],nt=Promise.resolve();let st=!1;function ot(){st||(st=!0,nt.then(dt))}function rt(){return ot(),nt}function it(t){tt.push(t)}const ct=new Set;let lt=0;function dt(){if(0!==lt)return;const t=X;do{try{for(;lt<K.length;){const t=K[lt];lt++,z(t),ut(t.$$)}}catch(e){throw K.length=0,lt=0,e}for(z(null),K.length=0,lt=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ct.has(e)||(ct.add(e),e())}tt.length=0}while(K.length);for(;et.length;)et.pop()();st=!1,ct.clear(),z(t)}function ut(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const at=new Set;let ht,ft;function pt(){ht={r:0,c:[],p:ht}}function $t(){ht.r||l(ht.c),ht=ht.p}function mt(t,e){t&&t.i&&(at.delete(t),t.i(e))}function gt(t,e,n,s){if(t&&t.o){if(at.has(t))return;at.add(t),ht.c.push((()=>{at.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function bt(t,e){const n=e.token={};function s(t,s,o,r){if(e.token!==n)return;e.resolved=r;let i=e.ctx;void 0!==o&&(i=i.slice(),i[o]=r);const c=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(pt(),gt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),$t())})):e.block.d(1),c.c(),mt(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[s]=c),l&&dt()}if(function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}(t)){const n=J();if(t.then((t=>{z(n),s(e.then,1,e.value,t),z(null)}),(t=>{if(z(n),s(e.catch,2,e.error,t),z(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}}function vt(t,e,n){const s=e.slice(),{resolved:o}=t;t.current===t.then&&(s[t.value]=o),t.current===t.catch&&(s[t.error]=o),t.block.p(s,n)}function xt(t){return void 0!==t?.length?t:Array.from(t)}function yt(t,e){t.d(1),e.delete(t.key)}function jt(t,e,n,s,o,r,i,c,d,u,a,h){let f=t.length,p=r.length,$=f;const m={};for(;$--;)m[t[$].key]=$;const g=[],b=new Map,v=new Map,x=[];for($=p;$--;){const t=h(o,r,$),s=n(t);let c=i.get(s);c?x.push((()=>c.p(t,e))):(c=u(s,t),c.c()),b.set(s,g[$]=c),s in m&&v.set(s,Math.abs($-m[s]))}const y=new Set,j=new Set;function w(t){mt(t,1),t.m(c,a),i.set(t.key,t),a=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],s=e.key,o=n.key;e===n?(a=e.first,f--,p--):b.has(o)?!i.has(s)||y.has(s)?w(e):j.has(o)?f--:v.get(s)>v.get(o)?(j.add(s),w(e)):(y.add(o),f--):(d(n,i),f--)}for(;f--;){const e=t[f];b.has(e.key)||d(e,i)}for(;p;)w(g[p-1]);return l(x),g}function wt(t){t&&t.c()}function kt(t,e,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),it((()=>{const e=t.$$.on_mount.map(i).filter(d);t.$$.on_destroy?t.$$.on_destroy.push(...e):l(e),t.$$.on_mount=[]})),o.forEach(it)}function _t(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];tt.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),tt=e}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e,n,s,o,i,d,u){void 0===d&&(d=null),void 0===u&&(u=[-1]);const a=X;z(t);const h=t.$$={fragment:null,ctx:[],props:i,update:r,not_equal:o,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:c(),dirty:u,skip_bound:!1,root:e.target||a.$$.root};d&&d(h.root);let f=!1;if(h.ctx=n?n(t,e.props||{},(function(e,n){const s=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return h.ctx&&o(h.ctx[e],h.ctx[e]=s)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](s),f&&function(t,e){-1===t.$$.dirty[0]&&(K.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),f=!0,l(h.before_update),h.fragment=!!s&&s(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(k)}else h.fragment&&h.fragment.c();e.intro&&mt(t.$$.fragment),kt(t,e.target,e.anchor),dt()}z(a)}function At(t,e,n,s){var o;const r=null==(o=n[t])?void 0:o.type;if(e="Boolean"===r&&"boolean"!=typeof e?null!=e:e,!s||!n[t])return e;if("toAttribute"===s)switch(r){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(r){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function Nt(t,e,n,s,o,r){let i=class extends ft{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){var s;n=At(t,n,e),this.$$d[t]=n,null==(s=this.$$c)||s.$set({[t]:n})}})})),s.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){var e;return null==(e=this.$$c)?void 0:e[t]}})})),r&&(i=r(i)),t.element=i,i}"function"==typeof HTMLElement&&(ft=class extends HTMLElement{constructor(t,e,n){super(),o(this,"$$ctor"),o(this,"$$s"),o(this,"$$c"),o(this,"$$cn",!1),o(this,"$$d",{}),o(this,"$$r",!1),o(this,"$$p_d",{}),o(this,"$$l",{}),o(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(t){return()=>{let e;return{c:function(){e=E("slot"),"default"!==t&&P(e,"name",t)},m:function(t,n){w(t,e,n)},d:function(t){t&&k(e)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const o of this.$$s)o in n&&(e[o]=[t(o)]);for(const o of this.attributes){const t=this.$$g_p(o.name);t in this.$$d||(this.$$d[t]=At(t,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&void 0!==this[o]&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=At(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const o in this.$$l)for(const t of this.$$l[o]){const e=this.$$c.$on(o,t);this.$$l_u.set(t,e)}this.$$l={}}}attributeChangedCallback(t,e,n){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=At(t,n,this.$$p_d,"toProp"),null==(s=this.$$c)||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class Tt{constructor(){o(this,"$$"),o(this,"$$set")}$destroy(){_t(this,1),this.$destroy=r}$on(t,e){if(!d(e))return r;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Lt="4"},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var s=n(6540);const o={},r=s.createContext(o);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);