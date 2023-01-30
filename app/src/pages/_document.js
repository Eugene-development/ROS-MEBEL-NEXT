import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head style={{ scrollBehavior: 'smooth', overflowY: 'scroll' }}>
                    <link
                        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="icon"
                        href="https://storage.yandexcloud.net/brand-logo/mos-mebel/favicon.svg"
                    />
                    <script
                        src="//code.jivosite.com/widget/iuXBLJcIxk"
                        async></script>

                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                    m[i].l=1*new Date();
                                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                    ym(51188858, "init", {
                                            clickmap:true,
                                            trackLinks:true,
                                            accurateTrackBounce:true,
                                            webvisor:true
                                    });
                                `,
                        }}
                    />
                </Head>

                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
