import Link from 'next/link'

const posts = [
  {
    title: 'Как правильно выбрать шкаф купе для спальни',
    href: 'blog/post/1',
    category: { name: 'Статья', href: '#' },
    description:
			"Помимо удобной кровати или трельяжа в спальной комнате неизменно присутствуют и другие предметы мебели таки...",
    date: '10 Мая, 2022',
    datetime: '10 Мая, 2022',
    imageUrl:
      'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-6.jpeg',
    readingTime: '6 min',
    author: {
      name: 'Евгений Че',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Современный кухонный гарнитур на заказ',
    href: 'blog/post/2',
    category: { name: 'Статья', href: '#' },
    description:
			"Кухня в любом доме или квартире является олицетворением домашнего очага и уюта. Это объясняет тот факт, что...",
    date: '10 Мая, 2022',
    datetime: '10 Мая, 2022',
    imageUrl:
      'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
    readingTime: '4 min',
    author: {
      name: 'Евгений Че',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Шкафы купе с фотопечатью на стекле',
    href: 'blog/post/3',
    category: { name: 'Статья', href: '#' },
    description:
			"Компании зачастую предлагают вам изготовление шкафов-купе и встроенных шкафов с дверками с фотопечатью. Это...",
    date: '6 июля, 2022',
    datetime: '6 июля, 2022',
    imageUrl:
      'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-4.jpeg',
    readingTime: '11 min',
    author: {
      name: 'Евгений Че',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Blog() {
  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наш Блог</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Информационные статьи на тему мебельной индустрии от отечественных и зарубежных авторов
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-64 w-full object-cover" src={post.imageUrl} alt="фото поста" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-700">
                    {/* <a href={post.category.href} className="hover:underline"> */}
                      {post.category.name}
                    {/* </a> */}
                  </p>
                  <Link href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {/* <a href={post.author.href}> */}
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    {/* </a> */}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      {/* <span aria-hidden="true">&middot;</span> */}
                      {/* <span>{post.readingTime} read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

