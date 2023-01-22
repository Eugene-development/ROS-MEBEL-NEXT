import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const products = [
	{
		name: 'Аделина',
		text: '2500/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/adelina.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Домино',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/domino.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Ясмина',
		text: '1100/3200х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/iasmina.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Марсель',
		text: '2200/1900х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/marsel.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Примула',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Пластик</title>
                </Head>
                <BreadCrumbs/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
