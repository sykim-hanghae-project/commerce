import{J as y,G as a,r as c,K as d}from"./index-B_PGsR37.js";import{u as p}from"./utils-sVZp_qSd.js";import{u as R,a as b,e as g,b as C,c as E,s as m,f as S,g as h,Q}from"./suspense-JhA63HVw.js";function O(o,i){const u=y({context:o.context}),s=R(),n=b(),e=u.defaultQueryOptions(o);e._optimisticResults=s?"isRestoring":"optimistic",e.onError&&(e.onError=a.batchCalls(e.onError)),e.onSuccess&&(e.onSuccess=a.batchCalls(e.onSuccess)),e.onSettled&&(e.onSettled=a.batchCalls(e.onSettled)),g(e),C(e,n),E(n);const[r]=c.useState(()=>new i(u,e)),t=r.getOptimisticResult(e);if(p(c.useCallback(l=>{const f=s?()=>{}:r.subscribe(a.batchCalls(l));return r.updateResult(),f},[r,s]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),c.useEffect(()=>{r.setOptions(e,{listeners:!1})},[e,r]),m(e,t,s))throw S(e,r,n);if(h({result:t,errorResetBoundary:n,useErrorBoundary:e.useErrorBoundary,query:r.getCurrentQuery()}))throw t.error;return e.notifyOnChangeProps?t:r.trackResult(t)}function w(o,i,u){const s=d(o,i,u);return O(s,Q)}export{O as a,w as u};