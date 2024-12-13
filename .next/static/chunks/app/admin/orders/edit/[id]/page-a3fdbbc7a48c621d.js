(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{8653:function(e,t,r){Promise.resolve().then(r.bind(r,6780))},6780:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a=r(7437),s=r(2265),n=r(9376),i=r(6285),d=r(3839),o=r(6070),c=r(5186),l=r(7129),u=r(6818),f=r(2869),m=r(3647);function p(e){let{params:t}=e,[r,p]=(0,s.useState)(null),[x,h]=(0,s.useState)([]),g=(0,n.useRouter)();(0,s.useEffect)(()=>{(async()=>{let[e,r]=await Promise.all([(0,i.co)(t.id),(0,d.Xp)()]);e&&p(e),h(r)})()},[t.id]);let y=async e=>{e.preventDefault(),r&&(await (0,i.Cs)(r.id,r),g.push("/admin/orders"))},b=(e,t,a)=>{if(r){let s=[...r.items];s[e]={...s[e],[t]:a},p({...r,items:s})}};return r?(0,a.jsxs)("div",{className:"container mx-auto py-8",children:[(0,a.jsxs)("h1",{className:"text-3xl font-bold mb-6",children:["Editar Pedido #",r.id]}),(0,a.jsxs)("form",{onSubmit:y,children:[(0,a.jsxs)(o.Zb,{className:"mb-6",children:[(0,a.jsxs)(o.Ol,{children:[(0,a.jsx)(o.ll,{children:"Informaci\xf3n del Cliente"}),(0,a.jsx)(o.SZ,{children:"Edita los detalles del cliente aqu\xed."})]}),(0,a.jsxs)(o.aY,{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(l._,{htmlFor:"customerName",children:"Nombre del Cliente"}),(0,a.jsx)(c.I,{id:"customerName",value:r.customerName,onChange:e=>p({...r,customerName:e.target.value}),required:!0})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(l._,{htmlFor:"address",children:"Direcci\xf3n"}),(0,a.jsx)(u.g,{id:"address",value:r.address,onChange:e=>p({...r,address:e.target.value}),required:!0})]})]})]}),(0,a.jsxs)(o.Zb,{className:"mb-6",children:[(0,a.jsxs)(o.Ol,{children:[(0,a.jsx)(o.ll,{children:"Items del Pedido"}),(0,a.jsx)(o.SZ,{children:"Edita los productos y cantidades aqu\xed."})]}),(0,a.jsx)(o.aY,{children:r.items.map((e,t)=>(0,a.jsxs)("div",{className:"flex space-x-4 mb-4",children:[(0,a.jsxs)(m.Ph,{value:e.productId,onValueChange:e=>b(t,"productId",e),children:[(0,a.jsx)(m.i4,{className:"w-[200px]",children:(0,a.jsx)(m.ki,{placeholder:"Selecciona un producto"})}),(0,a.jsx)(m.Bw,{children:x.map(e=>(0,a.jsx)(m.Ql,{value:e.id,children:e.name},e.id))})]}),(0,a.jsx)(c.I,{type:"number",value:e.quantity,onChange:e=>b(t,"quantity",parseInt(e.target.value)),min:"1",className:"w-20"}),(0,a.jsx)(c.I,{value:e.modifications,onChange:e=>b(t,"modifications",e.target.value),placeholder:"Modificaciones"})]},t))}),(0,a.jsx)(o.eW,{children:(0,a.jsx)(f.z,{type:"button",onClick:()=>p({...r,items:[...r.items,{productId:"",quantity:1,modifications:""}]}),children:"Agregar Item"})})]}),(0,a.jsxs)(o.Zb,{children:[(0,a.jsx)(o.aY,{className:"pt-6",children:(0,a.jsxs)("div",{className:"text-xl font-bold",children:["Total: $",Number(r.items.reduce((e,t)=>{var r,a;let s=x.find(e=>e.id===t.productId);return Number(e+Number(null!==(r=null==s?void 0:s.price)&&void 0!==r?r:0)*Number(null!==(a=t.quantity)&&void 0!==a?a:0))},0)).toFixed(2)]})}),(0,a.jsxs)(o.eW,{className:"flex justify-end space-x-4",children:[(0,a.jsx)(f.z,{type:"button",variant:"outline",onClick:()=>g.push("/admin/orders"),children:"Cancelar"}),(0,a.jsx)(f.z,{type:"submit",children:"Guardar Cambios"})]})]})]})]}):(0,a.jsx)("div",{children:"Cargando..."})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var a=r(7437),s=r(2265),n=r(7495),i=r(535),d=r(4508);let o=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:c=!1,...l}=e,u=c?n.g7:"button";return(0,a.jsx)(u,{className:(0,d.cn)(o({variant:s,size:i,className:r})),ref:t,...l})});c.displayName="Button"},6070:function(e,t,r){"use strict";r.d(t,{Ol:function(){return d},SZ:function(){return c},Zb:function(){return i},aY:function(){return l},eW:function(){return u},ll:function(){return o}});var a=r(7437),s=r(2265),n=r(4508);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});i.displayName="Card";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});d.displayName="CardHeader";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",r),...s})});o.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});c.displayName="CardDescription";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});l.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},5186:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(7437),s=r(2265),n=r(4508);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,a.jsx)("input",{type:s,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...i})});i.displayName="Input"},7129:function(e,t,r){"use strict";r.d(t,{_:function(){return l}});var a=r(7437),s=r(2265),n=r(6840),i=s.forwardRef((e,t)=>(0,a.jsx)(n.WV.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var d=r(535),o=r(4508);let c=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i,{ref:t,className:(0,o.cn)(c(),r),...s})});l.displayName=i.displayName},3647:function(e,t,r){"use strict";r.d(t,{Bw:function(){return x},Ph:function(){return l},Ql:function(){return h},i4:function(){return f},ki:function(){return u}});var a=r(7437),s=r(2265),n=r(1592),i=r(875),d=r(2135),o=r(401),c=r(4508);let l=n.fC;n.ZA;let u=n.B4,f=s.forwardRef((e,t)=>{let{className:r,children:s,...d}=e;return(0,a.jsxs)(n.xz,{ref:t,className:(0,c.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...d,children:[s,(0,a.jsx)(n.JO,{asChild:!0,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=n.xz.displayName;let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(d.Z,{className:"h-4 w-4"})})});m.displayName=n.u_.displayName;let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",r),...s,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=n.$G.displayName;let x=s.forwardRef((e,t)=>{let{className:r,children:s,position:i="popper",...d}=e;return(0,a.jsx)(n.h_,{children:(0,a.jsxs)(n.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:i,...d,children:[(0,a.jsx)(m,{}),(0,a.jsx)(n.l_,{className:(0,c.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,a.jsx)(p,{})]})})});x.displayName=n.VY.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.__,{ref:t,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",r),...s})}).displayName=n.__.displayName;let h=s.forwardRef((e,t)=>{let{className:r,children:s,...i}=e;return(0,a.jsxs)(n.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...i,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.wU,{children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(n.eT,{children:s})]})});h.displayName=n.ck.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(n.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",r),...s})}).displayName=n.Z0.displayName},6818:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var a=r(7437),s=r(2265),n=r(4508);let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...s})});i.displayName="Textarea"},7293:function(e,t,r){"use strict";var a=r(738),s=r(5978);let n=(0,a.ZF)({apiKey:"AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",authDomain:"lodemoni-5d615.firebaseapp.com",projectId:"lodemoni-5d615",storageBucket:"lodemoni-5d615.appspot.com",messagingSenderId:"107003347477",appId:"1:107003347477:web:afe9207fe8825cebbfc41c",measurementId:"G-PF1YQ76NJ9"}),i=(0,s.ad)(n);t.Z=i},6285:function(e,t,r){"use strict";r.d(t,{AU:function(){return d},Cs:function(){return c},LV:function(){return i},co:function(){return o},dA:function(){return l}});var a=r(7293),s=r(5978);function n(e){return e instanceof s.EK?e.toDate():e}async function i(e){try{let t=new Date,r={...e,status:"pending",createdAt:t};return{id:(await (0,s.ET)((0,s.hJ)(a.Z,"orders"),{...r,createdAt:s.EK.fromDate(r.createdAt)})).id,...r}}catch(e){throw console.error("Error creating order:",e),Error("Could not create the order.")}}async function d(){try{let e=(0,s.hJ)(a.Z,"orders");return(await (0,s.PL)(e)).docs.map(e=>{let t=e.data();return{id:e.id,customerName:t.customerName,address:t.address,items:t.items,total:t.total,status:t.status,createdAt:n(t.createdAt)}})}catch(e){return console.error("Error fetching orders:",e),[]}}async function o(e){try{let t=(0,s.JU)(a.Z,"orders",e),r=await (0,s.QT)(t);if(r.exists()){let e=r.data();return{id:r.id,customerName:e.customerName,address:e.address,items:e.items,total:e.total,status:e.status,createdAt:n(e.createdAt)}}console.warn("Order with ID ".concat(e," not found."));return}catch(e){throw console.error("Error fetching order:",e),Error("Could not fetch the order.")}}async function c(e,t){try{if(t.status&&!["pending","completed","cancelled"].includes(t.status))throw Error("Invalid order status");let r=(0,s.JU)(a.Z,"orders",e),i={...t};t.createdAt instanceof Date&&(i.createdAt=s.EK.fromDate(t.createdAt)),await (0,s.r7)(r,i);let d=await (0,s.QT)(r);if(d.exists()){let e=d.data();return{id:d.id,customerName:e.customerName,address:e.address,items:e.items,total:e.total,status:e.status,createdAt:n(e.createdAt)}}console.warn("Order with ID ".concat(e," not found after update."));return}catch(e){throw console.error("Error updating order:",e),Error("Could not update the order.")}}async function l(e){try{let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),i=(0,s.hJ)(a.Z,"orders"),d=(0,s.IO)(i,(0,s.ar)("status","==","completed"),(0,s.ar)("createdAt",">=",s.EK.fromDate(t)),(0,s.ar)("createdAt","<",s.EK.fromDate(r)));return(await (0,s.PL)(d)).docs.map(e=>{let t=e.data();return{id:e.id,customerName:t.customerName,address:t.address,items:t.items,total:t.total,status:t.status,createdAt:n(t.createdAt)}})}catch(e){return console.error("Error fetching completed orders for the day:",e),[]}}},3839:function(e,t,r){"use strict";r.d(t,{Ir:function(){return c},Xp:function(){return n},nM:function(){return o},ry:function(){return d},wv:function(){return i}});var a=r(7293),s=r(5978);async function n(){let e=(0,s.hJ)(a.Z,"products");return(await (0,s.PL)(e)).docs.map(e=>({id:e.id,...e.data()}))}async function i(e){let t=(0,s.JU)(a.Z,"products",e),r=await (0,s.QT)(t);return r.exists()?{id:r.id,...r.data()}:void 0}async function d(e){let t={...e,price:"string"==typeof e.price?parseFloat(e.price):e.price};return{id:(await (0,s.ET)((0,s.hJ)(a.Z,"products"),t)).id,...t}}async function o(e,t){let r=(0,s.JU)(a.Z,"products",e),n={...t,price:"string"==typeof t.price?parseFloat(t.price):t.price};await (0,s.r7)(r,n);let i=await (0,s.QT)(r);if(i.exists())return{id:i.id,...i.data()}}async function c(e){await (0,s.oe)((0,s.JU)(a.Z,"products",e))}},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(1994),s=r(3335);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}},9376:function(e,t,r){"use strict";var a=r(5475);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})}},function(e){e.O(0,[358,448,137,534,971,117,744],function(){return e(e.s=8653)}),_N_E=e.O()}]);