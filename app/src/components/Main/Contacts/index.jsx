import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contacts() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Связь с нами</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Связаться с нами вы можете по телефону, по электронной почте или, приехав к нам, предварительно оговорив время встречи.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Адреса</dt>
                <dd>
                  <p className="text-lg font-semibold">Нижний Новгород:</p>
                  <p>ул. Гордеевская, 7</p>
                  <p>ул. Переходникова, 29</p>
                  <p>пр. Бусыгина, 19</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Телефон</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">8 (930) 671-14-55</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">indexpro24@yandex.ru</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              У вас есть предложения?{' '}
              <a href="#" className="font-semibold text-gray-700 underline">
                Отправьте форму
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Почта
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Почта"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Телефон"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="Сообщение"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-900 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
