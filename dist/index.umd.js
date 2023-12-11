!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("immer")):"function"==typeof define&&define.amd?define(["exports","react","immer"],e):e((t=t||self).useImmerState={},t.react,t.immer)}(this,function(t,e,n){var r,o="default"in e?e.default:e,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/,c=/^\./,f=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,l=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,_="object"==typeof self&&self&&self.Object===Object&&self,h="object"==typeof i&&i&&i.Object===Object&&i||_||Function("return this")(),y=Array.prototype,d=Function.prototype,v=Object.prototype,b=h["__core-js_shared__"],g=(r=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",j=d.toString,m=v.hasOwnProperty,O=v.toString,w=RegExp("^"+j.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=h.Symbol,S=y.splice,x=G(h,"Map"),C=G(Object,"create"),E=$?$.prototype:void 0,F=E?E.toString:void 0;function k(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function P(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function A(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function R(t,e,n){var r=t[e];m.call(t,e)&&D(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function T(t,e){for(var n=t.length;n--;)if(D(t[n][0],e))return n;return-1}function I(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function G(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!J(t)||(e=t,g&&g in e))&&(function(t){var e=J(t)?O.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?w:l).test(function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}(n)?n:void 0}function M(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||p.test(t))&&t>-1&&t%1==0&&t<e}k.prototype.clear=function(){this.__data__=C?C(null):{}},k.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},k.prototype.get=function(t){var e=this.__data__;if(C){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return m.call(e,t)?e[t]:void 0},k.prototype.has=function(t){var e=this.__data__;return C?void 0!==e[t]:m.call(e,t)},k.prototype.set=function(t,e){return this.__data__[t]=C&&void 0===e?"__lodash_hash_undefined__":e,this},P.prototype.clear=function(){this.__data__=[]},P.prototype.delete=function(t){var e=this.__data__,n=T(e,t);return!(n<0||(n==e.length-1?e.pop():S.call(e,n,1),0))},P.prototype.get=function(t){var e=this.__data__,n=T(e,t);return n<0?void 0:e[n][1]},P.prototype.has=function(t){return T(this.__data__,t)>-1},P.prototype.set=function(t,e){var n=this.__data__,r=T(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},A.prototype.clear=function(){this.__data__={hash:new k,map:new(x||P),string:new k}},A.prototype.delete=function(t){return I(this,t).delete(t)},A.prototype.get=function(t){return I(this,t).get(t)},A.prototype.has=function(t){return I(this,t).has(t)},A.prototype.set=function(t,e){return I(this,t).set(t,e),this};var q=B(function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(K(t))return F?F.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return c.test(t)&&n.push(""),t.replace(f,function(t,e,r,o){n.push(r?o.replace(s,"$1"):e||t)}),n});function z(t){if("string"==typeof t||K(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function B(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u),u};return n.cache=new(B.Cache||A),n}function D(t,e){return t===e||t!=t&&e!=e}B.Cache=A;var H=Array.isArray;function J(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function K(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==O.call(t)}var L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,N=/^\w*$/,Q=/^\./,U=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,V=/\\(\\)?/g,W=/^\[object .+?Constructor\]$/,X="object"==typeof self&&self&&self.Object===Object&&self,Y="object"==typeof i&&i&&i.Object===Object&&i||X||Function("return this")(),Z=Array.prototype,tt=Function.prototype,et=Object.prototype,nt=Y["__core-js_shared__"],rt=function(){var t=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),ot=tt.toString,it=et.hasOwnProperty,ut=et.toString,at=RegExp("^"+ot.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ct=Y.Symbol,ft=Z.splice,st=gt(Y,"Map"),lt=gt(Object,"create"),pt=ct?ct.prototype:void 0,_t=pt?pt.toString:void 0;function ht(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function yt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function dt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function vt(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function bt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!$t(t)||(e=t,rt&&rt in e))&&(function(t){var e=$t(t)?ut.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?at:W).test(function(t){if(null!=t){try{return ot.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}(n)?n:void 0}ht.prototype.clear=function(){this.__data__=lt?lt(null):{}},ht.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ht.prototype.get=function(t){var e=this.__data__;if(lt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return it.call(e,t)?e[t]:void 0},ht.prototype.has=function(t){var e=this.__data__;return lt?void 0!==e[t]:it.call(e,t)},ht.prototype.set=function(t,e){return this.__data__[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this},yt.prototype.clear=function(){this.__data__=[]},yt.prototype.delete=function(t){var e=this.__data__,n=vt(e,t);return!(n<0||(n==e.length-1?e.pop():ft.call(e,n,1),0))},yt.prototype.get=function(t){var e=this.__data__,n=vt(e,t);return n<0?void 0:e[n][1]},yt.prototype.has=function(t){return vt(this.__data__,t)>-1},yt.prototype.set=function(t,e){var n=this.__data__,r=vt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},dt.prototype.clear=function(){this.__data__={hash:new ht,map:new(st||yt),string:new ht}},dt.prototype.delete=function(t){return bt(this,t).delete(t)},dt.prototype.get=function(t){return bt(this,t).get(t)},dt.prototype.has=function(t){return bt(this,t).has(t)},dt.prototype.set=function(t,e){return bt(this,t).set(t,e),this};var jt=Ot(function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(St(t))return _t?_t.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return Q.test(t)&&n.push(""),t.replace(U,function(t,e,r,o){n.push(r?o.replace(V,"$1"):e||t)}),n});function mt(t){if("string"==typeof t||St(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Ot(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u),u};return n.cache=new(Ot.Cache||dt),n}Ot.Cache=dt;var wt=Array.isArray;function $t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function St(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==ut.call(t)}t.default=function(t){var r,i,c,f=(r=t,i=e.useState(function(){return n.freeze("function"==typeof r?r():r,!0)}),c=i[1],[i[0],e.useCallback(function(t){c("function"==typeof t?n.produce(t):n.freeze(t))},[])]),s=f[0],l=f[1],p=o.useCallback(function(t){var e=function(e){l(function(n){Object.prototype.hasOwnProperty.call(t,e)&&function(t,e,n){null==t||function(t,e,n,r){if(!J(t))return t;for(var o=-1,i=(e=function(t,e){if(H(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!K(t))||a.test(t)||!u.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:function(t){return H(t)?t:q(t)}(e)).length,c=i-1,f=t;null!=f&&++o<i;){var s=z(e[o]),l=n;if(o!=c){var p=f[s];void 0===(l=void 0)&&(l=J(p)?p:M(e[o+1])?[]:{})}R(f,s,l),f=f[s]}}(t,e,n)}(n,e,t[e])})};for(var n in t)e(n)},[s]),_=o.useCallback(function(t,e,n){var r=function(t,e,n){var r=null==t?void 0:function(t,e){for(var n,r=0,o=(e=function(t,e){if(wt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!St(t))||N.test(t)||!L.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:wt(n=e)?n:jt(n)).length;null!=t&&r<o;)t=t[mt(e[r++])];return r&&r==o?t:void 0}(t,e);return void 0===r?n:r}(s,t,e);return"function"==typeof n?n(r):r},[s]);return[s,{dispatchSet:p,dispatchGet:_}]},t.useImmerReducer=function(t,r,o){var i=e.useMemo(function(){return n.produce(t)},[t]);return e.useReducer(i,r,o)}});
//# sourceMappingURL=index.umd.js.map