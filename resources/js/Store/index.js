import { createStore } from "vuex";
import axiosClient from "../axios.js";

const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
        users: {
            loading: false,
            data: [],
            links: [],
            from: null,
            to: null,
            page: 1,
            limit: null,
            total: null,
        },
        products: {
            loading: false,
            data: [],
            links: [],
            from: null,
            to: null,
            page: 1,
            limit: null,
            total: null,
        },
    },
    getters: {
        user(state) {
            return state.user.data;
        },
        token(state) {
            return state.user.token;
        },
    },
    actions: {
        async getCurrentUser({ commit }, data) {
            return axiosClient.get("/user", data).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },

        async login({ commit }, data) {
            return axiosClient.post("/login", data).then(({ data }) => {
                commit("setUser", data.user);
                commit("setToken", data.token);
                return data;
            });
        },
        async register({ commit }, data) {
            return axiosClient.post("/register", data);
        },

        async logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("setToken", null);

                return response;
            });
        },
        async getUsers(
            { commit, state },
            {
                url = null,
                search = "",
                per_page,
                sort_field,
                sort_direction,
            } = {}
        ) {
            commit("setUsers", [true]);
            url = url || "/users";
            const params = {
                per_page: state.users.limit,
            };
            return axiosClient
                .get(url, {
                    params: {
                        ...params,
                        search,
                        per_page,
                        sort_field,
                        sort_direction,
                    },
                })
                .then((response) => {
                    commit("setUsers", [false, response.data]);
                })
                .catch(() => {
                    commit("setUsers", [false]);
                });
        },
        async createUser({ commit }, user) {
            return axiosClient.post("/users", user);
        },

        async getProducts(
            { commit, state },
            {
                url = null,
                search = "",
                per_page,
                sort_field,
                sort_direction,
            } = {}
        ) {
            commit("setProducts", [true]);
            url = url || "/products";
            const params = {
                per_page: state.products.limit,
            };
            return axiosClient
                .get(url, {
                    params: {
                        ...params,
                        search,
                        per_page,
                        sort_field,
                        sort_direction,
                    },
                })
                .then((response) => {
                    commit("setProducts", [false, response.data]);
                })
                .catch(() => {
                    commit("setProducts", [false]);
                });
        },

        async getProduct({ commit }, id) {
            return axiosClient.get(`/products/${id}`);
        },

        async createProduct({ commit }, product) {
            if (product.image instanceof File) {
                const form = new FormData();
                form.append("title", product.title);
                form.append("image", product.image);
                form.append("description", product.description || "");
                form.append("published", product.published ? 1 : 0);
                form.append("price", product.price);
                product = form;
            }
            return axiosClient.post("/products", product);
        },

        async deleteProduct({ commit }, id) {
            return axiosClient.delete(`/products/${id}`);
        },
    },
    mutations: {
        setUser(state, user) {
            state.user.data = user;
        },
        setToken(state, token) {
            state.user.token = token;
            if (token) {
                sessionStorage.setItem("TOKEN", token);
            } else {
                sessionStorage.removeItem("TOKEN");
            }
        },
        setUsers(state, [loading, data = null]) {
            if (data) {
                state.users = {
                    ...state.users,
                    data: data.data,
                    links: data.meta?.links,
                    page: data.meta.current_page,
                    limit: data.meta.per_page,
                    from: data.meta.from,
                    to: data.meta.to,
                    total: data.meta.total,
                };
            }
            state.users.loading = loading;
        },
        setProducts(state, [loading, data = null]) {
            if (data) {
                state.products = {
                    ...state.products,
                    data: data.data,
                    links: data.meta?.links,
                    page: data.meta.current_page,
                    limit: data.meta.per_page,
                    from: data.meta.from,
                    to: data.meta.to,
                    total: data.meta.total,
                };
            }
            state.products.loading = loading;
        },
    },
});

export default store;
