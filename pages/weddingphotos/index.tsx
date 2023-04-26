import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Nav } from '../../components/Nav';
import { sanityClient, imgUrl } from '../../sanity'
import { weddingImages, weddingImage } from '../../typings';
import Link from 'next/link';

interface Props {
    weddingImages: weddingImages
}

const weddingphotos = ({ weddingImages }: Props) => {
    return (
        <div className="" style={{ height: "100vh" }}>
            <Head>
                <title>Wedding Photos for Sov Farms</title>
            </Head>
            <Nav />
            <main className="bg-sky-200 mt-16 flex-col w-screen min-h-screen">
                <h1 className="text-center font-bold text-3xl text-white drop-shadow-lg p-10">Our Wedding Venue</h1>
                <section className="grid grid-cols-1 sm:grid-cols-4 ">
                    {weddingImages?.images?.map((image: weddingImage, idx) => (
                        <Link key={image._key} href={`/weddingphotos/${image._key}`}>
                            <div className="mx-5 sm:mx-1 aspect-w-1 p-3 aspect-h-1 rounded-xl overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <Image
                                    //@ts-ignore
                                    {...imgUrl(image.asset._ref)}
                                    height={700}
                                    width={700}
                                    className="absolute inset-0 object-cover rounded-xl transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                                    alt="Weeding Photo Image"
                                />
                            </div>
                        </Link>
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

    const weddingImages = await sanityClient.fetch(query)

    return {
        props: {
            weddingImages
        }
    }
}