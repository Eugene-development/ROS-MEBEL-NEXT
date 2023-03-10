import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Кухонные гарнитуры - Акрил',
    descriptionCategory: 'Недорогие кухонные гарнитуры на заказ под ваши размеры по доступным ценам. Дизайн проект в подарок. Ждём вас!',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/kitchens/4.jpg',
    parentPageName: 'Кухонные гарнитуры',
    parentPageLink: '/kuhni',
    currentPageName: 'Акрил',
}

const products = [
	{
		name: 'Скарлет',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Астра',
		text: '2600х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/astra.jpeg',
		alt: 'Кухонный гарнитур'
	},
	{
		name: 'Рианна',
		text: '2200/2600х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/riana.jpeg',
		alt: 'Кухонный гарнитур'
	}
];

export default () => {
    const title = 'Акриловые кухонные гарнитуры';
    const description = 'Варианты кухонных гарнитуров с акриловыми фасадами в Нижнем Новгороде.';

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
