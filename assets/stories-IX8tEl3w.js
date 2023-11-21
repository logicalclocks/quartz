import{j as o,B as t}from"./index.esm-1-8jp_UH.js";import{d as p,C as e}from"./index-XaGL-BFL.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-Zd9Ykk7F.js";import"./iframe-4uFY7HqQ.js";import"../sb-preview/runtime.js";import"./extends-dGVwEr9R.js";import"./objectWithoutPropertiesLoose-9Q1jwsKS.js";import"./index-z87RIlCj.js";import"./Button-SY5yRnmZ.js";import"./index-0S7rptJl.js";import"./index-xIHD0DlW.js";import"./index-2SZDP6Ir.js";import"./core.browser.esm-CcTFRrWi.js";import"./inheritsLoose-fS6oVJzb.js";import"./setPrototypeOf-ahVgEFUp.js";import"./theme-aQSvvOP4.js";import"./index--zgCqn6P.js";import"./GetIcon-qRvWYJPs.js";import"./list-fVdzS-ty.js";import"./_curry2-n9hRswqU.js";import"./nth-9dk_9Ldu.js";import"./_isString-ZSdStIIH.js";import"./type-UB4-n8CJ.js";import"./_isObject-hzA84eAc.js";import"./_curry3-kkHSwZ3c.js";import"./index-7NQ5khyh.js";import"./chunk-ZJJGQIVY-gP8tuhv6.js";import"./index-pCzXLvA2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-diZvDROf.js";import"./index-ItS3Uwde.js";import"./chunk-37N6GCLA-_rZq-_gT.js";import"./chunk-3XANSPY5--bGuOPPV.js";import"./value-HjFKPSNN.js";const U={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:p}}},W={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
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
//# sourceMappingURL=stories-IX8tEl3w.js.map
