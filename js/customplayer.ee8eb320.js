(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["customplayer"],{1982:function(t,e,a){},"23e4":function(t,e,a){"use strict";var s=a("1982"),i=a.n(s);i.a},bb0f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-12-mobile is-10-tablet is-offset-1-tablet is-10-desktop is-offset-1-desktop is-8-widescreen is-offset-2-widescreen has-text-centered"},[a("div",{staticClass:"is-padding-40"}),a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-16by9 player"},[a("video",{staticClass:"has-ratio ",attrs:{id:"h-player",preloads:"",playsinline:""},on:{contextmenu:function(t){return t.preventDefault()}}},[a("source",{attrs:{src:"https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"}})]),a("div",{staticClass:"player__control-bar"},[a("div",{staticClass:"player__progress-control"},[a("div",{staticClass:"player__time player__current-time"},[t._v(t._s(t.currentTime))]),t._m(0),a("div",{staticClass:"player__time player__duration"},[t._v(t._s(t.duration))])]),a("button",{staticClass:"player__button player_button_play"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t.play()}}},[a("svg",{staticStyle:{width:"32px",height:"32px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t.pause()}}},[a("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])])]),a("button",{staticClass:"player__button player_button_volume"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isMuted,expression:"!isMuted"}],staticClass:"has-cursor",staticStyle:{"margin-right":"5px"},on:{click:function(){return t.mute()}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isMuted,expression:"isMuted"}],staticStyle:{"margin-right":"5px"},on:{click:function(){return t.unmute()}}},[a("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"}})])])]),t._m(1),a("button",{staticClass:"player__button player_button_fullscreen"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t.play()}}},[a("svg",{staticStyle:{width:"32px",height:"32px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M8.5,8.64L13.77,12L8.5,15.36V8.64M6.5,5V19L17.5,12"}})])]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"has-cursor",on:{click:function(){return t.pause()}}},[a("svg",{staticStyle:{width:"30px",height:"30px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M14,19H18V5H14M6,19H10V5H6V19Z"}})])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player__progress-bar"},[a("span",{staticStyle:{width:"0"},attrs:{id:"player__progress-span"}},[t._v("Progress: 80%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player__volume-panel player_slider_volume"},[a("input",{attrs:{type:"range"}})])}],r=a("d225"),n=a("b0b4"),l=a("308d"),o=a("6bb5"),u=a("4e2b"),c=a("9ab4"),p=a("60a3"),d=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(l["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.isPlaying=!1,t.isMuted=!1,t.currentTime="",t.duration="",t.showTime=!1,t.remainingTime="",t}return Object(u["a"])(e,t),Object(n["a"])(e,[{key:"mounted",value:function(){var t=this;this.player=document.getElementById("h-player"),setTimeout(function(){t.progressBar=document.getElementById("player__progress-span");var e=0;t.player.onloadedmetadata=function(){e=100/t.player.duration,t.remainingTime=t.formatTime(t.player.duration)},t.player.onplay=function(e){t.isPlaying=!0,t.showTime=!0},t.player.onpause=function(e){return t.isPlaying=!1},t.player.onended=function(e){return t.isPlaying=!1},t.player.ontimeupdate=function(a){t.currentTime=t.formatTime(t.player.currentTime),t.duration=t.formatTime(t.player.duration),t.remainingTime=t.formatTime(t.player.duration-t.player.currentTime);var s=e*t.player.currentTime;t.progressBar.style.width=s+"%",t.progressBar.innerHTML=s+"% played"}},2)}},{key:"play",value:function(){this.player.play(),this.isPlaying=!0}},{key:"pause",value:function(){this.player.pause(),this.isPlaying=!1}},{key:"mute",value:function(){this.player.muted=!0,this.isMuted=!0}},{key:"unmute",value:function(){this.player.muted=!1,this.isMuted=!1}},{key:"formatTime",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;t=t<0?0:t;var a=Math.floor(t%60),s=Math.floor(t/60%60),i=Math.floor(t/3600),r=Math.floor(e/60%60),n=Math.floor(e/3600);(isNaN(t)||t===1/0)&&(i=s=a=0);var l=i>0||n>0?i+":":"",o=((i||r>=10)&&s<10?"0"+s:s)+":",u=a<10?"0"+a:a;return l+o+u}}]),e}(p["b"]);d=Object(c["a"])([p["a"]],d);var y=d,f=y,h=(a("23e4"),a("2877")),m=Object(h["a"])(f,s,i,!1,null,"6ad4634f",null);e["default"]=m.exports}}]);
//# sourceMappingURL=customplayer.ee8eb320.js.map