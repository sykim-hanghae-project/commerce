import{r as g}from"./index-FIlqUQy7.js";function V(){return V=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},V.apply(this,arguments)}function ce(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function te(...e){return r=>e.forEach(t=>ce(t,r))}function Je(...e){return g.useCallback(te(...e),e)}const de=g.forwardRef((e,r)=>{const{children:t,...o}=e,i=g.Children.toArray(t),n=i.find(pe);if(n){const s=n.props.children,a=i.map(d=>d===n?g.Children.count(s)>1?g.Children.only(null):g.isValidElement(s)?s.props.children:null:d);return g.createElement(B,V({},o,{ref:r}),g.isValidElement(s)?g.cloneElement(s,void 0,a):null)}return g.createElement(B,V({},o,{ref:r}),t)});de.displayName="Slot";const B=g.forwardRef((e,r)=>{const{children:t,...o}=e;return g.isValidElement(t)?g.cloneElement(t,{...fe(o,t.props),ref:r?te(r,t.ref):t.ref}):g.Children.count(t)>1?g.Children.only(null):null});B.displayName="SlotClone";const ue=({children:e})=>g.createElement(g.Fragment,null,e);function pe(e){return g.isValidElement(e)&&e.type===ue}function fe(e,r){const t={...r};for(const o in r){const i=e[o],n=r[o];/^on[A-Z]/.test(o)?i&&n?t[o]=(...a)=>{n(...a),i(...a)}:i&&(t[o]=i):o==="style"?t[o]={...i,...n}:o==="className"&&(t[o]=[i,n].filter(Boolean).join(" "))}return{...e,...t}}function oe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=oe(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function be(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=oe(e))&&(o&&(o+=" "),o+=r);return o}const U="-";function ge(e){const r=he(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function i(s){const a=s.split(U);return a[0]===""&&a.length!==1&&a.shift(),ne(a,r)||me(s)}function n(s,a){const d=t[s]||[];return a&&o[s]?[...d,...o[s]]:d}return{getClassGroupId:i,getConflictingClassGroupIds:n}}function ne(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),i=o?ne(e.slice(1),o):void 0;if(i)return i;if(r.validators.length===0)return;const n=e.join(U);return(s=r.validators.find(({validator:a})=>a(n)))==null?void 0:s.classGroupId}const ee=/^\[(.+)\]$/;function me(e){if(ee.test(e)){const r=ee.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function he(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return xe(Object.entries(e.classGroups),t).forEach(([n,s])=>{F(s,o,n,r)}),o}function F(e,r,t,o){e.forEach(i=>{if(typeof i=="string"){const n=i===""?r:re(r,i);n.classGroupId=t;return}if(typeof i=="function"){if(ye(i)){F(i(o),r,t,o);return}r.validators.push({validator:i,classGroupId:t});return}Object.entries(i).forEach(([n,s])=>{F(s,re(r,n),t,o)})})}function re(e,r){let t=e;return r.split(U).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ye(e){return e.isThemeGetter}function xe(e,r){return r?e.map(([t,o])=>{const i=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,a])=>[r+s,a])):n);return[t,i]}):e}function we(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function i(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return i(n,s),s},set(n,s){t.has(n)?t.set(n,s):i(n,s)}}}const se="!";function ve(e){const r=e.separator,t=r.length===1,o=r[0],i=r.length;return function(s){const a=[];let d=0,f=0,p;for(let b=0;b<s.length;b++){let h=s[b];if(d===0){if(h===o&&(t||s.slice(b,b+i)===r)){a.push(s.slice(f,b)),f=b+i;continue}if(h==="/"){p=b;continue}}h==="["?d++:h==="]"&&d--}const m=a.length===0?s:s.substring(f),y=m.startsWith(se),v=y?m.substring(1):m,A=p&&p>f?p-f:void 0;return{modifiers:a,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:A}}}function Ce(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function ke(e){return{cache:we(e.cacheSize),splitModifiers:ve(e),...ge(e)}}const ze=/\s+/;function Se(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:i}=r,n=new Set;return e.trim().split(ze).map(s=>{const{modifiers:a,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=t(s);let m=o(p?f.substring(0,p):f),y=!!p;if(!m){if(!p)return{isTailwindClass:!1,originalClassName:s};if(m=o(f),!m)return{isTailwindClass:!1,originalClassName:s};y=!1}const v=Ce(a).join(":");return{isTailwindClass:!0,modifierId:d?v+se:v,classGroupId:m,originalClassName:s,hasPostfixModifier:y}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:a,classGroupId:d,hasPostfixModifier:f}=s,p=a+d;return n.has(p)?!1:(n.add(p),i(d,f).forEach(m=>n.add(a+m)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ae(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=ie(r))&&(o&&(o+=" "),o+=t);return o}function ie(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=ie(e[o]))&&(t&&(t+=" "),t+=r);return t}function Me(e,...r){let t,o,i,n=s;function s(d){const f=r.reduce((p,m)=>m(p),e());return t=ke(f),o=t.cache.get,i=t.cache.set,n=a,a(d)}function a(d){const f=o(d);if(f)return f;const p=Se(d,t);return i(d,p),p}return function(){return n(Ae.apply(null,arguments))}}function c(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const le=/^\[(?:([a-z-]+):)?(.+)\]$/i,$e=/^\d+\/\d+$/,Ee=new Set(["px","full","screen"]),Re=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Pe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ge=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,je=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ie=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function w(e){return S(e)||Ee.has(e)||$e.test(e)}function k(e){return M(e,"length",Be)}function S(e){return!!e&&!Number.isNaN(Number(e))}function T(e){return M(e,"number",S)}function R(e){return!!e&&Number.isInteger(Number(e))}function Te(e){return e.endsWith("%")&&S(e.slice(0,-1))}function l(e){return le.test(e)}function z(e){return Re.test(e)}const Ve=new Set(["length","size","percentage"]);function Le(e){return M(e,Ve,ae)}function Ne(e){return M(e,"position",ae)}const Oe=new Set(["image","url"]);function We(e){return M(e,Oe,Ue)}function _e(e){return M(e,"",Fe)}function P(){return!0}function M(e,r,t){const o=le.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Be(e){return Pe.test(e)&&!Ge.test(e)}function ae(){return!1}function Fe(e){return je.test(e)}function Ue(e){return Ie.test(e)}function qe(){const e=c("colors"),r=c("spacing"),t=c("blur"),o=c("brightness"),i=c("borderColor"),n=c("borderRadius"),s=c("borderSpacing"),a=c("borderWidth"),d=c("contrast"),f=c("grayscale"),p=c("hueRotate"),m=c("invert"),y=c("gap"),v=c("gradientColorStops"),A=c("gradientColorStopPositions"),b=c("inset"),h=c("margin"),C=c("opacity"),x=c("padding"),q=c("saturate"),L=c("scale"),H=c("sepia"),Z=c("skew"),J=c("space"),X=c("translate"),N=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",l,r],u=()=>[l,r],K=()=>["",w,k],G=()=>["auto",S,l],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],j=()=>["solid","dashed","dotted","double","none"],Y=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],_=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",l],D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>[S,T],I=()=>[S,l];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[w,k],blur:["none","",z,l],brightness:E(),borderColor:[e],borderRadius:["none","","full",z,l],borderSpacing:u(),borderWidth:K(),contrast:E(),grayscale:$(),hueRotate:I(),invert:$(),gap:u(),gradientColorStops:[e],gradientColorStopPositions:[Te,k],inset:W(),margin:W(),opacity:E(),padding:u(),saturate:E(),scale:E(),sepia:$(),skew:I(),space:u(),translate:u()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),l]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,l]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",R,l]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",R,l]},l]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[R,l]},l]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[y]}],"gap-x":[{"gap-x":[y]}],"gap-y":[{"gap-y":[y]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",z,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",S,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",w,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...j(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",w,k]}],"underline-offset":[{"underline-offset":["auto",w,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:u()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),Ne]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Le]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},We]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...j(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:j()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...j()]}],"outline-offset":[{"outline-offset":[w,l]}],"outline-w":[{outline:[w,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:K()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[w,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,_e]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":Y()}],"bg-blend":[{"bg-blend":Y()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",z,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[m]}],saturate:[{saturate:[q]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[R,l]}],"translate-x":[{"translate-x":[X]}],"translate-y":[{"translate-y":[X]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":u()}],"scroll-mx":[{"scroll-mx":u()}],"scroll-my":[{"scroll-my":u()}],"scroll-ms":[{"scroll-ms":u()}],"scroll-me":[{"scroll-me":u()}],"scroll-mt":[{"scroll-mt":u()}],"scroll-mr":[{"scroll-mr":u()}],"scroll-mb":[{"scroll-mb":u()}],"scroll-ml":[{"scroll-ml":u()}],"scroll-p":[{"scroll-p":u()}],"scroll-px":[{"scroll-px":u()}],"scroll-py":[{"scroll-py":u()}],"scroll-ps":[{"scroll-ps":u()}],"scroll-pe":[{"scroll-pe":u()}],"scroll-pt":[{"scroll-pt":u()}],"scroll-pr":[{"scroll-pr":u()}],"scroll-pb":[{"scroll-pb":u()}],"scroll-pl":[{"scroll-pl":u()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[w,k,T]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const He=Me(qe),Xe=(...e)=>He(be(e));export{Je as $,V as _,de as a,be as b,Xe as c,te as d};
