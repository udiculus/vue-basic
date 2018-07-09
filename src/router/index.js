import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

// Article Components
import BaseArticleTemplate from '@/components/article/BaseArticleTemplate'
import Article from '@/components/article/Article'
import ArticleDetail from '@/components/article/Detail'
import ArticleEdit from '@/components/article/Edit'
import ArticleCreate from '@/components/article/Create'

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
            name: 'Home',
            component: BaseArticleTemplate,
            children: [
                {
                    path: '',
                    component: Article
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/article',
            component: BaseArticleTemplate,
            children: [
                {
                    path: '',
                    name: 'Article',
                    component: Article
                },
                {
                    path: 'create',
                    name: 'CreateArticle',
                    component: ArticleCreate
                },
                {
                    path: ':id',
                    name: 'ViewArticle',
                    component: ArticleDetail
                },
                {
                    path: ':id/edit',
                    name: 'EditArticle',
                    component: ArticleEdit
                }
            ]
        }
    ]
})
