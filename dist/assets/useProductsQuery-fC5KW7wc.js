import{M as w,N as A,P as O,D as _,r as P}from"./index-Vq1JXboX.js";import{u as I}from"./useBaseQuery-zMsKL3zC.js";import{Q}from"./suspense-9ho99RMx.js";class E extends Q{constructor(t,r){super(t,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,r){super.setOptions({...t,behavior:w()},r)}getOptimisticResult(t){return t.behavior=w(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,r){var n,a,u,c,i,o;const{state:f}=t,d=super.createResult(t,r),{isFetching:s,isRefetching:b}=d,g=s&&((n=f.fetchMeta)==null||(a=n.fetchMore)==null?void 0:a.direction)==="forward",v=s&&((u=f.fetchMeta)==null||(c=u.fetchMore)==null?void 0:c.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:A(r,(i=f.data)==null?void 0:i.pages),hasPreviousPage:O(r,(o=f.data)==null?void 0:o.pages),isFetchingNextPage:g,isFetchingPreviousPage:v,isRefetching:b&&!g&&!v}}}function S(e,t,r){const n=_(e,t,r);return I(n,E)}var y=new Map,p=new WeakMap,$=0,F=void 0;function T(e){return e?(p.has(e)||($+=1,p.set(e,$.toString())),p.get(e)):"0"}function V(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?T(e.root):e[t]}`).toString()}function B(e){let t=V(e),r=y.get(t);if(!r){const n=new Map;let a;const u=new IntersectionObserver(c=>{c.forEach(i=>{var o;const f=i.isIntersecting&&a.some(d=>i.intersectionRatio>=d);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=f),(o=n.get(i.target))==null||o.forEach(d=>{d(f,i)})})},e);a=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:u,elements:n},y.set(t,r)}return r}function C(e,t,r={},n=F){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:a,observer:u,elements:c}=B(r);let i=c.get(e)||[];return c.has(e)||c.set(e,i),i.push(t),u.observe(e),function(){i.splice(i.indexOf(t),1),i.length===0&&(c.delete(e),u.unobserve(e)),c.size===0&&(u.disconnect(),y.delete(a))}}function D({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:u,skip:c,initialInView:i,fallbackInView:o,onChange:f}={}){var d;const[s,b]=P.useState(null),g=P.useRef(),[v,R]=P.useState({inView:!!i,entry:void 0});g.current=f,P.useEffect(()=>{if(c||!s)return;let l;return l=C(s,(m,x)=>{R({inView:m,entry:x}),g.current&&g.current(m,x),x.isIntersecting&&u&&l&&(l(),l=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},o),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,s,a,n,u,c,r,o,t]);const M=(d=v.entry)==null?void 0:d.target,N=P.useRef();!s&&M&&!u&&!c&&N.current!==M&&(N.current=M,R({inView:!!i,entry:void 0}));const h=[b,v.inView,v.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const K=({rowsPerPage:e,qKey:t,queryFunc:r,sortBy:n})=>{const{data:a,isLoading:u,isError:c,hasNextPage:i,fetchNextPage:o,isFetchingNextPage:f}=S({queryKey:["getProducts",...t],queryFn:async({pageParam:s})=>await r(s,e),getNextPageParam:s=>{if(!(s.length<e))return n==="createdAt"?s[s.length-1].createdAt:n==="price"?s[s.length-1].productPrice:s[s.length-1].productName},staleTime:3e3});return{products:P.useMemo(()=>{let s=[];if(a){if(Array.isArray(a))return a;for(const b of a.pages)s=s.concat(b)}return s},[a]),isLoading:u,isError:c,hasNextPage:i,fetchNextPage:o,isFetchingNextPage:f}};export{K as a,D as u};