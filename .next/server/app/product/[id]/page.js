(()=>{var e={};e.id=188,e.ids=[188],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},80665:e=>{"use strict";e.exports=require("dns")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},32694:e=>{"use strict";e.exports=require("http2")},98216:e=>{"use strict";e.exports=require("net")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},35816:e=>{"use strict";e.exports=require("process")},76162:e=>{"use strict";e.exports=require("stream")},82452:e=>{"use strict";e.exports=require("tls")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},1959:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>l,routeModule:()=>u,tree:()=>d}),s(30501),s(54403),s(90996);var t=s(30170),a=s(45002),i=s(83876),n=s.n(i),o=s(66299),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);s.d(r,c);let d=["",{children:["product",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,30501)),"C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\product\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,54403)),"C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\product\\[id]\\page.tsx"],x="/product/[id]/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/product/[id]/page",pathname:"/product/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},30952:(e,r,s)=>{Promise.resolve().then(s.bind(s,93739))},42377:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,63642,23)),Promise.resolve().then(s.t.bind(s,87586,23)),Promise.resolve().then(s.t.bind(s,47838,23)),Promise.resolve().then(s.t.bind(s,58057,23)),Promise.resolve().then(s.t.bind(s,77741,23)),Promise.resolve().then(s.t.bind(s,13118,23))},41045:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,34080,23))},93739:(e,r,s)=>{"use strict";s.d(r,{default:()=>i});var t=s(97247),a=s(28964);function i({productId:e}){let[r,s]=(0,a.useState)(!1),i=async()=>{s(!0),await new Promise(e=>setTimeout(e,1e3)),s(!1),alert("Producto agregado al carrito")};return t.jsx("button",{onClick:i,disabled:r,className:"bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:bg-red-300",children:r?"Agregando...":"Agregar al carrito"})}},54403:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>m,metadata:()=>x});var t=s(72051),a=s(23750),i=s.n(a);s(67272);var n=s(92349),o=s(53189),c=s(28111),d=s(76573),l=s(83907);let x={title:"Sangucher\xeda Deliciosa",description:"Experiencia culinaria de primer nivel"};function m({children:e}){return t.jsx("html",{lang:"es",children:(0,t.jsxs)("body",{className:`${i().className} bg-gray-50 min-h-screen flex flex-col`,children:[t.jsx("header",{className:"bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[t.jsx("div",{className:"flex items-center space-x-4",children:t.jsx(n.default,{href:"/",className:"text-3xl font-extrabold tracking-tight hover:text-red-100 transition-colors",children:"LodeMoni"})}),t.jsx("nav",{children:(0,t.jsxs)("ul",{className:"flex space-x-6 items-center",children:[t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(o.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Inicio"})]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/order",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(c.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Hacer Pedido"})]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/admin/products",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(d.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Productos"})]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/admin/orders",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(c.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Pedidos"})]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/admin/dashboard",className:"flex items-center space-x-2 hover:text-red-100 transition-colors",children:[t.jsx(l.Z,{className:"w-5 h-5"}),t.jsx("span",{className:"hidden md:inline",children:"Panel"})]})})]})})]})}),t.jsx("main",{className:"flex-grow container mx-auto px-4 py-8",children:e}),(0,t.jsxs)("footer",{className:"bg-gray-800 text-white py-8",children:[(0,t.jsxs)("div",{className:"container mx-auto px-4 grid md:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-xl font-bold mb-4",children:"Sangucher\xeda Deliciosa"}),t.jsx("p",{className:"text-gray-300",children:"Crafteando los mejores s\xe1nguches con pasi\xf3n y precisi\xf3n."})]}),(0,t.jsxs)("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Navegaci\xf3n"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[t.jsx("li",{children:t.jsx(n.default,{href:"/",className:"hover:text-red-400 transition-colors",children:"Inicio"})}),t.jsx("li",{children:t.jsx(n.default,{href:"/order",className:"hover:text-red-400 transition-colors",children:"Hacer Pedido"})}),t.jsx("li",{children:t.jsx(n.default,{href:"/about",className:"hover:text-red-400 transition-colors",children:"Sobre Nosotros"})})]})]}),(0,t.jsxs)("div",{children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Contacto"}),t.jsx("p",{className:"text-gray-300",children:"Tel\xe9fono: (555) 123-4567"}),t.jsx("p",{className:"text-gray-300",children:"Email: contacto@sangucheriadeliciosa.com"})]})]}),t.jsx("div",{className:"container mx-auto px-4 mt-8 pt-4 border-t border-gray-700 text-center",children:(0,t.jsxs)("p",{className:"text-gray-400",children:["\xa9 ",new Date().getFullYear()," Sangucher\xeda Deliciosa. Todos los derechos reservados."]})})]})]})})}},30501:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>n});var t=s(72051),a=s(88421);let i=(0,s(45347).createProxy)(String.raw`C:\Users\Windows\Desktop\sangucheria-ecommerce\sangucheria-ecommerce\lodemoni\components\AddToCartButton.tsx#default`);async function n({params:e}){let r;try{r=await (0,a.wv)(e.id)}catch(e){return console.error("Error fetching product:",e),t.jsx("div",{className:"text-center text-red-500",children:"Ocurri\xf3 un error al cargar el producto. Por favor, intenta nuevamente m\xe1s tarde."})}if(!r)return(0,t.jsxs)("div",{className:"text-center text-gray-500",children:[t.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Producto no encontrado"}),t.jsx("p",{children:"El producto que buscas no est\xe1 disponible o ha sido eliminado."})]});let s="number"==typeof r.price?r.price:Number(r.price);return(0,t.jsxs)("div",{className:"max-w-2xl mx-auto p-4",children:[t.jsx("h1",{className:"text-3xl font-bold mb-4 text-gray-800",children:r.name}),t.jsx("p",{className:"text-gray-600 mb-6",children:r.description}),(0,t.jsxs)("p",{className:"text-2xl font-bold mb-6 text-green-600",children:["$",s.toFixed(2)]}),t.jsx(i,{productId:r.id})]})}},88421:(e,r,s)=>{"use strict";s.d(r,{wv:()=>c,V8:()=>o});var t=s(18777),a=s(94886);let i=(0,t.ZF)({apiKey:"AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",authDomain:"lodemoni-5d615.firebaseapp.com",projectId:"lodemoni-5d615",storageBucket:"lodemoni-5d615.appspot.com",messagingSenderId:"107003347477",appId:"1:107003347477:web:afe9207fe8825cebbfc41c",measurementId:"G-PF1YQ76NJ9"}),n=(0,a.ad)(i);async function o(e){let r=(0,a.hJ)(n,"products"),s=(0,a.IO)(r,(0,a.ar)("category","==",e));return(await (0,a.PL)(s)).docs.map(e=>({id:e.id,...e.data()}))}async function c(e){let r=(0,a.JU)(n,"products",e),s=await (0,a.QT)(r);return s.exists()?{id:s.id,...s.data()}:void 0}},57481:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var t=s(54564);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[379,639,564,362],()=>s(1959));module.exports=t})();