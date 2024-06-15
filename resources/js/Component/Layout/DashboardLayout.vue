<template>
    <div class="flex flex-row">
        <Sidebar />
        <div class="w-full flex flex-col">
            <router-view class="p-12"></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from "./../Components/Sidebar.vue";
export default {
    components: {
        Sidebar,
    },
};
</script>
