export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<div className="relative">
				<h1 className="text-[110px] font-bold font-jost leading-[1.15] ">Naing <span className="text-[#A91D3A]">Aung</span> Linn</h1>
				<p className="absolute bottom-0 left-[8px]">Developer Out Of The Box</p>
			</div>
		</main>
    </div>
  );
}
