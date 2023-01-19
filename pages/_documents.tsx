import { Html, Head, Main, NextScript } from 'next/document'
import SplashPage from '.'

export default function Document() {
  return (
    <Html>
      <Head>
            <title>Israel's Web Services</title>
            <link href="//db.onlinewebfonts.com/c/7200c6dd8ac604abe09f5159e53a40c0?family=Mark+Pro" rel="stylesheet" type="text/css"/>
      </Head>
      <body>
        <SplashPage />
      </body>
    </Html>
  )
}
