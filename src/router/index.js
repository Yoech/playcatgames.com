import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import CookiePolicy from '../views/CookiePolicy.vue'
import Sitemap from '../views/Sitemap.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/privacy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
        meta: {
            title: 'Privacy Policy - PlayCatGames'
        }
    },
    {
        path: '/terms',
        name: 'TermsOfService',
        component: TermsOfService,
        meta: {
            title: 'Terms of Service - PlayCatGames'
        }
    },
    {
        path: '/cookies',
        name: 'CookiePolicy',
        component: CookiePolicy,
        meta: {
            title: 'Cookie Policy - PlayCatGames'
        }
    },
    {
        path: '/sitemap',
        name: 'Sitemap',
        component: Sitemap,
        meta: {
            title: 'Sitemap - PlayCatGames'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'PlayCatGames - 免费在线猫咪游戏'
    }
    next()
})

export default router