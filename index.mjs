// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";function m(e,t){return s(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(n("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!a(e.limit))?new TypeError(n("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",t))}function u(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var n=Function.bind.apply(t,i);return new n}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var d=u(Object.freeze({__proto__:null,default:()=>()=>{}}))("none-by-async:limit");function c(e,t,i,n){var r,s,o,l,a,m,u;if(a=e.length,d("Collection length: %d",a),0===a)return d("Finished processing a collection."),n(null,!0);for(l=a<t.limit?a:t.limit,d("Concurrency limit: %d",l),d("Number of arguments: %d",i.length),r=a-1,s=0,m=-1,u=0;u<l;u++)m<r&&c();function c(){d("Collection element %d: %s.",m+=1,JSON.stringify(e[m])),2===i.length?i.call(t.thisArg,e[m],p):3===i.length?i.call(t.thisArg,e[m],m,p):i.call(t.thisArg,e[m],m,e,p)}function p(e,t){if(!o)return e?(o=!0,d("Encountered an error: %s",e.message),n(e)):(d("Processed %d of %d collection elements.",s+=1,a),d("Test result: %s",!!t),t&&!o?(o=!0,d("Finished processing a collection."),n(null,!1)):m<r?c():s===a?(d("Finished processing a collection."),n(null,!0)):void 0)}}function p(e,s){var o,l,a;if(o={},arguments.length>1){if(l=m(o,e))throw l;a=s}else a=e;if(!t(a))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",a));return o.series?o.limit=1:o.limit||(o.limit=r),u;function u(e,r){if(!i(e))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!t(r))throw new TypeError(n("invalid argument. Last argument must be a function. Value: `%s`.",r));return c(e,o,a,(function(e,t){if(e)return r(e,!1);r(null,t)}))}}function f(e,t,i,n){if(arguments.length<4)return p(t)(e,i);p(t,i)(e,n)}e(f,"factory",p);export{f as default,p as factory};
//# sourceMappingURL=index.mjs.map
