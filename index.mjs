// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";function m(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("1RV2o,GE","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!d(e.limit))?new TypeError(r("1RV3P,Fv","limit",e.limit)):null):new TypeError(r("1RV2V,FD",t))}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(t,i);return new r}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("none-by-async:limit");function p(e,t,i,r){var n,s,o,l,d,m,c;if(d=e.length,f("Collection length: %d",d),0===d)return f("Finished processing a collection."),r(null,!0);for(l=d<t.limit?d:t.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",i.length),n=d-1,s=0,m=-1,c=0;c<l;c++)m<n&&p();function p(){f("Collection element %d: %s.",m+=1,JSON.stringify(e[m])),2===i.length?i.call(t.thisArg,e[m],u):3===i.length?i.call(t.thisArg,e[m],m,u):i.call(t.thisArg,e[m],m,e,u)}function u(e,t){if(!o)return e?(o=!0,f("Encountered an error: %s",e.message),r(e)):(f("Processed %d of %d collection elements.",s+=1,d),f("Test result: %s",!!t),t&&!o?(o=!0,f("Finished processing a collection."),r(null,!1)):m<n?p():s===d?(f("Finished processing a collection."),r(null,!0)):void 0)}}function u(e,s){var o,l,d;if(o={},arguments.length>1){if(l=m(o,e))throw l;d=s}else d=e;if(!t(d))throw new TypeError(r("1RV3q,JV",d));return o.series?o.limit=1:o.limit||(o.limit=n),c;function c(e,n){if(!i(e))throw new TypeError(r("1RVAh,O3",e));if(!t(n))throw new TypeError(r("1RV3q,JV",n));return p(e,o,d,(function(e,t){if(e)return n(e,!1);n(null,t)}))}}function a(e,t,i,r){if(arguments.length<4)return u(t)(e,i);u(t,i)(e,r)}e(a,"factory",u);export{a as default,u as factory};
//# sourceMappingURL=index.mjs.map
