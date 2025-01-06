'use client'
import Link from "next/link";
import Main from "./components/Main";
import Image from "next/image";
import Header from "./components/Header";
import Description from "./components/Description";

export default function Home() {
		
	return (
		<div className="min-h-screen pt-1 p-8 pb-20 gap-16 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col row-start-2 gap-8 pt-40 sm:items-start relative">
				<Main />
				<Description />
				<div className="absolute right-0 top-20 z-0">
					<Image 
						src={'/image/01.jpeg'}
						width={600}
						height={600}
						alt="working"
						className="w-full h-[38em]"
					/>
				</div>
			</main>
		</div>
	);
}
