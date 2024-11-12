"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[996],{7279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var s=n(4848),l=n(8453);const i={},r="Multisearch",c={id:"Form fields/multisearch",title:"multisearch",description:"\x3c!-- import '../../static/c/multisearch.wc.js';",source:"@site/docs/Form fields/multisearch.md",sourceDirName:"Form fields",slug:"/Form fields/multisearch",permalink:"/web-components/docs/Form fields/multisearch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"input",permalink:"/web-components/docs/Form fields/input"},next:{title:"multiselect",permalink:"/web-components/docs/Form fields/multiselect"}},d={},x=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>SearchService</code>",id:"searchservice",level:4},{value:"Properties",id:"properties",level:5},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"multisearch",children:"Multisearch"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"<jp-multisearch>"})," is a component with a combination of search and multi select functionalities."]}),"\n",(0,s.jsx)(t.h3,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Required"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"value"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"setter"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"service"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"#searchservice",children:(0,s.jsx)(t.code,{children:"SearchService"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"search service"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2713"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name of the form control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minSelects"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minimum number of selects allowed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"singleSelect"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"is it possible to select only one option or more"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"minselectsValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy minselects"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maxSelects"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maximum number of selects allowed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"maxselectsValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy maxselects"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"required"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if a selection is required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"requiredValidationMessage"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validation message for when component does not satisfy required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"disabled"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if a selection is disabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"unique identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"label"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"shows at the top of the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"labelType"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"'outside'"})," or ",(0,s.jsx)(t.code,{children:"'inside'"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"whether label is inside or outside of the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"hint"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"shows below the field"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"validationMessages"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.code,{children:"{[type]: string}"})," where ",(0,s.jsx)(t.code,{children:"type"})," is ",(0,s.jsx)(t.code,{children:"string"})]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"compact way of writing validation messages in a single attribute"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"defaultSearch"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines if options are visible upon opening"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"defaultShowNumber"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"determines number of visible options"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.h4,{id:"searchservice",children:(0,s.jsx)(t.code,{children:"SearchService"})}),"\n",(0,s.jsx)(t.p,{children:"Defines functions for getting select options."}),"\n",(0,s.jsx)(t.h5,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Name"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Required"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Type"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"search"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(str: string) => Promise<Array<Option>>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"option results from search"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"getSingle"}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["if ",(0,s.jsx)(t.code,{children:"value"})," is provided"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(str: string) => Promise<Array<Option>>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"returns option given the value"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"loadMore"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"(str: string) => Promise<Array<Option>>"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"returns options given current search string"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Where ",(0,s.jsx)(t.code,{children:"Option"})," is ",(0,s.jsx)(t.code,{children:"{ label?: string; value: string; selected?: boolean; disabled?: boolean }"})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.p,{children:"This component does not have any slots."}),"\n",(0,s.jsx)(t.h3,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getValue"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"returns form field value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"reportValidity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers reportValidity"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"value"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"triggers when selected options change"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"demo",children:"Demo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:"// import '../../static/c/multisearch.wc.js';\n// import '../../static/c/multisearch.css';\n\nfunction multisearch(props) {\n  let el = useRef(null);\n  useEffect(() => {\n    const multisearch = document.createElement('jp-multisearch');\n    multisearch.value = 'aaa, bbb';\n    multisearch.service = {\n      i: 0,\n      async search(str) {\n        await new Promise((resolve) => setTimeout(resolve, 1500));\n        return [{ value: 'str+1' }, { value: 'str+2' }];\n      },\n      async loadMore(str) {\n        await new Promise((resolve) => setTimeout(resolve, 1500));\n        this.loadMore = null;\n        return [{ value: str }];\n      },\n      async getSingle(value) {\n        await new Promise((resolve) => setTimeout(resolve, 1500));\n        return { value: value, label: this.i++ };\n      }\n    };\n    el.current.appendChild(multisearch);\n  });\n  return <div ref={el}></div>;\n}\n"})})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);