import{j as r,F as s}from"./index.esm-95acea13.js";import{L as c}from"./index-2a26cb72.js";import{T as m}from"./index-c5a183b8.js";import{n as f}from"./nth-b0f2fe30.js";var x=f(0);const i=x,a=(e,t)=>`hsl(${e}, 75%, ${t}%)`,h=e=>({justifyContent:"center",alignItems:"center",borderRadius:"50%",borderWidth:"2px",borderStyle:"solid",borderColor:a(e,55),color:a(e,55),backgroundColor:a(e,90),fontSize:"12px",fontWeight:"bold",fontFamily:"Inter"}),y={backgroundColor:"grayShade2",borderRadius:"20px"},g={border:"1px solid",borderColor:"white",borderRadius:"20px"},l=({firstName:e,lastName:t,title:p,secondaryText:n,isTooltipActive:u=!0})=>{const o=`${i(e)} ${i(t??"")}`;return r.jsx(m,{disabled:!u,mainText:e&&t?`${e} ${t}`:e,secondaryText:p,children:n?r.jsxs(s,{alignItems:"center",sx:y,children:[r.jsx(s,{sx:g,children:r.jsx(d,{initials:o})}),r.jsx(c,{ml:"12px",mr:"20px",children:n})]}):r.jsx(d,{initials:o})})},d=({initials:e})=>{const t=Math.round((e.charCodeAt(0)-64)*360/26);return r.jsx(s,{sx:h(t),minWidth:"32px",height:"32px",alt:"User avatar",children:e})};try{l.displayName="User",l.__docgenInfo={description:"",displayName:"User",props:{firstName:{defaultValue:null,description:"User's first name",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"User's last name",name:"lastName",required:!1,type:{name:"string"}},isTooltipActive:{defaultValue:{value:"true"},description:"Whether tooltip should be shown",name:"isTooltipActive",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Appears in the tooltip",name:"title",required:!1,type:{name:"string"}},secondaryText:{defaultValue:null,description:"Allows including text into user badge",name:"secondaryText",required:!1,type:{name:"string"}}}}}catch{}try{User.displayName="User",User.__docgenInfo={description:"",displayName:"User",props:{firstName:{defaultValue:null,description:"User's first name",name:"firstName",required:!0,type:{name:"string"}},lastName:{defaultValue:null,description:"User's last name",name:"lastName",required:!1,type:{name:"string"}},isTooltipActive:{defaultValue:{value:"true"},description:"Whether tooltip should be shown",name:"isTooltipActive",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Appears in the tooltip",name:"title",required:!1,type:{name:"string"}},secondaryText:{defaultValue:null,description:"Allows including text into user badge",name:"secondaryText",required:!1,type:{name:"string"}}}}}catch{}export{l as U,i as h};