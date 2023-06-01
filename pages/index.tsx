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
              <span className='font-nanum-brush text-3xl'>Sovereignty Barn</span>
              <span className='font-cinzel flex justify-center italic font-extrabold text-xl'>
                Where Couples become Families
              </span>
              <span className='font-nanum-brush cursive text-3xl'>Located In beautiful Mount Jackson Virginia</span>
            </div>
          </div>
        </section>


        <section className='flex flex-col md:flex-row font-cinzel'>
          <div className='w-full md:w-1/2'>
            <div className='relative h-0' style={{ paddingBottom: '56.25%' }}>
              <Image
                src="/event.webp"
                alt="Event Image"
                className='object-cover absolute inset-0'
                layout='fill'
              />
              <div className='absolute inset-0 flex justify-center items-center'>
                <button className='font-extrabold bg-white bg-opacity-70 hover:bg-opacity-30 hover:bg-black hover:text-white px-6 py-3 shadow-md rounded transition-colors duration-300'>Barn Events</button>
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
                <button className='font-extrabold bg-white bg-opacity-70 hover:bg-opacity-30 hover:bg-black hover:text-white px-6 py-3 shadow-md rounded transition-colors duration-300'>Weddings</button>
              </div>
            </div>
          </div>
        </section>

        <section className="p-10 flex justify-center" style={{ backgroundImage: 'url("/weddingimg.webp")', backgroundSize: 'cover' }}>
          <div className="bg-black bg-opacity-40 p-5 rounded-md font-cinzel">
            <div className="flex flex-col p-10 gap-5 md:text-center text-white">
              <h1 className="font-bold text-4xl text-center">Contact Us</h1>
              <p className="text-2xl font-bold">Curious about our farm? Want to visit? Have a question about our products?</p>
            </div>
            <div className="">
              <form className="flex flex-col font-white gap-5" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                <p>
                  <label className="block text-white font-bold" htmlFor="yourname">
                    Your Name:
                  </label>
                  <input className="font-cinzel shadow-sm border border-gray-300 rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring" required={true} type="text" name="name" id="yourname" placeholder="John Doe" />
                </p>
                <p>
                  <label className="block text-white font-bold" htmlFor="youremail">
                    Your Email:
                  </label>
                  <input className="font-cinzel shadow-sm border border-gray-300 rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring" name="email" required={true} type="email" id="youremail" placeholder="robert@sovfarms.com" />
                </p>
                <p>
                  <label className="block text-white font-bold" htmlFor="yourmessage">
                    What can we do for you?
                  </label>
                  <textarea className="font-cinzel shadow-sm border border-gray-300 rounded py-2 px-3 mt-1 block w-full form-textarea outline-none required focus:ring" name="message" id="yourmessage" placeholder="I would love to visit your farm!"></textarea>
                </p>
                <p className="mt-3">
                  <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit">Send</button>
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="font-serif p-5 flex flex-col items-center bg-green-100">
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