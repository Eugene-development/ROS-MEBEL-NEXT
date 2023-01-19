import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Catalog from "@/components/Main/Catalog";

export default function () {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Каталог</title>
                </Head>

                <Catalog/>
            </MainLayout>
        </>
    )
}
