(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"06e6":function(t,e,s){},"1da0":function(t,e,s){"use strict";var a=s("06e6"),i=s.n(a);i.a},"5e02":function(t,e,s){t.exports=s.p+"img/offair.adcea034.png"},"64a9":function(t,e,s){},"8c75":function(t,e,s){"use strict";var a=s("e709"),i=s.n(a);i.a},cd49:function(t,e,s){"use strict";s.r(e);s("6b54"),s("87b3"),s("d25f"),s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative",height:"100%"},attrs:{id:"app"}},[s("div",{class:{modal:!0,"is-active":t.connectRadio}},[s("div",{staticClass:"modal-background has-background-whit",staticStyle:{opacity:"0.9"}}),s("div",{staticClass:"modal-content columns is-multiline has-background-whit",staticStyle:{width:"100%"}},[s("AudioStream",{attrs:{connectRadio:t.connectRadio},on:{radio:function(e){t.connectRadio=!1}}})],1)]),s("router-view",{staticClass:"columnn is-122 is-offset- is-padding-10 has-background-whit",attrs:{styles:"margin-top:15px"},on:{radio:function(e){t.connectRadio=!0}}})],1)},n=[],r=s("d225"),o=s("b0b4"),c=s("308d"),l=s("6bb5"),u=s("4e2b"),d=s("9ab4"),h=s("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-4 is-offset-4"},[a("div",{staticClass:"card"},[a("header",{staticClass:"card-header",staticStyle:{"background-color":"#1a1a1a"}},[a("p",{staticClass:"card-header-title p-lat has-text-grey is-size-7-mobile is-size-7-desktop"},[t._v("\n\t\t\t\t\tHOREMOW NORTH CAROLINA, USA\n\t\t\t\t")]),a("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"},on:{click:function(e){return t.$emit("radio")}}},[a("span",{staticClass:"icon"},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"grey",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])])])]),a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"box-shadow",attrs:{src:s("5e02")}}),a("img",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"box-shadow",attrs:{src:s("f707")}}),a("video",{staticClass:"video-js vjs-audio vjs-default-skin is-fluid box-shadow is-hidden-mobile",attrs:{id:"audioPlayer",playsinline:"",controls:""},on:{contextmenu:function(t){return t.preventDefault()}}}),a("div",{staticClass:"js-audio box-shadow is-hidden-desktop"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._play()}}},[a("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._pause()}}},[a("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),t._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",on:{click:function(){return t._mute()}}},[a("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],on:{click:function(){return t._unmute()}}},[a("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])])])])])])},v=[],m=(s("ac6a"),s("456d"),s("96cf"),s("3b8d")),f=s("d3fb"),g=function(){function t(){Object(r["a"])(this,t),this.mediaStreamContrainsts={video:!0,audio:!0},this.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},this.remoteStreams=[],this.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"}]}}return Object(o["a"])(t,[{key:"getInputOutputDevices",value:function(){return Object(f["a"])(navigator.mediaDevices.enumerateDevices())}},{key:"getLocalMediaStream",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia(this.mediaStreamContrainsts);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),y=new g,b=s("8dee"),w=s.n(b);window.firebase.initializeApp({apiKey:"AIzaSyCzKLl-5O-oDS_MRmDFRT5OwwMtr4PWQXI",authDomain:"horemow-d77cb.firebaseapp.com",databaseURL:"https://horemow-d77cb.firebaseio.com",projectId:"horemow-d77cb",storageBucket:"horemow-d77cb.appspot.com",messagingSenderId:"10827321953",appId:"1:10827321953:web:462a1f54805d82ec6bd020",measurementId:"G-WGH0E2DDMK"});var C=window.firebase.database().ref("/live/programs"),x=window.firebase.database().ref("live/video/connected"),_=window.firebase.database().ref("live/video/stream"),k=window.firebase.database().ref("live/video/signal"),O=window.firebase.database().ref("/live/video/chats"),S=window.firebase.database().ref("/live/video/questions"),E=window.firebase.database().ref("/live/video/verses"),j=window.firebase.database().ref("live/audio/connected"),P=window.firebase.database().ref("live/audio/stream"),D=window.firebase.database().ref("live/audio/signal"),L=window.firebase.database().ref("live/disconnected"),N={PROGRAMS:C,VIDEO_CONNECTED:x,VIDEO_STARTED_SIGNAL:_,VIDEO_SIGNAL:k,VIDEO_CHATS:O,VIDEO_VERSES:E,AUDIO_CONNECTED:j,AUDIO_STARTED_SIGNAL:P,AUDIO_SIGNAL:D,VIDEO_QUESTIONS:S,DISCONNECTED:L},M=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.touchEvent="ontouchstart"in window?"touchstart":"click",t.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},t.programs={},t.connections={},t.uuid=w.a.generate(),t.paused=!1,t.streamEnd=!1,t.isPlaying=!1,t.isMuted=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"_updateProp",value:function(){this.connectRadio?this._connect():this._disconnect()}},{key:"mounted",value:function(){var t=this;document.getElementById("pplay");this.audioPlayer=window.videojs("audioPlayer",{controls:!0,responsive:!0,controlBar:{durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,pictureInPictureToggle:!1,progressControl:!1}});document.getElementById("audioPlayer_html5_api");this.player=this.audioPlayer.tech().el(),this.player.onpause=function(){return t.isPlaying=!1},this.player.onplaying=function(){return t.isPlaying=!0},this.audioPlayer.controlBar.playToggle.on(this.touchEvent,function(e){t.isPlaying?t._pause():t._play()}),N.AUDIO_SIGNAL.on("child_added",function(e){e=JSON.parse(e.val().d),t.uuid==e.to&&t.handleSignal(e)}),N.AUDIO_STARTED_SIGNAL.on("value",function(e){"no"==e.val().started&&(t.streamEnd=!0)})}},{key:"_connect",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.AUDIO_STARTED_SIGNAL.once("value");case 2:e=t.sent.val(),"yes"==e.started&&(s=N.AUDIO_CONNECTED.push({uuid:this.uuid}),s.remove(),this.streamEnd=!1,this._pause());case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_disconnect",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"togglePlay",value:function(){this.isPlaying?this._pause():this._play()}},{key:"_play",value:function(){this.player.play()}},{key:"_pause",value:function(){this.player.pause()}},{key:"_mute",value:function(){this.player.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.player.muted=!1,this.isMuted=!1}},{key:"streamStarted",value:function(t){switch(t.val().started){case"yes":var e=N.AUDIO_CONNECTED.push({uuid:this.uuid});e.remove(),this.streamEnd=!1;break;case"no":this.streamEnd=!0;break;case"pause":this.paused=!0;break;case"resume":this.paused=!1;break}}},{key:"getRemoteMediaStream",value:function(t){this.player.srcObject=t.streams[0],this._play()}},{key:"getPeerConnection",value:function(t){var e=this;if(t!=this.uuid){if(this.connections[t])return this.connections[t];var s=new RTCPeerConnection(y.servers);return this.connections[t]=s,s.addEventListener("icecandidate",function(s){var a=N.AUDIO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t,ice:s.candidate,type:"ice"})});a.remove()}),s.addEventListener("track",function(t){return e.getRemoteMediaStream(t)}),s}}},{key:"handleSignal",value:function(t){var e=this;if(this.uuid!=t.by){var s=this.getPeerConnection(t.by);switch(t.type){case"offer":s.setRemoteDescription(t.sdp).then(function(){return s.createAnswer()}).then(function(a){s.setLocalDescription(a);var i=N.AUDIO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t.by,sdp:a,type:"answer"})});i.remove()});break;case"ice":t.ice&&s.addIceCandidate(t.ice).then(function(){}).catch(function(t){});break}}}},{key:"hasProgram",get:function(){return 0==Object.keys(this.programs).length}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])({default:!1})],M.prototype,"connectRadio",void 0),Object(d["a"])([Object(h["d"])("connectRadio")],M.prototype,"_updateProp",null),M=Object(d["a"])([h["a"]],M);var R=M,T=R,I=(s("1da0"),s("2877")),V=Object(I["a"])(T,p,v,!1,null,null,null),A=V.exports,z=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.connectRadio=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"notLivestream",get:function(){return"/media/livestream"!=this.$route.path}}]),e}(h["c"]);z=Object(d["a"])([Object(h["a"])({components:{AudioStream:A}})],z);var U=z,H=U,$=(s("034f"),Object(I["a"])(H,i,n,!1,null,null,null)),B=$.exports,q=s("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-multiline livestream",staticStyle:{height:"100%","background-color":"#1a1a1a"}},[a("div",{class:{modal:!0,"is-active":t.viewProgram}},[a("div",{staticClass:"modal-background ",staticStyle:{opacity:"0.5"},on:{click:function(){return t.viewProgram=!1}}}),a("div",{staticClass:"modal-content columns",staticStyle:{width:"100%"}},[t.hasProgram?a("div",{staticClass:"column is-6 is-offset-3 is-padding-80 has-text-centered has-background-white",staticStyle:{"min-height":"400px"}},[a("h1",{staticClass:"p-lato has-text-center is-size-6-desktop is-size-7-mobile has-text-black"},[t._v("\n\t\t\t\t\t\tOUR LIVE STREAM PROGRAMS                \n\t\t\t\t\t")]),a("p",{staticClass:"p-lato has-text-center no-text-transform",staticStyle:{color:"#141446","font-size":"13px","line-height":"1.5"}},[t._v("\n\t\t\t\t\t\tno programs are available yet. Please check back later.                \n\t\t\t\t\t")]),a("br"),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(){return t.viewProgram=!1}}},[t._v(" close ")])]):t._e(),t.hasProgram?t._e():a("div",{staticClass:"column is-6 is-offset-3 is-padding-80 has-text-centered has-background-white",staticStyle:{"min-height":"400px",position:"relative"}},[a("div",[a("h1",{staticClass:"p-lato has-text-center is-size-7-desktop is-size-7-mobile has-text-black"},[t._v("\n\t\t\t\t\t\t\tOUR LIVE STREAM PROGRAMS                \n\t\t\t\t\t\t")]),t._l(t.programs,function(e,s){return a("div",{key:s,staticClass:"listview is-padding-10"},[a("h1",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.title)))+" ")]),a("p",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.day))))]),a("p",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.time))))])])}),a("br"),a("a",{staticClass:"btn black box-shadow",attrs:{"aria-label":"close"},on:{click:function(){return t.viewProgram=!1}}},[t._v(" close ")])],2)])])]),a("div",{class:{modal:!0,"is-active":t.askQuestionModal}},[a("div",{staticClass:"modal-background has-background-whit",staticStyle:{opacity:"0.8"}}),a("div",{staticClass:"modal-content columns has-background-white box-shadow"},[a("div",{staticClass:"column is-10 is-offset-1 is-padding-80 has-text-centered",staticStyle:{"min-height":"400px"}},[t._m(0),a("div",{staticClass:"is-padding-10"}),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.name,expression:"question.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your name"},domProps:{value:t.question.name},on:{input:function(e){e.target.composing||t.$set(t.question,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.content,expression:"question.content",modifiers:{trim:!0}}],attrs:{placeholder:"your question in one paragraph"},domProps:{value:t.question.content},on:{input:function(e){e.target.composing||t.$set(t.question,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"is-padding-5"}),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:t._sendQuestion}},[t._v("send")]),a("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(e){t.askQuestionModal=!1}}},[t._v("close")])])])]),a("div",{staticClass:"column is-12 has-background-blac",staticStyle:{"background-color":"#1a1a1a"}},[a("div",{staticClass:"columns is-multiline"},[a("div",{staticClass:"column is-12"},[t._m(1),t._m(2),a("div",{staticClass:"columns is-mobile is-multiline is-variable is-1"},[a("div",{class:{"column is-12-mobile is-9-desktop has-text-left":!0,"streamend-padding":t.streamEnd}},[a("div",{staticClass:"box-shadow is-video"},[a("video",{staticClass:"video-js vjs-default-skin vjs-16-9 box-shadow is-hidde",attrs:{id:"video-id",poster:s("f707"),playsinline:"",controls:""},on:{contextmenu:function(t){return t.preventDefault()}}}),a("div",{staticClass:"is-banne has-text-centered is-round",staticStyle:{position:"absolute",bottom:"5px",right:"5px"}},[a("div",{staticClass:"has-text-white round fullsite has-weight-500",staticStyle:{width:"45px","font-size":"9px","background-color":"#FF1E16","line-height":"20px"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("LIVE")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("OFF")])])]),t._m(3),a("figure",{staticClass:"image is-16by9 is-hidden"},[a("video",{staticClass:"video-jss vjs-default-skins vjs-16-9s has-ratio box-shadow",attrs:{id:"videoid",widths:"1280",heights:"720",poster:s("f707"),playsinline:""},on:{contextmenu:function(t){return t.preventDefault()}}})]),a("div",{staticClass:"js-audio box-shadow custom-controlbar"},[a("div",{staticStyle:{width:"60%",display:"inline-block"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._play()}}},[a("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._pause()}}},[a("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),t._v("\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t"),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",staticStyle:{"margin-right":"5px"},on:{click:function(){return t._mute()}}},[a("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],staticStyle:{"margin-right":"5px"},on:{click:function(){return t._unmute()}}},[a("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])]),a("div",{staticClass:"has-text-right",staticStyle:{width:"40%",display:"inline-block"}},[a("span",{staticClass:"is-size- has-text-white ",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.currentTime))]),t._v("\n\t\t\t\t\t\t\t\t\t \t \n\t\t\t\t\t\t\t\t\t \t"),a("span",{staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("LIVE")])])])])]),a("div",{staticClass:"column is-12-mobile is-3-desktop has-text-left has-text-centered-mobile"},[a("div",{staticStyle:{position:"relative","min-height":"600px",height:"100%","max-height":"100%"}},[a("div",{staticClass:"card",staticStyle:{"min-height":"500pxx",height:"100%","max-height":"100%",position:"absolutes",widths:"100%","background-color":"#f1f1f1"}},[t._m(4),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}],staticClass:"card-content",staticStyle:{height:"92%","max-height":"92%","overflow-y":"auto"}},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content has-text-centered",attrs:{styles:"height:100%; overflow-y: auto"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}]},t._l(t.programs,function(e,s){return a("div",{key:s,staticClass:"is-padding-20"},[a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey-darker has-weight-500"},[t._v("\n                                                            "+t._s(t.prismicDOM.RichText.asText(e.title))+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey p-oswald"},[t._v("\n                                                        "+t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.day)))),a("br"),a("span",{staticClass:"has-text-orange-dark"},[t._v(t._s(t.prismicDOM.RichText.asText(e.time)))])])])}),0)])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isProgram,expression:"!isProgram"}],staticClass:"card-content",staticStyle:{height:"93%","max-height":"93%","overflow-y":"hidden",position:"relatives"}},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content has-text-centered"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"has-cursor is-padding-60"},[a("p",{staticClass:"has-weight-500 has-text-grey is-size-7-desktop is-size-6-mobile"},[t._v("Live Service")]),a("div",{staticClass:"is-padding-10"}),a("p",{staticClass:"has-text-grey is-line-25",staticStyle:{"font-size":"10px"}},[t._v("\n                                                            There is no live service at this time. \n                                                            Please check our weekly schedule for upcoming services.\n                                                            Thank You.\n                                                        ")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"has-cursor is-padding- has-text-left"},[a("div",{directives:[{name:"show",rawName:"v-show",value:"verse"==t.service_section,expression:"service_section == 'verse'"}]},[a("div",{staticClass:"has-text-justified"},[a("p",{staticClass:"has-text-grey-darker is-size-7"},[t._v(t._s(t.verse.content))])]),a("div",{staticClass:"is-padding-10"}),a("div",{staticClass:"has-text-justified"},[a("p",{staticClass:"p-lato has-text-grey-darker is-size-7"},[t._v(t._s(t.verse.reference))])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section,expression:"service_section == 'chat'"}],staticStyle:{height:"530px","max-height":"80%","overflow-y":"auto"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:""==t.chat.name,expression:"chat.name == ''"}],staticClass:"has-text-centered"},[a("p",{staticClass:"has-text-grey is-size-7-mobile is-size-7-desktop is-line-25"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEnter a name before you chat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.n,expression:"chat.n",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important"},attrs:{maxlength:"200"},domProps:{value:t.chat.n},on:{input:function(e){e.target.composing||t.$set(t.chat,"n",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(){return t.chat.name=t.chat.n}}},[t._v("save")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}],staticClass:"has-text-left"},t._l(t.chatList,function(e,s){return a("div",{key:s,staticClass:"is-padding-5"},[a("p",{staticClass:"has-text-grey",staticStyle:{"font-size":"10px","word-break":"break-all"}},[a("b",[t._v(t._s(e.name))]),t._v("  "),a("span",{staticClass:"has-text-grey-darker"},[t._v(" "+t._s(e.content)+" ")])])])}),0)]),a("div",{staticClass:"is-padding-10"})])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section&&!t.streamEnd,expression:"service_section =='chat' && !streamEnd"}],staticStyle:{position:"absolute",bottom:"5px",left:"20px",width:"90%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.chat.name,expression:"chat.name != ''"}]},[a("a",{staticClass:"has-text-grey-darker",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.chat.name))]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.content,expression:"chat.content",modifiers:{trim:!0}}],staticStyle:{"text-align":"left !important",padding:"15px !important"},attrs:{maxlength:"200"},domProps:{value:t.chat.content},on:{input:function(e){e.target.composing||t.$set(t.chat,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),a("a",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(e){return t.sendChat()}}},[t._v("send")])]),t._v(" \n\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.chat.content.length)+" | 200 ")])])])])])])]),a("div",{staticClass:"column is-12",attrs:{styles:"padding-top:0; padding-bottom:0"}},[a("div",{staticClass:"columns is-multiline is-padding-10",staticStyle:{"padding-top":"0","padding-bottom":"0"}},[a("div",{staticClass:"column is-6 has-text-left",staticStyle:{"padding-top":"0"}},[a("p",{staticClass:"is-size-7 has-text-grey"},[a("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(e){t.askQuestionModal=!0}}},[t._v("ask question")])])]),a("div",{staticClass:"column is-6 has-text-right",staticStyle:{"padding-top":"0"}},[a("p",{staticClass:"btn fullsite-btn white-green"},[a("span",{staticClass:"has-cursor",on:{click:function(e){t.isProgram=!0}}},[t._v("  schedule  |")]),a("span",{staticClass:"has-cursor",on:{click:function(){t.isProgram=!1,t.service_section="chat"}}},[t._v("  chats  ")])])])])])])])])])])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"is-size-7 has-text-grey"},[s("span",{staticClass:"has-weight-500"},[t._v("ASK YOUR QUESTION")]),s("br"),t._v("\n                        *only during live broadcast event\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"has-text-left",staticStyle:{"padding-bottom":"0"}},[s("h1",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-deep-green p-oswald",staticStyle:{margin:"0"}},[t._v("\n\t\t\t\t\t\t\tHOREMOW NORTH AMERICA"),s("br"),s("span",{staticClass:"has-text-white"},[t._v("WALNUT CLOVE, NORTH CAROLINA")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"has-text-right"},[s("p",{staticClass:"btn fullsite-btn deep-green"},[t._v("RADIO")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"is-banner has-background-red has-text-centered"},[s("p",{staticClass:"is-size-7"},[t._v("kjkjhdfdfdfdjjjjjjjjjjjjj")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header has-background-white"},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop card-header-title has-text-orange p-oswald",staticStyle:{"font-weight":"400"}},[t._v("\n\t\t\t\t\t\t\t\t            SERVICE INFORMATION\n\t\t\t\t\t\t\t            ")])])}],J=(s("1c01"),s("58b2"),s("8e6e"),s("f3e2"),s("bd86")),Q=s("75fc"),Z=function(){return window.PrismicJS.getApi("https://horemownaorg.cdn.prismic.io/api/v2",{accessToken:"MC5Yb0ZwcEJBQUFDTUFpcDZZ.77-9CnQn77-977-977-977-977-977-9cO-_vVF977-977-9V--_vTsh77-977-9ewPvv70NTVVecu-_vQo"})},W=Z;function K(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function Y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?K(s,!0).forEach(function(e){Object(J["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):K(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}h["a"].registerHooks(["beforeRouteEnter"]);var X=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.prismicDOM=window.PrismicDOM,t.viewProgram=!1,t.askQuestionModal=!1,t.question={},t.currentMedia={title:"",date:""},t.isPlaying=!1,t.mouseDown=-1,t.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},t.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},t.programs={},t.audioVolume=.2,t.connections={},t.player=null,t.uuid=w.a.generate(),t.paused=!1,t.streamEnd=!0,t.isProgram=!0,t.page=1,t.total=0,t.sermons=[],t.first=null,t.currentIndex=0,t.middleSection=[],t.newStyle=[],t.modalEnd=null,t.modalPause=null,t.verse={},t.service_section="chat",t.chatList=[],t.chat={name:"",content:""},t.isMuted=!1,t.currentTime="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,s){s(function(t){return t._getPage()})}},{key:"_toggleVideoModal",value:function(){1==this.streamEnd?this.modalEnd.open():this.modalEnd.close()}},{key:"mounted",value:function(){var t=this;N.VIDEO_SIGNAL.on("child_added",function(e){e=JSON.parse(e.val().d),t.uuid==e.to&&t.handleSignal(e)}),N.VIDEO_VERSES.on("child_added",function(e){return t.verse=e.val().verse}),N.VIDEO_CHATS.on("child_added",function(e){return t.chatList=[].concat(Object(Q["a"])(t.chatList),[JSON.parse(e.val()).chat])}),N.VIDEO_STARTED_SIGNAL.on("value",this.streamStarted),this.player=window.videojs("video-id",{responsive:!0,controlBar:{pictureInPictureToggle:!1,durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,progressControl:!1}}),this.remoteVideo=this.player.tech().el(),this.player.ready(function(){t.player.controlBar.playToggle.on("click",function(e){t.isPlaying?t._pause():t._play()})});var e=window.videojs.getComponent("ModalDialog");this.modalEnd=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalEnd.addClass("not-started-modal"),this.player.addChild(this.modalEnd),this.modalPause=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalPause.addClass("pause-modal"),this.player.addChild(this.modalPause),this.modalEnd.open(),window.onbeforeunload=function(){var e=N.DISCONNECTED.push(JSON.stringify({uuid:t.uuid}));e.remove()}}},{key:"_getPage",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this._getPrograms();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_getPrograms",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:e=t.sent.getSingle("program"),e.then(function(t){return s.programs=t.data.programs});case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_sendQuestion",value:function(){var t=N.VIDEO_QUESTIONS.push(JSON.stringify({question:this.question}));t.remove(),this.question={},this.askQuestionModal=!1}},{key:"beforeDestroy",value:function(){this.player&&this.player.dispose()}},{key:"sendChat",value:function(){if(""!=this.chat.content){var t=N.VIDEO_CHATS.push(JSON.stringify({chat:this.chat}));t.remove(),this.chat=Y({},this.chat,{content:""})}}},{key:"toggleFullScreen",value:function(){this.player.isFullscreen()?this.player.exitFullscreen():this.player.requestFullscreen()}},{key:"_play",value:function(){this.remoteVideo.play(),this.isPlaying=!0}},{key:"_pause",value:function(){this.remoteVideo.pause(),this.isPlaying=!1}},{key:"_mute",value:function(){this.remoteVideo.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.remoteVideo.muted=!1,this.isMuted=!1}},{key:"streamStarted",value:function(t){switch(t.val().started){case"yes":var e=N.VIDEO_CONNECTED.push({uuid:this.uuid});e.remove(),this.streamEnd=!1;break;case"no":null!==this.stream&&(this.streamEnd=!0,this._pause(),this.$forceUpdate());break;case"pause":console.log("ause called"),this.player.muted(!0),this.modalPause.open();break;case"resume":this.modalPause.close(),this.player.muted(!1),this._play();break}}},{key:"getRemoteMediaStream",value:function(t){var e=t.streams[0];this.remoteVideo.srcObject!==e&&(this.remoteVideo.srcObject=e)}},{key:"getPeerConnection",value:function(t){var e=this;if(t!=this.uuid){if(this.connections[t])return this.connections[t];var s=new RTCPeerConnection(this.servers);return this.connections[t]=s,s.addEventListener("icecandidate",function(s){var a=N.VIDEO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t,ice:s.candidate,type:"ice",admin:0})});a.remove()}),s.addEventListener("track",function(t){return e.getRemoteMediaStream(t)}),s}}},{key:"handleSignal",value:function(t){var e=this;if(this.uuid!=t.by){var s=this.getPeerConnection(t.by);switch(t.type){case"offer":s.setRemoteDescription(t.sdp).then(function(){return s.createAnswer()}).then(function(a){s.setLocalDescription(a);var i=N.VIDEO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t.by,sdp:a,type:"answer",admin:0})});i.remove()});break;case"ice":t.ice&&s.addIceCandidate(t.ice);break}}}},{key:"hasProgram",get:function(){return 0==Object.keys(this.programs).length}}]),e}(h["c"]);Object(d["a"])([Object(h["d"])("streamEnd")],X.prototype,"_toggleVideoModal",null),X=Object(d["a"])([h["a"]],X);var tt=X,et=tt,st=(s("8c75"),Object(I["a"])(et,G,F,!1,null,null,null)),at=st.exports;a["a"].use(q["a"]);var it,nt=new q["a"]({mode:"history",base:"/",routes:[{path:"/",component:at}]}),rt=nt,ot=(s("0cd8"),s("2f62"));a["a"].use(ot["a"]),a["a"].use(ot["a"]);var ct="ADD_TO_CART",lt="SUBTOTAL",ut=new ot["a"].Store({state:{cart:{items:[],subTotal:0}},mutations:(it={},Object(J["a"])(it,ct,function(t,e){t.cart.items=[].concat(Object(Q["a"])(t.cart.items),[e])}),Object(J["a"])(it,lt,function(t){t.cart.subTotal=t.cart.items.reduce(function(t,e){return t+e.qty*e.price},0)}),it),actions:Object(J["a"])({},ct,function(t,e){var s=t.commit;t.state;s(ct,e.product),s(lt)})}),dt=s("9483");Object(dt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,a["a"].filter("capitalize",function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}),a["a"].filter("uppercase",function(t){return t?(t=t.toString(),t.toUpperCase()):""}),new a["a"]({router:rt,store:ut,render:function(t){return t(B)}}).$mount("#app")},e709:function(t,e,s){},f707:function(t,e,s){t.exports=s.p+"img/onair.d4c33c13.png"}});
//# sourceMappingURL=app.5cc7ef40.js.map