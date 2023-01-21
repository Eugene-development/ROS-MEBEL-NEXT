import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по составлению проекта'
const info = [
    {
        question: 'Как долго готовится проект?',
        answer: 'Это зависит от сложности проекта и загруженности проектировщика. Мы стараемся не затягивать.'
    },
    {
        question: 'Могу ли я вносить изменения в проект после его утверждения?',
        answer: 'Да это возможно, но лучше это делать до начала физического выполнения заказа.'
    },
    {
        question: 'Сколько стоит составление проекта?',
        answer: 'Если вы заказываете мебель в нашей компании, то эта услуга бесплатна.'
    },
    {
        question: 'Могу ли я предоставить свой проект?',
        answer: 'Конечно. Но имейте ввиду, что и ответственность за размерность лежит на ваших плечах.'
    },
    {
        question: 'Если будут несоответствия в проекте и по факту изготовления?',
        answer: 'Мы исправим ситуацию за свой счёт и в максимально короткие сроки.'
    },
]

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>{process.env.NEXT_PUBLIC_COMPANY} | Проект</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
