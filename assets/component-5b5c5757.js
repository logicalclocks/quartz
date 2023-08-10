import{r as p}from"./index-c4905b50.js";function R(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function j(e,n){var r=p.useState(function(){return{value:e,callback:n,facade:{get current(){return r.value},set current(t){var a=r.value;a!==t&&(r.value=t,r.callback(t,a))}}}})[0];return r.callback=n,r.facade}function Z(e,n){return j(n||null,function(r){return e.forEach(function(t){return R(t,r)})})}var y=function(){return y=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])}return n},y.apply(this,arguments)};function N(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}function $(e,n,r){if(r||arguments.length===2)for(var t=0,a=n.length,i;t<a;t++)(i||!(t in n))&&(i||(i=Array.prototype.slice.call(n,0,t)),i[t]=n[t]);return e.concat(i||Array.prototype.slice.call(n))}function _(e){return e}function M(e,n){n===void 0&&(n=_);var r=[],t=!1,a={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var u=n(i,t);return r.push(u),function(){r=r.filter(function(o){return o!==u})}},assignSyncMedium:function(i){for(t=!0;r.length;){var u=r;r=[],u.forEach(i)}r={push:function(o){return i(o)},filter:function(){return r}}},assignMedium:function(i){t=!0;var u=[];if(r.length){var o=r;r=[],o.forEach(i),u=r}var m=function(){var s=u;u=[],s.forEach(i)},d=function(){return Promise.resolve().then(m)};d(),r={push:function(s){u.push(s),d()},filter:function(s){return u=u.filter(s),r}}}};return a}function ee(e,n){return n===void 0&&(n=_),M(e,n)}function ne(e){e===void 0&&(e={});var n=M(null);return n.options=y({async:!0,ssr:!1},e),n}var W=function(e){var n=e.sideCar,r=N(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=n.read();if(!t)throw new Error("Sidecar medium not found");return p.createElement(t,y({},r))};W.isSideCarExport=!0;function re(e,n){return e.useMedium(n),W}var P=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},l=new WeakMap,h=new WeakMap,g={},b=0,k=function(e){return e&&(e.host||k(e.parentNode))},T=function(e,n){return n.map(function(r){if(e.contains(r))return r;var t=k(r);return t&&e.contains(t)?t:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},I=function(e,n,r,t){var a=T(n,Array.isArray(e)?e:[e]);g[r]||(g[r]=new WeakMap);var i=g[r],u=[],o=new Set,m=new Set(a),d=function(c){!c||o.has(c)||(o.add(c),d(c.parentNode))};a.forEach(d);var s=function(c){!c||m.has(c)||Array.prototype.forEach.call(c.children,function(f){if(o.has(f))s(f);else{var v=f.getAttribute(t),x=v!==null&&v!=="false",A=(l.get(f)||0)+1,C=(i.get(f)||0)+1;l.set(f,A),i.set(f,C),u.push(f),A===1&&x&&h.set(f,!0),C===1&&f.setAttribute(r,"true"),x||f.setAttribute(t,"true")}})};return s(n),o.clear(),b++,function(){u.forEach(function(c){var f=l.get(c)-1,v=i.get(c)-1;l.set(c,f),i.set(c,v),f||(h.has(c)||c.removeAttribute(t),h.delete(c)),v||c.removeAttribute(r)}),b--,b||(l=new WeakMap,l=new WeakMap,h=new WeakMap,g={})}},te=function(e,n,r){r===void 0&&(r="data-aria-hidden");var t=Array.from(Array.isArray(e)?e:[e]),a=n||P(e);return a?(t.push.apply(t,Array.from(a.querySelectorAll("[aria-live]"))),I(t,a,r,"aria-hidden")):function(){return null}},S="right-scroll-bar-position",w="width-before-scroll-bar",z="with-scroll-bars-hidden",B="--removed-body-scroll-bar-size",O,D=function(){if(O)return O;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function G(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=D();return n&&e.setAttribute("nonce",n),e}function L(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function Q(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var q=function(){var e=0,n=null;return{add:function(r){e==0&&(n=G())&&(L(n,r),Q(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},H=function(){var e=q();return function(n,r){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&r])}},K=function(){var e=H(),n=function(r){var t=r.styles,a=r.dynamic;return e(t,a),null};return n},V={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},F=function(e){var n=window.getComputedStyle(document.body),r=n[e==="padding"?"paddingLeft":"marginLeft"],t=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[E(r),E(t),E(a)]},J=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return V;var n=F(e),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,t-r+n[2]-n[0])}},U=K(),X=function(e,n,r,t){var a=e.left,i=e.top,u=e.right,o=e.gap;return r===void 0&&(r="margin"),`
  .`.concat(z,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(o,"px ").concat(t,`;
  }
  body {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(o,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(S,` {
    right: `).concat(o,"px ").concat(t,`;
  }
  
  .`).concat(w,` {
    margin-right: `).concat(o,"px ").concat(t,`;
  }
  
  .`).concat(S," .").concat(S,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(w," .").concat(w,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body {
    `).concat(B,": ").concat(o,`px;
  }
`)},ae=function(e){var n=e.noRelative,r=e.noImportant,t=e.gapMode,a=t===void 0?"margin":t,i=p.useMemo(function(){return J(a)},[a]);return p.createElement(U,{styles:X(i,!n,a,r?"":"!important")})};export{ae as R,N as _,ne as a,y as b,ee as c,$ as d,re as e,w as f,te as h,K as s,Z as u,S as z};
//# sourceMappingURL=component-5b5c5757.js.map
