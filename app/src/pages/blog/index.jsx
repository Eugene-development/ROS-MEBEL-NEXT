import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Blog from '@/components/Main/Blog';

export default () => {
    const title = 'Мебельный блог || Тематические статьи';
    const description = 'Ознакомьтесь с нашими тематическими статьями на мебельную тематику.';

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
