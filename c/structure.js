function u(e){if(e.tagName!=="JP-TREE"||!e.hasAttribute("value"))return"";const r={},a=e.getAttribute("value");r[a]=[];for(const t of e.children)t.hasAttribute("value")&&(t.tagName=="JP-NODE"&&r[a].push(t.getAttribute("value")),t.tagName=="JP-TREE"&&r[a].push(u(t)));return r}export{u as jpTreeStructure};
//# sourceMappingURL=structure.js.map
