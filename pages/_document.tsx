import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <meta name="referrer" content="strict-origin" />
                    <link rel="stylesheet" href="https://kit.fontawesome.com/0f8f40b22d.css" crossOrigin="anonymous"></link>
                    <link href="https://fonts.cdnfonts.com/css/mark-pro" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/d-din" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
