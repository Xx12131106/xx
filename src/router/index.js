import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../App.vue'

const originaPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originaPush.call(this,location).catch(err => err)
}
Vue.use(VueRouter)

const routes=[
	{path:'/',
	redirect:'/home',
	meta:{
		requiredAuth:true,
	},
	children:[

	]},
	{
		path:'/home',//只有访问到才加载
		meta:{
			title:'Hello'
		},
		component:()=>import('@/views/home/index.vue'),
	},
	{
		path:'/echarts',//只有访问到才加载
		meta:{
			title:'echarts'
		},
		component:()=>import('@/views/echarts/index.vue'),
	},
	{
		path:'/music',//只有访问到才加载
		meta:{
			title:'音乐列表'
		},
		component:()=>import('@/views/music/musicList.vue'),
	},
	{
		path:'/game1',//只有访问到才加载
		meta:{
			title:'游戏'
		},
		component:()=>import('@/views/game/game1.vue'),
	},
	
]

const router = new VueRouter({
	routes
})
// 导航守卫---全局前置守卫
 /* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
 if (to.meta.title) {
 document.title = to.meta.title
 }
 next()
})

// 目的：非注册登录页，检查token
// 若没有token跳转登录页 保存当前页面路由地址
// 登录成功后，自动跳转到保存的当前页面
// router.beforeEach((to,from,next)=>{
// 	console.log(to,'-----',from,'-----',next)
// 	// ...
// 	//1 判断to 地址是否需要校验
// 	let isAuth = to.matched.some(record=>record.meta.requiredAuth)
// 	console.log(isAuth)
// 	// 2-a 不需要校验，继续执行
// 	if(!isAuth){
// 		next()
// 		return;
// 	}
// 	// 2-b 需要校验，获取token进行校验
// 	let token = localStorage.getItem('token')
// 	// token不存在，重定向，强制跳转登录
// 	if(!token){
// 		next({path:'/login',query:{redirect:to.fullPath}})
// 		return;
// 	}
// 	// token存在，执行下一个钩子函数
// 	// 通过没有next()不会触发下一个钩子函数
// 	next()
// })

export default router