(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var I={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),Ud=Symbol.for("react.portal"),Hd=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),Vd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Gd=Symbol.for("react.memo"),Yd=Symbol.for("react.lazy"),Ns=Symbol.iterator;function Xd(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tc=Object.assign,nc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=qn.prototype;function wa(e,t,n){this.props=e,this.context=t,this.refs=nc,this.updater=n||ec}var xa=wa.prototype=new rc;xa.constructor=wa;tc(xa,qn.prototype);xa.isPureReactComponent=!0;var zs=Array.isArray,oc=Object.prototype.hasOwnProperty,Sa={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)oc.call(t,r)&&!ic.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Vr,type:e,key:i,ref:l,props:o,_owner:Sa.current}}function Zd(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function Jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $s=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jd(""+e.key):t.toString(36)}function vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case Ud:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bi(l,0):r,zs(o)?(n="",e!=null&&(n=e.replace($s,"$&/")+"/"),vo(o,t,n,"",function(u){return u})):o!=null&&(ka(o)&&(o=Zd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace($s,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",zs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bi(i,a);l+=vo(i,t,n,s,o)}else if(s=Xd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bi(i,a++),l+=vo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zr(e,t,n){if(e==null)return e;var r=[],o=0;return vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},yo={transition:null},ep={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:yo,ReactCurrentOwner:Sa};W.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=qn;W.Fragment=Hd;W.Profiler=Wd;W.PureComponent=wa;W.StrictMode=Bd;W.Suspense=Qd;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Sa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)oc.call(t,s)&&!ic.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vr,type:e.type,key:o,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:bd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vd,_context:e},e.Consumer=e};W.createElement=lc;W.createFactory=function(e){var t=lc.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Kd,render:e}};W.isValidElement=ka;W.lazy=function(e){return{$$typeof:Yd,_payload:{_status:-1,_result:e},_init:qd}};W.memo=function(e,t){return{$$typeof:Gd,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=yo.transition;yo.transition={};try{e()}finally{yo.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return je.current.useCallback(e,t)};W.useContext=function(e){return je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return je.current.useDeferredValue(e)};W.useEffect=function(e,t){return je.current.useEffect(e,t)};W.useId=function(){return je.current.useId()};W.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};W.useRef=function(e){return je.current.useRef(e)};W.useState=function(e){return je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return je.current.useTransition()};W.version="18.2.0";(function(e){e.exports=W})(I);const dt=Fd(I.exports);var wl={},ac={exports:{}},Ge={},sc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,D){var F=_.length;_.push(D);e:for(;0<F;){var ee=F-1>>>1,z=_[ee];if(0<o(z,D))_[ee]=D,_[F]=z,F=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],F=_.pop();if(F!==D){_[0]=F;e:for(var ee=0,z=_.length,T=z>>>1;ee<T;){var R=2*(ee+1)-1,U=_[R],v=R+1,V=_[v];if(0>o(U,F))v<z&&0>o(V,U)?(_[ee]=V,_[v]=F,ee=v):(_[ee]=U,_[R]=F,ee=R);else if(v<z&&0>o(V,F))_[ee]=V,_[v]=F,ee=v;else break e}}return D}function o(_,D){var F=_.sortIndex-D.sortIndex;return F!==0?F:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],h=1,m=null,p=3,y=!1,w=!1,S=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=_)r(u),D.sortIndex=D.expirationTime,t(s,D);else break;D=n(u)}}function x(_){if(S=!1,d(_),!w)if(n(s)!==null)w=!0,St(E);else{var D=n(u);D!==null&&Oe(x,D.startTime-_)}}function E(_,D){w=!1,S&&(S=!1,f(P),P=-1),y=!0;var F=p;try{for(d(D),m=n(s);m!==null&&(!(m.expirationTime>D)||_&&!Q());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,p=m.priorityLevel;var z=ee(m.expirationTime<=D);D=e.unstable_now(),typeof z=="function"?m.callback=z:m===n(s)&&r(s),d(D)}else r(s);m=n(s)}if(m!==null)var T=!0;else{var R=n(u);R!==null&&Oe(x,R.startTime-D),T=!1}return T}finally{m=null,p=F,y=!1}}var A=!1,k=null,P=-1,M=5,j=-1;function Q(){return!(e.unstable_now()-j<M)}function te(){if(k!==null){var _=e.unstable_now();j=_;var D=!0;try{D=k(!0,_)}finally{D?fe():(A=!1,k=null)}}else A=!1}var fe;if(typeof c=="function")fe=function(){c(te)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Se=ve.port2;ve.port1.onmessage=te,fe=function(){Se.postMessage(null)}}else fe=function(){$(te,0)};function St(_){k=_,A||(A=!0,fe())}function Oe(_,D){P=$(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,St(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var F=p;p=D;try{return _()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=p;p=_;try{return D()}finally{p=F}},e.unstable_scheduleCallback=function(_,D,F){var ee=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ee+F:ee):F=ee,_){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=F+z,_={id:h++,callback:D,priorityLevel:_,startTime:F,expirationTime:z,sortIndex:-1},F>ee?(_.sortIndex=F,t(u,_),n(s)===null&&_===n(u)&&(S?(f(P),P=-1):S=!0,Oe(x,F-ee))):(_.sortIndex=z,t(s,_),w||y||(w=!0,St(E))),_},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(_){var D=p;return function(){var F=p;p=D;try{return _.apply(this,arguments)}finally{p=F}}}})(uc);(function(e){e.exports=uc})(sc);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc=I.exports,Qe=sc.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,_r={};function xn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(_r[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,As={},Ts={};function np(e){return xl.call(Ts,e)?!0:xl.call(As,e)?!1:tp.test(e)?Ts[e]=!0:(As[e]=!0,!1)}function rp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function op(e,t,n,r){if(t===null||typeof t>"u"||rp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ca=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ca,Ea);Ne[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ca,Ea);Ne[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ca,Ea);Ne[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pa(e,t,n,r){var o=Ne.hasOwnProperty(t)?Ne[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(op(t,n,o,r)&&(n=null),r||o===null?np(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),pc=Symbol.for("react.context"),Na=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),Cl=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),Rs=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ki;function dr(e){if(Ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ki=t&&t[1]||""}return`
`+Ki+e}var Qi=!1;function Gi(e,t){if(!e||Qi)return"";Qi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Qi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function ip(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case Pn:return"Portal";case Sl:return"Profiler";case _a:return"StrictMode";case kl:return"Suspense";case Cl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pc:return(e.displayName||"Context")+".Consumer";case dc:return(e._context.displayName||"Context")+".Provider";case Na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function lp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===_a?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(e){var t=mc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=ap(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Os(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&Pa(e,"checked",t,!1)}function _l(e,t){vc(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nl(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ls(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nl(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Is(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(pr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function yc(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,xc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Sc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Sc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var up=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function $a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ol=null,Fn=null,Un=null;function Ms(e){if(e=Qr(e)){if(typeof Ol!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ui(t),Ol(e.stateNode,e.type,t))}}function Cc(e){Fn?Un?Un.push(e):Un=[e]:Fn=e}function Ec(){if(Fn){var e=Fn,t=Un;if(Un=Fn=null,Ms(e),t)for(e=0;e<t.length;e++)Ms(t[e])}}function Pc(e,t){return e(t)}function _c(){}var Yi=!1;function Nc(e,t,n){if(Yi)return e(t,n);Yi=!0;try{return Pc(e,t,n)}finally{Yi=!1,(Fn!==null||Un!==null)&&(_c(),Ec())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ll=!1;if(Nt)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){Ll=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{Ll=!1}function cp(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var vr=!1,To=null,Ro=!1,Il=null,fp={onError:function(e){vr=!0,To=e}};function dp(e,t,n,r,o,i,l,a,s){vr=!1,To=null,cp.apply(fp,arguments)}function pp(e,t,n,r,o,i,l,a,s){if(dp.apply(this,arguments),vr){if(vr){var u=To;vr=!1,To=null}else throw Error(C(198));Ro||(Ro=!0,Il=u)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ds(e){if(Sn(e)!==e)throw Error(C(188))}function hp(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ds(o),e;if(i===r)return Ds(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function $c(e){return e=hp(e),e!==null?Ac(e):null}function Ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ac(e);if(t!==null)return t;e=e.sibling}return null}var Tc=Qe.unstable_scheduleCallback,Fs=Qe.unstable_cancelCallback,mp=Qe.unstable_shouldYield,gp=Qe.unstable_requestPaint,pe=Qe.unstable_now,vp=Qe.unstable_getCurrentPriorityLevel,Aa=Qe.unstable_ImmediatePriority,Rc=Qe.unstable_UserBlockingPriority,Oo=Qe.unstable_NormalPriority,yp=Qe.unstable_LowPriority,Oc=Qe.unstable_IdlePriority,ii=null,vt=null;function wp(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:kp,xp=Math.log,Sp=Math.LN2;function kp(e){return e>>>=0,e===0?32:31-(xp(e)/Sp|0)|0}var to=64,no=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=hr(a):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),o=1<<n,r|=e[n],t&=~o;return r}function Cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ct(i),a=1<<l,s=o[l];s===-1?((a&n)===0||(a&r)!==0)&&(o[l]=Cp(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lc(){var e=to;return to<<=1,(to&4194240)===0&&(to=64),e}function Xi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ta(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Z=0;function Ic(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var jc,Ra,Mc,Dc,Fc,Ml=!1,ro=[],Ut=null,Ht=null,Bt=null,$r=new Map,Ar=new Map,jt=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Us(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":$r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qr(t),t!==null&&Ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Np(e,t,n,r,o){switch(t){case"focusin":return Ut=lr(Ut,e,t,n,r,o),!0;case"dragenter":return Ht=lr(Ht,e,t,n,r,o),!0;case"mouseover":return Bt=lr(Bt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return $r.set(i,lr($r.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ar.set(i,lr(Ar.get(i)||null,e,t,n,r,o)),!0}return!1}function Uc(e){var t=ln(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=zc(n),t!==null){e.blockedOn=t,Fc(e.priority,function(){Mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return t=Qr(n),t!==null&&Ra(t),e.blockedOn=n,!1;t.shift()}return!0}function Hs(e,t,n){wo(e)&&n.delete(t)}function zp(){Ml=!1,Ut!==null&&wo(Ut)&&(Ut=null),Ht!==null&&wo(Ht)&&(Ht=null),Bt!==null&&wo(Bt)&&(Bt=null),$r.forEach(Hs),Ar.forEach(Hs)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ml||(Ml=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,zp)))}function Tr(e){function t(o){return ar(o,e)}if(0<ro.length){ar(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&ar(Ut,e),Ht!==null&&ar(Ht,e),Bt!==null&&ar(Bt,e),$r.forEach(t),Ar.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)Uc(n),n.blockedOn===null&&jt.shift()}var Hn=Tt.ReactCurrentBatchConfig,Io=!0;function $p(e,t,n,r){var o=Z,i=Hn.transition;Hn.transition=null;try{Z=1,Oa(e,t,n,r)}finally{Z=o,Hn.transition=i}}function Ap(e,t,n,r){var o=Z,i=Hn.transition;Hn.transition=null;try{Z=4,Oa(e,t,n,r)}finally{Z=o,Hn.transition=i}}function Oa(e,t,n,r){if(Io){var o=Dl(e,t,n,r);if(o===null)ll(e,t,r,jo,n),Us(e,r);else if(Np(o,e,t,n,r))r.stopPropagation();else if(Us(e,r),t&4&&-1<_p.indexOf(e)){for(;o!==null;){var i=Qr(o);if(i!==null&&jc(i),i=Dl(e,t,n,r),i===null&&ll(e,t,r,jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ll(e,t,r,null,n)}}var jo=null;function Dl(e,t,n,r){if(jo=null,e=$a(r),e=ln(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return jo=e,null}function Hc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vp()){case Aa:return 1;case Rc:return 4;case Oo:case yp:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var Dt=null,La=null,xo=null;function Bc(){if(xo)return xo;var e,t=La,n=t.length,r,o="value"in Dt?Dt.value:Dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return xo=o.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function Bs(){return!1}function Ye(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oo:Bs,this.isPropagationStopped=Bs,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Ye(er),Kr=se({},er,{view:0,detail:0}),Tp=Ye(Kr),Zi,Ji,sr,li=se({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Zi=e.screenX-sr.screenX,Ji=e.screenY-sr.screenY):Ji=Zi=0,sr=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Ws=Ye(li),Rp=se({},li,{dataTransfer:0}),Op=Ye(Rp),Lp=se({},Kr,{relatedTarget:0}),qi=Ye(Lp),Ip=se({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),jp=Ye(Ip),Mp=se({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=Ye(Mp),Fp=se({},er,{data:0}),Vs=Ye(Fp),Up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bp[e])?!!t[e]:!1}function ja(){return Wp}var Vp=se({},Kr,{key:function(e){if(e.key){var t=Up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bp=Ye(Vp),Kp=se({},li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=Ye(Kp),Qp=se({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),Gp=Ye(Qp),Yp=se({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xp=Ye(Yp),Zp=se({},li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Ye(Zp),qp=[9,13,27,32],Ma=Nt&&"CompositionEvent"in window,yr=null;Nt&&"documentMode"in document&&(yr=document.documentMode);var eh=Nt&&"TextEvent"in window&&!yr,Wc=Nt&&(!Ma||yr&&8<yr&&11>=yr),Ks=String.fromCharCode(32),Qs=!1;function Vc(e,t){switch(e){case"keyup":return qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function th(e,t){switch(e){case"compositionend":return bc(t);case"keypress":return t.which!==32?null:(Qs=!0,Ks);case"textInput":return e=t.data,e===Ks&&Qs?null:e;default:return null}}function nh(e,t){if(Nn)return e==="compositionend"||!Ma&&Vc(e,t)?(e=Bc(),xo=La=Dt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wc&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function Kc(e,t,n,r){Cc(r),t=Mo(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Rr=null;function oh(e){rf(e,0)}function ai(e){var t=An(e);if(gc(t))return e}function ih(e,t){if(e==="change")return t}var Qc=!1;if(Nt){var el;if(Nt){var tl="oninput"in document;if(!tl){var Ys=document.createElement("div");Ys.setAttribute("oninput","return;"),tl=typeof Ys.oninput=="function"}el=tl}else el=!1;Qc=el&&(!document.documentMode||9<document.documentMode)}function Xs(){wr&&(wr.detachEvent("onpropertychange",Gc),Rr=wr=null)}function Gc(e){if(e.propertyName==="value"&&ai(Rr)){var t=[];Kc(t,Rr,e,$a(e)),Nc(oh,t)}}function lh(e,t,n){e==="focusin"?(Xs(),wr=t,Rr=n,wr.attachEvent("onpropertychange",Gc)):e==="focusout"&&Xs()}function ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai(Rr)}function sh(e,t){if(e==="click")return ai(t)}function uh(e,t){if(e==="input"||e==="change")return ai(t)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:ch;function Or(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!xl.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Js(e,t){var n=Zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zs(n)}}function Yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fh(e){var t=Xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yc(n.ownerDocument.documentElement,n)){if(r!==null&&Da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Js(n,i);var l=Js(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dh=Nt&&"documentMode"in document&&11>=document.documentMode,zn=null,Fl=null,xr=null,Ul=!1;function qs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||zn==null||zn!==Ao(r)||(r=zn,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Or(xr,r)||(xr=r,r=Mo(Fl,"onSelect"),0<r.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $n={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},nl={},Zc={};Nt&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function si(e){if(nl[e])return nl[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return nl[e]=t[n];return e}var Jc=si("animationend"),qc=si("animationiteration"),ef=si("animationstart"),tf=si("transitionend"),nf=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){nf.set(e,t),xn(t,[e])}for(var rl=0;rl<eu.length;rl++){var ol=eu[rl],ph=ol.toLowerCase(),hh=ol[0].toUpperCase()+ol.slice(1);qt(ph,"on"+hh)}qt(Jc,"onAnimationEnd");qt(qc,"onAnimationIteration");qt(ef,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(tf,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pp(r,t,void 0,e),e.currentTarget=null}function rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;tu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;tu(o,a,u),i=s}}}if(Ro)throw e=Il,Ro=!1,Il=null,e}function re(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(of(t,e,2,!1),n.add(r))}function il(e,t,n){var r=0;t&&(r|=4),of(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[lo]){e[lo]=!0,fc.forEach(function(n){n!=="selectionchange"&&(mh.has(n)||il(n,!1,e),il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,il("selectionchange",!1,t))}}function of(e,t,n,r){switch(Hc(t)){case 1:var o=$p;break;case 4:o=Ap;break;default:o=Oa}n=o.bind(null,t,n,e),o=void 0,!Ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ll(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=ln(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Nc(function(){var u=i,h=$a(n),m=[];e:{var p=nf.get(e);if(p!==void 0){var y=Ia,w=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":y=bp;break;case"focusin":w="focus",y=qi;break;case"focusout":w="blur",y=qi;break;case"beforeblur":case"afterblur":y=qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gp;break;case Jc:case qc:case ef:y=jp;break;case tf:y=Xp;break;case"scroll":y=Tp;break;case"wheel":y=Jp;break;case"copy":case"cut":case"paste":y=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=bs}var S=(t&4)!==0,$=!S&&e==="scroll",f=S?p!==null?p+"Capture":null:p;S=[];for(var c=u,d;c!==null;){d=c;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,f!==null&&(x=zr(c,f),x!=null&&S.push(Ir(c,x,d)))),$)break;c=c.return}0<S.length&&(p=new y(p,w,null,n,h),m.push({event:p,listeners:S}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Rl&&(w=n.relatedTarget||n.fromElement)&&(ln(w)||w[zt]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?ln(w):null,w!==null&&($=Sn(w),w!==$||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(S=Ws,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=bs,x="onPointerLeave",f="onPointerEnter",c="pointer"),$=y==null?p:An(y),d=w==null?p:An(w),p=new S(x,c+"leave",y,n,h),p.target=$,p.relatedTarget=d,x=null,ln(h)===u&&(S=new S(f,c+"enter",w,n,h),S.target=d,S.relatedTarget=$,x=S),$=x,y&&w)t:{for(S=y,f=w,c=0,d=S;d;d=En(d))c++;for(d=0,x=f;x;x=En(x))d++;for(;0<c-d;)S=En(S),c--;for(;0<d-c;)f=En(f),d--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=En(S),f=En(f)}S=null}else S=null;y!==null&&nu(m,p,y,S,!1),w!==null&&$!==null&&nu(m,$,w,S,!0)}}e:{if(p=u?An(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=ih;else if(Gs(p))if(Qc)E=uh;else{E=ah;var A=lh}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=sh);if(E&&(E=E(e,u))){Kc(m,E,n,h);break e}A&&A(e,p,u),e==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&Nl(p,"number",p.value)}switch(A=u?An(u):window,e){case"focusin":(Gs(A)||A.contentEditable==="true")&&(zn=A,Fl=u,xr=null);break;case"focusout":xr=Fl=zn=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,qs(m,n,h);break;case"selectionchange":if(dh)break;case"keydown":case"keyup":qs(m,n,h)}var k;if(Ma)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nn?Vc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Wc&&n.locale!=="ko"&&(Nn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nn&&(k=Bc()):(Dt=h,La="value"in Dt?Dt.value:Dt.textContent,Nn=!0)),A=Mo(u,P),0<A.length&&(P=new Vs(P,e,null,n,h),m.push({event:P,listeners:A}),k?P.data=k:(k=bc(n),k!==null&&(P.data=k)))),(k=eh?th(e,n):nh(e,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(h=new Vs("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=k))}rf(m,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=zr(e,n),i!=null&&r.unshift(Ir(e,i,o)),i=zr(e,t),i!=null&&r.push(Ir(e,i,o))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=zr(n,i),s!=null&&l.unshift(Ir(n,s,a))):o||(s=zr(n,i),s!=null&&l.push(Ir(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var gh=/\r\n?/g,vh=/\u0000|\uFFFD/g;function ru(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(vh,"")}function ao(e,t,n){if(t=ru(t),ru(e)!==t&&n)throw Error(C(425))}function Do(){}var Hl=null,Bl=null;function Wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(xh)}:Vl;function xh(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Tr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),gt="__reactFiber$"+tr,jr="__reactProps$"+tr,zt="__reactContainer$"+tr,bl="__reactEvents$"+tr,Sh="__reactListeners$"+tr,kh="__reactHandles$"+tr;function ln(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=iu(e);e!==null;){if(n=e[gt])return n;e=iu(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){return e=e[gt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ui(e){return e[jr]||null}var Kl=[],Tn=-1;function en(e){return{current:e}}function oe(e){0>Tn||(e.current=Kl[Tn],Kl[Tn]=null,Tn--)}function ne(e,t){Tn++,Kl[Tn]=e.current,e.current=t}var Jt={},Re=en(Jt),He=en(!1),pn=Jt;function bn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Fo(){oe(He),oe(Re)}function lu(e,t,n){if(Re.current!==Jt)throw Error(C(168));ne(Re,t),ne(He,n)}function lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,lp(e)||"Unknown",o));return se({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,pn=Re.current,ne(Re,e),ne(He,He.current),!0}function au(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=lf(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(Re),ne(Re,e)):oe(He),ne(He,n)}var Ct=null,ci=!1,sl=!1;function af(e){Ct===null?Ct=[e]:Ct.push(e)}function Ch(e){ci=!0,af(e)}function tn(){if(!sl&&Ct!==null){sl=!0;var e=0,t=Z;try{var n=Ct;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,ci=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),Tc(Aa,tn),o}finally{Z=t,sl=!1}}return null}var Rn=[],On=0,Ho=null,Bo=0,Ze=[],Je=0,hn=null,Et=1,Pt="";function nn(e,t){Rn[On++]=Bo,Rn[On++]=Ho,Ho=e,Bo=t}function sf(e,t,n){Ze[Je++]=Et,Ze[Je++]=Pt,Ze[Je++]=hn,hn=e;var r=Et;e=Pt;var o=32-ct(r)-1;r&=~(1<<o),n+=1;var i=32-ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Et=1<<32-ct(t)+o|n<<o|r,Pt=i+e}else Et=1<<i|n<<o|r,Pt=e}function Fa(e){e.return!==null&&(nn(e,1),sf(e,1,0))}function Ua(e){for(;e===Ho;)Ho=Rn[--On],Rn[On]=null,Bo=Rn[--On],Rn[On]=null;for(;e===hn;)hn=Ze[--Je],Ze[Je]=null,Pt=Ze[--Je],Ze[Je]=null,Et=Ze[--Je],Ze[Je]=null}var Ke=null,be=null,ie=!1,st=null;function uf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,be=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:Et,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,be=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gl(e){if(ie){var t=be;if(t){var n=t;if(!su(e,t)){if(Ql(e))throw Error(C(418));t=Wt(n.nextSibling);var r=Ke;t&&su(e,t)?uf(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ke=e)}}else{if(Ql(e))throw Error(C(418));e.flags=e.flags&-4097|2,ie=!1,Ke=e}}}function uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function so(e){if(e!==Ke)return!1;if(!ie)return uu(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wl(e.type,e.memoizedProps)),t&&(t=be)){if(Ql(e))throw cf(),Error(C(418));for(;t;)uf(e,t),t=Wt(t.nextSibling)}if(uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=Ke?Wt(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=be;e;)e=Wt(e.nextSibling)}function Kn(){be=Ke=null,ie=!1}function Ha(e){st===null?st=[e]:st.push(e)}var Eh=Tt.ReactCurrentBatchConfig;function lt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wo=en(null),Vo=null,Ln=null,Ba=null;function Wa(){Ba=Ln=Vo=null}function Va(e){var t=Wo.current;oe(Wo),e._currentValue=t}function Yl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){Vo=e,Ba=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Ba!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Vo===null)throw Error(C(308));Ln=e,Vo.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var an=null;function ba(e){an===null?an=[e]:an.push(e)}function ff(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ba(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(b&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,ba(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}function cu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;It=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,h=u=s=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,S=a;switch(p=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(y,m,p);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(y,m,p):w,p==null)break e;m=se({},m,p);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,s=m):h=h.next=y,l|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(1);if(h===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);gn|=l,e.lanes=l,e.memoizedState=m}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var pf=new cc.Component().refs;function Xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=Kt(e),i=_t(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(ft(t,e,o,r),ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),o=Kt(e),i=_t(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(ft(t,e,o,r),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Kt(e),o=_t(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(ft(t,e,r,n),ko(t,e,r))}};function du(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(o,i):!0}function hf(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(o=Be(t)?pn:Re.current,r=t.contextTypes,i=(r=r!=null)?bn(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=pf,Ka(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=tt(i):(i=Be(t)?pn:Re.current,o.context=bn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fi.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===pf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function mf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Qt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,x){return c===null||c.tag!==6?(c=ml(d,f.mode,x),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,x){var E=d.type;return E===_n?h(f,c,d.props.children,x,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Lt&&hu(E)===c.type)?(x=o(c,d.props),x.ref=ur(f,c,d),x.return=f,x):(x=zo(d.type,d.key,d.props,null,f.mode,x),x.ref=ur(f,c,d),x.return=f,x)}function u(f,c,d,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=gl(d,f.mode,x),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function h(f,c,d,x,E){return c===null||c.tag!==7?(c=dn(d,f.mode,x,E),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ml(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return d=zo(c.type,c.key,c.props,null,f.mode,d),d.ref=ur(f,null,c),d.return=f,d;case Pn:return c=gl(c,f.mode,d),c.return=f,c;case Lt:var x=c._init;return m(f,x(c._payload),d)}if(pr(c)||or(c))return c=dn(c,f.mode,d,null),c.return=f,c;uo(f,c)}return null}function p(f,c,d,x){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,c,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:return d.key===E?s(f,c,d,x):null;case Pn:return d.key===E?u(f,c,d,x):null;case Lt:return E=d._init,p(f,c,E(d._payload),x)}if(pr(d)||or(d))return E!==null?null:h(f,c,d,x,null);uo(f,d)}return null}function y(f,c,d,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(d)||null,a(c,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jr:return f=f.get(x.key===null?d:x.key)||null,s(c,f,x,E);case Pn:return f=f.get(x.key===null?d:x.key)||null,u(c,f,x,E);case Lt:var A=x._init;return y(f,c,d,A(x._payload),E)}if(pr(x)||or(x))return f=f.get(d)||null,h(c,f,x,E,null);uo(c,x)}return null}function w(f,c,d,x){for(var E=null,A=null,k=c,P=c=0,M=null;k!==null&&P<d.length;P++){k.index>P?(M=k,k=null):M=k.sibling;var j=p(f,k,d[P],x);if(j===null){k===null&&(k=M);break}e&&k&&j.alternate===null&&t(f,k),c=i(j,c,P),A===null?E=j:A.sibling=j,A=j,k=M}if(P===d.length)return n(f,k),ie&&nn(f,P),E;if(k===null){for(;P<d.length;P++)k=m(f,d[P],x),k!==null&&(c=i(k,c,P),A===null?E=k:A.sibling=k,A=k);return ie&&nn(f,P),E}for(k=r(f,k);P<d.length;P++)M=y(k,f,P,d[P],x),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?P:M.key),c=i(M,c,P),A===null?E=M:A.sibling=M,A=M);return e&&k.forEach(function(Q){return t(f,Q)}),ie&&nn(f,P),E}function S(f,c,d,x){var E=or(d);if(typeof E!="function")throw Error(C(150));if(d=E.call(d),d==null)throw Error(C(151));for(var A=E=null,k=c,P=c=0,M=null,j=d.next();k!==null&&!j.done;P++,j=d.next()){k.index>P?(M=k,k=null):M=k.sibling;var Q=p(f,k,j.value,x);if(Q===null){k===null&&(k=M);break}e&&k&&Q.alternate===null&&t(f,k),c=i(Q,c,P),A===null?E=Q:A.sibling=Q,A=Q,k=M}if(j.done)return n(f,k),ie&&nn(f,P),E;if(k===null){for(;!j.done;P++,j=d.next())j=m(f,j.value,x),j!==null&&(c=i(j,c,P),A===null?E=j:A.sibling=j,A=j);return ie&&nn(f,P),E}for(k=r(f,k);!j.done;P++,j=d.next())j=y(k,f,P,j.value,x),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?P:j.key),c=i(j,c,P),A===null?E=j:A.sibling=j,A=j);return e&&k.forEach(function(te){return t(f,te)}),ie&&nn(f,P),E}function $(f,c,d,x){if(typeof d=="object"&&d!==null&&d.type===_n&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:e:{for(var E=d.key,A=c;A!==null;){if(A.key===E){if(E=d.type,E===_n){if(A.tag===7){n(f,A.sibling),c=o(A,d.props.children),c.return=f,f=c;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Lt&&hu(E)===A.type){n(f,A.sibling),c=o(A,d.props),c.ref=ur(f,A,d),c.return=f,f=c;break e}n(f,A);break}else t(f,A);A=A.sibling}d.type===_n?(c=dn(d.props.children,f.mode,x,d.key),c.return=f,f=c):(x=zo(d.type,d.key,d.props,null,f.mode,x),x.ref=ur(f,c,d),x.return=f,f=x)}return l(f);case Pn:e:{for(A=d.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=gl(d,f.mode,x),c.return=f,f=c}return l(f);case Lt:return A=d._init,$(f,c,A(d._payload),x)}if(pr(d))return w(f,c,d,x);if(or(d))return S(f,c,d,x);uo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=ml(d,f.mode,x),c.return=f,f=c),l(f)):n(f,c)}return $}var Qn=mf(!0),gf=mf(!1),Gr={},yt=en(Gr),Mr=en(Gr),Dr=en(Gr);function sn(e){if(e===Gr)throw Error(C(174));return e}function Qa(e,t){switch(ne(Dr,t),ne(Mr,e),ne(yt,Gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}oe(yt),ne(yt,t)}function Gn(){oe(yt),oe(Mr),oe(Dr)}function vf(e){sn(Dr.current);var t=sn(yt.current),n=$l(t,e.type);t!==n&&(ne(Mr,e),ne(yt,n))}function Ga(e){Mr.current===e&&(oe(yt),oe(Mr))}var le=en(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ul=[];function Ya(){for(var e=0;e<ul.length;e++)ul[e]._workInProgressVersionPrimary=null;ul.length=0}var Co=Tt.ReactCurrentDispatcher,cl=Tt.ReactCurrentBatchConfig,mn=0,ae=null,me=null,ye=null,Qo=!1,Sr=!1,Fr=0,Ph=0;function $e(){throw Error(C(321))}function Xa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Za(e,t,n,r,o,i){if(mn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?$h:Ah,e=n(r,o),Sr){i=0;do{if(Sr=!1,Fr=0,25<=i)throw Error(C(301));i+=1,ye=me=null,t.updateQueue=null,Co.current=Th,e=n(r,o)}while(Sr)}if(Co.current=Go,t=me!==null&&me.next!==null,mn=0,ye=me=ae=null,Qo=!1,t)throw Error(C(300));return e}function Ja(){var e=Fr!==0;return Fr=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function nt(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(C(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function Ur(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var h=u.lane;if((mn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,ae.lanes|=h,gn|=h}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,pt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,gn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function dl(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);pt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yf(){}function wf(e,t){var n=ae,r=nt(),o=t(),i=!pt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,qa(kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Hr(9,Sf.bind(null,n,r,o,t),void 0,null),we===null)throw Error(C(349));(mn&30)!==0||xf(n,t,o)}return o}function xf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sf(e,t,n,r){t.value=n,t.getSnapshot=r,Cf(t)&&Ef(e)}function kf(e,t,n){return n(function(){Cf(t)&&Ef(e)})}function Cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Ef(e){var t=$t(e,1);t!==null&&ft(t,e,1,-1)}function mu(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=zh.bind(null,ae,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pf(){return nt().memoizedState}function Eo(e,t,n,r){var o=mt();ae.flags|=e,o.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function di(e,t,n,r){var o=nt();r=r===void 0?null:r;var i=void 0;if(me!==null){var l=me.memoizedState;if(i=l.destroy,r!==null&&Xa(r,l.deps)){o.memoizedState=Hr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=Hr(1|t,n,i,r)}function gu(e,t){return Eo(8390656,8,e,t)}function qa(e,t){return di(2048,8,e,t)}function _f(e,t){return di(4,2,e,t)}function Nf(e,t){return di(4,4,e,t)}function zf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $f(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,zf.bind(null,t,e),n)}function es(){}function Af(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rf(e,t,n){return(mn&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(pt(n,t)||(n=Lc(),ae.lanes|=n,gn|=n,e.baseState=!0),t)}function _h(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=cl.transition;cl.transition={};try{e(!1),t()}finally{Z=n,cl.transition=r}}function Of(){return nt().memoizedState}function Nh(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lf(e))If(t,n);else if(n=ff(e,t,n,r),n!==null){var o=Ie();ft(n,e,r,o),jf(n,t,r)}}function zh(e,t,n){var r=Kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lf(e))If(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,pt(a,l)){var s=t.interleaved;s===null?(o.next=o,ba(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ff(e,t,o,r),n!==null&&(o=Ie(),ft(n,e,r,o),jf(n,t,r))}}function Lf(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function If(e,t){Sr=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ta(e,n)}}var Go={readContext:tt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},$h={readContext:tt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,zf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nh.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:mu,useDebugValue:es,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=mu(!1),t=e[0];return e=_h.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=mt();if(ie){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),we===null)throw Error(C(349));(mn&30)!==0||xf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,gu(kf.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,Sf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=mt(),t=we.identifierPrefix;if(ie){var n=Pt,r=Et;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ah={readContext:tt,useCallback:Af,useContext:tt,useEffect:qa,useImperativeHandle:$f,useInsertionEffect:_f,useLayoutEffect:Nf,useMemo:Tf,useReducer:fl,useRef:Pf,useState:function(){return fl(Ur)},useDebugValue:es,useDeferredValue:function(e){var t=nt();return Rf(t,me.memoizedState,e)},useTransition:function(){var e=fl(Ur)[0],t=nt().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1},Th={readContext:tt,useCallback:Af,useContext:tt,useEffect:qa,useImperativeHandle:$f,useInsertionEffect:_f,useLayoutEffect:Nf,useMemo:Tf,useReducer:dl,useRef:Pf,useState:function(){return dl(Ur)},useDebugValue:es,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Rf(t,me.memoizedState,e)},useTransition:function(){var e=dl(Ur)[0],t=nt().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:wf,useId:Of,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=ip(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rh=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,sa=r),Jl(e,t)},n}function Df(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Jl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Kh.bind(null,e,t,n),t.then(e,e))}function yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Oh=Tt.ReactCurrentOwner,Ue=!1;function Le(e,t,n,r){t.child=e===null?gf(t,null,n,r):Qn(t,e.child,n,r)}function xu(e,t,n,r,o){n=n.render;var i=t.ref;return Bn(t,o),r=Za(e,t,n,r,i,o),n=Ja(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(ie&&n&&Fa(t),t.flags|=1,Le(e,t,r,o),t.child)}function Su(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ss(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ff(e,t,i,r,o)):(e=zo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(l,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ff(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Or(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,At(e,t,o)}return ql(e,t,n,r,o)}function Uf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(jn,Ve),Ve|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(jn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(jn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(jn,Ve),Ve|=r;return Le(e,t,o,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,o){var i=Be(n)?pn:Re.current;return i=bn(t,i),Bn(t,o),n=Za(e,t,n,r,i,o),r=Ja(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(ie&&r&&Fa(t),t.flags|=1,Le(e,t,n,o),t.child)}function ku(e,t,n,r,o){if(Be(n)){var i=!0;Uo(t)}else i=!1;if(Bn(t,o),t.stateNode===null)Po(e,t),hf(t,n,r),Zl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Be(n)?pn:Re.current,u=bn(t,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&pu(t,l,r,u),It=!1;var p=t.memoizedState;l.state=p,bo(t,r,l,o),s=t.memoizedState,a!==r||p!==s||He.current||It?(typeof h=="function"&&(Xl(t,n,h,r),s=t.memoizedState),(a=It||du(t,n,a,r,p,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,df(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:lt(t.type,a),l.props=u,m=t.pendingProps,p=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=tt(s):(s=Be(n)?pn:Re.current,s=bn(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==s)&&pu(t,l,r,s),It=!1,p=t.memoizedState,l.state=p,bo(t,r,l,o);var w=t.memoizedState;a!==m||p!==w||He.current||It?(typeof y=="function"&&(Xl(t,n,y,r),w=t.memoizedState),(u=It||du(t,n,u,r,p,w,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ea(e,t,n,r,i,o)}function ea(e,t,n,r,o,i){Hf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&au(t,n,!1),At(e,t,i);r=t.stateNode,Oh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,a,i)):Le(e,t,a,i),t.memoizedState=r.state,o&&au(t,n,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lu(e,t.context,!1),Qa(e,t.containerInfo)}function Cu(e,t,n,r,o){return Kn(),Ha(o),t.flags|=256,Le(e,t,n,r),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function na(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wf(e,t,n){var r=t.pendingProps,o=le.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(le,o&1),e===null)return Gl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=mi(l,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=na(n),t.memoizedState=ta,e):ts(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Lh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Qt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Qt(a,i):(i=dn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?na(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ta,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&Ha(r),Qn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=pl(Error(C(422))),co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=mi({mode:"visible",children:r.children},o,0,null),i=dn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Qn(t,e.child,null,l),t.child.memoizedState=na(l),t.memoizedState=ta,i);if((t.mode&1)===0)return co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=pl(i,r,void 0),co(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ue||a){if(r=we,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),ft(r,e,o,-1))}return as(),r=pl(Error(C(421))),co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Qh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,be=Wt(o.nextSibling),Ke=t,ie=!0,st=null,e!==null&&(Ze[Je++]=Et,Ze[Je++]=Pt,Ze[Je++]=hn,Et=e.id,Pt=e.overflow,hn=t),t=ts(t,r.children),t.flags|=4096,t)}function Eu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yl(e.return,t,n)}function hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Vf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eu(e,n,t);else if(e.tag===19)Eu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}hl(t,!0,n,null,i);break;case"together":hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ih(e,t,n){switch(t.tag){case 3:Bf(t),Kn();break;case 5:vf(t);break;case 1:Be(t.type)&&Uo(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(Wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Wf(e,t,n):(ne(le,le.current&1),e=At(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Vf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Uf(e,t,n)}return At(e,t,n)}var bf,ra,Kf,Qf;bf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ra=function(){};Kf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(yt.current);var i=null;switch(n){case"input":o=Pl(e,o),r=Pl(e,r),i=[];break;case"select":o=se({},o,{value:void 0}),r=se({},r,{value:void 0}),i=[];break;case"textarea":o=zl(e,o),r=zl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}Al(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_r.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_r.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Qf=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jh(e,t,n){var r=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Be(t.type)&&Fo(),Ae(t),null;case 3:return r=t.stateNode,Gn(),oe(He),oe(Re),Ya(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,st!==null&&(fa(st),st=null))),ra(e,t),Ae(t),null;case 5:Ga(t);var o=sn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Kf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ae(t),null}if(e=sn(yt.current),so(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[jr]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<mr.length;o++)re(mr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Os(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Is(r,i),re("invalid",r)}Al(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ao(r.textContent,a,e),o=["children",""+a]):_r.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":qr(r),Ls(r,i,!0);break;case"textarea":qr(r),js(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Do)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[gt]=t,e[jr]=r,bf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Tl(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<mr.length;o++)re(mr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Os(e,r),o=Pl(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=se({},r,{value:void 0}),re("invalid",e);break;case"textarea":Is(e,r),o=zl(e,r),re("invalid",e);break;default:o=r}Al(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?kc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Nr(e,s):typeof s=="number"&&Nr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_r.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&Pa(e,i,s,l))}switch(n){case"input":qr(e),Ls(e,r,!1);break;case"textarea":qr(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=sn(Dr.current),sn(yt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ae(t),null;case 13:if(oe(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&be!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cf(),Kn(),t.flags|=98560,i=!1;else if(i=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[gt]=t}else Kn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),i=!1}else st!==null&&(fa(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?ge===0&&(ge=3):as())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Gn(),ra(e,t),e===null&&Lr(t.stateNode.containerInfo),Ae(t),null;case 10:return Va(t.type._context),Ae(t),null;case 17:return Be(t.type)&&Fo(),Ae(t),null;case 19:if(oe(le),i=t.memoizedState,i===null)return Ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)cr(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ko(e),l!==null){for(t.flags|=128,cr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Xn&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ko(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ie)return Ae(t),null}else 2*pe()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Mh(e,t){switch(Ua(t),t.tag){case 1:return Be(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),oe(He),oe(Re),Ya(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(oe(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(le),null;case 4:return Gn(),null;case 10:return Va(t.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var fo=!1,Te=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,O=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function oa(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Pu=!1;function Fh(e,t){if(Hl=Io,e=Xc(),Da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++u===o&&(a=l),p===i&&++h===r&&(s=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bl={focusedElem:e,selectionRange:n},Io=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,$=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:lt(t.type,S),$);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){ce(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=Pu,Pu=!1,w}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&oa(t,n,i)}o=o.next}while(o!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[jr],delete t[bl],delete t[Sh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yf(e){return e.tag===5||e.tag===3||e.tag===4}function _u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function la(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(la(e,t,n),e=e.sibling;e!==null;)la(e,t,n),e=e.sibling}function aa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(aa(e,t,n),e=e.sibling;e!==null;)aa(e,t,n),e=e.sibling}var Pe=null,at=!1;function Ot(e,t,n){for(n=n.child;n!==null;)Xf(e,t,n),n=n.sibling}function Xf(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:Te||In(n,t);case 6:var r=Pe,o=at;Pe=null,Ot(e,t,n),Pe=r,at=o,Pe!==null&&(at?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(at?(e=Pe,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),Tr(e)):al(Pe,n.stateNode));break;case 4:r=Pe,o=at,Pe=n.stateNode.containerInfo,at=!0,Ot(e,t,n),Pe=r,at=o;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&oa(n,t,l),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!Te&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Ot(e,t,n),Te=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dh),t.forEach(function(r){var o=Gh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,at=!1;break e;case 3:Pe=a.stateNode.containerInfo,at=!0;break e;case 4:Pe=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(Pe===null)throw Error(C(160));Xf(i,l,o),Pe=null,at=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ce(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zf(t,e),t=t.sibling}function Zf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),r&4){try{kr(3,e,e.return),pi(3,e)}catch(S){ce(e,e.return,S)}try{kr(5,e,e.return)}catch(S){ce(e,e.return,S)}}break;case 1:it(t,e),ht(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(it(t,e),ht(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var o=e.stateNode;try{Nr(o,"")}catch(S){ce(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&vc(o,i),Tl(a,l);var u=Tl(a,i);for(l=0;l<s.length;l+=2){var h=s[l],m=s[l+1];h==="style"?kc(o,m):h==="dangerouslySetInnerHTML"?xc(o,m):h==="children"?Nr(o,m):Pa(o,h,m,u)}switch(a){case"input":_l(o,i);break;case"textarea":yc(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Dn(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Dn(o,!!i.multiple,i.defaultValue,!0):Dn(o,!!i.multiple,i.multiple?[]:"",!1))}o[jr]=i}catch(S){ce(e,e.return,S)}}break;case 6:if(it(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){ce(e,e.return,S)}}break;case 3:if(it(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(S){ce(e,e.return,S)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(os=pe())),r&4&&Nu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||h,it(t,e),Te=u):it(t,e),ht(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&(e.mode&1)!==0)for(O=e,h=e.child;h!==null;){for(m=O=h;O!==null;){switch(p=O,y=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:In(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){ce(r,n,S)}}break;case 5:In(p,p.return);break;case 22:if(p.memoizedState!==null){$u(m);continue}}y!==null?(y.return=p,O=y):$u(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Sc("display",l))}catch(S){ce(e,e.return,S)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(S){ce(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:it(t,e),ht(e),r&4&&Nu(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Nr(o,""),r.flags&=-33);var i=_u(e);aa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=_u(e);la(e,a,l);break;default:throw Error(C(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e,t,n){O=e,Jf(e)}function Jf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||fo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Te;a=fo;var u=Te;if(fo=l,(Te=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?Au(o):s!==null?(s.return=l,O=s):Au(o);for(;i!==null;)O=i,Jf(i),i=i.sibling;O=o,fo=a,Te=u}zu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,O=i):zu(e)}}function zu(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Tr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Te||t.flags&512&&ia(t)}catch(p){ce(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function $u(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Au(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ce(t,o,s)}}var i=t.return;try{ia(t)}catch(s){ce(t,i,s)}break;case 5:var l=t.return;try{ia(t)}catch(s){ce(t,l,s)}}}catch(s){ce(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Hh=Math.ceil,Yo=Tt.ReactCurrentDispatcher,ns=Tt.ReactCurrentOwner,et=Tt.ReactCurrentBatchConfig,b=0,we=null,he=null,_e=0,Ve=0,jn=en(0),ge=0,Br=null,gn=0,hi=0,rs=0,Cr=null,Fe=null,os=0,Xn=1/0,kt=null,Xo=!1,sa=null,bt=null,po=!1,Ft=null,Zo=0,Er=0,ua=null,_o=-1,No=0;function Ie(){return(b&6)!==0?pe():_o!==-1?_o:_o=pe()}function Kt(e){return(e.mode&1)===0?1:(b&2)!==0&&_e!==0?_e&-_e:Eh.transition!==null?(No===0&&(No=Lc()),No):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Hc(e.type)),e)}function ft(e,t,n,r){if(50<Er)throw Er=0,ua=null,Error(C(185));br(e,n,r),((b&2)===0||e!==we)&&(e===we&&((b&2)===0&&(hi|=n),ge===4&&Mt(e,_e)),We(e,r),n===1&&b===0&&(t.mode&1)===0&&(Xn=pe()+500,ci&&tn()))}function We(e,t){var n=e.callbackNode;Ep(e,t);var r=Lo(e,e===we?_e:0);if(r===0)n!==null&&Fs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fs(n),t===1)e.tag===0?Ch(Tu.bind(null,e)):af(Tu.bind(null,e)),wh(function(){(b&6)===0&&tn()}),n=null;else{switch(Ic(r)){case 1:n=Aa;break;case 4:n=Rc;break;case 16:n=Oo;break;case 536870912:n=Oc;break;default:n=Oo}n=ld(n,qf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qf(e,t){if(_o=-1,No=0,(b&6)!==0)throw Error(C(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Lo(e,e===we?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Jo(e,r);else{t=r;var o=b;b|=2;var i=td();(we!==e||_e!==t)&&(kt=null,Xn=pe()+500,fn(e,t));do try{Vh();break}catch(a){ed(e,a)}while(1);Wa(),Yo.current=i,b=o,he!==null?t=0:(we=null,_e=0,t=ge)}if(t!==0){if(t===2&&(o=jl(e),o!==0&&(r=o,t=ca(e,o))),t===1)throw n=Br,fn(e,0),Mt(e,r),We(e,pe()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Bh(o)&&(t=Jo(e,r),t===2&&(i=jl(e),i!==0&&(r=i,t=ca(e,i))),t===1))throw n=Br,fn(e,0),Mt(e,r),We(e,pe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:rn(e,Fe,kt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=os+500-pe(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vl(rn.bind(null,e,Fe,kt),t);break}rn(e,Fe,kt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hh(r/1960))-r,10<r){e.timeoutHandle=Vl(rn.bind(null,e,Fe,kt),r);break}rn(e,Fe,kt);break;case 5:rn(e,Fe,kt);break;default:throw Error(C(329))}}}return We(e,pe()),e.callbackNode===n?qf.bind(null,e):null}function ca(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&fa(t)),e}function fa(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Bh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~rs,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if((b&6)!==0)throw Error(C(327));Wn();var t=Lo(e,0);if((t&1)===0)return We(e,pe()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var r=jl(e);r!==0&&(t=r,n=ca(e,r))}if(n===1)throw n=Br,fn(e,0),Mt(e,t),We(e,pe()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Fe,kt),We(e,pe()),null}function is(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(Xn=pe()+500,ci&&tn())}}function vn(e){Ft!==null&&Ft.tag===0&&(b&6)===0&&Wn();var t=b;b|=1;var n=et.transition,r=Z;try{if(et.transition=null,Z=1,e)return e()}finally{Z=r,et.transition=n,b=t,(b&6)===0&&tn()}}function ls(){Ve=jn.current,oe(jn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:Gn(),oe(He),oe(Re),Ya();break;case 5:Ga(r);break;case 4:Gn();break;case 13:oe(le);break;case 19:oe(le);break;case 10:Va(r.type._context);break;case 22:case 23:ls()}n=n.return}if(we=e,he=e=Qt(e.current,null),_e=Ve=t,ge=0,Br=null,rs=hi=gn=0,Fe=Cr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}an=null}return e}function ed(e,t){do{var n=he;try{if(Wa(),Co.current=Go,Qo){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qo=!1}if(mn=0,ye=me=ae=null,Sr=!1,Fr=0,ns.current=null,n===null||n.return===null){ge=1,Br=t,he=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=_e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,m=h.tag;if((h.mode&1)===0&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=yu(l);if(y!==null){y.flags&=-257,wu(y,l,a,i,t),y.mode&1&&vu(i,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(s),t.updateQueue=S}else w.add(s);break e}else{if((t&1)===0){vu(i,u,t),as();break e}s=Error(C(426))}}else if(ie&&a.mode&1){var $=yu(l);if($!==null){($.flags&65536)===0&&($.flags|=256),wu($,l,a,i,t),Ha(Yn(s,a));break e}}i=s=Yn(s,a),ge!==4&&(ge=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Mf(i,s,t);cu(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(bt===null||!bt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Df(i,a,t);cu(i,x);break e}}i=i.return}while(i!==null)}rd(n)}catch(E){t=E,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function td(){var e=Yo.current;return Yo.current=Go,e===null?Go:e}function as(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||(gn&268435455)===0&&(hi&268435455)===0||Mt(we,_e)}function Jo(e,t){var n=b;b|=2;var r=td();(we!==e||_e!==t)&&(kt=null,fn(e,t));do try{Wh();break}catch(o){ed(e,o)}while(1);if(Wa(),b=n,Yo.current=r,he!==null)throw Error(C(261));return we=null,_e=0,ge}function Wh(){for(;he!==null;)nd(he)}function Vh(){for(;he!==null&&!mp();)nd(he)}function nd(e){var t=id(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?rd(e):he=t,ns.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=jh(n,t,Ve),n!==null){he=n;return}}else{if(n=Mh(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ge===0&&(ge=5)}function rn(e,t,n){var r=Z,o=et.transition;try{et.transition=null,Z=1,bh(e,t,n,r)}finally{et.transition=o,Z=r}return null}function bh(e,t,n,r){do Wn();while(Ft!==null);if((b&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pp(e,i),e===we&&(he=we=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||po||(po=!0,ld(Oo,function(){return Wn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=et.transition,et.transition=null;var l=Z;Z=1;var a=b;b|=4,ns.current=null,Fh(e,n),Zf(n,e),fh(Bl),Io=!!Hl,Bl=Hl=null,e.current=n,Uh(n),gp(),b=a,Z=l,et.transition=i}else e.current=n;if(po&&(po=!1,Ft=e,Zo=o),i=e.pendingLanes,i===0&&(bt=null),wp(n.stateNode),We(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=sa,sa=null,e;return(Zo&1)!==0&&e.tag!==0&&Wn(),i=e.pendingLanes,(i&1)!==0?e===ua?Er++:(Er=0,ua=e):Er=0,tn(),null}function Wn(){if(Ft!==null){var e=Ic(Zo),t=et.transition,n=Z;try{if(et.transition=null,Z=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Zo=0,(b&6)!==0)throw Error(C(331));var o=b;for(b|=4,O=e.current;O!==null;){var i=O,l=i.child;if((O.flags&16)!==0){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:kr(8,h,i)}var m=h.child;if(m!==null)m.return=h,O=m;else for(;O!==null;){h=O;var p=h.sibling,y=h.return;if(Gf(h),h===u){O=null;break}if(p!==null){p.return=y,O=p;break}O=y}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var $=S.sibling;S.sibling=null,S=$}while(S!==null)}}O=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:kr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var d=l.child;if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,O=d;else e:for(l=c;O!==null;){if(a=O,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(E){ce(a,a.return,E)}if(a===l){O=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}if(b=o,tn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ii,e)}catch{}r=!0}return r}finally{Z=n,et.transition=t}}return!1}function Ru(e,t,n){t=Yn(n,t),t=Mf(e,t,1),e=Vt(e,t,1),t=Ie(),e!==null&&(br(e,1,t),We(e,t))}function ce(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Yn(n,e),e=Df(t,e,1),t=Vt(t,e,1),e=Ie(),t!==null&&(br(t,1,e),We(t,e));break}}t=t.return}}function Kh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>pe()-os?fn(e,0):rs|=n),We(e,t)}function od(e,t){t===0&&((e.mode&1)===0?t=1:(t=no,no<<=1,(no&130023424)===0&&(no=4194304)));var n=Ie();e=$t(e,t),e!==null&&(br(e,t,n),We(e,n))}function Qh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),od(e,n)}function Gh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),od(e,n)}var id;id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,Ih(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,ie&&(t.flags&1048576)!==0&&sf(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var o=bn(t,Re.current);Bn(t,n),o=Za(null,t,r,e,o,n);var i=Ja();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,Uo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ka(t),o.updater=fi,t.stateNode=o,o._reactInternals=t,Zl(t,r,e,n),t=ea(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&Fa(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Xh(r),e=lt(r,e),o){case 0:t=ql(null,t,r,e,n);break e;case 1:t=ku(null,t,r,e,n);break e;case 11:t=xu(null,t,r,e,n);break e;case 14:t=Su(null,t,r,lt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ql(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ku(e,t,r,o,n);case 3:e:{if(Bf(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,df(e,t),bo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yn(Error(C(423)),t),t=Cu(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(C(424)),t),t=Cu(e,t,r,n,o);break e}else for(be=Wt(t.stateNode.containerInfo.firstChild),Ke=t,ie=!0,st=null,n=gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===o){t=At(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&Gl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Wl(r,o)?l=null:i!==null&&Wl(r,i)&&(t.flags|=32),Hf(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&Gl(t),null;case 13:return Wf(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),xu(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(Wo,r._currentValue),r._currentValue=l,i!==null)if(pt(i.value,l)){if(i.children===o.children&&!He.current){t=At(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=_t(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Yl(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Yl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Bn(t,n),o=tt(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Su(e,t,r,o,n);case 15:return Ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Po(e,t),t.tag=1,Be(r)?(e=!0,Uo(t)):e=!1,Bn(t,n),hf(t,r,o),Zl(t,r,o,n),ea(null,t,r,!0,e,n);case 19:return Vf(e,t,n);case 22:return Uf(e,t,n)}throw Error(C(156,t.tag))};function ld(e,t){return Tc(e,t)}function Yh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Yh(e,t,n,r)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xh(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Na)return 11;if(e===za)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ss(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _n:return dn(n.children,o,i,t);case _a:l=8,o|=8;break;case Sl:return e=qe(12,n,t,o|2),e.elementType=Sl,e.lanes=i,e;case kl:return e=qe(13,n,t,o),e.elementType=kl,e.lanes=i,e;case Cl:return e=qe(19,n,t,o),e.elementType=Cl,e.lanes=i,e;case hc:return mi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dc:l=10;break e;case pc:l=9;break e;case Na:l=11;break e;case za:l=14;break e;case Lt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function mi(e,t,n,r){return e=qe(22,e,r,t),e.elementType=hc,e.lanes=n,e.stateNode={isHidden:!1},e}function ml(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function gl(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xi(0),this.expirationTimes=Xi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function us(e,t,n,r,o,i,l,a,s){return e=new Zh(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ka(i),e}function Jh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ad(e){if(!e)return Jt;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Be(n))return lf(e,n,t)}return t}function sd(e,t,n,r,o,i,l,a,s){return e=us(n,r,!0,e,o,i,l,a,s),e.context=ad(null),n=e.current,r=Ie(),o=Kt(n),i=_t(r,o),i.callback=t!=null?t:null,Vt(n,i,o),e.current.lanes=o,br(e,o,r),We(e,r),e}function gi(e,t,n,r){var o=t.current,i=Ie(),l=Kt(o);return n=ad(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,l),e!==null&&(ft(e,o,l,i),ko(e,o,l)),l}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cs(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function qh(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function fs(e){this._internalRoot=e}vi.prototype.render=fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));gi(e,t,null,null)};vi.prototype.unmount=fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){gi(null,e,null,null)}),t[zt]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&Uc(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lu(){}function em(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=qo(l);i.call(u)}}var l=sd(t,r,e,0,null,!1,!1,"",Lu);return e._reactRootContainer=l,e[zt]=l.current,Lr(e.nodeType===8?e.parentNode:e),vn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=qo(s);a.call(u)}}var s=us(e,0,!1,null,null,!1,!1,"",Lu);return e._reactRootContainer=s,e[zt]=s.current,Lr(e.nodeType===8?e.parentNode:e),vn(function(){gi(t,s,n,r)}),s}function wi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=qo(l);a.call(s)}}gi(t,l,e,o)}else l=em(n,t,e,o,r);return qo(l)}jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Ta(t,n|1),We(t,pe()),(b&6)===0&&(Xn=pe()+500,tn()))}break;case 13:vn(function(){var r=$t(e,1);if(r!==null){var o=Ie();ft(r,e,1,o)}}),cs(e,1)}};Ra=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Ie();ft(t,e,134217728,n)}cs(e,134217728)}};Mc=function(e){if(e.tag===13){var t=Kt(e),n=$t(e,t);if(n!==null){var r=Ie();ft(n,e,t,r)}cs(e,t)}};Dc=function(){return Z};Fc=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};Ol=function(e,t,n){switch(t){case"input":if(_l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ui(r);if(!o)throw Error(C(90));gc(r),_l(r,o)}}}break;case"textarea":yc(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Pc=is;_c=vn;var tm={usingClientEntryPoint:!1,Events:[Qr,An,ui,Cc,Ec,is]},fr={findFiberByHostInstance:ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nm={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||qh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{ii=ho.inject(nm),vt=ho}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(t))throw Error(C(200));return Jh(e,t,null,n)};Ge.createRoot=function(e,t){if(!ds(e))throw Error(C(299));var n=!1,r="",o=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=us(e,1,!1,null,null,n,!1,r,o),e[zt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new fs(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return vn(e)};Ge.hydrate=function(e,t,n){if(!yi(t))throw Error(C(200));return wi(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!ds(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ud;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sd(t,null,e,1,n!=null?n:null,o,!1,i,l),e[zt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vi(t)};Ge.render=function(e,t,n){if(!yi(t))throw Error(C(200));return wi(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!yi(e))throw Error(C(40));return e._reactRootContainer?(vn(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ge.unstable_batchedUpdates=is;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return wi(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ge})(ac);var Iu=ac.exports;wl.createRoot=Iu.createRoot,wl.hydrateRoot=Iu.hydrateRoot;function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ei.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));var ju=function(e){return e},Mu="beforeunload",rm="popstate";function om(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,o=r.history;function i(){var k=r.location,P=k.pathname,M=k.search,j=k.hash,Q=o.state||{};return[Q.idx,ju({pathname:P,search:M,hash:j,state:Q.usr||null,key:Q.key||"default"})]}var l=null;function a(){if(l)y.call(l),l=null;else{var k=un.Pop,P=i(),M=P[0],j=P[1];if(y.length){if(M!=null){var Q=h-M;Q&&(l={action:k,location:j,retry:function(){E(Q*-1)}},E(Q))}}else c(k)}}r.addEventListener(rm,a);var s=un.Pop,u=i(),h=u[0],m=u[1],p=Fu(),y=Fu();h==null&&(h=0,o.replaceState(ei({},o.state,{idx:h}),""));function w(k){return typeof k=="string"?k:da(k)}function S(k,P){return P===void 0&&(P=null),ju(ei({pathname:m.pathname,hash:"",search:""},typeof k=="string"?kn(k):k,{state:P,key:im()}))}function $(k,P){return[{usr:k.state,key:k.key,idx:P},w(k)]}function f(k,P,M){return!y.length||(y.call({action:k,location:P,retry:M}),!1)}function c(k){s=k;var P=i();h=P[0],m=P[1],p.call({action:s,location:m})}function d(k,P){var M=un.Push,j=S(k,P);function Q(){d(k,P)}if(f(M,j,Q)){var te=$(j,h+1),fe=te[0],ve=te[1];try{o.pushState(fe,"",ve)}catch{r.location.assign(ve)}c(M)}}function x(k,P){var M=un.Replace,j=S(k,P);function Q(){x(k,P)}if(f(M,j,Q)){var te=$(j,h),fe=te[0],ve=te[1];o.replaceState(fe,"",ve),c(M)}}function E(k){o.go(k)}var A={get action(){return s},get location(){return m},createHref:w,push:d,replace:x,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(P){return p.push(P)},block:function(P){var M=y.push(P);return y.length===1&&r.addEventListener(Mu,Du),function(){M(),y.length||r.removeEventListener(Mu,Du)}}};return A}function Du(e){e.preventDefault(),e.returnValue=""}function Fu(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function im(){return Math.random().toString(36).substr(2,8)}function da(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,o=r===void 0?"":r,i=e.hash,l=i===void 0?"":i;return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function kn(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ps=I.exports.createContext(null),hs=I.exports.createContext(null),xi=I.exports.createContext({outlet:null,matches:[]});function wt(e,t){if(!e)throw new Error(t)}function lm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kn(t):t,o=dd(r.pathname||"/",n);if(o==null)return null;let i=cd(e);am(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=gm(i[a],o);return l}function cd(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((o,i)=>{let l={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(r)||wt(!1),l.relativePath=l.relativePath.slice(r.length));let a=Gt([r,l.relativePath]),s=n.concat(l);o.children&&o.children.length>0&&(o.index===!0&&wt(!1),cd(o.children,t,s,a)),!(o.path==null&&!o.index)&&t.push({path:a,score:hm(a,o.index),routesMeta:s})}),t}function am(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:mm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const sm=/^:\w+$/,um=3,cm=2,fm=1,dm=10,pm=-2,Uu=e=>e==="*";function hm(e,t){let n=e.split("/"),r=n.length;return n.some(Uu)&&(r+=pm),t&&(r+=cm),n.filter(o=>!Uu(o)).reduce((o,i)=>o+(sm.test(i)?um:i===""?fm:dm),r)}function mm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function gm(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",h=vm({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!h)return null;Object.assign(r,h.params);let m=a.route;i.push({params:r,pathname:Gt([o,h.pathname]),pathnameBase:pd(Gt([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=Gt([o,h.pathnameBase]))}return i}function vm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ym(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,h,m)=>{if(h==="*"){let p=a[m]||"";l=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return u[h]=wm(a[m]||""),u},{}),pathname:i,pathnameBase:l,pattern:e}}function ym(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),r]}function wm(e,t){try{return decodeURIComponent(e)}catch{return e}}function xm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?kn(e):e;return{pathname:n?n.startsWith("/")?n:Sm(n,t):t,search:Cm(r),hash:Em(o)}}function Sm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function fd(e,t,n){let r=typeof e=="string"?kn(e):e,o=e===""||r.pathname===""?"/":r.pathname,i;if(o==null)i=n;else{let a=t.length-1;if(o.startsWith("..")){let s=o.split("/");for(;s[0]==="..";)s.shift(),a-=1;r.pathname=s.join("/")}i=a>=0?t[a]:"/"}let l=xm(r,i);return o&&o!=="/"&&o.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function km(e){return e===""||e.pathname===""?"/":typeof e=="string"?kn(e).pathname:e.pathname}function dd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Gt=e=>e.join("/").replace(/\/\/+/g,"/"),pd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Em=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Pm(e){Yr()||wt(!1);let{basename:t,navigator:n}=I.exports.useContext(ps),{hash:r,pathname:o,search:i}=ms(e),l=o;if(t!=="/"){let a=km(e),s=a!=null&&a.endsWith("/");l=o==="/"?t+(s?"/":""):Gt([t,o])}return n.createHref({pathname:l,search:i,hash:r})}function Yr(){return I.exports.useContext(hs)!=null}function Cn(){return Yr()||wt(!1),I.exports.useContext(hs).location}function _m(){Yr()||wt(!1);let{basename:e,navigator:t}=I.exports.useContext(ps),{matches:n}=I.exports.useContext(xi),{pathname:r}=Cn(),o=JSON.stringify(n.map(a=>a.pathnameBase)),i=I.exports.useRef(!1);return I.exports.useEffect(()=>{i.current=!0}),I.exports.useCallback(function(a,s){if(s===void 0&&(s={}),!i.current)return;if(typeof a=="number"){t.go(a);return}let u=fd(a,JSON.parse(o),r);e!=="/"&&(u.pathname=Gt([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state)},[e,t,o,r])}function ms(e){let{matches:t}=I.exports.useContext(xi),{pathname:n}=Cn(),r=JSON.stringify(t.map(o=>o.pathnameBase));return I.exports.useMemo(()=>fd(e,JSON.parse(r),n),[e,r,n])}function Nm(e,t){Yr()||wt(!1);let{matches:n}=I.exports.useContext(xi),r=n[n.length-1],o=r?r.params:{};r&&r.pathname;let i=r?r.pathnameBase:"/";r&&r.route;let l=Cn(),a;if(t){var s;let p=typeof t=="string"?kn(t):t;i==="/"||((s=p.pathname)==null?void 0:s.startsWith(i))||wt(!1),a=p}else a=l;let u=a.pathname||"/",h=i==="/"?u:u.slice(i.length)||"/",m=lm(e,{pathname:h});return zm(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Gt([i,p.pathname]),pathnameBase:p.pathnameBase==="/"?i:Gt([i,p.pathnameBase])})),n)}function zm(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,o)=>I.exports.createElement(xi.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,o+1))}}),null)}function on(e){wt(!1)}function $m(e){let{basename:t="/",children:n=null,location:r,navigationType:o=un.Pop,navigator:i,static:l=!1}=e;Yr()&&wt(!1);let a=pd(t),s=I.exports.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=kn(r));let{pathname:u="/",search:h="",hash:m="",state:p=null,key:y="default"}=r,w=I.exports.useMemo(()=>{let S=dd(u,a);return S==null?null:{pathname:S,search:h,hash:m,state:p,key:y}},[a,u,h,m,p,y]);return w==null?null:I.exports.createElement(ps.Provider,{value:s},I.exports.createElement(hs.Provider,{children:n,value:{location:w,navigationType:o}}))}function Am(e){let{children:t,location:n}=e;return Nm(pa(t),n)}function pa(e){let t=[];return I.exports.Children.forEach(e,n=>{if(!I.exports.isValidElement(n))return;if(n.type===I.exports.Fragment){t.push.apply(t,pa(n.props.children));return}n.type!==on&&wt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=pa(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}function hd(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Tm=["onClick","reloadDocument","replace","state","target","to"],Rm=["aria-current","caseSensitive","className","end","style","to","children"];function Om(e){let{basename:t,children:n,window:r}=e,o=I.exports.useRef();o.current==null&&(o.current=om({window:r}));let i=o.current,[l,a]=I.exports.useState({action:i.action,location:i.location});return I.exports.useLayoutEffect(()=>i.listen(a),[i]),I.exports.createElement($m,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i})}function Lm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Im=I.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:o,replace:i=!1,state:l,target:a,to:s}=t,u=hd(t,Tm),h=Pm(s),m=jm(s,{replace:i,state:l,target:a});function p(y){r&&r(y),!y.defaultPrevented&&!o&&m(y)}return I.exports.createElement("a",ti({},u,{href:h,onClick:p,ref:n,target:a}))}),cn=I.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:a,to:s,children:u}=t,h=hd(t,Rm),m=Cn(),p=ms(s),y=m.pathname,w=p.pathname;o||(y=y.toLowerCase(),w=w.toLowerCase());let S=y===w||!l&&y.startsWith(w)&&y.charAt(w.length)==="/",$=S?r:void 0,f;typeof i=="function"?f=i({isActive:S}):f=[i,S?"active":null].filter(Boolean).join(" ");let c=typeof a=="function"?a({isActive:S}):a;return I.exports.createElement(Im,ti({},h,{"aria-current":$,className:f,ref:n,style:c,to:s}),typeof u=="function"?u({isActive:S}):u)});function jm(e,t){let{target:n,replace:r,state:o}=t===void 0?{}:t,i=_m(),l=Cn(),a=ms(e);return I.exports.useCallback(s=>{if(s.button===0&&(!n||n==="_self")&&!Lm(s)){s.preventDefault();let u=!!r||da(l)===da(a);i(e,{replace:u,state:o})}},[l,i,a,r,o,n,e])}var gs={exports:{}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),ki=Symbol.for("react.strict_mode"),Ci=Symbol.for("react.profiler"),Ei=Symbol.for("react.provider"),Pi=Symbol.for("react.context"),Mm=Symbol.for("react.server_context"),_i=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),zi=Symbol.for("react.suspense_list"),$i=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Dm=Symbol.for("react.offscreen"),md;md=Symbol.for("react.module.reference");function rt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vs:switch(e=e.type,e){case Si:case Ci:case ki:case Ni:case zi:return e;default:switch(e=e&&e.$$typeof,e){case Mm:case Pi:case _i:case Ai:case $i:case Ei:return e;default:return t}}case ys:return t}}}J.ContextConsumer=Pi;J.ContextProvider=Ei;J.Element=vs;J.ForwardRef=_i;J.Fragment=Si;J.Lazy=Ai;J.Memo=$i;J.Portal=ys;J.Profiler=Ci;J.StrictMode=ki;J.Suspense=Ni;J.SuspenseList=zi;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return rt(e)===Pi};J.isContextProvider=function(e){return rt(e)===Ei};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vs};J.isForwardRef=function(e){return rt(e)===_i};J.isFragment=function(e){return rt(e)===Si};J.isLazy=function(e){return rt(e)===Ai};J.isMemo=function(e){return rt(e)===$i};J.isPortal=function(e){return rt(e)===ys};J.isProfiler=function(e){return rt(e)===Ci};J.isStrictMode=function(e){return rt(e)===ki};J.isSuspense=function(e){return rt(e)===Ni};J.isSuspenseList=function(e){return rt(e)===zi};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Si||e===Ci||e===ki||e===Ni||e===zi||e===Dm||typeof e=="object"&&e!==null&&(e.$$typeof===Ai||e.$$typeof===$i||e.$$typeof===Ei||e.$$typeof===Pi||e.$$typeof===_i||e.$$typeof===md||e.getModuleId!==void 0)};J.typeOf=rt;(function(e){e.exports=J})(gs);function Fm(e){function t(z,T,R,U,v){for(var V=0,N=0,ue=0,G=0,X,B,ke=0,De=0,K,ze=K=X=0,Y=0,Ce=0,nr=0,Ee=0,Xr=R.length,rr=Xr-1,ot,H="",de="",Wi="",Vi="",Rt;Y<Xr;){if(B=R.charCodeAt(Y),Y===rr&&N+G+ue+V!==0&&(N!==0&&(B=N===47?10:47),G=ue=V=0,Xr++,rr++),N+G+ue+V===0){if(Y===rr&&(0<Ce&&(H=H.replace(p,"")),0<H.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:H+=R.charAt(Y)}B=59}switch(B){case 123:for(H=H.trim(),X=H.charCodeAt(0),K=1,Ee=++Y;Y<Xr;){switch(B=R.charCodeAt(Y)){case 123:K++;break;case 125:K--;break;case 47:switch(B=R.charCodeAt(Y+1)){case 42:case 47:e:{for(ze=Y+1;ze<rr;++ze)switch(R.charCodeAt(ze)){case 47:if(B===42&&R.charCodeAt(ze-1)===42&&Y+2!==ze){Y=ze+1;break e}break;case 10:if(B===47){Y=ze+1;break e}}Y=ze}}break;case 91:B++;case 40:B++;case 34:case 39:for(;Y++<rr&&R.charCodeAt(Y)!==B;);}if(K===0)break;Y++}switch(K=R.substring(Ee,Y),X===0&&(X=(H=H.replace(m,"").trim()).charCodeAt(0)),X){case 64:switch(0<Ce&&(H=H.replace(p,"")),B=H.charCodeAt(1),B){case 100:case 109:case 115:case 45:Ce=T;break;default:Ce=St}if(K=t(T,Ce,K,B,v+1),Ee=K.length,0<_&&(Ce=n(St,H,nr),Rt=a(3,K,Ce,T,fe,te,Ee,B,v,U),H=Ce.join(""),Rt!==void 0&&(Ee=(K=Rt.trim()).length)===0&&(B=0,K="")),0<Ee)switch(B){case 115:H=H.replace(A,l);case 100:case 109:case 45:K=H+"{"+K+"}";break;case 107:H=H.replace(c,"$1 $2"),K=H+"{"+K+"}",K=Se===1||Se===2&&i("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=H+K,U===112&&(K=(de+=K,""))}else K="";break;default:K=t(T,n(T,H,nr),K,U,v+1)}Wi+=K,K=nr=Ce=ze=X=0,H="",B=R.charCodeAt(++Y);break;case 125:case 59:if(H=(0<Ce?H.replace(p,""):H).trim(),1<(Ee=H.length))switch(ze===0&&(X=H.charCodeAt(0),X===45||96<X&&123>X)&&(Ee=(H=H.replace(" ",":")).length),0<_&&(Rt=a(1,H,T,z,fe,te,de.length,U,v,U))!==void 0&&(Ee=(H=Rt.trim()).length)===0&&(H="\0\0"),X=H.charCodeAt(0),B=H.charCodeAt(1),X){case 0:break;case 64:if(B===105||B===99){Vi+=H+R.charAt(Y);break}default:H.charCodeAt(Ee-1)!==58&&(de+=o(H,X,B,H.charCodeAt(2)))}nr=Ce=ze=X=0,H="",B=R.charCodeAt(++Y)}}switch(B){case 13:case 10:N===47?N=0:1+X===0&&U!==107&&0<H.length&&(Ce=1,H+="\0"),0<_*F&&a(0,H,T,z,fe,te,de.length,U,v,U),te=1,fe++;break;case 59:case 125:if(N+G+ue+V===0){te++;break}default:switch(te++,ot=R.charAt(Y),B){case 9:case 32:if(G+V+N===0)switch(ke){case 44:case 58:case 9:case 32:ot="";break;default:B!==32&&(ot=" ")}break;case 0:ot="\\0";break;case 12:ot="\\f";break;case 11:ot="\\v";break;case 38:G+N+V===0&&(Ce=nr=1,ot="\f"+ot);break;case 108:if(G+N+V+ve===0&&0<ze)switch(Y-ze){case 2:ke===112&&R.charCodeAt(Y-3)===58&&(ve=ke);case 8:De===111&&(ve=De)}break;case 58:G+N+V===0&&(ze=Y);break;case 44:N+ue+G+V===0&&(Ce=1,ot+="\r");break;case 34:case 39:N===0&&(G=G===B?0:G===0?B:G);break;case 91:G+N+ue===0&&V++;break;case 93:G+N+ue===0&&V--;break;case 41:G+N+V===0&&ue--;break;case 40:if(G+N+V===0){if(X===0)switch(2*ke+3*De){case 533:break;default:X=1}ue++}break;case 64:N+ue+G+V+ze+K===0&&(K=1);break;case 42:case 47:if(!(0<G+V+ue))switch(N){case 0:switch(2*B+3*R.charCodeAt(Y+1)){case 235:N=47;break;case 220:Ee=Y,N=42}break;case 42:B===47&&ke===42&&Ee+2!==Y&&(R.charCodeAt(Ee+2)===33&&(de+=R.substring(Ee,Y+1)),ot="",N=0)}}N===0&&(H+=ot)}De=ke,ke=B,Y++}if(Ee=de.length,0<Ee){if(Ce=T,0<_&&(Rt=a(2,de,Ce,z,fe,te,Ee,U,v,U),Rt!==void 0&&(de=Rt).length===0))return Vi+de+Wi;if(de=Ce.join(",")+"{"+de+"}",Se*ve!==0){switch(Se!==2||i(de,2)||(ve=0),ve){case 111:de=de.replace(x,":-moz-$1")+de;break;case 112:de=de.replace(d,"::-webkit-input-$1")+de.replace(d,"::-moz-$1")+de.replace(d,":-ms-input-$1")+de}ve=0}}return Vi+de+Wi}function n(z,T,R){var U=T.trim().split($);T=U;var v=U.length,V=z.length;switch(V){case 0:case 1:var N=0;for(z=V===0?"":z[0]+" ";N<v;++N)T[N]=r(z,T[N],R).trim();break;default:var ue=N=0;for(T=[];N<v;++N)for(var G=0;G<V;++G)T[ue++]=r(z[G]+" ",U[N],R).trim()}return T}function r(z,T,R){var U=T.charCodeAt(0);switch(33>U&&(U=(T=T.trim()).charCodeAt(0)),U){case 38:return T.replace(f,"$1"+z.trim());case 58:return z.trim()+T.replace(f,"$1"+z.trim());default:if(0<1*R&&0<T.indexOf("\f"))return T.replace(f,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+T}function o(z,T,R,U){var v=z+";",V=2*T+3*R+4*U;if(V===944){z=v.indexOf(":",9)+1;var N=v.substring(z,v.length-1).trim();return N=v.substring(0,z).trim()+N+";",Se===1||Se===2&&i(N,1)?"-webkit-"+N+N:N}if(Se===0||Se===2&&!i(v,1))return v;switch(V){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(Q,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return N=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+v+"-ms-flex-pack"+N+v;case 1005:return w.test(v)?v.replace(y,":-webkit-")+v.replace(y,":-moz-")+v:v;case 1e3:switch(N=v.substring(13).trim(),T=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(T)){case 226:N=v.replace(E,"tb");break;case 232:N=v.replace(E,"tb-rl");break;case 220:N=v.replace(E,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+N+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(T=(v=z).length-10,N=(v.charCodeAt(T)===33?v.substring(0,T):v).substring(z.indexOf(":",7)+1).trim(),V=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:v=v.replace(N,"-webkit-"+N)+";"+v;break;case 207:case 102:v=v.replace(N,"-webkit-"+(102<V?"inline-":"")+"box")+";"+v.replace(N,"-webkit-"+N)+";"+v.replace(N,"-ms-"+N+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return N=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+N+"-ms-flex-"+N+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace(P,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace(P,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(j.test(z)===!0)return(N=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?o(z.replace("stretch","fill-available"),T,R,U).replace(":fill-available",":stretch"):v.replace(N,"-webkit-"+N)+v.replace(N,"-moz-"+N.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,R+U===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+v}return v}function i(z,T){var R=z.indexOf(T===1?":":"{"),U=z.substring(0,T!==3?R:10);return R=z.substring(R+1,z.length-1),D(T!==2?U:U.replace(M,"$1"),R,T)}function l(z,T){var R=o(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return R!==T+";"?R.replace(k," or ($1)").substring(4):"("+T+")"}function a(z,T,R,U,v,V,N,ue,G,X){for(var B=0,ke=T,De;B<_;++B)switch(De=Oe[B].call(h,z,ke,R,U,v,V,N,ue,G,X)){case void 0:case!1:case!0:case null:break;default:ke=De}if(ke!==T)return ke}function s(z){switch(z){case void 0:case null:_=Oe.length=0;break;default:if(typeof z=="function")Oe[_++]=z;else if(typeof z=="object")for(var T=0,R=z.length;T<R;++T)s(z[T]);else F=!!z|0}return s}function u(z){return z=z.prefix,z!==void 0&&(D=null,z?typeof z!="function"?Se=1:(Se=2,D=z):Se=0),u}function h(z,T){var R=z;if(33>R.charCodeAt(0)&&(R=R.trim()),ee=R,R=[ee],0<_){var U=a(-1,T,R,R,fe,te,0,0,0,0);U!==void 0&&typeof U=="string"&&(T=U)}var v=t(St,R,T,0,0);return 0<_&&(U=a(-2,v,R,R,fe,te,v.length,0,0,0),U!==void 0&&(v=U)),ee="",ve=0,te=fe=1,v}var m=/^\0+/g,p=/[\0\r\f]/g,y=/: */g,w=/zoo|gra/,S=/([,: ])(transform)/g,$=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,x=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,P=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,Q=/([^-])(image-set\()/,te=1,fe=1,ve=0,Se=1,St=[],Oe=[],_=0,D=null,F=0,ee="";return h.use=s,h.set=u,e!==void 0&&u(e),h}var Um={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Hm(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Bm=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hu=Hm(function(e){return Bm.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),gd={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=typeof Symbol=="function"&&Symbol.for,ws=xe?Symbol.for("react.element"):60103,xs=xe?Symbol.for("react.portal"):60106,Ti=xe?Symbol.for("react.fragment"):60107,Ri=xe?Symbol.for("react.strict_mode"):60108,Oi=xe?Symbol.for("react.profiler"):60114,Li=xe?Symbol.for("react.provider"):60109,Ii=xe?Symbol.for("react.context"):60110,Ss=xe?Symbol.for("react.async_mode"):60111,ji=xe?Symbol.for("react.concurrent_mode"):60111,Mi=xe?Symbol.for("react.forward_ref"):60112,Di=xe?Symbol.for("react.suspense"):60113,Wm=xe?Symbol.for("react.suspense_list"):60120,Fi=xe?Symbol.for("react.memo"):60115,Ui=xe?Symbol.for("react.lazy"):60116,Vm=xe?Symbol.for("react.block"):60121,bm=xe?Symbol.for("react.fundamental"):60117,Km=xe?Symbol.for("react.responder"):60118,Qm=xe?Symbol.for("react.scope"):60119;function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ws:switch(e=e.type,e){case Ss:case ji:case Ti:case Oi:case Ri:case Di:return e;default:switch(e=e&&e.$$typeof,e){case Ii:case Mi:case Ui:case Fi:case Li:return e;default:return t}}case xs:return t}}}function vd(e){return Xe(e)===ji}q.AsyncMode=Ss;q.ConcurrentMode=ji;q.ContextConsumer=Ii;q.ContextProvider=Li;q.Element=ws;q.ForwardRef=Mi;q.Fragment=Ti;q.Lazy=Ui;q.Memo=Fi;q.Portal=xs;q.Profiler=Oi;q.StrictMode=Ri;q.Suspense=Di;q.isAsyncMode=function(e){return vd(e)||Xe(e)===Ss};q.isConcurrentMode=vd;q.isContextConsumer=function(e){return Xe(e)===Ii};q.isContextProvider=function(e){return Xe(e)===Li};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ws};q.isForwardRef=function(e){return Xe(e)===Mi};q.isFragment=function(e){return Xe(e)===Ti};q.isLazy=function(e){return Xe(e)===Ui};q.isMemo=function(e){return Xe(e)===Fi};q.isPortal=function(e){return Xe(e)===xs};q.isProfiler=function(e){return Xe(e)===Oi};q.isStrictMode=function(e){return Xe(e)===Ri};q.isSuspense=function(e){return Xe(e)===Di};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ti||e===ji||e===Oi||e===Ri||e===Di||e===Wm||typeof e=="object"&&e!==null&&(e.$$typeof===Ui||e.$$typeof===Fi||e.$$typeof===Li||e.$$typeof===Ii||e.$$typeof===Mi||e.$$typeof===bm||e.$$typeof===Km||e.$$typeof===Qm||e.$$typeof===Vm)};q.typeOf=Xe;(function(e){e.exports=q})(gd);var ks=gd.exports,Gm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ym={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xm={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cs={};Cs[ks.ForwardRef]=Xm;Cs[ks.Memo]=yd;function Bu(e){return ks.isMemo(e)?yd:Cs[e.$$typeof]||Gm}var Zm=Object.defineProperty,Jm=Object.getOwnPropertyNames,Wu=Object.getOwnPropertySymbols,qm=Object.getOwnPropertyDescriptor,eg=Object.getPrototypeOf,Vu=Object.prototype;function wd(e,t,n){if(typeof t!="string"){if(Vu){var r=eg(t);r&&r!==Vu&&wd(e,r,n)}var o=Jm(t);Wu&&(o=o.concat(Wu(t)));for(var i=Bu(e),l=Bu(t),a=0;a<o.length;++a){var s=o[a];if(!Ym[s]&&!(n&&n[s])&&!(l&&l[s])&&!(i&&i[s])){var u=qm(t,s);try{Zm(e,s,u)}catch{}}}}return e}var tg=wd;function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var bu=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ha=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!gs.exports.typeOf(e)},ni=Object.freeze([]),Yt=Object.freeze({});function Zn(e){return typeof e=="function"}function Ku(e){return e.displayName||e.name||"Component"}function Es(e){return e&&typeof e.styledComponentId=="string"}var Jn=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ps=typeof window<"u"&&"HTMLElement"in window,ng=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),rg={};function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var og=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&yn(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,h=r.length;u<h;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),$o=new Map,ri=new Map,Pr=1,mo=function(e){if($o.has(e))return $o.get(e);for(;ri.has(Pr);)Pr++;var t=Pr++;return $o.set(e,t),ri.set(t,e),t},ig=function(e){return ri.get(e)},lg=function(e,t){t>=Pr&&(Pr=t+1),$o.set(e,t),ri.set(t,e)},ag="style["+Jn+'][data-styled-version="5.3.5"]',sg=new RegExp("^"+Jn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ug=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},cg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(sg);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(lg(u,s),ug(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},fg=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},xd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var h=s[u];if(h&&h.nodeType===1&&h.hasAttribute(Jn))return h}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Jn,"active"),r.setAttribute("data-styled-version","5.3.5");var l=fg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},dg=function(){function e(n){var r=this.element=xd(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var s=i[l];if(s.ownerNode===o)return s}yn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),pg=function(){function e(n){var r=this.element=xd(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),hg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Qu=Ps,mg={isServer:!Ps,useCSSOMInjection:!ng},oi=function(){function e(n,r,o){n===void 0&&(n=Yt),r===void 0&&(r={}),this.options=ut({},mg,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Ps&&Qu&&(Qu=!1,function(i){for(var l=document.querySelectorAll(ag),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Jn)!=="active"&&(cg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return mo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ut({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new hg(l):i?new dg(l):new pg(l),new og(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(mo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(mo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(mo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=ig(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var h=Jn+".g"+l+'[id="'+a+'"]',m="";s!==void 0&&s.forEach(function(p){p.length>0&&(m+=p+",")}),i+=""+u+h+'{content:"'+m+`"}/*!sc*/
`}}}return i}(this)},e}(),gg=/(a)(d)/gi,Gu=function(e){return String.fromCharCode(e+(e>25?39:97))};function ma(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Gu(t%52)+n;return(Gu(t%52)+n).replace(gg,"$1-$2")}var Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sd=function(e){return Mn(5381,e)};function kd(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zn(n)&&!Es(n))return!1}return!0}var vg=Sd("5.3.5"),yg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kd(t),this.componentId=n,this.baseHash=Mn(vg,n),this.baseStyle=r,oi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=wn(this.rules,t,n,r).join(""),a=ma(Mn(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var s=r(l,"."+a,void 0,o);n.insertRules(o,a,s)}i.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,h=Mn(this.baseHash,r.hash),m="",p=0;p<u;p++){var y=this.rules[p];if(typeof y=="string")m+=y;else if(y){var w=wn(y,t,n,r),S=Array.isArray(w)?w.join(""):w;h=Mn(h,S+p),m+=S}}if(m){var $=ma(h>>>0);if(!n.hasNameForId(o,$)){var f=r(m,"."+$,void 0,o);n.insertRules(o,$,f)}i.push($)}}return i.join(" ")},e}(),wg=/^\s*\/\/.*$/gm,xg=[":","[",".","#"];function Sg(e){var t,n,r,o,i=e===void 0?Yt:e,l=i.options,a=l===void 0?Yt:l,s=i.plugins,u=s===void 0?ni:s,h=new Fm(a),m=[],p=function(S){function $(f){if(f)try{S(f+"}")}catch{}}return function(f,c,d,x,E,A,k,P,M,j){switch(f){case 1:if(M===0&&c.charCodeAt(0)===64)return S(c+";"),"";break;case 2:if(P===0)return c+"/*|*/";break;case 3:switch(P){case 102:case 112:return S(d[0]+c),"";default:return c+(j===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach($)}}}(function(S){m.push(S)}),y=function(S,$,f){return $===0&&xg.indexOf(f[n.length])!==-1||f.match(o)?S:"."+t};function w(S,$,f,c){c===void 0&&(c="&");var d=S.replace(wg,""),x=$&&f?f+" "+$+" { "+d+" }":d;return t=c,n=$,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),h(f||!$?"":$,x)}return h.use([].concat(u,[function(S,$,f){S===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,y))},p,function(S){if(S===-2){var $=m;return m=[],$}}])),w.hash=u.length?u.reduce(function(S,$){return $.name||yn(15),Mn(S,$.name)},5381).toString():"",w}var Cd=dt.createContext();Cd.Consumer;var Ed=dt.createContext(),kg=(Ed.Consumer,new oi),ga=Sg();function Pd(){return I.exports.useContext(Cd)||kg}function _d(){return I.exports.useContext(Ed)||ga}var Cg=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ga);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return yn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ga),this.name+t.hash},e}(),Eg=/([A-Z])/,Pg=/([A-Z])/g,_g=/^ms-/,Ng=function(e){return"-"+e.toLowerCase()};function Yu(e){return Eg.test(e)?e.replace(Pg,Ng).replace(_g,"-ms-"):e}var Xu=function(e){return e==null||e===!1||e===""};function wn(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=wn(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Xu(e))return"";if(Es(e))return"."+e.styledComponentId;if(Zn(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return wn(s,t,n,r)}var u;return e instanceof Cg?n?(e.inject(n,r),e.getName(r)):e:ha(e)?function h(m,p){var y,w,S=[];for(var $ in m)m.hasOwnProperty($)&&!Xu(m[$])&&(Array.isArray(m[$])&&m[$].isCss||Zn(m[$])?S.push(Yu($)+":",m[$],";"):ha(m[$])?S.push.apply(S,h(m[$],$)):S.push(Yu($)+": "+(y=$,(w=m[$])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||y in Um?String(w).trim():w+"px")+";"));return p?[p+" {"].concat(S,["}"]):S}(e):e.toString()}var Zu=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Nd(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Zn(e)||ha(e)?Zu(wn(bu(ni,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Zu(wn(bu(e,n)))}var zd=function(e,t,n){return n===void 0&&(n=Yt),e.theme!==n.theme&&e.theme||t||n.theme},zg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$g=/(^-|-$)/g;function vl(e){return e.replace(zg,"-").replace($g,"")}var $d=function(e){return ma(Sd(e)>>>0)};function go(e){return typeof e=="string"&&!0}var va=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ag=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Tg(e,t,n){var r=e[n];va(t)&&va(r)?Ad(r,t):e[n]=t}function Ad(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(va(l))for(var a in l)Ag(a)&&Tg(e,l[a],a)}return e}var Wr=dt.createContext();Wr.Consumer;function Rg(e){var t=I.exports.useContext(Wr),n=I.exports.useMemo(function(){return function(r,o){if(!r)return yn(14);if(Zn(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?yn(8):o?ut({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?dt.createElement(Wr.Provider,{value:n},e.children):null}var yl={};function Td(e,t,n){var r=Es(e),o=!go(e),i=t.attrs,l=i===void 0?ni:i,a=t.componentId,s=a===void 0?function(c,d){var x=typeof c!="string"?"sc":vl(c);yl[x]=(yl[x]||0)+1;var E=x+"-"+$d("5.3.5"+x+yl[x]);return d?d+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,h=u===void 0?function(c){return go(c)?"styled."+c:"Styled("+Ku(c)+")"}(e):u,m=t.displayName&&t.componentId?vl(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,y=t.shouldForwardProp;r&&e.shouldForwardProp&&(y=t.shouldForwardProp?function(c,d,x){return e.shouldForwardProp(c,d,x)&&t.shouldForwardProp(c,d,x)}:e.shouldForwardProp);var w,S=new yg(n,m,r?e.componentStyle:void 0),$=S.isStatic&&l.length===0,f=function(c,d){return function(x,E,A,k){var P=x.attrs,M=x.componentStyle,j=x.defaultProps,Q=x.foldedComponentIds,te=x.shouldForwardProp,fe=x.styledComponentId,ve=x.target,Se=function(U,v,V){U===void 0&&(U=Yt);var N=ut({},v,{theme:U}),ue={};return V.forEach(function(G){var X,B,ke,De=G;for(X in Zn(De)&&(De=De(N)),De)N[X]=ue[X]=X==="className"?(B=ue[X],ke=De[X],B&&ke?B+" "+ke:B||ke):De[X]}),[N,ue]}(zd(E,I.exports.useContext(Wr),j)||Yt,E,P),St=Se[0],Oe=Se[1],_=function(U,v,V,N){var ue=Pd(),G=_d(),X=v?U.generateAndInjectStyles(Yt,ue,G):U.generateAndInjectStyles(V,ue,G);return X}(M,k,St),D=A,F=Oe.$as||E.$as||Oe.as||E.as||ve,ee=go(F),z=Oe!==E?ut({},E,{},Oe):E,T={};for(var R in z)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?T.as=z[R]:(te?te(R,Hu,F):!ee||Hu(R))&&(T[R]=z[R]));return E.style&&Oe.style!==E.style&&(T.style=ut({},E.style,{},Oe.style)),T.className=Array.prototype.concat(Q,fe,_!==fe?_:null,E.className,Oe.className).filter(Boolean).join(" "),T.ref=D,I.exports.createElement(F,T)}(w,c,d,$)};return f.displayName=h,(w=dt.forwardRef(f)).attrs=p,w.componentStyle=S,w.displayName=h,w.shouldForwardProp=y,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ni,w.styledComponentId=m,w.target=r?e.target:e,w.withComponent=function(c){var d=t.componentId,x=function(A,k){if(A==null)return{};var P,M,j={},Q=Object.keys(A);for(M=0;M<Q.length;M++)P=Q[M],k.indexOf(P)>=0||(j[P]=A[P]);return j}(t,["componentId"]),E=d&&d+"-"+(go(c)?c:vl(Ku(c)));return Td(c,ut({},x,{attrs:p,componentId:E}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Ad({},e.defaultProps,c):c}}),w.toString=function(){return"."+w.styledComponentId},o&&tg(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var ya=function(e){return function t(n,r,o){if(o===void 0&&(o=Yt),!gs.exports.isValidElementType(r))return yn(1,String(r));var i=function(){return n(r,o,Nd.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,ut({},o,{},l))},i.attrs=function(l){return t(n,r,ut({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(Td,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ya[e]=ya(e)});var Og=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=kd(n),oi.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var l=i(wn(this.rules,r,o,i).join(""),""),a=this.componentId+n;o.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&oi.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Lg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Nd.apply(void 0,[e].concat(n)),i="sc-global-"+$d(JSON.stringify(o)),l=new Og(o,i);function a(u){var h=Pd(),m=_d(),p=I.exports.useContext(Wr),y=I.exports.useRef(h.allocateGSInstance(i)).current;return h.server&&s(y,u,h,p,m),I.exports.useLayoutEffect(function(){if(!h.server)return s(y,u,h,p,m),function(){return l.removeStyles(y,h)}},[y,u,h,p,m]),null}function s(u,h,m,p,y){if(l.isStatic)l.renderStyles(u,rg,m,y);else{var w=ut({},h,{theme:zd(h,p,a.defaultProps)});l.renderStyles(u,w,m,y)}}return dt.memo(a)}const xt=ya;var Rd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ju=dt.createContext&&dt.createContext(Rd),Hi={exports:{}},Bi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=I.exports,jg=Symbol.for("react.element"),Mg=Symbol.for("react.fragment"),Dg=Object.prototype.hasOwnProperty,Fg=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ug={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Dg.call(t,r)&&!Ug.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jg,type:e,key:i,ref:l,props:o,_owner:Fg.current}}Bi.Fragment=Mg;Bi.jsx=Od;Bi.jsxs=Od;(function(e){e.exports=Bi})(Hi);const Hg=Hi.exports.Fragment,g=Hi.exports.jsx,L=Hi.exports.jsxs;var Xt=globalThis&&globalThis.__assign||function(){return Xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Xt.apply(this,arguments)},Bg=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Ld(e){return e&&e.map(function(t,n){return dt.createElement(t.tag,Xt({key:n},t.attr),Ld(t.child))})}function _s(e){return function(t){return g(Wg,{...Xt({attr:Xt({},e.attr)},t),children:Ld(e.child)})}}function Wg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=Bg(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),L("svg",{...Xt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Xt(Xt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&g("title",{children:i}),e.children]})};return Ju!==void 0?g(Ju.Consumer,{children:function(n){return t(n)}}):t(Rd)}function Vg(e){return _s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16.3956 7.75734C16.7862 8.14786 16.7862 8.78103 16.3956 9.17155L13.4142 12.153L16.0896 14.8284C16.4802 15.2189 16.4802 15.8521 16.0896 16.2426C15.6991 16.6331 15.0659 16.6331 14.6754 16.2426L12 13.5672L9.32458 16.2426C8.93405 16.6331 8.30089 16.6331 7.91036 16.2426C7.51984 15.8521 7.51984 15.2189 7.91036 14.8284L10.5858 12.153L7.60436 9.17155C7.21383 8.78103 7.21383 8.14786 7.60436 7.75734C7.99488 7.36681 8.62805 7.36681 9.01857 7.75734L12 10.7388L14.9814 7.75734C15.372 7.36681 16.0051 7.36681 16.3956 7.75734Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z",fill:"currentColor"}}]})(e)}function bg(e){return _s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z",fill:"currentColor"}},{tag:"path",attr:{d:"M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z",fill:"currentColor"}}]})(e)}const Kg=()=>{const[e,t]=I.exports.useState(!1),n=xt.nav`
    display: flex;
    gap: 2rem;

    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: #ffcc00; /* Golden yellow */
            font-family: 'Poppins', sans-serif;
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: #fff; /* White on hover */
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({theme:r})=>r.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({theme:r})=>r.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({theme:r})=>r.colors.black};
        }
      }

      /* hide the original nav menu  */
      .navbar-list {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;

        transform: translateX(100%);

        visibility: hidden;
        opacity: 0;

        li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: #ffcc00; /* Golden yellow */
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: #ffcc00; /* Golden yellow */
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .active .navbar-list {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;return g(n,{children:L("div",{className:e?"menuIcon active":"menuIcon",children:[L("ul",{className:"navbar-list",children:[g("li",{children:g(cn,{className:"navbar-link",onClick:()=>t(!1),to:"/",children:"Home"})}),g("li",{children:g(cn,{className:"navbar-link",onClick:()=>t(!1),to:"/about",children:"About"})}),g("li",{children:g(cn,{className:"navbar-link",onClick:()=>t(!1),to:"/FAQ",children:"FAQs"})}),g("li",{children:g(cn,{className:"navbar-link",onClick:()=>t(!1),to:"/Feedback",children:"Feedback"})})]}),L("div",{className:"mobile-navbar-btn",children:[g(bg,{name:"menu-outline",className:"mobile-nav-icon",onClick:()=>t(!0)}),g(Vg,{name:"close-outline",className:"close-outline mobile-nav-icon",onClick:()=>t(!1)})]})]})})},Qg=()=>Cn().pathname!=="/"?null:L(Gg,{children:[L(cn,{to:"/",className:"logo-container",children:[g("img",{src:"/images/k.png",alt:"Ask Krishna Logo",className:"logo"}),g("span",{className:"app-name",children:"Ask Krishna"})]}),g(Kg,{})]}),Gg=xt.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: #3b5998; /* Krishna blue */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .logo-container {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05); /* Slight zoom effect on hover */
    }

    .logo {
      height: auto;
      max-width: 6rem; /* Adjust logo size */
      margin-right: 1.5rem; /* Space between logo and app name */
      border-radius: 50%; /* Rounded logo */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Subtle shadow for logo */
    }

    .app-name {
      font-size: 4rem;
      font-weight: bold;
      color: hsla(48, 100%, 50%, 0.92); /* Golden yellow */
      font-family: 'Poppins', sans-serif; /* Elegant font */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow for depth */
      letter-spacing: 1px; /* Add some spacing between letters */
    }
  }

  @media (max-width: ${({theme:e})=>e.media.tablet}) {
    padding: 0 3.2rem;

    .logo-container {
      .logo {
        max-width: 5rem; /* Smaller logo size for tablets */
      }

      .app-name {
        font-size: 3rem; /* Adjusted text size for tablets */
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    padding: 0 2.4rem;

    .logo-container {
      .logo {
        max-width: 4rem; /* Smaller logo size for mobile */
      }

      .app-name {
        font-size: 2.5rem; /* Adjusted text size for mobile */
      }
    }
  }
`,Yg=()=>Cn().pathname!=="/"?null:g(Xg,{children:L("footer",{children:[L("div",{className:"container grid grid-two-column",children:[g("div",{className:"footer-image",children:g("img",{src:"/images/image copy.png",alt:"Krishna"})}),L("div",{className:"footer-about",children:[g("h3",{children:"Ask Krishna"}),g("p",{children:"Engage in a dialogue that brings wisdom, peace, and guidance from Krishna's teachings."})]}),L("div",{className:"footer-subscribe",children:[g("h3",{children:"Stay Informed"}),L("form",{action:"#",children:[g("input",{type:"email",required:!0,autoComplete:"off",placeholder:"Your Email"}),g("input",{className:"sandal-yellow-btn",type:"submit",value:"Subscribe"})]})]})]}),L("div",{className:"footer-bottom--section",children:[g("hr",{}),L("div",{className:"container grid grid-two-column",children:[L("p",{children:["@",new Date().getFullYear()," Ask Krishna. All Rights Reserved"]}),L("div",{children:[g("p",{className:"footer-small-text",children:"Privacy Policy"}),g("p",{className:"footer-small-text",children:"Terms & Conditions"})]})]}),g("div",{className:"footer-middle",children:g("p",{className:"footer-small-text",children:"Created by Roopa and Harshitha"})})]})]})}),Xg=xt.section`
  footer {
    padding: 4rem 2rem;
    background-color: #3b5998;

    .grid-two-column {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 2rem;
    }

    h3 {
      color: ${({theme:e})=>e.colors.hr};
      margin-bottom: 1rem;
      text-align: left;
    }

    p {
      color: ${({theme:e})=>e.colors.white};
      margin: 0;
    }

    .footer-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      img {
        width: 100%;
        max-width: 150px;
        border-radius: 50%;
      }
    }

    .footer-about,
    .footer-subscribe {
      flex: 2;
      text-align: left;
    }

    .footer-subscribe form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .sandal-yellow-btn {
      background-color: rgb(241, 186, 5);
      color: ${({theme:e})=>e.colors.primary};
      border: none;
      padding: 1rem 2rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
    }

    .footer-bottom--section {
      padding-top: 1rem;
      border-top: 0px solid ${({theme:e})=>e.colors.hr};

      .footer-middle {
        text-align: center;
        margin: 1rem 0;
      }

      p {
        text-align: center;
        margin: 0.5rem 0;
      }

      .footer-small-text {
        font-size: 1.4rem;
        margin: 0.5rem 0;
        text-align: center;
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    footer {
      .grid-two-column {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .footer-image img {
        max-width: 120px;
      }

      .footer-small-text {
        font-size: 0.8rem;
      }
    }
  }
`,Id=xt.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({theme:e})=>e.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`,jd=dt.createContext(),qu="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",Zg={conversationHistory:[],userMessage:"",krishnaResponse:"",isLoading:!1},Jg=(e,t)=>{switch(t.type){case"ADD_USER_MESSAGE":return{...e,conversationHistory:[...e.conversationHistory,{sender:"user",text:t.payload}],userMessage:""};case"ADD_KRISHNA_RESPONSE":return{...e,conversationHistory:[...e.conversationHistory,{sender:"krishna",text:t.payload}],isLoading:!1};case"SET_LOADING":return{...e,isLoading:!0};case"SET_USER_MESSAGE":return{...e,userMessage:t.payload};default:return e}},qg=({children:e})=>{const[t,n]=I.exports.useReducer(Jg,Zg),r=()=>n({type:"HOME_UPDATE",payload:{name:"Ask Krishna",image:"./image copy.png"}}),o=()=>n({type:"ABOUT_UPDATE",payload:{name:"Lord Krishna",image:"./image.png"}}),i=async s=>{try{const h=await(await fetch(s)).json();n({type:"GET_SERVICES",payload:h})}catch(u){console.log(u)}},l=async()=>{if(!!t.userMessage.trim()){n({type:"ADD_USER_MESSAGE",payload:t.userMessage}),n({type:"SET_LOADING"});try{const u=await(await fetch(`${qu}/krishna-response`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t.userMessage,conversationHistory:t.conversationHistory})})).json();n({type:"ADD_KRISHNA_RESPONSE",payload:u.response||"Krishna is in deep contemplation..."})}catch(s){console.error("Error fetching Krishna's response:",s),n({type:"ADD_KRISHNA_RESPONSE",payload:"Something went wrong. Please try again later."})}}},a=s=>{n({type:"SET_USER_MESSAGE",payload:s})};return I.exports.useEffect(()=>{i(qu)},[]),g(jd.Provider,{value:{...t,updateHomePage:r,updateAboutPage:o,sendMessageToKrishna:l,updateUserMessage:a},children:e})},Md=()=>I.exports.useContext(jd),e0=()=>(Md(),g(t0,{children:L("div",{className:"container grid grid-two-column",children:[L("div",{className:"section-hero-data",children:[g("p",{className:"hero-top-data",children:"WELCOME TO"}),g("h1",{className:"hero-heading",children:"Ask Krishna"}),g("p",{className:"hero-para",children:"Engage in meaningful conversations inspired by Lord Krishna's teachings from the Bhagavad Gita. Ask Krishna offers answers to your life\u2019s questions with wisdom, compassion, and clarity."}),g("div",{className:"button-container",children:g(Id,{className:"btn ask-now-btn",children:g(cn,{to:"/Chat",children:"Talk to Krishna"})})})]}),g("div",{className:"section-hero-image",children:g("picture",{children:g("img",{src:"./images/Krishna.jpg",alt:"Lord Krishna",className:"hero-img"})})})]})})),t0=xt.section`
  /* Add all styles here */
  padding: 2rem 1rem;
  background-color: ${({theme:e})=>e.colors.bg};

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  .button-container {
    display: flex;
    justify-content: flex-start; /* Align button to the left */
    margin-top: 2rem;
    gap: 1rem;
  }

  .btn {
    max-width: 16rem;
    padding: 1rem 2rem;
    text-align: center;
    background-color: rgb(232, 170, 23); /* Golden yellow */
    color: #fff;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #3b5998; /* Deep blue */
      transform: scale(1.05);
    }

    &:active {
      transform: scale(1);
    }
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 5rem;
    color: #87CEFA; /* Light blue */
    font-family: 'Poppins', sans-serif;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4.8rem;
    color: #3b5998; /* Deep blue */
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: #333333; /* Dark grey */
    font-size: 1.6rem;
    line-height: 1.8;
    font-family: 'Merriweather', serif;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 100%;
    border-radius: 1rem;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    padding: 1rem;

    .section-hero-data {
      align-items: center;
      text-align: center;
    }

    .hero-top-data {
      font-size: 4rem;
    }

    .hero-heading {
      font-size: 3.6rem;
    }

    .hero-para {
      font-size: 1.4rem;
      text-align: justify;
    }

    .button-container {
      justify-content: center;
    }

    .btn {
      font-size: 1.4rem;
      padding: 0.8rem 1.2rem;
    }

    .hero-img {
      max-width: 95%;
    }
  }
`,Dd=()=>g(n0,{children:L("div",{className:"faq-container",children:[g("h2",{children:"Frequently Asked Questions (FAQs)"}),L("div",{className:"faq-item",children:[g("h3",{children:"For Students"}),L("ul",{children:[L("li",{children:[g("strong",{children:"How can I overcome exam fear?"}),g("p",{children:"To overcome exam fear, focus on your preparation, practice mindfulness, and remember that doing your best is what truly matters."})]}),L("li",{children:[g("strong",{children:"How do I find the right career path?"}),g("p",{children:"Explore your interests, seek guidance from mentors, and consider what brings you joy and fulfillment in your work."})]}),L("li",{children:[g("strong",{children:"What is the best way to handle peer pressure?"}),g("p",{children:"Stay true to your values, make decisions that align with your principles, and surround yourself with supportive friends."})]}),L("li",{children:[g("strong",{children:"Why is discipline important in life?"}),g("p",{children:"Discipline helps you stay focused, achieve your goals, and build good habits that lead to success and fulfillment."})]}),L("li",{children:[g("strong",{children:"How can I balance studies and hobbies?"}),g("p",{children:"Manage your time effectively, prioritize tasks, and set aside specific times for both studies and hobbies."})]})]})]}),L("div",{className:"faq-item",children:[g("h3",{children:"For Teachers"}),L("ul",{children:[L("li",{children:[g("strong",{children:"What is the best way to inspire my students?"}),g("p",{children:"Lead by example, show passion for the subject, and encourage students to pursue their interests and ask questions."})]}),L("li",{children:[g("strong",{children:"How can I handle difficult students?"}),g("p",{children:"Understand their perspective, be patient, and use positive reinforcement to encourage good behavior and learning."})]}),L("li",{children:[g("strong",{children:"What lessons can I learn from Krishna's teachings?"}),g("p",{children:"Krishna's teachings emphasize compassion, wisdom, and leading a life of purpose and dedication. Incorporate these principles in your teaching."})]}),L("li",{children:[g("strong",{children:"How do I balance teaching and personal life?"}),g("p",{children:"Set boundaries, manage your time effectively, and ensure you take time for self-care and personal interests."})]}),L("li",{children:[g("strong",{children:"What should I do if my students lose interest in learning?"}),g("p",{children:"Make lessons engaging, connect the material to real-life situations, and encourage active participation and curiosity."})]})]})]}),L("div",{className:"faq-item",children:[g("h3",{children:"For Parents"}),L("ul",{children:[L("li",{children:[g("strong",{children:"How do I help my child handle failure?"}),g("p",{children:"Teach them that failure is a part of learning, encourage resilience, and support them in their efforts to try again."})]}),L("li",{children:[g("strong",{children:"What is the best way to discipline my child?"}),g("p",{children:"Use positive discipline techniques, set clear boundaries, and communicate with your child to understand their perspective."})]}),L("li",{children:[g("strong",{children:"How can I instill values in my child?"}),g("p",{children:"Lead by example, have open conversations about values, and create an environment that fosters ethical behavior."})]}),L("li",{children:[g("strong",{children:"How do I balance my expectations with my child\u2019s happiness?"}),g("p",{children:"Encourage your child to pursue their passions, be supportive of their choices, and maintain open communication."})]}),L("li",{children:[g("strong",{children:"What can Krishna teach us about parenting?"}),g("p",{children:"Krishna's life teaches us about love, guidance, and nurturing growth. Focus on supporting your child's development with care and wisdom."})]})]})]})]})}),n0=xt.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f7fb1; /* Matching Ask Krishna app's background color */
  color: #ffffff;

  .faq-container {
    padding: 2rem 1.5rem;
    max-width: 80%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    color: #333;
    overflow-y: auto;
    max-height: 85vh;
  }

  h2 {
    text-align: center;
    color: #3f7fb1; /* Matching Ask Krishna app's primary color */
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
  }

  .faq-item {
    margin-bottom: 2rem;
  }

  h3 {
    color: #ffc107; /* Matching Ask Krishna app's accent color */
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    &:before {
      content: '•';
      color: #3f7fb1;
      font-size: 1.5rem;
      line-height: 1;
    }
  }

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: #3f7fb1;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.6;
    font-family: 'Merriweather', serif;
    color: #555;
  }

  @media (max-width: 768px) {
    .faq-container {
      padding: 1.5rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    li {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .faq-container {
      padding: 1rem;
      max-width: 95%;
    }

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    li {
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`,r0=Lg`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({theme:e})=>e.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({theme:e})=>e.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({theme:e})=>e.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.faq-container,
.feedback-container {
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.faq-list {
  margin-top: 20px;
}

.faq-item {
  margin-bottom: 15px;
}

.faq-item h3 {
  font-size: 1.2rem;
  color: #333;
}

.faq-item p {
  color: #555;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  display: block;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

.status-message {
  margin-top: 15px;
  font-size: 1rem;
  color: green;
}
.about-container {
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
}

.about-container h1,
.about-container h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.about-container p {
  color: #555;
  margin-bottom: 15px;
}

.about-container ul {
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
}

.about-container ul li {
  margin-bottom: 10px;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}


.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    color: ${({theme:e})=>e.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({theme:e})=>e.colors.border};
    text-transform: uppercase;
   box-shadow: ${({theme:e})=>e.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({theme:e})=>e.colors.btn};
    color: ${({theme:e})=>e.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }


/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:${({theme:e})=>e.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({theme:e})=>e.media.mobile}) {

      html{
        font-size: 50%;
      }

      .grid{
        gap: 3.2rem;
      }

      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


`,o0=()=>{const[e,t]=I.exports.useState(""),[n,r]=I.exports.useState(""),[o,i]=I.exports.useState(""),[l,a]=I.exports.useState("");return L("div",{className:"feedback-container",style:{textAlign:"center"},children:[g("img",{src:"./images/image.png",alt:"Feedback",style:{width:"150px",marginBottom:"2rem",borderRadius:"10px"}}),g("h2",{children:"Give Your Feedback"}),L("form",{onSubmit:async u=>{if(u.preventDefault(),!e||!n||!o){a("Please fill out all fields.");return}try{console.log({name:n,email:o,feedback:e}),a("Thank you for your feedback!"),r(""),i(""),t("")}catch{a("Sorry, there was an error submitting your feedback. Please try again.")}},children:[L("div",{className:"form-group",children:[g("label",{children:"Name"}),g("input",{type:"text",value:n,onChange:u=>r(u.target.value),required:!0})]}),L("div",{className:"form-group",children:[g("label",{children:"Email"}),g("input",{type:"email",value:o,onChange:u=>i(u.target.value),required:!0})]}),L("div",{className:"form-group",children:[g("label",{children:"Feedback"}),g("textarea",{value:e,onChange:u=>t(u.target.value),required:!0})]}),g("button",{type:"submit",style:{backgroundColor:"rgb(241, 186, 5)",color:"#fff",border:"none",padding:"1.5rem 3rem",fontSize:"2rem",cursor:"pointer",borderRadius:"0.75rem",transition:"background-color 0.3s ease"},onMouseOver:u=>u.target.style.backgroundColor="#e0a900",onMouseOut:u=>u.target.style.backgroundColor="rgb(241, 186, 5)",children:"Submit Feedback"}),l&&g("p",{className:"status-message",children:l})]})]})},i0=()=>{const{updateHomePage:e}=Md();return I.exports.useEffect(()=>e(),[]),L(Hg,{children:[g(e0,{}),g(Dd,{})]})},l0="/assets/krishna-avatar.2a194bf8.jpg",a0=()=>g(s0,{children:L("div",{className:"about-container",children:[L("div",{className:"about-content",children:[g("h1",{children:"About Ask Krishna"}),L("p",{children:[g("strong",{children:"Ask Krishna"})," is a Rich Internet Application (RIA) designed to provide wisdom, guidance, and inspiration through conversational interactions. Inspired by the teachings of the ",g("em",{children:"Bhagavad Gita"})," and Krishna's life events, the app allows users to anonymously seek answers to their life questions in a simple and intuitive chat interface."]}),g("h2",{children:"Our Vision"}),g("p",{children:"To make ancient wisdom accessible to modern users in a way that is practical, engaging, and non-intrusive. By leveraging cutting-edge technology, we aim to bridge the gap between traditional teachings and contemporary challenges."}),g("h2",{children:"Key Features"}),L("ul",{children:[g("li",{children:"Anonymous and secure interaction \u2013 no account needed."}),g("li",{children:"Krishna-inspired responses tailored to your queries."}),g("li",{children:"Session memory for contextual conversations."}),g("li",{children:"Clean and user-friendly interface for seamless engagement."})]}),g("h2",{children:"How It Works"}),L("p",{children:["Powered by the ",g("strong",{children:"Gemini API"}),", the app processes user inputs and generates responses that reflect Krishna's teachings and persona. Whether you\u2019re seeking advice for personal growth, career guidance, or spiritual clarity, the app strives to provide compassionate and meaningful responses."]}),g("h2",{children:"Why Krishna?"}),L("p",{children:["Lord Krishna's teachings in the ",g("em",{children:"Bhagavad Gita"})," are timeless. They offer profound insights on topics like duty, detachment, discipline, and self-realization. By bringing Krishna's wisdom to a conversational platform, we hope to make these teachings relatable and actionable for everyone."]}),g("h2",{children:"Want to Know More?"}),g("p",{children:"Visit our FAQs section or try asking Krishna a question directly to experience the magic of his guidance."})]}),g("img",{src:l0,alt:"Krishna",className:"krishna-side-image"})]})}),s0=xt.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f7fb1; /* Adjusted to match Ask Krishna app's background color */
  color: #ffffff;

  .about-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
    max-width: 90%;
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    color: #333;
    overflow-y: auto;
    max-height: 90vh;
  }

  .about-content {
    width: 70%;
    font-size: 1.2rem; /* Increased font size for better readability */
  }

  h1, h2 {
    text-align: center;
    color: #3f7fb1; /* Adjusted to match Ask Krishna app's color */
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 2.5rem; /* Increased font size */
  }

  h2 {
    font-size: 1.8rem; /* Increased font size */
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  p {
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem; /* Increased font size */
  }

  .krishna-side-image {
    max-width: 25%;
    height: auto;
    border-radius: 12px;
    margin-left: 2rem; /* Space between text and image */
  }
`,u0=()=>L(c0,{children:[g("img",{src:"../images/error.svg",alt:"error"}),g(cn,{to:"/",children:g(Id,{className:"btn",children:" Go Back"})})]}),c0=xt.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;function f0(e){return _s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"}}]})(e)}const d0=()=>{const[e,t]=I.exports.useState(!1),n=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},r=()=>{let o=20;(document.body.scrollTop||document.documentElement.scrollTop)>o?t(!0):t(!1)};return I.exports.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),g(p0,{children:e&&g("div",{className:"top-btn",onClick:n,children:g(f0,{className:"top-btn--icon"})})})},p0=xt.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 6rem;
    height: 6rem;
    color: #fff;
    background-color: rgb(241, 186, 5); /* Sandal Yellow */
    box-shadow: ${({theme:e})=>e.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      color: #fff; /* Keep the arrow white */
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({theme:e})=>e.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`,h0="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",m0="AIzaSyBYNTgmjJk7AzfMjqDvZZvuojK0y5Nt5MA",g0=async(e,t)=>{const n=`As Krishna, offer concise wisdom related to the Bhagavad Gita for: ${e}

Previous conversation:
${t}

User's question: ${e}

Please provide a response that:
1. Maintains Krishna's persona
2. Offers concise and practical wisdom
3. References the Gita when appropriate
4. Ends with a comforting thought`;try{const r=await fetch(`${h0}?key=${m0}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n}]}]})});if(!r.ok)throw new Error("API request failed");return(await r.json()).candidates[0].content.parts[0].text.trim()}catch(r){throw console.error("Error calling Gemini API:",r),r}},v0="/assets/Krishna.6b8cc4cc.jpg",y0=()=>{const[e,t]=I.exports.useState([]),[n,r]=I.exports.useState(""),[o,i]=I.exports.useState(!1),[l,a]=I.exports.useState(!1),s=p=>{l&&u();const y=new SpeechSynthesisUtterance(p);y.lang="en-US",y.rate=1,y.onstart=()=>a(!0),y.onend=()=>a(!1),window.speechSynthesis.speak(y)},u=()=>{window.speechSynthesis.cancel(),a(!1)},h=async()=>{if(n.trim()==="")return;const p=n;t([...e,{user:"User",text:p}]),r(""),i(!0);try{const y=e.map(S=>`${S.user}: ${S.text}`).join(`
`),w=await g0(p,y);t(S=>[...S,{user:"Krishna",text:w}])}catch{t(w=>[...w,{user:"Krishna",text:"Oops! Something went wrong. Please try again."}])}finally{i(!1)}},m=()=>{t([]),u()};return g(w0,{children:L("div",{className:"chat-container",children:[g("div",{className:"chat-header",children:g("h2",{children:"Ask Krishna"})}),L("div",{className:"chat-messages",children:[e.map((p,y)=>L("div",{className:`message ${p.user==="User"?"user":"krishna"}`,children:[p.user==="Krishna"&&g("img",{src:v0,alt:"Krishna",className:"krishna-image"}),L("div",{className:"message-content",children:[g("strong",{children:p.user}),g("div",{className:"message-text",children:p.text}),p.user==="Krishna"&&L("div",{className:"audio-controls",children:[g("button",{className:"audio-button play",onClick:()=>s(p.text),disabled:l,children:"\u{1F50A} Play Audio"}),g("button",{className:"audio-button stop",onClick:u,disabled:!l,children:"\u23F9 Stop Audio"})]})]})]},y)),o&&g("div",{className:"loading",children:"Krishna is replying..."})]}),L("div",{className:"chat-input",children:[g("input",{type:"text",value:n,onChange:p=>r(p.target.value),placeholder:"Arjuna, what troubles you, my friend?"}),g("button",{onClick:h,disabled:o,children:"Send"}),g("button",{onClick:m,children:"Clear"})]})]})})},w0=xt.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(23, 128, 208), rgb(222, 231, 50)); /* Gradient background */

  .chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px; /* Adjusted for smaller screens */
    height: 80%;
    margin: 0;
    border: 1px solid #ffc107;
    border-radius: 12px;
    background-color: #3f7fb1;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .chat-header {
    background-color: #ffc107;
    color: white;
    padding: 1.2rem;
    text-align: center;
    font-size: 1.5rem; /* Adjusted for smaller screens */
    border-bottom: 2px solid #ff9800;
  }

  .chat-messages {
    padding: 1rem;
    flex: 1;
    overflow-y: auto;
    max-height: 300px; /* Adjusted for smaller screens */
    background-color: #ffffff;
    border-bottom: 2px solid #ccc;
    font-size: 1rem;
  }

  .message {
    margin-bottom: 1rem;
    padding: 0.8rem 1rem;
    border-radius: 12px;
    display: flex;
    align-items: flex-start;
    word-wrap: break-word;
    max-width: 90%; /* Adjusted for smaller screens */
  }

  .message.user {
    text-align: right;
    background-color: rgb(51, 124, 176);
    color: white;
    margin-left: auto;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 12px;

    .message-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    strong {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .message-text {
      font-size: 1rem;
      white-space: pre-wrap;
    }
  }

  .message.krishna {
    text-align: left;
    background-color: #3f7fb1;
    color: white;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 12px;

    .message-content {
      display: flex;
      flex-direction: column;
    }

    strong {
      font-size: 1rem;
      margin-bottom: 4px;
    }

    .message-text {
      font-size: 1rem;
      white-space: pre-wrap;
    }

    .audio-controls {
      display: flex;
      gap: 10px;
      margin-top: 5px;
    }

    .audio-button {
      padding: 5px 10px;
      font-size: 0.9rem; /* Adjusted for smaller screens */
    }

    .audio-button.play {
      background-color: #4caf50;
      color: white;
    }

    .audio-button.stop {
      background-color: #f44336;
      color: white;
    }

    .audio-button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .krishna-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .loading {
    text-align: center;
    color: #ff9800;
    font-style: italic;
    margin-top: 1rem;
    font-size: 1rem; /* Adjusted for smaller screens */
  }

  .chat-input {
    display: flex;
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    border-top: 1px solid #ccc;
    gap: 10px;
  }

  .chat-input input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem; /* Adjusted for smaller screens */
    height: 40px;
  }

  .chat-input button {
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem; /* Adjusted for smaller screens */
    height: 40px;
    min-width: 80px;
    white-space: nowrap;
  }

  .chat-input button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .chat-input button:hover:not(:disabled) {
    background-color: #4caf50;
  }

  .chat-input button:last-child:hover {
    background-color: #f44336;
  }

  @media (max-width: 768px) {
    .chat-container {
      height: 90%;
      max-width: 95%;
    }

    .chat-messages {
      padding: 0.8rem;
      max-height: 250px;
    }

    .chat-header {
      font-size: 1.2rem;
      padding: 1rem;
    }

    .message {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }

    .chat-input input {
      height: 35px;
      font-size: 0.9rem;
    }

    .chat-input button {
      height: 35px;
      font-size: 0.9rem;
    }
  }
`,x0={colors:{heading:"rgb(24 24 29)",text:"rgb(24 24 29)",white:"#fff",black:"#212529",helper:"#8490ff",bg:"rgb(249 249 255)",footer_bg:"#0a1435",btn:"rgb(98 84 243)",border:"rgba(98, 84, 243, 0.5)",hr:"#ffffff",gradient:"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",shadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",shadowSupport:"rgba(0, 0, 0, 0.16) 0px 1px 4px"},media:{mobile:"768px",tab:"998px"}},S0=()=>L(Rg,{theme:x0,children:[g(r0,{}),g(d0,{}),L(Om,{children:[g(Qg,{}),L(Am,{children:[g(on,{path:"/",element:g(i0,{})}),g(on,{path:"/about",element:g(a0,{})}),g(on,{path:"/faq",element:g(Dd,{})}),g(on,{path:"/feedback",element:g(o0,{})}),g(on,{path:"/chat",element:g(y0,{})}),g(on,{path:"*",element:g(u0,{})})]}),g(Yg,{})]})]});wl.createRoot(document.getElementById("root")).render(g(dt.StrictMode,{children:g(qg,{children:g(S0,{})})}));
