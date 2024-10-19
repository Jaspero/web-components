var ve=Object.defineProperty,ye=(t,a,e)=>a in t?ve(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,ge=(t,a,e)=>ye(t,typeof a!="symbol"?a+"":a,e);import{c as be,S as we,i as Fe,o as q,s as xe,l as M,e as g,y as je,d as r,f as F,p as T,m as w,N as k,w as N,k as x,x as Te,J as P,q as He,r as A,n as E,A as B,Y as J,O as Ie}from"./svelte.js";import"./index.js";import{clickOutside as qe}from"./click-outside.js";import{formatDisplayFileName as U}from"./fileNameFormatter.js";import{d as ze}from"./delete.js";const Me=' <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>',Le='<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>';function W(t){let a;return{c(){a=g("div"),r(a,"class","label")},m(e,i){F(e,a,i),a.innerHTML=t[15]},p(e,i){i[0]&32768&&(a.innerHTML=e[15])},d(e){e&&x(a)}}}function Ve(t){let a,e,i,n,u,m,v,f,j,b,y,p,d,s,H,z,I,h=t[0]&&t[1]=="inside"&&G(t),$=t[5]&&K(t);return{c(){h&&h.c(),a=M(),e=g("div"),i=g("label"),n=g("input"),m=M(),v=new Ie(!1),f=M(),j=g("div"),b=g("button"),y=M(),$&&$.c(),p=M(),d=g("span"),s=g("input"),r(n,"type","file"),r(n,"id",t[3]),r(n,"class","jp-file-upload-field-upload"),r(n,"accept",u=t[4]&&t[4].acceptedFiles),v.a=null,r(i,"for",t[3]),r(i,"class","jp-file-upload-field-icon jp-file-upload-field-icon-upload"),r(b,"type","button"),r(j,"class","jp-file-upload-field-icon jp-file-upload-field-icon-preview-button"),B(j,"jp-file-upload-field-icon-hidden",!t[10]),r(e,"class","jp-file-upload-field-icons"),r(s,"class",H=`jp-file-upload-field-input ${t[1]=="outside"||!t[0]?"":"jp-file-upload-field-input-padding"}`),r(s,"type","text"),r(s,"name",t[3]),r(s,"id",t[2]),s.disabled=t[9],r(d,"class","jp-file-upload-field-upload-container")},m(c,o){h&&h.m(c,o),F(c,a,o),F(c,e,o),T(e,i),T(i,n),t[30](n),T(i,m),v.m(Me,i),T(e,f),T(e,j),T(j,b),b.innerHTML=Le,T(e,y),$&&$.m(e,null),F(c,p,o),F(c,d,o),T(d,s),J(s,t[14]),z||(I=[w(n,"change",t[17]),w(n,"focus",t[31]),w(n,"blur",t[32]),w(b,"click",k(t[33])),w(s,"focus",t[35]),w(s,"blur",t[36]),w(s,"change",t[37]),w(s,"input",t[38])],z=!0)},p(c,o){c[0]&&c[1]=="inside"?h?h.p(c,o):(h=G(c),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),o[0]&8&&r(n,"id",c[3]),o[0]&16&&u!==(u=c[4]&&c[4].acceptedFiles)&&r(n,"accept",u),o[0]&8&&r(i,"for",c[3]),o[0]&1024&&B(j,"jp-file-upload-field-icon-hidden",!c[10]),c[5]?$?$.p(c,o):($=K(c),$.c(),$.m(e,null)):$&&($.d(1),$=null),o[0]&3&&H!==(H=`jp-file-upload-field-input ${c[1]=="outside"||!c[0]?"":"jp-file-upload-field-input-padding"}`)&&r(s,"class",H),o[0]&8&&r(s,"name",c[3]),o[0]&4&&r(s,"id",c[2]),o[0]&512&&(s.disabled=c[9]),o[0]&16384&&s.value!==c[14]&&J(s,c[14])},d(c){c&&(x(a),x(e),x(p),x(d)),h&&h.d(c),t[30](null),$&&$.d(),z=!1,A(I)}}}function Ce(t){let a,e,i;return{c(){a=g("div"),r(a,"class","jp-file-upload-drop")},m(n,u){F(n,a,u),e||(i=[w(a,"dragleave",t[27]),w(a,"dragend",t[28]),w(a,"drop",k(t[29]))],e=!0)},p:N,d(n){n&&x(a),e=!1,A(i)}}}function G(t){let a;return{c(){a=g("span"),r(a,"class","jp-file-upload-label"),B(a,"jp-file-upload-label-move",t[8]||t[14])},m(e,i){F(e,a,i),a.innerHTML=t[15]},p(e,i){i[0]&32768&&(a.innerHTML=e[15]),i[0]&16640&&B(a,"jp-file-upload-label-move",e[8]||e[14])},d(e){e&&x(a)}}}function K(t){let a,e,i,n;return{c(){a=g("div"),e=g("button"),r(e,"type","button"),r(a,"class","jp-file-upload-field-icon")},m(u,m){F(u,a,m),T(a,e),e.innerHTML=ze,i||(n=w(e,"click",k(t[34])),i=!0)},p:N,d(u){u&&x(a),i=!1,n()}}}function Q(t){let a,e,i,n,u;return{c(){a=g("div"),e=g("img"),r(e,"class","jp-file-upload-preview"),r(e,"style",t[6]),P(e.src,i=t[10])||r(e,"src",i),r(e,"alt","preview"),r(a,"class","jp-file-upload-overlay")},m(m,v){F(m,a,v),T(a,e),n||(u=[He(qe.call(null,e)),w(e,"click_outside",t[41])],n=!0)},p(m,v){v[0]&64&&r(e,"style",m[6]),v[0]&1024&&!P(e.src,i=m[10])&&r(e,"src",i)},d(m){m&&x(a),n=!1,A(u)}}}function ke(t){let a,e,i,n,u,m,v,f=t[0]&&t[1]=="outside"&&W(t);function j(d,s){return d[12]?Ce:Ve}let b=j(t),y=b(t),p=t[11]&&Q(t);return{c(){f&&f.c(),a=M(),e=g("div"),i=g("div"),y.c(),n=M(),p&&p.c(),u=je(),r(i,"class","jp-file-upload-field")},m(d,s){f&&f.m(d,s),F(d,a,s),F(d,e,s),T(e,i),y.m(i,null),t[39](i),F(d,n,s),p&&p.m(d,s),F(d,u,s),m||(v=w(i,"dragover",k(t[40])),m=!0)},p(d,s){d[0]&&d[1]=="outside"?f?f.p(d,s):(f=W(d),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null),b===(b=j(d))&&y?y.p(d,s):(y.d(1),y=b(d),y&&(y.c(),y.m(i,null))),d[11]?p?p.p(d,s):(p=Q(d),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:N,o:N,d(d){d&&(x(a),x(e),x(n),x(u)),f&&f.d(d),y.d(),t[39](null),p&&p.d(d),m=!1,v()}}}function Ne(t){return new Promise((a,e)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=()=>a(i.result),i.onerror=n=>e(n)})}function Be(t,a,e){let i,{label:n=""}=a,{labelType:u="inside"}=a,{attachedInternals:m}=a,{value:v=""}=a,{id:f=""}=a,{name:j=""}=a,{required:b=!1}=a,{displayFormat:y="snake"}=a,{displayFormatFunction:p}=a,d,s,H=!1,z=!1,I="",h=null,$=!1,c=!1,o,V,C=v&&U(v,y,p)||"";const O=Te();let{service:L}=a;const Z=()=>o;async function ee(l){if(z)try{e(5,o=await L.uploadFile(h,l))}catch(Y){console.error(Y)}return o}async function R(l){if(L&&L.maxSize&&l.size>L.maxSize){O("rejected",{file:l.name,code:"maxSize"});return}if(e(9,z=!0),h=l,e(5,o=l.name),e(14,C=U(o,y,p)),h.type.split("/")[0]==="image"){const Y=await Ne(h);e(10,I=Y)}else e(10,I="")}async function _(l){l.dataTransfer.files.length&&R(l.dataTransfer.files[0]),e(12,c=!1)}async function ae(l){R(l.target.files[0])}async function S(){z||((await(await fetch(o)).blob()).type.startsWith("image/")?e(10,I=o):e(10,I=""))}function D(){const l=s.getBoundingClientRect();window.innerHeight-l.bottom<300?e(6,d=`
        width: ${l.width}px;
        top: ${window.scrollY+l.top}px;
        transform: translateY(-100%);
      `):e(6,d=`
        width: ${l.width}px;
        top: ${window.scrollY+l.bottom}px;
      `),e(11,$=!$)}const te=()=>e(12,c=!1),le=()=>e(12,c=!1),ie=l=>_(l);function se(l){E[l?"unshift":"push"](()=>{V=l,e(13,V)})}const ne=()=>e(8,H=!0),ce=()=>e(8,H=!1),de=()=>D(),re=()=>{e(9,z=!1),e(10,I=""),e(5,o=""),e(13,V.value="",V),e(14,C="")},oe=()=>e(8,H=!0),pe=()=>e(8,H=!1),ue=()=>S();function me(){C=this.value,e(14,C)}function fe(l){E[l?"unshift":"push"](()=>{s=l,e(7,s)})}const he=()=>e(12,c=!0),$e=()=>e(11,$=!1);return t.$$set=l=>{"label"in l&&e(0,n=l.label),"labelType"in l&&e(1,u=l.labelType),"attachedInternals"in l&&e(20,m=l.attachedInternals),"value"in l&&e(21,v=l.value),"id"in l&&e(2,f=l.id),"name"in l&&e(3,j=l.name),"required"in l&&e(22,b=l.required),"displayFormat"in l&&e(23,y=l.displayFormat),"displayFormatFunction"in l&&e(24,p=l.displayFormatFunction),"service"in l&&e(4,L=l.service)},t.$$.update=()=>{t.$$.dirty[0]&2097152&&(e(5,o=v),v?S():e(10,I="")),t.$$.dirty[0]&1048608&&(m.checkValidity(),m.setFormValue(o),O("value",{internalValue:o})),t.$$.dirty[0]&4194305&&e(15,i=b?`${n} *`:n)},[n,u,f,j,L,o,d,s,H,z,I,$,c,V,C,i,_,ae,S,D,m,v,b,y,p,Z,ee,te,le,ie,se,ne,ce,de,re,oe,pe,ue,me,fe,he,$e]}class X extends we{constructor(a){super(),Fe(this,a,Be,ke,xe,{label:0,labelType:1,attachedInternals:20,value:21,id:2,name:3,required:22,displayFormat:23,displayFormatFunction:24,service:4,getValue:25,save:26},null,[-1,-1])}get label(){return this.$$.ctx[0]}set label(a){this.$$set({label:a}),q()}get labelType(){return this.$$.ctx[1]}set labelType(a){this.$$set({labelType:a}),q()}get attachedInternals(){return this.$$.ctx[20]}set attachedInternals(a){this.$$set({attachedInternals:a}),q()}get value(){return this.$$.ctx[21]}set value(a){this.$$set({value:a}),q()}get id(){return this.$$.ctx[2]}set id(a){this.$$set({id:a}),q()}get name(){return this.$$.ctx[3]}set name(a){this.$$set({name:a}),q()}get required(){return this.$$.ctx[22]}set required(a){this.$$set({required:a}),q()}get displayFormat(){return this.$$.ctx[23]}set displayFormat(a){this.$$set({displayFormat:a}),q()}get displayFormatFunction(){return this.$$.ctx[24]}set displayFormatFunction(a){this.$$set({displayFormatFunction:a}),q()}get service(){return this.$$.ctx[4]}set service(a){this.$$set({service:a}),q()}get getValue(){return this.$$.ctx[25]}get save(){return this.$$.ctx[26]}}try{customElements.define("jp-file-upload",be(X,{label:{},labelType:{},attachedInternals:{},value:{},id:{},name:{},required:{type:"Boolean"},displayFormat:{},displayFormatFunction:{},service:{}},[],["getValue","save"],!1,t=>{var a;return a=class extends t{constructor(){super(),this.attachedInternals=this.attachInternals()}},ge(a,"formAssociated",!0),a}));}catch{};export{X as default};
//# sourceMappingURL=file-upload.wc.js.map
