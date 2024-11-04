"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5131],{2035:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>x,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>v,toc:()=>g});var r=n(4848),s=n(8453),o=n(4312),i=(n(7095),n(1042));function c(t){(0,o.a)(t,"svelte-rxbv49",".alert.svelte-rxbv49{position:fixed;bottom:10px;right:50%;transform:translateX(50%);margin:1rem 0;background-color:white;box-shadow:0 3px 15px 6px rgba(0, 0, 0, 0.2);border-radius:0.5rem;z-index:100}@media(max-width: 600px){.alert.svelte-rxbv49{right:1rem;left:1rem;transform:unset}}.alert.alert-error.svelte-rxbv49{border-left:4px solid var(--danger-color)}.alert.alert-success.svelte-rxbv49{border-left:4px solid var(--success-color)}.alert-container.svelte-rxbv49{display:flex;flex-direction:column;gap:0.5rem;padding:1rem;max-width:40rem}.alert-container-header.svelte-rxbv49{display:flex;align-items:center;justify-content:space-between;gap:1rem}.alert-container-header-inner.svelte-rxbv49{display:flex}.alert-container-header-icon.svelte-rxbv49{font-size:1.5rem;margin-right:0.5rem}.alert-container-header-title.svelte-rxbv49{flex:1 1 0;font-size:1.5rem;font-weight:bold}.alert-container-header-close.svelte-rxbv49{width:1.5rem;height:1.5rem}.alert-container-message.svelte-rxbv49{font-size:0.875rem}h2.svelte-rxbv49,p.svelte-rxbv49{margin:0}")}function l(t){let e;return{c(){e=(0,o.z)("\u2705")},m(t,n){(0,o.f)(t,e,n)},d(t){t&&(0,o.k)(e)}}}function a(t){let e;return{c(){e=(0,o.z)("\u26a0\ufe0f")},m(t,n){(0,o.f)(t,e,n)},d(t){t&&(0,o.k)(e)}}}function d(t){let e;return{c(){e=(0,o.e)("h2"),(0,o.d)(e,"class","alert-container-header-title svelte-rxbv49")},m(n,r){(0,o.f)(n,e,r),e.innerHTML=t[0]},p(t,n){1&n&&(e.innerHTML=t[0])},d(t){t&&(0,o.k)(e)}}}function u(t){let e;return{c(){e=(0,o.e)("p"),(0,o.d)(e,"class","alert-container-message svelte-rxbv49")},m(n,r){(0,o.f)(n,e,r),e.innerHTML=t[1]},p(t,n){2&n&&(e.innerHTML=t[1])},d(t){t&&(0,o.k)(e)}}}function h(t){let e,n,r,s,c,h,f,$,p,m,v,x;function g(t,e){return"error"===t[2]?a:"success"===t[2]?l:void 0}let b=g(t),y=b&&b(t),j=t[0]&&d(t),w=t[1]&&u(t);return{c(){e=(0,o.e)("div"),n=(0,o.e)("div"),r=(0,o.e)("div"),s=(0,o.e)("div"),c=(0,o.e)("div"),y&&y.c(),h=(0,o.l)(),j&&j.c(),f=(0,o.l)(),$=(0,o.e)("button"),p=(0,o.l)(),w&&w.c(),(0,o.d)(c,"class","alert-container-header-icon svelte-rxbv49"),(0,o.d)(s,"class","alert-container-header-inner svelte-rxbv49"),(0,o.d)($,"type","button"),(0,o.d)($,"class","alert-container-header-close svelte-rxbv49"),(0,o.d)(r,"class","alert-container-header svelte-rxbv49"),(0,o.d)(n,"class","alert-container svelte-rxbv49"),(0,o.d)(e,"class",m="alert alert-"+t[2]+" svelte-rxbv49")},m(l,a){(0,o.f)(l,e,a),(0,o.p)(e,n),(0,o.p)(n,r),(0,o.p)(r,s),(0,o.p)(s,c),y&&y.m(c,null),(0,o.p)(s,h),j&&j.m(s,null),(0,o.p)(r,f),(0,o.p)(r,$),$.innerHTML=i.c,(0,o.p)(n,p),w&&w.m(n,null),v||(x=(0,o.m)($,"click",(0,o.N)(t[4])),v=!0)},p(t,r){let[i]=r;b!==(b=g(t))&&(y&&y.d(1),y=b&&b(t),y&&(y.c(),y.m(c,null))),t[0]?j?j.p(t,i):(j=d(t),j.c(),j.m(s,null)):j&&(j.d(1),j=null),t[1]?w?w.p(t,i):(w=u(t),w.c(),w.m(n,null)):w&&(w.d(1),w=null),4&i&&m!==(m="alert alert-"+t[2]+" svelte-rxbv49")&&(0,o.d)(e,"class",m)},i:o.w,o:o.w,d(t){t&&(0,o.k)(e),y&&y.d(),j&&j.d(),w&&w.d(),v=!1,x()}}}function f(t,e,n){let{title:r=""}=e,{message:s=""}=e,{state:i="error"}=e;const c=(0,o.x)();return t.$$set=t=>{"title"in t&&n(0,r=t.title),"message"in t&&n(1,s=t.message),"state"in t&&n(2,i=t.state)},[r,s,i,c,()=>c("close")]}class $ extends o.S{constructor(t){super(),(0,o.i)(this,t,f,h,o.s,{title:0,message:1,state:2},c)}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),(0,o.o)()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),(0,o.o)()}get state(){return this.$$.ctx[2]}set state(t){this.$$set({state:t}),(0,o.o)()}}try{customElements.define("jp-alert",(0,o.c)($,{title:{},message:{},state:{}},[],[],!1))}catch{}const p={},m="Alert",v={id:"alert",title:"Alert",description:"Description",source:"@site/docs/alert.md",sourceDirName:".",slug:"/alert",permalink:"/web-components/docs/alert",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Accordion",permalink:"/web-components/docs/accordion"},next:{title:"Async Table",permalink:"/web-components/docs/async-table"}},x={},g=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function b(t){const e={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"alert",children:"Alert"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"<jp-alert>"})," is a component with the functionality of displaying alert messages."]}),"\n",(0,r.jsx)(e.h3,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Name"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Required"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Type"})}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:(0,r.jsx)(e.strong,{children:"Description"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"title"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"title of the alert"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"message"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"information within an alert"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"state"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u2713"}),(0,r.jsxs)(e.td,{style:{textAlign:"center"},children:[(0,r.jsx)(e.code,{children:"'error'"})," or ",(0,r.jsx)(e.code,{children:"'success'"})]}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"type of alert"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"slots",children:"Slots"}),"\n",(0,r.jsx)(e.p,{children:"This component does not have any slots."}),"\n",(0,r.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(e.p,{children:"This component does not have any methods."}),"\n",(0,r.jsx)(e.h3,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"close"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'triggers when the "close" button is clicked'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"demo",children:"Demo"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",metastring:"live",live:!0,children:'// import \'../static/c/alert.wc.js\';\n\nfunction alert(props) {\n  const [show, setShow] = useState(false);\n  return (\n    <>\n      <div hidden={!show}>\n        <jp-alert\n          title="Alert title"\n          message="This is message"\n          onClose={() => setShow(false)}\n        ></jp-alert>\n      </div>\n      <button onClick={() => setShow(!show)}>Click me to toggle!</button>\n    </>\n  );\n}\n'})})]})}function y(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(b,{...t})}):b(t)}},1042:(t,e,n)=>{n.d(e,{c:()=>r});const r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>'},7095:(t,e,n)=>{var r=n(4312);typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(r.P)},4312:(t,e,n)=>{n.d(e,{$:()=>jt,A:()=>I,B:()=>H,C:()=>bt,D:()=>k,E:()=>xt,F:()=>gt,G:()=>Q,H:()=>U,I:()=>b,J:()=>h,K:()=>P,L:()=>ot,M:()=>W,N:()=>C,O:()=>J,P:()=>Mt,Q:()=>E,R:()=>pt,S:()=>Tt,T:()=>wt,U:()=>_t,V:()=>kt,W:()=>$t,X:()=>x,Y:()=>R,Z:()=>z,_:()=>D,a:()=>j,a0:()=>yt,a1:()=>O,a2:()=>it,a3:()=>q,a4:()=>F,b:()=>f,c:()=>Lt,d:()=>S,e:()=>A,f:()=>w,g:()=>v,h:()=>p,i:()=>At,j:()=>vt,k:()=>_,l:()=>T,m:()=>N,n:()=>Z,o:()=>at,p:()=>y,q:()=>g,r:()=>l,s:()=>d,t:()=>mt,u:()=>m,v:()=>B,w:()=>o,x:()=>V,y:()=>M,z:()=>L});var r=Object.defineProperty,s=(t,e,n)=>((t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n)(t,"symbol"!=typeof e?e+"":e,n);function o(){}function i(t){return t()}function c(){return Object.create(null)}function l(t){t.forEach(i)}function a(t){return"function"==typeof t}function d(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u;function h(t,e){return t===e||(u||(u=document.createElement("a")),u.href=e,t===u.href)}function f(t,e,n,r){if(t){const s=$(t,e,n,r);return t[0](s)}}function $(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function p(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}function m(t,e,n,r,s,o){if(s){const i=$(e,n,r,o);t.p(i,s)}}function v(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function x(t){return t??""}function g(t){return t&&a(t.destroy)?t.destroy:o}const b=typeof window<"u"?window:typeof globalThis<"u"?globalThis:n.g;function y(t,e){t.appendChild(e)}function j(t,e,n){const r=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!r.getElementById(e)){const t=A("style");t.id=e,t.textContent=n,function(t,e){y(t.head||t,e),e.sheet}(r,t)}}function w(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function T(){return L(" ")}function M(){return L("")}function N(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function C(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e,n){const r=e.toLowerCase();r in t?t[r]="boolean"==typeof t[r]&&""===n||n:e in t?t[e]="boolean"==typeof t[e]&&""===n||n:S(t,e,n)}function D(t){let e;return{p(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];e=r,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function z(t){return""===t?null:+t}function H(t,e){e=""+e,t.data!==e&&(t.data=e)}function R(t,e){t.value=e??""}function B(t,e,n,r){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function q(t,e,n){for(let r=0;r<t.options.length;r+=1){const n=t.options[r];if(n.__value===e)return void(n.selected=!0)}(!n||void 0!==e)&&(t.selectedIndex=-1)}function F(t){const e=t.querySelector(":checked");return e&&e.__value}function I(t,e,n){t.classList.toggle(e,!!n)}class J{constructor(t){void 0===t&&(t=!1),s(this,"is_svg",!1),s(this,"e"),s(this,"n"),s(this,"t"),s(this,"a"),this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n){void 0===n&&(n=null),this.e||(this.is_svg?this.e=E(e.nodeName):this.e=A(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)w(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}let X;function G(t){X=t}function K(){if(!X)throw new Error("Function called outside component initialization");return X}function Q(t){K().$$.on_mount.push(t)}function U(t){K().$$.on_destroy.push(t)}function V(){const t=K();return function(e,n,r){let{cancelable:s=!1}=void 0===r?{}:r;const o=t.$$.callbacks[e];if(o){const r=function(t,e,n){let{bubbles:r=!1,cancelable:s=!1}=void 0===n?{}:n;return new CustomEvent(t,{detail:e,bubbles:r,cancelable:s})}(e,n,{cancelable:s});return o.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}function W(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const Y=[],Z=[];let tt=[];const et=[],nt=Promise.resolve();let rt=!1;function st(){rt||(rt=!0,nt.then(at))}function ot(){return st(),nt}function it(t){tt.push(t)}const ct=new Set;let lt=0;function at(){if(0!==lt)return;const t=X;do{try{for(;lt<Y.length;){const t=Y[lt];lt++,G(t),dt(t.$$)}}catch(e){throw Y.length=0,lt=0,e}for(G(null),Y.length=0,lt=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];ct.has(e)||(ct.add(e),e())}tt.length=0}while(Y.length);for(;et.length;)et.pop()();rt=!1,ct.clear(),G(t)}function dt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const ut=new Set;let ht,ft;function $t(){ht={r:0,c:[],p:ht}}function pt(){ht.r||l(ht.c),ht=ht.p}function mt(t,e){t&&t.i&&(ut.delete(t),t.i(e))}function vt(t,e,n,r){if(t&&t.o){if(ut.has(t))return;ut.add(t),ht.c.push((()=>{ut.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function xt(t,e){const n=e.token={};function r(t,r,s,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;void 0!==s&&(i=i.slice(),i[s]=o);const c=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&($t(),vt(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),pt())})):e.block.d(1),c.c(),mt(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[r]=c),l&&at()}if(function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}(t)){const n=K();if(t.then((t=>{G(n),r(e.then,1,e.value,t),G(null)}),(t=>{if(G(n),r(e.catch,2,e.error,t),G(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function gt(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}function bt(t){return void 0!==t?.length?t:Array.from(t)}function yt(t,e){t.d(1),e.delete(t.key)}function jt(t,e,n,r,s,o,i,c,a,d,u,h){let f=t.length,$=o.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const v=[],x=new Map,g=new Map,b=[];for(p=$;p--;){const t=h(s,o,p),r=n(t);let c=i.get(r);c?b.push((()=>c.p(t,e))):(c=d(r,t),c.c()),x.set(r,v[p]=c),r in m&&g.set(r,Math.abs(p-m[r]))}const y=new Set,j=new Set;function w(t){mt(t,1),t.m(c,u),i.set(t.key,t),u=t.first,$--}for(;f&&$;){const e=v[$-1],n=t[f-1],r=e.key,s=n.key;e===n?(u=e.first,f--,$--):x.has(s)?!i.has(r)||y.has(r)?w(e):j.has(s)?f--:g.get(r)>g.get(s)?(j.add(r),w(e)):(y.add(s),f--):(a(n,i),f--)}for(;f--;){const e=t[f];x.has(e.key)||a(e,i)}for(;$;)w(v[$-1]);return l(b),v}function wt(t){t&&t.c()}function _t(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),it((()=>{const e=t.$$.on_mount.map(i).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...e):l(e),t.$$.on_mount=[]})),s.forEach(it)}function kt(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];tt.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),tt=e}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e,n,r,s,i,a,d){void 0===a&&(a=null),void 0===d&&(d=[-1]);const u=X;G(t);const h=t.$$={fragment:null,ctx:[],props:i,update:o,not_equal:s,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:c(),dirty:d,skip_bound:!1,root:e.target||u.$$.root};a&&a(h.root);let f=!1;if(h.ctx=n?n(t,e.props||{},(function(e,n){const r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return h.ctx&&s(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),f&&function(t,e){-1===t.$$.dirty[0]&&(Y.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),f=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(_)}else h.fragment&&h.fragment.c();e.intro&&mt(t.$$.fragment),_t(t,e.target,e.anchor),at()}G(u)}function Et(t,e,n,r){var s;const o=null==(s=n[t])?void 0:s.type;if(e="Boolean"===o&&"boolean"!=typeof e?null!=e:e,!r||!n[t])return e;if("toAttribute"===r)switch(o){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function Lt(t,e,n,r,s,o){let i=class extends ft{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){var r;n=Et(t,n,e),this.$$d[t]=n,null==(r=this.$$c)||r.$set({[t]:n})}})})),r.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){var e;return null==(e=this.$$c)?void 0:e[t]}})})),o&&(i=o(i)),t.element=i,i}"function"==typeof HTMLElement&&(ft=class extends HTMLElement{constructor(t,e,n){super(),s(this,"$$ctor"),s(this,"$$s"),s(this,"$$c"),s(this,"$$cn",!1),s(this,"$$d",{}),s(this,"$$r",!1),s(this,"$$p_d",{}),s(this,"$$l",{}),s(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(t){return()=>{let e;return{c:function(){e=A("slot"),"default"!==t&&S(e,"name",t)},m:function(t,n){w(t,e,n)},d:function(t){t&&_(e)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const s of this.$$s)s in n&&(e[s]=[t(s)]);for(const s of this.attributes){const t=this.$$g_p(s.name);t in this.$$d||(this.$$d[t]=Et(t,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&void 0!==this[s]&&(this.$$d[s]=this[s],delete this[s]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=Et(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const s in this.$$l)for(const t of this.$$l[s]){const e=this.$$c.$on(s,t);this.$$l_u.set(t,e)}this.$$l={}}}attributeChangedCallback(t,e,n){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Et(t,n,this.$$p_d,"toProp"),null==(r=this.$$c)||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class Tt{constructor(){s(this,"$$"),s(this,"$$set")}$destroy(){kt(this,1),this.$destroy=o}$on(t,e){if(!a(e))return o;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Mt="4"},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var r=n(6540);const s={},o=r.createContext(s);function i(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);