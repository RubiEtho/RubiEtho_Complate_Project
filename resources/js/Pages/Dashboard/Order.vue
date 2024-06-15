<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col content-center justify-center w-full">
            <div class="flex px-12 items-center justify-between mb-3">
                <transition name="fade">
                    <div v-show="show_modal" class="fixed inset-0 z-30">
                        <!--       background -->
                        <div
                            v-show="show_modal"
                            @click="showModal()"
                            class="bg-filter bg-white opacity-25 fixed inset-0 w-full h-full z-20"
                        ></div>
                        <!--          -->
                        <main
                            class="flex flex-col items-center justify-center h-full w-full"
                        >
                            <transition name="fade-up-down">
                                <div
                                    v-show="show_modal"
                                    class="modal-wrapper inline-block flex items-center z-30"
                                >
                                    <div
                                        class="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative"
                                    >
                                        <div
                                            class="modal-header p-5 bg-gray-900 text-gray-900 rounded-t"
                                        >
                                            <h5
                                                class="text-white text-2xl uppercase"
                                            >
                                                this is header
                                            </h5>
                                        </div>
                                        <div
                                            class="modal-body p-5 w-full h-full overflow-y-auto"
                                        >
                                            <form
                                                class="w-full"
                                                @submit.prevent="onSubmit"
                                            >
                                                <div
                                                    class="bg-white px-4 pt-5 pb-4"
                                                >
                                                    <CustomInput
                                                        class="mb-2"
                                                        v-model="user.name"
                                                        label="Name"
                                                    />
                                                    <CustomInput
                                                        class="mb-2"
                                                        v-model="user.email"
                                                        label="Email"
                                                    />
                                                    <CustomInput
                                                        type="password"
                                                        class="mb-2"
                                                        v-model="user.password"
                                                        label="Password"
                                                    />
                                                </div>
                                                <footer
                                                    class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
                                                >
                                                    <button
                                                        type="submit"
                                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                                                    >
                                                        Submit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                        @click="closeModal()"
                                                        ref="cancelButtonRef"
                                                    >
                                                        Cancel
                                                    </button>
                                                </footer>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </main>
                    </div>
                </transition>
                <button
                    type="button"
                    @click="showModal()"
                    class="rounded-full border border-transparent text-sm"
                >
                    <svg
                        fill="#000000"
                        class="w-8 h-8"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.989 19.129C16 17 13.803 15.74 11.672 14.822c-2.123-.914-2.801-1.684-2.801-3.334 0-.989.648-.667.932-2.481.12-.752.692-.012.802-1.729 0-.684-.313-.854-.313-.854s.159-1.013.221-1.793c.064-.817-.398-2.56-2.301-3.095-.332-.341-.557-.882.467-1.424-2.24-.104-2.761 1.068-3.954 1.93-1.015.756-1.289 1.953-1.24 2.59.065.78.223 1.793.223 1.793s-.314.17-.314.854c.11 1.718.684.977.803 1.729.284 1.814.933 1.492.933 2.481 0 1.65-.212 2.21-2.336 3.124C.663 15.53 0 17 .011 19.129.014 19.766 0 20 0 20h16s-.014-.234-.011-.871zM17 10V7h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="bg-white p-4 w-full rounded-lg shadow animate-fade-in-down"
            >
                <div class="flex justify-between border-b-2 pb-3">
                    <div class="flex items-center">
                        <span class="whitespace-nowrap mr-3">Per Page</span>
                        <select
                            @change="getUsers(null)"
                            v-model="perPage"
                            class="appearance-none relative block w-24 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span class="ml-3">Found {{ users.total }} users</span>
                    </div>
                    <div>
                        <input
                            v-model="search"
                            @change="getUsers(null)"
                            class="appearance-none relative block w-48 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Type to Search users"
                        />
                    </div>
                </div>
                <table
                    v-if="users.loading || !users.data.length"
                    class="w-full"
                >
                    <tr>
                        <td colspan="6">
                            <Spinner v-if="users.loading" />
                            <p v-else class="text-center py-8 text-gray-700">
                                There are no users
                            </p>
                        </td>
                    </tr>
                </table>
                <table v-else class="table-auto text-center w-full">
                    <thead>
                        <tr>
                            <th
                                field="id"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('id')"
                            >
                                ID
                            </th>
                            <th
                                field="name"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('email')"
                            >
                                Name
                            </th>
                            <th
                                field="email"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('email')"
                            >
                                Email
                            </th>
                            <th
                                field="created_at"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('created_at')"
                            >
                                Create Date
                            </th>
                            <th
                                field="name"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('email')"
                            >
                                Status
                            </th>
                            <th
                                field="name"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortUsers('email')"
                            >
                                Role
                            </th>
                            <th field="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) of users.data">
                            <td class="border-b p-2">{{ user.id }}</td>
                            <td class="border-b p-2">
                                {{ user.name }}
                            </td>
                            <td
                                class="border-b p-2 max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                {{ user.email }}
                            </td>
                            <td class="border-b p-2">
                                {{ user.created_at }}
                            </td>
                            <td class="border-b p-2">
                                {{ user.created_at }}
                            </td>
                            <td class="border-b p-2">
                                {{ user.roles }}
                            </td>
                            <td
                                class="relative justify-center content-center items-center"
                            >
                                <svg
                                    class="w-full justify-center h-8"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    @click="
                                        isOptionsExpanded = !isOptionsExpanded
                                    "
                                    @blur="isOptionsExpanded = false"
                                >
                                    <path
                                        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                                        stroke="#000000"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <transition
                                    enter-active-class="transform transition duration-500 ease-custom"
                                    enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                                    enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                    leave-active-class="transform transition duration-300 ease-custom"
                                    leave-class="translate-y-0 scale-y-100 opacity-100"
                                    leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
                                >
                                    <ul
                                        v-show="isOptionsExpanded"
                                        class="absolute z-50 left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden"
                                    >
                                        <li
                                            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                        >
                                            Edit
                                        </li>
                                        <li
                                            class="px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
                                        >
                                            Delete
                                        </li>
                                    </ul>
                                </transition>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div
                    v-if="!users.loading"
                    class="flex justify-between items-center mt-5"
                >
                    <div v-if="users.data.length">
                        Showing from {{ users.from }} to {{ users.to }}
                    </div>
                    <nav
                        v-if="users.total > users.limit"
                        class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                        <a
                            v-for="(link, i) of users.links"
                            :key="i"
                            :disabled="!link.url"
                            href="#"
                            @click="getForPage($event, link)"
                            aria-current="page"
                            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
                            :class="[
                                link.active
                                    ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                                i === 0 ? 'rounded-l-md' : '',
                                i === users.links.length - 1
                                    ? 'rounded-r-md'
                                    : '',
                                !link.url ? ' bg-gray-100 text-gray-700' : '',
                            ]"
                            v-html="link.label"
                        >
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../../Store";
import Spinner from "../../Component/Components/Spenning.vue";
import CustomInput from "../../Component/CustomInput.vue";

