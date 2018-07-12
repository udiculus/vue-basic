import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
    getArticles (callback) {
        Vue.http.get('article')
            .then(response => {
                return response.json()
            })
            .then(data => {
                callback(data)
            })
    },
    deleteArticle (callback, articleId) {
        Vue.http.get('article/delete/' + articleId)
            .then(response => {
                return response.json()
            })
            .then(data => {
                callback(data)
            })
    },
    viewArticle (callback, articleId) {
        Vue.http.get('article/' + articleId)
            .then(response => {
                return response.json()
            })
            .then(data => {
                callback(data)
            })
    }
}
