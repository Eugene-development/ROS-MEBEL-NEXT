export default function BreadCrumbs () {
    return (
        <>
            <div class="bg-white">
                <main>
                    <div>
                        <div class="relative">
                            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                            <div class="max-w-full">
                                <div class="relative shadow-xl sm:overflow-hidden">
                                    <div class="absolute inset-0">
                                        <img class="h-full w-full object-cover" src='https://мебель-по-цене-фабрики.рф/thumb/2/yoya_PxK9Ckv3eGUUTy1Pg/r/d/mebel_dlya_garderobnoy_komnaty_syuzen.jpg' alt="рубрика" />
                                        <div class="absolute inset-0 bg-slate-700 mix-blend-multiply" />
                                    </div>
                                    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
                                        <div class="mx-auto pb-8 flex space-x-4 justify-center">
                                            <div class="flex">
                                                <div class="flex items-center">
                                                    <a href="/" class="text-gray-100 hover:text-gray-100">
                                                        <svg
                                                            class="flex-shrink-0 h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                            />
                                                        </svg>
                                                        <span class="sr-only">Главная</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div class="flex">
                                                <div class="flex items-center">
                                                    <svg
                                                        class="flex-shrink-0 w-4 h-full text-gray-100"
                                                        viewBox="0 0 24 44"
                                                        preserveAspectRatio="none"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                    </svg>
                                                    <a
                                                        href="/catalog"
                                                        class="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100">Каталог</a
                                                    >
                                                </div>
                                            </div>

                                            {false &&
                                                <div class="flex">
                                                    <div class="flex items-center">
                                                        <svg
                                                            class="flex-shrink-0 w-4 h-full text-gray-100"
                                                            viewBox="0 0 24 44"
                                                            preserveAspectRatio="none"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                        </svg>
                                                        <a
                                                            href="/{BC.parentPageLink}"
                                                            class="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100"
                                                            >ggg
                                                        </a>
                                                    </div>
                                                </div>
                                            }

                                            <div class="flex">
                                                <div class="flex items-center">
                                                    <svg
                                                        class="flex-shrink-0 w-4 h-full text-gray-100"
                                                        viewBox="0 0 24 44"
                                                        preserveAspectRatio="none"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                    </svg>
                                                    <span
                                                        class="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100"
                                                        aria-current="page">sssssssss</span
                                                    >
                                                </div>
                                            </div>
                                        </div>

                                        <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span class="block text-white">pppppppp</span>
                                        </h1>

                                        <p class="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
                                            ooo
                                        </p>
                                        <div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                            <div
                                                class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"
                                            >
                                                <button
                                                    // on:click={() => visibleFormMeasurement.update(invert)}
                                                    type="button"
                                                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-4 py-3 text-base font-medium text-gray-100 shadow-sm sm:px-8 bg-opacity-30 hover:bg-opacity-20"
                                                    >Записаться на замер</button
                                                >
                                                <a
                                                    href="#models"
                                                    class="flex items-center justify-center rounded-md border border-transparent bg-gray-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                                    >Посмотреть варианты</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:border-t lg:border-b lg:border-gray-200">
                            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                                <ol
                                    class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                                >
                                    <li class="relative overflow-hidden lg:flex-1">
                                        <div
                                            class="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0"
                                        >
                                            <div class="group">
                                                <span
                                                    class="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span class="px-6 py-5 flex items-start text-sm font-medium">
                                                    <span class="flex-shrink-0">
                                                        <span
                                                            class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span class="text-green-600">01</span>
                                                        </span>
                                                    </span>
                                                    <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span class="text-lg font-medium text-green-600">Заявка</span>
                                                        <span class="text-sm font-medium text-gray-500"
                                                            >Оформите заявку на бесплатный замер на сайте или по телефону</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="relative overflow-hidden lg:flex-1">
                                        <div class="border border-gray-200 overflow-hidden lg:border-0">
                                            <div aria-current="step">
                                                <span
                                                    class="absolute top-0 left-0 h-full w-1 bg-green-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span class="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                                                    <span class="flex-shrink-0">
                                                        <span
                                                            class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span class="text-green-600">02</span>
                                                        </span>
                                                    </span>
                                                    <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span class="text-lg font-medium text-green-600">Замер</span>
                                                        <span class="text-sm font-medium text-gray-500"
                                                            >Получите полную консультацию с учётом размеров помещения</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>

                                            <div class="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                                <svg
                                                    class="h-full w-full text-gray-300"
                                                    viewBox="0 0 12 82"
                                                    fill="none"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d="M0.5 0V31L10.5 41L0.5 51V82"
                                                        stroke="currentcolor"
                                                        vector-effect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="relative overflow-hidden lg:flex-1">
                                        <div
                                            class="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0"
                                        >
                                            <div class="group">
                                                <span
                                                    class="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span class="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                                                    <span class="flex-shrink-0">
                                                        <span
                                                            class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span class="text-green-600">03</span>
                                                        </span>
                                                    </span>
                                                    <span class="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span class="text-lg font-medium text-green-600">Договор</span>
                                                        <span class="text-sm font-medium text-gray-500"
                                                            >Оформите договор на поставку мебели в офисе или у вас дома</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>

                                            <div class="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                                <svg
                                                    class="h-full w-full text-gray-300"
                                                    viewBox="0 0 12 82"
                                                    fill="none"
                                                    preserveAspectRatio="none"
                                                >
                                                    <path
                                                        d="M0.5 0V31L10.5 41L0.5 51V82"
                                                        stroke="currentcolor"
                                                        vector-effect="non-scaling-stroke"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                </main>
            </div>

        </>
    );
}
