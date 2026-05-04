(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ka={exports:{}},no={},qa={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),ic=Symbol.for("react.portal"),ac=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),Ii=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Ii&&e[Ii]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ja=Object.assign,Ya={};function lt(e,n,t){this.props=e,this.context=n,this.refs=Ya,this.updater=t||Xa}lt.prototype.isReactComponent={};lt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};lt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ga(){}Ga.prototype=lt.prototype;function Bl(e,n,t){this.props=e,this.context=n,this.refs=Ya,this.updater=t||Xa}var $l=Bl.prototype=new Ga;$l.constructor=Bl;Ja($l,lt.prototype);$l.isPureReactComponent=!0;var Di=Array.isArray,Za=Object.prototype.hasOwnProperty,Hl={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,o={},l=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(l=""+n.key),n)Za.call(n,r)&&!ba.hasOwnProperty(r)&&(o[r]=n[r]);var a=arguments.length-2;if(a===1)o.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Xt,type:e,key:l,ref:i,props:o,_owner:Hl.current}}function yc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function gc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fi=/\/+/g;function ko(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):n.toString(36)}function xr(e,n,t,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xt:case ic:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ko(i,0):r,Di(o)?(t="",e!=null&&(t=e.replace(Fi,"$&/")+"/"),xr(o,n,t,"",function(c){return c})):o!=null&&(Vl(o)&&(o=yc(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Fi,"$&/")+"/")+e)),n.push(o)),1;if(i=0,r=r===""?".":r+":",Di(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+ko(l,a);i+=xr(l,n,t,u,o)}else if(u=hc(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+ko(l,a++),i+=xr(l,n,t,u,o);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function nr(e,n,t){if(e==null)return e;var r=[],o=0;return xr(e,r,"","",function(l){return n.call(t,l,o++)}),r}function xc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Sr={transition:null},Sc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:Hl};function nu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=lt;z.Fragment=ac;z.Profiler=sc;z.PureComponent=Bl;z.StrictMode=uc;z.Suspense=pc;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sc;z.act=nu;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ja({},e.props),o=e.key,l=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,i=Hl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Za.call(n,u)&&!ba.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xt,type:e.type,key:o,ref:l,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};z.createElement=eu;z.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:fc,render:e}};z.isValidElement=Vl;z.lazy=function(e){return{$$typeof:vc,_payload:{_status:-1,_result:e},_init:xc}};z.memo=function(e,n){return{$$typeof:mc,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=n}};z.unstable_act=nu;z.useCallback=function(e,n){return ue.current.useCallback(e,n)};z.useContext=function(e){return ue.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};z.useEffect=function(e,n){return ue.current.useEffect(e,n)};z.useId=function(){return ue.current.useId()};z.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return ue.current.useMemo(e,n)};z.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};z.useRef=function(e){return ue.current.useRef(e)};z.useState=function(e){return ue.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return ue.current.useTransition()};z.version="18.3.1";qa.exports=z;var b=qa.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=b,wc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Cc=Object.prototype.hasOwnProperty,jc=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,o={},l=null,i=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Cc.call(n,r)&&!Pc.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:wc,type:e,key:l,ref:i,props:o,_owner:jc.current}}no.Fragment=Ec;no.jsx=tu;no.jsxs=tu;Ka.exports=no;var p=Ka.exports,ru={exports:{}},xe={},ou={exports:{}},lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,_){var L=C.length;C.push(_);e:for(;0<L;){var Q=L-1>>>1,J=C[Q];if(0<o(J,_))C[Q]=_,C[L]=J,L=Q;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],L=C.pop();if(L!==_){C[0]=L;e:for(var Q=0,J=C.length,bt=J>>>1;Q<bt;){var yn=2*(Q+1)-1,So=C[yn],gn=yn+1,er=C[gn];if(0>o(So,L))gn<J&&0>o(er,So)?(C[Q]=er,C[gn]=L,Q=gn):(C[Q]=So,C[yn]=L,Q=yn);else if(gn<J&&0>o(er,L))C[Q]=er,C[gn]=L,Q=gn;else break e}}return _}function o(C,_){var L=C.sortIndex-_.sortIndex;return L!==0?L:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],h=1,v=null,m=3,x=!1,S=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var _=t(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=C)r(c),_.sortIndex=_.expirationTime,n(u,_);else break;_=t(c)}}function y(C){if(k=!1,f(C),!S)if(t(u)!==null)S=!0,go(E);else{var _=t(c);_!==null&&xo(y,_.startTime-C)}}function E(C,_){S=!1,k&&(k=!1,d(N),N=-1),x=!0;var L=m;try{for(f(_),v=t(u);v!==null&&(!(v.expirationTime>_)||C&&!Ne());){var Q=v.callback;if(typeof Q=="function"){v.callback=null,m=v.priorityLevel;var J=Q(v.expirationTime<=_);_=e.unstable_now(),typeof J=="function"?v.callback=J:v===t(u)&&r(u),f(_)}else r(u);v=t(u)}if(v!==null)var bt=!0;else{var yn=t(c);yn!==null&&xo(y,yn.startTime-_),bt=!1}return bt}finally{v=null,m=L,x=!1}}var j=!1,P=null,N=-1,V=5,R=-1;function Ne(){return!(e.unstable_now()-R<V)}function ut(){if(P!==null){var C=e.unstable_now();R=C;var _=!0;try{_=P(!0,C)}finally{_?st():(j=!1,P=null)}}else j=!1}var st;if(typeof s=="function")st=function(){s(ut)};else if(typeof MessageChannel<"u"){var Oi=new MessageChannel,lc=Oi.port2;Oi.port1.onmessage=ut,st=function(){lc.postMessage(null)}}else st=function(){F(ut,0)};function go(C){P=C,j||(j=!0,st())}function xo(C,_){N=F(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,go(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var L=m;m=_;try{return C()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=m;m=C;try{return _()}finally{m=L}},e.unstable_scheduleCallback=function(C,_,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,C){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=L+J,C={id:h++,callback:_,priorityLevel:C,startTime:L,expirationTime:J,sortIndex:-1},L>Q?(C.sortIndex=L,n(c,C),t(u)===null&&C===t(c)&&(k?(d(N),N=-1):k=!0,xo(y,L-Q))):(C.sortIndex=J,n(u,C),S||x||(S=!0,go(E))),C},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(C){var _=m;return function(){var L=m;m=_;try{return C.apply(this,arguments)}finally{m=L}}}})(lu);ou.exports=lu;var Nc=ou.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=b,ge=Nc;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iu=new Set,Rt={};function Rn(e,n){Zn(e,n),Zn(e+"Capture",n)}function Zn(e,n){for(Rt[e]=n,e=0;e<n.length;e++)iu.add(n[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ai={},Ui={};function zc(e){return Xo.call(Ui,e)?!0:Xo.call(Ai,e)?!1:Lc.test(e)?Ui[e]=!0:(Ai[e]=!0,!1)}function Rc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tc(e,n,t,r){if(n===null||typeof n>"u"||Rc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function se(e,n,t,r,o,l,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new se(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ql=/[\-:]([a-z])/g;function Wl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ql,Wl);ne[n]=new se(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ql,Wl);ne[n]=new se(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ql,Wl);ne[n]=new se(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Kl(e,n,t,r){var o=ne.hasOwnProperty(n)?ne[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Tc(n,t,o,r)&&(t=null),r||o===null?zc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),On=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),Jo=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Yo=Symbol.for("react.suspense"),Go=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,wo;function gt(e){if(wo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wo=n&&n[1]||""}return`
`+wo+e}var Eo=!1;function Co(e,n){if(!e||Eo)return"";Eo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Eo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?gt(e):""}function Mc(e){switch(e.tag){case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return gt("Suspense");case 19:return gt("SuspenseList");case 0:case 2:case 15:return e=Co(e.type,!1),e;case 11:return e=Co(e.type.render,!1),e;case 1:return e=Co(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case On:return"Portal";case Jo:return"Profiler";case ql:return"StrictMode";case Yo:return"Suspense";case Go:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Xl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return n=e.displayName||null,n!==null?n:Zo(e.type)||"Memo";case Ge:n=e._payload,e=e._init;try{return Zo(e(n))}catch{}}return null}function Oc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(n);case 8:return n===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ic(e){var n=cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Ic(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bo(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function $i(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fu(e,n){n=n.checked,n!=null&&Kl(e,"checked",n,!1)}function el(e,n){fu(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?nl(e,n.type,t):n.hasOwnProperty("defaultValue")&&nl(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hi(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function nl(e,n,t){(n!=="number"||Rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function Kn(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function tl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(g(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(g(92));if(xt(t)){if(1<t.length)throw Error(g(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function pu(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Tt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(wt).forEach(function(e){Dc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),wt[n]=wt[e]})});function hu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||wt.hasOwnProperty(e)&&wt[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=hu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Fc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,n){if(n){if(Fc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(g(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(g(61))}if(n.style!=null&&typeof n.style!="object")throw Error(g(62))}}function ll(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,qn=null,Xn=null;function Wi(e){if(e=Gt(e)){if(typeof al!="function")throw Error(g(280));var n=e.stateNode;n&&(n=io(n),al(e.stateNode,e.type,n))}}function gu(e){qn?Xn?Xn.push(e):Xn=[e]:qn=e}function xu(){if(qn){var e=qn,n=Xn;if(Xn=qn=null,Wi(e),n)for(e=0;e<n.length;e++)Wi(n[e])}}function Su(e,n){return e(n)}function ku(){}var jo=!1;function wu(e,n,t){if(jo)return e(n,t);jo=!0;try{return Su(e,n,t)}finally{jo=!1,(qn!==null||Xn!==null)&&(ku(),xu())}}function Mt(e,n){var t=e.stateNode;if(t===null)return null;var r=io(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(g(231,n,typeof t));return t}var ul=!1;if(We)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ul=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{ul=!1}function Ac(e,n,t,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Et=!1,Tr=null,Mr=!1,sl=null,Uc={onError:function(e){Et=!0,Tr=e}};function Bc(e,n,t,r,o,l,i,a,u){Et=!1,Tr=null,Ac.apply(Uc,arguments)}function $c(e,n,t,r,o,l,i,a,u){if(Bc.apply(this,arguments),Et){if(Et){var c=Tr;Et=!1,Tr=null}else throw Error(g(198));Mr||(Mr=!0,sl=c)}}function Tn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ki(e){if(Tn(e)!==e)throw Error(g(188))}function Hc(e){var n=e.alternate;if(!n){if(n=Tn(e),n===null)throw Error(g(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===t)return Ki(o),e;if(l===r)return Ki(o),n;l=l.sibling}throw Error(g(188))}if(t.return!==r.return)t=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===t){i=!0,t=o,r=l;break}if(a===r){i=!0,r=o,t=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===t){i=!0,t=l,r=o;break}if(a===r){i=!0,r=l,t=o;break}a=a.sibling}if(!i)throw Error(g(189))}}if(t.alternate!==r)throw Error(g(190))}if(t.tag!==3)throw Error(g(188));return t.stateNode.current===t?e:n}function Cu(e){return e=Hc(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ju(e);if(n!==null)return n;e=e.sibling}return null}var Pu=ge.unstable_scheduleCallback,qi=ge.unstable_cancelCallback,Vc=ge.unstable_shouldYield,Qc=ge.unstable_requestPaint,W=ge.unstable_now,Wc=ge.unstable_getCurrentPriorityLevel,Gl=ge.unstable_ImmediatePriority,Nu=ge.unstable_UserBlockingPriority,Or=ge.unstable_NormalPriority,Kc=ge.unstable_LowPriority,_u=ge.unstable_IdlePriority,to=null,Ae=null;function qc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(to,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Yc,Xc=Math.log,Jc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Xc(e)/Jc|0)|0}var lr=64,ir=4194304;function St(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=t&268435455;if(i!==0){var a=i&~o;a!==0?r=St(a):(l&=i,l!==0&&(r=St(l)))}else i=t&~o,i!==0?r=St(i):l!==0&&(r=St(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,l=n&-n,o>=l||o===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Te(n),o=1<<t,r|=e[t],n&=~o;return r}function Gc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Te(l),a=1<<i,u=o[i];u===-1?(!(a&t)||a&r)&&(o[i]=Gc(a,n)):u<=n&&(e.expiredLanes|=a),l&=~a}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lu(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function Po(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function bc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Te(t),l=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~l}}function Zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Te(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var M=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,bl,Tu,Mu,Ou,dl=!1,ar=[],rn=null,on=null,ln=null,Ot=new Map,It=new Map,be=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ot.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(n.pointerId)}}function ft(e,n,t,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},n!==null&&(n=Gt(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function nd(e,n,t,r,o){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,o),!0;case"dragenter":return on=ft(on,e,n,t,r,o),!0;case"mouseover":return ln=ft(ln,e,n,t,r,o),!0;case"pointerover":var l=o.pointerId;return Ot.set(l,ft(Ot.get(l)||null,e,n,t,r,o)),!0;case"gotpointercapture":return l=o.pointerId,It.set(l,ft(It.get(l)||null,e,n,t,r,o)),!0}return!1}function Iu(e){var n=kn(e.target);if(n!==null){var t=Tn(n);if(t!==null){if(n=t.tag,n===13){if(n=Eu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=fl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);il=r,t.target.dispatchEvent(r),il=null}else return n=Gt(t),n!==null&&bl(n),e.blockedOn=t,!1;n.shift()}return!0}function Ji(e,n,t){kr(e)&&t.delete(n)}function td(){dl=!1,rn!==null&&kr(rn)&&(rn=null),on!==null&&kr(on)&&(on=null),ln!==null&&kr(ln)&&(ln=null),Ot.forEach(Ji),It.forEach(Ji)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,dl||(dl=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,td)))}function Dt(e){function n(o){return pt(o,e)}if(0<ar.length){pt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&pt(rn,e),on!==null&&pt(on,e),ln!==null&&pt(ln,e),Ot.forEach(n),It.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Iu(t),t.blockedOn===null&&be.shift()}var Jn=Je.ReactCurrentBatchConfig,Dr=!0;function rd(e,n,t,r){var o=M,l=Jn.transition;Jn.transition=null;try{M=1,ei(e,n,t,r)}finally{M=o,Jn.transition=l}}function od(e,n,t,r){var o=M,l=Jn.transition;Jn.transition=null;try{M=4,ei(e,n,t,r)}finally{M=o,Jn.transition=l}}function ei(e,n,t,r){if(Dr){var o=fl(e,n,t,r);if(o===null)Do(e,n,r,Fr,t),Xi(e,r);else if(nd(o,e,n,t,r))r.stopPropagation();else if(Xi(e,r),n&4&&-1<ed.indexOf(e)){for(;o!==null;){var l=Gt(o);if(l!==null&&Ru(l),l=fl(e,n,t,r),l===null&&Do(e,n,r,Fr,t),l===o)break;o=l}o!==null&&r.stopPropagation()}else Do(e,n,r,null,t)}}var Fr=null;function fl(e,n,t,r){if(Fr=null,e=Yl(r),e=kn(e),e!==null)if(n=Tn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fr=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Gl:return 1;case Nu:return 4;case Or:case Kc:return 16;case _u:return 536870912;default:return 16}default:return 16}}var nn=null,ni=null,wr=null;function Fu(){if(wr)return wr;var e,n=ni,t=n.length,r,o="value"in nn?nn.value:nn.textContent,l=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===o[l-r];r++);return wr=o.slice(e,1<r?1-r:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Yi(){return!1}function Se(e){function n(t,r,o,l,i){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:Yi,this.isPropagationStopped=Yi,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ti=Se(it),Yt=$({},it,{view:0,detail:0}),ld=Se(Yt),No,_o,mt,ro=$({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(No=e.screenX-mt.screenX,_o=e.screenY-mt.screenY):_o=No=0,mt=e),No)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Gi=Se(ro),id=$({},ro,{dataTransfer:0}),ad=Se(id),ud=$({},Yt,{relatedTarget:0}),Lo=Se(ud),sd=$({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=Se(sd),dd=$({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=Se(dd),pd=$({},it,{data:0}),Zi=Se(pd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hd[e])?!!n[e]:!1}function ri(){return yd}var gd=$({},Yt,{key:function(e){if(e.key){var n=md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=Se(gd),Sd=$({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bi=Se(Sd),kd=$({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),wd=Se(kd),Ed=$({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cd=Se(Ed),jd=$({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=Se(jd),Nd=[9,13,27,32],oi=We&&"CompositionEvent"in window,Ct=null;We&&"documentMode"in document&&(Ct=document.documentMode);var _d=We&&"TextEvent"in window&&!Ct,Au=We&&(!oi||Ct&&8<Ct&&11>=Ct),ea=" ",na=!1;function Uu(e,n){switch(e){case"keyup":return Nd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Ld(e,n){switch(e){case"compositionend":return Bu(n);case"keypress":return n.which!==32?null:(na=!0,ea);case"textInput":return e=n.data,e===ea&&na?null:e;default:return null}}function zd(e,n){if(Dn)return e==="compositionend"||!oi&&Uu(e,n)?(e=Fu(),wr=ni=nn=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Au&&n.locale!=="ko"?null:n.data;default:return null}}var Rd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Rd[e.type]:n==="textarea"}function $u(e,n,t,r){gu(r),n=Ar(n,"onChange"),0<n.length&&(t=new ti("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var jt=null,Ft=null;function Td(e){Zu(e,0)}function oo(e){var n=Un(e);if(du(n))return e}function Md(e,n){if(e==="change")return n}var Hu=!1;if(We){var zo;if(We){var Ro="oninput"in document;if(!Ro){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Ro=typeof ra.oninput=="function"}zo=Ro}else zo=!1;Hu=zo&&(!document.documentMode||9<document.documentMode)}function oa(){jt&&(jt.detachEvent("onpropertychange",Vu),Ft=jt=null)}function Vu(e){if(e.propertyName==="value"&&oo(Ft)){var n=[];$u(n,Ft,e,Yl(e)),wu(Td,n)}}function Od(e,n,t){e==="focusin"?(oa(),jt=n,Ft=t,jt.attachEvent("onpropertychange",Vu)):e==="focusout"&&oa()}function Id(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(Ft)}function Dd(e,n){if(e==="click")return oo(n)}function Fd(e,n){if(e==="input"||e==="change")return oo(n)}function Ad(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Ad;function At(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Xo.call(n,o)||!Oe(e[o],n[o]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,n){var t=la(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=la(t)}}function Qu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wu(){for(var e=window,n=Rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rr(e.document)}return n}function li(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ud(e){var n=Wu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qu(t.ownerDocument.documentElement,t)){if(r!==null&&li(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ia(t,l);var i=ia(t,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bd=We&&"documentMode"in document&&11>=document.documentMode,Fn=null,pl=null,Pt=null,ml=!1;function aa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ml||Fn==null||Fn!==Rr(r)||(r=Fn,"selectionStart"in r&&li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pt&&At(Pt,r)||(Pt=r,r=Ar(pl,"onSelect"),0<r.length&&(n=new ti("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Fn)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var An={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},To={},Ku={};We&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function lo(e){if(To[e])return To[e];if(!An[e])return e;var n=An[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ku)return To[e]=n[t];return e}var qu=lo("animationend"),Xu=lo("animationiteration"),Ju=lo("animationstart"),Yu=lo("transitionend"),Gu=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Gu.set(e,n),Rn(n,[e])}for(var Mo=0;Mo<ua.length;Mo++){var Oo=ua[Mo],$d=Oo.toLowerCase(),Hd=Oo[0].toUpperCase()+Oo.slice(1);mn($d,"on"+Hd)}mn(qu,"onAnimationEnd");mn(Xu,"onAnimationIteration");mn(Ju,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Yu,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function sa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,$c(r,n,void 0,e),e.currentTarget=null}function Zu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;sa(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;sa(o,a,c),l=u}}}if(Mr)throw e=sl,Mr=!1,sl=null,e}function I(e,n){var t=n[xl];t===void 0&&(t=n[xl]=new Set);var r=e+"__bubble";t.has(r)||(bu(n,e,2,!1),t.add(r))}function Io(e,n,t){var r=0;n&&(r|=4),bu(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[cr]){e[cr]=!0,iu.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Io(t,!1,e),Io(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Io("selectionchange",!1,n))}}function bu(e,n,t,r){switch(Du(n)){case 1:var o=rd;break;case 4:o=od;break;default:o=ei}t=o.bind(null,n,t,e),o=void 0,!ul||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Do(e,n,t,r,o){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=kn(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}wu(function(){var c=l,h=Yl(t),v=[];e:{var m=Gu.get(e);if(m!==void 0){var x=ti,S=e;switch(e){case"keypress":if(Er(t)===0)break e;case"keydown":case"keyup":x=xd;break;case"focusin":S="focus",x=Lo;break;case"focusout":S="blur",x=Lo;break;case"beforeblur":case"afterblur":x=Lo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wd;break;case qu:case Xu:case Ju:x=cd;break;case Yu:x=Cd;break;case"scroll":x=ld;break;case"wheel":x=Pd;break;case"copy":case"cut":case"paste":x=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bi}var k=(n&4)!==0,F=!k&&e==="scroll",d=k?m!==null?m+"Capture":null:m;k=[];for(var s=c,f;s!==null;){f=s;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=Mt(s,d),y!=null&&k.push(Bt(s,y,f)))),F)break;s=s.return}0<k.length&&(m=new x(m,S,null,t,h),v.push({event:m,listeners:k}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==il&&(S=t.relatedTarget||t.fromElement)&&(kn(S)||S[Ke]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=t.relatedTarget||t.toElement,x=c,S=S?kn(S):null,S!==null&&(F=Tn(S),S!==F||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(k=Gi,y="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=bi,y="onPointerLeave",d="onPointerEnter",s="pointer"),F=x==null?m:Un(x),f=S==null?m:Un(S),m=new k(y,s+"leave",x,t,h),m.target=F,m.relatedTarget=f,y=null,kn(h)===c&&(k=new k(d,s+"enter",S,t,h),k.target=f,k.relatedTarget=F,y=k),F=y,x&&S)n:{for(k=x,d=S,s=0,f=k;f;f=Mn(f))s++;for(f=0,y=d;y;y=Mn(y))f++;for(;0<s-f;)k=Mn(k),s--;for(;0<f-s;)d=Mn(d),f--;for(;s--;){if(k===d||d!==null&&k===d.alternate)break n;k=Mn(k),d=Mn(d)}k=null}else k=null;x!==null&&ca(v,m,x,k,!1),S!==null&&F!==null&&ca(v,F,S,k,!0)}}e:{if(m=c?Un(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var E=Md;else if(ta(m))if(Hu)E=Fd;else{E=Id;var j=Od}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Dd);if(E&&(E=E(e,c))){$u(v,E,t,h);break e}j&&j(e,m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&nl(m,"number",m.value)}switch(j=c?Un(c):window,e){case"focusin":(ta(j)||j.contentEditable==="true")&&(Fn=j,pl=c,Pt=null);break;case"focusout":Pt=pl=Fn=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,aa(v,t,h);break;case"selectionchange":if(Bd)break;case"keydown":case"keyup":aa(v,t,h)}var P;if(oi)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Dn?Uu(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(Au&&t.locale!=="ko"&&(Dn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Dn&&(P=Fu()):(nn=h,ni="value"in nn?nn.value:nn.textContent,Dn=!0)),j=Ar(c,N),0<j.length&&(N=new Zi(N,e,null,t,h),v.push({event:N,listeners:j}),P?N.data=P:(P=Bu(t),P!==null&&(N.data=P)))),(P=_d?Ld(e,t):zd(e,t))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(h=new Zi("onBeforeInput","beforeinput",null,t,h),v.push({event:h,listeners:c}),h.data=P))}Zu(v,n)})}function Bt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ar(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Mt(e,t),l!=null&&r.unshift(Bt(e,l,o)),l=Mt(e,n),l!=null&&r.push(Bt(e,l,o))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ca(e,n,t,r,o){for(var l=n._reactName,i=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Mt(t,l),u!=null&&i.unshift(Bt(t,u,a))):o||(u=Mt(t,l),u!=null&&i.push(Bt(t,u,a)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Qd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function da(e){return(typeof e=="string"?e:""+e).replace(Qd,`
`).replace(Wd,"")}function dr(e,n,t){if(n=da(n),da(e)!==n&&t)throw Error(g(425))}function Ur(){}var vl=null,hl=null;function yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,Kd=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Xd)}:gl;function Xd(e){setTimeout(function(){throw e})}function Fo(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Dt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Dt(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),Fe="__reactFiber$"+at,$t="__reactProps$"+at,Ke="__reactContainer$"+at,xl="__reactEvents$"+at,Jd="__reactListeners$"+at,Yd="__reactHandles$"+at;function kn(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=pa(e);e!==null;){if(t=e[Fe])return t;e=pa(e)}return n}e=t,t=e.parentNode}return null}function Gt(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function io(e){return e[$t]||null}var Sl=[],Bn=-1;function vn(e){return{current:e}}function D(e){0>Bn||(e.current=Sl[Bn],Sl[Bn]=null,Bn--)}function O(e,n){Bn++,Sl[Bn]=e.current,e.current=n}var pn={},le=vn(pn),fe=vn(!1),Pn=pn;function bn(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in t)o[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function pe(e){return e=e.childContextTypes,e!=null}function Br(){D(fe),D(le)}function ma(e,n,t){if(le.current!==pn)throw Error(g(168));O(le,n),O(fe,t)}function es(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(g(108,Oc(e)||"Unknown",o));return $({},t,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=le.current,O(le,e),O(fe,fe.current),!0}function va(e,n,t){var r=e.stateNode;if(!r)throw Error(g(169));t?(e=es(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,D(fe),D(le),O(le,e)):D(fe),O(fe,t)}var $e=null,ao=!1,Ao=!1;function ns(e){$e===null?$e=[e]:$e.push(e)}function Gd(e){ao=!0,ns(e)}function hn(){if(!Ao&&$e!==null){Ao=!0;var e=0,n=M;try{var t=$e;for(M=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}$e=null,ao=!1}catch(o){throw $e!==null&&($e=$e.slice(e+1)),Pu(Gl,hn),o}finally{M=n,Ao=!1}}return null}var $n=[],Hn=0,Hr=null,Vr=0,ke=[],we=0,Nn=null,He=1,Ve="";function xn(e,n){$n[Hn++]=Vr,$n[Hn++]=Hr,Hr=e,Vr=n}function ts(e,n,t){ke[we++]=He,ke[we++]=Ve,ke[we++]=Nn,Nn=e;var r=He;e=Ve;var o=32-Te(r)-1;r&=~(1<<o),t+=1;var l=32-Te(n)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,He=1<<32-Te(n)+o|t<<o|r,Ve=l+e}else He=1<<l|t<<o|r,Ve=e}function ii(e){e.return!==null&&(xn(e,1),ts(e,1,0))}function ai(e){for(;e===Hr;)Hr=$n[--Hn],$n[Hn]=null,Vr=$n[--Hn],$n[Hn]=null;for(;e===Nn;)Nn=ke[--we],ke[we]=null,Ve=ke[--we],ke[we]=null,He=ke[--we],ke[we]=null}var ye=null,he=null,A=!1,Re=null;function rs(e,n){var t=Ee(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ha(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,he=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Nn!==null?{id:He,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ee(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,he=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(A){var n=he;if(n){var t=n;if(!ha(e,n)){if(kl(e))throw Error(g(418));n=an(t.nextSibling);var r=ye;n&&ha(e,n)?rs(r,t):(e.flags=e.flags&-4097|2,A=!1,ye=e)}}else{if(kl(e))throw Error(g(418));e.flags=e.flags&-4097|2,A=!1,ye=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function fr(e){if(e!==ye)return!1;if(!A)return ya(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yl(e.type,e.memoizedProps)),n&&(n=he)){if(kl(e))throw os(),Error(g(418));for(;n;)rs(e,n),n=an(n.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ye?an(e.stateNode.nextSibling):null;return!0}function os(){for(var e=he;e;)e=an(e.nextSibling)}function et(){he=ye=null,A=!1}function ui(e){Re===null?Re=[e]:Re.push(e)}var Zd=Je.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(g(309));var r=t.stateNode}if(!r)throw Error(g(147,e));var o=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},n._stringRef=l,n)}if(typeof e!="string")throw Error(g(284));if(!t._owner)throw Error(g(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ga(e){var n=e._init;return n(e._payload)}function ls(e){function n(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function o(d,s){return d=dn(d,s),d.index=0,d.sibling=null,d}function l(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,y){return s===null||s.tag!==6?(s=Wo(f,d.mode,y),s.return=d,s):(s=o(s,f),s.return=d,s)}function u(d,s,f,y){var E=f.type;return E===In?h(d,s,f.props.children,y,f.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ge&&ga(E)===s.type)?(y=o(s,f.props),y.ref=vt(d,s,f),y.return=d,y):(y=zr(f.type,f.key,f.props,null,d.mode,y),y.ref=vt(d,s,f),y.return=d,y)}function c(d,s,f,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Ko(f,d.mode,y),s.return=d,s):(s=o(s,f.children||[]),s.return=d,s)}function h(d,s,f,y,E){return s===null||s.tag!==7?(s=jn(f,d.mode,y,E),s.return=d,s):(s=o(s,f),s.return=d,s)}function v(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Wo(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tr:return f=zr(s.type,s.key,s.props,null,d.mode,f),f.ref=vt(d,null,s),f.return=d,f;case On:return s=Ko(s,d.mode,f),s.return=d,s;case Ge:var y=s._init;return v(d,y(s._payload),f)}if(xt(s)||ct(s))return s=jn(s,d.mode,f,null),s.return=d,s;pr(d,s)}return null}function m(d,s,f,y){var E=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:a(d,s,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===E?u(d,s,f,y):null;case On:return f.key===E?c(d,s,f,y):null;case Ge:return E=f._init,m(d,s,E(f._payload),y)}if(xt(f)||ct(f))return E!==null?null:h(d,s,f,y,null);pr(d,f)}return null}function x(d,s,f,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,a(s,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tr:return d=d.get(y.key===null?f:y.key)||null,u(s,d,y,E);case On:return d=d.get(y.key===null?f:y.key)||null,c(s,d,y,E);case Ge:var j=y._init;return x(d,s,f,j(y._payload),E)}if(xt(y)||ct(y))return d=d.get(f)||null,h(s,d,y,E,null);pr(s,y)}return null}function S(d,s,f,y){for(var E=null,j=null,P=s,N=s=0,V=null;P!==null&&N<f.length;N++){P.index>N?(V=P,P=null):V=P.sibling;var R=m(d,P,f[N],y);if(R===null){P===null&&(P=V);break}e&&P&&R.alternate===null&&n(d,P),s=l(R,s,N),j===null?E=R:j.sibling=R,j=R,P=V}if(N===f.length)return t(d,P),A&&xn(d,N),E;if(P===null){for(;N<f.length;N++)P=v(d,f[N],y),P!==null&&(s=l(P,s,N),j===null?E=P:j.sibling=P,j=P);return A&&xn(d,N),E}for(P=r(d,P);N<f.length;N++)V=x(P,d,N,f[N],y),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?N:V.key),s=l(V,s,N),j===null?E=V:j.sibling=V,j=V);return e&&P.forEach(function(Ne){return n(d,Ne)}),A&&xn(d,N),E}function k(d,s,f,y){var E=ct(f);if(typeof E!="function")throw Error(g(150));if(f=E.call(f),f==null)throw Error(g(151));for(var j=E=null,P=s,N=s=0,V=null,R=f.next();P!==null&&!R.done;N++,R=f.next()){P.index>N?(V=P,P=null):V=P.sibling;var Ne=m(d,P,R.value,y);if(Ne===null){P===null&&(P=V);break}e&&P&&Ne.alternate===null&&n(d,P),s=l(Ne,s,N),j===null?E=Ne:j.sibling=Ne,j=Ne,P=V}if(R.done)return t(d,P),A&&xn(d,N),E;if(P===null){for(;!R.done;N++,R=f.next())R=v(d,R.value,y),R!==null&&(s=l(R,s,N),j===null?E=R:j.sibling=R,j=R);return A&&xn(d,N),E}for(P=r(d,P);!R.done;N++,R=f.next())R=x(P,d,N,R.value,y),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?N:R.key),s=l(R,s,N),j===null?E=R:j.sibling=R,j=R);return e&&P.forEach(function(ut){return n(d,ut)}),A&&xn(d,N),E}function F(d,s,f,y){if(typeof f=="object"&&f!==null&&f.type===In&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var E=f.key,j=s;j!==null;){if(j.key===E){if(E=f.type,E===In){if(j.tag===7){t(d,j.sibling),s=o(j,f.props.children),s.return=d,d=s;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ge&&ga(E)===j.type){t(d,j.sibling),s=o(j,f.props),s.ref=vt(d,j,f),s.return=d,d=s;break e}t(d,j);break}else n(d,j);j=j.sibling}f.type===In?(s=jn(f.props.children,d.mode,y,f.key),s.return=d,d=s):(y=zr(f.type,f.key,f.props,null,d.mode,y),y.ref=vt(d,s,f),y.return=d,d=y)}return i(d);case On:e:{for(j=f.key;s!==null;){if(s.key===j)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(d,s.sibling),s=o(s,f.children||[]),s.return=d,d=s;break e}else{t(d,s);break}else n(d,s);s=s.sibling}s=Ko(f,d.mode,y),s.return=d,d=s}return i(d);case Ge:return j=f._init,F(d,s,j(f._payload),y)}if(xt(f))return S(d,s,f,y);if(ct(f))return k(d,s,f,y);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(t(d,s.sibling),s=o(s,f),s.return=d,d=s):(t(d,s),s=Wo(f,d.mode,y),s.return=d,d=s),i(d)):t(d,s)}return F}var nt=ls(!0),is=ls(!1),Qr=vn(null),Wr=null,Vn=null,si=null;function ci(){si=Vn=Wr=null}function di(e){var n=Qr.current;D(Qr),e._currentValue=n}function El(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Wr=e,si=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function je(e){var n=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:n,next:null},Vn===null){if(Wr===null)throw Error(g(308));Vn=e,Wr.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return n}var wn=null;function fi(e){wn===null?wn=[e]:wn.push(e)}function as(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,fi(n)):(t.next=o.next,o.next=t),n.interleaved=t,qe(e,r)}function qe(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,qe(e,t)}return o=r.interleaved,o===null?(n.next=n,fi(r)):(n.next=o.next,o.next=n),r.interleaved=n,qe(e,t)}function Cr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}function xa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?o=l=i:l=l.next=i,t=t.next}while(t!==null);l===null?o=l=n:l=l.next=n}else o=l=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,r){var o=e.updateQueue;Ze=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(l!==null){var v=o.baseState;i=0,h=c=u=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,k=a;switch(m=n,x=t,k.tag){case 1:if(S=k.payload,typeof S=="function"){v=S.call(x,v,m);break e}v=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(x,v,m):S,m==null)break e;v=$({},v,m);break e;case 2:Ze=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=v):h=h.next=x,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(u=v),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=h,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else l===null&&(o.shared.lanes=0);Ln|=i,e.lanes=i,e.memoizedState=v}}function Sa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(g(191,o));o.call(r)}}}var Zt={},Ue=vn(Zt),Ht=vn(Zt),Vt=vn(Zt);function En(e){if(e===Zt)throw Error(g(174));return e}function mi(e,n){switch(O(Vt,n),O(Ht,e),O(Ue,Zt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:rl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=rl(n,e)}D(Ue),O(Ue,n)}function tt(){D(Ue),D(Ht),D(Vt)}function ss(e){En(Vt.current);var n=En(Ue.current),t=rl(n,e.type);n!==t&&(O(Ht,e),O(Ue,t))}function vi(e){Ht.current===e&&(D(Ue),D(Ht))}var U=vn(0);function qr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Uo=[];function hi(){for(var e=0;e<Uo.length;e++)Uo[e]._workInProgressVersionPrimary=null;Uo.length=0}var jr=Je.ReactCurrentDispatcher,Bo=Je.ReactCurrentBatchConfig,_n=0,B=null,q=null,Y=null,Xr=!1,Nt=!1,Qt=0,bd=0;function te(){throw Error(g(321))}function yi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function gi(e,n,t,r,o,l){if(_n=l,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jr.current=e===null||e.memoizedState===null?rf:of,e=t(r,o),Nt){l=0;do{if(Nt=!1,Qt=0,25<=l)throw Error(g(301));l+=1,Y=q=null,n.updateQueue=null,jr.current=lf,e=t(r,o)}while(Nt)}if(jr.current=Jr,n=q!==null&&q.next!==null,_n=0,Y=q=B=null,Xr=!1,n)throw Error(g(300));return e}function xi(){var e=Qt!==0;return Qt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?B.memoizedState=Y=e:Y=Y.next=e,Y}function Pe(){if(q===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var n=Y===null?B.memoizedState:Y.next;if(n!==null)Y=n,q=e;else{if(e===null)throw Error(g(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},Y===null?B.memoizedState=Y=e:Y=Y.next=e}return Y}function Wt(e,n){return typeof n=="function"?n(e):n}function $o(e){var n=Pe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=q,o=r.baseQueue,l=t.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,t.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var h=c.lane;if((_n&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=v,i=r):u=u.next=v,B.lanes|=h,Ln|=h}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,Oe(r,n.memoizedState)||(de=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do l=o.lane,B.lanes|=l,Ln|=l,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ho(e){var n=Pe(),t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,l=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Oe(l,n.memoizedState)||(de=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function cs(){}function ds(e,n){var t=B,r=Pe(),o=n(),l=!Oe(r.memoizedState,o);if(l&&(r.memoizedState=o,de=!0),r=r.queue,Si(ms.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Y!==null&&Y.memoizedState.tag&1){if(t.flags|=2048,Kt(9,ps.bind(null,t,r,o,n),void 0,null),G===null)throw Error(g(349));_n&30||fs(t,n,o)}return o}function fs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ps(e,n,t,r){n.value=t,n.getSnapshot=r,vs(n)&&hs(e)}function ms(e,n,t){return t(function(){vs(n)&&hs(e)})}function vs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function hs(e){var n=qe(e,1);n!==null&&Me(n,e,1,-1)}function ka(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},n.queue=e,e=e.dispatch=tf.bind(null,B,e),[n.memoizedState,e]}function Kt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ys(){return Pe().memoizedState}function Pr(e,n,t,r){var o=De();B.flags|=e,o.memoizedState=Kt(1|n,t,void 0,r===void 0?null:r)}function uo(e,n,t,r){var o=Pe();r=r===void 0?null:r;var l=void 0;if(q!==null){var i=q.memoizedState;if(l=i.destroy,r!==null&&yi(r,i.deps)){o.memoizedState=Kt(n,t,l,r);return}}B.flags|=e,o.memoizedState=Kt(1|n,t,l,r)}function wa(e,n){return Pr(8390656,8,e,n)}function Si(e,n){return uo(2048,8,e,n)}function gs(e,n){return uo(4,2,e,n)}function xs(e,n){return uo(4,4,e,n)}function Ss(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ks(e,n,t){return t=t!=null?t.concat([e]):null,uo(4,4,Ss.bind(null,n,e),t)}function ki(){}function ws(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Es(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cs(e,n,t){return _n&21?(Oe(t,n)||(t=Lu(),B.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function ef(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),n()}finally{M=t,Bo.transition=r}}function js(){return Pe().memoizedState}function nf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ps(e))Ns(n,t);else if(t=as(e,n,t,r),t!==null){var o=ae();Me(t,e,r,o),_s(t,n,r)}}function tf(e,n,t){var r=cn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ns(n,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var i=n.lastRenderedState,a=l(i,t);if(o.hasEagerState=!0,o.eagerState=a,Oe(a,i)){var u=n.interleaved;u===null?(o.next=o,fi(n)):(o.next=u.next,u.next=o),n.interleaved=o;return}}catch{}finally{}t=as(e,n,o,r),t!==null&&(o=ae(),Me(t,e,r,o),_s(t,n,r))}}function Ps(e){var n=e.alternate;return e===B||n!==null&&n===B}function Ns(e,n){Nt=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function _s(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}var Jr={readContext:je,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},rf={readContext:je,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:je,useEffect:wa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,Ss.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=De();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=nf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:ka,useDebugValue:ki,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=ka(!1),n=e[0];return e=ef.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,o=De();if(A){if(t===void 0)throw Error(g(407));t=t()}else{if(t=n(),G===null)throw Error(g(349));_n&30||fs(r,n,t)}o.memoizedState=t;var l={value:t,getSnapshot:n};return o.queue=l,wa(ms.bind(null,r,l,e),[e]),r.flags|=2048,Kt(9,ps.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=De(),n=G.identifierPrefix;if(A){var t=Ve,r=He;t=(r&~(1<<32-Te(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=bd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},of={readContext:je,useCallback:ws,useContext:je,useEffect:Si,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:xs,useMemo:Es,useReducer:$o,useRef:ys,useState:function(){return $o(Wt)},useDebugValue:ki,useDeferredValue:function(e){var n=Pe();return Cs(n,q.memoizedState,e)},useTransition:function(){var e=$o(Wt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:js,unstable_isNewReconciler:!1},lf={readContext:je,useCallback:ws,useContext:je,useEffect:Si,useImperativeHandle:ks,useInsertionEffect:gs,useLayoutEffect:xs,useMemo:Es,useReducer:Ho,useRef:ys,useState:function(){return Ho(Wt)},useDebugValue:ki,useDeferredValue:function(e){var n=Pe();return q===null?n.memoizedState=e:Cs(n,q.memoizedState,e)},useTransition:function(){var e=Ho(Wt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:js,unstable_isNewReconciler:!1};function Le(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var so={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ae(),o=cn(e),l=Qe(r,o);l.payload=n,t!=null&&(l.callback=t),n=un(e,l,o),n!==null&&(Me(n,e,o,r),Cr(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ae(),o=cn(e),l=Qe(r,o);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=un(e,l,o),n!==null&&(Me(n,e,o,r),Cr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),r=cn(e),o=Qe(t,r);o.tag=2,n!=null&&(o.callback=n),n=un(e,o,r),n!==null&&(Me(n,e,r,t),Cr(n,e,r))}};function Ea(e,n,t,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(o,l):!0}function Ls(e,n,t){var r=!1,o=pn,l=n.contextType;return typeof l=="object"&&l!==null?l=je(l):(o=pe(n)?Pn:le.current,r=n.contextTypes,l=(r=r!=null)?bn(e,o):pn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=so,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ca(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&so.enqueueReplaceState(n,n.state,null)}function jl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},pi(e);var l=n.contextType;typeof l=="object"&&l!==null?o.context=je(l):(l=pe(n)?Pn:le.current,o.context=bn(e,l)),o.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Cl(e,n,l,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&so.enqueueReplaceState(o,o.state,null),Kr(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Mc(r),r=r.return;while(r);var o=t}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:o,digest:null}}function Vo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var af=typeof WeakMap=="function"?WeakMap:Map;function zs(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Gr||(Gr=!0,Dl=r),Pl(e,n)},t}function Rs(e,n,t){t=Qe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Pl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Pl(e,n),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ja(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new af;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=kf.bind(null,e,n,t),n.then(e,e))}function Pa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Na(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var uf=Je.ReactCurrentOwner,de=!1;function ie(e,n,t,r){n.child=e===null?is(n,null,t,r):nt(n,e.child,t,r)}function _a(e,n,t,r,o){t=t.render;var l=n.ref;return Yn(n,o),r=gi(e,n,t,r,l,o),t=xi(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Xe(e,n,o)):(A&&t&&ii(n),n.flags|=1,ie(e,n,r,o),n.child)}function La(e,n,t,r,o){if(e===null){var l=t.type;return typeof l=="function"&&!Li(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Ts(e,n,l,r,o)):(e=zr(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(i,r)&&e.ref===n.ref)return Xe(e,n,o)}return n.flags|=1,e=dn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Ts(e,n,t,r,o){if(e!==null){var l=e.memoizedProps;if(At(l,r)&&e.ref===n.ref)if(de=!1,n.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Xe(e,n,o)}return Nl(e,n,t,r,o)}function Ms(e,n,t){var r=n.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Wn,ve),ve|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Wn,ve),ve|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,O(Wn,ve),ve|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,O(Wn,ve),ve|=r;return ie(e,n,o,t),n.child}function Os(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Nl(e,n,t,r,o){var l=pe(t)?Pn:le.current;return l=bn(n,l),Yn(n,o),t=gi(e,n,t,r,l,o),r=xi(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Xe(e,n,o)):(A&&r&&ii(n),n.flags|=1,ie(e,n,t,o),n.child)}function za(e,n,t,r,o){if(pe(t)){var l=!0;$r(n)}else l=!1;if(Yn(n,o),n.stateNode===null)Nr(e,n),Ls(n,t,r),jl(n,t,r,o),r=!0;else if(e===null){var i=n.stateNode,a=n.memoizedProps;i.props=a;var u=i.context,c=t.contextType;typeof c=="object"&&c!==null?c=je(c):(c=pe(t)?Pn:le.current,c=bn(n,c));var h=t.getDerivedStateFromProps,v=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ca(n,i,r,c),Ze=!1;var m=n.memoizedState;i.state=m,Kr(n,r,i,o),u=n.memoizedState,a!==r||m!==u||fe.current||Ze?(typeof h=="function"&&(Cl(n,t,h,r),u=n.memoizedState),(a=Ze||Ea(n,t,a,r,m,u,c))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,us(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Le(n.type,a),i.props=c,v=n.pendingProps,m=i.context,u=t.contextType,typeof u=="object"&&u!==null?u=je(u):(u=pe(t)?Pn:le.current,u=bn(n,u));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Ca(n,i,r,u),Ze=!1,m=n.memoizedState,i.state=m,Kr(n,r,i,o);var S=n.memoizedState;a!==v||m!==S||fe.current||Ze?(typeof x=="function"&&(Cl(n,t,x,r),S=n.memoizedState),(c=Ze||Ea(n,t,c,r,m,S,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,S,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,S,u)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),i.props=r,i.state=S,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return _l(e,n,t,r,l,o)}function _l(e,n,t,r,o,l){Os(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return o&&va(n,t,!1),Xe(e,n,l);r=n.stateNode,uf.current=n;var a=i&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=nt(n,e.child,null,l),n.child=nt(n,null,a,l)):ie(e,n,a,l),n.memoizedState=r.state,o&&va(n,t,!0),n.child}function Is(e){var n=e.stateNode;n.pendingContext?ma(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ma(e,n.context,!1),mi(e,n.containerInfo)}function Ra(e,n,t,r,o){return et(),ui(o),n.flags|=256,ie(e,n,t,r),n.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,n,t){var r=n.pendingProps,o=U.current,l=!1,i=(n.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),O(U,o&1),e===null)return wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=r.children,e=r.fallback,l?(r=n.mode,l=n.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=po(i,r,0,null),e=jn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=zl(t),n.memoizedState=Ll,e):wi(n,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return sf(e,n,i,r,a,o,t);if(l){l=r.fallback,i=n.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=dn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=dn(a,l):(l=jn(l,i,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,i=e.child.memoizedState,i=i===null?zl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~t,n.memoizedState=Ll,r}return l=e.child,e=l.sibling,r=dn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function wi(e,n){return n=po({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&ui(r),nt(n,e.child,null,t),e=wi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sf(e,n,t,r,o,l,i){if(t)return n.flags&256?(n.flags&=-257,r=Vo(Error(g(422))),mr(e,n,i,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,o=n.mode,r=po({mode:"visible",children:r.children},o,0,null),l=jn(l,o,i,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&nt(n,e.child,null,i),n.child.memoizedState=zl(i),n.memoizedState=Ll,l);if(!(n.mode&1))return mr(e,n,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(g(419)),r=Vo(l,r,void 0),mr(e,n,i,r)}if(a=(i&e.childLanes)!==0,de||a){if(r=G,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,qe(e,o),Me(r,e,o,-1))}return _i(),r=Vo(Error(g(421))),mr(e,n,i,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=wf.bind(null,e),o._reactRetry=n,null):(e=l.treeContext,he=an(o.nextSibling),ye=n,A=!0,Re=null,e!==null&&(ke[we++]=He,ke[we++]=Ve,ke[we++]=Nn,He=e.id,Ve=e.overflow,Nn=n),n=wi(n,r.children),n.flags|=4096,n)}function Ta(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),El(e.return,n,t)}function Qo(e,n,t,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=o)}function Fs(e,n,t){var r=n.pendingProps,o=r.revealOrder,l=r.tail;if(ie(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,t,n);else if(e.tag===19)Ta(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&qr(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Qo(n,!1,o,t,l);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&qr(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Qo(n,!0,t,null,l);break;case"together":Qo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Nr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(g(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cf(e,n,t){switch(n.tag){case 3:Is(n),et();break;case 5:ss(n);break;case 1:pe(n.type)&&$r(n);break;case 4:mi(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;O(Qr,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?Ds(e,n,t):(O(U,U.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Fs(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,Ms(e,n,t)}return Xe(e,n,t)}var As,Rl,Us,Bs;As=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rl=function(){};Us=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,En(Ue.current);var l=null;switch(t){case"input":o=bo(e,o),r=bo(e,r),l=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":o=tl(e,o),r=tl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ol(t,r);var i;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(t||(t={}),t[i]=u[i])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rt.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&I("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Bs=function(e,n,t,r){t!==r&&(n.flags|=4)};function ht(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function df(e,n,t){var r=n.pendingProps;switch(ai(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return pe(n.type)&&Br(),re(n),null;case 3:return r=n.stateNode,tt(),D(fe),D(le),hi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Ul(Re),Re=null))),Rl(e,n),re(n),null;case 5:vi(n);var o=En(Vt.current);if(t=n.type,e!==null&&n.stateNode!=null)Us(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(g(166));return re(n),null}if(e=En(Ue.current),fr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Fe]=n,r[$t]=l,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(o=0;o<kt.length;o++)I(kt[o],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":$i(r,l),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},I("invalid",r);break;case"textarea":Vi(r,l),I("invalid",r)}ol(t,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),o=["children",""+a]):Rt.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&I("scroll",r)}switch(t){case"input":rr(r),Hi(r,l,!0);break;case"textarea":rr(r),Qi(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ur)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[Fe]=n,e[$t]=r,As(e,n,!1,!1),n.stateNode=e;e:{switch(i=ll(t,r),t){case"dialog":I("cancel",e),I("close",e),o=r;break;case"iframe":case"object":case"embed":I("load",e),o=r;break;case"video":case"audio":for(o=0;o<kt.length;o++)I(kt[o],e);o=r;break;case"source":I("error",e),o=r;break;case"img":case"image":case"link":I("error",e),I("load",e),o=r;break;case"details":I("toggle",e),o=r;break;case"input":$i(e,r),o=bo(e,r),I("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),I("invalid",e);break;case"textarea":Vi(e,r),o=tl(e,r),I("invalid",e);break;default:o=r}ol(t,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?yu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vu(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Tt(e,u):typeof u=="number"&&Tt(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Rt.hasOwnProperty(l)?u!=null&&l==="onScroll"&&I("scroll",e):u!=null&&Kl(e,l,u,i))}switch(t){case"input":rr(e),Hi(e,r,!1);break;case"textarea":rr(e),Qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ur)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Bs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(g(166));if(t=En(Vt.current),En(Ue.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Fe]=n,(l=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Fe]=n,n.stateNode=r}return re(n),null;case 13:if(D(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&n.mode&1&&!(n.flags&128))os(),et(),n.flags|=98560,l=!1;else if(l=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(g(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[Fe]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),l=!1}else Re!==null&&(Ul(Re),Re=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?X===0&&(X=3):_i())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return tt(),Rl(e,n),e===null&&Ut(n.stateNode.containerInfo),re(n),null;case 10:return di(n.type._context),re(n),null;case 17:return pe(n.type)&&Br(),re(n),null;case 19:if(D(U),l=n.memoizedState,l===null)return re(n),null;if(r=(n.flags&128)!==0,i=l.rendering,i===null)if(r)ht(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=qr(e),i!==null){for(n.flags|=128,ht(l,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(U,U.current&1|2),n.child}e=e.sibling}l.tail!==null&&W()>ot&&(n.flags|=128,r=!0,ht(l,!1),n.lanes=4194304)}else{if(!r)if(e=qr(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ht(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!A)return re(n),null}else 2*W()-l.renderingStartTime>ot&&t!==1073741824&&(n.flags|=128,r=!0,ht(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=W(),n.sibling=null,t=U.current,O(U,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Ni(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ve&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(g(156,n.tag))}function ff(e,n){switch(ai(n),n.tag){case 1:return pe(n.type)&&Br(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),D(fe),D(le),hi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vi(n),null;case 13:if(D(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(g(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(U),null;case 4:return tt(),null;case 10:return di(n.type._context),null;case 22:case 23:return Ni(),null;case 24:return null;default:return null}}var vr=!1,oe=!1,pf=typeof WeakSet=="function"?WeakSet:Set,w=null;function Qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){H(e,n,r)}else t.current=null}function Tl(e,n,t){try{t()}catch(r){H(e,n,r)}}var Ma=!1;function mf(e,n){if(vl=Dr,e=Wu(),li(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var i=0,a=-1,u=-1,c=0,h=0,v=e,m=null;n:for(;;){for(var x;v!==t||o!==0&&v.nodeType!==3||(a=i+o),v!==l||r!==0&&v.nodeType!==3||(u=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break n;if(m===t&&++c===o&&(a=i),m===l&&++h===r&&(u=i),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(hl={focusedElem:e,selectionRange:t},Dr=!1,w=n;w!==null;)if(n=w,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,w=e;else for(;w!==null;){n=w;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,F=S.memoizedState,d=n.stateNode,s=d.getSnapshotBeforeUpdate(n.elementType===n.type?k:Le(n.type,k),F);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(y){H(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,w=e;break}w=n.return}return S=Ma,Ma=!1,S}function _t(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Tl(n,t,l)}o=o.next}while(o!==r)}}function co(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ml(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function $s(e){var n=e.alternate;n!==null&&(e.alternate=null,$s(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[$t],delete n[xl],delete n[Jd],delete n[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hs(e){return e.tag===5||e.tag===3||e.tag===4}function Oa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,n,t),e=e.sibling;e!==null;)Ol(e,n,t),e=e.sibling}function Il(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Il(e,n,t),e=e.sibling;e!==null;)Il(e,n,t),e=e.sibling}var Z=null,ze=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Vs(e,n,t),t=t.sibling}function Vs(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(to,t)}catch{}switch(t.tag){case 5:oe||Qn(t,n);case 6:var r=Z,o=ze;Z=null,Ye(e,n,t),Z=r,ze=o,Z!==null&&(ze?(e=Z,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Z.removeChild(t.stateNode));break;case 18:Z!==null&&(ze?(e=Z,t=t.stateNode,e.nodeType===8?Fo(e.parentNode,t):e.nodeType===1&&Fo(e,t),Dt(e)):Fo(Z,t.stateNode));break;case 4:r=Z,o=ze,Z=t.stateNode.containerInfo,ze=!0,Ye(e,n,t),Z=r,ze=o;break;case 0:case 11:case 14:case 15:if(!oe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Tl(t,n,i),o=o.next}while(o!==r)}Ye(e,n,t);break;case 1:if(!oe&&(Qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){H(t,n,a)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(oe=(r=oe)||t.memoizedState!==null,Ye(e,n,t),oe=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function Ia(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pf),n.forEach(function(r){var o=Ef.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var l=e,i=n,a=i;e:for(;a!==null;){switch(a.tag){case 5:Z=a.stateNode,ze=!1;break e;case 3:Z=a.stateNode.containerInfo,ze=!0;break e;case 4:Z=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(Z===null)throw Error(g(160));Vs(l,i,o),Z=null,ze=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){H(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qs(n,e),n=n.sibling}function Qs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Ie(e),r&4){try{_t(3,e,e.return),co(3,e)}catch(k){H(e,e.return,k)}try{_t(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:_e(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return);break;case 5:if(_e(n,e),Ie(e),r&512&&t!==null&&Qn(t,t.return),e.flags&32){var o=e.stateNode;try{Tt(o,"")}catch(k){H(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=t!==null?t.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&fu(o,l),ll(a,i);var c=ll(a,l);for(i=0;i<u.length;i+=2){var h=u[i],v=u[i+1];h==="style"?yu(o,v):h==="dangerouslySetInnerHTML"?vu(o,v):h==="children"?Tt(o,v):Kl(o,h,v,c)}switch(a){case"input":el(o,l);break;case"textarea":pu(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Kn(o,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?Kn(o,!!l.multiple,l.defaultValue,!0):Kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[$t]=l}catch(k){H(e,e.return,k)}}break;case 6:if(_e(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){H(e,e.return,k)}}break;case 3:if(_e(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Dt(n.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:_e(n,e),Ie(e);break;case 13:_e(n,e),Ie(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ji=W())),r&4&&Ia(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,_e(n,e),oe=c):_e(n,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(w=e,h=e.child;h!==null;){for(v=w=h;w!==null;){switch(m=w,x=m.child,m.tag){case 0:case 11:case 14:case 15:_t(4,m,m.return);break;case 1:Qn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(k){H(r,t,k)}}break;case 5:Qn(m,m.return);break;case 22:if(m.memoizedState!==null){Fa(v);continue}}x!==null?(x.return=m,w=x):Fa(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{o=v.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,u=v.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=hu("display",i))}catch(k){H(e,e.return,k)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(k){H(e,e.return,k)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:_e(n,e),Ie(e),r&4&&Ia(e);break;case 21:break;default:_e(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hs(t)){var r=t;break e}t=t.return}throw Error(g(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tt(o,""),r.flags&=-33);var l=Oa(e);Il(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Oa(e);Ol(e,a,i);break;default:throw Error(g(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){w=e,Ws(e)}function Ws(e,n,t){for(var r=(e.mode&1)!==0;w!==null;){var o=w,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||vr;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||oe;a=vr;var c=oe;if(vr=i,(oe=u)&&!c)for(w=o;w!==null;)i=w,u=i.child,i.tag===22&&i.memoizedState!==null?Aa(o):u!==null?(u.return=i,w=u):Aa(o);for(;l!==null;)w=l,Ws(l),l=l.sibling;w=o,vr=a,oe=c}Da(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,w=l):Da(e)}}function Da(e){for(;w!==null;){var n=w;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:oe||co(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!oe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Le(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Sa(n,l,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Sa(n,i,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Dt(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}oe||n.flags&512&&Ml(n)}catch(m){H(n,n.return,m)}}if(n===e){w=null;break}if(t=n.sibling,t!==null){t.return=n.return,w=t;break}w=n.return}}function Fa(e){for(;w!==null;){var n=w;if(n===e){w=null;break}var t=n.sibling;if(t!==null){t.return=n.return,w=t;break}w=n.return}}function Aa(e){for(;w!==null;){var n=w;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{co(4,n)}catch(u){H(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(u){H(n,o,u)}}var l=n.return;try{Ml(n)}catch(u){H(n,l,u)}break;case 5:var i=n.return;try{Ml(n)}catch(u){H(n,i,u)}}}catch(u){H(n,n.return,u)}if(n===e){w=null;break}var a=n.sibling;if(a!==null){a.return=n.return,w=a;break}w=n.return}}var hf=Math.ceil,Yr=Je.ReactCurrentDispatcher,Ei=Je.ReactCurrentOwner,Ce=Je.ReactCurrentBatchConfig,T=0,G=null,K=null,ee=0,ve=0,Wn=vn(0),X=0,qt=null,Ln=0,fo=0,Ci=0,Lt=null,ce=null,ji=0,ot=1/0,Be=null,Gr=!1,Dl=null,sn=null,hr=!1,tn=null,Zr=0,zt=0,Fl=null,_r=-1,Lr=0;function ae(){return T&6?W():_r!==-1?_r:_r=W()}function cn(e){return e.mode&1?T&2&&ee!==0?ee&-ee:Zd.transition!==null?(Lr===0&&(Lr=Lu()),Lr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function Me(e,n,t,r){if(50<zt)throw zt=0,Fl=null,Error(g(185));Jt(e,t,r),(!(T&2)||e!==G)&&(e===G&&(!(T&2)&&(fo|=t),X===4&&en(e,ee)),me(e,r),t===1&&T===0&&!(n.mode&1)&&(ot=W()+500,ao&&hn()))}function me(e,n){var t=e.callbackNode;Zc(e,n);var r=Ir(e,e===G?ee:0);if(r===0)t!==null&&qi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&qi(t),n===1)e.tag===0?Gd(Ua.bind(null,e)):ns(Ua.bind(null,e)),qd(function(){!(T&6)&&hn()}),t=null;else{switch(zu(r)){case 1:t=Gl;break;case 4:t=Nu;break;case 16:t=Or;break;case 536870912:t=_u;break;default:t=Or}t=bs(t,Ks.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ks(e,n){if(_r=-1,Lr=0,T&6)throw Error(g(327));var t=e.callbackNode;if(Gn()&&e.callbackNode!==t)return null;var r=Ir(e,e===G?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=br(e,r);else{n=r;var o=T;T|=2;var l=Xs();(G!==e||ee!==n)&&(Be=null,ot=W()+500,Cn(e,n));do try{xf();break}catch(a){qs(e,a)}while(!0);ci(),Yr.current=l,T=o,K!==null?n=0:(G=null,ee=0,n=X)}if(n!==0){if(n===2&&(o=cl(e),o!==0&&(r=o,n=Al(e,o))),n===1)throw t=qt,Cn(e,0),en(e,r),me(e,W()),t;if(n===6)en(e,r);else{if(o=e.current.alternate,!(r&30)&&!yf(o)&&(n=br(e,r),n===2&&(l=cl(e),l!==0&&(r=l,n=Al(e,l))),n===1))throw t=qt,Cn(e,0),en(e,r),me(e,W()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(g(345));case 2:Sn(e,ce,Be);break;case 3:if(en(e,r),(r&130023424)===r&&(n=ji+500-W(),10<n)){if(Ir(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=gl(Sn.bind(null,e,ce,Be),n);break}Sn(e,ce,Be);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var i=31-Te(r);l=1<<i,i=n[i],i>o&&(o=i),r&=~l}if(r=o,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=gl(Sn.bind(null,e,ce,Be),r);break}Sn(e,ce,Be);break;case 5:Sn(e,ce,Be);break;default:throw Error(g(329))}}}return me(e,W()),e.callbackNode===t?Ks.bind(null,e):null}function Al(e,n){var t=Lt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=br(e,n),e!==2&&(n=ce,ce=t,n!==null&&Ul(n)),e}function Ul(e){ce===null?ce=e:ce.push.apply(ce,e)}function yf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],l=o.getSnapshot;o=o.value;try{if(!Oe(l(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~Ci,n&=~fo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),r=1<<t;e[t]=-1,n&=~r}}function Ua(e){if(T&6)throw Error(g(327));Gn();var n=Ir(e,0);if(!(n&1))return me(e,W()),null;var t=br(e,n);if(e.tag!==0&&t===2){var r=cl(e);r!==0&&(n=r,t=Al(e,r))}if(t===1)throw t=qt,Cn(e,0),en(e,n),me(e,W()),t;if(t===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Sn(e,ce,Be),me(e,W()),null}function Pi(e,n){var t=T;T|=1;try{return e(n)}finally{T=t,T===0&&(ot=W()+500,ao&&hn())}}function zn(e){tn!==null&&tn.tag===0&&!(T&6)&&Gn();var n=T;T|=1;var t=Ce.transition,r=M;try{if(Ce.transition=null,M=1,e)return e()}finally{M=r,Ce.transition=t,T=n,!(T&6)&&hn()}}function Ni(){ve=Wn.current,D(Wn)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tt(),D(fe),D(le),hi();break;case 5:vi(r);break;case 4:tt();break;case 13:D(U);break;case 19:D(U);break;case 10:di(r.type._context);break;case 22:case 23:Ni()}t=t.return}if(G=e,K=e=dn(e.current,null),ee=ve=n,X=0,qt=null,Ci=fo=Ln=0,ce=Lt=null,wn!==null){for(n=0;n<wn.length;n++)if(t=wn[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,l=t.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}t.pending=r}wn=null}return e}function qs(e,n){do{var t=K;try{if(ci(),jr.current=Jr,Xr){for(var r=B.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Xr=!1}if(_n=0,Y=q=B=null,Nt=!1,Qt=0,Ei.current=null,t===null||t.return===null){X=1,qt=n,K=null;break}e:{var l=e,i=t.return,a=t,u=n;if(n=ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Pa(i);if(x!==null){x.flags&=-257,Na(x,i,a,l,n),x.mode&1&&ja(l,c,n),n=x,u=c;var S=n.updateQueue;if(S===null){var k=new Set;k.add(u),n.updateQueue=k}else S.add(u);break e}else{if(!(n&1)){ja(l,c,n),_i();break e}u=Error(g(426))}}else if(A&&a.mode&1){var F=Pa(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Na(F,i,a,l,n),ui(rt(u,a));break e}}l=u=rt(u,a),X!==4&&(X=2),Lt===null?Lt=[l]:Lt.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=zs(l,u,n);xa(l,d);break e;case 1:a=u;var s=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=Rs(l,a,n);xa(l,y);break e}}l=l.return}while(l!==null)}Ys(t)}catch(E){n=E,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Xs(){var e=Yr.current;return Yr.current=Jr,e===null?Jr:e}function _i(){(X===0||X===3||X===2)&&(X=4),G===null||!(Ln&268435455)&&!(fo&268435455)||en(G,ee)}function br(e,n){var t=T;T|=2;var r=Xs();(G!==e||ee!==n)&&(Be=null,Cn(e,n));do try{gf();break}catch(o){qs(e,o)}while(!0);if(ci(),T=t,Yr.current=r,K!==null)throw Error(g(261));return G=null,ee=0,X}function gf(){for(;K!==null;)Js(K)}function xf(){for(;K!==null&&!Vc();)Js(K)}function Js(e){var n=Zs(e.alternate,e,ve);e.memoizedProps=e.pendingProps,n===null?Ys(e):K=n,Ei.current=null}function Ys(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ff(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(t=df(t,n,ve),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);X===0&&(X=5)}function Sn(e,n,t){var r=M,o=Ce.transition;try{Ce.transition=null,M=1,Sf(e,n,t,r)}finally{Ce.transition=o,M=r}return null}function Sf(e,n,t,r){do Gn();while(tn!==null);if(T&6)throw Error(g(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(bc(e,l),e===G&&(K=G=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,bs(Or,function(){return Gn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var i=M;M=1;var a=T;T|=4,Ei.current=null,mf(e,t),Qs(t,e),Ud(hl),Dr=!!vl,hl=vl=null,e.current=t,vf(t),Qc(),T=a,M=i,Ce.transition=l}else e.current=t;if(hr&&(hr=!1,tn=e,Zr=o),l=e.pendingLanes,l===0&&(sn=null),qc(t.stateNode),me(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Gr)throw Gr=!1,e=Dl,Dl=null,e;return Zr&1&&e.tag!==0&&Gn(),l=e.pendingLanes,l&1?e===Fl?zt++:(zt=0,Fl=e):zt=0,hn(),null}function Gn(){if(tn!==null){var e=zu(Zr),n=Ce.transition,t=M;try{if(Ce.transition=null,M=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,Zr=0,T&6)throw Error(g(331));var o=T;for(T|=4,w=e.current;w!==null;){var l=w,i=l.child;if(w.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(w=c;w!==null;){var h=w;switch(h.tag){case 0:case 11:case 15:_t(8,h,l)}var v=h.child;if(v!==null)v.return=h,w=v;else for(;w!==null;){h=w;var m=h.sibling,x=h.return;if($s(h),h===c){w=null;break}if(m!==null){m.return=x,w=m;break}w=x}}}var S=l.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}w=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,w=i;else e:for(;w!==null;){if(l=w,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_t(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,w=d;break e}w=l.return}}var s=e.current;for(w=s;w!==null;){i=w;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,w=f;else e:for(i=s;w!==null;){if(a=w,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:co(9,a)}}catch(E){H(a,a.return,E)}if(a===i){w=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,w=y;break e}w=a.return}}if(T=o,hn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(to,e)}catch{}r=!0}return r}finally{M=t,Ce.transition=n}}return!1}function Ba(e,n,t){n=rt(t,n),n=zs(e,n,1),e=un(e,n,1),n=ae(),e!==null&&(Jt(e,1,n),me(e,n))}function H(e,n,t){if(e.tag===3)Ba(e,e,t);else for(;n!==null;){if(n.tag===3){Ba(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=rt(t,e),e=Rs(n,e,1),n=un(n,e,1),e=ae(),n!==null&&(Jt(n,1,e),me(n,e));break}}n=n.return}}function kf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,G===e&&(ee&t)===t&&(X===4||X===3&&(ee&130023424)===ee&&500>W()-ji?Cn(e,0):Ci|=t),me(e,n)}function Gs(e,n){n===0&&(e.mode&1?(n=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):n=1);var t=ae();e=qe(e,n),e!==null&&(Jt(e,n,t),me(e,t))}function wf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gs(e,t)}function Ef(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(n),Gs(e,t)}var Zs;Zs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,cf(e,n,t);de=!!(e.flags&131072)}else de=!1,A&&n.flags&1048576&&ts(n,Vr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Nr(e,n),e=n.pendingProps;var o=bn(n,le.current);Yn(n,t),o=gi(null,n,r,e,o,t);var l=xi();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(r)?(l=!0,$r(n)):l=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,pi(n),o.updater=so,n.stateNode=o,o._reactInternals=n,jl(n,r,e,t),n=_l(null,n,r,!0,l,t)):(n.tag=0,A&&l&&ii(n),ie(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Nr(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=jf(r),e=Le(r,e),o){case 0:n=Nl(null,n,r,e,t);break e;case 1:n=za(null,n,r,e,t);break e;case 11:n=_a(null,n,r,e,t);break e;case 14:n=La(null,n,r,Le(r.type,e),t);break e}throw Error(g(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Le(r,o),Nl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Le(r,o),za(e,n,r,o,t);case 3:e:{if(Is(n),e===null)throw Error(g(387));r=n.pendingProps,l=n.memoizedState,o=l.element,us(e,n),Kr(n,r,null,t);var i=n.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){o=rt(Error(g(423)),n),n=Ra(e,n,r,t,o);break e}else if(r!==o){o=rt(Error(g(424)),n),n=Ra(e,n,r,t,o);break e}else for(he=an(n.stateNode.containerInfo.firstChild),ye=n,A=!0,Re=null,t=is(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===o){n=Xe(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return ss(n),e===null&&wl(n),r=n.type,o=n.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,yl(r,o)?i=null:l!==null&&yl(r,l)&&(n.flags|=32),Os(e,n),ie(e,n,i,t),n.child;case 6:return e===null&&wl(n),null;case 13:return Ds(e,n,t);case 4:return mi(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Le(r,o),_a(e,n,r,o,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,l=n.memoizedProps,i=o.value,O(Qr,r._currentValue),r._currentValue=i,l!==null)if(Oe(l.value,i)){if(l.children===o.children&&!fe.current){n=Xe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Qe(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),El(l.return,t,n),a.lanes|=t;break}u=u.next}}else if(l.tag===10)i=l.type===n.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(g(341));i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),El(i,t,n),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===n){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ie(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Yn(n,t),o=je(o),r=r(o),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,o=Le(r,n.pendingProps),o=Le(r.type,o),La(e,n,r,o,t);case 15:return Ts(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Le(r,o),Nr(e,n),n.tag=1,pe(r)?(e=!0,$r(n)):e=!1,Yn(n,t),Ls(n,r,o),jl(n,r,o,t),_l(null,n,r,!0,e,t);case 19:return Fs(e,n,t);case 22:return Ms(e,n,t)}throw Error(g(156,n.tag))};function bs(e,n){return Pu(e,n)}function Cf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,n,t,r){return new Cf(e,n,t,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Jl)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Ee(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zr(e,n,t,r,o,l){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case In:return jn(t.children,o,l,n);case ql:i=8,o|=8;break;case Jo:return e=Ee(12,t,n,o|2),e.elementType=Jo,e.lanes=l,e;case Yo:return e=Ee(13,t,n,o),e.elementType=Yo,e.lanes=l,e;case Go:return e=Ee(19,t,n,o),e.elementType=Go,e.lanes=l,e;case su:return po(t,o,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:i=10;break e;case uu:i=9;break e;case Xl:i=11;break e;case Jl:i=14;break e;case Ge:i=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return n=Ee(i,t,n,o),n.elementType=e,n.type=r,n.lanes=l,n}function jn(e,n,t,r){return e=Ee(7,e,r,n),e.lanes=t,e}function po(e,n,t,r){return e=Ee(22,e,r,n),e.elementType=su,e.lanes=t,e.stateNode={isHidden:!1},e}function Wo(e,n,t){return e=Ee(6,e,null,n),e.lanes=t,e}function Ko(e,n,t){return n=Ee(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pf(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Po(0),this.expirationTimes=Po(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zi(e,n,t,r,o,l,i,a,u){return e=new Pf(e,n,t,a,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ee(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(l),e}function Nf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return pn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(g(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(g(171))}if(e.tag===1){var t=e.type;if(pe(t))return es(e,t,n)}return n}function nc(e,n,t,r,o,l,i,a,u){return e=zi(t,r,!0,e,o,l,i,a,u),e.context=ec(null),t=e.current,r=ae(),o=cn(t),l=Qe(r,o),l.callback=n??null,un(t,l,o),e.current.lanes=o,Jt(e,o,r),me(e,r),e}function mo(e,n,t,r){var o=n.current,l=ae(),i=cn(o);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(l,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(o,n,i),e!==null&&(Me(e,o,i,l),Cr(e,o,i)),i}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ri(e,n){$a(e,n),(e=e.alternate)&&$a(e,n)}function _f(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ti(e){this._internalRoot=e}vo.prototype.render=Ti.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(g(409));mo(e,n,null,null)};vo.prototype.unmount=Ti.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zn(function(){mo(null,e,null,null)}),n[Ke]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Mu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Iu(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function Lf(e,n,t,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=eo(i);l.call(c)}}var i=nc(n,r,e,0,null,!1,!1,"",Ha);return e._reactRootContainer=i,e[Ke]=i.current,Ut(e.nodeType===8?e.parentNode:e),zn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=eo(u);a.call(c)}}var u=zi(e,0,!1,null,null,!1,!1,"",Ha);return e._reactRootContainer=u,e[Ke]=u.current,Ut(e.nodeType===8?e.parentNode:e),zn(function(){mo(n,u,t,r)}),u}function yo(e,n,t,r,o){var l=t._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=eo(i);a.call(u)}}mo(n,i,e,o)}else i=Lf(t,n,e,o,r);return eo(i)}Ru=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=St(n.pendingLanes);t!==0&&(Zl(n,t|1),me(n,W()),!(T&6)&&(ot=W()+500,hn()))}break;case 13:zn(function(){var r=qe(e,1);if(r!==null){var o=ae();Me(r,e,1,o)}}),Ri(e,1)}};bl=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var t=ae();Me(n,e,134217728,t)}Ri(e,134217728)}};Tu=function(e){if(e.tag===13){var n=cn(e),t=qe(e,n);if(t!==null){var r=ae();Me(t,e,n,r)}Ri(e,n)}};Mu=function(){return M};Ou=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};al=function(e,n,t){switch(n){case"input":if(el(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=io(r);if(!o)throw Error(g(90));du(r),el(r,o)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&Kn(e,!!t.multiple,n,!1)}};Su=Pi;ku=zn;var zf={usingClientEntryPoint:!1,Events:[Gt,Un,io,gu,xu,Pi]},yt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rf={bundleType:yt.bundleType,version:yt.version,rendererPackageName:yt.rendererPackageName,rendererConfig:yt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:yt.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{to=yr.inject(Rf),Ae=yr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;xe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(n))throw Error(g(200));return Nf(e,n,null,t)};xe.createRoot=function(e,n){if(!Mi(e))throw Error(g(299));var t=!1,r="",o=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=zi(e,1,!1,null,null,t,!1,r,o),e[Ke]=n.current,Ut(e.nodeType===8?e.parentNode:e),new Ti(n)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=Cu(n),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return zn(e)};xe.hydrate=function(e,n,t){if(!ho(n))throw Error(g(200));return yo(null,e,n,!0,t)};xe.hydrateRoot=function(e,n,t){if(!Mi(e))throw Error(g(405));var r=t!=null&&t.hydratedSources||null,o=!1,l="",i=tc;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=nc(n,null,e,1,t??null,o,!1,l,i),e[Ke]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new vo(n)};xe.render=function(e,n,t){if(!ho(n))throw Error(g(200));return yo(null,e,n,!1,t)};xe.unmountComponentAtNode=function(e){if(!ho(e))throw Error(g(40));return e._reactRootContainer?(zn(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};xe.unstable_batchedUpdates=Pi;xe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ho(t))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return yo(e,n,t,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ru.exports=xe;var Tf=ru.exports,oc,Va=Tf;oc=Va.createRoot,Va.hydrateRoot;function Mf(){return p.jsxs("div",{children:[p.jsx("h2",{children:"👋 Hola, Mundo!"}),p.jsx("p",{children:"Este es el componente más simple de React."}),p.jsx("p",{children:"Solo una función que retorna lo que querés mostrar."})]})}const Of={numero:"01",titulo:"Hola Mundo",descripcion:"El componente más simple posible: una función que retorna JSX.",conceptos:["Componente funcional","JSX","export default"],explicacion:`
Un componente de React es, en esencia, una función de JavaScript que devuelve JSX.
JSX es la sintaxis que parece HTML pero se transforma en código JS.

Reglas básicas:
• El nombre del componente arranca con mayúscula (PascalCase).
• Debe devolver un único elemento raíz (o un Fragment <>...</>).
• Se exporta con "export default" para poder usarlo en otros archivos.

Para usarlo en otro lado: <Ejemplo01 />
  `.trim()};function qo({nombre:e,emoji:n}){return p.jsxs("p",{style:{fontSize:"1.2rem"},children:[n," Hola, ",p.jsx("strong",{children:e}),"!"]})}function If(){return p.jsxs("div",{children:[p.jsx(qo,{nombre:"Luciano",emoji:"👋"}),p.jsx(qo,{nombre:"María",emoji:"✨"}),p.jsx(qo,{nombre:"el grupo del M8",emoji:"⚛️"})]})}const Df={numero:"02",titulo:"Props básicas",descripcion:"Pasar datos a un componente para reutilizarlo con distintos valores.",conceptos:["Props","Destructuring","Reutilización"],explicacion:`
Las "props" (propiedades) son cómo un componente padre le pasa datos a un componente hijo.
Funcionan igual que los argumentos de una función.

En este ejemplo, el componente <Saludo /> se reutiliza 3 veces con datos distintos:
solo cambian las props "nombre" y "emoji".

📌 Importante: las props son INMUTABLES. El componente que las recibe NO puede modificarlas.
Si necesita cambiarlas, debe avisarle al padre con una función callback (ver Ejemplo 09).
  `.trim()};function gr({titulo:e,children:n}){const t={border:"2px solid #0969da",borderRadius:"8px",padding:"16px",margin:"12px 0",background:"#f6f8fa"};return p.jsxs("div",{style:t,children:[p.jsx("h3",{style:{marginBottom:"8px"},children:e}),p.jsx("div",{children:n})]})}function Ff(){return p.jsxs("div",{children:[p.jsx("p",{children:'El mismo componente "Caja" envuelve contenidos distintos:'}),p.jsx(gr,{titulo:"📦 Caja con texto",children:p.jsxs("p",{children:["Lo que hay acá adentro llega como la prop ",p.jsx("code",{children:"children"}),"."]})}),p.jsxs(gr,{titulo:"🎨 Caja con varios elementos",children:[p.jsx("p",{children:"Puedo poner cualquier cosa adentro:"}),p.jsxs("ul",{children:[p.jsx("li",{children:"Una lista"}),p.jsx("li",{children:"Otro componente"}),p.jsx("li",{children:"Lo que se te ocurra"})]})]}),p.jsx(gr,{titulo:"🧩 Caja con otra Caja adentro",children:p.jsx(gr,{titulo:"🤯 Inception",children:p.jsx("p",{children:"Las cajas se pueden anidar."})})})]})}const Af={numero:"03",titulo:"Children prop",descripcion:'Cómo crear componentes "wrapper" que reciben contenido entre sus etiquetas.',conceptos:["children","Composición","Reutilización avanzada"],explicacion:`
"children" es una prop especial: contiene todo lo que pongas entre <Componente> y </Componente>.

Esto permite crear componentes "wrapper" o "contenedores" muy flexibles, como:
• Cajas con borde
• Modales
• Cards
• Layouts (Sidebar + Main)

En este ejemplo, el componente <Caja /> es uno solo pero se reutiliza con contenidos
totalmente distintos. Se basa en COMPOSICIÓN, uno de los principios fundamentales de React.
  `.trim()};function Uf(){const[e,n]=b.useState(0),t=()=>n(e+1),r=()=>n(e-1),o=()=>n(0);return p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("h2",{style:{fontSize:"4rem",margin:"20px 0"},children:e}),p.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center"},children:[p.jsx("button",{onClick:r,children:"➖ Restar"}),p.jsx("button",{onClick:o,children:"🔄 Reset"}),p.jsx("button",{onClick:t,children:"➕ Sumar"})]}),p.jsxs("p",{style:{marginTop:"20px",color:"#656d76"},children:["Cada click cambia el estado ",p.jsx("code",{children:"count"}),".",p.jsx("br",{}),"Cuando el estado cambia, React redibuja este componente con el nuevo valor."]})]})}const Bf={numero:"04",titulo:"useState · Contador",descripcion:"El primer hook: useState. Datos que cambian con el tiempo.",conceptos:["useState","Eventos onClick","Re-render automático"],explicacion:`
useState es un "hook" de React que le da MEMORIA a un componente.

Sintaxis:
  const [valor, setValor] = useState(valorInicial);

• valor → el dato actual (lo usás en el JSX).
• setValor → la función para cambiarlo.

REGLA DE ORO: nunca asignás directamente (valor = ...). Siempre usás el setter.
Cuando llamás al setter, React ejecuta de nuevo la función del componente y
actualiza la pantalla con el nuevo valor.

Este es EL concepto más importante de React: la UI es un reflejo del estado.
  `.trim()};function $f(){const[e,n]=b.useState(!1);return p.jsxs("div",{children:[p.jsx("button",{onClick:()=>n(!e),children:e?"🙈 Ocultar contenido":"👀 Mostrar contenido"}),e&&p.jsxs("div",{style:{marginTop:"16px",padding:"20px",background:"#fff8c5",borderLeft:"4px solid #d4a72c",borderRadius:"6px"},children:[p.jsx("h3",{children:"🎉 ¡Sorpresa!"}),p.jsx("p",{children:"Este contenido aparece y desaparece según el estado."}),p.jsx("p",{children:"Notá que el botón también cambia su texto. Eso es porque el JSX se re-renderiza completo cuando el estado cambia."})]}),p.jsxs("p",{style:{marginTop:"16px",color:"#656d76"},children:["Estado actual: ",e?"✅ visible":"❌ oculto"]})]})}const Hf={numero:"05",titulo:"Render condicional",descripcion:"Mostrar u ocultar elementos según el estado, sin manipular el DOM directamente.",conceptos:["Estado booleano","Operador && (and)","Operador ternario"],explicacion:`
Hay tres patrones MUY comunes para renderizar condicionalmente en React:

1) Operador && (cuando solo querés mostrar/no mostrar):
     {visible && <Componente />}

2) Operador ternario (cuando hay DOS variantes):
     {logueado ? <Perfil /> : <Login />}

3) Variable o función auxiliar (cuando la lógica es compleja):
     let contenido;
     if (cargando) contenido = <Spinner />;
     else if (error) contenido = <Error />;
     else contenido = <Datos />;
     return <div>{contenido}</div>;

Lo importante: nunca tocás el DOM, solo cambiás el estado y React redibuja.
  `.trim()};function Vf(){const[e,n]=b.useState(""),[t,r]=b.useState("");return p.jsxs("div",{children:[p.jsxs("div",{style:{marginBottom:"12px"},children:[p.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Nombre:"}),p.jsx("input",{type:"text",value:e,onChange:o=>n(o.target.value),placeholder:"Escribí tu nombre"})]}),p.jsxs("div",{style:{marginBottom:"12px"},children:[p.jsx("label",{style:{display:"block",marginBottom:"4px"},children:"Edad:"}),p.jsx("input",{type:"number",value:t,onChange:o=>r(o.target.value),placeholder:"Escribí tu edad"})]}),p.jsxs("div",{style:{marginTop:"20px",padding:"16px",background:"#f6f8fa",borderRadius:"6px",borderLeft:"4px solid #0969da"},children:[p.jsx("strong",{children:"Vista previa:"}),p.jsxs("p",{children:["Hola, soy ",p.jsx("strong",{children:e||"..."})," y tengo"," ",p.jsx("strong",{children:t||"..."})," años."]})]})]})}const Qf={numero:"06",titulo:"Inputs controlados",descripcion:"Inputs cuyo valor lo controla React. La UI refleja el estado en tiempo real.",conceptos:["onChange","e.target.value","Inputs controlados"],explicacion:`
Un input "controlado" en React tiene dos partes:

1) value={estado}      → el valor que muestra el input lo dicta el estado.
2) onChange={handler}  → cada vez que el usuario tipea, actualizamos el estado.

Esto convierte al estado en la "única fuente de verdad" (single source of truth).
Si querés saber qué hay en el input, mirás el estado, no el DOM.

Beneficios:
• Validación en vivo
• Limpiar el input fácilmente (setNombre(''))
• Compartir el valor con otros componentes
• Botón "Submit" puede leer todos los valores del estado

Patrón opuesto: "uncontrolled inputs" usando ref. Se usa menos.
  `.trim()};function Wf(){const e=[{id:1,nombre:"Manzana",precio:350,emoji:"🍎"},{id:2,nombre:"Banana",precio:200,emoji:"🍌"},{id:3,nombre:"Sandía",precio:1500,emoji:"🍉"},{id:4,nombre:"Pera",precio:400,emoji:"🍐"},{id:5,nombre:"Frutilla",precio:800,emoji:"🍓"}];return p.jsxs("div",{children:[p.jsx("h3",{children:"🛒 Lista de productos"}),p.jsx("ul",{style:{listStyle:"none",padding:0},children:e.map(n=>p.jsxs("li",{style:{padding:"12px 16px",marginBottom:"8px",background:"#f6f8fa",borderRadius:"6px",border:"1px solid #d0d7de",display:"flex",justifyContent:"space-between"},children:[p.jsxs("span",{children:[n.emoji," ",n.nombre]}),p.jsxs("strong",{children:["$",n.precio]})]},n.id))}),p.jsxs("p",{style:{textAlign:"right",marginTop:"12px"},children:["Total: ",p.jsxs("strong",{children:["$",e.reduce((n,t)=>n+t.precio,0)]})]})]})}const Kf={numero:"07",titulo:"Listas con .map()",descripcion:"Renderizar arrays como elementos JSX usando .map() y la prop key.",conceptos:[".map()","Prop key","Renderizar arrays"],explicacion:`
Para mostrar una lista en React, usamos el método .map() de los arrays.
.map() transforma cada elemento del array en otra cosa (en este caso, JSX).

Reglas importantes:
• Cada elemento de la lista DEBE tener una prop "key" única.
• La key ayuda a React a optimizar los re-renders cuando la lista cambia.
• Idealmente la key es un id estable. NO uses el índice del array si la lista puede reordenarse.

Errores comunes:
❌ <li>{producto.nombre}</li>           ← falta key
❌ <li key={index}>...</li>             ← evitar si la lista cambia
✅ <li key={producto.id}>...</li>       ← correcto
  `.trim()};function qf(){const[e,n]=b.useState(!1),[t,r]=b.useState(""),[o,l]=b.useState(!1),[i,a]=b.useState(0);return p.jsxs("div",{children:[p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("h4",{children:"👆 onClick"}),p.jsxs("button",{onClick:()=>a(i+1),children:["Hiciste click ",i," ",i===1?"vez":"veces"]})]}),p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("h4",{children:"🖱️ onMouseEnter / onMouseLeave"}),p.jsx("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{padding:"20px",background:e?"#0969da":"#f6f8fa",color:e?"white":"black",borderRadius:"6px",cursor:"pointer",transition:"all 0.2s",textAlign:"center"},children:e?"✨ ¡Hover detectado!":"Pasá el mouse por encima"})]}),p.jsxs("div",{style:{marginBottom:"16px"},children:[p.jsx("h4",{children:"⌨️ onKeyDown"}),p.jsx("input",{type:"text",placeholder:"Tocá cualquier tecla...",onKeyDown:u=>r(u.key)}),t&&p.jsxs("p",{style:{marginTop:"8px"},children:["Última tecla: ",p.jsx("code",{children:t})]})]}),p.jsxs("div",{children:[p.jsx("h4",{children:"🎯 onFocus / onBlur"}),p.jsx("input",{type:"text",placeholder:"Hacé click acá adentro",onFocus:()=>l(!0),onBlur:()=>l(!1),style:{border:o?"2px solid #1a7f37":"1px solid #d0d7de",outline:"none"}}),p.jsx("p",{style:{marginTop:"8px",color:"#656d76"},children:o?"✅ Input enfocado":"⚪ Input sin foco"})]})]})}const Xf={numero:"08",titulo:"Eventos varios",descripcion:"Click, hover, teclado, foco. Los eventos más usados en React.",conceptos:["onClick","onMouseEnter","onKeyDown","onFocus / onBlur"],explicacion:`
React tiene su propio sistema de eventos sintéticos, pero la API es casi
idéntica a la de HTML. La diferencia clave es la sintaxis camelCase.

Eventos más comunes:
• onClick          → click del mouse
• onChange         → cambio en input/select/textarea
• onSubmit         → envío de formulario
• onMouseEnter / onMouseLeave → hover
• onKeyDown / onKeyUp → teclado
• onFocus / onBlur → foco en un input
• onScroll         → scroll en un elemento

Todos los handlers reciben un objeto evento "e" como primer argumento.
Las propiedades más útiles:
• e.target.value   → valor del elemento (inputs)
• e.key            → tecla presionada
• e.preventDefault() → cancelar comportamiento por defecto (típico en forms)
  `.trim()};function Qa({etiqueta:e,valor:n,onCambiar:t}){return p.jsxs("div",{style:{marginBottom:"12px"},children:[p.jsx("label",{style:{display:"block",marginBottom:"4px"},children:e}),p.jsx("input",{type:"text",value:n,onChange:r=>t(r.target.value)})]})}function Jf({nombre:e,apellido:n}){return p.jsxs("div",{style:{padding:"16px",background:"#ddf4ff",border:"2px solid #0969da",borderRadius:"8px",marginTop:"12px"},children:[p.jsx("strong",{children:"👋 Vista previa (otro componente):"}),p.jsxs("p",{style:{fontSize:"1.3rem",marginTop:"8px"},children:[e||"..."," ",n||"..."]})]})}function Yf(){const[e,n]=b.useState(""),[t,r]=b.useState("");return p.jsxs("div",{children:[p.jsx(Qa,{etiqueta:"Nombre:",valor:e,onCambiar:o=>n(o)}),p.jsx(Qa,{etiqueta:"Apellido:",valor:t,onCambiar:o=>r(o)}),p.jsx(Jf,{nombre:e,apellido:t}),p.jsxs("p",{style:{marginTop:"16px",color:"#656d76",fontSize:"0.9rem"},children:["💡 Los dos inputs y la vista previa son componentes ",p.jsx("strong",{children:"hermanos"}),". Comparten datos a través del estado del padre. Esto se llama"," ",p.jsx("strong",{children:'"lifting state up"'}),"."]})]})}const Gf={numero:"09",titulo:"Padre ↔ Hijo",descripcion:"Cómo se comunican los componentes: props para bajar datos, callbacks para subir.",conceptos:["Lifting state up","Callbacks","Flujo unidireccional"],explicacion:`
En React los datos fluyen SIEMPRE hacia abajo (de padre a hijo) por props.
Para que un hijo le avise al padre, el padre le pasa una función como prop
y el hijo la llama cuando algo pasa.

Cuando dos componentes hermanos necesitan compartir datos, el estado se
"levanta" (lifting state up) hasta el primer ancestro común que los contiene
a ambos. Ese ancestro maneja el estado y se lo baja a cada hijo.

Este patrón es la base de la comunicación en React.
Para apps grandes, cuando esto se vuelve incómodo (prop drilling), se usan
herramientas como Context API, Redux o Zustand.
  `.trim()};function Zf(){const[e,n]=b.useState([{id:1,texto:"Aprender React",completada:!0},{id:2,texto:"Hacer este ejemplo en clase",completada:!1},{id:3,texto:"Tomar mate ☕",completada:!1}]),[t,r]=b.useState(""),o=u=>{if(u.preventDefault(),!t.trim())return;const c={id:Date.now(),texto:t.trim(),completada:!1};n([...e,c]),r("")},l=u=>{n(e.filter(c=>c.id!==u))},i=u=>{n(e.map(c=>c.id===u?{...c,completada:!c.completada}:c))},a=e.filter(u=>!u.completada).length;return p.jsxs("div",{children:[p.jsxs("form",{onSubmit:o,style:{display:"flex",gap:"8px"},children:[p.jsx("input",{type:"text",value:t,onChange:u=>r(u.target.value),placeholder:"Nueva tarea...",style:{flex:1}}),p.jsx("button",{type:"submit",children:"➕ Agregar"})]}),e.length===0?p.jsx("p",{style:{marginTop:"16px",textAlign:"center",color:"#656d76"},children:"No hay tareas. ¡Agregá una!"}):p.jsx("ul",{style:{listStyle:"none",padding:0,marginTop:"16px"},children:e.map(u=>p.jsxs("li",{style:{padding:"10px 14px",marginBottom:"6px",background:"#f6f8fa",border:"1px solid #d0d7de",borderRadius:"6px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("label",{style:{display:"flex",gap:"8px",cursor:"pointer",flex:1},children:[p.jsx("input",{type:"checkbox",checked:u.completada,onChange:()=>i(u.id)}),p.jsx("span",{style:{textDecoration:u.completada?"line-through":"none",color:u.completada?"#656d76":"inherit"},children:u.texto})]}),p.jsx("button",{onClick:()=>l(u.id),style:{background:"transparent",border:"1px solid #d0d7de",color:"#d1242f",borderRadius:"4px",cursor:"pointer",padding:"2px 8px"},"aria-label":`Borrar ${u.texto}`,children:"✕"})]},u.id))}),p.jsx("p",{style:{marginTop:"12px",textAlign:"right",color:"#656d76"},children:a===0?"🎉 ¡Todo listo!":`📌 Quedan ${a} pendiente${a===1?"":"s"}`})]})}const bf={numero:"10",titulo:"Mini app de tareas",descripcion:"Mini app completa: agregar, borrar y marcar tareas. Junta todo lo aprendido.",conceptos:["useState con array","Spread","filter / map","Formulario"],explicacion:`
Este ejemplo combina varios conceptos en una mini-app real:

• useState con un array de objetos
• Agregar: setTareas([...tareas, nueva])  → spread para no mutar
• Borrar: setTareas(tareas.filter(...))   → filter devuelve array nuevo
• Toggle: setTareas(tareas.map(...))      → map devuelve array nuevo
• Render condicional: si no hay tareas, muestra un mensaje
• Formulario controlado con onSubmit y e.preventDefault()
• Listas con .map() y key={tarea.id}

REGLA CLAVE: nunca mutamos el array directamente.
❌ tareas.push(nueva)        → mal, muta
❌ tareas[0].completada = true → mal, muta
✅ setTareas([...tareas, nueva])
✅ setTareas(tareas.map(...))

React solo detecta cambios si el array es uno NUEVO.
  `.trim()},ep=`/**\r
 * 📌 EJEMPLO 01 · Hola Mundo\r
 *\r
 * El componente más simple posible en React: una función que devuelve JSX.\r
 * Sin estado, sin props, sin nada extra.\r
 *\r
 * 🎯 Conceptos: componente funcional, JSX, export default\r
 */\r
\r
function Ejemplo01() {\r
  // Un componente es simplemente una función que retorna JSX (HTML "con superpoderes")\r
  return (\r
    <div>\r
      <h2>👋 Hola, Mundo!</h2>\r
      <p>Este es el componente más simple de React.</p>\r
      <p>Solo una función que retorna lo que querés mostrar.</p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo01;\r
\r
// Información que el sidebar usa para mostrar este ejemplo\r
export const meta = {\r
  numero: '01',\r
  titulo: 'Hola Mundo',\r
  descripcion: 'El componente más simple posible: una función que retorna JSX.',\r
  conceptos: ['Componente funcional', 'JSX', 'export default'],\r
  explicacion: \`\r
Un componente de React es, en esencia, una función de JavaScript que devuelve JSX.\r
JSX es la sintaxis que parece HTML pero se transforma en código JS.\r
\r
Reglas básicas:\r
• El nombre del componente arranca con mayúscula (PascalCase).\r
• Debe devolver un único elemento raíz (o un Fragment <>...</>).\r
• Se exporta con "export default" para poder usarlo en otros archivos.\r
\r
Para usarlo en otro lado: <Ejemplo01 />\r
  \`.trim(),\r
};\r
`,np=`/**\r
 * 📌 EJEMPLO 02 · Props básicas\r
 *\r
 * Un componente puede recibir datos del exterior a través de "props".\r
 * Las props son siempre de SOLO LECTURA dentro del componente.\r
 *\r
 * 🎯 Conceptos: props, destructuring, reutilización\r
 */\r
\r
// El componente "Saludo" recibe un objeto props con la propiedad "nombre".\r
// Usamos destructuring directo en el parámetro: { nombre, emoji }\r
function Saludo({ nombre, emoji }) {\r
  return (\r
    <p style={{ fontSize: '1.2rem' }}>\r
      {emoji} Hola, <strong>{nombre}</strong>!\r
    </p>\r
  );\r
}\r
\r
// El componente principal usa <Saludo /> tres veces con props distintas.\r
// Mismo componente, distintos datos → REUTILIZACIÓN.\r
function Ejemplo02() {\r
  return (\r
    <div>\r
      <Saludo nombre="Luciano" emoji="👋" />\r
      <Saludo nombre="María" emoji="✨" />\r
      <Saludo nombre="el grupo del M8" emoji="⚛️" />\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo02;\r
\r
export const meta = {\r
  numero: '02',\r
  titulo: 'Props básicas',\r
  descripcion: 'Pasar datos a un componente para reutilizarlo con distintos valores.',\r
  conceptos: ['Props', 'Destructuring', 'Reutilización'],\r
  explicacion: \`\r
Las "props" (propiedades) son cómo un componente padre le pasa datos a un componente hijo.\r
Funcionan igual que los argumentos de una función.\r
\r
En este ejemplo, el componente <Saludo /> se reutiliza 3 veces con datos distintos:\r
solo cambian las props "nombre" y "emoji".\r
\r
📌 Importante: las props son INMUTABLES. El componente que las recibe NO puede modificarlas.\r
Si necesita cambiarlas, debe avisarle al padre con una función callback (ver Ejemplo 09).\r
  \`.trim(),\r
};\r
`,tp=`/**\r
 * 📌 EJEMPLO 03 · La prop especial "children"\r
 *\r
 * Cualquier cosa que escribas ENTRE las etiquetas de apertura y cierre\r
 * de un componente, llega como la prop "children".\r
 *\r
 * 🎯 Conceptos: children, composición, componentes "wrapper"\r
 */\r
\r
// Un componente "Caja" que envuelve cualquier contenido con un estilo de tarjeta.\r
// Recibe "titulo" como prop normal y "children" como prop especial.\r
function Caja({ titulo, children }) {\r
  const estilo = {\r
    border: '2px solid #0969da',\r
    borderRadius: '8px',\r
    padding: '16px',\r
    margin: '12px 0',\r
    background: '#f6f8fa',\r
  };\r
\r
  return (\r
    <div style={estilo}>\r
      <h3 style={{ marginBottom: '8px' }}>{titulo}</h3>\r
      <div>{children}</div>\r
    </div>\r
  );\r
}\r
\r
function Ejemplo03() {\r
  return (\r
    <div>\r
      <p>El mismo componente "Caja" envuelve contenidos distintos:</p>\r
\r
      <Caja titulo="📦 Caja con texto">\r
        <p>Lo que hay acá adentro llega como la prop <code>children</code>.</p>\r
      </Caja>\r
\r
      <Caja titulo="🎨 Caja con varios elementos">\r
        <p>Puedo poner cualquier cosa adentro:</p>\r
        <ul>\r
          <li>Una lista</li>\r
          <li>Otro componente</li>\r
          <li>Lo que se te ocurra</li>\r
        </ul>\r
      </Caja>\r
\r
      <Caja titulo="🧩 Caja con otra Caja adentro">\r
        <Caja titulo="🤯 Inception">\r
          <p>Las cajas se pueden anidar.</p>\r
        </Caja>\r
      </Caja>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo03;\r
\r
export const meta = {\r
  numero: '03',\r
  titulo: 'Children prop',\r
  descripcion: 'Cómo crear componentes "wrapper" que reciben contenido entre sus etiquetas.',\r
  conceptos: ['children', 'Composición', 'Reutilización avanzada'],\r
  explicacion: \`\r
"children" es una prop especial: contiene todo lo que pongas entre <Componente> y </Componente>.\r
\r
Esto permite crear componentes "wrapper" o "contenedores" muy flexibles, como:\r
• Cajas con borde\r
• Modales\r
• Cards\r
• Layouts (Sidebar + Main)\r
\r
En este ejemplo, el componente <Caja /> es uno solo pero se reutiliza con contenidos\r
totalmente distintos. Se basa en COMPOSICIÓN, uno de los principios fundamentales de React.\r
  \`.trim(),\r
};\r
`,rp=`/**\r
 * 📌 EJEMPLO 04 · Estado con useState (Contador)\r
 *\r
 * "Estado" es la memoria interna de un componente: datos que pueden cambiar.\r
 * Cuando el estado cambia, React vuelve a renderizar el componente automáticamente.\r
 *\r
 * 🎯 Conceptos: useState, eventos onClick, re-render\r
 */\r
import { useState } from 'react';\r
\r
function Ejemplo04() {\r
  // useState devuelve un array: [valorActual, funciónParaActualizarlo]\r
  // El argumento (0) es el valor inicial.\r
  const [count, setCount] = useState(0);\r
\r
  // Funciones que actualizan el estado.\r
  // OJO: nunca hagas count = count + 1, siempre usá el "setter" (setCount).\r
  const sumar = () => setCount(count + 1);\r
  const restar = () => setCount(count - 1);\r
  const reset = () => setCount(0);\r
\r
  return (\r
    <div style={{ textAlign: 'center' }}>\r
      <h2 style={{ fontSize: '4rem', margin: '20px 0' }}>{count}</h2>\r
\r
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>\r
        <button onClick={restar}>➖ Restar</button>\r
        <button onClick={reset}>🔄 Reset</button>\r
        <button onClick={sumar}>➕ Sumar</button>\r
      </div>\r
\r
      <p style={{ marginTop: '20px', color: '#656d76' }}>\r
        Cada click cambia el estado <code>count</code>.\r
        <br />\r
        Cuando el estado cambia, React redibuja este componente con el nuevo valor.\r
      </p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo04;\r
\r
export const meta = {\r
  numero: '04',\r
  titulo: 'useState · Contador',\r
  descripcion: 'El primer hook: useState. Datos que cambian con el tiempo.',\r
  conceptos: ['useState', 'Eventos onClick', 'Re-render automático'],\r
  explicacion: \`\r
useState es un "hook" de React que le da MEMORIA a un componente.\r
\r
Sintaxis:\r
  const [valor, setValor] = useState(valorInicial);\r
\r
• valor → el dato actual (lo usás en el JSX).\r
• setValor → la función para cambiarlo.\r
\r
REGLA DE ORO: nunca asignás directamente (valor = ...). Siempre usás el setter.\r
Cuando llamás al setter, React ejecuta de nuevo la función del componente y\r
actualiza la pantalla con el nuevo valor.\r
\r
Este es EL concepto más importante de React: la UI es un reflejo del estado.\r
  \`.trim(),\r
};\r
`,op=`/**\r
 * 📌 EJEMPLO 05 · Render condicional (mostrar / ocultar)\r
 *\r
 * En React no escribimos "if (...) document.show()". En lugar de eso,\r
 * el JSX se renderiza CONDICIONALMENTE según el estado.\r
 *\r
 * 🎯 Conceptos: useState booleano, operador &&, operador ternario\r
 */\r
import { useState } from 'react';\r
\r
function Ejemplo05() {\r
  const [mostrar, setMostrar] = useState(false);\r
\r
  return (\r
    <div>\r
      {/* El texto del botón cambia con el operador ternario (a ? b : c) */}\r
      <button onClick={() => setMostrar(!mostrar)}>\r
        {mostrar ? '🙈 Ocultar contenido' : '👀 Mostrar contenido'}\r
      </button>\r
\r
      {/* Render condicional con && :\r
          si "mostrar" es true → se renderiza el div.\r
          si es false → no se renderiza nada. */}\r
      {mostrar && (\r
        <div\r
          style={{\r
            marginTop: '16px',\r
            padding: '20px',\r
            background: '#fff8c5',\r
            borderLeft: '4px solid #d4a72c',\r
            borderRadius: '6px',\r
          }}\r
        >\r
          <h3>🎉 ¡Sorpresa!</h3>\r
          <p>Este contenido aparece y desaparece según el estado.</p>\r
          <p>\r
            Notá que el botón también cambia su texto. Eso es porque el JSX se\r
            re-renderiza completo cuando el estado cambia.\r
          </p>\r
        </div>\r
      )}\r
\r
      {/* Otra forma común: el ternario para mostrar A o B */}\r
      <p style={{ marginTop: '16px', color: '#656d76' }}>\r
        Estado actual: {mostrar ? '✅ visible' : '❌ oculto'}\r
      </p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo05;\r
\r
export const meta = {\r
  numero: '05',\r
  titulo: 'Render condicional',\r
  descripcion: 'Mostrar u ocultar elementos según el estado, sin manipular el DOM directamente.',\r
  conceptos: ['Estado booleano', 'Operador && (and)', 'Operador ternario'],\r
  explicacion: \`\r
Hay tres patrones MUY comunes para renderizar condicionalmente en React:\r
\r
1) Operador && (cuando solo querés mostrar/no mostrar):\r
     {visible && <Componente />}\r
\r
2) Operador ternario (cuando hay DOS variantes):\r
     {logueado ? <Perfil /> : <Login />}\r
\r
3) Variable o función auxiliar (cuando la lógica es compleja):\r
     let contenido;\r
     if (cargando) contenido = <Spinner />;\r
     else if (error) contenido = <Error />;\r
     else contenido = <Datos />;\r
     return <div>{contenido}</div>;\r
\r
Lo importante: nunca tocás el DOM, solo cambiás el estado y React redibuja.\r
  \`.trim(),\r
};\r
`,lp=`/**\r
 * 📌 EJEMPLO 06 · Inputs controlados\r
 *\r
 * Un input "controlado" tiene su valor MANEJADO por React (en el estado).\r
 * Cada vez que el usuario tipea, dispara onChange y actualizamos el estado.\r
 *\r
 * 🎯 Conceptos: input controlado, evento onChange, e.target.value\r
 */\r
import { useState } from 'react';\r
\r
function Ejemplo06() {\r
  // Estados separados para cada input\r
  const [nombre, setNombre] = useState('');\r
  const [edad, setEdad] = useState('');\r
\r
  return (\r
    <div>\r
      <div style={{ marginBottom: '12px' }}>\r
        <label style={{ display: 'block', marginBottom: '4px' }}>\r
          Nombre:\r
        </label>\r
        <input\r
          type="text"\r
          // value: el input muestra SIEMPRE lo que dice el estado\r
          value={nombre}\r
          // onChange: cuando el usuario tipea, actualizamos el estado\r
          onChange={(e) => setNombre(e.target.value)}\r
          placeholder="Escribí tu nombre"\r
        />\r
      </div>\r
\r
      <div style={{ marginBottom: '12px' }}>\r
        <label style={{ display: 'block', marginBottom: '4px' }}>Edad:</label>\r
        <input\r
          type="number"\r
          value={edad}\r
          onChange={(e) => setEdad(e.target.value)}\r
          placeholder="Escribí tu edad"\r
        />\r
      </div>\r
\r
      {/* La UI se actualiza en TIEMPO REAL con cada tecla */}\r
      <div\r
        style={{\r
          marginTop: '20px',\r
          padding: '16px',\r
          background: '#f6f8fa',\r
          borderRadius: '6px',\r
          borderLeft: '4px solid #0969da',\r
        }}\r
      >\r
        <strong>Vista previa:</strong>\r
        <p>\r
          Hola, soy <strong>{nombre || '...'}</strong> y tengo{' '}\r
          <strong>{edad || '...'}</strong> años.\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo06;\r
\r
export const meta = {\r
  numero: '06',\r
  titulo: 'Inputs controlados',\r
  descripcion: 'Inputs cuyo valor lo controla React. La UI refleja el estado en tiempo real.',\r
  conceptos: ['onChange', 'e.target.value', 'Inputs controlados'],\r
  explicacion: \`\r
Un input "controlado" en React tiene dos partes:\r
\r
1) value={estado}      → el valor que muestra el input lo dicta el estado.\r
2) onChange={handler}  → cada vez que el usuario tipea, actualizamos el estado.\r
\r
Esto convierte al estado en la "única fuente de verdad" (single source of truth).\r
Si querés saber qué hay en el input, mirás el estado, no el DOM.\r
\r
Beneficios:\r
• Validación en vivo\r
• Limpiar el input fácilmente (setNombre(''))\r
• Compartir el valor con otros componentes\r
• Botón "Submit" puede leer todos los valores del estado\r
\r
Patrón opuesto: "uncontrolled inputs" usando ref. Se usa menos.\r
  \`.trim(),\r
};\r
`,ip=`/**\r
 * 📌 EJEMPLO 07 · Listas con .map() y prop "key"\r
 *\r
 * Para renderizar una lista de cosas, usamos .map() para transformar\r
 * cada dato en un elemento JSX.\r
 *\r
 * 🎯 Conceptos: .map(), prop "key", renderizar arrays\r
 */\r
\r
function Ejemplo07() {\r
  // Un array de datos. En una app real vendría de una API o del estado.\r
  const productos = [\r
    { id: 1, nombre: 'Manzana', precio: 350, emoji: '🍎' },\r
    { id: 2, nombre: 'Banana', precio: 200, emoji: '🍌' },\r
    { id: 3, nombre: 'Sandía', precio: 1500, emoji: '🍉' },\r
    { id: 4, nombre: 'Pera', precio: 400, emoji: '🍐' },\r
    { id: 5, nombre: 'Frutilla', precio: 800, emoji: '🍓' },\r
  ];\r
\r
  return (\r
    <div>\r
      <h3>🛒 Lista de productos</h3>\r
\r
      <ul style={{ listStyle: 'none', padding: 0 }}>\r
        {/* .map() recorre el array y devuelve un <li> por cada producto.\r
            La prop "key" es OBLIGATORIA: ayuda a React a identificar\r
            cada item cuando la lista cambia. Debe ser ÚNICA. */}\r
        {productos.map((producto) => (\r
          <li\r
            key={producto.id}\r
            style={{\r
              padding: '12px 16px',\r
              marginBottom: '8px',\r
              background: '#f6f8fa',\r
              borderRadius: '6px',\r
              border: '1px solid #d0d7de',\r
              display: 'flex',\r
              justifyContent: 'space-between',\r
            }}\r
          >\r
            <span>\r
              {producto.emoji} {producto.nombre}\r
            </span>\r
            <strong>\${producto.precio}</strong>\r
          </li>\r
        ))}\r
      </ul>\r
\r
      <p style={{ textAlign: 'right', marginTop: '12px' }}>\r
        Total: <strong>\${productos.reduce((acc, p) => acc + p.precio, 0)}</strong>\r
      </p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo07;\r
\r
export const meta = {\r
  numero: '07',\r
  titulo: 'Listas con .map()',\r
  descripcion: 'Renderizar arrays como elementos JSX usando .map() y la prop key.',\r
  conceptos: ['.map()', 'Prop key', 'Renderizar arrays'],\r
  explicacion: \`\r
Para mostrar una lista en React, usamos el método .map() de los arrays.\r
.map() transforma cada elemento del array en otra cosa (en este caso, JSX).\r
\r
Reglas importantes:\r
• Cada elemento de la lista DEBE tener una prop "key" única.\r
• La key ayuda a React a optimizar los re-renders cuando la lista cambia.\r
• Idealmente la key es un id estable. NO uses el índice del array si la lista puede reordenarse.\r
\r
Errores comunes:\r
❌ <li>{producto.nombre}</li>           ← falta key\r
❌ <li key={index}>...</li>             ← evitar si la lista cambia\r
✅ <li key={producto.id}>...</li>       ← correcto\r
  \`.trim(),\r
};\r
`,ap=`/**\r
 * 📌 EJEMPLO 08 · Eventos varios\r
 *\r
 * React envuelve los eventos del DOM en "SyntheticEvents" pero se usan\r
 * casi igual que en HTML: onClick, onMouseEnter, onKeyDown, etc.\r
 *\r
 * 🎯 Conceptos: onClick, onMouseEnter/Leave, onKeyDown, onFocus\r
 */\r
import { useState } from 'react';\r
\r
function Ejemplo08() {\r
  const [hover, setHover] = useState(false);\r
  const [tecla, setTecla] = useState('');\r
  const [enfocado, setEnfocado] = useState(false);\r
  const [clicks, setClicks] = useState(0);\r
\r
  return (\r
    <div>\r
      {/* onClick */}\r
      <div style={{ marginBottom: '16px' }}>\r
        <h4>👆 onClick</h4>\r
        <button onClick={() => setClicks(clicks + 1)}>\r
          Hiciste click {clicks} {clicks === 1 ? 'vez' : 'veces'}\r
        </button>\r
      </div>\r
\r
      {/* onMouseEnter / onMouseLeave */}\r
      <div style={{ marginBottom: '16px' }}>\r
        <h4>🖱️ onMouseEnter / onMouseLeave</h4>\r
        <div\r
          onMouseEnter={() => setHover(true)}\r
          onMouseLeave={() => setHover(false)}\r
          style={{\r
            padding: '20px',\r
            background: hover ? '#0969da' : '#f6f8fa',\r
            color: hover ? 'white' : 'black',\r
            borderRadius: '6px',\r
            cursor: 'pointer',\r
            transition: 'all 0.2s',\r
            textAlign: 'center',\r
          }}\r
        >\r
          {hover ? '✨ ¡Hover detectado!' : 'Pasá el mouse por encima'}\r
        </div>\r
      </div>\r
\r
      {/* onKeyDown */}\r
      <div style={{ marginBottom: '16px' }}>\r
        <h4>⌨️ onKeyDown</h4>\r
        <input\r
          type="text"\r
          placeholder="Tocá cualquier tecla..."\r
          onKeyDown={(e) => setTecla(e.key)}\r
        />\r
        {tecla && (\r
          <p style={{ marginTop: '8px' }}>\r
            Última tecla: <code>{tecla}</code>\r
          </p>\r
        )}\r
      </div>\r
\r
      {/* onFocus / onBlur */}\r
      <div>\r
        <h4>🎯 onFocus / onBlur</h4>\r
        <input\r
          type="text"\r
          placeholder="Hacé click acá adentro"\r
          onFocus={() => setEnfocado(true)}\r
          onBlur={() => setEnfocado(false)}\r
          style={{\r
            border: enfocado ? '2px solid #1a7f37' : '1px solid #d0d7de',\r
            outline: 'none',\r
          }}\r
        />\r
        <p style={{ marginTop: '8px', color: '#656d76' }}>\r
          {enfocado ? '✅ Input enfocado' : '⚪ Input sin foco'}\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo08;\r
\r
export const meta = {\r
  numero: '08',\r
  titulo: 'Eventos varios',\r
  descripcion: 'Click, hover, teclado, foco. Los eventos más usados en React.',\r
  conceptos: ['onClick', 'onMouseEnter', 'onKeyDown', 'onFocus / onBlur'],\r
  explicacion: \`\r
React tiene su propio sistema de eventos sintéticos, pero la API es casi\r
idéntica a la de HTML. La diferencia clave es la sintaxis camelCase.\r
\r
Eventos más comunes:\r
• onClick          → click del mouse\r
• onChange         → cambio en input/select/textarea\r
• onSubmit         → envío de formulario\r
• onMouseEnter / onMouseLeave → hover\r
• onKeyDown / onKeyUp → teclado\r
• onFocus / onBlur → foco en un input\r
• onScroll         → scroll en un elemento\r
\r
Todos los handlers reciben un objeto evento "e" como primer argumento.\r
Las propiedades más útiles:\r
• e.target.value   → valor del elemento (inputs)\r
• e.key            → tecla presionada\r
• e.preventDefault() → cancelar comportamiento por defecto (típico en forms)\r
  \`.trim(),\r
};\r
`,up=`/**\r
 * 📌 EJEMPLO 09 · Comunicación Padre ↔ Hijo\r
 *\r
 * Los componentes se comunican así:\r
 * • Padre → Hijo: pasándole datos por props.\r
 * • Hijo → Padre: el padre le pasa una FUNCIÓN, el hijo la llama.\r
 *\r
 * 🎯 Conceptos: lifting state up, callbacks, flujo unidireccional\r
 */\r
import { useState } from 'react';\r
\r
// 👶 HIJO 1: input que NO tiene estado propio.\r
//    Recibe el valor y la función para cambiarlo desde el padre.\r
function CajaInput({ etiqueta, valor, onCambiar }) {\r
  return (\r
    <div style={{ marginBottom: '12px' }}>\r
      <label style={{ display: 'block', marginBottom: '4px' }}>{etiqueta}</label>\r
      <input\r
        type="text"\r
        value={valor}\r
        onChange={(e) => onCambiar(e.target.value)}\r
      />\r
    </div>\r
  );\r
}\r
\r
// 👶 HIJO 2: solo MUESTRA datos. No tiene estado propio.\r
function VistaPrevia({ nombre, apellido }) {\r
  return (\r
    <div\r
      style={{\r
        padding: '16px',\r
        background: '#ddf4ff',\r
        border: '2px solid #0969da',\r
        borderRadius: '8px',\r
        marginTop: '12px',\r
      }}\r
    >\r
      <strong>👋 Vista previa (otro componente):</strong>\r
      <p style={{ fontSize: '1.3rem', marginTop: '8px' }}>\r
        {nombre || '...'} {apellido || '...'}\r
      </p>\r
    </div>\r
  );\r
}\r
\r
// 👨 PADRE: tiene el estado y se lo pasa a los dos hijos.\r
function Ejemplo09() {\r
  const [nombre, setNombre] = useState('');\r
  const [apellido, setApellido] = useState('');\r
\r
  return (\r
    <div>\r
      {/* El padre baja datos (valor) y funciones (onCambiar) a los hijos */}\r
      <CajaInput\r
        etiqueta="Nombre:"\r
        valor={nombre}\r
        onCambiar={(nuevo) => setNombre(nuevo)}\r
      />\r
      <CajaInput\r
        etiqueta="Apellido:"\r
        valor={apellido}\r
        onCambiar={(nuevo) => setApellido(nuevo)}\r
      />\r
\r
      {/* Otro hijo, hermano del anterior, recibe los mismos datos */}\r
      <VistaPrevia nombre={nombre} apellido={apellido} />\r
\r
      <p style={{ marginTop: '16px', color: '#656d76', fontSize: '0.9rem' }}>\r
        💡 Los dos inputs y la vista previa son componentes <strong>hermanos</strong>.\r
        Comparten datos a través del estado del padre. Esto se llama{' '}\r
        <strong>"lifting state up"</strong>.\r
      </p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo09;\r
\r
export const meta = {\r
  numero: '09',\r
  titulo: 'Padre ↔ Hijo',\r
  descripcion: 'Cómo se comunican los componentes: props para bajar datos, callbacks para subir.',\r
  conceptos: ['Lifting state up', 'Callbacks', 'Flujo unidireccional'],\r
  explicacion: \`\r
En React los datos fluyen SIEMPRE hacia abajo (de padre a hijo) por props.\r
Para que un hijo le avise al padre, el padre le pasa una función como prop\r
y el hijo la llama cuando algo pasa.\r
\r
Cuando dos componentes hermanos necesitan compartir datos, el estado se\r
"levanta" (lifting state up) hasta el primer ancestro común que los contiene\r
a ambos. Ese ancestro maneja el estado y se lo baja a cada hijo.\r
\r
Este patrón es la base de la comunicación en React.\r
Para apps grandes, cuando esto se vuelve incómodo (prop drilling), se usan\r
herramientas como Context API, Redux o Zustand.\r
  \`.trim(),\r
};\r
`,sp=`/**\r
 * 📌 EJEMPLO 10 · Mini app de tareas (TODO)\r
 *\r
 * Junta TODO lo que aprendimos:\r
 * useState con array + .map() con key + onSubmit + render condicional + onClick.\r
 *\r
 * 🎯 Conceptos: estado complejo, agregar/borrar/marcar, formulario\r
 */\r
import { useState } from 'react';\r
\r
function Ejemplo10() {\r
  const [tareas, setTareas] = useState([\r
    { id: 1, texto: 'Aprender React', completada: true },\r
    { id: 2, texto: 'Hacer este ejemplo en clase', completada: false },\r
    { id: 3, texto: 'Tomar mate ☕', completada: false },\r
  ]);\r
  const [texto, setTexto] = useState('');\r
\r
  // AGREGAR una tarea nueva (sin mutar el array original: usamos spread).\r
  const agregar = (e) => {\r
    e.preventDefault();\r
    if (!texto.trim()) return;\r
    const nueva = { id: Date.now(), texto: texto.trim(), completada: false };\r
    setTareas([...tareas, nueva]);\r
    setTexto('');\r
  };\r
\r
  // BORRAR: filter devuelve un array nuevo sin la tarea borrada.\r
  const borrar = (id) => {\r
    setTareas(tareas.filter((t) => t.id !== id));\r
  };\r
\r
  // MARCAR como completada (toggle): map devuelve un array nuevo\r
  // con esa tarea modificada y las demás iguales.\r
  const toggleCompletada = (id) => {\r
    setTareas(\r
      tareas.map((t) =>\r
        t.id === id ? { ...t, completada: !t.completada } : t\r
      )\r
    );\r
  };\r
\r
  const totalPendientes = tareas.filter((t) => !t.completada).length;\r
\r
  return (\r
    <div>\r
      <form onSubmit={agregar} style={{ display: 'flex', gap: '8px' }}>\r
        <input\r
          type="text"\r
          value={texto}\r
          onChange={(e) => setTexto(e.target.value)}\r
          placeholder="Nueva tarea..."\r
          style={{ flex: 1 }}\r
        />\r
        <button type="submit">➕ Agregar</button>\r
      </form>\r
\r
      {tareas.length === 0 ? (\r
        <p style={{ marginTop: '16px', textAlign: 'center', color: '#656d76' }}>\r
          No hay tareas. ¡Agregá una!\r
        </p>\r
      ) : (\r
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>\r
          {tareas.map((tarea) => (\r
            <li\r
              key={tarea.id}\r
              style={{\r
                padding: '10px 14px',\r
                marginBottom: '6px',\r
                background: '#f6f8fa',\r
                border: '1px solid #d0d7de',\r
                borderRadius: '6px',\r
                display: 'flex',\r
                justifyContent: 'space-between',\r
                alignItems: 'center',\r
              }}\r
            >\r
              <label style={{ display: 'flex', gap: '8px', cursor: 'pointer', flex: 1 }}>\r
                <input\r
                  type="checkbox"\r
                  checked={tarea.completada}\r
                  onChange={() => toggleCompletada(tarea.id)}\r
                />\r
                <span\r
                  style={{\r
                    textDecoration: tarea.completada ? 'line-through' : 'none',\r
                    color: tarea.completada ? '#656d76' : 'inherit',\r
                  }}\r
                >\r
                  {tarea.texto}\r
                </span>\r
              </label>\r
              <button\r
                onClick={() => borrar(tarea.id)}\r
                style={{\r
                  background: 'transparent',\r
                  border: '1px solid #d0d7de',\r
                  color: '#d1242f',\r
                  borderRadius: '4px',\r
                  cursor: 'pointer',\r
                  padding: '2px 8px',\r
                }}\r
                aria-label={\`Borrar \${tarea.texto}\`}\r
              >\r
                ✕\r
              </button>\r
            </li>\r
          ))}\r
        </ul>\r
      )}\r
\r
      <p style={{ marginTop: '12px', textAlign: 'right', color: '#656d76' }}>\r
        {totalPendientes === 0\r
          ? '🎉 ¡Todo listo!'\r
          : \`📌 Quedan \${totalPendientes} pendiente\${totalPendientes === 1 ? '' : 's'}\`}\r
      </p>\r
    </div>\r
  );\r
}\r
\r
export default Ejemplo10;\r
\r
export const meta = {\r
  numero: '10',\r
  titulo: 'Mini app de tareas',\r
  descripcion: 'Mini app completa: agregar, borrar y marcar tareas. Junta todo lo aprendido.',\r
  conceptos: ['useState con array', 'Spread', 'filter / map', 'Formulario'],\r
  explicacion: \`\r
Este ejemplo combina varios conceptos en una mini-app real:\r
\r
• useState con un array de objetos\r
• Agregar: setTareas([...tareas, nueva])  → spread para no mutar\r
• Borrar: setTareas(tareas.filter(...))   → filter devuelve array nuevo\r
• Toggle: setTareas(tareas.map(...))      → map devuelve array nuevo\r
• Render condicional: si no hay tareas, muestra un mensaje\r
• Formulario controlado con onSubmit y e.preventDefault()\r
• Listas con .map() y key={tarea.id}\r
\r
REGLA CLAVE: nunca mutamos el array directamente.\r
❌ tareas.push(nueva)        → mal, muta\r
❌ tareas[0].completada = true → mal, muta\r
✅ setTareas([...tareas, nueva])\r
✅ setTareas(tareas.map(...))\r
\r
React solo detecta cambios si el array es uno NUEVO.\r
  \`.trim(),\r
};\r
`,Wa=[{...Of,Componente:Mf,codigo:ep},{...Df,Componente:If,codigo:np},{...Af,Componente:Ff,codigo:tp},{...Bf,Componente:Uf,codigo:rp},{...Hf,Componente:$f,codigo:op},{...Qf,Componente:Vf,codigo:lp},{...Kf,Componente:Wf,codigo:ip},{...Xf,Componente:qf,codigo:ap},{...Gf,Componente:Yf,codigo:up},{...bf,Componente:Zf,codigo:sp}];function cp({ejemplos:e,indiceActivo:n,onSeleccionar:t}){return p.jsxs("aside",{className:"sidebar",children:[p.jsxs("div",{className:"sidebar-header",children:[p.jsx("h1",{children:"⚛️ Proyecto M8"}),p.jsx("p",{children:"Ejemplos de React"})]}),p.jsx("nav",{className:"sidebar-nav",children:p.jsx("ul",{children:e.map((r,o)=>{const l=o===n;return p.jsx("li",{children:p.jsxs("button",{type:"button",className:`sidebar-item ${l?"activo":""}`,onClick:()=>t(o),children:[p.jsx("span",{className:"sidebar-numero",children:r.numero}),p.jsxs("span",{className:"sidebar-textos",children:[p.jsx("span",{className:"sidebar-titulo",children:r.titulo}),p.jsx("span",{className:"sidebar-descripcion",children:r.descripcion})]})]})},r.numero)})})}),p.jsx("div",{className:"sidebar-footer",children:p.jsx("a",{href:"../index.html",className:"sidebar-volver",children:"← Volver al inicio"})})]})}function dp({ejemplo:e}){const[n,t]=b.useState(!1),r=e.Componente,o=async()=>{try{await navigator.clipboard.writeText(e.codigo),t(!0),setTimeout(()=>t(!1),2e3)}catch(l){console.error("No se pudo copiar:",l)}};return p.jsxs("main",{className:"contenido",children:[p.jsxs("header",{className:"contenido-header",children:[p.jsxs("div",{className:"contenido-header-titulo",children:[p.jsx("span",{className:"contenido-numero",children:e.numero}),p.jsxs("div",{children:[p.jsx("h2",{children:e.titulo}),p.jsx("p",{className:"contenido-descripcion",children:e.descripcion})]})]}),p.jsx("div",{className:"contenido-conceptos",children:e.conceptos.map(l=>p.jsx("span",{className:"chip",children:l},l))})]}),p.jsxs("section",{className:"seccion",children:[p.jsx("h3",{className:"seccion-titulo",children:"🎮 Demo en vivo"}),p.jsx("div",{className:"seccion-cuerpo demo-cuerpo",children:p.jsx(r,{})})]}),p.jsxs("section",{className:"seccion",children:[p.jsx("h3",{className:"seccion-titulo",children:"📝 Explicación"}),p.jsx("div",{className:"seccion-cuerpo",children:p.jsx("pre",{className:"explicacion",children:e.explicacion})})]}),p.jsxs("section",{className:"seccion",children:[p.jsxs("div",{className:"seccion-codigo-header",children:[p.jsxs("h3",{className:"seccion-titulo",children:["💻 Código fuente · ",p.jsxs("code",{children:["Ejemplo",e.numero,".jsx"]})]}),p.jsx("button",{type:"button",className:"btn-copiar",onClick:o,children:n?"✅ Copiado":"📋 Copiar"})]}),p.jsx("pre",{className:"codigo",children:p.jsx("code",{children:e.codigo})})]})]})}function fp(){const[e,n]=b.useState(0),t=Wa[e];return p.jsxs("div",{className:"layout",children:[p.jsx(cp,{ejemplos:Wa,indiceActivo:e,onSeleccionar:n}),p.jsx(dp,{ejemplo:t})]})}oc(document.getElementById("root")).render(p.jsx(b.StrictMode,{children:p.jsx(fp,{})}));
