"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var A=g(function(U,x){
var I=require('@stdlib/assert-is-plain-object/dist'),h=require('@stdlib/assert-has-own-property/dist'),N=require('@stdlib/assert-is-boolean/dist').isPrimitive,j=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,y=require('@stdlib/error-tools-fmtprodmsg/dist');function k(e,r){return I(r)?(h(r,"thisArg")&&(e.thisArg=r.thisArg),h(r,"series")&&(e.series=r.series,!N(e.series))?new TypeError(y('1RV2o',"series",e.series)):h(r,"limit")&&(e.limit=r.limit,!j(e.limit))?new TypeError(y('1RV3P',"limit",e.limit)):null):new TypeError(y('1RV2V',r));}x.exports=k
});var O=g(function(W,E){
var L=require("debug"),s=L("none-by-async:limit");function J(e,r,i,n){var a,m,f,l,u,t,v;if(u=e.length,s("Collection length: %d",u),u===0)return s("Finished processing a collection."),n(null,!0);for(u<r.limit?l=u:l=r.limit,s("Concurrency limit: %d",l),s("Number of arguments: %d",i.length),a=u-1,m=0,t=-1,v=0;v<l;v++)t<a&&d();function d(){t+=1,s("Collection element %d: %s.",t,JSON.stringify(e[t])),i.length===2?i.call(r.thisArg,e[t],o):i.length===3?i.call(r.thisArg,e[t],t,o):i.call(r.thisArg,e[t],t,e,o)}function o(c,w){if(!f){if(c)return f=!0,s("Encountered an error: %s",c.message),n(c);if(m+=1,s("Processed %d of %d collection elements.",m,u),s("Test result: %s",!!w),w&&!f)return f=!0,s("Finished processing a collection."),n(null,!1);if(t<a)return d();if(m===u)return s("Finished processing a collection."),n(null,!0)}}}E.exports=J
});var b=g(function(X,F){
var T=require('@stdlib/assert-is-function/dist'),R=require('@stdlib/assert-is-collection/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),S=require('@stdlib/constants-float64-pinf/dist'),z=A(),D=O();function G(e,r){var i,n,a;if(i={},arguments.length>1){if(n=z(i,e),n)throw n;a=r}else a=e;if(!T(a))throw new TypeError(q('1RV3q',a));return i.series?i.limit=1:i.limit||(i.limit=S),m;function m(f,l){if(!R(f))throw new TypeError(q('1RVAh',f));if(!T(l))throw new TypeError(q('1RV3q',l));return D(f,i,a,u);function u(t,v){if(t)return l(t,!1);l(null,v)}}}F.exports=G
});var V=g(function(Y,C){
var P=b();function H(e,r,i,n){if(arguments.length<4)return P(r)(e,i);P(r,i)(e,n)}C.exports=H
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=V(),M=b();K(B,"factory",M);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map