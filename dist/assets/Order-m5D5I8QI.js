import{R as q,j as e,L as Y,r as a,B as Z,t as D,d as ee,c as te,_ as M,u as re,a as se,D as oe,h as ae}from"./index-Mj_532zd.js";import{o as ne,s as w,i as ce,u as de,F as ie,a as g,b as y,c as P,d as v,I,e as L,t as le}from"./input-_HypHhDE.js";import{B as R}from"./button-wHDGyhm6.js";import ue from"./getImageUrl-_4LojNWQ.js";import{p as V}from"./priceToString-jyYOkqXM.js";import{u as me}from"./useQuery-xKBdAQzs.js";import{S as pe,a as fe,b as he,c as xe,d as k}from"./select-_34Eb54l.js";import{$ as be,_ as T,c as A}from"./utils-JMbXyAjn.js";import{$ as je,a as $e,c as F}from"./index-anneVPZw.js";import{$ as ge}from"./index-PLIQ2Tiz.js";import{$ as ye}from"./index-BYHx_PqW.js";import{$ as ve}from"./index-YCP61iY6.js";import{$ as B}from"./index-E40T28Bx.js";import{C as ke}from"./check-OZnlZ5Lw.js";import Ce from"./updateProduct-FBuk2Zgo.js";import{M as Ee}from"./MetaTag-CrOaKb5E.js";import{S as we}from"./order-zBTb25aT.js";import{v as Q}from"./v4-yQnnJER4.js";import{u as Ne}from"./useMutation-17wli7ZR.js";import"./utils-jGl1oAH7.js";import"./suspense-MS5c6pCA.js";import"./index-lCxvLQy8.js";import"./Combination-cVxYeD5X.js";import"./createLucideIcon-gcZbVoT_.js";const Se=q.memo(({filename:r})=>{const{data:c,isLoading:s,isError:n,error:l}=me({queryKey:["productImage",r],queryFn:({queryKey:o})=>ue(o[1]),staleTime:1/0});return s?e.jsx(Y,{}):n?(console.log(l),e.jsx("div",{className:"w-24 h-24 bg-gray-100"})):e.jsx("img",{src:c,className:"w-24 h-24 object-cover min-w-24",loading:"lazy"})}),_e=q.memo(({imageFilename:r,productName:c,quantity:s,price:n})=>e.jsxs("div",{className:"flex items-center text-sm",children:[e.jsx(Se,{filename:r}),e.jsxs("div",{className:"ml-4 w-full",children:[e.jsx("p",{className:"font-medium mb-2",children:c}),e.jsx("p",{className:"text-gray-500",children:`수량: ${s}개`})]}),e.jsx("p",{className:"min-w-max font-medium",children:V(n*s)})]})),H="Checkbox",[Pe,ft]=je(H),[Ie,Le]=Pe(H),Oe=a.forwardRef((r,c)=>{const{__scopeCheckbox:s,name:n,checked:l,defaultChecked:o,required:p,disabled:m,value:f="on",onCheckedChange:C,...N}=r,[u,E]=a.useState(null),S=be(c,d=>E(d)),j=a.useRef(!1),_=u?!!u.closest("form"):!0,[h=!1,$]=$e({prop:l,defaultProp:o,onChange:C}),O=a.useRef(h);return a.useEffect(()=>{const d=u==null?void 0:u.form;if(d){const x=()=>$(O.current);return d.addEventListener("reset",x),()=>d.removeEventListener("reset",x)}},[u,$]),a.createElement(Ie,{scope:s,state:h,disabled:m},a.createElement(B.button,T({type:"button",role:"checkbox","aria-checked":b(h)?"mixed":h,"aria-required":p,"data-state":z(h),"data-disabled":m?"":void 0,disabled:m,value:f},N,{ref:S,onKeyDown:F(r.onKeyDown,d=>{d.key==="Enter"&&d.preventDefault()}),onClick:F(r.onClick,d=>{$(x=>b(x)?!0:!x),_&&(j.current=d.isPropagationStopped(),j.current||d.stopPropagation())})})),_&&a.createElement(De,{control:u,bubbles:!j.current,name:n,value:f,checked:h,required:p,disabled:m,style:{transform:"translateX(-100%)"}}))}),Me="CheckboxIndicator",Te=a.forwardRef((r,c)=>{const{__scopeCheckbox:s,forceMount:n,...l}=r,o=Le(Me,s);return a.createElement(ve,{present:n||b(o.state)||o.state===!0},a.createElement(B.span,T({"data-state":z(o.state),"data-disabled":o.disabled?"":void 0},l,{ref:c,style:{pointerEvents:"none",...r.style}})))}),De=r=>{const{control:c,checked:s,bubbles:n=!0,...l}=r,o=a.useRef(null),p=ge(s),m=ye(c);return a.useEffect(()=>{const f=o.current,C=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(C,"checked").set;if(p!==s&&u){const E=new Event("click",{bubbles:n});f.indeterminate=b(s),u.call(f,b(s)?!1:s),f.dispatchEvent(E)}},[p,s,n]),a.createElement("input",T({type:"checkbox","aria-hidden":!0,defaultChecked:b(s)?!1:s},l,{tabIndex:-1,ref:o,style:{...r.style,...m,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function b(r){return r==="indeterminate"}function z(r){return b(r)?"indeterminate":r?"checked":"unchecked"}const X=Oe,Re=Te,K=a.forwardRef(({className:r,...c},s)=>e.jsx(X,{ref:s,className:A("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...c,children:e.jsx(Re,{className:A("flex items-center justify-center text-current"),children:e.jsx(ke,{className:"h-4 w-4"})})}));K.displayName=X.displayName;function Ae(r){const[c,s]=a.useState(!0),[n,l]=a.useState(null);return a.useEffect(()=>{let o=document.querySelector(`script[src="${r}"]`);o||(o=document.createElement("script"),o.src=r,o.async=!0);const p=()=>s(!1),m=f=>l(f.error);return o.addEventListener("load",p),o.addEventListener("error",m),document.body.appendChild(o),()=>{o==null||o.removeEventListener("load",p),o==null||o.removeEventListener("error",m)}},[r]),[c,n]}const Fe=(r,c)=>{const s={fields:{productQuantity:{integerValue:`${c}`},updatedAt:{timestampValue:`${new Date().toISOString()}`}}};fetch(`https://firestore.googleapis.com/v1/projects/hh-ecommerce/databases/(default)/documents/products/${r}?currentDocument.exists=true&updateMask.fieldPaths=productQuantity&updateMask.fieldPaths=updatedAt&key=[AIzaSyApV0aZSd9qJqxQ1XyGo8BPJ7u0xDWXHtg] HTTP/1.1`,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s),keepalive:!0})};async function qe(r,c,s,n){const l=Q();await Z(ee(te,"orders",l),{id:l,sellerId:r,buyerId:c,productId:s,productQuantity:n,status:we.order_completed,createdAt:D(),updatedAt:D()})}function Ve(){return Ne({mutationFn:async({items:r,userId:c})=>{r.forEach(async s=>{await qe(s.product.sellerId,c,s.product.id,s.quantity)})}})}const Be=a.lazy(()=>M(()=>import("./OrderAddressModal-Gb5pMGe0.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Qe=a.lazy(()=>M(()=>import("./index-Mj_532zd.js").then(r=>r.bt),__vite__mapDeps([1,2]))),ht=()=>{const r=re(),c=se(),n=oe().state.products,l=ae(),[o,p]=a.useState(!1),[m,f]=a.useState(""),[C,N]=Ae("https://cdn.iamport.kr/v1/iamport.js"),[u,E]=a.useState(!1),S=Ve();a.useEffect(()=>(_(n),window.addEventListener("unload",j),()=>{window.removeEventListener("unload",j)}),[n,u]);const j=a.useCallback(()=>{console.log("unload"),u||n.forEach(t=>{Fe(t.product.id,t.product.productQuantity)})},[n,u]),_=t=>{t.forEach(i=>{Ce(i.product.id,{productQuantity:i.product.productQuantity-i.quantity})})},h=a.useMemo(()=>{let t=0;for(const i of n)t+=i.product.productPrice*i.quantity;return t},[n]),$=()=>{p(!o)},O=ne({name:w().min(1,{message:"이름을 입력해주세요."}),address2:w(),phone1:w(),phone2:w().regex(/\d{3,4}/,{message:"숫자 3-4자리"}),phone3:w().regex(/\d{4}/,{message:"숫자 4자리"}),agreement:ce()}),d=de({resolver:le(O),defaultValues:{name:"",address2:"",phone1:"010",phone2:"",phone3:"",agreement:!1}});async function x(t){if(console.log("values",t),!t.agreement){window.alert("구매 진행에 대한 동의가 필요합니다.");return}if(!m){window.alert("주소를 입력해주세요.");return}if(N){window.alert("결제를 진행할 수 없습니다."),window.location.reload();return}const{default:i}=await M(()=>import("./iamport-qFxYf769.js"),__vite__mapDeps([]));i(Q(),h,t.name,t.phone1+t.phone2+t.phone3,m+t.address2?` ${t.address2}`:"",J)}const J=t=>{const{success:i,error_msg:U}=t;if(!i){window.alert(`결제 실패: ${U}`),c("/");return}E(!0),S.mutate({items:n,userId:r.id},{onError:W=>{console.log(W),window.alert("결제가 실패했습니다.")},onSettled:()=>{l({type:"EMPTY"}),c("/mypage/myorder")}})},G=t=>{let i=t.address;t.buildingName&&(i+=` (${t.buildingName})`),f(i)};return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{title:"주문하기 - XSO"}),e.jsxs("div",{className:"p-8 flex flex-col justify-center",id:"orderpage",children:[e.jsx("h1",{className:"h1 mb-8",children:"주문하기"}),e.jsx("div",{children:e.jsx(ie,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(x),children:[e.jsx(g,{control:d.control,name:"name",render:({field:t})=>e.jsxs(y,{children:[e.jsx(P,{children:"이름"}),e.jsx(v,{children:e.jsx(I,{...t})}),e.jsx(L,{})]})}),e.jsxs("div",{children:[e.jsx(P,{children:"주소"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-full h-10 bg-white rounded-md border px-3 py-2",children:e.jsx("p",{children:m})}),e.jsx(g,{control:d.control,name:"address2",render:({field:t})=>e.jsxs(y,{className:"mx-4 w-full",children:[e.jsx(v,{children:e.jsx(I,{...t,placeholder:"상세 주소"})}),e.jsx(L,{})]})}),e.jsx(R,{onClick:$,children:"주소 검색"})]})]}),e.jsxs("div",{children:[e.jsx(P,{children:"전화번호"}),e.jsxs("div",{className:"flex",children:[e.jsx(g,{control:d.control,name:"phone1",render:({field:t})=>e.jsx(y,{children:e.jsxs(pe,{...t,onValueChange:t.onChange,children:[e.jsx(v,{children:e.jsx(fe,{children:e.jsx(he,{})})}),e.jsxs(xe,{children:[e.jsx(k,{value:"010",children:"010"}),e.jsx(k,{value:"011",children:"011"}),e.jsx(k,{value:"016",children:"016"}),e.jsx(k,{value:"017",children:"017"}),e.jsx(k,{value:"018",children:"018"}),e.jsx(k,{value:"019",children:"019"})]})]})})}),e.jsx("p",{className:"p-2",children:"-"}),e.jsx(g,{control:d.control,name:"phone2",render:({field:t})=>e.jsxs(y,{children:[e.jsx(v,{children:e.jsx(I,{...t})}),e.jsx(L,{})]})}),e.jsx("p",{className:"p-2",children:"-"}),e.jsx(g,{control:d.control,name:"phone3",render:({field:t})=>e.jsxs(y,{children:[e.jsx(v,{children:e.jsx(I,{...t})}),e.jsx(L,{})]})})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("p",{className:"font-semibold",children:"주문 상품"}),e.jsx("div",{className:"my-4 border-y border-black py-4",children:e.jsx("ul",{children:n.map((t,i)=>e.jsx("li",{className:"OrderItem",children:e.jsx(_e,{imageFilename:t.product.productImage[0],productName:t.product.productName,quantity:t.quantity,price:t.product.productPrice})},`order_product_${i}`))})}),e.jsxs("div",{className:"flex font-semibold",children:[e.jsx("p",{className:"w-full",children:"결제 금액"}),e.jsx("p",{className:"min-w-max",children:V(h)})]})]}),e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx(g,{control:d.control,name:"agreement",render:({field:t})=>e.jsx(y,{children:e.jsx(v,{children:e.jsx(K,{checked:t.value,onCheckedChange:t.onChange})})})}),e.jsx(P,{className:"ml-4",children:"결제정보를 확인하였으며, 구매진행에 동의합니다."})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(R,{type:"submit",className:"px-8",disabled:!!C,children:"결제 진행"})})]})})}),o&&e.jsx("div",{className:"ModalOutside",children:e.jsx(Be,{toggle:$,onComplete:G})}),S.isLoading&&e.jsx("div",{className:"w-screen h-screen fixed top-0 left-0 flex justify-center items-center",children:e.jsx(Qe,{})})]})]})};export{ht as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OrderAddressModal-Gb5pMGe0.js","assets/index-Mj_532zd.js","assets/index-2jMTQVvy.css","assets/index-hDi5CpT5.js","assets/iconBase-CyTb4QjU.js","assets/Modal-zMw78tYw.js","assets/utils-JMbXyAjn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
