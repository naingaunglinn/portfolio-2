'use client'
import Main from "./components/Main";
import Image from "next/image";
import Header from "./components/Header";
import Description from "./components/Description";
import Project from "./components/Project";

export default function Home() {
		
	return (
		<div>
			<div className="min-h-screen pt-1 p-8 pb-20 gap-16 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
				<Header />
				<div className="flex flex-col row-start-2 gap-8 pt-40 sm:items-start relative">
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
						<div className="absolute max-w-[400px] bottom-[2rem] left-[2rem] p-5 backdrop-blur-sm bg-white/30">
							<p className="text-justify font-bold">
								- Weekend, Journey <br/>
								- May 13, 2023
							</p>
						</div>
					</div>
				</div>		
			</div>
			<div id="projects" className="min-h-screen pt-1 p-8 pb-20 gap-16 sm:p-20 sm:pt-10 font-[family-name:var(--font-geist-sans)]">
				<Project />
			</div>
		</div>
	);
}
