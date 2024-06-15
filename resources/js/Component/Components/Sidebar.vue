<template>
    <aside
        class="relative w-64 hidden lg:block h-screen overflow-x-hidden no-scrollbar max-h-screen"
        aria-label="Sidebar"
    >
        <router-link
            class="flex items-center rounded-md bg-white p-4 text-blue-600 w-full justify-center"
            to="/"
        >
            <logo />
        </router-link>
        <div
            class="flex flex-col w-full px-3 py-4 overflow-y-auto rounded dark:bg-gray-800"
        >
            <ul class="space-y-2">
                <li>
                    <router-link
                        to="/Dashboard"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            class="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M55.64 22.751H35.09C34.5596 22.751 34.0509 22.9617 33.6758 23.3368C33.3007 23.7118 33.09 24.2205 33.09 24.751V55.571C33.0916 56.1009 33.3028 56.6087 33.6775 56.9834C34.0523 57.3582 34.5601 57.5694 35.09 57.571H55.64C56.1699 57.5694 56.6777 57.3582 57.0525 56.9834C57.4272 56.6087 57.6384 56.1009 57.64 55.571V24.751C57.64 24.2205 57.4293 23.7118 57.0542 23.3368C56.6791 22.9617 56.1704 22.751 55.64 22.751Z"
                                fill="#999999"
                            />
                            <path
                                d="M55.64 5.62695H35.09C34.5596 5.62695 34.0509 5.83767 33.6758 6.21274C33.3007 6.58781 33.09 7.09652 33.09 7.62695V17.8969C33.0916 18.4269 33.3028 18.9347 33.6775 19.3094C34.0523 19.6841 34.5601 19.8954 35.09 19.8969H55.64C56.1699 19.8954 56.6777 19.6841 57.0525 19.3094C57.4272 18.9347 57.6384 18.4269 57.64 17.8969V7.62695C57.64 7.09652 57.4293 6.58781 57.0542 6.21274C56.6791 5.83767 56.1704 5.62695 55.64 5.62695Z"
                                fill="#000000"
                            />
                            <path
                                d="M28.24 36.451H7.7C6.59543 36.451 5.7 37.3465 5.7 38.451V55.5711C5.7 56.6756 6.59543 57.5711 7.7 57.5711H28.24C29.3446 57.5711 30.24 56.6756 30.24 55.5711V38.451C30.24 37.3465 29.3446 36.451 28.24 36.451Z"
                                fill="#000000"
                            />
                            <path
                                d="M28.24 5.62697H7.70002C7.43712 5.62604 7.17661 5.67714 6.93355 5.77733C6.69048 5.87751 6.46964 6.02477 6.28373 6.21068C6.09783 6.39658 5.95054 6.61742 5.85035 6.86049C5.75017 7.10355 5.6991 7.36406 5.70002 7.62697V31.557C5.70002 32.0874 5.91074 32.5961 6.28581 32.9712C6.66088 33.3462 7.16959 33.557 7.70002 33.557H28.24C28.7704 33.557 29.2791 33.3462 29.6542 32.9712C30.0293 32.5961 30.24 32.0874 30.24 31.557V7.62697C30.2409 7.36406 30.1898 7.10355 30.0896 6.86049C29.9895 6.61742 29.8422 6.39658 29.6563 6.21068C29.4704 6.02477 29.2495 5.87751 29.0065 5.77733C28.7634 5.67714 28.5029 5.62604 28.24 5.62697Z"
                                fill="#999999"
                            />
                        </svg>
                        <span class="ml-3">Dashboard</span>
                    </router-link>
                </li>
                <li class="relative transition">
                    <input class="peer hidden" type="checkbox" id="menu-1" />
                    <div
                        class="flex items-center px-2 text-base font-normal text-gray-900 rounded-t-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 relative py-2"
                    >
                        <span class="mr-5 flex w-5 text-gray-500">
                            <svg
                                class="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="24" height="24" fill="white" />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                    fill="#323232"
                                />
                                <path
                                    d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                    fill="#323232"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                    fill="#323232"
                                />
                                <path
                                    d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                    fill="#323232"
                                />
                            </svg>
                        </span>
                        Users
                        <label
                            for="menu-1"
                            class="absolute inset-0 h-full w-full cursor-pointer"
                        ></label>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="peer-checked:rotate-180 absolute right-0 top-2 px-4 py-2 h-8 text-gray-500 transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <ul
                        class="duration-400 peer-checked:max-h-96 flex max-h-0 flex-col overflow-hidden rounded-b-2xl bg-gray-100 transition-all duration-300"
                    >
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <router-link class="flex" to="/Users">
                                <span class="mr-5">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z"
                                            fill="#323232"
                                        />
                                        <path
                                            d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z"
                                            fill="#323232"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z"
                                            fill="#323232"
                                        />
                                        <path
                                            d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z"
                                            fill="#323232"
                                        />
                                    </svg>
                                </span>
                                Users
                            </router-link>
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <router-link class="flex" to="/Role">
                                <span class="mr-5">
                                    <svg
                                        fill="#000000"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-6 w-6"
                                        viewBox="0 0 100 100"
                                        enable-background="new 0 0 100 100"
                                        xml:space="preserve"
                                    >
                                        <path
                                            d="M44,63.3c0-3.4,1.1-7.2,2.9-10.2c2.1-3.7,4.5-5.2,6.4-8c3.1-4.6,3.7-11.2,1.7-16.2c-2-5.1-6.7-8.1-12.2-8
                                            s-10,3.5-11.7,8.6c-2,5.6-1.1,12.4,3.4,16.6c1.9,1.7,3.6,4.5,2.6,7.1c-0.9,2.5-3.9,3.6-6,4.6c-4.9,2.1-10.7,5.1-11.7,10.9
                                            c-1,4.7,2.2,9.6,7.4,9.6h21.2c1,0,1.6-1.2,1-2C45.8,72.7,44,68.1,44,63.3z M64,48.3c-8.2,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15
                                            S72.3,48.3,64,48.3z M66.6,64.7c-0.4,0-0.9-0.1-1.2-0.2l-5.7,5.7c-0.4,0.4-0.9,0.5-1.2,0.5c-0.5,0-0.9-0.1-1.2-0.5
                                            c-0.6-0.6-0.6-1.7,0-2.5l5.7-5.7c-0.1-0.4-0.2-0.7-0.2-1.2c-0.2-2.6,1.9-5,4.5-5c0.4,0,0.9,0.1,1.2,0.2c0.2,0,0.2,0.2,0.1,0.4
                                            L66,58.9c-0.2,0.1-0.2,0.5,0,0.6l1.7,1.7c0.2,0.2,0.5,0.2,0.7,0l2.5-2.5c0.1-0.1,0.4-0.1,0.4,0.1c0.1,0.4,0.2,0.9,0.2,1.2
                                            C71.6,62.8,69.4,64.9,66.6,64.7z"
                                        />
                                    </svg>
                                </span>
                                Role
                            </router-link>
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <router-link class="flex" to="/Permission">
                                <span class="mr-5">
                                    <svg
                                        class="w-6 h-6"
                                        viewBox="0 0 48 48"
                                        id="Layer_2"
                                        data-name="Layer 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            class="cls-1"
                                            d="M33.07,19.51,28,23.2,30,29.13a.57.57,0,0,1-.87.63L24,26.15l-5.08,3.7a.56.56,0,0,1-.79-.15.62.62,0,0,1-.08-.48L20,23.3l-5.07-3.7a.55.55,0,0,1,.32-1h6.27l1.95-5.93a.55.55,0,0,1,1.06-.09l1.95,5.92h6.27a.56.56,0,0,1,.55.57A.53.53,0,0,1,33.07,19.51Z"
                                        />
                                        <path
                                            class="cls-1"
                                            d="M24,4.5s-11.26,2-15.25,2v20a11.16,11.16,0,0,0,.8,4.1,15,15,0,0,0,2,3.61,22,22,0,0,0,2.81,3.07,34.47,34.47,0,0,0,3,2.48,34,34,0,0,0,2.89,1.86c1,.59,1.71,1,2.13,1.19l1,.49a1.44,1.44,0,0,0,1.24,0l1-.49c.42-.2,1.13-.6,2.13-1.19a34,34,0,0,0,2.89-1.86,34.47,34.47,0,0,0,3-2.48,22,22,0,0,0,2.81-3.07,15,15,0,0,0,2-3.61,11.16,11.16,0,0,0,.8-4.1v-20C35.26,6.53,24,4.5,24,4.5Z"
                                        />
                                    </svg>
                                </span>
                                Permission
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="relative transition">
                    <input class="peer hidden" type="checkbox" id="menu-2" />
                    <div
                        class="flex items-center px-2 text-base font-normal text-gray-900 rounded-t-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 relative py-2"
                    >
                        <span class="mr-5 flex w-5 text-gray-500">
                            <svg
                                fill="#000000"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="w-6 h-6"
                                viewBox="0 0 256 253"
                                enable-background="new 0 0 256 253"
                                xml:space="preserve"
                            >
                                <path
                                    d="M127.925,218.85c28.065,0,51-22.784,51-51s-22.784-51-51-51s-50.849,22.935-50.849,51.151
                                C77.075,196.066,99.859,218.85,127.925,218.85z M125.108,172.176c-9.355-3.269-15.189-7.997-15.189-16.396
                                c0-7.746,5.13-13.831,14.536-15.743v-8.399h7.041v7.997c5.834,0,10.059,1.207,13.178,2.867l-2.867,10.059
                                c-2.314-0.956-6.086-2.565-11.266-2.565c-5.18,0-7.997,2.565-7.997,5.13c0,3.521,3.269,4.879,10.311,7.746
                                c9.607,3.521,14.083,8.399,14.083,16.396s-4.879,14.083-15.189,16.396v7.997h-7.041v-7.746c-6.086,0-12.222-1.609-15.189-3.269
                                l2.565-10.311c3.269,1.609,8.399,3.521,13.831,3.521c5.834,0,8.701-2.565,8.701-6.086S131.848,174.791,125.108,172.176z M2,69
                                c0,13.678,9.625,25.302,22,29.576V233H2v18h252v-18h-22V98.554c12.89-3.945,21.699-15.396,22-29.554v-8H2V69z M65.29,68.346
                                c0,6.477,6.755,31.47,31.727,31.47c21.689,0,31.202-19.615,31.202-31.47c0,11.052,7.41,31.447,31.464,31.447
                                c21.733,0,31.363-20.999,31.363-31.447c0,14.425,9.726,26.416,22.954,30.154V233H42V98.594C55.402,94.966,65.29,82.895,65.29,68.346
                                z M254,54H2l32-32V2h189v20h-0.168L254,54z"
                                />
                            </svg>
                        </span>
                        E-commerce
                        <label
                            for="menu-2"
                            class="absolute inset-0 h-full w-full cursor-pointer"
                        ></label>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="peer-checked:rotate-180 absolute right-0 top-2 px-4 py-2 h-8 text-gray-500 transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <ul
                        class="duration-400 peer-checked:max-h-96 flex max-h-0 flex-col overflow-hidden rounded-b-2xl bg-gray-100 transition-all duration-300"
                    >
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <router-link class="flex" to="/Products">
                                <span class="mr-5">
                                    <svg
                                        fill="#000000"
                                        class="w-6 h-6"
                                        viewBox="0 0 100 100"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m47.44 61.66a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm29.51 0a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3h-20.49a3.06 3.06 0 0 1 -3-2.88v-14.38a1 1 0 0 1 .91-1h24.5zm-37.36 4.23-.09.11-5.82 6.32-2.63-2.55a.77.77 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.56 1.56 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.09-1a.76.76 0 0 0 -1-.12zm29.51 0-.1.11-5.82 6.32-2.64-2.55a.75.75 0 0 0 -1-.08l-.09.08-1.09 1a.62.62 0 0 0 -.07.9l.07.08 3.73 3.54a1.54 1.54 0 0 0 1.08.45 1.43 1.43 0 0 0 1.09-.45l3.14-3.32.63-.67 3.14-3.31a.78.78 0 0 0 .06-.9l-.06-.08-1.07-1.01a.76.76 0 0 0 -1-.11zm-23.43-14.41a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.68a1 1 0 0 1 -.94-.9v-3.16a3 3 0 0 1 2.69-3.05h23zm31.48 0a3 3 0 0 1 2.85 2.87v3.24a1 1 0 0 1 -.84 1h-26.73a1 1 0 0 1 -1-.9v-3.16a3 3 0 0 1 2.68-3.05h23zm-15-21.29a1 1 0 0 1 1 .91v14.37a3.06 3.06 0 0 1 -2.87 3.05h-20.44a3.06 3.06 0 0 1 -3.05-2.87v-14.44a1 1 0 0 1 .9-1h24.51zm-7.85 4.22-.09.08-5.82 6.32-2.59-2.56a.76.76 0 0 0 -1-.07l-.09.07-1.08 1a.61.61 0 0 0 -.07.9l.07.08 3.72 3.53a1.56 1.56 0 0 0 1.09.45 1.43 1.43 0 0 0 1.08-.45l3.14-3.31.64-.67 3.13-3.32a.78.78 0 0 0 .06-.9l-.06-.07-1.08-1a.77.77 0 0 0 -1-.08zm7.9-14.41a3.06 3.06 0 0 1 3 2.88v3.23a1 1 0 0 1 -.91 1h-28.52a1 1 0 0 1 -1-.91v-3.14a3.06 3.06 0 0 1 2.87-3h24.56z"
                                        />
                                    </svg>
                                </span>
                                Products
                            </router-link>
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <span class="mr-5">
                                <svg
                                    fill="#000000"
                                    class="w-6 h-6"
                                    viewBox="-7.5 0 32 32"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>category</title>
                                    <path
                                        d="M2.594 4.781l-1.719 1.75h15.5l-1.719-1.75h-12.063zM17.219 13.406h-17.219v-6.031h17.219v6.031zM12.063 11.688v-1.719h-6.875v1.719h0.844v-0.875h5.156v0.875h0.875zM17.219 20.313h-17.219v-6.031h17.219v6.031zM12.063 18.594v-1.75h-6.875v1.75h0.844v-0.875h5.156v0.875h0.875zM17.219 27.188h-17.219v-6h17.219v6zM12.063 25.469v-1.719h-6.875v1.719h0.844v-0.875h5.156v0.875h0.875z"
                                    ></path>
                                </svg>
                            </span>
                            Category
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <span class="mr-5">
                                <svg
                                    class="icon w-6 h-6"
                                    viewBox="0 0 1024 1024"
                                    fill="#000000"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                                        fill=""
                                    />
                                    <path
                                        d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                                        fill=""
                                    />
                                    <path
                                        d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                                        fill=""
                                    />
                                </svg>
                            </span>
                            Order
                        </li>
                    </ul>
                </li>
                <li class="relative transition">
                    <input class="peer hidden" type="checkbox" id="menu-3" />
                    <div
                        class="flex items-center px-2 text-base font-normal text-gray-900 rounded-t-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 relative py-2"
                    >
                        <span class="mr-5 flex w-5 text-gray-500">
                            <svg
                                class="w-8 h-8"
                                version="1.1"
                                id="Icons"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32"
                                xml:space="preserve"
                            >
                                <g>
                                    <path
                                        d="M6,7H0.9C0.4,7,0,7.4,0,7.9v9.1C0,17.6,0.4,18,0.9,18H6c1.7,0,3,1.3,3,3V10C9,8.3,7.7,7,6,7z"
                                    />
                                    <path
                                        d="M18.1,7H13c-1.7,0-3,1.3-3,3v11c0-1.7,1.3-3,3-3h5.1c0.5,0,0.9-0.4,0.9-0.9V7.9C19,7.4,18.6,7,18.1,7z"
                                    />
                                </g>
                                <path
                                    d="M31.9,17.6L29,11.8C28.9,6.4,24.4,2,19,2c-2.8,0-5.4,1.2-7.3,3.2C12.1,5.1,12.5,5,13,5h5.1C19.7,5,21,6.3,21,7.9v9.1
                                    c0,1.6-1.3,2.9-2.9,2.9H13c-0.6,0-1,0.4-1,1v6c0,0.5,0.3,0.9,0.8,1l10,2c0.1,0,0.1,0,0.2,0c0.2,0,0.5-0.1,0.6-0.2
                                    c0.2-0.2,0.4-0.5,0.4-0.8v-4h2c1.7,0,3-1.3,3-3v-3h2c0.3,0,0.7-0.2,0.9-0.5S32,17.9,31.9,17.6z"
                                />
                            </svg>
                        </span>
                        E-Learning
                        <label
                            for="menu-3"
                            class="absolute inset-0 h-full w-full cursor-pointer"
                        ></label>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="peer-checked:rotate-180 absolute right-0 top-2 px-4 py-2 h-8 text-gray-500 transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <ul
                        class="duration-400 peer-checked:max-h-96 flex max-h-0 flex-col overflow-hidden rounded-b-2xl bg-gray-100 transition-all duration-300"
                    >
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <span class="mr-5"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    /></svg
                            ></span>
                            Products
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <span class="mr-5"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    /></svg
                            ></span>
                            Billing
                        </li>
                        <li
                            class="m-2 flex cursor-pointer rounded-xl py-2 pl-5 text-sm text-gray-500 hover:bg-white"
                        >
                            <span class="mr-5"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    /></svg
                            ></span>
                            Invoice
                        </li>
                    </ul>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            fill="#000000"
                            class="w-6 h-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.1907 18.5V17.1736H8.13445C7.29051 17.1052 6.48827 16.7892 5.83501 16.2677C5.18175 15.7462 4.70862 15.0441 4.47891 14.2554L4.28471 13.9016H3.88489C3.71759 13.8803 3.56365 13.8019 3.45079 13.6806C3.34793 13.5546 3.29163 13.399 3.29086 13.2384C3.29126 13.1221 3.32274 13.0079 3.38225 12.9068C3.44157 12.8051 3.52847 12.721 3.63357 12.6636L3.97627 12.4757V11.2156C3.99031 11.1228 4.0252 11.0342 4.0785 10.9559C4.13179 10.8776 4.20218 10.8115 4.28471 10.7624C4.34794 10.702 4.42288 10.6543 4.50522 10.6221C4.58756 10.5898 4.67567 10.5737 4.7645 10.5745H11.6186C11.7095 10.5714 11.8001 10.5864 11.8847 10.6187C11.9693 10.6509 12.0461 10.6996 12.1104 10.7619C12.1747 10.8241 12.2251 10.8984 12.2584 10.9803C12.2917 11.0622 12.3072 11.1498 12.304 11.2377V14.5538H9.44815C9.38334 14.385 9.27287 14.2361 9.12829 14.1227C8.98921 14.0059 8.819 13.9293 8.63708 13.9016C8.45145 13.88 8.26316 13.9028 8.08875 13.968C7.91684 14.035 7.76685 14.1458 7.65466 14.2885C7.54539 14.4305 7.47824 14.5987 7.46046 14.7749C7.43553 14.9519 7.46327 15.1321 7.54042 15.2944C7.61569 15.4607 7.73858 15.6026 7.89455 15.7034C8.0455 15.8076 8.22356 15.8689 8.40861 15.8803H13.6292C13.9918 15.8774 14.3388 15.7367 14.5952 15.4886C14.8516 15.2404 14.997 14.9047 15 14.5538V13.2274C15.0002 13.0521 14.9639 12.8785 14.8933 12.7171C14.8226 12.5556 14.719 12.4096 14.5888 12.2878C14.464 12.1641 14.3147 12.066 14.1498 11.9995C13.9849 11.933 13.8078 11.8995 13.6292 11.9009V10.5745C13.5647 9.20775 12.9583 7.91766 11.9359 6.97253C10.9136 6.02741 9.55409 5.5 8.14016 5.5C6.72623 5.5 5.36672 6.02741 4.34439 6.97253C3.32206 7.91766 2.7156 9.20775 2.65114 10.5745V11.8678C2.26166 12.214 2.02791 12.6942 2 13.2053C2.00247 13.6047 2.13876 13.9925 2.3884 14.3106C2.62582 14.6192 2.95148 14.8536 3.32513 14.9849C3.68436 15.9613 4.33125 16.8145 5.18592 17.4392C6.04059 18.0638 7.06562 18.4326 8.13445 18.5H10.1907Z"
                            />
                            <path
                                d="M16 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4H15V9H20V20H6C6 20.5304 6.21071 21.0391 6.58579 21.4142C6.96086 21.7893 7.46957 22 8 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V8L16 2Z"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap">
                            Help-Desk
                        </span>
                        <span
                            class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
                            >3</span
                        >
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            fill="#000000"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            class="h-6 w-6"
                            viewBox="0 0 236 256"
                            enable-background="new 0 0 236 256"
                            xml:space="preserve"
                        >
                            <path
                                d="M117.5,2c-12.47,0-22.63,10.16-22.63,22.63c0,12.46,10.06,22.62,22.63,22.62c12.37,0,22.62-10.16,22.62-22.62
                                C140.12,12.16,129.97,2,117.5,2z M146,52H89c-15.59,0-28,13.41-28,29v32h20V86c0-1.71,1.29-3,3-3s3,1.29,3,3v27h61V86
                                c0-1.71,1.29-3,3-3s3,1.29,3,3v27h20V81C174,65.51,161.49,52,146,52z M2,118v27h23v109h185V145h24v-27H2z M117.93,235.35
                                c-25.59,0-46.36-20.77-46.36-46.36c0-25.73,20.63-46.64,46.36-46.64s46.5,20.77,46.5,46.5S143.52,235.35,117.93,235.35z
                                M122.43,184.31c-6.42-2.61-9.41-3.85-9.41-7.06c0-2.34,2.57-4.68,7.3-4.68c4.72,0,8.16,1.47,10.27,2.34l2.61-9.17
                                c-2.84-1.52-6.69-2.62-12.01-2.62v-7.29h-6.42v7.66c-8.58,1.74-13.26,7.29-13.26,14.35c0,7.66,5.32,11.97,13.85,14.95
                                c6.15,2.39,8.67,3.72,8.67,6.93c0,3.21-2.61,5.55-7.93,5.55c-4.96,0-9.63-1.75-12.61-3.21l-2.34,9.4c2.7,1.51,8.3,2.98,13.85,2.98
                                v7.06h6.42v-7.29c9.4-2.11,13.85-7.66,13.85-14.95C135.27,191.97,131.18,187.52,122.43,184.31z"
                            />
                        </svg>
                        <span class="flex-1 ml-3 whitespace-nowrap"
                            >Finance</span
                        >
                    </a>
                </li>
            </ul>
        </div>
        <div
            class="absolute flex w-full bg-gray-50 p-4 bottom-0 justify-between content-center"
        >
            <div>
                <Menu as="div" class="relative">
                    <div>
                        <MenuButton
                            class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">Open user menu</span>
                            <img
                                class="h-8 w-8 rounded-full"
                                :src="user.imageUrl"
                                alt=""
                            />
                        </MenuButton>
                    </div>
                    <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <MenuItems
                            class="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <MenuItem
                                v-for="item in userNavigation"
                                :key="item.name"
                                v-slot="{ active }"
                            >
                                <a
                                    :href="item.href"
                                    :class="[
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700',
                                    ]"
                                    >{{ item.name }}</a
                                >
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
            <div>Logout</div>
        </div>
    </aside>
    <!--<div
        class="sticky top-0 z-50 hidden lg:block overflow-x-hidden no-scrollbar max-h-screen items-center shadow-2xl"
    >
        <div class="flex w-auto flex-col items-center">
            
            <div
                class="flex items-center justify-center rounded-md bg-white p-4 text-blue-600"
            >
                <logo />
            </div>

            <div class="space-y-48 rounded-md bg-white">
                <ul>
                    <li v-if="is('Admin')" class="flex flex-row p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Dashboard"
                        >
                            <svg
                                fill="#000000"
                                class="icon glyph h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                id="dashboard"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="9"
                                    height="11"
                                    rx="2"
                                ></rect>
                                <rect
                                    x="13"
                                    y="2"
                                    width="9"
                                    height="7"
                                    rx="2"
                                ></rect>
                                <rect
                                    x="2"
                                    y="15"
                                    width="9"
                                    height="7"
                                    rx="2"
                                ></rect>
                                <rect
                                    x="13"
                                    y="11"
                                    width="9"
                                    height="11"
                                    rx="2"
                                ></rect>
                            </svg>
                            <span class="hidden lg:block px-4">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="items-center p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Users"
                        >
                            <svg
                                class="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.5 0C3.56717 0 2 1.56567 2 3.49804C2 5.43041 3.56717 6.99609 5.5 6.99609C7.43283 6.99609 9 5.43041 9 3.49804C9 1.56567 7.43283 0 5.5 0Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M3.5 8.99414C1.56711 8.99414 0 10.5605 0 12.4936V14.9909H11V12.4936C11 10.5605 9.43289 8.99414 7.5 8.99414H3.5Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M12.5 10H12V15H15V12.5C15 11.1193 13.8807 10 12.5 10Z"
                                    fill="#000000"
                                />
                                <path
                                    d="M11.5 4C10.1193 4 9 5.11929 9 6.5C9 7.88071 10.1193 9 11.5 9C12.8807 9 14 7.88071 14 6.5C14 5.11929 12.8807 4 11.5 4Z"
                                    fill="#000000"
                                />
                            </svg>
                            <span class="hidden lg:block px-4">Users</span>
                        </router-link>
                    </li>
                    <li class="p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Help-Desk"
                        >
                            <svg
                                class="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 5C.892 5 0 5.892 0 7v7c0 1.108.892 2 2 2h9c1.108 0 2-.892 2-2v-3.8L16 7h-3c0-1.108-.892-2-2-2zm4.438 2C7.75 6.926 8.926 7.936 9 9.25c0 1.121-.308 1.544-1.281 2.281a1.68 1.68 0 00-.281.25c-.04.05-.032.033-.032.031.006.423-.39.782-.812.782a.79.79 0 01-.781-.782c0-.401.179-.754.375-1a3.14 3.14 0 01.562-.562 3.85 3.85 0 00.563-.531c.074-.09.097-.24.093-.344v-.031a.785.785 0 00-.843-.75c-.451.025-.813.362-.851.758a.697.697 0 01-.718.648.816.816 0 01-.781-.594 1.725 1.725 0 01.01-.533c.005-.014.006-.03.012-.043.202-1.024 1.09-1.768 2.203-1.83zm.156 6.406a.82.82 0 01.812.813c0 .442-.37.781-.812.781a.768.768 0 01-.781-.781c0-.442.339-.813.78-.813zM2 1C.892 1 0 1.892 0 3v.568A3.918 3.918 0 012 3h9c1.376 0 2.55.763 3.268 1.848L16 3h-3c0-1.108-.892-2-2-2z"
                                    fill="#474747"
                                />
                            </svg>
                            <span class="hidden lg:block px-4">Help Desk</span>
                        </router-link>
                    </li>
                    <li class="p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Category"
                        >
                            <svg
                                class="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0"
                                    fill="none"
                                    width="20"
                                    height="20"
                                />

                                <g>
                                    <path d="M5 7h13v10H2V4h7l2 2H4v9h1V7z" />
                                </g>
                            </svg>
                            <span class="hidden lg:block px-4">Category</span>
                        </router-link>
                    </li>
                    <li class="p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Product"
                        >
                            <svg
                                fill="#000000"
                                class="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 52 52"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m24 35.33a.81.81 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.32 2.44h-16.42a2.45 2.45 0 0 1 -2.44-2.28v-11.57a.81.81 0 0 1 .71-.81h19.66zm23.61 0a.82.82 0 0 1 .81.71v11.52a2.44 2.44 0 0 1 -2.33 2.44h-16.42a2.44 2.44 0 0 1 -2.43-2.28v-11.57a.81.81 0 0 1 .71-.81h19.61zm-29.92 3.37-.09.07-4.6 5.06-2.11-2a.62.62 0 0 0 -.79-.07l-.08.07-.87.78a.49.49 0 0 0 -.07.71l.07.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.15 1.15 0 0 0 .87-.36l5.52-5.84a.63.63 0 0 0 .06-.72l-.06-.07-.87-.78a.61.61 0 0 0 -.85-.12zm23.61 0-.09.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.49.49 0 0 0 -.06.71l.06.08 3 2.83a1.25 1.25 0 0 0 .87.36 1.14 1.14 0 0 0 .87-.36l5.56-5.89a.65.65 0 0 0 0-.72v-.07l-.87-.78a.61.61 0 0 0 -.83-.07zm-18.76-11.52a2.36 2.36 0 0 1 2.27 2.28v2.61a.81.81 0 0 1 -.66.81h-21.39a.78.78 0 0 1 -.76-.7v-2.55a2.38 2.38 0 0 1 2.13-2.44h18.41zm25.18 0a2.36 2.36 0 0 1 2.28 2.28v2.61a.81.81 0 0 1 -.66.81h-21.4a.78.78 0 0 1 -.75-.71v-2.54a2.38 2.38 0 0 1 2.13-2.44h18.4zm-12-17a.81.81 0 0 1 .8.71v11.48a2.44 2.44 0 0 1 -2.28 2.44h-16.37a2.46 2.46 0 0 1 -2.44-2.29v-11.52a.81.81 0 0 1 .71-.8h19.62zm-6.27 3.37-.08.07-4.66 5.06-2.11-2a.61.61 0 0 0 -.78-.07l-.09.07-.87.78a.5.5 0 0 0 -.07.71l.07.08 3 2.82a1.22 1.22 0 0 0 .87.37 1.13 1.13 0 0 0 .87-.37l5.53-5.83a.65.65 0 0 0 .05-.72l-.05-.07-.87-.78a.62.62 0 0 0 -.77-.15zm6.31-11.55a2.44 2.44 0 0 1 2.43 2.28v2.61a.83.83 0 0 1 -.71.81h-22.86a.81.81 0 0 1 -.81-.7v-2.56a2.44 2.44 0 0 1 2.27-2.44z"
                                />
                            </svg>
                            <span class="hidden lg:block px-4">Product</span>
                        </router-link>
                    </li>
                    <li class="p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Order"
                        >
                            <svg
                                class="icon h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 1024 1024"
                                fill="#000000"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                                    fill=""
                                />
                                <path
                                    d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                                    fill=""
                                />
                                <path
                                    d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                                    fill=""
                                />
                            </svg>
                            <span class="hidden lg:block px-4">Order</span>
                        </router-link>
                    </li>
                    <li class="p-5">
                        <router-link
                            class="flex flex-row items-center"
                            to="/Report"
                        >
                            <svg
                                fill="#000000"
                                class="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 11h4v17h-4v-17zM22 16v12h4v-12h-4zM14 28h4v-24h-4v24z"
                                ></path>
                            </svg>
                            <span class="hidden lg:block px-4">Report</span>
                        </router-link>
                    </li>
                </ul>
                <div class="flex items-center justify-center pb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-600"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                    </svg>
                    <span class="hidden lg:block px-4">Logout</span>
                </div>
            </div>
        </div>
        <div class="absolute top-0"></div>
    </div>-->
</template>

<script>
import logo from "./logo.vue";
export default {
    components: {
        logo,
    },
};
</script>
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
</script>
