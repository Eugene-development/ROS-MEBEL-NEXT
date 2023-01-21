import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Contacts from "@/components/Main/Contacts";

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Контакты</title>
                </Head>

                <Contacts/>
            </MainLayout>
        </>
    )
}
