import { useEffect, useState, useCallback } from 'react'
import { sanityClient, imgUrl } from '../sanity'
import Head from 'next/head'
import { Nav } from '../components/Nav'
// import AnimalsMobile from '../components/AnimalsMobile'
// import AnimalsWeb from '../components/AnimalsWeb'
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
        {/* <section className="p-5 flex flex-col justify-center bg-sky-100 font-serif">
          <h2 className="mt-10 text-center font-extrabold text-4xl md:text-5xl">Our Animals</h2>
          {isBreakpoint ? (
            <AnimalsMobile />
          ) : (
            <AnimalsWeb />
          )}
        </section> */}
        {/* <section>
          <DateP />
        </section> */}
        <section className="p-5 flex flex-col justify-center bg-blue-100 font-serif">
          <Fade damping={1300} triggerOnce>
            <h2 className="text-center font-extrabold text-4xl md:text-5xl">Our Story</h2>
            <article>
              <div className="flex flex-col gap-5 p-10 md:px-48 text-xl">
                <p>Sovereignty Farms was  not only purchased for the purpose of finding peace in the beautiful county in the Shenandoah Valley of Virginia, but also was to provide us a way to connect with and raise and grow our own food.  It has been an interesting endeavor as we strive to know more about our food and more importantly about where our food comes from.  As a family, God has  blessed us with thia opportunity to become independent of the corporate food network, and to grow and raise our own food.  It is our hope and goal to slowly grow our farm and share its goodness with our family, friends, and many more.</p>
                <p>The move to organic and healthy foods really comes from what we have learned about the origin of some food products, and frankly because our food simply doesn’t have any taste like it did growing up.    Once you have eaten organic and responsibly raised meat, eggs, fruits and vegetables, you simply will not go back to mass produced bland food.  We know it will be delicious and taste absolutely as we remembered when growing up, and be definitely be healthier for you.</p>
                <p>There is nothing more satisfying than growing and raising your own food. Second to that is enjoying your fellow farmer’s goodies.  We look forward to the journey that has been laid before us and making many new friends and sharing our farm with you.</p>
              </div>
            </article>
          </Fade>
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