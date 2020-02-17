<!-- 
	自定义导航栏公共组件 
	@param
	isNavBottomBorder 导航栏是否有底部边框,默认true
	isBackWhiteIcon 返回按钮是否为白色箭头，默认false
	navText 导航栏文本
	navTextColor 导航栏文本颜色，默认黑色
	navBgColor 导航栏跟状态栏背景颜色，默认白色
	navRightIcon 导航栏右边图标,默认不显示
	navRightIconCallback 导航栏右边图标回调
-->
<template>
	<view class="public-nav-box">
		<view class="public-nav" :style="{background: navBgColor,borderBottom: isNavBottomBorder ? '1px solid #F9F9F9' : 'none'}">
			<view class="public-nav-statusbar">
				<!-- 这里是状态栏 -->
			</view>
			<view class="public-nav-navbar">
				<!-- 这里是自定义导航栏 -->
				<view class='public-nav-navbar-back' @click.stop="goBack">
					<view :class='{"public-nav-navbar-back-icon": true,"public-nav-navbar-back-icon-white": isBackWhiteIcon}'></view>
				</view>
				<text class="public-nav-navbar-text" :style="{color: navTextColor}">{{ navText }}</text>
				<view class="public-nav-navbar-right" @click.stop="$emit('navRightIconCallback')">
					<image :src="navRightIcon.iconUrl" v-show="navRightIcon.isShowIcon"/>
				</view>
			</view>
		</view>
		<view class="public-navspace"></view>
	</view>
</template>

<script>
	export default {
		props: {
			//导航栏是否有底部边框,默认true
			isNavBottomBorder: {
				type: Boolean,
				default: true,
			},
			//返回按钮是否为白色箭头，默认false
			isBackWhiteIcon: {
				type: Boolean,
				default: false
			},
			//导航栏文本
			navText: {
				type: String,
				default: ""
			},
			//导航栏文本颜色，默认黑色
			navTextColor: {
				type: String,
				default: "#000000"
			},
			//导航栏跟状态栏背景颜色，默认白色
			navBgColor: {
				type: String,
				default: "#FFFFFF"
			},
			//导航栏右边图标,默认不显示
			navRightIcon: {
				type: Object,
				default: function(){
					return {
						isShowIcon: false,
						iconUrl: "",
					}
				}
			},
			//导航栏右边图标回调
			navRightIconCallback: Function
		},
		data() {
			return {
			}
		},
		methods: {
			//返回上一页面
			goBack: function(){
				uni.navigateBack()
			}
		},
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	.public-nav-box {
		width: 100%;
	
		.public-nav {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;
			height: 82rpx;
			padding-bottom: var(--status-bar-height);
			
			.public-nav-statusbar {
				height: var(--status-bar-height);
				width: 100%;
				background: $uni-bg-color;
			}
			
			.public-nav-navbar {
				width: 100%;
				height: 82rpx;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.public-nav-navbar-back {
					width: 82rpx;
					height: 82rpx;
					display: flex;
					align-items: center;
					
					.public-nav-navbar-back-icon {
						width: 32rpx;
						height: 32rpx;
						margin-left: 20rpx;
						background: url('~@/static/publicnav/back-black.png') no-repeat;
						background-size: 100% 100%;
					}
					.public-nav-navbar-back-icon-white {
						background: url('~@/static/publicnav/back-white.png') no-repeat;
						background-size: 100% 100%;
					}
				}
				
				.public-nav-navbar-text {
					font-size: $uni-text-nav-size;
					color: $uni-text-default-color;
				}
				
				.public-nav-navbar-right {
					width: 82rpx;
					height: 82rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					
					image {
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
					}
				}
			}
		}
		
		.public-navspace {
			width: 100%;
			height: 82rpx;
			margin-top: var(--status-bar-height);
		}
	}
</style>
