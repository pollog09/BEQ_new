import React from 'react';

const TwoColumnSlideStacked = ({ slides, title, titleImageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-1/2 text-center md:text-left md:pr-12 mb-12 md:mb-0">
        {titleImageSrc ? (
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={titleImageSrc} 
              alt="Title" 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
        )}
      </div>
      <div className="w-full md:w-1/2 space-y-12">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center gap-6 bg-black bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition-all duration-300"
          >
            <div className="w-32 h-32 flex-shrink-0">
              <img 
                src={slide.imageSrc} 
                alt={slide.alt} 
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{slide.title}</h3>
              <p className="text-gray-300">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoColumnSlideStacked;