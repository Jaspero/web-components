import{c as j,S as B,i as C,f as y,s as _,a as z,y as D,e as b,b as E,d as m,g as v,h as A,L as G,o as $,z as R,A as S,B as W,C as X,D as Y,j as g,r as H,H as L,G as q}from"./svelte.js";import"./index2.js";import{c as F}from"./clickOutside.js";function I(t){z(t,"svelte-hx9f2c",".tooltip.svelte-hx9f2c.svelte-hx9f2c{position:relative}.tooltip.svelte-hx9f2c span.svelte-hx9f2c{text-decoration:underline;text-decoration-style:dotted}.cloud.svelte-hx9f2c.svelte-hx9f2c{padding:5px;background-color:var(--tertiary-color);color:#000;border-radius:4px;max-width:250px}")}function J(t){let e,n,o;return{c(){e=b("span"),q(e,"cursor","pointer"),m(e,"class","svelte-hx9f2c")},m(l,a){v(l,e,a),e.innerHTML=t[0],t[12](e),n||(o=$(e,"click",t[11]),n=!0)},p(l,a){a&1&&(e.innerHTML=l[0])},d(l){l&&g(e),t[12](null),n=!1,o()}}}function K(t){let e,n,o;return{c(){e=b("span"),m(e,"class","svelte-hx9f2c")},m(l,a){v(l,e,a),e.innerHTML=t[0],n||(o=[$(e,"mouseover",t[8]),$(e,"mouseout",t[9]),$(e,"mousemove",t[10])],n=!0)},p(l,a){a&1&&(e.innerHTML=l[0])},d(l){l&&g(e),n=!1,H(o)}}}function N(t){let e,n,o,l,a,h,c;function f(s,d){return s[1]=="dynamic"?K:J}let p=f(t),r=p(t);const x=t[7].default,u=D(x,t,t[6],null);return{c(){e=b("div"),r.c(),n=E(),o=b("div"),u&&u.c(),m(o,"class","cloud svelte-hx9f2c"),m(o,"style",l=`position: ${t[1]=="static"?"absolute":"fixed"};`+t[4]),o.hidden=!0,m(e,"class","tooltip svelte-hx9f2c")},m(s,d){v(s,e,d),r.m(e,null),A(e,n),A(e,o),u&&u.m(o,null),t[13](o),a=!0,h||(c=[G(F.call(null,o)),$(o,"click_outside",t[14])],h=!0)},p(s,[d]){p===(p=f(s))&&r?r.p(s,d):(r.d(1),r=p(s),r&&(r.c(),r.m(e,n))),u&&u.p&&(!a||d&64)&&R(u,x,s,s[6],a?W(x,s[6],d,null):S(s[6]),null),(!a||d&18&&l!==(l=`position: ${s[1]=="static"?"absolute":"fixed"};`+s[4]))&&m(o,"style",l)},i(s){a||(X(u,s),a=!0)},o(s){Y(u,s),a=!1},d(s){s&&g(e),r.d(),u&&u.d(s),t[13](null),h=!1,H(c)}}}function O(t,e,n){let{$$slots:o={},$$scope:l}=e,{label:a="label"}=e,{mode:h="static"}=e,c,f,p="";function r(){c.removeAttribute("hidden");const i=f.getBoundingClientRect();window.innerWidth-i.right<250?n(4,p=`
        top: 0;
        left: -101%;
      `):n(4,p=`
        top: 0;
        left: ${i.right-i.x+5}px; 
      `)}const x=()=>c.removeAttribute("hidden"),u=()=>c.setAttribute("hidden","true"),s=i=>{n(2,c.style.left=i.pageX+10+"px",c),n(2,c.style.top=i.pageY+10+"px",c)},d=()=>r();function T(i){L[i?"unshift":"push"](()=>{f=i,n(3,f)})}function k(i){L[i?"unshift":"push"](()=>{c=i,n(2,c)})}const w=()=>{c.hasAttribute("hidden")||c.setAttribute("hidden","true")};return t.$$set=i=>{"label"in i&&n(0,a=i.label),"mode"in i&&n(1,h=i.mode),"$$scope"in i&&n(6,l=i.$$scope)},[a,h,c,f,p,r,l,o,x,u,s,d,T,k,w]}class M extends B{constructor(e){super(),C(this,e,O,N,_,{label:0,mode:1},I)}get label(){return this.$$.ctx[0]}set label(e){this.$$set({label:e}),y()}get mode(){return this.$$.ctx[1]}set mode(e){this.$$set({mode:e}),y()}}try{customElements.define("jp-tooltip",j(M,{label:{},mode:{}},["default"],[],!0));}catch{};export{M as default};
