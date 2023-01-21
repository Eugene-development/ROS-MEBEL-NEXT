import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Contacts from "@/components/Main/Contacts";

export default function () {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Пост</title>
                </Head>

            </MainLayout>
        </>
    )
}
