import{j as o,B as t}from"./index.esm-35888c3f.js";import{d as p,C as e}from"./index-984cdd2c.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5033b2e8.js";import"./iframe-a0066cef.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-aeb30429.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-075867f1.js";import"./Button-354ea521.js";import"./index-37e625e9.js";import"./index-65778582.js";import"./core.browser.esm-fde4463a.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./theme-c699ef82.js";import"./index-6eea46b0.js";import"./GetIcon-3b0bfffb.js";import"./list-0f204cb4.js";import"./_curry2-8f4fb22d.js";import"./nth-9d8032fc.js";import"./_isString-966efe80.js";import"./type-0614252a.js";import"./_has-a7b62b2c.js";import"./_isObject-00cd8d55.js";import"./_curry3-736aa410.js";import"./index-39986c0f.js";import"./chunk-QEVFQ4EU-ec302c0d.js";import"./index-dfb7fa5a.js";import"./index-a1857986.js";import"./index-871df828.js";import"./index-8ce4a492.js";import"./chunk-DUEJD2BE-7c1788e4.js";import"./chunk-3XANSPY5-70d7cc3d.js";import"./value-fb8fdf17.js";const U={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:p}}},W={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
FROM ‘demo_featurestore_admin000’
INNER JOIN ‘demo_featurestore’`,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r})})},k={args:{title:"cargo.sh",expandable:!0,wrapLongLines:!0,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r,content:n})})},n=`#!/bin/bash

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
//# sourceMappingURL=stories-4563d1ab.js.map
