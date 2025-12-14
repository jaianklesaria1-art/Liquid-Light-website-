import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Plasma from './components/Plasma';
import Home from './components/Home';
import Shop from './components/Shop';
import Taproom from './components/Taproom';
import About from './components/About';
import Checkout from './components/Checkout';
import ProjectorWand from './components/ProjectorWand';
import { SectionId, Product } from './types';

const PLASMA_COLORS = [
  '#ff6b35', // Original Orange
  '#c026d3', // Fuchsia
  '#7c3aed', // Violet
  '#0891b2', // Cyan
  '#65a30d', // Lime
  '#db2777', // Pink
];

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'shop' | 'taproom' | 'about' | 'checkout'>('home');
  const [shopFilter, setShopFilter] = useState<string>('all');
  const [cart, setCart] = useState<Product[]>([]);
  const [plasmaIndex, setPlasmaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlasmaIndex((prev) => (prev + 1) % PLASMA_COLORS.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleNavigate = (target: SectionId | 'shop-view' | 'taproom-view' | 'about-view' | 'shop-events' | 'checkout') => {
    // Handle Checkout Page
    if (target === 'checkout') {
      setView('checkout');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle Events Link directly to Shop
    if (target === 'shop-events') {
      setView('shop');
      setShopFilter('events');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle Shop Page
    if (target === 'shop-view' || target === SectionId.SHOP) {
      setView('shop');
      setShopFilter('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle Taproom Page
    if (target === 'taproom-view' || target === SectionId.TAPROOM) {
      setView('taproom');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Handle About Page
    if (target === 'about-view') {
      setView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle Home Sections
    if (view !== 'home') {
      setView('home');
      // Allow render to happen before scrolling
      setTimeout(() => {
         scrollToElement(target);
      }, 100);
    } else {
      scrollToElement(target);
    }
  };

  const scrollToElement = (id: string) => {
    if (id === SectionId.HERO) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
       const element = document.getElementById(id);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
    }
  };

  return (
    <div className="min-h-screen text-slate-50 relative selection:bg-cyan-500/30 selection:text-white cursor-none md:cursor-auto bg-black">
      {/* Custom "Wand" Cursor Component - Top Layer */}
      <ProjectorWand />

      {/* Global Noise Overlay - High Z-index */}
      <div 
        className="fixed inset-0 z-[60] pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Plasma Background - Z-0 (Base Layer) */}
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-black">
        <Plasma 
          color={PLASMA_COLORS[plasmaIndex]}
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      
      {/* Navigation - High Z-index */}
      <Navbar onNavigate={handleNavigate} currentView={view} />
      
      {/* Main Content - Z-10 (Above Background) */}
      <main className="relative z-10">
        {view === 'home' && <Home onNavigate={handleNavigate} />}
        {view === 'shop' && (
           <Shop 
             initialCategory={shopFilter} 
             onNavigate={handleNavigate} 
             cart={cart}
             addToCart={addToCart}
           />
        )}
        {view === 'taproom' && <Taproom />}
        {view === 'about' && <About onNavigate={handleNavigate} />}
        {view === 'checkout' && (
           <Checkout 
              cart={cart} 
              removeFromCart={removeFromCart}
              onBack={() => handleNavigate('shop-view')}
              onNavigate={handleNavigate}
           />
        )}
      </main>
    </div>
  );
};

export default App;