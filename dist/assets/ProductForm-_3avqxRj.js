import{l as ge,t as ve,n as Se,r as o,j as l,v as J,G as xe,$ as $e,_ as g,x as U,y as C,z as _,A as E,C as I,D as we,e as Ee,b as Ce,E as ee}from"./index-pc71vIdO.js";import{v as ye,$ as Pe,S as Te,a as Re,b as je,c as Ae,d as re}from"./select-jrUSAbtJ.js";import{I as X,o as _e,s as G,a as Le,b as Ne,n as te,u as De,t as Ie,F as ze,c as P,d as T,e as R,f as D,g as F,h as j}from"./input-5GqNJ9oq.js";import{$ as We}from"./index-94bxALhb.js";async function dr(e){const t=ye(),r=ge(Se,`images/${t}`);return await ve(r,e).catch(a=>{throw a}),t}const ne=o.forwardRef(({className:e,...t},r)=>l.jsx("textarea",{className:J("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));ne.displayName="Textarea";function Me(e){return xe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"},child:[]}]})(e)}function Oe(e,t){return o.useReducer((r,a)=>{const n=t[r][a];return n??r},e)}const le="ScrollArea",[ce,ur]=$e(le),[He,S]=ce(le),Fe=o.forwardRef((e,t)=>{const{__scopeScrollArea:r,type:a="hover",dir:n,scrollHideDelay:s=600,...d}=e,[c,i]=o.useState(null),[h,u]=o.useState(null),[b,f]=o.useState(null),[m,v]=o.useState(null),[L,q]=o.useState(null),[w,z]=o.useState(0),[V,W]=o.useState(0),[M,N]=o.useState(!1),[O,H]=o.useState(!1),p=_(t,y=>i(y)),x=We(n);return o.createElement(He,{scope:r,type:a,dir:x,scrollHideDelay:s,scrollArea:c,viewport:h,onViewportChange:u,content:b,onContentChange:f,scrollbarX:m,onScrollbarXChange:v,scrollbarXEnabled:M,onScrollbarXEnabledChange:N,scrollbarY:L,onScrollbarYChange:q,scrollbarYEnabled:O,onScrollbarYEnabledChange:H,onCornerWidthChange:z,onCornerHeightChange:W},o.createElement(I.div,g({dir:x},d,{ref:p,style:{position:"relative","--radix-scroll-area-corner-width":w+"px","--radix-scroll-area-corner-height":V+"px",...e.style}})))}),Xe="ScrollAreaViewport",Ye=o.forwardRef((e,t)=>{const{__scopeScrollArea:r,children:a,...n}=e,s=S(Xe,r),d=o.useRef(null),c=_(t,d,s.onViewportChange);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(I.div,g({"data-radix-scroll-area-viewport":""},n,{ref:c,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),o.createElement("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},a)))}),$="ScrollAreaScrollbar",ae=o.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=S($,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:d}=n,c=e.orientation==="horizontal";return o.useEffect(()=>(c?s(!0):d(!0),()=>{c?s(!1):d(!1)}),[c,s,d]),n.type==="hover"?o.createElement(Ue,g({},a,{ref:t,forceMount:r})):n.type==="scroll"?o.createElement(ke,g({},a,{ref:t,forceMount:r})):n.type==="auto"?o.createElement(se,g({},a,{ref:t,forceMount:r})):n.type==="always"?o.createElement(Q,g({},a,{ref:t})):null}),Ue=o.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=S($,e.__scopeScrollArea),[s,d]=o.useState(!1);return o.useEffect(()=>{const c=n.scrollArea;let i=0;if(c){const h=()=>{window.clearTimeout(i),d(!0)},u=()=>{i=window.setTimeout(()=>d(!1),n.scrollHideDelay)};return c.addEventListener("pointerenter",h),c.addEventListener("pointerleave",u),()=>{window.clearTimeout(i),c.removeEventListener("pointerenter",h),c.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),o.createElement(U,{present:r||s},o.createElement(se,g({"data-state":s?"visible":"hidden"},a,{ref:t})))}),ke=o.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=S($,e.__scopeScrollArea),s=e.orientation==="horizontal",d=B(()=>i("SCROLL_END"),100),[c,i]=Oe("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return o.useEffect(()=>{if(c==="idle"){const h=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[c,n.scrollHideDelay,i]),o.useEffect(()=>{const h=n.viewport,u=s?"scrollLeft":"scrollTop";if(h){let b=h[u];const f=()=>{const m=h[u];b!==m&&(i("SCROLL"),d()),b=m};return h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[n.viewport,s,i,d]),o.createElement(U,{present:r||c!=="hidden"},o.createElement(Q,g({"data-state":c==="hidden"?"hidden":"visible"},a,{ref:t,onPointerEnter:C(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:C(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),se=o.forwardRef((e,t)=>{const r=S($,e.__scopeScrollArea),{forceMount:a,...n}=e,[s,d]=o.useState(!1),c=e.orientation==="horizontal",i=B(()=>{if(r.viewport){const h=r.viewport.offsetWidth<r.viewport.scrollWidth,u=r.viewport.offsetHeight<r.viewport.scrollHeight;d(c?h:u)}},10);return A(r.viewport,i),A(r.content,i),o.createElement(U,{present:a||s},o.createElement(Q,g({"data-state":s?"visible":"hidden"},n,{ref:t})))}),Q=o.forwardRef((e,t)=>{const{orientation:r="vertical",...a}=e,n=S($,e.__scopeScrollArea),s=o.useRef(null),d=o.useRef(0),[c,i]=o.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=he(c.viewport,c.content),u={...a,sizes:c,onSizesChange:i,hasThumb:h>0&&h<1,onThumbChange:f=>s.current=f,onThumbPointerUp:()=>d.current=0,onThumbPointerDown:f=>d.current=f};function b(f,m){return Ze(f,d.current,c,m)}return r==="horizontal"?o.createElement(Be,g({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&s.current){const f=n.viewport.scrollLeft,m=oe(f,c,n.dir);s.current.style.transform=`translate3d(${m}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=b(f,n.dir))}})):r==="vertical"?o.createElement(qe,g({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&s.current){const f=n.viewport.scrollTop,m=oe(f,c);s.current.style.transform=`translate3d(0, ${m}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=b(f))}})):null}),Be=o.forwardRef((e,t)=>{const{sizes:r,onSizesChange:a,...n}=e,s=S($,e.__scopeScrollArea),[d,c]=o.useState(),i=o.useRef(null),h=_(t,i,s.onScrollbarXChange);return o.useEffect(()=>{i.current&&c(getComputedStyle(i.current))},[i]),o.createElement(de,g({"data-orientation":"horizontal"},n,{ref:h,sizes:r,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":k(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,b)=>{if(s.viewport){const f=s.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),be(f,b)&&u.preventDefault()}},onResize:()=>{i.current&&s.viewport&&d&&a({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:Y(d.paddingLeft),paddingEnd:Y(d.paddingRight)}})}}))}),qe=o.forwardRef((e,t)=>{const{sizes:r,onSizesChange:a,...n}=e,s=S($,e.__scopeScrollArea),[d,c]=o.useState(),i=o.useRef(null),h=_(t,i,s.onScrollbarYChange);return o.useEffect(()=>{i.current&&c(getComputedStyle(i.current))},[i]),o.createElement(de,g({"data-orientation":"vertical"},n,{ref:h,sizes:r,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":k(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,b)=>{if(s.viewport){const f=s.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),be(f,b)&&u.preventDefault()}},onResize:()=>{i.current&&s.viewport&&d&&a({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:Y(d.paddingTop),paddingEnd:Y(d.paddingBottom)}})}}))}),[Ve,ie]=ce($),de=o.forwardRef((e,t)=>{const{__scopeScrollArea:r,sizes:a,hasThumb:n,onThumbChange:s,onThumbPointerUp:d,onThumbPointerDown:c,onThumbPositionChange:i,onDragScroll:h,onWheelScroll:u,onResize:b,...f}=e,m=S($,r),[v,L]=o.useState(null),q=_(t,p=>L(p)),w=o.useRef(null),z=o.useRef(""),V=m.viewport,W=a.content-a.viewport,M=E(u),N=E(i),O=B(b,10);function H(p){if(w.current){const x=p.clientX-w.current.left,y=p.clientY-w.current.top;h({x,y})}}return o.useEffect(()=>{const p=x=>{const y=x.target;(v==null?void 0:v.contains(y))&&M(x,W)};return document.addEventListener("wheel",p,{passive:!1}),()=>document.removeEventListener("wheel",p,{passive:!1})},[V,v,W,M]),o.useEffect(N,[a,N]),A(v,O),A(m.content,O),o.createElement(Ve,{scope:r,scrollbar:v,hasThumb:n,onThumbChange:E(s),onThumbPointerUp:E(d),onThumbPositionChange:N,onThumbPointerDown:E(c)},o.createElement(I.div,g({},f,{ref:q,style:{position:"absolute",...f.style},onPointerDown:C(e.onPointerDown,p=>{p.button===0&&(p.target.setPointerCapture(p.pointerId),w.current=v.getBoundingClientRect(),z.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",m.viewport&&(m.viewport.style.scrollBehavior="auto"),H(p))}),onPointerMove:C(e.onPointerMove,H),onPointerUp:C(e.onPointerUp,p=>{const x=p.target;x.hasPointerCapture(p.pointerId)&&x.releasePointerCapture(p.pointerId),document.body.style.webkitUserSelect=z.current,m.viewport&&(m.viewport.style.scrollBehavior=""),w.current=null})})))}),K="ScrollAreaThumb",Ge=o.forwardRef((e,t)=>{const{forceMount:r,...a}=e,n=ie(K,e.__scopeScrollArea);return o.createElement(U,{present:r||n.hasThumb},o.createElement(Ke,g({ref:t},a)))}),Ke=o.forwardRef((e,t)=>{const{__scopeScrollArea:r,style:a,...n}=e,s=S(K,r),d=ie(K,r),{onThumbPositionChange:c}=d,i=_(t,b=>d.onThumbChange(b)),h=o.useRef(),u=B(()=>{h.current&&(h.current(),h.current=void 0)},100);return o.useEffect(()=>{const b=s.viewport;if(b){const f=()=>{if(u(),!h.current){const m=er(b,c);h.current=m,c()}};return c(),b.addEventListener("scroll",f),()=>b.removeEventListener("scroll",f)}},[s.viewport,u,c]),o.createElement(I.div,g({"data-state":d.hasThumb?"visible":"hidden"},n,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:C(e.onPointerDownCapture,b=>{const m=b.target.getBoundingClientRect(),v=b.clientX-m.left,L=b.clientY-m.top;d.onThumbPointerDown({x:v,y:L})}),onPointerUp:C(e.onPointerUp,d.onThumbPointerUp)}))}),ue="ScrollAreaCorner",Je=o.forwardRef((e,t)=>{const r=S(ue,e.__scopeScrollArea),a=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&a?o.createElement(Qe,g({},e,{ref:t})):null}),Qe=o.forwardRef((e,t)=>{const{__scopeScrollArea:r,...a}=e,n=S(ue,r),[s,d]=o.useState(0),[c,i]=o.useState(0),h=!!(s&&c);return A(n.scrollbarX,()=>{var u;const b=((u=n.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;n.onCornerHeightChange(b),i(b)}),A(n.scrollbarY,()=>{var u;const b=((u=n.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;n.onCornerWidthChange(b),d(b)}),h?o.createElement(I.div,g({},a,{ref:t,style:{width:s,height:c,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function Y(e){return e?parseInt(e,10):0}function he(e,t){const r=e/t;return isNaN(r)?0:r}function k(e){const t=he(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-r)*t;return Math.max(a,18)}function Ze(e,t,r,a="ltr"){const n=k(r),s=n/2,d=t||s,c=n-d,i=r.scrollbar.paddingStart+d,h=r.scrollbar.size-r.scrollbar.paddingEnd-c,u=r.content-r.viewport,b=a==="ltr"?[0,u]:[u*-1,0];return fe([i,h],b)(e)}function oe(e,t,r="ltr"){const a=k(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,s=t.scrollbar.size-n,d=t.content-t.viewport,c=s-a,i=r==="ltr"?[0,d]:[d*-1,0],h=Pe(e,i);return fe([0,d],[0,c])(h)}function fe(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(r-e[0])}}function be(e,t){return e>0&&e<t}const er=(e,t=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},a=0;return function n(){const s={left:e.scrollLeft,top:e.scrollTop},d=r.left!==s.left,c=r.top!==s.top;(d||c)&&t(),r=s,a=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(a)};function B(e,t){const r=E(e),a=o.useRef(0);return o.useEffect(()=>()=>window.clearTimeout(a.current),[]),o.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(r,t)},[r,t])}function A(e,t){const r=E(t);we(()=>{let a=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(a),n.unobserve(e)}}},[e,r])}const me=Fe,rr=Ye,tr=Je,pe=o.forwardRef(({className:e,children:t,...r},a)=>l.jsxs(me,{ref:a,className:J("relative overflow-hidden",e),...r,children:[l.jsx(rr,{className:"h-full w-full rounded-[inherit]",children:t}),l.jsx(Z,{}),l.jsx(tr,{})]}));pe.displayName=me.displayName;const Z=o.forwardRef(({className:e,orientation:t="vertical",...r},a)=>l.jsx(ae,{ref:a,orientation:t,className:J("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:l.jsx(Ge,{className:"relative flex-1 rounded-full bg-border"})}));Z.displayName=ae.displayName;const or=({src:e,onClickDeleteBtn:t})=>o.useMemo(()=>{const r=()=>{console.log("삭제 버튼 클릭"),t()};return l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:e,className:"w-28 h-28 bg-slate-200 object-cover",alt:"Fail"}),l.jsx("button",{onClick:r,className:"absolute top-0 right-0 z-20",children:l.jsx(Me,{})})]})},[e,t]),nr=({defaultValues:e,onChange:t})=>{const[r,a]=o.useState([]);o.useEffect(()=>{console.log("images",r),t(r)},[r]);const n=i=>{if(i.target.files){const h=s(i.target.files);a([...r,...h])}};function s(i){const h=[];for(const u of i){const b={isOriginal:!1,url:URL.createObjectURL(u),file:u};h.push(b)}return h}function d(i){const h=r.filter(u=>u.url!=i);a(h)}async function c(i){const h=[];for(const u of i){const b=await Ee(u),f={isOriginal:!0,filename:u,url:b};h.push(f)}return h}return o.useEffect(()=>{e&&c(e).then(i=>a(i))},[e]),l.jsxs("div",{className:"",children:[l.jsx(X,{id:"picture",type:"file",accept:"image/*",multiple:!0,onChange:n}),l.jsxs(pe,{className:"w-full",children:[r&&l.jsx("ul",{className:"flex border-spacing-2 border rounded mt-2",children:r.map((i,h)=>l.jsx("li",{className:"m-1 shrink-0 overflow-hidden",children:l.jsx(or,{src:i.url,onClickDeleteBtn:()=>d(i.url)})},`photo(${h})`))}),l.jsx(Z,{orientation:"horizontal",className:"bg-gray-200"})]})]})},hr=({onSubmit:e,defaultValues:t})=>{const[r,a]=o.useState(!1),n=Ce(),s=_e({name:G().min(1,{message:"상품명 입력은 필수입니다."}).max(50,{message:"50자 이내로 작성해주세요."}),description:G().min(1,{message:"상품명 입력은 필수입니다."}).max(500,{message:"500자 이내로 작성해주세요."}),image:Le(Ne()).min(1,{message:"상품 사진은 최소 한 장 추가해주세요."}),category:G(),price:te().min(1),quantity:te().min(1)}),d=De({resolver:Ie(s),defaultValues:t?{name:t.name,description:t.description,category:t.category,price:t.price,quantity:t.quantity}:{name:"",description:"",category:"Women",price:100,quantity:10}});return l.jsx(ze,{...d,children:l.jsxs("form",{onSubmit:d.handleSubmit(r?e:()=>{}),className:"space-y-8",children:[l.jsx(P,{control:d.control,name:"name",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"상품명"}),l.jsx(D,{children:l.jsx(X,{placeholder:"상품명을 입력하세요.",...c})}),l.jsx(F,{children:"최대 50자"}),l.jsx(j,{})]})}),l.jsx(P,{control:d.control,name:"description",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"상품 설명"}),l.jsx(D,{children:l.jsx(ne,{placeholder:"상품 설명을 작성해주세요.",className:"resize-none",...c})}),l.jsx(F,{children:"최대 500자"}),l.jsx(j,{})]})}),l.jsx(P,{control:d.control,name:"image",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"상품 사진"}),l.jsx(nr,{...c,defaultValues:t!=null&&t.image?t.image:void 0,onChange:i=>c.onChange(i)}),l.jsx(F,{children:"최대 10장"}),l.jsx(j,{})]})}),l.jsx(P,{control:d.control,name:"category",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"카테고리"}),l.jsxs(Te,{...c,onValueChange:c.onChange,defaultValue:c.value,children:[l.jsx(D,{children:l.jsx(Re,{children:l.jsx(je,{placeholder:"상품의 카테고리를 선택하세요."})})}),l.jsxs(Ae,{children:[l.jsx(re,{value:"Men",children:"Men"}),l.jsx(re,{value:"Women",children:"Women"})]})]}),l.jsx(j,{})]})}),l.jsx(P,{control:d.control,name:"price",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"가격"}),l.jsx(D,{children:l.jsx(X,{type:"number",...c,placeholder:"상품의 가격을 입력하세요.",onChange:i=>c.onChange(Number.parseInt(i.target.value))})}),l.jsx(F,{children:"In KRW"}),l.jsx(j,{})]})}),l.jsx(P,{control:d.control,name:"quantity",render:({field:c})=>l.jsxs(T,{children:[l.jsx(R,{children:"수량"}),l.jsx(D,{children:l.jsx(X,{type:"number",placeholder:"상품의 수량을 입력하세요.",...c,onChange:i=>c.onChange(Number.parseInt(i.target.value))})}),l.jsx(j,{})]})}),l.jsxs("div",{className:"flex justify-center",children:[l.jsx(ee,{variant:"secondary",className:"w-40 mr-3",onClick:()=>n("/mypage"),children:"취소"}),l.jsx(ee,{type:"submit",className:"w-40",onClick:()=>a(!0),children:"등록"})]})]})})};export{hr as P,dr as u};