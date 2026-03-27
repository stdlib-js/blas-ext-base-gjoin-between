"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var B=x(function(I,w){
var h=require('@stdlib/assert-is-undefined-or-null/dist');function p(e,r,n,o,u,l,i,s,c){var t,d,f,g,a,q,v,j,y;for(d=o.data,t=i.data,g=o.accessors[0],f=i.accessors[0],a=r,q=l,v=c,y=0;y<e;y++)y>0&&(a+=f(t,v),v+=s),j=g(d,q),h(j)||(a+=String(j)),q+=u;return a+=n,a}w.exports=p
});var b=x(function(J,P){
var z=require('@stdlib/assert-is-undefined-or-null/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),A=B();function C(e,r,n,o,u,l,i,s,c){var t,d,f,g,a,q,v;if(e<=0)return r+n;if(d=O(o),f=O(i),d.accessorProtocol||f.accessorProtocol)return A(e,r,n,d,u,l,f,s,c);for(t=r,g=l,a=c,v=0;v<e;v++)v>0&&(t+=i[a],a+=s),q=o[g],z(q)||(t+=String(q)),g+=u;return t+=n,t}P.exports=C
});var m=x(function(K,k){
var U=require('@stdlib/strided-base-stride2offset/dist'),D=b();function E(e,r,n,o,u,l,i){var s,c;return s=U(e,u),c=U(e-1,i),D(e,r,n,o,u,s,l,i,c)}k.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),G=b();F(R,"ndarray",G);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
