<template>
    <div id="article">
        <article-banner></article-banner>
        <article-list></article-list>
    </div>
</template>

<script>
    import Banner from './Banner'
    import ArticleList from './List'

    export default {
        name: "Article",
        components: {
            'article-banner': Banner,
            'article-list': ArticleList
        }
    }
</script>

<style scoped>

</style>
