(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),o=n("2d00"),c=a("species");t.exports=function(t){return o>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var r=n("861d"),a=n("e8b5"),o=n("b622"),c=o("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?a.f(t,c,o(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),c=n("861d"),u=n("7b0b"),i=n("50c4"),s=n("8418"),d=n("65f0"),f=n("1dde"),v=n("b622"),p=n("2d00"),l=v("isConcatSpreadable"),y=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!a((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),w=f("concat"),_=function(t){if(!c(t))return!1;var e=t[l];return void 0!==e?!!e:o(t)},g=!b||!w;r({target:"Array",proto:!0,forced:g},{concat:function(t){var e,n,r,a,o,c=u(this),f=d(c,0),v=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?c:arguments[e],_(o)){if(a=i(o.length),v+a>y)throw TypeError(h);for(n=0;n<a;n++,v++)n in o&&s(f,v,o[n])}else{if(v>=y)throw TypeError(h);s(f,v++,o)}return f.length=v,f}})},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-container"},[n("div",{staticClass:"date"},[t._v(" "+t._s(t.todaysDate())+" ")]),n("div",{staticClass:"weather"},[n("p",[t._v(t._s(t.query.data.data.weather[0].main))]),n("p",[t._v(t._s(t.query.data.data.main.temp)+"℃")]),n("p",[t._v("風速"+t._s(t.query.data.data.wind.speed)+"m")]),n("p",[t._v(t._s(t.query.data.data.name))])])])},a=[],o=(n("99af"),n("bc3a")),c=n.n(o),u={data:function(){return{query:null,weather:{}}},mounted:function(){var t=this;c.a.get("http://rails-ecs-alb-920434585.ap-northeast-1.elb.amazonaws.com/api/v1/weather").then((function(e){return t.query=e}))},methods:{todaysDate:function(){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=new Date,r=t[n.getMonth()],a=e[n.getDay()],o=n.getDate(),c=n.getFullYear();return"".concat(r," ").concat(o," ").concat(a," ").concat(c)}}},i=u,s=n("2877"),d=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=about.05f18dce.js.map