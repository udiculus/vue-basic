<template>
    <div id="app">
        <m-header></m-header>
        <router-view/>
        <m-footer></m-footer>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'

    export default {
        name: 'App',
        components: {
            'm-header': Header,
            'm-footer': Footer
        }
    }
</script>

<style lang="scss">
    @import 'src/assets/scss/style.scss';
</style>
