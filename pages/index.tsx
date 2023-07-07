import { useEffect, useState, useCallback } from 'react'
import { sanityClient, imgUrl } from '../sanity'
import Head from 'next/head'
import { Nav } from '../components/Nav'
import Slides from '../components/Slides'
import Footer from '../components/Footer'
import { Fade } from "react-awesome-reveal"
import { Post } from '../typings'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/Contact'


const fcp = "/assets/main.png"


const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addEventListener("change", updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener("change", updateTarget)
  }, [])

  return targetReached;
}

interface Props {
  posts: [Post],
}

export default function index({ posts }: Props) {
  console.log(posts)
  const isBreakpoint = useMediaQuery(640)

  return (
    <>
      <Head>
        <title>Soveringty Farms | Local Grass Fed Beef | Northern Virginia | Shenandoah Valley Virginia</title>
      </Head>

      <Nav />

      <main>
        <section>
          <Slides />
        </section>
        <section className='p-10 md:hidden w-full' style={{ backgroundImage: 'url("/barn.jpeg")', backgroundSize: 'cover' }}>
          <div className="bg-[#292A2C] bg-opacity-80 flex flex-col justify-center items-center p-2">
            <div className='text-white flex flex-col gap-10 text-center border-2 w-full text-xl'>
              <span className='nanum-brush text-3xl'>Sovereignty Barn</span>
              <span className='cinzel flex justify-center italic font-extrabold text-xl'>
                Where Couples become Families
              </span>
              <span className='nanum-brush cursive text-3xl'>Located In beautiful Mount Jackson Virginia</span>
            </div>
          </div>
        </section>


        <section className='flex flex-col md:flex-row cinzel'>
          <div className='w-full md:w-1/2'>
            <div className='relative h-0' style={{ paddingBottom: '56.25%' }}>
              <Image
                src="/event.webp"
                alt="Event Image"
                className='object-cover absolute inset-0'
                layout='fill'
              />
              <div className='absolute inset-0 flex justify-center items-center'>
                <Link href="/barnphotos">
                  <a>
                    <button className='font-extrabold bg-white bg-opacity-70 hover:bg-opacity-30 hover:bg-black hover:text-white px-6 py-3 shadow-md rounded transition-colors duration-300'>Barn Events</button>
                  </a></Link>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='relative h-0' style={{ paddingBottom: '56.25%' }}>
              <Image
                src="/arbor.webp"
                alt="Wedding Image"
                className='object-cover absolute inset-0'
                layout='fill'
              />
              <div className='absolute inset-0 flex justify-center items-center'>
                <Link href="/weddingphotos">
                  <a>
                    <button className='font-extrabold bg-white bg-opacity-70 hover:bg-opacity-30 hover:bg-black hover:text-white px-6 py-3 shadow-md rounded transition-colors duration-300'>Weddings</button>

                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 flex flex-col justify-center items-center text-center bg-gray-100">
          <h3 className="p-10 font-cinzel text-2xl text-gray-800">DISCOVER THE SERENITY OF SOVEREIGNTY FARMS IN MOUNT JACKSON, VA</h3>
          <p className="font-nanum-brush text-xl text-gray-600">
            Nestled on 25 acres of picturesque countryside, complete with a charming historic barn and a commitment to organic farming, Sovereignty Farms invites you to experience the beauty and tranquility of Virginia's renowned Shenandoah Valley.
          </p>
          <Link href={"/contact"}>
            <a>
              <button className="cinzel mt-8 text-lg px-6 py-3 bg-white text-green-800 font-bold rounded-full hover:bg-green-900 hover:text-white transition-colors duration-300">Get In Touch</button>
            </a>
          </Link>
        </section>


        <section className="cinzel p-5 flex flex-col items-center bg-sky-100">
          <h2 className="text-center font-extrabold text-4xl md:text-5xl py-10">Val in the Valley Blog</h2>
          <Fade duration={1700} triggerOnce>
            <div className="flex flex-col bg-sky-50 items-center mx-auto justify-center hover:ease-in-out w-4/5 gap-5 md:gap-6 p-2 md:p-6 hover:shadow-lg hover:transition-transform duration-500 ease-in-out">
              {posts?.map(post => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}>
                  <div className="cursor-pointer flex flex-col max-w-5xl">
                    {post.mainImage && (
                      <Image
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