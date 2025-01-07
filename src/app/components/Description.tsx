import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const description = () => {
    return (
        <div className="max-w-[500px] z-10">
            <h2 className="text-xl font-bold text-reddish">Who Am I!</h2>
            <p className="text-justify">
                A Senior Developer with over six years of experience in full-stack web development. 
                I specialize in <span className="bg-white text-black">PHP, JavaScript, Laravel, and React</span>, with a strong focus on creating efficient and scalable web applications. 
                I am passionate about learning new technologies and continuously improving my skills to <span className="bg-white text-black">deliver high-quality solutions</span>....
            </p>
            <br/>
            <Link href={'https://github.com/naingaunglinn'} target="_blank" className="flex items-center flex-wrap underline underline-offset-2 hover:text-reddish"><FaGithub className="mr-2"/> https://github.com/naingaunglinn</Link>
            <Link href={'https://www.linkedin.com/in/naing-aung-linn'} target="_blank" className="flex items-center flex-wrap underline underline-offset-2 text-bluish hover:text-reddish"><FaLinkedin className="mr-2"/> https://www.linkedin.com/in/naing-aung-linn</Link>
        </div>
    )
}

export default description;