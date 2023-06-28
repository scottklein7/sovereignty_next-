import Image from 'next/image';
import { Nav } from '../components/Nav';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
            <Nav />
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center h-96 w-full hello" style={{ backgroundImage: 'url(/walkingfield.webp)', backgroundSize: 'cover' }}>
                    <h2 className="font-cinzel text-4xl text-white text-center">Host Your Dream Wedding</h2>
                </div>
                <div className="w-full bg-emerald-50">
                    <div className="text-center bg-sky-100 w-full p-20 text-gray-300 font-extrabold">
                        <h1 className="cinzel text-5xl mt-10 drop-shadow-2xl">Contact Us</h1>
                        <p className="text-4xl font-bold mt-4 nanum-brush drop-shadow-2xl">
                            Curious about our farm? Want to visit?
                        </p>
                        <p className="text-3xl font-bold mt-4 nanum-brush drop-shadow-2xl">
                            Have a question about our wedding venue?
                        </p>
                    </div>
                    <div className="flex flex-col mt-20 md:flex-row md:space-x-6 max-w-4xl mb-12 mx-auto p-5">
                        <div className="">
                            <Image src={'/pallet.webp'} objectFit='cover' width="400px" height="500px" />
                        </div>
                        <form
                            className="flex flex-col gap-3 md:w-1/2 justify-center"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden">
                                <label>
                                    Don’t fill this out if you're human: <input name="bot-field" />
                                </label>
                            </p>
                            <p>
                                <label className="block font-cinzel text-black font-bold" htmlFor="yourname">
                                    Your Name:
                                </label>
                                <input
                                    className="cinzel shadow-sm border border-gray-300 rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring"
                                    required={true}
                                    type="text"
                                    name="name"
                                    id="yourname"
                                    placeholder="John Doe"
                                />
                            </p>
                            <p>
                                <label className="block font-cinzel text-black font-bold" htmlFor="youremail">
                                    Your Email:
                                </label>
                                <input
                                    className="cinzel shadow-sm border border-gray-300 rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring"
                                    name="email"
                                    required={true}
                                    type="email"
                                    id="youremail"
                                    placeholder="robert@sovfarms.com"
                                />
                            </p>
                            <p>
                                <label className="block font-cinzel text-black font-bold" htmlFor="yourmessage">
                                    What can we do for you?
                                </label>
                                <textarea
                                    className="cinzel shadow-sm border border-gray-300 rounded py-2 px-3 mt-1 block w-full form-textarea outline-none required focus:ring"
                                    name="message"
                                    id="yourmessage"
                                    placeholder="I would love to visit your farm!"
                                ></textarea>
                            </p>
                            <p className="mt-3">
                                <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit">
                                    Send
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;