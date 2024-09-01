"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5636],{5144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(4848),l=n(8453);const i={},r="Select",d={id:"Form fields/select",title:"Select",description:"Description",source:"@site/docs/Form fields/select.md",sourceDirName:"Form fields",slug:"/Form fields/select",permalink:"/web-components/docs/Form fields/select",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Range",permalink:"/web-components/docs/Form fields/range"},next:{title:"Slider",permalink:"/web-components/docs/Form fields/slider"}},c={},o=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function x(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"select",children:"Select"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<jp-select>"})," is a form component with ",(0,s.jsx)(t.code,{children:"<select>"})," functionality."]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"setter and getter"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"options"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Array<{label?: string, value: string, disabled?: boolean}>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"select options"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"disabled"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if a selection is disabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"required"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if a selection is required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"requiredValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"unique identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"shows at the top of the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"labelType"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"'outside'"})," or ",(0,s.jsx)(t.code,{children:"'inside'"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"whether label is inside or outside of the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"hint"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"shows below the field"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getValue"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"returns form field value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reportValidity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers reportValidity"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when item is selected"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<jp-select options=\'[{"value":"aaa"}, {"value":"bbb"}, {"value":"ccc"}]\' label="Select"></jp-select>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);