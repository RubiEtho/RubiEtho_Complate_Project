<template>
    <div class="h-screen flex flex-row">
        <div
            class="flex flex-col overflow-y-hidden no-scrollbar w-56 border-gray-300"
        >
            <div
                class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
                <div class="w-12 h-12 bg-gray-300 rounded-full mr-3">
                    <img
                        src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                        alt="User Avatar"
                        class="w-12 h-12 rounded-full"
                    />
                </div>
                <div class="flex-1">
                    <h2 class="text-lg font-semibold">Alice</h2>
                    <p class="text-gray-600">Hoorayy!!</p>
                </div>
            </div>
        </div>
        <div
            class="overflow-hidden no-scrollbar relative rounded-lg shadow-lg w-full"
        >
            <div
                class="max-h-screen overflow-hidden no-scrollbar p-8 py-24 w-full"
            >
                <!-- Chat Messages -->
                <div class="overflow-y-hidden p-4 pb-36">
                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">
                                Hey Bob, how's it going?
                            </p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end mb-4 cursor-pointer">
                        <div
                            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
                        >
                            <p>
                                Hi Alice! I'm good, just finished a great book.
                                How about you?
                            </p>
                        </div>
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
                        >
                            <img
                                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">
                                That book sounds interesting! What's it about?
                            </p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end mb-4 cursor-pointer">
                        <div
                            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
                        >
                            <p>
                                It's about an astronaut stranded on Mars, trying
                                to survive. Gripping stuff!
                            </p>
                        </div>
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
                        >
                            <img
                                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">
                                I'm intrigued! Maybe I'll borrow it from you
                                when you're done?
                            </p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end mb-4 cursor-pointer">
                        <div
                            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
                        >
                            <p>
                                Of course! I'll drop it off at your place
                                tomorrow.
                            </p>
                        </div>
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
                        >
                            <img
                                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">
                                Thanks, you're the best!
                            </p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end mb-4 cursor-pointer">
                        <div
                            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
                        >
                            <p>Anytime! Let me know how you like it. 😊</p>
                        </div>
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
                        >
                            <img
                                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>

                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">
                                So, pizza next week, right?
                            </p>
                        </div>
                    </div>

                    <!-- Outgoing Message -->
                    <div class="flex justify-end mb-4 cursor-pointer">
                        <div
                            class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3"
                        >
                            <p>Absolutely! Can't wait for our pizza date. 🍕</p>
                        </div>
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center ml-2"
                        >
                            <img
                                src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>
                    <!-- Incoming Message -->
                    <div class="flex mb-4 cursor-pointer">
                        <div
                            class="w-9 h-9 rounded-full flex items-center justify-center mr-2"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                class="w-8 h-8 rounded-full"
                            />
                        </div>
                        <div
                            class="flex max-w-96 bg-white rounded-lg p-3 gap-3"
                        >
                            <p class="text-gray-700">Hoorayy!!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute w-full p-8 flex flex-row bottom-0">
                <input
                    class="w-full p-2 mx-2 sticky bottom-0 shadow-lg rounded-lg"
                    type="text"
                    name="message"
                    id="message"
                />
                <button
                    class="w-auto hover:shadow-lg p-2 sticky bottom-0 rounded-full shadow-md"
                    type="submit"
                >
                    <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 14L13 21L20 4L3 11L6.5 12.5"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
