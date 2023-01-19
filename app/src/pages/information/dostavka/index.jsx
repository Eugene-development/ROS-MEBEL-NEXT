import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по доставке'
const info = [
    {
        question: 'Доставка до подъезда?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'На лифте дешевле?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'В пригород доставите?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'В какое время привоз?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Можно оплатить экспедитору?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
]

export default function Delivery () {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>Доставка</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
