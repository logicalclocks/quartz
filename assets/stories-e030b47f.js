import{j as o,B as x}from"./index.esm-95acea13.js";import{a as p}from"./chunk-WFFRPTHA-dbb6442d.js";import{r as e}from"./index-8ee6c85d.js";import{c as l}from"./index-ce763bdb.js";import"./compact-button-4641839e.js";import"./index-7d9cfca9.js";import"./index-15e90c6d.js";import"./index-5f084431.js";import"./card-secondary-cc411c7d.js";import"./index-506c8cb2.js";import"./index-ee60001d.js";import"./index-cf35c599.js";import"./index-e8a87229.js";import"./checkbox-group-fb0e304f.js";import"./index-6774f917.js";import"./index-f009891c.js";import{R as g}from"./radio-group-ecefb58b.js";import"./index-325d028e.js";import"./index-00b1c738.js";import"./theme-c1401d61.js";import"./GetIcon-c5f7f453.js";import"./index-14281ba5.js";import"./index-76d6605f.js";import"./index-8e4f4f79.js";import"./index-f842def2.js";import"./index-2a26cb72.js";import"./index-3777f79f.js";import"./index-280deb0d.js";import"./index-c5a183b8.js";import"./index-2ffa3e6a.js";import"./index-f2badc06.js";import"./index-9f5bc5f4.js";import"./index-c40f68ee.js";import"./index-6a2ce10b.js";import"./slider-c0f7996d.js";import"./range-slider-dd89aad3.js";import"./index-dc620495.js";import"./index-524518b1.js";import"./index-f0cdfdb8.js";import"./index-6bad2ef7.js";import"./index-71f4177e.js";import"./index-02a42f1e.js";import{V as n}from"./value-b8103e43.js";import{L as w}from"./labeling-36656030.js";import"./ThemeProvider-12f6ca24.js";import"./index-32e1c7a4.js";import"./index-c8aa8642.js";import"./index-5d579de3.js";import"./Bar-24450f1b.js";import"./index-cb56fc43.js";import"./Flex-37b3be28.js";import"./index-01e8c9da.js";import"./Dot-b5fb4070.js";import"./Badge-6b768281.js";import"./TextValueBadge-961335b2.js";import"./ProjectBadge-3771a0cd.js";import"./index-6a2b5278.js";import{B as A}from"./Button-a764f177.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-a907aeee.js";import"./index-356e4a49.js";import"./type-af5339dc.js";import"./_curry2-9db85ff5.js";import"./_isString-966efe80.js";import"./_isObject-11124c2f.js";import"./mergeDeepRight-032f9ec4.js";import"./mergeDeepWithKey-ac52baf9.js";import"./_curry3-2506b18d.js";import"./list-9cfea01e.js";import"./positions-4b0ff717.js";import"./index-17f883e0.js";import"./index-6e4dee96.js";import"./Tab-b306e720.js";import"./index-093317e9.js";import"./index-8bf7f4ad.js";import"./AnimatedProgress-ef2f9b88.js";import"./extends-98964cd2.js";import"./FreshnessBar-3921f336.js";import"./index-34c655b6.js";import"./clamp-5454dae8.js";import"./chunk-ZJJGQIVY-9cf857b2.js";import"./index-ffe84488.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-2a89f1ca.js";import"./chunk-5PH6ULNP-08a08ebd.js";import"./chunk-37N6GCLA-ba2a618c.js";import"./index-0bcfbc70.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./index-34ae0f6f.js";import"./index-e67c4366.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-4d904bdf.js";import"./index-902fb94b.js";import"./FileItemExplorer-b1789f8f.js";import"./index-edcf16e4.js";import"./iframe-7ce9b4b5.js";import"../sb-preview/runtime.js";import"./nth-b0f2fe30.js";import"./popper-f3391c26.js";import"./index-948712dc.js";import"./isNativeReflectConstruct-22f77b05.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-d7567f6d.js";import"./inheritsLoose-d541526f.js";import"./core.browser.esm-1eea21ee.js";const wo={title:"Select2",component:l,argTypes:{value:{description:"Current selection. Matches option.key",control:{type:"array"}},options:{description:"Array of strings",control:{type:"array"}},searchPlaceholder:{description:"Placeholder for the search bar, if applicable",control:{type:"text"}},info:{description:"If present, shows an info icon with the text as tooltip",control:{type:"text"}},bottomActionText:{description:"text to be placed in the action button at the end of the dropdown, if applicable",control:{type:"text"}},bottomActionHandler:{description:"callback action for the button at the end of the dropdown, if applicable",control:{type:"function"}},hasSearch:{description:"Adds a search bar inside the dropdown",control:{type:"boolean"}},customFilter:{description:"Custom filter to be placed inside the dropdown",control:{type:"React.ReactNode"}},placeholder:{description:"Text to be displayed when no selection is being made",control:{type:"text"}},noDataMessage:{description:"Text to be displayed when there is no options available",control:{type:"text"}},onChange:{description:"Change callback function"},label:{description:"Label of the component",control:{type:"text"}},isMulti:{description:"Allow multiple selection",control:{type:"boolean"}},deletabled:{description:"Allow current selection to be removed",control:{type:"boolean"}},message:{control:{type:"text"},description:"Message text (validation error)"},state:{control:{type:"select",options:["default","error"]},description:"Select state (error border)"},format:{control:{type:"select",options:["fit","fill"]},description:"Width behaviour of select and dropdown"},labelMode:{control:{type:"select",options:["default","inline","none"]},description:"Placement of the label"},disabled:{description:"Disables the component",control:{type:"boolean"}},appendToBody:{description:"Appends the dropdown directly to the body. Helps when inside popups",control:{type:"boolean"}},labelAction:{description:"React Component to be placed next to the label",control:{}},color:{description:"color of the select",control:{type:"select",options:["primary","white"]},defaultValue:{description:"primary"}}}},i=[{key:1,label:"One",additionalText:"add_one",additionalComponent:o.jsx(n,{children:"text"})},{key:2,label:"Two",additionalComponent:o.jsx(w,{bold:!0,gray:!0,children:"text"})},{key:3,label:"Three_Thats_loooong",additionalText:"add_three_thats_veryyyyy_loooooong"},{key:4,label:"Four",additionalText:"add_four_thats_veryyyyy_loooooong",additionalComponent:o.jsx(n,{children:"text"})}],Ao={args:{value:"",placeholder:"placeholder",label:"Label",format:"fit",color:"primary",labelMode:"default",appendToBody:!0,isMulti:!1,noDataMessage:"no labels",hasSearch:!0,bottomActionText:"Add another label",bottomActionHandler:()=>{p("on bottom action")()},info:"Here goes some extra info",deletabled:!1,labelAction:o.jsx(A,{p:"0 0 0 10px",intent:"inline",children:"reference"})},render:a=>{const[m,s]=e.useState([]),[c,r]=e.useState(i),[d,h]=e.useState("all"),y=t=>{const f=Array.isArray(t)?t:[t];p("onChange")(t),s(f.map(u=>u.key))},b=t=>{h(t),r(t==="all"?i:i.slice(3,5))};return o.jsx(x,{height:"60px",m:"20px",children:o.jsx(l,{...a,width:"200px",value:m,maxListHeight:"initial",options:c,onChange:y,customFilter:o.jsx(g,{ml:"10px",value:d,flexDirection:"row",onChange:b,onClick:t=>t.stopPropagation(),options:["all","matching feature only"]})})})}};export{Ao as Default,wo as default};