import{t as c,c as s}from"./format-d69e34bd.js";function f(n,o){const t=c(n);if(isNaN(o))return s(n,NaN);if(!o)return t;const r=t.getDate(),e=s(n,t.getTime());e.setMonth(t.getMonth()+o+1,0);const a=e.getDate();return r>=a?e:(t.setFullYear(e.getFullYear(),e.getMonth(),r),t)}export{f as a};
