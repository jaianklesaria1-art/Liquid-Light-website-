import React from 'react';

interface BeerCanProps {
  name: string;
  style?: string;
  image: string;
  className?: string;
  onClick?: () => void;
  type?: 'can' | 'keg';
}

const BeerCan: React.FC<BeerCanProps> = ({ name, image, className = '', onClick }) => {
  return (
      <div 
        onClick={onClick}
        className={`relative w-32 md:w-60 h-[220px] md:h-[420px] transition-transform duration-500 ease-out cursor-pointer z-10 group ${className} flex flex-col justify-end items-center`}
      >
        {/* Shadow on Floor */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-40 h-2 md:h-4 bg-black/70 blur-md md:blur-lg rounded-[100%] opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500" />
        
        {/* Image Container */}
        <div className="relative w-full h-full group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500 flex items-end justify-center p-2">
             <img 
               src={image} 
               alt={name}
               className="max-h-full max-w-full object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
             />
        </div>
     </div>
  );
};

export default BeerCan;