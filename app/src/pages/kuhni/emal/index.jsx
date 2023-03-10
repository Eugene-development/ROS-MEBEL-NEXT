import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Кухонные гарнитуры - Эмаль',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами кухонных гарнитуров с эмалированными фасадами различного цвета.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg',
    parentPageName: 'Кухонные гарнитуры',
    parentPageLink: '/kuhni',
    currentPageName: 'Эмаль',
}

const products = [
    	{
		name: 'Чикаго',
		text: '2900х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/chikago.jpeg',
		alt: 'Кухонный гарнитур'
	},
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
    const title = 'Эмалированные кухонные гарнитуры';
    const description = 'Варианты эмалированных кухонных гарнитуров в Нижнем Новгороде.';

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
