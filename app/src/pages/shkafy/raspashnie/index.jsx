import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import ProductList from '@/components/Main/ProductList';

const dataBC = {
    titleCategory: 'Распашные шкафы',
    descriptionCategory: 'Ознакомьтесь с нашими вариантами распашных шкафов для комнаты, прихожей, балкона или других помещений.',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: 'Шкафы',
    parentPageLink: '/shkafy',
    currentPageName: 'Распашные шкафы',
}

const products = [
	{
		name: 'Чароит',
		text: '1600х2400х520',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/charoit.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Цитрон',
		text: '1200х2150х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/citron.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Фиеста',
		text: '1200х2150х520',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/fiesta.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Халцедон',
		text: '1600х2200х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/halcedon.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Маркель',
		text: '2000/1600х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/markel.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Паскаль',
		text: '800х2200х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/pascal.jpeg',
		alt: 'Распашной шкаф'
	},
	{
		name: 'Лондон-3',
		text: '400х2120х510',
		img: 'https://ufa.mekkomeb.ru/upload/iblock/761/761fd655e6d3822a2726af6ef7e7002c.jpg',
		alt: 'Распашной шкаф'
	}
];

export default () => {
    const title = 'Купить распашные шкафы на заказ в Нижнем Новгороде';
    const description = 'Варианты распашных шкафов различного назначения для домов и квартир.';

    return (
        <>
            <MainLayout>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                </Head>

                <BreadCrumbs dataBC = {dataBC}/>
                <ProductList products={products}/>
            </MainLayout>
        </>
    )
}
