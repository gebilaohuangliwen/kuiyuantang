<!--
	自定义商品公共组件(一行两个)
-->
<template>
	<view class="public-goods-styletwo">
		<view class="public-goods-styletwo-goodsimage">
			<image src="../../static/home/authorization.png" />
		</view>
		<view class="public-goods-styletwo-goodstitle">
			<text>梅里特女士植恋邂逅洗护梅里特女士植恋邂逅洗护</text>
		</view>
		<view class="public-goods-styletwo-goodsprice">
			<text class="price">
				<text class="unit">￥</text>
				<text class="value">599.00</text>
			</text>
			 <text class="retailprice">零售价￥799.00</text> 
		</view>
		<view class="puglic-goods-styletwo-goodsspec">
			<text>规格：3.32kg/套</text>
		</view>
		<view class="public-goods-styletwo-goodsstock">
			<text>我的库存：2658</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import "../../uni.scss";
	
	$child-width: 306.85rpx;
	$text-small-size: 20rpx;
	
	.public-goods-styletwo {
		width: 338rpx;
		margin-bottom: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 15rpx;
		overflow: hidden;
		background: $uni-bg-color;
		
		.public-goods-styletwo-goodsimage {
			width: 338rpx;
			height: 338rpx;
			
			image{
				width: 100%;
				height: 100%;
			}
		}
		
		.public-goods-styletwo-goodstitle {
			width: $child-width;
			margin: 0 auto;
			margin-top: 15rpx;
			
			text {
				display: block;
				margin-top: 5rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: $uni-text-third-size;
				color: $uni-text-default-color;
			}
		}
		
		.public-goods-styletwo-goodsprice {
			width: $child-width;
			margin: 0 auto;
			margin-top: 20rpx;
			height: 40rpx;
			display: flex;
			align-items: center;
			
			.price {
				display: flex;
				align-items: center;
				height: 100%;
				color: $uni-text-price-color;
				line-height: 20rpx;
				.unit {
					font-size: 21.99rpx;
				}
				
				.value {
					font-size: $uni-text-third-size;
				}
			}
			
			.retailprice {
				display: flex;
				align-items: center;
				height: 100%;
				margin-left: 8rpx;
				margin-top: 1rpx;
				line-height: 20rpx;
				text-decoration: line-through;
				font-size: $text-small-size;
				color: $uni-text-del-price-color;
			}
		}
		
		.puglic-goods-styletwo-goodsspec {
			width: $child-width;
			margin: 0 auto;
			margin-top: 20rpx;
			color: $uni-text-other-color;
			font-size: $text-small-size;
			line-height: 20rpx;
		}
		
		.public-goods-styletwo-goodsstock {
			width: $child-width;
			margin: 0 auto;
			margin-top: 20rpx;
			color: $uni-text-other-color;
			font-size: $text-small-size;
			line-height: 20rpx;
		}
	}
</style>
