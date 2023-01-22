import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Кухонные гарнитуры - ЛДСП',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами кухонными гарнитурами эконом класса с фасадами из ЛДСП',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg',
    parentPageName: 'Кухонные гарнитуры',
    parentPageLink: '/kuhni',
    currentPageName: 'ЛДСП',
}

const products = [
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
    const title = 'Кухонные гарнитуры с фасадами из ЛДСП';
    const description = 'Варианты кухонными гарнитурами с фасадами из ЛДСП в Нижнем Новгороде.';

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
