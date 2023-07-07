import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { Nav } from '../../components/Nav';
import { sanityClient, imgUrl } from '../../sanity'
import { weddingImages, weddingImage } from '../../typings';
import ReactModal from 'react-modal';
import Footer from '../../components/Footer';

interface Props {
    weddingImages: weddingImages
}

const ModalContent: React.FC<{ selectedImage: weddingImage | null; closeModal: () => void; modalIsOpen: boolean }> = ({ selectedImage, closeModal, modalIsOpen }) => {
    return (
        <ReactModal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={closeModal}
            contentLabel="Modal"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 100,
                },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'none',
                    padding: '2rem',
                    width: '90%',
                    height: '90%',
                    border: 'none',
                    borderRadius: '0.5rem',
                },
            }}
        >
            {selectedImage && (
                <button onClick={closeModal}>
                    <Image
                        layout='fill'
                        objectFit='contain'
                        {
                        //@ts-ignore
                        ...imgUrl(selectedImage.asset._ref)
                        }
                        alt="Selected Wedding Photo"
                    />
                </button>
            )}

        </ReactModal>
    )

}



const weddingphotos = ({ weddingImages }: Props) => {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState<weddingImage | null>(null);
    console.log(weddingImages)



    const openModal = (image: weddingImage) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
        console.log('first')
    };

    return (
        <div className="" style={{ height: "100vh" }}>
            <Head>
                <title>Wedding Photos for Sov Farms</title>
            </Head>
            <Nav />
            <main className="bg-sky-50 flex-col w-screen min-h-screen">
                <h1 className="text-center font-bold text-3xl text-slate-500 drop-shadow-lg p-10 cinzel">Our Barn Events</h1>
                <section className="grid grid-cols-1 sm:grid-cols-4 ">
                    {weddingImages?.images?.map((image: weddingImage) => (
                        <div key={image._key} className="mx-5 sm:mx-1 aspect-w-1 p-3 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <Image
                                //@ts-ignore
                                {...imgUrl(image.asset._ref)}
                                height={700}
                                width={700}
                                className="absolute inset-0 object-cover  transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                                alt="Wedding Photo Image"
                                onClick={() => openModal(image)}
                            />
                        </div>
                    ))}
                </section>
            </main>
            <Footer />

            <ModalContent selectedImage={selectedImage} closeModal={closeModal} modalIsOpen={modalIsOpen} />

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