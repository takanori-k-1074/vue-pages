(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6a294dbb"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0db0":function(t,e,a){t.exports=a.p+"img/steamnews.41af1048.png"},3979:function(t,e,a){t.exports=a.p+"img/koizumibot1.f55bb9e1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container clear"},[t._m(0),a("div",{staticClass:"header-right"},[a("ul",{staticClass:"header-nav clear"},[a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/weather"}},[t._v("Weather")])],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[a("h1",{staticClass:"header-title"},[t._v("Takanori K's Portoforio")])])}],l={name:"Header",props:{msg:String}},c=l,u=a("2877"),p=Object(u["a"])(c,s,o,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container clear"},[a("p",[a("span",[t._v("Takanori K's Portfolio")]),t._v(" by "),a("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com/tnxdvl1074"}},[t._v("@tnxdvl1074")])])])])}],m={name:"Footer",props:{msg:String}},b=m,h=Object(u["a"])(b,f,d,!1,null,null,null),_=h.exports,C={components:{Header:v,Footer:_}},g=C,y=Object(u["a"])(g,n,r,!1,null,null,null),w=y.exports,k=(a("d3b7"),a("8c4f")),x=a("bb51");i["a"].use(k["a"]);var j=[{path:"/",name:"Home",component:x["default"]},{path:"/weather",name:"Weather",component:function(){return a.e("about").then(a.bind(null,"6a05"))}}],O=new k["a"]({mode:"history",base:"/",routes:j}),P=O,S=a("2f62");i["a"].use(S["a"]);var E=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=a("bc3a"),$=a.n(T),A=a("2106"),H=a.n(A),L=a("f309");i["a"].use(L["a"]);var R=new L["a"]({});i["a"].config.productionTip=!1,i["a"].use(H.a,$.a),new i["a"]({router:P,store:E,vuetify:R,render:function(t){return t(w)}}).$mount("#app"),a("9299")},"7ad4":function(t,e,a){"use strict";var i=a("9cae"),n=a.n(i);e["default"]=n.a},8927:function(t,e,a){t.exports=a.p+"img/image0.8cdadea9.png"},"8ffb":function(t,e,a){t.exports=a.p+"img/portforio.6364e7dc.png"},9299:function(t,e,a){},"9cae":function(t,e){},"9cd9":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{staticClass:"profile section"},[i("div",{staticClass:"container clear"},[i("h2",{staticClass:"section-title"},[t._v("プロフィール")]),i("div",{staticClass:"profile-left"},[i("img",{attrs:{src:a("8927")}})]),i("div",{staticClass:"profile-right"},[i("p",[t._v(" 小泉高規(コイズミタカノリ)"),i("br"),t._v(" 自衛官退職後webエンジニアになるため本格的に学習開始"),i("br"),t._v(" ポートフォリオを作成しつつ就職活動しながら継続して不足していると考えられる技術について学習中"),i("br"),i("br"),t._v(" このページはvue/cli 4.1.1で作成,レスポンシブ対応とmetaタグでSEOを意識している"),i("br"),t._v(" フロントエンドとバックエンドは別プロジェクトが多いらしいという情報からやってみることにした"),i("br"),i("br"),t._v(" フロントからのAPI連携も必須要項に多かったのでフロントエンドはこれ、バックエンドはrailsでapi作ることにしました"),i("br"),i("br"),i("a",{attrs:{href:"https://github.com/takanori-k-1074/vue-pages"}},[i("b",[t._v("このページ(vue)のgithub")])]),i("br"),i("a",{attrs:{href:"https://github.com/takanori-k-1074/rails_api_portforio"}},[i("b",[t._v("railsapiのgithub")])])])])])]),i("section",{staticClass:"timeline section"},[i("div",{staticClass:"container clear"},[i("h2",{staticClass:"section-title"},[t._v("ヒストリー")]),i("ul",{staticClass:"timeline"},[i("li",[i("p",{staticClass:"timeline-date"},[t._v("2019年10月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v(" 自衛官在職中同僚からの影響でプログラミングに興味をもちエンジニアを目指すことに決める ")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年3月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v(" 自衛官退職 ")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年4月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v(" プログラミングの勉強（Progate、Railsチュートリアル）、 ポートフォリオ作成のための知見を情報収集 ")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年6月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v(" プログラミングスクールに入学（2ヶ月半） ")]),i("p",[t._v(" HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、Git・Githubの使い方、 DB設計、Railsを使った簡単なチャットアプリケーションの作成 ")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年7月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v(" 自由作成課題でlinebotを作成"),i("br"),t._v(" チーム開発でフリマアプリの制作 ")]),i("p")])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年8月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v("プログラミングスクールを卒業")]),i("p",[t._v("ポートフォリオの制作に取り掛かる")]),i("p",[t._v("Docker・AWS・CircleCI・vuejsについて学習する")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年9月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v("ポートフォリオが完成")]),i("p",[t._v("steamnews翻訳アプリ、ポートフォリオページ")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年10月")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v("就職活動開始")]),i("p",[t._v("就職活動の中で不足している知見を情報収集")])])]),i("li",[i("p",{staticClass:"timeline-date"},[t._v("2020年12月"),i("br"),t._v("（現在）")]),i("div",{staticClass:"timeline-content"},[i("p",[t._v("就職活動継続しながら追加ポートフォリオ作成中")])])])])])]),i("section",{staticClass:"course section"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"section-title"},[t._v("ポートフォリオ一覧")]),i("div",{staticClass:"course-wrapper"},[i("div",{staticClass:"course-item"},[i("a",{attrs:{href:"https://aqueous-beyond-99235.herokuapp.com/"}},[i("img",{attrs:{src:a("8ffb")}})]),i("p",[t._v("Rails / Vue")])]),i("div",{staticClass:"course-item"},[i("a",{attrs:{href:"https://mysteamnews1074.com/"}},[i("img",{attrs:{src:a("0db0")}})]),i("p",[t._v("Rails / AWS / Docker / steamAPI / Azuretranslator")])]),i("div",{staticClass:"course-item"},[i("img",{attrs:{src:a("3979")}}),i("p",[t._v("Ruby / LineDevelopers / openweathermap API")])])]),i("h3",{staticClass:"section-title"},[i("a",{staticClass:"link",attrs:{href:"https://github.com/takanori-k-1074"}},[t._v("githubのリンク")])])])])])}]},bb51:function(t,e,a){"use strict";var i=a("9cd9"),n=a("7ad4"),r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}});
//# sourceMappingURL=app.817af3cb.js.map