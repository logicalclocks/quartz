import{j as e,B as s,F as f,C as $}from"./index.esm-c9573e99.js";import{r as n}from"./index-8ee6c85d.js";import{F as H,a as P}from"./index-024cd3a6.js";import{F as T}from"./index-3598aff3.js";import{F as G}from"./FileItemExplorer-2cd8977d.js";import{V as L}from"./value-9c58e214.js";import{L as a}from"./labeling-e871794f.js";import"./index-954f7a95.js";import"./index-ade1289a.js";import{B as O}from"./Button-c9ca6f52.js";import{G as X}from"./GetIcon-e1927133.js";import{I as U}from"./list-9e0a7656.js";import{f as Y}from"./format-d69e34bd.js";const J={display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center",minHeight:"62px",width:"100%",px:"20px",pt:"20px",boxSizing:"border-box","> h4":{fontFamily:"subtitle",fontWeight:"subtitle",fontSize:"subtitle"},"> div":{marginLeft:0}},K=({title:t,shortcutActions:l})=>e.jsxs(s,{sx:{...J},children:[t&&e.jsx(f,{as:"h4",children:t}),l&&e.jsx("div",{style:{paddingTop:20},children:l})]});try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{shortcutActions:{defaultValue:null,description:"",name:"shortcutActions",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const Q=({items:t,mode:l,index:u,setColumns:c,setActiveFile:x,isFileSelected:b,handleLoadMore:j,selectPathListValue:F,fileListValue:p,validExtensions:d,setIsEmptyFolder:V})=>{const[i,y]=n.useState(0);return e.jsx(s,{sx:{width:"225px",minWidth:"225px",borderRightColor:"grayShade1",borderRightWidth:"3px",borderRightStyle:"solid",backgroundColor:"grayShade3",overflowY:"auto",overflowX:"hidden"},children:t.map(r=>{const g=()=>{if(!d||(d==null?void 0:d.length)===0)return!0;const m=r.attributes.name.split("."),S=m[m.length-1];return d.includes(`.${S}`)};return r?r.attributes.dir?e.jsx(T,{index:u,id:r.attributes.id,handleLoadMore:j,mode:l,name:r.attributes.name,itemInfo:r,selectPathListValue:F,setColumns:c,setActiveFile:x,activeFolder:i,setActiveFolder:y,isActive:!1,selected:!1},r.attributes.id):e.jsx(G,{index:u,mode:l,setColumns:c,isFileSelected:b,setActiveFile:x,setActiveFolder:y,itemInfo:r,isActive:p?p.includes(r.attributes.name):!1,selected:p?p.includes(r.attributes.name):!1,isValidExtension:g(),setIsEmptyFolder:V},r.attributes.id):null})})};try{fileexplorercolumn.displayName="fileexplorercolumn",fileexplorercolumn.__docgenInfo={description:"",displayName:"fileexplorercolumn",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"FileExplorData[]"}},setColumns:{defaultValue:null,description:"",name:"setColumns",required:!1,type:{name:"any"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"oneFile"'},{value:'"nFiles"'},{value:'"oneFolder"'}]}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},setActiveFile:{defaultValue:null,description:"",name:"setActiveFile",required:!1,type:{name:"object"}},handleLoadMore:{defaultValue:null,description:"",name:"handleLoadMore",required:!0,type:{name:"(path: string, columnIndex: number) => void"}},isFileSelected:{defaultValue:null,description:"",name:"isFileSelected",required:!1,type:{name:"any"}},selectPathListValue:{defaultValue:null,description:"",name:"selectPathListValue",required:!1,type:{name:"any"}},fileListValue:{defaultValue:null,description:"",name:"fileListValue",required:!1,type:{name:"any[]"}},validExtensions:{defaultValue:null,description:"",name:"validExtensions",required:!1,type:{name:"string[]"}},setIsEmptyFolder:{defaultValue:null,description:"",name:"setIsEmptyFolder",required:!0,type:{name:"(value: boolean) => void"}}}}}catch{}const Z={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",backgroundColor:"white",minHeight:"62px",width:"100%",minWidth:"230px",p:"20px",boxSizing:"border-box"},ee={display:"flex",flexDirection:"column","div:first-of-type":{justifyContent:"center"}," > div > span":{color:"black",marginLeft:0},">h2":{fontFamily:"subtitle",fontWeight:"subtitle",fontSize:"subtitle"}},z=t=>({display:"flex",flexDirection:"column",maxWidth:t?"80px":"180px",textAlign:t?"right":"left",marginRight:"4px",div:{display:"flex",flexDirection:"column",justifyContent:"flex-end",marginBottom:"8px",fontFamily:t?"microlabel":"value",fontWeight:t?"microlabel":"value",fontSize:t?"microlabel":"value"},"div:nth-last-of-type(3)":{paddingBottom:"7px"},"div:nth-last-of-type(2)":{paddingBottom:"5px"},"div:last-child":{height:"16px",paddingBottom:"2px"},"div:first-of-typed":{height:"auto"}}),te=t=>t>=1073741824?`${(t/1073741824).toFixed(2)} Gb`:t>=1048576?`${(t/1048576).toFixed(2)} mb`:t>=1024?`${(t/1024).toFixed(2)} kb`:t>1?`${t} bytes`:t===1?`${t} byte`:"0 byte",A=t=>Y(new Date(t),"yyyy-MM-dd - HH:mm:ss"),le=({children:t,activeFile:l,disableDownload:u,handleDownloadFile:c})=>e.jsxs(s,{sx:{...Z},children:[e.jsxs(s,{sx:{...ee},children:[e.jsx(L,{as:"h2",marginBottom:"32px",textAlign:"center",children:l==null?void 0:l.attributes.name}),e.jsxs(f,{sx:{"> div > div":{height:"30px"}},children:[e.jsxs(s,{sx:{...z(!0)},children:[e.jsx(a,{gray:!0,children:"size"}),e.jsx(a,{gray:!0,children:"creation"}),e.jsx(a,{gray:!0,children:"last update"}),e.jsx(a,{gray:!0,children:"author"})]}),l&&e.jsxs(s,{sx:{...z(!1)},children:[e.jsx(a,{children:te(l==null?void 0:l.attributes.size)}),e.jsx(a,{children:A(l==null?void 0:l.attributes.accessTime)}),e.jsx(a,{children:A(l==null?void 0:l.attributes.modificationTime)}),e.jsx(a,{children:l==null?void 0:l.attributes.owner})]})]})]}),!u&&e.jsx(O,{intent:"secondary",onClick:()=>{c(l)},children:e.jsxs(f,{alignItems:"center",justifyContent:"center",children:[e.jsx(f,{sx:{mr:"11px",height:"15px",alignItems:"center"},children:e.jsx(X,{size:"sm",icon:U.folder})}),e.jsx(f,{alignItems:"center",children:"Download File"})]})}),t]});try{info.displayName="info",info.__docgenInfo={description:"",displayName:"info",props:{activeFile:{defaultValue:null,description:"",name:"activeFile",required:!1,type:{name:"ActiveFile | null"}},disableDownload:{defaultValue:null,description:"",name:"disableDownload",required:!0,type:{name:"boolean"}},handleDownloadFile:{defaultValue:null,description:"",name:"handleDownloadFile",required:!0,type:{name:"(file: any) => void"}}}}}catch{}const re={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"white",minHeight:"62px",width:"100%",minWidth:"230px",p:"20px",boxSizing:"border-box",">h2":{fontFamily:"subtitle",fontWeight:"subtitle",fontSize:"subtitle",color:"gray"}},ne=()=>e.jsx(s,{sx:re,children:e.jsx(L,{as:"h2",textAlign:"center",children:"Empty folder"})}),oe={display:"flex",flexDirection:"column",height:"100%",maxHeight:"calc(100vh - 110px)",borderWidth:"1px",borderBottomWidth:"0px",borderStyle:"solid",boxSizing:"border-box"},v=({title:t="Select a file",onClose:l=()=>console.log("Close"),shortcutActions:u,handleDownloadFile:c,mode:x=P.oneFile,rootDir:b="/",contentProps:j,handleLoadMore:F=()=>console.log("load more in quartz"),handleSelectFile:p=()=>console.log("handleSelectFile in quartz"),disableDownload:d=!1,validExtensions:V,data:i,...y})=>{const r=n.useRef(),[g,m]=n.useState(i),[S,_]=n.useState(!1);n.useEffect(()=>{if(Array.isArray(i)){const o=i[i.length-1];Array.isArray(o)&&o.length===0?(_(!0),m(i.slice(0,-1))):(_(!1),m(i))}},[i]);const[q,W]=n.useState(),[C,w]=n.useState([]),[N,D]=n.useState(""),I=n.useRef(),R=()=>{I&&I.current.scrollIntoView()},B=(o,h)=>{w(h?E=>[...E,o]:E=>[...E.filter(M=>M!==o.attributes.name)])},k=(o,h)=>{h||D(o),D(o)};return n.useEffect(()=>{R()},[g]),e.jsxs($,{...y,sx:oe,children:[e.jsx(K,{shortcutActions:u,title:t}),e.jsxs(f,{sx:{flex:1,borderStyle:"solid",borderColor:"grayShade3",borderWidth:"1px",overflowX:"auto",backgroundColor:"grayShade3"},ref:r,height:"100%",minWidth:"965px",m:"20px",...j,children:[g.map((o,h)=>e.jsx(Q,{items:o,validExtensions:V,handleLoadMore:F,setActiveFile:W,mode:x,setColumns:m,index:h,isFileSelected:B,selectPathListValue:k,fileListValue:C,setIsEmptyFolder:_})),S&&e.jsx(ne,{}),q&&e.jsx(le,{activeFile:q,disableDownload:d,handleDownloadFile:c}),e.jsx(s,{ref:I})]}),e.jsx(H,{onClose:l,fileListValue:C,value:N,activeFile:q,mode:x,handleSelectFile:p,rootDir:b})]})},be=n.memo(v);try{v.displayName="FileSystemExplorer",v.__docgenInfo={description:"",displayName:"FileSystemExplorer",props:{title:{defaultValue:{value:"Select a file"},description:"",name:"title",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"FileExplorerMode.oneFile"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"oneFile"'},{value:'"nFiles"'},{value:'"oneFolder"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"FileExplorData[][]"}},disableDownload:{defaultValue:{value:"false"},description:"",name:"disableDownload",required:!1,type:{name:"boolean"}},validExtensions:{defaultValue:null,description:"",name:"validExtensions",required:!1,type:{name:"string[]"}},rootDir:{defaultValue:{value:"/"},description:"",name:"rootDir",required:!1,type:{name:"string"}},handleLoadMore:{defaultValue:{value:"() => console.log('load more in quartz')"},description:"",name:"handleLoadMore",required:!1,type:{name:"(path: string, columnIndex: number) => void"}},shortcutActions:{defaultValue:null,description:"",name:"shortcutActions",required:!1,type:{name:"ReactNode"}},contentProps:{defaultValue:null,description:"",name:"contentProps",required:!1,type:{name:'Omit<CardProps, "css" | "children">'}},onClose:{defaultValue:{value:"() => console.log('Close')"},description:"",name:"onClose",required:!1,type:{name:"(key: any) => void"}},handleSelectFile:{defaultValue:{value:"() => console.log('handleSelectFile in quartz')"},description:"",name:"handleSelectFile",required:!1,type:{name:"((activeFile: any, isDownload: boolean) => void)"}},handleDownloadFile:{defaultValue:null,description:"",name:"handleDownloadFile",required:!0,type:{name:"(file: any) => void"}}}}}catch{}export{be as F};
