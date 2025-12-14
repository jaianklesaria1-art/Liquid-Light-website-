import React from 'react';
import { Instagram } from 'lucide-react';
import { SectionId } from '../types';
import { Reveal } from './Reveal';
import ScrollFloat from './ScrollFloat';
import DomeGallery from './DomeGallery';

// UPDATED WITH UPLOADED IMAGES
const GALLERY_IMAGES = [
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%207.png?updatedAt=1765635225452", 
    alt: "Liquid Light Vibe" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%2010%20.png?updatedAt=1765635225106", 
    alt: "Guitarist" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%2015.png?updatedAt=1765635224663", 
    alt: "Crowd" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%2013.png?updatedAt=1765635224645", 
    alt: "Taproom" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%205.png?updatedAt=1765635224666", 
    alt: "Event" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%206.png?updatedAt=1765635224784", 
    alt: "Performance" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%204.png?updatedAt=1765635225018", 
    alt: "Band" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%208.png?updatedAt=1765635225017", 
    alt: "Light Show" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/galley%209.png?updatedAt=1765635224999", 
    alt: "Atmosphere" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/Screenshot%202025-12-12%20183343.png?updatedAt=1765635225097", 
    alt: "Social" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/taproom%20image%203%20.png?updatedAt=1765635226166", 
    alt: "Live Music" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/about%20us%20image%201%20.png?updatedAt=1765635226171", 
    alt: "Team" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%202.png?updatedAt=1765635225421", 
    alt: "Performance" 
  },
  { 
    src: "https://ik.imagekit.io/jai777/Liquid%20light/gallery%203.png?updatedAt=1765635225190", 
    alt: "Liquid Light" 
  },
];

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="relative z-10 bg-black/95 backdrop-blur-md border-t border-white/5 py-12 md:py-24 overflow-hidden">
       <div className="container mx-auto px-6 relative z-20 pointer-events-none">
          <div className="flex flex-col md:flex-row justify-between items-end mb-4 md:mb-8 gap-4 md:gap-6">
            <div className="pointer-events-auto">
              <ScrollFloat 
                  animationDuration={1}
                  ease='back.inOut(2)'
                  scrollStart='center bottom+=50%'
                  scrollEnd='bottom bottom-=40%'
                  stagger={0.03}
                  containerClassName="mb-2"
                  textClassName="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-orange-300 font-['Oswald']"
              >
                THE VIBE
              </ScrollFloat>
              <div className="h-1 w-20 bg-gradient-to-r from-fuchsia-500 to-orange-500 rounded-full" />
              <p className="mt-4 text-neutral-300 max-w-lg text-base md:text-lg">
                A glimpse into our world. Good beer, good music, good people. Drag to explore.
              </p>
            </div>
            <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group pointer-events-auto">
              <Instagram size={20} className="group-hover:text-fuchsia-400 transition-colors" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase">@LiquidLightBrew</span>
            </a>
          </div>
       </div>

       {/* Dome Gallery Container */}
       <div className="h-[400px] md:h-[700px] w-full relative z-10 cursor-grab active:cursor-grabbing">
          <DomeGallery 
            images={GALLERY_IMAGES} 
            openedImageWidth="min(1000px, 95vw)" 
            openedImageHeight="min(800px, 85vh)"
          />
       </div>
    </section>
  );
};

export default Gallery;