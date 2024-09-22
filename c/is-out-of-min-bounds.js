function o(e,n){let t=new Date(e,n+1,1);return t.setDate(t.getDate()-1),t.getDate()}function s(e,n,t,r){if(e===null)return!1;const u=e.getFullYear(),a=e.getMonth(),f=e.getDate();if(u>n)return!0;if(u<n||a<t)return!1;if(a>t)return!0;const i=o(n,t);return r<f?!0:r>i?!1:r<f}export{s as isOutOfMinBounds};
//# sourceMappingURL=is-out-of-min-bounds.js.map
