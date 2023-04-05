import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Nav } from '../components/Nav';
import { sanityClient, imgUrl } from '../sanity'

const weddingphotos = ({ images }: any) => {
    return (
        <div className="h-screen">
            <Head>
                <title>Wedding Photos for Sov Farms</title>
            </Head>
            <Nav />
            <main className="bg-sky-200 my-16 h-screen flex-col">
                <h1 className="text-center font-bold text-3xl text-white drop-shadow-lg p-5">Our Wedding Venue</h1>
                <section className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-8">
                    {images?.images.map((image) => (
                        <div key={image._key} className="mx-5 sm:mx-1 aspect-w-1 aspect-h-1 bg-sky-200 rounded-3xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <Image
                                {...imgUrl(image.asset._ref)}
                                height={700}
                                width={700}
                                objectFit="contain"
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl transition duration-500 ease-in-out transform hover:scale-105"
                                alt="Weeding Photo Image"
                            />
                        </div>
                    ))}
                </section>
            </main>

        </div>
    );

}

export default weddingphotos

export const getServerSideProps = async () => {
    const query = `*[_type == "imageGallery"][0]{
        title,
        _id,
        images,
      }`

    const images = await sanityClient.fetch(query)

    return {
        props: {
            images
        }
    }
}