import{j as t,F as a,B as x}from"./index.esm-4cde2ecf.js";import{r as m,R as h}from"./index-c4905b50.js";import{V as o}from"./value-4ea02dda.js";const u=e=>({cursor:"pointer",textAlign:"center",px:"8px",mx:"2px",transition:"border-color .4s",":after":{width:"110%",ml:"-5%",content:'""',display:"block",borderBottom:"2px solid",borderBottomColor:e?"primary":"transparent",transition:"border-bottom-color .3s"},":hover:after":!e&&{borderBottom:"2px solid",borderBottomColor:"grayShade1"}}),b=e=>({p:e?"20px":"0px 20px 0px 10px",pb:0,position:"relative",bg:"white",flexDirection:"column",boxShadow:e?"0 -5px 0 grayShade3":"",zIndex:25,width:"100%"}),f={position:"absolute",height:"1px",backgroundColor:"grayShade2",width:"100%",bottom:"0px",zIndex:-1},s=({title:e,tabs:n,withBase:l=!1,sx:d,...p})=>{const c=m.useMemo(()=>{const r=n.findIndex(({isActive:i})=>i);return r<0?0:r},[n]);return t.jsxs(a,{sx:{...b(!!e),...d},...p,children:[t.jsx(a,{justifyContent:"space-between",width:"100%",height:"fit-content",children:t.jsx(o,{fontSize:"20px",fontFamily:"Inter",fontWeight:"bold",children:e&&e})}),t.jsxs(a,{width:"100%",mt:"25px",justifyContent:"space-between",sx:{position:"relative"},children:[l&&t.jsx(a,{sx:f}),t.jsx(a,{children:n.map((r,i)=>t.jsx(x,{onClick:r.onClick,sx:u(c===i),children:t.jsxs(a,{alignItems:"baseline",pb:"10px",children:[t.jsx(o,{fontFamily:"Inter",children:r.title}),h.isValidElement(r.altContent)&&t.jsx(a,{ml:"10px",children:t.jsx(a,{as:"span",variant:"light",alignItems:"center",tx:"variants.badges.primary",justifyContent:"center",px:"4px",py:"2px",sx:{borderRadius:"1px"},children:r.altContent})})]})},r.title))})]})]})};try{s.displayName="AlternativeHeader",s.__docgenInfo={description:"",displayName:"AlternativeHeader",props:{title:{defaultValue:null,description:"Title for the tabs bar",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"A list of tabs, defined by `ALternativeHeaderTab` interface",name:"tabs",required:!0,type:{name:"Tab[]"}},withBase:{defaultValue:{value:"false"},description:"Whether to show a line under the tabs menu",name:"withBase",required:!1,type:{name:"boolean"}}}}}catch{}try{AlternativeHeader.displayName="AlternativeHeader",AlternativeHeader.__docgenInfo={description:"",displayName:"AlternativeHeader",props:{title:{defaultValue:null,description:"Title for the tabs bar",name:"title",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"A list of tabs, defined by `ALternativeHeaderTab` interface",name:"tabs",required:!0,type:{name:"Tab[]"}},withBase:{defaultValue:{value:"false"},description:"Whether to show a line under the tabs menu",name:"withBase",required:!1,type:{name:"boolean"}}}}}catch{}export{s as A};
//# sourceMappingURL=index-cbd3b912.js.map