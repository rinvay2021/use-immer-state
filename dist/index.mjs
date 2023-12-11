import t,{useMemo as n,useReducer as r,useCallback as e,useState as o}from"react";import{produce as i,freeze as u}from"immer";var a,c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,s=/^\./,p=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,y=/^(?:0|[1-9]\d*)$/,v="object"==typeof self&&self&&self.Object===Object&&self,d="object"==typeof c&&c&&c.Object===Object&&c||v||Function("return this")(),b=Array.prototype,g=Function.prototype,j=Object.prototype,m=d["__core-js_shared__"],O=(a=/[^.]+$/.exec(m&&m.keys&&m.keys.IE_PROTO||""))?"Symbol(src)_1."+a:"",w=g.toString,$=j.hasOwnProperty,S=j.toString,x=RegExp("^"+w.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=d.Symbol,E=b.splice,F=z(d,"Map"),P=z(Object,"create"),k=C?C.prototype:void 0,A=k?k.toString:void 0;function T(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function R(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function G(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function I(t,n,r){var e=t[n];$.call(t,n)&&K(e,r)&&(void 0!==r||n in t)||(t[n]=r)}function M(t,n){for(var r=t.length;r--;)if(K(t[r][0],n))return r;return-1}function q(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function z(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return function(t){return!(!N(t)||(n=t,O&&O in n))&&(function(t){var n=N(t)?S.call(t):"";return"[object Function]"==n||"[object GeneratorFunction]"==n}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?x:h).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}(r)?r:void 0}function B(t,n){return!!(n=null==n?9007199254740991:n)&&("number"==typeof t||y.test(t))&&t>-1&&t%1==0&&t<n}T.prototype.clear=function(){this.__data__=P?P(null):{}},T.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},T.prototype.get=function(t){var n=this.__data__;if(P){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return $.call(n,t)?n[t]:void 0},T.prototype.has=function(t){var n=this.__data__;return P?void 0!==n[t]:$.call(n,t)},T.prototype.set=function(t,n){return this.__data__[t]=P&&void 0===n?"__lodash_hash_undefined__":n,this},R.prototype.clear=function(){this.__data__=[]},R.prototype.delete=function(t){var n=this.__data__,r=M(n,t);return!(r<0||(r==n.length-1?n.pop():E.call(n,r,1),0))},R.prototype.get=function(t){var n=this.__data__,r=M(n,t);return r<0?void 0:n[r][1]},R.prototype.has=function(t){return M(this.__data__,t)>-1},R.prototype.set=function(t,n){var r=this.__data__,e=M(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},G.prototype.clear=function(){this.__data__={hash:new T,map:new(F||R),string:new T}},G.prototype.delete=function(t){return q(this,t).delete(t)},G.prototype.get=function(t){return q(this,t).get(t)},G.prototype.has=function(t){return q(this,t).has(t)},G.prototype.set=function(t,n){return q(this,t).set(t,n),this};var D=J(function(t){var n;t=null==(n=t)?"":function(t){if("string"==typeof t)return t;if(Q(t))return A?A.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}(n);var r=[];return s.test(t)&&r.push(""),t.replace(p,function(t,n,e,o){r.push(e?o.replace(_,"$1"):n||t)}),r});function H(t){if("string"==typeof t||Q(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function J(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u),u};return r.cache=new(J.Cache||G),r}function K(t,n){return t===n||t!=t&&n!=n}J.Cache=G;var L=Array.isArray;function N(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Q(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==S.call(t)}var U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/,W=/^\./,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/\\(\\)?/g,Z=/^\[object .+?Constructor\]$/,tt="object"==typeof self&&self&&self.Object===Object&&self,nt="object"==typeof c&&c&&c.Object===Object&&c||tt||Function("return this")(),rt=Array.prototype,et=Function.prototype,ot=Object.prototype,it=nt["__core-js_shared__"],ut=function(){var t=/[^.]+$/.exec(it&&it.keys&&it.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),at=et.toString,ct=ot.hasOwnProperty,ft=ot.toString,lt=RegExp("^"+at.call(ct).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),st=nt.Symbol,pt=rt.splice,_t=Ot(nt,"Map"),ht=Ot(Object,"create"),yt=st?st.prototype:void 0,vt=yt?yt.toString:void 0;function dt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function bt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function gt(t){var n=-1,r=t?t.length:0;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function jt(t,n){for(var r,e,o=t.length;o--;)if((r=t[o][0])===(e=n)||r!=r&&e!=e)return o;return-1}function mt(t,n){var r,e,o=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?o["string"==typeof n?"string":"hash"]:o.map}function Ot(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return function(t){return!(!Ct(t)||(n=t,ut&&ut in n))&&(function(t){var n=Ct(t)?ft.call(t):"";return"[object Function]"==n||"[object GeneratorFunction]"==n}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?lt:Z).test(function(t){if(null!=t){try{return at.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}(r)?r:void 0}dt.prototype.clear=function(){this.__data__=ht?ht(null):{}},dt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},dt.prototype.get=function(t){var n=this.__data__;if(ht){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return ct.call(n,t)?n[t]:void 0},dt.prototype.has=function(t){var n=this.__data__;return ht?void 0!==n[t]:ct.call(n,t)},dt.prototype.set=function(t,n){return this.__data__[t]=ht&&void 0===n?"__lodash_hash_undefined__":n,this},bt.prototype.clear=function(){this.__data__=[]},bt.prototype.delete=function(t){var n=this.__data__,r=jt(n,t);return!(r<0||(r==n.length-1?n.pop():pt.call(n,r,1),0))},bt.prototype.get=function(t){var n=this.__data__,r=jt(n,t);return r<0?void 0:n[r][1]},bt.prototype.has=function(t){return jt(this.__data__,t)>-1},bt.prototype.set=function(t,n){var r=this.__data__,e=jt(r,t);return e<0?r.push([t,n]):r[e][1]=n,this},gt.prototype.clear=function(){this.__data__={hash:new dt,map:new(_t||bt),string:new dt}},gt.prototype.delete=function(t){return mt(this,t).delete(t)},gt.prototype.get=function(t){return mt(this,t).get(t)},gt.prototype.has=function(t){return mt(this,t).has(t)},gt.prototype.set=function(t,n){return mt(this,t).set(t,n),this};var wt=St(function(t){var n;t=null==(n=t)?"":function(t){if("string"==typeof t)return t;if(Et(t))return vt?vt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}(n);var r=[];return W.test(t)&&r.push(""),t.replace(X,function(t,n,e,o){r.push(e?o.replace(Y,"$1"):n||t)}),r});function $t(t){if("string"==typeof t||Et(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function St(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,e);return r.cache=i.set(o,u),u};return r.cache=new(St.Cache||gt),r}St.Cache=gt;var xt=Array.isArray;function Ct(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Et(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==ft.call(t)}function Ft(t,e,o){var u=n(function(){return i(t)},[t]);return r(u,e,o)}export default function(n){var r,a,c,s=(r=n,a=o(function(){return u("function"==typeof r?r():r,!0)}),c=a[1],[a[0],e(function(t){c("function"==typeof t?i(t):u(t))},[])]),p=s[0],_=s[1],h=t.useCallback(function(t){var n=function(n){_(function(r){Object.prototype.hasOwnProperty.call(t,n)&&function(t,n,r){null==t||function(t,n,r,e){if(!N(t))return t;for(var o=-1,i=(n=function(t,n){if(L(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Q(t))||l.test(t)||!f.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:function(t){return L(t)?t:D(t)}(n)).length,u=i-1,a=t;null!=a&&++o<i;){var c=H(n[o]),s=r;if(o!=u){var p=a[c];void 0===(s=void 0)&&(s=N(p)?p:B(n[o+1])?[]:{})}I(a,c,s),a=a[c]}}(t,n,r)}(r,n,t[n])})};for(var r in t)n(r)},[p]),y=t.useCallback(function(t,n,r){var e=function(t,n,r){var e=null==t?void 0:function(t,n){for(var r,e=0,o=(n=function(t,n){if(xt(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Et(t))||V.test(t)||!U.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:xt(r=n)?r:wt(r)).length;null!=t&&e<o;)t=t[$t(n[e++])];return e&&e==o?t:void 0}(t,n);return void 0===e?r:e}(p,t,n);return"function"==typeof r?r(e):e},[p]);return[p,{dispatchSet:h,dispatchGet:y}]}export{Ft as useImmerReducer};
//# sourceMappingURL=index.mjs.map