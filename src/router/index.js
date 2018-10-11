import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '简历列表' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: '系统消息' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '简历编辑' ,permission: true}
                },
                {
                    path: '/resume',
                    component: resolve => require(['../components/page/ResumeDetail.vue'], resolve),
                    meta: { title: '简历查看'}
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/registe',
            component: resolve => require(['../components/page/Registe.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
