import{j as g,F as k}from"./index.esm-35888c3f.js";import{r as i}from"./index-8db94870.js";import"./theme-c699ef82.js";function j(){return j=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},j.apply(this,arguments)}var R=function(e,r,t){return e=e<=t?e:t,e=e>=r?e:r,e},G=function(){var e=!1,r=[],t=function a(){e=!0;var s=r.shift();if(s)return s(a);e=!1},u=function(){e=!1,r=[]},c=function(s){r.push(s),!e&&r.length===1&&t()};return{clear:u,enqueue:c}},I=function(){var e,r=function(){e&&window.cancelAnimationFrame(e)},t=function(c,a){var s,l,y=function b(h){if(l=l||h,s=h-l,s>a){c();return}e=window.requestAnimationFrame(b)};e=window.requestAnimationFrame(y)};return{cancel:r,schedule:t}},M=function(e){var r=0;return e>=0&&e<.2?r=.1:e>=.2&&e<.5?r=.04:e>=.5&&e<.8?r=.02:e>=.8&&e<.99&&(r=.005),R(e+r,0,.994)},C=function(e){i.useEffect(e,[])},Q=function(e){return++e%1e6},z=function(){var e=i.useState(0),r=e[1];return i.useCallback(function(){return r(Q)},[])},H=function(e){e===void 0&&(e={});var r=z(),t=i.useRef(j({},e)),u=i.useCallback(function(){return t.current},[]),c=i.useCallback(function(a){a&&(Object.assign(t.current,a),r())},[]);return[u,c]},J=function(){var e=i.useRef(!0);return e.current?(e.current=!1,!0):e.current},N=function(e,r){var t=J();i.useEffect(function(){if(!t)return e()},r)},T=function(){},P={isFinished:!0,progress:0,sideEffect:T},K=function(e){var r=e===void 0?{}:e,t=r.animationDuration,u=t===void 0?200:t,c=r.incrementDuration,a=c===void 0?800:c,s=r.isAnimating,l=s===void 0?!1:s,y=r.minimum,b=y===void 0?.08:y,h=H(P),d=h[0],p=h[1],f=i.useRef(null),v=i.useRef(null);C(function(){f.current=G(),v.current=I()});var q=i.useCallback(function(){var o,m;(o=v.current)==null||o.cancel(),(m=f.current)==null||m.clear()},[]),F=i.useCallback(function(o){var m;if(o=R(o,b,1),o===1){var x,D;q(),(x=f.current)==null||x.enqueue(function(_){p({progress:o,sideEffect:function(){var E;return(E=v.current)==null?void 0:E.schedule(_,u)}})}),(D=f.current)==null||D.enqueue(function(){p({isFinished:!0,sideEffect:q})});return}(m=f.current)==null||m.enqueue(function(_){p({isFinished:!1,progress:o,sideEffect:function(){var E;return(E=v.current)==null?void 0:E.schedule(_,u)}})})},[u,q,b,f,p,v]),S=i.useCallback(function(){F(M(d().progress))},[d,F]),$=i.useCallback(function(){var o=function m(){var x;S(),(x=f.current)==null||x.enqueue(function(D){var _;(_=v.current)==null||_.schedule(function(){m(),D()},a)})};o()},[a,f,v,S]),U=i.useRef(T),V=d().sideEffect;return i.useEffect(function(){U.current=S}),C(function(){return l&&$(),q}),N(function(){d().sideEffect()},[d,V]),N(function(){l?p(j({},P,{sideEffect:$})):F(1)},[l,F,p,$]),{animationDuration:u,isFinished:d().isFinished,progress:d().progress}};const w=({animationDuration:n,progress:e,variant:r})=>g.jsx(k,{variant:r,sx:{position:"relative",width:`${e*100}%`,transition:`width ${n}ms linear`,height:"8px"},children:g.jsx(k,{variant:r,sx:{position:"absolute",width:"100%",height:"2px",top:"3px"}})});try{w.displayName="Bar",w.__docgenInfo={description:"",displayName:"Bar",props:{animationDuration:{defaultValue:null,description:"",name:"animationDuration",required:!0,type:{name:"number"}},progress:{defaultValue:null,description:"",name:"progress",required:!0,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"string"}}}}}catch{}const A=({children:n})=>g.jsx(k,{sx:{position:"relative",height:"8px",width:"100%"},children:n});try{A.displayName="Container",A.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}const O=({variant:n="perf.green",animationDuration:e=200,incrementDuration:r=800,isAnimating:t=!1,minimum:u=.08})=>{const{animationDuration:c,progress:a}=K({animationDuration:e,incrementDuration:r,isAnimating:t,minimum:u});return g.jsxs(A,{children:[g.jsx(w,{variant:n,animationDuration:c,progress:a}),g.jsx(w,{variant:"perf.gray",animationDuration:c,progress:1-a})]})};try{O.displayName="AnimatedProgress",O.__docgenInfo={description:"",displayName:"AnimatedProgress",props:{variant:{defaultValue:{value:"perf.green"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"perf.black"'},{value:'"perf.green"'},{value:'"perf.orange"'}]}}}}}catch{}export{O as A};
//# sourceMappingURL=AnimatedProgress-54bec692.js.map