const perPage = ref(10);
const search = ref("");
const users = computed(() => store.state.users);
const sortField = ref("updated_at");
const sortDirection = ref("desc");
let loading = ref(false);

const user = ref({});
const show_modal = ref(false);
const isOptionsExpanded = ref(false);

onMounted(() => {
    getUsers();
});
function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
        return;
    }

    getUsers(link.url);
}
function onUpdated() {
    user.value = {
        id: props.user.id,
        name: props.user.name,
        email: props.user.email,
    };
}

function onSubmit() {
    loading.value = true;
    store
        .dispatch("createUser", user.value)
        .then((response) => {
            loading.value = false;
            if (response.status === 201) {
                // TODO show notification
                store.dispatch("getUsers");
                closeModal();
            }
        })
        .catch((err) => {
            loading.value = false;
            debugger;
        });
}
function getUsers(url = null) {
    store.dispatch("getUsers", {
        url,
        search: search.value,
        per_page: perPage.value,
        sort_field: sortField.value,
        sort_direction: sortDirection.value,
    });
}

function sortUsers(field) {
    if (field === sortField.value) {
        if (sortDirection.value === "desc") {
            sortDirection.value = "asc";
        } else {
            sortDirection.value = "desc";
        }
    } else {
        sortField.value = field;
        sortDirection.value = "asc";
    }

    getUsers();
}

function showModal() {
    show_modal.value = true;
}
function closeModal() {
    show_modal.value = false;
}
function deleteUser(user) {
    if (!confirm(`Are you sure you want to delete the user?`)) {
        return;
    }
    store.dispatch("deleteUser", user.id).then((res) => {
        // TODO Show notification
        store.dispatch("getUsers");
    });
}

function editUser(p) {
    emit("clickEdit", p);
}
</script>

<style scoped></style>
