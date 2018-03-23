import Vue from 'vue'
import Router from 'vue-router'
// 登陆
import Login from '@/components/Login'
// 查询配置
import Query from '../components/QueryConfig'
// 客户管理
import Customer from "../components/CustomerList"
// 客户管理 逾期
import CustomerManager from "../components/CustomerManger"
// 客户详情
import Detail from "../components/Detail"
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        title:"登陆"
      }
    },
    {
      path:'/query',
      name:'Query',
      component:Query,
      meta:{
        title:'查询配置'
      }
    },
    {
      path:'/customer',
      name:'Customer',
      component:Customer,
      meta:{
        title:'客户管理'
      }
    },
    {
      path:'/customermanager',
      name:'CustomerManager',
      component:CustomerManager,
      meta:{
        title:'客户管理'
      }
    },
    {
      path:'/detail',
      name:'Detail',
      component:Detail,
      meta:{
        title:'客户详情'
      }
    }

  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //如果未匹配到路由
    from.name ? next({
      name: from.name
    }) : next('/home'); //如果上级也未匹配到路由则跳转home页面，如果上级能匹配到则转上级路由
  } else {
    document.title = to.meta.title;
    next(); //如果匹配到正确跳转
  }
  next();
});
export default router;
