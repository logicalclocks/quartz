import{j as o}from"./index.esm-95acea13.js";import{w as a,u as i,e as s,a as x}from"./index-d29bfcdb.js";import{r as y}from"./index-8ee6c85d.js";import{B as f}from"./index-5d579de3.js";import"./index-cb56fc43.js";import{F as l}from"./Flex-37b3be28.js";import{V as g}from"./value-b8103e43.js";import{u as p,c as B,a as T}from"./ChakraThemeProvider-8879738f.js";import{B as c}from"./Button-a764f177.js";import"./_commonjsHelpers-de833af9.js";import"./index-f076af93.js";import"./_baseIsEqual-c1de01ea.js";import"./index-03bbf7d1.js";import"./uniq-089a3f3a.js";import"./index-d38bc732.js";import"./index-356e4a49.js";import"./chunk-37N6GCLA-ba2a618c.js";import"./chunk-ZJJGQIVY-9cf857b2.js";import"./index-ffe84488.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./chunk-5PH6ULNP-08a08ebd.js";import"./index-2a89f1ca.js";import"./index-8bf7f4ad.js";import"./theme-c1401d61.js";import"./index-e67c4366.js";import"./index-34ae0f6f.js";import"./_curry2-9db85ff5.js";import"./type-af5339dc.js";import"./_isString-966efe80.js";import"./_isObject-11124c2f.js";import"./mergeDeepWithKey-ac52baf9.js";import"./_curry3-2506b18d.js";import"./index-093317e9.js";import"./index-32e1c7a4.js";import"./core.browser.esm-1eea21ee.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-17f883e0.js";import"./GetIcon-c5f7f453.js";import"./list-9cfea01e.js";import"./nth-b0f2fe30.js";const ht={title:"Notifier",args:{title:"Something happened",content:"You have to see it.",duration:5e3}},mt={render:({title:n,content:t,duration:e})=>{const r=p(),h=()=>{r.success({title:`Success: ${n}`,content:t,duration:e})},m=()=>{r.error({title:`Error: ${n}`,content:t,duration:e})},u=()=>{r.info({title:`Info: ${n}`,content:t,duration:e})},d=()=>{r.warning({title:`Warning: ${n}`,content:t,duration:e})};return o.jsxs(l,{flexDirection:"column",gap:"20px",children:[o.jsxs(l,{gap:"20px",children:[o.jsx(c,{intent:"primary",onClick:h,children:"Success"}),o.jsx(c,{intent:"alert",onClick:m,children:"Error"}),o.jsx(c,{intent:"secondary",onClick:u,children:"Info"}),o.jsx(c,{intent:"ghost",onClick:d,children:"Warning"})]}),o.jsx(c,{intent:"secondary",onClick:()=>r.closeAll(),children:"Clear all notifications"})]})},play:async({canvasElement:n})=>{const t=a(n),e=a(document.querySelector(".chakra-portal"));i.click(t.getByText("Success")),s(await e.findByText("Success: Something happened")).toBeInTheDocument(),i.click(t.getByText("Warning")),s(await e.findByText("Warning: Something happened")).toBeInTheDocument(),i.click(t.getByText("Info")),s(await e.findByText("Info: Something happened")).toBeInTheDocument(),i.click(t.getByText("Error")),s(await e.findByText("Error: Something happened")).toBeInTheDocument(),i.click(t.getByText("Clear all notifications")),await x(()=>s(e.queryByText("Something happened")).not.toBeInTheDocument())}},ut={args:{title:"Error happened"},render:n=>{const t=p(),e=()=>{t.error({title:n.title,content:n.content,duration:n.duration})};return o.jsx(f,{children:o.jsx(c,{onClick:e,children:"Error"})})}},dt={render:n=>{const t=p(),e=y.useRef(1),r=()=>{t.success({title:`${n.title} ${e.current}`,content:n.content,duration:n.duration}),e.current+=1};return o.jsx(f,{children:o.jsx(c,{onClick:r,children:"Success"})})}},xt={render:n=>{const t=p(),e=()=>{t.info({title:`Regular: ${n.title}`,content:n.content,duration:n.duration})},r=()=>{t.success({title:`Prevents others: ${n.title}`,content:n.content,duration:n.duration,uniqueId:"just one id"})};return o.jsxs(l,{flexDirection:"column",gap:"1rem",children:[o.jsx(g,{fontSize:"18px",width:"300px",children:"If you pass an ID to a notifier, it is going to prevent other notifications with the same ID from being shown."}),o.jsxs(l,{gap:"20px",children:[o.jsx(c,{onClick:e,children:"Regular"}),o.jsx(c,{onClick:r,children:"With ID given"})]})]})},play:async({canvasElement:n})=>{const t=a(n),e=a(document.querySelector(".chakra-portal"));i.click(t.getByText("Regular")),i.click(t.getByText("Regular")),i.click(t.getByText("Regular")),s(await e.findAllByText("You have to see it.")).toHaveLength(1),i.click(t.getByText("With ID given")),i.click(t.getByText("With ID given")),i.click(t.getByText("With ID given")),s(await e.findAllByText("Prevents others: Something happened")).toHaveLength(1)}},{ToastContainer:k,toast:w}=B(),ft={parameters:{docs:{source:"huy"}},render:({title:n,content:t,duration:e})=>{const r=T(w),h=()=>{r.success({title:`Success: ${n}`,content:t,duration:e})},m=()=>{r.error({title:`Error: ${n}`,content:t,duration:e})},u=()=>{r.info({title:`Info: ${n}`,content:t,duration:e})},d=()=>{r.warning({title:`Warning: ${n}`,content:t,duration:e})};return o.jsxs(l,{flexDirection:"column",gap:"20px",children:[o.jsx(g,{children:"This is for situations when you cannot use a hook."}),o.jsx(c,{onClick:h,children:"Success"}),o.jsx(c,{intent:"alert",onClick:m,children:"Error"}),o.jsx(c,{intent:"secondary",onClick:u,children:"Info"}),o.jsx(c,{intent:"ghost",onClick:d,children:"Warning"}),o.jsx(c,{intent:"secondary",onClick:()=>r.closeAll(),children:"Clear all notifications"}),o.jsx(k,{})]})},play:async({canvasElement:n})=>{const t=a(n),e=a(document.querySelector(".chakra-portal"));i.click(t.getByText("Success")),s(await e.findByText("Success: Something happened")).toBeInTheDocument(),i.click(t.getByText("Warning")),s(await e.findByText("Warning: Something happened")).toBeInTheDocument(),i.click(t.getByText("Info")),s(await e.findByText("Info: Something happened")).toBeInTheDocument(),i.click(t.getByText("Error")),s(await e.findByText("Error: Something happened")).toBeInTheDocument(),i.click(t.getByText("Clear all notifications")),await x(()=>s(e.queryByText("Something happened")).not.toBeInTheDocument())}};export{ut as Error,xt as PreventDuplicateNotifications,mt as Primary,ft as Standalone,dt as Success,ht as default};