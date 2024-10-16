var Be=Object.defineProperty,Ce=(s,e,t)=>e in s?Be(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ne=(s,e,t)=>Ce(s,typeof e!="symbol"?e+"":e,t);import{c as Oe,S as ze,i as _e,f as k,s as Ke,b as N,e as V,F as R,d as Q,g as d,t as C,h as A,j as g,V as Z,l as O,p as le,G as W,J as se,o as E,r as ne,D as Ue,B as oe,z as Ye,Y as Fe,Z as Je,A as ae,y as me,Q as Pe}from"./svelte.js";import"./index.js";import{clickOutside as Re}from"./click-outside.js";function he(s,e,t){const l=s.slice();return l[51]=e[t],l[52]=e,l[53]=t,l}function pe(s){let e;return{c(){e=V("div"),d(e,"class","jp-multisearch-label")},m(t,l){A(t,e,l),e.innerHTML=s[7]},p(t,l){l[0]&128&&(e.innerHTML=t[7])},d(t){t&&E(e)}}}function Qe(s){let e;return{c(){e=V("span"),d(e,"class","jp-multisearch-select-label"),C(e,"jp-multisearch-select-label-move",s[0]||s[12])},m(t,l){A(t,e,l),e.innerHTML=s[7]},p(t,l){l[0]&128&&(e.innerHTML=t[7]),l[0]&4097&&C(e,"jp-multisearch-select-label-move",t[0]||t[12])},d(t){t&&E(e)}}}function Ze(s){let e,t=s[1].LOADING+"",l;return{c(){e=V("span"),l=R(t),d(e,"class","jp-multisearch-select-label")},m(a,i){A(a,e,i),g(e,l)},p(a,i){i[0]&2&&t!==(t=a[1].LOADING+"")&&W(l,t)},d(a){a&&E(e)}}}function ge(s){let e;return{c(){e=V("span"),d(e,"class","jp-multisearch-select-hint")},m(t,l){A(t,e,l),e.innerHTML=s[4]},p(t,l){l[0]&16&&(e.innerHTML=t[4])},d(t){t&&E(e)}}}function fe(s){let e,t,l,a,i=[],v=new Map,h,M,b,I,o=s[9].search&&$e(s),j=oe(s[11]);const T=c=>c[51];for(let c=0;c<j.length;c+=1){let y=he(s,j,c),D=T(y);v.set(D,i[c]=xe(D,y))}let $=s[16]&&be(),p=s[9].loadMore&&!s[16]&&ye(s);return{c(){e=V("div"),t=V("div"),o&&o.c(),l=N(),a=V("div");for(let c=0;c<i.length;c+=1)i[c].c();h=N(),$&&$.c(),M=N(),p&&p.c(),d(a,"class","jp-multisearch-menu-buttons"),d(t,"class","jp-multisearch-menu"),d(t,"style",s[18]),d(t,"role","dialog"),d(e,"class","jp-multisearch-overlay")},m(c,y){A(c,e,y),g(e,t),o&&o.m(t,null),g(t,l),g(t,a);for(let D=0;D<i.length;D+=1)i[D]&&i[D].m(a,null);g(a,h),$&&$.m(a,null),g(t,M),p&&p.m(t,null),b||(I=[Ye(Re.call(null,t)),O(t,"click_outside",s[44]),O(t,"keydown",s[24])],b=!0)},p(c,y){c[9].search?o?o.p(c,y):(o=$e(c),o.c(),o.m(t,l)):o&&(o.d(1),o=null),y[0]&531456&&(j=oe(c[11]),i=Fe(i,y,T,1,c,j,v,a,Je,xe,h,he)),c[16]?$||($=be(),$.c(),$.m(a,null)):$&&($.d(1),$=null),c[9].loadMore&&!c[16]?p?p.p(c,y):(p=ye(c),p.c(),p.m(t,null)):p&&(p.d(1),p=null),y[0]&262144&&d(t,"style",c[18])},d(c){c&&E(e),o&&o.d();for(let y=0;y<i.length;y+=1)i[y].d();$&&$.d(),p&&p.d(),b=!1,ne(I)}}}function $e(s){let e,t,l,a,i,v;return{c(){e=V("div"),t=V("span"),t.textContent="Search",l=N(),a=V("input"),d(t,"class","jp-multisearch-search-label"),C(t,"jp-multisearch-search-label-move",s[21]||s[17]),d(a,"name","search"),d(a,"type","text"),d(a,"class","jp-multisearch-search-input"),d(e,"class","jp-multisearch-search-field")},m(h,M){A(h,e,M),g(e,t),g(e,l),g(e,a),Z(a,s[17]),i||(v=[O(a,"input",s[37]),O(a,"input",s[38]),O(a,"focus",s[39]),O(a,"blur",s[40])],i=!0)},p(h,M){M[0]&2228224&&C(t,"jp-multisearch-search-label-move",h[21]||h[17]),M[0]&131072&&a.value!==h[17]&&Z(a,h[17])},d(h){h&&E(e),i=!1,ne(v)}}}function ve(s){let e,t;return{c(){e=Q("svg"),t=Q("path"),d(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","1rem"),d(e,"height","1rem"),d(e,"viewBox","0 0 448 512")},m(l,a){A(l,e,a),g(e,t)},d(l){l&&E(e)}}}function xe(s,e){let t,l,a=(e[51].label||e[51].value)+"",i,v,h,M=e[53],b,I,o=e[51].selected&&ve();const j=()=>e[41](t,M),T=()=>e[41](null,M);function $(){return e[42](e[51],e[52],e[53])}return{key:s,first:null,c(){t=V("button"),l=V("span"),i=R(a),v=N(),o&&o.c(),d(t,"type","button"),d(t,"class","jp-multisearch-menu-button"),t.disabled=h=e[51].disabled,C(t,"jp-multisearch-menu-button-selected",e[51].selected),this.first=t},m(p,c){A(p,t,c),g(t,l),g(l,i),g(t,v),o&&o.m(t,null),j(),b||(I=O(t,"click",le($)),b=!0)},p(p,c){e=p,c[0]&2048&&a!==(a=(e[51].label||e[51].value)+"")&&W(i,a),e[51].selected?o||(o=ve(),o.c(),o.m(t,null)):o&&(o.d(1),o=null),c[0]&2048&&h!==(h=e[51].disabled)&&(t.disabled=h),M!==e[53]&&(T(),M=e[53],j()),c[0]&2048&&C(t,"jp-multisearch-menu-button-selected",e[51].selected)},d(p){p&&E(t),o&&o.d(),T(),b=!1,I()}}}function be(s){let e;return{c(){e=V("span"),e.textContent="Loading...",ae(e,"display","block"),ae(e,"padding","0.75rem"),ae(e,"text-align","center")},m(t,l){A(t,e,l)},d(t){t&&E(e)}}}function ye(s){let e;function t(i,v){return i[15]?We:Xe}let l=t(s),a=l(s);return{c(){e=V("div"),a.c(),d(e,"class","jp-multisearch-loadmore")},m(i,v){A(i,e,v),a.m(e,null)},p(i,v){l===(l=t(i))&&a?a.p(i,v):(a.d(1),a=l(i),a&&(a.c(),a.m(e,null)))},d(i){i&&E(e),a.d()}}}function We(s){let e,t=s[1].LOADING+"",l;return{c(){e=V("button"),l=R(t),d(e,"type","button"),e.disabled=!0},m(a,i){A(a,e,i),g(e,l)},p(a,i){i[0]&2&&t!==(t=a[1].LOADING+"")&&W(l,t)},d(a){a&&E(e)}}}function Xe(s){let e,t,l;return{c(){e=V("button"),e.textContent="Load more",d(e,"type","button")},m(a,i){A(a,e,i),t||(l=O(e,"click",Pe(le(s[43]))),t=!0)},p:se,d(a){a&&E(e),t=!1,l()}}}function et(s){let e,t,l,a,i,v,h,M=(s[20]||"")+"",b,I,o,j,T,$,p,c,y,D,q=s[7]&&s[8]=="outside"&&pe(s);function Y(u,f){if(u[14])return Ze;if(u[7]&&u[8]=="inside")return Qe}let _=Y(s),x=_&&_(s),w=s[4]&&ge(s),S=s[12]&&fe(s);return{c(){q&&q.c(),e=N(),t=V("div"),l=V("input"),a=N(),i=V("button"),x&&x.c(),v=N(),h=V("span"),b=R(M),o=N(),j=Q("svg"),T=Q("path"),p=N(),w&&w.c(),c=N(),S&&S.c(),d(l,"class","jp-multisearch-hidden-input"),d(l,"tabindex","-1"),d(l,"id",s[5]),d(l,"name",s[6]),l.required=s[3],d(h,"class",I=`jp-multisearch-select-option ${s[8]=="outside"||!s[7]?"":"jp-multisearch-select-option-padding"}`),d(T,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),d(j,"xmlns","http://www.w3.org/2000/svg"),d(j,"viewBox","0 0 320 512"),d(j,"class","jp-multisearch-select-arrow"),C(j,"jp-multisearch-select-arrow-rotate",s[12]),d(i,"type","button"),d(i,"class","jp-multisearch-select"),i.disabled=$=s[2]||s[14],C(i,"jp-multisearch-select-toggled",s[12]),d(t,"class","jp-multisearch-wrapper"),C(t,"jp-multisearch-has-hint",s[4])},m(u,f){q&&q.m(u,f),A(u,e,f),A(u,t,f),g(t,l),Z(l,s[0]),g(t,a),g(t,i),x&&x.m(i,null),g(i,v),g(i,h),g(h,b),g(i,o),g(i,j),g(j,T),s[36](i),g(t,p),w&&w.m(t,null),g(t,c),S&&S.m(t,null),y||(D=[O(l,"input",s[35]),O(i,"click",le(s[23])),O(i,"keydown",s[24])],y=!0)},p(u,f){u[7]&&u[8]=="outside"?q?q.p(u,f):(q=pe(u),q.c(),q.m(e.parentNode,e)):q&&(q.d(1),q=null),f[0]&32&&d(l,"id",u[5]),f[0]&64&&d(l,"name",u[6]),f[0]&8&&(l.required=u[3]),f[0]&1&&l.value!==u[0]&&Z(l,u[0]),_===(_=Y(u))&&x?x.p(u,f):(x&&x.d(1),x=_&&_(u),x&&(x.c(),x.m(i,v))),f[0]&1048576&&M!==(M=(u[20]||"")+"")&&W(b,M),f[0]&384&&I!==(I=`jp-multisearch-select-option ${u[8]=="outside"||!u[7]?"":"jp-multisearch-select-option-padding"}`)&&d(h,"class",I),f[0]&4096&&C(j,"jp-multisearch-select-arrow-rotate",u[12]),f[0]&16388&&$!==($=u[2]||u[14])&&(i.disabled=$),f[0]&4096&&C(i,"jp-multisearch-select-toggled",u[12]),u[4]?w?w.p(u,f):(w=ge(u),w.c(),w.m(t,c)):w&&(w.d(1),w=null),u[12]?S?S.p(u,f):(S=fe(u),S.c(),S.m(t,null)):S&&(S.d(1),S=null),f[0]&16&&C(t,"jp-multisearch-has-hint",u[4])},i:se,o:se,d(u){u&&(E(e),E(t)),q&&q.d(u),x&&x.d(),s[36](null),w&&w.d(),S&&S.d(),y=!1,ne(D)}}}function tt(s,e,t){let l=[],a=!1,i=!1,v=!1,h="",{wording:M={LOADING:"Loading..."}}=e,{attachedInternals:b}=e,{minSelects:I=0}=e,{maxSelects:o=null}=e,{disabled:j=!1}=e,{required:T=!1}=e,{hint:$=""}=e,{value:p=""}=e,{internalValue:c=""}=e,{id:y=""}=e,{name:D=""}=e,{label:q=""}=e,{labelType:Y="inside"}=e;const _=()=>{var n;return U?(n=l.find(m=>m.selected))==null?void 0:n.value:l.filter(m=>m.selected).map(m=>m.value)};let{service:x}=e,{validationMessages:w={}}=e,{requiredValidationMessage:S}=e,{minselectsValidationMessage:u}=e,{maxselectsValidationMessage:f}=e,{singleSelect:U=!1}=e,ie=!1,K=!1,H,re,z=[],X="",ce,ue,F=!1;const Me=Ue(),Ve=()=>{b.reportValidity()};async function de(){t(11,l=l.filter(m=>m.selected)),t(16,v=!0);const n=await x.search(h);t(11,l=[...l,...n.map(m=>(m.selected=!1,m))]),t(16,v=!1)}function J(n){var m;if((m=n?.target)!=null&&m.closest(".menu"))return;const r=H.getBoundingClientRect(),L=window.innerHeight-r.bottom,ee=300;let B="";L<ee?B=`
        width: ${r.width}px;
        bottom: ${window.innerHeight-r.top}px;
        left: ${r.left}px;
      `:B=`
        width: ${r.width}px;
        top: ${r.bottom}px;
        left: ${r.left}px;
      `,t(18,re=B),t(12,K=!K),setTimeout(K?()=>{const G=l.findIndex(te=>!te.disabled);G!==-1&&z[G].focus()}:()=>{ie?H.nextElementSibling.focus():H.focus()},10)}function P(n,m){if(m==="next"){for(let r=n+1;r<l.length;r++)if(!l[r].disabled)return r}else if(m==="previous"){for(let r=n-1;r>=0;r--)if(!l[r].disabled)return r}return n}function je(n){if(F)return;const m=z.findIndex(L=>L===document.activeElement);let r;if(K){if(n.key==="Escape"){J(),H.focus();return}const L=n.key==="Home"||n.key==="ArrowUp"&&n.metaKey,ee=n.key==="End"||n.key==="ArrowDown"&&n.metaKey;if(L){n.preventDefault();const B=l.findIndex(G=>!G.disabled);B!==-1&&z[B].focus();return}if(ee){n.preventDefault();const B=l.slice().reverse().findIndex(te=>!te.disabled),G=B!==-1?l.length-1-B:-1;G!==-1&&z[G].focus();return}if(["ArrowDown","ArrowUp"].includes(n.key)&&(n.preventDefault(),n.key==="ArrowUp"?r=P(m,"previous"):r=P(m,"next"),z[r].focus()),n.key==="Tab"){if(n.preventDefault(),ie=!0,n.shiftKey){if(r=P(m,"previous"),m===r){J(),H.focus();return}}else if(r=P(m,"next"),m===r){J(),H.focus();return}z[r].focus()}if(/^[a-z\d]$/i.test(n.key)){clearTimeout(ce),X+=n.key;const B=l.map(G=>G.label?G.label:G.value).findIndex(G=>G.toLowerCase().includes(X.toLowerCase()));B!==-1&&z[B].focus(),ce=setTimeout(()=>{X=""},500)}}}async function Se(n){t(14,a=!0);const m=Array.isArray(n)?n:n.split(",");await Promise.all(m.map(async r=>{let L;x.getSingle?await x.getSingle(r)?(L=await x.getSingle(r),L.selected=!0):L={value:r,selected:!0}:L={value:r,selected:!0},t(11,l=[...l,L])})),t(14,a=!1)}function ke(){c=this.value,t(0,c),t(11,l),t(3,T),t(25,b),t(31,S),t(30,w),t(13,H),t(26,I),t(32,u),t(27,o),t(33,f),t(10,U),t(28,p)}function qe(n){me[n?"unshift":"push"](()=>{H=n,t(13,H)})}const Ie=()=>{v||de()};function Le(){h=this.value,t(17,h)}const Te=()=>t(21,F=!0),Ae=()=>t(21,F=!1);function Ee(n,m){me[n?"unshift":"push"](()=>{z[m]=n,t(19,z)})}const De=(n,m,r)=>{U?(t(11,l=l.map(L=>(L.selected=L===n,L))),t(12,K=!1)):t(11,m[r].selected=!n.selected,l)},He=async()=>{t(15,i=!0),t(11,l=l.concat(await x.loadMore(h))),t(15,i=!1)},Ge=()=>t(12,K=!1);return s.$$set=n=>{"wording"in n&&t(1,M=n.wording),"attachedInternals"in n&&t(25,b=n.attachedInternals),"minSelects"in n&&t(26,I=n.minSelects),"maxSelects"in n&&t(27,o=n.maxSelects),"disabled"in n&&t(2,j=n.disabled),"required"in n&&t(3,T=n.required),"hint"in n&&t(4,$=n.hint),"value"in n&&t(28,p=n.value),"internalValue"in n&&t(0,c=n.internalValue),"id"in n&&t(5,y=n.id),"name"in n&&t(6,D=n.name),"label"in n&&t(7,q=n.label),"labelType"in n&&t(8,Y=n.labelType),"service"in n&&t(9,x=n.service),"validationMessages"in n&&t(30,w=n.validationMessages),"requiredValidationMessage"in n&&t(31,S=n.requiredValidationMessage),"minselectsValidationMessage"in n&&t(32,u=n.minselectsValidationMessage),"maxselectsValidationMessage"in n&&t(33,f=n.maxselectsValidationMessage),"singleSelect"in n&&t(10,U=n.singleSelect)},s.$$.update=()=>{var n;if(s.$$.dirty[0]&4096&&(K?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY=""),s.$$.dirty[0]&1308634120|s.$$.dirty[1]&7){t(11,l=l.filter(r=>r.selected).concat(l.filter(r=>!r.selected)));const m=l.filter(r=>r.selected).length;m==0&&T?b.setValidity({customError:!0},S||w.required||"At least one item needs to be checked.",H):m<I?b.setValidity({customError:!0},u||w.minselects||"Below limit checks.",H):o!==null&&m>o?b.setValidity({customError:!0},f||w.maxselects||"Above limit checks.",H):b.setValidity({}),b.checkValidity(),t(0,c=l.filter(r=>r.selected).map(r=>r.value).join(",")),t(20,ue=l.filter(r=>r.selected).map(r=>r.label?r.label:r.value)),Me("value",U?(n=l.find(r=>r.selected))==null?void 0:n.value:l.filter(r=>r.selected).map(r=>r.value))}s.$$.dirty[0]&268435456&&(p?Se(p):t(11,l=[]))},[c,M,j,T,$,y,D,q,Y,x,U,l,K,H,a,i,v,h,re,z,ue,F,de,J,je,b,I,o,p,_,w,S,u,f,Ve,ke,qe,Ie,Le,Te,Ae,Ee,De,He,Ge]}class we extends ze{constructor(e){super(),_e(this,e,tt,et,Ke,{wording:1,attachedInternals:25,minSelects:26,maxSelects:27,disabled:2,required:3,hint:4,value:28,internalValue:0,id:5,name:6,label:7,labelType:8,getValue:29,service:9,validationMessages:30,requiredValidationMessage:31,minselectsValidationMessage:32,maxselectsValidationMessage:33,singleSelect:10,reportValidity:34},null,[-1,-1])}get wording(){return this.$$.ctx[1]}set wording(e){this.$$set({wording:e}),k()}get attachedInternals(){return this.$$.ctx[25]}set attachedInternals(e){this.$$set({attachedInternals:e}),k()}get minSelects(){return this.$$.ctx[26]}set minSelects(e){this.$$set({minSelects:e}),k()}get maxSelects(){return this.$$.ctx[27]}set maxSelects(e){this.$$set({maxSelects:e}),k()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),k()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),k()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),k()}get value(){return this.$$.ctx[28]}set value(e){this.$$set({value:e}),k()}get internalValue(){return this.$$.ctx[0]}set internalValue(e){this.$$set({internalValue:e}),k()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),k()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),k()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),k()}get labelType(){return this.$$.ctx[8]}set labelType(e){this.$$set({labelType:e}),k()}get getValue(){return this.$$.ctx[29]}get service(){return this.$$.ctx[9]}set service(e){this.$$set({service:e}),k()}get validationMessages(){return this.$$.ctx[30]}set validationMessages(e){this.$$set({validationMessages:e}),k()}get requiredValidationMessage(){return this.$$.ctx[31]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),k()}get minselectsValidationMessage(){return this.$$.ctx[32]}set minselectsValidationMessage(e){this.$$set({minselectsValidationMessage:e}),k()}get maxselectsValidationMessage(){return this.$$.ctx[33]}set maxselectsValidationMessage(e){this.$$set({maxselectsValidationMessage:e}),k()}get singleSelect(){return this.$$.ctx[10]}set singleSelect(e){this.$$set({singleSelect:e}),k()}get reportValidity(){return this.$$.ctx[34]}}try{customElements.define("jp-multisearch",Oe(we,{wording:{},attachedInternals:{},minSelects:{},maxSelects:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},internalValue:{},id:{},name:{},label:{},labelType:{},service:{},validationMessages:{},requiredValidationMessage:{},minselectsValidationMessage:{},maxselectsValidationMessage:{},singleSelect:{type:"Boolean"}},[],["getValue","reportValidity"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},Ne(e,"formAssociated",!0),e}));}catch{};export{we as default};
//# sourceMappingURL=multisearch.wc.js.map
