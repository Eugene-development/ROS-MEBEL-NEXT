import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Category from '@/components/Main/Category'

const types = [
	{
		name: 'МДФ',
		description: 'Кухонные гарнитуры с фасадами из МДФ с покрытием ПВХ плёнкой',
		href: 'kuhni/mdf',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elena.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Патина',
		description: 'Кухонные гарнитуры с фасадами из МДФ с патинированием фасадов',
		href: 'kuhni/patina',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/elina.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Пластик',
		description: 'Кухонные гарнитуры с фасадами из пластика в профиле или 3d-кромке',
		href: 'kuhni/plastic',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Эмаль',
		description: 'Кухонные гарнитуры с эмалированными фасадами разнообразной палитры',
		href: 'kuhni/emal',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/kapuchino.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Акрил',
		description: 'Варианты кухонных гарнитуров с акриловыми фасадами с высоким глянцем',
		href: 'kuhni/akril',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/scarlet.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'ЛДСП',
		description: 'Модули кухонных гарнитуров эконом класса стандартных размеров и под заказ',
		href: 'kuhni/ldsp',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
        imageAlt: 'Шкафы',
	}
];

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Контакты</title>
                </Head>

                <Category types = {types}/>
            </MainLayout>
        </>
    )
}
