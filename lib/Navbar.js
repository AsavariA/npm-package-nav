module.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r){e.exports=require("react")},function(e,r,n){var t=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);e.exports=o.locals||{}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,a=e}finally{try{!t&&c.return&&c.return()}finally{if(o)throw a}}return n}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=n(0),a=l(o);n(1);var i=l(n(6)),c=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}r.default=function(e){var r=(0,o.useState)(!1),n=t(r,2),l=n[0],u=n[1],s=(0,o.useState)(!0),f=t(s,2),d=f[0],p=f[1],v=function(){var e=window.scrollY;u(e>0)};return(0,o.useEffect)((function(){window.addEventListener("scroll",v)})),a.default.createElement("div",{className:"navbar",style:{position:l?"fixed":"inherit",backgroundColor:e.color}},a.default.createElement(c.default,{href:e.logo}),a.default.createElement(i.default,{toggleNav:d,color:e.color,drawerColor:e.drawerColor,drawerHeight:e.drawerHeight},e.children),a.default.createElement("div",{className:"burger",onClick:function(){return p(!d)}},a.default.createElement("div",{className:"line1",style:{backgroundColor:e.burgerColor,transform:d?"none":"rotate(-45deg) translate(-5px, 6px)"}}),a.default.createElement("div",{className:"line2",style:{backgroundColor:e.burgerColor,opacity:d?"1":"0"}}),a.default.createElement("div",{className:"line3",style:{backgroundColor:e.burgerColor,transform:d?"none":"rotate(45deg) translate(-5px, -6px)"}})))}},function(e,r,n){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),i=[];function c(e){for(var r=-1,n=0;n<i.length;n++)if(i[n].identifier===e){r=n;break}return r}function l(e,r){for(var n={},t=[],o=0;o<e.length;o++){var a=e[o],l=r.base?a[0]+r.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=c(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:h(d,r),references:1}),t.push(s)}return t}function u(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=n.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,f=(s=[],function(e,r){return s[e]=r,s.filter(Boolean).join("\n")});function d(e,r,n,t){var o=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=f(r,o);else{var a=document.createTextNode(o),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(a,i[r]):e.appendChild(a)}}function p(e,r,n){var t=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var v=null,m=0;function h(e,r){var n,t,o;if(r.singleton){var a=m++;n=v||(v=u(r)),t=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(r),t=p.bind(null,n,r),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var n=l(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var o=c(n[t]);i[o].references--}for(var a=l(e,r),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,r,n){(r=n(5)(!1)).push([e.i,".navbar{\r\n    display: flex;\r\n    background-color:aliceblue;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: -webkit-fill-available;\r\n    color: black;\r\n    z-index: 5000;\r\n}\r\n\r\n\r\n.burger{\r\n    display: none;\r\n  }\r\n  \r\n  .burger div{\r\n    width: 25px;\r\n    height: 3px;\r\n    background-color: black;\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n  }\r\n\r\n  .logo-img{\r\n    height: 3rem;\r\n    margin: 0.5rem 0;\r\n  }\r\n\r\n  .navlinks{\r\n    width: 40%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  @media screen and (max-width: 760px) {\r\n    .navlinks{\r\n      position: absolute;\r\n      right: 0px;\r\n      height: 50vh;\r\n      margin: 0;\r\n      top: 0vh;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      width: 100%;\r\n      background-color: aliceblue;\r\n      justify-content: center;\r\n      transition: transform 0.5s ease-in;\r\n      z-index: 9000;\r\n    }\r\n\r\n    .burger {\r\n        display: block;\r\n        cursor: pointer;\r\n        transition-property: back;\r\n        z-index: 9000;\r\n      }\r\n  }",""]),e.exports=r},function(e,r,n){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=function(e,r){var n=e[1]||"",t=e[3];if(!t)return n;if(r&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);t&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),r.push(l))}},r}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t,o=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,a=e}finally{try{!t&&c.return&&c.return()}finally{if(o)throw a}}return n}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(0),i=(t=a)&&t.__esModule?t:{default:t};r.default=function(e){var r=window.matchMedia("(max-width: 760px)"),n=(0,a.useState)(r.matches),t=o(n,2),c=t[0],l=t[1],u={transform:c&&e.toggleNav?"translateY(-100%)":"translateY(0)",backgroundColor:c&&e.drawerColor?e.drawerColor:e.color,height:c?e.drawerHeight:"auto"};return(0,a.useEffect)((function(){var e=function(e){return l(e.matches)};return r.addEventListener("change",e),function(){return r.removeEventListener("change",e)}})),i.default.createElement("div",{className:"navlinks",style:u},e.children)}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t,o=n(0),a=(t=o)&&t.__esModule?t:{default:t};n(1);r.default=function(e){return a.default.createElement("div",null,a.default.createElement("img",{className:"logo-img",src:e.href}))}}]);