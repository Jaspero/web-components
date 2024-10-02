var Y=Object.defineProperty,Z=(i,e,r)=>e in i?Y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,_=(i,e,r)=>Z(i,typeof e!="symbol"?e+"":e,r);import{c as X,S as ee,i as te,f as d,s as re,a as ie,b as B,e as V,g as y,h as f,j as ae,U as L,l as se,J as E,o as M,D as ne,E as le,y as H}from"./svelte.js";import"./index.js";function oe(i){ie(i,"svelte-yjn20o",".label.svelte-yjn20o{margin-top:0.5rem;margin-bottom:0.125rem;font-size:0.875rem}textarea.svelte-yjn20o{width:100%;height:0;opacity:0;position:absolute}")}function F(i){let e;return{c(){e=V("div"),y(e,"class","label svelte-yjn20o")},m(r,u){f(r,e,u),e.innerHTML=i[8]},p(r,u){u&256&&(e.innerHTML=r[8])},d(r){r&&M(e)}}}function de(i){let e,r,u,c,a,h,S,n=i[2]&&F(i);return{c(){n&&n.c(),e=B(),r=V("div"),u=V("div"),c=B(),a=V("textarea"),y(a,"id",i[0]),y(a,"name",i[1]),a.required=i[3],y(a,"tabindex","-1"),y(a,"class","svelte-yjn20o")},m(s,l){n&&n.m(s,l),f(s,e,l),f(s,r,l),ae(r,u),i[21](u),i[22](r),f(s,c,l),f(s,a,l),L(a,i[4]),i[24](a),h||(S=se(a,"input",i[23]),h=!0)},p(s,[l]){s[2]?n?n.p(s,l):(n=F(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),l&1&&y(a,"id",s[0]),l&2&&y(a,"name",s[1]),l&8&&(a.required=s[3]),l&16&&L(a,s[4])},i:E,o:E,d(s){s&&(M(e),M(r),M(c),M(a)),n&&n.d(s),i[21](null),i[22](null),i[24](null),h=!1,S()}}}function ue(){return window.Quill}function ce(i,e,r){let u,{attachedInternals:c}=e,{service:a}=e,{value:h=""}=e,{id:S=null}=e,{name:n=null}=e,{label:s=""}=e,{options:l}=e,{toolbarStyle:T="border-color:var(--border-primary)!important;border-top-left-radius:.25rem;border-top-right-radius:.25rem;"}=e,{containerStyle:A="border-color: var(--border-primary)!important;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;"}=e,{editorStyle:I="max-height: 500px;"}=e,{required:x=!1}=e,{validationMessages:k={}}=e,{requiredValidationMessage:j}=e,g,b="";const D=()=>b||"",R=ne();let v,w,o,p;async function U(t){return await Promise.all([...o.root.querySelectorAll("img")].map(async $=>{try{const m=await z($.src),q=await a.uploadFile(m,t);$.src=q}catch(m){console.error(m)}})),r(9,h=o.root.innerHTML),r(4,b=o.root.innerHTML||""),b}const z=t=>fetch(t).then($=>$.blob()),C=t=>new Promise(($,m)=>{const q=new FileReader;q.readAsDataURL(t),q.onload=()=>$(q.result),q.onerror=W=>m(W)});function J(){g=document.createElement("input"),g.setAttribute("type","file"),g.setAttribute("accept",a.acceptedFiles),g.setAttribute("style","visibility:hidden"),g.onchange=async()=>{const t=g.files[0],$=await C(t),m=o.getSelection();o.insertEmbed(m.index,"image",$)},g.click()}function N(){v.querySelector(".ql-toolbar").setAttribute("style",T),v.querySelector(".ql-container").setAttribute("style",A),v.querySelector(".ql-editor").setAttribute("style",I)}le(()=>{let t=ue();l||(window.quillBetterTable&&t.register({"modules/better-table":window.quillBetterTable},!0),r(10,l={modules:{table:!1,toolbar:[["bold","italic","underline","strike"],[{header:[1,2,3,4,5,6,!1]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],["table","blockquote","code-block"],["image","link"],[{color:[]},{background:[]}],[{align:[]}],["clean"]],...window.quillBetterTable&&{"better-table":{operationMenu:{items:{unmergeCells:{text:"Another unmerge cells name"}}}},keyboard:{bindings:window.quillBetterTable.keyboardBindings}}},theme:"snow"})),r(20,o=new t(w,l)),window.quillBetterTable&&o.getModule("toolbar").addHandler("table",()=>{o.getModule("better-table").insertTable(3,3)}),a&&o.getModule("toolbar").addHandler("image",()=>{J()}),o.on("text-change",()=>{r(4,b=o.root.innerHTML||"")}),N()});function O(t){H[t?"unshift":"push"](()=>{w=t,r(7,w)})}function Q(t){H[t?"unshift":"push"](()=>{v=t,r(6,v)})}function G(){b=this.value,r(4,b)}function K(t){H[t?"unshift":"push"](()=>{p=t,r(5,p)})}return i.$$set=t=>{"attachedInternals"in t&&r(11,c=t.attachedInternals),"service"in t&&r(12,a=t.service),"value"in t&&r(9,h=t.value),"id"in t&&r(0,S=t.id),"name"in t&&r(1,n=t.name),"label"in t&&r(2,s=t.label),"options"in t&&r(10,l=t.options),"toolbarStyle"in t&&r(13,T=t.toolbarStyle),"containerStyle"in t&&r(14,A=t.containerStyle),"editorStyle"in t&&r(15,I=t.editorStyle),"required"in t&&r(3,x=t.required),"validationMessages"in t&&r(16,k=t.validationMessages),"requiredValidationMessage"in t&&r(17,j=t.requiredValidationMessage)},i.$$.update=()=>{i.$$.dirty&198712&&(c.checkValidity(),p&&(!b&&x?c.setValidity({valueMissing:!0},j||k.required||p.validationMessage,p):c.setValidity({})),c.setFormValue(b||""),R("value",b||"")),i.$$.dirty&1049088&&o&&r(20,o.root.innerHTML=h,o),i.$$.dirty&12&&r(8,u=x?`${s} *`:s)},[S,n,s,x,b,p,v,w,u,h,l,c,a,T,A,I,k,j,D,U,o,O,Q,G,K]}class P extends ee{constructor(e){super(),te(this,e,ce,de,re,{attachedInternals:11,service:12,value:9,id:0,name:1,label:2,options:10,toolbarStyle:13,containerStyle:14,editorStyle:15,required:3,validationMessages:16,requiredValidationMessage:17,getValue:18,save:19},oe)}get attachedInternals(){return this.$$.ctx[11]}set attachedInternals(e){this.$$set({attachedInternals:e}),d()}get service(){return this.$$.ctx[12]}set service(e){this.$$set({service:e}),d()}get value(){return this.$$.ctx[9]}set value(e){this.$$set({value:e}),d()}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),d()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),d()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),d()}get options(){return this.$$.ctx[10]}set options(e){this.$$set({options:e}),d()}get toolbarStyle(){return this.$$.ctx[13]}set toolbarStyle(e){this.$$set({toolbarStyle:e}),d()}get containerStyle(){return this.$$.ctx[14]}set containerStyle(e){this.$$set({containerStyle:e}),d()}get editorStyle(){return this.$$.ctx[15]}set editorStyle(e){this.$$set({editorStyle:e}),d()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),d()}get validationMessages(){return this.$$.ctx[16]}set validationMessages(e){this.$$set({validationMessages:e}),d()}get requiredValidationMessage(){return this.$$.ctx[17]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),d()}get getValue(){return this.$$.ctx[18]}get save(){return this.$$.ctx[19]}}try{customElements.define("jp-quill",X(P,{attachedInternals:{},service:{},value:{},id:{},name:{},label:{},options:{},toolbarStyle:{},containerStyle:{},editorStyle:{},required:{type:"Boolean"},validationMessages:{},requiredValidationMessage:{}},[],["getValue","save"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},_(e,"formAssociated",!0),e}));}catch{};export{P as default};
//# sourceMappingURL=quill.wc.js.map
