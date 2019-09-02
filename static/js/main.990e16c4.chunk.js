(window["webpackJsonpcarte-sans-territoire"]=window["webpackJsonpcarte-sans-territoire"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){var a={"./frDpt.js":[34,3],"./usState.js":[33,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(a)},r.id=31,e.exports=r},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=(n(25),n(7)),i=n(6);var u=function(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/"},"La carte sans le territoire"))};function l(e,t,a){return{id:e,routePath:t,description:a,lazyData:function(){return n(31)("./".concat(e,".js"))}}}var s=[l("frDpt","/french-district","Carte des d\xe9partements fran\xe7ais"),l("usState","/us-state","Carte des \xe9tats des \xc9tats-Unis")];var d=function(){return r.a.createElement("ul",{className:"home-container"},s.map(function(e){var t=e.id,n=e.routePath,a=e.description;return r.a.createElement("li",{key:t},r.a.createElement(o.b,{to:n},a))}))},f=n(8),m=n(18);var v=r.a.memo(function(e){var t=e.id,n=e.label,a=e.checked,c=e.onChange,o=e.disabled;return r.a.createElement("div",null,r.a.createElement("input",{id:t,type:"radio",name:"choice",value:n,checked:a,onChange:c,disabled:o}),r.a.createElement("label",{htmlFor:t},n))});var b=r.a.memo(function(e){var t=e.data,n=e.onChange,a=e.choiceIdSelected,c=e.idsValidated,o=e.getChoiceLabel;return r.a.createElement("div",{className:"choices-container"},t.map(function(e,t){var i=e.id;return r.a.createElement(v,{key:t,id:"choice".concat(t),label:o(e),checked:a===i,disabled:c.includes(i),onChange:function(){return n(i)}})}))});var h=function(){return r.a.createElement("span",{className:"success"},"Bravo !")};var E=r.a.memo(function(e){return r.a.createElement("button",Object.assign({},e,{type:"button"}))}),g={getChoiceLabel:function(e){return"".concat(e.id," - ").concat(e.label)}},O=n(19);var p=["setItem","getItem"].reduce(function(e,t){return e[t]=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return window.localStorage[e].apply(window.localStorage,n)}catch(r){}}}(t),e},{});var j=function(e){var t=e.id,n=e.data,c=e.MapComponent,o=e.options,i=Object.assign({},g,o).getChoiceLabel,u=Object(a.useState)(""),l=Object(f.a)(u,2),s=l[0],d=l[1],m=Object(a.useState)(""),v=Object(f.a)(m,2),j=v[0],y=v[1],w=Object(a.useState)([]),k=Object(f.a)(w,2),S=k[0],C=k[1];!function(e){Object(a.useEffect)(function(){var t=document.querySelectorAll("[data-id]");Array.from(t).forEach(function(t){var n=t.dataset.id;t.addEventListener("click",function(t){t.target.classList.contains("disabled")||e(n)})})},[e])}(y),function(e,t){Object(a.useEffect)(function(){var n=p.getItem(e);try{var a=n&&JSON.parse(n);Array.isArray(a)&&t(a)}catch(r){}},[e,t])}(t,C),function(e){Object(a.useEffect)(function(){if(e){var t=document.querySelector('[data-id="'.concat(e,'"'));return t.classList.add("selected"),function(){return t.classList.remove("selected")}}},[e])}(j);var L=function(e,t,n,r){return Object(a.useCallback)(function(){e&&e===t&&r([].concat(Object(O.a)(n),[t]))},[e,t,n,r])}(j,s,S,C);!function(e,t,n){Object(a.useEffect)(function(){t(""),n(""),e.forEach(function(e){return document.querySelector('[data-id="'.concat(e,'"]')).classList.add("disabled")})},[e,t,n])}(S,d,y),function(e,t){var n=Object(a.useRef)(!0);Object(a.useEffect)(function(){n.current?n.current=!1:p.setItem(e,JSON.stringify(t))},[e,t])}(t,S);var N=S.length===n.length,D=j&&s;return r.a.createElement("div",{className:"map-game-container"},r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement(c,null)),r.a.createElement("aside",null,r.a.createElement(b,{data:n,onChange:d,choiceIdSelected:s,idsValidated:S,getChoiceLabel:i}))),r.a.createElement("footer",null,N?r.a.createElement(h,null):r.a.createElement(E,{onClick:L,disabled:!D,children:"Valider"})))};var y=function(){return r.a.createElement("div",{className:"loading-container"},"Loading...")};var w=function(){return r.a.createElement("div",{className:"error-container"},"Une erreur est survenue")};var k=function(e){var t=e.lazyData,n=Object(m.a)(e,["lazyData"]),c=Object(a.useState)(void 0),o=Object(f.a)(c,2),i=o[0],u=o[1];return Object(a.useEffect)(function(){u(void 0),t().then(function(e){return u(e)}).catch(function(e){return u(!1)})},[t]),void 0===i?r.a.createElement(y,null):!1===i?r.a.createElement(w,null):r.a.createElement(j,Object.assign({key:JSON.stringify(i.data)},i,n))},S="/la-carte-sans-territoire";var C=function(){return r.a.createElement(o.a,{basename:S},r.a.createElement(u,null),r.a.createElement(i.a,{path:"/",exact:!0,component:d}),s.map(function(e){var t=e.id,n=e.routePath,a=e.lazyData;return r.a.createElement(i.a,{key:t,path:n,render:function(e){return r.a.createElement(k,Object.assign({},e,{id:t,lazyData:a}))}})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.990e16c4.chunk.js.map