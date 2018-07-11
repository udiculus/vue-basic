<template>
    <div class="form-canvas">
        <form class="form" v-on:submit.prevent="submitForm" method="POST">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">Post New Article</h1>
                <p>Fill in the title and content then press the submit button to create a new article.</p>
            </div>
            <div class="form-label-group">
                <input id="title" autofocus="" class="form-control" placeholder="Type the title of your content" v-model="title"/> <label for="title">Title</label>
                <span class="error" v-if="error.title.status">{{ error.title.message }}</span>
            </div>
            <div class="form-label-group">
                <textarea class="form-control" id="content" placeholder="Type the content of your content" rows="6" v-model="content"></textarea> <label for="content">Content</label>
                <span class="error" v-if="error.content.status">{{ error.content.message }}</span>
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
        name: "Create",
        data() {
            return {
                title: "",
                content: "",
                error: {
                    title: {
                        status: false,
                        message: ""
                    },
                    content: {
                        status: false,
                        message: ""
                    }
                }
            }
        },
        methods: {
            submitForm() {
                this.clearFormError()
                this.$http.post("article/create", {title: this.title, content: this.content}, {
                    emulateJSON: true
                })
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        if (data.errorcode > 0) {
                            for (var key in data.form_error) {
                                if (data.form_error.hasOwnProperty(key)) {
                                    this.error[key].status = true
                                    this.error[key].message = data.form_error[key]
                                }
                            }
                        } else {
                            this.$router.push({name: 'Article'})
                        }
                    })
            },
            clearFormError() {
                for (var key in this.error) {
                    if (this.error.hasOwnProperty(key)) {
                        this.error[key].status = false
                        this.error[key].message = ""
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
