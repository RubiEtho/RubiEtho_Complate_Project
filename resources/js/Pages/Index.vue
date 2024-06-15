<template>
    <section>
        <div
            class="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex"
        >
            <div class="flex-none space-y-5 max-w-xl">
                <router-link
                    to="/Blog"
                    class="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                >
                    <span
                        class="inline-block rounded-full px-3 py-1 bg-black text-white"
                    >
                        News
                    </span>
                    <p class="flex items-center">
                        Read the launch post from here
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </p>
                </router-link>
                <h1 class="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                    Our solutions exactly what you want
                </h1>
                <p>
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae.
                </p>
                <div class="flex items-center gap-x-3 sm:text-sm">
                    <router-link
                        to="/Register"
                        class="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                    >
                        Get started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </router-link>
                    <router-link
                        to="/contact"
                        class="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex"
                    >
                        Contact us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="flex-1 hidden md:block"></div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div
                    data-aos="fade-down-right"
                    data-aos-delay="5000"
                    class="md:w-1/2"
                >
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Building global mobile apps with cutting-edge technology
                    </h2>
                    <p class="max-w-md mt-4 text-gray-600">
                        We specialize in crafting top-notch native mobile
                        applications for a worldwide audience. Our team
                        leverages the power of React Native and Flutter to
                        deliver exceptional user experiences across all
                        platforms.
                    </p>
                    <router-link
                        to=""
                        class="flex flex-row mt-8 text-2xl text-gray-900"
                    >
                        Need more
                        <span
                            class="justify-center items-center self-center content-center px-2"
                        >
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

                <div class="mt-8 md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        <div class="max-w-md">
                            <img
                                data-aos="zoom-in-up"
                                class="object-cover object-center w-full rounded-md"
                                style="height: 500px"
                                src="../../css/asset/p1.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div class="md:w-1/2">
                    <div class="flex items-center justify-center">
                        <div data-aos="zoom-in-up" class="max-w-md">
                            <svg
                                class="object-cover object-center w-full rounded-md shadow"
                                viewBox="0 0 800 920"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M702 976C986.979 976 1218 744.979 1218 460C1218 175.021 986.979 -56 702 -56C417.021 -56 186 175.021 186 460C186 744.979 417.021 976 702 976Z"
                                        fill="url(#paint0_linear)"
                                    />
                                    <g filter="url(#filter0_d)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M556.183 437.371C572.849 499.572 535.937 563.506 473.736 580.173C450.349 586.439 426.717 585.131 405.444 577.753C389.968 574.298 356.015 573.942 327.566 596.287C312.606 614.795 291.863 628.907 267.117 635.538C204.916 652.204 140.981 615.292 124.315 553.091C107.648 490.89 144.561 426.956 206.761 410.289C206.761 410.289 206.761 410.288 206.761 410.288L413.092 355.002C413.188 354.976 413.284 354.95 413.381 354.924C413.477 354.898 413.573 354.872 413.67 354.847L416.768 354.017L416.765 354.07C477.884 339.604 539.818 376.298 556.183 437.371Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M303.945 359.741L303.264 357.201C296.998 333.817 272.963 319.94 249.579 326.206L229.256 331.651C217.096 334.909 204.598 327.693 201.34 315.534V315.534C198.081 303.374 205.297 290.876 217.457 287.618L322.037 259.596C334.43 256.275 341.785 243.536 338.464 231.143V231.143C335.143 218.749 322.405 211.394 310.011 214.715L300.273 217.325C282.501 222.086 264.234 211.54 259.472 193.768L254.934 176.832"
                                            stroke="#FEB804"
                                            stroke-width="8"
                                        />
                                        <rect
                                            x="287.961"
                                            y="357.671"
                                            width="31.5602"
                                            height="29.8069"
                                            transform="rotate(-15 287.961 357.671)"
                                            fill="#FE5000"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M238.401 470.787L207.917 478.955L217.447 514.521L181.881 524.051L190.049 554.536L225.615 545.006L235.145 580.571L265.629 572.403L256.1 536.838L291.665 527.308L283.497 496.823L247.931 506.353L238.401 470.787Z"
                                            fill="#6C6C6C"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M712.196 552.301H667.331C661.849 552.301 656.977 555.217 654.135 560.009L631.601 600.005C628.962 604.796 628.962 610.837 631.601 615.628L654.135 655.624C656.774 660.415 661.849 663.332 667.331 663.332H712.196C717.677 663.332 722.549 660.415 725.391 655.624L747.925 615.628C750.565 610.837 750.565 604.796 747.925 600.005L725.391 560.009C722.549 555.217 717.474 552.301 712.196 552.301Z"
                                            fill="#FE7800"
                                        />
                                    </g>
                                    <path
                                        d="M301.278 232.769C345.051 232.769 380.536 197.284 380.536 153.511C380.536 109.738 345.051 74.2524 301.278 74.2524C257.505 74.2524 222.02 109.738 222.02 153.511C222.02 197.284 257.505 232.769 301.278 232.769Z"
                                        fill="url(#paint1_linear)"
                                    />
                                    <g clip-path="url(#clip1)">
                                        <path
                                            d="M287.212 144.433L288.305 141.838"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M285.801 147.778L281.389 158.239H297.381L290.994 186.373L323.64 143.373H305.747L314.537 124.296H295.701L289.713 138.501"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M331.039 151.044H346.959"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M256.133 151.044H272.053"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M322.401 130.193L333.657 118.934"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M269.436 183.158L280.692 171.899"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M280.692 130.193L269.436 118.934"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M327.999 177.498L322.401 171.899"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M333.793 183.203L331.785 181.286"
                                            stroke="white"
                                            stroke-width="1.38456"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <circle
                                        opacity="0.2"
                                        cx="445.658"
                                        cy="465.878"
                                        r="197.265"
                                        fill="url(#paint2_radial)"
                                        fill-opacity="0.4"
                                    />
                                    <circle
                                        opacity="0.25"
                                        cx="445.658"
                                        cy="465.878"
                                        r="154.456"
                                        fill="url(#paint3_radial)"
                                    />
                                    <circle
                                        opacity="0.25"
                                        cx="445.902"
                                        cy="466.122"
                                        r="103.287"
                                        fill="url(#paint4_radial)"
                                    />
                                    <circle
                                        cx="444.843"
                                        cy="466.693"
                                        r="114.936"
                                        fill="white"
                                    />
                                    <circle
                                        cx="444.843"
                                        cy="466.693"
                                        r="78.3652"
                                        fill="white"
                                    />
                                    <path
                                        d="M356.029 466.693C356.029 417.642 395.793 377.879 444.843 377.879C493.894 377.879 533.657 417.642 533.657 466.693C533.657 515.743 493.894 555.507 444.843 555.507C395.793 555.507 356.029 515.743 356.029 466.693ZM523 466.693C523 423.528 488.008 388.537 444.843 388.537C401.679 388.537 366.687 423.528 366.687 466.693C366.687 509.857 401.679 544.849 444.843 544.849C488.008 544.849 523 509.857 523 466.693Z"
                                        fill="url(#paint5_linear)"
                                    />
                                    <path
                                        d="M404.493 393.607C403.07 391.03 404 387.773 406.657 386.507C420.316 380.002 435.413 377.094 450.512 378.06C453.449 378.248 455.521 380.927 455.158 383.847C454.794 386.768 452.131 388.821 449.193 388.658C436.332 387.941 423.492 390.414 411.818 395.857C409.15 397.101 405.915 396.183 404.493 393.607Z"
                                        fill="url(#paint6_linear)"
                                    />
                                    <circle
                                        cx="427.881"
                                        cy="496.417"
                                        r="22.7935"
                                        transform="rotate(-15 427.881 496.417)"
                                        fill="url(#paint7_linear)"
                                    />
                                    <path
                                        d="M423.917 502.954L424.937 499.716H430.278L431.298 502.954H435.318L430.097 487.533H425.118L419.897 502.954H423.917ZM425.828 496.885L427.543 491.419H427.664L429.387 496.885H425.828Z"
                                        fill="white"
                                    />
                                    <circle
                                        cx="460.902"
                                        cy="436.743"
                                        r="22.7935"
                                        transform="rotate(-15 460.902 436.743)"
                                        fill="url(#paint8_linear)"
                                    />
                                    <path
                                        d="M453.823 444.355H461.638C465.491 444.355 467.702 442.532 467.702 440.04C467.702 437.811 465.873 436.411 463.764 436.328V436.177C465.678 435.823 467.021 434.596 467.021 432.834C467.021 430.507 464.997 428.934 461.086 428.934H453.823V444.355ZM458.033 441.35V437.676H460.711C462.319 437.676 463.305 438.429 463.305 439.611C463.305 440.703 462.455 441.35 460.635 441.35H458.033ZM458.033 435.274V431.893H460.431C461.834 431.893 462.727 432.533 462.727 433.557C462.727 434.641 461.74 435.274 460.363 435.274H458.033Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d"
                                        x="-4.96612"
                                        y="118.852"
                                        width="880.15"
                                        height="738.093"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy="68.3339" />
                                        <feGaussianBlur
                                            stdDeviation="62.6394"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow"
                                            result="shape"
                                        />
                                    </filter>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-261.302"
                                        y1="1407.34"
                                        x2="520.141"
                                        y2="1715.23"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#218B9D" />
                                        <stop offset="1" stop-color="#00B89E" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear"
                                        x1="178.326"
                                        y1="271.779"
                                        x2="388.84"
                                        y2="356.364"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="#E0115F" />
                                    </linearGradient>
                                    <radialGradient
                                        id="paint2_radial"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(445.658 465.878) rotate(90) scale(197.265)"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="white" />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint3_radial"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(445.658 465.878) rotate(90) scale(154.456)"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="white" />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint4_radial"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(445.902 466.122) rotate(90) scale(103.287)"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="white" />
                                    </radialGradient>
                                    <linearGradient
                                        id="paint5_linear"
                                        x1="305.938"
                                        y1="603.72"
                                        x2="485.77"
                                        y2="344.64"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="#E0115F" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint6_linear"
                                        x1="444.843"
                                        y1="380.491"
                                        x2="408.926"
                                        y2="388.328"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="#E0115F" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint7_linear"
                                        x1="463.53"
                                        y1="461.25"
                                        x2="417.377"
                                        y2="527.741"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="#E0115F" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint8_linear"
                                        x1="425.543"
                                        y1="470.755"
                                        x2="486.083"
                                        y2="495.08"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#E0115F" />
                                        <stop offset="1" stop-color="#E0115F" />
                                    </linearGradient>
                                    <clipPath id="clip0">
                                        <rect
                                            width="800"
                                            height="920"
                                            fill="white"
                                        />
                                    </clipPath>
                                    <clipPath id="clip1">
                                        <rect
                                            width="92.1244"
                                            height="68.7365"
                                            fill="white"
                                            transform="translate(255.484 118.285)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down-left" class="mt-8 md:mt-0 md:w-1/2">
                    <h2 class="text-3xl font-semibold text-gray-800">
                        Breathing Life into Games - Globally
                    </h2>
                    <p class="max-w-md mt-4 text-gray-600">
                        combines cutting-edge Unity development with exceptional
                        character creation. Our team of international artists
                        utilizes Blender to craft stunning character assets,
                        bringing your game worlds to life with captivating
                        detail. We deliver immersive and engaging games using
                        the Unity engine, ensuring a smooth and enjoyable
                        experience for players worldwide.
                    </p>
                    <router-link
                        to=""
                        class="flex flex-row mt-8 text-2xl text-gray-900"
                    >
                        Need more
                        <span
                            class="justify-center items-center self-center content-center px-2"
                        >
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
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <h2 class="text-3xl font-semibold text-gray-800">
                Our software development lifecycle
            </h2>
            <p class="max-w-lg mt-4 text-gray-600">
                Cost-effective and time-efficient process that development teams
                use to design and build high-quality software. The goal of
                RubiEtho LLC is to minimize project risks through forward
                planning so that software meets customer expectations during
                production and beyond.
            </p>
            <div class="grid gap-8 mt-10 md:mt-20 md:grid-cols-2">
                <div class="flex space-x-4">
                    <svg
                        class="w-6 h-6 text-gray-500"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M47.6268 23.7062C48.2466 24.4484 48.2466 25.5277 47.6268 26.2699L44.4812 30.0372C43.803 30.8493 43.4742 31.8971 43.5669 32.9512L44.0044 37.9287C44.0912 38.9165 43.4411 39.8188 42.4765 40.0491L38.0619 41.1031C36.9808 41.3612 36.0559 42.0575 35.5089 43.025L33.2053 47.099C32.6961 47.9995 31.5844 48.3631 30.6415 47.9375L26.6498 46.1358C25.6003 45.6621 24.3976 45.6636 23.3493 46.14L19.3597 47.9531C18.4161 48.3819 17.3014 48.0189 16.7912 47.1168L14.4911 43.0489C13.9441 42.0814 13.0192 41.3851 11.9381 41.127L7.52286 40.0728C6.55849 39.8426 5.90838 38.9406 5.99496 37.9529L6.43346 32.9505C6.52583 31.8968 6.19706 30.8494 5.5191 30.0375L2.37029 26.2665C1.75138 25.5253 1.75043 24.4477 2.36803 23.7054L5.52362 19.9127C6.1988 19.1012 6.52582 18.0557 6.43339 17.0041L5.99624 12.0308C5.90922 11.0408 6.56225 10.1372 7.52946 9.90904L11.9298 8.87123C13.0153 8.61522 13.9446 7.91765 14.4935 6.94684L16.7947 2.87709C17.3039 1.97664 18.4156 1.61302 19.3585 2.03858L23.3544 3.8422C24.4007 4.31444 25.5993 4.31444 26.6456 3.8422L30.6415 2.03858C31.5844 1.61301 32.6961 1.97663 33.2053 2.87709L35.5089 6.95112C36.0559 7.9186 36.9808 8.61486 38.0619 8.87297L42.4765 9.92701C43.4411 10.1573 44.0912 11.0596 44.0044 12.0474L43.5669 17.0249C43.4742 18.079 43.803 19.1268 44.4812 19.939L47.6268 23.7062ZM25 37.9326C26.8075 37.9326 28.2727 36.4674 28.2727 34.6599V34.4275C28.2727 32.6201 26.8075 31.1548 25 31.1548C23.1925 31.1548 21.7273 32.6201 21.7273 34.4275V34.6599C21.7273 36.4674 23.1925 37.9326 25 37.9326ZM25 28.377C26.8075 28.377 28.2727 26.9117 28.2727 25.1042V15.3162C28.2727 13.5087 26.8075 12.0435 25 12.0435C23.1925 12.0435 21.7273 13.5087 21.7273 15.3162V25.1042C21.7273 26.9117 23.1925 28.377 25 28.377Z"
                            stroke="currentColor"
                            stroke-width="2"
                        />
                    </svg>

                    <div>
                        <h4 class="text-xl font-medium text-gray-800">
                            Plan-Driven
                        </h4>
                        <p class="max-w-lg mt-4 text-gray-600">
                            This follows a more structured approach with clearly
                            defined phases completed sequentially. Imagine
                            building a house - you lay the foundation, frame the
                            walls, then add the roof. Examples include the
                            Waterfall model where requirements are locked in
                            early and changes are difficult later.
                        </p>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <svg
                        class="w-6 h-6 text-gray-500"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 25C1 11.8023 11.8023 1 25 1C38.1977 1 49 11.8023 49 25C49 38.1977 38.1977 49 25 49C11.8023 49 1 38.1977 1 25ZM33.36 35.3573C34.7228 36.1959 36.5074 35.771 37.346 34.4082C38.1913 33.0346 37.7522 31.2351 36.3692 30.4053L28.221 25.5164C27.6186 25.155 27.25 24.504 27.25 23.8014V14.375C27.25 12.7872 25.9628 11.5 24.375 11.5C22.7872 11.5 21.5 12.7872 21.5 14.375V25.8236C21.5 27.2127 22.2206 28.5023 23.4036 29.2302L33.36 35.3573Z"
                            stroke="currentColor"
                            stroke-width="2"
                        />
                    </svg>

                    <div>
                        <h4 class="text-xl font-medium text-gray-800">Agile</h4>
                        <p class="max-w-lg mt-4 text-gray-600">
                            This is more flexible and iterative. Think of
                            building a Lego model - you can start with a small
                            section, test it, then adapt and build more as you
                            go. Agile focuses on continuous improvement with
                            frequent feedback loops.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div
                class="px-8 py-12 bg-gray-800 rounded-md md:px-20 md:flex md:items-center md:justify-between"
            >
                <div>
                    <h3 class="text-2xl font-semibold text-white">
                        Best platforms to get in touch with us!
                    </h3>
                    <div class="flex my-4 w-2/3 lg:w-2/2">
                        <a
                            href="https://www.linkedin.com/company/rubietho"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#0288D1"
                                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                ></path>
                                <path
                                    fill="#FFF"
                                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://x.com/rubiethollc"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#212121"
                                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                                ></path>
                                <polygon
                                    fill="#fff"
                                    points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                                ></polygon>
                                <polygon
                                    fill="#fff"
                                    points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                                ></polygon>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/enlighteneering-inc-"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#fff"
                                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                                ></path>
                                <path
                                    fill="#cfd8dc"
                                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                                ></path>
                                <path
                                    fill="#40c351"
                                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                                ></path>
                                <path
                                    fill="#fff"
                                    fill-rule="evenodd"
                                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/enlighteneering-inc-"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#29b6f6"
                                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                                ></path>
                                <path
                                    fill="#b0bec5"
                                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                                ></path>
                                <path
                                    fill="#cfd8dc"
                                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/rubiethollc"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="self-center"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#039be5"
                                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/@rubiethollc"
                            target="_blank"
                            rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 content-center text-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="self-center"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#FF3D00"
                                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                ></path>
                                <path
                                    fill="#FFF"
                                    d="M20 31L20 17 32 24z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <router-link
                    to="/Contact"
                    class="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform shadow-md shadow-white rounded-3xl md:mt-0 hover:shadow-black hover:bg-white hover:text-black"
                >
                    Get In Touch
                </router-link>
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div class="md:flex md:justify-between">
                <h2 class="text-3xl font-semibold text-gray-800">
                    MISSION, VISION, AND CORE VALUES
                </h2>
            </div>

            <div class="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div
                    class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md"
                >
                    <h2 class="text-xl font-medium text-gray-800">Mission</h2>
                    <p class="max-w-md mt-4 text-gray-600">
                        To exceed the anticipation of our clients in service
                        provision and product innovation so that customer
                        satisfaction and retention is achieved. To
                        overwhelmingly and optimistically influence the shape of
                        <b class="text-black">Ethiopia</b> and
                        <b class="text-black">USA</b> ICT services and beyond.
                    </p>
                </div>

                <div
                    class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md"
                >
                    <h2 class="text-xl font-medium text-gray-800">Vision</h2>
                    <p class="max-w-md mt-4 text-gray-600">
                        To become a leader in providing best ICT innovative
                        products and services in various industries as well as
                        Prepare effective, simple, Interactive System for our
                        clients .
                    </p>
                </div>

                <div
                    class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md"
                >
                    <h2 class="text-xl font-medium text-gray-800">Values</h2>
                    <p class="max-w-md mt-4 text-gray-600">
                        <b class="text-black">Integrity:</b> we ensure honest
                        deals with our clients,<br />
                        <b class="text-black">Professional:</b> we ensure
                        innovation in product and service provision so that our
                        clients go with latest and up to date System<br />
                        <b class="text-black">Effectiveness:</b> we ensure our
                        services are valuable, effective and efficient.<br />
                        <b class="text-black">Timely:</b> we ensure we meet
                        deadlines in discharging our assigned duties so that our
                        clients get our service timely without compromising on
                        quality<br />
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <h3 class="text-indigo-600 font-semibold pb-6">
                    What people are saying
                </h3>
                <div
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    v-show="currentTestimonial === index"
                >
                    <figure>
                        <blockquote>
                            <p
                                class="text-gray-800 text-xl font-semibold sm:text-2xl"
                            >
                                {{ testimonial.quote }}
                            </p>
                        </blockquote>
                        <div class="mt-6">
                            <img
                                :src="testimonial.avatar"
                                class="w-16 h-16 mx-auto rounded-full"
                            />
                            <div class="mt-3">
                                <span
                                    class="block text-gray-800 font-semibold"
                                    >{{ testimonial.name }}</span
                                >
                                <span
                                    class="block text-gray-600 text-sm mt-0.5"
                                    >{{ testimonial.title }}</span
                                >
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
            <div class="mt-6">
                <ul class="flex gap-x-3 justify-center">
                    <li
                        v-for="(testimonial, index) in testimonials"
                        :key="index"
                    >
                        <button
                            class="w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring"
                            :class="{
                                'bg-indigo-600': currentTestimonial === index,
                                'bg-gray-300': currentTestimonial !== index,
                            }"
                            @click="currentTestimonial = index"
                        ></button>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section data-aos="fade-up" class="bg-white">
        <div
            class="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0"
        >
            <div class="md:w-2/3">
                <div class="hidden md:flex md:items-center md:space-x-10">
                    <img
                        class="object-cover object-center rounded-md shadow w-72 h-72"
                        src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    />
                    <img
                        class="object-cover object-center w-64 rounded-md shadow h-96"
                        src="https://images.unsplash.com/photo-1618506469810-282bef2b30b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    />
                </div>
                <h2 class="text-3xl font-semibold text-gray-800 md:mt-6">
                    Competitive Strategic Domain
                </h2>
                <p class="max-w-lg mt-4 text-gray-600">
                    Our core business services spin around technology by
                    definition we are ICT product and services providing
                    company. Our aim is to be so focused on this specific ICT.
                    area services which we deliver to you, through quality
                    orientated, innovative and superior services.<br />
                    <b class="text-black">Specialization:</b> we have very well
                    trained personnel in ICT who when put their skills together
                    put RubiEtho LLC on a competitive edge.<br />
                    <b class="text-black">Quality:</b> we would like to ensure
                    we develop products that meet specific needs of our clients
                    but also ensure that customers are satisfied, we have
                    personnel abroad specifically to check whether our services
                    meet international standards.<br />
                </p>
            </div>
            <div class="md:w-1/3">
                <img
                    class="object-cover object-center w-full rounded-md shadow"
                    style="height: 700px"
                    src="https://images.unsplash.com/photo-1593352216840-1aee13f45818?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                />
            </div>
        </div>
    </section>

    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 text-center md:px-8">
            <div class="max-w-3xl mx-auto">
                <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Meet our team
                </h3>
                <p class="text-gray-600 mt-3">
                    At RubiEtho LLC, we believe in the power of software to
                    revolutionize industries and empower users. That's why we've
                    assembled a team of passionate and experienced professionals
                    who are dedicated to crafting innovative and user centric
                    software solutions.
                </p>
            </div>
            <div class="mt-12">
                <ul class="w-full content-center justify-center self-center">
                    <li v-for="(item, idx) in team" :key="idx">
                        <div data-aos="zoom-in" class="w-20 h-20 mx-auto">
                            <img
                                :src="item.avatar"
                                class="w-full h-full rounded-full"
                                alt=""
                            />
                        </div>
                        <div class="mt-2">
                            <h4 class="text-gray-700 font-semibold sm:text-lg">
                                {{ item.name }}
                            </h4>
                            <p class="text-indigo-600">{{ item.title }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section>
        <div class="container max-w-full mx-auto py-12 px-6">
            <h1
                class="text-center text-4xl text-black font-medium leading-snug tracking-wider"
            >
                Pricing
            </h1>
            <p class="text-center text-lg text-gray-700 mt-2 px-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div
                class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"
            ></div>

            <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
                <div
                    class="relative block flex flex-col md:flex-row items-center"
                >
                    <div
                        data-aos="fade-left"
                        class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4"
                    >
                        <div
                            class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden"
                        >
                            <div
                                class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"
                            >
                                <h1
                                    class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"
                                >
                                    Hobby
                                </h1>
                                <h2
                                    class="text-sm text-gray-500 text-center pb-6"
                                >
                                    FREE
                                </h2>

                                Stripe offers everything needed to run an online
                                business at scale. Get in touch for details.
                            </div>

                            <div class="flex flex-wrap mt-3 px-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >No setup</span
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >No setups</span
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >Speed</span
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="block flex items-center p-8 uppercase">
                                <button
                                    class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg"
                    >
                        <div
                            class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide"
                        >
                            Most Popular
                        </div>
                        <div
                            class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"
                        >
                            <h1
                                class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"
                            >
                                Expert
                            </h1>
                            <h2 class="text-sm text-gray-500 text-center pb-6">
                                <span class="text-3xl">€19</span> /mo
                            </h2>

                            Stripe offers everything needed to run an online
                            business at scale. Get in touch for details.
                        </div>
                        <div
                            class="flex pl-12 justify-start sm:justify-start mt-3"
                        >
                            <ul>
                                <li class="flex items-center">
                                    <div
                                        class="rounded-full p-2 fill-current text-green-700"
                                    >
                                        <svg
                                            class="w-6 h-6 align-middle"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                            ></path>
                                            <polyline
                                                points="22 4 12 14.01 9 11.01"
                                            ></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3"
                                        >No setup</span
                                    >
                                </li>
                                <li class="flex items-center">
                                    <div
                                        class="rounded-full p-2 fill-current text-green-700"
                                    >
                                        <svg
                                            class="w-6 h-6 align-middle"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                            ></path>
                                            <polyline
                                                points="22 4 12 14.01 9 11.01"
                                            ></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3"
                                        >Hidden fees</span
                                    >
                                </li>
                                <li class="flex items-center">
                                    <div
                                        class="rounded-full p-2 fill-current text-green-700"
                                    >
                                        <svg
                                            class="w-6 h-6 align-middle"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                            ></path>
                                            <polyline
                                                points="22 4 12 14.01 9 11.01"
                                            ></polyline>
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3"
                                        >Original</span
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="block flex items-center p-8 uppercase">
                            <button
                                class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                            >
                                Select
                            </button>
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4"
                    >
                        <div
                            class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden"
                        >
                            <div
                                class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6"
                            >
                                <h1
                                    class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide"
                                >
                                    Enterprise
                                </h1>
                                <h2
                                    class="text-sm text-gray-500 text-center pb-6"
                                >
                                    €39 /mo
                                </h2>

                                Stripe offers everything needed to run an online
                                business at scale. Get in touch for details.
                            </div>
                            <div class="flex flex-wrap mt-3 px-6">
                                <ul>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >Electric</span
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >Monthly</span
                                        >
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="rounded-full p-2 fill-current text-green-700"
                                        >
                                            <svg
                                                class="w-6 h-6 align-middle"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                ></path>
                                                <polyline
                                                    points="22 4 12 14.01 9 11.01"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-lg ml-3"
                                            >No setup</span
                                        >
                                    </li>
                                </ul>
                            </div>

                            <div class="block flex items-center p-8 uppercase">
                                <button
                                    class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
onMounted(() => {
    AOS.init();
});
</script>
<script>
export default {
    data() {
        return {
            currentTestimonial: 0,
            team: [
                {
                    avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
                    name: "Samuel Getnet",
                    title: "Founder and CEO",
                },
            ],
            testimonials: [
                {
                    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
                    name: "Martin Escobar",
                    title: "Founder of Meta",
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                    name: "Angela Stian",
                    title: "Product Designer",
                    quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
                    name: "Karim Ahmed",
                    title: "DevOp Engineer",
                    quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
