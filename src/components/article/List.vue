<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="article in articles">
                    <div class="card mb-4 box-shadow">
                        <div style="background-color: #55595c; height: 255px"></div>
                        <div class="card-body">
                            <p class="card-text card-height">{{ article.title }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-secondary" type="button" @click="viewArticle(article.id)">View</button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button" @click="editArticle(article.id)">Edit</button>
                                    <button class="btn btn-sm btn-outline-secondary" type="button" @click="deleteArticle(article.id)">Delete</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                articles: []
            }
        },
        methods: {
            fetchData() {
                this.$http.get('article')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.articles = data.data;
                    });
            },
            viewArticle(articleId) {
                this.$router.push({name: 'ViewArticle', params: {id: articleId}});
            },
            editArticle(articleId) {
                this.$router.push({name: 'EditArticle', params: {id: articleId}});
            },
            deleteArticle(articleId) {
                console.log('do nothing for now...');
            }
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>

</style>
