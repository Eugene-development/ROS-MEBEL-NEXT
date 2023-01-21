import Link from "next/link"
import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/outline'


const Menu = () => {
    return (
        <>
        <div className="px-6 py-4 lg:px-8 bg-black">
            <div>
                <nav className="flex h-9 items-center justify-between" aria-label="Global">
                    <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                        <Link href="/">
                            {/* TODO: вывести через env */}
                            <span className="sr-only">Азбука Комфорта</span>
                            <img
                                className="h-10 w-auto mb-2"
                                src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo2.png"
                                alt="логотип"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            // on:click={() => visibleMobileMenu.update(invert)}
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div
                        className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-8 text-gray-50 hover:text-gray-100"
                    >
                        <Link href="/" className="font-semibold">Главная</Link>
                        <Link href="/catalog" className="font-semibold">Каталог</Link>
                        <Link href="/actions" className="font-semibold">Акции</Link>
                        <Link href="/blog" className="font-semibold">Блог</Link>
                        <Link href="/vacancy" className="font-semibold">Вакансии</Link>
                        <Link href="/contacts" className="font-semibold">Контакты</Link>
                    </div>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <div
                            className="flex rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-50 shadow-sm ring-2 ring-gray-50/10 hover:ring-gray-100/20"
                        >
                            <PhoneIcon className="block h-6 w-6" aria-hidden="true" />
                            <Link href="tel:79306711455" className="ml-2 text-gray-50 text-xs sm:text-lg font-bold "
                                >8 (930) 671-14-55
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
export default Menu
