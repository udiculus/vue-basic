import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/article/Article'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'Article',
            component: Article
        }
    ]
})
