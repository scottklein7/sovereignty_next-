import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} /></>
  )
}

export default MyApp
