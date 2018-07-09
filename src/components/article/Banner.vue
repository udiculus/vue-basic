<template>
    <section class="jumbotron text-center">
        <div class="container">
            <h1 class="jumbotron-heading">Articles</h1>
            <p class="lead text-muted">Something short and leading about the article of any contents. Make it short and
                sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p><router-link class="btn btn-primary my-2" to="article/create">Post a New Article</router-link></p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>

</style>
