(this["webpackJsonpalexlecusay.tech"]=this["webpackJsonpalexlecusay.tech"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},31:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),r=i(12),o=i.n(r),a=(i(26),i(16)),s=i(17),j=i(21),d=i(20),l=(i(27),i(8)),h=i(2),b=(i(28),i.p+"static/media/Background.8b473a6d.mp4"),x=i(5),u=(i(29),i(0));var m=function(){var e=Object(c.useState)(0),t=Object(x.a)(e,2),i=t[0],n=t[1];return Object(u.jsx)("div",{id:"clickMe",children:Object(u.jsxs)("div",{id:"btnNice",children:[Object(u.jsx)("h1",{id:"heading",children:Object(u.jsxs)("center",{children:["Click the button! clicked:",i]})}),Object(u.jsx)("center",{children:Object(u.jsx)("button",{id:"btn",onClick:function(){n(i+1)},children:"Click me"})})]})})},p=(i(31),i(15));var O=function(e){var t=e.value,i=e.onClick,c=t?"squares ${value}":"squares";return Object(u.jsx)("button",{className:c,onClick:i,children:t})},g=function(e){var t=e.squares,i=e.onClick;return Object(u.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(u.jsx)(O,{value:e,onClick:function(){return i(t)}},t)}))})},f=function(){var e=Object(c.useState)([Array(9).fill(null)]),t=Object(x.a)(e,2),i=t[0],n=t[1],r=Object(c.useState)(0),o=Object(x.a)(r,2),a=o[0],s=o[1],j=Object(c.useState)(!0),d=Object(x.a)(j,2),l=d[0],h=d[1],b=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=0;i<t.length;i++){var c=Object(x.a)(t[i],3),n=c[0],r=c[1],o=c[2];if(e[n]&&e[n]===e[r]&&e[n]===e[o])return e[n]}return null}(i[a]),m=l?"X":"O";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("center",{children:Object(u.jsx)("h1",{id:"ticTac",children:"React Tic Tac Toe With Hooks"})}),Object(u.jsx)(g,{squares:i[a],onClick:function(e){var t=i.slice(0,a+1),c=t[a],r=Object(p.a)(c);b||r[e]||(r[e]=m,n([].concat(Object(p.a)(t),[r])),s(t.length),h(!l))}}),Object(u.jsx)("div",{className:"info-wrapper",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:b?"Winner: "+b:"Next Player: "+m}),i.map((function(e,t){}))]})})]})},v=function(){return Object(u.jsx)("div",{id:"styleTicTacToe",children:Object(u.jsx)(f,{})})},w=function(){return Object(u.jsxs)("section",{id:"fullPage",children:[Object(u.jsxs)("div",{id:"banner",children:[Object(u.jsx)("div",{id:"topPage",children:"Full-stack Developer"}),Object(u.jsxs)("div",{id:"socialBtn",children:[Object(u.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/alex-lecusay-0a51a5217/",children:Object(u.jsx)("img",{id:"icon",width:"50px",src:"/PortfolioDemo/img/linkedInIcon.png"})}),Object(u.jsx)("a",{target:"_blank",href:"https://github.com/AlexLecusay?tab=repositories",children:Object(u.jsx)("img",{id:"icon",width:"50px",src:"/PortfolioDemo/img/gitHubIcon.png"})}),Object(u.jsx)("a",{target:"_blank",href:"https://twitter.com/AlexxIzNasty",children:Object(u.jsx)("img",{width:"50px",id:"icon",src:"/PortfolioDemo/img/twitterIcon.png"})}),Object(u.jsx)("a",{target:"_blank",href:"https://www.twitch.tv/alexxiznasty",children:Object(u.jsx)("img",{width:"50px",id:"icon",src:"/PortfolioDemo/img/twitchIcon.png"})})]})]}),Object(u.jsxs)("div",{id:"center",children:[Object(u.jsxs)("div",{id:"centerLeft",children:[Object(u.jsx)("h2",{children:"Welcome to my portfolio"}),Object(u.jsxs)("div",{id:"centerCenter",children:[Object(u.jsx)("p",{children:"--____ my name is Alex and i am a Computer Science student at Florida International University. This is my webpage and portfolio, follow the \u2192 to see more about what ive done and like!"}),Object(u.jsx)("img",{id:"moveMe",width:"100px",src:"/PortfolioDemo/img/welcomeMe.png"})]})]}),Object(u.jsx)("img",{id:"arrow",width:"100px",height:"100px",src:"/PortfolioDemo/img/arrowIcon.png"}),Object(u.jsx)("div",{children:Object(u.jsx)(m,{})})]}),Object(u.jsxs)("div",{id:"code",children:[Object(u.jsx)("img",{id:"codeInsertFix",src:"/PortfolioDemo/img/codeInsert.png"}),Object(u.jsx)("img",{id:"arrow2",width:"100px",height:"100px",src:"/PortfolioDemo/img/arrowIcon.png"})]}),Object(u.jsxs)("div",{id:"ticTacToe",children:[Object(u.jsx)(v,{}),Object(u.jsx)("img",{id:"arrow3",width:"100px",height:"100px",src:"/PortfolioDemo/img/arrowIcon.png"})]}),Object(u.jsx)("img",{id:"spaceMe",width:"150px",src:"/PortfolioDemo/img/spaceMe.png"}),Object(u.jsxs)("div",{id:"fixLatinXSection",children:[Object(u.jsxs)("div",{id:"LatinXTech",children:[Object(u.jsx)("h2",{children:"LatinX.tech Project"}),Object(u.jsx)("p",{id:"centerCenter",children:"-A full stack website built during the 2021 ShellHacks Hackathon."}),Object(u.jsx)("p",{id:"textCenter",children:"-Front end: React, JavaScript, Css, Html"}),Object(u.jsx)("p",{id:"textCenter",children:"-Back end: MongoDB, Express,Node.js"}),Object(u.jsx)("p",{id:"textCenter",children:"-This project has a full quiz that tests your knowledge on various LatinX topics. Which upon completion will display information of the LatinX tech person of the month, with a small biography. Also included is an interactive button mini game feature, and a subscription box that generates an automated email to you every month, with the new LatinX member of the month."})]}),Object(u.jsx)("img",{id:"arrow4",width:"100px",height:"100px",src:"/PortfolioDemo/img/arrowIcon.png"}),Object(u.jsx)("a",{target:"_blank",href:"https://github.com/AlexLecusay/LatinX.tech",children:Object(u.jsx)("img",{id:"latinImg",src:"/PortfolioDemo/img/latinImg.jpg"})})]}),Object(u.jsxs)("div",{id:"fixSnakeSection",children:[Object(u.jsx)("a",{target:"_blank",href:"https://github.com/AlexLecusay/SnakeGame",children:Object(u.jsx)("img",{id:"snakeImg",src:"/PortfolioDemo/img/snakeImg.jpg"})}),Object(u.jsx)("img",{id:"arrow5",width:"100px",height:"100px",src:"/PortfolioDemo/img/arrowIcon2.png"}),Object(u.jsxs)("div",{id:"Snake",children:[Object(u.jsx)("h2",{children:"Snake Project"}),Object(u.jsx)("p",{id:"centerCenter",children:"-For this webpage i built a Snake game "}),Object(u.jsx)("p",{id:"textCenter",children:"-Front end: React, JavaScript, Css, Html"}),Object(u.jsx)("p",{id:"textCenter",children:"-In this project you play the world famous Snake game, where you increasingly become bigger for every apple eaten. But be careful not to take a bite out of yourself!"})]})]}),Object(u.jsx)("video",{id:"backgroundVid",autoPlay:!0,loop:!0,muted:!0,children:Object(u.jsx)("source",{src:b,type:"video/mp4"})}),Object(u.jsx)("div",{id:"stayAway"})]})},k=function(e){Object(j.a)(i,e);var t=Object(d.a)(i);function i(){return Object(a.a)(this,i),t.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/",component:w}),Object(u.jsx)(h.a,{exact:!0,path:"/projects",component:v})]})})}}]),i}(c.Component),y=k,C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,41)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;i(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),C()}},[[40,1,2]]]);
//# sourceMappingURL=main.1076a718.chunk.js.map