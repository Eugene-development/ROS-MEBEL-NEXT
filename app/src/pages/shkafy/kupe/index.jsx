import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Шкафы купе',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами шкафов купе на заказ по доступным ценам. Предлагаем различные системы подвесных и нижнеопорных дверей.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: 'Шкафы',
    parentPageLink: '/shkafy',
    currentPageName: 'Шкафы купе',
}

const products = [
	{
		name: 'Алмандин',
		text: '2000/1400х2300х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/almandin.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Азурит',
		text: '1800х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/azurit.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Бабочки',
		text: '1600х2150х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/geometria.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Гиалит',
		text: '1400/1100х2200х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/gialit.webp',
		alt: 'Шкаф купе'
	},
	{
		name: 'Калипсо',
		text: '1200/1200х2200х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/kalipso.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Комфорт-10',
		text: '2500х2400х450',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-10.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Комфорт-2',
		text: '1800х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-2.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Комфорт-4',
		text: '2500х2400х450',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-4.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Комфорт-6',
		text: '2000х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/komfort-6.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Коралл',
		text: '2800/1400х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/korall.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Лагуна',
		text: '1200х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/laguna-2.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Люкс-10',
		text: '2900х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-10.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Люкс-3',
		text: '2300х2450х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-3.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Марианна',
		text: '2800х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/mariana.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Шкаф-1',
		text: '2300х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaf-1.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Лотос',
		text: '1800х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-1.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Топаз',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/topaz.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Дуэт',
		text: '1700/1700х2400х450',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/trio.webp',
		alt: 'Шкаф купе'
	},
	{
		name: 'Турмалин',
		text: '2200х2400х450',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/turmalin.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Венеция',
		text: '3200х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/venecia.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Венера',
		text: '1100/1400х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/venera.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Верделит',
		text: '1300/2100х2400х450',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/verdelit.webp',
		alt: 'Шкаф купе'
	}
];

export default () => {
    const title = 'Купить двери купе на заказ в Нижнем Новгороде';
    const description = 'Варианты шкафов купе по доступным ценам для для вашей спальни или прихожей.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
