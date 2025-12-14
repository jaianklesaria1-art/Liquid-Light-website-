import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-neutral-900 border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out] max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors"
        >
          <X size={20} />
        </button>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
           <img 
             src={product.image} 
             alt={product.name} 
             className="absolute inset-0 w-full h-full object-cover" 
           />
           {product.category === 'events' && product.date && (
              <div className="absolute bottom-4 left-4 bg-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {product.date}
              </div>
           )}
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
           <div className="mb-auto">
             <span className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2 block">
               {product.category.replace('-', ' ')}
             </span>
             <h2 className="text-2xl md:text-3xl font-['Oswald'] font-bold text-white mb-4 uppercase leading-tight">
               {product.name}
             </h2>
             
             <div className="w-12 h-1 bg-white/20 mb-6" />

             <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-['Space_Grotesk'] mb-6">
               {product.description}
             </p>

             {(product.style || product.abv) && (
                 <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex gap-4 text-xs font-bold uppercase text-neutral-400 mb-6">
                    {product.style && (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-neutral-500 mb-1">Style</span>
                        <span className="text-white">{product.style}</span>
                      </div>
                    )}
                    {product.abv && (
                      <div className="flex flex-col border-l border-white/10 pl-4">
                         <span className="text-[10px] text-neutral-500 mb-1">ABV</span>
                         <span className="text-white">{product.abv}</span>
                      </div>
                    )}
                 </div>
             )}
           </div>
           
           <div className="mt-4 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex flex-col">
                 <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Price</span>
                 <span className="text-2xl font-bold text-white">£{product.price.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => { onAddToCart(); onClose(); }}
                className="flex-1 bg-white text-black font-bold uppercase tracking-wider py-3 px-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group"
              >
                 <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" /> 
                 Add to Cart
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;