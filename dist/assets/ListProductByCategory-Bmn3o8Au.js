import{p as y,b as f,r as P,j as s}from"./index-pc71vIdO.js";import{u as l,a as x}from"./useProductsQuery-Rej0GU_q.js";import{g as h}from"./getProductsByCategory-2ftDc_Qf.js";import{P as A}from"./ProductList-VGrn0m1v.js";import"./ProductContainer-RRIfnVjv.js";import"./createLucideIcon-I6jI2dyF.js";import"./chevron-right-dvOjNLop.js";const L=()=>{const[c]=y(),e=c.get("category"),t=c.get("sortby"),a=f(),[d,o]=l(),{products:i,isLoading:n,hasNextPage:p,fetchNextPage:u}=x({rowsPerPage:8,qKey:[e,t||"createdAt"],queryFunc:(r,g)=>h(e,g,t==="price"?"productPrice":"createdAt",t==="price"?"asc":"desc",r),sortBy:t==="price"?"price":"createdAt"});P.useEffect(()=>{o&&p&&u()},[o,p,u]);const m=r=>{t===r||!t&&r==="createdAt"||a(r==="createdAt"?`/product/list?category=${e}&sortby=createdAt`:`/product/list?category=${e}&sortby=price`)};return s.jsxs("div",{className:"py-14",children:[s.jsx("h1",{className:"h1 mb-6",children:e}),!n&&i&&s.jsx(A,{products:i,onClickFilterItem:m,curSortBy:t==="price"?"price":"createdAt"}),s.jsx("div",{ref:d})]})};export{L as default};