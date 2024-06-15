<template>
    <div
        :class="{
            'scrolled shadow-xl z-20 my-2 py-2 bg-white': !view.atTopOfPage,
        }"
        class="flex flex-row sticky z-20 top-0 content-center items-center justify-between px-4"
    >
        <button
            type="button"
            class="px-8 rounded-md bg-white p-2 text-gray-400 lg:hidden"
            @click="open = true"
        >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open menu</span>
            <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h14"
                />
            </svg>
        </button>
        <div class="hidden h-full lg:block">
            <ul class="flex h-full flex-row items-center">
                <li class="">
                    <div class="group static cursor-pointer">
                        <div
                            class="flex menu-hover h-16 items-center justify-between bg-white"
                        >
                            <a
                                class="text-base font-medium text-black lg:mx-4"
                                onClick=""
                            >
                                Product
                            </a>
                        </div>
                        <div
                            class="invisible absolute z-50 group-hover:visible border-gray-200 shadow-2xl bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                        >
                            <div
                                class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Online Stores
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Segmentation
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Marketing CRM
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Online Stores
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Segmentation
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Marketing CRM
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="group static cursor-pointer">
                        <div class="flex menu-hover h-16 items-center bg-white">
                            <a
                                class="text-base font-medium text-black"
                                onClick=""
                            >
                                Service
                            </a>
                        </div>
                        <div
                            class="invisible absolute z-50 group-hover:visible border-gray-200 shadow-2xl bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
                        >
                            <div
                                class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6"
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Online Stores
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Segmentation
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Marketing CRM
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Online Stores
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Segmentation
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <div class="font-semibold">
                                                Marketing CRM
                                            </div>
                                            <span
                                                class="text-sm text-gray-500 dark:text-gray-400"
                                                >Connect with third-party tools
                                                that you're already using.</span
                                            >
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <logo />
        </div>
        <div class="px-4">
            <div>
                <router-link to="/Login" class="flex">
                    Login
                    <span class="justify-center content-center px-2">
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 12H5m14 0-4 4m4-4-4-4"
                            />
                        </svg>
                    </span>
                </router-link>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import logo from "./logo.vue";
import spenning from "./Spenning.vue";

export default {
    name: "Navbar",
    data() {
        return {
            view: {
                atTopOfPage: true,
            },
        };
    },
    components: {
        logo,
        spenning,
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },

    methods: {
        // the function to call when the user scrolls, added as a method
        handleScroll() {
            // when the user scrolls, check the pageYOffset
            if (window.pageYOffset > 0) {
                // user is scrolled
                if (this.view.atTopOfPage) this.view.atTopOfPage = false;
            } else {
                // user is at top of page
                if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
