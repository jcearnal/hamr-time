(()=>{"use strict";var e={663:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var s=l(526),r=l(885),n=l(557);const i=l.p+"static/media/background_img.4ea4b3a391be6754c21c.png";const u=function(){var e=[{level:1,shuttles:7,speed:8,shuttleTime:9},{level:2,shuttles:8,speed:9,shuttleTime:8},{level:3,shuttles:8,speed:9.5,shuttleTime:7.58},{level:4,shuttles:9,speed:10,shuttleTime:7.2},{level:5,shuttles:9,speed:10.5,shuttleTime:6.86},{level:6,shuttles:10,speed:11,shuttleTime:6.55},{level:7,shuttles:10,speed:11.5,shuttleTime:6.26},{level:8,shuttles:11,speed:12,shuttleTime:6},{level:9,shuttles:11,speed:12.5,shuttleTime:5.76},{level:10,shuttles:11,speed:13,shuttleTime:5.54},{level:11,shuttles:12,speed:13.5,shuttleTime:5.33}],t=(0,s.useState)({level:1,iteration:1}),i=(0,r.default)(t,2),u=i[0],a=i[1],o=(0,s.useState)(e[0].shuttleTime),c=(0,r.default)(o,2),d=c[0],h=c[1],v=(0,s.useState)(0),f=(0,r.default)(v,2),p=(f[0],f[1]),m=(0,s.useState)(0),T=(0,r.default)(m,2),x=T[0],b=T[1],g=(0,s.useState)(!1),j=(0,r.default)(g,2),S=j[0],y=j[1],k=(0,s.useState)(!1),O=(0,r.default)(k,2),C=O[0],w=O[1];(0,s.useEffect)((function(){var t;return S&&0===x&&(t=setInterval((function(){h((function(l){return l<=0?(clearInterval(t),I(),e[u.level-1].shuttleTime):l-.01}))}),10)),function(){return clearInterval(t)}}),[S,x,u]),(0,s.useEffect)((function(){var t;return S&&x>0?t=setInterval((function(){M(x),b((function(e){return e-1}))}),1e3):0===x&&(clearInterval(t),h(e[u.level-1].shuttleTime),M(u.level)),function(){return clearInterval(t)}}),[x,S,u]);var I=function(){var t=u.level,l=u.iteration;if(11===t&&12===l)return console.log("Maximum points reached. Test Completed"),void N();l===e[t-1].shuttles?t===e.length?console.log("Test Completed"):(a({level:t+1,iteration:1}),h(e[t].shuttleTime),p((function(l){return l+e[t-1].shuttleTime}))):(a({level:t,iteration:l+1}),h(e[t-1].shuttleTime),p((function(l){return l+e[t-1].shuttleTime})))},M=function(e,t){var s;0===t||(s=l(866)),new Audio(s).play()},N=function(){y(!1),w(!0)};return(0,n.jsxs)("div",{className:"test-admin",style:{textAlign:"center"},children:[(0,n.jsx)("h1",{children:"HAMR Time"}),x>0?(0,n.jsxs)("p",{children:["Countdown: ",x]}):(0,n.jsxs)(n.Fragment,{children:[S&&!C&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"progress-bar",children:(0,n.jsx)("div",{className:"progress-bar-fill",style:{width:d/e[u.level-1].shuttleTime*100+"%"}})}),(0,n.jsx)("h1",{className:"green",children:d.toFixed(2)}),(0,n.jsx)("p",{children:"Current Shuttle:"}),(0,n.jsxs)("h3",{children:["Level ",u.level,", Shuttle ",u.iteration]}),(0,n.jsx)("button",{onClick:N,children:"Stop Test"})]}),!S&&!C&&(0,n.jsx)("button",{onClick:function(){y(!0),a({level:1,iteration:1}),p(0),h(e[0].shuttleTime),b(3)},children:"Start Test"}),C&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:C?"test-stopped":"",children:"Test Complete!"}),(0,n.jsx)("p",{children:"Great work!"}),(0,n.jsxs)("p",{children:["Final Score: ",(0,n.jsxs)("strong",{children:["Level ",u.level,", Shuttle ",u.iteration-1]})]}),(0,n.jsxs)("p",{children:["Total Shuttles Completed: ",u.level*(u.iteration-1)]}),(0,n.jsx)("button",{onClick:function(){y(!1),w(!1),a({level:1,iteration:1}),p(0),h(e[0].shuttleTime),b(0)},children:"Restart Test"})]})]})]})};var a={container:{display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url("+i+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center top",minHeight:"100vh",width:"100%"}};function o(){return(0,n.jsx)("div",{style:a.container,children:(0,n.jsx)(u,{})})}},866:(e,t,l)=>{e.exports=l.p+"static/media/samplesound.d00fd8d48c5ffeebc4c8.wav"}},t={};function l(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,l),n.exports}l.m=e,(()=>{var e=[];l.O=(t,s,r,n)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,r,n]=e[c],u=!0,a=0;a<s.length;a++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](s[a])))?s.splice(a--,1):(u=!1,n<i&&(i=n));if(u){e.splice(c--,1);var o=r();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,r,n]}})(),l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var s in t)l.o(t,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/hamr-time/",(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,s)=>{var r,n,[i,u,a]=s,o=0;if(i.some((t=>0!==e[t]))){for(r in u)l.o(u,r)&&(l.m[r]=u[r]);if(a)var c=a(l)}for(t&&t(s);o<i.length;o++)n=i[o],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(c)},s=self.webpackChunkweb=self.webpackChunkweb||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=l.O(void 0,[553],(()=>l(601)));s=l.O(s)})();
//# sourceMappingURL=main.678065d7.js.map