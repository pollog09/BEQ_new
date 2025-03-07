import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BgImgSlide = ({ img, text, title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{title}</h2>
        <div className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto">{text}</div>
      </div>
    </div>
  );
};

export default BgImgSlide;