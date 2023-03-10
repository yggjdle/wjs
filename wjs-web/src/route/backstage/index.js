/* eslint-disable key-spacing */
/* eslint-disable comma-dangle */
// const NotFind = () => import('@/views/404.vue');
export default [
    {
        path: '/',
        redirect: { name: 'home' },
        component: () => import('@/components/index.vue'),
        children: [
            {
                name: 'home',
                path: '/home',
                meta: { title: '首页', icon: 'home' },
                // redirect: { name: 'check' },
                component: () => import('@/components/home/homeIndex.vue'),
            },
            {
                name: 'around',
                path: '/around',
                // meta: { title: '首页', icon: 'home' },
                // redirect: { name: 'check' },
                component: () => import('@/components/home/around.vue'),
            },
            {
                name: 'dom',
                path: '/dom',
                // meta: { title: '首页', icon: 'home' },
                // redirect: { name: 'check' },
                component: () => import('@/components/home/dom.vue'),
            },
            {
                name: 'concat',
                path: '/concat',
                // meta: { title: '首页', icon: 'home' },
                // redirect: { name: 'check' },
                component: () => import('@/components/home/concat.vue'),
            },
        ],
    },
    // {
    //     name: 'Login',
    //     path: '/login',
    //     component: () => import('@/views/login/index.vue'),
    // },
    // {
    //     name: 'Noright',
    //     path: '/noright',
    //     component: () => import('@/views/noRight.vue'),
    // },
    // {
    //     path: '/404',
    //     name: 'error',
    //     component: NotFind,
    // },
    // {
    //     path: '/:pathMatch(.*)',
    //     component: NotFind,
    //     // redirect: { name: 'error' },
    // },
];
