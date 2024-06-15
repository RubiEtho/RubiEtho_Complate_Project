<template>
    <div class="flex flex-col min-h-screen content-center items-center justify-center">
        <logo />
        <router-view></router-view>
    </div>
</template>

<script>
    import logo from './../Components/logo.vue'
    export default {
    components: { 
        logo, 
    },
        
    }
</script>

<style lang="scss" scoped>

</style>