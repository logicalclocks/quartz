import{r as p}from"./index-c4905b50.js";function P(e,n){return typeof e=="function"?e(n):e&&(e.current=n),e}function R(e,n){var t=p.useState(function(){return{value:e,callback:n,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=n,t.facade}function $(e,n){return R(n||null,function(t){return e.forEach(function(r){return P(r,t)})})}var y=function(){return y=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},y.apply(this,arguments)};function N(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t}function ee(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,o;r<a;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))}function C(e){return e}function W(e,n){n===void 0&&(n=C);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(o){var u=n(o,r);return t.push(u),function(){t=t.filter(function(i){return i!==u})}},assignSyncMedium:function(o){for(r=!0;t.length;){var u=t;t=[],u.forEach(o)}t={push:function(i){return o(i)},filter:function(){return t}}},assignMedium:function(o){r=!0;var u=[];if(t.length){var i=t;t=[],i.forEach(o),u=t}var m=function(){var s=u;u=[],s.forEach(o)},d=function(){return Promise.resolve().then(m)};d(),t={push:function(s){u.push(s),d()},filter:function(s){return u=u.filter(s),t}}}};return a}function ne(e,n){return n===void 0&&(n=C),W(e,n)}function te(e){e===void 0&&(e={});var n=W(null);return n.options=y({async:!0,ssr:!1},e),n}var j=function(e){var n=e.sideCar,t=N(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw new Error("Sidecar medium not found");return p.createElement(r,y({},t))};j.isSideCarExport=!0;function re(e,n){return e.useMedium(n),j}function O(e,n){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},O(e,n)}function ae(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,O(e,n)}var T=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},l=new WeakMap,h=new WeakMap,g={},b=0,k=function(e){return e&&(e.host||k(e.parentNode))},I=function(e,n){return n.map(function(t){if(e.contains(t))return t;var r=k(t);return r&&e.contains(r)?r:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},z=function(e,n,t,r){var a=I(n,Array.isArray(e)?e:[e]);g[t]||(g[t]=new WeakMap);var o=g[t],u=[],i=new Set,m=new Set(a),d=function(c){!c||i.has(c)||(i.add(c),d(c.parentNode))};a.forEach(d);var s=function(c){!c||m.has(c)||Array.prototype.forEach.call(c.children,function(f){if(i.has(f))s(f);else{var v=f.getAttribute(r),_=v!==null&&v!=="false",x=(l.get(f)||0)+1,A=(o.get(f)||0)+1;l.set(f,x),o.set(f,A),u.push(f),x===1&&_&&h.set(f,!0),A===1&&f.setAttribute(t,"true"),_||f.setAttribute(r,"true")}})};return s(n),i.clear(),b++,function(){u.forEach(function(c){var f=l.get(c)-1,v=o.get(c)-1;l.set(c,f),o.set(c,v),f||(h.has(c)||c.removeAttribute(r),h.delete(c)),v||c.removeAttribute(t)}),b--,b||(l=new WeakMap,l=new WeakMap,h=new WeakMap,g={})}},oe=function(e,n,t){t===void 0&&(t="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=n||T(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),z(r,a,t,"aria-hidden")):function(){return null}},S="right-scroll-bar-position",w="width-before-scroll-bar",B="with-scroll-bars-hidden",D="--removed-body-scroll-bar-size",M,L=function(){if(M)return M;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function G(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=L();return n&&e.setAttribute("nonce",n),e}function Q(e,n){e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}function q(e){var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(e)}var H=function(){var e=0,n=null;return{add:function(t){e==0&&(n=G())&&(Q(n,t),q(n)),e++},remove:function(){e--,!e&&n&&(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},K=function(){var e=H();return function(n,t){p.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},V=function(){var e=K(),n=function(t){var r=t.styles,a=t.dynamic;return e(r,a),null};return n},F={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},J=function(e){var n=window.getComputedStyle(document.body),t=n[e==="padding"?"paddingLeft":"marginLeft"],r=n[e==="padding"?"paddingTop":"marginTop"],a=n[e==="padding"?"paddingRight":"marginRight"];return[E(t),E(r),E(a)]},U=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return F;var n=J(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},X=V(),Y=function(e,n,t,r){var a=e.left,o=e.top,u=e.right,i=e.gap;return t===void 0&&(t="margin"),`
  .`.concat(B,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([n&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(u,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(S,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(w,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(S," .").concat(S,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(w," .").concat(w,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(D,": ").concat(i,`px;
  }
`)},ie=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,o=p.useMemo(function(){return U(a)},[a]);return p.createElement(X,{styles:Y(o,!n,a,t?"":"!important")})};export{ie as R,ae as _,te as a,N as b,ne as c,y as d,ee as e,w as f,re as g,oe as h,O as i,V as s,$ as u,S as z};
//# sourceMappingURL=component-559fa000.js.map
