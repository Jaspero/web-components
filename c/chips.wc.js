var J=Object.defineProperty,K=(i,e,t)=>e in i?J(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,P=(i,e,t)=>(K(i,typeof e!="symbol"?e+"":e,t),t);import{c as G,S as N,i as Q,f as h,s as R,a as U,l as I,e as g,b as z,d as v,t as j,g as w,h as x,J as F,o as V,n as B,j as k,m as W,L as X,k as Z,q as _,K as ee,r as te}from"./svelte.js";import"./index2.js";function ie(i){U(i,"svelte-114jydq",".field.svelte-114jydq.svelte-114jydq{position:relative;display:flex;justify-content:space-between;align-items:center;text-align:left;width:100%;min-height:3rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 .75rem;gap:.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);border-radius:.25rem}.field.required.svelte-114jydq .field-label.svelte-114jydq::after{content:' *'}.field.disabled.svelte-114jydq.svelte-114jydq{pointer-events:none;opacity:.33}.field.svelte-114jydq.svelte-114jydq:focus-within{border-color:var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.field-label.svelte-114jydq.svelte-114jydq{position:absolute;top:50%;transform:translateY(-50%);font-size:1rem;transition:transform .3s, top .3s, font-size .3s}.field-label.move.svelte-114jydq.svelte-114jydq{top:.125rem;transform:translateY(0);font-size:.75rem}.field-label.move+.field-container.svelte-114jydq .field-container-input.svelte-114jydq::-moz-placeholder{opacity:1}.field-label.move+.field-container.svelte-114jydq .field-container-input.svelte-114jydq::placeholder{opacity:1}.field-container.svelte-114jydq.svelte-114jydq{display:flex;flex-wrap:wrap;gap:.5rem;flex:auto;width:10rem;font-size:1rem;overflow:hidden;padding:1.25rem 0 .25rem 0;border:none;outline:none;border-radius:0}.field-container-chip.svelte-114jydq.svelte-114jydq{display:flex;align-items:center;gap:.25rem;background-color:var(--background-secondary);border-radius:.25rem;padding:.25rem}.field-container-chip-label.svelte-114jydq.svelte-114jydq{font-size:.875rem;word-break:break-all;white-space:normal}.field-container-input.svelte-114jydq.svelte-114jydq{border:none;outline:none;flex:auto;width:10rem;padding:0;border-radius:0;font-size:1rem}.field-container-input.svelte-114jydq.svelte-114jydq::-moz-placeholder{opacity:0;-moz-transition:opacity .3s;transition:opacity .3s}.field-container-input.svelte-114jydq.svelte-114jydq::placeholder{opacity:0;transition:opacity .3s}")}function E(i,e,t){const r=i.slice();return r[22]=e[t],r}function L(i){let e;return{c(){e=g("span"),v(e,"class","field-label svelte-114jydq"),j(e,"move",i[2]||i[0])},m(t,r){w(t,e,r),e.innerHTML=i[6]},p(t,r){r&64&&(e.innerHTML=t[6]),r&5&&j(e,"move",t[2]||t[0])},d(t){t&&k(e)}}}function M(i){let e,t,r=i[22]+"",p,q,o,y,c;function $(){return i[17](i[22])}return{c(){e=g("div"),t=g("span"),p=_(r),q=z(),o=g("button"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height=".875rem" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>',v(t,"class","field-container-chip-label svelte-114jydq"),v(o,"class","field-container-chip-button"),v(e,"class","field-container-chip svelte-114jydq")},m(f,d){w(f,e,d),x(e,t),x(t,p),x(e,q),x(e,o),y||(c=V(o,"click",ee($)),y=!0)},p(f,d){i=f,d&2&&r!==(r=i[22]+"")&&te(p,r)},d(f){f&&k(e),y=!1,c()}}}function ne(i){let e,t,r,p,q,o,y,c,$,f,d=i[6]&&L(i),b=I(i[1]),u=[];for(let a=0;a<b.length;a+=1)u[a]=M(E(i,b,a));return{c(){e=g("div"),t=g("label"),d&&d.c(),r=z(),p=g("div");for(let a=0;a<u.length;a+=1)u[a].c();q=z(),o=g("input"),y=z(),c=g("textarea"),v(o,"type","text"),v(o,"class","field-container-input svelte-114jydq"),v(o,"placeholder",i[7]),v(p,"class","field-container svelte-114jydq"),v(t,"class","field svelte-114jydq"),j(t,"disabled",i[9]),j(t,"required",i[8]),v(c,"id",i[4]),v(c,"name",i[5]),c.value=i[0],c.required=i[8],c.hidden=!0},m(a,s){w(a,e,s),x(e,t),d&&d.m(t,null),x(t,r),x(t,p);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(p,null);x(p,q),x(p,o),F(o,i[3]),w(a,y,s),w(a,c,s),$||(f=[V(window,"keydown",i[16]),V(o,"focus",i[18]),V(o,"blur",i[19]),V(o,"input",i[20])],$=!0)},p(a,[s]){if(a[6]?d?d.p(a,s):(d=L(a),d.c(),d.m(t,r)):d&&(d.d(1),d=null),s&2){b=I(a[1]);let l;for(l=0;l<b.length;l+=1){const m=E(a,b,l);u[l]?u[l].p(m,s):(u[l]=M(m),u[l].c(),u[l].m(p,q))}for(;l<u.length;l+=1)u[l].d(1);u.length=b.length}s&128&&v(o,"placeholder",a[7]),s&8&&o.value!==a[3]&&F(o,a[3]),s&512&&j(t,"disabled",a[9]),s&256&&j(t,"required",a[8]),s&16&&v(c,"id",a[4]),s&32&&v(c,"name",a[5]),s&1&&(c.value=a[0]),s&256&&(c.required=a[8])},i:B,o:B,d(a){a&&(k(e),k(y),k(c)),d&&d.d(),W(u,a),$=!1,X(f)}}}function se(i,e,t){let{attachedInternals:r}=e,{value:p=""}=e,{id:q=null}=e,{name:o=null}=e,{label:y="Label"}=e,{placeholder:c=null}=e,{minitems:$=0}=e,{maxitems:f=null}=e,{pattern:d=null}=e,{required:b=!1}=e,{unique:u=!1}=e,{disabled:a=!1}=e,{chips:s=[]}=e,{inputFocused:l=!1}=e,{inputValue:m=""}=e;const H=()=>s,T=Z(),C=n=>{l&&(n.key=="Enter"&&(n.preventDefault(),m&&(t(1,s=[...s,m]),t(3,m=""))),n.key=="Backspace"&&!m&&t(1,s=s.slice(0,-1)))},O=n=>{s.splice(s.indexOf(n),1),t(1,s),t(2,l),t(3,m)},S=()=>t(2,l=!0),Y=()=>t(2,l=!1);function D(){m=this.value,t(3,m),t(2,l),t(1,s)}return i.$$set=n=>{"attachedInternals"in n&&t(10,r=n.attachedInternals),"value"in n&&t(0,p=n.value),"id"in n&&t(4,q=n.id),"name"in n&&t(5,o=n.name),"label"in n&&t(6,y=n.label),"placeholder"in n&&t(7,c=n.placeholder),"minitems"in n&&t(11,$=n.minitems),"maxitems"in n&&t(12,f=n.maxitems),"pattern"in n&&t(13,d=n.pattern),"required"in n&&t(8,b=n.required),"unique"in n&&t(14,u=n.unique),"disabled"in n&&t(9,a=n.disabled),"chips"in n&&t(1,s=n.chips),"inputFocused"in n&&t(2,l=n.inputFocused),"inputValue"in n&&t(3,m=n.inputValue)},i.$$.update=()=>{i.$$.dirty&14&&!l&&m&&(t(1,s=[...s,m]),t(3,m="")),i.$$.dirty&31747&&(t(0,p=s.join(",")),s.length<$?r.setValidity({customError:!0},`A minimum of ${$} items need to be added.`):f&&s.length>f?r.setValidity({customError:!0},`A maximum of ${f} items are allowed.`):u&&new Set(s).size!==s.length?r.setValidity({customError:!0},"Chips are not unique."):d!=null&&s.filter(n=>d.test(n)).length!=s.length?r.setValidity({customError:!0},"Chips dont satisfy pattern."):r.setValidity({}),r.checkValidity(),r.setFormValue(p),T("value",s))},[p,s,l,m,q,o,y,c,b,a,r,$,f,d,u,H,C,O,S,Y,D]}class A extends N{constructor(e){super(),Q(this,e,se,ne,R,{attachedInternals:10,value:0,id:4,name:5,label:6,placeholder:7,minitems:11,maxitems:12,pattern:13,required:8,unique:14,disabled:9,chips:1,inputFocused:2,inputValue:3,getValue:15},ie)}get attachedInternals(){return this.$$.ctx[10]}set attachedInternals(e){this.$$set({attachedInternals:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get id(){return this.$$.ctx[4]}set id(e){this.$$set({id:e}),h()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),h()}get label(){return this.$$.ctx[6]}set label(e){this.$$set({label:e}),h()}get placeholder(){return this.$$.ctx[7]}set placeholder(e){this.$$set({placeholder:e}),h()}get minitems(){return this.$$.ctx[11]}set minitems(e){this.$$set({minitems:e}),h()}get maxitems(){return this.$$.ctx[12]}set maxitems(e){this.$$set({maxitems:e}),h()}get pattern(){return this.$$.ctx[13]}set pattern(e){this.$$set({pattern:e}),h()}get required(){return this.$$.ctx[8]}set required(e){this.$$set({required:e}),h()}get unique(){return this.$$.ctx[14]}set unique(e){this.$$set({unique:e}),h()}get disabled(){return this.$$.ctx[9]}set disabled(e){this.$$set({disabled:e}),h()}get chips(){return this.$$.ctx[1]}set chips(e){this.$$set({chips:e}),h()}get inputFocused(){return this.$$.ctx[2]}set inputFocused(e){this.$$set({inputFocused:e}),h()}get inputValue(){return this.$$.ctx[3]}set inputValue(e){this.$$set({inputValue:e}),h()}get getValue(){return this.$$.ctx[15]}}customElements.define("jp-chips",G(A,{attachedInternals:{},value:{},id:{},name:{},label:{},placeholder:{},minitems:{},maxitems:{},pattern:{},required:{type:"Boolean"},unique:{type:"Boolean"},disabled:{type:"Boolean"},chips:{},inputFocused:{type:"Boolean"},inputValue:{}},[],["getValue"],!1,i=>{var e;return e=class extends i{constructor(){super(),this.attachedInternals=this.attachInternals()}},P(e,"formAssociated",!0),e}));export{A as default};
