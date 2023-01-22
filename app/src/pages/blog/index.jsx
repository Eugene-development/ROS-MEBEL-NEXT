import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Blog from '@/components/Main/Blog';

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

                <Blog/>
            </MainLayout>
        </>
    )
}
