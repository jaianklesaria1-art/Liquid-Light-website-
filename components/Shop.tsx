import React, { useState, useEffect } from 'react';
import { ShoppingBag, Plus, Calendar } from 'lucide-react';
import { Product } from '../types';
import { Reveal } from './Reveal';
import BeerCan from './BeerCan';
import ScrollFloat from './ScrollFloat';
import ProductModal from './ProductModal';

const NEW_BEER_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/e01462b2c4b73459391ea8ed815c879c_0_1765638202_2673__1_-removebg-preview.png";
const NEW_MERCH_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/259294f75514a43b4f8bd011901dab25_0_1765639041_6866.png";
const NEW_KEG_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/485c2f1d461eae4a17bf2370e42f1d59_0_1765640391_8663.png";
const NEW_GIFT_IMAGE = "https://ik.imagekit.io/jai777/Liquid%20light/157c4e674255e2671eb56cac764773c6_0_1765641143_1998.png";

const PRODUCTS: Product[] = [
  // --- CANS ---
  {
    id: 1,
    name: "Stupid & Contagious",
    category: 'cans',
    price: 5.20,
    style: "Hazy IPA",
    abv: "5.3%",
    description: "Juicy, hazy, and packed with hops. A psychedelic experience in a can.",
    image: NEW_BEER_IMAGE,
    isNew: true
  },
  {
    id: 2,
    name: "Surfing with the Alien",
    category: 'cans',
    price: 5.00,
    style: "Cookie Dough Stout",
    abv: "5.7%",
    description: "Dark, sweet and rich. Like dessert in a glass.",
    image: NEW_BEER_IMAGE
  },
  {
    id: 3,
    name: "My Own Summer",
    category: 'cans',
    price: 4.80,
    style: "Rhubarb & Custard Sour",
    abv: "3.4%",
    description: "Tart rhubarb meets creamy custard in this nostalgic sour.",
    image: NEW_BEER_IMAGE
  },
  {
    id: 5,
    name: "Cherry Waves",
    category: 'cans',
    price: 5.00,
    style: "Cherry Coffee Sour",
    abv: "5.4%",
    description: "Complex blend of tart cherry and roasted coffee notes.",
    image: NEW_BEER_IMAGE
  },
  {
    id: 6,
    name: "Loomer",
    category: 'cans',
    price: 6.00,
    style: "NEIPA",
    abv: "6.5%",
    description: "Thick, juicy and loud. Our flagship New England IPA.",
    image: NEW_BEER_IMAGE,
    isNew: true
  },
  {
    id: 8,
    name: "Volume VI",
    category: 'cans',
    price: 4.50,
    style: "Helles Lager",
    abv: "4.9%",
    description: "Crisp, clean, unfiltered Helles style lager.",
    image: NEW_BEER_IMAGE
  },

  // --- GIFT PACKS ---
  {
    id: 101,
    name: "Three Pack Gift Set",
    category: 'gift-packs',
    price: 12.00,
    description: "Pick any 3 cans. Presented in a branded gift box.",
    image: NEW_GIFT_IMAGE
  },
  {
    id: 102,
    name: "Six Pack Gift Set",
    category: 'gift-packs',
    price: 22.00,
    description: "A selection of 6 of our finest beers in a carry case.",
    image: NEW_GIFT_IMAGE
  },
  {
    id: 103,
    name: "12 Pack Gift Set",
    category: 'gift-packs',
    price: 40.00,
    description: "The ultimate fridge filler. 12 mixed cans.",
    image: NEW_GIFT_IMAGE,
    isNew: true
  },
  
  // --- MERCH ---
  {
    id: 201,
    name: "Liquid Light Pin Badge",
    category: 'merch',
    price: 4.00,
    description: "Enamel pin badge featuring our triangle logo.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 202,
    name: "Liquid Light Patches (Iron-On)",
    category: 'merch',
    price: 7.00,
    description: "Embroidered iron-on patch. Perfect for jackets.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 204,
    name: "Liquid Light T-Shirt - Black",
    category: 'merch',
    price: 25.00,
    description: "Classic black tee with white logo print.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 205,
    name: "Liquid Light T-Shirt - Blue",
    category: 'merch',
    price: 25.00,
    description: "Blue tie-dye tee with white logo.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 206,
    name: "Liquid Light T-Shirt - Rainbow",
    category: 'merch',
    price: 25.00,
    description: "Vibrant rainbow spiral tie-dye tee.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 207,
    name: "Liquid Light T-Shirt - Cotton Candy",
    category: 'merch',
    price: 25.00,
    description: "Pastel pink and purple tie-dye tee.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 208,
    name: "Liquid Light Hoodie - Black Tie Dye",
    category: 'merch',
    price: 45.00,
    description: "Black and charcoal tie-dye hoodie. Super soft.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 209,
    name: "Liquid Light Hoodie - Cotton Candy",
    category: 'merch',
    price: 45.00,
    description: "Cotton candy tie-dye hoodie.",
    image: NEW_MERCH_IMAGE
  },
  {
    id: 210,
    name: "Liquid Light Hoodie - Rainbow",
    category: 'merch',
    price: 45.00,
    description: "Rainbow tie-dye hoodie. Stand out from the crowd.",
    image: NEW_MERCH_IMAGE
  },


  // --- MINI KEGS ---
  {
    id: 301,
    name: "Day Tripper",
    category: 'mini-kegs',
    price: 32.50,
    style: "Pale",
    abv: "4.3%",
    description: "5L Mini Keg. A sessionable Pale Ale.",
    image: NEW_KEG_IMAGE
  },
  {
    id: 302,
    name: "Ramble On",
    category: 'mini-kegs',
    price: 30.00,
    style: "Pale",
    abv: "3.9%",
    description: "5L Mini Keg. Light, crisp and refreshing.",
    image: NEW_KEG_IMAGE
  },
  {
    id: 303,
    name: "Starburster",
    category: 'mini-kegs',
    price: 32.50,
    style: "Hazy Session IPA",
    abv: "4.5%",
    description: "5L Mini Keg. Juicy, hazy and crushable.",
    image: NEW_KEG_IMAGE
  },
  {
    id: 304,
    name: "Dark Hollow",
    category: 'mini-kegs',
    price: 30.00,
    style: "Session Porter",
    abv: "3.7%",
    description: "5L Mini Keg. Rich, dark and smooth.",
    image: NEW_KEG_IMAGE
  },
  {
    id: 305,
    name: "Wizard of Finance",
    category: 'mini-kegs',
    price: 30.00,
    style: "Modern Bitter",
    abv: "4.2%",
    description: "5L Mini Keg. A modern take on a classic style.",
    image: NEW_KEG_IMAGE
  },
  {
    id: 306,
    name: "Sweet & Dandy",
    category: 'mini-kegs',
    price: 35.00,
    style: "Stout",
    abv: "5.4%",
    description: "5L Mini Keg. Dark Chocolate & Gingercake Stout.",
    image: NEW_KEG_IMAGE
  },

  // --- EVENTS ---
  {
    id: 401,
    name: "Brewery Tour & Tasting",
    category: 'events',
    price: 15.00,
    description: "A guided tour of our 12bbl brew kit followed by a flight of 3 beers in the taproom. Learn about our brewing process, ingredients, and the history of Liquid Light.",
    image: "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=800&auto=format&fit=crop",
    date: "Saturdays 12pm"
  },
  {
    id: 402,
    name: "Liquid Light Sessions",
    category: 'events',
    price: 10.00,
    description: "Monthly psych-rock and funk night. Live DJs spinning vinyl, immersive liquid light projections, and great vibes. Ticket includes your first drink.",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
    date: "Nov 10, 2024"
  },
  {
    id: 403,
    name: "Taproom Quiz Night",
    category: 'events',
    price: 2.00,
    description: "Test your general knowledge! Prizes for 1st place, 2nd place, and Best Team Name. Teams of up to 6. Price per person.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop",
    date: "Every Thursday"
  }
];

