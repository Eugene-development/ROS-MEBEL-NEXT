import Link from "next/link";
import { is_visible_form_measurement } from '@/apollo/stores/visible'


export default function BreadCrumbs (props) {
    return (
        <>
            <div className="bg-white">
                <main>
                    <div>
                        <div className="relative">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                            <div className="max-w-full">
                                <div className="relative shadow-xl sm:overflow-hidden">
                                    <div className="absolute inset-0">
                                        <img className="h-full w-full object-cover" src={props.dataBC.pathImg} alt="рубрика" />
                                        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" />
                                    </div>
                                    <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-24 lg:px-8 ">
                                        <div className="mx-auto pb-8 flex space-x-4 justify-center">
                                            <div className="flex">
                                                <div className="flex items-center">
                                                    <Link href="/" className="text-gray-100 hover:text-gray-100">
                                                        <svg
                                                            className="flex-shrink-0 h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Главная</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <div className="flex items-center">
                                                    <svg
                                                        className="flex-shrink-0 w-4 h-full text-gray-100"
                                                        viewBox="0 0 24 44"
                                                        preserveAspectRatio="none"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                    </svg>
                                                    <Link
                                                        href="/catalog"
                                                        className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100">Каталог
                                                    </Link>
                                                </div>
                                            </div>

                                            {props.dataBC.parentPageName &&
                                                <div className="flex">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="flex-shrink-0 w-4 h-full text-gray-100"
                                                            viewBox="0 0 24 44"
                                                            preserveAspectRatio="none"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                        </svg>
                                                        <Link
                                                            href={props.dataBC.parentPageLink}
                                                            className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100"
                                                            >{props.dataBC.parentPageName}
                                                        </Link>
                                                    </div>
                                                </div>
                                            }

                                            <div className="flex">
                                                <div className="flex items-center">
                                                    <svg
                                                        className="flex-shrink-0 w-4 h-full text-gray-100"
                                                        viewBox="0 0 24 44"
                                                        preserveAspectRatio="none"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                                                    </svg>
                                                    <span
                                                        className="ml-4 text-sm font-medium text-gray-100 hover:text-gray-100"
                                                        aria-current="page">{props.dataBC.currentPageName}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                            <span className="block text-white">{props.dataBC.titleCategory}</span>
                                        </h1>

                                        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-200 sm:max-w-3xl">
                                            {props.dataBC.descriptionCategory}
                                        </p>
                                        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                            <div
                                                className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"
                                            >
                                                <button
                                                    onClick={() => {is_visible_form_measurement(true)}}
                                                    type="button"
                                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-4 py-3 text-base font-medium text-gray-100 shadow-sm sm:px-8 bg-opacity-30 hover:bg-opacity-20"
                                                    >Записаться на замер
                                                </button>
                                                <Link
                                                    href="#models"
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-gray-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                                    >Посмотреть варианты
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:border-t lg:border-b lg:border-gray-200">
                            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                                <ol
                                    className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                                >
                                    <li className="relative overflow-hidden lg:flex-1">
                                        <div
                                            className="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0"
                                        >
                                            <div className="group">
                                                <span
                                                    className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span className="px-6 py-5 flex items-start text-sm font-medium">
                                                    <span className="flex-shrink-0">
                                                        <span
                                                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span className="text-green-600">01</span>
                                                        </span>
                                                    </span>
                                                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span className="text-lg font-medium text-green-600">Заявка</span>
                                                        <span className="text-sm font-medium text-gray-500"
                                                            >Оформите заявку на бесплатный замер на сайте или по телефону</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="relative overflow-hidden lg:flex-1">
                                        <div className="border border-gray-200 overflow-hidden lg:border-0">
                                            <div aria-current="step">
                                                <span
                                                    className="absolute top-0 left-0 h-full w-1 bg-green-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                                                    <span className="flex-shrink-0">
                                                        <span
                                                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span className="text-green-600">02</span>
                                                        </span>
                                                    </span>
                                                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span className="text-lg font-medium text-green-600">Замер</span>
                                                        <span className="text-sm font-medium text-gray-500"
                                                            >Получите полную консультацию с учётом размеров помещения</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>

                                            <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                                <svg
                                                    className="h-full w-full text-gray-300"
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

                                    <li className="relative overflow-hidden lg:flex-1">
                                        <div
                                            className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0"
                                        >
                                            <div className="group">
                                                <span
                                                    className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                    aria-hidden="true"
                                                />
                                                <span className="px-6 py-5 flex items-start text-sm font-medium lg:pl-9">
                                                    <span className="flex-shrink-0">
                                                        <span
                                                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600"
                                                        >
                                                            <span className="text-green-600">03</span>
                                                        </span>
                                                    </span>
                                                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                                                        <span className="text-lg font-medium text-green-600">Договор</span>
                                                        <span className="text-sm font-medium text-gray-500"
                                                            >Оформите договор на поставку мебели в офисе или у вас дома</span
                                                        >
                                                    </span>
                                                </span>
                                            </div>

                                            <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                                                <svg
                                                    className="h-full w-full text-gray-300"
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
