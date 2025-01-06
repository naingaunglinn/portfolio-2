'use client'
import Link from "next/link";
import Main from "./components/Main";
import Image from "next/image";

export default function Home() {
		
	return (
		<div className="min-h-screen pt-1 p-8 pb-20 gap-16 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
			<header className="text-left font-jost text-xl w-96">
				<div className="flex justify-between">
					<div><Link href='#' className="hover:text-[#A91D3A]">Home</Link></div>
					<div><Link href='#projects' className="hover:text-[#A91D3A]">Projects</Link></div>
					<div><Link href='#experience' className="hover:text-[#A91D3A]">Experience</Link></div>
					<div><Link href='#profile' className="hover:text-[#A91D3A]">Profile</Link></div>
				</div>
			</header>
			<main className="flex flex-col row-start-2 gap-8 pt-40 sm:items-start relative">
				<Main />
				<div className="max-w-[500px]">
					<h2 className="text-xl font-bold text-[#A91D3A]">Who Am I!</h2>
					<p className="text-justify">
						A Senior Developer with over six years of experience in full-stack web development. 
					   	I specialize in <span className="bg-white text-black">PHP, JavaScript, Laravel, and React</span>, with a strong focus on creating efficient and scalable web applications. 
					   	I am passionate about learning new technologies and continuously improving my skills to <span className="bg-white text-black">deliver high-quality solutions</span>....
					</p>
				</div>
				<div className="absolute right-0 top-0 z-0">
					<Image 
						src={'/image/01.jpeg'}
						width={600}
						height={600}
						alt="working"
						className="w-full h-[600px]"
					/>
				</div>
			</main>
		</div>
	);
}
