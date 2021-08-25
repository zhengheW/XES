!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=744)}({0:function(t,e,i){"use strict";function n(t,e,i,n,a,r,o,s,u,l){var c,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(d.components,p)&&(d.components[p]=u[p])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(d.mixins||(d.mixins=[])).push(l)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var g=d.render;d.render=function(t,e){return c.call(e),g(t,e)}}else{var b=d.beforeCreate;d.beforeCreate=b?[].concat(b,c):[c]}return{exports:t,options:d}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={"@VERSION":2}},13:function(t,e,i){"use strict";i.r(e);var n=i(5),a=i(2);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o=i(0);var s=Object(o.a)(a.default,n.b,n.c,!1,null,"3983d796","9532d2c0",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(8).default,this.options.style):Object.assign(this.options.style,i(8).default)}).call(s),e.default=s.exports},137:function(t,e,i){"use strict";var n=i(493),a=i(407),r=i(0);var o=Object(r.a)(a.default,n.b,n.c,!1,null,null,"00200b25",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(639).default,this.options.style):Object.assign(this.options.style,i(639).default)}).call(o),e.default=o.exports},18:function(t,e,i){"use strict";i.r(e);var n=i(19),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},19:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniBadge",emits:["click"],props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:function(){return[0,0]}},text:{type:[String,Number],default:""},size:{type:String,default:"normal"},customStyle:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{width:function(){return 8*String(this.text).length+12},classNames:function(){var t=this.inverted,e=this.type;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+this.size,this.absolute?"uni-badge--absolute":""]},positionStyle:function(){if(!this.absolute)return{};var t=this.width/2,e=10;this.isDot&&(t=5,e=5);var i="".concat(-t+this.offset[0],"px"),n="".concat(-e+this.offset[1],"px"),a={rightTop:{right:i,top:n},rightBottom:{right:i,bottom:n},leftBottom:{left:i,bottom:n},leftTop:{left:i,top:n}},r=a[this.absolute];return r||a.rightTop},badgeWidth:function(){return{width:"".concat(this.width,"px")}},dotStyle:function(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue:function(){var t=this.isDot,e=this.text,i=this.maxNum;return t?"":Number(e)>i?"".concat(i,"+"):e}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},2:function(t,e,i){"use strict";i.r(e);var n=i(3),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},20:function(t,e){t.exports={".uni-badge--x":{"":{alignSelf:["flex-start",0,0,0],position:["relative",0,0,0]}},".uni-badge--absolute":{"":{position:["absolute",0,0,1]}},".uni-badge":{"":{justifyContent:["center",0,0,2],flexDirection:["row",0,0,2],height:["20",0,0,2],lineHeight:["20",0,0,2],color:["#333333",0,0,2],borderRadius:["100",0,0,2],backgroundColor:["rgba(0,0,0,0)",0,0,2],textAlign:["center",0,0,2],fontFamily:['"Helvetica Neue", Helvetica, sans-serif',0,0,2],fontSize:["12",0,0,2]}},".uni-badge--inverted":{"":{paddingTop:[0,0,0,3],paddingRight:["5",0,0,3],paddingBottom:[0,0,0,3],paddingLeft:[0,0,0,3],color:["#f1f1f1",0,0,3]}},".uni-badge--default":{"":{color:["#333333",0,0,4],backgroundColor:["#f1f1f1",0,0,4]}},".uni-badge--default-inverted":{"":{color:["#999999",0,0,5],backgroundColor:["rgba(0,0,0,0)",0,0,5]}},".uni-badge--primary":{"":{color:["#ffffff",0,0,6],backgroundColor:["#007aff",0,0,6]}},".uni-badge--primary-inverted":{"":{color:["#007aff",0,0,7],backgroundColor:["rgba(0,0,0,0)",0,0,7]}},".uni-badge--success":{"":{color:["#ffffff",0,0,8],backgroundColor:["#4cd964",0,0,8]}},".uni-badge--success-inverted":{"":{color:["#4cd964",0,0,9],backgroundColor:["rgba(0,0,0,0)",0,0,9]}},".uni-badge--warning":{"":{color:["#ffffff",0,0,10],backgroundColor:["#f0ad4e",0,0,10]}},".uni-badge--warning-inverted":{"":{color:["#f0ad4e",0,0,11],backgroundColor:["rgba(0,0,0,0)",0,0,11]}},".uni-badge--error":{"":{color:["#ffffff",0,0,12],backgroundColor:["#dd524d",0,0,12]}},".uni-badge--error-inverted":{"":{color:["#dd524d",0,0,13],backgroundColor:["rgba(0,0,0,0)",0,0,13]}},".uni-badge--small":{"":{transform:["scale(0.8)",0,0,14],transformOrigin:["center center",0,0,14]}},"@VERSION":2}},21:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-badge--x"]},[t._t("default"),t.text?i("u-text",{staticClass:["uni-badge"],class:t.classNames,style:[t.badgeWidth,t.positionStyle,t.customStyle,t.dotStyle],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(e){t.onClick()}}},[t._v(t._s(t.displayValue))]):t._e()],2)},a=[]},3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},30:function(t,e,i){"use strict";i.r(e);var n=i(20),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},39:function(t,e,i){"use strict";i.r(e);var n=i(21),a=i(18);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var o=i(0);var s=Object(o.a)(a.default,n.b,n.c,!1,null,"f92d44d4","0df4ab1c",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(30).default,this.options.style):Object.assign(this.options.style,i(30).default)}).call(s),e.default=s.exports},4:function(t,e){t.exports={".uni-section":{"":{position:["relative",0,0,0],marginTop:["10",0,0,0],flexDirection:["row",0,0,0],alignItems:["center",0,0,0],paddingTop:[0,0,0,0],paddingRight:["10",0,0,0],paddingBottom:[0,0,0,0],paddingLeft:["10",0,0,0],height:["50",0,0,0],backgroundColor:["#f8f8f8",0,0,0],fontWeight:["normal",0,0,0]}},".uni-section__head":{"":{flexDirection:["row",0,0,1],justifyContent:["center",0,0,1],alignItems:["center",0,0,1],marginRight:["10",0,0,1]}},".line":{"":{height:["15",0,0,2],backgroundColor:["#c0c0c0",0,0,2],borderRadius:["5",0,0,2],width:["3",0,0,2]}},".circle":{"":{width:["8",0,0,3],height:["8",0,0,3],borderTopRightRadius:["50",0,0,3],borderTopLeftRadius:["50",0,0,3],borderBottomLeftRadius:["50",0,0,3],borderBottomRightRadius:["50",0,0,3],backgroundColor:["#c0c0c0",0,0,3]}},".uni-section__content":{"":{flexDirection:["column",0,0,4],flex:[1,0,0,4],color:["#333333",0,0,4]}},".uni-section__content-title":{"":{fontSize:["14",0,0,5],color:["#333333",0,0,5]}},".distraction":{"":{flexDirection:["row",0,0,6],alignItems:["center",0,0,6]}},".uni-section__content-sub":{"":{fontSize:["12",0,0,7],color:["#999999",0,0,7]}},"@VERSION":2}},407:function(t,e,i){"use strict";var n=i(408),a=i.n(n);e.default=a.a},408:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{value:0,customStyle:{backgroundColor:"#2C405A",color:"red"}}},mounted:function(){var t=this,e=setInterval((function(){t.value>=199?clearInterval(e):t.value++}),100)}};e.default=n},409:function(t,e){t.exports={".example":{"":{paddingTop:[0,0,0,2],paddingRight:["15",0,0,2],paddingBottom:[0,0,0,2],paddingLeft:["15",0,0,2]}},".example-info":{"":{paddingTop:["15",0,0,3],paddingRight:["15",0,0,3],paddingBottom:["15",0,0,3],paddingLeft:["15",0,0,3],color:["#3b4144",0,0,3],backgroundColor:["#ffffff",0,0,3],fontSize:["14",0,0,3],lineHeight:["20",0,0,3]}},".example-info-text":{"":{fontSize:["14",0,0,4],lineHeight:["20",0,0,4],color:["#3b4144",0,0,4]}},".example-body":{"":{flexDirection:["row",0,0,9],paddingTop:["15",0,0,5],paddingRight:["15",0,0,5],paddingBottom:["15",0,0,5],paddingLeft:["15",0,0,5],backgroundColor:["#ffffff",0,0,5],justifyContent:["flex-start",0,0,9]}},".word-btn-white":{"":{fontSize:["18",0,0,6],color:["#FFFFFF",0,0,6]}},".word-btn":{"":{flexDirection:["row",0,0,7],alignItems:["center",0,0,7],justifyContent:["center",0,0,7],borderRadius:["6",0,0,7],height:["48",0,0,7],marginTop:["15",0,0,7],marginRight:["15",0,0,7],marginBottom:["15",0,0,7],marginLeft:["15",0,0,7],backgroundColor:["#007AFF",0,0,7]}},".word-btn--hover":{"":{backgroundColor:["#4ca2ff",0,0,8]}},".uni-badge-left-margin":{"":{marginLeft:["10",0,0,10]}},".uni-badge-absolute":{"":{marginLeft:["40",0,0,11]}},".box":{"":{width:["40",0,0,12],height:["40",0,0,12],justifyContent:["center",0,0,12],alignItems:["center",0,0,12],textAlign:["center",0,0,12],backgroundColor:["#DCDFE6",0,0,12],color:["#ffffff",0,0,12],fontSize:["12",0,0,12]}},".box-text":{"":{textAlign:["center",0,0,13],color:["#ffffff",0,0,13],fontSize:["12",0,0,13]}},"@VERSION":2}},493:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniSection:i(13).default,uniBadge:i(39).default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["page"]},[i("u-text",{staticClass:["example-info"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u6570\u5b57\u89d2\u6807\u901a\u7528\u6765\u6807\u8bb0\u91cd\u70b9\u4fe1\u606f\u4f7f\u7528\uff0c\u5982\u63a5\u53d7\u5230\u65b0\u6d88\u606f\u3001\u6709\u672a\u8bfb\u6d88\u606f\u7b49")]),i("uni-section",{attrs:{title:"\u5b9a\u4f4d: aboslute \u5c5e\u6027 + offset \u5c5e\u6027",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:t.value,absolute:"rightTop",size:"small",type:"primary"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u53f3\u4e0a")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{text:t.value,absolute:"rightTop",offset:[-10,-10],size:"small",type:"primary"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u53f3\u4e0a+\u504f\u79fb")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{size:"small",text:t.value,absolute:"rightBottom",type:"primary"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u53f3\u4e0b")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{size:"small",text:t.value,absolute:"leftTop",type:"primary",maxNum:10}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5de6\u4e0a")])])])],1),i("uni-section",{attrs:{title:"\u4ec5\u663e\u793a\u70b9: is-dot \u5c5e\u6027",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{isDot:!0,text:t.value,absolute:"rightTop",size:"small",type:"primary"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5706\u70b9")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{isDot:!0,text:t.value,absolute:"rightTop",offset:[-5,-5],size:"small",type:"success"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5706\u70b9+\u504f\u79fb")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{isDot:!0,text:t.value,absolute:"rightTop",size:"small",type:"error"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5706\u70b9")])])]),i("uni-badge",{staticClass:["uni-badge-absolute"],attrs:{isDot:!0,text:t.value,absolute:"rightTop",size:"small",type:"warning"}},[i("view",{staticClass:["box"]},[i("u-text",{staticClass:["box-text"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5706\u70b9")])])])],1),i("uni-section",{attrs:{title:"\u6709\u5e95\u8272",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"1"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"34",type:"success"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"45",type:"warning"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"123",type:"error"}})],1),i("uni-section",{attrs:{title:"\u65e0\u5e95\u8272",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"1"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"2",type:"primary"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"34",type:"success"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"45",type:"warning"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{inverted:!0,text:"123",type:"error"}})],1),i("uni-section",{attrs:{title:"\u8ff7\u4f60",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"1",size:"small"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary",size:"small"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"34",type:"success",size:"small"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"45",type:"warning",size:"small"}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"123",type:"error",size:"small"}})],1),i("uni-section",{attrs:{title:"\u81ea\u5b9a\u4e49\u6837\u5f0f",type:"line"}}),i("view",{staticClass:["example-body"]},[i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary",customStyle:t.customStyle}}),i("uni-badge",{staticClass:["uni-badge-left-margin"],attrs:{text:"2",type:"primary",customStyle:{color:"red"}}})],1)],1)])},r=[]},5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-section"],attrs:{nvue:!0}},[t.type?i("view",{staticClass:["uni-section__head"]},[i("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),i("view",{staticClass:["uni-section__content"]},[i("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.title))]),t.subTitle?i("u-text",{staticClass:["uni-section__content-sub"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},a=[]},6:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(7).default,Vue.prototype.__$appStyle__)},639:function(t,e,i){"use strict";i.r(e);var n=i(409),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},7:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},744:function(t,e,i){"use strict";i.r(e);i(6);var n=i(137);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),n.default.mpType="page",n.default.route="pages/extUI/badge/badge",n.default.el="#root",new Vue(n.default)},8:function(t,e,i){"use strict";i.r(e);var n=i(4),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e.default=a.a}});