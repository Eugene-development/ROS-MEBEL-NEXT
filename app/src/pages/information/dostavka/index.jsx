import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по доставке заказа'
const info = [
    {
        question: 'Доставка до подъезда?',
        answer: 'Да, если есть нормальный подъезд транспорту. При необходимости и предварительной договорённости можем поднять на этаж в квартиру.'
    },
    {
        question: 'На лифте подъём дешевле?',
        answer: 'Если имеется грузовой лифт, то подъём, конечно же, дешевле. Цена услуги оговаривается отдельно.'
    },
    {
        question: 'В пригород доставите?',
        answer: 'Да. Мы доставляем заказы в пригород и соседние города. Цена оговаривается предварительно с учётом километража.'
    },
    {
        question: 'В какое время привоз?',
        answer: 'Как правило, развозы заказов осуществляются либо в первой, либо во второй половине дня. В любом случае с вами предварительно свяжутся.'
    },
    {
        question: 'Можно оплатить экспедитору?',
        answer: 'Окончательная оплата заказа производится либо экспедитору на руки, либо по факту установки.'
    },
]

export default function Delivery () {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Доставка</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
