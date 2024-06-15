<template>
    <div class="min-h-screen">
        <Navbar />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
    import Navbar from '../Components/Navbar.vue';
    import Footer from '../Components/Footer.vue'

    export default {
        components: {
            Navbar,
            Footer,
        }
    }
</script>

<style lang="scss" scoped>

</style>