<template>
	<view class="content">
		<!-- 搜索条 -->
		<view class="searchTopBox">
			<view class="searchBoxRadius">
				<view class="grace-search-icon searchBoxIcon"></view>
				<input class="searchBoxIpt" type="search" v-model="ipt" @confirm="searchNow($event)" placeholder="关键字"></input>
			</view>
		</view>
		<!-- 搜索历史 -->
		<view class="searchBotBox">
			<view class="ov">
				<view class="fl">搜索历史</view>
				<view @tap="clearKey" class="fr grace-more-r grace-search-remove">
					<image src="../../static/img/ljx.png"></image>
				</view>
			</view>
			<view class="searchHistoryBox">
				<view class="searchHistoryBoxItem" v-for="(item,index) in searchKey" :key='index'>
					{{item}}
				</view>
			</view>
		</view>
		<view class="lists">
			<view class="lists-v1">
				<view class="vm">
					<image src="../../static/img/dinner.jpg"></image>
				</view>
				<view class="vt">
					<view class="vt-three">
						<text class="vt-t">
							fffffff
						</text><br>
						<text class="vt-t2">
							fffffff
						</text><br>
						<text class="vt-t3">
							{{numReady}}浏览&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{numCollection}}收藏
						</text><br>
					</view>
				</view>
			</view>
			<view class="lists-v1">
				<view class="vm">
					<image src="../../static/img/dinner.jpg"></image>
				</view>
				<view class="vt">
					<view class="vt-three">
						<text class="vt-t">
							fffffff
						</text><br>
						<text class="vt-t2">
							fffffff
						</text><br>
						<text class="vt-t3">
							{{numReady}}浏览&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{numCollection}}收藏
						</text><br>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				numReady:"10000",
				numCollection:"0",
				searchKey: [],
				ipt: '',
				searchClose: true,

			}
		},
		onPullDownRefresh:function(){
			console.log('refresh');
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {
			var vv = uni.getStorageSync('searchLocal');
			if(this.numReady>9999){
				console.log(11);
				this.numReady=this.numReady/10000+"万";
				console.log(this.numReady);
			}else{
				console.log(22);
			}
			console.log(vv);
			if(vv.length>0){
				var arr = vv.split("-");
				this.searchKey = arr;
			}
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

						}
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
	.vt{
		display: flex;
		align-items: center; 
	}
	.vt-three{
		
	}
	.vt-t{
		display: inline-block;
		padding-left:30rpx;
		/*padding-top:20rpx;*/
		align-items: center; 
	}
	.vt-t2{
		display: inline-block;
		padding-left:30rpx;
		padding-top:15rpx;
		color:#c3c3c3;
		font-size:14px;
	}
	.vt-t3{
		display: inline-block;
		padding-left:30rpx;
		padding-top:15rpx;
		color:#c3c3c3;
		font-size:14px;
	}
	.lists-v1{
		display: flex;
		border-bottom: 1px #CCCCCC solid;
		margin-top: 10px;
	}
	.vm{
		width:30%;
	}
	.vm image{
		width:100%;
		height:200rpx;
	}
	.grace-search-remove image{
		width:40rpx;
		height:40rpx;
		margin-top: 4px;
	}
	page {
		background: #FFF;
	}
	.content{
		width:100%;
		background: #FFF;
	}
	.ov {
		overflow: hidden;
	}

	.fl {
		float: left;
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
		border-radius: 35upx;
	}

	.searchBoxIcon {
		font-size: 40upx;
		margin-top: 20upx;
		margin-left: 20upx;
		float: left;
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
		color: #666;
		line-height: 46upx;
		height: 46upx;
		padding: 0 20upx;
		border-radius: 23upx;
		margin-left: 15upx;
		margin-bottom: 20upx;
		border: 1px solid #ccc;
	}
</style>
