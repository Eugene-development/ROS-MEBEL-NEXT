import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout'
import Information from '@/components/Main/Information'

const heading = 'Вопросы по замеру помещения'
const info = [
    {
        question: 'Услуга замера платная?',
        answer: 'Нет. Вызов замерщика и его консультация бесплатная. Возможно понадобится оплатить дизайн-проект, если заказ сложный и требуется эта работа.'
    },
    {
        question: 'У меня кривые стены и пол. Как быть?',
        answer: 'Собственно, для этих целей и выезжает замерщик. Он осмотрит всю специфику помещения и даст рекомендации по месту.'
    },
    {
        question: 'Вы замеряете рулеткой?',
        answer: 'В распоряжении замерщика есть весь необходимый инструментарий. Штатная и лазерная рулетка, уровень и прочий инструмент.'
    },
    {
        question: 'Выезжает ли замерщик за город?',
        answer: 'Да. Такая возможность имеется, но нужно учитывать адекватное расстояние и, возможно, нужно будет доплатить за бензин.'
    },
    {
        question: 'Возможно ли оформить договор с замерщиком?',
        answer: 'Договор вы можете оформить и с замерщиком, если он уполномочен это делать и у него имеются необходимые бланки договоров.'
    },
]

export default () => {
    const title = 'Замер мебели';
    const description = 'Замер помещения для заказа мебели.';

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
