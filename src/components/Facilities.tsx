import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dumbbell, Heart, Layers, Maximize, Lock, CheckCircle, Wind } from 'lucide-react';
import dumbbellsImage from '../assets/images/strength_dumbbells_1782310717473.jpg';
import cardioImage from '../assets/images/cardio_zone_1782310729787.jpg';

export default function Facilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const facilities = [
    {
      name: 'Modern Equipment',
      description: 'Fully stocked with state-of-the-art machines from world-class brands. Enjoy perfect resistance arcs, smooth wire tracks, and specialized single-isolate muscle pin stacks.',
      image: dumbbellsImage,
      icon: <Dumbbell className="w-5 h-5" />,
      features: ['Selectorized Stack Machines', 'Ergonomic Seat Positioners', 'Kevlar Cabling Tracks'],
    },
    {
      name: 'Cardio Zone',
      description: 'A dedicated line-up of modern commercial-grade treadmills, interactive spin cycles, heavy-flywheel cross trainers, and rowing ergonomics with digital panels.',
      image: cardioImage,
      icon: <Heart className="w-5 h-5" />,
      features: ['Treadmills with shock absorbers', 'AeroSpin bikes', 'Digital display telemetry'],
    },
    {
      name: 'Weight Training Area',
      description: 'The epicenter of raw power. Fully loaded racks of luxury black-and-gold chrome dumbbells, high-strength barbells, solid power cages, and heavy-duty adjustable benches.',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600',
      icon: <Layers className="w-5 h-5" />,
      features: ['Dumbbells up to 40kg+', 'Olympic grade lifting bars', 'Rubber-padded drop mats'],
    },
    {
      name: 'Spacious Workout Floor',
      description: 'A wide-open, clutter-free training zone dedicated to dynamic warmups, core strengthening, kettlebell complexes, and plyometric footwork.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
      icon: <Maximize className="w-5 h-5" />,
      features: ['Slam-ball impact zones', 'High-density workout mats', 'Suspension trainer mounts'],
    },
    {
      name: 'Locker Area',
      description: 'Safe and secure locking units to stow away your variables, personal backpacks, and devices. Always kept exceptionally neat and monitored.',
      image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=600',
      icon: <Lock className="w-5 h-5" />,
      features: ['Keypad digital lock cells', 'Spacious storage shelves', 'Dressing mirrors & grooming'],
    },
    {
      name: 'Clean Environment',
      description: 'We prioritize premium sanitation. Direct hygiene agents sanitize seats, handles, and bars constantly. Hand sanitizers are placed at all prominent nodes.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600',
      icon: <CheckCircle className="w-5 h-5" />,
      features: ['Hourly disinfect procedures', 'Towel-required training policy', 'Air freshness atomizers'],
    },
    {
      name: 'Proper Ventilation',
      description: 'Equipped with heavy duty ceiling sweepers, extraction fans, and specialized air ducts ensuring fresh oxygen feeds constantly, keeping workouts fresh.',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
      icon: <Wind className="w-5 h-5" />,
      features: ['High-volume low-speed (HVLS) fans', 'Constant fresh air extraction', 'Crisp humidity control'],
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            PREMIUM AMENITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            OUR WORLD-CLASS <span className="gold-gradient-text">FACILITIES</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            At THE OM GYM, we invest in creating the ultimate habitat for high-performance fitness. Explore our meticulously designed spaces.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="facilities-container">
          
          {/* Left: Tab Selectors (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col space-y-2.5 justify-center">
            {facilities.map((fac, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center space-x-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-r from-amber-500/10 to-amber-500/0 border-amber-500 text-amber-500 shadow-md shadow-amber-500/5'
                    : 'bg-zinc-950/40 border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className={`p-2.5 rounded-lg flex-shrink-0 ${
                  activeIndex === idx ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400'
                }`}>
                  {fac.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-wide">
                    {fac.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Content View (col-span-8) */}
          <div className="lg:col-span-8 bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl min-h-[460px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 h-full items-stretch"
              >
                {/* Photo Pane */}
                <div className="relative min-h-[250px] md:min-h-full overflow-hidden">
                  <img
                    src={facilities[activeIndex].image}
                    alt={facilities[activeIndex].name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/30 to-transparent" />
                </div>

                {/* Info Pane */}
                <div className="p-8 flex flex-col justify-center bg-zinc-950 z-10">
                  <span className="text-amber-500 text-xs font-mono tracking-widest uppercase mb-1">
                    Featured Amenity
                  </span>
                  <h3 className="text-white text-2xl font-bold font-brand uppercase tracking-wide mb-4">
                    {facilities[activeIndex].name}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                    {facilities[activeIndex].description}
                  </p>

                  <div className="border-t border-zinc-900 pt-6">
                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
                      Highlights & Inclusions
                    </h4>
                    <ul className="space-y-2">
                      {facilities[activeIndex].features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-zinc-300 text-xs font-medium font-sans">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
