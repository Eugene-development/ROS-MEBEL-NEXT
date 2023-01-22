import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: '',
    descriptionCategory: '',
    pathImg: '',
    parentPageName: '',
    parentPageLink: '',
    currentPageName: '',
}

const products = [
	{
		name: 'Тифани',
		text: '3900/3900х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/tifani.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Елена',
		text: '2500/1800х2400х600/300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elena.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Ария',
		text: '2800/2700х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/aria.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Гардения',
		text: '2800х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/gardenia.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Мария',
		text: '3300/1600х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/maria.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Модерн',
		text: '3600х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/modern.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Натали',
		text: '3200х2400х600х300',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/natali.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Женева',
		text: '2400/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/zheneva.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Белуччи',
		text: '2500/1500х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/beluchi.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Лагуна',
		text: '2200/1700х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/laguna.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>МДФ</title>
                </Head>
                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
