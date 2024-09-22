function i(e,a){function t(n){a=n.detail.value,e.dispatchEvent(new CustomEvent("bind",{detail:a}))}return e.value=a,e.addEventListener("value",t),{update(n){a=n,e.value=n}}}export{i as bind};
//# sourceMappingURL=bind.js.map
