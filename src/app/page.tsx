import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<div>
				<h1 className="font-jost text-5xl uppercase">Naing Aung Linn</h1>
				<p>Developer Out Of The Box</p>
			</div>
			<div>
				<h2 className="text-2xl">Information</h2>
				<ul>
					<li>+959440410393</li>
					<li>naingaunglinn369@gmail.com</li>
					<li><FaGithub className="inline mr-2" /><Link href="https://github.com/naingaunglinn" className="text-blue-600">Naing Aung Linn | Github</Link></li>
				</ul>
			</div>
		</main>
    </div>
  );
}
