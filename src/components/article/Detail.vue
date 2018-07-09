<template>
    <div id="page_detail">
        <section class="article-header">
            <div class="container">
                <div class="article-heading">{{ title }}</div>
            </div>
        </section>
        <div>
            <div class="container">
                <div class="article-content">
                    {{ body }}
                </div>
                <div class="article-post-comment">
                    <form class="form form-comment" method="POST" action="article/comment" modelAttribute="comment" id="form_comment">
                        <input path="articleId" type="hidden" v-model="id"/>
                        <textarea class="form-control" id="comment" placeholder="What's on your mind..."></textarea>
                        <button class="btn btn-md btn-primary btn-block" type="submit">Post Comment</button>
                    </form>
                </div>
                <div class="article-comments">
                    <div class="comment" v-for="comment in comments">
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
    export default {
        name: "Detail",
        data() {
            return {
                id: '',
                title: '',
                body: '',
                comments: {}
            }
        },
        methods: {
            fetchData() {
                this.$http.get('article/1')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.id = data.data.id;
                        this.title = data.data.title;
                        this.body = data.data.body;
                        this.comments = data.data.comments;
                    });
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
