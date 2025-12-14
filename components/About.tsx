import React from 'react';
import { Reveal } from './Reveal';
import ScrollFloat from './ScrollFloat';
import { ArrowRight, Quote } from 'lucide-react';
import { SectionId } from '../types';

interface AboutProps {
  onNavigate: (section: SectionId | 'shop-view' | 'taproom-view' | 'about-view') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-12 min-h-screen relative z-10 bg-black/95 backdrop-blur-md">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-12 md:mb-24 text-center">
          <ScrollFloat 
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='top 95%'
            scrollEnd='bottom 50%'
            stagger={0.03}
            textClassName="font-['Oswald'] text-white"
          >
            ABOUT US
          </ScrollFloat>
          <div className="w-16 md:w-32 h-2 bg-fuchsia-500 rounded-full mt-4 md:mt-8 shadow-[0_0_15px_rgba(232,121,249,0.6)]" />
        </div>

        {/* Intro Section */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center mb-16 md:mb-32">
             <div className="space-y-6 md:space-y-10 text-base md:text-lg text-neutral-200 font-['Space_Grotesk'] leading-relaxed font-medium">
                <p>
                  Liquid Light Brewing Company was founded in <strong className="text-white">September 2017</strong> in Nottingham, UK. After years of experience home brewing and working in other breweries, we decided it was time to start our own.
                </p>
                <p>
                  The brewery name is inspired by the artform of <strong className="text-fuchsia-400">Liquid Light projection</strong> which started in the 1960s. After watching a Pink Floyd documentary, with Liquid Light projections displayed behind live performances, we registered the name and started work.
                </p>
                <p>
                  Beer and music are our two biggest passions in life. All of the beers that we produce are named around music, either from song names or lyrics.
                </p>
             </div>
             <div className="relative h-[300px] md:h-[700px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                 {/* Founder Image - Removed overlays for clarity, added bottom gradient only for text */}
                 <img 
                    src="https://ik.imagekit.io/jai777/Liquid%20light/about%20us%20thom%20image%20.png" 
                    alt="Thom - Founder" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                 <div className="absolute bottom-0 left-0 p-6 md:p-12">
                     <Quote className="text-amber-500 mb-4 md:mb-6 h-8 w-8 md:h-12 md:w-12" />
                     <p className="italic text-neutral-100 text-base md:text-xl mb-4 md:mb-8 leading-relaxed font-medium">
                        "I skipped kits and jumped straight in with recipe creation, making beer styles that I wanted to drink. It turns out others did too, and this ethos has stuck with us throughout the years."
                     </p>
                    <p className="text-white font-['Oswald'] text-xl md:text-3xl uppercase tracking-widest font-bold">Thom</p>
                    <p className="text-orange-400 text-base md:text-xl font-bold uppercase mt-1">Founder & Head Brewer</p>
                 </div>
             </div>
          </div>
        </Reveal>

        {/* Timeline Section */}
        <Reveal>
          <div className="mb-16 md:mb-32">
             <h3 className="text-4xl md:text-6xl font-['Oswald'] text-white uppercase mb-12 md:mb-20 text-center font-bold">Our Journey</h3>
             
             <div className="relative border-l-2 md:border-l-4 border-white/10 ml-2 md:ml-1/2 md:translate-x-[-2px] space-y-12 md:space-y-24 pb-8">
                
                {/* 2017 */}
                <div className="relative pl-8 md:pl-0">
                   <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10" />
                   <div className="md:w-1/2 md:ml-auto md:pl-20">
                      <span className="text-amber-400 font-bold font-['Oswald'] text-2xl md:text-4xl block mb-2 md:mb-4">2017</span>
                      <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-4 uppercase font-['Oswald']">The Beginning</h4>
                      <p className="text-neutral-300 text-base md:text-lg font-medium leading-relaxed">
                        Started brewing on a nano kit in our shed. In November 2017, our first bottled beers were sold.
                      </p>
                   </div>
                </div>

                {/* 2018 */}
                <div className="relative pl-8 md:pl-0">
                   <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)] z-10" />
                   <div className="md:w-1/2 md:mr-auto md:pr-20 md:text-right">
                      <span className="text-fuchsia-400 font-bold font-['Oswald'] text-2xl md:text-4xl block mb-2 md:mb-4">2018</span>
                      <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-4 uppercase font-['Oswald']">Thirsty Games Winners</h4>
                      <p className="text-neutral-300 text-base md:text-lg font-medium leading-relaxed">
                        We entered Indy Man Beer Con’s Thirsty Games and were lucky enough to lift the trophy! We poured at festivals across the UK including Port Street Beer House and Friends of Ham.
                      </p>
                   </div>
                </div>

                {/* 2019 */}
                <div className="relative pl-8 md:pl-0">
                   <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] z-10" />
                   <div className="md:w-1/2 md:ml-auto md:pl-20">
                      <span className="text-amber-400 font-bold font-['Oswald'] text-2xl md:text-4xl block mb-2 md:mb-4">2019</span>
                      <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-4 uppercase font-['Oswald']">Upscaling</h4>
                      <p className="text-neutral-300 text-base md:text-lg font-medium leading-relaxed">
                        Given the opportunity to cuckoo brew at Magpie Brewery. Purchased our own 2000L fermenter and progressed from bottles to 440ml cans.
                      </p>
                   </div>
                </div>

                {/* 2020 */}
                <div className="relative pl-8 md:pl-0">
                   <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)] z-10" />
                   <div className="md:w-1/2 md:mr-auto md:pr-20 md:text-right">
                      <span className="text-fuchsia-400 font-bold font-['Oswald'] text-2xl md:text-4xl block mb-2 md:mb-4">2020</span>
                      <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-4 uppercase font-['Oswald']">Adaptation</h4>
                      <p className="text-neutral-300 text-base md:text-lg font-medium leading-relaxed">
                         In the midst of a global pandemic, we started our online shop and home delivery service. Plus, <strong className="text-white">Ozzy the miniature dachshund</strong> joined the team!
                      </p>
                   </div>
                </div>

                {/* 2021 & Beyond */}
                <div className="relative pl-8 md:pl-0">
                   <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 md:w-6 md:h-6 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10" />
                   <div className="md:w-1/2 md:ml-auto md:pl-20">
                      <span className="text-white font-bold font-['Oswald'] text-2xl md:text-4xl block mb-2 md:mb-4">2021</span>
                      <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 md:mb-4 uppercase font-['Oswald']">A Home of Our Own</h4>
                      <p className="text-neutral-300 text-base md:text-lg font-medium leading-relaxed">
                        We moved into our premises in <strong className="text-white">Sneinton, Nottingham</strong> (Unit 9), installing a 22HL brewhouse. In June, we opened the Liquid Light Tap Room.
                      </p>
                   </div>
                </div>

             </div>
          </div>
        </Reveal>

        {/* The Art Section */}
        <Reveal>
          <div className="bg-neutral-900/95 p-6 md:p-24 rounded-[2rem] md:rounded-[3rem] border border-white/5 mb-16 md:mb-24 backdrop-blur-md relative overflow-hidden">
             
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                <div className="order-2 md:order-1">
                   <h3 className="text-4xl md:text-6xl font-['Oswald'] text-white uppercase mb-4 md:mb-10 font-bold">The Art</h3>
                   <div className="space-y-4 md:space-y-8 text-neutral-200 font-['Space_Grotesk'] font-medium text-base md:text-lg leading-relaxed">
                      <p>
                        We produce all the liquid light images ourselves using <strong className="text-amber-400">vintage analogue projectors</strong>, a mix of oils, water and dyes.
                      </p>
                      <p>
                        Once the liquid light images are produced, we send these to our amazing designer <strong className="text-fuchsia-400">Liv Auckland (L.R.Creates)</strong>, who digitally manipulates them into the final designs you see on our cans.
                      </p>
                   </div>
                   <div className="mt-8 md:mt-12">
                      <a href="#" className="inline-flex items-center gap-4 text-white text-lg md:text-2xl border-b-2 border-orange-500 pb-2 hover:text-orange-400 transition-colors font-bold tracking-wide">
                        View Liv's Website <ArrowRight size={20} />
                      </a>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 order-1 md:order-2">
                    <img src="https://ik.imagekit.io/jai777/Liquid%20light/gallery%205.png?updatedAt=1765635224666" className="rounded-3xl border border-white/10 shadow-2xl transform translate-y-4 md:translate-y-8 object-cover h-32 md:h-64 w-full" alt="Liquid Light Projection Art" />
                    <img src="https://ik.imagekit.io/jai777/Liquid%20light/gallery%202.png?updatedAt=1765635225421" className="rounded-3xl border border-white/10 shadow-2xl transform -translate-y-4 md:-translate-y-8 object-cover h-32 md:h-64 w-full" alt="Band Performance" />
                </div>
             </div>
          </div>
        </Reveal>
        
        {/* Visit CTA */}
        <Reveal>
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12 md:mb-20 text-center md:text-left">
             <div>
                <h3 className="text-4xl md:text-6xl font-['Oswald'] text-white uppercase mb-4 md:mb-6 font-bold">Visit the Taproom</h3>
                <p className="text-neutral-300 font-medium max-w-xl text-base md:text-xl leading-snug">
                   Unit 9, Robin Hood Industrial Estate, Alfred Street South, Sneinton, Nottingham, NG3 1GE
                </p>
             </div>
             <button 
                onClick={() => onNavigate('taproom-view')}
                className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 md:px-12 md:py-6 text-lg md:text-2xl hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] rounded-xl w-full md:w-auto"
              >
                Opening Hours
             </button>
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default About;