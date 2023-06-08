import { Nav } from "../../components/Nav"
import { sanityClient, imgUrl } from "../../sanity"
import Head from 'next/head'
import { Fade } from "react-awesome-reveal"
import Image from 'next/image'
import Link from 'next/link'
import { Post } from "../../typings"
import Footer from "../../components/Footer"

interface Props {
    posts: [Post]
}

export default function index({ posts }: Props) {
    return (
        <>
            <Nav />
            <main className="bg-sky-200 h-screen">
                <section className="font-serif p-5 flex flex-col items-center">
                    <div className="flex flex-col p-10 gap-5 md:text-center">
                        <h1 className="font-extrabold text-4xl text-center">Val In The Valley</h1>
                        <p className="text-2xl font-thin">Follow me - Val Klein - as I record my journey in regenrative argiculture</p>
                    </div>
                    <Fade duration={1700} triggerOnce>
                        <div className="flex flex-col bg-sky-50 items-center mx-auto justify-center w-4/5 gap-5 md:gap-6 p-2 md:p-6">
                            {posts?.map(post => (
                                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                                    <div className="cursor-pointer flex flex-col max-w-5xl">
                                        {post.mainImage && (
                                            <Image
                                                //@ts-ignore
                                                {...imgUrl(post.mainImage)}
                                                height={350}
                                                width={750}
                                                objectFit="cover"
                                                className="shadow-lg"
                                                alt="blog preview image"
                                            />
                                        )}
                                        <div className="flex ml-3 mt-3">
                                            <div className="flex flex-col gap-4">
                                                <h4 className="text-2xl font-bold italic">{post.title}</h4>
                                                <div className="flex items-center space-x-3">
                                                    {post.author.image && (
                                                        <Image
                                                            //@ts-ignore
                                                            {...imgUrl(post.author.image)}
                                                            height={50}
                                                            width={50}
                                                            layout="fixed"
                                                            objectFit="cover"
                                                            alt="author image"
                                                            className="rounded-full" />
                                                    )}
                                                    <span className="text-lg font-extrabold">{post.author.name}</span>
                                                </div>
                                                <p className="text-xl md:mt-5">{post.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Fade>
                </section>
            </main>
            <Footer />
        </>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == 'post']{
      _id,
      title,
      author -> {
      name,
      image
    },
      description,
      mainImage,
      slug,
    }`

    const posts = await sanityClient.fetch(query)

    return {
        props: {
            posts
        }
    }
}