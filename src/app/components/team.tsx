'use client'

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
    id: number;
    src: string;
    alt: string;
}


const team: ImageItem[] = [
    {
        id: 1,
        src: '/atleta-1.jpg',
        alt: 'Atleta 1'
    },
    {
        id: 2,
        src: '/atleta-2.jpg',
        alt: 'Atleta 2'
    },
    {
        id: 3,
        src: '/atleta-3.jpg',
        alt: 'Atleta 3'
    },
    {
        id: 4,
        src: '/atleta-4.jpg',
        alt: 'Atleta 4'
    },
    {
        id: 5,
        src: '/atleta-5.jpg',
        alt: 'Atleta 5'
    },
    {
        id: 6,
        src: '/atleta-6.jpg',
        alt: 'Atleta 6'
    },
    {
        id: 7,
        src: '/atleta-7.jpg',
        alt: 'Atleta 7'
    },
    {
        id: 8,
        src: '/atleta-8.jpg',
        alt: 'Atleta 8'
    },
    {
        id: 9,
        src: '/atleta-9.jpg',
        alt: 'Atleta9'
    },
    {
        id: 10,
        src: '/atleta-10.jpg',
        alt: 'Atleta 10'
    },
    {
        id: 11,
        src: '/atleta-11.jpg',
        alt: 'Atleta 11'
    }
]

export function Team() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 1 }
        }
    })
    
    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section id="team" className='bg-black py-16'>
            <div className='container mx-auto px-4'>
                <h2 className='text-white text-4xl text-center font-bold mb-14'>
                    Elenco
                </h2>
                
                <div className='relative'>
                    
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {team.map((image) => (
                                <div 
                                    key={image.id} 
                                    className='flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-2'
                                >
                                    <div className='relative aspect-square overflow-hidden rounded-lg shadow-lg hover:border-blue-700'>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className='object-contain hover:scale-105 transition-transform duration-300'
                                            sizes='(max-width: 768px) 100vw, 33vw'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                  
                    <button
                        onClick={scrollPrev}
                        className='absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10'
                        aria-label='Imagem anterior'
                    >
                        <ChevronLeft className='w-6 h-6 text-black' />
                    </button>
                    
                    <button
                        onClick={scrollNext}
                        className='absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10 hover:border-red-600'
                        aria-label='Próxima imagem'
                    >
                        <ChevronRight className='w-6 h-6 text-black' />
                    </button>
                </div>
            </div>
        </section>
    )
}