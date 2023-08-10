import{j as o,B as t}from"./index.esm-be1572f9.js";import{d as p,C as e}from"./index-9150eaf4.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a95d2e50.js";import"./iframe-ad736d88.js";import"../sb-preview/runtime.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-b865f092.js";import"./Button-865636e2.js";import"./index-16396dee.js";import"./index-c454421c.js";import"./core.browser.esm-739c8baf.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./theme-49842806.js";import"./index-b9a571a2.js";import"./GetIcon-f708352d.js";import"./list-d7f683a7.js";import"./_curry2-6f920f03.js";import"./nth-02919024.js";import"./_isString-966efe80.js";import"./type-ece77ddd.js";import"./_has-a7b62b2c.js";import"./_isObject-00cd8d55.js";import"./_curry3-f597dd1e.js";import"./index-d1a21427.js";import"./chunk-QEVFQ4EU-c4767dd7.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-a53446b2.js";import"./index-9c0338ed.js";import"./component-5b5c5757.js";import"./index-10d483a0.js";import"./index-c4dcdd92.js";import"./chunk-DUEJD2BE-cc487a56.js";import"./chunk-3XANSPY5-cf37bc50.js";import"./value-1119441d.js";const W={title:"Code",argTypes:{content:{control:{type:"text"}},title:{control:{type:"text"}},language:{control:{type:"text"}},copyButton:{control:{type:"boolean"},defaultValue:{summary:!1}},downloadButton:{control:{type:"boolean"},description:"Show download to clipboard button",defaultValue:{summary:!1}},wrapLongLines:{control:{type:"boolean"},description:"Wrap long lines",defaultValue:{summary:!1}},showLineNumbers:{control:{type:"boolean"},description:"Show line numbers",defaultValue:{summary:!1}},expandable:{control:{type:"boolean"},description:"Limit the content to 12 number of lines and add an expandable button to show the full content on popup",defaultValue:{summary:!1}},popupProps:{control:{type:"object"},description:"Setting custom style for the popup when showing the expanded version",defaultValue:p}}},k={args:{copyButton:!0,downloadButton:!0,content:`SELECT ‘fg2’.’home_team_id’, ‘fg2’.
FROM ‘demo_featurestore_admin000’
INNER JOIN ‘demo_featurestore’`,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r})})},z={args:{title:"cargo.sh",expandable:!0,wrapLongLines:!0,language:"sql"},render:r=>o.jsx(t,{width:"700px",children:o.jsx(e,{...r,content:n})})},n=`#!/bin/bash

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
`;export{k as Default,z as DefaultExpandable,W as default};
//# sourceMappingURL=stories-234123f0.js.map
