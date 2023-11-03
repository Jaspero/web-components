var ut=Object.defineProperty,at=(t,n,e)=>n in t?ut(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,f=(t,n,e)=>(at(t,typeof n!="symbol"?n+"":n,e),e);function x(){}function lt(t,n){for(const e in n)t[e]=n[e];return t}function ht(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function X(t){return t()}function Y(){return Object.create(null)}function v(t){t.forEach(X)}function J(t){return typeof t=="function"}function ft(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let O;function $t(t,n){return t===n?!0:(O||(O=document.createElement("a")),O.href=n,t===O.href)}function dt(t){return Object.keys(t).length===0}function pt(t,n,e,o){if(t){const s=Z(t,n,e,o);return t[0](s)}}function Z(t,n,e,o){return t[1]&&o?lt(e.ctx.slice(),t[1](o(n))):e.ctx}function bt(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const r=[],i=Math.max(n.dirty.length,s.length);for(let c=0;c<i;c+=1)r[c]=n.dirty[c]|s[c];return r}return n.dirty|s}return n.dirty}function mt(t,n,e,o,s,r){if(s){const i=Z(n,e,o,r);t.p(i,s)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function yt(t){return t&&J(t.destroy)?t.destroy:x}function tt(t,n){t.appendChild(n)}function vt(t,n,e){const o=_t(t);if(!o.getElementById(n)){const s=j("style");s.id=n,s.textContent=e,kt(o,s)}}function _t(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function kt(t,n){return tt(t.head||t,n),n.sheet}function z(t,n,e){t.insertBefore(n,e||null)}function P(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function j(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function wt(){return F(" ")}function xt(){return F("")}function Nt(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function At(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Lt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Ot(t){let n;return{p(...e){n=e,n.forEach(o=>t.push(o))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Pt(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ct(t,n){t.value=n??""}function Tt(t,n,e,o){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function St(t,n,e){for(let o=0;o<t.options.length;o+=1){const s=t.options[o];if(s.__value===n){s.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Bt(t){const n=t.querySelector(":checked");return n&&n.__value}function Dt(t,n,e){t.classList.toggle(n,!!e)}function Ht(t,n,{bubbles:e=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:o})}class Rt{constructor(n=!1){f(this,"is_svg",!1),f(this,"e"),f(this,"n"),f(this,"t"),f(this,"a"),this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,o=null){this.e||(this.is_svg?this.e=nt(e.nodeName):this.e=j(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(o)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)z(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(P)}}function qt(t){const n={};return t.childNodes.forEach(e=>{n[e.slot||"default"]=!0}),n}let N;function y(t){N=t}function M(){if(!N)throw new Error("Function called outside component initialization");return N}function It(t){M().$$.on_mount.push(t)}function Jt(t){M().$$.on_destroy.push(t)}function zt(){const t=M();return(n,e,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[n];if(s){const r=Ht(n,e,{cancelable:o});return s.slice().forEach(i=>{i.call(t,r)}),!r.defaultPrevented}return!0}}function Ft(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const k=[],G=[];let E=[];const ot=[],Gt=Promise.resolve();let K=!1;function Kt(){K||(K=!0,Gt.then(T))}function C(t){E.push(t)}const Q=new Set;let w=0;function T(){if(w!==0)return;const t=N;do{try{for(;w<k.length;){const n=k[w];w++,y(n),Qt(n.$$)}}catch(n){throw k.length=0,w=0,n}for(y(null),k.length=0,w=0;G.length;)G.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];Q.has(e)||(Q.add(e),e())}E.length=0}while(k.length);for(;ot.length;)ot.pop()();K=!1,Q.clear(),y(t)}function Qt(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function Ut(t){const n=[],e=[];E.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),E=n}const S=new Set;let _;function st(){_={r:0,c:[],p:_}}function rt(){_.r||v(_.c),_=_.p}function B(t,n){t&&t.i&&(S.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(S.has(t))return;S.add(t),_.c.push(()=>{S.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}else o&&o()}function Vt(t,n){const e=n.token={};function o(s,r,i,c){if(n.token!==e)return;n.resolved=c;let a=n.ctx;i!==void 0&&(a=a.slice(),a[i]=c);const u=s&&(n.current=s)(a);let g=!1;n.block&&(n.blocks?n.blocks.forEach(($,h)=>{h!==r&&$&&(st(),it($,1,1,()=>{n.blocks[h]===$&&(n.blocks[h]=null)}),rt())}):n.block.d(1),u.c(),B(u,1),u.m(n.mount(),n.anchor),g=!0),n.block=u,n.blocks&&(n.blocks[r]=u),g&&T()}if(ht(t)){const s=M();if(t.then(r=>{y(s),o(n.then,1,n.value,r),y(null)},r=>{if(y(s),o(n.catch,2,n.error,r),y(null),!n.hasCatch)throw r}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}}function Wt(t,n,e){const o=n.slice(),{resolved:s}=t;t.current===t.then&&(o[t.value]=s),t.current===t.catch&&(o[t.error]=s),t.block.p(o,e)}function Xt(t){return t?.length!==void 0?t:Array.from(t)}function Yt(t,n){t.d(1),n.delete(t.key)}function Zt(t,n,e,o,s,r,i,c,a,u,g,$){let h=t.length,p=r.length,d=h;const H={};for(;d--;)H[t[d].key]=d;const A=[],R=new Map,q=new Map,U=[];for(d=p;d--;){const l=$(s,r,d),b=e(l);let m=i.get(b);m?o&&U.push(()=>m.p(l,n)):(m=u(b,l),m.c()),R.set(b,A[d]=m),b in H&&q.set(b,Math.abs(d-H[b]))}const V=new Set,W=new Set;function I(l){B(l,1),l.m(c,g),i.set(l.key,l),g=l.first,p--}for(;h&&p;){const l=A[p-1],b=t[h-1],m=l.key,L=b.key;l===b?(g=l.first,h--,p--):R.has(L)?!i.has(m)||V.has(m)?I(l):W.has(L)?h--:q.get(m)>q.get(L)?(W.add(m),I(l)):(V.add(L),h--):(a(b,i),h--)}for(;h--;){const l=t[h];R.has(l.key)||a(l,i)}for(;p;)I(A[p-1]);return v(U),A}function tn(t,n,e){const{fragment:o,after_update:s}=t.$$;o&&o.m(n,e),C(()=>{const r=t.$$.on_mount.map(X).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),s.forEach(C)}function nn(t,n){const e=t.$$;e.fragment!==null&&(Ut(e.after_update),v(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function en(t,n){t.$$.dirty[0]===-1&&(k.push(t),Kt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function on(t,n,e,o,s,r,i,c=[-1]){const a=N;y(t);const u=t.$$={fragment:null,ctx:[],props:r,update:x,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:Y(),dirty:c,skip_bound:!1,root:n.target||a.$$.root};i&&i(u.root);let g=!1;if(u.ctx=e?e(t,n.props||{},($,h,...p)=>{const d=p.length?p[0]:h;return u.ctx&&s(u.ctx[$],u.ctx[$]=d)&&(!u.skip_bound&&u.bound[$]&&u.bound[$](d),g&&en(t,$)),h}):[],u.update(),g=!0,v(u.before_update),u.fragment=o?o(u.ctx):!1,n.target){if(n.hydrate){const $=jt(n.target);u.fragment&&u.fragment.l($),$.forEach(P)}else u.fragment&&u.fragment.c();n.intro&&B(t.$$.fragment),tn(t,n.target,n.anchor),T()}y(a)}let ct;typeof HTMLElement=="function"&&(ct=class extends HTMLElement{constructor(t,n,e){super(),f(this,"$$ctor"),f(this,"$$s"),f(this,"$$c"),f(this,"$$cn",!1),f(this,"$$d",{}),f(this,"$$r",!1),f(this,"$$p_d",{}),f(this,"$$l",{}),f(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=n,e&&this.attachShadow({mode:"open"})}addEventListener(t,n,e){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const o=this.$$c.$on(t,n);this.$$l_u.set(n,o)}super.addEventListener(t,n,e)}removeEventListener(t,n,e){if(super.removeEventListener(t,n,e),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(s){return()=>{let r;return{c:function(){r=j("slot"),s!=="default"&&et(r,"name",s)},m:function(i,c){z(i,r,c)},d:function(i){i&&P(r)}}}};if(await Promise.resolve(),!this.$$cn)return;const n={},e=qt(this);for(const s of this.$$s)s in e&&(n[s]=[t(s)]);for(const s of this.attributes){const r=this.$$g_p(s.name);r in this.$$d||(this.$$d[r]=D(r,s.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const s in this.$$p_d)if(this.$$d[s]=this.$$c.$$.ctx[this.$$c.$$.props[s]],this.$$p_d[s].reflect){const r=D(s,this.$$d[s],this.$$p_d,"toAttribute");r==null?this.removeAttribute(s):this.setAttribute(this.$$p_d[s].attribute||s,r)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const s in this.$$l)for(const r of this.$$l[s]){const i=this.$$c.$on(s,r);this.$$l_u.set(r,i)}this.$$l={}}}attributeChangedCallback(t,n,e){var o;this.$$r||(t=this.$$g_p(t),this.$$d[t]=D(t,e,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(t){return Object.keys(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function D(t,n,e,o){var s;const r=(s=e[t])==null?void 0:s.type;if(n=r==="Boolean"&&typeof n!="boolean"?n!=null:n,!o||!e[t])return n;if(o==="toAttribute")switch(r){case"Object":case"Array":return n==null?null:JSON.stringify(n);case"Boolean":return n?"":null;case"Number":return n??null;default:return n}else switch(r){case"Object":case"Array":return n&&JSON.parse(n);case"Boolean":return n;case"Number":return n!=null?+n:n;default:return n}}function sn(t,n,e,o,s,r){let i=class extends ct{constructor(){super(t,e,s),this.$$p_d=n}static get observedAttributes(){return Object.keys(n).map(c=>(n[c].attribute||c).toLowerCase())}};return Object.keys(n).forEach(c=>{Object.defineProperty(i.prototype,c,{get(){return this.$$c&&c in this.$$c?this.$$c[c]:this.$$d[c]},set(a){var u;a=D(c,a,n),this.$$d[c]=a,(u=this.$$c)==null||u.$set({[c]:a})}})}),o.forEach(c=>{Object.defineProperty(i.prototype,c,{get(){var a;return(a=this.$$c)==null?void 0:a[c]}})}),r&&(i=r(i)),t.element=i,i}class rn{constructor(){f(this,"$$"),f(this,"$$set")}$destroy(){nn(this,1),this.$destroy=x}$on(n,e){if(!J(e))return x;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const s=o.indexOf(e);s!==-1&&o.splice(s,1)}}$set(n){this.$$set&&!dt(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const cn="4";export{bt as A,B,it as C,Ft as D,nt as E,Tt as F,G,Rt as H,Ct as I,At as J,v as K,$t as L,yt as M,Jt as N,Lt as O,Zt as P,Yt as Q,Ot as R,rn as S,C as T,St as U,Bt as V,rt as W,st as X,cn as Y,Pt as Z,vt as a,wt as b,sn as c,et as d,j as e,T as f,z as g,tt as h,on as i,P as j,zt as k,Xt as l,Et as m,x as n,Nt as o,xt as p,F as q,Mt as r,ft as s,Dt as t,Vt as u,Wt as v,It as w,pt as x,mt as y,gt as z};
