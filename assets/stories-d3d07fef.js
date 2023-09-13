import{j as o,B as t}from"./index.esm-4cde2ecf.js";import{d as p,C as e}from"./index-03300908.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a62596af.js";import"./iframe-8f542190.js";import"../sb-preview/runtime.js";import"./chunk-ZJJGQIVY-49e76302.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-a53446b2.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-b2236b98.js";import"./Button-a08da01e.js";import"./index-16396dee.js";import"./index-6c7829fd.js";import"./core.browser.esm-7fc45535.js";import"./setPrototypeOf-0bb37fbe.js";import"./theme-a979b46b.js";import"./typeof-7fd5df1e.js";import"./index-c72db7d4.js";import"./GetIcon-12ee8748.js";import"./list-084016e4.js";import"./_curry2-9db85ff5.js";import"./nth-b0f2fe30.js";import"./_isString-966efe80.js";import"./type-af5339dc.js";import"./_isObject-11124c2f.js";import"./_curry3-2506b18d.js";import"./index-a27b50c4.js";import"./index-9c0338ed.js";import"./component-559fa000.js";import"./index-d349a420.js";import"./index-c4dcdd92.js";import"./chunk-37N6GCLA-c543f2e6.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./value-4ea02dda.js";const U={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:p}}},W={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
FROM ‘demo_featurestore_admin000’
INNER JOIN ‘demo_featurestore’`,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r})})},k={args:{title:"cargo.sh",expandable:!0,wrapLongLines:!0,language:"shell"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r,content:n})})},n=`#!/bin/bash

## a verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrry loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong line
set -e

if [ $# -lt 1 ] ; then
  echo "Usage: <prog> hostname [admin_port port]"
fi

admin_port=16005
port=14005
if [ $# -eq 3 ] ; then
  admin_port=$2
  port=$3
fi

cd ..
mvn -Dglassfish.port=$port -Dglassfish.admin_port=$admin_port -Dglassfish.hostname=$1 clean install -Pdeploy
cd scripts
./jim-bbc1-scp.sh
`;export{W as Default,k as DefaultExpandable,U as default};
//# sourceMappingURL=stories-d3d07fef.js.map
