import{j as n}from"./index.esm-4cde2ecf.js";import{w as h,u as i,e as s,a as f}from"./index-b98f5975.js";import{r as k}from"./index-c4905b50.js";import{B as g}from"./index-a848a01b.js";import"./index-b2236b98.js";import{F as u}from"./Flex-f58c4497.js";import{V as y}from"./value-4ea02dda.js";import{c as w,s as S,T as j,a as C,u as x,b as I}from"./ChakraThemeProvider-3e75fbef.js";import{B as c}from"./Button-a08da01e.js";import{C as v}from"./chunk-ZJJGQIVY-49e76302.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-356e4a49.js";import"./index-70b9085c.js";import"./index-d475d2ea.js";import"./_baseIsEqual-316546b8.js";import"./index-890dd1b5.js";import"./uniq-2266aad4.js";import"./chunk-37N6GCLA-c543f2e6.js";import"./chunk-5PH6ULNP-85ef1ea5.js";import"./index-d349a420.js";import"./index-c4dcdd92.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-a53446b2.js";import"./theme-a979b46b.js";import"./typeof-7fd5df1e.js";import"./index-d380acba.js";import"./index-b1fcc60f.js";import"./_curry2-9db85ff5.js";import"./type-af5339dc.js";import"./_isString-966efe80.js";import"./_isObject-11124c2f.js";import"./mergeDeepWithKey-ac52baf9.js";import"./_curry3-2506b18d.js";import"./index-16396dee.js";import"./index-6c7829fd.js";import"./core.browser.esm-7fc45535.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-c72db7d4.js";import"./GetIcon-12ee8748.js";import"./list-084016e4.js";import"./nth-b0f2fe30.js";var D={duration:5e3,variant:"solid"},l={theme:S,colorMode:"light",toggleColorMode:()=>{},setColorMode:()=>{},defaultOptions:D,forced:!1};function E({theme:e=l.theme,colorMode:t=l.colorMode,toggleColorMode:o=l.toggleColorMode,setColorMode:r=l.setColorMode,defaultOptions:a=l.defaultOptions,motionVariants:p,toastSpacing:d,component:m,forced:T}=l){const B={colorMode:t,setColorMode:r,toggleColorMode:o,forced:T};return{ToastContainer:()=>n.jsx(j,{theme:e,children:n.jsx(v.Provider,{value:B,children:n.jsx(C,{defaultOptions:a,motionVariants:p,toastSpacing:d,component:m})})}),toast:w(e.direction,a)}}const Tt={title:"Notifier",args:{title:"Something happened",content:"You have to see it.",duration:5e3}},Bt={render:({title:e,content:t,duration:o})=>{const r=x(),a=()=>{r.success({title:`Success: ${e}`,content:t,duration:o})},p=()=>{r.error({title:`Error: ${e}`,content:t,duration:o})},d=()=>{r.info({title:`Info: ${e}`,content:t,duration:o})},m=()=>{r.warning({title:`Warning: ${e}`,content:t,duration:o})};return n.jsxs(u,{flexDirection:"column",gap:"20px",children:[n.jsxs(u,{gap:"20px",children:[n.jsx(c,{intent:"primary",onClick:a,children:"Success"}),n.jsx(c,{intent:"alert",onClick:p,children:"Error"}),n.jsx(c,{intent:"secondary",onClick:d,children:"Info"}),n.jsx(c,{intent:"ghost",onClick:m,children:"Warning"})]}),n.jsx(c,{intent:"secondary",onClick:()=>r.closeAll(),children:"Clear all notifications"})]})},play:async({canvasElement:e})=>{const t=h(e),o=h(document.querySelector(".chakra-portal"));i.click(t.getByText("Success")),s(await o.findByText("Success: Something happened")).toBeInTheDocument(),i.click(t.getByText("Warning")),s(await o.findByText("Warning: Something happened")).toBeInTheDocument(),i.click(t.getByText("Info")),s(await o.findByText("Info: Something happened")).toBeInTheDocument(),i.click(t.getByText("Error")),s(await o.findByText("Error: Something happened")).toBeInTheDocument(),i.click(t.getByText("Clear all notifications")),await f(()=>s(o.queryByText("Something happened")).not.toBeInTheDocument())}},kt={args:{title:"Error happened"},render:e=>{const t=x(),o=()=>{t.error({title:e.title,content:e.content,duration:e.duration})};return n.jsx(g,{children:n.jsx(c,{onClick:o,children:"Error"})})}},wt={render:e=>{const t=x(),o=k.useRef(1),r=()=>{t.success({title:`${e.title} ${o.current}`,content:e.content,duration:e.duration}),o.current+=1};return n.jsx(g,{children:n.jsx(c,{onClick:r,children:"Success"})})}},St={render:e=>{const t=x(),o=()=>{t.info({title:`Regular: ${e.title}`,content:e.content,duration:e.duration})},r=()=>{t.success({title:`Prevents others: ${e.title}`,content:e.content,duration:e.duration,uniqueId:"just one id"})};return n.jsxs(u,{flexDirection:"column",gap:"1rem",children:[n.jsx(y,{fontSize:"18px",width:"300px",children:"If you pass an ID to a notifier, it is going to prevent other notifications with the same ID from being shown."}),n.jsxs(u,{gap:"20px",children:[n.jsx(c,{onClick:o,children:"Regular"}),n.jsx(c,{onClick:r,children:"With ID given"})]})]})},play:async({canvasElement:e})=>{const t=h(e),o=h(document.querySelector(".chakra-portal"));i.click(t.getByText("Regular")),i.click(t.getByText("Regular")),i.click(t.getByText("Regular")),s(await o.findAllByText("You have to see it.")).toHaveLength(1),i.click(t.getByText("With ID given")),i.click(t.getByText("With ID given")),i.click(t.getByText("With ID given")),s(await o.findAllByText("Prevents others: Something happened")).toHaveLength(1)}},{ToastContainer:W,toast:$}=E(),jt={parameters:{docs:{source:"huy"}},render:({title:e,content:t,duration:o})=>{const r=I($),a=()=>{r.success({title:`Success: ${e}`,content:t,duration:o})},p=()=>{r.error({title:`Error: ${e}`,content:t,duration:o})},d=()=>{r.info({title:`Info: ${e}`,content:t,duration:o})},m=()=>{r.warning({title:`Warning: ${e}`,content:t,duration:o})};return n.jsxs(u,{flexDirection:"column",gap:"20px",children:[n.jsx(y,{children:"This is for situations when you cannot use a hook."}),n.jsx(c,{onClick:a,children:"Success"}),n.jsx(c,{intent:"alert",onClick:p,children:"Error"}),n.jsx(c,{intent:"secondary",onClick:d,children:"Info"}),n.jsx(c,{intent:"ghost",onClick:m,children:"Warning"}),n.jsx(c,{intent:"secondary",onClick:()=>r.closeAll(),children:"Clear all notifications"}),n.jsx(W,{})]})},play:async({canvasElement:e})=>{const t=h(e),o=h(document.querySelector(".chakra-portal"));i.click(t.getByText("Success")),s(await o.findByText("Success: Something happened")).toBeInTheDocument(),i.click(t.getByText("Warning")),s(await o.findByText("Warning: Something happened")).toBeInTheDocument(),i.click(t.getByText("Info")),s(await o.findByText("Info: Something happened")).toBeInTheDocument(),i.click(t.getByText("Error")),s(await o.findByText("Error: Something happened")).toBeInTheDocument(),i.click(t.getByText("Clear all notifications")),await f(()=>s(o.queryByText("Something happened")).not.toBeInTheDocument())}};export{kt as Error,St as PreventDuplicateNotifications,Bt as Primary,jt as Standalone,wt as Success,Tt as default};
//# sourceMappingURL=stories-fb1031dd.js.map