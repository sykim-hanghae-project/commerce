import{M as w,N as A,P as O,K as _,r as P}from"./index-IIH_jOnl.js";import{a as I}from"./useQuery-htsuB4eh.js";import{Q}from"./suspense-xKbUm0tH.js";class E extends Q{constructor(t,r){super(t,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,r){super.setOptions({...t,behavior:w()},r)}getOptimisticResult(t){return t.behavior=w(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,r){var n,a,o,c,i,u;const{state:f}=t,d=super.createResult(t,r),{isFetching:s,isRefetching:b}=d,g=s&&((n=f.fetchMeta)==null||(a=n.fetchMore)==null?void 0:a.direction)==="forward",v=s&&((o=f.fetchMeta)==null||(c=o.fetchMore)==null?void 0:c.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:A(r,(i=f.data)==null?void 0:i.pages),hasPreviousPage:O(r,(u=f.data)==null?void 0:u.pages),isFetchingNextPage:g,isFetchingPreviousPage:v,isRefetching:b&&!g&&!v}}}function S(e,t,r){const n=_(e,t,r);return I(n,E)}var y=new Map,p=new WeakMap,$=0,F=void 0;function V(e){return e?(p.has(e)||($+=1,p.set(e,$.toString())),p.get(e)):"0"}function B(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?V(e.root):e[t]}`).toString()}function T(e){let t=B(e),r=y.get(t);if(!r){const n=new Map;let a;const o=new IntersectionObserver(c=>{c.forEach(i=>{var u;const f=i.isIntersecting&&a.some(d=>i.intersectionRatio>=d);e.trackVisibility&&typeof i.isVisible>"u"&&(i.isVisible=f),(u=n.get(i.target))==null||u.forEach(d=>{d(f,i)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},y.set(t,r)}return r}function C(e,t,r={},n=F){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:a,observer:o,elements:c}=T(r);let i=c.get(e)||[];return c.has(e)||c.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),i.length===0&&(c.delete(e),o.unobserve(e)),c.size===0&&(o.disconnect(),y.delete(a))}}function z({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:c,initialInView:i,fallbackInView:u,onChange:f}={}){var d;const[s,b]=P.useState(null),g=P.useRef(),[v,R]=P.useState({inView:!!i,entry:void 0});g.current=f,P.useEffect(()=>{if(c||!s)return;let l;return l=C(s,(m,x)=>{R({inView:m,entry:x}),g.current&&g.current(m,x),x.isIntersecting&&o&&l&&(l(),l=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},u),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,s,a,n,o,c,r,u,t]);const M=(d=v.entry)==null?void 0:d.target,N=P.useRef();!s&&M&&!o&&!c&&N.current!==M&&(N.current=M,R({inView:!!i,entry:void 0}));const h=[b,v.inView,v.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const L=({rowsPerPage:e,qKey:t,queryFunc:r,sortBy:n})=>{const{data:a,isLoading:o,isError:c,hasNextPage:i,fetchNextPage:u,isFetchingNextPage:f}=S({queryKey:["getProducts",...t],queryFn:async({pageParam:s})=>await r(s,e),getNextPageParam:s=>{if(!(s.length<e))return n==="createdAt"?s[s.length-1].createdAt:n==="price"?s[s.length-1].productPrice:s[s.length-1].productName}});return{products:P.useMemo(()=>{let s=[];if(a){if(Array.isArray(a))return a;for(const b of a.pages)s=s.concat(b)}return s},[a]),isLoading:o,isError:c,hasNextPage:i,fetchNextPage:u,isFetchingNextPage:f}};export{L as a,z as u};