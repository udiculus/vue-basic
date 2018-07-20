import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)

export default {
    getArticles (callback) {
        axios.get('article')
            .then(response => {
                return response.json()
            })
            .then(data => {
                callback(data)
            })
            .catch(function (error) {
                console.log(error)
            })
        // Vue.http.get('article')
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         callback(data)
        //     })
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
