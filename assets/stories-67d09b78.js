import{j as o,B as t}from"./index.esm-c9573e99.js";import{d as n,C as e}from"./index-3343cfbe.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-33fa9d99.js";import"./iframe-eff20a38.js";import"../sb-preview/runtime.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-954f7a95.js";import"./Button-c9ca6f52.js";import"./index-093317e9.js";import"./index-8bf7f4ad.js";import"./index-a4266600.js";import"./core.browser.esm-a3311ba8.js";import"./inheritsLoose-c82a83d4.js";import"./theme-ebca2ce4.js";import"./index-ade1289a.js";import"./GetIcon-e1927133.js";import"./list-9e0a7656.js";import"./_curry2-9db85ff5.js";import"./nth-b0f2fe30.js";import"./_isString-966efe80.js";import"./type-af5339dc.js";import"./_isObject-11124c2f.js";import"./_curry3-2506b18d.js";import"./index-033bcf17.js";import"./chunk-ZJJGQIVY-585e530f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-0bcfbc70.js";import"./index-96d89555.js";import"./chunk-37N6GCLA-88b20eeb.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./value-9c58e214.js";const J={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:n}}},M={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
FROM ‘demo_featurestore_admin000’
INNER JOIN ‘demo_featurestore’`,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r})})},U={args:{title:"cargo.sh",expandable:!0,wrapLongLines:!0,language:"shell"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r,content:p})})},p=`#!/bin/bash

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
`;export{M as Default,U as DefaultExpandable,J as default};
