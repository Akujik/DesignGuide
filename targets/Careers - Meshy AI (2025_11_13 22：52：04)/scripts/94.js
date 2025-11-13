try{!function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="77ebe8dc-a622-483b-8e77-eb211eb622fe",e._sentryDebugIdIdentifier="sentry-dbid-77ebe8dc-a622-483b-8e77-eb211eb622fe")}()}catch(e){}!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:bWVzaHktd2ViYXBwLSMx":!0})}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1288,4550,7543],{1473:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(87548);let i=new r.Vector3,a=new r.Vector3,o=new r.Vector3,s=(e,t,n,r=1)=>{let a=i.set(e.x/n.width*2-1,-(2*(e.y/n.height))+1,r);return a.unproject(t),a},l=(e,t,n,r)=>{let i=((e,t,n)=>{let r=n.width/2,i=n.height/2;t.updateMatrixWorld(!1);let a=e.project(t);return a.x=a.x*r+r,a.y=-(a.y*i)+i,a})(o.copy(e),n,r),l=0;for(let o=0;o<2;++o){let d=a.copy(i).setComponent(o,i.getComponent(o)+t),c=s(d,n,r,d.z);l=Math.max(l,e.distanceTo(c))}return l}},5302:(e,t,n)=>{n.d(t,{Q6:()=>F,bL:()=>W,zi:()=>G,CC:()=>N});var r=n(12115),i=n(34212);function a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var o=n(94446),s=n(3468),l=n(23558),d=n(66218),c=n(78108),u=n(84288),f=n(88142),p=n(78625),h=n(95155),v=["PageUp","PageDown"],m=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],y={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},g="Slider",[w,x,b]=(0,p.N)(g),[S,M]=(0,s.A)(g,[b]),[E,A]=S(g),_=r.forwardRef((e,t)=>{let{name:n,min:o=0,max:s=100,step:d=1,orientation:c="horizontal",disabled:u=!1,minStepsBetweenThumbs:f=0,defaultValue:p=[o],value:y,onValueChange:g=()=>{},onValueCommit:x=()=>{},inverted:b=!1,form:S,...M}=e,A=r.useRef(new Set),_=r.useRef(0),k="horizontal"===c,[z=[],C]=(0,l.i)({prop:y,defaultProp:p,onChange:e=>{var t;null==(t=[...A.current][_.current])||t.focus(),g(e)}}),D=r.useRef(z);function U(e,t){let{commit:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit:!1},r=(String(d).split(".")[1]||"").length,a=function(e,t){let n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-o)/d)*d+o,r),l=(0,i.q)(a,[o,s]);C(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}(e,l,t);if(!function(e,t){if(t>0)return Math.min(...e.slice(0,-1).map((t,n)=>e[n+1]-t))>=t;return!0}(r,f*d))return e;{_.current=r.indexOf(l);let t=String(r)!==String(e);return t&&n&&x(r),t?r:e}})}return(0,h.jsx)(E,{scope:e.__scopeSlider,name:n,disabled:u,min:o,max:s,valueIndexToChangeRef:_,thumbs:A.current,values:z,orientation:c,form:S,children:(0,h.jsx)(w.Provider,{scope:e.__scopeSlider,children:(0,h.jsx)(w.Slot,{scope:e.__scopeSlider,children:(0,h.jsx)(k?L:P,{"aria-disabled":u,"data-disabled":u?"":void 0,...M,ref:t,onPointerDown:a(M.onPointerDown,()=>{u||(D.current=z)}),min:o,max:s,inverted:b,onSlideStart:u?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}(z,e);U(e,t)},onSlideMove:u?void 0:function(e){U(e,_.current)},onSlideEnd:u?void 0:function(){let e=D.current[_.current];z[_.current]!==e&&x(z)},onHomeKeyDown:()=>!u&&U(o,0,{commit:!0}),onEndKeyDown:()=>!u&&U(s,z.length-1,{commit:!0}),onStepKeyDown:e=>{let{event:t,direction:n}=e;if(!u){let e=v.includes(t.key)||t.shiftKey&&m.includes(t.key),r=_.current;U(z[r]+d*(e?10:1)*n,r,{commit:!0})}}})})})})});_.displayName=g;var[k,z]=S(g,{startEdge:"left",endEdge:"right",size:"width",direction:1}),L=r.forwardRef((e,t)=>{let{min:n,max:i,dir:a,inverted:s,onSlideStart:l,onSlideMove:c,onSlideEnd:u,onStepKeyDown:f,...p}=e,[v,m]=r.useState(null),g=(0,o.s)(t,e=>m(e)),w=r.useRef(void 0),x=(0,d.jH)(a),b="ltr"===x,S=b&&!s||!b&&s;function M(e){let t=w.current||v.getBoundingClientRect(),r=V([0,t.width],S?[n,i]:[i,n]);return w.current=t,r(e-t.left)}return(0,h.jsx)(k,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width",children:(0,h.jsx)(C,{dir:x,"data-orientation":"horizontal",...p,ref:g,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=M(e.clientX);null==l||l(t)},onSlideMove:e=>{let t=M(e.clientX);null==c||c(t)},onSlideEnd:()=>{w.current=void 0,null==u||u()},onStepKeyDown:e=>{let t=y[S?"from-left":"from-right"].includes(e.key);null==f||f({event:e,direction:t?-1:1})}})})}),P=r.forwardRef((e,t)=>{let{min:n,max:i,inverted:a,onSlideStart:s,onSlideMove:l,onSlideEnd:d,onStepKeyDown:c,...u}=e,f=r.useRef(null),p=(0,o.s)(t,f),v=r.useRef(void 0),m=!a;function g(e){let t=v.current||f.current.getBoundingClientRect(),r=V([0,t.height],m?[i,n]:[n,i]);return v.current=t,r(e-t.top)}return(0,h.jsx)(k,{scope:e.__scopeSlider,startEdge:m?"bottom":"top",endEdge:m?"top":"bottom",size:"height",direction:m?1:-1,children:(0,h.jsx)(C,{"data-orientation":"vertical",...u,ref:p,style:{...u.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=g(e.clientY);null==s||s(t)},onSlideMove:e=>{let t=g(e.clientY);null==l||l(t)},onSlideEnd:()=>{v.current=void 0,null==d||d()},onStepKeyDown:e=>{let t=y[m?"from-bottom":"from-top"].includes(e.key);null==c||c({event:e,direction:t?-1:1})}})})}),C=r.forwardRef((e,t)=>{let{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:o,onHomeKeyDown:s,onEndKeyDown:l,onStepKeyDown:d,...c}=e,u=A(g,n);return(0,h.jsx)(f.sG.span,{...c,ref:t,onKeyDown:a(e.onKeyDown,e=>{"Home"===e.key?(s(e),e.preventDefault()):"End"===e.key?(l(e),e.preventDefault()):v.concat(m).includes(e.key)&&(d(e),e.preventDefault())}),onPointerDown:a(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus():r(e)}),onPointerMove:a(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:a(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),o(e))})})}),D="SliderTrack",U=r.forwardRef((e,t)=>{let{__scopeSlider:n,...r}=e,i=A(D,n);return(0,h.jsx)(f.sG.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...r,ref:t})});U.displayName=D;var I="SliderRange",B=r.forwardRef((e,t)=>{let{__scopeSlider:n,...i}=e,a=A(I,n),s=z(I,n),l=r.useRef(null),d=(0,o.s)(t,l),c=a.values.length,u=a.values.map(e=>H(e,a.min,a.max)),p=c>1?Math.min(...u):0,v=100-Math.max(...u);return(0,h.jsx)(f.sG.span,{"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0,...i,ref:d,style:{...e.style,[s.startEdge]:p+"%",[s.endEdge]:v+"%"}})});B.displayName=I;var R="SliderThumb",O=r.forwardRef((e,t)=>{let n=x(e.__scopeSlider),[i,a]=r.useState(null),s=(0,o.s)(t,e=>a(e)),l=r.useMemo(()=>i?n().findIndex(e=>e.ref.current===i):-1,[n,i]);return(0,h.jsx)(T,{...e,ref:s,index:l})}),T=r.forwardRef((e,t)=>{let{__scopeSlider:n,index:i,name:s,...l}=e,d=A(R,n),c=z(R,n),[p,v]=r.useState(null),m=(0,o.s)(t,e=>v(e)),y=!p||d.form||!!p.closest("form"),g=(0,u.X)(p),x=d.values[i],b=void 0===x?0:H(x,d.min,d.max),S=function(e,t){return t>2?"Value ".concat(e+1," of ").concat(t):2===t?["Minimum","Maximum"][e]:void 0}(i,d.values.length),M=null==g?void 0:g[c.size],E=M?function(e,t,n){let r=e/2,i=V([0,50],[0,r]);return(r-i(t)*n)*n}(M,b,c.direction):0;return r.useEffect(()=>{if(p)return d.thumbs.add(p),()=>{d.thumbs.delete(p)}},[p,d.thumbs]),(0,h.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:"calc(".concat(b,"% + ").concat(E,"px)")},children:[(0,h.jsx)(w.ItemSlot,{scope:e.__scopeSlider,children:(0,h.jsx)(f.sG.span,{role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":d.min,"aria-valuenow":x,"aria-valuemax":d.max,"aria-orientation":d.orientation,"data-orientation":d.orientation,"data-disabled":d.disabled?"":void 0,tabIndex:d.disabled?void 0:0,...l,ref:m,style:void 0===x?{display:"none"}:e.style,onFocus:a(e.onFocus,()=>{d.valueIndexToChangeRef.current=i})})}),y&&(0,h.jsx)(j,{name:null!=s?s:d.name?d.name+(d.values.length>1?"[]":""):void 0,form:d.form,value:x},i)]})});O.displayName=R;var j=r.forwardRef((e,t)=>{let{__scopeSlider:n,value:i,...a}=e,s=r.useRef(null),l=(0,o.s)(s,t),d=(0,c.Z)(i);return r.useEffect(()=>{let e=s.current;if(!e)return;let t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(d!==i&&t){let n=new Event("input",{bubbles:!0});t.call(e,i),e.dispatchEvent(n)}},[d,i]),(0,h.jsx)(f.sG.input,{style:{display:"none"},...a,ref:l,defaultValue:i})});function H(e,t,n){return(0,i.q)(100/(n-t)*(e-t),[0,100])}function V(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}j.displayName="RadioBubbleInput";var W=_,N=U,F=B,G=O},7106:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","paw","IconPaw",[["path",{d:"M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z",key:"svg-0"}],["path",{d:"M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z",key:"svg-1"}],["path",{d:"M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z",key:"svg-2"}],["path",{d:"M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z",key:"svg-3"}],["path",{d:"M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z",key:"svg-4"}]])},12209:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","friends","IconFriends",[["path",{d:"M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5",key:"svg-1"}],["path",{d:"M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4",key:"svg-3"}]])},23796:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","microscope","IconMicroscope",[["path",{d:"M5 21h14",key:"svg-0"}],["path",{d:"M6 18h2",key:"svg-1"}],["path",{d:"M7 18v3",key:"svg-2"}],["path",{d:"M9 11l3 3l6 -6l-3 -3z",key:"svg-3"}],["path",{d:"M10.5 12.5l-1.5 1.5",key:"svg-4"}],["path",{d:"M17 3l3 3",key:"svg-5"}],["path",{d:"M12 21a6 6 0 0 0 3.715 -10.712",key:"svg-6"}]])},36834:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","building-bank","IconBuildingBank",[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M3 10l18 0",key:"svg-1"}],["path",{d:"M5 6l7 -3l7 3",key:"svg-2"}],["path",{d:"M4 10l0 11",key:"svg-3"}],["path",{d:"M20 10l0 11",key:"svg-4"}],["path",{d:"M8 14l0 3",key:"svg-5"}],["path",{d:"M12 14l0 3",key:"svg-6"}],["path",{d:"M16 14l0 3",key:"svg-7"}]])},41137:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(12115);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["INPUT","TEXTAREA","SELECT"],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,r.useEffect)(()=>{let r=r=>{e.forEach(e=>{let[i,a,o={preventDefault:!0}]=e;(e=>(function(e,t){let{alt:n,ctrl:r,meta:i,mod:a,shift:o,key:s}=e,{altKey:l,ctrlKey:d,metaKey:c,shiftKey:u,key:f}=t;if(n!==l)return!1;if(a){if(!d&&!c)return!1}else if(r!==d||i!==c)return!1;return o===u&&!!s&&(f.toLowerCase()===s.toLowerCase()||t.code.replace("Key","").toLowerCase()===s.toLowerCase())})(function(e){let t=e.toLowerCase().split("+").map(e=>e.trim()),n={alt:t.includes("alt"),ctrl:t.includes("ctrl"),meta:t.includes("meta"),mod:t.includes("mod"),shift:t.includes("shift")},r=["alt","ctrl","meta","shift","mod"],i=t.find(e=>!r.includes(e));return{...n,key:i}}(i),e))(r)&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(e.target instanceof HTMLElement)||(n?!t.includes(e.target.tagName):!e.target.isContentEditable&&!t.includes(e.target.tagName))}(r,t,n)&&(o.preventDefault&&r.preventDefault(),a(r))})};return document.documentElement.addEventListener("keydown",r),()=>document.documentElement.removeEventListener("keydown",r)},[e])}},41871:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","palette","IconPalette",[["path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25",key:"svg-0"}],["path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}]])},43646:(e,t,n)=>{let r,i;n.d(t,{E:()=>w});var a=n(56014),o=n(12115),s=n(12669),l=n(87548),d=n(73063);let c=new l.Vector3,u=new l.Vector3,f=new l.Vector3,p=new l.Vector2;function h(e,t,n){let r=c.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}let v=e=>1e-10>Math.abs(e)?0:e;function m(e,t,n=""){let r="matrix3d(";for(let n=0;16!==n;n++)r+=v(t[n]*e.elements[n])+(15!==n?",":")");return n+r}let y=(r=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>m(e,r)),g=(i=e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1],(e,t)=>m(e,i(t),"translate(-50%,-50%)")),w=o.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:m,fullscreen:w,portal:x,distanceFactor:b,sprite:S=!1,transform:M=!1,occlude:E,onOcclude:A,castShadow:_,receiveShadow:k,material:z,geometry:L,zIndexRange:P=[0x1000037,0],calculatePosition:C=h,as:D="div",wrapperClass:U,pointerEvents:I="auto",...B},R)=>{let{gl:O,camera:T,scene:j,size:H,raycaster:V,events:W,viewport:N}=(0,d.A)(),[F]=o.useState(()=>document.createElement(D)),G=o.useRef(null),$=o.useRef(null),K=o.useRef(0),q=o.useRef([0,0]),X=o.useRef(null),Y=o.useRef(null),Z=(null==x?void 0:x.current)||W.connected||O.domElement.parentNode,J=o.useRef(null),Q=o.useRef(!1),ee=o.useMemo(()=>E&&"blending"!==E||Array.isArray(E)&&E.length&&function(e){return e&&"object"==typeof e&&"current"in e}(E[0]),[E]);o.useLayoutEffect(()=>{let e=O.domElement;E&&"blending"===E?(e.style.zIndex=`${Math.floor(P[0]/2)}`,e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[E]),o.useLayoutEffect(()=>{if($.current){let e=G.current=s.createRoot(F);if(j.updateMatrixWorld(),M)F.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{let e=C($.current,T,H);F.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return Z&&(i?Z.prepend(F):Z.appendChild(F)),()=>{Z&&Z.removeChild(F),e.unmount()}}},[Z,M]),o.useLayoutEffect(()=>{U&&(F.className=U)},[U]);let et=o.useMemo(()=>M?{position:"absolute",top:0,left:0,width:H.width,height:H.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:m?"translate3d(-50%,-50%,0)":"none",...w&&{top:-H.height/2,left:-H.width/2,width:H.width,height:H.height},...n},[n,m,w,H,M]),en=o.useMemo(()=>({position:"absolute",pointerEvents:I}),[I]);o.useLayoutEffect(()=>{var t,i;Q.current=!1,M?null==(t=G.current)||t.render(o.createElement("div",{ref:X,style:et},o.createElement("div",{ref:Y,style:en},o.createElement("div",{ref:R,className:r,style:n,children:e})))):null==(i=G.current)||i.render(o.createElement("div",{ref:R,style:et,className:r,children:e}))});let er=o.useRef(!0);(0,d.C)(e=>{if($.current){T.updateMatrixWorld(),$.current.updateWorldMatrix(!0,!1);let e=M?q.current:C($.current,T,H);if(M||Math.abs(K.current-T.zoom)>t||Math.abs(q.current[0]-e[0])>t||Math.abs(q.current[1]-e[1])>t){let t=function(e,t){let n=c.setFromMatrixPosition(e.matrixWorld),r=u.setFromMatrixPosition(t.matrixWorld),i=n.sub(r),a=t.getWorldDirection(f);return i.angleTo(a)>Math.PI/2}($.current,T),n=!1;ee&&(Array.isArray(E)?n=E.map(e=>e.current):"blending"!==E&&(n=[j]));let r=er.current;n?er.current=function(e,t,n,r){let i=c.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),p.set(a.x,a.y),n.setFromCamera(p,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}($.current,T,V,n)&&!t:er.current=!t,r!==er.current&&(A?A(!er.current):F.style.display=er.current?"block":"none");let i=Math.floor(P[0]/2),a=E?ee?[P[0],i]:[i-1,0]:P;if(F.style.zIndex=`${function(e,t,n){if(t instanceof l.PerspectiveCamera||t instanceof l.OrthographicCamera){let r=c.setFromMatrixPosition(e.matrixWorld),i=u.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}($.current,T,a)}`,M){let[e,t]=[H.width/2,H.height/2],n=T.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=T,l=y(T.matrixWorldInverse),d=r?`scale(${n})translate(${v(-(s+a)/2)}px,${v((i+o)/2)}px)`:`translateZ(${n}px)`,c=$.current.matrixWorld;S&&((c=T.matrixWorldInverse.clone().transpose().copyPosition(c).scale($.current.scale)).elements[3]=c.elements[7]=c.elements[11]=0,c.elements[15]=1),F.style.width=H.width+"px",F.style.height=H.height+"px",F.style.perspective=r?"":`${n}px`,X.current&&Y.current&&(X.current.style.transform=`${d}${l}translate(${e}px,${t}px)`,Y.current.style.transform=g(c,1/((b||10)/400)))}else{let t=void 0===b?1:function(e,t){if(t instanceof l.OrthographicCamera)return t.zoom;if(!(t instanceof l.PerspectiveCamera))return 1;{let n=c.setFromMatrixPosition(e.matrixWorld),r=u.setFromMatrixPosition(t.matrixWorld);return 1/(2*Math.tan(t.fov*Math.PI/180/2)*n.distanceTo(r))}}($.current,T)*b;F.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}q.current=e,K.current=T.zoom}}if(!ee&&J.current&&!Q.current)if(M){if(X.current){let e=X.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){let{isOrthographicCamera:t}=T;if(t||L)B.scale&&(Array.isArray(B.scale)?B.scale instanceof l.Vector3?J.current.scale.copy(B.scale.clone().divideScalar(1)):J.current.scale.set(1/B.scale[0],1/B.scale[1],1/B.scale[2]):J.current.scale.setScalar(1/B.scale));else{let t=(b||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;J.current.scale.set(n,r,1)}Q.current=!0}}}else{let t=F.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){let e=1/N.factor,n=t.clientWidth*e,r=t.clientHeight*e;J.current.scale.set(n,r,1),Q.current=!0}J.current.lookAt(e.camera.position)}});let ei=o.useMemo(()=>({vertexShader:M?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[M]);return o.createElement("group",(0,a.A)({},B,{ref:$}),E&&!ee&&o.createElement("mesh",{castShadow:_,receiveShadow:k,ref:J},L||o.createElement("planeGeometry",null),z||o.createElement("shaderMaterial",{side:l.DoubleSide,vertexShader:ei.vertexShader,fragmentShader:ei.fragmentShader})))})},44995:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","music","IconMusic",[["path",{d:"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-0"}],["path",{d:"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}],["path",{d:"M9 17v-13h10v13",key:"svg-2"}],["path",{d:"M9 8h10",key:"svg-3"}]])},45361:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","armchair","IconArmchair",[["path",{d:"M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z",key:"svg-0"}],["path",{d:"M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5",key:"svg-1"}],["path",{d:"M6 19v2",key:"svg-2"}],["path",{d:"M18 19v2",key:"svg-3"}]])},51288:(e,t,n)=>{let r,i;n.d(t,{N:()=>D});var a=n(56014),o=n(12115),s=n(87548),l=n(73063);let d=new s.Box3,c=new s.Vector3;class u extends s.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new s.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new s.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new s.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new s.InterleavedBufferAttribute(n,3,0)),this.setAttribute("instanceEnd",new s.InterleavedBufferAttribute(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new s.InstancedInterleavedBuffer(n,2*t,1);return this.setAttribute("instanceColorStart",new s.InterleavedBufferAttribute(r,t,0)),this.setAttribute("instanceColorEnd",new s.InterleavedBufferAttribute(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new s.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new s.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new s.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)c.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(c)),c.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var f=n(14814);class p extends s.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:s.UniformsUtils.clone(s.UniformsUtils.merge([s.UniformsLib.common,s.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new s.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${f.r>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let h=f.r>=125?"uv1":"uv2",v=new s.Vector4,m=new s.Vector3,y=new s.Vector3,g=new s.Vector4,w=new s.Vector4,x=new s.Vector4,b=new s.Vector3,S=new s.Matrix4,M=new s.Line3,E=new s.Vector3,A=new s.Box3,_=new s.Sphere,k=new s.Vector4;function z(e,t,n){return k.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),k.multiplyScalar(1/k.w),k.x=i/n.width,k.y=i/n.height,k.applyMatrix4(e.projectionMatrixInverse),k.multiplyScalar(1/k.w),Math.abs(Math.max(k.x,k.y))}class L extends s.Mesh{constructor(e=new u,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)m.fromBufferAttribute(t,e),y.fromBufferAttribute(n,e),r[i]=0===i?0:r[i-1],r[i+1]=r[i]+m.distanceTo(y);let i=new s.InstancedInterleavedBuffer(r,2,1);return e.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){let n,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;r=e.ray;let c=this.matrixWorld,u=this.geometry,f=this.material;if(i=f.linewidth+d,null===u.boundingSphere&&u.computeBoundingSphere(),_.copy(u.boundingSphere).applyMatrix4(c),o)n=.5*i;else{let e=Math.max(l.near,_.distanceToPoint(r.origin));n=z(l,e,f.resolution)}if(_.radius+=n,!1!==r.intersectsSphere(_)){if(null===u.boundingBox&&u.computeBoundingBox(),A.copy(u.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,A.distanceToPoint(r.origin));a=z(l,e,f.resolution)}A.expandByScalar(a),!1!==r.intersectsBox(A)&&(o?function(e,t){let n=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let a=0;a<d;a++){M.start.fromBufferAttribute(o,a),M.end.fromBufferAttribute(l,a),M.applyMatrix4(n);let d=new s.Vector3,c=new s.Vector3;r.distanceSqToSegment(M.start,M.end,c,d),c.distanceTo(d)<.5*i&&t.push({point:c,pointOnLine:d,distance:r.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[h]:null})}}(this,t):function(e,t,n){let a=t.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,c=d.attributes.instanceStart,u=d.attributes.instanceEnd,f=Math.min(d.instanceCount,c.count),p=-t.near;r.at(1,x),x.w=1,x.applyMatrix4(t.matrixWorldInverse),x.applyMatrix4(a),x.multiplyScalar(1/x.w),x.x*=o.x/2,x.y*=o.y/2,x.z=0,b.copy(x),S.multiplyMatrices(t.matrixWorldInverse,l);for(let t=0;t<f;t++){if(g.fromBufferAttribute(c,t),w.fromBufferAttribute(u,t),g.w=1,w.w=1,g.applyMatrix4(S),w.applyMatrix4(S),g.z>p&&w.z>p)continue;if(g.z>p){let e=g.z-w.z,t=(g.z-p)/e;g.lerp(w,t)}else if(w.z>p){let e=w.z-g.z,t=(w.z-p)/e;w.lerp(g,t)}g.applyMatrix4(a),w.applyMatrix4(a),g.multiplyScalar(1/g.w),w.multiplyScalar(1/w.w),g.x*=o.x/2,g.y*=o.y/2,w.x*=o.x/2,w.y*=o.y/2,M.start.copy(g),M.start.z=0,M.end.copy(w),M.end.z=0;let d=M.closestPointToPointParameter(b,!0);M.at(d,E);let f=s.MathUtils.lerp(g.z,w.z,d),v=f>=-1&&f<=1,m=b.distanceTo(E)<.5*i;if(v&&m){M.start.fromBufferAttribute(c,t),M.end.fromBufferAttribute(u,t),M.start.applyMatrix4(l),M.end.applyMatrix4(l);let i=new s.Vector3,a=new s.Vector3;r.distanceSqToSegment(M.start,M.end,a,i),n.push({point:a,pointOnLine:i,distance:r.origin.distanceTo(a),object:e,face:null,faceIndex:t,uv:null,[h]:null})}}}(this,l,t))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(v),this.material.uniforms.resolution.value.set(v.z,v.w))}}class P extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(3===t)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class C extends L{constructor(e=new P,t=new p({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let D=o.forwardRef(function({points:e,color:t=0xffffff,vertexColors:n,linewidth:r,lineWidth:i,segments:d,dashed:c,...f},h){var v,m;let y=(0,l.A)(e=>e.size),g=o.useMemo(()=>d?new L:new C,[d]),[w]=o.useState(()=>new p),x=(null==n||null==(v=n[0])?void 0:v.length)===4?4:3,b=o.useMemo(()=>{let r=d?new u:new P,i=e.map(e=>{let t=Array.isArray(e);return e instanceof s.Vector3||e instanceof s.Vector4?[e.x,e.y,e.z]:e instanceof s.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=0xffffff;let e=n.map(e=>e instanceof s.Color?e.toArray():e);r.setColors(e.flat(),x)}return r},[e,d,n,x]);return o.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),o.useLayoutEffect(()=>{c?w.defines.USE_DASH="":delete w.defines.USE_DASH,w.needsUpdate=!0},[c,w]),o.useEffect(()=>()=>{b.dispose(),w.dispose()},[b]),o.createElement("primitive",(0,a.A)({object:g,ref:h},f),o.createElement("primitive",{object:b,attach:"geometry"}),o.createElement("primitive",(0,a.A)({object:w,attach:"material",color:t,vertexColors:!!n,resolution:[y.width,y.height],linewidth:null!=(m=null!=r?r:i)?m:1,dashed:c,transparent:4===x},f)))})},60252:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","cpu","IconCpu",[["path",{d:"M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M9 9h6v6h-6z",key:"svg-1"}],["path",{d:"M3 10h2",key:"svg-2"}],["path",{d:"M3 14h2",key:"svg-3"}],["path",{d:"M10 3v2",key:"svg-4"}],["path",{d:"M14 3v2",key:"svg-5"}],["path",{d:"M21 10h-2",key:"svg-6"}],["path",{d:"M21 14h-2",key:"svg-7"}],["path",{d:"M14 21v-2",key:"svg-8"}],["path",{d:"M10 21v-2",key:"svg-9"}]])},65335:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","burger","IconBurger",[["path",{d:"M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z",key:"svg-0"}],["path",{d:"M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z",key:"svg-1"}],["path",{d:"M5 12h14",key:"svg-2"}]])},70626:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","swords","IconSwords",[["path",{d:"M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z",key:"svg-0"}],["path",{d:"M5 13l6 6",key:"svg-1"}],["path",{d:"M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365",key:"svg-2"}],["path",{d:"M10 5.5l-2 -2.5h-5v5l3 2.5",key:"svg-3"}]])},73768:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","building","IconBuilding",[["path",{d:"M3 21l18 0",key:"svg-0"}],["path",{d:"M9 8l1 0",key:"svg-1"}],["path",{d:"M9 12l1 0",key:"svg-2"}],["path",{d:"M9 16l1 0",key:"svg-3"}],["path",{d:"M14 8l1 0",key:"svg-4"}],["path",{d:"M14 12l1 0",key:"svg-5"}],["path",{d:"M14 16l1 0",key:"svg-6"}],["path",{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16",key:"svg-7"}]])},83157:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","plane-tilt","IconPlaneTilt",[["path",{d:"M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z",key:"svg-0"}]])},92214:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","shirt","IconShirt",[["path",{d:"M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0",key:"svg-0"}]])},94748:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","car","IconCar",[["path",{d:"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5",key:"svg-2"}]])},98278:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","ball-american-football","IconBallAmericanFootball",[["path",{d:"M15 9l-6 6",key:"svg-0"}],["path",{d:"M10 12l2 2",key:"svg-1"}],["path",{d:"M12 10l2 2",key:"svg-2"}],["path",{d:"M8 21a5 5 0 0 0 -5 -5",key:"svg-3"}],["path",{d:"M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5",key:"svg-4"}],["path",{d:"M16 3a5 5 0 0 0 5 5",key:"svg-5"}]])},99729:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(30313).A)("outline","plant","IconPlant",[["path",{d:"M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z",key:"svg-0"}],["path",{d:"M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3",key:"svg-1"}],["path",{d:"M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3",key:"svg-2"}],["path",{d:"M12 15l0 -6",key:"svg-3"}]])}}]);