(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);v&&v(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9c45b713"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"3cf313a0"}[t]+".css",r=l.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],v.parentNode.removeChild(v),a(s)},v.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(v)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,a[1](p)}r[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0db0":function(t,e,a){t.exports=a.p+"img/steamnews.41af1048.png"},3979:function(t,e,a){t.exports=a.p+"img/koizumibot1.f55bb9e1.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"container clear"},[t._m(0),a("div",{staticClass:"header-right"},[a("ul",{staticClass:"header-nav clear"},[a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/weather"}},[t._v("Weather")])],1),a("li",{staticClass:"header-nav-item"},[a("router-link",{attrs:{to:"/crud"}},[t._v("Music")])],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[a("h1",{staticClass:"header-title"},[t._v("Takanori K's Portoforio")])])}],l={name:"Header",props:{msg:String}},c=l,u=a("2877"),p=Object(u["a"])(c,s,o,!1,null,null,null),v=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container clear"},[a("p",[a("span",[t._v("Takanori K's Portfolio")]),t._v(" by "),a("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com/tnxdvl1074"}},[t._v("@tnxdvl1074")])])])])}],f={name:"Footer",props:{msg:String}},h=f,_=Object(u["a"])(h,d,m,!1,null,null,null),b=_.exports,C={components:{Header:v,Footer:b}},g=C,y=Object(u["a"])(g,i,r,!1,null,null,null),w=y.exports,k=(a("d3b7"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._m(1),a("section",{staticClass:"twitter section"},[a("div",{staticClass:"container clear"},[a("h2",{staticClass:"section-title"},[t._v("ツイッター")]),a("v-card",{staticClass:"mx-auto"},[a("v-card-title",[a("v-icon",{attrs:{large:"",left:"",color:"#26c6da"}},[t._v("mdi-twitter")])],1),a("v-flex",{attrs:{sm12:""}},[a("Timeline",{attrs:{id:t.user_id,sourceType:"profile",options:{tweetLimit:"2"}}})],1)],1)],1)]),t._m(2)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"profile section"},[n("div",{staticClass:"container clear"},[n("h2",{staticClass:"section-title"},[t._v("プロフィール")]),n("div",{staticClass:"profile-left"},[n("img",{attrs:{src:a("8927")}})]),n("div",{staticClass:"profile-right"},[n("p",[t._v(" 小泉高規(コイズミタカノリ)"),n("br"),t._v(" 自衛官退職後webエンジニアになるため本格的に学習開始"),n("br"),t._v(" ポートフォリオを作成しつつ就職活動しながら継続して不足していると考えられる技術について学習中"),n("br"),n("br"),t._v(" このページはvue/cli 4.1.1で作成,レスポンシブ対応とmetaタグでSEOを意識している"),n("br"),t._v(" フロントエンドとバックエンドは別プロジェクトが多いらしいという情報からやってみることにした"),n("br"),n("br"),t._v(" フロントからのAPI連携も必須要項に多かったのでフロントエンドはこれ、バックエンドはrailsでapi作ることにしました"),n("br"),n("br"),n("a",{attrs:{href:"https://github.com/takanori-k-1074/vue-pages"}},[n("b",[t._v("このページ(vue)のgithub")])]),n("br")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"timeline section"},[a("div",{staticClass:"container clear"},[a("h2",{staticClass:"section-title"},[t._v("ヒストリー")]),a("ul",{staticClass:"timeline"},[a("li",[a("p",{staticClass:"timeline-date"},[t._v("2019年10月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" 自衛官在職中同僚からの影響でプログラミングに興味をもちエンジニアを目指すことに決める ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年3月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" 自衛官退職 ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年4月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" プログラミングの勉強（Progate、Railsチュートリアル）、 ポートフォリオ作成のための知見を情報収集 ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年6月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" プログラミングスクールに入学（2ヶ月半） ")]),a("p",[t._v(" HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、Git・Githubの使い方、 DB設計、Railsを使った簡単なチャットアプリケーションの作成 ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年7月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" 自由作成課題でlinebotを作成"),a("br"),t._v(" チーム開発でフリマアプリの制作 ")]),a("p")])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年8月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v("プログラミングスクールを卒業")]),a("p",[t._v("ポートフォリオの制作に取り掛かる")]),a("p",[t._v("Docker・AWS・CircleCI・vuejsについて学習する")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年9月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v("ポートフォリオが完成")]),a("p",[t._v("steamnews翻訳アプリ、ポートフォリオページ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年10月")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v("就職活動開始")]),a("p",[t._v("就職活動の中で不足している知見を情報収集")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2020年12月"),a("br")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v(" 就職活動継続しながら追加ポートフォリオ作成開始、フロント、バックが別プロジェクトでのAPi連携(CRUD)がお題 ")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("2021年1月"),a("br"),t._v("（現在）")]),a("div",{staticClass:"timeline-content"},[a("p",[t._v("railsapiをAWS,ECSでデプロイまで実施,vueはvuetify使用")])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"course section"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section-title"},[t._v("ポートフォリオ一覧")]),n("div",{staticClass:"course-wrapper"},[n("div",{staticClass:"course-item"},[n("a",{attrs:{href:"https://aqueous-beyond-99235.herokuapp.com/"}},[n("img",{attrs:{src:a("8ffb")}})]),n("p",[t._v("Rails / Vue")])]),n("div",{staticClass:"course-item"},[n("a",{attrs:{href:"https://mysteamnews1074.com/"}},[n("img",{attrs:{src:a("0db0")}})]),n("p",[t._v("Rails / AWS / Docker / steamAPI / Azuretranslator")])]),n("div",{staticClass:"course-item"},[n("img",{attrs:{src:a("3979")}}),n("p",[t._v("Ruby / LineDevelopers / openweathermap API")])])]),n("h3",{staticClass:"section-title"},[n("a",{staticClass:"link",attrs:{href:"https://github.com/takanori-k-1074"}},[t._v("githubのリンク")])])])])}],S=a("7397"),O={components:{Timeline:S["Timeline"]},data:function(){return{user_id:"tnxdvl1074"}}},P=O,j=a("6544"),T=a.n(j),A=a("b0af"),L=a("99d9"),$=a("0e8f"),M=a("132d"),D=Object(u["a"])(P,x,E,!1,null,null,null),H=D.exports;T()(D,{VCard:A["a"],VCardTitle:L["a"],VFlex:$["a"],VIcon:M["a"]}),n["a"].use(k["a"]);var I=[{path:"/",name:"Home",component:H},{path:"/weather",name:"Weather",component:function(){return a.e("about").then(a.bind(null,"6a05"))}},{path:"/crud",name:"Crud",component:function(){return a.e("about").then(a.bind(null,"f527"))}},{path:"/create",name:"MusicCreate",component:function(){return a.e("about").then(a.bind(null,"c851"))}},{path:"/edit/:id",name:"MusicEdit",component:function(){return a.e("about").then(a.bind(null,"e054"))}}],R=new k["a"]({mode:"history",base:"/",routes:I}),F=R,N=a("2f62");n["a"].use(N["a"]);var V=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),W=a("bc3a"),B=a.n(W),q=a("2106"),K=a.n(q),z=a("f309");n["a"].use(z["a"]);var G=new z["a"]({});n["a"].config.productionTip=!1,n["a"].use(K.a,B.a),new n["a"]({router:F,store:V,vuetify:G,render:function(t){return t(w)}}).$mount("#app"),a("9299")},8927:function(t,e,a){t.exports=a.p+"img/image0.8cdadea9.png"},"8ffb":function(t,e,a){t.exports=a.p+"img/portforio.6364e7dc.png"},9299:function(t,e,a){}});
//# sourceMappingURL=app.3abfd6da.js.map