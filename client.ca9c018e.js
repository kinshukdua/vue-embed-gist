webpackJsonp([0],[,,function(t,e,i){"use strict";var s=i(13);e.a={components:{VueEmbedGist:s.a}}},function(t,e,i){"use strict";var s=i(16),n=i(19),a=i.n(n),r={};e.a={components:{appGistCore:s.a},props:{gistId:{type:String,required:!0},file:{type:String,required:!1,default:""}},data:function(){return{gistData:"loading..."}},created:function(){this.getGistData(this.gistId)},methods:{getGistData:function(t){var e=this;this.file.length>0&&(r.file=this.file),a.a.ajax({url:"https://gist.github.com/"+t+".json",data:r,dataType:"jsonp",timeout:2e4,success:function(t){e.gistData=t.div},error:function(t){console.log("error")}})}}}},function(t,e,i){"use strict";e.a={props:{gistDiv:{type:String,required:!0}}}},function(t,e,i){t.exports=i(6)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),n=i(11);new s.a({el:"#app",render:function(t){return t(n.a)}})},,,,,function(t,e,i){"use strict";function s(t){i(12)}var n=i(2),a=i(21),r=i(1),u=s,c=r(n.a,a.a,!1,u,"data-v-59f78dee",null);e.a=c.exports},function(t,e){},function(t,e,i){"use strict";var s=i(14);e.a={name:"vue-embed-gist",props:{gistId:{type:String,required:!0},file:{type:String,required:!1}},render:function(t){return t(s.a,{props:{gistId:this.gistId,file:this.file}})}}},function(t,e,i){"use strict";function s(t){i(15)}var n=i(3),a=i(20),r=i(1),u=s,c=r(n.a,a.a,!1,u,"data-v-72c2cea1",null);e.a=c.exports},function(t,e){},function(t,e,i){"use strict";function s(t){i(17)}var n=i(4),a=i(18),r=i(1),u=s,c=r(n.a,a.a,!1,u,"data-v-4bc0f5f2",null);e.a=c.exports},function(t,e){},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{domProps:{innerHTML:t._s(t.gistDiv)}})])},n=[],a={render:s,staticRenderFns:n};e.a=a},,function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("app-gist-core",{attrs:{"gist-div":t.gistData}})],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"div-style",attrs:{id:"app"}},[i("h2",[t._v("vue-embed-gist usage")]),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("Install vue-embed-gist using npm")]),t._v(" "),i("vue-embed-gist",{attrs:{"gist-id":"8bab656a910829ab9c32d7700c570be6",file:"npminstall.sh"}}),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("Usage")]),t._v(" "),i("vue-embed-gist",{attrs:{"gist-id":"8bab656a910829ab9c32d7700c570be6",file:"usage.vue"}}),t._v(" "),i("br"),t._v(" "),i("h2",[t._v("vue-embed-gist example")]),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("With gistId")]),t._v(" "),i("vue-embed-gist",{attrs:{"gist-id":"8bab656a910829ab9c32d7700c570be6"}}),t._v(" "),i("br"),t._v(" "),i("h3",[t._v("With gistId and file")]),t._v(" "),i("vue-embed-gist",{attrs:{"gist-id":"8bab656a910829ab9c32d7700c570be6",file:"index.js"}})],1)},n=[],a={render:s,staticRenderFns:n};e.a=a}],[5]);
//# sourceMappingURL=client.ca9c018e.js.map