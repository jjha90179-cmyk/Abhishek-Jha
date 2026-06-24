import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    'Hi THE OM GYM FITNESS CLUB! I am visiting your premium website and would like to register for a Free Trial or check membership plans.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40" id="floating-whatsapp-container">
      {/* Outer pulsing ring for premium call-to-action emphasis */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 scale-125 animate-ping pointer-events-none" />
      
      <motion.a
        href={`https://wa.me/919876543210?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire via WhatsApp Chat"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-green-500/35 transform hover:-translate-y-1 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7 stroke-[2] fill-current" />
      </motion.a>
    </div>
  );
}
