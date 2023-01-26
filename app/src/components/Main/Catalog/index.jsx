import Link from 'next/link'
import { is_visible_form_measurement } from '@/apollo/stores/visible'
import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    id: 'tier-hobby',
    name: 'Категория',
    href: 'shkafy',
    category: 'Шкафы корпусные',
    description: 'Посмотрите шкафы различного наполнения и цветового решения в нашем каталоге. Работаем по индивидуальным заказам.',
    features: [
      'Шкафы купе',
      'Распашные шкафы',
      'Встроенные шкафы',
      'Гардеробные',
      'Двери купе',
      'Офисные шкафы',
    ],
  },
  {
    id: 'tier-team',
    name: 'Категория',
    href: 'kuhni',
    category: 'Кухонные гарнитуры',
    description: 'Любой кухонные гарнитуры, которые вы закажите из каталога может быть выполнен в любой комплектации и любого размера.',
    features: [
        'МДФ',
        'Патина',
        'Пластик',
        'Эмаль',
        'Акрил',
        'ЛДСП',
    ],
  },
  {
    id: 'tier-team',
    name: 'Категория',
    href: 'kuhni',
    category: 'Детская мебель',
    description: 'Раздел в разработке Раздел в разработке Раздел в разработке Раздел в разработке',
    features: [
        'Раздел в разработке',
        'Раздел в разработке',
        'Раздел в разработке',
        'Раздел в разработке',
        'Раздел в разработке',
    ],
  },
]

export default function Catalog() {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden pt-24 pb-96 lg:pt-32">
        <div>
          <img
            className="absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2 object-fill"
            src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-xl font-semibold leading-8 text-red-900">Наш каталог</h2>
            <p className="mt-2 text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Каталог корпусной <br className="hidden sm:inline lg:hidden" />
              мебели
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Ознакомьтесь с нашими предложениями мебели из каталога. <br className="hidden sm:inline lg:hidden" />
              Широкий ассортимент и доступные цены.
            </p>
          </div>
        </div>
      </div>
      <div className="flow-root bg-white pb-32 lg:pb-40">
        <div className="relative -mt-80">
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
              {tiers.map((tier, i) => (
                <div key={i} className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
                  <div className="p-8 sm:p-10">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-red-900" >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline text-3xl font-bold tracking-tight text-gray-900">
                      {tier.category}
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                      <ul role="list" className="space-y-6">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="h-6 w-6 text-red-900" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-600">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          href={tier.href}
                          className="inline-block w-full rounded-lg bg-red-900 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-red-800"
                          aria-describedby={tier.id}
                        >
                          Подробнее
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-md lg:max-w-7xl">
            <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
              <div className="lg:min-w-0 lg:flex-1">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-red-900">Акция</h3>
                <div className="mt-2 text-base leading-7 text-gray-600">
                  Замер помещения под проект совершенно <span className="font-semibold text-gray-900">бесплатно </span>, если объект находится в черте города.
                </div>
              </div>
              <div>
                <button
                  onClick={() => {is_visible_form_measurement(true)}}
                  type='button'
                  className="inline-block rounded-lg bg-red-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-red-900 hover:bg-red-100"
                >
                  Записаться на замер сейчас <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
