import Link from "next/link"
import { Bars3Icon, PhoneIcon } from '@heroicons/react/24/outline'


const InfoMenu = () => {
    return (
        <>
        <div className="px-6 py-2 lg:px-8 bg-blue-900">
            <div>
                <nav className="flex  items-left justify-between" aria-label="Global">
                    <div
                        className="hidden lg:flex text-xs lg:min-w-0 lg:flex-1 lg:gap-x-7 text-gray-50 hover:text-gray-100"
                    >
                        <Link href="/information/zamer" className="font-semibold">Замер</Link>
                        <Link href="/information/proekt" className="font-semibold">Проект</Link>
                        <Link href="/information/dostavka" className="font-semibold">Доставка</Link>
                        <Link href="/information/ustanovka" className="font-semibold">Сборка</Link>
                        <Link href="/information/oplata" className="font-semibold">Оплата</Link>
                        <Link href="/information/garantii" className="font-semibold">Гарантии</Link>
                    </div>
                    {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <div
                            className="flex rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-50 shadow-sm ring-2 ring-gray-50/10 hover:ring-gray-100/20"
                        >
                            <PhoneIcon className="block h-6 w-6" aria-hidden="true" />
                            <Link href="tel:79306711455" className="ml-2 text-gray-50 text-xs sm:text-lg font-bold "
                                >8 (930) 671-14-55
                            </Link>
                        </div>
                    </div> */}
                </nav>
            </div>
        </div>
        </>
    )
}
export default InfoMenu
