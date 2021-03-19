(this["webpackJsonpwhac-a-mole"]=this["webpackJsonpwhac-a-mole"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(5),a=c.n(s),i=c(2),o=c(3),j=c(6),l={score:0,holeIndex:-1,start:!1};var u=Object(j.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE_SCORE":return Object(o.a)(Object(o.a)({},e),{},{score:e.score+1});case"SET_HOLE_INDEX":return Object(o.a)(Object(o.a)({},e),{},{holeIndex:t.holeIndex});case"SET_START":return Object(o.a)(Object(o.a)({},e),{},{start:t.start});case"SET_INITIAL_STATE":return Object(o.a)(Object(o.a)({},l),{},{start:!0});default:return e}})),d=(c(25),c(13)),b=c(1),O=function(e){var t=e.score;return Object(b.jsxs)("span",{className:"score",children:["Score: ",t]})},f=c(14),h=function(e){var t=e.time,c=Object(n.useState)(t),r=Object(f.a)(c,2),s=r[0],a=r[1],o=Object(i.c)((function(e){return e})),j=o.start,l=(o.score,Object(i.b)());return Object(n.useEffect)((function(){if(!s)return document.querySelector(".name-input-div").classList.toggle("active"),void l((e=!1,{type:"SET_START",start:e}));var e,t=setTimeout((function(){a((function(e){return e-1}))}),1e3);return function(){return clearInterval(t)}}),[s]),Object(b.jsx)("span",{children:j?"".concat(s):" "})},v=function(){var e=Object(i.b)();return Object(b.jsx)("div",{className:"mole",onClick:function(t){console.log(t),e({type:"INCREASE_SCORE"})}})},x=r.a.forwardRef((function(e,t){var c=e.index;return Object(b.jsx)("div",{ref:t,className:"hole hole".concat(c),children:Object(b.jsx)(v,{})})})),m=function(){var e=[Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)()],t=Object(i.c)((function(e){return e})),c=t.start,r=t.holeIndex,s=Object(i.b)(),a=function e(t){var c=Math.floor(Math.random()*t.length);return c===r?e(t):c},o=function(){var t,c,n=(t=200,c=1e3,Math.random()*(c-t)+t),r=a(e),i=e[r].current;i.classList.add("up"),setTimeout((function(){i.classList.remove("up"),s(function(e){return{type:"SET_HOLE_INDEX",holeIndex:e}}(r))}),n)};return Object(n.useEffect)((function(){c&&o()}),[r,c]),Object(b.jsx)("div",{className:"hole-list",children:Array(6).fill("").map((function(t,c){return Object(b.jsx)(x,{ref:e[c],index:c},c)}))})},p=function(){var e=function(e){e.stopPropagation();var t=document.querySelector(".leaderboard");switch(e.target.textContent){case"LEADERBOARD":t.classList.toggle("active");break;case"WHACK A MOLE!":t.classList.remove("active")}};return Object(b.jsx)("div",{className:"App-header",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"logo",onClick:e,children:"WHACK A MOLE!"}),Object(b.jsx)("li",{onClick:e,children:"LEADERBOARD"})]})})},S=(c(27),function(){var e=JSON.parse(localStorage.getItem("userData"))||[];return Object(b.jsxs)("div",{className:"leaderboard",children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"LEADERBOARD"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"Rank"}),Object(b.jsx)("div",{children:"Name"}),Object(b.jsx)("div",{children:"Score"})]}),Object(b.jsx)("hr",{}),e.sort((function(e,t){return t.score-e.score})).map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:t+1}),Object(b.jsx)("div",{children:e.id}),Object(b.jsx)("div",{children:e.score})]},"".concat(t).concat(e.id).concat(e.index))}))]})}),g=function(){var e=Object(i.c)((function(e){return e})).score,t=Object(i.b)();return Object(b.jsxs)("div",{className:"name-input-div",children:[Object(b.jsx)("span",{children:"Your Name"}),Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var n=c.target.querySelector("input").value,r=JSON.parse(localStorage.getItem("userData"))||[];r.push({id:n,score:e}),localStorage.setItem("userData",JSON.stringify(r)),c.target.reset(),document.querySelector(".name-input-div").classList.toggle("active"),t({type:"SET_START",start:!1}),document.querySelector(".leaderboard").classList.toggle("active")},children:[Object(b.jsx)("input",{type:"text"}),Object(b.jsx)("input",{type:"submit"})]})]})};var T=function(){var e=Object(i.c)((function(e){return e})),t=e.score,c=e.start,r=Object(i.b)(),s=Object(n.useRef)(null),a=function(){console.log("start!"),r({type:"SET_INITIAL_STATE"})},o=function(){console.log("stop!"),r({type:"SET_START",start:!1})};return Object(b.jsxs)("div",{className:"App",onClick:function(e){Object(d.a)(e.target.querySelectorAll(".leaderboard")).map((function(e){e.classList.remove("active")}))},children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"game",children:[Object(b.jsxs)("div",{className:"game-info",children:[Object(b.jsx)("div",{className:"timer-div",children:c?Object(b.jsx)(h,{time:10}):""}),Object(b.jsx)("div",{className:"score-div",children:Object(b.jsx)(O,{score:t})})]}),Object(b.jsx)(m,{}),Object(b.jsx)("button",{ref:s,onClick:function(e){e.stopPropagation(),"START!"===e.target.textContent?(e.target.textContent="STOP!",a()):(e.target.textContent="START!",o())},children:c?"STOP!":"START!"})]}),Object(b.jsx)(S,{}),Object(b.jsx)(g,{})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{store:u,children:Object(b.jsx)(T,{})})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.6daf1163.chunk.js.map