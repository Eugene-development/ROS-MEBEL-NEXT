import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по оплате мебели'
const info = [
    {
        question: 'Вы работаете по предоплате?',
        answer: 'Если позиция заказная, а не со склада, то мы берём предоплату.'
    },
    {
        question: 'У вас есть рассрочка или кредит?',
        answer: 'В данный момент кредитные отношения оформляются через банк.'
    },
    {
        question: 'Сколько стоит доставка?',
        answer: 'Если вы в черте города, то мы доставим заказ бесплатно. За город тариф уточняйте у менеджера.'
    },
    {
        question: 'Можно ли оплатить за заказ экспедитору?',
        answer: 'Окончательная оплата заказа производится либо экспедитору на руки, либо по факту установки.'
    },
    {
        question: 'Есть ли процедура возврата средств?',
        answer: 'Мы работаем в рамках законодательства и закона о защите прав потребителей.'
    },
]

export default () => {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Оплата</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
