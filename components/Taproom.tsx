import React, { useState } from 'react';
import { MapPin, Clock, Info, Calendar, Mail, X } from 'lucide-react';
import { Reveal } from './Reveal';
import ScrollFloat from './ScrollFloat';
import NewsletterModal from './NewsletterModal';

const Taproom: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewImage, setViewImage] = useState<string | null>(null);

  const LOCATION_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/taproom%20iamge%206.png?updatedAt=1765635226866";

  return (
    <>
      <div className="pt-20 md:pt-24 pb-12 min-h-screen relative z-10 bg-black/95 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8 md:mb-20 text-center">
            <ScrollFloat 
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='top 95%'
              scrollEnd='bottom 50%'
              stagger={0.03}
              textClassName="font-['Oswald'] text-white"
            >
              THE TAPROOM
            </ScrollFloat>
            <div className="w-16 md:w-32 h-2 bg-orange-500 rounded-full mt-4 md:mt-8 shadow-[0_0_15px_rgba(249,115,22,0.6)]" />
          </div>

          <div className="max-w-6xl mx-auto">
            
            <Reveal>
              <div className="text-center mb-8 md:mb-16 space-y-4 md:space-y-10 bg-neutral-900/90 p-6 md:p-16 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
                <p className="text-2xl md:text-5xl font-['Space_Grotesk'] text-neutral-100 leading-tight font-normal">
                  Our taproom is open to the public every <span className="text-orange-400 font-bold block mt-2 md:mt-4">Thursday, Friday, Saturday & Sunday.</span>
                </p>
                <div className="w-16 md:w-32 h-1 bg-white/10 mx-auto rounded-full" />
                <p className="text-base md:text-lg text-neutral-300 font-['Space_Grotesk'] leading-relaxed max-w-5xl mx-auto font-medium">
                  We have <strong className="text-white">8 keg lines</strong> and <strong className="text-white">2 cask lines</strong> pouring our freshest beers, plus a selection of cans to drink in or take away. 
                </p>
              </div>
            </Reveal>

            {/* Newsletter Button */}
            <div className="flex justify-center mb-10 md:mb-24">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black/80 hover:bg-black border-2 border-amber-500/50 text-white font-bold py-3 px-6 md:py-6 md:px-12 rounded-2xl uppercase tracking-widest transition-all hover:scale-105 flex items-center gap-4 font-['Oswald'] text-sm md:text-2xl shadow-[0_0_20px_rgba(245,158,11,0.2)] w-full md:w-auto justify-center"
               >
                  <Mail className="text-amber-500" size={18} />
                  Join our mailing list!
               </button>
            </div>

            {/* Key Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mb-12 md:mb-24">
               <Reveal width="100%">
                 <div className="bg-neutral-900/95 border border-white/10 p-6 md:p-12 rounded-3xl h-full flex flex-col items-center text-center hover:border-fuchsia-500/50 transition-colors duration-300 shadow-xl backdrop-blur-xl">
                    <div className="w-14 h-14 md:w-24 md:h-24 bg-neutral-800 rounded-full flex items-center justify-center mb-4 md:mb-10 text-fuchsia-400 shadow-lg">
                       <Clock size={28} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white font-['Oswald'] uppercase tracking-widest mb-4 md:mb-10">Opening Hours</h3>
                    <div className="space-y-3 md:space-y-6 text-neutral-200 font-['Space_Grotesk'] w-full max-w-md font-medium text-base md:text-lg">
                       <div className="flex justify-between border-b border-white/10 pb-2 md:pb-4">
                         <span>Thursday</span>
                         <span className="font-bold text-white">17:00 - 22:00</span>
                       </div>
                       <div className="flex justify-between border-b border-white/10 pb-2 md:pb-4">
                         <span>Friday</span>
                         <span className="font-bold text-white">16:00 - 22:00</span>
                       </div>
                       <div className="flex justify-between border-b border-white/10 pb-2 md:pb-4">
                         <span>Saturday</span>
                         <span className="font-bold text-white">14:00 - 22:00</span>
                       </div>
                       <div className="flex justify-between border-b border-white/10 pb-2 md:pb-4">
                         <span>Sunday</span>
                         <span className="font-bold text-white">14:00 - 20:00</span>
                       </div>
                    </div>
                 </div>
               </Reveal>

               <Reveal width="100%" delay={0.1}>
                 <div className="bg-neutral-900/95 border border-white/10 p-6 md:p-12 rounded-3xl h-full flex flex-col items-center text-center hover:border-orange-500/50 transition-colors duration-300 shadow-xl backdrop-blur-xl relative overflow-hidden group">
                    <div className="w-14 h-14 md:w-24 md:h-24 bg-neutral-800 rounded-full flex items-center justify-center mb-4 md:mb-10 text-orange-400 shadow-lg relative z-10">
                       <MapPin size={28} />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white font-['Oswald'] uppercase tracking-widest mb-4 md:mb-10 relative z-10">Location</h3>
                    <p className="text-neutral-200 font-['Space_Grotesk'] text-base md:text-lg mb-6 md:mb-10 leading-relaxed font-medium relative z-10">
                      Unit 9, Robin Hood Industrial Estate<br/>
                      Alfred Street South<br/>
                      Nottingham, NG3 1GE
                    </p>
                    
                    {/* Location Image with enlarge functionality - Removed Opacity */}
                    <div 
                      className="w-full h-40 md:h-64 w-full mb-6 relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-lg cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
                      onClick={() => setViewImage(LOCATION_IMAGE)}
                    >
                        <img 
                            src={LOCATION_IMAGE} 
                            alt="Map to Liquid Light" 
                            className="w-full h-full object-cover hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">Click to enlarge</span>
                        </div>
                    </div>

                    <a 
                      href="https://maps.google.com/?q=Liquid+Light+Brew+Co" 
                      target="_blank" 
                      rel="noreferrer"
                      className="mt-auto px-6 py-3 md:px-10 md:py-5 bg-white text-black font-bold uppercase tracking-widest text-sm md:text-xl hover:bg-orange-400 transition-colors rounded-xl relative z-10 w-full md:w-auto"
                    >
                      Open in Maps
                    </a>
                 </div>
               </Reveal>
            </div>

            {/* Vibe & Info Section */}
            <Reveal>
               <div className="bg-neutral-900/95 backdrop-blur-xl border-l-[6px] md:border-l-[12px] border-amber-500 p-6 md:p-16 rounded-r-3xl mb-12 md:mb-24 shadow-lg">
                   <div className="grid md:grid-cols-[1fr_1.5fr] gap-4 md:gap-16 items-center">
                      <div className="flex flex-col gap-2 md:gap-6">
                         <h3 className="text-3xl md:text-6xl font-bold text-white font-['Oswald'] uppercase leading-none">Good Vibes Only</h3>
                         <p className="text-amber-400 font-bold text-base md:text-xl uppercase tracking-widest">Est. 2017</p>
                      </div>
                      <div className="space-y-4 md:space-y-8 text-neutral-200 font-['Space_Grotesk'] font-medium text-base md:text-lg leading-relaxed">
                         <p>
                           We have a killer sound system playing everything from psychedelic rock to funk and soul. 
                           The atmosphere is relaxed, inclusive, and friendly.
                         </p>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 text-base md:text-lg">
                            <li className="flex items-center gap-3"><Info size={16} className="text-amber-500"/> Dog Friendly (very!)</li>
                            <li className="flex items-center gap-3"><Info size={16} className="text-amber-500"/> Children welcome until 7pm</li>
                            <li className="flex items-center gap-3"><Info size={16} className="text-amber-500"/> Wheelchair Accessible</li>
                            <li className="flex items-center gap-3"><Info size={16} className="text-amber-500"/> Card Payments Only</li>
                         </ul>
                      </div>
                   </div>
               </div>
            </Reveal>

            {/* Events Teaser */}
            <div className="text-center mb-12 md:mb-24">
              <h3 className="text-4xl md:text-6xl font-bold text-white font-['Oswald'] uppercase tracking-widest mb-8 md:mb-12 flex items-center justify-center gap-4 md:gap-6">
                 <Calendar className="text-fuchsia-500" size={32} /> Weekly Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                  <div className="p-6 md:p-8 bg-neutral-900/90 rounded-3xl border border-white/5 backdrop-blur-md hover:bg-neutral-800 transition-colors">
                     <h4 className="text-white font-bold text-xl md:text-2xl mb-2 md:mb-4">Quiz Night</h4>
                     <p className="text-neutral-300 font-medium text-sm md:text-base">Every Thursday. Test your smarts and win beer.</p>
                  </div>
                  <div className="p-6 md:p-8 bg-neutral-900/90 rounded-3xl border border-white/5 backdrop-blur-md hover:bg-neutral-800 transition-colors">
                     <h4 className="text-white font-bold text-xl md:text-2xl mb-2 md:mb-4">Street Food</h4>
                     <p className="text-neutral-300 font-medium text-sm md:text-base">Fridays & Saturdays. Rotating local vendors.</p>
                  </div>
                  <div className="p-6 md:p-8 bg-neutral-900/90 rounded-3xl border border-white/5 backdrop-blur-md hover:bg-neutral-800 transition-colors">
                     <h4 className="text-white font-bold text-xl md:text-2xl mb-2 md:mb-4">Vinyl Sessions</h4>
                     <p className="text-neutral-300 font-medium text-sm md:text-base">Regular DJ sets spinning psych, funk & soul.</p>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mb-8 md:mb-16">
               <img src="https://ik.imagekit.io/jai777/Liquid%20light/taproom%20image%203%20.png?updatedAt=1765635226166" alt="Taproom Vibe" className="rounded-2xl w-full h-32 md:h-80 object-cover hover:scale-105 transition-all duration-500 shadow-xl" />
               <img src="https://ik.imagekit.io/jai777/Liquid%20light/taproom%20image%202.png?updatedAt=1765635225541" alt="Good Times" className="rounded-2xl w-full h-32 md:h-80 object-cover hover:scale-105 transition-all duration-500 shadow-xl" />
               <img src="https://ik.imagekit.io/jai777/Liquid%20light/gallery%203.png?updatedAt=1765635225190" alt="Liquid Light Art" className="rounded-2xl w-full h-32 md:h-80 object-cover hover:scale-105 transition-all duration-500 shadow-xl" />
               <img src="https://ik.imagekit.io/jai777/Liquid%20light/gallery%2015.png?updatedAt=1765635224663" alt="Crowd" className="rounded-2xl w-full h-32 md:h-80 object-cover hover:scale-105 transition-all duration-500 shadow-xl" />
            </div>

          </div>
        </div>
      </div>

      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {viewImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setViewImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center">
             <img 
              src={viewImage} 
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10" 
              alt="Enlarged view" 
              onClick={(e) => e.stopPropagation()} 
             />
             <button 
              className="absolute top-0 right-0 md:top-4 md:right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              onClick={() => setViewImage(null)}
             >
              <X size={32} />
             </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Taproom;