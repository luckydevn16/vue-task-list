(function(e){function t(t){for(var a,n,o=t[0],l=t[1],r=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&d.push(c[n][0]),c[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);i&&i(t);while(d.length)d.shift()();return s.push.apply(s,r||[]),A()}function A(){for(var e,t=0;t<s.length;t++){for(var A=s[t],a=!0,o=1;o<A.length;o++){var l=A[o];0!==c[l]&&(a=!1)}a&&(s.splice(t--,1),e=n(n.s=A[0]))}return e}var a={},c={app:0},s=[];function n(t){if(a[t])return a[t].exports;var A=a[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,n),A.l=!0,A.exports}n.m=e,n.c=a,n.d=function(e,t,A){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(n.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(A,a,function(t){return e[t]}.bind(null,a));return A},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-task-list/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var r=0;r<o.length;r++)t(o[r]);var i=l;s.push([0,"chunk-vendors"]),A()})({0:function(e,t,A){e.exports=A("56d7")},"56d7":function(e,t,A){"use strict";A.r(t);var a=A("7a23"),c=A("e359"),s=A.n(c),n=A("f9a7"),o=A.n(n),l=A("c8e4"),r=A.n(l);const i={class:"container"},u=Object(a["e"])("h2",{class:"app-heading"},"My Task List",-1),d=Object(a["e"])("p",{class:"author"},[Object(a["f"])("Made by "),Object(a["e"])("a",{href:"https://redhatdev16.github.io/portfolio",target:"_blank"},"redhatdev16")],-1),b={class:"input-wrapper"},g={class:"actions-wrapper"},p=Object(a["e"])("button",{class:"btn add"},[Object(a["e"])("img",{src:s.a,alt:"add",class:"btn-icon"})],-1),f={class:"btn-group"},O=Object(a["e"])("img",{src:o.a,alt:"add",class:"btn-icon"},null,-1),m=Object(a["e"])("img",{src:r.a,alt:"add",class:"btn-icon"},null,-1),j=Object(a["e"])("div",{class:"divider"},null,-1),v={class:"task-list"},w=["onClick"],k={class:"task-card-content"},C={class:"task-number"},h={class:"task-card-actions"},y=["onClick"],B=Object(a["e"])("img",{src:r.a,alt:"add",class:"btn-icon"},null,-1),S=[B];function E(e,t,A,c,s,n){return Object(a["i"])(),Object(a["d"])("div",i,[u,d,Object(a["e"])("form",{onSubmit:t[3]||(t[3]=Object(a["o"])(e=>c.addNewTask(),["prevent"])),class:"task-form"},[Object(a["e"])("div",b,[Object(a["n"])(Object(a["e"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>c.newTask=e),placeholder:"Enter the task"},null,512),[[a["m"],c.newTask]])]),Object(a["e"])("div",g,[p,Object(a["e"])("div",f,[Object(a["e"])("button",{class:"btn mark",onClick:t[1]||(t[1]=e=>c.markAll())},[O,Object(a["f"])(" ALL ")]),Object(a["e"])("button",{class:"btn delete",onClick:t[2]||(t[2]=e=>c.deleteAll())},[m,Object(a["f"])(" ALL ")])])])],32),j,Object(a["e"])("div",v,[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["k"])(c.tasks,e=>(Object(a["i"])(),Object(a["d"])("div",{class:Object(a["g"])(["task-card",{completed:e.isCompleted}]),key:e.id,onClick:t=>c.taskIsCompleted(e)},[Object(a["e"])("div",k,[Object(a["e"])("div",C,Object(a["l"])(c.tasks.indexOf(e)+1),1),Object(a["e"])("p",{class:Object(a["g"])(["task-text",{"line-through":e.isCompleted}])},Object(a["l"])(e.text),3)]),Object(a["e"])("div",h,[e.isCompleted?(Object(a["i"])(),Object(a["d"])("button",{key:0,class:"btn delete",onClick:t=>c.deleteTask(e)},S,8,y)):Object(a["c"])("",!0)])],10,w))),128))])])}A("14d9");var J={name:"App",setup(){const e=Object(a["j"])(""),t=Object(a["j"])([]);function A(){e.value.trim()&&(t.value.push({id:Date.now(),text:e.value,isCompleted:!1}),e.value="",localStorage.setItem("myTasks",JSON.stringify(t.value)))}function c(e){e.isCompleted=!e.isCompleted,localStorage.setItem("myTasks",JSON.stringify(t.value))}function s(e){t.value=t.value.filter(t=>t!=e)}function n(){t.value.forEach(e=>{e.isCompleted=!0})}function o(){t.value.forEach(e=>{s(e)}),localStorage.removeItem("myTasks")}return Object(a["h"])(()=>{if(localStorage.getItem("myTasks")){let e=JSON.parse(localStorage.getItem("myTasks"));e.forEach(e=>{t.value.push(e)})}}),{newTask:e,tasks:t,addNewTask:A,taskIsCompleted:c,deleteTask:s,markAll:n,deleteAll:o}}},R=(A("61ec"),A("6b0d")),Y=A.n(R);const T=Y()(J,[["render",E]]);var Q=T;Object(a["b"])(Q).mount("#app")},"61ec":function(e,t,A){"use strict";A("b6a8")},b6a8:function(e,t,A){},c8e4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAdcAAAHXAYySCGgAAANCSURBVHhe7ZvdjtJQEMdBCJQ0gTsTuCC8h/oaeusDuL6CvoEf+wreaGJ8AL1SjAm8gfKVED5K2GiLuHoDzrTDumA/psvp5sy2v6SZOeT0dPo/0/Z0GnJJst1uG7ZtPxyPxyPwYwH7DHBfcBs0nCww8Nls9sw9myOgMeSJQLOnBByLhpUBxNy4StoHgZcDmESyIE9WKRDsfTCvvdY/IJ1f1uv1z9T0BfrcgT6PqXmZB/l8/g35eoMC4MxdZjqdvgATOYvYB/qeujvtg6Iq5xbZxMGZhxmcUjMQ7AN9P1EzcSIvAVAeZ+2u12JzG7ZTz73gBLaF50Zy7P472hzRA8GTHwwGX9wEFAjE3gZztZsn7rhYLL67IwnGsqwzMPFEwB0kz/whYZngew+Azr6PMeH4Pkav7SmgK5kAZFNLJgDZ1JIJQPaQ9nA4vLb1eNLAOuAjmLbX2ifwXYAWDnHfAXTluHeCjBtMUq/DuhCZ+hwBJL8XRJbRsscg2dSSiADz+fw5VoCpGYjqfomA9wDY2Oyqv7gFVHddVPcL4PhKMgzScBzn3BuPxcVB0fd+8kV1vz1s28aYI0thkZcAPkZ6vZ64VVS/359wVn+se8Bms/lNrhgg5j/khsISAFKJNZhOcCeNmwHn5IoBJo0VM/cx+IusGOD6Z8XMEgAG+0muJNZkQ+EKwBpMJ7gxswQoFAriMqBYLK7IDYUlAHcwneBOGkuAUqkkTgDDMBxyQ2EJYJqmTa4YIOYf5IbCEqBarYoToFarqcsAEEDcOgAyQOlC6MaSCUA2tWQCkE0tmQBkUwtXgPZqtRJTFnMcB2P1/Rx+CEsALC5KKoxyC6II+xKQVBjlFkQRtgCSCqNxJitOBogpjHILoghbAID1QoT/+MAvMriBf49+/g/V/Q5QP1mdTucdBMECv+dxvuOp7rcDY6Ww1dHtdl/R+NqDsVLYkbAvAUmF0Tg1TLYAhmEsydWecrl8Rm4kbAGazeY3crWn1Wp9JTcStgCmab5fr9farwVwyV6pVD5QMxK2ALi0tCzrKTW1ZblcPuEug2MDN9jGaDR6691r9YNii/cHqbjgASaTyQlkw9I9qgZgLLBIegRuzJPP5f4C4bCcI4sizLcAAAAASUVORK5CYII="},e359:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAYIAAAGCARcdOD0AAAF9SURBVHhe7ZtBSsNAFIYz2XXZLgRzFs9RsKg3cK/n8ARexJUnULtOikkXHmBKICW+l/l3Cm2hLZr//yB8LyGzeD+BtJmZ7Fz0fV/EGG/WhtW/0jRN7fdYWWDYeGjbdpHa3E3XddcYNg6sp6Isy2VqbzdVVX2YxvMUWDPzobPDmGP4SclhWhQATIsCgGlRADAtCgCmRQHAtCgAmBYFANOiAGBaFABMiwKAaQnw8OnadJXOjs6FHU+p3Jt7O75SeXReQwjrofLGfdLikO/2/x2fd/DJFyuLEGO8m0wmz0MaZGw2m9vgc3WXBq5RYa03wR8JnFOi1yBMiwKAaVEA/ipATYcvycmn0+kDzumYzWaPuf0KfNlut4vVarXE9dFjvb57z967/gydAwtXa4T+KgoApkUBwLQoAJgWBQDTogBgWhQATIsCgGlRADAtCgCmRQHA4pT0fV9gO+xe2L1vpnFtoMaanL0Y3eZpx/oats/7fFxq8yd1XX+ed/t8ln0DmMS+6iOfaBsAAAAASUVORK5CYII="},f9a7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAiEAAAIhAT4REJMAAAKwSURBVHhe7Zu7jtpAFIadiCaigNr7KnmOKH2qdCm22VTbp46ipEuZJ0iXKmXeYCVAXJaLiLgESAGSc/5oZmXDMfgyY5/B/qWPMxy0aP9PK2EQ+ywIAq/Kea5mZVMLULOyqQWoWdlcqwCfeKXm2VydgN1ud9Pv93/Q8dtqtXrodDp3dI4XgeuAa2G73d4sl8sdnSMZjUYfafjEyc+cLFwlrrzOYDD4RONEQuSOq1wqr8NJiDyRiyQtrzMcDj/TeJJw8oQukba8TlgC+8QukLW8jpbg5LtBvNTt9/uHVqv1Qq0yhV4dvjgnwFR5HacuhEyXR5wRYKP8fD5fOiHARnmk0Wjcihdgqzy9irxvt9vfRQuwWb7ZbH6l46NYAUWUx32RAooqjyQRkPjDBRMpsvz/4EIoBp/ePb2bTqe/6Rx0u91f2KnHrEC/ZK7L27hsNps7GuzvfrJQ+JPJ5APNSGaz2YKGFQlllAfcki2vY0NCWeXB8eJseR2TEsosD8J3EpXXMSGh7PJAH1KV18kjQUJ5gJtM5XWySJBSHni9Xu+WDrmSRoKk8sBbr9d/6ZA7SSRIKw9wYyznJEgsD7zFYvGHDsbCSZBaHnh0qfuWDkYTliC5PMCNT38F9zSNBhIOh8NryeWBPliRYCMmy4PwHfESTJcHxwuxEmyUB9xSnARb5QG7JMRIsFkesEtF6RJslwfsMkRpEoooD9jlEYVLKKo8YJcMhUkosjxglzFYl1B0ecAuz2BNQhnlAbu8gHEJZZUH7DIBxiSUWR6wy4TkllB2ecAuU5BZgoTygF2mJLUEKeUBu8xAYgmSygN2mZGLEqSVB+wyB7ESJJYH7DInPj5oJeZ0Dsbj8YSkvMFePS4Km98UxTdKXhI/iei3MgSl/s9RNSubWoCalU0tQM2KxvP+ARyEdWOoEAtIAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.77f7bfc1.js.map