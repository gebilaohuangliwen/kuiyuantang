<template>
	<view class="home-v-nav">
		<view class="home-v-nav-scan"></view>
		<view class="home-v-nav-logo"></view>
		<view class="home-v-nav-msg">
			<text class="home-v-nav-msg-dot"></text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../uni.scss";
	.home-v-nav {
		display: flex;
		width: 100%;
		height: 82rpx;
		background: $uni-bg-color;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: var(--status-bar-height);
		left: 0;
		z-index: 1;
		
		.home-v-nav-scan {
			width: 38rpx;
			height: 34rpx;
			background: url('~@/static/home/scan.png') no-repeat;
			background-size: 100% 100%;
			margin-left: 28rpx;
		}
		
		.home-v-nav-logo {
			width: 105rpx;
			height: 66rpx;
			background: url('~@/static/home/logo.png') no-repeat;
			background-size: 100% 100%;
		}
		
		.home-v-nav-msg {
			width: 38rpx;
			height: 34rpx;
			background: url('~@/static/home/msg.png') no-repeat;
			background-size: 100% 100%;
			margin-right: 28rpx;
			position: relative;
			top: 0;
			left: 0;
			
			.home-v-nav-msg-dot{
				position: absolute;
				top: -5rpx;
				right: -5rpx;
				width: 12rpx;
				height: 12rpx;
				background: #E70012;
				border-radius: 12rpx;
			}
		}
	}
	
</style>
