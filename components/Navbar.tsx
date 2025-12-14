import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import GooeyNav from './GooeyNav';

interface NavbarProps {
  onNavigate: (section: SectionId | 'shop-view' | 'taproom-view' | 'about-view' | 'checkout' | 'shop-events') => void;
  currentView?: 'home' | 'shop' | 'taproom' | 'about' | 'checkout';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentView !== 'home') {
      setActiveHomeSection('');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHomeSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = [SectionId.EVENTS, SectionId.GALLERY, SectionId.CONTACT];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [currentView]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
       document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', action: SectionId.HERO },
    { label: 'About Us', action: 'about-view' as const },
    { label: 'Taproom', action: 'taproom-view' as const },
    { label: 'Events', action: SectionId.EVENTS },
    { label: 'Shop', action: 'shop-view' as const },
    { label: 'Gallery', action: SectionId.GALLERY },
    { label: 'Contact', action: SectionId.CONTACT },
  ];

  const gooeyNavItems = navItems.map(item => ({
      label: item.label,
      onClick: () => onNavigate(item.action)
  }));

  const getActiveIndex = () => {
    if (currentView === 'home' && (!activeHomeSection || activeHomeSection === SectionId.HERO)) return 0;
    if (currentView === 'about') return 1;
    if (currentView === 'taproom') return 2;
    if (currentView === 'home' && activeHomeSection === SectionId.EVENTS) return 3;
    if (currentView === 'shop') return 4;
    // Gallery active state logic
    // if (currentView === 'home' && activeHomeSection === SectionId.GALLERY) return 5;
    if (currentView === 'home' && activeHomeSection === SectionId.CONTACT) return 6;
    return -1;
  };

  const handleMobileClick = (action: any) => {
    onNavigate(action);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled || currentView !== 'home' || mobileMenuOpen
          ? 'bg-black py-3 shadow-lg border-b border-white/10'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            onNavigate(SectionId.HERO);
            setMobileMenuOpen(false);
          }}
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300">
             <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                <path 
                  d="M50 5 L95 90 H5 Z" 
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinejoin="round"
                  className="group-hover:stroke-fuchsia-400 transition-colors duration-300"
                />
                <path 
                  d="M50 25 C50 25 35 55 35 65 C35 73.2 41.8 80 50 80 C58.2 80 65 73.2 65 65 C65 55 50 25 50 25 Z" 
                  fill="white" 
                  className="group-hover:fill-orange-500 transition-colors duration-300"
                />
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-xl font-bold tracking-[0.1em] uppercase text-white leading-none font-['Montserrat']">
              Liquid Light
            </span>
            <span className="text-[0.5rem] md:text-[0.6rem] font-medium tracking-[0.2em] uppercase text-orange-400 group-hover:text-fuchsia-400 transition-colors duration-300 font-['Space_Grotesk']">
              Brewing Company
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
           <GooeyNav 
              items={gooeyNavItems} 
              initialActiveIndex={getActiveIndex()} 
           />
        </div>

        <div className="hidden md:block ml-4">
             <button 
                onClick={() => onNavigate('shop-view')}
                className="bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Buy Beer
              </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2 relative z-50 focus:outline-none active:text-orange-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div
        className={`fixed top-0 left-0 w-full bg-black z-40 border-b border-white/10 shadow-2xl flex flex-col items-center transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{ paddingTop: '80px', paddingBottom: '24px' }}
      >
        <div className="flex flex-col items-center w-full gap-5">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleMobileClick(item.action)}
              className="text-xl font-bold text-white uppercase tracking-widest hover:text-orange-400 transition-colors transform active:scale-95 duration-200 font-['Oswald'] w-full py-1"
            >
              {item.label}
            </button>
          ))}
          
          <div className="w-10 h-0.5 bg-white/10 rounded-full my-1" />
          
          <button 
            onClick={() => handleMobileClick('shop-view')}
            className="text-sm font-bold text-orange-400 uppercase tracking-widest border border-orange-500/50 px-8 py-2.5 rounded-lg hover:bg-orange-500 hover:text-white transition-all"
          >
            Buy Beer
          </button>
        </div>
      </div>
      
      {/* Backdrop for mobile menu (closes on click) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          style={{ top: '0' }}
        />
      )}
    </nav>
  );
};

export default Navbar;