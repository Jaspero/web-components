import{c as J,S as O,i as z,f as b,s as A,a as B,l as y,e as x,d as g,g as d,n as k,j as h,m as C,k as D,w as F,q as w,b as j,p as G,h as m,r as H}from"./svelte.js";import"./index2.js";function I(l){B(l,"svelte-xpfle5",".stepper.svelte-xpfle5{display:flex;justify-content:space-between;padding:2rem;gap:1rem}.stepper-step.svelte-xpfle5{position:relative;display:flex;flex-direction:column;align-items:center}.stepper-step-label.svelte-xpfle5{position:absolute;top:2.25rem;width:5rem;text-align:center}.stepper-step-circle.svelte-xpfle5{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%}.active.svelte-xpfle5{color:var(--text-on-primary);background-color:var(--primary-color)}.inactive.svelte-xpfle5{background-color:var(--background-secondary)}.connector-line.svelte-xpfle5{margin-top:1rem;flex-grow:1;height:1px;background-color:#ccc}")}function N(l,e,n){const t=l.slice();return t[6]=e[n],t[8]=n,t}function S(l){let e;return{c(){e=x("div"),g(e,"class","connector-line svelte-xpfle5")},m(n,t){d(n,e,t)},d(n){n&&h(e)}}}function q(l){let e,n,t=l[8]+1+"",s,p,r,a,f=l[6]+"",o,$,v,c=l[8]<l[0].length-1&&S();return{c(){e=x("div"),n=x("div"),s=w(t),r=j(),a=x("div"),o=w(f),$=j(),c&&c.c(),v=G(),g(n,"class",p="stepper-step-circle "+(l[8]<=l[1]?"active":"inactive")+" svelte-xpfle5"),g(a,"class","stepper-step-label svelte-xpfle5"),g(e,"class","stepper-step svelte-xpfle5")},m(i,u){d(i,e,u),m(e,n),m(n,s),m(e,r),m(e,a),m(a,o),d(i,$,u),c&&c.m(i,u),d(i,v,u)},p(i,u){u&2&&p!==(p="stepper-step-circle "+(i[8]<=i[1]?"active":"inactive")+" svelte-xpfle5")&&g(n,"class",p),u&1&&f!==(f=i[6]+"")&&H(o,f),i[8]<i[0].length-1?c||(c=S(),c.c(),c.m(v.parentNode,v)):c&&(c.d(1),c=null)},d(i){i&&(h(e),h($),h(v)),c&&c.d(i)}}}function K(l){let e,n=y(l[0]),t=[];for(let s=0;s<n.length;s+=1)t[s]=q(N(l,n,s));return{c(){e=x("div");for(let s=0;s<t.length;s+=1)t[s].c();g(e,"class","stepper svelte-xpfle5")},m(s,p){d(s,e,p);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(s,[p]){if(p&3){n=y(s[0]);let r;for(r=0;r<n.length;r+=1){const a=N(s,n,r);t[r]?t[r].p(a,p):(t[r]=q(a),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=n.length}},i:k,o:k,d(s){s&&h(e),C(t,s)}}}function M(l,e,n){let{steps:t=[]}=e,{step:s=0}=e;const p=D();function r(){s<t.length-1&&n(1,s+=1),p("change",{step:s})}function a(){s>0&&n(1,s-=1),p("change",{step:s})}function f(){n(1,s=0),p("change",{step:s})}return F(()=>{typeof t=="string"&&n(0,t=JSON.parse(t))}),l.$$set=o=>{"steps"in o&&n(0,t=o.steps),"step"in o&&n(1,s=o.step)},[t,s,r,a,f]}class E extends O{constructor(e){super(),z(this,e,M,K,A,{steps:0,step:1,next:2,previous:3,reset:4},I)}get steps(){return this.$$.ctx[0]}set steps(e){this.$$set({steps:e}),b()}get step(){return this.$$.ctx[1]}set step(e){this.$$set({step:e}),b()}get next(){return this.$$.ctx[2]}get previous(){return this.$$.ctx[3]}get reset(){return this.$$.ctx[4]}}try{customElements.define("jp-stepper",J(E,{steps:{},step:{}},[],["next","previous","reset"],!1));}catch{};export{E as default};
