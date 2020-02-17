<template>
	<view class="category">
		<public-nav navText="商品分类" :navRightIcon="navRightIcon" @navRightIconCallback="navRightIconCallback"></public-nav>
		<public-tab :type="tabList" @tabCallback="tabCallback" :value="tabkey"></public-tab>
		<view class="category-goods">
			<view class="category-goods-styleone" v-if="goodsType == 'style_two'">
				<public-goods-style-one styles="padding: 20rpx 0; margin-bottom: 5rpx;"></public-goods-style-one>
				<public-goods-style-one styles="padding: 20rpx 0; margin-bottom: 5rpx;"></public-goods-style-one>
			</view>
			<view class="category-goods-styletwo" v-else>
				<public-goods-style-two></public-goods-style-two>
				<public-goods-style-two></public-goods-style-two>
				<public-goods-style-two></public-goods-style-two>
				<public-goods-style-two></public-goods-style-two>
				<public-goods-style-two></public-goods-style-two>
			</view>
		</view>
	</view>
</template>

<script>
	import PublicNav from '../../common/vue/public-nav.vue';
	import PublicTab from '../../common/vue/public-tab.vue';
	import PublicGoodsStyleTwo from '../../common/vue/public-goods-styletwo.vue';
	import PublicGoodsStyleOne from '../../common/vue/public-goods-styleone.vue';
	export default {
		data() {
			return {
				//导航栏游标图标url
				navRightIconUrlOne: "../../static/category/style-one.png",
				navRightIconUrlTwo: "../../static/category/style-two.png",
				//导航栏右边图标
				navRightIcon: {
					isShowIcon: true,
					iconUrl: "../../static/category/style-one.png",
				},
				//商品展示类型，style_one=一行一个，style_two=一行两个
				goodsType: "style_one",
				//tabItem
				tabList: [{
					title: "外用型"
				}, {
					title: "口服型"
				}, {
					title: "女性专用"
				}],
				//选中的tabkey
				tabkey: 0
			}
		},
		components: {
			PublicNav,
			PublicTab,
			PublicGoodsStyleTwo,
			PublicGoodsStyleOne
		},
		methods: {
			//导航栏右边图标回调
			navRightIconCallback: function(){
				if (this.goodsType == "style_one") {
					this.goodsType= "style_two"
					this.navRightIcon.iconUrl= this.navRightIconUrlTwo
				} else { 
					this.goodsType= "style_one"
					this.navRightIcon.iconUrl= this.navRightIconUrlOne
				}
			},
			//tab回调
			tabCallback: function(item,key){
				this.tabkey = key
			}
		},
		onShow: function(){
			
		}
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	
	.category {
		width: 100%;
		
		.category-goods {
			
			.category-goods-styleone {
				width: 100%;
				margin-top: 20rpx;
			}
			
			.category-goods-styletwo {
				width: 689rpx;
				margin: 0 auto;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
			}
		}
	}
</style>
