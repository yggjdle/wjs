/* eslint-disable comma-dangle */
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let routes = [];

const routerContext = require.context('./', true, /\.js$/);
routerContext.keys().forEach((route) => {
    // 如果是根目录的 index.js、 不做任何处理
    if (route.startsWith('./index')) {
        return;
    }
    const routerModule = routerContext(route);
    // 兼容 import export 和 require module.export 两种规范 Es modules commonjs
    routes = [...routes, ...(routerModule.default || routerModule)];
});
const router = createRouter({
    history: createWebHistory(), // history 模式
    // history: createWebHashHistory(), // hash 模式
    routes,
});
NProgress.configure({ showSpinner: false });
router.beforeEach((next) => {
    NProgress.start();
    // if (to.query.token) {
    //   router.replace({
    //     path: to.path,
    //   });
    //   localStorage.setItem('ECRS-LOGIN-TOKEN', to.query.token);
    //   next();
    // } else {
    //   // 因为逻辑是第一次进来，判断用户信息不存在，即!user为true，由于使用的是next('/login')而非next()，
    //   // 会再次进入路由跳转，next()方法没有参数是直接进入页面，不会再次进入路由拦截，有参数则会，因为跳转，
    //   // 所以再次进入路由，再次判断，再次进入路由，再次判断，循环往复无限循环
    //   // 所以一定要加to.path !== 'login'的判断
    //   // console.log(to.path, 999);
    //   if (
    //     to.path.indexOf('/public/result') < 0 &&
    //     to.path.indexOf('/portal') < 0 &&
    //     to.path !== '/login' &&
    //     to.path !== '/portal' &&
    //     !localStorage.getItem('ECRS-LOGIN-TOKEN')
    //   ) {
    //     next('/login');
    //   } else {
    //     next();
    //   }
    // }
    // next();
});

router.afterEach(() => {
    NProgress.done();
});
export default router;
