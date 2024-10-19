import{c as Z,S as ee,i as te,o as z,s as se,a as ae,C as F,e as x,z as P,l as b,d as u,a2 as ne,f as J,p as r,a3 as K,m as L,B as S,$ as ie,w as N,k as Q,r as le,x as ge,G as re,Y as U,a0 as oe,a4 as ce}from"./svelte.js";import"./index.js";import{p as pe,n as ue}from"./nextPage.js";const he='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>',de=' <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>';function ve(t){ae(t,"svelte-v3fl7w",".paginator.svelte-v3fl7w{font-size:1rem}select.svelte-v3fl7w{height:32px}button.svelte-v3fl7w{width:32px;height:32px;background:none;border:none;border-radius:50%;cursor:pointer;transition:0.3s}button.svelte-v3fl7w:disabled{opacity:0.5;pointer-events:none}button.svelte-v3fl7w:not(:disabled):hover{background:rgba(0, 0, 0, 0.08)}")}function V(t,e,s){const o=t.slice();return o[15]=e[s],o}function W(t,e){let s,o=e[15]+"",i,n;return{key:t,first:null,c(){s=x("option"),i=P(o),s.__value=n=e[15],U(s,s.__value),this.first=s},m(c,p){J(c,s,p),r(s,i)},p(c,p){e=c,p&8&&o!==(o=e[15]+"")&&S(i,o),p&8&&n!==(n=e[15])&&(s.__value=n,U(s,s.__value))},d(c){c&&Q(s)}}}function be(t){let e,s,o,i,n=[],c=new Map,p,f=t[0]*t[10]+1+"",m,_,w=(t[0]+1)*t[10]+"",M,k,I,O,R,y,l,H,G,h,T,Y,d,B,q,v,j,E,A,C=F(t[3]);const D=a=>a[15];for(let a=0;a<C.length;a+=1){let g=V(t,C,a),$=D(g);c.set($,n[a]=W($,g))}return{c(){e=x("div"),s=P(t[5]),o=b(),i=x("select");for(let a=0;a<n.length;a+=1)n[a].c();p=b(),m=P(f),_=P(" - "),M=P(w),k=b(),I=P(t[4]),O=b(),R=P(t[2]),y=b(),l=x("button"),G=b(),h=x("button"),Y=b(),d=x("button"),q=b(),v=x("button"),u(i,"class","svelte-v3fl7w"),t[1]===void 0&&ne(()=>t[12].call(i)),u(l,"type","button"),l.disabled=H=!t[0],u(l,"class","svelte-v3fl7w"),u(h,"type","button"),h.disabled=T=!t[0],u(h,"class","svelte-v3fl7w"),u(d,"type","button"),d.disabled=B=t[0]==Math.ceil(t[2]/t[1])-1,u(d,"class","svelte-v3fl7w"),u(v,"type","button"),v.disabled=j=t[0]==Math.ceil(t[2]/t[1])-1,u(v,"class","svelte-v3fl7w"),u(e,"class","paginator svelte-v3fl7w")},m(a,g){J(a,e,g),r(e,s),r(e,o),r(e,i);for(let $=0;$<n.length;$+=1)n[$]&&n[$].m(i,null);K(i,t[1],!0),r(e,p),r(e,m),r(e,_),r(e,M),r(e,k),r(e,I),r(e,O),r(e,R),r(e,y),r(e,l),l.innerHTML=he,r(e,G),r(e,h),h.innerHTML=pe,r(e,Y),r(e,d),d.innerHTML=ue,r(e,q),r(e,v),v.innerHTML=de,E||(A=[L(i,"change",t[12]),L(i,"change",t[13]),L(l,"click",t[9]),L(h,"click",t[7]),L(d,"click",t[6]),L(v,"click",t[8])],E=!0)},p(a,[g]){g&32&&S(s,a[5]),g&8&&(C=F(a[3]),n=ie(n,g,D,1,a,C,c,i,oe,W,null,V)),g&10&&K(i,a[1]),g&1025&&f!==(f=a[0]*a[10]+1+"")&&S(m,f),g&1025&&w!==(w=(a[0]+1)*a[10]+"")&&S(M,w),g&16&&S(I,a[4]),g&4&&S(R,a[2]),g&1&&H!==(H=!a[0])&&(l.disabled=H),g&1&&T!==(T=!a[0])&&(h.disabled=T),g&15&&B!==(B=a[0]==Math.ceil(a[2]/a[1])-1)&&(d.disabled=B),g&15&&j!==(j=a[0]==Math.ceil(a[2]/a[1])-1)&&(v.disabled=j)},i:N,o:N,d(a){a&&Q(e);for(let g=0;g<n.length;g+=1)n[g].d();E=!1,le(A)}}}function fe(t,e,s){let{length:o=50}=e,{pageIndex:i=0}=e,{pageSize:n=10}=e,c=1,{pageSizeOptions:p=[5,10,25]}=e,{getRangeLabel:f="of"}=e,{itemsPerPageLabel:m="Items per page"}=e;const _=ge();function w(){s(0,i+=1)}function M(){s(0,i-=1)}function k(){s(0,i=Math.ceil(o/c)-1)}function I(){s(0,i=0)}re(()=>{p.includes(n)&&s(10,c=n)});function O(){s(0,i=Math.floor(i*(c/n))),s(10,c=n)}function R(){n=ce(this),s(1,n),s(3,p)}const y=()=>O();return t.$$set=l=>{"length"in l&&s(2,o=l.length),"pageIndex"in l&&s(0,i=l.pageIndex),"pageSize"in l&&s(1,n=l.pageSize),"pageSizeOptions"in l&&s(3,p=l.pageSizeOptions),"getRangeLabel"in l&&s(4,f=l.getRangeLabel),"itemsPerPageLabel"in l&&s(5,m=l.itemsPerPageLabel)},t.$$.update=()=>{t.$$.dirty&7&&_("change",{pageIndex:i,pageSize:n,length:o})},[i,n,o,p,f,m,w,M,k,I,c,O,R,y]}class X extends ee{constructor(e){super(),te(this,e,fe,be,se,{length:2,pageIndex:0,pageSize:1,pageSizeOptions:3,getRangeLabel:4,itemsPerPageLabel:5,nextPage:6,prevPage:7,lastPage:8,firstPage:9},ve)}get length(){return this.$$.ctx[2]}set length(e){this.$$set({length:e}),z()}get pageIndex(){return this.$$.ctx[0]}set pageIndex(e){this.$$set({pageIndex:e}),z()}get pageSize(){return this.$$.ctx[1]}set pageSize(e){this.$$set({pageSize:e}),z()}get pageSizeOptions(){return this.$$.ctx[3]}set pageSizeOptions(e){this.$$set({pageSizeOptions:e}),z()}get getRangeLabel(){return this.$$.ctx[4]}set getRangeLabel(e){this.$$set({getRangeLabel:e}),z()}get itemsPerPageLabel(){return this.$$.ctx[5]}set itemsPerPageLabel(e){this.$$set({itemsPerPageLabel:e}),z()}get nextPage(){return this.$$.ctx[6]}get prevPage(){return this.$$.ctx[7]}get lastPage(){return this.$$.ctx[8]}get firstPage(){return this.$$.ctx[9]}}try{customElements.define("jp-data-paginator",Z(X,{length:{},pageIndex:{},pageSize:{},pageSizeOptions:{},getRangeLabel:{},itemsPerPageLabel:{}},[],["nextPage","prevPage","lastPage","firstPage"],!1));}catch{};export{X as default};
//# sourceMappingURL=data-paginator.wc.js.map
