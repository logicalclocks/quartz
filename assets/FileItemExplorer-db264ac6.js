import{j as o,B as m}from"./index.esm-35888c3f.js";import{r as x}from"./index-8db94870.js";import{C as q}from"./index-7246bc22.js";import{T as C}from"./index-ff2b798c.js";const f=(a,d,t,e=!0)=>({position:"relative",backgroundColor:a&&d?"grayShade2":"white",width:"222px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",":focus":{...e&&{backgroundColor:"primaryShade2"},outlineWidth:0},"div >label":{overflow:"hidden",">input":{minWidth:"16px",minHeight:"16px"},span:{minWidth:"18px"},div:{width:"172px",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontFamily:"text",fontWeight:"text",fontSize:"text"}},"> label":{m:9},p:t==="nFiles"?0:9,cursor:e?"pointer":"default",borderRadius:0,borderColor:"grayShade2",borderStyle:"solid",borderWidth:"1px",boxSizing:"border-box",fontFamily:"text",fontWeight:"text",fontSize:"text",...!e&&{color:"gray"}}),s=({isActive:a,setActiveFolder:d,setActiveFile:t,itemInfo:e,index:y,setColumns:h,mode:l="oneFile",selected:b,isFileSelected:F,isValidExtension:r,setIsEmptyFolder:v})=>{const[n,u]=x.useState(a),[i,S]=x.useState(b),p=c=>{v(!1),c==="nFiles"&&(u(!n),S(!i),t(e),F(e,!i)),c!=="oneFolder"&&(u(!n),t(e)),d(0),h(w=>[...w.slice(0,y+1)])},g=()=>{t(e)};return o.jsx(C,{mainText:e.attributes.name,children:l==="nFiles"?o.jsx(m,{sx:{...f(n,i,l,r)},tabIndex:0,onClick:()=>r&&g(),children:o.jsx(q,{m:"10px",disabled:!r,label:e.attributes.name,checked:i,onChange:()=>p(l),variant:"gray"})}):o.jsx(m,{sx:{...f(n,i,l,r)},onClick:()=>r&&p(l),tabIndex:0,children:e.attributes.name})})},A=s;try{s.displayName="FileItemExplorer",s.__docgenInfo={description:"",displayName:"FileItemExplorer",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},mode:{defaultValue:{value:"oneFile"},description:"",name:"mode",required:!1,type:{name:"string"}},itemInfo:{defaultValue:null,description:"",name:"itemInfo",required:!0,type:{name:"FileExplorData"}},setActiveFile:{defaultValue:null,description:"",name:"setActiveFile",required:!1,type:{name:"any"}},setColumns:{defaultValue:null,description:"",name:"setColumns",required:!1,type:{name:"any"}},setActiveFolder:{defaultValue:null,description:"",name:"setActiveFolder",required:!1,type:{name:"any"}},isFileSelected:{defaultValue:null,description:"",name:"isFileSelected",required:!1,type:{name:"any"}},isValidExtension:{defaultValue:null,description:"",name:"isValidExtension",required:!0,type:{name:"boolean"}},setIsEmptyFolder:{defaultValue:null,description:"",name:"setIsEmptyFolder",required:!0,type:{name:"(value: boolean) => void"}}}}}catch{}export{A as F};
//# sourceMappingURL=FileItemExplorer-db264ac6.js.map
