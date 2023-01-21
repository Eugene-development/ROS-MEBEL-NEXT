import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/Main/Hero'
import Brand from '@/components/Main/Brand';
import PrimaryFeatures from '@/components/Main/PrimaryFeatures';
import Testimonials from '@/components/Main/Testimonials';
import Service from '@/components/Main/Service';

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Мебель на заказ</title>
                    <meta name="description" content="This is a sample tag description for SEO." />
                </Head>

                <Hero/>
                <Brand/>
                <PrimaryFeatures/>
                {/* <Service/> */}
                <Service/>
                <Testimonials/>
            </MainLayout>
        </>
    )
}
