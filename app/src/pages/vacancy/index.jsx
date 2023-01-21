import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Vacancy from "@/components/Main/Vacancy";

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Контакты</title>
                </Head>

                <Vacancy/>
            </MainLayout>
        </>
    );
}
