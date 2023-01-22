import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Action from "@/components/Main/Action"

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

                <Action/>
            </MainLayout>
        </>
    )
}
