import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Contacts from "@/components/Main/Contacts";


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

                <Contacts/>
            </MainLayout>
        </>
    )
}
