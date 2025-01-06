import Link from "next/link";

const header = () => {
    return (
        <header className="text-left font-jost text-xl w-96">
            <div className="flex justify-between">
                <div><Link href='#' className="hover:text-[#A91D3A]">Home</Link></div>
                <div><Link href='#projects' className="hover:text-[#A91D3A]">Projects</Link></div>
                <div><Link href='#experience' className="hover:text-[#A91D3A]">Experience</Link></div>
                <div><Link href='#profile' className="hover:text-[#A91D3A]">Profile</Link></div>
            </div>
        </header>
    )
}

export default header;