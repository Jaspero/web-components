import{c as ge,S as de,i as me,o as k,s as pe,a as fe,C as S,e as x,l as Y,y as ve,d as g,f as B,m as P,w as K,k as M,D as L,r as R,G as be,H as ye,I as $e,J as E,p as w,v as N,K as xe,A as q,L as ze,M as we,n as Ce}from"./svelte.js";import"./index.js";const{window:F}=$e;function ke(l){fe(l,"svelte-149hrz0",".gallery.svelte-149hrz0{position:relative}.image-container.svelte-149hrz0{position:absolute}.image.svelte-149hrz0{width:100%;height:auto;cursor:pointer;display:block}.image.svelte-149hrz0:hover{transform:scale(1.002)}.slider.svelte-149hrz0{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.9);display:flex;justify-content:center;align-items:center;z-index:1000;overflow:auto}.slider-container.svelte-149hrz0{position:relative;width:100%;max-height:100%;overflow:hidden}.slider-images.svelte-149hrz0{display:flex;transition:transform 0.3s;width:100%}.slider-image.svelte-149hrz0{flex-shrink:0;width:100%;max-height:90vh;-o-object-fit:contain;object-fit:contain}.prev.svelte-149hrz0,.next.svelte-149hrz0{position:absolute;top:50%;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;border-radius:50%;width:2rem;height:2rem;background:rgba(0, 0, 0, 0.5);color:white;border:none;cursor:pointer;transition:0.3s}.prev.svelte-149hrz0:hover,.next.svelte-149hrz0:hover{background-color:rgba(0, 0, 0, 0.75)}.prev.svelte-149hrz0{left:10px}.next.svelte-149hrz0{right:10px}.close.svelte-149hrz0{position:absolute;top:10px;right:10px;background:none;border:none;color:white;font-size:2rem;cursor:pointer}.slider-bar.svelte-149hrz0{position:relative;width:100%;height:4px;background-color:gray;margin-top:1rem}.slider-bar-bg.svelte-149hrz0{position:absolute;top:0;left:0;height:4px;background-color:white}.pagination.svelte-149hrz0{display:flex;justify-content:center;gap:0.5rem;margin-top:1rem}.pagination-button.svelte-149hrz0{width:10px;height:10px;border-radius:50%;background:gray;border:none;cursor:pointer}")}function J(l,e,t){const n=l.slice();return n[29]=e[t],n[31]=t,n}function Q(l,e,t){const n=l.slice();return n[32]=e[t],n}function U(l,e,t){const n=l.slice();return n[32]=e[t],n[31]=t,n}function V(l){let e,t,n,i,c,s,a;function d(){return l[21](l[31])}return{c(){e=x("div"),t=x("img"),c=Y(),g(t,"class","image svelte-149hrz0"),E(t.src,n=l[32].src)||g(t,"src",n),g(t,"alt",i=l[32].alt),g(e,"class","image-container svelte-149hrz0")},m(o,f){B(o,e,f),w(e,t),w(e,c),s||(a=P(t,"click",d),s=!0)},p(o,f){l=o,f[0]&1&&!E(t.src,n=l[32].src)&&g(t,"src",n),f[0]&1&&i!==(i=l[32].alt)&&g(t,"alt",i)},d(o){o&&M(e),s=!1,a()}}}function Z(l){let e,t,n,i,c,s,a,d,o,f,h,C,z,$=S(l[0]),v=[];for(let u=0;u<$.length;u+=1)v[u]=ee(Q(l,$,u));let b=l[2]&&te(l),m=l[1]&&ne(l);return{c(){e=x("div"),t=x("div"),n=x("div");for(let u=0;u<v.length;u+=1)v[u].c();i=Y(),c=x("button"),c.textContent="\u2190",s=Y(),a=x("button"),a.textContent="\u2192",d=Y(),o=x("button"),o.textContent="\xD7",f=Y(),b&&b.c(),h=Y(),m&&m.c(),g(n,"class","slider-images svelte-149hrz0"),N(n,"transform","translateX(-"+l[5]*100+"%)"),g(c,"type","button"),g(c,"class","prev svelte-149hrz0"),g(a,"type","button"),g(a,"class","next svelte-149hrz0"),g(o,"type","button"),g(o,"class","close svelte-149hrz0"),g(t,"class","slider-container svelte-149hrz0"),g(e,"class","slider svelte-149hrz0")},m(u,y){B(u,e,y),w(e,t),w(t,n);for(let p=0;p<v.length;p+=1)v[p]&&v[p].m(n,null);w(t,i),w(t,c),w(t,s),w(t,a),w(t,d),w(t,o),w(e,f),b&&b.m(e,null),w(e,h),m&&m.m(e,null),C||(z=[P(c,"click",l[9]),P(a,"click",l[8]),P(o,"click",l[11]),P(t,"click",xe(l[20])),P(e,"click",l[11])],C=!0)},p(u,y){if(y[0]&1){$=S(u[0]);let p;for(p=0;p<$.length;p+=1){const A=Q(u,$,p);v[p]?v[p].p(A,y):(v[p]=ee(A),v[p].c(),v[p].m(n,null))}for(;p<v.length;p+=1)v[p].d(1);v.length=$.length}y[0]&32&&N(n,"transform","translateX(-"+u[5]*100+"%)"),u[2]?b?b.p(u,y):(b=te(u),b.c(),b.m(e,h)):b&&(b.d(1),b=null),u[1]?m?m.p(u,y):(m=ne(u),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},d(u){u&&M(e),L(v,u),b&&b.d(),m&&m.d(),C=!1,R(z)}}}function ee(l){let e,t,n;return{c(){e=x("img"),g(e,"class","slider-image svelte-149hrz0"),E(e.src,t=l[32].src)||g(e,"src",t),g(e,"alt",n=l[32].alt)},m(i,c){B(i,e,c)},p(i,c){c[0]&1&&!E(e.src,t=i[32].src)&&g(e,"src",t),c[0]&1&&n!==(n=i[32].alt)&&g(e,"alt",n)},d(i){i&&M(e)}}}function te(l){let e,t;return{c(){e=x("div"),t=x("div"),g(t,"class","slider-bar-bg svelte-149hrz0"),N(t,"width",(l[5]+1)/l[0].length*100+"%"),g(e,"class","slider-bar svelte-149hrz0")},m(n,i){B(n,e,i),w(e,t)},p(n,i){i[0]&33&&N(t,"width",(n[5]+1)/n[0].length*100+"%")},d(n){n&&M(e)}}}function ne(l){let e,t=S(l[0]),n=[];for(let i=0;i<t.length;i+=1)n[i]=le(J(l,t,i));return{c(){e=x("div");for(let i=0;i<n.length;i+=1)n[i].c();g(e,"class","pagination svelte-149hrz0")},m(i,c){B(i,e,c);for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(e,null)},p(i,c){if(c[0]&33){t=S(i[0]);let s;for(s=0;s<t.length;s+=1){const a=J(i,t,s);n[s]?n[s].p(a,c):(n[s]=le(a),n[s].c(),n[s].m(e,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=t.length}},d(i){i&&M(e),L(n,i)}}}function le(l){let e,t,n;function i(){return l[23](l[31])}return{c(){e=x("button"),g(e,"type","button"),g(e,"class","pagination-button svelte-149hrz0"),q(e,"active",l[5]===l[31])},m(c,s){B(c,e,s),t||(n=P(e,"click",i),t=!0)},p(c,s){l=c,s[0]&32&&q(e,"active",l[5]===l[31])},d(c){c&&M(e),t=!1,n()}}}function Be(l){let e,t,n,i,c,s=S(l[0]),a=[];for(let o=0;o<s.length;o+=1)a[o]=V(U(l,s,o));let d=l[3]&&Z(l);return{c(){e=x("div");for(let o=0;o<a.length;o+=1)a[o].c();t=Y(),d&&d.c(),n=ve(),g(e,"class","gallery svelte-149hrz0")},m(o,f){B(o,e,f);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(e,null);l[22](e),B(o,t,f),d&&d.m(o,f),B(o,n,f),i||(c=[P(F,"keydown",l[6]),P(F,"resize",l[7])],i=!0)},p(o,f){if(f[0]&1025){s=S(o[0]);let h;for(h=0;h<s.length;h+=1){const C=U(o,s,h);a[h]?a[h].p(C,f):(a[h]=V(C),a[h].c(),a[h].m(e,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=s.length}o[3]?d?d.p(o,f):(d=Z(o),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null)},i:K,o:K,d(o){o&&(M(e),M(t),M(n)),L(a,o),l[22](null),d&&d.d(o),i=!1,R(c)}}}function Pe(l,e,t){let{images:n=[]}=e,{enablePagination:i=!1}=e,{sliderBar:c=!1}=e,{autoSlide:s=!1}=e,{interval:a=3e3}=e,{columnCount:d=3}=e,{columnCountTable:o=2}=e,{columnCountMobile:f=1}=e,{gapX:h=10}=e,{gapY:C=10}=e,z,$=[],v=[],b=!1,m=0,u=!0,y,p;be(()=>{typeof n=="string"&&t(0,n=JSON.parse(n)),oe()}),ye(()=>{y&&clearInterval(y)});async function A(r){r.key==="Escape"?D():r.key==="ArrowLeft"?O():r.key==="ArrowRight"&&H()}async function oe(){const r=Array.from(z.getElementsByTagName("img"));await Promise.all(r.map(T=>T.complete?Promise.resolve():new Promise(j=>{T.onload=j,T.onerror=j}))),W()}function W(){if(!z||!z.offsetParent)return;v=[],$=[];const r=z.clientWidth,T=window.innerWidth<600?f:window.innerWidth<1024?o:d,j=(r-(T-1)*h)/T;for(let X=0;X<T;X++)$[X]=0;Array.from(z.children).forEach((X,G)=>{X.style.width=`${j}px`,v[G]=X.clientHeight;const I=$.indexOf(Math.min(...$)),ue=I*(j+h),he=$[I];X.style.transform=`translate3d(${ue}px, ${he}px, 0)`,$[I]+=v[G]+C}),t(4,z.style.height=`${Math.max(...$)}px`,z)}function H(){u&&(u=!1,t(5,m=(m+1)%n.length),setTimeout(()=>{u=!0},300))}function O(){u&&(u=!1,t(5,m=(m-1+n.length)%n.length),setTimeout(()=>{u=!0},300))}async function _(r){p=window.scrollY,t(5,m=r),t(3,b=!0),document.body.style.position="fixed",document.body.style.top=`-${p}px`,document.body.style.width="100%"}async function D(){t(3,b=!1),document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,p),await ze(),W()}function se(r){we.call(this,l,r)}const re=r=>_(r);function ae(r){Ce[r?"unshift":"push"](()=>{z=r,t(4,z)})}const ce=r=>t(5,m=r);return l.$$set=r=>{"images"in r&&t(0,n=r.images),"enablePagination"in r&&t(1,i=r.enablePagination),"sliderBar"in r&&t(2,c=r.sliderBar),"autoSlide"in r&&t(12,s=r.autoSlide),"interval"in r&&t(13,a=r.interval),"columnCount"in r&&t(14,d=r.columnCount),"columnCountTable"in r&&t(15,o=r.columnCountTable),"columnCountMobile"in r&&t(16,f=r.columnCountMobile),"gapX"in r&&t(17,h=r.gapX),"gapY"in r&&t(18,C=r.gapY)},l.$$.update=()=>{l.$$.dirty[0]&536584&&(b?s&&t(19,y=setInterval(H,a)):y&&(clearInterval(y),t(19,y=null)))},[n,i,c,b,z,m,A,W,H,O,_,D,s,a,d,o,f,h,C,y,se,re,ae,ce]}class ie extends de{constructor(e){super(),me(this,e,Pe,Be,pe,{images:0,enablePagination:1,sliderBar:2,autoSlide:12,interval:13,columnCount:14,columnCountTable:15,columnCountMobile:16,gapX:17,gapY:18},ke,[-1,-1])}get images(){return this.$$.ctx[0]}set images(e){this.$$set({images:e}),k()}get enablePagination(){return this.$$.ctx[1]}set enablePagination(e){this.$$set({enablePagination:e}),k()}get sliderBar(){return this.$$.ctx[2]}set sliderBar(e){this.$$set({sliderBar:e}),k()}get autoSlide(){return this.$$.ctx[12]}set autoSlide(e){this.$$set({autoSlide:e}),k()}get interval(){return this.$$.ctx[13]}set interval(e){this.$$set({interval:e}),k()}get columnCount(){return this.$$.ctx[14]}set columnCount(e){this.$$set({columnCount:e}),k()}get columnCountTable(){return this.$$.ctx[15]}set columnCountTable(e){this.$$set({columnCountTable:e}),k()}get columnCountMobile(){return this.$$.ctx[16]}set columnCountMobile(e){this.$$set({columnCountMobile:e}),k()}get gapX(){return this.$$.ctx[17]}set gapX(e){this.$$set({gapX:e}),k()}get gapY(){return this.$$.ctx[18]}set gapY(e){this.$$set({gapY:e}),k()}}try{customElements.define("jp-image-gallery",ge(ie,{images:{},enablePagination:{type:"Boolean"},sliderBar:{type:"Boolean"},autoSlide:{type:"Boolean"},interval:{},columnCount:{},columnCountTable:{},columnCountMobile:{},gapX:{},gapY:{}},[],[],!1));}catch{};export{ie as default};
//# sourceMappingURL=image-gallery.wc.js.map