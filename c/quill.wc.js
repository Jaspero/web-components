var M=Object.defineProperty,P=(s,e,a)=>e in s?M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,R=(s,e,a)=>(P(s,typeof e!="symbol"?e+"":e,a),a);import{c as T,S as z,i as D,f as h,s as N,b as w,e as x,d as g,g as b,n as I,j as p,k as O,x as U,t as B,h as C,u as G,I as J}from"./svelte.js";import"./index2.js";function k(s){let e,a;return{c(){e=x("span"),a=B(s[3])},m(r,i){b(r,e,i),C(e,a)},p(r,i){i&8&&G(a,r[3])},d(r){r&&p(e)}}}function K(s){let e,a,r,i,n=s[3]&&k(s);return{c(){n&&n.c(),e=w(),a=x("div"),r=w(),i=x("textarea"),g(i,"id",s[1]),g(i,"name",s[2]),i.value=s[0],i.hidden=!0},m(l,c){n&&n.m(l,c),b(l,e,c),b(l,a,c),s[10](a),b(l,r,c),b(l,i,c)},p(l,[c]){l[3]?n?n.p(l,c):(n=k(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),c&2&&g(i,"id",l[1]),c&4&&g(i,"name",l[2]),c&1&&(i.value=l[0])},i:I,o:I,d(l){l&&(p(e),p(a),p(r),p(i)),n&&n.d(l),s[10](null)}}}function Q(){return window.Quill}function W(s,e,a){let{attachedInternals:r}=e,{service:i}=e,{value:n=""}=e,{id:l=null}=e,{name:c=null}=e,{label:y=""}=e,{options:f={modules:{toolbar:[["bold","italic","underline"],[{size:["small",!1,"large","huge"]}],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],["blockquote","code-block"],["image"],[{align:[]}],["clean"]]},theme:"snow"}}=e,u;const V=()=>n,F=O();let m,d;async function S(t){await Promise.allSettled([...d.root.querySelectorAll("img")].map(async o=>{const v=await j(o.src),$=await i.uploadFile(v,t);o.src=$}))}const j=t=>fetch(t).then(o=>o.blob()),q=t=>new Promise((o,v)=>{const $=new FileReader;$.readAsDataURL(t),$.onload=()=>o($.result),$.onerror=L=>v(L)});function E(){u=document.createElement("input"),u.setAttribute("type","file"),u.setAttribute("accept",i.acceptedFiles),u.setAttribute("style","visibility:hidden"),u.onchange=async()=>{const t=u.files[0],o=await q(t),v=d.getSelection();d.insertEmbed(v.index,"image",o)},u.click()}U(()=>{let t=Q();n&&a(4,m.innerHTML=n,m),d=new t(m,f),i&&d.getModule("toolbar").addHandler("image",()=>{E()}),d.on("text-change",()=>{a(0,n=d.root.innerHTML)})});function H(t){J[t?"unshift":"push"](()=>{m=t,a(4,m)})}return s.$$set=t=>{"attachedInternals"in t&&a(5,r=t.attachedInternals),"service"in t&&a(6,i=t.service),"value"in t&&a(0,n=t.value),"id"in t&&a(1,l=t.id),"name"in t&&a(2,c=t.name),"label"in t&&a(3,y=t.label),"options"in t&&a(7,f=t.options)},s.$$.update=()=>{s.$$.dirty&33&&(r.checkValidity(),r.setFormValue(n),F("value",{value:n}))},[n,l,c,y,m,r,i,f,V,S,H]}class A extends z{constructor(e){super(),D(this,e,W,K,N,{attachedInternals:5,service:6,value:0,id:1,name:2,label:3,options:7,getValue:8,save:9})}get attachedInternals(){return this.$$.ctx[5]}set attachedInternals(e){this.$$set({attachedInternals:e}),h()}get service(){return this.$$.ctx[6]}set service(e){this.$$set({service:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get id(){return this.$$.ctx[1]}set id(e){this.$$set({id:e}),h()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),h()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),h()}get options(){return this.$$.ctx[7]}set options(e){this.$$set({options:e}),h()}get getValue(){return this.$$.ctx[8]}get save(){return this.$$.ctx[9]}}try{customElements.define("jp-quill",T(A,{attachedInternals:{},service:{},value:{},id:{},name:{},label:{},options:{}},[],["getValue","save"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},R(e,"formAssociated",!0),e}));}catch{};export{A as default};