'use client'
import Link from "next/link";
import Main from "./components/Main";

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
			<main className="flex flex-col row-start-2 pt-40 sm:items-start">
				<Main />
				<div className="max-w-[500px] pt-40">
					<h2 className="text-xl font-bold text-[#A91D3A]">Who Am I!</h2>
					<p>
						I am <span className="text-[#A91D3A]">Naing Aung Linn</span>, a Senior PHP Developer with over six years of experience in full-stack web development. 
					   	I specialize in <span className="bg-white text-black">PHP, JavaScript, Laravel, and React</span>, with a strong focus on creating efficient and scalable web applications. 
					   	I am passionate about learning new technologies and continuously improving my skills to <span className="bg-white text-black">deliver high-quality solutions</span>....
					</p>
				</div>
			</main>
		</div>
	);
}
