import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Catalog from "@/components/Main/Catalog";


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

                <Catalog/>
            </MainLayout>
        </>
    )
}
