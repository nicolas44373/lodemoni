(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{3451:function(e,t,r){Promise.resolve().then(r.bind(r,6665))},6665:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7437),a=r(2265),s=r(9376),o=r(6285),i=r(6070),l=r(2869),c=r(9378),d=r(3578),u=r(5978);function f(){let[e,t]=(0,a.useState)([]),r=(0,s.useRouter)();(0,a.useEffect)(()=>{f()},[]);let f=async()=>{t(await (0,o.AU)())},m=async e=>{await (0,o.Cs)(e,{status:"completed"}),f()},p=async e=>{window.confirm("\xbfEst\xe1s seguro de que quieres cancelar este pedido?")&&(await (0,o.Cs)(e,{status:"cancelled"}),f())},h=e=>{r.push("/admin/orders/edit/".concat(e))},x=e=>{let t=e instanceof u.EK?e.toDate():new Date(e);return t instanceof Date&&!isNaN(t.getTime())?t.toLocaleDateString():"Fecha inv\xe1lida"};return(0,n.jsxs)("div",{className:"container mx-auto py-8",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Todos los Pedidos"}),(0,n.jsxs)(i.Zb,{children:[(0,n.jsxs)(i.Ol,{children:[(0,n.jsx)(i.ll,{children:"Lista de Pedidos"}),(0,n.jsx)(i.SZ,{children:"Gestiona los pedidos aqu\xed."})]}),(0,n.jsx)(i.aY,{children:(0,n.jsx)(c.x,{className:"h-[600px]",children:(0,n.jsxs)(d.iA,{children:[(0,n.jsx)(d.xD,{children:(0,n.jsxs)(d.SC,{children:[(0,n.jsx)(d.ss,{children:"ID"}),(0,n.jsx)(d.ss,{children:"Cliente"}),(0,n.jsx)(d.ss,{children:"Total"}),(0,n.jsx)(d.ss,{children:"Fecha"}),(0,n.jsx)(d.ss,{children:"Estado"}),(0,n.jsx)(d.ss,{children:"Acciones"})]})}),(0,n.jsx)(d.RM,{children:e.map(e=>(0,n.jsxs)(d.SC,{children:[(0,n.jsx)(d.pj,{children:e.id}),(0,n.jsx)(d.pj,{children:e.customerName}),(0,n.jsxs)(d.pj,{children:["$",isNaN(Number(e.total))?"0.00":Number(e.total).toFixed(2)]}),(0,n.jsx)(d.pj,{children:x(e.createdAt)}),(0,n.jsx)(d.pj,{children:e.status}),(0,n.jsx)(d.pj,{children:(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)(l.z,{size:"sm",onClick:()=>h(e.id),children:"Editar"}),(0,n.jsx)(l.z,{size:"sm",variant:"outline",onClick:()=>m(e.id),children:"Completar"}),(0,n.jsx)(l.z,{size:"sm",variant:"destructive",onClick:()=>p(e.id),children:"Cancelar"})]})})]},e.id))})]})})})]})]})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(7437),a=r(2265),s=r(7495),o=r(535),i=r(4508);let l=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,i.cn)(l({variant:a,size:o,className:r})),ref:t,...d})});c.displayName="Button"},6070:function(e,t,r){"use strict";r.d(t,{Ol:function(){return i},SZ:function(){return c},Zb:function(){return o},aY:function(){return d},eW:function(){return u},ll:function(){return l}});var n=r(7437),a=r(2265),s=r(4508);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});o.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});i.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},9378:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(7437),a=r(2265),s=r(1750),o=r(4508);let i=a.forwardRef((e,t)=>{let{className:r,children:a,...i}=e;return(0,n.jsxs)(s.fC,{ref:t,className:(0,o.cn)("relative overflow-hidden",r),...i,children:[(0,n.jsx)(s.l_,{className:"h-full w-full rounded-[inherit]",children:a}),(0,n.jsx)(l,{}),(0,n.jsx)(s.Ns,{})]})});i.displayName=s.fC.displayName;let l=a.forwardRef((e,t)=>{let{className:r,orientation:a="vertical",...i}=e;return(0,n.jsx)(s.gb,{ref:t,orientation:a,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...i,children:(0,n.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-border"})})});l.displayName=s.gb.displayName},3578:function(e,t,r){"use strict";r.d(t,{RM:function(){return l},SC:function(){return c},iA:function(){return o},pj:function(){return u},ss:function(){return d},xD:function(){return i}});var n=r(7437),a=r(2265),s=r(4508);let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{className:"relative w-full overflow-auto",children:(0,n.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...a})})});o.displayName="Table";let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...a})});i.displayName="TableHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...a})});l.displayName="TableBody",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...a})}).displayName="TableFooter";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...a})});c.displayName="TableRow";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("th",{ref:t,className:(0,s.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});d.displayName="TableHead";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("td",{ref:t,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",r),...a})});u.displayName="TableCell",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...a})}).displayName="TableCaption"},7293:function(e,t,r){"use strict";var n=r(738),a=r(5978);let s=(0,n.ZF)({apiKey:"AIzaSyBhQcOxpRa-KCMqsLBMA-cojXCeMKBY3BU",authDomain:"lodemoni-5d615.firebaseapp.com",projectId:"lodemoni-5d615",storageBucket:"lodemoni-5d615.appspot.com",messagingSenderId:"107003347477",appId:"1:107003347477:web:afe9207fe8825cebbfc41c",measurementId:"G-PF1YQ76NJ9"}),o=(0,a.ad)(s);t.Z=o},6285:function(e,t,r){"use strict";r.d(t,{AU:function(){return i},Cs:function(){return c},LV:function(){return o},co:function(){return l},dA:function(){return d}});var n=r(7293),a=r(5978);function s(e){return e instanceof a.EK?e.toDate():e}async function o(e){try{let t=new Date,r={...e,status:"pending",createdAt:t};return{id:(await (0,a.ET)((0,a.hJ)(n.Z,"orders"),{...r,createdAt:a.EK.fromDate(r.createdAt)})).id,...r}}catch(e){throw console.error("Error creating order:",e),Error("Could not create the order.")}}async function i(){try{let e=(0,a.hJ)(n.Z,"orders");return(await (0,a.PL)(e)).docs.map(e=>{let t=e.data();return{id:e.id,customerName:t.customerName,address:t.address,items:t.items,total:t.total,status:t.status,createdAt:s(t.createdAt)}})}catch(e){return console.error("Error fetching orders:",e),[]}}async function l(e){try{let t=(0,a.JU)(n.Z,"orders",e),r=await (0,a.QT)(t);if(r.exists()){let e=r.data();return{id:r.id,customerName:e.customerName,address:e.address,items:e.items,total:e.total,status:e.status,createdAt:s(e.createdAt)}}console.warn("Order with ID ".concat(e," not found."));return}catch(e){throw console.error("Error fetching order:",e),Error("Could not fetch the order.")}}async function c(e,t){try{if(t.status&&!["pending","completed","cancelled"].includes(t.status))throw Error("Invalid order status");let r=(0,a.JU)(n.Z,"orders",e),o={...t};t.createdAt instanceof Date&&(o.createdAt=a.EK.fromDate(t.createdAt)),await (0,a.r7)(r,o);let i=await (0,a.QT)(r);if(i.exists()){let e=i.data();return{id:i.id,customerName:e.customerName,address:e.address,items:e.items,total:e.total,status:e.status,createdAt:s(e.createdAt)}}console.warn("Order with ID ".concat(e," not found after update."));return}catch(e){throw console.error("Error updating order:",e),Error("Could not update the order.")}}async function d(e){try{let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),o=(0,a.hJ)(n.Z,"orders"),i=(0,a.IO)(o,(0,a.ar)("status","==","completed"),(0,a.ar)("createdAt",">=",a.EK.fromDate(t)),(0,a.ar)("createdAt","<",a.EK.fromDate(r)));return(await (0,a.PL)(i)).docs.map(e=>{let t=e.data();return{id:e.id,customerName:t.customerName,address:t.address,items:t.items,total:t.total,status:t.status,createdAt:s(t.createdAt)}})}catch(e){return console.error("Error fetching completed orders for the day:",e),[]}}},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(1994),a=r(3335);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},2484:function(e,t,r){"use strict";function n(e,[t,r]){return Math.min(r,Math.max(t,e))}r.d(t,{u:function(){return n}})},6741:function(e,t,r){"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{M:function(){return n}})},8575:function(e,t,r){"use strict";r.d(t,{F:function(){return a},e:function(){return s}});var n=r(2265);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(...e){return n.useCallback(a(...e),e)}},3966:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var n=r(2265),a=r(7437);function s(e,t=[]){let r=[],s=()=>{let t=r.map(e=>n.createContext(e));return function(r){let a=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return s.scopeName=e,[function(t,s){let o=n.createContext(s),i=r.length;r=[...r,s];let l=t=>{let{scope:r,children:s,...l}=t,c=r?.[e]?.[i]||o,d=n.useMemo(()=>l,Object.values(l));return(0,a.jsx)(c.Provider,{value:d,children:s})};return l.displayName=t+"Provider",[l,function(r,a){let l=a?.[e]?.[i]||o,c=n.useContext(l);if(c)return c;if(void 0!==s)return s;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e)[`__scope${n}`];return{...t,...a}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}(s,...t)]}},9114:function(e,t,r){"use strict";r.d(t,{gm:function(){return s}});var n=r(2265);r(7437);var a=n.createContext(void 0);function s(e){let t=n.useContext(a);return e||t||"ltr"}},6840:function(e,t,r){"use strict";r.d(t,{WV:function(){return i},jH:function(){return l}});var n=r(2265),a=r(4887),s=r(7495),o=r(7437),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,i=n?s.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(i,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}},7495:function(e,t,r){"use strict";r.d(t,{g7:function(){return o}});var n=r(2265),a=r(8575),s=r(7437),o=n.forwardRef((e,t)=>{let{children:r,...a}=e,o=n.Children.toArray(r),l=o.find(c);if(l){let e=l.props.children,r=o.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,s.jsx)(i,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,s.jsx)(i,{...a,ref:t,children:r})});o.displayName="Slot";var i=n.forwardRef((e,t)=>{let{children:r,...s}=e;if(n.isValidElement(r)){let e,o;let i=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...e)=>{s(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...s}:"className"===n&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}(s,r.props),ref:t?(0,a.F)(t,i):i})}return n.Children.count(r)>1?n.Children.only(null):null});i.displayName="SlotClone";var l=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===l}},6606:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(2265);function a(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},1188:function(e,t,r){"use strict";r.d(t,{b:function(){return a}});var n=r(2265),a=globalThis?.document?n.useLayoutEffect:()=>{}},535:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(1994);let a=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=n.W,o=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:i}=t,l=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],n=null==i?void 0:i[e];if(null===t)return null;let s=a(t)||a(n);return o[e][s]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,l,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...i,...c}[t]):({...i,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[358,448,137,722,971,117,744],function(){return e(e.s=3451)}),_N_E=e.O()}]);