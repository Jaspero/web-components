import{S as g,i as x,s as w,w as z,f as k,x as v,k as l,U as p,d as a,p as f,c as D,o as $,W as R,X as j,t as q,j as b,Y as B}from"./svelte.js";import"./index.js";function E(i){let e,r,t,s,o,d;return{c(){e=p("svg"),r=p("g"),t=p("circle"),a(t,"cx","12"),a(t,"cy","12"),a(t,"r","9.5"),a(t,"fill","none"),a(t,"stroke-width",s=12/i[4]*i[5]),a(t,"class","svelte-24dqr8"),a(r,"class","jp-progress-spinner-spinner svelte-24dqr8"),a(e,"width",o=i[4]*2),a(e,"height",d=i[4]*2),a(e,"stroke",i[6]),a(e,"viewBox","0 0 24 24")},m(n,u){k(n,e,u),f(e,r),f(r,t)},p(n,u){u&48&&s!==(s=12/n[4]*n[5])&&a(t,"stroke-width",s),u&16&&o!==(o=n[4]*2)&&a(e,"width",o),u&16&&d!==(d=n[4]*2)&&a(e,"height",d),u&64&&a(e,"stroke",n[6])},d(n){n&&l(e)}}}function I(i){let e,r,t,s,o;return{c(){e=p("svg"),r=p("circle"),a(r,"class","jp-progress-spinner svelte-24dqr8"),a(r,"stroke",i[6]),a(r,"fill","transparent"),a(r,"stroke-dasharray",t=i[3]+" "+i[3]),a(r,"stroke-dashoffset",i[2]),a(r,"stroke-width",i[5]),a(r,"r",i[1]),a(r,"cx",i[4]),a(r,"cy",i[4]),a(e,"height",s=i[4]*2),a(e,"width",o=i[4]*2)},m(d,n){k(d,e,n),f(e,r)},p(d,n){n&64&&a(r,"stroke",d[6]),n&8&&t!==(t=d[3]+" "+d[3])&&a(r,"stroke-dasharray",t),n&4&&a(r,"stroke-dashoffset",d[2]),n&32&&a(r,"stroke-width",d[5]),n&2&&a(r,"r",d[1]),n&16&&a(r,"cx",d[4]),n&16&&a(r,"cy",d[4]),n&16&&s!==(s=d[4]*2)&&a(e,"height",s),n&16&&o!==(o=d[4]*2)&&a(e,"width",o)},d(d){d&&l(e)}}}function M(i){let e;function r(o,d){return o[0]?I:E}let t=r(i),s=t(i);return{c(){s.c(),e=z()},m(o,d){s.m(o,d),k(o,e,d)},p(o,[d]){t===(t=r(o))&&s?s.p(o,d):(s.d(1),s=t(o),s&&(s.c(),s.m(e.parentNode,e)))},i:v,o:v,d(o){o&&l(e),s.d(o)}}}function N(i,e,r){let{determinate:t=!1}=e,{normalizedRadius:s=0}=e,{strokeDashoffset:o=0}=e,{circumference:d=0}=e,{radius:n=60}=e,{stroke:u=8}=e,{color:h="blue"}=e;return i.$$set=c=>{"determinate"in c&&r(0,t=c.determinate),"normalizedRadius"in c&&r(1,s=c.normalizedRadius),"strokeDashoffset"in c&&r(2,o=c.strokeDashoffset),"circumference"in c&&r(3,d=c.circumference),"radius"in c&&r(4,n=c.radius),"stroke"in c&&r(5,u=c.stroke),"color"in c&&r(6,h=c.color)},[t,s,o,d,n,u,h]}class P extends g{constructor(e){super(),x(this,e,N,M,w,{determinate:0,normalizedRadius:1,strokeDashoffset:2,circumference:3,radius:4,stroke:5,color:6})}}function S(i){let e,r;return e=new P({props:{determinate:i[0],radius:i[1],stroke:i[2],color:i[3],strokeDashoffset:i[6],normalizedRadius:i[4],circumference:i[5]}}),{c(){R(e.$$.fragment)},m(t,s){j(e,t,s),r=!0},p(t,[s]){const o={};s&1&&(o.determinate=t[0]),s&2&&(o.radius=t[1]),s&4&&(o.stroke=t[2]),s&8&&(o.color=t[3]),s&64&&(o.strokeDashoffset=t[6]),s&16&&(o.normalizedRadius=t[4]),s&32&&(o.circumference=t[5]),e.$set(o)},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function U(i,e,r){let{determinate:t=!1}=e,{progress:s=0}=e,{radius:o=60}=e,{stroke:d=8}=e,{color:n="blue"}=e,u=0,h=0,c=0;return i.$$set=m=>{"determinate"in m&&r(0,t=m.determinate),"progress"in m&&r(7,s=m.progress),"radius"in m&&r(1,o=m.radius),"stroke"in m&&r(2,d=m.stroke),"color"in m&&r(3,n=m.color)},i.$$.update=()=>{i.$$.dirty&183&&t&&(r(4,h=o-d*2),r(5,c=h*2*Math.PI),r(6,u=c-s/100*c))},[t,o,d,n,h,c,u,s]}class y extends g{constructor(e){super(),x(this,e,U,S,w,{determinate:0,progress:7,radius:1,stroke:2,color:3})}get determinate(){return this.$$.ctx[0]}set determinate(e){this.$$set({determinate:e}),$()}get progress(){return this.$$.ctx[7]}set progress(e){this.$$set({progress:e}),$()}get radius(){return this.$$.ctx[1]}set radius(e){this.$$set({radius:e}),$()}get stroke(){return this.$$.ctx[2]}set stroke(e){this.$$set({stroke:e}),$()}get color(){return this.$$.ctx[3]}set color(e){this.$$set({color:e}),$()}}try{customElements.define("jp-progress-spinner",D(y,{determinate:{type:"Boolean"},progress:{},radius:{},stroke:{},color:{}},[],[],!1));}catch{};export{y as default};
//# sourceMappingURL=progress-spinner.wc.js.map
