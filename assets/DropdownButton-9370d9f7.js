import{j as s,F as y}from"./index.esm-01e799b2.js";import{r as p}from"./index-570b25c1.js";import{u as D}from"./useDropdown-e7a7c085.js";import{D as k}from"./index-b37b1c3e.js";import{e as S}from"./GetIcon-57c1f618.js";import{t as C}from"./type-a10ea15b.js";import{m as l}from"./mergeDeepRight-fe0d0885.js";const c={container:{position:"relative",cursor:"pointer",marginTop:"-2px",width:"fit-content",height:"fit-content",background:"white"},dropdown:(e,r)=>({position:"absolute",top:`${e}px`,zIndex:5,...r?{right:"0px"}:{left:"0px"}})},u=({alignLeft:e=!1,containerOpenSx:r={},dropdownSx:m={},items:o,renderButton:f,sx:w={},...h})=>{var d;const[i,n,g]=D(),t=p.useRef(),x=p.useMemo(()=>S(C(o),"Array")?o.map(a=>({...a,onClick:()=>{a.onClick(a),n()}})):o({onClose:n}),[o,n]);return s.jsxs(y,{ref:t,sx:l(c.container,{...w,...i?r:{}}),...h,children:[f({isOpen:i,onClick:n}),s.jsx(k,{isOpen:i,onClickOutside:g,sx:l(c.dropdown((d=t==null?void 0:t.current)==null?void 0:d.offsetHeight,e),{...m}),items:x})]})};try{u.displayName="DropdownButton",u.__docgenInfo={description:"",displayName:"DropdownButton",props:{alignLeft:{defaultValue:{value:"false"},description:`To align dropdown on the left or right, the default is right alignment
TODO: in the future we might need excact place of opening dropdown similar to tooltip`,name:"alignLeft",required:!1,type:{name:"boolean"}},containerOpenSx:{defaultValue:{value:"{}"},description:"Setting custom style for container when dropdown is open'",name:"containerOpenSx",required:!1,type:{name:"SxStyleProp"}},dropdownSx:{defaultValue:{value:"{}"},description:"Setting custom style for dropdown",name:"dropdownSx",required:!1,type:{name:"SxStyleProp"}},items:{defaultValue:null,description:"Dropwdown items either could be an Array, in this case dropdown will be closed after any item clicked\nin order to handle closing of dropdown manually you have to pass a callback function which accepts the `onClose` handler function",name:"items",required:!0,type:{name:"DropdownItem<{}>[] | RenderDropdownItems"}},renderButton:{defaultValue:null,description:"To Render custom component as dropdown's button",name:"renderButton",required:!0,type:{name:"({ onClick, isOpen, }: { onClick: () => void; isOpen: boolean; }) => ReactNode"}}}}}catch{}export{u as D};
//# sourceMappingURL=DropdownButton-9370d9f7.js.map