(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/food/food"],{"068c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("5af7"));function o(t){return t&&t.__esModule?t:{default:t}}var s=function(){return e.e("components/im-chat/chatinput").then(e.bind(null,"0bae"))},u={components:{chatInput:s},data:function(){return{posts:i.default,user_id:4,username:"Liuxy",index:"",comment_index:"",input_placeholder:"评论",focus:!1,is_reply:!1,showInput:!1,screenHeight:"",platform:"",windowHeight:"",loadMoreText:"加载中...",showLoadMore:!1}},mounted:function(){t.getStorage({key:"posts",success:function(t){console.log(t.data),this.posts=t.data}})},onLoad:function(){var n=this;t.getSystemInfo({success:function(t){console.log(t),n.screenHeight=t.screenHeight,n.platform=t.platform}}),t.startPullDownRefresh()},onShow:function(){var n=this;t.onWindowResize(function(t){"ios"===n.platform?(n.windowHeight=t.size.windowHeight,n.adjust()):n.screenHeight-t.size.windowHeight>60&&n.windowHeight<=t.size.windowHeight&&(n.windowHeight=t.size.windowHeight,n.adjust())})},onHide:function(){t.offWindowResize()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.showLoadMore=!0,setTimeout(function(){t.posts.length<20?t.posts=t.posts.concat(t.posts):t.loadMoreText="暂无更多"},1e3)},onPullDownRefresh:function(){console.log("onPullDownRefresh"),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onNavigationBarButtonTap:function(t){0==t.index&&this.navigateTo("../publish/publish")},computed:{},methods:{test:function(){this.navigateTo("../test/test")},navigateTo:function(n){t.navigateTo({url:n})},like:function(t){0===this.posts[t].islike?(this.posts[t].islike=1,this.posts[t].like.push({uid:this.user_id,username:","+this.username})):(this.posts[t].islike=0,this.posts[t].like.splice(this.posts[t].like.indexOf({uid:this.user_id,username:","+this.username}),1))},comment:function(n){console.log(111),t.hideTabBar({}),this.showInput=!0,this.focus=!0,this.index=n},adjust:function(){},reply:function(n,e){t.hideTabBar({}),this.is_reply=!0,this.showInput=!0;var i=this.posts[n].comments.comment[e].username;this.input_placeholder="回复"+i,this.index=n,this.comment_index=e,this.focus=!0},blur:function(){var t=this;setTimeout(function(){t.init_input()},100)},send_comment:function(t){if(console.log(222),this.is_reply)var n=this.posts[this.index].comments.comment[this.comment_index].username,e="回复"+n+":"+t.content;else e=t.content;this.posts[this.index].comments.total+=1,this.posts[this.index].comments.comment.push({uid:this.user_id,username:this.username,content:e}),this.init_input()},init_input:function(){t.showTabBar({}),this.showInput=!1,this.focus=!1,this.input_placeholder="评论",this.is_reply=!1},previewImage:function(n,e){var i=n[e];t.previewImage({current:i,urls:n})},goPublish:function(){t.navigateTo({url:"./publish/publish",success:function(t){},fail:function(){},complete:function(){}})}}};n.default=u}).call(this,e("543d")["default"])},"315d":function(t,n,e){},"35a1":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"3bc0":function(t,n,e){"use strict";e.r(n);var i=e("068c"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},"59b8":function(t,n,e){"use strict";var i=e("315d"),o=e.n(i);o.a},"59d2":function(t,n,e){"use strict";e.r(n);var i=e("35a1"),o=e("3bc0");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("59b8");var u=e("2877"),c=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"1dcc6324",null);n["default"]=c.exports},f90d:function(t,n,e){"use strict";(function(t){e("ed12"),e("921b");i(e("66fd"));var n=i(e("59d2"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f90d","common/runtime","common/vendor"]]]);