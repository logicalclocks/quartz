import{j as n}from"./index.esm-c9573e99.js";import{r as l}from"./index-8ee6c85d.js";import{C as i}from"./checkbox-group-93d1b87e.js";import"./_commonjsHelpers-de833af9.js";import"./index-a82815a1.js";import"./index-a26a27af.js";import"./labeling-e871794f.js";import"./index-a32e2460.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./index-0bcfbc70.js";import"./index-e67c4366.js";import"./chunk-ZJJGQIVY-585e530f.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-96d89555.js";import"./index-8bf7f4ad.js";const E={title:"CheckboxGroup",argTypes:{onChange:{},disabledUnselect:{control:{type:"boolean"}},label:{control:{type:"text"}},value:{}}},e={args:{label:"Validation"},render:a=>{const[p,s]=l.useState([]);return n.jsx(i,{...a,value:p,onChange:s,options:["nullable","required","email","url"]})}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Validation'
  },
  render: props => {
    const [value, setValue] = useState<string[]>([]);
    return <CheckboxGroup {...props} value={value} onChange={setValue} options={['nullable', 'required', 'email', 'url']} />;
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const S=["GroupTemplate"];export{e as GroupTemplate,S as __namedExportsOrder,E as default};
