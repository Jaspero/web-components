var W=Object.defineProperty,Q=(s,e,a)=>e in s?W(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,Y=(s,e,a)=>Q(s,typeof e!="symbol"?e+"":e,a);import{c as _,S as J,i as U,o as d,s as X,l as D,e as y,d as v,f as b,p as Z,Y as R,m as ee,w as F,k as f,x as te,G as ae,H as se,n as T}from"./svelte.js";import"./index.js";function L(s){let e;return{c(){e=y("div"),v(e,"class","jp-ckeditor-label")},m(a,u){b(a,e,u),e.innerHTML=s[8]},p(a,u){u&256&&(e.innerHTML=a[8])},d(a){a&&f(e)}}}function ie(s){let e,a,u,c,n,h,$,r=s[2]&&L(s);return{c(){r&&r.c(),e=D(),a=y("div"),u=y("div"),c=D(),n=y("textarea"),v(n,"class","jp-ckeditor-textarea"),v(n,"id",s[0]),v(n,"name",s[1]),n.required=s[3]},m(i,l){r&&r.m(i,l),b(i,e,l),b(i,a,l),Z(a,u),s[19](u),s[20](a),b(i,c,l),b(i,n,l),R(n,s[4]),s[22](n),h||($=ee(n,"input",s[21]),h=!0)},p(i,[l]){i[2]?r?r.p(i,l):(r=L(i),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l&1&&v(n,"id",i[0]),l&2&&v(n,"name",i[1]),l&8&&(n.required=i[3]),l&16&&R(n,i[4])},i:F,o:F,d(i){i&&(f(e),f(a),f(c),f(n)),r&&r.d(i),s[19](null),s[20](null),s[22](null),h=!1,$()}}}function ne(){var s;return(s=window.CKEDITOR)==null?void 0:s.ClassicEditor}function re(s,e,a){let u,{attachedInternals:c}=e,{service:n}=e,{value:h=""}=e,{id:$=null}=e,{name:r=null}=e,{height:i=null}=e,{label:l=""}=e,{options:C={toolbar:{items:["findAndReplace","selectAll","|","heading","|","bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","undo","redo","-","fontSize","fontColor","fontBackgroundColor","highlight","|","alignment","|","link","uploadImage","blockQuote","insertTable","mediaEmbed","codeBlock","htmlEmbed","|","specialCharacters","horizontalLine","|","sourceEditing"],shouldNotGroupWhenFull:!0},mediaEmbed:{previewsInData:!0},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},heading:{options:[{model:"paragraph",title:"Paragraph"},{model:"heading2",view:"h2",title:"Heading 2"},{model:"heading3",view:"h3",title:"Heading 3"},{model:"heading4",view:"h4",title:"Heading 4"},{model:"heading5",view:"h5",title:"Heading 5"},{model:"heading6",view:"h6",title:"Heading 6"}]},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/.*/,attributes:!0,classes:!0,styles:!0}]},htmlEmbed:{showPreviews:!0},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}},defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},removePlugins:["AIAssistant","CKBox","CKFinder","EasyImage","RealTimeCollaborativeComments","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeRevisionHistory","PresenceList","Comments","TrackChanges","TrackChangesData","RevisionHistory","Pagination","WProofreader","MathType","SlashCommand","Template","DocumentOutline","FormatPainter","TableOfContents","PasteFromOfficeEnhanced","CaseChange"]}}=e,{required:w=!1}=e,{validationMessages:x={}}=e,{requiredValidationMessage:I}=e,o="";const O=()=>o||"",E=te(),S=t=>fetch(t).then(p=>p.blob());let V,M,g,m;async function j(t){const p=/src="data:(.*?)"/g,q=/(^src=")|("$)/g,P=[...o.match(p)||[]];return P.length&&(await Promise.all([...P].map(async H=>{try{const k=await S(H.replace(q,"")),G=await n.uploadFile(k,t);a(4,o=o.replace(H,`src="${G}"`))}catch(k){console.error(k)}})),a(9,h=o),E("value",o||"")),o}ae(()=>{a(4,o=h);const t=ne();if(!t){console.warn("CKEditor not found");return}t.create(M,C).then(p=>{a(18,g=p),h&&g.setData(h),g.model.document.on("change:data",()=>{if(a(4,o=g.getData()),c.checkValidity(),m)if(!o&&w){const q=I||x.required||m.validationMessage;q&&c.setValidity({valueMissing:!0},q,m)}else c.setValidity({});c.setFormValue(o||""),E("value",o||"")})}).catch(console.error)}),se(()=>{g&&g.destroy().catch(console.error)});function B(t){T[t?"unshift":"push"](()=>{M=t,a(6,M)})}function K(t){T[t?"unshift":"push"](()=>{V=t,a(5,V)})}function z(){o=this.value,a(4,o)}function N(t){T[t?"unshift":"push"](()=>{m=t,a(7,m)})}return s.$$set=t=>{"attachedInternals"in t&&a(10,c=t.attachedInternals),"service"in t&&a(11,n=t.service),"value"in t&&a(9,h=t.value),"id"in t&&a(0,$=t.id),"name"in t&&a(1,r=t.name),"height"in t&&a(12,i=t.height),"label"in t&&a(2,l=t.label),"options"in t&&a(13,C=t.options),"required"in t&&a(3,w=t.required),"validationMessages"in t&&a(14,x=t.validationMessages),"requiredValidationMessage"in t&&a(15,I=t.requiredValidationMessage)},s.$$.update=()=>{s.$$.dirty&266240&&i&&g&&g.editing.view.change(t=>{t.setStyle("height",i,g.editing.view.document.getRoot())}),s.$$.dirty&12&&a(8,u=w?`${l} *`:l)},[$,r,l,w,o,V,M,m,u,h,c,n,i,C,x,I,O,j,g,B,K,z,N]}class A extends J{constructor(e){super(),U(this,e,re,ie,X,{attachedInternals:10,service:11,value:9,id:0,name:1,height:12,label:2,options:13,required:3,validationMessages:14,requiredValidationMessage:15,getValue:16,save:17})}get attachedInternals(){return this.$$.ctx[10]}set attachedInternals(e){this.$$set({attachedInternals:e}),d()}get service(){return this.$$.ctx[11]}set service(e){this.$$set({service:e}),d()}get value(){return this.$$.ctx[9]}set value(e){this.$$set({value:e}),d()}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),d()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),d()}get height(){return this.$$.ctx[12]}set height(e){this.$$set({height:e}),d()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),d()}get options(){return this.$$.ctx[13]}set options(e){this.$$set({options:e}),d()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),d()}get validationMessages(){return this.$$.ctx[14]}set validationMessages(e){this.$$set({validationMessages:e}),d()}get requiredValidationMessage(){return this.$$.ctx[15]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),d()}get getValue(){return this.$$.ctx[16]}get save(){return this.$$.ctx[17]}}try{customElements.define("jp-ckeditor",_(A,{attachedInternals:{},service:{},value:{},id:{},name:{},height:{},label:{},options:{},required:{type:"Boolean"},validationMessages:{},requiredValidationMessage:{}},[],["getValue","save"],!1,s=>{var e;return e=class extends s{constructor(){super(),this.attachedInternals=this.attachInternals()}},Y(e,"formAssociated",!0),e}));}catch{};export{A as default};
//# sourceMappingURL=ckeditor.wc.js.map
