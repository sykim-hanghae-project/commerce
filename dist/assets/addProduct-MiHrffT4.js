import{C as l,t as i,d as p,e as w}from"./index-FIlqUQy7.js";import{v as g}from"./v4-yQnnJER4.js";function h(o){let t=[];const s=o.split(" ");for(const e of s){const r=m(e);t=t.concat(r)}return t}function m(o){const t=[];for(let s=1;s<=o.length;s+=1)for(let e=0;e<o.length;e+=1){const r=e+s;if(r<=o.length){const n=o.substring(e,r);t.push(n)}}return t}async function v(o,t,s,e,r,n,f,c,a){const d=g();await l(p(w,"products",d),{id:d,sellerId:o,productName:t,productPrice:s,productQuantity:e,productDescription:r,productCategory:n,productImage:f,createdAt:c||i(),updatedAt:a||i(),keyword:h(t)}).catch(u=>{throw u})}export{v as default};