import{j as e,B as a}from"./index.esm-c9573e99.js";import{r as i}from"./index-8ee6c85d.js";import{S as s}from"./slider-6d7baa9b.js";import"./_commonjsHelpers-de833af9.js";import"./labeling-e871794f.js";import"./value-9c58e214.js";import"./index-d7567f6d.js";import"./index-e67c4366.js";import"./index-34ae0f6f.js";import"./index-0bcfbc70.js";import"./chunk-ZJJGQIVY-585e530f.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";const C={title:"Slider",component:s},V={args:{label:"CPU cores",step:1,range:[0,10]},render:t=>{const[r,o]=i.useState(0);return e.jsx(a,{width:"700px",children:e.jsx(s,{...t,value:r,onChange:o})})}},B={args:{label:"RAM",step:128,range:[0,1024],formatDisplayValue:t=>`${t} MB`},render:t=>{const[r,o]=i.useState(0);return e.jsx(a,{width:"700px",children:e.jsx(s,{...t,value:r,onChange:o})})}};export{V as DefaultSlider,B as WithCustomDisplayValue,C as default};
