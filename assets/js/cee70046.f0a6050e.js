"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,u=c["".concat(o,".").concat(k)]||c[k]||s[k]||i;return n?r.createElement(u,l(l({ref:e},m),{},{components:n})):r.createElement(u,l({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1845:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},l="Input",p={unversionedId:"Form fields/input",id:"Form fields/input",title:"Input",description:"Description",source:"@site/docs/Form fields/input.md",sourceDirName:"Form fields",slug:"/Form fields/input",permalink:"/web-components/Form fields/input",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Chips",permalink:"/web-components/Form fields/chips"},next:{title:"Multiselect",permalink:"/web-components/Form fields/multiselect"}},o={},d=[{value:"Description",id:"description",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Slots",id:"slots",level:3},{value:"Methods",id:"methods",level:3},{value:"Events",id:"events",level:3},{value:"Demo",id:"demo",level:3}],m={toc:d},c="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"input"},"Input"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<jp-input>")," is a field component with ",(0,a.kt)("inlineCode",{parentName:"p"},"<input>")," functionality."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Name")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Required")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"label"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"shows at the top of an input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"placeholder"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"temporary text that appears in an ",(0,a.kt)("br",null)," input field before any input is entered")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"name of the form control")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"id"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"unique identifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"hint"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"shows below the input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if an input is disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"required"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if an input is required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"readonly"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if an input is read-only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"type"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"One of the following: ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"td"},"'text'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'password'"),", ",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"td"},"'email'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'tel'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'url'")),(0,a.kt)("td",{parentName:"tr",align:"center"},"determines if an input is read-only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"minlength"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"minimum character count allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"maxlength"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"center"},"maximum character count allowed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"pattern"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"center"},"pattern that each chip has to satisfy")))),(0,a.kt)("h3",{id:"slots"},"Slots"),(0,a.kt)("p",null,"This component does not have any slots."),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("p",null,"This component does not have any methods."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"triggers when value of the field changes")))),(0,a.kt)("h3",{id:"demo"},"Demo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<form>\n  <jp-input value='pero' label='Perica' name='input'>\n  </jp-input>\n</form>\n")))}s.isMDXComponent=!0}}]);