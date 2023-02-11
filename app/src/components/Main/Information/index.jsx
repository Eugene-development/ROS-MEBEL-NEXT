import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useReactiveVar } from '@apollo/client'
import { is_visible_form_measurement } from '@/apollo/stores/visible'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Information(prop) {
  return (
    <div className="bg-white">

      {/* Branded FAQ */}
      <div className="bg-blue-900">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white">{prop.heading}</h2>
          <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10" >
            <dl className="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
              {prop.info.map((item, i) => (
                <div key={i} >
                  <dt className="text-lg font-medium leading-6 text-white">{item.question}</dt>
                  <dd className="mt-2 text-base text-blue-100">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-50">
        <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            <span className="block">Готовы на замер?</span>
            <span className="block text-blue-600">Оформите заявку и мы вам перезвоним.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => {is_visible_form_measurement(true)}}
                type='button'
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 py-3 px-5 text-base font-medium text-white hover:bg-blue-700"
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
