import Link from "next/link"

function Footer() {
    const d = new Date()
    let year = d.getFullYear()
    return (
        <footer className="py-10 flex flex-col gap-5 items-center text-emerald-500 bg-sky-100">
            <div className="flex space-x-5 text-lg font-bold group-hover:">
                <Link href="/animals/cattle">
                    <a className="hover:text-emerald-800">Cattle</a>
                </Link> 
                <Link href="/animals/chicken">
                    <a className="hover:text-emerald-800">Chicken</a>
                </Link>
                <Link href="/animals/sheep">
                    <a className="hover:text-emerald-800">Sheep</a>
                </Link>
                <Link href="/contact">
                    <a className="hover:text-emerald-800">Contact Us!</a>
                </Link>
                <Link href="/blog">
                    <a className="hover:text-emerald-800">Blog</a>
                </Link>
            </div>
            <p>Copyright &copy; <span>{year}</span> Sovereignty Farms All Rights Reserved</p>
        </footer>
    )
}

export default Footer