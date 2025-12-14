import React from 'react';
import { Calendar, Clock, Ticket, ArrowRight } from 'lucide-react';
import { SectionId, EventItem } from '../types';
import LiquidCanvasOverlay from './LiquidCanvasOverlay';
import ScrollFloat from './ScrollFloat';

interface EventsProps {
  onNavigate: (section: string) => void;
}

const MOCK_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Taproom Quiz Night",
    date: "Every Thursday",
    description: "Test your knowledge. Prizes for 1st, 2nd and 'Best Team Name'. Food by Squeaky Beaver Poutine.",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Street Food Friday",
    date: "Nov 03, 2024",
    description: "Award-winning burgers from Secret Burger Club serving from 5pm. Fresh hazy pales on tap.",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Liquid Light Sessions",
    date: "Nov 10, 2024",
    description: "Live psych-rock and funk DJs spinning vinyl all night. Immersive light show active.",
    image: "https://picsum.photos/600/400?random=3"
  }
];

const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  return (
    <section id={SectionId.EVENTS} className="py-12 md:py-24 relative z-10 bg-black/95 backdrop-blur-md border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8 md:mb-16 text-center">
          <ScrollFloat 
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="mb-4"
            textClassName="text-amber-500 font-['Oswald'] drop-shadow-md"
          >
            EVENTS
          </ScrollFloat>
          
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
          <p className="mt-4 text-neutral-200 max-w-lg font-medium text-base md:text-lg">
            Join us for quizzes, street food, and music.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {MOCK_EVENTS.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-neutral-900/90 border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.2)] cursor-pointer"
              onClick={() => onNavigate('shop-events')}
            >
              <div className="h-40 md:h-48 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <LiquidCanvasOverlay />
                </div>

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-2 py-1 md:px-3 md:py-1 rounded-full border border-white/10 flex items-center gap-2 z-10">
                  <Calendar size={12} className="text-amber-400" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white">{event.date}</span>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-['Oswald'] uppercase">
                  {event.title}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-medium line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs md:text-sm">
                    <Clock size={14} />
                    <span>7:00 PM</span>
                  </div>
                  <span className="flex items-center gap-2 text-amber-400 text-xs md:text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                    Details <Ticket size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <button 
              onClick={() => onNavigate('shop-events')}
              className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 rounded-full hover:border-orange-500 text-white font-bold uppercase tracking-widest transition-all hover:bg-orange-500/10 text-xs md:text-base"
            >
              View All Events
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Events;