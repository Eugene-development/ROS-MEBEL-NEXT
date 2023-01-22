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

const products = [];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title></title>
                </Head>
                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
