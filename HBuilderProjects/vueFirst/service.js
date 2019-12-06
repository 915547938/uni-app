// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';
const DOMAIN = 'http://fastadmin.com/api/';
const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '[]';
    }
    return JSON.parse(ret);
}

const addUser = function (userInfo) {
    let users = getUsers();
     users.push({
        username: userInfo.username,
        password: userInfo.password
    }); 
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const setCache = function (key,data){
	uni.setStorageSync(key,JSON.stringify(data));
}

const getCache = function (key){
	let ret = '';
	ret = uni.getStorageSync(key);
	if (!ret) {
	    ret = '';
	}
	return JSON.parse(ret);
}

const request1 = function (url,method,data,token){
	console.log(method);
	uni.request({
		url:DOMAIN+url,
		method:method,
		data:data,
		dataType:"json",
		header: {
			"Token":token
		},
		success: (res) => {
			console.log(res.data);
			return res.data;
		}
	})
}
//请求接口函数
function request (url, method, data, loading,token){
  return new Promise((resolve, reject) => {
      //显示加载动画
      if (loading) uni.showLoading()
      
      /* //获取token
      let token = wx.getStorageSync("token")
      
      let obj = { token, }
      
      //添加token
      Object.assign(data,obj) */
  
      //发起请求
      uni.request({
          url:DOMAIN+url,
          method,
          data,
          header: {
              // 数据被编码为名称/值对
              //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
			  "Token":token
          },
          success: res => {
              let code = res.data.code
              let message = res.data.message
			  resolve(res.data);
              //统一处理返回值
              /* switch (code) {
                  case 200 :
                      resolve(res.data.data)
                      break
                  case 403 :
                      uni.showToast('您的账号已离线，请重新登录')
                      uni.goLogin()
                      break
                  case 423 :
                      uni.showToast('账号异地登录，请重新登录')
                      uni.goLogin()
                      break
                  default:
                      uni.showToast(`${message}`)
              } */
          },
          fail: err => {
              reject(err)
          },
          complete: () => {
              //结束加载动画
              if (loading) uni.hideLoading()
          }
      });
  })
}

export default {
    getUsers,
    addUser,
	setCache,
	getCache,
	request
}
