function Contact() {
    return (
        <div className="bg-black bg-opacity-40 p-5 rounded-md cinzel">
            <div className="flex flex-col p-10 gap-5 md:text-center text-white">
                <h1 className="font-bold text-4xl text-center">Contact Us</h1>
                <p className="text-2xl font-bold">Curious about our farm? Want to visit? Have a question about our products?</p>
            </div>
            <div className="">
                <form className="flex flex-col font-white gap-5" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/">
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
                        <label className="block text-white font-bold" htmlFor="youremail">
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
                        <label className="block text-white font-bold" htmlFor="yourmessage">
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
                        <button
                            className="w-full shadow bg-emerald-400 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                            type="submit"
                        >
                            Send
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Contact