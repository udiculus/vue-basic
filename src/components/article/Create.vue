<template>
    <div class="form-canvas">
        <form class="form" method="POST" action="article/create" modelAttribute="article">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Post New Article</h1>
                <p>Fill in the title and content then press the submit button to create a new article.</p>
            </div>
            <div class="form-label-group">
                <input id="title" autofocus="" class="form-control" placeholder="Type the title of your content"/> <label for="title">Title</label>
            </div>
            <div class="form-label-group">
                <textarea class="form-control" id="content" placeholder="Type the content of your content" rows="6"></textarea> <label for="content">Content</label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Publish</button>
            <div class="nav-to-home">
                <router-link to="/article">Back to Home</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Create"
    }
</script>

<style scoped>

</style>
