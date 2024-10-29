var ke=Object.defineProperty,ze=(a,e,t)=>e in a?ke(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,He=(a,e,t)=>ze(a,typeof e!="symbol"?e+"":e,t);import{c as Fe,S as Be,i as _e,o as m,s as Re,a as Ke,y as Oe,f as T,w as se,k,x as Ae,G as Ee,n as le,l as K,e as $,d as l,X as N,A as b,v as Ge,p as f,Y as P,m as _,r as ne,N as Ce,q as Ye}from"./svelte.js";import"./index.js";import{clickOutside as je}from"./click-outside.js";import{loadScript as Ne}from"./scriptLoader.js";const Pe='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';function Se(a){Ke(a,"svelte-46lmyl",`.label.svelte-46lmyl.svelte-46lmyl{margin-top:0.5rem;margin-bottom:0.125rem;font-size:0.875rem}.field-label.svelte-46lmyl.svelte-46lmyl{position:absolute;top:50%;left:0.75rem;transform:translateY(-50%);font-size:1rem;transition:transform 0.3s,
      top 0.3s,
      font-size 0.3s}.field-label.move.svelte-46lmyl.svelte-46lmyl{top:0.25rem;transform:translateY(0);font-size:0.75rem}.field.required.svelte-46lmyl .field-label.svelte-46lmyl::after{content:' *'}.nav.svelte-46lmyl.svelte-46lmyl{position:relative;display:inline-block}.lookup-box.svelte-46lmyl.svelte-46lmyl{width:100%;height:100%;display:flex;flex-direction:column}#map.svelte-46lmyl.svelte-46lmyl{height:400px;width:100%}.searchInput.svelte-46lmyl.svelte-46lmyl{width:100%;height:3rem;font-size:1rem;padding:10px;border-radius:0.25rem;box-sizing:border-box;border:1px solid var(--border-primary);outline:none}.searchInput.svelte-46lmyl.svelte-46lmyl:focus{border:1px solid var(--primary-color)}.searchInput.svelte-46lmyl.svelte-46lmyl::-moz-placeholder{opacity:0;-moz-transition:opacity 0.3s;transition:opacity 0.3s}.searchInput.svelte-46lmyl.svelte-46lmyl::placeholder{opacity:0;transition:opacity 0.3s}.searchInput.active.svelte-46lmyl.svelte-46lmyl{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:var(--primary-color)}.searchInput.svelte-46lmyl.svelte-46lmyl:after{background-image:none !important;height:0px}.searchInput-padding.svelte-46lmyl.svelte-46lmyl{padding:1.5rem 0.75rem calc(0.5rem - 2px)}.field-label.move.svelte-46lmyl+.searchInput.svelte-46lmyl::-moz-placeholder{opacity:1}.field-label.move.svelte-46lmyl+.searchInput.svelte-46lmyl::placeholder{opacity:1}.field.svelte-46lmyl.svelte-46lmyl{width:100%}button.svelte-46lmyl.svelte-46lmyl{position:absolute;top:50%;right:5px;transform:translateY(-50%);border:none;background:none;cursor:pointer}button.active.svelte-46lmyl.svelte-46lmyl{color:var(--primary-color);transition:0.2s}.overlay.svelte-46lmyl.svelte-46lmyl{z-index:100;position:absolute;display:flex;flex-direction:column;max-width:370px;max-height:420px;width:100%;padding:0.7rem;overflow-y:hidden;border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem;box-shadow:0 6px 9px rgba(0, 0, 0, 0.16);background-color:var(--background-primary)}.overlay.disabled.svelte-46lmyl.svelte-46lmyl{display:none}.map-field.svelte-46lmyl.svelte-46lmyl{border-radius:0.25rem}`)}function We(a){let e,t,o,n,p,i,M,I,w,z,v,q,x,u=a[2]&&a[3]==="outside"&&re(a),g=a[2]&&a[3]==="inside"&&oe(a);return{c(){u&&u.c(),e=K(),t=$("div"),o=$("div"),n=$("label"),g&&g.c(),p=K(),i=$("input"),z=K(),v=$("div"),l(i,"class",M=N(`searchInput ${a[3]==="outside"||!a[2]?"":"searchInput-padding"}`)+" svelte-46lmyl"),l(i,"type","text"),l(i,"aria-hidden",I=a[6]||a[7]),l(i,"tabindex",w=a[6]||a[7]?-1:0),l(i,"id",a[5]),i.disabled=a[6],i.readOnly=a[7],i.required=a[10],l(i,"name",a[4]),l(i,"placeholder",a[8]),b(i,"active",a[12]),l(n,"class","field svelte-46lmyl"),b(n,"required",a[10]),l(v,"id","map"),l(v,"class","map-field svelte-46lmyl"),Ge(v,"display","none"),l(o,"class","nav svelte-46lmyl"),l(t,"class","lookup-box svelte-46lmyl")},m(d,c){u&&u.m(d,c),T(d,e,c),T(d,t,c),f(t,o),f(o,n),g&&g.m(n,null),f(n,p),f(n,i),a[39](i),P(i,a[0]),f(o,z),f(o,v),q||(x=[_(i,"input",a[40]),_(i,"focus",a[41]),_(i,"blur",a[42])],q=!0)},p(d,c){d[2]&&d[3]==="outside"?u?u.p(d,c):(u=re(d),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),d[2]&&d[3]==="inside"?g?g.p(d,c):(g=oe(d),g.c(),g.m(n,p)):g&&(g.d(1),g=null),c[0]&12&&M!==(M=N(`searchInput ${d[3]==="outside"||!d[2]?"":"searchInput-padding"}`)+" svelte-46lmyl")&&l(i,"class",M),c[0]&192&&I!==(I=d[6]||d[7])&&l(i,"aria-hidden",I),c[0]&192&&w!==(w=d[6]||d[7]?-1:0)&&l(i,"tabindex",w),c[0]&32&&l(i,"id",d[5]),c[0]&64&&(i.disabled=d[6]),c[0]&128&&(i.readOnly=d[7]),c[0]&1024&&(i.required=d[10]),c[0]&16&&l(i,"name",d[4]),c[0]&256&&l(i,"placeholder",d[8]),c[0]&1&&i.value!==d[0]&&P(i,d[0]),c[0]&4108&&b(i,"active",d[12]),c[0]&1024&&b(n,"required",d[10])},d(d){d&&(k(e),k(t)),u&&u.d(d),g&&g.d(),a[39](null),q=!1,ne(x)}}}function Xe(a){let e,t,o,n,p,i,M,I,w,z,v,q,x,u,g,d,c=a[2]&&a[3]==="outside"&&de(a),h=a[2]&&a[3]==="inside"&&ce(a);return{c(){c&&c.c(),e=K(),t=$("div"),o=$("div"),n=$("label"),h&&h.c(),p=K(),i=$("input"),z=K(),v=$("button"),q=K(),x=$("div"),u=$("div"),u.innerHTML='<div id="infowindow-content"></div>',l(i,"class",M=N(`searchInput ${a[3]==="outside"||!a[2]?"":"searchInput-padding"}`)+" svelte-46lmyl"),l(i,"type","text"),l(i,"aria-hidden",I=a[6]||a[7]),l(i,"tabindex",w=a[6]||a[7]?-1:0),l(i,"id",a[5]),i.disabled=a[6],i.readOnly=a[7],i.required=a[10],l(i,"name",a[4]),l(i,"placeholder",a[8]),b(i,"active",a[12]),l(v,"class","button svelte-46lmyl"),b(v,"active",a[12]),l(n,"class","field svelte-46lmyl"),b(n,"required",a[10]),l(o,"class","nav svelte-46lmyl"),l(u,"id","map"),l(u,"class","map-field svelte-46lmyl"),l(x,"class","overlay svelte-46lmyl"),l(x,"style",a[13]),b(x,"disabled",!a[12]),l(t,"class","lookup-box svelte-46lmyl")},m(r,y){c&&c.m(r,y),T(r,e,y),T(r,t,y),f(t,o),f(o,n),h&&h.m(n,null),f(n,p),f(n,i),a[34](i),P(i,a[0]),f(n,z),f(n,v),v.innerHTML=Pe,f(t,q),f(t,x),f(x,u),g||(d=[_(i,"input",a[35]),_(i,"focus",a[36]),_(i,"blur",a[37]),_(v,"click",Ce(a[14])),Ye(je.call(null,t)),_(t,"click_outside",a[38])],g=!0)},p(r,y){r[2]&&r[3]==="outside"?c?c.p(r,y):(c=de(r),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),r[2]&&r[3]==="inside"?h?h.p(r,y):(h=ce(r),h.c(),h.m(n,p)):h&&(h.d(1),h=null),y[0]&12&&M!==(M=N(`searchInput ${r[3]==="outside"||!r[2]?"":"searchInput-padding"}`)+" svelte-46lmyl")&&l(i,"class",M),y[0]&192&&I!==(I=r[6]||r[7])&&l(i,"aria-hidden",I),y[0]&192&&w!==(w=r[6]||r[7]?-1:0)&&l(i,"tabindex",w),y[0]&32&&l(i,"id",r[5]),y[0]&64&&(i.disabled=r[6]),y[0]&128&&(i.readOnly=r[7]),y[0]&1024&&(i.required=r[10]),y[0]&16&&l(i,"name",r[4]),y[0]&256&&l(i,"placeholder",r[8]),y[0]&1&&i.value!==r[0]&&P(i,r[0]),y[0]&4108&&b(i,"active",r[12]),y[0]&4096&&b(v,"active",r[12]),y[0]&1024&&b(n,"required",r[10]),y[0]&8192&&l(x,"style",r[13]),y[0]&4096&&b(x,"disabled",!r[12])},d(r){r&&(k(e),k(t)),c&&c.d(r),h&&h.d(),a[34](null),g=!1,ne(d)}}}function re(a){let e;return{c(){e=$("div"),l(e,"class","label svelte-46lmyl")},m(t,o){T(t,e,o),e.innerHTML=a[2]},p(t,o){o[0]&4&&(e.innerHTML=t[2])},d(t){t&&k(e)}}}function oe(a){let e;return{c(){e=$("span"),l(e,"class","field-label svelte-46lmyl"),b(e,"move",a[1]||a[0])},m(t,o){T(t,e,o),e.innerHTML=a[2]},p(t,o){o[0]&4&&(e.innerHTML=t[2]),o[0]&3&&b(e,"move",t[1]||t[0])},d(t){t&&k(e)}}}function de(a){let e;return{c(){e=$("div"),l(e,"class","label svelte-46lmyl")},m(t,o){T(t,e,o),e.innerHTML=a[2]},p(t,o){o[0]&4&&(e.innerHTML=t[2])},d(t){t&&k(e)}}}function ce(a){let e;return{c(){e=$("span"),l(e,"class","field-label svelte-46lmyl"),b(e,"move",a[1]||a[0]||a[12])},m(t,o){T(t,e,o),e.innerHTML=a[2]},p(t,o){o[0]&4&&(e.innerHTML=t[2]),o[0]&4099&&b(e,"move",t[1]||t[0]||t[12])},d(t){t&&k(e)}}}function Ze(a){let e;function t(p,i){return p[9]?Xe:We}let o=t(a),n=o(a);return{c(){n.c(),e=Oe()},m(p,i){n.m(p,i),T(p,e,i)},p(p,i){o===(o=t(p))&&n?n.p(p,i):(n.d(1),n=o(p),n&&(n.c(),n.m(e.parentNode,e)))},i:se,o:se,d(p){p&&k(e),n.d(p)}}}function De(a,e,t){let{apiKey:o}=e,{value:n=""}=e,{attachedInternals:p}=e,{startingLatitude:i=37.77493}=e,{startingLongitude:M=-122.41942}=e,{mapType:I="roadmap"}=e,{zoom:w=8}=e,{label:z=""}=e,{labelType:v="inside"}=e,{name:q=""}=e,{id:x=null}=e,{inputFocused:u=!1}=e,{disabled:g=!1}=e,{readonly:d=!1}=e,{placeholder:c=""}=e,{mapId:h}=e,{returnedValue:r="extended"}=e,{enableMap:y=!0}=e,{gestureHandling:S="auto"}=e,{types:W=[]}=e,{componentRestrictions:X}=e,{required:Q=!1}=e,{requiredValidationMessage:Z}=e,{resultValidationMessage:D}=e,{validationMessages:C={}}=e;const ue=()=>n,me=p.validity,ye=p.validationMessage,ge=()=>p.reportValidity(),he=()=>p.checkValidity();let E=!1,O,R,V,J="",U;const L=Ae();window.initMap=async function(){const{Map:s}=await google.maps.importLibrary("maps");await google.maps.importLibrary("marker");const H={lat:i,lng:M};R=new s(document.getElementById("map"),{center:H,zoom:w,mapTypeId:I,mapId:h,gestureHandling:S});const Y={north:H.lat+.1,south:H.lat-.1,east:H.lng+.1,west:H.lng-.1},F=new google.maps.Geocoder,G=V,A={bounds:Y,fields:["address_components","formatted_address","geometry","icon","name"],strictBounds:!1,types:W,componentRestrictions:X},j=new google.maps.places.Autocomplete(G,A);j.setFields(["place_id","geometry","name"]),j.addListener("place_changed",()=>{te.close();const B=j.getPlace();B.geometry.viewport?R.fitBounds(B.geometry.viewport):(R.setCenter(B.geometry.location),R.setZoom(13)),j.getPlace().formatted_address,ee(B.geometry.location);const ae=J.split(",",2),ie={lat:parseFloat(ae[0]),lng:parseFloat(ae[1])};r==="simple"?L("address",{address:B.formatted_address}):r==="extended"&&(L("address",{address:B.formatted_address}),L("latitude",{lat:ie.lat}),L("longitude",{lng:ie.lng}))});const te=new google.maps.InfoWindow,Te=document.getElementById("infowindow-content");te.setContent(Te),R.addListener("click",function(B){ee(B.latLng),ve(F)})};function ee(s){O!=null&&(O.map=null),O=new google.maps.marker.AdvancedMarkerElement({position:s,map:R,title:String(s)}),R.panTo(O.position),J=O.position.lat+", "+O.position.lng}function ve(s,H,Y){const F=J.split(",",2),G={lat:parseFloat(F[0]),lng:parseFloat(F[1])};s.geocode({location:G}).then(A=>{A.results[0]?(t(0,n=A.results[0].formatted_address),r==="simple"?L("address",{address:A.results[0].formatted_address}):r==="extended"&&(L("address",{address:A.results[0].formatted_address}),L("latitude",{lat:G.lat}),L("longitude",{lng:G.lng}))):(p.setValidity({customError:!0},D||C.results||"No results found"),L("addressNotFound"))})}function $e(){const s=V.getBoundingClientRect(),H=window.innerHeight-s.bottom,Y=420;let F="";H<Y?F=`
        bottom: ${window.innerHeight-s.top}px;
        left: ${s.left}px;
      `:F=`
        top: ${s.bottom}px;
        left: ${s.left}px;
      `,t(13,U=F),t(12,E=!E),E&&V.focus()}Ee(async()=>{try{await Ne(`https://maps.googleapis.com/maps/api/js?key=${o}&loading=async&libraries=places&callback=initMap`)}catch(s){console.error("Failed to load the Google Maps script",s)}u&&V.focus()});function be(s){le[s?"unshift":"push"](()=>{V=s,t(11,V)})}function fe(){n=this.value,t(0,n)}const xe=()=>t(1,u=!0),Me=()=>t(1,u=!1),Ie=()=>t(12,E=!1);function we(s){le[s?"unshift":"push"](()=>{V=s,t(11,V)})}function Ve(){n=this.value,t(0,n)}const Le=()=>t(1,u=!0),qe=()=>t(1,u=!1);return a.$$set=s=>{"apiKey"in s&&t(15,o=s.apiKey),"value"in s&&t(0,n=s.value),"attachedInternals"in s&&t(16,p=s.attachedInternals),"startingLatitude"in s&&t(17,i=s.startingLatitude),"startingLongitude"in s&&t(18,M=s.startingLongitude),"mapType"in s&&t(19,I=s.mapType),"zoom"in s&&t(20,w=s.zoom),"label"in s&&t(2,z=s.label),"labelType"in s&&t(3,v=s.labelType),"name"in s&&t(4,q=s.name),"id"in s&&t(5,x=s.id),"inputFocused"in s&&t(1,u=s.inputFocused),"disabled"in s&&t(6,g=s.disabled),"readonly"in s&&t(7,d=s.readonly),"placeholder"in s&&t(8,c=s.placeholder),"mapId"in s&&t(21,h=s.mapId),"returnedValue"in s&&t(22,r=s.returnedValue),"enableMap"in s&&t(9,y=s.enableMap),"gestureHandling"in s&&t(23,S=s.gestureHandling),"types"in s&&t(24,W=s.types),"componentRestrictions"in s&&t(25,X=s.componentRestrictions),"required"in s&&t(10,Q=s.required),"requiredValidationMessage"in s&&t(26,Z=s.requiredValidationMessage),"resultValidationMessage"in s&&t(27,D=s.resultValidationMessage),"validationMessages"in s&&t(28,C=s.validationMessages)},a.$$.update=()=>{a.$$.dirty[0]&335611905&&(p.checkValidity(),V&&(V.validity.valueMissing?p.setValidity({valueMissing:!0},Z||C.required||V.validationMessage,V):p.setValidity({})),p.setFormValue(n),L("value",{value:n}))},[n,u,z,v,q,x,g,d,c,y,Q,V,E,U,$e,o,p,i,M,I,w,h,r,S,W,X,Z,D,C,ue,me,ye,ge,he,be,fe,xe,Me,Ie,we,Ve,Le,qe]}class pe extends Be{constructor(e){super(),_e(this,e,De,Ze,Re,{apiKey:15,value:0,attachedInternals:16,startingLatitude:17,startingLongitude:18,mapType:19,zoom:20,label:2,labelType:3,name:4,id:5,inputFocused:1,disabled:6,readonly:7,placeholder:8,mapId:21,returnedValue:22,enableMap:9,gestureHandling:23,types:24,componentRestrictions:25,required:10,requiredValidationMessage:26,resultValidationMessage:27,validationMessages:28,getValue:29,validity:30,validationMessage:31,reportValidity:32,checkValidity:33},Se,[-1,-1])}get apiKey(){return this.$$.ctx[15]}set apiKey(e){this.$$set({apiKey:e}),m()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),m()}get attachedInternals(){return this.$$.ctx[16]}set attachedInternals(e){this.$$set({attachedInternals:e}),m()}get startingLatitude(){return this.$$.ctx[17]}set startingLatitude(e){this.$$set({startingLatitude:e}),m()}get startingLongitude(){return this.$$.ctx[18]}set startingLongitude(e){this.$$set({startingLongitude:e}),m()}get mapType(){return this.$$.ctx[19]}set mapType(e){this.$$set({mapType:e}),m()}get zoom(){return this.$$.ctx[20]}set zoom(e){this.$$set({zoom:e}),m()}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),m()}get labelType(){return this.$$.ctx[3]}set labelType(e){this.$$set({labelType:e}),m()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),m()}get id(){return this.$$.ctx[5]}set id(e){this.$$set({id:e}),m()}get inputFocused(){return this.$$.ctx[1]}set inputFocused(e){this.$$set({inputFocused:e}),m()}get disabled(){return this.$$.ctx[6]}set disabled(e){this.$$set({disabled:e}),m()}get readonly(){return this.$$.ctx[7]}set readonly(e){this.$$set({readonly:e}),m()}get placeholder(){return this.$$.ctx[8]}set placeholder(e){this.$$set({placeholder:e}),m()}get mapId(){return this.$$.ctx[21]}set mapId(e){this.$$set({mapId:e}),m()}get returnedValue(){return this.$$.ctx[22]}set returnedValue(e){this.$$set({returnedValue:e}),m()}get enableMap(){return this.$$.ctx[9]}set enableMap(e){this.$$set({enableMap:e}),m()}get gestureHandling(){return this.$$.ctx[23]}set gestureHandling(e){this.$$set({gestureHandling:e}),m()}get types(){return this.$$.ctx[24]}set types(e){this.$$set({types:e}),m()}get componentRestrictions(){return this.$$.ctx[25]}set componentRestrictions(e){this.$$set({componentRestrictions:e}),m()}get required(){return this.$$.ctx[10]}set required(e){this.$$set({required:e}),m()}get requiredValidationMessage(){return this.$$.ctx[26]}set requiredValidationMessage(e){this.$$set({requiredValidationMessage:e}),m()}get resultValidationMessage(){return this.$$.ctx[27]}set resultValidationMessage(e){this.$$set({resultValidationMessage:e}),m()}get validationMessages(){return this.$$.ctx[28]}set validationMessages(e){this.$$set({validationMessages:e}),m()}get getValue(){return this.$$.ctx[29]}get validity(){return this.$$.ctx[30]}get validationMessage(){return this.$$.ctx[31]}get reportValidity(){return this.$$.ctx[32]}get checkValidity(){return this.$$.ctx[33]}}try{customElements.define("jp-place-input",Fe(pe,{apiKey:{},value:{},attachedInternals:{},startingLatitude:{},startingLongitude:{},mapType:{},zoom:{},label:{},labelType:{},name:{},id:{},inputFocused:{type:"Boolean"},disabled:{type:"Boolean"},readonly:{type:"Boolean"},placeholder:{},mapId:{},returnedValue:{},enableMap:{type:"Boolean"},gestureHandling:{},types:{},componentRestrictions:{},required:{type:"Boolean"},requiredValidationMessage:{},resultValidationMessage:{},validationMessages:{}},[],["getValue","validity","validationMessage","reportValidity","checkValidity"],!1,a=>{var e;return e=class extends a{constructor(){super(),this.attachedInternals=this.attachInternals(),this.attachedInternals.role="textbox"}},He(e,"formAssociated",!0),e}));}catch{};export{pe as default};
//# sourceMappingURL=place-input.wc.js.map