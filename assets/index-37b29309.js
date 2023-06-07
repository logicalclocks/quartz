import{r as u,t as g,a as i}from"./index-b4088f44.js";function f(n,o){u(2,arguments);var e=g(n),a=i(o);if(isNaN(a))return new Date(NaN);if(!a)return e;var r=e.getDate(),t=new Date(e.getTime());t.setMonth(e.getMonth()+a+1,0);var s=t.getDate();return r>=s?t:(e.setFullYear(t.getFullYear(),t.getMonth(),r),e)}export{f as a};
//# sourceMappingURL=index-37b29309.js.map
