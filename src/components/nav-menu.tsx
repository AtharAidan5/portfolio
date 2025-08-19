import Image from "next/image"
import logo from "@/assets/AV.png"

export const NavMenu = () => {
    return (
        //
        <header className="bg-transparent backdrop-blur-lg fixed top-0 left-0 w-full z-50 border-b">
            <div className="container mx-auto">
                <div className="flex items-center justify-between relative xl:w-10/12 xl:mx-auto bg-white lg:bg-transparent">
                    <div className="flex items-center px-4">
                        <a href="https://www.instagram.com/atharaidann"
                            className="hover:scale-110 transition-all hover:text-[#000000] font-bold text-[#404040] ease-in-out block py-6">
                            <Image src={logo} alt="Logo" width={50} height={50} className="w-10 h-10 inline-block"/>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button id="hamburger" name="hamburger" type="button"
                            className="block absolute right-4 z-50 transition-transform duration-300 lg:hidden">
                            <span className="w-[30px] h-[2px] my-1.5 block bg-[#000000]"></span>
                            <span className="w-[30px] h-[2px] my-1.5 block bg-[#000000]"></span>
                            <span className="w-[30px] h-[2px] my-1.5 block bg-[#000000]"></span>
                        </button>
                        <nav id="nav-menu"
                            className="hidden absolute backdrop-blur-lg shadow-lg rounded-lg right-0 top-full z-40 w-full h-screen md:h-full lg:block lg:static lg:shadow-none lg:rounded-none">
                            <ul className="flex flex-col text-6xl font-bold xl:text-sm h-full bg-white xl:bg-transparent space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
                                <li><a href="#home"
                                    className="block py-3 px-4 hover:scale-105 transition-all hover:bg-gray-100 rounded">Home</a>
                                </li>
                                <li><a href="#about"
                                    className="block py-3 px-4 hover:scale-105 transition-all hover:bg-gray-100 rounded">About</a>
                                </li>
                                <li><a href="#project"
                                    className="block py-3 px-4 hover:scale-105 transition-all hover:bg-gray-100 rounded">Projects</a>
                                </li>
                                <li><a href="#skill"
                                    className="block py-3 px-4 hover:scale-105 transition-all hover:bg-gray-100 rounded">Skills</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )

}