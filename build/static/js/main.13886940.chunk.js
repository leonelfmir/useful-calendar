(this.webpackJsonpuseful_calendar=this.webpackJsonpuseful_calendar||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(11),i=n.n(c),d=(n(17),n(18),n(3));function o(e){var t=e.children;return Object(d.jsx)("div",{children:t})}var l=n(6),j=n(8),u=n(7),s=n(32),b=n(26),O=n(33),h=n(12);function v(e){var t=e.text,n=e.children,r={"data-tip":t};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",Object(l.a)(Object(l.a)({},r),{},{children:n})),Object(d.jsx)(h.a,{})]})}var y={container:{display:"flex",justifyContent:"center",height:"20px"},holiday:{border:"1px solid red",backgroundColor:"lightblue"},today:{border:"1px solid black",backgroundColor:"gray"}};function f(e){var t,n=e.date,r=e.daysToMark;if(null==n)return null;var a=null!=n?Object(s.a)(n,"d"):null,c=null!=n?null===r||void 0===r?void 0:r.find((function(e){return Object(b.a)(n,e.date)})):null,i=null!=c,o=Object(O.a)(n,new Date)?Object(l.a)(Object(l.a)({},y.container),y.today):i?Object(l.a)(Object(l.a)({},y.container),y.holiday):y.container,j=Object(d.jsx)("div",{style:o,children:a});return i?Object(d.jsx)(v,{text:null!==(t=null===c||void 0===c?void 0:c.description)&&void 0!==t?t:"",children:j}):j}var x=["week"];function p(e){var t=e.week,n=Object(u.a)(e,x),a=t.map((function(e,t){var a,c;return Object(d.jsx)("td",{children:Object(r.createElement)(f,Object(l.a)(Object(l.a)({},n),{},{key:null!==(c=null===e||void 0===e?void 0:e.toString())&&void 0!==c?c:t,date:e}))},null!==(a=null===e||void 0===e?void 0:e.toString())&&void 0!==a?a:t)}));return Object(d.jsx)("tr",{children:a})}var g=n(27),m=n(28),k=n(29),w=n(30),T=["date"],C={container:{display:"flex",flexDirection:"column",justifyContent:"center",border:"1px solid black",marginTop:"5px"},title:{display:"flex",height:"20px",justifyContent:"center",textTransform:"uppercase"}};function D(e){var t=e.date,n=Object(u.a)(e,T),a=function(e){for(var t=Object(g.a)(e),n=Object(j.a)(Array(6)).map((function(){return Object(j.a)(Array(7))})),r=0,a=0;r<t;r++){var c=Object(m.a)(e,r),i=Object(k.a)(c),d=i?6:Object(w.a)(c)-1;n[a][d]=c,a+=i?1:0}return n}(t);return Object(d.jsxs)("div",{style:C.container,children:[Object(d.jsx)("div",{style:C.title,children:Object(s.a)(t,"MMMM")}),Object(d.jsxs)("table",{boder:"1",children:[Object(d.jsx)(M,{}),Object(d.jsx)("tbody",{children:a.map((function(e,t){return Object(r.createElement)(p,Object(l.a)(Object(l.a)({},n),{},{key:t,week:e}))}))})]})]})}function M(){return Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:["Monday","Tuesday","Wesnesday","Thrusday","Friday","Saturday","Sunday"].map((function(e){return Object(d.jsx)("th",{children:e[0]},e)}))})})}var S=n(31),F=["year"],A={container:{display:"grid",gridTemplateColumns:"33% 34% 33%",gridTemplateRows:"25% 25% 25% 25%"}};function E(e){var t=e.year,n=Object(u.a)(e,F),a=new Date(t,0),c=Object(j.a)(Array(12).keys()).map((function(e){return Object(S.a)(a,e)}));return Object(d.jsx)("div",{style:A.container,children:c.map((function(e){return Object(r.createElement)(D,Object(l.a)(Object(l.a)({},n),{},{date:e,key:e.toString()}))}))})}var B=function(){var e=[{date:new Date(2021,10,25),description:"Thanksgiving"},{date:new Date(2021,10,26),description:"After Thanksgiving"},{date:new Date(2021,11,24),description:"Other"},{date:new Date(2021,11,27),description:"Other"},{date:new Date(2021,11,31),description:"Other"}];return Object(d.jsx)(o,{children:Object(d.jsx)(E,{year:2021,daysToMark:e})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),I()}},[[23,1,2]]]);
//# sourceMappingURL=main.13886940.chunk.js.map