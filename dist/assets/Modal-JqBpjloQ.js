import{r as s,j as e}from"./index-B_PGsR37.js";import{c as d}from"./utils-dWbl7AoH.js";const r=s.createContext(null),c=({children:o,className:t})=>(s.useEffect(()=>(document.body.style.cssText=`
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`,()=>{const n=document.body.style.top;document.body.style.cssText="",window.scrollTo(0,parseInt(n||"0",10)*-1)}),[]),e.jsx(r.Provider,{value:null,children:e.jsx("div",{className:d("Modal",t),children:o})})),a=({title:o,children:t})=>{if(s.useContext(r)===void 0)throw new Error("Header 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.");return e.jsxs("div",{className:"flex p-2 bg-gray-100",children:[e.jsx("p",{className:"min-w-max",children:o}),t]})};c.Header=a;const i=({children:o})=>{if(s.useContext(r)===void 0)throw new Error("Body 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.");return e.jsx("div",{className:"p-2",children:o})};c.Body=i;const x=({children:o,onClose:t})=>{if(s.useContext(r)===void 0)throw new Error("Close 컴포넌트는 Modal 컴포넌트 아래에서만 사용될 수 있습니다.");const l=()=>{t()};return e.jsx("div",{className:"w-full h-fit flex justify-end",onClick:l,children:e.jsx("div",{className:"cursor-pointer text-base",children:o})})};c.Close=x;export{c as M};
