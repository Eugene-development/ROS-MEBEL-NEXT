import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Замер'
const info = [
    {
        question: 'Услуга замер платная?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'У меня кривые стены и пол. Как быть?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Вы замеряете рулеткой?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Выезжает ли замерщик за город?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Возможно ли оформить договор с замерщиком?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
]

export default function Measurement () {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>Замер</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
