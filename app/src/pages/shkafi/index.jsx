import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Category from '@/components/Main/Category'

const types = [
	{
		name: 'Шкафы купе',
		description: 'Шкафы купе с подвесной или нижнеопорной системой высокого качества',
		href: 'shkafy/kupe',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg'
	},
	{
		name: 'Распашные шкафы',
		description: 'Пеналы и двух, трёх и четырёх створчатые шкафы с выдвижными ящиками',
		href: 'shkafy/raspashnie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/halcedon.jpeg'
	},
	{
		name: 'Встроенные шкафы',
		description: 'Безкаркасные шкафы встроенные в нишу с полками, ящиками и специальной фурнитурой',
		href: 'shkafy/vstroenie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg'
	},
	{
		name: 'Гардеробные',
		description: 'Полнофункциональные гардеробные с любым наполнением и под любой размер',
		href: 'shkafy/garderobnie',
		imageSrc: 'https://мебель-по-цене-фабрики.рф/thumb/2/yoya_PxK9Ckv3eGUUTy1Pg/r/d/mebel_dlya_garderobnoy_komnaty_syuzen.jpg'
	},
	{
		name: 'Двери купе',
		description: 'Двери купе в качестве перегородок или для закрытия ниш и гардеробных комнат',
		href: 'shkafy/dveri',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg'
	},
	{
		name: 'Офисные шкафы',
		description: 'Стильные и строгие варианты шкафов для офисных помещений или для вашего дома',
		href: 'shkafy/ofisnie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg'
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
