import{q as y,F as m,H as x,o as l,w as f,c as h,d as w,g as q,I as A,p as S,b as j,r as k,j as i}from"./index-pc71vIdO.js";import{u as N,a as v}from"./useProductsQuery-Rej0GU_q.js";import{P as B}from"./ProductList-VGrn0m1v.js";import"./ProductContainer-RRIfnVjv.js";import"./createLucideIcon-I6jI2dyF.js";import"./chevron-right-dvOjNLop.js";async function L(r,t,e,s,c){console.log("keyword",r),console.log("orderField",e),console.log("orderDirection",s);let o;return c?o=y(h(w,"products"),f("keyword","array-contains",r.toLowerCase()),l(e,s),x(c),m(t)):o=y(h(w,"products"),f("keyword","array-contains",r.toLowerCase()),l(e,s),m(t)),(await q(o)).docs.map(d=>A(d.data()))}const K=()=>{const[r]=S(),t=r.get("keyword"),e=r.get("sortby"),s=j(),[c,o]=N(),{products:n,isLoading:d,hasNextPage:u,fetchNextPage:p}=v({rowsPerPage:8,qKey:[t,e||"createdAt"],queryFunc:(a,P)=>L(t,P,e==="price"?"productPrice":"createdAt",e==="price"?"asc":"desc",a),sortBy:"productName"});k.useEffect(()=>{o&&u&&p()},[o,u,p]);const g=a=>{e===a||!e&&a==="createdAt"||s(a==="createdAt"?`/product/search?keyword=${t}&sortby=createdAt`:`/product/search?keyword=${t}&sortby=price`)};return i.jsxs("div",{className:"py-14",children:[i.jsx("h1",{className:"h1 mb-6",children:t}),!d&&n&&i.jsx(B,{products:n,onClickFilterItem:g,curSortBy:e==="price"?"price":"createdAt"}),i.jsx("div",{ref:c})]})};export{K as default};