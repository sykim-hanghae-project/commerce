import{q as zt,o as Bt,p as pn,t as Rt,w as Vt,c as Ht,v as mn,d as qt,r as D,j as T,n as gn}from"./index-DqnocgkB.js";import{c as pt,B as Qt}from"./button-t4FA8y-s.js";import{c as hn}from"./createLucideIcon-s8DwoRPG.js";import{C as yn}from"./chevron-right-Sq9cQB7X.js";import{g as xn}from"./formatDocumentDataToProduct-7ZQWAYQh.js";/**
 * @license lucide-react v0.316.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=hn("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);async function ie(t,n,e,s,i){let r;return i?r=zt(Ht(qt,"products"),Vt("productCategory","==",t),Rt(e,s),pn(i),Bt(n)):r=zt(Ht(qt,"products"),Vt("productCategory","==",t),Rt(e,s),Bt(n)),await mn(r)}function bn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Gt(t){return bn(t)||Array.isArray(t)}function vn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Lt(t,n){const e=Object.keys(t),s=Object.keys(n);if(e.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==r?!1:e.every(o=>{const u=t[o],c=n[o];return typeof u=="function"?`${u}`==`${c}`:!Gt(u)||!Gt(c)?u===c:Lt(u,c)})}function Ut(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function En(t,n){if(t.length!==n.length)return!1;const e=Ut(t),s=Ut(n);return e.every((i,r)=>{const o=s[r];return Lt(i,o)})}function It(t){return typeof t=="number"}function wt(t){return typeof t=="string"}function Nt(t){return typeof t=="boolean"}function $t(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function Pt(t){return Math.sign(t)}function at(t,n){return A(t-n)}function Cn(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=at(A(t),A(n));return A(e/t)}function lt(t){return ft(t).map(Number)}function V(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function Dt(t,n){return n===mt(t)}function Kt(t,n=0){return Array.from(Array(t),(e,s)=>n+s)}function ft(t){return Object.keys(t)}function Jt(t,n){return[t,n].reduce((e,s)=>(ft(s).forEach(i=>{const r=e[i],o=s[i],u=$t(r)&&$t(o);e[i]=u?Jt(r,o):o}),e),{})}function Xt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function wn(t,n){const e={start:s,center:i,end:r};function s(){return 0}function i(c){return r(c)/2}function r(c){return n-c}function o(c,a){return wt(t)?e[t](c):t(n,c,a)}return{measure:o}}function dt(){let t=[];function n(i,r,o,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(r,o,u),c=()=>i.removeEventListener(r,o,u);else{const a=i;a.addListener(o),c=()=>a.removeListener(o)}return t.push(c),s}function e(){t=t.filter(i=>i())}const s={add:n,clear:e};return s}function Ln(t,n,e,s){const i=dt(),r=1e3/60;let o=null,u=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&p()})}function y(){S(),i.clear()}function f(h){o||(o=h);const l=h-o;for(o=h,u+=l;u>=r;)e(),u-=r;const g=A(u/r);s(g),c&&n.requestAnimationFrame(f)}function m(){c||(c=n.requestAnimationFrame(f))}function S(){n.cancelAnimationFrame(c),o=null,u=0,c=0}function p(){o=null,u=0}return{init:a,destroy:y,start:m,stop:S,update:e,render:s}}function In(t,n){const e=t==="y"?"y":"x",s=t==="y"?"x":"y",i=u(),r=c();function o(y){const{width:f,height:m}=y;return e==="x"?f:m}function u(){return e==="y"?"top":n==="rtl"?"right":"left"}function c(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:s,startEdge:i,endEdge:r,measureSize:o}}function et(t=0,n=0){const e=A(t-n);function s(a){return a<t}function i(a){return a>n}function r(a){return s(a)||i(a)}function o(a){return r(a)?s(a)?t:n:a}function u(a){return e?a-e*Math.ceil((a-n)/e):a}return{length:e,max:n,min:t,constrain:o,reachedAny:r,reachedMax:i,reachedMin:s,removeOffset:u}}function Yt(t,n,e){const{constrain:s}=et(0,t),i=t+1;let r=o(n);function o(m){return e?A((i+m)%i):s(m)}function u(){return r}function c(m){return r=o(m),f}function a(m){return y().set(u()+m)}function y(){return Yt(t,u(),e)}const f={get:u,set:c,add:a,clone:y};return f}function Nn(t){const n=t==="rtl"?-1:1;function e(i){return i*n}return{apply:e}}function Pn(t,n,e,s,i,r,o,u,c,a,y,f,m,S,p,d,h,l,g,b){const{cross:E}=t,C=["INPUT","SELECT","TEXTAREA"],N={passive:!1},j=dt(),v=dt(),w=et(50,225).constrain(p.measure(20)),L={mouse:300,touch:400},P={mouse:500,touch:600},k=d?43:25;let H=!1,q=0,K=0,G=!1,_=!1,Z=!1,Q=!1;function st(x){if(!b)return;function I(F){(Nt(b)||b(x,F))&&ct(F)}const M=e;j.add(M,"dragstart",F=>F.preventDefault(),N).add(M,"touchmove",()=>{},N).add(M,"touchend",()=>{}).add(M,"touchstart",I).add(M,"mousedown",I).add(M,"touchcancel",z).add(M,"contextmenu",z).add(M,"click",X,!0)}function U(){j.clear(),v.clear()}function ot(){const x=Q?s:e;v.add(x,"touchmove",B,N).add(x,"touchend",z).add(x,"mousemove",B,N).add(x,"mouseup",z)}function rt(x){const I=x.nodeName||"";return C.includes(I)}function J(){return(d?P:L)[Q?"mouse":"touch"]}function it(x,I){const M=m.add(Pt(x)*-1),F=f.byDistance(x,!d).distance;return d||A(x)<w?F:l&&I?F*.5:f.byIndex(M.get(),0).distance}function ct(x){const I=Xt(x,i);Q=I,!(I&&x.button!==0)&&(rt(x.target)||(Z=d&&I&&!x.buttons&&H,H=at(r.get(),u.get())>=2,G=!0,o.pointerDown(x),y.useFriction(0).useDuration(0),r.set(u),ot(),q=o.readPoint(x),K=o.readPoint(x,E),S.emit("pointerDown")))}function B(x){const I=o.readPoint(x),M=o.readPoint(x,E),F=at(I,q),W=at(M,K);if(!_&&!Q&&(!x.cancelable||(_=F>W,!_)))return z(x);const $=o.pointerMove(x);F>h&&(Z=!0),y.useFriction(.3).useDuration(1),c.start(),r.add(n.apply($)),x.preventDefault()}function z(x){const M=f.byDistance(0,!1).index!==m.get(),F=o.pointerUp(x)*J(),W=it(n.apply(F),M),$=Cn(F,W),tt=k-10*$,Y=g+$/50;_=!1,G=!1,v.clear(),y.useDuration(tt).useFriction(Y),a.distance(W,!d),Q=!1,S.emit("pointerUp")}function X(x){Z&&(x.stopPropagation(),x.preventDefault())}function R(){return G}return{init:st,pointerDown:R,destroy:U}}function Dn(t,n){let s,i;function r(f){return f.timeStamp}function o(f,m){const p=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(Xt(f,n)?f:f.touches[0])[p]}function u(f){return s=f,i=f,o(f)}function c(f){const m=o(f)-o(i),S=r(f)-r(s)>170;return i=f,S&&(s=f),m}function a(f){if(!s||!i)return 0;const m=o(i)-o(s),S=r(f)-r(s),p=r(f)-r(i)>170,d=m/S;return S&&!p&&A(d)>.1?d:0}return{pointerDown:u,pointerMove:c,pointerUp:a,readPoint:o}}function An(){function t(e){const{offsetTop:s,offsetLeft:i,offsetWidth:r,offsetHeight:o}=e;return{top:s,right:i+r,bottom:s+o,left:i,width:r,height:o}}return{measure:t}}function On(t){function n(s){return t*(s/100)}return{measure:n}}function Tn(t,n,e,s,i,r,o){let u,c,a=[],y=!1;function f(d){return i.measureSize(o.measure(d))}function m(d){if(!r)return;c=f(t),a=s.map(f);function h(g){for(const b of g){const E=b.target===t,C=s.indexOf(b.target),N=E?c:a[C],j=f(E?t:s[C]);if(A(j-N)>=.5){e.requestAnimationFrame(()=>{d.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(g=>{y||(Nt(r)||r(d,g))&&h(g)}),[t].concat(s).forEach(g=>u.observe(g))}function S(){u&&u.disconnect(),y=!0}return{init:m,destroy:S}}function jn(t,n,e,s,i){let r=0,o=0,u=s,c=i,a=t.get(),y=0;function f(){const C=e.get()-t.get(),N=!u;let j=0;return N?(r=0,t.set(e),j=C):(r+=C/u,r*=c,a+=r,t.add(r),j=a-y),o=Pt(j),y=a,E}function m(){const C=e.get()-n.get();return A(C)<.001}function S(){return u}function p(){return o}function d(){return r}function h(){return g(s)}function l(){return b(i)}function g(C){return u=C,E}function b(C){return c=C,E}const E={direction:p,duration:S,velocity:d,seek:f,settled:m,useBaseFriction:l,useBaseDuration:h,useFriction:b,useDuration:g};return E}function Mn(t,n,e,s,i){const r=i.measure(10),o=i.measure(50),u=et(.1,.99);let c=!1;function a(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function y(S){if(!a())return;const p=t.reachedMin(n.get())?"min":"max",d=A(t[p]-n.get()),h=e.get()-n.get(),l=u.constrain(d/o);e.subtract(h*l),!S&&A(h)<r&&(e.set(t.constrain(e.get())),s.useDuration(25).useBaseFriction())}function f(S){c=!S}return{constrain:y,toggleActive:f}}function kn(t,n,e,s,i){const r=et(-n+t,0),o=f(),u=y(),c=m();function a(p,d){return at(p,d)<1}function y(){const p=o[0],d=V(o),h=o.lastIndexOf(p),l=o.indexOf(d)+1;return et(h,l)}function f(){return e.map((p,d)=>{const{min:h,max:l}=r,g=r.constrain(p),b=!d,E=Dt(e,d);return b?l:E||a(h,g)?h:a(l,g)?l:g}).map(p=>parseFloat(p.toFixed(3)))}function m(){if(n<=t+i)return[r.max];if(s==="keepSnaps")return o;const{min:p,max:d}=u;return o.slice(p,d)}return{snapsContained:c,scrollContainLimit:u}}function Fn(t,n,e){const s=n[0],i=e?s-t:V(n);return{limit:et(i,s)}}function zn(t,n,e,s){const r=n.min+.1,o=n.max+.1,{reachedMin:u,reachedMax:c}=et(r,o);function a(m){return m===1?c(e.get()):m===-1?u(e.get()):!1}function y(m){if(!a(m))return;const S=t*(m*-1);s.forEach(p=>p.add(S))}return{loop:y}}function Bn(t){const{max:n,length:e}=t;function s(r){const o=r-n;return e?o/-e:0}return{get:s}}function Rn(t,n,e,s,i){const{startEdge:r,endEdge:o}=t,{groupSlides:u}=i,c=f().map(n.measure),a=m(),y=S();function f(){return u(s).map(d=>V(d)[o]-d[0][r]).map(A)}function m(){return s.map(d=>e[r]-d[r]).map(d=>-A(d))}function S(){return u(a).map(d=>d[0]).map((d,h)=>d+c[h])}return{snaps:a,snapsAligned:y}}function Vn(t,n,e,s,i,r){const{groupSlides:o}=i,{min:u,max:c}=s,a=y();function y(){const m=o(r),S=!t||n==="keepSnaps";return e.length===1?[r]:S?m:m.slice(u,c).map((p,d,h)=>{const l=!d,g=Dt(h,d);if(l){const b=V(h[0])+1;return Kt(b)}if(g){const b=mt(r)-V(h)[0]+1;return Kt(b,V(h)[0])}return p})}return{slideRegistry:a}}function Hn(t,n,e,s,i){const{reachedAny:r,removeOffset:o,constrain:u}=s;function c(p){return p.concat().sort((d,h)=>A(d)-A(h))[0]}function a(p){const d=t?o(p):u(p),h=n.map(g=>g-d).map(g=>y(g,0)).map((g,b)=>({diff:g,index:b})).sort((g,b)=>A(g.diff)-A(b.diff)),{index:l}=h[0];return{index:l,distance:d}}function y(p,d){const h=[p,p+e,p-e];if(!t)return h[0];if(!d)return c(h);const l=h.filter(g=>Pt(g)===d);return l.length?c(l):V(h)-e}function f(p,d){const h=n[p]-i.get(),l=y(h,d);return{index:p,distance:l}}function m(p,d){const h=i.get()+p,{index:l,distance:g}=a(h),b=!t&&r(h);if(!d||b)return{index:l,distance:p};const E=n[l]-g,C=p+y(E,0);return{index:l,distance:C}}return{byDistance:m,byIndex:f,shortcut:y}}function qn(t,n,e,s,i,r,o){function u(f){const m=f.distance,S=f.index!==n.get();r.add(m),m&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(e.set(n.get()),n.set(f.index),o.emit("select"))}function c(f,m){const S=i.byDistance(f,m);u(S)}function a(f,m){const S=n.clone().set(f),p=i.byIndex(S.get(),m);u(p)}return{distance:c,index:a}}function Gn(t,n,e,s,i,r){let o=0;function u(){r.add(document,"keydown",c,!1),n.forEach(a)}function c(f){f.code==="Tab"&&(o=new Date().getTime())}function a(f){const m=()=>{if(new Date().getTime()-o>10)return;t.scrollLeft=0;const d=n.indexOf(f),h=e.findIndex(l=>l.includes(d));It(h)&&(i.useDuration(0),s.index(h,0))};r.add(f,"focus",m,{passive:!0,capture:!0})}return{init:u}}function ht(t){let n=t;function e(){return n}function s(c){n=o(c)}function i(c){n+=o(c)}function r(c){n-=o(c)}function o(c){return It(c)?c:c.get()}return{get:e,set:s,add:i,subtract:r}}function _t(t,n,e){const s=t.scroll==="x"?o:u,i=e.style;let r=!1;function o(m){return`translate3d(${m}px,0px,0px)`}function u(m){return`translate3d(0px,${m}px,0px)`}function c(m){r||(i.transform=s(n.apply(m)))}function a(m){r=!m}function y(){r||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:y,to:c,toggleActive:a}}function Un(t,n,e,s,i,r,o,u,c,a){const f=lt(r),m=lt(r).reverse(),S=g().concat(b());function p(v,w){return v.reduce((L,P)=>L-r[P],w)}function d(v,w){return v.reduce((L,P)=>p(L,w)>0?L.concat([P]):L,[])}function h(v){return o.map((w,L)=>({start:w-i[L]+.5+v,end:w+e-.5+v}))}function l(v,w,L){const P=h(w);return v.map(k=>{const H=L?0:-s,q=L?s:0,K=L?"end":"start",G=P[k][K];return{index:k,loopPoint:G,slideLocation:ht(-1),translate:_t(t,n,a[k]),target:()=>c.get()>G?H:q}})}function g(){const v=u[0],w=d(m,v);return l(w,s,!1)}function b(){const v=e-u[0]-1,w=d(f,v);return l(w,-s,!0)}function E(){return S.every(({index:v})=>{const w=f.filter(L=>L!==v);return p(w,e)<=.1})}function C(){S.forEach(v=>{const{target:w,translate:L,slideLocation:P}=v,k=w();k!==P.get()&&(L.to(k),P.set(k))})}function N(){S.forEach(v=>v.translate.clear())}return{canLoop:E,clear:N,loop:C,loopPoints:S}}function $n(t,n,e){let s,i=!1;function r(c){if(!e)return;function a(y){for(const f of y)if(f.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(y=>{i||(Nt(e)||e(c,y))&&a(y)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),i=!0}return{init:r,destroy:o}}function Kn(t,n,e,s){const i={};let r=null,o=null,u,c=!1;function a(){u=new IntersectionObserver(p=>{c||(p.forEach(d=>{const h=n.indexOf(d.target);i[h]=d}),r=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(p=>u.observe(p))}function y(){u&&u.disconnect(),c=!0}function f(p){return ft(i).reduce((d,h)=>{const l=parseInt(h),{isIntersecting:g}=i[l];return(p&&g||!p&&!g)&&d.push(l),d},[])}function m(p=!0){if(p&&r)return r;if(!p&&o)return o;const d=f(p);return p&&(r=d),p||(o=d),d}return{init:a,destroy:y,get:m}}function Qn(t,n,e,s,i,r){const{measureSize:o,startEdge:u,endEdge:c}=t,a=e[0]&&i,y=p(),f=d(),m=e.map(o),S=h();function p(){if(!a)return 0;const g=e[0];return A(n[u]-g[u])}function d(){if(!a)return 0;const g=r.getComputedStyle(V(s));return parseFloat(g.getPropertyValue(`margin-${c}`))}function h(){return e.map((g,b,E)=>{const C=!b,N=Dt(E,b);return C?m[b]+y:N?m[b]+f:E[b+1][u]-g[u]}).map(A)}return{slideSizes:m,slideSizesWithGaps:S,startGap:y,endGap:f}}function Jn(t,n,e,s,i,r,o,u,c,a){const{startEdge:y,endEdge:f}=t,m=It(s);function S(l,g){return lt(l).filter(b=>b%g===0).map(b=>l.slice(b,b+g))}function p(l){return l.length?lt(l).reduce((g,b)=>{const E=V(g)||0,C=E===0,N=b===mt(l),j=r[y]-o[E][y],v=r[y]-o[b][f],w=!i&&C?n.apply(u):0,L=!i&&N?n.apply(c):0;return A(v-L-(j+w))>e+a&&g.push(b),N&&g.push(l.length),g},[]).map((g,b,E)=>{const C=Math.max(E[b-1]||0);return l.slice(C,g)}):[]}function d(l){return m?S(l,s):p(l)}return{groupSlides:d}}function Xn(t,n,e,s,i,r,o){const{align:u,axis:c,direction:a,startIndex:y,loop:f,duration:m,dragFree:S,dragThreshold:p,inViewThreshold:d,slidesToScroll:h,skipSnaps:l,containScroll:g,watchResize:b,watchSlides:E,watchDrag:C}=r,N=2,j=An(),v=j.measure(n),w=e.map(j.measure),L=Nn(a),P=In(c,a),k=P.measureSize(v),H=On(k),q=wn(u,k),K=!f&&!!g,G=f||!!g,{slideSizes:_,slideSizesWithGaps:Z,startGap:Q,endGap:st}=Qn(P,v,w,e,G,i),U=Jn(P,L,k,h,f,v,w,Q,st,N),{snaps:ot,snapsAligned:rt}=Rn(P,q,v,w,U),J=-V(ot)+V(Z),{snapsContained:it,scrollContainLimit:ct}=kn(k,J,rt,g,N),B=K?it:rt,{limit:z}=Fn(J,B,f),X=Yt(mt(B),y,f),R=X.clone(),O=lt(e),x=({dragHandler:nt,scrollBody:Et,scrollBounds:Ct,options:{loop:gt}})=>{gt||Ct.constrain(nt.pointerDown()),Et.seek()},I=({scrollBody:nt,translate:Et,location:Ct,offsetLocation:gt,scrollLooper:cn,slideLooper:un,dragHandler:an,animation:ln,eventHandler:Mt,options:{loop:fn}},dn)=>{const kt=nt.velocity(),Ft=nt.settled();Ft&&!an.pointerDown()&&(ln.stop(),Mt.emit("settle")),Ft||Mt.emit("scroll"),gt.set(Ct.get()-kt+kt*dn),fn&&(cn.loop(nt.direction()),un.loop()),Et.to(gt.get())},M=Ln(s,i,()=>x(vt),nt=>I(vt,nt)),F=.68,W=B[X.get()],$=ht(W),tt=ht(W),Y=ht(W),ut=jn($,tt,Y,m,F),St=Hn(f,B,J,z,Y),bt=qn(M,X,R,ut,St,Y,o),Ot=Bn(z),Tt=dt(),rn=Kn(n,e,o,d),{slideRegistry:jt}=Vn(K,g,B,ct,U,O),sn=Gn(t,e,jt,bt,ut,Tt),vt={ownerDocument:s,ownerWindow:i,eventHandler:o,containerRect:v,slideRects:w,animation:M,axis:P,direction:L,dragHandler:Pn(P,L,t,s,i,Y,Dn(P,i),$,M,bt,ut,St,X,o,H,S,p,l,F,C),eventStore:Tt,percentOfView:H,index:X,indexPrevious:R,limit:z,location:$,offsetLocation:tt,options:r,resizeHandler:Tn(n,o,i,e,P,b,j),scrollBody:ut,scrollBounds:Mn(z,$,Y,ut,H),scrollLooper:zn(J,z,tt,[$,tt,Y]),scrollProgress:Ot,scrollSnapList:B.map(Ot.get),scrollSnaps:B,scrollTarget:St,scrollTo:bt,slideLooper:Un(P,L,k,J,_,Z,ot,B,tt,e),slideFocus:sn,slidesHandler:$n(n,o,E),slidesInView:rn,slideIndexes:O,slideRegistry:jt,slidesToScroll:U,target:Y,translate:_t(P,L,n)};return vt}function Yn(){const t={};let n;function e(c){n=c}function s(c){return t[c]||[]}function i(c){return s(c).forEach(a=>a(n,c)),u}function r(c,a){return t[c]=s(c).concat([a]),u}function o(c,a){return t[c]=s(c).filter(y=>y!==a),u}const u={init:e,emit:i,off:o,on:r};return u}const _n={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Zn(t){function n(r,o){return Jt(r,o||{})}function e(r){const o=r.breakpoints||{},u=ft(o).filter(c=>t.matchMedia(c).matches).map(c=>o[c]).reduce((c,a)=>n(c,a),{});return n(r,u)}function s(r){return r.map(o=>ft(o.breakpoints||{})).reduce((o,u)=>o.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:s}}function Wn(t){let n=[];function e(r,o){return n=o.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(r,t)),o.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function s(){n=n.filter(r=>r.destroy())}return{init:e,destroy:s}}function yt(t,n,e){const s=t.ownerDocument,i=s.defaultView,r=Zn(i),o=Wn(r),u=dt(),c=Yn(),{mergeOptions:a,optionsAtMedia:y,optionsMediaQueries:f}=r,{on:m,off:S,emit:p}=c,d=P;let h=!1,l,g=a(_n,yt.globalOptions),b=a(g),E=[],C,N,j;function v(){const{container:O,slides:x}=b;N=(wt(O)?t.querySelector(O):O)||t.children[0];const M=wt(x)?N.querySelectorAll(x):x;j=[].slice.call(M||N.children)}function w(O){const x=Xn(t,N,j,s,i,O,c);if(O.loop&&!x.slideLooper.canLoop()){const I=Object.assign({},O,{loop:!1});return w(I)}return x}function L(O,x){h||(g=a(g,O),b=y(g),E=x||E,v(),l=w(b),f([g,...E.map(({options:I})=>I)]).forEach(I=>u.add(I,"change",P)),b.active&&(l.translate.to(l.location.get()),l.animation.init(),l.slidesInView.init(),l.slideFocus.init(),l.eventHandler.init(R),l.resizeHandler.init(R),l.slidesHandler.init(R),l.options.loop&&l.slideLooper.loop(),N.offsetParent&&j.length&&l.dragHandler.init(R),C=o.init(R,E)))}function P(O,x){const I=U();k(),L(a({startIndex:I},O),x),c.emit("reInit")}function k(){l.dragHandler.destroy(),l.eventStore.clear(),l.translate.clear(),l.slideLooper.clear(),l.resizeHandler.destroy(),l.slidesHandler.destroy(),l.slidesInView.destroy(),l.animation.destroy(),o.destroy(),u.clear()}function H(){h||(h=!0,u.clear(),k(),c.emit("destroy"))}function q(O,x,I){!b.active||h||(l.scrollBody.useBaseFriction().useDuration(x===!0?0:b.duration),l.scrollTo.index(O,I||0))}function K(O){const x=l.index.add(1).get();q(x,O,-1)}function G(O){const x=l.index.add(-1).get();q(x,O,1)}function _(){return l.index.add(1).get()!==U()}function Z(){return l.index.add(-1).get()!==U()}function Q(){return l.scrollSnapList}function st(){return l.scrollProgress.get(l.location.get())}function U(){return l.index.get()}function ot(){return l.indexPrevious.get()}function rt(){return l.slidesInView.get()}function J(){return l.slidesInView.get(!1)}function it(){return C}function ct(){return l}function B(){return t}function z(){return N}function X(){return j}const R={canScrollNext:_,canScrollPrev:Z,containerNode:z,internalEngine:ct,destroy:H,off:S,on:m,emit:p,plugins:it,previousScrollSnap:ot,reInit:d,rootNode:B,scrollNext:K,scrollPrev:G,scrollProgress:st,scrollSnapList:Q,scrollTo:q,selectedScrollSnap:U,slideNodes:X,slidesInView:rt,slidesNotInView:J};return L(n,e),setTimeout(()=>c.emit("init"),0),R}yt.globalOptions=void 0;function At(t={},n=[]){const e=D.useRef(t),s=D.useRef(n),[i,r]=D.useState(),[o,u]=D.useState(),c=D.useCallback(()=>{i&&i.reInit(e.current,s.current)},[i]);return D.useEffect(()=>{if(vn()&&o){yt.globalOptions=At.globalOptions;const a=yt(o,e.current,s.current);return r(a),()=>a.destroy()}else r(void 0)},[o,r]),D.useEffect(()=>{Lt(e.current,t)||(e.current=t,c())},[t,c]),D.useEffect(()=>{En(s.current,n)||(s.current=n,c())},[n,c]),[u,i]}At.globalOptions=void 0;const Zt=D.createContext(null);function xt(){const t=D.useContext(Zt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Wt=D.forwardRef(({orientation:t="horizontal",opts:n,setApi:e,plugins:s,className:i,children:r,...o},u)=>{const[c,a]=At({...n,axis:t==="horizontal"?"x":"y"},s),[y,f]=D.useState(!1),[m,S]=D.useState(!1),p=D.useCallback(g=>{g&&(f(g.canScrollPrev()),S(g.canScrollNext()))},[]),d=D.useCallback(()=>{a==null||a.scrollPrev()},[a]),h=D.useCallback(()=>{a==null||a.scrollNext()},[a]),l=D.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),d()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[d,h]);return D.useEffect(()=>{!a||!e||e(a)},[a,e]),D.useEffect(()=>{if(a)return p(a),a.on("reInit",p),a.on("select",p),()=>{a==null||a.off("select",p)}},[a,p]),T.jsx(Zt.Provider,{value:{carouselRef:c,api:a,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:d,scrollNext:h,canScrollPrev:y,canScrollNext:m},children:T.jsx("div",{ref:u,onKeyDownCapture:l,className:pt("relative",i),role:"region","aria-roledescription":"carousel",...o,children:r})})});Wt.displayName="Carousel";const tn=D.forwardRef(({className:t,...n},e)=>{const{carouselRef:s,orientation:i}=xt();return T.jsx("div",{ref:s,className:"overflow-hidden",children:T.jsx("div",{ref:e,className:pt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});tn.displayName="CarouselContent";const nn=D.forwardRef(({className:t,...n},e)=>{const{orientation:s}=xt();return T.jsx("div",{ref:e,role:"group","aria-roledescription":"slide",className:pt("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",t),...n})});nn.displayName="CarouselItem";const en=D.forwardRef(({className:t,variant:n="outline",size:e="icon",...s},i)=>{const{orientation:r,scrollPrev:o,canScrollPrev:u}=xt();return T.jsxs(Qt,{ref:i,variant:n,size:e,className:pt("absolute  h-8 w-8 rounded-full disabled:opacity-0",r==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:o,...s,children:[T.jsx(Sn,{className:"h-4 w-4"}),T.jsx("span",{className:"sr-only",children:"Previous slide"})]})});en.displayName="CarouselPrevious";const on=D.forwardRef(({className:t,variant:n="outline",size:e="icon",...s},i)=>{const{orientation:r,scrollNext:o,canScrollNext:u}=xt();return T.jsxs(Qt,{ref:i,variant:n,size:e,className:pt("absolute h-8 w-8 rounded-full disabled:opacity-0 text-gray-400 hover:bg-white hover:bg-opacity-50",r==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:o,...s,children:[T.jsx(yn,{className:"h-4 w-4"}),T.jsx("span",{className:"sr-only",children:"Next slide"})]})});on.displayName="CarouselNext";function te(t){return"₩ "+t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const ce=({product:t})=>{const[n,e]=D.useState([]),s=gn();async function i(){const o=[];for(const u of t.productImage){const c=await xn(u);o.push(c)}e(o)}const r=()=>{s(`/product/${t.id}`)};return D.useEffect(()=>{i()},[]),T.jsxs("div",{className:"relative cursor-pointer",onClick:r,children:[T.jsxs(Wt,{children:[T.jsx(tn,{children:n.map((o,u)=>T.jsx(nn,{children:T.jsx("img",{src:o,className:"w-full h-60 object-cover"})},`${t.id}-${u}`))}),T.jsx(en,{variant:"ghost",className:"absolute left-0 "}),T.jsx(on,{variant:"ghost",className:"absolute right-0"})]}),T.jsxs("div",{children:[T.jsx("p",{className:"text-ellipsis	line-clamp-1 text-sm",children:t.productName}),T.jsx("p",{className:"text-base",children:te(t.productPrice)})]})]})};export{ce as P,ie as g,te as p};
