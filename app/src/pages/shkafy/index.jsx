import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import BreadCrumbs from '@/components/Main/BreadCrumbs';
import Category from '@/components/Main/Category'
import Text from '@/components/Main/Text'


const dataBC = {
    titleCategory: 'Шкафы',
    descriptionCategory: 'Функциональные шкафы на заказ для вашей комнаты или гардероба. Множество форм и материалов. Дизайн проект в подарок. Звоните!',
    pathImg: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
    parentPageName: '',
    parentPageLink: '',
    currentPageName: 'Шкафы',
}

const info = {
    titlePage: 'Категории шкафов',
    descriptionPage: 'Выберите подходящую под ваши нужды категорию шкафов. Комплектацию, цвет и размер вы можете поменять.'
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
		imageSrc: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/unona.jpeg',
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
		imageSrc: 'https://i.pinimg.com/originals/29/58/54/295854b22cff201681b0459f4b94b5c2.jpg',
        imageAlt: 'Шкафы',
	}
];

const text = `
    <div class="relative overflow-hidden bg-white py-16">
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-lg">
          <h2>
            <span class="block text-center text-lg font-semibold text-green-600">Информация</span>
            <span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Где купить шкаф на заказ
            </span>
          </h2>
        </div>
        <div class="max-w-6xl prose prose-lg prose-indigo mx-auto mt-10 text-gray-500">
          <p>
            Комната - это место, где мы отдыхаем и обитаем. И как ни странно, но именно шкаф - один из главных элементов в ней. Он не только организует пространство, но и служит для хранения одежды, обуви, прочих предметов. Если вы житель Нижнего Новгорода и планируете купить шкаф для своей комнаты, то эта статья для вас.
          </p>
        <p>
            Стоит порадовать свою комнату новым шкафом. Он не только станет практичным хранилищем ваших вещей, но и добавит стиля и элегантности к вашему интерьеру. В зависимости от модели и дизайна, он может стать главным акцентом комнаты или же гармонично вписаться в общую концепцию.
          </p>

          <h2>Цены на шкафы</h2>
          <p>
            При выборе шкафа, самое главное - это его функциональность и дизайн. Важно определиться с размером, количеством дверей и внутренним оборудованием. Но не забывайте, что цена на шкаф в Нижнем Новгороде также имеет значение.
          </p>
        <p>
            Если вы ищете недорогой шкаф, то обратите внимание на модели со скидками или распродажи. Также можно посмотреть в интернет-магазинах, где цены могут быть ниже, чем в розничных магазинах. Но не забывайте о качестве и долговечности, которые должны быть на высшем уровне.
          </p>

          <p>
            Не переживайте, так как сегодня можно найти множество мест, где можно купить шкаф недорого. Например, в интернет-магазинах или на рынке. Но если вы хотите быть уверенным в качестве и долговечности шкафа, то лучше покупать в специализированных магазинах мебели. Там вы сможете не только посмотреть шкаф на месте, но и получить консультацию специалиста.
          </p>
          <p>
            В Нижнем Новгороде есть множество магазинов, где вы можете купить шкаф по вашему вкусу и бюджету. От классических моделей до современных дизайнерских решений. Вам остается только выбрать и приобрести свой идеальный шкаф.
          </p>
          <p>
            Не забывайте, что покупка шкафа - это важное решение, которое повлияет на внешний вид и функциональность вашей комнаты. Поэтому выбирайте аккуратно и с учетом всех своих потребностей. А купив шкаф в Нижнем Новгороде, вы можете быть уверены в его качестве и долговечности.
          </p>
          <h2>Решили купить шкаф? Запишитесь на замер!</h2>
          <p>
            В общем, покупка шкафа - это важное решение, которое поможет вам создать уютное и функциональное пространство. В Нижнем Новгороде вы найдете множество вариантов для любого бюджета и стиля. Не забывайте при выборе шкафа рассмотреть все аспекты: размеры, материал, дизайн, цену и качество. И не бойтесь экспериментировать, ведь новый шкаф может стать источником новых идей и создать неожиданный акцент в вашей комнате.
          </p>
          <p>
            Не медлите и купите свой новый шкаф уже сегодня, чтобы повысить функциональность и стиль вашей комнаты. Вы не пожалеете о своей покупке в нашей компании!
          </p>
        </div>
      </div>
    </div>

`

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

                <BreadCrumbs dataBC = { dataBC }/>
                <Category info = { info } types = {types}/>
                <Text text = {text}/>
            </MainLayout>
        </>
    )
}
