import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionId } from '../types';
import CurvedLoop from './CurvedLoop';

interface HeroProps {
  onNavigate: (section: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="relative z-10 text-center max-w-7xl mx-auto flex flex-col items-center px-4 md:px-6">
        
        <motion.div style={{ y: y1, opacity }} className="mb-6 md:mb-12 relative flex flex-col items-center">
          
          {/* Logo - significantly smaller on mobile to fit small screens */}
          <div className="w-24 h-24 md:w-72 md:h-72 mb-4 md:mb-8 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
               <path 
                 d="M100 20 L180 180 H20 Z" 
                 fill="none" 
                 stroke="white" 
                 strokeWidth="12"
                 className="drop-shadow-lg"
               />
               <path 
                 d="M100 50 C100 50 70 110 70 130 C70 146.5 83.5 160 100 160 C116.5 160 130 146.5 130 130 C130 110 100 50 100 50 Z" 
                 fill="white" 
               />
            </svg>
          </div>

          <h2 className="text-[10px] md:text-base text-yellow-400 font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 font-['Space_Grotesk'] drop-shadow-sm">
            Est. 2017
          </h2>

          {/* Title - Responsive typography */}
          <h1 className="text-3xl md:text-5xl text-white tracking-[0.15em] uppercase font-['Montserrat'] font-medium mb-1 md:mb-2 drop-shadow-md">
            Liquid Light
          </h1>
          <h2 className="text-xs md:text-xl text-slate-100 tracking-[0.2em] uppercase font-['Montserrat'] font-normal opacity-90">
            Brewing Company
          </h2>

        </motion.div>
      </div>

      {/* Curved Loop Marquee */}
      <div className="absolute bottom-24 md:bottom-0 w-full h-[100px] md:h-[300px] pointer-events-none overflow-hidden mix-blend-screen">
         <div className="absolute top-[0px] md:top-[80px] w-[120%] -left-[10%]">
            <CurvedLoop 
              marqueeText="FRESH CANS • TAPROOM • PSYCHEDELIC VIBES • LIQUID LIGHT BREW CO • MUSIC • ART • "
              speed={0.6}
              curveAmount={30} 
              className="fill-transparent stroke-amber-500 stroke-[1px] md:stroke-[2px] font-['Oswald'] font-bold text-2xl md:text-5xl tracking-widest drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              interactive={true}
            />
         </div>
      </div>
    </section>
  );
};

export default Hero;