import{j as i,F as f,B as _}from"./index.esm-95acea13.js";import{r as o}from"./index-8ee6c85d.js";import{T as w}from"./index-c5a183b8.js";import{I as x}from"./index-14281ba5.js";import{L as S}from"./labeling-36656030.js";import{I as b}from"./list-9cfea01e.js";const j={userSelect:"none",label:{borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",transition:"all 0.25s ease","> div":{pr:"3px",fontWeight:"label",fontSize:"label",fontFamily:"label",textAlign:"right",width:"min-content"},"> input":{width:"30px",border:"none",outline:"none",textAlign:"right",bg:"inherit",fontWeight:"label",fontSize:"label",fontFamily:"label",MozAppearance:"textfield","::-webkit-outer-spin-button, ::-webkit-inner-spin-button":{WebkitAppearance:"none"}}},"& > div > button > svg":{fontSize:"14px"}},A=({totalPages:t,currentPage:n,disabled:r,label:k,onChange:l,variant:h="primary",...s})=>{const[a,p]=o.useState(String(n)),[g,u]=o.useState(""),d=e=>e>t?t:e<1?1:e,y=e=>{e.key==="Enter"&&l(d(+a))},v=({target:e})=>{const c=+e.value;p(e.value),u(c>t||c<1?"Out of the range":"")},m=(e=1)=>()=>{l(d(n+e))};return o.useEffect(()=>{a!==String(n)&&(p(String(n)),u(""))},[n]),i.jsxs(f,{alignItems:"center",...s,tx:"pagination",variant:r?"disabled":h,sx:{...j,...s.sx},children:[i.jsx(x,{icon:b.arrow_left,intent:"ghost-white",tooltip:"prev page",disabled:r||n<=1,onClick:m(-1)}),i.jsx(w,{mainText:"Press enter to navigate",secondaryText:g,mx:"4px",disabled:r,children:i.jsxs(f,{as:"label",width:"min-content",height:"32px",flexDirection:"row",alignItems:"center",pr:"8px",children:[i.jsx(_,{disabled:r,as:"input",type:"number",value:a,color:"black",min:1,max:t,onChange:v,onKeyUp:y}),i.jsx(S,{gray:!0,bold:!0,children:`/${t}`})]})}),i.jsx(x,{icon:b.arrow_right,intent:"ghost-white",tooltip:"next page",disabled:r||n>=t,onClick:m()})]})};try{pagination.displayName="pagination",pagination.__docgenInfo={description:"",displayName:"pagination",props:{totalPages:{defaultValue:null,description:"",name:"totalPages",required:!0,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"primary"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}}}}}catch{}export{A as P};