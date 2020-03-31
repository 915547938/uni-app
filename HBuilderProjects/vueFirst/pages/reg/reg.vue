<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <input calss="title" type="text" v-model="account" placeholder="请输入账号">
            </view>
            <view class="input-row border">
                <text class="title">密码：</text>
                <input type="password" displayable v-model="password" placeholder="请输入密码"/>
            </view>
            <!-- <view class="input-row">
                <text class="title">邮箱：</text>
                <m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
            </view> -->
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="register">注册</button>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            //mInput
        },
        data() {
            return {
                account: '',
                password: '',
                email: ''
            }
        },
        methods: {
            async register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
                /* if (this.email.length < 3 || !~this.email.indexOf('@')) {
                    uni.showToast({
                        icon: 'none',
                        title: '邮箱地址不合法'
                    });
                    return;
                } */

                const data = {
                    username: this.account,
                    password: this.password,
                    //email: this.email
                }
				var result= await service.request("register","POST",data,true,"");
				if(result.code==1){
					console.log('注册成功的的token',result.data.userinfo.token);
					service.setCache('token',result.data.userinfo.token,result.data.userinfo.expiretime);
					service.addUser(result.data.userinfo);
					uni.reLaunch({
						url: '../user/user',
					});
				}else{
					uni.showToast({
						title: result.msg
					});
				}
                
            }
        }
    }
</script>

<style>

</style>
