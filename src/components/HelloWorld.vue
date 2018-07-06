<template>
    <div id="load_modal">
        <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

        <!-- Modal Component -->
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">{{ msg }}</p>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'This message loaded using Bootstrap Modal'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
