<template>
	<view class="home-v-banner">
		<swiper class="home-v-banner-swiper" autoplay="true" circular="true" indicator-dots="true" indicator-color="rgba(255,255,255,0.3)" indicator-active-color="rgba(255,255,255,0.8)">
			<swiper-item>
				<image src="../../static/home/authorization.png" />
			</swiper-item>
			<swiper-item>
				<image src="../../static/home/classification.png" />
			</swiper-item>
			<swiper-item>
				<image src="../../static/home/classroom.png" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../uni.scss";
	.home-v-banner{
		width: 100%;
		height: 420rpx;
		background: $uni-bg-color;
		
		.home-v-banner-swiper{
			width: 100%;
			height: 100%;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
