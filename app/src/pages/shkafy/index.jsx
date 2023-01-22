import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import Category from '@/components/Main/Category'



const dataBC = {
    titleCategory: 'Шкафы',
    descriptionCategory: 'Функциональные шкафы на заказ для вашей комнаты или гардероба. Множество форм и материалов. Дизайн проект в подарок. Звоните!',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: '',
    parentPageLink: '',
    currentPageName: 'Шкафы',
}

const types = [
	{
		name: 'Шкафы купе',
		description: 'Шкафы купе с подвесной или нижнеопорной системой высокого качества',
		href: 'shkafy/kupe',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Распашные шкафы',
		description: 'Пеналы и двух, трёх и четырёх створчатые шкафы с выдвижными ящиками',
		href: 'shkafy/raspashnie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/halcedon.jpeg',
        imageAlt: 'Шкафы',

	},
	{
		name: 'Встроенные шкафы',
		description: 'Безкаркасные шкафы встроенные в нишу с полками, ящиками и специальной фурнитурой',
		href: 'shkafy/vstroenie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Гардеробные',
		description: 'Полнофункциональные гардеробные с любым наполнением и под любой размер',
		href: 'shkafy/garderobnie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/mebel_dlya_garderobnoy_komnaty_syuzen.webp',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Двери купе',
		description: 'Двери купе в качестве перегородок или для закрытия ниш и гардеробных комнат',
		href: 'shkafy/dveri',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/zhasmin.jpeg',
        imageAlt: 'Шкафы',
	},
	{
		name: 'Офисные шкафы',
		description: 'Стильные и строгие варианты шкафов для офисных помещений или для вашего дома',
		href: 'shkafy/ofisnie',
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
        imageAlt: 'Шкафы',
	}
];

export default () => {
    const title = 'Шкафы на заказ в Нижнем Новгороде';
    const description = 'Обратите внимание на шкафы на заказ, предлагаемые нашей компанией.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <BreadCrumbs dataBC = {dataBC}/>
                <Category types = {types}/>
            </MainLayout>
        </>
    )
}
