<template>
    <view class="content">
        <view class="example-body">
        	<uni-search-bar @confirm="search" @input="input" @cancel="cancel" @click="searchClick" />
        </view>
		<view class="img-swiper">
			<view>
				<text class="title-min">推荐菜品</text>
			</view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="../../static/img/food.png" mode="aspectFit" lazy-load="true"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image src="../../static/img/food.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image src="../../static/img/food.png"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="categorys">
			<view>
				<text class="title-min">菜品分类</text>
			</view>
			<view class="cat-t">
				<view class="cat-v1" style="">
					<image style="" mode="aspectFit" src="../../static/img/breakfast.jpg"></image>
				</view>
				<view class="cat-v2" style="">
					<view><image src="../../static/img/lunch.jpg"></image></view>
					<view><image src="../../static/img/dinner.jpg"></image></view>
				</view>
			</view>
		</view>
		<view class="advertising">
			<image src="../../static/img/lunch.jpg"></image>
		</view>
		<view class="hots">
			<view>
				<text class="title-min">热门菜品</text>
			</view>
			<view class="hot-t">
				<view class="hot-v1" style="">
					<image style="" mode="aspectFit" src="../../static/img/breakfast.jpg"></image>
					<view class="text-v">sss</view>
				</view>
				<view class="hot-v1 hot-v2" style="">
					<image style="" mode="aspectFit" src="../../static/img/breakfast.jpg"></image>
				</view>
				<view class="hot-v1" style="">
					<image style="" mode="aspectFit" src="../../static/img/breakfast.jpg"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.1.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
    import {
        mapState
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		components: {
			uniSearchBar,
			uniSection
		},
		data() {
			return {
				searchVal: ''
			}
		},
		methods: {
			searchClick() {
				this.searchVal = ""
				this.showf = true;
				this.$nextTick(()=>{
					this.showSync = true;
				})
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		},
        onLoad() {
            
        }
    }
</script>

<style>
	.advertising{
		margin-top:160rpx;
	}
	.advertising image{
		width: 100%;
		height:240rpx;
		border-radius:8rpx;
	}
	.text-v{
		text-align: center;
		line-height: 3px;
	}
	.hots{
		width: 100%;
	}
	.hot-t{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.hot-v1{
		width: 50%;
		height:400rpx;
	}
	.hot-v1 image{
		width: 97%;
		height:360rpx;
		border-radius: 10px;
	}
	.hot-v2 image{
		margin-left: 5px;
	}
	.cat-t{
		width: 100%;
		display: flex;
		height:205rpx;
	}
	.cat-v1{
		width: 100%;
		margin-right:20rpx;
	}
	.cat-v1 image{
		width: 100%;
		height:346rpx;
		border-radius: 15rpx;
	}
	.cat-v2{
		width: 100%;
		height:200rpx;
	}
	.cat-v2 view image{
		width: 100%;
		height:168rpx;
		border-radius: 5px;
	}
	.swiper{
		height:400rpx;
	}
	.swiper-item image{
		width:100%;
	}
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .title {
        color: #8f8f94;
        margin-top: 50upx;
    }
	.title-min{
		color:#4CA2FF;
		display:inline-block;
		margin-top:20rpx;
		margin-bottom:20rpx;
		border-left:3px #007AFF solid;
		padding-left:10rpx;
	}
    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
	
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
	}
	
	/* #endif */
	
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: white;
		min-height: 100%;
		height: auto;
	}
	.content{
		background-color: white;
		padding-top: 0rpx;
		height:100%;
		/*margin-bottom:200rpx;*/
	}
	view {
		font-size: 28rpx;
		line-height: inherit;
	}
	
	.example {
		padding: 0 30rpx 30rpx;
	}
	
	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
	}
	
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}
	
	/* #endif */
	.example {
		padding: 0 30rpx;
	}
	
	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 30rpx;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 30rpx;
	}
	
	.example-info-text {
		font-size: 28rpx;
		line-height: 36rpx;
	}
	
	
	.example-body {
		flex-direction: column;
		background-color: #ffffff;
	}
	
	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}
	
	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}
	
	.word-btn--hover {
		background-color: #4ca2ff;
	}
	.search-result {
		margin-top: 10px;
		margin-bottom: 20px;
		text-align: center;
	}
	
	.search-result-text {
		text-align: center;
		font-size: 14px;
	}
	
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
