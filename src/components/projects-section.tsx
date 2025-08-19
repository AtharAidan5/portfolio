import Image from "next/image"
import StudentFoods from "@/assets/StudentFoods.png"
import HarmonyHub from "@/assets/HarmonyHub.png"

export const ProjectsSection = () => {
    return (
        <section id="project" className="pt-16">
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl">Projects</h2>
                        <p className="font-medium text-md mb-4 md:text-lg">This are all my projects I have done so far throughout
                            the years</p>
                    </div>
                </div>
                <div className="text-center w-full flex-col flex md:flex-row gap-8 justify-center xl:w-10/12 xl:mx-auto">
                    <div
                        className="bg-white rounded-lg hover:bg-[#404040] hover:text-white hover:scale-105 hover:shadow-lg transition-all mb-12 p-4 md:w-1/2">
                        <div className="rounded-md overflow-hidden">
                            <a href="https://github.com/ArifOmarr/FoodsStudents">
                                <Image src={StudentFoods} alt="StudentFoods" className="object-center w-full h-full"/>
                            </a>
                        </div>
                        <h3 className="font-semibold text-xl mt-5 mb-3">
                            Student Foods
                        </h3>
                        <p className="font-medium text-justify">StudentFoods is an app where students are able to order food
                            with a student friendly price.</p>
                    </div>
                    <div
                        className="bg-white rounded-lg hover:bg-[#404040] hover:text-white hover:scale-105 hover:shadow-lg transition-all mb-12 p-4 md:w-1/2">
                        <a
                            href="https://www.figma.com/design/Yz0brZ3fY9DnRXI6pFrKXl/Untitled?node-id=0-1&t=vanq4didsdaRtRUA-1">
                            <div className="rounded-md overflow-hidden">
                                <Image src={HarmonyHub} alt="HarmonyHub" className="object-center w-full h-full"/>
                            </div>
                        </a>
                        <h3 className="font-semibold text-xl mt-5 mb-3">
                            HarmonyHub Malaysia
                        </h3>
                        <p className="font-medium text-justify">HarmonyHub Malaysia is an app where users can learn more
                            about the Malaysian culture in a fun and enjoyable way.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}