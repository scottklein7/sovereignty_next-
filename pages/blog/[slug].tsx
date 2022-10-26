import { GetStaticProps } from 'next';
import Head from 'next/head';
import { sanityClient, imgUrl } from '../../sanity';
import { Post } from "../../typings"
import PortableText from 'react-portable-text'
import { Nav } from '../../components/Nav';
import Image from 'next/image';

interface Props {
    post: Post
}

export default function post({ post }: Props) {
    return (
        <>
            <Nav />
            <main>
                <main className="bg-sky-100">
                    <article className="max-w-3xl mx-auto p-5 font-serif">
                        <div className="flex flex-col gap-5 mb-5 border-b-2 py-4">
                            <h1 className="text-3xl mt-24">{post.title}</h1>
                            <p className='font-extralight text-sm'>Published on {new Date(post._createdAt).toLocaleString()}</p>
                            <div className="flex items-center space-x-5">
                                {post.author.image && (
                                    <Image {...imgUrl(post.author.image)} height={40} width={40} objectFit="cover" alt="author image" className="rounded-full" />
                                )}
                                <p>Blog post by <span className='text-green-600'>{post.author.name}</span></p>
                            </div>
                        </div>
                        <div className="py-2 border-b-2">
                            <h2 className="text-xl font-light text-gray-500 mb-3">{post.description}</h2>
                        </div>
                        {post.mainImage && (
                            <div className="flex justify-center mt-5">
                                <Image {...imgUrl(post.mainImage)} height={500} width={1000} objectFit="cover" alt="main blog image" />
                            </div>
                        )}
                        <div className='mt-10'>
                            <PortableText
                                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                                content={post.body}
                                serializers={{
                                    h1: (props: any) => (
                                        <h1 className="text-2xl font-bold my-5" {...props} />
                                    ),
                                    h2: (props: any) => (
                                        <h1 className="text-xl font-bold my-5" {...props} />
                                    ),
                                    h3: (props: any) => (
                                        <h1 className="text-xl font-bold my-5" {...props} />
                                    ),
                                    li: ({ children }: any) => (
                                        <li className="list-disc ml-4">{children}</li>
                                    ),
                                    link: ({ href, children }: any) => (
                                        <a className="text-blue-500 hover:underline" href={href}>
                                            {children}
                                        </a>
                                    ),
                                }}
                            />
                        </div>
                    </article>
                </main>
            </main>
        </>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
      _id,
      slug{
        current
      }
    }`

    const posts = await sanityClient.fetch(query)

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      author -> {
        name,
        image
      },
      mainImage,
      body,
      description,
      _createdAt
    }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post
        },
        revalidate: 6800,
    }

}