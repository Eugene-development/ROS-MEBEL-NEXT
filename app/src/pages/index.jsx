import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/Main/Hero'
import { PrimaryFeatures } from '@/components/Main/PrimaryFeatures';
import Brand from '@/components/Main/Brand';

export default function Home() {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Мебель на заказ</title>
                </Head>

                <Hero/>
                <Brand/>
                <PrimaryFeatures/>
            </MainLayout>
        </>
    )
}
