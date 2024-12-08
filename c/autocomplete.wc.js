var ye=Object.defineProperty,Me=(a,e,t)=>e in a?ye(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,xe=(a,e,t)=>Me(a,typeof e!="symbol"?e+"":e,t);import{c as be,S as ve,i as Ve,o as h,s as we,l as B,e as V,d as c,H as O,f as w,p as T,E as J,m as I,x as P,k as q,r as Q,G as qe,K as je,R as Le,n as K,D as X,F as Z,z as ee,w as Te,C as Ie,T as te}from"./svelte.js";import"./index.js";function ne(a,e,t){const s=a.slice();return s[42]=e[t],s[43]=e,s[44]=t,s}function ae(a){let e;return{c(){e=V("div"),c(e,"class","jp-autocomplete-label")},m(t,s){w(t,e,s),e.innerHTML=a[19]},p(t,s){s[0]&524288&&(e.innerHTML=t[19])},d(t){t&&q(e)}}}function se(a){let e;return{c(){e=V("span"),c(e,"class","jp-autocomplete-field-label"),O(e,"jp-autocomplete-field-label-move",a[13]||a[0])},m(t,s){w(t,e,s),e.innerHTML=a[19]},p(t,s){s[0]&524288&&(e.innerHTML=t[19]),s[0]&8193&&O(e,"jp-autocomplete-field-label-move",t[13]||t[0])},d(t){t&&q(e)}}}function ie(a){let e,t;function s(l,m){return l[14]?ke:Oe}let o=s(a),i=o(a);return{c(){e=V("div"),t=V("div"),i.c(),c(t,"class","jp-autocomplete-menu"),c(t,"style",a[17]),c(e,"class","jp-autocomplete-overlay")},m(l,m){w(l,e,m),T(e,t),i.m(t,null)},p(l,m){o===(o=s(l))&&i?i.p(l,m):(i.d(1),i=o(l),i&&(i.c(),i.m(t,null))),m[0]&131072&&c(t,"style",l[17])},d(l){l&&q(e),i.d()}}}function ke(a){let e=a[1].LOADING+"",t;return{c(){t=X(e)},m(s,o){w(s,t,o)},p(s,o){o[0]&2&&e!==(e=s[1].LOADING+"")&&Z(t,e)},d(s){s&&q(t)}}}function Oe(a){let e,t=ee(a[18]),s=[];for(let o=0;o<t.length;o+=1)s[o]=le(ne(a,t,o));return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=Te()},m(o,i){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,i);w(o,e,i)},p(o,i){if(i[0]&331777){t=ee(o[18]);let l;for(l=0;l<t.length;l+=1){const m=ne(o,t,l);s[l]?s[l].p(m,i):(s[l]=le(m),s[l].c(),s[l].m(e.parentNode,e))}for(;l<s.length;l+=1)s[l].d(1);s.length=t.length}},d(o){o&&q(e),Ie(s,o)}}}function le(a){let e,t=a[42]+"",s,o=a[44],i,l;const m=()=>a[36](e,o),M=()=>a[36](null,o);function b(){return a[37](a[42])}return{c(){e=V("button"),s=X(t),c(e,"type","button"),c(e,"class","jp-autocomplete-menu-button")},m(u,g){w(u,e,g),T(e,s),m(),i||(l=[I(e,"mousedown",te(b)),I(e,"click",te(a[33]))],i=!0)},p(u,g){a=u,g[0]&262144&&t!==(t=a[42]+"")&&Z(s,t),o!==a[44]&&(M(),o=a[44],m())},d(u){u&&q(e),M(),i=!1,Q(l)}}}function Ae(a){let e,t,s,o,i,l,m,M,b,u=a[2]&&a[3]=="outside"&&ae(a),g=a[2]&&a[3]==="inside"&&se(a),f=a[13]&&ie(a);return{c(){u&&u.c(),e=B(),t=V("div"),s=V("label"),g&&g.c(),o=B(),i=V("input"),m=B(),f&&f.c(),c(i,"class",l=`jp-autocomplete-field-input ${a[3]=="outside"||!a[2]?"":"jp-autocomplete-field-input-padding"}`),c(i,"type","text"),c(i,"id",a[4]),c(i,"name",a[5]),i.disabled=a[6],c(i,"placeholder",a[8]),i.required=a[7],c(i,"minlength",a[9]),c(i,"maxlength",a[10]),c(i,"pattern",a[11]),c(s,"class","jp-autocomplete-field"),O(s,"jp-autocomplete-field-disabled",a[6])},m(r,d){u&&u.m(r,d),w(r,e,d),w(r,t,d),T(t,s),g&&g.m(s,null),T(s,o),T(s,i),a[34](i),J(i,a[0]),T(s,m),f&&f.m(s,null),a[39](t),M||(b=[I(i,"input",a[35]),I(i,"focus",a[20]),I(t,"focusout",a[38]),I(t,"keydown",a[21])],M=!0)},p(r,d){r[2]&&r[3]=="outside"?u?u.p(r,d):(u=ae(r),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),r[2]&&r[3]==="inside"?g?g.p(r,d):(g=se(r),g.c(),g.m(s,o)):g&&(g.d(1),g=null),d[0]&12&&l!==(l=`jp-autocomplete-field-input ${r[3]=="outside"||!r[2]?"":"jp-autocomplete-field-input-padding"}`)&&c(i,"class",l),d[0]&16&&c(i,"id",r[4]),d[0]&32&&c(i,"name",r[5]),d[0]&64&&(i.disabled=r[6]),d[0]&256&&c(i,"placeholder",r[8]),d[0]&128&&(i.required=r[7]),d[0]&512&&c(i,"minlength",r[9]),d[0]&1024&&c(i,"maxlength",r[10]),d[0]&2048&&c(i,"pattern",r[11]),d[0]&1&&i.value!==r[0]&&J(i,r[0]),r[13]?f?f.p(r,d):(f=ie(r),f.c(),f.m(s,null)):f&&(f.d(1),f=null),d[0]&64&&O(s,"jp-autocomplete-field-disabled",r[6])},i:P,o:P,d(r){r&&(q(e),q(t)),u&&u.d(r),g&&g.d(),a[34](null),f&&f.d(),a[39](null),M=!1,Q(b)}}}function De(a,e,t){let s,{wording:o={LOADING:"Loading..."}}=e,{options:i=[]}=e,{value:l=""}=e,{asyncOptions:m=null}=e,{lag:M=300}=e,{label:b=""}=e,{labelType:u="inside"}=e,{id:g=null}=e,{name:f=null}=e,{disabled:r=!1}=e,{attachedInternals:d}=e,{required:A=!1}=e,{placeholder:R=""}=e,{minlength:W=null}=e,{maxlength:Y=null}=e,{pattern:_=null}=e,{validationMessages:L={}}=e,{requiredValidationMessage:D}=e,{minlengthValidationMessage:C}=e,{maxlengthValidationMessage:E}=e,{patternValidationMessage:H}=e;const re=()=>d.reportValidity();let N=!1,G,k,y=[],z,S=[],p,j=!1;const de=qe();function F(n){if(n&&n.target&&n.target.closest(".menu"))return;const $=k.getBoundingClientRect(),x=window.innerHeight-$.bottom,U=300;let v="";x<U?v=`
        width: ${$.width}px;
        bottom: ${window.innerHeight-$.top}px;
        left: ${$.left}px;
      `:v=`
        width: ${$.width}px;
        top: ${$.bottom}px;
        left: ${$.left}px;
      `,t(17,z=v),t(13,j=!j)}function ce(n){const $=y.findIndex(x=>x===document.activeElement);if($==-1)if(n.key=="ArrowDown"&&j&&y.length)y[0].focus();else return;if(j){if(n.key==="Escape"){p.blur();return}n.key==="Enter"&&(t(0,l=S[$]),p.focus());const x=n.key==="Home"||n.key==="ArrowUp"&&n.metaKey,U=n.key==="End"||n.key==="ArrowDown"&&n.metaKey;if(x){n.preventDefault(),y[0].focus();return}if(U){n.preventDefault(),y[y.length-1].focus();return}if(["ArrowDown","ArrowUp"].includes(n.key)){let v;n.preventDefault(),n.key==="ArrowUp"?$==0?v=y.length-1:v=$-1:$==y.length-1?v=0:v=$+1,y[v].focus()}}}je(()=>{typeof i=="string"&&t(22,i=JSON.parse(i))});function ue(n){Le.call(this,a,n)}function ge(n){K[n?"unshift":"push"](()=>{p=n,t(12,p)})}function pe(){l=this.value,t(0,l)}function he(n,$){K[n?"unshift":"push"](()=>{y[$]=n,t(16,y)})}const me=n=>{t(0,l=n),t(12,p.value=l,p),p.blur()},$e=n=>{j&&F()};function fe(n){K[n?"unshift":"push"](()=>{k=n,t(15,k)})}return a.$$set=n=>{"wording"in n&&t(1,o=n.wording),"options"in n&&t(22,i=n.options),"value"in n&&t(0,l=n.value),"asyncOptions"in n&&t(23,m=n.asyncOptions),"lag"in n&&t(24,M=n.lag),"label"in n&&t(2,b=n.label),"labelType"in n&&t(3,u=n.labelType),"id"in n&&t(4,g=n.id),"name"in n&&t(5,f=n.name),"disabled"in n&&t(6,r=n.disabled),"attachedInternals"in n&&t(25,d=n.attachedInternals),"required"in n&&t(7,A=n.required),"placeholder"in n&&t(8,R=n.placeholder),"minlength"in n&&t(9,W=n.minlength),"maxlength"in n&&t(10,Y=n.maxlength),"pattern"in n&&t(11,_=n.pattern),"validationMessages"in n&&t(26,L=n.validationMessages),"requiredValidationMessage"in n&&t(27,D=n.requiredValidationMessage),"minlengthValidationMessage"in n&&t(28,C=n.minlengthValidationMessage),"maxlengthValidationMessage"in n&&t(29,E=n.maxlengthValidationMessage),"patternValidationMessage"in n&&t(30,H=n.patternValidationMessage)},a.$$.update=()=>{if(a.$$.dirty[0]&8192&&(j?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY=""),a.$$.dirty[0]&2139099137|a.$$.dirty[1]&2&&(de("value",l),m&&(t(14,N=!0),clearTimeout(G),t(32,G=setTimeout(async()=>{t(22,i=await m(l)),t(14,N=!1)},M))),d.checkValidity(),p&&(p.validity.patternMismatch?d.setValidity({patternMismatch:!0},H||L.pattern||p.validationMessage,p):p.validity.tooShort?d.setValidity({tooShort:!0},C||L.minlength||p.validationMessage,p):p.validity.tooLong?d.setValidity({tooLong:!0},E||L.maxlength||p.validationMessage,p):p.validity.valueMissing?d.setValidity({valueMissing:!0},D||L.required||p.validationMessage,p):d.setValidity({}))),a.$$.dirty[0]&4194305&&Array.isArray(i)){let n=i.filter(x=>x.toLowerCase().startsWith(l.toLowerCase())),$=i.filter(x=>x.toLowerCase().includes(l.toLowerCase())&&!x.toLowerCase().startsWith(l.toLowerCase()));t(18,S=[...n,...$])}a.$$.dirty[0]&132&&t(19,s=A?`${b} *`:b)},[l,o,b,u,g,f,r,A,R,W,Y,_,p,j,N,k,y,z,S,s,F,ce,i,m,M,d,L,D,C,E,H,re,G,ue,ge,pe,he,me,$e,fe]}class oe extends ve{constructor(e){super(),Ve(this,e,De,Ae,we,{wording:1,options:22,value:0,asyncOptions:23,lag:24,label:2,labelType:3,id:4,name:5,disabled:6,attachedInternals:25,required:7,placeholder:8,minlength:9,maxlength:10,pattern:11,validationMessages:26,requiredValidationMessage:27,minlengthValidationMessage:28,maxlengthValidationMessage:29,patternValidationMessage:30,reportValidity:31},null,[-1,-1])}get wording(){return this.$$.ctx[1]}set wording(e){this.$$set({wording:e}),h()}get options(){return this.$$.ctx[22]}set options(e){this.$$set({options:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get asyncOptions(){return this.$$.ctx[23]}set asyncOptions(e){this.$$set({asyncOptions:e}),h()}get lag(){return this.$$.ctx[24]}set lag(e){this.$$set({lag:e}),h()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),h()}get labelType(){return this.$$.ctx[3]}set labelType(e){this.$$set({labelType:e}),h()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),h()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),h()}get disabled(){return this.$$.ctx[6]}set disabled(e){this.$$set({disabled:e}),h()}get attachedInternals(){return this.$$.ctx[25]}set attachedInternals(e){this.$$set({attachedInternals:e}),h()}get required(){return this.$$.ctx[7]}set required(e){this.$$set({required:e}),h()}get placeholder(){return this.$$.ctx[8]}set placeholder(e){this.$$set({placeholder:e}),h()}get minlength(){return this.$$.ctx[9]}set minlength(e){this.$$set({minlength:e}),h()}get maxlength(){return this.$$.ctx[10]}set maxlength(e){this.$$set({maxlength:e}),h()}get pattern(){return this.$$.ctx[11]}set pattern(e){this.$$set({pattern:e}),h()}get validationMessages(){return this.$$.ctx[26]}set validationMessages(e){this.$$set({validationMessages:e}),h()}get requiredValidationMessage(){return this.$$.ctx[27]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),h()}get minlengthValidationMessage(){return this.$$.ctx[28]}set minlengthValidationMessage(e){this.$$set({minlengthValidationMessage:e}),h()}get maxlengthValidationMessage(){return this.$$.ctx[29]}set maxlengthValidationMessage(e){this.$$set({maxlengthValidationMessage:e}),h()}get patternValidationMessage(){return this.$$.ctx[30]}set patternValidationMessage(e){this.$$set({patternValidationMessage:e}),h()}get reportValidity(){return this.$$.ctx[31]}}try{customElements.define("jp-autocomplete",be(oe,{wording:{},options:{},value:{},asyncOptions:{},lag:{},label:{},labelType:{},id:{},name:{},disabled:{type:"Boolean"},attachedInternals:{},required:{type:"Boolean"},placeholder:{},minlength:{},maxlength:{},pattern:{},validationMessages:{},requiredValidationMessage:{},minlengthValidationMessage:{},maxlengthValidationMessage:{},patternValidationMessage:{}},[],["reportValidity"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},xe(e,"formAssociated",!0),e}));}catch{};export{oe as default};
//# sourceMappingURL=autocomplete.wc.js.map
