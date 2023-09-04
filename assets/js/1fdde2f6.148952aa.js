"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,N=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return a?n.createElement(N,l(l({ref:t},c),{},{components:a})):n.createElement(N,l({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l="Async Table",o={unversionedId:"async-table",id:"async-table",title:"Async Table",description:"Description",source:"@site/docs/async-table.md",sourceDirName:".",slug:"/async-table",permalink:"/web-components/docs/async-table",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Alert",permalink:"/web-components/docs/alert"},next:{title:"Button",permalink:"/web-components/docs/button"}},p={},d=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>TableHeader</code>",id:"tableheader",level:4},{value:"Properties",id:"properties",level:5},{value:"TablePipe",id:"tablepipe",level:4},{value:"<code>TableSort</code>",id:"tablesort",level:4},{value:"Properties",id:"properties-1",level:5},{value:"<code>TableService</code>",id:"tableservice",level:4},{value:"Properties",id:"properties-2",level:5},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3}],c={toc:d},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"async-table"},"Async Table"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<jp-async-table>")," is a table component that loads its data asynchronously."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"headers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#tableheader"},(0,r.kt)("inlineCode",{parentName:"a"},"TableHeader[]"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"column names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sort"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#tablesort"},(0,r.kt)("inlineCode",{parentName:"a"},"TableSort"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"current sorting state of the table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"service"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#tableservice"},(0,r.kt)("inlineCode",{parentName:"a"},"TableService"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"table data service")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"tableheader"},(0,r.kt)("inlineCode",{parentName:"h4"},"TableHeader")),(0,r.kt)("p",null,"Defines the structure of a table header."),(0,r.kt)("h5",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"label"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"title for the table header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"used for identifying the corresponding data field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sortable"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"determines if the table column is sortable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sortMethod"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"used for custom sorting with ascending ( ",(0,r.kt)("em",{parentName:"td"},"'asc'")," ) or descending ( ",(0,r.kt)("em",{parentName:"td"},"'desc'")," ) direction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pipes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"#tablepipe"},(0,r.kt)("inlineCode",{parentName:"a"},"TablePipe"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"used for transforming table data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"fallback"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:"center"},"optional value used as a replacement if the specific value isn't available")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"tablepipe"},"TablePipe"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," (required, type: ",(0,r.kt)("inlineCode",{parentName:"li"},"any"),") - represents a data element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),") - numerical position in the table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"row")," (type: ",(0,r.kt)("inlineCode",{parentName:"li"},"any"),") - reference to the entire data row")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"tablesort"},(0,r.kt)("inlineCode",{parentName:"h4"},"TableSort")),(0,r.kt)("p",null,"Defines the sorting configuration of data."),(0,r.kt)("h5",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"used for describing the data field by which items are sorted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"asc")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"desc")),(0,r.kt)("td",{parentName:"tr",align:"center"},"determines if the sorting order is ascendant or descendant")))),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"tableservice"},(0,r.kt)("inlineCode",{parentName:"h4"},"TableService")),(0,r.kt)("p",null," Defines methods for fetching and loading more table data."),(0,r.kt)("h5",{id:"properties-2"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"get"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"retrieves data with optional sorting and returns a promise containing data rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"loadMore"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:"center"},"loads additional data with optional sorting and returns a promise containing rows of data")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"slots"},"Slots"),(0,r.kt)("p",null,"This component does not have any slots."),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("p",null,"This component does not have any methods."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rowClick"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"triggers when a row is clicked")))))}s.isMDXComponent=!0}}]);