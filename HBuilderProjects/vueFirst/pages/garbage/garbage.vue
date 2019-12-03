<template>
	<view class="content">
		<view class="title-v">
			<h1>垃圾分类助手</h1>
			<p>垃圾分类，从我做起</p>
		</view>
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="grace-search-icon searchBoxIcon">
					<image src="../../static/img/fdj.png"></image>
				</view>
				<input class="searchBoxIpt" type="search" v-model="ipt" @confirm="searchNow($event)" placeholder="请输入查询的垃圾名称"></input>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="searchBotBox">
			<view class="ov">
				<view class="fl">热门搜索</view>
				<view @tap="clearKey" style="display: none;" class="fr grace-more-r grace-search-remove">
					<image src="../../static/img/ljx.png"></image>
				</view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" :key='index'>
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchKey: [],
				ipt: '',
				searchClose: true,

			}
		},
		onShow() {
			var vv = uni.getStorageSync('searchLocal');
			var arr = vv.split("-");
			this.searchKey = arr;
		},
		methods: {

			clearKey: function() {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '点击确定将删除所有历史信息，确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							that.searchKey = [];
							uni.setStorage({
								key: 'searchLocal',
								data: that.searchKey
							});
							
						} else if (res.cancel) {

						}å
					}
				});

			},
			searchNow: function(e) {
				if (this.ipt == '') {
					uni.showToast({
						title: '未输入搜索关键字',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				var that = this;
				var newArr = that.searchKey;
				newArr.push(this.ipt);
				this.searchKey = newArr;
				var newStr = newArr.join('-');
				uni.setStorage({
					key: 'searchLocal',
					data: newStr
				});
			}
		}
	}
</script>
<style>
	.title-v h1{
		height: 1.84rem;
		margin: 0 auto;
		background: url(../../static/img/titlelj.png) 50% no-repeat;
		background-size: contain;
		text-indent: -999em;
		margin-top:20rpx;
	}
	.title-v p{
		text-align: center;
		color:white;
		font-size:14px;
		margin-top:10px;
		margin-bottom:30px;
	}
	.content{
		width:100%;
		background: #0b877f;
	}
	.grace-search-remove image{
		width:40rpx;
		height:40rpx;
		margin-top: 4px;
	}
	page {
		background: #FFF;
	}

	.ov {
		overflow: hidden;
	}

	.fl {
		float: left;
		color: white;
	}

	.fr {
		float: right;
	}

	.searchTopBox {
		width: 100%;
		background-color: #0b877f;
		height: 100upx;
		box-sizing: border-box;
		padding-top: 15upx;
	}

	.searchBoxRadius {
		width: 90%;
		height: 70upx;
		background-color: #fff;
		margin-left: 5%;
		overflow: hidden;
		border-radius: 15upx;
	}

	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 12upx;
		margin-left: 20upx;
		float: left;
	}
	.searchBoxIcon image{
		width:40rpx;
		height:40rpx;
		margin-top: 4px;
	}
	.searchBoxIpt {
		height: 70upx;
		line-height: 70upx;
		margin-left: 20upx;
		float: left;
	}

	.searchBotBox {
		width: 100%;
		margin-top: 30upx;
		padding: 15upx 3%;
		box-sizing: border-box;
	}

	.searchHistoryBox {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		margin-top: 40upx;
	}

	.searchHistoryBoxItem {
		float: left;
		font-size: 26upx;
		color: white;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
</style>
