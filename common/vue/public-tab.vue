<!--
	自定义公共tab组件
	@param
	value [Nunber,String] 选中的tab，默认为第一个
	tabCallback tab回调，返回值为当前选中的item对象,index
	itemColor 主色调 默认值#215B37
	lineColor 主色调 默认值#215B37
-->
<template>
	<view class="public-tab" v-if="type.length > 0">
		<scroll-view scroll-x="true" scroll-with-animation :scroll-left="tabsScrollLeft" @scroll="scroll">
			<view class="tab" id="tab_list">
				<view v-for="(item, index) in type"
					  :key="index"
					  :class="['tab__item', {'tab__item--active': currentIndex === index}]"
					  :style="{color: (currentIndex === index ? `${itemColor}`: '')}"
					  id="tab_item"
					  @click="select(item, index)"
				>
					<view class="tab__item-title">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="tab__line" 
				  :style="{background: lineColor, /*width: lineStyle.width,*/ transform: lineStyle.transform,transitionDuration: lineStyle.transitionDuration}">
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			//选中的tab，默认第一个
			value: {
				type: [Number,String],
				default: 0
			},
			type: { // 传值
				type: Array,
				default: ()=> {
					return []
				}
			},
			// tab主色调
			itemColor: {
				type: String,
				default: "#215B37"
			}, 
			// 下划线主色调
			lineColor: {
				type: String,
				default: "#215B37"
			} ,
			lineAnimated: { // 是否展示下划线动画
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				currentIndex: 0,
				lineStyle: {
					width: 0
				},
				scrollLeft: 0,
				tabsScrollLeft: 0,
				duration: 0.3
			}
		},
		watch: {
			type() {
				this.setTabList()
			},
			value() {
				this.currentIndex = this.value
				this.setTabList()
			}
		},
		mounted() {
			this.currentIndex = this.value
			this.setTabList()
			if(!this.lineAnimated) {
				this.duration = 0
			}
		},
		methods: {
			select(item, index) {
				this.$emit('tabCallback', item, index)
			},
			setTabList() {
				this.$nextTick(()=>{
					if(this.type.length > 0) {
						this.setLine()
						this.scrollIntoView()
					}
				})
			},
			setLine() {
				let lineWidth = 0, lineLeft = 0
				this.getElementData(`#tab_item`, (data)=> {
					let el = data[this.currentIndex]
					lineWidth = el.width / 2
					// lineLeft = el.width * (this.currentIndex + 0.5)  // 此种只能针对每个item长度一致的
					lineLeft = el.width / 2 + (-data[0].left) + el.left
					this.lineStyle = {
						width: `${lineWidth}px`,
						transform: `translateX(${lineLeft}px) translateX(-50%)`,
						transitionDuration: `${this.duration}s`
					};
				})
			},
			scrollIntoView() {  // item滚动
				let lineLeft = 0;
				this.getElementData('#tab_list', (data)=> {
					let list = data[0]
					this.getElementData(`#tab_item`, (data)=> {
						let el = data[this.currentIndex]
						// lineLeft = el.width * (this.currentIndex + 0.5) - list.width / 2 - this.scrollLeft
						lineLeft = el.width / 2 + (-list.left) + el.left - list.width / 2 - this.scrollLeft
						this.tabsScrollLeft = this.scrollLeft + lineLeft
					})
				})
			},
			getElementData(el, callback){
				uni.createSelectorQuery().in(this).selectAll(el).boundingClientRect().exec((data) => {
					callback(data[0]);
				});
			},
			scroll(e) {
				this.scrollLeft = e.detail.scrollLeft;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../uni.scss";
	.public-tab {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: $uni-bg-color;
		.tab {
			position: relative;
			top: 0;
			left: 0;
			display: flex;
			height: 88rpx;
			align-items: center;
			white-space: nowrap;
			&__item {
				flex: 1;
				// width: 30%;
				font-size: $uni-text-first-size;
				text-align: center;
				color: $uni-text-tab-color;
				&--active {
					color: $uni-text-default-color;
				}
				&-title {
					margin: 0 40rpx;
				}
			}
		}
		.tab__line {
			display: block;
			width: 32rpx;
			height:6rpx;
			position: absolute;
			bottom: 6rpx;
			left: 0;
			z-index: 1;
			border-radius: 3rpx;
			position: relative;
			background: $uni-color-primary;
		}
	}
</style>
