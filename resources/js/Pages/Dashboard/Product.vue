<template>
    <div class="flex flex-col w-full">
        <div class="flex flex-col content-center justify-center w-full">
            <div class="flex px-12 items-center justify-between mb-3">
                <transition name="fade">
                    <div v-show="show_modal" class="fixed inset-0 z-30">
                        <div
                            v-show="show_modal"
                            @click="showModal()"
                            class="bg-filter bg-white opacity-25 fixed inset-0 w-full h-full z-20"
                        ></div>
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
                                                        v-model="product.name"
                                                        label="Name"
                                                    />
                                                    <CustomInput
                                                        class="mb-2"
                                                        v-model="product.email"
                                                        label="Email"
                                                    />
                                                    <CustomInput
                                                        type="password"
                                                        class="mb-2"
                                                        v-model="
                                                            product.password
                                                        "
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
                        class="h-16 w-16"
                        viewBox="0 0 24 24"
                        id="_003_ECOMMERCE_03"
                        data-name="003_ECOMMERCE_03"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>003_085</title>
                        <path
                            d="M11,21H4a.99974.99974,0,0,1-1-1V4A.99974.99974,0,0,1,4,3H20a.99974.99974,0,0,1,1,1v7a1,1,0,0,1-2,0V5H5V19h6a1,1,0,0,1,0,2Z"
                            style="fill: #333"
                        />
                        <polygon
                            points="10 4 10 10 12 8 14 10 14 4 10 4"
                            style="fill: #333"
                        />
                        <path
                            d="M17,21a.99974.99974,0,0,1-1-1V14a1,1,0,0,1,2,0v6A.99974.99974,0,0,1,17,21Z"
                            style="fill: #333"
                        />
                        <path
                            d="M20,18H14a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
                            style="fill: #333"
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
                            @change="getProducts(null)"
                            v-model="perPage"
                            class="appearance-none relative block w-24 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span class="ml-3"
                            >Found {{ products.total }} Product</span
                        >
                    </div>
                    <div>
                        <input
                            v-model="search"
                            @change="getProducts(null)"
                            class="appearance-none relative block w-48 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Type to Search users"
                        />
                    </div>
                </div>
                <table
                    v-if="products.loading || !products.data.length"
                    class="w-full"
                >
                    <tr>
                        <td colspan="6">
                            <Spinner v-if="products.loading" />
                            <p v-else class="text-center py-8 text-gray-700">
                                There are no Product
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
                                @click="sortProducts('id')"
                            >
                                ID
                            </th>
                            <th
                                field="image"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                            >
                                Image
                            </th>
                            <th
                                field="title"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortProducts('title')"
                            >
                                Title
                            </th>
                            <th
                                field="price"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortProducts('price')"
                            >
                                Price
                            </th>
                            <th
                                field="updated_at"
                                :sort-field="sortField"
                                :sort-direction="sortDirection"
                                @click="sortProducts('updated_at')"
                            >
                                Last Updated At
                            </th>
                            <th field="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody v-if="products.loading || !products.data.length">
                        <tr>
                            <td colspan="6">
                                <Spinner v-if="products.loading" />
                                <p
                                    v-else
                                    class="text-center py-8 text-gray-700"
                                >
                                    There are no products
                                </p>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr v-for="(product, index) of products.data">
                            <td class="border-b p-2">{{ product.id }}</td>
                            <td class="border-b p-2">
                                <img
                                    class="w-16 h-16 object-cover"
                                    :src="product.image_url"
                                    :alt="product.title"
                                />
                            </td>
                            <td
                                class="border-b p-2 max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                {{ product.title }}
                            </td>
                            <td class="border-b p-2">
                                {{ product.price }}
                            </td>
                            <td class="border-b p-2">
                                {{ product.updated_at }}
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
                    v-if="!products.loading"
                    class="flex justify-between items-center mt-5"
                >
                    <div v-if="products.data.length">
                        Showing from {{ products.from }} to {{ products.to }}
                    </div>
                    <nav
                        v-if="products.total > products.limit"
                        class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                        <a
                            v-for="(link, i) of products.links"
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
                                i === products.links.length - 1
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
const products = computed(() => store.state.products);
const sortField = ref("updated_at");
const sortDirection = ref("desc");

const product = ref({});

const emit = defineEmits(["clickEdit"]);

onMounted(() => {
    getProducts();
});

function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
        return;
    }

    getProducts(link.url);
}

function getProducts(url = null) {
    store.dispatch("getProducts", {
        url,
        search: search.value,
        per_page: perPage.value,
        sort_field: sortField.value,
        sort_direction: sortDirection.value,
    });
}

function sortProducts(field) {
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

    getProducts();
}

function showAddNewModal() {
    showProductModal.value = true;
}

function deleteProduct(product) {
    if (!confirm(`Are you sure you want to delete the product?`)) {
        return;
    }
    store.dispatch("deleteProduct", product.id).then((res) => {
        // TODO Show notification
        store.dispatch("getProducts");
    });
}

function editProduct(p) {
    emit("clickEdit", p);
}
</script>
