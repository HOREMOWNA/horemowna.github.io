(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";var s=i("64a9"),a=i.n(s);a.a},"06e6":function(t,e,i){},"1da0":function(t,e,i){"use strict";var s=i("06e6"),a=i.n(s);a.a},"5e02":function(t,e,i){t.exports=i.p+"img/offair.adcea034.png"},"64a9":function(t,e,i){},"8c75":function(t,e,i){"use strict";var s=i("e709"),a=i.n(s);a.a},cd49:function(t,e,i){"use strict";i.r(e);i("6b54"),i("87b3"),i("d25f"),i("cadf"),i("551c"),i("f751"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative",height:"100%"},attrs:{id:"app"}},[i("div",{class:{modal:!0,"is-active":t.connectRadio}},[i("div",{staticClass:"modal-background has-background-whit",staticStyle:{opacity:"0.9"}}),i("div",{staticClass:"modal-content columns is-multiline has-background-whit",staticStyle:{width:"100%"}},[i("AudioStream",{attrs:{connectRadio:t.connectRadio},on:{radio:function(e){t.connectRadio=!1}}})],1)]),i("router-view",{staticClass:"columnn is-122 is-offset- is-padding-10 has-background-whit",attrs:{styles:"margin-top:15px"},on:{radio:function(e){t.connectRadio=!0}}})],1)},n=[],r=i("d225"),o=i("b0b4"),c=i("308d"),l=i("6bb5"),u=i("4e2b"),d=i("9ab4"),h=i("60a3"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-4 is-offset-4"},[s("div",{staticClass:"card"},[s("header",{staticClass:"card-header",staticStyle:{"background-color":"#1a1a1a"}},[s("p",{staticClass:"card-header-title p-lat has-text-grey is-size-7-mobile is-size-7-desktop"},[t._v("\n\t\t\t\t\tHOREMOW NORTH CAROLINA, USA\n\t\t\t\t")]),s("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"},on:{click:function(e){return t.$emit("radio")}}},[s("span",{staticClass:"icon"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"grey",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])])])]),s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"box-shadow",attrs:{src:i("5e02")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"box-shadow",attrs:{src:i("f707")}}),s("video",{staticClass:"video-js vjs-audio vjs-default-skin is-fluid box-shadow is-hidden-mobile",attrs:{id:"audioPlayer",playsinline:"",controls:""},on:{contextmenu:function(t){return t.preventDefault()}}}),s("div",{staticClass:"js-audio box-shadow is-hidden-desktop"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._play()}}},[s("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._pause()}}},[s("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),t._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\t"),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",on:{click:function(){return t._mute()}}},[s("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],on:{click:function(){return t._unmute()}}},[s("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])])])])])])},v=[],m=(i("ac6a"),i("456d"),i("96cf"),i("3b8d")),f=i("d3fb"),g=function(){function t(){Object(r["a"])(this,t),this.mediaStreamContrainsts={video:!0,audio:!0},this.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},this.remoteStreams=[],this.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"}]}}return Object(o["a"])(t,[{key:"getInputOutputDevices",value:function(){return Object(f["a"])(navigator.mediaDevices.enumerateDevices())}},{key:"getLocalMediaStream",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia(this.mediaStreamContrainsts);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),t}(),b=new g,y=i("8dee"),w=i.n(y);window.firebase.initializeApp({apiKey:"AIzaSyCzKLl-5O-oDS_MRmDFRT5OwwMtr4PWQXI",authDomain:"horemow-d77cb.firebaseapp.com",databaseURL:"https://horemow-d77cb.firebaseio.com",projectId:"horemow-d77cb",storageBucket:"horemow-d77cb.appspot.com",messagingSenderId:"10827321953",appId:"1:10827321953:web:462a1f54805d82ec6bd020",measurementId:"G-WGH0E2DDMK"});var C=window.firebase.database().ref("/live/programs"),_=window.firebase.database().ref("live/video/connected"),x=window.firebase.database().ref("live/video/stream"),k=window.firebase.database().ref("live/video/signal"),O=window.firebase.database().ref("/live/video/chats"),S=window.firebase.database().ref("/live/video/questions"),E=window.firebase.database().ref("/live/video/verses"),j=window.firebase.database().ref("live/audio/connected"),L=window.firebase.database().ref("live/audio/stream"),P=window.firebase.database().ref("live/audio/signal"),D=window.firebase.database().ref("live/disconnected"),M={PROGRAMS:C,VIDEO_CONNECTED:_,VIDEO_STARTED_SIGNAL:x,VIDEO_SIGNAL:k,VIDEO_CHATS:O,VIDEO_VERSES:E,AUDIO_CONNECTED:j,AUDIO_STARTED_SIGNAL:L,AUDIO_SIGNAL:P,VIDEO_QUESTIONS:S,DISCONNECTED:D},N=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.touchEvent="ontouchstart"in window?"touchstart":"click",t.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},t.programs={},t.connections={},t.uuid=w.a.generate(),t.paused=!1,t.streamEnd=!1,t.isPlaying=!1,t.isMuted=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"_updateProp",value:function(){this.connectRadio?this._connect():this._disconnect()}},{key:"mounted",value:function(){var t=this;document.getElementById("pplay");this.audioPlayer=window.videojs("audioPlayer",{controls:!0,responsive:!0,controlBar:{durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,pictureInPictureToggle:!1,progressControl:!1}});document.getElementById("audioPlayer_html5_api");this.player=this.audioPlayer.tech().el(),this.player.onpause=function(){return t.isPlaying=!1},this.player.onplaying=function(){return t.isPlaying=!0},this.audioPlayer.controlBar.playToggle.on(this.touchEvent,function(e){t.isPlaying?t._pause():t._play()}),M.AUDIO_SIGNAL.on("child_added",function(e){e=JSON.parse(e.val().d),t.uuid==e.to&&t.handleSignal(e)}),M.AUDIO_STARTED_SIGNAL.on("value",function(e){"no"==e.val().started&&(t.streamEnd=!0)})}},{key:"_connect",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M.AUDIO_STARTED_SIGNAL.once("value");case 2:e=t.sent.val(),"yes"==e.started&&(i=M.AUDIO_CONNECTED.push({uuid:this.uuid}),i.remove(),this.streamEnd=!1,this._pause());case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_disconnect",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"togglePlay",value:function(){this.isPlaying?this._pause():this._play()}},{key:"_play",value:function(){this.player.play()}},{key:"_pause",value:function(){this.player.pause()}},{key:"_mute",value:function(){this.player.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.player.muted=!1,this.isMuted=!1}},{key:"streamStarted",value:function(t){switch(t.val().started){case"yes":var e=M.AUDIO_CONNECTED.push({uuid:this.uuid});e.remove(),this.streamEnd=!1;break;case"no":this.streamEnd=!0;break;case"pause":this.paused=!0;break;case"resume":this.paused=!1;break}}},{key:"getRemoteMediaStream",value:function(t){this.player.srcObject=t.streams[0],this._play()}},{key:"getPeerConnection",value:function(t){var e=this;if(t!=this.uuid){if(this.connections[t])return this.connections[t];var i=new RTCPeerConnection(b.servers);return this.connections[t]=i,i.addEventListener("icecandidate",function(i){var s=M.AUDIO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t,ice:i.candidate,type:"ice"})});s.remove()}),i.addEventListener("track",function(t){return e.getRemoteMediaStream(t)}),i}}},{key:"handleSignal",value:function(t){var e=this;if(this.uuid!=t.by){var i=this.getPeerConnection(t.by);switch(t.type){case"offer":i.setRemoteDescription(t.sdp).then(function(){return i.createAnswer()}).then(function(s){i.setLocalDescription(s);var a=M.AUDIO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t.by,sdp:s,type:"answer"})});a.remove()});break;case"ice":t.ice&&i.addIceCandidate(t.ice).then(function(){}).catch(function(t){});break}}}},{key:"hasProgram",get:function(){return 0==Object.keys(this.programs).length}}]),e}(h["c"]);Object(d["a"])([Object(h["b"])({default:!1})],N.prototype,"connectRadio",void 0),Object(d["a"])([Object(h["d"])("connectRadio")],N.prototype,"_updateProp",null),N=Object(d["a"])([h["a"]],N);var R=N,I=R,V=(i("1da0"),i("2877")),T=Object(V["a"])(I,p,v,!1,null,null,null),A=T.exports,z=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.connectRadio=!1,t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"notLivestream",get:function(){return"/media/livestream"!=this.$route.path}}]),e}(h["c"]);z=Object(d["a"])([Object(h["a"])({components:{AudioStream:A}})],z);var U=z,H=U,B=(i("034f"),Object(V["a"])(H,a,n,!1,null,null,null)),$=B.exports,q=i("8c4f"),G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline livestream",staticStyle:{height:"100%","background-color":"#1a1a1a"}},[s("div",{class:{modal:!0,"is-active":t.viewProgram}},[s("div",{staticClass:"modal-background ",staticStyle:{opacity:"0.5"},on:{click:function(){return t.viewProgram=!1}}}),s("div",{staticClass:"modal-content columns",staticStyle:{width:"100%"}},[t.hasProgram?s("div",{staticClass:"column is-6 is-offset-3 is-padding-80 has-text-centered has-background-white",staticStyle:{"min-height":"400px"}},[s("h1",{staticClass:"p-lato has-text-center is-size-6-desktop is-size-7-mobile has-text-black"},[t._v("\n\t\t\t\t\t\tOUR LIVE STREAM PROGRAMS                \n\t\t\t\t\t")]),s("p",{staticClass:"p-lato has-text-center no-text-transform",staticStyle:{color:"#141446","font-size":"13px","line-height":"1.5"}},[t._v("\n\t\t\t\t\t\tno programs are available yet. Please check back later.                \n\t\t\t\t\t")]),s("br"),s("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(){return t.viewProgram=!1}}},[t._v(" close ")])]):t._e(),t.hasProgram?t._e():s("div",{staticClass:"column is-6 is-offset-3 is-padding-80 has-text-centered has-background-white",staticStyle:{"min-height":"400px",position:"relative"}},[s("div",[s("h1",{staticClass:"p-lato has-text-center is-size-7-desktop is-size-7-mobile has-text-black"},[t._v("\n\t\t\t\t\t\t\tOUR LIVE STREAM PROGRAMS                \n\t\t\t\t\t\t")]),t._l(t.programs,function(e,i){return s("div",{key:i,staticClass:"listview is-padding-10"},[s("h1",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.title)))+" ")]),s("p",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.day))))]),s("p",{staticClass:"p-lato"},[t._v(t._s(t._f("uppercase")(t.prismicDOM.RichText.asText(e.time))))])])}),s("br"),s("a",{staticClass:"btn black box-shadow",attrs:{"aria-label":"close"},on:{click:function(){return t.viewProgram=!1}}},[t._v(" close ")])],2)])])]),s("div",{class:{modal:!0,"is-active":t.askQuestionModal}},[s("div",{staticClass:"modal-background has-background-whit",staticStyle:{opacity:"0.8"}}),s("div",{staticClass:"modal-content columns has-background-white box-shadow"},[s("div",{staticClass:"column is-10 is-offset-1 is-padding-80 has-text-centered",staticStyle:{"min-height":"400px"}},[t._m(0),s("div",{staticClass:"is-padding-10"}),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.name,expression:"question.name",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"your name"},domProps:{value:t.question.name},on:{input:function(e){e.target.composing||t.$set(t.question,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.question.content,expression:"question.content",modifiers:{trim:!0}}],attrs:{placeholder:"your question in one paragraph"},domProps:{value:t.question.content},on:{input:function(e){e.target.composing||t.$set(t.question,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"is-padding-5"}),s("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:t._sendQuestion}},[t._v("send")]),s("a",{staticClass:"btn black",attrs:{"aria-label":"close"},on:{click:function(e){t.askQuestionModal=!1}}},[t._v("close")])])])]),s("div",{staticClass:"column is-12 has-background-blac",staticStyle:{"background-color":"#1a1a1a"}},[s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-12"},[t._m(1),t._m(2),s("div",{staticClass:"columns is-mobile is-multiline is-variable is-1"},[s("div",{class:{"column is-12-mobile is-9-desktop has-text-left":!0,"streamend-padding":t.streamEnd}},[s("div",{staticClass:"box-shadow is-video"},[s("video",{staticClass:"video-js vjs-default-skin vjs-16-9 box-shadow is-hidde",attrs:{id:"video-id",poster:i("f707"),playsinline:"",controls:""},on:{contextmenu:function(t){return t.preventDefault()}}}),t._m(3),t._m(4),s("figure",{staticClass:"image is-16by9 is-hidden"},[s("video",{staticClass:"video-jss vjs-default-skins vjs-16-9s has-ratio box-shadow",attrs:{id:"videoid",widths:"1280",heights:"720",poster:i("f707"),playsinline:""},on:{contextmenu:function(t){return t.preventDefault()}}})]),s("div",{staticClass:"js-audio box-shadow custom-controlbar"},[s("div",{staticStyle:{width:"60%",display:"inline-block"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._play()}}},[s("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M8,5.14V19.14L19,12.14L8,5.14Z"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t._pause()}}},[s("svg",{staticStyle:{width:"19px",height:"19px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])]),t._v("\n\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t"),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",staticStyle:{"margin-right":"5px"},on:{click:function(){return t._mute()}}},[s("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],staticStyle:{"margin-right":"5px"},on:{click:function(){return t._unmute()}}},[s("svg",{staticStyle:{width:"17px",height:"17px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])]),s("div",{staticClass:"has-text-right",staticStyle:{width:"40%",display:"inline-block"}},[s("span",{staticClass:"is-size- has-text-white ",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.currentTime))]),t._v("\n\t\t\t\t\t\t\t\t\t \t \n\t\t\t\t\t\t\t\t\t \t"),s("span",{staticClass:"is-size- has-text-white",staticStyle:{"font-size":"9px"}},[t._v("LIVE")])])])])]),s("div",{staticClass:"column is-12-mobile is-3-desktop has-text-left has-text-centered-mobile"},[s("div",{staticStyle:{position:"relative","min-height":"600px",height:"100%","max-height":"100%"}},[s("div",{staticClass:"card",staticStyle:{"min-height":"500px",height:"100%","max-height":"100%",position:"absolute",width:"100%","background-color":"#f1f1f1"}},[t._m(5),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isProgram,expression:"isProgram"}],staticClass:"card-content",staticStyle:{height:"92%","max-height":"92%","overflow-y":"auto",position:"relative"}},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content has-text-centered"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.streamEnd,expression:"streamEnd"}],staticClass:"has-cursor is-padding-20"},[s("p",{staticClass:"has-weight-500 has-text-grey is-size-7-desktop is-size-6-mobile"},[t._v("Live Service")]),s("div",{staticClass:"is-padding-10"}),s("p",{staticClass:"has-text-grey is-size-7-mobile is-size-7-desktop is-line-25"},[t._v("\n                                                            There is no live service at this time. \n                                                            Please check our weekly schedule [click button below] for upcoming services.\n                                                            Thank You.\n                                                        ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.streamEnd,expression:"!streamEnd"}],staticClass:"has-cursor is-padding- has-text-left"},[s("div",{directives:[{name:"show",rawName:"v-show",value:"verse"==t.service_section,expression:"service_section == 'verse'"}]},[s("div",{staticClass:"has-text-justified"},[s("p",{staticClass:"has-text-grey-darker is-size-7"},[t._v(t._s(t.verse.content))])]),s("div",{staticClass:"is-padding-10"}),s("div",{staticClass:"has-text-justified"},[s("p",{staticClass:"p-lato has-text-grey-darker is-size-7"},[t._v(t._s(t.verse.reference))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section,expression:"service_section == 'chat'"}],staticStyle:{positions:"relatives",height:"530px","max-height":"80%","overflow-y":"auto"}},t._l(t.chatList,function(e,i){return s("div",{key:i,staticClass:"is-padding-5"},[s("p",{staticClass:"is-size-7-mobile is-size-7-desktop has-text-grey"},[s("span",{staticClass:"is-uppercas"},[s("b",[t._v(t._s(e.name))])]),t._v(":   "+t._s(e.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t        ")])])}),0),s("div",{staticClass:"is-padding-10"}),s("div",{directives:[{name:"show",rawName:"v-show",value:"chat"==t.service_section,expression:"service_section =='chat'"}]},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.chat.content,expression:"chat.content",modifiers:{trim:!0}}],domProps:{value:t.chat.content},on:{input:function(e){e.target.composing||t.$set(t.chat,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),s("p",{staticClass:"is-size-7 has-text-grey"},[s("span",{staticClass:"btn fullsite-btn deep-green has-cursor",on:{click:function(e){return t.sendChat()}}},[t._v("send")])])])])])])])])])]),s("div",{staticClass:"column is-12",attrs:{styles:"padding-top:0; padding-bottom:0"}},[s("div",{staticClass:"columns is-multiline is-padding-10",staticStyle:{"padding-top":"0","padding-bottom":"0"}},[s("div",{staticClass:"column is-6 has-text-left",staticStyle:{"padding-top":"0"}},[s("p",{staticClass:"is-size-7 has-text-grey"},[s("span",{staticClass:"btn fullsite-btn black has-cursor",on:{click:function(e){t.askQuestionModal=!0}}},[t._v("ask question")])])]),s("div",{staticClass:"column is-6 has-text-right",staticStyle:{"padding-top":"0"}},[s("p",{staticClass:"btn fullsite-btn white-green"},[s("span",{staticClass:"has-cursor",on:{click:function(){t.isProgram=!1,t.service_section="chat"}}},[t._v("  chats  ")])])])])])])])])])])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"is-size-7 has-text-grey"},[i("span",{staticClass:"has-weight-500"},[t._v("ASK YOUR QUESTION")]),i("br"),t._v("\n                        *only during live broadcast event\n\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-left",staticStyle:{"padding-bottom":"0"}},[i("h1",{staticClass:"is-size-7-mobile is-size-7-desktop is-header-montserra has-text-deep-green",staticStyle:{margin:"0"}},[t._v("\n\t\t\t\t\t\t\tHOREMOW NORTH AMERICA"),i("br"),i("span",{staticClass:"has-text-white"},[t._v("WALNUT CLOVE, NORTH CAROLINA")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"has-text-right"},[i("p",{staticClass:"btn fullsite-btn deep-green"},[t._v("RADIO")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"is-banne has-text-centered is-round",staticStyle:{position:"absolute",bottom:"5px",right:"5px"}},[i("div",{staticClass:"has-text-white round fullsite has-weight-500",staticStyle:{width:"45px","font-size":"9px","background-color":"#FF1E16","line-height":"20px"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tLIVE\n\t\t\t\t\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"is-banner has-background-red has-text-centered"},[i("p",{staticClass:"is-size-7"},[t._v("kjkjhdfdfdfdjjjjjjjjjjjjj")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"card-header has-background-white"},[i("p",{staticClass:"is-size-7-mobile is-size-7-desktop card-header-title has-weight-500 has-text-orange"},[t._v("\n\t\t\t\t\t\t\t\t            Service Information\n\t\t\t\t\t\t\t            ")])])}],Q=i("75fc"),F=function(){return window.PrismicJS.getApi("https://horemownaorg.cdn.prismic.io/api/v2",{accessToken:"MC5Yb0ZwcEJBQUFDTUFpcDZZ.77-9CnQn77-977-977-977-977-977-9cO-_vVF977-977-9V--_vTsh77-977-9ewPvv70NTVVecu-_vQo"})},Z=F;h["a"].registerHooks(["beforeRouteEnter"]);var W=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.prismicDOM=window.PrismicDOM,t.viewProgram=!1,t.askQuestionModal=!1,t.question={},t.currentMedia={title:"",date:""},t.isPlaying=!1,t.mouseDown=-1,t.offerOptions={offerToReceiveVideo:1,offerToReceiveAudio:1},t.servers={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",credential:"beaver",username:"webrtc.websitebeaver@gmail.com"}]},t.programs={},t.audioVolume=.2,t.connections={},t.player=null,t.uuid=w.a.generate(),t.paused=!1,t.streamEnd=!0,t.isProgram=!0,t.page=1,t.total=0,t.sermons=[],t.first=null,t.currentIndex=0,t.middleSection=[],t.newStyle=[],t.modalEnd=null,t.modalPause=null,t.verse={},t.service_section="chat",t.chatList=[],t.chat={name:"viewer"},t.isMuted=!1,t.currentTime="",t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"beforeRouteEnter",value:function(t,e,i){i(function(t){return t._getPage()})}},{key:"_toggleVideoModal",value:function(){1==this.streamEnd?this.modalEnd.open():this.modalEnd.close()}},{key:"mounted",value:function(){var t=this;M.VIDEO_SIGNAL.on("child_added",function(e){e=JSON.parse(e.val().d),t.uuid==e.to&&t.handleSignal(e)}),M.VIDEO_VERSES.on("child_added",function(e){return t.verse=e.val().verse}),M.VIDEO_CHATS.on("child_added",function(e){return t.chatList=[].concat(Object(Q["a"])(t.chatList),[JSON.parse(e.val()).chat])}),M.VIDEO_STARTED_SIGNAL.on("value",this.streamStarted),this.player=window.videojs("video-id",{responsive:!0,controlBar:{pictureInPictureToggle:!1,durationDisplay:!1,timeDivider:!1,liveDisplay:!1,fullscreenToggle:!1,progressControl:!1}}),this.remoteVideo=this.player.tech().el(),this.player.ready(function(){t.player.controlBar.playToggle.on("click",function(e){t.isPlaying?t._pause():t._play()})});var e=window.videojs.getComponent("ModalDialog");this.modalEnd=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalEnd.addClass("not-started-modal"),this.player.addChild(this.modalEnd),this.modalPause=new e(this.player,{temporary:!1,uncloseable:!0}),this.modalPause.addClass("pause-modal"),this.player.addChild(this.modalPause),this.modalEnd.open(),window.onbeforeunload=function(){var e=M.DISCONNECTED.push(JSON.stringify({uuid:t.uuid}));e.remove()}}},{key:"_getPage",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this._getPrograms();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_getPrograms",value:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z();case 2:e=t.sent.getSingle("program"),e.then(function(t){return i.programs=t.data.programs});case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"_sendQuestion",value:function(){var t=M.VIDEO_QUESTIONS.push(JSON.stringify({question:this.question}));t.remove(),this.question={},this.askQuestionModal=!1}},{key:"beforeDestroy",value:function(){this.player&&this.player.dispose()}},{key:"sendChat",value:function(){var t=M.VIDEO_CHATS.push(JSON.stringify({chat:this.chat}));t.remove(),this.chat={name:"viewer"}}},{key:"toggleFullScreen",value:function(){this.player.isFullscreen()?this.player.exitFullscreen():this.player.requestFullscreen()}},{key:"_play",value:function(){this.remoteVideo.play(),this.isPlaying=!0}},{key:"_pause",value:function(){this.remoteVideo.pause(),this.isPlaying=!1}},{key:"_mute",value:function(){this.remoteVideo.muted=!0,this.isMuted=!0}},{key:"_unmute",value:function(){this.remoteVideo.muted=!1,this.isMuted=!1}},{key:"streamStarted",value:function(t){switch(t.val().started){case"yes":var e=M.VIDEO_CONNECTED.push({uuid:this.uuid});e.remove(),this.streamEnd=!1;break;case"no":null!==this.stream&&(this.streamEnd=!0,this._pause(),this.$forceUpdate());break;case"pause":console.log("ause called"),this.player.muted(!0),this.modalPause.open();break;case"resume":this.modalPause.close(),this.player.muted(!1),this._play();break}}},{key:"getRemoteMediaStream",value:function(t){var e=t.streams[0];this.remoteVideo.srcObject!==e&&(this.remoteVideo.srcObject=e)}},{key:"getPeerConnection",value:function(t){var e=this;if(t!=this.uuid){if(this.connections[t])return this.connections[t];var i=new RTCPeerConnection(this.servers);return this.connections[t]=i,i.addEventListener("icecandidate",function(i){var s=M.VIDEO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t,ice:i.candidate,type:"ice",admin:0})});s.remove()}),i.addEventListener("track",function(t){return e.getRemoteMediaStream(t)}),i}}},{key:"handleSignal",value:function(t){var e=this;if(this.uuid!=t.by){var i=this.getPeerConnection(t.by);switch(t.type){case"offer":i.setRemoteDescription(t.sdp).then(function(){return i.createAnswer()}).then(function(s){i.setLocalDescription(s);var a=M.VIDEO_SIGNAL.push({d:JSON.stringify({by:e.uuid,to:t.by,sdp:s,type:"answer",admin:0})});a.remove()});break;case"ice":t.ice&&i.addIceCandidate(t.ice);break}}}},{key:"hasProgram",get:function(){return 0==Object.keys(this.programs).length}}]),e}(h["c"]);Object(d["a"])([Object(h["d"])("streamEnd")],W.prototype,"_toggleVideoModal",null),W=Object(d["a"])([h["a"]],W);var K=W,Y=K,X=(i("8c75"),Object(V["a"])(Y,G,J,!1,null,null,null)),tt=X.exports;s["a"].use(q["a"]);var et,it=new q["a"]({mode:"history",base:"/",routes:[{path:"/",component:tt}]}),st=it,at=i("bd86"),nt=(i("0cd8"),i("2f62"));s["a"].use(nt["a"]),s["a"].use(nt["a"]);var rt="ADD_TO_CART",ot="SUBTOTAL",ct=new nt["a"].Store({state:{cart:{items:[],subTotal:0}},mutations:(et={},Object(at["a"])(et,rt,function(t,e){t.cart.items=[].concat(Object(Q["a"])(t.cart.items),[e])}),Object(at["a"])(et,ot,function(t){t.cart.subTotal=t.cart.items.reduce(function(t,e){return t+e.qty*e.price},0)}),et),actions:Object(at["a"])({},rt,function(t,e){var i=t.commit;t.state;i(rt,e.product),i(ot)})}),lt=i("9483");Object(lt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,s["a"].filter("capitalize",function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}),s["a"].filter("uppercase",function(t){return t?(t=t.toString(),t.toUpperCase()):""}),new s["a"]({router:st,store:ct,render:function(t){return t($)}}).$mount("#app")},e709:function(t,e,i){},f707:function(t,e,i){t.exports=i.p+"img/onair.d4c33c13.png"}});
//# sourceMappingURL=app.f6c2ede9.js.map