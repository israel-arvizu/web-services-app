
import Head from 'next/head';
import '../styles/globals.css'
import "../styles/splashPage.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
            <title>Israel's Web Services</title>
            <link href="https://fonts.cdnfonts.com/css/mark-pro" rel="stylesheet" />
            <link href="https://fonts.cdnfonts.com/css/d-din" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
