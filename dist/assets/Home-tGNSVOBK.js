import{a as m,b as d,j as s,L as u,aj as x}from"./index-SUEa9kdL.js";import{g as f}from"./getProductsByCategory-b_1M9HXW.js";import{P as j}from"./ProductContainer-grg_vuzb.js";import"./createLucideIcon-qPvvMrlJ.js";import"./chevron-right-ZQy03gf7.js";const p=({category:r})=>{const{data:e,isLoading:t,isError:a,error:c}=m({queryKey:["productsByCategory",r],queryFn:({queryKey:o})=>f(o[1],4,"createdAt","desc",null),staleTime:2e3}),i=d();if(t)return s.jsx(u,{});if(a)return console.log(c),s.jsx(s.Fragment,{});const l=()=>{i(`/product/list?category=${r}`)};return s.jsxs("div",{children:[s.jsxs("button",{onClick:l,className:"flex items-center ",children:[s.jsx("p",{className:"text-lg font-bold mr-1",children:r}),s.jsx(x,{})]}),s.jsx("ul",{className:"flex mt-4",children:e.map((o,n)=>s.jsx("li",{className:"homeProductsContainerProductItem",children:s.jsx(j,{product:o})},`${r}_product_${n}`))})]})},b=()=>{const r=["Women","Men"];return s.jsxs("div",{className:"w-full pb-8",children:[s.jsx("img",{className:"w-full h-96 object-cover",src:"https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),s.jsx("div",{className:"mt-12",children:s.jsx("ul",{children:r.map(e=>s.jsx("li",{className:"homeProductsContainer",children:s.jsx(p,{category:e})},`products_${e}`))})})]})};export{b as default};
