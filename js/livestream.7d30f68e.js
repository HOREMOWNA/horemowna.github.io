(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["livestream"],{"3a5d":function(t,e,s){},5749:function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"livestream columns is-multiline",attrs:{styles:"padding-bottoms:0; margin-bottoms:0;"}},[a("div",{class:{"modal is-hidden-mobile":!0,"is-active":t.askQuestionModal}},[a("div",{staticClass:"modal-background",staticStyle:{opacity:"0.8"}}),a("div",{staticClass:"modal-content columns has-background-white box-shadow"},[a("div",{staticClass:"column is-10 is-offset-1 is-padding-80 has-text-centered",staticStyle:{"min-height":"400px"}},[t._m(0),a("div",{staticClass:"is-padding-10"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.name,expression:"question.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your name"},domProps:{value:t.question.name},on:{input:function(e){e.target.composing||t.$set(t.question,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.content,expression:"question.content",modifiers:{trim:!0}}],attrs:{placeholder:"your question in one paragraph"},domProps:{value:t.question.content},on:{input:function(e){e.target.composing||t.$set(t.question,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"is-padding-5"}),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(){return t.sendQuestion()}}},[t._v("send")]),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(e){t.askQuestionModal=!1}}},[t._v("close")])])])]),a("div",{class:{"modal is-hidden-desktop":!0,"is-active":t.askQuestionModal}},[a("div",{staticClass:"modal-background has-background-white",on:{click:function(){return t.askQuestionModal=!1}}}),a("div",{staticClass:"modal-content columns",staticStyle:{width:"100%","max-height":"100%"}},[a("div",{staticClass:"column is-8 is-offset-2 is-padding-80 has-text-centered has-background-white",staticStyle:{"min-height":"400px",position:"relative"}},[t._m(1),a("div",{staticClass:"is-padding-10"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.name,expression:"question.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your name"},domProps:{value:t.question.name},on:{input:function(e){e.target.composing||t.$set(t.question,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.content,expression:"question.content",modifiers:{trim:!0}}],attrs:{placeholder:"your question in one paragraph"},domProps:{value:t.question.content},on:{input:function(e){e.target.composing||t.$set(t.question,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"is-padding-5"}),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(){return t.sendQuestion()}}},[t._v("send")]),a("br")])]),a("a",{staticClass:"modal-close has-text-grey-darker has-background-black",on:{click:function(){return t.askQuestionModal=!1}}})]),a("div",{staticClass:"column is-12 pb-0"},[t._m(2),a("div",{staticClass:"has-text-right"},[a("router-link",{staticClass:"btn fullsite-btn deep-green",attrs:{to:"/"}},[t._v("To Fullsite")])],1),a("div",{staticClass:"columns pt-0 pb-0"},[a("div",{staticClass:"column is-12 table-wrapper pt-0"},[a("div",{staticClass:"columns is-mobile is-multiline is-variable is-1 ",staticStyle:{display:"table-row",width:"100%"}},[a("div",{staticClass:"column is-12-mobile is-12-tablet is-9-desktop has-text-left",staticStyle:{display:"table-cell"}},[a("div",{staticClass:"box-shadow is-video"},[a("video",{staticClass:"video-js vjs-default-skin vjs-16-9 box-shadow",attrs:{id:"video-id",poster:s("f707"),playsinline:"",autoplay:"",controls:""},on:{contextmenu:function(t){return t.preventDefault()}}}),a("div",{staticClass:"has-text-centered is-round",staticStyle:{position:"absolute",bottom:"5px",right:"5px","z-index":"5"}},[a("div",{staticClass:"has-text-white round fullsite has-weight-500",staticStyle:{width:"45px","font-size":"9px","background-color":"#FF1E16","line-height":"20px"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("LIVE")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("OFF")])])]),a("div",{class:{"is-verse has-text-centered":!0,"is-hidden":!t.showVerse}},[a("div",{staticStyle:{display:"table",height:"100%",overflow:"hidden",width:"100%"}},[a("div",{staticStyle:{display:"table-cell","vertical-align":"middle","white-space":"normal",height:"100%","text-align":"center",width:"100%"}},[a("div",{staticStyle:{display:"inline-block"}},[a("p",{staticClass:"is-size-5-desktop is-size-7-mobile has-text-white"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.verse.book)+" "+t._s(t.verse.chapter)+" : "+t._s(t.verse.verse)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")]),a("br"),a("p",{staticClass:"is-size-3-desktop is-size-7-mobile has-text-white",staticStyle:{"word-breaks":"break-all",display:"block","white-space":"normal","line-height":"1.5"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.verse.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])]),a("div",{class:{"is-video-banner has-text-centered":!0,"is-hidden":!t.showBanner}},[a("div",{staticClass:"banner-title is-size-7-mobile is-size-6-desktop has-weight-500 has-text-grey-darker"},[t._v(t._s(t.banner.title))]),a("div",{staticClass:"banner-content"},[a("p",{staticClass:"is-size-7-mobile is-size-6-desktop"},[t._v(t._s(t.banner.content))])])]),a("div",{staticClass:"js-audio box-shadow custom-controlbar"},[a("div",{staticStyle:{width:"60%",display:"inline-block"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._play()}}},[a("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._pause()}}},[a("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),t._v("\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t"),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",staticStyle:{"margin-right":"5px"},on:{click:function(){return t._mute()}}},[a("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],staticStyle:{"margin-right":"5px"},on:{click:function(){return t._unmute()}}},[a("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])]),a("div",{staticClass:"has-text-right",staticStyle:{width:"40%",display:"inline-block"}},[a("span",{staticClass:"is-size- has-text-white ",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.currentTime))]),t._v("\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t")])])])]),a("div",{staticClass:"column is-12-mobile is-12-tablet is-3-desktop has-text-left has-text-centered-mobile is-hidden-mobile",staticStyle:{display:"table-cell","vertical-align":"top",height:"100%"}},[a("div",{staticClass:"playlist-container has-background-white"},[t._m(3),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgram&&"chat"==t.service_section&&!t.streamEnd,expression:"!isProgram && service_section =='chat' && !streamEnd"}],staticStyle:{position:"absolute",bottom:"0",right:"10px",left:"10px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}]},[a("a",{staticClass:"has-text-grey-darker",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.chat.name))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.content,expression:"chat.content",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important",border:"1px #807e7e solid !important"},attrs:{id:"chatinput",maxlength:"200"},domProps:{value:t.chat.content},on:{input:function(e){e.target.composing||t.$set(t.chat,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn deep-green has-cursor",on:{click:function(e){return t.sendChat()}}},[t._v("send")])]),t._v(" \n\t\t\t\t\t\t\t\t\t\t"),a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.chat.content.length)+" | 200 ")])])]),a("div",{staticClass:"playlist"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}],staticClass:"card-content",attrs:{styles:"height:92%; max-height:92%; overflow-y: auto;"}},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content has-text-centered",attrs:{styles:"height:100%; overflow-y: auto"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}]},t._l(t.programs,function(e,s){return a("div",{key:s,staticClass:"is-padding-20"},[a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey-darker has-weight-500"},[t._v("\n                                                            "+t._s(t.prismicDOM.RichText.asText(e.title))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey p-oswald"},[t._v("\n                                                        "+t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.day)))),a("br"),a("span",{staticClass:"has-text-orange-dark"},[t._v(t._s(t.prismicDOM.RichText.asText(e.time)))])])])}),0)])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgram,expression:"!isProgram"}],staticClass:"card-contents",attrs:{styles:"height:93%; max-height:93%; overflow-y: hidden; position: relatives"}},[a("div",{staticClass:"medias"},[a("div",{staticClass:"media-contents has-text-centered"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"has-cursor is-padding-60"},[a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey-darker has-weight-500"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIVE SERVICE\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"is-padding-10"}),a("p",{staticClass:"has-text-grey is-line-25",staticStyle:{"font-size":"12px"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThere is no live service at this time. \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease check our weekly schedule for upcoming services.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank You.\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"has-cursor is-padding- has-text-left"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section,expression:"service_section == 'chat'"}],attrs:{styles:"height: 530px; max-height: 80%; overflow-y: auto;"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:""==t.chat.name,expression:"chat.name == ''"}],staticClass:"has-text-centered"},[a("p",{staticClass:"has-text-grey is-size-7-mobile is-size-7-desktop is-line-25"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEnter a name before you chat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.n,expression:"chat.n",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important"},attrs:{maxlength:"200"},domProps:{value:t.chat.n},on:{input:function(e){e.target.composing||t.$set(t.chat,"n",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(){return t.chat.name=t.chat.n}}},[t._v("save")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}],staticClass:"has-text-left"},t._l(t.chatList,function(e,s){return a("div",{key:s,staticClass:"is-padding-5"},[a("p",{staticClass:"has-text-grey",staticStyle:{"font-size":"10px","word-break":"break-all"}},[a("b",[t._v(t._s(e.name))]),t._v("  "),a("span",{staticClass:"has-text-grey-darker"},[t._v(" "+t._s(e.content)+" ")])])])}),0)]),a("div",{staticClass:"is-padding-10"})])])])])])])])]),a("div",{staticClass:"columns is-mobile is-multiline is-hidden-desktop has-background-white"},[a("div",{staticClass:"column is-12 is-padding-10"}),a("div",{staticClass:"column is-12-mobile is-12-tablet is-12-desktop is-offset- is-paddin pl-4"},[t._m(4),a("div",{staticClass:"column is-12 is-padding-10"}),a("div",{staticClass:"columns is-multiline is-mobile has-background-white",staticStyle:{"min-height":"350px","max-height":"350px","padding-bottom":"0","padding-top":"0","overflow-y":"auto"}},[a("div",{staticClass:"column is-12",staticStyle:{"padding-top":"0"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}],staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content has-text-centered",attrs:{styles:"height:100%; overflow-y: auto"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}]},t._l(t.programs,function(e,s){return a("div",{key:s,staticClass:"is-padding-20"},[a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey-darker has-weight-500"},[t._v("\n                                                            "+t._s(t.prismicDOM.RichText.asText(e.title))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey p-oswald"},[t._v("\n                                                        "+t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.day)))),a("br"),a("span",{staticClass:"has-text-orange-dark"},[t._v(t._s(t.prismicDOM.RichText.asText(e.time)))])])])}),0)])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgram,expression:"!isProgram"}],staticClass:"card-contents"},[a("div",{staticClass:"medias"},[a("div",{staticClass:"media-contents has-text-centered"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"has-cursor is-padding-60"},[a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey-darker has-weight-500"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tLIVE SERVICE\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"is-padding-10"}),a("p",{staticClass:"has-text-grey is-line-25",staticStyle:{"font-size":"12px"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThere is no live service at this time. \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease check our weekly schedule for upcoming services.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThank You.\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"has-cursor is-padding- has-text-left"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section,expression:"service_section == 'chat'"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:""==t.chat.name,expression:"chat.name == ''"}],staticClass:"has-text-centered"},[a("p",{staticClass:"has-text-grey is-size-7-mobile is-size-7-desktop is-line-25"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEnter a name before you chat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.n,expression:"chat.n",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important"},attrs:{maxlength:"200"},domProps:{value:t.chat.n},on:{input:function(e){e.target.composing||t.$set(t.chat,"n",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(){return t.chat.name=t.chat.n}}},[t._v("save")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}],staticClass:"has-text-left"},t._l(t.chatList,function(e,s){return a("div",{key:s,staticClass:"is-padding-5"},[a("p",{staticClass:"has-text-grey",staticStyle:{"font-size":"10px","word-break":"break-all"}},[a("b",[t._v(t._s(e.name))]),t._v("  "),a("span",{staticClass:"has-text-grey-darker"},[t._v(" "+t._s(e.content)+" ")])])])}),0)]),a("div",{staticClass:"is-padding-10"})])])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgram&&"chat"==t.service_section&&!t.streamEnd,expression:"!isProgram && service_section =='chat' && !streamEnd"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}]},[a("a",{staticClass:"has-text-grey-darker",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.chat.name))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.content,expression:"chat.content",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important",border:"1px #807e7e solid !important"},attrs:{id:"chatinputm",maxlength:"200"},domProps:{value:t.chat.content},on:{input:function(e){e.target.composing||t.$set(t.chat,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn deep-green has-cursor",on:{click:function(e){return t.sendChat()}}},[t._v("send")])]),t._v(" \n\t\t\t\t\t\t\t\t\t"),a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.chat.content.length)+" | 200 ")])])])])])])])]),a("div",{staticClass:"column is-12 mb-0",staticStyle:{"background-color":"#1a1a1a"}},[a("div",{staticClass:"columns is-multiline ",staticStyle:{"padding-top":"0","padding-bottom":"0"}},[a("div",{staticClass:"column is-6 has-text-left",staticStyle:{"padding-top":"0"}},[a("p",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(e){t.askQuestionModal=!0}}},[t._v("ask question")])])]),a("div",{staticClass:"column is-6 has-text-right",staticStyle:{"padding-top":"0"}},[a("p",{staticClass:"btn fullsite-btn white-green"},[a("span",{staticClass:"has-cursor",on:{click:function(e){t.isProgram=!0}}},[t._v("  schedule  |")]),a("span",{staticClass:"has-cursor",on:{click:function(){t.isProgram=!1,t.service_section="chat"}}},[t._v("  chats  ")])])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"is-size-7 has-text-grey"},[s("span",{staticClass:"has-weight-500"},[t._v("ASK YOUR QUESTION")]),s("br"),t._v("\n                        *only live broadcast event\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"is-size-7 has-text-grey"},[s("span",{staticClass:"has-weight-500"},[t._v("ASK YOUR QUESTION")]),s("br"),t._v("\n                        *only live broadcast event\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"has-text-left",staticStyle:{"padding-bottom":"0"}},[s("h1",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-deep-green ml-2 my-0"},[t._v("\n\t\t\t\t\tHOREMOW NORTH AMERICA"),s("br"),s("span",{staticClass:"has-text-white"},[t._v("WALNUT CLOVE, NORTH CAROLINA")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header has-background-white"},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop card-header-title has-weight-500 has-text-orange-dark"},[t._v("\n\t\t\t\t\t\t\t\t\t\tsermon service\n\t\t\t\t\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header has-background-white"},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop card-header-title has-weight-500 has-text-orange-dark"},[t._v("\n\t\t\t\t\t\t\t\t\tsermon service\n\t\t\t\t\t\t\t\t")])])}],r=(s("1c01"),s("58b2"),s("8e6e"),s("f3e2"),s("d25f"),s("ac6a"),s("456d"),s("75fc")),o=s("bd86"),c=(s("96cf"),s("3b8d")),l=s("d225"),d=s("b0b4"),u=s("308d"),h=s("6bb5"),m=s("4e2b"),v=s("9ab4"),p=s("60a3"),g=s("5d0e");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function w(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(s,!0).forEach(function(e){Object(o["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}p["a"].registerHooks(["beforeRouteEnter"]);var b=a=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(h["a"])(e).apply(this,arguments)),t.ssocket=null,t.prismicDOM=window.PrismicDOM,t.viewProgram=!1,t.askQuestionModal=!1,t.question={},t.currentMedia={title:"",date:""},t.isPlaying=!1,t.chatRegistered=!1,t.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},t.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},t.programs={},t.audioVolume=.2,t.connections={},t.player=null,t.paused=!1,t.streamEnd=!0,t.isProgram=!0,t.newStyle=[],t.modalEnd=null,t.modalPause=null,t.verse={},t.showVerse=!1,t.banner={},t.showBanner=!1,t.service_section="chat",t.chatList=[],t.chat={name:"",content:""},t.isMuted=!1,t.currentTime="",t.intervalId=null,t.sfuHandle=null,t.textHandle=null,t.janus=null,t}return Object(m["a"])(e,t),Object(d["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,s){s(function(t){return t.getPrograms()})}},{key:"_toggleVideoModal",value:function(){1==this.streamEnd?this.modalEnd.open():this.modalEnd.close()}},{key:"mounted",value:function(){var t=this;this.socketConnect(),document.getElementById("chatinput").addEventListener("keyup",function(e){13===e.keyCode&&t.sendChat()}),document.getElementById("chatinputm").addEventListener("keyup",function(e){13===e.keyCode&&t.sendChat()}),this.player=window.videojs("video-id",{responsive:!0,controlBar:{pictureInPictureToggle:!1,durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,progressControl:!1}}),this.remoteVideo=this.player.tech().el(),this.player.ready(function(){t.player.controlBar.playToggle.on("click",function(e){t.isPlaying?t._pause():t._play()})});var e=window.videojs.getComponent("ModalDialog");this.modalEnd=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalEnd.addClass("not-started-modal"),this.player.addChild(this.modalEnd),this.modalPause=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalPause.addClass("pause-modal"),this.player.addChild(this.modalPause),this.modalEnd.open(),window.onbeforeunload=function(){null!=t.intervalId&&clearInterval(t.intervalId)}}},{key:"getPrograms",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])();case 2:e=t.sent.getSingle("program"),e.then(function(t){return s.programs=t.data.programs});case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"sendQuestion",value:function(){if(!this.streamEnd){var t={textroom:"message",to:"pastor",transaction:this.randomString(12),room:7305,text:JSON.stringify(this.question)};this.textHandle.data({text:JSON.stringify(t)}),this.question={},this.askQuestionModal=!1}}},{key:"beforeDestroy",value:function(){this.player&&this.player.dispose(),this.ssocket.close()}},{key:"sendChat",value:function(){if(""!=this.chat.content){var t={textroom:"message",transaction:this.randomString(12),room:7305,text:JSON.stringify(this.chat)};this.textHandle.data({text:JSON.stringify(t)}),this.chat=w({},this.chat,{content:""})}}},{key:"toggleFullScreen",value:function(){this.player.isFullscreen()?this.player.exitFullscreen():this.player.requestFullscreen()}},{key:"_play",value:function(){this.remoteVideo.play(),this.isPlaying=!0}},{key:"_pause",value:function(){this.remoteVideo.pause(),this.isPlaying=!1}},{key:"_mute",value:function(){this.remoteVideo.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.remoteVideo.muted=!1,this.isMuted=!1}},{key:"registerChat",value:function(){var t=this;this.janus.attach({plugin:"janus.plugin.textroom",success:function(e){t.textHandle=e,t.textHandle.send({message:{request:"setup"}})},onmessage:function(e,s){s&&t.textHandle.createAnswer({jsep:s,media:{audio:!1,video:!1,data:!0},success:function(e){return t.textHandle.send({message:{request:"ack"},jsep:e})},error:function(t){}})},ondata:function(e){e=JSON.parse(e),"message"==e["textroom"]&&(t.chatList=[].concat(Object(r["a"])(t.chatList),[JSON.parse(e.text)]))},ondataopen:function(){var e={textroom:"join",room:7305,username:t.randomString(12),display:t.randomString(12),transaction:t.randomString(12)};t.textHandle.data({text:JSON.stringify(e)})}})}},{key:"registerStream",value:function(){var t=this;this.janus.attach({plugin:"janus.plugin.videoroom",success:function(e){t.sfuHandle=e;var s={request:"join",room:1,ptype:"subscriber",feed:27052};t.sfuHandle.send({message:s})},onmessage:function(e,s){s&&t.sfuHandle.createAnswer({jsep:s,media:{audioSend:!1,videoSend:!1,data:!0},success:function(e){return t.sfuHandle.send({message:{request:"start",room:1},jsep:e})},error:function(t){}})},ondata:function(e){if(!t.streamEnd){var s=JSON.parse(e);s["verse"]&&(1==s["show"]?(t.verse=s,t.showVerse=!0):t.showVerse=!1),s["banner"]&&(1==s["show"]?(t.banner=s,t.showBanner=!0):t.showBanner=!1)}},onremotestream:function(e){return window.Janus.attachMediaStream(t.remoteVideo,e)}})}},{key:"randomString",value:function(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="",a=0;a<t;a++){var i=Math.floor(Math.random()*e.length);s+=e.substring(i,i+1)}return s}},{key:"streamStarted",value:function(t){var e=this;switch(t){case"yes":this.streamEnd=!1,null!=this.modalEnd&&this.modalEnd.close(),window.Janus.init({debug:!1,dependencies:window.Janus.useDefaultDependencies(),callback:function(){e.janus=new window.Janus({server:a._socketServer,iceServers:e.servers.iceServers,success:function(){e.registerStream(),e.registerChat()},error:function(t){return console.log("CAUSE cannt create JANU "+t)}})}});break;case"no":this.streamEnd=!0,null!=this.sfuHandle&&this.sfuHandle.send({message:{request:"leave"}}),null!=this.textHandle&&this.textHandle.send({message:{request:"leave"}});break;case"pause":this.player.muted(!0),this.modalPause.open();break;case"resume":this.modalPause.close(),this.player.muted(!1),this._play();break}}},{key:"socketConnect",value:function(){var t=this;this.ssocket=new WebSocket("wss://api.horemowna.org:3001"),this.ssocket.onopen=function(){null!=t.global_timer_id&&clearTimeout(t.global_timer_id),t.ssocket.send("video-started")},this.ssocket.onmessage=function(e){e=JSON.parse(e.data),e["videostarted"]&&t.streamStarted(e["videostarted"])},this.ssocket.onclose=function(e){return t.global_timer_id=setTimeout(function(){t._pause(),t.ssocket=null,t.socketConnect()},3e3)},this.ssocket.onerror=function(e){return t.ssocket.close()}}},{key:"hasProgram",get:function(){return 0==Object.keys(this.programs).length}}]),e}(p["b"]);b._socketServer="ws://api.horemowna.org:8188",Object(v["a"])([Object(p["c"])("streamEnd")],b.prototype,"_toggleVideoModal",null),b=a=Object(v["a"])([p["a"]],b);var x=b,y=x,C=(s("f2b2"),s("2877")),k=Object(C["a"])(y,i,n,!1,null,null,null);e["default"]=k.exports},"5d0e":function(t,e,s){"use strict";var a=function(){return window.PrismicJS.getApi("https://horemownaorg.cdn.prismic.io/api/v2",{accessToken:"MC5Yb0ZwcEJBQUFDTUFpcDZZ.77-9CnQn77-977-977-977-977-977-9cO-_vVF977-977-9V--_vTsh77-977-9ewPvv70NTVVecu-_vQo"})};e["a"]=a},f2b2:function(t,e,s){"use strict";var a=s("3a5d"),i=s.n(a);i.a}}]);
//# sourceMappingURL=livestream.7d30f68e.js.map