(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i=[];function o(t){return c.p+"js/"+({practica1:"practica1",practica2:"practica2"}[t]||t)+"."+{practica1:"18fe0a53",practica2:"e401ac7d"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var l=new Error;i=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/proyectoswd2022/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var r=a("2b0e"),n=a("ecee"),i=a("ad3d"),o=a("c074");n["c"].add(o["b"]),n["c"].add(o["c"]),n["c"].add(o["a"]),r["default"].component("icons",i["a"]);var c=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(c["a"]);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("Menu"),t._v(" "),a("b-breadcrumb",{attrs:{items:t.items}}),a("router-view"),a("Footer")],1)])},l=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:a("859c"),alt:"Logo UdL",width:"40px",height:"30px"}}),t._v(" CreARTive ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-container",[r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("Home")]),r("b-nav-item",{staticClass:"nav-link",attrs:{to:"/practica1"}},[t._v("Práctica1")]),r("b-nav-item",{staticClass:"nav-link",attrs:{to:"/practica2"}},[t._v("Práctica2")])],1)],1)],1)],1)},d=[],p={},f=p,v=(a("8a02"),a("2877")),b=Object(v["a"])(f,u,d,!1,null,"3c64faa9",null),m=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-alert",{attrs:{show:""}},[a("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),t._v(" || "),a("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(". ")],1)},h=[],_={},w=_,y=Object(v["a"])(w,g,h,!1,null,"524683b9",null),x=y.exports,P={name:"App",components:{Menu:m,Footer:x},data:function(){return{items:[{text:"Home",href:"/home",to:"/home"},{text:"Página actual",active:!0}]}}},j=P,O=(a("034f"),Object(v["a"])(j,s,l,!1,null,null,null)),k=O.exports,C=(a("d3b7"),a("8c4f")),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{staticClass:"about"},[a("h1",[t._v("Página de la asignatura "),a("strong",[t._v("Web Dinámica")]),t._v(" del Grado Diseño Digital y Tecnologías Creativas")]),a("p",[t._v("En este sitio web se encuentran las "),a("strong",[t._v(" prácticas de los alumnos ")]),t._v(" de la asignatura de Web Dinámica del "),a("b-link",{attrs:{href:"http://www.graudissenydigitalitec.udl.cat/"}},[t._v("Grado Diseño Digital y Tecnologías Creativas")]),a("strong",[t._v(" curso 2021/2022")]),t._v(" de la "),a("b-link",{attrs:{href:"http://www.udl.cat/"}},[t._v("Universitat de Lleida")]),t._v(". ")],1),a("p",[a("b-button",{attrs:{to:"/practica1",variant:"primary"}},[t._v("Visualiza el listado de prácticas 1")]),t._v(" "),a("b-button",{attrs:{to:"/practica2",variant:"primary"}},[t._v("Visualiza el listado de prácticas 2")])],1),a("p",[t._v("Consulta "),a("b-link",{attrs:{href:"https://www.instagram.com/creartive.lleida/"}},[t._v("Instagram")]),t._v(" para ver más información del grupo de alumnos. ")],1),a("Diapos")],1)])},E=[],T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"480"}},[r("b-carousel-slide",{attrs:{caption:"Info del Grado","img-src":a("b40b"),"img-alt":"Grau en disseny digital y tecnologies creatives"}}),r("b-carousel-slide",{attrs:{caption:"Aula de Prácticas","img-src":a("f527"),"img-alt":"aula con ordenadores para hacer prácticas"}})],1)],1)},L=[],S=(a("9020"),{}),G=Object(v["a"])(S,T,L,!1,null,null,null),M=G.exports,$={name:"About",components:{Diapos:M}},A=$,H=Object(v["a"])(A,D,E,!1,null,null,null),U=H.exports;r["default"].use(C["a"]);var z=[{path:"/",name:"Home",component:U},{path:"/Home",name:"Home",component:U},{path:"/Practica1",name:"Practica1",component:function(){return a.e("practica1").then(a.bind(null,"0876"))}},{path:"/Practica2",name:"Practica2",component:function(){return a.e("practica2").then(a.bind(null,"ceed"))}}],F=new C["a"]({mode:"history",base:"/proyectoswd2022/",routes:z}),I=F,J=a("a584");r["default"].use(J["a"],{config:{id:"G-3NYK1PKRZS"}}),r["default"].config.productionTip=!1,new r["default"]({router:I,render:function(t){return t(k)}}).$mount("#app")},"859c":function(t,e,a){t.exports=a.p+"img/logoUdL2.38b02fff.png"},"85ec":function(t,e,a){},"8a02":function(t,e,a){"use strict";a("aa40")},9020:function(t,e,a){"use strict";a("e37e")},aa40:function(t,e,a){},b40b:function(t,e,a){t.exports=a.p+"img/graudiseny.e6cdf020.jpg"},e37e:function(t,e,a){},f527:function(t,e,a){t.exports=a.p+"img/salamacs.7924aba5.jpg"}});
//# sourceMappingURL=app.7ca1230d.js.map