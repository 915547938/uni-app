(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/reg/reg"],{34:
/*!***********************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/vueFirst/main.js?{"page":"pages%2Freg%2Freg"} ***!
  \***********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);e(n(/*! vue */2));function e(t){return t&&t.__esModule?t:{default:t}}t(e(n(/*! ./pages/reg/reg.vue */35)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},35:
/*!****************************************************************!*\
  !*** D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue ***!
  \****************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! ./reg.vue?vue&type=template&id=2d4a9289& */36),u=n(/*! ./reg.vue?vue&type=script&lang=js& */38);for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);var o=n(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */14),s=Object(o.default)(u.default,r.render,r.staticRenderFns,!1,null,null,null);s.options.__file="D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue",e.default=s.exports},36:
/*!***********************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue?vue&type=template&id=2d4a9289& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reg.vue?vue&type=template&id=2d4a9289& */37);n.d(e,"render",function(){return r.render}),n.d(e,"staticRenderFns",function(){return r.staticRenderFns})},37:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue?vue&type=template&id=2d4a9289& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return r}),n.d(e,"staticRenderFns",function(){return u});var r=function(){var t=this.$createElement;this._self._c},u=[];r._withStripped=!0},38:
/*!*****************************************************************************************!*\
  !*** D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reg.vue?vue&type=script&lang=js& */39),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=u.a},39:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Documents/HBuilderProjects/vueFirst/pages/reg/reg.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,u=(r=n(/*! ../../service.js */17))&&r.__esModule?r:{default:r};var i={components:{mInput:function(){return n.e(/*! import() | components/m-input */"components/m-input").then(n.bind(null,/*! ../../components/m-input.vue */105))}},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 51 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var e={account:this.account,password:this.password,email:this.email};u.default.addUser(e),t.showToast({title:"注册成功"}),t.reLaunch({url:"../main/main"})}}}};e.default=i}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)}},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/reg/reg.js.map