(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9c06932e"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"2cf0b82a"}[t]+".css",i=l.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===r||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],v.parentNode.removeChild(v),a(s)},v.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){n[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=i[t]=[e,a]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,a[1](p)}i[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0db0":function(t,e,a){t.exports=a.p+"img/steamnews.41af1048.png"},3979:function(t,e,a){t.exports=a.p+"img/koizumibot1.f55bb9e1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container clear"},[t._m(0),a("div",{staticClass:"header-right"},[a("ul",{staticClass:"header-nav clear"},[a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/weather"}},[t._v("Weather")])],1),a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/crud"}},[t._v("Crud")])],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[a("h1",{staticClass:"header-title"},[t._v("Takanori K's Portoforio")])])}],l={name:"Header",props:{msg:String}},c=l,u=a("2877"),p=Object(u["a"])(c,s,o,!1,null,null,null),v=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container clear"},[a("p",[a("span",[t._v("Takanori K's Portfolio")]),t._v(" by "),a("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com/tnxdvl1074"}},[t._v("@tnxdvl1074")])])])])}],m={name:"Footer",props:{msg:String}},h=m,b=Object(u["a"])(h,d,f,!1,null,null,null),_=b.exports,g={components:{Header:v,Footer:_}},C=g,y=Object(u["a"])(C,n,i,!1,null,null,null),w=y.exports,k=(a("d3b7"),a("8c4f")),x=a("bb51");r["a"].use(k["a"]);var E=[{path:"/",name:"Home",component:x["default"]},{path:"/weather",name:"Weather",component:function(){return a.e("about").then(a.bind(null,"6a05"))}},{path:"/crud",name:"Crud",component:function(){return a.e("about").then(a.bind(null,"f527"))}}],O=new k["a"]({mode:"history",base:"/",routes:E}),S=O,j=a("2f62");r["a"].use(j["a"]);var P=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=a("bc3a"),T=a.n(A),L=a("2106"),$=a.n(L),H=a("f309");r["a"].use(H["a"]);var D=new H["a"]({});r["a"].config.productionTip=!1,r["a"].use($.a,T.a),new r["a"]({router:S,store:P,vuetify:D,render:function(t){return t(w)}}).$mount("#app"),a("9299")},"7ad4":function(t,e,a){"use strict";var r=a("9cae"),n=a.n(r);e["default"]=n.a},8927:function(t,e,a){t.exports=a.p+"img/image0.8cdadea9.png"},"8ffb":function(t,e,a){t.exports=a.p+"img/portforio.6364e7dc.png"},9299:function(t,e,a){},"9cae":function(t,e){},"9cd9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"profile section"},[r("div",{staticClass:"container clear"},[r("h2",{staticClass:"section-title"},[t._v("プロフィール")]),r("div",{staticClass:"profile-left"},[r("img",{attrs:{src:a("8927")}})]),r("div",{staticClass:"profile-right"},[r("p",[t._v(" 小泉高規(コイズミタカノリ)"),r("br"),t._v(" 自衛官退職後webエンジニアになるため本格的に学習開始"),r("br"),t._v(" ポートフォリオを作成しつつ就職活動しながら継続して不足していると考えられる技術について学習中"),r("br"),r("br"),t._v(" このページはvue/cli 4.1.1で作成,レスポンシブ対応とmetaタグでSEOを意識している"),r("br"),t._v(" フロントエンドとバックエンドは別プロジェクトが多いらしいという情報からやってみることにした"),r("br"),r("br"),t._v(" フロントからのAPI連携も必須要項に多かったのでフロントエンドはこれ、バックエンドはrailsでapi作ることにしました"),r("br"),r("br"),r("a",{attrs:{href:"https://github.com/takanori-k-1074/vue-pages"}},[r("b",[t._v("このページ(vue)のgithub")])]),r("br"),r("a",{attrs:{href:"https://github.com/takanori-k-1074/rails_api_portforio"}},[r("b",[t._v("railsapiのgithub")])])])])])]),r("section",{staticClass:"timeline section"},[r("div",{staticClass:"container clear"},[r("h2",{staticClass:"section-title"},[t._v("ヒストリー")]),r("ul",{staticClass:"timeline"},[r("li",[r("p",{staticClass:"timeline-date"},[t._v("2019年10月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v(" 自衛官在職中同僚からの影響でプログラミングに興味をもちエンジニアを目指すことに決める ")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年3月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v(" 自衛官退職 ")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年4月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v(" プログラミングの勉強（Progate、Railsチュートリアル）、 ポートフォリオ作成のための知見を情報収集 ")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年6月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v(" プログラミングスクールに入学（2ヶ月半） ")]),r("p",[t._v(" HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、Git・Githubの使い方、 DB設計、Railsを使った簡単なチャットアプリケーションの作成 ")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年7月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v(" 自由作成課題でlinebotを作成"),r("br"),t._v(" チーム開発でフリマアプリの制作 ")]),r("p")])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年8月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v("プログラミングスクールを卒業")]),r("p",[t._v("ポートフォリオの制作に取り掛かる")]),r("p",[t._v("Docker・AWS・CircleCI・vuejsについて学習する")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年9月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v("ポートフォリオが完成")]),r("p",[t._v("steamnews翻訳アプリ、ポートフォリオページ")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年10月")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v("就職活動開始")]),r("p",[t._v("就職活動の中で不足している知見を情報収集")])])]),r("li",[r("p",{staticClass:"timeline-date"},[t._v("2020年12月"),r("br"),t._v("（現在）")]),r("div",{staticClass:"timeline-content"},[r("p",[t._v("就職活動継続しながら追加ポートフォリオ作成中")])])])])])]),r("section",{staticClass:"course section"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"section-title"},[t._v("ポートフォリオ一覧")]),r("div",{staticClass:"course-wrapper"},[r("div",{staticClass:"course-item"},[r("a",{attrs:{href:"https://aqueous-beyond-99235.herokuapp.com/"}},[r("img",{attrs:{src:a("8ffb")}})]),r("p",[t._v("Rails / Vue")])]),r("div",{staticClass:"course-item"},[r("a",{attrs:{href:"https://mysteamnews1074.com/"}},[r("img",{attrs:{src:a("0db0")}})]),r("p",[t._v("Rails / AWS / Docker / steamAPI / Azuretranslator")])]),r("div",{staticClass:"course-item"},[r("img",{attrs:{src:a("3979")}}),r("p",[t._v("Ruby / LineDevelopers / openweathermap API")])])]),r("h3",{staticClass:"section-title"},[r("a",{staticClass:"link",attrs:{href:"https://github.com/takanori-k-1074"}},[t._v("githubのリンク")])])])])])}]},bb51:function(t,e,a){"use strict";var r=a("9cd9"),n=a("7ad4"),i=a("2877"),s=Object(i["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports}});
//# sourceMappingURL=app.c68855ce.js.map