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
                                <Menu
                                    as="div"
                                    class="relative inline-block text-left"
                                >
                                    <div>
                                        <MenuButton
                                            class="inline-flex items-center justify-center w-full justify-center rounded-full w-10 h-10 bg-black bg-opacity-0 text-sm font-medium text-white hover:bg-opacity-5 focus:bg-opacity-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                        >
                                            <svg
                                                fill="#000000"
                                                width="16px"
                                                height="16px"
                                                viewBox="0 0 32 32"
                                                enable-background="new 0 0 32 32"
                                                id="Glyph"
                                                version="1.1"
                                                xml:space="preserve"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                            >
                                                <path
                                                    d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z"
                                                    id="XMLID_294_"
                                                />
                                                <path
                                                    d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z"
                                                    id="XMLID_295_"
                                                />
                                                <path
                                                    d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z"
                                                    id="XMLID_297_"
                                                />
                                            </svg>
                                        </MenuButton>
                                    </div>

                                    <transition
                                        enter-active-class="transition duration-100 ease-out"
                                        enter-from-class="transform scale-95 opacity-0"
                                        enter-to-class="transform scale-100 opacity-100"
                                        leave-active-class="transition duration-75 ease-in"
                                        leave-from-class="transform scale-100 opacity-100"
                                        leave-to-class="transform scale-95 opacity-0"
                                    >
                                        <MenuItems
                                            class="absolute z-10 right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div class="px-1 py-1">
                                                <MenuItem v-slot="{ active }">
                                                    <button
                                                        :class="[
                                                            active
                                                                ? 'bg-indigo-600 text-white'
                                                                : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]"
                                                        @click="
                                                            editProduct(product)
                                                        "
                                                    >
                                                        Edit
                                                    </button>
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                    <button
                                                        :class="[
                                                            active
                                                                ? 'bg-indigo-600 text-white'
                                                                : 'text-gray-900',
                                                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                        ]"
                                                        @click="
                                                            deleteProduct(
                                                                product
                                                            )
                                                        "
                                                    >
                                                        Delete
                                                    </button>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const perPage = ref(10);
const search = ref("");
const users = computed(() => store.state.users);
const sortField = ref("updated_at");
const sortDirection = ref("desc");
let loading = ref(false);

const user = ref({});
const show_modal = ref(false);

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
