import{j as t,B as s}from"./index.esm-c9573e99.js";import{a as n}from"./chunk-WFFRPTHA-dbb6442d.js";import{N as l,a as e}from"./index-e8c81d75.js";import{r as m}from"./index-8ee6c85d.js";import"./index-ade1289a.js";import{G as i}from"./GetIcon-e1927133.js";import{I as o}from"./list-9e0a7656.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-a907aeee.js";import"./index-356e4a49.js";import"./index-093317e9.js";import"./index-8bf7f4ad.js";import"./theme-ebca2ce4.js";import"./index-a32e2460.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./index-0bcfbc70.js";import"./index-e67c4366.js";import"./chunk-ZJJGQIVY-585e530f.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-96d89555.js";import"./positions-4b0ff717.js";import"./mergeDeepRight-032f9ec4.js";import"./_curry2-9db85ff5.js";import"./mergeDeepWithKey-ac52baf9.js";import"./_curry3-2506b18d.js";import"./_isObject-11124c2f.js";import"./labeling-e871794f.js";import"./nth-b0f2fe30.js";import"./_isString-966efe80.js";import"./type-af5339dc.js";const p=()=>{const{activePath:r,activeNode:c,...d}=m.useContext(l);return{isOpen:r.length>1,activeNode:c,activePath:r,...d}},q={title:"Navigation",component:e,argTypes:{children:{description:"Navigation Components (Item, Category)"},tree:{description:"Navigation object representation"},trackBy:{description:"Key from object tree",defaultValue:{description:"title"}},footer:{description:"Render props. Renders component in the bottom of the navigation "},onNavigate:{description:"Callback function which fires when user clicks a link (returns link object)"}}},a=()=>{const{isOpen:r}=p();return r?t.jsxs(s,{sx:{display:"flex",flexDirection:"column",alignItems:"center",width:"50px"},children:[t.jsx(i,{icon:o.hopworks}),t.jsx("span",{children:"HFS"}),t.jsx("span",{children:"V 2.0"})]}):t.jsxs(s,{sx:{display:"flex",flexDirection:"column",alignItems:"center",mx:"40px"},children:[t.jsx(i,{icon:o.hopworks}),t.jsx("span",{children:"Hopsworks Feature Store version 2.0"})]})},z=()=>t.jsx(s,{height:"100vh",children:t.jsxs(e,{onNavigate:n("On Navigate"),footer:t.jsx(a,{}),children:[t.jsx(e.Category,{id:"1",title:"Home",children:t.jsx(e.Item,{id:"2",title:"Overview1"})}),t.jsxs(e.Category,{id:"3",title:"Feature Groups",children:[t.jsxs(e.Item,{id:"4",title:"Overview",children:[t.jsx(e.Item,{id:"5",title:"Feature List"}),t.jsx(e.Item,{id:"6",title:"Schematised Tags",isActive:!0,onClick:n("Navigate to")}),t.jsx(e.Item,{id:"7",title:"Running Code"}),t.jsx(e.Item,{id:"8",title:"API"})]}),t.jsx(e.Item,{id:"9",title:"Data"}),t.jsx(e.Item,{id:"10",title:"Activity"})]}),t.jsx(e.Item,{id:"11",title:"Training Datasets",hasDivider:!0}),t.jsx(e.Item,{id:"12",title:"Sources"}),t.jsx(e.Item,{id:"13",title:"Jobs"})]})}),M={render:()=>{const r=[{title:"Home",icon:t.jsx(i,{icon:o.folder}),id:"1",children:[{id:"32",title:"Owerview 2"}],secondaryTooltipText:"Home"},{title:"Feature Groups",icon:t.jsx(i,{icon:o.folder}),id:"2",disabled:!0,secondaryTooltipText:"Feature Groups",hideBack:!0,children:[{title:"Overview",id:"3",children:[{title:"Feature List",id:"4",icon:t.jsx(i,{icon:o.folder})},{title:"Schematised Tags",id:"5",icon:t.jsx(i,{icon:o.folder}),onClick:n("Tags Click"),isActive:!0},{title:"Running Code",id:"6"},{title:"API",id:"7",disabled:!0}]},{title:"Data",icon:t.jsx(i,{icon:o.folder}),id:"8",sx:{color:"red",backgroundColor:"blueShade1"}},{title:"Activity",icon:t.jsx(i,{icon:o.folder}),id:"9"}]},{title:"Training Datasets",id:"10",hasDivider:!0},{title:"Source",id:"11"},{title:"Jobs",id:"12"}];return t.jsx(s,{height:"100vh",children:t.jsx(e,{onNavigate:n("On Navigate"),tree:r,header:"Header",footer:t.jsx(a,{})})})}};export{z as Default,a as Footer,M as TreeObject,q as default};
