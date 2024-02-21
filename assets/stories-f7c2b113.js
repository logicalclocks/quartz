import{j as n}from"./index.esm-c9573e99.js";import{a as c}from"./chunk-WFFRPTHA-dbb6442d.js";import{w as d,e,u as r}from"./index-129be7d7.js";import{r as g}from"./index-8ee6c85d.js";import"./compact-button-02e4e364.js";import"./index-34cac4b8.js";import"./index-452d899e.js";import"./index-d58c00bb.js";import"./card-secondary-35eccc1f.js";import"./index-a77b61af.js";import"./index-3343cfbe.js";import"./index-a26a27af.js";import"./index-218898a6.js";import{E as l}from"./index-4151c7bf.js";import"./checkbox-group-93d1b87e.js";import"./index-fab547a7.js";import"./index-d09188f0.js";import"./index-dc4ab598.js";import"./index-1e2f1240.js";import"./theme-ebca2ce4.js";import"./GetIcon-e1927133.js";import"./index-3f07146c.js";import"./index-fcbf7781.js";import"./index-04486ee8.js";import"./index-77fd5564.js";import"./index-a82815a1.js";import"./index-4ac30521.js";import"./index-9c3c31a0.js";import"./index-a32e2460.js";import"./index-0e4c111d.js";import"./index-4920300a.js";import"./index-e225bb0b.js";import"./index-81062325.js";import"./index-16b9aed3.js";import"./slider-6d7baa9b.js";import"./range-slider-75be8993.js";import"./index-033bcf17.js";import"./index-f9c885d5.js";import"./index-e8c81d75.js";import"./index-c99db917.js";import"./index-e0cc22b6.js";import"./index-441f9adb.js";import"./value-9c58e214.js";import"./labeling-e871794f.js";import"./ThemeProvider-8be1de5a.js";import"./index-a4266600.js";import"./index-595a4356.js";import{B as b}from"./index-8971236b.js";import"./Bar-26902d46.js";import"./index-954f7a95.js";import"./Flex-232cf882.js";import"./index-146dc599.js";import"./Dot-f37deabe.js";import"./Badge-b193efa7.js";import"./TextValueBadge-0cb4f142.js";import"./ProjectBadge-40c2b576.js";import"./index-74f7e635.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-a907aeee.js";import"./index-356e4a49.js";import"./index-f076af93.js";import"./_baseIsEqual-c1de01ea.js";import"./index-03bbf7d1.js";import"./uniq-089a3f3a.js";import"./index-d38bc732.js";import"./index-ade1289a.js";import"./list-9e0a7656.js";import"./index-024cd3a6.js";import"./Button-c9ca6f52.js";import"./index-093317e9.js";import"./index-8bf7f4ad.js";import"./_curry3-2506b18d.js";import"./_curry2-9db85ff5.js";import"./index-3598aff3.js";import"./FileItemExplorer-2cd8977d.js";import"./format-d69e34bd.js";import"./index-33fa9d99.js";import"./iframe-eff20a38.js";import"../sb-preview/runtime.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./type-af5339dc.js";import"./_isString-966efe80.js";import"./_isObject-11124c2f.js";import"./mergeDeepRight-032f9ec4.js";import"./mergeDeepWithKey-ac52baf9.js";import"./positions-4b0ff717.js";import"./index-d6a32ca3.js";import"./Tab-4b73bf7f.js";import"./AnimatedProgress-085b7a0e.js";import"./FreshnessBar-8e5a8523.js";import"./clamp-5454dae8.js";import"./chunk-ZJJGQIVY-585e530f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-96d89555.js";import"./chunk-5PH6ULNP-e5658dd8.js";import"./chunk-37N6GCLA-88b20eeb.js";import"./index-0bcfbc70.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./index-34ae0f6f.js";import"./index-e67c4366.js";import"./inheritsLoose-c82a83d4.js";import"./assertThisInitialized-b3adfc70.js";import"./nth-b0f2fe30.js";import"./addMonths-a8a526f3.js";import"./index-d7567f6d.js";import"./core.browser.esm-a3311ba8.js";const wo={title:"EditableSelect",component:l,argTypes:{value:{description:"Array of strings",control:{type:"array"}},options:{description:"array of strings",control:{type:"array"}},label:{control:{type:"text"}},placeholder:{description:"string",control:{type:"text"}},noDataMessage:{description:"string",control:{type:"text"}},disabled:{control:{type:"boolean"}},isMulti:{control:{type:"boolean"}},preventAdding:{description:'Turns off ability to create new options, the "add <>" thing',control:{type:"boolean"}},labelAction:{description:"React Component"},variant:{control:{type:"select"},description:"Component can look different with different variants",options:["primary","white"]}}},y=["integer","string","boolean","float","bigInt"],uo={args:{label:"Label",labelAction:"(optional)",placeholder:"placeholder",noDataMessage:"no options",disabled:!1,isMulti:!0,value:["integer","string"],options:y},render:({value:a,options:o,...t})=>{const[i,m]=g.useState(a),s=p=>{c("onChange")(p),m(p)};return n.jsx(b,{minHeight:"400px",width:"600px",children:n.jsx(l,{...t,value:i,options:o,onChange:s})})},play:async({canvasElement:a,step:o})=>{const t=d(a.parentElement);await o("Ensure default values are used for first render",()=>{e(t.getByText("integer")).toBeDefined(),e(t.getByText("string")).toBeDefined()}),await o("Clicking on label opens the menu",async()=>{const i=await document.querySelector("label");await r.click(i),await r.keyboard("[ArrowDown]"),e(t.getByText("bigInt")).toBeVisible()}),await o("Select all options, run out of them, see *noDataMessage*",async()=>{await r.keyboard("[ArrowDown][Enter][ArrowDown][Enter][ArrowDown][Enter]");const i=await t.findByText("no options");e(i).toBeVisible()}),await o("Remove last two items, see them gone",async()=>{await r.keyboard("[Backspace][Backspace][Backspace][Backspace][Backspace]"),await r.keyboard("[Escape][Tab]"),e(t.queryByText("boolean")).toBeNull(),e(t.queryByText("bigInt")).toBeNull()})}},ho={args:{label:"Label",labelAction:"(optional)",placeholder:"placeholder",noDataMessage:"no options",disabled:!1,isMulti:!1,value:["integer"],options:y},render:({value:a,options:o,...t})=>{const[i,m]=g.useState(a),s=p=>{c("onChange")(p),m(p)};return n.jsx(b,{minHeight:"400px",width:"600px",children:n.jsx(l,{...t,value:i,options:o,onChange:s})})},play:async({canvasElement:a,step:o})=>{const t=d(a);await o('Ensure "integer" is selected by value, from props',()=>{e(t.getByText("integer")).toBeVisible()}),await o("Clicking on label opens the menu",async()=>{const i=await t.getByText("Label(optional)");await r.click(i),await r.keyboard("[ArrowDown]"),e(t.getByText("bigInt")).toBeVisible()}),await o("Choose third option, see it being chosen",async()=>{const i=await t.getByText("Label(optional)");await r.click(i),await r.keyboard("[ArrowDown][ArrowDown][Enter]"),e(t.getByText("boolean")).toBeVisible()})}};export{uo as Multi,ho as Single,wo as default};
