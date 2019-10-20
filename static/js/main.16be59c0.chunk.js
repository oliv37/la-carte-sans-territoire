(window["webpackJsonpla-carte-sans-territoire"]=window["webpackJsonpla-carte-sans-territoire"]||[]).push([[0],[,,,function(e,t,a){e.exports={container:"MapGame_container__1uBE5",main:"MapGame_main__245H2",section:"MapGame_section__2k_Qm",selected:"MapGame_selected__S1TO3",disabled:"MapGame_disabled__1bGjL",highlight:"MapGame_highlight__yybZ_",aside:"MapGame_aside__1p7Zj"}},,,,,,,,,,,function(e,t,a){e.exports={container:"InputChoice_container__158wK",input:"InputChoice_input__2HCd6",label:"InputChoice_label__1XG8a",highlight:"InputChoice_highlight__1N730"}},function(e,t,a){e.exports={button:"Button_button__1s0hg",error:"Button_error__3qGxJ"}},function(e,t,a){e.exports={homeLink:"HomeLink_homeLink__27QpP",homeLinkImageContainer:"HomeLink_homeLinkImageContainer__2S5cG",homeLinkText:"HomeLink_homeLinkText__FY4Fl"}},function(e,t,a){e.exports={resetButton:"ResetButton_resetButton__IvkAJ",animate:"ResetButton_animate__peY50",blink:"ResetButton_blink__3QHbz",image:"ResetButton_image__knYxc"}},,function(e,t,a){e.exports={header:"Header_header__3mObx",link:"Header_link__cU-VI"}},,,function(e,t,a){e.exports={container:"Home_container__3-qjB",item:"Home_item__1tLv4"}},function(e,t,a){e.exports={label:"MapChoice_label__2Z4m5",input:"MapChoice_input__iUhTt"}},function(e,t,a){e.exports={link:"MapSourceLink_link__1gl_v",external:"MapSourceLink_external__3knjC"}},,,,,,function(e,t,a){e.exports={container:"ListChoice_container__pwaWB"}},function(e,t,a){e.exports={mapTitle:"MapTitle_mapTitle__3GKPr"}},function(e,t,a){e.exports={successMessage:"SuccessMessage_successMessage__30uVD"}},function(e,t,a){e.exports={mapFooter:"MapFooter_mapFooter__2mJSa"}},,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},,,,,,function(e,t,a){var n={"./africa.js":[56,3],"./frDpt.js":[55,4],"./frReg.js":[58,5],"./parisArr.js":[57,6],"./usState.js":[54,7]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=46,e.exports=r},function(e,t,a){var n={"./africa.svg":[49,8],"./frDpt.svg":[50,9],"./frReg.svg":[51,10],"./parisArr.svg":[52,11],"./usState.svg":[53,12]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a.t(r,7)})}r.keys=function(){return Object.keys(n)},r.id=47,e.exports=r},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),c=(a(40),a(11)),o=a(10),s=a(19),l=a.n(s);var u=function(){return r.a.createElement("header",{className:l.a.header},r.a.createElement(c.b,{to:"/",className:l.a.link},"La carte sans territoire"))},d="MAP";function m(e,t,n,r,i){return{id:e,routePath:t,title:n,description:r,source:i,type:d,lazyDataModule:function(){return a(46)("./".concat(e,".js"))},imageModule:a(47)("./".concat(e,".svg"))}}var f=[m("frDpt","/france-departement","D\xe9partements fran\xe7ais","Carte des d\xe9partements fran\xe7ais","https://fr.wikipedia.org/wiki/Fichier:D%C3%A9partements_de_France-simple.svg"),m("frReg","/france-region","R\xe9gions fran\xe7aises","Carte des r\xe9gions fran\xe7aises","https://commons.wikimedia.org/wiki/File:Fond_de_carte_des_13_nouvelles_r%C3%A9gions_de_France_m%C3%A9tropolitaine.svg"),m("usState","/usa-etats","\xc9tats des \xc9tats-Unis","Carte des \xe9tats des \xc9tats-Unis","https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg"),m("parisArr","/paris-arrondissement","Arrondissements de Paris","Carte des arrondissements de Paris","https://fr.wikipedia.org/wiki/Fichier:Paris_blank_map.svg"),m("africa","/afrique-continent","Afrique","Carte de l'Afrique","https://commons.wikimedia.org/wiki/File:Blank_Map-Africa.svg")],p=a(22),h=a.n(p),_=a(7),g=a(16),b=a.n(g);var v=function(e){var t=e.to,a=e.text,i=e.imageModule,o=Object(n.useState)(void 0),s=Object(_.a)(o,2),l=s[0],u=s[1];Object(n.useEffect)(function(){i.then(function(e){var t=e.default;return u(t)})},[i]);var d=l&&{backgroundImage:"url(".concat(l,")")};return r.a.createElement(c.b,{to:t,className:b.a.homeLink},r.a.createElement("div",{className:b.a.homeLinkImageContainer,style:d}),r.a.createElement("p",{className:b.a.homeLinkText},a))};var E=function(){return r.a.createElement("ul",{className:h.a.container},f.map(function(e){var t=e.id,a=e.routePath,n=e.description,i=e.imageModule;return r.a.createElement("li",{key:t,className:h.a.item},r.a.createElement(v,{to:a,text:n,imageModule:i}))}))};var k=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"La page demand\xe9e n'existe pas")},O=a(8),j=a(6),y=a.n(j),C=a(14),w=a.n(C);var S=r.a.memo(function(e){var t=e.inputId,a=e.id,i=e.label,c=e.checked,o=e.highlighted,s=e.disabled,l=e.onChange,u=Object(n.useRef)(null),d=y()(w.a.label,Object(O.a)({},w.a.highlight,o)),m=Object(n.useCallback)(function(){return l(a)},[l,a]);return Object(n.useEffect)(function(){o&&u.current&&u.current.scrollIntoView()},[o]),r.a.createElement("div",{className:w.a.container},r.a.createElement("input",{id:t,type:"radio",name:"choice",className:w.a.input,value:i,checked:c,onChange:m,disabled:s}),r.a.createElement("label",{ref:u,htmlFor:t,className:d},i))}),N=a(30),M=a.n(N);var I=r.a.memo(function(e){var t=e.data,a=e.onChange,n=e.choiceIdSelected,i=e.idHighlighted,c=e.idsValidated,o=e.getChoiceLabel;return r.a.createElement("div",{className:M.a.container},t.map(function(e,t){var s=e.id;return r.a.createElement(S,{key:t,inputId:"choice".concat(t),id:s,label:o(e),checked:n===s,highlighted:i===s,disabled:c.includes(s),onChange:a})}))}),L=a(12),x=a(17),B=a.n(x);var D=function(e){var t=e.className,a=e.animate,n=void 0!==a&&a,i=Object(L.a)(e,["className","animate"]),c=y()(t,B.a.resetButton,Object(O.a)({},B.a.animate,n));return r.a.createElement("button",Object.assign({title:"Recommencer"},i,{className:c,type:"button"}),r.a.createElement("img",{src:"img/trash-alt.svg",alt:"",className:B.a.image}))},A=a(31),P=a.n(A);var R=function(e){var t=e.title,a=e.showResetButton,n=e.onClickResetButton,i=e.animateResetButton;return r.a.createElement("p",{className:P.a.mapTitle},t,a&&r.a.createElement(D,{animate:i,onClick:n}))},F=a(34);var T=["setItem","getItem","removeItem"].reduce(function(e,t){return e[t]=function(e){return function(){try{for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return window.localStorage[e].apply(window.localStorage,a)}catch(r){}}}(t),e},{}),H=a(3),q=a.n(H),G=1500,V=1500;function U(e,t,a){Object(n.useEffect)(function(){t(""),a(""),function(){var e=document.querySelector("input:not([disabled])[type='radio']");e&&(e.focus(),e.blur())}(),Array.isArray(e)&&e.length?e.forEach(function(e){return document.querySelector('[data-id="'.concat(e,'"]')).classList.add(q.a.disabled)}):Array.from(document.querySelectorAll("[data-id]")).forEach(function(e){return e.classList.remove(q.a.disabled)})},[e,t,a])}function z(e){var t=Object(n.useState)(""),a=Object(_.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(""),o=Object(_.a)(c,2),s=o[0],l=o[1],u=Object(n.useState)(""),d=Object(_.a)(u,2),m=d[0],f=d[1],p=Object(n.useState)(function(){return function(e){try{var t=T.getItem(e),a=t&&JSON.parse(t);if(Array.isArray(a))return a}catch(n){}return[]}(e)}),h=Object(_.a)(p,2),g=h[0],b=h[1],v=Object(n.useState)(!1),E=Object(_.a)(v,2),k=E[0],O=E[1];return function(e,t){Object(n.useEffect)(function(){var e=document.querySelectorAll("[data-id]");Array.from(e).forEach(function(e){var a=e.dataset.id;e.addEventListener("click",function(){e.classList.contains(q.a.disabled)?t(a):document.querySelector("label#item-".concat(a)).click()})})},[e,t])}(e,f),function(e){Object(n.useEffect)(function(){if(e){var t=document.querySelector('[data-id="'.concat(e,'"'));return t.classList.add(q.a.selected),function(){return t&&t.classList.remove(q.a.selected)}}},[e])}(s),function(e,t){Object(n.useEffect)(function(){if(e){var a=document.querySelector("[data-id='".concat(e,"'"));a.classList.add(q.a.highlight);var n=setTimeout(function(){return t("")},G);return function(){clearTimeout(n),a.classList.remove(q.a.highlight)}}},[e,t])}(m,f),U(g,i,l),{choiceIdSelected:r,mapIdSelected:s,idHighlighted:m,idsValidated:g,hasError:k,setMapIdSelected:l,setChoiceIdSelected:i,handleValidateClick:function(e,t,a,r,i,c){var o=Object(n.useRef)(null);return Object(n.useCallback)(function(n){n.preventDefault();var s=t&&t===a;if(clearTimeout(o.current),c(!s),s){var l=[].concat(Object(F.a)(r),[a]);i(l),T.setItem(e,JSON.stringify(l))}else o.current=setTimeout(function(){return c(!1)},V)},[e,t,a,r,i,c])}(e,s,r,g,b,O),handleResetClick:function(e,t){return Object(n.useCallback)(function(){window.confirm("Souhaitez-vous vraiment recommencer cette carte ?")&&(t([]),T.removeItem(e))},[e,t])}(e,b)}}var J=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"Loading...")};var Q=function(){return r.a.createElement("div",{className:"container-full-center text-large"},"Une erreur est survenue")};function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Y=function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e)},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return function(t){return function(a){var i=a.lazyDataModule,c=Object(L.a)(a,["lazyDataModule"]),o=Object(n.useState)(void 0),s=Object(_.a)(o,2),l=s[0],u=s[1];return Object(n.useEffect)(function(){u(void 0),i().then(function(e){return u(e)}).catch(function(e){return u(!1)})},[i]),void 0===l?r.a.createElement(J,null):!1===l?r.a.createElement(Q,null):r.a.createElement(t,Object.assign({},e(l),c))}}},K=a(23),X=a.n(K);var $=function(e){var t=e.data,a=e.onChange,n=e.mapIdSelected,i=e.idsValidated;function c(e){a(e.target.value)}return t.map(function(e){var t="item-".concat(e.id);return r.a.createElement("label",{id:t,key:e.id,className:X.a.label},r.a.createElement("input",{htmlFor:t,className:X.a.input,type:"radio",name:"mapChoice",value:e.id,onChange:c,checked:e.id===n,disabled:-1!==i.indexOf(e.id)}))})},ee=a(15),te=a.n(ee);var ae=r.a.memo(function(e){var t=e.className,a=e.type,n=void 0===a?"button":a,i=Object(L.a)(e,["className","type"]),c=y()(t,te.a.button);return r.a.createElement("button",Object.assign({},i,{className:c,type:n}))}),ne=a(32),re=a.n(ne);var ie=function(){return r.a.createElement("span",{className:re.a.successMessage},"Bravo !")},ce=a(33),oe=a.n(ce);var se=function(e){var t=e.success,a=e.error,n=e.btnDisabled;return r.a.createElement("footer",{className:oe.a.mapFooter},t&&r.a.createElement(ie,null),!t&&r.a.createElement(ae,{type:"submit",disabled:n,className:y()(Object(O.a)({},te.a.error,a)),children:"Valider"}))},le=a(24),ue=a.n(le);var de=function(e){var t=e.url,a=y()(ue.a.link,ue.a.external);return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:a},"source")},me={getChoiceLabel:function(e){return"".concat(e.id," - ").concat(e.label)}};var fe=Z(function(e){return{data:e.data,MapComponent:e.MapComponent,options:e.options}})(function(e){var t=e.id,a=e.title,n=e.source,i=e.data,c=e.MapComponent,o=e.options,s=Object.assign({},me,o).getChoiceLabel,l=z(t),u=l.choiceIdSelected,d=l.mapIdSelected,m=l.idsValidated,f=l.idHighlighted,p=l.hasError,h=l.setMapIdSelected,_=l.setChoiceIdSelected,g=l.handleValidateClick,b=l.handleResetClick,v=m.length===i.length,E=d&&u;return r.a.createElement("form",{className:q.a.container,onSubmit:g},r.a.createElement("main",{className:q.a.main},r.a.createElement("section",{className:q.a.section},r.a.createElement(R,{title:a,showResetButton:m.length>0,animateResetButton:v,onClickResetButton:b}),n&&r.a.createElement(de,{url:n}),r.a.createElement($,{data:i,onChange:h,mapIdSelected:d,idsValidated:m}),r.a.createElement(c,null)),r.a.createElement("aside",{className:q.a.aside},r.a.createElement(I,{data:i,onChange:_,choiceIdSelected:u,idHighlighted:f,idsValidated:m,getChoiceLabel:s}))),r.a.createElement(se,{success:v,error:p,btnDisabled:!E}))}),pe="/la-carte-sans-territoire";var he=function(){return r.a.createElement(c.a,{basename:pe},r.a.createElement(u,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:E}),f.map(function(e){var t=e.id,a=e.routePath,n=e.type,i=e.title,c=e.source,s=e.lazyDataModule,l=function(e){switch(e){case d:default:return fe}}(n);return r.a.createElement(o.a,{key:t,path:a,render:function(e){return r.a.createElement(l,Object.assign({},e,{id:t,title:i,source:c,lazyDataModule:s}))}})}),r.a.createElement(o.a,{component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));(new Map).forEach(function(e,t){var a=T.getItem(t);a&&T.setItem(e,a)}),Object(i.render)(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[35,1,2]]]);
//# sourceMappingURL=main.16be59c0.chunk.js.map