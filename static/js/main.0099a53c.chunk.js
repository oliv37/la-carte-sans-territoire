(window["webpackJsonpla-carte-sans-territoire"]=window["webpackJsonpla-carte-sans-territoire"]||[]).push([[0],{11:function(e,t,n){e.exports={header:"Header_header__3mObx",link:"Header_link__cU-VI"}},14:function(e,t,n){e.exports={container:"Home_container__3-qjB",item:"Home_item__1tLv4"}},20:function(e,t,n){e.exports={successMessage:"SuccessMessage_successMessage__30uVD"}},22:function(e,t,n){e.exports={button:"Button_button__1s0hg"}},25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},36:function(e,t,n){var a={"./frDpt.js":[39,3],"./usState.js":[38,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n(r)})}r.keys=function(){return Object.keys(a)},r.id=36,e.exports=r},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=(n(30),n(7)),i=n(6),l=n(11),u=n.n(l);var s=function(){return r.a.createElement("header",{className:u.a.header},r.a.createElement(o.b,{to:"/",className:u.a.link},"La carte sans territoire"))},d="MAP";function m(e,t,a){return{id:e,routePath:t,description:a,type:d,lazyDataModule:function(){return n(36)("./".concat(e,".js"))}}}var f=[m("frDpt","/french-district","Carte des d\xe9partements fran\xe7ais"),m("usState","/us-state","Carte des \xe9tats des \xc9tats-Unis")],h=n(14),v=n.n(h);var b=function(){return r.a.createElement("ul",{className:v.a.container},f.map(function(e){var t=e.id,n=e.routePath,a=e.description;return r.a.createElement("li",{key:t,className:v.a.item},r.a.createElement(o.b,{to:n},a))}))};var E=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"La page demand\xe9e n'existe pas")};var p=r.a.memo(function(e){var t=e.id,n=e.label,a=e.checked,c=e.onChange,o=e.disabled;return r.a.createElement("div",null,r.a.createElement("input",{id:t,type:"radio",name:"choice",value:n,checked:a,onChange:c,disabled:o}),r.a.createElement("label",{htmlFor:t},n))});var g=r.a.memo(function(e){var t=e.data,n=e.onChange,a=e.choiceIdSelected,c=e.idsValidated,o=e.getChoiceLabel;return r.a.createElement("div",{className:"choices-container"},t.map(function(e,t){var i=e.id;return r.a.createElement(p,{key:t,id:"choice".concat(t),label:o(e),checked:a===i,disabled:c.includes(i),onChange:function(){return n(i)}})}))}),y=n(20),O=n.n(y);var j=function(){return r.a.createElement("span",{className:O.a.successMessage},"Bravo !")},S=n(21),C=n.n(S),k=n(22),w=n.n(k);var _=r.a.memo(function(e){var t=C()(e.className,w.a.button);return r.a.createElement("button",Object.assign({},e,{className:t,type:"button"}))}),N=n(8),I=n(24);var L=["setItem","getItem"].reduce(function(e,t){return e[t]=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return window.localStorage[e].apply(window.localStorage,n)}catch(r){}}}(t),e},{});function M(e){var t=L.getItem(e);try{var n=t&&JSON.parse(t);if(Array.isArray(n))return n}catch(a){}return[]}function x(e){var t=Object(a.useState)(""),n=Object(N.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(N.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(function(){return M(e)}),d=Object(N.a)(s,2),m=d[0],f=d[1];return function(e,t){Object(a.useEffect)(function(){var e=document.querySelectorAll("[data-id]");Array.from(e).forEach(function(e){var n=e.dataset.id;e.addEventListener("click",function(e){e.target.classList.contains("disabled")||t(n)})})},[e,t])}(e,u),function(e,t,n){Object(a.useEffect)(function(){t(""),n("")},[e,t,n])}(e,c,u),function(e,t){Object(a.useEffect)(function(){t(M(e))},[e,t])}(e,f),function(e){Object(a.useEffect)(function(){if(e){var t=document.querySelector('[data-id="'.concat(e,'"'));return t.classList.add("selected"),function(){return t&&t.classList.remove("selected")}}},[e])}(l),function(e,t,n){Object(a.useEffect)(function(){t(""),n(""),Array.isArray(e)&&e.forEach(function(e){return document.querySelector('[data-id="'.concat(e,'"]')).classList.add("disabled")})},[e,t,n])}(m,c,u),{choiceIdSelected:r,mapIdSelected:l,idsValidated:m,setChoiceIdSelected:c,handleValidateClick:function(e,t,n,r,c){return Object(a.useCallback)(function(){if(t&&t===n){var a=[].concat(Object(I.a)(r),[n]);c(a),L.setItem(e,JSON.stringify(a))}},[e,t,n,r,c])}(e,l,r,m,f)}}var D=n(23);var V=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"Loading...")};var A=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"Une erreur est survenue")},z={getChoiceLabel:function(e){return"".concat(e.id," - ").concat(e.label)}};var B=function(e){return function(t){return function(n){var c=n.lazyDataModule,o=Object(D.a)(n,["lazyDataModule"]),i=Object(a.useState)(void 0),l=Object(N.a)(i,2),u=l[0],s=l[1];return Object(a.useEffect)(function(){s(void 0),c().then(function(e){return s(e)}).catch(function(e){return s(!1)})},[c]),void 0===u?r.a.createElement(V,null):!1===u?r.a.createElement(A,null):r.a.createElement(t,Object.assign({},e(u),o))}}}(function(e){return{data:e.data,MapComponent:e.MapComponent,options:e.options}})(function(e){var t=e.id,n=e.data,a=e.MapComponent,c=e.options,o=Object.assign({},z,c).getChoiceLabel,i=x(t),l=i.choiceIdSelected,u=i.mapIdSelected,s=i.idsValidated,d=i.setChoiceIdSelected,m=i.handleValidateClick,f=s.length===n.length,h=u&&l;return r.a.createElement("div",{className:"map-game-container"},r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement(a,null)),r.a.createElement("aside",null,r.a.createElement(g,{data:n,onChange:d,choiceIdSelected:l,idsValidated:s,getChoiceLabel:o}))),r.a.createElement("footer",null,f?r.a.createElement(j,null):r.a.createElement(_,{onClick:m,disabled:!h,children:"Valider"})))}),P="/la-carte-sans-territoire";var U=function(){return r.a.createElement(o.a,{basename:P},r.a.createElement(s,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:b}),f.map(function(e){var t=e.id,n=e.routePath,a=e.type,c=e.lazyDataModule,o=function(e){switch(e){case d:default:return B}}(a);return r.a.createElement(i.a,{key:t,path:n,render:function(e){return r.a.createElement(o,Object.assign({},e,{id:t,lazyDataModule:c}))}})}),r.a.createElement(i.a,{component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.render)(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.0099a53c.chunk.js.map