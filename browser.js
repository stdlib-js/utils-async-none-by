// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).noneByAsync=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),s="get"in r,p="set"in r,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var f=e;function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},S="object"==typeof A?A:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(S)return S;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,B=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function x(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(x));var G="function"==typeof s||"object"==typeof B||"function"==typeof N?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function M(t){return"function"===G(t)}var L=Math.floor;function R(t){return L(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function Y(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var z=Number.POSITIVE_INFINITY;var D,J=Object.getPrototypeOf;D=M(Object.getPrototypeOf)?J:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var X=D;var q=Object.prototype;function H(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),X(t))}(t),!e||!g(t,"constructor")&&g(e,"constructor")&&M(e.constructor)&&"[object Function]"===h(e.constructor)&&g(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===q||function(t){var e;for(e in t)if(!g(t,e))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var et=Q.NEGATIVE_INFINITY;function rt(t){return t<z&&t>et&&R(t)}function nt(t){return K(t)&&rt(t)}function ot(t){return $(t)&&rt(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function lt(t){return ut(t)||ct(t)}function ft(t,e){return H(e)?(g(e,"thisArg")&&(t.thisArg=e.thisArg),g(e,"series")&&(t.series=e.series,!p(t.series))?new TypeError(Y("0ib30","series",t.series)):g(e,"limit")&&(t.limit=e.limit,!ut(t.limit))?new TypeError(Y("0ib3b","limit",t.limit)):null):new TypeError(Y("0ib2h",e))}function at(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(lt,"isPrimitive",ut),a(lt,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("none-by-async:limit");function pt(t,e,r,n){var o,i,u,c,l,f,a;if(l=t.length,st("Collection length: %d",l),0===l)return st("Finished processing a collection."),n(null,!0);for(c=l<e.limit?l:e.limit,st("Concurrency limit: %d",c),st("Number of arguments: %d",r.length),o=l-1,i=0,f=-1,a=0;a<c;a++)f<o&&s();function s(){st("Collection element %d: %s.",f+=1,JSON.stringify(t[f])),2===r.length?r.call(e.thisArg,t[f],p):3===r.length?r.call(e.thisArg,t[f],f,p):r.call(e.thisArg,t[f],f,t,p)}function p(t,e){if(!u)return t?(u=!0,st("Encountered an error: %s",t.message),n(t)):(st("Processed %d of %d collection elements.",i+=1,l),st("Test result: %s",!!e),e&&!u?(u=!0,st("Finished processing a collection."),n(null,!1)):f<o?s():i===l?(st("Finished processing a collection."),n(null,!0)):void 0)}}function yt(t,e){var r,n,o;if(r={},arguments.length>1){if(n=ft(r,t))throw n;o=e}else o=t;if(!M(o))throw new TypeError(Y("0ib43",o));return r.series?r.limit=1:r.limit||(r.limit=z),i;function i(t,e){if(!U(t))throw new TypeError(Y("0ibBO",t));if(!M(e))throw new TypeError(Y("0ib43",e));return pt(t,r,o,(function(t,r){if(t)return e(t,!1);e(null,r)}))}}function bt(t,e,r,n){if(arguments.length<4)return yt(e)(t,r);yt(e,r)(t,n)}return a(bt,"factory",yt),bt}));
//# sourceMappingURL=browser.js.map
