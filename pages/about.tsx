import Head from 'next/head'
import React from 'react'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'


function about() {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>About | Sovereignty Farms</title>
                <meta name="description" content="Learn about Sovereignty Farms - a sustainable farm passionate about grass-fed meat, pastured duck eggs, chicken eggs, and organic produce. Explore our mission and sustainable farming practices. Host your dream wedding in our historic 100-year-old barn surrounded by the picturesque beauty of Sovereignty Farms. Contact us for more information." />
                <meta name="keywords" content="Sovereignty Farms, About Us, Sustainable Farming, Grass-Fed Meat, Pastured Duck Eggs, Chicken Eggs, Organic Produce, Historic Barn Wedding Venue" />
                <meta property="og:title" content="About | Sovereignty Farms" />
                <meta property="og:description" content="Learn about Sovereignty Farms - a sustainable farm passionate about grass-fed meat, pastured duck eggs, chicken eggs, and organic produce. Explore our mission and sustainable farming practices. Host your dream wedding in our historic 100-year-old barn surrounded by the picturesque beauty of Sovereignty Farms. Contact us for more information." />
                <meta property="og:image" content="/barn.jpeg" />
            </Head>
            
            <Nav />
            <main className="min-h-screen bg-[#E4EEDF] nanum-brush">
                <section className="relative py-36 bg-cover bg-center" style={{ backgroundImage: 'url("/flower.webp")' }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 md:p-0 drop-shadow-2xl">
                        <h2 className="text-6xl font-nanum-brush text-white">Experience the Joy of Farming</h2>
                        <p className="mt-4 text-3xl font-nanum-brush text-white">Explore our sustainable practices and savor the flavors of nature</p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto p-5 md:p-0">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-6xl font-extrabold text-green-800">Our Story</h2>
                                <p className="mt-4 text-3xl text-green-600 md:text-center lg:text-left md:p-4">Sovereignty Farms was born out of a deep passion for sustainable farming and reconnecting with our food sources. We set out on a journey to create a place where we can grow, raise, and harvest our own food, while preserving the natural beauty of the Shenandoah Valley.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-5xl font-extrabold text-green-800">Our Mission</h2>
                                <p className="mt-4 text-3xl text-green-600 md:text-center lg:text-left md:p-4">At Sovereignty Farms, our mission is to provide our community with locally sourced, grass-fed beef and organic produce. We prioritize regenerative farming practices and sustainable agriculture to ensure the health and well-being of our land, animals, and customers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-cyan-100 text-green-800">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full">
                        <div className="w-full md:w-1/2 flex justify-center">
                            <Image src="/table.webp" alt="Farm Table" objectFit="cover" width={300} height={400} />
                        </div>
                        <div className="mt-6 md:mt-0 w-full md:w-1/2 flex flex-col items-center  md:items-start">
                            <h2 className="text-5xl font-extrabold text-center">Join the Sovereignty Family</h2>
                            <p className="mt-4 text-3xl text-center md:text-left md:px-4 lg:px-0">Experience the joy of growing your own food and savoring the flavors of nature</p>
                            <Link href={"/contact"}>
                                <a>
                                    <button className="mt-8 text-xl px-6 py-3 bg-white text-green-800 font-bold rounded-full hover:bg-green-900 hover:text-white transition-colors duration-300">Get In Touch</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default about