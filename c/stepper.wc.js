import{c as B,S as C,i as E,f as b,s as J,a as M,M as y,e as x,d as g,g as d,z as w,l as h,N as O,w as q,o as D,A as k,m as j,C as F,r as m,B as G}from"./svelte.js";import"./index2.js";function H(n){M(n,"svelte-xpfle5",".stepper.svelte-xpfle5{display:flex;justify-content:space-between;padding:2rem;gap:1rem}.stepper-step.svelte-xpfle5{position:relative;display:flex;flex-direction:column;align-items:center}.stepper-step-label.svelte-xpfle5{position:absolute;top:2.25rem;width:5rem;text-align:center}.stepper-step-circle.svelte-xpfle5{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%}.active.svelte-xpfle5{color:var(--text-on-primary);background-color:var(--primary-color)}.inactive.svelte-xpfle5{background-color:var(--background-secondary)}.connector-line.svelte-xpfle5{margin-top:1rem;flex-grow:1;height:1px;background-color:#ccc}")}function N(n,e,r){const t=n.slice();return t[6]=e[r],t[8]=r,t}function S(n){let e;return{c(){e=x("div"),g(e,"class","connector-line svelte-xpfle5")},m(r,t){d(r,e,t)},d(r){r&&h(e)}}}function z(n){let e,r,t=n[8]+1+"",s,i,l,a,f=n[6]+"",o,$,v,p=n[8]<n[0].length-1&&S();return{c(){e=x("div"),r=x("div"),s=k(t),l=j(),a=x("div"),o=k(f),$=j(),p&&p.c(),v=F(),g(r,"class",i="stepper-step-circle "+(n[8]<=n[1]?"active":"inactive")+" svelte-xpfle5"),g(a,"class","stepper-step-label svelte-xpfle5"),g(e,"class","stepper-step svelte-xpfle5")},m(c,u){d(c,e,u),m(e,r),m(r,s),m(e,l),m(e,a),m(a,o),d(c,$,u),p&&p.m(c,u),d(c,v,u)},p(c,u){u&2&&i!==(i="stepper-step-circle "+(c[8]<=c[1]?"active":"inactive")+" svelte-xpfle5")&&g(r,"class",i),u&1&&f!==(f=c[6]+"")&&G(o,f),c[8]<c[0].length-1?p||(p=S(),p.c(),p.m(v.parentNode,v)):p&&(p.d(1),p=null)},d(c){c&&(h(e),h($),h(v)),p&&p.d(c)}}}function I(n){let e,r=y(n[0]),t=[];for(let s=0;s<r.length;s+=1)t[s]=z(N(n,r,s));return{c(){e=x("div");for(let s=0;s<t.length;s+=1)t[s].c();g(e,"class","stepper svelte-xpfle5")},m(s,i){d(s,e,i);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null)},p(s,[i]){if(i&3){r=y(s[0]);let l;for(l=0;l<r.length;l+=1){const a=N(s,r,l);t[l]?t[l].p(a,i):(t[l]=z(a),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=r.length}},i:w,o:w,d(s){s&&h(e),O(t,s)}}}function K(n,e,r){let{steps:t=[]}=e,{step:s=0}=e;const i=q();function l(){s<t.length-1&&r(1,s+=1),i("change",{step:s})}function a(){s>0&&r(1,s-=1),i("change",{step:s})}function f(){r(1,s=0),i("change",{step:s})}return D(()=>{typeof t=="string"&&r(0,t=JSON.parse(t))}),n.$$set=o=>{"steps"in o&&r(0,t=o.steps),"step"in o&&r(1,s=o.step)},[t,s,l,a,f]}class A extends C{constructor(e){super(),E(this,e,K,I,J,{steps:0,step:1,next:2,previous:3,reset:4},H)}get steps(){return this.$$.ctx[0]}set steps(e){this.$$set({steps:e}),b()}get step(){return this.$$.ctx[1]}set step(e){this.$$set({step:e}),b()}get next(){return this.$$.ctx[2]}get previous(){return this.$$.ctx[3]}get reset(){return this.$$.ctx[4]}}try{customElements.define("jp-stepper",B(A,{steps:{},step:{}},[],["next","previous","reset"],!1));}catch{};export{A as default};