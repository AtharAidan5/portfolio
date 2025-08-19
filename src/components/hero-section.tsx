import Image from "next/image"
import Athar from "@/assets/Athar-Cretivox.png"

export const HeroSection = () => {
    return (
        <section id="home" className="flex justify-center w-full h-screen pt-36">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap xl:w-10/12 xl:mx-auto">
                    <div className="w-full self-center lg:items-center lg:justify-center lg:w-1/2">
                        <h1 className="text-base font-medium md:text-xl mb-3">
                            <span className="block text-3xl">Hello World, I'm</span>
                            <span className="font-bold text-3xl mb-5 max-w-md lg:text-4xl">Syafi Athar Aidan</span>
                        </h1>
                        <h2 className="font-medium text-lg mb-5 lg:text-2xl text-[#000000]">
                            Student | Intern | Software Engineer
                        </h2>
                        <p className="font-medium mb-10 leading-relaxed text-justify max-w-xl">I build responsive,
                            high‑performance
                            web interfaces using HTML, CSS, and JavaScript. Crafting intuitive user experiences that
                            delight
                            and convert.</p>
                        <a href="#clients" className="hover:scale-110 transition-all text-base font-semibold text-[#ffffff] bg-[#808080] py-3 px-8 rounded-full 
                    hover:shadow-lg hover:text-[#404040] hover:bg-[#ffffff] hover:border-[#404040] border-2 ease-in-out
                    duration-200">Contact Me</a>
                    </div>
                    <div className="w-full self-end lg:w-1/2">
                        <div className="relative mt-10">
                            <Image src={Athar} alt="Athar" className="mx-auto w-96 h-max" />
                            <span className="absolute -bottom-40 -z-10 left-50 xl:left-20 -translate-x-1/2">
                                <svg viewBox="0 0 200 200" className="w-[1000px] h-[800px] xl:ml-80 xl:w-[770px] xl:h-[900px] mx-auto"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#404040"
                                        d="M33.1,-56.4C44.2,-50.9,55.5,-44.7,62.7,-35.2C69.8,-25.7,72.9,-12.8,72.6,-0.2C72.4,12.5,68.7,25,61.6,34.6C54.5,44.3,43.9,51,33.1,58C22.2,64.9,11.1,72.1,-2.5,76.4C-16,80.6,-32.1,82,-43.2,75.2C-54.2,68.4,-60.3,53.3,-62.3,39.4C-64.3,25.5,-62.3,12.8,-61.9,0.2C-61.5,-12.3,-62.8,-24.6,-59.4,-36.3C-56.1,-47.9,-48.2,-58.8,-37.5,-64.6C-26.8,-70.3,-13.4,-70.9,-1.2,-68.8C11,-66.7,22,-61.9,33.1,-56.4Z"
                                        transform="translate(100 100)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}