(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aboutdetail"],{"5d0e":function(t,e,s){"use strict";var i=function(){return window.PrismicJS.getApi("https://horemownaorg.cdn.prismic.io/api/v2",{accessToken:"MC5Yb0ZwcEJBQUFDTUFpcDZZ.77-9CnQn77-977-977-977-977-977-9cO-_vVF977-977-9V--_vTsh77-977-9ewPvv70NTVVecu-_vQo"})};e["a"]=i},"5e9f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline is-mobile"},[s("div",{staticClass:"column is-12-mobile is-10-tablet is-offset-1-tablet is-10-desktop is-offset-1-desktop is-8-widescreen is-offset-2-widescreen"},[t.about.middle_image?s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12"},[s("div",{staticClass:"columns is-multiline featured",style:{"background-image":t.backgroundImage(t.about.middle_image.url)}},[s("div",{staticClass:"column is-6 is-offset-3 has-text-centered"},[s("p",{staticClass:"has-weight-500 has-text-white is-size-5-desktop is-size-6-mobile"},[t._v("\n\t\t\t\t\t\t\t\tHOLINESS IN THE FEAR OF GOD\n\t\t\t\t\t\t\t")]),s("h1",{directives:[{name:"show",rawName:"v-show",value:"our-beliefs"==t.$route.params.id,expression:"$route.params.id == 'our-beliefs'"}],staticClass:"is-size-3-mobile is-size-2-desktop has-text-white"},[t._v("\n\t\t\t\t\t\t\t\tWHAT WE BELIEVE\n\t\t\t\t\t\t\t")]),s("h1",{directives:[{name:"show",rawName:"v-show",value:"objectives"==t.$route.params.id,expression:"$route.params.id == 'objectives'"}],staticClass:"is-size-3-mobile is-size-2-desktop has-text-white"},[t._v("\n\t\t\t\t\t\t\t\tAIMS AND OBJECTIVES\n\t\t\t\t\t\t\t")]),s("h1",{directives:[{name:"show",rawName:"v-show",value:"at-a-glance"==t.$route.params.id,expression:"$route.params.id == 'at-a-glance'"}],staticClass:"is-size-3-mobile is-size-2-desktop has-text-white"},[t._v("\n\t\t\t\t\t\t\t\tHOREMOW AT A GLANCE\n\t\t\t\t\t\t\t")])])])])]):t._e(),t.about.middle_image?s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-12-mobile is-10-tablet is-offset-1-tablet is-10-desktop is-offset-1-desktop is-6-widescreen is-offset-3-widescreen is-padding-20 has-text-justified"},t._l(t.about[t.$route.params.id],function(e,i){return s("div",{key:i,staticClass:"is-padding-20"},[s("div",{staticClass:"has-text-left has-text-grey"},[s("p",{directives:[{name:"show",rawName:"v-show",value:"objectives"!=t.$route.params.id,expression:"$route.params.id != 'objectives'"}],staticClass:"is-size-7-mobile is-size-7-desktop has-weight-500"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(i+1)+" - "+t._s(t._f("capitalize")(t.prismicDOM.RichText.asText(e.title)))+"\n\t\t\t\t\t\t\t")])]),s("div",{staticClass:"is-padding-10"}),s("div",{class:{"has-text-centered":"objectives"==t.$route.params.id}},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop is-line-25"},[s("span",{directives:[{name:"show",rawName:"v-show",value:"objectives"==t.$route.params.id,expression:"$route.params.id == 'objectives'"}],staticClass:"has-weight-500 has-text-grey"},[t._v(t._s(i+1)+" - ")]),t._v(" \n\t\t\t\t\t\t\t\t"+t._s(t.prismicDOM.RichText.asText(e.content))+"\n\t\t\t\t\t\t\t")])]),s("div",{class:{"has-text-centered":"objectives"==t.$route.params.id}},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-orange-dark"},[t._v(t._s(t.prismicDOM.RichText.asText(e.verses)))])])])}),0)]):t._e()])])},a=[],o=(s("96cf"),s("3b8d")),r=s("d225"),n=s("b0b4"),c=s("308d"),u=s("6bb5"),d=s("4e2b"),l=s("9ab4"),m=s("60a3"),v=s("5d0e");m["a"].registerHooks(["beforeRouteEnter"]);var p=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.prismicDOM=window.PrismicDOM,t.documents=[],t.overlay="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),",t.about={},t}return Object(d["a"])(e,t),Object(n["a"])(e,[{key:"_changeRoute",value:function(){this._getPage()}},{key:"beforeRouteEnter",value:function(t,e,s){s(function(t){t._getPage()})}},{key:"_getPage",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["a"])();case 2:return e=t.sent,t.next=5,e.query(window.PrismicJS.Predicates.at("document.type","about"),{fetch:["about."+this.$route.params.id,"about.middle_image"]});case 5:s=t.sent,this.about=s.results[0].data,this.documents=s.results[0].data[this.$route.params.id];case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"backgroundImage",value:function(t){return this.overlay+'url("'+t+'")'}}]),e}(m["b"]);Object(l["a"])([Object(m["c"])("$route",{deep:!0})],p.prototype,"_changeRoute",null),p=Object(l["a"])([m["a"]],p);var b=p,h=b,f=(s("b0ac"),s("2877")),w=Object(f["a"])(h,i,a,!1,null,"10fac4c1",null);e["default"]=w.exports},af0a:function(t,e,s){},b0ac:function(t,e,s){"use strict";var i=s("af0a"),a=s.n(i);a.a}}]);
//# sourceMappingURL=aboutdetail.ba948c48.js.map