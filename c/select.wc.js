var he=Object.defineProperty,pe=(r,e,t)=>e in r?he(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,be=(r,e,t)=>(pe(r,typeof e!="symbol"?e+"":e,t),t);import{c as xe,S as ve,i as we,f as I,s as ge,a as ye,b as D,e as V,t as G,G as O,l as ke,d as a,K as P,m as L,g as Y,h as $,L as R,o as K,J as W,u as X,n as _,j as H,r as F,k as $e,x as ze,p as Q,W as Te,X as qe,I as S}from"./svelte.js";import"./index2.js";function Ie(r){ye(r,"svelte-9fh55x",`.has-hint.svelte-9fh55x.svelte-9fh55x{position:relative;margin-bottom:1.25rem}.overlay.svelte-9fh55x.svelte-9fh55x{z-index:100;position:fixed;top:0;left:0;right:0;bottom:0}.select.svelte-9fh55x.svelte-9fh55x{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:left;width:100%;height:3rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0 0.75rem;gap:0.75rem;background-color:var(--background-primary);border:1px solid var(--border-primary);-webkit-border-radius:0.25rem;-moz-border-radius:0.25rem;border-radius:0.25rem}.select.svelte-9fh55x.svelte-9fh55x:focus{outline:none;border-color:var(--primary-color);-webkit-box-shadow:inset 0 0 0 1px var(--primary-color);-moz-box-shadow:inset 0 0 0 1px var(--primary-color);box-shadow:inset 0 0 0 1px var(--primary-color)}.select.toggled.svelte-9fh55x.svelte-9fh55x{-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color);-webkit-box-shadow:inset 0 -2px 1px -1px var(--primary-color);-moz-box-shadow:inset 0 -2px 1px -1px var(--primary-color);box-shadow:inset 0 -2px 1px -1px var(--primary-color)}.select.svelte-9fh55x.svelte-9fh55x:disabled{opacity:0.5}.select-label.svelte-9fh55x.svelte-9fh55x{position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-o-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-moz-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;-webkit-transition:top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s;transition:top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s;-o-transition:top 0.3s,
      font-size 0.3s,
      -o-transform 0.3s;-moz-transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s,
      -moz-transform 0.3s;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s,
      -webkit-transform 0.3s,
      -moz-transform 0.3s,
      -o-transform 0.3s}.select-label.move.svelte-9fh55x.svelte-9fh55x{top:0.25rem;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);font-size:0.75rem}input:required+.select.svelte-9fh55x .select-label.svelte-9fh55x::after{content:' *'}input.svelte-9fh55x:required:invalid+.select.svelte-9fh55x{border-color:var(--danger-color)}.select-option.svelte-9fh55x.svelte-9fh55x{-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;width:10rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.select-option-padding.svelte-9fh55x.svelte-9fh55x{padding:1rem 0 0 0}.select-arrow.svelte-9fh55x.svelte-9fh55x{width:1rem;height:1rem;min-width:1rem;min-height:1rem;-webkit-transition:transform 0.3s;-o-transition:transform 0.3s;-moz-transition:transform 0.3s;-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;-o-transition:-o-transform 0.3s;-moz-transition:transform 0.3s,
      -moz-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s,
      -webkit-transform 0.3s,
      -moz-transform 0.3s,
      -o-transform 0.3s}.select-arrow.rotate.svelte-9fh55x.svelte-9fh55x{-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-ms-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg)}.select-hint.svelte-9fh55x.svelte-9fh55x{position:absolute;top:100%;left:0;width:100%;height:1.25rem;line-height:1.25rem;font-size:0.75rem;padding:0 0.75rem;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;color:var(--text-secondary)}.select-hint.svelte-9fh55x.svelte-9fh55x:hover{z-index:255;overflow:unset}.menu.svelte-9fh55x.svelte-9fh55x{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:300px;overflow-y:auto;-webkit-border-bottom-left-radius:0.25rem;-moz-border-radius-bottomleft:0.25rem;border-bottom-left-radius:0.25rem;-webkit-border-bottom-right-radius:0.25rem;-moz-border-radius-bottomright:0.25rem;border-bottom-right-radius:0.25rem;-webkit-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);-moz-box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);background-color:var(--background-primary)}.menu-button.svelte-9fh55x.svelte-9fh55x{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:0.75rem;padding:0.75rem;text-align:left;outline:none;-webkit-transition:background-color 0.3s,
      color 0.3s,
      fill 0.3s;-o-transition:background-color 0.3s,
      color 0.3s,
      fill 0.3s;-moz-transition:background-color 0.3s,
      color 0.3s,
      fill 0.3s;transition:background-color 0.3s,
      color 0.3s,
      fill 0.3s}.menu-button.selected.svelte-9fh55x.svelte-9fh55x{background-color:var(--background-tertiary);color:var(--primary-color);fill:var(--primary-color)}.menu-button.svelte-9fh55x.svelte-9fh55x:disabled{opacity:0.33}.menu-button.svelte-9fh55x.svelte-9fh55x:not(:disabled):hover,.menu-button.svelte-9fh55x.svelte-9fh55x:focus{background-color:var(--background-secondary)}`)}function Z(r,e,t){const s=r.slice();return s[31]=e[t],s[32]=e,s[33]=t,s}function ee(r){let e;return{c(){e=V("div"),a(e,"class","label")},m(t,s){Y(t,e,s),e.innerHTML=r[7]},p(t,s){s[0]&128&&(e.innerHTML=t[7])},d(t){t&&H(e)}}}function te(r){let e;return{c(){e=V("span"),a(e,"class","select-label svelte-9fh55x"),L(e,"move",r[14]||r[10])},m(t,s){Y(t,e,s),e.innerHTML=r[7]},p(t,s){s[0]&128&&(e.innerHTML=t[7]),s[0]&17408&&L(e,"move",t[14]||t[10])},d(t){t&&H(e)}}}function oe(r){let e;return{c(){e=V("span"),a(e,"class","select-hint svelte-9fh55x")},m(t,s){Y(t,e,s),e.innerHTML=r[4]},p(t,s){s[0]&16&&(e.innerHTML=t[4])},d(t){t&&H(e)}}}function re(r){let e,t,s=[],n=new Map,d,T,g=Q(r[1]);const h=l=>l[31];for(let l=0;l<g.length;l+=1){let u=Z(r,g,l),k=h(u);n.set(k,s[l]=ie(k,u))}return{c(){e=V("div"),t=V("div");for(let l=0;l<s.length;l+=1)s[l].c();a(t,"class","menu svelte-9fh55x"),a(t,"style",r[12]),a(e,"class","overlay svelte-9fh55x"),a(e,"tabindex","-1"),a(e,"role","dialog")},m(l,u){Y(l,e,u),$(e,t);for(let k=0;k<s.length;k+=1)s[k]&&s[k].m(t,null);d||(T=[K(e,"click",r[15]),K(e,"keydown",r[16])],d=!0)},p(l,u){u[0]&24579&&(g=Q(l[1]),s=Te(s,u,h,1,l,g,n,t,qe,ie,null,Z)),u[0]&4096&&a(t,"style",l[12])},d(l){l&&H(e);for(let u=0;u<s.length;u+=1)s[u].d();d=!1,F(T)}}}function se(r){let e,t;return{c(){e=O("svg"),t=O("path"),a(t,"d","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"width","1rem"),a(e,"height","1rem"),a(e,"viewBox","0 0 448 512")},m(s,n){Y(s,e,n),$(e,t)},d(s){s&&H(e)}}}function ie(r,e){let t,s,n=(e[31].label?e[31].label:e[31].value)+"",d,T,g,h,l=e[33],u,k,c=e[0]==e[31].value&&se();const E=()=>e[24](t,l),M=()=>e[24](null,l);function q(){return e[25](e[31])}return{key:r,first:null,c(){t=V("button"),s=V("span"),d=G(n),T=D(),c&&c.c(),g=D(),a(t,"class","menu-button svelte-9fh55x"),t.disabled=h=e[31].disabled,L(t,"selected",e[0]==e[31].value),this.first=t},m(b,x){Y(b,t,x),$(t,s),$(s,d),$(t,T),c&&c.m(t,null),$(t,g),E(),u||(k=K(t,"click",W(q)),u=!0)},p(b,x){e=b,x[0]&2&&n!==(n=(e[31].label?e[31].label:e[31].value)+"")&&X(d,n),e[0]==e[31].value?c||(c=se(),c.c(),c.m(t,g)):c&&(c.d(1),c=null),x[0]&2&&h!==(h=e[31].disabled)&&(t.disabled=h),l!==e[33]&&(M(),l=e[33],E()),x[0]&3&&L(t,"selected",e[0]==e[31].value)},d(b){b&&H(t),c&&c.d(),M(),u=!1,k()}}}function Ve(r){let e,t,s,n,d,T,g,h=(r[14]||"")+"",l,u,k,c,E,M,q,b,x,N,f=r[7]&&r[8]=="outside"&&ee(r),v=r[7]&&r[8]=="inside"&&te(r),y=r[4]&&oe(r),w=r[10]&&re(r);return{c(){f&&f.c(),e=D(),t=V("div"),s=V("input"),n=D(),d=V("button"),v&&v.c(),T=D(),g=V("span"),l=G(h),k=D(),c=O("svg"),E=O("path"),M=D(),y&&y.c(),q=D(),w&&w.c(),b=ke(),a(s,"id",r[5]),a(s,"name",r[6]),s.required=r[3],s.hidden=!0,a(s,"class","svelte-9fh55x"),a(g,"class",u=P(`select-option ${r[8]=="outside"||!r[7]?"":"select-option-padding"}`)+" svelte-9fh55x"),a(E,"d","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"),a(c,"xmlns","http://www.w3.org/2000/svg"),a(c,"viewBox","0 0 320 512"),a(c,"class","select-arrow svelte-9fh55x"),L(c,"rotate",r[10]),a(d,"class","select svelte-9fh55x"),d.disabled=r[2],L(d,"toggled",r[10]),a(t,"class","svelte-9fh55x"),L(t,"has-hint",r[4])},m(i,m){f&&f.m(i,m),Y(i,e,m),Y(i,t,m),$(t,s),R(s,r[0]),r[22](s),$(t,n),$(t,d),v&&v.m(d,null),$(d,T),$(d,g),$(g,l),$(d,k),$(d,c),$(c,E),r[23](d),$(t,M),y&&y.m(t,null),Y(i,q,m),w&&w.m(i,m),Y(i,b,m),x||(N=[K(s,"input",r[21]),K(d,"click",W(r[15])),K(d,"keydown",r[16])],x=!0)},p(i,m){i[7]&&i[8]=="outside"?f?f.p(i,m):(f=ee(i),f.c(),f.m(e.parentNode,e)):f&&(f.d(1),f=null),m[0]&32&&a(s,"id",i[5]),m[0]&64&&a(s,"name",i[6]),m[0]&8&&(s.required=i[3]),m[0]&1&&s.value!==i[0]&&R(s,i[0]),i[7]&&i[8]=="inside"?v?v.p(i,m):(v=te(i),v.c(),v.m(d,T)):v&&(v.d(1),v=null),m[0]&16384&&h!==(h=(i[14]||"")+"")&&X(l,h),m[0]&384&&u!==(u=P(`select-option ${i[8]=="outside"||!i[7]?"":"select-option-padding"}`)+" svelte-9fh55x")&&a(g,"class",u),m[0]&1024&&L(c,"rotate",i[10]),m[0]&4&&(d.disabled=i[2]),m[0]&1024&&L(d,"toggled",i[10]),i[4]?y?y.p(i,m):(y=oe(i),y.c(),y.m(t,null)):y&&(y.d(1),y=null),m[0]&16&&L(t,"has-hint",i[4]),i[10]?w?w.p(i,m):(w=re(i),w.c(),w.m(b.parentNode,b)):w&&(w.d(1),w=null)},i:_,o:_,d(i){i&&(H(e),H(t),H(q),H(b)),f&&f.d(i),r[22](null),v&&v.d(),r[23](null),y&&y.d(),w&&w.d(i),x=!1,F(N)}}}function Me(r,e,t){let{attachedInternals:s}=e,{options:n=[]}=e,{disabled:d=!1}=e,{required:T=!1}=e,{hint:g=""}=e,{value:h=""}=e,{id:l=""}=e,{name:u=""}=e,{label:k="Label"}=e,{labelType:c="inside"}=e;const E=()=>h;let{requiredValidationMessage:M}=e,q,b=!1,x,N,f=[],v="",y,w;const i=$e(),m=()=>{s.reportValidity()};function C(){const o=x.getBoundingClientRect(),z=window.innerHeight-o.bottom,p=300;let A="";z<p?A=`
            min-width: ${o.width}px;
            bottom: ${window.innerHeight-o.top}px;
            left: ${o.left}px;
        `:A=`
            min-width: ${o.width}px;
            top: ${o.bottom}px;
            left: ${o.left}px;
        `,t(12,N=A),t(10,b=!b),b&&setTimeout(()=>{const J=n.findIndex(j=>!j.disabled);J!==-1&&f[J].focus()},10),b||setTimeout(()=>{x.focus()},10)}function U(o,z){if(z==="next"){for(let p=o+1;p<n.length;p++)if(!n[p].disabled)return p}else if(z==="previous"){for(let p=o-1;p>=0;p--)if(!n[p].disabled)return p}return o}function ae(o){const z=f.findIndex(A=>A===document.activeElement);let p;if(b){if(o.key==="Escape"){C(),x.focus();return}const A=o.key==="Home"||o.key==="ArrowUp"&&o.metaKey,J=o.key==="End"||o.key==="ArrowDown"&&o.metaKey;if(A){o.preventDefault();const j=n.findIndex(B=>!B.disabled);j!==-1&&f[j].focus();return}if(J){o.preventDefault();const j=n.slice().reverse().findIndex(me=>!me.disabled),B=j!==-1?n.length-1-j:-1;B!==-1&&f[B].focus();return}if(["ArrowDown","ArrowUp"].includes(o.key)&&(o.preventDefault(),o.key==="ArrowUp"?p=U(z,"previous"):p=U(z,"next"),f[p].focus()),o.key==="Tab"){if(o.preventDefault(),o.shiftKey){if(p=U(z,"previous"),z===p){C(),x.focus();return}}else if(p=U(z,"next"),z===p){C(),x.focus();return}f[p].focus()}if(/^[a-z\d]$/i.test(o.key)){clearTimeout(y),v+=o.key;const j=n.findIndex(B=>B.toLowerCase().includes(v.toLowerCase()));j!==-1&&f[j].focus(),y=setTimeout(()=>{v=""},500)}}}ze(()=>{typeof n=="string"&&t(1,n=JSON.parse(n)),n.forEach(o=>{o.value==h&&t(14,w=o.label?o.label:o.value)})});function ne(){h=this.value,t(0,h)}function de(o){S[o?"unshift":"push"](()=>{q=o,t(9,q)})}function ce(o){S[o?"unshift":"push"](()=>{x=o,t(11,x)})}function fe(o,z){S[o?"unshift":"push"](()=>{f[z]=o,t(13,f)})}const ue=o=>{t(0,h=o.value),t(14,w=o.label?o.label:o.value)};return r.$$set=o=>{"attachedInternals"in o&&t(17,s=o.attachedInternals),"options"in o&&t(1,n=o.options),"disabled"in o&&t(2,d=o.disabled),"required"in o&&t(3,T=o.required),"hint"in o&&t(4,g=o.hint),"value"in o&&t(0,h=o.value),"id"in o&&t(5,l=o.id),"name"in o&&t(6,u=o.name),"label"in o&&t(7,k=o.label),"labelType"in o&&t(8,c=o.labelType),"requiredValidationMessage"in o&&t(19,M=o.requiredValidationMessage)},r.$$.update=()=>{r.$$.dirty[0]&655873&&(s.checkValidity(),q&&q.validity.valueMissing&&M&&s.setValidity({customError:!0},M),i("value",h)),r.$$.dirty[0]&1024&&(b?document.documentElement.style.overflowY="hidden":document.documentElement.style.overflowY="")},[h,n,d,T,g,l,u,k,c,q,b,x,N,f,w,C,ae,s,E,M,m,ne,de,ce,fe,ue]}class le extends ve{constructor(e){super(),we(this,e,Me,Ve,ge,{attachedInternals:17,options:1,disabled:2,required:3,hint:4,value:0,id:5,name:6,label:7,labelType:8,getValue:18,requiredValidationMessage:19,reportValidity:20},Ie,[-1,-1])}get attachedInternals(){return this.$$.ctx[17]}set attachedInternals(e){this.$$set({attachedInternals:e}),I()}get options(){return this.$$.ctx[1]}set options(e){this.$$set({options:e}),I()}get disabled(){return this.$$.ctx[2]}set disabled(e){this.$$set({disabled:e}),I()}get required(){return this.$$.ctx[3]}set required(e){this.$$set({required:e}),I()}get hint(){return this.$$.ctx[4]}set hint(e){this.$$set({hint:e}),I()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),I()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),I()}get name(){return this.$$.ctx[6]}set name(e){this.$$set({name:e}),I()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),I()}get labelType(){return this.$$.ctx[8]}set labelType(e){this.$$set({labelType:e}),I()}get getValue(){return this.$$.ctx[18]}get requiredValidationMessage(){return this.$$.ctx[19]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),I()}get reportValidity(){return this.$$.ctx[20]}}try{customElements.define("jp-select",xe(le,{attachedInternals:{},options:{},disabled:{type:"Boolean"},required:{type:"Boolean"},hint:{},value:{},id:{},name:{},label:{},labelType:{},requiredValidationMessage:{}},[],["getValue","reportValidity"],!1,r=>{var e;return e=class extends r{constructor(){super(),this.attachedInternals=this.attachInternals()}},be(e,"formAssociated",!0),e}));}catch{};export{le as default};