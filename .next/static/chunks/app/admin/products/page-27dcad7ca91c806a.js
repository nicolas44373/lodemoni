(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{1451:function(e,r,t){Promise.resolve().then(t.bind(t,5845))},5845:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var a=t(7437),n=t(2265),s=t(3839),l=t(6070),i=t(5186),d=t(2869),o=t(3647),c=t(3578);let u=[{value:"sandwich",label:"S\xe1ndwich"},{value:"empanada",label:"Empanada"},{value:"napolitana",label:"Napolitana"},{value:"pizza",label:"Pizza"},{value:"matambre",label:"Matambre"},{value:"menu",label:"Men\xfa"}];function f(){let[e,r]=(0,n.useState)([]),[t,f]=(0,n.useState)({name:"",price:"",description:"",category:"sandwich"}),[p,m]=(0,n.useState)(null);(0,n.useEffect)(()=>{x()},[]);let x=async()=>{r(await (0,s.Xp)())},h=async e=>{e.preventDefault(),await (0,s.ry)(t),f({name:"",price:"",description:"",category:"sandwich"}),x()},g=async e=>{e.preventDefault(),p&&(await (0,s.nM)(p.id,p),m(null),x())},b=async e=>{window.confirm("\xbfEst\xe1s seguro de que quieres eliminar este producto?")&&(await (0,s.Ir)(e),x())},v=e=>{let r="string"==typeof e?parseFloat(e):e;return isNaN(r)?"0.00":r.toFixed(2)};return(0,a.jsxs)("div",{className:"container mx-auto py-12 px-4 md:px-8",children:[(0,a.jsx)("h1",{className:"text-4xl font-extrabold text-gray-800 mb-10 text-center",children:"Administrar Productos"}),(0,a.jsxs)(l.Zb,{className:"mb-12 shadow-lg",children:[(0,a.jsxs)(l.Ol,{children:[(0,a.jsx)(l.ll,{className:"text-2xl font-semibold",children:"Agregar Nuevo Producto"}),(0,a.jsx)(l.SZ,{className:"text-gray-600",children:"Ingresa los detalles del nuevo producto"})]}),(0,a.jsx)(l.aY,{children:(0,a.jsxs)("form",{onSubmit:h,className:"space-y-6",children:[(0,a.jsx)(i.I,{placeholder:"Nombre del producto",value:t.name,onChange:e=>f({...t,name:e.target.value}),required:!0}),(0,a.jsx)(i.I,{type:"number",placeholder:"Precio",value:t.price,onChange:e=>f({...t,price:e.target.value}),required:!0,step:"0.01"}),(0,a.jsx)(i.I,{placeholder:"Descripci\xf3n",value:t.description,onChange:e=>f({...t,description:e.target.value}),required:!0}),(0,a.jsxs)(o.Ph,{value:t.category,onValueChange:e=>f({...t,category:e}),children:[(0,a.jsx)(o.i4,{children:(0,a.jsx)(o.ki,{placeholder:"Selecciona una categor\xeda"})}),(0,a.jsx)(o.Bw,{children:u.map(e=>(0,a.jsx)(o.Ql,{value:e.value,children:e.label},e.value))})]}),(0,a.jsx)(d.z,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700",children:"Agregar Producto"})]})})]}),(0,a.jsxs)(l.Zb,{className:"shadow-lg",children:[(0,a.jsxs)(l.Ol,{children:[(0,a.jsx)(l.ll,{className:"text-2xl font-semibold",children:"Lista de Productos"}),(0,a.jsx)(l.SZ,{className:"text-gray-600",children:"Gestiona los productos existentes"})]}),(0,a.jsx)(l.aY,{children:(0,a.jsxs)(c.iA,{className:"w-full",children:[(0,a.jsx)(c.xD,{children:(0,a.jsxs)(c.SC,{children:[(0,a.jsx)(c.ss,{children:"Nombre"}),(0,a.jsx)(c.ss,{children:"Precio"}),(0,a.jsx)(c.ss,{children:"Descripci\xf3n"}),(0,a.jsx)(c.ss,{children:"Categor\xeda"}),(0,a.jsx)(c.ss,{children:"Acciones"})]})}),(0,a.jsx)(c.RM,{children:e.map(e=>(0,a.jsxs)(c.SC,{className:"hover:bg-gray-100",children:[(0,a.jsx)(c.pj,{children:(null==p?void 0:p.id)===e.id?(0,a.jsx)(i.I,{value:p.name,onChange:e=>m({...p,name:e.target.value})}):e.name}),(0,a.jsx)(c.pj,{children:(null==p?void 0:p.id)===e.id?(0,a.jsx)(i.I,{type:"number",value:p.price||"",onChange:e=>m({...p,price:e.target.value}),step:"0.01"}):"$".concat(v(e.price))}),(0,a.jsx)(c.pj,{children:(null==p?void 0:p.id)===e.id?(0,a.jsx)(i.I,{value:p.description,onChange:e=>m({...p,description:e.target.value})}):e.description}),(0,a.jsx)(c.pj,{children:(null==p?void 0:p.id)===e.id?(0,a.jsxs)(o.Ph,{value:p.category,onValueChange:e=>m({...p,category:e}),children:[(0,a.jsx)(o.i4,{children:(0,a.jsx)(o.ki,{})}),(0,a.jsx)(o.Bw,{children:u.map(e=>(0,a.jsx)(o.Ql,{value:e.value,children:e.label},e.value))})]}):e.category}),(0,a.jsxs)(c.pj,{className:"space-x-2",children:[(null==p?void 0:p.id)===e.id?(0,a.jsx)(d.z,{className:"bg-green-600 hover:bg-green-700",onClick:g,children:"Guardar"}):(0,a.jsx)(d.z,{className:"bg-yellow-500 hover:bg-yellow-600",onClick:()=>m(e),children:"Editar"}),(0,a.jsx)(d.z,{variant:"destructive",className:"bg-red-600 hover:bg-red-700",onClick:()=>b(e.id),children:"Eliminar"})]})]},e.id))})]})})]})]})}},2869:function(e,r,t){"use strict";t.d(r,{z:function(){return o}});var a=t(7437),n=t(2265),s=t(7495),l=t(535),i=t(4508);let d=(0,l.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=n.forwardRef((e,r)=>{let{className:t,variant:n,size:l,asChild:o=!1,...c}=e,u=o?s.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(d({variant:n,size:l,className:t})),ref:r,...c})});o.displayName="Button"},6070:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},SZ:function(){return o},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return d}});var a=t(7437),n=t(2265),s=t(4508);let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...n})});l.displayName="Card";let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...n})});i.displayName="CardHeader";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...n})});d.displayName="CardTitle";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...n})});o.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...n})});u.displayName="CardFooter"},5186:function(e,r,t){"use strict";t.d(r,{I:function(){return l}});var a=t(7437),n=t(2265),s=t(4508);let l=n.forwardRef((e,r)=>{let{className:t,type:n,...l}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...l})});l.displayName="Input"},3647:function(e,r,t){"use strict";t.d(r,{Bw:function(){return x},Ph:function(){return c},Ql:function(){return h},i4:function(){return f},ki:function(){return u}});var a=t(7437),n=t(2265),s=t(1592),l=t(875),i=t(2135),d=t(401),o=t(4508);let c=s.fC;s.ZA;let u=s.B4,f=n.forwardRef((e,r)=>{let{className:t,children:n,...i}=e;return(0,a.jsxs)(s.xz,{ref:r,className:(0,o.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",t),...i,children:[n,(0,a.jsx)(s.JO,{asChild:!0,children:(0,a.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=s.xz.displayName;let p=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.u_,{ref:r,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let m=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.$G,{ref:r,className:(0,o.cn)("flex cursor-default items-center justify-center py-1",t),...n,children:(0,a.jsx)(l.Z,{className:"h-4 w-4"})})});m.displayName=s.$G.displayName;let x=n.forwardRef((e,r)=>{let{className:t,children:n,position:l="popper",...i}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsxs)(s.VY,{ref:r,className:(0,o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",t),position:l,...i,children:[(0,a.jsx)(p,{}),(0,a.jsx)(s.l_,{className:(0,o.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,a.jsx)(m,{})]})})});x.displayName=s.VY.displayName,n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.__,{ref:r,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",t),...n})}).displayName=s.__.displayName;let h=n.forwardRef((e,r)=>{let{className:t,children:n,...l}=e;return(0,a.jsxs)(s.ck,{ref:r,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...l,children:[(0,a.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(d.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(s.eT,{children:n})]})});h.displayName=s.ck.displayName,n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.Z0,{ref:r,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",t),...n})}).displayName=s.Z0.displayName},3578:function(e,r,t){"use strict";t.d(r,{RM:function(){return d},SC:function(){return o},iA:function(){return l},pj:function(){return u},ss:function(){return c},xD:function(){return i}});var a=t(7437),n=t(2265),s=t(4508);let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:r,className:(0,s.cn)("w-full caption-bottom text-sm",t),...n})})});l.displayName="Table";let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("thead",{ref:r,className:(0,s.cn)("[&_tr]:border-b",t),...n})});i.displayName="TableHeader";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("tbody",{ref:r,className:(0,s.cn)("[&_tr:last-child]:border-0",t),...n})});d.displayName="TableBody",n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("tfoot",{ref:r,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...n})}).displayName="TableFooter";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("tr",{ref:r,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...n})});o.displayName="TableRow";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("th",{ref:r,className:(0,s.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...n})});c.displayName="TableHead";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("td",{ref:r,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...n})});u.displayName="TableCell",n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("caption",{ref:r,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",t),...n})}).displayName="TableCaption"},7293:function(e,r,t){"use strict";var a=t(738),n=t(5978);let s=(0,a.ZF)({apiKey:"AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",authDomain:"lodemoni-5d615.firebaseapp.com",projectId:"lodemoni-5d615",storageBucket:"lodemoni-5d615.appspot.com",messagingSenderId:"107003347477",appId:"1:107003347477:web:afe9207fe8825cebbfc41c",measurementId:"G-PF1YQ76NJ9"}),l=(0,n.ad)(s);r.Z=l},3839:function(e,r,t){"use strict";t.d(r,{Ir:function(){return o},Xp:function(){return s},nM:function(){return d},ry:function(){return i},wv:function(){return l}});var a=t(7293),n=t(5978);async function s(){let e=(0,n.hJ)(a.Z,"products");return(await (0,n.PL)(e)).docs.map(e=>({id:e.id,...e.data()}))}async function l(e){let r=(0,n.JU)(a.Z,"products",e),t=await (0,n.QT)(r);return t.exists()?{id:t.id,...t.data()}:void 0}async function i(e){let r={...e,price:"string"==typeof e.price?parseFloat(e.price):e.price};return{id:(await (0,n.ET)((0,n.hJ)(a.Z,"products"),r)).id,...r}}async function d(e,r){let t=(0,n.JU)(a.Z,"products",e),s={...r,price:"string"==typeof r.price?parseFloat(r.price):r.price};await (0,n.r7)(t,s);let l=await (0,n.QT)(t);if(l.exists())return{id:l.id,...l.data()}}async function o(e){await (0,n.oe)((0,n.JU)(a.Z,"products",e))}},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var a=t(1994),n=t(3335);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.m6)((0,a.W)(r))}}},function(e){e.O(0,[358,448,137,534,971,117,744],function(){return e(e.s=1451)}),_N_E=e.O()}]);