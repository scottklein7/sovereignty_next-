import Image from 'next/image'
import { Fade } from "react-awesome-reveal"
const cow = "/assets/Cow.jpeg"
const chicken = "/assets/chicken.jpeg"
const sheep = "/assets/sheep.jpeg"

function AnimalsWeb() {
    return (
        <>
            <article className="flex flex-col md:flex-row mt-10 items-center justify-center p-10 gap-5">
                <div>
                    <Fade direction="top-right" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={cow}
                            alt='main farm image'
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
                <div className="md:w-1/2 ">
                    <Fade direction="top-left" triggerOnce>
                        <p className="text-center text-xl text-green-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla quibusdam sed sapiente commodi tempore saepe ab inventore porro repudiandae, animi temporibus assumenda incidunt officiis quam! Ea animi sed itaque.</p>
                    </Fade>
                </div>
                <div>
                    <Fade direction="top-left" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={chicken}
                            alt='main farm image'
                        />
                    </Fade>
                </div>
            </article>

            <article className="flex flex-col md:flex-row mt-10 items-center justify-center p-10 gap-5">
                <div>
                    <Fade direction="top-right" triggerOnce>
                        <Image
                            width={700}
                            height={400}
                            src={sheep}
                            alt='main farm image'
                        />
                    </Fade>
                </div>
                <div className="md:w-1/2 ">
                    <Fade direction="top-right" triggerOnce>
                        <p className="text-center text-xl text-green-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nulla quibusdam sed sapiente commodi tempore saepe ab inventore porro repudiandae, animi temporibus assumenda incidunt officiis quam! Ea animi sed itaque.</p>
                    </Fade>
                </div>
            </article>
        </>
    )
}

export default AnimalsWeb