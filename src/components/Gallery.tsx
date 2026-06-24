import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, Eye } from 'lucide-react';
import { GalleryItem } from '../types';
import heroImage from '../assets/images/hero_gym_banner_1782310689156.jpg';
import dumbbellsImage from '../assets/images/strength_dumbbells_1782310717473.jpg';
import trainerImage from '../assets/images/trainer_session_1782310706450.jpg';
import cardioImage from '../assets/images/cardio_zone_1782310729787.jpg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'equipment' | 'cardio' | 'workout'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Premium Pin-Select Equipment',
      category: 'equipment',
      image: dumbbellsImage,
    },
    {
      id: 'g2',
      title: 'Commercial Cardio Station',
      category: 'cardio',
      image: cardioImage,
    },
    {
      id: 'g3',
      title: 'High Intensity Dumbbell training',
      category: 'workout',
      image: trainerImage,
    },
    {
      id: 'g4',
      title: 'The Om Gym - Golden Interior',
      category: 'equipment',
      image: heroImage,
    },
    {
      id: 'g5',
      title: 'Functional Free Weight Station',
      category: 'equipment',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'g6',
      title: 'Aerobic Stamina and Conditioning',
      category: 'cardio',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'g7',
      title: 'Stretching and Mobility Area',
      category: 'workout',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'g8',
      title: 'Advanced Olympic Lifting',
      category: 'workout',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-amber-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            THE VISUAL EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            THE OM GYM <span className="gold-gradient-text">GALLERY</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            Have a virtual tour of our premium infrastructure, trainers, dumbbells ranks, modern layout floors, and cardio setups in Bhania Wala.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-filters">
          {(['all', 'equipment', 'cardio', 'workout'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-amber-500 border-amber-500 text-zinc-950 shadow-md shadow-amber-500/10'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-zinc-900 shadow-lg"
                onClick={() => setLightboxImage(item.image)}
              >
                {/* Photo Element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover Mask */}
                <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="bg-amber-500 text-zinc-950 p-2.5 rounded-full mb-3 shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-white text-sm font-bold tracking-wide font-display uppercase leading-tight mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h4>
                  <span className="text-amber-500 text-[10px] uppercase tracking-widest font-mono transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900/60 border border-zinc-800"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Photo Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="Gallery full screen view"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
