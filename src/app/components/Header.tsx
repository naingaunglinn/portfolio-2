import Link from "next/link";

const header = () => {
    return (
        <header className="text-left font-jost text-xl max-w-[500px]">
            <div className="flex justify-between">
                <div><Link href='#' className="hover:text-reddish">Home</Link></div>
                <div><Link href='#projects' className="hover:text-reddish" passHref>Projects</Link></div>
                <div><Link href='#experience' className="hover:text-reddish">Experience</Link></div>
                <div><Link href='#profile' className="hover:text-reddish">Profile</Link></div>
                <div><Link href={'/museum'} className="hover:text-reddish">Museum</Link></div>
            </div>
        </header>
    )
}

export default header;