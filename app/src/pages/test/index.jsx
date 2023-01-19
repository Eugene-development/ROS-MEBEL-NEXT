import Head from 'next/head'
import { request } from 'graphql-request';
import MainLayout from '@/components/Layouts/MainLayout';
import { ALL_RUBRIC } from '@/lib/GQL/query/rubric';

export async function getServerSideProps(context) {
    const url = 'https://gost-remont.com/graphql/';
	const variables = {
		key: '1'
	};
	const catalog = await request(url, ALL_RUBRIC, variables);
    console.log(catalog);
  return {
    props: {catalog}, // will be passed to the page component as props
  }
}

export default function Test({catalog}) {
    console.log(catalog.rubric[0].value);
    return (
        <>
        <MainLayout>
            <Head>
                <title>Каталог</title>
            </Head>

            <p>{catalog.rubric[0].value}</p>
        </MainLayout>
        </>
    )
}

// const T = () => {
//     return (
//         <>

//         </>
//     )
// }
// export default T

