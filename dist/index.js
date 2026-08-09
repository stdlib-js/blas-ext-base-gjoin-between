"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var B=x(function(I,w){
var h=require('@stdlib/assert-is-undefined-or-null/dist');function p(e,r,a,o,u,l,t,s,c){var v,d,f,g,i,q,n,j,y;for(d=o.data,v=t.data,g=o.accessors[0],f=t.accessors[0],i=r,q=l,n=c,y=0;y<e;y++)y>0&&(i+=f(v,n),n+=s),j=g(d,q),h(j)||(i+=String(j)),q+=u;return i+=a,i}w.exports=p
});var b=x(function(J,P){
var z=require('@stdlib/assert-is-undefined-or-null/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),A=B();function C(e,r,a,o,u,l,t,s,c){var v,d,f,g,i,q,n;if(e<=0)return r+a;if(d=O(o),f=O(t),d.accessorProtocol||f.accessorProtocol)return A(e,r,a,d,u,l,f,s,c);for(v=r,g=l,i=c,n=0;n<e;n++)n>0&&(v+=t[i],i+=s),q=o[g],z(q)||(v+=String(q)),g+=u;return v+=a,v}P.exports=C
});var m=x(function(K,k){
var U=require('@stdlib/strided-base-stride2offset/dist'),D=b();function E(e,r,a,o,u,l,t){var s,c;return s=U(e,u),c=U(e-1,t),D(e,r,a,o,u,s,l,t,c)}k.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),G=b();F(R,"ndarray",G);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
