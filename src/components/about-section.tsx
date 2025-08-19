export const AboutSection = () => {
    return (
        <section id="about" className="pt-80 lg:pt-16 pb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap xl:w-10/12 xl:mx-auto">
                    <div className="w-full mb-10 lg:w-1/2">
                        <h4 className="text-3xl lg:text-5xl font-bold mb-5">About Me</h4>
                        <p className="text-justify font-medium max-w-xl">Hello Readers! My name is Syafi Athar Aidan, a
                            front-end
                            developer
                            specializing in Tailwind CSS & Next JS from Depok, Indonesia. I love bringing clean,
                            accessible
                            interfaces to life, crafting performance optimized code that feels smooth on any device. I
                            enjoy
                            learning new animation libraries and exploring the why behind good UX design.</p>
                    </div>
                    <div className="w-full">
                        <h2 className="font-bold text-3xl mb-5 text-[#404040]">Let's get to know with each other more</h2>
                        <div className="flex">
                            <a href="https://www.instagram.com/atharaidann" target="_blank"
                                className="mr-4 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-[#404040] hover:text-white">
                                <svg role="img" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                                    className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                    <title>Instagram</title>
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.904.336 4.142.598c-.762.262-1.41.61-2.058 1.258C1.61 2.904 1.262 3.552 1 4.314c-.262.762-.467 1.629-.526 2.91C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.264 2.148.526 2.91.262.762.61 1.41 1.258 2.058.648.648 1.296.996 2.058 1.258.762.262 1.629.467 2.91.526C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.148-.264 2.91-.526.762-.262 1.41-.61 2.058-1.258.648-.648.996-1.296 1.258-2.058.262-.762.467-1.629.526-2.91.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.264-2.148-.526-2.91-.262-.762-.61-1.41-1.258-2.058-.648-.648-1.296-.996-2.058-1.258-.762-.262-1.629-.467-2.91-.526C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/syafi.atharaidan" target="_blank"
                                className="mr-4 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-[#404040] hover:text-white">
                                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="fill-current" width="32"
                                    height="32" xmlns="http://www.w3.org/2000/svg">
                                    <title>Facebook</title>
                                    <path
                                        d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/syafi-athar-aidan-7a1664263/" target="_blank"
                                className="mr-4 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-[#404040] hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://github.com/AtharAidan5" target="_blank"
                                className="mr-4 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-[#404040] hover:text-white">
                                <svg role="img" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"
                                    className="inline" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub</title>
                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}