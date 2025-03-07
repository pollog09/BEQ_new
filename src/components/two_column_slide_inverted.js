import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnSlideInverted = ({ imageSrc, title1, text1, title2, text2 }) => {
    const slideRef = useRef(null);

    useEffect(() => {
        const slide = slideRef.current;
        gsap.fromTo(
            slide,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: slide,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div ref={slideRef} className="flex flex-col md:flex-row items-center justify-center w-full py-16 px-4 md:px-8 lg:px-16">
            <div className="w-full md:w-1/2 space-y-12 mb-12 md:mb-0 md:pr-12">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">{title1}</h2>
                    <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left">{text1}</div>
                </div>
                
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">{title2}</h2>
                    <div className="text-gray-300 text-lg leading-relaxed text-center md:text-left">{text2}</div>
                </div>
            </div>
            
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                        src={imageSrc} 
                        alt="Section" 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default TwoColumnSlideInverted;