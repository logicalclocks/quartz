import{j as e,F as g,B as d}from"./index.esm-95acea13.js";import{r as b}from"./index-8ee6c85d.js";import{R as q,l as V,a as j,d as C}from"./index-3d8762b2.js";import"./index-de5904e7.js";import{I as w}from"./index-8e4f4f79.js";import{L as S}from"./index-2a26cb72.js";import{T as _}from"./index-c5a183b8.js";import{L as I}from"./labeling-36656030.js";import{G as N}from"./GetIcon-94281711.js";import{I as L}from"./list-9cfea01e.js";const P=r=>a=>{const t=a.matchBefore(/\w+/);return!a.explicit&&!t?null:{from:t?t.from:a.pos,options:r,validFor:/^\w*$/}},k=b.forwardRef(({label:r="",value:a,mode:t,width:o="100%",height:p="100%",labelAction:l,optional:i,tooltipInfo:n,labelProps:m,onChange:c,readOnly:f=!1,info:s,intent:h="default",codeMirrorProps:v,completions:u,...y})=>{const x=(l||n||i)&&e.jsxs(g,{children:[l,i&&e.jsx(I,{ml:"8px",bold:!0,gray:!0,children:"optional"}),n&&e.jsx(_,{mainText:n,children:e.jsx(N,{mt:"3px",ml:"3px",size:"xs",icon:L.info_block})})]});return e.jsxs(d,{width:o,tx:"inputs",...y,children:[e.jsx(S,{action:x,text:r,width:o,...m,mb:"8px",children:e.jsx(d,{sx:{"*":{fontFamily:"inherit"}},children:e.jsx(q,{value:a,basicSetup:{autocompletion:!1,lineNumbers:!0,foldGutter:!1},extensions:[V(t),u?j({override:[P(u)]}):!1].filter(Boolean),theme:C,onChange:c,readOnly:f,height:p,...v})})}),s&&e.jsx(w,{intent:h,children:s})]})});try{codeinput.displayName="codeinput",codeinput.__docgenInfo={description:"",displayName:"codeinput",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},labelAction:{defaultValue:null,description:"",name:"labelAction",required:!1,type:{name:"ReactNode"}},width:{defaultValue:{value:"100%"},description:`The width utility parses a component's \`width\` prop and converts it into a CSS width declaration.

- Numbers from 0-1 are converted to percentage widths.
- Numbers greater than 1 are converted to pixel values.
- String values are passed as raw CSS values.
- And arrays are converted to responsive width styles.`,name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"100%"},description:`The height CSS property specifies the height of an element. By default, the property defines the height of the
content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)`,name:"height",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"javascript"'},{value:'"json"'},{value:'"python"'},{value:'"sql"'},{value:'"yaml"'}]}},intent:{defaultValue:{value:"default"},description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'}]}},optional:{defaultValue:null,description:"",name:"optional",required:!1,type:{name:"boolean"}},tooltipInfo:{defaultValue:null,description:"",name:"tooltipInfo",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'Omit<LabelProps, "action" | "children" | "text">'}},info:{defaultValue:null,description:"",name:"info",required:!1,type:{name:"string"}},codeMirrorProps:{defaultValue:null,description:"",name:"codeMirrorProps",required:!1,type:{name:"ReactCodeMirrorProps"}},completions:{defaultValue:null,description:"",name:"completions",required:!1,type:{name:"Completion[]"}}}}}catch{}export{k as C};
