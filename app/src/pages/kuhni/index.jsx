import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Category from '@/components/Main/Category'

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Контакты</title>
                </Head>

                <Category/>
            </MainLayout>
        </>
    )
}
