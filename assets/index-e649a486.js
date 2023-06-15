import{j as n,B as g}from"./index.esm-35888c3f.js";import{r as o,R as y}from"./index-8db94870.js";import{L as F}from"./index-37e625e9.js";import{u as H}from"./theme-c699ef82.js";import{T as M}from"./index-ff2b798c.js";import{T as L}from"./positions-4b0ff717.js";import{m as G}from"./mergeDeepRight-755f816c.js";import{L as K}from"./labeling-01aa14c4.js";const A=o.createContext({trackBy:"id",activePath:[],tree:[],activeNode:null,onActivate:()=>{},onBack:()=>{}}),$={display:"flex",alignItems:"center",width:"100%",height:"50px",boxSizing:"border-box",fontFamily:"label",fontWeight:"label",fontSize:"label",lineHeight:"15px",transition:"all 0.25s ease","&.oldui":{background:"grayShade3",borderTop:"1px solid",borderBottom:"1px solid",borderTopColor:"grayShade2",borderBottomColor:"grayShade2"},"> div":{display:"flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px",path:{transition:"all 0.25s ease"},"~ span":{pl:0}},"> span":{pl:"20px"},"~ div":{borderTopWidth:"1px",borderTopStyle:"solid",position:"relative",bottom:"1px"}},X=(e=!1,a=!1)=>e?"disabled":a?"active":"default",S=e=>{const{activePath:a,onActivate:l,trackBy:u}=o.useContext(A),i=H(),{[u]:t,icon:r,title:p,isActive:d,isSubItem:f,children:c,hasDivider:h,onClick:C=()=>{},disabled:v,mainTooltipText:s="",secondaryTooltipText:m="",href:I,sx:B,...W}=e,R=a.length>1&&!!a.slice(a.indexOf(t)).length,E=a.includes(t),z=`navigation.${f?"subItem":"item"}`,O=c&&E&&R?"block":"none",w=!s&&!m,V=o.useMemo(()=>y.Children.map(c,b=>y.cloneElement(b,{isSubItem:!0})),[c]),U=o.useCallback(()=>{C(),l(t)},[t,l,C]);o.useEffect(()=>{d&&l(t)},[d]);const q=n.jsxs(g,{tx:z,variant:X(v,E),sx:G($,B??{}),onClick:v?void 0:U,className:t==="oldui"?"oldui":"",...W,children:[r&&n.jsx("div",{children:n.jsx(M,{disabled:w,position:L.right,mainText:s,secondaryText:m,children:r})}),n.jsx("span",{children:n.jsx(M,{disabled:(r||w)&&!v,position:L.right,mainText:s,secondaryText:m,children:n.jsx("span",{style:v?{color:i.colors.gray}:{},children:p})})})]});return n.jsxs(g,{as:"li",tabIndex:v?void 0:-1,sx:{listStyleType:"none",outline:"none"},children:[I?n.jsx(F,{style:{textDecoration:"none"},onClick:b=>b.stopPropagation(),to:I,children:q}):q,h&&n.jsx("div",{}),V&&n.jsx(g,{paddingLeft:"33px",as:"ul","aria-label":"submenu",display:O,children:V})]})},x=y.memo(S);try{S.displayName="NavigationItem",S.__docgenInfo={description:"",displayName:"NavigationItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isSubItem:{defaultValue:null,description:"",name:"isSubItem",required:!1,type:{name:"boolean"}},hasDivider:{defaultValue:null,description:"",name:"hasDivider",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},mainTooltipText:{defaultValue:null,description:"",name:"mainTooltipText",required:!1,type:{name:"string"}},secondaryTooltipText:{defaultValue:null,description:"",name:"secondaryTooltipText",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}const T=(e,a,l)=>{if(Array.isArray(e))return e.reduce((i,t)=>i||T(t,a,l),null);const{children:u}=e;if(Array.isArray(u)){const i=T(u,a,l);if(i)return i}return e[a]===l?e:null},P=(e,a,l="title")=>{if(Array.isArray(e))return e.reduce((t,r)=>t.length?t:P(r,a,l),[]);const{children:u,[l]:i}=e;if(Array.isArray(u)){const t=P(u,a,l);if(t.length)return[i,...t]}return a(e)?[i]:[]},Y=({tree:e,trackBy:a="title",children:l,onNavigate:u,onBackCLick:i,takeActivePath:t})=>{const[r,p]=o.useState([]),[d,f]=o.useState(null),c=o.useCallback(v=>{const s=P(e,m=>m[a]===v,a);p(s),t(s)},[t,a,e]),h=o.useCallback(v=>{p(s=>s.slice(s.indexOf(v)-1,s.length-1)),i&&i()},[i]),C=o.useMemo(()=>({trackBy:a,tree:e,activeNode:d,activePath:r,onActivate:c,onBack:h}),[a,e,d,r,c,h]);return o.useEffect(()=>{const v=T(e,a,r[r.length-1]);u&&u(v),f(v)},[r,u,f]),n.jsx(A.Provider,{value:C,children:l})};try{navigationprovider.displayName="navigationprovider",navigationprovider.__docgenInfo={description:"",displayName:"navigationprovider",props:{tree:{defaultValue:null,description:"",name:"tree",required:!0,type:{name:"RecursiveNode[]"}},trackBy:{defaultValue:{value:"title"},description:"",name:"trackBy",required:!1,type:{name:"enum",value:[{value:'"title"'},{value:'"sizes"'},{value:'"content"'},{value:'"variant"'},{value:'"tx"'},{value:'"as"'},{value:'"ref"'},{value:'"key"'},{value:'"m"'},{value:'"margin"'},{value:'"mt"'},{value:'"marginTop"'},{value:'"mr"'},{value:'"marginRight"'},{value:'"mb"'},{value:'"marginBottom"'},{value:'"ml"'},{value:'"marginLeft"'},{value:'"mx"'},{value:'"marginX"'},{value:'"my"'},{value:'"marginY"'},{value:'"p"'},{value:'"padding"'},{value:'"pt"'},{value:'"paddingTop"'},{value:'"pr"'},{value:'"paddingRight"'},{value:'"pb"'},{value:'"paddingBottom"'},{value:'"pl"'},{value:'"paddingLeft"'},{value:'"px"'},{value:'"paddingX"'},{value:'"py"'},{value:'"paddingY"'},{value:'"width"'},{value:'"height"'},{value:'"minWidth"'},{value:'"minHeight"'},{value:'"maxWidth"'},{value:'"maxHeight"'},{value:'"display"'},{value:'"verticalAlign"'},{value:'"size"'},{value:'"overflow"'},{value:'"overflowX"'},{value:'"overflowY"'},{value:'"fontFamily"'},{value:'"fontSize"'},{value:'"fontWeight"'},{value:'"lineHeight"'},{value:'"letterSpacing"'},{value:'"fontStyle"'},{value:'"textAlign"'},{value:'"color"'},{value:'"bg"'},{value:'"backgroundColor"'},{value:'"opacity"'},{value:'"alignItems"'},{value:'"alignContent"'},{value:'"justifyItems"'},{value:'"justifyContent"'},{value:'"flexWrap"'},{value:'"flexDirection"'},{value:'"flex"'},{value:'"flexGrow"'},{value:'"flexShrink"'},{value:'"flexBasis"'},{value:'"justifySelf"'},{value:'"alignSelf"'},{value:'"order"'},{value:'"sx"'},{value:'"accept"'},{value:'"acceptCharset"'},{value:'"action"'},{value:'"allowFullScreen"'},{value:'"allowTransparency"'},{value:'"alt"'},{value:'"async"'},{value:'"autoComplete"'},{value:'"autoPlay"'},{value:'"capture"'},{value:'"cellPadding"'},{value:'"cellSpacing"'},{value:'"charSet"'},{value:'"challenge"'},{value:'"checked"'},{value:'"cite"'},{value:'"classID"'},{value:'"cols"'},{value:'"colSpan"'},{value:'"controls"'},{value:'"coords"'},{value:'"crossOrigin"'},{value:'"data"'},{value:'"dateTime"'},{value:'"default"'},{value:'"defer"'},{value:'"disabled"'},{value:'"download"'},{value:'"encType"'},{value:'"form"'},{value:'"formAction"'},{value:'"formEncType"'},{value:'"formMethod"'},{value:'"formNoValidate"'},{value:'"formTarget"'},{value:'"frameBorder"'},{value:'"headers"'},{value:'"high"'},{value:'"href"'},{value:'"hrefLang"'},{value:'"htmlFor"'},{value:'"httpEquiv"'},{value:'"integrity"'},{value:'"keyParams"'},{value:'"keyType"'},{value:'"kind"'},{value:'"label"'},{value:'"list"'},{value:'"loop"'},{value:'"low"'},{value:'"manifest"'},{value:'"marginHeight"'},{value:'"marginWidth"'},{value:'"max"'},{value:'"maxLength"'},{value:'"media"'},{value:'"mediaGroup"'},{value:'"method"'},{value:'"min"'},{value:'"minLength"'},{value:'"multiple"'},{value:'"muted"'},{value:'"name"'},{value:'"noValidate"'},{value:'"open"'},{value:'"optimum"'},{value:'"pattern"'},{value:'"placeholder"'},{value:'"playsInline"'},{value:'"poster"'},{value:'"preload"'},{value:'"readOnly"'},{value:'"required"'},{value:'"reversed"'},{value:'"rows"'},{value:'"rowSpan"'},{value:'"sandbox"'},{value:'"scope"'},{value:'"scoped"'},{value:'"scrolling"'},{value:'"seamless"'},{value:'"selected"'},{value:'"shape"'},{value:'"span"'},{value:'"src"'},{value:'"srcDoc"'},{value:'"srcLang"'},{value:'"srcSet"'},{value:'"start"'},{value:'"step"'},{value:'"summary"'},{value:'"target"'},{value:'"type"'},{value:'"useMap"'},{value:'"value"'},{value:'"wmode"'},{value:'"wrap"'},{value:'"defaultChecked"'},{value:'"defaultValue"'},{value:'"suppressContentEditableWarning"'},{value:'"suppressHydrationWarning"'},{value:'"accessKey"'},{value:'"autoFocus"'},{value:'"className"'},{value:'"contentEditable"'},{value:'"contextMenu"'},{value:'"dir"'},{value:'"draggable"'},{value:'"hidden"'},{value:'"id"'},{value:'"lang"'},{value:'"nonce"'},{value:'"slot"'},{value:'"spellCheck"'},{value:'"style"'},{value:'"tabIndex"'},{value:'"translate"'},{value:'"radioGroup"'},{value:'"role"'},{value:'"about"'},{value:'"datatype"'},{value:'"inlist"'},{value:'"prefix"'},{value:'"property"'},{value:'"rel"'},{value:'"resource"'},{value:'"rev"'},{value:'"typeof"'},{value:'"vocab"'},{value:'"autoCapitalize"'},{value:'"autoCorrect"'},{value:'"autoSave"'},{value:'"itemProp"'},{value:'"itemScope"'},{value:'"itemType"'},{value:'"itemID"'},{value:'"itemRef"'},{value:'"results"'},{value:'"security"'},{value:'"unselectable"'},{value:'"inputMode"'},{value:'"is"'},{value:'"aria-activedescendant"'},{value:'"aria-atomic"'},{value:'"aria-autocomplete"'},{value:'"aria-busy"'},{value:'"aria-checked"'},{value:'"aria-colcount"'},{value:'"aria-colindex"'},{value:'"aria-colspan"'},{value:'"aria-controls"'},{value:'"aria-current"'},{value:'"aria-describedby"'},{value:'"aria-details"'},{value:'"aria-disabled"'},{value:'"aria-dropeffect"'},{value:'"aria-errormessage"'},{value:'"aria-expanded"'},{value:'"aria-flowto"'},{value:'"aria-grabbed"'},{value:'"aria-haspopup"'},{value:'"aria-hidden"'},{value:'"aria-invalid"'},{value:'"aria-keyshortcuts"'},{value:'"aria-label"'},{value:'"aria-labelledby"'},{value:'"aria-level"'},{value:'"aria-live"'},{value:'"aria-modal"'},{value:'"aria-multiline"'},{value:'"aria-multiselectable"'},{value:'"aria-orientation"'},{value:'"aria-owns"'},{value:'"aria-placeholder"'},{value:'"aria-posinset"'},{value:'"aria-pressed"'},{value:'"aria-readonly"'},{value:'"aria-relevant"'},{value:'"aria-required"'},{value:'"aria-roledescription"'},{value:'"aria-rowcount"'},{value:'"aria-rowindex"'},{value:'"aria-rowspan"'},{value:'"aria-selected"'},{value:'"aria-setsize"'},{value:'"aria-sort"'},{value:'"aria-valuemax"'},{value:'"aria-valuemin"'},{value:'"aria-valuenow"'},{value:'"aria-valuetext"'},{value:'"children"'},{value:'"dangerouslySetInnerHTML"'},{value:'"onCopy"'},{value:'"onCopyCapture"'},{value:'"onCut"'},{value:'"onCutCapture"'},{value:'"onPaste"'},{value:'"onPasteCapture"'},{value:'"onCompositionEnd"'},{value:'"onCompositionEndCapture"'},{value:'"onCompositionStart"'},{value:'"onCompositionStartCapture"'},{value:'"onCompositionUpdate"'},{value:'"onCompositionUpdateCapture"'},{value:'"onFocus"'},{value:'"onFocusCapture"'},{value:'"onBlur"'},{value:'"onBlurCapture"'},{value:'"onChange"'},{value:'"onChangeCapture"'},{value:'"onBeforeInput"'},{value:'"onBeforeInputCapture"'},{value:'"onInput"'},{value:'"onInputCapture"'},{value:'"onReset"'},{value:'"onResetCapture"'},{value:'"onSubmit"'},{value:'"onSubmitCapture"'},{value:'"onInvalid"'},{value:'"onInvalidCapture"'},{value:'"onLoad"'},{value:'"onLoadCapture"'},{value:'"onError"'},{value:'"onErrorCapture"'},{value:'"onKeyDown"'},{value:'"onKeyDownCapture"'},{value:'"onKeyPress"'},{value:'"onKeyPressCapture"'},{value:'"onKeyUp"'},{value:'"onKeyUpCapture"'},{value:'"onAbort"'},{value:'"onAbortCapture"'},{value:'"onCanPlay"'},{value:'"onCanPlayCapture"'},{value:'"onCanPlayThrough"'},{value:'"onCanPlayThroughCapture"'},{value:'"onDurationChange"'},{value:'"onDurationChangeCapture"'},{value:'"onEmptied"'},{value:'"onEmptiedCapture"'},{value:'"onEncrypted"'},{value:'"onEncryptedCapture"'},{value:'"onEnded"'},{value:'"onEndedCapture"'},{value:'"onLoadedData"'},{value:'"onLoadedDataCapture"'},{value:'"onLoadedMetadata"'},{value:'"onLoadedMetadataCapture"'},{value:'"onLoadStart"'},{value:'"onLoadStartCapture"'},{value:'"onPause"'},{value:'"onPauseCapture"'},{value:'"onPlay"'},{value:'"onPlayCapture"'},{value:'"onPlaying"'},{value:'"onPlayingCapture"'},{value:'"onProgress"'},{value:'"onProgressCapture"'},{value:'"onRateChange"'},{value:'"onRateChangeCapture"'},{value:'"onResize"'},{value:'"onResizeCapture"'},{value:'"onSeeked"'},{value:'"onSeekedCapture"'},{value:'"onSeeking"'},{value:'"onSeekingCapture"'},{value:'"onStalled"'},{value:'"onStalledCapture"'},{value:'"onSuspend"'},{value:'"onSuspendCapture"'},{value:'"onTimeUpdate"'},{value:'"onTimeUpdateCapture"'},{value:'"onVolumeChange"'},{value:'"onVolumeChangeCapture"'},{value:'"onWaiting"'},{value:'"onWaitingCapture"'},{value:'"onAuxClick"'},{value:'"onAuxClickCapture"'},{value:'"onClick"'},{value:'"onClickCapture"'},{value:'"onContextMenu"'},{value:'"onContextMenuCapture"'},{value:'"onDoubleClick"'},{value:'"onDoubleClickCapture"'},{value:'"onDrag"'},{value:'"onDragCapture"'},{value:'"onDragEnd"'},{value:'"onDragEndCapture"'},{value:'"onDragEnter"'},{value:'"onDragEnterCapture"'},{value:'"onDragExit"'},{value:'"onDragExitCapture"'},{value:'"onDragLeave"'},{value:'"onDragLeaveCapture"'},{value:'"onDragOver"'},{value:'"onDragOverCapture"'},{value:'"onDragStart"'},{value:'"onDragStartCapture"'},{value:'"onDrop"'},{value:'"onDropCapture"'},{value:'"onMouseDown"'},{value:'"onMouseDownCapture"'},{value:'"onMouseEnter"'},{value:'"onMouseLeave"'},{value:'"onMouseMove"'},{value:'"onMouseMoveCapture"'},{value:'"onMouseOut"'},{value:'"onMouseOutCapture"'},{value:'"onMouseOver"'},{value:'"onMouseOverCapture"'},{value:'"onMouseUp"'},{value:'"onMouseUpCapture"'},{value:'"onSelect"'},{value:'"onSelectCapture"'},{value:'"onTouchCancel"'},{value:'"onTouchCancelCapture"'},{value:'"onTouchEnd"'},{value:'"onTouchEndCapture"'},{value:'"onTouchMove"'},{value:'"onTouchMoveCapture"'},{value:'"onTouchStart"'},{value:'"onTouchStartCapture"'},{value:'"onPointerDown"'},{value:'"onPointerDownCapture"'},{value:'"onPointerMove"'},{value:'"onPointerMoveCapture"'},{value:'"onPointerUp"'},{value:'"onPointerUpCapture"'},{value:'"onPointerCancel"'},{value:'"onPointerCancelCapture"'},{value:'"onPointerEnter"'},{value:'"onPointerEnterCapture"'},{value:'"onPointerLeave"'},{value:'"onPointerLeaveCapture"'},{value:'"onPointerOver"'},{value:'"onPointerOverCapture"'},{value:'"onPointerOut"'},{value:'"onPointerOutCapture"'},{value:'"onGotPointerCapture"'},{value:'"onGotPointerCaptureCapture"'},{value:'"onLostPointerCapture"'},{value:'"onLostPointerCaptureCapture"'},{value:'"onScroll"'},{value:'"onScrollCapture"'},{value:'"onWheel"'},{value:'"onWheelCapture"'},{value:'"onAnimationStart"'},{value:'"onAnimationStartCapture"'},{value:'"onAnimationEnd"'},{value:'"onAnimationEndCapture"'},{value:'"onAnimationIteration"'},{value:'"onAnimationIterationCapture"'},{value:'"onTransitionEnd"'},{value:'"onTransitionEndCapture"'},{value:'"icon"'},{value:'"isActive"'},{value:'"hasDivider"'},{value:'"hideBack"'},{value:'"isSubItem"'},{value:'"mainTooltipText"'},{value:'"secondaryTooltipText"'}]}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"((node: RecursiveNode | null) => void)"}},onBackCLick:{defaultValue:null,description:"",name:"onBackCLick",required:!1,type:{name:"(() => void)"}},takeActivePath:{defaultValue:null,description:"",name:"takeActivePath",required:!1,type:{name:"any"}}}}}catch{}const J={position:"absolute",width:"190px",minHeight:"100%",height:"fit-content",zIndex:2,left:"50px",top:0,bottom:0,transition:"all, 0.15s",borderLeftWidth:"1px",borderLeftStyle:"solid","> div:first-of-type":{boxSizing:"border-box",display:"flex",outline:"none",px:"21px",pt:"18px",height:"50px",cursor:"pointer",fontFamily:"Inter",fontWeight:"bold",fontSize:"12px"}},k=({children:e,title:a,hideBack:l=!1,...u})=>{const{onBack:i}=o.useContext(A),t=o.useCallback(()=>{i(a)},[i,a]);return n.jsx(x,{title:a,...u,children:n.jsxs(g,{sx:J,tx:"navigation",variant:"category",children:[!l&&n.jsx("div",{onClick:t,role:"button",tabIndex:-1,children:n.jsx(K,{bold:!0,children:"<- Back"})}),e]})})},j=o.memo(k);try{k.displayName="NavigationCategory",k.__docgenInfo={description:"",displayName:"NavigationCategory",props:{onBackClick:{defaultValue:null,description:"",name:"onBackClick",required:!1,type:{name:"(() => void)"}},hideBack:{defaultValue:{value:"false"},description:"",name:"hideBack",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},hasDivider:{defaultValue:null,description:"",name:"hasDivider",required:!1,type:{name:"boolean"}},mainTooltipText:{defaultValue:null,description:"",name:"mainTooltipText",required:!1,type:{name:"string"}},secondaryTooltipText:{defaultValue:null,description:"",name:"secondaryTooltipText",required:!1,type:{name:"string"}}}}}catch{}const Q=e=>({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",borderRightStyle:"solid",borderRightWidth:"1px",position:"relative",overflowX:"hidden",width:"240px",minWidth:"240px",height:"100%","> ul":{width:"100%",height:"max-content",display:"flex",flexDirection:"column",flex:1,m:0,p:0,">li>div":{display:"flex",overflow:e&&"hidden",flexDirection:"row",alignItems:"center",padding:e?"0px":"6px 16px",height:e?"1px":"24px",background:"grayShade3",color:"gray",borderColor:"grayShade2",borderStyle:"solid",borderWidth:"1px",borderRightWidth:"0px",borderLeftWidth:"0px",cursor:"default",paddingLeft:"0px",":hover":{color:"gray"}},">li:first-of-type>div":{height:"0px",padding:"0px",borderWidth:"0px"}},"> div":{width:"100%",fontSize:"12px",fontFamily:"Inter",pb:"16px",">*":{textAlign:"center"}}}),D=(e,a=!0)=>Array.isArray(e)?e.map(l=>D(l,a)):Array.isArray(e.children)?o.createElement(a?j:x,{...e,key:e.id},D(e.children,!1)):o.createElement(x,{...e,key:e.id}),N=e=>e?y.Children.map(e,a=>({title:a.props.title,children:a.props.children&&N(a.props.children)})):[],_=({footer:e,header:a,children:l,tree:u,...i})=>{const t=o.useMemo(()=>u||N(l),[l,u]),r=o.useMemo(()=>u?D(u):l,[u,l]),[p,d]=o.useState([]);return n.jsx(g,{as:"aside",tx:"navigation",variant:"container",sx:Q(p.length>1),children:n.jsxs(Y,{tree:t,...i,takeActivePath:d,children:[!!a&&n.jsx("div",{children:a}),n.jsx("ul",{children:r}),!!e&&n.jsx("div",{children:e})]})})};_.Item=x;_.Category=j;export{A as N,_ as a};
//# sourceMappingURL=index-e649a486.js.map
