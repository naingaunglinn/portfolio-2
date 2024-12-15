import MainText from "./components/MainText";
// import Quoted from "./components/Quoted";
// import Image from "next/image";

export default function Home() {
    const text = {
        name: 'Naing Aung Linn',
        bio: 'Programpher'
    }
    // const quote = "Don't try to be someone who achieves for others.Try to be someone who deserves the achievement."

    return (
        <div className="mx-8 my-4">
            <div className="w-full h-[280px] bg-black grid grid-cols-12 grid-rows-6 overflow-hidden">                
                <MainText text={text} />
            </div>
        </div>
    );
}
