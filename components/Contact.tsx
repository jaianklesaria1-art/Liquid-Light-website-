import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SectionId } from '../types';
import ScrollFloat from './ScrollFloat';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-12 md:py-24 relative z-10 bg-black/95 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          
          <div className="space-y-8 md:space-y-12">
            <ScrollFloat 
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='top 90%'
                scrollEnd='bottom 50%'
                stagger={0.03}
                containerClassName="mb-4 md:mb-8"
                textClassName="font-['Oswald'] text-white"
            >
                GET IN TOUCH
            </ScrollFloat>
            
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed max-w-xl drop-shadow-md font-medium font-['Space_Grotesk']">
              Have a question about our beers, events, or want to stock Liquid Light? Drop us a message or email us directly.
            </p>
            
            <div className="flex items-center gap-4 md:gap-6 text-xl md:text-3xl text-white font-bold group cursor-pointer hover:text-orange-400 transition-colors break-all">
               <Mail size={24} className="md:w-10 md:h-10 shrink-0" />
               <a href="mailto:info@liquidlightbrewco.com" className="break-all font-['Oswald']">info@liquidlightbrewco.com</a>
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity md:w-10 md:h-10 shrink-0" size={24} />
            </div>
            
            {/* Removed opacity/tints */}
            <div className="pt-0 md:pt-8 relative h-[200px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
               <img 
                 src="https://ik.imagekit.io/jai777/Liquid%20light/get%20inb%20touch%20image.jpg" 
                 alt="Get in Touch" 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
               />
            </div>
          </div>

          <div className="bg-neutral-900/95 p-6 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 backdrop-blur-md shadow-2xl mt-0 md:mt-0">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-10 font-['Oswald'] uppercase tracking-wider">Send us a message</h3>
            <form className="space-y-4 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                <div className="space-y-2 md:space-y-4">
                  <label className="text-xs md:text-sm uppercase font-bold text-neutral-400 tracking-wider">Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 md:px-8 md:py-5 text-white text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2 md:space-y-4">
                  <label className="text-xs md:text-sm uppercase font-bold text-neutral-400 tracking-wider">Email</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 md:px-8 md:py-5 text-white text-base md:text-lg focus:outline-none focus:border-fuchsia-500 transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-4">
                <label className="text-xs md:text-sm uppercase font-bold text-neutral-400 tracking-wider">Subject</label>
                <select className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 md:px-8 md:py-5 text-white text-base md:text-lg focus:outline-none focus:border-orange-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Trade / Wholesale</option>
                  <option>Events</option>
                </select>
              </div>

              <div className="space-y-2 md:space-y-4">
                <label className="text-xs md:text-sm uppercase font-bold text-neutral-400 tracking-wider">Message</label>
                <textarea rows={5} className="w-full bg-black border border-white/10 rounded-2xl px-4 py-3 md:px-8 md:py-5 text-white text-base md:text-lg focus:outline-none focus:border-amber-500 transition-colors" placeholder="Tell us what's on your mind..."></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-600 to-fuchsia-600 hover:from-orange-500 hover:to-fuchsia-500 text-white font-bold text-lg md:text-2xl uppercase tracking-widest py-4 md:py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                Send Message
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-12 md:mt-32 pt-8 md:pt-10 border-t border-white/5 text-center text-neutral-400 text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p>&copy; 2024 Liquid Light Brew Co. All rights reserved.</p>
          <div className="flex gap-8 md:gap-10">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Untappd</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;