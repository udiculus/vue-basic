import articleService from '../../api/article'

// initial state
const state = {
    articles: [],
    article: {
        id: '',
        title: '',
        body: '',
        comments: []
    }
}

// getters
const getters = {}

// actions
const actions = {
    getAllArticles ({commit}) {
        articleService.getArticles(response => {
            commit('loadArticle', response.data)
        })
    },
    removeArticle ({commit, state}, indexId) {
        var articleId = state.articles[indexId].id
        return new Promise((resolve, reject) => {
            articleService.deleteArticle(response => {
                if (response.errorcode > 0) {
                    reject(new Error('Unable to delete the article'))
                } else {
                    // Vue.$refs.modalDelete.hide()
                    commit('deleteArticle', indexId)
                    resolve()
                }
            }, articleId)
        })
    },
    viewArticle ({commit}, articleId) {
        articleService.viewArticle(response => {
            commit('viewArticle', response.data)
        }, articleId)
    }
}

// mutations
const mutations = {
    loadArticle (state, articles) {
        state.articles = articles
    },
    deleteArticle (state, indexId) {
        state.articles.splice(indexId, 1)
    },
    viewArticle (state, article) {
        state.article.id = article.id
        state.article.title = article.title
        state.article.body = article.body
        state.article.comments = article.comments
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
