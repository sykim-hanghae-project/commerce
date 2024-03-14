import{r as _,_ as d,u as q,b as O,c as R,g as f,a as S,j as r}from"./index-Vq1JXboX.js";import{M as V}from"./MyPageLayout-MjCD9FnJ.js";import{P as v}from"./ProductForm-g50IKf7A.js";import{M as A}from"./MetaTag-ZlBfLCmT.js";import{u as C}from"./useQuery-bFcdZXqQ.js";import"./input--lQax9jc.js";import"./utils-Anq8py01.js";import"./index-wocOw3ZL.js";import"./button-DbWM39RQ.js";import"./select-HplpV_xZ.js";import"./index-mOhbM-ib.js";import"./index-9gxzcVvN.js";import"./Combination-p9BSy9O-.js";import"./index-UVn-uUOv.js";import"./index-wOepbJQq.js";import"./index-mSmIdT57.js";import"./createLucideIcon-teTjWQfU.js";import"./iconBase-djffxSNR.js";import"./index-iK2Kvbv4.js";import"./useBaseQuery-zMsKL3zC.js";import"./utils-bemYdGE3.js";import"./suspense-9ho99RMx.js";const y=_.lazy(()=>d(()=>import("./index-Vq1JXboX.js").then(m=>m.bt),__vite__mapDeps([0,1]))),st=()=>{const m=q(),[h]=O(),[P,w]=_.useState(!1),x=R(),{data:e,isLoading:E,isError:b,error:j}=C({queryKey:["prevProduct",h.get("product")],queryFn:({queryKey:t})=>f(t[1]),staleTime:1/0}),I=S();if(E)return r.jsx(y,{});if(b)return console.log(j),r.jsx("p",{children:"오류가 발생했습니다."});async function L(t){console.log(t),w(!0);try{const{default:i}=await d(()=>import("./uploadImage-W4NcJjVc.js"),__vite__mapDeps([2,0,1,3])),{default:u}=await d(()=>import("./updateProduct-Zp09cJHA.js"),__vite__mapDeps([4,0,1])),{default:D}=await d(()=>import("./deleteProductImage-lQ2FOteI.js"),__vite__mapDeps([5,0,1]));let s={productName:t.name,productDescription:t.description,productCategory:t.category,productPrice:t.price,productQuantity:t.quantity};if(t.image&&T(e.productImage,t.image)){let o=[];for(let a=0;a<t.image.length;a++){const c=t.image[a];if(c.isOriginal){const g=await(await fetch(c.url,{method:"GET"})).blob(),N=new File([g],`original_img_${a}`,{type:g.type});o=[...o,N]}else o=[...o,c.file]}console.log("files",o),await D(m.id,e.id);let n=[],l=[];for(const a of o){const{orgUrl:c,thumbnailUrl:p}=await i(a,m.id,e.id);n=[...n,c],l=[...l,p]}s={...s,productImage:n,productThumbnail:l}}if(t.name!==e.productName){const{default:o}=await d(()=>import("./generateKeyword-fr217V55.js"),__vite__mapDeps([])),n=o(t.name);s={...s,keyword:n}}await u(e.id,s),window.alert("상품을 성공적으로 수정하였습니다."),x.fetchQuery({queryKey:["prevProduct",e.id],queryFn:({queryKey:o})=>f(o[1])})}catch(i){console.log(i),window.alert("상품 수정에 실패하였습니다.")}finally{I("/mypage")}}const T=(t,i)=>i.every(u=>u.isOriginal)&&t.length===i.length?(console.log("not changed"),!1):(console.log("changed"),!0);return r.jsxs(r.Fragment,{children:[r.jsx(A,{}),r.jsxs(V,{children:[r.jsx("h1",{className:"h1 mb-6",children:"상품 등록"}),r.jsx("p",{className:"mb-6",children:"상품의 정보를 입력해주세요."}),r.jsx("div",{className:"w-full",children:r.jsx(v,{onSubmit:L,defaultValues:e?{name:e.productName,description:e.productDescription,image:e.productImage,category:e.productCategory,price:e.productPrice,quantity:e.productQuantity}:void 0})}),P&&r.jsx("div",{className:"fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center",children:r.jsx(y,{})})]})]})};export{st as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Vq1JXboX.js","assets/index-QzkhKyfJ.css","assets/uploadImage-W4NcJjVc.js","assets/v4-yQnnJER4.js","assets/updateProduct-Zp09cJHA.js","assets/deleteProductImage-lQ2FOteI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}