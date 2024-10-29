var Q=Object.defineProperty,Y=(i,e,a)=>e in i?Q(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,_=(i,e,a)=>Y(i,typeof e!="symbol"?e+"":e,a);import{c as J,S as U,i as X,o as u,s as Z,l as S,e as q,d as v,f as b,p as ee,Y as F,m as te,w as L,k as f,x as ae,G as ie,H as se,n as E}from"./svelte.js";import"./index.js";function A(i){let e;return{c(){e=q("div"),v(e,"class","jp-ckeditor-label")},m(a,h){b(a,e,h),e.innerHTML=i[8]},p(a,h){h&256&&(e.innerHTML=a[8])},d(a){a&&f(e)}}}function ne(i){let e,a,h,c,n,g,p,r=i[2]&&A(i);return{c(){r&&r.c(),e=S(),a=q("div"),h=q("div"),c=S(),n=q("textarea"),v(n,"class","jp-ckeditor-textarea"),v(n,"id",i[0]),v(n,"name",i[1]),n.required=i[3]},m(s,l){r&&r.m(s,l),b(s,e,l),b(s,a,l),ee(a,h),i[20](h),i[21](a),b(s,c,l),b(s,n,l),F(n,i[4]),i[23](n),g||(p=te(n,"input",i[22]),g=!0)},p(s,[l]){s[2]?r?r.p(s,l):(r=A(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),l&1&&v(n,"id",s[0]),l&2&&v(n,"name",s[1]),l&8&&(n.required=s[3]),l&16&&F(n,s[4])},i:L,o:L,d(s){s&&(f(e),f(a),f(c),f(n)),r&&r.d(s),i[20](null),i[21](null),i[23](null),g=!1,p()}}}function re(){var i;return(i=window.CKEDITOR)==null?void 0:i.ClassicEditor}function le(i,e,a){let h,{attachedInternals:c}=e,{service:n}=e,{value:g=""}=e,{id:p=null}=e,{name:r=null}=e,{height:s=null}=e,{width:l=null}=e,{label:w=""}=e,{options:C={toolbar:{items:["findAndReplace","selectAll","|","heading","|","bold","italic","strikethrough","underline","code","subscript","superscript","removeFormat","|","bulletedList","numberedList","todoList","|","outdent","indent","|","undo","redo","-","fontSize","fontColor","fontBackgroundColor","highlight","|","alignment","|","link","uploadImage","blockQuote","insertTable","mediaEmbed","codeBlock","htmlEmbed","|","specialCharacters","horizontalLine","|","sourceEditing"],shouldNotGroupWhenFull:!0},mediaEmbed:{previewsInData:!0},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},heading:{options:[{model:"paragraph",title:"Paragraph"},{model:"heading2",view:"h2",title:"Heading 2"},{model:"heading3",view:"h3",title:"Heading 3"},{model:"heading4",view:"h4",title:"Heading 4"},{model:"heading5",view:"h5",title:"Heading 5"},{model:"heading6",view:"h6",title:"Heading 6"}]},fontSize:{options:[10,12,14,"default",18,20,22],supportAllValues:!0},htmlSupport:{allow:[{name:/.*/,attributes:!0,classes:!0,styles:!0}]},htmlEmbed:{showPreviews:!0},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}},defaultProtocol:"https://",toggleDownloadable:{mode:"manual",label:"Downloadable",attributes:{download:"file"}}}},removePlugins:["AIAssistant","CKBox","CKFinder","EasyImage","RealTimeCollaborativeComments","RealTimeCollaborativeTrackChanges","RealTimeCollaborativeRevisionHistory","PresenceList","Comments","TrackChanges","TrackChangesData","RevisionHistory","Pagination","WProofreader","MathType","SlashCommand","Template","DocumentOutline","FormatPainter","TableOfContents","PasteFromOfficeEnhanced","CaseChange"]}}=e,{required:x=!1}=e,{validationMessages:I={}}=e,{requiredValidationMessage:V}=e,o="";const R=()=>o||"",P=ae(),z=t=>fetch(t).then(m=>m.blob());let k,y,d,$;async function j(t){const m=/src="data:(.*?)"/g,M=/(^src=")|("$)/g,H=[...o.match(m)||[]];return H.length&&(await Promise.all([...H].map(async D=>{try{const T=await z(D.replace(M,"")),W=await n.uploadFile(T,t);a(4,o=o.replace(D,`src="${W}"`))}catch(T){console.error(T)}})),a(9,g=o),P("value",o||"")),o}ie(()=>{a(4,o=g);const t=re();if(!t){console.warn("CKEditor not found");return}t.create(y,C).then(m=>{a(19,d=m),g&&d.setData(g),d.model.document.on("change:data",()=>{if(a(4,o=d.getData()),c.checkValidity(),$)if(!o&&x){const M=V||I.required||$.validationMessage;M&&c.setValidity({valueMissing:!0},M,$)}else c.setValidity({});c.setFormValue(o||""),P("value",o||"")})}).catch(console.error)}),se(()=>{d&&d.destroy().catch(console.error)});function B(t){E[t?"unshift":"push"](()=>{y=t,a(6,y)})}function K(t){E[t?"unshift":"push"](()=>{k=t,a(5,k)})}function N(){o=this.value,a(4,o)}function G(t){E[t?"unshift":"push"](()=>{$=t,a(7,$)})}return i.$$set=t=>{"attachedInternals"in t&&a(10,c=t.attachedInternals),"service"in t&&a(11,n=t.service),"value"in t&&a(9,g=t.value),"id"in t&&a(0,p=t.id),"name"in t&&a(1,r=t.name),"height"in t&&a(12,s=t.height),"width"in t&&a(13,l=t.width),"label"in t&&a(2,w=t.label),"options"in t&&a(14,C=t.options),"required"in t&&a(3,x=t.required),"validationMessages"in t&&a(15,I=t.validationMessages),"requiredValidationMessage"in t&&a(16,V=t.requiredValidationMessage)},i.$$.update=()=>{if(i.$$.dirty&528384&&s&&d&&d.editing.view.change(t=>{t.setStyle("height",s,d.editing.view.document.getRoot())}),i.$$.dirty&532480&&l&&d){const t=d.ui.view.toolbar.element,m=d.ui.view.editable.element;t.style.width=`${l}`,t.style.boxSizing="border-box",m.style.width=`${l}`,m.style.boxSizing="border-box"}i.$$.dirty&12&&a(8,h=x?`${w} *`:w)},[p,r,w,x,o,k,y,$,h,g,c,n,s,l,C,I,V,R,j,d,B,K,N,G]}class O extends U{constructor(e){super(),X(this,e,le,ne,Z,{attachedInternals:10,service:11,value:9,id:0,name:1,height:12,width:13,label:2,options:14,required:3,validationMessages:15,requiredValidationMessage:16,getValue:17,save:18})}get attachedInternals(){return this.$$.ctx[10]}set attachedInternals(e){this.$$set({attachedInternals:e}),u()}get service(){return this.$$.ctx[11]}set service(e){this.$$set({service:e}),u()}get value(){return this.$$.ctx[9]}set value(e){this.$$set({value:e}),u()}get id(){return this.$$.ctx[0]}set id(e){this.$$set({id:e}),u()}get name(){return this.$$.ctx[1]}set name(e){this.$$set({name:e}),u()}get height(){return this.$$.ctx[12]}set height(e){this.$$set({height:e}),u()}get width(){return this.$$.ctx[13]}set width(e){this.$$set({width:e}),u()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),u()}get options(){return this.$$.ctx[14]}set options(e){this.$$set({options:e}),u()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),u()}get validationMessages(){return this.$$.ctx[15]}set validationMessages(e){this.$$set({validationMessages:e}),u()}get requiredValidationMessage(){return this.$$.ctx[16]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),u()}get getValue(){return this.$$.ctx[17]}get save(){return this.$$.ctx[18]}}try{customElements.define("jp-ckeditor",J(O,{attachedInternals:{},service:{},value:{},id:{},name:{},height:{},width:{},label:{},options:{},required:{type:"Boolean"},validationMessages:{},requiredValidationMessage:{}},[],["getValue","save"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},_(e,"formAssociated",!0),e}));}catch{};export{O as default};
//# sourceMappingURL=ckeditor.wc.js.map