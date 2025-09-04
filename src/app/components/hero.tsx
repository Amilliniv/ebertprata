import Image from "next/image"
import ebertlogo from '../../../public/ebertlogo.png'
import villagelogo from '../../../public/villagelogo.png'
import { YoutubeIcon } from "lucide-react"

export function Hero(){
    return(
        <main id="home" className="bg-black">
            <div className="container py-6 px-4 mx-auto pt-12">
                <div className="flex flex-col items-center text-white bg-gradient-to-t from-[#021744] to-black space-y-6 py-6 px-4 md:space-y-12 md:w-4/5 mx-auto">
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold lg:text-3xl">PRÓXIMA PARTIDA</h2>
                        <h3 className="text-sm font-bold text-yellow-400 lg:text-lg">06/09/2025 • 17:20 • Ginásio Municipal Ademar Garrincha</h3>
                    </div>

                    <div className="flex flex-col items-center space-y-2 lg:space-x-16 lg:flex-row">
                        <div className="flex flex-col gap-3">
                            <div>
                                <Image
                                    src={ebertlogo}
                                    alt="Logo do Time 1"
                                    className="object-contain"
                                    quality={100}
                                    width={121}
                                    height={95}
                                    priority
                                />
                            </div>
                            <h2 className=" text-lg text-center font-bold"> Ebert Prata</h2>

                        </div>

                        <h2 className="text-3xl font-bold text-yellow-400">
                            VS
                        </h2>

                        <div className="flex flex-col gap-3">
                            <div>
                                <Image
                                    src={villagelogo}
                                    alt="Logo do Time 1"
                                    className="object-contain"
                                    quality={100}                                    
                                    width={128}
                                    height={100}
                                    priority
                                />
                            </div>
                            <h2 className=" text-lg text-center font-bold">Village Boys</h2>

                        </div>

                        
                    </div>
                    <div>
                        <a href="https://www.youtube.com/@KoreiaEsportes/streams" target="_blank" className="bg-red-500 py-2 px-4 flex items-center justify-center gap-2  rounded-md w-fit font-semibold hover:scale-110 duration-300">
                            < YoutubeIcon className='w-5 h-5' />
                            ASSISTIR TRANSMISSÃO
                        </a>
                    </div>

                </div>
            </div>
        </main>
    )
}