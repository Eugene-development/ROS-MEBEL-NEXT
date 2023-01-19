 /*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { useReactiveVar } from '@apollo/client'
import { is_visible_form_measurement } from '@/apollo/stores/visible'


const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function FormMeasurement() {
  const isVisibleFormMeasurement = useReactiveVar(is_visible_form_measurement)

  const [open, setOpen] = useState(isVisibleFormMeasurement)

  return (
    <Transition.Root show={isVisibleFormMeasurement} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {is_visible_form_measurement(false)}}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-green-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">Запись на замер</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-green-700 text-green-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => {is_visible_form_measurement(false)}}
                            //   onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-green-50">
                            Наш менеджер свяжется с вами в ближайшее время после оформления заявки.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                Ваше имя
                              </label>
                              <div className="mt-1">
                                <input
                                  required
                                  type="text"
                                  name="nameForm"
                                  id="name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                Телефон
                              </label>
                              <div className="mt-1">
                                <input
                                  required
                                  type="tel"
                                  name="phoneForm"
                                  id="phone"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="time" className="block text-sm font-medium text-gray-900">
                                Удобное время
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="timeForm"
                                  id="time"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                                Адрес
                              </label>
                              <div className="mt-1">
                                <input
                                  required
                                  type="text"
                                  name="addressForm"
                                  id="address"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="comment" className="block text-sm font-medium text-gray-900">
                                Комментарий
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="comment"
                                  name="commentForm"
                                  rows={4}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                  defaultValue={''}
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="pt-4 pb-6">
                            <div className="flex text-sm">
                              <a
                                href="#"
                                className="group inline-flex items-center font-medium text-green-600 hover:text-green-900"
                              >
                                <LinkIcon
                                  className="h-5 w-5 text-green-500 group-hover:text-green-900"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Copy link</span>
                              </a>
                            </div>
                            <div className="mt-4 flex text-sm">
                              <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">Learn more about sharing</span>
                              </a>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        onClick={() => {is_visible_form_measurement(false)}}
                      >
                        Отменить
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Отправить
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
