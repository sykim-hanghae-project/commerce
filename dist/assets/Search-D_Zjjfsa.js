import{q as p,F as l,H as P,o as y,w as m,c as w,d as f,g as x,I as q,p as S,r as j,j as n}from"./index-SUEa9kdL.js";import{u as k,a as A}from"./useProductsQuery-t57tE96E.js";import{P as B}from"./ProductList-SE4nODcc.js";import"./ProductContainer-grg_vuzb.js";import"./createLucideIcon-qPvvMrlJ.js";import"./chevron-right-ZQy03gf7.js";async function N(t,e,r,s,a){console.log("keyword",t),console.log("orderField",r),console.log("orderDirection",s);let o;return a?o=p(w(f,"products"),m("keyword","array-contains",t.toLowerCase()),y(r,s),P(a),l(e)):o=p(w(f,"products"),m("keyword","array-contains",t.toLowerCase()),y(r,s),l(e)),(await x(o)).docs.map(i=>q(i.data()))}const D=()=>{const[t]=S(),e=t.get("keyword");console.log(e);const r=t.get("sortby"),[s,a]=k(),{products:o,isLoading:d,hasNextPage:i,fetchNextPage:u}=A({rowsPerPage:8,qKey:e||"",queryFunc:(c,g)=>N(e,g,r==="price"?"productPrice":"createdAt",r==="price"?"asc":"desc",c),sortBy:"productName"});j.useEffect(()=>{a&&i&&u()},[a,i,u]);const h=c=>{r===c||!r&&c==="createdAt"||(c==="createdAt"?window.location.replace(`/product/search?keyword=${e}&sortby=createdAt`):window.location.replace(`/product/search?keyword=${e}&sortby=price`))};return n.jsxs("div",{className:"py-14",children:[n.jsx("h1",{className:"h1 mb-6",children:e}),!d&&o&&n.jsx(B,{products:o,onClickFilterItem:h,curSortBy:r==="price"?"price":"createdAt"}),n.jsx("div",{ref:s})]})};export{D as default};
