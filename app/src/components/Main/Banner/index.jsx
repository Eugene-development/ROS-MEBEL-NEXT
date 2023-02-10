import Link from 'next/link'
import { MegaphoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Banner = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
        {open &&
            <div className="bg-blue-500">
                <div className="mx-auto max-w-full py-2 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-red-900 p-2">
                            <MegaphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 truncate font-bold text-white">
                                <span className="md:hidden">У нас есть для вас акции!</span>
                                <span className="hidden md:inline"
                                    >Большие новости! У нас есть для вас акции и специальные предложения.</span
                                >
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <Link
                                href="/actions"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-1 text-sm font-medium text-blue-900 shadow-sm hover:bg-blue-50"
                                >Узнать больше
                            </Link>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                            <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Banner

