import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/Main/Hero'
import { PrimaryFeatures } from '@/components/Main/PrimaryFeatures';
import Brand from '@/components/Main/Brand';
import { Testimonials } from '@/components/Main/Testimonials';

export default function Home() {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Мебель на заказ</title>
                    <meta name="description" content="This is a sample tag description for SEO." />
                </Head>

                <Hero/>
                <Brand/>
                <PrimaryFeatures/>
                <Testimonials/>
            </MainLayout>
        </>
    )
}
