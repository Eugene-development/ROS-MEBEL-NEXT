import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по оплате'
const info = [
    {
        question: 'Вы работаете по предоплате?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'У вас есть рассрочка или кредит?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Сколько стоит доставка?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Можно ли оплатить экспедитору?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Есть ли процедура возврата средств?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
]

export default function Payment () {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>Оплата</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
