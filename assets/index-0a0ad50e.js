import{r as u,t as g,a as i}from"./index-86d68b50.js";function f(n,o){u(2,arguments);var e=g(n),a=i(o);if(isNaN(a))return new Date(NaN);if(!a)return e;var r=e.getDate(),t=new Date(e.getTime());t.setMonth(e.getMonth()+a+1,0);var s=t.getDate();return r>=s?t:(e.setFullYear(t.getFullYear(),t.getMonth(),r),e)}export{f as a};
//# sourceMappingURL=index-0a0ad50e.js.map
