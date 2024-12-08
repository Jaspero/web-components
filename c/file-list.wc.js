var Se=Object.defineProperty,Ie=(i,e,t)=>e in i?Se(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Oe=(i,e,t)=>Ie(i,typeof e!="symbol"?e+"":e,t);import{c as Be,S as De,i as Ne,o as E,s as Ae,l as R,e as $,d as g,H as G,f as F,E as re,m as L,T as K,x as X,k as w,r as Q,G as Pe,n as le,z as oe,C as Te,D as k,p as y,F as q,v as ke,a0 as Z,w as ee,N as Y}from"./svelte.js";import"./index.js";import{formatDisplayFileName as qe}from"./fileNameFormatter.js";import{u as Ye}from"./upload.js";import{d as Ce}from"./delete.js";const Ue='<svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>',We='<svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 384 512"> <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>',Xe='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>';function ce(i,e,t){const a=i.slice();return a[54]=e[t],a[55]=e,a[56]=t,a}function de(i){let e;return{c(){e=$("label")},m(t,a){F(t,e,a),e.innerHTML=i[12]},p(t,a){a[0]&4096&&(e.innerHTML=t[12])},d(t){t&&w(e)}}}function Ge(i){let e,t,a,n,r,o=oe(i[6]),u=[];for(let l=0;l<o.length;l+=1)u[l]=ue(ce(i,o,l));return{c(){e=$("div");for(let l=0;l<u.length;l+=1)u[l].c();t=R(),a=$("button"),g(e,"class","jp-file-list-files"),g(a,"type","button"),g(a,"class","jp-file-list-add-more")},m(l,h){F(l,e,h);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(e,null);F(l,t,h),F(l,a,h),a.innerHTML=Xe,n||(r=L(a,"click",K(i[39])),n=!0)},p(l,h){if(h[0]&272481){o=oe(l[6]);let c;for(c=0;c<o.length;c+=1){const p=ce(l,o,c);u[c]?u[c].p(p,h):(u[c]=ue(p),u[c].c(),u[c].m(e,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=o.length}},d(l){l&&(w(e),w(t),w(a)),Te(u,l),n=!1,r()}}}function Ke(i){let e,t,a=i[0].DROP_FILES_HERE_OR+"",n,r,o,u=i[0].BROWSE_FILES+"",l,h,c,p;return{c(){e=$("div"),t=$("div"),n=k(a),r=R(),o=$("a"),l=k(u),g(e,"class","jp-file-list-info"),e.hidden=h=i[6].length!==0},m(x,V){F(x,e,V),y(e,t),y(t,n),y(t,r),y(t,o),y(o,l),c||(p=L(o,"click",i[35]),c=!0)},p(x,V){V[0]&1&&a!==(a=x[0].DROP_FILES_HERE_OR+"")&&q(n,a),V[0]&1&&u!==(u=x[0].BROWSE_FILES+"")&&q(l,u),V[0]&64&&h!==(h=x[6].length!==0)&&(e.hidden=h)},d(x){x&&w(e),c=!1,p()}}}function Je(i){let e,t,a,n,r=i[0].DROP_YOUR_FILES_HERE+"",o,u,l;return{c(){e=$("div"),t=new Z(!1),a=R(),n=$("div"),o=k(r),t.a=a,g(e,"class","jp-file-list-info")},m(h,c){F(h,e,c),t.m(Ye,e),y(e,a),y(e,n),y(n,o),u||(l=[L(e,"dragleave",i[32]),L(e,"dragend",i[33]),L(e,"drop",K(i[34]))],u=!0)},p(h,c){c[0]&1&&r!==(r=h[0].DROP_YOUR_FILES_HERE+"")&&q(o,r)},d(h){h&&w(e),u=!1,Q(l)}}}function Qe(i){let e;return{c(){e=$("div"),e.innerHTML='<div class="jp-file-list-spinner"></div>',g(e,"class","jp-file-list-loader")},m(t,a){F(t,e,a)},p:X,d(t){t&&w(e)}}}function Ze(i){let e,t;return{c(){e=new Z(!1),t=ee(),e.a=t},m(a,n){e.m(We,a,n),F(a,t,n)},p:X,d(a){a&&(w(t),e.d())}}}function et(i){let e,t;return{c(){e=new Z(!1),t=ee(),e.a=t},m(a,n){e.m(Ue,a,n),F(a,t,n)},p:X,d(a){a&&(w(t),e.d())}}}function tt(i){let e;function t(r,o){if(r[54].type==="image")return at;if(r[54].type==="video")return it;if(r[54].type==="audio")return st}let a=t(i),n=a&&a(i);return{c(){n&&n.c(),e=ee()},m(r,o){n&&n.m(r,o),F(r,e,o)},p(r,o){a===(a=t(r))&&n?n.p(r,o):(n&&n.d(1),n=a&&a(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&w(e),n&&n.d(r)}}}function st(i){let e,t,a,n;return{c(){e=$("div"),t=$("audio"),a=$("source"),Y(a.src,n=i[54].src)||g(a,"src",n),t.controls=!0,g(e,"class","jp-file-list-audio-wrapper")},m(r,o){F(r,e,o),y(e,t),y(t,a)},p(r,o){o[0]&64&&!Y(a.src,n=r[54].src)&&g(a,"src",n)},d(r){r&&w(e)}}}function it(i){let e,t,a;return{c(){e=$("video"),t=$("source"),Y(t.src,a=i[54].src)||g(t,"src",a),e.controls=!0},m(n,r){F(n,e,r),y(e,t)},p(n,r){r[0]&64&&!Y(t.src,a=n[54].src)&&g(t,"src",a)},d(n){n&&w(e)}}}function at(i){let e,t,a;return{c(){e=$("img"),Y(e.src,t=i[54].src)||g(e,"src",t),g(e,"alt",a=i[54].name)},m(n,r){F(n,e,r)},p(n,r){r[0]&64&&!Y(e.src,t=n[54].src)&&g(e,"src",t),r[0]&64&&a!==(a=n[54].name)&&g(e,"alt",a)},d(n){n&&w(e)}}}function ue(i){let e,t,a,n,r,o,u=i[54].displayedName+"",l,h,c,p,x=(i[54].size||"")+"",V,b,d,v=(i[54].saved?i[0].SAVED:"")+"",D,P,I=i[56],T,H;function C(){return i[36](i[56])}function U(_,j){return _[54].src?tt:_[54].external?et:Ze}let N=U(i),f=N(i);function S(..._){return i[37](i[56],..._)}const O=()=>i[38](e,I),B=()=>i[38](null,I);return{c(){e=$("div"),t=$("button"),a=R(),n=$("div"),f.c(),r=R(),o=$("div"),l=k(u),h=R(),c=$("div"),p=$("span"),V=k(x),b=R(),d=$("span"),D=k(v),P=R(),g(t,"type","button"),g(t,"class","jp-file-list-file-remove"),g(n,"class","jp-file-list-file-icon"),g(o,"class","jp-file-list-file-name"),ke(d,"color","rgb(26 151 26)"),g(c,"class","jp-file-list-file-info"),g(e,"class","jp-file-list-file"),G(e,"jp-file-list-file-grab",i[5])},m(_,j){F(_,e,j),y(e,t),t.innerHTML=Ce,y(e,a),y(e,n),f.m(n,null),y(e,r),y(e,o),y(o,l),y(e,h),y(e,c),y(c,p),y(p,V),y(c,b),y(c,d),y(d,D),y(e,P),O(),T||(H=[L(t,"mousedown",K(C)),L(e,"mousedown",S)],T=!0)},p(_,j){i=_,N===(N=U(i))&&f?f.p(i,j):(f.d(1),f=N(i),f&&(f.c(),f.m(n,null))),j[0]&64&&u!==(u=i[54].displayedName+"")&&q(l,u),j[0]&64&&x!==(x=(i[54].size||"")+"")&&q(V,x),j[0]&65&&v!==(v=(i[54].saved?i[0].SAVED:"")+"")&&q(D,v),I!==i[56]&&(B(),I=i[56],O()),j[0]&32&&G(e,"jp-file-list-file-grab",i[5])},d(_){_&&w(e),f.d(),B(),T=!1,Q(H)}}}function nt(i){let e,t,a,n,r,o,u,l,h,c,p=i[1]&&de(i);function x(d,v){return d[9]?Qe:d[10]?Je:d[6].length===0?Ke:Ge}let V=x(i),b=V(i);return{c(){e=R(),p&&p.c(),t=R(),a=$("div"),b.c(),n=R(),r=$("input"),u=R(),l=$("input"),g(a,"class","jp-file-list-dropzone"),G(a,"jp-file-list-dropzone-fullBorder",i[10]),g(r,"type","file"),r.multiple=!0,g(r,"accept",o=i[4]&&i[4].acceptedFiles),r.hidden=!0,g(l,"type","text"),g(l,"id",i[2]),g(l,"name",i[3]),l.hidden=!0},m(d,v){F(d,e,v),p&&p.m(d,v),F(d,t,v),F(d,a,v),b.m(a,null),F(d,n,v),F(d,r,v),i[41](r),F(d,u,v),F(d,l,v),re(l,i[7]),h||(c=[L(document,"mousemove",i[16]),L(document,"mouseup",i[17]),L(a,"dragover",K(i[40])),L(r,"change",i[42]),L(l,"input",i[43])],h=!0)},p(d,v){d[1]?p?p.p(d,v):(p=de(d),p.c(),p.m(t.parentNode,t)):p&&(p.d(1),p=null),V===(V=x(d))&&b?b.p(d,v):(b.d(1),b=V(d),b&&(b.c(),b.m(a,null))),v[0]&1024&&G(a,"jp-file-list-dropzone-fullBorder",d[10]),v[0]&16&&o!==(o=d[4]&&d[4].acceptedFiles)&&g(r,"accept",o),v[0]&4&&g(l,"id",d[2]),v[0]&8&&g(l,"name",d[3]),v[0]&128&&l.value!==d[7]&&re(l,d[7])},i:X,o:X,d(d){d&&(w(e),w(t),w(a),w(n),w(r),w(u),w(l)),p&&p.d(d),b.d(),i[41](null),h=!1,Q(c)}}}function rt(i,e,t){let a,{wording:n={DROP_YOUR_FILES_HERE:"Drop your files here",BROWSE_FILES:"Browse files",DROP_FILES_HERE_OR:"Drop files here or",SAVED:"saved"}}=e,{attachedInternals:r}=e,{value:o=""}=e,{label:u=""}=e,{id:l=""}=e,{name:h=""}=e,{service:c}=e,{maxfiles:p=null}=e,{minfiles:x=null}=e,{maxfilesValidationMessage:V}=e,{minfilesValidationMessage:b}=e,{validationMessages:d={}}=e,{sortable:v=!0}=e,{required:D=!1}=e,{displayFormat:P="snake"}=e,{displayFormatFunction:I}=e,T="",H=null,C=-1,U,N,f=[],S,O=!1,B=!1,_=[],j="";const me=()=>j.split(",").filter(Boolean),pe=()=>r.reportValidity(),W=Pe();async function ge(){t(9,O=!0);try{await Promise.allSettled(f.map(async s=>{if(!s.saved){const m=await c.uploadFile(s.file);s.saved=!0,s.url=m}})),t(6,f=[...f])}catch(s){console.error(s)}finally{t(9,O=!1)}}function te(s){f[s].saved&&W("removed",{url:f[s].url}),t(6,f=f.filter((m,M)=>s!==M))}function se(s){s.target.files.length&&(t(6,f=f.concat(ae(Array.from(s.target.files)))),W("change",{unsaved:f.filter(m=>!m.saved).length}),t(8,S.value=null,S))}function ie(s){s.dataTransfer.files.length&&(t(6,f=f.concat(ae(Array.from(s.dataTransfer.files)))),W("change",{unsaved:f.filter(m=>!m.saved).length})),t(10,B=!1)}const he=s=>{if(s<1024)return`${s} bytes`;if(s>=1024&&s<1048576)return`${(s/1024).toFixed(1)} KB`;if(s>=1048576)return`${(s/1048576).toFixed(1)} MB`},ae=s=>s.filter(m=>c&&c.maxSize?(W("rejected",{file:m.name,code:"maxSize"}),m.size<c.maxSize):!0).map(m=>{T=qe(m.name,P,I);let M={name:m.name,size:he(m.size),file:m,saved:!1,displayedName:T};const z=m.type.split("/")[0];return(z==="image"||z==="video"||z==="audio")&&(M.src=URL.createObjectURL(m),M.type=z),M}),ve=(s,m)=>new File([s],m),$e=async s=>{Array.isArray(s)&&(s=s.join(","));const m=s.split(",");t(6,f=(await Promise.all(m.map(async M=>{try{const z=await fetch(M),J=ve(z.blob(),M);let A={name:J.name,displayedName:J.name,size:"",file:J,saved:!0,url:M,external:!0};return/\.jpg|\.png|\.jpeg|\.webp|\.svg|\.gif/.test(M)?(A.src=M,A.type="image"):/\.mp4|\.mov/.test(M)?(A.src=M,A.type="video"):/\.mp3|\.wav/.test(M)&&(A.src=M,A.type="audio"),A}catch(z){console.error(z)}}))).filter(Boolean))};function ye(s){H&&(s.preventDefault(),H.style.transform="translateY("+(s.clientY-U)+"px)",H.style.transform+="translateX("+(s.clientX-N)+"px)")}function xe(s){if(H){s.preventDefault();const m=s.target.closest(".file");if(m){const M=[...m.parentNode.children].indexOf(m),z=f[M];t(6,f[M]=f[C],f),t(6,f[C]=z,f)}H.style="",H=null}}function ne(s,m){v&&(H=_[s],C=s,H.style.zIndex="2",H.style.pointerEvents="none",N=m.clientX,U=m.clientY)}const Fe=()=>t(10,B=!1),we=()=>t(10,B=!1),Ve=s=>ie(s),be=()=>S.click(),Me=s=>te(s),je=(s,m)=>ne(s,m);function Ee(s,m){le[s?"unshift":"push"](()=>{_[m]=s,t(11,_)})}const _e=()=>S.click(),He=()=>t(10,B=!0);function Re(s){le[s?"unshift":"push"](()=>{S=s,t(8,S)})}const Le=s=>se(s);function ze(){j=this.value,t(7,j),t(6,f),t(22,x),t(19,r),t(24,b),t(25,d),t(21,p),t(23,V),t(20,o)}return i.$$set=s=>{"wording"in s&&t(0,n=s.wording),"attachedInternals"in s&&t(19,r=s.attachedInternals),"value"in s&&t(20,o=s.value),"label"in s&&t(1,u=s.label),"id"in s&&t(2,l=s.id),"name"in s&&t(3,h=s.name),"service"in s&&t(4,c=s.service),"maxfiles"in s&&t(21,p=s.maxfiles),"minfiles"in s&&t(22,x=s.minfiles),"maxfilesValidationMessage"in s&&t(23,V=s.maxfilesValidationMessage),"minfilesValidationMessage"in s&&t(24,b=s.minfilesValidationMessage),"validationMessages"in s&&t(25,d=s.validationMessages),"sortable"in s&&t(5,v=s.sortable),"required"in s&&t(26,D=s.required),"displayFormat"in s&&t(27,P=s.displayFormat),"displayFormatFunction"in s&&t(28,I=s.displayFormatFunction)},i.$$.update=()=>{i.$$.dirty[0]&1048576&&(t(6,f=[]),o&&(!Array.isArray(o)||o.length)&&(t(9,O=!0),$e(o),t(9,O=!1))),i.$$.dirty[0]&65536192&&(t(7,j=f.filter(s=>s.saved).map(s=>s.url).join(",")),x&&f.length<x?r.setValidity({customError:!0},b||d.minfiles||"Not enough files."):p&&f.length>p?r.setValidity({customError:!0},V||d.maxfiles||"Too many files."):r.setValidity({}),r.checkValidity(),r.setFormValue(j),W("value",{value:j})),i.$$.dirty[0]&67108866&&t(12,a=D?`${u} *`:u)},[n,u,l,h,c,v,f,j,S,O,B,_,a,te,se,ie,ye,xe,ne,r,o,p,x,V,b,d,D,P,I,me,pe,ge,Fe,we,Ve,be,Me,je,Ee,_e,He,Re,Le,ze]}class fe extends De{constructor(e){super(),Ne(this,e,rt,nt,Ae,{wording:0,attachedInternals:19,value:20,label:1,id:2,name:3,service:4,maxfiles:21,minfiles:22,maxfilesValidationMessage:23,minfilesValidationMessage:24,validationMessages:25,sortable:5,required:26,displayFormat:27,displayFormatFunction:28,getValue:29,reportValidity:30,save:31},null,[-1,-1])}get wording(){return this.$$.ctx[0]}set wording(e){this.$$set({wording:e}),E()}get attachedInternals(){return this.$$.ctx[19]}set attachedInternals(e){this.$$set({attachedInternals:e}),E()}get value(){return this.$$.ctx[20]}set value(e){this.$$set({value:e}),E()}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),E()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),E()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),E()}get service(){return this.$$.ctx[4]}set service(e){this.$$set({service:e}),E()}get maxfiles(){return this.$$.ctx[21]}set maxfiles(e){this.$$set({maxfiles:e}),E()}get minfiles(){return this.$$.ctx[22]}set minfiles(e){this.$$set({minfiles:e}),E()}get maxfilesValidationMessage(){return this.$$.ctx[23]}set maxfilesValidationMessage(e){this.$$set({maxfilesValidationMessage:e}),E()}get minfilesValidationMessage(){return this.$$.ctx[24]}set minfilesValidationMessage(e){this.$$set({minfilesValidationMessage:e}),E()}get validationMessages(){return this.$$.ctx[25]}set validationMessages(e){this.$$set({validationMessages:e}),E()}get sortable(){return this.$$.ctx[5]}set sortable(e){this.$$set({sortable:e}),E()}get required(){return this.$$.ctx[26]}set required(e){this.$$set({required:e}),E()}get displayFormat(){return this.$$.ctx[27]}set displayFormat(e){this.$$set({displayFormat:e}),E()}get displayFormatFunction(){return this.$$.ctx[28]}set displayFormatFunction(e){this.$$set({displayFormatFunction:e}),E()}get getValue(){return this.$$.ctx[29]}get reportValidity(){return this.$$.ctx[30]}get save(){return this.$$.ctx[31]}}try{customElements.define("jp-file-list",Be(fe,{wording:{},attachedInternals:{},value:{},label:{},id:{},name:{},service:{},maxfiles:{},minfiles:{},maxfilesValidationMessage:{},minfilesValidationMessage:{},validationMessages:{},sortable:{type:"Boolean"},required:{type:"Boolean"},displayFormat:{},displayFormatFunction:{}},[],["getValue","reportValidity","save"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},Oe(e,"formAssociated",!0),e}));}catch{};export{fe as default};
//# sourceMappingURL=file-list.wc.js.map
