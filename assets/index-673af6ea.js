import{j as r,F as p}from"./index.esm-4cde2ecf.js";import{r as u}from"./index-c4905b50.js";import{L as w,a as g}from"./index-5b29967a.js";import"./index-c72db7d4.js";import{S as h}from"./index-6c7829fd.js";import{T as v}from"./index-ef2effff.js";import{T as _}from"./positions-4b0ff717.js";import{G as E}from"./GetIcon-12ee8748.js";const L=(t,i,a)=>{u.useEffect(()=>{const n=s=>{(a||[]).some(e=>{const o=document.getElementById(e);return o==null?void 0:o.contains(s.target)})||i.some(e=>{var o;return(o=e==null?void 0:e.current)==null?void 0:o.contains(s.target)})||t()};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[i,a,t])},G=({items:t,isOpen:i=!0,onClickOutside:a=()=>{},...n})=>{const s=u.useRef(null);return L(a,[s]),i?r.jsx(w,{...n,ref:s,children:t==null?void 0:t.map((e,o)=>{const{value:d,id:m,icon:l,onClick:f,isLoading:x,disabled:c,tooltipProps:y,...j}=e;return r.jsx(v,{position:_.right,...y,children:r.jsx(g,{onClick:()=>f(e),disabled:c,...j,children:r.jsxs(p,{width:"100%",children:[r.jsxs(p,{flexGrow:1,color:"black",children:[l&&r.jsx(E,{color:c?"gray":"black",icon:l,size:"sm"}),d]}),x&&r.jsx(h,{size:16,ml:"15px",color:c?"gray":"primary"})]})},m||typeof d!="object"?d:o)})})}):null};try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DropdownItem<{}>[]"}},isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:{value:"() => {}"},description:"",name:"onClickOutside",required:!1,type:{name:"(() => void)"}}}}}catch{}export{G as D,L as u};
//# sourceMappingURL=index-673af6ea.js.map