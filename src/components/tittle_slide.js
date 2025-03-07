import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const TittleSlide = ({ tittle, text }) => {
  const titleRef = useRef(null);
  const gearRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.to(gearRef.current, { rotation: 360, repeat: -1, duration: 2, ease: "linear" });
  }, []);

  return (
    <div className="relative h-screen w-full bg-cover bg-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 ref={titleRef} className="text-white text-5xl md:text-5xl font-bold flex items-center text-center">
          {tittle}
        </h1>
        <br />
        <br />
        <p className="text-white text-2xl md:text-2xl text-center">{text}</p>
      </div>
    </div>
  );
};

export default TittleSlide;