/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useReactiveVar } from '@apollo/client'
import { is_visible_form_measurement } from '@/apollo/stores/visible'
import Brand from '@/components/Main/Brand';


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="isolate bg-gray-50">
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pt-12 pb-16 sm:pt-20 sm:pb-16">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Посетите наш мебельный блог.{' '}
                    <Link href="/blog" className="font-semibold text-blue-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Почитать <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="max-w-7xl text-3xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    <span className="relative whitespace-nowrap text-blue-600">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                            />
                        </svg>
                        <span className="relative text-4xl sm:text-7xl">Мебель на заказ</span> <br />
					</span>
                  для вашего дома и офиса
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
					Качественная и недорогая корпусная мебель на заказ с услугами доставки и установки.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/catalog"
                    className="inline-block rounded-lg bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-600 hover:bg-gradient-to-bl px-4 md:px-6 py-1.5 text-sm sm:text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Наш каталог{' '}
                    <span className="text-blue-50" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <button
                    onClick={() => {is_visible_form_measurement(true)}}
                    type="button"
                    className="inline-block rounded-lg px-4 md:px-6 py-1.5 text-sm sm:text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Запись на замер{' '}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
              {/* <div>
                <img
                    className="absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2 object-fill opacity-80"
                    src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
                    alt=""
                />
              </div> */}
              {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
