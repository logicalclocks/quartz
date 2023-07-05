import{j as r,F as p}from"./index.esm-01e799b2.js";import{u as g}from"./theme-a71aa38c.js";import{g as f}from"./list-69749cfd.js";import{V as m}from"./value-20aa3a70.js";import{k as b}from"./core.browser.esm-3513c1b0.js";const x=(e,a)=>{switch(a){case"light":return e.colors.grayShade1;case"default":return e.colors.black;case"label":return e.colors.black;case"success":return e.colors.labels.green;case"warning":return e.colors.labels.orange;case"notice":return e.colors.labels.yellow;case"fail":return e.colors.labels.red;default:return e.colors.black}},h=b`
  to {
    transform: rotate(1turn);
  }
`,y=e=>({border:"none",display:"inline-block",position:"relative",zIndex:"0",width:"auto",height:"auto",overflow:"hidden",padding:"3px 6px",fontFamily:"arial",fontSize:"12px",fontWeight:"500",borderRadius:"1px",color:"orange",":before":{content:"''",position:"absolute",zIndex:"-2",left:"-150%",top:"-450%",width:"400%",height:"1000%",backgroundRepeat:"no-repeat",backgroundSize:"50% 50%, 50% 50%",backgroundPosition:"0 0, 100% 0, 100% 100%, 0 100%",backgroundImage:`linear-gradient(${e}, ${e})`,animation:`${h} 4s linear infinite`},":after":{content:"''",position:"absolute",zIndex:"-1",left:"1px",top:"1px",width:"calc(100% - 2px)",height:"calc(100% - 2px)",background:"inherit",borderRadius:"1px"}}),o={default:"variants.badges.primary",bordered:"variants.badges.bordered"},n=({value:e,variant:a="light",mode:t="default",loading:l=!1,icon:u,sx:v,...i})=>{const s=g(),d=x(s,a),c=l?y(d):{borderRadius:"1px"};return r.jsx(p,{as:"span",alignItems:"center",justifyContent:"center",px:"6px",height:"19px",sx:{...c,...v},variant:a,tx:l?o.bordered:o[t],...i,children:r.jsxs(m,{as:"span",display:"flex",alignItems:"center",lineHeight:"13px",fontFamily:"IBM Plex Mono",fontWeight:"normal",sx:{svg:{height:"13px",width:"auto",marginLeft:"5px"}},children:[e,u&&f(u,"currentColor")]})})};try{n.displayName="Badge",n.__docgenInfo={description:"",displayName:"Badge",props:{value:{defaultValue:null,description:"Value for the badge. E.g. 'pending' or 18",name:"value",required:!0,type:{name:"string | number"}},variant:{defaultValue:{value:"light"},description:"One of badge variants. Defined by `BadgeVariant` type. E.g. `light` or `warning`...",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"label"'},{value:'"light"'},{value:'"success"'},{value:'"warning"'},{value:'"notice"'},{value:'"fail"'}]}},mode:{defaultValue:{value:"default"},description:"Badge mode: `default` or `bordered`",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"bordered"'}]}},loading:{defaultValue:{value:"false"},description:"Whether to show loading spinner",name:"loading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon, used as `IconName.nameOfTheIcon` e.g. `IconName.download`",name:"icon",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"},{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"},{value:"27"},{value:"28"},{value:"29"},{value:"30"},{value:"31"},{value:"32"},{value:"33"},{value:"34"},{value:"35"},{value:"36"},{value:"37"},{value:"38"},{value:"39"},{value:"40"},{value:"41"},{value:"42"},{value:"43"},{value:"44"},{value:"45"},{value:"46"},{value:"47"},{value:"48"},{value:"49"},{value:"50"},{value:"51"},{value:"52"},{value:"53"},{value:"54"},{value:"55"},{value:"56"},{value:"57"},{value:"58"},{value:"59"},{value:"60"},{value:"61"},{value:"62"},{value:"63"},{value:"64"},{value:"65"},{value:"66"},{value:"67"},{value:"68"},{value:"69"},{value:"70"},{value:"71"},{value:"72"},{value:"73"},{value:"74"},{value:"75"},{value:"76"},{value:"77"},{value:"78"},{value:"79"},{value:"80"},{value:"81"},{value:"82"},{value:"83"},{value:"84"},{value:"85"},{value:"86"},{value:"87"},{value:"88"},{value:"89"},{value:"90"},{value:"91"},{value:"92"},{value:"93"}]}}}}}catch{}export{n as B};
//# sourceMappingURL=Badge-cd78b3fa.js.map