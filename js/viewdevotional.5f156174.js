(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["viewdevotional"],{3542:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen fade-in has-text-left",attrs:{to:"/devotionals/"+t.post.uid}},[s("div",{staticClass:"card hover-shadow"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content has-text-left"},[s("p",{staticClass:"is-size-7-desktop is-size-7-mobile has-weight-500 has-text-grey"},[t._v("\n                       "+t._s(t._f("uppercase")(t.post.data.title[0].text))+"\n                    ")]),s("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-orange-dark"},[t._v("\n                        "+t._s(t._formatDate(t.post.first_publication_date))),s("br")]),s("div",{staticClass:"is-padding-10"}),s("div",{staticClass:"excerpt"},[s("p",{staticClass:"has-text-grey-darker is-size-7-mobile is-size-7-desktop",attrs:{id:t.post.id}},[t._v("\n                            "+t._s(t.post.data.content[0]["text"])+"\n                        ")])]),s("div",{staticClass:"is-padding-10"}),s("div",{staticClass:"divider"}),s("div",{staticClass:"is-padding-10"}),s("div",{staticClass:"btn white-green"},[t._v("READ ARTICLE")])])])])])])},a=[],n=s("d225"),o=s("b0b4"),r=s("308d"),l=s("6bb5"),c=s("4e2b"),d=s("9ab4"),u=s("60a3"),v=function(t){function e(){return Object(n["a"])(this,e),Object(r["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(o["a"])(e,[{key:"mounted",value:function(){var t=document.getElementById(this.$props.post.id);window.$clamp(t,{clamp:3,useNativeClamp:!1,truncationHTML:"&ensp;"})}},{key:"_formatDate",value:function(t){var e=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUN","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],s=new Date(t);return e[s.getMonth()]+" "+s.getDate()+" "+s.getFullYear()}}]),e}(u["b"]);v=Object(d["a"])([Object(u["a"])({props:{post:{type:Object,require:!0}}})],v);var p=v,b=p,h=(s("9562"),s("2877")),m=Object(h["a"])(b,i,a,!1,null,"a618d4d8",null);e["a"]=m.exports},"5d0e":function(t,e,s){"use strict";var i=function(){return window.PrismicJS.getApi("https://horemownaorg.cdn.prismic.io/api/v2",{accessToken:"MC5Yb0ZwcEJBQUFDTUFpcDZZ.77-9CnQn77-977-977-977-977-977-9cO-_vVF977-977-9V--_vTsh77-977-9ewPvv70NTVVecu-_vQo"})};e["a"]=i},9562:function(t,e,s){"use strict";var i=s("eb7f"),a=s.n(i);a.a},b36a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-12"},[s("div",{staticClass:"columns is-mobile is-multiline is-variable is-1 fade-in"},[t.devotional.data?s("div",{staticClass:"column is-12-mobile is-8-desktop is-offset-2-desktop",staticStyle:{"background-color":"#f1f1f1"}},[s("div",{staticClass:"columns is-multiline is-padding-40"},[s("div",{staticClass:"column is-12 is-padding-10"}),s("div",{staticClass:"column is-6-desktop is-offset-3 has-text-centered"},[s("p",{staticClass:"has-weight-500 is-size-7-mobile is-size-7-desktop has-text-orange-dark"},[t._v("\n                                "+t._s(t._formatDate(t.devotional.first_publication_date))+"\n                            ")]),s("div",{staticClass:"is-padding-20"}),s("h1",{staticClass:"is-size-4-mobile is-size-5-desktop is-header-montserrat has-text-grey-darker"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t._f("uppercase")(t.devotional.data.title[0].text))+"\n\t\t\t\t\t\t\t")]),s("p",{staticClass:"is-size-7  has-text-grey"},[t._v("BY PASTOR PAUL RIKA ")])]),s("div",{staticClass:"column is-12-mobile is-6-desktop is-offset-3-desktop is-padding-40 has-text-justified"},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop "},[s("span",{staticClass:"has-weight-500 has-text-grey-darker"},[t._v("KEY VERSE: ")]),t._v(" "+t._s(t.devotional.data.verses[0].text)+"\n\t\t\t\t\t\t\t")]),s("br"),t._l(t.devotional.data.content,function(e,i){return s("div",{key:i,staticStyle:{"padding-bottom":"10px"}},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop is-line-25"},[t._v(t._s(e.text))])])}),s("br"),t.devotional.data.song.length>0?s("p",{staticClass:"is-size-7-mobile is-size-7-desktop "},[s("span",{staticClass:"has-weight-500 has-text-grey-darker"},[t._v("SONG OF THE DAY: ")]),t._v(" "+t._s(t.devotional.data.song[0].text)+"\n\t\t\t\t\t\t\t")]):t._e(),s("div",{staticClass:"is-padding-5"}),t.devotional.data.thought.length>0?s("p",{staticClass:"is-size-7-mobile is-size-7-desktop "},[s("span",{staticClass:"has-weight-500 has-text-grey-darker"},[t._v("THOUGHT OF THE DAY: ")]),t._v(" "+t._s(t.devotional.data.thought[0].text)+"\n\t\t\t\t\t\t\t")]):t._e()],2)])]):t._e(),s("div",{staticClass:"column is-12-mobile is-8-desktop is-offset-2-desktop has-text-left is-padding-40"},[s("router-link",{staticClass:"btn orange-dark",attrs:{to:"/devotionals"}},[t._v("Back To Devotionals ")])],1)]),s("div",{staticClass:"columns is-multiline is-variable fade-in"},[s("div",{staticClass:"column is-12 is-padding-40"}),s("div",{staticClass:"column is-10 is-offset-1 has-text-centered"},[s("p",{staticClass:"has-weight-500 has-text-grey-darker is-size-6-desktop is-size-6-mobile"},[t._v("IN THE SAME CATEGORY")]),s("div",{staticClass:"is-padding-10"}),s("div",{staticClass:"columns is-multiline is-padding-10"},t._l(t.related,function(t,e){return s("Devotional",{key:e,attrs:{post:t}})}),1)])])])])},a=[],n=(s("96cf"),s("3b8d")),o=s("d225"),r=s("b0b4"),l=s("308d"),c=s("6bb5"),d=s("4e2b"),u=s("9ab4"),v=s("60a3"),p=s("5d0e"),b=s("3542");v["a"].registerHooks(["beforeRouteEnter"]);var h=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.prismicDOM=window.PrismicDOM,t.devotional={},t.related=[],t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,s){s(function(t){t._getPage()})}},{key:"_getPage",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["a"])();case 2:return e=t.sent,t.next=5,e.getByUID("devotional",this.$route.params.uid);case 5:this.devotional=t.sent,this._getRelated(this.devotional.data.category[0].text);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_getRelated",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["a"])();case 2:return s=t.sent,t.next=5,s.query(window.PrismicJS.Predicates.fulltext("my.devotional.category",e),{fetch:["devotional.title","devotional.image","devotional.category","devotional.date"],pageSize:6,page:1});case 5:i=t.sent,this.related=i.results;case 7:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"_formatDate",value:function(t){var e=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUN","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],s=new Date(t);return e[s.getMonth()]+" "+s.getDate()+", "+s.getFullYear()}}]),e}(v["b"]);h=Object(u["a"])([Object(v["a"])({components:{Devotional:b["a"]}})],h);var m=h,f=m,g=s("2877"),C=Object(g["a"])(f,i,a,!1,null,null,null);e["default"]=C.exports},eb7f:function(t,e,s){}}]);
//# sourceMappingURL=viewdevotional.5f156174.js.map