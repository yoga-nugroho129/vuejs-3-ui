import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
    // HOME PAGE
    {
        path: '/',
        name: 'home',
        component: Home
    },
    // END OF HOME
    // ======================== //
    // PROFILE PAGE
    {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "profile" */ '../views/profile.vue')
    },
    // END OF PROFILE
    // ======================== //
    // ABOUT PAGE
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    // END OF ABOUT
    // ======================== //
    // TODO PAGE
    {
        path: '/todo',
        name: 'todo',
        // route level code-splitting
        // this generates a separate chunk (todo.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "todo" */ '../views/toDoApp.vue')
    }
    // END OF ABOUT
    // ======================== //
]
const router = new VueRouter({
    routes
})
export default router