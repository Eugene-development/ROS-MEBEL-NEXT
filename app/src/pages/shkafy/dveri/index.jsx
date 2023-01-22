import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Двери купе',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами дверей купе для ниш помещений и межкомнатных перегородок.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: 'Шкафы',
    parentPageLink: '/shkafy',
    currentPageName: 'Двери',
}

const products = [
	{
		name: 'Санди',
		text: '2000х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/sandi.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Агат',
		text: '2400х2400х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/agat.jpeg',
		alt: 'Шкаф купе'
	},
	{
		name: 'Фикус',
		text: '1800х2200',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/ficus.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Ирис',
		text: '2400х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/iris.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Нарцисс',
		text: '2100х2300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/narciss.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Мимоза',
		text: '1900х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/shkaffoto-2.jpeg',
		alt: 'Двери купе'
	},
	{
		name: 'Жасмин',
		text: '3200х2400',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
		alt: 'Двери купе'
	}
];


export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Двери</title>
                </Head>
                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products = {products}/>
            </MainLayout>
        </>
    )
}
