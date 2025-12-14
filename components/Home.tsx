import React from 'react';
import Hero from './Hero';
import BeerShowcase from './BeerShowcase';
import Events from './Events';
import Gallery from './Gallery';
import Contact from './Contact';
import { Reveal } from './Reveal';
import ScrollFloat from './ScrollFloat';
import { SectionId } from '../types';
import { Info, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: SectionId | 'shop-view' | 'taproom-view' | 'about-view' | 'shop-events') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      
      <div className="relative z-10">
        
        {/* Who Are We Section */}
        <section className="py-12 md:py-24 relative bg-black/95">
          <div className="container mx-auto px-6 max-w-7xl">
            <Reveal>
              <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">
                 {/* Image */}
                 <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 group order-2 md:order-1">
                    <img 
                      src="https://ik.imagekit.io/jai777/Liquid%20light/about%20us%20image%201%20.png?updatedAt=1765635226171" 
                      alt="Liquid Light Brewing" 
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                 </div>

                 {/* Text Content */}
                 <div className="flex flex-col items-start space-y-6 md:space-y-10 order-1 md:order-2">
                    
                    {/* Made Header Clickable */}
                    <button 
                      onClick={() => onNavigate('about-view')}
                      className="text-left w-full group"
                    >
                      <ScrollFloat 
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top 85%'
                        scrollEnd='bottom 50%'
                        stagger={0.03}
                        containerClassName="mb-2 md:mb-4 w-full"
                      >
                        WHO ARE WE?
                      </ScrollFloat>
                      <div className="flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to read more <ArrowRight size={16} />
                      </div>
                    </button>

                    <div className="space-y-4 md:space-y-8 text-neutral-200 font-['Space_Grotesk'] font-medium text-base md:text-lg leading-relaxed">
                      <p>
                        Liquid Light Brewing Company was born out of a passion for beer and music. We produce modern craft beer in keg, cask and cans.
                      </p>
                      <p>
                        After a couple of years cuckoo brewing, we found a home of our own and now have a 12bbl brewhouse and tap room in Nottingham.
                      </p>
                      <p>
                        Our ethos has always been to produce the beer we want to drink, and hopefully you'll enjoy it too!
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => onNavigate('about-view')}
                      className="w-full md:w-auto px-8 py-4 md:px-12 md:py-6 bg-white text-black font-['Oswald'] font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-orange-500/50"
                    >
                      Read more <Info size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                 </div>
              </div>
            </Reveal>
          </div>
        </section>
        
        <BeerShowcase onNavigate={onNavigate} />

        <Reveal>
          <Events onNavigate={onNavigate} />
        </Reveal>
        
        <Reveal>
          <Gallery />
        </Reveal>
        
        <Contact />
      </div>
    </>
  );
};

export default Home;