(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const s=r()();s.use(r().static(process.cwd()+"/front/dist")),s.get("/**",(function(e,t){t.sendFile(process.cwd()+"/front/dist/index.html")})),console.log(`http://192.168.1.35:${process.env.PORT}/`),s.listen(process.env.PORT)})();
//# sourceMappingURL=bundle-back.js.map