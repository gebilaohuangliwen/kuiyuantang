<template>
	<view class="home-v-sort">
		<view class="home-v-sort-li" v-for="(item, index) in list" :key="index" @click.stop="$emit('toLink', item.pages)">
			<image :src="item.url"/>
			<text>{{ item.text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			toLink: Function,
		},
		data() {
			return {
				list: [{
					text: "分类",
					url: "../../static/home/classification.png",
					pages: "../../pages/category/category"
				}, {
					text: "仓库",
					url: "../../static/home/warehouse.png",
					pages: ""
				}, {
					text: "提货",
					url: "../../static/home/pick-up.png",
					pages: ""
				}, {
					text: "福袋",
					url: "../../static/home/thebag.png",
					pages: ""
				}, {
					text: "素材资料",
					url: "../../static/home/material.png",
					pages: ""
				}, {
					text: "招商",
					url: "../../static/home/merchants.png",
					pages: ""
				}, {
					text: "课堂",
					url: "../../static/home/classroom.png",
					pages: ""
				}, {
					text: "授权",
					url: "../../static/home/authorization.png",
					pages: ""
				}]
			}
		}
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	.home-v-sort{
		display: flex;
		width: 100%;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		background: $uni-bg-color;
		
		.home-v-sort-li{
			width: 25%;
			margin-bottom: 40rpx; 
			
			image{
				display: block;
				width: 100rpx;
				height: 100rpx;
				margin: 0 auto;
			}
			
			text{
				display: block;
				margin-top: 17rpx;
				text-align: center;
				font-size: $uni-text-fifth-size;
				color: $uni-text-sort-color;
			}
		}
	}
</style>
