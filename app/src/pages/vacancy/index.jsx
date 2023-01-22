import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Vacancy from "@/components/Main/Vacancy";

export default () => {
    const title = 'Вакансии';
    const description = 'Проверьте есть ли свободные вакансии у нашей компании.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <Vacancy/>
            </MainLayout>
        </>
    );
}
