import Head from 'next/head'
import MainLayout from '@/components/Layouts/MainLayout';
import Post from '@/components/Main/Post'

const textHTML = `
        <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50 overflow-hidden">
            <div class="max-w-max lg:max-w-7xl mx-auto">
                <div class="relative z-10 mb-8 md:mb-2 md:px-6">
                    <div class="text-base max-w-prose lg:max-w-none">
                        <h2 class="leading-6 text-sky-600 font-semibold tracking-wide uppercase">Пост от 6 июля 2022</h2>
                        <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Шкафы купе с фотопечатью на стекле</h1>
                    </div>
                </div>
                <div class="relative">
                    <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                    </svg>
                    <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                        <defs>
                            <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                    </svg>
                    <div class="relative bg-gradient-to-b from-white via-white to-gray-50 md:p-6">
                        <div class="lg:grid lg:grid-cols-2 lg:gap-12">
                            <div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                <p>Компания «Азбука Комфорта» предлагает Вам изготовление шкафов-купе и встроенные шкафы-купе с качественной фотопечатью по Вашим размерам и индивидуальному проекту. Данные шкафы купе всегда подчеркнут Вашу индивидуальность. Шкафы-купе с фотопечатью способны задать тон помещению, принести в него новые цвета и настроение. Такой шкаф Стенли в гостиной будет приковывать взгляды всех ваших гостей.</p>
                                <p>Интерьер Вашей жилой комнаты или офиса во многом зависит от выбранной мебели. Двери шкафа купе занимают по сравнению с другой мебелью гораздо большую площадь и неудивительно, что возникает желание сделать их оригинальными.</p>
                                <h3>Варианты категорий рисунков на двери купе с фотопечатью:</h3>
                                <ul>
                                    <li>животные;</li>
                                    <li>города;</li>
                                    <li>абстракция;</li>
                                    <li>природа;</li>
                                    <li>космос;</li>
                                    <li>и многие другие варианты.</li>
                                </ul>
                            </div>
                            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                <p>Мы предлагаем индивидуальные размеры и внутреннее наполнение шкафов купе. Вы получите шкаф Стенли с проработанным дизайном и наполнением, где задействован каждый сантиметр. Это важно, так как зачастую целью является максимальная полезность шкафа. В него хочется поместить и пылесос, и гладильную доску, и нижнее белье. Все это конечно реально! Двери Стенли, используемые для шкафов, прослужат вам долгие годы. Вместе с тем вы получаете шкаф-купе с фотопечатью, который станет изюминкой вашей комнаты.</p>
                                <p>Большим преимуществом является огромный выбор рисунков, из которых можно подобрать варианты как для детской комнаты, так и в прихожую или спальню. Так же вы можете дробить один рисунок на 2, 3 или 4 двери.</p>
                                <p>Для вашей безопасности стекла с фотопечатью, как правило, армируются защитной плёнкой, которая не даст рассыпаться стеклу при неприятной ситуации. Особенно это актуально в детских комнатах.</p>
                                <p>Заказать шкаф Стенли в Нижнем Новгороде можно легко и быстро в различных мебельных компаниях. Шкафы купе с фотопечатью простоят долгие годы, а рисунок на них останется ярким в любых условиях и будет радовать вас и ваших близких.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

export default () => {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Пост</title>
                </Head>

                <Post text={textHTML}/>
            </MainLayout>
        </>
    )
}
