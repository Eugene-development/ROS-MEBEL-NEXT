import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Vacancy from "@/components/Main/Vacancy";

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

                <Vacancy/>
            </MainLayout>
        </>
    );
}