type ShopCategory = 'all' | 'cans' | 'gift-packs' | 'merch' | 'mini-kegs' | 'events';

interface ShopProps {
  initialCategory?: ShopCategory | string;
  onNavigate: (section: string) => void;
  cart: Product[];
  addToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ initialCategory = 'all', onNavigate, cart, addToCart }) => {
  const [filter, setFilter] = useState<ShopCategory>((initialCategory as ShopCategory) || 'all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFilter(initialCategory as ShopCategory);
    }
  }, [initialCategory]);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const categories: { id: ShopCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'cans', label: 'Cans' },
    { id: 'gift-packs', label: 'Gift Packs' },
    { id: 'merch', label: 'Merch' },
    { id: 'mini-kegs', label: 'Mini Kegs' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <>
      <div className="pt-20 md:pt-24 pb-12 min-h-screen relative z-10 bg-black/95">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12 gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <ScrollFloat 
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='top 95%'
                scrollEnd='bottom 50%'
                stagger={0.03}
                textClassName="text-6xl md:text-9xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]"
              >
                SHOP
              </ScrollFloat>
              <p className="text-neutral-200 text-base md:text-lg font-medium mt-1 md:mt-4">Order online for home delivery.</p>
            </div>
            
            {/* Removed cart button from header */}
          </div>

          {/* Categories Tabs - Scrollable on mobile */}
          <div className="mb-6 md:mb-16 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              <div className="flex gap-2 min-w-max">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter(cat.id)}
                      className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all border ${
                        filter === cat.id 
                          ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                          : 'bg-neutral-900/50 text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
              </div>
          </div>

          {/* Product Grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map((product) => (
              <Reveal key={product.id}>
                <div onClick={() => openProduct(product)} className="cursor-pointer h-full">
                {['cans', 'mini-kegs', 'merch', 'gift-packs'].includes(product.category) ? (
                  // --- FLOATING RENDER FOR CANS, KEGS, MERCH, GIFTS ---
                  <div className="group flex flex-col items-center relative h-full">
                     {product.isNew && (
                        <div className="absolute top-0 right-2 md:right-10 z-20 bg-fuchsia-500 text-white text-[8px] md:text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(232,121,249,0.5)] animate-pulse">
                          New
                        </div>
                     )}
                     
                     <BeerCan 
                        name={product.name} 
                        style={product.style} 
                        image={product.image}
                        type={product.category === 'mini-kegs' ? 'keg' : 'can'}
                        className="mb-2 md:mb-8"
                     />
                     
                     <div className="text-center z-10 w-full mt-auto">
                        <h3 className="text-base md:text-2xl font-bold text-white font-['Oswald'] uppercase mb-1 leading-tight group-hover:text-orange-400 transition-colors">{product.name}</h3>
                        
                        {(product.style || product.abv) && (
                          <div className="text-[10px] md:text-xs text-orange-400 font-bold uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
                             {product.style && <span>{product.style}</span>}
                             {product.style && product.abv && <span className="w-1 h-1 bg-neutral-500 rounded-full" />}
                             {product.abv && <span>{product.abv}</span>}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-center gap-3 md:gap-6 mt-2 md:mt-4">
                            <span className="text-base md:text-xl font-bold text-white">£{product.price.toFixed(2)}</span>
                            <button 
                               onClick={(e) => handleAddToCart(e, product)} 
                               className="bg-white hover:bg-orange-500 text-black hover:text-white w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-110"
                            >
                                <Plus size={14} className="md:w-5 md:h-5" />
                            </button>
                        </div>
                     </div>
                  </div>
                ) : (
                  // --- CARD RENDER FOR EVENTS ---
                  <div className="group relative flex flex-col items-center h-full">
                    <div className="aspect-[4/5] w-full max-w-[280px] overflow-hidden relative rounded-xl md:rounded-2xl mb-3 md:mb-6 border border-white/10 group-hover:border-orange-500/30 transition-all duration-500 shadow-xl group-hover:-translate-y-2">
                       <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                       />
                       
                       {product.category === 'events' && product.date && (
                          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/80 backdrop-blur-md px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-white/10 flex items-center gap-2 z-20">
                             <Calendar size={10} className="md:w-3 md:h-3 text-fuchsia-400" />
                             <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-white">{product.date}</span>
                          </div>
                       )}
                       
                       <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                           <button 
                               onClick={(e) => handleAddToCart(e, product)} 
                               className="bg-white text-black p-2 md:p-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors shadow-lg"
                            >
                                <Plus size={16} className="md:w-5 md:h-5" />
                            </button>
                       </div>
                    </div>
                    
                    <div className="text-center w-full px-1 mt-auto">
                        <h3 className="text-base md:text-xl font-bold text-white font-['Oswald'] uppercase mb-0.5 leading-tight group-hover:text-orange-400 transition-colors">{product.name}</h3>
                        
                        <p className="text-neutral-300 text-xs md:text-sm mb-2 max-w-[200px] mx-auto line-clamp-2 leading-relaxed hidden sm:block">{product.description}</p>
                        
                        <div className="text-sm md:text-lg font-bold text-white border-t border-white/5 pt-2 md:pt-4 w-full flex justify-center items-center gap-1 md:gap-2">
                          {product.category === 'events' && <span className="text-[10px] md:text-xs font-normal text-neutral-400 mr-1 md:mr-2">Ticket:</span>}
                          £{product.price.toFixed(2)}
                        </div>
                    </div>
                  </div>
                )}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
      
      {/* Floating Checkout Button - Bottom Right */}
      {cart.length > 0 && (
         <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 animate-[fadeIn_0.3s_ease-out]">
            <button 
                onClick={() => onNavigate('checkout')}
                className="bg-neutral-800/90 backdrop-blur-md hover:bg-neutral-700 text-white border border-orange-500/50 px-4 py-2 md:pl-6 md:pr-8 md:py-4 rounded-full font-bold flex items-center gap-2 md:gap-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transform hover:scale-105 transition-all duration-300 group"
             >
                <div className="relative">
                  <ShoppingBag className="text-orange-500 w-4 h-4 md:w-7 md:h-7" />
                  <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 w-3.5 h-3.5 md:w-5 md:h-5 bg-orange-600 text-white rounded-full flex items-center justify-center text-[9px] md:text-xs font-black animate-bounce shadow-sm">
                      {cart.length}
                  </span>
                </div>
                <div className="flex flex-col items-start leading-none">
                   <span className="text-xs md:text-lg font-['Oswald'] uppercase tracking-widest text-white">Checkout</span>
                   <span className="text-[9px] md:text-xs opacity-70 font-mono text-neutral-300">
                      £{cart.reduce((a, b) => a + b.price, 0).toFixed(2)}
                   </span>
                </div>
             </button>
         </div>
      )}

      <ProductModal 
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={() => selectedProduct && addToCart(selectedProduct)}
      />
    </>
  );
};

export default Shop;