import{c as zn,S as On,i as En,o as M,s as Ln,e as $,l as D,d as m,v as K,f as h,p as k,m as S,w as I,k as f,x as An,G as Sn,z as F,B as U,y as Q,C as T,D as Y,A as v,a1 as J,N as Mn,r as ge,n as Dn,E as oe,F as xe,O as ke,X as Rn,Z as In}from"./svelte.js";import"./index.js";import{get as Nn}from"./json-pointer.js";function je(t,e,n){const a=t.slice();return a[72]=e[n],a[73]=e,a[74]=n,a}function ve(t,e,n){const a=t.slice();return a[75]=e[n],a[77]=n,a}function Ce(t,e,n){const a=t.slice();return a[78]=e[n],a[74]=n,a}function ze(t,e,n){const a=t.slice();return a[78]=e[n],a[74]=n,a}function Oe(t,e,n){const a=t.slice();return a[82]=e[n],a}function Ee(t){let e,n,a,l=t[7]&&Le(t),o=t[11]&&Ae(t),r=t[10]&&Se(t);return{c(){e=$("div"),l&&l.c(),n=D(),o&&o.c(),a=D(),r&&r.c(),m(e,"class","jp-async-table-header")},m(c,i){h(c,e,i),l&&l.m(e,null),k(e,n),o&&o.m(e,null),k(e,a),r&&r.m(e,null)},p(c,i){c[7]?l?l.p(c,i):(l=Le(c),l.c(),l.m(e,n)):l&&(l.d(1),l=null),c[11]?o?o.p(c,i):(o=Ae(c),o.c(),o.m(e,a)):o&&(o.d(1),o=null),c[10]?r?r.p(c,i):(r=Se(c),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(c){c&&f(e),l&&l.d(),o&&o.d(),r&&r.d()}}}function Le(t){let e,n,a=t[5].ARRANGE_COLUMNS+"",l,o,r;return{c(){e=F(`\xA0
        `),n=$("button"),l=F(a),m(n,"type","button"),m(n,"class","jp-async-table-button")},m(c,i){h(c,e,i),h(c,n,i),k(n,l),o||(r=S(n,"click",t[37]),o=!0)},p(c,i){i[0]&32&&a!==(a=c[5].ARRANGE_COLUMNS+"")&&U(l,a)},d(c){c&&(f(e),f(n)),o=!1,r()}}}function Ae(t){let e,n,a=t[5].IMPORT+"",l,o,r;return{c(){e=F(`\xA0
        `),n=$("button"),l=F(a),m(n,"type","button"),m(n,"class","jp-async-table-button")},m(c,i){h(c,e,i),h(c,n,i),k(n,l),o||(r=S(n,"click",t[47]),o=!0)},p(c,i){i[0]&32&&a!==(a=c[5].IMPORT+"")&&U(l,a)},d(c){c&&(f(e),f(n)),o=!1,r()}}}function Se(t){let e,n;function a(r,c){return r[14]?Pn:Bn}let l=a(t),o=l(t);return{c(){e=F(`\xA0
        `),o.c(),n=Q()},m(r,c){h(r,e,c),o.m(r,c),h(r,n,c)},p(r,c){l===(l=a(r))&&o?o.p(r,c):(o.d(1),o=l(r),o&&(o.c(),o.m(n.parentNode,n)))},d(r){r&&(f(e),f(n)),o.d(r)}}}function Pn(t){let e,n,a,l,o,r=t[17]&&Me(t);return{c(){e=$("div"),n=$("button"),n.textContent="Export",a=D(),r&&r.c(),m(n,"type","button"),m(n,"class","jp-async-table-button"),m(e,"class","jp-async-table-dropdown")},m(c,i){h(c,e,i),k(e,n),k(e,a),r&&r.m(e,null),l||(o=S(n,"click",t[48]),l=!0)},p(c,i){c[17]?r?r.p(c,i):(r=Me(c),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(c){c&&f(e),r&&r.d(),l=!1,o()}}}function Bn(t){let e,n,a;function l(c,i){return c[20]?Fn:Gn}let o=l(t),r=o(t);return{c(){e=$("button"),r.c(),m(e,"type","button"),m(e,"class","jp-async-table-button"),e.disabled=t[20],v(e,"jp-async-table-loading",t[20])},m(c,i){h(c,e,i),r.m(e,null),n||(a=S(e,"click",t[32]),n=!0)},p(c,i){o===(o=l(c))&&r?r.p(c,i):(r.d(1),r=o(c),r&&(r.c(),r.m(e,null))),i[0]&1048576&&(e.disabled=c[20]),i[0]&1048576&&v(e,"jp-async-table-loading",c[20])},d(c){c&&f(e),r.d(),n=!1,a()}}}function Me(t){let e,n=T(t[25]),a=[];for(let l=0;l<n.length;l+=1)a[l]=De(Oe(t,n,l));return{c(){e=$("ul");for(let l=0;l<a.length;l+=1)a[l].c();m(e,"class","jp-async-table-dropdown-menu")},m(l,o){h(l,e,o);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null)},p(l,o){if(o[0]&33554432|o[1]&512){n=T(l[25]);let r;for(r=0;r<n.length;r+=1){const c=Oe(l,n,r);a[r]?a[r].p(c,o):(a[r]=De(c),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(l){l&&f(e),Y(a,l)}}}function De(t){let e,n,a;function l(){return t[49](t[82])}return{c(){e=$("button"),e.textContent=`${t[82]} `,m(e,"type","button"),m(e,"class","jp-async-table-dropdown-option")},m(o,r){h(o,e,r),n||(a=S(e,"click",l),n=!0)},p(o,r){t=o},d(o){o&&f(e),n=!1,a()}}}function Gn(t){let e=t[5].EXPORT+"",n;return{c(){n=F(e)},m(a,l){h(a,n,l)},p(a,l){l[0]&32&&e!==(e=a[5].EXPORT+"")&&U(n,e)},d(a){a&&f(n)}}}function Fn(t){let e,n,a=t[5].LOADING+"",l;return{c(){e=$("span"),n=D(),l=F(a),m(e,"class","jp-async-table-spinner")},m(o,r){h(o,e,r),h(o,n,r),h(o,l,r)},p(o,r){r[0]&32&&a!==(a=o[5].LOADING+"")&&U(l,a)},d(o){o&&(f(e),f(n),f(l))}}}function Re(t){let e,n=T(t[0]),a=[];for(let l=0;l<n.length;l+=1)a[l]=Pe(ze(t,n,l));return{c(){e=$("tr");for(let l=0;l<a.length;l+=1)a[l].c()},m(l,o){h(l,e,o);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(e,null)},p(l,o){if(o[0]&285213509|o[1]&60){n=T(l[0]);let r;for(r=0;r<n.length;r+=1){const c=ze(l,n,r);a[r]?a[r].p(c,o):(a[r]=Pe(c),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(l){l&&f(e),Y(a,l)}}}function Ie(t){var e;let n,a,l,o,r,c,i,E,O={ctx:t,current:null,token:null,hasCatch:!1,pending:Un,then:_n,catch:Tn,value:80};oe(l=Ze(t[78]),O);let g=((e=t[2])==null?void 0:e.key)===t[78].key&&Ne(t);function z(){return t[50](t[78])}function G(...b){return t[51](t[78],...b)}function C(...b){return t[52](t[78],t[74],...b)}function y(){return t[53](t[78])}function u(...b){return t[54](t[78],t[74],...b)}return{c(){n=$("th"),a=$("span"),O.block.c(),o=D(),g&&g.c(),r=D(),m(a,"tabindex","-1"),m(a,"role","button"),m(a,"aria-label","Drag handle"),v(a,"jp-async-table-draggable-column",t[6]&&!t[78].disableOrganize),m(n,"draggable",c=t[6]&&!t[78].disableOrganize),v(n,"jp-async-table-sortable",t[6]&&t[78].sortable),v(n,"jp-async-table-sticky-first",t[8]&&t[74]===0),v(n,"jp-async-table-sticky-last",t[74]===t[0].length-1&&t[9]),v(n,"jp-async-table-no-cursor",t[78].disableOrganize),v(n,"jp-async-table-hover-over",t[24]===t[74])},m(b,d){h(b,n,d),k(n,a),O.block.m(a,O.anchor=null),O.mount=()=>a,O.anchor=null,k(n,o),g&&g.m(n,null),k(n,r),i||(E=[S(n,"click",z),S(n,"dragstart",G),S(n,"dragover",C),S(n,"dragleave",y),S(n,"drop",u)],i=!0)},p(b,d){var j;t=b,O.ctx=t,d[0]&1&&l!==(l=Ze(t[78]))&&oe(l,O)||xe(O,t,d),d[0]&65&&v(a,"jp-async-table-draggable-column",t[6]&&!t[78].disableOrganize),((j=t[2])==null?void 0:j.key)===t[78].key?g?g.p(t,d):(g=Ne(t),g.c(),g.m(n,r)):g&&(g.d(1),g=null),d[0]&65&&c!==(c=t[6]&&!t[78].disableOrganize)&&m(n,"draggable",c),d[0]&65&&v(n,"jp-async-table-sortable",t[6]&&t[78].sortable),d[0]&256&&v(n,"jp-async-table-sticky-first",t[8]&&t[74]===0),d[0]&513&&v(n,"jp-async-table-sticky-last",t[74]===t[0].length-1&&t[9]),d[0]&1&&v(n,"jp-async-table-no-cursor",t[78].disableOrganize),d[0]&16777216&&v(n,"jp-async-table-hover-over",t[24]===t[74])},d(b){b&&f(n),O.block.d(),O.token=null,O=null,g&&g.d(),i=!1,ge(E)}}}function Tn(t){return{c:I,m:I,p:I,d:I}}function _n(t){let e,n=t[80]+"",a;return{c(){e=new In(!1),a=Q(),e.a=a},m(l,o){e.m(n,l,o),h(l,a,o)},p(l,o){o[0]&1&&n!==(n=l[80]+"")&&e.p(n)},d(l){l&&(f(a),e.d())}}}function Un(t){return{c:I,m:I,p:I,d:I}}function Ne(t){let e,n=t[2].direction==="asc"?"\u2191":"\u2193",a;return{c(){e=$("span"),a=F(n),m(e,"class","jp-async-table-sortable")},m(l,o){h(l,e,o),k(e,a)},p(l,o){o[0]&4&&n!==(n=l[2].direction==="asc"?"\u2191":"\u2193")&&U(a,n)},d(l){l&&f(e)}}}function Pe(t){let e,n=!t[78].disabled&&Ie(t);return{c(){n&&n.c(),e=Q()},m(a,l){n&&n.m(a,l),h(a,e,l)},p(a,l){a[78].disabled?n&&(n.d(1),n=null):n?n.p(a,l):(n=Ie(a),n.c(),n.m(e.parentNode,e))},d(a){a&&f(e),n&&n.d(a)}}}function Be(t){let e,n=T(t[3]),a=[];for(let l=0;l<n.length;l+=1)a[l]=Te(ve(t,n,l));return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=Q()},m(l,o){for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(l,o);h(l,e,o)},p(l,o){if(o[0]&1224741705){n=T(l[3]);let r;for(r=0;r<n.length;r+=1){const c=ve(l,n,r);a[r]?a[r].p(c,o):(a[r]=Te(c),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(l){l&&f(e),Y(a,l)}}}function Ge(t){let e,n,a,l,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Vn,then:Xn,catch:Hn,value:80};oe(n=t[27](t[78],t[75],t[77]),o);function r(...c){return t[55](t[75],t[74],t[78],...c)}return{c(){e=$("td"),o.block.c(),v(e,"jp-async-table-sortable",t[6]&&t[78].sortable),v(e,"jp-async-table-sticky-first",t[8]&&t[74]===0),v(e,"jp-async-table-sticky-last",t[74]===t[0].length-1&&t[9]),v(e,"jp-async-table-hover-over",t[24]===t[74])},m(c,i){h(c,e,i),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,a||(l=S(e,"click",r),a=!0)},p(c,i){t=c,o.ctx=t,i[0]&9&&n!==(n=t[27](t[78],t[75],t[77]))&&oe(n,o)||xe(o,t,i),i[0]&65&&v(e,"jp-async-table-sortable",t[6]&&t[78].sortable),i[0]&256&&v(e,"jp-async-table-sticky-first",t[8]&&t[74]===0),i[0]&513&&v(e,"jp-async-table-sticky-last",t[74]===t[0].length-1&&t[9]),i[0]&16777216&&v(e,"jp-async-table-hover-over",t[24]===t[74])},d(c){c&&f(e),o.block.d(),o.token=null,o=null,a=!1,l()}}}function Hn(t){return{c:I,m:I,p:I,d:I}}function Xn(t){let e,n=t[80]+"";return{c(){e=$("span"),m(e,"class","jp-async-table-cell")},m(a,l){h(a,e,l),e.innerHTML=n},p(a,l){l[0]&9&&n!==(n=a[80]+"")&&(e.innerHTML=n)},d(a){a&&f(e)}}}function Vn(t){return{c:I,m:I,p:I,d:I}}function Fe(t){let e,n=!t[78].disabled&&Ge(t);return{c(){n&&n.c(),e=Q()},m(a,l){n&&n.m(a,l),h(a,e,l)},p(a,l){a[78].disabled?n&&(n.d(1),n=null):n?n.p(a,l):(n=Ge(a),n.c(),n.m(e.parentNode,e))},d(a){a&&f(e),n&&n.d(a)}}}function Te(t){let e,n,a=T(t[0]),l=[];for(let o=0;o<a.length;o+=1)l[o]=Fe(Ce(t,a,o));return{c(){e=$("tr");for(let o=0;o<l.length;o+=1)l[o].c();n=D(),v(e,"jp-async-table-highlight",t[12])},m(o,r){h(o,e,r);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null);k(e,n)},p(o,r){if(r[0]&1224737609){a=T(o[0]);let c;for(c=0;c<a.length;c+=1){const i=Ce(o,a,c);l[c]?l[c].p(i,r):(l[c]=Fe(i),l[c].c(),l[c].m(e,n))}for(;c<l.length;c+=1)l[c].d(1);l.length=a.length}r[0]&4096&&v(e,"jp-async-table-highlight",o[12])},d(o){o&&f(e),Y(l,o)}}}function _e(t){let e,n,a,l;function o(i,E){return i[18]?qn:Zn}let r=o(t),c=r(t);return{c(){e=$("button"),c.c(),m(e,"type","button"),m(e,"class","jp-async-table-button"),e.disabled=n=!t[19],v(e,"jp-async-table-loading",t[18])},m(i,E){h(i,e,E),c.m(e,null),a||(l=S(e,"click",t[29]),a=!0)},p(i,E){r===(r=o(i))&&c?c.p(i,E):(c.d(1),c=r(i),c&&(c.c(),c.m(e,null))),E[0]&524288&&n!==(n=!i[19])&&(e.disabled=n),E[0]&262144&&v(e,"jp-async-table-loading",i[18])},d(i){i&&f(e),c.d(),a=!1,l()}}}function Zn(t){let e=t[5].LOAD_MORE+"",n;return{c(){n=F(e)},m(a,l){h(a,n,l)},p(a,l){l[0]&32&&e!==(e=a[5].LOAD_MORE+"")&&U(n,e)},d(a){a&&f(n)}}}function qn(t){let e,n,a=t[5].LOADING+"",l;return{c(){e=$("span"),n=D(),l=F(a),m(e,"class","jp-async-table-spinner")},m(o,r){h(o,e,r),h(o,n,r),h(o,l,r)},p(o,r){r[0]&32&&a!==(a=o[5].LOADING+"")&&U(l,a)},d(o){o&&(f(e),f(n),f(l))}}}function Ue(t){let e,n,a,l;return{c(){e=$("jp-select"),J(e,"label",n=t[5].PAGE_SIZE),J(e,"options",t[26]),J(e,"value",t[1])},m(o,r){h(o,e,r),a||(l=S(e,"value",t[31]),a=!0)},p(o,r){r[0]&32&&n!==(n=o[5].PAGE_SIZE)&&J(e,"label",n),r[0]&2&&J(e,"value",o[1])},d(o){o&&f(e),a=!1,l()}}}function He(t){let e,n,a,l,o,r,c,i,E,O,g=T(t[21]),z=[];for(let u=0;u<g.length;u+=1)z[u]=Ve(je(t,g,u));function G(u,b){return u[18]?Qn:Kn}let C=G(t),y=C(t);return{c(){e=$("div"),n=$("div"),a=D(),l=$("form"),o=$("main");for(let u=0;u<z.length;u+=1)z[u].c();r=D(),c=$("footer"),i=$("button"),y.c(),m(n,"class","jp-async-table-arrange-columns-dialog-backdrop"),m(i,"type","submit"),m(i,"class","jp-async-table-button"),i.disabled=t[22],v(i,"jp-async-table-loading",t[22]),m(l,"class","jp-async-table-arrange-columns-dialog-inner"),m(e,"class","jp-async-table-arrange-columns-dialog")},m(u,b){h(u,e,b),k(e,n),k(e,a),k(e,l),k(l,o);for(let d=0;d<z.length;d+=1)z[d]&&z[d].m(o,null);k(l,r),k(l,c),k(c,i),y.m(i,null),E||(O=[S(n,"click",t[56]),S(l,"submit",Mn(t[39]))],E=!0)},p(u,b){if(b[0]&18874368|b[1]&60){g=T(u[21]);let d;for(d=0;d<g.length;d+=1){const j=je(u,g,d);z[d]?z[d].p(j,b):(z[d]=Ve(j),z[d].c(),z[d].m(o,null))}for(;d<z.length;d+=1)z[d].d(1);z.length=g.length}C===(C=G(u))&&y?y.p(u,b):(y.d(1),y=C(u),y&&(y.c(),y.m(i,null))),b[0]&4194304&&(i.disabled=u[22]),b[0]&4194304&&v(i,"jp-async-table-loading",u[22])},d(u){u&&f(e),Y(z,u),y.d(),E=!1,ge(O)}}}function Xe(t){let e,n,a,l,o,r,c,i,E=t[72].label+"",O,g,z;function G(...d){return t[57](t[72],...d)}function C(...d){return t[58](t[72],t[74],...d)}function y(){return t[59](t[72])}function u(...d){return t[60](t[72],t[74],...d)}function b(){t[61].call(r,t[73],t[74])}return{c(){e=$("label"),n=$("span"),a=ke("svg"),l=ke("path"),o=D(),r=$("input"),c=D(),i=$("span"),O=D(),m(l,"d","M160-360v-80h640v80H160Zm0-160v-80h640v80H160Z"),m(a,"xmlns","http://www.w3.org/2000/svg"),m(a,"height","24px"),m(a,"viewBox","0 -960 960 960"),m(a,"width","24px"),m(a,"fill","#5f6368"),m(n,"class","jp-async-table-material-symbols-outlined drag-handle"),m(n,"draggable","true"),K(n,"cursor",t[72].disableOrganize?"default":"grab"),K(n,"pointer-events",t[72].disableOrganize?"none":"auto"),v(n,"jp-async-table-no-cursor",t[72].disableOrganize),m(r,"type","checkbox"),r.__value=!0,Rn(r,r.__value),m(e,"class","jp-async-table-arrange-column-label"),v(e,"jp-async-table-hover-over",t[24]===t[74])},m(d,j){h(d,e,j),k(e,n),k(n,a),k(a,l),k(n,o),k(e,r),r.checked=t[72].enabled,k(e,c),k(e,i),i.innerHTML=E,k(e,O),g||(z=[S(n,"dragstart",G),S(n,"dragover",C),S(n,"dragleave",y),S(n,"drop",u),S(r,"change",b)],g=!0)},p(d,j){t=d,j[0]&2097152&&K(n,"cursor",t[72].disableOrganize?"default":"grab"),j[0]&2097152&&K(n,"pointer-events",t[72].disableOrganize?"none":"auto"),j[0]&2097152&&v(n,"jp-async-table-no-cursor",t[72].disableOrganize),j[0]&2097152&&(r.checked=t[72].enabled),j[0]&2097152&&E!==(E=t[72].label+"")&&(i.innerHTML=E),j[0]&16777216&&v(e,"jp-async-table-hover-over",t[24]===t[74])},d(d){d&&f(e),g=!1,ge(z)}}}function Ve(t){let e,n=!t[72].disableToggle&&Xe(t);return{c(){n&&n.c(),e=Q()},m(a,l){n&&n.m(a,l),h(a,e,l)},p(a,l){a[72].disableToggle?n&&(n.d(1),n=null):n?n.p(a,l):(n=Xe(a),n.c(),n.m(e.parentNode,e))},d(a){a&&f(e),n&&n.d(a)}}}function Kn(t){let e=t[5].SAVE+"",n;return{c(){n=F(e)},m(a,l){h(a,n,l)},p(a,l){l[0]&32&&e!==(e=a[5].SAVE+"")&&U(n,e)},d(a){a&&f(n)}}}function Qn(t){let e,n,a=t[5].LOADING+"",l;return{c(){e=$("span"),n=D(),l=F(a),m(e,"class","spinner")},m(o,r){h(o,e,r),h(o,n,r),h(o,l,r)},p(o,r){r[0]&32&&a!==(a=o[5].LOADING+"")&&U(l,a)},d(o){o&&(f(e),f(n),f(l))}}}function Wn(t){let e,n,a,l,o,r,c,i,E,O,g,z,G,C=(t[7]||t[11]||t[10])&&Ee(t),y=t[0]&&Re(t),u=t[3]&&Be(t),b=t[16]&&_e(t),d=t[13].length>1&&Ue(t),j=t[4]&&He(t);return{c(){e=$("div"),C&&C.c(),n=D(),a=$("div"),l=$("table"),y&&y.c(),o=D(),u&&u.c(),r=D(),c=$("div"),b&&b.c(),i=D(),d&&d.c(),E=D(),j&&j.c(),O=D(),g=$("input"),m(a,"class","jp-async-table-container"),K(a,"height",t[15]),m(c,"class","jp-async-table-actions"),m(e,"class","jp-async-table"),m(g,"accept",".csv"),g.hidden=!0,m(g,"type","file")},m(w,R){h(w,e,R),C&&C.m(e,null),k(e,n),k(e,a),k(a,l),y&&y.m(l,null),k(l,o),u&&u.m(l,null),k(e,r),k(e,c),b&&b.m(c,null),k(c,i),d&&d.m(c,null),h(w,E,R),j&&j.m(w,R),h(w,O,R),h(w,g,R),t[62](g),z||(G=S(g,"change",t[38]),z=!0)},p(w,R){w[7]||w[11]||w[10]?C?C.p(w,R):(C=Ee(w),C.c(),C.m(e,n)):C&&(C.d(1),C=null),w[0]?y?y.p(w,R):(y=Re(w),y.c(),y.m(l,o)):y&&(y.d(1),y=null),w[3]?u?u.p(w,R):(u=Be(w),u.c(),u.m(l,null)):u&&(u.d(1),u=null),R[0]&32768&&K(a,"height",w[15]),w[16]?b?b.p(w,R):(b=_e(w),b.c(),b.m(c,i)):b&&(b.d(1),b=null),w[13].length>1?d?d.p(w,R):(d=Ue(w),d.c(),d.m(c,null)):d&&(d.d(1),d=null),w[4]?j?j.p(w,R):(j=He(w),j.c(),j.m(O.parentNode,O)):j&&(j.d(1),j=null)},i:I,o:I,d(w){w&&(f(e),f(E),f(O),f(g)),C&&C.d(),y&&y.d(),u&&u.d(),b&&b.d(),d&&d.d(),j&&j.d(w),t[62](null),z=!1,G()}}}async function Ze(t){const{label:e,headerPipes:n}=t;let a=e;if(!n)return a;for(const l of n)a=await l(a);return a}async function qe(){const t=document.querySelector(".jp-async-table-container");t&&t.scrollTo({top:0,behavior:"smooth"})}function Yn(t,e,n){let{wording:a={ARRANGE_COLUMNS:"Arrange columns",EXPORT:"Export",IMPORT:"Import",SELECT:"Select data type",LOADING:"Loading",LOAD_MORE:"Load more",PAGE_SIZE:"Page size",SAVE:"Save"}}=e,{allowArrangeColumns:l=!0}=e,{showArrangingColumns:o=!0}=e,{freezeFirstColumn:r=!1}=e,{freezeLastColumn:c=!1}=e,{showExport:i=!0}=e,{showImport:E=!0}=e,{rowClickable:O=!1}=e,{headers:g=[]}=e,{pageSizes:z=[10,25,50,100]}=e,{dropdownMenuExport:G=!1}=e,{pageSize:C=z[0]}=e,{sort:y}=e,{service:u}=e,{id:b}=e,{height:d=null}=e,j=[],w=[],R=!1,ee=[];const me=["csv","json","xml"],be=[{label:"CSV",type:"csv",method:()=>({fileContent:[w.map(s=>`"${s.label}"`).join(","),...ee].join(`
`),mimeType:"text/csv",extension:"csv"})},{label:"JSON",type:"json",method:()=>({fileContent:JSON.stringify(ee.map(s=>{const p=s.split(",");return Object.fromEntries(w.map((x,L)=>{var A;return[x.label,((A=p[L])==null?void 0:A.replace(/"/g,""))||""]}))}),null,2),mimeType:"application/json",extension:"json"})},{label:"XML",type:"xml",method:()=>({fileContent:`<root>
${ee.map(s=>`  <row>
${s}</row>`).join(`
`)}
</root>`,mimeType:"application/xml",extension:"xml"})}];let{getData:ne=async()=>{const s=await u.get(y,C);n(3,P=s.rows),n(19,te=s.hasMore),n(18,Z=!1),qe()}}=e,{rows:P=[]}=e,{arrangeColumnDialog:W=!1}=e,{showLoadMore:he=!0}=e,Qe=JSON.stringify(z.map(s=>({label:s,value:s}))),Z=!0,te=!1,H=!1,q=[],ae=!1,le,se=!1;const We=An();async function Ye(s,p="id"){n(3,P=P.filter(x=>x[p]!==s))}async function Je(s){n(3,P=[...P,s])}async function en(s,p){n(3,P=P.map((x,L)=>L===p?{...x,...s}:x))}async function ce(s,p,x){const{key:L,fallback:A,pipes:B}=s;let N;try{N=Nn(p,L)}catch{return A||""}if(!B)return N;for(const X of B)N=await X(N,p,x);return N}async function fe(s){const{sortable:p}=s;if(!p)return;n(18,Z=!0),n(2,y={key:s.key,direction:y?.key===s.key&&y.direction==="asc"?"desc":"asc"});const x=[u.get(y,C)];u.adjustSort&&x.push(u.adjustSort(y));const[L]=await Promise.all(x);n(3,P=L.rows),n(19,te=L.hasMore),n(18,Z=!1),qe()}async function nn(){n(18,Z=!0);const s=await u.loadMore(y,C);n(3,P=[...P,...s.rows]),n(19,te=s.hasMore),n(18,Z=!1)}function ye(s,p,x,L){We("rowClick",{row:s,index:p,header:x,originalEvent:L})}async function tn(s){n(1,C=s.detail);const p=[ne()];u.adjustPageSize&&p.push(u.adjustPageSize(C)),await Promise.all(p)}async function an(){if(H)return;n(20,H=!0),w=g.filter(A=>!A.disabled&&!A.hideOnExport);const s=await u.export(),p=await Promise.all(s.map(async(A,B)=>(await Promise.all(w.map(N=>ce({key:N.key,fallback:N.exportFallback||N.fallback,pipes:N.exportPipes||N.pipes||[]},A,B)))).map(N=>`"${N||""}"`).join(","))),x=new Blob([[w.map(A=>A.label).map(A=>`"${A}"`).join(","),...p].join(`
`)],{type:"text/csv"}),L=document.createElement("a");L.href=URL.createObjectURL(x),L.download="export.csv",L.click(),n(20,H=!1)}let we="",re=null;function ie(s,p){p.disableOrganize||(we=p.key,s.dataTransfer.setData("text/plain",we))}function ue(s,p){s.preventDefault(),!g[p].disableOrganize&&n(24,re=p)}function de(){n(24,re=null)}async function pe(s,p){if(s.preventDefault(),g[p].disableOrganize)return;n(24,re=null);const x=s.dataTransfer.getData("text/plain"),L=g.findIndex(A=>A.key===x);if(L!==-1&&L!==p){const A=[...g],B=[...q],[N]=A.splice(L,1),[X]=B.splice(L,1);A.splice(p,0,N),B.splice(p,0,X),n(0,g=A),n(21,q=B),u.arrangeColumns&&await u.arrangeColumns(b,A.map(_=>({key:_.key,disabled:_.disabled})))}}function ln(){n(21,q=[...g].map(s=>(s.enabled=!s.disabled,s))),n(4,W=!0)}async function rn(s){if(se||!s.target.files||!s.target.files[0])return;se=!0;const p=await u.import(s.target.files[0]);p!=null&&p.length&&n(3,P=[...p,...P]),s.target.value="",se=!1}async function on(){ae||(n(22,ae=!0),n(0,g=[...q].map(s=>(s.disabled=!s.enabled,delete s.enabled,s))),u.arrangeColumns&&await u.arrangeColumns(b,g.map(s=>({key:s.key,disabled:s.disabled}))),n(22,ae=!1),n(4,W=!1))}async function sn(s){if(H)return;n(20,H=!0),w=g.filter(_=>!_.disabled&&!_.hideOnExport);const p=await u.export();ee=await Promise.all(p.map(async(_,Cn)=>(await Promise.all(w.map(V=>ce({key:V.key,fallback:V.exportFallback||V.fallback,pipes:V.exportPipes||V.pipes||[]},_,Cn)))).map(V=>`"${V||""}"`).join(",")));const x=be.find(_=>_.type===s),{fileContent:L,mimeType:A,extension:B}=x.method(),N=new Blob([L],{type:A}),X=document.createElement("a");X.href=URL.createObjectURL(N),X.download=`export.${B}`,X.click(),n(20,H=!1)}Sn(async()=>{if(u.additionalExportTypes&&(j=await u.additionalExportTypes(),j.forEach(s=>{me.push(s.label),be.push({label:s.label,type:s.type,method:s.method})})),u.getColumnOrder){const s=await u.getColumnOrder(b);s&&n(0,g=g.map(p=>(p.disabled=!s.find(x=>x.key===p.key),p)).sort((p,x)=>{const L=s.findIndex(B=>B.key===p.key),A=s.findIndex(B=>B.key===x.key);return L-A}))}w=g.filter(s=>!s.disabled),await ne()});const $e=s=>{sn(s),n(17,R=!1)},cn=()=>le.click(),un=()=>n(17,R=!R),dn=s=>$e(s),pn=s=>fe(s),gn=(s,p)=>{s.disableOrganize||ie(p,s)},mn=(s,p,x)=>{s.disableOrganize||ue(x,p)},bn=s=>{s.disableOrganize||de()},hn=(s,p,x)=>{s.disableOrganize||pe(x,p)},fn=(s,p,x,L)=>ye(s,p,x,L),yn=()=>n(4,W=!1),wn=(s,p)=>{s.disableOrganize||ie(p,s)},$n=(s,p,x)=>{s.disableOrganize||ue(x,p)},xn=s=>{s.disableOrganize||de()},kn=(s,p,x)=>{s.disableOrganize||pe(x,p)};function jn(s,p){s[p].enabled=this.checked,n(21,q)}function vn(s){Dn[s?"unshift":"push"](()=>{le=s,n(23,le)})}return t.$$set=s=>{"wording"in s&&n(5,a=s.wording),"allowArrangeColumns"in s&&n(6,l=s.allowArrangeColumns),"showArrangingColumns"in s&&n(7,o=s.showArrangingColumns),"freezeFirstColumn"in s&&n(8,r=s.freezeFirstColumn),"freezeLastColumn"in s&&n(9,c=s.freezeLastColumn),"showExport"in s&&n(10,i=s.showExport),"showImport"in s&&n(11,E=s.showImport),"rowClickable"in s&&n(12,O=s.rowClickable),"headers"in s&&n(0,g=s.headers),"pageSizes"in s&&n(13,z=s.pageSizes),"dropdownMenuExport"in s&&n(14,G=s.dropdownMenuExport),"pageSize"in s&&n(1,C=s.pageSize),"sort"in s&&n(2,y=s.sort),"service"in s&&n(41,u=s.service),"id"in s&&n(42,b=s.id),"height"in s&&n(15,d=s.height),"getData"in s&&n(43,ne=s.getData),"rows"in s&&n(3,P=s.rows),"arrangeColumnDialog"in s&&n(4,W=s.arrangeColumnDialog),"showLoadMore"in s&&n(16,he=s.showLoadMore)},[g,C,y,P,W,a,l,o,r,c,i,E,O,z,G,d,he,R,Z,te,H,q,ae,le,re,me,Qe,ce,fe,nn,ye,tn,an,ie,ue,de,pe,ln,rn,on,$e,u,b,ne,Ye,Je,en,cn,un,dn,pn,gn,mn,bn,hn,fn,yn,wn,$n,xn,kn,jn,vn]}class Ke extends On{constructor(e){super(),En(this,e,Yn,Wn,Ln,{wording:5,allowArrangeColumns:6,showArrangingColumns:7,freezeFirstColumn:8,freezeLastColumn:9,showExport:10,showImport:11,rowClickable:12,headers:0,pageSizes:13,dropdownMenuExport:14,pageSize:1,sort:2,service:41,id:42,height:15,getData:43,rows:3,arrangeColumnDialog:4,showLoadMore:16,removeRow:44,addRow:45,updateRow:46},null,[-1,-1,-1])}get wording(){return this.$$.ctx[5]}set wording(e){this.$$set({wording:e}),M()}get allowArrangeColumns(){return this.$$.ctx[6]}set allowArrangeColumns(e){this.$$set({allowArrangeColumns:e}),M()}get showArrangingColumns(){return this.$$.ctx[7]}set showArrangingColumns(e){this.$$set({showArrangingColumns:e}),M()}get freezeFirstColumn(){return this.$$.ctx[8]}set freezeFirstColumn(e){this.$$set({freezeFirstColumn:e}),M()}get freezeLastColumn(){return this.$$.ctx[9]}set freezeLastColumn(e){this.$$set({freezeLastColumn:e}),M()}get showExport(){return this.$$.ctx[10]}set showExport(e){this.$$set({showExport:e}),M()}get showImport(){return this.$$.ctx[11]}set showImport(e){this.$$set({showImport:e}),M()}get rowClickable(){return this.$$.ctx[12]}set rowClickable(e){this.$$set({rowClickable:e}),M()}get headers(){return this.$$.ctx[0]}set headers(e){this.$$set({headers:e}),M()}get pageSizes(){return this.$$.ctx[13]}set pageSizes(e){this.$$set({pageSizes:e}),M()}get dropdownMenuExport(){return this.$$.ctx[14]}set dropdownMenuExport(e){this.$$set({dropdownMenuExport:e}),M()}get pageSize(){return this.$$.ctx[1]}set pageSize(e){this.$$set({pageSize:e}),M()}get sort(){return this.$$.ctx[2]}set sort(e){this.$$set({sort:e}),M()}get service(){return this.$$.ctx[41]}set service(e){this.$$set({service:e}),M()}get id(){return this.$$.ctx[42]}set id(e){this.$$set({id:e}),M()}get height(){return this.$$.ctx[15]}set height(e){this.$$set({height:e}),M()}get getData(){return this.$$.ctx[43]}set getData(e){this.$$set({getData:e}),M()}get rows(){return this.$$.ctx[3]}set rows(e){this.$$set({rows:e}),M()}get arrangeColumnDialog(){return this.$$.ctx[4]}set arrangeColumnDialog(e){this.$$set({arrangeColumnDialog:e}),M()}get showLoadMore(){return this.$$.ctx[16]}set showLoadMore(e){this.$$set({showLoadMore:e}),M()}get removeRow(){return this.$$.ctx[44]}get addRow(){return this.$$.ctx[45]}get updateRow(){return this.$$.ctx[46]}}try{customElements.define("jp-async-table",zn(Ke,{wording:{},allowArrangeColumns:{type:"Boolean"},showArrangingColumns:{type:"Boolean"},freezeFirstColumn:{type:"Boolean"},freezeLastColumn:{type:"Boolean"},showExport:{type:"Boolean"},showImport:{type:"Boolean"},rowClickable:{type:"Boolean"},headers:{},pageSizes:{},dropdownMenuExport:{type:"Boolean"},pageSize:{},sort:{},service:{},id:{},height:{},getData:{},rows:{},arrangeColumnDialog:{type:"Boolean"},showLoadMore:{type:"Boolean"}},[],["removeRow","addRow","updateRow"],!1));}catch{};export{Ke as default};
//# sourceMappingURL=async-table.wc.js.map
