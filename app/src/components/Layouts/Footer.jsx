import Link from 'next/link'


const yearStart = '2001';
const now = new Date();
const yearNow = now.getFullYear();

const text = 'Компания "Азбука Комфорта". Мебель на заказ.';
const phoneService = '+7 (930) 671-14-55';

const menu = [
	{
		value: 'Главная',
		path: ''
	},
	{
		value: 'Шкафы',
		path: 'shkafy'
	},
	{
		value: 'Кухни',
		path: 'kuhni'
	},
	{
		value: 'Блог',
		path: 'blog'
	},
];

const Footer = () => {

    return (
        <>
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {menu && menu.map((item, i) => (
                        <div key={i} className="px-4 py-2">
                            <Link href={item.path} className="text-xs sm:text-base text-gray-600"> {item.value} </Link>
                        </div>
                        ))
                    }
                        <div className="px-4 py-2">
                            <Link href="/contacts" className="text-xs sm:text-base text-gray-600"> Контакты </Link>
                        </div>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; {yearStart}-{yearNow}. {text}
                    <br />Обслуживание сайта {phoneService}
                </p>
            </div>
        </footer>
        </>

    )
}

export default Footer
