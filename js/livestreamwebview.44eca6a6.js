(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["livestreamwebview"],{"50dd":function(e,t,s){"use strict";s.r(t);var a,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"webview-livestream column is-12 has-background-white",staticStyle:{height:"100%","background-colors":"#1a1a1a","padding-left":"3px","padding-right":"3px","padding-top":"3px"}},[a("div",{staticClass:"box-shadow is-video"},[a("figure",{staticClass:"image is-16by9"},[a("video",{staticClass:"video-js vjs-default-skin has-ratio @contextmenu=e => e.preventDefault()",attrs:{id:"web-video-id",posters:"../assets/img/onair.png",playsinline:""}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.streamEnd,expression:"!streamEnd"}],staticClass:"has-text-centered is-round",staticStyle:{position:"absolute",top:"5px",right:"5px","z-index":"5"}},[e._m(0)]),a("div",{staticStyle:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.streamEnd,expression:"streamEnd"}],staticClass:"box-shadow",attrs:{src:s("5e02")}}),a("img",{directives:[{name:"show",rawName:"v-show",value:!e.streamEnd&&!e.isPlaying,expression:"!streamEnd && !isPlaying"}],staticClass:"box-shadow",attrs:{src:s("f707")}})])]),a("div",{class:{"is-verse has-text-centered":!0,"is-hidden":!e.showVerse}},[a("div",{staticStyle:{display:"table",height:"100%",overflow:"hidden",width:"100%"}},[a("div",{staticStyle:{display:"table-cell","vertical-align":"middle","white-space":"normal",height:"100%","text-align":"center",width:"100%"}},[a("div",{staticStyle:{display:"inline-block"}},[a("p",{staticClass:"is-size-5-desktop is-size-7-mobile has-text-white"},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.verse.book)+" "+e._s(e.verse.chapter)+" : "+e._s(e.verse.verse)+"\n\t\t\t\t\t\t")]),a("br"),a("p",{staticClass:"is-size-3-desktop is-size-7-mobile has-text-white",staticStyle:{"word-breaks":"break-all",display:"block","white-space":"normal","line-height":"1.5"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.verse.content)+"\n\t\t\t\t\t\t")])])])])]),a("div",{class:{"is-video-banner has-text-centered":!0,"is-hidden":!e.showBanner}},[a("div",{staticClass:"banner-title is-size-7-mobile is-size-7-desktop has-weight-500 has-text-grey-darker"},[e._v(e._s(e.banner.title))]),a("div",{staticClass:"banner-content"},[a("p",{staticClass:"is-size-7-mobile is-size-6-desktop"},[e._v(e._s(e.banner.content))])])]),a("div",{staticClass:"js-audio box-shadow custom-controlbar",staticStyle:{"background-color":"#021c1e"}},[a("div",{staticStyle:{"padding-left":"10px",width:"60%",display:"inline-block"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return e._play()}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return e._pause()}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),e._v("\n\t\t\t\t \n\t\t\t\t")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.streamEnd,expression:"streamEnd"}],staticClass:"has-text-centered is-round",staticStyle:{position:"absolute",bottom:"5px",right:"5px","z-index":"5"}},[e._m(1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.streamEnd,expression:"!streamEnd"}],staticClass:"has-text-right is-round",staticStyle:{position:"absolute",bottom:"5px",right:"5px","z-index":"5"}},[a("div",{staticClass:"has-text-white rounds fullsite has-weight-500",staticStyle:{width:"150px","font-size":"9px","line-height":"20px"}},[a("span",[e._v(e._s(e.currentTime))])])])])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"has-text-white round fullsite has-weight-500",staticStyle:{width:"45px","font-size":"9px","background-color":"#FF1E16","line-height":"20px"}},[s("span",{staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[e._v("LIVE")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"has-text-white round fullsite has-weight-500",staticStyle:{width:"45px","font-size":"9px","background-color":"#FF1E16","line-height":"20px"}},[s("span",{staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[e._v("OFF")])])}],r=(s("1c01"),s("58b2"),s("8e6e"),s("f3e2"),s("d25f"),s("ac6a"),s("456d"),s("7f7f"),s("bd86")),o=s("d225"),l=s("b0b4"),d=s("308d"),c=s("6bb5"),u=s("4e2b"),h=s("9ab4"),m=s("60a3");function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(s,!0).forEach(function(t){Object(r["a"])(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var f=a=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(d["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.viewProgram=!1,e.askQuestionModal=!1,e.question={},e.currentMedia={title:"",date:""},e.isPlaying=!1,e.chatRegistered=!1,e.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},e.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},e.programs={},e.audioVolume=.2,e.connections={},e.player=null,e.paused=!1,e.streamEnd=!0,e.isProgram=!0,e.newStyle=[],e.modalEnd=null,e.modalPause=null,e.verse={},e.showVerse=!1,e.banner={},e.showBanner=!1,e.service_section="chat",e.chatList=[],e.chat={name:"",content:""},e.isMuted=!1,e.currentTime="",e.intervalId=null,e.sfuHandle=null,e.textHandle=null,e.janus=null,e}return Object(u["a"])(t,e),Object(l["a"])(t,[{key:"_toggleVideoModal",value:function(){1==this.streamEnd?this.modalEnd.open():this.modalEnd.close()}},{key:"mounted",value:function(){var e=this;this.socketConnect(),this.player=window.videojs("web-video-id",{controls:!1,responsive:!0,controlBar:{pictureInPictureToggle:!1,durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,progressControl:!1}}),this.remoteVideo=this.player.tech().el(),this.player.ready(function(){e.player.controlBar.playToggle.on("click",function(t){e.isPlaying?e._pause():e._play()})}),this.player.on("timeupdate",function(t){return e.currentTime=e.formatTime(e.player.currentTime())});var t=window.videojs.getComponent("ModalDialog");this.modalEnd=new t(this.player,{temporary:!1,uncloseable:!0}),this.modalEnd.addClass("not-started-modal"),this.player.addChild(this.modalEnd),this.modalPause=new t(this.player,{temporary:!1,uncloseable:!0}),this.modalPause.addClass("pause-modal"),this.player.addChild(this.modalPause),this.modalEnd.open(),window.onbeforeunload=function(){null!=e.intervalId&&clearInterval(e.intervalId)},window.addEventListener("sendquestion",function(t){e.question=v({},e.question,{name:t.detail["name"],content:t.detail["content"]}),e.sendQuestion()})}},{key:"sendQuestion",value:function(){if(!this.streamEnd){var e={textroom:"message",to:"pastor",transaction:this.randomString(12),room:7305,text:JSON.stringify(this.question)};this.textHandle.data({text:JSON.stringify(e)}),this.question={},this.askQuestionModal=!1}}},{key:"sendChat",value:function(){if(""!=this.chat.content){var e={textroom:"message",transaction:this.randomString(12),room:7305,text:JSON.stringify(this.chat)};this.textHandle.data({text:JSON.stringify(e)}),this.chat=v({},this.chat,{content:""})}}},{key:"_play",value:function(){this.remoteVideo.play(),this.isPlaying=!0}},{key:"_pause",value:function(){this.remoteVideo.pause(),this.isPlaying=!1}},{key:"_mute",value:function(){this.remoteVideo.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.remoteVideo.muted=!1,this.isMuted=!1}},{key:"registerChat",value:function(){var e=this;this.janus.attach({plugin:"janus.plugin.textroom",success:function(t){e.textHandle=t,e.textHandle.send({message:{request:"setup"}})},onmessage:function(t,s){s&&e.textHandle.createAnswer({jsep:s,media:{audio:!1,video:!1,data:!0},success:function(t){return e.textHandle.send({message:{request:"ack"},jsep:t})},error:function(e){}})},ondata:function(e){},ondataopen:function(){var t={textroom:"join",room:7305,username:e.randomString(12),display:e.randomString(12),transaction:e.randomString(12)};e.textHandle.data({text:JSON.stringify(t)})}}),this.chat=v({},this.chat,{name:name})}},{key:"registerStream",value:function(){var e=this;this.janus.attach({plugin:"janus.plugin.videoroom",success:function(t){e.sfuHandle=t;var s={request:"join",room:1,ptype:"subscriber",feed:27052};e.sfuHandle.send({message:s})},onmessage:function(t,s){s&&e.sfuHandle.createAnswer({jsep:s,media:{audioSend:!1,videoSend:!1,data:!0},success:function(t){return e.sfuHandle.send({message:{request:"start",room:1},jsep:t})},error:function(e){}})},ondata:function(t){if(!e.streamEnd){var s=JSON.parse(t);s["verse"]&&(1==s["show"]?(e.verse=s,e.showVerse=!0):e.showVerse=!1),s["banner"]&&(1==s["show"]?(e.banner=s,e.showBanner=!0):e.showBanner=!1)}},onremotestream:function(t){return window.Janus.attachMediaStream(e.remoteVideo,t)}})}},{key:"randomString",value:function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s="",a=0;a<e;a++){var i=Math.floor(Math.random()*t.length);s+=t.substring(i,i+1)}return s}},{key:"streamStarted",value:function(e){var t=this;switch(e){case"yes":this.streamEnd=!1,null!=this.modalEnd&&this.modalEnd.close(),window.Janus.init({debug:!1,dependencies:window.Janus.useDefaultDependencies(),callback:function(){t.janus=new window.Janus({server:a._socketServer,iceServers:t.servers.iceServers,success:function(){t.registerStream(),t.registerChat()},error:function(e){return console.log("CAUSE cannt create JANU "+e)}})}});break;case"no":if(!this.streamEnd){this.streamEnd=!0,this.isPlaying=!1,this.sfuHandle.send({message:{request:"leave"}}),this.sfuHandle=null;var s={textroom:"leave",room:7305,transaction:this.randomString(12)};this.textHandle.data({text:JSON.stringify(s)}),this.textHandle=null}break;case"pause":this.player.muted(!0),this.modalPause.open();break;case"resume":this.modalPause.close(),this.player.muted(!1),this._play();break}}},{key:"socketConnect",value:function(){var e=this,t=new WebSocket("wss://api.horemowna.org:3001");t.onopen=function(){null!=e.global_timer_id&&clearTimeout(e.global_timer_id),t.send("video-started")},t.onmessage=function(t){t=JSON.parse(t.data),t["videostarted"]&&e.streamStarted(t["videostarted"])},t.onclose=function(s){return e.global_timer_id=setTimeout(function(){e._pause(),t=null,e.socketConnect()},3e3)},t.onerror=function(e){return t.close()}}},{key:"beforeDestroy",value:function(){this.player&&this.player.dispose()}},{key:"formatTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;e=e<0?0:e;var s=Math.floor(e%60),a=Math.floor(e/60%60),i=Math.floor(e/3600),n=Math.floor(t/60%60),r=Math.floor(t/3600);(isNaN(e)||e===1/0)&&(i=a=s=0);var o=i>0||r>0?i+":":"",l=((i||n>=10)&&a<10?"0"+a:a)+":",d=s<10?"0"+s:s;return o+l+d}}]),t}(m["b"]);f._socketServer="wss://api.horemowna.org:8989",Object(h["a"])([Object(m["c"])("streamEnd")],f.prototype,"_toggleVideoModal",null),f=a=Object(h["a"])([m["a"]],f);var g=f,w=g,y=(s("8a81"),s("2877")),b=Object(y["a"])(w,i,n,!1,null,null,null);t["default"]=b.exports},"7f7f":function(e,t,s){var a=s("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||s("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},"8a81":function(e,t,s){"use strict";var a=s("e0c4"),i=s.n(a);i.a},e0c4:function(e,t,s){}}]);
//# sourceMappingURL=livestreamwebview.44eca6a6.js.map