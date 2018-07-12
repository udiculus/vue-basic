<template>
    <div id="page_detail">
        <section class="article-header">
            <div class="container">
                <div class="article-heading">{{ article.title }}</div>
            </div>
        </section>
        <div>
            <div class="container">
                <div class="article-content">
                    {{ article.body }}
                </div>
                <div class="article-post-comment">
                    <form class="form form-comment" method="POST" action="article/comment" modelAttribute="comment" id="form_comment">
                        <input path="articleId" type="hidden" v-model="article.id"/>
                        <textarea class="form-control" id="comment" placeholder="What's on your mind..."></textarea>
                        <button class="btn btn-md btn-primary btn-block" type="submit">Post Comment</button>
                    </form>
                </div>
                <div class="article-comments">
                    <div class="comment" v-for="comment in article.comments">
                        <div class="user-image"></div>
                        <div class="user-comment">
                            <div class="comment-meta">
                                <div class="comment-posted-by">{{ comment.username }}</div>
                                <div class="comment-time">{{ comment.createdAt }}</div>
                            </div>
                            <div class="comment-text">{{ comment.comment }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Detail",
        computed: {
            ...mapState({
                article: state => state.article.article
            })
        },
        created() {
            this.$store.dispatch('article/viewArticle', this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
