import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FullWidthImage = ({ image }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { 
        opacity: 0,
        scale: 0.95
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center bg-black py-12 md:py-24"
    >
      <div className="w-full max-w-4xl px-4 md:px-8">
        <img
          ref={imgRef}
          src={image}
          alt="Full Width"
          className="w-full h-auto object-contain opacity-0"
        />
      </div>
    </div>
  );
};

export default FullWidthImage;