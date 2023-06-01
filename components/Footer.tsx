import Link from "next/link"

function Footer() {
    const d = new Date()
    let year = d.getFullYear()
    return (
        <footer className="font-cinzel font-extrabold py-12 items-center text-center text-white bg-sky-100" style={{ backgroundImage: 'url("/dinnerbarn.webp")', backgroundSize: 'cover' }}>
            <div className="flex flex-col gap-5 bg-black bg-opacity-20">
                <div className=" flex gap-5 md:gap-10 items-center justify-center">
                    <p className="text-lg uppercase drop-shadow-2xl">Sovereignty Farms <br /> in the Rolling Hills <br /> of the Shenandoah</p>
                    <div className="flex flex-col text-lg gap-2 group-hover:md:flex-row  md:gap-0">
                        <Link href="/contact">
                            <a className="drop-shadow-2xl hover:text-emerald-800">Contact Us!</a>
                        </Link>
                        <Link href="/blog">
                            <a className="drop-shadow-2xl hover:text-emerald-800">Blog</a>
                        </Link>
                        <Link href="/weddingphotos">
                            <a className="drop-shadow-2xl hover:text-emerald-800">Wedding Photos</a>
                        </Link>
                        <Link href="/https://calendly.com/sovereigntyfarms/wedding-venue-meeting?month=2023-01">
                            <a className="drop-shadow-2xl hover:text-emerald-800">Wedding Consult</a>
                        </Link>
                    </div>
                </div>
                <p className="drop-shadow-2xl font-extrabold">Copyright &copy; <span>{year}</span> Sovereignty Farms All Rights Reserved</p>
            </div>
        </footer>

    )
}

export default Footer