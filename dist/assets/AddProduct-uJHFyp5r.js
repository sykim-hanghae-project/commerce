import{r as n,_ as s,u as x,a as h,j as t}from"./index-Vq1JXboX.js";import{M as j}from"./MyPageLayout-MjCD9FnJ.js";import{P as w}from"./ProductForm-g50IKf7A.js";import{M as y}from"./MetaTag-ZlBfLCmT.js";import{v as b}from"./v4-yQnnJER4.js";import"./input--lQax9jc.js";import"./utils-Anq8py01.js";import"./index-wocOw3ZL.js";import"./button-DbWM39RQ.js";import"./select-HplpV_xZ.js";import"./index-mOhbM-ib.js";import"./index-9gxzcVvN.js";import"./Combination-p9BSy9O-.js";import"./index-UVn-uUOv.js";import"./index-wOepbJQq.js";import"./index-mSmIdT57.js";import"./createLucideIcon-teTjWQfU.js";import"./iconBase-djffxSNR.js";import"./index-iK2Kvbv4.js";const P=n.lazy(()=>s(()=>import("./index-Vq1JXboX.js").then(r=>r.bt),__vite__mapDeps([0,1]))),B=()=>{const r=x(),[c,d]=n.useState(!1),l=h();async function p(o){console.log(o),d(!0);try{const{default:i}=await s(()=>import("./uploadImage-W4NcJjVc.js"),__vite__mapDeps([2,0,1,3])),{default:u}=await s(()=>import("./addProduct-xwbOrqAS.js"),__vite__mapDeps([4,0,1,5])),m=b();let a=[],e=[];if(o.image)for(const f of o.image){const{orgUrl:g,thumbnailUrl:_}=await i(f.file,r.id,m);a=[...a,g],e=[...e,_]}await u(m,r.id,o.name,o.price,o.quantity,o.description,o.category,a,e),window.alert("상품을 성공적으로 등록하였습니다.")}catch(i){console.log(i),window.alert("상품 등록에 실패하였습니다.")}finally{l("/mypage")}}return t.jsxs(t.Fragment,{children:[t.jsx(y,{}),t.jsxs(j,{children:[t.jsx("h1",{className:"h1 mb-6",children:"상품 등록"}),t.jsx("p",{className:"mb-6",children:"상품의 정보를 입력해주세요."}),t.jsx("div",{className:"w-full",children:t.jsx(w,{onSubmit:p})}),c&&t.jsx("div",{className:"fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center",children:t.jsx(P,{})})]})]})};export{B as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Vq1JXboX.js","assets/index-QzkhKyfJ.css","assets/uploadImage-W4NcJjVc.js","assets/v4-yQnnJER4.js","assets/addProduct-xwbOrqAS.js","assets/generateKeyword-fr217V55.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
