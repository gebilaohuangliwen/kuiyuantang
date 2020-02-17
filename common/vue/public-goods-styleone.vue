<!--
	自定义商品公共组件(一行一个)
-->
<template>
	<view class="public-goods-styleone" :style="styles">
		<view class="public-goods-styleone-goodsimg">
			<image src="../../static/home/authorization.png" />
		</view>
		<view class="public-goods-styleone-goodsdesc">
			<text class="public-goods-styleone-goodsdesc-title">梅里特女士植恋邂逅洗护梅里特女士植恋邂逅洗护</text>
			<text class="public-goods-styleone-goodsdesc-spec">规格：5.23kg/套</text>
			<text class="public-goods-styleone-goodsdesc-stock">我的库存：10</text>
			<view class="public-goods-styleone-goodsdesc-price">
				<view class="public-goods-styleone-goodsdesc-price-supplyprice">
					<text class="text">供货价</text>
					<text class="price">￥264</text>
				</view>
				<text class="public-goods-styleone-goodsdesc-price-retailprice">零售价￥199.00</text>
				<view class="public-goods-styleone-goodsdesc-price-shoppingcart">
					<image src="../../static/home/shopping-cart.png" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			styles: {
				type: [String,Object]
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	
	.public-goods-styleone {
		width: 100%;
		height: 220rpx;
		background: $uni-bg-color;
		display: flex;
		
		.public-goods-styleone-goodsimg {
			width: 220rpx;
			height: 100%;
			margin: 0 28rpx;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.public-goods-styleone-goodsdesc {
			width: 443rpx;
			height: 100%;
			position: relative;
			top: 0;
			left: 0;
			
			.public-goods-styleone-goodsdesc-title {
				display: block;
				margin-top: 5rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: $uni-text-third-size;
				color: $uni-text-default-color;
			}
			
			.public-goods-styleone-goodsdesc-spec {
				display: block;
				margin-top: 30rpx;
				line-height: 20rpx;
				font-size: $uni-text-fourth-size;
				color: $uni-text-other-color;
			}
			
			.public-goods-styleone-goodsdesc-stock {
				display: block;
				margin-top: 30rpx;
				line-height: 20rpx;
				font-size: $uni-text-fourth-size;
				color: $uni-text-other-color;
			}
			
			.public-goods-styleone-goodsdesc-price {
				width: 100%;
				height: 45rpx;
				display: flex;
				align-items: center;
				position: absolute;
				bottom: 0;
				left: 0;
				
				.public-goods-styleone-goodsdesc-price-supplyprice {
					height: 100%;
					display: flex;
					align-items: center;
					
					.text {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 72rpx;
						height: 30rpx;
						text-align: center;
						border-radius: 5rpx;
						background-color: #D3B689;
						font-size: $uni-text-eighth-size;
						color: $uni-text-white-color;
					}
					
					.price {
						margin-left: 5rpx;
						line-height: 30rpx;
						font-size: $uni-text-second-size;
						color: $uni-text-price-color;
					}
				}
				
				.public-goods-styleone-goodsdesc-price-retailprice {
					margin-left: 8rpx;
					line-height: 20rpx;
					text-decoration: line-through;
					font-size: $uni-text-seventh-size;
					color: $uni-text-del-price-color;
				}
				
				.public-goods-styleone-goodsdesc-price-shoppingcart {
					display: flex;
					align-items: center;
					margin-left: auto;
					width: 35rpx;
					height: 35rpx;
					
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
