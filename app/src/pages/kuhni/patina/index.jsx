import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const products = [
	{
		name: 'Золушка',
		text: '2500х2170х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/zolushka.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Лиза',
		text: '2200х1800х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liza.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Элина',
		text: '2000/2500х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Патина</title>
                </Head>
                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
