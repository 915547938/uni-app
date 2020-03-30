<template>
	<view id="moments">
		<view class="home-pic" >
			
		</view>

		<view class="moments__post" v-for="(post,index) in posts" :key="index" :id="'post-'+index">
			<view class="post-left">
				<image class="post_header" :src="post.header_image"></image>
			</view>

			<view class="post_right">
				<text class="post-username">{{post.username}}</text>
				<view id="paragraph" class="paragraph" :style="pmwidth">{{post.content.text}}</view>
				<!-- 相册 -->
				<view class="thumbnails">
					<view v-if="post.content.images.length>1" class="thumbnail" v-for="(image, index_images) in post.content.images" :key="index_images">
						<image class="gallery_img" lazy-load mode="scaleToFill" :src="image" :data-src="image" @tap="previewImage(post.content.images,index_images)"></image>
					</view>
					<image v-if="post.content.images.length===1" class="gallery_img" style="width:80%;height:80%;" lazy-load mode="widthFix" :src="post.content.images[0]"></image>
				</view>
				<!-- 资料条 -->
				<view class="toolbar">
					<view class="timestamp">{{post.timestamp}}</view>
					<view class="like" @tap="like(index)">
						<image :src="post.mylike==0?'../../static/index/islike.png':'../../static/index/like.png'" :alt="post.mylike"></image>
					</view>
					<view class="comment" @tap="comment(index)">
						<image src="../../static/index/comment.png"></image>
					</view>
				</view>
				<!-- 赞／评论区 -->
				<view class="post-footer">
					<view class="footer_content" v-if="post.like.length>0">
						<image class="liked" src="../../static/index/liked.png"></image>
						<text class="nickname" v-for="(user,index_like) in post.like" :key="index_like">{{user.username}}</text>
					</view>
					<view class="footer_content" v-for="(comment,comment_index) in post.comments.comment" :key="comment_index" @tap="reply(index,comment_index)">
						<text class="comment-nickname">{{comment.username}}<text v-if="comment.pid>0">回复{{comment.pname}}</text>: <text class="comment-content">{{comment.content}}</text></text>
					</view>
				</view>
			</view>
			<!-- 结束 post -->
		</view>

		<view class="foot" v-show="showInput">
			<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
			<!-- <chat-input @send-message="send_comment" @blur="blur" :placeholder="input_placeholder"></chat-input> -->
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>

</template>

