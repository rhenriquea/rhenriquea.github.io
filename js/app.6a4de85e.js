(function(e){function t(t){for(var i,s,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},s={app:0},o={app:0},a=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"96138c49"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"b5a71949"}[e]+".css",o=c.p+i,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===i||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete s[e],f.parentNode.removeChild(f),n(a)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){s[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06dd":function(e,t,n){e.exports=n.p+"img/codestyler.365957e8.png"},"1d22":function(e,t,n){"use strict";var i=n("5433"),s=n.n(i);s.a},3130:function(e,t,n){},"4a41":function(e,t,n){"use strict";var i=n("5770"),s=n.n(i);s.a},5433:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",[n("FixedHeader",{staticClass:"fixed-header"}),n("router-view",{staticClass:"main"}),n("Footer")],1)])},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("header",[i("div",{staticClass:"container--expanded"},[i("figure",[i("img",{class:{small:e.elOffset>80},attrs:{id:"logo",src:n("06dd"),alt:"Codestyler logo similar neon sign"}}),i("figcaption",{attrs:{hidden:""}},[e._v("Logo")])]),i("nav",[i("ul",{staticClass:"navigation__links"},[i("li",{class:{active:"HOME"===e.activeLink}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#welcome",offset:-70},expression:"{ el: '#welcome', offset: -70 }"}]},[e._v("HOME")])]),i("li",{class:{active:"EDUCATION"===e.activeLink}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#education",offset:-70},expression:"{ el: '#education', offset: -70 }"}]},[e._v("EDUCATION")])]),i("li",{class:{active:"TECHNOLOGIES"===e.activeLink}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#technologies",offset:-70},expression:"{ el: '#technologies', offset: -70 }"}]},[e._v("TECHNOLOGIES")])]),i("li",{class:{active:"EXPERIENCE"===e.activeLink}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#experiences",offset:-70},expression:"{ el: '#experiences', offset: -70 }"}]},[e._v("EXPERIENCE")])]),i("li",{class:{active:"CONTACT"===e.activeLink}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact"},expression:"{ el: '#contact' }"}]},[e._v("CONTACT")])])]),i("button",{staticClass:"navigation__hamburger",on:{click:e.openSidenav}},[e._m(0),i("span",{attrs:{"aria-hidden":"menu"}},[e._v("Menu")])])])])]),i("Sidenav",{attrs:{open:e.sidenavOpen},on:{close:e.dismissSidenav},scopedSlots:e._u([{key:"sidenav-body",fn:function(){return[i("ul",{staticClass:"sidenav__menu"},[i("li",{class:{active:"HOME"===e.activeLink},on:{click:e.dismissSidenav}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#welcome"},expression:"{ el: '#welcome' }"}]},[e._v("HOME")])]),i("li",{class:{active:"EDUCATION"===e.activeLink},on:{click:e.dismissSidenav}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#education",offset:-70},expression:"{ el: '#education', offset: -70 }"}]},[e._v("EDUCATION")])]),i("li",{class:{active:"TECHNOLOGIES"===e.activeLink},on:{click:e.dismissSidenav}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#technologies",offset:-70},expression:"{ el: '#technologies', offset: -70 }"}]},[e._v("TECHNOLOGIES")])]),i("li",{class:{active:"EXPERIENCE"===e.activeLink},on:{click:e.dismissSidenav}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#experiences",offset:-70},expression:"{ el: '#experiences', offset: -70 }"}]},[e._v("EXPERIENCE")])]),i("li",{class:{active:"CONTACT"===e.activeLink},on:{click:e.dismissSidenav}},[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contact"},expression:"{ el: '#contact' }"}]},[e._v("CONTACT")])])])]},proxy:!0}])})],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation__hamburger--icon"},[n("span"),n("span"),n("span")])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"overlay"}},[e.open?n("span",{staticClass:"overlay",on:{click:function(t){return e.$emit("close",t)}}}):e._e()]),n("transition",{attrs:{name:"slide"}},[e.open?n("aside",{ref:"sidenav",staticClass:"sidenav"},[n("div",{staticClass:"sidenav__content"},[n("div",{staticClass:"sidenav__content--header"},[e._t("sidenav-header")],2),n("div",{staticClass:"sidenav__content--body"},[e._t("sidenav-body")],2),n("div",{staticClass:"sidenav__content--footer"},[e._t("sidenav-footer")],2)])]):e._e()])],1)},u=[],d={props:{open:{type:Boolean,required:!1,defaut:!1}},data:function(){return{offCanvasEl:null}},watch:{open:function(e){this.toggleDocumentScroll(e),this.handleScrollInContent(e)}},mounted:function(){this.toggleDocumentScroll(this.open)},methods:{toggleDocumentScroll:function(e){e?document.documentElement.classList.add("no-scroll"):document.documentElement.classList.remove("no-scroll")},handleScrollInContent:function(e){var t=this;setTimeout((function(){if(e&&(t.offCanvasEl=t.$refs["sidenav"]||t.offCanvasEl),t.offCanvasEl){var n=e?"addEventListener":"removeEventListener";t.offCanvasEl[n]("scroll",t.handleScroll)}}),0)},handleScroll:function(){this.offCanvasEl&&this.$emit("scroll",this.offCanvasEl.scrollTop)}}},f=d,v=(n("4a41"),n("2877")),p=Object(v["a"])(f,l,u,!1,null,"8a839e3c",null),m=p.exports,b={components:{Sidenav:m},data:function(){return{myStyle:{},elOffset:0,sidenavOpen:!1}},created:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(e){this.elOffset=e.srcElement.defaultView.pageYOffset},openSidenav:function(e){e.target.closest("button").firstChild.classList.toggle("open"),this.sidenavOpen=!this.sidenavOpen},dismissSidenav:function(){this.sidenavOpen=!1},scrollToSection:function(e){window.scrollTo({top:e+10,behavior:"smooth"})}},computed:{activeLink:function(){return this.$store.getters.activeLink}}},h=b,g=(n("1d22"),Object(v["a"])(h,r,c,!1,null,"39a996cc",null)),E=g.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"row container--expanded"},[n("div",{staticClass:"col"},[n("p",[e._v("Copyright ©2020 All rights reserved | Rafael de Almeida")])])])])}],_=(n("ae20"),{}),O=Object(v["a"])(_,I,C,!1,null,"7bc87320",null),y=O.exports,V={components:{FixedHeader:E,Footer:y},computed:{abracadabra:function(){return localStorage.getItem("siteEnabled")}}},w=V,x=(n("5c0b"),Object(v["a"])(w,o,a,!1,null,null,null)),S=x.exports,k=(n("d3b7"),n("8c4f"));i["a"].use(k["a"]);var T=[{path:"/",name:"home",component:function(){return n.e("about").then(n.bind(null,"4a12"))}},{path:"/test",name:"test",component:function(){return n.e("about").then(n.bind(null,"a833"))}}],N=new k["a"]({mode:"history",routes:T}),L=N,A=n("f13c"),j=n.n(A),P=n("85fe"),H={setSectionVisible:function(e,t){var n=e.commit;switch(t.section){case"about":n("setAboutIsVisible",t.visibility);break;case"contact":n("setContactIsVisible",t.visibility);break;case"education":n("setEducationIsVisible",t.visibility);break;case"experience":n("setExperienceIsVisible",t.visibility);break;case"technologies":n("setTechnologiesIsVisible",t.visibility);break;case"welcome":n("setWelcomeIsVisible",t.visibility);break;default:break}}},D={setAboutIsVisible:function(e,t){e.aboutIsVisible=t},setContactIsVisible:function(e,t){e.contactIsVisible=t},setEducationIsVisible:function(e,t){e.educationIsVisible=t},setExperienceIsVisible:function(e,t){e.experienceIsVisible=t},setTechnologiesIsVisible:function(e,t){e.technologiesIsVisible=t},setWelcomeIsVisible:function(e,t){e.welcomeIsVisible=t}},$={getAboutIsVisible:function(e){return e.aboutIsVisible},getContactIsVisible:function(e){return e.contactIsVisible},getEducationIsVisible:function(e){return e.educationIsVisible},getExperienceIsVisible:function(e){return e.experienceIsVisible},getTechnologiesIsVisible:function(e){return e.technologiesIsVisible},getWelcomeIsVisible:function(e){return e.welcomeIsVisible},activeLink:function(e){var t=null;return t=e.welcomeIsVisible&&!e.experienceIsVisible?"HOME":e.experienceIsVisible&&!e.educationIsVisible?"EXPERIENCE":e.educationIsVisible&&!e.aboutIsVisible?"EDUCATION":e.aboutIsVisible&&!e.technologiesIsVisible?"ABOUT":e.technologiesIsVisible&&!e.contactIsVisible?"TECHNOLOGIES":"CONTACT",t}},M={aboutIsVisible:!1,contactIsVisible:!1,educationIsVisible:!1,experienceIsVisible:!1,technologiesIsVisible:!1,welcomeIsVisible:!1},U={actions:H,getters:$,mutations:D,modules:{},state:M};i["a"].config.productionTip=!1,i["a"].use(j.a),i["a"].use(P["a"]),i["a"].use(s["a"]),i["a"].use(j.a,{container:"body",duration:500,easing:"ease",offset:-1e3,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0});var R=new s["a"].Store(U);new i["a"]({router:L,render:function(e){return e(S)},store:R}).$mount("#app")},5770:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"9c0c":function(e,t,n){},ae20:function(e,t,n){"use strict";var i=n("3130"),s=n.n(i);s.a}});
//# sourceMappingURL=app.6a4de85e.js.map