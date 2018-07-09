<template>
    <div id="article">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: "BaseArticleTemplate",
        components: {
            'app-header': Header,
            'app-footer': Footer
        }
    }
</script>

<style scoped>

</style>
