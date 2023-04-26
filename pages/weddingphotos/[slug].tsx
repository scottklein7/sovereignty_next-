import React from 'react'
import { sanityClient, imgUrl } from '../../sanity'
import { GetStaticProps } from 'next'
import { weddingImage, weddingImages } from '../../typings'
import Image from 'next/image'
import Head from 'next/head'
import { Nav } from '../../components/Nav'
import Footer from '../../components/Footer'

interface Props {
  img: [weddingImage]
}

function weddingImage({ img }: Props) {
  const jeff = img.map((imgs) => {
    return (imgs.asset._ref)
  })

  return (
    <>
      <div className="bg-sky-200" style={{ height: "100vh" }}>
        <Head>
          <title>Wedding Photos for Sov Farms</title>
        </Head>
        <Nav />
        <main className="bg-sky-200">
          <Image
            //@ts-ignore
            {...imgUrl(jeff[0])}
            alt="Weeding Photo Image"
            className="h-full w-full"
          />
        </main>

      </div>
      <Footer />
    </>
  )
}

// const url = `https://cdn.sanity.io/images/${process.env.}/production/3be7146c7c44a155dfdd0a06adf2fc47b5b7ea78-4032x3024.png`

export const getStaticPaths = async () => {
  const query = `*[_type == "imageGallery"][0]{
    title,
    _id,
    images,
  }`

  const images = await sanityClient.fetch(query) as weddingImages

  const paths = images.images.map((image: weddingImage) => ({
    params: {
      slug: image._key
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const query = `*[_type == "imageGallery"][0]{
    title,
    _id,
    images,
  }`

  const weddingImg = await sanityClient.fetch(query) as weddingImages

  if (!weddingImg) {
    return {
      notFound: true
    }
  }

  const img = weddingImg.images.filter((image: weddingImage) => image._key === params?.slug)

  return {
    props: {
      img
    }
  }
}

export default weddingImage