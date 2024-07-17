import{c as _,S as A,i as C,f as j,s as D,a as F,q as S,e as y,b as P,d as c,K as M,g as z,h as b,o as B,n as T,j as w,r as I,u as G,x as Q,O as R,M as H,m as O}from"./svelte.js";import"./index2.js";function U(a){F(a,"svelte-yjmhzk",".slider.svelte-yjmhzk{--slider-max-width:600px}.slider-container.svelte-yjmhzk{position:relative;overflow:hidden;width:100%;max-width:var(--slider-max-width);margin:0 auto}.slider-images.svelte-yjmhzk{display:flex;transition:transform 0.3s}.slider-image.svelte-yjmhzk{width:calc(100% / var(--images-per-slide));flex-shrink:0;object-fit:cover}.prev.svelte-yjmhzk,.next.svelte-yjmhzk{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;border-radius:50%;width:2rem;height:2rem;background:rgba(0, 0, 0, 0.5);color:white;fill:white;border:none;cursor:pointer;transition:0.3s}.prev.svelte-yjmhzk:hover,.next.svelte-yjmhzk:hover{background-color:rgba(0, 0, 0, 0.75)}.prev.svelte-yjmhzk{left:10px}.next.svelte-yjmhzk{right:10px}.slider-bar.svelte-yjmhzk{position:relative;max-width:var(--slider-max-width);margin:0 auto;width:100%;height:4px;background-color:var(--border-primary)}.slider-bar-bg.svelte-yjmhzk{position:absolute;top:50%;transform:translateY(-50%);background-color:var(--primary-color);height:8px;transition:0.3s}.pagination.svelte-yjmhzk{display:flex;justify-content:center;gap:0.75rem;margin-top:2rem}.pagination-button.svelte-yjmhzk{position:relative;width:0.875rem;height:0.875rem;border:2px solid var(--border-primary);border-radius:50%;transition:0.3s}.pagination-button.svelte-yjmhzk:hover{background-color:var(--background-secondary)}.pagination-button.active.svelte-yjmhzk{border-color:var(--primary-color);background-color:var(--primary-color)}")}function X(a,e,t){const i=a.slice();return i[12]=e[t],i[14]=t,i}function Y(a,e,t){const i=a.slice();return i[15]=e[t],i}function q(a){let e,t,i;return{c(){e=y("img"),c(e,"class","slider-image svelte-yjmhzk"),H(e.src,t=a[15].src)||c(e,"src",t),c(e,"alt",i=a[15].alt)},m(l,s){z(l,e,s)},p(l,s){s&1&&!H(e.src,t=l[15].src)&&c(e,"src",t),s&1&&i!==(i=l[15].alt)&&c(e,"alt",i)},d(l){l&&w(e)}}}function E(a){let e,t,i;return{c(){e=y("div"),t=y("div"),c(t,"class","slider-bar-bg svelte-yjmhzk"),c(t,"style",i=`width: calc(calc(${a[4]} + ${a[1]}) / ${a[0].length} * 100%);`),c(e,"class","slider-bar svelte-yjmhzk")},m(l,s){z(l,e,s),b(e,t)},p(l,s){s&19&&i!==(i=`width: calc(calc(${l[4]} + ${l[1]}) / ${l[0].length} * 100%);`)&&c(t,"style",i)},d(l){l&&w(e)}}}function J(a){let e,t=S(a[0]),i=[];for(let l=0;l<t.length;l+=1)i[l]=K(X(a,t,l));return{c(){e=y("div");for(let l=0;l<i.length;l+=1)i[l].c();c(e,"class","pagination svelte-yjmhzk")},m(l,s){z(l,e,s);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(e,null)},p(l,s){if(s&17){t=S(l[0]);let n;for(n=0;n<t.length;n+=1){const v=X(l,t,n);i[n]?i[n].p(v,s):(i[n]=K(v),i[n].c(),i[n].m(e,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=t.length}},d(l){l&&w(e),I(i,l)}}}function K(a){let e,t,i;function l(){return a[10](a[14])}return{c(){e=y("button"),e.innerHTML="",c(e,"type","button"),c(e,"class","pagination-button svelte-yjmhzk"),O(e,"active",a[4]===a[14])},m(s,n){z(s,e,n),t||(i=B(e,"click",l),t=!0)},p(s,n){a=s,n&16&&O(e,"active",a[4]===a[14])},d(s){s&&w(e),t=!1,i()}}}function V(a){let e,t,i,l,s,n,v,u,g,p,f,x,k=S(a[0]),m=[];for(let o=0;o<k.length;o+=1)m[o]=q(Y(a,k,o));let r=a[3]&&E(a),d=a[2]&&J(a);return{c(){e=y("div"),t=y("div"),i=y("div");for(let o=0;o<m.length;o+=1)m[o].c();s=P(),n=y("button"),n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>',v=P(),u=y("button"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>',g=P(),r&&r.c(),p=P(),d&&d.c(),c(i,"class","slider-images svelte-yjmhzk"),c(i,"style",l=`transform: translateX(-${a[4]*(100/a[1])}%);`),c(n,"type","button"),c(n,"class","prev svelte-yjmhzk"),c(u,"type","button"),c(u,"class","next svelte-yjmhzk"),c(t,"class","slider-container svelte-yjmhzk"),M(t,"--images-per-slide",a[1]),c(e,"class","flex flex-col slider svelte-yjmhzk")},m(o,$){z(o,e,$),b(e,t),b(t,i);for(let h=0;h<m.length;h+=1)m[h]&&m[h].m(i,null);b(t,s),b(t,n),b(t,v),b(t,u),b(e,g),r&&r.m(e,null),b(e,p),d&&d.m(e,null),f||(x=[B(n,"click",a[6]),B(u,"click",a[5])],f=!0)},p(o,[$]){if($&1){k=S(o[0]);let h;for(h=0;h<k.length;h+=1){const L=Y(o,k,h);m[h]?m[h].p(L,$):(m[h]=q(L),m[h].c(),m[h].m(i,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=k.length}$&18&&l!==(l=`transform: translateX(-${o[4]*(100/o[1])}%);`)&&c(i,"style",l),$&2&&M(t,"--images-per-slide",o[1]),o[3]?r?r.p(o,$):(r=E(o),r.c(),r.m(e,p)):r&&(r.d(1),r=null),o[2]?d?d.p(o,$):(d=J(o),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:T,o:T,d(o){o&&w(e),I(m,o),r&&r.d(),d&&d.d(),f=!1,G(x)}}}function W(a,e,t){let{images:i=[]}=e,{imagesPerSlide:l=1}=e,{enablePagination:s=!1}=e,{sliderBar:n=!1}=e,{autoSlide:v=!1}=e,{interval:u=3e3}=e,g=0,p=!0,f;function x(){if(!p)return;p=!1;let r=g+l,d=i.length-r;d<l&&d!==0?t(4,g=i.length-l):d===0?t(4,g=0):l%1!==0?t(4,g=r-(l-1)):t(4,g=r),setTimeout(()=>{p=!0},300)}function k(){p&&(p=!1,g===l?t(4,g=0):g<=0?t(4,g=i.length-l):t(4,g-=l),setTimeout(()=>{p=!0},300))}Q(()=>{typeof i=="string"&&t(0,i=JSON.parse(i)),v&&t(9,f=setInterval(x,u))}),R(()=>{clearInterval(f)});const m=r=>t(4,g=r);return a.$$set=r=>{"images"in r&&t(0,i=r.images),"imagesPerSlide"in r&&t(1,l=r.imagesPerSlide),"enablePagination"in r&&t(2,s=r.enablePagination),"sliderBar"in r&&t(3,n=r.sliderBar),"autoSlide"in r&&t(7,v=r.autoSlide),"interval"in r&&t(8,u=r.interval)},a.$$.update=()=>{a.$$.dirty&896&&(v?t(9,f=setInterval(x,u)):clearInterval(f))},[i,l,s,n,g,x,k,v,u,f,m]}class N extends A{constructor(e){super(),C(this,e,W,V,D,{images:0,imagesPerSlide:1,enablePagination:2,sliderBar:3,autoSlide:7,interval:8},U)}get images(){return this.$$.ctx[0]}set images(e){this.$$set({images:e}),j()}get imagesPerSlide(){return this.$$.ctx[1]}set imagesPerSlide(e){this.$$set({imagesPerSlide:e}),j()}get enablePagination(){return this.$$.ctx[2]}set enablePagination(e){this.$$set({enablePagination:e}),j()}get sliderBar(){return this.$$.ctx[3]}set sliderBar(e){this.$$set({sliderBar:e}),j()}get autoSlide(){return this.$$.ctx[7]}set autoSlide(e){this.$$set({autoSlide:e}),j()}get interval(){return this.$$.ctx[8]}set interval(e){this.$$set({interval:e}),j()}}try{customElements.define("jp-carousel",_(N,{images:{},imagesPerSlide:{},enablePagination:{type:"Boolean"},sliderBar:{type:"Boolean"},autoSlide:{type:"Boolean"},interval:{}},[],[],!1));}catch{};export{N as default};