<script>
	import chatInput from '../../components/im-chat/chatinput.vue'; //input框
	import postData from '../../common/index/index.post.data.js';//朋友圈数据
	import service from '../../service.js';
	export default {
		components: {
			chatInput
		},
		data() {
			return {
				posts:[],//模拟数据
				user_id: 4,
				username: 'Liuxy',

				index: '',
				comment_index: '',

				input_placeholder: '评论', //占位内容
				focus: false, //是否自动聚焦输入框
				is_reply: false, //回复还是评论
				showInput: false, //评论输入框

				screenHeight: '', //屏幕高度(系统)
				platform: '',
				windowHeight: '' ,//可用窗口高度(不计入软键盘)
				
				loadMoreText: "加载中...",
				showLoadMore: false,
				pmwidth:'width:322px;',
				page:1
				
			}
		},
		mounted() {
			
			uni.getStorage({
				key: 'posts',
				success: function (res) {
					console.log(res.data);
					this.posts = res.data;
				}
			});

		},
		onLoad() {
			
			uni.getSystemInfo({ //获取设备信息
				success: (res) => {
					console.log(res);
					this.screenHeight = res.screenHeight;
					this.platform = res.platform;
					this.pmwidth="width:"+res.windowWidth*0.8+"px;";
				}
			});
			this.page=1;
			this.posts = [];
			uni.startPullDownRefresh();
			let userInfo=service.getUsers();
			this.user_id=userInfo.id;
			this.username=userInfo.username;
		},
		onShow() {
			uni.onWindowResize((res) => { //监听窗口尺寸变化,窗口尺寸不包括底部导航栏
				if(this.platform === 'ios'){
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				}else{
					if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
						this.windowHeight = res.size.windowHeight;
						this.adjust();
					}
				}
			});
			//获取朋友圈数据
			this.page=1;
			this.posts = [];
			this.getFriend(this.page);
			this.loadMoreText = "加载更多";
		},
		
		onHide() {
			uni.offWindowResize(); //取消监听窗口尺寸变化
		},
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		onReachBottom() { //监听上拉触底事件
			console.log('onReachBottom');
			this.showLoadMore = true;
			setTimeout(() => {
				//获取数据
				this.getFriend(this.page);
				if (this.posts.length < 20){//测试数据
					//this.posts = this.posts.concat(this.posts);
				}else{
					this.loadMoreText = "暂无更多";
				}
			}, 1000);
		},
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');
			// 这里获取数据
			setTimeout(function() {
				//初始化数据
				uni.stopPullDownRefresh(); //停止下拉刷新
			}, 1000);
		},
		onNavigationBarButtonTap(e) {//监听标题栏点击事件
			if (e.index == 0) {
				this.navigateTo('../publish/publish')
			}
		},
		computed:{
			
		},
		methods: {
			test(){
				this.navigateTo('../test/test');
			},
			async getFriend(page){
				const data = {
					page: page,
				};
				let result= await service.request('friend','GET',data,true,service.getCache('token'));
				if(result.code==1){
					//console.log(result.data);
					var friendData=result.data;
					//console.log(friendData[0].content.images)
					//this.posts=friendData;
					this.posts = this.posts.concat(friendData);
					console.log(this.posts[0]);
					//console.log(this.posts[0].comments.comment[0].username);
					this.page=this.page+1;
					if(page>1 && friendData.length==0){
						//console.log(friendData.length);
						this.loadMoreText = "暂无更多";
					}
				}else{
					uni.showToast({
						icon: 'none',
						title: result.msg,
					});
				}
			},
			navigateTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			async like(index) {
				if (this.posts[index].mylike === 0) {
					this.posts[index].mylike = 1;
					if(this.posts[index].like.length>0){
						this.posts[index].like.push({
							"uid": this.user_id,
							"username": "," + this.username
						});
					}else{
						this.posts[index].like.push({
							"uid": this.user_id,
							"username": this.username
						});
					}
					console.log(this.posts[index].like);
				} else {
					this.posts[index].mylike = 0;
					if(this.posts[index].like.length==1){
						this.posts[index].like.splice(this.posts[index].like.indexOf({
							"uid": this.user_id,
							"username": this.username
						}), 1);
					}else{
						this.posts[index].like.splice(this.posts[index].like.indexOf({
							"uid": this.user_id,
							"username": "," + this.username
						}), 1);
					}
					
				}
				let data={
					article:this.posts[index].post_id,
					type:1
				}
				let res=await service.request('like','POST',data,true,service.getCache('token'));
				if(res.code!=1){
					uni.showToast({
						icon:'none',
						title:'网络出错'
					})
				}
			},
			comment(index) {
				console.log(111);
				uni.hideTabBar({
					
				});//document.getElementsByTagName('uni-tabbar')[0].style.display = 'none';
				this.showInput = true; //调起input框
				this.focus = true;
				this.index = index;
			},
			adjust() { //当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
				return;
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					var scrollTop = res.scrollTop;
					let view = uni.createSelectorQuery().select("#post-" + this.index);
					view.boundingClientRect(data => {
						console.log("data:" + JSON.stringify(data));
						console.log("手机屏幕高度:" + this.screenHeight);
						console.log("竖直滚动位置" + scrollTop);
						console.log("节点离页面顶部的距离为" + data.top);
						console.log("节点高度为" + data.height);
						console.log("窗口高度为" + this.windowHeight);

						uni.pageScrollTo({
							scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
							// scrollTop: 50, 
							duration: 300
						});
					}).exec();
				}).exec();
			},
			reply(index, comment_index) {
				uni.hideTabBar({
					
				});
				this.is_reply = true; //回复中
				this.showInput = true; //调起input框
				let replyTo = this.posts[index].comments.comment[comment_index].username;
				this.input_placeholder = '回复' + replyTo;
				this.index = index; //post索引
				this.comment_index = comment_index; //评论索引
				this.focus = true;
			},
			blur: function() {
				var that=this;
				setTimeout(function(){
					that.init_input();
				}, 100);
			},
			send_comment: function(message) {
				console.log(message,'212121',this.is_reply);
				let isreply=0;
				if (this.is_reply) {
					isreply=1;
					var reply_username = this.posts[this.index].comments.comment[this.comment_index].username;
					var comment_content = '回复' + reply_username + ':' + message.content;
					message.pid=this.posts[this.index].comments.comment[this.comment_index].id;
				} else {
					var comment_content = message.content;
				}
				message.isreply=isreply;
				message.article=this.posts[this.index].post_id;
				this.docomment(message);
				this.posts[this.index].comments.total += 1;
				this.posts[this.index].comments.comment.push({
					"uid": this.user_id,
					"username": this.username,
					"content": comment_content //直接获取input中的值
				});
				message.isreply=isreply;
				this.init_input();
			},
			async docomment(message){
				let res = await service.request('comment','POST',message,true,service.getCache('token'));
				if(res.code!=1){
					uni.showToast({
						icon:'none',
						title:res.msg
					})
				}
			},
			init_input() {
				
				uni.showTabBar({
					
				});
				//document.getElementsByTagName('uni-tabbar')[0].style.display = 'block';
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				this.is_reply = false;
			},
			previewImage(imageList, image_index) {
				var current = imageList[image_index];
				uni.previewImage({
					current: current,
					urls: imageList
				});
			},
			goPublish() {
				uni.navigateTo({
					url: './publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	@import '../../common/uni.css';
	@import url("../../common/index/index.css");
	.uni-page-head-btn{
		background-color: transparent !important;
	}
</style>
