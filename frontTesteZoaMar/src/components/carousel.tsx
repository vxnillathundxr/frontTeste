import { useState, useEffect, ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselProps {
  children: ReactElement[]; // Tipagem para os slides como elementos React
  autoSlide?: boolean; // Auto slide é opcional e pode ser true/false
  autoSlideInterval?: number; // Intervalo do auto slide em milissegundos
}

const Carousel: React.FC<CarouselProps> = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]); // Adicionando autoSlide e autoSlideInterval como dependências

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft className="size-10" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight className="size-10"/>
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-1 md:p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


// import React, { ReactElement, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface CarouselProps {
//   children: ReactElement<HTMLImageElement>[]; // Defina children como ReactElement<HTMLImageElement>[]
// }

// const Carousel: React.FC<CarouselProps> = ({ children }) => {
//   const [curr, setCurr] = useState(0);

//   const images = React.Children.toArray(children) as ReactElement<HTMLImageElement>[];

//   const prev = () => {
//     setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
//   };

//   const next = () => {
//     setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// import React, { ReactElement, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface CarouselProps {
//   images: ReactElement<HTMLImageElement>[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [curr, setCurr] = useState(0);

//   const prev = () => {
//     setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
//   };

//   const next = () => {
//     setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)`}}>
//       </div>
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={prev}
//           className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
//         >
//           <ChevronLeft size={40} />
//         </button>
//         <button
//           onClick={next}
//           className="p-1 rounded-full shadow bg-white text-gray-800 hover:bg-white"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;