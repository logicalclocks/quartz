import{j as t,B as i}from"./index.esm-35888c3f.js";import{T as c}from"./index-ff2b798c.js";import{r as m,t as d,f as u}from"./index-ef81637b.js";import{c as _}from"./clamp-933847fa.js";function y(e,r){return m(2,arguments),d(e).getTime()-d(r).getTime()}const s=({variant:e="progress",value:r,width:a="100px",...l})=>t.jsx(i,{...l,tx:"variants.bar",variant:e,sx:f,width:a,children:t.jsx(i,{as:"span",sx:n(r)})}),f={overflow:"hidden",height:"7px",borderRadius:"3.5px"},n=e=>({width:"101%",height:"100%",display:"block",pointerEvents:"none",background:"#EBEBEB",transform:`translateX(${100*e}%)`});try{s.displayName="Bar",s.__docgenInfo={description:"",displayName:"Bar",props:{variant:{defaultValue:{value:"progress"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"progress"'},{value:'"freshness"'}]}},width:{defaultValue:{value:"100px"},description:`The width utility parses a component's \`width\` prop and converts it into a CSS width declaration.

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than 1 are converted to pixel values.
- String values are passed as raw CSS values.
- And arrays are converted to responsive width styles.`,name:"width",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}}}}}catch{}try{n.displayName="overflowStyles",n.__docgenInfo={description:"",displayName:"overflowStyles",props:{}}}catch{}const p=({expirationDate:e,size:r="md",...a})=>t.jsx(c,{mainText:u(e,"yyyy-MM-dd HH:mm"),children:t.jsx(s,{variant:"freshness",value:o(e),width:g(r),...a})}),g=e=>e==="md"?"100px":"60px",v=31622437236,o=e=>{const a=1-y(new Date,e)/v;return _(0,1,a)};try{p.displayName="FreshnessBar",p.__docgenInfo={description:"",displayName:"FreshnessBar",props:{expirationDate:{defaultValue:null,description:"expiration date given as `Date`(e.g. via new Date(model.createdAt))",name:"expirationDate",required:!0,type:{name:"Date"}},size:{defaultValue:{value:"md"},description:"Size, short(sm) or medium (md)",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}}}}}catch{}try{o.displayName="getProgress",o.__docgenInfo={description:"",displayName:"getProgress",props:{}}}catch{}export{p as F};
//# sourceMappingURL=FreshnessBar-f4c072aa.js.map
