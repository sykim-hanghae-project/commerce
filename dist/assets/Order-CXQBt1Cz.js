import{r as x,j as e,J as re,a as ve,e as ge,L as oe,$ as Ce,z as Pe,W as Oe,C as ne,_ as X,y as Y,x as we,v as Z,s as _e,i as ee,k as $e,d as ke,u as Ee,b as Se,a3 as Ne,a8 as De,E as te,a1 as Me}from"./index-DyzY6ZJS.js";import{o as Re,s as Q,i as Ie,u as qe,F as Le,c as q,d as L,e as U,f as T,I as z,h as K,t as Te}from"./input-Bnpch_CL.js";import{v as se,S as Be,a as Ae,b as We,c as Fe,d as B}from"./select-hN8_c95W.js";import{$ as Qe}from"./index-Ld7vI764.js";import{$ as Ue}from"./index-vVzCxcJx.js";import{C as ze}from"./check-jMnHZxu6.js";import{M as H}from"./Modal-1ivH7i0n.js";import{S as Ke}from"./order-zBTb25aT.js";import{u as He}from"./updateProduct-8felqnc4.js";import{M as Ve}from"./MetaTag-qCC6KGd0.js";import{u as Xe}from"./useMutation-SIOHAvwG.js";import"./index-N5PwOM_v.js";import"./createLucideIcon-SSY--W-o.js";var ce={},ae={},V={};(function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=c.postcodeScriptUrl=void 0;var f="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";c.postcodeScriptUrl="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";var d=function(){var b=null;return function(){var p=0<arguments.length&&arguments[0]!==void 0?arguments[0]:f;return b||(b=new Promise(function(y,g){var v=document.createElement("script");v.src=p,v.onload=function(){var $,S;return($=window)!==null&&$!==void 0&&(S=$.daum)!==null&&S!==void 0&&S.Postcode?y(window.daum.Postcode):void g(new Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."))},v.onerror=function($){return g($)},v.id="daum_postcode_script",document.body.appendChild(v)}),b)}}(),m=d;c.default=m})(V);(function(c){function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},f(t)}Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var d=y(x),m=y(V),b=["scriptUrl","className","style","defaultQuery","autoClose","errorMessage","onComplete","onClose","onResize","onSearch"];function p(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(p=function(s){return s?n:r})(t)}function y(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||f(t)!=="object"&&typeof t!="function")return{default:t};var n=p(r);if(n&&n.has(t))return n.get(t);var s={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in t)if(w!="default"&&Object.prototype.hasOwnProperty.call(t,w)){var k=C?Object.getOwnPropertyDescriptor(t,w):null;k&&(k.get||k.set)?Object.defineProperty(s,w,k):s[w]=t[w]}return s.default=t,n&&n.set(t,s),s}function g(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(C){return Object.getOwnPropertyDescriptor(t,C).enumerable})),n.push.apply(n,s)}return n}function v(t){for(var r,n=1;n<arguments.length;n++)r=arguments[n]==null?{}:arguments[n],n%2?g(Object(r),!0).forEach(function(s){N(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))});return t}function $(t,r){if(t==null)return{};var n,s,C=S(t,r);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(t);for(s=0;s<w.length;s++)n=w[s],0<=r.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(C[n]=t[n])}return C}function S(t,r){if(t==null)return{};var n,s,C={},w=Object.keys(t);for(s=0;s<w.length;s++)n=w[s],0<=r.indexOf(n)||(C[n]=t[n]);return C}function _(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function D(t,r){for(var n,s=0;s<r.length;s++)n=r[s],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function M(t,r,n){return r&&D(t.prototype,r),n&&D(t,n),t}function o(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&l(t,r)}function l(t,r){return l=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n},l(t,r)}function u(t){var r=h();return function(){var n,s=O(t);if(r){var C=O(this).constructor;n=Reflect.construct(s,arguments,C)}else n=s.apply(this,arguments);return a(this,n)}}function a(t,r){return r&&(f(r)==="object"||typeof r=="function")?r:j(t)}function j(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},O(t)}function N(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var A=d.default.createElement("p",null,"현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요."),i={width:"100%",height:400},P={scriptUrl:m.postcodeScriptUrl,errorMessage:A,autoClose:!0},I=function(t){function r(){var s;_(this,r);for(var C=arguments.length,w=Array(C),k=0;k<C;k++)w[k]=arguments[k];return s=n.call.apply(n,[this].concat(w)),N(j(s),"mounted",!1),N(j(s),"wrap",(0,d.createRef)()),N(j(s),"state",{hasError:!1}),N(j(s),"initiate",function(F){if(s.wrap.current){var E=s.props;E.scriptUrl,E.className,E.style;var fe=E.defaultQuery,J=E.autoClose;E.errorMessage;var G=E.onComplete,me=E.onClose,he=E.onResize,be=E.onSearch,ye=$(E,b),je=new F(v(v({},ye),{},{oncomplete:function(xe){G&&G(xe),J&&s.wrap.current&&s.wrap.current.remove()},onsearch:be,onresize:he,onclose:me,width:"100%",height:"100%"}));je.embed(s.wrap.current,{q:fe,autoClose:J})}}),N(j(s),"onError",function(F){console.error(F),s.setState({hasError:!0})}),s}o(r,t);var n=u(r);return M(r,[{key:"componentDidMount",value:function(){var C=this.initiate,w=this.onError,k=this.props.scriptUrl;k&&(this.mounted||((0,m.default)(k).then(C).catch(w),this.mounted=!0))}},{key:"render",value:function(){var C=this.props,w=C.className,k=C.style,F=C.errorMessage,E=this.state.hasError;return d.default.createElement("div",{ref:this.wrap,className:w,style:v(v({},i),k)},E&&F)}}]),r}(d.Component);N(I,"defaultProps",P);var W=I;c.default=W})(ae);var ie={};(function(c){function f(o){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},f(o)}Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var d=x,m=y(V),b=["defaultQuery","left","top","popupKey","popupTitle","autoClose","onComplete","onResize","onClose","onSearch","onError"];function p(o){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(p=function(a){return a?u:l})(o)}function y(o,l){if(!l&&o&&o.__esModule)return o;if(o===null||f(o)!=="object"&&typeof o!="function")return{default:o};var u=p(l);if(u&&u.has(o))return u.get(o);var a={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!="default"&&Object.prototype.hasOwnProperty.call(o,h)){var O=j?Object.getOwnPropertyDescriptor(o,h):null;O&&(O.get||O.set)?Object.defineProperty(a,h,O):a[h]=o[h]}return a.default=o,u&&u.set(o,a),a}function g(o,l){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);l&&(a=a.filter(function(j){return Object.getOwnPropertyDescriptor(o,j).enumerable})),u.push.apply(u,a)}return u}function v(o){for(var l,u=1;u<arguments.length;u++)l=arguments[u]==null?{}:arguments[u],u%2?g(Object(l),!0).forEach(function(a){$(o,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):g(Object(l)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(l,a))});return o}function $(o,l,u){return l in o?Object.defineProperty(o,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[l]=u,o}function S(o,l){if(o==null)return{};var u,a,j=_(o,l);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);for(a=0;a<h.length;a++)u=h[a],0<=l.indexOf(u)||Object.prototype.propertyIsEnumerable.call(o,u)&&(j[u]=o[u])}return j}function _(o,l){if(o==null)return{};var u,a,j={},h=Object.keys(o);for(a=0;a<h.length;a++)u=h[a],0<=l.indexOf(u)||(j[u]=o[u]);return j}function D(){var o=0<arguments.length&&arguments[0]!==void 0?arguments[0]:m.postcodeScriptUrl;(0,d.useEffect)(function(){(0,m.default)(o)},[o]);var l=(0,d.useCallback)(function(u){var a=v({},u),j=a.defaultQuery,h=a.left,O=a.top,N=a.popupKey,A=a.popupTitle,i=a.autoClose,P=a.onComplete,I=a.onResize,W=a.onClose,t=a.onSearch,r=a.onError,n=S(a,b);return(0,m.default)(o).then(function(s){var C=new s(v(v({},n),{},{oncomplete:P,onsearch:t,onresize:I,onclose:W}));C.open({q:j,left:h,top:O,popupTitle:A,popupKey:N,autoClose:i})}).catch(r)},[o]);return l}var M=D;c.default=M})(ie);(function(c){Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"DaumPostcodeEmbed",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(c,"useDaumPostcodePopup",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(c,"loadPostcode",{enumerable:!0,get:function(){return m.default}}),c.default=void 0;var f=b(ae),d=b(ie),m=b(V);function b(y){return y&&y.__esModule?y:{default:y}}var p=f.default;c.default=p})(ce);const Je=({filename:c})=>{const{data:f,isLoading:d,isError:m,error:b}=ve({queryKey:["productImage",c],queryFn:({queryKey:p})=>ge(p[1])});return d?e.jsx(oe,{}):m?(console.log(b),e.jsx("div",{className:"w-24 h-24 bg-gray-100"})):e.jsx("img",{src:f,className:"w-24 h-24 object-cover min-w-24"})},Ge=({imageFilename:c,productName:f,quantity:d,price:m})=>e.jsxs("div",{className:"flex items-center text-sm",children:[e.jsx(Je,{filename:c}),e.jsxs("div",{className:"ml-4 w-full",children:[e.jsx("p",{className:"font-medium mb-2",children:f}),e.jsx("p",{className:"text-gray-500",children:`수량: ${d}개`})]}),e.jsx("p",{className:"min-w-max font-medium",children:re(m*d)})]}),ue="Checkbox",[Ye,Ot]=Ce(ue),[Ze,et]=Ye(ue),tt=x.forwardRef((c,f)=>{const{__scopeCheckbox:d,name:m,checked:b,defaultChecked:p,required:y,disabled:g,value:v="on",onCheckedChange:$,...S}=c,[_,D]=x.useState(null),M=Pe(f,h=>D(h)),o=x.useRef(!1),l=_?!!_.closest("form"):!0,[u=!1,a]=Oe({prop:b,defaultProp:p,onChange:$}),j=x.useRef(u);return x.useEffect(()=>{const h=_==null?void 0:_.form;if(h){const O=()=>a(j.current);return h.addEventListener("reset",O),()=>h.removeEventListener("reset",O)}},[_,a]),x.createElement(Ze,{scope:d,state:u,disabled:g},x.createElement(ne.button,X({type:"button",role:"checkbox","aria-checked":R(u)?"mixed":u,"aria-required":y,"data-state":le(u),"data-disabled":g?"":void 0,disabled:g,value:v},S,{ref:M,onKeyDown:Y(c.onKeyDown,h=>{h.key==="Enter"&&h.preventDefault()}),onClick:Y(c.onClick,h=>{a(O=>R(O)?!0:!O),l&&(o.current=h.isPropagationStopped(),o.current||h.stopPropagation())})})),l&&x.createElement(nt,{control:_,bubbles:!o.current,name:m,value:v,checked:u,required:y,disabled:g,style:{transform:"translateX(-100%)"}}))}),rt="CheckboxIndicator",ot=x.forwardRef((c,f)=>{const{__scopeCheckbox:d,forceMount:m,...b}=c,p=et(rt,d);return x.createElement(we,{present:m||R(p.state)||p.state===!0},x.createElement(ne.span,X({"data-state":le(p.state),"data-disabled":p.disabled?"":void 0},b,{ref:f,style:{pointerEvents:"none",...c.style}})))}),nt=c=>{const{control:f,checked:d,bubbles:m=!0,...b}=c,p=x.useRef(null),y=Qe(d),g=Ue(f);return x.useEffect(()=>{const v=p.current,$=window.HTMLInputElement.prototype,_=Object.getOwnPropertyDescriptor($,"checked").set;if(y!==d&&_){const D=new Event("click",{bubbles:m});v.indeterminate=R(d),_.call(v,R(d)?!1:d),v.dispatchEvent(D)}},[y,d,m]),x.createElement("input",X({type:"checkbox","aria-hidden":!0,defaultChecked:R(d)?!1:d},b,{tabIndex:-1,ref:p,style:{...c.style,...g,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function R(c){return c==="indeterminate"}function le(c){return R(c)?"indeterminate":c?"checked":"unchecked"}const de=tt,st=ot,pe=x.forwardRef(({className:c,...f},d)=>e.jsx(de,{ref:d,className:Z("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",c),...f,children:e.jsx(st,{className:Z("flex items-center justify-center text-current"),children:e.jsx(ze,{className:"h-4 w-4"})})}));pe.displayName=de.displayName;function ct(c){const[f,d]=x.useState(!0),[m,b]=x.useState(null);return x.useEffect(()=>{let p=document.querySelector(`script[src="${c}"]`);p||(p=document.createElement("script"),p.src=c,p.async=!0);const y=()=>d(!1),g=v=>b(v.error);return p.addEventListener("load",y),p.addEventListener("error",g),document.body.appendChild(p),()=>{p==null||p.removeEventListener("load",y),p==null||p.removeEventListener("error",g)}},[c]),[f,m]}const at=(c,f,d,m,b,p)=>{if(!window.IMP)return;const{IMP:y}=window;y.init("imp17582541");const g={pg:"kakaopay",pay_method:"kakaopay",merchant_uid:c,amount:f,name:"XSO",buyer_name:d,buyer_tel:m,buyer_addr:b};y.request_pay(g,p)};async function it(c,f,d,m){const b=se();await _e($e(ke,"orders",b),{id:b,sellerId:c,buyerId:f,productId:d,productQuantity:m,status:Ke.order_completed,createdAt:ee(),updatedAt:ee()})}const ut=(c,f)=>{const d={fields:{productQuantity:{integerValue:`${f}`},updatedAt:{timestampValue:`${new Date().toISOString()}`}}};fetch(`https://firestore.googleapis.com/v1/projects/hh-ecommerce/databases/(default)/documents/products/${c}?currentDocument.exists=true&updateMask.fieldPaths=productQuantity&updateMask.fieldPaths=updatedAt&key=[AIzaSyApV0aZSd9qJqxQ1XyGo8BPJ7u0xDWXHtg] HTTP/1.1`,{method:"PATCH",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(d),keepalive:!0})},wt=()=>{const c=Ee(),f=Se(),m=Ne().state.products,b=De(),[p,y]=x.useState(!1),[g,v]=x.useState(""),[$,S]=ct("https://cdn.iamport.kr/v1/iamport.js"),[_,D]=x.useState(!1);x.useEffect(()=>(o(m),window.addEventListener("unload",M),()=>{window.removeEventListener("unload",M)}),[m,_]);const M=x.useCallback(()=>{console.log("unload"),_||m.forEach(i=>{ut(i.product.id,i.product.productQuantity)})},[m,_]),o=i=>{i.forEach(P=>{He(P.product.id,{productQuantity:P.product.productQuantity-P.quantity})})},l=x.useMemo(()=>{let i=0;for(const P of m)i+=P.product.productPrice*P.quantity;return i},[m]),u=()=>{y(!p)},a=Re({name:Q().min(1,{message:"이름을 입력해주세요."}),address2:Q(),phone1:Q(),phone2:Q().regex(/\d{3,4}/,{message:"숫자 3-4자리"}),phone3:Q().regex(/\d{4}/,{message:"숫자 4자리"}),agreement:Ie()}),j=qe({resolver:Te(a),defaultValues:{name:"",address2:"",phone1:"010",phone2:"",phone3:"",agreement:!1}});function h(i){if(console.log("values",i),!i.agreement){window.alert("구매 진행에 대한 동의가 필요합니다.");return}if(!g){window.alert("주소를 입력해주세요.");return}if(S){window.alert("결제를 진행할 수 없습니다."),window.location.reload();return}at(se(),l,i.name,i.phone1+i.phone2+i.phone3,g+i.address2?` ${i.address2}`:"",N)}const O=Xe({mutationFn:async({items:i})=>{i.forEach(async P=>{await it(P.product.sellerId,c.id,P.product.id,P.quantity)})}}),N=i=>{const{success:P,error_msg:I}=i;if(!P){window.alert(`결제 실패: ${I}`),f("/");return}D(!0),O.mutate({items:m},{onError:W=>{console.log(W)},onSettled:()=>{b({type:"EMPTY"}),f("/mypage/myorder")}})},A=i=>{let P=i.address;i.buildingName&&(P+=` (${i.buildingName})`),v(P)};return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{title:"주문하기 - XSO"}),e.jsxs("div",{className:"p-8 flex flex-col justify-center",id:"orderpage",children:[e.jsx("h1",{className:"h1 mb-8",children:"주문하기"}),e.jsx("div",{children:e.jsx(Le,{...j,children:e.jsxs("form",{onSubmit:j.handleSubmit(h),children:[e.jsx(q,{control:j.control,name:"name",render:({field:i})=>e.jsxs(L,{children:[e.jsx(U,{children:"이름"}),e.jsx(T,{children:e.jsx(z,{...i})}),e.jsx(K,{})]})}),e.jsxs("div",{children:[e.jsx(U,{children:"주소"}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"w-full h-10 bg-white rounded-md border px-3 py-2",children:e.jsx("p",{children:g})}),e.jsx(q,{control:j.control,name:"address2",render:({field:i})=>e.jsxs(L,{className:"mx-4 w-full",children:[e.jsx(T,{children:e.jsx(z,{...i,placeholder:"상세 주소"})}),e.jsx(K,{})]})}),e.jsx(te,{onClick:u,children:"주소 검색"})]})]}),e.jsxs("div",{children:[e.jsx(U,{children:"전화번호"}),e.jsxs("div",{className:"flex",children:[e.jsx(q,{control:j.control,name:"phone1",render:({field:i})=>e.jsx(L,{children:e.jsxs(Be,{...i,onValueChange:i.onChange,children:[e.jsx(T,{children:e.jsx(Ae,{children:e.jsx(We,{})})}),e.jsxs(Fe,{children:[e.jsx(B,{value:"010",children:"010"}),e.jsx(B,{value:"011",children:"011"}),e.jsx(B,{value:"016",children:"016"}),e.jsx(B,{value:"017",children:"017"}),e.jsx(B,{value:"018",children:"018"}),e.jsx(B,{value:"019",children:"019"})]})]})})}),e.jsx("p",{className:"p-2",children:"-"}),e.jsx(q,{control:j.control,name:"phone2",render:({field:i})=>e.jsxs(L,{children:[e.jsx(T,{children:e.jsx(z,{...i})}),e.jsx(K,{})]})}),e.jsx("p",{className:"p-2",children:"-"}),e.jsx(q,{control:j.control,name:"phone3",render:({field:i})=>e.jsxs(L,{children:[e.jsx(T,{children:e.jsx(z,{...i})}),e.jsx(K,{})]})})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("p",{className:"font-semibold",children:"주문 상품"}),e.jsx("div",{className:"my-4 border-y border-black py-4",children:e.jsx("ul",{children:m.map((i,P)=>e.jsx("li",{className:"OrderItem",children:e.jsx(Ge,{imageFilename:i.product.productImage[0],productName:i.product.productName,quantity:i.quantity,price:i.product.productPrice})},`order_product_${P}`))})}),e.jsxs("div",{className:"flex font-semibold",children:[e.jsx("p",{className:"w-full",children:"결제 금액"}),e.jsx("p",{className:"min-w-max",children:re(l)})]})]}),e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx(q,{control:j.control,name:"agreement",render:({field:i})=>e.jsx(L,{children:e.jsx(T,{children:e.jsx(pe,{checked:i.value,onCheckedChange:i.onChange})})})}),e.jsx(U,{className:"ml-4",children:"결제정보를 확인하였으며, 구매진행에 동의합니다."})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(te,{type:"submit",className:"px-8",disabled:!!$,children:"결제 진행"})})]})})}),p&&e.jsx("div",{className:"ModalOutside",children:e.jsxs(H,{className:"w-96",children:[e.jsx(H.Header,{title:"주소 입력",children:e.jsx(H.Close,{onClose:u,children:e.jsx(Me,{})})}),e.jsx(H.Body,{children:e.jsx(ce.DaumPostcodeEmbed,{onComplete:A,onClose:()=>y(!1)})})]})}),O.isLoading&&e.jsx("div",{className:"w-screen h-screen fixed top-0 left-0 flex justify-center items-center",children:e.jsx(oe,{})})]})]})};export{wt as default};