import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Blog from '@/components/Main/Blog';

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Блог</title>
                </Head>

                <Blog/>
            </MainLayout>
        </>
    )
}
