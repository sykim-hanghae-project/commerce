import{b as y,a as f,r as l,j as r}from"./index-B_PGsR37.js";import{u as x,a as P}from"./useProductsQuery-Zhk3rohR.js";import{g as h}from"./getProductsByCategory-c8OGYW-B.js";import{M as j}from"./MetaTag-ef0lWzjX.js";import{P as A}from"./ProductList-LvnLtS1C.js";import"./useQuery-LGw8-puI.js";import"./utils-sVZp_qSd.js";import"./suspense-JhA63HVw.js";import"./ProductContainer-0jNGnExq.js";import"./utils-dWbl7AoH.js";import"./button-h62HKO48.js";import"./createLucideIcon-GSCgaTko.js";import"./chevron-right-incfaVHe.js";import"./priceToString-jyYOkqXM.js";import"./getImageUrl-mfxCVYYg.js";const k=()=>{const[o]=y(),e=o.get("category"),t=o.get("sortby"),c=f(),[d,a]=x(),{products:i,isLoading:u,hasNextPage:p,fetchNextPage:m}=P({rowsPerPage:8,qKey:[e,t||"createdAt"],queryFunc:(s,g)=>h(e,g,t==="price"?"productPrice":"createdAt",t==="price"?"asc":"desc",s),sortBy:t==="price"?"price":"createdAt"});l.useEffect(()=>{a&&p&&m()},[a,p,m]);const n=s=>{t===s||!t&&s==="createdAt"||c(s==="createdAt"?`/product/list?category=${e}&sortby=createdAt`:`/product/list?category=${e}&sortby=price`)};return r.jsxs(r.Fragment,{children:[r.jsx(j,{title:`${e} - XSO`}),r.jsxs("div",{className:"py-14",children:[r.jsx("h1",{className:"h1 mb-6",children:e}),!u&&i&&r.jsx(A,{products:i,onClickFilterItem:n,curSortBy:t==="price"?"price":"createdAt"}),r.jsx("div",{ref:d})]})]})};export{k as default};
