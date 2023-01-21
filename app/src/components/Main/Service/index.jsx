export default function Service () {
    return (
        <>
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Мебель на заказ
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
            Мы сотрудничаем только с проверенными производителями корпусной мебели и фурнитуры, дающие гарантии качества и адекватные цены на продукцию. <br/> Предоставляем услуги по замеру и установке мебели.

            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <img
                  src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/benefits/benefit-1.jpeg"
                  alt="Замерщик мерит расстояние"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Выезжаем в удобное для вас время, предварительно согласовав дату. При вашем желании можем выехать на обмер за город.
              </p>
              <p className="mt-8 text-base text-gray-500">
                Работаем высокоточным лазерным измерительным инструментом. Учитываем неровности поверхностей и разность горизонталей.
              </p>
              <p className="mt-8 text-base text-gray-500">
                Фиксируем данные в дизайн-проекте и несём ответственность за соответствие размеров в проекте и по фактическому исполнению.
              </p>
            </div>
            <div>
              <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                <img
                  src="https://storage.yandexcloud.net/brand-logo/azbuka-komforta/benefits/benefit-2.jpeg"
                  alt="Сборщик собирает гарнитур"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Выполняем сборку и установку мебели в кратчайшие сроки, предварительно обговорив удобную дату начала и окончания работ.
              </p>
              <p className="mt-8 text-base text-gray-500">
                Используем качественный ручной инструмент. Поддерживаем чистоту на объекте и соблюдаем тишину в установленное время.
              </p>
              <p className="mt-8 text-base text-gray-500">
                Профессионально монтируем сетчатые корзины и ящики на роликовых или шариковых направляющих с доводчиком и без него.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
        </>
    )
}
