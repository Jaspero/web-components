import{c as A,S as C,i as D,o as y,s as F,a as G,y as k,e as f,l as B,d as c,v as H,f as S,p as w,m as I,x as L,k as P,z as M,r as Q,H as R,I as U,K as E,E as X}from"./svelte.js";import"./index.js";import{p as V,n as W}from"./nextPage.js";function Z(a){G(a,"svelte-grhwpd",".jp-carousel-slider.svelte-grhwpd{--slider-max-width:600px}.jp-carousel-slider-container.svelte-grhwpd{position:relative;overflow:hidden;width:100%;max-width:var(--slider-max-width);margin:0 auto}.jp-carousel-slider-images.svelte-grhwpd{display:flex;transition:transform 0.3s}.jp-carousel-slider-image.svelte-grhwpd{width:calc(100% / var(--images-per-slide));flex-shrink:0;-o-object-fit:cover;object-fit:cover}.jp-carousel-slider-bar.svelte-grhwpd{position:relative;max-width:var(--slider-max-width);margin:0 auto;width:100%;height:4px;background-color:var(--border-primary)}.jp-carousel-slider-bar-bg.svelte-grhwpd{position:absolute;top:50%;transform:translateY(-50%);background-color:var(--primary-color);height:8px;transition:0.3s}.jp-carousel-prev.svelte-grhwpd,.jp-carousel-next.svelte-grhwpd{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;border-radius:50%;width:2rem;height:2rem;background:rgba(0, 0, 0, 0.5);color:white;fill:white;border:none;cursor:pointer;transition:0.3s}.jp-carousel-prev.svelte-grhwpd:hover,.jp-carousel-next.svelte-grhwpd:hover{background-color:rgba(0, 0, 0, 0.75)}.jp-carousel-prev.svelte-grhwpd{left:10px}.jp-carousel-next.svelte-grhwpd{right:10px}.jp-carousel-pagination.svelte-grhwpd{display:flex;justify-content:center;gap:0.75rem;margin-top:2rem}.jp-carousel-pagination-button.svelte-grhwpd{position:relative;width:0.875rem;height:0.875rem;border:2px solid var(--border-primary);border-radius:50%;transition:0.3s}.jp-carousel-pagination-button.svelte-grhwpd:hover{background-color:var(--background-secondary)}.jp-carousel-pagination-button-active.svelte-grhwpd{border-color:var(--primary-color);background-color:var(--primary-color)}")}function Y(a,e,t){const r=a.slice();return r[12]=e[t],r[14]=t,r}function z(a,e,t){const r=a.slice();return r[15]=e[t],r}function J(a){let e,t,r;return{c(){e=f("img"),c(e,"class","jp-carousel-slider-image svelte-grhwpd"),E(e.src,t=a[15].src)||c(e,"src",t),c(e,"alt",r=a[15].alt)},m(l,i){S(l,e,i)},p(l,i){i&1&&!E(e.src,t=l[15].src)&&c(e,"src",t),i&1&&r!==(r=l[15].alt)&&c(e,"alt",r)},d(l){l&&P(e)}}}function K(a){let e,t,r;return{c(){e=f("div"),t=f("div"),c(t,"class","jp-carousel-slider-bar-bg svelte-grhwpd"),c(t,"style",r=`width: calc(calc(${a[4]} + ${a[1]}) / ${a[0].length} * 100%);`),c(e,"class","jp-carousel-slider-bar svelte-grhwpd")},m(l,i){S(l,e,i),w(e,t)},p(l,i){i&19&&r!==(r=`width: calc(calc(${l[4]} + ${l[1]}) / ${l[0].length} * 100%);`)&&c(t,"style",r)},d(l){l&&P(e)}}}function N(a){let e,t=k(a[0]),r=[];for(let l=0;l<t.length;l+=1)r[l]=O(Y(a,t,l));return{c(){e=f("div");for(let l=0;l<r.length;l+=1)r[l].c();c(e,"class","jp-carousel-pagination svelte-grhwpd")},m(l,i){S(l,e,i);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null)},p(l,i){if(i&17){t=k(l[0]);let n;for(n=0;n<t.length;n+=1){const m=Y(l,t,n);r[n]?r[n].p(m,i):(r[n]=O(m),r[n].c(),r[n].m(e,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=t.length}},d(l){l&&P(e),M(r,l)}}}function O(a){let e,t,r;function l(){return a[10](a[14])}return{c(){e=f("button"),e.innerHTML="",c(e,"type","button"),c(e,"class","jp-carousel-pagination-button svelte-grhwpd"),X(e,"jp-carousel-pagination-button-active",a[4]===a[14])},m(i,n){S(i,e,n),t||(r=I(e,"click",l),t=!0)},p(i,n){a=i,n&16&&X(e,"jp-carousel-pagination-button-active",a[4]===a[14])},d(i){i&&P(e),t=!1,r()}}}function _(a){let e,t,r,l,i,n,m,h,u,v,b,j,$=k(a[0]),p=[];for(let o=0;o<$.length;o+=1)p[o]=J(z(a,$,o));let s=a[3]&&K(a),d=a[2]&&N(a);return{c(){e=f("div"),t=f("div"),r=f("div");for(let o=0;o<p.length;o+=1)p[o].c();i=B(),n=f("button"),m=B(),h=f("button"),u=B(),s&&s.c(),v=B(),d&&d.c(),c(r,"class","jp-carousel-slider-images svelte-grhwpd"),c(r,"style",l=`transform: translateX(-${a[4]*(100/a[1])}%);`),c(n,"type","button"),c(n,"class","jp-carousel-prev svelte-grhwpd"),c(h,"type","button"),c(h,"class","jp-carousel-next svelte-grhwpd"),c(t,"class","jp-carousel-slider-container svelte-grhwpd"),H(t,"--images-per-slide",a[1]),c(e,"class","jp-carousel-flex jp-carousel-flex-col jp-carousel-slider svelte-grhwpd")},m(o,x){S(o,e,x),w(e,t),w(t,r);for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(r,null);w(t,i),w(t,n),n.innerHTML=V,w(t,m),w(t,h),h.innerHTML=W,w(e,u),s&&s.m(e,null),w(e,v),d&&d.m(e,null),b||(j=[I(n,"click",a[6]),I(h,"click",a[5])],b=!0)},p(o,[x]){if(x&1){$=k(o[0]);let g;for(g=0;g<$.length;g+=1){const T=z(o,$,g);p[g]?p[g].p(T,x):(p[g]=J(T),p[g].c(),p[g].m(r,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=$.length}x&18&&l!==(l=`transform: translateX(-${o[4]*(100/o[1])}%);`)&&c(r,"style",l),x&2&&H(t,"--images-per-slide",o[1]),o[3]?s?s.p(o,x):(s=K(o),s.c(),s.m(e,v)):s&&(s.d(1),s=null),o[2]?d?d.p(o,x):(d=N(o),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:L,o:L,d(o){o&&P(e),M(p,o),s&&s.d(),d&&d.d(),b=!1,Q(j)}}}function ee(a,e,t){let{images:r=[]}=e,{imagesPerSlide:l=1}=e,{enablePagination:i=!1}=e,{sliderBar:n=!1}=e,{autoSlide:m=!1}=e,{interval:h=3e3}=e,u=0,v=!0,b;function j(){if(!v)return;v=!1;let s=u+l,d=r.length-s;d<l&&d!==0?t(4,u=r.length-l):d===0?t(4,u=0):l%1!==0?t(4,u=s-(l-1)):t(4,u=s),setTimeout(()=>{v=!0},300)}function $(){v&&(v=!1,u===l?t(4,u=0):u<=0?t(4,u=r.length-l):t(4,u-=l),setTimeout(()=>{v=!0},300))}R(()=>{typeof r=="string"&&t(0,r=JSON.parse(r)),m&&t(9,b=setInterval(j,h))}),U(()=>{clearInterval(b)});const p=s=>t(4,u=s);return a.$$set=s=>{"images"in s&&t(0,r=s.images),"imagesPerSlide"in s&&t(1,l=s.imagesPerSlide),"enablePagination"in s&&t(2,i=s.enablePagination),"sliderBar"in s&&t(3,n=s.sliderBar),"autoSlide"in s&&t(7,m=s.autoSlide),"interval"in s&&t(8,h=s.interval)},a.$$.update=()=>{a.$$.dirty&896&&(m?t(9,b=setInterval(j,h)):clearInterval(b))},[r,l,i,n,u,j,$,m,h,b,p]}class q extends C{constructor(e){super(),D(this,e,ee,_,F,{images:0,imagesPerSlide:1,enablePagination:2,sliderBar:3,autoSlide:7,interval:8},Z)}get images(){return this.$$.ctx[0]}set images(e){this.$$set({images:e}),y()}get imagesPerSlide(){return this.$$.ctx[1]}set imagesPerSlide(e){this.$$set({imagesPerSlide:e}),y()}get enablePagination(){return this.$$.ctx[2]}set enablePagination(e){this.$$set({enablePagination:e}),y()}get sliderBar(){return this.$$.ctx[3]}set sliderBar(e){this.$$set({sliderBar:e}),y()}get autoSlide(){return this.$$.ctx[7]}set autoSlide(e){this.$$set({autoSlide:e}),y()}get interval(){return this.$$.ctx[8]}set interval(e){this.$$set({interval:e}),y()}}try{customElements.define("jp-carousel",A(q,{images:{},imagesPerSlide:{},enablePagination:{type:"Boolean"},sliderBar:{type:"Boolean"},autoSlide:{type:"Boolean"},interval:{}},[],[],!1));}catch{};export{q as default};
//# sourceMappingURL=carousel.wc.js.map
