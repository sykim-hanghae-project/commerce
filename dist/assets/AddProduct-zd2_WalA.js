import{r as s,_ as e,u as f,a as _,j as t}from"./index-FIlqUQy7.js";import{M as g}from"./MyPageLayout-nhL4BXZX.js";import{P as x}from"./ProductForm-fUTzmyDH.js";import{M as h}from"./MetaTag-VgbHpOZK.js";import"./input-5NgCyCc6.js";import"./utils-e7QYg_mL.js";import"./index-gxEFgUwi.js";import"./button-zmJg5Lpq.js";import"./select-ntyap1zV.js";import"./index-JylqWpyc.js";import"./index-EOJ1QxCX.js";import"./Combination-3J9WhP_G.js";import"./check-MbevbEUm.js";import"./index-yRSaLw9b.js";import"./createLucideIcon-660fMRwt.js";import"./index-6qDwlgEo.js";import"./iconBase-iSPQGmgu.js";import"./index-ErLbnoe3.js";const j=s.lazy(()=>e(()=>import("./index-FIlqUQy7.js").then(o=>o.bu),__vite__mapDeps([0,1]))),q=()=>{const o=f(),[m,n]=s.useState(!1),c=_();async function p(i){console.log(i),n(!0);try{const{default:r}=await e(()=>import("./uploadImage-8Oj2n36n.js"),__vite__mapDeps([2,0,1,3])),{default:d}=await e(()=>import("./addProduct-MiHrffT4.js"),__vite__mapDeps([4,0,1,3])),a=[];if(i.image)for(const l of i.image){const u=await r(l.file);a.push(u)}await d(o.id,i.name,i.price,i.quantity,i.description,i.category,a),window.alert("상품을 성공적으로 등록하였습니다.")}catch(r){console.log(r),window.alert("상품 등록에 실패하였습니다.")}finally{c("/mypage")}}return t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsxs(g,{children:[t.jsx("h1",{className:"h1 mb-6",children:"상품 등록"}),t.jsx("p",{className:"mb-6",children:"상품의 정보를 입력해주세요."}),t.jsx("div",{className:"w-full",children:t.jsx(x,{onSubmit:p})}),m&&t.jsx("div",{className:"fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center",children:t.jsx(j,{})})]})]})};export{q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-FIlqUQy7.js","assets/index-GtDIvQPK.css","assets/uploadImage-8Oj2n36n.js","assets/v4-yQnnJER4.js","assets/addProduct-MiHrffT4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}