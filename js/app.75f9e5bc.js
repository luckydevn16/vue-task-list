(function(e){function t(t){for(var a,s,l=t[0],o=t[1],r=t[2],u=0,d=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);i&&i(t);while(d.length)d.shift()();return n.push.apply(n,r||[]),A()}function A(){for(var e,t=0;t<n.length;t++){for(var A=n[t],a=!0,l=1;l<A.length;l++){var o=A[l];0!==c[o]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=A[0]))}return e}var a={},c={app:0},n=[];function s(t){if(a[t])return a[t].exports;var A=a[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,s),A.l=!0,A.exports}s.m=e,s.c=a,s.d=function(e,t,A){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(s.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(A,a,function(t){return e[t]}.bind(null,a));return A},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-task-list/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var i=o;n.push([0,"chunk-vendors"]),A()})({0:function(e,t,A){e.exports=A("56d7")},"0bab":function(e,t,A){},"56d7":function(e,t,A){"use strict";A.r(t);var a=A("7a23"),c=A("e359"),n=A.n(c),s=A("f9a7"),l=A.n(s),o=A("c8e4"),r=A.n(o);const i={class:"container"},u=Object(a["e"])("h2",{class:"app-heading"},"My Task List",-1),d=Object(a["e"])("p",{class:"author"},[Object(a["f"])("Made by "),Object(a["e"])("a",{href:"https://luckydevn16.github.io/portfolio",target:"_blank"},"luckydevn16")],-1),b={class:"input-wrapper"},g={class:"actions-wrapper"},p=Object(a["e"])("button",{class:"btn add"},[Object(a["e"])("img",{src:n.a,alt:"add",class:"btn-icon"})],-1),f={class:"btn-group"},O=Object(a["e"])("img",{src:l.a,alt:"add",class:"btn-icon"},null,-1),m=Object(a["e"])("img",{src:r.a,alt:"add",class:"btn-icon"},null,-1),j=Object(a["e"])("div",{class:"divider"},null,-1),v={class:"task-list"},k=["onClick"],w={class:"task-card-content"},y={class:"task-number"},C={class:"task-card-actions"},B=["onClick"],h=Object(a["e"])("img",{src:r.a,alt:"add",class:"btn-icon"},null,-1),S=[h];function E(e,t,A,c,n,s){return Object(a["i"])(),Object(a["d"])("div",i,[u,d,Object(a["e"])("form",{onSubmit:t[3]||(t[3]=Object(a["o"])(e=>c.addNewTask(),["prevent"])),class:"task-form"},[Object(a["e"])("div",b,[Object(a["n"])(Object(a["e"])("input",{type:"text",class:"input","onUpdate:modelValue":t[0]||(t[0]=e=>c.newTask=e),placeholder:"Enter the task"},null,512),[[a["m"],c.newTask]])]),Object(a["e"])("div",g,[p,Object(a["e"])("div",f,[Object(a["e"])("button",{class:"btn mark",onClick:t[1]||(t[1]=e=>c.markAll())},[O,Object(a["f"])(" ALL ")]),Object(a["e"])("button",{class:"btn delete",onClick:t[2]||(t[2]=e=>c.deleteAll())},[m,Object(a["f"])(" ALL ")])])])],32),j,Object(a["e"])("div",v,[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["k"])(c.tasks,e=>(Object(a["i"])(),Object(a["d"])("div",{class:Object(a["g"])(["task-card",{completed:e.isCompleted}]),key:e.id,onClick:t=>c.taskIsCompleted(e)},[Object(a["e"])("div",w,[Object(a["e"])("div",y,Object(a["l"])(c.tasks.indexOf(e)+1),1),Object(a["e"])("p",{class:Object(a["g"])(["task-text",{"line-through":e.isCompleted}])},Object(a["l"])(e.text),3)]),Object(a["e"])("div",C,[e.isCompleted?(Object(a["i"])(),Object(a["d"])("button",{key:0,class:"btn delete",onClick:t=>c.deleteTask(e)},S,8,B)):Object(a["c"])("",!0)])],10,k))),128))])])}A("14d9");var J={name:"App",setup(){const e=Object(a["j"])(""),t=Object(a["j"])([]);function A(){e.value.trim()&&(t.value.push({id:Date.now(),text:e.value,isCompleted:!1}),e.value="",localStorage.setItem("myTasks",JSON.stringify(t.value)))}function c(e){e.isCompleted=!e.isCompleted,localStorage.setItem("myTasks",JSON.stringify(t.value))}function n(e){t.value=t.value.filter(t=>t!=e)}function s(){t.value.forEach(e=>{e.isCompleted=!0})}function l(){t.value.forEach(e=>{n(e)}),localStorage.removeItem("myTasks")}return Object(a["h"])(()=>{if(localStorage.getItem("myTasks")){let e=JSON.parse(localStorage.getItem("myTasks"));e.forEach(e=>{t.value.push(e)})}}),{newTask:e,tasks:t,addNewTask:A,taskIsCompleted:c,deleteTask:n,markAll:s,deleteAll:l}}},R=(A("d6c9"),A("6b0d")),Y=A.n(R);const T=Y()(J,[["render",E]]);var Q=T;Object(a["b"])(Q).mount("#app")},c8e4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAdcAAAHXAYySCGgAAANCSURBVHhe7ZvdjtJQEMdBCJQ0gTsTuCC8h/oaeusDuL6CvoEf+wreaGJ8AL1SjAm8gfKVED5K2GiLuHoDzrTDumA/psvp5sy2v6SZOeT0dPo/0/Z0GnJJst1uG7ZtPxyPxyPwYwH7DHBfcBs0nCww8Nls9sw9myOgMeSJQLOnBByLhpUBxNy4StoHgZcDmESyIE9WKRDsfTCvvdY/IJ1f1uv1z9T0BfrcgT6PqXmZB/l8/g35eoMC4MxdZjqdvgATOYvYB/qeujvtg6Iq5xbZxMGZhxmcUjMQ7AN9P1EzcSIvAVAeZ+2u12JzG7ZTz73gBLaF50Zy7P472hzRA8GTHwwGX9wEFAjE3gZztZsn7rhYLL67IwnGsqwzMPFEwB0kz/whYZngew+Azr6PMeH4Pkav7SmgK5kAZFNLJgDZ1JIJQPaQ9nA4vLb1eNLAOuAjmLbX2ifwXYAWDnHfAXTluHeCjBtMUq/DuhCZ+hwBJL8XRJbRsscg2dSSiADz+fw5VoCpGYjqfomA9wDY2Oyqv7gFVHddVPcL4PhKMgzScBzn3BuPxcVB0fd+8kV1vz1s28aYI0thkZcAPkZ6vZ64VVS/359wVn+se8Bms/lNrhgg5j/khsISAFKJNZhOcCeNmwHn5IoBJo0VM/cx+IusGOD6Z8XMEgAG+0muJNZkQ+EKwBpMJ7gxswQoFAriMqBYLK7IDYUlAHcwneBOGkuAUqkkTgDDMBxyQ2EJYJqmTa4YIOYf5IbCEqBarYoToFarqcsAEEDcOgAyQOlC6MaSCUA2tWQCkE0tmQBkUwtXgPZqtRJTFnMcB2P1/Rx+CEsALC5KKoxyC6II+xKQVBjlFkQRtgCSCqNxJitOBogpjHILoghbAID1QoT/+MAvMriBf49+/g/V/Q5QP1mdTucdBMECv+dxvuOp7rcDY6Ww1dHtdl/R+NqDsVLYkbAvAUmF0Tg1TLYAhmEsydWecrl8Rm4kbAGazeY3crWn1Wp9JTcStgCmab5fr9farwVwyV6pVD5QMxK2ALi0tCzrKTW1ZblcPuEug2MDN9jGaDR6691r9YNii/cHqbjgASaTyQlkw9I9qgZgLLBIegRuzJPP5f4C4bCcI4sizLcAAAAASUVORK5CYII="},d6c9:function(e,t,A){"use strict";A("0bab")},e359:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAYIAAAGCARcdOD0AAAF9SURBVHhe7ZtBSsNAFIYz2XXZLgRzFs9RsKg3cK/n8ARexJUnULtOikkXHmBKICW+l/l3Cm2hLZr//yB8LyGzeD+BtJmZ7Fz0fV/EGG/WhtW/0jRN7fdYWWDYeGjbdpHa3E3XddcYNg6sp6Isy2VqbzdVVX2YxvMUWDPzobPDmGP4SclhWhQATIsCgGlRADAtCgCmRQHAtCgAmBYFANOiAGBaFABMiwKAaQnw8OnadJXOjs6FHU+p3Jt7O75SeXReQwjrofLGfdLikO/2/x2fd/DJFyuLEGO8m0wmz0MaZGw2m9vgc3WXBq5RYa03wR8JnFOi1yBMiwKAaVEA/ipATYcvycmn0+kDzumYzWaPuf0KfNlut4vVarXE9dFjvb57z967/gydAwtXa4T+KgoApkUBwLQoAJgWBQDTogBgWhQATIsCgGlRADAtCgCmRQHA4pT0fV9gO+xe2L1vpnFtoMaanL0Y3eZpx/oats/7fFxq8yd1XX+ed/t8ln0DmMS+6iOfaBsAAAAASUVORK5CYII="},f9a7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAiEAAAIhAT4REJMAAAKwSURBVHhe7Zu7jtpAFIadiCaigNr7KnmOKH2qdCm22VTbp46ipEuZJ0iXKmXeYCVAXJaLiLgESAGSc/5oZmXDMfgyY5/B/qWPMxy0aP9PK2EQ+ywIAq/Kea5mZVMLULOyqQWoWdlcqwCfeKXm2VydgN1ud9Pv93/Q8dtqtXrodDp3dI4XgeuAa2G73d4sl8sdnSMZjUYfafjEyc+cLFwlrrzOYDD4RONEQuSOq1wqr8NJiDyRiyQtrzMcDj/TeJJw8oQukba8TlgC+8QukLW8jpbg5LtBvNTt9/uHVqv1Qq0yhV4dvjgnwFR5HacuhEyXR5wRYKP8fD5fOiHARnmk0Wjcihdgqzy9irxvt9vfRQuwWb7ZbH6l46NYAUWUx32RAooqjyQRkPjDBRMpsvz/4EIoBp/ePb2bTqe/6Rx0u91f2KnHrEC/ZK7L27hsNps7GuzvfrJQ+JPJ5APNSGaz2YKGFQlllAfcki2vY0NCWeXB8eJseR2TEsosD8J3EpXXMSGh7PJAH1KV18kjQUJ5gJtM5XWySJBSHni9Xu+WDrmSRoKk8sBbr9d/6ZA7SSRIKw9wYyznJEgsD7zFYvGHDsbCSZBaHnh0qfuWDkYTliC5PMCNT38F9zSNBhIOh8NryeWBPliRYCMmy4PwHfESTJcHxwuxEmyUB9xSnARb5QG7JMRIsFkesEtF6RJslwfsMkRpEoooD9jlEYVLKKo8YJcMhUkosjxglzFYl1B0ecAuz2BNQhnlAbu8gHEJZZUH7DIBxiSUWR6wy4TkllB2ecAuU5BZgoTygF2mJLUEKeUBu8xAYgmSygN2mZGLEqSVB+wyB7ESJJYH7DInPj5oJeZ0Dsbj8YSkvMFePS4Km98UxTdKXhI/iei3MgSl/s9RNSubWoCalU0tQM2KxvP+ARyEdWOoEAtIAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.75f9e5bc.js.map