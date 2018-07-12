<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="(article, index) in articles" :key="article.id">
                    <div class="card mb-4 box-shadow">
                        <div style="background-color: #55595c; height: 255px"></div>
                        <div class="card-body">
                            <p class="card-text card-height">{{ article.title }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-secondary" type="button"
                                            @click="viewArticle(article.id)">View
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button"
                                            @click="editArticle(article.id)">Edit
                                    </button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button"
                                            @click="deleteArticle(index)">Delete
                                    </button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal v-model="showDelete" ref="modalDelete" title="Delete Confirmation" @ok="handleDeleteArticle">
            <b-container fluid>
                <p class="my-4">Are you sure you want to delete the selected article?</p>
            </b-container>
        </b-modal>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "List",
        data() {
            return {
                deleteCaption: "",
                showDelete: false,
                deleteSelectedArticle: null
            }
        },
        computed: {
            ...mapState({
                articles: state => state.article.articles
            }),
        },
        methods: {
            ...mapActions('article', ['removeArticle']),
            viewArticle(articleId) {
                this.$router.push({name: 'ViewArticle', params: {id: articleId}})
            },
            editArticle(articleId) {
                this.$router.push({name: 'EditArticle', params: {id: articleId}})
            },
            deleteArticle(indexId) {
                this.showDelete = true
                this.deleteSelectedArticle = indexId
            },
            handleDeleteArticle(evt) {
                evt.preventDefault()
                if (this.deleteSelectedArticle < 0) {
                    alert("You didn't select the article")
                } else {
                    this.removeArticle(this.deleteSelectedArticle).then(() => {
                        this.$refs.modalDelete.hide()
                    },(error) => {
                        alert(error)
                    })
                }
            }
        },
        created() {
            this.$store.dispatch('article/getAllArticles')
        }
    }
</script>

<style scoped>

</style>
