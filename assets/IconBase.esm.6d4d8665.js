var _=Object.defineProperty;var a=(e,o)=>_(e,"name",{value:o,configurable:!0});import{r as s,a as b,j as x}from"./jsx-runtime.96660072.js";var y=s.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),$=a(function(o,n,t){var r=t.get(o);return r?r(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function f(e,o){if(e==null)return{};var n={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(o.indexOf(r)>=0)&&(n[r]=e[r]);return n}a(f,"_objectWithoutPropertiesLoose");var w=s.exports.forwardRef(function(e,o){var n=e.alt,t=e.color,r=e.size,i=e.weight,v=e.mirrored,m=e.children,C=e.renderPath,z=f(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=s.exports.useContext(y),c=l.color,h=c===void 0?"currentColor":c,d=l.size,u=l.weight,P=u===void 0?"regular":u,g=l.mirrored,j=g===void 0?!1:g,I=f(l,["color","size","weight","mirrored"]);return b("svg",{...Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r!=null?r:d,height:r!=null?r:d,fill:t!=null?t:h,viewBox:"0 0 256 256",transform:v||j?"scale(-1, 1)":void 0},I,z),children:[!!n&&x("title",{children:n}),m,x("rect",{width:"256",height:"256",fill:"none"}),C(i!=null?i:P,t!=null?t:h)]})});w.displayName="IconBase";const O=w;export{O as I,$ as r};
//# sourceMappingURL=IconBase.esm.6d4d8665.js.map
