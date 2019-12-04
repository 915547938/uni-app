import Vue from 'vue'
import Vuex from 'vuex'
import service from '../service.js';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName|| '新用户';
            state.hasLogin = true;
			/* let userInfo=service.getUsers();
			if(userInfo.length>0){
				state.userName = userInfo.account || '新用户';
				state.hasLogin = true;
			} */
        },
		islogin(state) {
			let userInfo=service.getUsers();
			console.log("用户");
			console.log(userInfo);
			if(userInfo.length>0){
				state.userName = userInfo.account || '新用户';
				state.hasLogin = true;
			}
		},
        logout(state) {
			uni.setStorageSync("USERS_KEY","");
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
