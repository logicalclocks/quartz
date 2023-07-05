import{j as o,B as t}from"./index.esm-01e799b2.js";import{d as p,C as e}from"./index-e3dbf26c.js";import"./index-570b25c1.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f387bfde.js";import"./iframe-69427be1.js";import"../sb-preview/runtime.js";import"./extends-34e645d9.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-fd3ac567.js";import"./Button-2b8006a2.js";import"./index-147457db.js";import"./index-f658d80e.js";import"./core.browser.esm-3513c1b0.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./theme-a71aa38c.js";import"./index-4bfef4ab.js";import"./GetIcon-57c1f618.js";import"./list-69749cfd.js";import"./_curry2-9db85ff5.js";import"./nth-b0f2fe30.js";import"./_isString-966efe80.js";import"./type-a10ea15b.js";import"./_has-a7b62b2c.js";import"./_isObject-00cd8d55.js";import"./_curry3-2506b18d.js";import"./index-205ac35f.js";import"./chunk-QEVFQ4EU-cd8f5558.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-38ea7bbc.js";import"./index-1abff875.js";import"./index-7695447c.js";import"./index-8a077077.js";import"./chunk-DUEJD2BE-430833ba.js";import"./chunk-3XANSPY5-70d7cc3d.js";import"./value-20aa3a70.js";const U={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:p}}},W={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
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
//# sourceMappingURL=stories-39d6aacf.js.map
