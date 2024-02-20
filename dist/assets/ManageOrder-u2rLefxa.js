import{c as Z,q as X,o as Y,w as ee,g as re,d as te,r as p,W as _,C as N,_ as f,y as se,$ as ae,Z as c,j as e,v as P,a0 as oe,u as ne,a as y,L as T,b as ce,a1 as le,E as de,e as ie,h as ue,f as fe}from"./index-DyzY6ZJS.js";import{f as pe,o as ge,a as E,u as me}from"./orderStatusToString-67PJrJc5.js";import{M as j}from"./Modal-1ivH7i0n.js";import{M as xe}from"./MyPageLayout-GYR7_71g.js";import{$ as S,a as $e,b as ve}from"./index-5eAsy_8A.js";import{$ as be}from"./index-N5PwOM_v.js";import{S as x}from"./order-zBTb25aT.js";import{M as he}from"./MetaTag-qCC6KGd0.js";async function je(r){console.log("sellerId",r);const s=Z(te,"orders"),n=X(s,ee("sellerId","==",r),Y("createdAt","desc"));return(await re(n)).docs.map(o=>pe(o.data()))}const M=p.forwardRef((r,s)=>{const{pressed:n,defaultPressed:a=!1,onPressedChange:o,...t}=r,[l=!1,d]=_({prop:n,onChange:o,defaultProp:a});return p.createElement(N.button,f({type:"button","aria-pressed":l,"data-state":l?"on":"off","data-disabled":r.disabled?"":void 0},t,{ref:s,onClick:se(r.onClick,()=>{r.disabled||d(!l)})}))}),V=M,C="ToggleGroup",[q,De]=ae(C,[S]),k=S(),ye=c.forwardRef((r,s)=>{const{type:n,...a}=r;if(n==="single"){const o=a;return c.createElement(Ce,f({},o,{ref:s}))}if(n==="multiple"){const o=a;return c.createElement(Ne,f({},o,{ref:s}))}throw new Error(`Missing prop \`type\` expected on \`${C}\``)}),[F,R]=q(C),Ce=c.forwardRef((r,s)=>{const{value:n,defaultValue:a,onValueChange:o=()=>{},...t}=r,[l,d]=_({prop:n,defaultProp:a,onChange:o});return c.createElement(F,{scope:r.__scopeToggleGroup,type:"single",value:l?[l]:[],onItemActivate:d,onItemDeactivate:c.useCallback(()=>d(""),[d])},c.createElement(D,f({},t,{ref:s})))}),Ne=c.forwardRef((r,s)=>{const{value:n,defaultValue:a,onValueChange:o=()=>{},...t}=r,[l=[],d]=_({prop:n,defaultProp:a,onChange:o}),i=c.useCallback(u=>d((g=[])=>[...g,u]),[d]),v=c.useCallback(u=>d((g=[])=>g.filter(h=>h!==u)),[d]);return c.createElement(F,{scope:r.__scopeToggleGroup,type:"multiple",value:l,onItemActivate:i,onItemDeactivate:v},c.createElement(D,f({},t,{ref:s})))}),[Ge,_e]=q(C),D=c.forwardRef((r,s)=>{const{__scopeToggleGroup:n,disabled:a=!1,rovingFocus:o=!0,orientation:t,dir:l,loop:d=!0,...i}=r,v=k(n),u=be(l),g={role:"group",dir:u,...i};return c.createElement(Ge,{scope:n,rovingFocus:o,disabled:a},o?c.createElement($e,f({asChild:!0},v,{orientation:t,dir:u,loop:d}),c.createElement(N.div,f({},g,{ref:s}))):c.createElement(N.div,f({},g,{ref:s})))}),G="ToggleGroupItem",Pe=c.forwardRef((r,s)=>{const n=R(G,r.__scopeToggleGroup),a=_e(G,r.__scopeToggleGroup),o=k(r.__scopeToggleGroup),t=n.value.includes(r.value),l=a.disabled||r.disabled,d={...r,pressed:t,disabled:l},i=c.useRef(null);return a.rovingFocus?c.createElement(ve,f({asChild:!0},o,{focusable:!l,active:t,ref:i}),c.createElement(I,f({},d,{ref:s}))):c.createElement(I,f({},d,{ref:s}))}),I=c.forwardRef((r,s)=>{const{__scopeToggleGroup:n,value:a,...o}=r,t=R(G,n),l={role:"radio","aria-checked":r.pressed,"aria-pressed":void 0},d=t.type==="single"?l:void 0;return c.createElement(M,f({},d,o,{ref:s,onPressedChange:i=>{i?t.onItemActivate(a):t.onItemDeactivate(a)}}))}),O=ye,A=Pe,L=oe("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),Te=p.forwardRef(({className:r,variant:s,size:n,...a},o)=>e.jsx(V,{ref:o,className:P(L({variant:s,size:n,className:r})),...a}));Te.displayName=V.displayName;const B=p.createContext({size:"default",variant:"default"}),z=p.forwardRef(({className:r,variant:s,size:n,children:a,...o},t)=>e.jsx(O,{ref:t,className:P("flex items-center justify-center gap-1",r),...o,children:e.jsx(B.Provider,{value:{variant:s,size:n},children:a})}));z.displayName=O.displayName;const $=p.forwardRef(({className:r,children:s,variant:n,size:a,...o},t)=>{const l=p.useContext(B);return e.jsx(A,{ref:t,className:P(L({variant:l.variant||n,size:l.size||a}),r),...o,children:s})});$.displayName=A.displayName;const we=({filename:r})=>{const{data:s,isLoading:n,isError:a,error:o}=y({queryKey:["productImage",r],queryFn:({queryKey:t})=>ie(t[1]),staleTime:1/0});return n?e.jsx(T,{}):a?(console.log(o),e.jsx("div",{className:"w-full h-full bg-gray-100"})):e.jsx("img",{src:s,className:"w-full h-full object-cover"})},Ee=({orderId:r,status:s,productId:n,quantity:a,buyerId:o,date:t})=>{const[l,d]=p.useState(!1),[i,v]=p.useState(s),{data:u,isLoading:g,isError:h,error:K}=y({queryKey:["product",n],queryFn:({queryKey:m})=>ue(m[1])}),{data:b,isError:U,error:Q}=y({queryKey:["user",o],queryFn:({queryKey:m})=>fe(m[1])}),H=ce(),J=()=>{w()},w=()=>{d(!l)};if(g)return e.jsx(T,{});if(!u||h)return console.log("query - product",K),e.jsx("p",{children:"주문 상품을 불러오지 못했습니다."});U&&console.log("query - buyer",Q);const W=async()=>{console.log(i),window.confirm("주문 상태를 정말 변경하시겠습니까?")&&(await me(r,i),window.alert("주문 상태를 변경했습니다."),H("/mypage/manage-order"))};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center text-sm p-4 cursor-pointer",onClick:J,children:[e.jsx("div",{className:"min-w-max",children:e.jsx("p",{children:ge(s,!0)})}),e.jsxs("div",{className:"flex items-center mx-4 w-full",children:[e.jsx("div",{className:"w-24 h-24 min-w-24 mr-4",children:e.jsx(we,{filename:u.productImage[0]})}),e.jsxs("div",{children:[e.jsx("p",{children:u.productName}),e.jsx("p",{children:`수량: ${a}개`})]})]}),e.jsx("div",{className:"ml-4",children:b&&e.jsx("p",{children:b.nickname})}),e.jsx("div",{className:"ml-4",children:e.jsx("p",{children:E(t.toDate())})})]}),l&&u&&!h&&e.jsx("div",{className:"ModalOutside",children:e.jsxs(j,{children:[e.jsx(j.Header,{title:"주문 상태 변경",children:e.jsx(j.Close,{onClose:w,children:e.jsx(le,{})})}),e.jsxs(j.Body,{children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"mb-2",children:"다음 주문 건의 주문 상태를 변경해주세요."}),e.jsx("p",{children:`주문일: ${E(t.toDate())}`}),e.jsx("p",{children:`구매자: ${b==null?void 0:b.nickname}`}),e.jsx("p",{children:`상품명: ${u.productName}`})]}),e.jsxs(z,{className:"my-8",variant:"outline",type:"single",value:i,onValueChange:m=>v(x[m]),children:[e.jsx($,{value:x.order_completed,children:"구매 확인"}),e.jsx($,{value:x.waiting_deliver,children:"발송 대기"}),e.jsx($,{value:x.deliver_started,children:"발송 시작"}),e.jsx($,{value:x.deliver_completed,children:"판매 완료"}),e.jsx($,{value:x.order_canceled,children:"주문 취소"})]}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx(de,{disabled:!i,onClick:W,children:"등록"})})]})]})})]})},Oe=()=>{const r=ne(),{data:s,isLoading:n,isError:a,error:o}=y({queryKey:["orders",r.id],queryFn:({queryKey:t})=>je(t[1])});return a&&console.log(o),e.jsxs(e.Fragment,{children:[e.jsx(he,{}),e.jsxs(xe,{children:[e.jsx("h1",{className:"h1 mb-4",children:"판매 기록 관리"}),e.jsx("p",{children:"각 항목을 클릭하여 상태를 변경하세요."}),e.jsxs("div",{className:"mt-12",children:[e.jsxs("div",{className:"flex text-sm p-4 border-b border-black",children:[e.jsx("p",{className:"w-[5rem] text-center mr-4",children:"상태"}),e.jsx("p",{className:"w-full text-center",children:"상품"}),e.jsx("p",{className:"ml-4 min-w-max",children:"구매자"}),e.jsx("p",{className:"ml-4 w-[6rem] text-center",children:"주문일"})]}),n?e.jsx(T,{}):a?e.jsx("p",{children:"판매 기록을 불러오지 못했습니다."}):e.jsx("ul",{children:s.map((t,l)=>e.jsx("li",{className:"*:mt-4",children:e.jsx(Ee,{orderId:t.id,status:t.status,productId:t.productId,quantity:t.productQuantity,buyerId:t.buyerId,date:t.createdAt})},`order_${l}`))})]})]})]})};export{Oe as default};
