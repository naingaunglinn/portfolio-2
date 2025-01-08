import Image from "next/image";

const project = () => {
    return (
        <div className="grid gap-10">
            <h1 className="text-[100px] font-bold font-jost leading-[1.15]">
                Projects <span className="text-[#A91D3A]">02</span> 
            </h1>
            <div className="flex bg-black dark:bg-white">
                <div className="p-10 text-white dark:text-black">
                    <h2 className="text-[60px]">FMG Car Rental</h2>
                    <ul className="list list-disc px-5">
                        <li>Developed a robust admin dashboard using Laravel, hosted on Azure for scalability and reliability.</li>
                        <li>Implemented features like contract creation, quotation generation, product management, and payment tracking.</li>
                        <li>Designed a user-friendly interface to streamline car rental operations and improve efficiency.</li>
                        <li>Ensured data security and optimized management of rental transactions and customer information.</li>
                    </ul>
                </div>
                <div>
                    <Image 
                        src={'/image/01.jpeg'}
                        width={600}
                        height={600}
                        alt="working"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex bg-black dark:bg-white">
                <div>
                    <Image 
                        src={'/image/01.jpeg'}
                        width={600}
                        height={600}
                        alt="working"
                        className="w-full"
                    />
                </div>
                <div className="p-10 text-white dark:text-black">
                    <h2 className="text-[60px]">Horse Support System</h2>
                    <ul className="list list-disc px-5">
                        <li>Developed a responsive interface with React, enhancing user engagement by 35%.</li>
                        <li>Optimized data handling for 1M+ records with PostgreSQL, improving query speed by 50%.</li>
                        <li>Designed a user-friendly interface to streamline car rental operations and improve efficiency.</li>
                        <li>Ensured data security and optimized management of rental transactions and customer information.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default project;