(()=>{var e={};e.id=940,e.ids=[940],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},84770:e=>{"use strict";e.exports=require("crypto")},80665:e=>{"use strict";e.exports=require("dns")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},32694:e=>{"use strict";e.exports=require("http2")},98216:e=>{"use strict";e.exports=require("net")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},35816:e=>{"use strict";e.exports=require("process")},76162:e=>{"use strict";e.exports=require("stream")},82452:e=>{"use strict";e.exports=require("tls")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},82932:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>d.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l}),r(6229),r(54403),r(90996);var s=r(30170),a=r(45002),i=r(83876),d=r.n(i),n=r(66299),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let l=["",{children:["admin",{children:["orders",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6229)),"C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\admin\\orders\\edit\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54403)),"C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,90996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Windows\\Desktop\\sangucheria-ecommerce\\sangucheria-ecommerce\\lodemoni\\app\\admin\\orders\\edit\\[id]\\page.tsx"],u="/admin/orders/edit/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/orders/edit/[id]/page",pathname:"/admin/orders/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},47943:(e,t,r)=>{Promise.resolve().then(r.bind(r,57771))},57771:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(97247),a=r(28964),i=r(34178),d=r(3925);r(31007);var n=r(27757),o=r(70170),l=r(44538),c=r(44494),u=r(58053),p=r(94049);function m({params:e}){let[t,r]=(0,a.useState)(null),[m,x]=(0,a.useState)([]),f=(0,i.useRouter)(),h=async e=>{e.preventDefault(),t&&(await (0,d.Cs)(t.id,t),f.push("/admin/orders"))},g=(e,s,a)=>{if(t){let i=[...t.items];i[e]={...i[e],[s]:a},r({...t,items:i})}};return t?(0,s.jsxs)("div",{className:"container mx-auto py-8",children:[(0,s.jsxs)("h1",{className:"text-3xl font-bold mb-6",children:["Editar Pedido #",t.id]}),(0,s.jsxs)("form",{onSubmit:h,children:[(0,s.jsxs)(n.Zb,{className:"mb-6",children:[(0,s.jsxs)(n.Ol,{children:[s.jsx(n.ll,{children:"Informaci\xf3n del Cliente"}),s.jsx(n.SZ,{children:"Edita los detalles del cliente aqu\xed."})]}),(0,s.jsxs)(n.aY,{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(l._,{htmlFor:"customerName",children:"Nombre del Cliente"}),s.jsx(o.I,{id:"customerName",value:t.customerName,onChange:e=>r({...t,customerName:e.target.value}),required:!0})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(l._,{htmlFor:"address",children:"Direcci\xf3n"}),s.jsx(c.g,{id:"address",value:t.address,onChange:e=>r({...t,address:e.target.value}),required:!0})]})]})]}),(0,s.jsxs)(n.Zb,{className:"mb-6",children:[(0,s.jsxs)(n.Ol,{children:[s.jsx(n.ll,{children:"Items del Pedido"}),s.jsx(n.SZ,{children:"Edita los productos y cantidades aqu\xed."})]}),s.jsx(n.aY,{children:t.items.map((e,t)=>(0,s.jsxs)("div",{className:"flex space-x-4 mb-4",children:[(0,s.jsxs)(p.Ph,{value:e.productId,onValueChange:e=>g(t,"productId",e),children:[s.jsx(p.i4,{className:"w-[200px]",children:s.jsx(p.ki,{placeholder:"Selecciona un producto"})}),s.jsx(p.Bw,{children:m.map(e=>s.jsx(p.Ql,{value:e.id,children:e.name},e.id))})]}),s.jsx(o.I,{type:"number",value:e.quantity,onChange:e=>g(t,"quantity",parseInt(e.target.value)),min:"1",className:"w-20"}),s.jsx(o.I,{value:e.modifications,onChange:e=>g(t,"modifications",e.target.value),placeholder:"Modificaciones"})]},t))}),s.jsx(n.eW,{children:s.jsx(u.z,{type:"button",onClick:()=>r({...t,items:[...t.items,{productId:"",quantity:1,modifications:""}]}),children:"Agregar Item"})})]}),(0,s.jsxs)(n.Zb,{children:[s.jsx(n.aY,{className:"pt-6",children:(0,s.jsxs)("div",{className:"text-xl font-bold",children:["Total: $",Number(t.items.reduce((e,t)=>{let r=m.find(e=>e.id===t.productId);return Number(e+Number(r?.price??0)*Number(t.quantity??0))},0)).toFixed(2)]})}),(0,s.jsxs)(n.eW,{className:"flex justify-end space-x-4",children:[s.jsx(u.z,{type:"button",variant:"outline",onClick:()=>f.push("/admin/orders"),children:"Cancelar"}),s.jsx(u.z,{type:"submit",children:"Guardar Cambios"})]})]})]})]}):s.jsx("div",{children:"Cargando..."})}},58053:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var s=r(97247),a=r(28964),i=r(69008),d=r(87972),n=r(25008);let o=(0,d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...d},l)=>{let c=a?i.g7:"button";return s.jsx(c,{className:(0,n.cn)(o({variant:t,size:r,className:e})),ref:l,...d})});l.displayName="Button"},70170:(e,t,r)=>{"use strict";r.d(t,{I:()=>d});var s=r(97247),a=r(28964),i=r(25008);let d=a.forwardRef(({className:e,type:t,...r},a)=>s.jsx("input",{type:t,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...r}));d.displayName="Input"},44538:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var s=r(97247),a=r(28964),i=r(22251),d=a.forwardRef((e,t)=>(0,s.jsx)(i.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));d.displayName="Label";var n=r(87972),o=r(25008);let l=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef(({className:e,...t},r)=>s.jsx(d,{ref:r,className:(0,o.cn)(l(),e),...t}));c.displayName=d.displayName},94049:(e,t,r)=>{"use strict";r.d(t,{Bw:()=>f,Ph:()=>c,Ql:()=>h,i4:()=>p,ki:()=>u});var s=r(97247),a=r(28964),i=r(42914),d=r(62513),n=r(45370),o=r(48799),l=r(25008);let c=i.fC;i.ZA;let u=i.B4,p=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(i.xz,{ref:a,className:(0,l.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...r,children:[t,s.jsx(i.JO,{asChild:!0,children:s.jsx(d.Z,{className:"h-4 w-4 opacity-50"})})]}));p.displayName=i.xz.displayName;let m=a.forwardRef(({className:e,...t},r)=>s.jsx(i.u_,{ref:r,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:s.jsx(n.Z,{className:"h-4 w-4"})}));m.displayName=i.u_.displayName;let x=a.forwardRef(({className:e,...t},r)=>s.jsx(i.$G,{ref:r,className:(0,l.cn)("flex cursor-default items-center justify-center py-1",e),...t,children:s.jsx(d.Z,{className:"h-4 w-4"})}));x.displayName=i.$G.displayName;let f=a.forwardRef(({className:e,children:t,position:r="popper",...a},d)=>s.jsx(i.h_,{children:(0,s.jsxs)(i.VY,{ref:d,className:(0,l.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...a,children:[s.jsx(m,{}),s.jsx(i.l_,{className:(0,l.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),s.jsx(x,{})]})}));f.displayName=i.VY.displayName,a.forwardRef(({className:e,...t},r)=>s.jsx(i.__,{ref:r,className:(0,l.cn)("px-2 py-1.5 text-sm font-semibold",e),...t})).displayName=i.__.displayName;let h=a.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(i.ck,{ref:a,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(i.wU,{children:s.jsx(o.Z,{className:"h-4 w-4"})})}),s.jsx(i.eT,{children:t})]}));h.displayName=i.ck.displayName,a.forwardRef(({className:e,...t},r)=>s.jsx(i.Z0,{ref:r,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",e),...t})).displayName=i.Z0.displayName},44494:(e,t,r)=>{"use strict";r.d(t,{g:()=>d});var s=r(97247),a=r(28964),i=r(25008);let d=a.forwardRef(({className:e,...t},r)=>s.jsx("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...t}));d.displayName="Textarea"},31007:(e,t,r)=>{"use strict";r.d(t,{Ir:()=>o,Xp:()=>i,nM:()=>n,ry:()=>d});var s=r(25163),a=r(10203);async function i(){let e=(0,a.hJ)(s.Z,"products");return(await (0,a.PL)(e)).docs.map(e=>({id:e.id,...e.data()}))}async function d(e){let t={...e,price:"string"==typeof e.price?parseFloat(e.price):e.price};return{id:(await (0,a.ET)((0,a.hJ)(s.Z,"products"),t)).id,...t}}async function n(e,t){let r=(0,a.JU)(s.Z,"products",e),i={...t,price:"string"==typeof t.price?parseFloat(t.price):t.price};await (0,a.r7)(r,i);let d=await (0,a.QT)(r);if(d.exists())return{id:d.id,...d.data()}}async function o(e){await (0,a.oe)((0,a.JU)(s.Z,"products",e))}},34178:(e,t,r)=>{"use strict";var s=r(25289);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},6229:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(45347).createProxy)(String.raw`C:\Users\Windows\Desktop\sangucheria-ecommerce\sangucheria-ecommerce\lodemoni\app\admin\orders\edit\[id]\page.tsx#default`)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[379,639,564,404,818,917,114],()=>r(82932));module.exports=s})();