import{c as ce,S as re,i as pe,f as I,s as oe,a as he,B as W,e as m,F as P,b as $,d as v,g,X as de,h as ee,j as n,Y as te,l as _,G as y,Z as be,J as se,o as ae,r as ue,D as $e,E as ve,U as ne,_ as we,$ as xe}from"./svelte.js";import"./index.js";function me(t){he(t,"svelte-dswsqg",".paginator.svelte-dswsqg{font-size:1rem}select.svelte-dswsqg{height:32px}button.svelte-dswsqg{width:32px;height:32px;background:none;border:none;border-radius:50%;cursor:pointer;transition:.3s}button.svelte-dswsqg:disabled{opacity:.5;pointer-events:none}button.svelte-dswsqg:not(:disabled):hover{background:rgba(0,0,0,.08)}")}function ge(t,e,s){const p=t.slice();return p[15]=e[s],p}function ie(t,e){let s,p=e[15]+"",l,i;return{key:t,first:null,c(){s=m("option"),l=P(p),s.__value=i=e[15],ne(s,s.__value),this.first=s},m(o,h){ee(o,s,h),n(s,l)},p(o,h){e=o,h&8&&p!==(p=e[15]+"")&&y(l,p),h&8&&i!==(i=e[15])&&(s.__value=i,ne(s,s.__value))},d(o){o&&ae(s)}}}function Pe(t){let e,s,p,l,i=[],o=new Map,h,w=t[0]*t[10]+1+"",f,j,z=(t[0]+1)*t[10]+"",O,E,R,k,B,D,c,L,X,F,K,d,S,Y,C,N,b,q,Z,G,Q,u,M,A,J,H,T,U=W(t[3]);const V=a=>a[15];for(let a=0;a<U.length;a+=1){let r=ge(t,U,a),x=V(r);o.set(x,i[a]=ie(x,r))}return{c(){e=m("div"),s=P(t[5]),p=$(),l=m("select");for(let a=0;a<i.length;a+=1)i[a].c();h=$(),f=P(w),j=P(" - "),O=P(z),E=$(),R=P(t[4]),k=$(),B=P(t[2]),D=$(),c=m("button"),L=v("svg"),X=v("path"),K=$(),d=m("button"),S=v("svg"),Y=v("path"),N=$(),b=m("button"),q=v("svg"),Z=v("path"),Q=$(),u=m("button"),M=v("svg"),A=v("path"),g(l,"class","svelte-dswsqg"),t[1]===void 0&&de(()=>t[12].call(l)),g(X,"d","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"),g(L,"xmlns","http://www.w3.org/2000/svg"),g(L,"height","1em"),g(L,"viewBox","0 0 512 512"),g(c,"type","button"),c.disabled=F=!t[0],g(c,"class","svelte-dswsqg"),g(Y,"d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"),g(S,"xmlns","http://www.w3.org/2000/svg"),g(S,"height","1em"),g(S,"viewBox","0 0 448 512"),g(d,"type","button"),d.disabled=C=!t[0],g(d,"class","svelte-dswsqg"),g(Z,"d","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"),g(q,"xmlns","http://www.w3.org/2000/svg"),g(q,"height","1em"),g(q,"viewBox","0 0 448 512"),g(b,"type","button"),b.disabled=G=t[0]==Math.ceil(t[2]/t[1])-1,g(b,"class","svelte-dswsqg"),g(A,"d","M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"),g(M,"xmlns","http://www.w3.org/2000/svg"),g(M,"height","1em"),g(M,"viewBox","0 0 512 512"),g(u,"type","button"),u.disabled=J=t[0]==Math.ceil(t[2]/t[1])-1,g(u,"class","svelte-dswsqg"),g(e,"class","paginator svelte-dswsqg")},m(a,r){ee(a,e,r),n(e,s),n(e,p),n(e,l);for(let x=0;x<i.length;x+=1)i[x]&&i[x].m(l,null);te(l,t[1],!0),n(e,h),n(e,f),n(e,j),n(e,O),n(e,E),n(e,R),n(e,k),n(e,B),n(e,D),n(e,c),n(c,L),n(L,X),n(e,K),n(e,d),n(d,S),n(S,Y),n(e,N),n(e,b),n(b,q),n(q,Z),n(e,Q),n(e,u),n(u,M),n(M,A),H||(T=[_(l,"change",t[12]),_(l,"change",t[13]),_(c,"click",t[9]),_(d,"click",t[7]),_(b,"click",t[6]),_(u,"click",t[8])],H=!0)},p(a,[r]){r&32&&y(s,a[5]),r&8&&(U=W(a[3]),i=be(i,r,V,1,a,U,o,l,we,ie,null,ge)),r&10&&te(l,a[1]),r&1025&&w!==(w=a[0]*a[10]+1+"")&&y(f,w),r&1025&&z!==(z=(a[0]+1)*a[10]+"")&&y(O,z),r&16&&y(R,a[4]),r&4&&y(B,a[2]),r&1&&F!==(F=!a[0])&&(c.disabled=F),r&1&&C!==(C=!a[0])&&(d.disabled=C),r&15&&G!==(G=a[0]==Math.ceil(a[2]/a[1])-1)&&(b.disabled=G),r&15&&J!==(J=a[0]==Math.ceil(a[2]/a[1])-1)&&(u.disabled=J)},i:se,o:se,d(a){a&&ae(e);for(let r=0;r<i.length;r+=1)i[r].d();H=!1,ue(T)}}}function fe(t,e,s){let{length:p=50}=e,{pageIndex:l=0}=e,{pageSize:i=10}=e,o=1,{pageSizeOptions:h=[5,10,25]}=e,{getRangeLabel:w="of"}=e,{itemsPerPageLabel:f="Items per page"}=e;const j=$e();function z(){s(0,l+=1)}function O(){s(0,l-=1)}function E(){s(0,l=Math.ceil(p/o)-1)}function R(){s(0,l=0)}ve(()=>{h.includes(i)&&s(10,o=i)});function k(){s(0,l=Math.floor(l*(o/i))),s(10,o=i)}function B(){i=xe(this),s(1,i),s(3,h)}const D=()=>k();return t.$$set=c=>{"length"in c&&s(2,p=c.length),"pageIndex"in c&&s(0,l=c.pageIndex),"pageSize"in c&&s(1,i=c.pageSize),"pageSizeOptions"in c&&s(3,h=c.pageSizeOptions),"getRangeLabel"in c&&s(4,w=c.getRangeLabel),"itemsPerPageLabel"in c&&s(5,f=c.itemsPerPageLabel)},t.$$.update=()=>{t.$$.dirty&7&&j("change",{pageIndex:l,pageSize:i,length:p})},[l,i,p,h,w,f,z,O,E,R,o,k,B,D]}class le extends re{constructor(e){super(),pe(this,e,fe,Pe,oe,{length:2,pageIndex:0,pageSize:1,pageSizeOptions:3,getRangeLabel:4,itemsPerPageLabel:5,nextPage:6,prevPage:7,lastPage:8,firstPage:9},me)}get length(){return this.$$.ctx[2]}set length(e){this.$$set({length:e}),I()}get pageIndex(){return this.$$.ctx[0]}set pageIndex(e){this.$$set({pageIndex:e}),I()}get pageSize(){return this.$$.ctx[1]}set pageSize(e){this.$$set({pageSize:e}),I()}get pageSizeOptions(){return this.$$.ctx[3]}set pageSizeOptions(e){this.$$set({pageSizeOptions:e}),I()}get getRangeLabel(){return this.$$.ctx[4]}set getRangeLabel(e){this.$$set({getRangeLabel:e}),I()}get itemsPerPageLabel(){return this.$$.ctx[5]}set itemsPerPageLabel(e){this.$$set({itemsPerPageLabel:e}),I()}get nextPage(){return this.$$.ctx[6]}get prevPage(){return this.$$.ctx[7]}get lastPage(){return this.$$.ctx[8]}get firstPage(){return this.$$.ctx[9]}}try{customElements.define("jp-data-paginator",ce(le,{length:{},pageIndex:{},pageSize:{},pageSizeOptions:{},getRangeLabel:{},itemsPerPageLabel:{}},[],["nextPage","prevPage","lastPage","firstPage"],!1));}catch{};export{le as default};
//# sourceMappingURL=data-paginator.wc.js.map
