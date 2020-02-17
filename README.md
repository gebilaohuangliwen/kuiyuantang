目录结构
```
|--common				//公共组件  
|   |--vue				//公共组件  
|   |   |--public-goods-styleone.vue	//单个商品公共组件  
|   |   |--public-goods-styletwo.vue	//一行两个商品公共组件  
|   |   |--public-nav.vue		//自定义导航公共组件  
|   |   |--public-tab.vue		//自定义tab公共组件  
|--components				//各模块子组件  
|--pages				//业务页面文件存放的目录  
|   |--home  
|   |    |--index.vue			//首页  
|   |--category  
|   |    |--index.vue			//商品分类  
|--services				//服务  
|--static				//存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此  
|--unpackage				//编译后文件  
|--App.vue				//应用配置，用来配置App全局样式以及监听 应用生命周期  
|--main.js				//Vue初始化入口文件  
|--manifest.json			//配置应用名称、appid、logo、版本等打包信息  	
|--pages.json				//配置页面路由、导航条、选项卡等页面类信息  
|--uni.scss				//全局公共样式  