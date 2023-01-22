import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const products = [
	{
		name: 'Чикаго',
		text: '2900х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/chikago.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Дива',
		text: '2800х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/diva.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Эвелина',
		text: '2800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/evelina.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Лиана',
		text: '2400х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liana.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Милена',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Дива',
		text: '2800х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/diva.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Эвелина',
		text: '2800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/evelina.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>ЛДСП</title>
                </Head>
                <BreadCrumbs/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
