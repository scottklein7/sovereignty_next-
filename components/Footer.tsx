import Link from "next/link"

function Footer() {
    const d = new Date()
    let year = d.getFullYear()
    return (
        <footer className="py-12 flex flex-col gap-5 items-center text-center text-emerald-500 bg-sky-100">
            <div className="flex flex-col text-lg gap-2 font-bold group-hover: md:flex-row md:space-x-5 md:gap-0">
                <Link href="/contact">
                    <a className="hover:text-emerald-800">Contact Us!</a>
                </Link>
                <Link href="/blog">
                    <a className="hover:text-emerald-800">Blog</a>
                </Link>
                <Link href="/weddingphotos">
                    <a className="hover:text-emerald-800">Wedding Photos</a>
                </Link>
                <Link href="/https://calendly.com/sovereigntyfarms/wedding-venue-meeting?month=2023-01">
                    <a className="hover:text-emerald-800">Wedding Consult</a>
                </Link>
            </div>
            <p>Copyright &copy; <span>{year}</span> Sovereignty Farms All Rights Reserved</p>
        </footer>
    )
}

export default Footer