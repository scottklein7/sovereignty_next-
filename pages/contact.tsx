
// import Footer from "../components/Footer"
// import { Nav } from "../components/Nav"

// function contact() {
//     return (
//         <>
//             <Nav />
//             <div className="p-10">
//                 <div className="flex flex-col p-10 gap-5 md:text-center">
//                     <h1 className="font-extrabold text-4xl text-center">Contact Us</h1>
//                     <p className="text-2xl font-thin">Curious about our farm? Want to visit? Have a question about our products?</p>
//                     <p className="text-2xl font-thin">Don't hesitate to reach out, even if your just saying hello!</p>
//                 </div>
//                 <form className="flex flex-col p-5 max-w-2xl mx-auto gap-5" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
//                     <input type="hidden" name="form-name" value="contact" />
//                     <p className="hidden">
//                         <label>
//                             Don’t fill this out if you’re human: <input name="bot-field" />
//                         </label>
//                     </p>
//                     <p>
//                         <label className="block" htmlFor="yourname">
//                             Your Name:
//                         </label>
//                         <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" required={true} type="text" name="name" id="yourname" placeholder="John Doe" />
//                     </p>
//                     <p>
//                         <label className="block" htmlFor="youremail">
//                             Your Email:
//                         </label>
//                         <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" name="email" required={true} type="email" id="youremail" placeholder="robert@sovfarms.com" />
//                     </p>
//                     <p>
//                         <label className="block" htmlFor="yourmessage">
//                             What can we do for you?
//                         </label>
//                         <textarea
//                             className="shadow border rounded py-2 px-3 mt-1 block w-full ring-sky-200 form-textarea outline-none required focus:ring" name="message" id="yourmessage" placeholder="I would love to visit your farm!"></textarea>
//                     </p>
//                     <p className="mt-3">
//                         <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer" type="submit">Send</button>
//                     </p>
//                 </form>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default contact