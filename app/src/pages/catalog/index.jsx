import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Catalog from "@/components/Main/Catalog";


export default () => {
    const title = 'Мебельный каталог';
    const description = 'Посмотрите наш мебельный каталог с различными вариантами продукции.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <Catalog/>
            </MainLayout>
        </>
    )
}
