var ye=Object.defineProperty,$e=(s,t,e)=>t in s?ye(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,xe=(s,t,e)=>$e(s,typeof t!="symbol"?t+"":t,e);import{c as we,S as Fe,i as ze,f as I,s as Te,a as ke,b as L,e as $,H as He,g as n,h as F,j as z,l as w,p as j,J as B,o as T,D as Ie,O as U,z as Me,r as A,y as Y,d as E,t as S,V as J,U as W}from"./svelte.js";import"./index.js";import{clickOutside as Ve}from"./click-outside.js";import{formatDisplayFileName as G}from"./fileNameFormatter.js";function Le(s){ke(s,"svelte-1e12v76",`.field.svelte-1e12v76.svelte-1e12v76{position:relative;display:flex;flex-direction:row-reverse;align-items:center;text-align:left;width:100%;height:3rem;padding-right:0.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;gap:0.75rem;background-color:transparent;border:1px solid var(--border-primary);border-radius:0.25rem}.drop.svelte-1e12v76.svelte-1e12v76{position:absolute;left:0;right:0;top:0;bottom:0;border:2px dashed var(--primary-color)}.field.svelte-1e12v76.svelte-1e12v76:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-1e12v76.svelte-1e12v76{position:absolute;top:50%;left:0.75rem;transform:translateY(-50%);font-size:1rem;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-1e12v76.svelte-1e12v76{top:0.25rem;transform:translateY(0);font-size:0.75rem}.field-input.svelte-1e12v76.svelte-1e12v76{flex:auto;width:10rem;height:100%;font-size:1rem;white-space:nowrap;background:transparent;overflow:hidden;text-overflow:ellipsis;border:none;outline:none;border-radius:0}.field-input-padding.svelte-1e12v76.svelte-1e12v76{padding:1rem 0 0 0}.field-upload.svelte-1e12v76.svelte-1e12v76{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:0;opacity:0;cursor:pointer}.field-upload-container.svelte-1e12v76.svelte-1e12v76{position:relative;display:flex;padding:0 0.75rem;height:100%;overflow:hidden;flex:1}.field-icons.svelte-1e12v76.svelte-1e12v76{z-index:1;position:relative;display:flex;align-items:center;gap:0.375rem}.field-icon.svelte-1e12v76.svelte-1e12v76{display:flex;justify-content:center;align-items:center;width:2rem;height:2rem;border-radius:50%;cursor:pointer}.field-icon.svelte-1e12v76.svelte-1e12v76:hover{background:var(--background-tertiary)}.field-icon.hidden.svelte-1e12v76.svelte-1e12v76{display:none}.field-icon-upload.svelte-1e12v76.svelte-1e12v76{position:relative;cursor:pointer}.field-icon.svelte-1e12v76 button.svelte-1e12v76{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.preview-button.svelte-1e12v76.svelte-1e12v76{position:relative}.preview.svelte-1e12v76.svelte-1e12v76{z-index:1;position:absolute;max-width:300px;max-height:300px;width:auto;height:auto;background-color:var(--background-primary);border-radius:0.5rem;box-shadow:0 3px 12px 3px rgba(0, 0, 0, 0.16)}.overlay.svelte-1e12v76.svelte-1e12v76{z-index:100;position:fixed;top:0;left:0;width:100vw;height:100vh}`)}function K(s){let t;return{c(){t=$("div"),n(t,"class","label")},m(e,a){F(e,t,a),t.innerHTML=s[15]},p(e,a){a[0]&32768&&(t.innerHTML=e[15])},d(e){e&&T(t)}}}function qe(s){let t,e,a,l,v,g,h,f,M,x,u,p,o,m,d,H,k,V,y=s[0]&&s[1]=="inside"&&Q(s),b=s[5]&&X(s);return{c(){y&&y.c(),t=L(),e=$("div"),a=$("label"),l=$("input"),g=L(),h=E("svg"),f=E("path"),M=L(),x=$("div"),u=$("button"),u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>',p=L(),b&&b.c(),o=L(),m=$("span"),d=$("input"),n(l,"type","file"),n(l,"id",s[3]),n(l,"class","field-upload svelte-1e12v76"),n(l,"accept",v=s[4]&&s[4].acceptedFiles),n(f,"d","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"),n(h,"xmlns","http://www.w3.org/2000/svg"),n(h,"height","1rem"),n(h,"viewBox","0 0 512 512"),n(a,"for",s[3]),n(a,"class","field-icon field-icon-upload svelte-1e12v76"),n(u,"type","button"),n(u,"class","svelte-1e12v76"),n(x,"class","field-icon preview-button svelte-1e12v76"),S(x,"hidden",!s[10]),n(e,"class","field-icons svelte-1e12v76"),n(d,"class",H=J(`field-input ${s[1]=="outside"||!s[0]?"":"field-input-padding"}`)+" svelte-1e12v76"),n(d,"type","text"),n(d,"name",s[3]),n(d,"id",s[2]),d.disabled=s[9],n(m,"class","field-upload-container svelte-1e12v76")},m(r,c){y&&y.m(r,c),F(r,t,c),F(r,e,c),z(e,a),z(a,l),s[30](l),z(a,g),z(a,h),z(h,f),z(e,M),z(e,x),z(x,u),z(e,p),b&&b.m(e,null),F(r,o,c),F(r,m,c),z(m,d),W(d,s[14]),k||(V=[w(l,"change",s[17]),w(l,"focus",s[31]),w(l,"blur",s[32]),w(u,"click",j(s[33])),w(d,"focus",s[35]),w(d,"blur",s[36]),w(d,"change",s[37]),w(d,"input",s[38])],k=!0)},p(r,c){r[0]&&r[1]=="inside"?y?y.p(r,c):(y=Q(r),y.c(),y.m(t.parentNode,t)):y&&(y.d(1),y=null),c[0]&8&&n(l,"id",r[3]),c[0]&16&&v!==(v=r[4]&&r[4].acceptedFiles)&&n(l,"accept",v),c[0]&8&&n(a,"for",r[3]),c[0]&1024&&S(x,"hidden",!r[10]),r[5]?b?b.p(r,c):(b=X(r),b.c(),b.m(e,null)):b&&(b.d(1),b=null),c[0]&3&&H!==(H=J(`field-input ${r[1]=="outside"||!r[0]?"":"field-input-padding"}`)+" svelte-1e12v76")&&n(d,"class",H),c[0]&8&&n(d,"name",r[3]),c[0]&4&&n(d,"id",r[2]),c[0]&512&&(d.disabled=r[9]),c[0]&16384&&d.value!==r[14]&&W(d,r[14])},d(r){r&&(T(t),T(e),T(o),T(m)),y&&y.d(r),s[30](null),b&&b.d(),k=!1,A(V)}}}function Ce(s){let t,e,a;return{c(){t=$("div"),n(t,"class","drop svelte-1e12v76")},m(l,v){F(l,t,v),e||(a=[w(t,"dragleave",s[27]),w(t,"dragend",s[28]),w(t,"drop",j(s[29]))],e=!0)},p:B,d(l){l&&T(t),e=!1,A(a)}}}function Q(s){let t;return{c(){t=$("span"),n(t,"class","field-label svelte-1e12v76"),S(t,"move",s[8]||s[5])},m(e,a){F(e,t,a),t.innerHTML=s[15]},p(e,a){a[0]&32768&&(t.innerHTML=e[15]),a[0]&288&&S(t,"move",e[8]||e[5])},d(e){e&&T(t)}}}function X(s){let t,e,a,l;return{c(){t=$("div"),e=$("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',n(e,"type","button"),n(e,"class","svelte-1e12v76"),n(t,"class","field-icon svelte-1e12v76")},m(v,g){F(v,t,g),z(t,e),a||(l=w(e,"click",j(s[34])),a=!0)},p:B,d(v){v&&T(t),a=!1,l()}}}function Z(s){let t,e,a,l,v;return{c(){t=$("div"),e=$("img"),n(e,"class","preview svelte-1e12v76"),n(e,"style",s[6]),U(e.src,a=s[10])||n(e,"src",a),n(e,"alt","preview"),n(t,"class","overlay svelte-1e12v76")},m(g,h){F(g,t,h),z(t,e),l||(v=[Me(Ve.call(null,e)),w(e,"click_outside",s[41])],l=!0)},p(g,h){h[0]&64&&n(e,"style",g[6]),h[0]&1024&&!U(e.src,a=g[10])&&n(e,"src",a)},d(g){g&&T(t),l=!1,A(v)}}}function je(s){let t,e,a,l,v,g,h,f=s[0]&&s[1]=="outside"&&K(s);function M(o,m){return o[12]?Ce:qe}let x=M(s),u=x(s),p=s[11]&&Z(s);return{c(){f&&f.c(),t=L(),e=$("div"),a=$("div"),u.c(),l=L(),p&&p.c(),v=He(),n(a,"class","field svelte-1e12v76")},m(o,m){f&&f.m(o,m),F(o,t,m),F(o,e,m),z(e,a),u.m(a,null),s[39](a),F(o,l,m),p&&p.m(o,m),F(o,v,m),g||(h=w(a,"dragover",j(s[40])),g=!0)},p(o,m){o[0]&&o[1]=="outside"?f?f.p(o,m):(f=K(o),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null),x===(x=M(o))&&u?u.p(o,m):(u.d(1),u=x(o),u&&(u.c(),u.m(a,null))),o[11]?p?p.p(o,m):(p=Z(o),p.c(),p.m(v.parentNode,v)):p&&(p.d(1),p=null)},i:B,o:B,d(o){o&&(T(t),T(e),T(l),T(v)),f&&f.d(o),u.d(),s[39](null),p&&p.d(o),g=!1,h()}}}function Be(s){return new Promise((t,e)=>{const a=new FileReader;a.readAsDataURL(s),a.onload=()=>t(a.result),a.onerror=l=>e(l)})}function Se(s,t,e){let a,{label:l=""}=t,{labelType:v="inside"}=t,{attachedInternals:g}=t,{value:h=""}=t,{id:f=""}=t,{name:M=""}=t,{required:x=!1}=t,{displayFormat:u="snake"}=t,{displayFormatFunction:p}=t,o,m,d=!1,H=!1,k="",V=null,y=!1,b=!1,r,c,C=h&&G(h,u,p)||"";const O=Ie();let{service:q}=t;const te=()=>r;async function se(i){if(H)try{e(5,r=await q.uploadFile(V,i))}catch(N){console.error(N)}return r}async function R(i){if(q&&q.maxSize&&i.size>q.maxSize){O("rejected",{file:i.name,code:"maxSize"});return}if(e(9,H=!0),V=i,e(5,r=i.name),e(14,C=G(r,u,p)),V.type.split("/")[0]==="image"){const N=await Be(V);e(10,k=N)}else e(10,k="")}async function _(i){i.dataTransfer.files.length&&R(i.dataTransfer.files[0]),e(12,b=!1)}async function ie(i){R(i.target.files[0])}async function D(){H||((await(await fetch(r)).blob()).type.startsWith("image/")?e(10,k=r):e(10,k=""))}function P(){const i=m.getBoundingClientRect();window.innerHeight-i.bottom<300?e(6,o=`
        width: ${i.width}px;
        bottom: ${window.innerHeight-i.top}px;
        left: ${i.width-300}px;
      `):e(6,o=`
        width: ${i.width}px;
        top: ${i.bottom}px;
        left: ${i.width-300}px;
      `),e(11,y=!y)}const ae=()=>e(12,b=!1),re=()=>e(12,b=!1),ne=i=>_(i);function le(i){Y[i?"unshift":"push"](()=>{c=i,e(13,c)})}const oe=()=>e(8,d=!0),de=()=>e(8,d=!1),ce=()=>P(),ve=()=>{e(9,H=!1),e(10,k=""),e(5,r=""),e(13,c.value="",c)},ue=()=>e(8,d=!0),pe=()=>e(8,d=!1),me=()=>D();function he(){C=this.value,e(14,C)}function fe(i){Y[i?"unshift":"push"](()=>{m=i,e(7,m)})}const ge=()=>e(12,b=!0),be=()=>e(11,y=!1);return s.$$set=i=>{"label"in i&&e(0,l=i.label),"labelType"in i&&e(1,v=i.labelType),"attachedInternals"in i&&e(20,g=i.attachedInternals),"value"in i&&e(21,h=i.value),"id"in i&&e(2,f=i.id),"name"in i&&e(3,M=i.name),"required"in i&&e(22,x=i.required),"displayFormat"in i&&e(23,u=i.displayFormat),"displayFormatFunction"in i&&e(24,p=i.displayFormatFunction),"service"in i&&e(4,q=i.service)},s.$$.update=()=>{s.$$.dirty[0]&2097152&&(e(5,r=h),h?D():e(10,k="")),s.$$.dirty[0]&1048608&&(g.checkValidity(),g.setFormValue(r),O("value",{internalValue:r})),s.$$.dirty[0]&4194305&&e(15,a=x?`${l} *`:l)},[l,v,f,M,q,r,o,m,d,H,k,y,b,c,C,a,_,ie,D,P,g,h,x,u,p,te,se,ae,re,ne,le,oe,de,ce,ve,ue,pe,me,he,fe,ge,be]}class ee extends Fe{constructor(t){super(),ze(this,t,Se,je,Te,{label:0,labelType:1,attachedInternals:20,value:21,id:2,name:3,required:22,displayFormat:23,displayFormatFunction:24,service:4,getValue:25,save:26},Le,[-1,-1])}get label(){return this.$$.ctx[0]}set label(t){this.$$set({label:t}),I()}get labelType(){return this.$$.ctx[1]}set labelType(t){this.$$set({labelType:t}),I()}get attachedInternals(){return this.$$.ctx[20]}set attachedInternals(t){this.$$set({attachedInternals:t}),I()}get value(){return this.$$.ctx[21]}set value(t){this.$$set({value:t}),I()}get id(){return this.$$.ctx[2]}set id(t){this.$$set({id:t}),I()}get name(){return this.$$.ctx[3]}set name(t){this.$$set({name:t}),I()}get required(){return this.$$.ctx[22]}set required(t){this.$$set({required:t}),I()}get displayFormat(){return this.$$.ctx[23]}set displayFormat(t){this.$$set({displayFormat:t}),I()}get displayFormatFunction(){return this.$$.ctx[24]}set displayFormatFunction(t){this.$$set({displayFormatFunction:t}),I()}get service(){return this.$$.ctx[4]}set service(t){this.$$set({service:t}),I()}get getValue(){return this.$$.ctx[25]}get save(){return this.$$.ctx[26]}}try{customElements.define("jp-file-upload",we(ee,{label:{},labelType:{},attachedInternals:{},value:{},id:{},name:{},required:{type:"Boolean"},displayFormat:{},displayFormatFunction:{},service:{}},[],["getValue","save"],!1,s=>{var t;return t=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},xe(t,"formAssociated",!0),t}));}catch{};export{ee as default};
//# sourceMappingURL=file-upload.wc.js.map
