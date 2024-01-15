"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1085],{4344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var l=n(5893),s=n(1151);const i={},r="Input",d={id:"Form fields/input",title:"Input",description:"Description",source:"@site/docs/Form fields/input.md",sourceDirName:"Form fields",slug:"/Form fields/input",permalink:"/web-components/docs/Form fields/input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"File upload",permalink:"/web-components/docs/Form fields/file-upload"},next:{title:"Multisearch",permalink:"/web-components/docs/Form fields/multisearch"}},c={},x=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function h(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"input",children:"Input"}),"\n",(0,l.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"<jp-input>"})," is a field component with ",(0,l.jsx)(t.code,{children:"<input>"})," functionality."]}),"\n",(0,l.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Name"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Required"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Type"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Description"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"shows at the top of an input"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"labelType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"'outside'"})," or ",(0,l.jsx)(t.code,{children:"'inside'"})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"whether label is inside or outside of the field"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"placeholder"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["temporary text that appears in an ",(0,l.jsx)("br",{})," input field before any input is entered"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"unique identifier"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"disabled"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"determines if an input is disabled"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"list"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"id of datalist (list of predefined values)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"min"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"minimal value on numeric input"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"max"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"maximal value on numeric input"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"step"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"'any'"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"required"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"determines if an input is required"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"requiredValidationMessage"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy required"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"readonly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"determines if an input is read-only"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"type"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["One of the following: ",(0,l.jsx)("br",{})," ",(0,l.jsx)(t.code,{children:"'text'"}),", ",(0,l.jsx)(t.code,{children:"'password'"}),", ",(0,l.jsx)("br",{})," ",(0,l.jsx)(t.code,{children:"'email'"}),", ",(0,l.jsx)(t.code,{children:"'tel'"}),", ",(0,l.jsx)(t.code,{children:"'url'"})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"type of input"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"minlength"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"minimum character count allowed"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"minlengthValidationMessage"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy minlength"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"maxlength"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"maximum character count allowed"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"maxlengthValidationMessage"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy maxlength"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"pattern"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"pattern that input has to satisfy"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"patternValidationMessage"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy pattern"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"validationMessages"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"{[type]: string}"})," where ",(0,l.jsx)(t.code,{children:"type"})," is ",(0,l.jsx)(t.code,{children:"string"})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"compact way of writing validation messages in a single attribute"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"hint"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"renders below the input field"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"prefix"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"renders in front of the input field"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"suffix"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"renders after the input field"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"reportValidity"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"triggers reportValidity"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"value"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"triggers when value of the field changes"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"<jp-input value='pero' label='Perica' name='input'>\n</jp-input>\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var l=n(7294);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);