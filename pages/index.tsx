import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex bg-slate-800 min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Image src="/sovlogo.png" alt="Vercel Logo" width={600} height={300} />
        <h1 className="text-white mt-20 text-5xl font-serif">Coming Soon!</h1>

      </main>


    </div>
  )
}

export default Home
