// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const STATE_KEY = 'STATE_KEY';
const DOMAIN = 'http://lixkadmin.com/';
const getUsers = function () {
    let ret = '';
	let token = getCache('token');
	if(!token){
		ret = '';
		return ret;
	}
    ret = uni.getStorageSync(USERS_KEY);
    if (!ret) {
        ret = '';
		return ret;
    }
    return JSON.parse(ret);
}

const addUser = function (userInfo) {
	//let users = getUsers();
     let users={
        username: userInfo.username,
		avatar : userInfo.avatar,
		id : userInfo.id,
		nickname : userInfo.nickname,
		mobile : userInfo.mobile,
		score : userInfo.score,
    }; 
    uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const setCache = function (key,data,expire=0){
	uni.setStorageSync(key,JSON.stringify(data));
	uni.setStorageSync(key+"_expire",expire);
}

const getCache = function (key){
	let ret = '';
	var times = (new Date()).getTime();
	var timestamp=times.toString().slice(0,10)
	var chace_timestamp=uni.getStorageSync(key+"_expire");
	if(chace_timestamp==0 || chace_timestamp>timestamp){
		ret = uni.getStorageSync(key);
		if (!ret) {
		    ret = '';
			return ret;
		}
		return JSON.parse(ret);
	}else{
		return ret;
	}
	
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
		  crossDomain: true,
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

//上传文件
function uploadfile(filepath,filename){
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: DOMAIN+'upload', //仅为示例，非真实的接口地址
			files:'',//有files时,会忽略filePath和name
			filePath: filepath,
			name: filename,
			formData: {//后台以post方式接收
				//'user_id':'1',//自己系统中的用户id
				//'text': this.input_content,//moment文字部分
				//'longitude':location.longitude,//经度
				//'latitude':location.latitude//纬度
			},
			success: (uploadFileRes) => {
				uni.hideLoading();
				resolve(JSON.parse(uploadFileRes.data));
				//return uploadFileRes;
				/* uni.showToast({
					icon:'success',
					title:"发布成功"
				})
				uni.navigateBack({//可根据实际情况使用其他路由方式
					delta:1
				}); */
			},
			fail: (e) => {
				console.log("e: " + JSON.stringify(e));
				uni.hideLoading();
				uni.showToast({
					icon:'none',
					title:"发布失败,请检查网络"
				})
			}
		})
	})
}

export default {
    getUsers,
    addUser,
	setCache,
	getCache,
	request,
	uploadfile,
	DOMAIN
}
