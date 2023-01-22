import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Офисные шкафы',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами офисных шкафов для хранения деловых бумаг и личных вещей.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: 'Шкафы',
    parentPageLink: '/shkafy',
    currentPageName: 'Офисные шкафы',
}

const products = [];

export default () => {
    const title = 'Купить офисный шкаф на заказ в Нижнем Новгороде';
    const description = 'Варианты офисных шкафов для вашей комфортной работы.';

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
