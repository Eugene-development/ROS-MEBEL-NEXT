import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по гарантиям на мебель'
const info = [
    {
        question: 'На какой срок даются гарантии?',
        answer: 'Гарантийный срок может отличаться в зависимости от вида мебели. Точную информацию уточните у менеджеров.'
    },
    {
        question: 'На что не распространяются гарантии?',
        answer: 'Гарантии не распространяются на естественный износ, неправильной или небрежной эксплуатацией со стороны заказчика,связанной с проникновением грязи, жидкостей и пр.'
    },
    {
        question: 'Есть ли у вас расширенные гарантии за дополнительную плату?',
        answer: 'Нет. Подобными манипуляциями мы не занимаемся.'
    },
    {
        question: 'Что делать когда наступил гарантийный случай?',
        answer: 'Обратитесь к менеджеру компании по указанным в договоре телефонам.'
    },
    {
        question: 'Как долго рассматривается гарантийный случай?',
        answer: 'Мы постараемся решить ваш вопрос в максимально короткие сроки.'
    },
]

export default function Garantii () {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Гарантии</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
