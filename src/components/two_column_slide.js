import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnSlide = ({ imageSrc, tittle, text, logo }) => {
    const slideRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const slide = slideRef.current;
        const image = imageRef.current;
        const content = contentRef.current;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        timeline
            .from(image, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            .from(content, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5");

        gsap.to(image, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: slide,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={slideRef} className="relative w-full py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    <motion.div 
                        ref={imageRef}
                        className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="aspect-[4/3]">
                            <img
                                src={imageSrc}
                                alt={tittle || "Slide image"}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <div ref={contentRef} className="w-full md:w-1/2 space-y-8">
                        {logo && (
                            <div className="w-32 h-32 mx-auto md:mx-0">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        
                        {tittle && (
                            <motion.h2 
                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {tittle}
                            </motion.h2>
                        )}
                        
                        <motion.div 
                            className="prose prose-lg prose-invert max-w-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-gray-300 leading-relaxed text-center md:text-left">{text}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnSlide;