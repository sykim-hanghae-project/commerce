import{n as S,j as e,F as b,g as F,d as I,h as N,A as y}from"./index-8-xDMCu7.js";import{o as k,s as c,u as A,F as v,b as d,c as m,d as u,e as h,I as x,g as B,t as C}from"./input-ISVC7Ray.js";import{B as E}from"./button-GbdM-ld7.js";import{g as T}from"./getErrorMessage-xjQuqrwl.js";import"./index-_-wpNjw9.js";const P=()=>{const l=S();function w(){l("/signup")}const j=async(t,a)=>{await b(y,t,a).then(s=>{const i=s.user;i.getIdToken().then(r=>{window.localStorage.setItem("user-token",r)}).catch(r=>{throw r}),window.localStorage.setItem("uid",i.uid)}).catch(s=>{throw s});const o=window.localStorage.getItem("uid");return o?p(o):null},p=async t=>{const a=F(I,"users",t),o=await N(a);if(o.exists()){const s=o.data();return{id:s.id,email:s.email,isSeller:s.isSeller,nickname:s.nickname,password:s.password,createdAt:s.createdAt,updatedAt:s.updatedAt}}else return null},f=k({email:c().email(),password:c()}),n=A({resolver:C(f),defaultValues:{email:"",password:""}});function g(t){j(t.email,t.password).then(a=>{a&&window.localStorage.setItem("user-role",a.isSeller?"seller":"consumer"),window.alert("로그인이 완료되었습니다."),window.location.reload(),l("/")}).catch(a=>{window.alert(T(a))})}return e.jsxs("div",{className:"flex flex-col items-center py-14",children:[e.jsx("h1",{className:"h1 mb-8",children:"로그인"}),e.jsx("div",{className:"flex flex-col justify-center w-72",children:e.jsx(v,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(g),children:[e.jsx(d,{control:n.control,name:"email",render:({field:t})=>e.jsxs(m,{children:[e.jsx(u,{children:"이메일"}),e.jsx(h,{children:e.jsx(x,{...t})}),e.jsx(B,{})]})}),e.jsx("div",{className:"h-6"}),e.jsx(d,{control:n.control,name:"password",render:({field:t})=>e.jsxs(m,{children:[e.jsx(u,{children:"비밀번호"}),e.jsx(h,{children:e.jsx(x,{...t})})]})}),e.jsx(E,{type:"submit",className:"mt-7 w-full",children:"로그인"})]})})}),e.jsx("button",{className:"button mt-8",onClick:w,children:e.jsx("p",{className:"underline underline-offset-2",children:"회원가입"})})]})};export{P as default};