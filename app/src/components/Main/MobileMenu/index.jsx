import Link from "next/link"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const menu = [
  {
    name: 'Главная',
    href: '/',
    icon: LifebuoyIcon,
  },
  {
    name: 'Каталог',
    href: '/catalog',
    icon: LifebuoyIcon,
  },
  {
    name: 'Блог',
    href: '/blog',
    icon: LifebuoyIcon,
  },
  {
    name: 'Вакансии',
    href: '/vacancy',
    icon: LifebuoyIcon,
  },
]
const resources = [
  {
    name: 'Замер',
    description: 'Ответы по вопросам с замерами помещений',
    href: '/information/zamer',
    icon: LifebuoyIcon,
  },
  {
    name: 'Проект',
    description: 'Информация по проектированию мебели',
    href: '/information/proekt',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Доставка',
    description: 'Условия доставки ваших заказов',
    href: '/information/dostavka',
    icon: CalendarIcon,
  },
  { name: 'Сборка', description: 'Общая информация по сборке и установке', href: '/information/ustanovka', icon: ShieldCheckIcon },
  { name: 'Оплата', description: 'Правила оплаты заказанной мебели', href: '/information/oplata', icon: ShieldCheckIcon },
  { name: 'Гарантии', description: 'Предоставляемые гарантии на всю продукцию', href: '/information/garantii', icon: ShieldCheckIcon },
  { name: 'Контакты', description: 'Связь с нашими сотрудниками', href: '/contacts', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileMenu() {
  return (
    <div className="relative bg-gray-900">
      <Popover className="relative bg-gray-900 shadow">
        <div className="mx-auto max-w-full px-6">
          <div className="flex items-center justify-between py-3 lg:justify-start lg:space-x-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo2.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-9 lg:flex">

              <Link href="/" className="text-base font-medium text-gray-50 hover:text-gray-100">
                Главная
              </Link>
              <Link href="/catalog" className="text-base font-medium text-gray-50 hover:text-gray-100">
                Каталог
              </Link>
              <Link href="/blog" className="text-base font-medium text-gray-50 hover:text-gray-100">
                Блог
              </Link>
              <Link href="/vacancy" className="text-base font-medium text-gray-50 hover:text-gray-100">
                Вакансии
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-50 ' : 'text-gray-50',
                        'px-2 group inline-flex items-center rounded-md bg-gray-900 text-base font-medium hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Информация</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-200' : 'text-gray-100 -rotate-90',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 animate-pulse'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 ">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-5 bg-slate-100 px-5 py-6 sm:gap-5 sm:p-8">
                            {resources.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                {/* <item.icon className="h-6 w-6 flex-shrink-0 text-red-900" aria-hidden="true" /> */}
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {/* <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">Последние посты</h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li key={item.id} className="truncate text-base">
                                    <Link href={item.href} className="font-medium text-gray-900 hover:text-gray-700">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <Link href="#" className="font-medium text-red-900 hover:text-red-900">
                                Посмотреть все посты
                                <span aria-hidden="true"> &rarr;</span>
                              </Link>
                            </div>
                          </div> */}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
                    <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <div
                            className="flex rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-50 shadow-sm ring-2 ring-gray-50/10 hover:ring-gray-100/20"
                        >
                            <PhoneIcon className="block h-6 w-6" aria-hidden="true" />
                            <Link href="tel:79801506943" className="ml-2 text-gray-50 text-xs lg:text-lg font-bold "
                                >8 (980) 150-69-43
                            </Link>
                        </div>
                    </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-10 w-auto"
                      src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo4.png"
                      alt="logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {menu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-800" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                    <div className="lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                        <div
                            className="flex rounded-lg px-3 py-1.5 text-xl font-semibold leading-6 text-gray-900 shadow-sm ring-2 ring-gray-50/10 hover:ring-gray-500/20"
                        >
                            <PhoneIcon className="block h-6 w-6" aria-hidden="true" />
                            <Link href="tel:79801506943" className="ml-2 text-gray-700 text-lg font-bold "
                                >8 (980) 150-69-43
                            </Link>
                        </div>
                    </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    </div>
  )
}
