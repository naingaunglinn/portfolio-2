import MainText from "./components/MainText";
// import Image from "next/image";

export default function Home() {
    return (
        <div className="mx-8 my-4">
            <div className="w-full h-[280px] bg-black grid grid-cols-12 grid-rows-5">
                <div className="uppercase  col-start-2 col-end-6 row-start-2 row-span-2row-start-2 row-span-3">
                    <p className="text-5xl font-bold"><span className="bg-white text-black px-2">Naing Aung Linn</span></p>
                    <p className="text-xl font-bold my-5"><span className="bg-white text-black px-2">programpher</span></p>
                </div>
                {/* <div className="uppercase col-start-7 col-end-12">
                    <p>Come to my life. <br/> I have great books.</p>
                </div> */}
                {/* <MainText /> */}
            </div>
        </div>
    );
}
