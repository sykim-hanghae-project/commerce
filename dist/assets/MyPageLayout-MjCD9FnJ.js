import{R as h,r as x,F as g,a as w,j as a,_ as i,u as v}from"./index-Vq1JXboX.js";const _=h.memo(({isSeller:o,userNickname:t})=>{const[l]=x.useState(g().pathname),m=w(),c=async()=>{const{signOut:s}=await i(()=>import("./index-wocOw3ZL.js").then(e=>e.i),__vite__mapDeps([0,1,2,3])),{auth:n}=await i(()=>import("./index-Vq1JXboX.js").then(e=>e.bs),__vite__mapDeps([1,2]));s(n).then(()=>{window.alert("로그아웃 완료"),window.localStorage.removeItem("user-token"),window.localStorage.removeItem("uid"),window.localStorage.removeItem("user-role"),window.localStorage.removeItem("cart"),window.location.assign("/")}).catch(e=>{console.log(e)})},r=[{title:"상품",items:[{name:"전체 상품 조회",path:"/mypage/view-allproducts"},{name:"상품 등록",path:"/mypage/add-product"}]},{title:"판매",items:[{name:"판매 기록 관리",path:"/mypage/manage-order"}]}],d=[{title:"나의 활동",items:[{name:"주문 내역",path:"/mypage/myorder"}]}],p=[{title:"환경 설정",items:[{name:"로그아웃",onClick:c}]}];return a.jsxs("div",{className:"p-8",children:[a.jsx("div",{className:"text-3xl",children:t}),a.jsx("ul",{children:(o?r:d).concat(p).map((s,n)=>a.jsxs("li",{className:"mt-8",children:[a.jsx("div",{className:"mb-2 text-xl min-w-max",children:s.title}),a.jsx("ul",{children:s.items.map((e,u)=>a.jsx("li",{className:`myPageNavItem ${l===e.path&&"font-bold"}`,children:a.jsx("button",{onClick:e.path?()=>m(e.path):e.onClick,children:e.name})},`mpn_item_${u}`))})]},`mpn_group_${n}`))})]})}),y=({children:o})=>{const t=v();return a.jsxs("div",{className:"flex",children:[a.jsx(_,{isSeller:t.isSeller,userNickname:t.nickname}),a.jsx("div",{className:"px-24 py-8 w-full min-w-[700px]",children:o})]})};export{y as M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-wocOw3ZL.js","assets/index-Vq1JXboX.js","assets/index-QzkhKyfJ.css","assets/utils-Anq8py01.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
