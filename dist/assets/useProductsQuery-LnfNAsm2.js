import{S as q,L as F,M as z,N as A,O as D,P as H,Q as X,R as Y,T as N,U as Z,V as P,W as L,X as $,Y as G,r as f,Z as J,a0 as ee}from"./index-DqnocgkB.js";class te extends q{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),B(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return T(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return T(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),F(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&k(this.currentQuery,u,this.options,s)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==u||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const i=this.computeRefetchInterval();n&&(this.currentQuery!==u||this.options.enabled!==s.enabled||i!==this.currentRefetchInterval)&&this.updateRefetchInterval(i)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),s=this.createResult(t,e);return se(this,s,e)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(z)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),A||this.currentResult.isStale||!D(this.options.staleTime))return;const t=H(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(A||this.options.enabled===!1||!D(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||X.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,u=this.options,n=this.currentResult,i=this.currentResultState,a=this.currentResultOptions,l=e!==s,c=l?e.state:this.currentQueryInitialState,h=l?this.currentResult:this.previousQueryResult,{state:o}=e;let{dataUpdatedAt:m,error:R,errorUpdatedAt:g,fetchStatus:b,status:v}=o,I=!1,y=!1,d;if(t._optimisticResults){const p=this.hasListeners(),O=!p&&B(e,t),W=p&&k(e,s,t,u);(O||W)&&(b=Y(e.options.networkMode)?"fetching":"paused",m||(v="loading")),t._optimisticResults==="isRestoring"&&(b="idle")}if(t.keepPreviousData&&!o.dataUpdatedAt&&h!=null&&h.isSuccess&&v!=="error")d=h.data,m=h.dataUpdatedAt,v=h.status,I=!0;else if(t.select&&typeof o.data<"u")if(n&&o.data===(i==null?void 0:i.data)&&t.select===this.selectFn)d=this.selectResult;else try{this.selectFn=t.select,d=t.select(o.data),d=N(n==null?void 0:n.data,d,t),this.selectResult=d,this.selectError=null}catch(p){this.selectError=p}else d=o.data;if(typeof t.placeholderData<"u"&&typeof d>"u"&&v==="loading"){let p;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))p=n.data;else if(p=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof p<"u")try{p=t.select(p),this.selectError=null}catch(O){this.selectError=O}typeof p<"u"&&(v="success",d=N(n==null?void 0:n.data,p,t),y=!0)}this.selectError&&(R=this.selectError,d=this.selectResult,g=Date.now(),v="error");const Q=b==="fetching",S=v==="loading",x=v==="error";return{status:v,fetchStatus:b,isLoading:S,isSuccess:v==="success",isError:x,isInitialLoading:S&&Q,data:d,dataUpdatedAt:m,error:R,errorUpdatedAt:g,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>c.dataUpdateCount||o.errorUpdateCount>c.errorUpdateCount,isFetching:Q,isRefetching:Q&&!S,isLoadingError:x&&o.dataUpdatedAt===0,isPaused:b==="paused",isPlaceholderData:y,isPreviousData:I,isRefetchError:x&&o.dataUpdatedAt!==0,isStale:U(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,F(s,t))return;this.currentResult=s;const u={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options,a=typeof i=="function"?i():i;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const h=c;return this.currentResult[h]!==t[h]&&l.has(h)})};(e==null?void 0:e.listeners)!==!1&&n()&&(u.listeners=!0),this.notify({...u,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!Z(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){P.batch(()=>{if(e.onSuccess){var t,s,u,n;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(u=(n=this.options).onSettled)==null||u.call(n,this.currentResult.data,null)}else if(e.onError){var i,a,l,c;(i=(a=this.options).onError)==null||i.call(a,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function re(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function B(r,e){return re(r,e)||r.state.dataUpdatedAt>0&&T(r,e,e.refetchOnMount)}function T(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&U(r,e)}return!1}function k(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&U(r,t)}function U(r,e){return r.isStaleByTime(e.staleTime)}function se(r,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!F(r.getCurrentResult(),e)}class ne extends te{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:L()},t)}getOptimisticResult(e){return e.behavior=L(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var s,u,n,i,a,l;const{state:c}=e,h=super.createResult(e,t),{isFetching:o,isRefetching:m}=h,R=o&&((s=c.fetchMeta)==null||(u=s.fetchMore)==null?void 0:u.direction)==="forward",g=o&&((n=c.fetchMeta)==null||(i=n.fetchMore)==null?void 0:i.direction)==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:$(t,(a=c.data)==null?void 0:a.pages),hasPreviousPage:G(t,(l=c.data)==null?void 0:l.pages),isFetchingNextPage:R,isFetchingPreviousPage:g,isRefetching:m&&!R&&!g}}}var j={exports:{}},_={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=f;function ie(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var ue=typeof Object.is=="function"?Object.is:ie,ae=E.useState,ce=E.useEffect,oe=E.useLayoutEffect,le=E.useDebugValue;function he(r,e){var t=e(),s=ae({inst:{value:t,getSnapshot:e}}),u=s[0].inst,n=s[1];return oe(function(){u.value=t,u.getSnapshot=e,w(u)&&n({inst:u})},[r,t,e]),ce(function(){return w(u)&&n({inst:u}),r(function(){w(u)&&n({inst:u})})},[r]),le(t),t}function w(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!ue(r,t)}catch{return!0}}function de(r,e){return e()}var fe=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?de:he;_.useSyncExternalStore=E.useSyncExternalStore!==void 0?E.useSyncExternalStore:fe;j.exports=_;var ve=j.exports;const pe=ve.useSyncExternalStore,K=f.createContext(!1),ye=()=>f.useContext(K);K.Provider;function Re(){let r=!1;return{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r}}const ge=f.createContext(Re()),be=()=>f.useContext(ge);function me(r,e){return typeof r=="function"?r(...e):!!r}const Se=(r,e)=>{(r.suspense||r.useErrorBoundary)&&(e.isReset()||(r.retryOnMount=!1))},Qe=r=>{f.useEffect(()=>{r.clearReset()},[r])},Ee=({result:r,errorResetBoundary:e,useErrorBoundary:t,query:s})=>r.isError&&!e.isReset()&&!r.isFetching&&me(t,[r.error,s]),Ie=r=>{r.suspense&&typeof r.staleTime!="number"&&(r.staleTime=1e3)},Pe=(r,e)=>r.isLoading&&r.isFetching&&!e,Ce=(r,e,t)=>(r==null?void 0:r.suspense)&&Pe(e,t),xe=(r,e,t)=>e.fetchOptimistic(r).then(({data:s})=>{r.onSuccess==null||r.onSuccess(s),r.onSettled==null||r.onSettled(s,null)}).catch(s=>{t.clearReset(),r.onError==null||r.onError(s),r.onSettled==null||r.onSettled(void 0,s)});function Oe(r,e){const t=J({context:r.context}),s=ye(),u=be(),n=t.defaultQueryOptions(r);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=P.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=P.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=P.batchCalls(n.onSettled)),Ie(n),Se(n,u),Qe(u);const[i]=f.useState(()=>new e(t,n)),a=i.getOptimisticResult(n);if(pe(f.useCallback(l=>{const c=s?()=>{}:i.subscribe(P.batchCalls(l));return i.updateResult(),c},[i,s]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),f.useEffect(()=>{i.setOptions(n,{listeners:!1})},[n,i]),Ce(n,a,s))throw xe(n,i,u);if(Ee({result:a,errorResetBoundary:u,useErrorBoundary:n.useErrorBoundary,query:i.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:i.trackResult(a)}function we(r,e,t){const s=ee(r,e,t);return Oe(s,ne)}var M=new Map,C=new WeakMap,V=0,Fe=void 0;function Te(r){return r?(C.has(r)||(V+=1,C.set(r,V.toString())),C.get(r)):"0"}function Me(r){return Object.keys(r).sort().filter(e=>r[e]!==void 0).map(e=>`${e}_${e==="root"?Te(r.root):r[e]}`).toString()}function Ue(r){let e=Me(r),t=M.get(e);if(!t){const s=new Map;let u;const n=new IntersectionObserver(i=>{i.forEach(a=>{var l;const c=a.isIntersecting&&u.some(h=>a.intersectionRatio>=h);r.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=s.get(a.target))==null||l.forEach(h=>{h(c,a)})})},r);u=n.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),t={id:e,observer:n,elements:s},M.set(e,t)}return t}function Ae(r,e,t={},s=Fe){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const l=r.getBoundingClientRect();return e(s,{isIntersecting:s,target:r,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:u,observer:n,elements:i}=Ue(t);let a=i.get(r)||[];return i.has(r)||i.set(r,a),a.push(e),n.observe(r),function(){a.splice(a.indexOf(e),1),a.length===0&&(i.delete(r),n.unobserve(r)),i.size===0&&(n.disconnect(),M.delete(u))}}function Le({threshold:r,delay:e,trackVisibility:t,rootMargin:s,root:u,triggerOnce:n,skip:i,initialInView:a,fallbackInView:l,onChange:c}={}){var h;const[o,m]=f.useState(null),R=f.useRef(),[g,b]=f.useState({inView:!!a,entry:void 0});R.current=c,f.useEffect(()=>{if(i||!o)return;let d;return d=Ae(o,(Q,S)=>{b({inView:Q,entry:S}),R.current&&R.current(Q,S),S.isIntersecting&&n&&d&&(d(),d=void 0)},{root:u,rootMargin:s,threshold:r,trackVisibility:t,delay:e},l),()=>{d&&d()}},[Array.isArray(r)?r.toString():r,o,u,s,n,i,t,l,e]);const v=(h=g.entry)==null?void 0:h.target,I=f.useRef();!o&&v&&!n&&!i&&I.current!==v&&(I.current=v,b({inView:!!a,entry:void 0}));const y=[m,g.inView,g.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const Be=({rowsPerPage:r,queryFunc:e})=>{const{data:t,isLoading:s,isError:u,hasNextPage:n,fetchNextPage:i,isFetchingNextPage:a}=we({queryKey:["getProducts"],queryFn:async({pageParam:c})=>await e(c,r),getNextPageParam:c=>{if(!(c.docs.length<r))return c.docs[c.docs.length-1].data().createdAt}});return{products:f.useMemo(()=>{let c=[];if(t){for(const h of t.pages)c=c.concat(h.docs.map(o=>({docId:o.id,data:o.data()})));return c}},[t]),isLoading:s,isError:u,hasNextPage:n,fetchNextPage:i,isFetchingNextPage:a}};export{Be as a,Le as u};
