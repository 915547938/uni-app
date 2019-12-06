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
        login(state, userInfo) {
            state.userName = userInfo.username|| '新用户';
			state.avatar = userInfo.avatar;
			state.id = userInfo.id;
			state.nickname = userInfo.nickname;
			state.mobile = userInfo.mobile;
			state.score = userInfo.score;
			state.token = userInfo.token;
			state.user_id = userInfo.user_id;
			state.createtime = userInfo.createtime;
			state.expires_in = userInfo.expires_in;
			state.expiretime = userInfo.expiretime;
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
