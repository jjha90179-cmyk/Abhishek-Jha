import { motion } from 'motion/react';
import { Play, Calendar, Star, Users, MapPin, Clock } from 'lucide-react';
import heroImage from '../assets/images/hero_gym_banner_1782310689156.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onTrialClick: () => void;
}

export default function Hero({ onJoinClick, onTrialClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Om Gym Premium Fitness Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay and Gradient Shading */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(9,9,11,0.2)_0%,rgba(9,9,11,0.9)_90%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/30" />
      </div>

      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center text-center">
        
        {/* Upper Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2 bg-zinc-900/90 backdrop-blur-md border border-amber-500/20 px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-black/40"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-300 font-semibold flex items-center gap-1.5 font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-500" /> Open Today Until 9:00 PM
          </span>
        </motion.div>

        {/* Title & Gym Branding */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-500 font-black mb-3"
        >
          THE ULTIMATE FITNESS DESTINATION IN BHANIA WALA
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-brand font-black text-white tracking-wider uppercase leading-none max-w-5xl mb-6"
        >
          THE OM GYM
        </motion.h1>

        {/* Catchy Main Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-display text-zinc-200 tracking-wide font-medium max-w-3xl mb-12"
        >
          "Transform Your Body, Transform Your Life"
        </motion.p>

        {/* CTA Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mb-20"
        >
          <button
            onClick={onJoinClick}
            id="hero-cta-join"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-950 font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <Play className="w-4 h-4 fill-current stroke-[2.5]" /> Join Club Now
          </button>
          <button
            onClick={onTrialClick}
            id="hero-cta-trial"
            className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-white border border-amber-500/30 hover:border-amber-500 text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-xl flex items-center justify-center gap-2 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-amber-500 stroke-[2]" /> Book Free Trial
          </button>
        </motion.div>

        {/* Bottom Social Trust Indicators (Bento Stats) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl text-left"
        >
          {/* Stat 1 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 p-4 rounded-2xl flex items-center space-x-3.5 shadow-lg">
            <div className="p-3 bg-amber-500/10 rounded-xl">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">4.7 / 5</p>
              <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-1">131 Google Reviews</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 p-4 rounded-2xl flex items-center space-x-3.5 shadow-lg">
            <div className="p-3 bg-amber-500/10 rounded-xl">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">1000+</p>
              <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-1">Active Members</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 p-4 rounded-2xl flex items-center space-x-3.5 shadow-lg col-span-1">
            <div className="p-3 bg-amber-500/10 rounded-xl">
              <MapPin className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-white leading-none">Bhania Wala</p>
              <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-1">Uttarakhand, IN</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/60 p-4 rounded-2xl flex items-center space-x-3.5 shadow-lg col-span-1">
            <div className="p-3 bg-amber-500/10 rounded-xl">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">05:00 AM</p>
              <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider mt-1">Until 09:00 PM</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
