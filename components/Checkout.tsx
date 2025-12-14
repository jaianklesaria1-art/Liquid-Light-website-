import React from 'react';
import { ArrowLeft, Trash2, CreditCard, Lock, CheckCircle, Home } from 'lucide-react';
import { Product, SectionId } from '../types';
import { Reveal } from './Reveal';

interface CheckoutProps {
  cart: Product[];
  removeFromCart: (index: number) => void;
  onBack: () => void;
  onNavigate: (section: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, removeFromCart, onBack, onNavigate }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  // Group items for display
  const groupedItems = cart.reduce((acc, item) => {
    const existing = acc.find(i => i.product.id === item.id);
    if (existing) {
      existing.quantity += 1;
      existing.indices.push(cart.indexOf(item)); // Keep track of indices for removal
    } else {
      acc.push({ product: item, quantity: 1, indices: [cart.indexOf(item)] });
    }
    return acc;
  }, [] as { product: Product; quantity: number; indices: number[] }[]);

  return (
    <div className="pt-24 pb-12 min-h-screen relative z-10 bg-black/95">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="flex items-center gap-6 mb-8">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Shop
            </button>

            <button 
              onClick={() => onNavigate(SectionId.HERO)}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
              Home
            </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-['Oswald'] font-bold text-white mb-12 uppercase tracking-wide">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-white font-['Oswald'] mb-6 uppercase">Your Order</h2>
                
                {cart.length === 0 ? (
                  <div className="text-center py-12 text-neutral-400">
                    <p>Your cart is empty.</p>
                    <button onClick={onBack} className="mt-4 text-orange-500 hover:text-white font-bold underline">Start Shopping</button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-neutral-700">
                      {groupedItems.map((group, i) => (
                        <div key={`${group.product.id}-${i}`} className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-white/5">
                          <div className="w-16 h-16 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={group.product.image} alt={group.product.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white leading-tight">{group.product.name}</h3>
                            <p className="text-sm text-neutral-400">{group.product.style}</p>
                            <div className="text-xs text-orange-400 font-bold mt-1">
                              Qty: {group.quantity} x £{group.product.price.toFixed(2)}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                             <span className="font-bold text-white">£{(group.product.price * group.quantity).toFixed(2)}</span>
                             <button 
                               onClick={() => removeFromCart(group.indices[0])} // Remove one instance
                               className="text-neutral-500 hover:text-red-500 transition-colors"
                               title="Remove one"
                             >
                               <Trash2 size={16} />
                             </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-white/10 pt-6 space-y-3">
                      <div className="flex justify-between text-neutral-300">
                        <span>Subtotal</span>
                        <span>£{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-neutral-300">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? <span className="text-green-400 font-bold">FREE</span> : `£${shipping.toFixed(2)}`}</span>
                      </div>
                      <div className="flex justify-between text-white text-xl font-bold pt-4 border-t border-white/10">
                        <span>Total</span>
                        <span className="text-orange-400">£{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                   <Lock className="text-orange-500" size={20} />
                   <h2 className="text-2xl font-bold text-white font-['Oswald'] uppercase">Secure Checkout</h2>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Contact */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Contact Info</h3>
                    <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                  </div>

                  {/* Shipping */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Shipping Address</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                      <input type="text" placeholder="Last Name" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                    <input type="text" placeholder="Address" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="City" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                      <input type="text" placeholder="Postcode" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Payment</h3>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-3.5 text-neutral-500" size={20} />
                      <input type="text" placeholder="Card Number" className="w-full bg-black border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                      <input type="text" placeholder="CVC" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-fuchsia-600 to-orange-500 hover:from-fuchsia-500 hover:to-orange-400 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-lg shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 mt-8">
                     <CheckCircle size={20} /> Pay £{total.toFixed(2)}
                  </button>

                  <p className="text-center text-xs text-neutral-500 mt-4 flex items-center justify-center gap-2">
                    <Lock size={12} /> Encrypted and Secure
                  </p>

                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;