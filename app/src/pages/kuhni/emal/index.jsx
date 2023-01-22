import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const products = [
	{
		name: 'Капучино',
		text: '2800/1800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Прага',
		text: '2000/3000х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/praga.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Эмаль</title>
                </Head>
                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
