import{j as t,F as u,B as l}from"./index.esm-35888c3f.js";import{r as o}from"./index-8db94870.js";import{G as i}from"./GetIcon-021c2675.js";import{I as a}from"./list-0f204cb4.js";import{T as b}from"./index-ff2b798c.js";import{a as f}from"./theme-c699ef82.js";import{L as y}from"./labeling-01aa14c4.js";import{I as x}from"./index-d67bf140.js";import"./_commonjsHelpers-042e6b4d.js";import"./_curry2-8f4fb22d.js";import"./nth-9d8032fc.js";import"./_isString-966efe80.js";import"./type-0614252a.js";import"./_has-a7b62b2c.js";import"./_isObject-00cd8d55.js";import"./chunk-3XANSPY5-70d7cc3d.js";import"./index-a1857986.js";import"./popper-f3391c26.js";import"./index-d68b7e21.js";import"./chunk-QEVFQ4EU-ec302c0d.js";import"./index-dfb7fa5a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aeb30429.js";import"./index-871df828.js";import"./index-8ce4a492.js";import"./index-1c5c54a4.js";import"./index-c358a4ad.js";import"./index-07c5410e.js";const P={title:"GetIcon",component:i,argTypes:{icon:{description:"Icon name - Hover over above icons to see the name"},size:{type:{name:"string",required:!1},defaultValue:"lg",description:"String indicating the width of the svg icon, height will scale accordingly.",options:Object.keys(f.iconSizes),control:{type:"select"},table:{defaultValue:{summary:"lg"}}},color:{type:{name:"string",required:!1},defaultValue:"black",description:"color of progressing bar",options:["primary","primaryShade1","primaryShade2","gray","grayShade1","grayShade2","grayShade3","black","white","labels.red","labels.orange","labels.purple","labels.yellow","labels.yellowShade2","labels.green","labels.blueShade1","labels.blueShade2","labels.blue","labels.redShade2","labels.orangeShade2"],control:{type:"select"},table:{defaultValue:{summary:"black"}}}}},s=Object.values(a),Q={args:{color:"black",size:"lg"},render:n=>{const[c,p]=o.useState(""),[r,m]=o.useState(""),d=e=>{m(e.target.value)},h=o.useMemo(()=>s.slice(0,s.length/2).filter(g=>g.includes(r)),[r]);return t.jsxs(u,{flexWrap:"wrap",width:"700px",sx:{gap:"10px"},children:[t.jsx(x,{placeholder:"anything specific? e.g. 'glass'",width:"100%",mb:2,value:r,onChange:d,icon:a.glass}),h.map(e=>t.jsx(b,{delayed:!1,mainText:e,secondaryText:c===e?"copied":"copy",children:t.jsx(l,{onClick:()=>{navigator.clipboard.writeText(e),p(e)},children:t.jsx(i,{...n,icon:a[e]})})})),t.jsx(l,{mt:1,width:"100%",children:t.jsx(y,{gray:!0,children:"^ just click to copy."})})]})}};export{Q as Default,P as default};
//# sourceMappingURL=stories-d5fbe5d4.js.map
