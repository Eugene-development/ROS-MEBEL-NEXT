import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Action from "@/components/Main/Action"

export default function () {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Акции</title>
                </Head>

                <Action/>
            </MainLayout>
        </>
    )
}
