<template>
    <view class="content">
        <view class="nologin" v-if="!hasLogin">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
		<view class="islogin" v-else>
			<view class="top-v">
				<view class="avatar-v">
					<image :src="userInfo.avatar"></image>
				</view>
				<view class="name-v">
					<text>{{userInfo.nickname}}</text><br>
					<text class="name-t">发布&nbsp;1&nbsp;&nbsp;&nbsp;关注&nbsp;33&nbsp;&nbsp;&nbsp;粉丝&nbsp;33</text>
				</view>
			</view>
			<view class="realse-v">
				<text>发布</text>
				<image @tap="realse" src="../../static/img/relase.png"></image>
			</view>
			<view class="other-v">
				<view class="news-v">
					<view class="other-image-v">
						<image src="../../static/img/news.png"></image>
					</view>
					<view>
						<text>消息通知</text>
					</view>
				</view>
				<view class="news-v">
					<view class="other-image-v">
						<image src="../../static/img/works.png"></image>
					</view>
					<view>
						<text>作品管理</text>
					</view>
				</view>
				<view class="news-v">
					<view class="other-image-v">
						<image src="../../static/img/collect.png"></image>
					</view>
					<view>
						<text>收藏</text>
					</view>
				</view>
				<view class="news-v">
					<view class="other-image-v">
						<image src="../../static/img/setting.png"></image>
					</view>
					<view>
						<text>系统设置</text>
					</view>
				</view>
			</view>
            <button style="margin-top:80%;" type="default" @tap="bindLogout">退出登录</button>
		</view>
    </view>
</template>

<script>
	import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
	
    export default {
		data(){
			return {
				userInfo:{}
			}
		},
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout','islogin']),
			isLogin(){
				this.islogin();
			},
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            },
			realse(){
				uni.navigateTo({
					url: '../publish/publish',
				});
			}
        },
		onLoad (){
			this.isLogin();
			let userInfo=service.getUsers();
			let that=this;
			that.userInfo=userInfo;
			console.log(userInfo);
		}
    }
</script>

<style>
	.other-image-v{
		height:48rpx;
	}
	.news-v text{
		font-size:14px;
	}
	.news-v image{
		height: 60rpx;
		width:60rpx;
	}
	.news-v{
		text-align: center;
	}
	.other-v{
		background: white;
		display: flex;
		align-items: center;
		padding:25rpx;
		margin-top:20rpx;
		justify-content: space-around;
	}
	.realse-v{
		background: white;
		display: flex;
		align-items: center;
		padding:25rpx;
		margin-top:20rpx;
	}
	.realse-v image{
		height: 60rpx;
		width:60rpx;
		margin-left: auto;
	}
	.avatar-v image{
		height: 120rpx;
		width:120rpx;
		border-radius: 50%;
	}
	.avatar-v{
		
		padding: 50rpx;
	}
	.name-v text{
		color:white;
	}
	.name-t{
		font-size:14px;
	}
	.top-v{
		border:1px #4CA2FF solid;
		background: rgb(15, 174, 255);
		height: 250rpx;
		display: flex;
		align-items: center;
		border-radius: 10px;
	}
	.nologin{
		margin-top:60rpx;
	}
	.content{
		
	}
</style>
