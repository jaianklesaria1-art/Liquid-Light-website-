import React from 'react';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-neutral-900 w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Form */}
        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center relative z-10 bg-neutral-900">
          <h2 className="text-4xl font-bold text-white font-['Oswald'] mb-2">Join Us!</h2>
          <p className="text-neutral-300 font-bold mb-8 font-['Space_Grotesk'] text-lg">
            Subscribe to our newsletter for all the latest beer releases and taproom updates!
          </p>

          <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-neutral-400 mb-2">Email</label>
              <input 
                type="email" 
                autoFocus
                className="w-full bg-white text-neutral-900 px-4 py-3 rounded font-medium focus:outline-none focus:ring-4 focus:ring-amber-500/50"
              />
            </div>

            <button className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 rounded uppercase tracking-wider transition-colors font-['Space_Grotesk'] shadow-lg hover:shadow-orange-500/20">
              Subscribe
            </button>
          </form>

          <div className="mt-8 text-[10px] text-neutral-500 leading-relaxed max-w-sm">
            By completing this form, I agree to receive emails, with the understanding that I may easily opt-out of these communications at any time after signing up.
            <br/><br/>
            *By subscribing to our mailing list, participants agree to the <a href="#" className="underline hover:text-neutral-300">terms and conditions</a>.
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block w-1/2 bg-neutral-800 relative">
          <img 
            src="https://images.unsplash.com/photo-1571216682057-a9310892d131?q=80&w=1000&auto=format&fit=crop" 
            alt="Brewery Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle branding overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;