<template>
	<view class="home">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<v-nav></v-nav>
		<view class="home-navspace"></view>
		<v-banner></v-banner>
		<v-sort @toLink="toLink"></v-sort>
		
		<!-- 热门推荐 -->
		<view class="home-recommend">
			<view class="home-recommend-title">
				<image src="../../static/home/hot.png" />
				<text>热门推荐</text>
			</view>
			<view class="home-recommend-goods">
				<public-goods-style-one styles="margin-top: 30rpx;"></public-goods-style-one>
				<public-goods-style-one styles="margin-top: 30rpx;"></public-goods-style-one>
			</view>
		</view>
	</view>
</template>

<script>
	import VNav from '../../components/home/v-nav.vue';
	import VBanner from '../../components/home/v-banner.vue';
	import VSort from '../../components/home/v-sort.vue';
	import PublicGoodsStyleOne from '../../common/vue/public-goods-styleone.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			VNav,
			VBanner,
			VSort,
			PublicGoodsStyleOne
		},
		onLoad() {
			
		},
		methods: {
			//跳转到各个sort模块
			toLink: function(url){
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: $uni-bg-color;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.home {
		width: 100%;
		
		.home-navspace {
			width: 100%;
			height: 82rpx;
			margin-top: var(--status-bar-height);
		}
		
		.home-recommend {
			width: 100%;
			margin-top: 20rpx;
			padding-bottom: 20rpx;
			background: $uni-bg-color;
			
			.home-recommend-title{
				width: 100%;
				height: 84rpx;
				border-bottom: 1px solid #F0F0F0;
				display: flex;
				align-items: center;
				
				image{
					margin-left: 28rpx;
					width: 38rpx;
					height: 38rpx;
				}
				
				text{
					margin-left: 11rpx;
					font-size: $uni-text-first-size;
					color: $uni-text-default-color;
				}
			}
			
			.home-recommend-goods{
				width: 100%;
			}
		}
	}
	
</style>
