import{b as y,a as f,r as P,j as e,L as l}from"./index-Vq1JXboX.js";import{u as h,a as j}from"./useProductsQuery-fC5KW7wc.js";import{g as A}from"./getProductsByCategory-EZOJDd8A.js";import{P as N}from"./ProductList-NOLEquVK.js";import{M as L}from"./MetaTag-ZlBfLCmT.js";import"./useBaseQuery-zMsKL3zC.js";import"./utils-bemYdGE3.js";import"./suspense-9ho99RMx.js";import"./ProductContainer-ypXsEUkS.js";import"./utils-Anq8py01.js";import"./button-DbWM39RQ.js";import"./createLucideIcon-teTjWQfU.js";import"./priceToString-jyYOkqXM.js";const k=()=>{const[a]=y(),r=a.get("category"),t=a.get("sortby"),c=f(),[d,o]=h(),{products:i,isLoading:n,hasNextPage:p,fetchNextPage:m,isFetchingNextPage:u}=j({rowsPerPage:8,qKey:[r,t||"createdAt"],queryFunc:(s,x)=>A(r,x,t==="price"?"productPrice":"createdAt",t==="price"?"asc":"desc",s),sortBy:t==="price"?"price":"createdAt"});P.useEffect(()=>{o&&p&&m()},[o,p,m]);const g=s=>{t===s||!t&&s==="createdAt"||c(s==="createdAt"?`/product/list?category=${r}&sortby=createdAt`:`/product/list?category=${r}&sortby=price`)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{title:`${r} - XSO`}),e.jsxs("div",{className:"py-14",children:[e.jsx("h1",{className:"h1 mb-6",children:r}),!n&&i&&e.jsx(N,{products:i,onClickFilterItem:g,curSortBy:t==="price"?"price":"createdAt"}),u?e.jsx(l,{}):e.jsx("div",{ref:d})]})]})};export{k as default};
