(window["webpackJsonpla-carte-sans-territoire"]=window["webpackJsonpla-carte-sans-territoire"]||[]).push([[0],[,,,function(e,t,a){e.exports={container:"MapGame_container__1uBE5",main:"MapGame_main__245H2",section:"MapGame_section__2k_Qm",selected:"MapGame_selected__S1TO3",disabled:"MapGame_disabled__1bGjL",highlight:"MapGame_highlight__yybZ_",aside:"MapGame_aside__1p7Zj"}},,,,,,,,,,,function(e,t,a){e.exports={container:"InputChoice_container__158wK",input:"InputChoice_input__2HCd6",label:"InputChoice_label__1XG8a",highlight:"InputChoice_highlight__1N730"}},function(e,t,a){e.exports={button:"Button_button__1s0hg",error:"Button_error__3qGxJ"}},,function(e,t,a){e.exports={homeLink:"HomeLink_homeLink__27QpP",homeLinkImageContainer:"HomeLink_homeLinkImageContainer__2S5cG",homeLinkText:"HomeLink_homeLinkText__FY4Fl"}},function(e,t,a){e.exports={resetButton:"ResetButton_resetButton__IvkAJ",animate:"ResetButton_animate__peY50",blink:"ResetButton_blink__3QHbz",image:"ResetButton_image__knYxc"}},,function(e,t,a){e.exports={header:"Header_header__3mObx",link:"Header_link__cU-VI"}},,,function(e,t,a){e.exports={container:"Home_container__3-qjB",item:"Home_item__1tLv4"}},function(e,t,a){e.exports={mapTitle:"MapTitle_mapTitle__3GKPr",hidden:"MapTitle_hidden__1N4JV"}},function(e,t,a){e.exports={label:"MapChoice_label__2Z4m5",input:"MapChoice_input__iUhTt"}},function(e,t,a){e.exports={link:"MapSourceLink_link__1gl_v",external:"MapSourceLink_external__3knjC"}},,,function(e,t,a){e.exports=a.p+"static/media/africa.4cb88805.svg"},function(e,t,a){e.exports=a.p+"static/media/parisArr.9e857258.svg"},function(e,t,a){e.exports=a.p+"static/media/usState.4fac928a.svg"},function(e,t,a){e.exports=a.p+"static/media/frDpt.4bc78dea.svg"},function(e,t,a){e.exports=a.p+"static/media/frReg.3cce3ccd.svg"},,,,function(e,t,a){e.exports={container:"ListChoice_container__pwaWB"}},function(e,t,a){e.exports=a.p+"static/media/trash.762fa71b.svg"},function(e,t,a){e.exports={successMessage:"SuccessMessage_successMessage__30uVD"}},function(e,t,a){e.exports={mapFooter:"MapFooter_mapFooter__2mJSa"}},function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},,,,,,function(e,t,a){var n={"./africa.js":[54,3],"./frDpt.js":[58,4],"./frReg.js":[57,5],"./parisArr.js":[56,6],"./usState.js":[55,7]};function r(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return a.e(t[1]).then(function(){return a(r)})}r.keys=function(){return Object.keys(n)},r.id=52,e.exports=r},function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"africa",function(){return f.a}),a.d(n,"parisArr",function(){return _.a}),a.d(n,"usState",function(){return b.a}),a.d(n,"frDpt",function(){return y.a}),a.d(n,"frReg",function(){return E.a});var r=a(0),c=a.n(r),i=a(34),o=(a(46),a(10)),s=a(9),l=a(20),u=a.n(l);var d=function(){return c.a.createElement("header",{className:u.a.header},c.a.createElement(o.b,{to:"/",className:u.a.link},"La carte sans territoire"))},m="MAP",p=a(29),f=a.n(p),h=a(30),_=a.n(h),g=a(31),b=a.n(g),v=a(32),y=a.n(v),O=a(33),E=a.n(O);function k(e,t,r,c){return{id:e,routePath:t,title:r,source:c,type:m,lazyDataModule:function(){return a(52)("./".concat(e,".js"))},image:n[e]}}var j=[k("frDpt","/france-departement","D\xe9partements en France m\xe9tropolitaine","https://fr.wikipedia.org/wiki/Fichier:D%C3%A9partements_de_France-simple.svg"),k("frReg","/france-region","R\xe9gions en France m\xe9tropolitaine","https://commons.wikimedia.org/wiki/File:Fond_de_carte_des_13_nouvelles_r%C3%A9gions_de_France_m%C3%A9tropolitaine.svg"),k("usState","/usa-etats","\xc9tats des \xc9tats-Unis","https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg"),k("parisArr","/paris-arrondissement","Arrondissements Parisiens","https://fr.wikipedia.org/wiki/Fichier:Paris_blank_map.svg"),k("africa","/afrique-continent","Continent Africain","https://commons.wikimedia.org/wiki/File:Blank_Map-Africa.svg")],S=a(23),w=a.n(S),C=a(17),I=a.n(C);var N=function(e){var t=e.to,a=e.text,n=e.image,r=n&&{backgroundImage:"url(".concat(n,")")};return c.a.createElement(o.b,{to:t,className:I.a.homeLink},c.a.createElement("div",{className:I.a.homeLinkImageContainer,style:r}),c.a.createElement("p",{className:I.a.homeLinkText},a))};var x=function(){return c.a.createElement("ul",{className:w.a.container},j.map(function(e){var t=e.id,a=e.routePath,n=e.title,r=e.image;return c.a.createElement("li",{key:t,className:w.a.item},c.a.createElement(N,{to:a,text:n,image:r}))}))};var L=function(){return c.a.createElement("div",{className:"container-full-center text-large"},"La page demand\xe9e n'existe pas")},M=a(16),D=a(12),P=a(4),B=a(5),R=a.n(B),A=a(14),F=a.n(A);var H=c.a.memo(function(e){var t=e.inputId,a=e.id,n=e.label,i=e.checked,o=e.highlighted,s=e.disabled,l=e.onChange,u=Object(r.useRef)(null),d=R()(F.a.label,Object(P.a)({},F.a.highlight,o)),m=Object(r.useCallback)(function(){return l(a)},[l,a]);return Object(r.useEffect)(function(){o&&u.current&&u.current.scrollIntoView()},[o]),c.a.createElement("div",{className:F.a.container},c.a.createElement("input",{id:t,type:"radio",name:"choice",className:F.a.input,value:n,checked:i,onChange:m,disabled:s}),c.a.createElement("label",{ref:u,htmlFor:t,className:d},n))}),V=a(37),T=a.n(V);var G=c.a.memo(function(e){var t=e.data,a=e.compare,n=e.onChange,i=e.choiceIdSelected,o=e.idHighlighted,s=e.idsValidated,l=e.getChoiceLabel,u=Object(r.useState)([]),d=Object(D.a)(u,2),m=d[0],p=d[1];return Object(r.useEffect)(function(){p(a?Object(M.a)(t).sort(a):t)},[t,a]),c.a.createElement("div",{className:T.a.container},m.map(function(e,t){var a=e.id;return c.a.createElement(H,{key:t,inputId:"choice".concat(t),id:a,label:l(e),checked:i===a,highlighted:o===a,disabled:s.includes(a),onChange:n})}))}),q=a(11),J=a(18),z=a.n(J),U=a(38),Q=a.n(U);var W=function(e){var t=e.className,a=e.animate,n=void 0!==a&&a,r=Object(q.a)(e,["className","animate"]),i=R()(t,z.a.resetButton,Object(P.a)({},z.a.animate,n));return c.a.createElement("button",Object.assign({title:"Recommencer"},r,{className:i,type:"button"}),c.a.createElement("img",{src:Q.a,alt:"Effacer",className:z.a.image}))},Y=a(24),Z=a.n(Y);var K=function(e){var t=e.title,a=e.showResetButton,n=e.onClickResetButton,r=e.animateResetButton;return c.a.createElement("p",{className:Z.a.mapTitle},t,c.a.createElement(W,{className:R()(Object(P.a)({},Z.a.hidden,!a)),animate:r,onClick:n}))},X="update_id_highlighted",$="update_map_id_selected",ee="update_choice_id_selected",te="update_ids_validated",ae="update_has_error",ne="reset_ids_selected",re="reset";function ce(e){return{type:X,payload:e}}function ie(e){return{type:te,payload:e}}function oe(e){return{type:ae,payload:e}}function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function ue(e){return{choiceIdSelected:"",mapIdSelected:"",idsValidated:function(e){try{var t=localStorage.getItem(e),a=t&&JSON.parse(t);if(Array.isArray(a))return a}catch(n){}return[]}(e),idHighlighted:"",hasError:!1}}function de(e,t){switch(t.type){case X:return le({},e,{idHighlighted:t.payload});case $:return le({},e,{mapIdSelected:t.payload});case ee:return le({},e,{choiceIdSelected:t.payload});case te:return le({},e,{idsValidated:t.payload});case ae:return le({},e,{hasError:t.payload});case ne:return le({},e,{mapIdSelected:"",choiceIdSelected:""});case re:return ue(t.payload);default:return e}}var me=a(3),pe=a.n(me),fe=1500,he=1500;function _e(e,t){var a=Object(r.useRef)(!0);Object(r.useEffect)(function(){a.current?a.current=!1:t({type:re})},[e,t])}function ge(e,t){Object(r.useEffect)(function(){t({type:ne}),function(){var e=document.querySelector("input:not([disabled])[type='radio']");e&&(e.focus(),e.blur())}(),Array.isArray(e)&&e.length?e.forEach(function(e){return document.querySelector('[data-id="'.concat(e,'"]')).classList.add(pe.a.disabled)}):Array.from(document.querySelectorAll("[data-id]")).forEach(function(e){return e.classList.remove(pe.a.disabled)})},[e,t])}function be(e){var t=Object(r.useReducer)(de,e,ue),a=Object(D.a)(t,2),n=a[0],c=a[1],i=n.choiceIdSelected,o=n.mapIdSelected,s=n.idsValidated,l=n.idHighlighted,u=n.hasError;!function(e,t){Object(r.useEffect)(function(){var e=document.querySelectorAll("[data-id]");Array.from(e).forEach(function(e){var a=e.dataset.id;e.addEventListener("click",function(){e.classList.contains(pe.a.disabled)?t(ce(a)):document.querySelector("label#item-".concat(a)).click()})})},[e,t])}(e,c),function(e){Object(r.useEffect)(function(){if(e){var t=document.querySelector('[data-id="'.concat(e,'"'));return t.classList.add(pe.a.selected),function(){return t&&t.classList.remove(pe.a.selected)}}},[e])}(o),function(e,t){Object(r.useEffect)(function(){if(e){var a=document.querySelector("[data-id='".concat(e,"'"));a.classList.add(pe.a.highlight);var n=setTimeout(function(){return t(ce(""))},fe);return function(){clearTimeout(n),a.classList.remove(pe.a.highlight)}}},[e,t])}(l,c),ge(s,c),_e(e,c);var d=function(e,t,a){var n=t.mapIdSelected,c=t.choiceIdSelected,i=t.idsValidated,o=Object(r.useRef)(null);return Object(r.useCallback)(function(t){t.preventDefault();var r=n&&n===c;if(clearTimeout(o.current),a(oe(!r)),r){var s=[].concat(Object(M.a)(i),[c]);a(ie(s)),localStorage.setItem(e,JSON.stringify(s))}else o.current=setTimeout(function(){return a(oe(!1))},he)},[e,n,c,i,a])}(e,n,c),m=function(e,t){return Object(r.useCallback)(function(){window.confirm("Souhaitez-vous vraiment recommencer cette carte ?")&&(t(ie([])),localStorage.removeItem(e))},[e,t])}(e,c);return{choiceIdSelected:i,mapIdSelected:o,idHighlighted:l,idsValidated:s,hasError:u,setMapIdSelected:Object(r.useCallback)(function(e){return c(function(e){return{type:$,payload:e}}(e))},[]),setChoiceIdSelected:Object(r.useCallback)(function(e){return c(function(e){return{type:ee,payload:e}}(e))},[]),handleValidateClick:d,handleResetClick:m}}var ve=function(){return c.a.createElement("div",{className:"container-full-center text-large"},"Loading...")};var ye=function(){return c.a.createElement("div",{className:"container-full-center text-large"},"Une erreur est survenue")};function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Ee=function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(a,!0).forEach(function(t){Object(P.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e)},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return function(t){return function(a){var n=a.lazyDataModule,i=Object(q.a)(a,["lazyDataModule"]),o=Object(r.useState)(void 0),s=Object(D.a)(o,2),l=s[0],u=s[1];return Object(r.useEffect)(function(){u(void 0),n().then(function(e){return u(e)}).catch(function(){return u(!1)})},[n]),void 0===l?c.a.createElement(ve,null):!1===l?c.a.createElement(ye,null):c.a.createElement(t,Object.assign({},e(l),i))}}},je=a(25),Se=a.n(je);var we=function(e){var t=e.data,a=e.onChange,n=e.mapIdSelected,r=e.idsValidated;function i(e){a(e.target.value)}return t.map(function(e){var t="item-".concat(e.id);return c.a.createElement("label",{id:t,key:e.id,className:Se.a.label},c.a.createElement("input",{htmlFor:t,className:Se.a.input,type:"radio",name:"mapChoice",value:e.id,onChange:i,checked:e.id===n,disabled:-1!==r.indexOf(e.id)}))})},Ce=a(15),Ie=a.n(Ce);var Ne=c.a.memo(function(e){var t=e.className,a=e.type,n=void 0===a?"button":a,r=Object(q.a)(e,["className","type"]),i=R()(t,Ie.a.button);return c.a.createElement("button",Object.assign({},r,{className:i,type:n}))}),xe=a(39),Le=a.n(xe);var Me=function(){return c.a.createElement("span",{className:Le.a.successMessage},"Bravo !")},De=a(40),Pe=a.n(De);var Be=function(e){var t=e.success,a=e.error,n=e.btnDisabled;return c.a.createElement("footer",{className:Pe.a.mapFooter},t&&c.a.createElement(Me,null),!t&&c.a.createElement(Ne,{type:"submit",disabled:n,className:R()(Object(P.a)({},Ie.a.error,a)),children:"Valider"}))},Re=a(26),Ae=a.n(Re);var Fe=function(e){var t=e.url,a=R()(Ae.a.link,Ae.a.external);return c.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:a},"source")},He={getChoiceLabel:function(e){return"".concat(e.id," - ").concat(e.label)}};var Ve=ke(function(e){return{data:e.data,MapComponent:e.MapComponent,options:e.options,compareList:e.compareList}})(function(e){var t=e.id,a=e.title,n=e.source,r=e.data,i=e.MapComponent,o=e.options,s=e.compareList,l=Object.assign({},He,o).getChoiceLabel,u=be(t),d=u.choiceIdSelected,m=u.mapIdSelected,p=u.idsValidated,f=u.idHighlighted,h=u.hasError,_=u.setMapIdSelected,g=u.setChoiceIdSelected,b=u.handleValidateClick,v=u.handleResetClick,y=p.length===r.length,O=m&&d;return c.a.createElement("form",{className:pe.a.container,onSubmit:b},c.a.createElement("main",{className:pe.a.main},c.a.createElement("section",{className:pe.a.section},c.a.createElement(K,{title:a,showResetButton:p.length>0,animateResetButton:y,onClickResetButton:v}),n&&c.a.createElement(Fe,{url:n}),c.a.createElement(we,{data:r,onChange:_,mapIdSelected:m,idsValidated:p}),c.a.createElement(i,null)),c.a.createElement("aside",{className:pe.a.aside},c.a.createElement(G,{data:r,compare:s,onChange:g,choiceIdSelected:d,idHighlighted:f,idsValidated:p,getChoiceLabel:l}))),c.a.createElement(Be,{success:y,error:h,btnDisabled:!O}))}),Te="/la-carte-sans-territoire";var Ge=function(){return c.a.createElement(o.a,{basename:Te},c.a.createElement(d,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:x}),j.map(function(e){var t=e.id,a=e.routePath,n=e.type,r=e.title,i=e.source,o=e.lazyDataModule,l=function(e){switch(e){case m:default:return Ve}}(n);return c.a.createElement(s.a,{key:t,path:a,render:function(e){return c.a.createElement(l,Object.assign({},e,{id:t,title:r,source:i,lazyDataModule:o}))}})}),c.a.createElement(s.a,{component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=["setItem","getItem","removeItem"].reduce(function(e,t){return e[t]=function(e){return function(){try{for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return window.localStorage[e].apply(window.localStorage,a)}catch(r){}}}(t),e},{});(new Map).forEach(function(e,t){var a=qe.getItem(t);a&&qe.setItem(e,a)}),Object(i.render)(c.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[41,1,2]]]);
//# sourceMappingURL=main.8cc6d959.chunk.js.map