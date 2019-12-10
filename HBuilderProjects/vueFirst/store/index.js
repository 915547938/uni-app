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
			state.user_id = userInfo.user_id;
            state.hasLogin = true;
			/* let userInfo=service.getUsers();
			if(userInfo.length>0){
				state.userName = userInfo.account || '新用户';
				state.hasLogin = true;
			} */
        },
		islogin(state) {
			let token=service.getCache('token');
			if(token!=''){
				state.hasLogin = true;
			}
		},
        logout(state) {
			uni.setStorageSync("USERS_KEY","");
			uni.setStorageSync("token","");
            state.hasLogin = false;
        }
    }
})

export default store
