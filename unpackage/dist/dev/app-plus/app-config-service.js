
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/index","pages/category/category"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"borderStyle":"#F7F5F7","color":"#949494","selectedColor":"#215B37","list":[{"pagePath":"pages/home/index","text":"首页","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home-select.png"},{"pagePath":"pages/pickup","text":"购物车","iconPath":"static/tabbar/shop.png","selectedIconPath":"static/tabbar/shop-select.png"},{"pagePath":"pages/team","text":"团队","iconPath":"static/tabbar/team.png","selectedIconPath":"static/tabbar/team-select.png"},{"pagaPath":"pages/person","text":"我的","iconPath":"static/tabbar/person.png","selectedIconPath":"static/tabbar/person-select.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"kuiyuantang","compilerVersion":"2.5.1","entryPagePath":"pages/home/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/home/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"black","navigationStyle":"custom","titleNView":false}},{"path":"/pages/category/category","meta":{},"window":{"navigationBarTextStyle":"black","navigationStyle":"custom","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});