<template>
    <section class="w-full dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center mx-auto">
            <div
                class="w-full md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            >
                <div class="p-4 md:space-y-4 sm:p-4">
                    <form
                        class="space-y-2 md:space-y-4"
                        method="POST"
                        @submit.prevent="login"
                    >
                        <div
                            v-if="errorMsg"
                            class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
                        >
                            {{ errorMsg }}
                            <span
                                @click="errorMsg = ''"
                                class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                        </div>
                        <input type="hidden" name="remember" value="true" />
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Your email</label
                            >
                            <input
                                type="email"
                                name="email"
                                autocomplete="email"
                                v-model="data.email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@rubietho.com"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >Password</label
                            >
                            <input
                                type="password"
                                autocomplete="current-password"
                                name="password"
                                v-model="data.password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        v-model="data.remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label
                                        for="remember"
                                        class="text-gray-500 dark:text-gray-300"
                                        >Remember me</label
                                    >
                                </div>
                            </div>
                            <router-link
                                to="/Forget"
                                class="text-sm font-medium text-blck hover:underline dark:text-gray-500"
                                >Forgot password?</router-link
                            >
                        </div>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            :class="{
                                'cursor-not-allowed': loading,
                                'hover:bg-gray-500': loading,
                            }"
                        >
                            <svg
                                v-if="loading"
                                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            <span
                                class="absolute left-0 inset-y-0 flex items-center pl-3"
                            >
                            </span>
                            Sign in
                        </button>
                        <p
                            class="text-sm font-light text-gray-500 dark:text-gray-400"
                        >
                            Don’t have an account yet?
                            <router-link
                                to="/Register"
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >Sign up</router-link
                            >
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import store from "../../Store";
import router from "../../Route";

let loading = ref(false);
let errorMsg = ref("");

const data = {
    email: "",
    password: "",
    remember: false,
};

function login() {
    loading.value = true;
    store
        .dispatch("login", data)
        .then(() => {
            loading.value = false;
            router.push({ name: "Dashboard" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>
