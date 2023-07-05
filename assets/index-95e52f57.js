import{j as r,B as s}from"./index.esm-01e799b2.js";import{r as y}from"./index-570b25c1.js";import{L as x}from"./labeling-5e932a07.js";var u=(e=>(e.full="full",e.tiny="tiny",e))(u||{});function g({position:e,mode:t,fillSpace:a}){return{width:a?"100%":"auto",textAlign:e,py:t===u.full?"12px":"8px",px:t===u.full?"20px":"4px",":first-of-type":{pl:"8px"},":last-of-type":{pr:"8px"}}}var d=(e=>(e.left="left",e.right="right",e))(d||{});const h=({mode:e=u.full,component:t,componentProps:a,position:o=d.left,fillSpace:i=!1,...p})=>r.jsx(s,{as:"td",sx:g({position:o,mode:e,fillSpace:i}),...p,children:r.jsx(t,{...a})});try{item.displayName="item",item.__docgenInfo={description:"",displayName:"item",props:{mode:{defaultValue:{value:"Mode.full"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"tiny"'}]}},component:{defaultValue:null,description:"",name:"component",required:!0,type:{name:"ComponentType<any>"}},componentProps:{defaultValue:null,description:"",name:"componentProps",required:!0,type:{name:"any"}},position:{defaultValue:{value:"TableItemPosition.left"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},fillSpace:{defaultValue:{value:"false"},description:"",name:"fillSpace",required:!1,type:{name:"boolean"}}}}}catch{}function m(e){return{[`border${e}Style`]:"solid",[`border${e}Width`]:"1px",[`border${e}Color`]:"grayShade2"}}const _=({mode:e})=>({...m("Top"),...m("Bottom"),...e===u.tiny&&{...m("Left"),...m("Right")},":hover":{bg:"grayShade3"}}),v=(e,t)=>t<=e?d.left:d.right,b=({mode:e=u.full,components:t,componentsProps:a,middleColumn:o,onRowClick:i,index:p,...c})=>{const f=y.useMemo(()=>Object.keys(Array.from({length:t.length})),[t]);return r.jsx(s,{onClick:l=>i&&i(l,p),as:"tr",...c,sx:_({mode:e}),width:"100%",children:t.map((l,n)=>r.jsx(h,{mode:e,component:l,componentProps:a[n]||{},position:v(o,n),fillSpace:o===n},f[n]))})};try{group.displayName="group",group.__docgenInfo={description:"",displayName:"group",props:{mode:{defaultValue:{value:"Mode.full"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"tiny"'}]}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ComponentType<any>[]"}},componentsProps:{defaultValue:null,description:"",name:"componentsProps",required:!0,type:{name:"any[]"}},middleColumn:{defaultValue:null,description:"",name:"middleColumn",required:!0,type:{name:"number"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((event: any, index: number) => void)"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}}}catch{}const q={tableLayout:"auto",borderCollapse:"collapse",width:"100%"},w=({mode:e=u.full,groupComponents:t,groupProps:a,legend:o,middleColumn:i,onRowClick:p,...c})=>{const f=y.useMemo(()=>Object.keys(Array.from({length:t.length})),[t]);return r.jsx(s,{as:"table",sx:q,...c,children:r.jsxs(s,{as:"tbody",children:[!!o&&r.jsx(s,{as:"tr",width:"100%",children:o.map((l,n)=>r.jsx(x,{sx:g({position:d.left,mode:e,fillSpace:!1}),gray:!0,pb:"4px",as:"td",children:l},`${l}${n}`))}),t.map((l,n)=>r.jsx(b,{index:n,onRowClick:p,mode:e,components:l,componentsProps:a[n],middleColumn:i},f[n]))]})})};try{container.displayName="container",container.__docgenInfo={description:"",displayName:"container",props:{mode:{defaultValue:{value:"Mode.full"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"tiny"'}]}},groupComponents:{defaultValue:null,description:"",name:"groupComponents",required:!0,type:{name:"ComponentType<any>[][]"}},groupProps:{defaultValue:null,description:"",name:"groupProps",required:!0,type:{name:"Record<string, any>[][]"}},middleColumn:{defaultValue:null,description:"",name:"middleColumn",required:!0,type:{name:"number"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"String[]"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"((event: any, index: number) => void)"}}}}}catch{}export{u as M,w as R,d as T,b as a,h as b};
//# sourceMappingURL=index-95e52f57.js.map