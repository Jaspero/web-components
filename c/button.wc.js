import{c as g,S as w,i as j,f as b,s as m,a as f,q as y,e as h,g as u,t as p,h as k,l as $,u as z,v as B,w as q,k as E,m as S,o as T,T as A}from"./svelte.js";import"./index.js";function C(t){f(t,"svelte-d3urlw",`:host{display:inline-flex}.jp-button.svelte-d3urlw{position:relative;display:inline-flex;align-items:center;justify-content:center;height:36px;border:none;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-button.svelte-d3urlw:disabled{pointer-events:none}.jp-button.svelte-d3urlw:not(.jp-icon-button):not(.jp-fab-button):not(.jp-mini-fab-button){border-radius:0.25rem;min-width:4rem;height:2.25rem;padding:0 1rem}.jp-button.svelte-d3urlw:not(.jp-basic-button):not(.jp-raised-button):not(.jp-stroked-button):not(
      .jp-flat-button
    ){overflow:hidden;border-radius:50%}.jp-button.svelte-d3urlw::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.1}.jp-button.default.svelte-d3urlw:hover::after{background-color:var(--text-primary)}.jp-button.primary.svelte-d3urlw:hover::after{background-color:var(--primary-color)}.jp-button.accent.svelte-d3urlw:hover::after{background-color:var(--secondary-color)}.jp-button.warn.svelte-d3urlw:hover::after{background-color:var(--danger-color)}.jp-basic-button.svelte-d3urlw{background-color:transparent}.jp-basic-button.default.svelte-d3urlw{color:var(--text-primary)}.jp-basic-button.primary.svelte-d3urlw{color:var(--primary-color)}.jp-basic-button.accent.svelte-d3urlw{color:var(--secondary-color)}.jp-basic-button.warn.svelte-d3urlw{color:var(--danger-color)}.jp-basic-button.svelte-d3urlw:disabled{color:var(--disabled-color)}.jp-raised-button.svelte-d3urlw:not(:disabled){box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.jp-raised-button.svelte-d3urlw:not(:disabled):hover{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12)}.jp-raised-button.svelte-d3urlw:not(:disabled):active{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-raised-button.default.svelte-d3urlw{background-color:var(--background-primary);color:var(--text-primary)}.jp-raised-button.primary.svelte-d3urlw{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-raised-button.accent.svelte-d3urlw{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-raised-button.warn.svelte-d3urlw{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-raised-button.svelte-d3urlw:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-stroked-button.svelte-d3urlw{border:1px solid var(--border-primary)}.jp-stroked-button.default.svelte-d3urlw{color:var(--text-primary)}.jp-stroked-button.primary.svelte-d3urlw{color:var(--primary-color)}.jp-stroked-button.accent.svelte-d3urlw{color:var(--secondary-color)}.jp-stroked-button.warn.svelte-d3urlw{color:var(--danger-color)}.jp-stroked-button.svelte-d3urlw:disabled{color:var(--disabled-color)}.jp-flat-button.primary.svelte-d3urlw:active::after,.jp-flat-button.accent.svelte-d3urlw:active::after,.jp-flat-button.warn.svelte-d3urlw:active::after{background-color:var(--background-primary)}.jp-flat-button.default.svelte-d3urlw{background-color:var(--background-primary);color:var(--text-primary)}.jp-flat-button.primary.svelte-d3urlw{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-flat-button.accent.svelte-d3urlw{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-flat-button.warn.svelte-d3urlw{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-flat-button.svelte-d3urlw:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-icon-button.svelte-d3urlw{width:3rem;height:3rem}.jp-icon-button.default.svelte-d3urlw{color:var(--text-primary);fill:var(--text-primary)}.jp-icon-button.primary.svelte-d3urlw{color:var(--primary-color);fill:var(--primary-color)}.jp-icon-button.accent.svelte-d3urlw{color:var(--secondary-color);fill:var(--secondary-color)}.jp-icon-button.warn.svelte-d3urlw{color:var(--danger-color);fill:var(--danger-color)}.jp-icon-button.svelte-d3urlw:disabled{color:var(--disabled-color);fill:var(--disabled-color)}.jp-fab-button.svelte-d3urlw{width:3.5rem;height:3.5rem}.jp-fab-button.svelte-d3urlw:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-d3urlw:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-d3urlw:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-fab-button.default.svelte-d3urlw{background-color:var(--background-primary)}.jp-fab-button.primary.svelte-d3urlw{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-fab-button.accent.svelte-d3urlw{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-fab-button.warn.svelte-d3urlw{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-fab-button.svelte-d3urlw:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-mini-fab-button.svelte-d3urlw{width:2.5rem;height:2.5rem}.jp-mini-fab-button.svelte-d3urlw:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-d3urlw:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-d3urlw:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.default.svelte-d3urlw{background-color:var(--background-primary);color:var(--text-primary)}.jp-mini-fab-button.primary.svelte-d3urlw{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-mini-fab-button.accent.svelte-d3urlw{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-mini-fab-button.warn.svelte-d3urlw{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-mini-fab-button.svelte-d3urlw:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}`)}function D(t){let r,n,l,s,i;const c=t[6].default,e=y(c,t,t[5],null);return{c(){r=h("button"),e&&e.c(),r.disabled=t[0],u(r,"type",t[4]),u(r,"class",n="jp-button jp-"+t[2]+"-button "+t[3]+" svelte-d3urlw"),p(r,"loading",t[1])},m(o,d){k(o,r,d),e&&e.m(r,null),l=!0,s||(i=$(r,"click",t[7]),s=!0)},p(o,[d]){e&&e.p&&(!l||d&32)&&z(e,c,o,o[5],l?q(c,o[5],d,null):B(o[5]),null),(!l||d&1)&&(r.disabled=o[0]),(!l||d&16)&&u(r,"type",o[4]),(!l||d&12&&n!==(n="jp-button jp-"+o[2]+"-button "+o[3]+" svelte-d3urlw"))&&u(r,"class",n),(!l||d&14)&&p(r,"loading",o[1])},i(o){l||(E(e,o),l=!0)},o(o){S(e,o),l=!1},d(o){o&&T(r),e&&e.d(o),s=!1,i()}}}function F(t,r,n){let{$$slots:l={},$$scope:s}=r,{disabled:i=!1}=r,{loading:c=!1}=r,{variant:e="basic"}=r,{color:o="default"}=r,{type:d="button"}=r;function x(a){A.call(this,t,a)}return t.$$set=a=>{"disabled"in a&&n(0,i=a.disabled),"loading"in a&&n(1,c=a.loading),"variant"in a&&n(2,e=a.variant),"color"in a&&n(3,o=a.color),"type"in a&&n(4,d=a.type),"$$scope"in a&&n(5,s=a.$$scope)},[i,c,e,o,d,s,l,x]}class v extends w{constructor(r){super(),j(this,r,F,D,m,{disabled:0,loading:1,variant:2,color:3,type:4},C)}get disabled(){return this.$$.ctx[0]}set disabled(r){this.$$set({disabled:r}),b()}get loading(){return this.$$.ctx[1]}set loading(r){this.$$set({loading:r}),b()}get variant(){return this.$$.ctx[2]}set variant(r){this.$$set({variant:r}),b()}get color(){return this.$$.ctx[3]}set color(r){this.$$set({color:r}),b()}get type(){return this.$$.ctx[4]}set type(r){this.$$set({type:r}),b()}}try{customElements.define("jp-button",g(v,{disabled:{type:"Boolean"},loading:{type:"Boolean"},variant:{},color:{},type:{}},["default"],[],!0));}catch{};export{v as default};
//# sourceMappingURL=button.wc.js.map
