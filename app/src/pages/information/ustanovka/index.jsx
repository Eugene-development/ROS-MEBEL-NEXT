import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по установке'
const info = [
    {
        question: 'У вас есть услуга установки?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Когда приезжают установщики?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Сколько по времени занимает установка и сборка?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Установка платная?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
    {
        question: 'Могу ли я сам собрать мебель?',
        answer: 'assfadgthetyjjtdjetjtyj'
    },
]

export default function Installation () {

    return (
        <>
            <MainLayout>
                <Head>
                    <title>Установка</title>
                </Head>

                <Information heading={heading} info={info} />
            </MainLayout>
        </>
    )
}
