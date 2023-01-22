import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Встроенные шкафы',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами встроенных шкафов для ниш различных назначений от гардеробной до кладовой.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: 'Шкафы',
    parentPageLink: '/shkafy',
    currentPageName: 'Встроенные шкафы',
}

const products = [
	{
		name: 'Челси',
		text: '2800х2300х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/chelsi.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Фикус',
		text: '1800х2200',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/ficus.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Ирис',
		text: '2400х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/iris.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Люкс-10',
		text: '2900х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-10.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Люкс-3',
		text: '2300х2450х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/luks-3.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Мимоза',
		text: '3000х2200х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/mimosa.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Нарцисс',
		text: '2100х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/narciss.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Мимоза',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-2.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Юнона',
		text: '2600х2400х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/unona.jpeg',
		alt: 'Встроенный шкаф'
	},
	{
		name: 'Жасмин',
		text: '3200х2400',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
		alt: 'Встроенный шкаф'
	}
];

export default () => {
    const title = '';
    const description = '';

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
