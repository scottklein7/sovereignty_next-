import Image from 'next/image'
import { Fade } from "react-awesome-reveal"
const cow = "/assets/Cow.jpeg"
const chicken = "/assets/chicken.jpeg"
const sheep = "/assets/sheep.jpeg"

function AnimalsMobile() {
    return (
        <>
        <div className="text-xl">
            <article className="flex flex-col md:flex-row mt-5 items-center justify-center p-10 gap-5">
                <div>
                    <Fade direction="top-right" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={cow}
                            alt='home page cow picture'
                        />
                    </Fade>
                </div>
                <div className="md:w-1/2 ">
                    <Fade direction="top-right" triggerOnce>
                        <p className="text-center text-xl text-green-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla quibusdam sed sapiente commodi tempore saepe ab inventore porro repudiandae, animi temporibus assumenda incidunt officiis quam! Ea animi sed itaque.</p>
                    </Fade>
                </div>
            </article>

            <article className="flex flex-col md:flex-row mt-10 items-center justify-center p-10 gap-5">
                <div>
                    <Fade direction="top-left" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={chicken}
                            alt='home page chicken image'
                        />
                    </Fade>
                </div>
                <div className="md:w-1/2 ">
                    <Fade direction="top-left" triggerOnce>
                        <p className="text-center text-xl text-green-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla quibusdam sed sapiente commodi tempore saepe ab inventore porro repudiandae, animi temporibus assumenda incidunt officiis quam! Ea animi sed itaque.</p>
                    </Fade>
                </div>
            </article>

            <article className="flex flex-col md:flex-row mt-10 items-center justify-center p-10 gap-5">
                <div>
                    <Fade direction="top-left" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={sheep}
                            alt='home page sheep image'
                        />
                    </Fade>
                </div>
                <div className="md:w-1/2 ">
                    <Fade direction="top-left" triggerOnce>
                        <p className="text-center text-xl text-green-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla quibusdam sed sapiente commodi tempore saepe ab inventore porro repudiandae, animi temporibus assumenda incidunt officiis quam! Ea animi sed itaque.</p>
                    </Fade>
                </div>
            </article>
        </div>

        </>
    )
}

export default AnimalsMobile