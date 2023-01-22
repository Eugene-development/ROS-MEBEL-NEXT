import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Кухонные гарнитуры - Патина',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами кухонных гарнитуров с классическими патинированными фасадами',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg',
    parentPageName: 'Кухонные гарнитуры',
    parentPageLink: '/kuhni',
    currentPageName: 'Патина',
}

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
