<template>
    <header>
        <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
                <router-link to="/" class="navbar-brand d-flex align-items-center"><strong>Vue Basic - CDC</strong></router-link>
                <router-link to="/login" class="sign-in-btn">Sign In</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
