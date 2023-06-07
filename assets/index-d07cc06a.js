import{a as n,B as a,j as r}from"./index.esm-d48b4efe.js";import{k as i}from"./core.browser.esm-d02c0f74.js";const s=i`from {
    transform: rotate(50deg)
  }
  to {
    transform: rotate(410deg)
  }`,p=(e,o)=>({display:"inline-block",position:"relative",width:`${e}px`,height:`${e}px`,"> div":{boxSizing:"border-box",display:"block",position:"absolute",width:`${e}px`,height:`${e}px`,borderStyle:"solid",borderWidth:"3px",borderRadius:"50%",animation:`${s} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,borderLeftColor:o,borderRightColor:"transparent",borderTopColor:"transparent",borderBottomColor:"transparent",":nth-of-type(1)":{animationDelay:"-0.45s"},":nth-of-type(2)":{animationDelay:"-0.3s"},":nth-of-type(3)":{animationDelay:"-0.15s"}}}),d=({size:e=20,color:o="primary",...t})=>n(a,{sx:{...p(e,o)},...t,children:[r("div",{}),r("div",{}),r("div",{}),r("div",{})]}),m=d;try{spinner.displayName="spinner",spinner.__docgenInfo={description:"",displayName:"spinner",props:{size:{defaultValue:{value:"20"},description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:{value:"primary"},description:`The color utility parses a component's \`color\` and \`bg\` props and converts them into CSS declarations.
By default the raw value of the prop is returned.

Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
Array values are converted into responsive values.

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)`,name:"color",required:!1,type:{name:"string"}}}}}catch{}export{m as S};
//# sourceMappingURL=index-d07cc06a.js.map
