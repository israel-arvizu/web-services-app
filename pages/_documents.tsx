import { Html, Head, Main, NextScript } from 'next/document'
import SplashPage from '.'

export default function Document() {
  return (
    <Html>
      <Head>
            <title>Israel's Web Services</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            <link href="//db.onlinewebfonts.com/c/7200c6dd8ac604abe09f5159e53a40c0?family=Mark+Pro" rel="stylesheet" type="text/css"/>
      </Head>
      <body>
        <SplashPage />
      </body>
    </Html>
  )
}
