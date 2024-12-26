'use client'
import { useEffect } from "react";
import Project from "./components/Project";
import Main from "./components/Main";

export default function Home() {
	useEffect( () => {

		(
		  async () => {
			  const LocomotiveScroll = (await import('locomotive-scroll')).default
			  const locomotiveScroll = new LocomotiveScroll();
		  }
		)()
	  }, [])
		
	return (
		<div className="grid grid-rows-[20px_1fr_20px] justify-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Main />
				<Project />
			</main>
		</div>
	);
}
