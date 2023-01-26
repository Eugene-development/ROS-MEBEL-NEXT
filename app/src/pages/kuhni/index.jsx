import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import Category from '@/components/Main/Category';
import Text from '@/components/Main/Text'


const dataBC = {
    titleCategory: 'Кухонные гарнитуры',
    descriptionCategory: 'Недорогие кухонные гарнитуры на заказ под ваши размеры по доступным ценам. Дизайн проект в подарок. Ждём вас!',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg',
    parentPageName: '',
    parentPageLink: '',
    currentPageName: 'Кухонные гарнитуры',
}

const info = {
    titlePage: 'Категории кухонных гарнитуров',
    descriptionPage: 'Выберите подходящую под ваши пожелания и бюджет категорию кухонного гарнитура. Комплектацию, цвет и размер вы можете поменять.'
}

const types = [
	{
		name: 'МДФ',
		description: 'Кухонные гарнитуры с фасадами из МДФ с покрытием ПВХ плёнкой',
		href: 'kuhni/mdf',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elena.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Патина',
		description: 'Кухонные гарнитуры с фасадами из МДФ с патинированием фасадов',
		href: 'kuhni/patina',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Пластик',
		description: 'Кухонные гарнитуры с фасадами из пластика в профиле или 3d-кромке',
		href: 'kuhni/plastic',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Эмаль',
		description: 'Кухонные гарнитуры с эмалированными фасадами разнообразной палитры',
		href: 'kuhni/emal',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Акрил',
		description: 'Варианты кухонных гарнитуров с акриловыми фасадами с высоким глянцем',
		href: 'kuhni/akril',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'ЛДСП',
		description: 'Модули кухонных гарнитуров эконом класса стандартных размеров и под заказ',
		href: 'kuhni/ldsp',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
        imageAlt: 'Шкафы',
	}
];

const text = `
    <div class="relative overflow-hidden bg-white py-16">
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-lg">
          <h2>
            <span class="block text-center text-lg font-semibold text-green-600">Информация</span>
            <span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Где купить кухонный гарнитур на заказ
            </span>
          </h2>
        </div>
        <div class="max-w-6xl prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
            Кухонный гарнитур на заказ – это отличный способ создать уникальное и функциональное пространство в вашем доме. Кухня – это сердце любого дома, и ее дизайн должен быть не только красивым, но и удобным. Кухонный гарнитур на заказ в Нижнем Новгороде позволяет идеально подобрать размеры, форму и цвета мебели для вашей кухни, чтобы она стала идеальной по функционалу и дизайну.
          </p>
          <p>
            Цены на кухонные гарнитуры на заказ в Нижнем Новгороде могут быть разными, но они обязательно будут окупаться удобством и качеством исполнения. Кроме того, заказывая кухонный гарнитур на заказ, вы можете быть уверены в том, что он будет соответствовать вашим потребностям и предпочтениям.
          </p>
          <h2>From beginner to expert in 30 days</h2>
          <p>
            Купить кухонный гарнитур на заказ в Нижнем Новгороде – это отличный выбор для тех, кто хочет создать свою идеальную кухню. Вы можете выбрать материалы, цвета и функциональные решения, которые наилучшим образом подходят для вашей кухни. Например, если у вас маленькая кухня, можно заказать кухонный гарнитур с встроенными шкафчиками для максимального использования доступного пространства.
          </p>
          <h2>Everything you need to get up and running</h2>
          <p>
            Кроме того, кухонный гарнитур на заказ позволяет создать уникальный и индивидуальный дизайн кухни, который будет отражать ваш стиль и предпочтения. Вы можете выбрать дизайнерские решения, такие как интересные фактуры или эксклюзивные фурнитуры, чтобы сделать вашу кухню неповторимой.
          </p>
          <p>
            В целом, кухонный гарнитур на заказ в Нижнем Новгороде – это возможность получить идеально подходящую кухню, соответствующую вашим потребностям и желаниям. Цены на кухонные гарнитуры могут колебаться, но они оправданы высоким качеством и индивидуальностью продукта. Купить кухонный гарнитур – это вложение в комфорт и качество жизни вашей семьи. Поэтому не стоит задерживать покупку, а лучше обратиться к профессионалам и заказать кухонный гарнитур на заказ уже сегодня.
          </p>
        </div>
      </div>
    </div>

`


export default () => {
    const title = 'Купить кухонный гарнитур на заказ в Нижнем Новгороде';
    const description = 'Обратите внимание на кухонные гарнитуры на заказ, предлагаемые нашей компанией. Вы можете у нас купить кухонный гарнитур на заказ по доступной цене.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <BreadCrumbs dataBC = {dataBC}/>
                <Category info = { info } types = {types}/>
                <Text text = { text }/>
            </MainLayout>
        </>
    )
}
