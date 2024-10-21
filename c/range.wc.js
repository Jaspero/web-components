var P=Object.defineProperty,Y=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Z=(a,e,t)=>Y(a,typeof e!="symbol"?e+"":e,t);import{c as z,S as C,i as D,o as g,s as F,e as _,l as S,d as s,A as B,f as O,p as V,Y as A,m as I,w as k,k as M,r as G,x as H,y as K,Z as E,O as L}from"./svelte.js";import"./index.js";function J(a){let e,t;return{c(){e=new L(!1),t=K(),e.a=t},m($,h){e.m(a[9],$,h),O($,t,h)},p($,h){h&512&&e.p($[9])},d($){$&&(M(t),e.d())}}}function Q(a){let e,t,$,h,y,j,i,o,c,m,q,r,v,x,b,d,w,p=a[7]&&J(a);return{c(){e=_("div"),p&&p.c(),t=S(),$=_("div"),h=_("div"),j=S(),i=_("input"),q=S(),r=_("input"),s(e,"class","jp-range-slider-container"),s(h,"class","jp-range-progress"),s(h,"style",y=`left: ${a[11]}%; right: ${100-a[10]}%`),s(i,"type","range"),s(i,"class","jp-range-input"),i.disabled=a[0],s(i,"step",o=a[6]?a[4]:"any"),s(i,"min",a[3]),s(i,"max",a[2]),s(i,"id",c=a[1]+"_min"),s(i,"name",m=a[5]+"_min"),B(i,"jp-range-input-disabled",a[0]),s(r,"type","range"),s(r,"class","jp-range-input"),r.disabled=a[0],s(r,"step",v=a[6]?a[4]:"any"),s(r,"min",a[3]),s(r,"max",a[2]),s(r,"id",x=a[1]+"_max"),s(r,"name",b=a[5]+"_max"),B(r,"jp-range-input-disabled",a[0]),s($,"class","jp-range-slider")},m(n,l){O(n,e,l),p&&p.m(e,null),O(n,t,l),O(n,$,l),V($,h),V($,j),V($,i),A(i,a[8][0]),V($,q),V($,r),A(r,a[8][1]),d||(w=[I(i,"change",a[15]),I(i,"input",a[15]),I(r,"change",a[16]),I(r,"input",a[16])],d=!0)},p(n,[l]){n[7]?p?p.p(n,l):(p=J(n),p.c(),p.m(e,null)):p&&(p.d(1),p=null),l&3072&&y!==(y=`left: ${n[11]}%; right: ${100-n[10]}%`)&&s(h,"style",y),l&1&&(i.disabled=n[0]),l&80&&o!==(o=n[6]?n[4]:"any")&&s(i,"step",o),l&8&&s(i,"min",n[3]),l&4&&s(i,"max",n[2]),l&2&&c!==(c=n[1]+"_min")&&s(i,"id",c),l&32&&m!==(m=n[5]+"_min")&&s(i,"name",m),l&256&&A(i,n[8][0]),l&1&&B(i,"jp-range-input-disabled",n[0]),l&1&&(r.disabled=n[0]),l&80&&v!==(v=n[6]?n[4]:"any")&&s(r,"step",v),l&8&&s(r,"min",n[3]),l&4&&s(r,"max",n[2]),l&2&&x!==(x=n[1]+"_max")&&s(r,"id",x),l&32&&b!==(b=n[5]+"_max")&&s(r,"name",b),l&256&&A(r,n[8][1]),l&1&&B(r,"jp-range-input-disabled",n[0])},i:k,o:k,d(n){n&&(M(e),M(t),M($)),p&&p.d(),d=!1,G(w)}}}function R(a,e,t){let $,h,y,{disabled:j=!1}=e,{id:i=""}=e,{max:o=100}=e,{min:c=0}=e,{value:m=""}=e,{step:q=1}=e,{name:r=""}=e,{discrete:v=!0}=e,{required:x=!1}=e,{label:b=""}=e,d=[c,o];const w=()=>d,p=H();function n(){d[0]=E(this.value),t(8,d),t(12,m),t(3,c),t(2,o)}function l(){d[1]=E(this.value),t(8,d),t(12,m),t(3,c),t(2,o)}return a.$$set=u=>{"disabled"in u&&t(0,j=u.disabled),"id"in u&&t(1,i=u.id),"max"in u&&t(2,o=u.max),"min"in u&&t(3,c=u.min),"value"in u&&t(12,m=u.value),"step"in u&&t(4,q=u.step),"name"in u&&t(5,r=u.name),"discrete"in u&&t(6,v=u.discrete),"required"in u&&t(13,x=u.required),"label"in u&&t(7,b=u.label)},a.$$.update=()=>{a.$$.dirty&256&&d[0]>d[1]&&t(8,d[0]=d[1],d),a.$$.dirty&256&&d[1]<d[0]&&t(8,d[1]=d[0],d),a.$$.dirty&4108&&(m?(typeof m=="string"&&t(12,m=JSON.parse(m)),t(8,d=m)):t(8,d=[c,o])),a.$$.dirty&268&&t(11,$=Math.round(100*((d[0]-c)/(o-c)))),a.$$.dirty&268&&t(10,h=Math.round(100*((d[1]-c)/(o-c)))),a.$$.dirty&256&&p("value",{value:d}),a.$$.dirty&8320&&t(9,y=x?`${b} *`:b)},[j,i,o,c,q,r,v,b,d,y,h,$,m,x,w,n,l]}class N extends C{constructor(e){super(),D(this,e,R,Q,F,{disabled:0,id:1,max:2,min:3,value:12,step:4,name:5,discrete:6,required:13,label:7,getValue:14})}get disabled(){return this.$$.ctx[0]}set disabled(e){this.$$set({disabled:e}),g()}get id(){return this.$$.ctx[1]}set id(e){this.$$set({id:e}),g()}get max(){return this.$$.ctx[2]}set max(e){this.$$set({max:e}),g()}get min(){return this.$$.ctx[3]}set min(e){this.$$set({min:e}),g()}get value(){return this.$$.ctx[12]}set value(e){this.$$set({value:e}),g()}get step(){return this.$$.ctx[4]}set step(e){this.$$set({step:e}),g()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),g()}get discrete(){return this.$$.ctx[6]}set discrete(e){this.$$set({discrete:e}),g()}get required(){return this.$$.ctx[13]}set required(e){this.$$set({required:e}),g()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),g()}get getValue(){return this.$$.ctx[14]}}try{customElements.define("jp-range",z(N,{disabled:{type:"Boolean"},id:{},max:{},min:{},value:{},step:{},name:{},discrete:{type:"Boolean"},required:{type:"Boolean"},label:{}},[],["getValue"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals()}},Z(e,"formAssociated",!0),e}));}catch{};export{N as default};
//# sourceMappingURL=range.wc.js.map
