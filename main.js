!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n,t){var r,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(a){if(void 0===(o="function"==typeof(r=a)?r.call(n,t,n,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var i=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=i,d}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function o(){}function a(n,t,a){if("undefined"!=typeof document){"number"==typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(t);/^[\{\[]/.test(i)&&(t=i)}catch(e){}t=r.write?r.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var s in a)a[s]&&(d+="; "+s,!0!==a[s]&&(d+="="+a[s].split(";")[0]));return document.cookie=n+"="+t+d}}function i(e,t){if("undefined"!=typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var d=a[i].split("="),s=d.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var c=n(d[0]);if(s=(r.read||r)(s,c)||n(s),t)try{s=JSON.parse(s)}catch(e){}if(o[c]=s,e===c)break}catch(e){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(n,t){a(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=t,o}((function(){}))}))},function(e,n,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function d(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var p=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,g=0;function h(e,n){var t,r,o;if(n.singleton){var a=g++;t=m||(m=c(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=c(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=d(t[r]);i[o].references--}for(var a=s(e,n),c=0;c<t.length;c++){var l=d(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){(n=t(4)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Signika:wght@400;600&display=swap);"]),n.push([e.i,"/*\nVARIABLES\n*/\n\n:root {\n    --primary: #CBD5E0;\n    --primary-dark: #A0AEC0;\n    --dark: #4A5568;\n    --light: #F7FAFC;\n    --shadow: 0 8px 15px rgba(104, 104, 104, 0.3);\n}\n\n* {\n    transition: margin 0.4s ease-in-out, background 0.4s ease-in-out, border 0.4s ease-in-out;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: 'Signika', sans-serif;\n    color: var(--dark);\n}\n\nbody {\n    background: var(--light);\n    margin: 128px 200px;\n}\n\n.page-content {\n    display: grid;\n    grid-template-areas: 'nav section section section';\n    align-items: stretch;\n    border-radius: 25px;\n    box-shadow: var(--shadow);\n}\n\n/*\nNAVIGATION\n */\n\nnav {\n    display: grid;\n    align-items: start;\n    background: var(--primary-dark);\n    grid-template-rows: minmax(20px, max-content) 1fr;\n    border-radius: 25px 0 0 25px;\n    grid-area: nav;\n}\n\nnav h2, nav li {\n    padding: 0 25px;\n}\n\nnav h2 {\n    margin-bottom: 0;\n}\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    display: grid;\n    grid-template-rows: auto;\n}\n\n.project-checked {\n    background: var(--primary);\n}\n\n\n/*\nSECTION\n */\n\n.project-todos {\n    background: var(--primary);\n    border-radius: 0 25px 25px 0;\n    grid-area: section;\n    grid-template-columns: 1fr;\n    display: grid;\n    grid-gap: 25px;\n    padding: 25px;\n    align-items: center;\n}\n\n.todo-card {\n    background: var(--primary-dark);\n    display: grid;\n    padding: 25px;\n    border-radius: 15px;\n    grid-template-areas: 'title title title edit' 'desc desc desc desc' 'date date date done';\n    grid-column-gap: 15px;\n    box-shadow: var(--shadow);\n}\n\n.todo-done {\n    background:#63B3ED\n;\n}\n\n.priority {\n    background: var(--primary);\n    display: flex;\n    width: 35px;\n    height: 35px;\n    border-radius: 50px;\n    grid-area: priority;\n    justify-self: center;\n    margin: 0 5px;\n    cursor: pointer;\n}\n\nh3[contenteditable=\"true\"], p[contenteditable=\"true\"] {\n    background-color: var(--primary);\n}\n\n.todo-card-important {\n    border: solid #C53030 5px;\n}\n\n.todo-card h3 {\n    grid-area: title;\n    margin: 0;\n    align-self: center;\n}\n\n.delete-btn {\n    background: var(--primary);\n    display: flex;\n    width: 35px;\n    height: 35px;\n    border-radius: 50px;\n    grid-area: close;\n    justify-self: start;\n    margin: 0 5px;\n    cursor: pointer;\n}\n\n.edit-btn {\n    background: var(--primary);\n    display: flex;\n    width: 35px;\n    height: 35px;\n    border-radius: 50px;\n    grid-area: edit;\n    justify-self: end;\n    margin: 0 5px;\n    cursor: pointer;\n\n}\n\n\n.check-btn {\n    background: var(--primary);\n    display: flex;\n    width: 35px;\n    height: 35px;\n    border-radius: 50px;\n    grid-area: edit;\n    justify-self: end;\n    margin: 0 5px;\n    cursor: pointer;\n\n}\n\n\n.todo-card p {\n    grid-area: desc;\n    margin-bottom: 2em;\n}\n\n.date-due {\n    grid-area: date;\n    text-align: center;\n    background: var(--primary);\n    border-radius: 25px;\n}\n\n.done-status {\n    grid-area: done;\n    text-align: center;\n    background: var(--primary);\n    border-radius: 15px;\n}\n\n.add-btn {\n    background: var(--primary-dark);\n    width: 55px;\n    height: 55px;\n    border-radius: 50px;\n    display: flex;\n    box-shadow: var(--shadow);\n    justify-self: end;\n}\n\ni {\n    margin: auto;\n}\n\n.hidden {\n    display: none;\n}\n\n@media (max-width: 992px) {\n    body {\n        margin: 62px 100px;\n    }\n}\n\n@media (max-width: 768px) {\n    .page-content {\n        grid-template-areas: 'nav' 'section' 'section' 'section';\n        justify-items: stretch;\n    }\n\n    nav {\n        border-radius: 25px 25px 0 0;\n    }\n\n    .project-todos {\n        border-radius: 0 0 25px 25px;\n    }\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,d,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);t(1);var r=t(0),o=t.n(r);o.a.get("body")&&(document.body.innerHTML=o.a.get("body"));let a=[],i=Array.from(document.querySelectorAll(".project-todos")),d=document.querySelector(".add-project");const s=document.querySelector(".page-content");let c=0;const l=()=>{const e=Array.from(document.querySelectorAll(".page-content ul li"));e.pop(),e.forEach(n=>n.addEventListener("click",t=>{let r=n.id[n.id.length-1];e.forEach(e=>e.classList.remove("project-checked")),t.target.classList.add("project-checked"),i.forEach(e=>{e.id===r?e.classList.remove("hidden"):e.classList.add("hidden")})}))},p=(e,n)=>{const t=e.parentNode;t.removeChild(e),t.innerHTML+='\n               <div class="todo-card todo-card-important">\n            <h3>New task</h3>\n            <div class="btn-wrapper" style="grid-area: edit;justify-self: end;display: flex; justify-content: end">\n                        <div class="btn check-btn hidden"><i class="fas fa-check"></i></div>\n            <div class="btn edit-btn"><i class="fas fa-edit"></i></div>\n            <span class="btn priority important"><i class="fas fa-exclamation"></i></span>\n            <div class="btn delete-btn"><i class="fas fa-trash"></i></div>\n            </div>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Eveniet id mollitia nisi quasi velit. Deserunt eligendi nam quos\n                temporibus unde?\n            </p>\n            <span class="date-due">15/03/2200</span>\n            <span class="btn done-status"><i class="fas fa-check"></i></span>\n        </div>\n        ',t.appendChild(e)},u=()=>{a=[],i.forEach(e=>{const n=(e=>{const n=[];return{getTodos:()=>n,remove:e=>{let t=n.indexOf(e);t&&t>0&&n.splice(t,1)},add:e=>{n.push(e)},getId:()=>e}})(e.id);e.querySelectorAll(".todo-card").forEach(e=>{const t=e.querySelector("h3").textContent,r=e.querySelector("p").textContent,o=e.querySelector(".date-due").textContent,a=e.querySelector(".priority").classList.contains("important"),i=e.querySelector(".done-status").classList.contains("done"),d=(s=t,c=r,l=o,p=a,u=i,{setName:e=>{s=e},setDescription:e=>{c=e},setDueDate:e=>{l=e},changePriority:()=>{p=!p},changeDone:()=>{u=!u},getName:()=>s,getDescription:()=>c,getDueDate:()=>l,isPriority:()=>p,isDone:()=>u});var s,c,l,p,u;n.add(d)}),a.push(n)}),c=a[a.length-1].getId()},f=()=>{d.addEventListener("click",e=>{const n=document.querySelector(".page-content ul");c++,n.removeChild(d),n.innerHTML+=`\n            <li id="op-${c}" contenteditable="true">\n                New project\n            </li>\n        `,n.appendChild(d),s.innerHTML+=`\n        <section class="project-todos hidden" id="${c}">\n            <div class="btn add-btn"><i class="fas fa-plus fa-2x"></i></div>\n        </section>\n        `,l()})};l(),u(),document.body.addEventListener("click",e=>{const n=e.target;if(n&&n.matches(".add-btn"))p(n);else if(n&&n.matches("svg.fa-2x")){const e=n.parentNode.parentNode;p(e)}else if(n&&n.matches("path")){const e=n.parentNode.parentNode.parentNode;e.matches(".add-btn")&&p(e)}}),f(),document.body.addEventListener("click",e=>{const n=e.target;if(n&&n.matches(".edit-btn")){n.classList.add("hidden");const e=n.parentNode.parentNode,t=e.querySelector("h3"),r=e.querySelector("p"),o=e.querySelector(".check-btn");t.setAttribute("contenteditable","true"),r.setAttribute("contenteditable","true"),o.classList.remove("hidden")}else if(n&&n.matches("svg.fa-edit")){n.parentNode.parentNode.classList.add("hidden");const e=n.parentNode.parentNode.parentNode.parentNode,t=e.querySelector("h3"),r=e.querySelector("p"),o=e.querySelector(".check-btn");t.setAttribute("contenteditable","true"),r.setAttribute("contenteditable","true"),o.classList.remove("hidden")}}),document.body.addEventListener("click",e=>{const n=e.target;if(n&&n.matches(".check-btn")){n.classList.add("hidden");const e=n.parentNode.parentNode,t=e.querySelector("h3"),r=e.querySelector("p"),o=e.querySelector(".edit-btn");t.setAttribute("contenteditable","false"),r.setAttribute("contenteditable","false"),o.classList.remove("hidden")}else if(n&&n.matches("svg.fa-check")&&n.parentNode.parentNode.matches(".check-btn")){n.parentNode.parentNode.classList.add("hidden");const e=n.parentNode.parentNode.parentNode.parentNode,t=e.querySelector("h3"),r=e.querySelector("p"),o=e.querySelector(".edit-btn");t.setAttribute("contenteditable","false"),r.setAttribute("contenteditable","false"),o.classList.remove("hidden")}}),document.body.addEventListener("click",e=>{const n=e.target;if(n&&n.matches(".delete-btn")){const e=n.parentNode.parentNode;e.parentNode.removeChild(e)}else if(n&&n.matches("svg.fa-trash")){const e=n.parentNode.parentNode.parentNode.parentNode;e.parentNode.removeChild(e)}}),document.body.addEventListener("click",e=>{const n=e.target;n&&n.matches(".done-status")&&(n.parentNode.classList.toggle("todo-done"),n.classList.toggle("done"))}),document.body.addEventListener("click",e=>{const n=e.target;if(n&&n.matches(".priority")){const e=n.parentNode.parentNode;n.classList.toggle("important"),e.classList.toggle("todo-card-important")}else if(n&&n.matches("svg.fa-exclamation")){const e=n.parentNode.parentNode.parentNode.parentNode;n.parentNode.parentNode.classList.toggle("important"),e.classList.toggle("todo-card-important")}}),setInterval(()=>{i=Array.from(document.querySelectorAll(".project-todos")),d=document.querySelector(".add-project"),u(),f()},1e3)}]);