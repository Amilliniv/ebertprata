import { InstagramIcon, YoutubeIcon } from "lucide-react";



export function Contact(){
    return(
        <footer id="contact" className="bg-gradient-to-t from-[#021744] to-black mx-auto">

            <div className="container px-4 py-8 mx-auto text-white flex flex-col space-y-16">

                <h2 className="text-center text-3xl font-bold">Entre em contato <br />com a <b className="text-yellow-400">nossa equipe</b></h2>

                <div className="grid grid-cols-1 text-center md:grid-cols-2 space-y-12">

                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold">Redes Sociais</h3>
                            
                           <div className="flex flex-col gap-5 text-yellow-400">
                            <a href="https://www.instagram.com/ebertprata/" target='_blank' className="flex items-center justify-center gap-2">
                                < InstagramIcon className="w-7 h-7 text-white"/>
                                Nosso Instagram
                            </a>

                            <a href="https://www.youtube.com/@KoreiaEsportes" target="_blank" className="flex items-center justify-center gap-2">
                                < YoutubeIcon className="w-8 h-7 text-white"/>
                                Próximos Jogos
                            </a>
                        </div> 
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold ">Quem fez esse site?</h3>
                            
                           <div className="flex flex-col gap-5 text-yellow-400">
                            <a href="https://www.instagram.com/_vl.lima/" target="_blank" className="flex items-center justify-center gap-2">
                                < InstagramIcon className="w-7 h-7 text-white"/>
                                Vinícius Lima - Web Dev
                            </a>

                            <a href="https://www.instagram.com/designerg77/" target="_blank" className="flex items-center justify-center gap-2">
                                < InstagramIcon className="w-7 h-7 text-white"/>
                                Gustavo Tristão - Design
                            </a>
                        </div> 
                    </div>

                </div>

            </div>

        </footer>
    )
}