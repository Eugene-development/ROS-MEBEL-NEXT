import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Hero from '@/components/Main/Hero'
import Brand from '@/components/Main/Brand';
import PrimaryFeatures from '@/components/Main/PrimaryFeatures';
import Testimonials from '@/components/Main/Testimonials';
import Service from '@/components/Main/Service';


export default () => {
    const title = 'Азбука Комфорта | Мебель на заказ в Нижнем Новгороде';
    const description = 'Наша компания предлагает приобрести мебель на заказ по доступным ценам.'

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <Hero/>
                <Brand/>
                <PrimaryFeatures/>
                <Service/>
                <Testimonials/>
            </MainLayout>
        </>
    )
}
