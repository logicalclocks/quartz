import{j as o,B as t}from"./index.esm-d48b4efe.js";import{d as n,C as e}from"./index-58b98675.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d2cf7b66.js";import"./iframe-140f8f6b.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aeb30429.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-52de6830.js";import"./Button-e9eef594.js";import"./index-37e625e9.js";import"./index-d07cc06a.js";import"./core.browser.esm-d02c0f74.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./theme-67511692.js";import"./index-0330c98f.js";import"./GetIcon-9cceefbc.js";import"./list-ae21c2ea.js";import"./_curry2-8f4fb22d.js";import"./nth-9d8032fc.js";import"./_isString-966efe80.js";import"./type-0614252a.js";import"./_has-a7b62b2c.js";import"./_isObject-00cd8d55.js";import"./_curry3-736aa410.js";import"./index-5c5fb463.js";import"./chunk-QEVFQ4EU-1dcbd7c5.js";import"./index-dfb7fa5a.js";import"./index-a1857986.js";import"./index-0180fac5.js";import"./index-8ce4a492.js";import"./chunk-DUEJD2BE-bf99407b.js";import"./value-043885de.js";const M={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:n}}},U={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
FROM ‘demo_featurestore_admin000’
INNER JOIN ‘demo_featurestore’`,language:"sql"},render:r=>o(t,{width:"700px",children:o(e,{...r})})},W={args:{title:"cargo.sh",expandable:!0,wrapLongLines:!0,language:"sql"},render:r=>o(t,{width:"700px",children:o(e,{...r,content:p})})},p=`#!/bin/bash

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
`;export{U as Default,W as DefaultExpandable,M as default};
//# sourceMappingURL=stories-cf204a50.js.map
