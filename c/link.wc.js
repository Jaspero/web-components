import{c as v,S as u,i as g,f as i,s as f,a as j,C as m,e as h,d as s,g as y,D as k,E as $,F as w,G as z,H as E,j as B}from"./svelte.js";import"./index2.js";function C(a){j(a,"svelte-xobn7",`:host{display:inline-flex}.jp-button.svelte-xobn7{position:relative;display:inline-flex;align-items:center;justify-content:center;height:36px;border:none;outline:none;cursor:pointer;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:0.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-button.svelte-xobn7:disabled{pointer-events:none}.jp-button.svelte-xobn7:not(.jp-icon-button):not(.jp-fab-button):not(.jp-mini-fab-button){border-radius:0.25rem;min-width:4rem;height:2.25rem;padding:0 1rem}.jp-button.svelte-xobn7:not(.jp-basic-button):not(.jp-raised-button):not(.jp-stroked-button):not(
      .jp-flat-button
    ){overflow:hidden;border-radius:50%}.jp-button.svelte-xobn7::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.1}.jp-button.default.svelte-xobn7:hover::after{background-color:var(--text-primary)}.jp-button.primary.svelte-xobn7:hover::after{background-color:var(--primary-color)}.jp-button.accent.svelte-xobn7:hover::after{background-color:var(--secondary-color)}.jp-button.warn.svelte-xobn7:hover::after{background-color:var(--danger-color)}.jp-basic-button.svelte-xobn7{background-color:transparent}.jp-basic-button.default.svelte-xobn7{color:var(--text-primary)}.jp-basic-button.primary.svelte-xobn7{color:var(--primary-color)}.jp-basic-button.accent.svelte-xobn7{color:var(--secondary-color)}.jp-basic-button.warn.svelte-xobn7{color:var(--danger-color)}.jp-basic-button.svelte-xobn7:disabled{color:var(--disabled-color)}.jp-raised-button.svelte-xobn7:not(:disabled){box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.jp-raised-button.svelte-xobn7:not(:disabled):hover{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12)}.jp-raised-button.svelte-xobn7:not(:disabled):active{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-raised-button.default.svelte-xobn7{background-color:var(--background-primary);color:var(--text-primary)}.jp-raised-button.primary.svelte-xobn7{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-raised-button.accent.svelte-xobn7{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-raised-button.warn.svelte-xobn7{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-raised-button.svelte-xobn7:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-stroked-button.svelte-xobn7{border:1px solid var(--border-primary)}.jp-stroked-button.default.svelte-xobn7{color:var(--text-primary)}.jp-stroked-button.primary.svelte-xobn7{color:var(--primary-color)}.jp-stroked-button.accent.svelte-xobn7{color:var(--secondary-color)}.jp-stroked-button.warn.svelte-xobn7{color:var(--danger-color)}.jp-stroked-button.svelte-xobn7:disabled{color:var(--disabled-color)}.jp-flat-button.primary.svelte-xobn7:active::after,.jp-flat-button.accent.svelte-xobn7:active::after,.jp-flat-button.warn.svelte-xobn7:active::after{background-color:var(--background-primary)}.jp-flat-button.default.svelte-xobn7{background-color:var(--background-primary);color:var(--text-primary)}.jp-flat-button.primary.svelte-xobn7{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-flat-button.accent.svelte-xobn7{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-flat-button.warn.svelte-xobn7{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-flat-button.svelte-xobn7:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-icon-button.svelte-xobn7{width:3rem;height:3rem}.jp-icon-button.default.svelte-xobn7{color:var(--text-primary);fill:var(--text-primary)}.jp-icon-button.primary.svelte-xobn7{color:var(--primary-color);fill:var(--primary-color)}.jp-icon-button.accent.svelte-xobn7{color:var(--secondary-color);fill:var(--secondary-color)}.jp-icon-button.warn.svelte-xobn7{color:var(--danger-color);fill:var(--danger-color)}.jp-icon-button.svelte-xobn7:disabled{color:var(--disabled-color);fill:var(--disabled-color)}.jp-fab-button.svelte-xobn7{width:3.5rem;height:3.5rem}.jp-fab-button.svelte-xobn7:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-xobn7:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-xobn7:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-fab-button.default.svelte-xobn7{background-color:var(--background-primary)}.jp-fab-button.primary.svelte-xobn7{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-fab-button.accent.svelte-xobn7{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-fab-button.warn.svelte-xobn7{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-fab-button.svelte-xobn7:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}.jp-mini-fab-button.svelte-xobn7{width:2.5rem;height:2.5rem}.jp-mini-fab-button.svelte-xobn7:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-xobn7:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-xobn7:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.default.svelte-xobn7{background-color:var(--background-primary);color:var(--text-primary)}.jp-mini-fab-button.primary.svelte-xobn7{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-mini-fab-button.accent.svelte-xobn7{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-mini-fab-button.warn.svelte-xobn7{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-mini-fab-button.svelte-xobn7:disabled{background-color:var(--background-disabled);color:var(--disabled-color)}`)}function S(a){let o,b,e;const c=a[6].default,t=m(c,a,a[5],null);return{c(){o=h("a"),t&&t.c(),s(o,"href",a[3]),s(o,"target",a[4]),s(o,"disabled",a[0]),s(o,"class",b="jp-button jp-"+a[1]+"-button "+a[2]+" svelte-xobn7")},m(r,l){y(r,o,l),t&&t.m(o,null),e=!0},p(r,[l]){t&&t.p&&(!e||l&32)&&k(t,c,r,r[5],e?w(c,r[5],l,null):$(r[5]),null),(!e||l&8)&&s(o,"href",r[3]),(!e||l&16)&&s(o,"target",r[4]),(!e||l&1)&&s(o,"disabled",r[0]),(!e||l&6&&b!==(b="jp-button jp-"+r[1]+"-button "+r[2]+" svelte-xobn7"))&&s(o,"class",b)},i(r){e||(z(t,r),e=!0)},o(r){E(t,r),e=!1},d(r){r&&B(o),t&&t.d(r)}}}function q(a,o,b){let{$$slots:e={},$$scope:c}=o,{disabled:t=!1}=o,{variant:r="basic"}=o,{color:l="default"}=o,{href:d=""}=o,{target:p=""}=o;return a.$$set=n=>{"disabled"in n&&b(0,t=n.disabled),"variant"in n&&b(1,r=n.variant),"color"in n&&b(2,l=n.color),"href"in n&&b(3,d=n.href),"target"in n&&b(4,p=n.target),"$$scope"in n&&b(5,c=n.$$scope)},[t,r,l,d,p,c,e]}class x extends u{constructor(o){super(),g(this,o,q,S,f,{disabled:0,variant:1,color:2,href:3,target:4},C)}get disabled(){return this.$$.ctx[0]}set disabled(o){this.$$set({disabled:o}),i()}get variant(){return this.$$.ctx[1]}set variant(o){this.$$set({variant:o}),i()}get color(){return this.$$.ctx[2]}set color(o){this.$$set({color:o}),i()}get href(){return this.$$.ctx[3]}set href(o){this.$$set({href:o}),i()}get target(){return this.$$.ctx[4]}set target(o){this.$$set({target:o}),i()}}try{customElements.define("jp-link",v(x,{disabled:{type:"Boolean"},variant:{},color:{},href:{},target:{}},["default"],[],!0));}catch{};export{x as default};
