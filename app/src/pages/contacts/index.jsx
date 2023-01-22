import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Contacts from "@/components/Main/Contacts";


export default () => {
    const title = 'Контакты';
    const description = 'На этой страницы указаны контактные данные с нами.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <Contacts/>
            </MainLayout>
        </>
    )
}
