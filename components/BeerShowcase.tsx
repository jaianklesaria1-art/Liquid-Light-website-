import React from 'react';
import { ArrowRight, ShoppingBag, ChevronRight } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import { SectionId } from '../types';
import BeerCan from './BeerCan';

interface BeerShowcaseProps {
  onNavigate?: (section: SectionId | 'shop-view') => void;
}

const NEW_BEER_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/e01462b2c4b73459391ea8ed815c879c_0_1765638202_2673__1_-removebg-preview.png";

const LIQUID_LIGHT_BEERS = [
  {
    name: "Stupid & Contagious",
    style: "Hazy IPA",
    abv: "5.3%",
    image: NEW_BEER_IMAGE, 
    price: "£5.20"
  },
  {
    name: "Surfing with the Alien",
    style: "Cookie Dough Stout",
    abv: "5.7%",
    image: NEW_BEER_IMAGE, 
    price: "£5.00"
  },
  {
    name: "My Own Summer",
    style: "Rhubarb & Custard Sour",
    abv: "3.4%",
    image: NEW_BEER_IMAGE,
    price: "£4.80"
  },
  {
    name: "Cherry Waves",
    style: "Cherry Coffee Sour",
    abv: "5.4%",
    image: NEW_BEER_IMAGE,
    price: "£5.00"
  },
  {
    name: "Veloria",
    style: "Blueberry Radler",
    abv: "3.4%",
    image: NEW_BEER_IMAGE, 
    price: "£4.20"
  },
  {
    name: "Volume VI",
    style: "Helles Lager",
    abv: "4.9%",
    image: NEW_BEER_IMAGE,
    price: "£4.50"
  },
  {
    name: "Loomer",
    style: "NEIPA",
    abv: "6.5%",
    image: NEW_BEER_IMAGE, 
    price: "£6.00"
  },
  {
    name: "Day Tripper",
    style: "Pale Ale",
    abv: "4.3%",
    image: NEW_BEER_IMAGE,
    price: "£4.50"
  },
  {
    name: "Pink Moon",
    style: "Raspberry Wheat",
    abv: "4.0%",
    image: NEW_BEER_IMAGE, 
    price: "£4.50"
  },
  {
    name: "Brewzerker",
    style: "Pale Ale",
    abv: "4.3%",
    image: NEW_BEER_IMAGE, 
    price: "£4.00"
  }
];

const BeerShowcase: React.FC<BeerShowcaseProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-12 md:py-24 relative z-10 bg-black/90 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 mb-8 md:mb-12 text-center">
        <ScrollFloat 
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top 90%'
            scrollEnd='bottom 50%'
            stagger={0.03}
            containerClassName="mb-4 flex justify-center"
            textClassName="text-white font-['Oswald'] uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
        >
            OUR BEERS
        </ScrollFloat>
        <p className="text-neutral-300 font-['Space_Grotesk'] text-base md:text-lg max-w-2xl mx-auto">
            Home brews from Nottingham. Fresh, hazy and loud.
        </p>
      </div>

      <div className="md:hidden flex justify-end px-6 mb-4 text-orange-400 text-xs font-bold uppercase tracking-widest animate-pulse">
         Swipe for more <ChevronRight size={14} />
      </div>

      <div className="container mx-auto px-6">
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 
          md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20 md:pb-0 md:mx-0 md:px-0 md:overflow-visible
          lg:grid-cols-4 xl:grid-cols-5
          scrollbar-hide
        ">
          {LIQUID_LIGHT_BEERS.map((beer, index) => (
            <div 
              key={index} 
              className="min-w-[160px] md:min-w-0 snap-center flex flex-col items-center group relative cursor-pointer"
              onClick={() => onNavigate && onNavigate('shop-view')}
            >
              
              <BeerCan 
                name={beer.name} 
                style={beer.style} 
                image={beer.image}
                className="mb-4 md:mb-8"
              />

              <div className="text-center transform transition-all duration-300 z-20 w-full">
                <h3 className="text-base md:text-xl font-bold text-white font-['Oswald'] uppercase tracking-wide mb-1 group-hover:text-orange-400 transition-colors truncate w-full">
                  {beer.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-['Space_Grotesk'] text-neutral-400 uppercase tracking-wider mb-2">
                   <span className="font-bold text-orange-500">{beer.abv}</span>
                   <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                   <span>{beer.style}</span>
                </div>
                
                <div className="flex items-center justify-center gap-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
                   <span className="text-white font-bold text-sm md:text-base">{beer.price}</span>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       onNavigate && onNavigate('shop-view');
                     }}
                     className="bg-white text-black hover:bg-orange-500 hover:text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                   >
                      <ShoppingBag size={12} className="md:w-[14px] md:h-[14px]" />
                   </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 md:mt-16">
          <button 
             onClick={() => onNavigate && onNavigate('shop-view')}
             className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 rounded-full hover:border-orange-500 text-white font-bold uppercase tracking-widest transition-all hover:bg-orange-500/10 text-xs md:text-base"
          >
            View All Beers <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerShowcase;