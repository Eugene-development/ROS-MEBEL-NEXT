import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по сборке и установке'
const info = [
    {
        question: 'У вас есть услуга сборки мебели?',
        answer: 'Да, конечно. У нас есть несколько профессиональных бригад, которые устанавливают кухонные гарнитуры, шкафы купе и прочую мебель.'
    },
    {
        question: 'Когда приезжают установщики?',
        answer: 'Сборка и установка приобретённой вами мебели осуществляется либо сразу после доставки, либо в другой удобный для вас день.'
    },
    {
        question: 'Сколько по времени занимает установка и сборка?',
        answer: 'Это зависит от сложности работ. В среднем от 2-3 часов до двух дней, если проект сложный.'
    },
    {
        question: 'Услуга платная?',
        answer: 'Как и любая работа эта тоже должна оплачиваться. Но иногда, в качестве бонуса вам, работу оплачивает компания, а не вы.'
    },
    {
        question: 'Могу ли я сам собрать мебель?',
        answer: 'Конечно. При определённых навыках и наличии инструмента вы можете выполнить эту работу самостоятельно.'
    },
]

export default () => {
    const title = 'Установка и сборка мебели';
    const description = 'Сборка и установка приобретённой вами мебели.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
