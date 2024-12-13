exports.id=114,exports.ids=[114],exports.modules={42377:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,63642,23)),Promise.resolve().then(r.t.bind(r,87586,23)),Promise.resolve().then(r.t.bind(r,47838,23)),Promise.resolve().then(r.t.bind(r,58057,23)),Promise.resolve().then(r.t.bind(r,77741,23)),Promise.resolve().then(r.t.bind(r,13118,23))},41045:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,34080,23))},27757:(e,s,r)=>{"use strict";r.d(s,{Ol:()=>n,SZ:()=>l,Zb:()=>i,aY:()=>o,eW:()=>m,ll:()=>c});var t=r(97247),a=r(28964),d=r(25008);let i=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...s}));i.displayName="Card";let n=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",e),...s}));n.displayName="CardHeader";let c=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("font-semibold leading-none tracking-tight",e),...s}));c.displayName="CardTitle";let l=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("text-sm text-muted-foreground",e),...s}));l.displayName="CardDescription";let o=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("p-6 pt-0",e),...s}));o.displayName="CardContent";let m=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,d.cn)("flex items-center p-6 pt-0",e),...s}));m.displayName="CardFooter"},25163:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(68132),a=r(10203);let d=(0,t.ZF)({apiKey:"AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",authDomain:"lodemoni-5d615.firebaseapp.com",projectId:"lodemoni-5d615",storageBucket:"lodemoni-5d615.appspot.com",messagingSenderId:"107003347477",appId:"1:107003347477:web:afe9207fe8825cebbfc41c",measurementId:"G-PF1YQ76NJ9"}),i=(0,a.ad)(d)},3925:(e,s,r)=>{"use strict";r.d(s,{AU:()=>n,Cs:()=>c,LV:()=>i});var t=r(25163),a=r(10203);function d(e){return e instanceof a.EK?e.toDate():e}async function i(e){try{let s=new Date,r={...e,status:"pending",createdAt:s};return{id:(await (0,a.ET)((0,a.hJ)(t.Z,"orders"),{...r,createdAt:a.EK.fromDate(r.createdAt)})).id,...r}}catch(e){throw console.error("Error creating order:",e),Error("Could not create the order.")}}async function n(){try{let e=(0,a.hJ)(t.Z,"orders");return(await (0,a.PL)(e)).docs.map(e=>{let s=e.data();return{id:e.id,customerName:s.customerName,address:s.address,items:s.items,total:s.total,status:s.status,createdAt:d(s.createdAt)}})}catch(e){return console.error("Error fetching orders:",e),[]}}async function c(e,s){try{if(s.status&&!["pending","completed","cancelled"].includes(s.status))throw Error("Invalid order status");let r=(0,a.JU)(t.Z,"orders",e),i={...s};s.createdAt instanceof Date&&(i.createdAt=a.EK.fromDate(s.createdAt)),await (0,a.r7)(r,i);let n=await (0,a.QT)(r);if(n.exists()){let e=n.data();return{id:n.id,customerName:e.customerName,address:e.address,items:e.items,total:e.total,status:e.status,createdAt:d(e.createdAt)}}console.warn(`Order with ID ${e} not found after update.`);return}catch(e){throw console.error("Error updating order:",e),Error("Could not update the order.")}}},25008:(e,s,r)=>{"use strict";r.d(s,{cn:()=>d});var t=r(61929),a=r(35770);function d(...e){return(0,a.m6)((0,t.W)(e))}},54403:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>x,metadata:()=>m});var t=r(72051),a=r(23750),d=r.n(a);r(67272);var i=r(92349),n=r(53189),c=r(28111),l=r(76573),o=r(83907);let m={title:"Sangucher\xeda Deliciosa",description:"Experiencia culinaria de primer nivel"};function x({children:e}){return t.jsx("html",{lang:"es",children:(0,t.jsxs)("body",{className:`${d().className} bg-gray-50 min-h-screen flex flex-col`,children:[t.jsx("header",{className:"bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[t.jsx("div",{className:"flex items-center space-x-4",children:t.jsx(i.default,{href:"/",className:"text-3xl font-extrabold tracking-tight hover:text-red-100 transition-colors",children:"LodeMoni"})}),t.jsx("nav",{children:(0,t.jsxs)("ul",{className:"flex space-x-6 items-center",children:[t.jsx("li",{children:(0,t.jsxs)(i.default,{href:"/",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(n.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Inicio"})]})}),t.jsx("li",{children:(0,t.jsxs)(i.default,{href:"/order",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(c.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Hacer Pedido"})]})}),t.jsx("li",{children:(0,t.jsxs)(i.default,{href:"/admin/products",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(l.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Productos"})]})}),t.jsx("li",{children:(0,t.jsxs)(i.default,{href:"/admin/orders",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(c.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Pedidos"})]})}),t.jsx("li",{children:(0,t.jsxs)(i.default,{href:"/admin/dashboard",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(o.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Panel"})]})})]})})]})}),t.jsx("main",{className:"flex-grow container mx-auto px-4 py-8",children:e}),(0,t.jsxs)("footer",{className:"bg-gray-800 text-white py-8",children:[(0,t.jsxs)("div",{className:"container mx-auto px-4 grid md:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-xl font-bold mb-4",children:"Sangucher\xeda Deliciosa"}),t.jsx("p",{className:"text-gray-300",children:"Crafteando los mejores s\xe1nguches con pasi\xf3n y precisi\xf3n."})]}),(0,t.jsxs)("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Navegaci\xf3n"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[t.jsx("li",{children:t.jsx(i.default,{href:"/",className:"hover:text-red-400 transition-colors",children:"Inicio"})}),t.jsx("li",{children:t.jsx(i.default,{href:"/order",className:"hover:text-red-400 transition-colors",children:"Hacer Pedido"})}),t.jsx("li",{children:t.jsx(i.default,{href:"/about",className:"hover:text-red-400 transition-colors",children:"Sobre Nosotros"})})]})]}),(0,t.jsxs)("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Contacto"}),t.jsx("p",{className:"text-gray-300",children:"Tel\xe9fono: (555) 123-4567"}),t.jsx("p",{className:"text-gray-300",children:"Email: contacto@sangucheriadeliciosa.com"})]})]}),t.jsx("div",{className:"container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center",children:(0,t.jsxs)("p",{className:"text-gray-400",children:["\xa9 ",new Date().getFullYear()," Sangucher\xeda Deliciosa. Todos los derechos reservados."]})})]})]})})}},57481:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(54564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};