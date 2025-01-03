'use client'
import Link from "next/link";
import Main from "./components/Main";

export default function Home() {
		
	return (
		<div className="grid grid-rows-[20px_1fr_20px] justify-start min-h-screen pt-1 p-8 pb-20 gap-16 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
			<header className="text-left font-jost text-2xl">
				<div className="flex justify-between">
					<div><Link href='#' className="hover:text-[#A91D3A]">Home</Link></div>
					<div><Link href='#projects' className="hover:text-[#A91D3A]">Projects</Link></div>
					<div><Link href='#experience' className="hover:text-[#A91D3A]">Experience</Link></div>
					<div><Link href='#profile' className="hover:text-[#A91D3A]">Profile</Link></div>
				</div>
			</header>
			<main className="flex flex-col gap-8 row-start-2 items-center pt-20 sm:items-start">
				<Main />
			</main>
		</div>
	);
}
